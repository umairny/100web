import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import {
  BadgeCheck,
  CalendarDays,
  Camera,
  CircleDot,
  Gem,
  Heart,
  Mail,
  MapPin,
  Music2,
  Paintbrush,
  Phone,
  Pin,
  Scissors,
  ShoppingBag,
  Sparkles,
  Wind,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

const glowImages = import.meta.glob(
  "../../assets/optimized/beauty/glowhaus/*.webp",
  {
    eager: true,
    query: "?url",
    import: "default",
  },
) as Record<string, string>;

const image = (name: string) =>
  glowImages[`../../assets/optimized/beauty/glowhaus/${name}`];

const navItems = [
  "Home",
  "Services",
  "About",
  "Gallery",
  "Stylists",
  "Products",
  "Contact",
];

const services = [
  {
    name: "Haircuts",
    copy: "Precision cuts tailored to you",
    image: "haircut.webp",
    icon: "scissors",
  },
  {
    name: "Color",
    copy: "Dimensional color that glows",
    image: "color.webp",
    icon: "diamond",
  },
  {
    name: "Styling",
    copy: "Curls, waves & event styling",
    image: "styling.webp",
    icon: "brush",
  },
  {
    name: "Gloss & Treatments",
    copy: "Shine, tone & healthy hair",
    image: "glosstreatment.webp",
    icon: "sparkle",
  },
  {
    name: "Blowouts",
    copy: "Smooth, voluminous and camera-ready",
    image: "blowout.webp",
    icon: "dryer",
  },
  {
    name: "Bridal & Events",
    copy: "Beautiful hair for your big moments",
    image: "bridalevent.webp",
    icon: "ring",
  },
];

const stylists = [
  { name: "Mia Rose", role: "Senior Stylist", image: "mia.webp" },
  { name: "Lena Harper", role: "Color Specialist", image: "lena.webp" },
  { name: "Jade Collins", role: "Stylist", image: "jade.webp" },
  { name: "Tori Blake", role: "Blowout Expert", image: "tori.webp" },
];

const products = [
  { name: "Hydrate & Shine", copy: "Deep moisture", image: "hydrate.webp" },
  {
    name: "Repair & Strengthen",
    copy: "Stronger, healthier hair",
    image: "repair.webp",
  },
  {
    name: "Smoothing Collection",
    copy: "Frizz control & softness",
    image: "smooth.webp",
  },
  {
    name: "Volume Collection",
    copy: "Lift, body & bounce",
    image: "volume.webp",
  },
  {
    name: "Styling Essentials",
    copy: "Finish your look",
    image: "styling.webp",
  },
];

const testimonials = [
  [
    "“My color is stunning and my hair has never felt healthier. GlowHaus is my happy place!”",
    "Sarah M.",
  ],
  ["“Such a beautiful salon and the best blowout I’ve ever had.”", "Amanda L."],
  [
    "“Professional, friendly, and always on-trend. I recommend them to everyone!”",
    "Nicole T.",
  ],
];

function Icon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const icons: Record<string, LucideIcon> = {
    scissors: Scissors,
    diamond: Gem,
    brush: Paintbrush,
    sparkle: Sparkles,
    dryer: Wind,
    ring: CircleDot,
    check: BadgeCheck,
    heart: Heart,
    calendar: CalendarDays,
    bag: ShoppingBag,
  };
  const Component = icons[name] ?? Sparkles;
  return (
    <Component aria-hidden="true" className={className} strokeWidth={1.45} />
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center justify-center gap-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#282222]">
      <span className="h-px w-10 bg-[#d7ad9d]" />
      {children}
      <span className="h-px w-10 bg-[#d7ad9d]" />
    </div>
  );
}

