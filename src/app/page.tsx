import Link from 'next/link';
import DPMaker from '@/components/DPMaker';
import VideoPlayer from '@/components/VideoPlayer';
import Reveal from '@/components/Reveal';

// Direct Wistia delivery links (converted from the wistia-player embeds — no embed script loaded).
const heroVideo =
  'https://embed-ssl.wistia.com/deliveries/c67b7f9d0ec4d2f4e3b63a30cb0b8ed607502cc1.bin';

// "Experiance" clip used as the Experience section footage.
const gatheringVideo =
  'https://embed-ssl.wistia.com/deliveries/ff366cd973b88eb2023fde9554acf1f8d1f500f9.bin';
const gatheringPoster =
  'https://embed-ssl.wistia.com/deliveries/294aff086e2017112d577b21401967c21f8d4e22.bin';

const aiCenterVideo =
  'https://embed-ssl.wistia.com/deliveries/32f072a151008e1e16bc7285da131b9d33f9bba5.bin';
const logo = '/assets/pagariya-mahakumbh-logo.png';
const gatewayPoster = '/assets/universe/gateway.jpg';
const bhamashahPoster = '/assets/universe/bhamashah.jpg';
const centerstagePoster = '/assets/universe/centerstage.jpg';
const networkingPoster = '/assets/universe/networking.jpg';
const thinktankPoster = '/assets/universe/thinktank.jpg';
const capitalPoster = '/assets/universe/capital.jpg';
const suitesPoster = '/assets/universe/suites.jpg';
const aiPoster = '/assets/universe/ai.jpg';
const bhojanamPoster = '/assets/universe/bhojanam.jpg';
const honourPoster = '/assets/universe/honour.jpg';
const jioWorldHotel = '/assets/hotels/jio-world.jpg';
const tridentDeluxeHotel = '/assets/hotels/1-trident-bkc-deluxe.jpg';
const tridentPoolViewHotel = '/assets/hotels/2-trident-bkc-poolview.jpg';
const sofitelHotel = '/assets/hotels/3-sofitel-bkc-luxury.jpg';
const ibisHotel = '/assets/hotels/4-ibis-bkc-standard.jpg';
const gingerAirportHotel = '/assets/hotels/5-ginger-airport-standard.jpg';
const aurikaDeluxHotel = '/assets/hotels/6-aurika-skycity-airport-delux.jpg';
const aurikaPremiumHotel =
  '/assets/hotels/7-aurika-skycity-airport-premium.jpg';
const lemonTreeHotel = '/assets/hotels/8-lemon-tree-premier-standard.jpg';
const bhansaliLogo = '/assets/sponsors/sponsor-bhansali.png';
const goldNahar = '/assets/sponsors/sponsor-nahar.png';
const goldPagariyaGroup = '/assets/sponsors/sponsor-pagariya-group.png';
const goldAuthum = '/assets/sponsors/sponsor-authum.png';
const goldRdbGroup = '/assets/sponsors/sponsor-rdb-group.png';
const goldIifl = '/assets/sponsors/sponsor-iifl.png';
const goldPantomath = '/assets/sponsors/sponsor-pantomath.png';
const goldSuryaGroup = '/assets/sponsors/sponsor-surya-group.png';
const goldWaaree = '/assets/sponsors/sponsor-waaree.png';
const goldMonarchNetworkworth =
  '/assets/sponsors/sponsor-monarch-networkworth.png';

const Divider = () => (
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
);

const CornerOrnament = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 100 100"
    className={`absolute w-20 h-20 sm:w-28 sm:h-28 text-[oklch(0.72_0.14_78)] ${className}`}
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
  >
    <path d="M0 40 Q0 0 40 0" opacity="0.9" />
    <path d="M0 55 Q0 15 55 15" opacity="0.5" />
    <circle cx="15" cy="15" r="2" fill="currentColor" />
    <path
      d="M20 30 Q30 20 40 30 Q30 25 20 30 Z"
      fill="currentColor"
      opacity="0.7"
    />
  </svg>
);

interface GalaxyZone {
  no: string;
  title: string;
  floor: string;
  tagline: string;
  body: string;
  poster: string;
  video: string;
  color: string;
  glow: string;
  planetType: 'rocky' | 'gas' | 'ice' | 'terran' | 'cratered';
  hasRings?: boolean;
}

