import type { Metadata } from 'next';
import { TEMOIGNAGES } from '@/data/home';

export const metadata: Metadata = {
  title: 'Tous nos avis clients — Groupe Merlin',
  description: 'Sur plus de 200 clients accompagnés dans la Nièvre, voici quelques avis.',
  alternates: { canonical: '/temoignages' },
};

export default function TemoignagesPage() {
  return (
    <section className="gm-temoignages-page">
      <header className="gm-temoignages-page__head">
        <h1 className="gm-temoignages-page__title">
          Tous nos <em>avis clients</em>
        </h1>
        <p className="gm-temoignages-page__lead">
          Sur plus de 200 clients accompagnés dans la Nièvre, voici quelques avis :
        </p>
      </header>

      <ul className="gm-temoignages-page__grid">
        {TEMOIGNAGES.map((t, i) => (
          <li key={i} className="gm-temoignages-page__card">
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
        ))}
      </ul>
    </section>
  );
}
