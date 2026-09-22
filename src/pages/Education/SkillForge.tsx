import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BarChart3,
  BookOpen,
  Briefcase,
  Calendar,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Clock3,
  Code2,
  Compass,
  Cpu,
  FileCheck2,
  FileText,
  Flame,
  Globe,
  GraduationCap,
  Headphones,
  HeartHandshake,
  HelpCircle,
  Laptop,
  Layers,
  Layout,
  LineChart,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MessageSquare,
  Mic,
  MonitorPlay,
  Percent,
  Phone,
  PieChart,
  Play,
  Radio,
  RotateCcw,
  Search,
  Send,
  Share2,
  ShieldCheck,
  Sliders,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  UserCheck,
  Users,
  Video,
  X,
  Zap,
} from "lucide-react";
import "./SkillForge.css";

// Photo Assets
import heroFullstackImg from "../../assets/optimized/education/skillforge/hero-fullstack.jpg";
import heroUxDesignImg from "../../assets/optimized/education/skillforge/hero-uxdesign.jpg";
import heroDataImg from "../../assets/optimized/education/skillforge/hero-data.jpg";
import heroCloudImg from "../../assets/optimized/education/skillforge/hero-cloud.jpg";
import instructorAanyaImg from "../../assets/optimized/education/skillforge/instructor-aanya.jpg";
import instructorArjunImg from "../../assets/optimized/education/skillforge/instructor-arjun.jpg";
import instructorRitikaImg from "../../assets/optimized/education/skillforge/instructor-ritika.jpg";
import instructorKaranImg from "../../assets/optimized/education/skillforge/instructor-karan.jpg";
import studentRohitImg from "../../assets/optimized/education/skillforge/student-rohit.jpg";
import studentMeghaImg from "../../assets/optimized/education/skillforge/student-megha.jpg";
import studentVikramImg from "../../assets/optimized/education/skillforge/student-vikram.jpg";
import bannerTeamImg from "../../assets/optimized/education/skillforge/banner-team.jpg";

