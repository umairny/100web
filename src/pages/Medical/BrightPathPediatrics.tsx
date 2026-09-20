import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Baby,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Heart,
  Menu,
  Phone,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import { Container } from "../../components";
import { imageUrl } from "../../assets/optimized";

// Navigation links for ScrollSpy
const navLinks = [
  { label: "Bento Services", href: "#services", id: "services" },
  { label: "Milestones", href: "#milestones", id: "milestones" },
  { label: "Tear-Free Visit", href: "#the-visit", id: "the-visit" },
  { label: "Care Matcher", href: "#navigator", id: "navigator" },
  { label: "Pediatricians", href: "#providers", id: "providers" },
  { label: "Reviews", href: "#reviews", id: "reviews" },
  { label: "FAQ", href: "#faq", id: "faq" },
];

const trustPoints = [
  "Newborn to teen care (0–18 yrs)",
  "Guaranteed same-day sick slots",
  "Separate well & sick waiting zones",
  "24/7 after-hours nurse triage line",
];

// Interactive child age stages in Hero
const heroAgeStages = [
  {
    id: "newborn",
    label: "Newborn",
    age: "0–3 Months",
    emoji: "🐣",
    tagline: "Gentle hospital discharge checkups, feeding guidance & jaundice screening",
    image: "medical/BrightPath/newborn-care.webp",
    badge: "Separate Clean Newborn Suite",
    focus: "Feeding rhythm, infant weight tracking, safe sleep roadmaps & unhurried questions for new parents.",
    nextSlot: "Tomorrow 9:00 AM",
    provider: "Dr. Emily Carter, MD, FAAP",
    visitType: "Newborn First Checkup (2–5 Days)",
    highlights: ["Protected Infant Well-Zone", "Lactation & Feeding Support", "Direct Pediatrician Phone Access"],
  },
  {
    id: "toddler",
    label: "Baby & Toddler",
    age: "4–24 Months",
    emoji: "🧸",
    tagline: "Milestone tracking, playful exams & warm stethoscope checkups",
    image: "medical/BrightPath/hero.webp",
    badge: "Warm Stethoscope Care",
    focus: "Motor skills, first words, solid food transitions, and gentle, tear-free immunizations.",
    nextSlot: "Tomorrow 10:30 AM",
    provider: "Dr. Noah Williams, MD, FAAP",
    visitType: "Well-Child Preventive Exam",
    highlights: ["Warm Instruments (No Chills)", "Playful Bubble Distraction", "Digital Milestone Roadmap"],
  },
  {
    id: "kids",
    label: "Kids & School",
    age: "3–10 Years",
    emoji: "🎨",
    tagline: "Vision & hearing checks, sports physicals, and gentle asthma care",
    image: "medical/BrightPath/child-checkup.webp",
    badge: "Child-First Distraction",
    focus: "Growth curves, social wellness, vision/hearing screenings, and athletic camp clearance.",
    nextSlot: "Wednesday 2:15 PM",
    provider: "Priya Shah, MSN, CPNP",
    visitType: "School & Sports Physical",
    highlights: ["No-Scare Explanations", "Same-Day Sports Forms Completed", "Treasure Box Sticker Rewards"],
  },
  {
    id: "teens",
    label: "Adolescent",
    age: "11–18 Years",
    emoji: "⚽",
    tagline: "Confidential exams, sports cardiology clearance & teen wellness",
    image: "medical/BrightPath/family-consultation.webp",
    badge: "Respectful & Confidential",
    focus: "Athletic injury checks, adolescent growth, acne management, and emotional wellness triage.",
    nextSlot: "Thursday 3:30 PM",
    provider: "Dr. Noah Williams, MD, FAAP",
    visitType: "Adolescent Wellness & Sports Clearance",
    highlights: ["Private One-on-One Discussions", "Sports Cardiology Clearance", "Compassionate Mental Health Triage"],
  },
];

// Interactive triage navigator items
const triageItems = [
  {
    symptom: "Sudden High Fever or Ear Pain",
    visitType: "Same-Day Pediatric Sick Exam",
    format: "In-Clinic Priority Exam",
    timeframe: "Within 2–4 hours today",
    prepTip: "Note exact temperatures and write down when acetaminophen or ibuprofen was last given.",
    recommendedDoc: "Dr. Noah Williams, MD",
  },
  {
    symptom: "Fresh Newborn Feeding, Jaundice or First Checkup",
    visitType: "Newborn Wellness Visit (2–5 Days)",
    format: "Dedicated Infant Well Suite",
    timeframe: "45–60 min unhurried exam",
    prepTip: "Bring hospital discharge summary, swaddle blanket, and your list of feeding/sleeping questions.",
    recommendedDoc: "Dr. Emily Carter, MD",
  },
  {
    symptom: "Annual Well-Child & Vaccination Checkup",
    visitType: "Comprehensive Well-Child Exam",
    format: "Play-Based Developmental Exam",
    timeframe: "30–45 min appointment",
    prepTip: "Download our developmental milestones checklist to highlight new words and physical achievements.",
    recommendedDoc: "Priya Shah, CPNP",
  },
  {
    symptom: "Sports Physical or School Entry Forms",
    visitType: "School & Sports Physical",
    format: "Activity Clearance Exam",
    timeframe: "20–30 min visit",
    prepTip: "Bring your state athletic or school entry health clearance form with parent signature pre-filled.",
    recommendedDoc: "Dr. Noah Williams, MD",
  },
  {
    symptom: "Mild Rash, Medication Refill or Triage Follow-Up",
    visitType: "Pediatric Virtual Telehealth",
    format: "Encrypted HD Video Call",
    timeframe: "15–20 min virtual visit",
    prepTip: "Have good natural lighting for viewing skin concerns and keep your local pharmacy address handy.",
    recommendedDoc: "Priya Shah, CPNP",
  },
];

// Interactive Milestones Roadmap
const milestoneAges = [
  {
    id: "2mo",
    label: "2 Months",
    headline: "First Responsive Smiles & Visual Tracking",
    milestones: [
      "Calms down when spoken to or picked up",
      "Looks at parent's face and smiles responsively",
      "Holds head up when lying on tummy",
      "Makes happy gurgling and cooing sounds",
    ],
    vaccines: "DTaP, IPV, Hib, PCV15, Rotavirus (dose 1)",
    parentTip: "Lots of awake tummy time and gentle skin-to-skin contact helps strengthen neck and spine muscles.",
  },
  {
    id: "6mo",
    label: "6 Months",
    headline: "Rolling Over, Babbling & First Purees",
    milestones: [
      "Rolls from tummy to back and vice-versa",
      "Begins sitting briefly without adult support",
      "Babbles consonant strings (ba-ba, ma-ma, da-da)",
      "Reaches for toys with both hands and passes them",
    ],
    vaccines: "DTaP, IPV, Hib, PCV15, Rotavirus (dose 2/3), Annual Flu",
    parentTip: "Ideal time to start single-ingredient iron-rich purees while continuing breastmilk or formula.",
  },
  {
    id: "12mo",
    label: "12 Months (1 Year)",
    headline: "First Steps, Waving & Finger-Food Independence",
    milestones: [
      "Pulls up to stand and walks holding furniture",
      "Uses gestures like waving 'bye-bye' or shaking head",
      "Says at least 1–2 specific words like 'mama' or 'dada'",
      "Finds hidden objects easily (object permanence)",
    ],
    vaccines: "MMR, Varicella (Chickenpox), Hepatitis A, PCV15 Booster",
    parentTip: "Transition from baby bottles to sippy cups and introduce whole cow's milk or fortified plant alternatives.",
  },
  {
    id: "18mo",
    label: "18 Months",
    headline: "Climbing, Exploring & 10+ Single Words",
    milestones: [
      "Walks independently without holding onto anything",
      "Uses at least 6 to 10 recognizable words",
      "Points to show parent something exciting or interesting",
      "Drinks from a cup and eats with a baby spoon",
    ],
    vaccines: "DTaP Booster, Hepatitis A (dose 2)",
    parentTip: "Reading picture books together daily builds vocabulary and conversational turn-taking.",
  },
  {
    id: "2yr",
    label: "2 Years",
    headline: "2-Word Sentences, Running & Parallel Play",
    milestones: [
      "Strings 2 words together ('more milk', 'big dog')",
      "Runs with balance and kicks a ball forward",
      "Points to things or pictures when named",
      "Copies simple lines or circular scribbles with crayons",
    ],
    vaccines: "Annual Influenza & routine wellness screening",
    parentTip: "Encourage independent play and use positive phrasing like 'walking feet' instead of 'stop running'.",
  },
  {
    id: "4yr",
    label: "4 Years",
    headline: "Pre-K Readiness, Storytelling & Dressing",
    milestones: [
      "Tells simple multi-sentence stories about their day",
      "Hops on one foot and catches a large bounced ball",
      "Puts on clothes and buttons large buttons independently",
      "Understands concepts of counting to 10 and colors",
    ],
    vaccines: "DTaP, IPV, MMR, Varicella Pre-K Boosters",
    parentTip: "Focus on social sharing, bathroom independence, and listening to multi-step instructions for school readiness.",
  },
];

