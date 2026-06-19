import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';
import { PUBLISHED_ARTICLES } from '@/data/blog';
import { AGENCES, AGENCE_SLUGS } from '@/data/agences';
import { EXPERTISE_SLUGS } from '@/data/expertises';

/**
 * Sitemap généré automatiquement à `/sitemap.xml`.
 * Inclut : pages statiques + agences non archivées + toutes les expertises + tous les articles
 * (actualité et conseil). `lastModified` = `datePublished` quand disponible.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${SITE_URL}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.6 },
    { url: `${SITE_URL}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/blog-conseil`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/articles`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE_URL}/temoignages`, lastModified: now, changeFrequency: 'monthly', priority: 0.5 },
  ];

  for (const slug of AGENCE_SLUGS) {
    if (AGENCES[slug]?.archived) continue;
    routes.push({
      url: `${SITE_URL}/agences/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    });
  }

  for (const slug of EXPERTISE_SLUGS) {
    routes.push({
      url: `${SITE_URL}/expertises/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.9,
    });
  }

  for (const a of PUBLISHED_ARTICLES) {
    routes.push({
      url: `${SITE_URL}/blog/${a.slug}`,
      lastModified: a.datePublished ? new Date(a.datePublished) : now,
      changeFrequency: 'monthly',
      priority: a.isAdvice ? 0.7 : 0.6,
    });
  }

  return routes;
}
