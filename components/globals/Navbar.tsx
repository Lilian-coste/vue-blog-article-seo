'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);

export default function Navbar() {
  const navbarRef = useRef<HTMLElement | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Sur une page expertise (/expertises/{slug}), le bouton "Nous contacter" emmène
  // vers le formulaire avec le bon projet déjà présélectionné (le slug est normalisé
  // côté /contact, ex. plomberie-salle-de-bain → Salle de bain).
  const expSlug =
    pathname && pathname.startsWith('/expertises/') ? pathname.split('/')[2] : undefined;
  const contactHref = expSlug ? `/contact?projet=${encodeURIComponent(expSlug)}` : '/contact';

  // Click handler pour le CTA "Nous contacter" : si déjà sur /contact,
  // reload la page (pour reset le form en step 1 + scroll to top).
  // Sinon, laisse le Link Next.js naviguer normalement.
  const onContactCtaClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (pathname === '/contact') {
      e.preventDefault();
      router.refresh();
      window.scrollTo({ top: 0, behavior: 'auto' });
      window.location.href = '/contact';
    }
  };

  useEffect(() => {
    const navbar = navbarRef.current;
    if (!navbar) return;

    const threshold = () => window.innerHeight * 0.8;
    let lastState: string | null = null;
    let lastTone: string | null = null;

    const updateState = () => {
      const newState = window.scrollY > threshold() ? 'solid' : 'transparent';
      if (newState !== lastState) {
        navbar.setAttribute('data-state', newState);
        lastState = newState;
      }
    };

    const updateTone = () => {
      // Probe sous la navbar (sa hauteur peut varier selon mobile/desktop).
      // On utilise `elementsFromPoint` (pluriel) pour récupérer la pile
      // d'éléments à ce point et on ignore la navbar elle-même — sinon
      // sur mobile le burger reste bloqué en "light" car elementFromPoint
      // retournerait la navbar (en haut du z-stack) qui n'a pas data-gm-tone.
      const navHeight = navbar.getBoundingClientRect().height || 60;
      const probeY = navHeight + 4;
      const candidates = document.elementsFromPoint(window.innerWidth / 2, probeY) as HTMLElement[];
      const el = candidates.find((c) => !c.closest('[data-gm-navbar]')) as HTMLElement | undefined;
      if (!el) return;
      const section = el.closest('[data-gm-tone]') || el.closest('.gm-section--froid');
      let newTone: string;
      if (section && (section.classList.contains('gm-section--froid') || (section as HTMLElement).dataset.gmTone === 'dark')) {
        newTone = 'dark';
      } else {
        newTone = 'light';
      }
      if (newTone !== lastTone) {
        navbar.setAttribute('data-tone', newTone);
        lastTone = newTone;
      }
    };

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateState();
        updateTone();
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    updateState();
    updateTone();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = drawerOpen ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [drawerOpen]);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <>
      <header
        ref={navbarRef}
        className="gm-navbar"
        data-gm-navbar
        data-state="transparent"
        data-tone="dark"
        role="banner"
      >
        <Link
          className="gm-navbar__logo"
          href="/"
          aria-label="Accueil — Groupe Merlin"
        >
          <img src="/images/logo/groupemerlin-logo-big.png" alt="Groupe Merlin" />
        </Link>

        <nav className="gm-navbar__nav" aria-label="Navigation principale">
          <Link className="gm-navbar__link" href="/">À propos</Link>
          <Link className="gm-navbar__link" href="/#expertises">Expertises</Link>
          <Link className="gm-navbar__link" href="/#temoignages">Témoignages</Link>
          <Link className="gm-navbar__link" href="/#faq">FAQ</Link>
        </nav>

        <Link
          className="gm-btn-glass gm-btn-glass--on-light gm-navbar__cta"
          href={contactHref}
          onClick={onContactCtaClick}
        >
          <span className="gm-btn-glass__icon gm-btn-glass__icon--phone" aria-hidden="true">
            <PhoneIcon />
          </span>
          <span className="gm-btn-glass__label">Nous contacter</span>
        </Link>

        <button
          className="gm-navbar__burger"
          type="button"
          data-gm-burger
          aria-controls="gm-drawer"
          aria-expanded={drawerOpen}
          aria-label="Ouvrir le menu"
          onClick={() => setDrawerOpen((v) => !v)}
        >
          <span></span><span></span><span></span>
        </button>
      </header>

      <div
        className="gm-navbar__overlay"
        data-gm-overlay
        data-open={drawerOpen}
        aria-hidden={!drawerOpen}
        onClick={closeDrawer}
      />

      <aside
        id="gm-drawer"
        className="gm-navbar__drawer"
        data-gm-drawer
        data-open={drawerOpen}
        aria-label="Menu mobile"
      >
        <button
          className="gm-navbar__drawer-close"
          type="button"
          data-gm-drawer-close
          aria-label="Fermer le menu"
          onClick={closeDrawer}
        >
          ×
        </button>

        <nav className="gm-navbar__drawer-nav" aria-label="Navigation mobile">
          <Link className="gm-navbar__drawer-link" href="/" onClick={closeDrawer}>À propos</Link>
          <Link className="gm-navbar__drawer-link" href="/#expertises" onClick={closeDrawer}>Expertises</Link>
          <Link className="gm-navbar__drawer-link" href="/#simulateur" onClick={closeDrawer}>Simulateur</Link>
          <Link className="gm-navbar__drawer-link" href="/#temoignages" onClick={closeDrawer}>Témoignages</Link>
          <Link className="gm-navbar__drawer-link" href="/#faq" onClick={closeDrawer}>FAQ</Link>
          <Link className="gm-navbar__drawer-link" href="/#histoire" onClick={closeDrawer}>Notre histoire</Link>
          <Link className="gm-navbar__drawer-link" href="/#blog" onClick={closeDrawer}>Blog</Link>
        </nav>

        <Link
          className="gm-btn-glass gm-btn-glass--on-light gm-navbar__drawer-cta"
          href={contactHref}
          onClick={(e) => {
            closeDrawer();
            onContactCtaClick(e);
          }}
        >
          <span className="gm-btn-glass__icon gm-btn-glass__icon--phone" aria-hidden="true">
            <PhoneIcon />
          </span>
          <span className="gm-btn-glass__label">Nous contacter</span>
        </Link>
      </aside>
    </>
  );
}
