import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleDot,
  Compass,
  Flag,
  Menu,
  Mountain,
  Route,
  X,
} from "lucide-react";
import { imageUrl } from "../../assets/optimized";

const navLinks = [
  ["Climb", "#climb", "#21A6A1"],
  ["Classes", "#classes", "#F36F5D"],
  ["Community", "#community", "#DCA83A"],
  ["Events", "#events", "#315DC8"],
  ["Membership", "#membership", "#95C84A"],
  ["Contact", "#contact", "#C97957"],
];

const observedSectionIds = [
  "home",
  ...navLinks.map(([, href]) => href.slice(1)),
];

const images = {
  hero: imageUrl("fitness/ElevateClimbing/hero.webp"),
  experience: imageUrl("fitness/ElevateClimbing/climbing-experience.webp"),
  classes: imageUrl("fitness/ElevateClimbing/classes.webp"),
  setting: imageUrl("fitness/ElevateClimbing/route-setting.webp"),
  community: imageUrl("fitness/ElevateClimbing/community-board.webp"),
  progress: imageUrl("fitness/ElevateClimbing/progress.webp"),
  cta: imageUrl("fitness/ElevateClimbing/cta.webp"),
};

const holdColors = [
  "bg-[#21A6A1]",
  "bg-[#F36F5D]",
  "bg-[#DCA83A]",
  "bg-[#95C84A]",
  "bg-[#315DC8]",
];

const experienceCards = [
  [
    "Bouldering Walls",
    "Color-coded problems, fresh routes, and movement challenges for every level.",
    "V0–V7",
  ],
  [
    "Technique Coaching",
    "Learn footwork, body positioning, grip strategy, and safer falling skills.",
    "Skills",
  ],
  [
    "Community Sessions",
    "Climb with others, join weekly events, and build confidence in a supportive space.",
    "Social",
  ],
];

const wallZones = [
  {
    title: "Beginner Slab",
    badge: "V0–V2",
    text: "Lower-angle problems focused on footwork, balance, and confidence.",
    image: imageUrl("fitness/ElevateClimbing/beginner-slab.webp"),
    color: "#21A6A1",
  },
  {
    title: "Overhang Lab",
    badge: "V3–V6",
    text: "Steeper problems for body tension, grip strength, and powerful movement.",
    image: imageUrl("fitness/ElevateClimbing/overhang-lab.webp"),
    color: "#F36F5D",
  },
  {
    title: "Dynamic Wall",
    badge: "V2–V7",
    text: "Coordination climbs, jumps, and creative movement challenges.",
    image: imageUrl("fitness/ElevateClimbing/dynamic-wall.webp"),
    color: "#315DC8",
  },
  {
    title: "Training Board",
    badge: "All Levels",
    text: "Structured strength work, repeatable problems, and progression tracking.",
    image: imageUrl("fitness/ElevateClimbing/training-board.webp"),
    color: "#95C84A",
  },
];

const classes = [
  [
    "Intro To Bouldering",
    "Learn gym basics, falling technique, route reading, and movement confidence.",
    "V0",
  ],
  [
    "Footwork Fundamentals",
    "Improve precision, balance, and control with guided drills.",
    "V1",
  ],
  [
    "Strength For Climbers",
    "Build climbing-specific strength with rings, hangboard basics, mobility, and core work.",
    "V3",
  ],
  [
    "Route Reading Lab",
    "Learn how to plan attempts, identify sequences, and climb smarter.",
    "V2",
  ],
];

const settingChips = [
  "Weekly Resets",
  "Color-Coded Grades",
  "Technique Variety",
  "Creative Movement",
];

const events = [
  ["Beginner Boulder Night", "Tuesday • 7:00 PM", "#21A6A1"],
  ["Partner Project Session", "Thursday • 6:30 PM", "#F36F5D"],
  ["Route Reset Preview", "Friday • 5:00 PM", "#DCA83A"],
  ["Weekend Community Climb", "Saturday • 10:00 AM", "#315DC8"],
];

const coaches = [
  {
    name: "Rowan Blake",
    role: "Technique Coach",
    bio: "Helps climbers read movement, refine body position, and turn tricky problems into clear sequences.",
    badge: "Slab + Balance",
    image: imageUrl("fitness/ElevateClimbing/coach-rowan.webp"),
  },
  {
    name: "Camila Torres",
    role: "Beginner Climbing Guide",
    bio: "Builds confidence for first-time climbers with simple cues, safer falling skills, and welcoming sessions.",
    badge: "Intro Routes",
    image: imageUrl("fitness/ElevateClimbing/coach-camila.webp"),
  },
  {
    name: "Eli Morgan",
    role: "Strength + Movement Coach",
    bio: "Connects strength, mobility, and creative attempts so climbers can progress without rushing the process.",
    badge: "Power Moves",
    image: imageUrl("fitness/ElevateClimbing/coach-eli.webp"),
  },
];

const plans = [
  {
    name: "First Ascent",
    text: "For new climbers trying the gym.",
    features: ["Day pass", "Shoe rental", "Intro orientation"],
  },
  {
    name: "Boulder Pass",
    text: "For climbers building a weekly routine.",
    features: ["4 visits/month", "Class discount", "Community events"],
    popular: true,
  },
  {
    name: "Unlimited Elevation",
    text: "For consistent climbers and project seekers.",
    features: [
      "Unlimited climbing",
      "Priority classes",
      "Guest pass",
      "Training zone access",
    ],
  },
];

const progressStats = [
  ["Footwork", "78%", "#21A6A1"],
  ["Grip Confidence", "66%", "#F36F5D"],
  ["Route Reading", "84%", "#DCA83A"],
  ["Movement Flow", "72%", "#95C84A"],
  ["Project Attempts", "9", "#315DC8"],
  ["Consistency", "4x week", "#C97957"],
];