function smoothScrollToId(sectionId: string) {
  const section = document.getElementById(sectionId);
  if (!section) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  const sectionTop = section.getBoundingClientRect().top + window.scrollY - 73;
  window.scrollTo({
    top: Math.max(0, sectionTop),
    behavior: prefersReducedMotion ? "auto" : "smooth",
  });
  window.history.replaceState(null, "", `#${sectionId}`);
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
      smoothScrollToId(href.slice(1));
    }
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-[4px] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.08em] transition duration-300 hover:-translate-y-0.5 ${outline ? "border border-[#c98e85] bg-transparent text-[#8e4d4f] hover:bg-[#fff8f4]" : "bg-[#ad5e68] text-white shadow-lg shadow-[#ad5e68]/15 hover:bg-[#914a54] hover:shadow-xl"} ${className}`}
    >
      {children}
    </a>
  );
}

export function GlowHausSalon() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrame = 0;

    const updateNavigation = () => {
      const scrollTop = window.scrollY;
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      // 1. If at or near bottom of page -> contact
      if (scrollableHeight > 0 && scrollTop >= scrollableHeight - 60) {
        setActiveSection("contact");
        setIsScrolled(true);
        setScrollProgress(100);
        return;
      }

      // 2. If at or near top of page -> home
      if (scrollTop < 120) {
        setActiveSection("home");
        setIsScrolled(false);
        setScrollProgress(0);
        return;
      }

      // Sections in physical DOM order
      const sections = [
        { id: "home", navId: "home" },
        { id: "services", navId: "services" },
        { id: "about", navId: "about" },
        { id: "gallery", navId: "gallery" },
        { id: "stylists", navId: "stylists" },
        { id: "book", navId: "stylists" },
        { id: "products", navId: "products" },
        { id: "contact", navId: "contact" },
      ];

      const marker = Math.min(240, Math.max(120, window.innerHeight * 0.28));

      let current = "home";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= marker) {
            current = section.navId;
          }
        }
      }

      setActiveSection(current);
      setIsScrolled(scrollTop > 15);
      setScrollProgress(
        scrollableHeight > 0
          ? Math.min(100, (scrollTop / scrollableHeight) * 100)
          : 0,
      );
    };

    const requestNavigationUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateNavigation);
    };

    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (hash === "book") {
        setActiveSection("stylists");
      } else if (hash && ["home", "services", "about", "gallery", "stylists", "products", "contact"].includes(hash)) {
        setActiveSection(hash);
      }
    };

    updateNavigation();
    window.addEventListener("scroll", requestNavigationUpdate, {
      passive: true,
    });
    window.addEventListener("resize", requestNavigationUpdate);
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestNavigationUpdate);
      window.removeEventListener("resize", requestNavigationUpdate);
      window.removeEventListener("hashchange", handleHashChange);
    };
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

  useEffect(() => {
    if (!menuOpen) return;

    const closeMenu = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", closeMenu);
    return () => window.removeEventListener("keydown", closeMenu);
  }, [menuOpen]);

  const scrollToSection = (
    event: MouseEvent<HTMLAnchorElement> | undefined,
    sectionId: string,
  ) => {
    const section = document.getElementById(sectionId);
    if (!section) return;

    event?.preventDefault();
    setMenuOpen(false);
    setActiveSection(sectionId);
    smoothScrollToId(sectionId);
  };

  return (
    <main className="glowhaus-site bg-[#fffaf6] text-[#272020] [font-family:Arial,sans-serif] pt-[74px] w-full max-w-full overflow-x-hidden">
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full max-w-full border-b bg-[#fffaf6]/95 backdrop-blur-xl transition-all duration-300 ${
          isScrolled
            ? "border-[#dec9c0] shadow-[0_10px_35px_rgba(73,45,36,0.10)]"
            : "border-[#eadfd8]"
        }`}
      >
        <div className="mx-auto flex h-[74px] max-w-[1320px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#home"
            onClick={(event) => scrollToSection(event, "home")}
            className="leading-none transition-opacity hover:opacity-75 select-none"
            aria-label="GlowHaus Salon home"
          >
            <span className="glowhaus-serif block text-[28px] sm:text-[32px] tracking-[-0.05em] text-[#272020]">
              GlowHaus<span className="text-[#ad5e68]">.</span>
            </span>
            <span className="block text-center text-[8.5px] uppercase tracking-[0.45em] text-[#857570]">
              Salon
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-7 xl:gap-8 lg:flex">
            {navItems.map((item) => {
              const sectionId = item.toLowerCase();
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item}
                  href={`#${sectionId}`}
                  onClick={(event) => scrollToSection(event, sectionId)}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative border-b py-2 text-[10.5px] font-semibold uppercase tracking-[0.08em] transition duration-300 hover:text-[#ae5e68] ${
                    isActive
                      ? "active border-[#ae5e68] text-[#ae5e68] font-bold"
                      : "border-transparent text-[#5c504c]"
                  }`}
                >
                  {item}
                  <span
                    className={`absolute inset-x-0 -bottom-px h-[2px] bg-[#ae5e68] transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            {/* Quick Hours Pill on large screens */}
            <div className="hidden xl:flex items-center gap-1.5 rounded-full border border-[#eadfd8] bg-[#fbf5f0] px-3 py-1 text-[10px] font-semibold text-[#6e5d57]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ad5e68] animate-pulse" />
              <span>Tue–Sat 9 AM–7 PM</span>
            </div>

            {/* Book Now Button (Desktop Only) */}
            <Button
              href="#book"
              onClick={(e) => scrollToSection(e, "book")}
              className="hidden lg:inline-flex min-w-28 lg:min-w-32"
            >
              Book Now
            </Button>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMenuOpen((value) => !value)}
              className={`grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full border transition duration-300 lg:hidden shadow-xs active:scale-95 ${
                menuOpen
                  ? "border-[#ad5e68] bg-[#ad5e68] text-white"
                  : "border-[#e0c8bf] bg-white/80 text-[#3a302c] hover:border-[#ad5e68] hover:text-[#ad5e68]"
              }`}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              aria-controls="glowhaus-mobile-menu"
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
        </div>

        {/* Scroll Progress Bar */}
        <span
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-[2px] bg-[#ad5e68] transition-[width] duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </header>

      {/* Mobile Drawer Navigation & Backdrop */}
      {menuOpen && (
        <>
          {/* Dimmer Backdrop */}
          <div
            className="fixed inset-0 top-[74px] z-40 bg-black/40 backdrop-blur-xs lg:hidden"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-down Sheet */}
          <nav
            id="glowhaus-mobile-menu"
            className="fixed inset-x-0 top-[74px] z-50 w-full max-w-full max-h-[calc(100dvh-74px)] overflow-y-auto overflow-x-hidden border-b border-[#eadfd8] bg-[#fffaf6]/98 px-5 py-4 shadow-2xl backdrop-blur-2xl lg:hidden"
          >
            {/* Salon Status Pill in Drawer */}
            <div className="mb-3 flex items-center justify-between rounded-xl border border-[#eaded7] bg-[#fbf5f0] px-3.5 py-2 text-xs">
              <span className="flex items-center gap-2 font-bold text-[#ad5e68]">
                <span className="h-2 w-2 rounded-full bg-[#ad5e68] animate-pulse" />
                Salon Open This Week
              </span>
              <span className="text-[11px] font-medium text-[#7d6c66]">
                SoHo, New York
              </span>
            </div>

            <div className="space-y-1">
              {navItems.map((item) => {
                const sectionId = item.toLowerCase();
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item}
                    href={`#${sectionId}`}
                    onClick={(event) => scrollToSection(event, sectionId)}
                    aria-current={isActive ? "location" : undefined}
                    className={`flex items-center justify-between rounded-xl px-4 py-3 text-xs font-bold uppercase tracking-wider transition ${
                      isActive
                        ? "active bg-[#f7e9e5] text-[#a8525e] shadow-xs"
                        : "text-[#3a302c] hover:bg-[#fbf1ed] hover:text-[#a8525e]"
                    }`}
                  >
                    <span>{item}</span>
                    <span className="text-xs text-[#ad5e68]">→</span>
                  </a>
                );
              })}
            </div>

            {/* Quick Contact Card */}
            <div className="mt-4 rounded-2xl border border-[#eadfd8] bg-white/90 p-4 shadow-sm">
              <div className="grid grid-cols-2 gap-2 text-xs text-[#6e5d57] border-b border-[#f0e4dc] pb-3 mb-3">
                <div>
                  <span className="font-bold uppercase tracking-wider text-[#ad5e68] block">Hours</span>
                  <span>Tue–Sat 9am–7pm</span>
                </div>
                <div>
                  <span className="font-bold uppercase tracking-wider text-[#ad5e68] block">Location</span>
                  <span>SoHo · New York</span>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <Button
                  href="#book"
                  onClick={(e) => {
                    setMenuOpen(false);
                    scrollToSection(e, "book");
                  }}
                  className="w-full text-center"
                >
                  Book Your Appointment
                </Button>
                <a
                  href="tel:555-392-4569"
                  className="flex items-center justify-center rounded-full border border-[#dec9c0] py-2.5 text-xs font-bold text-[#ad5e68] hover:bg-[#fff7f4] transition"
                >
                  Call: (555) 392-4569
                </a>
              </div>
            </div>
          </nav>
        </>
      )}

      <section id="home" className="overflow-hidden bg-[#f7eee8]">
        <div className="mx-auto grid min-h-[500px] max-w-[1440px] lg:grid-cols-[1.03fr_1fr]">
          <div className="relative z-10 flex items-center px-6 py-16 sm:px-10 lg:px-16 xl:pl-24">
            <div className="max-w-[650px]">
              <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.17em] text-[#a75561]">
                Confidence. Beauty. You.
              </p>
              <h1 className="glowhaus-serif text-[50px] leading-[0.98] tracking-[-0.035em] sm:text-[64px] xl:text-[72px]">
                Your best hair
                <br />
                starts at{" "}
                <em className="font-normal text-[#ad5e68]">GlowHaus.</em>
              </h1>
              <p className="mt-5 max-w-lg text-[15px] leading-7 text-[#4d4440]">
                Stylish cuts, soft color, and polished looks designed to make
                you camera-ready.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button>
                  Book your appointment <span>›</span>
                </Button>
                <Button href="#services" outline>
                  Explore services
                </Button>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="flex -space-x-2">
                  {["mia.webp", "lena.webp", "jade.webp", "tori.webp"].map(
                    (src) => (
                      <img
                        key={src}
                        src={image(src)}
                        alt="Happy GlowHaus client"
                        className="h-9 w-9 rounded-full border-2 border-white object-cover object-top"
                      />
                    ),
                  )}
                </div>
                <div>
                  <div className="text-sm tracking-[0.12em] text-[#da9a48]">
                    ★★★★★
                  </div>
                  <p className="text-[10px] text-[#4d4440]">
                    Loved by 500+ clients
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative min-h-[430px] lg:min-h-0">
            <img
              src={image("hero.webp")}
              alt="Client with glossy dimensional blonde hair at GlowHaus Salon"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#f7eee8]/35 via-transparent to-transparent lg:from-[#f7eee8]/20" />
          </div>
        </div>
      </section>

      <section
        id="services"
        className="relative z-10 mx-auto -mt-px max-w-[1320px] rounded-t-2xl bg-white px-5 py-8 shadow-[0_-8px_40px_rgba(75,46,38,0.06)] lg:px-8"
      >
        <SectionLabel>Our Services</SectionLabel>
        <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {services.map((service) => (
            <article
              key={service.name}
              className="group overflow-hidden rounded-lg border border-[#eaded7] bg-[#fffaf7] transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#7e5144]/10"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image(service.image)}
                  alt={service.name}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative px-3 pb-5 pt-7 text-center">
                <span className="absolute left-1/2 top-0 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-[#e0ada8] bg-[#fff9f6] text-[#bd7375]">
                  <Icon name={service.icon} className="h-5 w-5" />
                </span>
                <h3 className="text-[11px] font-bold uppercase">
                  {service.name}
                </h3>
                <p className="mx-auto mt-2 max-w-[140px] text-[11px] leading-4 text-[#5d514d]">
                  {service.copy}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="mx-auto max-w-[1320px] overflow-hidden bg-[#fdf8f4]"
      >
        <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
          <img
            src={image("interior.webp")}
            alt="GlowHaus luxury salon interior"
            className="h-full min-h-[390px] w-full object-cover"
          />
          <div className="flex items-center px-6 py-12 md:px-12 lg:px-16">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a75561]">
                About GlowHaus
              </p>
              <h2 className="glowhaus-serif mt-2 text-4xl leading-none md:text-5xl">
                Where luxury meets
                <br />
                artistry.
              </h2>
              <p className="mt-5 max-w-2xl text-[13px] leading-6 text-[#524844]">
                At GlowHaus Salon, we believe great hair is personal. Our
                talented team combines modern technique with a luxury experience
                to help you look and feel your most confident—every single day.
              </p>
              <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
                {[
                  ["heart", "Expert Stylists", "Trained & passionate"],
                  ["bag", "Premium Products", "Only the best"],
                  ["sparkle", "Modern Techniques", "Always evolving"],
                  ["check", "Personalized Care", "You, always"],
                ].map(([icon, title, copy]) => (
                  <div key={title}>
                    <Icon name={icon} className="mb-3 h-7 w-7 text-[#c47578]" />
                    <h3 className="text-[11px] font-bold">{title}</h3>
                    <p className="mt-1 text-[9px] text-[#655954]">{copy}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="mx-auto max-w-[1320px] bg-white px-5 py-8 lg:px-8"
      >
        <SectionLabel>Transformations</SectionLabel>
        <div className="mt-5 overflow-hidden rounded-lg">
          <img
            src={image("gallery.webp")}
            alt="Six GlowHaus hair color and styling transformations"
            className="w-full"
          />
        </div>
        <div className="mt-3 text-center">
          <Button outline className="min-h-8 px-7 py-2">
            View full gallery
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-[1320px] bg-[#f9f3ef] px-6 py-7">
        <h2 className="text-center text-[12px] font-bold uppercase tracking-[0.2em]">
          The GlowHaus Experience
        </h2>
        <div className="mt-6 grid grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-5">
          {[
            [
              "heart",
              "Luxury Environment",
              "Relaxing, beautiful and welcoming",
            ],
            ["check", "Complimentary Consultations", "Personalized for you"],
            ["sparkle", "On-Trend Looks", "Modern styles you’ll love"],
            ["bag", "Care That Lasts", "Education & support beyond your visit"],
            ["sparkle", "Five-Star Experience", "Our clients love what we do"],
          ].map(([icon, title, copy]) => (
            <div key={title} className="flex gap-3">
              <Icon name={icon} className="h-8 w-8 shrink-0 text-[#c67576]" />
              <div>
                <h3 className="text-[10px] font-bold">{title}</h3>
                <p className="mt-1 text-[9px] leading-4 text-[#5f5450]">
                  {copy}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="stylists"
        className="mx-auto grid max-w-[1320px] gap-7 bg-white px-5 py-9 lg:grid-cols-[1fr_1.15fr] lg:px-8"
      >
        <div>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.12em]">
              Meet Our Stylists
            </h2>
            <a
              href="#contact"
              className="text-[9px] font-bold uppercase tracking-wider text-[#ac5e68]"
            >
              View all
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stylists.map((stylist) => (
              <article key={stylist.name} className="group">
                <div className="aspect-[3/3.4] overflow-hidden rounded-lg">
                  <img
                    src={image(stylist.image)}
                    alt={`${stylist.name}, ${stylist.role}`}
                    className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-2 text-center text-[10px] font-bold">
                  {stylist.name}
                </h3>
                <p className="text-center text-[9px] text-[#655954]">
                  {stylist.role}
                </p>
              </article>
            ))}
          </div>
        </div>
        <div className="lg:border-l lg:border-[#e7d9d2] lg:pl-7">
          <h2 className="mb-4 text-[11px] font-bold uppercase tracking-[0.12em]">
            Client Love
          </h2>
          <div className="grid gap-3 sm:grid-cols-3">
            {testimonials.map(([quote, name]) => (
              <blockquote
                key={name}
                className="rounded-lg border border-[#e9d9d2] bg-[#fffaf7] p-5 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <span className="glowhaus-serif text-4xl leading-none text-[#e4aaa2]">
                  “
                </span>
                <p className="min-h-20 text-[10px] leading-4">{quote}</p>
                <footer className="mt-3 text-[10px] font-bold">— {name}</footer>
                <div className="mt-2 text-[10px] tracking-widest text-[#db9848]">
                  ★★★★★
                </div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="mx-auto max-w-[1320px] px-5 pb-9 lg:px-8">
        <div className="relative overflow-hidden rounded-xl bg-[#a85d66] px-6 py-8 text-white shadow-xl shadow-[#7d4349]/15 md:px-12">
          <div className="absolute inset-0 opacity-25 [background:radial-gradient(circle_at_15%_20%,white,transparent_30%),linear-gradient(120deg,transparent_40%,#ebc6c0)]" />
          <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
            <div className="flex items-center gap-5">
              <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-[#ad5e68]">
                <Icon name="calendar" />
              </span>
              <h2 className="glowhaus-serif text-3xl md:text-4xl">
                Your next hair moment
                <br />
                <em className="text-[#f2d7bf]">is just a click away.</em>
              </h2>
            </div>
            <div className="text-center">
              <Button
                outline
                className="border-white px-12 text-white hover:bg-white/10"
              >
                Book now
              </Button>
              <p className="mt-3 text-[10px] text-white/80">
                Appointments fill fast—book today!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="products"
        className="mx-auto max-w-[1320px] bg-white px-5 pb-10 lg:px-8"
      >
        <SectionLabel>Shop Our Favorites</SectionLabel>
        <div className="mt-5 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {products.map((product) => (
            <article
              key={product.name}
              className="group overflow-hidden rounded-lg bg-[#fcf8f5] text-center"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={image(product.image)}
                  alt={product.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="mt-3 text-[10px] font-bold">{product.name}</h3>
              <p className="mb-4 mt-1 text-[9px] text-[#655954]">
                {product.copy}
              </p>
            </article>
          ))}
          <article className="grid min-h-44 place-items-center rounded-lg border border-[#ddb4ab] bg-[#fffaf7] p-5 text-center">
            <div>
              <Icon name="bag" className="mx-auto h-8 w-8 text-[#c67576]" />
              <h3 className="glowhaus-serif mt-3 text-xl">
                Love your hair
                <br />
                at home.
              </h3>
              <Button outline className="mt-4 min-h-8 px-4 py-2">
                Shop all products
              </Button>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-[#fffaf6] pt-3">
        <div className="mb-4 text-center">
          <h2 className="text-[12px] font-bold uppercase tracking-[0.2em]">
            Follow The Glow
          </h2>
          <p className="mt-1 text-[9px] uppercase tracking-[0.18em] text-[#9f5760]">
            @GlowHausSalon
          </p>
        </div>
        <div className="grid grid-cols-3 gap-1 sm:grid-cols-5 lg:grid-cols-9">
          {[
            "interior01.webp",
            "haircut.webp",
            "color.webp",
            "interior.webp",
            "glosstreatment.webp",
            "blowout.webp",
            "products.webp",
            "bridalevent.webp",
            "hero.webp",
          ].map((src, index) => (
            <a
              href="#contact"
              key={`${src}-${index}`}
              className="group aspect-square overflow-hidden"
            >
              <img
                src={image(src)}
                alt="GlowHaus Instagram post"
                className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-90"
              />
            </a>
          ))}
        </div>
      </section>

      <footer id="contact" className="bg-[#292929] px-6 py-10 text-[#f8eee8]">
        <div className="mx-auto grid max-w-[1240px] gap-9 sm:grid-cols-2 lg:grid-cols-[1.2fr_1.1fr_1fr_0.8fr_1.35fr]">
          <div>
            <span className="glowhaus-serif block text-3xl">GlowHaus</span>
            <span className="block pl-8 text-[8px] uppercase tracking-[0.45em]">
              Salon
            </span>
            <p className="mt-5 max-w-48 text-[10px] leading-4 text-white/65">
              Modern hair. Luxury experience.
              <br />
              Confidence that glows.
            </p>
            <div className="mt-5 flex gap-2">
              <a
                href="#home"
                aria-label="Photo gallery"
                className="grid h-8 w-8 place-items-center rounded-full border border-white/30 transition hover:border-[#d9959b] hover:bg-[#ad5e68]"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href="#home"
                aria-label="Community"
                className="grid h-8 w-8 place-items-center rounded-full border border-white/30 transition hover:border-[#d9959b] hover:bg-[#ad5e68]"
              >
                <UsersRound className="h-4 w-4" />
              </a>
              <a
                href="#home"
                aria-label="Saved inspiration"
                className="grid h-8 w-8 place-items-center rounded-full border border-white/30 transition hover:border-[#d9959b] hover:bg-[#ad5e68]"
              >
                <Pin className="h-4 w-4" />
              </a>
              <a
                href="#home"
                aria-label="Short videos"
                className="grid h-8 w-8 place-items-center rounded-full border border-white/30 transition hover:border-[#d9959b] hover:bg-[#ad5e68]"
              >
                <Music2 className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-wider">
              Contact
            </h3>
            <div className="mt-4 space-y-3 text-[10px] text-white/70">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#d9959b]" />
                <span>
                  123 Glow Lane
                  <br />
                  Dallas, TX 75201
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#d9959b]" />
                (214) 555–0198
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#d9959b]" />
                hello@glowhaussalon.com
              </p>
            </div>
          </div>
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-wider">
              Hours
            </h3>
            <div className="mt-4 grid grid-cols-2 gap-x-4 text-[9px] leading-4 text-white/70">
              <span>
                Mon
                <br />
                Tue
                <br />
                Wed
                <br />
                Thu
                <br />
                Fri
                <br />
                Sat
                <br />
                Sun
              </span>
              <span>
                10am – 7pm
                <br />
                10am – 7pm
                <br />
                10am – 8pm
                <br />
                10am – 8pm
                <br />
                9am – 6pm
                <br />
                9am – 5pm
                <br />
                Closed
              </span>
            </div>
          </div>
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-wider">
              Quick Links
            </h3>
            <div className="mt-4 grid gap-1.5 text-[9px] text-white/70">
              {[
                "Services",
                "About",
                "Stylists",
                "Gallery",
                "Products",
                "Contact",
                "FAQ",
              ].map((item) => (
                <a
                  href={`#${item.toLowerCase()}`}
                  key={item}
                  className="hover:text-[#e6a7a8]"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-[9px] font-bold uppercase tracking-wider">
              Stay Glowing
            </h3>
            <p className="mt-4 text-[9px] leading-4 text-white/70">
              Sign up for updates, offers
              <br />
              and hair tips.
            </p>
            <form
              className="mt-4 flex"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="sr-only" htmlFor="glow-email">
                Email address
              </label>
              <input
                id="glow-email"
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-white px-3 py-2 text-[9px] text-[#292929] outline-none"
              />
              <button className="bg-[#ad5e68] px-4 text-[8px] font-bold uppercase">
                Subscribe
              </button>
            </form>
            <p className="mt-7 text-[8px] text-white/40">
              Privacy Policy &nbsp; | &nbsp; Terms of Service
            </p>
          </div>
        </div>
        <div className="mx-auto mt-8 max-w-[1240px] border-t border-white/10 pt-5 text-center text-[8px] text-white/35">
          © 2026 GlowHaus Salon. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
