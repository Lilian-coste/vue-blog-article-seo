'use client';

import { useEffect, useState } from 'react';
import ContactForm from '@/components/contact/ContactForm';

type Prefill = { prenom?: string; nom?: string; email?: string; telephone?: string };

/**
 * Étape contact du tunnel : récupère les coordonnées saisies dans le simulateur
 * (déposées en sessionStorage par TunnelSimulateur) et les passe au formulaire
 * de contact réutilisé du site, avec projet verrouillé sur "Pompe à chaleur",
 * envoi vers /api/lead (Brevo inclus) et redirection vers la page de remerciement.
 */
export default function TunnelContact() {
  const [prefill, setPrefill] = useState<Prefill | undefined>(undefined);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('gm_tunnel_prefill');
      if (raw) setPrefill(JSON.parse(raw) as Prefill);
    } catch {
      /* sessionStorage indisponible : formulaire vide, pas de pré-remplissage */
    }
  }, []);

  return (
    <ContactForm
      prefill={prefill}
      lockedProjet="pompe-a-chaleur"
      endpoint="/api/lead"
      source="tunnel-pac"
      onSuccessRedirect="/aides-pompe-a-chaleur/merci"
    />
  );
}
