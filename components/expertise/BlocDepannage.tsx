import type { Expertise } from '@/data/expertises';

export default function BlocDepannage({ exp }: { exp: Expertise }) {
  return (
    <section
      className="gm-exp-block gm-exp-block--depannage"
      data-gm-section="expertise-depannage"
      data-gm-tone="dark"
    >
      {exp.depannageImg ? (
        <div className="gm-exp-block__image">
          <img src={`/images/expertises/${exp.depannageImg}`} alt="" loading="lazy" />
        </div>
      ) : (
        <div className="gm-exp-block__image gm-exp-block__image--placeholder" aria-hidden="true" />
      )}

      <div className="gm-exp-block__text">
        <h2 className="gm-exp-block__h2">Dépannage</h2>
        <p className="gm-exp-block__h3">{exp.depannage.h3}</p>
        <div
          className="gm-exp-block__p"
          style={{ marginTop: '1rem' }}
          dangerouslySetInnerHTML={{ __html: exp.depannage.p }}
        />
      </div>
    </section>
  );
}
