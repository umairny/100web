import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Award,
  Calendar,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Eye,
  Glasses,
  HelpCircle,
  Menu,
  Monitor,
  Pause,
  Phone,
  Play,
  RefreshCw,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Sun,
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
    desc: "Exams, dry eye & medical care",
    href: "#services",
    icon: Stethoscope,
  },
  {
    id: "face-finder",
    label: "Face Stylist",
    fullLabel: "Face Shape Stylist",
    desc: "Interactive frame silhouette matcher",
    href: "#face-finder",
    icon: Sparkles,
  },
  {
    id: "eyewear-studio",
    label: "Eyewear",
    fullLabel: "Eyewear Studio",
    desc: "Curated handcrafted & titanium gallery",
    href: "#eyewear-studio",
    icon: Glasses,
  },
  {
    id: "exam-tech",
    label: "Exam Tech",
    fullLabel: "Digital Exam Tech",
    desc: "Optomap 200° no-dilation scans",
    href: "#exam-tech",
    icon: Monitor,
  },
  {
    id: "optometrists",
    label: "Doctors",
    fullLabel: "Our Optometrists",
    desc: "Board-certified doctors & opticians",
    href: "#optometrists",
    icon: Award,
  },
  {
    id: "visit-info",
    label: "Vision Plans",
    fullLabel: "Vision Plans & Insurance",
    desc: "VSP, EyeMed, Davis Vision & FSA",
    href: "#visit-info",
    icon: ShieldCheck,
  },
  {
    id: "reviews",
    label: "Reviews",
    fullLabel: "Patient Reviews",
    desc: "4.96 rating across 850+ reviews",
    href: "#reviews",
    icon: Star,
  },
  {
    id: "faq",
    label: "FAQ",
    fullLabel: "Patient FAQ",
    desc: "Dilation, benefits & preparation",
    href: "#faq",
    icon: HelpCircle,
  },
];

// Accepted Vision Plans
const visionPlans = [
  { name: "VSP (Vision Service Plan)", coverage: "Full Exam + $200 Frame Allowance", tier: "In-Network" },
  { name: "EyeMed Vision Care", coverage: "Full Exam + $180 Frame Allowance", tier: "In-Network" },
  { name: "Davis Vision", coverage: "Full Exam + Frame Benefit", tier: "In-Network" },
  { name: "Spectera / UnitedHealthcare Vision", coverage: "Full Exam + Copay Discounts", tier: "In-Network" },
  { name: "Blue Cross Blue Shield Vision", coverage: "Comprehensive Exam & Lenses", tier: "In-Network" },
  { name: "Medicare / Medical Red Eye", coverage: "Medical Glaucoma & Diabetic Exams", tier: "In-Network" },
  { name: "FSA & HSA Benefit Cards", coverage: "100% Eligible on Exams, Lenses & Sunglasses", tier: "Accepted" },
];

// Face Shape Eyewear Matcher Data
const faceShapes = [
  {
    id: "oval",
    shape: "Oval Face Shape",
    emoji: "📐",
    traits: "Balanced proportions, gently curved jawline and slightly wider cheekbones.",
    recommendation: "Virtually any frame silhouette looks balanced. Geometric aviators and bold rectangular silhouettes add sharp definition.",
    topPicks: ["Classic Rectangular Acetate", "Geometric Titanium Aviator", "Soft Square Wayfarer"],
    image: "medical/clearview/frame-styling.webp",
  },
  {
    id: "square",
    shape: "Square Face Shape",
    emoji: "⏹️",
    traits: "Prominent strong jawline, angular facial contours, and forehead of equal width.",
    recommendation: "Soften angular contours with rounded or oval silhouettes and ultra-thin titanium wire profiles.",
    topPicks: ["Round Tortoiseshell Wire", "P3 Minimalist Oval", "Rimless Featherlight Titanium"],
    image: "medical/clearview/retail-frames.webp",
  },
  {
    id: "round",
    shape: "Round Face Shape",
    emoji: "⚪",
    traits: "Equal width and length with soft, curved lines and full cheeks.",
    recommendation: "Add structure, angles, and contrast with bold rectangular frames, cat-eye designs, and angular browlines.",
    topPicks: ["Architectural Rectangular", "Elevated Cat-Eye", "Modern Angular D-Frame"],
    image: "medical/clearview/eyewear-display.webp",
  },
  {
    id: "heart",
    shape: "Heart / Triangle Shape",
    emoji: "💎",
    traits: "Broader forehead tapering gently to a delicate chin with high cheekbones.",
    recommendation: "Balance upper brow width with bottom-heavy shapes, round clubmasters, or rimless frames.",
    topPicks: ["Classic Clubmaster", "Light Gold Round Wire", "Clear Crystal Acetate"],
    image: "medical/clearview/hero.webp",
  },
];

// Curated Eyewear Gallery Catalog
const frameCatalog = [
  {
    id: "f1",
    name: "The Metropolitan P3",
    category: "Everyday Classics",
    material: "Hand-polished Italian Mazzucchelli Acetate",
    color: "Amber Tortoise & Brushed Bronze",
    price: "$245",
    insuranceAllowance: "$45 with VSP/EyeMed",
    image: "medical/clearview/retail-frames.webp",
    badges: ["Best Seller", "Blue-Light Ready", "Featherlight"],
  },
  {
    id: "f2",
    name: "Aero Titanium Aviator",
    category: "Titanium Ultralight",
    material: "Japanese Beta-Titanium (Under 12 grams)",
    color: "Matte Slate & Satin Rose Gold",
    price: "$310",
    insuranceAllowance: "$90 with VSP/EyeMed",
    image: "medical/clearview/eyewear-display.webp",
    badges: ["Zero-Pressure Fit", "Hypoallergenic", "Lifetime Hinge"],
  },
  {
    id: "f3",
    name: "Sovereign Bold Square",
    category: "Bold Modern",
    material: "Cured Organic Acetate with Custom Corewire",
    color: "Obsidian Black & Crystal Smoke",
    price: "$275",
    insuranceAllowance: "$65 with VSP/EyeMed",
    image: "medical/clearview/frame-styling.webp",
    badges: ["High-Index Compatible", "German Rivets"],
  },
  {
    id: "f4",
    name: "Riviera Polarized Sunwear",
    category: "Sunwear & UV Shield",
    material: "Impact-Resistant CR-39 Polarized Optics",
    color: "Deep Champagne Havana",
    price: "$290",
    insuranceAllowance: "$75 with Prescription Sun",
    image: "medical/clearview/hero.webp",
    badges: ["100% UVA/UVB", "Glare-Free Driving", "Anti-Reflective"],
  },
];

// Optometrists and Stylists
const providers = [
  {
    name: "Dr. Olivia Bennett, OD",
    role: "Lead Optometrist & Glaucoma Specialist",
    education: "UC Berkeley School of Optometry · Residency at VA Medical Center",
    experience: "12+ Years Clinical Care",
    quote: "Vision is how we experience our loved ones and life. We explain every retinal layer clearly so you leave confident.",
    photo: "medical/clearview/optometry-team.webp",
    specialties: ["Optomap Retinal Diagnostics", "Dry Eye Spa Therapy", "Myopia Control"],
  },
  {
    name: "Dr. Marcus Lee, OD, FAAO",
    role: "Clinical Optometrist & Contact Lens Fellow",
    education: "SUNY College of Optometry · Fellow American Academy of Optometry",
    experience: "10+ Years Clinical Care",
    quote: "Whether you struggle with screen eye fatigue or hard-to-fit astigmatism contacts, precision diagnostics solve it.",
    photo: "medical/clearview/eye-exam.webp",
    specialties: ["Scleral & Toric Contacts", "Computer Vision Syndrome", "Laser Surgery Co-management"],
  },
  {
    name: "Sophia Rivera, ABO",
    role: "Master Licensed Optical Stylist",
    education: "American Board of Opticianry Certified",
    experience: "9+ Years Eyewear Curation",
    quote: "Glasses are the very first piece of your wardrobe that people see. We find the frame that highlights your true personality.",
    photo: "medical/clearview/frame-styling.webp",
    specialties: ["Facial Contour Matching", "Progressive Lens Ergonomics", "Custom Prescription Tinting"],
  },
];

