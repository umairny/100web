import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ChartNoAxesCombined,
  Check,
  ChevronRight,
  CircleDollarSign,
  DraftingCompass,
  Factory,
  MapPin,
  Menu,
  Target,
  X,
} from "lucide-react";
import heroImage from "../../assets/optimized/realestate/foundry/hero.webp";
import residentialImage from "../../assets/optimized/realestate/foundry/residential-projects.webp";
import communitiesImage from "../../assets/optimized/realestate/foundry/new-communities.webp";
import opportunitiesImage from "../../assets/optimized/realestate/foundry/investment-opportunities.webp";
import ironlineImage from "../../assets/optimized/realestate/foundry/ironline-residences.webp";
import yardsImage from "../../assets/optimized/realestate/foundry/foundry-yards.webp";
import stonegateImage from "../../assets/optimized/realestate/foundry/stonegate-quarter.webp";
import pipelineImage from "../../assets/optimized/realestate/foundry/development-pipeline.webp";
import architectureImage from "../../assets/optimized/realestate/foundry/architectural-vision.webp";
import investorImage from "../../assets/optimized/realestate/foundry/investor-ready.webp";
import transitImage from "../../assets/optimized/realestate/foundry/transit-oriented-living.webp";
import amenityImage from "../../assets/optimized/realestate/foundry/amenity-neighborhoods.webp";
import mixedUseImage from "../../assets/optimized/realestate/foundry/mixed-use-growth.webp";
import ctaImage from "../../assets/optimized/realestate/foundry/cta-development.webp";

const navLinks = [
  ["Projects", "#projects"],
  ["Communities", "#communities"],
  ["Pipeline", "#pipeline"],
  ["Investors", "#investors"],
  ["Contact", "#contact"],
];

const focusAreas = [
  {
    image: residentialImage,
    number: "01",
    label: "Landmark projects",
    title: "Landmark Residential Projects",
    text: "High-impact residential buildings shaped by architecture, livability, and long-term market demand.",
  },
  {
    image: communitiesImage,
    number: "02",
    label: "New communities",
    title: "New Communities",
    text: "Planned neighborhoods designed around access, amenities, public realm, and future growth.",
  },
  {
    image: opportunitiesImage,
    number: "03",
    label: "Capital partnerships",
    title: "Investment Opportunities",
    text: "Development-led opportunities positioned for strategic capital, disciplined execution, and lasting value.",
  },
];

const projects = [
  {
    image: ironlineImage,
    title: "The Ironline Residences",
    location: "Urban Core District",
    type: "Residential Tower",
    status: "Under Development",
    text: "A high-rise residential landmark bringing considered homes, elevated amenities, and a new silhouette to the urban core.",
  },
  {
    image: yardsImage,
    title: "Foundry Yards",
    location: "Waterfront Innovation Zone",
    type: "Mixed-Use Community",
    status: "Pre-Leasing Soon",
    text: "A connected waterfront district uniting residences, local retail, public space, and a new neighborhood destination.",
  },
  {
    image: stonegateImage,
    title: "Stonegate Quarter",
    location: "Emerging Growth Corridor",
    type: "Residential Community",
    status: "Planning Phase",
    text: "A future-focused community shaped around attainable city living, landscape, mobility, and long-term neighborhood value.",
  },
];

const investorPrinciples = [
  {
    icon: Target,
    number: "01",
    title: "Market-Led Site Selection",
    text: "Demand, access, supply, and growth fundamentals guide every acquisition thesis.",
  },
  {
    icon: DraftingCompass,
    number: "02",
    title: "Clear Development Strategy",
    text: "A defined product vision connects planning, design, delivery, and market position.",
  },
  {
    icon: CircleDollarSign,
    number: "03",
    title: "Disciplined Capital Planning",
    text: "Practical underwriting and milestone-based decisions shape responsible execution.",
  },
  {
    icon: ChartNoAxesCombined,
    number: "04",
    title: "Long-Term Asset Value",
    text: "Durable design and operational logic position projects for relevance beyond delivery.",
  },
];

