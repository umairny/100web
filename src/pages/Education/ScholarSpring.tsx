import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Award,
  Baby,
  BookOpen,
  Calculator,
  Calendar,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Clock3,
  Compass,
  FileCheck2,
  FileText,
  Flame,
  Globe,
  GraduationCap,
  Heart,
  HeartHandshake,
  HelpCircle,
  Home,
  Laptop,
  Layers,
  Leaf,
  LineChart,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquare,
  Mic,
  Music,
  Paintbrush,
  Palette,
  Phone,
  Play,
  Puzzle,
  RotateCcw,
  Search,
  Send,
  Shield,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Sun,
  Target,
  Trophy,
  UserCheck,
  Users,
  Video,
  X,
  Zap,
} from "lucide-react";
import "./ScholarSpring.css";

// Photo Assets (Authentic High-Resolution Preschool Assets)
import heroChildImg from "../../assets/optimized/education/scholarspring/hero-child.jpg";
import heroClassImg from "../../assets/optimized/education/scholarspring/hero-class.jpg";
import heroKidsImg from "../../assets/optimized/education/scholarspring/hero-kids.jpg";
import programToddlerImg from "../../assets/optimized/education/scholarspring/program-toddler.jpg";
import programPreschoolImg from "../../assets/optimized/education/scholarspring/program-preschool.jpg";
import programPrekImg from "../../assets/optimized/education/scholarspring/program-prek.jpg";
import programEnrichmentImg from "../../assets/optimized/education/scholarspring/program-enrichment.jpg";
import teacherOliviaImg from "../../assets/optimized/education/scholarspring/teacher-olivia.jpg";
import teacherSophiaImg from "../../assets/optimized/education/scholarspring/teacher-sophia.jpg";
import teacherAishaImg from "../../assets/optimized/education/scholarspring/teacher-aisha.jpg";
import teacherDanielImg from "../../assets/optimized/education/scholarspring/teacher-daniel.jpg";
import familyMartinezImg from "../../assets/optimized/education/scholarspring/family-martinez.jpg";
import familyJohnsonImg from "../../assets/optimized/education/scholarspring/family-johnson.jpg";
import familyPatelImg from "../../assets/optimized/education/scholarspring/family-patel.jpg";
import bannerPaintedHandsImg from "../../assets/optimized/education/scholarspring/banner-painted-hands.jpg";

// Multi-Color Flower Logo Icon
function ScholarFlowerLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <circle cx="18" cy="18" r="5" fill="#f59e0b" />
      <circle cx="18" cy="7" r="4.5" fill="#38bdf8" />
      <circle cx="26" cy="11" r="4.5" fill="#fb7185" />
      <circle cx="28" cy="20" r="4.5" fill="#fb923c" />
      <circle cx="23" cy="28" r="4.5" fill="#34d399" />
      <circle cx="13" cy="28" r="4.5" fill="#818cf8" />
      <circle cx="8" cy="20" r="4.5" fill="#fb7185" />
      <circle cx="10" cy="11" r="4.5" fill="#fbbf24" />
    </svg>
  );
}

// Programs Dataset
const programsList = [
  {
    id: "toddlers",
    title: "Toddlers",
    age: "18 – 36 Months",
    desc: "Building trust, sensory exploration, and loving routine in a secure play space.",
    img: programToddlerImg,
    colorClass: "card-mint",
    badge: "1:4 Ratio",
    highlights: [
      "Sensory exploration & texture stations",
      "Gentle predictable routine building",
      "First words, songs & language games",
      "Loving potty training & independence support",
    ],
  },
  {
    id: "preschool",
    title: "Preschool",
    age: "3 – 4 Years",
    desc: "Fostering curiosity, empathy, friendships, and early phonemic awareness through play.",
    img: programPreschoolImg,
    colorClass: "card-amber",
    badge: "1:6 Ratio",
    highlights: [
      "Foundational letter, shape & number play",
      "Collaborative art, cutting & story circles",
      "Social sharing & emotional self-regulation",
      "Daily outdoor nature discovery & garden play",
    ],
  },
  {
    id: "pre-k",
    title: "Pre-K",
    age: "4 – 5 Years",
    desc: "Preparing confident kindergarten learners with phonics, early math, and STEM problem solving.",
    img: programPrekImg,
    colorClass: "card-blue",
    badge: "Kindergarten Prep",
    highlights: [
      "Early phonics, sight words & handwriting readiness",
      "STEM investigations & mathematical patterns",
      "Self-advocacy, turn-taking & executive functioning",
      "Smooth transition plans for elementary kindergarten",
    ],
  },
  {
    id: "enrichment",
    title: "Enrichment",
    age: "Ages 2 – 5",
    desc: "Music rhythm, Little Scientists lab, mindfulness yoga, and dual-language discovery.",
    img: programEnrichmentImg,
    colorClass: "card-pink",
    badge: "Specialty Tracks",
    highlights: [
      "Orff rhythm instruments & singing circle",
      "Hands-on Little Scientists sensory experiments",
      "Junior mindfulness, stretching & yoga play",
      "Spanish immersion songs and cultural rhymes",
    ],
  },
];

// Interactive Campus Spaces
const campusSpaces = [
  {
    id: "montessori-atelier",
    title: "Sensory & Montessori Atelier",
    tagline: "Natural materials & fine-motor exploration",
    description:
      "Designed with low wooden shelves, tactile natural materials, and child-safe manipulatives that foster independent discovery, problem-solving, and joyful curiosity.",
    img: programToddlerImg,
    features: [
      "Child-height wooden shelves",
      "Natural wooden blocks & puzzles",
      "Tactile sensory basins",
      "Self-selected activity trays",
    ],
  },
  {
    id: "literacy-nook",
    title: "Story & Literacy Reading Nook",
    tagline: "Cozy spaces for blooming book lovers",
    description:
      "A warm, cushioned sanctuary lined with hundreds of diverse picture books, phonetic games, and soft storytelling cushions where children develop a lifelong love for reading.",
    img: heroClassImg,
    features: [
      "500+ curated early reader books",
      "Soft reading circle rugs & plush pillows",
      "Puppet theater for creative retelling",
      "Daily educator-guided story circles",
    ],
  },
  {
    id: "creative-studio",
    title: "Creative Arts & Rhythm Studio",
    tagline: "Expressive painting, crafts & musical movement",
    description:
      "Equipped with standing easels, non-toxic washable paints, natural sculpting dough, and child-sized percussion instruments where self-expression and imagination come to life.",
    img: programEnrichmentImg,
    features: [
      "Double-sided child art easels",
      "Orff percussion & rhythm instruments",
      "Washable sensory finger-painting station",
      "Daily music & movement circles",
    ],
  },
  {
    id: "outdoor-garden",
    title: "Nature Discovery & Play Garden",
    tagline: "Fresh air, gross-motor fun & mini gardens",
    description:
      "A private, securely fenced green playground featuring sensory herb planter boxes, soft-landing play structures, tricycle discovery paths, and shaded picnic spaces.",
    img: heroKidsImg,
    features: [
      "Organic sensory herb & vegetable beds",
      "Padded soft-fall turf and shade sails",
      "Trike and push-car discovery loop",
      "Mud kitchen & sand discovery area",
    ],
  },
];

