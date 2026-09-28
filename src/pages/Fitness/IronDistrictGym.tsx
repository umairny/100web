import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  ClipboardCheck,
  Dumbbell,
  Hammer,
  Menu,
  MoveUpRight,
  ShieldCheck,
  Target,
  Weight,
  X,
  Zap,
} from "lucide-react";
import heroImage from "../../assets/optimized/fitness/IronDistrict/hero.webp";
import powerliftingImage from "../../assets/optimized/fitness/IronDistrict/powerlifting.webp";
import foundationsImage from "../../assets/optimized/fitness/IronDistrict/strength-foundations.webp";
import athleticImage from "../../assets/optimized/fitness/IronDistrict/athletic-performance.webp";
import openGymImage from "../../assets/optimized/fitness/IronDistrict/open-gym.webp";
import facilityImage from "../../assets/optimized/fitness/IronDistrict/facility.webp";
import coachingImage from "../../assets/optimized/fitness/IronDistrict/coaching.webp";
import formImage from "../../assets/optimized/fitness/IronDistrict/form-check.webp";
import programmingImage from "../../assets/optimized/fitness/IronDistrict/strength-programming.webp";
import groupImage from "../../assets/optimized/fitness/IronDistrict/small-group-training.webp";
import membershipImage from "../../assets/optimized/fitness/IronDistrict/membershitp.webp";
import cultureImage from "../../assets/optimized/fitness/IronDistrict/culture.webp";
import abstractImage from "../../assets/optimized/fitness/IronDistrict/iron-abstract-bg.webp";
import ctaImage from "../../assets/optimized/fitness/IronDistrict/cta.webp";

const navLinks = [
  ["Training", "#training"],
  ["Facility", "#facility"],
  ["Coaching", "#coaching"],
  ["Membership", "#membership"],
  ["Contact", "#contact"],
];

const programs = [
  {
    image: powerliftingImage,
    number: "01",
    title: "Powerlifting",
    text: "Squat, bench, and deadlift training built around technique, progression, and measurable strength.",
  },
  {
    image: foundationsImage,
    number: "02",
    title: "Strength Foundations",
    text: "Learn proper form, build confidence under the bar, and train with structure.",
  },
  {
    image: athleticImage,
    number: "03",
    title: "Athletic Performance",
    text: "Develop explosive power, conditioning, and durability for sport and everyday performance.",
  },
  {
    image: openGymImage,
    number: "04",
    title: "Open Gym",
    text: "Train independently with serious equipment, strong community standards, and no distractions.",
  },
];

const coaching = [
  {
    image: formImage,
    number: "01",
    title: "Form Check Sessions",
    text: "Get expert feedback on technique, setup, bracing, and movement quality.",
  },
  {
    image: programmingImage,
    number: "02",
    title: "Strength Programming",
    text: "Follow structured plans designed around progression, recovery, and consistency.",
  },
  {
    image: groupImage,
    number: "03",
    title: "Small Group Training",
    text: "Train with focused instruction, accountability, and a serious lifting community.",
  },
];

const memberships = [
  {
    name: "Basic Iron",
    price: "$69",
    text: "For independent lifters who need access to serious equipment.",
    features: ["Open gym access", "Strength zones", "Locker access"],
    popular: false,
  },
  {
    name: "District Strength",
    price: "$119",
    text: "For members who want structure and coaching support.",
    features: ["Open gym access", "Monthly form check", "Program guidance"],
    popular: true,
  },
  {
    name: "Elite Barbell",
    price: "$229",
    text: "For serious lifters who want full performance programming.",
    features: [
      "Custom strength plan",
      "Weekly coaching",
      "Priority platform access",
    ],
    popular: false,
  },
];

