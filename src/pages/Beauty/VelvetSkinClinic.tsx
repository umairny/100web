import { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Heart,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  Star,
  CheckCircle2,
  ShieldCheck,
  Droplet,
  Calendar,
  Check,
  Activity,
  Sliders,
  Users,
  Award,
  Lock,
  Menu,
  X,
  ChevronRight,
} from "lucide-react";
import { Container } from "../../components";
import { imageUrl } from "../../assets/optimized";

const imageAssets = {
  hero: imageUrl("beauty/Velvet-Skin-Clinic/hero.webp"),
  facial: imageUrl("beauty/Velvet-Skin-Clinic/facial-treatment.webp"),
  peel: imageUrl("beauty/Velvet-Skin-Clinic/peel-treatment.webp"),
  led: imageUrl("beauty/Velvet-Skin-Clinic/led-treatment.webp"),
  consultation: imageUrl("beauty/Velvet-Skin-Clinic/consultation.webp"),
  interior: imageUrl("beauty/Velvet-Skin-Clinic/studio-interior.webp"),
  radiantGlow: imageUrl("beauty/Velvet-Skin-Clinic/radiant-glow.jpg"),
};

type SkinConcern = "hydration" | "pigmentation" | "acne" | "aging";
type TreatmentCategory = "all" | "facials" | "peels" | "led";

interface ClinicalTreatment {
  id: string;
  title: string;
  category: "facials" | "peels" | "led";
  concern: SkinConcern;
  price: number;
  duration: string;
  downtime: string;
  targetResults: string;
  description: string;
  image: string;
  badge?: string;
  steps: string[];
}

const treatmentsCatalog: ClinicalTreatment[] = [
  {
    id: "bespoke-barrier-facial",
    title: "Bespoke Barrier Infusion Facial",
    category: "facials",
    concern: "hydration",
    price: 195,
    duration: "60 mins",
    downtime: "Zero downtime · Instant glow",
    targetResults: "Deep hydration, plumper lipid barrier, immediate red-carpet dewiness.",
    description: "Multi-step medical facial combining ultrasonic cavitation, customized amino acid serum infusion, and chilled cryo-globes to calm and replenish.",
    image: imageAssets.facial,
    badge: "Most Requested",
    steps: ["Double cleansing with squalane", "Ultrasonic exfoliation", "Ceramide lipid infusion", "Cryo-globe lymphatic drainage"],
  },
  {
    id: "radiance-mandelic-peel",
    title: "Lactic & Mandelic Cellular Peel",
    category: "peels",
    concern: "pigmentation",
    price: 220,
    duration: "45 mins",
    downtime: "12-24 hours mild tightness · No sheet flaking",
    targetResults: "Diminished sun spots, refined pore architecture, luminous glass texture.",
    description: "Gentle yet clinical AHA formulation targeting stubborn hyperpigmentation and uneven tone without the trauma of deep chemical burns.",
    image: imageAssets.peel,
    badge: "Tone & Texture",
    steps: ["Skin pH prep solution", "Layered acid application", "Neutralizing botanical bath", "EGF peptide recovery veil"],
  },
  {
    id: "led-photo-recovery",
    title: "Medical LED Photo-Recovery",
    category: "led",
    concern: "acne",
    price: 140,
    duration: "40 mins",
    downtime: "Zero downtime",
    targetResults: "Rapid acne inflammation clearance, stimulated fibroblast collagen, accelerated healing.",
    description: "Hospital-grade multi-wave phototherapy emitting targeted 633nm red and 415nm blue light wavelengths to neutralize P. acnes bacteria.",
    image: imageAssets.led,
    steps: ["Deep enzyme cleanse", "Oxygen spray infusion", "30-min Clinical LED canopy", "Squalane seal"],
  },
  {
    id: "collagen-peptide-matrix",
    title: "Micro-Current & Peptide Matrix Lift",
    category: "facials",
    concern: "aging",
    price: 260,
    duration: "75 mins",
    downtime: "Zero downtime · Immediate lift",
    targetResults: "Sculpted jawline contour, lifted brow arches, boosted cellular ATP energy.",
    description: "Non-invasive low-frequency bio-electric currents stimulate facial muscle memory while infusing dual-molecular weight hyaluronic acid.",
    image: imageAssets.consultation,
    badge: "Sculpt & Lift",
    steps: ["Enzyme polish", "Targeted micro-current sculpting", "Bio-cellulose collagen mask", "Neck & decoclete contour"],
  },
  {
    id: "clear-barrier-acne-reset",
    title: "Purifying Salicylic & Zinc Peel",
    category: "peels",
    concern: "acne",
    price: 185,
    duration: "50 mins",
    downtime: "Mild redness for 2-4 hours",
    targetResults: "Unclogged congested pores, controlled sebum production, calmed cystic flare-ups.",
    description: "Formulated specifically for acne-prone skin using bio-compatible salicylic acid and colloidal zinc to decongest without stripping hydration.",
    image: imageAssets.peel,
    steps: ["Gentle steam extraction", "Salicylic & zinc application", "Calming centella asiatica compress", "SPF 50 mineral shield"],
  },
  {
    id: "express-glow-cocktail",
    title: "Lunchtime Vitamin C Photo-Glow",
    category: "led",
    concern: "hydration",
    price: 165,
    duration: "35 mins",
    downtime: "Zero downtime · Immediate radiance",
    targetResults: "Brighter complexion, antioxidant defense against urban pollution.",
    description: "An express mid-day clinical treatment pairing fresh L-ascorbic acid 15% with a concentrated amber LED photofacial boost.",
    image: imageAssets.led,
    steps: ["Quick AHA polish", "Fresh Vitamin C iontophoresis", "Amber LED light", "Hydra-gel mist"],
  },
];