// Patient Reviews
const reviews = [
  {
    name: "Maya Sterling",
    location: "Verified Patient · 3 days ago",
    type: "Comprehensive Exam & Custom Titanium Frames",
    quote:
      "The Optomap scan was incredible — no stinging dilation drops that ruin your afternoon! Dr. Bennett showed me the full 200-degree map of my retina on screen. Sophia helped me pick frames that I get compliments on daily.",
    rating: 5,
  },
  {
    name: "Jonathan Vance",
    location: "Verified Patient · 2 weeks ago",
    type: "Computer Vision & Digital Eye Strain",
    quote:
      "As a software engineer staring at 3 screens all day, my 3 PM migraines were debilitating. Dr. Lee prescribed an anti-fatigue contour lens with blue-light filtering. My eye strain completely disappeared within two days.",
    rating: 5,
  },
  {
    name: "Elena Rostova",
    location: "Verified Patient · 1 month ago",
    type: "Contact Lens Fitting & Frame Pickup",
    quote:
      "I have high astigmatism and every other clinic gave me blurry contacts. Dr. Lee took 40 unhurried minutes to test toric trial lenses until my vision was 20/15 razor sharp. The optical studio feels like a Soho boutique!",
    rating: 5,
  },
];

// Frequently Asked Questions
const faqs = [
  {
    q: "Do I have to get my eyes dilated during the exam?",
    a: "No! ClearView Optometry features the Optomap Daytona 200° ultra-widefield digital retinal imaging system. It captures high-resolution views of your retina in under a second without dilation drops, meaning zero blurred vision or stinging sensitivity after your visit.",
  },
  {
    q: "How does my vision insurance work for exams and glasses?",
    a: "We are in-network with VSP, EyeMed, Davis Vision, Spectera, and major commercial plans. In most cases, your annual comprehensive eye exam is 100% covered with a small copay ($10–$20), and you receive a $150–$250 direct allowance toward designer frames and prescription lenses.",
  },
  {
    q: "Can I use my FSA or HSA benefits for eyewear and contacts?",
    a: "Yes! Prescription glasses, designer prescription sunglasses, prescription contact lenses, eye exams, and dry eye treatments are all 100% eligible healthcare expenses under IRS FSA/HSA rules. We can split payments or process your FSA debit card directly.",
  },
  {
    q: "What if I experience sudden vision changes, red eye, or eye pain?",
    a: "We hold daily emergency appointments for sudden flashes, floaters, foreign particles in the eye, corneal abrasions, severe dry eye, or eye infections. Call our direct triage hotline at (555) 014-9921 for same-day evaluation.",
  },
  {
    q: "How long does it take for custom prescription glasses to be ready?",
    a: "Most single-vision prescriptions are finished in 3 to 5 business days in our precision finishing optical lab. Complex customized progressive lenses or specialized anti-reflective scratch coatings typically take 5 to 7 business days.",
  },
];

// Interactive Hero Carousel Slides
const heroSlides = [
  {
    id: "eyewear",
    tabLabel: "Eyewear Studio",
    tabSubtitle: "Handcrafted Frames",
    badge: "Haute Eyewear & Custom Silhouette",
    tagline: "Curated European & Japanese Eyewear",
    titlePrefix: "Artisan eyewear sculpted to your ",
    titleHighlight: "face shape.",
    titleSuffix: "",
    desc: "Explore over 800 hand-finished Italian Mazzucchelli acetate and Tokyo beta-titanium frames. Paired with digital pupillometry for millimeter-perfect progressive and bifocal optical alignment.",
    image: "medical/clearview/hero.webp",
    service: "Eyewear Styling & Prescription Fitting",
    doctor: "Dr. Olivia Bennett, OD",
    appointmentSlot: "Tomorrow 10:15 AM",
    features: [
      "Ultralight Beta-Titanium (<12g)",
      "Mazzucchelli Organic Acetate",
      "Digital Pupillometer Alignment",
    ],
    primaryBtn: "Reserve Frame Styling",
    secondaryBtn: "Face Shape Matcher",
    secondaryHref: "#face-finder",
    statValue: "800+",
    statLabel: "Designer Frames",
    accentGradient: "from-cyan-400 via-sky-300 to-blue-500",
  },
  {
    id: "optomap",
    tabLabel: "Optomap 200°",
    tabSubtitle: "No-Dilation Scans",
    badge: "Optomap Daytona 200° Digital Imaging",
    tagline: "Ultra-Widefield Diagnostic Retina Scan",
    titlePrefix: "No stinging drops. Total retinal clarity in ",
    titleHighlight: "0.25 seconds.",
    titleSuffix: "",
    desc: "Capture 82% of your retina in a single painless flash without stinging dilation drops or blurry vision. Safely drive home immediately and detect early glaucoma, macular, and diabetic changes.",
    image: "medical/clearview/eye-exam.webp",
    service: "Comprehensive Eye Exam + Optomap",
    doctor: "Dr. Marcus Vance, OD",
    appointmentSlot: "Tomorrow 11:30 AM",
    features: [
      "0-Minute Dilation Recovery",
      "Early Glaucoma & Macular Scan",
      "Drive Home Safely Immediately",
    ],
    primaryBtn: "Book Optomap Vision Exam",
    secondaryBtn: "Explore Exam Tech",
    secondaryHref: "#exam-tech",
    statValue: "200°",
    statLabel: "Drop-Free Retina Map",
    accentGradient: "from-emerald-400 via-teal-300 to-cyan-500",
  },
  {
    id: "contacts",
    tabLabel: "Contact Lens Care",
    tabSubtitle: "Astigmatism & Toric",
    badge: "Wavefront & Hard-to-Fit Cornea Care",
    tagline: "Precision Astigmatism & Multifocal Contacts",
    titlePrefix: "Custom toric fittings for ",
    titleHighlight: "20/15 razor-sharp",
    titleSuffix: " clarity.",
    desc: "End the frustration of blurry rotating toric lenses and dry eyes. We test diagnostic trial lenses with 16-hour HydraLuxe moisture polymers until your sight is crystal clear all day.",
    image: "medical/clearview/contact-lens-care.webp",
    service: "Contact Lens Diagnostic Fitting",
    doctor: "Dr. Ethan Lee, OD",
    appointmentSlot: "Tomorrow 1:45 PM",
    features: [
      "HydraLuxe 16-Hour Moisture",
      "Toric & Scleral Diagnostics",
      "Free In-Clinic Trial Lenses",
    ],
    primaryBtn: "Schedule Contact Fitting",
    secondaryBtn: "View Clinical Care",
    secondaryHref: "#services",
    statValue: "20/15",
    statLabel: "Clarity Target",
    accentGradient: "from-sky-400 via-indigo-300 to-purple-500",
  },
  {
    id: "sunwear",
    tabLabel: "Polarized Sunwear",
    tabSubtitle: "UV & Glare Defense",
    badge: "Polarized CR-39 Prescription Optics",
    tagline: "Prescription Sunwear & UV Glare Defense",
    titlePrefix: "Defend against blinding glare with ",
    titleHighlight: "precision polarized optics.",
    titleSuffix: "",
    desc: "High-contrast polarized driving lenses, backside anti-reflective coatings, and 100% UVA/UVB defense tailored to your exact distance or progressive prescription.",
    image: "medical/clearview/retail-frames.webp",
    service: "Prescription Sunwear Consultation",
    doctor: "Sophia Chen, Master Optician",
    appointmentSlot: "Tomorrow 2:30 PM",
    features: [
      "100% UVA / UVB Solar Shield",
      "Zero-Glare Polarized Filter",
      "100% FSA / HSA Card Eligible",
    ],
    primaryBtn: "Reserve Sunwear Consult",
    secondaryBtn: "Browse Frame Gallery",
    secondaryHref: "#eyewear-studio",
    statValue: "100%",
    statLabel: "FSA / HSA Eligible",
    accentGradient: "from-amber-400 via-orange-300 to-rose-500",
  },
];

