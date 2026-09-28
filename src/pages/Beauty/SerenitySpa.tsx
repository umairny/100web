import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import {
  Brain,
  BriefcaseBusiness,
  Camera,
  Flower2,
  Layers3,
  Leaf,
  MoonStar,
  ShieldCheck,
  Smile,
  Sparkles,
  Sprout,
  Sun,
  UserRound,
  UsersRound,
  Waves,
  type LucideIcon,
} from "lucide-react";

const serenityImages = import.meta.glob(
  "../../assets/optimized/beauty/serenity/*.webp",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
) as Record<string, string>;

const image = (name: string) =>
  serenityImages[`../../assets/optimized/beauty/serenity/${name}`];

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Packages", "packages"],
  ["Therapists", "therapists"],
  ["Gallery", "gallery"],
  ["Journal", "journal"],
  ["Contact", "contact"],
];

const services = [
  [
    "swidish.webp",
    "leaf",
    "Swedish Massage",
    "Relaxing, full-body massage to ease tension and promote circulation.",
  ],
  [
    "deep.webp",
    "branch",
    "Deep Tissue",
    "Targeted pressure to release chronic tension and muscle knots.",
  ],
  [
    "hotstone.webp",
    "waves",
    "Hot Stone Therapy",
    "Heated stones melt away tension and encourage deep relaxation.",
  ],
  [
    "aroma.webp",
    "leaf",
    "Aromatherapy",
    "Scent-led therapy to balance mood, mind, and body naturally.",
  ],
  [
    "facial.webp",
    "face",
    "Signature Facials",
    "Nourishing facials for radiant, healthy, and balanced skin.",
  ],
  [
    "resorative.webp",
    "sun",
    "Restorative Packages",
    "Curated experiences for deeper rest, renewal, and calm.",
  ],
];

const journeys = [
  [
    "rest-journey.webp",
    "The Reset Journey",
    "90 Minutes",
    "Full body massage, aromatherapy scalp treatment, and herbal tea ritual.",
    "$195",
  ],
  [
    "restor-journey.webp",
    "The Restore Journey",
    "120 Minutes",
    "Deep tissue massage, hot stone therapy, and nourishing facial.",
    "$245",
  ],
  [
    "renew-journey.webp",
    "The Renew Journey",
    "180 Minutes",
    "Complete head-to-toe experience with massage, facial, and body polish.",
    "$320",
  ],
];

const therapists = [
  [
    "maya.webp",
    "Maya Thompson",
    "Massage Therapist",
    "Specializes in relaxation and holistic healing techniques.",
  ],
  [
    "james.webp",
    "James Parker",
    "Deep Tissue Specialist",
    "Expert in sports therapy and chronic pain management.",
  ],
  [
    "elena.webp",
    "Elena Morris",
    "Aromatherapy Therapist",
    "Blends essential oils and touch to restore mind-body balance.",
  ],
  [
    "sofia.webp",
    "Sophia Lee",
    "Facial & Skin Therapist",
    "Passionate about natural skincare and holistic beauty.",
  ],
];

const testimonials = [
  [
    "Serenity Spa is my sanctuary. Every visit leaves me feeling lighter, calmer, and completely renewed.",
    "Jessica M.",
    "maya.webp",
  ],
  [
    "The therapists are incredible. The attention to detail and peaceful space are unmatched.",
    "David R.",
    "james.webp",
  ],
  [
    "I’ve finally found a place where I can truly relax and take care of myself.",
    "Amanda L.",
    "elena.webp",
  ],
];

const galleryImages = [
  "gallary01.webp",
  "gallary02.webp",
  "gallary03.webp",
  "gallary04.webp",
  "gallary05.webp",
  "gallary06.webp",
];

function Icon({
  name,
  className = "h-8 w-8",
}: {
  name: string;
  className?: string;
}) {
  const icons: Record<string, LucideIcon> = {
    leaf: Leaf,
    branch: Sprout,
    waves: Waves,
    face: Smile,
    sun: Sun,
    person: UserRound,
    lotus: Flower2,
    moon: MoonStar,
    head: Brain,
    stones: Layers3,
    shield: ShieldCheck,
    sparkles: Sparkles,
  };
  const Component = icons[name] ?? Leaf;
  return (
    <Component aria-hidden="true" className={className} strokeWidth={1.35} />
  );
}

function scrollToId(event?: MouseEvent<HTMLAnchorElement>, id: string = "home") {
  const target = document.getElementById(id);
  if (!target) return;
  event?.preventDefault();
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = target.getBoundingClientRect().top + window.scrollY - 68;
  window.scrollTo({
    top: Math.max(0, top),
    behavior: reduced ? "auto" : "smooth",
  });
  window.history.replaceState(null, "", `#${id}`);
}

