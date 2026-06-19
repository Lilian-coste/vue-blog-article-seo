'use client';

import { useEffect, useRef, useState } from 'react';
import type { Expertise } from '@/data/expertises';

export default function BlocInstallation({ exp }: { exp: Expertise }) {
  const slides = exp.install.slides;
  const total = slides.length;
  const [active, setActive] = useState(0);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root || total < 2) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') setActive((v) => (v + 1) % total);
      else if (e.key === 'ArrowLeft') setActive((v) => (v - 1 + total) % total);
    };
    root.addEventListener('keydown', onKey);
    return () => root.removeEventListener('keydown', onKey);
  }, [total]);

  return (
    <section
      className="gm-exp-block gm-exp-block--installation"
      data-gm-section="expertise-installation"
    >
      <div
        ref={rootRef}
        className="gm-exp-block__text"
        data-gm-carousel
        data-h2h3-mode="C"
        tabIndex={0}
        aria-roledescription="Carrousel"
      >
        <h2 className="gm-exp-block__h2">Installation</h2>
        <p className="gm-exp-block__h3">{exp.install.h3}</p>

        <div className="gm-exp-block__slide">
          <div
            ref={trackRef}
            className="gm-exp-block__slide-track"
            data-gm-carousel-track
            style={{ transform: `translateX(-${active * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div key={i} className="gm-exp-block__slide-item">
                {slide.h4 && <h4 className="gm-exp-block__h4">{slide.h4}</h4>}
                <div
                  className="gm-exp-block__p"
                  dangerouslySetInnerHTML={{ __html: slide.p }}
                />
              </div>
            ))}
          </div>
        </div>

        {total > 1 && (
          <div className="gm-exp-block__nav">
            <div className="gm-exp-block__dots" role="tablist" aria-label="Position dans le carrousel">
              {slides.map((_, i) => (
                <button
                  key={i}
                  className="gm-exp-block__dot"
                  type="button"
                  data-gm-carousel-dot
                  data-active={i === active ? 'true' : 'false'}
                  aria-label={`Aller à la slide ${i + 1}`}
                  onClick={() => setActive(i)}
                />
              ))}
            </div>
            <button
              className="gm-exp-block__arrow"
              type="button"
              data-gm-carousel-next
              aria-label="Slide suivante"
              onClick={() => setActive((v) => (v + 1) % total)}
            >
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {(() => {
        // Image affichée : celle de la slide active si définie, sinon
        // l'image fixe `installImg` de l'expertise (fallback).
        const activeImg = slides[active]?.img || exp.installImg;
        if (!activeImg) {
          return <div className="gm-exp-block__image gm-exp-block__image--placeholder" aria-hidden="true" />;
        }
        return (
          <div className="gm-exp-block__image">
            <img
              key={activeImg}
              src={`/images/expertises/${activeImg}`}
              alt=""
              loading="lazy"
            />
          </div>
        );
      })()}
    </section>
  );
}
