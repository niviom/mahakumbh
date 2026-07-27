"use client";

import { useRef, useState } from "react";

type VideoPlayerProps = React.VideoHTMLAttributes<HTMLVideoElement>;

export default function VideoPlayer({ onPlay, onPause, ...props }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  return (
    <>
      <video
        ref={videoRef}
        onPlay={(e) => {
          setPlaying(true);
          onPlay?.(e);
        }}
        onPause={(e) => {
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
