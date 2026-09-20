import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Award,
  Calendar,
  CalendarCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  FileText,
  Heart,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  UserCheck,
  Video,
  X,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container } from "../../components";
import { imageUrl } from "../../assets/optimized";

const navLinks = [
  { label: "Services", href: "#services", id: "services" },
  { label: "Care Finder", href: "#care-finder", id: "care-finder" },
  { label: "How It Works", href: "#how-it-works", id: "how-it-works" },
  { label: "Patient Hub", href: "#patient-hub", id: "patient-hub" },
  { label: "Telehealth", href: "#telehealth", id: "telehealth" },
  { label: "Care Team", href: "#care-team", id: "care-team" },
  { label: "Insurance", href: "#insurance", id: "insurance" },
  { label: "Reviews", href: "#reviews", id: "reviews" },
  { label: "FAQ", href: "#faq", id: "faq" },
];

const trustBadges = [
  { label: "Same-week appointments", icon: CalendarCheck, desc: "Fast booking without weeks of delay" },
  { label: "Secure virtual telehealth", icon: Video, desc: "Meet your doctor from phone or laptop" },
  { label: "Plain-language doctor summaries", icon: MessageCircle, desc: "Clear care instructions you actually understand" },
  { label: "Direct patient messaging", icon: ShieldCheck, desc: "Care team responses within 2 hours" },
];

interface ServiceItem {
  id: string;
  title: string;
  category: "preventive" | "acute" | "virtual" | "plans";
  text: string;
  icon: LucideIcon;
  image: string;
  duration: string;
  insuranceNote: string;
  highlights: string[];
}

const services: ServiceItem[] = [
  {
    id: "preventive",
    title: "Comprehensive Preventive Visits",
    category: "preventive",
    text: "Unhurried annual checkups, biometrics, preventative cancer screenings, and wellness conversations explained in everyday language.",
    icon: Heart,
    image: "medical/harbor/preventive-care.webp",
    duration: "45–60 min visit",
    insuranceNote: "100% covered under most ACA plans",
    highlights: [
      "Head-to-toe clinical assessment & vitals",
      "Age-appropriate screening schedule",
      "Personalized preventive roadmap",
    ],
  },
  {
    id: "same-week",
    title: "Same-Week Acute Care",
    category: "acute",
    text: "Fast support for sudden illness, ear & sinus infections, minor injuries, rash evaluations, and urgent medication refills.",
    icon: Stethoscope,
    image: "medical/harbor/same-week-care.webp",
    duration: "20–30 min visit",
    insuranceNote: "Standard primary care co-pay",
    highlights: [
      "Guaranteed slots reserved daily",
      "Point-of-care rapid testing available",
      "Digital prescription sent to your pharmacy",
    ],
  },
  {
    id: "telehealth",
    title: "Secure Telehealth Visits",
    category: "virtual",
    text: "HD encrypted virtual consultations from your home, car, or office for follow-ups, test reviews, mild symptoms, and mental health check-ins.",
    icon: Video,
    image: "medical/harbor/telehealth.webp",
    duration: "20–30 min visit",
    insuranceNote: "Same co-pay as in-person",
    highlights: [
      "No app download required (browser link)",
      "Secure HIPAA-compliant encrypted video",
      "Ideal for quick medication & lab follow-ups",
    ],
  },
  {
    id: "plans",
    title: "Chronic Care & Health Roadmaps",
    category: "plans",
    text: "Tailored continuous guidance for high blood pressure, cholesterol, diabetes prevention, thyroid management, and metabolic vitality.",
    icon: Activity,
    image: "medical/harbor/health-plan.webp",
    duration: "45 min visit",
    insuranceNote: "In-network chronic care coverage",
    highlights: [
      "Realistic lifestyle & nutrition goals",
      "Ongoing lab milestone tracking",
      "Coordinated specialist referrals",
    ],
  },
  {
    id: "labs",
    title: "Diagnostic Labs & Screenings",
    category: "preventive",
    text: "In-house blood draws and screening coordination with plain-English result summaries delivered straight to your patient app.",
    icon: FileText,
    image: "medical/harbor/doctor-consultation.webp",
    duration: "15 min draw / 30 min consult",
    insuranceNote: "Billed directly to your insurance",
    highlights: [
      "Gentle phlebotomists on staff",
      "Turnaround usually within 24–48 hours",
      "Clear doctor notes on what every value means",
    ],
  },
  {
    id: "coordination",
    title: "Post-Visit Support & Coordination",
    category: "plans",
    text: "No patient left wondering what happens next. Clear follow-up reminders, therapy referrals, imaging scheduling, and check-in calls.",
    icon: UserCheck,
    image: "medical/harbor/patient-support.webp",
    duration: "Ongoing care support",
    insuranceNote: "Included for all Harbor patients",
    highlights: [
      "Dedicated nurse care coordinator",
      "Proactive follow-up at day 3 and day 14",
      "Direct messaging with your medical team",
    ],
  },
];

const careFinderOptions = [
  {
    symptom: "Annual Physical / Wellness Check",
    type: "Preventive Comprehensive Visit",
    format: "In-Person Preferred",
    duration: "45 mins",
    targetService: "preventive",
    tip: "Bring any current medication bottles and immunization history.",
  },
  {
    symptom: "Cough, Cold, Flu or Sore Throat",
    type: "Same-Week Urgent Illness Visit",
    format: "In-Person or Virtual",
    duration: "25 mins",
    targetService: "same-week",
    tip: "Same-day rapid flu/COVID/strep swabs available in clinic.",
  },
  {
    symptom: "Blood Pressure or Blood Sugar Review",
    type: "Chronic Care & Metabolic Review",
    format: "In-Person or Virtual",
    duration: "30 mins",
    targetService: "plans",
    tip: "Log your blood pressure readings for 3 days before the visit.",
  },
  {
    symptom: "Medication Refill or Adjustment",
    type: "Telehealth Medication Consult",
    format: "Virtual Telehealth",
    duration: "20 mins",
    targetService: "telehealth",
    tip: "Prescriptions routed directly to your neighborhood pharmacy.",
  },
  {
    symptom: "Unexplained Fatigue or Routine Labs",
    type: "Diagnostic Lab Work & Physician Review",
    format: "In-Person Lab + Review",
    duration: "30 mins",
    targetService: "labs",
    tip: "Fasting may be recommended depending on required panels.",
  },
];

const steps = [
  {
    step: "01",
    title: "Reserve Your Slot in 2 Minutes",
    text: "Select in-person or telehealth, choose your doctor, and lock in an exact appointment window without waiting on hold.",
    badge: "Zero Phone Tag",
    image: "medical/harbor/mobile-scheduling.webp",
  },
  {
    step: "02",
    title: "Meet with an Unhurried Clinician",
    text: "Enjoy a calm 30 to 60-minute visit where your questions are heard, your concerns are explored, and jargon is translated into clear English.",
    badge: "Real Doctor Time",
    image: "medical/harbor/doctor-consultation.webp",
  },
  {
    step: "03",
    title: "Leave with an Actionable Care Roadmap",
    text: "Receive digital visit summaries, prescriptions sent automatically to your pharmacy, and clear next steps logged in your patient portal.",
    badge: "Never Left Guessing",
    image: "medical/harbor/health-plan.webp",
  },
];

const providers = [
  {
    name: "Dr. Maya Reynolds, MD",
    role: "Lead Family Medicine Physician",
    credentials: "Board Certified in Family Medicine · Johns Hopkins Alum",
    experience: "12+ years clinical experience",
    rating: "4.96",
    reviewsCount: "284 verified patients",
    specialties: ["Preventive Health", "Women's Wellness", "Cardiovascular Risk Reduction"],
    bio: "Dr. Reynolds is known for her calm, attentive listening style. She partners with patients to craft sustainable daily health habits that prevent illness before it starts.",
    availability: "Available Thursday & Friday",
  },
  {
    name: "Dr. Aaron Patel, MD",
    role: "Internal Medicine Specialist",
    credentials: "Board Certified in Internal Medicine · Stanford Health Alum",
    experience: "10+ years hospital & clinic practice",
    rating: "4.94",
    reviewsCount: "310 verified patients",
    specialties: ["Metabolic Health", "Hypertension & Diabetes", "Complex Diagnoses"],
    bio: "Dr. Patel combines thorough diagnostic analysis with empathetic patient communication, ensuring you leave every appointment understanding the 'why' behind every test.",
    availability: "Available Tomorrow & Wednesday",
  },
  {
    name: "Lena Brooks, FNP-C",
    role: "Family Nurse Practitioner",
    credentials: "Certified Nurse Practitioner · UCLA School of Nursing",
    experience: "8+ years in primary & acute care",
    rating: "4.98",
    reviewsCount: "196 verified patients",
    specialties: ["Same-Week Acute Care", "Wellness Screenings", "Lifestyle & Nutrition"],
    bio: "Lena delivers compassionate, highly responsive same-week care. Patients consistently praise her thoroughness, clear discharge instructions, and warm demeanor.",
    availability: "Available Today for Telehealth & Walk-In",
  },
];

