import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Coffee,
  Headphones,
  Menu,
  Phone,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Star,
  Tv,
  X,
} from "lucide-react";
import { Container } from "../../components";
import { imageUrl } from "../../assets/optimized";

// Navigation links for ScrollSpy
const navLinks = [
  { label: "Services", href: "#studio-bento", id: "studio-bento" },
  { label: "Smile Reveal", href: "#smile-reveal", id: "smile-reveal" },
  { label: "Sensory Spa", href: "#sensory-spa", id: "sensory-spa" },
  { label: "Pricing & Copay", href: "#pricing-calc", id: "pricing-calc" },
  { label: "Dentists", href: "#dentists", id: "dentists" },
  { label: "Reviews", href: "#reviews", id: "reviews" },
  { label: "FAQ", href: "#faq", id: "faq" },
];

// Insurance providers list
const insuranceProviders = [
  { name: "Delta Dental Premier & PPO", coverage: "100% Preventive / 80% Basic", tier: "In-Network" },
  { name: "MetLife Dental", coverage: "100% Preventive / 80% Basic", tier: "In-Network" },
  { name: "Aetna Dental PPO", coverage: "100% Preventive / 80% Basic", tier: "In-Network" },
  { name: "Cigna Total Dental Choice", coverage: "100% Preventive / 80% Basic", tier: "In-Network" },
  { name: "Guardian Any Doctor", coverage: "100% Preventive / 80% Basic", tier: "In-Network" },
  { name: "United Concordia", coverage: "100% Preventive / 80% Basic", tier: "In-Network" },
  { name: "Humana Dental PPO", coverage: "100% Preventive / 70% Basic", tier: "In-Network" },
  { name: "Blue Cross Blue Shield Dental", coverage: "100% Preventive / 80% Basic", tier: "In-Network" },
  { name: "No Insurance (NorthStar VIP Club)", coverage: "Flat 25% Off All Care + Free Cleanings", tier: "Membership" },
];

// Treatment pricing calculation items
interface PricingItem {
  id: string;
  name: string;
  category: string;
  standardPrice: number;
  insuranceEstimate: number;
  vipPrice: number;
  monthlyPlan: number;
  duration: string;
  description: string;
}

const treatmentCatalog: PricingItem[] = [
  {
    id: "preventive",
    name: "Comprehensive Exam, 3D Scan & Hygiene",
    category: "Preventive",
    standardPrice: 285,
    insuranceEstimate: 0,
    vipPrice: 0,
    monthlyPlan: 25,
    duration: "60 mins",
    description: "Includes putty-free iTero 3D digital scan, low-radiation x-rays, ultrasonic airflow cleaning, and oral cancer screening.",
  },
  {
    id: "whitening",
    name: "Philips Zoom Laser In-Office Whitening",
    category: "Cosmetic",
    standardPrice: 495,
    insuranceEstimate: 495,
    vipPrice: 349,
    monthlyPlan: 32,
    duration: "75 mins",
    description: "Up to 8 shades whiter in a single visit with anti-sensitivity post-treatment varnish and take-home touch-up kit.",
  },
  {
    id: "emergency",
    name: "Same-Day Emergency Relief & Digital X-Ray",
    category: "Emergency",
    standardPrice: 195,
    insuranceEstimate: 35,
    vipPrice: 120,
    monthlyPlan: 18,
    duration: "45 mins",
    description: "Immediate triage for severe toothache, chipped tooth, swollen gums, or lost crown with pain management.",
  },
  {
    id: "invisalign",
    name: "Invisalign Clear Aligners (Full Course)",
    category: "Cosmetic",
    standardPrice: 4200,
    insuranceEstimate: 2700,
    vipPrice: 3500,
    monthlyPlan: 119,
    duration: "4-9 months",
    description: "Custom invisible trays, unlimited refinement aligners, 3D smile outcome preview, and complimentary final whitening.",
  },
  {
    id: "porcelain-veneer",
    name: "Handcrafted Porcelain Veneer (Per Tooth)",
    category: "Cosmetic",
    standardPrice: 1250,
    insuranceEstimate: 1250,
    vipPrice: 990,
    monthlyPlan: 89,
    duration: "2 visits",
    description: "Ultra-thin custom porcelain crafted in our studio lab for flawless shape, alignment, and luminous shade matching.",
  },
  {
    id: "dental-implant",
    name: "Precision Titanium Implant & Crown",
    category: "Restorative",
    standardPrice: 2800,
    insuranceEstimate: 1400,
    vipPrice: 2200,
    monthlyPlan: 145,
    duration: "3 visits",
    description: "Computer-guided implant placement with durable zirconia crown that looks and chews exactly like a natural tooth.",
  },
];

// Clinical team
const clinicalTeam = [
  {
    name: "Dr. Marcus Morgan, DDS",
    role: "Cosmetic & Implant Surgeon",
    education: "NYU College of Dentistry · Fellow ICOI",
    experience: "14+ Years",
    tagline: "Minimally invasive smile design and precision implantology.",
    image: "medical/northstar/dental-team.webp",
    badges: ["3D Guided Surgery", "Veneer Specialist", "Sedation Certified"],
    bio: "Dr. Morgan specializes in full-arch aesthetic restorations and anxiety-free sedation dentistry, having perfected over 2,400 smile makeovers.",
  },
  {
    name: "Dr. Alana Brooks, DMD",
    role: "Restorative & Family Dental Director",
    education: "Harvard School of Dental Medicine",
    experience: "11+ Years",
    tagline: "Biological dentistry and gentle pain-free care.",
    image: "medical/northstar/hero.webp",
    badges: ["Harvard Dental Honors", "Biomimetic Care", "Invisalign Platinum"],
    bio: "Dedicated to preserving natural tooth structure using advanced biomimetic bonding techniques and calm, empathetic care.",
  },
  {
    name: "Nina Patel, RDH, BSDH",
    role: "Lead Dental Hygienist & Wellness Director",
    education: "UNC Chapel Hill School of Dentistry",
    experience: "9+ Years",
    tagline: "Ultrasonic airflow therapy with zero discomfort.",
    image: "medical/northstar/cleaning-care.webp",
    badges: ["Airflow Master", "Gentle Scaling", "Microbiome Focused"],
    bio: "Nina transforms routine hygiene visits into refreshing spa sessions using Swiss EMS AirFlow warm-water aerosol polishing.",
  },
];

// Patient reviews
const patientReviews = [
  {
    id: 1,
    patient: "Claire Vance",
    type: "Cosmetic Veneers",
    rating: 5,
    time: "2 days ago",
    comment:
      "I had crippling dental anxiety for 10 years. NorthStar felt completely different — Bose headphones, Netflix on the ceiling, zero judgment, and literally zero pain. My smile looks unbelievable.",
    verified: "Verified Studio Patient",
  },
  {
    id: 2,
    patient: "Julian Ramos",
    type: "Emergency Extraction & Implant",
    rating: 5,
    time: "1 week ago",
    comment:
      "Broke a molar eating lunch. Got a same-day chair at 2 PM. Dr. Morgan numbed me completely painlessly with their wand laser and fixed it in 40 minutes. Truly elite care.",
    verified: "Verified Emergency Visit",
  },
  {
    id: 3,
    patient: "Sophia Lin",
    type: "Routine Hygiene & Invisalign",
    rating: 5,
    time: "2 weeks ago",
    comment:
      "Zero wait time. They handed me an iced matcha while I checked in on an iPad, and the 3D scan replaced that terrible gaggy putty. 10/10 recommend.",
    verified: "Verified PPO Member",
  },
];

