import type { Metadata } from 'next';
import { Suspense } from 'react';
import TunnelNavbar from '@/components/tunnel/TunnelNavbar';
import TunnelFooter from '@/components/tunnel/TunnelFooter';
import MerciClient from '@/components/tunnel/MerciClient';
import TunnelPartners from '@/components/tunnel/TunnelPartners';

export const metadata: Metadata = {
  title: 'Merci, votre demande est bien reçue | Groupe Merlin',
  robots: { index: false, follow: false },
};

export default function TunnelMerciPage() {
  return (
    <>
      <TunnelNavbar />
      <div className="tunnel-page" style={{ background: '#EAE1CD', paddingTop: '64px', minHeight: '100vh' }}>
        <Suspense fallback={null}>
          <MerciClient banner={<TunnelPartners />} />
        </Suspense>
      </div>
      <TunnelFooter />
    </>
  );
}
