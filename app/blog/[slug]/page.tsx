import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BLOG_ARTICLES } from '@/data/blog';
import { AGENCES } from '@/data/agences';
import S2bBandeauCertifs from '@/components/sections/S2bBandeauCertifs';

/** Marker à placer dans `article.body` (HTML) pour injecter le bandeau certifs RGE + partenaires. */
const BANDEAU_CERTIFS_MARKER = '<!-- BANDEAU_CERTIFS -->';

export function generateStaticParams() {
  return BLOG_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);
  if (!article) return { title: 'Article — Groupe Merlin' };
  const imgDir = article.imgDir || 'hero';
  // Pour les articles, on surcharge l'og:image par défaut (le logo) avec l'image de l'article :
  // c'est exactement ce que l'utilisateur voit sur la card avant de cliquer.
  const ogImage = `/images/${imgDir}/${article.img}`;
  const title = `${article.title} — Groupe Merlin`;
  return {
    title,
    description: article.excerpt,
    alternates: { canonical: `/blog/${slug}` },
    // Les articles en draft sont accessibles à leur URL pour preview/relecture,
    // mais ne sont pas dans le sitemap et ne doivent pas être indexés par Google.
    ...(article.draft ? { robots: { index: false, follow: false } } : {}),
    openGraph: {
      type: 'article',
      locale: 'fr_FR',
      siteName: 'Groupe Merlin',
      title,
      description: article.excerpt,
      url: `/blog/${slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: article.title }],
      ...(article.datePublished
        ? { publishedTime: article.datePublished, modifiedTime: article.datePublished }
        : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description: article.excerpt,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = BLOG_ARTICLES.find((a) => a.slug === slug);
  if (!article) notFound();

  const imgDir = article.imgDir || 'hero';
  const backHref = article.isAdvice ? '/blog-conseil' : '/#blog';
  const backLabel = article.isAdvice ? '← Retour au blog conseil' : '← Retour au blog';

  // ⚠️ Remplacer par le domaine de prod réel une fois le DNS pointé (cf. CLAUDE.md projet : groupe-merlin.fr).
  const SITE_URL = 'https://groupe-merlin.fr';
  const jsonLd: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    image: `${SITE_URL}/images/${imgDir}/${article.img}`,
    url: `${SITE_URL}/blog/${article.slug}`,
    mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
    author: { '@type': 'Organization', name: 'Groupe Merlin' },
    publisher: {
      '@type': 'Organization',
      name: 'Groupe Merlin',
      // ⚠️ Vérifier le chemin réel du logo dans /public.
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/groupemerlin-logo-big.png` },
    },
  };
  if (article.datePublished) {
    jsonLd.datePublished = article.datePublished;
    jsonLd.dateModified = article.datePublished;
  }

  const bodyParts = article.body.split(BANDEAU_CERTIFS_MARKER);
  const bodyBefore = bodyParts[0];
  const bodyAfter = bodyParts[1] ?? '';
  const hasBandeau = bodyParts.length > 1;

  const agence = article.agencyRef ? AGENCES[article.agencyRef] : undefined;
  const mapsEmbed = agence
    ? `https://www.google.com/maps?q=${encodeURIComponent(agence.mapsQuery)}&output=embed`
    : '';

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero bandeau — image pleine largeur avec titre en overlay */}
      <div className="gm-blog-hero">
        <img
          className="gm-blog-hero__img"
          src={`/images/${imgDir}/${article.img}`}
          alt=""
        />
        <div className="gm-blog-hero__overlay">
          <div className="gm-blog-hero__container">
            <Link className="gm-blog-hero__back" href={backHref}>
              {backLabel}
            </Link>
            <span className="gm-blog-hero__category">{article.category}</span>
            <h1 className="gm-blog-hero__title">{article.title}</h1>
          </div>
        </div>
      </div>

      {agence ? (
        <>
          <section
            className="gm-agence gm-agence--blog"
            data-gm-section="agence-blog"
            aria-label={`Coordonnées de ${agence.title}`}
          >
            <div className="gm-agence__container">
              <div>
                <p className="gm-agence__address">{agence.address}</p>
                <div className="gm-agence__phones">
                  <a className="gm-agence__phone" href={agence.phoneFixeHref}>
                    {agence.phoneFixe}
                  </a>
                  <a className="gm-agence__phone" href={agence.phoneMobHref}>
                    {agence.phoneMob}
                  </a>
                </div>
                <p className="gm-agence__email">
                  <a href={agence.emailHref}>{agence.email}</a>
                </p>
                {article.agencyBadge && (
                  <span className="gm-agence__badge">{article.agencyBadge}</span>
                )}
              </div>
              <iframe
                className="gm-agence__map"
                src={mapsEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={agence.title}
                allowFullScreen
              />
            </div>
          </section>
          <article className="gm-blog-article">
            <div className="gm-blog-article__container">
              <div
                className="gm-blog-article__body"
                dangerouslySetInnerHTML={{ __html: bodyBefore }}
              />
            </div>
          </article>
        </>
      ) : (
        <article className="gm-blog-article">
          <div className="gm-blog-article__container">
            <div
              className="gm-blog-article__body"
              dangerouslySetInnerHTML={{ __html: bodyBefore }}
            />
          </div>
        </article>
      )}

      {hasBandeau && <S2bBandeauCertifs />}
      {hasBandeau && (
        <article className="gm-blog-article gm-blog-article--continued">
          <div className="gm-blog-article__container">
            <div
              className="gm-blog-article__body"
              dangerouslySetInnerHTML={{ __html: bodyAfter }}
            />
          </div>
        </article>
      )}

      {/* CTA vers le formulaire de contact */}
      <section className="gm-article-cta" data-gm-section="article-cta">
        <div className="gm-article-cta__container">
          <h2 className="gm-article-cta__title">
            Un projet dans la Nièvre ou l&apos;Yonne&nbsp;?
          </h2>
          <p className="gm-article-cta__lead">
            Le Groupe Merlin vous accompagne de l&apos;étude à l&apos;installation,
            avec des artisans qualifiés RGE sur votre secteur.
          </p>
          <a className="gm-article-cta__btn" href="/#contact">
            Demander un devis gratuit →
          </a>
        </div>
      </section>

      {/* Bandeau articles filles — accordéon dépliable sous le CTA.
          Irrigue le cocon sémantique (cf. data/blog.ts → cocon). Affiché uniquement
          si l'article a un `cocon` défini et qu'il existe au moins un autre article publié dans ce cocon. */}
      {(() => {
        if (!article.cocon) return null;
        const related = BLOG_ARTICLES.filter(
          (a) => a.cocon === article.cocon && a.slug !== article.slug && !a.draft,
        );
        if (related.length === 0) return null;
        return (
          <section className="gm-articles-filles" data-gm-section="articles-filles">
            <details className="gm-articles-filles__details" open>
              <summary className="gm-articles-filles__summary">
                <div className="gm-articles-filles__summary-inner">
                  <span className="gm-articles-filles__label">Les guides complets sur ce sujet</span>
                  <span className="gm-articles-filles__count">
                    {related.length} article{related.length > 1 ? 's' : ''}
                  </span>
                  <span className="gm-articles-filles__chevron" aria-hidden="true">▾</span>
                </div>
              </summary>
              <div className="gm-articles-filles__body">
                <div className="gm-articles-filles__container">
                  <ul className="gm-articles-filles__grid">
                    {related.map((a) => {
                      const dir = a.imgDir || 'hero';
                      return (
                        <li key={a.slug} className="gm-related__card">
                          <Link className="gm-related__link" href={`/blog/${a.slug}`}>
                            <img
                              className="gm-related__img"
                              src={`/images/${dir}/${a.img}`}
                              alt={a.title}
                              loading="lazy"
                            />
                            <div className="gm-related__body">
                              <span className="gm-related__category">{a.category}</span>
                              <h3 className="gm-related__card-title">{a.title}</h3>
                              <p className="gm-related__excerpt">{a.excerpt}</p>
                            </div>
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </details>
          </section>
        );
      })()}
    </>
  );
}
