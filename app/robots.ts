import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

/**
 * Servi automatiquement à `/robots.txt` par Next.js.
 * - Allow global pour tous les crawlers.
 * - Allow explicite des crawlers IA (signal GEO : GPTBot, ClaudeBot, PerplexityBot,
 *   Google-Extended, CCBot).
 * - Déclare le sitemap canonique.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: '*', allow: '/' },
      { userAgent: 'GPTBot', allow: '/' },
      { userAgent: 'ClaudeBot', allow: '/' },
      { userAgent: 'PerplexityBot', allow: '/' },
      { userAgent: 'Google-Extended', allow: '/' },
      { userAgent: 'CCBot', allow: '/' },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
