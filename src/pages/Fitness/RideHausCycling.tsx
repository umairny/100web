import { useEffect, useState, type CSSProperties, type ReactNode } from "react";
import {
  Activity,
  ArrowRight,
  Bike,
  CalendarDays,
  Check,
  Gauge,
  Menu,
  Music2,
  Radio,
  Sparkles,
  X,
  Zap,
} from "lucide-react";
import { imageUrl } from "../../assets/optimized";

const navLinks = [
  ["Rides", "#rides"],
  ["Studio", "#studio"],
  ["Coaches", "#coaches"],
  ["Schedule", "#schedule"],
  ["Membership", "#membership"],
  ["Contact", "#contact"],
];

const observedSectionIds = [
  "home",
  ...navLinks.map(([, href]) => href.slice(1)),
];

const images = {
  hero: imageUrl("fitness/RideHaus/hero.webp"),
  experience: imageUrl("fitness/RideHaus/ride-experience.webp"),
  studio: imageUrl("fitness/RideHaus/studio-atmosphere.webp"),
  performance: imageUrl("fitness/RideHaus/performance-tracking.webp"),
  community: imageUrl("fitness/RideHaus/community-ride.webp"),
  cta: imageUrl("fitness/RideHaus/cta.webp"),
};

const rideFeatures = [
  {
    title: "Music-Driven Rides",
    text: "Every class is built around curated playlists, rhythm changes, and coach-led energy.",
    icon: Music2,
  },
  {
    title: "Smart Resistance",
    text: "Follow intensity cues and resistance pushes designed for endurance, power, and control.",
    icon: Gauge,
  },
  {
    title: "Room Energy",
    text: "Lights, sound, and community momentum make each session feel like a live ride event.",
    icon: Zap,
  },
];

const classes = [
  {
    title: "Pulse Ride",
    text: "A rhythm-based ride with climbs, sprints, and beat drops for all levels.",
    difficulty: "All levels",
    duration: "45 min",
    image: imageUrl("fitness/RideHaus/pulse-ride.webp"),
  },
  {
    title: "Power Ride",
    text: "Higher resistance intervals designed to build strength and cycling stamina.",
    difficulty: "Hard push",
    duration: "50 min",
    image: imageUrl("fitness/RideHaus/power-ride.webp"),
  },
  {
    title: "Endurance Flow",
    text: "Longer steady efforts focused on pacing, breath, and controlled intensity.",
    difficulty: "Steady",
    duration: "60 min",
    image: imageUrl("fitness/RideHaus/endurance-flow.webp"),
  },
  {
    title: "Recovery Spin",
    text: "Lower-impact movement with smoother cadence, lighter resistance, and reset-focused coaching.",
    difficulty: "Reset",
    duration: "40 min",
    image: imageUrl("fitness/RideHaus/recovery-spin.webp"),
  },
];

const studioStats = [
  "Sound-Tuned Room",
  "Coach-Led Lighting",
  "Premium Bikes",
  "Cooldown Zone",
];

const coaches = [
  {
    name: "Ava Stone",
    role: "Rhythm Ride Coach",
    vibe: "Fast transitions, big chorus pushes, and room-wide momentum.",
    tags: ["House", "Pop", "Throwback"],
    image: imageUrl("fitness/RideHaus/coach-ava.webp"),
  },
  {
    name: "Jordan Lee",
    role: "Power Intervals Coach",
    vibe: "Heavy climbs, resistance battles, and focused performance cues.",
    tags: ["Hip-Hop", "Electronic", "Bass"],
    image: imageUrl("fitness/RideHaus/coach-jordan.webp"),
  },
  {
    name: "Mila Cruz",
    role: "Endurance + Recovery Coach",
    vibe: "Steady pacing, breath-led rides, and smooth cooldown resets.",
    tags: ["Pop", "Indie", "Chill"],
    image: imageUrl("fitness/RideHaus/coach-mila.webp"),
  },
];

const schedule = [
  ["Monday", "6:30 PM", "Pulse Ride", "Ava"],
  ["Tuesday", "7:00 PM", "Power Ride", "Jordan"],
  ["Wednesday", "6:00 PM", "Endurance Flow", "Mila"],
  ["Thursday", "7:30 PM", "Pulse Ride", "Ava"],
  ["Friday", "6:30 PM", "Power Ride", "Jordan"],
  ["Saturday", "9:00 AM", "Recovery Spin", "Mila"],
  ["Sunday", "10:00 AM", "Community Ride", "Team"],
];

const performance = [
  ["Cadence", "92 rpm", 74],
  ["Resistance", "38%", 58],
  ["Power Zone", "Zone 4", 82],
  ["Ride Streak", "8 rides", 68],
  ["Calories Estimate", "410", 76],
  ["Recovery Score", "84%", 84],
];

const plans = [
  {
    name: "First Ride",
    text: "For new riders trying the studio.",
    features: ["1 intro ride", "Bike setup help", "Beginner-friendly coaching"],
  },
  {
    name: "Haus Pack",
    text: "For riders building a weekly rhythm.",
    features: ["4 rides/month", "Schedule flexibility", "Performance recap"],
    popular: true,
  },
  {
    name: "Unlimited Energy",
    text: "For riders who want full studio access.",
    features: [
      "Unlimited rides",
      "Priority booking",
      "Guest pass",
      "Monthly ride stats",
    ],
  },
];

const community = [
  [
    "First-Timer Friendly",
    "Bike setup, clear cues, and a room that makes the first ride feel easy to enter.",
  ],
  [
    "Music-Led Motivation",
    "Playlists give every push a moment, from warmup groove to final sprint.",
  ],
  [
    "After-Ride Connection",
    "Stay for cooldown, conversation, and a studio culture built around showing up.",
  ],
];