// Clinical Pediatric Providers
const doctors = [
  {
    name: "Dr. Emily Carter, MD, FAAP",
    role: "Lead Pediatrician & Medical Director",
    education: "Johns Hopkins Medicine · Boston Children's Hospital",
    experience: "14+ Years in Pediatrics",
    specialties: "Newborn Care, Infant Nutrition & Developmental Milestones",
    quote: "Every child is unique, and every parent deserves unhurried answers. We celebrate small victories together.",
    photo: "medical/BrightPath/pediatric-team.webp",
  },
  {
    name: "Dr. Noah Williams, MD, FAAP",
    role: "Board-Certified Pediatrician",
    education: "CHOP (Children's Hospital of Philadelphia)",
    experience: "10+ Years in Pediatrics",
    specialties: "Pediatric Asthma, Sports Medicine & Adolescent Health",
    quote: "I love making kids smile and taking the mystery and fear out of visiting the doctor.",
    photo: "medical/BrightPath/child-checkup.webp",
  },
  {
    name: "Priya Shah, MSN, CPNP-PC",
    role: "Certified Pediatric Nurse Practitioner",
    education: "Columbia University School of Nursing",
    experience: "8+ Years in Pediatric Care",
    specialties: "Same-Day Sick Care, Skin Rashes & Childhood Wellness",
    quote: "When a child feels sick, waiting days for an answer is stressful. We are here when you need us same-week.",
    photo: "medical/BrightPath/family-consultation.webp",
  },
];

// Verified Parent Reviews
const reviews = [
  {
    name: "Alyssa M.",
    tag: "Mom of 18-month-old & 4-year-old",
    quote: "Dr. Carter took 45 unhurried minutes with our newborn. She answered every single question on my notepad without making me feel silly. Best pediatric team in the city!",
    rating: 5,
    date: "Verified Parent · 2 weeks ago",
  },
  {
    name: "Jordan & Marcus T.",
    tag: "Parents of 7-year-old twins",
    quote: "Called at 8:15 AM with a sudden ear infection, and Priya NP saw both of our boys by 10:30 AM. Antibiotics were called in instantly. The sensory-friendly waiting room was a lifesaver.",
    rating: 5,
    date: "Verified Parent · 1 month ago",
  },
  {
    name: "Mina K.",
    tag: "First-Time Mom (6-month visit)",
    quote: "The clinic is bright, joyful, and impeccably clean. The digital milestone summaries they send to my phone after each checkup make tracking our baby's growth effortless.",
    rating: 5,
    date: "Verified Parent · 3 weeks ago",
  },
];

// Interactive Parent FAQs
const faqs = [
  {
    q: "How soon should our newborn be seen after hospital discharge?",
    a: "We recommend seeing newborns within 2 to 3 days after hospital discharge. We hold dedicated morning appointment blocks specifically for fresh newborns in our separate infant suite to keep them 100% protected.",
  },
  {
    q: "What if my child wakes up sick with a sudden fever?",
    a: "We reserve dedicated same-day sick appointments every single morning and afternoon. Call our clinic at 8:00 AM or book online through our parent portal for same-day pediatric evaluation.",
  },
  {
    q: "Do you separate well children from sick children in the clinic?",
    a: "Yes! BrightPath features completely separate waiting zones and designated exam suites for healthy newborn/wellness checkups versus sick visits, eliminating germ exposure.",
  },
  {
    q: "What insurance plans do you accept?",
    a: "We are in-network with all major commercial PPO plans (Blue Cross Blue Shield, Aetna, Cigna, UnitedHealthcare, Humana, Tricare) and regional Medicaid/CHIP programs with $0 preventive copays.",
  },
  {
    q: "Is there a nurse advice line available after clinic hours?",
    a: "Yes. Our registered pediatric triage nurses are on call 24/7/365 to answer urgent parent questions regarding fevers, rashes, medication dosages, or whether urgent care is needed.",
  },
];

