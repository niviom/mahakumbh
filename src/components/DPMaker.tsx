import Reveal from '@/components/Reveal';

export default function DPMaker() {
  return (
    <section id="dp-maker" className="relative py-24 sm:py-32 px-6">
      <Reveal className="max-w-4xl mx-auto text-center">
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
          Wear the Mahakumbh crest on your profile. Upload your photo and
          generate a golden branded display picture in seconds.
        </p>

        <a
          href="https://dpmaker.jbn-mahakumbh.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center mt-8 px-8 py-3 bg-gold rounded-sm font-medium tracking-wide shadow-[var(--shadow-gold)] hover:brightness-110 transition"
        >
          Create Your Mahakumbh DP
        </a>
      </Reveal>
    </section>
  );
}
