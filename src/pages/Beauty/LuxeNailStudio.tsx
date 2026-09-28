import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import {
  Brush,
  CalendarCheck,
  Camera,
  Diamond,
  Footprints,
  Gem,
  Globe,
  Hand,
  Heart,
  Mail,
  MapPin,
  Music2,
  Paintbrush,
  Phone,
  Pin,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  UserRound,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

const luxeImages = import.meta.glob(
  "../../assets/optimized/beauty/luxe-nail/*.webp",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
) as Record<string, string>;

const image = (name: string) =>
  luxeImages[`../../assets/optimized/beauty/luxe-nail/${name}`];

const navItems = [
  ["Home", "home"],
  ["Services", "services"],
  ["About Us", "about"],
  ["Nail Gallery", "gallery"],
  ["Our Team", "team"],
  ["Reviews", "reviews"],
  ["Shop", "shop"],
  ["Contact", "contact"],
];

const services = [
  [
    "sparkles",
    "Manicures",
    "Classic, spa & luxury manicures for healthy, beautiful nails.",
  ],
  [
    "polish",
    "Gel Sets",
    "Flawless gel polish with long-lasting shine & durability.",
  ],
  [
    "nail",
    "Acrylic / Sculpted Sets",
    "Custom shapes, strength & length designed for you.",
  ],
  [
    "brush",
    "Nail Art",
    "Hand-painted designs, details & trends made uniquely you.",
  ],
  [
    "foot",
    "Pedicures",
    "Relaxing, rejuvenating pedicures for soft, healthy feet.",
  ],
  [
    "ring",
    "Bridal / Event Nails",
    "Elegant nail styling for your special moments.",
  ],
];

const designs = [
  ["frenchtip.webp", "French Tips"],
  ["nude.webp", "Nude Gloss"],
  ["chrome.webp", "Chrome"],
  ["nailart.webp", "Nail Art"],
  ["sclupt.webp", "Sculpted Sets"],
];

const artists = [
  ["lauren.webp", "Lauren", "Senior Nail Artist"],
  ["maya.webp", "Maya", "Nail Specialist"],
  ["jasmin.webp", "Jasmine", "Nail Artist"],
  ["tiffny.webp", "Tiffany", "Nail Technician"],
];

const reviews = [
  [
    "“Luxe Nail Studio is absolutely amazing! The attention to detail and cleanliness is unmatched.”",
    "Jessica M.",
  ],
  [
    "“My nails have never looked better. The team is so talented and so welcoming!”",
    "Ashley R.",
  ],
  [
    "“The best nail salon experience! Beautiful results every single time.”",
    "Nicole T.",
  ],
];

const products = [
  ["cuticaloil.webp", "Cuticle Oil", "Nourish & Hydrate", "$14.00"],
  ["handcream.webp", "Hand Cream", "Deep Hydration", "$16.00"],
  [
    "nailstarghtner.webp",
    "Nail Strengthener",
    "Stronger, Healthier Nails",
    "$16.00",
  ],
  ["geltopcoat.webp", "Gel Top Coat", "Long-Lasting Shine", "$16.00"],
  ["nudeblush.webp", "Nude Blush", "Gel Polish", "$15.00"],
  ["nailkit.webp", "Nail Care Kit", "Essentials for Home", "$22.00"],
];

const socialImages = [
  "gallary01.webp",
  "gallary02.webp",
  "gallary03.webp",
  "gallary04.webp",
  "gallary05.webp",
  "gallary06.webp",
  "gallary07.webp",
  "gallary08.webp",
  "gallary09.webp",
  "gallary10.webp",
];

const heroSlides = [
  ["hero.webp", "Signature Nude"],
  ["frenchtip.webp", "Modern French"],
  ["nude.webp", "Nude Gloss"],
  ["chrome.webp", "Liquid Chrome"],
  ["nailart.webp", "Fine Art Details"],
  ["sclupt.webp", "Sculpted Sets"],
];

function Icon({
  name,
  className = "h-7 w-7",
}: {
  name: string;
  className?: string;
}) {
  const icons: Record<string, LucideIcon> = {
    sparkles: Sparkles,
    polish: Paintbrush,
    nail: Hand,
    brush: Brush,
    foot: Footprints,
    ring: Gem,
    shield: ShieldCheck,
    diamond: Diamond,
    heart: Heart,
    person: UserRound,
    calendar: CalendarCheck,
    bag: ShoppingBag,
  };
  const Component = icons[name] ?? Sparkles;
  return (
    <Component aria-hidden="true" className={className} strokeWidth={1.4} />
  );
}

function scrollToSection(
  event?: MouseEvent<HTMLAnchorElement>,
  sectionId: string = "booking",
) {
  const section = document.getElementById(sectionId);
  if (!section) return;
  event?.preventDefault();
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = section.getBoundingClientRect().top + window.scrollY - 72;
  window.scrollTo({
    top: Math.max(0, top),
    behavior: reduced ? "auto" : "smooth",
  });
  window.history.replaceState(null, "", `#${sectionId}`);
}

function Button({
  children,
  href = "#booking",
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
    if (href.startsWith("#")) scrollToSection(event, href.slice(1));
  };
  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex min-h-11 items-center justify-center gap-3 rounded-md px-7 py-3 text-[10px] font-bold uppercase tracking-[0.08em] transition duration-300 hover:-translate-y-0.5 ${outline ? "border border-[#d7c1a7] bg-white/65 text-[#3f2d25] hover:border-[#bd7a20] hover:text-[#a86c1d]" : "bg-gradient-to-r from-[#b87820] to-[#d09943] text-white shadow-lg shadow-[#9a651b]/20 hover:shadow-xl"} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="h-px w-10 bg-[#d8b277]" />
      <h2 className="luxe-serif text-center text-[17px] uppercase tracking-[0.14em]">
        {children}
      </h2>
      <span className="h-px w-10 bg-[#d8b277]" />
    </div>
  );
}

