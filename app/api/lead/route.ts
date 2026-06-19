import { NextResponse, after } from 'next/server';
import { Resend } from 'resend';
import { google } from 'googleapis';

/**
 * Route du TUNNEL PUBLICITAIRE Pompe à chaleur (/aides-pompe-a-chaleur).
 * Reçoit la demande du FORMULAIRE DE CONTACT du tunnel (réutilisé depuis le site)
 * et fait exactement le même travail que /api/contact (email vers l'agence détectée
 * + écriture dans le MÊME Google Sheet, donc le même dashboard) PLUS une inscription
 * dans la liste Brevo dédiée « Leads PAC - Ads ».
 *
 * /api/contact n'est pas modifié : seul le tunnel pointe ici (prop `endpoint` du
 * composant ContactForm). On réutilise les mêmes variables d'environnement
 * (RESEND_API_KEY, GOOGLE_*), plus BREVO_API_KEY et BREVO_LIST_ID_PAC.
 */

// ─── Auth Google (cache module, comme /api/contact) ───
let _googleAuth: InstanceType<typeof google.auth.JWT> | null = null;
function getGoogleAuth() {
  if (!_googleAuth) {
    _googleAuth = new google.auth.JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
  }
  return _googleAuth;
}

function getEmailConfig() {
  return {
    agenceEmails: {
      clamecy: process.env.CONTACT_EMAIL_CLAMECY || 'agence.clamecy@groupe-merlin.fr',
      corbigny: process.env.CONTACT_EMAIL_CORBIGNY || 'agence.corbigny@groupe-merlin.fr',
    } as Record<string, string>,
    fallbackEmail: process.env.CONTACT_TO_EMAIL || 'contact@groupe-merlin.fr',
    fromEmail: process.env.CONTACT_FROM_EMAIL || 'Groupe Merlin <onboarding@resend.dev>',
  };
}

type ContactPayload = {
  prenom?: string;
  nom?: string;
  email?: string;
  telephone?: string;
  code_postal?: string;
  projet?: string;
  message?: string;
  agence?: string;
  source?: string;
};

type LeadData = {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  code_postal: string;
  projet: string;
  message: string;
  agence: string;
  source: string;
};

const PROJET_LABELS: Record<string, string> = {
  'pompe-a-chaleur': 'Pompe à chaleur',
  'climatisation': 'Climatisation',
  'chaudieres-poele-granules': 'Chaudières & Poêle à granulés',
  'salle-de-bain': 'Salle de bain clé en main',
  'adoucisseur': "Adoucisseur d'eau",
  'eau-de-boisson': 'Eau de boisson',
  'adoucisseur-eau-de-boisson': "Adoucisseur d'eau + Eau de boisson",
  'panneaux-photovoltaiques': 'Panneaux photovoltaïques',
  'autre': 'Autre / multi-postes',
};

const AGENCE_LABELS: Record<string, string> = {
  'clamecy': 'Clamecy',
  'corbigny': 'Corbigny',
  'mailly-la-ville': 'Mailly-la-Ville',
};

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function formatPhone(tel: string): string {
  return tel.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5');
}

function buildEmailHtml(d: LeadData): string {
  const e = (s: string) => escapeHtml(s);
  return `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;color:#171723;">
      <h2 style="color:#171723;border-bottom:2px solid #FAC864;padding-bottom:8px;">Nouvelle demande de devis — Pompe à chaleur (pub)</h2>
      <p style="color:#666;margin:0 0 16px;">Demande issue de la campagne Facebook / Instagram (tunnel pompe à chaleur).</p>
      <p><strong>Agence détectée :</strong> ${e(AGENCE_LABELS[d.agence] || d.agence)}</p>
      <table style="width:100%;border-collapse:collapse;margin-top:16px;">
        <tr><td style="padding:8px 0;color:#666;width:160px;">Prénom</td><td style="padding:8px 0;"><strong>${e(d.prenom)}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#666;">Nom</td><td style="padding:8px 0;"><strong>${e(d.nom)}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${e(d.email)}">${e(d.email)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#666;">Téléphone</td><td style="padding:8px 0;"><a href="tel:${e(d.telephone)}"><strong>${e(formatPhone(d.telephone))}</strong></a></td></tr>
        <tr><td style="padding:8px 0;color:#666;">Code postal</td><td style="padding:8px 0;">${e(d.code_postal)}</td></tr>
        <tr><td style="padding:8px 0;color:#666;">Type de projet</td><td style="padding:8px 0;"><strong>${e(PROJET_LABELS[d.projet] || d.projet)}</strong></td></tr>
      </table>
      ${d.message ? `<div style="margin-top:24px;padding:16px;background:#EAE1CD;border-radius:8px;"><p style="margin:0 0 8px;color:#666;font-size:14px;">Message du client :</p><p style="margin:0;white-space:pre-wrap;">${e(d.message)}</p></div>` : ''}
    </div>
  `.trim();
}

