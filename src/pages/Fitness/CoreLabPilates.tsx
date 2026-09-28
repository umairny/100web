import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  CircleUserRound,
  Flower2,
  Heart,
  Leaf,
  Menu,
  MoveUpRight,
  Quote,
  SunMedium,
  Waves,
  X,
} from "lucide-react";
import heroImage from "../../assets/optimized/fitness/CoreLab/hero.webp";
import matImage from "../../assets/optimized/fitness/CoreLab/mat-pilates.webp";
import reformerImage from "../../assets/optimized/fitness/CoreLab/reformer-pilates.webp";
import mobilityImage from "../../assets/optimized/fitness/CoreLab/mobility-flow.webp";
import sculptImage from "../../assets/optimized/fitness/CoreLab/core-sculpt.webp";
import studioImage from "../../assets/optimized/fitness/CoreLab/studio-experience.webp";
import elenaImage from "../../assets/optimized/fitness/CoreLab/instructor-elena.webp";
import mayaImage from "../../assets/optimized/fitness/CoreLab/instructor-maya.webp";
import sofiaImage from "../../assets/optimized/fitness/CoreLab/instructor-sofia.webp";
import pricingImage from "../../assets/optimized/fitness/CoreLab/pricing-studio.webp";
import abstractImage from "../../assets/optimized/fitness/CoreLab/pilates-abstract-bg.webp";
import ctaImage from "../../assets/optimized/fitness/CoreLab/cta.webp";

const navLinks = [
  ["Classes", "#classes"],
  ["Studio", "#studio"],
  ["Instructors", "#instructors"],
  ["Pricing", "#pricing"],
  ["Contact", "#contact"],
];

const classes = [
  {
    image: matImage,
    number: "01",
    title: "Mat Pilates",
    text: "Build core strength, posture, and body awareness through controlled floor-based movement.",
  },
  {
    image: reformerImage,
    number: "02",
    title: "Reformer Pilates",
    text: "Train with guided resistance to improve strength, alignment, and flexibility.",
  },
  {
    image: mobilityImage,
    number: "03",
    title: "Mobility Flow",
    text: "Restore movement, reduce stiffness, and support recovery with slow intentional sequences.",
  },
  {
    image: sculptImage,
    number: "04",
    title: "Core Sculpt",
    text: "A focused class for strength, stability, and controlled full-body conditioning.",
  },
];

const instructors = [
  {
    image: elenaImage,
    name: "Elena Brooks",
    specialty: "Reformer & Alignment Coach",
    bio: "Elena teaches with precise cues and a warm, steady pace that helps every student understand the movement.",
  },
  {
    image: mayaImage,
    name: "Maya Chen",
    specialty: "Mat Pilates & Mobility Instructor",
    bio: "Maya blends foundational mat work with restorative mobility for classes that feel focused and freeing.",
  },
  {
    image: sofiaImage,
    name: "Sofia Reed",
    specialty: "Core Strength & Breathwork Coach",
    bio: "Sofia guides strength through breath, control, and thoughtful progressions that meet students where they are.",
  },
];

const plans = [
  {
    name: "First Flow",
    note: "For new students trying their first class.",
    price: "$28",
    cadence: "one time",
    features: [
      "1 intro class",
      "Studio orientation",
      "Beginner-friendly guidance",
    ],
    popular: false,
  },
  {
    name: "Studio Balance",
    note: "For weekly movement and steady progress.",
    price: "$124",
    cadence: "/ month",
    features: [
      "4 classes / month",
      "Mat or reformer options",
      "Schedule flexibility",
    ],
    popular: true,
  },
  {
    name: "Core Unlimited",
    note: "For members who want a consistent studio practice.",
    price: "$198",
    cadence: "/ month",
    features: [
      "Unlimited classes",
      "Priority booking",
      "Monthly progress check-in",
    ],
    popular: false,
  },
];

