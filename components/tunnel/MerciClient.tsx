'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';

/**
 * Page de remerciement du tunnel. C'est ICI que le Pixel "Lead" se déclenche :
 * on n'y arrive qu'après l'envoi RÉUSSI du formulaire de contact, donc
 * 1 affichage de cette page = 1 demande réellement reçue (jamais un échec).
 * + éléments de réassurance (sourçables) + une seule redirection vers le site.
 */
// Avis PAC sourcés (témoignages déjà publiés sur le site — data/home.ts).
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

export default function MerciClient({ banner }: { banner?: React.ReactNode }) {
  const params = useSearchParams();
  const [prenom, setPrenom] = useState('');

  useEffect(() => {
    setPrenom((params.get('prenom') || '').trim());
  }, [params]);

  useEffect(() => {
    try {
      const w = window as unknown as { fbq?: (...args: unknown[]) => void };
      if (typeof w.fbq === 'function') w.fbq('track', 'Lead');
    } catch {
      /* pixel indisponible : on n'empêche pas l'affichage de la confirmation */
    }
  }, []);

  return (
    <div className="tmerci">
      <style>{`
        .tmerci{ --creme:#EAE1CD; --ink:#171723; --marine:#14213D; --or:#FAC864; --bleu:#0055A4; --rouge:#EF4135;
          font-family:'General Sans', system-ui, -apple-system, 'Segoe UI', sans-serif; color:var(--ink);
          display:flex; align-items:flex-start; justify-content:center; padding:48px 18px 64px; }
        .tmerci__card{ width:100%; max-width:600px; text-align:center; }
        .tmerci__check{ width:74px; height:74px; border-radius:50%; background:var(--marine); color:var(--or);
          display:flex; align-items:center; justify-content:center; margin:0 auto 24px; animation:tmpop .5s cubic-bezier(.2,.8,.2,1) both; }
        @keyframes tmpop{0%{transform:scale(.6);opacity:0}100%{transform:scale(1);opacity:1}}
        .tmerci__card h1{ font-size:clamp(26px,4.4vw,36px); font-weight:600; letter-spacing:-0.01em; line-height:1.15; }
        .tmerci__sub{ color:#55505e; font-size:16.5px; margin:34px auto 0; max-width:480px; }
        .tmerci__sub em{ font-style:italic; }
        .tmerci__proof{ display:flex; flex-wrap:wrap; justify-content:center; gap:10px 12px; margin:34px auto 0; max-width:520px; }
        .tmerci__badge{ display:inline-flex; align-items:center; gap:7px; background:#fff; border:1px solid rgba(23,23,35,0.08);
          border-radius:999px; padding:9px 15px; font-size:13.5px; font-weight:500; }
        .tmerci__badge svg{ color:var(--marine); flex:none; }
        .tmerci__next{ margin-top:48px; text-align:left; }
        .tmerci__next h2{ font-size:23px; font-weight:600; margin-bottom:18px; text-align:center; }
        .tmerci__steps{ display:flex; flex-direction:column; gap:10px; }
        .tmerci__step{ display:flex; gap:13px; align-items:flex-start; background:#fff;
          border:1px solid rgba(23,23,35,0.07); border-radius:14px; padding:16px 18px; }
        .tmerci__step .n{ flex:none; width:26px; height:26px; border-radius:50%; background:var(--marine); color:#fff;
          font-size:13px; font-weight:600; display:flex; align-items:center; justify-content:center; }
        .tmerci__step p{ font-size:14.5px; color:#3a3640; margin:0; }
        .tmerci__partners{ margin-top:36px; width:min(96vw, 1000px); margin-left:50%; transform:translateX(-50%); }
        .tmerci__partners .gm-exp-partenaires{ border-top:none; border-bottom:none; }
        .tmerci__avis{ margin-top:16px; display:flex; flex-wrap:wrap; justify-content:center; gap:14px; }
        .tmerci__avis-card{ flex:1 1 280px; max-width:380px; background:#fff; border:1px solid rgba(23,23,35,0.07);
          border-radius:14px; padding:18px 20px; text-align:left; }
        .tmerci__avis-stars{ color:var(--or); font-size:14px; letter-spacing:2px; margin-bottom:7px; }
        .tmerci__avis-quote{ font-size:13px; color:#3a3640; line-height:1.5; margin:0 0 10px; }
        .tmerci__avis-name{ font-size:13px; font-weight:600; }
        .tmerci__avis-meta{ font-size:12px; color:#8a8593; margin-top:2px; }
        .tmerci__site{ margin-top:44px; }
        .tmerci__site a{ display:inline-flex; align-items:center; gap:9px; background:var(--or); color:var(--ink);
          text-decoration:none; font-weight:600; font-size:15px; padding:13px 24px; border-radius:999px;
          transition:transform .2s ease, background .2s ease; }
        .tmerci__site a:hover{ transform:translateY(-2px); background:#f0b94a; }
        .tmerci__foot{ font-size:12.5px; color:#8a8593; margin-top:26px; }
      `}</style>

      <div className="tmerci__card">
        <div className="tmerci__check">
          <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
        </div>

        <h1>{prenom ? `Merci ${prenom}, nous avons bien reçu votre demande` : 'Nous avons bien reçu votre demande'}</h1>
        <p className="tmerci__sub">
          Un conseiller du Groupe Merlin va vous recontacter dans les 48h ouvrées, afin d&apos;étudier votre projet de pompe à chaleur et vos aides <em>(les jours d&apos;ouverture sont du lundi au vendredi)</em>.
        </p>

        <div className="tmerci__proof">
          <span className="tmerci__badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.4 7.4H22l-6 4.5 2.3 7.1L12 16.5 5.7 21l2.3-7.1-6-4.5h7.6z"/></svg>
            Installateur certifié RGE
          </span>
          <span className="tmerci__badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            Devis gratuit &amp; sans engagement
          </span>
          <span className="tmerci__badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 12-9 12s-9-5-9-12a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            Nièvre &amp; Yonne
          </span>
        </div>

        <div className="tmerci__next">
          <h2>Et maintenant&nbsp;?</h2>
          <div className="tmerci__steps">
            <div className="tmerci__step"><span className="n">1</span><p>Lors de notre appel, nous cherchons à comprendre votre situation, vos besoins et votre logement, puis nous fixons ensemble un rendez-vous sur place.</p></div>
            <div className="tmerci__step"><span className="n">2</span><p>Lors du rendez-vous chez vous, nous définissons votre projet : le bon dimensionnement de votre pompe à chaleur et vos aides. Nous nous occupons aussi du montage de votre dossier d&apos;aides.</p></div>
            <div className="tmerci__step"><span className="n">3</span><p>Vous recevez un devis clair, aides déduites, sans engagement.</p></div>
          </div>
        </div>

        {banner && <div className="tmerci__partners">{banner}</div>}

        {/* Bandeau d'avis PAC — défile en sens INVERSE du bandeau partenaires. */}
        <div className="tmerci__avis" aria-label="Avis clients pompe à chaleur">
          {PAC_REVIEWS.map((r, i) => (
            <div className="tmerci__avis-card" key={i}>
              <div className="tmerci__avis-stars" aria-hidden="true">★★★★★</div>
              <p className="tmerci__avis-quote">« {r.quote} »</p>
              <div className="tmerci__avis-name">{r.name}</div>
              <div className="tmerci__avis-meta">{r.meta}</div>
            </div>
          ))}
        </div>

        <div className="tmerci__site">
          <a href="https://groupe-merlin.fr/">
            Découvrir le Groupe Merlin
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m13 5 7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  );
}
