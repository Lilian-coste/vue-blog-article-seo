import Link from 'next/link';
import { notFound } from 'next/navigation';
import { AGENCES, AGENCE_SLUGS } from '@/data/agences';
import { SITE_URL } from '@/lib/site';

export function generateStaticParams() {
  return AGENCE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ag = AGENCES[slug];
  if (!ag) return { title: 'Agence — Groupe Merlin' };
  return {
    title: `${ag.title} — Groupe Merlin`,
    description: ag.description,
    alternates: { canonical: `/agences/${slug}` },
  };
}

export default async function AgencePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const ag = AGENCES[slug];
  if (!ag || ag.archived) notFound();

  const mapsEmbed = `https://www.google.com/maps?q=${encodeURIComponent(ag.mapsQuery)}&output=embed`;

  // Schema LocalBusiness — clé pour le SEO local (Google Maps + résultats locaux).
  const localBusinessJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/agences/${slug}#agence`,
    name: ag.title,
    url: `${SITE_URL}/agences/${slug}`,
    image: `${SITE_URL}/images/logo/groupemerlin-logo-big.png`,
    telephone: ag.phoneFixe,
    email: ag.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: ag.address,
      addressCountry: 'FR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: ag.coords.lat,
      longitude: ag.coords.lon,
    },
    description: ag.description,
    parentOrganization: { '@type': 'Organization', name: 'Groupe Merlin', url: SITE_URL },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Nièvre' },
      { '@type': 'AdministrativeArea', name: 'Yonne' },
    ],
  };

  return (
    <section className="gm-agence" data-gm-section="agence">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
      />
      <div className="gm-agence__container">
        <div>
          <h1 className="gm-agence__title">{ag.title}</h1>
          <p className="gm-agence__address">{ag.address}</p>

          <div className="gm-agence__phones">
            <a className="gm-agence__phone" href={ag.phoneFixeHref}>
              {ag.phoneFixe}
            </a>
            <a className="gm-agence__phone" href={ag.phoneMobHref}>
              {ag.phoneMob}
            </a>
          </div>

          <p className="gm-agence__email">
            <a href={ag.emailHref}>{ag.email}</a>
          </p>

          <p className="gm-agence__description">{ag.description}</p>

          <Link className="gm-btn-glass gm-btn-glass--on-light" href="/contact">
            <span className="gm-btn-glass__icon gm-btn-glass__icon--phone" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z" />
              </svg>
            </span>
            <span className="gm-btn-glass__label">Nous contacter</span>
          </Link>
        </div>

        <iframe
          className="gm-agence__map"
          src={mapsEmbed}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={ag.title}
          allowFullScreen
        />
      </div>
    </section>
  );
}
