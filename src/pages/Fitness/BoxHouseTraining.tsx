import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  Flame,
  Gauge,
  Menu,
  MoveUpRight,
  Shield,
  Swords,
  Target,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import heroImage from "../../assets/optimized/fitness/boxhouse/hero.webp";
import fundamentalsImage from "../../assets/optimized/fitness/boxhouse/boing-fundamentals.webp";
import heavyBagImage from "../../assets/optimized/fitness/boxhouse/heavy-bag-conditioning.webp";
import footworkImage from "../../assets/optimized/fitness/boxhouse/footwork-speed.webp";
import strengthImage from "../../assets/optimized/fitness/boxhouse/strength-circuit.webp";
import processImage from "../../assets/optimized/fitness/boxhouse/coaching-process.webp";
import facilityImage from "../../assets/optimized/fitness/boxhouse/facility.webp";
import oneOnOneImage from "../../assets/optimized/fitness/boxhouse/one-on-one-coaching.webp";
import smallGroupImage from "../../assets/optimized/fitness/boxhouse/small-group-training.webp";
import conditioningImage from "../../assets/optimized/fitness/boxhouse/conditioning-plans.webp";
import membershipImage from "../../assets/optimized/fitness/boxhouse/membership.webp";
import cultureImage from "../../assets/optimized/fitness/boxhouse/culture.webp";
import abstractImage from "../../assets/optimized/fitness/boxhouse/boxing-abstract-bg.webp";
import ctaImage from "../../assets/optimized/fitness/boxhouse/cta.webp";

const navLinks = [
  ["Classes", "#classes"],
  ["Coaching", "#coaching"],
  ["Facility", "#facility"],
  ["Membership", "#membership"],
  ["Contact", "#contact"],
];

const classes = [
  {
    image: fundamentalsImage,
    title: "Boxing Fundamentals",
    text: "Learn stance, guard, footwork, punches, defense, and clean technique from the ground up.",
    rounds: "03 rounds",
  },
  {
    image: heavyBagImage,
    title: "Heavy Bag Conditioning",
    text: "Build power, rhythm, and endurance through high-energy bag rounds and intervals.",
    rounds: "08 rounds",
  },
  {
    image: footworkImage,
    title: "Footwork & Speed",
    text: "Improve movement, coordination, reaction time, and ring awareness with focused drills.",
    rounds: "05 drills",
  },
  {
    image: strengthImage,
    title: "Strength Circuit",
    text: "Train with bodyweight, dumbbells, kettlebells, and conditioning tools to support athletic performance.",
    rounds: "04 blocks",
  },
];

const processSteps = [
  [
    "01",
    "Learn",
    "Build the basics with proper stance, footwork, breathing, and punch mechanics.",
  ],
  [
    "02",
    "Drill",
    "Practice combinations, movement patterns, defense, and timing with coach guidance.",
  ],
  [
    "03",
    "Condition",
    "Add rounds, circuits, and intervals that build stamina and training discipline.",
  ],
  [
    "04",
    "Progress",
    "Track consistency, sharpen technique, and increase intensity as your confidence grows.",
  ],
];

const facilityFeatures = [
  "Heavy Bag Wall",
  "Coach-Led Rounds",
  "Strength Zone",
  "Focused Atmosphere",
];

const coaching = [
  {
    image: oneOnOneImage,
    title: "1:1 Boxing Coaching",
    text: "Personalized technique work, mitt rounds, movement, and feedback.",
  },
  {
    image: smallGroupImage,
    title: "Small Group Training",
    text: "High-energy coaching with structure, accountability, and focused instruction.",
  },
  {
    image: conditioningImage,
    title: "Conditioning Plans",
    text: "Build stamina and consistency with training blocks designed around your goals.",
  },
];

const memberships = [
  {
    name: "First Round",
    price: "$35",
    text: "For beginners ready to start boxing.",
    features: [
      "1 intro class",
      "Glove setup guidance",
      "Beginner-friendly coaching",
    ],
    popular: false,
  },
  {
    name: "House Training",
    price: "$118",
    text: "For members who want weekly boxing and conditioning.",
    features: ["4 classes/month", "Bag rounds", "Conditioning circuits"],
    popular: true,
  },
  {
    name: "Unlimited Rounds",
    price: "$188",
    text: "For members who want consistent training and full access.",
    features: [
      "Unlimited classes",
      "Priority booking",
      "Monthly coach check-in",
    ],
    popular: false,
  },
];

const culture = [
  "Better boxing technique",
  "Stronger conditioning",
  "More training consistency",
  "Improved movement confidence",
];

const testimonials = [
  [
    "The basics finally clicked",
    "The coaches broke down stance, guard, and combinations in a way that made boxing feel approachable without watering it down.",
    "Andre M.",
  ],
  [
    "My stamina is catching up",
    "The bag rounds are tough but structured. I can feel myself lasting longer each week because the workouts have a clear rhythm.",
    "Jules R.",
  ],
  [
    "Focused from start to finish",
    "Every class has coaching, rounds, and a purpose. I like knowing exactly what I am working on when I step in.",
    "Sam T.",
  ],
];