// Interactive FAQ items
const faqItems = [
  {
    question: "How does NorthStar eliminate dental anxiety and pain?",
    answer:
      "We replace old dental dread with a spa atmosphere: computerized local anesthesia wands (no painful needle sting), noise-cancelling Bose headsets, 4K ceiling screens with streaming entertainment, heated massage chairs, and optional conscious nitrous sedation for complete tranquility.",
    category: "Comfort",
  },
  {
    question: "Do you still use gooey trays for dental impressions?",
    answer:
      "Never. We are 100% putty-free. We use the iTero Element 5D digital laser scanner to capture over 6,000 frames per second of your mouth in under 90 seconds. You see a full 3D interactive model of your teeth in real time on screen.",
    category: "Technology",
  },
  {
    question: "How much will my appointment cost with dental insurance?",
    answer:
      "If you have a PPO plan (Delta, MetLife, Aetna, Cigna, Guardian, BCBS, etc.), your routine twice-yearly exam, x-rays, and standard cleaning are typically 100% covered with a $0 copay. We verify your insurance in real time before your chair time so you have zero surprise bills.",
    category: "Insurance",
  },
  {
    question: "What if I don't have dental insurance?",
    answer:
      "We offer the NorthStar Dental Membership Club: for a simple monthly fee ($29/mo), you receive 2 free comprehensive cleanings per year, all digital x-rays, emergency exams, and a flat 20-30% discount on all cosmetic, restorative, and surgical treatments.",
    category: "Insurance",
  },
  {
    question: "Can I be seen today for a dental emergency?",
    answer:
      "Yes! We reserve dedicated emergency chair blocks every morning and afternoon. Call our direct emergency line at (555) 018-7442 or select 'Emergency Pain' in our online scheduler for immediate same-day triage.",
    category: "Emergency",
  },
];

