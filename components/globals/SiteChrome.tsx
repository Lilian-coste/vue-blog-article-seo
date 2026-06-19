'use client';

import { usePathname } from 'next/navigation';

/**
 * Masque la navbar / le footer du SITE sur les routes du tunnel publicitaire
 * (/aides-pompe-a-chaleur*), qui ont leur propre chrome réduit. Sur toutes les
 * autres routes, rend ses enfants normalement → comportement du site inchangé.
 */
export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || '';
  if (pathname.startsWith('/aides-pompe-a-chaleur')) return null;
  return <>{children}</>;
}
