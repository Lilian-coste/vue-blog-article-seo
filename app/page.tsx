import type { Metadata } from 'next';
import S1Hero from '@/components/sections/S1Hero';
// import S2Video from '@/components/sections/S2Video'; // [STANDBY] À réactiver dès que la vidéo de présentation est livrée par Christophe.
import S2bBandeauCertifs from '@/components/sections/S2bBandeauCertifs';
import S3Simulateur from '@/components/sections/S3Simulateur';
import S4aServices from '@/components/sections/S4aServices';
import S4bExpertises from '@/components/sections/S4bExpertises';
import S5Temoignages from '@/components/sections/S5Temoignages';
// import S6Histoire from '@/components/sections/S6Histoire'; // [STANDBY] mise en page archivée — à réactiver quand toutes les images de la section Histoire sont fournies (et ajouter imageSrc à 2013 + 2015 dans data/home.ts).
import S6HistoireTemp from '@/components/sections/S6HistoireTemp';
import S7Blog from '@/components/sections/S7Blog';
import S8Faq from '@/components/sections/S8Faq';

// Canonical de la home. Le title/description sont hérités du layout racine.
export const metadata: Metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <S1Hero />
      {/* <S2Video /> — [STANDBY] vidéo non livrée */}
      <S2bBandeauCertifs />
      <S3Simulateur />
      <S4aServices />
      <S4bExpertises />
      <S5Temoignages />
      {/* <S6Histoire /> — [STANDBY] mise en page archivée (carousel + images side-by-side) */}
      <S6HistoireTemp />
      <S7Blog />
      <S8Faq />
    </>
  );
}
