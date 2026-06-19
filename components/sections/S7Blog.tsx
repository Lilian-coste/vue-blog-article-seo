'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { BLOG_NEWS } from '@/data/blog';

const STEP_INTERVAL = 3000;

export default function S7Blog() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const prevBtnRef = useRef<HTMLButtonElement | null>(null);
  const nextBtnRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    const prevBtn = prevBtnRef.current;
    const nextBtn = nextBtnRef.current;
    if (!wrapper || !track) return;

    const cards = Array.from(track.children) as HTMLElement[];
    if (cards.length < 2) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const getVisibleCount = () => {
      const w = window.innerWidth;
      if (w <= 540) return 1;
      if (w <= 800) return 2;
      if (w <= 1100) return 3;
      return 4;
    };

    let index = 0;
    let timer: ReturnType<typeof setInterval> | null = null;
    let paused = false;

    const maxIndex = () => Math.max(0, cards.length - getVisibleCount());

    const apply = (instant = false) => {
      const card = cards[0];
      if (!card) return;
      const styles = getComputedStyle(track);
      const gap = parseFloat(styles.columnGap || styles.gap) || 24;
      const cardW = card.getBoundingClientRect().width;
      const offset = index * (cardW + gap);
      if (instant) track.setAttribute('data-resetting', 'true');
      track.style.transform = `translateX(-${offset}px)`;
      if (instant) {
        void track.offsetWidth;
        requestAnimationFrame(() => track.removeAttribute('data-resetting'));
      }
    };

    const stepNext = () => {
      if (index >= maxIndex()) {
        index = 0;
        apply(true);
      } else {
        index += 1;
        apply(false);
      }
    };

    const stepPrev = () => {
      if (index <= 0) {
        index = maxIndex();
        apply(true);
      } else {
        index -= 1;
        apply(false);
      }
    };

    const start = () => {
      if (reduced) return;
      stop();
      timer = setInterval(() => {
        if (!paused) stepNext();
      }, STEP_INTERVAL);
    };
    const stop = () => {
      if (timer) clearInterval(timer);
      timer = null;
    };

    const onMouseEnter = () => {
      paused = true;
    };
    const onMouseLeave = () => {
      paused = false;
    };
    const onPrevClick = () => {
      stepPrev();
      start();
    };
    const onNextClick = () => {
      stepNext();
      start();
    };
    const onResize = () => {
      const max = maxIndex();
      if (index > max) index = max;
      apply(true);
    };

    wrapper.addEventListener('mouseenter', onMouseEnter);
    wrapper.addEventListener('mouseleave', onMouseLeave);
    prevBtn?.addEventListener('click', onPrevClick);
    nextBtn?.addEventListener('click', onNextClick);
    window.addEventListener('resize', onResize, { passive: true });

    apply(true);
    start();

    return () => {
      stop();
      wrapper.removeEventListener('mouseenter', onMouseEnter);
      wrapper.removeEventListener('mouseleave', onMouseLeave);
      prevBtn?.removeEventListener('click', onPrevClick);
      nextBtn?.removeEventListener('click', onNextClick);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <section className="gm-s7" data-gm-section="s7-blog" id="blog">
      <div className="gm-s7__header">
        <div className="gm-s7__heading">
          <h2 className="gm-s7__title">Le blog</h2>
          <p className="gm-s7__subtitle">
            <em>Les actualités</em> du Groupe Merlin.
          </p>
        </div>
        <div className="gm-s7__actions">
          <Link className="gm-s7__view-all" href="/blog">
            Voir tous les articles
          </Link>
          <div className="gm-s7__arrows" data-gm-blog-arrows>
            <button
              ref={prevBtnRef}
              className="gm-s7__arrow"
              type="button"
              data-gm-blog-prev
              aria-label="Article précédent"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              ref={nextBtnRef}
              className="gm-s7__arrow"
              type="button"
              data-gm-blog-next
              aria-label="Article suivant"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div ref={wrapperRef} className="gm-s7__track-wrapper">
        <div ref={trackRef} className="gm-s7__track" role="list">
          {BLOG_NEWS.map((a) => {
            const imgDir = a.imgDir || 'hero';
            const hasOverlay = !!a.overlayTitle;
            const href = `/blog/${a.slug}`;
            return (
              <Link
                key={a.slug}
                className="gm-s7__card"
                href={href}
                role="listitem"
              >
                {hasOverlay ? (
                  <div className="gm-s7__card-media">
                    <img
                      className="gm-s7__card-img"
                      src={`/images/${imgDir}/${a.img}`}
                      alt={a.title}
                      loading="lazy"
                    />
                    <div className="gm-s7__card-overlay" aria-hidden="true">
                      {a.overlayEyebrow && (
                        <span className="gm-s7__card-overlay-eyebrow">{a.overlayEyebrow}</span>
                      )}
                      <span className="gm-s7__card-overlay-title">{a.overlayTitle}</span>
                    </div>
                  </div>
                ) : (
                  <img
                    className="gm-s7__card-img"
                    src={`/images/${imgDir}/${a.img}`}
                    alt={a.title}
                    loading="lazy"
                  />
                )}

                <div className="gm-s7__card-body">
                  <span className="gm-s7__card-meta">{a.category}</span>
                  <h3 className="gm-s7__card-title">{a.title}</h3>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