export function NorthStarDental() {
  const [activeSection, setActiveSection] = useState<string>("studio-bento");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Before & After Smile Reveal State (0 to 100)
  const [revealPosition, setRevealPosition] = useState<number>(50);
  const [activeShade, setActiveShade] = useState<"BL1" | "BL2" | "A1" | "Natural">("BL1");

  // Pricing Calculator State
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string>("preventive");
  const [selectedInsurance, setSelectedInsurance] = useState<string>("Delta Dental Premier & PPO");

  // Booking Modal State
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [bookingTreatment, setBookingTreatment] = useState<string>("Routine Exam & 3D Scan");
  const [bookingDoctor, setBookingDoctor] = useState<string>("First Available Doctor");
  const [bookingDay, setBookingDay] = useState<string>("Today (Emergency / Priority)");
  const [bookingSlot, setBookingSlot] = useState<string>("10:30 AM");
  const [patientName, setPatientName] = useState<string>("");
  const [patientPhone, setPatientPhone] = useState<string>("");
  const [patientInsurance, setPatientInsurance] = useState<string>("");
  const [bookingSubmitted, setBookingSubmitted] = useState<boolean>(false);

  // FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Quick helper for calculating dynamic copay
  const currentTreatment = treatmentCatalog.find((t) => t.id === selectedTreatmentId) || treatmentCatalog[0];
  const isNoInsurance = selectedInsurance.includes("No Insurance");
  const estimatedPatientCopay = isNoInsurance
    ? currentTreatment.vipPrice
    : currentTreatment.insuranceEstimate;
  const estimatedSavings = isNoInsurance
    ? currentTreatment.standardPrice - currentTreatment.vipPrice
    : currentTreatment.standardPrice - currentTreatment.insuranceEstimate;

  // ScrollSpy listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const element = document.getElementById(link.id);
        if (element) {
          const top = element.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile Drawer Lifecycle: Body scroll lock & Escape key dismiss
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  // Automatically dismiss mobile drawer when resizing up to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <main className="min-h-screen bg-[#07131b] font-sans text-slate-100 antialiased selection:bg-cyan-500 selection:text-white">
      {/* ========================================================================= */}
      {/* 1. ARCHITECTURAL FLOATING CAPSULE NAVBAR                                  */}
      {/* ========================================================================= */}
      <div className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 md:px-6 pt-2 sm:pt-4 pointer-events-none">
        <div className="mx-auto max-w-7xl">
          <header className="pointer-events-auto relative flex items-center justify-between rounded-full border border-white/10 bg-[#091a26]/90 px-3 py-2 sm:px-5 sm:py-2.5 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl transition-all duration-300">
            {/* Studio Brand Identity */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link
                to="/"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-teal-400 text-[#07131b] shadow-md shadow-cyan-500/20 transition-transform hover:scale-105 active:scale-95"
                title="Return to Directory"
              >
                <Sparkles size={16} strokeWidth={2.5} className="sm:w-[18px] sm:h-[18px]" />
              </Link>
              <a href="#hero" className="flex flex-col">
                <span className="text-xs sm:text-sm font-black tracking-wider text-white flex items-center gap-1">
                  NORTHSTAR <span className="text-cyan-400 font-light hidden min-[380px]:inline">STUDIO</span>
                </span>
                <span className="text-[9px] uppercase font-semibold tracking-widest text-cyan-200/60 hidden md:inline">
                  Architectural Dental Care
                </span>
              </a>
            </div>

            {/* Desktop Capsule Navigation Links with ScrollSpy */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 rounded-full bg-white/5 p-1 border border-white/5 mx-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative rounded-full px-2.5 py-1 text-[11px] xl:px-3.5 xl:py-1.5 xl:text-xs font-semibold tracking-wide whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-cyan-500 to-teal-400 text-[#07131b] shadow-sm font-bold"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Emergency Hotline & Book Appointment */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              {/* Full phone pill on large desktop */}
              <a
                href="tel:5550187442"
                className="hidden xl:flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-3 py-1.5 text-xs font-bold text-rose-300 hover:bg-rose-500/20 transition-colors"
                title="Immediate Dental Emergency Assistance"
              >
                <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-ping" />
                <span>(555) 018-7442</span>
              </a>

              {/* Compact phone button on sm to lg screens */}
              <a
                href="tel:5550187442"
                className="hidden sm:flex xl:hidden items-center justify-center h-8 w-8 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-300 hover:bg-rose-500/20 transition-colors"
                title="Call Emergency Dental Line"
              >
                <Phone size={14} />
              </a>

              {/* Chair Reservation CTA */}
              <button
                type="button"
                onClick={() => {
                  setBookingStep(1);
                  setBookingSubmitted(false);
                  setIsBookingOpen(true);
                }}
                className="flex items-center gap-1 rounded-full bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-extrabold text-[#07131b] shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Calendar size={13} strokeWidth={2.5} className="sm:w-[14px] sm:h-[14px]" />
                <span className="hidden min-[400px]:inline">Reserve Chair</span>
                <span className="min-[400px]:hidden">Book</span>
              </button>

              {/* Mobile & Tablet Menu Hamburger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 hover:bg-white/10 lg:hidden transition-colors"
              >
                {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </header>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE SLIDE-OVER DRAWER                                                  */}
      {/* ========================================================================= */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md lg:hidden flex justify-end transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-xs sm:max-w-sm h-full bg-[#081722] border-l border-white/10 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-teal-400 text-[#07131b]">
                    <Sparkles size={16} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black tracking-wider text-white">
                      NORTHSTAR <span className="text-cyan-400 font-light">STUDIO</span>
                    </span>
                    <span className="text-[9px] uppercase font-semibold text-cyan-200/60">
                      Menu Directory
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-slate-300 hover:text-white transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-1.5">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-semibold transition-all ${
                        isActive
                          ? "bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-bold"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight size={14} className={isActive ? "text-cyan-400" : "text-slate-500"} />
                    </a>
                  );
                })}
              </div>

              {/* Quick Action: Book Chair */}
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setBookingStep(1);
                  setBookingSubmitted(false);
                  setIsBookingOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 py-3 text-xs font-black text-[#07131b] shadow-lg shadow-cyan-500/20"
              >
                <Calendar size={14} strokeWidth={2.5} />
                <span>Reserve Studio Chair</span>
              </button>

              {/* Emergency Hotline Banner */}
              <div className="rounded-2xl border border-rose-500/30 bg-rose-500/10 p-4 space-y-2">
                <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                  <span className="flex h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                  24/7 Dental Emergency
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Severe tooth pain, cracked molar, or lost crown? We hold reserve chair slots every day.
                </p>
                <a
                  href="tel:5550187442"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-rose-600 py-2.5 text-xs font-bold text-white hover:bg-rose-500 transition-colors"
                >
                  <Phone size={14} /> Call (555) 018-7442
                </a>
              </div>
            </div>

            <div className="pt-5 border-t border-white/10 text-center text-[11px] text-slate-400 space-y-1">
              <p className="text-white font-medium">410 Northstar Ave, Suite 300</p>
              <p className="text-cyan-400 font-semibold">Mon-Sat · 7:30 AM - 7:00 PM</p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. BOUTIQUE ARCHITECTURAL HERO SECTION                                   */}
      {/* ========================================================================= */}
      <section id="hero" className="relative pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
        {/* Ambient Light Orbs */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-cyan-500/10 blur-[140px]" />
        <div className="pointer-events-none absolute top-1/3 -left-40 h-[400px] w-[400px] rounded-full bg-teal-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-[120px]" />

        <Container>
          {/* Editorial Top Eyebrow Pill */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold tracking-wider uppercase text-cyan-300 backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
              Next-Gen Studio Dental
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/20 bg-amber-400/10 px-3.5 py-1.5 text-xs font-semibold text-amber-300">
              <Star size={13} className="fill-amber-300 text-amber-300" />
              4.98 Rating · 1,200+ Verified Patient Reviews
            </span>
            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs text-slate-300">
              <ShieldCheck size={13} className="text-emerald-400" />
              In-Network with 95% PPO Plans
            </span>
          </div>

          {/* Bold Editorial Headline */}
          <div className="mx-auto max-w-4xl text-center space-y-6">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
              Dental Care Reimagined as an{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
                Elevated Spa Experience.
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
              Pain-free 3D digital impressions, ceiling entertainment, noise-cancelling Bose headsets, and master cosmetic craftsmanship — with zero wait time.
            </p>

            {/* Quick Hero Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => {
                  setBookingStep(1);
                  setBookingSubmitted(false);
                  setIsBookingOpen(true);
                }}
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 px-8 py-4 text-base font-black text-[#07131b] shadow-xl shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all"
              >
                <Calendar size={18} strokeWidth={2.5} />
                <span>Reserve Your Studio Chair</span>
                <ArrowRight size={18} />
              </button>

              <a
                href="#smile-reveal"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-6 py-4 text-base font-bold text-white hover:bg-white/10 transition-all backdrop-blur-md"
              >
                <Sparkles size={18} className="text-cyan-400" />
                <span>Try Smile Transformation Simulator</span>
              </a>
            </div>

            {/* Quick Micro Guarantees */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-y-2 gap-x-6 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Zero Putty (100% 3D Scans)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Computerized Painless Numbing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>Same-Day Emergency Relief</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 size={14} className="text-cyan-400" />
                <span>$0 Copay on Most PPO Cleanings</span>
              </div>
            </div>
          </div>

          {/* Hero Architectural Visual Stage */}
          <div className="mt-12 sm:mt-16 relative mx-auto max-w-6xl">
            {/* Visual Frame */}
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-2 sm:p-3 shadow-2xl shadow-cyan-950/50 backdrop-blur-xl">
              <div className="relative h-[360px] sm:h-[480px] lg:h-[580px] w-full overflow-hidden rounded-2xl">
                <img
                  src={imageUrl("medical/northstar/hero.webp")}
                  alt="NorthStar Modern Dental Suite"
                  className="h-full w-full object-cover object-center transition-transform duration-700 hover:scale-105"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07131b] via-transparent to-black/30" />

                {/* Floating Interactive Hotspots */}
                <div className="absolute top-6 left-6 hidden sm:flex items-center gap-3 rounded-2xl border border-white/20 bg-[#091a26]/90 p-3 shadow-xl backdrop-blur-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-400">
                    <Tv size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Ceiling 4K Entertainment</p>
                    <p className="text-[11px] text-slate-300">Netflix, HBO & nature audio in chair</p>
                  </div>
                </div>

                <div className="absolute top-6 right-6 hidden sm:flex items-center gap-3 rounded-2xl border border-white/20 bg-[#091a26]/90 p-3 shadow-xl backdrop-blur-md">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-400">
                    <Headphones size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Bose Noise Cancelling</p>
                    <p className="text-[11px] text-slate-300">Blocks 100% of clinical dental sounds</p>
                  </div>
                </div>

                {/* Bottom Live Clinic Status Card */}
                <div className="absolute bottom-4 left-4 right-4 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-2xl border border-white/15 bg-[#091a26]/95 p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
                  <div className="flex items-center gap-3.5">
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-300">
                      <Sparkles size={24} />
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-extrabold text-white">Studio Chair Status: Live</span>
                        <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-500/30">
                          ON TIME · ZERO WAIT
                        </span>
                      </div>
                      <p className="text-xs text-slate-300">
                        2 Reserve emergency chairs open today · Average check-in wait: 4 minutes
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => {
                        setBookingTreatment("Same-Day Emergency Relief");
                        setBookingStep(1);
                        setIsBookingOpen(true);
                      }}
                      className="flex-1 sm:flex-none text-center rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2.5 text-xs font-bold text-cyan-300 hover:bg-cyan-500/20 transition-colors"
                    >
                      Instant Triage Check
                    </button>
                    <a
                      href="tel:5550187442"
                      className="flex items-center justify-center gap-1.5 rounded-xl bg-cyan-500 px-4 py-2.5 text-xs font-bold text-[#07131b] hover:bg-cyan-400 transition-colors"
                    >
                      <Phone size={14} /> Call Front Desk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. BENTO GRID OF HIGH-ARTISTRY SERVICES                                   */}
      {/* ========================================================================= */}
      <section id="studio-bento" className="py-20 sm:py-28 relative bg-[#061017]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/10 via-transparent to-transparent" />
        
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-14 sm:mb-20">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-cyan-400">
              Curated Treatment Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              State-of-the-Art Dental Artistry, Organized as a Modern Bento.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Every procedure engineered for minimal invasiveness, maximum longevity, and zero physical pain.
            </p>
          </div>

          {/* The Bento Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
            {/* Bento 1 (Large - 7 cols): Porcelain Veneers & Cosmetic Smile Makeover */}
            <div className="md:col-span-7 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a1e2b] to-[#071520] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
              <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                <Sparkles size={160} className="text-cyan-400" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-300 border border-cyan-500/30">
                    Cosmetic Flagship
                  </span>
                  <span className="text-xs text-slate-400">Handcrafted in Studio Lab</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Hand-Layered Porcelain Veneers & Smile Makeovers
                </h3>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Ultra-thin custom porcelain shells tailored to your facial symmetry. We preview your final smile in 3D before a single tooth is touched. No unnatural bulky chiclet teeth.
                </p>

                {/* Shade Swatch Preview Interactive */}
                <div className="pt-2">
                  <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                    Studio Ceramic Shade Matching:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {[
                      { code: "BL1", name: "Radiant Hollywood", hex: "#ffffff" },
                      { code: "BL2", name: "Natural Bleach", hex: "#faf8f5" },
                      { code: "A1", name: "Luminous Ivory", hex: "#f5f2eb" },
                      { code: "Natural", name: "Subtle Warm Pearl", hex: "#eee8dc" },
                    ].map((shade) => (
                      <button
                        key={shade.code}
                        type="button"
                        onClick={() => setActiveShade(shade.code as any)}
                        className={`flex items-center gap-2 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                          activeShade === shade.code
                            ? "border-2 border-cyan-400 bg-white/10 text-white shadow-md shadow-cyan-500/20"
                            : "border border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        <span
                          className="h-3 w-3 rounded-full border border-slate-300"
                          style={{ backgroundColor: shade.hex }}
                        />
                        <span>{shade.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 relative z-10">
                <div className="text-xs text-slate-300 space-y-0.5">
                  <p className="font-bold text-white">Duration: 2 visits</p>
                  <p className="text-cyan-300">Includes trial smile & digital photography</p>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    setBookingTreatment("Handcrafted Porcelain Veneer");
                    setBookingStep(1);
                    setIsBookingOpen(true);
                  }}
                  className="rounded-xl bg-white px-5 py-2.5 text-xs font-extrabold text-[#07131b] hover:bg-cyan-300 transition-colors"
                >
                  Consult Smile Makeover
                </button>
              </div>
            </div>

            {/* Bento 2 (5 cols): Putty-Free 3D Diagnostics & Airflow Hygiene */}
            <div className="md:col-span-5 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a1e2b] to-[#071520] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group hover:border-teal-500/40 transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-teal-500/20 px-3 py-1 text-xs font-bold text-teal-300 border border-teal-500/30">
                    Hygiene Revolution
                  </span>
                  <span className="text-xs text-emerald-400 font-semibold">$0 Copay with PPO</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  Swiss AirFlow® Gentle Hygiene & 3D Scanning
                </h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  No painful metal scraping or choking impression putty. We use warm water and micronized erythritol powder to effortlessly sweep away staining, plaque, and biofilm.
                </p>

                <div className="rounded-2xl bg-white/5 border border-white/10 p-3 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 size={14} className="text-teal-400" />
                    <span>iTero 5D scan detects hidden cavities without radiation</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-200">
                    <CheckCircle2 size={14} className="text-teal-400" />
                    <span>Warm water flow safe for sensitive gums & porcelain</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Duration: 60 mins</span>
                <button
                  type="button"
                  onClick={() => {
                    setBookingTreatment("Routine Exam & 3D Scan");
                    setBookingStep(1);
                    setIsBookingOpen(true);
                  }}
                  className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-xs font-bold text-white hover:bg-white/10"
                >
                  Book Clean & Scan
                </button>
              </div>
            </div>

            {/* Bento 3 (4 cols): Same-Day Emergency Relief */}
            <div className="md:col-span-4 rounded-3xl border border-rose-500/30 bg-gradient-to-br from-[#1c0e14] to-[#0d070a] p-6 flex flex-col justify-between relative overflow-hidden group hover:border-rose-500/60 transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-rose-500/20 px-3 py-1 text-xs font-bold text-rose-300 border border-rose-500/30 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-ping" />
                    Emergency Hotline
                  </span>
                  <span className="text-xs text-rose-400 font-bold">Today</span>
                </div>
                <h3 className="text-xl font-black text-white">Same-Day Emergency Pain Relief</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Severe toothache, cracked molar, broken filling, or abscess? We treat you the exact day you call with computerized pain-free anesthesia.
                </p>
                <div className="text-xs text-rose-300/90 font-medium">
                  Direct line to on-call surgeon: <span className="font-bold underline">(555) 018-7442</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-rose-500/20 flex items-center justify-between">
                <span className="text-xs text-slate-400">Fast 45-min triage</span>
                <a
                  href="tel:5550187442"
                  className="rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-500"
                >
                  Call Immediate Relief
                </a>
              </div>
            </div>

            {/* Bento 4 (4 cols): Invisalign Clear Aligners */}
            <div className="md:col-span-4 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a1e2b] to-[#071520] p-6 flex flex-col justify-between relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-bold text-cyan-300 border border-cyan-500/30">
                    Orthodontics
                  </span>
                  <span className="text-xs text-slate-400">Platinum Provider</span>
                </div>
                <h3 className="text-xl font-black text-white">Invisalign® Studio Aligners</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Straighten your teeth without metal wires. Preview your predicted straight smile in 90 seconds using our 3D outcome simulator.
                </p>
                <div className="text-xs text-cyan-300 font-semibold">
                  Includes free laser whitening upon completion ($495 value)
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">From $119/mo</span>
                <button
                  type="button"
                  onClick={() => {
                    setBookingTreatment("Invisalign Clear Aligners");
                    setBookingStep(1);
                    setIsBookingOpen(true);
                  }}
                  className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-xs font-bold text-white hover:bg-white/10"
                >
                  3D Scan Preview
                </button>
              </div>
            </div>

            {/* Bento 5 (4 cols): Precision Guided Implants */}
            <div className="md:col-span-4 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a1e2b] to-[#071520] p-6 flex flex-col justify-between relative overflow-hidden group hover:border-emerald-500/40 transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-bold text-emerald-300 border border-emerald-500/30">
                    Restorative
                  </span>
                  <span className="text-xs text-slate-400">Lifetime Warranty</span>
                </div>
                <h3 className="text-xl font-black text-white">Computer-Guided Implants</h3>
                <p className="text-slate-300 text-xs leading-relaxed">
                  Permanently replace missing or failing teeth. 3D surgical guide ensures sub-millimeter precision with minimal healing downtime.
                </p>
                <div className="text-xs text-emerald-300 font-semibold">
                  Custom milled zirconia crown matches adjacent teeth seamlessly
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400">Single & Full Arch</span>
                <button
                  type="button"
                  onClick={() => {
                    setBookingTreatment("Precision Titanium Implant");
                    setBookingStep(1);
                    setIsBookingOpen(true);
                  }}
                  className="rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-xs font-bold text-white hover:bg-white/10"
                >
                  Implant Consult
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE BEFORE & AFTER SMILE REVEAL SLIDER                         */}
      {/* ========================================================================= */}
      <section id="smile-reveal" className="py-20 sm:py-28 relative bg-[#07131b] border-t border-b border-white/10">
        <Container>
          <div className="mx-auto max-w-4xl text-center space-y-4 mb-12">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-cyan-300">
              Interactive Patient Results
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Slide to Reveal the Transformation.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Drag the interactive slider below to witness the real transition from aged, discolored enamel to our custom handcrafted porcelain veneer smile.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            {/* Interactive Before/After Visual Frame */}
            <div className="relative overflow-hidden rounded-3xl border-2 border-white/20 bg-[#091a26] shadow-2xl select-none">
              {/* Image Container with Slider Reveal */}
              <div className="relative h-[340px] sm:h-[480px] w-full overflow-hidden">
                {/* AFTER Image (Full Layer) */}
                <img
                  src={imageUrl("medical/northstar/cosmetic-dentistry.webp")}
                  alt="After Porcelain Veneer Makeover"
                  className="absolute inset-0 h-full w-full object-cover object-center"
                />
                <div className="absolute bottom-6 right-6 z-20 rounded-xl bg-cyan-950/85 border border-cyan-500/40 px-4 py-2 text-xs font-black uppercase tracking-wider text-cyan-300 backdrop-blur-md">
                  After · NorthStar Studio Veneers ({activeShade})
                </div>

                {/* BEFORE Image (Clipped by Reveal Percentage) */}
                <div
                  className="absolute inset-0 overflow-hidden border-r-2 border-white shadow-2xl transition-none"
                  style={{ width: `${revealPosition}%` }}
                >
                  <img
                    src={imageUrl("medical/northstar/dental-checkup.webp")}
                    alt="Before Treatment"
                    className="absolute inset-0 h-full max-w-none object-cover object-center filter saturate-75 brightness-90"
                    style={{ width: "100%", minWidth: "100%" }}
                  />
                  <div className="absolute bottom-6 left-6 z-20 rounded-xl bg-black/85 border border-white/20 px-4 py-2 text-xs font-black uppercase tracking-wider text-amber-300 backdrop-blur-md">
                    Before Treatment (Discolored Enamel)
                  </div>
                </div>

                {/* Draggable Divider Handle Line */}
                <div
                  className="absolute top-0 bottom-0 z-30 w-1 bg-white cursor-ew-resize flex items-center justify-center -ml-0.5"
                  style={{ left: `${revealPosition}%` }}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#07131b] shadow-2xl font-black text-xs border-2 border-cyan-500">
                    ⇄
                  </div>
                </div>
              </div>

              {/* Slider Control Bar */}
              <div className="p-6 bg-[#0a1e2b] border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-3 w-full sm:w-2/3">
                  <span className="text-xs font-bold text-amber-300 uppercase tracking-wider whitespace-nowrap">
                    Before
                  </span>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={revealPosition}
                    onChange={(e) => setRevealPosition(Number(e.target.value))}
                    aria-label="Drag to compare before and after dental treatment"
                    className="w-full accent-cyan-400 cursor-pointer h-2 rounded-lg bg-white/20"
                  />
                  <span className="text-xs font-bold text-cyan-300 uppercase tracking-wider whitespace-nowrap">
                    After
                  </span>
                </div>

                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <span className="text-xs text-slate-300">Transformation: {revealPosition}%</span>
                  <button
                    type="button"
                    onClick={() => setRevealPosition(50)}
                    className="rounded-lg border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-slate-300 hover:bg-white/10 flex items-center gap-1"
                  >
                    <RotateCcw size={12} /> Reset
                  </button>
                </div>
              </div>
            </div>

            {/* Micro Details under reveal */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-black text-cyan-400">100%</p>
                <p className="text-xs text-slate-300 font-semibold">Custom Ceramic Shading</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-black text-teal-400">0.3 mm</p>
                <p className="text-xs text-slate-300 font-semibold">Ultra-Conservative Enamel Prep</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-2xl font-black text-emerald-400">15+ Yrs</p>
                <p className="text-xs text-slate-300 font-semibold">Expected Longevity with Proper Care</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. THE SENSORY SPA EXPERIENCE ("WHY WE DONT FEEL LIKE A DENTIST")         */}
      {/* ========================================================================= */}
      <section id="sensory-spa" className="py-20 sm:py-28 relative bg-[#061017]">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-teal-300">
              Sensory Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Designed Around Your Five Senses.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Traditional dental clinics smell like acrylic, buzz like power drills, and cause stress. We redesigned every sensory touchpoint from scratch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Sight */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0a1e2b] to-[#07131b] p-6 space-y-4 hover:border-cyan-400/40 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-400">
                <Tv size={24} />
              </div>
              <h3 className="text-xl font-black text-white">1. Sight · 4K Ceilings</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Look up and immerse yourself in streaming Netflix, calming nature documentaries, or live concert audio while our doctors work silently below.
              </p>
              <div className="rounded-xl bg-white/5 p-3 text-[11px] text-cyan-300 font-semibold border border-white/5">
                No blinding fluorescent glare in your eyes
              </div>
            </div>

            {/* Sound */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0a1e2b] to-[#07131b] p-6 space-y-4 hover:border-teal-400/40 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/20 text-teal-400">
                <Headphones size={24} />
              </div>
              <h3 className="text-xl font-black text-white">2. Sound · Bose Audio</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                QuietComfort® active noise cancelling headsets completely isolate drill pitch and clinical sounds with your chosen Spotify playlist or white noise.
              </p>
              <div className="rounded-xl bg-white/5 p-3 text-[11px] text-teal-300 font-semibold border border-white/5">
                Zero clinical drill frequencies audible
              </div>
            </div>

            {/* Scent & Atmosphere */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0a1e2b] to-[#07131b] p-6 space-y-4 hover:border-emerald-400/40 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-400">
                <Sparkles size={24} />
              </div>
              <h3 className="text-xl font-black text-white">3. Scent · Pure Botanicals</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Custom diffusers disperse calming notes of organic lavender, sandalwood, and eucalyptus throughout the suite. Say goodbye to the chemical dental smell.
              </p>
              <div className="rounded-xl bg-white/5 p-3 text-[11px] text-emerald-300 font-semibold border border-white/5">
                Aromatherapy warm towel post-visit
              </div>
            </div>

            {/* Taste & Comfort */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0a1e2b] to-[#07131b] p-6 space-y-4 hover:border-amber-400/40 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 text-amber-400">
                <Coffee size={24} />
              </div>
              <h3 className="text-xl font-black text-white">4. Taste · Beverage Bar</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Enjoy chilled sparkling water, ceremonial matcha, or fresh cold brew while checking in. Receive lip hydration balm before any lengthy cosmetic visit.
              </p>
              <div className="rounded-xl bg-white/5 p-3 text-[11px] text-amber-300 font-semibold border border-white/5">
                Heated ergonomic massage recliners
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. TRANSPARENT PRICING & REAL-TIME INSURANCE ESTIMATOR                     */}
      {/* ========================================================================= */}
      <section id="pricing-calc" className="py-20 sm:py-28 relative bg-[#07131b] border-t border-white/10">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-cyan-300">
              Radical Price Transparency
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Real-Time Insurance & Copay Calculator.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              No hidden facility fees or surprise bills in the mail. Select your procedure and insurance plan to see your projected out-of-pocket cost before you book.
            </p>
          </div>

          {/* Calculator Layout */}
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/15 bg-gradient-to-br from-[#091a26] to-[#061017] p-6 sm:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Column: Selectors */}
              <div className="lg:col-span-7 space-y-6">
                {/* 1. Treatment Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2">
                    1. Select Dental Service
                  </label>
                  <div className="space-y-2">
                    {treatmentCatalog.map((item) => {
                      const isSelected = item.id === selectedTreatmentId;
                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setSelectedTreatmentId(item.id)}
                          className={`w-full flex items-center justify-between p-3.5 rounded-2xl text-left border transition-all ${
                            isSelected
                              ? "border-cyan-400 bg-cyan-500/15 text-white shadow-lg shadow-cyan-950/40"
                              : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                          }`}
                        >
                          <div className="space-y-0.5">
                            <p className="text-sm font-bold text-white">{item.name}</p>
                            <p className="text-xs text-slate-400">{item.duration} · {item.category}</p>
                          </div>
                          <div className="text-right">
                            <span className="text-sm font-black text-cyan-300">
                              ${item.standardPrice}
                            </span>
                            <p className="text-[10px] text-slate-400">standard fee</p>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Insurance Provider Selector */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-cyan-300 mb-2">
                    2. Select Dental Insurance Carrier
                  </label>
                  <div className="relative">
                    <select
                      value={selectedInsurance}
                      onChange={(e) => setSelectedInsurance(e.target.value)}
                      className="w-full rounded-2xl border border-white/20 bg-[#07131b] px-4 py-3 text-sm text-white focus:border-cyan-400 focus:outline-none"
                    >
                      {insuranceProviders.map((prov) => (
                        <option key={prov.name} value={prov.name}>
                          {prov.name} ({prov.tier})
                        </option>
                      ))}
                    </select>
                  </div>
                  <p className="mt-2 text-xs text-slate-400">
                    Can't find your insurance? We accept all major PPO dental plans with out-of-network benefits.
                  </p>
                </div>
              </div>

              {/* Right Column: Live Estimate Voucher Receipt */}
              <div className="lg:col-span-5 rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#0d2333] to-[#081724] p-6 flex flex-col justify-between shadow-xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between pb-4 border-b border-white/10">
                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-300">
                      Estimated Cost Breakdown
                    </span>
                    <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-[10px] font-bold text-emerald-300">
                      Real-Time Verification
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-base font-extrabold text-white">
                      {currentTreatment.name}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {currentTreatment.description}
                    </p>
                  </div>

                  <div className="rounded-2xl bg-black/40 border border-white/10 p-4 space-y-3 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>Standard Practice Fee:</span>
                      <span className="text-slate-200 line-through">${currentTreatment.standardPrice}</span>
                    </div>
                    <div className="flex justify-between text-emerald-400 font-semibold">
                      <span>Insurance / VIP Allowance:</span>
                      <span>-${estimatedSavings}</span>
                    </div>
                    <div className="border-t border-white/10 pt-2 flex justify-between items-baseline">
                      <span className="font-extrabold text-white text-sm">Estimated Copay:</span>
                      <span className="text-2xl font-black text-cyan-300">
                        ${estimatedPatientCopay}
                      </span>
                    </div>
                  </div>

                  {/* Monthly Financing Option */}
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3 flex items-center justify-between text-xs">
                    <div>
                      <p className="font-bold text-white">0% APR Financing Option</p>
                      <p className="text-slate-400 text-[11px]">Via CareCredit or Cherry</p>
                    </div>
                    <div className="text-right font-black text-cyan-300 text-sm">
                      ${currentTreatment.monthlyPlan}/mo
                    </div>
                  </div>
                </div>

                <div className="pt-6">
                  <button
                    type="button"
                    onClick={() => {
                      setBookingTreatment(currentTreatment.name);
                      setBookingStep(1);
                      setIsBookingOpen(true);
                    }}
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 py-3.5 text-sm font-black text-[#07131b] hover:scale-105 transition-all shadow-lg"
                  >
                    <span>Reserve with Estimated Copay</span>
                    <ArrowRight size={16} />
                  </button>
                  <p className="mt-2 text-center text-[10px] text-slate-400">
                    Final benefits verified directly with your carrier prior to treatment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. CLINICAL MASTERS (DOCTOR PROFILES)                                     */}
      {/* ========================================================================= */}
      <section id="dentists" className="py-20 sm:py-28 relative bg-[#061017]">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-teal-300">
              Pedigree & Clinical Mastery
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              World-Class Dentists. Zero Ego.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Trained at top tier medical institutions, holding fellowship honors, and dedicated to compassionate, gentle bedside manner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {clinicalTeam.map((doctor) => (
              <div
                key={doctor.name}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0a1e2b] to-[#07131b] overflow-hidden flex flex-col justify-between group hover:border-cyan-400/40 transition-all duration-300 shadow-xl"
              >
                <div>
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-800">
                    <img
                      src={imageUrl(doctor.image)}
                      alt={doctor.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1e2b] via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-1.5">
                      {doctor.badges.map((badge) => (
                        <span
                          key={badge}
                          className="rounded-full bg-black/70 border border-white/20 px-2.5 py-0.5 text-[10px] font-bold text-cyan-300 backdrop-blur-md"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-xl font-black text-white">{doctor.name}</h3>
                      <p className="text-xs font-bold text-cyan-400">{doctor.role}</p>
                      <p className="text-xs text-slate-400 mt-0.5">{doctor.education}</p>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{doctor.bio}</p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-white/10 mt-4 flex items-center justify-between">
                  <span className="text-xs text-slate-400 font-semibold">Exp: {doctor.experience}</span>
                  <button
                    type="button"
                    onClick={() => {
                      setBookingDoctor(doctor.name);
                      setBookingStep(1);
                      setIsBookingOpen(true);
                    }}
                    className="rounded-xl border border-cyan-400/40 bg-cyan-500/10 px-4 py-2 text-xs font-bold text-cyan-300 hover:bg-cyan-500/20"
                  >
                    Book with {doctor.name.split(" ")[1]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. INSTANT 3-STEP ONLINE BOOKING SUITE                                    */}
      {/* ========================================================================= */}
      <section id="booking-suite" className="py-20 sm:py-28 relative bg-[#07131b] border-t border-white/10">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-cyan-300">
              Frictionless Scheduling
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Reserve Your Chair in Under 60 Seconds.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Select your procedure, choose your preferred doctor, and claim your morning or afternoon studio slot.
            </p>
          </div>

          <div className="mx-auto max-w-3xl rounded-3xl border border-white/15 bg-gradient-to-b from-[#091a26] to-[#071520] p-6 sm:p-10 shadow-2xl">
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10 text-xs">
              <div
                className={`flex items-center gap-2 font-bold ${
                  bookingStep >= 1 ? "text-cyan-400" : "text-slate-500"
                }`}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 border border-current text-xs">
                  1
                </span>
                <span>Visit & Doctor</span>
              </div>
              <div className="h-0.5 w-8 bg-white/10" />
              <div
                className={`flex items-center gap-2 font-bold ${
                  bookingStep >= 2 ? "text-cyan-400" : "text-slate-500"
                }`}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 border border-current text-xs">
                  2
                </span>
                <span>Date & Time</span>
              </div>
              <div className="h-0.5 w-8 bg-white/10" />
              <div
                className={`flex items-center gap-2 font-bold ${
                  bookingStep >= 3 ? "text-cyan-400" : "text-slate-500"
                }`}
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/10 border border-current text-xs">
                  3
                </span>
                <span>Your Details</span>
              </div>
            </div>

            {/* Step 1: Visit Reason & Doctor */}
            {bookingStep === 1 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Select Your Reason for Visit
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "Routine Exam & 3D Scan",
                      "Same-Day Emergency Relief",
                      "Philips Zoom Laser Whitening",
                      "Invisalign Clear Aligners",
                      "Handcrafted Porcelain Veneer",
                      "Implant & Restorative Consult",
                    ].map((reason) => (
                      <button
                        key={reason}
                        type="button"
                        onClick={() => setBookingTreatment(reason)}
                        className={`p-3 rounded-xl text-left text-xs font-bold border transition-all ${
                          bookingTreatment === reason
                            ? "border-cyan-400 bg-cyan-500/20 text-white"
                            : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        {reason}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Select Clinical Provider
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {[
                      "First Available Doctor (Fastest)",
                      "Dr. Marcus Morgan, DDS (Cosmetics)",
                      "Dr. Alana Brooks, DMD (Family/Restorative)",
                      "Nina Patel, RDH (Gentle Hygiene)",
                    ].map((doc) => (
                      <button
                        key={doc}
                        type="button"
                        onClick={() => setBookingDoctor(doc)}
                        className={`p-3 rounded-xl text-left text-xs font-bold border transition-all ${
                          bookingDoctor === doc
                            ? "border-cyan-400 bg-cyan-500/20 text-white"
                            : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        {doc}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setBookingStep(2)}
                    className="flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 text-xs font-black text-[#07131b] hover:bg-cyan-300"
                  >
                    <span>Choose Time Slot</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Date & Slots */}
            {bookingStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Select Day
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {[
                      "Today (Priority Chair)",
                      "Tomorrow",
                      "Wednesday",
                      "Thursday",
                      "Friday",
                      "Saturday Morning",
                      "Next Monday",
                      "Next Tuesday",
                    ].map((day) => (
                      <button
                        key={day}
                        type="button"
                        onClick={() => setBookingDay(day)}
                        className={`p-3 rounded-xl text-center text-xs font-bold border transition-all ${
                          bookingDay === day
                            ? "border-cyan-400 bg-cyan-500/20 text-white"
                            : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        {day}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                    Select Available Time Slot
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                    {[
                      "8:00 AM",
                      "9:15 AM",
                      "10:30 AM",
                      "11:45 AM",
                      "1:15 PM",
                      "2:30 PM",
                      "3:45 PM",
                      "5:00 PM",
                      "6:15 PM",
                    ].map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setBookingSlot(slot)}
                        className={`p-2.5 rounded-xl text-center text-xs font-bold border transition-all ${
                          bookingSlot === slot
                            ? "border-cyan-400 bg-cyan-500/20 text-white"
                            : "border-white/10 bg-white/5 text-slate-300 hover:bg-white/10"
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setBookingStep(1)}
                    className="text-xs text-slate-400 hover:text-white"
                  >
                    ← Back to Visit Type
                  </button>
                  <button
                    type="button"
                    onClick={() => setBookingStep(3)}
                    className="flex items-center gap-2 rounded-2xl bg-cyan-400 px-6 py-3 text-xs font-black text-[#07131b] hover:bg-cyan-300"
                  >
                    <span>Enter Patient Info</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Patient Info */}
            {bookingStep === 3 && (
              <div className="space-y-6">
                {!bookingSubmitted ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setBookingSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Full Legal Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={patientName}
                          onChange={(e) => setPatientName(e.target.value)}
                          placeholder="e.g. Jordan Miller"
                          className="w-full rounded-xl border border-white/20 bg-[#07131b] px-4 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-300 mb-1">
                          Mobile Phone Number (for SMS confirmation) *
                        </label>
                        <input
                          type="tel"
                          required
                          value={patientPhone}
                          onChange={(e) => setPatientPhone(e.target.value)}
                          placeholder="(555) 000-0000"
                          className="w-full rounded-xl border border-white/20 bg-[#07131b] px-4 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">
                        Dental Insurance Plan (or specify "No Insurance / Self Pay")
                      </label>
                      <input
                        type="text"
                        value={patientInsurance}
                        onChange={(e) => setPatientInsurance(e.target.value)}
                        placeholder="e.g. Delta Dental Premier or Aetna PPO"
                        className="w-full rounded-xl border border-white/20 bg-[#07131b] px-4 py-2.5 text-xs text-white focus:border-cyan-400 focus:outline-none"
                      />
                    </div>

                    <div className="rounded-2xl bg-cyan-950/40 border border-cyan-500/30 p-4 text-xs space-y-1.5">
                      <div className="flex justify-between text-slate-300">
                        <span>Selected Treatment:</span>
                        <span className="font-bold text-white">{bookingTreatment}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Doctor / Hygienist:</span>
                        <span className="font-bold text-white">{bookingDoctor}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Date & Time:</span>
                        <span className="font-bold text-cyan-300">{bookingDay} · {bookingSlot}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setBookingStep(2)}
                        className="text-xs text-slate-400 hover:text-white"
                      >
                        ← Back to Date
                      </button>
                      <button
                        type="submit"
                        className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 to-emerald-400 px-8 py-3.5 text-xs font-black text-[#07131b] shadow-lg shadow-cyan-500/20 hover:scale-105"
                      >
                        <CheckCircle2 size={16} />
                        <span>Confirm Appointment Reservation</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  /* Confirmed Voucher Pass */
                  <div className="text-center py-6 space-y-4">
                    <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                      <CheckCircle2 size={36} strokeWidth={2.5} />
                    </div>
                    <h3 className="text-2xl font-black text-white">Studio Chair Confirmed!</h3>
                    <p className="text-xs text-slate-300 max-w-md mx-auto">
                      Thank you, {patientName || "valued patient"}! A digital check-in link and calendar invite have been sent to {patientPhone || "your phone"}.
                    </p>

                    <div className="mx-auto max-w-md rounded-2xl bg-white/5 border border-white/10 p-5 text-left text-xs space-y-2">
                      <div className="flex justify-between text-slate-300">
                        <span>Treatment:</span>
                        <span className="font-bold text-white">{bookingTreatment}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Provider:</span>
                        <span className="font-bold text-white">{bookingDoctor}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Reserved Time:</span>
                        <span className="font-bold text-cyan-400">{bookingDay} at {bookingSlot}</span>
                      </div>
                      <div className="flex justify-between text-slate-300">
                        <span>Studio Suite:</span>
                        <span className="font-bold text-white">410 Northstar Ave, 3rd Floor</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => {
                        setBookingSubmitted(false);
                        setBookingStep(1);
                      }}
                      className="rounded-xl border border-white/20 bg-white/5 px-6 py-2.5 text-xs font-bold text-white hover:bg-white/10"
                    >
                      Book Another Visit
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. VERIFIED PATIENT REVIEWS & GOOGLE WALL                                  */}
      {/* ========================================================================= */}
      <section id="reviews" className="py-20 sm:py-28 relative bg-[#061017]">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-amber-300">
              Honest Feedback
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Loved by Those Who Used to Dread the Dentist.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Over 1,200 verified five-star reviews from patients who switched to NorthStar Studio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {patientReviews.map((rev) => (
              <div
                key={rev.id}
                className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0a1e2b] to-[#07131b] p-6 space-y-4 shadow-xl flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[11px] text-slate-400">{rev.time}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-200 leading-relaxed italic">
                    "{rev.comment}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-bold text-white">{rev.patient}</p>
                    <p className="text-[10px] text-cyan-400">{rev.type}</p>
                  </div>
                  <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 text-[9px] font-bold text-emerald-300 border border-emerald-500/30">
                    {rev.verified}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 10. INTERACTIVE FAQ ACCORDION                                             */}
      {/* ========================================================================= */}
      <section id="faq" className="py-20 sm:py-28 relative bg-[#07131b] border-t border-white/10">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase text-cyan-300">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Frequently Asked Questions.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Everything you need to know about our comfort amenities, billing, and scheduling.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={item.question}
                  className="rounded-2xl border border-white/10 bg-gradient-to-r from-[#0a1e2b] to-[#071520] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-white hover:text-cyan-300 transition-colors"
                  >
                    <span>{item.question}</span>
                    <span
                      className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-cyan-300 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <ChevronDown size={14} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-3">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 11. LUXURY FOOTER                                                         */}
      {/* ========================================================================= */}
      <footer className="bg-[#050c12] border-t border-white/10 py-16 text-slate-400 text-xs">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-black text-base">
                <Sparkles size={18} className="text-cyan-400" />
                <span>NORTHSTAR STUDIO DENTAL</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Elevating oral healthcare through precision 3D technology, zero-fear sensory comfort, and master cosmetic artistry.
              </p>
              <div className="text-cyan-400 font-semibold">
                (555) 018-7442 · concierge@northstardental.com
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-bold uppercase tracking-wider text-white">Studio Location</p>
              <p className="leading-relaxed">
                NorthStar Plaza Suite 300<br />
                410 Northstar Avenue<br />
                Metropolitan District, MD 20852
              </p>
              <p className="text-emerald-400">Complimentary 2-hour validated parking garage</p>
            </div>

            <div className="space-y-3">
              <p className="font-bold uppercase tracking-wider text-white">Studio Hours</p>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Monday – Thursday:</span>
                  <span className="text-white">7:30 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday:</span>
                  <span className="text-white">7:30 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">8:30 AM – 2:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-rose-400">Emergency On-Call</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-bold uppercase tracking-wider text-white">Quick Access</p>
              <div className="flex flex-col space-y-1.5">
                <a href="#studio-bento" className="hover:text-cyan-300">Curated Bento Treatments</a>
                <a href="#smile-reveal" className="hover:text-cyan-300">Smile Transformation Reveal</a>
                <a href="#pricing-calc" className="hover:text-cyan-300">Insurance & Copay Calculator</a>
                <a href="#booking-suite" className="hover:text-cyan-300">Reserve Online Chair</a>
                <Link to="/" className="text-cyan-400 hover:underline">← Back to 100Web Directory</Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} NorthStar Studio Dental Care, PLLC. All Rights Reserved.</p>
            <div className="flex gap-4">
              <span>HIPAA Compliant</span>
              <span>ADA Accredited</span>
              <span>Biomimetic Certified</span>
            </div>
          </div>
        </Container>
      </footer>

      {/* ========================================================================= */}
      {/* 12. FLOATING MOBILE CONCIERGE DOCK                                        */}
      {/* ========================================================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#081722]/95 border-t border-white/10 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl sm:hidden">
        <div className="flex items-center gap-2">
          <a
            href="tel:5550187442"
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-rose-500/40 bg-rose-500/10 py-2.5 text-xs font-bold text-rose-300 active:scale-95"
          >
            <Phone size={14} />
            <span>Emergency Call</span>
          </a>

          <button
            type="button"
            onClick={() => {
              setBookingStep(1);
              setBookingSubmitted(false);
              setIsBookingOpen(true);
            }}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 py-2.5 text-xs font-black text-[#07131b] shadow-md shadow-cyan-500/25 active:scale-95"
          >
            <Calendar size={14} strokeWidth={2.5} />
            <span>Book Chair</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 13. QUICK BOOKING POPUP MODAL (ACCESSIBLE ANYWHERE)                       */}
      {/* ========================================================================= */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl border border-white/20 bg-[#091a26] p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              type="button"
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-white"
            >
              <X size={20} />
            </button>

            <div className="mb-4">
              <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">
                Direct Studio Concierge
              </span>
              <h3 className="text-xl font-black text-white mt-1">
                Reserve Studio Appointment
              </h3>
            </div>

            <div className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-bold mb-1">Reason for Visit</label>
                <select
                  value={bookingTreatment}
                  onChange={(e) => setBookingTreatment(e.target.value)}
                  className="w-full rounded-xl border border-white/20 bg-[#07131b] px-3 py-2.5 text-white"
                >
                  <option value="Routine Exam & 3D Scan">Routine Exam & 3D Scan</option>
                  <option value="Same-Day Emergency Relief">Same-Day Emergency Relief</option>
                  <option value="Philips Zoom Laser Whitening">Philips Zoom Laser Whitening</option>
                  <option value="Invisalign Clear Aligners">Invisalign Clear Aligners</option>
                  <option value="Handcrafted Porcelain Veneer">Handcrafted Porcelain Veneer</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Preferred Doctor</label>
                <select
                  value={bookingDoctor}
                  onChange={(e) => setBookingDoctor(e.target.value)}
                  className="w-full rounded-xl border border-white/20 bg-[#07131b] px-3 py-2.5 text-white"
                >
                  <option value="First Available Doctor">First Available Doctor (Fastest)</option>
                  <option value="Dr. Marcus Morgan, DDS">Dr. Marcus Morgan, DDS</option>
                  <option value="Dr. Alana Brooks, DMD">Dr. Alana Brooks, DMD</option>
                  <option value="Nina Patel, RDH">Nina Patel, RDH</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Full Name</label>
                  <input
                    type="text"
                    value={patientName}
                    onChange={(e) => setPatientName(e.target.value)}
                    placeholder="Your Name"
                    className="w-full rounded-xl border border-white/20 bg-[#07131b] px-3 py-2.5 text-white"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Phone Number</label>
                  <input
                    type="tel"
                    value={patientPhone}
                    onChange={(e) => setPatientPhone(e.target.value)}
                    placeholder="(555) 000-0000"
                    className="w-full rounded-xl border border-white/20 bg-[#07131b] px-3 py-2.5 text-white"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsBookingOpen(false);
                    const el = document.getElementById("booking-suite");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-teal-400 py-3 text-xs font-black text-[#07131b] hover:scale-105 transition-all shadow-md"
                >
                  Proceed to Time Slot Selection
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
