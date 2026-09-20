import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Award,
  Calendar,
  Camera,
  Check,
  CirclePlay,
  Clock3,
  Crown,
  Diamond,
  Gem,
  Heart,
  Mail,
  MapPin,
  Music2,
  Phone,
  Pin,
  ShoppingBag,
  Sparkles,
  Star,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

const blushImages = import.meta.glob(
  "../../assets/optimized/beauty/blush/*.webp",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
) as Record<string, string>;

const image = (name: string) =>
  blushImages[`../../assets/optimized/beauty/blush/${name}`];

const navItems = [
  ["Home", "home"],
  ["Services", "services"],
  ["Gallery", "gallery"],
  ["About", "about"],
  ["Artists", "artists"],
  ["Reviews", "blog"],
  ["Book", "book"],
  ["Shop", "shop"],
  ["Contact", "contact"],
];

const services: Array<{
  name: string;
  copy: string;
  price: string;
  image: string;
  icon: LucideIcon;
}> = [
  {
    name: "Bold Glam",
    copy: "Full coverage makeup, dramatic eyes & contour for all-night impact.",
    price: "From $110",
    image: "bold.webp",
    icon: Star,
  },
  {
    name: "Soft Glam",
    copy: "Flawless, radiant skin enhancement with subtle, glowing elegance.",
    price: "From $90",
    image: "soft.webp",
    icon: Heart,
  },
  {
    name: "Party Looks",
    copy: "Vibrant shimmer, fierce accents & camera-ready for celebrations.",
    price: "From $95",
    image: "party.webp",
    icon: Crown,
  },
  {
    name: "Social Ready",
    copy: "Express glam refresh tailored for content shoots and VIP nights out.",
    price: "From $60",
    image: "social.webp",
    icon: Camera,
  },
];

const features: Array<{ title: string; copy: string; icon: LucideIcon }> = [
  {
    title: "Luxury Products",
    copy: "Premium dermatologist-tested brands for flawless wear.",
    icon: Diamond,
  },
  {
    title: "On Time. Always.",
    copy: "Punctual, professional & dedicated to your schedule.",
    icon: Clock3,
  },
  {
    title: "Expert Artists",
    copy: "Experienced pros who bring your exact vision to life.",
    icon: Star,
  },
  {
    title: "Custom Looks",
    copy: "Every contour, shade & tone is matched uniquely to you.",
    icon: Sparkles,
  },
  {
    title: "Confidence Boost",
    copy: "Step out feeling magnetic, camera-ready & unforgettable.",
    icon: Heart,
  },
];

const artists = [
  {
    name: "Lena",
    role: "Lead Makeup Artist",
    image: "lena.webp",
    copy: "10+ years specializing in high-fashion editorial, bridal & full-glam transformations.",
  },
  {
    name: "Maya",
    role: "Senior Glam Specialist",
    image: "maya.webp",
    copy: "Master of red-carpet skin, airbrush techniques & trendsetting social looks.",
  },
];

const testimonials = [
  [
    "“Blush Beauty Bar made me feel like an absolute queen. My makeup stayed pristine through 8 hours of dancing!”",
    "Jessica R.",
    "Verified Client",
  ],
  [
    "“The artists are so talented and welcoming! They knew exactly how to highlight my features. 10/10 experience.”",
    "Tiffany M.",
    "Birthday Glam",
  ],
  [
    "“Every single time I book with Blush, I walk out feeling like the most confident version of myself.”",
    "Alexis D.",
    "Event Client",
  ],
];

const products = [
  { file: "spray.webp", name: "Luminous Setting Spray", price: "$28", desc: "16-hour lock & dewy finish" },
  { file: "primer.webp", name: "Velvet Blur Primer", price: "$30", desc: "Pore-refining smoothing base" },
  { file: "lipgloss.webp", name: "High-Shine Glass Gloss", price: "$25", desc: "Non-sticky plumping peptide" },
  { file: "highlite.webp", name: "Iconic Highlight Palette", price: "$35", desc: "Quad dimensional strobing powder" },
];

