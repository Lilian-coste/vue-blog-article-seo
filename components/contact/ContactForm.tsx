'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { AGENCES } from '@/data/agences';

/**
 * Props optionnelles — toutes facultatives pour rester 100% rétrocompatible :
 * la page /contact du site rend <ContactForm /> sans aucune prop et garde son
 * comportement d'origine. Le TUNNEL pub passe ces props pour pré-remplir, verrouiller
 * le projet sur "Pompe à chaleur", taper /api/lead (Brevo inclus) et rediriger vers
 * sa page de remerciement.
 */
type ContactFormProps = {
  prefill?: { prenom?: string; nom?: string; email?: string; telephone?: string };
  lockedProjet?: string;
  /** Présélectionne le type de projet dans le menu, mais laisse l'utilisateur le changer. */
  defaultProjet?: string;
  endpoint?: string;
  source?: string;
  onSuccessRedirect?: string;
};

const AGENCE_SLUGS_LIST = ['clamecy', 'corbigny'] as const;
type AgenceSlug = (typeof AGENCE_SLUGS_LIST)[number];

const AGENCE_COORDS: Record<AgenceSlug, { lat: number; lon: number }> = {
  clamecy: { lat: 47.4602, lon: 3.5215 },
  corbigny: { lat: 47.2553, lon: 3.6797 },
};

const AGENCE_LABELS: Record<AgenceSlug, string> = {
  clamecy: 'Clamecy',
  corbigny: 'Corbigny',
};