const luxeThemeCss = `
  :root {
    --luxe-accent: #b47522;
    --luxe-accent-hover: #9a651b;
    --luxe-accent-sec: #d09943;
    --luxe-accent-soft: rgba(180, 117, 34, 0.12);
    --luxe-accent-glow: rgba(180, 117, 34, 0.35);
    --luxe-bg-base: #fffdf9;
    --luxe-bg-surface: #fffdfa;
    --luxe-bg-card: #ffffff;
    --luxe-bg-card-subtle: #f8f2e9;
    --luxe-text-primary: #34251f;
    --luxe-text-muted: #5e514b;
    --luxe-border: #eadfce;
    --luxe-nav-bg: rgba(255, 253, 250, 0.95);
  }

  /* ------------------------------------------------------------ */
  /* THEME PRESET ADAPTATIONS                                     */
  /* ------------------------------------------------------------ */
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site,
  [data-theme-active="true"]:not([data-theme-preset="original"]) {
    --luxe-accent: var(--theme-accent-primary, #b47522) !important;
    --luxe-accent-hover: var(--theme-accent-hover, #9a651b) !important;
    --luxe-accent-sec: var(--theme-accent-secondary, #d09943) !important;
    --luxe-accent-soft: color-mix(in srgb, var(--luxe-accent) 14%, transparent) !important;
    --luxe-accent-glow: var(--theme-accent-glow, rgba(180, 117, 34, 0.35)) !important;
    --luxe-border: var(--theme-border, color-mix(in srgb, var(--luxe-accent) 30%, transparent)) !important;
  }

  [data-theme-preset="emerald"] .luxe-site,
  [data-theme-preset="emerald"] {
    --luxe-accent: #10B981 !important;
    --luxe-accent-hover: #059669 !important;
    --luxe-accent-sec: #34D399 !important;
    --luxe-accent-soft: rgba(16, 185, 129, 0.14) !important;
    --luxe-accent-glow: rgba(16, 185, 129, 0.45) !important;
    --luxe-border: rgba(16, 185, 129, 0.35) !important;
  }
  [data-theme-preset="ocean"] .luxe-site,
  [data-theme-preset="ocean"],
  [data-theme-preset="azure"] .luxe-site,
  [data-theme-preset="azure"] {
    --luxe-accent: #0284C7 !important;
    --luxe-accent-hover: #0369A1 !important;
    --luxe-accent-sec: #38BDF8 !important;
    --luxe-accent-soft: rgba(2, 132, 199, 0.14) !important;
    --luxe-accent-glow: rgba(2, 132, 199, 0.45) !important;
    --luxe-border: rgba(2, 132, 199, 0.35) !important;
  }
  [data-theme-preset="sunset"] .luxe-site,
  [data-theme-preset="sunset"] {
    --luxe-accent: #EA580C !important;
    --luxe-accent-hover: #C2410C !important;
    --luxe-accent-sec: #FB923C !important;
    --luxe-accent-soft: rgba(234, 88, 12, 0.14) !important;
    --luxe-accent-glow: rgba(234, 88, 12, 0.45) !important;
    --luxe-border: rgba(234, 88, 12, 0.35) !important;
  }
  [data-theme-preset="purple"] .luxe-site,
  [data-theme-preset="purple"],
  [data-theme-preset="amethyst"] .luxe-site,
  [data-theme-preset="amethyst"],
  [data-theme-preset="royal"] .luxe-site,
  [data-theme-preset="royal"] {
    --luxe-accent: #9333EA !important;
    --luxe-accent-hover: #7E22CE !important;
    --luxe-accent-sec: #C084FC !important;
    --luxe-accent-soft: rgba(147, 51, 234, 0.14) !important;
    --luxe-accent-glow: rgba(147, 51, 234, 0.45) !important;
    --luxe-border: rgba(147, 51, 234, 0.35) !important;
  }
  [data-theme-preset="amber"] .luxe-site,
  [data-theme-preset="amber"],
  [data-theme-preset="golden"] .luxe-site,
  [data-theme-preset="golden"] {
    --luxe-accent: #D97706 !important;
    --luxe-accent-hover: #B45309 !important;
    --luxe-accent-sec: #FBBF24 !important;
    --luxe-accent-soft: rgba(217, 119, 6, 0.14) !important;
    --luxe-accent-glow: rgba(217, 119, 6, 0.45) !important;
    --luxe-border: rgba(217, 119, 6, 0.35) !important;
  }
  [data-theme-preset="cyberpunk"] .luxe-site,
  [data-theme-preset="cyberpunk"] {
    --luxe-accent: #06B6D4 !important;
    --luxe-accent-hover: #0891B2 !important;
    --luxe-accent-sec: #A855F7 !important;
    --luxe-accent-soft: rgba(6, 182, 212, 0.14) !important;
    --luxe-accent-glow: rgba(6, 182, 212, 0.45) !important;
    --luxe-border: rgba(6, 182, 212, 0.35) !important;
  }
  [data-theme-preset="terracotta"] .luxe-site,
  [data-theme-preset="terracotta"] {
    --luxe-accent: #EA580C !important;
    --luxe-accent-hover: #C2410C !important;
    --luxe-accent-sec: #0D9488 !important;
    --luxe-accent-soft: rgba(234, 88, 12, 0.14) !important;
    --luxe-accent-glow: rgba(234, 88, 12, 0.45) !important;
    --luxe-border: rgba(234, 88, 12, 0.35) !important;
  }
  [data-theme-preset="obsidian"] .luxe-site,
  [data-theme-preset="obsidian"] {
    --luxe-accent: #475569 !important;
    --luxe-accent-hover: #334155 !important;
    --luxe-accent-sec: #64748B !important;
    --luxe-accent-soft: rgba(71, 85, 105, 0.14) !important;
    --luxe-accent-glow: rgba(71, 85, 105, 0.45) !important;
    --luxe-border: rgba(71, 85, 105, 0.35) !important;
  }

  /* Universal solid icon box prevention */
  .luxe-site svg:not(.fill-current):not([class*="fill-"]) {
    fill: none !important;
  }

  /* ------------------------------------------------------------ */
  /* ACTIVE THEME PRESET OVERRIDES (Non-Original Presets)        */
  /* ------------------------------------------------------------ */
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="text-[#b47522]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="text-[#b87820]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="text-[#bd7b27]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site .active[class*="text-[#a96c1d]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="text-[#b57724]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="text-[#b77723]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="text-[#b87929]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="text-[#bf7e23]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="text-[#bf7c25]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="text-[#ad7024]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="text-[#a66b28]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="text-[#c08227]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="text-[#95642d]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="text-[#9d6b32]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="text-[#c88b3e]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="text-[#c98835]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="text-[#ce8d69]"] {
    color: var(--luxe-accent) !important;
  }

  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="text-[#c99a58]"] {
    color: var(--luxe-accent-sec) !important;
  }

  /* Nav link underline & navbar links transparent protection */
  .luxe-site header nav:not(#luxe-mobile-menu) a {
    background-color: transparent !important;
  }
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site header nav:not(#luxe-mobile-menu) a {
    background-color: transparent !important;
  }
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site header nav:not(#luxe-mobile-menu) a.active {
    color: var(--luxe-accent) !important;
    background-color: transparent !important;
  }
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site header nav:not(#luxe-mobile-menu) a:hover {
    color: var(--luxe-accent) !important;
  }

  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="after:bg-[#bd7b27]"]::after {
    background-color: var(--luxe-accent) !important;
  }

  /* Buttons & Gradients */
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="from-[#b87820]"] {
    background: linear-gradient(to right, var(--luxe-accent), var(--luxe-accent-sec)) !important;
  }

  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="shadow-[#9a651b]"] {
    box-shadow: 0 10px 25px var(--luxe-accent-glow) !important;
  }

  /* Button outline hover & active */
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="hover:border-[#bd7a20]"]:hover {
    border-color: var(--luxe-accent) !important;
  }
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="hover:text-[#a86c1d]"]:hover,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="hover:text-[#b47522]"]:hover,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="hover:text-[#a86d22]"]:hover {
    color: var(--luxe-accent-hover) !important;
  }

  /* Borders & accents */
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="border-[#bd7b27]"] {
    border-color: var(--luxe-accent) !important;
  }
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site button[class*="bg-[#bd7b27]"] {
    background-color: var(--luxe-accent) !important;
  }

  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="hover:border-[#d3a76b]"]:hover {
    border-color: var(--luxe-accent) !important;
  }

  /* Section divider lines */
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site span.bg-\[\#d8b277\],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site span.bg-\[\#c68a3d\],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site span.bg-\[\#c8934d\],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site span.bg-\[\#e3d5c4\] {
    background-color: var(--luxe-accent) !important;
  }

  /* Mobile active link background */
  [data-theme-active="true"]:not([data-theme-preset="original"]) .luxe-site [class*="bg-[#f5eadb]"] {
    background-color: var(--luxe-accent-soft) !important;
  }

  /* ------------------------------------------------------------ */
  /* DARK MOOD                                                    */
  /* ------------------------------------------------------------ */
  html.dark .luxe-site,
  body.dark .luxe-site,
  [data-theme-mood="dark"] .luxe-site,
  :root[data-theme-mood="dark"] .luxe-site,
  :root[data-theme-active="true"][data-theme-mood="dark"] .luxe-site,
  :root.dark .luxe-site {
    --luxe-bg-base: #100c0a !important;
    --luxe-bg-surface: #181310 !important;
    --luxe-bg-card: #1e1915 !important;
    --luxe-bg-card-subtle: #251e19 !important;
    --luxe-text-primary: #fbf6f0 !important;
    --luxe-text-muted: #bcaea7 !important;
    --luxe-border: rgba(255, 255, 255, 0.1) !important;
    --luxe-nav-bg: rgba(16, 12, 10, 0.95) !important;
  }

  html.dark .luxe-site,
  body.dark .luxe-site,
  [data-theme-mood="dark"] .luxe-site {
    background-color: var(--luxe-bg-base) !important;
    color: var(--luxe-text-primary) !important;
  }

  /* Text Overrides in Dark Mood */
  html.dark .luxe-site [class*="text-[#34251f]"],
  [data-theme-mood="dark"] .luxe-site [class*="text-[#34251f]"],
  html.dark .luxe-site [class*="text-[#3f2d25]"],
  [data-theme-mood="dark"] .luxe-site [class*="text-[#3f2d25]"],
  html.dark .luxe-site [class*="text-[#4d3a31]"],
  [data-theme-mood="dark"] .luxe-site [class*="text-[#4d3a31]"] {
    color: var(--luxe-text-primary) !important;
  }

  html.dark .luxe-site [class*="text-[#51453f]"],
  [data-theme-mood="dark"] .luxe-site [class*="text-[#51453f]"],
  html.dark .luxe-site [class*="text-[#524640]"],
  [data-theme-mood="dark"] .luxe-site [class*="text-[#524640]"],
  html.dark .luxe-site [class*="text-[#50443e]"],
  [data-theme-mood="dark"] .luxe-site [class*="text-[#50443e]"],
  html.dark .luxe-site [class*="text-[#5e514b]"],
  [data-theme-mood="dark"] .luxe-site [class*="text-[#5e514b]"],
  html.dark .luxe-site [class*="text-[#5f524b]"],
  [data-theme-mood="dark"] .luxe-site [class*="text-[#5f524b]"],
  html.dark .luxe-site [class*="text-[#61534d]"],
  [data-theme-mood="dark"] .luxe-site [class*="text-[#61534d]"],
  html.dark .luxe-site [class*="text-[#64564f]"],
  [data-theme-mood="dark"] .luxe-site [class*="text-[#64564f]"],
  html.dark .luxe-site [class*="text-[#5f514b]"],
  [data-theme-mood="dark"] .luxe-site [class*="text-[#5f514b]"],
  html.dark .luxe-site [class*="text-[#77675e]"],
  [data-theme-mood="dark"] .luxe-site [class*="text-[#77675e]"] {
    color: var(--luxe-text-muted) !important;
  }

  /* Base & Section Backgrounds in Dark Mood */
  html.dark .luxe-site [class*="bg-[#fffdf9]"],
  [data-theme-mood="dark"] .luxe-site [class*="bg-[#fffdf9]"] {
    background-color: var(--luxe-bg-base) !important;
  }

  html.dark .luxe-site [class*="bg-[#f8f2e9]"],
  [data-theme-mood="dark"] .luxe-site [class*="bg-[#f8f2e9]"] {
    background-color: #140f0c !important;
  }

  /* Cards in Dark Mood */
  html.dark .luxe-site [class*="bg-white"],
  [data-theme-mood="dark"] .luxe-site [class*="bg-white"],
  html.dark .luxe-site [class*="bg-[#fffdfa]"],
  [data-theme-mood="dark"] .luxe-site [class*="bg-[#fffdfa]"],
  html.dark .luxe-site [class*="bg-[#fffaf4]"],
  [data-theme-mood="dark"] .luxe-site [class*="bg-[#fffaf4]"] {
    background-color: var(--luxe-bg-card, #1e1915) !important;
    border-color: rgba(255, 255, 255, 0.09) !important;
  }

  /* Booking section in Dark Mood */
  html.dark .luxe-site #booking > div,
  [data-theme-mood="dark"] .luxe-site #booking > div {
    background-color: #1c1511 !important;
  }
  html.dark .luxe-site #booking div.bg-gradient-to-r,
  [data-theme-mood="dark"] .luxe-site #booking div.bg-gradient-to-r {
    background: linear-gradient(to right, transparent, rgba(28, 21, 17, 0.95), #1c1511) !important;
  }

  /* Borders in Dark Mood */
  html.dark .luxe-site [class*="border-[#e5d7c6]"],
  [data-theme-mood="dark"] .luxe-site [class*="border-[#e5d7c6]"],
  html.dark .luxe-site [class*="border-[#dcc7aa]"],
  [data-theme-mood="dark"] .luxe-site [class*="border-[#dcc7aa]"],
  html.dark .luxe-site [class*="border-[#eadfce]"],
  [data-theme-mood="dark"] .luxe-site [class*="border-[#eadfce]"],
  html.dark .luxe-site [class*="border-[#e9ddce]"],
  [data-theme-mood="dark"] .luxe-site [class*="border-[#e9ddce]"],
  html.dark .luxe-site [class*="border-[#e8ddce]"],
  [data-theme-mood="dark"] .luxe-site [class*="border-[#e8ddce]"],
  html.dark .luxe-site [class*="border-[#e3d5c4]"],
  [data-theme-mood="dark"] .luxe-site [class*="border-[#e3d5c4]"],
  html.dark .luxe-site [class*="border-[#e1cfae]"],
  [data-theme-mood="dark"] .luxe-site [class*="border-[#e1cfae]"],
  html.dark .luxe-site [class*="border-[#d7c1a7]"],
  [data-theme-mood="dark"] .luxe-site [class*="border-[#d7c1a7]"],
  html.dark .luxe-site [class*="border-[#e3d4c0]"],
  [data-theme-mood="dark"] .luxe-site [class*="border-[#e3d4c0]"],
  html.dark .luxe-site [class*="border-[#e5d8c8]"],
  [data-theme-mood="dark"] .luxe-site [class*="border-[#e5d8c8]"] {
    border-color: rgba(255, 255, 255, 0.1) !important;
  }

  /* Fixed Header in Dark Mood */
  html.dark .luxe-site header,
  [data-theme-mood="dark"] .luxe-site header {
    background-color: var(--luxe-nav-bg, rgba(16, 12, 10, 0.95)) !important;
    border-bottom-color: rgba(255, 255, 255, 0.08) !important;
    box-shadow: 0 10px 35px rgba(0, 0, 0, 0.4) !important;
  }

  /* Mobile menu in Dark Mood */
  html.dark .luxe-site #luxe-mobile-menu,
  [data-theme-mood="dark"] .luxe-site #luxe-mobile-menu {
    background-color: rgba(16, 12, 10, 0.98) !important;
    border-bottom-color: rgba(255, 255, 255, 0.1) !important;
  }
  html.dark .luxe-site #luxe-mobile-menu a,
  [data-theme-mood="dark"] .luxe-site #luxe-mobile-menu a {
    color: #e5d9d3 !important;
  }
  html.dark .luxe-site #luxe-mobile-menu a:hover,
  [data-theme-mood="dark"] .luxe-site #luxe-mobile-menu a:hover {
    background-color: #241d18 !important;
  }

  /* Footer in Dark Mood */
  html.dark .luxe-site footer,
  [data-theme-mood="dark"] .luxe-site footer {
    background-color: #0c0908 !important;
    border-top: 1px solid rgba(255, 255, 255, 0.08) !important;
  }

  /* Inputs in Dark Mood */
  html.dark .luxe-site input,
  [data-theme-mood="dark"] .luxe-site input {
    background-color: #1e1915 !important;
    color: #fbf6f0 !important;
    border: 1px solid rgba(255, 255, 255, 0.15) !important;
  }

  /* ------------------------------------------------------------ */
  /* CUSTOM BACKGROUND MODE                                       */
  /* ------------------------------------------------------------ */
  [data-theme-bg-mode="custom"] .luxe-site,
  [data-theme-bg-mode="custom"] {
    --luxe-bg-base: var(--theme-bg-base, #fffdf9) !important;
    --luxe-bg-surface: var(--theme-bg-surface, #fffdfa) !important;
    --luxe-bg-card: var(--theme-bg-card, #ffffff) !important;
    --luxe-bg-card-subtle: var(--theme-bg-card-hover, #f8f2e9) !important;
  }
  [data-theme-bg-mode="custom"] .luxe-site {
    background-color: var(--luxe-bg-base) !important;
  }
  [data-theme-bg-mode="custom"] .luxe-site [class*="bg-[#fffdf9]"] {
    background-color: var(--luxe-bg-base) !important;
  }
  [data-theme-bg-mode="custom"] .luxe-site [class*="bg-[#fffdfa]"] {
    background-color: var(--luxe-bg-surface) !important;
  }
  [data-theme-bg-mode="custom"] .luxe-site [class*="bg-white"] {
    background-color: var(--luxe-bg-card) !important;
  }
  [data-theme-bg-mode="custom"] .luxe-site [class*="bg-[#f8f2e9]"] {
    background-color: var(--luxe-bg-card-subtle) !important;
  }
`;