function RideButton({
  href,
  children,
  outline = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  outline?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-xs font-black uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-0.5 ${
        outline
          ? "ridehaus-btn-outline border border-white/18 bg-white/[0.06] text-white hover:border-[#20E7FF] hover:text-[#20E7FF]"
          : "ridehaus-btn-solid bg-gradient-to-r from-[#FF2FCB] to-[#7C3DFF] text-white shadow-[0_0_34px_rgba(255,47,203,.36)] hover:shadow-[0_0_48px_rgba(32,231,255,.34)]"
      } ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function SectionHeading({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-4xl">
      <p className="ridehaus-heading-pill inline-flex items-center gap-2 rounded-full border border-[#20E7FF]/20 bg-white/[0.06] px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.24em] text-[#20E7FF]">
        <Sparkles className="h-3.5 w-3.5 text-[#FF2FCB]" />
        {label}
      </p>
      <h2 className="ridehaus-heading-title mt-5 text-[clamp(2.15rem,5.8vw,7.6rem)] font-black uppercase leading-[0.88] tracking-[-0.075em] text-white">
        {title}
      </h2>
      {text && (
        <p className="ridehaus-heading-text mt-6 max-w-2xl text-base leading-8 text-white/56 md:text-lg">
          {text}
        </p>
      )}
    </div>
  );
}

function Equalizer({ className = "" }: { className?: string }) {
  return (
    <div
      className={`flex h-14 items-end gap-1.5 ${className}`}
      aria-hidden="true"
    >
      {[38, 78, 52, 96, 62, 84, 44, 70, 90, 58].map((height, index) => (
        <span
          key={index}
          className="ridehaus-eq-bar w-2 rounded-full bg-gradient-to-t from-[#20E7FF] via-[#7C3DFF] to-[#FF2FCB] shadow-[0_0_18px_rgba(32,231,255,.45)]"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
}

function GlowMeter({ value }: { value: number }) {
  return (
    <div
      className="grid h-20 w-20 place-items-center rounded-full bg-[conic-gradient(#20E7FF_0%,#FF2FCB_var(--ride-value),rgba(255,255,255,.1)_var(--ride-value),rgba(255,255,255,.1)_100%)] p-1"
      style={{ "--ride-value": `${value}%` } as CSSProperties}
    >
      <div className="ridehaus-meter-inner grid h-full w-full place-items-center rounded-full bg-[#090B1A] text-xs font-black text-white">
        {value}%
      </div>
    </div>
  );
}

export function RideHausCycling() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Lock body scroll and handle Escape key when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
    document.body.style.overflow = "";
  }, [menuOpen]);

  // Frame-debounced scroll spy
  useEffect(() => {
    const sectionIds = ["home", "rides", "studio", "coaches", "schedule", "membership", "contact"];
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 160;
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;

        if (window.scrollY + windowHeight >= fullHeight - 80) {
          setActiveSection("contact");
          return;
        }

        for (let i = sectionIds.length - 1; i >= 0; i--) {
          const id = sectionIds[i];
          const el = document.getElementById(id);
          if (el) {
            const top = el.offsetTop;
            if (scrollPosition >= top) {
              setActiveSection(id);
              return;
            }
          }
        }
        if (window.scrollY < 200) {
          setActiveSection("home");
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="ridehaus-site w-full max-w-full overflow-x-hidden bg-[#070817] text-white">
      <style>{`
        /* ------------------------------------------------------------ */
        /* RIDEHAUS CYCLING - BASE TOKENS & SYSTEM THEME INTEGRATION    */
        /* ------------------------------------------------------------ */
        :root,
        .ridehaus-site {
          --ride-pink: #FF2FCB;
          --ride-cyan: #20E7FF;
          --ride-purple: #7C3DFF;
          --ride-accent: #FF2FCB;
          --ride-accent-hover: #ff55d7;
          --ride-accent-sec: #20E7FF;
          --ride-accent-glow: rgba(255, 47, 203, 0.45);
          --ride-accent-contrast: #FFFFFF;

          --ride-bg-base: #070817;
          --ride-bg-card: #10122A;
          --ride-bg-card-subtle: rgba(255, 255, 255, 0.045);
          --ride-bg-card-hover: rgba(255, 255, 255, 0.08);
          --ride-bg-section-alt: #0B0D20;
          --ride-bg-card-glass: rgba(8, 10, 24, 0.80);
          --ride-ambient-gradient: radial-gradient(circle at 20% 10%, rgba(255, 47, 203, 0.22), transparent 30%), radial-gradient(circle at 80% 15%, rgba(32, 231, 255, 0.2), transparent 28%), linear-gradient(180deg, #070817, #05050D);

          --ride-text-primary: #FFFFFF;
          --ride-text-muted: rgba(255, 255, 255, 0.62);
          --ride-text-faint: rgba(255, 255, 255, 0.40);
          --ride-border: rgba(255, 255, 255, 0.12);
          --ride-border-subtle: rgba(255, 255, 255, 0.08);

          --ride-header-bg: rgba(8, 10, 24, 0.82);
          --ride-header-border: rgba(255, 255, 255, 0.10);
          --ride-header-nav-bg: rgba(255, 255, 255, 0.045);
          --ride-header-text: #FFFFFF;
          --ride-header-nav-link: rgba(255, 255, 255, 0.55);
          --ride-header-nav-active-bg: #FFFFFF;
          --ride-header-nav-active-text: #080A18;

          --ride-btn-solid-bg: linear-gradient(135deg, var(--ride-pink), var(--ride-purple));
          --ride-btn-solid-text: #FFFFFF;
          --ride-btn-outline-bg: rgba(255, 255, 255, 0.06);

          --ride-stat-card-bg: rgba(7, 8, 23, 0.78);
          --ride-chip-bg: rgba(255, 255, 255, 0.10);
          --ride-chip-text: rgba(255, 255, 255, 0.80);
          --ride-pill-bg: rgba(255, 255, 255, 0.06);
          --ride-tag-bg: rgba(255, 255, 255, 0.07);
          --ride-tag-text: rgba(255, 255, 255, 0.66);
          --ride-badge-bg: linear-gradient(to right, rgba(32, 231, 255, 0.2), rgba(255, 47, 203, 0.2));
          --ride-perf-bar-bg: rgba(255, 255, 255, 0.10);
          --ride-popular-bg: linear-gradient(135deg, #1B1235, #10142E);
        }

        /* ------------------------------------------------------------ */
        /* THEME PRESET ADAPTATIONS                                     */
        /* ------------------------------------------------------------ */
        [data-theme-active="true"] .ridehaus-site {
          --ride-pink: var(--theme-accent-primary, #FF2FCB);
          --ride-cyan: var(--theme-accent-secondary, #20E7FF);
          --ride-accent: var(--theme-accent-primary, #FF2FCB);
          --ride-accent-hover: var(--theme-accent-hover, #ff55d7);
          --ride-accent-sec: var(--theme-accent-secondary, #20E7FF);
          --ride-accent-glow: var(--theme-accent-glow, rgba(255, 47, 203, 0.45));
          --ride-accent-contrast: var(--theme-accent-contrast, #FFFFFF);
          --ride-btn-solid-bg: linear-gradient(135deg, var(--ride-accent), var(--ride-accent-sec));
        }

        [data-theme-preset="emerald"] .ridehaus-site {
          --ride-pink: #10B981 !important;
          --ride-cyan: #06D6A0 !important;
          --ride-purple: #059669 !important;
          --ride-accent: #10B981 !important;
          --ride-accent-sec: #06D6A0 !important;
          --ride-accent-glow: rgba(16, 185, 129, 0.45) !important;
        }
        [data-theme-preset="ocean"] .ridehaus-site {
          --ride-pink: #3B82F6 !important;
          --ride-cyan: #00E5FF !important;
          --ride-purple: #1D4ED8 !important;
          --ride-accent: #3B82F6 !important;
          --ride-accent-sec: #00E5FF !important;
          --ride-accent-glow: rgba(59, 130, 246, 0.45) !important;
        }
        [data-theme-preset="sunset"] .ridehaus-site {
          --ride-pink: #FF5722 !important;
          --ride-cyan: #FFB300 !important;
          --ride-purple: #E64A19 !important;
          --ride-accent: #FF5722 !important;
          --ride-accent-sec: #FFB300 !important;
          --ride-accent-glow: rgba(255, 87, 34, 0.45) !important;
        }
        [data-theme-preset="purple"] .ridehaus-site,
        [data-theme-preset="amethyst"] .ridehaus-site {
          --ride-pink: #A855F7 !important;
          --ride-cyan: #EC4899 !important;
          --ride-purple: #7E22CE !important;
          --ride-accent: #A855F7 !important;
          --ride-accent-sec: #EC4899 !important;
          --ride-accent-glow: rgba(168, 85, 247, 0.45) !important;
        }
        [data-theme-preset="amber"] .ridehaus-site,
        [data-theme-preset="gold"] .ridehaus-site {
          --ride-pink: #F59E0B !important;
          --ride-cyan: #FBBF24 !important;
          --ride-purple: #D97706 !important;
          --ride-accent: #F59E0B !important;
          --ride-accent-sec: #FBBF24 !important;
          --ride-accent-glow: rgba(245, 158, 11, 0.45) !important;
        }

        /* ------------------------------------------------------------ */
        /* LIGHT MOOD - BRIGHT, SLEEK HIGH-PERFORMANCE SPIN STUDIO      */
        /* ------------------------------------------------------------ */
        html.light .ridehaus-site,
        body.light .ridehaus-site,
        [data-theme-mood="light"] .ridehaus-site,
        :root[data-theme-mood="light"] .ridehaus-site,
        :root[data-theme-active="true"][data-theme-mood="light"] .ridehaus-site,
        :root.light .ridehaus-site {
          --ride-bg-base: #F5F6FC !important;
          --ride-bg-card: #FFFFFF !important;
          --ride-bg-card-subtle: #FFFFFF !important;
          --ride-bg-card-hover: #F8F9FE !important;
          --ride-bg-section-alt: #ECEEF8 !important;
          --ride-bg-card-glass: rgba(255, 255, 255, 0.94) !important;
          --ride-ambient-gradient: radial-gradient(circle at 18% 10%, rgba(255, 47, 203, 0.12), transparent 32%), radial-gradient(circle at 82% 16%, rgba(32, 231, 255, 0.14), transparent 30%), linear-gradient(180deg, #F5F6FC, #EBEFF8) !important;

          --ride-text-primary: #0A0D1F !important;
          --ride-text-muted: #495166 !important;
          --ride-text-faint: #737D94 !important;
          --ride-border: rgba(15, 23, 42, 0.12) !important;
          --ride-border-subtle: rgba(15, 23, 42, 0.08) !important;

          --ride-header-bg: rgba(255, 255, 255, 0.90) !important;
          --ride-header-border: rgba(15, 23, 42, 0.10) !important;
          --ride-header-nav-bg: rgba(15, 23, 42, 0.05) !important;
          --ride-header-text: #0A0D1F !important;
          --ride-header-nav-link: #535A6D !important;
          --ride-header-nav-active-bg: #0A0D1F !important;
          --ride-header-nav-active-text: #FFFFFF !important;

          --ride-btn-solid-bg: var(--ride-cyan, #00C8E0) !important;
          --ride-btn-solid-text: #07101A !important;
          --ride-btn-outline-bg: rgba(255, 255, 255, 0.85) !important;

          --ride-stat-card-bg: rgba(255, 255, 255, 0.92) !important;
          --ride-chip-bg: rgba(255, 255, 255, 0.85) !important;
          --ride-chip-text: #1E293B !important;
          --ride-pill-bg: rgba(255, 255, 255, 0.85) !important;
          --ride-tag-bg: rgba(15, 23, 42, 0.06) !important;
          --ride-tag-text: #334155 !important;
          --ride-badge-bg: rgba(0, 180, 216, 0.12) !important;
          --ride-perf-bar-bg: rgba(15, 23, 42, 0.10) !important;
          --ride-popular-bg: linear-gradient(135deg, #F0E8FA, #E8F4FD) !important;

          background-color: var(--ride-bg-base) !important;
          color: var(--ride-text-primary) !important;
        }

        /* ------------------------------------------------------------ */
        /* DARK MOOD - DEEP OBSIDIAN NEON CLUB VIBE                    */
        /* ------------------------------------------------------------ */
        html.dark .ridehaus-site,
        body.dark .ridehaus-site,
        [data-theme-mood="dark"] .ridehaus-site,
        :root[data-theme-mood="dark"] .ridehaus-site,
        :root[data-theme-active="true"][data-theme-mood="dark"] .ridehaus-site,
        :root.dark .ridehaus-site {
          --ride-bg-base: #070817 !important;
          --ride-bg-card: #10122A !important;
          --ride-bg-card-subtle: rgba(255, 255, 255, 0.045) !important;
          --ride-bg-card-hover: rgba(255, 255, 255, 0.08) !important;
          --ride-bg-section-alt: #0B0D20 !important;
          --ride-bg-card-glass: rgba(8, 10, 24, 0.80) !important;
          --ride-ambient-gradient: radial-gradient(circle at 20% 10%, rgba(255, 47, 203, 0.22), transparent 30%), radial-gradient(circle at 80% 15%, rgba(32, 231, 255, 0.2), transparent 28%), linear-gradient(180deg, #070817, #05050D) !important;

          --ride-text-primary: #FFFFFF !important;
          --ride-text-muted: rgba(255, 255, 255, 0.62) !important;
          --ride-text-faint: rgba(255, 255, 255, 0.40) !important;
          --ride-border: rgba(255, 255, 255, 0.12) !important;
          --ride-border-subtle: rgba(255, 255, 255, 0.08) !important;

          --ride-header-bg: rgba(8, 10, 24, 0.78) !important;
          --ride-header-border: rgba(255, 255, 255, 0.10) !important;
          --ride-header-nav-bg: rgba(255, 255, 255, 0.045) !important;
          --ride-header-text: #FFFFFF !important;
          --ride-header-nav-link: rgba(255, 255, 255, 0.55) !important;
          --ride-header-nav-active-bg: #FFFFFF !important;
          --ride-header-nav-active-text: #080A18 !important;

          --ride-btn-solid-bg: #20E7FF !important;
          --ride-btn-solid-text: #07101A !important;
          --ride-btn-outline-bg: transparent !important;

          --ride-stat-card-bg: rgba(7, 8, 23, 0.78) !important;
          --ride-chip-bg: rgba(255, 255, 255, 0.10) !important;
          --ride-chip-text: rgba(255, 255, 255, 0.80) !important;
          --ride-pill-bg: rgba(255, 255, 255, 0.06) !important;
          --ride-tag-bg: rgba(255, 255, 255, 0.07) !important;
          --ride-tag-text: rgba(255, 255, 255, 0.66) !important;
          --ride-badge-bg: linear-gradient(to right, rgba(32, 231, 255, 0.2), rgba(255, 47, 203, 0.2)) !important;
          --ride-perf-bar-bg: rgba(255, 255, 255, 0.10) !important;
          --ride-popular-bg: linear-gradient(135deg, #1B1235, #10142E) !important;

          background-color: var(--ride-bg-base) !important;
          color: var(--ride-text-primary) !important;
        }

        /* ------------------------------------------------------------ */
        /* CUSTOM BACKGROUND MODE                                       */
        /* ------------------------------------------------------------ */
        [data-theme-bg-mode="custom"] .ridehaus-site {
          --ride-bg-base: var(--theme-bg-base, #070817) !important;
          --ride-bg-card: var(--theme-bg-card, #10122A) !important;
          --ride-bg-card-subtle: var(--theme-bg-card, #10122A) !important;
          --ride-bg-section-alt: var(--theme-bg-surface, #0B0D20) !important;
        }

        /* ------------------------------------------------------------ */
        /* COMPONENT & UTILITY OVERRIDES                                */
        /* ------------------------------------------------------------ */
        .ridehaus-site {
          background-color: var(--ride-bg-base) !important;
          color: var(--ride-text-primary) !important;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        .ridehaus-ambient-backdrop {
          background-image: var(--ride-ambient-gradient) !important;
        }
        .ridehaus-header-bar {
          background-color: var(--ride-header-bg) !important;
          border-color: var(--ride-header-border) !important;
          color: var(--ride-header-text) !important;
        }
        .ridehaus-nav {
          background-color: var(--ride-header-nav-bg) !important;
          border-color: var(--ride-header-border) !important;
        }
        .ridehaus-nav-link {
          color: var(--ride-header-nav-link) !important;
        }
        .ridehaus-nav-active {
          background-color: var(--ride-header-nav-active-bg) !important;
          color: var(--ride-header-nav-active-text) !important;
          box-shadow: 0 0 22px var(--ride-accent-glow) !important;
        }
        .ridehaus-header-cta {
          background-color: var(--ride-cyan) !important;
          color: #07101A !important;
          box-shadow: 0 0 26px var(--ride-accent-glow) !important;
        }
        .ridehaus-menu-btn {
          border-color: var(--ride-header-border) !important;
          background-color: var(--ride-header-nav-bg) !important;
          color: var(--ride-header-text) !important;
        }
        .ridehaus-mobile-menu {
          background-color: var(--ride-header-bg) !important;
          border-color: var(--ride-header-border) !important;
          color: var(--ride-header-text) !important;
        }
        .ridehaus-mobile-link {
          color: var(--ride-header-nav-link) !important;
        }
        .ridehaus-mobile-active {
          background-color: var(--ride-header-nav-active-bg) !important;
          color: var(--ride-header-nav-active-text) !important;
        }

        /* BUTTONS & PILLS */
        .ridehaus-btn-solid {
          background: var(--ride-btn-solid-bg) !important;
          color: var(--ride-btn-solid-text) !important;
          box-shadow: 0 0 34px var(--ride-accent-glow) !important;
        }
        .ridehaus-btn-outline {
          background-color: var(--ride-btn-outline-bg) !important;
          border-color: var(--ride-border) !important;
          color: var(--ride-text-primary) !important;
        }
        .ridehaus-btn-outline:hover {
          border-color: var(--ride-cyan) !important;
          color: var(--ride-cyan) !important;
        }
        .ridehaus-heading-pill {
          background-color: var(--ride-pill-bg) !important;
          border-color: var(--ride-border) !important;
          color: var(--ride-cyan) !important;
        }
        .ridehaus-heading-title {
          color: var(--ride-text-primary) !important;
        }
        .ridehaus-heading-text {
          color: var(--ride-text-muted) !important;
        }

        /* CARDS & CONTAINERS */
        .ridehaus-card-subtle {
          background-color: var(--ride-bg-card-subtle) !important;
          border-color: var(--ride-border-subtle) !important;
          box-shadow: 0 10px 30px rgba(0,0,0,0.06);
        }
        .ridehaus-card-solid {
          background-color: var(--ride-bg-card) !important;
          border-color: var(--ride-border) !important;
        }
        .ridehaus-chip {
          background-color: var(--ride-chip-bg) !important;
          border-color: var(--ride-border) !important;
          color: var(--ride-chip-text) !important;
        }
        .ridehaus-stat-box {
          background-color: var(--ride-stat-card-bg) !important;
          border-color: var(--ride-border) !important;
        }
        .ridehaus-tag {
          background-color: var(--ride-tag-bg) !important;
          color: var(--ride-tag-text) !important;
        }
        .ridehaus-badge-accent {
          background: var(--ride-badge-bg) !important;
          color: var(--ride-cyan) !important;
        }
        .ridehaus-plan-popular {
          background: var(--ride-popular-bg) !important;
          border-color: var(--ride-pink) !important;
          box-shadow: 0 0 60px var(--ride-accent-glow) !important;
        }
        .ridehaus-meter-inner {
          background-color: var(--ride-bg-base) !important;
          color: var(--ride-text-primary) !important;
        }
        .ridehaus-eq-bar {
          background: linear-gradient(to top, var(--ride-cyan), var(--ride-purple), var(--ride-pink)) !important;
        }
      `}</style>
      <div className="ridehaus-ambient-backdrop pointer-events-none fixed inset-0 z-0 opacity-70 [background-image:radial-gradient(circle_at_20%_10%,rgba(255,47,203,.22),transparent_30%),radial-gradient(circle_at_80%_15%,rgba(32,231,255,.2),transparent_28%),linear-gradient(180deg,#070817,#05050D)]" />

      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <div className="ridehaus-header-bar mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#080A18]/78 px-4 py-3 shadow-[0_20px_70px_rgba(0,0,0,.35)] backdrop-blur-xl lg:px-5">
          <a
            href="#home"
            className="flex items-center gap-3"
            aria-label="RideHaus Cycling home"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[#FF2FCB] to-[#20E7FF] shadow-[0_0_25px_rgba(255,47,203,.45)]">
              <Bike className="h-5 w-5" />
            </span>
            <span className="text-sm font-black uppercase tracking-[-0.02em]">
              RideHaus Cycling
            </span>
          </a>

          <nav
            className="ridehaus-nav hidden rounded-full border border-white/10 bg-white/[0.045] p-1 lg:flex"
            aria-label="RideHaus navigation"
          >
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.1em] transition ${
                    active
                      ? "ridehaus-nav-active active bg-white text-[#080A18] shadow-[0_0_22px_rgba(32,231,255,.24)]"
                      : "ridehaus-nav-link text-white/55 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#schedule"
              className="ridehaus-header-cta rounded-full bg-[#20E7FF] px-5 py-3 text-xs font-black uppercase tracking-[0.13em] text-[#07101A] shadow-[0_0_26px_rgba(32,231,255,.34)] transition hover:-translate-y-0.5"
            >
              Book a Bike
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="ridehaus-menu-btn grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/[0.06] lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
        {/* Mobile Navigation Backdrop & Sheet */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 top-[4.75rem] z-40 bg-black/75 backdrop-blur-xs lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <nav
              id="mobile-navigation"
              className="ridehaus-mobile-menu fixed inset-x-4 top-[4.75rem] z-50 max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-[2rem] border border-white/10 bg-[#080A18]/98 p-4 shadow-2xl backdrop-blur-2xl lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-1.5">
                {navLinks.map(([label, href]) => {
                  const active = activeSection === href.slice(1);

                  return (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? "location" : undefined}
                      className={`ridehaus-mobile-link flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.1em] transition ${
                        active
                          ? "ridehaus-mobile-active active bg-white text-[#080A18]"
                          : "text-white/64 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      <span>{label}</span>
                      <span className="text-xs opacity-50">→</span>
                    </a>
                  );
                })}
              </div>
            </nav>
          </>
        )}
      </header>

      <section
        id="home"
        className="relative z-10 min-h-screen scroll-mt-28 px-5 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40"
      >
        <div className="mx-auto grid max-w-[96rem] gap-10 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div>
            <p className="ridehaus-heading-pill inline-flex items-center gap-3 rounded-full border border-[#20E7FF]/20 bg-white/[0.06] px-4 py-2 text-[0.66rem] font-black uppercase tracking-[0.24em] text-[#20E7FF]">
              <Radio className="h-4 w-4 text-[#FF2FCB]" />
              Rhythm-Based Indoor Cycling
            </p>
            <h1 className="ridehaus-heading-title mt-7 max-w-5xl text-[clamp(2.4rem,9vw,10.8rem)] font-black uppercase leading-[0.8] tracking-[-0.08em]">
              Ride The Beat. Push The Room. Own The Energy.
            </h1>
            <p className="ridehaus-heading-text mt-8 max-w-2xl text-lg leading-8 text-white/62">
              High-energy indoor cycling classes powered by music, coaching,
              lights, and performance tracking that keep every ride moving with
              purpose.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <RideButton href="#schedule">Book Your First Ride</RideButton>
              <RideButton href="#schedule" outline>
                View Class Schedule
              </RideButton>
            </div>
          </div>

          <div className="relative">
            <div className="ridehaus-stat-box absolute -left-5 top-12 z-20 hidden rounded-[1.4rem] border border-white/12 bg-[#080A18]/80 p-5 shadow-[0_0_45px_rgba(255,47,203,.18)] backdrop-blur md:block">
              <p className="text-[0.6rem] font-black uppercase tracking-[0.18em] text-[#FF2FCB]">
                Now Riding
              </p>
              <p className="ridehaus-heading-title mt-2 text-lg font-black uppercase">
                Pulse Ride / Ava
              </p>
              <Equalizer className="mt-4" />
            </div>
            <div className="ridehaus-card-solid relative min-h-[43rem] overflow-hidden rounded-[2rem] border border-white/12 bg-[#10122A] shadow-[0_30px_120px_rgba(0,0,0,.55)] [clip-path:polygon(0_0,100%_6%,100%_100%,0_94%)]">
              <img
                src={images.hero}
                alt="RideHaus indoor cycling class with dramatic studio lighting"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(255,47,203,.38),transparent_28%),radial-gradient(circle_at_78%_20%,rgba(32,231,255,.32),transparent_25%),linear-gradient(180deg,rgba(7,8,23,.06),rgba(7,8,23,.92))]" />
              <div className="absolute left-6 right-6 top-6 flex flex-wrap gap-2">
                {[
                  "45-Min Ride",
                  "Beat-Based Coaching",
                  "Live Room Energy",
                  "Performance Stats",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="ridehaus-chip rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.14em] text-white/80 backdrop-blur"
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="ridehaus-stat-box absolute bottom-8 left-6 right-6 rounded-[1.5rem] border border-white/12 bg-[#070817]/78 p-5 backdrop-blur-xl">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    ["Cadence", "92 RPM"],
                    ["Room Energy", "Live"],
                    ["Next Drop", "00:48"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="ridehaus-heading-text text-[0.55rem] font-black uppercase tracking-[0.18em] text-white/38">
                        {label}
                      </p>
                      <p className="ridehaus-heading-title mt-1 text-2xl font-black tracking-[-0.05em] text-white">
                        {value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="ridehaus-btn-solid absolute -bottom-4 right-8 rounded-full bg-[#FF2FCB] px-5 py-3 text-xs font-black uppercase tracking-[0.15em] text-white shadow-[0_0_34px_rgba(255,47,203,.5)]">
              Lights low / Music up
            </div>
          </div>
        </div>
      </section>

      <section
        id="rides"
        className="relative z-10 scroll-mt-28 px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="ridehaus-card-solid relative min-h-[38rem] overflow-hidden rounded-[2rem] border border-white/12 [clip-path:polygon(0_8%,100%_0,100%_92%,0_100%)]">
            <img
              src={images.experience}
              alt="RideHaus cycling room experience"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070817] via-[#070817]/20 to-transparent" />
            <div className="absolute bottom-8 left-8 max-w-sm">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#20E7FF]">
                Ride experience
              </p>
              <p className="ridehaus-heading-title mt-3 text-4xl font-black uppercase leading-[0.86] tracking-[-0.06em]">
                A room that moves as one.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              label="Ride Experience"
              title="More Than A Workout. It’s A Room Full Of Momentum."
            />
            <div className="mt-10 grid gap-4">
              {rideFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <article
                    key={feature.title}
                    className="ridehaus-card-subtle group rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-6 transition hover:-translate-y-1 hover:border-[#20E7FF]/45 hover:bg-white/[0.07]"
                  >
                    <div className="flex items-start gap-5">
                      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[#FF2FCB]/25 to-[#20E7FF]/20 text-[#20E7FF]">
                        <Icon className="h-6 w-6" />
                      </span>
                      <div>
                        <p className="text-[0.58rem] font-black uppercase tracking-[0.2em] text-[#FF2FCB]">
                          Track 0{index + 1}
                        </p>
                        <h3 className="ridehaus-heading-title mt-3 text-3xl font-black uppercase leading-none tracking-[-0.055em]">
                          {feature.title}
                        </h3>
                        <p className="ridehaus-heading-text mt-4 text-sm leading-7 text-white/54">
                          {feature.text}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-28 max-w-[96rem]">
          <SectionHeading label="Class Types" title="Choose Your Ride" />
          <div className="-mx-5 mt-12 flex snap-x gap-5 overflow-x-auto px-5 pb-5 lg:mx-0 lg:grid lg:grid-cols-4 lg:overflow-visible lg:px-0">
            {classes.map((ride, index) => (
              <article
                key={ride.title}
                className={`ridehaus-card-subtle group min-w-[19rem] snap-start overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.045] transition duration-500 hover:-translate-y-2 hover:border-[#FF2FCB]/50 lg:min-w-0 ${index % 2 ? "lg:translate-y-8" : ""}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={ride.image}
                    alt={`${ride.title} indoor cycling class`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070817] via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 flex gap-2">
                    <span className="rounded-full bg-[#20E7FF] px-3 py-1.5 text-[0.56rem] font-black uppercase tracking-[0.13em] text-[#07101A]">
                      {ride.duration}
                    </span>
                    <span className="rounded-full bg-[#FF2FCB] px-3 py-1.5 text-[0.56rem] font-black uppercase tracking-[0.13em] text-white">
                      {ride.difficulty}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="ridehaus-heading-title text-3xl font-black uppercase leading-none tracking-[-0.06em]">
                    {ride.title}
                  </h3>
                  <p className="ridehaus-heading-text mt-4 text-sm leading-7 text-white/54">
                    {ride.text}
                  </p>
                  <a
                    href="#schedule"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#20E7FF] transition hover:translate-x-1"
                  >
                    Reserve Spot <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="studio"
        className="relative z-10 scroll-mt-28 px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[96rem]">
          <SectionHeading
            label="Studio Atmosphere"
            title="Lights Low. Music Up. Energy High."
            text="RideHaus is designed like a performance room: immersive lighting, powerful sound, clean bike rows, and a focused studio flow from check-in to cooldown."
          />
          <div className="ridehaus-card-solid relative mt-12 min-h-[42rem] overflow-hidden rounded-[2.5rem] border border-white/12">
            <img
              src={images.studio}
              alt="RideHaus cinematic indoor cycling studio"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070817]/90 via-[#070817]/45 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 grid gap-4 md:grid-cols-4">
              {studioStats.map((stat, index) => (
                <div
                  key={stat}
                  className="ridehaus-stat-box rounded-[1.4rem] border border-white/12 bg-[#070817]/70 p-5 backdrop-blur"
                >
                  <p className="text-[0.56rem] font-black uppercase tracking-[0.18em] text-[#FF2FCB]">
                    0{index + 1}
                  </p>
                  <p className="ridehaus-heading-title mt-8 text-xl font-black uppercase leading-none tracking-[-0.04em]">
                    {stat}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="coaches"
        className="relative z-10 scroll-mt-28 bg-[#0B0D20] px-5 py-24 lg:px-10 lg:py-32"
        style={{ backgroundColor: "var(--ride-bg-section-alt)" }}
      >
        <div className="mx-auto max-w-[96rem]">
          <SectionHeading label="Coach Lineup" title="Meet The Ride Leaders" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {coaches.map((coach, index) => (
              <article
                key={coach.name}
                className="ridehaus-card-solid group overflow-hidden rounded-[2rem] border border-white/12 bg-[#11142B] transition hover:-translate-y-1 hover:border-[#20E7FF]/40"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={coach.image}
                    alt={`${coach.name} RideHaus coach`}
                    className="absolute inset-0 h-full w-full object-cover grayscale-[18%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070817] via-transparent to-transparent" />
                  <span className="ridehaus-chip absolute left-5 top-5 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.16em] backdrop-blur">
                    Lineup 0{index + 1}
                  </span>
                </div>
                <div className="p-6">
                  <p className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#20E7FF]">
                    {coach.role}
                  </p>
                  <h3 className="ridehaus-heading-title mt-3 text-4xl font-black uppercase leading-none tracking-[-0.065em]">
                    {coach.name}
                  </h3>
                  <p className="ridehaus-heading-text mt-4 text-sm leading-7 text-white/54">
                    {coach.vibe}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {coach.tags.map((tag) => (
                      <span
                        key={tag}
                        className="ridehaus-tag rounded-full bg-white/[0.07] px-3 py-1.5 text-xs font-bold text-white/66"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="schedule"
        className="relative z-10 scroll-mt-28 px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[96rem]">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <SectionHeading
              label="Live Schedule"
              title="This Week At The Haus"
            />
            <Equalizer className="justify-end" />
          </div>
          <div className="ridehaus-card-subtle mt-12 overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.045] p-3 shadow-[0_30px_110px_rgba(0,0,0,.42)]">
            {schedule.map(([day, time, ride, coach]) => (
              <article
                key={`${day}-${ride}`}
                className="grid gap-4 border-b border-white/10 px-4 py-5 last:border-b-0 md:grid-cols-[1fr_.7fr_1fr_.7fr_auto] md:items-center"
                style={{ borderColor: "var(--ride-border-subtle)" }}
              >
                <p className="ridehaus-heading-title text-lg font-black uppercase tracking-[-0.03em]">
                  {day}
                </p>
                <p className="ridehaus-heading-text text-sm font-bold text-white/58">{time}</p>
                <span className="ridehaus-badge-accent w-fit rounded-full bg-gradient-to-r from-[#20E7FF]/20 to-[#FF2FCB]/20 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#20E7FF]">
                  {ride}
                </span>
                <p className="ridehaus-heading-text text-sm text-white/60">{coach}</p>
                <a
                  href="#contact"
                  className="ridehaus-btn-outline w-fit rounded-full border border-white/14 px-4 py-2 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:border-[#FF2FCB] hover:text-[#FF2FCB]"
                >
                  Book
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative z-10 bg-[#0B0D20] px-5 py-24 lg:px-10 lg:py-32"
        style={{ backgroundColor: "var(--ride-bg-section-alt)" }}
      >
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div>
            <SectionHeading
              label="Performance Tracking"
              title="Feel The Beat. Track The Push."
              text="Ride metrics give each class a simple read on effort, rhythm, and consistency without breaking the mood of the room."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {performance.map(([label, value, percent]) => (
                <article
                  key={label}
                  className="ridehaus-card-subtle rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="ridehaus-heading-text text-[0.58rem] font-black uppercase tracking-[0.18em] text-white/38">
                        {label}
                      </p>
                      <p className="ridehaus-heading-title mt-2 text-2xl font-black tracking-[-0.05em]">
                        {value}
                      </p>
                    </div>
                    <GlowMeter value={percent as number} />
                  </div>
                  <div
                    className="mt-5 h-2 overflow-hidden rounded-full bg-white/10"
                    style={{ backgroundColor: "var(--ride-perf-bar-bg)" }}
                  >
                    <span
                      className="block h-full rounded-full bg-gradient-to-r from-[#20E7FF] to-[#FF2FCB]"
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="ridehaus-card-solid relative min-h-[40rem] overflow-hidden rounded-[2.4rem] border border-white/12">
            <img
              src={images.performance}
              alt="RideHaus cycling performance tracking"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070817]/94 via-[#070817]/18 to-transparent" />
            <div className="ridehaus-stat-box absolute bottom-7 left-7 right-7 rounded-[1.6rem] border border-white/12 bg-[#070817]/74 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <Activity className="h-6 w-6 text-[#20E7FF]" />
                <p className="ridehaus-heading-title text-sm font-black uppercase tracking-[0.16em]">
                  Live ride output
                </p>
              </div>
              <Equalizer className="mt-5" />
            </div>
          </div>
        </div>
      </section>

      <section
        id="membership"
        className="relative z-10 scroll-mt-28 px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[96rem]">
          <SectionHeading label="Membership" title="Pick Your Ride Frequency" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[2rem] border p-7 ${plan.popular ? "ridehaus-plan-popular border-[#FF2FCB]/70 bg-gradient-to-br from-[#1B1235] to-[#10142E] shadow-[0_0_60px_rgba(255,47,203,.18)] lg:-translate-y-4" : "ridehaus-card-subtle border-white/12 bg-white/[0.045]"}`}
              >
                {plan.popular && (
                  <span className="ridehaus-btn-solid rounded-full bg-[#FF2FCB] px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.15em] text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="ridehaus-heading-title mt-8 text-4xl font-black uppercase leading-none tracking-[-0.065em]">
                  {plan.name}
                </h3>
                <p className="ridehaus-heading-text mt-4 text-sm leading-7 text-white/54">
                  {plan.text}
                </p>
                <div
                  className="mt-8 grid gap-3 border-t border-white/10 pt-7"
                  style={{ borderColor: "var(--ride-border-subtle)" }}
                >
                  {plan.features.map((feature) => (
                    <span
                      key={feature}
                      className="ridehaus-heading-title flex items-center gap-3 text-sm font-bold text-white/78"
                    >
                      <Check className="h-4 w-4 text-[#20E7FF]" />
                      {feature}
                    </span>
                  ))}
                </div>
                <RideButton
                  href="#schedule"
                  outline={!plan.popular}
                  className="mt-8 w-full"
                >
                  Choose {plan.name}
                </RideButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className="relative z-10 bg-[#0B0D20] px-5 py-24 lg:px-10 lg:py-32"
        style={{ backgroundColor: "var(--ride-bg-section-alt)" }}
      >
        <div className="mx-auto grid max-w-[96rem] gap-10 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="ridehaus-card-solid relative min-h-[38rem] overflow-hidden rounded-[2.3rem] border border-white/12">
            <img
              src={images.community}
              alt="RideHaus cycling community ride"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070817]/88 via-transparent to-transparent" />
          </div>
          <div>
            <SectionHeading
              label="Community"
              title="Come For The Ride. Stay For The Room."
            />
            <div className="mt-10 grid gap-4">
              {community.map(([title, text], index) => (
                <article
                  key={title}
                  className="ridehaus-card-subtle rounded-[1.7rem] border border-white/10 bg-white/[0.045] p-6"
                >
                  <p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#FF2FCB]">
                    Community 0{index + 1}
                  </p>
                  <h3 className="ridehaus-heading-title mt-4 text-2xl font-black uppercase tracking-[-0.04em]">
                    {title}
                  </h3>
                  <p className="ridehaus-heading-text mt-3 text-sm leading-7 text-white/54">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 scroll-mt-28 px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="ridehaus-card-solid mx-auto overflow-hidden rounded-[2.6rem] border border-white/12 bg-[#10122A] shadow-[0_30px_120px_rgba(0,0,0,.45)] lg:grid lg:max-w-[96rem] lg:grid-cols-[1fr_.85fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#20E7FF] px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#07101A]">
              <CalendarDays className="h-4 w-4" />
              Final call
            </p>
            <h2 className="ridehaus-heading-title mt-7 text-[clamp(2.35rem,7.5vw,9rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">
              Your Bike Is Waiting.
            </h2>
            <p className="ridehaus-heading-text mt-7 max-w-xl text-lg leading-8 text-white/62">
              Clip in, follow the beat, and ride with a room built to move.
            </p>
            <RideButton href="mailto:book@ridehaus.example" className="mt-9">
              Book a Bike
            </RideButton>
          </div>
          <div className="relative min-h-[32rem]">
            <img
              src={images.cta}
              alt="RideHaus rider ready to clip into a bike"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070817]/50 to-transparent" />
          </div>
        </div>
      </section>

      <footer
        className="relative z-10 border-t border-white/10 px-5 py-12 lg:px-10"
        style={{ borderColor: "var(--ride-border-subtle)" }}
      >
        <div className="mx-auto flex max-w-[96rem] flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <div>
            <a
              href="#home"
              className="ridehaus-heading-title text-xl font-black uppercase tracking-[-0.04em]"
            >
              RideHaus Cycling
            </a>
            <p className="ridehaus-heading-text mt-4 max-w-sm text-sm leading-7 text-white/46">
              High-energy indoor cycling powered by music, coaching, and
              community.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="ridehaus-heading-text text-xs font-black uppercase tracking-[0.15em] text-white/42 transition hover:text-[#20E7FF]"
              >
                {label}
              </a>
            ))}
          </div>
          <div>
            <p className="ridehaus-heading-text text-[0.58rem] font-black uppercase tracking-[0.18em] text-white/30">
              Social
            </p>
            <div className="mt-3 flex gap-2">
              {["IG", "TT", "SP"].map((social) => (
                <a
                  key={social}
                  href="#contact"
                  aria-label={`${social} social placeholder`}
                  className="ridehaus-card-subtle grid h-10 w-10 place-items-center rounded-full border border-white/12 text-[0.6rem] font-black text-white/58 transition hover:border-[#FF2FCB] hover:text-[#FF2FCB]"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="ridehaus-heading-text mx-auto mt-10 max-w-[96rem] text-xs text-white/28">
          © 2026 RideHaus Cycling. Class availability, coach lineup, and
          memberships may vary.
        </p>
      </footer>
    </main>
  );
}