function FoundryButton({
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
      className={`group inline-flex min-h-12 items-center justify-center gap-3 px-6 text-[0.7rem] font-black uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-0.5 ${outline ? "border border-current bg-transparent" : "bg-[var(--theme-accent-primary,#E86F2A)] text-[var(--theme-accent-contrast,#ffffff)] hover:opacity-90"} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function FoundryHeading({
  eyebrow,
  title,
  text,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <div
      className={`${center ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}`}
    >
      <p className="flex items-center gap-3 text-[0.64rem] font-black uppercase tracking-[0.28em] text-[var(--theme-accent-primary,#E86F2A)] before:h-px before:w-8 before:bg-[var(--theme-accent-primary,#E86F2A)]">
        {eyebrow}
      </p>
      <h2
        className={`mt-5 text-[clamp(2.6rem,5.8vw,5.8rem)] font-black uppercase leading-[0.88] tracking-[-0.065em] transition-colors duration-300 ${light ? "text-white" : "text-[var(--theme-text-primary,#242A32)] [html.dark_&]:text-[var(--theme-text-primary,#F0F3F6)]"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-6 max-w-2xl text-base leading-8 md:text-lg transition-colors duration-300 ${center ? "mx-auto" : ""} ${light ? "text-white/58" : "text-[var(--theme-text-secondary,#65707D)] [html.dark_&]:text-[var(--theme-text-secondary,#9CA3AF)]"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function FoundryMark({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      aria-label="Foundry Property Group home"
      className={`flex items-center gap-3 transition-colors duration-300 ${light ? "text-white" : "text-[var(--theme-text-primary,#10141A)] [html.dark_&]:text-[var(--theme-text-primary,#F0F3F6)]"}`}
    >
      <span className="relative grid h-10 w-10 place-items-center border-2 border-[var(--theme-accent-primary,#E86F2A)]">
        <Factory className="h-5 w-5" />
        <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 bg-[var(--theme-accent-primary,#E86F2A)]" />
      </span>
      <span>
        <strong className="block text-sm font-black uppercase leading-none tracking-[0.04em]">
          Foundry
        </strong>
        <span
          className={`mt-1 block text-[0.52rem] font-bold uppercase tracking-[0.24em] transition-colors duration-300 ${light ? "text-white/55" : "text-[var(--theme-text-secondary,#65707D)] [html.dark_&]:text-[var(--theme-text-secondary,#9CA3AF)]"}`}
        >
          Property Group
        </span>
      </span>
    </a>
  );
}

export function FoundryPropertyGroup() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  // Track scroll position for header styling and active section indicator
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["projects", "communities", "pipeline", "investors", "contact"];
      const scrollY = window.scrollY + 140;

      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  return (
    <main className="foundry-site overflow-hidden bg-[var(--theme-bg-base,#F2F0EA)] [html.dark_&]:bg-[var(--theme-bg-base,#10141A)] text-[var(--theme-text-primary,#242A32)] [html.dark_&]:text-[var(--theme-text-primary,#F0F3F6)] selection:bg-[var(--theme-accent-primary,#E86F2A)] selection:text-[var(--theme-accent-contrast,#ffffff)] transition-colors duration-300">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-b border-[var(--theme-border,#D9DDE2)] [html.dark_&]:border-white/10 bg-[var(--theme-bg-base,#F2F0EA)]/95 [html.dark_&]:bg-[var(--theme-bg-dark,#10141A)]/95 shadow-[0_12px_36px_rgba(0,0,0,0.06)] [html.dark_&]:shadow-[0_12px_36px_rgba(0,0,0,0.35)] backdrop-blur-xl"
            : "border-b border-[var(--theme-border,#D9DDE2)]/60 [html.dark_&]:border-white/10 bg-[var(--theme-bg-base,#F2F0EA)]/85 [html.dark_&]:bg-[var(--theme-bg-dark,#10141A)]/85 backdrop-blur-md"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-[94rem] items-center justify-between px-5 sm:px-8 lg:px-10">
          <FoundryMark />

          {/* Desktop Navigation Links */}
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Foundry navigation"
          >
            {navLinks.map(([label, href]) => {
              const isActive = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  className={`group relative py-2 text-[0.68rem] font-black uppercase tracking-[0.18em] transition-colors duration-200 ${
                    isActive
                      ? "text-[var(--theme-accent-primary,#E86F2A)]"
                      : "text-[var(--theme-text-secondary,#65707D)] hover:text-[var(--theme-text-primary,#10141A)] [html.dark_&]:text-white/65 [html.dark_&]:hover:text-white"
                  }`}
                >
                  {label}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 w-full bg-[var(--theme-accent-primary,#E86F2A)] transition-transform duration-300 origin-left ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="hidden items-center gap-6 lg:flex">
            <a
              href="tel:2125550198"
              className="text-[0.66rem] font-bold uppercase tracking-[0.16em] text-[var(--theme-text-secondary,#65707D)] hover:text-[var(--theme-accent-primary,#E86F2A)] [html.dark_&]:text-white/60 [html.dark_&]:hover:text-[var(--theme-accent-primary,#E86F2A)] transition-colors"
            >
              (212) 555-0198
            </a>
            <a
              href="#projects"
              className="group inline-flex h-11 items-center justify-center gap-2.5 bg-[var(--theme-accent-primary,#E86F2A)] px-5 text-[0.66rem] font-black uppercase tracking-[0.18em] text-[var(--theme-accent-contrast,#ffffff)] transition duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[var(--theme-accent-primary,#E86F2A)]/25"
            >
              <span>View Portfolio</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-11 w-11 place-items-center border border-[var(--theme-border,#D9DDE2)] [html.dark_&]:border-white/15 bg-[var(--theme-bg-card,#F2F0EA)] [html.dark_&]:bg-white/[0.04] text-[var(--theme-text-primary,#242A32)] [html.dark_&]:text-white transition lg:hidden hover:border-[var(--theme-accent-primary,#E86F2A)]"
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
              className="fixed inset-0 top-20 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <nav className="fixed inset-x-0 top-20 z-50 border-b border-[var(--theme-border,#D9DDE2)] [html.dark_&]:border-white/10 bg-[var(--theme-bg-base,#F2F0EA)]/98 [html.dark_&]:bg-[var(--theme-bg-dark,#10141A)]/98 px-6 py-6 shadow-2xl backdrop-blur-2xl lg:hidden transition-colors duration-300">
              <div className="flex flex-col divide-y divide-[var(--theme-border,#E2E6EA)] [html.dark_&]:divide-white/10">
                {navLinks.map(([label, href], index) => {
                  const isActive = activeSection === href.slice(1);
                  return (
                    <a
                      key={label}
                      href={href}
                      onClick={() => setMenuOpen(false)}
                      className={`flex items-center justify-between py-4 text-sm font-black uppercase tracking-[0.14em] transition-colors ${
                        isActive
                          ? "text-[var(--theme-accent-primary,#E86F2A)]"
                          : "text-[var(--theme-text-primary,#242A32)] [html.dark_&]:text-white/80 hover:text-[var(--theme-accent-primary,#E86F2A)]"
                      }`}
                    >
                      <span>{label}</span>
                      <span className="text-[0.65rem] font-bold tracking-widest text-[var(--theme-text-secondary,#9CA3AF)]">
                        0{index + 1}
                      </span>
                    </a>
                  );
                })}
              </div>

              {/* Mobile Drawer Actions */}
              <div className="mt-6 flex flex-col gap-3 pt-3">
                <a
                  href="#projects"
                  onClick={() => setMenuOpen(false)}
                  className="flex h-12 items-center justify-center gap-2 bg-[var(--theme-accent-primary,#E86F2A)] text-[0.68rem] font-black uppercase tracking-[0.16em] text-[var(--theme-accent-contrast,#ffffff)] transition hover:opacity-90"
                >
                  View Portfolio <ArrowRight className="h-4 w-4" />
                </a>
                <div className="flex items-center justify-between pt-3 text-[0.68rem] font-bold text-[var(--theme-text-secondary,#65707D)] [html.dark_&]:text-white/50">
                  <a
                    href="mailto:hello@foundrypropertygroup.com"
                    className="hover:text-[var(--theme-accent-primary,#E86F2A)]"
                  >
                    hello@foundrypropertygroup.com
                  </a>
                  <a
                    href="tel:2125550198"
                    className="hover:text-[var(--theme-accent-primary,#E86F2A)]"
                  >
                    (212) 555-0198
                  </a>
                </div>
              </div>
            </nav>
          </>
        )}
      </header>

      <section
        id="home"
        className="relative min-h-[58rem] bg-[var(--theme-bg-dark,#10141A)] pt-20 text-white transition-colors duration-300"
      >
        <img
          src={heroImage}
          alt="Landmark Foundry residential development rising over the city"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,20,26,.96)_0%,rgba(16,20,26,.82)_43%,rgba(16,20,26,.2)_100%)]" />
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,rgba(255,255,255,.28)_1px,transparent_1px)] [background-size:12.5%_100%]" />
        <div className="relative mx-auto flex min-h-[53.5rem] max-w-[94rem] flex-col justify-between px-5 py-16 lg:px-10 lg:py-20">
          <div className="max-w-5xl">
            <p className="flex items-center gap-4 text-[0.65rem] font-black uppercase tracking-[0.3em] text-[var(--theme-accent-primary,#E86F2A)] before:h-px before:w-12 before:bg-[var(--theme-accent-primary,#E86F2A)]">
              Property development / New York
            </p>
            <h1 className="mt-7 max-w-5xl text-[clamp(3.4rem,7.7vw,8.5rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">
              Building Landmark Places{" "}
              <span className="text-[var(--theme-accent-primary,#E86F2A)]">for the Next Generation</span> of
              City Living
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
              Foundry Property Group develops bold residential projects, new
              communities, and investment-ready real estate opportunities shaped
              by architecture, location, and long-term value.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <FoundryButton href="#projects">Explore Projects</FoundryButton>
              <FoundryButton
                href="#investors"
                outline
                className="border-white/40 text-white hover:border-[var(--theme-accent-primary,#E86F2A)] hover:text-[var(--theme-accent-primary,#E86F2A)]"
              >
                Investor Opportunities
              </FoundryButton>
            </div>
          </div>
          <div className="mt-16 grid border-l border-t border-white/20 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["$850M+", "Development Pipeline"],
              ["4,200+", "Homes Planned"],
              ["18", "Landmark Projects"],
              ["9", "Active Communities"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="border-b border-r border-white/20 bg-[var(--theme-bg-dark,#10141A)]/75 p-6 backdrop-blur-md"
              >
                <p className="text-4xl font-black tracking-[-0.06em] text-[var(--theme-accent-primary,#E86F2A)] md:text-5xl">
                  {value}
                </p>
                <p className="mt-2 text-[0.62rem] font-black uppercase tracking-[0.18em] text-white/55">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-10 lg:py-32 bg-[var(--theme-bg-base,#F2F0EA)] [html.dark_&]:bg-[var(--theme-bg-base,#10141A)] transition-colors duration-300">
        <div className="mx-auto max-w-[94rem]">
          <FoundryHeading
            eyebrow="Development focus"
            title="Developing Projects with Scale, Design, and Purpose"
            text="Our work connects ambitious architecture with disciplined development thinking—turning strategic sites into places with enduring relevance."
          />
          <div className="mt-14 grid gap-px bg-[var(--theme-border,#C8CDD2)] [html.dark_&]:bg-[var(--theme-border,rgba(255,255,255,0.12))] lg:grid-cols-3">
            {focusAreas.map((area) => (
              <article key={area.title} className="group bg-[var(--theme-bg-card,#F2F0EA)] [html.dark_&]:bg-[var(--theme-bg-card,#181E26)] p-4 transition-colors duration-300">
                <div className="relative aspect-[4/3] overflow-hidden bg-[var(--theme-bg-dark,#343A43)]">
                  <img
                    src={area.image}
                    alt=""
                    className="h-full w-full object-cover grayscale-[20%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                  />
                  <span className="absolute left-0 top-0 bg-[var(--theme-accent-primary,#E86F2A)] px-4 py-3 text-xs font-black text-[var(--theme-accent-contrast,#ffffff)]">
                    {area.number}
                  </span>
                </div>
                <div className="px-2 pb-4 pt-7">
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[var(--theme-accent-primary,#E86F2A)]">
                    {area.label}
                  </p>
                  <h3 className="mt-4 text-2xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-[var(--theme-text-primary,#242A32)] [html.dark_&]:text-[var(--theme-text-primary,#F0F3F6)] md:text-3xl">
                    {area.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[var(--theme-text-secondary,#65707D)] [html.dark_&]:text-[var(--theme-text-secondary,#9CA3AF)]">
                    {area.text}
                  </p>
                  <a
                    href="#projects"
                    className="mt-6 inline-flex items-center gap-2 text-[0.66rem] font-black uppercase tracking-[0.16em] text-[var(--theme-text-primary,#242A32)] [html.dark_&]:text-[var(--theme-text-primary,#F0F3F6)] hover:text-[var(--theme-accent-primary,#E86F2A)] transition-colors"
                  >
                    Learn More{" "}
                    <ArrowDownRight className="h-4 w-4 text-[var(--theme-accent-primary,#E86F2A)]" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="border-y border-[var(--theme-border,#C9CDD2)] [html.dark_&]:border-[var(--theme-border,rgba(255,255,255,0.12))] bg-[var(--theme-bg-surface,#ffffff)] [html.dark_&]:bg-[var(--theme-bg-surface,#141920)] px-5 py-24 lg:px-10 lg:py-32 transition-colors duration-300"
      >
        <div className="mx-auto max-w-[94rem]">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <FoundryHeading
              eyebrow="Landmark projects"
              title="Featured Developments"
            />
            <p className="max-w-md border-l-2 border-[var(--theme-accent-primary,#E86F2A)] pl-5 text-sm leading-7 text-[var(--theme-text-secondary,#65707D)] [html.dark_&]:text-[var(--theme-text-secondary,#9CA3AF)]">
              Selected projects across active delivery, pre-leasing, and
              planning—each built around a distinct market and place-making
              strategy.
            </p>
          </div>
          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className="foundry-project group border border-[var(--theme-border,#D9DDE2)] [html.dark_&]:border-[var(--theme-border,rgba(255,255,255,0.12))] bg-[var(--theme-bg-card,#F2F0EA)] [html.dark_&]:bg-[var(--theme-bg-card,#181E26)] transition-colors duration-300"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.title} development`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 bg-[var(--theme-accent-primary,#E86F2A)] px-3 py-2 text-[0.58rem] font-black uppercase tracking-[0.13em] text-[var(--theme-accent-contrast,#ffffff)]">
                    {project.status}
                  </span>
                  <span className="absolute bottom-3 right-4 text-6xl font-black tracking-[-0.08em] text-white/35">
                    0{index + 1}
                  </span>
                </div>
                <div className="p-6 lg:p-7">
                  <p className="flex items-center gap-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[var(--theme-text-secondary,#65707D)] [html.dark_&]:text-[var(--theme-text-secondary,#9CA3AF)]">
                    <MapPin className="h-3.5 w-3.5 text-[var(--theme-accent-primary,#E86F2A)]" />
                    {project.location}
                  </p>
                  <h3 className="mt-4 text-3xl font-black uppercase leading-[0.9] tracking-[-0.05em] text-[var(--theme-text-primary,#242A32)] [html.dark_&]:text-[var(--theme-text-primary,#F0F3F6)]">
                    {project.title}
                  </h3>
                  <div className="mt-5 border-y border-[var(--theme-border,#D1D4D7)] [html.dark_&]:border-[var(--theme-border,rgba(255,255,255,0.1))] py-3 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[var(--theme-accent-primary,#E86F2A)]">
                    {project.type}
                  </div>
                  <p className="mt-5 min-h-20 text-sm leading-7 text-[var(--theme-text-secondary,#65707D)] [html.dark_&]:text-[var(--theme-text-secondary,#9CA3AF)]">
                    {project.text}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex w-full items-center justify-between bg-[var(--theme-bg-dark,#343A43)] [html.dark_&]:bg-[var(--theme-bg-dark,#10141A)] [html.dark_&]:border [html.dark_&]:border-white/10 px-5 py-4 text-[0.66rem] font-black uppercase tracking-[0.16em] text-white transition hover:bg-[var(--theme-accent-primary,#E86F2A)] hover:text-[var(--theme-accent-contrast,#ffffff)]"
                  >
                    View Project <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pipeline"
        className="relative bg-[var(--theme-bg-dark,#10141A)] px-5 py-24 text-white lg:px-10 lg:py-32 transition-colors duration-300"
      >
        <img
          src={pipelineImage}
          alt="Foundry development pipeline construction"
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--theme-bg-dark,#10141A)] via-[var(--theme-bg-dark,#10141A)]/95 to-[var(--theme-bg-dark,#10141A)]/75" />
        <div className="relative mx-auto max-w-[94rem]">
          <FoundryHeading
            eyebrow="Investment pipeline"
            title="A Pipeline Built for Long-Term Value"
            text="Our portfolio is shaped by disciplined site selection, strong market fundamentals, thoughtful design, and clear execution strategy."
            light
          />
          <div className="mt-14 grid border-l border-t border-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "4,200+",
                "Residential Units",
                "Across active and future phases",
              ],
              [
                "06",
                "Mixed-Use Projects",
                "Residential, retail, and public realm",
              ],
              ["04", "Active Markets", "Selected high-growth city districts"],
              [
                "11",
                "Future Development Sites",
                "Under evaluation and planning",
              ],
            ].map(([value, label, note]) => (
              <article
                key={label}
                className="border-b border-r border-white/15 bg-white/[0.035] p-7"
              >
                <span className="block h-0.5 w-10 bg-[var(--theme-accent-primary,#E86F2A)]" />
                <p className="mt-9 text-5xl font-black tracking-[-0.06em] text-[var(--theme-accent-primary,#E86F2A)] lg:text-6xl">
                  {value}
                </p>
                <h3 className="mt-4 text-sm font-black uppercase tracking-[0.12em]">
                  {label}
                </h3>
                <p className="mt-2 text-xs leading-5 text-white/40">{note}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="grid bg-[var(--theme-bg-surface,#ffffff)] [html.dark_&]:bg-[var(--theme-bg-surface,#141920)] lg:grid-cols-2 transition-colors duration-300">
        <div className="min-h-[35rem]">
          <img
            src={architectureImage}
            alt="Architectural form and public realm at a Foundry development"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex items-center px-5 py-20 lg:px-16 lg:py-28 xl:px-24">
          <div>
            <FoundryHeading
              eyebrow="Architectural vision"
              title="Architecture That Shapes Better Communities"
              text="From building form to street-level experience, Foundry Property Group develops places that balance design ambition with practical livability and durable value."
            />
            <div className="mt-9 grid gap-4">
              {[
                "Distinct architectural identity",
                "Walkable and connected planning",
                "Efficient modern residential layouts",
              ].map((point, index) => (
                <div
                  key={point}
                  className="flex items-center gap-4 border-t border-[var(--theme-border,#D9DDE2)] [html.dark_&]:border-[var(--theme-border,rgba(255,255,255,0.12))] pt-4"
                >
                  <span className="text-sm font-black text-[var(--theme-accent-primary,#E86F2A)]">
                    0{index + 1}
                  </span>
                  <p className="font-black uppercase tracking-[-0.02em] text-[var(--theme-text-primary,#343A43)] [html.dark_&]:text-[var(--theme-text-primary,#F0F3F6)]">
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="investors"
        className="bg-[var(--theme-bg-base,#F2F0EA)] [html.dark_&]:bg-[var(--theme-bg-base,#10141A)] px-5 py-24 lg:px-10 lg:py-32 transition-colors duration-300"
      >
        <div className="mx-auto max-w-[94rem]">
          <div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <FoundryHeading
              eyebrow="Investor-ready"
              title="Structured for Investors, Built for Communities"
            />
            <div>
              <p className="max-w-xl text-base leading-8 text-[var(--theme-text-secondary,#65707D)] [html.dark_&]:text-[var(--theme-text-secondary,#9CA3AF)]">
                We align market research, development strategy, capital
                planning, and execution discipline to create projects with clear
                investment logic.
              </p>
              <FoundryButton href="#contact" className="mt-6">
                Discuss Opportunities
              </FoundryButton>
            </div>
          </div>
          <div className="mt-14 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {investorPrinciples.map(({ icon: Icon, number, title, text }) => (
              <article
                key={title}
                className="group border border-transparent [html.dark_&]:border-white/10 bg-[var(--theme-bg-dark,#343A43)] [html.dark_&]:bg-[var(--theme-bg-card,#181E26)] p-7 text-white transition duration-300 hover:-translate-y-1 hover:bg-[var(--theme-bg-dark,#10141A)]"
              >
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-[var(--theme-accent-primary,#E86F2A)]" />
                  <span className="text-xs font-black text-white/25">
                    {number}
                  </span>
                </div>
                <h3 className="mt-12 text-xl font-black uppercase leading-[1.05] tracking-[-0.035em]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-white/48">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-3 grid overflow-hidden bg-[var(--theme-bg-dark,#10141A)] [html.dark_&]:border [html.dark_&]:border-white/10 lg:grid-cols-[1fr_1.2fr]">
            <img
              src={investorImage}
              alt="Foundry investor-ready development presentation"
              className="h-full min-h-72 w-full object-cover opacity-80"
            />
            <div className="flex items-center p-8 text-white lg:p-12">
              <div>
                <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[var(--theme-accent-primary,#E86F2A)]">
                  Development discipline
                </p>
                <p className="mt-4 max-w-xl text-2xl font-black uppercase leading-tight tracking-[-0.04em]">
                  Clear decisions at every stage—from acquisition thesis through
                  delivery and long-term positioning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="communities"
        className="border-y border-[var(--theme-border,#D9DDE2)] [html.dark_&]:border-[var(--theme-border,rgba(255,255,255,0.12))] bg-[var(--theme-bg-surface,#ffffff)] [html.dark_&]:bg-[var(--theme-bg-surface,#141920)] px-5 py-24 lg:px-10 lg:py-32 transition-colors duration-300"
      >
        <div className="mx-auto max-w-[94rem]">
          <FoundryHeading
            eyebrow="New communities"
            title="New Communities with Everyday Momentum"
            text="Our communities are planned around access, amenities, public spaces, and the evolving way people want to live."
          />
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {[
              [
                transitImage,
                "Transit-Oriented Living",
                "Connected sites that make daily movement simpler.",
              ],
              [
                amenityImage,
                "Amenity-Rich Neighborhoods",
                "Useful shared spaces that support real routines.",
              ],
              [
                mixedUseImage,
                "Mixed-Use Growth Districts",
                "Active places where residential, retail, and public life meet.",
              ],
            ].map(([image, title, text], index) => (
              <article
                key={title}
                className="group relative min-h-[32rem] overflow-hidden bg-[var(--theme-bg-dark,#343A43)]"
              >
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-bg-dark,#10141A)] via-[var(--theme-bg-dark,#10141A)]/10 to-transparent" />
                <span className="absolute right-5 top-5 border border-white/40 px-3 py-2 text-xs font-black text-white">
                  0{index + 1}
                </span>
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <h3 className="text-3xl font-black uppercase leading-[0.95] tracking-[-0.05em]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/58">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-10 lg:py-32 bg-[var(--theme-bg-base,#F2F0EA)] [html.dark_&]:bg-[var(--theme-bg-base,#10141A)] transition-colors duration-300">
        <div className="mx-auto max-w-[94rem]">
          <FoundryHeading
            eyebrow="Development process"
            title="From Site to Landmark"
            text="A structured path that brings market insight, planning, design, and delivery into focus."
          />
          <div className="relative mt-16 grid gap-4 lg:grid-cols-5 lg:gap-0 before:absolute before:left-[10%] before:right-[10%] before:top-5 before:hidden before:h-px before:bg-[var(--theme-border,#AEB5BD)] [html.dark_&]:before:bg-[var(--theme-border,rgba(255,255,255,0.2))] lg:before:block">
            {[
              [
                "01",
                "Site Acquisition",
                "Identify high-potential locations supported by market demand.",
              ],
              [
                "02",
                "Planning & Entitlements",
                "Shape a clear path from concept to approved development.",
              ],
              [
                "03",
                "Design & Development",
                "Align architecture, feasibility, construction, and future value.",
              ],
              [
                "04",
                "Delivery",
                "Execute with quality, discipline, and project accountability.",
              ],
              [
                "05",
                "Long-Term Positioning",
                "Create residential assets and communities designed to endure.",
              ],
            ].map(([number, title, text]) => (
              <article
                key={number}
                className="relative bg-[var(--theme-bg-card,#F2F0EA)] [html.dark_&]:bg-[var(--theme-bg-card,#181E26)] p-6 lg:bg-transparent [html.dark_&]:lg:bg-transparent lg:px-5 lg:pt-0"
              >
                <span className="relative z-10 grid h-10 w-10 place-items-center bg-[var(--theme-accent-primary,#E86F2A)] text-xs font-black text-[var(--theme-accent-contrast,#ffffff)]">
                  {number}
                </span>
                <h3 className="mt-8 text-lg font-black uppercase leading-tight tracking-[-0.03em] text-[var(--theme-text-primary,#242A32)] [html.dark_&]:text-[var(--theme-text-primary,#F0F3F6)]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--theme-text-secondary,#65707D)] [html.dark_&]:text-[var(--theme-text-secondary,#9CA3AF)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--theme-bg-surface,#D9DDE2)] [html.dark_&]:bg-[var(--theme-bg-surface,#141920)] px-5 py-24 lg:px-10 lg:py-32 transition-colors duration-300">
        <div className="mx-auto max-w-[94rem]">
          <FoundryHeading eyebrow="Perspectives" title="Development Insights" />
          <div className="mt-12 grid gap-px bg-[var(--theme-border,#B8BEC5)] [html.dark_&]:bg-[var(--theme-border,rgba(255,255,255,0.12))] lg:grid-cols-3">
            {[
              [
                "Investment logic",
                "What Makes a Residential Development Investment-Ready",
                "How market evidence, product fit, execution planning, and capital structure come together in a credible development thesis.",
              ],
              [
                "Location strategy",
                "Why Location Strategy Shapes Long-Term Value",
                "A closer look at access, demand drivers, supply, public investment, and the signals that support durable urban growth.",
              ],
              [
                "Future communities",
                "Designing Communities for the Next Wave of Urban Living",
                "Why flexible homes, useful amenities, connected public space, and mixed-use planning matter to tomorrow’s residents.",
              ],
            ].map(([label, title, text], index) => (
              <article key={title} className="group bg-[var(--theme-bg-card,#ffffff)] [html.dark_&]:bg-[var(--theme-bg-card,#181E26)] p-7 lg:p-9 text-[var(--theme-text-primary,#242A32)] [html.dark_&]:text-[var(--theme-text-primary,#F0F3F6)] transition-colors duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[var(--theme-accent-primary,#E86F2A)]">
                    {label}
                  </span>
                  <span className="text-xs font-black text-[var(--theme-text-secondary,#B0B6BD)] [html.dark_&]:text-[var(--theme-text-secondary,#64748B)]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-10 text-2xl font-black uppercase leading-[1.02] tracking-[-0.045em] text-[var(--theme-text-primary,#242A32)] [html.dark_&]:text-[var(--theme-text-primary,#F0F3F6)]">
                  {title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[var(--theme-text-secondary,#65707D)] [html.dark_&]:text-[var(--theme-text-secondary,#9CA3AF)]">{text}</p>
                <a
                  href="#contact"
                  className="mt-8 inline-flex items-center gap-2 text-[0.65rem] font-black uppercase tracking-[0.16em] text-[var(--theme-text-primary,#242A32)] [html.dark_&]:text-[var(--theme-text-primary,#F0F3F6)] hover:text-[var(--theme-accent-primary,#E86F2A)] transition-colors"
                >
                  Read Insight{" "}
                  <ChevronRight className="h-4 w-4 text-[var(--theme-accent-primary,#E86F2A)] transition group-hover:translate-x-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative bg-[var(--theme-bg-dark,#10141A)] px-5 py-28 text-white lg:px-10 lg:py-36 transition-colors duration-300"
      >
        <img
          src={ctaImage}
          alt="Future Foundry residential landmark"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,var(--theme-bg-dark,#10141A)_0%,rgba(16,20,26,.9)_55%,rgba(16,20,26,.5)_100%)]" />
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(90deg,white_1px,transparent_1px),linear-gradient(white_1px,transparent_1px)] [background-size:80px_80px]" />
        <div className="relative mx-auto max-w-[94rem]">
          <div className="max-w-5xl">
            <p className="text-[0.65rem] font-black uppercase tracking-[0.26em] text-[var(--theme-accent-primary,#E86F2A)]">
              Build what comes next
            </p>
            <h2 className="mt-6 text-[clamp(3.2rem,7vw,7rem)] font-black uppercase leading-[0.84] tracking-[-0.07em]">
              Partner with a Developer Built for Ambitious Projects
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/60 md:text-lg">
              Connect with Foundry Property Group to discuss development
              opportunities, investment partnerships, land acquisition, and
              future residential communities.
            </p>
            <FoundryButton
              href="mailto:hello@foundrypropertygroup.com"
              className="mt-9"
            >
              Start a Conversation
            </FoundryButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[var(--theme-bg-dark,#10141A)] px-5 pb-8 pt-16 text-white lg:px-10 transition-colors duration-300">
        <div className="mx-auto max-w-[94rem]">
          <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.35fr_.65fr_.8fr_1fr]">
            <div>
              <FoundryMark light />
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/40">
                Developer portfolio for landmark residential projects, new
                communities, and investment opportunities.
              </p>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.15em]">
                Quick links
              </p>
              <div className="mt-5 grid gap-3 text-sm text-white/45">
                {navLinks.slice(0, 4).map(([label, href]) => (
                  <a key={label} href={href} className="hover:text-[var(--theme-accent-primary,#E86F2A)] transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.15em]">
                Development focus
              </p>
              <div className="mt-5 grid gap-3 text-sm text-white/45">
                <a href="#projects" className="hover:text-[var(--theme-accent-primary,#E86F2A)] transition-colors">Residential</a>
                <a href="#communities" className="hover:text-[var(--theme-accent-primary,#E86F2A)] transition-colors">Communities</a>
                <a href="#projects" className="hover:text-[var(--theme-accent-primary,#E86F2A)] transition-colors">Mixed-Use</a>
                <a href="#investors" className="hover:text-[var(--theme-accent-primary,#E86F2A)] transition-colors">Investment</a>
              </div>
            </div>
            <div>
              <p className="text-xs font-black uppercase tracking-[0.15em]">
                Contact
              </p>
              <div className="mt-5 grid gap-3 text-sm text-white/45">
                <a href="mailto:hello@foundrypropertygroup.com" className="hover:text-[var(--theme-accent-primary,#E86F2A)] transition-colors">
                  hello@foundrypropertygroup.com
                </a>
                <a href="tel:2125550198" className="hover:text-[var(--theme-accent-primary,#E86F2A)] transition-colors">(212) 555-0198</a>
                <span>New York, NY</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-[0.65rem] text-white/30 md:flex-row md:justify-between">
            <p>© 2026 Foundry Property Group. All rights reserved.</p>
            <p>
              Project details, investment opportunities, timelines, and
              availability are subject to change.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