// Libellés projets pour l'affichage du champ verrouillé (tunnel).
const PROJET_LABELS_FORM: Record<string, string> = {
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

function haversineKm(a: { lat: number; lon: number }, b: { lat: number; lon: number }) {
  const R = 6371;
  const toRad = (deg: number) => (deg * Math.PI) / 180;
  const dLat = toRad(b.lat - a.lat);
  const dLon = toRad(b.lon - a.lon);
  const lat1 = toRad(a.lat);
  const lat2 = toRad(b.lat);
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
}

async function roadKm(a: { lat: number; lon: number }, b: { lat: number; lon: number }) {
  try {
    const url = `https://router.project-osrm.org/route/v1/driving/${a.lon},${a.lat};${b.lon},${b.lat}?overview=false`;
    const res = await fetch(url);
    if (!res.ok) return null;
    const data = await res.json();
    const meters = data?.routes?.[0]?.distance;
    return typeof meters === 'number' ? meters / 1000 : null;
  } catch {
    return null;
  }
}

async function geocodeCP(cp: string): Promise<{ lat: number; lon: number } | null> {
  try {
    const res = await fetch(
      `https://geo.api.gouv.fr/communes?codePostal=${cp}&fields=centre&format=json`
    );
    if (!res.ok) return null;
    const data = await res.json();
    if (!Array.isArray(data) || !data.length) return null;
    const centre = data[0]?.centre?.coordinates;
    if (!centre || centre.length !== 2) return null;
    return { lat: centre[1], lon: centre[0] };
  } catch {
    return null;
  }
}

async function findAgence(cp: string): Promise<AgenceSlug> {
  const point = await geocodeCP(cp);
  if (!point) {
    // Mailly-la-Ville (89) en standby → CP 89 routés vers Corbigny (la plus
    // proche géographiquement) en attendant la confirmation de Mailly.
    if (cp.startsWith('89')) return 'corbigny';
    if (cp === '58800' || cp.startsWith('588') || cp.startsWith('583') || cp.startsWith('587'))
      return 'corbigny';
    return 'clamecy';
  }

  const slugs = AGENCE_SLUGS_LIST;
  const roadResults = await Promise.all(slugs.map((slug) => roadKm(point, AGENCE_COORDS[slug])));

  if (roadResults.every((d) => typeof d === 'number')) {
    let best: AgenceSlug = 'clamecy';
    let bestDist = Infinity;
    slugs.forEach((slug, i) => {
      const d = roadResults[i] as number;
      if (d < bestDist) {
        bestDist = d;
        best = slug;
      }
    });
    return best;
  }

  let best: AgenceSlug = 'clamecy';
  let bestDist = Infinity;
  for (const slug of slugs) {
    const d = haversineKm(point, AGENCE_COORDS[slug]);
    if (d < bestDist) {
      bestDist = d;
      best = slug;
    }
  }
  return best;
}

function phoneToTelHref(phone: string): string {
  const digits = phone.replace(/\D/g, '');
  if (!digits || digits[0] !== '0') return '';
  return 'tel:+33' + digits.substring(1);
}

export default function ContactForm({
  prefill,
  lockedProjet,
  defaultProjet,
  endpoint = '/api/contact',
  source,
  onSuccessRedirect,
}: ContactFormProps = {}) {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [activeAgence, setActiveAgence] = useState<AgenceSlug>('clamecy');
  const [cpError, setCpError] = useState('');
  const [formError, setFormError] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const cpInputRef = useRef<HTMLInputElement | null>(null);
  const cpFieldRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const cpDebounceRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const successRef = useRef<HTMLDivElement | null>(null);

  const onCpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const value = (cpInputRef.current?.value || '').replace(/\s+/g, '');
    if (!/^\d{5}$/.test(value)) {
      setCpError('Code postal invalide (5 chiffres).');
      return;
    }
    setCpError('');
    if (cpFieldRef.current) cpFieldRef.current.value = value;
    const slug = await findAgence(value);
    setActiveAgence(slug);
    setStep(2);
    setTimeout(() => {
      sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 0);
  };

  const onCpFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (cpDebounceRef.current) clearTimeout(cpDebounceRef.current);
    const v = (e.target.value || '').replace(/\s+/g, '');
    if (!/^\d{5}$/.test(v)) return;
    cpDebounceRef.current = setTimeout(async () => {
      const slug = await findAgence(v);
      setActiveAgence(slug);
    }, 500);
  };

  const [submitting, setSubmitting] = useState(false);

  const onFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormError('');
    const form = e.currentTarget;
    const data = new FormData(form);
    const phone = String(data.get('telephone') ?? '').replace(/\s+/g, '');
    if (!/^0[1-9]\d{8}$/.test(phone)) {
      setFormError('Numéro de téléphone invalide (10 chiffres, format 06… ou 03…).');
      return;
    }
    const email = String(data.get('email') ?? '');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setFormError('Email invalide.');
      return;
    }

    setSubmitting(true);
    try {
      const payload = Object.fromEntries(data);
      payload.agence = activeAgence;
      if (source) payload.source = source;
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      if (!res.ok || !json.ok) {
        setFormError(json.error || 'Une erreur est survenue, merci de réessayer.');
        setSubmitting(false);
        return;
      }
      // Tunnel : on redirige vers la page de remerciement (où le Pixel "Lead" se
      // déclenche). Sinon (site), on affiche le message de succès en place.
      if (onSuccessRedirect) {
        const prenom = String(data.get('prenom') || '').trim();
        const sep = onSuccessRedirect.includes('?') ? '&' : '?';
        router.push(onSuccessRedirect + (prenom ? `${sep}prenom=${encodeURIComponent(prenom)}` : ''));
        return;
      }
      setSubmitted(true);
      setTimeout(() => {
        successRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 50);
    } catch {
      setFormError('Connexion impossible. Vérifie ta connexion et réessaie.');
      setSubmitting(false);
    }
  };

  useEffect(() => {
    return () => {
      if (cpDebounceRef.current) clearTimeout(cpDebounceRef.current);
    };
  }, []);

  // Tunnel : pré-remplit prénom / nom / email / téléphone depuis le simulateur.
  useEffect(() => {
    if (!prefill || !formRef.current) return;
    const f = formRef.current;
    const set = (name: string, val?: string) => {
      const el = f.elements.namedItem(name) as HTMLInputElement | null;
      if (el && typeof val === 'string' && val.trim() !== '') el.value = val;
    };
    set('prenom', prefill.prenom);
    set('nom', prefill.nom);
    set('email', prefill.email);
    set('telephone', prefill.telephone);
  }, [prefill]);

  return (
    <section
      ref={sectionRef}
      className="gm-contact"
      data-gm-section="contact"
      data-gm-contact-root
      data-step={step}
      data-active-agence={activeAgence}
    >
      <header className="gm-contact__head">
        <span className="gm-contact__eyebrow">Contact · Devis gratuit</span>
        <h1 className="gm-contact__title">
          Parlons de <em>votre projet.</em>
        </h1>
        <p className="gm-contact__lead">
          Une question, un devis, une étude à domicile ? On vous rappelle sous 24h ouvrées. Déplacement gratuit pour un devis dans le département de la Nièvre et de la Yonne.
        </p>
      </header>

      <div className="gm-contact__step-cp">
        <h2>Quel est votre code postal ?</h2>
        <p>Indiquez-le pour qu&apos;on puisse vous orienter vers l&apos;agence la plus proche de chez vous.</p>
        <form
          className="gm-contact__step-cp__form"
          data-gm-cp-form
          noValidate
          onSubmit={onCpSubmit}
        >
          <input
            ref={cpInputRef}
            className="gm-contact__step-cp__input"
            data-gm-cp-input
            type="text"
            inputMode="numeric"
            pattern="[0-9]{5}"
            maxLength={5}
            placeholder="58500"
            autoComplete="postal-code"
            aria-label="Code postal"
            required
          />
          <button className="gm-contact__step-cp__btn" type="submit">
            Continuer →
          </button>
        </form>
        <p
          className="gm-contact__step-cp__error"
          data-gm-cp-error
          data-visible={cpError ? 'true' : undefined}
          role="alert"
        >
          {cpError}
        </p>
      </div>

      <div className="gm-contact__grid">
        <div className="gm-contact__form-col">
          <form
            ref={formRef}
            className="gm-contact__form"
            data-gm-contact-form
            noValidate
            onSubmit={onFormSubmit}
            style={submitted ? { display: 'none' } : undefined}
          >
            <h2 className="gm-contact__form-title">Demander un devis</h2>
            <p className="gm-contact__form-help">
              Tous les champs marqués <span className="gm-required">*</span> sont obligatoires.
            </p>

            <p className="gm-contact__agence-tag" data-gm-agence-tag>
              Agence détectée :{' '}
              <strong data-gm-agence-name>{AGENCE_LABELS[activeAgence]}</strong>
            </p>

            <div className="gm-contact__fields">
              <div className="gm-contact__field">
                <label htmlFor="gm-prenom">
                  Prénom <span className="gm-required">*</span>
                </label>
                <input id="gm-prenom" name="prenom" type="text" autoComplete="given-name" required />
              </div>
              <div className="gm-contact__field">
                <label htmlFor="gm-nom">
                  Nom <span className="gm-required">*</span>
                </label>
                <input id="gm-nom" name="nom" type="text" autoComplete="family-name" required />
              </div>
              <div className="gm-contact__field">
                <label htmlFor="gm-email">
                  Email <span className="gm-required">*</span>
                </label>
                <input id="gm-email" name="email" type="email" autoComplete="email" required />
              </div>
              <div className="gm-contact__field">
                <label htmlFor="gm-telephone">
                  Téléphone <span className="gm-required">*</span>
                </label>
                <input
                  id="gm-telephone"
                  name="telephone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="06 12 34 56 78"
                  required
                />
              </div>
              <div className="gm-contact__field">
                <label htmlFor="gm-cp">
                  Code postal <span className="gm-required">*</span>
                </label>
                <input
                  ref={cpFieldRef}
                  id="gm-cp"
                  name="code_postal"
                  type="text"
                  inputMode="numeric"
                  maxLength={5}
                  autoComplete="postal-code"
                  data-gm-prefill-cp
                  onChange={onCpFieldChange}
                  required
                />
              </div>
              <div className="gm-contact__field">
                <label htmlFor="gm-projet">
                  Type de projet <span className="gm-required">*</span>
                </label>
                {lockedProjet ? (
                  <>
                    <input type="hidden" name="projet" value={lockedProjet} />
                    <input
                      id="gm-projet"
                      type="text"
                      value={PROJET_LABELS_FORM[lockedProjet] || lockedProjet}
                      readOnly
                      aria-readonly="true"
                      tabIndex={-1}
                    />
                  </>
                ) : (
                  <select id="gm-projet" name="projet" required defaultValue={defaultProjet || ''}>
                    <option value="" disabled>
                      Choisir…
                    </option>
                    <option value="pompe-a-chaleur">Pompe à chaleur</option>
                    <option value="climatisation">Climatisation</option>
                    <option value="chaudieres-poele-granules">Chaudières & Poêle à granulés</option>
                    <option value="salle-de-bain">Salle de bain clé en main</option>
                    <option value="adoucisseur">Adoucisseur d&apos;eau</option>
                    <option value="eau-de-boisson">Eau de boisson</option>
                    <option value="adoucisseur-eau-de-boisson">Adoucisseur d&apos;eau + Eau de boisson</option>
                    <option value="panneaux-photovoltaiques">Panneaux photovoltaïques</option>
                    <option value="autre">Autre / multi-postes</option>
                  </select>
                )}
              </div>
              <div className="gm-contact__field gm-contact__field--full">
                <label htmlFor="gm-message">Votre projet en quelques mots</label>
                <textarea
                  id="gm-message"
                  name="message"
                  rows={5}
                  placeholder="Surface du logement, chauffage actuel, échéance souhaitée…"
                />
              </div>
            </div>

            {/* [STANDBY 2026-06-01] Bloc de consentement RGPD masqué à la demande de Lilian (le lien "En savoir plus" pointait vers /politique-de-confidentialite, page pas encore créée). À RÉACTIVER en même temps que la page de confidentialité LegalPlace : décommenter le bloc ci-dessous.
            <label className="gm-contact__cgu">
              <input type="checkbox" name="cgu" required />
              <span>
                J&apos;accepte que mes informations soient utilisées pour me recontacter.{' '}
                <a href="/politique-de-confidentialite">En savoir plus</a>
                <span className="gm-required">*</span>
              </span>
            </label>
            */}

            <p
              className="gm-contact__error"
              data-gm-form-error
              data-visible={formError ? 'true' : undefined}
              role="alert"
            >
              {formError}
            </p>

            <button className="gm-contact__submit" type="submit" disabled={submitting}>
              {submitting ? 'Envoi en cours…' : 'Envoyer ma demande'}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" />
                <path d="m13 5 7 7-7 7" />
              </svg>
            </button>
          </form>

          <div
            ref={successRef}
            className="gm-contact__success"
            data-gm-form-success
            data-visible={submitted ? 'true' : undefined}
          >
            <h3>Message bien reçu, merci !</h3>
            <p>
              Un conseiller du Groupe Merlin vous recontacte sous 48h ouvrées, du lundi au vendredi. Pour une demande urgente, appelez-nous directement.
            </p>
          </div>
        </div>

        <aside className="gm-contact__aside">
          {AGENCE_SLUGS_LIST.map((slug) => {
            const ag = AGENCES[slug];
            const telFixe = phoneToTelHref(ag.phoneFixe);
            const telMob = phoneToTelHref(ag.phoneMob);
            return (
              <div key={slug} className="gm-contact__agence-block" data-agence={slug}>
                <div className="gm-contact__card gm-contact__card--coords">
                  <h3 className="gm-contact__card-title">
                    Agence <strong>{ag.name}</strong>
                  </h3>
                  <dl className="gm-contact__coord">
                    <dt>Téléphone fixe</dt>
                    <dd>
                      {telFixe ? <a href={telFixe}>{ag.phoneFixe}</a> : ag.phoneFixe}
                    </dd>
                  </dl>
                  <dl className="gm-contact__coord">
                    <dt>Téléphone mobile</dt>
                    <dd>{telMob ? <a href={telMob}>{ag.phoneMob}</a> : ag.phoneMob}</dd>
                  </dl>
                  <dl className="gm-contact__coord">
                    <dt>Email</dt>
                    <dd>
                      <a href={ag.emailHref}>{ag.email}</a>
                    </dd>
                  </dl>
                  <dl className="gm-contact__coord">
                    <dt>Adresse</dt>
                    <dd>{ag.address}</dd>
                  </dl>
                  <dl className="gm-contact__coord">
                    <dt>Horaires</dt>
                    <dd>{ag.hours}</dd>
                  </dl>
                </div>

                <div className="gm-contact__card gm-contact__card--phone">
                  <p className="gm-contact__phone-cta">Besoin d&apos;une réponse maintenant ?</p>
                  {telMob ? (
                    <a className="gm-contact__phone-link" href={telMob}>
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
                      </svg>
                      {ag.phoneMob}
                    </a>
                  ) : (
                    <span className="gm-contact__phone-link">{ag.phoneMob}</span>
                  )}
                </div>
              </div>
            );
          })}

          <div className="gm-contact__card gm-contact__card--garantie">
            <h3 className="gm-contact__card-title">Ce qu&apos;on garantit</h3>
            <ul className="gm-contact__garantie-list">
              <li>Réponse sous 48h ouvrées</li>
              <li>Devis gratuit &amp; sans engagement</li>
              <li>Déplacement offert dans la Nièvre et la Yonne</li>
              <li>Aides MaPrimeRénov&apos; calculées pour vous</li>
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}