function scrollToSectionId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = target.getBoundingClientRect().top + window.scrollY - 70;
  window.scrollTo({
    top: Math.max(0, top),
    behavior: reduced ? "auto" : "smooth",
  });
  window.history.replaceState(null, "", `#${id}`);
}

function Button({
  children,
  href = "#book",
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
    if (href.startsWith("#")) {
      event.preventDefault();
      scrollToSectionId(href.slice(1));
    }
  };
  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex min-h-11 items-center justify-center gap-2.5 rounded-full px-7 py-3 text-xs font-bold uppercase tracking-[0.09em] transition-all duration-300 active:scale-95 ${
        outline
          ? "border border-[#ff4385]/80 bg-black/40 text-white shadow-[0_0_15px_rgba(255,67,133,0.2)] hover:border-[#ff4385] hover:bg-[#ff397f] hover:text-white hover:shadow-[0_0_25px_rgba(255,41,113,0.6)]"
          : "border border-[#ff5b96] bg-gradient-to-r from-[#ee286e] via-[#ff3b81] to-[#ee286e] text-white shadow-[0_0_20px_rgba(255,41,113,0.6)] hover:shadow-[0_0_30px_rgba(255,41,113,0.9)] hover:-translate-y-0.5"
      } ${className}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title?: string }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-[#ff4385]/30 bg-[#ff4385]/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.22em] text-[#ff689d]">
        <Sparkles className="h-3 w-3 text-[#ff4385]" />
        <span>{eyebrow}</span>
        <Sparkles className="h-3 w-3 text-[#ff4385]" />
      </div>
      {title && (
        <h2 className="blush-serif mt-3 text-2xl uppercase tracking-tight text-[#f5e9eb] sm:text-3xl lg:text-4xl">
          {title}
        </h2>
      )}
    </div>
  );
}