const diagnosticConcerns = [
  {
    id: "hydration" as SkinConcern,
    label: "Dehydration & Dull Barrier",
    icon: "💧",
    description: "Skin feels tight, looks lackluster, or makeup clings to dry patches.",
    recommendedId: "bespoke-barrier-facial",
  },
  {
    id: "pigmentation" as SkinConcern,
    label: "Hyperpigmentation & Sun Damage",
    icon: "✨",
    description: "Post-breakout marks, melasma, or uneven tone from UV exposure.",
    recommendedId: "radiance-mandelic-peel",
  },
  {
    id: "acne" as SkinConcern,
    label: "Congestion, Breakouts & Redness",
    icon: "🌿",
    description: "Frequent blackheads, active cystic pimples, or compromised inflamed skin.",
    recommendedId: "led-photo-recovery",
  },
  {
    id: "aging" as SkinConcern,
    label: "Loss of Elasticity & Fine Lines",
    icon: "⏳",
    description: "Looking to restore firmness, cheek volume, and soften expression lines.",
    recommendedId: "collagen-peptide-matrix",
  },
];

const studioStandards = [
  {
    num: "01",
    title: "Clinical Evidence First",
    desc: "Every modality we practice is backed by published dermatological trials. No fad devices, no unproven trends.",
  },
  {
    num: "02",
    title: "Barrier Integrity Priority",
    desc: "We never compromise your skin's acid mantle for short-term results. All treatments respect cellular lipids.",
  },
  {
    num: "03",
    title: "Unhurried 1-on-1 Sanctuary",
    desc: "Private acoustic-dampened suites with HEPA medical air filtration and zero rushed clinical turnover.",
  },
  {
    num: "04",
    title: "Transparent Care Plans",
    desc: "No aggressive upselling or hidden fees. We explain exact expected outcomes, downtime, and ingredients in plain language.",
  },
];

const patientTestimonials = [
  {
    quote: "My skin had been inflamed and flaky for two years from harsh retinoids. The Bespoke Barrier Facial completely restored my moisture barrier in two visits.",
    name: "Elena Rostova",
    treatment: "Bespoke Barrier Facial",
    rating: 5,
  },
  {
    quote: "The Mandelic Peel worked wonders on my post-inflammatory acne marks with literally zero sheet flaking. The clinic feels like a peaceful five-star hotel.",
    name: "Camille Laurent",
    treatment: "Lactic & Mandelic Peel",
    rating: 5,
  },
  {
    quote: "I book the Micro-Current Sculpt before every major photo shoot or speaking engagement. My cheekbones look lifted immediately.",
    name: "Marcus Vance",
    treatment: "Micro-Current Lift",
    rating: 5,
  },
];