// Teachers Dataset
const teachersList = [
  {
    name: "Ms. Olivia",
    role: "Lead Toddler Teacher",
    exp: "10+ years experience",
    creds: "B.A. Early Childhood Education, CDA Certified",
    quote: "Building secure trust, nurturing early curiosity, and showering every toddler with warmth.",
    img: teacherOliviaImg,
    color: "#22c55e",
  },
  {
    name: "Ms. Sophia",
    role: "Preschool Lead Educator",
    exp: "8+ years experience",
    creds: "M.Ed. Curriculum & Instruction",
    quote: "Growing independence, empathy, and social confidence through hands-on creative play.",
    img: teacherSophiaImg,
    color: "#f59e0b",
  },
  {
    name: "Ms. Aisha",
    role: "Pre-K & Kindergarten Prep Lead",
    exp: "11+ years experience",
    creds: "State Certified ECE Specialist, Phonics Master",
    quote: "I empower our pre-kindergarten learners to step into elementary school confident, curious, and excited.",
    img: teacherAishaImg,
    color: "#06b6d4",
  },
  {
    name: "Mr. Daniel",
    role: "Enrichment & Music Specialist",
    exp: "9+ years experience",
    creds: "B.M. Music Education, Orff Schulwerk Certified",
    quote: "Bringing musical joy, rhythm, and big smiles into every child's preschool day.",
    img: teacherDanielImg,
    color: "#3b82f6",
  },
];

// Schedules by Track
const scheduleTracks: Record<string, { time: string; title: string; desc: string; icon: any; color: string }[]> = {
  preschool: [
    { time: "7:30 - 8:30 AM", title: "Early Arrival & Choice Time", desc: "Warm welcomes, quiet table toys & sensory puzzles", icon: Sun, color: "text-amber" },
    { time: "8:30 - 9:15 AM", title: "Morning Circle & Songs", desc: "Community greeting, calendar song, and daily story introduction", icon: Users, color: "text-blue" },
    { time: "9:15 - 10:15 AM", title: "Discovery Learning Centers", desc: "Small-group literacy, math blocks, and science exploration", icon: Puzzle, color: "text-teal" },
    { time: "10:15 - 10:45 AM", title: "Organic Snack & Table Talk", desc: "Fresh organic fruits, whole grain snacks & conversational skills", icon: Leaf, color: "text-green" },
    { time: "10:45 - 11:45 AM", title: "Outdoor Garden Play", desc: "Fresh air, gross-motor climbing, tricycle loop & sandbox", icon: Sparkles, color: "text-orange" },
    { time: "11:45 AM - 12:30 PM", title: "Phonics & Story Immersion", desc: "Interactive read-alouds, rhyming games & vocabulary expansion", icon: BookOpen, color: "text-purple" },
    { time: "12:30 - 1:15 PM", title: "Healthy Lunch", desc: "Family-style nutritious dining and table manners practice", icon: Heart, color: "text-pink" },
    { time: "1:15 - 2:30 PM", title: "Rest & Recharging Quiet Time", desc: "Soothing lullabies, cozy mats, and quiet book reading", icon: Clock, color: "text-indigo" },
    { time: "2:30 - 3:15 PM", title: "Creative Arts & Atelier", desc: "Finger paints, easel art, clay modeling & sensory crafts", icon: Palette, color: "text-red" },
    { time: "3:15 - 3:30 PM", title: "Closing Reflection & Pickup", desc: "Celebration of daily wins, hugs & parent updates", icon: Smile, color: "text-pink" },
  ],
  toddler: [
    { time: "7:30 - 8:45 AM", title: "Gentle Welcome & Free Play", desc: "Cuddles, soft toys, and gentle transition into the classroom", icon: Sun, color: "text-amber" },
    { time: "8:45 - 9:15 AM", title: "Toddler Song Circle", desc: "Fingerplays, sensory shakers, and simple nursery rhymes", icon: Users, color: "text-blue" },
    { time: "9:15 - 10:00 AM", title: "Sensory Explorations", desc: "Soft blocks, tactile water tables, and texture matching", icon: Puzzle, color: "text-teal" },
    { time: "10:00 - 10:30 AM", title: "Nourishing Morning Snack", desc: "Organic fruit slices, gentle motor cup practice", icon: Leaf, color: "text-green" },
    { time: "10:30 - 11:30 AM", title: "Toddler Turf Playground", desc: "Low slides, push carts, and balance grass area", icon: Sparkles, color: "text-orange" },
    { time: "11:30 AM - 12:15 PM", title: "Toddler Lunch & Story", desc: "Supported eating, warm wipes, and cozy board books", icon: BookOpen, color: "text-purple" },
    { time: "12:15 - 2:30 PM", title: "Peaceful Naptime", desc: "Soft sound machines, dimmed lights, and restful slumber", icon: Clock, color: "text-indigo" },
    { time: "2:30 - 3:30 PM", title: "Wake-up & Fine Motor Games", desc: "Diaper/potty routines, shape sorters, and cheerful goodbyes", icon: Smile, color: "text-pink" },
  ],
  extended: [
    { time: "3:30 - 4:15 PM", title: "Afternoon Snack & Movement", desc: "Energizing healthy crunch & music movement dance party", icon: Zap, color: "text-amber" },
    { time: "4:15 - 5:15 PM", title: "Enrichment Clubs & STEM", desc: "Junior science experiments, Spanish song circle, or yoga", icon: Puzzle, color: "text-teal" },
    { time: "5:15 - 5:45 PM", title: "Sunset Outdoor Games", desc: "Parachute games, bubble fun, and free cooperative play", icon: Sparkles, color: "text-orange" },
    { time: "5:45 - 6:00 PM", title: "Quiet Centers & Late Pickup", desc: "Puzzles, drawing, and parent reunion with daily report", icon: Smile, color: "text-pink" },
  ],
};

// FAQs Dataset
const faqsList = [
  {
    q: "What are your hours of operation?",
    a: "ScholarSpring Preschool is open Monday through Friday from 7:00 AM to 6:00 PM. We offer flexible core preschool hours (8:30 AM – 3:30 PM) as well as early bird (from 7:00 AM) and extended after-care (until 6:00 PM).",
  },
  {
    q: "Do you offer part-time programs?",
    a: "Yes! We offer flexible 2-day (Tues/Thurs), 3-day (Mon/Wed/Fri), and full-time 5-day schedules to suit every family's work and home routines.",
  },
  {
    q: "What is your teacher-to-child ratio?",
    a: "We maintain industry-leading low ratios: 1:4 for Toddlers, 1:6 for Preschool, and 1:8 for Pre-K, ensuring every child receives individualized love, care, and developmental attention.",
  },
  {
    q: "How do you handle illness, sanitation, and campus security?",
    a: "We follow rigorous pediatric healthcare standards. Classrooms and toys are sanitized throughout the day with eco-friendly products. Our campus features keypad-controlled biometric check-in, 24/7 security surveillance, and 100% CPR/First-Aid certified staff.",
  },
  {
    q: "Are organic snacks and meals included in tuition?",
    a: "Yes! All organic morning and afternoon snacks, pure filtered water, and milk are included. We accommodate all nut-free, dairy-free, vegetarian, and allergy requirements with meticulous care.",
  },
  {
    q: "Is tuition assistance or sibling discount available?",
    a: "Yes, ScholarSpring offers a 10% sibling discount on the second child, need-based tuition assistance, and actively accepts state childcare subsidy vouchers.",
  },
];

