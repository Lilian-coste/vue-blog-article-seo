import { NextResponse, after } from 'next/server';
import { Resend } from 'resend';
import { google } from 'googleapis';

// Auth Google mis en cache au niveau module pour éviter une authentification JWT à chaque requête
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
      clamecy:  process.env.CONTACT_EMAIL_CLAMECY  || 'agence.clamecy@groupe-merlin.fr',
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
  cgu?: string | boolean;
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

function buildEmailHtml(d: LeadData): string {
  const e = (s: string) => escapeHtml(s);
  return `
    <div style="font-family:Arial,sans-serif;max-width:640px;margin:0 auto;padding:24px;color:#171723;">
      <h2 style="color:#171723;border-bottom:2px solid #FAC864;padding-bottom:8px;">Nouvelle demande de devis</h2>
      <p><strong>Agence détectée :</strong> ${e(AGENCE_LABELS[d.agence] || d.agence)}</p>
      <table style="width:100%;border-collapse:collapse;margin-top:16px;">
        <tr><td style="padding:8px 0;color:#666;width:160px;">Prénom</td><td style="padding:8px 0;"><strong>${e(d.prenom)}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#666;">Nom</td><td style="padding:8px 0;"><strong>${e(d.nom)}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#666;">Email</td><td style="padding:8px 0;"><a href="mailto:${e(d.email)}">${e(d.email)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#666;">Téléphone</td><td style="padding:8px 0;"><a href="tel:${e(d.telephone)}">${e(d.telephone)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#666;">Code postal</td><td style="padding:8px 0;">${e(d.code_postal)}</td></tr>
        <tr><td style="padding:8px 0;color:#666;">Type de projet</td><td style="padding:8px 0;"><strong>${e(PROJET_LABELS[d.projet] || d.projet)}</strong></td></tr>
      </table>
      ${d.message ? `<div style="margin-top:24px;padding:16px;background:#EAE1CD;border-radius:8px;"><p style="margin:0 0 8px;color:#666;font-size:14px;">Message du client :</p><p style="margin:0;white-space:pre-wrap;">${e(d.message)}</p></div>` : ''}
    </div>
  `.trim();
}

async function sendEmailNotification(data: LeadData): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn('[api/contact] RESEND_API_KEY absent — email non envoyé');
    return;
  }
  const { agenceEmails, fallbackEmail, fromEmail } = getEmailConfig();
  const resend = new Resend(apiKey);
  const toEmail = agenceEmails[data.agence] || fallbackEmail;
  const projetLabel = PROJET_LABELS[data.projet] || data.projet;
  const { error } = await resend.emails.send({
    from: fromEmail,
    to: [toEmail],
    replyTo: data.email,
    subject: `Nouveau lead — ${data.prenom} ${data.nom} — ${projetLabel}`,
    html: buildEmailHtml(data),
  });
  if (error) throw new Error(`Resend: ${JSON.stringify(error)}`);
}

async function appendLeadToSheet(data: LeadData): Promise<void> {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  if (!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL || !process.env.GOOGLE_PRIVATE_KEY || !sheetId) {
    console.warn('[api/contact] Google Sheets credentials absents — lead non enregistré');
    return;
  }
  const sheets = google.sheets({ version: 'v4', auth: getGoogleAuth() });
  const now = new Date().toLocaleString('fr-FR', { timeZone: 'Europe/Paris' });
  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'A:I',
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [[
        now,
        data.prenom,
        data.nom,
        data.email,
        data.telephone.replace(/(\d{2})(\d{2})(\d{2})(\d{2})(\d{2})/, '$1 $2 $3 $4 $5'),
        data.code_postal,
        PROJET_LABELS[data.projet] || data.projet,
        AGENCE_LABELS[data.agence] || data.agence,
        data.message,
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
      return NextResponse.json(
        { ok: false, error: 'Téléphone invalide (10 chiffres).' },
        { status: 400 }
      );
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
    };

    // Email envoyé avant la réponse (notification critique)
    const emailResult = await Promise.allSettled([sendEmailNotification(data)]);
    if (emailResult[0].status === 'rejected') {
      console.error('[api/contact] Email error:', emailResult[0].reason);
    }

    // Google Sheets en arrière-plan après la réponse (non bloquant)
    after(async () => {
      try {
        await appendLeadToSheet(data);
      } catch (e) {
        console.error('[api/contact] Sheets error (background):', e);
      }
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error('[api/contact] Exception :', e);
    return NextResponse.json({ ok: false, error: 'Erreur serveur.' }, { status: 500 });
  }
}