export function VelvetSkinClinic() {
  const [selectedConcern, setSelectedConcern] = useState<SkinConcern>("hydration");
  const [activeCategory, setActiveCategory] = useState<TreatmentCategory>("all");
  const [bookedTreatment, setBookedTreatment] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [heroProtocol, setHeroProtocol] = useState<"barrier" | "peel" | "led">("barrier");

  // Booking Module State
  const [bookingForm, setBookingForm] = useState({
    treatment: "Bespoke Barrier Infusion Facial ($195)",
    clinician: "Dr. Sarah Chen, Medical Aesthetician",
    date: "Thursday, May 28",
    time: "2:00 PM",
    isConfirmed: false,
  });

  const navLinks = [
    { id: "treatments", label: "Treatments", href: "#treatments" },
    { id: "diagnostic", label: "Skin Diagnostic", href: "#diagnostic" },
    { id: "standards", label: "Our Standards", href: "#standards" },
    { id: "studio", label: "The Studio", href: "#studio" },
    { id: "reviews", label: "Reviews", href: "#reviews" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sectionIds = ["treatments", "diagnostic", "standards", "studio", "book", "reviews"];
      const scrollPosition = window.scrollY + 140;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          return;
        }
      }
      if (window.scrollY < 200) {
        setActiveSection("");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const topOffset = 80;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", href);
      setActiveSection(targetId);
    }
  };

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.pushState(null, "", window.location.pathname);
    setActiveSection("");
  };

  const matchedTreatment = useMemo(() => {
    const concernObj = diagnosticConcerns.find((c) => c.id === selectedConcern);
    return treatmentsCatalog.find((t) => t.id === concernObj?.recommendedId) || treatmentsCatalog[0];
  }, [selectedConcern]);

  const filteredTreatments = useMemo(() => {
    if (activeCategory === "all") return treatmentsCatalog;
    return treatmentsCatalog.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="brand-motion motion-velvet min-h-screen bg-[#fcfaf7] text-[#282320] selection:bg-[#a47777] selection:text-white">
      {/* ── TOP CLINICAL ACCREDITATION BAR (SCROLLS WITH PAGE) ───────────────── */}
      <div className="border-b border-[#ebdcd2] bg-[#282320] py-2.5 px-4 text-xs text-[#fcfaf7]">
        <Container className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2 font-serif text-[11px] text-[#e8c7bb]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold tracking-widest uppercase">VELVET CLINICAL SUITES:</span>
            <span className="text-white/80">Now Accepting New Patients for Spring Barrier Diagnostics</span>
          </div>
          <div className="flex items-center gap-5 text-[11px] text-white/70">
            <span className="hidden sm:inline">✨ Medical-Grade Formulations</span>
            <span className="hidden md:inline">🛡️ Zero Artificial Fragrance</span>
            <span className="flex items-center gap-1.5 text-[#e8c7bb] font-semibold">
              <Phone className="h-3 w-3" />
              <span>(212) 555-0182</span>
            </span>
            <span className="hidden sm:inline">📍 SoHo, New York</span>
          </div>
        </Container>
      </div>

      {/* ── BESPOKE STICKY LUXURY NAVIGATION BAR ───────────────────────────── */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "border-b border-[#ebdcd2]/90 bg-[#fcfaf7]/95 shadow-[0_10px_30px_-10px_rgba(40,35,32,0.08)] backdrop-blur-xl py-3"
            : "border-b border-[#ebdcd2]/60 bg-[#fcfaf7]/90 backdrop-blur-md py-4"
        }`}
      >
        <Container>
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo & Tagline */}
            <div className="flex items-center gap-4">
              <a
                href="#top"
                onClick={scrollToTop}
                className="group flex flex-col focus:outline-none"
              >
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#a47777]/15 text-[#a47777] transition-transform duration-300 group-hover:scale-105">
                    <Sparkles className="h-3.5 w-3.5 fill-[#a47777]/30" />
                  </div>
                  <span className="font-serif text-xl sm:text-2xl font-normal tracking-[0.18em] uppercase text-[#282320]">
                    Velvet Skin
                  </span>
                </div>
                <span className="text-[9px] uppercase tracking-[0.32em] text-[#665a53] pl-9">
                  Clinical Aesthetics · SoHo
                </span>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 rounded-full border border-[#ebdcd2]/80 bg-white/70 p-1.5 backdrop-blur-md shadow-2xs">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all duration-200 ${
                      isActive
                        ? "bg-[#a47777] text-white shadow-xs"
                        : "text-[#665a53] hover:text-[#282320] hover:bg-[#a47777]/10"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Desktop CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/beauty"
                className="hidden xl:inline-flex items-center gap-1 text-[11px] font-semibold text-[#8c7b72] hover:text-[#a47777] transition"
                title="Return to 100Web Beauty Showcase"
              >
                <ArrowRight className="h-3 w-3 rotate-180" />
                <span>Showcase</span>
              </Link>
              <a
                href="#book"
                onClick={(e) => handleNavClick(e, "#book")}
                className="inline-flex items-center gap-2 rounded-full bg-[#a47777] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white shadow-sm transition hover:bg-[#8e6060] hover:shadow-md active:scale-95"
              >
                <Calendar className="h-3.5 w-3.5" />
                <span>Book Consultation</span>
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full border border-[#ebdcd2] bg-white text-[#282320] shadow-2xs hover:bg-[#f7f0e8] transition"
            >
              {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </Container>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 border-t border-[#ebdcd2] bg-[#fcfaf7]/98 px-5 py-6 shadow-2xl backdrop-blur-2xl animate-in slide-in-from-top-3 duration-200">
            <Container className="space-y-4">
              <div className="grid gap-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold transition ${
                        isActive
                          ? "bg-[#a47777] text-white"
                          : "text-[#282320] hover:bg-[#a47777]/10"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className="h-4 w-4 opacity-70" />
                    </a>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-[#ebdcd2] space-y-3">
                <a
                  href="#book"
                  onClick={(e) => handleNavClick(e, "#book")}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#a47777] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#8e6060] transition"
                >
                  <Calendar className="h-4 w-4" />
                  <span>Book Consultation & Treatment</span>
                </a>

                <div className="flex items-center justify-between text-xs text-[#665a53] pt-2 px-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <Phone className="h-3.5 w-3.5 text-[#a47777]" />
                    (212) 555-0182
                  </span>
                  <Link
                    to="/beauty"
                    className="font-bold text-[#a47777] hover:underline"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    ← All Beauty Templates
                  </Link>
                </div>
              </div>
            </Container>
          </div>
        )}
      </header>

      {/* ── LUXURY ARCHITECTURAL ATELIER HERO SECTION ──────────────────────── */}
      <section className="relative overflow-hidden bg-[#fcfaf7] pt-8 pb-20 md:pt-14 md:pb-28">
        {/* Soft Ambient Radiance Gradients */}
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_-15%,rgba(164,119,119,0.12),transparent)]" />
        <div className="pointer-events-none absolute right-[-10%] top-[20%] h-96 w-96 rounded-full bg-[#f7e8df]/40 blur-3xl" />
        <div className="pointer-events-none absolute left-[-5%] bottom-[10%] h-80 w-80 rounded-full bg-[#ebdcd2]/30 blur-3xl" />

        <Container className="relative">
          {/* Top Medical Credentials & Availability Ticker */}
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-b border-[#ebdcd2]/70 pb-5">
            <div className="flex flex-wrap items-center gap-2.5 sm:gap-4 text-xs font-semibold text-[#665a53]">
              <span className="flex items-center gap-1.5 rounded-full bg-[#a47777]/10 px-3 py-1 font-bold text-[#a47777]">
                <ShieldCheck className="h-3.5 w-3.5" />
                Board-Certified Aesthetic Dermatology
              </span>
              <span className="hidden sm:inline text-[#ebdcd2]">•</span>
              <span className="hidden sm:inline">Suite 204 · SoHo Medical Arts District</span>
            </div>

            <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50/80 px-3.5 py-1 text-[11px] font-bold text-emerald-800 backdrop-blur-xs">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>2 Sanctuary Suites Open Today · Walk-Ins Welcomed</span>
            </div>
          </div>

          {/* Main Hero Architecture: Asymmetrical Monumental Layout */}
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            {/* Left Column: Monumental Editorial Thesis & Interactive Protocols */}
            <div>
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#a47777]">
                Clinical Dermatology · Unhurried Restorations
              </p>

              <h1 className="mt-3 font-serif text-4xl sm:text-6xl lg:text-[68px] font-normal leading-[1.04] tracking-tight text-[#282320]">
                Precision derma.
                <span className="block italic font-normal text-[#a47777]">
                  Sartorial care
                </span>
                for the acid mantle.
              </h1>

              <p className="mt-6 max-w-xl text-sm sm:text-base leading-relaxed text-[#665a53]">
                Where cellular bio-science replaces cosmetic marketing. Custom-compounded ceramides, hospital-grade LED phototherapy, and ultrasonic infusion delivered in private HEPA-filtered SoHo sanctuaries.
              </p>

              {/* Interactive Hero Protocol Quick-Switcher */}
              <div className="mt-8 rounded-3xl border border-[#ebdcd2] bg-white/80 p-5 shadow-xs backdrop-blur-md">
                <div className="flex items-center justify-between mb-3.5">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#282320]">
                    Select Signature Protocol to Preview Telemetry:
                  </span>
                  <span className="text-[11px] font-bold text-[#a47777]">
                    {heroProtocol === "barrier" ? "60 mins · $195" : heroProtocol === "peel" ? "45 mins · $220" : "40 mins · $140"}
                  </span>
                </div>

                {/* 3 Protocol Tabs */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: "barrier" as const, num: "01", label: "Barrier Infusion" },
                    { id: "peel" as const, num: "02", label: "Mandelic Peel" },
                    { id: "led" as const, num: "03", label: "LED Canopy" },
                  ].map((tab) => {
                    const isSelected = heroProtocol === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setHeroProtocol(tab.id)}
                        className={`group relative rounded-2xl border px-3 py-2.5 text-left transition-all duration-300 ${
                          isSelected
                            ? "border-[#a47777] bg-[#282320] text-white shadow-md ring-2 ring-[#a47777]/20"
                            : "border-[#ebdcd2] bg-[#fcfaf7] text-[#282320] hover:border-[#a47777]/50 hover:bg-white"
                        }`}
                      >
                        <span className={`text-[9px] font-mono font-bold block transition ${isSelected ? "text-[#e8c7bb]" : "text-[#a47777]"}`}>
                          {tab.num}
                        </span>
                        <span className="text-xs font-bold block truncate mt-0.5">
                          {tab.label}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Active Protocol Specs */}
                <div className="mt-4 border-t border-[#ebdcd2] pt-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                  <div className="space-y-0.5">
                    <p className="font-serif font-bold text-[#282320]">
                      {heroProtocol === "barrier"
                        ? "Bespoke Lipid Barrier Infusion"
                        : heroProtocol === "peel"
                        ? "Lactic & Mandelic Cellular Peel"
                        : "Medical LED Photo-Recovery"}
                    </p>
                    <p className="text-[11px] text-[#665a53] truncate max-w-sm">
                      Actives:{" "}
                      <span className="font-semibold text-[#282320]">
                        {heroProtocol === "barrier"
                          ? "Biomimetic Ceramide NP · Squalane · Copper Peptides"
                          : heroProtocol === "peel"
                          ? "15% Mandelic Acid · Lactic Ester · EGF Recovery Veil"
                          : "Hospital Photons · Pure O2 Mist · Squalane Seal"}
                      </span>
                    </p>
                  </div>
                  <div className="shrink-0 flex items-center gap-1.5 text-[11px] font-bold text-[#a47777] bg-[#a47777]/10 rounded-full px-3 py-1">
                    <Clock className="h-3 w-3" />
                    <span>
                      {heroProtocol === "barrier"
                        ? "Zero Downtime · Red Carpet Glow"
                        : heroProtocol === "peel"
                        ? "12-24h Mild Tightness · No Sheet Flaking"
                        : "Zero Downtime · Soothing Finish"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-7 flex flex-wrap items-center gap-3.5">
                <a
                  href="#book"
                  onClick={() => {
                    const title =
                      heroProtocol === "barrier"
                        ? "Bespoke Barrier Infusion Facial ($195)"
                        : heroProtocol === "peel"
                        ? "Lactic & Mandelic Cellular Peel ($220)"
                        : "Medical LED Photo-Recovery ($140)";
                    setBookingForm((prev) => ({ ...prev, treatment: title }));
                  }}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#a47777] px-7 py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-xl shadow-[#a47777]/25 hover:bg-[#8e6060] hover:scale-105 active:scale-95 transition"
                >
                  <Calendar className="h-4 w-4" />
                  <span>
                    Reserve {heroProtocol === "barrier" ? "Barrier Facial" : heroProtocol === "peel" ? "Cellular Peel" : "LED Canopy"} (
                    {heroProtocol === "barrier" ? "$195" : heroProtocol === "peel" ? "$220" : "$140"})
                  </span>
                </a>

                <a
                  href="#diagnostic"
                  className="inline-flex items-center gap-2 rounded-full border border-[#665a53]/25 bg-white px-5 py-3.5 text-xs font-bold text-[#282320] shadow-2xs hover:border-[#a47777] hover:text-[#a47777] transition"
                >
                  <Sliders className="h-3.5 w-3.5 text-[#a47777]" />
                  <span>60-Sec Skin Diagnostic</span>
                </a>
              </div>

              {/* Clinical Trust Standards Strip */}
              <div className="mt-10 grid grid-cols-3 gap-3 border-t border-[#ebdcd2] pt-6 max-w-lg">
                <div className="rounded-2xl border border-[#ebdcd2]/80 bg-white/60 p-3">
                  <p className="font-serif text-xl font-bold text-[#a47777]">100%</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#665a53]">Barrier-Safe Actives</p>
                </div>
                <div className="rounded-2xl border border-[#ebdcd2]/80 bg-white/60 p-3">
                  <p className="font-serif text-xl font-bold text-[#282320]">Zero</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#665a53]">Synthetic Fragrance</p>
                </div>
                <div className="rounded-2xl border border-[#ebdcd2]/80 bg-white/60 p-3">
                  <p className="font-serif text-xl font-bold text-[#a47777]">4.9★</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-[#665a53]">Verified Outcomes</p>
                </div>
              </div>
            </div>

            {/* Right Column: Architectural Atelier Visual Triptych */}
            <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
              {/* Outer Decorative Architectural Glow & Frame */}
              <div className="relative rounded-[40px] border-2 border-[#ebdcd2] bg-white p-3 sm:p-4 shadow-2xl">
                {/* Main Dynamic Clinical Photograph */}
                <div className="relative aspect-[4/3.8] overflow-hidden rounded-[32px] bg-[#282320]">
                  <img
                    key={heroProtocol}
                    src={
                      heroProtocol === "barrier"
                        ? imageAssets.radiantGlow
                        : heroProtocol === "peel"
                        ? imageAssets.peel
                        : imageAssets.led
                    }
                    alt="Clinical dermatological treatment at Velvet Skin Clinic"
                    className="h-full w-full object-cover transition-all duration-700 hover:scale-105 animate-in fade-in zoom-in-95 duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none" />

                  {/* Floating Telemetry Scanner Badge (Top Right) */}
                  <div className="absolute top-4 right-4 rounded-full border border-white/30 bg-black/60 px-4 py-1.5 text-xs font-bold text-white shadow-xl backdrop-blur-md flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>
                      {heroProtocol === "barrier"
                        ? "Transepidermal Hydration: +84%"
                        : heroProtocol === "peel"
                        ? "Pore Architecture Refinement: 76%"
                        : "Erythema & Redness Relief: -68%"}
                    </span>
                  </div>

                  {/* Floating Clinician Accreditation (Top Left) */}
                  <div className="absolute top-4 left-4 hidden sm:flex items-center gap-2 rounded-full border border-white/20 bg-white/90 px-3 py-1 text-[11px] font-bold text-[#282320] shadow-lg backdrop-blur-md">
                    <div className="h-2 w-2 rounded-full bg-[#a47777]" />
                    <span>Dr. Sarah Chen, MD · Clinical Lead</span>
                  </div>

                  {/* Lower Card: Live Active Protocol Overview */}
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/25 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-[#a47777]/15 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-[#a47777]">
                        Protocol {heroProtocol === "barrier" ? "01" : heroProtocol === "peel" ? "02" : "03"}
                      </span>
                      <span className="text-xs font-extrabold text-[#282320]">
                        {heroProtocol === "barrier" ? "$195 · 60 mins" : heroProtocol === "peel" ? "$220 · 45 mins" : "$140 · 40 mins"}
                      </span>
                    </div>

                    <p className="mt-1 font-serif text-base font-bold text-[#282320]">
                      {heroProtocol === "barrier"
                        ? "Bespoke Barrier Infusion Facial"
                        : heroProtocol === "peel"
                        ? "Lactic & Mandelic Cellular Peel"
                        : "Medical LED Photo-Recovery"}
                    </p>
                    <p className="text-xs text-[#665a53] mt-0.5">
                      {heroProtocol === "barrier"
                        ? "Ultrasonic Cavitation · Ceramide Infusion · Cryo Lymphatic Drain"
                        : heroProtocol === "peel"
                        ? "Gentle AHA Acid Matrix · Cellular Resurfacing · EGF Recovery Veil"
                        : "Hospital-Grade Multi-Wave Canopy · P. Acnes Neutralization"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating Architectural Secondary Sanctuary Suite Inset Card (Bottom Left) */}
              <div className="absolute -bottom-7 -left-6 hidden md:flex items-center gap-3.5 rounded-2xl border border-[#ebdcd2] bg-white p-3 shadow-xl backdrop-blur-md">
                <div className="h-14 w-14 overflow-hidden rounded-xl bg-[#f7f0e8] shrink-0 border border-[#ebdcd2]">
                  <img
                    src={imageAssets.interior}
                    alt="Sanctuary treatment suite interior"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="pr-2">
                  <p className="text-[10px] font-black uppercase tracking-wider text-[#a47777]">Sanctuary Suite 204</p>
                  <p className="font-serif text-xs font-bold text-[#282320] mt-0.5">HEPA-Filtered & Acoustic-Dampened</p>
                  <p className="text-[10px] text-emerald-700 font-bold mt-0.5">● Ready for Walk-In Scans</p>
                </div>
              </div>

              {/* Floating Metric Index Pill (Top Right Offset) */}
              <div className="absolute -top-5 -right-4 hidden sm:block rounded-2xl border border-[#ebdcd2] bg-white px-4 py-2.5 shadow-xl text-center">
                <p className="text-[9px] font-black uppercase tracking-wider text-[#665a53]">
                  {heroProtocol === "barrier"
                    ? "Lipid Hydration Index"
                    : heroProtocol === "peel"
                    ? "Pore Clarity Score"
                    : "Inflammation Relief"}
                </p>
                <p className="font-serif text-xl font-extrabold text-[#a47777]">
                  {heroProtocol === "barrier" ? "+84%" : heroProtocol === "peel" ? "76%" : "-68%"}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── INTERACTIVE SKIN DIAGNOSTIC FINDER ─────────────────────────────── */}
      <section id="diagnostic" className="py-20 md:py-28 bg-white border-y border-[#ebdcd2]">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-14">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#a47777]/20 bg-[#a47777]/10 px-4 py-1 text-xs font-black uppercase tracking-widest text-[#a47777]">
              <Sliders className="h-3.5 w-3.5" />
              Diagnostic Protocol Matcher
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#282320]">
              What is your primary skin focus today?
            </h2>
            <p className="mt-3 text-sm text-[#665a53]">
              Select your chief concern below to reveal our tailored dermatological protocol and expected recovery timeline.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {/* Concern Selector Buttons */}
            <div className="grid gap-3.5 sm:grid-cols-2">
              {diagnosticConcerns.map((concern) => {
                const isSelected = selectedConcern === concern.id;
                return (
                  <button
                    key={concern.id}
                    type="button"
                    onClick={() => setSelectedConcern(concern.id)}
                    className={`rounded-3xl border p-5 sm:p-6 text-left transition-all ${
                      isSelected
                        ? "border-[#a47777] bg-[#f7f0e8] ring-2 ring-[#a47777]/20 shadow-md"
                        : "border-[#ebdcd2] bg-[#fcfaf7] hover:border-[#a47777]/50 hover:bg-white"
                    }`}
                  >
                    <span className="text-2xl block mb-2">{concern.icon}</span>
                    <h3 className="font-serif text-lg font-bold text-[#282320]">
                      {concern.label}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#665a53]">
                      {concern.description}
                    </p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#a47777]">
                      <span>Match Protocol</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Matched Protocol Spotlight Card */}
            <div className="rounded-3xl border border-[#ebdcd2] bg-[#fcfaf7] p-7 shadow-xl">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#f7f0e8] mb-5">
                <img
                  src={matchedTreatment.image}
                  alt={matchedTreatment.title}
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#a47777] shadow-sm">
                  Recommended Match
                </span>
                <span className="absolute bottom-3 right-3 rounded-full bg-black/70 px-2.5 py-0.5 text-xs font-bold text-white">
                  ${matchedTreatment.price} · {matchedTreatment.duration}
                </span>
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#282320]">
                {matchedTreatment.title}
              </h3>
              <p className="mt-1 text-xs font-semibold text-[#a47777]">
                ✦ Downtime: {matchedTreatment.downtime}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-[#665a53]">
                {matchedTreatment.description}
              </p>

              {/* Steps overview */}
              <div className="mt-4 space-y-1.5 border-t border-[#ebdcd2] pt-4">
                <p className="text-[10px] font-black uppercase tracking-wider text-[#282320]">Protocol Sequence:</p>
                {matchedTreatment.steps.map((step, idx) => (
                  <div key={step} className="flex items-center gap-2 text-xs text-[#665a53]">
                    <CheckCircle2 className="h-3.5 w-3.5 text-[#a47777] shrink-0" />
                    <span>{step}</span>
                  </div>
                ))}
              </div>

              <a
                href="#book"
                onClick={() => {
                  setBookingForm((prev) => ({
                    ...prev,
                    treatment: `${matchedTreatment.title} ($${matchedTreatment.price})`,
                  }));
                }}
                className="mt-6 block w-full text-center rounded-full bg-[#a47777] py-3 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#8e6060] transition"
              >
                Select & Book This Protocol
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* ── FULL CLINICAL TREATMENT CATALOG ───────────────────────────────── */}
      <section id="treatments" className="py-20 md:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#a47777]">
                Clinical Treatment Menu
              </span>
              <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#282320]">
                Targeted Care. Transparent Formulations.
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#665a53]">
              Every treatment is personalized following a skin impedance diagnostic. Zero generic conveyor-belt protocols.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mb-10 flex flex-wrap items-center gap-2.5 border-b border-[#ebdcd2] pb-4">
            {[
              { id: "all" as const, label: `All Protocols (${treatmentsCatalog.length})` },
              { id: "facials" as const, label: "Bespoke Facials" },
              { id: "peels" as const, label: "Cellular Chemical Peels" },
              { id: "led" as const, label: "Medical LED Light Therapy" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  activeCategory === tab.id
                    ? "bg-[#282320] text-white shadow-md"
                    : "border border-[#ebdcd2] bg-white text-[#665a53] hover:border-[#a47777] hover:text-[#a47777]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTreatments.map((treatment) => (
              <article
                key={treatment.id}
                className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#ebdcd2] bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#a47777]/50 hover:shadow-xl"
              >
                <div>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#f7f0e8]">
                    <img
                      src={treatment.image}
                      alt={treatment.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {treatment.badge && (
                      <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#a47777] shadow-sm backdrop-blur-xs">
                        {treatment.badge}
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 rounded-full bg-black/65 px-2.5 py-0.5 text-[10px] font-bold text-white backdrop-blur-xs">
                      {treatment.duration}
                    </span>
                  </div>

                  <div className="mt-5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-xl font-bold text-[#282320]">
                        {treatment.title}
                      </h3>
                      <span className="font-serif text-xl font-bold text-[#a47777]">
                        ${treatment.price}
                      </span>
                    </div>

                    <p className="mt-1.5 text-xs font-semibold text-[#8e6060]">
                      ✦ Downtime: {treatment.downtime}
                    </p>

                    <p className="mt-2.5 text-xs leading-relaxed text-[#665a53]">
                      {treatment.description}
                    </p>

                    <div className="mt-4 rounded-xl bg-[#fcfaf7] border border-[#ebdcd2] p-3 text-[11px] text-[#665a53]">
                      <span className="font-bold text-[#282320]">Expected Outcome: </span>
                      {treatment.targetResults}
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-[#ebdcd2] pt-4">
                  <a
                    href="#book"
                    onClick={() => {
                      setBookingForm((prev) => ({
                        ...prev,
                        treatment: `${treatment.title} ($${treatment.price})`,
                      }));
                    }}
                    className="block w-full text-center rounded-full bg-[#f7f0e8] py-2.5 text-xs font-bold text-[#282320] hover:bg-[#a47777] hover:text-white transition"
                  >
                    Schedule This Treatment
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ── THE VELVET CLINICAL STANDARDS ─────────────────────────────────── */}
      <section id="standards" className="py-20 md:py-28 bg-[#282320] text-white">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#e8c7bb]">
              The Clinical Charter
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-white">
              Dermatological Integrity Without the Rush
            </h2>
            <p className="mt-3 text-sm text-white/70">
              Four principles governing every consultation, formulation, and treatment room protocol.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {studioStandards.map((std) => (
              <div
                key={std.num}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-sm transition hover:border-[#e8c7bb]/40 hover:bg-white/[0.07]"
              >
                <span className="font-serif text-2xl font-bold text-[#e8c7bb]">
                  {std.num}
                </span>
                <h3 className="font-serif text-xl font-bold text-white mt-3">
                  {std.title}
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-white/70">
                  {std.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── THE STUDIO SANCTUARY & CLEAN ENVIRONMENT ──────────────────────── */}
      <section id="studio" className="py-20 md:py-28 bg-[#f7f0e8] border-y border-[#ebdcd2]">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-[#ebdcd2] shadow-2xl aspect-[16/10]">
              <img
                src={imageAssets.interior}
                alt="Velvet Skin Clinic studio interior with warm travertine, clean lines, and treatment suites"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block rounded-2xl border border-[#ebdcd2] bg-white p-5 shadow-xl">
              <p className="text-xs font-black uppercase tracking-wider text-[#a47777]">Sanctuary Environment</p>
              <p className="font-serif text-sm font-bold text-[#282320] mt-0.5">HEPA-Filtered Private Treatment Suites</p>
            </div>
          </div>

          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#a47777]">
              The Treatment Space
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#282320]">
              Designed to lower your cortisol the moment you enter.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#665a53]">
              Stress triggers cortisol spikes that directly compromise skin barrier lipids and exacerbate inflammatory acne. Our SoHo studio was engineered with acoustic dampening, warm ambient lighting, and organic Egyptian cotton treatment linens to let your nervous system deeply down-regulate.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#ebdcd2] bg-white p-4">
                <Clock className="h-5 w-5 text-[#a47777]" />
                <p className="font-serif text-sm font-bold text-[#282320] mt-2">Clinic Hours</p>
                <p className="text-xs text-[#665a53] mt-0.5">Mon–Fri 9am–7pm · Sat 10am–4pm</p>
              </div>

              <div className="rounded-2xl border border-[#ebdcd2] bg-white p-4">
                <MapPin className="h-5 w-5 text-[#a47777]" />
                <p className="font-serif text-sm font-bold text-[#282320] mt-2">SoHo Location</p>
                <p className="text-xs text-[#665a53] mt-0.5">118 Linden Avenue, Suite 204, NY</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── INTERACTIVE CONSULTATION & BOOKING MODULE ─────────────────────── */}
      <section id="book" className="py-20 md:py-28 bg-white border-b border-[#ebdcd2]">
        <Container>
          <div className="grid gap-12 rounded-3xl border border-[#ebdcd2] bg-[#fcfaf7] p-8 sm:p-14 shadow-xl lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#a47777]">
                Appointment Booking
              </span>
              <h2 className="mt-3 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#282320]">
                Schedule your one-on-one skin consultation.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#665a53]">
                Your first appointment includes a 20-minute digital barrier assessment, a customized treatment, and a 30-day home protocol blueprint.
              </p>

              <div className="mt-8 space-y-3.5">
                <div className="flex items-center gap-3 text-xs text-[#665a53]">
                  <CheckCircle2 className="h-4 w-4 text-[#a47777] shrink-0" />
                  <span>Complimentary digital skin impedance & hydration analysis</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#665a53]">
                  <CheckCircle2 className="h-4 w-4 text-[#a47777] shrink-0" />
                  <span>Private suite with dedicated medical aesthetician</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#665a53]">
                  <CheckCircle2 className="h-4 w-4 text-[#a47777] shrink-0" />
                  <span>24-hour hassle-free reschedule policy</span>
                </div>
              </div>
            </div>

            {/* Booking Form Card */}
            <div className="rounded-2xl border border-[#ebdcd2] bg-white p-6 sm:p-8 shadow-md">
              {bookingForm.isConfirmed ? (
                <div className="text-center py-6">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-500/20 text-emerald-600 mb-3">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#282320]">Appointment Confirmed</h3>
                  <p className="text-xs text-[#665a53] mt-1.5">
                    {bookingForm.treatment} with {bookingForm.clinician}.
                  </p>
                  <p className="text-xs text-[#a47777] font-bold mt-2">
                    Confirmed for {bookingForm.date} at {bookingForm.time}.
                  </p>
                  <button
                    type="button"
                    onClick={() => setBookingForm((prev) => ({ ...prev, isConfirmed: false }))}
                    className="mt-6 rounded-full border border-[#ebdcd2] px-5 py-2 text-xs font-bold text-[#282320] hover:bg-[#f7f0e8]"
                  >
                    Modify Booking
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#282320]">Reserve Session</h3>
                  <p className="text-xs text-[#665a53] mt-0.5">Select protocol and preferred date</p>

                  <div className="mt-5 space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#665a53] mb-1.5">
                        Selected Treatment
                      </label>
                      <select
                        value={bookingForm.treatment}
                        onChange={(e) => setBookingForm((prev) => ({ ...prev, treatment: e.target.value }))}
                        className="w-full rounded-xl border border-[#ebdcd2] bg-[#fcfaf7] px-3.5 py-2.5 text-xs font-semibold text-[#282320] focus:border-[#a47777] focus:outline-none"
                      >
                        {treatmentsCatalog.map((t) => (
                          <option key={t.id} value={`${t.title} ($${t.price})`}>
                            {t.title} (${t.price})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-[#665a53] mb-1.5">
                        Clinician
                      </label>
                      <select
                        value={bookingForm.clinician}
                        onChange={(e) => setBookingForm((prev) => ({ ...prev, clinician: e.target.value }))}
                        className="w-full rounded-xl border border-[#ebdcd2] bg-[#fcfaf7] px-3.5 py-2.5 text-xs font-semibold text-[#282320] focus:border-[#a47777] focus:outline-none"
                      >
                        <option value="Dr. Sarah Chen, Medical Aesthetician">Dr. Sarah Chen, Medical Aesthetician</option>
                        <option value="Lauren Hayes, Lead Dermal Specialist">Lauren Hayes, Lead Dermal Specialist</option>
                        <option value="First Available Senior Clinician">First Available Senior Clinician</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#665a53] mb-1.5">
                          Date
                        </label>
                        <select
                          value={bookingForm.date}
                          onChange={(e) => setBookingForm((prev) => ({ ...prev, date: e.target.value }))}
                          className="w-full rounded-xl border border-[#ebdcd2] bg-[#fcfaf7] px-3.5 py-2.5 text-xs font-semibold text-[#282320] focus:border-[#a47777] focus:outline-none"
                        >
                          <option value="Thursday, May 28">Thursday, May 28</option>
                          <option value="Friday, May 29">Friday, May 29</option>
                          <option value="Saturday, May 30">Saturday, May 30</option>
                          <option value="Monday, June 1">Monday, June 1</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-[#665a53] mb-1.5">
                          Time Slot
                        </label>
                        <select
                          value={bookingForm.time}
                          onChange={(e) => setBookingForm((prev) => ({ ...prev, time: e.target.value }))}
                          className="w-full rounded-xl border border-[#ebdcd2] bg-[#fcfaf7] px-3.5 py-2.5 text-xs font-semibold text-[#282320] focus:border-[#a47777] focus:outline-none"
                        >
                          <option value="10:00 AM">10:00 AM (Morning)</option>
                          <option value="11:30 AM">11:30 AM</option>
                          <option value="2:00 PM">2:00 PM (Afternoon)</option>
                          <option value="4:30 PM">4:30 PM</option>
                          <option value="6:00 PM">6:00 PM (Evening)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setBookingForm((prev) => ({ ...prev, isConfirmed: true }))}
                      className="w-full rounded-full bg-[#a47777] py-3.5 text-xs font-bold uppercase tracking-wider text-white shadow-md hover:bg-[#8e6060] transition active:scale-95"
                    >
                      Confirm Appointment Request
                    </button>
                    <p className="text-[10px] text-center text-[#665a53] flex items-center justify-center gap-1">
                      <Lock className="h-3 w-3" /> Zero payment taken now. Pay at completion.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ── PATIENT EXPERIENCES & REVIEWS ─────────────────────────────────── */}
      <section id="reviews" className="py-20 md:py-28 bg-[#fcfaf7]">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-14">
            <span className="text-xs font-black uppercase tracking-[0.25em] text-[#a47777]">
              Verified Patient Journeys
            </span>
            <h2 className="mt-2 font-serif text-3xl sm:text-5xl font-normal tracking-tight text-[#282320]">
              Real barrier transformations.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {patientTestimonials.map((t) => (
              <div
                key={t.name}
                className="flex flex-col justify-between rounded-3xl border border-[#ebdcd2] bg-white p-7 shadow-xs"
              >
                <div>
                  <div className="flex text-[#a47777] mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#a47777]" />
                    ))}
                  </div>
                  <p className="text-sm font-medium leading-relaxed italic text-[#282320]">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 border-t border-[#ebdcd2] pt-4">
                  <p className="font-serif text-base font-bold text-[#282320]">{t.name}</p>
                  <p className="text-xs text-[#a47777] font-semibold">{t.treatment}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── REFINED CLINICAL FOOTER ────────────────────────────────────────── */}
      <footer className="border-t border-[#ebdcd2] bg-[#282320] py-14 text-white">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <p className="font-serif text-2xl font-normal tracking-widest uppercase text-white">
                Velvet Skin Clinic
              </p>
              <p className="mt-3 max-w-sm text-xs leading-relaxed text-white/70">
                Evidence-led clinical dermatology, bespoke barrier facials, and calming treatment sanctuaries.
              </p>
              <div className="mt-5">
                <Link
                  to="/beauty"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#e8c7bb] hover:underline"
                >
                  <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                  <span>Return to 100Web Beauty Showcase</span>
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#e8c7bb]">Hours</p>
              <div className="mt-3 space-y-1 text-xs text-white/70">
                <p className="font-semibold text-white">Monday – Friday</p>
                <p>9:00 AM – 7:00 PM</p>
                <p className="mt-2 font-semibold text-white">Saturday</p>
                <p>10:00 AM – 4:00 PM</p>
                <p className="mt-2 text-white/40">Sunday Closed</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#e8c7bb]">Location</p>
              <div className="mt-3 space-y-1 text-xs text-white/70">
                <p>118 Linden Avenue, Suite 204</p>
                <p>SoHo Medical Arts District</p>
                <p>New York, NY 10012</p>
                <p className="mt-2 text-white font-semibold">(212) 555-0182</p>
                <p>concierge@velvetskinclinic.com</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#e8c7bb]">Treatments</p>
              <ul className="mt-3 space-y-1.5 text-xs text-white/70 font-semibold">
                <li><a href="#treatments" className="hover:text-white transition">Bespoke Barrier Facial</a></li>
                <li><a href="#treatments" className="hover:text-white transition">Mandelic Cellular Peel</a></li>
                <li><a href="#treatments" className="hover:text-white transition">Medical LED Recovery</a></li>
                <li><a href="#treatments" className="hover:text-white transition">Micro-Current Lift</a></li>
                <li><a href="#diagnostic" className="hover:text-white transition">Skin Diagnostic Finder</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
            <p>© {new Date().getFullYear()} Velvet Skin Clinic · 100Web Portfolio</p>
            <p>Built with React 19, Tailwind CSS & Vite</p>
          </div>
        </Container>
      </footer>
    </main>
  );
}
