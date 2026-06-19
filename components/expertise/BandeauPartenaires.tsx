import type { Expertise } from '@/data/expertises';

type Logo = { src: string; alt: string; dir: 'partenaires' | 'certifs' };

export default function BandeauPartenaires({ exp }: { exp: Expertise }) {
  const items: Logo[] = [
    ...exp.partenaireLogos.map((p): Logo => ({ ...p, dir: 'partenaires' })),
    ...exp.certifLogos.map((c): Logo => ({ ...c, dir: 'certifs' })),
  ];
  if (items.length === 0) return null;

  // Peu de logos (≤ 3) : affichage fixe centré, pas de défilement.
  // Sinon : bandeau défilant infini (marquee).
  const isFixed = items.length <= 3;

  if (isFixed) {
    return (
      <section
        className="gm-exp-partenaires gm-exp-partenaires--fixed"
        data-gm-section="expertise-partenaires"
      >
        <div className="gm-exp-partenaires__row" role="list">
          {items.map((item, i) => (
            <span
              key={i}
              className={`gm-exp-partenaires__item${item.dir === 'certifs' ? ' gm-exp-partenaires__item--certif' : ''}`}
              role="listitem"
            >
              <img
                src={`/images/${item.dir}/${item.src}`}
                alt={item.alt}
                loading="lazy"
              />
            </span>
          ))}
        </div>
      </section>
    );
  }

  const loop = [...items, ...items];
  const half = items.length;

  return (
    <section className="gm-exp-partenaires" data-gm-section="expertise-partenaires">
      <div className="gm-exp-partenaires__track" role="list">
        {loop.map((item, i) => (
          <span
            key={i}
            className={`gm-exp-partenaires__item${item.dir === 'certifs' ? ' gm-exp-partenaires__item--certif' : ''}`}
            role="listitem"
            aria-hidden={i >= half}
          >
            <img
              src={`/images/${item.dir}/${item.src}`}
              alt={item.alt}
              loading="lazy"
            />
          </span>
        ))}
      </div>
    </section>
  );
}
