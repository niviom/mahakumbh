"use client";

import { useEffect, useRef, useState } from "react";

type VideoPlayerProps = React.VideoHTMLAttributes<HTMLVideoElement> & {
  /** Start playing on the visitor's first click anywhere on the page (browsers block real autoPlay until then). */
  playOnFirstInteraction?: boolean;
};

// Shared across every VideoPlayer instance on the page, so starting one pauses whichever other one was playing.
let currentlyPlaying: HTMLVideoElement | null = null;

export default function VideoPlayer({
  onPlay,
  onPause,
  playOnFirstInteraction = false,
  ...props
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playOnFirstInteraction) return;
    const startOnFirstClick = () => {
      videoRef.current?.play().catch(() => {});
    };
    document.addEventListener("click", startOnFirstClick, { once: true });
    return () => document.removeEventListener("click", startOnFirstClick);
  }, [playOnFirstInteraction]);

  return (
    <>
      <video
        ref={videoRef}
        onPlay={(e) => {
          if (currentlyPlaying && currentlyPlaying !== e.currentTarget) {
            currentlyPlaying.pause();
          }
          currentlyPlaying = e.currentTarget;
          setPlaying(true);
          onPlay?.(e);
        }}
        onPause={(e) => {
          if (currentlyPlaying === e.currentTarget) {
            currentlyPlaying = null;
          }
          setPlaying(false);
          onPause?.(e);
        }}
        {...props}
      />
      {!playing && (
        <button
          type="button"
          onClick={() => videoRef.current?.play()}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center"
        >
          <span className="flex items-center justify-center w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gold shadow-[var(--shadow-gold)] hover:brightness-110 transition">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="oklch(0.14 0.05 265)" className="ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}
    </>
  );
}
