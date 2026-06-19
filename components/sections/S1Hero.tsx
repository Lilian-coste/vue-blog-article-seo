'use client';

import { useEffect, useRef, useState } from 'react';
import { HERO_SLIDES } from '@/data/home';

const FIRST_CYCLE_DELAY = 3000;
const LOOP_DELAY = 3000;
const REDUCED_DELAY = 6000;

type WordState = 'active' | 'leaving' | 'neutral' | '';

export default function S1Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const [current, setCurrent] = useState(0);
  const [wordStates, setWordStates] = useState<WordState[]>(() =>
    HERO_SLIDES.map((_, i) => (i === 0 ? 'active' : ''))
  );

  useEffect(() => {
    const total = HERO_SLIDES.length;
    if (total < 2) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let ticksDone = 0;
    let timer: ReturnType<typeof setTimeout> | null = null;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      setCurrent((prev) => {
        const next = (prev + 1) % total;
        setWordStates(() =>
          HERO_SLIDES.map((_, i) => {
            if (i === next) return 'active';
            if (i === prev) return 'leaving';
            return 'neutral';
          })
        );
        return next;
      });
      ticksDone += 1;
      schedule();
    };

    const schedule = () => {
      if (timer) clearTimeout(timer);
      let delay: number;
      if (reduced) delay = REDUCED_DELAY;
      else if (ticksDone < total) delay = FIRST_CYCLE_DELAY;
      else delay = LOOP_DELAY;
      timer = setTimeout(tick, delay);
    };

    schedule();

    return () => {
      cancelled = true;
      if (timer) clearTimeout(timer);
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="gm-hero"
      data-gm-hero
      data-gm-tone="dark"
      aria-label="Présentation Groupe Merlin"
    >
      <div className="gm-hero__bg" aria-hidden="true">
        {HERO_SLIDES.map((slide, i) => (
          <img
            key={slide.img}
            className="gm-hero__bg-img"
            data-gm-hero-img
            data-active={i === current ? 'true' : 'false'}
            src={`/images/hero/${slide.img}`}
            alt=""
            loading={i === 0 ? 'eager' : 'lazy'}
            fetchPriority={i === 0 ? 'high' : 'auto'}
          />
        ))}
      </div>

      <div className="gm-hero__overlay" aria-hidden="true" />

      <div className="gm-hero__content">
        <h1 className="gm-hero__h1">
          De l&apos;installation au dépannage, on s&apos;occupe de votre confort quotidien
        </h1>
        <div className="gm-hero__rotator" aria-live="polite" aria-atomic="true">
          {HERO_SLIDES.map((slide, i) => (
            <span
              key={slide.word}
              className="gm-hero__rotator-word"
              data-gm-hero-word
              data-state={wordStates[i] || ''}
            >
              {slide.word}
            </span>
          ))}
        </div>
      </div>

      <svg
        className="gm-hero__scroll-indicator"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        aria-hidden="true"
      >
        <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </section>
  );
}