function BoxButton({
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
      className={`group inline-flex min-h-12 items-center justify-center gap-3 px-6 text-xs font-black uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-0.5 ${
        outline
          ? "boxhouse-btn-outline border border-white/20 bg-white/[0.035] text-white hover:border-[#E24835] hover:text-[#F7B04A]"
          : "boxhouse-btn-solid bg-[#E24835] text-white shadow-[7px_7px_0_rgba(247,176,74,.24)] hover:bg-[#f05b44]"
      } ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function BoxHeading({
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
        className={`boxhouse-heading-label inline-flex items-center gap-2 text-[0.62rem] font-black uppercase tracking-[0.24em] ${
          light ? "boxhouse-label-light text-[#F7B04A]" : "boxhouse-label-dark text-[#B13228]"
        }`}
      >
        <Flame className="h-4 w-4" />
        {label}
      </p>
      <h2
        className={`boxhouse-heading-title mt-5 text-[clamp(2.15rem,5.5vw,6.8rem)] font-semibold uppercase leading-[0.88] tracking-[-0.075em] ${
          light ? "boxhouse-title-light text-[#F8EFE2]" : "boxhouse-title-dark text-[#171717]"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`boxhouse-heading-text mt-6 max-w-2xl text-base leading-8 md:text-lg ${
            light ? "boxhouse-text-light text-white/58" : "boxhouse-text-dark text-[#5E5A55]"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function BoxLogo() {
  return (
    <a
      href="#home"
      className="boxhouse-logo flex items-center gap-3 text-white"
      aria-label="BoxHouse Training home"
    >
      <span className="boxhouse-logo-box relative grid h-11 w-11 place-items-center bg-[#E24835] text-white">
        <Swords className="h-5 w-5" />
        <span className="boxhouse-logo-pip absolute -bottom-1 -right-1 h-2.5 w-2.5 bg-[#F7B04A]" />
      </span>
      <span>
        <strong className="boxhouse-logo-title block text-base font-black uppercase leading-none tracking-[-0.03em]">
          BoxHouse
        </strong>
        <span className="boxhouse-logo-sub mt-1 block text-[0.52rem] font-black uppercase tracking-[0.24em] text-white/42">
          Training
        </span>
      </span>
    </a>
  );
}

export function BoxHouseTraining() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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
    const sectionIds = ["classes", "coaching", "facility", "membership", "contact"];
    let rafId: number;

    const handleScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        const scrollPosition = window.scrollY + 140;
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
          setActiveSection("");
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
    <main className="boxhouse-site w-full max-w-full overflow-x-hidden bg-[#101112] text-[#F8EFE2] selection:bg-[#E24835] selection:text-white">
      <style>{`
        /* ============================================================ */
        /* BOXHOUSE TRAINING THEME SYSTEM                               */
        /* ============================================================ */
        .boxhouse-site {
          --bh-accent: #E24835;
          --bh-accent-hover: #f05b44;
          --bh-accent-sec: #F7B04A;
          --bh-accent-glow: rgba(247, 176, 74, 0.24);
          --bh-contrast: #ffffff;

          --bh-bg-base: #101112;
          --bh-bg-deep: #0A0B0C;
          --bh-bg-card: #191B1D;
          --bh-bg-card-alt: #151719;
          --bh-bg-surface: #0D0E0F;
          --bh-bg-footer: #070808;

          --bh-canvas-bg: #F8EFE2;
          --bh-canvas-text: #171717;
          --bh-canvas-muted: #5E5A55;
          --bh-canvas-border: #CFC5B7;
          --bh-canvas-card: #ffffff;

          --bh-text-primary: #F8EFE2;
          --bh-text-muted: rgba(255, 255, 255, 0.65);
          --bh-text-dim: rgba(255, 255, 255, 0.45);
          --bh-border: rgba(255, 255, 255, 0.12);
          --bh-border-strong: rgba(255, 255, 255, 0.18);

          --bh-nav-bg: rgba(10, 11, 12, 0.95);
          --bh-nav-text: rgba(255, 255, 255, 0.6);
          --bh-nav-text-hover: #ffffff;
        }

        /* ------------------------------------------------------------ */
        /* DYNAMIC THEME PRESET ADAPTATION                              */
        /* ------------------------------------------------------------ */
        [data-theme-preset]:not([data-theme-preset="original"]) .boxhouse-site,
        [data-theme-active="true"]:not([data-theme-preset="original"]) .boxhouse-site {
          --bh-accent: var(--theme-accent-primary, #E24835) !important;
          --bh-accent-hover: var(--theme-accent-primary-hover, #f05b44) !important;
          --bh-accent-sec: var(--theme-accent-secondary, #F7B04A) !important;
          --bh-accent-glow: var(--theme-accent-glow, rgba(247, 176, 74, 0.24)) !important;
          --bh-contrast: var(--theme-accent-contrast, #ffffff) !important;
        }

        /* Solid buttons: maintain button shape, never become plain blocks */
        .boxhouse-site .boxhouse-btn-solid {
          background-color: var(--bh-accent) !important;
          color: var(--bh-contrast) !important;
          box-shadow: 7px 7px 0 var(--bh-accent-glow) !important;
        }
        .boxhouse-site .boxhouse-btn-solid:hover {
          background-color: var(--bh-accent-hover) !important;
          color: var(--bh-contrast) !important;
        }

        /* Outline buttons */
        .boxhouse-site .boxhouse-btn-outline {
          border-color: rgba(255, 255, 255, 0.22);
          background-color: rgba(255, 255, 255, 0.04);
          color: var(--bh-text-primary);
        }
        .boxhouse-site .boxhouse-btn-outline:hover {
          border-color: var(--bh-accent) !important;
          color: var(--bh-accent-sec) !important;
          background-color: rgba(255, 255, 255, 0.08);
        }

        /* Active nav pills */
        .boxhouse-site .boxhouse-nav-active {
          background-color: var(--bh-accent) !important;
          color: var(--bh-contrast) !important;
        }

        /* Brand logo */
        .boxhouse-site .boxhouse-logo-box {
          background-color: var(--bh-accent) !important;
          color: var(--bh-contrast) !important;
        }
        .boxhouse-site .boxhouse-logo-pip {
          background-color: var(--bh-accent-sec) !important;
        }

        /* Accent text and badges */
        .boxhouse-site .boxhouse-accent-text {
          color: var(--bh-accent) !important;
        }
        .boxhouse-site .boxhouse-accent-sec-text {
          color: var(--bh-accent-sec) !important;
        }
        .boxhouse-site .boxhouse-accent-sec-tag {
          background-color: var(--bh-accent-sec) !important;
        }
        .boxhouse-site .boxhouse-hero-accent-block {
          background-color: var(--bh-accent) !important;
        }
        .boxhouse-site .boxhouse-badge-accent {
          background-color: var(--bh-accent) !important;
          color: var(--bh-contrast) !important;
        }
        .boxhouse-site .boxhouse-arrow-accent {
          background-color: var(--bh-accent) !important;
          color: var(--bh-contrast) !important;
        }

        /* Class and testimonial numbering in presets */
        [data-theme-preset]:not([data-theme-preset="original"]) .boxhouse-site .boxhouse-class-num,
        [data-theme-active="true"]:not([data-theme-preset="original"]) .boxhouse-site .boxhouse-class-num,
        [data-theme-preset]:not([data-theme-preset="original"]) .boxhouse-site .boxhouse-class-rounds,
        [data-theme-active="true"]:not([data-theme-preset="original"]) .boxhouse-site .boxhouse-class-rounds,
        [data-theme-preset]:not([data-theme-preset="original"]) .boxhouse-site .boxhouse-testimonial-num,
        [data-theme-active="true"]:not([data-theme-preset="original"]) .boxhouse-site .boxhouse-testimonial-num,
        [data-theme-preset]:not([data-theme-preset="original"]) .boxhouse-site .boxhouse-testimonial-footer,
        [data-theme-active="true"]:not([data-theme-preset="original"]) .boxhouse-site .boxhouse-testimonial-footer {
          color: var(--bh-accent) !important;
        }

        [data-theme-preset]:not([data-theme-preset="original"]) .boxhouse-site .boxhouse-label-dark,
        [data-theme-active="true"]:not([data-theme-preset="original"]) .boxhouse-site .boxhouse-label-dark {
          color: var(--bh-accent) !important;
        }
        [data-theme-preset]:not([data-theme-preset="original"]) .boxhouse-site .boxhouse-label-light,
        [data-theme-active="true"]:not([data-theme-preset="original"]) .boxhouse-site .boxhouse-label-light {
          color: var(--bh-accent-sec) !important;
        }

        /* Popular plan preset recoloring */
        .boxhouse-site .boxhouse-plan-popular {
          background-color: var(--bh-accent) !important;
          border-color: var(--bh-accent) !important;
          color: var(--bh-contrast) !important;
          box-shadow: 12px 12px 0 var(--bh-accent-glow) !important;
        }

        .boxhouse-site .boxhouse-class-arrow:hover {
          background-color: var(--bh-accent) !important;
          color: var(--bh-contrast) !important;
        }

        /* ------------------------------------------------------------ */
        /* DARK MOOD OVERRIDES                                          */
        /* ------------------------------------------------------------ */
        html.dark .boxhouse-site,
        body.dark .boxhouse-site,
        [data-theme-mood="dark"] .boxhouse-site,
        :root[data-theme-mood="dark"] .boxhouse-site,
        :root[data-theme-active="true"][data-theme-mood="dark"] .boxhouse-site,
        :root.dark .boxhouse-site {
          --bh-canvas-bg: #0E1012;
          --bh-canvas-text: #F8EFE2;
          --bh-canvas-muted: rgba(255, 255, 255, 0.65);
          --bh-canvas-border: rgba(255, 255, 255, 0.14);
          --bh-canvas-card: #151719;
        }

        html.dark .boxhouse-site .boxhouse-canvas-section,
        [data-theme-mood="dark"] .boxhouse-site .boxhouse-canvas-section,
        :root.dark .boxhouse-site .boxhouse-canvas-section {
          background-color: var(--bh-canvas-bg) !important;
          color: var(--bh-canvas-text) !important;
        }

        html.dark .boxhouse-site .boxhouse-classes-table,
        [data-theme-mood="dark"] .boxhouse-site .boxhouse-classes-table,
        :root.dark .boxhouse-site .boxhouse-classes-table {
          border-color: rgba(255, 255, 255, 0.2) !important;
        }

        html.dark .boxhouse-site .boxhouse-class-item,
        [data-theme-mood="dark"] .boxhouse-site .boxhouse-class-item,
        :root.dark .boxhouse-site .boxhouse-class-item {
          border-color: rgba(255, 255, 255, 0.12) !important;
        }

        html.dark .boxhouse-site .boxhouse-class-title,
        [data-theme-mood="dark"] .boxhouse-site .boxhouse-class-title,
        :root.dark .boxhouse-site .boxhouse-class-title {
          color: #F8EFE2 !important;
        }

        html.dark .boxhouse-site .boxhouse-class-desc,
        [data-theme-mood="dark"] .boxhouse-site .boxhouse-class-desc,
        :root.dark .boxhouse-site .boxhouse-class-desc {
          color: rgba(255, 255, 255, 0.65) !important;
        }

        html.dark .boxhouse-site .boxhouse-class-arrow,
        [data-theme-mood="dark"] .boxhouse-site .boxhouse-class-arrow,
        :root.dark .boxhouse-site .boxhouse-class-arrow {
          border-color: rgba(255, 255, 255, 0.25) !important;
          color: #F8EFE2 !important;
        }

        html.dark .boxhouse-site .boxhouse-canvas-card,
        [data-theme-mood="dark"] .boxhouse-site .boxhouse-canvas-card,
        :root.dark .boxhouse-site .boxhouse-canvas-card {
          background-color: var(--bh-canvas-card) !important;
          border-color: var(--bh-canvas-border) !important;
          color: var(--bh-canvas-text) !important;
        }

        html.dark .boxhouse-site .boxhouse-canvas-title,
        [data-theme-mood="dark"] .boxhouse-site .boxhouse-canvas-title,
        :root.dark .boxhouse-site .boxhouse-canvas-title {
          color: #F8EFE2 !important;
        }

        html.dark .boxhouse-site .boxhouse-canvas-text,
        [data-theme-mood="dark"] .boxhouse-site .boxhouse-canvas-text,
        :root.dark .boxhouse-site .boxhouse-canvas-text {
          color: rgba(255, 255, 255, 0.65) !important;
        }

        html.dark .boxhouse-site .boxhouse-testimonial-footer,
        [data-theme-mood="dark"] .boxhouse-site .boxhouse-testimonial-footer,
        :root.dark .boxhouse-site .boxhouse-testimonial-footer {
          border-top-color: rgba(255, 255, 255, 0.12) !important;
        }

        html.dark .boxhouse-site .boxhouse-title-dark,
        [data-theme-mood="dark"] .boxhouse-site .boxhouse-title-dark,
        :root.dark .boxhouse-site .boxhouse-title-dark {
          color: #F8EFE2 !important;
        }

        html.dark .boxhouse-site .boxhouse-text-dark,
        [data-theme-mood="dark"] .boxhouse-site .boxhouse-text-dark,
        :root.dark .boxhouse-site .boxhouse-text-dark {
          color: rgba(255, 255, 255, 0.65) !important;
        }

        /* ------------------------------------------------------------ */
        /* LIGHT MOOD OVERRIDES                                         */
        /* ------------------------------------------------------------ */
        html.light .boxhouse-site,
        body.light .boxhouse-site,
        [data-theme-mood="light"] .boxhouse-site,
        :root[data-theme-mood="light"] .boxhouse-site,
        :root[data-theme-active="true"][data-theme-mood="light"] .boxhouse-site,
        :root.light .boxhouse-site {
          --bh-bg-base: var(--theme-bg-base, #FAF7F2);
          --bh-bg-deep: var(--theme-bg-base, #F5EFE6);
          --bh-bg-card: var(--theme-bg-card, #ffffff);
          --bh-bg-card-alt: var(--theme-bg-surface, #F0EAE0);
          --bh-bg-surface: var(--theme-bg-surface, #ECE5DA);
          --bh-bg-footer: var(--theme-bg-surface, #E5DEC6);

          --bh-canvas-bg: var(--theme-bg-base, #FAF7F2);
          --bh-canvas-text: #171717;
          --bh-canvas-muted: #5E5A55;
          --bh-canvas-border: rgba(0, 0, 0, 0.12);
          --bh-canvas-card: #ffffff;

          --bh-text-primary: #171717;
          --bh-text-muted: #5E5A55;
          --bh-text-dim: #7C766F;
          --bh-border: rgba(0, 0, 0, 0.1);
          --bh-border-strong: rgba(0, 0, 0, 0.18);

          --bh-nav-bg: rgba(250, 247, 242, 0.95);
          --bh-nav-text: rgba(23, 23, 23, 0.68);
          --bh-nav-text-hover: #171717;

          background-color: var(--bh-bg-base) !important;
          color: var(--bh-text-primary) !important;
        }

        /* Light mode: Header & Navigation */
        html.light .boxhouse-site .boxhouse-header,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-header,
        :root.light .boxhouse-site .boxhouse-header {
          background-color: var(--bh-nav-bg) !important;
          border-bottom-color: var(--bh-border) !important;
          color: var(--bh-text-primary) !important;
        }

        html.light .boxhouse-site .boxhouse-nav-link,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-nav-link,
        :root.light .boxhouse-site .boxhouse-nav-link {
          color: var(--bh-nav-text) !important;
        }
        html.light .boxhouse-site .boxhouse-nav-link:hover,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-nav-link:hover,
        :root.light .boxhouse-site .boxhouse-nav-link:hover {
          color: var(--bh-nav-text-hover) !important;
          background-color: rgba(0, 0, 0, 0.05) !important;
        }

        html.light .boxhouse-site .boxhouse-logo-title,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-logo-title,
        :root.light .boxhouse-site .boxhouse-logo-title {
          color: #171717 !important;
        }
        html.light .boxhouse-site .boxhouse-logo-sub,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-logo-sub,
        :root.light .boxhouse-site .boxhouse-logo-sub {
          color: #7C766F !important;
        }

        html.light .boxhouse-site .boxhouse-menu-toggle,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-menu-toggle,
        :root.light .boxhouse-site .boxhouse-menu-toggle {
          border-color: rgba(0, 0, 0, 0.2) !important;
          color: #171717 !important;
        }

        html.light .boxhouse-site .boxhouse-mobile-nav,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-mobile-nav,
        :root.light .boxhouse-site .boxhouse-mobile-nav {
          background-color: #FAF7F2 !important;
          border-bottom-color: rgba(0, 0, 0, 0.12) !important;
        }
        html.light .boxhouse-site .boxhouse-mobile-link,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-mobile-link,
        :root.light .boxhouse-site .boxhouse-mobile-link {
          color: #171717 !important;
        }

        /* Light mode: Hero Section */
        html.light .boxhouse-site .boxhouse-hero-section,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-hero-section,
        :root.light .boxhouse-site .boxhouse-hero-section {
          background-color: #FAF7F2 !important;
        }

        html.light .boxhouse-site .boxhouse-hero-left-grad,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-hero-left-grad,
        :root.light .boxhouse-site .boxhouse-hero-left-grad {
          background: linear-gradient(135deg, #FAF7F2 0%, #F0EAE0 60%, #E8DFC8 100%) !important;
        }

        html.light .boxhouse-site .boxhouse-hero-scrim,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-hero-scrim,
        :root.light .boxhouse-site .boxhouse-hero-scrim {
          background: linear-gradient(90deg, rgba(250,247,242,0.96) 0%, rgba(250,247,242,0.76) 48%, rgba(250,247,242,0.15) 100%) !important;
        }

        html.light .boxhouse-site .boxhouse-hero-title,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-hero-title,
        :root.light .boxhouse-site .boxhouse-hero-title {
          color: #171717 !important;
        }

        html.light .boxhouse-site .boxhouse-hero-desc,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-hero-desc,
        :root.light .boxhouse-site .boxhouse-hero-desc {
          color: #5E5A55 !important;
        }

        html.light .boxhouse-site .boxhouse-hero-subbadge,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-hero-subbadge,
        :root.light .boxhouse-site .boxhouse-hero-subbadge {
          border-color: rgba(0, 0, 0, 0.12) !important;
          background-color: rgba(0, 0, 0, 0.04) !important;
          color: #3A3530 !important;
        }

        html.light .boxhouse-site .boxhouse-hero-frame,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-hero-frame,
        :root.light .boxhouse-site .boxhouse-hero-frame {
          border-color: #171717 !important;
        }

        html.light .boxhouse-site .boxhouse-hero-tag,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-hero-tag,
        :root.light .boxhouse-site .boxhouse-hero-tag {
          background-color: #171717 !important;
          color: #ffffff !important;
        }

        html.light .boxhouse-site .boxhouse-chips-strip,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-chips-strip,
        :root.light .boxhouse-site .boxhouse-chips-strip {
          background-color: #ECE5DA !important;
          border-color: rgba(0, 0, 0, 0.1) !important;
        }

        html.light .boxhouse-site .boxhouse-chip-item,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-chip-item,
        :root.light .boxhouse-site .boxhouse-chip-item {
          background-color: #FAF7F2 !important;
          color: #3A3530 !important;
        }

        /* Light mode: Outline Button */
        html.light .boxhouse-site .boxhouse-btn-outline,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-btn-outline,
        :root.light .boxhouse-site .boxhouse-btn-outline {
          border-color: rgba(0, 0, 0, 0.22) !important;
          background-color: rgba(0, 0, 0, 0.035) !important;
          color: #171717 !important;
        }
        html.light .boxhouse-site .boxhouse-btn-outline:hover,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-btn-outline:hover,
        :root.light .boxhouse-site .boxhouse-btn-outline:hover {
          border-color: var(--bh-accent) !important;
          color: var(--bh-accent) !important;
          background-color: rgba(0, 0, 0, 0.07) !important;
        }

        /* Light mode: Headings and Dark Sections */
        html.light .boxhouse-site .boxhouse-dark-section,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-dark-section,
        :root.light .boxhouse-site .boxhouse-dark-section {
          background-color: var(--bh-bg-base) !important;
          color: var(--bh-text-primary) !important;
        }

        html.light .boxhouse-site .boxhouse-title-light,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-title-light,
        :root.light .boxhouse-site .boxhouse-title-light {
          color: #171717 !important;
        }

        html.light .boxhouse-site .boxhouse-text-light,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-text-light,
        :root.light .boxhouse-site .boxhouse-text-light {
          color: #5E5A55 !important;
        }

        /* Step & Facility Cards in light mode */
        html.light .boxhouse-site .boxhouse-dark-card,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-dark-card,
        :root.light .boxhouse-site .boxhouse-dark-card {
          background-color: #ffffff !important;
          border-color: #E2DAD0 !important;
          color: #171717 !important;
        }

        html.light .boxhouse-site .boxhouse-dark-card-title,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-dark-card-title,
        :root.light .boxhouse-site .boxhouse-dark-card-title {
          color: #171717 !important;
        }

        html.light .boxhouse-site .boxhouse-dark-card-desc,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-dark-card-desc,
        :root.light .boxhouse-site .boxhouse-dark-card-desc {
          color: #5E5A55 !important;
        }

        /* Membership in Light Mode */
        html.light .boxhouse-site .boxhouse-plan-normal,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-plan-normal,
        :root.light .boxhouse-site .boxhouse-plan-normal {
          background-color: #ffffff !important;
          border-color: #E2DAD0 !important;
          color: #171717 !important;
        }

        html.light .boxhouse-site .boxhouse-plan-title,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-plan-title,
        :root.light .boxhouse-site .boxhouse-plan-title {
          color: #171717 !important;
        }

        html.light .boxhouse-site .boxhouse-plan-price,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-plan-price,
        :root.light .boxhouse-site .boxhouse-plan-price {
          color: #171717 !important;
        }

        html.light .boxhouse-site .boxhouse-plan-period,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-plan-period,
        :root.light .boxhouse-site .boxhouse-plan-period {
          color: #7C766F !important;
        }

        html.light .boxhouse-site .boxhouse-plan-desc,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-plan-desc,
        :root.light .boxhouse-site .boxhouse-plan-desc {
          color: #5E5A55 !important;
        }

        html.light .boxhouse-site .boxhouse-plan-features,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-plan-features,
        :root.light .boxhouse-site .boxhouse-plan-features {
          border-top-color: #E2DAD0 !important;
        }

        html.light .boxhouse-site .boxhouse-plan-feature-item,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-plan-feature-item,
        :root.light .boxhouse-site .boxhouse-plan-feature-item {
          color: #171717 !important;
        }

        /* In popular plan, maintain contrast */
        .boxhouse-site .boxhouse-plan-popular .boxhouse-plan-title,
        .boxhouse-site .boxhouse-plan-popular .boxhouse-plan-price,
        .boxhouse-site .boxhouse-plan-popular .boxhouse-plan-feature-item {
          color: #ffffff !important;
        }

        /* Culture grid in light mode */
        html.light .boxhouse-site .boxhouse-culture-grid,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-culture-grid,
        :root.light .boxhouse-site .boxhouse-culture-grid {
          border-color: #E2DAD0 !important;
        }

        html.light .boxhouse-site .boxhouse-culture-cell,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-culture-cell,
        :root.light .boxhouse-site .boxhouse-culture-cell {
          background-color: #ffffff !important;
          border-color: #E2DAD0 !important;
        }

        html.light .boxhouse-site .boxhouse-culture-title,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-culture-title,
        :root.light .boxhouse-site .boxhouse-culture-title {
          color: #171717 !important;
        }

        /* Footer in light mode */
        html.light .boxhouse-site .boxhouse-footer,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-footer,
        :root.light .boxhouse-site .boxhouse-footer {
          background-color: #ECE5DA !important;
          border-top-color: rgba(0, 0, 0, 0.1) !important;
          color: #171717 !important;
        }

        html.light .boxhouse-site .boxhouse-footer > div > div,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-footer > div > div,
        :root.light .boxhouse-site .boxhouse-footer > div > div {
          border-bottom-color: rgba(0, 0, 0, 0.1) !important;
        }

        html.light .boxhouse-site .boxhouse-footer-desc,
        html.light .boxhouse-site .boxhouse-footer-link,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-footer-desc,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-footer-link,
        :root.light .boxhouse-site .boxhouse-footer-desc,
        :root.light .boxhouse-site .boxhouse-footer-link {
          color: #5E5A55 !important;
        }

        html.light .boxhouse-site .boxhouse-footer-link:hover,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-footer-link:hover,
        :root.light .boxhouse-site .boxhouse-footer-link:hover {
          color: var(--bh-accent) !important;
        }

        html.light .boxhouse-site .boxhouse-social-btn,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-social-btn,
        :root.light .boxhouse-site .boxhouse-social-btn {
          border-color: rgba(0, 0, 0, 0.18) !important;
          color: #171717 !important;
        }
        html.light .boxhouse-site .boxhouse-social-btn:hover,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-social-btn:hover,
        :root.light .boxhouse-site .boxhouse-social-btn:hover {
          border-color: var(--bh-accent) !important;
          color: var(--bh-accent) !important;
        }

        html.light .boxhouse-site .boxhouse-copyright,
        [data-theme-mood="light"] .boxhouse-site .boxhouse-copyright,
        :root.light .boxhouse-site .boxhouse-copyright {
          color: #7C766F !important;
        }
      `}</style>

      {/* Header */}
      <header className="boxhouse-header fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0A0B0C]/95 text-white backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex h-[4.75rem] max-w-[98rem] items-center justify-between px-5 lg:px-10">
          <BoxLogo />
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="BoxHouse navigation"
          >
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  className={`boxhouse-nav-link px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.14em] transition ${
                    active
                      ? "boxhouse-nav-active bg-[#E24835] text-white"
                      : "text-white/48 hover:bg-white/[0.06] hover:text-white"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>
          <div className="hidden lg:block">
            <BoxButton href="#contact">
              Start Training
            </BoxButton>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            className="boxhouse-menu-toggle grid h-10 w-10 place-items-center border border-white/16 lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 top-[4.75rem] z-40 bg-black/75 backdrop-blur-xs lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <nav
              id="mobile-navigation"
              className="boxhouse-mobile-nav fixed inset-x-0 top-[4.75rem] z-50 max-h-[calc(100vh-4.75rem)] overflow-y-auto border-b border-white/10 bg-[#0A0B0C]/98 p-6 shadow-2xl backdrop-blur-2xl lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map(([label, href]) => {
                  const active = activeSection === href.slice(1);
                  return (
                    <a
                      key={label}
                      href={href}
                      aria-current={active ? "location" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`boxhouse-mobile-link flex items-center justify-between rounded-none px-4 py-3.5 text-sm font-black uppercase tracking-[0.14em] transition ${
                        active
                          ? "boxhouse-nav-active bg-[#E24835] text-white"
                          : "text-white/65 hover:bg-white/[0.06] hover:text-white"
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

      {/* Hero Section */}
      <section
        id="home"
        className="boxhouse-hero-section relative isolate overflow-hidden bg-[#0A0B0C] pt-[4.75rem] transition-colors duration-300"
      >
        <img
          src={abstractImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.14] mix-blend-screen"
        />
        <div className="boxhouse-hero-left-grad absolute left-0 top-0 h-full w-2/3 bg-[linear-gradient(135deg,#0A0B0C_0%,#17191B_58%,#3A1110_100%)]" />
        <div className="boxhouse-hero-accent-block absolute right-0 top-0 h-full w-1/2 bg-[#E24835]" />
        <div className="boxhouse-hero-scrim absolute inset-0 bg-[linear-gradient(90deg,rgba(10,11,12,.96)_0%,rgba(10,11,12,.74)_48%,rgba(10,11,12,.2)_100%)]" />
        <div className="boxhouse-ropes absolute inset-x-[-6%] bottom-24 h-28 opacity-65" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4.75rem)] max-w-[100rem] gap-8 px-5 py-12 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:px-10 lg:py-16">
          <div>
            <div className="flex flex-wrap gap-3">
              <span className="boxhouse-badge-accent bg-[#E24835] px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.2em] text-white">
                Red corner
              </span>
              <span className="boxhouse-hero-subbadge border border-white/16 bg-white/[0.055] px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.2em] text-white/58">
                Boxing and conditioning
              </span>
            </div>
            <h1 className="boxhouse-hero-title mt-8 max-w-6xl text-[clamp(2.4rem,10.5vw,12.5rem)] font-semibold uppercase leading-[0.78] tracking-[-0.09em]">
              Hit Hard. Move Fast. Train With Purpose.
            </h1>
            <p className="boxhouse-hero-desc mt-8 max-w-2xl text-lg leading-8 text-white/66 md:text-xl">
              Boxing technique, conditioning circuits, and coach-led training
              built to sharpen your skills, build stamina, and keep every
              session focused.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <BoxButton href="#contact">Book Your First Class</BoxButton>
              <BoxButton href="#classes" outline>
                View Training Options
              </BoxButton>
            </div>
          </div>
          <div className="relative">
            <div className="boxhouse-hero-frame relative min-h-[44rem] overflow-hidden border-[10px] border-[#F8EFE2] bg-[#17191B] shadow-2xl shadow-black/50">
              <img
                src={heroImage}
                alt="BoxHouse athlete hitting a heavy bag"
                className="absolute inset-0 h-full w-full object-cover grayscale-[12%] contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C]/90 via-transparent to-[#0A0B0C]/10" />
              <div className="boxhouse-hero-tag absolute left-0 top-0 bg-[#F8EFE2] px-5 py-3 text-[0.6rem] font-black uppercase tracking-[0.18em] text-[#171717]">
                BoxHouse / Round 01
              </div>
              <div className="absolute bottom-5 left-5 right-5 grid gap-3 bg-[#0A0B0C]/88 p-5 backdrop-blur sm:grid-cols-3">
                <div>
                  <p className="boxhouse-accent-sec-text text-5xl font-black tracking-[-0.08em] text-[#F7B04A]">
                    03:00
                  </p>
                  <p className="text-[0.55rem] font-black uppercase tracking-[0.16em] text-white/42">
                    Round timer
                  </p>
                </div>
                {[
                  ["06", "Bag lanes"],
                  ["04", "Skill blocks"],
                ].map(([value, label]) => (
                  <div key={label} className="border-l border-white/12 pl-4">
                    <p className="text-4xl font-black tracking-[-0.08em] text-white">
                      {value}
                    </p>
                    <p className="text-[0.55rem] font-black uppercase tracking-[0.16em] text-white/42">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="boxhouse-accent-sec-tag absolute -left-5 top-1/2 hidden -translate-y-1/2 bg-[#F7B04A] px-3 py-8 text-[0.58rem] font-black uppercase tracking-[0.16em] text-[#171717] [writing-mode:vertical-rl] md:block">
              Coach-led rounds
            </div>
          </div>
        </div>
        <div className="boxhouse-chips-strip relative border-y border-white/12 bg-[#101112]">
          <div className="mx-auto grid max-w-[100rem] gap-px bg-white/12 sm:grid-cols-4">
            {[
              "Boxing Technique",
              "Heavy Bag Classes",
              "Conditioning Circuits",
              "Coach-Led Training",
            ].map((chip) => (
              <span
                key={chip}
                className="boxhouse-chip-item bg-[#101112] px-5 py-5 text-center text-xs font-black uppercase tracking-[0.14em] text-white/58"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section
        id="classes"
        className="boxhouse-canvas-section bg-[#F8EFE2] px-5 py-24 text-[#171717] transition-colors duration-300 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[98rem]">
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
            <BoxHeading
              label="Training classes"
              title="Boxing And Conditioning Built For Every Level"
              text="Step into structured rounds that balance boxing technique, conditioning pressure, and coach-led intensity."
            />
            <div className="boxhouse-classes-table border-y-2 border-[#171717]">
              {classes.map((item, index) => (
                <article
                  key={item.title}
                  className="boxhouse-class-item group grid gap-5 border-b border-[#CFC5B7] py-5 last:border-b-0 md:grid-cols-[4rem_12rem_1fr_auto] md:items-center"
                >
                  <span className="boxhouse-class-num text-3xl font-black text-[#B13228]">
                    0{index + 1}
                  </span>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#171717]">
                    <img
                      src={item.image}
                      alt={`${item.title} training`}
                      className="h-full w-full object-cover grayscale-[20%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <div>
                    <p className="boxhouse-class-rounds text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#B13228]">
                      {item.rounds}
                    </p>
                    <h3 className="boxhouse-class-title mt-2 text-3xl font-black uppercase leading-none tracking-[-0.06em]">
                      {item.title}
                    </h3>
                    <p className="boxhouse-class-desc mt-3 text-sm leading-7 text-[#5E5A55]">
                      {item.text}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    aria-label={`Explore ${item.title}`}
                    className="boxhouse-class-arrow grid h-12 w-12 place-items-center border border-[#171717] transition group-hover:bg-[#E24835] group-hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="boxhouse-dark-section relative bg-[#151719] px-5 py-24 transition-colors duration-300 lg:px-10 lg:py-32">
        <img
          src={processImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08] grayscale"
        />
        <div className="relative mx-auto grid max-w-[98rem] gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
          <BoxHeading
            label="Coaching process"
            title="Train With Structure, Not Guesswork"
            text="Every round has a job. Learn the mechanics, drill with intent, condition under pressure, then progress with clearer skills."
            light
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {processSteps.map(([number, title, text]) => (
              <article
                key={title}
                className="boxhouse-dark-card border border-white/12 bg-white/[0.045] p-6 transition-colors duration-300"
              >
                <span className="boxhouse-accent-text text-3xl font-black text-[#E24835]">
                  {number}
                </span>
                <h3 className="boxhouse-dark-card-title mt-8 text-2xl font-black uppercase tracking-[-0.055em] text-white">
                  {title}
                </h3>
                <p className="boxhouse-dark-card-desc mt-3 text-sm leading-7 text-white/50">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Facility Section */}
      <section
        id="facility"
        className="boxhouse-dark-section bg-[#0D0E0F] px-5 py-24 transition-colors duration-300 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-[98rem] gap-12 lg:grid-cols-[1.12fr_.88fr] lg:items-center">
          <div className="relative min-h-[42rem] overflow-hidden">
            <img
              src={facilityImage}
              alt="BoxHouse heavy bag wall and training space"
              className="absolute inset-0 h-full w-full object-cover grayscale-[25%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E0F] via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 right-7 border-t border-white/18 pt-6">
              <p className="boxhouse-accent-sec-text text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#F7B04A]">
                Facility floor
              </p>
              <p className="mt-2 text-3xl font-black uppercase leading-[0.88] tracking-[-0.075em] text-white sm:text-4xl lg:text-5xl">
                Heavy bags. Strength tools. No wasted space.
              </p>
            </div>
          </div>
          <div>
            <BoxHeading
              label="Facility"
              title="A Boxing House Built For Work"
              text="Heavy bags, a ring-inspired training zone, mitt work areas, conditioning equipment, strength tools, and a clean focused floor for serious sessions."
              light
            />
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {facilityFeatures.map((feature, index) => (
                <div
                  key={feature}
                  className="boxhouse-dark-card border border-white/12 bg-[#191B1D] p-5 transition-colors duration-300"
                >
                  <span className="boxhouse-accent-text text-xs font-black text-[#E24835]">
                    0{index + 1}
                  </span>
                  <h3 className="boxhouse-dark-card-title mt-10 text-lg font-black uppercase text-white">
                    {feature}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Section */}
      <section
        id="coaching"
        className="boxhouse-canvas-section bg-[#F8EFE2] px-5 py-24 text-[#171717] transition-colors duration-300 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[98rem]">
          <BoxHeading
            label="Coaching"
            title="Coaching That Sharpens Every Round"
            text="Technique, accountability, and conditioning support for members who want more than random sweat."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {coaching.map((item) => (
              <article
                key={item.title}
                className="boxhouse-card boxhouse-canvas-card group border border-[#CFC5B7] bg-white p-4 transition-colors duration-300"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <MoveUpRight className="boxhouse-arrow-accent absolute right-4 top-4 h-8 w-8 bg-[#E24835] p-2 text-white" />
                </div>
                <div className="p-4">
                  <h3 className="boxhouse-canvas-title text-3xl font-black uppercase leading-none tracking-[-0.06em]">
                    {item.title}
                  </h3>
                  <p className="boxhouse-canvas-text mt-4 text-sm leading-7 text-[#5E5A55]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section
        id="membership"
        className="boxhouse-dark-section relative bg-[#111315] px-5 py-24 transition-colors duration-300 lg:px-10 lg:py-32"
      >
        <img
          src={membershipImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08] grayscale"
        />
        <div className="relative mx-auto max-w-[98rem]">
          <BoxHeading
            label="Membership"
            title="Choose Your Round Count"
            text="Three training paths for beginners, weekly members, and members who want full access."
            light
          />
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {memberships.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col border p-7 transition-colors duration-300 ${
                  plan.popular
                    ? "boxhouse-plan-popular border-[#E24835] bg-[#E24835] text-white shadow-[12px_12px_0_rgba(247,176,74,.22)] lg:-translate-y-4"
                    : "boxhouse-plan-normal boxhouse-dark-card border-white/12 bg-[#191B1D]"
                }`}
              >
                {plan.popular && (
                  <span className="boxhouse-popular-badge absolute right-5 top-5 bg-[#101112] px-3 py-2 text-[0.58rem] font-black uppercase tracking-[0.14em] text-[#F7B04A]">
                    Most Popular
                  </span>
                )}
                <p
                  className={`text-[0.6rem] font-black uppercase tracking-[0.18em] ${
                    plan.popular ? "text-white/72" : "boxhouse-accent-sec-text text-[#F7B04A]"
                  }`}
                >
                  BoxHouse membership
                </p>
                <h3 className="boxhouse-plan-title mt-6 text-4xl font-black uppercase leading-none tracking-[-0.065em]">
                  {plan.name}
                </h3>
                <div className="mt-8 flex items-end gap-2">
                  <span className="boxhouse-plan-price text-6xl font-black tracking-[-0.08em]">
                    {plan.price}
                  </span>
                  <span
                    className={`pb-2 text-xs font-bold ${
                      plan.popular ? "text-white/55" : "boxhouse-plan-period text-white/35"
                    }`}
                  >
                    / month
                  </span>
                </div>
                <p
                  className={`mt-5 text-sm leading-7 ${
                    plan.popular ? "text-white/72" : "boxhouse-plan-desc text-white/48"
                  }`}
                >
                  {plan.text}
                </p>
                <div
                  className={`boxhouse-plan-features mt-6 grid gap-3 border-t pt-6 ${
                    plan.popular ? "border-white/18" : "border-white/12"
                  }`}
                >
                  {plan.features.map((feature) => (
                    <span
                      key={feature}
                      className="boxhouse-plan-feature-item flex items-center gap-2 text-sm font-bold"
                    >
                      <Check
                        className={`h-4 w-4 ${
                          plan.popular ? "text-[#F7B04A]" : "boxhouse-accent-text text-[#E24835]"
                        }`}
                      />
                      {feature}
                    </span>
                  ))}
                </div>
                <BoxButton
                  href="#contact"
                  outline={plan.popular}
                  className="mt-8"
                >{`Choose ${plan.name}`}</BoxButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Results Section */}
      <section className="boxhouse-dark-section relative bg-[#0A0B0C] px-5 py-24 transition-colors duration-300 lg:px-10 lg:py-32">
        <img
          src={cultureImage}
          alt="BoxHouse training culture"
          className="absolute inset-0 h-full w-full object-cover opacity-24 grayscale-[25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0C] via-[#0A0B0C]/92 to-[#0A0B0C]/45" />
        <div className="relative mx-auto max-w-[98rem]">
          <BoxHeading
            label="Results & culture"
            title="Discipline In Every Round"
            text="A serious training room for realistic progress: cleaner technique, stronger conditioning, more consistency, and better movement confidence."
            light
          />
          <div className="boxhouse-culture-grid mt-12 grid border-l border-t border-white/14 sm:grid-cols-2 lg:grid-cols-4">
            {culture.map((item, index) => (
              <div
                key={item}
                className="boxhouse-culture-cell border-b border-r border-white/14 bg-black/30 p-6 transition-colors duration-300"
              >
                <span className="boxhouse-accent-sec-text text-xs font-black text-[#F7B04A]">
                  0{index + 1}
                </span>
                {[Target, Gauge, Shield, Trophy].map((Icon, iconIndex) =>
                  iconIndex === index ? (
                    <Icon key={item} className="boxhouse-accent-text mt-10 h-6 w-6 text-[#E24835]" />
                  ) : null,
                )}
                <h3 className="boxhouse-culture-title mt-5 text-xl font-black uppercase text-white">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="boxhouse-canvas-section bg-[#F8EFE2] px-5 py-24 text-[#171717] transition-colors duration-300 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[98rem]">
          <BoxHeading
            label="Member notes"
            title="The Room Makes The Work Clear"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map(([title, quote, name], index) => (
              <blockquote
                key={title}
                className="boxhouse-canvas-card border border-[#CFC5B7] bg-white p-7 transition-colors duration-300"
              >
                <span className="boxhouse-testimonial-num text-xs font-black text-[#B13228]">
                  0{index + 1}
                </span>
                <h3 className="boxhouse-canvas-title mt-8 text-3xl font-black uppercase leading-none tracking-[-0.06em]">
                  {title}
                </h3>
                <p className="boxhouse-canvas-text mt-5 text-sm leading-7 text-[#5E5A55]">{quote}</p>
                <footer className="boxhouse-testimonial-footer mt-7 border-t border-[#D8CEC0] pt-5 text-xs font-black uppercase tracking-[0.14em] text-[#B13228]">
                  {name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        id="contact"
        className="boxhouse-dark-section relative overflow-hidden bg-[#0A0B0C] px-5 py-28 lg:px-10 lg:py-36"
      >
        <img
          src={ctaImage}
          alt="BoxHouse athlete training with focus"
          className="absolute inset-0 h-full w-full object-cover opacity-45 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0C] via-[#0A0B0C]/88 to-[#0A0B0C]/35" />
        <div className="relative mx-auto max-w-[98rem]">
          <div className="max-w-5xl">
            <p className="boxhouse-accent-sec-text text-[0.62rem] font-black uppercase tracking-[0.24em] text-[#F7B04A]">
              The bell is live
            </p>
            <h2 className="mt-6 text-[clamp(2.4rem,7.5vw,9.6rem)] font-black uppercase leading-[0.82] tracking-[-0.08em] text-white">
              Step Into The House.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/62">
              Train with boxing, conditioning, and coaching that keeps every
              round focused.
            </p>
            <BoxButton href="mailto:start@boxhouse.example" className="mt-9">
              Book Your First Class
            </BoxButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="boxhouse-footer border-t border-white/10 bg-[#070808] px-5 pb-8 pt-14 transition-colors duration-300 lg:px-10">
        <div className="mx-auto max-w-[98rem]">
          <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-start">
            <div>
              <BoxLogo />
              <p className="boxhouse-footer-desc mt-5 max-w-sm text-sm leading-7 text-white/40">
                Boxing and conditioning for focused, powerful training.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="boxhouse-footer-link text-xs font-black uppercase tracking-[0.13em] text-white/40 hover:text-[#F7B04A]"
                >
                  {label}
                </a>
              ))}
            </div>
            <div>
              <p className="boxhouse-footer-desc text-[0.58rem] font-black uppercase tracking-[0.18em] text-white/30">
                Social
              </p>
              <div className="mt-4 flex gap-2">
                {["IG", "YT", "TK"].map((social) => (
                  <a
                    key={social}
                    href="#contact"
                    aria-label={`${social} social placeholder`}
                    className="boxhouse-social-btn grid h-10 w-10 place-items-center border border-white/15 text-[0.6rem] font-black hover:border-[#E24835] hover:text-[#F7B04A]"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <p className="boxhouse-copyright pt-7 text-[0.65rem] text-white/25">
            © 2026 BoxHouse Training. Class schedules, coaching availability,
            and memberships may vary.
          </p>
        </div>
      </footer>
    </main>
  );
}
