import { useEffect, useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Calendar,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Heart,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";
import heroImage from "../../assets/optimized/beauty/pureglow/hero.webp";
import beautyImage from "../../assets/optimized/beauty/pureglow/bearty-banner.webp";
import interiorImage from "../../assets/optimized/beauty/pureglow/interior.webp";
import createLookImage from "../../assets/optimized/beauty/pureglow/createyourlook.webp";
import lipFillerImage from "../../assets/optimized/beauty/pureglow/lipfiller.webp";
import botoxImage from "../../assets/optimized/beauty/pureglow/botox.webp";
import hydrafacialImage from "../../assets/optimized/beauty/pureglow/hydrafacial.webp";
import skinBoosterImage from "../../assets/optimized/beauty/pureglow/skinbooster.webp";
import microneedleImage from "../../assets/optimized/beauty/pureglow/microneedle.webp";
import underEyeImage from "../../assets/optimized/beauty/pureglow/undereyefiller.webp";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Treatments", id: "treatments" },
  { label: "About Us", id: "about-us" },
  { label: "Results", id: "results" },
  { label: "Pricing", id: "pricing" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
];

const services = [
  {
    icon: "✣",
    title: "Injectables",
    text: "Botox, lip enhancement & dermal sculpting for natural harmony",
  },
  {
    icon: "◉",
    title: "Skin Glow Treatments",
    text: "Deep hydration, vitamin infusions & clinical brightening",
  },
  {
    icon: "✦",
    title: "Skin Rejuvenation",
    text: "Micro-droplet collagen stimulation for youthful elasticity",
  },
  {
    icon: "⌁",
    title: "PRP Therapy",
    text: "Harness natural plasma factors for accelerated regeneration",
  },
  {
    icon: "△",
    title: "Chemical Peels",
    text: "Gentle medical resurfacing for refined, crystal-clear texture",
  },
];

const treatments = [
  {
    title: "Lip Filler",
    subtitle: "Define & Enhance",
    price: "From $450",
    duration: "45 min",
    image: lipFillerImage,
  },
  {
    title: "Botox",
    subtitle: "Smooth Fine Lines",
    price: "From $380",
    duration: "30 min",
    image: botoxImage,
  },
  {
    title: "HydraFacial",
    subtitle: "Deep Cleanse & Hydrate",
    price: "From $275",
    duration: "60 min",
    image: hydrafacialImage,
  },
  {
    title: "Skin Booster",
    subtitle: "Hydrate & Revitalize",
    price: "From $550",
    duration: "45 min",
    image: skinBoosterImage,
  },
  {
    title: "Microneedling",
    subtitle: "Renew & Rejuvenate",
    price: "From $420",
    duration: "45 min",
    image: microneedleImage,
  },
  {
    title: "Under Eye Filler",
    subtitle: "Brighten & Refresh",
    price: "From $650",
    duration: "45 min",
    image: underEyeImage,
  },
];

const testimonials = [
  {
    quote:
      "PureGlow truly lives up to its name! My skin has never felt healthier or more radiant. The clinicians are incredibly thoughtful, taking time to explain every step so results look beautifully subtle.",
    name: "Sarah J.",
    treatment: "HydraFacial & Skin Booster",
  },
  {
    quote:
      "The finest aesthetic practice I’ve ever experienced. Natural results, an impeccably relaxing environment, and clinicians who genuinely care about enhancing your natural features without overfilling.",
    name: "Emily R.",
    treatment: "Subtle Lip Enhancement",
  },
  {
    quote:
      "I love how they focus on minimal, elegant aesthetics. People keep asking what skincare I use because the glow is so effortless and authentic. Highly recommend Dr. Bennett and her team!",
    name: "Jessica M.",
    treatment: "Baby Botox & Glow Peel",
  },
  {
    quote:
      "Every appointment feels luxurious and bespoke. From the warm herbal tea upon arrival to the gentle precision of the procedure, this is clinical skincare done to absolute perfection.",
    name: "Maya L.",
    treatment: "Microneedling Collagen Boost",
  },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`inline-flex flex-col leading-none select-none ${
        light ? "text-white" : "text-[#174d4a]"
      }`}
    >
      <span className="font-serif text-[1.75rem] tracking-[-0.04em] font-normal">
        Pure<span className="text-[#ef8d84] font-medium">Glow</span>
      </span>
      <span className="mt-1 text-center text-[0.58rem] font-bold uppercase tracking-[0.34em] text-[#8e6044]">
        Aesthetics
      </span>
    </span>
  );
}

function LeafSketch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 240"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M26 232C72 177 71 104 135 18M66 177c-23-1-40-14-47-37 24-2 43 9 47 37Zm22-42c25-3 42-18 49-42-25 1-43 15-49 42Zm18-47C89 76 84 59 91 42c18 10 24 27 15 46ZM50 196c-20-3-34-16-39-36 20 1 36 12 39 36Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

