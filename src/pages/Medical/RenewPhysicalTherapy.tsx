import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Dumbbell,
  ExternalLink,
  FileText,
  Flame,
  HeartPulse,
  HelpCircle,
  Info,
  MapPin,
  Menu,
  Phone,
  Play,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  X,
  Zap,
} from "lucide-react";
import { Container } from "../../components";
import { imageUrl } from "../../assets/optimized";

// Navigation links strictly aligned with DOM section order
const navLinks = [
  {
    id: "services",
    label: "Services",
    fullLabel: "Clinical Services",
    desc: "Orthopedic, sports rehab & dry needling",
    href: "#services",
    icon: Dumbbell,
  },
  {
    id: "body-navigator",
    label: "Joints",
    fullLabel: "Joint & Pain Navigator",
    desc: "Interactive anatomical injury selector",
    href: "#body-navigator",
    icon: Target,
  },
  {
    id: "tech-modalities",
    label: "Tech Lab",
    fullLabel: "Kinetic Lab & Modalities",
    desc: "AlterG, BFR & 3D video gait analysis",
    href: "#tech-modalities",
    icon: Activity,
  },
  {
    id: "recovery-milestones",
    label: "Milestones",
    fullLabel: "4-Phase Recovery Milestones",
    desc: "Objective return-to-sport discharge criteria",
    href: "#recovery-milestones",
    icon: TrendingUp,
  },
  {
    id: "therapists",
    label: "DPT Team",
    fullLabel: "Doctors of Physical Therapy",
    desc: "Board-certified OCS & SCS clinical specialists",
    href: "#therapists",
    icon: Award,
  },
  {
    id: "visit-info",
    label: "Direct Access",
    fullLabel: "Direct Access & Insurance",
    desc: "No MD referral needed · In-network plans",
    href: "#visit-info",
    icon: ShieldCheck,
  },
  {
    id: "reviews",
    label: "Stories",
    fullLabel: "Patient Recovery Stories",
    desc: "4.98 rating across 620+ patient recoveries",
    href: "#reviews",
    icon: Star,
  },
  {
    id: "screener",
    label: "Screener",
    fullLabel: "Self-Triage Screener",
    desc: "Interactive symptom & goal evaluation",
    href: "#screener",
    icon: HelpCircle,
  },
];

// Interactive Joint & Pain Target Data
const anatomicalZones = [
  {
    id: "spine",
    label: "Spine & Neck",
    icon: "🦴",
    title: "Cervical & Lumbar Spine Care",
    tagline: "Sciatica, Disc Herniation, Spinal Stenosis & Postural Decompression",
    overview:
      "Spinal pain is rarely just a spinal issue. Our biomechanical evaluation tests hip mobility, thoracic rotational stiffness, core intra-abdominal pressure, and neural tension to resolve nerve pinching at the root.",
    protocol: [
      "Targeted Mechanical Diagnosis & Therapy (McKenzie MDT method)",
      "Segmental Lumbar/Thoracic Joint Mobilization",
      "Dynamic Core Stabilization with Real-Time Biofeedback",
      "Neural Flossing & Nerve Root Decompression Drills",
    ],
    timeline: "3 to 6 Weeks to Pain-Free Sitting & Lifting",
    specialist: "Dr. Maya Collins, PT, DPT, OCS",
    stats: "92% avoid surgery or epidural injections",
    image: "medical/renewphysical/therapy.webp",
  },
  {
    id: "shoulder",
    label: "Shoulder & Cuff",
    icon: "💪",
    title: "Rotator Cuff & Scapular Stability",
    tagline: "Labrum Tears, Impingement Syndrome, Biceps Tendinitis & Frozen Shoulder",
    overview:
      "The shoulder is the body's most mobile joint and requires millimeter-precise scapulohumeral coordination. We pinpoint rotator cuff force-coupling imbalances and overhead kinetic chain breakdowns.",
    protocol: [
      "Rotator Cuff High-Load Eccentric Remodeling",
      "Perrin & Serratus Anterior Motor Control Drills",
      "Integrative Dry Needling for Subscapularis & Infraspinatus",
      "Kinetic Chain Overhead Throwing & Reaching Velocity Tests",
    ],
    timeline: "4 to 8 Weeks to Full Overhead Power",
    specialist: "Jordan Hayes, PT, DPT, SCS, CSCS",
    stats: "89% achieve 100% active overhead reach",
    image: "medical/renewphysical/rehab.webp",
  },
  {
    id: "knee",
    label: "Knee & ACL",
    icon: "⚡",
    title: "Knee, Patellofemoral & ACL Return-to-Sport",
    tagline: "ACL Reconstruction, Meniscus Repairs, Runner's Knee & Patellar Tendinopathy",
    overview:
      "Whether rehabilitating an athlete after ACL autograft surgery or curing stubborn patellar tendinitis, we utilize dual force plates to measure asymmetrical ground impact and eliminate re-injury risk.",
    protocol: [
      "Delfi Personalized Blood Flow Restriction (BFR) Hypertrophy",
      "AlterG Anti-Gravity Treadmill Gradual Impact Reloading",
      "Quad/Hamstring Dynamometer Force Symmetry Testing",
      "240fps High-Speed Deceleration & Cutting Mechanics",
    ],
    timeline: "6 to 12 Weeks (Sports Testing Criteria)",
    specialist: "Jordan Hayes, PT, DPT, SCS, CSCS",
    stats: "96% pass return-to-sport limb symmetry criteria",
    image: "medical/renewphysical/recovery.webp",
  },
  {
    id: "hip",
    label: "Hip & Pelvis",
    icon: "🎯",
    title: "Hip Labrum, FAI & Pelvic Stability",
    tagline: "Femoroacetabular Impingement (FAI), Gluteal Tendinopathy & Hip Arthroscopy",
    overview:
      "Deep groin pinching or stubborn outer-hip bursitis is often driven by pelvic rotation deficits and gluteus medius inhibition. We rebuild deep hip rotator strength and functional rotational control.",
    protocol: [
      "Joint Capsule Distraction & Posterior Glide Mobilization",
      "Heavy Slow Resistance (HSR) for Gluteal Tendinopathy",
      "Pelvic Obliquity Correction & Gait Stride Alignment",
      "Single-Leg Triple Flexion Neuromuscular Retraining",
    ],
    timeline: "4 to 8 Weeks to Pain-Free Squatting & Running",
    specialist: "Dr. Maya Collins, PT, DPT, OCS",
    stats: "91% report zero deep groin impingement on squat",
    image: "medical/renewphysical/movement.webp",
  },
  {
    id: "ankle",
    label: "Foot & Ankle",
    icon: "👟",
    title: "Achilles Tendon, Plantar Fascia & Ankle Sprain",
    tagline: "Achilles Tendinopathy, Plantar Fasciitis, Chronic Instability & Turf Toe",
    overview:
      "The foot and ankle absorb 3 to 5 times body weight with every running footstrike. We analyze talocrural dorsiflexion, plantar fascial windlass mechanisms, and intrinsic foot vault strength.",
    protocol: [
      "Progressive Tendon Loading Protocols (Alfredson Isometric/Eccentric)",
      "High-Frequency Instrument Assisted Soft Tissue Mobilization (IASTM)",
      "Proprioceptive Single-Leg Dynamic Balance Plate Re-education",
      "Custom Footwear & Orthotic Kinetic Integration",
    ],
    timeline: "3 to 6 Weeks to Spring in Your Step",
    specialist: "Elena Brooks, PTA, FMS",
    stats: "94% resolve first-step morning heel pain in 3 wks",
    image: "medical/renewphysical/progress-tracking.webp",
  },
  {
    id: "running",
    label: "Runners & Gait",
    icon: "🏃",
    title: "Endurance Athlete & 3D Motion Lab",
    tagline: "Cadence Optimization, Shinsplints, IT Band Friction & Marathon Conditioning",
    overview:
      "For distance runners, triathletes, and tactical athletes who refuse to sit on the couch. We record your running mechanics from 4 angles simultaneously to correct overstriding and vertical bounce.",
    protocol: [
      "240fps High-Speed Markerless Video Motion Capture",
      "Cadence Tuning (+5% to 10% step-rate optimization to unload knees)",
      "Footstrike Angle & Ground Reaction Force Vector Analysis",
      "Individualized Marathon Mileage Ramp & Plyometric Plan",
    ],
    timeline: "2 to 4 Sessions to Measurable Running Efficiency",
    specialist: "Jordan Hayes, PT, DPT, SCS, CSCS",
    stats: "Over 450 marathoners and ironman athletes treated",
    image: "medical/renewphysical/hero.webp",
  },
];