export function BlushBeautyBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      const scrollY = window.scrollY;
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;

      // Bottom of page guard
      if (scrollable > 0 && scrollY >= scrollable - 60) {
        setActiveSection("contact");
        setScrolled(true);
        return;
      }

      // Top of page guard
      if (scrollY < 80) {
        setActiveSection("home");
        setScrolled(false);
        return;
      }

      const marker = Math.min(220, Math.max(100, window.innerHeight * 0.28));
      let current = "home";

      const sections = [
        "home",
        "services",
        "gallery",
        "about",
        "artists",
        "blog",
        "book",
        "shop",
        "contact",
      ];

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= marker) {
            current = id;
          }
        }
      }

      setActiveSection(current);
      setScrolled(scrollY > 15);
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
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
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
    event.preventDefault();
    setMenuOpen(false);
    setActiveSection(id);
    scrollToSectionId(id);
  };

  const handleAddToCart = (name: string) => {
    setAddedItem(name);
    setTimeout(() => {
      setAddedItem((current) => (current === name ? null : current));
    }, 2500);
  };

  return (
    <main className="blush-site brand-motion motion-blush min-h-screen w-full max-w-full overflow-x-hidden bg-[#02020b] text-[#f4e8eb]">
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full max-w-full border-b transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-[#ff3374]/35 bg-[#03030d]/95 shadow-[0_10px_40px_rgba(0,0,0,0.7)] backdrop-blur-xl"
            : "border-transparent bg-gradient-to-b from-black/80 via-black/40 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-[72px] max-w-[1510px] items-center justify-between px-5 lg:px-10">
          <a
            href="#home"
            onClick={(event) => navigate(event, "home")}
            className="leading-none select-none transition-opacity hover:opacity-90"
            aria-label="Blush Beauty Bar Home"
          >
            <span className="blush-script block -rotate-3 text-4xl sm:text-[42px] text-[#ff4d8d] drop-shadow-[0_0_12px_rgba(255,55,128,0.95)]">
              Blush
            </span>
            <span className="mt-1 block pl-5 text-[9.5px] sm:text-[10px] font-bold uppercase tracking-[0.32em] text-white/90">
              Beauty Bar
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 xl:flex">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => navigate(event, id)}
                aria-current={activeSection === id ? "location" : undefined}
                className={`relative py-3 text-xs font-semibold uppercase tracking-wider text-white transition duration-200 after:absolute after:inset-x-0 after:bottom-1 after:h-px after:bg-[#ff3c7d] after:transition-transform ${
                  activeSection === id
                    ? "active text-[#ff4d8d] font-bold after:scale-x-100"
                    : "text-white/80 after:scale-x-0 hover:text-[#ff4d8d] hover:after:scale-x-100"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop-Only Book Button */}
          <div className="hidden xl:block">
            <Button>
              Book Now <Sparkles className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="blush-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#ff4385]/60 bg-[#080814]/80 text-[#ff4385] xl:hidden active:scale-95 transition hover:border-[#ff4385] hover:bg-[#ff4385]/10 shadow-[0_0_15px_rgba(255,67,133,0.15)]"
          >
            <span className="flex flex-col gap-1.5">
              <i
                className={`h-px w-5 bg-current transition ${
                  menuOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <i
                className={`h-px w-5 bg-current transition ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <i
                className={`h-px w-5 bg-current transition ${
                  menuOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* Mobile Slide-Down Overlay */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 top-[72px] z-40 bg-black/65 backdrop-blur-xs xl:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            <nav
              id="blush-mobile-menu"
              className="fixed inset-x-0 top-[72px] z-50 w-full max-w-full max-h-[calc(100dvh-72px)] overflow-y-auto overflow-x-hidden border-b border-[#ff4385]/35 bg-[#050512]/98 p-5 shadow-2xl backdrop-blur-2xl xl:hidden"
            >
              {/* Studio Status Pill */}
              <div className="mb-3 flex items-center justify-between rounded-xl border border-[#ff4385]/30 bg-[#ff4385]/10 px-3.5 py-2 text-xs">
                <span className="flex items-center gap-2 font-bold text-[#ff4d8d]">
                  <span className="h-2 w-2 rounded-full bg-[#ff4385] animate-ping" />
                  Glam Bookings Open
                </span>
                <span className="text-[11px] font-medium text-white/70">
                  SoHo · New York
                </span>
              </div>

              <div className="space-y-1">
                {navItems.map(([label, id]) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(event) => navigate(event, id)}
                    className={`flex items-center justify-between rounded-lg px-4 py-3 text-xs font-semibold uppercase tracking-wider transition ${
                      activeSection === id
                        ? "active bg-[#ff3374]/25 text-[#ff4d8d] font-bold shadow-sm"
                        : "hover:bg-white/5 text-white/85"
                    }`}
                  >
                    <span>{label}</span>
                    <span className="text-xs text-[#ff4385]">→</span>
                  </a>
                ))}
              </div>

              {/* Quick Contact & Hours Card */}
              <div className="mt-4 rounded-xl border border-[#ff4385]/25 bg-[#0a0a18] p-4 text-xs">
                <div className="grid grid-cols-2 gap-2 pb-3 mb-3 border-b border-white/10 text-white/70">
                  <div>
                    <span className="block font-bold uppercase text-[#ff4d8d] text-[10px]">Hours</span>
                    <span>Tue–Sun 10am–9pm</span>
                  </div>
                  <div>
                    <span className="block font-bold uppercase text-[#ff4d8d] text-[10px]">Studio</span>
                    <span>483 Broadway, NYC</span>
                  </div>
                </div>
                <a
                  href="tel:555-794-4526"
                  className="flex items-center justify-center gap-2 rounded-full border border-[#ff4385]/60 bg-[#ff4385]/15 py-2.5 text-xs font-bold text-[#ff689d] transition hover:bg-[#ff4385] hover:text-white"
                >
                  <Phone className="h-3.5 w-3.5" />
                  Call: (555) 794-GLAM
                </a>
              </div>
            </nav>
          </>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[720px] overflow-hidden sm:min-h-[740px]"
      >
        <img
          src={image("hero.webp")}
          alt="Bold pink glam makeup look"
          className="absolute inset-0 h-full w-full object-cover object-[68%_center] sm:object-center transition-transform duration-1000 scale-100 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02020b] via-[#02020b]/80 to-[#02020b]/15 sm:via-[#02020b]/65 lg:via-[#02020b]/35" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_48%,rgba(255,32,111,0.18),transparent_38%),linear-gradient(to_top,rgba(2,2,11,0.92),transparent_38%)]" />
        
        <div className="relative mx-auto flex min-h-[720px] max-w-[1510px] items-center px-6 pb-20 pt-32 sm:min-h-[740px] lg:px-14">
          <div className="max-w-[720px]">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#ff4385] shadow-[0_0_8px_#ff4385]" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#ffc0d3]">
                Event-Ready Beauty That Steals the Night
              </p>
              <Sparkles className="h-4 w-4 shrink-0 text-[#ff4385] animate-pulse" />
            </div>

            <h1 className="blush-serif mt-5 text-[clamp(2.6rem,7vw,6.8rem)] uppercase leading-[0.88] tracking-[-0.04em] text-white drop-shadow-[0_5px_25px_rgba(0,0,0,0.5)]">
              Bold Looks.
            </h1>
            <p className="blush-script mt-2 text-[clamp(2.2rem,6.2vw,5.8rem)] leading-none text-[#ff4b8a] drop-shadow-[0_0_14px_rgba(255,47,120,0.95)]">
              Unforgettable Nights.
            </p>

            <p className="mt-7 max-w-lg border-l-2 border-[#ff4385] pl-5 text-sm sm:text-base leading-7 text-white/85">
              From camera-ready soft glam to all-out evening drama — our master artists sculpt, glow, and elevate your features so you leave feeling truly magnetic.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href="#book" className="w-full sm:w-auto">
                Book Your Glam <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#services" outline className="w-full sm:w-auto">
                Explore Services
              </Button>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4 text-xs text-white/60">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff4385] opacity-60" />
                  <span className="relative h-2.5 w-2.5 rounded-full bg-[#ff4385]" />
                </span>
                <span className="uppercase tracking-[0.12em] font-medium">Tonight's Slots Open</span>
              </div>
              <span className="hidden sm:inline-block text-white/30">·</span>
              <div className="flex items-center gap-1 text-[#ffb8ce] font-semibold">
                <Star className="h-3.5 w-3.5 fill-[#ffd800] text-[#ffd800]" />
                <span>4.9 Star Rating (850+ Clients)</span>
              </div>
            </div>
          </div>
        </div>

        <a
          href="#services"
          className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/55 transition hover:text-[#ff4385] lg:flex"
        >
          <span className="h-px w-12 bg-current" />
          Scroll to explore
        </a>
      </section>

      {/* Floating Stats Ribbon */}
      <section className="relative z-10 mx-auto -mt-10 max-w-[1370px] px-4 sm:px-6">
        <div className="grid rounded-2xl border border-[#ff397f]/50 bg-[#080815]/95 px-6 py-5 shadow-[0_15px_40px_rgba(0,0,0,0.8),0_0_30px_rgba(255,33,107,0.18)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-4 gap-y-4">
          {[
            [Star, "4.9 Rating", "850+ 5-Star Reviews", true],
            [Diamond, "Pro Artistry", "On Time. On Point. Always.", false],
            [UsersRound, "12K+ Looks", "Happy Glam Clients", false],
            [Award, "Luxury Kit", "Armani, NARS & Charlotte Tilbury", false],
          ].map(([RawIcon, title, copy, hasStars]) => {
            const StatIcon = RawIcon as LucideIcon;
            return (
              <div
                key={String(title)}
                className="flex items-center gap-4 py-2 sm:py-3 lg:border-r lg:border-[#ff397f]/30 lg:px-6 lg:last:border-0"
              >
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[#ff4385]/40 bg-[#ff4385]/10 text-[#ff4385] shadow-[0_0_15px_rgba(255,67,133,0.25)]">
                  <StatIcon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                    {String(title)}
                  </h3>
                  <p className="mt-0.5 text-xs text-white/65">{String(copy)}</p>
                  {hasStars && (
                    <span className="text-xs tracking-widest text-[#ffd800] mt-0.5 block">
                      ★★★★★
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Glam Services */}
      <section id="services" className="mx-auto max-w-[1370px] px-5 py-14 sm:py-20">
        <SectionTitle
          eyebrow="Our Glam Services"
          title="Looks for every moment. Perfect for every you."
        />
        
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(
            ({ name, copy, price, image: src, icon: ServiceIcon }) => (
              <article
                key={name}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#ff397f]/40 bg-[#080816] transition-all duration-300 hover:-translate-y-1.5 hover:border-[#ff397f] hover:shadow-[0_10px_35px_rgba(255,45,119,0.3)]"
              >
                <div>
                  <div className="aspect-[1.3/1] overflow-hidden relative">
                    <img
                      src={image(src)}
                      alt={name}
                      className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-108"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080816] via-transparent to-transparent opacity-80" />
                    <span className="absolute top-3 right-3 rounded-full border border-[#ff4385]/50 bg-black/60 px-3 py-1 text-[11px] font-bold text-[#ff7fa8] backdrop-blur-md">
                      {price}
                    </span>
                  </div>
                  
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-[#ff4385]">
                      <ServiceIcon className="h-5 w-5" strokeWidth={1.75} />
                      <h3 className="blush-serif text-xl uppercase tracking-wide text-[#ff689d]">
                        {name}
                      </h3>
                    </div>
                    <p className="mt-2.5 text-xs sm:text-sm leading-6 text-white/70">
                      {copy}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <Button
                    href="#book"
                    outline
                    className="w-full py-2.5 text-[11px] min-h-10 justify-between"
                  >
                    <span>Book Service</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </article>
            ),
          )}
        </div>
      </section>

      {/* Signature Looks / Editorial Banner */}
      <section id="gallery" className="mx-auto max-w-[1370px] px-5 pb-14 sm:pb-20">
        <div className="group relative grid overflow-hidden rounded-2xl border border-[#ff397f]/60 bg-[#070714] shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_25px_rgba(255,38,112,0.15)] md:grid-cols-[0.88fr_2.12fr]">
          <div className="relative flex min-h-72 flex-col justify-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(255,48,119,0.2),transparent_48%)] p-8 sm:p-10">
            <Sparkles
              className="absolute -right-6 -top-6 h-32 w-32 text-[#ff4385]/10"
              strokeWidth={1}
            />
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#ff4385]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff4385]">
                Signature Looks
              </p>
            </div>
            
            <h2 className="blush-serif mt-4 text-3xl sm:text-4xl lg:text-5xl leading-[0.96]">
              Your Look.
              <br />
              <span className="text-[#ff8aaf]">Our Artistry.</span>
            </h2>
            
            <p className="mt-4 text-xs sm:text-sm leading-6 text-white/65">
              Precision skin matching, long-wearing setting techniques, and bold custom color tailored specifically to your facial structure and event lighting.
            </p>
            
            <Button
              href="#book"
              className="mt-6 w-fit min-h-10 px-6 py-2.5"
            >
              Reserve Experience <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="relative min-h-64 sm:min-h-80 md:min-h-[360px] overflow-hidden">
            <img
              src={image("banner.webp")}
              alt="Signature Blush makeup looks"
              className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070714]/60 via-transparent to-transparent" />
            <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/45 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.16em] text-white/90 backdrop-blur-md">
              The Blush Edit · NYC
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section
        id="about"
        className="mx-auto grid max-w-[1370px] gap-10 px-5 pb-14 sm:pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center"
      >
        <div className="relative group overflow-hidden rounded-2xl border border-[#ff397f]/60 shadow-[0_15px_40px_rgba(255,45,119,0.18)]">
          <img
            src={image("interior.webp")}
            alt="Blush Beauty Bar neon studio interior"
            className="min-h-[380px] w-full object-cover transition duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/15 bg-black/60 p-4 backdrop-blur-md">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff689d] block">
              SoHo Studio Atmosphere
            </span>
            <span className="text-xs text-white/90 font-medium">
              Vibrant music, complimentary prosecco & high-vibe glam stations.
            </span>
          </div>
        </div>

        <div className="lg:pl-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#ff4385]/30 bg-[#ff4385]/10 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff689d]">
            <span>About Us</span>
          </div>
          
          <h2 className="blush-serif mt-4 text-3xl sm:text-4xl lg:text-5xl uppercase leading-tight">
            More Than Makeup.
            <br />
            It’s <span className="text-[#ff4385]">An Experience.</span>
          </h2>
          
          <p className="mt-5 text-sm sm:text-base leading-7 text-white/70">
            Blush Beauty Bar was founded on a simple belief: getting ready should be the highlight of your night. Our modern SoHo studio pairs celebrity-grade artistry with a warm, celebratory atmosphere where every client feels iconic.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 text-xs text-white/80">
            {[
              "Sanitized Pro Brushes",
              "Cruelty-Free Kits",
              "Custom Color Blending",
              "All Skin Tones Welcome",
            ].map((perk) => (
              <div key={perk} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#ff4385] shrink-0" />
                <span>{perk}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
            <Button href="#book">
              Book Studio Visit
            </Button>
            <Button href="#artists" outline>
              Meet Artists
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="mx-auto max-w-[1370px] px-5 pb-14 sm:pb-20">
        <SectionTitle
          eyebrow="The Blush Standard"
          title="Why Clients Choose Blush Beauty Bar"
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {features.map(({ title, copy, icon: FeatureIcon }) => (
            <div
              key={title}
              className="flex flex-col justify-between rounded-2xl border border-[#ff397f]/30 bg-[#080816]/90 p-5 shadow-sm transition-all duration-300 hover:border-[#ff397f] hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(255,45,119,0.15)]"
            >
              <div>
                <div className="mb-4 inline-grid h-10 w-10 place-items-center rounded-xl border border-[#ff4385]/40 bg-[#ff4385]/10 text-[#ff4385]">
                  <FeatureIcon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#ff689d]">
                  {title}
                </h3>
                <p className="mt-2 text-xs leading-5 text-white/65">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Meet Our Artists */}
      <section id="artists" className="mx-auto max-w-[1240px] px-5 pb-14 sm:pb-20">
        <SectionTitle
          eyebrow="The Talent"
          title="Meet Our Master Glam Artists"
        />

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {artists.map((artist) => (
            <article
              key={artist.name}
              className="group grid overflow-hidden rounded-2xl border border-[#ff397f]/50 bg-[#080816] sm:grid-cols-[0.9fr_1.1fr] transition-all duration-300 hover:border-[#ff397f] hover:shadow-[0_15px_40px_rgba(255,45,119,0.25)]"
            >
              <div className="min-h-60 overflow-hidden relative">
                <img
                  src={image(artist.image)}
                  alt={`${artist.name}, ${artist.role}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080816] via-transparent to-transparent sm:hidden" />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-7">
                <div>
                  <h3 className="blush-serif text-2xl sm:text-3xl uppercase text-white">
                    {artist.name}
                  </h3>
                  <p className="blush-script mt-1 text-2xl text-[#ff4385]">
                    {artist.role}
                  </p>
                  <p className="mt-3 text-xs sm:text-sm leading-6 text-white/70">
                    {artist.copy}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                  <span className="text-[11px] uppercase tracking-wider text-[#ff80a6] font-bold">
                    Available for Bookings
                  </span>
                  <div className="flex gap-2.5 text-[#ff4385]">
                    <a
                      href="#gallery"
                      aria-label={`${artist.name} portfolio`}
                      className="grid h-8 w-8 place-items-center rounded-full border border-[#ff4385]/40 bg-[#ff4385]/10 transition hover:bg-[#ff4385] hover:text-white"
                    >
                      <Camera className="h-4 w-4" />
                    </a>
                    <a
                      href="#contact"
                      aria-label={`Email ${artist.name}`}
                      className="grid h-8 w-8 place-items-center rounded-full border border-[#ff4385]/40 bg-[#ff4385]/10 transition hover:bg-[#ff4385] hover:text-white"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Client Love / Reviews */}
      <section id="blog" className="mx-auto max-w-[1370px] px-5 pb-14 sm:pb-20">
        <SectionTitle
          eyebrow="Real Client Love"
          title="Unforgettable Nights Start Here"
        />

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map(([quote, name, role]) => (
            <blockquote
              key={name}
              className="flex flex-col justify-between rounded-2xl border border-[#ff397f]/40 bg-[#080816]/90 p-7 transition-all duration-300 hover:border-[#ff397f] hover:-translate-y-1 hover:shadow-[0_12px_35px_rgba(255,45,119,0.18)]"
            >
              <div>
                <span className="blush-serif text-5xl leading-none text-[#ff4385] block -mb-4">
                  “
                </span>
                <p className="text-xs sm:text-sm leading-6 text-white/80 italic">
                  {quote}
                </p>
              </div>

              <footer className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ffb3c9] block">
                    {name}
                  </span>
                  <span className="text-[10px] text-white/50">{role}</span>
                </div>
                <span className="text-xs tracking-widest text-[#ffd800]">
                  ★★★★★
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* VIP Booking Callout */}
      <section id="book" className="mx-auto max-w-[1370px] px-5 pb-14 sm:pb-20">
        <div className="relative overflow-hidden rounded-2xl border border-[#ff397f]/75 shadow-[0_20px_50px_rgba(255,41,113,0.25)]">
          <img
            src={image("product-banner.webp")}
            alt="Professional makeup brushes kit"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050512]/95 via-[#090616]/80 to-[#180313]/60" />
          
          <div className="relative flex min-h-52 flex-col items-start justify-between gap-8 p-8 sm:p-12 lg:flex-row lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-[#ff4385]/40 bg-[#ff4385]/15 px-3.5 py-1 text-[11px] font-bold uppercase tracking-[0.2em] text-[#ff7fa8] mb-3">
                <Calendar className="h-3 w-3" />
                <span>Online Booking Open</span>
              </span>
              <h2 className="blush-serif text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white">
                Your Night. Your Moment.
              </h2>
              <p className="blush-script mt-1 text-3xl sm:text-4xl text-[#ff4385] drop-shadow-[0_0_10px_#ff2670]">
                We Make It Iconic.
              </p>
              <p className="mt-2 text-xs sm:text-sm text-white/70 max-w-md">
                Reserve your appointment now to lock in your preferred artist and celebration time.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full lg:w-auto">
              <Button href="#contact" className="px-8 py-3.5 text-center justify-center">
                Book Your Appointment <Sparkles className="h-4 w-4" />
              </Button>
              <a
                href="tel:555-794-4526"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/30 bg-black/40 px-6 py-3 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-white/10"
              >
                Call Studio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Beauty Essentials Shop */}
      <section id="shop" className="mx-auto max-w-[1240px] px-5 pb-14 sm:pb-20">
        <SectionTitle
          eyebrow="Beauty Essentials"
          title="Pro Products to Glow, Set & Go"
        />

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {products.map(({ file, name, price, desc }) => {
            const isAdded = addedItem === name;
            return (
              <article
                key={name}
                className="group flex flex-col justify-between overflow-hidden rounded-2xl border border-[#ff397f]/40 bg-[#080816] transition-all duration-300 hover:border-[#ff397f] hover:shadow-[0_10px_30px_rgba(255,45,119,0.25)]"
              >
                <div>
                  <div className="aspect-[1.3/1] overflow-hidden relative">
                    <img
                      src={image(file)}
                      alt={name}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-108"
                    />
                    <div className="absolute top-2.5 right-2.5 rounded-full border border-[#ff4385]/50 bg-black/60 px-2.5 py-0.5 text-[11px] font-bold text-[#ff8db2] backdrop-blur-md">
                      {price}
                    </div>
                  </div>

                  <div className="p-4 sm:p-5">
                    <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wide text-white">
                      {name}
                    </h3>
                    <p className="mt-1 text-[11px] sm:text-xs text-white/60 leading-4">
                      {desc}
                    </p>
                  </div>
                </div>

                <div className="p-4 sm:p-5 pt-0">
                  <button
                    type="button"
                    onClick={() => handleAddToCart(name)}
                    className={`flex w-full items-center justify-center gap-2 rounded-full py-2.5 text-xs font-bold uppercase tracking-wider transition-all duration-300 active:scale-95 ${
                      isAdded
                        ? "bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                        : "border border-[#ff397f] text-[#ff4385] hover:bg-[#ff397f] hover:text-white"
                    }`}
                  >
                    {isAdded ? (
                      <>
                        <Check className="h-4 w-4" /> Added to Bag
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="h-3.5 w-3.5" /> Add to Bag
                      </>
                    )}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="border-t border-[#ff397f]/60 bg-[#04040d] px-6 py-12"
      >
        <div className="mx-auto grid max-w-[1370px] gap-10 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_1.3fr_1.1fr]">
          <div>
            <span className="blush-script block -rotate-3 text-4xl text-[#ff4d8d] drop-shadow-[0_0_8px_rgba(255,55,128,0.9)]">
              Blush
            </span>
            <span className="mt-1 block text-[10px] font-bold uppercase tracking-[0.32em] text-white/80">
              Beauty Bar · SoHo
            </span>
            <p className="mt-4 text-xs leading-6 text-white/60 max-w-xs">
              NYC’s premier glam destination. Step inside, sip, glow, and walk out looking iconic.
            </p>
            <div className="mt-5 flex gap-2.5 text-[#ff4385]">
              {[Camera, Music2, UsersRound, Pin, CirclePlay].map((IconComp, idx) => (
                <a
                  key={idx}
                  href="#contact"
                  aria-label="Social link"
                  className="grid h-8 w-8 place-items-center rounded-full border border-[#ff4385]/40 bg-[#ff4385]/10 transition hover:bg-[#ff4385] hover:text-white"
                >
                  <IconComp className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <img
              src={image("goodvibes.webp")}
              alt="Good Vibes Only Neon Sign"
              className="h-28 w-28 object-contain drop-shadow-[0_0_12px_rgba(255,45,119,0.75)] hover:scale-105 transition duration-300"
            />
            <span className="mt-3 text-[11px] font-bold uppercase tracking-widest text-[#ff689d]">
              Good Vibes Only
            </span>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff4385]">
              Glam Gallery · @BlushBeautyBar
            </h3>
            <div className="mt-4 grid grid-cols-4 gap-2">
              {[
                "modal01.webp",
                "modal02.webp",
                "modal03.webp",
                "modal04.webp",
              ].map((src) => (
                <a
                  key={src}
                  href="#gallery"
                  className="group aspect-square overflow-hidden rounded-lg border border-white/10"
                >
                  <img
                    src={image(src)}
                    alt="Blush glam gallery client"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-115"
                  />
                </a>
              ))}
            </div>
            <p className="mt-3 text-[11px] text-white/50">Tag #BlushGlamNYC to be featured</p>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff4385]">
              Stay In The Glow
            </h3>
            <p className="mt-2 text-xs leading-5 text-white/60">
              Subscribe for VIP flash booking alerts, pro glam tips & seasonal discounts.
            </p>
            <form
              onSubmit={(event) => {
                event.preventDefault();
                alert("Thank you for subscribing to Blush VIP alerts!");
              }}
              className="mt-4 flex"
            >
              <label htmlFor="blush-email" className="sr-only">
                Email address
              </label>
              <input
                id="blush-email"
                type="email"
                required
                placeholder="Enter your email"
                className="min-w-0 flex-1 rounded-l-full border border-r-0 border-[#ff397f]/50 bg-[#080816] px-4 py-2.5 text-xs outline-none focus:border-[#ff397f] text-white placeholder-white/40"
              />
              <button
                type="submit"
                className="rounded-r-full bg-[#ff397f] px-5 text-xs font-bold text-white transition hover:bg-[#ff1f6d]"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-[1370px] flex-col justify-between gap-3 border-t border-[#ff397f]/25 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© 2026 Blush Beauty Bar NYC. All rights reserved.</p>
          <p className="flex gap-4">
            <a href="#home" className="hover:text-white">Privacy</a>
            <a href="#home" className="hover:text-white">Terms</a>
            <a href="#home" className="hover:text-white">Cancellations</a>
          </p>
          <p>Confidence. Beauty. Iconic.</p>
        </div>
      </footer>
    </main>
  );
}
