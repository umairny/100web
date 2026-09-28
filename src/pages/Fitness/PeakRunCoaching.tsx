import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  Footprints,
  Menu,
  Route,
  Star,
  X,
  Zap,
} from "lucide-react";
import heroImage from "../../assets/optimized/fitness/PeakRun/hero.webp";
import plan5kImage from "../../assets/optimized/fitness/PeakRun/plan-5k.webp";
import plan10kImage from "../../assets/optimized/fitness/PeakRun/plan-10k.webp";
import planHalfImage from "../../assets/optimized/fitness/PeakRun/plan-half-marathon.webp";
import planMarathonImage from "../../assets/optimized/fitness/PeakRun/plan-marathon.webp";
import raceImage from "../../assets/optimized/fitness/PeakRun/race-coaching.webp";
import progressImage from "../../assets/optimized/fitness/PeakRun/progress-tracking.webp";
import membershipImage from "../../assets/optimized/fitness/PeakRun/membership.webp";
import testimonialImage from "../../assets/optimized/fitness/PeakRun/testimonial-runners.webp";
import abstractImage from "../../assets/optimized/fitness/PeakRun/running-abstract-bg.webp";
import ctaImage from "../../assets/optimized/fitness/PeakRun/cta.webp";

const navLinks = [
  ["Plans", "#plans"],
  ["Coaching", "#coaching"],
  ["Races", "#races"],
  ["Results", "#results"],
  ["Contact", "#contact"],
];

const planCards = [
  {
    image: plan5kImage,
    title: "5K Starter Plan",
    text: "Build consistency, confidence, and pacing with a beginner-friendly training structure.",
    tag: "First race",
  },
  {
    image: plan10kImage,
    title: "10K Progress Plan",
    text: "Improve endurance, speed control, and weekly mileage with smart progression.",
    tag: "Endurance",
  },
  {
    image: planHalfImage,
    title: "Half Marathon Plan",
    text: "Prepare for longer efforts with tempo runs, long runs, recovery, and race strategy.",
    tag: "Distance",
  },
  {
    image: planMarathonImage,
    title: "Marathon Build Plan",
    text: "Train for the full distance with structured mileage, pacing, fueling, and recovery.",
    tag: "Full build",
  },
];

const processSteps = [
  [
    "01",
    "Assess",
    "Review your current fitness, race goal, schedule, experience level, and training history.",
  ],
  [
    "02",
    "Plan",
    "Build a weekly running plan with workouts, recovery, pacing, and long-run progression.",
  ],
  [
    "03",
    "Coach",
    "Receive feedback, adjustments, accountability, and guidance as your training develops.",
  ],
  [
    "04",
    "Race",
    "Prepare with pacing strategy, taper support, fueling notes, and race-day confidence.",
  ],
];

const raceFeatures = [
  "5K / 10K Coaching",
  "Half Marathon Prep",
  "Marathon Build",
  "Race-Day Strategy",
];

const progressStats = [
  ["Weekly mileage", "28.4 mi", "Consistent base building"],
  ["Pace trends", "8:42 / mi", "Controlled effort work"],
  ["Long run distance", "12 mi", "Progressive weekend build"],
  ["Workout consistency", "86%", "Four-week training rhythm"],
];

const packages = [
  {
    name: "Base Pace",
    price: "$79",
    text: "For runners who want a clear training plan.",
    features: ["Personalized plan", "Weekly schedule", "Goal pacing"],
    popular: false,
  },
  {
    name: "Peak Build",
    price: "$139",
    text: "For runners who want coaching support and adjustments.",
    features: ["Personalized plan", "Weekly check-ins", "Workout feedback"],
    popular: true,
  },
  {
    name: "Race Ready",
    price: "$219",
    text: "For runners preparing for a specific event.",
    features: [
      "Race-specific plan",
      "Pacing strategy",
      "Taper support",
      "Race-day guidance",
    ],
    popular: false,
  },
];

const testimonials = [
  [
    "More consistent running",
    "PeakRun gave me a plan I could actually follow. The weekly structure helped me stop guessing and start stacking steady runs.",
    "Maya R.",
  ],
  [
    "Better pacing confidence",
    "I learned what each pace should feel like. Race workouts felt calmer because I understood the purpose behind them.",
    "Evan T.",
  ],
  [
    "Stronger race preparation",
    "The taper notes, long-run plan, and race-day pacing guide made the whole process feel organized and manageable.",
    "Nadia S.",
  ],
];