// Custom LinkedIn SVG Icon
function LinkedInIcon({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

// Hero Carousel Dataset (4 Flagship Tracks)
const heroSlides = [
  {
    id: "fullstack",
    category: "Full-Stack & AI",
    trackLabel: "Track 01 • Engineering",
    title: "Architect and Ship Production-Grade Web & AI Systems",
    desc: "Build next-generation applications with React 19, TypeScript, scalable Node microservices, and live autonomous LLM agent pipelines.",
    stats: [
      { label: "Placement Rate", value: "94%" },
      { label: "Avg Salary Hike", value: "+$44,000" },
      { label: "Cohort Size", value: "Max 12" },
    ],
    img: heroFullstackImg,
    leadMentor: "Karan Verma (Staff Architect, ex-Swiggy)",
    liveTopic: "Streaming Next.js 15 & LLM Token Chains",
    accentColor: "#ff4d2e",
  },
  {
    id: "uxdesign",
    category: "Product & UX Design",
    trackLabel: "Track 02 • Design",
    title: "Design High-Impact Systems and Seamless Digital Experiences",
    desc: "Master end-to-end UX research, multi-brand Figma token libraries, rapid prototyping, and design system governance for high-growth tech products.",
    stats: [
      { label: "Hired at Top Tech", value: "89%" },
      { label: "Shipped Projects", value: "4 Capstones" },
      { label: "Figma Mastery", value: "100%" },
    ],
    img: heroUxDesignImg,
    leadMentor: "Aanya Sharma (Design Lead, ex-Microsoft)",
    liveTopic: "Multi-Brand Variable Tokens & Micro-Interactions",
    accentColor: "#8b5cf6",
  },
  {
    id: "data",
    category: "Data Science & AI",
    trackLabel: "Track 03 • Analytics",
    title: "Turn Complex Datasets into Executive Action & Insights",
    desc: "Command production SQL, Python scientific stacks, machine learning predictive models, and high-impact automated business intelligence dashboards.",
    stats: [
      { label: "Promotion Rate", value: "88%" },
      { label: "Real Datasets", value: "6 Live Sprints" },
      { label: "Avg Comp Hike", value: "+46%" },
    ],
    img: heroDataImg,
    leadMentor: "Arjun Mehta (Principal Data Scientist, ex-Google)",
    liveTopic: "Real-Time Churn Telemetry with XGBoost",
    accentColor: "#06b6d4",
  },
  {
    id: "cloud",
    category: "Cloud DevOps",
    trackLabel: "Track 04 • Infrastructure",
    title: "Scale Resilient Multi-Cloud Systems with Kubernetes",
    desc: "Architect zero-downtime microservices on AWS, automate infrastructure with Terraform, and build hardened continuous delivery deployment engines.",
    stats: [
      { label: "AWS Certified", value: "98%" },
      { label: "Uptime Focus", value: "99.99%" },
      { label: "Avg Compensation", value: "$165k" },
    ],
    img: heroCloudImg,
    leadMentor: "Ritika Bansal (Infrastructure Lead, ex-Adobe)",
    liveTopic: "Zero-Downtime Canary Kubernetes Deployments",
    accentColor: "#f59e0b",
  },
];

// Programs Dataset with category keys
const programsData = [
  {
    id: "fullstack-ai",
    title: "Full-Stack Web & AI Engineering",
    category: "Engineering",
    icon: Code2,
    color: "#ff4d2e",
    badge: "Most Popular",
    desc: "Master modern full-stack development with Next.js 15, TypeScript, distributed databases, and generative AI APIs.",
    duration: "14 Weeks",
    level: "Intermediate",
    nextStart: "July 7, 2026",
    topics: ["Next.js 15 App Router & Server Actions", "PostgreSQL & Prisma ORM", "LangChain & LLM Agent Integration", "Docker Containerization & CI/CD"],
    salaryBoost: "+46% Average Hike",
  },
  {
    id: "ux-design",
    title: "UX & Product Design Systems",
    category: "Design",
    icon: Layout,
    color: "#8b5cf6",
    badge: "Design",
    desc: "Design user-centered digital experiences and build scalable enterprise design systems in Figma.",
    duration: "12 Weeks",
    level: "All Levels",
    nextStart: "July 12, 2026",
    topics: ["User Research & Qualitative Personas", "Figma Variables & Token Architecture", "Interactive Component Prototyping", "Usability Testing & Design Handoff"],
    salaryBoost: "+44% Average Hike",
  },
  {
    id: "data-analytics",
    title: "Data Analytics & AI Storytelling",
    category: "Data",
    icon: BarChart3,
    color: "#06b6d4",
    badge: "Analytics",
    desc: "Analyze business metrics, build real-time executive dashboards, and drive commercial decisions.",
    duration: "10 Weeks",
    level: "Beginner",
    nextStart: "July 15, 2026",
    topics: ["Advanced SQL & Data Warehouse Querying", "Python Pandas & NumPy Analytics", "Tableau & PowerBI Dashboards", "Statistical Hypothesis Testing"],
    salaryBoost: "+42% Average Hike",
  },
  {
    id: "cloud-devops",
    title: "Cloud Architecture & DevOps",
    category: "Engineering",
    icon: Cpu,
    color: "#f59e0b",
    badge: "Cloud",
    desc: "Architect scalable multi-region cloud infrastructure and automate bulletproof deployment pipelines.",
    duration: "12 Weeks",
    level: "Intermediate",
    nextStart: "July 18, 2026",
    topics: ["AWS Core Solutions Architecture", "Kubernetes & Docker Microservices", "Terraform Infrastructure as Code", "Production Observability & Grafana"],
    salaryBoost: "+50% Average Hike",
  },
  {
    id: "product-management",
    title: "Technical Product Management",
    category: "Product",
    icon: Target,
    color: "#3b82f6",
    badge: "Management",
    desc: "Learn to build high-growth products users love, write technical specs, and lead cross-functional engineering teams.",
    duration: "12 Weeks",
    level: "Intermediate",
    nextStart: "July 20, 2026",
    topics: ["PRD & Strategic Roadmap Design", "Agile Sprints & Release Engineering", "Product Analytics, A/B Testing & Funnels", "Executive Stakeholder Alignment"],
    salaryBoost: "+48% Average Hike",
  },
  {
    id: "ai-automation",
    title: "AI Automation & Applied LLMs",
    category: "Engineering",
    icon: Zap,
    color: "#10b981",
    badge: "AI & ML",
    desc: "Build autonomous software workflows, custom RAG search pipelines, and enterprise AI automation agents.",
    duration: "8 Weeks",
    level: "All Levels",
    nextStart: "July 22, 2026",
    topics: ["Retrieval-Augmented Generation (RAG)", "Vector Databases (Pinecone & pgvector)", "Autonomous Agent Frameworks", "API Cost & Latency Optimization"],
    salaryBoost: "+45% Average Hike",
  },
];

// Instructors Dataset
const instructorsData = [
  {
    name: "Aanya Sharma",
    role: "Head of UX & Design Systems",
    company: "Figma Partner & ex-Microsoft",
    exp: "10+ Yrs Exp",
    img: instructorAanyaImg,
    skills: ["Figma Systems", "UX Research", "Design Tokens"],
    bio: "Pioneered component token architecture used by thousands of designers. Passionate about empowering designers to build scalable products.",
  },
  {
    name: "Arjun Mehta",
    role: "Principal Data Scientist",
    company: "ex-Google & Uber Lead",
    exp: "11+ Yrs Exp",
    img: instructorArjunImg,
    skills: ["Python ML", "Predictive Analytics", "SQL Optimization"],
    bio: "Led predictive algorithms teams for high-traffic real-time applications. Specializes in translating heavy math into intuitive visual models.",
  },
  {
    name: "Ritika Bansal",
    role: "VP of Product Management",
    company: "ex-Adobe & Stripe Mentor",
    exp: "12+ Yrs Exp",
    img: instructorRitikaImg,
    skills: ["Product Roadmap", "Growth Funnels", "Technical Specs"],
    bio: "Scaled product teams from Series A to enterprise scale. Trained over 400 PMs who now lead product units globally.",
  },
  {
    name: "Karan Verma",
    role: "Staff Cloud & Full-Stack Architect",
    company: "ex-Razorpay & Swiggy Lead",
    exp: "9+ Yrs Exp",
    img: instructorKaranImg,
    skills: ["Next.js 15", "Distributed Systems", "Kubernetes"],
    bio: "Deep-tech full-stack architect who designed real-time transaction engines handling millions of daily concurrent requests.",
  },
];

// Testimonials Dataset with Real Portraits
const testimonialsData = [
  {
    name: "Rohit Nair",
    role: "Senior Product Designer at Stripe",
    prevRole: "Junior Graphic Designer",
    img: studentRohitImg,
    quote: "SkillForge’s UX Design workshop gave me a comprehensive, production-ready design systems case study that directly landed me senior interviews. The 1:1 mentor critique is unmatched.",
    stars: 5,
    outcome: "+$48k Compensation Boost",
  },
  {
    name: "Megha Patel",
    role: "Lead Data Analyst at Spotify",
    prevRole: "Operations Specialist",
    img: studentMeghaImg,
    quote: "The hands-on project sprints and real-world SQL datasets gave me the exact confidence I needed. Within 8 weeks of graduating, I transitioned into a full-time analytics role.",
    stars: 5,
    outcome: "Promoted to Lead Analyst",
  },
  {
    name: "Vikram Malhotra",
    role: "Senior Frontend Engineer at Linear",
    prevRole: "Freelance Web Developer",
    img: studentVikramImg,
    quote: "Going deep into Next.js architecture, TypeScript patterns, and LLM integrations completely transformed my career trajectory. Best learning investment I've ever made.",
    stars: 5,
    outcome: "+52% Compensation Jump",
  },
];

// 4-Phase Curriculum Sprints
const curriculumPhases = [
  {
    phase: "Phase 01",
    title: "Foundations & Mental Models",
    weeks: "Weeks 1–4",
    desc: "Deconstruct core architecture, establish engineering standards, configure developer toolchains, and build foundational domain muscle memory.",
    output: "Shipped Deliverable: Baseline Architecture Blueprint",
  },
  {
    phase: "Phase 02",
    title: "Deep Dives & Applied Sprints",
    weeks: "Weeks 5–8",
    desc: "Tackle real production constraints: asynchronous state, performance profiling, security standards, and cross-functional team workflows.",
    output: "Shipped Deliverable: End-to-End Functional Micro-Project",
  },
  {
    phase: "Phase 03",
    title: "Enterprise Systems & Scale",
    weeks: "Weeks 9–12",
    desc: "Deploy automated testing suites, integrate third-party APIs, configure CI/CD pipelines, and optimize latency under simulated load.",
    output: "Shipped Deliverable: Full-Scale Capstone Application",
  },
  {
    phase: "Phase 04",
    title: "Portfolio Curation & Hiring Sprints",
    weeks: "Weeks 13–14",
    desc: "1:1 career advisory sessions, live technical mock interviews, GitHub/Figma portfolio teardowns, and direct referrals to hiring partners.",
    output: "Shipped Deliverable: Verified Industry Credential & Career Pack",
  },
];

// FAQs Dataset
const faqsData = [
  {
    q: "Who are these workshops designed for?",
    a: "Our programs are crafted specifically for working professionals, aspiring engineers, career switchers, and designers who want practical, production-level skills rather than surface-level theory.",
  },
  {
    q: "How does the live workshop schedule fit around full-time jobs?",
    a: "All live cohort sessions are held on weekday evenings (7:00 PM – 9:00 PM EST) or weekend mornings. All sessions are recorded in 4K with searchable AI transcripts and GitHub repos available within 2 hours.",
  },
  {
    q: "What makes SkillForge different from traditional bootcamps?",
    a: "Unlike generic 50-student lecture halls, SkillForge caps cohorts at 12 students per lead mentor. You work on production-level projects with 1:1 weekly code and design critiques from staff engineers at top tech firms.",
  },
  {
    q: "What is your refund and satisfaction guarantee?",
    a: "We offer a 100% no-questions-asked 14-day money-back guarantee. If you attend the first two weeks and decide the program isn't the right fit, you receive an immediate, full refund.",
  },
  {
    q: "Will I receive career placement support?",
    a: "Yes! Every student gets dedicated access to our career advisory team for resume reviews, portfolio audits, mock behavioral and technical interviews, and warm introductions to our 300+ hiring partner network.",
  },
];

export function SkillForge() {
  // Navigation & Scroll State
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#programs");

  // Hero Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  // Program Category Filter
  const [selectedCategory, setSelectedCategory] = useState("All");

  // ROI Calculator State
  const [currentSalary, setCurrentSalary] = useState(68000);
  const [calcTrack, setCalcTrack] = useState<"Full-Stack & AI" | "Product & UX" | "Data Science" | "Cloud DevOps">("Full-Stack & AI");

  // Pricing & Schedule Toggles
  const [pricingCycle, setPricingCycle] = useState<"monthly" | "upfront">("monthly");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Modals
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isAdvisingOpen, setIsAdvisingOpen] = useState(false);
  const [selectedInstructor, setSelectedInstructor] = useState<any | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form Data
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "Full-Stack Web & AI Engineering",
    experience: "1-3 Years",
    targetGoal: "Career Switch",
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Hero Carousel Auto-Play Timer
  useEffect(() => {
    if (isCarouselPaused) return;

    const interval = 55; // 5.5 seconds total
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((slide) => (slide + 1) % heroSlides.length);
          return 0;
        }
        return prev + 1;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [isCarouselPaused, currentSlide]);

  const handleManualSlideChange = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    setProgress(0);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setProgress(0);
  };

  // Sticky navbar listener & scrollspy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["top", "programs", "roi", "curriculum", "instructors", "outcomes", "pricing", "faq"];
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
        if (isApplyOpen) setIsApplyOpen(false);
        if (isAdvisingOpen) setIsAdvisingOpen(false);
        if (selectedInstructor) setSelectedInstructor(null);
      }
    };

    if (mobileMenuOpen || isApplyOpen || isAdvisingOpen || selectedInstructor) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, isApplyOpen, isAdvisingOpen, selectedInstructor]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveNav(href);
    setMobileMenuOpen(false);

    const targetId = href.substring(1);
    if (targetId === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
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
      setIsAdvisingOpen(false);
    }, 2800);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSuccess(true);
    setTimeout(() => setNewsletterSuccess(false), 3500);
    setNewsletterEmail("");
  };

  // ROI Computations
  const multiplier = calcTrack === "Full-Stack & AI" ? 1.48 : calcTrack === "Cloud DevOps" ? 1.52 : calcTrack === "Product & UX" ? 1.44 : 1.42;
  const projectedSalary = Math.round(currentSalary * multiplier);
  const salaryIncrease = projectedSalary - currentSalary;
  const tuitionCost = 3450;
  const paybackMonths = Math.max(1, ((tuitionCost / (salaryIncrease / 12))).toFixed(1));

  // Filtered Programs
  const filteredPrograms = programsData.filter((p) => {
    if (selectedCategory === "All") return true;
    return p.category === selectedCategory;
  });

  const activeSlideData = heroSlides[currentSlide];

  return (
    <main className="sf-app" id="top" tabIndex={-1}>
      {/* Sticky Header Navbar */}
      <header className={`sf-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="sf-wrap sf-nav-container">
          {/* Brand Logo */}
          <a
            href="#top"
            className="sf-brand"
            onClick={(e) => handleNavClick(e, "#top")}
            aria-label="SkillForge Workshops Home"
          >
            <div className="sf-logo-icon">
              <Flame size={20} className="icon-flame" />
            </div>
            <div className="sf-brand-text">
              <span className="sf-brand-title">SkillForge</span>
              <span className="sf-brand-sub">WORKSHOPS</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="sf-nav-links" aria-label="Main Navigation">
            {[
              { name: "Programs", href: "#programs" },
              { name: "ROI Calculator", href: "#roi" },
              { name: "Curriculum", href: "#curriculum" },
              { name: "Instructors", href: "#instructors" },
              { name: "Outcomes", href: "#outcomes" },
              { name: "Pricing", href: "#pricing" },
              { name: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`sf-nav-link ${activeNav === link.href ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="sf-nav-actions">
            <button
              onClick={() => setIsApplyOpen(true)}
              className="sf-btn-flame sf-nav-cta"
              aria-label="Apply to upcoming cohort"
            >
              <span>Apply Now</span>
              <ArrowUpRight size={15} />
            </button>

            <button
              className="sf-mobile-toggle"
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
        className={`sf-mobile-overlay ${mobileMenuOpen ? "visible" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`sf-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="sf-drawer-top">
          <div className="sf-brand">
            <div className="sf-logo-icon">
              <Flame size={18} />
            </div>
            <span className="sf-brand-title">SkillForge</span>
          </div>
          <button
            className="sf-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="sf-drawer-body">
          <div className="sf-drawer-links">
            {[
              { name: "Featured Programs", href: "#programs" },
              { name: "Salary ROI Calculator", href: "#roi" },
              { name: "Curriculum Roadmap", href: "#curriculum" },
              { name: "Industry Mentors", href: "#instructors" },
              { name: "Alumni Outcomes", href: "#outcomes" },
              { name: "Pricing & Plans", href: "#pricing" },
              { name: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="sf-drawer-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} />
              </a>
            ))}
          </div>

          <div className="sf-drawer-footer">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsApplyOpen(true);
              }}
              className="sf-btn-flame full-w"
            >
              <span>Apply to Cohort</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* ==========================================================================
          HERO SECTION WITH MULTI-SLIDE INTERACTIVE CAROUSEL
          ========================================================================== */}
      <section
        className="sf-hero-section"
        onMouseEnter={() => setIsCarouselPaused(true)}
        onMouseLeave={() => setIsCarouselPaused(false)}
      >
        <div className="sf-hero-grid-pattern" />

        <div className="sf-wrap">
          {/* Top Track Selector Pills */}
          <div className="sf-carousel-track-tabs">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                className={`sf-track-tab-btn ${currentSlide === idx ? "active" : ""}`}
                onClick={() => handleManualSlideChange(idx)}
              >
                <span
                  className="sf-tab-dot"
                  style={{
                    backgroundColor: currentSlide === idx ? slide.accentColor : "transparent",
                    boxShadow: currentSlide === idx ? `0 0 8px ${slide.accentColor}` : "none",
                  }}
                />
                <span>{slide.category}</span>
              </button>
            ))}
          </div>

          {/* Active Carousel Slide */}
          <div className="sf-carousel-slide">
            {/* Left Copy */}
            <div className="sf-carousel-copy">
              <div className="sf-eyebrow">
                <Sparkles size={13} />
                <span>{activeSlideData.trackLabel}</span>
              </div>

              <h1 className="sf-hero-title">
                {activeSlideData.title}
              </h1>

              <p className="sf-hero-desc">
                {activeSlideData.desc}
              </p>

              {/* Slide Key Stats Row */}
              <div className="sf-slide-stats-row">
                {activeSlideData.stats.map((s) => (
                  <div key={s.label} className="sf-slide-stat-item">
                    <strong>{s.value}</strong>
                    <span>{s.label}</span>
                  </div>
                ))}
              </div>

              <div className="sf-hero-buttons">
                <a
                  href="#programs"
                  onClick={(e) => handleNavClick(e, "#programs")}
                  className="sf-btn-flame"
                >
                  <span>Explore Track Curriculum</span>
                  <ArrowRight size={16} />
                </a>

                <button
                  onClick={() => setIsAdvisingOpen(true)}
                  className="sf-btn-glass"
                >
                  <span>Book Free 1:1 Syllabus Call</span>
                  <Phone size={15} />
                </button>
              </div>
            </div>

            {/* Right Visual Canvas */}
            <div className="sf-carousel-canvas">
              <div className="sf-canvas-card">
                <img
                  src={activeSlideData.img}
                  alt={activeSlideData.title}
                  className="sf-canvas-img"
                />
                <div className="sf-canvas-overlay" />

                {/* Floating Live Studio Status Card */}
                <div className="sf-canvas-float-bottom">
                  <div className="sf-float-status-bar">
                    <span className="sf-badge-streaming">
                      <span className="sf-pulse-dot" />
                      <span>Live Cohort Studio</span>
                    </span>
                    <span className="sf-float-mentor">{activeSlideData.leadMentor}</span>
                  </div>
                  <div className="sf-float-topic">
                    {activeSlideData.liveTopic}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Bottom Control Strip */}
          <div className="sf-carousel-bottom-strip">
            <div className="sf-carousel-nav-arrows">
              <button
                className="sf-carousel-arrow-btn"
                onClick={handlePrevSlide}
                aria-label="Previous slide"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                className="sf-carousel-arrow-btn"
                onClick={handleNextSlide}
                aria-label="Next slide"
              >
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="sf-carousel-progress-track">
              <div
                className="sf-carousel-progress-bar"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="sf-carousel-indicators-count">
              <span>0{currentSlide + 1} / 0{heroSlides.length}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          FEATURED WORKSHOP PROGRAMS (WITH REAL-TIME CATEGORY FILTER)
          ========================================================================== */}
      <section className="sf-section" id="programs">
        <div className="sf-wrap">
          <div className="sf-section-header text-center">
            <div className="sf-badge-pill">
              <BookOpen size={13} />
              <span>Flagship Curriculums</span>
            </div>
            <h2 className="sf-section-title">Job-Ready Technical Workshops</h2>
            <p className="sf-section-desc">
              Taught live by staff-level engineers and design leaders. Small cohort sizes, real production codebases, and portfolio deliverables.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="sf-category-filters">
            {["All", "Engineering", "Design", "Data", "Product"].map((cat) => (
              <button
                key={cat}
                className={`sf-filter-btn ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat === "All" ? "All Workshops" : cat}
              </button>
            ))}
          </div>

          {/* Programs Grid */}
          <div className="sf-programs-grid">
            {filteredPrograms.map((prog) => {
              const Icon = prog.icon;

              return (
                <article key={prog.id} className="sf-program-card">
                  <div>
                    <div className="sf-program-card-header">
                      <div
                        className="sf-program-icon-box"
                        style={{ background: prog.color }}
                      >
                        <Icon size={24} />
                      </div>
                      <span className="sf-program-tag">{prog.badge}</span>
                    </div>

                    <h3 className="sf-program-title">{prog.title}</h3>
                    <p className="sf-program-desc">{prog.desc}</p>

                    <div className="sf-program-topics-list">
                      {prog.topics.map((t) => (
                        <div key={t} className="sf-topic-item">
                          <Check size={14} />
                          <span>{t}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="sf-program-footer">
                    <span className="sf-salary-boost-pill">
                      <TrendingUp size={14} />
                      <span>{prog.salaryBoost}</span>
                    </span>

                    <button
                      onClick={() => {
                        setApplicationForm({
                          ...applicationForm,
                          program: prog.title,
                        });
                        setIsApplyOpen(true);
                      }}
                      className="sf-program-cta-btn"
                    >
                      <span>Enroll</span>
                      <ArrowRight size={13} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          INTERACTIVE TUITION & SALARY ROI CALCULATOR
          ========================================================================== */}
      <section className="sf-roi-section" id="roi">
        <div className="sf-wrap">
          <div className="sf-roi-box">
            {/* Left Controls */}
            <div className="sf-roi-controls">
              <div className="sf-badge-pill">
                <BarChart3 size={13} />
                <span>Career ROI Simulator</span>
              </div>
              <h3>Calculate Your Projected Compensation Boost</h3>
              <p>
                See how completing a live project-based SkillForge workshop impacts your market value across hiring partners.
              </p>

              {/* Salary Slider */}
              <div className="sf-slider-group">
                <div className="sf-slider-header">
                  <label>Current Annual Compensation</label>
                  <strong className="sf-slider-val">${currentSalary.toLocaleString()}</strong>
                </div>
                <input
                  type="range"
                  min="45000"
                  max="140000"
                  step="2500"
                  value={currentSalary}
                  onChange={(e) => setCurrentSalary(Number(e.target.value))}
                  className="sf-range-slider"
                />
              </div>

              {/* Target Track */}
              <div className="sf-roi-track-selector-title">Select Target Track</div>
              <div className="sf-roi-tracks-row">
                {(["Full-Stack & AI", "Product & UX", "Data Science", "Cloud DevOps"] as const).map((track) => (
                  <button
                    key={track}
                    className={`sf-roi-track-pill ${calcTrack === track ? "active" : ""}`}
                    onClick={() => setCalcTrack(track)}
                  >
                    {track}
                  </button>
                ))}
              </div>
            </div>

            {/* Right Output Dashboard */}
            <div className="sf-roi-results-card">
              <div className="sf-roi-metric-main">
                <small>Projected Post-Workshop Salary</small>
                <h4>${projectedSalary.toLocaleString()}</h4>
              </div>

              <div className="sf-roi-submetrics-grid">
                <div className="sf-roi-subitem">
                  <small>Annual Increase</small>
                  <strong className="text-emerald">+${salaryIncrease.toLocaleString()}</strong>
                </div>
                <div className="sf-roi-subitem">
                  <small>ROI Payback Window</small>
                  <strong>{paybackMonths} Months</strong>
                </div>
              </div>

              <button
                onClick={() => setIsApplyOpen(true)}
                className="sf-btn-flame full-w"
              >
                <span>Unlock Your Career Growth</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          4-PHASE CURRICULUM SPRINT ROADMAP
          ========================================================================== */}
      <section className="sf-section darker-bg" id="curriculum">
        <div className="sf-wrap">
          <div className="sf-section-header text-center">
            <div className="sf-badge-pill">
              <Layers size={13} />
              <span>Sprint Methodology</span>
            </div>
            <h2 className="sf-section-title">From Concept to Shipped Product</h2>
            <p className="sf-section-desc">
              Every workshop follows a structured 4-phase sprint cycle designed around real engineering team deliverables.
            </p>
          </div>

          <div className="sf-curriculum-grid">
            {curriculumPhases.map((phase) => (
              <div key={phase.phase} className="sf-phase-card">
                <div>
                  <div className="sf-phase-badge">{phase.phase} • {phase.weeks}</div>
                  <h3 className="sf-phase-title">{phase.title}</h3>
                  <p className="sf-phase-desc">{phase.desc}</p>
                </div>
                <div className="sf-phase-output">
                  {phase.output}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          INDUSTRY INSTRUCTORS SHOWCASE
          ========================================================================== */}
      <section className="sf-section" id="instructors">
        <div className="sf-wrap">
          <div className="sf-section-header text-center">
            <div className="sf-badge-pill">
              <Users size={13} />
              <span>Elite Practitioners</span>
            </div>
            <h2 className="sf-section-title">Learn from Staff Engineers & Design Leads</h2>
            <p className="sf-section-desc">
              Our instructors hold principal and leadership roles at top tech companies. No full-time academics — only practicing builders.
            </p>
          </div>

          <div className="sf-instructors-grid">
            {instructorsData.map((inst) => (
              <div
                key={inst.name}
                className="sf-instructor-card"
                onClick={() => setSelectedInstructor(inst)}
                style={{ cursor: "pointer" }}
              >
                <div className="sf-inst-img-container">
                  <img
                    src={inst.img}
                    alt={inst.name}
                    className="sf-inst-img"
                  />
                </div>
                <div className="sf-inst-body">
                  <h3 className="sf-inst-name">{inst.name}</h3>
                  <span className="sf-inst-role">{inst.role}</span>
                  <span className="sf-inst-company">{inst.company} • {inst.exp}</span>
                  <div className="sf-inst-skills-row">
                    {inst.skills.map((s) => (
                      <span key={s} className="sf-inst-skill-pill">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          ALUMNI OUTCOMES & REVIEWS
          ========================================================================== */}
      <section className="sf-section darker-bg" id="outcomes">
        <div className="sf-wrap">
          <div className="sf-section-header text-center">
            <div className="sf-badge-pill">
              <Trophy size={13} />
              <span>Verified Results</span>
            </div>
            <h2 className="sf-section-title">Real Alumni, Real Career Leaps</h2>
            <p className="sf-section-desc">
              Over 1,200 alumni have elevated their careers, received promotions, or transitioned into high-growth product teams.
            </p>
          </div>

          <div className="sf-outcomes-grid">
            {testimonialsData.map((t) => (
              <div key={t.name} className="sf-outcome-card">
                <div className="sf-alumni-head">
                  <img
                    src={t.img}
                    alt={t.name}
                    className="sf-alumni-avatar"
                  />
                  <div className="sf-alumni-meta">
                    <strong>{t.name}</strong>
                    <small>{t.role}</small>
                  </div>
                </div>

                <span className="sf-outcome-badge">{t.outcome}</span>

                <p className="sf-alumni-quote">
                  “{t.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          PRICING & TUITION PLANS
          ========================================================================== */}
      <section className="sf-section" id="pricing">
        <div className="sf-wrap">
          <div className="sf-section-header text-center">
            <div className="sf-badge-pill">
              <Zap size={13} />
              <span>Transparent Tuition</span>
            </div>
            <h2 className="sf-section-title">Invest in High-Leverage Skills</h2>
            <p className="sf-section-desc">
              Transparent cohort pricing with 0% interest monthly installments and employer reimbursement support.
            </p>
          </div>

          <div className="sf-pricing-grid">
            {/* Starter Track */}
            <div className="sf-pricing-card">
              <div>
                <h3>Self-Paced Workshop</h3>
                <p className="sf-section-desc">Access to lecture recordings, repo projects, and community Discord.</p>
                <div className="sf-price-val">$850 <small>/ one-time</small></div>
                <div className="sf-program-topics-list">
                  <div className="sf-topic-item"><Check size={14} /> Full 4K Lecture Recordings</div>
                  <div className="sf-topic-item"><Check size={14} /> GitHub Starter Repos & Codebases</div>
                  <div className="sf-topic-item"><Check size={14} /> Discord Alumni Community</div>
                </div>
              </div>
              <button
                onClick={() => setIsApplyOpen(true)}
                className="sf-btn-glass full-w"
              >
                Enroll Self-Paced
              </button>
            </div>

            {/* Flagship Live Cohort */}
            <div className="sf-pricing-card featured">
              <span className="sf-pricing-badge-popular">Most Popular Cohort</span>
              <div>
                <h3>Live Immersive Workshop</h3>
                <p className="sf-section-desc">Live bi-weekly evening classes, 1:1 mentor code reviews, and capstone project.</p>
                <div className="sf-price-val">$2,450 <small>/ full cohort</small></div>
                <div className="sf-program-topics-list">
                  <div className="sf-topic-item"><Check size={14} /> 14 Weeks of Live Evening Sprints</div>
                  <div className="sf-topic-item"><Check size={14} /> Bi-Weekly 1:1 Staff Mentor Reviews</div>
                  <div className="sf-topic-item"><Check size={14} /> Enterprise Capstone & Portfolio Review</div>
                  <div className="sf-topic-item"><Check size={14} /> 300+ Hiring Partner Referrals</div>
                </div>
              </div>
              <button
                onClick={() => setIsApplyOpen(true)}
                className="sf-btn-flame full-w"
              >
                Apply for Next Cohort
              </button>
            </div>

            {/* Enterprise / Corporate */}
            <div className="sf-pricing-card">
              <div>
                <h3>Team & Enterprise Pack</h3>
                <p className="sf-section-desc">Upskill product, design, or engineering teams with customized live sprints.</p>
                <div className="sf-price-val">$4,900 <small>/ team of 3+</small></div>
                <div className="sf-program-topics-list">
                  <div className="sf-topic-item"><Check size={14} /> Custom Tailored Team Syllabus</div>
                  <div className="sf-topic-item"><Check size={14} /> Private Dedicated Mentor Office Hours</div>
                  <div className="sf-topic-item"><Check size={14} /> Direct Executive Progress Reports</div>
                </div>
              </div>
              <button
                onClick={() => setIsAdvisingOpen(true)}
                className="sf-btn-glass full-w"
              >
                Book Team Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================================================
          FREQUENTLY ASKED QUESTIONS
          ========================================================================== */}
      <section className="sf-section darker-bg" id="faq">
        <div className="sf-wrap">
          <div className="sf-section-header text-center">
            <div className="sf-badge-pill">
              <HelpCircle size={13} />
              <span>Clear Answers</span>
            </div>
            <h2 className="sf-section-title">Frequently Asked Questions</h2>
            <p className="sf-section-desc">
              Everything you need to know about class pacing, equipment requirements, and career guarantees.
            </p>
          </div>

          <div className="sf-faqs-wrap">
            {faqsData.map((faq, idx) => (
              <div
                key={faq.q}
                className={`sf-faq-item ${activeFaq === idx ? "open" : ""}`}
              >
                <button
                  className="sf-faq-question-btn"
                  onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    size={18}
                    style={{
                      transform: activeFaq === idx ? "rotate(180deg)" : "rotate(0deg)",
                      transition: "transform 0.2s ease",
                    }}
                  />
                </button>
                {activeFaq === idx && (
                  <div className="sf-faq-answer">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================================================
          FOOTER
          ========================================================================== */}
      <footer className="sf-footer">
        <div className="sf-wrap">
          <div className="sf-footer-content">
            <div className="sf-footer-col">
              <div className="sf-brand" style={{ marginBottom: "16px" }}>
                <div className="sf-logo-icon">
                  <Flame size={18} />
                </div>
                <div className="sf-brand-text">
                  <span className="sf-brand-title">SkillForge</span>
                  <span className="sf-brand-sub">WORKSHOPS</span>
                </div>
              </div>
              <p className="sf-section-desc" style={{ fontSize: "14px" }}>
                Live technical and product design workshops taught by staff engineers and leaders. Real code, real design systems, and measurable career advancement.
              </p>
            </div>

            <div className="sf-footer-col">
              <h4>Programs</h4>
              <ul>
                <li><a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Full-Stack & AI</a></li>
                <li><a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>UX Design Systems</a></li>
                <li><a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Data Analytics</a></li>
                <li><a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Cloud DevOps</a></li>
              </ul>
            </div>

            <div className="sf-footer-col">
              <h4>Platform</h4>
              <ul>
                <li><a href="#curriculum" onClick={(e) => handleNavClick(e, "#curriculum")}>Curriculum</a></li>
                <li><a href="#instructors" onClick={(e) => handleNavClick(e, "#instructors")}>Mentors</a></li>
                <li><a href="#outcomes" onClick={(e) => handleNavClick(e, "#outcomes")}>Alumni Stories</a></li>
                <li><a href="#pricing" onClick={(e) => handleNavClick(e, "#pricing")}>Tuition & Plans</a></li>
              </ul>
            </div>

            <div className="sf-footer-col">
              <h4>Admissions Hotline</h4>
              <p className="sf-section-desc" style={{ fontSize: "14px", marginBottom: "12px" }}>
                Speak directly with an admissions advisor regarding course prerequisites and tuition plans.
              </p>
              <div style={{ color: "#ffffff", fontWeight: 700, fontSize: "15px", marginBottom: "8px" }}>
                ☎ (800) 555-FORGE
              </div>
              <div style={{ color: "var(--sf-flame)", fontSize: "13px" }}>
                ✉ admissions@skillforgeworkshops.com
              </div>
            </div>
          </div>

          <div className="sf-footer-bottom">
            <span>© 2026 SkillForge Workshops LLC. All rights reserved.</span>
            <span>Terms of Service • Privacy Policy • Security Whitepaper</span>
          </div>
        </div>
      </footer>

      {/* ==========================================================================
          APPLICATION MODAL
          ========================================================================== */}
      {isApplyOpen && (
        <div
          className="sf-modal-backdrop"
          onClick={() => setIsApplyOpen(false)}
        >
          <div
            className="sf-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="sf-modal-close-btn"
              onClick={() => setIsApplyOpen(false)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {!formSubmitted ? (
              <>
                <h2>Apply for Upcoming Cohort</h2>
                <p>Limited to 12 students per track. Reserve your seat and receive the detailed syllabus.</p>

                <form onSubmit={handleFormSubmit}>
                  <div className="sf-form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Rivera"
                      value={applicationForm.name}
                      onChange={(e) => setApplicationForm({ ...applicationForm, name: e.target.value })}
                    />
                  </div>

                  <div className="sf-form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={applicationForm.email}
                      onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                    />
                  </div>

                  <div className="sf-form-group">
                    <label>Selected Workshop Track</label>
                    <select
                      value={applicationForm.program}
                      onChange={(e) => setApplicationForm({ ...applicationForm, program: e.target.value })}
                    >
                      {programsData.map((p) => (
                        <option key={p.id} value={p.title}>{p.title}</option>
                      ))}
                    </select>
                  </div>

                  <button type="submit" className="sf-btn-flame full-w" style={{ marginTop: "12px" }}>
                    <span>Submit Cohort Application</span>
                    <ArrowUpRight size={16} />
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <CheckCircle2 size={54} color="var(--sf-emerald)" style={{ marginBottom: "16px" }} />
                <h2>Application Received!</h2>
                <p>We've sent the syllabus and placement call link to <strong>{applicationForm.email}</strong>.</p>
                <button
                  onClick={() => setIsApplyOpen(false)}
                  className="sf-btn-flame"
                  style={{ marginTop: "10px" }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==========================================================================
          ADVISING CALL MODAL
          ========================================================================== */}
      {isAdvisingOpen && (
        <div
          className="sf-modal-backdrop"
          onClick={() => setIsAdvisingOpen(false)}
        >
          <div
            className="sf-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="sf-modal-close-btn"
              onClick={() => setIsAdvisingOpen(false)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            {!formSubmitted ? (
              <>
                <h2>Book a 1:1 Syllabus Advising Call</h2>
                <p>15-minute diagnostic call with an advisor to evaluate prerequisites and cohort alignment.</p>

                <form onSubmit={handleFormSubmit}>
                  <div className="sf-form-group">
                    <label>Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Jordan Lee"
                      value={applicationForm.name}
                      onChange={(e) => setApplicationForm({ ...applicationForm, name: e.target.value })}
                    />
                  </div>

                  <div className="sf-form-group">
                    <label>Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="jordan@example.com"
                      value={applicationForm.email}
                      onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                    />
                  </div>

                  <div className="sf-form-group">
                    <label>Phone *</label>
                    <input
                      type="tel"
                      required
                      placeholder="(555) 000-0000"
                      value={applicationForm.phone}
                      onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="sf-btn-flame full-w" style={{ marginTop: "12px" }}>
                    <span>Confirm Free Advising Call</span>
                    <Phone size={15} />
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: "center", padding: "20px 0" }}>
                <CheckCircle2 size={54} color="var(--sf-emerald)" style={{ marginBottom: "16px" }} />
                <h2>Advising Call Scheduled!</h2>
                <p>We've dispatched calendar invitations to <strong>{applicationForm.email}</strong>.</p>
                <button
                  onClick={() => setIsAdvisingOpen(false)}
                  className="sf-btn-flame"
                  style={{ marginTop: "10px" }}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ==========================================================================
          INSTRUCTOR PROFILE MODAL
          ========================================================================== */}
      {selectedInstructor && (
        <div
          className="sf-modal-backdrop"
          onClick={() => setSelectedInstructor(null)}
        >
          <div
            className="sf-modal-card"
            style={{ width: "min(640px, 100%)" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="sf-modal-close-btn"
              onClick={() => setSelectedInstructor(null)}
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div style={{ display: "flex", gap: "24px", alignItems: "center", marginBottom: "20px" }}>
              <img
                src={selectedInstructor.img}
                alt={selectedInstructor.name}
                style={{ width: "90px", height: "90px", borderRadius: "50%", objectFit: "cover", border: "2px solid var(--sf-flame)" }}
              />
              <div>
                <h2 style={{ margin: "0 0 4px" }}>{selectedInstructor.name}</h2>
                <div style={{ color: "var(--sf-flame)", fontWeight: 700, fontSize: "14.5px" }}>{selectedInstructor.role}</div>
                <small style={{ color: "var(--sf-text-muted)" }}>{selectedInstructor.company} • {selectedInstructor.exp}</small>
              </div>
            </div>

            <p style={{ fontSize: "14.5px", color: "var(--sf-text-main)", lineHeight: 1.6, marginBottom: "20px" }}>
              {selectedInstructor.bio}
            </p>

            <div style={{ marginBottom: "24px" }}>
              <strong style={{ fontSize: "13px", color: "var(--sf-text-muted)", display: "block", marginBottom: "8px" }}>
                Core Competencies & Tools:
              </strong>
              <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
                {selectedInstructor.skills.map((s: string) => (
                  <span key={s} className="sf-inst-skill-pill" style={{ fontSize: "12px", padding: "4px 10px" }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                setSelectedInstructor(null);
                setIsApplyOpen(true);
              }}
              className="sf-btn-flame full-w"
            >
              <span>Apply for {selectedInstructor.name.split(" ")[0]}'s Upcoming Cohort</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
