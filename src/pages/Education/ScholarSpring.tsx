import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Award,
  Baby,
  BookOpen,
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

// Photo Assets
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
    desc: "Building trust, exploring senses, and developing early communication.",
    img: programToddlerImg,
    colorClass: "card-mint",
    badge: "1:4 Ratio",
    highlights: ["Sensory exploration stations", "Gentle routine building", "Language & sound games", "Potty training support"],
  },
  {
    id: "preschool",
    title: "Preschool",
    age: "3 – 4 Years",
    desc: "Growing independence, curiosity, and social skills through play.",
    img: programPreschoolImg,
    colorClass: "card-amber",
    badge: "1:6 Ratio",
    highlights: ["Foundational letter & number play", "Collaborative art & story circles", "Social sharing & emotional growth", "Daily outdoor nature play"],
  },
  {
    id: "pre-k",
    title: "Pre-K",
    age: "4 – 5 Years",
    desc: "Preparing for kindergarten with literacy, math, and confident thinking.",
    img: programPrekImg,
    colorClass: "card-blue",
    badge: "Kindergarten Prep",
    highlights: ["Early phonics & sight words", "STEM problem-solving challenges", "Writing & fine motor mastery", "Independence & self-advocacy"],
  },
  {
    id: "enrichment",
    title: "Enrichment",
    age: "Ages 2 – 5",
    desc: "Music, art, movement, and STEM experiences that spark joy.",
    img: programEnrichmentImg,
    colorClass: "card-pink",
    badge: "Specialty Tracks",
    highlights: ["Orff music & rhythm workshops", "Little Scientists lab experiments", "Junior yoga & mindful movement", "Bilingual Spanish song circle"],
  },
];

// Teachers Dataset
const teachersList = [
  {
    name: "Ms. Olivia",
    role: "Lead Toddler Teacher",
    exp: "10+ years experience",
    quote: "Building trust, nurturing early curiosity, and daily communication.",
    img: teacherOliviaImg,
    color: "#22c55e",
  },
  {
    name: "Ms. Sophia",
    role: "Preschool Teacher",
    exp: "8+ years experience",
    quote: "Growing independence, curiosity, and social skills through play.",
    img: teacherSophiaImg,
    color: "#f59e0b",
  },
  {
    name: "Ms. Aisha",
    role: "Pre-K Teacher",
    exp: "11+ years experience",
    quote: "I prepare our little kindergarten learners to step into kindergarten with confidence.",
    img: teacherAishaImg,
    color: "#06b6d4",
  },
  {
    name: "Mr. Daniel",
    role: "Enrichment Specialist",
    exp: "9+ years experience",
    quote: "I love bringing music and movement to life and making kids smile.",
    img: teacherDanielImg,
    color: "#3b82f6",
  },
];

// Daily Schedule Dataset
const dailySchedule = [
  { time: "7:30 - 8:30 AM", title: "Arrival & Free Play", desc: "Warm welcomes & choice time", icon: Sun, color: "text-amber" },
  { time: "8:30 - 9:30 AM", title: "Circle Time", desc: "Songs, calendar, & group connection", icon: Users, color: "text-blue" },
  { time: "9:30 - 10:30 AM", title: "Discovery Centers", desc: "Hands-on learning & exploration", icon: Puzzle, color: "text-teal" },
  { time: "10:30 - 11:00 AM", title: "Snack Time", desc: "Healthy snacks & good conversations", icon: Leaf, color: "text-green" },
  { time: "11:00 - 11:30 AM", title: "Outdoor Play", desc: "Fresh air, gross motor fun", icon: Sparkles, color: "text-orange" },
  { time: "11:30 AM - 12:30 PM", title: "Story Time", desc: "Books, songs, & imagination", icon: BookOpen, color: "text-purple" },
  { time: "12:30 - 1:45 PM", title: "Art & Creativity", desc: "Explore, imagine, express", icon: Palette, color: "text-pink" },
  { time: "1:45 - 2:30 PM", title: "Rest & Quiet Time", desc: "Recharge with restful quiet activities", icon: Clock, color: "text-indigo" },
  { time: "2:30 - 3:30 PM", title: "Reflection & Games", desc: "Small groups & skill practice", icon: Heart, color: "text-red" },
  { time: "3:30 - 4:00 PM", title: "Pickup & Goodbyes", desc: "Hugs, updates & smiles", icon: Smile, color: "text-pink" },
];

