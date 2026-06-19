'use client';

import { useEffect } from 'react';

/**
 * Force le scroll en haut de la page au mount (utile sur les pages "liste"
 * pour ne pas hériter de la position scroll de la page précédente).
 */
export default function ScrollToTopOnMount() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}