async function sendEmailNotification(d: LeadData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[api/lead] RESEND_API_KEY absent — email non envoyé');
    return;
  }
  const { agenceEmails, fallbackEmail, fromEmail } = getEmailConfig();
  const resend = new Resend(apiKey);
  const toEmail = agenceEmails[d.agence] || fallbackEmail;
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: d.email,
    subject: `Nouveau lead PAC (pub) — ${d.prenom} ${d.nom}`,
    html: buildEmailHtml(d),
  });
  if (error) throw new Error(`Resend: ${JSON.stringify(error)}`);
}

// ─── Brevo : liste dédiée « Leads PAC - Ads » ───
async function addToBrevo(d: LeadData): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = Number(process.env.BREVO_LIST_ID_PAC);
  if (!apiKey || !Number.isFinite(listId)) {
    console.warn('[api/lead] BREVO_API_KEY / BREVO_LIST_ID_PAC absents — contact Brevo non créé');
    return;
  }
  const sms = '+33' + d.telephone.replace(/^0/, '');
  const headers = { 'api-key': apiKey, 'Content-Type': 'application/json', accept: 'application/json' };
  const doPost = (body: Record<string, unknown>) =>
    fetch('https://api.brevo.com/v3/contacts', { method: 'POST', headers, body: JSON.stringify(body) });

  let res = await doPost({
    email: d.email,
    attributes: { PRENOM: d.prenom, NOM: d.nom, SMS: sms },
    listIds: [listId],
    updateEnabled: true,
  });
  if (!res.ok && res.status !== 204) {
    const txt = await res.text().catch(() => '');
    console.warn('[api/lead] Brevo (avec attributs) a échoué, retry sans attributs :', res.status, txt);
    res = await doPost({ email: d.email, listIds: [listId], updateEnabled: true });
    if (!res.ok && res.status !== 204) {
      const txt2 = await res.text().catch(() => '');
      throw new Error(`Brevo: ${res.status} ${txt2}`);
    }
  }
}

// ─── Google Sheet : MÊME feuille / mêmes colonnes que /api/contact (A:I) ───
async function appendLeadToSheet(d: LeadData): Promise<void> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !sheetId) {
    console.warn('[api/lead] Google Sheets credentials absents — lead non enregistré');
    return;
  }
  const sheets = google.sheets({ version: 'v4', auth: getGoogleAuth() });
  const now = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
  // On marque l'origine dans le message pour distinguer les leads du tunnel pub
  // dans le dashboard, sans casser la structure de colonnes existante.
  const message = `[Tunnel pub PAC] ${d.message}`.trim();
  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'A:I',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[
        now,
        d.prenom,
        d.nom,
        d.email,
        formatPhone(d.telephone),
        d.code_postal,
        PROJET_LABELS[d.projet] || d.projet,
        AGENCE_LABELS[d.agence] || d.agence,
        message,
      ]],
    },
  });
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const required: (keyof ContactPayload)[] = [
      'prenom', 'nom', 'email', 'telephone', 'code_postal', 'projet',
    ];
    for (const k of required) {
      if (!body[k] || typeof body[k] !== 'string' || (body[k] as string).trim() === '') {
        return NextResponse.json({ ok: false, error: `Champ manquant : ${k}` }, { status: 400 });
      }
    }

    const phone = String(body.telephone).replace(/\s+/g, '');
    if (!/^0[1-9]\d{8}$/.test(phone)) {
      return NextResponse.json({ ok: false, error: 'Téléphone invalide (10 chiffres).' }, { status: 400 });
    }

    const email = String(body.email);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: 'Email invalide.' }, { status: 400 });
    }

    const data: LeadData = {
      prenom: String(body.prenom),
      nom: String(body.nom),
      email,
      telephone: phone,
      code_postal: String(body.code_postal),
      projet: String(body.projet),
      message: String(body.message || ''),
      agence: String(body.agence || 'clamecy'),
      source: String(body.source || 'tunnel-pac'),
    };

    // GATING : la notification email part avant de confirmer le lead. Si elle échoue,
    // on renvoie une erreur → pas de page merci → pas de Pixel Lead compté à tort.
    await sendEmailNotification(data);

    // Brevo + Google Sheet en arrière-plan (best-effort).
    after(async () => {
      const results = await Promise.allSettled([addToBrevo(data), appendLeadToSheet(data)]);
      results.forEach((r, i) => {
        if (r.status === 'rejected') {
          console.error(`[api/lead] ${i === 0 ? 'Brevo' : 'Sheets'} (background) :`, r.reason);
        }
      });
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('[api/lead] Exception :', e);
    return NextResponse.json({ ok: false, error: 'Erreur serveur.' }, { status: 500 });
  }
}
