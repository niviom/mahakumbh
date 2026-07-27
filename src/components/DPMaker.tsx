"use client";

import { useEffect, useRef, useState } from "react";

const dpFrame = "/assets/dp-frame.png";

const SIZE = 1024;
const CENTER = SIZE / 2;
const INNER_RADIUS = 360;

export default function DPMaker() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [frameLoaded, setFrameLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<HTMLImageElement | null>(null);

  // Pre-load the frame so it is available immediately.
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      frameRef.current = img;
      setFrameLoaded(true);
    };
    img.src = dpFrame;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !frameLoaded) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Reset
    ctx.clearRect(0, 0, SIZE, SIZE);
    setReady(false);

    const drawFrame = () => {
      if (frameRef.current) {
        ctx.drawImage(frameRef.current, 0, 0, SIZE, SIZE);
      }
      setReady(true);
    };

    if (photoUrl) {
      const photo = new Image();
      photo.crossOrigin = "anonymous";
      photo.onload = () => {
        // Circular background fallback
        ctx.fillStyle = "#080c16";
        ctx.beginPath();
        ctx.arc(CENTER, CENTER, INNER_RADIUS, 0, Math.PI * 2);
        ctx.fill();

        // Clip and draw photo
        ctx.save();
        ctx.beginPath();
        ctx.arc(CENTER, CENTER, INNER_RADIUS, 0, Math.PI * 2);
        ctx.closePath();
        ctx.clip();

        const scale = Math.max(
          (INNER_RADIUS * 2) / photo.width,
          (INNER_RADIUS * 2) / photo.height
        );
        const w = photo.width * scale;
        const h = photo.height * scale;
        const x = CENTER - w / 2;
        const y = CENTER - h / 2;
        ctx.drawImage(photo, x, y, w, h);
        ctx.restore();

        drawFrame();
      };
      photo.onerror = () => drawFrame();
      photo.src = photoUrl;
    } else {
      drawFrame();
    }
  }, [photoUrl, frameLoaded]);

  const handleFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      setPhotoUrl((ev.target?.result as string) || null);
    };
    reader.readAsDataURL(file);
  };

  const download = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "mahakumbh-dp-2026.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  return (
    <section id="dp-maker" className="relative py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[oklch(0.82_0.14_82)]">
          Social Ready
        </p>
        <h2 className="font-display text-4xl sm:text-6xl mt-4 text-gold">
          Mahakumbh Display Picture Maker
        </h2>
        <div className="flex items-center justify-center gap-3 my-6">
          <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-[oklch(0.72_0.14_78)] to-transparent" />
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            className="text-[oklch(0.82_0.14_82)]"
          >
            <path
              d="M12 2 L14 10 L22 12 L14 14 L12 22 L10 14 L2 12 L10 10 Z"
              fill="currentColor"
              opacity="0.9"
            />
          </svg>
          <span className="h-px w-16 sm:w-24 bg-gradient-to-r from-transparent via-[oklch(0.72_0.14_78)] to-transparent" />
        </div>
        <p className="max-w-2xl mx-auto text-[oklch(0.85_0.03_85)] leading-relaxed">
          Wear the Mahakumbh crest on your profile. Upload your photo and generate a
          golden branded display picture in seconds.
        </p>

        {!isOpen ? (
          <button
            onClick={() => setIsOpen(true)}
            className="inline-flex items-center justify-center mt-8 px-8 py-3 bg-gold rounded-sm font-medium tracking-wide shadow-[var(--shadow-gold)] hover:brightness-110 transition"
          >
            Create Your Mahakumbh DP
          </button>
        ) : (
          <div className="mt-10 space-y-6">
            <label className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gold text-[oklch(0.9_0.1_85)] rounded-sm cursor-pointer hover:bg-[oklch(0.72_0.14_78/0.1)] transition">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <span className="font-medium">Upload your photo</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="hidden"
              />
            </label>

            <div className="relative mx-auto w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden shadow-[0_0_50px_-15px_oklch(0.72_0.14_78/0.5)] bg-[oklch(0.14_0.05_265)]">
              <canvas
                ref={canvasRef}
                width={SIZE}
                height={SIZE}
                className="w-full h-full object-cover"
              />
              {!photoUrl && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="text-sm text-[oklch(0.75_0.04_85)]">
                    Upload a photo to preview
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={download}
                disabled={!ready}
                className="inline-flex items-center justify-center px-8 py-3 bg-gold rounded-sm font-medium tracking-wide shadow-[var(--shadow-gold)] hover:brightness-110 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Download Your Mahakumbh DP
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  setPhotoUrl(null);
                  setReady(false);
                }}
                className="inline-flex items-center justify-center px-6 py-3 border border-[oklch(0.72_0.14_78/0.4)] text-[oklch(0.9_0.1_85)] rounded-sm hover:bg-[oklch(0.72_0.14_78/0.1)] transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