export function BrightPathPediatrics() {
  // State management
  const [activeSection, setActiveSection] = useState<string>("services");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Hero interactive age stage
  const [heroStageId, setHeroStageId] = useState<string>("toddler");

  // Milestone interactive state
  const [activeMilestoneAge, setActiveMilestoneAge] = useState<string>("2mo");
  const [checkedMilestones, setCheckedMilestones] = useState<Record<string, boolean>>({});

  // Triage navigator state
  const [selectedTriageIdx, setSelectedTriageIdx] = useState<number>(0);

  // FAQ state
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Booking Modal State
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [selectedVisitType, setSelectedVisitType] = useState<string>("Well-Child Preventive Exam");
  const [selectedProvider, setSelectedProvider] = useState<string>("Dr. Emily Carter, MD, FAAP");
  const [selectedDay, setSelectedDay] = useState<string>("Tomorrow (Tue)");
  const [selectedTime, setSelectedTime] = useState<string>("10:30 AM");
  const [childName, setChildName] = useState<string>("");
  const [parentName, setParentName] = useState<string>("");
  const [parentPhone, setParentPhone] = useState<string>("");
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  // Computed data
  const currentHeroStage = heroAgeStages.find((s) => s.id === heroStageId) || heroAgeStages[1];
  const currentMilestone = milestoneAges.find((m) => m.id === activeMilestoneAge) || milestoneAges[0];
  const currentTriage = triageItems[selectedTriageIdx] || triageItems[0];

  // Milestone check toggle
  const toggleMilestone = (milestoneText: string) => {
    setCheckedMilestones((prev) => ({
      ...prev,
      [milestoneText]: !prev[milestoneText],
    }));
  };

  // ScrollSpy listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
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

  // Body scroll lock & Escape key dismiss for mobile drawer
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

  // Window resize to dismiss drawer on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Quick helper to start booking modal
  const handleStartBooking = (visitType?: string, provider?: string) => {
    if (visitType) setSelectedVisitType(visitType);
    if (provider) setSelectedProvider(provider);
    setBookingConfirmed(false);
    setBookingStep(1);
    setIsBookingOpen(true);
  };

  return (
    <main className="min-h-screen bg-[#faf8f5] font-sans text-slate-800 antialiased selection:bg-amber-300 selection:text-blue-900">
      {/* ========================================================================= */}
      {/* 1. ARCHITECTURAL FROSTED IVORY CAPSULE NAVBAR                             */}
      {/* ========================================================================= */}
      <div className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 md:px-6 pt-2 sm:pt-4 pointer-events-none">
        <div className="mx-auto max-w-7xl">
          <header className="pointer-events-auto relative flex items-center justify-between rounded-full border border-amber-200/80 bg-white/92 px-3 py-2 sm:px-5 sm:py-2.5 shadow-xl shadow-amber-950/5 backdrop-blur-xl transition-all duration-300">
            {/* Brand Logo & Sunshine Emblem */}
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <Link
                to="/medical"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 via-amber-300 to-yellow-200 text-amber-900 shadow-md shadow-amber-500/20 ring-2 ring-amber-300/60 transition-transform hover:scale-105 active:scale-95"
                title="Return to Medical Directory"
              >
                <Baby size={18} className="stroke-[2.5]" />
              </Link>
              <a href="#hero" className="flex flex-col">
                <span className="text-xs sm:text-sm font-black tracking-tight text-[#18253e] flex items-center gap-1 leading-tight">
                  BRIGHTPATH <span className="text-[#2f65b8] font-black hidden min-[380px]:inline">PEDIATRICS</span>
                </span>
                <span className="text-[9px] uppercase font-extrabold tracking-widest text-[#2f65b8] hidden md:inline leading-none mt-0.5">
                  Children & Family Health
                </span>
              </a>
            </div>

            {/* Desktop Capsule Navigation Links with Live ScrollSpy */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 rounded-full bg-slate-100/80 p-1 border border-slate-200/60 mx-2">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    className={`relative rounded-full px-2.5 py-1 text-[11px] xl:px-3.5 xl:py-1.5 xl:text-xs font-bold tracking-wide whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-[#2f65b8] to-[#1e40af] text-white shadow-sm"
                        : "text-slate-600 hover:text-[#2f65b8] hover:bg-white"
                    }`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Action: Pediatric Phone Hotline & Booking CTA */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              {/* Full phone pill on large desktop */}
              <a
                href="tel:5550193267"
                className="hidden xl:flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50/80 px-3 py-1.5 text-xs font-bold text-[#2f65b8] hover:bg-blue-100 transition-colors"
                title="Immediate Pediatric Front Desk"
              >
                <Phone size={13} className="text-[#2f65b8]" />
                <span>(555) 019-3267</span>
              </a>

              {/* Compact phone button on sm to lg screens */}
              <a
                href="tel:5550193267"
                className="hidden sm:flex xl:hidden items-center justify-center h-8 w-8 rounded-full border border-blue-200 bg-blue-50 text-[#2f65b8] hover:bg-blue-100 transition-colors"
                title="Call Pediatric Clinic"
              >
                <Phone size={14} />
              </a>

              {/* Book Child Visit CTA */}
              <button
                type="button"
                onClick={() => handleStartBooking()}
                className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#2f65b8] via-[#2555a3] to-[#1e40af] px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-black text-white shadow-lg shadow-blue-900/20 transition-all duration-200 hover:scale-105 active:scale-95"
              >
                <Calendar size={13} strokeWidth={2.5} className="sm:w-[14px] sm:h-[14px]" />
                <span className="hidden min-[400px]:inline">Book Child Visit</span>
                <span className="min-[400px]:hidden">Book</span>
              </button>

              {/* Mobile Menu Hamburger */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle navigation menu"
                className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 hover:bg-slate-100 lg:hidden transition-colors"
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
          className="fixed inset-0 z-50 bg-black/60 backdrop-blur-md lg:hidden flex justify-end transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-xs sm:max-w-sm h-full bg-white border-l border-amber-200 p-5 sm:p-6 flex flex-col justify-between overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="space-y-6">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-amber-400 to-yellow-200 text-amber-900 ring-2 ring-amber-300">
                    <Baby size={16} className="stroke-[2.5]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black tracking-wider text-[#18253e]">
                      BRIGHTPATH <span className="text-[#2f65b8]">PEDIATRICS</span>
                    </span>
                    <span className="text-[9px] uppercase font-bold text-slate-400">
                      Family Menu Directory
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:text-[#18253e] transition-colors"
                >
                  <X size={16} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-xs sm:text-sm font-bold transition-all ${
                        isActive
                          ? "bg-blue-50 text-[#2f65b8] border border-blue-200"
                          : "text-slate-700 hover:bg-slate-50 hover:text-[#2f65b8]"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight size={14} className={isActive ? "text-[#2f65b8]" : "text-slate-400"} />
                    </a>
                  );
                })}
              </div>

              {/* Quick Action: Book Child Visit */}
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleStartBooking();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#2f65b8] to-[#1e40af] py-3 text-xs font-black text-white shadow-lg shadow-blue-900/20"
              >
                <Calendar size={14} strokeWidth={2.5} />
                <span>Schedule a Child Visit</span>
              </button>

              {/* Emergency Same-Day Care Banner */}
              <div className="rounded-2xl border border-amber-300 bg-amber-50/80 p-4 space-y-2">
                <div className="flex items-center gap-2 text-amber-900 text-xs font-black uppercase tracking-wider">
                  <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
                  Same-Day Sick Care Available
                </div>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Sudden fever, croup, or earache? We hold dedicated sick slots every morning and afternoon.
                </p>
                <a
                  href="tel:5550193267"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#2f65b8] py-2.5 text-xs font-bold text-white hover:bg-[#2555a3] transition-colors"
                >
                  <Phone size={14} /> Call Desk: (555) 019-3267
                </a>
              </div>
            </div>

            <div className="pt-5 border-t border-slate-100 text-center text-[11px] text-slate-500 space-y-1">
              <p className="text-[#18253e] font-semibold">245 Brightpath Lane, Suite 120</p>
              <p className="text-[#2f65b8] font-bold">Mon–Fri 8am–5pm · Sat 9am–1pm</p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 2. STORYBOOK PLAYGROUND HERO SECTION WITH AGE-STAGE SWITCHER              */}
      {/* ========================================================================= */}
      <section id="hero" className="relative pt-24 sm:pt-32 pb-14 sm:pb-20 overflow-hidden bg-gradient-to-b from-[#fffefc] via-[#fbf8f2] to-[#faf8f5]">
        {/* Soft Background Playful Orbs */}
        <div className="pointer-events-none absolute -top-28 -right-28 h-[600px] w-[600px] rounded-full bg-blue-200/35 blur-[140px]" />
        <div className="pointer-events-none absolute top-36 -left-28 h-[500px] w-[500px] rounded-full bg-amber-200/45 blur-[130px]" />

        <Container>
          {/* Reassurance Banner */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50 px-4 py-1.5 text-xs font-extrabold text-amber-900 shadow-xs">
              <Sparkles size={14} className="text-amber-600" />
              <span>Family-First Pediatric Practice · Welcoming Newborns & New Families</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-[#2f65b8]">
              <Star size={13} className="fill-amber-400 text-amber-400" />
              <span>4.98 Rating · 620+ Verified Local Parent Reviews</span>
            </span>
          </div>

          {/* Warm Pediatric Main Headline */}
          <div className="mx-auto max-w-4xl text-center space-y-4">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#18253e] leading-[1.12]">
              Pediatric care as{" "}
              <span className="bg-gradient-to-r from-[#2f65b8] via-[#2555a3] to-[#1e40af] bg-clip-text text-transparent">
                gentle & cheerful
              </span>{" "}
              as childhood itself.
            </h1>
            <p className="mx-auto max-w-2xl text-sm sm:text-base lg:text-lg text-slate-600 leading-relaxed">
              Warm stethoscopes (no chills), dedicated clean newborn suites, and guaranteed same-day sick appointments.
              Select your child's stage below to preview tailored doctor visits:
            </p>

            {/* Interactive Child Age-Stage Selector */}
            <div className="pt-2 pb-2">
              <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 rounded-3xl bg-white p-2 sm:p-2.5 border border-amber-200/70 shadow-md">
                <span className="text-xs font-black uppercase tracking-wider text-slate-400 px-2 hidden md:inline">
                  Select Age:
                </span>
                {heroAgeStages.map((stage) => {
                  const isActive = stage.id === heroStageId;
                  return (
                    <button
                      key={stage.id}
                      type="button"
                      onClick={() => setHeroStageId(stage.id)}
                      className={`flex items-center gap-2 rounded-2xl px-3.5 py-2 sm:px-4 sm:py-2.5 text-xs sm:text-sm font-extrabold transition-all duration-300 active:scale-95 ${
                        isActive
                          ? "bg-gradient-to-r from-[#2f65b8] to-[#1e40af] text-white shadow-md shadow-blue-900/25 ring-2 ring-amber-300 scale-105"
                          : "bg-slate-50 text-slate-700 hover:bg-blue-50 hover:text-[#2f65b8]"
                      }`}
                    >
                      <span className="text-base sm:text-lg">{stage.emoji}</span>
                      <div className="text-left">
                        <div className="leading-tight">{stage.label}</div>
                        <div
                          className={`text-[10px] font-medium leading-none mt-0.5 ${
                            isActive ? "text-blue-100" : "text-slate-400"
                          }`}
                        >
                          {stage.age}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Dual Column Hero Stage Showcase */}
          <div className="mt-10 sm:mt-14 grid gap-8 lg:grid-cols-12 lg:items-center xl:gap-12">
            {/* Left Column: Active Stage Care Companion Card */}
            <div className="lg:col-span-5 xl:col-span-5 space-y-6">
              <div className="rounded-3xl border border-amber-200/80 bg-white p-6 sm:p-8 shadow-xl shadow-amber-950/5 space-y-5">
                <div className="flex items-center justify-between gap-2 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-amber-100 text-xl shadow-xs">
                      {currentHeroStage.emoji}
                    </span>
                    <div>
                      <h3 className="text-lg font-black text-[#18253e]">
                        {currentHeroStage.label} ({currentHeroStage.age})
                      </h3>
                      <p className="text-xs font-bold text-[#2f65b8]">
                        {currentHeroStage.badge}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-emerald-50 px-2.5 py-1 text-[11px] font-extrabold text-emerald-700 border border-emerald-200">
                    Open Tomorrow
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-xs sm:text-sm font-semibold text-slate-800 italic">
                    "{currentHeroStage.tagline}"
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {currentHeroStage.focus}
                  </p>
                </div>

                {/* Stage Care Highlights */}
                <div className="space-y-2.5 rounded-2xl bg-blue-50/70 p-4 border border-blue-100/80">
                  <div className="text-[11px] font-black uppercase tracking-wider text-[#2f65b8]">
                    What Parents Appreciate Most:
                  </div>
                  <div className="space-y-1.5">
                    {currentHeroStage.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 size={15} className="text-[#2f65b8] shrink-0" />
                        <span className="font-semibold">{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct Booking & Action */}
                <div className="space-y-2 pt-2">
                  <button
                    type="button"
                    onClick={() =>
                      handleStartBooking(currentHeroStage.visitType, currentHeroStage.provider)
                    }
                    className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#2f65b8] to-[#1e40af] py-3.5 text-sm font-black text-white shadow-lg shadow-blue-900/20 hover:from-[#2555a3] hover:to-[#17338a] transition-all hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Calendar size={16} />
                    <span>Schedule {currentHeroStage.label} Visit</span>
                    <ArrowRight size={16} />
                  </button>

                  <div className="flex items-center justify-between text-xs text-slate-500 px-1 pt-1">
                    <span>Next Slot: <strong className="text-[#18253e]">{currentHeroStage.nextSlot}</strong></span>
                    <a href="tel:5550193267" className="font-bold text-[#2f65b8] hover:underline">
                      (555) 019-3267
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Hero Visual Showcase (7 cols) */}
            <div className="relative lg:col-span-7 xl:col-span-7">
              {/* Ambient Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-tr from-blue-300/30 via-amber-200/30 to-transparent blur-2xl"
              />

              {/* Visual Card */}
              <div className="relative overflow-hidden rounded-[2.25rem] border border-amber-200/90 bg-white p-3 sm:p-4 shadow-2xl shadow-amber-950/10 ring-1 ring-blue-100">
                <div className="relative overflow-hidden rounded-[1.75rem]">
                  <img
                    src={imageUrl(currentHeroStage.image)}
                    alt={`${currentHeroStage.label} care at BrightPath Pediatrics`}
                    className="h-[360px] w-full object-cover sm:h-[460px] md:h-[500px] lg:h-[540px] xl:h-[580px] transition-all duration-700 hover:scale-[1.02]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18253e]/80 via-[#18253e]/20 to-transparent" />

                  {/* Top-Left Live Status Badge */}
                  <div className="absolute top-3.5 left-3.5 sm:top-5 sm:left-5 flex items-center gap-2 rounded-full border border-white/80 bg-white/95 px-3.5 py-1.5 text-xs font-bold text-[#18253e] shadow-lg backdrop-blur-md">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                    </span>
                    <span>Open Today · Zero Waiting Room Delay</span>
                  </div>

                  {/* Top-Right Rapid Triage Pill */}
                  <div className="hidden sm:flex absolute top-5 right-5 items-center gap-1.5 rounded-full border border-white/80 bg-white/95 px-3.5 py-1.5 text-xs font-bold text-[#2f65b8] shadow-lg backdrop-blur-md">
                    <Clock size={13} className="text-amber-500" />
                    <span>Same-Day Sick Care Reserved</span>
                  </div>

                  {/* Bottom Overlay Card: Provider & Slot */}
                  <div className="absolute right-3 bottom-3 left-3 sm:right-5 sm:bottom-5 sm:left-auto sm:max-w-md rounded-2xl border border-white/80 bg-white/95 p-4 text-[#18253e] shadow-2xl backdrop-blur-xl sm:p-5">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-1.5 text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-[#2f65b8]">
                          <span className="h-2 w-2 rounded-full bg-emerald-500" />
                          <span>Recommended Clinician</span>
                        </div>
                        <h2 className="mt-0.5 text-sm font-black sm:text-base text-[#18253e]">
                          {currentHeroStage.provider}
                        </h2>
                        <p className="mt-0.5 text-xs text-slate-500">
                          {currentHeroStage.nextSlot} · Unhurried 30–45 min exam.
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() =>
                          handleStartBooking(currentHeroStage.visitType, currentHeroStage.provider)
                        }
                        className="shrink-0 rounded-xl bg-gradient-to-r from-[#2f65b8] to-[#1e40af] px-3.5 py-2 text-xs font-bold text-white shadow-md hover:from-[#2555a3] hover:to-[#17338a] transition active:scale-95"
                      >
                        Claim Slot
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ambient Floating Clinic Feature Badge (Left Offset) */}
              <div className="hidden md:flex absolute -bottom-5 -left-5 items-center gap-3 rounded-2xl border border-slate-200 bg-white/98 p-3.5 text-slate-800 shadow-2xl backdrop-blur-md">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-white shadow-md shadow-amber-500/20">
                  <Smile size={22} />
                </div>
                <div className="text-xs">
                  <div className="font-extrabold text-[#18253e]">Zero Cold Instruments</div>
                  <div className="text-slate-500">Warm stethoscopes & calm sensory exam suites</div>
                </div>
              </div>

              {/* Top-Right Floating Rating Badge */}
              <div className="hidden xl:flex absolute -top-4 -right-4 items-center gap-2 rounded-2xl border border-slate-200 bg-white/98 px-3.5 py-2 text-[#18253e] shadow-2xl backdrop-blur-md">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                  <Star size={16} className="fill-amber-500 text-amber-500" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#18253e] leading-tight">4.98 Parent Rating</div>
                  <div className="text-[10px] text-[#2f65b8] font-semibold">Top Rated Pediatric Clinic</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust & Reassurance Strip */}
          <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5 border border-amber-200/80 shadow-xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <Star size={18} className="fill-amber-500 text-amber-500" />
              </div>
              <div>
                <div className="text-sm font-black text-[#18253e] leading-tight">4.98 / 5.0</div>
                <div className="text-[11px] text-slate-500">620+ Parent Reviews</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5 border border-blue-200/80 shadow-xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-[#2f65b8]">
                <Clock size={18} />
              </div>
              <div>
                <div className="text-sm font-black text-[#18253e] leading-tight">Same-Day</div>
                <div className="text-[11px] text-slate-500">Sick Slots Daily</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5 border border-emerald-200/80 shadow-xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <ShieldCheck size={18} />
              </div>
              <div>
                <div className="text-sm font-black text-[#18253e] leading-tight">FAAP MDs</div>
                <div className="text-[11px] text-slate-500">Board-Certified</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-white p-3.5 border border-rose-200/80 shadow-xs">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-rose-100 text-rose-600">
                <Heart size={18} />
              </div>
              <div>
                <div className="text-sm font-black text-[#18253e] leading-tight">Ages 0–18</div>
                <div className="text-[11px] text-slate-500">Newborn to Teen</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. ASYMMETRICAL PEDIATRIC BENTO GRID SERVICES                             */}
      {/* ========================================================================= */}
      <section id="services" className="py-20 sm:py-28 bg-white border-t border-b border-slate-200/70">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-[#2f65b8]">
              Family-First Care Portfolio
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#18253e] tracking-tight">
              Gentle Pediatric Services, Organized as a Modern Bento.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every appointment is unhurried, transparent, and designed to eliminate clinic fear.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Bento 1 (Large - 7 cols): Newborn & Infant Care Suite */}
            <div className="md:col-span-7 rounded-3xl border border-amber-200 bg-gradient-to-br from-[#fffdfa] to-[#fef8ed] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300">
              <div className="space-y-4 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-900 border border-amber-300">
                    🐣 Newborn Priority
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    $0 Copay on Most Insurances
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#18253e]">
                  Newborn Wellness & Infant Feeding Suite
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Unhurried 45–60 minute visits dedicated to healthy weight gain, gentle jaundice checks, umbilical cord care, and breastfeeding/formula feeding reassurance. You are never rushed.
                </p>

                <div className="rounded-2xl bg-white/90 border border-amber-200/80 p-4 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-800">
                    <CheckCircle2 size={15} className="text-[#2f65b8] shrink-0" />
                    <span>Protected infant waiting room zone (zero contact with sick children)</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-800">
                    <CheckCircle2 size={15} className="text-[#2f65b8] shrink-0" />
                    <span>Certified lactation and formula feeding roadmaps</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-800">
                    <CheckCircle2 size={15} className="text-[#2f65b8] shrink-0" />
                    <span>Direct phone access to on-call pediatrician for newborn questions</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-amber-200/60 flex flex-wrap items-center justify-between gap-4 relative z-10">
                <span className="text-xs font-bold text-slate-500">Duration: 45–60 mins · Ages 0–12 Mo</span>
                <button
                  type="button"
                  onClick={() => handleStartBooking("Newborn First Checkup (2–5 Days)", "Dr. Emily Carter, MD, FAAP")}
                  className="rounded-xl bg-[#2f65b8] px-5 py-2.5 text-xs font-extrabold text-white hover:bg-[#2555a3] transition-colors shadow-md"
                >
                  Schedule Newborn Exam
                </button>
              </div>
            </div>

            {/* Bento 2 (5 cols): Same-Day Sick Care */}
            <div className="md:col-span-5 rounded-3xl border border-rose-200 bg-gradient-to-br from-[#fffafb] to-[#fff0f3] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group shadow-md hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-black text-rose-800 border border-rose-300 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500 animate-pulse" />
                    Same-Day Sick Care
                  </span>
                  <span className="text-xs font-bold text-rose-600">Reserved Today</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#18253e]">
                  Rapid Sick Visit & Prescription Triage
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Sudden fevers, sore throats, earaches, croup, or wheezing. We guarantee same-day clinic evaluations so you never have to wait in an emergency room.
                </p>

                <div className="rounded-2xl bg-white p-3 border border-rose-100 space-y-1.5 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-rose-600 shrink-0" />
                    <span>On-site rapid strep, flu & RSV PCR results in 15 minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-rose-600 shrink-0" />
                    <span>Prescriptions sent immediately to your preferred pharmacy</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-rose-200 flex items-center justify-between">
                <span className="text-xs text-slate-500">Duration: 20–30 mins</span>
                <button
                  type="button"
                  onClick={() => handleStartBooking("Same-Day Pediatric Sick Exam", "Priya Shah, MSN, CPNP")}
                  className="rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-500 shadow-md"
                >
                  Book Sick Visit
                </button>
              </div>
            </div>

            {/* Bento 3 (4 cols): Routine Well-Child Checkups */}
            <div className="md:col-span-4 rounded-3xl border border-blue-200 bg-gradient-to-br from-[#f8fbff] to-[#eff6ff] p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-[#2f65b8]">
                    Wellness Care
                  </span>
                  <span className="text-xs text-slate-500">Ages 1–18</span>
                </div>
                <h3 className="text-xl font-black text-[#18253e]">Well-Child Milestones</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Full physical checkup, speech and motor development reviews, nutrition guidance, and gentle tear-free vaccines.
                </p>
                <div className="text-xs text-[#2f65b8] font-bold">
                  Includes full digital growth curve sent to your phone app
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-blue-200/60 flex items-center justify-between">
                <span className="text-xs text-slate-500">30–45 mins</span>
                <button
                  type="button"
                  onClick={() => handleStartBooking("Well-Child Preventive Exam", "Dr. Noah Williams, MD, FAAP")}
                  className="rounded-xl border border-blue-300 bg-white px-4 py-2 text-xs font-bold text-[#2f65b8] hover:bg-blue-50"
                >
                  Book Checkup
                </button>
              </div>
            </div>

            {/* Bento 4 (4 cols): School & Sports Physicals */}
            <div className="md:col-span-4 rounded-3xl border border-emerald-200 bg-gradient-to-br from-[#f6fdf9] to-[#edfcf2] p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-black text-emerald-800">
                    Activity Clearance
                  </span>
                  <span className="text-xs text-emerald-700 font-bold">Fast Forms</span>
                </div>
                <h3 className="text-xl font-black text-[#18253e]">School & Sports Physicals</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Cardiovascular clearance, vision screenings, joint range-of-motion, and state athletic forms stamped the exact same day.
                </p>
                <div className="text-xs text-emerald-800 font-bold">
                  Official state & camp clearance packets completed on-site
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-200/60 flex items-center justify-between">
                <span className="text-xs text-slate-500">20–30 mins</span>
                <button
                  type="button"
                  onClick={() => handleStartBooking("School & Sports Physical", "Dr. Noah Williams, MD, FAAP")}
                  className="rounded-xl border border-emerald-300 bg-white px-4 py-2 text-xs font-bold text-emerald-800 hover:bg-emerald-50"
                >
                  Book Physical
                </button>
              </div>
            </div>

            {/* Bento 5 (4 cols): Adolescent Confidential Care */}
            <div className="md:col-span-4 rounded-3xl border border-indigo-200 bg-gradient-to-br from-[#faf8ff] to-[#f2efff] p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-black text-indigo-800">
                    Adolescent Focus
                  </span>
                  <span className="text-xs text-slate-500">Ages 11–18</span>
                </div>
                <h3 className="text-xl font-black text-[#18253e]">Teen Health & Wellness</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Confidential private discussions, acne management, sports injury prevention, and compassionate mental health screenings.
                </p>
                <div className="text-xs text-indigo-800 font-bold">
                  Respectful environment where adolescents feel heard
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-indigo-200/60 flex items-center justify-between">
                <span className="text-xs text-slate-500">30 mins</span>
                <button
                  type="button"
                  onClick={() => handleStartBooking("Adolescent Wellness & Sports Clearance", "Dr. Emily Carter, MD, FAAP")}
                  className="rounded-xl border border-indigo-300 bg-white px-4 py-2 text-xs font-bold text-indigo-800 hover:bg-indigo-50"
                >
                  Book Teen Visit
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE MILESTONES & CDC VACCINE PLAYGROUND                        */}
      {/* ========================================================================= */}
      <section id="milestones" className="py-20 sm:py-28 bg-[#faf8f5]">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-amber-300 bg-amber-100 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-amber-900">
              Interactive Parent Guide
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#18253e] tracking-tight">
              Childhood Growth & Vaccine Roadmap.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Click through childhood age milestones below to test developmental achievements and view CDC vaccination recommendations.
            </p>
          </div>

          {/* Age Selection Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {milestoneAges.map((m) => {
              const isSelected = m.id === activeMilestoneAge;
              return (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setActiveMilestoneAge(m.id)}
                  className={`rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-black transition-all ${
                    isSelected
                      ? "bg-[#2f65b8] text-white shadow-md shadow-blue-900/20 ring-2 ring-amber-300 scale-105"
                      : "bg-white text-slate-700 hover:bg-blue-50 border border-slate-200"
                  }`}
                >
                  {m.label}
                </button>
              );
            })}
          </div>

          {/* Active Milestone Card */}
          <div className="mx-auto max-w-4xl rounded-3xl border border-amber-200 bg-white p-6 sm:p-10 shadow-xl space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#2f65b8]">
                  Milestone Focus for {currentMilestone.label}
                </span>
                <h3 className="text-2xl font-black text-[#18253e] mt-1">
                  {currentMilestone.headline}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => handleStartBooking(`${currentMilestone.label} Well-Child Visit`)}
                className="rounded-xl bg-[#2f65b8] px-5 py-2.5 text-xs font-black text-white hover:bg-[#2555a3] shadow-md shrink-0"
              >
                Schedule {currentMilestone.label} Exam
              </button>
            </div>

            {/* Checklist of Milestones */}
            <div className="space-y-4">
              <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                Interactive Developmental Checklist (Click to test):
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {currentMilestone.milestones.map((item) => {
                  const isChecked = checkedMilestones[item] || false;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => toggleMilestone(item)}
                      className={`flex items-start gap-3 p-3.5 rounded-2xl text-left border transition-all ${
                        isChecked
                          ? "border-emerald-400 bg-emerald-50/80 text-emerald-900 font-bold"
                          : "border-slate-200 bg-slate-50/60 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <div
                        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-lg border mt-0.5 transition-colors ${
                          isChecked
                            ? "border-emerald-600 bg-emerald-600 text-white"
                            : "border-slate-300 bg-white"
                        }`}
                      >
                        {isChecked && <Check size={12} strokeWidth={3} />}
                      </div>
                      <span className="text-xs sm:text-sm">{item}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Vaccine & Pediatrician Tip Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl border border-blue-200 bg-blue-50/70 p-4 space-y-1.5">
                <div className="text-xs font-black uppercase tracking-wider text-[#2f65b8]">
                  CDC Recommended Immunizations:
                </div>
                <p className="text-xs sm:text-sm font-bold text-[#18253e]">
                  {currentMilestone.vaccines}
                </p>
                <p className="text-[11px] text-slate-600">
                  Administered with cold-spray numbing & sweet-ease comfort drops for pain-free visits.
                </p>
              </div>

              <div className="rounded-2xl border border-amber-200 bg-amber-50/70 p-4 space-y-1.5">
                <div className="text-xs font-black uppercase tracking-wider text-amber-900">
                  Pediatrician Parenting Tip:
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-medium">
                  {currentMilestone.parentTip}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. THE SENSORY TEAR-FREE VISIT EXPERIENCE                                */}
      {/* ========================================================================= */}
      <section id="the-visit" className="py-20 sm:py-28 bg-white border-t border-b border-slate-200/70">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-[#2f65b8]">
              Child-First Environment
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#18253e] tracking-tight">
              Why BrightPath is 100% Tear-Free.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We redesigned the pediatric experience from a child's sensory perspective.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-[#fffefc] to-[#fbf8f2] p-6 space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-100 text-amber-600 text-xl font-black">
                01
              </div>
              <h3 className="text-lg font-black text-[#18253e]">1. Warm Stethoscopes</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                No icy metal on tiny chests. All instruments are pre-warmed, and doctors let toddlers touch instruments before exams.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-[#fffefc] to-[#fbf8f2] p-6 space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-[#2f65b8] text-xl font-black">
                02
              </div>
              <h3 className="text-lg font-black text-[#18253e]">2. Bubble Distraction</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Exam suites feature soft LED ceilings, calming bubble wands, and sweet-ease distraction techniques that keep children smiling.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-[#fffefc] to-[#fbf8f2] p-6 space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-600 text-xl font-black">
                03
              </div>
              <h3 className="text-lg font-black text-[#18253e]">3. Zero Waiting Delay</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Check in directly from your smartphone at the curb and head straight into a private exam room with zero crowded lobby exposure.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-gradient-to-b from-[#fffefc] to-[#fbf8f2] p-6 space-y-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-100 text-rose-600 text-xl font-black">
                04
              </div>
              <h3 className="text-lg font-black text-[#18253e]">4. Treasure Box Prizes</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Every child ends their visit with a trip to our legendary treasure chest to pick out stickers, coloring pads, and courage medals.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. INTERACTIVE SYMPTOM & CARE FINDER TRIAGE WIDGET                       */}
      {/* ========================================================================= */}
      <section id="navigator" className="py-20 sm:py-28 bg-[#faf8f5]">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-[#2f65b8]">
              Interactive Care Finder
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#18253e] tracking-tight">
              Not Sure Which Appointment You Need?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Click your primary reason for visiting below. We will instantly match the visit format, recommended doctor, and prep tips.
            </p>
          </div>

          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left: Symptom Selector Buttons */}
            <div className="lg:col-span-7 space-y-2">
              <label className="block text-xs font-black uppercase tracking-wider text-slate-400 mb-2">
                Select Your Child's Reason:
              </label>
              {triageItems.map((item, idx) => {
                const isSelected = selectedTriageIdx === idx;
                return (
                  <button
                    key={item.symptom}
                    type="button"
                    onClick={() => setSelectedTriageIdx(idx)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl text-left border transition-all ${
                      isSelected
                        ? "border-[#2f65b8] bg-blue-50 text-[#18253e] font-black shadow-sm"
                        : "border-slate-200 bg-slate-50/60 text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    <span className="text-xs sm:text-sm">{item.symptom}</span>
                    <ChevronRight size={16} className={isSelected ? "text-[#2f65b8]" : "text-slate-400"} />
                  </button>
                );
              })}
            </div>

            {/* Right: Recommended Care Card */}
            <div className="lg:col-span-5 rounded-3xl border border-blue-200 bg-gradient-to-b from-blue-50/90 to-white p-6 flex flex-col justify-between shadow-sm">
              <div className="space-y-4">
                <span className="rounded-full bg-[#2f65b8] px-3 py-1 text-[10px] font-black text-white uppercase tracking-wider">
                  Recommended Visit Format
                </span>
                <h4 className="text-xl font-black text-[#18253e] leading-snug">
                  {currentTriage.visitType}
                </h4>

                <div className="space-y-2 text-xs text-slate-700 border-t border-blue-100 pt-3">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Format:</span>
                    <span className="font-bold text-[#18253e]">{currentTriage.format}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Timeframe:</span>
                    <span className="font-bold text-[#2f65b8]">{currentTriage.timeframe}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Suggested Doctor:</span>
                    <span className="font-bold text-[#18253e]">{currentTriage.recommendedDoc}</span>
                  </div>
                </div>

                <div className="rounded-xl bg-white border border-blue-200 p-3 text-xs space-y-1">
                  <span className="font-black text-[#2f65b8] uppercase text-[10px]">Preparation Tip:</span>
                  <p className="text-slate-600 leading-relaxed">{currentTriage.prepTip}</p>
                </div>
              </div>

              <div className="pt-6">
                <button
                  type="button"
                  onClick={() => handleStartBooking(currentTriage.visitType, currentTriage.recommendedDoc)}
                  className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-[#2f65b8] to-[#1e40af] py-3.5 text-xs font-black text-white shadow-lg shadow-blue-900/20 hover:scale-105 transition-all"
                >
                  <Calendar size={14} />
                  <span>Book This Visit</span>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. BOARD-CERTIFIED PEDIATRICIANS                                         */}
      {/* ========================================================================= */}
      <section id="providers" className="py-20 sm:py-28 bg-white border-t border-b border-slate-200/70">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-[#2f65b8]">
              Clinical Excellence
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#18253e] tracking-tight">
              Board-Certified Doctors Who Truly Listen.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Ivy-league trained, fellowship-certified, and passionate about reassuring parents.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doctors.map((doc) => (
              <div
                key={doc.name}
                className="rounded-3xl border border-slate-200 bg-gradient-to-b from-[#fffdfa] to-white overflow-hidden shadow-md flex flex-col justify-between hover:shadow-xl transition-all duration-300 group"
              >
                <div>
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-slate-100">
                    <img
                      src={imageUrl(doc.photo)}
                      alt={doc.name}
                      className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="rounded-full bg-white/90 border border-white/40 px-3 py-1 text-[10px] font-black text-[#2f65b8]">
                        {doc.experience}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-lg font-black text-[#18253e]">{doc.name}</h3>
                      <p className="text-xs font-bold text-[#2f65b8]">{doc.role}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{doc.education}</p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed italic">
                      "{doc.quote}"
                    </p>
                    <div className="text-[11px] font-semibold text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                      Focus: {doc.specialties}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700">Accepting Patients</span>
                  <button
                    type="button"
                    onClick={() => handleStartBooking("Well-Child Preventive Exam", doc.name)}
                    className="rounded-xl bg-[#2f65b8] px-4 py-2 text-xs font-bold text-white hover:bg-[#2555a3] transition-colors shadow-sm"
                  >
                    Book with {doc.name.split(" ")[1]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. VERIFIED PARENT REVIEWS & TESTIMONIALS                                */}
      {/* ========================================================================= */}
      <section id="reviews" className="py-20 sm:py-28 bg-[#faf8f5]">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-amber-300 bg-amber-100 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-amber-900">
              Verified Parent Love
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#18253e] tracking-tight">
              Loved by Over 620+ Local Families.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Read why parents trust BrightPath Pediatrics with their children's care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 space-y-4 shadow-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">{rev.date}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <p className="text-xs font-black text-[#18253e]">{rev.name}</p>
                  <p className="text-[11px] text-[#2f65b8] font-bold">{rev.tag}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. INTERACTIVE PARENT FAQ ACCORDION                                       */}
      {/* ========================================================================= */}
      <section id="faq" className="py-20 sm:py-28 bg-white border-t border-slate-200/70">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-[#2f65b8]">
              Parent FAQs
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#18253e] tracking-tight">
              Frequently Asked Questions.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Everything you need to know about after-hours advice, billing, and booking.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-200 bg-gradient-to-r from-slate-50 to-white overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-[#18253e] hover:text-[#2f65b8] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform ${
                        isOpen ? "rotate-180 text-[#2f65b8] bg-blue-100" : ""
                      }`}
                    >
                      <ChevronDown size={14} />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 10. WARM PEDIATRIC FOOTER                                                 */}
      {/* ========================================================================= */}
      <footer className="bg-[#18253e] text-slate-300 py-16 text-xs">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-black text-base">
                <Baby size={20} className="text-amber-400 stroke-[2.5]" />
                <span>BRIGHTPATH PEDIATRICS</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Dedicated to helping families feel calm, supported, and prepared through every developmental milestone.
              </p>
              <div className="text-amber-300 font-bold">
                (555) 019-3267 · care@brightpathpeds.com
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-bold uppercase tracking-wider text-white">Clinic Location</p>
              <p className="leading-relaxed">
                BrightPath Medical Pavilion<br />
                245 Brightpath Lane, Suite 120<br />
                Oakridge Pediatric District, MD 20854
              </p>
              <p className="text-emerald-400">Convenient stroller parking & ground-floor entrance</p>
            </div>

            <div className="space-y-3">
              <p className="font-bold uppercase tracking-wider text-white">Clinic Hours</p>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Monday – Friday:</span>
                  <span className="text-white">8:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday Sick Clinic:</span>
                  <span className="text-white">9:00 AM – 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-amber-400">24/7 Nurse Triage Line</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-bold uppercase tracking-wider text-white">Quick Navigation</p>
              <div className="flex flex-col space-y-1.5">
                <a href="#services" className="hover:text-amber-300">Bento Pediatric Services</a>
                <a href="#milestones" className="hover:text-amber-300">Milestone Checklist</a>
                <a href="#the-visit" className="hover:text-amber-300">Tear-Free Visit Guarantee</a>
                <a href="#navigator" className="hover:text-amber-300">Interactive Triage Navigator</a>
                <Link to="/medical" className="text-amber-400 hover:underline">← All Medical Concepts</Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} BrightPath Pediatrics & Adolescent Medicine, LLC. All Rights Reserved.</p>
            <div className="flex gap-4">
              <span>AAP Member</span>
              <span>Board-Certified</span>
              <span>HIPAA Compliant</span>
            </div>
          </div>
        </Container>
      </footer>

      {/* ========================================================================= */}
      {/* 11. FLOATING MOBILE CONCIERGE ACTION BAR                                  */}
      {/* ========================================================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 border-t border-amber-200 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl sm:hidden shadow-2xl">
        <div className="flex items-center gap-2">
          <a
            href="tel:5550193267"
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-blue-200 bg-blue-50 py-2.5 text-xs font-bold text-[#2f65b8] active:scale-95"
          >
            <Phone size={14} />
            <span>Call Clinic</span>
          </a>

          <button
            type="button"
            onClick={() => handleStartBooking()}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#2f65b8] via-[#2555a3] to-[#1e40af] py-2.5 text-xs font-black text-white shadow-md active:scale-95"
          >
            <Calendar size={14} strokeWidth={2.5} />
            <span>Book Visit</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 12. INTERACTIVE 3-STEP APPOINTMENT SCHEDULER MODAL                        */}
      {/* ========================================================================= */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl border border-amber-200 bg-white p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
            <button
              type="button"
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-800"
            >
              <X size={20} />
            </button>

            {!bookingConfirmed ? (
              <div>
                <div className="mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#2f65b8]">
                    BrightPath Parent Scheduler
                  </span>
                  <h3 className="text-xl font-black text-[#18253e] mt-0.5">
                    Schedule Your Child's Visit
                  </h3>
                </div>

                {/* Step indicators */}
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 text-xs">
                  <span className={`font-bold ${bookingStep >= 1 ? "text-[#2f65b8]" : "text-slate-400"}`}>
                    1. Visit & Doctor
                  </span>
                  <ChevronRight size={14} className="text-slate-300" />
                  <span className={`font-bold ${bookingStep >= 2 ? "text-[#2f65b8]" : "text-slate-400"}`}>
                    2. Date & Time
                  </span>
                  <ChevronRight size={14} className="text-slate-300" />
                  <span className={`font-bold ${bookingStep >= 3 ? "text-[#2f65b8]" : "text-slate-400"}`}>
                    3. Child Info
                  </span>
                </div>

                {bookingStep === 1 && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Reason for Appointment</label>
                      <select
                        value={selectedVisitType}
                        onChange={(e) => setSelectedVisitType(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 focus:border-[#2f65b8] focus:outline-none"
                      >
                        <option value="Well-Child Preventive Exam">Well-Child Preventive Exam</option>
                        <option value="Newborn First Checkup (2–5 Days)">Newborn First Checkup (2–5 Days)</option>
                        <option value="Same-Day Pediatric Sick Exam">Same-Day Pediatric Sick Exam</option>
                        <option value="School & Sports Physical">School & Sports Physical</option>
                        <option value="Adolescent Wellness & Sports Clearance">Adolescent Wellness & Sports Clearance</option>
                        <option value="Pediatric Virtual Telehealth">Pediatric Virtual Telehealth</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Preferred Clinician</label>
                      <select
                        value={selectedProvider}
                        onChange={(e) => setSelectedProvider(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 focus:border-[#2f65b8] focus:outline-none"
                      >
                        <option value="First Available Doctor">First Available Clinician (Fastest)</option>
                        <option value="Dr. Emily Carter, MD, FAAP">Dr. Emily Carter, MD, FAAP (Lead Pediatrician)</option>
                        <option value="Dr. Noah Williams, MD, FAAP">Dr. Noah Williams, MD, FAAP (Asthma & Sports)</option>
                        <option value="Priya Shah, MSN, CPNP">Priya Shah, MSN, CPNP (Same-Day Sick Care)</option>
                      </select>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setBookingStep(2)}
                        className="rounded-xl bg-[#2f65b8] px-6 py-2.5 font-bold text-white hover:bg-[#2555a3]"
                      >
                        Select Date & Time →
                      </button>
                    </div>
                  </div>
                )}

                {bookingStep === 2 && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Select Day</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {["Today (Sick Priority)", "Tomorrow (Tue)", "Wednesday", "Thursday"].map((day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => setSelectedDay(day)}
                            className={`p-2 rounded-xl text-center font-bold border transition-all ${
                              selectedDay === day
                                ? "border-[#2f65b8] bg-blue-50 text-[#2f65b8]"
                                : "border-slate-200 bg-slate-50 text-slate-700"
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Available Time Slot</label>
                      <div className="grid grid-cols-3 gap-2">
                        {["9:00 AM", "10:30 AM", "11:45 AM", "1:30 PM", "2:45 PM", "4:15 PM"].map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`p-2 rounded-xl text-center font-bold border transition-all ${
                              selectedTime === time
                                ? "border-[#2f65b8] bg-blue-50 text-[#2f65b8]"
                                : "border-slate-200 bg-slate-50 text-slate-700"
                            }`}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between">
                      <button
                        type="button"
                        onClick={() => setBookingStep(1)}
                        className="text-slate-500 hover:text-slate-800"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setBookingStep(3)}
                        className="rounded-xl bg-[#2f65b8] px-6 py-2.5 font-bold text-white hover:bg-[#2555a3]"
                      >
                        Enter Child's Details →
                      </button>
                    </div>
                  </div>
                )}

                {bookingStep === 3 && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setBookingConfirmed(true);
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Child's Full Name *</label>
                      <input
                        type="text"
                        required
                        value={childName}
                        onChange={(e) => setChildName(e.target.value)}
                        placeholder="e.g. Leo Parker"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 focus:border-[#2f65b8] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-700 font-bold mb-1">Parent's Name *</label>
                        <input
                          type="text"
                          required
                          value={parentName}
                          onChange={(e) => setParentName(e.target.value)}
                          placeholder="e.g. Sarah Parker"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 focus:border-[#2f65b8] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-bold mb-1">Mobile Phone (SMS) *</label>
                        <input
                          type="tel"
                          required
                          value={parentPhone}
                          onChange={(e) => setParentPhone(e.target.value)}
                          placeholder="(555) 000-0000"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 focus:border-[#2f65b8] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="rounded-xl bg-blue-50 border border-blue-200 p-3 space-y-1 text-slate-700">
                      <div className="flex justify-between">
                        <span>Visit:</span>
                        <span className="font-bold text-[#18253e]">{selectedVisitType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Doctor:</span>
                        <span className="font-bold text-[#18253e]">{selectedProvider}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Time:</span>
                        <span className="font-bold text-[#2f65b8]">{selectedDay} at {selectedTime}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setBookingStep(2)}
                        className="text-slate-500 hover:text-slate-800"
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        className="rounded-xl bg-gradient-to-r from-[#2f65b8] to-[#1e40af] px-6 py-2.5 font-bold text-white shadow-md hover:scale-105 transition-all"
                      >
                        Confirm Appointment
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              /* Confirmation Voucher Card */
              <div className="text-center py-4 space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                  <CheckCircle2 size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-[#18253e]">
                  Child Visit Confirmed!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  We look forward to meeting {childName || "your child"}! A digital check-in packet and clinic directions have been sent to {parentPhone || "your mobile phone"}.
                </p>

                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Child:</span>
                    <span className="font-bold text-[#18253e]">{childName || "Child Patient"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Visit Type:</span>
                    <span className="font-bold text-[#18253e]">{selectedVisitType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Pediatrician:</span>
                    <span className="font-bold text-[#18253e]">{selectedProvider}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Scheduled Time:</span>
                    <span className="font-bold text-[#2f65b8]">{selectedDay} · {selectedTime}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Location:</span>
                    <span className="font-bold text-[#18253e]">245 Brightpath Lane, Suite 120</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsBookingOpen(false)}
                  className="w-full rounded-xl bg-[#18253e] py-3 text-xs font-bold text-white hover:bg-slate-800"
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