// Interactive 4-Phase Recovery Milestones
const recoveryPhases = [
  {
    phase: "Phase 01",
    name: "Acute Pain Relief & Desensitization",
    weeks: "Weeks 1 – 2",
    theme: "Extinguish the fire and regain calm movement",
    goal: "Eliminate resting inflammation, decrease central nervous system guarding, and restore baseline passive range of motion.",
    criteria: "Pain levels drop <3/10; able to perform daily walking and sleeping without debilitating flare-ups.",
    treatments: [
      "Targeted Manual Therapy & Joint Oscillations",
      "Dry Needling for Muscle Spasms & Trigger Points",
      "Game Ready Cryo-Pneumatic Contrast Therapy",
      "Non-Threatening Gentle Isometric Activations",
    ],
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  },
  {
    phase: "Phase 02",
    name: "Active Mobility & Tissue Remodeling",
    weeks: "Weeks 3 – 5",
    theme: "Rebuild range of motion without compensating",
    goal: "Restore full anatomical active joint motion, stimulate collagen matrix alignment in healing tendons, and activate dormant stabilizing muscle groups.",
    criteria: "Symmetrical joint mobility within 10% of uninjured limb; zero residual swelling 24h post-session.",
    treatments: [
      "Heavy Slow Resistance (HSR) Tendon Remodeling",
      "Active-Assisted PNF Stretching & Mobilities",
      "AlterG Anti-Gravity Treadmill Partial Weight-Bearing",
      "Isolated Rotational & Core Neuromuscular Drills",
    ],
    badgeColor: "bg-lime-500/20 text-lime-400 border-lime-500/30",
  },
  {
    phase: "Phase 03",
    name: "Neuromuscular Strength & Hypertrophy",
    weeks: "Weeks 6 – 8",
    theme: "Load the tissues to build genuine structural resilience",
    goal: "Develop multi-joint compound strength, muscular endurance, and rapid neuromuscular firing under progressive barbell, dumbbell, and cable resistance.",
    criteria: "Limb Symmetry Index (LSI) exceeds 80% on handheld dynamometer strength tests.",
    treatments: [
      "Delfi Personalized Blood Flow Restriction (BFR) Training",
      "Multi-Planar Squatting, Deadlifting & Pressing Patterns",
      "Eccentric Overload & Deceleration Capacity Drills",
      "Cardiorespiratory Aerobic Re-Conditioning",
    ],
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
  },
  {
    phase: "Phase 04",
    name: "Dynamic Impact & Return-to-Play",
    weeks: "Weeks 9 – 12",
    theme: "High-speed agility, plyometrics & confident discharge",
    goal: "Safely clear full impact loads, cutting angles, sprinting, and sport-specific contact without hesitation or compensatory guarding.",
    criteria: "LSI >90% on single-leg hop for distance, Y-balance test, and zero psychological apprehension on ACL-RSI scale.",
    treatments: [
      "Dual Force Plate Jump & Landing Symmetry Analysis",
      "Reactive Agility & Multi-Directional Change of Direction",
      "Sport-Specific Drills (Cutting, Kicking, Throwing, Running)",
      "Custom Independent Lifetime Performance Program",
    ],
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
  },
];

// Clinical Team Members
const careTeam = [
  {
    name: "Dr. Maya Collins, PT, DPT, OCS",
    title: "Clinical Director & Orthopedic Specialist",
    credentials: "Board-Certified Clinical Specialist in Orthopedic Physical Therapy (OCS)",
    education: "Doctor of Physical Therapy (DPT) · University of Maryland",
    specialties: ["Spine & Sacroiliac Decompression", "Post-Op Joint Replacement", "Dry Needling Certified"],
    bio: "With over 12 years of clinical excellence, Maya specializes in resolving complex, chronic back and neck pain where previous traditional clinics failed. She is dedicated to 1-on-1 care with zero technician handoffs.",
    photo: "medical/renewphysical/team.webp",
    quote: "Recovery isn't just about reducing pain on a questionnaire — it's about getting you back to lifting your children, running trails, and moving without fear.",
  },
  {
    name: "Jordan Hayes, PT, DPT, SCS, CSCS",
    title: "Sports Physical Therapy & Biomechanics",
    credentials: "Board-Certified Sports Clinical Specialist (SCS) · Certified Strength & Conditioning Specialist",
    education: "Doctor of Physical Therapy (DPT) · Duke University",
    specialties: ["ACL Return-to-Sport Testing", "3D Video Running Gait Analysis", "Blood Flow Restriction (BFR)"],
    bio: "Jordan has coached and rehabilitated elite NCAA athletes, distance runners, and weekend warriors. He combines force-plate biomechanics with progressive resistance loading for fearless athletic return.",
    photo: "medical/renewphysical/therapy.webp",
    quote: "Tissue adapts to the loads you place upon it. When we dose movement with the precision of medicine, your body rebuilds stronger than before the injury.",
  },
  {
    name: "Elena Brooks, PTA, FMS",
    title: "Kinetic Rehabilitation & Mobility Specialist",
    credentials: "Licensed Physical Therapist Assistant · Functional Movement Screen Certified (FMS)",
    education: "Associate of Applied Science in Physical Therapy · Montgomery College",
    specialties: ["Instrument-Assisted Soft Tissue (IASTM)", "Functional Mobility Coaching", "Postural Restoration"],
    bio: "Elena brings high-energy encouragement and precision technique instruction to every patient's movement practice. She ensures every home exercise is mastered with zero form breakdown.",
    photo: "medical/renewphysical/movement.webp",
    quote: "Consistency is everything. My passion is breaking complex exercises down into natural, pain-free daily habits that fit your actual life.",
  },
];

// Patient Testimonials
const recoveryStories = [
  {
    name: "Marcus Sterling",
    role: "Marathoner & Triathlete",
    injury: "Chronic Achilles Tendinopathy (14 Months)",
    result: "Finished Marine Corps Marathon Pain-Free in 3:18",
    quote:
      "Two orthopedic doctors told me I'd have to stop distance running. Jordan analyzed my running cadence on their 3D motion cameras, adjusted my footstrike by 6 degrees, and had me doing heavy eccentric calf loading. I was back running 40 miles a week within 8 weeks with zero heel ache.",
    rating: 5,
    therapist: "Jordan Hayes, PT, DPT, SCS",
  },
  {
    name: "Sarah Jenkins",
    role: "High School Soccer Captain",
    injury: "ACL Reconstruction + Meniscus Repair",
    result: "Passed 95% Limb Symmetry Return-to-Sport",
    quote:
      "Having my ACL tear treated at Renew was night and day compared to high-volume clinics. Dr. Maya spent the entire hour with me every single session. We used the AlterG treadmill and force plates to test my landing mechanics before my coach cleared me for the varsity season.",
    rating: 5,
    therapist: "Dr. Maya Collins, PT, DPT, OCS",
  },
  {
    name: "David K.",
    role: "Architect & Desk Worker",
    injury: "L4-L5 Lumbar Disc Herniation & Sciatica",
    result: "100% Resolved Sciatica; Back to Full Deadlifts",
    quote:
      "I couldn't sit at my drafting table for more than 15 minutes without shooting pain down my right calf. Maya's McKenzie decompression protocols and dry needling calmed my nerve in two weeks. I now work all day and lift in the gym with complete confidence.",
    rating: 5,
    therapist: "Dr. Maya Collins, PT, DPT, OCS",
  },
];

// In-Network Insurance Providers
const insurancePlans = [
  { name: "CareFirst BlueCross BlueShield", tier: "In-Network Preferred", note: "Evaluations & therapy covered with copay" },
  { name: "Medicare Part B", tier: "In-Network Certified", note: "100% Medicare participating provider" },
  { name: "Aetna Healthcare", tier: "In-Network Preferred", note: "Direct Access participating" },
  { name: "Cigna Health Care", tier: "In-Network", note: "Comprehensive physical therapy coverage" },
  { name: "UnitedHealthcare (Optum Health)", tier: "In-Network", note: "Pre-authorized claims handled directly" },
  { name: "Tricare & Military Health", tier: "In-Network", note: "Active duty, veterans & families" },
  { name: "FSA & HSA Benefit Cards", tier: "100% Eligible", note: "Pre-tax healthcare spending accepted" },
];

