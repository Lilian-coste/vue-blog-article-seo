import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactForm from '@/components/contact/ContactForm';
import SiteContactEntry from '@/components/contact/SiteContactEntry';

export const metadata: Metadata = {
  title: 'Contact — Groupe Merlin',
  description:
    "Une question, un devis, une étude à domicile : on vous rappelle sous 48h ouvrées. Déplacement gratuit dans toute la Nièvre.",
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  // SiteContactEntry lit `?projet=` (depuis les expertises) et le pré-remplissage
  // (depuis le simulateur). Fallback pendant la résolution : le formulaire nu, identique à avant.
  return (
    <Suspense fallback={<ContactForm />}>
      <SiteContactEntry />
    </Suspense>
  );
}