export function ClearViewOptometry() {
  const [activeSection, setActiveSection] = useState<string>("services");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [slideProgress, setSlideProgress] = useState(0);

  // Face Shape interactive matcher state
  const [activeFaceShapeId, setActiveFaceShapeId] = useState<string>("oval");

  // Eyewear catalog filter state
  const [selectedFrameCategory, setSelectedFrameCategory] = useState<string>("All");

  // Interactive FAQ Accordion
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Booking Modal State
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [bookingExamType, setBookingExamType] = useState<string>("Comprehensive Eye Exam + Optomap");
  const [bookingDoctor, setBookingDoctor] = useState<string>("First Available Optometrist");
  const [bookingDay, setBookingDay] = useState<string>("Tomorrow (Tue)");
  const [bookingSlot, setBookingSlot] = useState<string>("10:15 AM");
  const [patientName, setPatientName] = useState<string>("");
  const [patientPhone, setPatientPhone] = useState<string>("");
  const [patientInsurance, setPatientInsurance] = useState<string>("VSP (Vision Service Plan)");
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  // Computed data
  const currentFaceShape = faceShapes.find((f) => f.id === activeFaceShapeId) || faceShapes[0];

  const filteredFrames =
    selectedFrameCategory === "All"
      ? frameCatalog
      : frameCatalog.filter((f) => f.category.includes(selectedFrameCategory));

  const activeSlide = heroSlides[currentSlide];

  // Carousel Autoplay Timer & Progress
  useEffect(() => {
    if (isCarouselPaused) return;
    const intervalTime = 6000;
    const stepTime = 50;
    const progressIncrement = (stepTime / intervalTime) * 100;

    const timer = setInterval(() => {
      setSlideProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % heroSlides.length);
          return 0;
        }
        return prev + progressIncrement;
      });
    }, stepTime);

    return () => clearInterval(timer);
  }, [isCarouselPaused, currentSlide]);

  const goToSlide = (idx: number) => {
    setCurrentSlide(idx);
    setSlideProgress(0);
  };

  const prevSlide = () => {
    setCurrentSlide((curr) => (curr - 1 + heroSlides.length) % heroSlides.length);
    setSlideProgress(0);
  };

  const nextSlide = () => {
    setCurrentSlide((curr) => (curr + 1) % heroSlides.length);
    setSlideProgress(0);
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
  const handleStartBooking = (examType?: string, doctor?: string) => {
    if (examType) setBookingExamType(examType);
    if (doctor) setBookingDoctor(doctor);
    setBookingConfirmed(false);
    setBookingStep(1);
    setIsBookingOpen(true);
  };

  // Smooth scroll handler for mobile drawer navigation
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }, 120);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] font-sans text-slate-800 antialiased selection:bg-cyan-500 selection:text-white">
      {/* ========================================================================= */}
      {/* 1. TOP EMERGENCY & CLINIC BENEFIT UTILITY BAR                             */}
      {/* ========================================================================= */}
      <div className="relative z-50 border-b border-slate-800/30 bg-[#071524] px-3 sm:px-6 py-2 text-xs text-slate-200">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-2.5">
          {/* Left: Medical Back Link & Urgent Eye Care */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0">
            <Link
              to="/medical"
              className="group inline-flex shrink-0 items-center gap-1 font-bold text-cyan-300 transition hover:text-white text-[11px] sm:text-xs"
              title="Return to Medical Showcase Directory"
            >
              <span className="hidden sm:inline">← Medical Showcase</span>
              <span className="sm:hidden text-[11px]">← Showcase</span>
            </Link>
            <span className="text-slate-700">|</span>
            <div className="inline-flex items-center gap-1.5 text-slate-300 text-[10px] sm:text-xs truncate">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              <span className="truncate font-medium">
                <span className="hidden md:inline">Optomap 200° No-Dilation Scans · </span>In-Network VSP & EyeMed
              </span>
            </div>
          </div>

          {/* Right: Urgent Red Eye Hotline & Hours */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-4 text-xs">
            <span className="hidden md:inline-flex items-center gap-1 text-slate-300 text-[11px]">
              <Clock size={12} className="text-cyan-400" />
              <span>Mon–Sat 8:30am–6:00pm</span>
            </span>
            <a
              href="tel:5550149921"
              className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/10 hover:bg-cyan-400/20 border border-cyan-400/30 px-2 sm:px-3 py-0.5 sm:py-1 text-[11px] sm:text-xs font-bold text-cyan-300 transition-colors"
              title="Urgent Eye Care & Emergency Triage"
            >
              <Phone size={11} className="text-cyan-400 shrink-0" />
              <span className="hidden sm:inline">(555) 014-9921</span>
              <span className="sm:hidden">Urgent Call</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. STICKY FROSTED CAPSULE NAVBAR                                          */}
      {/* ========================================================================= */}
      <div className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-xs transition-all">
        <div className="mx-auto flex h-14 sm:h-16 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 gap-2">
          {/* Brand Identity */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 min-w-0">
            <Link
              to="/medical"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-[#16324f] to-[#2f6f9f] text-cyan-300 shadow-md shadow-blue-950/20 ring-2 ring-cyan-400/40 transition-transform hover:scale-105 active:scale-95 shrink-0"
              title="Return to Medical Showcase Directory"
            >
              <Eye size={20} className="stroke-[2.2]" />
            </Link>
            <a href="#hero" className="flex flex-col min-w-0">
              <span className="text-xs sm:text-base font-black tracking-tight text-[#0e2238] leading-tight truncate">
                CLEARVIEW <span className="text-[#2f6f9f] font-light">OPTOMETRY</span>
              </span>
              <span className="text-[9px] uppercase font-extrabold tracking-widest text-[#2f6f9f] hidden sm:inline leading-none mt-0.5">
                Boutique Eyewear & Advanced Vision
              </span>
            </a>
          </div>

          {/* Desktop Navigation Links with Live ScrollSpy */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 rounded-full bg-slate-100/90 p-1 border border-slate-200/70 shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  className={`relative rounded-full px-2.5 xl:px-3 py-1.5 text-xs font-bold tracking-tight transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-gradient-to-r from-[#16324f] to-[#2f6f9f] text-white shadow-sm font-black"
                      : "text-slate-600 hover:text-[#0e2238] hover:bg-white"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Phone Hotline & Book Eye Exam */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
            <a
              href="tel:5550149921"
              className="hidden md:flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition-colors"
              title="Same-Day Red Eye Emergency Appointment"
            >
              <Phone size={13} className="text-[#2f6f9f]" />
              <span>(555) 014-9921</span>
            </a>

            <button
              type="button"
              onClick={() => handleStartBooking()}
              className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[#16324f] via-[#1e4066] to-[#2f6f9f] px-3 sm:px-4.5 py-1.5 sm:py-2 text-xs sm:text-sm font-extrabold text-white shadow-md shadow-blue-950/20 transition-all duration-200 hover:scale-105 active:scale-95 whitespace-nowrap"
            >
              <Calendar size={13} strokeWidth={2.5} className="sm:w-[14px] sm:h-[14px]" />
              <span className="hidden sm:inline">Book Vision Exam</span>
              <span className="sm:hidden">Book Exam</span>
            </button>

            {/* Mobile Menu Hamburger Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 lg:hidden transition-colors shadow-xs active:scale-95"
            >
              {isMobileMenuOpen ? <X size={18} className="text-[#16324f]" /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 3. MOBILE SLIDE-OVER PERFORMANCE DRAWER (FIXED HEADER & FOOTER ARCHITECTURE)*/}
      {/* ========================================================================= */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md lg:hidden flex justify-end transition-opacity duration-300"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-sm sm:max-w-md h-full bg-[#091724] border-l border-white/10 flex flex-col justify-between overflow-hidden text-white shadow-2xl animate-in slide-in-from-right duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            {/* 3A. Fixed Top Header */}
            <div className="shrink-0 p-4 sm:p-5 border-b border-white/10 bg-[#0b1a29]/95 backdrop-blur-md space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-400/30">
                    <Eye size={20} className="stroke-[2.2]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-black tracking-wider text-white">
                      CLEARVIEW <span className="text-cyan-400 font-light">OPTOMETRY</span>
                    </span>
                    <span className="text-[9px] uppercase font-bold text-slate-400">
                      Boutique Optical & Clinic Directory
                    </span>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-slate-200 hover:text-white hover:bg-white/20 transition-colors"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Active Section Telemetry Chip */}
              <div className="flex items-center justify-between rounded-xl bg-black/40 border border-cyan-500/20 px-3 py-1.5 text-[11px]">
                <span className="flex items-center gap-1.5 text-cyan-300 font-medium">
                  <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                  Currently In View:
                </span>
                <span className="font-bold text-white uppercase tracking-wider text-[10px] bg-cyan-950/80 px-2 py-0.5 rounded-md border border-cyan-500/30">
                  {navLinks.find((l) => l.id === activeSection)?.fullLabel || "Clinical Overview"}
                </span>
              </div>
            </div>

            {/* 3B. Scrollable Middle Body */}
            <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 overscroll-contain">
              {/* Quick Action Buttons */}
              <div className="grid grid-cols-1 gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    handleStartBooking();
                  }}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 py-3 text-xs font-black text-[#0b1a29] shadow-lg shadow-cyan-500/20 hover:brightness-110 active:scale-98 transition-all"
                >
                  <Calendar size={15} strokeWidth={2.5} />
                  <span>Schedule Vision Exam Online</span>
                </button>
                <a
                  href="tel:5550149921"
                  className="w-full flex items-center justify-center gap-2 rounded-xl border border-rose-500/30 bg-rose-500/15 py-2.5 text-xs font-bold text-rose-200 hover:bg-rose-500/25 transition-colors"
                >
                  <Phone size={13} className="text-rose-400" />
                  <span>Emergency Red Eye Hotline: (555) 014-9921</span>
                </a>
              </div>

              {/* Navigation Links in Strict DOM Sequence */}
              <div className="space-y-1 pt-1">
                <div className="px-2 py-1 text-[10px] font-black uppercase tracking-widest text-cyan-400/80 flex items-center justify-between">
                  <span>Sections in Page Order</span>
                  <span className="text-slate-500 font-normal">01 – 08</span>
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
                          ? "bg-gradient-to-r from-cyan-500/25 to-blue-500/15 text-white border border-cyan-400/40 shadow-sm"
                          : "text-slate-300 hover:bg-white/5 hover:text-white border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <span className={`text-[10px] font-black tracking-widest ${isActive ? "text-cyan-400" : "text-slate-600"}`}>
                          {stepNumber}
                        </span>
                        <div
                          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
                            isActive
                              ? "bg-cyan-400 text-[#0b1a29] font-black shadow-md shadow-cyan-400/30"
                              : "bg-white/5 text-slate-400 group-hover:text-cyan-300 group-hover:bg-white/10"
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
                              <span className="inline-flex items-center gap-1 rounded-full bg-cyan-400/20 px-1.5 py-0.5 text-[9px] font-black text-cyan-300 border border-cyan-400/30 shrink-0">
                                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
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
                          isActive ? "text-cyan-300" : "text-slate-600"
                        }`}
                      />
                    </a>
                  );
                })}
              </div>

              {/* Vision Plan Benefits Guarantee Box */}
              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-3.5 space-y-1.5">
                <div className="flex items-center gap-1.5 text-cyan-300 text-[11px] font-bold uppercase tracking-wider">
                  <ShieldCheck size={14} className="text-cyan-400" />
                  In-Network Vision Insurance
                </div>
                <p className="text-[11px] text-slate-300 leading-relaxed">
                  We bill VSP, EyeMed, Davis Vision, Spectera & Blue Cross directly with zero paperwork on your end. FSA/HSA cards 100% eligible.
                </p>
              </div>
            </div>

            {/* 3C. Fixed Bottom Footer */}
            <div className="shrink-0 p-3 sm:p-4 border-t border-white/10 bg-[#06111c] text-center text-[10px] text-slate-400 space-y-0.5">
              <p className="text-white font-medium">850 Grand Optical Way, Suite 210</p>
              <p className="text-cyan-400 font-semibold">Mon–Sat 8:30 AM – 6:00 PM · Dedicated Free Parking</p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 3. EDITORIAL BOUTIQUE HERO SECTION WITH INTERACTIVE CAROUSEL              */}
      {/* ========================================================================= */}
      <section id="hero" className="relative pt-6 sm:pt-10 pb-16 sm:pb-24 overflow-hidden bg-[#06121e] text-white">
        {/* Soft Ambient Radiance Orbs */}
        <div className="pointer-events-none absolute -top-36 -right-36 h-[700px] w-[700px] rounded-full bg-cyan-500/15 blur-[160px]" />
        <div className="pointer-events-none absolute top-48 -left-36 h-[600px] w-[600px] rounded-full bg-blue-600/15 blur-[150px]" />
        <div className="pointer-events-none absolute bottom-0 right-1/4 h-[500px] w-[500px] rounded-full bg-sky-400/10 blur-[140px]" />

        <Container>
          {/* Top Trust & Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6 sm:mb-8 pb-4 border-b border-white/10">
            {/* Left: Trust Badges */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-xs">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-bold text-slate-200 backdrop-blur-md">
                <Sparkles size={13} className="text-cyan-400" />
                <span>Boutique Optical Studio</span>
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 font-bold text-cyan-300 backdrop-blur-md">
                <Star size={13} className="fill-amber-400 text-amber-400" />
                <span>4.96 Rating · 850+ Verified Reviews</span>
              </span>
              <span className="hidden md:inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1.5 font-bold text-emerald-300">
                <ShieldCheck size={13} className="text-emerald-400" />
                <span>In-Network VSP & EyeMed</span>
              </span>
            </div>

            {/* Right: Carousel Controls & Live Indicator */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-300 font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span>Live Appointments Open</span>
              </span>

              {/* Pause/Play Toggle Button */}
              <button
                type="button"
                onClick={() => setIsCarouselPaused(!isCarouselPaused)}
                className="flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-bold text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                title={isCarouselPaused ? "Resume Autoplay" : "Pause Autoplay"}
              >
                {isCarouselPaused ? (
                  <>
                    <Play size={11} className="text-emerald-400" />
                    <span>Resume</span>
                  </>
                ) : (
                  <>
                    <Pause size={11} className="text-cyan-400" />
                    <span>Auto</span>
                  </>
                )}
              </button>

              {/* Prev / Next Arrows */}
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  onClick={prevSlide}
                  aria-label="Previous slide"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 hover:bg-white/15 hover:text-white transition-all active:scale-90"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={nextSlide}
                  aria-label="Next slide"
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-200 hover:bg-white/15 hover:text-white transition-all active:scale-90"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* MAIN CAROUSEL STAGE */}
          <div
            className="relative rounded-3xl sm:rounded-[2.25rem] border border-white/10 bg-gradient-to-b from-white/[0.07] to-white/[0.02] p-5 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl overflow-hidden transition-all"
            onMouseEnter={() => setIsCarouselPaused(true)}
            onMouseLeave={() => setIsCarouselPaused(false)}
          >
            {/* Ambient Corner Accent */}
            <div className="pointer-events-none absolute top-0 right-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

            {/* Active Slide Layout */}
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center xl:gap-12 relative z-10">
              {/* Left Column: Slide Editorial Copy & CTAs (7 cols) */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-6">
                {/* Eyebrow / Tagline */}
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-400/15 border border-cyan-400/30 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-cyan-300">
                    <Sparkles size={12} className="text-cyan-300" />
                    <span>{activeSlide.badge}</span>
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {activeSlide.tagline}
                  </span>
                </div>

                {/* Main Headline */}
                <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.14]">
                  {activeSlide.titlePrefix}
                  <span className={`bg-gradient-to-r ${activeSlide.accentGradient} bg-clip-text text-transparent`}>
                    {activeSlide.titleHighlight}
                  </span>
                  {activeSlide.titleSuffix}
                </h1>

                {/* Subtitle / Description */}
                <p className="text-xs sm:text-sm lg:text-base text-slate-300 leading-relaxed max-w-2xl">
                  {activeSlide.desc}
                </p>

                {/* Feature Pill Tags */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {activeSlide.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center gap-1.5 rounded-xl border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-slate-200"
                    >
                      <CheckCircle2 size={13} className="text-cyan-400 shrink-0" />
                      <span className="font-semibold">{feat}</span>
                    </div>
                  ))}
                </div>

                {/* Dual CTAs and Live Next Opening */}
                <div className="pt-2 space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <button
                      type="button"
                      onClick={() => handleStartBooking(activeSlide.service, activeSlide.doctor)}
                      className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-6 py-3.5 text-xs sm:text-sm font-black text-[#0b1a29] shadow-lg shadow-cyan-500/25 hover:scale-105 active:scale-95 transition-all"
                    >
                      <Calendar size={15} strokeWidth={2.5} />
                      <span>{activeSlide.primaryBtn}</span>
                      <ArrowRight size={15} strokeWidth={2.5} />
                    </button>

                    <a
                      href={activeSlide.secondaryHref}
                      className="inline-flex items-center gap-1.5 rounded-2xl border border-white/15 bg-white/5 px-5 py-3.5 text-xs sm:text-sm font-bold text-white hover:bg-white/10 hover:border-white/25 transition-all"
                    >
                      <span>{activeSlide.secondaryBtn}</span>
                      <ChevronRight size={15} className="text-cyan-400" />
                    </a>
                  </div>

                  {/* Doctor & Chair Callout */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 pt-1">
                    <span className="text-slate-300 font-medium">Next open chair:</span>
                    <span className="font-bold text-cyan-300">{activeSlide.appointmentSlot}</span>
                    <span className="text-slate-600">·</span>
                    <span className="text-slate-300 font-semibold">{activeSlide.doctor}</span>
                    <span className="text-slate-600">·</span>
                    <a href="tel:5550149921" className="text-sky-400 hover:underline font-bold">
                      (555) 014-9921
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Hero Visual Frame with Floating Badges (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-black/40 p-2 sm:p-2.5 shadow-2xl ring-1 ring-cyan-400/20">
                  <div className="relative overflow-hidden rounded-[1.5rem] aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/4] xl:aspect-[4/3.8]">
                    <img
                      key={activeSlide.id}
                      src={imageUrl(activeSlide.image)}
                      alt={activeSlide.titleHighlight}
                      className="h-full w-full object-cover transition-all duration-700 hover:scale-105 animate-in fade-in zoom-in-95 duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b1a29]/90 via-[#0b1a29]/25 to-transparent" />

                    {/* Top-Right Stat Capsule */}
                    <div className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 flex items-center gap-2 rounded-2xl border border-white/20 bg-[#0b1a29]/80 px-3 py-1.5 text-xs text-white shadow-lg backdrop-blur-md">
                      <span className="text-base sm:text-lg font-black text-cyan-300">{activeSlide.statValue}</span>
                      <span className="text-[10px] text-slate-300 font-semibold uppercase leading-tight">{activeSlide.statLabel}</span>
                    </div>

                    {/* Bottom Doctor Voucher Card */}
                    <div className="absolute right-3 bottom-3 left-3 rounded-2xl border border-white/15 bg-[#0e2238]/90 p-3.5 text-white shadow-2xl backdrop-blur-xl">
                      <div className="flex items-center justify-between gap-3">
                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5 text-[10px] font-black uppercase tracking-wider text-cyan-400">
                            <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                            <span>Featured Service</span>
                          </div>
                          <h4 className="text-xs sm:text-sm font-black text-white truncate mt-0.5">
                            {activeSlide.service}
                          </h4>
                          <p className="text-[11px] text-slate-300 truncate mt-0.5">
                            {activeSlide.doctor} · {activeSlide.appointmentSlot}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => handleStartBooking(activeSlide.service, activeSlide.doctor)}
                          className="shrink-0 rounded-xl bg-gradient-to-r from-cyan-400 to-blue-500 px-3 py-1.5 text-xs font-extrabold text-[#0b1a29] shadow-md hover:brightness-110 active:scale-95 transition-all"
                        >
                          Select
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* BOTTOM CAROUSEL TABS & LIVE PROGRESS BARS */}
            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-3">
              {heroSlides.map((slide, index) => {
                const isActive = currentSlide === index;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    onClick={() => goToSlide(index)}
                    className={`group text-left p-3 rounded-2xl border transition-all relative overflow-hidden ${
                      isActive
                        ? "border-cyan-400/50 bg-white/10 shadow-md"
                        : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/20"
                    }`}
                  >
                    {/* Top Progress Line */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-white/10 overflow-hidden">
                      {isActive && (
                        <div
                          className="h-full bg-gradient-to-r from-cyan-400 to-sky-300 transition-all duration-75"
                          style={{ width: `${slideProgress}%` }}
                        />
                      )}
                    </div>

                    <div className="flex items-center justify-between gap-1 mb-1">
                      <span className={`text-[10px] font-black uppercase tracking-wider ${isActive ? "text-cyan-300" : "text-slate-400"}`}>
                        0{index + 1}
                      </span>
                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                      )}
                    </div>
                    <div className={`text-xs font-bold truncate ${isActive ? "text-white" : "text-slate-300 group-hover:text-white"}`}>
                      {slide.tabLabel}
                    </div>
                    <div className="text-[10px] text-slate-400 truncate mt-0.5">
                      {slide.tabSubtitle}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Trust Strip Below Hero */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 gap-3 sm:grid-cols-4">
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-400/20 text-amber-400">
                <Star size={18} className="fill-amber-400 text-amber-400" />
              </div>
              <div>
                <div className="text-sm font-black text-white leading-tight">4.96 / 5.0</div>
                <div className="text-[11px] text-slate-400">850+ Patient Reviews</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-400/20 text-cyan-300">
                <Eye size={18} />
              </div>
              <div>
                <div className="text-sm font-black text-white leading-tight">Zero-Dilation</div>
                <div className="text-[11px] text-slate-400">Optomap 200° Scans</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-400/20 text-emerald-400">
                <ShieldCheck size={18} />
              </div>
              <div>
                <div className="text-sm font-black text-white leading-tight">In-Network</div>
                <div className="text-[11px] text-slate-400">VSP, EyeMed & Davis</div>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-400/20 text-cyan-300">
                <Clock size={18} />
              </div>
              <div>
                <div className="text-sm font-black text-white leading-tight">Emergency Care</div>
                <div className="text-[11px] text-slate-400">Same-Day Red Eye Slots</div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. ASYMMETRICAL CLINICAL SERVICES BENTO GRID                              */}
      {/* ========================================================================= */}
      <section id="services" className="py-20 sm:py-28 bg-white border-t border-b border-slate-200/80">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-[#2f6f9f]">
              Comprehensive Eye Care
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0e2238] tracking-tight">
              Clinical Optometry Meets Boutique Craftsmanship.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Every procedure is paired with clear explanations, advanced digital diagnostics, and personalized guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {/* Bento 1: Comprehensive Eye Exams + Optomap (7 cols) */}
            <div className="md:col-span-7 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-black text-[#2f6f9f]">
                    Clinical Flagship
                  </span>
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Covered by VSP & EyeMed
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#0e2238]">
                  Comprehensive Eye Exams with Optomap Imaging
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  Thorough examination of visual acuity, refractive error, eye pressure, and peripheral vision. We use ultra-widefield imaging to evaluate retina, optic nerve, and macula health without lingering dilation blur.
                </p>

                <div className="rounded-2xl bg-white border border-slate-200 p-4 space-y-2 text-xs text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#2f6f9f] shrink-0" />
                    <span>0.125-diopter digital wavefront refraction for pinpoint clarity</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#2f6f9f] shrink-0" />
                    <span>Glaucoma tonometry screening and diabetic retinal checks</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-[#2f6f9f] shrink-0" />
                    <span>Computer vision syndrome & blue-light fatigue analysis</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs font-bold text-slate-500">Duration: 40 mins · No Dilation Needed</span>
                <button
                  type="button"
                  onClick={() => handleStartBooking("Comprehensive Eye Exam + Optomap")}
                  className="rounded-xl bg-[#0e2238] px-5 py-2.5 text-xs font-black text-white hover:bg-[#2f6f9f] transition-colors shadow-md"
                >
                  Book Comprehensive Exam
                </button>
              </div>
            </div>

            {/* Bento 2: Contact Lens Diagnostic Fitting (5 cols) */}
            <div className="md:col-span-5 rounded-3xl border border-slate-200 bg-gradient-to-br from-cyan-50/50 to-white p-6 sm:p-8 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-black text-cyan-900">
                    Contact Specialty
                  </span>
                  <span className="text-xs font-bold text-slate-500">Daily & Toric</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-black text-[#0e2238]">
                  Precision Contact Lens Fittings
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Specialized fittings for astigmatism, multifocals, and dry eye sensitivity. Includes trial lenses to ensure all-day comfort before you order.
                </p>

                <div className="rounded-2xl bg-white border border-slate-200 p-3 text-xs space-y-1.5 text-slate-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-cyan-700 shrink-0" />
                    <span>Corneal topography mapping for tailored curvature match</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-cyan-700 shrink-0" />
                    <span>Direct annual supply delivery with manufacturer rebates</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500">Duration: 30 mins</span>
                <button
                  type="button"
                  onClick={() => handleStartBooking("Contact Lens Diagnostic Fitting")}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-[#0e2238] hover:bg-slate-100"
                >
                  Book Contact Fitting
                </button>
              </div>
            </div>

            {/* Bento 3: Eyewear Styling & Custom Lenses (4 cols) */}
            <div className="md:col-span-4 rounded-3xl border border-slate-200 bg-gradient-to-br from-amber-50/40 to-white p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-black text-amber-900">
                    Optical Styling
                  </span>
                  <span className="text-xs text-slate-500">800+ Frames</span>
                </div>
                <h3 className="text-xl font-black text-[#0e2238]">Frame Curation & Custom Lenses</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Consult with our licensed opticians to choose frames matching your face shape, personal style, and prescription thickness.
                </p>
                <div className="text-xs text-amber-800 font-bold">
                  Includes digital pupillometry & custom anti-reflective coatings
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500">Free with exam</span>
                <button
                  type="button"
                  onClick={() => handleStartBooking("Eyewear Styling & Prescription Fitting")}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-800 hover:bg-slate-100"
                >
                  Book Styling
                </button>
              </div>
            </div>

            {/* Bento 4: Dry Eye & Meibomian Spa (4 cols) */}
            <div className="md:col-span-4 rounded-3xl border border-slate-200 bg-gradient-to-br from-sky-50/40 to-white p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-black text-sky-900">
                    Ocular Surface
                  </span>
                  <span className="text-xs text-sky-700 font-bold">Advanced Relief</span>
                </div>
                <h3 className="text-xl font-black text-[#0e2238]">Dry Eye Spa & Tear Therapy</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Infrared meibomian gland imaging, tear osmolarity testing, and thermal expression therapy to restore natural eye moisture.
                </p>
                <div className="text-xs text-sky-800 font-bold">
                  Long-lasting relief from stinging, burning & gritty screen fatigue
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500">30–45 mins</span>
                <button
                  type="button"
                  onClick={() => handleStartBooking("Dry Eye Spa Evaluation")}
                  className="rounded-xl border border-slate-300 bg-white px-4 py-2 text-xs font-bold text-slate-800 hover:bg-slate-100"
                >
                  Dry Eye Consult
                </button>
              </div>
            </div>

            {/* Bento 5: Same-Day Urgent Red Eye Care (4 cols) */}
            <div className="md:col-span-4 rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50/40 to-white p-6 flex flex-col justify-between shadow-md hover:shadow-xl transition-all duration-300">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-rose-100 px-3 py-1 text-xs font-black text-rose-800 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-ping" />
                    Urgent Eye Care
                  </span>
                  <span className="text-xs text-rose-600 font-bold">Today</span>
                </div>
                <h3 className="text-xl font-black text-[#0e2238]">Red Eye & Corneal Emergency</h3>
                <p className="text-slate-600 text-xs leading-relaxed">
                  Foreign particles, sudden flashes, floaters, scratches, or painful infections evaluated the exact day you call.
                </p>
                <div className="text-xs text-rose-700 font-bold">
                  Covered by medical health insurance (Blue Cross, Aetna, Medicare)
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                <span className="text-xs text-slate-500">Immediate triage</span>
                <a
                  href="tel:5550149921"
                  className="rounded-xl bg-rose-600 px-4 py-2 text-xs font-bold text-white hover:bg-rose-500"
                >
                  Call Urgent Care
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE FACE SHAPE & EYEWEAR MATCHING STUDIO                       */}
      {/* ========================================================================= */}
      <section id="face-finder" className="py-20 sm:py-28 bg-[#f8fafc]">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-amber-300 bg-amber-100 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-amber-900">
              Interactive Optical Stylist
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0e2238] tracking-tight">
              Find the Perfect Frame for Your Face Shape.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Click your face shape below to discover tailored frame silhouettes, materials, and styling rules recommended by our licensed opticians.
            </p>
          </div>

          {/* Face Shape Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {faceShapes.map((shape) => {
              const isActive = shape.id === activeFaceShapeId;
              return (
                <button
                  key={shape.id}
                  type="button"
                  onClick={() => setActiveFaceShapeId(shape.id)}
                  className={`flex items-center gap-2 rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-black transition-all ${
                    isActive
                      ? "bg-[#0e2238] text-white shadow-lg ring-2 ring-cyan-400 scale-105"
                      : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"
                  }`}
                >
                  <span className="text-base sm:text-lg">{shape.emoji}</span>
                  <span>{shape.shape}</span>
                </button>
              );
            })}
          </div>

          {/* Active Face Shape Card */}
          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Visual Frame Photo */}
            <div className="md:col-span-5 relative overflow-hidden rounded-2xl border border-slate-200 shadow-md">
              <img
                src={imageUrl(currentFaceShape.image)}
                alt={currentFaceShape.shape}
                className="h-64 sm:h-72 w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e2238]/70 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs font-black">
                Featured Silhouette: {currentFaceShape.topPicks[0]}
              </div>
            </div>

            {/* Stylist Recommendation Details */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <span className="text-xs font-black uppercase tracking-wider text-[#2f6f9f]">
                  Optician Styling Guidance
                </span>
                <h3 className="text-2xl font-black text-[#0e2238] mt-0.5">
                  {currentFaceShape.shape}
                </h3>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  {currentFaceShape.traits}
                </p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200/80 space-y-2">
                <p className="text-xs font-bold text-[#0e2238]">Styling Rule of Thumb:</p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {currentFaceShape.recommendation}
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-black uppercase tracking-wider text-slate-400">
                  Ideal Frame Silhouettes:
                </p>
                <div className="flex flex-wrap gap-2">
                  {currentFaceShape.topPicks.map((pick) => (
                    <span
                      key={pick}
                      className="rounded-xl bg-blue-50 border border-blue-200 px-3 py-1.5 text-xs font-bold text-[#16324f]"
                    >
                      {pick}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => handleStartBooking("Eyewear Styling & Face Shape Fitting")}
                  className="rounded-xl bg-[#0e2238] px-6 py-2.5 text-xs font-bold text-white hover:bg-[#2f6f9f] transition-all shadow-md"
                >
                  Reserve In-Store Try-On
                </button>
                <a href="#eyewear-studio" className="text-xs font-bold text-[#2f6f9f] hover:underline">
                  Browse Full Eyewear Studio →
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. CURATED EYEWEAR & CONTACT LENS GALLERY                                 */}
      {/* ========================================================================= */}
      <section id="eyewear-studio" className="py-20 sm:py-28 bg-white border-t border-b border-slate-200/80">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-[#2f6f9f]">
                Curated Optical Gallery
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#0e2238] tracking-tight mt-2">
                Designer Optical Collection.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-1">
                Hand-finished Italian acetate, aerospace Japanese titanium, and precision lenses.
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {["All", "Everyday Classics", "Titanium Ultralight", "Bold Modern", "Sunwear"].map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedFrameCategory(cat)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-bold transition-all ${
                    selectedFrameCategory === cat
                      ? "bg-[#0e2238] text-white shadow-sm"
                      : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Frames Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredFrames.map((frame) => (
              <div
                key={frame.id}
                className="rounded-3xl border border-slate-200 bg-white overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 w-full overflow-hidden bg-slate-50">
                    <img
                      src={imageUrl(frame.image)}
                      alt={frame.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1">
                      {frame.badges.map((b) => (
                        <span
                          key={b}
                          className="rounded-full bg-white/95 border border-slate-200 px-2.5 py-0.5 text-[9px] font-black text-[#0e2238] shadow-xs"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <div className="flex justify-between items-baseline">
                      <h3 className="text-base font-black text-[#0e2238]">{frame.name}</h3>
                      <span className="text-sm font-black text-[#2f6f9f]">{frame.price}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium">{frame.color}</p>
                    <p className="text-xs text-slate-600 leading-relaxed">{frame.material}</p>
                    <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-2 text-[11px] font-bold text-emerald-800">
                      Estimated Copay: {frame.insuranceAllowance}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 mt-2">
                  <button
                    type="button"
                    onClick={() => handleStartBooking("Eyewear Styling Consultation", "Sophia Rivera")}
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 py-2 text-xs font-bold text-slate-800 hover:bg-[#0e2238] hover:text-white transition-colors"
                  >
                    Reserve In Studio
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. ADVANCED DIGITAL RETINAL DIAGNOSTICS & EXAM TECH                       */}
      {/* ========================================================================= */}
      <section id="exam-tech" className="py-20 sm:py-28 bg-[#0b1a29] text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-cyan-300">
              Advanced Clinical Diagnostics
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Hospital-Grade Retinal Technology.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Experience the future of eye care with painless, drop-free digital imaging that sees deeper than ever before.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4 hover:border-cyan-400/50 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300">
                <Eye size={24} />
              </div>
              <h3 className="text-lg font-black text-white">1. Optomap 200° Scan</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Captures over 82% of your retina in 0.25 seconds. Replaces uncomfortable dilating drops so you can drive immediately after your appointment.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4 hover:border-cyan-400/50 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300">
                <Monitor size={24} />
              </div>
              <h3 className="text-lg font-black text-white">2. Wavefront Refraction</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Computer-guided optical measurements that calculate prescription strength down to 0.125 diopters for the sharpest, cleanest night vision.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4 hover:border-cyan-400/50 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300">
                <Sun size={24} />
              </div>
              <h3 className="text-lg font-black text-white">3. Infrared Meibography</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Detects microscopic tear-gland blockages behind chronic dry eyes, screen fatigue, and contact lens discomfort before irreversible damage occurs.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 space-y-4 hover:border-cyan-400/50 transition-all">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/20 text-cyan-300">
                <Zap size={24} />
              </div>
              <h3 className="text-lg font-black text-white">4. Corneal Topography</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Creates a 3D elevation map of your cornea's unique surface to fit custom astigmatism and Ortho-K lenses with micrometer-level precision.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. OPTOMETRISTS & OPTICAL STYLISTS                                       */}
      {/* ========================================================================= */}
      <section id="optometrists" className="py-20 sm:py-28 bg-white border-t border-b border-slate-200/80">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-[#2f6f9f]">
              Clinical Excellence
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0e2238] tracking-tight">
              Optometrists & Eyewear Stylists.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Trained at the nation's premier optometry schools, committed to patient education and zero rushed visits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {providers.map((doc) => (
              <div
                key={doc.name}
                className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white overflow-hidden shadow-md flex flex-col justify-between group hover:shadow-xl transition-all duration-300"
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
                      <span className="rounded-full bg-white/95 border border-white/40 px-3 py-1 text-[10px] font-black text-[#0e2238]">
                        {doc.experience}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div>
                      <h3 className="text-lg font-black text-[#0e2238]">{doc.name}</h3>
                      <p className="text-xs font-bold text-[#2f6f9f]">{doc.role}</p>
                      <p className="text-[11px] text-slate-500 mt-0.5">{doc.education}</p>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed italic">
                      "{doc.quote}"
                    </p>
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {doc.specialties.map((s) => (
                        <span
                          key={s}
                          className="rounded-lg bg-blue-50 border border-blue-100 px-2 py-0.5 text-[10px] font-bold text-[#16324f]"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                  <span className="text-xs font-bold text-emerald-700">Accepting Patients</span>
                  <button
                    type="button"
                    onClick={() => handleStartBooking("Comprehensive Eye Exam + Optomap", doc.name)}
                    className="rounded-xl bg-[#0e2238] px-4 py-2 text-xs font-bold text-white hover:bg-[#2f6f9f] transition-colors shadow-sm"
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
      {/* 9. VISION INSURANCE & BENEFIT MAXIMIZER                                   */}
      {/* ========================================================================= */}
      <section id="visit-info" className="py-20 sm:py-28 bg-[#f8fafc]">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-emerald-300 bg-emerald-100 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-emerald-900">
              Zero Surprise Billing
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0e2238] tracking-tight">
              Maximize Your Vision Insurance & FSA Benefits.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              We verify your optical benefits in real time before your appointment so you know exactly what your plan covers.
            </p>
          </div>

          <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {visionPlans.map((plan) => (
                <div
                  key={plan.name}
                  className="rounded-2xl border border-slate-200 bg-slate-50/70 p-4 space-y-1.5"
                >
                  <div className="flex justify-between items-baseline">
                    <h4 className="text-xs font-black text-[#0e2238]">{plan.name}</h4>
                    <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[9px] font-black text-emerald-800">
                      {plan.tier}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
                    {plan.coverage}
                  </p>
                </div>
              ))}
            </div>

            <div className="rounded-2xl bg-blue-50 border border-blue-200 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="space-y-1 text-center sm:text-left">
                <h4 className="text-sm font-black text-[#0e2238]">Have Unused FSA / HSA Dollars?</h4>
                <p className="text-xs text-slate-600">
                  Most Flexible Spending Accounts expire on December 31st! Use your pre-tax funds on prescription sunglasses, backup glasses, or annual contact lenses.
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleStartBooking("FSA / HSA Benefit Utilization Exam")}
                className="shrink-0 rounded-xl bg-[#0e2238] px-5 py-2.5 text-xs font-black text-white hover:bg-[#2f6f9f] transition-all shadow-md"
              >
                Use Vision Benefits
              </button>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 10. VERIFIED PATIENT REVIEWS & WALL                                       */}
      {/* ========================================================================= */}
      <section id="reviews" className="py-20 sm:py-28 bg-white border-t border-slate-200">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-amber-300 bg-amber-100 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-amber-900">
              Patient Testimonials
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0e2238] tracking-tight">
              Trusted by Over 850+ ClearView Patients.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Honest stories from patients who found clearer sight and their signature eyewear at ClearView.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((rev) => (
              <div
                key={rev.name}
                className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 space-y-4 shadow-md flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-400" />
                      ))}
                    </div>
                    <span className="text-[10px] font-bold text-slate-400">{rev.location}</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <p className="text-xs font-black text-[#0e2238]">{rev.name}</p>
                  <p className="text-[11px] text-[#2f6f9f] font-bold">{rev.type}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 11. INTERACTIVE FREQUENTLY ASKED QUESTIONS                                */}
      {/* ========================================================================= */}
      <section id="faq" className="py-20 sm:py-28 bg-[#f8fafc] border-t border-slate-200">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-[#2f6f9f]">
              Clear Answers
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0e2238] tracking-tight">
              Frequently Asked Questions.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Everything you need to know about exams, lens timing, and vision insurance.
            </p>
          </div>

          <div className="mx-auto max-w-3xl space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={faq.q}
                  className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full flex items-center justify-between p-5 text-left text-sm sm:text-base font-bold text-[#0e2238] hover:text-[#2f6f9f] transition-colors"
                  >
                    <span>{faq.q}</span>
                    <span
                      className={`ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform ${
                        isOpen ? "rotate-180 text-[#2f6f9f] bg-blue-50" : ""
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
      {/* 12. BOUTIQUE OPTOMETRY FOOTER                                             */}
      {/* ========================================================================= */}
      <footer className="bg-[#0b1a29] text-slate-300 py-16 pb-28 sm:pb-16 text-xs">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-white font-black text-base">
                <Eye size={20} className="text-cyan-400 stroke-[2.5]" />
                <span>CLEARVIEW OPTOMETRY</span>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Elevating eye health with drop-free Optomap imaging, precision wavefront prescriptions, and curated architectural eyewear.
              </p>
              <div className="text-cyan-300 font-bold">
                (555) 014-9921 · vision@clearviewoptometry.com
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-bold uppercase tracking-wider text-white">Studio Location</p>
              <p className="leading-relaxed">
                ClearView Optical Studio<br />
                850 Grand Optical Way, Suite 210<br />
                Boutique Retail District, MD 20854
              </p>
              <p className="text-emerald-400">Validated parking in the Grand Plaza garage</p>
            </div>

            <div className="space-y-3">
              <p className="font-bold uppercase tracking-wider text-white">Studio Hours</p>
              <div className="space-y-1">
                <div className="flex justify-between">
                  <span>Monday – Friday:</span>
                  <span className="text-white">8:30 AM – 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="text-white">9:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="text-rose-400">Emergency On-Call Only</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <p className="font-bold uppercase tracking-wider text-white">Quick Navigation</p>
              <div className="flex flex-col space-y-1.5">
                <a href="#services" className="hover:text-cyan-300">Clinical Services</a>
                <a href="#face-finder" className="hover:text-cyan-300">Face Shape Eyewear Matcher</a>
                <a href="#eyewear-studio" className="hover:text-cyan-300">Designer Eyewear Studio</a>
                <a href="#exam-tech" className="hover:text-cyan-300">Optomap 200° Digital Scans</a>
                <a href="#optometrists" className="hover:text-cyan-300">Our Optometrists</a>
                <a href="#visit-info" className="hover:text-cyan-300">Vision Plans & Insurance</a>
                <a href="#reviews" className="hover:text-cyan-300">Verified Patient Reviews</a>
                <a href="#faq" className="hover:text-cyan-300">Frequently Asked Questions</a>
                <Link to="/medical" className="text-cyan-400 hover:underline pt-1">← Medical Showcase Index</Link>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <p>© {new Date().getFullYear()} ClearView Optometry & Optical Boutique, PLLC. All Rights Reserved.</p>
            <div className="flex gap-4">
              <span>American Optometric Association</span>
              <span>Fellow AAO</span>
              <span>HIPAA Secure</span>
            </div>
          </div>
        </Container>
      </footer>

      {/* ========================================================================= */}
      {/* 13. FLOATING MOBILE CONCIERGE DOCK                                        */}
      {/* ========================================================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 border-t border-slate-200 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl sm:hidden shadow-2xl">
        <div className="flex items-center gap-2">
          <a
            href="tel:5550149921"
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-slate-300 bg-slate-50 py-2.5 text-xs font-bold text-[#0e2238] active:scale-95"
          >
            <Phone size={14} />
            <span>Call Clinic</span>
          </a>

          <button
            type="button"
            onClick={() => handleStartBooking()}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-[#0e2238] via-[#16324f] to-[#2f6f9f] py-2.5 text-xs font-black text-white shadow-md active:scale-95"
          >
            <Calendar size={14} strokeWidth={2.5} />
            <span>Book Exam</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 14. INTERACTIVE 3-STEP APPOINTMENT SCHEDULER MODAL                        */}
      {/* ========================================================================= */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
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
                  <span className="text-[10px] font-black uppercase tracking-widest text-[#2f6f9f]">
                    ClearView Online Concierge
                  </span>
                  <h3 className="text-xl font-black text-[#0e2238] mt-0.5">
                    Schedule Your Vision Visit
                  </h3>
                </div>

                {/* Step Indicators */}
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-slate-100 text-xs">
                  <span className={`font-bold ${bookingStep >= 1 ? "text-[#2f6f9f]" : "text-slate-400"}`}>
                    1. Visit & Doctor
                  </span>
                  <ChevronRight size={14} className="text-slate-300" />
                  <span className={`font-bold ${bookingStep >= 2 ? "text-[#2f6f9f]" : "text-slate-400"}`}>
                    2. Date & Time
                  </span>
                  <ChevronRight size={14} className="text-slate-300" />
                  <span className={`font-bold ${bookingStep >= 3 ? "text-[#2f6f9f]" : "text-slate-400"}`}>
                    3. Patient Info
                  </span>
                </div>

                {/* Step 1 */}
                {bookingStep === 1 && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Reason for Visit</label>
                      <select
                        value={bookingExamType}
                        onChange={(e) => setBookingExamType(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 focus:border-[#2f6f9f] focus:outline-none"
                      >
                        <option value="Comprehensive Eye Exam + Optomap">Comprehensive Eye Exam + Optomap 200°</option>
                        <option value="Contact Lens Diagnostic Fitting">Contact Lens Diagnostic Fitting</option>
                        <option value="Eyewear Styling & Prescription Fitting">Eyewear Styling & Prescription Fitting</option>
                        <option value="Dry Eye Spa Evaluation">Dry Eye Spa Evaluation</option>
                        <option value="Urgent Red Eye & Foreign Body Triage">Urgent Red Eye & Foreign Body Triage</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Preferred Optometrist / Stylist</label>
                      <select
                        value={bookingDoctor}
                        onChange={(e) => setBookingDoctor(e.target.value)}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-slate-800 focus:border-[#2f6f9f] focus:outline-none"
                      >
                        <option value="First Available Optometrist">First Available Clinician (Fastest)</option>
                        <option value="Dr. Olivia Bennett, OD">Dr. Olivia Bennett, OD (Retinal & Glaucoma)</option>
                        <option value="Dr. Marcus Lee, OD, FAAO">Dr. Marcus Lee, OD, FAAO (Contacts & Eye Strain)</option>
                        <option value="Sophia Rivera, ABO">Sophia Rivera, ABO (Master Optical Stylist)</option>
                      </select>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setBookingStep(2)}
                        className="rounded-xl bg-[#0e2238] px-6 py-2.5 font-bold text-white hover:bg-[#2f6f9f]"
                      >
                        Select Date & Time →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2 */}
                {bookingStep === 2 && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Select Day</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {["Today (Priority)", "Tomorrow (Tue)", "Wednesday", "Thursday"].map((day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => setBookingDay(day)}
                            className={`p-2 rounded-xl text-center font-bold border transition-all ${
                              bookingDay === day
                                ? "border-[#2f6f9f] bg-blue-50 text-[#0e2238]"
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
                        {["9:15 AM", "10:15 AM", "11:30 AM", "1:45 PM", "3:15 PM", "4:30 PM"].map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setBookingSlot(time)}
                            className={`p-2 rounded-xl text-center font-bold border transition-all ${
                              bookingSlot === time
                                ? "border-[#2f6f9f] bg-blue-50 text-[#0e2238]"
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
                        className="rounded-xl bg-[#0e2238] px-6 py-2.5 font-bold text-white hover:bg-[#2f6f9f]"
                      >
                        Enter Patient Info →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3 */}
                {bookingStep === 3 && (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setBookingConfirmed(true);
                    }}
                    className="space-y-4 text-xs"
                  >
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        placeholder="e.g. Rachel Chen"
                        className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 focus:border-[#2f6f9f] focus:outline-none"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-slate-700 font-bold mb-1">Mobile Phone (SMS Confirmation) *</label>
                        <input
                          type="tel"
                          required
                          value={patientPhone}
                          onChange={(e) => setPatientPhone(e.target.value)}
                          placeholder="(555) 000-0000"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 focus:border-[#2f6f9f] focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-slate-700 font-bold mb-1">Vision Insurance Plan</label>
                        <select
                          value={patientInsurance}
                          onChange={(e) => setPatientInsurance(e.target.value)}
                          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-slate-800 focus:border-[#2f6f9f] focus:outline-none"
                        >
                          <option value="VSP (Vision Service Plan)">VSP (Vision Service Plan)</option>
                          <option value="EyeMed Vision Care">EyeMed Vision Care</option>
                          <option value="Davis Vision">Davis Vision</option>
                          <option value="Spectera / UHC">Spectera / UnitedHealthcare</option>
                          <option value="FSA / HSA / Self-Pay">FSA / HSA / Private Pay</option>
                        </select>
                      </div>
                    </div>

                    <div className="rounded-xl bg-cyan-50 border border-cyan-200 p-3 space-y-1 text-slate-700">
                      <div className="flex justify-between">
                        <span>Appointment:</span>
                        <span className="font-bold text-[#0e2238]">{bookingExamType}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Doctor:</span>
                        <span className="font-bold text-[#0e2238]">{bookingDoctor}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Scheduled Slot:</span>
                        <span className="font-bold text-[#2f6f9f]">{bookingDay} at {bookingSlot}</span>
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
                        className="rounded-xl bg-gradient-to-r from-[#0e2238] to-[#2f6f9f] px-6 py-2.5 font-bold text-white shadow-md hover:scale-105 transition-all"
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
                <h3 className="text-2xl font-black text-[#0e2238]">
                  Eye Exam Confirmed!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, {patientName || "valued patient"}! A digital confirmation pass and insurance intake form have been sent to {patientPhone || "your mobile phone"}.
                </p>

                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Patient:</span>
                    <span className="font-bold text-[#0e2238]">{patientName || "Patient"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Service:</span>
                    <span className="font-bold text-[#0e2238]">{bookingExamType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Optometrist:</span>
                    <span className="font-bold text-[#0e2238]">{bookingDoctor}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Time:</span>
                    <span className="font-bold text-[#2f6f9f]">{bookingDay} · {bookingSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Location:</span>
                    <span className="font-bold text-[#0e2238]">850 Grand Optical Way, Suite 210</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsBookingOpen(false)}
                  className="w-full rounded-xl bg-[#0e2238] py-3 text-xs font-bold text-white hover:bg-slate-800"
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
