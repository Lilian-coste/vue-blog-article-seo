import Link from 'next/link';

// `projet` = slug de l'expertise courante. On le passe à /contact pour présélectionner
// le type de projet dans le formulaire (modifiable). Sans projet, lien /contact normal.
export default function CtaContact({ projet }: { projet?: string }) {
  const href = projet ? `/contact?projet=${encodeURIComponent(projet)}` : '/contact';
  return (
    <section className="gm-exp-cta" data-gm-section="expertise-cta">
      <div className="gm-exp-cta__inner">
        <h2 className="gm-exp-cta__title">Une question sur votre projet ? Parlons-en.</h2>
        <p className="gm-exp-cta__sub">
          On vous rappelle sous 24h ouvrées. Devis gratuit, sans engagement.
        </p>

        <Link
          className="gm-btn-glass gm-btn-glass--on-light"
          href={href}
          style={{ padding: '1rem 1.8rem', fontSize: '1.05rem' }}
        >
          <span className="gm-btn-glass__icon gm-btn-glass__icon--phone" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
            </svg>
          </span>
          <span className="gm-btn-glass__label">Nous contacter</span>
        </Link>
      </div>
    </section>
  );
}
