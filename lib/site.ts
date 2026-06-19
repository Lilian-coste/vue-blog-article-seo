/**
 * URL canonique du site en production (utilisée pour metadataBase, robots.txt, sitemap.xml,
 * JSON-LD, canonicals et liens absolus). Surchargeable via la variable d'env publique
 * `NEXT_PUBLIC_SITE_URL` (utile pour le staging Vercel ou un PR preview).
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'https://groupe-merlin.fr';

/**
 * Année courante utilisée dans les titres d'articles et méta-tags SEO.
 * Se met à jour automatiquement à chaque build Vercel (chaque push déclenche un rebuild).
 * NE PAS utiliser dans le corps des articles : les montants, barèmes et réglementations
 * changent d'une année à l'autre et nécessitent une relecture humaine.
 */
export const CONTENT_YEAR = new Date().getFullYear();
