'use client';

import { useEffect, useRef, useState } from 'react';
import { HISTOIRE_CHAPTERS } from '@/data/home';

export default function S6Histoire() {
  const total = HISTOIRE_CHAPTERS.length;
  const [current, setCurrent] = useState(0);
  const [leaving, setLeaving] = useState<{ index: number; dir: 'up' | 'down' } | null>(null);
  const animatingRef = useRef(false);
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const goTo = (target: number) => {
    if (animatingRef.current) return;
    if (target < 0 || target >= total || target === current) return;
    animatingRef.current = true;
    const direction: 'up' | 'down' = target > current ? 'up' : 'down';
    setLeaving({ index: current, dir: direction });
    setCurrent(target);
    window.setTimeout(() => {
      setLeaving(null);
      animatingRef.current = false;
    }, 650);
  };

  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        goTo(current + 1);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        goTo(current - 1);
      }
    };
    el.addEventListener('keydown', onKey);
    return () => el.removeEventListener('keydown', onKey);
  });

  return (
    <section className="gm-s6" data-gm-section="s6-histoire" data-gm-tone="dark" id="histoire">
      <header className="gm-s6__header">
        <h2 className="gm-s6__title">
          Notre <em>histoire</em>
        </h2>
        <p className="gm-s6__intro">
          13 ans d&apos;artisanat, deux entreprises fusionnées, une équipe qui grandit chaque année. Voici comment le Groupe Merlin est devenu ce qu&apos;il est aujourd&apos;hui — raconté par Christophe.
        </p>
      </header>

      <div
        ref={carouselRef}
        className="gm-s6__carousel"
        data-gm-histoire
        tabIndex={0}
        aria-roledescription="carrousel"
      >
        {HISTOIRE_CHAPTERS.map((ch, i) => {
          const isActive = i === current;
          const isLeaving = leaving?.index === i;
          const pos = i % 2 === 0 ? 'odd' : 'even';
          return (
            <article
              key={ch.date}
              className="gm-s6__chapter"
              data-active={isActive ? 'true' : 'false'}
              data-pos={pos}
              data-leaving={isLeaving ? leaving!.dir : undefined}
            >
              <div className="gm-s6__chapter-text">
                <span className="gm-s6__chapter-date">{ch.date}</span>
                <span className="gm-s6__chapter-eyebrow">{ch.eyebrow}</span>
                <h3 className="gm-s6__chapter-title">{ch.title}</h3>
                <div
                  className="gm-s6__chapter-body"
                  dangerouslySetInnerHTML={{ __html: ch.body }}
                />
              </div>
              {ch.imageSrc ? (
                <div className="gm-s6__chapter-media">
                  <img src={ch.imageSrc} alt="L'équipe Groupe Merlin" loading="lazy" />
                </div>
              ) : (
                <div className="gm-s6__chapter-media gm-s6__chapter-media--placeholder">
                  <span>Photo {ch.date} — à fournir</span>
                </div>
              )}
            </article>
          );
        })}
      </div>

      <div className="gm-s6__nav" aria-label="Navigation entre les étapes">
        <span className="gm-s6__indicators" data-gm-histoire-counter>
          {current + 1} / {total}
        </span>
        <button
          className="gm-s6__nav-btn"
          type="button"
          data-gm-histoire-prev
          aria-label="Étape précédente"
          disabled={current === 0}
          onClick={() => goTo(current - 1)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="18 15 12 9 6 15" />
          </svg>
        </button>
        <button
          className="gm-s6__nav-btn"
          type="button"
          data-gm-histoire-next
          aria-label="Étape suivante"
          disabled={current === total - 1}
          onClick={() => goTo(current + 1)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>
      </div>

      <div className="gm-s6__outro">
        <p>Et maintenant, il ne vous reste plus qu&apos;à rejoindre notre histoire.</p>
      </div>
    </section>
  );
}