function Button({
  children,
  href = "#reserve",
  outline = false,
  className = "",
  onClick,
}: {
  children: ReactNode;
  href?: string;
  outline?: boolean;
  className?: string;
  onClick?: (event?: MouseEvent<HTMLAnchorElement>) => void;
}) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);
    if (href.startsWith("#")) scrollToId(event, href.slice(1));
  };
  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-[0.08em] transition duration-300 hover:-translate-y-0.5 ${outline ? "border border-white/75 bg-black/10 text-white hover:bg-white hover:text-[#35402c]" : "bg-[#778269] text-white shadow-lg shadow-black/15 hover:bg-[#626d56] hover:shadow-xl"} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="text-center">
      <h2 className="serenity-serif text-xl uppercase tracking-[0.14em] text-[#4e4a3f]">
        {children}
      </h2>
      <div className="mt-2 flex items-center justify-center gap-2 text-[#818b6e]">
        <span className="h-px w-9 bg-[#bdbea8]" />
        <Icon name="branch" className="h-4 w-4" />
        <span className="h-px w-9 bg-[#bdbea8]" />
      </div>
    </div>
  );
}

const serenityThemeCss = `
  :root {
    --serenity-accent: #778269;
    --serenity-accent-hover: #626d56;
    --serenity-accent-sec: #8c987c;
    --serenity-accent-soft: rgba(119, 130, 105, 0.14);
    --serenity-accent-glow: rgba(119, 130, 105, 0.35);
    --serenity-bg-base: #f7f4ec;
    --serenity-bg-surface: #fbfaf6;
    --serenity-bg-card: #fbfaf6;
    --serenity-bg-card-subtle: #f2f0e8;
    --serenity-text-primary: #4d4b42;
    --serenity-text-muted: #6a675d;
    --serenity-border: #dcd8cc;
    --serenity-nav-bg: rgba(63, 73, 55, 0.95);
  }

  /* ------------------------------------------------------------ */
  /* POLISHED MICRO-INTERACTIONS & TRANSITIONS                    */
  /* ------------------------------------------------------------ */
  .serenity-site article,
  .serenity-site blockquote {
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1),
                box-shadow 0.35s ease,
                border-color 0.35s ease,
                background-color 0.3s ease;
  }
  .serenity-site header {
    transition: background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  /* ------------------------------------------------------------ */
  /* THEME PRESET ADAPTATIONS                                     */
  /* ------------------------------------------------------------ */
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site,
  [data-theme-active="true"]:not([data-theme-preset="original"]) {
    --serenity-accent: var(--theme-accent-primary, #778269) !important;
    --serenity-accent-hover: var(--theme-accent-hover, #626d56) !important;
    --serenity-accent-sec: var(--theme-accent-secondary, #8c987c) !important;
    --serenity-accent-soft: color-mix(in srgb, var(--serenity-accent) 14%, transparent) !important;
    --serenity-accent-glow: var(--theme-accent-glow, rgba(119, 130, 105, 0.35)) !important;
    --serenity-border: var(--theme-border, color-mix(in srgb, var(--serenity-accent) 30%, transparent)) !important;
  }

  [data-theme-preset="emerald"] .serenity-site,
  [data-theme-preset="emerald"] {
    --serenity-accent: #10B981 !important;
    --serenity-accent-hover: #059669 !important;
    --serenity-accent-sec: #34D399 !important;
    --serenity-accent-soft: rgba(16, 185, 129, 0.14) !important;
    --serenity-accent-glow: rgba(16, 185, 129, 0.45) !important;
    --serenity-border: rgba(16, 185, 129, 0.35) !important;
  }
  [data-theme-preset="ocean"] .serenity-site,
  [data-theme-preset="ocean"],
  [data-theme-preset="azure"] .serenity-site,
  [data-theme-preset="azure"] {
    --serenity-accent: #0284C7 !important;
    --serenity-accent-hover: #0369A1 !important;
    --serenity-accent-sec: #38BDF8 !important;
    --serenity-accent-soft: rgba(2, 132, 199, 0.14) !important;
    --serenity-accent-glow: rgba(2, 132, 199, 0.45) !important;
    --serenity-border: rgba(2, 132, 199, 0.35) !important;
  }
  [data-theme-preset="sunset"] .serenity-site,
  [data-theme-preset="sunset"] {
    --serenity-accent: #EA580C !important;
    --serenity-accent-hover: #C2410C !important;
    --serenity-accent-sec: #FB923C !important;
    --serenity-accent-soft: rgba(234, 88, 12, 0.14) !important;
    --serenity-accent-glow: rgba(234, 88, 12, 0.45) !important;
    --serenity-border: rgba(234, 88, 12, 0.35) !important;
  }
  [data-theme-preset="purple"] .serenity-site,
  [data-theme-preset="purple"],
  [data-theme-preset="amethyst"] .serenity-site,
  [data-theme-preset="amethyst"],
  [data-theme-preset="royal"] .serenity-site,
  [data-theme-preset="royal"] {
    --serenity-accent: #9333EA !important;
    --serenity-accent-hover: #7E22CE !important;
    --serenity-accent-sec: #C084FC !important;
    --serenity-accent-soft: rgba(147, 51, 234, 0.14) !important;
    --serenity-accent-glow: rgba(147, 51, 234, 0.45) !important;
    --serenity-border: rgba(147, 51, 234, 0.35) !important;
  }
  [data-theme-preset="amber"] .serenity-site,
  [data-theme-preset="amber"],
  [data-theme-preset="golden"] .serenity-site,
  [data-theme-preset="golden"] {
    --serenity-accent: #D97706 !important;
    --serenity-accent-hover: #B45309 !important;
    --serenity-accent-sec: #FBBF24 !important;
    --serenity-accent-soft: rgba(217, 119, 6, 0.14) !important;
    --serenity-accent-glow: rgba(217, 119, 6, 0.45) !important;
    --serenity-border: rgba(217, 119, 6, 0.35) !important;
  }
  [data-theme-preset="cyberpunk"] .serenity-site,
  [data-theme-preset="cyberpunk"] {
    --serenity-accent: #06B6D4 !important;
    --serenity-accent-hover: #0891B2 !important;
    --serenity-accent-sec: #A855F7 !important;
    --serenity-accent-soft: rgba(6, 182, 212, 0.14) !important;
    --serenity-accent-glow: rgba(6, 182, 212, 0.45) !important;
    --serenity-border: rgba(6, 182, 212, 0.35) !important;
  }
  [data-theme-preset="terracotta"] .serenity-site,
  [data-theme-preset="terracotta"] {
    --serenity-accent: #EA580C !important;
    --serenity-accent-hover: #C2410C !important;
    --serenity-accent-sec: #0D9488 !important;
    --serenity-accent-soft: rgba(234, 88, 12, 0.14) !important;
    --serenity-accent-glow: rgba(234, 88, 12, 0.45) !important;
    --serenity-border: rgba(234, 88, 12, 0.35) !important;
  }
  [data-theme-preset="obsidian"] .serenity-site,
  [data-theme-preset="obsidian"] {
    --serenity-accent: #475569 !important;
    --serenity-accent-hover: #334155 !important;
    --serenity-accent-sec: #64748B !important;
    --serenity-accent-soft: rgba(71, 85, 105, 0.14) !important;
    --serenity-accent-glow: rgba(71, 85, 105, 0.45) !important;
    --serenity-border: rgba(71, 85, 105, 0.35) !important;
  }

  /* Universal solid icon box prevention */
  .serenity-site svg:not(.fill-current):not([class*="fill-"]) {
    fill: none !important;
  }

  /* ------------------------------------------------------------ */
  /* HEADER & NAV BAR LINKS PROTECTION                            */
  /* ------------------------------------------------------------ */
  .serenity-site header nav:not(#serenity-mobile-menu) a {
    background-color: transparent !important;
  }
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site header nav:not(#serenity-mobile-menu) a {
    background-color: transparent !important;
  }
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site header nav:not(#serenity-mobile-menu) a.active {
    color: var(--serenity-accent) !important;
    background-color: transparent !important;
  }
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site header nav:not(#serenity-mobile-menu) a.active::after {
    background-color: var(--serenity-accent) !important;
  }
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site header nav:not(#serenity-mobile-menu) a:hover {
    color: var(--serenity-accent) !important;
  }

  /* ------------------------------------------------------------ */
  /* ACTIVE THEME PRESET OVERRIDES (Non-Original Presets)        */
  /* ------------------------------------------------------------ */
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site [class*="text-[#818b6e]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site [class*="text-[#7e886f]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site [class*="text-[#7b856d]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site [class*="text-[#69715f]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site [class*="text-[#69745f]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site [class*="text-[#777b69]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site [class*="text-[#777c68]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site [class*="text-[#7b806d]"] {
    color: var(--serenity-accent) !important;
  }

  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site [class*="hover:text-[#879174]"]:hover,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site [class*="hover:text-[#3e4835]"]:hover {
    color: var(--serenity-accent) !important;
  }

  /* Buttons & Gradients */
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site a[class*="bg-[#778269]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site div[class*="bg-[#7d876c]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site button.bg-\[\#7b856c\] {
    background: linear-gradient(to right, var(--serenity-accent), var(--serenity-accent-sec)) !important;
  }
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site [class*="hover:bg-[#626d56]"]:hover {
    background-color: var(--serenity-accent-hover) !important;
  }
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site [class*="bg-[#778269]"] {
    box-shadow: 0 10px 25px var(--serenity-accent-glow) !important;
  }

  /* Section Title Lines */
  [data-theme-active="true"]:not([data-theme-preset="original"]) .serenity-site span.bg-\[\#bdbea8\] {
    background-color: var(--serenity-accent) !important;
  }

  /* ------------------------------------------------------------ */
  /* DARK MOOD (Tranquil, Elegant & Natural)                      */
  /* ------------------------------------------------------------ */
  html.dark .serenity-site,
  body.dark .serenity-site,
  [data-theme-mood="dark"] .serenity-site,
  :root[data-theme-mood="dark"] .serenity-site,
  :root[data-theme-active="true"][data-theme-mood="dark"] .serenity-site,
  :root.dark .serenity-site {
    --serenity-bg-base: #101411 !important;
    --serenity-bg-surface: #161c18 !important;
    --serenity-bg-card: #1b231e !important;
    --serenity-bg-card-subtle: #141a16 !important;
    --serenity-text-primary: #f5faf6 !important;
    --serenity-text-muted: #9fb0a5 !important;
    --serenity-border: rgba(255, 255, 255, 0.1) !important;
    --serenity-nav-bg: rgba(16, 20, 17, 0.95) !important;
  }

  html.dark .serenity-site,
  body.dark .serenity-site,
  [data-theme-mood="dark"] .serenity-site {
    background-color: var(--serenity-bg-base) !important;
    color: var(--serenity-text-primary) !important;
  }

  /* Headings & Section Titles in Dark Mood */
  html.dark .serenity-site .serenity-serif,
  [data-theme-mood="dark"] .serenity-site .serenity-serif,
  html.dark .serenity-site h1,
  [data-theme-mood="dark"] .serenity-site h1,
  html.dark .serenity-site h2,
  [data-theme-mood="dark"] .serenity-site h2,
  html.dark .serenity-site h3,
  [data-theme-mood="dark"] .serenity-site h3 {
    color: var(--serenity-text-primary, #f5faf6) !important;
  }

  /* Base Text in Dark Mood */
  html.dark .serenity-site [class*="text-[#4d4b42]"],
  [data-theme-mood="dark"] .serenity-site [class*="text-[#4d4b42]"],
  html.dark .serenity-site [class*="text-[#4e4a3f]"],
  [data-theme-mood="dark"] .serenity-site [class*="text-[#4e4a3f]"] {
    color: var(--serenity-text-primary) !important;
  }

  /* Muted Text in Dark Mood */
  html.dark .serenity-site [class*="text-[#6c6b60]"],
  [data-theme-mood="dark"] .serenity-site [class*="text-[#6c6b60]"],
  html.dark .serenity-site [class*="text-[#6b695f]"],
  [data-theme-mood="dark"] .serenity-site [class*="text-[#6b695f]"],
  html.dark .serenity-site [class*="text-[#6a675d]"],
  [data-theme-mood="dark"] .serenity-site [class*="text-[#6a675d]"],
  html.dark .serenity-site [class*="text-[#66645b]"],
  [data-theme-mood="dark"] .serenity-site [class*="text-[#66645b]"],
  html.dark .serenity-site [class*="text-[#67645a]"],
  [data-theme-mood="dark"] .serenity-site [class*="text-[#67645a]"],
  html.dark .serenity-site [class*="text-[#69675e]"],
  [data-theme-mood="dark"] .serenity-site [class*="text-[#69675e]"],
  html.dark .serenity-site [class*="text-[#68665e]"],
  [data-theme-mood="dark"] .serenity-site [class*="text-[#68665e]"],
  html.dark .serenity-site [class*="text-[#625f56]"],
  [data-theme-mood="dark"] .serenity-site [class*="text-[#625f56]"],
  html.dark .serenity-site [class*="text-[#64695a]"],
  [data-theme-mood="dark"] .serenity-site [class*="text-[#64695a]"] {
    color: var(--serenity-text-muted) !important;
  }

  /* Section Backgrounds in Dark Mood */
  html.dark .serenity-site [class*="bg-[#f7f4ec]"],
  [data-theme-mood="dark"] .serenity-site [class*="bg-[#f7f4ec]"] {
    background-color: var(--serenity-bg-base) !important;
  }
  html.dark .serenity-site [class*="bg-[#f2f0e8]"],
  [data-theme-mood="dark"] .serenity-site [class*="bg-[#f2f0e8]"],
  html.dark .serenity-site [class*="bg-[#efeee7]"],
  [data-theme-mood="dark"] .serenity-site [class*="bg-[#efeee7]"] {
    background-color: #141a16 !important;
  }
  html.dark .serenity-site [class*="bg-[#fbfaf6]"],
  [data-theme-mood="dark"] .serenity-site [class*="bg-[#fbfaf6]"],
  html.dark .serenity-site [class*="bg-[#f2f0e9]"],
  [data-theme-mood="dark"] .serenity-site [class*="bg-[#f2f0e9]"] {
    background-color: #1b231e !important;
  }

  /* Cards in Dark Mood */
  html.dark .serenity-site article,
  [data-theme-mood="dark"] .serenity-site article,
  html.dark .serenity-site blockquote,
  [data-theme-mood="dark"] .serenity-site blockquote {
    background-color: var(--serenity-bg-card, #1b231e) !important;
    border-color: rgba(255, 255, 255, 0.08) !important;
  }

  /* Floating Service Icon Badges in Dark Mood */
  html.dark .serenity-site span.bg-\[\#fbfaf6\],
  [data-theme-mood="dark"] .serenity-site span.bg-\[\#fbfaf6\] {
    background-color: #242f28 !important;
    border-color: rgba(255, 255, 255, 0.12) !important;
  }

  /* Quote Mark in Testimonials */
  html.dark .serenity-site span.text-\[\#b6baa6\],
  [data-theme-mood="dark"] .serenity-site span.text-\[\#b6baa6\] {
    color: var(--serenity-accent, #8c987c) !important;
    opacity: 0.6 !important;
  }

  /* Reserve Section in Dark Mood */
  html.dark .serenity-site #reserve,
  [data-theme-mood="dark"] .serenity-site #reserve {
    background-color: #15221a !important;
  }

  /* Borders in Dark Mood */
  html.dark .serenity-site [class*="border-[#d9d5c9]"],
  [data-theme-mood="dark"] .serenity-site [class*="border-[#d9d5c9]"],
  html.dark .serenity-site [class*="border-[#d8d3c7]"],
  [data-theme-mood="dark"] .serenity-site [class*="border-[#d8d3c7]"],
  html.dark .serenity-site [class*="border-[#dcd8cc]"],
  [data-theme-mood="dark"] .serenity-site [class*="border-[#dcd8cc]"],
  html.dark .serenity-site [class*="border-[#cecbbf]"],
  [data-theme-mood="dark"] .serenity-site [class*="border-[#cecbbf]"] {
    border-color: rgba(255, 255, 255, 0.09) !important;
  }

  /* Fixed Header in Dark Mood */
  html.dark .serenity-site header,
  [data-theme-mood="dark"] .serenity-site header {
    background-color: var(--serenity-nav-bg, rgba(16, 20, 17, 0.95)) !important;
    border-bottom-color: rgba(255, 255, 255, 0.08) !important;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4) !important;
  }

  /* Mobile Drawer in Dark Mood */
  html.dark .serenity-site #serenity-mobile-menu,
  [data-theme-mood="dark"] .serenity-site #serenity-mobile-menu {
    background-color: rgba(16, 20, 17, 0.98) !important;
    border-bottom-color: rgba(255, 255, 255, 0.1) !important;
  }

  /* Footer in Dark Mood */
  html.dark .serenity-site footer,
  [data-theme-mood="dark"] .serenity-site footer {
    background-color: #0c100d !important;
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
  }
  html.dark .serenity-site footer form,
  [data-theme-mood="dark"] .serenity-site footer form {
    background-color: #19221b !important;
    border: 1px solid rgba(255, 255, 255, 0.12) !important;
  }
  html.dark .serenity-site footer input,
  [data-theme-mood="dark"] .serenity-site footer input {
    background-color: transparent !important;
    color: #f5faf6 !important;
  }

  /* ------------------------------------------------------------ */
  /* CUSTOM BACKGROUND MODE                                       */
  /* ------------------------------------------------------------ */
  [data-theme-bg-mode="custom"] .serenity-site,
  [data-theme-bg-mode="custom"] {
    --serenity-bg-base: var(--theme-bg-base, #f7f4ec) !important;
    --serenity-bg-surface: var(--theme-bg-surface, #fbfaf6) !important;
    --serenity-bg-card: var(--theme-bg-card, #fbfaf6) !important;
    --serenity-bg-card-subtle: var(--theme-bg-card-hover, #f2f0e8) !important;
  }
  [data-theme-bg-mode="custom"] .serenity-site {
    background-color: var(--serenity-bg-base) !important;
  }
  [data-theme-bg-mode="custom"] .serenity-site [class*="bg-[#f7f4ec]"] {
    background-color: var(--serenity-bg-base) !important;
  }
  [data-theme-bg-mode="custom"] .serenity-site [class*="bg-[#fbfaf6]"] {
    background-color: var(--serenity-bg-surface) !important;
  }
  [data-theme-bg-mode="custom"] .serenity-site [class*="bg-[#f2f0e8]"] {
    background-color: var(--serenity-bg-card-subtle) !important;
  }
`;

