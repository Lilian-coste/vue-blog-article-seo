import type { Metadata } from 'next';
import TunnelNavbar from '@/components/tunnel/TunnelNavbar';
import TunnelFooter from '@/components/tunnel/TunnelFooter';
import TunnelContact from '@/components/tunnel/TunnelContact';

export const metadata: Metadata = {
  title: 'Votre demande — Pompe à chaleur | Groupe Merlin',
  robots: { index: false, follow: false },
};

export default function TunnelContactPage() {
  return (
    <>
      <TunnelNavbar />
      <div className="tunnel-page" style={{ background: '#EAE1CD', paddingTop: '64px', minHeight: '100vh' }}>
        <TunnelContact />
      </div>
      <TunnelFooter />
    </>
  );
}