function CoreButton({
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
      className={`corelab-btn group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition duration-300 hover:-translate-y-0.5 ${
        outline
          ? "corelab-btn-outline border border-[#B7AAA0] bg-white/60 text-[#373330] hover:border-[#B56F59]"
          : "corelab-btn-solid bg-[#B56F59] text-white shadow-[0_12px_28px_rgba(181,111,89,.2)] hover:bg-[#9f5f4c]"
      } ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function CoreHeading({
  label,
  title,
  text,
  center = false,
  light = false,
}: {
  label: string;
  title: string;
  text?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      <p className="corelab-heading-label text-[0.64rem] font-black uppercase tracking-[0.24em] text-[#B56F59]">
        {label}
      </p>
      <h2
        className={`corelab-heading-title mt-4 text-[clamp(2.15rem,5.2vw,5.7rem)] leading-[0.96] tracking-[-0.045em] ${
          light ? "corelab-title-light text-[#F7F0E7]" : "corelab-title-dark text-[#373330]"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`corelab-heading-text mt-6 max-w-2xl text-base leading-8 md:text-lg ${
            center ? "mx-auto" : ""
          } ${light ? "corelab-text-light text-white/62" : "corelab-text-dark text-[#716A65]"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function CoreLogo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className={`corelab-logo flex items-center gap-3 ${light ? "corelab-logo-light text-white" : "corelab-logo-dark text-[#373330]"}`}
      aria-label="CoreLab Pilates home"
    >
      <span className="corelab-logo-icon grid h-11 w-11 place-items-center rounded-full bg-[#B56F59] text-white">
        <Flower2 className="h-5 w-5" />
      </span>
      <span>
        <strong className="corelab-serif corelab-logo-text block text-xl font-normal leading-none">
          CoreLab
        </strong>
        <span
          className={`corelab-logo-sub mt-1 block text-[0.52rem] font-bold uppercase tracking-[0.25em] ${
            light ? "text-white/48" : "text-[#7F756F]"
          }`}
        >
          Pilates Studio
        </span>
      </span>
    </a>
  );
}

export function CoreLabPilates() {
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
        "classes",
        "studio",
        "instructors",
        "pricing",
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
    <main className="corelab-site w-full max-w-full overflow-x-hidden bg-[#F7F0E7] text-[#514B47] selection:bg-[#B56F59] selection:text-white">
      <style>{`
        /* ============================================================ */
        /* CORELAB PILATES - THEME SYSTEM                               */
        /* ============================================================ */
        .corelab-site {
          --cl-accent: #B56F59;
          --cl-accent-hover: #9f5f4c;
          --cl-accent-sec: #6F7D61;
          --cl-accent-glow: rgba(181, 111, 89, 0.22);
          --cl-contrast: #ffffff;

          --cl-bg-base: #F7F0E7;
          --cl-bg-surface: #FCF9F4;
          --cl-bg-surface-alt: #E9E3DA;
          --cl-bg-card: #ffffff;
          --cl-bg-dark: #373330;
          --cl-bg-dark-alt: #4B4743;

          --cl-text-primary: #373330;
          --cl-text-body: #514B47;
          --cl-text-muted: #716A65;
          --cl-text-dim: #8A817B;

          --cl-border: #DED3C8;
          --cl-border-subtle: #E8E0D8;
          --cl-nav-bg: rgba(252, 249, 244, 0.95);
          --cl-nav-text: #6E6762;
        }

        /* ------------------------------------------------------------ */
        /* DYNAMIC THEME PRESET ADAPTATION                              */
        /* ------------------------------------------------------------ */
        [data-theme-preset]:not([data-theme-preset="original"]) .corelab-site,
        [data-theme-active="true"]:not([data-theme-preset="original"]) .corelab-site {
          --cl-accent: var(--theme-accent-primary, #B56F59) !important;
          --cl-accent-hover: var(--theme-accent-primary-hover, #9f5f4c) !important;
          --cl-accent-sec: var(--theme-accent-secondary, #6F7D61) !important;
          --cl-accent-glow: var(--theme-accent-glow, rgba(181, 111, 89, 0.22)) !important;
          --cl-contrast: var(--theme-accent-contrast, #ffffff) !important;
        }

        /* Preserve round button geometries - NEVER turn into plain unstyled blocks */
        .corelab-site .corelab-btn-solid {
          background-color: var(--cl-accent) !important;
          color: var(--cl-contrast) !important;
          box-shadow: 0 12px 28px var(--cl-accent-glow) !important;
        }
        .corelab-site .corelab-btn-solid:hover {
          background-color: var(--cl-accent-hover) !important;
          color: var(--cl-contrast) !important;
        }

        .corelab-site .corelab-btn-outline {
          border-color: #B7AAA0;
          color: var(--cl-text-primary);
          background-color: rgba(255, 255, 255, 0.6);
        }
        .corelab-site .corelab-btn-outline:hover {
          border-color: var(--cl-accent) !important;
          color: var(--cl-accent) !important;
        }

        .corelab-site .corelab-logo-icon {
          background-color: var(--cl-accent) !important;
          color: var(--cl-contrast) !important;
        }

        .corelab-site .corelab-heading-label,
        .corelab-site .corelab-hero-accent,
        .corelab-site .corelab-class-num,
        .corelab-site .corelab-quote-icon,
        .corelab-site .corelab-check-icon,
        .corelab-site .corelab-card-link,
        .corelab-site .corelab-mobile-arrow {
          color: var(--cl-accent) !important;
        }

        .corelab-site .corelab-nav-active {
          background-color: var(--cl-accent-glow) !important;
          color: var(--cl-accent) !important;
          box-shadow: inset 0 0 0 1px var(--cl-accent) !important;
        }

        .corelab-site .corelab-plan-btn-normal:hover {
          background-color: var(--cl-accent) !important;
          color: var(--cl-contrast) !important;
        }

        .corelab-site .corelab-social-btn:hover {
          border-color: var(--cl-accent) !important;
          color: var(--cl-accent) !important;
        }

        /* ------------------------------------------------------------ */
        /* DARK MOOD OVERRIDES                                          */
        /* ------------------------------------------------------------ */
        html.dark .corelab-site,
        body.dark .corelab-site,
        [data-theme-mood="dark"] .corelab-site,
        :root[data-theme-mood="dark"] .corelab-site,
        :root[data-theme-active="true"][data-theme-mood="dark"] .corelab-site,
        :root.dark .corelab-site {
          --cl-bg-base: #141312;
          --cl-bg-surface: #1B1A18;
          --cl-bg-surface-alt: #1F1E1B;
          --cl-bg-card: #23211F;
          --cl-bg-dark: #0E0D0C;
          --cl-bg-dark-alt: #171614;

          --cl-text-primary: #F7F0E7;
          --cl-text-body: rgba(247, 240, 231, 0.85);
          --cl-text-muted: rgba(247, 240, 231, 0.62);
          --cl-text-dim: rgba(247, 240, 231, 0.42);

          --cl-border: rgba(255, 255, 255, 0.1);
          --cl-border-subtle: rgba(255, 255, 255, 0.07);
          --cl-nav-bg: rgba(20, 19, 18, 0.95);
          --cl-nav-text: rgba(247, 240, 231, 0.7);

          background-color: var(--cl-bg-base) !important;
          color: var(--cl-text-body) !important;
        }

        /* Header in dark mode */
        html.dark .corelab-site .corelab-header,
        [data-theme-mood="dark"] .corelab-site .corelab-header,
        :root.dark .corelab-site .corelab-header {
          background-color: var(--cl-nav-bg) !important;
          border-bottom-color: var(--cl-border) !important;
        }
        html.dark .corelab-site .corelab-nav-link,
        [data-theme-mood="dark"] .corelab-site .corelab-nav-link,
        :root.dark .corelab-site .corelab-nav-link {
          color: var(--cl-nav-text) !important;
        }
        html.dark .corelab-site .corelab-nav-link:hover,
        [data-theme-mood="dark"] .corelab-site .corelab-nav-link:hover,
        :root.dark .corelab-site .corelab-nav-link:hover {
          color: #ffffff !important;
          background-color: rgba(255, 255, 255, 0.08) !important;
        }

        html.dark .corelab-site .corelab-logo-dark,
        [data-theme-mood="dark"] .corelab-site .corelab-logo-dark,
        :root.dark .corelab-site .corelab-logo-dark {
          color: #F7F0E7 !important;
        }
        html.dark .corelab-site .corelab-logo-sub,
        [data-theme-mood="dark"] .corelab-site .corelab-logo-sub,
        :root.dark .corelab-site .corelab-logo-sub {
          color: rgba(247, 240, 231, 0.45) !important;
        }

        html.dark .corelab-site .corelab-menu-toggle,
        [data-theme-mood="dark"] .corelab-site .corelab-menu-toggle,
        :root.dark .corelab-site .corelab-menu-toggle {
          border-color: var(--cl-border) !important;
          color: var(--cl-text-primary) !important;
        }

        html.dark .corelab-site .corelab-mobile-nav,
        [data-theme-mood="dark"] .corelab-site .corelab-mobile-nav,
        :root.dark .corelab-site .corelab-mobile-nav {
          background-color: #1B1A18 !important;
          border-bottom-color: var(--cl-border) !important;
        }
        html.dark .corelab-site .corelab-mobile-link,
        [data-theme-mood="dark"] .corelab-site .corelab-mobile-link,
        :root.dark .corelab-site .corelab-mobile-link {
          color: var(--cl-text-primary) !important;
        }

        /* Hero in dark mode */
        html.dark .corelab-site .corelab-hero-section,
        [data-theme-mood="dark"] .corelab-site .corelab-hero-section,
        :root.dark .corelab-site .corelab-hero-section {
          background-color: var(--cl-bg-base) !important;
        }
        html.dark .corelab-site .corelab-hero-title,
        [data-theme-mood="dark"] .corelab-site .corelab-hero-title,
        :root.dark .corelab-site .corelab-hero-title {
          color: #F7F0E7 !important;
        }
        html.dark .corelab-site .corelab-hero-desc,
        [data-theme-mood="dark"] .corelab-site .corelab-hero-desc,
        :root.dark .corelab-site .corelab-hero-desc {
          color: rgba(247, 240, 231, 0.65) !important;
        }
        html.dark .corelab-site .corelab-hero-badge,
        [data-theme-mood="dark"] .corelab-site .corelab-hero-badge,
        :root.dark .corelab-site .corelab-hero-badge {
          background-color: rgba(255, 255, 255, 0.06) !important;
          border-color: var(--cl-border) !important;
        }
        html.dark .corelab-site .corelab-hero-chip,
        [data-theme-mood="dark"] .corelab-site .corelab-hero-chip,
        :root.dark .corelab-site .corelab-hero-chip {
          background-color: rgba(255, 255, 255, 0.05) !important;
          border-color: var(--cl-border) !important;
          color: rgba(247, 240, 231, 0.72) !important;
        }
        html.dark .corelab-site .corelab-hero-frame,
        [data-theme-mood="dark"] .corelab-site .corelab-hero-frame,
        :root.dark .corelab-site .corelab-hero-frame {
          background-color: #242220 !important;
        }

        /* Outline button in dark mode */
        html.dark .corelab-site .corelab-btn-outline,
        [data-theme-mood="dark"] .corelab-site .corelab-btn-outline,
        :root.dark .corelab-site .corelab-btn-outline {
          border-color: rgba(255, 255, 255, 0.2) !important;
          background-color: rgba(255, 255, 255, 0.05) !important;
          color: #F7F0E7 !important;
        }
        html.dark .corelab-site .corelab-btn-outline:hover,
        [data-theme-mood="dark"] .corelab-site .corelab-btn-outline:hover,
        :root.dark .corelab-site .corelab-btn-outline:hover {
          border-color: var(--cl-accent) !important;
          color: var(--cl-accent) !important;
          background-color: rgba(255, 255, 255, 0.09) !important;
        }

        /* Headings in dark mode */
        html.dark .corelab-site .corelab-title-dark,
        [data-theme-mood="dark"] .corelab-site .corelab-title-dark,
        :root.dark .corelab-site .corelab-title-dark {
          color: #F7F0E7 !important;
        }
        html.dark .corelab-site .corelab-text-dark,
        [data-theme-mood="dark"] .corelab-site .corelab-text-dark,
        :root.dark .corelab-site .corelab-text-dark {
          color: rgba(247, 240, 231, 0.65) !important;
        }

        /* Light sections in dark mode */
        html.dark .corelab-site .corelab-section-light,
        [data-theme-mood="dark"] .corelab-site .corelab-section-light,
        :root.dark .corelab-site .corelab-section-light {
          background-color: var(--cl-bg-surface) !important;
        }
        html.dark .corelab-site .corelab-card,
        [data-theme-mood="dark"] .corelab-site .corelab-card,
        :root.dark .corelab-site .corelab-card {
          background-color: var(--cl-bg-card) !important;
          border-color: var(--cl-border) !important;
        }
        html.dark .corelab-site .corelab-card-title,
        [data-theme-mood="dark"] .corelab-site .corelab-card-title,
        :root.dark .corelab-site .corelab-card-title {
          color: #F7F0E7 !important;
        }
        html.dark .corelab-site .corelab-card-desc,
        [data-theme-mood="dark"] .corelab-site .corelab-card-desc,
        :root.dark .corelab-site .corelab-card-desc {
          color: rgba(247, 240, 231, 0.65) !important;
        }

        /* Studio section in dark mode */
        html.dark .corelab-site .corelab-studio-section,
        [data-theme-mood="dark"] .corelab-site .corelab-studio-section,
        :root.dark .corelab-site .corelab-studio-section {
          background-color: var(--cl-bg-base) !important;
        }
        html.dark .corelab-site .corelab-studio-badge,
        [data-theme-mood="dark"] .corelab-site .corelab-studio-badge,
        :root.dark .corelab-site .corelab-studio-badge {
          background-color: rgba(35, 33, 31, 0.95) !important;
          color: #8CA078 !important;
        }
        html.dark .corelab-site .corelab-studio-card,
        [data-theme-mood="dark"] .corelab-site .corelab-studio-card,
        :root.dark .corelab-site .corelab-studio-card {
          background-color: var(--cl-bg-card) !important;
          border-color: var(--cl-border) !important;
        }
        html.dark .corelab-site .corelab-studio-icon,
        [data-theme-mood="dark"] .corelab-site .corelab-studio-icon,
        :root.dark .corelab-site .corelab-studio-icon {
          background-color: rgba(111, 125, 97, 0.25) !important;
          color: #A3B88E !important;
        }
        html.dark .corelab-site .corelab-studio-title,
        [data-theme-mood="dark"] .corelab-site .corelab-studio-title,
        :root.dark .corelab-site .corelab-studio-title {
          color: #F7F0E7 !important;
        }
        html.dark .corelab-site .corelab-studio-text,
        [data-theme-mood="dark"] .corelab-site .corelab-studio-text,
        :root.dark .corelab-site .corelab-studio-text {
          color: rgba(247, 240, 231, 0.65) !important;
        }

        /* Instructors section in dark mode */
        html.dark .corelab-site .corelab-instructors-section,
        [data-theme-mood="dark"] .corelab-site .corelab-instructors-section,
        :root.dark .corelab-site .corelab-instructors-section {
          background-color: var(--cl-bg-surface-alt) !important;
        }
        html.dark .corelab-site .corelab-instructor-pill,
        [data-theme-mood="dark"] .corelab-site .corelab-instructor-pill,
        :root.dark .corelab-site .corelab-instructor-pill {
          background-color: rgba(255, 255, 255, 0.08) !important;
          color: var(--cl-accent) !important;
        }
        html.dark .corelab-site .corelab-instructor-name,
        [data-theme-mood="dark"] .corelab-site .corelab-instructor-name,
        :root.dark .corelab-site .corelab-instructor-name {
          color: #F7F0E7 !important;
        }
        html.dark .corelab-site .corelab-instructor-bio,
        [data-theme-mood="dark"] .corelab-site .corelab-instructor-bio,
        :root.dark .corelab-site .corelab-instructor-bio {
          color: rgba(247, 240, 231, 0.65) !important;
        }

        /* Pricing section in dark mode */
        html.dark .corelab-site .corelab-plan-normal,
        [data-theme-mood="dark"] .corelab-site .corelab-plan-normal,
        :root.dark .corelab-site .corelab-plan-normal {
          background-color: var(--cl-bg-card) !important;
          border-color: var(--cl-border) !important;
          color: #F7F0E7 !important;
        }
        html.dark .corelab-site .corelab-plan-title,
        [data-theme-mood="dark"] .corelab-site .corelab-plan-title,
        :root.dark .corelab-site .corelab-plan-title {
          color: #F7F0E7 !important;
        }
        html.dark .corelab-site .corelab-plan-price,
        [data-theme-mood="dark"] .corelab-site .corelab-plan-price,
        :root.dark .corelab-site .corelab-plan-price {
          color: #F7F0E7 !important;
        }
        html.dark .corelab-site .corelab-plan-cadence,
        [data-theme-mood="dark"] .corelab-site .corelab-plan-cadence,
        :root.dark .corelab-site .corelab-plan-cadence {
          color: rgba(247, 240, 231, 0.45) !important;
        }
        html.dark .corelab-site .corelab-plan-note,
        [data-theme-mood="dark"] .corelab-site .corelab-plan-note,
        :root.dark .corelab-site .corelab-plan-note {
          color: rgba(247, 240, 231, 0.65) !important;
        }
        html.dark .corelab-site .corelab-plan-features,
        [data-theme-mood="dark"] .corelab-site .corelab-plan-features,
        :root.dark .corelab-site .corelab-plan-features {
          border-top-color: var(--cl-border) !important;
        }
        html.dark .corelab-site .corelab-plan-btn-normal,
        [data-theme-mood="dark"] .corelab-site .corelab-plan-btn-normal,
        :root.dark .corelab-site .corelab-plan-btn-normal {
          background-color: rgba(255, 255, 255, 0.1) !important;
          color: #F7F0E7 !important;
        }
        html.dark .corelab-site .corelab-plan-btn-normal:hover,
        [data-theme-mood="dark"] .corelab-site .corelab-plan-btn-normal:hover,
        :root.dark .corelab-site .corelab-plan-btn-normal:hover {
          background-color: var(--cl-accent) !important;
          color: var(--cl-contrast) !important;
        }

        /* Testimonials in dark mode */
        html.dark .corelab-site .corelab-testimonials-section,
        [data-theme-mood="dark"] .corelab-site .corelab-testimonials-section,
        :root.dark .corelab-site .corelab-testimonials-section {
          background-color: var(--cl-bg-base) !important;
        }
        html.dark .corelab-site .corelab-testimonial-card,
        [data-theme-mood="dark"] .corelab-site .corelab-testimonial-card,
        :root.dark .corelab-site .corelab-testimonial-card {
          background-color: var(--cl-bg-card) !important;
          border-color: var(--cl-border) !important;
        }
        html.dark .corelab-site .corelab-quote-text,
        [data-theme-mood="dark"] .corelab-site .corelab-quote-text,
        :root.dark .corelab-site .corelab-quote-text {
          color: rgba(247, 240, 231, 0.78) !important;
        }
        html.dark .corelab-site .corelab-testimonial-footer,
        [data-theme-mood="dark"] .corelab-site .corelab-testimonial-footer,
        :root.dark .corelab-site .corelab-testimonial-footer {
          border-top-color: var(--cl-border) !important;
        }
        html.dark .corelab-site .corelab-testimonial-avatar,
        [data-theme-mood="dark"] .corelab-site .corelab-testimonial-avatar,
        :root.dark .corelab-site .corelab-testimonial-avatar {
          background-color: rgba(111, 125, 97, 0.25) !important;
          color: #A3B88E !important;
        }
        html.dark .corelab-site .corelab-testimonial-name,
        [data-theme-mood="dark"] .corelab-site .corelab-testimonial-name,
        :root.dark .corelab-site .corelab-testimonial-name {
          color: #F7F0E7 !important;
        }
        html.dark .corelab-site .corelab-testimonial-role,
        [data-theme-mood="dark"] .corelab-site .corelab-testimonial-role,
        :root.dark .corelab-site .corelab-testimonial-role {
          color: rgba(247, 240, 231, 0.45) !important;
        }

        /* CTA and Footer in dark mode */
        html.dark .corelab-site .corelab-cta-section,
        [data-theme-mood="dark"] .corelab-site .corelab-cta-section,
        :root.dark .corelab-site .corelab-cta-section {
          background-color: var(--cl-bg-dark-alt) !important;
        }
        html.dark .corelab-site .corelab-footer,
        [data-theme-mood="dark"] .corelab-site .corelab-footer,
        :root.dark .corelab-site .corelab-footer {
          background-color: var(--cl-bg-dark) !important;
          border-top: 1px solid var(--cl-border);
        }

        /* ------------------------------------------------------------ */
        /* LIGHT MOOD OVERRIDES (When user explicitly chooses Light Mode)*/
        /* ------------------------------------------------------------ */
        html.light .corelab-site,
        body.light .corelab-site,
        [data-theme-mood="light"] .corelab-site,
        :root[data-theme-mood="light"] .corelab-site,
        :root[data-theme-active="true"][data-theme-mood="light"] .corelab-site,
        :root.light .corelab-site {
          --cl-bg-base: #F7F0E7;
          --cl-bg-surface: #FCF9F4;
          --cl-bg-surface-alt: #E9E3DA;
          --cl-bg-card: #ffffff;
          --cl-text-primary: #373330;
          --cl-text-body: #514B47;
          --cl-text-muted: #716A65;
          background-color: var(--cl-bg-base) !important;
          color: var(--cl-text-body) !important;
        }
      `}</style>

      {/* Header */}
      <header className="corelab-header fixed inset-x-0 top-0 z-50 border-b border-[#DED3C8] bg-[#FCF9F4]/95 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex h-[4.75rem] max-w-[92rem] items-center justify-between px-5 lg:px-10">
          <CoreLogo />
          <nav
            className="hidden items-center gap-2 lg:flex"
            aria-label="CoreLab navigation"
          >
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  className={`corelab-nav-link rounded-full px-4 py-2 text-sm font-semibold transition ${
                    active
                      ? "corelab-nav-active bg-[#EEE3DA] text-[#9A5D4A]"
                      : "text-[#6E6762] hover:bg-white hover:text-[#B56F59]"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>
          {/* Desktop-Only Booking CTA (Isolated from mobile viewports) */}
          <div className="hidden lg:block">
            <CoreButton href="#contact">
              Book a Class
            </CoreButton>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="corelab-menu-toggle grid h-11 w-11 place-items-center rounded-full border border-[#D8CCC1] text-[#514B47] transition active:scale-95 hover:border-[#B56F59] lg:hidden"
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
            <nav className="corelab-mobile-nav fixed inset-x-0 top-[4.75rem] z-50 border-b border-[#DED3C8] bg-[#FCF9F4]/98 px-5 py-5 shadow-2xl backdrop-blur-2xl lg:hidden">
              <div className="space-y-1">
                {navLinks.map(([label, href]) => {
                  const active = activeSection === href.slice(1);
                  return (
                    <a
                      key={label}
                      href={href}
                      aria-current={active ? "location" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`corelab-mobile-link flex items-center justify-between rounded-xl px-4 py-3 font-semibold transition ${
                        active
                          ? "corelab-nav-active bg-[#EEE3DA] text-[#9A5D4A] font-bold"
                          : "text-[#6E6762] hover:bg-white hover:text-[#B56F59]"
                      }`}
                    >
                      <span>{label}</span>
                      <span className="corelab-mobile-arrow text-xs text-[#B56F59]">→</span>
                    </a>
                  );
                })}
              </div>
            </nav>
          </>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="corelab-hero-section relative min-h-[54rem] pt-[4.75rem] transition-colors duration-300">
        <img
          src={abstractImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.07] mix-blend-multiply"
        />
        <div className="absolute left-[7%] top-40 h-56 w-56 rounded-full bg-[#C8D1B8]/30 blur-3xl" />
        <div className="relative mx-auto grid min-h-[49.25rem] max-w-[92rem] gap-12 px-5 py-16 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-10">
          <div>
            <p className="corelab-hero-badge inline-flex items-center gap-2 rounded-full border border-[#D9CCC0] bg-white/70 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#9A5D4A]">
              <Leaf className="h-4 w-4" /> Calm studio classes
            </p>
            <h1 className="corelab-hero-title mt-7 max-w-3xl text-[clamp(2.35rem,6.8vw,7.4rem)] leading-[0.92] tracking-[-0.055em] text-[#373330]">
              Move With Control.{" "}
              <span className="corelab-hero-accent text-[#B56F59]">Breathe With Intention.</span>
            </h1>
            <p className="corelab-hero-desc mt-7 max-w-xl text-lg leading-8 text-[#716A65]">
              Calm studio Pilates classes designed to build core strength,
              improve mobility, and help you feel grounded through mindful
              movement.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CoreButton href="#contact">Book Your First Class</CoreButton>
              <CoreButton href="#classes" outline>
                View Class Schedule
              </CoreButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "Mat Pilates",
                "Reformer Classes",
                "Mobility Flow",
                "Beginner Friendly",
              ].map((chip) => (
                <span
                  key={chip}
                  className="corelab-hero-chip rounded-full border border-[#DDD1C7] bg-white/70 px-4 py-2 text-xs font-bold text-[#716A65]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="corelab-hero-frame overflow-hidden rounded-[12rem_12rem_2rem_2rem] bg-[#E7DED5] p-3 shadow-[0_30px_80px_rgba(84,72,64,.14)]">
              <img
                src={heroImage}
                alt="Bright and peaceful CoreLab Pilates studio class"
                className="h-[40rem] w-full rounded-[11rem_11rem_1.4rem_1.4rem] object-cover"
              />
            </div>
            <div className="corelab-hero-floating-card absolute -bottom-6 left-4 right-4 max-w-xs rounded-2xl bg-[#6F7D61] p-5 text-white shadow-xl sm:left-auto sm:right-auto sm:-left-4 md:-left-8">
              <Waves className="h-5 w-5" />
              <p className="mt-3 text-sm font-semibold leading-6">
                A quieter space to build steady, lasting strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section
        id="classes"
        className="corelab-section-light bg-[#FCF9F4] px-5 py-24 transition-colors duration-300 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[92rem]">
          <CoreHeading
            label="Studio classes"
            title="Designed for strength and balance"
            text="Four class styles, each taught with clear guidance, thoughtful pacing, and space to move with confidence."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {classes.map((item, index) => (
              <article
                key={item.title}
                className="corelab-card group grid overflow-hidden rounded-[2rem] border border-[#DED3C8] bg-white transition-colors duration-300 sm:grid-cols-[.9fr_1.1fr]"
              >
                <div
                  className={`relative min-h-72 overflow-hidden ${index % 2 === 1 ? "sm:order-2" : ""}`}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} class`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="corelab-class-num absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-xs font-bold text-[#B56F59]">
                    {item.number}
                  </span>
                </div>
                <div className="flex items-center p-7">
                  <div>
                    <h3 className="corelab-card-title text-3xl leading-none tracking-[-0.04em] text-[#373330]">
                      {item.title}
                    </h3>
                    <p className="corelab-card-desc mt-4 text-sm leading-7 text-[#716A65]">
                      {item.text}
                    </p>
                    <a
                      href="#contact"
                      className="corelab-card-link mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#A4614D]"
                    >
                      Explore Class <MoveUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Section */}
      <section id="studio" className="corelab-studio-section px-5 py-24 transition-colors duration-300 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="relative">
            <img
              src={studioImage}
              alt="Warm, airy CoreLab Pilates studio interior"
              className="min-h-[42rem] w-full rounded-[2rem_10rem_2rem_2rem] object-cover"
            />
            <span className="corelab-studio-badge absolute bottom-5 right-5 rounded-full bg-white/92 px-4 py-2 text-xs font-bold text-[#6F7D61]">
              Small classes • Clear guidance
            </span>
          </div>
          <div>
            <CoreHeading
              label="Studio experience"
              title="A calm space to reset and strengthen"
              text="Our studio brings together small class sizes, supportive instruction, a peaceful atmosphere, and clear guidance for every level."
            />
            <div className="mt-9 grid gap-3">
              {[
                [
                  Heart,
                  "Gentle Coaching",
                  "Thoughtful cues and personal attention without pressure.",
                ],
                [
                  Waves,
                  "Balanced Movement",
                  "Strength, mobility, and breath working together.",
                ],
                [
                  SunMedium,
                  "Welcoming Studio",
                  "A bright, grounded space where every level belongs.",
                ],
              ].map(([Icon, title, text]) => {
                const HighlightIcon = Icon as typeof Heart;
                return (
                  <article
                    key={title as string}
                    className="corelab-studio-card flex gap-4 rounded-2xl border border-[#DED3C8] bg-white/65 p-5 transition-colors duration-300"
                  >
                    <span className="corelab-studio-icon grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#E5E9DC] text-[#6F7D61]">
                      <HighlightIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="corelab-studio-title text-xl text-[#373330]">
                        {title as string}
                      </h3>
                      <p className="corelab-studio-text mt-1 text-sm leading-6 text-[#716A65]">
                        {text as string}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section
        id="instructors"
        className="corelab-instructors-section bg-[#E9E3DA] px-5 py-24 transition-colors duration-300 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[92rem]">
          <CoreHeading
            label="Our instructors"
            title="Guided by thoughtful instructors"
            text="Experienced teachers who bring attentive cues, calm energy, and respect for every student’s starting point."
            center
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {instructors.map((person) => (
              <article
                key={person.name}
                className="corelab-card corelab-instructor-card group overflow-hidden rounded-[8rem_8rem_2rem_2rem] border border-white/70 bg-white transition-colors duration-300"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={person.image}
                    alt={`${person.name}, ${person.specialty}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 text-center">
                  <span className="corelab-instructor-pill inline-flex rounded-full bg-[#EEE3DA] px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#9A5D4A]">
                    {person.specialty}
                  </span>
                  <h3 className="corelab-instructor-name mt-5 text-3xl text-[#373330]">
                    {person.name}
                  </h3>
                  <p className="corelab-instructor-bio mt-3 text-sm leading-7 text-[#716A65]">
                    {person.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section
        id="pricing"
        className="corelab-section-light relative bg-[#FCF9F4] px-5 py-24 transition-colors duration-300 lg:px-10 lg:py-32"
      >
        <img
          src={pricingImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.035]"
        />
        <div className="relative mx-auto max-w-[92rem]">
          <CoreHeading
            label="Membership"
            title="A practice that fits your rhythm"
            text="Begin with one class or build a weekly routine. Membership pricing and availability may vary by schedule."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-[2rem] border p-7 transition-colors duration-300 ${
                  plan.popular
                    ? "corelab-plan-popular border-[#B56F59] bg-[#6F7D61] text-white shadow-[0_24px_55px_rgba(91,105,78,.2)] lg:-translate-y-4"
                    : "corelab-plan-normal border-[#DED3C8] bg-white"
                }`}
              >
                {plan.popular && (
                  <span className="corelab-plan-popular-badge absolute right-5 top-5 rounded-full bg-[#F7F0E7] px-3 py-1.5 text-[0.58rem] font-black uppercase tracking-[0.14em] text-[#6F7D61]">
                    Most Popular
                  </span>
                )}
                <p
                  className={`text-[0.62rem] font-black uppercase tracking-[0.18em] ${
                    plan.popular ? "text-white/55" : "corelab-plan-tag text-[#B56F59]"
                  }`}
                >
                  Studio membership
                </p>
                <h3 className="corelab-plan-title mt-5 text-4xl">{plan.name}</h3>
                <div className="mt-6 flex items-end gap-2">
                  <span className="corelab-plan-price text-5xl font-semibold tracking-[-0.05em]">
                    {plan.price}
                  </span>
                  <span
                    className={`corelab-plan-cadence pb-1 text-xs ${plan.popular ? "text-white/55" : "text-[#7B746F]"}`}
                  >
                    {plan.cadence}
                  </span>
                </div>
                <p
                  className={`corelab-plan-note mt-5 text-sm leading-7 ${plan.popular ? "text-white/72" : "text-[#716A65]"}`}
                >
                  {plan.note}
                </p>
                <div
                  className={`corelab-plan-features mt-6 grid gap-3 border-t pt-6 ${
                    plan.popular ? "border-white/15" : "border-[#E8E0D8]"
                  }`}
                >
                  {plan.features.map((feature) => (
                    <span
                      key={feature}
                      className="flex items-center gap-2 text-sm font-semibold"
                    >
                      <Check
                        className={`h-4 w-4 ${plan.popular ? "text-[#F5D6C9]" : "corelab-check-icon text-[#B56F59]"}`}
                      />
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className={`corelab-plan-btn mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-bold transition ${
                    plan.popular
                      ? "corelab-plan-btn-popular bg-white text-[#6F7D61] hover:bg-[#F7F0E7]"
                      : "corelab-plan-btn-normal bg-[#373330] text-white hover:bg-[#B56F59]"
                  }`}
                >
                  Choose {plan.name}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="corelab-testimonials-section px-5 py-24 transition-colors duration-300 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[92rem]">
          <CoreHeading
            label="Student notes"
            title="A studio practice people look forward to"
            center
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [
                "Nora L.",
                "The class rhythm makes it easier to stay consistent. I leave feeling focused rather than depleted.",
              ],
              [
                "Amelia R.",
                "I notice my posture more throughout the day, and the instructors explain each adjustment so clearly.",
              ],
              [
                "Jamie K.",
                "The studio feels peaceful and welcoming. I never feel behind, even when a movement is new to me.",
              ],
            ].map(([name, quote]) => (
              <blockquote
                key={name}
                className="corelab-testimonial-card rounded-[2rem] border border-[#DED3C8] bg-white/70 p-7 transition-colors duration-300"
              >
                <Quote className="corelab-quote-icon h-7 w-7 text-[#B56F59]" />
                <p className="corelab-quote-text mt-7 text-lg leading-8 text-[#5E5753]">
                  “{quote}”
                </p>
                <footer className="corelab-testimonial-footer mt-7 flex items-center gap-3 border-t border-[#E5DBD2] pt-5">
                  <span className="corelab-testimonial-avatar grid h-10 w-10 place-items-center rounded-full bg-[#E5E9DC] text-[#6F7D61]">
                    <CircleUserRound className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="corelab-testimonial-name font-bold text-[#373330]">{name}</p>
                    <p className="corelab-testimonial-role text-xs text-[#8A817B]">CoreLab student</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section
        id="contact"
        className="corelab-cta-section relative bg-[#4B4743] px-5 py-28 text-white transition-colors duration-300 lg:px-10 lg:py-36"
      >
        <img
          src={ctaImage}
          alt="Calm Pilates class at CoreLab studio"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D3936] via-[#3D3936]/88 to-[#3D3936]/40" />
        <div className="relative mx-auto max-w-[92rem]">
          <div className="max-w-4xl">
            <p className="corelab-cta-tag text-[0.64rem] font-black uppercase tracking-[0.24em] text-[#E7B9A8]">
              Your practice can begin gently
            </p>
            <h2 className="corelab-cta-title mt-6 text-[clamp(2.35rem,6.8vw,7rem)] leading-[0.9] tracking-[-0.055em] text-[#F7F0E7]">
              Begin your calm strength practice
            </h2>
            <p className="corelab-cta-desc mt-7 max-w-xl text-lg leading-8 text-white/68">
              Join a studio class designed to help you move better, breathe
              deeper, and build strength with care.
            </p>
            <CoreButton
              href="mailto:hello@corelabpilates.example"
              className="mt-9"
            >
              Book a Class
            </CoreButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="corelab-footer bg-[#373330] px-5 pb-8 pt-14 text-white transition-colors duration-300 lg:px-10">
        <div className="mx-auto max-w-[92rem]">
          <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-start">
            <div>
              <CoreLogo light />
              <p className="corelab-footer-desc mt-5 max-w-sm text-sm leading-7 text-white/45">
                Calm studio classes for mindful strength and balanced movement.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="corelab-footer-link text-sm text-white/50 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
            <div>
              <p className="corelab-footer-social-title text-[0.58rem] font-black uppercase tracking-[0.18em] text-white/35">
                Follow the studio
              </p>
              <div className="mt-4 flex gap-2">
                {["IG", "PN", "YT"].map((social) => (
                  <a
                    key={social}
                    href="#contact"
                    aria-label={`${social} social placeholder`}
                    className="corelab-social-btn grid h-10 w-10 place-items-center rounded-full border border-white/15 text-[0.6rem] font-black hover:border-[#D69A84]"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <p className="corelab-copyright pt-7 text-[0.65rem] text-white/28">
            © 2026 CoreLab Pilates. Class schedules, memberships, pricing, and
            availability are subject to change.
          </p>
        </div>
      </footer>
    </main>
  );
}
