import Link from 'next/link';
import { notFound } from 'next/navigation';
import { EXPERTISES, EXPERTISE_SLUGS } from '@/data/expertises';
import HeroExpertise from '@/components/expertise/HeroExpertise';
import BlocInstallation from '@/components/expertise/BlocInstallation';
import BlocDepannage from '@/components/expertise/BlocDepannage';
import BandeauPartenaires from '@/components/expertise/BandeauPartenaires';
import BandeauAvis from '@/components/expertise/BandeauAvis';
import CtaContact from '@/components/expertise/CtaContact';
import S3Simulateur from '@/components/sections/S3Simulateur';
import { SITE_URL } from '@/lib/site';

export function generateStaticParams() {
  return EXPERTISE_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exp = EXPERTISES[slug];
  if (!exp) return { title: 'Expertise — Groupe Merlin' };
  // Si un bloc `seo` est défini sur l'expertise, on l'utilise (PAC pour démarrer).
  // Sinon fallback sur les valeurs historiques (les 5 autres expertises restent identiques).
  return {
    title: exp.seo?.title ?? `${exp.title} — Groupe Merlin`,
    description: exp.seo?.description ?? exp.install.h3,
    alternates: { canonical: `/expertises/${slug}` },
  };
}

export default async function ExpertisePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exp = EXPERTISES[slug];
  if (!exp) notFound();

  // Schema Service (Schema.org) — relie l'expertise à l'Organization Groupe Merlin
  // et déclare la zone desservie (Nièvre + Yonne).
  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: exp.title,
    description: exp.install.h3,
    url: `${SITE_URL}/expertises/${slug}`,
    image: `${SITE_URL}/images/expertises/${exp.heroImg}`,
    provider: {
      '@type': 'Organization',
      name: 'Groupe Merlin',
      url: SITE_URL,
      logo: `${SITE_URL}/images/logo/groupemerlin-logo-big.png`,
    },
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Nièvre' },
      { '@type': 'AdministrativeArea', name: 'Yonne' },
    ],
    serviceType: exp.title,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <HeroExpertise exp={exp} />
      <BlocInstallation exp={exp} />
      <BlocDepannage exp={exp} />
      <BandeauPartenaires exp={exp} />
      <BandeauAvis exp={exp} slug={slug} />
      {exp.hasSimulator && <S3Simulateur />}
      <CtaContact projet={slug} />
      {/* Lien discret vers la page mère SEO (« guide complet ») — voir data/expertises.ts → seo.guideSlug.
          Ne casse pas la conversion : positionné après le CTA principal, en bas de page. */}
      {exp.seo?.guideSlug && (
        <section className="gm-exp-guide" data-gm-section="expertise-guide">
          <div className="gm-exp-guide__container">
            <Link className="gm-exp-guide__link" href={`/blog/${exp.seo.guideSlug}`}>
              {exp.seo.guideLabel ?? `Notre guide complet sur ${exp.title.toLowerCase()}`}
              <span className="gm-exp-guide__arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      )}
    </>
  );
}