export function SerenitySpa() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      let active = "home";
      let activeTop = -1;
      const marker = window.scrollY + 88;
      navItems.forEach(([, id]) => {
        const section = document.getElementById(id);
        const top = section
          ? section.getBoundingClientRect().top + window.scrollY
          : -1;
        if (section && top <= marker && top > activeTop) {
          active = id;
          activeTop = top;
        }
      });
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 3
      )
        active = "contact";
      setActiveSection(active);
      setScrolled(window.scrollY > 20);
    };
    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) =>
      event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

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

  const navigate = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    setMenuOpen(false);
    setActiveSection(id);
    scrollToId(event, id);
  };

  return (
    <main className="serenity-site brand-motion motion-serenity bg-[#f7f4ec] text-[#4d4b42] [font-family:Arial,sans-serif] w-full max-w-full overflow-x-hidden">
      <style>{serenityThemeCss}</style>
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full max-w-full border-b transition duration-300 ${scrolled || menuOpen ? "border-white/10 bg-[#3f4937]/95 shadow-xl backdrop-blur-xl" : "border-transparent bg-gradient-to-b from-black/45 to-transparent"}`}
      >
        <div className="mx-auto flex h-[70px] max-w-[1510px] items-center justify-between px-5 lg:px-10">
          <a
            href="#home"
            onClick={(event) => navigate(event, "home")}
            className="flex items-center gap-3 text-white select-none"
          >
            <span className="grid h-11 w-9 place-items-center rounded-full border border-white/75">
              <Icon name="branch" className="h-7 w-7" />
            </span>
            <span className="serenity-serif text-lg tracking-[0.22em]">
              SERENITY SPA
            </span>
          </a>
          <nav className="hidden items-center gap-6 xl:flex">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => navigate(event, id)}
                aria-current={activeSection === id ? "location" : undefined}
                className={`relative py-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-white transition after:absolute after:inset-x-0 after:bottom-1 after:h-px after:bg-white after:transition-transform ${activeSection === id ? "active after:scale-x-100" : "text-white/80 after:scale-x-0 hover:text-white hover:after:scale-x-100"}`}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden xl:block">
            <Button className="bg-[#7d876c] px-8">
              Book a Retreat
            </Button>
          </div>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="serenity-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/50 text-white xl:hidden active:scale-95 transition"
          >
            <span className="flex flex-col gap-1.5">
              <i
                className={`h-px w-5 bg-current transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <i
                className={`h-px w-5 bg-current transition ${menuOpen ? "opacity-0" : ""}`}
              />
              <i
                className={`h-px w-5 bg-current transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 top-[70px] z-40 bg-black/45 backdrop-blur-xs xl:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <nav
              id="serenity-mobile-menu"
              className="fixed inset-x-0 top-[70px] z-50 w-full max-w-full max-h-[calc(100dvh-70px)] overflow-y-auto overflow-x-hidden border-b border-white/15 bg-[#3f4937]/98 p-5 shadow-2xl backdrop-blur-2xl xl:hidden"
            >
              <div className="space-y-1">
                {navItems.map(([label, id]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(event) => navigate(event, id)}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 text-xs font-semibold uppercase tracking-wider text-white transition ${activeSection === id ? "active bg-white/20 font-bold" : "hover:bg-white/10 text-white/85"}`}
                  >
                    <span>{label}</span>
                    <span className="text-xs text-white/60">→</span>
                  </a>
                ))}
              </div>
            </nav>
          </>
        )}
      </header>

      <section
        id="home"
        className="relative min-h-[640px] overflow-hidden text-white"
      >
        <img
          src={image("hero.webp")}
          alt="Peaceful massage room opening onto a lush garden"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/5" />
        <div className="relative mx-auto flex min-h-[640px] max-w-[1510px] items-center px-6 pb-12 pt-28 lg:px-20">
          <div className="max-w-[660px]">
            <h1 className="serenity-serif text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
              A retreat for
              <br />
              the nervous system.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
              Restorative massage, purposeful treatments,
              <br className="hidden sm:block" /> and calming rituals to help you
              slow down,
              <br className="hidden sm:block" /> reset, and return to balance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button>Book a Retreat</Button>
              <Button href="#services" outline>
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d5c9] bg-[#fbfaf6] px-5 py-6">
        <div className="mx-auto grid max-w-[1370px] grid-cols-2 gap-6 md:grid-cols-4">
          {[
            [
              "leaf",
              "Restorative Care",
              "Designed to calm, restore and renew.",
            ],
            [
              "person",
              "Licensed Therapists",
              "Highly trained professionals who truly care.",
            ],
            [
              "leaf",
              "Natural & Clean",
              "Pure oils and skincare. No harsh chemicals.",
            ],
            [
              "lotus",
              "Peaceful Setting",
              "A serene environment for deep relaxation.",
            ],
          ].map(([icon, title, copy]) => (
            <div
              key={title}
              className="flex gap-4 md:border-r md:border-[#d8d3c7] md:pr-5 md:last:border-0"
            >
              <Icon name={icon} className="h-10 w-10 shrink-0 text-[#7e886f]" />
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-[#6c6b60]">
                  {title}
                </h2>
                <p className="mt-1 text-xs leading-5 text-[#6b695f]">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-[1510px] px-5 py-9 lg:px-10"
      >
        <SectionTitle>Signature Services</SectionTitle>
        <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {services.map(([src, icon, title, copy]) => (
            <article
              key={title}
              className="group overflow-hidden rounded-xl border border-[#dcd8cc] bg-[#fbfaf6] shadow-[0_5px_20px_rgba(74,67,51,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[1.35/1] overflow-hidden">
                <img
                  src={image(src)}
                  alt={title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative px-4 pb-5 pt-8 text-center">
                <span className="absolute left-1/2 top-0 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#fbfaf6] text-[#7b856d] shadow-md">
                  <Icon name={icon} className="h-6 w-6" />
                </span>
                <h3 className="text-xs font-bold uppercase tracking-[0.08em]">
                  {title}
                </h3>
                <p className="mt-3 min-h-14 text-xs leading-5 text-[#6a675d]">
                  {copy}
                </p>
                <a
                  href="#packages"
                  className="mt-3 inline-block text-[11px] font-semibold uppercase tracking-wider text-[#64695a] hover:text-[#879174]"
                >
                  Learn More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="grid bg-[#f2f0e8] lg:grid-cols-[0.88fr_1.12fr]"
      >
        <img
          src={image("interior.webp")}
          alt="Serenity Spa relaxation lounge"
          className="h-full min-h-[420px] w-full object-cover"
        />
        <div className="relative flex items-center overflow-hidden px-7 py-12 lg:px-20">
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#777b69]">
              About Serenity Spa
            </p>
            <h2 className="serenity-serif mt-3 text-4xl leading-none md:text-5xl">
              Wellness is not a luxury,
              <br />
              it’s a way of being.
            </h2>
            <p className="mt-5 text-sm leading-6 text-[#66645b]">
              At Serenity Spa, we believe true wellbeing comes from slowing down
              and reconnecting—to yourself, to nature, and to what truly
              matters. Our treatments blend ancient healing wisdom with modern
              techniques to support your body, calm your mind, and uplift your
              spirit.
            </p>
            <Button href="#journal" className="mt-6">
              Our Philosophy
            </Button>
          </div>
          <Icon
            name="branch"
            className="absolute -right-4 bottom-8 h-36 w-36 rotate-[-20deg] text-[#aeb49a]/55"
          />
        </div>
      </section>

      <section
        id="packages"
        className="mx-auto max-w-[1510px] px-5 py-8 lg:px-10"
      >
        <SectionTitle>Wellness Journeys</SectionTitle>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {journeys.map(([src, title, time, copy, price]) => (
            <article
              key={title}
              className="group grid overflow-hidden rounded-xl border border-[#dcd8cc] bg-[#fbfaf6] sm:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="overflow-hidden">
                <img
                  src={image(src)}
                  alt={title}
                  className="h-full min-h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col p-5">
                <h3 className="serenity-serif text-lg uppercase tracking-[0.08em]">
                  {title}
                </h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#7b806d]">
                  {time}
                </p>
                <p className="mt-3 flex-1 text-xs leading-5 text-[#67645a]">
                  {copy}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <strong className="serenity-serif text-lg">{price}</strong>
                  <a
                    href="#reserve"
                    className="text-[11px] font-semibold uppercase"
                  >
                    Book Now →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#efeee7] px-5 py-7">
        <div className="mx-auto grid max-w-[1350px] grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-5">
          {[
            [
              "lotus",
              "Relaxation",
              "Helps lower cortisol and promotes deep calm.",
            ],
            ["lotus", "Recovery", "Supports muscle recovery and pain relief."],
            [
              "moon",
              "Better Sleep",
              "Encourages deeper, more restorative sleep.",
            ],
            ["head", "Stress Relief", "Reduces anxiety and improves mood."],
            [
              "stones",
              "Body Balance",
              "Restores energy flow and body alignment.",
            ],
          ].map(([icon, title, copy]) => (
            <div
              key={title}
              className="text-center lg:border-r lg:border-[#cecbbf] lg:pr-5 lg:last:border-0"
            >
              <Icon name={icon} className="mx-auto h-11 w-11 text-[#69715f]" />
              <h3 className="mt-3 text-xs font-bold uppercase tracking-[0.1em]">
                {title}
              </h3>
              <p className="mx-auto mt-2 max-w-40 text-xs leading-5 text-[#69675e]">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="therapists" className="mx-auto max-w-[1430px] px-5 py-8">
        <SectionTitle>Meet Our Therapists</SectionTitle>
        <div className="mt-7 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {therapists.map(([src, name, role, copy]) => (
            <article
              key={name}
              className="grid gap-4 sm:grid-cols-[0.82fr_1.18fr]"
            >
              <img
                src={image(src)}
                alt={`${name}, ${role}`}
                className="aspect-square h-full w-full rounded-xl object-cover object-top"
              />
              <div className="py-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.08em]">
                  {name}
                </h3>
                <p className="mt-1 text-xs text-[#777c68]">{role}</p>
                <p className="mt-3 text-xs leading-5 text-[#68665e]">{copy}</p>
                <div className="mt-3 flex gap-3 text-[#69745f]">
                  <a
                    href="#contact"
                    aria-label={`${name} photo gallery`}
                    className="transition hover:text-[#3e4835]"
                  >
                    <Camera className="h-4 w-4" strokeWidth={1.6} />
                  </a>
                  <a
                    href="#contact"
                    aria-label={`${name} professional profile`}
                    className="transition hover:text-[#3e4835]"
                  >
                    <BriefcaseBusiness className="h-4 w-4" strokeWidth={1.6} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="journal" className="mx-auto max-w-[1430px] px-5 pb-8">
        <SectionTitle>What Our Guests Say</SectionTitle>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map(([quote, name, portrait]) => (
            <blockquote
              key={name}
              className="relative rounded-xl bg-[#f2f0e9] p-7 shadow-[0_8px_28px_rgba(77,70,56,0.04)]"
            >
              <span className="serenity-serif absolute left-5 top-2 text-5xl text-[#b6baa6]">
                “
              </span>
              <p className="pl-8 text-sm leading-6 text-[#625f56]">{quote}</p>
              <footer className="mt-5 flex items-center gap-3 pl-8">
                <img
                  src={image(portrait)}
                  alt=""
                  className="h-9 w-9 rounded-full object-cover object-top"
                />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  — {name}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="gallery" className="grid grid-cols-3 sm:grid-cols-6">
        {galleryImages.map((src) => (
          <a
            key={src}
            href="#reserve"
            className="group aspect-[1.25/1] overflow-hidden"
          >
            <img
              src={image(src)}
              alt="Serenity Spa atmosphere"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-90"
            />
          </a>
        ))}
      </section>

      <section
        id="reserve"
        className="relative overflow-hidden bg-[#68725b] px-6 py-8 text-white"
      >
        <Icon
          name="branch"
          className="absolute -left-6 -top-8 h-36 w-36 rotate-45 text-white/8"
        />
        <Icon
          name="branch"
          className="absolute -right-6 bottom-0 h-36 w-36 -rotate-45 text-white/8"
        />
        <div className="relative mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="serenity-serif text-3xl md:text-4xl">
              Ready to relax, reset, and reconnect?
            </h2>
            <p className="mt-2 text-sm text-white/80">
              Your well-being is waiting.
            </p>
          </div>
          <div className="text-center">
            <Button outline className="px-10">
              Book Your Retreat
            </Button>
            <p className="mt-3 text-xs text-white/75">
              Or call us at (555) 123-4567
            </p>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-white/25 bg-[#4e5845] px-6 py-9 text-white"
      >
        <div className="mx-auto grid max-w-[1370px] gap-8 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_0.9fr_0.75fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-10 place-items-center rounded-full border border-white/60">
                <Icon name="branch" className="h-8 w-8" />
              </span>
              <span className="serenity-serif tracking-[0.2em]">
                SERENITY SPA
              </span>
            </div>
            <p className="mt-4 max-w-52 text-xs leading-5 text-white/70">
              A sanctuary for relaxation, healing, and renewal.
            </p>
            <div className="mt-4 flex gap-3 text-white/75">
              <a
                href="#home"
                aria-label="Photo gallery"
                className="hover:text-white"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href="#home"
                aria-label="Community"
                className="hover:text-white"
              >
                <UsersRound className="h-4 w-4" />
              </a>
              <a
                href="#home"
                aria-label="Professional network"
                className="hover:text-white"
              >
                <BriefcaseBusiness className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase">Contact</h3>
            <div className="mt-4 space-y-2 text-xs leading-5 text-white/75">
              <p>
                123 Wellness Way
                <br />
                San Diego, CA 92101
              </p>
              <p>(555) 123-4567</p>
              <p>hello@serenityspa.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase">Hours</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs leading-5 text-white/75">
              <span>
                Monday – Friday
                <br />
                Saturday
                <br />
                Sunday
              </span>
              <span>
                9am – 8pm
                <br />
                9am – 7pm
                <br />
                10am – 6pm
              </span>
            </div>
            <p className="mt-3 text-xs">By appointment</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase">Quick Links</h3>
            <div className="mt-4 grid gap-1.5 text-xs text-white/75">
              {navItems.slice(2).map(([label, id]) => (
                <a key={id} href={`#${id}`} className="hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase">Stay In Touch</h3>
            <p className="mt-4 text-xs leading-5 text-white/70">
              Sign up for wellness tips, exclusive offers, and mindful
              inspiration.
            </p>
            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-4 flex overflow-hidden rounded-md bg-white"
            >
              <label htmlFor="serenity-email" className="sr-only">
                Email address
              </label>
              <input
                id="serenity-email"
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 px-3 py-2.5 text-xs text-[#4e5845] outline-none"
              />
              <button type="submit" className="bg-[#7b856c] px-4">
                →
              </button>
            </form>
          </div>
        </div>
      </footer>
    </main>
  );
}
