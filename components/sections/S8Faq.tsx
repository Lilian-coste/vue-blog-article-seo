import { FAQ } from '@/data/home';

// Convertit une réponse HTML en texte plat pour le schema FAQPage.
// (Google demande du texte ; on garde le HTML uniquement pour l'affichage.)
function stripHtml(html: string): string {
  return html
    .replace(/<\/(p|li|ul|ol|div)>/gi, ' ')
    .replace(/<br\s*\/?\s*>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export default function S8Faq() {
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: stripHtml(item.a) },
    })),
  };

  return (
    <section className="gm-s8" data-gm-section="s8-faq" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="gm-s8__container">
        <header className="gm-s8__header">
          <h2 className="gm-s8__title">Questions fréquentes</h2>
          <p className="gm-s8__subtitle">
            Vous ne trouvez pas votre réponse ? Contactez-nous, on s&apos;en occupe.
          </p>
        </header>

        <div className="gm-s8__list">
          {FAQ.map((item, i) => (
            <details key={i} className="gm-s8__item" open={i === 0}>
              <summary>
                <span>{item.q}</span>
                <svg
                  className="gm-s8__chevron"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </summary>
              <div
                className="gm-s8__answer"
                dangerouslySetInnerHTML={{ __html: item.a }}
              />
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
