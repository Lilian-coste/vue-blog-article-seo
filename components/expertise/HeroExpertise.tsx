import type { Expertise } from '@/data/expertises';

export default function HeroExpertise({ exp }: { exp: Expertise }) {
  return (
    <section className="gm-exp-hero" data-gm-section="expertise-hero" data-gm-tone="dark">
      <img
        className="gm-exp-hero__bg"
        src={`/images/expertises/${exp.heroImg}`}
        alt={exp.title}
        loading="eager"
        fetchPriority="high"
      />
      <div className="gm-exp-hero__overlay" aria-hidden="true" />
      {/* H1 en sr-only (lu par Google + lecteurs d'écran, sans impact visuel sur le hero). */}
      <h1 className="sr-only">{exp.title}</h1>
    </section>
  );
}
