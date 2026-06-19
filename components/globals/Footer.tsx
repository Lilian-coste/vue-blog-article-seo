import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="gm-footer" role="contentinfo">
      <div className="gm-container">
        <div className="gm-footer__grid">
          <div className="gm-footer__brand">
            <Link className="gm-footer__logo" href="/" aria-label="Accueil — Groupe Merlin">
              <img src="/images/logo/groupemerlin-logo-bleu.png" alt="Groupe Merlin" />
            </Link>

            <p className="gm-footer__tagline">
              Le Groupe Merlin vous accompagne pour l&apos;installation, l&apos;entretien et le dépannage de vos équipements énergétiques.
            </p>

            <ul className="gm-footer__social" aria-label="Réseaux sociaux">
              <li>
                <a href="https://www.linkedin.com/in/christophe-merlin-9a3ba2158/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43c-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.06 2.07-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.07-2.06 2.07zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.99 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.22 0z" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/groupemerlin/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/christophe.merlin.986/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>

          <div className="gm-footer__col">
            <h3>Les agences</h3>
            <ul>
              <li><Link href="/agences/clamecy">Clamecy</Link></li>
              <li><Link href="/agences/corbigny">Corbigny</Link></li>
            </ul>
          </div>

          <div className="gm-footer__col">
            <h3>Expertises</h3>
            <ul>
              <li><Link href="/expertises/pompe-a-chaleur">Pompe à chaleur</Link></li>
              <li><Link href="/expertises/climatisation">Climatisation</Link></li>
              <li><Link href="/expertises/chaudieres-poele-granules">Chaudières & Poêle à granulés</Link></li>
              <li><Link href="/expertises/plomberie-salle-de-bain">Salle de bain</Link></li>
              <li><Link href="/expertises/adoucisseur">Adoucisseur d&apos;eau</Link></li>
              <li><Link href="/expertises/panneaux-photovoltaiques">Panneaux photovoltaïques</Link></li>
            </ul>
          </div>

          <div className="gm-footer__col">
            <h3>Découvrir</h3>
            <ul>
              <li><Link href="/">À propos</Link></li>
              <li><Link href="/#temoignages">Témoignages</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              {/* [STANDBY 2026-06-01] Lien "Blog conseil" masqué du footer à la demande de Lilian — la page /blog-conseil existe toujours mais n'est plus liée. Pour la réafficher quand elle sera prête : décommenter la ligne ci-dessous. */}
              {/* <li><Link href="/blog-conseil">Blog conseil</Link></li> */}
            </ul>
          </div>
        </div>

        <div className="gm-footer__bottom">
          <div>© {year} GROUPE MERLIN</div>
        </div>
      </div>
    </footer>
  );
}
