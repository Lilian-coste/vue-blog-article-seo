'use client';

import { useEffect, useRef } from 'react';

export default function S3Simulateur() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const isMobile = window.innerWidth <= 768;

    // Flag pour ignorer les `gm-sim-scroll-bottom` quand on vient juste
    // d'arriver sur la step "done" (résultats) — sinon le scroll-bottom
    // arrive juste après le step-changed et écrase le scroll vers le haut.
    let onDoneStep = false;

    /**
     * Pour qu'un changement de hauteur du simulateur ne shift PAS tout
     * le contenu en dessous quand l'utilisateur scrolle (sur mobile, le
     * scroll inertia + reflow donne l'impression d'un "saut"), on n'applique
     * la hauteur que si l'iframe est dans la zone du viewport ou au-dessus.
     * Si l'utilisateur a déjà scrollé loin sous la section, on ignore.
     */
    const isIframeInOrAboveViewport = () => {
      const rect = iframe.getBoundingClientRect();
      return rect.bottom > -200; // tolérance 200px au-dessus du viewport
    };

    const handler = (e: MessageEvent) => {
      const data = e.data as { type?: string; height?: number; step?: string; lead?: Record<string, string> } | null;
      if (!data || typeof data !== 'object') return;

      if (data.type === 'gm-sim-contact-click') {
        // On mémorise les coordonnées saisies dans le simulateur pour pré-remplir le
        // formulaire de contact, et on présélectionne le projet Pompe à chaleur (modifiable).
        try {
          if (data.lead && typeof data.lead === 'object') {
            sessionStorage.setItem('gm_contact_prefill', JSON.stringify(data.lead));
          }
        } catch {
          /* sessionStorage indisponible : on navigue quand même */
        }
        window.location.href = '/contact?projet=pompe-a-chaleur';
      }

      if (data.type === 'gm-sim-height' && typeof data.height === 'number') {
        // Sur mobile : si l'utilisateur a scrollé loin sous le simu, on
        // n'applique pas la nouvelle hauteur (sinon ça shift son scroll).
        if (isMobile && !isIframeInOrAboveViewport()) return;
        iframe.style.height = Math.ceil(data.height + 20) + 'px';
      }

      if (data.type === 'gm-sim-scroll-bottom') {
        // Sur step 'done' (résultats), on a déjà scrollé vers le HAUT pour
        // afficher l'estimation + le bon-à-savoir Éco-PTZ. On ignore donc le
        // scroll-bottom qui suit (sinon il écrase notre scroll vers le haut).
        if (onDoneStep) return;
        // Sur mobile, on scroll vers le HAUT du simulateur (pas le bas) — quand
        // la nouvelle question est plus courte, scroll-to-bottom laisse le user
        // sur les 3 icônes "économies/subventions/saisons" qui sont sous le simu.
        // Sur desktop, le comportement reste celui du site WP (scroll bottom).
        // Sur mobile : seulement si l'iframe est visible (pas pendant un scroll
        // loin sous la section, sinon ça téléporte l'utilisateur).
        if (isMobile) {
          if (isIframeInOrAboveViewport()) {
            iframe.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        } else {
          iframe.scrollIntoView({ behavior: 'smooth', block: 'end' });
        }
      }

      // Mobile : la zone superficie vient d'apparaître après click Maison/Appartement.
      // Petit scroll relatif (~180px) pour révéler la nouvelle question sans
      // téléporter l'utilisateur tout en bas du simu.
      if (data.type === 'gm-sim-scroll-to-surface' && isMobile) {
        if (isIframeInOrAboveViewport()) {
          window.scrollBy({ top: 180, behavior: 'smooth' });
        }
      }

      // Mobile : la table de tranches de revenus vient d'apparaître après click
      // sur le nombre de personnes (step 4). Même petit scroll que pour surface.
      if (data.type === 'gm-sim-scroll-to-revenus' && isMobile) {
        if (isIframeInOrAboveViewport()) {
          window.scrollBy({ top: 180, behavior: 'smooth' });
        }
      }

      // Step changed → on track quel step est actif. Sur 'done', scroll vers le
      // HAUT du simu (mobile + desktop) pour que la phrase Éco-PTZ et
      // l'estimation des aides soient visibles immédiatement, et on bloque les
      // scroll-bottom qui pourraient suivre.
      if (data.type === 'gm-sim-step-changed') {
        onDoneStep = data.step === 'done';
        if (data.step === 'done') {
          iframe.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    };

    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  return (
    <section className="gm-section gm-s3" data-gm-section="s3-simulateur" id="simulateur">
      <div className="gm-s3__inner">
        <div className="gm-s3__prefix" data-gm-s3-prefix />

        <div className="gm-s3__embed" data-gm-sim-wrap>
          <iframe
            ref={iframeRef}
            className="gm-s3__iframe"
            data-gm-sim-iframe
            data-contact-url="/contact"
            src="/simulateur-v2/index.html"
            title="Simulateur d'aides — Pompe à chaleur"
            scrolling="no"
            style={{ width: '100%', border: 0, display: 'block' }}
          />
        </div>
      </div>
    </section>
  );
}