export function ScholarSpring() {
  // Navigation & Scroll
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#top");

  // Modal States
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [isEnrollOpen, setIsEnrollOpen] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState<any | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Interactive Spaces Tab State
  const [activeSpaceIndex, setActiveSpaceIndex] = useState(0);

  // Interactive Schedule Track State
  const [activeScheduleTrack, setActiveScheduleTrack] = useState<"preschool" | "toddler" | "extended">("preschool");

  // Interactive Tuition Calculator State
  const [calcTier, setCalcTier] = useState<"preschool" | "toddler" | "prek">("preschool");
  const [calcDays, setCalcDays] = useState<2 | 3 | 5>(5);
  const [calcHours, setCalcHours] = useState<"core" | "extended">("core");

  // Form State
  const [tourForm, setTourForm] = useState({
    parentName: "",
    email: "",
    phone: "",
    childName: "",
    childAge: "Preschool (3 – 4 Years)",
    tourDate: "Tomorrow Morning (9:30 AM)",
    notes: "",
  });

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Calculate Tuition
  const calculateTuition = () => {
    const baseRates: Record<string, Record<number, { core: number; extended: number }>> = {
      toddler: {
        2: { core: 780, extended: 980 },
        3: { core: 1050, extended: 1280 },
        5: { core: 1420, extended: 1690 },
      },
      preschool: {
        2: { core: 720, extended: 910 },
        3: { core: 960, extended: 1180 },
        5: { core: 1290, extended: 1550 },
      },
      prek: {
        2: { core: 720, extended: 910 },
        3: { core: 920, extended: 1140 },
        5: { core: 1250, extended: 1490 },
      },
    };

    return baseRates[calcTier][calcDays][calcHours];
  };

  // Scrollspy & sticky listener
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);

      const sections = ["top", "about", "campus", "programs", "curriculum", "tuition", "teachers", "schedule", "enrollment", "faq"];
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const secId = sections[i];
        const el = document.getElementById(secId);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveNav(`#${secId}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modal key & scroll locks
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mobileMenuOpen) setMobileMenuOpen(false);
        if (isTourOpen) setIsTourOpen(false);
        if (isEnrollOpen) setIsEnrollOpen(false);
        if (selectedProgram) setSelectedProgram(null);
      }
    };

    if (mobileMenuOpen || isTourOpen || isEnrollOpen || selectedProgram) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, isTourOpen, isEnrollOpen, selectedProgram]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveNav(href);
    setMobileMenuOpen(false);

    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 76;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsTourOpen(false);
      setIsEnrollOpen(false);
    }, 2800);
  };

  return (
    <main className="ss-site" id="top" tabIndex={-1}>
      {/* Sticky Header Navbar */}
      <header className={`ss-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="ss-wrap ss-nav-inner">
          {/* Logo */}
          <a
            href="#top"
            className="ss-brand"
            onClick={(e) => handleNavClick(e, "#top")}
            aria-label="ScholarSpring Preschool Home"
          >
            <ScholarFlowerLogo size={36} />
            <div className="ss-brand-text">
              <span className="ss-brand-title">ScholarSpring</span>
              <span className="ss-brand-sub">Preschool & Nursery</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="ss-nav-links">
            <a href="#about" className={`ss-nav-link ${activeNav === "#about" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#about")}>
              About
            </a>
            <a href="#campus" className={`ss-nav-link ${activeNav === "#campus" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#campus")}>
              Campus
            </a>
            <a href="#programs" className={`ss-nav-link ${activeNav === "#programs" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#programs")}>
              Programs
            </a>
            <a href="#curriculum" className={`ss-nav-link ${activeNav === "#curriculum" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#curriculum")}>
              Curriculum
            </a>
            <a href="#tuition" className={`ss-nav-link ${activeNav === "#tuition" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#tuition")}>
              Tuition
            </a>
            <a href="#teachers" className={`ss-nav-link ${activeNav === "#teachers" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#teachers")}>
              Teachers
            </a>
            <a href="#schedule" className={`ss-nav-link ${activeNav === "#schedule" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#schedule")}>
              Schedule
            </a>
            <a href="#faq" className={`ss-nav-link ${activeNav === "#faq" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#faq")}>
              FAQ
            </a>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="ss-nav-actions">
            <a href="tel:5551234567" className="ss-nav-phone-link" aria-label="Call Preschool">
              <Phone size={15} />
              <span>(555) 123-4567</span>
            </a>

            <button
              onClick={() => setIsTourOpen(true)}
              className="ss-btn-coral ss-nav-tour-btn"
            >
              <CalendarDays size={16} />
              <span>Book a Tour</span>
            </button>

            <button
              className={`ss-mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Off-Canvas Mobile Drawer */}
      <div
        className={`ss-mobile-overlay ${mobileMenuOpen ? "visible" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`ss-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="ss-drawer-header">
          <div className="ss-brand">
            <ScholarFlowerLogo size={30} />
            <div className="ss-brand-text">
              <span className="ss-brand-title">ScholarSpring</span>
              <span className="ss-brand-sub">Preschool</span>
            </div>
          </div>
          <button
            className="ss-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="ss-drawer-body">
          <div className="ss-drawer-links">
            {[
              { name: "About Our Preschool", href: "#about" },
              { name: "Peek Inside Campus", href: "#campus" },
              { name: "Programs for Every Age", href: "#programs" },
              { name: "Learning Roadmap (6 Pillars)", href: "#curriculum" },
              { name: "Tuition Estimator", href: "#tuition" },
              { name: "Meet Our Educators", href: "#teachers" },
              { name: "Daily Routines", href: "#schedule" },
              { name: "Enrollment Steps", href: "#enrollment" },
              { name: "Parent FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="ss-drawer-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} />
              </a>
            ))}
          </div>

          <div className="ss-drawer-footer">
            <a href="tel:5551234567" className="ss-drawer-phone-btn">
              <Phone size={16} />
              <span>Call Us: (555) 123-4567</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsTourOpen(true);
              }}
              className="ss-btn-coral full-w"
            >
              <CalendarDays size={16} />
              <span>Schedule a Campus Tour</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="ss-hero-section">
        {/* Soft Background Doodles */}
        <div className="ss-doodle doodle-sun">☀️</div>
        <div className="ss-doodle doodle-cloud">☁️</div>
        <div className="ss-doodle doodle-butterfly">🦋</div>
        <div className="ss-doodle doodle-star">✨</div>

        <div className="ss-wrap ss-hero-grid">
          {/* Left Copy */}
          <div className="ss-hero-copy">
            <div className="ss-hero-tag-pill">
              <Sparkles size={15} className="icon-gold" />
              <span>Now Enrolling for Fall 2026 • Limited Spots Available</span>
            </div>

            <h1 className="ss-hero-title">
              <span className="ss-title-coral">Joyful Learning.</span>
              <br />
              <span className="ss-title-navy">Confident First Steps.</span>
            </h1>

            <p className="ss-hero-desc">
              A warm, loving preschool sanctuary where curiosity flourishes, lifelong friendships bloom, and every little learner is prepared for a brilliant future.
            </p>

            <div className="ss-hero-btn-row">
              <button
                onClick={() => setIsTourOpen(true)}
                className="ss-btn-coral ss-btn-hero"
              >
                <CalendarDays size={18} />
                <span>Book a Campus Tour</span>
              </button>
              <button
                onClick={() => setIsEnrollOpen(true)}
                className="ss-btn-mint ss-btn-hero"
              >
                <FileText size={18} />
                <span>Start Enrollment</span>
              </button>
            </div>

            {/* Quick Trust Highlights */}
            <div className="ss-hero-trust-row">
              <div className="ss-trust-item">
                <CheckCircle2 size={16} className="text-green" />
                <span>Licensed Facility #098421</span>
              </div>
              <div className="ss-trust-item">
                <CheckCircle2 size={16} className="text-green" />
                <span>Low 1:4 & 1:6 Ratios</span>
              </div>
              <div className="ss-trust-item">
                <CheckCircle2 size={16} className="text-green" />
                <span>100% CPR Certified</span>
              </div>
            </div>
          </div>

          {/* Right Visual Collage with Real Photos & Badges */}
          <div className="ss-hero-collage">
            <div className="ss-collage-main-img-card">
              <img
                src={heroChildImg}
                alt="ScholarSpring Preschool Child playing with colorful blocks"
                className="ss-main-img"
              />
              <div className="ss-main-img-overlay-caption">
                <span>Play-Based Exploration Everyday</span>
              </div>
            </div>

            <div className="ss-collage-side-stack">
              <div className="ss-side-img-card top">
                <img src={heroClassImg} alt="Teacher reading storybook to attentive preschool children" />
                <span className="ss-side-tag">Interactive Storytime</span>
              </div>
              <div className="ss-side-img-card bottom">
                <img src={heroKidsImg} alt="Diverse preschool children laughing together doing puzzles" />
                <span className="ss-side-tag">Social Friendships</span>
              </div>
            </div>

            {/* Floating Trust Pills */}
            <div className="ss-floating-badge badge-top">
              <div className="ss-badge-icon icon-blue"><Puzzle size={18} /></div>
              <div>
                <strong>Small Class Sizes</strong>
                <small>Max 12 children per group</small>
              </div>
            </div>

            <div className="ss-floating-badge badge-mid">
              <div className="ss-badge-icon icon-pink"><Heart size={18} /></div>
              <div>
                <strong>Caring Educators</strong>
                <small>Warm, certified teachers</small>
              </div>
            </div>

            <div className="ss-floating-badge badge-bot">
              <div className="ss-badge-icon icon-green"><Phone size={18} /></div>
              <div>
                <strong>Daily Family App</strong>
                <small>Real-time photos & milestones</small>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-Friendly Trust Pill Strip (clean on tablet & phone) */}
        <div className="ss-wrap ss-mobile-trust-strip">
          <div className="ss-mobile-chip">
            <Puzzle size={16} className="text-sky" />
            <span>Small Class Sizes (Max 12)</span>
          </div>
          <div className="ss-mobile-chip">
            <Heart size={16} className="text-coral" />
            <span>Loving Certified Teachers</span>
          </div>
          <div className="ss-mobile-chip">
            <Phone size={16} className="text-mint" />
            <span>Daily Photo App Updates</span>
          </div>
        </div>
      </section>

      {/* Key Stats Ribbon */}
      <section className="ss-stats-section">
        <div className="ss-wrap ss-stats-grid">
          <div className="ss-stat-pill">
            <div className="ss-stat-icon-wrap icon-pink"><Heart size={20} /></div>
            <div>
              <strong>12+</strong>
              <span>Years Serving Families</span>
            </div>
          </div>

          <div className="ss-stat-pill">
            <div className="ss-stat-icon-wrap icon-teal"><Users size={20} /></div>
            <div>
              <strong>1:4 - 1:6</strong>
              <span>Teacher to Child Ratio</span>
            </div>
          </div>

          <div className="ss-stat-pill">
            <div className="ss-stat-icon-wrap icon-amber"><Smile size={20} /></div>
            <div>
              <strong>98%</strong>
              <span>Parent Satisfaction</span>
            </div>
          </div>

          <div className="ss-stat-pill">
            <div className="ss-stat-icon-wrap icon-blue"><Home size={20} /></div>
            <div>
              <strong>6</strong>
              <span>Bright Classrooms</span>
            </div>
          </div>

          <div className="ss-stat-pill">
            <div className="ss-stat-icon-wrap icon-gold"><Star size={20} /></div>
            <div>
              <strong>96%</strong>
              <span>Kindergarten Readiness</span>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditation & Safety Bar */}
      <section className="ss-accreditation-bar">
        <div className="ss-wrap ss-accreditation-inner">
          <div className="ss-acc-badge">
            <ShieldCheck size={20} className="text-mint" />
            <span>NAEYC Aligned Standards</span>
          </div>
          <div className="ss-acc-divider" />
          <div className="ss-acc-badge">
            <Award size={20} className="text-amber" />
            <span>State Licensed Facility #098421</span>
          </div>
          <div className="ss-acc-divider" />
          <div className="ss-acc-badge">
            <HeartHandshake size={20} className="text-coral" />
            <span>100% CPR & First-Aid Certified</span>
          </div>
          <div className="ss-acc-divider" />
          <div className="ss-acc-badge">
            <Leaf size={20} className="text-mint" />
            <span>Organic Snacks & Nut-Free Campus</span>
          </div>
        </div>
      </section>

      {/* Why Families Choose ScholarSpring */}
      <section className="ss-section" id="about">
        <div className="ss-wrap">
          <div className="ss-section-header text-center">
            <span className="ss-section-tag">Our Foundation</span>
            <h2 className="ss-section-title">
              Why Families Choose ScholarSpring <span className="title-emoji">💖</span>
            </h2>
            <p className="ss-section-desc">
              Every detail of our campus and day is crafted to provide your child with safety, joy, and individual encouragement.
            </p>
          </div>

          <div className="ss-why-grid">
            <div className="ss-why-card">
              <div className="ss-why-icon-wrap icon-green"><Leaf size={26} /></div>
              <h3>Nurturing Environment</h3>
              <p>Warm, inclusive spaces where every child feels seen, heard, and cherished from day one.</p>
            </div>

            <div className="ss-why-card">
              <div className="ss-why-icon-wrap icon-orange"><Sun size={26} /></div>
              <h3>Joyful Play-Based Learning</h3>
              <p>Hands-on discovery that turns natural curiosity into deep, lasting cognitive foundations.</p>
            </div>

            <div className="ss-why-card">
              <div className="ss-why-icon-wrap icon-blue"><Shield size={26} /></div>
              <h3>Safe & Secure Campus</h3>
              <p>Biometric check-in, secure gated playgrounds, and round-the-clock child safety protocols.</p>
            </div>

            <div className="ss-why-card">
              <div className="ss-why-icon-wrap icon-pink"><MessageSquare size={26} /></div>
              <h3>Connected Family App</h3>
              <p>Real-time photo streams, daily learning logs, meal reports, and instant teacher chat.</p>
            </div>

            <div className="ss-why-card">
              <div className="ss-why-icon-wrap icon-purple"><Users size={26} /></div>
              <h3>Passionate Educators</h3>
              <p>Degree-qualified teachers with an average 9+ years of dedicated early education tenure.</p>
            </div>

            <div className="ss-why-card">
              <div className="ss-why-icon-wrap icon-amber"><Clock size={26} /></div>
              <h3>Balanced Routines</h3>
              <p>Predictable daily rhythms that build emotional security, confidence, and self-direction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Peek Inside Our Campus (Interactive Spaces Explorer) */}
      <section className="ss-section ss-campus-section" id="campus">
        <div className="ss-wrap">
          <div className="ss-section-header text-center">
            <span className="ss-section-tag">Campus Tour Preview</span>
            <h2 className="ss-section-title">
              Peek Inside Our Joyful Classrooms <span className="title-emoji">🏫</span>
            </h2>
            <p className="ss-section-desc">
              Explore the carefully curated spaces where your child plays, discovers, and makes lifelong memories.
            </p>
          </div>

          <div className="ss-campus-explorer">
            {/* Space Tabs */}
            <div className="ss-space-tabs">
              {campusSpaces.map((space, idx) => (
                <button
                  key={space.id}
                  className={`ss-space-tab-btn ${activeSpaceIndex === idx ? "active" : ""}`}
                  onClick={() => setActiveSpaceIndex(idx)}
                >
                  <span className="ss-tab-num">0{idx + 1}</span>
                  <span className="ss-tab-title">{space.title}</span>
                </button>
              ))}
            </div>

            {/* Active Space Content */}
            <div className="ss-space-display-card">
              <div className="ss-space-media-col">
                <img
                  src={campusSpaces[activeSpaceIndex].img}
                  alt={campusSpaces[activeSpaceIndex].title}
                  className="ss-space-img"
                />
                <div className="ss-space-badge">
                  <Sparkles size={15} />
                  <span>{campusSpaces[activeSpaceIndex].tagline}</span>
                </div>
              </div>

              <div className="ss-space-info-col">
                <span className="ss-space-label">Interactive Learning Environment</span>
                <h3>{campusSpaces[activeSpaceIndex].title}</h3>
                <p>{campusSpaces[activeSpaceIndex].description}</p>

                <h4>What Children Love Here:</h4>
                <div className="ss-space-features-grid">
                  {campusSpaces[activeSpaceIndex].features.map((feat) => (
                    <div key={feat} className="ss-space-feature-pill">
                      <CheckCircle2 size={16} className="text-mint" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="ss-space-cta-row">
                  <button
                    onClick={() => setIsTourOpen(true)}
                    className="ss-btn-coral"
                  >
                    <CalendarDays size={16} />
                    <span>See It in Person on a Tour</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs for Every Stage */}
      <section className="ss-section ss-programs-section" id="programs">
        <div className="ss-wrap">
          <div className="ss-section-header text-center">
            <span className="ss-section-tag">Tailored Age Groups</span>
            <h2 className="ss-section-title">
              Programs for Every Stage <span className="title-emoji">🎒</span>
            </h2>
            <p className="ss-section-desc">
              Carefully designed curriculums that match your child's developmental milestones with love and expertise.
            </p>
          </div>

          <div className="ss-programs-grid">
            {programsList.map((prog) => (
              <div
                key={prog.id}
                className={`ss-program-card ${prog.colorClass}`}
                onClick={() => setSelectedProgram(prog)}
              >
                <div className="ss-program-img-wrap">
                  <img src={prog.img} alt={prog.title} />
                  <span className="ss-program-badge">{prog.badge}</span>
                </div>

                <div className="ss-program-body">
                  <div className="ss-program-head">
                    <h3 className="ss-program-name">{prog.title}</h3>
                    <span className="ss-program-age">{prog.age}</span>
                  </div>

                  <p className="ss-program-desc">{prog.desc}</p>

                  <div className="ss-program-highlights-mini">
                    {prog.highlights.slice(0, 2).map((h) => (
                      <div key={h} className="ss-mini-hl">
                        <Check size={14} className="text-mint" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <button className="ss-btn-learn-more" aria-label={`Learn more about ${prog.title}`}>
                    <span>View Curriculum Details</span>
                    <ChevronRight size={15} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Learning Roadmap (6 Pillars) */}
      <section className="ss-section ss-roadmap-section" id="curriculum">
        <div className="ss-wrap">
          <div className="ss-section-header text-center">
            <span className="ss-section-tag">Holistic Whole-Child Growth</span>
            <h2 className="ss-section-title">
              Our Learning Roadmap <span className="title-emoji">🌟</span>
            </h2>
            <p className="ss-section-desc">Six developmental pillars that guide every curious young mind.</p>
          </div>

          <div className="ss-roadmap-grid">
            <div className="ss-pillar-card p-blue">
              <span className="ss-pillar-num">1</span>
              <div className="ss-pillar-icon"><BookOpen size={24} /></div>
              <h4>Language & Literacy</h4>
              <p>Phonics immersion, story sharing, vocabulary expansion, and early print concepts.</p>
            </div>

            <div className="ss-pillar-card p-yellow">
              <span className="ss-pillar-num">2</span>
              <div className="ss-pillar-icon"><Sparkles size={24} /></div>
              <h4>Math Discovery</h4>
              <p>Pattern building, sorting, number sense, and geometry puzzles explored through tactile play.</p>
            </div>

            <div className="ss-pillar-card p-red">
              <span className="ss-pillar-num">3</span>
              <div className="ss-pillar-icon"><Heart size={24} /></div>
              <h4>Social-Emotional Growth</h4>
              <p>Empathy, self-regulation, cooperative play, and positive conflict resolution skills.</p>
            </div>

            <div className="ss-pillar-card p-purple">
              <span className="ss-pillar-num">4</span>
              <div className="ss-pillar-icon"><Palette size={24} /></div>
              <h4>Creativity & Expression</h4>
              <p>Open-ended art, rhythm instruments, storytelling puppet shows, and dramatic play.</p>
            </div>

            <div className="ss-pillar-card p-indigo">
              <span className="ss-pillar-num">5</span>
              <div className="ss-pillar-icon"><Zap size={24} /></div>
              <h4>Movement & Health</h4>
              <p>Gross-motor coordination, playground climbing, mindfulness yoga, and healthy hygiene habits.</p>
            </div>

            <div className="ss-pillar-card p-green">
              <span className="ss-pillar-num">6</span>
              <div className="ss-pillar-icon"><Leaf size={24} /></div>
              <h4>Nature & Science</h4>
              <p>Outdoor exploration, garden planting, weather observation, and Little Scientist experiments.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tuition & Schedule Estimator */}
      <section className="ss-section ss-tuition-section" id="tuition">
        <div className="ss-wrap">
          <div className="ss-section-header text-center">
            <span className="ss-section-tag">Transparent & Predictable</span>
            <h2 className="ss-section-title">
              Tuition & Schedule Estimator <span className="title-emoji">🧮</span>
            </h2>
            <p className="ss-section-desc">
              Choose your child's age, attendance days, and care hours to see real-time estimated monthly tuition.
            </p>
          </div>

          <div className="ss-tuition-card-box">
            <div className="ss-tuition-controls">
              {/* Step 1: Program Tier */}
              <div className="ss-calc-group">
                <label className="ss-calc-label">1. Select Age Group:</label>
                <div className="ss-calc-btn-group">
                  <button
                    className={`ss-calc-option ${calcTier === "toddler" ? "active" : ""}`}
                    onClick={() => setCalcTier("toddler")}
                  >
                    <Baby size={16} />
                    <span>Toddlers (18–36m)</span>
                  </button>
                  <button
                    className={`ss-calc-option ${calcTier === "preschool" ? "active" : ""}`}
                    onClick={() => setCalcTier("preschool")}
                  >
                    <Smile size={16} />
                    <span>Preschool (3–4y)</span>
                  </button>
                  <button
                    className={`ss-calc-option ${calcTier === "prek" ? "active" : ""}`}
                    onClick={() => setCalcTier("prek")}
                  >
                    <GraduationCap size={16} />
                    <span>Pre-K (4–5y)</span>
                  </button>
                </div>
              </div>

              {/* Step 2: Schedule Days */}
              <div className="ss-calc-group">
                <label className="ss-calc-label">2. Weekly Schedule:</label>
                <div className="ss-calc-btn-group">
                  <button
                    className={`ss-calc-option ${calcDays === 2 ? "active" : ""}`}
                    onClick={() => setCalcDays(2)}
                  >
                    2 Days (Tue / Thu)
                  </button>
                  <button
                    className={`ss-calc-option ${calcDays === 3 ? "active" : ""}`}
                    onClick={() => setCalcDays(3)}
                  >
                    3 Days (Mon / Wed / Fri)
                  </button>
                  <button
                    className={`ss-calc-option ${calcDays === 5 ? "active" : ""}`}
                    onClick={() => setCalcDays(5)}
                  >
                    5 Days (Full Week)
                  </button>
                </div>
              </div>

              {/* Step 3: Daily Hours */}
              <div className="ss-calc-group">
                <label className="ss-calc-label">3. Care Hours:</label>
                <div className="ss-calc-btn-group">
                  <button
                    className={`ss-calc-option ${calcHours === "core" ? "active" : ""}`}
                    onClick={() => setCalcHours("core")}
                  >
                    <Sun size={16} />
                    <span>Core Preschool (8:30 AM – 3:30 PM)</span>
                  </button>
                  <button
                    className={`ss-calc-option ${calcHours === "extended" ? "active" : ""}`}
                    onClick={() => setCalcHours("extended")}
                  >
                    <Clock size={16} />
                    <span>Full Extended Day (7:00 AM – 6:00 PM)</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Tuition Price Result Box */}
            <div className="ss-tuition-result-panel">
              <span className="ss-result-tag">Estimated All-Inclusive Monthly Tuition</span>
              <div className="ss-price-display">
                <span className="ss-curr">$</span>
                <span className="ss-amt">{calculateTuition().toLocaleString()}</span>
                <span className="ss-mo">/ month</span>
              </div>

              <div className="ss-tuition-included-list">
                <div className="ss-inc-item">
                  <CheckCircle2 size={16} className="text-mint" />
                  <span>All organic snacks, milk, and seasonal fruits included</span>
                </div>
                <div className="ss-inc-item">
                  <CheckCircle2 size={16} className="text-mint" />
                  <span>Daily real-time app photo updates & milestone records</span>
                </div>
                <div className="ss-inc-item">
                  <CheckCircle2 size={16} className="text-mint" />
                  <span>All art materials, books, and music supplies included</span>
                </div>
                <div className="ss-inc-item">
                  <CheckCircle2 size={16} className="text-mint" />
                  <span>10% Sibling Discount available for 2nd enrolled child</span>
                </div>
              </div>

              <button
                onClick={() => setIsTourOpen(true)}
                className="ss-btn-coral full-w ss-calc-cta"
              >
                <CalendarDays size={18} />
                <span>Schedule a Tour & Reserve Spot</span>
              </button>
              <small className="ss-calc-note">* Need-based scholarships & state childcare subsidy vouchers accepted.</small>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Amazing Teachers */}
      <section className="ss-section" id="teachers">
        <div className="ss-wrap">
          <div className="ss-section-header text-center">
            <span className="ss-section-tag">Dedicated & Compassionate</span>
            <h2 className="ss-section-title">
              Meet Our Loving Educators <span className="title-emoji">🌿</span>
            </h2>
            <p className="ss-section-desc">
              Experienced, background-checked, and CPR-certified teachers dedicated to each child's happiness.
            </p>
          </div>

          <div className="ss-teachers-grid">
            {teachersList.map((t) => (
              <div key={t.name} className="ss-teacher-card">
                <div className="ss-teacher-img-wrap">
                  <img src={t.img} alt={t.name} />
                </div>
                <div className="ss-teacher-info">
                  <h3 className="ss-teacher-name">{t.name}</h3>
                  <span className="ss-teacher-role">{t.role}</span>
                  <div className="ss-teacher-badge-row">
                    <span className="ss-teacher-exp">{t.exp}</span>
                  </div>
                  <p className="ss-teacher-creds">{t.creds}</p>
                  <p className="ss-teacher-quote">“{t.quote}”</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filterable Daily Schedule Timeline & Growing Today */}
      <section className="ss-section ss-schedule-split-section" id="schedule">
        <div className="ss-wrap ss-split-grid">
          {/* Left Column: Daily Schedule */}
          <div className="ss-schedule-col">
            <div className="ss-schedule-head-row">
              <div>
                <span className="ss-section-tag">Structured & Joyful</span>
                <h2 className="ss-col-title">
                  A Day Full of Discovery <span className="title-emoji">☁️</span>
                </h2>
              </div>
            </div>

            {/* Schedule Filter Tabs */}
            <div className="ss-schedule-filter-tabs">
              <button
                className={`ss-sched-btn ${activeScheduleTrack === "preschool" ? "active" : ""}`}
                onClick={() => setActiveScheduleTrack("preschool")}
              >
                Preschool Routine
              </button>
              <button
                className={`ss-sched-btn ${activeScheduleTrack === "toddler" ? "active" : ""}`}
                onClick={() => setActiveScheduleTrack("toddler")}
              >
                Toddler Rhythm
              </button>
              <button
                className={`ss-sched-btn ${activeScheduleTrack === "extended" ? "active" : ""}`}
                onClick={() => setActiveScheduleTrack("extended")}
              >
                Extended Day (3:30–6pm)
              </button>
            </div>

            <div className="ss-schedule-table">
              {scheduleTracks[activeScheduleTrack].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.time} className="ss-schedule-row">
                    <div className="ss-time-col">
                      <Icon size={16} className={item.color} />
                      <span>{item.time}</span>
                    </div>
                    <div className="ss-activity-col">
                      <strong>{item.title}</strong>
                      <small>{item.desc}</small>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Growing Today, Ready for Tomorrow */}
          <div className="ss-milestone-col">
            <span className="ss-section-tag">Developmental Success</span>
            <h2 className="ss-col-title">
              Growing Today, Ready for Tomorrow <span className="title-emoji">☀️</span>
            </h2>

            <div className="ss-milestone-cards-stack">
              <div className="ss-m-card">
                <div className="ss-m-icon icon-blue"><Puzzle size={22} /></div>
                <div className="ss-m-body">
                  <h4>Confident Self-Motivated Learners</h4>
                  <p>Building natural problem-solving independence and excitement for learning.</p>
                </div>
              </div>

              <div className="ss-m-card">
                <div className="ss-m-icon icon-purple"><GraduationCap size={22} /></div>
                <div className="ss-m-body">
                  <div className="ss-m-bar-head">
                    <h4>Kindergarten Academic Readiness</h4>
                    <strong>96%</strong>
                  </div>
                  <p>Phonics, early math, and social-emotional preparedness for elementary school.</p>
                  <div className="ss-m-bar-track">
                    <div className="ss-m-bar-fill" style={{ width: "96%" }} />
                  </div>
                </div>
              </div>

              <div className="ss-m-card">
                <div className="ss-m-icon icon-green"><Phone size={22} /></div>
                <div className="ss-m-body">
                  <h4>Connected Parent Community</h4>
                  <p>Real-time photo updates, direct messaging with teachers, and milestone logs.</p>
                </div>
              </div>

              <div className="ss-m-card">
                <div className="ss-m-icon icon-teal"><Leaf size={22} /></div>
                <div className="ss-m-body">
                  <h4>Milestones That Matter</h4>
                  <p>Quarterly developmental assessments across speech, motor, social, and cognitive skills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Enrollment Journey (6 Step Flow) */}
      <section className="ss-section ss-enrollment-section" id="enrollment">
        <div className="ss-wrap">
          <div className="ss-section-header text-center">
            <span className="ss-section-tag">Simple & Transparent</span>
            <h2 className="ss-section-title">Your 6-Step Enrollment Journey</h2>
            <p className="ss-section-desc">We make onboarding warm, seamless, and joyful for your entire family.</p>
          </div>

          <div className="ss-enroll-steps-row">
            <div className="ss-enroll-step">
              <div className="ss-step-bubble icon-green"><Phone size={20} /></div>
              <span className="ss-step-badge">Step 1</span>
              <h4>Inquire Online</h4>
              <p>Reach out through our quick online form or give us a phone call.</p>
            </div>

            <div className="ss-step-line" />

            <div className="ss-enroll-step">
              <div className="ss-step-bubble icon-orange"><Calendar size={20} /></div>
              <span className="ss-step-badge">Step 2</span>
              <h4>Book a Tour</h4>
              <p>Visit our campus, tour bright classrooms, and meet our teachers.</p>
            </div>

            <div className="ss-step-line" />

            <div className="ss-enroll-step">
              <div className="ss-step-bubble icon-pink"><Users size={20} /></div>
              <span className="ss-step-badge">Step 3</span>
              <h4>Family Chat</h4>
              <p>We learn about your child's routines, personality, and milestones.</p>
            </div>

            <div className="ss-step-line" />

            <div className="ss-enroll-step">
              <div className="ss-step-bubble icon-blue"><FileText size={20} /></div>
              <span className="ss-step-badge">Step 4</span>
              <h4>Submit Application</h4>
              <p>Complete simple digital enrollment forms and immunization records.</p>
            </div>

            <div className="ss-step-line" />

            <div className="ss-enroll-step">
              <div className="ss-step-bubble icon-purple"><Heart size={20} /></div>
              <span className="ss-step-badge">Step 5</span>
              <h4>Orientation</h4>
              <p>Short playdate visit to help your child feel comfortable and at home.</p>
            </div>

            <div className="ss-step-line" />

            <div className="ss-enroll-step">
              <div className="ss-step-bubble icon-gold"><Star size={20} /></div>
              <span className="ss-step-badge">Step 6</span>
              <h4>First Day of School!</h4>
              <p>Welcome smiles, cubby setup, and wonderful new adventures begin.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loved by Our ScholarSpring Families */}
      <section className="ss-section ss-reviews-section">
        <div className="ss-wrap">
          <div className="ss-section-header text-center">
            <span className="ss-section-tag">Parent Testimonials</span>
            <h2 className="ss-section-title">
              Loved by Our ScholarSpring Families <span className="title-emoji">💖</span>
            </h2>
            <div className="ss-google-badge">
              <div className="ss-fam-stars">★★★★★</div>
              <span><strong>4.9 out of 5.0</strong> based on 80+ verified Google Reviews</span>
            </div>
          </div>

          <div className="ss-family-reviews-grid">
            <div className="ss-review-card">
              <div className="ss-review-top">
                <img src={familyMartinezImg} alt="The Martinez Family" className="ss-fam-img" />
                <div>
                  <strong className="ss-fam-name">The Martinez Family</strong>
                  <span className="ss-fam-tag">Parents of Maya (Preschool)</span>
                  <div className="ss-fam-stars">★★★★★</div>
                </div>
              </div>
              <p className="ss-fam-quote">
                “ScholarSpring has been a true blessing for our family. Maya comes home beaming every day, singing new songs and excited to tell us about her science explorations!”
              </p>
            </div>

            <div className="ss-review-card">
              <div className="ss-review-top">
                <img src={familyJohnsonImg} alt="The Johnson Family" className="ss-fam-img" />
                <div>
                  <strong className="ss-fam-name">The Johnson Family</strong>
                  <span className="ss-fam-tag">Parents of Caleb (Toddler Room)</span>
                  <div className="ss-fam-stars">★★★★★</div>
                </div>
              </div>
              <p className="ss-fam-quote">
                “The teachers are simply exceptional. The daily photo updates through the app keep us connected, and the kindness and low ratios give us complete peace of mind while at work.”
              </p>
            </div>

            <div className="ss-review-card">
              <div className="ss-review-top">
                <img src={familyPatelImg} alt="The Patel Family" className="ss-fam-img" />
                <div>
                  <strong className="ss-fam-name">The Patel Family</strong>
                  <span className="ss-fam-tag">Parents of Anaya (Pre-K)</span>
                  <div className="ss-fam-stars">★★★★★</div>
                </div>
              </div>
              <p className="ss-fam-quote">
                “We adore the blend of structured phonics readiness and creative outdoor nature play. Anaya is reading early sight words and cannot wait for kindergarten next fall!”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support for Families (4 Support Cards) */}
      <section className="ss-section ss-support-section">
        <div className="ss-wrap">
          <div className="ss-section-header text-center">
            <span className="ss-section-tag">Convenience for Parents</span>
            <h2 className="ss-section-title">Support for Busy Modern Families</h2>
          </div>

          <div className="ss-support-grid">
            <div className="ss-support-card">
              <div className="ss-supp-icon icon-green"><Sparkles size={26} /></div>
              <h3>Flexible Schedules</h3>
              <p>2-day, 3-day, and 5-day options tailored to your family's dynamic routine.</p>
            </div>

            <div className="ss-support-card">
              <div className="ss-supp-icon icon-amber"><Clock size={26} /></div>
              <h3>Extended Care Available</h3>
              <p>Early bird drop-off starting at 7:00 AM and after-care until 6:00 PM.</p>
            </div>

            <div className="ss-support-card">
              <div className="ss-supp-icon icon-pink"><Heart size={26} /></div>
              <h3>Nutritious Organic Snacks</h3>
              <p>Wholesome seasonal fruits, dairy, and whole grains included daily.</p>
            </div>

            <div className="ss-support-card">
              <div className="ss-supp-icon icon-blue"><Phone size={26} /></div>
              <h3>Real-Time Mobile App</h3>
              <p>Daily live updates, photos, meal logs, and direct teacher communication.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="ss-section" id="faq">
        <div className="ss-wrap">
          <div className="ss-section-header text-center">
            <span className="ss-section-tag">Got Questions?</span>
            <h2 className="ss-section-title">
              Frequently Asked Questions <span className="title-emoji">💭</span>
            </h2>
          </div>

          <div className="ss-faq-grid">
            {faqsList.map((faq, idx) => (
              <div
                key={faq.q}
                className={`ss-faq-card ${openFaq === idx ? "open" : ""}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="ss-faq-q">
                  <span>{faq.q}</span>
                  <span className="ss-faq-arrow">{openFaq === idx ? "−" : "+"}</span>
                </div>
                {openFaq === idx && (
                  <div className="ss-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Come See the ScholarSpring Difference Banner */}
      <section className="ss-banner-section">
        <div className="ss-wrap ss-banner-box">
          <div className="ss-banner-content">
            <div className="ss-banner-img-col">
              <img
                src={bannerPaintedHandsImg}
                alt="Preschooler smiling happily during creative art"
                className="ss-banner-photo"
              />
            </div>

            <div className="ss-banner-text-col">
              <h2>Come See the ScholarSpring Difference!</h2>
              <p>We cannot wait to welcome your family for a warm, guided campus tour.</p>

              <div className="ss-banner-btn-group">
                <button
                  onClick={() => setIsTourOpen(true)}
                  className="ss-btn-coral"
                >
                  <CalendarDays size={18} />
                  <span>Book a Campus Tour 📅</span>
                </button>
                <button
                  onClick={() => setIsEnrollOpen(true)}
                  className="ss-btn-mint"
                >
                  <FileText size={18} />
                  <span>Start Enrollment 📝</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ss-footer">
        <div className="ss-wrap ss-footer-grid">
          <div className="ss-footer-brand-col">
            <div className="ss-brand">
              <ScholarFlowerLogo size={34} />
              <div className="ss-brand-text">
                <span className="ss-brand-title">ScholarSpring</span>
                <span className="ss-brand-sub">Preschool & Nursery</span>
              </div>
            </div>
            <p className="ss-footer-slogan">Joyful learning with love, gentle guidance, and confident first steps.</p>
            <div className="ss-footer-socials">
              <a href="#top" aria-label="Facebook">f</a>
              <a href="#top" aria-label="Instagram">📷</a>
              <a href="#top" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div className="ss-footer-col">
            <h4>Contact & Campus</h4>
            <div className="ss-contact-item">
              <MapPin size={16} />
              <span>1154 Happy Hills Lane, Springfield, CA 90210</span>
            </div>
            <div className="ss-contact-item">
              <Phone size={16} />
              <a href="tel:5551234567">(555) 123-4567</a>
            </div>
            <div className="ss-contact-item">
              <Mail size={16} />
              <a href="mailto:hello@scholarspringpreschool.com">hello@scholarspringpreschool.com</a>
            </div>
          </div>

          <div className="ss-footer-col">
            <h4>Quick Links</h4>
            <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>About Our School</a>
            <a href="#campus" onClick={(e) => handleNavClick(e, "#campus")}>Classroom Spaces</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Programs by Age</a>
            <a href="#curriculum" onClick={(e) => handleNavClick(e, "#curriculum")}>Learning Roadmap</a>
            <a href="#tuition" onClick={(e) => handleNavClick(e, "#tuition")}>Tuition Estimator</a>
            <a href="#teachers" onClick={(e) => handleNavClick(e, "#teachers")}>Our Educators</a>
            <a href="#schedule" onClick={(e) => handleNavClick(e, "#schedule")}>Daily Schedule</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")}>Parent FAQ</a>
          </div>

          <div className="ss-footer-col">
            <h4>School Hours</h4>
            <p>Monday – Friday<br /><strong>7:00 AM – 6:00 PM</strong></p>
            <p><small>Core Day: 8:30 AM – 3:30 PM<br />Closed on major federal holidays.</small></p>
          </div>
        </div>

        <div className="ss-footer-bottom">
          <div className="ss-wrap">
            <p>© 2026 ScholarSpring Preschool. All rights reserved. State Licensed Facility #098421.</p>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky Quick Action Bar */}
      <div className="ss-mobile-bottom-bar">
        <a href="tel:5551234567" className="ss-mob-action-btn phone">
          <Phone size={16} />
          <span>Call Us</span>
        </a>
        <button onClick={() => setIsTourOpen(true)} className="ss-mob-action-btn tour">
          <CalendarDays size={16} />
          <span>Book Tour</span>
        </button>
      </div>

      {/* Program Curriculum Details Modal */}
      {selectedProgram && (
        <div
          className="ss-modal-backdrop"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="ss-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="ss-modal-close"
              onClick={() => setSelectedProgram(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="ss-modal-header">
              <span className="ss-program-badge">{selectedProgram.badge}</span>
              <h2>{selectedProgram.title} Program</h2>
              <span className="ss-program-age">{selectedProgram.age}</span>
              <p>{selectedProgram.desc}</p>
            </div>

            <div className="ss-modal-img-preview">
              <img src={selectedProgram.img} alt={selectedProgram.title} />
            </div>

            <h4>Core Daily Developmental Focus:</h4>
            <ul className="ss-modal-list">
              {selectedProgram.highlights.map((h: string) => (
                <li key={h}><Check size={16} className="text-mint" /> {h}</li>
              ))}
            </ul>

            <div className="ss-modal-btn-row">
              <button
                onClick={() => {
                  setSelectedProgram(null);
                  setIsTourOpen(true);
                }}
                className="ss-btn-coral full-w"
              >
                Schedule a Tour for {selectedProgram.title}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tour Booking / Enrollment Modal */}
      {(isTourOpen || isEnrollOpen) && (
        <div
          className="ss-modal-backdrop"
          onClick={() => {
            setIsTourOpen(false);
            setIsEnrollOpen(false);
          }}
        >
          <div
            className="ss-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="ss-modal-close"
              onClick={() => {
                setIsTourOpen(false);
                setIsEnrollOpen(false);
              }}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            {!formSubmitted ? (
              <>
                <div className="ss-modal-header">
                  <h2>{isTourOpen ? "Schedule a Campus Tour 🌸" : "Start Enrollment 🎒"}</h2>
                  <p>
                    {isTourOpen
                      ? "Come meet our loving educators, tour our bright classrooms, and see joyful learning in action."
                      : "Begin your child's ScholarSpring application in just 2 minutes."}
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="ss-modal-form">
                  <div className="ss-form-2col">
                    <div className="ss-form-group">
                      <label>Parent / Guardian Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jessica Miller"
                        value={tourForm.parentName}
                        onChange={(e) => setTourForm({ ...tourForm, parentName: e.target.value })}
                      />
                    </div>
                    <div className="ss-form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="parent@example.com"
                        value={tourForm.email}
                        onChange={(e) => setTourForm({ ...tourForm, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="ss-form-2col">
                    <div className="ss-form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={tourForm.phone}
                        onChange={(e) => setTourForm({ ...tourForm, phone: e.target.value })}
                      />
                    </div>
                    <div className="ss-form-group">
                      <label>Child's Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Liam Miller"
                        value={tourForm.childName}
                        onChange={(e) => setTourForm({ ...tourForm, childName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="ss-form-2col">
                    <div className="ss-form-group">
                      <label>Target Age Group</label>
                      <select
                        value={tourForm.childAge}
                        onChange={(e) => setTourForm({ ...tourForm, childAge: e.target.value })}
                      >
                        <option value="Toddlers (18 – 36 Months)">Toddlers (18 – 36 Months)</option>
                        <option value="Preschool (3 – 4 Years)">Preschool (3 – 4 Years)</option>
                        <option value="Pre-K (4 – 5 Years)">Pre-K (4 – 5 Years)</option>
                        <option value="Enrichment (Ages 2 – 5)">Enrichment Track (Ages 2 – 5)</option>
                      </select>
                    </div>
                    <div className="ss-form-group">
                      <label>Preferred Tour Time</label>
                      <select
                        value={tourForm.tourDate}
                        onChange={(e) => setTourForm({ ...tourForm, tourDate: e.target.value })}
                      >
                        <option value="Tomorrow Morning (9:30 AM)">Tomorrow Morning (9:30 AM)</option>
                        <option value="Tomorrow Afternoon (2:30 PM)">Tomorrow Afternoon (2:30 PM)</option>
                        <option value="This Thursday (10:00 AM)">This Thursday (10:00 AM)</option>
                        <option value="This Saturday (11:00 AM)">This Saturday (11:00 AM)</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="ss-btn-coral full-w">
                    <CalendarDays size={18} />
                    <span>{isTourOpen ? "Confirm Campus Tour Visit" : "Submit Enrollment Application"}</span>
                  </button>

                  <div className="ss-modal-security">
                    <Lock size={13} />
                    <span>We respect your family's privacy. 100% confidential.</span>
                  </div>
                </form>
              </>
            ) : (
              <div className="ss-modal-success">
                <Smile size={56} className="text-coral" />
                <h3>We Can't Wait to Meet You!</h3>
                <p>
                  Your visit has been scheduled. We have sent your family welcome pack and parking directions to <strong>{tourForm.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setIsTourOpen(false);
                    setIsEnrollOpen(false);
                  }}
                  className="ss-btn-coral full-w"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default ScholarSpring;
