import type { Metadata } from 'next';
import TunnelNavbar from '@/components/tunnel/TunnelNavbar';
import TunnelSimulateur from '@/components/tunnel/TunnelSimulateur';
import TunnelPartners from '@/components/tunnel/TunnelPartners';
import TunnelFooter from '@/components/tunnel/TunnelFooter';

export const metadata: Metadata = {
  title: 'Pompe à chaleur — Calculez vos aides en 2 minutes | Groupe Merlin',
  description:
    "Découvrez en 2 minutes le montant des aides CEE et MaPrimeRénov' pour votre pompe à chaleur. Installateur RGE en Nièvre et dans l'Yonne.",
  robots: { index: false, follow: false },
  alternates: { canonical: '/aides-pompe-a-chaleur' },
};

export default function AidesPompeAChaleurPage() {
  return (
    <>
      <TunnelNavbar />
      <div className="tunnel-page" style={{ background: '#EAE1CD', paddingTop: '64px', minHeight: '100vh' }}>
        <TunnelSimulateur />
      </div>
      <TunnelPartners />
      <TunnelFooter />
    </>
  );
}
