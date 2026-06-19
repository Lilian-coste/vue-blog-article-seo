import type { Metadata } from 'next';
import Link from 'next/link';
import { BLOG_NEWS } from '@/data/blog';
import ScrollToTopOnMount from '@/components/globals/ScrollToTopOnMount';

export const metadata: Metadata = {
  title: 'Le blog — Actualités · Groupe Merlin',
  description: 'Les actualités du Groupe Merlin.',
  alternates: { canonical: '/articles' },
};

export default function ArticlesPage() {
  return (
    <section className="gm-articles-page">
      <ScrollToTopOnMount />
      <header className="gm-articles-page__head">
        <span className="gm-articles-page__eyebrow">Le blog · Actualités</span>
        <h1 className="gm-articles-page__title">
          Les <em>actualités</em> du Groupe Merlin
        </h1>
      </header>

      <div className="gm-articles-page__grid">
        {BLOG_NEWS.map((a) => {
          const imgDir = a.imgDir || 'hero';
          const hasOverlay = !!a.overlayTitle;
          return (
            <Link
              key={a.slug}
              className={`gm-articles-page__card${hasOverlay ? ' gm-articles-page__card--with-overlay' : ''}`}
              href={`/blog/${a.slug}`}
            >
              <div className="gm-articles-page__media">
                <img
                  className="gm-articles-page__img"
                  src={`/images/${imgDir}/${a.img}`}
                  alt=""
                  loading="lazy"
                />
                {hasOverlay && (
                  <div className="gm-articles-page__overlay" aria-hidden="true">
                    {a.overlayEyebrow && (
                      <span className="gm-articles-page__overlay-eyebrow">
                        {a.overlayEyebrow}
                      </span>
                    )}
                    <span className="gm-articles-page__overlay-title">{a.overlayTitle}</span>
                  </div>
                )}
                <span className="gm-articles-page__read-btn">Lire</span>
              </div>
              <span className="gm-articles-page__category">{a.category}</span>
              <h2 className="gm-articles-page__card-title">{a.title}</h2>
              <p className="gm-articles-page__card-excerpt">{a.excerpt}</p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
