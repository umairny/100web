import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  Flower2,
  Leaf,
  Menu,
  Moon,
  Sparkles,
  SunMedium,
  Waves,
  X,
} from "lucide-react";
import heroImage from "../../assets/optimized/fitness/FlowState/hero.webp";
import vinyasaImage from "../../assets/optimized/fitness/FlowState/vinyasa-flow.webp";
import gentleImage from "../../assets/optimized/fitness/FlowState/gentle-yoga.webp";
import restorativeImage from "../../assets/optimized/fitness/FlowState/restorative-practice.webp";
import breathImage from "../../assets/optimized/fitness/FlowState/breath-meditation.webp";
import studioImage from "../../assets/optimized/fitness/FlowState/studio-experience.webp";
import amaraImage from "../../assets/optimized/fitness/FlowState/teacher-amara.webp";
import leilaImage from "../../assets/optimized/fitness/FlowState/teacher-leila.webp";
import ninaImage from "../../assets/optimized/fitness/FlowState/teacher-nina.webp";
import benefitsImage from "../../assets/optimized/fitness/FlowState/mindful-benefits.webp";
import membershipImage from "../../assets/optimized/fitness/FlowState/membership.webp";
import abstractImage from "../../assets/optimized/fitness/FlowState/yoga-abstract-bg.webp";
import ctaImage from "../../assets/optimized/fitness/FlowState/cta.webp";

const navLinks = [
  ["Classes", "#classes"],
  ["Studio", "#studio"],
  ["Teachers", "#teachers"],
  ["Membership", "#membership"],
  ["Contact", "#contact"],
];

const classes = [
  {
    image: vinyasaImage,
    title: "Vinyasa Flow",
    text: "A breath-led movement class that builds strength, mobility, and focus through smooth transitions.",
    tag: "Flow",
  },
  {
    image: gentleImage,
    title: "Gentle Yoga",
    text: "A slower practice for releasing tension, improving flexibility, and moving with care.",
    tag: "Ease",
  },
  {
    image: restorativeImage,
    title: "Restorative Practice",
    text: "Deeply calming sessions using supported poses, stillness, and mindful breathing.",
    tag: "Restore",
  },
  {
    image: breathImage,
    title: "Breath & Meditation",
    text: "Guided breathwork and meditation to support clarity, presence, and nervous system balance.",
    tag: "Stillness",
  },
];

const teachers = [
  {
    image: amaraImage,
    name: "Amara Lane",
    role: "Vinyasa & Breathwork Teacher",
    tag: "Breath-led flow",
    bio: "Amara guides steady, spacious classes that connect movement quality with calm attention.",
  },
  {
    image: leilaImage,
    name: "Leila Morgan",
    role: "Gentle Yoga & Restorative Guide",
    tag: "Restorative care",
    bio: "Leila creates soft, supportive practices for students who want to slow down and move with ease.",
  },
  {
    image: ninaImage,
    name: "Nina Patel",
    role: "Meditation & Mobility Instructor",
    tag: "Mindful mobility",
    bio: "Nina blends grounding meditation with accessible mobility work for everyday balance.",
  },
];

const memberships = [
  {
    name: "First Flow",
    price: "$28",
    text: "For new students beginning their practice.",
    features: [
      "1 intro class",
      "Studio orientation",
      "Beginner-friendly guidance",
    ],
    popular: false,
  },
  {
    name: "Monthly Balance",
    price: "$96",
    text: "For steady weekly practice and mindful routine.",
    features: ["4 classes/month", "Class flexibility", "Member booking"],
    popular: true,
  },
  {
    name: "Unlimited Flow",
    price: "$168",
    text: "For students who want consistent practice and deeper support.",
    features: [
      "Unlimited classes",
      "Priority booking",
      "Monthly workshop access",
    ],
    popular: false,
  },
];

const benefits = [
  "More body awareness",
  "Better movement confidence",
  "Calmer daily routine",
  "Consistent mindful practice",
];

const testimonials = [
  [
    "A practice I can return to",
    "The class rhythm feels calm and welcoming. I have been able to show up more consistently without feeling rushed.",
    "Hannah P.",
  ],
  [
    "Such a peaceful studio",
    "The space is quiet, warm, and beautifully simple. It feels easy to settle in as soon as I arrive.",
    "Mira S.",
  ],
  [
    "More confident in class",
    "The teachers offer clear options and gentle guidance, which helped me feel comfortable joining different classes.",
    "Lauren T.",
  ],
];