const reviews = [
  {
    name: "Nora S.",
    role: "Patient since 2024",
    tag: "Preventive Care",
    stars: 5,
    quote:
      "Harbor Health completely changed my anxiety around doctor visits. Dr. Reynolds spent 45 unhurried minutes with me, walked through my bloodwork line-by-line, and the summary in my app was so easy to follow.",
  },
  {
    name: "Marcus T.",
    role: "Patient since 2023",
    tag: "Same-Week Care",
    stars: 5,
    quote:
      "Woke up with an awful chest cough and had an appointment scheduled for 11:30 AM the exact same day. The clinic is peaceful, check-in took 30 seconds on my phone, and prescription was sent immediately.",
  },
  {
    name: "Elena R.",
    role: "Patient since 2024",
    tag: "Telehealth Consult",
    stars: 5,
    quote:
      "Virtual visits here feel as personal and attentive as in-person appointments. No clunky software to download—just a link that worked right on my phone. Highly recommend to busy parents!",
  },
  {
    name: "David K.",
    role: "Patient since 2022",
    tag: "Chronic Care Management",
    stars: 5,
    quote:
      "Dr. Patel helped me get my blood pressure under control without putting me on five different medications. Their care coordination team checked in on me 2 weeks later to see how I was feeling.",
  },
];

const acceptedInsurances = [
  { name: "Blue Cross Blue Shield", status: "In-Network Preferred", copay: "$20–$35 copay" },
  { name: "Aetna PPO & POS", status: "In-Network Preferred", copay: "$20–$30 copay" },
  { name: "Cigna Healthcare", status: "In-Network Preferred", copay: "$25–$35 copay" },
  { name: "UnitedHealthcare Choice", status: "In-Network Preferred", copay: "$25–$40 copay" },
  { name: "Medicare Part B", status: "In-Network Participating", copay: "Standard 20% / Supplemental" },
  { name: "Humana Commercial & Advantage", status: "In-Network Preferred", copay: "$20–$30 copay" },
  { name: "Oscar Health", status: "In-Network Preferred", copay: "$25–$35 copay" },
  { name: "Self-Pay & Transparent Cash", status: "Transparent Flat-Rate", copay: "$125 Flat Visit Fee" },
];

const faqs = [
  {
    q: "How quickly can I be seen for an acute illness or concern?",
    a: "We reserve dedicated same-week and same-day appointment slots every morning for urgent symptoms like respiratory infections, fever, mild injuries, or sudden rashes. You can book directly online or call our intake desk at (555) 014-2840.",
  },
  {
    q: "How does your pricing and insurance coverage work?",
    a: "Harbor Health Clinic is an in-network preferred provider with major insurers including Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Medicare, and Oscar. Preventive annual checkups are typically covered at 100% with $0 out-of-pocket under ACA guidelines. For uninsured or out-of-network patients, we offer transparent flat-rate cash fees ($125 for a standard visit) with zero surprise facility bills.",
  },
  {
    q: "How does virtual telehealth work on my mobile phone or laptop?",
    a: "No software or app downloads are needed. When your appointment is scheduled, you receive a secure, HIPAA-compliant encrypted web link via text and email. Simply tap the link at appointment time to enter your private virtual consult room with your clinician.",
  },
  {
    q: "How do I access my lab results and after-visit care notes?",
    a: "Within 24 to 48 hours of your appointment or lab draw, your clinician reviews the findings and writes an easy-to-understand plain-English clinical note. This appears instantly in your Harbor Health Patient Portal, where you can also message your care team with follow-up questions.",
  },
  {
    q: "What should I bring with me to my first appointment?",
    a: "Please bring a government-issued photo ID, your insurance card (physical or digital), and either your current medication bottles or a quick list of prescriptions and supplements you take regularly. Arriving 10 minutes prior ensures our front team can welcome you smoothly.",
  },
  {
    q: "Can Harbor Health Clinic coordinate referrals to specialized doctors?",
    a: "Yes! If your health journey requires an MRI, ultrasound, cardiology consult, gastroenterology, or surgical evaluation, our dedicated care coordinator handles authorization paperwork and connects you directly with top regional specialists.",
  },
];

