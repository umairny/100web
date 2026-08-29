import React, { useState, useEffect } from "react";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Building,
  Calendar,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Clock3,
  Cog,
  Compass,
  FileCheck2,
  FileText,
  Flame,
  Globe,
  GraduationCap,
  Hammer,
  HardHat,
  Headphones,
  HeartHandshake,
  HelpCircle,
  Laptop,
  Layers,
  LineChart,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Percent,
  Phone,
  PieChart,
  Play,
  RotateCcw,
  Search,
  Send,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Truck,
  UserCheck,
  Users,
  Video,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import "./ProTrackTrades.css";

// Photo Assets
import heroWelderImg from "../../assets/optimized/education/protrack/hero-welder.jpg";
import bannerWorkshopImg from "../../assets/optimized/education/protrack/banner-workshop.jpg";
import instructorLuisImg from "../../assets/optimized/education/protrack/instructor-luis.jpg";
import instructorJessicaImg from "../../assets/optimized/education/protrack/instructor-jessica.jpg";
import instructorDavidImg from "../../assets/optimized/education/protrack/instructor-david.jpg";
import instructorSarahImg from "../../assets/optimized/education/protrack/instructor-sarah.jpg";
import studentCarlosImg from "../../assets/optimized/education/protrack/student-carlos.jpg";
import studentJasmineImg from "../../assets/optimized/education/protrack/student-jasmine.jpg";
import studentBrandonImg from "../../assets/optimized/education/protrack/student-brandon.jpg";

// 6 Distinct Trade Program Images
import progElectricalImg from "../../assets/optimized/education/protrack/prog-electrical.jpg";
import progHvacImg from "../../assets/optimized/education/protrack/prog-hvac.webp";
import progWeldingImg from "../../assets/optimized/education/protrack/prog-welding.webp";
import progPlumbingImg from "../../assets/optimized/education/protrack/prog-plumbing.webp";
import progConstructionImg from "../../assets/optimized/education/protrack/prog-construction.webp";
import progIndustrialImg from "../../assets/optimized/education/protrack/prog-industrial.webp";

// ProTrack Hexagon Logo Icon
function ProTrackLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <path
        d="M18 2L32 10.08V25.92L18 34L4 25.92V10.08L18 2Z"
        fill="#f59e0b"
        stroke="#fbbf24"
        strokeWidth="1.5"
      />
      <path
        d="M18 8L27 13.2V22.8L18 28L9 22.8V13.2L18 8Z"
        fill="#0a0f1d"
      />
      <path
        d="M14 18H22M18 14V22"
        stroke="#f59e0b"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Programs Dataset
const tradePrograms = [
  {
    id: "electrical",
    title: "ELECTRICAL TECHNICIAN",
    category: "Electrical Systems",
    desc: "Master residential, commercial wiring, electrical schematics, and OSHA codes.",
    duration: "6 Months",
    level: "Beginner",
    nextStart: "Jun 2, 2025",
    img: progElectricalImg,
    certifications: ["OSHA 10-Hour", "NCCER Electrical Level 1 & 2", "Arc Flash Safety"],
    startingWage: "$28 - $36 / hr",
  },
  {
    id: "hvac",
    title: "HVAC SYSTEMS",
    category: "Heating & Cooling",
    desc: "Diagnose, service, and install modern refrigeration, heat pumps, and airflow systems.",
    duration: "8 Months",
    level: "Beginner",
    nextStart: "Jun 2, 2025",
    img: progHvacImg,
    certifications: ["EPA Universal 608", "NATE Ready-to-Work", "R-410A Safety"],
    startingWage: "$30 - $38 / hr",
  },
  {
    id: "welding",
    title: "WELDING & FABRICATION",
    category: "Structural & Pipe",
    desc: "MIG, TIG, Stick, and Flux-Core welding with blueprint fabrication and metallurgy.",
    duration: "6 Months",
    level: "All Levels",
    nextStart: "Jun 2, 2025",
    img: progWeldingImg,
    certifications: ["AWS D1.1 Structural Steel", "AWS D1.2 Aluminum", "ASME Section IX"],
    startingWage: "$29 - $42 / hr",
  },
  {
    id: "plumbing",
    title: "PLUMBING FUNDAMENTALS",
    category: "Piping & Sanitation",
    desc: "Commercial piping, drainage systems, water heaters, and fixture rough-ins.",
    duration: "6 Months",
    level: "Beginner",
    nextStart: "Jun 16, 2025",
    img: progPlumbingImg,
    certifications: ["NCCER Plumbing Level 1", "Backflow Prevention", "OSHA 10"],
    startingWage: "$27 - $35 / hr",
  },
  {
    id: "construction",
    title: "CONSTRUCTION MANAGEMENT",
    category: "Site Operations",
    desc: "Project scheduling, cost estimation, blueprint reading, and subcontractor oversight.",
    duration: "8 Months",
    level: "Intermediate",
    nextStart: "Jun 16, 2025",
    img: progConstructionImg,
    certifications: ["OSHA 30-Hour Construction", "Procore Certified", "LEED Associate"],
    startingWage: "$34 - $45 / hr",
  },
  {
    id: "industrial",
    title: "INDUSTRIAL MAINTENANCE",
    category: "Hydraulics & Motors",
    desc: "Maintain robotic arms, conveyor systems, PLCs, motors, and hydraulic pumps.",
    duration: "8 Months",
    level: "All Levels",
    nextStart: "Jun 9, 2025",
    img: progIndustrialImg,
    certifications: ["SMRP Certified Maintenance", "Allen-Bradley PLC", "NFPA 70E"],
    startingWage: "$32 - $44 / hr",
  },
];

