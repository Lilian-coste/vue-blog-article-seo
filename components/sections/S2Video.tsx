'use client';

import { useEffect, useRef, useState } from 'react';

type Props = {
  videoSrc?: string;
};

export default function S2Video({ videoSrc }: Props) {
  const playerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    const player = playerRef.current;
    const video = videoRef.current;
    if (!player || !video) return;

    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(player);
    return () => io.disconnect();
  }, [videoSrc]);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;
    const next = !video.muted;
    video.muted = next;
    setMuted(next);
  };

  return (
    <section className="gm-section gm-s2" data-gm-section="s2-video">
      <div
        ref={playerRef}
        className="gm-s2__player"
        data-gm-video
        aria-label="Vidéo de présentation du Groupe Merlin"
      >
        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            playsInline
            loop
            preload="metadata"
          />
        ) : (
          <div className="gm-s2__placeholder">
            <span>Vidéo de présentation — à venir</span>
          </div>
        )}

        <button
          className="gm-s2__sound-toggle"
          data-gm-sound-toggle
          data-muted={muted ? 'true' : 'false'}
          type="button"
          aria-pressed={!muted}
          aria-label={muted ? 'Activer le son' : 'Couper le son'}
          onClick={toggleSound}
        >
          <svg data-state="muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <line x1="22" y1="9" x2="16" y2="15" />
            <line x1="16" y1="9" x2="22" y2="15" />
          </svg>
          <svg data-state="unmuted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M11 5L6 9H2v6h4l5 4V5z" />
            <path d="M15.54 8.46a5 5 0 010 7.07" />
            <path d="M19.07 4.93a10 10 0 010 14.14" />
          </svg>
        </button>
      </div>
    </section>
  );
}
