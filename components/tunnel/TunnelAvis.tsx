// Avis PAC sourcés (témoignages publiés sur le site — data/home.ts).
const PAC_REVIEWS = [
  {
    quote:
      "Exceptionnel ! L'équipe a entretenu ma pompe à chaleur avec professionnalisme. J'ai vraiment ressenti une différence dans la performance et l'efficacité de mon système. Hautement recommandé.",
    name: 'Marc Dubois',
    meta: 'Pompe à chaleur · Entretien',
  },
  {
    quote:
      "Efficaces et rapides !!!!! Cherif, l'installateur est d'un professionnalisme extraordinaire, conscienceux, agréable et techniquement irréprochable. Son travail est parfait, net et propre. Un GRAND merci à lui et Mr Merlin.",
    name: 'Sarah Grégoire',
    meta: 'Pompe à chaleur · Installation',
  },
];

/** Bandeau d'avis PAC (fixe) affiché en bas de la landing du tunnel, avant le footer. */
export default function TunnelAvis() {
  return (
    <section className="tunnel-avis" aria-label="Avis clients pompe à chaleur">
      <style>{`
        .tunnel-avis{ background:#EAE1CD; padding:clamp(2.5rem,5vw,4rem) 18px clamp(2rem,4vw,3rem);
          font-family:'General Sans', system-ui, -apple-system, 'Segoe UI', sans-serif; }
        .tunnel-avis__head{ text-align:center; max-width:720px; margin:0 auto 28px; }
        .tunnel-avis__eyebrow{ display:inline-block; font-size:13px; font-weight:600; letter-spacing:0.08em;
          text-transform:uppercase; color:#14213D; opacity:.6; margin-bottom:8px; }
        .tunnel-avis__title{ font-size:clamp(22px,3.4vw,30px); font-weight:600; color:#171723; margin:0; letter-spacing:-0.01em; }
        .tunnel-avis__grid{ display:flex; flex-wrap:wrap; justify-content:center; gap:16px; max-width:900px; margin:0 auto; }
        .tunnel-avis__card{ flex:1 1 320px; max-width:420px; background:#fff; border:1px solid rgba(23,23,35,0.08);
          border-radius:16px; padding:22px 24px; text-align:left; }
        .tunnel-avis__stars{ color:#FAC864; font-size:15px; letter-spacing:2px; margin-bottom:9px; }
        .tunnel-avis__quote{ font-size:14px; color:#3a3640; line-height:1.6; margin:0 0 12px; }
        .tunnel-avis__name{ font-weight:600; color:#171723; font-size:14px; }
        .tunnel-avis__meta{ font-size:12.5px; color:#8a8593; margin-top:2px; }
      `}</style>
      <div className="tunnel-avis__head">
        <span className="tunnel-avis__eyebrow">Avis clients</span>
        <h2 className="tunnel-avis__title">Ils nous ont fait confiance</h2>
      </div>
      <div className="tunnel-avis__grid">
        {PAC_REVIEWS.map((r, i) => (
          <div className="tunnel-avis__card" key={i}>
            <div className="tunnel-avis__stars" aria-hidden="true">★★★★★</div>
            <p className="tunnel-avis__quote">« {r.quote} »</p>
            <div className="tunnel-avis__name">{r.name}</div>
            <div className="tunnel-avis__meta">{r.meta}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