// Instructors Dataset
const instructorsData = [
  {
    name: "Luis Rodriguez",
    role: "Lead Welding Instructor",
    exp: "18+ YEARS EXP.",
    specialty: "SMAW, GTAW, GMAW, Pipe Welding",
    img: instructorLuisImg,
    badges: ["AWS Certified", "NCCER Master"],
  },
  {
    name: "Jessica Parker",
    role: "Electrical Lead Instructor",
    exp: "14+ YEARS EXP.",
    specialty: "Commercial Systems, PLC, Controls",
    img: instructorJessicaImg,
    badges: ["IBEW Trained", "OSHA 500 Certified"],
  },
  {
    name: "David Thompson",
    role: "HVAC Senior Instructor",
    exp: "16+ YEARS EXP.",
    specialty: "HVAC Design, Refrigeration Systems",
    img: instructorDavidImg,
    badges: ["EPA Universal", "NATE Certified"],
  },
  {
    name: "Sarah Johnson",
    role: "Construction Mgmt Instructor",
    exp: "12+ YEARS EXP.",
    specialty: "Project Mgmt, Estimating, Safety",
    img: instructorSarahImg,
    badges: ["PMP Certified", "OSHA Authorized Trainer"],
  },
];

// Weekly Schedule Dataset
const scheduleTableData = [
  {
    time: "5:00 PM - 5:30 PM",
    mon: "Check-In & Safety Brief",
    tue: "Check-In & Safety Brief",
    wed: "Check-In & Safety Brief",
    thu: "Check-In & Safety Brief",
    fri: "Check-In & Safety Brief",
  },
  {
    time: "5:30 PM - 7:30 PM",
    mon: "Electrical Lab",
    tue: "HVAC Systems Lab",
    wed: "Welding & MIG Lab",
    thu: "Plumbing Rig Lab",
    fri: "Industrial Maintenance",
  },
  {
    time: "7:30 PM - 7:45 PM",
    mon: "Break",
    tue: "Break",
    wed: "Break",
    thu: "Break",
    fri: "Break",
  },
  {
    time: "7:45 PM - 9:00 PM",
    mon: "Blueprint & Wiring",
    tue: "Controls & Circuits",
    wed: "Fabrication Practice",
    thu: "Piping & Valves",
    fri: "Preventive Maintenance",
  },
  {
    time: "9:00 PM - 9:45 PM",
    mon: "Wrap Up & Tool Clean",
    tue: "Wrap Up & Tool Clean",
    wed: "Wrap Up & Tool Clean",
    thu: "Wrap Up & Tool Clean",
    fri: "Wrap Up & Tool Clean",
  },
];

// FAQs Dataset
const tradeFaqs = [
  {
    q: "Do I need prior trade experience?",
    a: "No prior experience is necessary. Our foundation courses start from basic tool safety, terminology, and hands-on shop fundamentals before progressing into advanced diagnostics and certifications.",
  },
  {
    q: "Are your trade programs accredited?",
    a: "Yes. ProTrack Trades is fully accredited by the state board of higher education and aligned with industry-standard credentials including NCCER, AWS, EPA, and OSHA.",
  },
  {
    q: "What certifications will I earn?",
    a: "Depending on your trade track, you will graduate with industry-recognized credentials such as OSHA-10 / OSHA-30, AWS D1.1 Structural Welding, EPA Universal 608, and NCCER Level 1 & 2 Certifications.",
  },
  {
    q: "What if I miss an evening lab session?",
    a: "We offer dedicated open-shop makeup hours every Saturday from 8:00 AM to 4:00 PM with master instructors on deck so you never fall behind on mandatory lab hours.",
  },
  {
    q: "Do you offer financial aid and payment plans?",
    a: "Yes! We provide zero-interest monthly installment plans, need-based scholarships, employer tuition assistance sponsorship, and we are GI Bill® Approved for military veterans.",
  },
  {
    q: "What job placement support do you offer?",
    a: "Our career services team pairs you with our 150+ employer network for direct apprenticeship interviews, resume workshops, OSHA card verification, and 100% lifetime job placement assistance.",
  },
];

