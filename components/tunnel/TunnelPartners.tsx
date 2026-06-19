import BandeauPartenaires from '@/components/expertise/BandeauPartenaires';
import { EXPERTISES } from '@/data/expertises';

/** Bandeau défilant partenaires + certifications RGE (logos de l'expertise PAC),
 *  en bas de la landing du tunnel. Mêmes logos que sur la page de remerciement. */
export default function TunnelPartners() {
  return (
    <div className="tunnel-partners">
      <style>{`
        .tunnel-partners{ background:#EAE1CD; padding-top:8px; }
        .tunnel-partners .gm-exp-partenaires{ border-top:none; border-bottom:none; }
        /* Tous les logos dans un cadre blanc identique, coins arrondis, même échelle. */
        .tunnel-partners .gm-exp-partenaires__item,
        .tunnel-partners .gm-exp-partenaires__item--certif,
        .tunnel-partners .gm-exp-partenaires__item--partenaire{
          width:clamp(140px,16vw,168px); height:96px; box-sizing:border-box;
          background:#fff; border:1px solid rgba(23,23,35,0.08); border-radius:12px;
          display:flex; align-items:center; justify-content:center; padding:16px;
        }
        .tunnel-partners .gm-exp-partenaires__item img{
          max-width:100%; max-height:100%; width:auto; height:auto;
          object-fit:contain; transform:none !important;
        }
      `}</style>
      <BandeauPartenaires exp={EXPERTISES['pompe-a-chaleur']} />
    </div>
  );
}