function ClimbButton({
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
      className={`ec-climb-btn group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-xs font-black uppercase tracking-[0.15em] transition duration-300 hover:-translate-y-0.5 ${
        outline
          ? "ec-climb-btn-outline border border-[#25303A]/18 bg-white/70 text-[#25303A] hover:border-[#21A6A1] hover:bg-white"
          : "ec-climb-btn-solid bg-[#25303A] text-white shadow-[0_16px_38px_rgba(37,48,58,.2)] hover:bg-[#35434F]"
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
        className={`ec-heading-badge inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.22em] shadow-sm ${light ? "ec-badge-light border border-white/18 bg-white/10 text-white/70" : "ec-badge-dark border border-[#25303A]/12 bg-white/75 text-[#6C6A61]"}`}
      >
        <CircleDot className="ec-heading-dot h-3.5 w-3.5 text-[#F36F5D]" />
        {label}
      </p>
      <h2
        className={`ec-heading-title mt-5 text-[clamp(2.15rem,5.5vw,7rem)] font-black uppercase leading-[0.88] tracking-[-0.07em] ${light ? "text-white" : "text-[#25303A]"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`ec-heading-text mt-6 max-w-2xl text-base leading-8 md:text-lg ${light ? "text-white/62" : "text-[#606A70]"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function RouteMap({ dark = false }: { dark?: boolean }) {
  return (
    <div
      className="relative h-40 overflow-hidden rounded-[1.75rem] border border-current/15 p-5 text-current"
      aria-hidden="true"
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 360 160"
        fill="none"
      >
        <path
          d="M32 126 C82 82 104 104 142 58 S228 28 268 72 310 70 334 34"
          stroke={dark ? "#F7F1E6" : "#25303A"}
          strokeOpacity=".22"
          strokeWidth="3"
          strokeDasharray="8 10"
          className="ec-routemap-base"
        />
        <path
          d="M54 44 C96 82 122 28 170 74 S244 122 306 92"
          stroke="#21A6A1"
          strokeOpacity=".55"
          strokeWidth="3"
          className="ec-routemap-accent"
        />
      </svg>
      {[
        ["left-[12%] top-[64%]", "#21A6A1"],
        ["left-[28%] top-[35%]", "#F36F5D"],
        ["left-[45%] top-[48%]", "#DCA83A"],
        ["left-[63%] top-[22%]", "#95C84A"],
        ["left-[78%] top-[52%]", "#315DC8"],
      ].map(([position, color], index) => (
        <span
          key={index}
          className={`absolute h-5 w-7 rounded-[50%_35%_55%_40%] shadow-[0_8px_0_rgba(0,0,0,.08)] ${position} ${
            index === 0 ? "ec-pip-accent" : index === 1 ? "ec-pip-sec" : ""
          }`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  );
}

export function ElevateClimbing() {
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

        if (window.scrollY < 200) {
          setActiveSection("home");
          return;
        }

        const targets = navLinks
          .map(([, href]) => {
            const id = href.slice(1);
            const el = document.getElementById(id);
            if (!el) return null;
            return {
              id,
              top: el.getBoundingClientRect().top + window.scrollY,
            };
          })
          .filter((item): item is { id: string; top: number } => item !== null)
          .sort((a, b) => a.top - b.top);

        let current = "home";
        for (let i = targets.length - 1; i >= 0; i--) {
          if (scrollPosition >= targets[i].top - 30) {
            current = targets[i].id;
            break;
          }
        }

        setActiveSection(current);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    handleScroll();
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <main className="elevate-climbing-site w-full max-w-full overflow-x-hidden bg-[#F7F1E6] text-[#25303A]">
      <style>{`
        /* ============================================================ */
        /* ELEVATE CLIMBING - DYNAMIC THEME SYSTEM                       */
        /* ============================================================ */
        .elevate-climbing-site {
          --ec-accent: #21A6A1;
          --ec-accent-hover: #198783;
          --ec-accent-sec: #F36F5D;
          --ec-accent-sec-hover: #d95a49;
          --ec-accent-glow: rgba(33, 166, 161, 0.25);
          --ec-accent-sec-glow: rgba(243, 111, 93, 0.25);
          --ec-contrast: #ffffff;
          --ec-contrast-sec: #ffffff;

          --ec-bg-base: #F7F1E6;
          --ec-bg-canvas-subtle: #EFE4D5;
          --ec-bg-surface: #ffffff;
          --ec-bg-card: rgba(255, 255, 255, 0.72);
          --ec-bg-card-solid: #ffffff;
          --ec-bg-card-alt: #E5DED2;
          --ec-bg-dark: #25303A;
          --ec-bg-dark-card: #1f2831;
          --ec-bg-dark-surface: #2d3a46;

          --ec-text-primary: #25303A;
          --ec-text-body: #606A70;
          --ec-text-muted: #6C6A61;
          --ec-text-light: #ffffff;

          --ec-border: rgba(37, 48, 58, 0.12);
          --ec-border-subtle: rgba(37, 48, 58, 0.08);
          --ec-border-card: rgba(37, 48, 58, 0.10);
          --ec-border-white: rgba(255, 255, 255, 0.70);

          --ec-header-bg: rgba(247, 241, 230, 0.90);
          --ec-header-border: rgba(255, 255, 255, 0.70);
          --ec-nav-bg: rgba(255, 255, 255, 0.62);
          --ec-nav-border: rgba(37, 48, 58, 0.10);
          --ec-dot-grid: rgba(37, 48, 58, 0.18);
        }

        /* ------------------------------------------------------------ */
        /* DYNAMIC THEME PRESET ADAPTATION                              */
        /* ------------------------------------------------------------ */
        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site,
        [data-theme-active="true"]:not([data-theme-preset="original"]) .elevate-climbing-site {
          --ec-accent: var(--theme-accent-primary, #21A6A1) !important;
          --ec-accent-hover: var(--theme-accent-primary-hover, #198783) !important;
          --ec-accent-sec: var(--theme-accent-secondary, #F36F5D) !important;
          --ec-accent-sec-hover: var(--theme-accent-secondary-hover, #d95a49) !important;
          --ec-accent-glow: var(--theme-accent-glow, rgba(33, 166, 161, 0.25)) !important;
          --ec-contrast: var(--theme-accent-contrast, #ffffff) !important;
        }

        /* Interactive & Brand Elements */
        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-climb-btn-solid {
          background-color: var(--ec-accent) !important;
          color: var(--ec-contrast) !important;
          box-shadow: 0 16px 38px var(--ec-accent-glow) !important;
        }
        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-climb-btn-solid:hover {
          background-color: var(--ec-accent-hover) !important;
          color: var(--ec-contrast) !important;
        }

        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-climb-btn-outline:hover {
          border-color: var(--ec-accent) !important;
          color: var(--ec-accent) !important;
        }

        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-btn-coral {
          background-color: var(--ec-accent-sec) !important;
          color: var(--ec-contrast-sec) !important;
          box-shadow: 0 9px 0 rgba(37,48,58,.16), 0 18px 32px var(--ec-accent-sec-glow) !important;
        }
        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-btn-coral:hover {
          background-color: var(--ec-accent-sec-hover) !important;
          color: var(--ec-contrast-sec) !important;
        }

        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-nav-active {
          background-color: var(--ec-accent) !important;
          color: var(--ec-contrast) !important;
        }
        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-nav-indicator {
          background-color: var(--ec-accent-sec) !important;
        }

        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-logo-box {
          background-color: var(--ec-accent) !important;
          color: var(--ec-contrast) !important;
        }
        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-logo-pip {
          background-color: var(--ec-accent-sec) !important;
        }

        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-heading-dot {
          color: var(--ec-accent-sec) !important;
        }

        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-routemap-accent {
          stroke: var(--ec-accent) !important;
        }
        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-pip-accent {
          background-color: var(--ec-accent) !important;
        }
        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-pip-sec {
          background-color: var(--ec-accent-sec) !important;
        }

        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-accent-text {
          color: var(--ec-accent) !important;
        }
        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-accent-sec-text {
          color: var(--ec-accent-sec) !important;
        }
        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-accent-bg {
          background-color: var(--ec-accent) !important;
          color: var(--ec-contrast) !important;
        }
        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-accent-sec-bg {
          background-color: var(--ec-accent-sec) !important;
          color: var(--ec-contrast-sec) !important;
        }

        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-experience-card:hover {
          border-color: var(--ec-accent) !important;
        }
        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-zone-link:hover {
          color: var(--ec-accent) !important;
        }

        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-class-grade {
          background-color: var(--ec-accent) !important;
          color: var(--ec-contrast) !important;
        }

        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-coach-badge {
          background-color: var(--ec-accent) !important;
          color: var(--ec-contrast) !important;
        }
        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-coach-role {
          color: var(--ec-accent) !important;
        }

        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-plan-popular {
          border-color: var(--ec-accent) !important;
          box-shadow: 16px 16px 0 var(--ec-accent-glow) !important;
        }
        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-plan-popular-badge {
          background-color: var(--ec-accent) !important;
          color: var(--ec-contrast) !important;
        }

        [data-theme-preset]:not([data-theme-preset="original"]) .elevate-climbing-site .ec-social-btn:hover {
          border-color: var(--ec-accent) !important;
          color: var(--ec-accent) !important;
        }

        /* ------------------------------------------------------------ */
        /* DARK MOOD OVERRIDES                                          */
        /* ------------------------------------------------------------ */
        html.dark .elevate-climbing-site,
        body.dark .elevate-climbing-site,
        [data-theme-mood="dark"] .elevate-climbing-site,
        :root[data-theme-mood="dark"] .elevate-climbing-site,
        :root[data-theme-active="true"][data-theme-mood="dark"] .elevate-climbing-site,
        :root.dark .elevate-climbing-site {
          --ec-bg-base: #0c1015;
          --ec-bg-canvas-subtle: #121820;
          --ec-bg-surface: #161e27;
          --ec-bg-card: rgba(22, 30, 39, 0.85);
          --ec-bg-card-solid: #17202a;
          --ec-bg-card-alt: #10151c;
          --ec-bg-dark: #080a0d;
          --ec-bg-dark-card: #131921;
          --ec-bg-dark-surface: #1a232e;

          --ec-text-primary: #F7F1E6;
          --ec-text-body: rgba(247, 241, 230, 0.80);
          --ec-text-muted: rgba(247, 241, 230, 0.60);

          --ec-border: rgba(255, 255, 255, 0.12);
          --ec-border-subtle: rgba(255, 255, 255, 0.08);
          --ec-border-card: rgba(255, 255, 255, 0.10);
          --ec-border-white: rgba(255, 255, 255, 0.14);

          --ec-header-bg: rgba(12, 16, 21, 0.92);
          --ec-header-border: rgba(255, 255, 255, 0.14);
          --ec-nav-bg: rgba(22, 30, 39, 0.85);
          --ec-nav-border: rgba(255, 255, 255, 0.10);
          --ec-dot-grid: rgba(255, 255, 255, 0.12);

          background-color: var(--ec-bg-base) !important;
          color: var(--ec-text-primary) !important;
        }

        html.dark .elevate-climbing-site .ec-header-pill,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-header-pill,
        :root.dark .elevate-climbing-site .ec-header-pill {
          background-color: var(--ec-header-bg) !important;
          border-color: var(--ec-header-border) !important;
          box-shadow: 0 18px 55px rgba(0, 0, 0, 0.45) !important;
        }

        html.dark .elevate-climbing-site .ec-nav-bar,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-nav-bar,
        :root.dark .elevate-climbing-site .ec-nav-bar {
          background-color: var(--ec-nav-bg) !important;
          border-color: var(--ec-nav-border) !important;
        }

        html.dark .elevate-climbing-site .ec-nav-link,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-nav-link,
        :root.dark .elevate-climbing-site .ec-nav-link {
          color: var(--ec-text-muted) !important;
        }
        html.dark .elevate-climbing-site .ec-nav-link:hover,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-nav-link:hover,
        :root.dark .elevate-climbing-site .ec-nav-link:hover {
          color: var(--ec-text-primary) !important;
          background-color: rgba(255, 255, 255, 0.08) !important;
        }

        html.dark .elevate-climbing-site .ec-mobile-sheet,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-mobile-sheet,
        :root.dark .elevate-climbing-site .ec-mobile-sheet {
          background-color: var(--ec-header-bg) !important;
          border-color: var(--ec-header-border) !important;
        }

        html.dark .elevate-climbing-site .ec-pill-tag,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-pill-tag,
        :root.dark .elevate-climbing-site .ec-pill-tag {
          background-color: var(--ec-bg-card) !important;
          border-color: var(--ec-border) !important;
          color: var(--ec-text-muted) !important;
        }

        html.dark .elevate-climbing-site .ec-badge-dark,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-badge-dark,
        :root.dark .elevate-climbing-site .ec-badge-dark {
          background-color: var(--ec-bg-card) !important;
          border-color: var(--ec-border) !important;
          color: var(--ec-text-muted) !important;
        }

        html.dark .elevate-climbing-site .ec-heading-title:not(.text-white),
        [data-theme-mood="dark"] .elevate-climbing-site .ec-heading-title:not(.text-white),
        :root.dark .elevate-climbing-site .ec-heading-title:not(.text-white) {
          color: var(--ec-text-primary) !important;
        }

        html.dark .elevate-climbing-site .ec-heading-text:not(.text-white\/62),
        [data-theme-mood="dark"] .elevate-climbing-site .ec-heading-text:not(.text-white\/62),
        :root.dark .elevate-climbing-site .ec-heading-text:not(.text-white\/62) {
          color: var(--ec-text-body) !important;
        }

        html.dark .elevate-climbing-site .ec-hero-text,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-hero-text,
        :root.dark .elevate-climbing-site .ec-hero-text {
          color: var(--ec-text-body) !important;
        }

        html.dark .elevate-climbing-site .ec-hero-subtle-bg,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-hero-subtle-bg,
        :root.dark .elevate-climbing-site .ec-hero-subtle-bg {
          background: radial-gradient(circle at 18% 16%, rgba(33, 166, 161, 0.15), transparent 28%), radial-gradient(circle at 78% 20%, rgba(243, 111, 93, 0.14), transparent 28%), linear-gradient(180deg, #0c1015, #10151c) !important;
        }

        html.dark .elevate-climbing-site .ec-climb-btn-outline,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-climb-btn-outline,
        :root.dark .elevate-climbing-site .ec-climb-btn-outline {
          border-color: var(--ec-border) !important;
          background-color: var(--ec-bg-card) !important;
          color: var(--ec-text-primary) !important;
        }
        html.dark .elevate-climbing-site .ec-climb-btn-outline:hover,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-climb-btn-outline:hover,
        :root.dark .elevate-climbing-site .ec-climb-btn-outline:hover {
          background-color: var(--ec-bg-surface) !important;
        }

        html.dark .elevate-climbing-site .ec-experience-card,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-experience-card,
        :root.dark .elevate-climbing-site .ec-experience-card {
          border-color: var(--ec-border-card) !important;
          background-color: var(--ec-bg-card) !important;
        }

        html.dark .elevate-climbing-site .ec-wall-card,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-wall-card,
        :root.dark .elevate-climbing-site .ec-wall-card {
          border-color: var(--ec-border-card) !important;
          background-color: var(--ec-bg-card) !important;
        }

        html.dark .elevate-climbing-site .ec-zone-link,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-zone-link,
        :root.dark .elevate-climbing-site .ec-zone-link {
          color: var(--ec-text-primary) !important;
        }

        html.dark .elevate-climbing-site .ec-classes-section,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-classes-section,
        :root.dark .elevate-climbing-site .ec-classes-section {
          background-color: var(--ec-bg-card-alt) !important;
        }

        html.dark .elevate-climbing-site .ec-class-card,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-class-card,
        :root.dark .elevate-climbing-site .ec-class-card {
          border-color: var(--ec-border-white) !important;
          background-color: var(--ec-bg-card-solid) !important;
        }

        html.dark .elevate-climbing-site .ec-class-title,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-class-title,
        :root.dark .elevate-climbing-site .ec-class-title {
          color: var(--ec-text-primary) !important;
        }

        html.dark .elevate-climbing-site .ec-coach-card,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-coach-card,
        :root.dark .elevate-climbing-site .ec-coach-card {
          border-color: var(--ec-border-card) !important;
          background-color: var(--ec-bg-card) !important;
        }

        html.dark .elevate-climbing-site .ec-membership-section,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-membership-section,
        :root.dark .elevate-climbing-site .ec-membership-section {
          background-color: var(--ec-bg-card-alt) !important;
        }

        html.dark .elevate-climbing-site .ec-plan-card,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-plan-card,
        :root.dark .elevate-climbing-site .ec-plan-card {
          border-color: var(--ec-border-white) !important;
          background-color: var(--ec-bg-card-solid) !important;
        }

        html.dark .elevate-climbing-site .ec-progress-card,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-progress-card,
        :root.dark .elevate-climbing-site .ec-progress-card {
          border-color: var(--ec-border-card) !important;
          background-color: var(--ec-bg-card) !important;
        }

        html.dark .elevate-climbing-site .ec-progress-track,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-progress-track,
        :root.dark .elevate-climbing-site .ec-progress-track {
          background-color: rgba(255, 255, 255, 0.1) !important;
        }

        html.dark .elevate-climbing-site .ec-event-card,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-event-card,
        :root.dark .elevate-climbing-site .ec-event-card {
          background-color: var(--ec-bg-card-solid) !important;
          border-color: var(--ec-border-white) !important;
          color: var(--ec-text-primary) !important;
        }

        html.dark .elevate-climbing-site .ec-footer,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-footer,
        :root.dark .elevate-climbing-site .ec-footer {
          border-top-color: var(--ec-border) !important;
        }

        html.dark .elevate-climbing-site .ec-social-btn,
        [data-theme-mood="dark"] .elevate-climbing-site .ec-social-btn,
        :root.dark .elevate-climbing-site .ec-social-btn {
          border-color: var(--ec-border) !important;
          color: var(--ec-text-muted) !important;
        }

        /* ------------------------------------------------------------ */
        /* CUSTOM BACKGROUND MODE                                       */
        /* ------------------------------------------------------------ */
        [data-theme-bg-mode="custom"] .elevate-climbing-site {
          --ec-bg-base: var(--theme-bg-base, #0c1015) !important;
          --ec-bg-canvas-subtle: var(--theme-bg-surface, #121820) !important;
          --ec-bg-surface: var(--theme-bg-surface, #161e27) !important;
          --ec-bg-card: var(--theme-bg-card, rgba(22, 30, 39, 0.85)) !important;
          --ec-bg-card-solid: var(--theme-bg-card, #17202a) !important;
          --ec-bg-card-alt: var(--theme-bg-surface, #10151c) !important;
          --ec-text-primary: var(--theme-text-primary, #F7F1E6) !important;
          --ec-text-body: var(--theme-text-secondary, rgba(247, 241, 230, 0.80)) !important;
          --ec-text-muted: var(--theme-text-muted, rgba(247, 241, 230, 0.60)) !important;
          --ec-border: var(--theme-border, rgba(255, 255, 255, 0.12)) !important;
          background-color: var(--ec-bg-base) !important;
          color: var(--ec-text-primary) !important;
        }
      `}</style>

      <div className="ec-dot-grid pointer-events-none fixed inset-0 z-0 opacity-[0.18] [background-image:radial-gradient(#25303A_1px,transparent_1px)] [background-size:22px_22px]" />

      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <div className="ec-header-pill mx-auto flex max-w-7xl items-center justify-between rounded-[2rem] border-2 border-white/70 bg-[#F7F1E6]/90 px-3 py-3 shadow-[0_18px_55px_rgba(37,48,58,.13)] ring-1 ring-[#25303A]/10 backdrop-blur-xl lg:rounded-full lg:px-4">
          <a
            href="#home"
            className="group flex items-center gap-3 rounded-full py-1 pl-1 pr-3 transition hover:bg-white/60"
            aria-label="Elevate Climbing home"
          >
            <span className="ec-logo-box relative grid h-11 w-11 place-items-center rounded-[1rem] bg-[#25303A] text-[#F7F1E6] shadow-[0_7px_0_rgba(37,48,58,.18)] transition group-hover:-translate-y-0.5">
              <Mountain className="h-5 w-5" />
              <span className="ec-logo-pip absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#F7F1E6] bg-[#21A6A1]" />
            </span>
            <span>
              <span className="ec-heading-title block text-sm font-black uppercase tracking-[-0.02em]">
                Elevate Climbing
              </span>
              <span className="ec-heading-text mt-0.5 hidden text-[0.55rem] font-black uppercase tracking-[0.18em] text-[#6C6A61] sm:block">
                Route map studio
              </span>
            </span>
          </a>

          <nav
            className="ec-nav-bar hidden rounded-full border border-[#25303A]/10 bg-white/62 p-1.5 shadow-inner lg:flex"
            aria-label="Elevate navigation"
          >
            {navLinks.map(([label, href, color]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  className={`ec-nav-link group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.11em] transition ${
                    active
                      ? "ec-nav-active active bg-[#25303A] text-white shadow-[0_8px_18px_rgba(37,48,58,.18)]"
                      : "text-[#6C6A61] hover:bg-white hover:text-[#25303A]"
                  }`}
                >
                  <span
                    className={`h-2.5 w-2.5 rounded-full transition ${active ? "scale-125 border border-white/80" : "opacity-75 group-hover:scale-110"}`}
                    style={{ backgroundColor: color }}
                  />
                  {label}
                  {active && (
                    <span className="ec-nav-indicator absolute inset-x-4 -bottom-1 h-1 rounded-full bg-[#F36F5D]" />
                  )}
                </a>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#contact"
              className="ec-btn-coral rounded-full bg-[#F36F5D] px-5 py-3 text-xs font-black uppercase tracking-[0.13em] text-white shadow-[0_9px_0_rgba(37,48,58,.16),0_18px_32px_rgba(243,111,93,.22)] transition hover:-translate-y-0.5 hover:shadow-[0_11px_0_rgba(37,48,58,.16),0_22px_36px_rgba(243,111,93,.25)]"
            >
              Start Climbing
            </a>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="ec-menu-btn grid h-11 w-11 place-items-center rounded-full border border-[#25303A]/15 bg-white/75 text-[#25303A] shadow-sm lg:hidden"
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
              className="fixed inset-0 top-[4.75rem] z-40 bg-black/45 backdrop-blur-xs lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <nav
              id="mobile-navigation"
              className="ec-mobile-sheet fixed inset-x-4 top-[4.75rem] z-50 max-h-[calc(100vh-5.5rem)] overflow-y-auto rounded-[2rem] border-2 border-white/70 bg-[#F7F1E6]/98 p-4 shadow-2xl ring-1 ring-[#25303A]/10 backdrop-blur-2xl lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="mb-3 flex items-center justify-between rounded-[1.4rem] bg-white/60 px-4 py-3">
                <span className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#6C6A61]">
                  Climbing map
                </span>
                <Route className="h-4 w-4 text-[#21A6A1] ec-accent-text" />
              </div>
              <div className="flex flex-col gap-1.5">
                {navLinks.map(([label, href, color]) => {
                  const active = activeSection === href.slice(1);
                  return (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={active ? "location" : undefined}
                      className={`ec-nav-link flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-[0.1em] transition ${
                        active
                          ? "ec-nav-active active bg-[#25303A] text-white shadow-sm"
                          : "text-[#606A70] hover:bg-white hover:text-[#25303A]"
                      }`}
                    >
                      <span className="flex items-center gap-3">
                        <span
                          className={`h-3 w-3 rounded-full ${active ? "border border-white/80" : ""}`}
                          style={{ backgroundColor: color }}
                        />
                        {label}
                      </span>
                      <span
                        className={`text-xs ${active ? "text-white/75" : "text-[#6C6A61]"}`}
                      >
                        →
                      </span>
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
        <div className="ec-hero-subtle-bg absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(33,166,161,.22),transparent_28%),radial-gradient(circle_at_78%_20%,rgba(243,111,93,.2),transparent_28%),linear-gradient(180deg,#F7F1E6,#EFE4D5)]" />
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div>
            <p className="ec-pill-tag inline-flex items-center gap-3 rounded-full border border-[#25303A]/12 bg-white/70 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.22em] text-[#6C6A61]">
              <Route className="h-4 w-4 text-[#21A6A1] ec-accent-text" />
              Bouldering • Training • Community
            </p>
            <h1 className="ec-heading-title mt-7 max-w-5xl text-[clamp(2.4rem,8.8vw,10rem)] font-black uppercase leading-[0.82] tracking-[-0.08em]">
              Find Your Route. Build Your Grip. Climb Together.
            </h1>
            <p className="ec-hero-text mt-8 max-w-2xl text-lg leading-8 text-[#606A70]">
              Indoor bouldering, beginner-friendly coaching, skill sessions, and
              community events for climbers who want progress, challenge, and a
              place to belong.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ClimbButton href="#contact">Book Your First Climb</ClimbButton>
              <ClimbButton href="#classes" outline>
                View Classes
              </ClimbButton>
            </div>
          </div>

          <div className="relative">
            <RouteMap />
            <div className="relative -mt-10 min-h-[42rem] overflow-hidden rounded-[2.6rem] border-2 border-white bg-[#A9AAA3] shadow-[0_28px_90px_rgba(37,48,58,.18)]">
              <img
                src={images.hero}
                alt="Elevate Climbing indoor bouldering wall"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#25303A]/74 via-transparent to-transparent" />
              <div className="absolute left-6 right-6 top-6 flex flex-wrap gap-2">
                {[
                  "V0–V3 Beginner",
                  "V4–V6 Progression",
                  "Technique Classes",
                  "Community Nights",
                ].map((chip, index) => (
                  <span
                    key={chip}
                    className={`rounded-full border border-white/55 bg-white/82 px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.13em] text-[#25303A] shadow-sm ${index % 2 ? "rotate-1" : "-rotate-1"}`}
                  >
                    {chip}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-7 left-7 right-7 grid gap-3 sm:grid-cols-3">
                {[
                  ["42", "Fresh problems"],
                  ["V0–V8", "Route spread"],
                  ["7 PM", "Beginner night"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-[1.4rem] border border-white/18 bg-[#25303A]/78 p-5 text-white backdrop-blur"
                  >
                    <p className="text-3xl font-black tracking-[-0.06em]">
                      {value}
                    </p>
                    <p className="mt-2 text-[0.55rem] font-black uppercase tracking-[0.16em] text-white/55">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              {holdColors.map((color, index) => (
                <span
                  key={color}
                  className={`absolute h-7 w-10 rounded-[55%_35%_50%_42%] shadow-[0_7px_0_rgba(0,0,0,.14)] ${color} ${
                    index === 0 ? "ec-accent-bg" : index === 1 ? "ec-accent-sec-bg" : ""
                  } ${["left-[10%] top-[38%]", "left-[74%] top-[20%]", "left-[58%] top-[46%]", "left-[31%] top-[26%]", "left-[82%] top-[56%]"][index]}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="climb"
        className="relative z-10 scroll-mt-28 px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="relative min-h-[39rem] overflow-hidden rounded-[2.4rem] border-2 border-[#25303A]/12 bg-[#D7D0C5]">
            <img
              src={images.experience}
              alt="Climbers working through bouldering problems"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#25303A]/70 via-transparent to-transparent" />
            <div className="ec-experience-badge absolute bottom-7 left-7 max-w-sm rounded-[1.5rem] bg-[#F7F1E6]/88 p-5 shadow-xl backdrop-blur">
              <p className="ec-accent-text text-[0.6rem] font-black uppercase tracking-[0.18em] text-[#21A6A1]">
                Climbing experience
              </p>
              <p className="ec-heading-title mt-2 text-3xl font-black uppercase leading-none tracking-[-0.055em]">
                Movement, puzzles, people.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              label="Climbing Experience"
              title="A Gym Built Around Movement, Problem Solving, And Community"
            />
            <div className="mt-10 grid gap-4">
              {experienceCards.map(([title, text, grade], index) => (
                <article
                  key={title}
                  className="ec-experience-card group grid gap-5 rounded-[1.8rem] border-2 border-[#25303A]/10 bg-white/72 p-5 transition hover:-translate-y-1 hover:border-[#21A6A1]/45 hover:shadow-xl sm:grid-cols-[4rem_1fr_auto] sm:items-center"
                >
                  <span
                    className={`grid h-14 w-14 place-items-center rounded-[1.2rem] text-sm font-black text-white shadow-sm ${
                      index === 0 ? "ec-accent-bg" : index === 1 ? "ec-accent-sec-bg" : ""
                    }`}
                    style={{
                      backgroundColor: ["#21A6A1", "#F36F5D", "#315DC8"][index],
                    }}
                  >
                    {grade}
                  </span>
                  <div>
                    <h3 className="ec-heading-title text-3xl font-black uppercase leading-none tracking-[-0.055em]">
                      {title}
                    </h3>
                    <p className="ec-heading-text mt-3 text-sm leading-7 text-[#606A70]">
                      {text}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-[#6C6A61] transition group-hover:translate-x-1" />
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-28 max-w-[96rem]">
          <SectionHeading label="Wall Zones" title="Choose Your Wall" />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {wallZones.map((zone, index) => (
              <article
                key={zone.title}
                className={`ec-wall-card group overflow-hidden rounded-[2rem] border-2 border-[#25303A]/12 bg-white/72 transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${index % 2 ? "lg:translate-y-8" : ""}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={zone.image}
                    alt={`${zone.title} climbing zone`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#25303A]/78 via-transparent to-transparent" />
                  <span
                    className="absolute left-4 top-4 rounded-full px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.13em] text-white shadow-sm"
                    style={{ backgroundColor: zone.color }}
                  >
                    {zone.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="ec-heading-title text-3xl font-black uppercase leading-none tracking-[-0.06em]">
                    {zone.title}
                  </h3>
                  <p className="ec-heading-text mt-4 text-sm leading-7 text-[#606A70]">
                    {zone.text}
                  </p>
                  <a
                    href="#contact"
                    className="ec-zone-link mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#25303A]"
                  >
                    Explore Zone <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="classes"
        className="ec-classes-section relative z-10 scroll-mt-28 bg-[#E5DED2] px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div>
            <SectionHeading
              label="Classes"
              title="Learn Skills That Make Every Climb Feel Better"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {classes.map(([title, text, grade], index) => (
                <article
                  key={title}
                  className="ec-class-card rounded-[1.8rem] border-2 border-white/70 bg-[#F7F1E6] p-6 shadow-sm transition hover:-translate-y-1"
                >
                  <span className="ec-class-grade inline-flex rounded-full bg-[#25303A] px-3 py-1.5 text-xs font-black text-white">
                    {grade}
                  </span>
                  <h3 className="ec-class-title mt-8 text-2xl font-black uppercase leading-none tracking-[-0.05em]">
                    {title}
                  </h3>
                  <p className="ec-heading-text mt-4 text-sm leading-7 text-[#606A70]">
                    {text}
                  </p>
                  <span
                    className={`mt-7 block h-3 w-16 rounded-full ${
                      index === 0 ? "ec-accent-bg" : index === 1 ? "ec-accent-sec-bg" : holdColors[index % holdColors.length]
                    }`}
                  />
                </article>
              ))}
            </div>
          </div>
          <div className="relative min-h-[38rem] overflow-hidden rounded-[2.4rem] border-2 border-white bg-[#B6B1A8]">
            <img
              src={images.classes}
              alt="Elevate Climbing class instruction"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#25303A]/74 via-transparent to-transparent" />
            <RouteMap dark />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="relative min-h-[40rem] overflow-hidden rounded-[2.4rem] border-2 border-[#25303A]/12">
            <img
              src={images.setting}
              alt="Elevate route setting team creating new climbing problems"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#25303A]/78 via-transparent to-transparent" />
            <div className="ec-setting-badge absolute bottom-7 left-7 right-7 rounded-[1.7rem] bg-[#F7F1E6]/88 p-6 backdrop-blur">
              <p className="ec-accent-sec-text text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#F36F5D]">
                Route setting
              </p>
              <p className="ec-heading-title mt-2 text-3xl font-black uppercase leading-none tracking-[-0.055em]">
                Fresh movement every week.
              </p>
            </div>
          </div>
          <div>
            <SectionHeading
              label="Route Setting"
              title="Fresh Problems. New Challenges. Every Week."
              text="Our setting team builds creative routes with clear progressions, technical movement, and problems that help climbers discover new skills."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {settingChips.map((chip, index) => (
                <span
                  key={chip}
                  className={`rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.13em] text-white ${
                    index === 0 ? "ec-accent-bg" : index === 1 ? "ec-accent-sec-bg" : ""
                  }`}
                  style={{
                    backgroundColor: [
                      "#21A6A1",
                      "#F36F5D",
                      "#DCA83A",
                      "#315DC8",
                    ][index],
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-9">
              <RouteMap />
            </div>
          </div>
        </div>
      </section>

      <section
        id="community"
        className="ec-community-section relative z-10 scroll-mt-28 bg-[#25303A] px-5 py-24 text-white lg:px-10 lg:py-32"
      >
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="relative mx-auto max-w-[96rem]">
          <SectionHeading
            label="Community Board"
            title="What’s Happening At The Gym"
            text="Pinned nights, route sessions, previews, and weekend climbs keep the gym social without making it complicated."
            light
          />
          <div
            id="events"
            className="mt-12 grid scroll-mt-28 gap-5 md:grid-cols-2 xl:grid-cols-4"
          >
            {events.map(([title, time, color], index) => (
              <article
                key={title}
                className={`ec-event-card relative min-h-64 rounded-[1.3rem] border-2 border-white/18 bg-[#F7F1E6] p-6 text-[#25303A] shadow-xl ${index % 2 ? "rotate-1" : "-rotate-1"}`}
              >
                <span
                  className={`absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-white shadow ${
                    index === 0 ? "ec-accent-bg" : index === 1 ? "ec-accent-sec-bg" : ""
                  }`}
                  style={{ backgroundColor: color }}
                />
                <p
                  className={`text-[0.58rem] font-black uppercase tracking-[0.18em] ${
                    index === 0 ? "ec-accent-text" : index === 1 ? "ec-accent-sec-text" : ""
                  }`}
                  style={{ color }}
                >
                  {time}
                </p>
                <h3 className="ec-heading-title mt-12 text-3xl font-black uppercase leading-none tracking-[-0.06em]">
                  {title}
                </h3>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-[#25303A]/12 pt-4">
                  <span className="ec-heading-text text-[0.58rem] font-black uppercase tracking-[0.14em] text-[#6C6A61]">
                    Pinned event
                  </span>
                  <Flag
                    className={`h-5 w-5 ${index === 0 ? "ec-accent-text" : index === 1 ? "ec-accent-sec-text" : ""}`}
                    style={{ color }}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[96rem]">
          <SectionHeading label="Route Team" title="Meet The Team" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {coaches.map((coach, index) => (
              <article
                key={coach.name}
                className="ec-coach-card group overflow-hidden rounded-[2rem] border-2 border-[#25303A]/12 bg-white/72 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={coach.image}
                    alt={`${coach.name} Elevate Climbing coach`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#25303A]/72 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-[#F7F1E6] px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.14em] text-[#25303A]">
                    Team 0{index + 1}
                  </span>
                </div>
                <div className="p-6">
                  <p className="ec-coach-role text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#21A6A1]">
                    {coach.role}
                  </p>
                  <h3 className="ec-heading-title mt-3 text-4xl font-black uppercase leading-none tracking-[-0.065em]">
                    {coach.name}
                  </h3>
                  <p className="ec-heading-text mt-4 text-sm leading-7 text-[#606A70]">
                    {coach.bio}
                  </p>
                  <span className="ec-coach-badge mt-6 inline-flex rounded-full bg-[#25303A] px-4 py-2 text-xs font-black uppercase tracking-[0.13em] text-white">
                    {coach.badge}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="membership"
        className="ec-membership-section relative z-10 scroll-mt-28 bg-[#E5DED2] px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[96rem]">
          <SectionHeading
            label="Membership"
            title="Pick Your Climbing Rhythm"
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[2rem] border-2 p-7 ${
                  plan.popular
                    ? "ec-plan-popular border-[#F36F5D] bg-[#25303A] text-white shadow-[16px_16px_0_rgba(243,111,93,.22)] lg:-translate-y-4"
                    : "ec-plan-card border-white bg-[#F7F1E6]"
                }`}
              >
                {plan.popular && (
                  <span className="ec-plan-popular-badge rounded-full bg-[#F36F5D] px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.14em] text-white">
                    Most Popular
                  </span>
                )}
                <h3
                  className={`mt-8 text-4xl font-black uppercase leading-none tracking-[-0.065em] ${
                    plan.popular ? "text-white" : "ec-heading-title"
                  }`}
                >
                  {plan.name}
                </h3>
                <p
                  className={`mt-4 text-sm leading-7 ${
                    plan.popular ? "text-white/68" : "ec-heading-text text-[#606A70]"
                  }`}
                >
                  {plan.text}
                </p>
                <div
                  className={`mt-8 grid gap-3 border-t pt-7 ${
                    plan.popular ? "border-white/15" : "border-[#25303A]/12"
                  }`}
                >
                  {plan.features.map((feature) => (
                    <span
                      key={feature}
                      className="flex items-center gap-3 text-sm font-bold"
                    >
                      <Check
                        className={`h-4 w-4 ${
                          plan.popular ? "text-[#95C84A] ec-accent-text" : "text-[#21A6A1] ec-accent-text"
                        }`}
                      />
                      {feature}
                    </span>
                  ))}
                </div>
                <ClimbButton
                  href="#contact"
                  outline={plan.popular}
                  className="mt-8 w-full"
                >
                  Choose {plan.name}
                </ClimbButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading
              label="Progress"
              title="Track Skills, Not Just Strength"
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {progressStats.map(([label, value, color], index) => (
                <article
                  key={label}
                  className="ec-progress-card rounded-[1.7rem] border-2 border-[#25303A]/10 bg-white/72 p-5"
                >
                  <div className="flex items-center justify-between gap-4">
                    <p className="ec-heading-title font-black uppercase tracking-[-0.02em]">
                      {label}
                    </p>
                    <span
                      className={`rounded-full px-3 py-1.5 text-xs font-black text-white ${
                        index === 0 ? "ec-accent-bg" : index === 1 ? "ec-accent-sec-bg" : ""
                      }`}
                      style={{ backgroundColor: color }}
                    >
                      {value}
                    </span>
                  </div>
                  <div className="ec-progress-track mt-5 h-3 overflow-hidden rounded-full bg-[#E5DED2]">
                    <span
                      className={`block h-full rounded-full ${
                        index === 0 ? "ec-accent-bg" : index === 1 ? "ec-accent-sec-bg" : ""
                      }`}
                      style={{
                        width: value.includes("%") ? value : "62%",
                        backgroundColor: color,
                      }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="relative min-h-[40rem] overflow-hidden rounded-[2.4rem] border-2 border-[#25303A]/12">
            <img
              src={images.progress}
              alt="Elevate Climbing skill progress tracking"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#25303A]/76 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 right-7">
              <RouteMap dark />
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative z-10 scroll-mt-28 px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="ec-contact-box mx-auto overflow-hidden rounded-[2.8rem] border-2 border-[#25303A]/12 bg-[#25303A] text-white lg:grid lg:max-w-[96rem] lg:grid-cols-[1fr_.85fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="ec-contact-badge inline-flex items-center gap-2 rounded-full bg-[#95C84A] px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#25303A]">
              <Compass className="h-4 w-4" />
              Start your route
            </p>
            <h2 className="mt-7 text-[clamp(2.35rem,7.5vw,8.8rem)] font-black uppercase leading-[0.84] tracking-[-0.08em]">
              Your Next Route Starts Here.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/68">
              Step onto the wall, meet the community, and discover how far your
              climbing can go.
            </p>
            <ClimbButton
              href="mailto:hello@elevateclimbing.example"
              outline
              className="mt-9"
            >
              Start Climbing
            </ClimbButton>
          </div>
          <div className="relative min-h-[32rem]">
            <img
              src={images.cta}
              alt="Elevate Climbing community at the wall"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#25303A]/50 to-transparent" />
          </div>
        </div>
      </section>

      <footer className="ec-footer relative z-10 border-t border-[#25303A]/12 px-5 py-12 lg:px-10">
        <div className="mx-auto flex max-w-[96rem] flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <div>
            <a
              href="#home"
              className="ec-heading-title text-xl font-black uppercase tracking-[-0.04em]"
            >
              Elevate Climbing
            </a>
            <p className="ec-heading-text mt-4 max-w-sm text-sm leading-7 text-[#606A70]">
              Bouldering, skill progression, and climbing community.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="ec-heading-text text-xs font-black uppercase tracking-[0.15em] text-[#606A70] hover:text-[#25303A]"
              >
                {label}
              </a>
            ))}
          </div>
          <div>
            <p className="ec-heading-text text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#6C6A61]">
              Social
            </p>
            <div className="mt-3 flex gap-2">
              {["IG", "YT", "FB"].map((social) => (
                <a
                  key={social}
                  href="#contact"
                  aria-label={`${social} social placeholder`}
                  className="ec-social-btn grid h-10 w-10 place-items-center rounded-full border border-[#25303A]/14 text-[0.6rem] font-black text-[#606A70] hover:border-[#21A6A1] hover:text-[#21A6A1]"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="ec-heading-text mx-auto mt-10 max-w-[96rem] text-xs text-[#6C6A61]">
          © 2026 Elevate Climbing. Route availability, classes, events, and
          memberships may vary.
        </p>
      </footer>
    </main>
  );
}