export function ProTrackTrades() {
  // Navigation & Scroll
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#programs");

  // Filter Tabs & Modals
  const [scheduleShift, setScheduleShift] = useState<"day" | "evening" | "weekend">("evening");
  const [selectedProgram, setSelectedProgram] = useState<any | null>(null);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Application Form State
  const [appForm, setAppForm] = useState({
    name: "",
    email: "",
    phone: "",
    trade: "Electrical Technician",
    shift: "Evening Schedule (5:00 PM – 9:45 PM)",
    experience: "None / Complete Beginner",
  });

  // Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Scrollspy & sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["top", "programs", "curriculum", "schedule", "instructors", "outcomes", "tuition", "faq"];
      const scrollPosition = window.scrollY + 100;

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
        if (isApplyOpen) setIsApplyOpen(false);
        if (isTourOpen) setIsTourOpen(false);
        if (selectedProgram) setSelectedProgram(null);
      }
    };

    if (mobileMenuOpen || isApplyOpen || isTourOpen || selectedProgram) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, isApplyOpen, isTourOpen, selectedProgram]);

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
      setIsApplyOpen(false);
      setIsTourOpen(false);
    }, 2800);
  };

  return (
    <main className="pt-site" id="top" tabIndex={-1}>
      {/* Sticky Header Navbar */}
      <header className={`pt-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="pt-wrap pt-nav-inner">
          {/* Logo */}
          <a
            href="#top"
            className="pt-brand"
            onClick={(e) => handleNavClick(e, "#top")}
            aria-label="ProTrack Trades Home"
          >
            <ProTrackLogo size={34} />
            <div className="pt-brand-text">
              <span className="pt-brand-title">PROTRACK</span>
              <span className="pt-brand-sub">TRADES</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="pt-nav-links">
            <a href="#programs" className={`pt-nav-link ${activeNav === "#programs" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#programs")}>
              Programs
            </a>
            <a href="#curriculum" className={`pt-nav-link ${activeNav === "#curriculum" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#curriculum")}>
              Training Paths
            </a>
            <a href="#instructors" className={`pt-nav-link ${activeNav === "#instructors" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#instructors")}>
              Instructors
            </a>
            <a href="#schedule" className={`pt-nav-link ${activeNav === "#schedule" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#schedule")}>
              Schedule
            </a>
            <a href="#outcomes" className={`pt-nav-link ${activeNav === "#outcomes" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#outcomes")}>
              Outcomes
            </a>
            <a href="#tuition" className={`pt-nav-link ${activeNav === "#tuition" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#tuition")}>
              Tuition
            </a>
            <a href="#faq" className={`pt-nav-link ${activeNav === "#faq" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#faq")}>
              FAQ
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="pt-nav-actions">
            <button
              onClick={() => setIsApplyOpen(true)}
              className="pt-btn-gold pt-nav-cta"
            >
              <span>APPLY NOW</span>
              <ArrowRight size={15} />
            </button>

            <button
              className={`pt-mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Off-Canvas Mobile Drawer */}
      <div
        className={`pt-mobile-overlay ${mobileMenuOpen ? "visible" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`pt-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="pt-drawer-top">
          <div className="pt-brand">
            <ProTrackLogo size={28} />
            <span className="pt-brand-title">PROTRACK TRADES</span>
          </div>
          <button
            className="pt-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="pt-drawer-body">
          <div className="pt-drawer-links">
            {[
              { name: "Trade Programs", href: "#programs" },
              { name: "Learning Journey", href: "#curriculum" },
              { name: "Instructors", href: "#instructors" },
              { name: "Training Schedule", href: "#schedule" },
              { name: "Career Outcomes", href: "#outcomes" },
              { name: "Tuition & Aid", href: "#tuition" },
              { name: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="pt-drawer-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} />
              </a>
            ))}
          </div>

          <div className="pt-drawer-footer">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsApplyOpen(true);
              }}
              className="pt-btn-gold full-w"
            >
              <span>APPLY NOW</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-hero-section">
        <div className="pt-hero-bg-grid" />

        <div className="pt-wrap pt-hero-container">
          {/* Left Hero Copy */}
          <div className="pt-hero-copy">
            <h1 className="pt-hero-title">
              BUILD A <br />
              <span className="text-gold">SKILLED TRADE</span> <br />
              CAREER WITH <br />
              CONFIDENCE.
            </h1>

            <p className="pt-hero-desc">
              Hands-on training. Industry certifications. Small cohorts. Real outcomes. We build the skills. You build the future.
            </p>

            <div className="pt-hero-buttons">
              <a
                href="#programs"
                onClick={(e) => handleNavClick(e, "#programs")}
                className="pt-btn-gold pt-btn-hero"
              >
                <span>EXPLORE PROGRAMS</span>
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => setIsTourOpen(true)}
                className="pt-btn-dark pt-btn-hero"
              >
                <span>BOOK A CAMPUS TOUR</span>
              </button>
            </div>

            <div className="pt-hero-feature-chips">
              <div className="pt-chip"><Wrench size={15} className="text-gold" /> <span>Hands-On Labs</span></div>
              <div className="pt-chip"><Award size={15} className="text-gold" /> <span>Industry-Certified</span></div>
              <div className="pt-chip"><Users size={15} className="text-gold" /> <span>Small Class Sizes</span></div>
              <div className="pt-chip"><Briefcase size={15} className="text-gold" /> <span>Job-Ready Outcomes</span></div>
            </div>
          </div>

          {/* Right Hero Interactive Widgets + Real Apprentice Welder */}
          <div className="pt-hero-visual-col">
            <div className="pt-hero-photo-wrap">
              <img
                src={heroWelderImg}
                alt="Apprentice in welding safety gear working in trade workshop"
                className="pt-hero-welder-img"
              />
              <div className="pt-hero-overlay-gradient" />
            </div>

            {/* Dashboard Widgets Floating Layer */}
            <div className="pt-hero-widgets-grid">
              {/* Card 1: Your Progress */}
              <div className="pt-card pt-card-progress">
                <small className="pt-card-label">YOUR PROGRESS</small>
                <div className="pt-dial-row">
                  <div className="pt-progress-dial">
                    <strong>72%</strong>
                    <small>Overall Progress</small>
                  </div>
                  <div className="pt-checklist-mini">
                    <div><Check size={12} className="text-gold" /> Foundations</div>
                    <div><Check size={12} className="text-gold" /> Lab Practice</div>
                    <div><Check size={12} className="text-gold" /> Field Skills</div>
                    <div><Check size={12} className="text-gold" /> Cert Prep</div>
                    <div><Check size={12} className="text-gold" /> Capstone</div>
                  </div>
                </div>
              </div>

              {/* Card 2: Instructor Feedback */}
              <div className="pt-card pt-card-feedback">
                <small className="pt-card-label">INSTRUCTOR FEEDBACK</small>
                <div className="pt-feed-author">
                  <img src={instructorLuisImg} alt="Mike R." />
                  <p>“Great work on your welds. Keep focusing on consistency and technique.”</p>
                </div>
                <div className="pt-stars-row">
                  <span className="text-gold">★★★★★</span>
                  <small>— Mike R.</small>
                </div>
              </div>

              {/* Card 3: Upcoming Lab */}
              <div className="pt-card pt-card-upcoming">
                <small className="pt-card-label">UPCOMING LAB</small>
                <div className="pt-lab-info">
                  <Calendar size={18} className="text-gold" />
                  <div>
                    <strong>Welding Lab</strong>
                    <span>MIG Fabrication</span>
                    <small>May 15, 2025 • 1:00 PM - 4:30 PM</small>
                  </div>
                </div>
                <button
                  onClick={() => setIsTourOpen(true)}
                  className="pt-btn-mini"
                >
                  VIEW SCHEDULE
                </button>
              </div>

              {/* Card 4: Certifications */}
              <div className="pt-card pt-card-certs">
                <div className="pt-certs-head">
                  <small className="pt-card-label">CERTIFICATIONS</small>
                  <span className="pt-cert-count">3 / 5 Completed</span>
                </div>
                <div className="pt-certs-list">
                  <div><Check size={12} className="text-green" /> OSHA-10</div>
                  <div><Check size={12} className="text-green" /> NCCER Core</div>
                  <div><Check size={12} className="text-green" /> CPR/First Aid</div>
                  <div><span className="pt-dot-gray" /> AWS D1.1</div>
                  <div><span className="pt-dot-gray" /> EPA 608</div>
                </div>
              </div>

              {/* Card 5: Next Cohort */}
              <div className="pt-card pt-card-cohort">
                <div className="pt-cohort-head">
                  <CalendarDays size={18} className="text-gold" />
                  <div>
                    <small>NEXT COHORT</small>
                    <strong>June 2, 2025</strong>
                    <span>Day & Evening Options</span>
                  </div>
                </div>
                <span className="pt-seats-badge">3 SEATS LEFT</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metric Stats Bar (6 Metrics) */}
      <section className="pt-stats-bar">
        <div className="pt-wrap pt-stats-grid">
          <div className="pt-stat-item">
            <strong>6,500+</strong>
            <span>GRADUATES TRAINED</span>
          </div>

          <div className="pt-stat-item">
            <strong>92%</strong>
            <span>JOB PLACEMENT RATE</span>
          </div>

          <div className="pt-stat-item">
            <strong>88%</strong>
            <span>COMPLETION RATE</span>
          </div>

          <div className="pt-stat-item">
            <strong>150+</strong>
            <span>INDUSTRY PARTNERS</span>
          </div>

          <div className="pt-stat-item">
            <strong>12,000+</strong>
            <span>CERTIFICATIONS EARNED</span>
          </div>

          <div className="pt-stat-item">
            <strong>$18K</strong>
            <span>AVERAGE SALARY GROWTH</span>
          </div>
        </div>
      </section>

      {/* Why Choose ProTrack Trades? (6 Cards Grid) */}
      <section className="pt-section pt-why-section">
        <div className="pt-wrap">
          <div className="pt-section-header text-center">
            <h2 className="pt-section-title">
              WHY CHOOSE PROTRACK <span className="text-gold">TRADES?</span>
            </h2>
          </div>

          <div className="pt-why-grid">
            <div className="pt-why-card">
              <div className="pt-why-icon-box"><Wrench size={26} /></div>
              <h3>HANDS-ON LABS</h3>
              <p>Learn by doing in our advanced training labs with expert guidance.</p>
            </div>

            <div className="pt-why-card">
              <div className="pt-why-icon-box"><Cog size={26} /></div>
              <h3>REAL EQUIPMENT</h3>
              <p>Train with the same tools and technology used in today's industry.</p>
            </div>

            <div className="pt-why-card">
              <div className="pt-why-icon-box"><Award size={26} /></div>
              <h3>INDUSTRY-CERTIFIED INSTRUCTORS</h3>
              <p>Learn from pros with years of real-world experience.</p>
            </div>

            <div className="pt-why-card">
              <div className="pt-why-icon-box"><ShieldCheck size={26} /></div>
              <h3>SAFETY-FIRST TRAINING</h3>
              <p>Safety is built into every skill, every step of the way.</p>
            </div>

            <div className="pt-why-card">
              <div className="pt-why-icon-box"><Clock size={26} /></div>
              <h3>FLEXIBLE SCHEDULES</h3>
              <p>Day, evening, and weekend options to fit your life.</p>
            </div>

            <div className="pt-why-card">
              <div className="pt-why-icon-box"><Briefcase size={26} /></div>
              <h3>CAREER SUPPORT</h3>
              <p>Resume help, job placement, and lifelong career resources.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Programs (6 Trade Cards with 6 Distinct Real Photos) */}
      <section className="pt-section pt-programs-section" id="programs">
        <div className="pt-wrap">
          <div className="pt-section-header text-center">
            <h2 className="pt-section-title">
              EXPLORE OUR <span className="text-gold">PROGRAMS</span>
            </h2>
          </div>

          <div className="pt-programs-grid">
            {tradePrograms.map((prog) => (
              <div key={prog.id} className="pt-prog-card">
                <div className="pt-prog-img-wrap">
                  <img src={prog.img} alt={prog.title} />
                  <span className="pt-prog-category-badge">{prog.category}</span>
                </div>

                <div className="pt-prog-body">
                  <h3 className="pt-prog-name">{prog.title}</h3>

                  <div className="pt-prog-meta-row">
                    <div><Clock size={14} className="text-gold" /> <span>Duration: <strong>{prog.duration}</strong></span></div>
                    <div><Target size={14} className="text-gold" /> <span>Level: <strong>{prog.level}</strong></span></div>
                  </div>

                  <div className="pt-prog-start-note">
                    <Calendar size={13} className="text-muted" />
                    <span>Next Start: <strong>{prog.nextStart}</strong></span>
                  </div>

                  <button
                    onClick={() => setSelectedProgram(prog)}
                    className="pt-btn-learn-more"
                  >
                    LEARN MORE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Learning Journey (6-Step Pipeline on Dark Background) */}
      <section className="pt-section pt-journey-section" id="curriculum">
        <div className="pt-wrap">
          <div className="pt-section-header text-center">
            <h2 className="pt-section-title">
              YOUR <span className="text-gold">LEARNING</span> JOURNEY
            </h2>
          </div>

          <div className="pt-journey-steps-row">
            <div className="pt-j-step">
              <div className="pt-j-num-circle">1</div>
              <h4>FOUNDATIONS</h4>
              <p>Build core knowledge and safety essentials.</p>
            </div>

            <div className="pt-j-line" />

            <div className="pt-j-step">
              <div className="pt-j-num-circle">2</div>
              <h4>LAB PRACTICE</h4>
              <p>Hands-on training with real equipment.</p>
            </div>

            <div className="pt-j-line" />

            <div className="pt-j-step">
              <div className="pt-j-num-circle">3</div>
              <h4>FIELD SKILLS</h4>
              <p>Apply skills in real-world scenarios.</p>
            </div>

            <div className="pt-j-line" />

            <div className="pt-j-step">
              <div className="pt-j-num-circle">4</div>
              <h4>CERTIFICATION PREP</h4>
              <p>Prepare and test for industry credentials.</p>
            </div>

            <div className="pt-j-line" />

            <div className="pt-j-step">
              <div className="pt-j-num-circle">5</div>
              <h4>CAPSTONE PROJECT</h4>
              <p>Complete a project that showcases your skills.</p>
            </div>

            <div className="pt-j-line" />

            <div className="pt-j-step">
              <div className="pt-j-num-circle">6</div>
              <h4>CAREER LAUNCH</h4>
              <p>Get hired and grow in your trade career.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Training Schedule Table */}
      <section className="pt-section pt-schedule-section" id="schedule">
        <div className="pt-wrap">
          <div className="pt-schedule-head-row">
            <h2 className="pt-section-title">WEEKLY TRAINING SCHEDULE</h2>

            <div className="pt-schedule-tab-pills">
              <button
                className={`pt-tab-pill ${scheduleShift === "day" ? "active" : ""}`}
                onClick={() => setScheduleShift("day")}
              >
                DAY SCHEDULE
              </button>
              <button
                className={`pt-tab-pill ${scheduleShift === "evening" ? "active" : ""}`}
                onClick={() => setScheduleShift("evening")}
              >
                EVENING SCHEDULE
              </button>
              <button
                className={`pt-tab-pill ${scheduleShift === "weekend" ? "active" : ""}`}
                onClick={() => setScheduleShift("weekend")}
              >
                WEEKEND LABS
              </button>
            </div>
          </div>

          <div className="pt-table-container">
            <table className="pt-sched-table">
              <thead>
                <tr>
                  <th>TIME</th>
                  <th>MONDAY</th>
                  <th>TUESDAY</th>
                  <th>WEDNESDAY</th>
                  <th>THURSDAY</th>
                  <th>FRIDAY</th>
                </tr>
              </thead>
              <tbody>
                {scheduleTableData.map((row) => (
                  <tr key={row.time}>
                    <td className="pt-td-time"><strong>{row.time}</strong></td>
                    <td>{row.mon}</td>
                    <td>{row.tue}</td>
                    <td>{row.wed}</td>
                    <td>{row.thu}</td>
                    <td>{row.fri}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-schedule-foot">
            <small>* Schedules subject to change. View full calendar for holidays and special sessions.</small>
            <a
              href="#schedule"
              className="pt-view-cal-link"
              onClick={(e) => {
                e.preventDefault();
                setIsTourOpen(true);
              }}
            >
              <span>VIEW FULL CALENDAR</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Meet Our Instructors & Our Instructor Advantage */}
      <section className="pt-section pt-instructors-section" id="instructors">
        <div className="pt-wrap">
          <div className="pt-section-header">
            <h2 className="pt-section-title">MEET OUR INSTRUCTORS</h2>
          </div>

          <div className="pt-instructors-grid-container">
            {/* 4 Instructor Cards */}
            <div className="pt-instructors-4col">
              {instructorsData.map((inst) => (
                <div key={inst.name} className="pt-inst-card">
                  <div className="pt-inst-img-wrap">
                    <img src={inst.img} alt={inst.name} />
                  </div>
                  <div className="pt-inst-body">
                    <h3>{inst.name}</h3>
                    <span className="pt-inst-role">{inst.role}</span>
                    <strong className="pt-inst-exp text-gold">{inst.exp}</strong>
                    <p className="pt-inst-spec"><small>Specialties:</small><br />{inst.specialty}</p>

                    <div className="pt-inst-badges">
                      {inst.badges.map((b) => (
                        <span key={b} className="pt-inst-badge"><Check size={11} className="text-gold" /> {b}</span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Advantage Card */}
            <div className="pt-advantage-card">
              <h3 className="text-gold">OUR INSTRUCTOR ADVANTAGE</h3>

              <ul className="pt-adv-list">
                <li><CheckCircle2 size={18} className="text-gold" /> <span>OSHA-Trained</span></li>
                <li><CheckCircle2 size={18} className="text-gold" /> <span>NCCER-Aligned Curriculum</span></li>
                <li><CheckCircle2 size={18} className="text-gold" /> <span>Employed Professionals</span></li>
                <li><CheckCircle2 size={18} className="text-gold" /> <span>Industry Experience</span></li>
                <li><CheckCircle2 size={18} className="text-gold" /> <span>Mentorship Included</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real Outcomes. Real Careers. (4 Data Visualizations) */}
      <section className="pt-section pt-outcomes-section" id="outcomes">
        <div className="pt-wrap">
          <div className="pt-section-header">
            <h2 className="pt-section-title">
              REAL OUTCOMES. <span className="text-gold">REAL CAREERS.</span>
            </h2>
          </div>

          <div className="pt-outcomes-grid">
            {/* Box 1: Job Placement Rate */}
            <div className="pt-outcome-card">
              <small className="pt-out-label">JOB PLACEMENT RATE</small>
              <div className="pt-out-val-row">
                <strong className="text-gold">92%</strong>
                <span className="text-muted">of graduates employed within 6 months</span>
              </div>
              <div className="pt-bar-visual-stack">
                <div className="pt-v-bar" style={{ height: "45%" }} />
                <div className="pt-v-bar" style={{ height: "60%" }} />
                <div className="pt-v-bar" style={{ height: "70%" }} />
                <div className="pt-v-bar" style={{ height: "82%" }} />
                <div className="pt-v-bar active" style={{ height: "92%" }} />
              </div>
            </div>

            {/* Box 2: Average Wage Growth */}
            <div className="pt-outcome-card">
              <small className="pt-out-label">AVERAGE WAGE GROWTH</small>
              <div className="pt-out-val-row">
                <strong className="text-gold">$18,000</strong>
                <span className="text-muted">average salary increase within 2 years</span>
              </div>
              <div className="pt-line-growth-visual">
                <TrendingUp size={42} className="text-gold" />
                <span className="pt-growth-tag">+42% Avg Increment</span>
              </div>
            </div>

            {/* Box 3: Certification Pass Rate */}
            <div className="pt-outcome-card">
              <small className="pt-out-label">CERTIFICATION PASS RATE</small>
              <div className="pt-out-val-row">
                <strong className="text-gold">96%</strong>
                <span className="text-muted">first-time pass rate on industry certifications</span>
              </div>
              <div className="pt-donut-gauge-wrap">
                <div className="pt-donut-gauge">
                  <strong>96%</strong>
                </div>
              </div>
            </div>

            {/* Box 4: Top Employers Hiring Our Grads */}
            <div className="pt-outcome-card pt-employers-card">
              <small className="pt-out-label">TOP EMPLOYERS HIRING OUR GRADS</small>
              <div className="pt-partner-logos-grid">
                <span className="pt-logo-badge">ABB</span>
                <span className="pt-logo-badge">EMERSON</span>
                <span className="pt-logo-badge">CAT</span>
                <span className="pt-logo-badge">TRANE</span>
                <span className="pt-logo-badge">TURNER</span>
                <span className="pt-logo-badge">JOHNSON CONTROLS</span>
              </div>
              <div className="pt-more-partners-note">AND 150+ MORE PARTNERS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Enrollment Journey (6 Steps) */}
      <section className="pt-section pt-enroll-flow-section">
        <div className="pt-wrap">
          <div className="pt-section-header text-center">
            <h2 className="pt-section-title">YOUR ENROLLMENT JOURNEY</h2>
          </div>

          <div className="pt-enroll-steps-flow">
            <div className="pt-e-step">
              <div className="pt-e-icon"><Search size={22} /></div>
              <h4>1. EXPLORE PROGRAM</h4>
              <p>Find the right path for your goals.</p>
            </div>

            <div className="pt-e-arrow">➔</div>

            <div className="pt-e-step">
              <div className="pt-e-icon"><Phone size={22} /></div>
              <h4>2. SPEAK WITH ADVISOR</h4>
              <p>Get personalized guidance from our team.</p>
            </div>

            <div className="pt-e-arrow">➔</div>

            <div className="pt-e-step">
              <div className="pt-e-icon"><Building size={22} /></div>
              <h4>3. TOUR CAMPUS</h4>
              <p>See our labs, meet instructors, ask questions.</p>
            </div>

            <div className="pt-e-arrow">➔</div>

            <div className="pt-e-step">
              <div className="pt-e-icon"><FileText size={22} /></div>
              <h4>4. SUBMIT APPLICATION</h4>
              <p>Simple application — we're here to help.</p>
            </div>

            <div className="pt-e-arrow">➔</div>

            <div className="pt-e-step">
              <div className="pt-e-icon"><Wrench size={22} /></div>
              <h4>5. START TRAINING</h4>
              <p>Begin hands-on training with your cohort.</p>
            </div>

            <div className="pt-e-arrow">➔</div>

            <div className="pt-e-step">
              <div className="pt-e-icon"><Trophy size={22} /></div>
              <h4>6. LAUNCH CAREER</h4>
              <p>We support you every step of the way.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hear From Our Students (3 Review Cards) */}
      <section className="pt-section pt-testimonials-section">
        <div className="pt-wrap">
          <div className="pt-section-header text-center">
            <h2 className="pt-section-title">HEAR FROM OUR STUDENTS</h2>
          </div>

          <div className="pt-testimonials-grid">
            <div className="pt-test-card">
              <p className="pt-test-quote">
                “ProTrack Trades gave me the skills and confidence to start a career I'm proud of. The instructors actually care about your success.”
              </p>
              <div className="pt-test-author-row">
                <img src={studentCarlosImg} alt="Carlos M." className="pt-student-avatar" />
                <div>
                  <strong>Carlos M.</strong>
                  <small>Welding & Fabrication Graduate</small>
                </div>
              </div>
            </div>

            <div className="pt-test-card">
              <p className="pt-test-quote">
                “The hands-on labs and real equipment made all the difference. I got hired before I even graduated!”
              </p>
              <div className="pt-test-author-row">
                <img src={studentJasmineImg} alt="Jasmine L." className="pt-student-avatar" />
                <div>
                  <strong>Jasmine L.</strong>
                  <small>Electrical Technician Graduate</small>
                </div>
              </div>
            </div>

            <div className="pt-test-card">
              <p className="pt-test-quote">
                “I came in with zero experience and left with a high-paying job and a future.”
              </p>
              <div className="pt-test-author-row">
                <img src={studentBrandonImg} alt="Brandon T." className="pt-student-avatar" />
                <div>
                  <strong>Brandon T.</strong>
                  <small>HVAC Systems Graduate</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affordable Training. Valuable Investment. (Pricing + Payment Options) */}
      <section className="pt-section pt-pricing-section" id="tuition">
        <div className="pt-wrap">
          <div className="pt-section-header text-center">
            <h2 className="pt-section-title">
              AFFORDABLE TRAINING. <span className="text-gold">VALUABLE INVESTMENT.</span>
            </h2>
          </div>

          <div className="pt-pricing-container">
            {/* 3 Pricing Cards */}
            <div className="pt-pricing-tiers">
              {/* Starter Track */}
              <div className="pt-price-card">
                <h3 className="pt-tier-title">STARTER TRACK</h3>
                <span className="pt-tier-sub">Essentials to get started</span>
                <div className="pt-tier-amount">
                  <strong>$3,995</strong>
                  <small>4-6 Months</small>
                </div>

                <ul className="pt-tier-list">
                  <li><Check size={14} className="text-gold" /> Core Trade Training</li>
                  <li><Check size={14} className="text-gold" /> Basic Hands-On Labs</li>
                  <li><Check size={14} className="text-gold" /> Cert Prep</li>
                  <li><Check size={14} className="text-gold" /> Career Support</li>
                </ul>

                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="pt-btn-dark full-w"
                >
                  CHOOSE PLAN
                </button>
              </div>

              {/* Career Track (Best Value) */}
              <div className="pt-price-card best-value">
                <div className="pt-best-value-ribbon">BEST VALUE</div>
                <h3 className="pt-tier-title">CAREER TRACK</h3>
                <span className="pt-tier-sub">Complete training for career advancement</span>
                <div className="pt-tier-amount">
                  <strong>$6,995</strong>
                  <small>6-8 Months</small>
                </div>

                <ul className="pt-tier-list">
                  <li><Check size={14} className="text-gold" /> <strong>Everything in Starter</strong></li>
                  <li><Check size={14} className="text-gold" /> Advanced Labs</li>
                  <li><Check size={14} className="text-gold" /> Certifications Included</li>
                  <li><Check size={14} className="text-gold" /> Direct Career Placement</li>
                </ul>

                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="pt-btn-gold full-w"
                >
                  CHOOSE PLAN
                </button>
              </div>

              {/* Advanced Track */}
              <div className="pt-price-card">
                <h3 className="pt-tier-title">ADVANCED TRACK</h3>
                <span className="pt-tier-sub">Expert training for specialized careers</span>
                <div className="pt-tier-amount">
                  <strong>$8,995</strong>
                  <small>8-12 Months</small>
                </div>

                <ul className="pt-tier-list">
                  <li><Check size={14} className="text-gold" /> <strong>Everything in Career Track</strong></li>
                  <li><Check size={14} className="text-gold" /> Advanced Multi-Certifications</li>
                  <li><Check size={14} className="text-gold" /> Capstone Project Showcase</li>
                  <li><Check size={14} className="text-gold" /> Lifetime Career Support</li>
                </ul>

                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="pt-btn-dark full-w"
                >
                  CHOOSE PLAN
                </button>
              </div>
            </div>

            {/* Right Payment Options Card */}
            <div className="pt-payment-options-card">
              <h3 className="text-gold">PAYMENT OPTIONS</h3>

              <ul className="pt-pay-list">
                <li><CheckCircle2 size={16} className="text-gold" /> Monthly Payment Plans</li>
                <li><CheckCircle2 size={16} className="text-gold" /> Financial Aid for Qualified Students</li>
                <li><CheckCircle2 size={16} className="text-gold" /> Employer Tuition Assistance</li>
                <li><CheckCircle2 size={16} className="text-gold" /> GI Bill® Approved</li>
              </ul>

              <p className="pt-pay-note">
                Our team will help you find the right option for you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="pt-section pt-faq-section" id="faq">
        <div className="pt-wrap">
          <div className="pt-section-header text-center">
            <h2 className="pt-section-title">FREQUENTLY ASKED QUESTIONS</h2>
          </div>

          <div className="pt-faq-grid">
            {tradeFaqs.map((faq, idx) => (
              <div
                key={faq.q}
                className={`pt-faq-card ${openFaq === idx ? "open" : ""}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="pt-faq-q">
                  <span>{faq.q}</span>
                  <span className="pt-faq-plus text-gold">{openFaq === idx ? "−" : "+"}</span>
                </div>
                {openFaq === idx && (
                  <div className="pt-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="pt-banner-section">
        <div className="pt-wrap pt-banner-card">
          <div className="pt-banner-text-col">
            <h2>
              YOUR FUTURE IS <br />
              BUILT BY <span className="text-gold">YOU.</span>
            </h2>
            <p>We'll give you the skills. You build the life.</p>

            <div className="pt-banner-btn-row">
              <button
                onClick={() => setIsApplyOpen(true)}
                className="pt-btn-gold"
              >
                <span>APPLY NOW</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => setIsTourOpen(true)}
                className="pt-btn-dark"
              >
                <span>BOOK A CAMPUS TOUR</span>
              </button>
            </div>
          </div>

          <div className="pt-banner-img-col">
            <img src={bannerWorkshopImg} alt="Trade instructors and students collaborating" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-footer">
        <div className="pt-wrap pt-footer-grid">
          <div className="pt-footer-col pt-footer-brand">
            <div className="pt-brand">
              <ProTrackLogo size={30} />
              <div className="pt-brand-text">
                <span className="pt-brand-title">PROTRACK</span>
                <span className="pt-brand-sub">TRADES</span>
              </div>
            </div>
            <p className="pt-footer-desc">
              Hands-on training. Industry certifications. Small cohorts. Real outcomes. We build the skills. You build the future.
            </p>
            <div className="pt-footer-socials">
              <a href="#top" aria-label="Facebook">f</a>
              <a href="#top" aria-label="Instagram">📷</a>
              <a href="#top" aria-label="LinkedIn">in</a>
              <a href="#top" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div className="pt-footer-col">
            <h4>PROGRAMS</h4>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Electrical Technician</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>HVAC Systems</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Welding & Fabrication</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Plumbing Fundamentals</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Construction Mgmt</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Industrial Maintenance</a>
          </div>

          <div className="pt-footer-col">
            <h4>RESOURCES</h4>
            <a href="#curriculum" onClick={(e) => handleNavClick(e, "#curriculum")}>Training Paths</a>
            <a href="#tuition" onClick={(e) => handleNavClick(e, "#tuition")}>Admissions</a>
            <a href="#tuition" onClick={(e) => handleNavClick(e, "#tuition")}>Financial Aid</a>
            <a href="#outcomes" onClick={(e) => handleNavClick(e, "#outcomes")}>Student Support</a>
            <a href="#outcomes" onClick={(e) => handleNavClick(e, "#outcomes")}>Career Services</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")}>Safety Standards</a>
          </div>

          <div className="pt-footer-col">
            <h4>COMPANY</h4>
            <a href="#instructors" onClick={(e) => handleNavClick(e, "#instructors")}>About Us</a>
            <a href="#instructors" onClick={(e) => handleNavClick(e, "#instructors")}>Our Instructors</a>
            <a href="#outcomes" onClick={(e) => handleNavClick(e, "#outcomes")}>Industry Partners</a>
            <a href="#curriculum" onClick={(e) => handleNavClick(e, "#curriculum")}>News & Press</a>
            <a href="#tuition" onClick={(e) => handleNavClick(e, "#tuition")}>Accreditation</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")}>Contact</a>
          </div>

          <div className="pt-footer-col pt-footer-subscribe">
            <h4>STAY CONNECTED</h4>
            <p>Get updates on new sessions, events, and industry news.</p>
            <div className="pt-subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button type="button" className="pt-btn-gold">SUBSCRIBE</button>
            </div>
            <div className="pt-contact-info-mini">
              <div><Phone size={13} className="text-gold" /> (555) 123-4567</div>
              <div><Mail size={13} className="text-gold" /> info@protracktrades.com</div>
              <div><MapPin size={13} className="text-gold" /> 742 Trade Way, Houston, TX 77001</div>
            </div>
          </div>
        </div>

        <div className="pt-footer-bottom">
          <div className="pt-wrap">
            <p>© 2025 ProTrack Trades. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Trade Program Detail Modal */}
      {selectedProgram && (
        <div
          className="pt-modal-backdrop"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="pt-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="pt-modal-close"
              onClick={() => setSelectedProgram(null)}
            >
              <X size={20} />
            </button>

            <div className="pt-modal-header">
              <span className="pt-prog-category-badge">{selectedProgram.category}</span>
              <h2>{selectedProgram.title}</h2>
              <p>{selectedProgram.desc}</p>
            </div>

            <div className="pt-modal-meta-grid">
              <div><strong>Duration:</strong> {selectedProgram.duration}</div>
              <div><strong>Skill Level:</strong> {selectedProgram.level}</div>
              <div><strong>Next Cohort:</strong> {selectedProgram.nextStart}</div>
              <div><strong>Starting Wage:</strong> <span className="text-gold">{selectedProgram.startingWage}</span></div>
            </div>

            <h4>Key Certifications Included:</h4>
            <ul className="pt-modal-cert-list">
              {selectedProgram.certifications.map((c: string) => (
                <li key={c}><Check size={16} className="text-gold" /> {c}</li>
              ))}
            </ul>

            <button
              onClick={() => {
                const title = selectedProgram.title;
                setSelectedProgram(null);
                setAppForm({ ...appForm, trade: title });
                setIsApplyOpen(true);
              }}
              className="pt-btn-gold full-w"
            >
              APPLY FOR {selectedProgram.title}
            </button>
          </div>
        </div>
      )}

      {/* Apply / Tour Modal */}
      {(isApplyOpen || isTourOpen) && (
        <div
          className="pt-modal-backdrop"
          onClick={() => {
            setIsApplyOpen(false);
            setIsTourOpen(false);
          }}
        >
          <div
            className="pt-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="pt-modal-close"
              onClick={() => {
                setIsApplyOpen(false);
                setIsTourOpen(false);
              }}
            >
              <X size={20} />
            </button>

            {!formSubmitted ? (
              <>
                <div className="pt-modal-header">
                  <h2>{isApplyOpen ? "APPLY FOR NEXT COHORT" : "BOOK A CAMPUS & SHOP TOUR"}</h2>
                  <p>
                    {isApplyOpen
                      ? "Submit your application in 2 minutes. Limited shop benches per cohort."
                      : "Walk through our real training labs, meet master instructors, and inspect our heavy equipment."}
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="pt-modal-form">
                  <div className="pt-form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={appForm.name}
                      onChange={(e) => setAppForm({ ...appForm, name: e.target.value })}
                    />
                  </div>

                  <div className="pt-form-2col">
                    <div className="pt-form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="marcus@example.com"
                        value={appForm.email}
                        onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                      />
                    </div>
                    <div className="pt-form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={appForm.phone}
                        onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="pt-form-2col">
                    <div className="pt-form-group">
                      <label>Desired Trade Program</label>
                      <select
                        value={appForm.trade}
                        onChange={(e) => setAppForm({ ...appForm, trade: e.target.value })}
                      >
                        <option value="Electrical Technician">Electrical Technician (6 Mo)</option>
                        <option value="HVAC Systems">HVAC Systems (8 Mo)</option>
                        <option value="Welding & Fabrication">Welding & Fabrication (6 Mo)</option>
                        <option value="Plumbing Fundamentals">Plumbing Fundamentals (6 Mo)</option>
                        <option value="Construction Management">Construction Management (8 Mo)</option>
                        <option value="Industrial Maintenance">Industrial Maintenance (8 Mo)</option>
                      </select>
                    </div>
                    <div className="pt-form-group">
                      <label>Preferred Shift</label>
                      <select
                        value={appForm.shift}
                        onChange={(e) => setAppForm({ ...appForm, shift: e.target.value })}
                      >
                        <option value="Evening Schedule (5:00 PM – 9:45 PM)">Evening Schedule (5:00 PM – 9:45 PM)</option>
                        <option value="Day Schedule (8:00 AM – 1:30 PM)">Day Schedule (8:00 AM – 1:30 PM)</option>
                        <option value="Weekend Intensive (Sat/Sun 8 AM – 4 PM)">Weekend Intensive (Sat/Sun 8 AM – 4 PM)</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="pt-btn-gold full-w">
                    {isApplyOpen ? "SUBMIT APPLICATION" : "CONFIRM TOUR RESERVATION"}
                  </button>

                  <div className="pt-form-privacy">
                    <Lock size={12} />
                    <span>Your information is strictly protected and never shared.</span>
                  </div>
                </form>
              </>
            ) : (
              <div className="pt-modal-success">
                <CheckCircle2 size={54} className="text-gold" />
                <h3>APPLICATION RECEIVED!</h3>
                <p>
                  Thank you <strong>{appForm.name}</strong>! An admissions officer has been assigned to your profile and sent next steps to <strong>{appForm.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setIsApplyOpen(false);
                    setIsTourOpen(false);
                  }}
                  className="pt-btn-gold full-w"
                >
                  DONE
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default ProTrackTrades;
