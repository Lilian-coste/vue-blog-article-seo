import Link from 'next/link';
import { EXPERTISES_HOME } from '@/data/home';

export default function S4bExpertises() {
  return (
    <section
      className="gm-s4b"
      data-gm-section="s4b-expertises-grid"
      data-gm-reveal
      data-gm-tone="dark"
      id="expertises"
    >
      <div className="gm-s4b__aurora" aria-hidden="true" />

      <h2 className="gm-s4b__title">
        Nos expertises au service de votre <em>confort quotidien</em>
      </h2>

      <div className="gm-s4b__grid">
        {EXPERTISES_HOME.map((exp) => (
          <Link
            key={exp.slug}
            className="gm-s4b__card"
            href={`/expertises/${exp.slug}`}
            data-reveal
            aria-label={`Voir la page ${exp.title}`}
          >
            <img
              className="gm-s4b__card-img"
              src={`/images/hero/${exp.img}`}
              alt={exp.title}
              loading="lazy"
              style={{ objectPosition: exp.pos }}
            />

            <div className="gm-s4b__card-body">
              <h3 className="gm-s4b__card-title">{exp.title}</h3>
              <p
                className="gm-s4b__card-tagline"
                dangerouslySetInnerHTML={{ __html: exp.tagline }}
              />
              <span className="gm-s4b__card-btn">Afficher</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