const GalaxyUniverse = ({ zones }: { zones: GalaxyZone[] }) => {
  const ringConfigs = [
    {
      radiusVar: 'var(--orbit-radius-1)',
      duration: 26,
      items: zones.slice(0, 3),
      zBase: 6,
    },
    {
      radiusVar: 'var(--orbit-radius-2)',
      duration: 36,
      items: zones.slice(3, 7),
      zBase: 8,
    },
    {
      radiusVar: 'var(--orbit-radius-3)',
      duration: 48,
      items: zones.slice(7, 10),
      zBase: 10,
    },
  ];

  return (
    <section
      id="galaxy"
      className="relative py-24 sm:py-32 px-3 sm:px-6 overflow-hidden"
    >
      <Reveal className="max-w-7xl mx-auto text-center">
        <p className="text-xs tracking-[0.4em] uppercase text-[oklch(0.82_0.14_82)]">
          The Constellation
        </p>
        <h2 className="font-display text-4xl sm:text-6xl mt-4 text-gold">
          The Mahakumbh Universe
        </h2>
        <Divider />
      </Reveal>

      <div className="galaxy-area mt-16 sm:mt-20">
        {/* Ambient background glow */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background:
              'radial-gradient(circle, oklch(0.72 0.14 78 / 0.12) 0%, transparent 65%)',
          }}
        />

        {/* Core sun */}
        <div className="galaxy-core">
          <div className="font-display leading-tight text-[oklch(0.14_0.05_265)]">
            Mahakumbh
            <br />
            Universe
          </div>
        </div>

        {/* Orbit rings and planets */}
        {ringConfigs.map((ring, ringIndex) => (
          <div
            key={ringIndex}
            className="galaxy-orbit-ring"
            style={{
              width: `calc(${ring.radiusVar} * 2)`,
              height: `calc(${ring.radiusVar} * 2)`,
            }}
          />
        ))}

        {ringConfigs.map((ring, ringIndex) =>
          ring.items.map((zone, itemIndex) => {
            const total = ring.items.length;
            const startAngle = (360 / total) * itemIndex + ringIndex * 55;

            return (
              <a
                key={zone.no}
                href={`#universe-${zone.no}`}
                className="galaxy-planet"
                style={
                  {
                    '--orbit-radius': ring.radiusVar,
                    '--orbit-duration': `${ring.duration}s`,
                    '--start-angle': startAngle,
                    '--planet-color': zone.color,
                    '--planet-glow': zone.glow,
                    '--planet-z': ring.zBase,
                  } as React.CSSProperties
                }
                aria-label={`${zone.no}. ${zone.title}`}
              >
                <span className="galaxy-planet-number">{zone.no}</span>
                <div className={`galaxy-planet-body ${zone.planetType}`} />
                {zone.hasRings && <span className="galaxy-planet-rings" />}
                <span className="galaxy-planet-label">{zone.title}</span>
                <span className="galaxy-planet-tooltip">{zone.tagline}</span>
              </a>
            );
          }),
        )}
      </div>

      <Reveal className="text-center mt-10 sm:mt-14">
        <p className="text-xs tracking-[0.3em] uppercase text-[oklch(0.75_0.04_85)]">
          Click a planet to explore its zone
        </p>
      </Reveal>

      {/* Mobile-only legend — orbit is too tight for floating labels below 640px */}
      <div className="sm:hidden mt-6 grid grid-cols-2 gap-2 max-w-sm mx-auto">
        {zones.map((zone) => (
          <a
            key={zone.no}
            href={`#universe-${zone.no}`}
            className="flex items-center gap-2 rounded-sm border border-[oklch(0.72_0.14_78/0.25)] bg-[oklch(0.2_0.06_265/0.6)] px-2.5 py-2 text-left"
          >
            <span
              className="flex-none flex items-center justify-center w-5 h-5 rounded-full text-[0.6rem] font-bold text-[oklch(0.18_0.06_265)]"
              style={{ background: 'var(--gradient-gold)' }}
            >
              {zone.no}
            </span>
            <span className="text-[0.65rem] leading-tight text-[oklch(0.85_0.03_85)]">
              {zone.title}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default function Home() {
  const stats = [
    { k: '3000+', v: 'Delegates' },
    { k: '2,50,000', v: 'sqft Event Area' },
    { k: '16', v: 'Mega Sessions' },
    { k: '50+', v: 'Mega Business Houses' },
  ];

  const universe: GalaxyZone[] = [
    {
      no: '01',
      title: 'Gateway of Mahakumbh',
      floor: 'Basement · The Arrival',
      tagline: 'Every legacy begins with an arrival.',
      body: '100% paperless, app-driven entry. Face-recognition check-in with anti-spoofing, QR backup, digital badges, on-arrival help desk and a welcome lounge — every touchpoint powered by the One JBN App.',
      poster: gatewayPoster,
      video:
        'https://embed-ssl.wistia.com/deliveries/899540984209746ee547c9515a704e4488779da8.bin',
      color:
        'radial-gradient(circle at 35% 35%, oklch(0.85 0.14 25) 0%, oklch(0.6 0.18 20) 50%, oklch(0.35 0.12 15) 100%)',
      glow: 'oklch(0.85 0.14 25 / 0.6)',
      planetType: 'rocky',
    },
    {
      no: '02',
      title: 'The Grand Bhamashah Showdown',
      floor: 'Ground Floor · Pavilion 1 · Flagship',
      tagline: "Where India's business titans open doors to opportunity.",
      body: '52,627 sq. ft. of invite-only Business Houses — the giver side of Mahakumbh. 50+ ₹100 Cr+ houses in branded 250–500 sq. ft. corporate lounges, dual chairman/purchase representation and pre-fixed 5-minute power meets via the app.',
      poster: bhamashahPoster,
      video:
        'https://embed-ssl.wistia.com/deliveries/a0551faa22d7250766d311fff56b880bb0e741c5.bin',
      color:
        'radial-gradient(circle at 35% 35%, oklch(0.88 0.13 145) 0%, oklch(0.62 0.16 140) 50%, oklch(0.35 0.1 135) 100%)',
      glow: 'oklch(0.88 0.13 145 / 0.6)',
      planetType: 'terran',
    },
    {
      no: '03',
      title: 'The Grand Center Stage',
      floor: 'Ground Floor · Pavilion 2 · The Spotlight',
      tagline: 'The spotlight and experience zone.',
      body: 'A ~1,500-seat main arena hosting celebrity keynote sessions, an IIFA-style Inaugural & Award Night, the One Nation · One JITO · One JBN Independence Day tricolour ceremony, and The Grand Experience Night live spectacle.',
      poster: centerstagePoster,
      video:
        'https://embed-ssl.wistia.com/deliveries/8abe897a9a92af366674f8dac033f1dcfaeb0268.bin',
      color:
        'radial-gradient(circle at 35% 35%, oklch(0.85 0.14 300) 0%, oklch(0.6 0.16 295) 50%, oklch(0.35 0.1 290) 100%)',
      glow: 'oklch(0.85 0.14 300 / 0.6)',
      planetType: 'gas',
    },
    {
      no: '04',
      title: 'The Great Indian Networking Festival',
      floor: 'Second Floor · Structured Networking',
      tagline: 'A thousand introductions. One full floor.',
      body: 'Speed, referral and blind meets, AI-driven business matchmaking, buyer–seller rounds, leadership circles for Chapter Chairmen, JATF / JEAP / SA and international tracks — plus icebreaker games that turn a crowd into precise, high-value introductions.',
      poster: networkingPoster,
      video:
        'https://embed-ssl.wistia.com/deliveries/ad983ef71b31fca03a481dd51669d4c5e49eaab5.bin',
      color:
        'radial-gradient(circle at 35% 35%, oklch(0.85 0.12 245) 0%, oklch(0.58 0.14 240) 50%, oklch(0.32 0.09 235) 100%)',
      glow: 'oklch(0.85 0.12 245 / 0.6)',
      planetType: 'ice',
    },
    {
      no: '05',
      title: 'The Think Tank Floor',
      floor: 'First Floor · Learning',
      tagline: 'Knowledge, sharpened by practice.',
      body: 'Encounter-style clinics, masterclasses, skill and leadership programs, one-to-one encounter panels and industry think tanks across eight dedicated suites.',
      poster: thinktankPoster,
      video:
        'https://embed-ssl.wistia.com/deliveries/c0bb06ae661b0e8cbfd74c667e37db7c83c18088.bin',
      color:
        'radial-gradient(circle at 35% 35%, oklch(0.88 0.13 75) 0%, oklch(0.65 0.15 70) 50%, oklch(0.38 0.1 65) 100%)',
      glow: 'oklch(0.88 0.13 75 / 0.6)',
      planetType: 'cratered',
    },
    {
      no: '06',
      title: 'The Growth Capital Exchange',
      floor: 'First Floor · Dedicated Suite',
      tagline: 'Where capital meets conviction.',
      body: "VC, PE, angels and family offices in one large suite — M&A, joint ventures and strategic-investment conversations, funding and deal-making with India's most ambitious founders.",
      poster: capitalPoster,
      video:
        'https://embed-ssl.wistia.com/deliveries/9942a90a5973a2b5ee4739ff8ea3fab3cfd45149.bin',
      color:
        'radial-gradient(circle at 35% 35%, oklch(0.85 0.11 185) 0%, oklch(0.58 0.13 180) 50%, oklch(0.32 0.08 175) 100%)',
      glow: 'oklch(0.85 0.11 185 / 0.6)',
      planetType: 'ice',
    },
    {
      no: '07',
      title: 'The Premium Connect Suites',
      floor: 'First · Second · Third Floor · Private',
      tagline: 'Business, behind closed doors.',
      body: 'Three floors of private executive-level boardrooms, discreet by design — away from the festival floor, engineered for negotiation and sign-off.',
      poster: suitesPoster,
      video:
        'https://embed-ssl.wistia.com/deliveries/fa2dd17a6fabe7a2f7bb42e0e74a2c1a7f1f9256.bin',
      color:
        'radial-gradient(circle at 35% 35%, oklch(0.85 0.12 340) 0%, oklch(0.6 0.14 335) 50%, oklch(0.35 0.09 330) 100%)',
      glow: 'oklch(0.85 0.12 340 / 0.6)',
      planetType: 'gas',
      hasRings: true,
    },
    {
      no: '08',
      title: 'Mahakumbh AI Command Centre',
      floor: 'Digital Layer · One JBN App · All Floors',
      tagline: 'The entire Mahakumbh, in your hand.',
      body: 'The nervous system of the event — registration, agenda, live navigation, push notifications, lead capture, digital profiles, feedback and certificates. The One JBN App spans every floor.',
      poster: aiPoster,
      video: aiCenterVideo,
      color:
        'radial-gradient(circle at 35% 35%, oklch(0.82 0.14 270) 0%, oklch(0.55 0.16 265) 50%, oklch(0.3 0.1 260) 100%)',
      glow: 'oklch(0.82 0.14 270 / 0.6)',
      planetType: 'terran',
      hasRings: true,
    },
    {
      no: '09',
      title: 'Mahakumbh Brahma Bhojanam',
      floor: 'Ground Floor · Pavilion 2 · Hospitality',
      tagline: 'Relationships are built over a shared table.',
      body: 'Thoughtful Jain-vegetarian hospitality at scale across 59,331 sq. ft. of Pavilion 2 — VIP lounges and premium dining, the zone where business becomes friendship.',
      poster: bhojanamPoster,
      video:
        'https://embed-ssl.wistia.com/deliveries/35e0e5bc89e5db01be931198eed7534be94355a4.bin',
      color:
        'radial-gradient(circle at 35% 35%, oklch(0.87 0.13 45) 0%, oklch(0.63 0.15 40) 50%, oklch(0.37 0.1 35) 100%)',
      glow: 'oklch(0.87 0.13 45 / 0.6)',
      planetType: 'rocky',
    },
    {
      no: '10',
      title: 'Mahakumbh Hall of Honour',
      floor: 'Ground Floor · Recognition',
      tagline: 'Recognition that outlives the event.',
      body: 'A legacy wall of those who build each edition — honouring excellence, inspiring generations and celebrating standing that deepens every biennial cycle.',
      poster: honourPoster,
      video:
        'https://embed-ssl.wistia.com/deliveries/0dce3a5fdad177e4601c90ede6b2c49ff6797975.bin',
      color:
        'radial-gradient(circle at 35% 35%, oklch(0.9 0.02 250) 0%, oklch(0.7 0.04 245) 50%, oklch(0.45 0.03 240) 100%)',
      glow: 'oklch(0.9 0.02 250 / 0.6)',
      planetType: 'cratered',
    },
  ];

  return (
    <main
      id="top"
      className="relative min-h-screen overflow-x-hidden text-foreground pb-24 sm:pb-28"
    >
      {/* NOTIFICATION BAR */}
      <div className="fixed top-0 inset-x-0 z-50 bg-gold text-[oklch(0.18_0.06_265)] text-xs sm:text-sm font-medium tracking-[0.2em] uppercase py-1.5 sm:py-2 px-4">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-3 text-center">
          <span>
            14<sup>th</sup>, 15<sup>th</sup>, 16<sup>th</sup> August — Save the
            Date
          </span>
          <a
            href="https://app.jitojbnapp.com/event/pagariya-jbn-mahakumbh-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden underline decoration-2 font-bold whitespace-nowrap"
          >
            Register Now
          </a>
        </div>
      </div>

      {/* HEADER */}
      <header className="hidden md:block fixed top-8 sm:top-9 inset-x-0 z-40 bg-gradient-to-r from-[oklch(0.14_0.05_265)] via-[oklch(0.22_0.08_265)] to-[oklch(0.14_0.05_265)] border-b border-[oklch(0.72_0.14_78/0.25)] shadow-[0_10px_30px_-15px_oklch(0_0_0/0.8)]">
        <div className="flex items-center justify-center md:justify-between px-6 sm:px-12 py-2.5">
          <Link href="#top" className="flex items-center justify-center">
            <img
              src={logo}
              alt="Pagariya JBN Mahakumbh"
              className="h-11 sm:h-14 w-auto object-contain"
              width={600}
              height={120}
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-[oklch(0.85_0.05_85)]">
            <a
              href="#universe"
              className="hover:text-[oklch(0.92_0.15_88)] transition"
            >
              The Festive
            </a>
            <a
              href="#experience"
              className="hover:text-[oklch(0.92_0.15_88)] transition"
            >
              Experience
            </a>
            <a
              href="#support"
              className="hover:text-[oklch(0.92_0.15_88)] transition"
            >
              Support
            </a>
          </nav>
          <a
            href="https://app.jitojbnapp.com/event/pagariya-jbn-mahakumbh-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium bg-gold rounded-sm shadow-[var(--shadow-gold)] hover:brightness-110 transition"
          >
            Register Now
          </a>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex flex-col pt-14 sm:pt-8 md:pt-24 lg:pt-28">
        {/* Hero content */}
        <div className="relative z-10 flex-1 flex items-start sm:items-center justify-center px-6 py-8">
          <div className="relative max-w-5xl w-full text-center px-6 py-6 sm:py-8">
            <Reveal>
              <img
                src={logo}
                alt="Pagariya JBN Mahakumbh"
                className="h-24 sm:h-24 w-auto object-contain mx-auto mb-6"
                width={600}
                height={120}
              />
              <div className="inline-flex items-center px-4 sm:px-6 py-2 sm:py-2.5 mb-6 rounded-full bg-gradient-to-r from-[oklch(0.72_0.14_78)] via-[oklch(0.82_0.14_82)] to-[oklch(0.72_0.14_78)] shadow-[0_0_24px_-6px_oklch(0.72_0.14_78/0.5)]">
                <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-[oklch(0.15_0.05_250)] font-semibold">
                  Biggest Business Festival
                </p>
              </div>
              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl leading-[1.05] text-gold">
                Register for
                <br />
                <em className="not-italic">Pagariya JBN Mahakumbh 2026</em>
              </h1>
            </Reveal>
            <Reveal
              delay={150}
              className="mt-8 sm:mt-10 relative mx-0 sm:mx-auto w-[calc(100vw-2rem)] left-1/2 -translate-x-1/2 sm:static sm:w-auto sm:max-w-4xl sm:translate-x-0 sm:left-0 rounded-lg overflow-hidden border-2 border-[oklch(0.72_0.14_78/0.5)] shadow-[0_0_60px_-15px_oklch(0.72_0.14_78/0.4)]"
            >
              <VideoPlayer
                src={heroVideo}
                autoPlay
                loop
                playsInline
                controls
                playOnFirstInteraction
                width={1280}
                height={720}
                className="w-full aspect-video object-cover"
              />
            </Reveal>
            <Reveal delay={250}>
              <Divider />
              <p className="max-w-2xl mx-auto text-sm sm:text-base text-[oklch(0.88_0.03_85)] leading-relaxed">
                Be a part of the biggest business festival of all time. Pagaria
                JBN Mahakumbh 2026 is happening at Mumbai (Jio World Convention
                Centre).
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <a
                  href="https://app.jitojbnapp.com/event/pagariya-jbn-mahakumbh-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-3 w-full sm:w-auto sm:min-w-[14rem] bg-gold rounded-sm font-medium tracking-wide shadow-[var(--shadow-gold)] hover:brightness-110 transition"
                >
                  Register Now
                </a>
              </div>
            </Reveal>

            <Reveal
              delay={350}
              className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-[oklch(0.72_0.14_78/0.25)]"
            >
              {stats.map((s) => (
                <div key={s.v}>
                  <div className="font-display text-3xl sm:text-4xl text-gold">
                    {s.k}
                  </div>
                  <div className="text-xs tracking-[0.25em] uppercase text-[oklch(0.75_0.04_85)] mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      {/* BHAMASHAH PARTNERS / SPONSORS */}
      <section className="relative py-20 sm:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-5xl text-gold">
              Bhamashah Partners
            </h2>
            <Divider />
          </Reveal>

          <Reveal className="text-center mb-10">
            <p className="text-xs tracking-[0.3em] uppercase text-[oklch(0.75_0.04_85)] mb-4">
              Powered By
            </p>
            <div className="mx-auto max-w-md bg-white/5 border border-[oklch(0.72_0.14_78/0.25)] rounded-lg p-6 sm:p-8 shadow-[0_0_40px_-12px_oklch(0.72_0.14_78/0.25)]">
              <img
                src={bhansaliLogo}
                alt="Bhansali Engineering Polymers Limited — Event Title Sponsor"
                className="w-full h-auto object-contain"
                width={368}
                height={180}
              />
            </div>
          </Reveal>

          <div className="text-center mt-14">
            <p className="text-xs tracking-[0.3em] uppercase text-[oklch(0.75_0.04_85)] mb-6">
              Gold Sponsors
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 max-w-6xl mx-auto">
              {[
                { name: 'Authum', src: goldAuthum },
                { name: 'IIFL', src: goldIifl },
                {
                  name: 'Monarch Networkworth Capital',
                  src: goldMonarchNetworkworth,
                },
                { name: 'Nahar Group', src: goldNahar },
                { name: 'Pagariya Group', src: goldPagariyaGroup },
                { name: 'Pantomath', src: goldPantomath },
                { name: 'RDB Group', src: goldRdbGroup },
                { name: 'Surya Group', src: goldSuryaGroup },
                { name: 'Waaree', src: goldWaaree },
              ].map((sponsor, i) => (
                <Reveal
                  key={sponsor.name}
                  delay={(i % 4) * 80}
                  className="w-[calc(50%-0.5rem)] sm:w-[calc(33.333%-0.833rem)] lg:w-[calc(20%-1rem)]"
                >
                  <div className="bg-white rounded-lg p-3 sm:p-4 flex items-center justify-center shadow-[0_4px_20px_-8px_oklch(0_0_0/0.5)] hover:scale-[1.02] transition-transform">
                    <img
                      src={sponsor.src}
                      alt={sponsor.name}
                      className="w-28 h-14 sm:w-36 sm:h-16 object-contain"
                      width={190}
                      height={98}
                    />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALAXY MAP */}
      <GalaxyUniverse zones={universe} />

      {/* MAHAKUMBH UNIVERSE */}
      <section id="universe" className="relative py-24 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-[oklch(0.82_0.14_82)]">
              One Mahakumbh · Ten Flagship Zones
            </p>
            <h2 className="font-display text-4xl sm:text-6xl mt-4 text-gold">
              The Mahakumbh Universe
            </h2>
            <Divider />
            <p className="max-w-3xl mx-auto text-[oklch(0.85_0.03_85)] leading-relaxed">
              A universe of premium experiences across 2.52 lakh+ sq. ft. of Jio
              World Convention Centre — ten iconic, repeatable zones where entry
              itself is a mark of achievement.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {universe.map((z, i) => (
              <Reveal key={z.no} delay={(i % 2) * 100}>
                <article
                  id={`universe-${z.no}`}
                  className="relative ornate-frame rounded-sm bg-[oklch(0.2_0.06_265/0.6)] backdrop-blur-sm overflow-hidden group scroll-mt-40"
                >
                  <div className="relative overflow-hidden">
                    <VideoPlayer
                      src={z.video}
                      poster={z.poster}
                      controls
                      preload="none"
                      className="w-full h-64 sm:h-72 object-cover"
                      width={1024}
                      height={1024}
                      aria-label={z.title}
                    />
                    <div className="absolute top-3 left-3 bg-[oklch(0.14_0.05_265/0.8)] border border-gold px-3 py-1 rounded-sm">
                      <span className="font-display text-lg text-gold">
                        {z.no}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 sm:p-8">
                    <p className="text-[10px] sm:text-xs tracking-[0.3em] uppercase text-[oklch(0.82_0.14_82)]">
                      {z.floor}
                    </p>
                    <h3 className="font-display text-2xl sm:text-3xl text-gold mt-2">
                      {z.title}
                    </h3>
                    <p className="italic text-[oklch(0.9_0.1_85)] mt-2 text-sm sm:text-base">
                      {z.tagline}
                    </p>
                    <div className="h-px w-16 my-4 bg-gradient-to-r from-[oklch(0.72_0.14_78)] to-transparent" />
                    <p className="text-[oklch(0.82_0.03_85)] leading-relaxed text-sm sm:text-base">
                      {z.body}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Scale strip */}
          <Reveal className="mt-20 ornate-frame rounded-sm p-8 sm:p-12 bg-[oklch(0.18_0.06_265/0.7)] backdrop-blur text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-[oklch(0.82_0.14_82)]">
              By the Numbers
            </p>
            <h3 className="font-display text-3xl sm:text-4xl text-gold mt-3">
              Scale & Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-left">
              {[
                { k: '3,000+', v: 'Total Delegates' },
                { k: '1,500+', v: 'Main Arena Capacity' },
                { k: '50+', v: 'Invite-only Business Houses' },
                { k: '20+', v: 'Parallel Sessions' },
                { k: '2.52 L+', v: 'Sq. Ft. of Venue' },
                { k: '10', v: 'Flagship Zones' },
                { k: '3 Days', v: '14 – 16 Aug 2026' },
                { k: 'JWCC', v: 'BKC, Mumbai' },
              ].map((s) => (
                <div
                  key={s.v}
                  className="border-l border-[oklch(0.72_0.14_78/0.4)] pl-4"
                >
                  <div className="font-display text-2xl sm:text-3xl text-gold">
                    {s.k}
                  </div>
                  <div className="text-[10px] sm:text-xs tracking-[0.2em] uppercase text-[oklch(0.75_0.04_85)] mt-1">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="relative py-24 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
          <Reveal>
            <p className="text-xs tracking-[0.4em] uppercase text-[oklch(0.82_0.14_82)]">
              The Experience
            </p>
            <h2 className="font-display text-4xl sm:text-5xl mt-4 text-gold">
              A festival staged like a state banquet.
            </h2>
            <div className="h-px w-24 my-6 bg-gradient-to-r from-[oklch(0.72_0.14_78)] to-transparent" />
            <p className="text-[oklch(0.85_0.03_85)] leading-relaxed">
              An opulent gathering of India&apos;s boldest founders, investors
              and visionaries — staged across{' '}
              <span className="text-[oklch(0.92_0.15_88)]">2,50,000 sqft</span>{' '}
              of Mumbai&apos;s most storied ground.
            </p>
            <ul className="mt-8 space-y-3 text-[oklch(0.85_0.03_85)]">
              {[
                'Private founder salons with global CEOs',
                '24-carat awards, presented on-stage',
                'Michelin-guided dining, night after night',
                'Chauffeured concierge for every delegate',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[oklch(0.9_0.15_88)] mt-1">◆</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal
            delay={150}
            className="relative ornate-frame rounded-sm overflow-hidden bg-[oklch(0.2_0.06_265/0.6)] backdrop-blur-sm"
          >
            <div className="relative">
              <VideoPlayer
                src={gatheringVideo}
                poster={gatheringPoster}
                controls
                className="w-full aspect-video object-cover"
                width={1920}
                height={1080}
                preload="metadata"
                aria-label="An opulent gathering of India's boldest founders, investors and visionaries across 250,000 sqft in Mumbai"
              />
            </div>
            <div className="p-5 sm:p-6 border-t border-[oklch(0.72_0.14_78/0.25)]">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[oklch(0.82_0.14_82)]">
                Live from the Festival
              </p>
              <p className="text-sm text-[oklch(0.85_0.03_85)] mt-1.5 leading-relaxed">
                An opulent gathering, staged inside Jio World Convention Centre.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HOTELS & ACCOMMODATION */}
      <section id="stay" className="relative py-24 sm:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-[oklch(0.82_0.14_82)]">
              Where to Stay
            </p>
            <h2 className="font-display text-4xl sm:text-6xl mt-4 text-gold">
              Hotels & Accommodation
            </h2>
            <Divider />
            <p className="max-w-3xl mx-auto text-[oklch(0.85_0.03_85)] leading-relaxed">
              Curated luxury stays within minutes of Jio World Convention
              Centre, BKC. Preferred rates for Mahakumbh delegates — reserve
              early, seats and suites both fill fast.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {[
              {
                tier: 'Luxury · Walk to Venue',
                name: 'Jio World Convention Centre Hotels',
                distance: '0 km · At the venue',
                note: 'The most seamless stay — step out of your suite and into the festival floor.',
                image: jioWorldHotel,
              },
              {
                tier: 'Deluxe Room',
                name: 'Trident, Bandra Kurla',
                distance: 'In BKC · Minutes from JWCC',
                note: 'Contemporary five-star tower overlooking BKC — the delegate favourite.',
                image: tridentDeluxeHotel,
              },
              {
                tier: 'Pool View Room',
                name: 'Trident, Bandra Kurla',
                distance: 'In BKC · Minutes from JWCC',
                note: 'Same five-star comfort, with sweeping pool-deck views.',
                image: tridentPoolViewHotel,
              },
              {
                tier: 'Luxury',
                name: 'Sofitel Mumbai BKC',
                distance: 'In BKC · Minutes from JWCC',
                note: 'French art de vivre, Michelin-guided dining, private meeting salons.',
                image: sofitelHotel,
              },
              {
                tier: 'Standard Room',
                name: 'Ibis Mumbai BKC',
                distance: 'In BKC · Minutes from JWCC',
                note: 'Smart, efficient stays just steps from BKC.',
                image: ibisHotel,
              },
              {
                tier: 'Standard Room',
                name: 'Ginger Mumbai Airport',
                distance: 'Near Mumbai Airport',
                note: 'Budget-friendly comfort, ideal for fly-in delegates.',
                image: gingerAirportHotel,
              },
              {
                tier: 'Deluxe Room',
                name: 'Aurika Skycity Mumbai, Airport',
                distance: 'Near Mumbai Airport',
                note: 'Sleek airport-adjacent tower with skyline views.',
                image: aurikaDeluxHotel,
              },
              {
                tier: 'Premium Room',
                name: 'Aurika Skycity Mumbai, Airport',
                distance: 'Near Mumbai Airport',
                note: 'Same skyline tower, elevated premium comfort.',
                image: aurikaPremiumHotel,
              },
              {
                tier: 'Standard Room',
                name: 'Lemon Tree Premier',
                distance: 'Mumbai',
                note: 'Vibrant, contemporary stays with dependable service.',
                image: lemonTreeHotel,
              },
            ].map((h, i) => (
              <Reveal key={h.name} delay={(i % 3) * 100} className="h-full">
                <article className="relative h-full flex flex-col ornate-frame rounded-sm overflow-hidden bg-[oklch(0.2_0.06_265/0.6)] backdrop-blur-sm hover:translate-y-[-4px] transition-transform">
                  <div className="relative aspect-[4/5] overflow-hidden bg-[oklch(0.14_0.05_265)]">
                    <img
                      src={h.image}
                      alt={h.name}
                      loading="lazy"
                      width={1024}
                      height={1280}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.14_0.05_265)] via-transparent to-transparent pointer-events-none" />
                  </div>
                  <div className="p-6 sm:p-7 flex-1 flex flex-col">
                    <p className="text-[10px] tracking-[0.3em] uppercase text-[oklch(0.82_0.14_82)]">
                      {h.tier}
                    </p>
                    <h3 className="font-display text-2xl text-gold mt-2 leading-tight">
                      {h.name}
                    </h3>
                    <div className="h-px w-12 my-3 bg-gradient-to-r from-[oklch(0.72_0.14_78)] to-transparent" />
                    <p className="text-sm text-[oklch(0.9_0.1_85)]">
                      {h.distance}
                    </p>
                    <p className="text-sm text-[oklch(0.82_0.03_85)] leading-relaxed mt-2">
                      {h.note}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <p className="text-sm text-[oklch(0.75_0.04_85)] max-w-2xl mx-auto">
              Our concierge will assist with reservations, airport transfers and
              chauffeured commute between hotel and venue. Share your
              preferences when requesting your invite.
            </p>
            <a
              href="#support"
              className="inline-flex items-center mt-6 px-8 py-3 border border-gold text-[oklch(0.9_0.1_85)] rounded-sm hover:bg-[oklch(0.72_0.14_78/0.1)] transition"
            >
              Request Concierge Assistance
            </a>
          </Reveal>
        </div>
      </section>

      {/* SUPPORT CONTACT */}
      <section id="support" className="relative py-16 sm:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal className="relative ornate-frame rounded-sm p-8 sm:p-12 bg-[oklch(0.18_0.06_265/0.7)] backdrop-blur">
            <CornerOrnament className="top-2 left-2" />
            <CornerOrnament className="top-2 right-2 -scale-x-100" />
            <CornerOrnament className="bottom-2 left-2 -scale-y-100" />
            <CornerOrnament className="bottom-2 right-2 -scale-100" />
            <p className="text-xs tracking-[0.4em] uppercase text-[oklch(0.82_0.14_82)]">
              Need Assistance?
            </p>
            <h2 className="font-display text-3xl sm:text-5xl mt-4 text-gold">
              Delegate Support
            </h2>
            <Divider />
            <p className="text-[oklch(0.85_0.03_85)] max-w-2xl mx-auto mb-8">
              For queries on registration, invites, accommodation or travel —
              reach out to our dedicated support team.
            </p>
            <a
              href="tel:+918655370291"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gold rounded-sm font-medium tracking-wide shadow-[var(--shadow-gold)] hover:brightness-110 transition"
            >
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
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <span className="text-base sm:text-lg">
                Hitesh Jain — +91 8655370291
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      {/* MAHAKUMBH DP MAKER */}
      <DPMaker />

      <footer className="relative border-t border-[oklch(0.72_0.14_78/0.2)] py-10 px-6 text-center text-sm text-[oklch(0.7_0.04_85)]">
        <img
          src={logo}
          alt="Pagariya JBN Mahakumbh"
          className="h-12 sm:h-14 w-auto object-contain mx-auto mb-3"
          width={600}
          height={120}
        />
        <p>© MMXXVI · The Biggest Business Festive · Mumbai, India</p>
      </footer>

      {/* STICKY REGISTER BAR */}
      <div className="fixed bottom-0 inset-x-0 z-50 bg-gradient-to-r from-[oklch(0.14_0.05_265)] via-[oklch(0.22_0.08_265)] to-[oklch(0.14_0.05_265)] border-t border-[oklch(0.72_0.14_78/0.4)] shadow-[0_-10px_30px_-15px_oklch(0_0_0/0.8)]">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-3 px-4 sm:px-6 py-3">
          <div className="hidden sm:block">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[oklch(0.82_0.14_82)]">
              14 – 16 August 2026 · Mumbai
            </p>
            <p className="font-display text-lg text-gold leading-tight">
              Pagariya JBN Mahakumbh 2026
            </p>
          </div>
          <p className="sm:hidden text-[11px] tracking-[0.25em] uppercase text-[oklch(0.85_0.05_85)]">
            14 – 16 Aug · Mumbai
          </p>
          <a
            href="https://app.jitojbnapp.com/event/pagariya-jbn-mahakumbh-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 sm:px-8 py-3 bg-gold rounded-sm font-medium tracking-wide text-sm sm:text-base shadow-[var(--shadow-gold)] hover:brightness-110 transition"
          >
            Register Now
          </a>
        </div>
      </div>
    </main>
  );
}
