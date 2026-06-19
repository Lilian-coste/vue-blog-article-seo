'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import ContactForm from '@/components/contact/ContactForm';

type Prefill = { prenom?: string; nom?: string; email?: string; telephone?: string };

// Valeurs autorisées du menu "Type de projet".
const PROJETS_VALIDES = new Set([
  'pompe-a-chaleur',
  'climatisation',
  'chaudieres-poele-granules',
  'salle-de-bain',
  'adoucisseur',
  'eau-de-boisson',
  'adoucisseur-eau-de-boisson',
  'panneaux-photovoltaiques',
  'autre',
]);

// Slugs d'expertise qui ne correspondent pas exactement à une valeur du menu.
const PROJET_ALIASES: Record<string, string> = {
  'plomberie-salle-de-bain': 'salle-de-bain',
};

function normalizeProjet(raw: string | null): string | undefined {
  if (!raw) return undefined;
  const v = PROJET_ALIASES[raw] || raw;
  return PROJETS_VALIDES.has(v) ? v : undefined;
}

/**
 * Point d'entrée du formulaire de contact du SITE.
 * - `?projet=...` (depuis une page expertise) → projet présélectionné mais MODIFIABLE.
 * - sessionStorage `gm_contact_prefill` (depuis le simulateur) → prénom/nom/email/tél
 *   pré-remplis. On vide la clé après lecture pour qu'une visite ultérieure de /contact
 *   reparte propre.
 * Sans paramètre ni prefill, le formulaire se comporte exactement comme avant.
 */
export default function SiteContactEntry() {
  const searchParams = useSearchParams();
  const defaultProjet = normalizeProjet(searchParams.get('projet'));
  const [prefill, setPrefill] = useState<Prefill | undefined>(undefined);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem('gm_contact_prefill');
      if (raw) {
        setPrefill(JSON.parse(raw) as Prefill);
        sessionStorage.removeItem('gm_contact_prefill');
      }
    } catch {
      /* sessionStorage indisponible : formulaire normal */
    }
  }, []);

  return <ContactForm prefill={prefill} defaultProjet={defaultProjet} />;
}