export function LuxeNailStudio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [heroSlide, setHeroSlide] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      let active = "home";
      let activeTop = -1;
      const marker = window.scrollY + 92;
      navItems.forEach(([, id]) => {
        const section = document.getElementById(id);
        const sectionTop = section
          ? section.getBoundingClientRect().top + window.scrollY
          : -1;
        if (section && sectionTop <= marker && sectionTop > activeTop) {
          active = id;
          activeTop = sectionTop;
        }
      });
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 3
      )
        active = "contact";
      setActiveSection(active);
      setScrolled(window.scrollY > 12);
    };
    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    addEventListener("scroll", requestUpdate, { passive: true });
    addEventListener("resize", requestUpdate);
    return () => {
      cancelAnimationFrame(frame);
      removeEventListener("scroll", requestUpdate);
      removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const closeOnEscape = (event: KeyboardEvent) =>
      event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
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

  useEffect(() => {
    const interval = window.setInterval(() => {
      setHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 4500);
    return () => window.clearInterval(interval);
  }, []);

  const navigate = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    setMenuOpen(false);
    setActiveSection(id);
    scrollToSection(event, id);
  };

  return (
    <main className="luxe-site brand-motion motion-luxenail bg-[#fffdf9] text-[#34251f] [font-family:Arial,sans-serif] pt-[72px] w-full max-w-full overflow-x-hidden">
      <style>{luxeThemeCss}</style>
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full max-w-full border-b bg-[#fffdfa]/95 backdrop-blur-xl transition duration-300 ${scrolled ? "border-[#e5d7c6] shadow-[0_8px_30px_rgba(74,47,29,0.10)]" : "border-transparent"}`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1510px] items-center justify-between px-5 lg:px-10">
          <a
            href="#home"
            onClick={(event) => navigate(event, "home")}
            className="text-center leading-none"
          >
            <span className="luxe-serif block text-[30px] tracking-[0.16em] text-[#b47522]">
              LUXE
            </span>
            <span className="mt-1 block text-[8px] font-bold uppercase tracking-[0.32em]">
              Nail Studio
            </span>
          </a>
          <nav className="hidden items-center gap-7 xl:flex">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => navigate(event, id)}
                aria-current={activeSection === id ? "location" : undefined}
                className={`relative py-3 text-[10px] font-semibold transition after:absolute after:inset-x-0 after:bottom-1 after:h-px after:bg-[#bd7b27] after:transition-transform ${activeSection === id ? "active text-[#a96c1d] after:scale-x-100" : "after:scale-x-0 hover:text-[#a96c1d] hover:after:scale-x-100"}`}
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden xl:block">
            <Button className="rounded-full px-7">
              Book Now <Icon name="calendar" className="h-4 w-4" />
            </Button>
          </div>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="luxe-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className={`grid h-10 w-10 place-items-center rounded-full border transition xl:hidden ${menuOpen ? "border-[#bd7b27] bg-[#bd7b27] text-white" : "border-[#dcc7aa]"}`}
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
              className="fixed inset-0 top-[72px] z-40 bg-black/35 backdrop-blur-xs xl:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <nav
              id="luxe-mobile-menu"
              className="fixed inset-x-0 top-[72px] z-50 w-full max-w-full max-h-[calc(100dvh-72px)] overflow-y-auto overflow-x-hidden border-b border-[#eadfce] bg-[#fffdf9]/98 p-5 shadow-2xl backdrop-blur-xl xl:hidden"
            >
              <div className="space-y-1">
                {navItems.map(([label, id]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(event) => navigate(event, id)}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 text-xs font-semibold tracking-wide transition ${activeSection === id ? "active bg-[#f5eadb] text-[#a96c1d] font-bold" : "hover:bg-[#faf3e9] text-[#4d3a31]"}`}
                  >
                    <span>{label}</span>
                    <span className="text-xs text-[#b87820]">→</span>
                  </a>
                ))}
              </div>
            </nav>
          </>
        )}
      </header>

      <section id="home" className="overflow-hidden bg-[#f8f2e9]">
        <div className="mx-auto grid min-h-[580px] max-w-[1600px] lg:grid-cols-[0.93fr_1.07fr]">
          <div className="relative z-10 flex items-center px-6 py-16 sm:px-12 lg:px-20 xl:pl-20">
            <div className="max-w-[610px]">
              <p className="text-[12px] font-bold uppercase tracking-[0.17em] text-[#b57724]">
                Self-Care Made Polished
              </p>
              <h1 className="luxe-serif mt-4 text-[54px] leading-[0.95] tracking-[-0.03em] sm:text-[70px] xl:text-[76px]">
                Polished Nails.
                <br />
                <em className="font-normal text-[#c99a58]">Confident You.</em>
              </h1>
              <span className="mt-6 block h-px w-16 bg-[#c68a3d]" />
              <p className="mt-5 max-w-lg text-[14px] leading-6 text-[#51453f]">
                Luxury nail care in a clean, relaxing space.
                <br />
                Where artistry, hygiene, and premium products
                <br className="hidden sm:block" /> come together for flawless
                results.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button>
                  Book Your Appointment <span className="text-lg">→</span>
                </Button>
                <Button href="#services" outline>
                  View Services
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3 text-[10px]">
                <span className="tracking-[0.12em] text-[#bf7e23]">
                  ★★★★★{" "}
                  <b className="ml-2 font-normal text-[#50443e]">
                    4.9/5 from 600+ happy clients
                  </b>
                </span>
                <span className="hidden h-5 w-px bg-[#d9cbbb] sm:block" />
                <span className="flex items-center gap-2">
                  <Icon name="shield" className="h-5 w-5 text-[#bd7b27]" />{" "}
                  Clean. Safe. Trusted.
                </span>
              </div>
            </div>
          </div>
          <div
            className="group relative min-h-[470px] overflow-hidden bg-[#eaded1] lg:min-h-0"
            role="region"
            aria-roledescription="carousel"
            aria-label="Featured nail designs"
          >
            <img
              key={heroSlides[heroSlide][0]}
              src={image(heroSlides[heroSlide][0])}
              alt={heroSlides[heroSlide][1]}
              className="fade-in absolute inset-0 h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#f8f2e9]/45 via-transparent to-black/10" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 bg-gradient-to-t from-black/55 via-black/10 to-transparent px-5 pb-5 pt-20 sm:px-7 sm:pb-7">
              <div className="text-white drop-shadow-md">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/75">
                  The Luxe Edit
                </p>
                <p className="luxe-serif mt-1 text-2xl">
                  {heroSlides[heroSlide][1]}
                </p>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous nail design"
                  onClick={() =>
                    setHeroSlide(
                      (current) =>
                        (current - 1 + heroSlides.length) % heroSlides.length,
                    )
                  }
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/55 bg-white/15 text-xl text-white backdrop-blur-md transition hover:scale-105 hover:bg-white hover:text-[#8f5d25]"
                >
                  <span aria-hidden="true">&lsaquo;</span>
                </button>
                <button
                  type="button"
                  aria-label="Next nail design"
                  onClick={() =>
                    setHeroSlide((current) => (current + 1) % heroSlides.length)
                  }
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/55 bg-white/15 text-xl text-white backdrop-blur-md transition hover:scale-105 hover:bg-white hover:text-[#8f5d25]"
                >
                  <span aria-hidden="true">&rsaquo;</span>
                </button>
              </div>
            </div>
            <div className="absolute right-5 top-5 flex gap-1.5 rounded-full bg-black/15 p-2 backdrop-blur-md sm:right-7 sm:top-7">
              {heroSlides.map(([, label], index) => (
                <button
                  key={label}
                  type="button"
                  aria-label={`Show ${label}`}
                  aria-current={heroSlide === index ? "true" : undefined}
                  onClick={() => setHeroSlide(index)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${heroSlide === index ? "w-7 bg-white" : "w-1.5 bg-white/55 hover:bg-white"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-[1510px] px-5 py-8 lg:px-10"
      >
        <SectionTitle>Our Services</SectionTitle>
        <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {services.map(([icon, title, copy]) => (
            <article
              key={title}
              className="group rounded-xl border border-[#eadfce] bg-[#fffdfa] px-4 py-7 text-center shadow-[0_7px_25px_rgba(100,66,35,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#d3a76b] hover:shadow-xl"
            >
              <Icon
                name={icon}
                className="mx-auto h-11 w-11 text-[#ce8d69] transition group-hover:scale-110"
              />
              <h3 className="luxe-serif mt-5 text-xl leading-5">{title}</h3>
              <p className="mx-auto mt-3 max-w-40 text-[10px] leading-4 text-[#524640]">
                {copy}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-auto grid max-w-[1510px] overflow-hidden px-5 pb-8 lg:grid-cols-2 lg:px-10"
      >
        <img
          src={image("interior.webp")}
          alt="Warm and luxurious Luxe Nail Studio interior"
          className="h-full min-h-[390px] w-full rounded-t-xl object-cover lg:rounded-l-xl lg:rounded-tr-none"
        />
        <div className="flex items-center bg-[#fffdfa] px-6 py-10 lg:px-12">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.17em] text-[#b77723]">
              About Luxe Nail Studio
            </p>
            <h2 className="luxe-serif mt-3 text-3xl md:text-4xl">
              Artistry. Hygiene. Premium Care.
            </h2>
            <span className="mt-5 block h-px w-14 bg-[#c8934d]" />
            <p className="mt-5 max-w-2xl text-[12px] leading-5 text-[#51453f]">
              At Luxe Nail Studio, we believe nails are more than beauty—they’re
              a reflection of self-care. Our mission is to deliver a luxurious
              experience with the highest standards of hygiene, expert artistry,
              and premium products.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                ["shield", "Hospital-Grade Hygiene"],
                ["diamond", "Premium Products"],
                ["heart", "Personalized Care"],
                ["sparkles", "Luxury Experience"],
              ].map(([icon, label]) => (
                <div key={label} className="text-center">
                  <Icon
                    name={icon}
                    className="mx-auto h-9 w-9 text-[#c88b3e]"
                  />
                  <p className="mt-3 text-[10px] font-semibold leading-4">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="mx-auto max-w-[1510px] px-5 pb-8 lg:px-10"
      >
        <SectionTitle>Nail Designs We Love</SectionTitle>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {designs.map(([src, label]) => (
            <article
              key={label}
              className="group relative aspect-[1.55/1] overflow-hidden rounded-xl"
            >
              <img
                src={image(src)}
                alt={label}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute bottom-2 left-1/2 min-w-28 -translate-x-1/2 rounded-md bg-white/95 px-4 py-1.5 text-center text-[9px] font-semibold shadow-lg">
                {label}
              </span>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1510px] border-y border-[#eadfce] px-5 py-6 lg:px-10">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-5">
          {[
            ["polish", "Clean Studio", "Impeccable hygiene for your safety."],
            [
              "shield",
              "Long-Lasting Finish",
              "Chip-resistant results that last.",
            ],
            ["person", "Expert Artists", "Skilled professionals who care."],
            [
              "sparkles",
              "Trend-Forward Design",
              "Always ahead with the latest looks.",
            ],
            [
              "polish",
              "Luxury Products",
              "High-quality products for healthier nails.",
            ],
          ].map(([icon, title, copy]) => (
            <div
              key={title}
              className="flex items-start gap-3 lg:border-r lg:border-[#e8ddce] lg:last:border-0"
            >
              <Icon name={icon} className="h-8 w-8 shrink-0 text-[#c98835]" />
              <div>
                <h3 className="text-[10px] font-bold">{title}</h3>
                <p className="mt-1 text-[9px] leading-4 text-[#5e514b]">
                  {copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="team"
        className="mx-auto grid max-w-[1510px] gap-8 px-5 py-8 lg:grid-cols-[0.92fr_1.08fr] lg:px-10"
      >
        <div>
          <div className="mb-5 flex items-center gap-4">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.13em]">
              Meet Our Artists
            </h2>
            <span className="h-px flex-1 bg-[#e3d5c4]" />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {artists.map(([src, name, role]) => (
              <article
                key={name}
                className="group overflow-hidden rounded-xl border border-[#e9ddce] bg-white text-center transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-[1/1.05] overflow-hidden">
                  <img
                    src={image(src)}
                    alt={`${name}, ${role}`}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-3 text-[11px] font-bold">{name}</h3>
                <p className="mt-0.5 text-[9px] text-[#5f524b]">{role}</p>
                <div className="my-3 flex justify-center gap-3 text-[#9f7652]">
                  <a
                    href="#contact"
                    aria-label={`${name} photo gallery`}
                    className="transition hover:text-[#b47522]"
                  >
                    <Camera className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    aria-label={`Email ${name}`}
                    className="transition hover:text-[#b47522]"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div id="reviews">
          <div className="mb-5 flex items-center gap-4">
            <span className="h-px flex-1 bg-[#e3d5c4]" />
            <h2 className="text-[11px] font-bold uppercase tracking-[0.13em]">
              Client Love
            </h2>
            <span className="h-px flex-1 bg-[#e3d5c4]" />
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {reviews.map(([quote, name]) => (
              <blockquote
                key={name}
                className="rounded-xl border border-[#e9ddce] bg-[#fffdfa] p-5 text-center shadow-[0_6px_20px_rgba(83,54,31,0.04)] transition hover:-translate-y-1 hover:shadow-lg"
              >
                <p className="text-[11px] tracking-[0.14em] text-[#c08227]">
                  ★★★★★
                </p>
                <p className="mt-4 min-h-24 text-[10px] leading-5">{quote}</p>
                <footer className="mt-3 text-[9px] font-semibold">
                  — {name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section
        id="booking"
        className="mx-auto max-w-[1510px] px-5 pb-8 lg:px-10"
      >
        <div className="relative overflow-hidden rounded-xl bg-[#f2e2d8]">
          <img
            src={image("appoitment-bg.webp")}
            alt="Soft nude manicure"
            className="absolute inset-y-0 left-0 h-full w-full object-cover object-[30%_65%] opacity-80 md:w-[42%]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f2e2d8]/95 to-[#f2e2d8]" />
          <div className="relative grid min-h-44 items-center gap-6 px-6 py-7 text-center md:grid-cols-[1.35fr_0.65fr] md:px-12">
            <div className="md:pl-[23%]">
              <h2 className="luxe-serif text-3xl md:text-4xl">
                Your Next Set is Just a Click Away
              </h2>
              <p className="mt-2 text-[10px]">
                Treat yourself to the luxe experience you deserve.
              </p>
              <Button className="mt-4">
                Book Your Appointment <span>→</span>
              </Button>
            </div>
            <div className="grid gap-3 text-left text-[10px]">
              {[
                "Easy Online Booking",
                "Appointments That Fit You",
                "We Can’t Wait to Pamper You",
              ].map((item) => (
                <p key={item} className="flex items-center gap-3">
                  <Icon name="calendar" className="h-5 w-5 text-[#95642d]" />
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="shop" className="mx-auto max-w-[1510px] px-5 pb-9 lg:px-10">
        <div className="mb-5 flex flex-wrap items-end gap-4">
          <h2 className="luxe-serif text-[17px] uppercase tracking-[0.13em]">
            Care Essentials
          </h2>
          <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#b87929]">
            Shop Our Favorites
          </span>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
          {products.map(([src, name, copy, price]) => (
            <article
              key={name}
              className="group overflow-hidden rounded-xl border border-[#e9ddce] bg-[#fffdfa] text-center transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="aspect-[1.2/1] overflow-hidden">
                <img
                  src={image(src)}
                  alt={name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 text-[10px] font-bold">{name}</h3>
              <p className="mt-1 text-[8px] text-[#61534d]">{copy}</p>
              <p className="mb-4 mt-2 text-[10px] font-semibold">{price}</p>
            </article>
          ))}
          <article className="grid min-h-48 place-items-center rounded-xl border border-[#e1cfae] bg-[#fffaf4] p-5 text-center">
            <div>
              <Icon name="bag" className="mx-auto h-9 w-9 text-[#bf7c25]" />
              <p className="luxe-serif mt-3 text-lg">
                Explore our full
                <br />
                collection in-store
                <br />
                or online.
              </p>
              <Button className="mt-4 min-h-9 py-2">Shop Now</Button>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#fffdfa] pt-2">
        <h2 className="mb-4 text-center text-[11px] font-semibold uppercase tracking-[0.16em]">
          Follow Our Work{" "}
          <span className="text-[#a66b28]">@LuxeNailStudio</span>
        </h2>
        <div className="grid grid-cols-5 gap-1 lg:grid-cols-10">
          {socialImages.map((src) => (
            <a
              key={src}
              href="#contact"
              className="group aspect-[1.45/1] overflow-hidden"
            >
              <img
                src={image(src)}
                alt="Luxe Nail Studio work"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-90"
              />
            </a>
          ))}
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-[#eadfce] bg-[#faf5ee] px-6 py-10"
      >
        <div className="mx-auto grid max-w-[1440px] gap-9 sm:grid-cols-2 lg:grid-cols-[1.05fr_1fr_1.2fr_0.7fr_1.1fr]">
          <div>
            <span className="luxe-serif block text-3xl tracking-[0.16em] text-[#ad7024]">
              LUXE
            </span>
            <span className="ml-5 text-[8px] font-bold uppercase tracking-[0.32em]">
              Nail Studio
            </span>
            <p className="mt-5 max-w-52 text-[9px] leading-4 text-[#64564f]">
              Luxury nail care in a clean, relaxing space. Where self-care meets
              sophistication.
            </p>
            <div className="mt-4 flex gap-3 text-[#9d6b32]">
              <a
                href="#home"
                aria-label="Photo gallery"
                className="hover:text-[#b47522]"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href="#home"
                aria-label="Community"
                className="hover:text-[#b47522]"
              >
                <UsersRound className="h-4 w-4" />
              </a>
              <a
                href="#home"
                aria-label="Short videos"
                className="hover:text-[#b47522]"
              >
                <Music2 className="h-4 w-4" />
              </a>
              <a
                href="#home"
                aria-label="Saved inspiration"
                className="hover:text-[#b47522]"
              >
                <Pin className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-wider">
              Contact
            </h3>
            <div className="mt-4 space-y-2 text-[9px] leading-4 text-[#5f514b]">
              <p className="flex items-start gap-2">
                <MapPin className="mt-1 h-4 w-4 shrink-0 text-[#b47522]" />
                <span>
                  123 Beauty Lane
                  <br />
                  Dallas, TX 75201
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#b47522]" />
                (214) 123–4567
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#b47522]" />
                hello@luxenailstudio.com
              </p>
              <p className="flex items-center gap-2">
                <Globe className="h-4 w-4 text-[#b47522]" />
                www.luxenailstudio.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-wider">
              Hours
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-x-3 text-[8px] leading-4 text-[#5f514b]">
              <span>
                Monday
                <br />
                Tuesday
                <br />
                Wednesday
                <br />
                Thursday
                <br />
                Friday
                <br />
                Saturday
                <br />
                Sunday
              </span>
              <span>
                10:00 AM – 7:00 PM
                <br />
                10:00 AM – 7:00 PM
                <br />
                10:00 AM – 7:00 PM
                <br />
                10:00 AM – 8:00 PM
                <br />
                10:00 AM – 8:00 PM
                <br />
                9:00 AM – 7:00 PM
                <br />
                11:00 AM – 5:00 PM
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="mt-4 grid gap-1 text-[9px] text-[#5f514b]">
              {navItems.slice(1).map(([label, id]) => (
                <a href={`#${id}`} key={id} className="hover:text-[#a86d22]">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-wider">
              Stay In The Loop
            </h3>
            <p className="mt-4 text-[9px] leading-4 text-[#5f514b]">
              Sign up for exclusive offers,
              <br />
              new arrivals & nail inspo.
            </p>
            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-4 flex overflow-hidden rounded-md border border-[#e3d4c0] bg-white"
            >
              <label htmlFor="luxe-email" className="sr-only">
                Email address
              </label>
              <input
                id="luxe-email"
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 px-3 py-2 text-[9px] outline-none"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-[#b87820] to-[#d09943] px-4 text-white"
              >
                →
              </button>
            </form>
          </div>
        </div>
        <div className="mx-auto mt-7 flex max-w-[1440px] flex-col justify-between gap-2 border-t border-[#e5d8c8] pt-4 text-[8px] text-[#77675e] sm:flex-row">
          <p>© 2026 Luxe Nail Studio. All Rights Reserved.</p>
          <p>Privacy Policy &nbsp; | &nbsp; Terms & Conditions</p>
        </div>
      </footer>
    </main>
  );
}