export function HarborHealthClinic() {
  // Interactive States
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedVisitType, setSelectedVisitType] = useState("Preventive Comprehensive Visit");
  const [selectedProvider, setSelectedProvider] = useState("Dr. Maya Reynolds, MD");
  const [selectedDay, setSelectedDay] = useState("Tomorrow (Tue)");
  const [selectedTime, setSelectedTime] = useState("10:15 AM");
  const [bookingName, setBookingName] = useState("");
  const [bookingPhone, setBookingPhone] = useState("");
  const [bookingEmail, setBookingEmail] = useState("");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  const [activeCategory, setActiveCategory] = useState<"all" | "preventive" | "acute" | "virtual" | "plans">("all");
  const [selectedSymptomIdx, setSelectedSymptomIdx] = useState(0);
  const [portalTab, setPortalTab] = useState<"summary" | "labs" | "roadmap" | "chat">("summary");
  const [activeInsuranceSearch, setActiveInsuranceSearch] = useState("");
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("services");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 160;

      // If near the bottom of page, activate the last visible nav item
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        setActiveSection(navLinks[navLinks.length - 1].id);
        return;
      }

      // Check sections in reverse from bottom to top
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const item = navLinks[i];
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(item.id);
            return;
          }
        }
      }

      // If above the first section (e.g. at the hero top), no link is active
      setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
        setIsBookingOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const filteredServices =
    activeCategory === "all"
      ? services
      : services.filter((s) => s.category === activeCategory);

  const filteredInsurances = acceptedInsurances.filter((ins) =>
    ins.name.toLowerCase().includes(activeInsuranceSearch.toLowerCase())
  );

  const handleStartBooking = (visitType?: string, provider?: string) => {
    if (visitType) setSelectedVisitType(visitType);
    if (provider) setSelectedProvider(provider);
    setBookingConfirmed(false);
    setBookingStep(1);
    setIsBookingOpen(true);
  };

  const handleConfirmBooking = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <main className="brand-motion relative min-h-screen bg-[#f8fafb] text-[#0f2835] antialiased selection:bg-[#0d9488] selection:text-white">
      {/* Top Utility Announcement Bar */}
      <div className="relative z-50 border-b border-teal-950/40 bg-[#061c27] px-3 py-1.5 sm:py-2 text-xs text-teal-100 sm:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2">
          {/* Left: Back to Directory & Live openings */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Link
              to="/medical"
              className="group inline-flex shrink-0 items-center gap-1 font-bold text-teal-300 transition hover:text-white"
            >
              <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-0.5" />
              <span className="hidden sm:inline">Medical Showcase</span>
              <span className="sm:hidden text-[11px]">Showcase</span>
            </Link>
            <span className="text-slate-600">|</span>
            <span className="inline-flex items-center gap-1.5 text-slate-300 text-[11px] sm:text-xs truncate">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400 shrink-0" />
              <span className="truncate">Same-week openings available</span>
            </span>
          </div>

          {/* Right: Phone & Hours */}
          <div className="flex shrink-0 items-center gap-2.5 sm:gap-4 text-xs">
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <Clock size={12} className="text-teal-400" />
              <span>Mon–Fri 8am–6pm</span>
            </span>
            <a
              href="tel:5550142840"
              className="inline-flex items-center gap-1 font-bold text-white transition hover:text-teal-300"
            >
              <Phone size={12} className="text-teal-400 shrink-0" />
              <span className="hidden sm:inline">(555) 014-2840</span>
              <span className="sm:hidden text-[11px]">Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/90 bg-white/95 backdrop-blur-md shadow-xs transition-all">
        <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-3.5 sm:px-6 lg:px-8">
          {/* Brand Logo & Name */}
          <a
            href="#"
            className="group flex items-center gap-2 sm:gap-2.5 transition shrink-0"
          >
            <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#0f766e] to-[#0d9488] text-white shadow-md shadow-teal-900/15 transition-transform group-hover:scale-105">
              <Heart size={18} className="fill-white/20 stroke-[2.2] sm:hidden" />
              <Heart size={20} className="fill-white/20 stroke-[2.2] hidden sm:block" />
            </div>
            <div>
              <div className="text-sm sm:text-base font-black tracking-tight text-[#0a2636] transition-colors group-hover:text-[#0f766e] leading-tight">
                Harbor Health
              </div>
              <div className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#0f766e] leading-none mt-0.5">
                Clinic & Telehealth
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links - Shown on xl (1280px+) so 9 links never collide */}
          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setActiveSection(link.id)}
                  className={`relative rounded-xl px-2.5 py-1.5 text-xs font-bold transition-all duration-200 ${
                    isActive
                      ? "active bg-teal-50 text-[#0f766e] font-black ring-1 ring-teal-200/80 shadow-xs"
                      : "text-slate-600 hover:bg-slate-100 hover:text-[#0f766e]"
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2.5 right-2.5 h-0.5 rounded-full bg-[#0f766e]" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* Direct Phone (Desktop & Tablet) */}
            <a
              href="tel:5550142840"
              className="hidden lg:inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50/80 px-3 py-1.5 sm:py-2 text-xs font-bold text-slate-700 transition hover:border-teal-300 hover:bg-teal-50 hover:text-[#0f766e]"
            >
              <Phone size={13} className="text-[#0f766e]" />
              <span>(555) 014-2840</span>
            </a>

            {/* Book Appointment CTA Button */}
            <button
              type="button"
              onClick={() => handleStartBooking()}
              className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-[#0f766e] to-[#0d9488] px-2.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold text-white shadow-md shadow-teal-900/15 transition hover:from-[#0d655e] hover:to-[#0b7c72] hover:-translate-y-0.5 active:translate-y-0 shrink-0"
            >
              <Calendar size={13} className="shrink-0" />
              <span>Book Visit</span>
            </button>

            {/* Mobile / Tablet Hamburger Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-xl border text-slate-700 transition xl:hidden shrink-0 active:scale-95 ${
                isMobileMenuOpen
                  ? "border-teal-300 bg-teal-50 text-[#0f766e]"
                  : "border-slate-200 bg-slate-50/90 hover:border-teal-200 hover:bg-teal-50 hover:text-[#0f766e]"
              }`}
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {isMobileMenuOpen && (
          <div className="xl:hidden">
            {/* Backdrop overlay covering the screen behind the dropdown */}
            <div
              className="fixed inset-0 top-14 sm:top-16 z-30 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-150"
              onClick={() => setIsMobileMenuOpen(false)}
              aria-hidden="true"
            />

            <div className="relative z-40 border-t border-slate-200 bg-white/98 px-3.5 sm:px-6 pt-3 pb-6 shadow-2xl backdrop-blur-xl max-h-[calc(100dvh-4rem)] overflow-y-auto overscroll-contain animate-in slide-in-from-top-2 duration-200">
              {/* Quick Action Buttons in Mobile Menu */}
              <div className="grid grid-cols-2 gap-2 mb-3">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleStartBooking();
                  }}
                  className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#0f766e] to-[#0d9488] py-2.5 text-xs font-bold text-white shadow-sm hover:from-[#0d655e] hover:to-[#0b7c72] active:scale-98 transition"
                >
                  <Calendar size={14} />
                  <span>Book Visit</span>
                </button>
                <a
                  href="tel:5550142840"
                  className="flex items-center justify-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 py-2.5 text-xs font-bold text-slate-800 hover:bg-teal-50 hover:border-teal-200 active:scale-98 transition"
                >
                  <Phone size={14} className="text-[#0f766e]" />
                  <span>(555) 014-2840</span>
                </a>
              </div>

              {/* Links List */}
              <div className="divide-y divide-slate-100 rounded-2xl border border-slate-200/80 bg-[#f8fafb] overflow-hidden shadow-xs">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => {
                        setActiveSection(link.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={`flex items-center justify-between px-4 py-3 text-xs font-bold transition ${
                        isActive
                          ? "active bg-teal-50 text-[#0f766e] font-black"
                          : "text-slate-700 hover:bg-white hover:text-[#0f766e]"
                      }`}
                    >
                      <span className="flex items-center gap-2">
                        {isActive && (
                          <span className="h-1.5 w-1.5 rounded-full bg-[#0f766e]" />
                        )}
                        <span>{link.label}</span>
                      </span>
                      {isActive ? (
                        <span className="flex items-center gap-1 rounded-full bg-[#0f766e] px-2 py-0.5 text-[10px] font-black text-white">
                          Active
                        </span>
                      ) : (
                        <ChevronRight size={14} className="text-slate-400" />
                      )}
                    </a>
                  );
                })}
              </div>

              {/* Clinic Info Footnote in Mobile Menu */}
              <div className="mt-3 rounded-xl border border-teal-100 bg-teal-50/70 p-3 text-[11px] text-teal-950">
                <div className="flex items-center gap-1.5 font-bold">
                  <MapPin size={12} className="text-[#0f766e] shrink-0" />
                  <span>123 Harbor Ave, Suite 200 · Harbor Point</span>
                </div>
                <div className="mt-1 text-slate-600">
                  Mon–Fri 8:00 AM – 6:00 PM · Walk-ins Welcome
                </div>
              </div>

              <div className="mt-3 text-center">
                <Link
                  to="/medical"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-flex items-center gap-1 text-[11px] font-bold text-slate-500 hover:text-[#0f766e] transition"
                >
                  <ArrowLeft size={11} />
                  <span>Back to All 10 Medical Concepts</span>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#051824] via-[#082637] to-[#061d2b] pt-10 pb-16 text-white sm:pt-14 sm:pb-20 lg:pt-16 lg:pb-24">
        {/* Soft Background Ambient Glows */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-40 -right-40 h-[650px] w-[650px] rounded-full bg-teal-500/15 blur-[140px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-0 -left-40 h-[550px] w-[550px] rounded-full bg-cyan-600/12 blur-[120px]"
        />
        <img
          src={imageUrl("medical/harbor/bg.webp")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-15 mix-blend-overlay"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#051824]/95 via-[#082637]/85 to-[#051824]/70" />

        <Container className="grid gap-10 lg:grid-cols-12 lg:items-center xl:gap-14">
          {/* Left Column: Headlines, Value Props & CTAs (5 cols on xl, 6 on lg) */}
          <div className="lg:col-span-6 xl:col-span-5">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-950/70 px-4 py-1.5 text-xs font-bold tracking-wide text-teal-200 shadow-inner backdrop-blur-md sm:text-sm">
              <Sparkles size={15} className="text-teal-400 shrink-0" />
              <span>Welcoming New Patients · Modern Neighborhood Care</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-5 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-[3.25rem] xl:text-[3.65rem] lg:leading-[1.1]">
              Primary care that makes every next step feel{" "}
              <span className="bg-gradient-to-r from-teal-300 via-teal-200 to-cyan-300 bg-clip-text text-transparent">
                calm & crystal clear.
              </span>
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-sm leading-relaxed text-slate-200/90 sm:text-base sm:leading-7 lg:text-lg lg:leading-8">
              Experience unhurried doctor visits, same-week acute appointments,
              seamless telehealth, and custom wellness plans. We replace clinical
              confusion with empathetic conversations and actionable health roadmaps.
            </p>

            {/* Primary Action Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => handleStartBooking()}
                className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-teal-500 px-7 py-3.5 text-base font-bold text-[#051c27] shadow-xl shadow-teal-500/25 transition-all hover:from-teal-300 hover:to-teal-400 hover:shadow-teal-400/35 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Calendar size={18} />
                <span>Book an Appointment</span>
              </button>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 text-base font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/18 hover:border-white/35"
              >
                <span>Explore Services</span>
                <ArrowRight size={17} />
              </a>
            </div>

            {/* Reassurance Micro-Strip */}
            <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-teal-200/90 font-medium">
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-teal-400 stroke-[2.5]" />
                <span>Same-week availability</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-teal-400 stroke-[2.5]" />
                <span>Major insurance accepted</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Check size={14} className="text-teal-400 stroke-[2.5]" />
                <span>Zero wait policy</span>
              </span>
            </div>

            {/* Quick Trust Strip */}
            <div className="mt-8 grid grid-cols-2 gap-2.5 pt-6 border-t border-white/15 sm:grid-cols-4">
              <div className="flex items-center gap-2.5 rounded-xl bg-white/5 p-2.5 border border-white/10 backdrop-blur-xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-500/20 text-teal-300">
                  <Star size={17} className="fill-teal-300" />
                </div>
                <div>
                  <div className="text-sm font-black text-white leading-tight">4.96 / 5.0</div>
                  <div className="text-[11px] text-slate-300">480+ Reviews</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xl bg-white/5 p-2.5 border border-white/10 backdrop-blur-xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-500/20 text-teal-300">
                  <Clock size={17} />
                </div>
                <div>
                  <div className="text-sm font-black text-white leading-tight">&lt; 15 Mins</div>
                  <div className="text-[11px] text-slate-300">Zero Wait Time</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xl bg-white/5 p-2.5 border border-white/10 backdrop-blur-xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-500/20 text-teal-300">
                  <ShieldCheck size={17} />
                </div>
                <div>
                  <div className="text-sm font-black text-white leading-tight">In-Network</div>
                  <div className="text-[11px] text-slate-300">Major Plans</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xl bg-white/5 p-2.5 border border-white/10 backdrop-blur-xs">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-500/20 text-teal-300">
                  <Video size={17} />
                </div>
                <div>
                  <div className="text-sm font-black text-white leading-tight">Virtual Care</div>
                  <div className="text-[11px] text-slate-300">Daily Slots</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase (7 cols on xl, 6 on lg) - BIGGER HERO IMAGE */}
          <div className="relative lg:col-span-6 xl:col-span-7">
            {/* Ambient Background Glow Behind the Main Card */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-teal-500/25 via-cyan-500/10 to-transparent blur-2xl"
            />

            {/* Main Visual Image Card */}
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-slate-900/60 p-2 sm:p-3 shadow-2xl shadow-black/50 ring-1 ring-teal-400/25">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={imageUrl("medical/harbor/hero.webp")}
                  alt="Welcoming modern interior of Harbor Health Clinic"
                  className="h-[380px] w-full object-cover sm:h-[460px] md:h-[500px] lg:h-[560px] xl:h-[620px] transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#061e2b]/85 via-[#061e2b]/20 to-transparent" />

                {/* In-Image Top-Left Live Status Badge */}
                <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 flex items-center gap-2 rounded-full border border-white/25 bg-[#061f2c]/90 px-3.5 py-1.5 text-xs font-bold text-white shadow-xl backdrop-blur-md">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  <span>Open Today · Walk-Ins & Appointments</span>
                </div>

                {/* In-Image Top-Right Fast Check-In Pill */}
                <div className="hidden sm:flex absolute top-5 right-5 items-center gap-1.5 rounded-full border border-white/25 bg-[#061f2c]/85 px-3 py-1.5 text-xs font-bold text-teal-200 shadow-xl backdrop-blur-md">
                  <Clock size={13} className="text-teal-400" />
                  <span>&lt; 15-Min On-Time Guarantee</span>
                </div>

                {/* Floating Bottom Consultation Card (Positioned smartly so image is clearly visible) */}
                <div className="absolute right-3 bottom-3 left-3 sm:right-5 sm:bottom-5 sm:left-auto sm:max-w-md rounded-2xl border border-white/30 bg-white/95 p-4 text-[#0c2432] shadow-2xl backdrop-blur-xl sm:p-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-teal-700">
                        <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                        <span>Next Open Consultation</span>
                      </div>
                      <h2 className="mt-0.5 text-sm font-extrabold sm:text-base text-[#0a2636]">
                        Tomorrow 10:15 AM · Dr. Maya Reynolds
                      </h2>
                      <p className="mt-0.5 text-xs text-slate-600">
                        Preventive checkups, sick visits & telehealth available.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleStartBooking("Preventive Comprehensive Visit", "Dr. Maya Reynolds, MD")}
                      className="shrink-0 rounded-xl bg-gradient-to-r from-[#0f766e] to-[#0d9488] px-3.5 py-2 text-xs font-bold text-white shadow-md hover:from-[#0d655e] hover:to-[#0b7c72] transition active:scale-95"
                    >
                      Claim Slot
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Ambient Floating Doctor Rating Capsule (Left Offset) */}
            <div className="hidden md:flex absolute -bottom-5 -left-5 items-center gap-3 rounded-2xl border border-teal-200/50 bg-white/95 p-3.5 text-slate-800 shadow-2xl backdrop-blur-md">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-teal-700 text-white shadow-md shadow-teal-900/20">
                <CheckCircle2 size={22} />
              </div>
              <div className="text-xs">
                <div className="font-extrabold text-[#0c2432]">Plain-English Visit Summaries</div>
                <div className="text-slate-500">Delivered within 15 min of your exam</div>
              </div>
            </div>

            {/* Top-Right Floating Patient Satisfaction Badge */}
            <div className="hidden xl:flex absolute -top-4 -right-4 items-center gap-2 rounded-2xl border border-teal-300/40 bg-[#061f2c]/95 px-3.5 py-2 text-white shadow-2xl backdrop-blur-md">
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-400/20 text-amber-300">
                <Star size={16} className="fill-amber-300" />
              </div>
              <div>
                <div className="text-xs font-bold text-white leading-tight">4.96 Patient Rating</div>
                <div className="text-[10px] text-teal-300">Top Rated in County</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TRUST PILLARS SECTION */}
      <section className="border-b border-slate-200/80 bg-white py-8">
        <Container>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {trustBadges.map(({ label, icon: Icon, desc }) => (
              <div
                key={label}
                className="group flex items-start gap-4 rounded-2xl border border-slate-100 bg-[#f8fafb] p-4 transition hover:border-teal-200 hover:bg-teal-50/40 hover:shadow-md"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-[#0f766e] transition group-hover:bg-[#0f766e] group-hover:text-white">
                  <Icon size={20} strokeWidth={2.2} />
                </div>
                <div>
                  <h2 className="text-sm font-extrabold text-[#0c2432]">{label}</h2>
                  <p className="mt-0.5 text-xs text-slate-500 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* SERVICES SECTION (FILTERABLE TABS) */}
      <section id="services" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-white">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0f766e]">
                Care by What You Need
              </span>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#0a2636] sm:text-4xl lg:text-5xl">
                Comprehensive healthcare without clinical friction.
              </h2>
              <p className="mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
                Explore our main services below. Every appointment includes clear visit notes,
                proactive follow-ups, and direct access to your clinical team.
              </p>
            </div>

            {/* Filter Category Pills */}
            <div className="flex flex-wrap gap-2">
              {[
                { id: "all", label: "All Services (6)" },
                { id: "preventive", label: "Preventive Care" },
                { id: "acute", label: "Same-Week Care" },
                { id: "virtual", label: "Telehealth" },
                { id: "plans", label: "Care Plans" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() =>
                    setActiveCategory(
                      tab.id as "all" | "preventive" | "acute" | "virtual" | "plans"
                    )
                  }
                  className={`rounded-xl px-4 py-2 text-xs sm:text-sm font-bold transition-all ${
                    activeCategory === tab.id
                      ? "bg-[#0f766e] text-white shadow-md"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Service Cards Grid */}
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map(
              ({ id, title, text, icon: Icon, image, duration, insuranceNote, highlights }) => (
                <article
                  key={id}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-teal-300 hover:shadow-xl hover:shadow-teal-900/8"
                >
                  {/* Service Image Header */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                    <img
                      src={imageUrl(image)}
                      alt={title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                    {/* Service Icon Badge */}
                    <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-white/95 text-[#0f766e] shadow-lg backdrop-blur-md">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>

                    {/* Visit Duration Pill */}
                    <div className="absolute right-4 bottom-4 rounded-full bg-[#061e2b]/85 px-3 py-1 text-xs font-semibold text-white backdrop-blur-md">
                      {duration}
                    </div>
                  </div>

                  {/* Service Content */}
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h3 className="text-xl font-black text-[#0a2636] group-hover:text-[#0f766e] transition-colors">
                      {title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {text}
                    </p>

                    {/* Bullet Highlights */}
                    <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600 sm:text-sm">
                      {highlights.map((h) => (
                        <li key={h} className="flex items-start gap-2">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-[#0f766e]" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Insurance Tag & Book Action */}
                    <div className="mt-auto pt-6">
                      <div className="mb-3 rounded-lg bg-teal-50 px-3 py-1.5 text-xs font-semibold text-teal-800">
                        {insuranceNote}
                      </div>

                      <button
                        type="button"
                        onClick={() => handleStartBooking(title)}
                        className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white py-2.5 text-sm font-bold text-[#0a2636] transition hover:border-[#0f766e] hover:bg-[#0f766e] hover:text-white"
                      >
                        <span>Schedule Visit</span>
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </article>
              )
            )}
          </div>
        </Container>
      </section>

      {/* INTERACTIVE CARE FINDER (TRIAGE WIDGET) */}
      <section id="care-finder" className="scroll-mt-20 sm:scroll-mt-24 py-14 sm:py-20 bg-gradient-to-b from-white to-[#f0f8f7]">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3.5 py-1 text-xs font-extrabold text-teal-800">
              <Stethoscope size={14} />
              Interactive Care Navigator
            </span>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0a2636] sm:text-4xl">
              Not sure which appointment you need?
            </h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              Click your primary reason for visiting below. We will instantly recommend
              the ideal visit format, estimated time, and preparation guidance.
            </p>
          </div>

          <div className="mt-10 mx-auto max-w-4xl rounded-3xl border border-teal-100 bg-white p-6 shadow-xl shadow-teal-900/5 sm:p-8">
            {/* Symptom Selection Buttons */}
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Select Your Current Need:
            </div>
            <div className="mt-3 flex flex-wrap gap-2.5">
              {careFinderOptions.map((opt, idx) => (
                <button
                  key={opt.symptom}
                  type="button"
                  onClick={() => setSelectedSymptomIdx(idx)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-bold transition-all ${
                    selectedSymptomIdx === idx
                      ? "bg-[#0f766e] text-white shadow-md shadow-teal-900/15 scale-[1.02]"
                      : "border border-slate-200 bg-slate-50 text-slate-700 hover:border-teal-300 hover:bg-teal-50"
                  }`}
                >
                  {opt.symptom}
                </button>
              ))}
            </div>

            {/* Recommendation Result Card */}
            <div className="mt-8 rounded-2xl border border-teal-100 bg-gradient-to-r from-teal-50/60 to-cyan-50/40 p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2.5 py-0.5 text-xs font-bold text-emerald-800">
                      <Check size={12} strokeWidth={3} />
                      Recommended Care Path
                    </span>
                    <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-bold text-slate-700 border border-slate-200">
                      {careFinderOptions[selectedSymptomIdx].format}
                    </span>
                    <span className="rounded-full bg-white px-2.5 py-0.5 text-xs font-bold text-slate-700 border border-slate-200">
                      ~ {careFinderOptions[selectedSymptomIdx].duration}
                    </span>
                  </div>

                  <h3 className="mt-2.5 text-xl font-black text-[#0a2636] sm:text-2xl">
                    {careFinderOptions[selectedSymptomIdx].type}
                  </h3>

                  <p className="mt-1.5 flex items-start gap-1.5 text-sm text-slate-600">
                    <span className="font-bold text-teal-800">Prep tip:</span>
                    <span>{careFinderOptions[selectedSymptomIdx].tip}</span>
                  </p>
                </div>

                <div className="shrink-0">
                  <button
                    type="button"
                    onClick={() =>
                      handleStartBooking(
                        careFinderOptions[selectedSymptomIdx].type
                      )
                    }
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0f766e] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#0d655e] sm:w-auto"
                  >
                    <span>Schedule This Care</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* HOW CARE WORKS (VISUAL JOURNEY) */}
      <section id="how-it-works" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-[#f2f8f7] border-y border-slate-200/80">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0f766e]">
              A Calmer Patient Experience
            </span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#0a2636] sm:text-4xl lg:text-5xl">
              Three straightforward steps from intake to recovery.
            </h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              We took away the waiting rooms, repetitive paperwork packets, and medical jargon.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {steps.map(({ step, title, text, badge, image }) => (
              <div
                key={step}
                className="relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm transition hover:shadow-lg"
              >
                {/* Step Image */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-100">
                  <img
                    src={imageUrl(image)}
                    alt={title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#0a2636] font-black text-white shadow-md">
                    {step}
                  </div>
                  <div className="absolute right-4 top-4 rounded-full bg-teal-100 px-3 py-1 text-xs font-black text-teal-800">
                    {badge}
                  </div>
                </div>

                <div className="p-6 sm:p-7">
                  <h3 className="text-xl font-black text-[#0a2636]">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* THE HARBOR DIGITAL HEALTH HUB (INTERACTIVE PORTAL PREVIEW) */}
      <section id="patient-hub" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-white">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-100 px-3 py-1 text-xs font-extrabold text-teal-800">
                <ShieldCheck size={14} />
                Harbor Patient Hub
              </span>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0a2636] sm:text-4xl lg:text-5xl">
                Your medical charts, translated into everyday English.
              </h2>
              <p className="mt-4 text-base text-slate-600 sm:text-lg leading-relaxed">
                Most patient portals are confusing mazes of PDF downloads and medical jargon.
                Our patient hub provides clear summaries, actionable advice, and direct messaging
                with your doctor.
              </p>

              {/* Portal Feature Highlights */}
              <div className="mt-8 space-y-4">
                <div className="flex gap-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-[#0f766e]">
                    <Check size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0a2636]">Plain-Language Visit Recaps</h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Know exactly what was discussed, what medication to take, and when to follow up.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-[#0f766e]">
                    <Check size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0a2636]">Direct 2-Hour Chat Response</h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Got a question about side effects or test results? Message your doctor directly without playing phone tag.
                    </p>
                  </div>
                </div>

                <div className="flex gap-3.5">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-[#0f766e]">
                    <Check size={18} strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#0a2636]">1-Click Prescription Refills</h3>
                    <p className="text-xs sm:text-sm text-slate-500">
                      Request medication renewals in two taps and route them to any nearby pharmacy.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Portal Mockup */}
            <div className="rounded-3xl border border-slate-200/90 bg-[#08202d] p-3 sm:p-5 shadow-2xl ring-1 ring-white/10">
              {/* Fake App Bar */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3 px-2 text-white">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="flex items-center gap-1.5 shrink-0">
                    <div className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="ml-1 text-[11px] sm:text-xs font-bold text-teal-300 truncate">
                    Harbor Patient Hub · Verified Patient View
                  </span>
                </div>
                <span className="hidden sm:inline text-xs text-slate-400 shrink-0 ml-2">HIPAA 256-Bit Encrypted</span>
              </div>

              {/* Interactive Tabs */}
              <div className="mt-4 flex overflow-x-auto gap-2 border-b border-white/10 pb-2">
                {[
                  { id: "summary", label: "Visit Summary" },
                  { id: "labs", label: "Lab Results" },
                  { id: "roadmap", label: "Health Roadmap" },
                  { id: "chat", label: "Care Chat" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() =>
                      setPortalTab(
                        tab.id as "summary" | "labs" | "roadmap" | "chat"
                      )
                    }
                    className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-bold transition-all ${
                      portalTab === tab.id
                        ? "bg-teal-500 text-[#051c27]"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content Panes */}
              <div className="mt-4 rounded-2xl bg-[#0d2a3a] p-4 sm:p-5 text-white">
                {portalTab === "summary" && (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <div>
                        <div className="text-xs text-teal-300 font-bold uppercase">
                          Last Visit Note · Sep 18, 2026
                        </div>
                        <div className="text-base font-extrabold text-white">
                          Annual Wellness Consultation with Dr. Reynolds
                        </div>
                      </div>
                      <span className="rounded-full bg-emerald-500/20 px-2.5 py-0.5 text-xs font-bold text-emerald-300 border border-emerald-500/30">
                        Reviewed & Finalized
                      </span>
                    </div>

                    <div className="rounded-xl bg-white/5 p-3.5 text-xs sm:text-sm leading-relaxed text-slate-200">
                      <p className="font-bold text-teal-200 mb-1">
                        Doctor&apos;s Plain-English Summary:
                      </p>
                      &ldquo;Overall health is strong. Blood pressure measured 118/76 (ideal). We discussed increasing daily water intake and starting Vitamin D3 2000 IU daily throughout the fall. Lipid panel blood draw ordered.&rdquo;
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="rounded-lg bg-white/5 p-2.5">
                        <div className="text-slate-400">Next Follow-Up:</div>
                        <div className="font-bold text-white">Routine Check in 12 Mos</div>
                      </div>
                      <div className="rounded-lg bg-white/5 p-2.5">
                        <div className="text-slate-400">Medication Refill:</div>
                        <div className="font-bold text-emerald-300">Sent to CVS Main St</div>
                      </div>
                    </div>
                  </div>
                )}

                {portalTab === "labs" && (
                  <div className="space-y-3">
                    <div className="text-xs text-teal-300 font-bold uppercase">
                      Recent Lab Panel · Complete Blood Count + Lipids
                    </div>
                    {[
                      { test: "Total Cholesterol", val: "182 mg/dL", status: "Optimal (<200)" },
                      { test: "Fasting Blood Glucose", val: "88 mg/dL", status: "Optimal (70-99)" },
                      { test: "Vitamin D (25-OH)", val: "31 ng/mL", status: "Mildly low (re-test in 3 mo)" },
                    ].map((row) => (
                      <div
                        key={row.test}
                        className="flex items-center justify-between rounded-xl bg-white/5 p-3 text-xs sm:text-sm"
                      >
                        <div>
                          <div className="font-bold text-white">{row.test}</div>
                          <div className="text-xs text-slate-300">{row.status}</div>
                        </div>
                        <div className="font-mono font-bold text-teal-300">{row.val}</div>
                      </div>
                    ))}
                  </div>
                )}

                {portalTab === "roadmap" && (
                  <div className="space-y-3">
                    <div className="text-xs text-teal-300 font-bold uppercase">
                      Your 90-Day Wellness Milestones
                    </div>
                    <div className="space-y-2 text-xs sm:text-sm">
                      <div className="flex items-center gap-3 rounded-xl bg-emerald-500/10 p-3 border border-emerald-500/20">
                        <CheckCircle2 size={18} className="text-emerald-400" />
                        <span className="text-slate-200">Completed annual physical & baseline labs</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                        <Clock size={18} className="text-amber-300" />
                        <span className="text-slate-200">Schedule routine seasonal flu booster (October)</span>
                      </div>
                      <div className="flex items-center gap-3 rounded-xl bg-white/5 p-3">
                        <Activity size={18} className="text-teal-300" />
                        <span className="text-slate-200">3-month Vitamin D follow-up quick blood draw</span>
                      </div>
                    </div>
                  </div>
                )}

                {portalTab === "chat" && (
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 border-b border-white/10 pb-2">
                      <div className="h-7 w-7 rounded-full bg-teal-500 text-slate-900 flex items-center justify-center font-black text-xs">
                        MR
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white">Dr. Maya Reynolds, MD</div>
                        <div className="text-[10px] text-emerald-400">● Active now</div>
                      </div>
                    </div>
                    <div className="space-y-2 text-xs">
                      <div className="ml-auto max-w-[80%] rounded-xl bg-teal-600 p-2.5 text-white">
                        Hi Dr. Reynolds, should I take the new supplement with meals or on an empty stomach?
                      </div>
                      <div className="mr-auto max-w-[80%] rounded-xl bg-white/10 p-2.5 text-slate-200">
                        Hi Sarah! Take it with breakfast or lunch—fatty foods help absorption. Let me know if you experience any mild nausea!
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* TELEHEALTH DEEP DIVE SECTION */}
      <section id="telehealth" className="scroll-mt-20 sm:scroll-mt-24 relative isolate overflow-hidden bg-[#072430] py-16 sm:py-24 text-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -right-20 h-96 w-96 rounded-full bg-teal-500/10 blur-[120px]"
        />

        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 px-3.5 py-1 text-xs font-extrabold text-teal-300">
              <Video size={14} />
              Virtual Primary Care
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white sm:text-4xl lg:text-5xl">
              Virtual visits with the exact same doctor you see in person.
            </h2>
            <p className="mt-4 text-base text-slate-300 sm:text-lg leading-relaxed">
              No robotic automated chats or random outsourced doctors. When you schedule a virtual
              consult with Harbor Health Clinic, you meet with your dedicated neighborhood care team.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Medication reviews & renewals",
                "Cold, flu & sinus symptoms",
                "Rash & minor dermatology",
                "Mental health check-ins",
                "Lab & bloodwork consultations",
                "Specialist referral planning",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2.5 rounded-xl bg-white/10 p-3 text-sm font-semibold text-slate-200 backdrop-blur-sm"
                >
                  <CheckCircle2 size={17} className="shrink-0 text-teal-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => handleStartBooking("Telehealth Virtual Consult")}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-400 px-6 py-3 text-sm font-bold text-[#051c27] shadow-lg hover:bg-teal-300 transition"
              >
                <Video size={17} />
                <span>Book Virtual Visit</span>
              </button>

              <a
                href="#faq"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                <span>How Video Visits Work</span>
              </a>
            </div>
          </div>

          {/* Telehealth Images Stack */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-2 shadow-2xl">
              <img
                src={imageUrl("medical/harbor/telehealth.webp")}
                alt="Patient having an unhurried virtual visit with a doctor"
                className="h-72 w-full rounded-2xl object-cover sm:h-96"
              />
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-2 shadow-2xl">
                <img
                  src={imageUrl("medical/harbor/clinic-interior.webp")}
                  alt="Bright clinic interior"
                  className="h-44 w-full rounded-2xl object-cover sm:h-48"
                />
              </div>
              <div className="rounded-3xl border border-white/15 bg-white/10 p-5 backdrop-blur-md">
                <div className="text-xs font-bold uppercase tracking-wider text-teal-300">
                  Zero App Download
                </div>
                <div className="mt-1 text-base font-bold text-white">
                  Join with 1 Tap from Any Smartphone or Laptop
                </div>
                <p className="mt-1 text-xs text-slate-300">
                  Encrypted, HIPAA-compliant, and fully covered under most insurance plans.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* MEET THE CARE TEAM */}
      <section id="care-team" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-white">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0f766e]">
                Compassionate Providers
              </span>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#0a2636] sm:text-4xl lg:text-5xl">
                Physicians who actually listen.
              </h2>
              <p className="mt-3 max-w-2xl text-base text-slate-600 sm:text-lg">
                Our board-certified clinicians maintain smaller patient panels so they have the
                time to explore your medical history and answer every question without rushing.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {providers.map((doc) => (
              <article
                key={doc.name}
                className="flex flex-col rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:border-teal-300 hover:shadow-xl hover:shadow-teal-900/5 sm:p-7"
              >
                {/* Header with Avatar Initial */}
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-[#0f766e] font-black text-xl shadow-inner">
                    {doc.name.split(" ")[1]?.charAt(0) || "D"}
                  </div>
                  <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-bold text-amber-800 border border-amber-200">
                    <Star size={13} className="fill-amber-500 text-amber-500" />
                    <span>{doc.rating}</span>
                    <span className="text-slate-400">({doc.reviewsCount.split(" ")[0]})</span>
                  </div>
                </div>

                <div className="mt-5">
                  <h3 className="text-xl font-extrabold text-[#0a2636]">{doc.name}</h3>
                  <div className="text-sm font-bold text-[#0f766e]">{doc.role}</div>
                  <div className="mt-1 text-xs text-slate-500">{doc.credentials}</div>
                </div>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-600">
                  {doc.bio}
                </p>

                {/* Specialties Chips */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {doc.specialties.map((spec) => (
                    <span
                      key={spec}
                      className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
                    >
                      {spec}
                    </span>
                  ))}
                </div>

                {/* Availability & Book button */}
                <div className="mt-auto pt-6 border-t border-slate-100">
                  <div className="mb-3 flex items-center gap-1.5 text-xs font-bold text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" />
                    <span>{doc.availability}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleStartBooking(undefined, doc.name)}
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0f766e] py-2.5 text-sm font-bold text-white shadow-sm hover:bg-[#0d655e] transition"
                  >
                    <span>Book with {doc.name.split(" ")[1]}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* INSURANCE & PAYMENT TRANSPARENCY SECTION */}
      <section id="insurance" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-[#f0f8f7] border-y border-slate-200/80">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#0f766e]">
                Transparent Billing
              </span>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#0a2636] sm:text-4xl lg:text-5xl">
                Know your coverage and co-pay before you arrive.
              </h2>
              <p className="mt-3 text-base text-slate-600 sm:text-lg">
                Healthcare should never come with mystery bills. We verify your benefits in advance
                and bill transparently. Search your health plan below:
              </p>

              {/* Insurance Search Filter Input */}
              <div className="mt-6 relative max-w-md">
                <Search size={18} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  value={activeInsuranceSearch}
                  onChange={(e) => setActiveInsuranceSearch(e.target.value)}
                  placeholder="Type your insurance (e.g. Aetna, Blue Cross, Cigna)..."
                  className="w-full rounded-xl border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm font-medium text-slate-800 placeholder:text-slate-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                />
              </div>

              {/* Insurance List Table */}
              <div className="mt-4 max-h-72 overflow-y-auto rounded-2xl border border-slate-200 bg-white p-3 shadow-inner">
                {filteredInsurances.length > 0 ? (
                  <div className="space-y-2">
                    {filteredInsurances.map((ins) => (
                      <div
                        key={ins.name}
                        className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-xs sm:text-sm hover:bg-teal-50 transition"
                      >
                        <div className="flex items-center gap-2.5 font-bold text-[#0a2636]">
                          <ShieldCheck size={18} className="text-[#0f766e]" />
                          <span>{ins.name}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="rounded-full bg-teal-100 px-2.5 py-0.5 text-xs font-bold text-teal-800">
                            {ins.status}
                          </span>
                          <span className="font-semibold text-slate-600">{ins.copay}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-6 text-center text-sm text-slate-500">
                    No exact match found. Call us at (555) 014-2840 — we accept almost all PPO and out-of-network benefits!
                  </div>
                )}
              </div>
            </div>

            {/* Self-Pay & HSA Guarantee Box */}
            <div className="rounded-3xl border border-teal-200 bg-white p-7 shadow-xl">
              <div className="flex items-center gap-2.5 text-teal-800 font-extrabold text-sm uppercase tracking-wider">
                <Award size={20} />
                <span>Our Clear Pricing Pledge</span>
              </div>
              <h3 className="mt-3 text-2xl font-black text-[#0a2636]">
                No Surprise Facility Fees. Ever.
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Hospital-owned outpatient clinics often tack on $300+ in &ldquo;facility fees&rdquo; for simple checkups.
                As an independent practice, Harbor Health Clinic never bills facility fees.
              </p>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-xl bg-teal-50/70 p-3 text-sm">
                  <span className="font-bold text-slate-800">Annual Preventive Physical (ACA)</span>
                  <span className="font-extrabold text-[#0f766e]">$0 Out-of-Pocket</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-sm">
                  <span className="font-bold text-slate-800">Uninsured Flat-Rate Consultation</span>
                  <span className="font-extrabold text-slate-900">$125 Flat Fee</span>
                </div>
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3 text-sm">
                  <span className="font-bold text-slate-800">HSA & FSA Card Payments</span>
                  <span className="font-extrabold text-emerald-700">100% Eligible</span>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 text-xs text-slate-500">
                Need a specific price quote before visiting? Reach our billing advocate directly at{" "}
                <a href="mailto:billing@harborhealth.example" className="font-bold text-[#0f766e] underline">
                  billing@harborhealth.example
                </a>.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* PATIENT REVIEWS & TESTIMONIALS */}
      <section id="reviews" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3.5 py-1 text-xs font-black text-amber-900">
              <Star size={13} className="fill-amber-600 text-amber-600" />
              <span>4.96 Stars Across 480+ Local Reviews</span>
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#0a2636] sm:text-4xl lg:text-5xl">
              Real patients. Real peace of mind.
            </h2>
            <p className="mt-3 text-base text-slate-600 sm:text-lg">
              Here is what patients in our neighborhood have to say about our unhurried approach to primary care.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {reviews.map((rev) => (
              <div
                key={rev.name}
                className="flex flex-col rounded-3xl border border-slate-200/90 bg-[#f8fafb] p-6 shadow-sm transition hover:shadow-md hover:border-teal-300"
              >
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-amber-500">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="rounded-full bg-teal-100 px-2 py-0.5 text-[11px] font-bold text-teal-800">
                    {rev.tag}
                  </span>
                </div>

                <p className="mt-4 text-xs sm:text-sm leading-relaxed text-slate-700 italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>

                <div className="mt-auto pt-6 border-t border-slate-200/60 flex items-center justify-between">
                  <div>
                    <div className="text-sm font-extrabold text-[#0a2636]">{rev.name}</div>
                    <div className="text-xs text-slate-500">{rev.role}</div>
                  </div>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-100 text-[#0f766e]">
                    <Check size={14} strokeWidth={3} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ACCORDION FAQ SECTION */}
      <section id="faq" className="scroll-mt-20 sm:scroll-mt-24 py-16 sm:py-24 bg-[#f2f8f7] border-t border-slate-200/80">
        <Container className="max-w-4xl">
          <div className="text-center">
            <span className="text-xs font-extrabold uppercase tracking-wider text-[#0f766e]">
              Common Patient Inquiries
            </span>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-[#0a2636] sm:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Clear answers to the questions you might have before scheduling your visit.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = expandedFaq === idx;
              return (
                <div
                  key={faq.q}
                  className="overflow-hidden rounded-2xl border border-slate-200/90 bg-white transition shadow-sm"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedFaq(isOpen ? null : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-extrabold text-[#0a2636] hover:text-[#0f766e]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={19}
                      className={`shrink-0 text-slate-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#0f766e]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="border-t border-slate-100 bg-teal-50/20 px-5 pb-5 pt-3 text-xs sm:text-sm leading-relaxed text-slate-600">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* FINAL CALL TO ACTION */}
      <section
        id="contact"
        className="scroll-mt-20 sm:scroll-mt-24 relative isolate overflow-hidden bg-gradient-to-br from-[#061e2b] via-[#092939] to-[#07212e] py-20 text-white sm:py-28"
      >
        <img
          src={imageUrl("medical/harbor/cta-care.webp")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#061e2b]/95 via-[#08293a]/80 to-[#061e2b]/95" />

        <Container className="max-w-4xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 px-4 py-1.5 text-xs font-black tracking-wide text-teal-300">
            <Heart size={14} className="fill-teal-300" />
            Ready for a Calmer Path into Care?
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
            Book your appointment today without the waiting room stress.
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-base text-slate-300 sm:text-lg leading-relaxed">
            Same-week and telehealth appointments available with Dr. Maya Reynolds,
            Dr. Aaron Patel, and Lena Brooks, NP.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
            <button
              type="button"
              onClick={() => handleStartBooking()}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-teal-400 to-teal-500 px-8 py-4 text-base font-bold text-[#051c27] shadow-xl hover:from-teal-300 hover:to-teal-400 transition hover:-translate-y-0.5"
            >
              <Calendar size={19} />
              <span>Schedule Visit Online</span>
            </button>

            <a
              href="tel:5550142840"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-7 py-4 text-base font-bold text-white backdrop-blur-sm hover:bg-white/20 transition"
            >
              <Phone size={18} />
              <span>Call (555) 014-2840</span>
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-teal-400" />
              HIPAA Compliant & Secure
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 size={16} className="text-teal-400" />
              Board-Certified Clinicians
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={16} className="text-teal-400" />
              Under 15-Minute Waiting Time
            </span>
          </div>
        </Container>
      </section>

      {/* COMPREHENSIVE FOOTER */}
      <footer className="bg-[#04141d] pt-16 pb-24 sm:pb-12 text-white border-t border-white/10">
        <Container>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 text-xl font-black text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-teal-500 text-slate-900">
                  <Heart size={18} className="fill-slate-900" />
                </span>
                <span>Harbor Health Clinic</span>
              </div>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 leading-relaxed">
                Modern neighborhood primary care focused on plain-English communication,
                preventive health roadmaps, and unhurried doctor consultations.
              </p>
              <div className="mt-4 text-xs text-teal-300 font-semibold">
                ● Accepting New Adult & Pediatric Patients
              </div>
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-teal-300">
                Clinic Services
              </h3>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-400">
                <li><a href="#services" className="hover:text-white transition">Preventive Wellness Exams</a></li>
                <li><a href="#services" className="hover:text-white transition">Same-Week Acute Care</a></li>
                <li><a href="#telehealth" className="hover:text-white transition">Virtual Telehealth Visits</a></li>
                <li><a href="#services" className="hover:text-white transition">Hypertension & Metabolic Care</a></li>
                <li><a href="#services" className="hover:text-white transition">On-Site Blood Draw & Labs</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-teal-300">
                Clinic Location & Hours
              </h3>
              <div className="mt-4 space-y-2.5 text-xs sm:text-sm text-slate-400">
                <p className="flex items-start gap-2">
                  <MapPin size={17} className="mt-0.5 shrink-0 text-teal-400" />
                  <span>123 Harbor Avenue, Suite 200, Harbor Point, CA 94105</span>
                </p>
                <p className="flex items-start gap-2">
                  <Clock size={17} className="mt-0.5 shrink-0 text-teal-400" />
                  <span>Monday – Friday: 8:00 AM – 6:00 PM<br />Saturday Telehealth: 9:00 AM – 2:00 PM</span>
                </p>
                <p className="flex items-center gap-2">
                  <Phone size={17} className="shrink-0 text-teal-400" />
                  <a href="tel:5550142840" className="hover:text-white transition font-bold text-white">
                    (555) 014-2840
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-extrabold uppercase tracking-wider text-teal-300">
                Patient Resources
              </h3>
              <ul className="mt-4 space-y-2 text-xs sm:text-sm text-slate-400">
                <li><a href="#patient-hub" className="hover:text-white transition">Patient Portal Sign-In</a></li>
                <li><a href="#insurance" className="hover:text-white transition">Accepted Insurance Plans</a></li>
                <li><a href="#faq" className="hover:text-white transition">First Visit Check-in Guide</a></li>
                <li><a href="#care-finder" className="hover:text-white transition">Care Finder Tool</a></li>
                <li><a href="#reviews" className="hover:text-white transition">Patient Satisfaction Ratings</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
            <div>
              © {new Date().getFullYear()} Harbor Health Clinic, LLC. All rights reserved. CLIA & HIPAA Certified.
            </div>
            <div className="text-slate-400">
              For acute life-threatening emergencies, please dial 911 or visit your nearest hospital ER.
            </div>
          </div>
        </Container>
      </footer>

      {/* FLOATING MOBILE STICKY ACTION BAR */}
      {!isMobileMenuOpen && !isBookingOpen && (
        <div className="fixed bottom-0 left-0 right-0 z-30 flex items-center justify-between border-t border-slate-200/90 bg-white/95 px-4 py-2.5 shadow-2xl backdrop-blur-md sm:hidden pb-[max(0.625rem,env(safe-area-inset-bottom))]">
          <a
            href="tel:5550142840"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2 text-xs font-bold text-slate-800 transition active:scale-95 hover:bg-teal-50 hover:border-teal-200"
          >
            <Phone size={14} className="text-[#0f766e]" />
            <span>Call Clinic</span>
          </a>

          <button
            type="button"
            onClick={() => handleStartBooking()}
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0f766e] to-[#0d9488] px-5 py-2 text-xs font-bold text-white shadow-md shadow-teal-900/15 transition active:scale-95 hover:from-[#0d655e] hover:to-[#0b7c72]"
          >
            <Calendar size={14} />
            <span>Book Visit</span>
          </button>
        </div>
      )}

      {/* INTERACTIVE APPOINTMENT BOOKING MODAL */}
      {isBookingOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm animate-in fade-in duration-200"
        >
          <div className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl sm:rounded-3xl border border-slate-200 bg-white p-4 sm:p-8 shadow-2xl">
            {/* Modal Close Button */}
            <button
              type="button"
              onClick={() => setIsBookingOpen(false)}
              className="absolute right-3.5 top-3.5 sm:right-5 sm:top-5 rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition"
              aria-label="Close booking modal"
            >
              <X size={20} />
            </button>

            {!bookingConfirmed ? (
              <div>
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-teal-100 text-[#0f766e]">
                    <CalendarCheck size={18} />
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-[#0a2636]">
                      Schedule Your Harbor Visit
                    </h3>
                    <div className="text-xs text-slate-500">Step {bookingStep} of 2</div>
                  </div>
                </div>

                {bookingStep === 1 && (
                  <div className="mt-6 space-y-5">
                    {/* Visit Type Picker */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                        1. Select Visit Type
                      </label>
                      <select
                        value={selectedVisitType}
                        onChange={(e) => setSelectedVisitType(e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm font-bold text-slate-800 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                      >
                        <option value="Preventive Comprehensive Visit">Preventive Comprehensive Annual Visit (45 min)</option>
                        <option value="Same-Week Urgent Illness Visit">Same-Week Acute Illness / Sick Care (25 min)</option>
                        <option value="Telehealth Virtual Consult">Virtual Telehealth Consultation (25 min)</option>
                        <option value="Chronic Care & Metabolic Review">Chronic Care & Metabolic Review (30 min)</option>
                        <option value="Routine Blood Draw & Lab Panel">Routine Blood Draw & Lab Review (20 min)</option>
                      </select>
                    </div>

                    {/* Preferred Provider */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                        2. Choose Preferred Clinician
                      </label>
                      <select
                        value={selectedProvider}
                        onChange={(e) => setSelectedProvider(e.target.value)}
                        className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50 p-3 text-sm font-bold text-slate-800 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20"
                      >
                        <option value="Dr. Maya Reynolds, MD">Dr. Maya Reynolds, MD (Family Medicine)</option>
                        <option value="Dr. Aaron Patel, MD">Dr. Aaron Patel, MD (Internal Medicine)</option>
                        <option value="Lena Brooks, FNP-C">Lena Brooks, FNP-C (Same-Week & Urgent Care)</option>
                        <option value="First Available Provider">First Available Doctor (Fastest Slot)</option>
                      </select>
                    </div>

                    {/* Day & Time Slot Chips */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                        3. Pick Day & Time
                      </label>
                      <div className="mt-2 grid grid-cols-3 gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                        {["Today (Later)", "Tomorrow (Tue)", "Wednesday (Wed)"].map((day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => setSelectedDay(day)}
                            className={`rounded-xl p-2 sm:p-2.5 font-bold transition text-center ${
                              selectedDay === day
                                ? "bg-[#0f766e] text-white"
                                : "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-teal-50"
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>

                      <div className="mt-2.5 grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                        {["9:00 AM", "10:15 AM", "2:30 PM", "4:15 PM"].map((tm) => (
                          <button
                            key={tm}
                            type="button"
                            onClick={() => setSelectedTime(tm)}
                            className={`rounded-xl p-2 font-bold transition ${
                              selectedTime === tm
                                ? "bg-[#0a2636] text-white"
                                : "border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                            }`}
                          >
                            {tm}
                          </button>
                        ))}
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => setBookingStep(2)}
                      className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0f766e] py-3.5 text-sm font-bold text-white shadow-md hover:bg-[#0d655e]"
                    >
                      <span>Continue to Patient Details</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                )}

                {bookingStep === 2 && (
                  <form onSubmit={handleConfirmBooking} className="mt-6 space-y-4">
                    <div className="rounded-xl bg-teal-50 p-3 text-xs text-teal-900 border border-teal-200">
                      <span className="font-bold">Reserved Window:</span> {selectedDay} at {selectedTime} with {selectedProvider}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={bookingName}
                        onChange={(e) => setBookingName(e.target.value)}
                        placeholder="Sarah Jenkins"
                        className="mt-1 w-full rounded-xl border border-slate-300 p-2.5 text-sm font-medium text-slate-900 focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          value={bookingPhone}
                          onChange={(e) => setBookingPhone(e.target.value)}
                          placeholder="(555) 019-2834"
                          className="mt-1 w-full rounded-xl border border-slate-300 p-2.5 text-sm font-medium text-slate-900 focus:border-teal-500 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={bookingEmail}
                          onChange={(e) => setBookingEmail(e.target.value)}
                          placeholder="sarah@example.com"
                          className="mt-1 w-full rounded-xl border border-slate-300 p-2.5 text-sm font-medium text-slate-900 focus:border-teal-500 focus:outline-none"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-600">
                        Insurance Carrier (or &ldquo;Self-Pay&rdquo;)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Blue Cross Blue Shield, Aetna, etc."
                        className="mt-1 w-full rounded-xl border border-slate-300 p-2.5 text-sm font-medium text-slate-900 focus:border-teal-500 focus:outline-none"
                      />
                    </div>

                    <div className="pt-2 flex gap-3">
                      <button
                        type="button"
                        onClick={() => setBookingStep(1)}
                        className="w-1/3 rounded-xl border border-slate-200 py-3 text-xs font-bold text-slate-700 hover:bg-slate-100"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="w-2/3 rounded-xl bg-[#0f766e] py-3 text-sm font-bold text-white shadow-md hover:bg-[#0d655e]"
                      >
                        Confirm Appointment
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              /* Confirmation Screen */
              <div className="text-center py-6">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="mt-4 text-2xl font-black text-[#0a2636]">
                  Appointment Confirmed!
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  We look forward to seeing you,{" "}
                  <span className="font-bold">{bookingName || "Patient"}</span>. A confirmation text
                  and email have been sent to your contact details.
                </p>

                <div className="mt-6 rounded-2xl bg-teal-50 border border-teal-200 p-4 text-left text-xs sm:text-sm space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Visit Type:</span>
                    <span className="font-bold text-[#0a2636]">{selectedVisitType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Clinician:</span>
                    <span className="font-bold text-[#0a2636]">{selectedProvider}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Date & Time:</span>
                    <span className="font-bold text-[#0f766e]">{selectedDay} · {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Location:</span>
                    <span className="font-bold text-[#0a2636]">123 Harbor Ave, Suite 200</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsBookingOpen(false)}
                  className="mt-6 w-full rounded-xl bg-[#0a2636] py-3 text-sm font-bold text-white hover:bg-slate-800"
                >
                  Done & Return to Site
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
