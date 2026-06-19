import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/globals/Navbar";
import Footer from "@/components/globals/Footer";
import FooterBandeauDA from "@/components/globals/FooterBandeauDA";
import RevealOnScroll from "@/components/globals/RevealOnScroll";
import SiteChrome from "@/components/globals/SiteChrome";
import { SITE_URL } from "@/lib/site";
import { AGENCES, AGENCE_SLUGS } from "@/data/agences";

// Image og: par défaut : logo Groupe Merlin. Les pages blog surchargent avec l'image de l'article
// (cf. app/blog/[slug]/page.tsx → generateMetadata).
const DEFAULT_OG_IMAGE = "/images/og-image.png";
const DEFAULT_TITLE =
  "Groupe Merlin — Chauffage, climatisation, salle de bain en Nièvre";
const DEFAULT_DESCRIPTION =
  "Le Groupe Merlin vous accompagne pour l'installation, l'entretien et le dépannage de vos équipements énergétiques en Nièvre et dans l'Yonne.";

export const metadata: Metadata = {
  // Base pour résoudre toutes les URLs absolues (canonical, og:url, schema, etc.).
  // Pas de canonical ici : chaque page déclare son propre canonical via son generateMetadata
  // (le canonical d'un layout cascade en effet vers ses enfants et masque leur propre URL).
  metadataBase: new URL(SITE_URL),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  // Open Graph + Twitter Card par défaut. Chaque page peut surcharger via son generateMetadata
  // (ex. blog/[slug] qui utilise l'image de l'article).
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Groupe Merlin",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [{ url: DEFAULT_OG_IMAGE, width: 1200, height: 630, alt: "Groupe Merlin" }],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [DEFAULT_OG_IMAGE],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
  themeColor: "#171723",
};

// Schemas JSON-LD globaux (rendus sur toutes les pages).
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Groupe Merlin",
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo/groupemerlin-logo-big.png`,
  description:
    "Plombier-chauffagiste-énergéticien en Nièvre (58) et Yonne (89). Pompes à chaleur, chaudières, climatisation, salle de bain clé en main, adoucisseurs et photovoltaïque. 6 certifications RGE.",
  areaServed: [
    { "@type": "AdministrativeArea", name: "Nièvre" },
    { "@type": "AdministrativeArea", name: "Yonne" },
  ],
  sameAs: [
    "https://www.linkedin.com/in/christophe-merlin-9a3ba2158/",
    "https://www.instagram.com/groupemerlin/",
    "https://www.facebook.com/christophe.merlin.986/",
  ],
  location: AGENCE_SLUGS.filter((s) => !AGENCES[s]?.archived).map((s) => ({
    "@type": "Place",
    name: AGENCES[s].title,
    address: { "@type": "PostalAddress", streetAddress: AGENCES[s].address },
    url: `${SITE_URL}/agences/${s}`,
  })),
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Groupe Merlin",
  url: SITE_URL,
  inLanguage: "fr-FR",
  publisher: { "@type": "Organization", name: "Groupe Merlin", url: SITE_URL },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">{`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1296986789163574');
          fbq('track', 'PageView');
        `}</Script>
        <noscript>
          <img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=1296986789163574&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}
        {/* Navbar / footer du SITE masqués sur les routes du tunnel publicitaire
            (/aides-pompe-a-chaleur*), qui ont leur propre chrome réduit. */}
        <SiteChrome>
          <Navbar />
        </SiteChrome>
        <main>{children}</main>
        <SiteChrome>
          <FooterBandeauDA />
          <Footer />
        </SiteChrome>
        <RevealOnScroll />
      </body>
    </html>
  );
}