function PeakButton({
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
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-[1.15rem] px-6 text-xs font-black uppercase tracking-[0.15em] transition duration-300 hover:-translate-y-0.5 ${
        outline
          ? "peakrun-btn-outline border border-[#0B2A4A]/20 bg-white text-[#0B2A4A] hover:border-[#17A7E8] hover:text-[#17A7E8]"
          : "peakrun-btn-solid bg-[#FF7A3D] text-white shadow-[0_16px_35px_rgba(255,122,61,.28)] hover:bg-[#f46527]"
      } ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function PeakHeading({
  label,
  title,
  text,
  light = false,
}: {
  label: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-4xl">
      <p
        className={`peakrun-heading-pill inline-flex items-center gap-2 rounded-[1rem] px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.2em] ${
          light ? "bg-white/10 text-[#8EDBFF]" : "bg-[#E7F6FD] text-[#117DB0]"
        }`}
      >
        <Route className="h-4 w-4" />
        {label}
      </p>
      <h2
        className={`peakrun-heading-title mt-5 text-[clamp(2.15rem,5.5vw,6.5rem)] font-bold uppercase leading-[0.92] tracking-[-0.055em] ${
          light ? "peakrun-title-light text-white" : "peakrun-title-dark text-[#102033]"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`peakrun-heading-text mt-6 max-w-2xl text-base leading-8 md:text-lg ${
            light ? "peakrun-body-light text-white/62" : "peakrun-body-dark text-[#56677A]"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function PeakLogo() {
  return (
    <a
      href="#home"
      className="peakrun-logo flex items-center gap-3 text-[#102033]"
      aria-label="PeakRun Coaching home"
    >
      <span className="peakrun-logo-box grid h-11 w-11 place-items-center rounded-2xl bg-[#0B2A4A] text-[#8EDBFF] shadow-lg shadow-[#0B2A4A]/15">
        <Footprints className="h-5 w-5" />
      </span>
      <span>
        <strong className="peakrun-logo-brand block text-base font-black uppercase leading-none tracking-[-0.03em]">
          PeakRun
        </strong>
        <span className="peakrun-logo-sub mt-1 block text-[0.55rem] font-black uppercase tracking-[0.22em] text-[#678]">
          Coaching
        </span>
      </span>
    </a>
  );
}

export function PeakRunCoaching() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Robust frame-debounced scroll spy with boundary guards
  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollable > 0 && scrollY >= scrollable - 70) {
        setActiveSection("contact");
        return;
      }

      if (scrollY < 80) {
        setActiveSection("");
        return;
      }

      const marker = Math.min(220, Math.max(100, window.innerHeight * 0.28));
      const sectionIds = [
        "plans",
        "coaching",
        "races",
        "results",
        "contact",
      ];
      let current = "";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= marker) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  return (
    <main className="peakrun-site w-full max-w-full overflow-x-hidden bg-[#F5F8FB] text-[#102033] selection:bg-[#FFB06B] selection:text-[#102033]">
      <style>{`
        .peakrun-site {
          /* Core Brand Theme Tokens */
          --peak-accent: #FF7A3D;
          --peak-accent-hover: #f46527;
          --peak-accent-sec: #117DB0;
          --peak-accent-sec-hover: #0d638c;
          --peak-accent-glow: rgba(255, 122, 61, 0.28);
          --peak-contrast: #FFFFFF;
          --peak-cyan: #8EDBFF;
          --peak-amber: #FFB06B;

          /* Surfaces - Athletic Runner Light Default */
          --peak-bg-base: #F5F8FB;
          --peak-bg-hero: #F5F8FB;
          --peak-bg-card: #FFFFFF;
          --peak-bg-card-alt: #EAF4FA;
          --peak-bg-navy: #0B2A4A;
          --peak-bg-dark-hero: #071B33;
          --peak-bg-footer: #FFFFFF;

          /* Text Tokens */
          --peak-text-primary: #102033;
          --peak-text-muted: #56677A;
          --peak-text-faint: #6B7886;
          --peak-border: #DDE7EF;
          --peak-border-subtle: rgba(11, 42, 74, 0.10);

          /* Header */
          --peak-header-bg: rgba(255, 255, 255, 0.94);
          --peak-header-border: rgba(11, 42, 74, 0.10);
          --peak-header-text: #102033;
          --peak-header-link: #5D6C7E;
          --peak-header-hover: #0B2A4A;
        }

        /* ------------------------------------------------------------ */
        /* DYNAMIC THEME PRESET ADAPTATION                              */
        /* ------------------------------------------------------------ */
        [data-theme-preset]:not([data-theme-preset="original"]) .peakrun-site,
        [data-theme-active="true"]:not([data-theme-preset="original"]) .peakrun-site {
          --peak-accent: var(--theme-accent-primary, #FF7A3D) !important;
          --peak-accent-hover: var(--theme-accent-primary-hover, #f46527) !important;
          --peak-accent-sec: var(--theme-accent-secondary, #117DB0) !important;
          --peak-accent-sec-hover: var(--theme-accent-secondary-hover, #0d638c) !important;
          --peak-accent-glow: var(--theme-accent-glow, rgba(255, 122, 61, 0.28)) !important;
          --peak-contrast: var(--theme-accent-contrast, #FFFFFF) !important;
        }

        /* ------------------------------------------------------------ */
        /* LIGHT MOOD - CRISP HIGH-CONTRAST ATHLETIC DAY RUN           */
        /* ------------------------------------------------------------ */
        [data-theme-mood="light"] .peakrun-site,
        :root.light .peakrun-site,
        html.light .peakrun-site {
          --peak-bg-base: #F5F8FB !important;
          --peak-bg-hero: #F5F8FB !important;
          --peak-bg-card: #FFFFFF !important;
          --peak-bg-card-alt: #EAF4FA !important;
          --peak-bg-navy: #0B2A4A !important;
          --peak-bg-dark-hero: #071B33 !important;
          --peak-bg-footer: #FFFFFF !important;

          --peak-text-primary: #102033 !important;
          --peak-text-muted: #56677A !important;
          --peak-text-faint: #6B7886 !important;
          --peak-border: #DDE7EF !important;
          --peak-border-subtle: rgba(11, 42, 74, 0.08) !important;

          --peak-header-bg: rgba(255, 255, 255, 0.95) !important;
          --peak-header-border: rgba(11, 42, 74, 0.10) !important;
          --peak-header-text: #102033 !important;
          --peak-header-link: #5D6C7E !important;
          --peak-header-hover: #0B2A4A !important;

          background-color: var(--peak-bg-base) !important;
          color: var(--peak-text-primary) !important;
        }

        /* ------------------------------------------------------------ */
        /* DARK MOOD - NOCTURNAL RUNNER OBSIDIAN & MIDNIGHT NAVY       */
        /* ------------------------------------------------------------ */
        html.dark .peakrun-site,
        body.dark .peakrun-site,
        [data-theme-mood="dark"] .peakrun-site,
        :root[data-theme-mood="dark"] .peakrun-site,
        :root[data-theme-active="true"][data-theme-mood="dark"] .peakrun-site,
        :root.dark .peakrun-site {
          --peak-bg-base: #07111D !important;
          --peak-bg-hero: #07111D !important;
          --peak-bg-card: #0F1D2E !important;
          --peak-bg-card-alt: #0B1726 !important;
          --peak-bg-navy: #13243A !important;
          --peak-bg-dark-hero: #050E18 !important;
          --peak-bg-footer: #050B12 !important;

          --peak-text-primary: #F0F6FC !important;
          --peak-text-muted: #95A5B8 !important;
          --peak-text-faint: #6A7D92 !important;
          --peak-border: rgba(255, 255, 255, 0.12) !important;
          --peak-border-subtle: rgba(255, 255, 255, 0.08) !important;

          --peak-header-bg: rgba(7, 17, 29, 0.95) !important;
          --peak-header-border: rgba(255, 255, 255, 0.10) !important;
          --peak-header-text: #FFFFFF !important;
          --peak-header-link: rgba(255, 255, 255, 0.65) !important;
          --peak-header-hover: #FFFFFF !important;

          background-color: var(--peak-bg-base) !important;
          color: var(--peak-text-primary) !important;
        }

        /* ------------------------------------------------------------ */
        /* CUSTOM BACKGROUND MODE                                       */
        /* ------------------------------------------------------------ */
        [data-theme-bg-mode="custom"] .peakrun-site {
          --peak-bg-base: var(--theme-bg-base, #07111D) !important;
          --peak-bg-hero: var(--theme-bg-base, #07111D) !important;
          --peak-bg-card: var(--theme-bg-card, #0F1D2E) !important;
          --peak-bg-card-alt: var(--theme-bg-surface, #0B1726) !important;
          --peak-bg-navy: var(--theme-bg-surface, #13243A) !important;
          --peak-bg-dark-hero: var(--theme-bg-base, #050E18) !important;
          --peak-bg-footer: var(--theme-bg-base, #050B12) !important;

          --peak-text-primary: var(--theme-text-primary, #F0F6FC) !important;
          --peak-text-muted: var(--theme-text-secondary, #95A5B8) !important;
          --peak-border: var(--theme-border, rgba(255, 255, 255, 0.12)) !important;
          background-color: var(--peak-bg-base) !important;
          color: var(--peak-text-primary) !important;
        }

        /* ------------------------------------------------------------ */
        /* SECTION & COMPONENT THEME HOOKS                              */
        /* ------------------------------------------------------------ */

        /* Buttons */
        .peakrun-site .peakrun-btn-solid {
          background-color: var(--peak-accent) !important;
          color: var(--peak-contrast) !important;
          box-shadow: 0 16px 35px var(--peak-accent-glow) !important;
        }
        .peakrun-site .peakrun-btn-solid:hover {
          background-color: var(--peak-accent-hover) !important;
          color: var(--peak-contrast) !important;
        }
        .peakrun-site .peakrun-btn-outline {
          border-color: var(--peak-border) !important;
          background-color: var(--peak-bg-card) !important;
          color: var(--peak-text-primary) !important;
        }
        .peakrun-site .peakrun-btn-outline:hover {
          border-color: var(--peak-accent-sec) !important;
          color: var(--peak-accent-sec) !important;
        }

        /* Header & Nav */
        .peakrun-site .peakrun-header {
          background-color: var(--peak-header-bg) !important;
          border-color: var(--peak-header-border) !important;
        }
        .peakrun-site .peakrun-logo-brand {
          color: var(--peak-header-text) !important;
        }
        .peakrun-site .peakrun-logo-sub {
          color: var(--peak-header-link) !important;
        }
        .peakrun-site .peakrun-logo-box {
          background-color: var(--peak-bg-navy) !important;
          color: var(--peak-cyan) !important;
        }
        .peakrun-site .peakrun-nav-link {
          color: var(--peak-header-link) !important;
        }
        .peakrun-site .peakrun-nav-link:hover {
          background-color: rgba(125, 125, 125, 0.08) !important;
          color: var(--peak-header-hover) !important;
        }
        .peakrun-site .peakrun-nav-active {
          background-color: rgba(17, 125, 176, 0.14) !important;
          color: var(--peak-accent-sec) !important;
        }
        .peakrun-site .peakrun-menu-btn {
          border-color: var(--peak-border) !important;
          color: var(--peak-header-text) !important;
        }
        .peakrun-site .peakrun-mobile-menu {
          background-color: var(--peak-header-bg) !important;
          border-color: var(--peak-header-border) !important;
        }

        /* Headings & Text */
        .peakrun-site .peakrun-title-dark {
          color: var(--peak-text-primary) !important;
        }
        .peakrun-site .peakrun-body-dark {
          color: var(--peak-text-muted) !important;
        }

        /* Hero Card */
        .peakrun-site .peakrun-hero-card {
          background-color: var(--peak-bg-card) !important;
          border-color: var(--peak-border) !important;
        }
        .peakrun-site .peakrun-hero-chip {
          background-color: var(--peak-bg-base) !important;
          border-color: var(--peak-border) !important;
          color: var(--peak-text-muted) !important;
        }
        .peakrun-site .peakrun-hero-desc {
          color: var(--peak-text-muted) !important;
        }
        .peakrun-site .peakrun-hero-title {
          color: var(--peak-text-primary) !important;
        }
        .peakrun-site .peakrun-hero-stat-card {
          background-color: var(--peak-bg-card) !important;
          color: var(--peak-text-primary) !important;
        }
        .peakrun-site .peakrun-hero-stat-val {
          color: var(--peak-text-primary) !important;
        }
        .peakrun-site .peakrun-hero-stat-label {
          color: var(--peak-text-muted) !important;
        }

        /* Plans Section */
        .peakrun-site .peakrun-section-plans {
          background-color: var(--peak-bg-base) !important;
        }
        .peakrun-site .peakrun-plan-card {
          background-color: var(--peak-bg-card) !important;
          border-color: var(--peak-border) !important;
        }
        .peakrun-site .peakrun-plan-title {
          color: var(--peak-text-primary) !important;
        }
        .peakrun-site .peakrun-plan-desc {
          color: var(--peak-text-muted) !important;
        }
        .peakrun-site .peakrun-plan-link {
          color: var(--peak-accent-sec) !important;
        }

        /* Coaching Process Section */
        .peakrun-site .peakrun-section-coaching {
          background-color: var(--peak-bg-card-alt) !important;
        }
        .peakrun-site .peakrun-step-card {
          background-color: var(--peak-bg-card) !important;
          border-color: var(--peak-border) !important;
        }
        .peakrun-site .peakrun-step-title {
          color: var(--peak-text-primary) !important;
        }
        .peakrun-site .peakrun-step-desc {
          color: var(--peak-text-muted) !important;
        }
        .peakrun-site .peakrun-step-num {
          background-color: var(--peak-bg-navy) !important;
          color: var(--peak-cyan) !important;
        }

        /* Results / Tracking */
        .peakrun-site .peakrun-section-results {
          background-color: var(--peak-bg-base) !important;
        }
        .peakrun-site .peakrun-stat-card {
          background-color: var(--peak-bg-card) !important;
          border-color: var(--peak-border) !important;
        }
        .peakrun-site .peakrun-stat-val {
          color: var(--peak-text-primary) !important;
        }
        .peakrun-site .peakrun-stat-label {
          color: var(--peak-text-muted) !important;
        }
        .peakrun-site .peakrun-progress-box {
          background-color: var(--peak-bg-card) !important;
          border-color: var(--peak-border) !important;
        }
        .peakrun-site .peakrun-progress-subcard {
          background-color: var(--peak-bg-card-alt) !important;
        }

        /* Packages Section */
        .peakrun-site .peakrun-section-packages {
          background-color: var(--peak-bg-card-alt) !important;
        }
        .peakrun-site .peakrun-pkg-card {
          background-color: var(--peak-bg-card) !important;
          border-color: var(--peak-border) !important;
          color: var(--peak-text-primary) !important;
        }
        .peakrun-site .peakrun-pkg-popular {
          border-color: var(--peak-accent) !important;
          background-color: var(--peak-bg-navy) !important;
          color: #FFFFFF !important;
        }

        /* Testimonials Section */
        .peakrun-site .peakrun-section-testimonials {
          background-color: var(--peak-bg-base) !important;
        }
        .peakrun-site .peakrun-testi-card {
          background-color: var(--peak-bg-card) !important;
          border-color: var(--peak-border) !important;
        }
        .peakrun-site .peakrun-testi-title {
          color: var(--peak-text-primary) !important;
        }
        .peakrun-site .peakrun-testi-desc {
          color: var(--peak-text-muted) !important;
        }
        .peakrun-site .peakrun-testi-name {
          color: var(--peak-accent-sec) !important;
        }

        /* Footer */
        .peakrun-site .peakrun-footer {
          background-color: var(--peak-bg-footer) !important;
          border-color: var(--peak-border) !important;
        }
        .peakrun-site .peakrun-footer-border {
          border-color: var(--peak-border) !important;
        }
        .peakrun-site .peakrun-footer-link {
          color: var(--peak-text-muted) !important;
        }
        .peakrun-site .peakrun-footer-link:hover {
          color: var(--peak-accent-sec) !important;
        }
        .peakrun-site .peakrun-social-btn {
          border-color: var(--peak-border) !important;
          color: var(--peak-text-muted) !important;
        }
        .peakrun-site .peakrun-social-btn:hover {
          border-color: var(--peak-accent-sec) !important;
          color: var(--peak-accent-sec) !important;
        }
      `}</style>
      <header className="peakrun-header fixed inset-x-0 top-0 z-50 border-b border-[#0B2A4A]/10 bg-white/92 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.75rem] max-w-[96rem] items-center justify-between px-5 lg:px-10">
          <PeakLogo />
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="PeakRun navigation"
          >
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  className={`rounded-full px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.14em] transition ${active ? "peakrun-nav-active bg-[#E7F6FD] text-[#117DB0]" : "peakrun-nav-link text-[#5D6C7E] hover:bg-[#F0F6FA] hover:text-[#0B2A4A]"}`}
                >
                  {label}
                </a>
              );
            })}
          </nav>
          {/* Desktop-Only Training CTA (Isolated from mobile viewports) */}
          <div className="hidden lg:block">
            <PeakButton href="#contact">
              Start Training
            </PeakButton>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="peakrun-menu-btn grid h-11 w-11 place-items-center rounded-full border border-[#0B2A4A]/15 text-[#102033] transition active:scale-95 hover:border-[#117DB0] lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
        {/* Mobile Slide-Down Overlay */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 top-[4.75rem] z-40 bg-black/45 backdrop-blur-xs lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <nav className="peakrun-mobile-menu fixed inset-x-0 top-[4.75rem] z-50 border-b border-[#0B2A4A]/10 bg-white/98 px-5 py-5 shadow-2xl backdrop-blur-2xl lg:hidden">
              <div className="space-y-1">
                {navLinks.map(([label, href]) => {
                  const active = activeSection === href.slice(1);
                  return (
                    <a
                      key={label}
                      href={href}
                      aria-current={active ? "location" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-[0.1em] transition ${
                        active
                          ? "peakrun-nav-active bg-[#E7F6FD] text-[#117DB0] font-black"
                          : "peakrun-nav-link text-[#5D6C7E] hover:bg-[#F0F6FA] hover:text-[#0B2A4A]"
                      }`}
                    >
                      <span>{label}</span>
                      <span className="text-xs text-[#117DB0]">→</span>
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
        className="peakrun-section-hero relative isolate overflow-hidden bg-[#F5F8FB] pt-[4.75rem] text-[#102033]"
      >
        <img
          src={abstractImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.16] mix-blend-multiply"
        />
        <div className="absolute inset-x-0 top-0 h-[30rem] bg-[linear-gradient(135deg,#E7F6FD_0%,#FFF4EA_52%,#F5F8FB_100%)] opacity-80" />
        <div className="absolute right-[8%] top-36 h-72 w-72 rounded-full bg-[#17A7E8]/20 blur-3xl" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4.75rem)] max-w-[100rem] gap-6 px-5 py-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-0 lg:px-10 lg:py-16 xl:px-14">
          <div className="peakrun-hero-card relative z-10 flex flex-col justify-between rounded-[2rem] border border-[#D7E6F0] bg-white/88 p-6 shadow-2xl shadow-[#0B2A4A]/8 backdrop-blur md:p-9 lg:rounded-r-none lg:border-r-0">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-[0.9rem] bg-[#0B2A4A] px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#8EDBFF]">
                PeakRun Coaching
              </span>
              <span className="rounded-[0.9rem] bg-[#FFF0E8] px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#D95D26]">
                Running plans + races
              </span>
            </div>
            <div className="py-12 lg:py-16">
              <p className="flex items-center gap-3 text-[0.68rem] font-black uppercase tracking-[0.24em] text-[#117DB0]">
                <Zap className="h-4 w-4 text-[#FF7A3D]" /> Morning miles,
                measured progress
              </p>
              <h1 className="peakrun-hero-title mt-7 max-w-4xl text-[clamp(2.35rem,7.5vw,8.8rem)] font-bold uppercase leading-[0.88] tracking-[-0.07em]">
                Train Smarter. Run Stronger. Race Ready.
              </h1>
              <p className="peakrun-hero-desc mt-7 max-w-2xl text-lg leading-8 text-[#56677A] md:text-xl">
                Structured running plans and coaching support for runners who
                want clear workouts, better pacing, and confidence from first
                mile to finish line.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <PeakButton href="#contact">Start Your Plan</PeakButton>
                <PeakButton href="#races" outline>
                  View Race Coaching
                </PeakButton>
              </div>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                "5K To Marathon Plans",
                "Race-Day Strategy",
                "Weekly Coaching Support",
                "Progress Tracking",
              ].map((chip) => (
                <span
                  key={chip}
                  className="peakrun-hero-chip rounded-[1rem] border border-[#D7E6F0] bg-[#F5F8FB] px-4 py-3 text-xs font-black uppercase tracking-[0.12em] text-[#4F6175]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="relative min-h-[42rem] overflow-hidden rounded-[2rem] bg-[#071B33] p-4 text-white shadow-2xl shadow-[#0B2A4A]/15 lg:rounded-l-none lg:p-6">
            <img
              src={heroImage}
              alt="Runner training on a scenic road at sunrise"
              className="absolute inset-0 h-full w-full object-cover opacity-78"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,27,51,.1)_0%,rgba(7,27,51,.42)_45%,rgba(7,27,51,.92)_100%)]" />
            <div className="peakrun-route-line absolute inset-x-12 top-16 h-52 opacity-80" />
            <div className="relative flex h-full min-h-[39rem] flex-col justify-between">
              <div className="ml-auto w-fit rounded-[1.35rem] border border-white/15 bg-white/12 p-4 backdrop-blur">
                <p className="text-[0.56rem] font-black uppercase tracking-[0.18em] text-[#8EDBFF]">
                  Next session
                </p>
                <p className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                  Tempo 6 mi
                </p>
                <p className="mt-1 text-xs font-bold text-white/58">
                  Warmup • 3 x 8 min • Cooldown
                </p>
              </div>
              <div className="grid gap-4 lg:grid-cols-[1fr_16rem] lg:items-end">
                <div>
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#FFB06B]">
                    Route brief / Sunrise block
                  </p>
                  <p className="mt-3 max-w-xl text-4xl font-semibold uppercase leading-[0.9] tracking-[-0.06em] md:text-6xl">
                    A plan you can feel on every mile.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-2 lg:grid-cols-1">
                  {[
                    ["8:42", "Goal pace"],
                    ["28.4", "Miles/week"],
                    ["12", "Long run"],
                  ].map(([value, label]) => (
                    <div
                      key={label}
                      className="peakrun-hero-stat-card rounded-[1.2rem] bg-white p-4 text-[#102033]"
                    >
                      <p className="peakrun-hero-stat-val text-2xl font-semibold tracking-[-0.05em]">
                        {value}
                      </p>
                      <p className="peakrun-hero-stat-label mt-1 text-[0.55rem] font-black uppercase tracking-[0.15em] text-[#6B7886]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="peakrun-section-plans px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[96rem]">
          <PeakHeading
            label="Running plans"
            title="Plans Built Around Your Goal"
            text="Choose the distance, match the training load to your life, and build week-by-week momentum with smarter pacing."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {planCards.map((plan) => (
              <article
                key={plan.title}
                className="peakrun-plan-card group overflow-hidden rounded-[2rem] border border-[#DDE7EF] bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#0B2A4A]/10"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={plan.image}
                    alt={`${plan.title} training`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[0.58rem] font-black uppercase tracking-[0.15em] text-[#117DB0] shadow-sm">
                    {plan.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="peakrun-plan-title text-2xl font-black uppercase tracking-[-0.04em]">
                    {plan.title}
                  </h3>
                  <p className="peakrun-plan-desc mt-3 text-sm leading-7 text-[#627184]">
                    {plan.text}
                  </p>
                  <a
                    href="#contact"
                    className="peakrun-plan-link mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#117DB0]"
                  >
                    Explore Plan <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="coaching"
        className="peakrun-section-coaching bg-[#EAF4FA] px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <PeakHeading
              label="Coaching process"
              title="A Clear Path From First Run To Race Day"
              text="PeakRun keeps the process simple: understand the runner, design the work, adjust the plan, then arrive prepared."
            />
            <img
              src={membershipImage}
              alt="Runner reviewing a coaching plan"
              className="mt-10 rounded-[2rem] object-cover shadow-xl shadow-[#0B2A4A]/10"
            />
          </div>
          <div className="grid gap-4">
            {processSteps.map(([number, title, text]) => (
              <article
                key={title}
                className="peakrun-step-card grid gap-5 rounded-[2rem] border border-white bg-white/75 p-6 shadow-sm backdrop-blur md:grid-cols-[5rem_1fr]"
              >
                <span className="peakrun-step-num grid h-16 w-16 place-items-center rounded-2xl bg-[#0B2A4A] text-xl font-black text-[#8EDBFF]">
                  {number}
                </span>
                <div>
                  <h3 className="peakrun-step-title text-3xl font-black uppercase tracking-[-0.055em]">
                    {title}
                  </h3>
                  <p className="peakrun-step-desc mt-2 text-sm leading-7 text-[#627184]">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="races"
        className="peakrun-section-races bg-[#071B33] px-5 py-24 text-white lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2.5rem]">
            <img
              src={raceImage}
              alt="Race coaching and pacing preparation"
              className="min-h-[38rem] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#071B33] via-transparent to-transparent" />
            <div className="absolute inset-x-6 bottom-6 rounded-3xl bg-white/12 p-5 backdrop-blur">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#8EDBFF]">
                Race block active
              </p>
              <p className="mt-2 text-3xl font-black uppercase tracking-[-0.05em]">
                Pace plan, taper, and race-day notes ready.
              </p>
            </div>
          </div>
          <div>
            <PeakHeading
              label="Race coaching"
              title="Race Preparation With Structure"
              text="Build race-specific training blocks with pacing strategy, long-run progression, recovery weeks, taper guidance, fueling notes, and race-day preparation."
              light
            />
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {raceFeatures.map((feature, index) => (
                <div
                  key={feature}
                  className="rounded-3xl border border-white/12 bg-white/[0.055] p-5"
                >
                  <span className="text-xs font-black text-[#FFB06B]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-5 text-xl font-black uppercase">
                    {feature}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="peakrun-section-results px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <PeakHeading
              label="Progress tracking"
              title="Track The Work. Measure The Progress."
              text="Simple training signals make progress easier to understand: mileage, pace trends, long runs, and consistency."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {progressStats.map(([label, value, note]) => (
                <div
                  key={label}
                  className="peakrun-stat-card rounded-[2rem] border border-[#DDE7EF] bg-white p-6"
                >
                  <BarChart3 className="h-5 w-5 text-[#17A7E8]" />
                  <p className="peakrun-stat-label mt-6 text-[0.6rem] font-black uppercase tracking-[0.18em] text-[#6B7886]">
                    {label}
                  </p>
                  <p className="peakrun-stat-val mt-2 text-4xl font-black tracking-[-0.06em]">
                    {value}
                  </p>
                  <p className="peakrun-stat-label mt-2 text-sm text-[#6B7886]">{note}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="peakrun-progress-box rounded-[2.5rem] border border-[#DDE7EF] bg-white p-5 shadow-2xl shadow-[#0B2A4A]/10">
            <img
              src={progressImage}
              alt="Abstract running progress dashboard"
              className="rounded-[1.8rem] object-cover"
            />
            <div className="peakrun-progress-subcard mt-5 rounded-[1.8rem] bg-[#F5F8FB] p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-black uppercase tracking-[0.16em] text-[#117DB0]">
                  Training load
                </p>
                <p className="text-xs font-black text-[#FF7A3D]">Week 08</p>
              </div>
              <div className="mt-5 grid grid-cols-7 gap-2">
                {[45, 62, 35, 78, 58, 88, 66].map((height, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gradient-to-t from-[#17A7E8] to-[#FFB06B]"
                    style={{ height: `${height}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="peakrun-section-packages bg-[#EAF4FA] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[96rem]">
          <PeakHeading
            label="Packages"
            title="Coaching Packages For The Next Block"
            text="Pick the level of support that matches your goal, schedule, and race timeline."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {packages.map((plan) => (
              <article
                key={plan.name}
                className={`peakrun-pkg-card relative flex flex-col rounded-[2rem] border p-7 shadow-sm ${plan.popular ? "peakrun-pkg-popular border-[#FF7A3D] bg-[#0B2A4A] text-white shadow-2xl shadow-[#0B2A4A]/20 lg:-translate-y-4" : "border-[#DDE7EF] bg-white"}`}
              >
                {plan.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-[#FF7A3D] px-3 py-1.5 text-[0.58rem] font-black uppercase tracking-[0.14em] text-white">
                    Most Popular
                  </span>
                )}
                <p
                  className={`text-[0.62rem] font-black uppercase tracking-[0.18em] ${plan.popular ? "text-[#8EDBFF]" : "text-[#117DB0]"}`}
                >
                  Monthly coaching
                </p>
                <h3 className="mt-6 text-4xl font-black uppercase tracking-[-0.06em]">
                  {plan.name}
                </h3>
                <div className="mt-7 flex items-end gap-2">
                  <span className="text-6xl font-black tracking-[-0.08em]">
                    {plan.price}
                  </span>
                  <span
                    className={`pb-2 text-xs font-bold ${plan.popular ? "text-white/45" : "text-[#6B7886]"}`}
                  >
                    / month
                  </span>
                </div>
                <p
                  className={`mt-5 text-sm leading-7 ${plan.popular ? "text-white/62" : "text-[#627184]"}`}
                >
                  {plan.text}
                </p>
                <div
                  className={`mt-6 grid gap-3 border-t pt-6 ${plan.popular ? "border-white/12" : "border-[#E3EBF2]"}`}
                >
                  {plan.features.map((feature) => (
                    <span
                      key={feature}
                      className="flex items-center gap-2 text-sm font-bold"
                    >
                      <Check
                        className={`h-4 w-4 ${plan.popular ? "text-[#FFB06B]" : "text-[#17A7E8]"}`}
                      />
                      {feature}
                    </span>
                  ))}
                </div>
                <PeakButton
                  href="#contact"
                  outline={!plan.popular}
                  className="mt-8"
                >{`Choose ${plan.name}`}</PeakButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="peakrun-section-testimonials px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[.7fr_1.3fr] lg:items-center">
          <div>
            <img
              src={testimonialImage}
              alt="PeakRun coaching runners after a training session"
              className="rounded-[2.5rem] object-cover shadow-2xl shadow-[#0B2A4A]/10"
            />
          </div>
          <div>
            <PeakHeading
              label="Runner notes"
              title="Confidence Built One Week At A Time"
            />
            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {testimonials.map(([title, quote, name]) => (
                <blockquote
                  key={title}
                  className="peakrun-testi-card rounded-[2rem] border border-[#DDE7EF] bg-white p-6"
                >
                  <Star className="h-5 w-5 fill-[#FFB06B] text-[#FFB06B]" />
                  <h3 className="peakrun-testi-title mt-5 text-xl font-black uppercase tracking-[-0.04em]">
                    {title}
                  </h3>
                  <p className="peakrun-testi-desc mt-4 text-sm leading-7 text-[#627184]">
                    {quote}
                  </p>
                  <footer className="peakrun-testi-name mt-6 text-xs font-black uppercase tracking-[0.14em] text-[#117DB0]">
                    {name}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="peakrun-section-cta relative overflow-hidden bg-[#071B33] px-5 py-28 text-white lg:px-10 lg:py-36"
      >
        <img
          src={ctaImage}
          alt="Runner starting the next training block"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071B33] via-[#071B33]/88 to-[#071B33]/45" />
        <div className="relative mx-auto max-w-[96rem]">
          <div className="max-w-4xl">
            <p className="text-[0.62rem] font-black uppercase tracking-[0.24em] text-[#8EDBFF]">
              Next block starts here
            </p>
            <h2 className="mt-6 text-[clamp(2.35rem,7.2vw,8.6rem)] font-black uppercase leading-[0.86] tracking-[-0.08em]">
              Ready To Start Your Next Training Block?
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
              Build a smarter plan, stay consistent, and arrive at your next
              race prepared.
            </p>
            <PeakButton href="mailto:start@peakrun.example" className="mt-9">
              Start Training
            </PeakButton>
          </div>
        </div>
      </section>

      <footer className="peakrun-footer bg-white px-5 pb-8 pt-14 lg:px-10">
        <div className="mx-auto max-w-[96rem]">
          <div className="peakrun-footer-border flex flex-col justify-between gap-10 border-b border-[#DDE7EF] pb-10 lg:flex-row lg:items-start">
            <div>
              <PeakLogo />
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#627184]">
                Running plans and race coaching for stronger, smarter training.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="peakrun-footer-link text-xs font-black uppercase tracking-[0.13em] text-[#607085] hover:text-[#117DB0]"
                >
                  {label}
                </a>
              ))}
            </div>
            <div>
              <p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#8A98A8]">
                Social
              </p>
              <div className="mt-4 flex gap-2">
                {["IG", "YT", "ST"].map((social) => (
                  <a
                    key={social}
                    href="#contact"
                    aria-label={`${social} social placeholder`}
                    className="peakrun-social-btn grid h-10 w-10 place-items-center rounded-full border border-[#DDE7EF] text-[0.6rem] font-black text-[#607085] hover:border-[#17A7E8] hover:text-[#117DB0]"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <p className="pt-7 text-[0.65rem] text-[#8A98A8]">
            © 2026 PeakRun Coaching. Training plans, coaching packages, and race
            timelines are informational and may vary by runner.
          </p>
        </div>
      </footer>
    </main>
  );
}