export function RenewPhysicalTherapy() {
  const [activeSection, setActiveSection] = useState<string>("services");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Interactive Joint Navigator State
  const [selectedZoneId, setSelectedZoneId] = useState<string>("knee");

  // Recovery Milestones Active Phase
  const [activePhaseIndex, setActivePhaseIndex] = useState<number>(1);

  // Interactive Symptom Triage Screener State
  const [screenerZone, setScreenerZone] = useState<string>("Knee or Ankle");
  const [screenerDuration, setScreenerDuration] = useState<string>("Over 1 Month");
  const [screenerGoal, setScreenerGoal] = useState<string>("Return to Running & Sports");
  const [screenerResultVisible, setScreenerResultVisible] = useState(false);

  // Booking Modal State
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [bookingService, setBookingService] = useState<string>("Comprehensive Orthopedic Evaluation (60 Min)");
  const [bookingTherapist, setBookingTherapist] = useState<string>("First Available Doctor of PT");
  const [bookingDay, setBookingDay] = useState<string>("Tomorrow (Tue)");
  const [bookingSlot, setBookingSlot] = useState<string>("9:00 AM");
  const [patientName, setPatientName] = useState<string>("");
  const [patientPhone, setPatientPhone] = useState<string>("");
  const [patientInsurance, setPatientInsurance] = useState<string>("CareFirst BlueCross BlueShield");
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  // Computed data
  const currentZone = anatomicalZones.find((z) => z.id === selectedZoneId) || anatomicalZones[0];
  const currentPhase = recoveryPhases[activePhaseIndex];

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

  // Mobile drawer body scroll lock & Escape key listener
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
  const handleStartBooking = (service?: string, doctor?: string) => {
    if (service) setBookingService(service);
    if (doctor) setBookingTherapist(doctor);
    setBookingConfirmed(false);
    setBookingStep(1);
    setIsBookingOpen(true);
  };

  // Smooth scroll handler for mobile drawer navigation with sticky navbar offset
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navOffset = 76;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 150);
  };

  return (
    <main className="min-h-screen bg-[#f8faf9] font-sans text-slate-900 antialiased selection:bg-emerald-500 selection:text-white">
      {/* ========================================================================= */}
      {/* 1. TOP ATHLETIC DIRECT ACCESS & CLINIC UTILITY BAR                        */}
      {/* ========================================================================= */}
      <div className="relative z-50 border-b border-emerald-500/15 bg-[#040f0b] px-3 sm:px-6 py-2 text-xs text-emerald-100/90">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2.5">
          {/* Left: Medical Showcase Index & Direct Access Pill */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Link
              to="/medical"
              className="group inline-flex shrink-0 items-center gap-1 font-bold text-lime-400 transition-colors hover:text-white text-[11px] sm:text-xs"
              title="Return to Medical Showcase Directory"
            >
              <span className="hidden sm:inline">← Medical Showcase</span>
              <span className="sm:hidden text-[11px]">← Showcase</span>
            </Link>
            <span className="text-emerald-800/80">|</span>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/60 border border-emerald-500/25 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-xs text-emerald-200 truncate">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-lime-400" />
              </span>
              <span className="font-semibold truncate">
                <span className="hidden md:inline">Maryland Direct Access Law: </span>No MD Referral Needed · In-Network Insurance
              </span>
            </div>
          </div>

          {/* Right: Hotline, Live Slot & Hours */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-4 text-xs">
            <div className="hidden md:inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-2.5 py-0.5 text-[11px] text-emerald-300 font-medium">
              <Zap size={11} className="text-lime-400 shrink-0" />
              <span>Next Eval: <strong className="text-white font-bold">Tomorrow 9:00 AM</strong></span>
            </div>
            <a
              href="tel:5550174826"
              className="inline-flex items-center gap-1.5 rounded-full bg-lime-400/10 hover:bg-lime-400/20 border border-lime-400/30 px-2 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-bold text-lime-300 transition-colors"
              title="Click to call direct clinician desk"
            >
              <Phone size={11} className="text-lime-400 shrink-0" />
              <span className="hidden sm:inline">(555) 017-4826</span>
              <span className="sm:hidden">Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. STICKY KINETIC FLOATING DOCK NAVBAR                                    */}
      {/* ========================================================================= */}
      <div className="sticky top-0 z-40 w-full border-b border-emerald-500/20 bg-[#061610]/95 backdrop-blur-2xl text-white shadow-xl shadow-black/25 transition-all">
        {/* Top Kinetic Neon Hairline Accent */}
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-lime-400/80 to-transparent" />

        <div className="mx-auto flex h-14 sm:h-[70px] max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 gap-2">
          {/* Brand Identity */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
            <Link
              to="/medical"
              className="group relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-lime-400 via-emerald-500 to-teal-700 p-0.5 text-slate-950 shadow-md shadow-lime-500/20 ring-2 ring-lime-400/40 transition-transform duration-300 hover:scale-105 active:scale-95 shrink-0"
              title="Return to Medical Showcase Directory"
            >
              <div className="flex h-full w-full items-center justify-center rounded-[12px] sm:rounded-[14px] bg-[#071912] text-lime-400 group-hover:bg-transparent group-hover:text-slate-950 transition-colors">
                <Activity size={18} className="sm:w-[22px] sm:h-[22px]" strokeWidth={2.6} />
              </div>
            </Link>
            <a href="#hero" className="flex flex-col min-w-0">
              <span className="text-xs sm:text-base font-black tracking-tight text-white leading-tight truncate">
                RENEW <span className="text-lime-400 font-extrabold">PHYSICAL THERAPY</span>
              </span>
              <div className="hidden xs:flex items-center gap-1.5 text-[9px] uppercase font-extrabold tracking-widest text-emerald-400 leading-none mt-0.5">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400 inline-block animate-pulse" />
                <span className="truncate">Sports Motion Lab · Orthopedic Care</span>
              </div>
            </a>
          </div>

          {/* Desktop Navigation Links with Live Kinetic ScrollSpy */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 rounded-full bg-black/45 p-1 border border-white/10 shadow-inner backdrop-blur-md">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative rounded-full px-2.5 xl:px-3 py-1.5 text-xs font-bold tracking-tight transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-gradient-to-r from-lime-400 via-emerald-400 to-lime-300 text-slate-950 font-black shadow-[0_0_15px_rgba(163,230,53,0.35)] scale-[1.02]"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  <span className="flex items-center gap-1">
                    {isActive && <span className="h-1.5 w-1.5 rounded-full bg-slate-950 animate-pulse shrink-0" />}
                    <span>{link.label}</span>
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Right Action: Evaluation Hotline, Main CTA & Hamburger */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Direct Line Badge (Desktop XL) */}
            <a
              href="tel:5550174826"
              className="hidden xl:flex items-center gap-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 px-3.5 py-1.5 text-xs font-bold text-slate-200 transition-all shadow-xs group"
              title="Fast Clinician Inquiries"
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400/20 text-lime-400 group-hover:bg-lime-400 group-hover:text-slate-950 transition-colors">
                <Phone size={11} />
              </div>
              <span>(555) 017-4826</span>
            </a>

            {/* High-Impact CTA Button */}
            <button
              type="button"
              onClick={() => handleStartBooking()}
              className="group relative inline-flex items-center gap-1 sm:gap-2 rounded-full bg-gradient-to-r from-lime-400 via-emerald-400 to-green-400 px-2.5 sm:px-5 py-1.5 sm:py-2.5 text-xs sm:text-sm font-black text-slate-950 shadow-lg shadow-lime-400/20 hover:shadow-lime-400/40 hover:scale-105 active:scale-95 transition-all duration-200 shrink-0 whitespace-nowrap overflow-hidden"
            >
              <Calendar size={13} strokeWidth={2.5} className="shrink-0 sm:w-[14px] sm:h-[14px]" />
              <span className="hidden sm:inline">Book 60-Min Eval</span>
              <span className="sm:hidden text-[11px] font-black">Book</span>
              <ArrowRight size={13} className="hidden sm:inline transition-transform duration-200 group-hover:translate-x-0.5" />
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              className="flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-100 hover:bg-white/15 hover:border-lime-400/40 lg:hidden transition-all shadow-sm active:scale-95 shrink-0"
            >
              {isMobileMenuOpen ? <X size={18} className="text-lime-400" /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. MOBILE SLIDE-OVER PERFORMANCE DRAWER                                   */}
      {/* ========================================================================= */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl lg:hidden flex justify-end transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm sm:max-w-md h-full bg-[#05140e] border-l border-emerald-500/20 flex flex-col overflow-hidden text-white shadow-2xl shadow-emerald-950/80 animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 3A. Fixed Top Header with Safe Area Padding */}
            <div className="shrink-0 p-4 sm:p-5 border-b border-white/10 bg-[#071912]/95 backdrop-blur-md space-y-3 pt-[max(1rem,env(safe-area-inset-top))]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-lime-400 to-emerald-500 text-slate-950 font-black shadow-md shadow-lime-400/20">
                    <Activity size={20} strokeWidth={2.5} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black tracking-wider text-white">
                      RENEW <span className="text-lime-400 font-light">PHYSICAL THERAPY</span>
                    </span>
                    <span className="text-[9px] uppercase font-bold text-emerald-400">
                      Kinetic Motion Lab Directory
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-300 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Active Section Telemetry Chip */}
              <div className="flex items-center justify-between rounded-xl bg-black/40 border border-emerald-500/25 px-3 py-1.5 text-[11px]">
                <span className="flex items-center gap-1.5 text-emerald-300 font-semibold">
                  <span className="h-2 w-2 rounded-full bg-lime-400 animate-pulse" />
                  Currently In View:
                </span>
                <span className="font-bold text-white uppercase tracking-wider text-[10px] bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-500/30">
                  {navLinks.find((l) => l.id === activeSection)?.fullLabel || "Clinical Overview"}
                </span>
              </div>
            </div>

            {/* 3B. Scrollable Middle Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 overscroll-contain">
              {/* Quick-Access Action Grid */}
              <div className="grid grid-cols-1 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleStartBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-lime-400 via-emerald-400 to-green-400 py-3 text-xs font-black text-slate-950 shadow-lg shadow-lime-400/20 hover:brightness-110 active:scale-98 transition-all"
                >
                  <Calendar size={15} strokeWidth={2.5} />
                  <span>Schedule 60-Min Evaluation Online</span>
                </button>
                <a
                  href="tel:5550174826"
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-bold text-white hover:bg-white/10 transition-colors"
                >
                  <Phone size={13} className="text-lime-400" />
                  <span>Direct PT Clinical Desk: (555) 017-4826</span>
                </a>
              </div>

              {/* Chronological Section Links in Strict DOM Sequence */}
              <div className="space-y-1 pt-1">
                <div className="px-2 py-1 text-[10px] font-black uppercase tracking-widest text-lime-400/80 flex items-center justify-between">
                  <span>Sections in Motion Order</span>
                  <span className="text-emerald-500 font-normal">01 – 08</span>
                </div>
                {navLinks.map((link, idx) => {
                  const isActive = activeSection === link.id;
                  const Icon = link.icon;
                  const stepNumber = String(idx + 1).padStart(2, "0");
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`group flex items-center justify-between rounded-xl p-2.5 sm:p-3 text-xs transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-emerald-500/25 to-lime-500/15 text-white border border-lime-400/40 shadow-sm"
                          : "text-slate-300 hover:bg-white/5 hover:text-white border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className={`text-[10px] font-black tracking-widest ${isActive ? "text-lime-400" : "text-slate-600"}`}>
                          {stepNumber}
                        </span>
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                            isActive
                              ? "bg-lime-400 text-slate-950 font-black shadow-md shadow-lime-400/30"
                              : "bg-white/5 text-slate-400 group-hover:text-lime-300 group-hover:bg-white/10"
                          }`}
                        >
                          <Icon size={15} />
                        </div>
                        <div className="flex flex-col min-w-0 text-left">
                          <div className="flex items-center gap-2">
                            <span className={`font-bold truncate ${isActive ? "text-white" : "text-slate-200"}`}>
                              {link.fullLabel}
                            </span>
                            {isActive && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-lime-400/20 px-1.5 py-0.5 text-[9px] font-black text-lime-300 border border-lime-400/30 shrink-0">
                                <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
                                In View
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] text-slate-400 truncate mt-0.5">
                            {link.desc}
                          </span>
                        </div>
                      </div>
                      <ChevronRight
                        size={14}
                        className={`shrink-0 ml-2 transition-transform group-hover:translate-x-0.5 ${
                          isActive ? "text-lime-300" : "text-slate-600"
                        }`}
                      />
                    </a>
                  );
                })}
              </div>

              {/* Direct Access Fast Facts Guarantee Box */}
              <div className="rounded-2xl border border-lime-500/30 bg-lime-500/10 p-3.5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-lime-300 text-[11px] font-bold uppercase tracking-wider">
                  <ShieldCheck size={14} className="text-lime-400" />
                  No Physician Referral Required
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  Maryland Direct Access law enables immediate evaluation & therapy by a licensed Doctor of Physical Therapy. In-network with CareFirst, Medicare, Aetna, Cigna & United.
                </p>
              </div>
            </div>

            {/* 3C. Fixed Bottom Footer with Safe Area Padding */}
            <div className="shrink-0 p-3 sm:p-4 border-t border-white/10 bg-[#030d09] text-center text-[10px] text-slate-400 space-y-0.5 pb-[max(1rem,env(safe-area-inset-bottom))]">
              <p className="text-white font-medium">620 Renewal Way, Suite 140 · Bethesda, MD</p>
              <p className="text-lime-400 font-semibold">Mon–Fri 6:30 AM – 7:00 PM · Dedicated Athlete Parking</p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. KINETIC SPORTS MOTION LAB HERO SECTION                                 */}
      {/* ========================================================================= */}
      <section id="hero" className="relative pt-8 sm:pt-14 pb-16 sm:pb-24 overflow-hidden bg-[#071711] text-white">
        {/* Soft Kinetic Ambient Radiance Orbs */}
        <div className="pointer-events-none absolute -top-36 -right-36 h-[700px] w-[700px] rounded-full bg-lime-500/12 blur-[170px]" />
        <div className="pointer-events-none absolute top-48 -left-36 h-[600px] w-[600px] rounded-full bg-emerald-600/15 blur-[160px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/3 h-[500px] w-[500px] rounded-full bg-green-400/8 blur-[140px]" />

        <Container>
          {/* Eyebrow Trust Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-center mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-extrabold text-white shadow-xs backdrop-blur-md">
              <Activity size={14} className="text-lime-400" />
              <span>Biomechanical Sports Recovery & Orthopedic Physical Therapy</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-lime-400/30 bg-lime-400/10 px-3.5 py-1.5 text-xs font-bold text-lime-300">
              <Star size={13} className="fill-lime-400 text-lime-400" />
              <span>4.98 Rating · 620+ Active Patients Recovered</span>
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-3.5 py-1.5 text-xs font-bold text-emerald-300">
              <ShieldCheck size={13} className="text-emerald-400" />
              <span>Direct Access · No MD Referral Needed</span>
            </span>
          </div>

          {/* Hero Content Grid */}
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center xl:gap-14 mt-6">
            {/* Left: Kinetic Copy & Metrics (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="space-y-4">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                  Rebuild peak movement.{" "}
                  <span className="bg-gradient-to-r from-lime-400 via-emerald-300 to-teal-300 bg-clip-text text-transparent">
                    Reclaim pain-free performance.
                  </span>
                </h1>
                <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
                  One-on-one 60-minute sessions exclusively with board-certified Doctors of Physical Therapy.
                  No aides, no double-booking, and no generic exercise printouts. Powered by high-speed 3D motion capture,
                  force plates, and targeted heavy loading.
                </p>
              </div>

              {/* Athletic Highlights Chips */}
              <div className="grid grid-cols-3 gap-2 sm:gap-3 py-1 max-w-xl">
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-left backdrop-blur-md">
                  <div className="text-xl sm:text-2xl font-black text-lime-400">94%</div>
                  <div className="text-[10px] sm:text-xs text-slate-300 font-semibold leading-tight mt-0.5">
                    Return to Sport on Target
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-left backdrop-blur-md">
                  <div className="text-xl sm:text-2xl font-black text-white">60 Min</div>
                  <div className="text-[10px] sm:text-xs text-slate-300 font-semibold leading-tight mt-0.5">
                    1-on-1 with Doctor of PT
                  </div>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 p-3 text-left backdrop-blur-md">
                  <div className="text-xl sm:text-2xl font-black text-emerald-400">0 Days</div>
                  <div className="text-[10px] sm:text-xs text-slate-300 font-semibold leading-tight mt-0.5">
                    MD Referral Wait Time
                  </div>
                </div>
              </div>

              {/* Dual Action CTAs */}
              <div className="space-y-3 pt-1">
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleStartBooking("Initial Kinetic Movement Evaluation")}
                    className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-emerald-400 via-lime-400 to-green-500 px-6 py-4 text-xs sm:text-sm font-black text-slate-950 shadow-xl shadow-lime-500/20 hover:scale-105 active:scale-95 transition-all"
                  >
                    <Calendar size={16} strokeWidth={2.5} />
                    <span>Schedule 60-Min Evaluation</span>
                    <ArrowRight size={16} strokeWidth={2.5} />
                  </button>

                  <a
                    href="#body-navigator"
                    className="inline-flex items-center gap-1.5 rounded-2xl border border-white/15 bg-white/5 px-5 py-4 text-xs sm:text-sm font-bold text-white hover:bg-white/10 hover:border-white/25 transition-all"
                  >
                    <Target size={16} className="text-lime-400" />
                    <span>Joint & Pain Navigator</span>
                  </a>
                </div>

                {/* Live Chair Opening Callout */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pt-1">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-lime-500" />
                  </span>
                  <span className="text-slate-300 font-medium">Next open evaluation chair:</span>
                  <span className="font-bold text-lime-300">Tomorrow at 9:00 AM</span>
                  <span className="text-slate-600">·</span>
                  <span className="text-slate-300 font-semibold">Dr. Maya Collins, PT, DPT, OCS</span>
                </div>
              </div>
            </div>

            {/* Right: Athletic Photography Stage with Floating Telemetry (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/15 bg-[#091a14] p-3 shadow-2xl ring-1 ring-lime-400/20">
                <div className="relative overflow-hidden rounded-[1.75rem] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/4.5]">
                  <img
                    src={imageUrl("medical/renewphysical/hero.webp")}
                    alt="Renew Physical Therapy Kinetic Evaluation"
                    className="h-full w-full object-cover transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061510]/90 via-[#061510]/20 to-transparent" />

                  {/* Top-Right Force Plate Telemetry Badge */}
                  <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 flex items-center gap-2 rounded-2xl border border-white/20 bg-[#061510]/85 px-3.5 py-2 text-xs text-white shadow-xl backdrop-blur-md">
                    <TrendingUp size={14} className="text-lime-400" />
                    <div>
                      <div className="text-[10px] uppercase font-bold text-slate-400">Ground Force Symmetry</div>
                      <div className="text-xs font-black text-lime-300">50.8% Left · 49.2% Right</div>
                    </div>
                  </div>

                  {/* Bottom Care Card Voucher */}
                  <div className="absolute right-3 bottom-3 left-3 rounded-2xl border border-white/15 bg-[#0a1e17]/90 p-4 text-white shadow-2xl backdrop-blur-xl">
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-lime-400">
                          <span className="h-1.5 w-1.5 rounded-full bg-lime-400 animate-pulse" />
                          <span>Featured Clinical Lead</span>
                        </div>
                        <h4 className="text-sm font-black text-white truncate mt-0.5">
                          Dr. Maya Collins, PT, DPT, OCS
                        </h4>
                        <p className="text-[11px] text-slate-300 truncate mt-0.5">
                          Spine & Orthopedic Clinical Specialist · Tomorrow 9:00 AM
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleStartBooking("Initial Kinetic Movement Evaluation", "Dr. Maya Collins, PT, DPT, OCS")}
                        className="shrink-0 rounded-xl bg-gradient-to-r from-lime-400 to-emerald-400 px-3 py-1.5 text-xs font-extrabold text-slate-950 shadow-md hover:brightness-110 active:scale-95 transition-all"
                      >
                        Select
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Pillar Strip */}
          <div className="mt-12 sm:mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-lime-400/20 text-lime-400">
                <Award size={18} />
              </div>
              <div>
                <div className="text-sm font-black text-white leading-tight">OCS & SCS Boarded</div>
                <div className="text-[11px] text-slate-400">Top 5% of US Physical Therapists</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-400">
                <UserCheck size={18} />
              </div>
              <div>
                <div className="text-sm font-black text-white leading-tight">100% 1-on-1 Sessions</div>
                <div className="text-[11px] text-slate-400">Zero aides or tech handoffs</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-400/20 text-teal-300">
                <Activity size={18} />
              </div>
              <div>
                <div className="text-sm font-black text-white leading-tight">AlterG & BFR Lab</div>
                <div className="text-[11px] text-slate-400">Anti-gravity & hypertrophy tech</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-400/20 text-green-300">
                <ShieldCheck size={18} />
              </div>
              <div>
                <div className="text-sm font-black text-white leading-tight">In-Network Insurance</div>
                <div className="text-[11px] text-slate-400">BCBS, Medicare, Aetna & Cigna</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. ASYMMETRICAL CLINICAL SERVICES BENTO GRID                              */}
      {/* ========================================================================= */}
      <section id="services" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-white border-t border-b border-slate-200/80">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-emerald-800">
              Evidence-Based Clinical Services
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              Precision therapy designed for human movement.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We replace passive hot packs and ultrasound with active movement retraining, progressive loading,
              and advanced neuromuscular conditioning.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Bento Card 1: Sports & Orthopedics (Span 2 cols on lg) */}
            <div className="lg:col-span-2 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-[#0d281f] p-8 sm:p-10 text-white relative overflow-hidden shadow-xl flex flex-col justify-between">
              <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-lime-500/20 blur-3xl" />
              <div className="space-y-4 relative z-10 max-w-xl">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-lime-400/20 border border-lime-400/30 px-3 py-1 text-xs font-extrabold text-lime-300">
                  <Flame size={13} className="text-lime-400" />
                  <span>Flagship Specialty</span>
                </span>
                <h3 className="text-2xl sm:text-3xl font-black leading-tight text-white">
                  Orthopedic & Sports Physical Therapy
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Comprehensive diagnosis and high-load rehabilitation for complex joint sprains, tendon tears,
                  rotator cuff dysfunctions, labral repairs, and chronic joint instability. Built to return you
                  safely to high-velocity sport.
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs text-slate-300 pt-2">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-lime-400" />
                    <span>Rotator cuff & labrum loading</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-lime-400" />
                    <span>ACL & Meniscus repair protocols</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-lime-400" />
                    <span>Heavy Slow Resistance tendinopathy</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-lime-400" />
                    <span>Dynamometer limb symmetry checks</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 relative z-10 flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleStartBooking("Orthopedic & Sports Physical Therapy")}
                  className="rounded-xl bg-lime-400 px-5 py-2.5 text-xs font-extrabold text-slate-950 shadow-md hover:bg-lime-300 transition active:scale-95"
                >
                  Schedule Orthopedic Evaluation →
                </button>
                <span className="text-xs text-slate-400 font-bold hidden sm:inline">60-Min Sessions</span>
              </div>
            </div>

            {/* Bento Card 2: 3D Video Running Gait Analysis */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg flex flex-col justify-between hover:border-emerald-300 transition-all">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-emerald-800 font-black">
                  <Activity size={22} />
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  3D Biomechanical Running Gait Analysis
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  240fps multi-camera capture breaks down footstrike angle, vertical oscillation, cadence, and pelvic drop to permanently eliminate runner's knee and shinsplints.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-700">Endurance Lab</span>
                <button
                  type="button"
                  onClick={() => handleStartBooking("3D Running Gait Analysis")}
                  className="text-xs font-black text-slate-900 hover:text-emerald-600 flex items-center gap-1"
                >
                  <span>Book Gait Scan</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* Bento Card 3: Integrative Dry Needling */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg flex flex-col justify-between hover:border-emerald-300 transition-all">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-100 text-lime-800 font-black">
                  <Zap size={22} />
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  Integrative Dry Needling & Myofascial Release
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Ultra-fine monofilament needles stimulate stubborn intramuscular trigger points, dramatically accelerating blood flow, resetting neuromuscular hypertonicity, and relieving chronic headaches.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-lime-700">Rapid Pain Reset</span>
                <button
                  type="button"
                  onClick={() => handleStartBooking("Dry Needling & Manual Therapy")}
                  className="text-xs font-black text-slate-900 hover:text-emerald-600 flex items-center gap-1"
                >
                  <span>Explore Needling</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* Bento Card 4: Blood Flow Restriction (BFR) */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg flex flex-col justify-between hover:border-emerald-300 transition-all">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-800 font-black">
                  <HeartPulse size={22} />
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  Personalized Blood Flow Restriction (BFR)
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Delfi automated tourniquet technology safely restricts venous return during low-load exercises (20% 1RM), inducing dramatic muscle hypertrophy and bone remodeling with zero joint strain.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-cyan-700">Hypertrophy Tech</span>
                <button
                  type="button"
                  onClick={() => handleStartBooking("Blood Flow Restriction (BFR) Session")}
                  className="text-xs font-black text-slate-900 hover:text-emerald-600 flex items-center gap-1"
                >
                  <span>View BFR Info</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>

            {/* Bento Card 5: Post-Operative Joint Rehab */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg flex flex-col justify-between hover:border-emerald-300 transition-all">
              <div className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-100 text-teal-800 font-black">
                  <ShieldCheck size={22} />
                </div>
                <h3 className="text-xl font-black text-slate-900">
                  Post-Surgical Joint Reconstruction Rehab
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Direct surgeon-coordinated protocols for total hip/knee replacements, rotator cuff anchors, spinal fusions, and ankle syndesmosis repairs. Controlled swelling management and progressive range recovery.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-bold text-teal-700">Surgeon Aligned</span>
                <button
                  type="button"
                  onClick={() => handleStartBooking("Post-Op Surgical Rehabilitation")}
                  className="text-xs font-black text-slate-900 hover:text-emerald-600 flex items-center gap-1"
                >
                  <span>Post-Op Care</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE BODY PAIN & INJURY TARGET NAVIGATOR                         */}
      {/* ========================================================================= */}
      <section id="body-navigator" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-[#091a14] text-white relative overflow-hidden">
        {/* Soft Ambient Radiance */}
        <div className="pointer-events-none absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-lime-500/10 blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[450px] w-[450px] rounded-full bg-emerald-600/15 blur-[140px]" />

        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
            <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-lime-300">
              Interactive Joint & Injury Navigator
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Where does movement feel restricted?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Select an anatomical zone to discover our evidence-based biomechanical protocol, expected timeline, and assigned clinical doctor.
            </p>
          </div>

          {/* Interactive Zone Switcher Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
            {anatomicalZones.map((zone) => {
              const isSelected = selectedZoneId === zone.id;
              return (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => setSelectedZoneId(zone.id)}
                  className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-extrabold transition-all duration-200 active:scale-95 ${
                    isSelected
                      ? "bg-gradient-to-r from-lime-400 to-emerald-400 text-slate-950 shadow-lg shadow-lime-500/20 font-black scale-105"
                      : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/10"
                  }`}
                >
                  <span className="text-base">{zone.icon}</span>
                  <span>{zone.label}</span>
                </button>
              );
            })}
          </div>

          {/* Dynamic Zone Display Card */}
          <div className="rounded-3xl border border-white/15 bg-white/[0.04] p-6 sm:p-10 backdrop-blur-xl shadow-2xl">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Details (7 cols) */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="space-y-1.5">
                  <span className="text-xs font-black uppercase tracking-wider text-lime-400">
                    {currentZone.tagline}
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black text-white">
                    {currentZone.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentZone.overview}
                </p>

                {/* Protocols list */}
                <div className="space-y-2 rounded-2xl bg-white/5 p-4 border border-white/10">
                  <div className="text-[11px] font-black uppercase tracking-wider text-lime-300">
                    Target Clinical Protocol:
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2 text-xs text-slate-200">
                    {currentZone.protocol.map((step) => (
                      <div key={step} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-lime-400 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Outcome & Specialist Row */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Expected Timeline</div>
                    <div className="text-xs font-black text-white mt-0.5">{currentZone.timeline}</div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Lead Specialist</div>
                    <div className="text-xs font-black text-lime-300 mt-0.5 truncate">{currentZone.specialist}</div>
                  </div>
                  <div className="col-span-2 sm:col-span-1 rounded-xl border border-white/10 bg-white/5 p-3">
                    <div className="text-[10px] uppercase font-bold text-slate-400">Clinical Stat</div>
                    <div className="text-xs font-black text-emerald-300 mt-0.5">{currentZone.stats}</div>
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-3 flex flex-wrap items-center gap-3">
                  <button
                    type="button"
                    onClick={() => handleStartBooking(currentZone.title, currentZone.specialist)}
                    className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-lime-400 to-emerald-400 px-5 py-3 text-xs sm:text-sm font-black text-slate-950 shadow-md hover:brightness-110 active:scale-95 transition-all"
                  >
                    <Calendar size={15} strokeWidth={2.5} />
                    <span>Book Evaluation for {currentZone.label}</span>
                  </button>
                  <a
                    href="#recovery-milestones"
                    className="text-xs font-bold text-slate-300 hover:text-white flex items-center gap-1"
                  >
                    <span>View 4-Phase Milestones</span>
                    <ArrowRight size={13} />
                  </a>
                </div>
              </div>

              {/* Right Column: High-Res Image (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/40 p-2.5 shadow-2xl">
                  <img
                    src={imageUrl(currentZone.image)}
                    alt={currentZone.title}
                    className="h-[300px] sm:h-[380px] w-full rounded-xl object-cover transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#091a14]/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-[#091a14]/85 p-3 text-white backdrop-blur-md">
                    <div className="text-[10px] font-black uppercase tracking-wider text-lime-400">Target Care Plan</div>
                    <div className="text-xs font-bold text-white mt-0.5 truncate">{currentZone.title}</div>
                    <div className="text-[11px] text-slate-300 mt-0.5">{currentZone.timeline}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. KINETIC MODALITY & MOTION TECH LAB                                     */}
      {/* ========================================================================= */}
      <section id="tech-modalities" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-white border-b border-slate-200">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-emerald-800">
              State-of-the-Art Recovery Modalities
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              Technology that accelerates biological healing.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We invest in elite sports performance modalities utilized by Olympic centers, European soccer clubs, and professional sports teams.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 space-y-4 hover:border-emerald-400 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600 text-white font-black shadow-md">
                <Activity size={22} />
              </div>
              <h3 className="text-xl font-black text-slate-900">
                AlterG Anti-Gravity Treadmill
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                NASA-patented differential air pressure gently unweights your body by up to 80% in 1% increments. Walk and jog weeks earlier after fractures or ACL reconstructions without impact pain.
              </p>
              <div className="pt-2 text-xs font-bold text-emerald-700 flex items-center gap-1">
                <span>Precision Unweighting to 20%</span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 space-y-4 hover:border-emerald-400 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-500 text-slate-950 font-black shadow-md">
                <Flame size={22} />
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Delfi Personalized BFR System
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                FDA-cleared personalized tourniquet cuffs calculate your exact limb occlusion pressure (LOP), allowing rapid muscle building with featherlight 5lb dumbbells while fully protecting healing joints.
              </p>
              <div className="pt-2 text-xs font-bold text-lime-700 flex items-center gap-1">
                <span>Automated Limb Occlusion Pressure</span>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 space-y-4 hover:border-emerald-400 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600 text-white font-black shadow-md">
                <TrendingUp size={22} />
              </div>
              <h3 className="text-xl font-black text-slate-900">
                Dual Force Plate Symmetrical Loading
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                Objective 1000Hz dual force plates measure ground reaction forces during vertical jumping, landing, and squats. Completely removes human guessing before clearing an athlete to return to competition.
              </p>
              <div className="pt-2 text-xs font-bold text-teal-700 flex items-center gap-1">
                <span>1000Hz Force Symmetry Data</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. INTERACTIVE 4-PHASE RECOVERY MILESTONES TIMELINE                        */}
      {/* ========================================================================= */}
      <section id="recovery-milestones" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-[#f3f7f5]">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-emerald-300 bg-emerald-100 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-emerald-900">
              Objective Discharge Roadmap
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              The 4-Phase Return-to-Play System.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We never guess your progress based on how many weeks have passed. You advance to the next phase only when you hit objective clinical strength and mobility criteria.
            </p>
          </div>

          {/* Phase Selector Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {recoveryPhases.map((phase, idx) => {
              const isActive = activePhaseIndex === idx;
              return (
                <button
                  key={phase.phase}
                  type="button"
                  onClick={() => setActivePhaseIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    isActive
                      ? "bg-[#091a14] text-white border-lime-400 shadow-lg scale-102 ring-2 ring-lime-400/30"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-black uppercase tracking-wider ${isActive ? "text-lime-400" : "text-slate-400"}`}>
                      {phase.phase}
                    </span>
                    <span className={`text-[10px] font-bold ${isActive ? "text-emerald-300" : "text-slate-500"}`}>
                      {phase.weeks}
                    </span>
                  </div>
                  <h4 className={`text-xs sm:text-sm font-black mt-1 line-clamp-2 ${isActive ? "text-white" : "text-slate-900"}`}>
                    {phase.name}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Active Phase Deep Dive Card */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-emerald-100 text-emerald-800 px-3 py-1 text-xs font-black uppercase">
                    {currentPhase.phase} · {currentPhase.weeks}
                  </span>
                  <span className="text-xs font-bold text-slate-500 italic">
                    "{currentPhase.theme}"
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {currentPhase.name}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {currentPhase.goal}
                </p>

                {/* Criteria Box */}
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 space-y-1">
                  <div className="text-[11px] font-black uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-emerald-600" />
                    Objective Advancement Criteria:
                  </div>
                  <p className="text-xs font-bold text-emerald-800">
                    {currentPhase.criteria}
                  </p>
                </div>

                {/* Treatment Interventions */}
                <div className="space-y-2">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-700">
                    Typical Session Interventions:
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2 text-xs text-slate-600">
                    {currentPhase.treatments.map((t) => (
                      <div key={t} className="flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-lime-600 shrink-0" />
                        <span className="font-semibold">{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 rounded-2xl bg-slate-900 text-white p-6 space-y-4">
                <div className="text-xs font-black uppercase tracking-wider text-lime-400">
                  Patient Progress Signals
                </div>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>Resting Pain Reduction</span>
                      <span className="text-lime-400">
                        {activePhaseIndex === 0 && "65% Achieved"}
                        {activePhaseIndex === 1 && "85% Achieved"}
                        {activePhaseIndex === 2 && "95% Achieved"}
                        {activePhaseIndex === 3 && "100% Pain-Free"}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-lime-400 rounded-full transition-all duration-500"
                        style={{
                          width:
                            activePhaseIndex === 0 ? "65%" : activePhaseIndex === 1 ? "85%" : activePhaseIndex === 2 ? "95%" : "100%",
                        }}
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between text-xs font-bold mb-1">
                      <span>Limb Symmetry Index (LSI)</span>
                      <span className="text-lime-400">
                        {activePhaseIndex === 0 && "60% Symmetrical"}
                        {activePhaseIndex === 1 && "75% Symmetrical"}
                        {activePhaseIndex === 2 && "85% Symmetrical"}
                        {activePhaseIndex === 3 && "98% Symmetrical"}
                      </span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-emerald-500 to-lime-400 rounded-full transition-all duration-500"
                        style={{
                          width:
                            activePhaseIndex === 0 ? "60%" : activePhaseIndex === 1 ? "75%" : activePhaseIndex === 2 ? "85%" : "98%",
                        }}
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleStartBooking(`Milestone Assessment: ${currentPhase.name}`)}
                    className="w-full rounded-xl bg-gradient-to-r from-lime-400 to-emerald-400 py-3 text-xs font-black text-slate-950 shadow-md hover:brightness-110 transition active:scale-95"
                  >
                    Schedule Assessment for {currentPhase.phase}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. BOARD-CERTIFIED DOCTORS OF PHYSICAL THERAPY                            */}
      {/* ========================================================================= */}
      <section id="therapists" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-white border-t border-b border-slate-200">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-emerald-800">
              Elite Clinical Faculty
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              Led by Doctors of Physical Therapy.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every appointment is conducted one-on-one by licensed, board-certified physical therapy clinicians.
              We are scholars, athletes, and dedicated movement specialists.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {careTeam.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-lg flex flex-col justify-between hover:border-emerald-300 hover:shadow-xl transition-all"
              >
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3.5]">
                    <img
                      src={imageUrl(member.photo)}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 rounded-lg bg-[#081711]/85 px-2.5 py-1 text-[10px] font-extrabold text-lime-400 backdrop-blur-md">
                      {member.credentials.split("·")[0]}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-black text-slate-900">
                      {member.name}
                    </h3>
                    <p className="text-xs font-bold text-emerald-700">
                      {member.title}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="space-y-1.5 pt-1">
                    <div className="text-[10px] font-black uppercase tracking-wider text-slate-400">Clinical Focus:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {member.specialties.map((spec) => (
                        <span key={spec} className="rounded-lg bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-100 mt-6">
                  <button
                    type="button"
                    onClick={() => handleStartBooking("1-on-1 Evaluation", member.name)}
                    className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-slate-900 py-2.5 text-xs font-black text-white hover:bg-emerald-700 transition active:scale-95"
                  >
                    <span>Request Appointment with {member.name.split(" ")[1]}</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. DIRECT ACCESS & IN-NETWORK INSURANCE COVERAGE                          */}
      {/* ========================================================================= */}
      <section id="visit-info" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-[#f8faf9]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Direct Access Explanation (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-emerald-800">
                Maryland Direct Access Law
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                No doctor referral needed. Start recovering today.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                In Maryland, you have the legal right to be directly evaluated and treated by a licensed Doctor of Physical Therapy
                without wasting 2 to 4 weeks waiting for an MD appointment or prescription.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-slate-200">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-700">
                    <strong className="block text-slate-900 font-black">Faster Resolution & Lower Total Cost:</strong>
                    Patients who start PT within 14 days of an acute injury require 68% fewer opioids and 80% fewer MRIs.
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-2xl bg-white p-4 border border-slate-200">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-700">
                    <strong className="block text-slate-900 font-black">Direct Insurance Claim Billing:</strong>
                    We verify your specific insurance benefits in real-time and file all claims directly on your behalf.
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => handleStartBooking("Direct Access Initial Evaluation")}
                  className="rounded-2xl bg-slate-900 px-6 py-3.5 text-xs sm:text-sm font-black text-white hover:bg-emerald-700 transition active:scale-95 shadow-md"
                >
                  Book Direct Access Evaluation Now →
                </button>
              </div>
            </div>

            {/* Right: In-Network Plans List (6 cols) */}
            <div className="lg:col-span-6 rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="text-base font-black text-slate-900">
                  Accepted In-Network Insurance Plans
                </h3>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  100% Transparent Copays
                </span>
              </div>

              <div className="space-y-2">
                {insurancePlans.map((plan) => (
                  <div
                    key={plan.name}
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-100 bg-slate-50/70 hover:bg-emerald-50/50 transition-colors"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900">{plan.name}</div>
                      <div className="text-[11px] text-slate-500">{plan.note}</div>
                    </div>
                    <span className="shrink-0 rounded-lg bg-white border border-slate-200 px-2.5 py-1 text-[10px] font-black text-slate-800 shadow-xs">
                      {plan.tier}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-100 text-center text-xs text-slate-500">
                Don't see your insurance listed? We also offer clear, transparent out-of-network reimbursement receipts.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 10. PATIENT RECOVERY STORIES & TESTIMONIALS                                */}
      {/* ========================================================================= */}
      <section id="reviews" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-[#091a14] text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-lime-400/30 bg-lime-400/10 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-lime-300">
              Verified Patient Transformations
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Real athletes. Real workers. Fearless movement.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Read honest stories from patients who overcame chronic pain and severe post-surgical setbacks at Renew.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {recoveryStories.map((review) => (
              <div
                key={review.name}
                className="rounded-3xl border border-white/15 bg-white/[0.04] p-7 backdrop-blur-md shadow-xl flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-lime-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-lime-400 text-lime-400" />
                    ))}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-lime-400 tracking-wider">
                      {review.injury}
                    </span>
                    <h4 className="text-sm font-black text-white">
                      {review.result}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    "{review.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-black text-white">{review.name}</div>
                    <div className="text-[11px] text-slate-400">{review.role}</div>
                  </div>
                  <div className="text-[10px] text-right text-emerald-400 font-semibold">
                    {review.therapist}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 11. INTERACTIVE MOVEMENT TRIAGE & SELF-SCREENER                           */}
      {/* ========================================================================= */}
      <section id="screener" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-white border-t border-slate-200">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-14">
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-emerald-800">
              Free Online Symptom Screener
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              Not sure where to start? Check in 30 seconds.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Select your primary symptom zone and recovery goals to see our recommended clinical pathway.
            </p>
          </div>

          <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 shadow-lg space-y-6">
            {/* Question 1 */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                1. Where is your primary discomfort or movement limit?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["Back or Neck", "Shoulder or Arm", "Hip or Pelvis", "Knee or Ankle", "Foot / Achilles", "Full Body / Athletic"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setScreenerZone(opt);
                      setScreenerResultVisible(true);
                    }}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                      screenerZone === opt
                        ? "border-emerald-600 bg-emerald-600 text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2 */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                2. How long have you experienced these symptoms?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["< 2 Weeks (Acute)", "2 to 4 Weeks", "Over 1 Month (Chronic)"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setScreenerDuration(opt);
                      setScreenerResultVisible(true);
                    }}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                      screenerDuration === opt
                        ? "border-emerald-600 bg-emerald-600 text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3 */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                3. What is your #1 target outcome?
              </label>
              <div className="grid grid-cols-2 gap-2">
                {["Pain-Free Daily Work & Sleep", "Return to Running & Sports", "Post-Surgical Healing Clearance", "Lifting Heavy in the Gym"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => {
                      setScreenerGoal(opt);
                      setScreenerResultVisible(true);
                    }}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-center ${
                      screenerGoal === opt
                        ? "border-emerald-600 bg-emerald-600 text-white shadow-sm"
                        : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Screener Result Card */}
            {screenerResultVisible && (
              <div className="rounded-2xl bg-emerald-950 text-white p-5 space-y-3 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-wider text-lime-400">
                    Recommended Triage Match
                  </span>
                  <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded text-slate-300">
                    Direct Access Approved
                  </span>
                </div>
                <h4 className="text-base font-black text-white">
                  60-Minute Comprehensive {screenerZone} Motion Evaluation
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Based on your {screenerDuration.toLowerCase()} symptoms and goal to reach <strong>"{screenerGoal}"</strong>,
                  we recommend starting with an objective joint mobility and dynamometer strength assessment.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => handleStartBooking(`Screener Match: ${screenerZone} Evaluation`)}
                    className="w-full rounded-xl bg-gradient-to-r from-lime-400 to-emerald-400 py-3 text-xs font-black text-slate-950 shadow-md hover:brightness-110 active:scale-95 transition-all"
                  >
                    Claim Recommended Slot for {screenerZone} →
                  </button>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 12. HIGH-PERFORMANCE CLINICAL FOOTER                                      */}
      {/* ========================================================================= */}
      <footer className="bg-[#061510] text-slate-300 py-16 pb-28 sm:pb-16 text-xs border-t border-emerald-950">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-black text-base">
                <Activity size={20} className="text-lime-400 stroke-[2.5]" />
                <span>RENEW PHYSICAL THERAPY</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Biomechanical sports physical therapy, post-op joint rehabilitation, and 3D motion capture. Exclusively 1-on-1 sessions with licensed Doctors of Physical Therapy.
              </p>
              <div className="text-lime-300 font-bold">
                (555) 017-4826 · care@renewphysicaltherapy.example
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-bold uppercase tracking-wider text-white">Motion Studio Location</p>
              <p className="leading-relaxed">
                Renew Physical Therapy & Motion Lab<br />
                620 Renewal Way, Suite 140<br />
                Athletic Performance Plaza, MD 20852
              </p>
              <p className="text-lime-400">Reserved athlete parking directly in front</p>
            </div>

            <div className="space-y-3">
              <p className="font-bold uppercase tracking-wider text-white">Clinical Hours</p>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Monday – Friday:</span>
                  <span className="text-white">6:30 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">8:00 AM – 1:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-slate-500">Closed for Recovery</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-bold uppercase tracking-wider text-white">Quick Navigation</p>
              <div className="flex flex-col space-y-1.5">
                <a href="#services" className="hover:text-lime-300">Clinical Services</a>
                <a href="#body-navigator" className="hover:text-lime-300">Joint & Pain Target Navigator</a>
                <a href="#tech-modalities" className="hover:text-lime-300">Kinetic Modalities & Motion Lab</a>
                <a href="#recovery-milestones" className="hover:text-lime-300">4-Phase Recovery Milestones</a>
                <a href="#therapists" className="hover:text-lime-300">Doctors of Physical Therapy</a>
                <a href="#visit-info" className="hover:text-lime-300">Direct Access & In-Network Insurance</a>
                <a href="#reviews" className="hover:text-lime-300">Verified Patient Transformations</a>
                <a href="#screener" className="hover:text-lime-300">Interactive Symptom Screener</a>
                <Link to="/medical" className="text-lime-400 hover:underline pt-1">← Medical Showcase Index</Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} Renew Physical Therapy & Kinetic Performance, PLLC. All Rights Reserved.</p>
            <div className="flex gap-4">
              <span>American Physical Therapy Association (APTA)</span>
              <span>Fellow AAOMPT</span>
              <span>HIPAA Secure</span>
            </div>
          </div>
        </Container>
      </footer>

      {/* ========================================================================= */}
      {/* 13. FLOATING MOBILE CONCIERGE DOCK                                        */}
      {/* ========================================================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#081711]/95 border-t border-emerald-900/50 p-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl sm:hidden shadow-2xl">
        <div className="flex items-center gap-2">
          <a
            href="tel:5550174826"
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-bold text-white active:scale-95"
          >
            <Phone size={13} className="text-lime-400" />
            <span>Call Clinic</span>
          </a>

          <button
            type="button"
            onClick={() => handleStartBooking()}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-emerald-400 via-lime-400 to-green-500 py-2.5 text-xs font-black text-slate-950 shadow-md active:scale-95"
          >
            <Calendar size={13} strokeWidth={2.5} />
            <span>Book Evaluation</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 14. INTERACTIVE 3-STEP APPOINTMENT SCHEDULER MODAL                        */}
      {/* ========================================================================= */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-slate-900">
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
                  <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">
                    Renew Online Evaluation Concierge
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-0.5">
                    Schedule Your 60-Minute Evaluation
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Direct Access: No doctor referral or prior prescription needed.
                  </p>
                </div>

                {/* Step indicator */}
                <div className="flex items-center gap-2 mb-6 text-xs">
                  <div className={`flex-1 h-1.5 rounded-full ${bookingStep >= 1 ? "bg-emerald-600" : "bg-slate-200"}`} />
                  <div className={`flex-1 h-1.5 rounded-full ${bookingStep >= 2 ? "bg-emerald-600" : "bg-slate-200"}`} />
                  <div className={`flex-1 h-1.5 rounded-full ${bookingStep >= 3 ? "bg-emerald-600" : "bg-slate-200"}`} />
                </div>

                {/* Step 1: Select Service & Doctor */}
                {bookingStep === 1 && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Select Service Focus</label>
                      <div className="space-y-2">
                        {[
                          "Initial Kinetic Movement Evaluation (60 Min)",
                          "3D Biomechanical Running Gait Analysis",
                          "Post-Operative Joint Reconstruction Rehab",
                          "Integrative Dry Needling & Manual Therapy",
                          "Blood Flow Restriction (BFR) Performance Training",
                        ].map((srv) => (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => setBookingService(srv)}
                            className={`w-full text-left p-3 rounded-xl border transition-all ${
                              bookingService === srv
                                ? "border-emerald-600 bg-emerald-50 text-slate-900 font-bold"
                                : "border-slate-200 bg-slate-50/60 text-slate-700 hover:bg-slate-100"
                            }`}
                          >
                            {srv}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Doctor of Physical Therapy</label>
                      <select
                        value={bookingTherapist}
                        onChange={(e) => setBookingTherapist(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-medium text-slate-900 focus:border-emerald-600 focus:outline-hidden"
                      >
                        <option>First Available Doctor of PT</option>
                        <option>Dr. Maya Collins, PT, DPT, OCS (Spine & Orthopedics)</option>
                        <option>Jordan Hayes, PT, DPT, SCS, CSCS (Sports & ACL)</option>
                        <option>Elena Brooks, PTA, FMS (Movement Coach)</option>
                      </select>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setBookingStep(2)}
                        className="rounded-xl bg-slate-900 px-6 py-2.5 font-bold text-white hover:bg-emerald-700 transition-all"
                      >
                        Select Date & Slot →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Slot */}
                {bookingStep === 2 && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Select Preferred Day</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {["Tomorrow (Priority)", "Wednesday", "Thursday", "Friday"].map((day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => setBookingDay(day)}
                            className={`p-2 rounded-xl text-center font-bold border transition-all ${
                              bookingDay === day
                                ? "border-emerald-600 bg-emerald-50 text-slate-900"
                                : "border-slate-200 bg-slate-50 text-slate-700"
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Available 60-Min Evaluation Slot</label>
                      <div className="grid grid-cols-3 gap-2">
                        {["7:00 AM", "8:15 AM", "9:00 AM", "11:30 AM", "2:00 PM", "4:30 PM"].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setBookingSlot(slot)}
                            className={`p-2 rounded-xl text-center font-bold border transition-all ${
                              bookingSlot === slot
                                ? "border-emerald-600 bg-emerald-50 text-slate-900"
                                : "border-slate-200 bg-slate-50 text-slate-700"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setBookingStep(1)}
                        className="text-slate-500 hover:text-slate-800 font-bold"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setBookingStep(3)}
                        className="rounded-xl bg-slate-900 px-6 py-2.5 font-bold text-white hover:bg-emerald-700 transition-all"
                      >
                        Patient Details →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact & Insurance */}
                {bookingStep === 3 && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setBookingConfirmed(true);
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Full Patient Name</label>
                      <input
                        type="text"
                        required
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="e.g. Alex Henderson"
                        className="w-full p-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Mobile Phone (For SMS Appointment Pass)</label>
                      <input
                        type="tel"
                        required
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        placeholder="(555) 000-0000"
                        className="w-full p-2.5 rounded-xl border border-slate-200 focus:border-emerald-600 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Primary Insurance or Self-Pay</label>
                      <select
                        value={patientInsurance}
                        onChange={(e) => setPatientInsurance(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-medium text-slate-900 focus:border-emerald-600 focus:outline-hidden"
                      >
                        <option>CareFirst BlueCross BlueShield</option>
                        <option>Medicare Part B</option>
                        <option>Aetna Healthcare</option>
                        <option>Cigna Health Care</option>
                        <option>UnitedHealthcare</option>
                        <option>Tricare Military</option>
                        <option>HSA / FSA Direct Pay</option>
                        <option>Out-of-Network Self-Pay</option>
                      </select>
                    </div>

                    {/* Summary box */}
                    <div className="rounded-xl bg-slate-50 border border-slate-200 p-3 space-y-1 text-slate-600">
                      <div className="flex justify-between font-bold text-slate-800">
                        <span>Selected Slot:</span>
                        <span className="text-emerald-700">{bookingDay} at {bookingSlot}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Provider:</span>
                        <span className="font-semibold text-slate-700">{bookingTherapist}</span>
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setBookingStep(2)}
                        className="text-slate-500 hover:text-slate-800 font-bold"
                      >
                        ← Back
                      </button>
                      <button
                        type="submit"
                        className="rounded-xl bg-gradient-to-r from-emerald-600 to-lime-500 px-6 py-2.5 font-black text-slate-950 shadow-md hover:scale-105 transition-all"
                      >
                        Confirm Evaluation
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
                <h3 className="text-2xl font-black text-slate-900">
                  Kinetic Evaluation Confirmed!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, {patientName || "valued patient"}! A digital confirmation pass and movement intake questionnaire have been sent to {patientPhone || "your mobile phone"}.
                </p>

                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Patient:</span>
                    <span className="font-bold text-slate-900">{patientName || "Patient"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Clinical Focus:</span>
                    <span className="font-bold text-slate-900">{bookingService}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Doctor of PT:</span>
                    <span className="font-bold text-slate-900">{bookingTherapist}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Scheduled Time:</span>
                    <span className="font-bold text-emerald-700">{bookingDay} · {bookingSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Facility Location:</span>
                    <span className="font-bold text-slate-900">620 Renewal Way, Suite 140</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsBookingOpen(false)}
                  className="w-full rounded-xl bg-slate-900 py-3 text-xs font-bold text-white hover:bg-slate-800"
                >
                  Done & Return to Motion Studio
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
