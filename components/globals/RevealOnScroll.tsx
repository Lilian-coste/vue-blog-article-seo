'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Reveal-on-scroll global avec mémoire de session :
 * - 1ère visite d'une section dans la session : animation classique au scroll.
 * - Section déjà vue dans cette session (ex: l'utilisateur a visité une page
 *   détail puis revient en arrière sur la home) : reveal IMMÉDIAT, pas d'attente.
 *
 * Le tracking utilise sessionStorage avec une clé par section identifiée
 * via `data-gm-section`. La session se ferme à la fermeture de l'onglet.
 */
export default function RevealOnScroll() {
  const pathname = usePathname();

  useEffect(() => {
    const triggers = document.querySelectorAll<HTMLElement>('[data-gm-reveal]');
    if (!triggers.length) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const sectionIdOf = (el: Element): string | null => {
      const sec = el.closest<HTMLElement>('[data-gm-section]');
      return sec?.dataset.gmSection ?? null;
    };

    const wasViewed = (sectionId: string | null): boolean => {
      if (!sectionId) return false;
      try {
        return sessionStorage.getItem(`gm-viewed-${sectionId}`) === '1';
      } catch {
        return false;
      }
    };

    const markViewed = (sectionId: string | null) => {
      if (!sectionId) return;
      try {
        sessionStorage.setItem(`gm-viewed-${sectionId}`, '1');
      } catch {}
    };

    /** Révèle un trigger + ses enfants `[data-reveal]` (avec délai si pas instant). */
    const reveal = (el: Element, instant = false) => {
      el.setAttribute('data-revealed', 'true');
      const children = el.querySelectorAll('[data-reveal]');
      children.forEach((c, i) => {
        const delay = instant
          ? 0
          : parseInt((c as HTMLElement).dataset.revealDelay || `${i * 120}`, 10);
        setTimeout(() => c.setAttribute('data-revealed', 'true'), delay);
      });
      markViewed(sectionIdOf(el));
    };

    if (reduced) {
      triggers.forEach((el) => reveal(el, true));
      return;
    }

    /**
     * Au mount, on partage les triggers en 3 catégories :
     *   1. Section déjà vue dans la session → reveal immédiat
     *   2. Trigger déjà à hauteur du viewport → reveal immédiat (évite le flash)
     *   3. Le reste → IntersectionObserver classique
     */
    const viewportH = window.innerHeight;
    triggers.forEach((el) => {
      const sectionId = sectionIdOf(el);
      if (wasViewed(sectionId)) {
        reveal(el, true);
        return;
      }
      const rect = el.getBoundingClientRect();
      if (rect.top < viewportH * 0.9) {
        reveal(el, true);
      }
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          if (el.getAttribute('data-revealed') === 'true') {
            io.unobserve(el);
            return;
          }
          reveal(el);
          io.unobserve(el);
        });
      },
      { threshold: 0.25, rootMargin: '0px 0px -10% 0px' }
    );

    triggers.forEach((el) => {
      if (el.getAttribute('data-revealed') !== 'true') {
        io.observe(el);
      }
    });

    return () => io.disconnect();
  }, [pathname]);

  return null;
}
