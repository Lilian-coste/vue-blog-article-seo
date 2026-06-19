import Link from 'next/link';
import { TEMOIGNAGES, type Temoignage } from '@/data/home';

function TemoignageCard({ t, ariaHidden = false }: { t: Temoignage; ariaHidden?: boolean }) {
  return (
    <li className="gm-s5__card" aria-hidden={ariaHidden || undefined}>
      <div className="gm-s5__card-meta">
        {t.produit}
        <span className="gm-s5__card-meta--dot">·</span>
        {t.service}
      </div>
      <p className="gm-s5__card-quote">« {t.quote} »</p>
      <div className="gm-s5__card-footer">
        <span className="gm-s5__card-avatar" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-3.31 0-8 1.66-8 5v1h16v-1c0-3.34-4.69-5-8-5z" />
          </svg>
        </span>
        <div className="gm-s5__card-author">
          <span className="gm-s5__card-stars" aria-label={`${t.stars}/5`}>
            {'★'.repeat(t.stars)}
          </span>
          <span className="gm-s5__card-author-name">{t.name}</span>
          <span className="gm-s5__card-author-place">{t.place}</span>
        </div>
      </div>
    </li>
  );
}

export default function S5Temoignages() {
  const total = TEMOIGNAGES.length;
  const perCol = Math.ceil(total / 3);
  const cols = [
    TEMOIGNAGES.slice(0, perCol),
    TEMOIGNAGES.slice(perCol, perCol * 2),
    TEMOIGNAGES.slice(perCol * 2),
  ];

  return (
    <section className="gm-s5" data-gm-section="s5-temoignages" data-gm-tone="dark" id="temoignages">
      <header className="gm-s5__header">
        <h2 className="gm-s5__title">Ils nous ont fait confiance</h2>
        <Link className="gm-s5__view-all" href="/temoignages">
          Voir tous les avis
        </Link>
      </header>

      <div className="gm-s5__columns" role="region" aria-label="Avis clients défilants">
        {cols.map((col, idx) => (
          <div key={idx} className={`gm-s5__column gm-s5__column--${idx + 1}`}>
            <ul className="gm-s5__column-track">
              {col.map((t, i) => (
                <TemoignageCard key={`a-${idx}-${i}`} t={t} />
              ))}
              {col.map((t, i) => (
                <TemoignageCard key={`b-${idx}-${i}`} t={t} ariaHidden />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