function IronButton({
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
          ? "irondistrict-btn-outline border border-white/25 bg-white/[0.03] text-white hover:border-[#F6C945] hover:text-[#F6C945]"
          : "irondistrict-btn-solid bg-[#F6C945] text-[#0A0B0D] shadow-[7px_7px_0_rgba(255,255,255,.1)] hover:bg-[#ffda62]"
      } ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function IronHeading({
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
      <p className="irondistrict-heading-label flex items-center gap-3 text-[0.62rem] font-black uppercase tracking-[0.25em] text-[#D89A2B] before:h-1 before:w-9 before:bg-[#F6C945]">
        {label}
      </p>
      <h2
        className={`irondistrict-heading-title mt-5 text-[clamp(2.15rem,5.5vw,6.5rem)] font-black uppercase leading-[0.86] tracking-[-0.075em] ${
          light ? "irondistrict-title-light text-white" : "irondistrict-title-dark text-[#111318]"
        }`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`irondistrict-heading-text mt-6 max-w-2xl text-base leading-8 md:text-lg ${
            light ? "irondistrict-body-light text-white/52" : "irondistrict-body-dark text-[#646970]"
          }`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function IronLogo() {
  return (
    <a
      href="#home"
      className="irondistrict-logo-link flex items-center gap-3 text-white"
      aria-label="IronDistrict Gym home"
    >
      <span className="irondistrict-logo-box relative grid h-11 w-11 place-items-center border-2 border-[#F6C945] text-[#F6C945]">
        <Weight className="h-5 w-5" />
        <span className="irondistrict-logo-pip absolute -bottom-1 -right-1 h-2.5 w-2.5 bg-[#F6C945]" />
      </span>
      <span>
        <strong className="irondistrict-logo-brand block text-base font-black uppercase leading-none tracking-[-0.02em]">
          IronDistrict
        </strong>
        <span className="irondistrict-logo-sub mt-1 block text-[0.5rem] font-black uppercase tracking-[0.26em] text-white/38">
          Strength Facility
        </span>
      </span>
    </a>
  );
}

export function IronDistrictGym() {
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
        "training",
        "facility",
        "coaching",
        "membership",
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
    <main className="irondistrict-site w-full max-w-full overflow-x-hidden bg-[#C9CDD1] text-[#111318] selection:bg-[#F6C945] selection:text-[#0A0B0D]">
      <style>{`
        .irondistrict-site {
          /* Core Theme Accent Tokens */
          --id-accent: #F6C945;
          --id-accent-hover: #ffda62;
          --id-accent-sec: #D89A2B;
          --id-accent-sec-hover: #b87f1e;
          --id-accent-glow: rgba(246, 201, 69, 0.25);
          --id-contrast: #0A0B0D;
          --id-contrast-sec: #ffffff;

          /* Surfaces - Industrial Default */
          --id-bg-base: #C9CDD1;
          --id-bg-hero: #0A0B0D;
          --id-bg-hero-stat: rgba(10, 11, 13, 0.88);
          --id-bg-training: #E1E3E5;
          --id-bg-facility: #111318;
          --id-bg-coaching: #E1E3E5;
          --id-bg-coaching-card: #C9CDD1;
          --id-bg-membership: #0A0B0D;
          --id-bg-membership-card: #17191D;
          --id-bg-culture: #23262B;
          --id-bg-culture-card: rgba(0, 0, 0, 0.30);
          --id-bg-testimonials: #C9CDD1;
          --id-bg-testimonial-card: #B9BEC3;
          --id-bg-contact: #0A0B0D;
          --id-bg-footer: #07080A;

          /* Typography & Lines */
          --id-text-primary: #111318;
          --id-text-muted: #555B62;
          --id-text-faint: #7A818A;
          --id-border: #8D9297;
          --id-border-subtle: rgba(255, 255, 255, 0.12);

          /* Header Tokens */
          --id-header-bg: rgba(10, 11, 13, 0.95);
          --id-header-border: rgba(255, 255, 255, 0.10);
          --id-header-text: #FFFFFF;
          --id-header-nav-link: rgba(255, 255, 255, 0.60);
          --id-header-nav-hover: #FFFFFF;
        }

        /* ------------------------------------------------------------ */
        /* DYNAMIC THEME PRESET ADAPTATION                              */
        /* ------------------------------------------------------------ */
        [data-theme-preset]:not([data-theme-preset="original"]) .irondistrict-site,
        [data-theme-active="true"]:not([data-theme-preset="original"]) .irondistrict-site {
          --id-accent: var(--theme-accent-primary, #F6C945) !important;
          --id-accent-hover: var(--theme-accent-primary-hover, #ffda62) !important;
          --id-accent-sec: var(--theme-accent-secondary, #D89A2B) !important;
          --id-accent-sec-hover: var(--theme-accent-secondary-hover, #b87f1e) !important;
          --id-accent-glow: var(--theme-accent-glow, rgba(246, 201, 69, 0.25)) !important;
          --id-contrast: var(--theme-accent-contrast, #0A0B0D) !important;
        }

        /* ------------------------------------------------------------ */
        /* LIGHT MOOD - HIGH-CONTRAST METALLIC INDUSTRIAL STRENGTH     */
        /* ------------------------------------------------------------ */
        [data-theme-mood="light"] .irondistrict-site,
        :root.light .irondistrict-site,
        html.light .irondistrict-site {
          --id-bg-base: #F0F3F6 !important;
          --id-bg-hero: #F7F9FB !important;
          --id-bg-hero-stat: #FFFFFF !important;
          --id-bg-training: #E8ECEF !important;
          --id-bg-facility: #FFFFFF !important;
          --id-bg-coaching: #E8ECEF !important;
          --id-bg-coaching-card: #FFFFFF !important;
          --id-bg-membership: #F7F9FA !important;
          --id-bg-membership-card: #FFFFFF !important;
          --id-bg-culture: #E4E8EC !important;
          --id-bg-culture-card: rgba(255, 255, 255, 0.85) !important;
          --id-bg-testimonials: #E8ECEF !important;
          --id-bg-testimonial-card: #FFFFFF !important;
          --id-bg-contact: #0E1015 !important;
          --id-bg-footer: #0A0B0D !important;

          --id-text-primary: #111318 !important;
          --id-text-muted: #4B525B !important;
          --id-text-faint: #6E7782 !important;
          --id-border: rgba(0, 0, 0, 0.12) !important;
          --id-border-subtle: rgba(0, 0, 0, 0.07) !important;

          --id-header-bg: rgba(255, 255, 255, 0.94) !important;
          --id-header-border: rgba(0, 0, 0, 0.10) !important;
          --id-header-text: #111318 !important;
          --id-header-nav-link: #555B62 !important;
          --id-header-nav-hover: #111318 !important;

          background-color: var(--id-bg-base) !important;
          color: var(--id-text-primary) !important;
        }

        /* ------------------------------------------------------------ */
        /* DARK MOOD - DEEP OBSIDIAN & CARBON FIBER INDUSTRIAL          */
        /* ------------------------------------------------------------ */
        html.dark .irondistrict-site,
        body.dark .irondistrict-site,
        [data-theme-mood="dark"] .irondistrict-site,
        :root[data-theme-mood="dark"] .irondistrict-site,
        :root[data-theme-active="true"][data-theme-mood="dark"] .irondistrict-site,
        :root.dark .irondistrict-site {
          --id-bg-base: #0A0B0D !important;
          --id-bg-hero: #0A0B0D !important;
          --id-bg-hero-stat: rgba(17, 19, 24, 0.90) !important;
          --id-bg-training: #12141A !important;
          --id-bg-facility: #0D0E12 !important;
          --id-bg-coaching: #12141A !important;
          --id-bg-coaching-card: #181B23 !important;
          --id-bg-membership: #0A0B0D !important;
          --id-bg-membership-card: #15181F !important;
          --id-bg-culture: #101217 !important;
          --id-bg-culture-card: rgba(17, 19, 24, 0.65) !important;
          --id-bg-testimonials: #12141A !important;
          --id-bg-testimonial-card: #181B23 !important;
          --id-bg-contact: #08090B !important;
          --id-bg-footer: #060708 !important;

          --id-text-primary: #F0F2F5 !important;
          --id-text-muted: #8E96A0 !important;
          --id-text-faint: #636B75 !important;
          --id-border: rgba(255, 255, 255, 0.12) !important;
          --id-border-subtle: rgba(255, 255, 255, 0.08) !important;

          --id-header-bg: rgba(10, 11, 13, 0.95) !important;
          --id-header-border: rgba(255, 255, 255, 0.10) !important;
          --id-header-text: #FFFFFF !important;
          --id-header-nav-link: rgba(255, 255, 255, 0.60) !important;
          --id-header-nav-hover: #FFFFFF !important;

          background-color: var(--id-bg-base) !important;
          color: var(--id-text-primary) !important;
        }

        /* ------------------------------------------------------------ */
        /* CUSTOM BACKGROUND MODE                                       */
        /* ------------------------------------------------------------ */
        [data-theme-bg-mode="custom"] .irondistrict-site {
          --id-bg-base: var(--theme-bg-base, #0A0B0D) !important;
          --id-bg-hero: var(--theme-bg-base, #0A0B0D) !important;
          --id-bg-hero-stat: var(--theme-bg-card, #17191D) !important;
          --id-bg-training: var(--theme-bg-surface, #111318) !important;
          --id-bg-facility: var(--theme-bg-base, #0A0B0D) !important;
          --id-bg-coaching: var(--theme-bg-surface, #111318) !important;
          --id-bg-coaching-card: var(--theme-bg-card, #17191D) !important;
          --id-bg-membership: var(--theme-bg-base, #0A0B0D) !important;
          --id-bg-membership-card: var(--theme-bg-card, #17191D) !important;
          --id-bg-culture: var(--theme-bg-surface, #111318) !important;
          --id-bg-culture-card: var(--theme-bg-card, #17191D) !important;
          --id-bg-testimonials: var(--theme-bg-surface, #111318) !important;
          --id-bg-testimonial-card: var(--theme-bg-card, #17191D) !important;
          --id-text-primary: var(--theme-text-primary, #F0F2F5) !important;
          --id-text-muted: var(--theme-text-secondary, #8E96A0) !important;
          --id-border: var(--theme-border, rgba(255, 255, 255, 0.12)) !important;
          background-color: var(--id-bg-base) !important;
          color: var(--id-text-primary) !important;
        }

        /* ------------------------------------------------------------ */
        /* SECTION & COMPONENT THEME HOOKS                              */
        /* ------------------------------------------------------------ */

        /* Buttons */
        .irondistrict-site .irondistrict-btn-solid {
          background-color: var(--id-accent) !important;
          color: var(--id-contrast) !important;
          box-shadow: 7px 7px 0 rgba(255, 255, 255, 0.12) !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-btn-solid,
        :root.light .irondistrict-site .irondistrict-btn-solid {
          box-shadow: 7px 7px 0 rgba(0, 0, 0, 0.14) !important;
        }
        .irondistrict-site .irondistrict-btn-solid:hover {
          background-color: var(--id-accent-hover) !important;
          color: var(--id-contrast) !important;
        }
        .irondistrict-site .irondistrict-btn-outline:hover {
          border-color: var(--id-accent) !important;
          color: var(--id-accent) !important;
        }

        /* Navigation */
        .irondistrict-site .irondistrict-header {
          background-color: var(--id-header-bg) !important;
          border-color: var(--id-header-border) !important;
        }
        .irondistrict-site .irondistrict-logo-brand {
          color: var(--id-header-text) !important;
        }
        .irondistrict-site .irondistrict-logo-sub {
          color: var(--id-header-nav-link) !important;
        }
        .irondistrict-site .irondistrict-nav-link {
          color: var(--id-header-nav-link) !important;
        }
        .irondistrict-site .irondistrict-nav-link:hover {
          color: var(--id-header-nav-hover) !important;
        }
        .irondistrict-site .irondistrict-nav-active {
          background-color: var(--id-accent) !important;
          color: var(--id-contrast) !important;
        }
        .irondistrict-site .irondistrict-menu-toggle {
          border-color: var(--id-header-border) !important;
          color: var(--id-header-text) !important;
        }
        .irondistrict-site .irondistrict-mobile-nav {
          background-color: var(--id-header-bg) !important;
          border-color: var(--id-header-border) !important;
        }
        .irondistrict-site .irondistrict-mobile-link {
          color: var(--id-header-nav-link) !important;
        }
        .irondistrict-site .irondistrict-mobile-link:hover {
          color: var(--id-accent) !important;
        }

        /* Logo icon */
        .irondistrict-site .irondistrict-logo-box {
          border-color: var(--id-accent) !important;
          color: var(--id-accent) !important;
        }
        .irondistrict-site .irondistrict-logo-pip {
          background-color: var(--id-accent) !important;
        }

        /* Accents & Tags */
        .irondistrict-site .irondistrict-accent-text {
          color: var(--id-accent) !important;
        }
        .irondistrict-site .irondistrict-accent-sec-text {
          color: var(--id-accent-sec) !important;
        }
        .irondistrict-site .irondistrict-accent-bg {
          background-color: var(--id-accent) !important;
          color: var(--id-contrast) !important;
        }
        .irondistrict-site .irondistrict-accent-sec-bg {
          background-color: var(--id-accent-sec) !important;
          color: var(--id-contrast-sec) !important;
        }
        .irondistrict-site .irondistrict-accent-border {
          border-color: var(--id-accent) !important;
        }
        .irondistrict-site .irondistrict-heading-label::before {
          background-color: var(--id-accent) !important;
        }
        .irondistrict-site .irondistrict-heading-label {
          color: var(--id-accent-sec) !important;
        }

        /* Hero Section */
        .irondistrict-site .irondistrict-hero-section {
          background-color: var(--id-bg-hero) !important;
        }
        .irondistrict-site .irondistrict-hero-overlay {
          background: radial-gradient(circle at 72% 32%, var(--id-accent-glow), transparent 28%),
                      linear-gradient(90deg, rgba(10,11,13,0.98) 0%, rgba(10,11,13,0.86) 48%, rgba(10,11,13,0.42) 100%) !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-hero-overlay,
        :root.light .irondistrict-site .irondistrict-hero-overlay {
          background: radial-gradient(circle at 72% 32%, var(--id-accent-glow), transparent 32%),
                      linear-gradient(90deg, rgba(247,249,251,0.98) 0%, rgba(247,249,251,0.88) 48%, rgba(247,249,251,0.42) 100%) !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-hero-title,
        :root.light .irondistrict-site .irondistrict-hero-title {
          color: #111318 !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-hero-desc,
        :root.light .irondistrict-site .irondistrict-hero-desc {
          color: #4B525B !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-hero-pill,
        :root.light .irondistrict-site .irondistrict-hero-pill {
          background-color: rgba(0, 0, 0, 0.04) !important;
          border-color: rgba(0, 0, 0, 0.12) !important;
          color: #33373D !important;
        }
        .irondistrict-site .irondistrict-hero-stat {
          background-color: var(--id-bg-hero-stat) !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-hero-stat,
        :root.light .irondistrict-site .irondistrict-hero-stat {
          border: 1px solid rgba(0, 0, 0, 0.08) !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-hero-stat-label,
        :root.light .irondistrict-site .irondistrict-hero-stat-label {
          color: #555B62 !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-hero-card,
        :root.light .irondistrict-site .irondistrict-hero-card {
          background-color: #FFFFFF !important;
          border-color: rgba(0, 0, 0, 0.12) !important;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06) !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-hero-card-title,
        :root.light .irondistrict-site .irondistrict-hero-card-title {
          color: #111318 !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-hero-card-header,
        :root.light .irondistrict-site .irondistrict-hero-card-header {
          border-color: rgba(0, 0, 0, 0.08) !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-hero-check,
        :root.light .irondistrict-site .irondistrict-hero-check {
          border-color: rgba(0, 0, 0, 0.08) !important;
          color: #33373D !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-hero-grid,
        :root.light .irondistrict-site .irondistrict-hero-grid {
          background-image: linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px),
                            linear-gradient(0deg, rgba(0,0,0,0.06) 1px, transparent 1px) !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-btn-outline,
        :root.light .irondistrict-site .irondistrict-btn-outline {
          border-color: rgba(0, 0, 0, 0.20) !important;
          background-color: rgba(0, 0, 0, 0.03) !important;
          color: #111318 !important;
        }

        /* Training Section */
        .irondistrict-site .irondistrict-section-training {
          background-color: var(--id-bg-training) !important;
        }
        .irondistrict-site .irondistrict-training-row {
          border-color: var(--id-border) !important;
        }
        .irondistrict-site .irondistrict-training-title {
          color: var(--id-text-primary) !important;
        }
        .irondistrict-site .irondistrict-training-text {
          color: var(--id-text-muted) !important;
        }
        .irondistrict-site .irondistrict-action-btn {
          border-color: var(--id-border) !important;
          color: var(--id-text-primary) !important;
        }
        .irondistrict-site .irondistrict-action-btn:hover {
          background-color: var(--id-accent) !important;
          border-color: var(--id-accent) !important;
          color: var(--id-contrast) !important;
        }

        /* Facility Section */
        .irondistrict-site .irondistrict-section-facility {
          background-color: var(--id-bg-facility) !important;
        }
        .irondistrict-site .irondistrict-facility-card {
          background-color: var(--id-bg-hero-stat) !important;
          border-color: var(--id-border) !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-section-facility .irondistrict-title-light,
        :root.light .irondistrict-site .irondistrict-section-facility .irondistrict-title-light {
          color: #111318 !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-section-facility .irondistrict-body-light,
        :root.light .irondistrict-site .irondistrict-section-facility .irondistrict-body-light {
          color: #4B525B !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-facility-card,
        :root.light .irondistrict-site .irondistrict-facility-card {
          background-color: #F4F6F8 !important;
          border-color: rgba(0, 0, 0, 0.10) !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-facility-title,
        :root.light .irondistrict-site .irondistrict-facility-title {
          color: #111318 !important;
        }

        /* Coaching Section */
        .irondistrict-site .irondistrict-section-coaching {
          background-color: var(--id-bg-coaching) !important;
        }
        .irondistrict-site .irondistrict-coaching-card {
          background-color: var(--id-bg-coaching-card) !important;
          border-color: var(--id-border) !important;
        }
        .irondistrict-site .irondistrict-coaching-num {
          color: var(--id-text-faint) !important;
        }
        .irondistrict-site .irondistrict-coaching-title {
          color: var(--id-text-primary) !important;
        }
        .irondistrict-site .irondistrict-coaching-desc {
          color: var(--id-text-muted) !important;
        }

        /* Membership Section */
        .irondistrict-site .irondistrict-section-membership {
          background-color: var(--id-bg-membership) !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-section-membership .irondistrict-title-light,
        :root.light .irondistrict-site .irondistrict-section-membership .irondistrict-title-light {
          color: #111318 !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-section-membership .irondistrict-body-light,
        :root.light .irondistrict-site .irondistrict-section-membership .irondistrict-body-light {
          color: #4B525B !important;
        }
        .irondistrict-site .irondistrict-plan-normal {
          background-color: var(--id-bg-membership-card) !important;
          border-color: var(--id-border) !important;
        }
        .irondistrict-site .irondistrict-plan-normal .irondistrict-plan-name {
          color: var(--id-text-primary) !important;
        }
        .irondistrict-site .irondistrict-plan-normal .irondistrict-plan-price {
          color: var(--id-text-primary) !important;
        }
        .irondistrict-site .irondistrict-plan-normal .irondistrict-plan-cadence {
          color: var(--id-text-faint) !important;
        }
        .irondistrict-site .irondistrict-plan-normal .irondistrict-plan-desc {
          color: var(--id-text-muted) !important;
        }
        .irondistrict-site .irondistrict-plan-normal .irondistrict-plan-features {
          border-color: var(--id-border) !important;
          color: var(--id-text-primary) !important;
        }
        .irondistrict-site .irondistrict-plan-popular {
          background-color: var(--id-accent) !important;
          border-color: var(--id-accent) !important;
          color: var(--id-contrast) !important;
          box-shadow: 12px 12px 0 var(--id-accent-glow) !important;
        }
        .irondistrict-site .irondistrict-plan-popular-badge {
          background-color: #0A0B0D !important;
          color: var(--id-accent) !important;
        }

        /* Results & Culture Section */
        .irondistrict-site .irondistrict-section-culture {
          background-color: var(--id-bg-culture) !important;
        }
        .irondistrict-site .irondistrict-culture-card {
          background-color: var(--id-bg-culture-card) !important;
          border-color: var(--id-border) !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-section-culture .irondistrict-title-light,
        :root.light .irondistrict-site .irondistrict-section-culture .irondistrict-title-light {
          color: #111318 !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-section-culture .irondistrict-body-light,
        :root.light .irondistrict-site .irondistrict-section-culture .irondistrict-body-light {
          color: #4B525B !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-culture-card,
        :root.light .irondistrict-site .irondistrict-culture-card {
          background-color: #FFFFFF !important;
          border-color: rgba(0, 0, 0, 0.10) !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-culture-title,
        :root.light .irondistrict-site .irondistrict-culture-title {
          color: #111318 !important;
        }
        .irondistrict-site .irondistrict-culture-overlay {
          background: linear-gradient(90deg, rgba(17,19,24,0.92) 0%, rgba(17,19,24,0.80) 50%, rgba(17,19,24,0.40) 100%) !important;
        }
        [data-theme-mood="light"] .irondistrict-site .irondistrict-culture-overlay,
        :root.light .irondistrict-site .irondistrict-culture-overlay {
          background: linear-gradient(90deg, rgba(228,232,236,0.95) 0%, rgba(228,232,236,0.85) 50%, rgba(228,232,236,0.40) 100%) !important;
        }

        /* Member Log / Testimonials */
        .irondistrict-site .irondistrict-section-testimonials {
          background-color: var(--id-bg-testimonials) !important;
        }
        .irondistrict-site .irondistrict-testimonial-card {
          background-color: var(--id-bg-testimonial-card) !important;
          border-color: var(--id-border) !important;
        }
        .irondistrict-site .irondistrict-testimonial-quote {
          color: var(--id-text-primary) !important;
        }
        .irondistrict-site .irondistrict-testimonial-footer {
          border-color: var(--id-border) !important;
        }
        .irondistrict-site .irondistrict-testimonial-name {
          color: var(--id-text-primary) !important;
        }
        .irondistrict-site .irondistrict-testimonial-role {
          color: var(--id-text-faint) !important;
        }
        .irondistrict-site .irondistrict-testimonial-badge {
          background-color: var(--id-text-primary) !important;
          color: var(--id-accent) !important;
        }
        html.dark .irondistrict-site .irondistrict-testimonial-badge,
        [data-theme-mood="dark"] .irondistrict-site .irondistrict-testimonial-badge,
        :root.dark .irondistrict-site .irondistrict-testimonial-badge {
          background-color: rgba(255, 255, 255, 0.10) !important;
        }

        /* Contact & Footer */
        .irondistrict-site .irondistrict-section-contact {
          background-color: var(--id-bg-contact) !important;
        }
        .irondistrict-site .irondistrict-footer {
          background-color: var(--id-bg-footer) !important;
        }
        .irondistrict-site .irondistrict-footer-link {
          color: rgba(255, 255, 255, 0.45) !important;
        }
        .irondistrict-site .irondistrict-footer-link:hover {
          color: var(--id-accent) !important;
        }
        .irondistrict-site .irondistrict-footer-social {
          border-color: rgba(255, 255, 255, 0.15) !important;
          color: rgba(255, 255, 255, 0.65) !important;
        }
        .irondistrict-site .irondistrict-footer-social:hover {
          border-color: var(--id-accent) !important;
          color: var(--id-accent) !important;
        }
      `}</style>

      <header className="irondistrict-header fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0A0B0D]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[4.75rem] max-w-[96rem] items-center justify-between px-5 lg:px-10">
          <IronLogo />
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="IronDistrict navigation"
          >
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  className={`irondistrict-nav-link px-4 py-2 text-[0.64rem] font-black uppercase tracking-[0.14em] transition ${active ? "irondistrict-nav-active bg-[#F6C945] text-[#0A0B0D]" : "text-white/50 hover:bg-white/[0.06] hover:text-white"}`}
                >
                  {label}
                </a>
              );
            })}
          </nav>
          {/* Desktop-Only District CTA (Isolated from mobile viewports) */}
          <div className="hidden lg:block">
            <IronButton href="#contact">
              Join The District
            </IronButton>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="irondistrict-menu-toggle grid h-11 w-11 place-items-center border border-white/15 text-white transition active:scale-95 hover:border-[#F6C945] lg:hidden"
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
              className="fixed inset-0 top-[4.75rem] z-40 bg-black/75 backdrop-blur-xs lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <nav className="irondistrict-mobile-nav fixed inset-x-0 top-[4.75rem] z-50 border-b border-white/10 bg-[#0A0B0D]/98 px-5 py-5 shadow-2xl backdrop-blur-2xl lg:hidden">
              <div className="space-y-1">
                {navLinks.map(([label, href]) => {
                  const active = activeSection === href.slice(1);
                  return (
                    <a
                      key={label}
                      href={href}
                      aria-current={active ? "location" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`irondistrict-mobile-link flex items-center justify-between px-4 py-3 text-sm font-black uppercase tracking-[0.1em] transition ${
                        active
                          ? "irondistrict-nav-active bg-[#F6C945] text-[#0A0B0D] font-black"
                          : "text-white/65 hover:bg-white/[0.06] hover:text-[#F6C945]"
                      }`}
                    >
                      <span>{label}</span>
                      <span className="irondistrict-accent-text text-xs text-[#F6C945]">→</span>
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
        className="irondistrict-hero-section relative isolate overflow-hidden bg-[#0A0B0D] pt-[4.75rem] text-white"
      >
        <img
          src={heroImage}
          alt="Heavy strength training inside IronDistrict Gym"
          className="absolute inset-0 h-full w-full object-cover opacity-55 grayscale-[45%] contrast-125"
        />
        <img
          src={abstractImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-20 mix-blend-screen"
        />
        <div className="irondistrict-hero-overlay absolute inset-0 bg-[radial-gradient(circle_at_72%_32%,rgba(246,201,69,.22),transparent_28%),linear-gradient(90deg,rgba(10,11,13,.98)_0%,rgba(10,11,13,.86)_48%,rgba(10,11,13,.42)_100%)]" />
        <div className="irondistrict-hero-grid absolute inset-0 opacity-[0.13] [background-image:linear-gradient(90deg,white_1px,transparent_1px),linear-gradient(0deg,white_1px,transparent_1px)] [background-size:7rem_7rem]" />
        <div className="relative mx-auto min-h-[55rem] max-w-[100rem] px-5 py-12 lg:px-10 lg:py-16 xl:px-16">
          <div className="grid min-h-[46rem] gap-8 lg:grid-cols-[1fr_26rem] lg:items-stretch">
            <div className="flex flex-col justify-between">
              <div className="flex max-w-2xl flex-wrap items-center gap-3">
                <span className="irondistrict-accent-bg bg-[#F6C945] px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#0A0B0D]">
                  Strength Facility
                </span>
                <span className="irondistrict-hero-pill border border-white/18 bg-white/[0.05] px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.18em] text-white/62">
                  Est. 2018
                </span>
                <span className="irondistrict-hero-pill border border-white/18 bg-white/[0.05] px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.18em] text-white/62">
                  Open gym + coaching
                </span>
              </div>
              <div className="max-w-6xl py-12">
                <p className="irondistrict-accent-text mb-7 flex items-center gap-3 text-[0.62rem] font-black uppercase tracking-[0.24em] text-[#F6C945]">
                  <span className="irondistrict-accent-bg h-px w-12 bg-[#F6C945]" /> IronDistrict Gym
                </p>
                <h1 className="irondistrict-hero-title max-w-6xl text-[clamp(2.4rem,10.5vw,12.5rem)] font-black uppercase leading-[0.8] tracking-[-0.09em]">
                  Train where the bar sets the tone.
                </h1>
                <div className="irondistrict-accent-border mt-9 grid max-w-4xl gap-6 border-l-4 border-[#F6C945] pl-6 md:grid-cols-[1fr_auto] md:items-end">
                  <p className="irondistrict-hero-desc text-lg font-semibold leading-8 text-white/64">
                    A hard-edged strength facility with elite equipment, direct
                    coaching, and a room built for lifters who show up ready to
                    work.
                  </p>
                  <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
                    <IronButton href="#contact">Start Training</IronButton>
                    <a
                      href="#membership"
                      className="irondistrict-btn-outline inline-flex min-h-12 items-center justify-center gap-3 border border-white/25 bg-white/[0.03] px-6 text-xs font-black uppercase tracking-[0.16em] transition hover:border-[#F6C945] hover:text-[#F6C945]"
                    >
                      View Memberships <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="grid max-w-4xl grid-cols-2 gap-px bg-white/14 p-px sm:grid-cols-4">
                {[
                  ["24", "Strength stations"],
                  ["COMP", "Powerlifting ready"],
                  ["COACH", "Led programs"],
                  ["OPEN", "Gym access"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="irondistrict-hero-stat bg-[#0A0B0D]/88 p-5 backdrop-blur"
                  >
                    <p className="irondistrict-accent-text text-3xl font-black text-[#F6C945]">
                      {value}
                    </p>
                    <p className="irondistrict-hero-stat-label mt-2 text-[0.55rem] font-black uppercase tracking-[0.16em] text-white/48">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <aside className="grid gap-4 lg:grid-rows-[1fr_auto]">
              <div className="irondistrict-hero-card relative overflow-hidden border border-white/16 bg-white/[0.06] p-5 backdrop-blur-md">
                <div className="irondistrict-hero-card-header flex items-center justify-between border-b border-white/12 pb-4">
                  <p className="irondistrict-hero-stat-label text-[0.58rem] font-black uppercase tracking-[0.18em] text-white/46">
                    Floor status
                  </p>
                  <span className="irondistrict-accent-bg h-3 w-3 bg-[#F6C945]" />
                </div>
                <p className="irondistrict-hero-card-title mt-10 text-5xl font-black uppercase leading-[0.82] tracking-[-0.08em]">
                  No mirrors. No posing. Just work.
                </p>
                <div className="mt-10 grid gap-3">
                  {[
                    "Technique-first coaching",
                    "Heavy racks and platforms",
                    "Focused member culture",
                  ].map((item) => (
                    <span
                      key={item}
                      className="irondistrict-hero-check flex items-center gap-3 border-t border-white/10 pt-3 text-xs font-black uppercase tracking-[0.12em] text-white/58"
                    >
                      <Check className="irondistrict-accent-text h-4 w-4 text-[#F6C945]" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="irondistrict-accent-bg grid grid-cols-[auto_1fr] overflow-hidden border border-[#F6C945]/45 bg-[#F6C945] text-[#0A0B0D]">
                <span className="grid place-items-center border-r border-black/20 px-4 text-[0.58rem] font-black uppercase tracking-[0.18em] [writing-mode:vertical-rl]">
                  District Standard
                </span>
                <div className="p-5">
                  <p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-black/50">
                    Today's rule
                  </p>
                  <p className="mt-3 text-2xl font-black uppercase leading-none tracking-[-0.04em]">
                    Earn every plate.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section
        id="training"
        className="irondistrict-section-training px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[96rem]">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <IronHeading
              label="Training programs"
              title="Strength training with purpose"
              text="Every lane is built around deliberate work, quality reps, and progression you can explain."
            />
            <p className="irondistrict-accent-border irondistrict-training-text max-w-xl border-l-4 border-[#F6C945] pl-5 text-sm leading-7 text-[#555B62]">
              Four training lanes. One rule: every session should have a reason.
            </p>
          </div>
          <div className="irondistrict-training-row mt-14 border-y-2 border-[#0A0B0D]">
            {programs.map((program) => (
              <article
                key={program.title}
                className="irondistrict-training-row group grid gap-5 border-b border-[#8D9297] py-5 last:border-b-0 md:grid-cols-[4rem_.7fr_1fr_13rem_auto] md:items-center"
              >
                <span className="irondistrict-accent-sec-text text-3xl font-black text-[#8C7200]">
                  {program.number}
                </span>
                <h3 className="irondistrict-training-title text-3xl font-black uppercase leading-none tracking-[-0.055em]">
                  {program.title}
                </h3>
                <p className="irondistrict-training-text text-sm leading-7 text-[#555B62]">
                  {program.text}
                </p>
                <div className="relative hidden aspect-[16/9] overflow-hidden md:block">
                  <img
                    src={program.image}
                    alt={`${program.title} training`}
                    className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                  />
                </div>
                <a
                  href="#contact"
                  aria-label={`Explore ${program.title}`}
                  className="irondistrict-action-btn grid h-12 w-12 place-items-center border border-[#0A0B0D] transition group-hover:bg-[#F6C945] hover:border-[#F6C945]"
                >
                  <MoveUpRight className="h-5 w-5" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="facility"
        className="irondistrict-section-facility px-5 py-24 text-white lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center">
          <div className="relative overflow-hidden">
            <img
              src={facilityImage}
              alt="IronDistrict heavy racks and lifting platforms"
              className="min-h-[44rem] w-full object-cover grayscale-[20%]"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent p-7 pt-28">
              <p className="irondistrict-accent-text text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#F6C945]">
                The training floor
              </p>
              <p className="mt-2 text-3xl font-black uppercase text-white">
                Built to work. Kept in order.
              </p>
            </div>
          </div>
          <div>
            <IronHeading
              label="Facility"
              title="A facility built for serious lifters"
              text="Heavy racks and platforms, competition-grade barbells, dumbbells, machines, sleds, conditioning tools, and chalk-friendly zones—organized for focused work."
              light
            />
            <div className="mt-9 grid gap-3 sm:grid-cols-2">
              {[
                [Weight, "Heavy Platforms"],
                [Hammer, "Steel Racks"],
                [ClipboardCheck, "Coach Support"],
                [Zap, "Focused Atmosphere"],
              ].map(([Icon, title]) => {
                const FeatureIcon = Icon as typeof Weight;
                return (
                  <div
                    key={title as string}
                    className="irondistrict-facility-card border border-white/12 bg-white/[0.045] p-5"
                  >
                    <FeatureIcon className="irondistrict-accent-text h-5 w-5 text-[#F6C945]" />
                    <p className="irondistrict-facility-title mt-6 text-sm font-black uppercase tracking-[0.08em]">
                      {title as string}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="coaching"
        className="irondistrict-section-coaching px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[96rem]">
          <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <IronHeading
              label="Strength coaching"
              title="Coaching that keeps your training honest"
              text="Clear eyes on technique, programming that earns progression, and accountability that respects the work."
            />
            <img
              src={coachingImage}
              alt="IronDistrict coach supporting a strength session"
              className="hidden h-64 w-full object-cover grayscale lg:block"
            />
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {coaching.map((item) => (
              <article
                key={item.title}
                className="irondistrict-coaching-card iron-card group overflow-hidden border border-[#AEB3B8] bg-[#C9CDD1]"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover grayscale transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <span className="irondistrict-coaching-num absolute right-4 top-4 text-5xl font-black text-white/38">
                    {item.number}
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="irondistrict-coaching-title text-3xl font-black uppercase leading-none tracking-[-0.05em]">
                    {item.title}
                  </h3>
                  <p className="irondistrict-coaching-desc mt-4 text-sm leading-7 text-[#555B62]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="membership"
        className="irondistrict-section-membership relative px-5 py-24 text-white lg:px-10 lg:py-32"
      >
        <img
          src={membershipImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.07] grayscale"
        />
        <div className="relative mx-auto max-w-[96rem]">
          <IronHeading
            label="Membership"
            title="Pay for access. Earn the progress."
            text="Three levels of support for lifters who know how they want to work. Pricing and access may vary by schedule and location."
            light
          />
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {memberships.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col border p-7 ${
                  plan.popular
                    ? "irondistrict-plan-popular border-[#F6C945] bg-[#F6C945] text-[#0A0B0D] shadow-[12px_12px_0_rgba(255,255,255,.12)] lg:-translate-y-4"
                    : "irondistrict-plan-normal border-white/15 bg-[#17191D]"
                }`}
              >
                {plan.popular && (
                  <span className="irondistrict-plan-popular-badge absolute right-5 top-5 bg-[#0A0B0D] px-3 py-2 text-[0.58rem] font-black uppercase tracking-[0.14em] text-[#F6C945]">
                    Most Popular
                  </span>
                )}
                <p
                  className={`text-[0.6rem] font-black uppercase tracking-[0.18em] ${
                    plan.popular ? "text-[#5A4700]" : "irondistrict-accent-text text-[#F6C945]"
                  }`}
                >
                  District membership
                </p>
                <h3 className="irondistrict-plan-name mt-6 text-4xl font-black uppercase leading-none tracking-[-0.06em]">
                  {plan.name}
                </h3>
                <div className="mt-8 flex items-end gap-2">
                  <span className="irondistrict-plan-price text-6xl font-black tracking-[-0.08em]">
                    {plan.price}
                  </span>
                  <span
                    className={`irondistrict-plan-cadence pb-2 text-xs font-bold ${plan.popular ? "text-black/50" : "text-white/35"}`}
                  >
                    / month
                  </span>
                </div>
                <p
                  className={`irondistrict-plan-desc mt-5 text-sm leading-7 ${plan.popular ? "text-black/62" : "text-white/48"}`}
                >
                  {plan.text}
                </p>
                <div
                  className={`irondistrict-plan-features mt-6 grid gap-3 border-t pt-6 ${plan.popular ? "border-black/20" : "border-white/12"}`}
                >
                  {plan.features.map((feature) => (
                    <span
                      key={feature}
                      className="flex items-center gap-2 text-sm font-bold"
                    >
                      <Check
                        className={`h-4 w-4 ${plan.popular ? "text-black" : "irondistrict-accent-text text-[#F6C945]"}`}
                      />
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex min-h-12 items-center justify-center px-5 text-xs font-black uppercase tracking-[0.14em] transition ${
                    plan.popular
                      ? "bg-[#0A0B0D] text-white hover:bg-[#25282D]"
                      : "irondistrict-btn-solid bg-[#F6C945] text-[#0A0B0D] hover:bg-[#ffda62]"
                  }`}
                >
                  Choose {plan.name}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="irondistrict-section-culture relative px-5 py-24 text-white lg:px-10 lg:py-32">
        <img
          src={cultureImage}
          alt="IronDistrict members training in a focused environment"
          className="absolute inset-0 h-full w-full object-cover opacity-25 grayscale"
        />
        <div className="irondistrict-culture-overlay absolute inset-0 bg-gradient-to-r from-[#111318] via-[#111318]/92 to-[#111318]/55" />
        <div className="relative mx-auto max-w-[96rem]">
          <IronHeading
            label="Results & culture"
            title="No hype. Just work."
            text="IronDistrict is built for consistency, discipline, and measurable progress. Every rep has a reason. Every session has a purpose."
            light
          />
          <div className="mt-12 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [Dumbbell, "Stronger lifts"],
              [Target, "Better technique"],
              [ShieldCheck, "More discipline"],
              [BarChart3, "Clearer programming"],
            ].map(([Icon, title], index) => {
              const CultureIcon = Icon as typeof Dumbbell;
              return (
                <div
                  key={title as string}
                  className="irondistrict-culture-card border-b border-r border-white/15 bg-black/30 p-6"
                >
                  <span className="irondistrict-accent-text text-xs font-black text-[#F6C945]">
                    0{index + 1}
                  </span>
                  <CultureIcon className="irondistrict-accent-text mt-10 h-6 w-6 text-[#F6C945]" />
                  <h3 className="irondistrict-culture-title mt-5 text-xl font-black uppercase">
                    {title as string}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="irondistrict-section-testimonials px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[96rem]">
          <IronHeading
            label="Member log"
            title="The room changes how you train"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              [
                "Marcus T.",
                "My squat setup is more consistent now because the coaching is direct and specific. I know what to fix between sets.",
              ],
              [
                "Jalen R.",
                "The environment makes it easier to stick to a real routine. People come in ready to work, and that keeps me focused.",
              ],
              [
                "Casey M.",
                "I wanted serious equipment without the chaos. The floor is organized, the standards are clear, and training feels purposeful.",
              ],
            ].map(([name, quote], index) => (
              <blockquote
                key={name}
                className="irondistrict-testimonial-card border border-[#999FA5] bg-[#B9BEC3] p-7"
              >
                <span className="irondistrict-accent-sec-text text-5xl font-black text-[#8F7200]">“</span>
                <p className="irondistrict-testimonial-quote mt-4 text-lg font-semibold leading-8 text-[#292D32]">
                  {quote}
                </p>
                <footer className="irondistrict-testimonial-footer mt-8 flex items-center gap-3 border-t border-[#969CA2] pt-5">
                  <span className="irondistrict-testimonial-badge grid h-10 w-10 place-items-center bg-[#111318] text-xs font-black text-[#F6C945]">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="irondistrict-testimonial-name font-black uppercase">{name}</p>
                    <p className="irondistrict-testimonial-role text-xs text-[#62686E]">District member</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="irondistrict-section-contact relative px-5 py-28 text-white lg:px-10 lg:py-36"
      >
        <img
          src={ctaImage}
          alt="IronDistrict strength training floor"
          className="absolute inset-0 h-full w-full object-cover opacity-35 grayscale-[25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0D] via-[#0A0B0D]/90 to-[#0A0B0D]/35" />
        <div className="relative mx-auto max-w-[96rem]">
          <div className="max-w-5xl">
            <p className="irondistrict-accent-text text-[0.62rem] font-black uppercase tracking-[0.24em] text-[#F6C945]">
              The bar is loaded
            </p>
            <h2 className="mt-6 text-[clamp(2.4rem,7.5vw,8.8rem)] font-black uppercase leading-[0.82] tracking-[-0.08em] text-white">
              Step into the district.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/58">
              Join a gym built for heavy training, focused coaching, and members
              who take strength seriously.
            </p>
            <IronButton
              href="mailto:join@irondistrict.example"
              className="mt-9"
            >
              Join The Gym
            </IronButton>
          </div>
        </div>
      </section>

      <footer className="irondistrict-footer border-t border-white/10 px-5 pb-8 pt-14 text-white lg:px-10">
        <div className="mx-auto max-w-[96rem]">
          <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-start">
            <div>
              <IronLogo />
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/38">
                Hardcore strength training for serious lifters.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="irondistrict-footer-link text-xs font-black uppercase tracking-[0.13em] text-white/40 hover:text-[var(--id-accent)]"
                >
                  {label}
                </a>
              ))}
            </div>
            <div>
              <p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-white/30">
                District social
              </p>
              <div className="mt-4 flex gap-2">
                {["IG", "YT", "TK"].map((social) => (
                  <a
                    key={social}
                    href="#contact"
                    aria-label={`${social} social placeholder`}
                    className="irondistrict-footer-social grid h-10 w-10 place-items-center border border-white/15 text-[0.6rem] font-black hover:border-[var(--id-accent)] hover:text-[var(--id-accent)]"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <p className="pt-7 text-[0.65rem] text-white/25">
            © 2026 IronDistrict Gym. Membership pricing, coaching schedules,
            facility access, and availability are subject to change.
          </p>
        </div>
      </footer>
    </main>
  );
}
