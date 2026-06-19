'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

/**
 * Embarque le simulateur du tunnel (iframe statique) et fait le pont postMessage :
 *  - gm-sim-height       → ajuste la hauteur de l'iframe selon son contenu.
 *  - gm-sim-contact-click→ l'utilisateur clique "Nous contacter" sur la page résultat :
 *    on mémorise les coordonnées saisies (sessionStorage) pour pré-remplir le
 *    formulaire de contact, puis on navigue vers /aides-pompe-a-chaleur/contact.
 * Aucune donnée sensible ne transite par l'URL.
 */
export default function TunnelSimulateur() {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const router = useRouter();

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const handler = (e: MessageEvent) => {
      const data = e.data as { type?: string; height?: number; lead?: Record<string, string> } | null;
      if (!data || typeof data !== 'object') return;

      if (data.type === 'gm-sim-height' && typeof data.height === 'number') {
        iframe.style.height = Math.ceil(data.height + 20) + 'px';
      }

      if (data.type === 'gm-sim-contact-click') {
        try {
          if (data.lead && typeof data.lead === 'object') {
            sessionStorage.setItem('gm_tunnel_prefill', JSON.stringify(data.lead));
          }
        } catch {
          /* sessionStorage indisponible : on navigue quand même, sans pré-remplissage */
        }
        router.push('/aides-pompe-a-chaleur/contact');
      }
    };

    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, [router]);

  return (
    <section id="simulateur" className="tunnel-sim">
      <iframe
        ref={iframeRef}
        src="/simulateur-pac-tunnel/index.html"
        title="Simulateur d'aides — Pompe à chaleur"
        scrolling="no"
        style={{ width: '100%', border: 0, display: 'block', height: '880px' }}
      />
    </section>
  );
}
