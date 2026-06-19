/**
 * Footer du tunnel — réplique fidèle du footer de la page questionnaire (optin),
 * styles scopés sous .tunnel-footer pour ne pas interférer avec le reste du site.
 */
export default function TunnelFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="tunnel-footer" role="contentinfo">
      <style>{`
        .tunnel-footer{
          --foot-cream:#EAE1CD; --foot-ink:#171723; --foot-anthracite:#42424E; --foot-line:rgba(23,23,35,.12);
          background:var(--foot-cream); color:var(--foot-ink);
          border-top:1px solid rgba(23,23,35,.10);
          font-family:'General Sans', system-ui, -apple-system, 'Segoe UI', sans-serif;
        }
        .tunnel-footer__inner{
          width:min(100% - 2.5rem, 1200px); margin:0 auto;
          padding:clamp(2.5rem,5vw,3.5rem) 0 clamp(1.75rem,3vw,2.25rem);
          display:flex; align-items:center; gap:clamp(1.5rem,4vw,3.5rem); flex-wrap:wrap;
        }
        .tunnel-footer__brand{ flex:1 1 360px; min-width:260px; display:flex; flex-direction:column; gap:1.1rem; }
        .tunnel-footer__logo{ height:clamp(54px,6vw,72px); width:auto; max-width:240px; align-self:flex-start; object-fit:contain; display:block; }
        .tunnel-footer__tagline{ margin:0; font-size:.95rem; line-height:1.55; color:var(--foot-anthracite); max-width:42ch; }
        .tunnel-footer__social{ list-style:none; margin:0; padding:0; display:flex; gap:.65rem; }
        .tunnel-footer__social a{
          display:inline-flex; align-items:center; justify-content:center; width:40px; height:40px;
          border-radius:50%; background:transparent; border:1px solid rgba(23,23,35,.18); color:var(--foot-ink);
          transition:background .25s ease, color .25s ease, border-color .25s ease, transform .25s ease;
        }
        .tunnel-footer__social a:hover{ background:var(--foot-ink); color:var(--foot-cream); border-color:var(--foot-ink); transform:translateY(-2px); }
        .tunnel-footer__social svg{ width:18px; height:18px; }
        .tunnel-footer__sep{ align-self:stretch; width:1px; background:var(--foot-line); min-height:110px; }
        .tunnel-footer__legal{ flex:0 1 auto; display:flex; flex-direction:column; gap:.7rem; font-size:.88rem; color:var(--foot-anthracite); letter-spacing:.01em; }
        .tunnel-footer__copyright{ font-weight:600; color:var(--foot-ink); letter-spacing:.06em; text-transform:uppercase; font-size:.78rem; }
        .tunnel-footer__legal a{ color:var(--foot-anthracite); text-decoration:none; transition:color .2s ease; }
        .tunnel-footer__legal a:hover{ color:var(--foot-ink); }
        @media (max-width:640px){
          .tunnel-footer__sep{ width:100%; height:1px; min-height:0; }
          .tunnel-footer__legal{ flex-direction:row; flex-wrap:wrap; gap:.4rem 1.2rem; align-items:center; }
        }
      `}</style>
      <div className="tunnel-footer__inner">
        <div className="tunnel-footer__brand">
          <img className="tunnel-footer__logo" src="/images/logo/groupemerlin-logo-bleu.png" alt="Groupe Merlin" />
          <p className="tunnel-footer__tagline">
            Le Groupe Merlin vous accompagne pour l&apos;installation, l&apos;entretien et le dépannage de vos équipements énergétiques.
          </p>
          <ul className="tunnel-footer__social" aria-label="Réseaux sociaux">
            <li>
              <a href="https://www.linkedin.com/in/christophe-merlin-9a3ba2158/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43c-1.14 0-2.07-.93-2.07-2.07 0-1.14.93-2.06 2.07-2.06 1.14 0 2.06.92 2.06 2.06 0 1.14-.92 2.07-2.06 2.07zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.99 0 1.78-.77 1.78-1.72V1.72C24 .77 23.21 0 22.22 0z"/></svg>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/groupemerlin/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/christophe.merlin.986/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"/></svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="tunnel-footer__sep" aria-hidden="true" />

        <div className="tunnel-footer__legal">
          <span className="tunnel-footer__copyright">© {year} Groupe Merlin</span>
          {/* [ARCHIVÉ 2026-06-14] Liens légaux désactivés tant que les pages
              /mentions-legales et /politique-de-confidentialite n'existent pas (LegalPlace).
              À réactiver en décommentant ci-dessous.
          <a href="/mentions-legales">Mentions légales</a>
          <a href="/politique-de-confidentialite">Politique de confidentialité</a>
          */}
        </div>
      </div>
    </footer>
  );
}