// FAQs Dataset
const faqsList = [
  {
    q: "What are your hours of operation?",
    a: "ScholarSpring Preschool is open Monday through Friday from 7:00 AM to 6:00 PM. We offer flexible core preschool hours (8:30 AM – 3:30 PM) as well as early bird and extended after-care.",
  },
  {
    q: "Do you offer part-time programs?",
    a: "Yes! We offer 2-day (Tues/Thurs), 3-day (Mon/Wed/Fri), and full-time 5-day programs to support every family’s unique work and home schedule.",
  },
  {
    q: "What is your teacher-to-child ratio?",
    a: "We maintain industry-leading low ratios: 1:4 for Toddlers, 1:6 for Preschool, and 1:8 for Pre-K, ensuring every child receives individualized love, care, and attention.",
  },
  {
    q: "How do you handle illness?",
    a: "We follow strict pediatric health and safety standards. Classrooms are sanitized throughout the day, and our dedicated wellness policy ensures sick children rest at home until 24-hour symptom-free.",
  },
  {
    q: "What should my child bring on their first day?",
    a: "We ask families to bring a labeled water bottle, an extra change of clothes, a small rest blanket/cuddle toy, and diapers/wipes if applicable. All educational materials and organic snacks are provided!",
  },
  {
    q: "Is financial assistance available?",
    a: "Yes, ScholarSpring offers need-based tuition assistance, sibling discounts, and participates in state childcare subsidy programs.",
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

  // Scrollspy & sticky listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["top", "about", "programs", "curriculum", "teachers", "schedule", "enrollment", "faq"];
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
            <ScholarFlowerLogo size={34} />
            <div className="ss-brand-text">
              <span className="ss-brand-title">ScholarSpring</span>
              <span className="ss-brand-sub">Preschool</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="ss-nav-links">
            <a href="#about" className={`ss-nav-link ${activeNav === "#about" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#about")}>
              About ▾
            </a>
            <a href="#programs" className={`ss-nav-link ${activeNav === "#programs" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#programs")}>
              Programs ▾
            </a>
            <a href="#curriculum" className={`ss-nav-link ${activeNav === "#curriculum" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#curriculum")}>
              Curriculum
            </a>
            <a href="#teachers" className={`ss-nav-link ${activeNav === "#teachers" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#teachers")}>
              Teachers
            </a>
            <a href="#schedule" className={`ss-nav-link ${activeNav === "#schedule" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#schedule")}>
              Schedule
            </a>
            <a href="#enrollment" className={`ss-nav-link ${activeNav === "#enrollment" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#enrollment")}>
              Enrollment
            </a>
            <a href="#faq" className={`ss-nav-link ${activeNav === "#faq" ? "active" : ""}`} onClick={(e) => handleNavClick(e, "#faq")}>
              FAQ
            </a>
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="ss-nav-actions">
            <button
              onClick={() => setIsTourOpen(true)}
              className="ss-btn-coral ss-nav-tour-btn"
            >
              Schedule a Tour
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
            <ScholarFlowerLogo size={28} />
            <span className="ss-brand-title">ScholarSpring</span>
          </div>
          <button
            className="ss-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="ss-drawer-body">
          <div className="ss-drawer-links">
            {[
              { name: "About Our Preschool", href: "#about" },
              { name: "Programs for Every Stage", href: "#programs" },
              { name: "Our Learning Roadmap", href: "#curriculum" },
              { name: "Meet Our Teachers", href: "#teachers" },
              { name: "Daily Schedule", href: "#schedule" },
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
            <h1 className="ss-hero-title">
              <span className="ss-title-coral">Joyful Learning.</span>
              <br />
              <span className="ss-title-navy">Confident First Steps.</span>
            </h1>

            <p className="ss-hero-desc">
              A warm, nurturing place where curiosity grows, friendships bloom, and every child is prepared for a bright future.
            </p>

            <div className="ss-hero-btn-row">
              <button
                onClick={() => setIsTourOpen(true)}
                className="ss-btn-coral ss-btn-hero"
              >
                <CalendarDays size={17} />
                <span>Book a Tour!</span>
              </button>
              <button
                onClick={() => setIsEnrollOpen(true)}
                className="ss-btn-mint ss-btn-hero"
              >
                <FileText size={17} />
                <span>Start Enrollment</span>
              </button>
            </div>
          </div>

          {/* Right Visual Collage with Real Photos & Badges */}
          <div className="ss-hero-collage">
            <div className="ss-collage-main-img-card">
              <img
                src={heroChildImg}
                alt="ScholarSpring Preschool Child with colorful crafts"
                className="ss-main-img"
              />
            </div>

            <div className="ss-collage-side-stack">
              <div className="ss-side-img-card top">
                <img src={heroClassImg} alt="Teacher interacting with toddlers" />
              </div>
              <div className="ss-side-img-card bottom">
                <img src={heroKidsImg} alt="Preschool children smiling together" />
              </div>
            </div>

            {/* Floating Trust Pills */}
            <div className="ss-floating-badge badge-top">
              <div className="ss-badge-icon icon-blue"><Puzzle size={16} /></div>
              <div>
                <strong>Small Class Sizes</strong>
                <small>Max 12 children per class</small>
              </div>
            </div>

            <div className="ss-floating-badge badge-mid">
              <div className="ss-badge-icon icon-pink"><Heart size={16} /></div>
              <div>
                <strong>Caring Teachers</strong>
                <small>Passionate educators who love what they do</small>
              </div>
            </div>

            <div className="ss-floating-badge badge-bot">
              <div className="ss-badge-icon icon-green"><Phone size={16} /></div>
              <div>
                <strong>Daily Updates</strong>
                <small>Photos, activities & real-time updates</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Stats Ribbon */}
      <section className="ss-stats-section">
        <div className="ss-wrap ss-stats-grid">
          <div className="ss-stat-pill">
            <div className="ss-stat-icon-wrap icon-pink"><Heart size={18} /></div>
            <div>
              <strong>12+</strong>
              <span>Years Serving Families</span>
            </div>
          </div>

          <div className="ss-stat-pill">
            <div className="ss-stat-icon-wrap icon-teal"><Users size={18} /></div>
            <div>
              <strong>1:6</strong>
              <span>Teacher to Child Ratio</span>
            </div>
          </div>

          <div className="ss-stat-pill">
            <div className="ss-stat-icon-wrap icon-amber"><Smile size={18} /></div>
            <div>
              <strong>98%</strong>
              <span>Parent Satisfaction</span>
            </div>
          </div>

          <div className="ss-stat-pill">
            <div className="ss-stat-icon-wrap icon-blue"><Home size={18} /></div>
            <div>
              <strong>6</strong>
              <span>Bright Classrooms</span>
            </div>
          </div>

          <div className="ss-stat-pill">
            <div className="ss-stat-icon-wrap icon-gold"><Star size={18} /></div>
            <div>
              <strong>96%</strong>
              <span>Kindergarten Readiness Rate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Families Choose ScholarSpring */}
      <section className="ss-section" id="about">
        <div className="ss-wrap">
          <div className="ss-section-header text-center">
            <h2 className="ss-section-title">
              Why Families Choose ScholarSpring <span className="title-emoji">💖</span>
            </h2>
          </div>

          <div className="ss-why-grid">
            <div className="ss-why-card">
              <div className="ss-why-icon-wrap icon-green"><Leaf size={24} /></div>
              <h3>Nurturing Environment</h3>
              <p>Warm, inclusive spaces where every child feels seen, safe, and loved.</p>
            </div>

            <div className="ss-why-card">
              <div className="ss-why-icon-wrap icon-orange"><Sun size={24} /></div>
              <h3>Play-Based Learning</h3>
              <p>Hands-on exploration that makes learning joyful and meaningful.</p>
            </div>

            <div className="ss-why-card">
              <div className="ss-why-icon-wrap icon-blue"><Shield size={24} /></div>
              <h3>Safe & Secure Campus</h3>
              <p>Secure check-in systems, clean spaces, and caring supervision.</p>
            </div>

            <div className="ss-why-card">
              <div className="ss-why-icon-wrap icon-pink"><MessageSquare size={24} /></div>
              <h3>Connected Families</h3>
              <p>Daily updates and open communication every step of the way.</p>
            </div>

            <div className="ss-why-card">
              <div className="ss-why-icon-wrap icon-purple"><Users size={24} /></div>
              <h3>Caring Educators</h3>
              <p>Experienced teachers who inspire curiosity and confidence.</p>
            </div>

            <div className="ss-why-card">
              <div className="ss-why-icon-wrap icon-amber"><Clock size={24} /></div>
              <h3>Structured Routines</h3>
              <p>Predictable routines that create comfort and build independence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Programs for Every Stage */}
      <section className="ss-section ss-programs-section" id="programs">
        <div className="ss-wrap">
          <div className="ss-section-header text-center">
            <h2 className="ss-section-title">
              Programs for Every Stage <span className="title-emoji">🎒</span>
            </h2>
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
                  <h3 className="ss-program-name">{prog.title}</h3>
                  <span className="ss-program-age">{prog.age}</span>
                  <p className="ss-program-desc">{prog.desc}</p>

                  <button className="ss-btn-learn-more">
                    <span>Learn More</span>
                    <ChevronRight size={14} />
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
            <h2 className="ss-section-title">
              Our Learning Roadmap <span className="title-emoji">🌟</span>
            </h2>
            <p className="ss-section-desc">Six pillars that guide every curious mind.</p>
          </div>

          <div className="ss-roadmap-grid">
            <div className="ss-pillar-card p-blue">
              <span className="ss-pillar-num">1</span>
              <div className="ss-pillar-icon"><BookOpen size={22} /></div>
              <h4>Language & Literacy</h4>
              <p>Building strong communication and early reading foundations.</p>
            </div>

            <div className="ss-pillar-card p-yellow">
              <span className="ss-pillar-num">2</span>
              <div className="ss-pillar-icon"><Sparkles size={22} /></div>
              <h4>Math Discovery</h4>
              <p>Exploring numbers, patterns, and problem-solving through play.</p>
            </div>

            <div className="ss-pillar-card p-red">
              <span className="ss-pillar-num">3</span>
              <div className="ss-pillar-icon"><Heart size={22} /></div>
              <h4>Social-Emotional Growth</h4>
              <p>Building empathy, self-regulation, and positive friendships.</p>
            </div>

            <div className="ss-pillar-card p-purple">
              <span className="ss-pillar-num">4</span>
              <div className="ss-pillar-icon"><Palette size={22} /></div>
              <h4>Creativity & Expression</h4>
              <p>Art, music, and imagination that help ideas come to life.</p>
            </div>

            <div className="ss-pillar-card p-indigo">
              <span className="ss-pillar-num">5</span>
              <div className="ss-pillar-icon"><Zap size={22} /></div>
              <h4>Movement & Health</h4>
              <p>Active bodies, coordination, and healthy habits.</p>
            </div>

            <div className="ss-pillar-card p-green">
              <span className="ss-pillar-num">6</span>
              <div className="ss-pillar-icon"><Leaf size={22} /></div>
              <h4>Nature Exploration</h4>
              <p>Connecting with the world through outdoor discovery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet Our Amazing Teachers */}
      <section className="ss-section" id="teachers">
        <div className="ss-wrap">
          <div className="ss-section-header text-center">
            <h2 className="ss-section-title">
              Meet Our Amazing Teachers <span className="title-emoji">🌿</span>
            </h2>
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
                  <small className="ss-teacher-exp">{t.exp}</small>
                  <p className="ss-teacher-quote">“{t.quote}”</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* A Day Full of Discovery & Growing Today (Split Schedule Table + Milestones) */}
      <section className="ss-section ss-schedule-split-section" id="schedule">
        <div className="ss-wrap ss-split-grid">
          {/* Left Column: Daily Schedule */}
          <div className="ss-schedule-col">
            <h2 className="ss-col-title">
              A Day Full of Discovery <span className="title-emoji">☁️</span>
            </h2>

            <div className="ss-schedule-table">
              {dailySchedule.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.time} className="ss-schedule-row">
                    <div className="ss-time-col">
                      <Icon size={14} className={item.color} />
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
            <h2 className="ss-col-title">
              Growing Today, Ready for Tomorrow <span className="title-emoji">☀️</span>
            </h2>

            <div className="ss-milestone-cards-stack">
              <div className="ss-m-card">
                <div className="ss-m-icon icon-blue"><Puzzle size={20} /></div>
                <div className="ss-m-body">
                  <h4>Confident Learners</h4>
                  <p>Building independence and a love of learning.</p>
                </div>
              </div>

              <div className="ss-m-card">
                <div className="ss-m-icon icon-purple"><GraduationCap size={20} /></div>
                <div className="ss-m-body">
                  <div className="ss-m-bar-head">
                    <h4>Kindergarten Ready</h4>
                    <strong>96%</strong>
                  </div>
                  <p>Strong academic & social foundations.</p>
                  <div className="ss-m-bar-track">
                    <div className="ss-m-bar-fill" style={{ width: "96%" }} />
                  </div>
                </div>
              </div>

              <div className="ss-m-card">
                <div className="ss-m-icon icon-green"><Phone size={20} /></div>
                <div className="ss-m-body">
                  <h4>Family Connected</h4>
                  <p>Real-time updates and open dialogue on mobile.</p>
                </div>
              </div>

              <div className="ss-m-card">
                <div className="ss-m-icon icon-teal"><Leaf size={20} /></div>
                <div className="ss-m-body">
                  <h4>Milestones That Matter</h4>
                  <p>Tracking growth in every important early developmental area.</p>
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
            <h2 className="ss-section-title">Your Enrollment Journey</h2>
          </div>

          <div className="ss-enroll-steps-row">
            <div className="ss-enroll-step">
              <div className="ss-step-bubble icon-green"><Phone size={20} /></div>
              <h4>1. Inquire</h4>
              <p>Reach out to us; we're here to help!</p>
            </div>

            <div className="ss-step-line" />

            <div className="ss-enroll-step">
              <div className="ss-step-bubble icon-orange"><Calendar size={20} /></div>
              <h4>2. Book a Tour</h4>
              <p>Visit our campus and see the magic.</p>
            </div>

            <div className="ss-step-line" />

            <div className="ss-enroll-step">
              <div className="ss-step-bubble icon-pink"><Users size={20} /></div>
              <h4>3. Meet the Team</h4>
              <p>We get to know your family and answer questions.</p>
            </div>

            <div className="ss-step-line" />

            <div className="ss-enroll-step">
              <div className="ss-step-bubble icon-blue"><FileText size={20} /></div>
              <h4>4. Submit Application</h4>
              <p>Simple application and required documents.</p>
            </div>

            <div className="ss-step-line" />

            <div className="ss-enroll-step">
              <div className="ss-step-bubble icon-purple"><Heart size={20} /></div>
              <h4>5. Family Onboarding</h4>
              <p>We guide you through details next step.</p>
            </div>

            <div className="ss-step-line" />

            <div className="ss-enroll-step">
              <div className="ss-step-bubble icon-gold"><Star size={20} /></div>
              <h4>6. First Day of School!</h4>
              <p>New adventures begin!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Loved by Our ScholarSpring Families */}
      <section className="ss-section">
        <div className="ss-wrap">
          <div className="ss-section-header text-center">
            <h2 className="ss-section-title">
              Loved by Our ScholarSpring Families <span className="title-emoji">💖</span>
            </h2>
          </div>

          <div className="ss-family-reviews-grid">
            <div className="ss-review-card">
              <div className="ss-review-top">
                <img src={familyMartinezImg} alt="The Martinez Family" className="ss-fam-img" />
                <div className="ss-fam-stars">★★★★★</div>
              </div>
              <p className="ss-fam-quote">
                “ScholarSpring has been a blessing for our family. Our daughter comes home happy, learning, and so excited!”
              </p>
              <strong className="ss-fam-name">- The Martinez Family</strong>
            </div>

            <div className="ss-review-card">
              <div className="ss-review-top">
                <img src={familyJohnsonImg} alt="The Johnson Family" className="ss-fam-img" />
                <div className="ss-fam-stars">★★★★★</div>
              </div>
              <p className="ss-fam-quote">
                “The teachers are incredible and the communication is amazing. We feel so connected and confident every day.”
              </p>
              <strong className="ss-fam-name">- The Johnson Family</strong>
            </div>

            <div className="ss-review-card">
              <div className="ss-review-top">
                <img src={familyPatelImg} alt="The Patel Family" className="ss-fam-img" />
                <div className="ss-fam-stars">★★★★★</div>
              </div>
              <p className="ss-fam-quote">
                “We love the nurturing environment and the focus on both learning and kindness.”
              </p>
              <strong className="ss-fam-name">- The Patel Family</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Support for Families (4 Support Cards) */}
      <section className="ss-section ss-support-section">
        <div className="ss-wrap">
          <div className="ss-section-header text-center">
            <h2 className="ss-section-title">Support for Families</h2>
          </div>

          <div className="ss-support-grid">
            <div className="ss-support-card">
              <div className="ss-supp-icon icon-green"><Sparkles size={24} /></div>
              <h3>Flexible Tuition Options</h3>
              <p>Plans that work for your family's needs.</p>
            </div>

            <div className="ss-support-card">
              <div className="ss-supp-icon icon-amber"><Clock size={24} /></div>
              <h3>Extended Care Available</h3>
              <p>Before and after care for busy families.</p>
            </div>

            <div className="ss-support-card">
              <div className="ss-supp-icon icon-pink"><Heart size={24} /></div>
              <h3>Healthy Meals & Snacks</h3>
              <p>Organic nutrition that little bodies need.</p>
            </div>

            <div className="ss-support-card">
              <div className="ss-supp-icon icon-blue"><Phone size={24} /></div>
              <h3>Family App Updates</h3>
              <p>Photos, daily schedules, menus, and announcements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="ss-section" id="faq">
        <div className="ss-wrap">
          <div className="ss-section-header text-center">
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
                alt="Preschooler with rainbow painted hands"
                className="ss-banner-photo"
              />
            </div>

            <div className="ss-banner-text-col">
              <h2>Come See the ScholarSpring Difference!</h2>
              <p>We can't wait to welcome your family.</p>

              <div className="ss-banner-btn-group">
                <button
                  onClick={() => setIsTourOpen(true)}
                  className="ss-btn-coral"
                >
                  <CalendarDays size={16} />
                  <span>Book a Tour Today 📅</span>
                </button>
                <button
                  onClick={() => setIsEnrollOpen(true)}
                  className="ss-btn-mint"
                >
                  <FileText size={16} />
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
              <ScholarFlowerLogo size={32} />
              <div className="ss-brand-text">
                <span className="ss-brand-title">ScholarSpring</span>
                <span className="ss-brand-sub">Preschool</span>
              </div>
            </div>
            <p className="ss-footer-slogan">Learning with joy, growing with love.</p>
          </div>

          <div className="ss-footer-col">
            <h4>Contact Us</h4>
            <div className="ss-contact-item">
              <MapPin size={14} />
              <span>1154 Happy Hills Lane, Springfield, CA 90210</span>
            </div>
            <div className="ss-contact-item">
              <Phone size={14} />
              <span>(555) 123-4567</span>
            </div>
            <div className="ss-contact-item">
              <Mail size={14} />
              <span>hello@scholarspringpreschool.com</span>
            </div>
          </div>

          <div className="ss-footer-col">
            <h4>Quick Links</h4>
            <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>About</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Programs</a>
            <a href="#curriculum" onClick={(e) => handleNavClick(e, "#curriculum")}>Curriculum</a>
            <a href="#teachers" onClick={(e) => handleNavClick(e, "#teachers")}>Teachers</a>
            <a href="#schedule" onClick={(e) => handleNavClick(e, "#schedule")}>Schedule</a>
            <a href="#enrollment" onClick={(e) => handleNavClick(e, "#enrollment")}>Enrollment</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")}>FAQ</a>
          </div>

          <div className="ss-footer-col">
            <h4>Hours</h4>
            <p>Monday – Friday<br /><strong>7:00 AM – 6:00 PM</strong></p>
            <p><small>Closed on major holidays.</small></p>
          </div>

          <div className="ss-footer-col">
            <h4>Follow Us</h4>
            <div className="ss-footer-socials">
              <a href="#top" aria-label="Facebook">f</a>
              <a href="#top" aria-label="Instagram">📷</a>
              <a href="#top" aria-label="YouTube">▶</a>
            </div>
          </div>
        </div>

        <div className="ss-footer-bottom">
          <div className="ss-wrap">
            <p>© 2026 ScholarSpring Preschool. All rights reserved.</p>
          </div>
        </div>
      </footer>

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
            >
              <X size={20} />
            </button>

            <div className="ss-modal-header">
              <span className="ss-program-badge">{selectedProgram.badge}</span>
              <h2>{selectedProgram.title} Program</h2>
              <span className="ss-program-age">{selectedProgram.age}</span>
              <p>{selectedProgram.desc}</p>
            </div>

            <h4>Core Daily Developmental Focus:</h4>
            <ul className="ss-modal-list">
              {selectedProgram.highlights.map((h: string) => (
                <li key={h}><Check size={16} className="icon-green" /> {h}</li>
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
            >
              <X size={20} />
            </button>

            {!formSubmitted ? (
              <>
                <div className="ss-modal-header">
                  <h2>{isTourOpen ? "Schedule a Campus Tour 🌸" : "Start Enrollment 🎒"}</h2>
                  <p>
                    {isTourOpen
                      ? "Come meet our caring educators, tour our bright classrooms, and see joyful learning in action."
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
                    <Lock size={12} />
                    <span>We respect your family's privacy. 100% confidential.</span>
                  </div>
                </form>
              </>
            ) : (
              <div className="ss-modal-success">
                <Smile size={56} className="icon-pink" />
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
