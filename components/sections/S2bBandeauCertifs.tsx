import { CERTIFS, PARTENAIRES } from '@/data/home';

export default function S2bBandeauCertifs() {
  return (
    <section
      className="gm-section gm-s2b"
      data-gm-section="s2b-bandeau-certifs"
      aria-label="Certifications et partenaires"
    >
      <header className="gm-s2b__header">
        <span className="gm-s2b__eyebrow">Conformité &amp; confiance</span>
        <h2
          className="gm-s2b__title"
          dangerouslySetInnerHTML={{
            __html: 'Certifications RGE et <em>partenaires de confiance</em>',
          }}
        />
      </header>

      <div className="gm-s2b__rows">
        <div
          className="gm-s2b__row gm-s2b__row--certifs"
          aria-label="Nos certifications"
        >
          <span className="gm-s2b__row-label">Nos certifications</span>
          <div className="gm-s2b__track">
            {[0, 1].map((g) => (
              <span key={g} style={{ display: 'contents' }}>
                {CERTIFS.map((item) => (
                  <div
                    key={`${g}-${item.src}`}
                    className="gm-s2b__item gm-s2b__item--certif"
                  >
                    <img
                      src={`/images/certifs/${item.src}`}
                      alt={item.alt}
                      loading="lazy"
                    />
                  </div>
                ))}
              </span>
            ))}
          </div>
        </div>

        <div
          className="gm-s2b__row gm-s2b__row--partenaires"
          aria-label="Nos partenaires"
        >
          <span className="gm-s2b__row-label">Nos partenaires</span>
          <div className="gm-s2b__track">
            {[0, 1].map((g) => (
              <span key={g} style={{ display: 'contents' }}>
                {PARTENAIRES.map((item) => (
                  <div
                    key={`${g}-${item.src}`}
                    className="gm-s2b__item gm-s2b__item--partenaire"
                  >
                    <img
                      src={`/images/partenaires/${item.src}`}
                      alt={item.alt}
                      loading="lazy"
                    />
                  </div>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