/**
 * Enhanced, prestigious circular seal for Pure Care P & G Real Results.
 * Features a rotating circular SVG engraving text ring, glassmorphic emerald background,
 * delicate gold/coral sparkle, and editorial monogram.
 */
function PureCareSeal({ className = "" }: { className?: string }) {
  return (
    <div
      className={`group relative grid select-none place-items-center rounded-full transition-transform duration-500 hover:scale-105 ${className}`}
      aria-label="Pure Care P&G Real Results Clinical Seal"
    >
      {/* Soft Ambient Glow Aura */}
      <div className="absolute -inset-2.5 rounded-full bg-gradient-to-tr from-[#174d4a]/35 via-[#ef8d84]/30 to-transparent blur-lg transition duration-500 group-hover:opacity-100" />

      {/* Main Circular Medallion */}
      <div className="relative flex h-32 w-32 sm:h-36 sm:w-36 lg:h-40 lg:w-40 flex-col items-center justify-center rounded-full border-2 border-white/90 bg-gradient-to-br from-[#1d5c56] via-[#164945] to-[#0f3431] p-3 text-center text-white shadow-[0_20px_45px_rgba(15,52,49,0.4)] ring-4 ring-[#ef8d84]/25 backdrop-blur-xl">
        {/* Rotating Circular Text Ring */}
        <svg
          viewBox="0 0 160 160"
          className="pointer-events-none absolute inset-0 h-full w-full animate-[spin_24s_linear_infinite]"
          aria-hidden="true"
        >
          <path
            id="pureCarePath"
            d="M 80, 80 m -61, 0 a 61,61 0 1,1 122,0 a 61,61 0 1,1 -122,0"
            fill="none"
          />
          <text
            className="text-[8.5px] font-bold uppercase tracking-[0.24em] fill-white/85"
          >
            <textPath href="#pureCarePath" startOffset="0%">
              PURE CARE • REAL RESULTS • PUREGLOW •
            </textPath>
          </text>
        </svg>

        {/* Inner Core Seal Container */}
        <div className="relative flex flex-col items-center justify-center rounded-full border border-white/20 bg-[#123e3b]/80 px-3.5 py-2.5 shadow-inner">
          {/* Top Sparkling Star Accent */}
          <span className="text-[10px] text-[#f7c29e] leading-none mb-0.5 animate-pulse">
            ✦
          </span>

          {/* Monogram P & G */}
          <div className="font-serif leading-none tracking-tight text-white flex items-center justify-center">
            <span className="text-2xl sm:text-3xl font-light">P</span>
            <span className="mx-0.5 text-base sm:text-lg font-serif italic text-[#f2a39d]">
              &
            </span>
            <span className="text-2xl sm:text-3xl font-light">G</span>
          </div>

          {/* Bottom Trust Tag */}
          <div className="mt-1 flex items-center gap-1 border-t border-white/20 pt-1">
            <span className="text-[7.5px] font-black uppercase tracking-[0.2em] text-[#efd2be]">
              Real Results
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function scrollToSectionId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const headerOffset = 76;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({
    top: Math.max(0, top),
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });
  window.history.replaceState(null, "", `#${id}`);
}

export function PureGlowAesthetics() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  // Interactive Booking Form State
  const [selectedTreatment, setSelectedTreatment] = useState("Lip Filler (From $450)");
  const [selectedClinician, setSelectedClinician] = useState("Dr. Claire Bennett (Medical Director)");
  const [appointmentDate, setAppointmentDate] = useState("Tomorrow");
  const [appointmentTime, setAppointmentTime] = useState("11:00 AM");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Scroll Spy Implementation
  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;

      // Bottom guard
      if (scrollable > 0 && scrollY >= scrollable - 70) {
        setActiveSection("contact");
        setScrolled(true);
        return;
      }

      // Top guard
      if (scrollY < 80) {
        setActiveSection("home");
        setScrolled(false);
        return;
      }

      const marker = Math.min(220, Math.max(100, window.innerHeight * 0.28));
      let current = "home";
      const sectionIds = navItems.map((n) => n.id);

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
      setScrolled(scrollY > 15);
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

  // Escape key closes mobile menu
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setMenuOpen(false);
    setActiveSection(id);
    scrollToSectionId(id);
  };

  const handlePreSelectTreatment = (treatmentTitle: string, price: string) => {
    setSelectedTreatment(`${treatmentTitle} (${price})`);
    scrollToSectionId("contact");
  };

  const visibleTestimonials = [0, 1, 2].map(
    (offset) => testimonials[(testimonialIndex + offset) % testimonials.length],
  );

  return (
    <main className="pureglow-site min-h-screen w-full max-w-full overflow-x-hidden bg-[#fffdfa] pt-[76px] text-[#143f3d] selection:bg-[#ef8d84] selection:text-white">
      {/* Top Fixed Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-[#efdcd2] bg-white/95 shadow-[0_8px_30px_rgba(20,63,61,.08)] backdrop-blur-xl"
            : "border-transparent bg-gradient-to-b from-white/90 via-white/60 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 lg:px-8">
          <a
            href="#home"
            onClick={(event) => handleNavClick(event, "home")}
            aria-label="PureGlow home"
            className="transition-opacity hover:opacity-90"
          >
            <Brand />
          </a>

          {/* Desktop Navigation */}
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => handleNavClick(event, item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-2 text-sm font-semibold transition after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-[#ed8d84] after:transition-transform ${
                    isActive
                      ? "active text-[#df756e] font-bold after:scale-x-100"
                      : "text-[#203d3b] after:scale-x-0 hover:text-[#ed8d84] hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop-Only Book Appointment CTA Container (Isolated from mobile) */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              onClick={(event) => handleNavClick(event, "contact")}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ef9b8f] to-[#ed7e79] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ef8d86]/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
            >
              <span>Book Appointment</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile Top Controls: Live Badge & Hamburger Toggle */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-[#efdcd2] bg-[#fff5f2] px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#d2756d]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ef8d84] animate-ping" />
              <span>Consultations Open</span>
            </span>

            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#eed6cb] bg-white text-[#174d4a] transition active:scale-95 shadow-sm hover:border-[#ed8d84]"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              aria-controls="pureglow-mobile-menu"
            >
              <span className="flex flex-col gap-1.5">
                <i
                  className={`h-0.5 w-5 bg-current transition-transform duration-300 ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <i
                  className={`h-0.5 w-5 bg-current transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <i
                  className={`h-0.5 w-5 bg-current transition-transform duration-300 ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Overlay */}
        {menuOpen && (
          <>
            {/* Backdrop Dimmer */}
            <div
              className="fixed inset-0 top-[76px] z-40 bg-black/45 backdrop-blur-xs lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />

            {/* Slide-Down Drawer */}
            <nav
              id="pureglow-mobile-menu"
              aria-label="Mobile navigation drawer"
              className="fixed inset-x-0 top-[76px] z-50 w-full max-w-full max-h-[calc(100dvh-76px)] overflow-y-auto overflow-x-hidden border-b border-[#efdcd2] bg-white/98 p-5 shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              {/* Clinic Status Pill */}
              <div className="mb-4 flex items-center justify-between rounded-xl border border-[#ef8d84]/30 bg-[#fff5f2] px-3.5 py-2 text-xs">
                <span className="flex items-center gap-2 font-bold text-[#d2756d]">
                  <span className="h-2 w-2 rounded-full bg-[#ef8d84] animate-pulse" />
                  Clinical Consultations Open
                </span>
                <span className="text-[11px] font-medium text-[#4f6461]">
                  NYC & Beverly Hills
                </span>
              </div>

              {/* Navigation Links with Active Class */}
              <div className="space-y-1">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      onClick={(event) => handleNavClick(event, item.id)}
                      href={`#${item.id}`}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-semibold transition ${
                        isActive
                          ? "active bg-[#fff1ed] text-[#df756e] font-bold border-l-2 border-[#ed8d84]"
                          : "text-[#203d3b] hover:bg-[#fff9f6]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight
                        className={`h-4 w-4 ${
                          isActive ? "text-[#df756e]" : "text-[#4f6461]/40"
                        }`}
                      />
                    </a>
                  );
                })}
              </div>

              {/* Clinic Quick Info & Phone Card */}
              <div className="mt-5 rounded-xl border border-[#efdcd2] bg-[#fffaf6] p-4 text-xs">
                <div className="grid grid-cols-2 gap-2 pb-3 mb-3 border-b border-[#efdcd2] text-[#4f6461]">
                  <div>
                    <span className="block font-bold uppercase text-[#c27b49] text-[10px]">Clinic Hours</span>
                    <span className="text-[11px]">Mon–Sat: 9am–7pm</span>
                  </div>
                  <div>
                    <span className="block font-bold uppercase text-[#c27b49] text-[10px]">Direct Concierge</span>
                    <span className="text-[11px]">(212) 555-GLOW</span>
                  </div>
                </div>

                <a
                  href="tel:2125554569"
                  className="flex items-center justify-center gap-2 rounded-full bg-[#ef8d84] py-2.5 font-bold uppercase tracking-wider text-white shadow-md shadow-[#ef8d84]/20 transition active:scale-95"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call Clinic: (212) 555-GLOW</span>
                </a>
              </div>
            </nav>
          </>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative isolate bg-[#fff7f0]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_17%_32%,rgba(255,255,255,.98),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(239,141,132,.14),transparent_25%),linear-gradient(110deg,#fffdf9_0%,#fff5ed_52%,#fce8df_100%)]" />
        <div className="absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full border border-[#e9c8b5]/50" />

        <div className="relative mx-auto grid max-w-[1320px] lg:min-h-[720px] lg:grid-cols-[48%_52%]">
          <div className="z-10 flex flex-col justify-center px-6 py-14 sm:px-10 lg:px-8 lg:py-20">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#ebd4c6] bg-white/80 px-4 py-2 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#ef8d84] shadow-[0_0_0_4px_rgba(239,141,132,.16)]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a96b42]">
                Minimal. Clean. Soft. Expert.
              </p>
            </div>

            <h1
              className="mt-6 font-serif leading-[0.92] tracking-[-0.04em] text-[#114745]"
              style={{ fontSize: "clamp(2.75rem, 6.4vw, 5.4rem)" }}
            >
              Confidence <br />
              Looks Beautiful
            </h1>
            <p className="-mt-1 -rotate-2 font-serif text-[2.7rem] sm:text-[3.8rem] italic leading-none text-[#ef9188]">
              When It’s You.
            </p>

            <p className="mt-6 max-w-lg text-base leading-7 text-[#405754]">
              Expert clinical aesthetics for subtle, natural harmony. Discover injectables, advanced medical skin rejuvenation, and glow therapies tailored uniquely to your facial anatomy.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
              <a
                href="#contact"
                onClick={(event) => handleNavClick(event, "contact")}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#ef8d84] px-8 py-4 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ef8d84]/30 transition hover:-translate-y-0.5 hover:shadow-xl active:scale-95"
              >
                <span>Book Consultation</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#treatments"
                onClick={(event) => handleNavClick(event, "treatments")}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-[#d9a97d] bg-white/85 px-8 py-4 text-xs font-bold uppercase tracking-wider text-[#174d4a] shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="h-4 w-4 text-[#ef8d84] transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#e9d8ce] pt-6 text-sm text-[#4e6562]">
              <span>
                <b className="font-serif text-xl text-[#174d4a]">500+</b> happy clients
              </span>
              <span className="hidden h-6 w-px bg-[#dfcbc0] sm:block" />
              <span className="flex items-center gap-1.5">
                <span className="flex text-[#dc8c2d]">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </span>
                <strong className="text-[#174d4a]">4.9</strong> rating
              </span>
            </div>
          </div>

          {/* Right Hero Image Container with Pure Care P & G Real Results Seal */}
          <div className="relative min-h-[520px] px-4 pb-8 sm:px-8 lg:min-h-full lg:px-0 lg:pb-0 flex items-center justify-center">
            <div className="relative h-full w-full overflow-hidden rounded-[7rem_2rem_2rem_2rem] bg-[#f5d8cc] shadow-[0_35px_80px_rgba(95,64,48,.16)] lg:rounded-[14rem_0_0_2rem]">
              <img
                src={heroImage}
                alt="Woman with radiant natural skin at PureGlow Aesthetics"
                className="h-full w-full object-cover object-[center_24%] transition duration-700 hover:scale-[1.02]"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#174d4a]/20 via-transparent to-white/5" />
            </div>

            {/* Top Right Floating Badge */}
            <div className="absolute right-6 top-8 rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md sm:right-10 lg:right-6 lg:top-12 z-10">
              <span className="block text-[10px] font-bold uppercase tracking-[.18em] text-[#b6774b]">
                Clinical Precision
              </span>
              <span className="mt-0.5 block text-xs sm:text-sm font-semibold text-[#174d4a]">
                Natural. Never overdone.
              </span>
            </div>

            {/* FIXED & IMPROVED: Pure Care P & G Real Results Circle */}
            <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-8 lg:bottom-16 lg:-left-6 z-20">
              <PureCareSeal />
            </div>

            <LeafSketch className="absolute -bottom-6 right-0 h-72 text-[#668b73]/60 pointer-events-none" />
          </div>
        </div>

        {/* 4 Pillars Strip */}
        <div className="relative mx-auto grid max-w-[1320px] grid-cols-2 gap-4 border-t border-[#f1e2da] bg-[#fffaf6] px-6 py-6 sm:grid-cols-4 lg:px-8">
          {[
            ["Expert Clinicians", "Board Certified & Experienced", Award],
            ["Natural Harmony", "Enhance, Never Distort", Sparkles],
            ["FDA-Approved Injectables", "Safe. Proven. Authentic", ShieldCheck],
            ["Personalized Aesthetic Plan", "Custom Tailored to You", Heart],
          ].map(([title, subtitle, IconComp]) => {
            const IconComponent = IconComp as typeof Award;
            return (
              <div key={title as string} className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[#e7c8aa] bg-white text-[#c3824b] shadow-sm">
                  <IconComponent className="h-5 w-5" />
                </span>
                <div>
                  <b className="block text-xs font-bold text-[#174d4a]">{title as string}</b>
                  <small className="text-[0.7rem] text-[#687875] leading-tight block">
                    {subtitle as string}
                  </small>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Services Section */}
      <section id="treatments" className="scroll-mt-20 px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-wrap items-end justify-between gap-4 px-1">
            <div>
              <p className="eyebrow">Our expert services</p>
              <h2 className="section-title">Aesthetic Care, Tailored For You</h2>
            </div>
            <a
              href="#most-loved"
              onClick={(event) => handleNavClick(event, "most-loved")}
              className="group inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#365e5a] hover:text-[#ef8d84]"
            >
              <span>View All Treatments</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group flex flex-col justify-between rounded-2xl border border-[#efddd4] bg-white px-5 py-7 text-center shadow-[0_12px_40px_rgba(51,75,69,.04)] transition hover:-translate-y-1 hover:border-[#ed8d84] hover:shadow-xl"
              >
                <div>
                  <span
                    className={`mx-auto grid h-16 w-16 place-items-center rounded-full text-2xl text-white shadow-md ${
                      index % 2 ? "bg-[#719792]" : "bg-[#f2a39d]"
                    }`}
                  >
                    {service.icon}
                  </span>
                  <h3 className="mt-4 font-serif text-lg font-bold text-[#133f3d]">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#5b6967]">
                    {service.text}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-[#f5e9e3]">
                  <span className="text-xs font-bold text-[#cb844e] group-hover:text-[#ef8d84] transition inline-flex items-center gap-1">
                    <span>Explore Care</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about-us" className="scroll-mt-20 px-4 pb-16">
        <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[2rem] bg-[#fffaf6] border border-[#efddd4] shadow-xl lg:grid-cols-[1fr_.96fr_.76fr]">
          <img
            src={beautyImage}
            alt="Client enjoying a soft skin treatment at PureGlow"
            className="h-full min-h-[380px] w-full object-cover"
            loading="lazy"
          />
          <div className="flex flex-col justify-center px-8 py-12 lg:px-12">
            <p className="eyebrow">About PureGlow</p>
            <h2 className="section-title max-w-md">
              Where Science Meets Beauty & Care
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#536360]">
              At PureGlow Aesthetics, we believe in enhancing your natural beauty with minimal, advanced, and evidence-based aesthetic treatments. Our medical board is dedicated to helping you look rested, confident, and authentically radiant.
            </p>
            <ul className="mt-5 space-y-2.5 text-xs sm:text-sm text-[#38504d]">
              {[
                "Personalized facial vector & treatment plans",
                "Advanced micro-droplet injection techniques",
                "Comfortable, restorative medical spa suite",
                "Natural-looking, long-lasting clinical results",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-[#fdebe7] text-[.65rem] font-bold text-[#d58a51]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              onClick={(event) => handleNavClick(event, "contact")}
              className="group mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#ef8d84] px-7 py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md shadow-[#ef8d84]/20 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              <span>Meet Our Clinicians</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <img
            src={interiorImage}
            alt="PureGlow clinic interior treatment suite"
            className="h-full min-h-[380px] w-full object-cover"
            loading="lazy"
          />
        </div>
      </section>

      {/* Most Loved Treatments Grid */}
      <section id="most-loved" className="scroll-mt-20 px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-[1240px] text-center">
          <p className="eyebrow">Most loved treatments</p>
          <h2 className="section-title">Glow Comes In Many Forms</h2>
          <div className="mt-8 grid grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-6">
            {treatments.map((treatment) => (
              <article
                key={treatment.title}
                className="group overflow-hidden rounded-2xl border border-[#efddd4] bg-white text-left transition hover:-translate-y-1.5 hover:border-[#ef8d84] hover:shadow-xl"
              >
                <div className="aspect-[.95/1] overflow-hidden relative">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <span className="absolute bottom-2 left-2 rounded-full bg-black/60 px-2 py-0.5 text-[10px] font-bold text-white backdrop-blur">
                    {treatment.duration}
                  </span>
                </div>
                <div className="p-4">
                  <div className="flex items-baseline justify-between gap-1">
                    <h3 className="font-serif text-base font-bold text-[#143f3d]">
                      {treatment.title}
                    </h3>
                  </div>
                  <p className="text-xs text-[#657370]">{treatment.subtitle}</p>
                  <div className="mt-3 flex items-center justify-between border-t border-[#f5e9e3] pt-2.5">
                    <span className="text-xs font-black text-[#ef8d84]">
                      {treatment.price}
                    </span>
                    <button
                      type="button"
                      onClick={() => handlePreSelectTreatment(treatment.title, treatment.price)}
                      className="text-[11px] font-bold text-[#d4864c] hover:underline"
                    >
                      Book →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Journey */}
      <section
        id="pricing"
        className="scroll-mt-20 mt-8 border-y border-[#f0e5df] bg-[#fffaf6] px-5 py-16 lg:px-8"
      >
        <div className="mx-auto grid max-w-[1240px] items-center gap-10 lg:grid-cols-[.8fr_1.7fr]">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 className="section-title max-w-sm">
              Your Journey To Confidence
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-[#5c6e6b]">
              Every treatment journey begins with a comprehensive medical facial assessment to ensure safe, subtle, and natural rejuvenation.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              ["▣", "Book", "Schedule your personalized one-on-one consultation with our expert team."],
              ["♙", "Consult", "We map your facial anatomy, analyze your skin, and design a customized plan."],
              ["✦", "Treat", "Experience comfortable, gentle treatments with long-lasting natural results."],
            ].map((step, index) => (
              <div key={step[1]} className="relative flex gap-4">
                <span
                  className={`grid h-14 w-14 shrink-0 place-items-center rounded-full text-xl text-white shadow-md ${
                    index === 1 ? "bg-[#719792]" : "bg-[#f3aa9d]"
                  }`}
                >
                  {step[0]}
                </span>
                <div>
                  <small className="text-xs font-bold uppercase tracking-wider text-[#9a6848]">
                    Step {index + 1}
                  </small>
                  <h3 className="font-serif text-lg font-bold text-[#174d4a]">{step[1]}</h3>
                  <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#60706d]">
                    {step[2]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Results Testimonials Carousel */}
      <section id="results" className="scroll-mt-20 px-5 py-20 lg:px-8">
        <div className="relative mx-auto grid max-w-[1240px] gap-6 overflow-hidden rounded-[2rem] bg-[#fff7ed] border border-[#fae2cb] p-7 lg:grid-cols-[.7fr_1.8fr] lg:p-10 shadow-lg">
          <LeafSketch className="absolute -bottom-16 -right-4 h-72 text-[#e8b574]/50 pointer-events-none" />
          <div className="relative z-10">
            <p className="eyebrow">Real results, real people</p>
            <h2 className="section-title">Loved By Our Clients</h2>
            <div className="mt-6 flex items-center gap-3">
              <span className="flex text-[#df8c27]">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} className="h-5 w-5 fill-current" />
                ))}
              </span>
              <div>
                <b className="block text-2xl font-serif leading-none">4.9 / 5</b>
                <small className="text-xs text-[#6e7d7a] font-medium">(500+ Verified Patient Reviews)</small>
              </div>
            </div>
            <p className="mt-5 text-sm leading-relaxed text-[#66726f]">
              Join hundreds of happy patients glowing with renewed self-assurance and natural elegance.
            </p>

            {/* Carousel Controls */}
            <div className="mt-8 flex gap-2">
              <button
                type="button"
                onClick={() =>
                  setTestimonialIndex(
                    (testimonialIndex + testimonials.length - 1) %
                      testimonials.length,
                  )
                }
                className="grid h-10 w-10 place-items-center rounded-full border border-[#dfb579] bg-white text-[#b67b3d] shadow-sm transition hover:bg-[#dfb579] hover:text-white active:scale-95"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                type="button"
                onClick={() =>
                  setTestimonialIndex((testimonialIndex + 1) % testimonials.length)
                }
                className="grid h-10 w-10 place-items-center rounded-full border border-[#dfb579] bg-white text-[#b67b3d] shadow-sm transition hover:bg-[#dfb579] hover:text-white active:scale-95"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="relative z-10 grid gap-4 md:grid-cols-3">
            {visibleTestimonials.map((item) => (
              <blockquote
                key={item.name}
                className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm border border-[#f3e3d6]"
              >
                <div>
                  <span className="font-serif text-3xl leading-none text-[#f3a49e]">
                    “
                  </span>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-[#475956]">
                    {item.quote}
                  </p>
                </div>
                <footer className="mt-6 border-t border-[#f7eae0] pt-4 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f5d5c8] font-serif text-sm font-bold text-[#143f3d]">
                    {item.name[0]}
                  </span>
                  <div>
                    <b className="block text-xs font-bold text-[#174d4a]">{item.name}</b>
                    <small className="text-[10px] text-[#b87949] font-medium block">
                      {item.treatment}
                    </small>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* The Glow Journal / Blog */}
      <section
        id="blog"
        className="scroll-mt-20 border-y border-[#f0e5df] bg-[#fffaf6] px-5 py-16 lg:px-8"
      >
        <div className="mx-auto max-w-[1240px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">The glow journal</p>
              <h2 className="section-title">Expert Notes For Better Skin</h2>
            </div>
            <a
              href="#contact"
              onClick={(event) => handleNavClick(event, "contact")}
              className="group inline-flex items-center gap-1 text-sm font-semibold text-[#365e5a] hover:text-[#ef8d84]"
            >
              <span>Explore all articles</span>
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              [
                "Aftercare Guide",
                "How to care for your skin after an injectable treatment",
                "4 min read",
              ],
              [
                "Skin Health",
                "The simple clinical routine behind a healthy, lasting glow",
                "5 min read",
              ],
              [
                "Expert Advice",
                "Choosing the right dermal treatment for natural-looking results",
                "6 min read",
              ],
            ].map(([category, title, readTime]) => (
              <article
                key={title}
                className="flex flex-col justify-between rounded-2xl border border-[#ecdcd3] bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl hover:border-[#ef8d84]"
              >
                <div>
                  <div className="flex justify-between items-center">
                    <p className="text-xs font-bold uppercase tracking-[.16em] text-[#c27b49]">
                      {category}
                    </p>
                    <span className="text-[11px] text-[#718481]">{readTime}</span>
                  </div>
                  <h3 className="mt-3 font-serif text-xl sm:text-2xl leading-snug text-[#143f3d]">
                    {title}
                  </h3>
                </div>
                <a
                  href="#contact"
                  onClick={(event) => handleNavClick(event, "contact")}
                  className="group mt-6 inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[#52736f] hover:text-[#ef8d84]"
                >
                  <span>Read full guide</span>
                  <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Consultation Booking Section */}
      <section id="contact" className="scroll-mt-20 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-[1240px] grid gap-8 lg:grid-cols-[1fr_1fr] items-stretch">
          {/* Left Column: Visual Banner */}
          <div className="relative min-h-[380px] overflow-hidden rounded-[2rem] bg-[#23605c] text-white flex flex-col justify-between p-8 sm:p-12 shadow-2xl">
            <img
              src={createLookImage}
              alt="PureGlow aesthetic patient"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-40 mix-blend-luminosity"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1b4b48] via-[#235f5b]/85 to-[#235f5b]/60" />
            <LeafSketch className="absolute -bottom-16 right-3 h-72 text-[#d7aa59]/35 pointer-events-none" />

            <div className="relative z-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#f2c98a]">
                <Sparkles className="h-3 w-3 text-[#f2c98a]" />
                <span>Private Consultation</span>
              </span>
              <h2 className="mt-5 font-serif text-3xl sm:text-5xl leading-tight text-white font-normal">
                Let’s Create Your <br />
                Most Radiant Self
              </h2>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-white/80 max-w-md">
                Experience clinical aesthetics guided by medical ethics, subtle artistry, and gentle patient care.
              </p>
            </div>

            <div className="relative z-10 mt-8 pt-6 border-t border-white/15 space-y-2 text-xs text-white/90">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#f2c98a]" />
                <span>540 Madison Avenue, 14th Floor · New York, NY</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#f2c98a]" />
                <span>Direct Concierge: (212) 555-GLOW</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Booking Form */}
          <div className="rounded-[2rem] border border-[#efddd4] bg-[#fffaf6] p-6 sm:p-10 shadow-xl flex flex-col justify-between">
            {bookingConfirmed ? (
              <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-300">
                <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#e8f5f3] text-[#2f6d67] border border-[#2f6d67]/30 shadow-md">
                  <CheckCircle2 className="h-8 w-8 text-[#2f6d67]" />
                </div>
                <h3 className="mt-5 font-serif text-2xl font-bold text-[#174d4a]">
                  Consultation Reserved
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#5d6e6a]">
                  We have received your appointment request. A clinical coordinator will reach out shortly.
                </p>

                <div className="mt-6 rounded-2xl border border-[#ebd6cb] bg-white p-5 text-left text-xs space-y-2.5 max-w-sm mx-auto shadow-sm">
                  <div className="flex justify-between border-b border-[#f5e9e3] pb-2">
                    <span className="text-[#657673]">Treatment:</span>
                    <span className="font-bold text-[#174d4a]">{selectedTreatment}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#f5e9e3] pb-2">
                    <span className="text-[#657673]">Clinician:</span>
                    <span className="font-bold text-[#174d4a]">{selectedClinician}</span>
                  </div>
                  <div className="flex justify-between border-b border-[#f5e9e3] pb-2">
                    <span className="text-[#657673]">Date & Slot:</span>
                    <span className="font-bold text-[#174d4a]">{appointmentDate} at {appointmentTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[#657673]">Reference:</span>
                    <span className="font-bold text-[#ef8d84]">PG-9281</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setBookingConfirmed(false)}
                  className="mt-6 inline-flex rounded-full bg-[#ef8d84] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#df756e]"
                >
                  Book Another Service
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setBookingConfirmed(true);
                }}
                className="space-y-4"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b87949]">
                    Schedule Online
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#143f3d]">
                    Book Your Appointment
                  </h3>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#405754] mb-1">
                    Select Treatment
                  </label>
                  <select
                    value={selectedTreatment}
                    onChange={(e) => setSelectedTreatment(e.target.value)}
                    className="w-full rounded-xl border border-[#dfcdc3] bg-white px-4 py-3 text-xs sm:text-sm font-medium text-[#174d4a] outline-none focus:border-[#ef8d84]"
                  >
                    {treatments.map((t) => (
                      <option key={t.title} value={`${t.title} (${t.price})`}>
                        {t.title} — {t.price} ({t.duration})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#405754] mb-1">
                    Select Clinician
                  </label>
                  <select
                    value={selectedClinician}
                    onChange={(e) => setSelectedClinician(e.target.value)}
                    className="w-full rounded-xl border border-[#dfcdc3] bg-white px-4 py-3 text-xs sm:text-sm font-medium text-[#174d4a] outline-none focus:border-[#ef8d84]"
                  >
                    <option value="Dr. Claire Bennett (Medical Director)">
                      Dr. Claire Bennett (Medical Director & Aesthetic Physician)
                    </option>
                    <option value="Elena Vance, NP (Aesthetic Specialist)">
                      Elena Vance, NP (Master Injector & Laser Specialist)
                    </option>
                    <option value="First Available Certified Clinician">
                      First Available Certified Clinician
                    </option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#405754] mb-1">
                      Preferred Date
                    </label>
                    <select
                      value={appointmentDate}
                      onChange={(e) => setAppointmentDate(e.target.value)}
                      className="w-full rounded-xl border border-[#dfcdc3] bg-white px-3 py-2.5 text-xs font-medium text-[#174d4a] outline-none focus:border-[#ef8d84]"
                    >
                      <option value="Tomorrow">Tomorrow</option>
                      <option value="This Thursday">This Thursday</option>
                      <option value="This Friday">This Friday</option>
                      <option value="This Saturday">This Saturday</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#405754] mb-1">
                      Time Slot
                    </label>
                    <select
                      value={appointmentTime}
                      onChange={(e) => setAppointmentTime(e.target.value)}
                      className="w-full rounded-xl border border-[#dfcdc3] bg-white px-3 py-2.5 text-xs font-medium text-[#174d4a] outline-none focus:border-[#ef8d84]"
                    >
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:30 AM">11:30 AM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="3:30 PM">3:30 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-1">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-[#dfcdc3] bg-white px-3.5 py-2.5 text-xs text-[#174d4a] placeholder-[#7d8f8c] outline-none focus:border-[#ef8d84]"
                  />
                  <input
                    type="tel"
                    required
                    placeholder="Phone Number"
                    className="w-full rounded-xl border border-[#dfcdc3] bg-white px-3.5 py-2.5 text-xs text-[#174d4a] placeholder-[#7d8f8c] outline-none focus:border-[#ef8d84]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 flex w-full min-h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#ef9b8f] to-[#ed7e79] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-lg shadow-[#ef8d86]/25 transition hover:shadow-xl active:scale-95"
                >
                  <span>Confirm Consultation</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <p className="text-center text-[11px] text-[#697c79]">
                  No payment required today · Flexible 48-hour cancellation policy.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#f0e4dd] bg-[#fffdfa] px-5 pb-8 pt-12 lg:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-10 border-b border-[#eee1d9] pb-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_.8fr_.8fr_1.5fr]">
          <div>
            <Brand />
            <p className="mt-4 max-w-[220px] text-sm leading-6 text-[#5e6e6b]">
              Minimal. Clean. Soft. Expert.
              <br />
              Evidence-based aesthetic care that brings out your authentic glow.
            </p>
            <Link
              to="/beauty"
              className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-[#d08350] hover:underline"
            >
              <span>← Beauty collection</span>
            </Link>
          </div>

          {[
            [
              "Quick Links",
              [
                "Home",
                "Treatments",
                "About Us",
                "Results",
                "Pricing",
                "Contact",
              ],
            ],
            [
              "Treatments",
              [
                "Lip Filler",
                "Botox & Dysport",
                "HydraFacial Glow",
                "Skin Boosters",
                "Microneedling",
                "Under Eye Filler",
              ],
            ],
            [
              "Information",
              [
                "Medical Board",
                "Clinic Safety",
                "Aftercare Guide",
                "Privacy Policy",
                "Terms & Conditions",
              ],
            ],
          ].map(([title, links]) => (
            <div key={title as string}>
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#143f3d]">{title}</h3>
              <ul className="mt-4 space-y-2.5">
                {(links as string[]).map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      onClick={(event) => handleNavClick(event, "home")}
                      className="text-xs text-[#5d6d69] hover:text-[#ed8d84] transition"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#143f3d]">Stay Connected</h3>
            <p className="mt-4 text-xs leading-relaxed text-[#5d6d69]">
              Subscribe for VIP clinical alerts, skincare notes & seasonal offerings.
            </p>
            <form
              className="mt-5 flex rounded-full border border-[#eadcd4] bg-white p-1 shadow-sm"
              onSubmit={(event) => {
                event.preventDefault();
                alert("Thank you for subscribing to PureGlow Aesthetics!");
              }}
            >
              <label className="sr-only" htmlFor="pureglow-email">
                Email address
              </label>
              <input
                id="pureglow-email"
                type="email"
                required
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-3.5 text-xs text-[#174d4a] outline-none placeholder-[#7e908d]"
              />
              <button
                type="submit"
                className="rounded-full bg-[#ed8d84] px-4 py-2 text-xs font-bold text-white transition hover:bg-[#df756e]"
              >
                Join
              </button>
            </form>
          </div>
        </div>

        <div className="mx-auto flex max-w-[1240px] flex-col sm:flex-row items-center justify-between gap-3 pt-6 text-xs text-[#87928f]">
          <p>© 2026 PureGlow Aesthetics. All Rights Reserved.</p>
          <div className="flex gap-4">
            <a href="#home" className="hover:text-[#174d4a]">Privacy</a>
            <a href="#home" className="hover:text-[#174d4a]">Terms</a>
            <a href="#home" className="hover:text-[#174d4a]">Medical Disclaimer</a>
          </div>
          <p>Confidence Looks Beautiful When It’s You.</p>
        </div>
      </footer>
    </main>
  );
}

export default PureGlowAesthetics;
