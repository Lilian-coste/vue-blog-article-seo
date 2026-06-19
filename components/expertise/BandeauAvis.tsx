import type { Expertise } from '@/data/expertises';
import { TEMOIGNAGES } from '@/data/home';

const PRODUIT_BY_SLUG: Record<string, string[]> = {
  'pompe-a-chaleur': ['Pompe à chaleur'],
  'climatisation': ['Climatisation'],
  'chaudieres-poele-granules': ['Chaudières'],
  'plomberie-salle-de-bain': ['Salle de bain'],
  'adoucisseur': ["Adoucisseur d'eau"],
  'panneaux-photovoltaiques': ['Panneaux photovoltaïques'],
};

// Sélection manuelle d'avis par nom (override) — utile quand on veut épingler
// un témoignage précis au lieu d'afficher tous ceux qui matchent le produit.
const AUTHOR_PICKS_BY_SLUG: Record<string, string[]> = {
  'climatisation': ['Kévin Graff'],
};

export default function BandeauAvis({ exp, slug }: { exp: Expertise; slug: string }) {
  const produits = PRODUIT_BY_SLUG[slug] ?? [];
  let avis = TEMOIGNAGES.filter((t) => produits.includes(t.produit));
  const picks = AUTHOR_PICKS_BY_SLUG[slug];
  if (picks) avis = avis.filter((t) => picks.includes(t.name));
  if (avis.length === 0) return null;

  return (
    <section className="gm-exp-avis" data-gm-section="expertise-avis" data-count={avis.length}>
      <h2 className="gm-exp-avis__title">
        Ils ont choisi le Groupe Merlin pour leur projet {exp.title.toLowerCase()}
      </h2>
      <ul className="gm-exp-avis__grid" role="list">
        {avis.map((a, i) => (
          <li key={i} className="gm-s5__card">
            <div className="gm-s5__card-meta">
              {a.produit}
              <span className="gm-s5__card-meta--dot">·</span>
              {a.service}
            </div>
            <p className="gm-s5__card-quote">« {a.quote} »</p>
            <div className="gm-s5__card-author">
              <span className="gm-s5__card-stars" aria-label={`${a.stars}/5`}>
                {'★'.repeat(a.stars)}
              </span>
              {' — '}
              {a.name}, {a.place}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
