import Link from 'next/link';

/**
 * Navbar du tunnel publicitaire — reprend l'allure de la navbar du site
 * (mêmes classes gm-navbar / gm-btn-glass) mais en version réduite :
 * un seul lien "Simulateur" (décoratif, le tunnel n'a qu'une page) + le CTA
 * "Nous contacter". Aucun lien vers le reste du site.
 * État figé en solid/light (fond crème glass + texte encre).
 */
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

export default function TunnelNavbar() {
  return (
    <header className="gm-navbar" data-gm-navbar data-state="solid" data-tone="light" role="banner">
      <Link className="gm-navbar__logo" href="/aides-pompe-a-chaleur" aria-label="Groupe Merlin">
        <img src="/images/logo/groupemerlin-logo-big.png" alt="Groupe Merlin" />
      </Link>

      <nav className="gm-navbar__nav" aria-label="Navigation">
        <Link className="gm-navbar__link" href="/aides-pompe-a-chaleur#simulateur">
          Simulateur
        </Link>
      </nav>

      <Link className="gm-btn-glass gm-btn-glass--on-light gm-navbar__cta" href="/aides-pompe-a-chaleur/contact">
        <span className="gm-btn-glass__icon gm-btn-glass__icon--phone" aria-hidden="true">
          <PhoneIcon />
        </span>
        <span className="gm-btn-glass__label">Nous contacter</span>
      </Link>
    </header>
  );
}