function FlowButton({
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
      className={`flowstate-btn group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-xs font-bold uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-0.5 ${outline ? "flowstate-btn-outline border border-[#5F6F58]/25 bg-white/70 text-[#4F6049] hover:border-[#B97358] hover:text-[#B97358]" : "flowstate-btn-solid bg-[#5F6F58] text-white shadow-[0_18px_38px_rgba(95,111,88,.18)] hover:bg-[#4F6049]"} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function FlowHeading({
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
        className={`flowstate-heading-badge inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] ${light ? "flowstate-badge-light bg-white/12 text-[#F6E8D7]" : "flowstate-badge-dark bg-[#EFE7DA] text-[#8F624F]"}`}
      >
        <Leaf className="flowstate-badge-icon h-4 w-4" />
        {label}
      </p>
      <h2
        className={`flowstate-serif flowstate-heading-title mt-5 text-[clamp(2.15rem,5.5vw,6.5rem)] font-normal leading-[0.96] tracking-[-0.055em] ${light ? "text-white" : "text-[#332F2A]"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`flowstate-heading-text mt-6 max-w-2xl text-base leading-8 md:text-lg ${light ? "text-white/68" : "text-[#746D64]"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function FlowLogo() {
  return (
    <a
      href="#home"
      className="flowstate-logo flex items-center gap-3 text-[#332F2A]"
      aria-label="FlowState Yoga home"
    >
      <span className="flowstate-logo-icon grid h-11 w-11 place-items-center rounded-full bg-[#EFE7DA] text-[#5F6F58]">
        <Flower2 className="h-5 w-5" />
      </span>
      <span>
        <strong className="flowstate-serif flowstate-logo-text block text-xl font-normal leading-none tracking-[-0.03em]">
          FlowState
        </strong>
        <span className="flowstate-logo-sub mt-1 block text-[0.55rem] font-bold uppercase tracking-[0.24em] text-[#8A8178]">
          Yoga
        </span>
      </span>
    </a>
  );
}

export function FlowStateYoga() {
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
        "teachers",
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
    <main className="flowstate-site w-full max-w-full overflow-x-hidden bg-[#F8F2EA] text-[#332F2A] selection:bg-[#D7B5A4] selection:text-[#332F2A]">
      <style>{`
        /* ============================================================ */
        /* FLOWSTATE YOGA - DYNAMIC THEME SYSTEM                         */
        /* ============================================================ */
        .flowstate-site {
          --fs-accent: #5F6F58;
          --fs-accent-hover: #4F6049;
          --fs-accent-sec: #B97358;
          --fs-accent-sec-hover: #9e5f48;
          --fs-accent-glow: rgba(95, 111, 88, 0.22);
          --fs-accent-sec-glow: rgba(185, 115, 88, 0.22);
          --fs-contrast: #ffffff;
          --fs-contrast-sec: #ffffff;

          --fs-bg-base: #F8F2EA;
          --fs-bg-surface: #FFFDF9;
          --fs-bg-card: rgba(255, 253, 249, 0.78);
          --fs-bg-card-solid: #FFFDF9;
          --fs-bg-card-alt: #EFE7DA;
          --fs-bg-card-alt2: #F3ECE2;
          --fs-bg-dark: #332F2A;
          --fs-bg-dark-card: #2a2723;

          --fs-text-primary: #332F2A;
          --fs-text-body: #746D64;
          --fs-text-muted: #8A8178;
          --fs-text-light: #ffffff;

          --fs-border: #E1D6CA;
          --fs-border-subtle: rgba(95, 111, 88, 0.12);
          --fs-header-bg: rgba(255, 253, 249, 0.92);
          --fs-header-border: rgba(95, 111, 88, 0.10);
          --fs-nav-bg: #EFE7DA;
        }

        /* ------------------------------------------------------------ */
        /* DYNAMIC THEME PRESET ADAPTATION                              */
        /* ------------------------------------------------------------ */
        [data-theme-preset]:not([data-theme-preset="original"]) .flowstate-site,
        [data-theme-active="true"]:not([data-theme-preset="original"]) .flowstate-site {
          --fs-accent: var(--theme-accent-primary, #5F6F58) !important;
          --fs-accent-hover: var(--theme-accent-primary-hover, #4F6049) !important;
          --fs-accent-sec: var(--theme-accent-secondary, #B97358) !important;
          --fs-accent-sec-hover: var(--theme-accent-secondary-hover, #9e5f48) !important;
          --fs-accent-glow: var(--theme-accent-glow, rgba(95, 111, 88, 0.22)) !important;
          --fs-contrast: var(--theme-accent-contrast, #ffffff) !important;
        }

        /* Button styling */
        .flowstate-site .flowstate-btn-solid {
          background-color: var(--fs-accent) !important;
          color: var(--fs-contrast) !important;
          box-shadow: 0 18px 38px var(--fs-accent-glow) !important;
        }
        .flowstate-site .flowstate-btn-solid:hover {
          background-color: var(--fs-accent-hover) !important;
          color: var(--fs-contrast) !important;
        }

        .flowstate-site .flowstate-btn-outline:hover {
          border-color: var(--fs-accent-sec) !important;
          color: var(--fs-accent-sec) !important;
        }

        /* Navigation active */
        .flowstate-site .flowstate-nav-active {
          background-color: var(--fs-accent-glow) !important;
          color: var(--fs-accent) !important;
          box-shadow: inset 0 0 0 1px var(--fs-accent) !important;
        }

        /* Logo icon */
        .flowstate-site .flowstate-logo-icon {
          color: var(--fs-accent) !important;
        }

        /* Accents & Tags */
        .flowstate-site .flowstate-accent-text {
          color: var(--fs-accent) !important;
        }
        .flowstate-site .flowstate-accent-sec-text {
          color: var(--fs-accent-sec) !important;
        }
        .flowstate-site .flowstate-accent-bg {
          background-color: var(--fs-accent) !important;
          color: var(--fs-contrast) !important;
        }
        .flowstate-site .flowstate-accent-sec-bg {
          background-color: var(--fs-accent-sec) !important;
          color: var(--fs-contrast-sec) !important;
        }

        /* Popular Membership Plan */
        .flowstate-site .flowstate-plan-popular {
          background-color: var(--fs-accent) !important;
          border-color: var(--fs-accent) !important;
          color: var(--fs-contrast) !important;
          box-shadow: 0 25px 50px var(--fs-accent-glow) !important;
        }
        .flowstate-site .flowstate-plan-popular-badge {
          background-color: var(--fs-accent-sec) !important;
          color: var(--fs-contrast-sec) !important;
        }

        /* ------------------------------------------------------------ */
        /* DARK MOOD OVERRIDES                                          */
        /* ------------------------------------------------------------ */
        html.dark .flowstate-site,
        body.dark .flowstate-site,
        [data-theme-mood="dark"] .flowstate-site,
        :root[data-theme-mood="dark"] .flowstate-site,
        :root[data-theme-active="true"][data-theme-mood="dark"] .flowstate-site,
        :root.dark .flowstate-site {
          --fs-bg-base: #121110;
          --fs-bg-surface: #1a1817;
          --fs-bg-card: rgba(26, 24, 23, 0.85);
          --fs-bg-card-solid: #1b1918;
          --fs-bg-card-alt: #161514;
          --fs-bg-card-alt2: #141312;
          --fs-bg-dark: #0a0909;
          --fs-bg-dark-card: #151413;

          --fs-text-primary: #F8F2EA;
          --fs-text-body: rgba(248, 242, 234, 0.80);
          --fs-text-muted: rgba(248, 242, 234, 0.60);

          --fs-border: rgba(255, 255, 255, 0.10);
          --fs-border-subtle: rgba(255, 255, 255, 0.07);
          --fs-header-bg: rgba(18, 17, 16, 0.95);
          --fs-header-border: rgba(255, 255, 255, 0.10);
          --fs-nav-bg: #22201e;

          background-color: var(--fs-bg-base) !important;
          color: var(--fs-text-primary) !important;
        }

        html.dark .flowstate-site .flowstate-header,
        [data-theme-mood="dark"] .flowstate-site .flowstate-header,
        :root.dark .flowstate-site .flowstate-header {
          background-color: var(--fs-header-bg) !important;
          border-bottom-color: var(--fs-header-border) !important;
        }

        html.dark .flowstate-site .flowstate-logo,
        [data-theme-mood="dark"] .flowstate-site .flowstate-logo,
        :root.dark .flowstate-site .flowstate-logo {
          color: var(--fs-text-primary) !important;
        }

        html.dark .flowstate-site .flowstate-logo-icon,
        [data-theme-mood="dark"] .flowstate-site .flowstate-logo-icon,
        :root.dark .flowstate-site .flowstate-logo-icon {
          background-color: var(--fs-bg-card-alt) !important;
        }

        html.dark .flowstate-site .flowstate-nav-link,
        [data-theme-mood="dark"] .flowstate-site .flowstate-nav-link,
        :root.dark .flowstate-site .flowstate-nav-link {
          color: var(--fs-text-muted) !important;
        }
        html.dark .flowstate-site .flowstate-nav-link:hover,
        [data-theme-mood="dark"] .flowstate-site .flowstate-nav-link:hover,
        :root.dark .flowstate-site .flowstate-nav-link:hover {
          color: var(--fs-text-primary) !important;
          background-color: rgba(255, 255, 255, 0.08) !important;
        }

        html.dark .flowstate-site .flowstate-mobile-nav,
        [data-theme-mood="dark"] .flowstate-site .flowstate-mobile-nav,
        :root.dark .flowstate-site .flowstate-mobile-nav {
          background-color: var(--fs-header-bg) !important;
          border-bottom-color: var(--fs-header-border) !important;
        }

        html.dark .flowstate-site .flowstate-badge-dark,
        [data-theme-mood="dark"] .flowstate-site .flowstate-badge-dark,
        :root.dark .flowstate-site .flowstate-badge-dark {
          background-color: var(--fs-bg-card-alt) !important;
        }

        html.dark .flowstate-site .flowstate-heading-title:not(.text-white),
        [data-theme-mood="dark"] .flowstate-site .flowstate-heading-title:not(.text-white),
        :root.dark .flowstate-site .flowstate-heading-title:not(.text-white) {
          color: var(--fs-text-primary) !important;
        }

        html.dark .flowstate-site .flowstate-heading-text:not(.text-white\/68),
        [data-theme-mood="dark"] .flowstate-site .flowstate-heading-text:not(.text-white\/68),
        :root.dark .flowstate-site .flowstate-heading-text:not(.text-white\/68) {
          color: var(--fs-text-body) !important;
        }

        html.dark .flowstate-site .flowstate-card,
        [data-theme-mood="dark"] .flowstate-site .flowstate-card,
        :root.dark .flowstate-site .flowstate-card {
          background-color: var(--fs-bg-card) !important;
          border-color: var(--fs-border) !important;
        }

        html.dark .flowstate-site .flowstate-card-alt,
        [data-theme-mood="dark"] .flowstate-site .flowstate-card-alt,
        :root.dark .flowstate-site .flowstate-card-alt {
          background-color: var(--fs-bg-card-alt) !important;
          border-color: var(--fs-border) !important;
        }

        html.dark .flowstate-site .flowstate-card-solid,
        [data-theme-mood="dark"] .flowstate-site .flowstate-card-solid,
        :root.dark .flowstate-site .flowstate-card-solid {
          background-color: var(--fs-bg-card-solid) !important;
        }

        html.dark .flowstate-site .flowstate-section-alt,
        [data-theme-mood="dark"] .flowstate-site .flowstate-section-alt,
        :root.dark .flowstate-site .flowstate-section-alt {
          background-color: var(--fs-bg-card-alt) !important;
        }

        html.dark .flowstate-site .flowstate-section-alt2,
        [data-theme-mood="dark"] .flowstate-site .flowstate-section-alt2,
        :root.dark .flowstate-site .flowstate-section-alt2 {
          background-color: var(--fs-bg-card-alt2) !important;
        }

        html.dark .flowstate-site .flowstate-home-section,
        [data-theme-mood="dark"] .flowstate-site .flowstate-home-section,
        :root.dark .flowstate-site .flowstate-home-section {
          background-color: var(--fs-bg-card-alt2) !important;
        }

        html.dark .flowstate-site .flowstate-footer,
        [data-theme-mood="dark"] .flowstate-site .flowstate-footer,
        :root.dark .flowstate-site .flowstate-footer {
          background-color: var(--fs-bg-surface) !important;
          border-top-color: var(--fs-border) !important;
        }

        html.dark .flowstate-site .flowstate-social-btn,
        [data-theme-mood="dark"] .flowstate-site .flowstate-social-btn,
        :root.dark .flowstate-site .flowstate-social-btn {
          border-color: var(--fs-border) !important;
          color: var(--fs-text-muted) !important;
        }

        .flowstate-site .flowstate-hero-strip {
          background-color: var(--fs-accent) !important;
        }
        .flowstate-site .flowstate-hero-image-box {
          background-color: var(--fs-accent) !important;
        }

        html.dark .flowstate-site .flowstate-text-primary,
        [data-theme-mood="dark"] .flowstate-site .flowstate-text-primary,
        :root.dark .flowstate-site .flowstate-text-primary {
          color: var(--fs-text-primary) !important;
        }

        html.dark .flowstate-site .flowstate-text-body,
        [data-theme-mood="dark"] .flowstate-site .flowstate-text-body,
        :root.dark .flowstate-site .flowstate-text-body {
          color: var(--fs-text-body) !important;
        }

        html.dark .flowstate-site .flowstate-text-muted,
        [data-theme-mood="dark"] .flowstate-site .flowstate-text-muted,
        :root.dark .flowstate-site .flowstate-text-muted {
          color: var(--fs-text-muted) !important;
        }

        html.dark .flowstate-site .flowstate-hero-pill,
        [data-theme-mood="dark"] .flowstate-site .flowstate-hero-pill,
        :root.dark .flowstate-site .flowstate-hero-pill {
          background-color: var(--fs-bg-card-alt) !important;
          color: var(--fs-text-primary) !important;
        }

        /* ------------------------------------------------------------ */
        /* CUSTOM BACKGROUND MODE                                       */
        /* ------------------------------------------------------------ */
        [data-theme-bg-mode="custom"] .flowstate-site {
          --fs-bg-base: var(--theme-bg-base, #121110) !important;
          --fs-bg-surface: var(--theme-bg-surface, #1a1817) !important;
          --fs-bg-card: var(--theme-bg-card, rgba(26, 24, 23, 0.85)) !important;
          --fs-bg-card-solid: var(--theme-bg-card, #1b1918) !important;
          --fs-bg-card-alt: var(--theme-bg-surface, #161514) !important;
          --fs-bg-card-alt2: var(--theme-bg-surface, #141312) !important;
          --fs-text-primary: var(--theme-text-primary, #F8F2EA) !important;
          --fs-text-body: var(--theme-text-secondary, rgba(248, 242, 234, 0.80)) !important;
          --fs-text-muted: var(--theme-text-muted, rgba(248, 242, 234, 0.60)) !important;
          --fs-border: var(--theme-border, rgba(255, 255, 255, 0.10)) !important;
          background-color: var(--fs-bg-base) !important;
          color: var(--fs-text-primary) !important;
        }
      `}</style>

      <header className="flowstate-header fixed inset-x-0 top-0 z-50 border-b border-[#5F6F58]/10 bg-[#FFFDF9]/92 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.75rem] max-w-[96rem] items-center justify-between px-5 lg:px-10">
          <FlowLogo />
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="FlowState navigation"
          >
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  className={`flowstate-nav-link rounded-full px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] transition ${active ? "flowstate-nav-active bg-[#EFE7DA] text-[#5F6F58]" : "text-[#81786F] hover:bg-[#F3ECE2] hover:text-[#332F2A]"}`}
                >
                  {label}
                </a>
              );
            })}
          </nav>
          {/* Desktop-Only Booking CTA (Isolated from mobile viewports) */}
          <div className="hidden lg:block">
            <FlowButton href="#contact">
              Book a Class
            </FlowButton>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#5F6F58]/20 text-[#332F2A] transition active:scale-95 hover:border-[#5F6F58] lg:hidden"
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
            <nav className="flowstate-mobile-nav fixed inset-x-0 top-[4.75rem] z-50 border-b border-[#5F6F58]/10 bg-[#FFFDF9]/98 px-5 py-5 shadow-2xl backdrop-blur-2xl lg:hidden">
              <div className="space-y-1">
                {navLinks.map(([label, href]) => {
                  const active = activeSection === href.slice(1);
                  return (
                    <a
                      key={label}
                      href={href}
                      aria-current={active ? "location" : undefined}
                      onClick={() => setMenuOpen(false)}
                      className={`flowstate-nav-link flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.1em] transition ${
                        active
                          ? "flowstate-nav-active bg-[#EFE7DA] text-[#5F6F58] font-black"
                          : "text-[#81786F] hover:bg-[#F3ECE2] hover:text-[#332F2A]"
                      }`}
                    >
                      <span>{label}</span>
                      <span className="text-xs text-[#5F6F58] flowstate-accent-text">→</span>
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
        className="flowstate-home-section relative isolate overflow-hidden bg-[#F6EFE6] pt-[4.75rem]"
      >
        <img
          src={abstractImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-multiply"
        />
        <div className="flowstate-hero-strip absolute inset-x-0 top-0 h-40 bg-[#5F6F58]" />
        <div className="absolute left-[6%] top-40 h-80 w-80 rounded-full bg-[#D7B5A4]/35 blur-3xl" />
        <div className="absolute right-[10%] bottom-10 h-96 w-96 rounded-full bg-[#C9D2BD]/45 blur-3xl" />
        <div className="relative mx-auto min-h-[calc(100vh-4.75rem)] max-w-[100rem] px-5 py-10 lg:px-10 lg:py-14">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr] lg:items-stretch">
            <div className="rounded-[2.5rem] bg-[#332F2A] p-6 text-white shadow-2xl shadow-[#6D5A4D]/12 md:p-9 lg:min-h-[42rem]">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/12 pb-6">
                <p className="flowstate-accent-sec-text inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#D7B5A4]">
                  <Waves className="h-4 w-4" /> Mindful movement studio
                </p>
                <span className="rounded-full border border-white/14 px-4 py-2 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/55">
                  Small classes / soft pacing
                </span>
              </div>
              <div className="py-12 lg:py-16">
                <h1 className="flowstate-serif max-w-5xl text-[clamp(2.35rem,8vw,9.5rem)] font-normal uppercase leading-[0.88] tracking-[-0.075em]">
                  Move With Breath. Find Your Flow.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
                  Mindful yoga, breathwork, and restorative classes designed to
                  help you build flexibility, calm your mind, and reconnect with
                  your body.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <FlowButton href="#contact">Book Your First Class</FlowButton>
                  <FlowButton href="#classes" outline>
                    Explore Classes
                  </FlowButton>
                </div>
              </div>
              <div className="grid gap-px overflow-hidden rounded-[1.5rem] bg-white/14 sm:grid-cols-4">
                {[
                  "Vinyasa Flow",
                  "Restorative Yoga",
                  "Breathwork",
                  "Beginner Friendly",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="bg-white/[0.06] px-4 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white/64"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-5 lg:grid-rows-[1fr_auto]">
              <div className="flowstate-hero-image-box relative min-h-[34rem] overflow-hidden rounded-[2.5rem] bg-[#5F6F58] shadow-2xl shadow-[#6D5A4D]/10">
                <img
                  src={heroImage}
                  alt="Peaceful FlowState Yoga studio practice"
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#332F2A]/78 via-transparent to-transparent" />
                <div className="flowstate-breath-line absolute inset-x-8 top-10 h-28" />
                <div className="flowstate-card-solid absolute inset-x-6 bottom-6 rounded-[1.75rem] bg-white/82 p-5 text-[#332F2A] backdrop-blur">
                  <p className="flowstate-accent-sec-text text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#8F624F]">
                    Today in studio
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {[
                      ["7:30", "Gentle Flow"],
                      ["12:15", "Breath Reset"],
                      ["18:00", "Restorative"],
                    ].map(([time, name]) => (
                      <div
                        key={time}
                        className="border-l border-[#D7B5A4] pl-3"
                      >
                        <p className="flowstate-text-primary text-xl font-semibold tracking-[-0.04em]">
                          {time}
                        </p>
                        <p className="flowstate-text-muted text-xs font-bold text-[#746D64]">
                          {name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flowstate-card rounded-[2rem] bg-white/78 p-6">
                  <Moon className="flowstate-accent-text h-5 w-5 text-[#5F6F58]" />
                  <p className="flowstate-text-body mt-10 text-sm font-semibold leading-7 text-[#746D64]">
                    Soft pacing, thoughtful cues, and space to meet your
                    practice gently.
                  </p>
                </div>
                <div className="flowstate-hero-pill rounded-[2rem] bg-[#D7B5A4] p-6 text-[#332F2A]">
                  <Leaf className="h-5 w-5" />
                  <p className="mt-10 text-sm font-semibold leading-7">
                    Natural materials, warm light, and a quieter rhythm from
                    arrival to savasana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="classes" className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[96rem]">
          <FlowHeading
            label="Classes"
            title="Classes For Every Season Of Practice"
            text="Choose a class that matches your energy, experience, and need for movement or rest today."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {classes.map((item) => (
              <article
                key={item.title}
                className="flowstate-card group overflow-hidden rounded-[2.5rem] border border-[#E1D6CA] bg-white/75 transition duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} class`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="flowstate-card-solid flowstate-accent-sec-text absolute left-4 top-4 rounded-full bg-[#FFFDF9] px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#8F624F]">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="flowstate-serif flowstate-text-primary text-3xl font-normal tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="flowstate-text-body mt-3 text-sm leading-7 text-[#746D64]">
                    {item.text}
                  </p>
                  <a
                    href="#contact"
                    className="flowstate-accent-text mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#5F6F58]"
                  >
                    Explore Class <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="studio"
        className="flowstate-section-alt bg-[#EFE7DA] px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-[96rem] gap-10 lg:grid-cols-[.86fr_1.14fr] lg:items-stretch">
          <div className="flowstate-card-solid rounded-[2.5rem] bg-[#FFFDF9] p-7">
            <FlowHeading
              label="Studio experience"
              title="A Studio Designed To Help You Slow Down"
              text="A peaceful studio atmosphere with small class sizes, supportive teachers, soft lighting, natural materials, and welcoming practices for all levels."
            />
            <div className="mt-10 grid gap-4">
              {[
                ["Mindful Guidance", SunMedium],
                ["Calm Space", Leaf],
                ["Personal Pace", Waves],
              ].map(([title, Icon], index) => {
                const StudioIcon = Icon as typeof Leaf;
                return (
                  <div
                    key={title as string}
                    className="flowstate-card grid grid-cols-[auto_1fr] items-center gap-5 rounded-[1.5rem] border border-[#E1D6CA] bg-[#F8F2EA] p-5"
                  >
                    <span className="flowstate-accent-sec-text text-xs font-bold text-[#B97358]">
                      0{index + 1}
                    </span>
                    <div>
                      <StudioIcon className="flowstate-accent-text h-5 w-5 text-[#5F6F58]" />
                      <h3 className="flowstate-text-primary mt-3 text-sm font-bold uppercase tracking-[0.12em]">
                        {title as string}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative min-h-[40rem] overflow-hidden rounded-[2.5rem]">
            <img
              src={studioImage}
              alt="FlowState Yoga calm studio with natural materials"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#332F2A]/82 via-[#332F2A]/5 to-transparent" />
            <div className="absolute bottom-7 left-7 right-7 border-t border-white/25 pt-6 text-white">
              <p className="flowstate-accent-sec-text text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#D7B5A4]">
                Studio atmosphere
              </p>
              <p className="flowstate-serif mt-3 max-w-2xl text-5xl leading-[0.95] tracking-[-0.055em]">
                Soft light. Natural textures. Room to breathe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="teachers" className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[96rem]">
          <FlowHeading
            label="Teachers"
            title="Practice With Thoughtful Teachers"
            text="Meet guides who offer clear instruction, gentle options, and steady support for your practice."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {teachers.map((teacher) => (
              <article
                key={teacher.name}
                className="flowstate-card rounded-[2.5rem] border border-[#E1D6CA] bg-white/75 p-4"
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="aspect-[4/4.35] w-full rounded-[2rem] object-cover"
                />
                <div className="p-4">
                  <span className="flowstate-badge-dark flowstate-accent-sec-text rounded-full bg-[#EFE7DA] px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#8F624F]">
                    {teacher.tag}
                  </span>
                  <h3 className="flowstate-serif flowstate-text-primary mt-5 text-4xl font-normal tracking-[-0.05em]">
                    {teacher.name}
                  </h3>
                  <p className="flowstate-accent-text mt-1 text-sm font-bold text-[#5F6F58]">
                    {teacher.role}
                  </p>
                  <p className="flowstate-text-body mt-4 text-sm leading-7 text-[#746D64]">
                    {teacher.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="membership"
        className="flowstate-section-alt2 relative bg-[#F3ECE2] px-5 py-24 lg:px-10 lg:py-32"
      >
        <img
          src={membershipImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.07]"
        />
        <div className="relative mx-auto max-w-[96rem]">
          <FlowHeading
            label="Membership"
            title="Choose A Practice Rhythm"
            text="Simple options for your first class, steady weekly practice, or a deeper studio routine."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {memberships.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-[2.5rem] border p-7 ${
                  plan.popular
                    ? "flowstate-plan-popular border-[#5F6F58] bg-[#5F6F58] text-white shadow-2xl shadow-[#5F6F58]/20 lg:-translate-y-4"
                    : "flowstate-card border-[#E1D6CA] bg-white/78"
                }`}
              >
                {plan.popular && (
                  <span className="flowstate-plan-popular-badge absolute right-6 top-6 rounded-full bg-[#D7B5A4] px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#332F2A]">
                    Most Popular
                  </span>
                )}
                <p
                  className={`text-[0.62rem] font-bold uppercase tracking-[0.18em] ${
                    plan.popular ? "text-[#F6E8D7]" : "flowstate-accent-sec-text text-[#8F624F]"
                  }`}
                >
                  Studio membership
                </p>
                <h3
                  className={`flowstate-serif mt-6 text-5xl font-normal tracking-[-0.06em] ${
                    plan.popular ? "text-white" : "flowstate-text-primary"
                  }`}
                >
                  {plan.name}
                </h3>
                <div className="mt-7 flex items-end gap-2">
                  <span className="text-6xl font-normal tracking-[-0.08em]">
                    {plan.price}
                  </span>
                  <span
                    className={`pb-2 text-xs font-bold ${
                      plan.popular ? "text-white/55" : "flowstate-text-muted text-[#8A8178]"
                    }`}
                  >
                    / month
                  </span>
                </div>
                <p
                  className={`mt-5 text-sm leading-7 ${
                    plan.popular ? "text-white/72" : "flowstate-text-body text-[#746D64]"
                  }`}
                >
                  {plan.text}
                </p>
                <div
                  className={`mt-6 grid gap-3 border-t pt-6 ${
                    plan.popular ? "border-white/16" : "border-[#E1D6CA]"
                  }`}
                >
                  {plan.features.map((feature) => (
                    <span
                      key={feature}
                      className="flex items-center gap-2 text-sm font-semibold"
                    >
                      <Check
                        className={`h-4 w-4 ${
                          plan.popular ? "text-[#F6E8D7]" : "flowstate-accent-text text-[#5F6F58]"
                        }`}
                      />
                      {feature}
                    </span>
                  ))}
                </div>
                <FlowButton
                  href="#contact"
                  outline={plan.popular}
                  className="mt-8"
                >{`Choose ${plan.name}`}</FlowButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <FlowHeading
              label="Mindful benefits"
              title="The Practice Meets You Where You Are"
              text="FlowState focuses on realistic, sustainable benefits that come from consistent mindful practice."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flowstate-card rounded-[2rem] border border-[#E1D6CA] bg-white/72 p-6"
                >
                  <span className="flowstate-accent-sec-text text-xs font-bold text-[#B97358]">
                    0{index + 1}
                  </span>
                  <h3 className="flowstate-text-primary mt-8 text-xl font-semibold tracking-[-0.03em]">
                    {benefit}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <img
            src={benefitsImage}
            alt="Mindful yoga practice benefits"
            className="rounded-[3rem] object-cover shadow-2xl shadow-[#6D5A4D]/10"
          />
        </div>
      </section>

      <section className="flowstate-section-alt bg-[#EFE7DA] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[96rem]">
          <FlowHeading
            label="Student notes"
            title="A Softer Way To Keep Showing Up"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map(([title, quote, name]) => (
              <blockquote
                key={title}
                className="flowstate-card rounded-[2.5rem] border border-[#E1D6CA] bg-white/65 p-7"
              >
                <Sparkles className="flowstate-accent-sec-text h-5 w-5 text-[#B97358]" />
                <h3 className="flowstate-serif flowstate-text-primary mt-6 text-3xl font-normal tracking-[-0.04em]">
                  {title}
                </h3>
                <p className="flowstate-text-body mt-4 text-sm leading-7 text-[#746D64]">{quote}</p>
                <footer className="flowstate-accent-text mt-7 text-xs font-bold uppercase tracking-[0.14em] text-[#5F6F58]">
                  {name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-[#332F2A] px-5 py-28 text-white lg:px-10 lg:py-36"
      >
        <img
          src={ctaImage}
          alt="Peaceful FlowState Yoga practice"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#332F2A] via-[#332F2A]/86 to-[#332F2A]/35" />
        <div className="relative mx-auto max-w-[96rem]">
          <div className="max-w-4xl">
            <p className="flowstate-accent-sec-text text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#D7B5A4]">
              Begin gently
            </p>
            <h2 className="flowstate-serif mt-6 text-[clamp(2.35rem,7.2vw,8.5rem)] font-normal leading-[0.92] tracking-[-0.065em]">
              Begin Your Flow Today
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Step into a calm studio space where movement, breath, and presence
              come together.
            </p>
            <FlowButton href="mailto:hello@flowstate.example" className="mt-9">
              Book a Class
            </FlowButton>
          </div>
        </div>
      </section>

      <footer className="flowstate-footer bg-[#FFFDF9] px-5 pb-8 pt-14 lg:px-10">
        <div className="mx-auto max-w-[96rem]">
          <div className="flex flex-col justify-between gap-10 border-b border-[#E1D6CA] pb-10 lg:flex-row lg:items-start">
            <div>
              <FlowLogo />
              <p className="flowstate-text-body mt-5 max-w-sm text-sm leading-7 text-[#746D64]">
                Mindful movement studio for calm, strength, and balance.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="flowstate-nav-link text-xs font-bold uppercase tracking-[0.13em] text-[#81786F] hover:text-[#5F6F58]"
                >
                  {label}
                </a>
              ))}
            </div>
            <div>
              <p className="flowstate-text-muted text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#8A8178]">
                Social
              </p>
              <div className="mt-4 flex gap-2">
                {["IG", "YT", "TT"].map((social) => (
                  <a
                    key={social}
                    href="#contact"
                    aria-label={`${social} social placeholder`}
                    className="flowstate-social-btn grid h-10 w-10 place-items-center rounded-full border border-[#E1D6CA] text-[0.6rem] font-bold text-[#81786F] hover:border-[#5F6F58] hover:text-[#5F6F58]"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <p className="flowstate-text-muted pt-7 text-[0.65rem] text-[#8A8178]">
            © 2026 FlowState Yoga. Class schedules, teacher availability, and
            membership details may vary.
          </p>
        </div>
      </footer>
    </main>
  );
}
