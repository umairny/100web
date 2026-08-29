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
  ChevronRight,
  Clock,
  Clock3,
  Code2,
  Compass,
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
import bannerTeamImg from "../../assets/optimized/education/skillforge/banner-team.jpg";
import instructorAanyaImg from "../../assets/optimized/education/skillforge/instructor-aanya.jpg";
import instructorArjunImg from "../../assets/optimized/education/skillforge/instructor-arjun.jpg";
import instructorRitikaImg from "../../assets/optimized/education/skillforge/instructor-ritika.jpg";
import instructorKaranImg from "../../assets/optimized/education/skillforge/instructor-karan.jpg";
import studentRohitImg from "../../assets/optimized/education/skillforge/student-rohit.jpg";
import studentMeghaImg from "../../assets/optimized/education/skillforge/student-megha.jpg";
import studentVikramImg from "../../assets/optimized/education/skillforge/student-vikram.jpg";

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

// Programs Dataset
const programsData = [
  {
    id: "ux-design",
    title: "UX Design Workshop",
    icon: Layout,
    color: "#8b5cf6",
    badge: "Design",
    desc: "Design user-centered experiences and build case study projects.",
    duration: "12 Weeks",
    level: "Intermediate",
    nextStart: "Jun 10, 2025",
    topics: ["User Research & Personas", "Wireframing & Prototyping", "Figma Design Systems", "Usability Testing"],
    salaryBoost: "+44% Average Hike",
  },
  {
    id: "data-analytics",
    title: "Data Analytics Workshop",
    icon: BarChart3,
    color: "#06b6d4",
    badge: "Analytics",
    desc: "Analyze data, build dashboards, and drive business decisions.",
    duration: "10 Weeks",
    level: "Beginner",
    nextStart: "Jun 12, 2025",
    topics: ["SQL & Database Querying", "Python for Data Analysis", "Tableau & PowerBI Dashboards", "Statistical Modeling"],
    salaryBoost: "+42% Average Hike",
  },
  {
    id: "product-management",
    title: "Product Management",
    icon: Target,
    color: "#3b82f6",
    badge: "Management",
    desc: "Learn to build products users love and lead cross-functional teams.",
    duration: "12 Weeks",
    level: "Intermediate",
    nextStart: "Jun 14, 2025",
    topics: ["PRD & Roadmap Strategy", "Agile Product Sprints", "Product Analytics & Growth", "Stakeholder Alignment"],
    salaryBoost: "+46% Average Hike",
  },
  {
    id: "frontend-dev",
    title: "Front-End Development",
    icon: Code2,
    color: "#f97316",
    badge: "Engineering",
    desc: "Build responsive web apps with modern frameworks.",
    duration: "14 Weeks",
    level: "Beginner",
    nextStart: "Jun 15, 2025",
    topics: ["React 19 & TypeScript", "Tailwind & CSS Architecture", "REST & GraphQL APIs", "Fullstack Integration"],
    salaryBoost: "+40% Average Hike",
  },
  {
    id: "ai-business",
    title: "AI for Business Workshop",
    icon: Zap,
    color: "#10b981",
    badge: "Artificial Intelligence",
    desc: "Leverage AI tools to automate, analyze, and innovate.",
    duration: "8 Weeks",
    level: "Beginner",
    nextStart: "Jun 18, 2025",
    topics: ["Prompt Engineering Mastery", "LLM Workflows & Agents", "AI-Powered Business Ops", "Ethics & Governance"],
    salaryBoost: "+38% Average Hike",
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing Workshop",
    icon: TrendingUp,
    color: "#ec4899",
    badge: "Marketing",
    desc: "Grow brands with SEO, content, ads, and analytics.",
    duration: "10 Weeks",
    level: "Beginner",
    nextStart: "Jun 20, 2025",
    topics: ["Growth Marketing Funnels", "Paid Performance Ads", "SEO & Content Architecture", "Conversion Optimization"],
    salaryBoost: "+36% Average Hike",
  },
];

// Instructors Dataset
const instructorsData = [
  {
    name: "Aanya Sharma",
    role: "Senior Data Scientist",
    company: "Microsoft",
    exCompany: "Ex-Paytm",
    exp: "10+ Yrs Exp",
    img: instructorAanyaImg,
    skills: ["Python", "SQL", "ML Models"],
  },
  {
    name: "Arjun Mehta",
    role: "Product Manager",
    company: "Google",
    exCompany: "Ex-Amazon",
    exp: "8+ Yrs Exp",
    img: instructorArjunImg,
    skills: ["Product Strategy", "Growth"],
  },
  {
    name: "Ritika Bansal",
    role: "UX Design Lead",
    company: "Adobe",
    exCompany: "Ex-Zomato",
    exp: "12+ Yrs Exp",
    img: instructorRitikaImg,
    skills: ["UX Research", "Design Systems"],
  },
  {
    name: "Karan Verma",
    role: "Engineering Lead",
    company: "Razorpay",
    exCompany: "Ex-Swiggy",
    exp: "9+ Yrs Exp",
    img: instructorKaranImg,
    skills: ["React", "Node.js", "System Architecture"],
  },
];

// Testimonials Dataset
const testimonialsData = [
  {
    name: "Rohit S.",
    role: "Data Analytics Workshop",
    img: studentRohitImg,
    quote: "The hands-on projects and mentor feedback were game-changers. I switched to a data analyst role within 3 months!",
    stars: 5,
    outcome: "Promoted to Senior Analyst",
  },
  {
    name: "Megha T.",
    role: "UX Design Workshop",
    img: studentMeghaImg,
    quote: "The UX program is incredibly practical. My portfolio stood out and helped me land interviews at top product companies.",
    stars: 5,
    outcome: "Landed Product Designer Role",
  },
  {
    name: "Vikram P.",
    role: "Product Management",
    img: studentVikramImg,
    quote: "Flexible schedule, amazing mentors, and real-world projects. Best investment I've made in my career.",
    stars: 5,
    outcome: "+52% Compensation Jump",
  },
];

// FAQs Dataset
const faqsData = [
  {
    q: "Who are these programs for?",
    a: "Our workshops are crafted specifically for working professionals, career switchers, and recent graduates who want practical, job-ready skills rather than pure theoretical knowledge.",
  },
  {
    q: "How do live workshops work?",
    a: "Classes are held live on weekday evenings and weekends. Sessions are highly interactive with live breakout discussions, real-time code/design reviews, and direct Q&A with instructors.",
  },
  {
    q: "Do I need prior experience?",
    a: "Beginner-level workshops (such as Data Analytics and Front-End Development) start from foundational principles. Intermediate workshops require basic familiarity with the subject domain.",
  },
  {
    q: "Are sessions recorded?",
    a: "Yes! Every single live lecture is recorded in high definition with searchable transcripts, presentation decks, and GitHub project files available in your student portal within 2 hours.",
  },
  {
    q: "What tools and software do I need?",
    a: "Just a reliable computer with high-speed internet. All tools used in class (Figma, VS Code, Tableau, SQL Workbenches, Git) are industry-standard and have free or educational tiers provided.",
  },
  {
    q: "What is the refund policy?",
    a: "We offer a 100% no-questions-asked 14-day money-back guarantee. If you decide the workshop isn't right for you during the first 14 days, you receive a full refund immediately.",
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes. Upon completing your capstone project and meeting the 85% attendance requirement, you receive a verified industry certificate with a unique verification link for LinkedIn.",
  },
  {
    q: "How is career support provided?",
    a: "Our dedicated career team offers 1:1 resume teardowns, portfolio curation sessions, LinkedIn profile optimizations, mock technical interviews, and direct referral alerts to 300+ hiring partner companies.",
  },
];

export function SkillForge() {
  // Navigation & Scroll States
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#programs");

  // Interactive Filter & Modals
  const [pricingCycle, setPricingCycle] = useState<"monthly" | "upfront">("monthly");
  const [scheduleTab, setScheduleTab] = useState<"live" | "office">("live");
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Selected Program Modal
  const [selectedProgram, setSelectedProgram] = useState<any | null>(null);

  // Application / Booking Modal
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isAdvisingOpen, setIsAdvisingOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [applicationForm, setApplicationForm] = useState({
    name: "",
    email: "",
    phone: "",
    program: "UX Design Workshop",
    experience: "1-3 Years",
    targetGoal: "Career Switch",
  });

  // Newsletter state
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Scrollspy & Header sticky listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["top", "programs", "curriculum", "instructors", "schedule", "outcomes", "pricing", "faq"];
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
        if (isAdvisingOpen) setIsAdvisingOpen(false);
        if (selectedProgram) setSelectedProgram(null);
      }
    };

    if (mobileMenuOpen || isApplyOpen || isAdvisingOpen || selectedProgram) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, isApplyOpen, isAdvisingOpen, selectedProgram]);

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
          <nav className="sf-nav-links">
            {[
              { name: "Programs", href: "#programs" },
              { name: "Curriculum", href: "#curriculum" },
              { name: "Instructors", href: "#instructors" },
              { name: "Schedule", href: "#schedule" },
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
              className="sf-btn-orange sf-nav-cta"
            >
              <span>Apply Now</span>
              <ArrowUpRight size={15} />
            </button>

            <button
              className={`sf-mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
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
          >
            <X size={20} />
          </button>
        </div>

        <div className="sf-drawer-body">
          <div className="sf-drawer-links">
            {[
              { name: "Featured Programs", href: "#programs" },
              { name: "Your Learning Journey", href: "#curriculum" },
              { name: "Industry Instructors", href: "#instructors" },
              { name: "Weekly Workshop Schedule", href: "#schedule" },
              { name: "Learner Outcomes", href: "#outcomes" },
              { name: "Transparent Pricing", href: "#pricing" },
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
              className="sf-btn-orange full-w"
            >
              <span>Apply Now</span>
              <ArrowUpRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="sf-hero-section">
        <div className="sf-wrap sf-hero-grid">
          {/* Left Hero Content */}
          <div className="sf-hero-copy">
            <div className="sf-eyebrow">
              <Sparkles size={14} className="icon-orange" />
              <span>LIVE WORKSHOPS. REAL PROJECTS. CAREER RESULTS.</span>
            </div>

            <h1 className="sf-hero-title">
              Build practical skills that move your career forward.
            </h1>

            <p className="sf-hero-desc">
              Live workshops, industry mentors, portfolio projects, and career support designed for working professionals who want real growth.
            </p>

            <div className="sf-hero-buttons">
              <a
                href="#programs"
                onClick={(e) => handleNavClick(e, "#programs")}
                className="sf-btn-orange sf-btn-hero"
              >
                <span>Explore Programs</span>
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => setIsAdvisingOpen(true)}
                className="sf-btn-dark sf-btn-hero"
              >
                <span>Book an Advising Call</span>
                <Phone size={15} />
              </button>
            </div>

            <div className="sf-hero-pills">
              <div className="sf-pill-item">
                <span className="sf-dot-orange" />
                <span>Hands-on Projects</span>
              </div>
              <div className="sf-pill-item">
                <span className="sf-dot-orange" />
                <span>Mentor Guidance</span>
              </div>
              <div className="sf-pill-item">
                <span className="sf-dot-orange" />
                <span>Career Support</span>
              </div>
            </div>
          </div>

          {/* Right Hero Dashboard Cards */}
          <div className="sf-hero-dashboard">
            <div className="sf-dash-card-grid">
              {/* Card 1: My Progress Dial */}
              <div className="sf-card sf-card-progress">
                <div className="sf-progress-top">
                  <small>My Progress</small>
                </div>
                <div className="sf-progress-dial-wrap">
                  <div className="sf-dial-circle">
                    <strong>72%</strong>
                    <span>Overall Progress</span>
                  </div>
                </div>
                <div className="sf-progress-sub">
                  <span>Next goal in 12 hrs</span>
                </div>
              </div>

              {/* Card 2: Upcoming Live Workshop */}
              <div className="sf-card sf-card-live">
                <div className="sf-live-badge-row">
                  <small>Upcoming Live Workshop</small>
                  <span className="sf-badge-live">● LIVE</span>
                </div>
                <h4 className="sf-live-title">Data Storytelling with Charts</h4>
                <div className="sf-live-meta">
                  <Clock size={12} />
                  <span>Today • 7:00 PM - 9:00 PM</span>
                </div>
                <div className="sf-instructor-mini">
                  <div className="sf-avatar-sm">NS</div>
                  <span>Instructor: Neha Sharma</span>
                </div>
                <button
                  onClick={() => setIsApplyOpen(true)}
                  className="sf-btn-join-live"
                >
                  Join Workshop
                </button>
              </div>

              {/* Card 3: Portfolio Project */}
              <div className="sf-card sf-card-portfolio">
                <small>Portfolio Project</small>
                <h4>Sales Analytics Dashboard</h4>
                <div className="sf-mini-bars">
                  <div className="sf-bar" style={{ height: "45%" }} />
                  <div className="sf-bar" style={{ height: "70%" }} />
                  <div className="sf-bar" style={{ height: "55%" }} />
                  <div className="sf-bar active" style={{ height: "88%" }} />
                  <div className="sf-bar" style={{ height: "60%" }} />
                  <div className="sf-bar" style={{ height: "92%" }} />
                </div>
                <div className="sf-portfolio-foot">
                  <span>Milestone 3 of 4</span>
                  <strong>68%</strong>
                </div>
              </div>

              {/* Card 4: Mentor Feedback */}
              <div className="sf-card sf-card-feedback">
                <small>Mentor Feedback</small>
                <div className="sf-feedback-author">
                  <img src={instructorArjunImg} alt="Arjun Mehta" />
                  <div>
                    <strong>Arjun Mehta</strong>
                    <small>Senior Data Analyst</small>
                  </div>
                </div>
                <div className="sf-stars">★★★★★</div>
                <p className="sf-feedback-text">
                  “Great insights! Refine your visual hierarchy and you're ready for presentation.”
                </p>
              </div>
            </div>

            {/* Bottom Cohort Stats Strip */}
            <div className="sf-cohort-strip">
              <div className="sf-cohort-left">
                <strong>Cohort 24 • Data Analytics</strong>
                <div className="sf-avatar-stack">
                  <img src={instructorAanyaImg} alt="Student" />
                  <img src={instructorRitikaImg} alt="Student" />
                  <img src={studentRohitImg} alt="Student" />
                  <img src={studentMeghaImg} alt="Student" />
                  <span className="sf-avatar-more">+24</span>
                </div>
              </div>
              <div className="sf-cohort-stats">
                <div><strong>128</strong><small>Learners</small></div>
                <div><strong>36</strong><small>Projects Completed</small></div>
                <div><strong className="text-orange">92%</strong><small>Active Participation</small></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metric Stats Strip */}
      <section className="sf-stats-section">
        <div className="sf-wrap sf-stats-grid">
          <div className="sf-stat-box">
            <div className="sf-stat-icon"><Users size={22} /></div>
            <strong>12,500+</strong>
            <span>Learners Trained</span>
          </div>

          <div className="sf-stat-box">
            <div className="sf-stat-icon"><CheckCircle2 size={22} /></div>
            <strong>92%</strong>
            <span>Completion Rate</span>
          </div>

          <div className="sf-stat-box">
            <div className="sf-stat-icon"><TrendingUp size={22} /></div>
            <strong>41%</strong>
            <span>Average Salary Growth</span>
          </div>

          <div className="sf-stat-box">
            <div className="sf-stat-icon"><Star size={22} /></div>
            <strong>4.8/5</strong>
            <span>Mentor Satisfaction</span>
          </div>

          <div className="sf-stat-box">
            <div className="sf-stat-icon"><Briefcase size={22} /></div>
            <strong>8,600+</strong>
            <span>Projects Completed</span>
          </div>
        </div>
      </section>

      {/* Why SkillForge Workshops? */}
      <section className="sf-section sf-why-section">
        <div className="sf-wrap">
          <div className="sf-section-header text-center">
            <h2 className="sf-section-title">Why SkillForge Workshops?</h2>
          </div>

          <div className="sf-why-grid">
            <div className="sf-why-card">
              <div className="sf-why-icon-wrap icon-orange">
                <Radio size={24} />
              </div>
              <h3>Live, Interactive Workshops</h3>
              <p>Learn in real-time with instructors and peers. Ask, collaborate, and grow.</p>
            </div>

            <div className="sf-why-card">
              <div className="sf-why-icon-wrap icon-teal">
                <Users size={24} />
              </div>
              <h3>Small Cohorts</h3>
              <p>Focused cohorts of max 20 learners for personal attention and engagement.</p>
            </div>

            <div className="sf-why-card">
              <div className="sf-why-icon-wrap icon-purple">
                <Briefcase size={24} />
              </div>
              <h3>Portfolio-Ready Projects</h3>
              <p>Build real-world projects that showcase your skills to employers.</p>
            </div>

            <div className="sf-why-card">
              <div className="sf-why-icon-wrap icon-green">
                <MessageSquare size={24} />
              </div>
              <h3>Mentor Feedback</h3>
              <p>Get actionable feedback from industry experts throughout the program.</p>
            </div>

            <div className="sf-why-card">
              <div className="sf-why-icon-wrap icon-amber">
                <Calendar size={24} />
              </div>
              <h3>Flexible Schedules</h3>
              <p>Weekday evenings and weekend intensives designed for working pros.</p>
            </div>

            <div className="sf-why-card">
              <div className="sf-why-icon-wrap icon-blue">
                <GraduationCap size={24} />
              </div>
              <h3>Career-Focused Learning</h3>
              <p>Curriculum built with hiring skills, tools, and real industry demands.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="sf-section sf-programs-section" id="programs">
        <div className="sf-wrap">
          <div className="sf-programs-top">
            <div>
              <h2 className="sf-section-title">Featured Programs</h2>
            </div>
            <a
              href="#programs"
              className="sf-view-all-link"
              onClick={(e) => handleNavClick(e, "#programs")}
            >
              <span>View all programs</span>
              <ArrowRight size={14} />
            </a>
          </div>

          <div className="sf-programs-grid">
            {programsData.map((prog) => {
              const IconComp = prog.icon;

              return (
                <div key={prog.id} className="sf-prog-card">
                  <div className="sf-prog-card-top">
                    <div
                      className="sf-prog-icon"
                      style={{ backgroundColor: `${prog.color}15`, color: prog.color }}
                    >
                      <IconComp size={22} />
                    </div>
                    <span className="sf-prog-badge">{prog.badge}</span>
                  </div>

                  <h3 className="sf-prog-title">{prog.title}</h3>
                  <p className="sf-prog-desc">{prog.desc}</p>

                  <div className="sf-prog-meta-row">
                    <span className="sf-prog-meta-item">{prog.duration}</span>
                    <span className="sf-prog-meta-dot">•</span>
                    <span className="sf-prog-meta-item">{prog.level}</span>
                  </div>

                  <div className="sf-prog-start">
                    <small>Next Start: <strong>{prog.nextStart}</strong></small>
                  </div>

                  <button
                    onClick={() => setSelectedProgram(prog)}
                    className="sf-btn-prog"
                    style={{ borderColor: prog.color, color: prog.color }}
                  >
                    Explore Program
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Your Learning Journey */}
      <section className="sf-section sf-journey-section" id="curriculum">
        <div className="sf-wrap">
          <div className="sf-section-header text-center">
            <h2 className="sf-section-title">Your Learning Journey</h2>
            <p className="sf-section-desc">
              A structured path from fundamentals to career impact.
            </p>
          </div>

          <div className="sf-timeline-steps">
            <div className="sf-step-item">
              <div className="sf-step-icon-circle icon-teal">
                <Laptop size={20} />
              </div>
              <h4>Foundations</h4>
              <p>Build core concepts and essential skills with hands-on exercises.</p>
            </div>

            <div className="sf-step-arrow"><ChevronRight size={18} /></div>

            <div className="sf-step-item">
              <div className="sf-step-icon-circle icon-blue">
                <Compass size={20} />
              </div>
              <h4>Applied Learning</h4>
              <p>Deepen skills, build through practical drive business decisions.</p>
            </div>

            <div className="sf-step-arrow"><ChevronRight size={18} /></div>

            <div className="sf-step-item">
              <div className="sf-step-icon-circle icon-purple">
                <Layers size={20} />
              </div>
              <h4>Real-World Projects</h4>
              <p>Work in industry-relevant projects and receive feedback.</p>
            </div>

            <div className="sf-step-arrow"><ChevronRight size={18} /></div>

            <div className="sf-step-item">
              <div className="sf-step-icon-circle icon-amber">
                <Trophy size={20} />
              </div>
              <h4>Capstone Project</h4>
              <p>Build a capstone project that solves a real business problem.</p>
            </div>

            <div className="sf-step-arrow"><ChevronRight size={18} /></div>

            <div className="sf-step-item">
              <div className="sf-step-icon-circle icon-green">
                <Zap size={20} />
              </div>
              <h4>Career Launch</h4>
              <p>Portfolio review, resume building, mock interviews, and job support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Workshop Schedule & Instructors */}
      <section className="sf-section sf-schedule-section" id="schedule">
        <div className="sf-wrap">
          <div className="sf-schedule-top-row">
            <div>
              <h2 className="sf-section-title">Weekly Workshop Schedule</h2>
            </div>
            <div className="sf-schedule-toggle">
              <button
                className={`sf-sched-tab ${scheduleTab === "live" ? "active" : ""}`}
                onClick={() => setScheduleTab("live")}
              >
                ● Live Workshop
              </button>
              <button
                className={`sf-sched-tab ${scheduleTab === "office" ? "active" : ""}`}
                onClick={() => setScheduleTab("office")}
              >
                Office Hours
              </button>
            </div>
          </div>

          <div className="sf-instructors-strip" id="instructors">
            {instructorsData.map((inst) => (
              <div key={inst.name} className="sf-instructor-card">
                <div className="sf-inst-img-wrap">
                  <img src={inst.img} alt={inst.name} />
                </div>
                <div className="sf-inst-info">
                  <h3>{inst.name}</h3>
                  <p className="sf-inst-role">{inst.role} @ <strong>{inst.company}</strong></p>
                  <small className="sf-inst-meta">{inst.exCompany} • {inst.exp}</small>
                  <div className="sf-inst-social">
                    <LinkedInIcon size={14} className="icon-blue" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Learn from Industry Mentors / Outcomes */}
      <section className="sf-section sf-outcomes-section" id="outcomes">
        <div className="sf-wrap">
          <div className="sf-section-header text-center">
            <h2 className="sf-section-title">Learn from Industry Mentors</h2>
          </div>

          <div className="sf-outcomes-grid">
            {/* Left Chart: Average Salary Growth */}
            <div className="sf-outcome-card">
              <h3>Average Salary Growth</h3>
              <div className="sf-salary-metric">
                <strong className="text-orange">41%</strong>
                <span>within 6 months</span>
              </div>

              <div className="sf-salary-bar-chart">
                <div className="sf-salary-col">
                  <div className="sf-salary-fill before" style={{ height: "65%" }}>
                    <span>₹8.2L LPA</span>
                  </div>
                  <small>Before</small>
                </div>

                <div className="sf-salary-col">
                  <div className="sf-salary-fill after" style={{ height: "95%" }}>
                    <span>₹12.4L LPA</span>
                  </div>
                  <small>After</small>
                </div>
              </div>
            </div>

            {/* Center Card: Learner Outcomes Progress Bars */}
            <div className="sf-outcome-card">
              <h3>Learner Outcomes</h3>

              <div className="sf-outcome-bars-list">
                <div className="sf-outcome-bar-item">
                  <div className="sf-bar-head">
                    <span>Got a new job / promotion</span>
                    <strong>78%</strong>
                  </div>
                  <div className="sf-track"><div className="sf-fill" style={{ width: "78%" }} /></div>
                </div>

                <div className="sf-outcome-bar-item">
                  <div className="sf-bar-head">
                    <span>Improved skills at work</span>
                    <strong>89%</strong>
                  </div>
                  <div className="sf-track"><div className="sf-fill" style={{ width: "89%" }} /></div>
                </div>

                <div className="sf-outcome-bar-item">
                  <div className="sf-bar-head">
                    <span>Built a strong portfolio</span>
                    <strong>94%</strong>
                  </div>
                  <div className="sf-track"><div className="sf-fill" style={{ width: "94%" }} /></div>
                </div>

                <div className="sf-outcome-bar-item">
                  <div className="sf-bar-head">
                    <span>More confident in interviews</span>
                    <strong>85%</strong>
                  </div>
                  <div className="sf-track"><div className="sf-fill" style={{ width: "85%" }} /></div>
                </div>
              </div>
            </div>

            {/* Right Card: Where Our Learners Work */}
            <div className="sf-outcome-card">
              <h3>Where Our Learners Work</h3>

              <div className="sf-donut-wrapper">
                <div className="sf-donut-circle">
                  <strong>12,500+</strong>
                  <small>Learners</small>
                </div>
              </div>

              <div className="sf-donut-legend">
                <div><span className="dot dot-blue" /> Product & Tech <b>38%</b></div>
                <div><span className="dot dot-teal" /> Data & Analytics <b>24%</b></div>
                <div><span className="dot dot-green" /> Design <b>18%</b></div>
                <div><span className="dot dot-orange" /> Marketing <b>12%</b></div>
                <div><span className="dot dot-gray" /> Other <b>10%</b></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Upskilling Journey */}
      <section className="sf-section sf-upskill-section">
        <div className="sf-wrap">
          <div className="sf-section-header text-center">
            <h2 className="sf-section-title">Your Upskilling Journey</h2>
          </div>

          <div className="sf-upskill-steps">
            <div className="sf-upskill-step">
              <div className="sf-up-icon icon-green"><Search size={22} /></div>
              <h4>1. Discover</h4>
              <p>Explore programs and outcomes.</p>
            </div>

            <div className="sf-up-arrow">➔</div>

            <div className="sf-upskill-step">
              <div className="sf-up-icon icon-amber"><FileText size={22} /></div>
              <h4>2. Apply</h4>
              <p>Submit application in 5 minutes.</p>
            </div>

            <div className="sf-up-arrow">➔</div>

            <div className="sf-upskill-step">
              <div className="sf-up-icon icon-blue"><Phone size={22} /></div>
              <h4>3. Advisor Call</h4>
              <p>Talk to our advisors to find the best fit.</p>
            </div>

            <div className="sf-up-arrow">➔</div>

            <div className="sf-upskill-step">
              <div className="sf-up-icon icon-purple"><Users size={22} /></div>
              <h4>4. Join Cohort</h4>
              <p>Get onboarded and meet your cohort.</p>
            </div>

            <div className="sf-up-arrow">➔</div>

            <div className="sf-upskill-step">
              <div className="sf-up-icon icon-orange"><Laptop size={22} /></div>
              <h4>5. Learn & Build</h4>
              <p>Attend live workshops and build projects.</p>
            </div>

            <div className="sf-up-arrow">➔</div>

            <div className="sf-upskill-step">
              <div className="sf-up-icon icon-green"><Award size={22} /></div>
              <h4>6. Launch Career</h4>
              <p>Graduate and unlock next opportunities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Learners Say */}
      <section className="sf-section sf-testimonials-section">
        <div className="sf-wrap">
          <div className="sf-section-header text-center">
            <h2 className="sf-section-title">What Our Learners Say</h2>
          </div>

          <div className="sf-testimonials-grid">
            {testimonialsData.map((t) => (
              <div key={t.name} className="sf-testimonial-card">
                <div className="sf-test-avatar-row">
                  <img src={t.img} alt={t.name} className="sf-test-avatar" />
                  <div>
                    <div className="sf-stars">★★★★★</div>
                  </div>
                </div>

                <p className="sf-test-quote">“{t.quote}”</p>

                <div className="sf-test-author">
                  <strong>{t.name}</strong>
                  <small>{t.role}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Simple, Transparent Pricing */}
      <section className="sf-section sf-pricing-section" id="pricing">
        <div className="sf-wrap">
          <div className="sf-section-header text-center">
            <h2 className="sf-section-title">Simple, Transparent Pricing</h2>

            <div className="sf-pricing-toggle">
              <button
                className={`sf-toggle-pill ${pricingCycle === "monthly" ? "active" : ""}`}
                onClick={() => setPricingCycle("monthly")}
              >
                Pay Monthly
              </button>
              <button
                className={`sf-toggle-pill ${pricingCycle === "upfront" ? "active" : ""}`}
                onClick={() => setPricingCycle("upfront")}
              >
                Pay Upfront <span className="sf-save-badge">(Save 15%)</span>
              </button>
            </div>
          </div>

          <div className="sf-pricing-grid">
            {/* Starter */}
            <div className="sf-pricing-card">
              <h3 className="sf-tier-title">Starter</h3>
              <p className="sf-tier-sub">For building new skills</p>
              <div className="sf-price-amount">
                <strong>{pricingCycle === "monthly" ? "₹12,999" : "₹32,999"}</strong>
                <small>{pricingCycle === "monthly" ? "/month" : "/full program"}</small>
              </div>

              <ul className="sf-price-list">
                <li><Check size={14} className="icon-teal" /> Live workshops & recordings</li>
                <li><Check size={14} className="icon-teal" /> Hands-on projects</li>
                <li><Check size={14} className="icon-teal" /> Mentor feedback</li>
                <li><Check size={14} className="icon-teal" /> Community access</li>
                <li><Check size={14} className="icon-teal" /> Certificate of completion</li>
              </ul>

              <button
                onClick={() => setIsApplyOpen(true)}
                className="sf-btn-outline full-w"
              >
                Choose Starter
              </button>
            </div>

            {/* Professional (Most Popular) */}
            <div className="sf-pricing-card popular">
              <div className="sf-popular-ribbon">Most Popular</div>
              <h3 className="sf-tier-title">Professional</h3>
              <p className="sf-tier-sub">For career acceleration</p>
              <div className="sf-price-amount">
                <strong>{pricingCycle === "monthly" ? "₹17,999" : "₹45,999"}</strong>
                <small>{pricingCycle === "monthly" ? "/month" : "/full program"}</small>
              </div>

              <ul className="sf-price-list">
                <li><Check size={14} className="icon-orange" /> <strong>Everything in Starter</strong></li>
                <li><Check size={14} className="icon-orange" /> Capstone project</li>
                <li><Check size={14} className="icon-orange" /> 1:1 mentor sessions</li>
                <li><Check size={14} className="icon-orange" /> Portfolio review</li>
                <li><Check size={14} className="icon-orange" /> Career resources & templates</li>
              </ul>

              <button
                onClick={() => setIsApplyOpen(true)}
                className="sf-btn-orange full-w"
              >
                Choose Professional
              </button>
            </div>

            {/* Career Plus */}
            <div className="sf-pricing-card">
              <h3 className="sf-tier-title">Career Plus</h3>
              <p className="sf-tier-sub">For job transition</p>
              <div className="sf-price-amount">
                <strong>{pricingCycle === "monthly" ? "₹24,999" : "₹62,999"}</strong>
                <small>{pricingCycle === "monthly" ? "/month" : "/full program"}</small>
              </div>

              <ul className="sf-price-list">
                <li><Check size={14} className="icon-purple" /> <strong>Everything in Professional</strong></li>
                <li><Check size={14} className="icon-purple" /> Dedicated career coach</li>
                <li><Check size={14} className="icon-purple" /> Mock interviews</li>
                <li><Check size={14} className="icon-purple" /> Job referrals & alerts</li>
                <li><Check size={14} className="icon-purple" /> Priority support</li>
              </ul>

              <button
                onClick={() => setIsApplyOpen(true)}
                className="sf-btn-outline full-w"
              >
                Choose Career Plus
              </button>
            </div>
          </div>

          <div className="sf-guarantee-note">
            <ShieldCheck size={16} className="icon-green" />
            <span>14-day money-back guarantee. No questions asked.</span>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (2-Column Accordion) */}
      <section className="sf-section sf-faq-section" id="faq">
        <div className="sf-wrap">
          <div className="sf-section-header text-center">
            <h2 className="sf-section-title">Frequently Asked Questions</h2>
          </div>

          <div className="sf-faq-grid">
            {faqsData.map((faq, idx) => (
              <div
                key={faq.q}
                className={`sf-faq-item ${activeFaq === idx ? "open" : ""}`}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="sf-faq-q">
                  <div className="sf-faq-q-left">
                    <HelpCircle size={16} className="icon-gray" />
                    <span>{faq.q}</span>
                  </div>
                  <span className="sf-faq-toggle-icon">{activeFaq === idx ? "−" : "+"}</span>
                </div>
                {activeFaq === idx && (
                  <div className="sf-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="sf-cta-banner">
        <div className="sf-wrap sf-cta-container">
          <div className="sf-cta-left">
            <div className="sf-cta-eyebrow">NEXT COHORT STARTING SOON</div>
            <h2>Take the next step toward a better career.</h2>
            <p>Limited seats. Apply today and secure your spot.</p>

            <div className="sf-cta-btn-group">
              <button
                onClick={() => setIsApplyOpen(true)}
                className="sf-btn-orange"
              >
                <span>Apply Now</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => setIsAdvisingOpen(true)}
                className="sf-btn-dark"
              >
                <span>Book an Advising Call</span>
                <Phone size={15} />
              </button>
            </div>
          </div>

          <div className="sf-cta-right">
            <img src={bannerTeamImg} alt="Students Collaborating in SkillForge Workshop" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="sf-footer">
        <div className="sf-wrap sf-footer-grid">
          <div className="sf-footer-col sf-footer-brand">
            <div className="sf-brand">
              <div className="sf-logo-icon">
                <Flame size={18} />
              </div>
              <span className="sf-brand-title">SkillForge</span>
            </div>
            <p className="sf-footer-tagline">
              Practical skills. Real projects. Career outcomes.
            </p>
            <div className="sf-social-icons">
              <a href="#top" aria-label="LinkedIn"><LinkedInIcon size={16} /></a>
              <a href="#top" aria-label="YouTube"><Video size={16} /></a>
              <a href="#top" aria-label="Instagram"><Globe size={16} /></a>
            </div>
          </div>

          <div className="sf-footer-col">
            <h4>Programs</h4>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>All Programs</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Data Analytics</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>UX Design</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Product Management</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>View All</a>
          </div>

          <div className="sf-footer-col">
            <h4>Resources</h4>
            <a href="#curriculum" onClick={(e) => handleNavClick(e, "#curriculum")}>Blog</a>
            <a href="#outcomes" onClick={(e) => handleNavClick(e, "#outcomes")}>Success Stories</a>
            <a href="#schedule" onClick={(e) => handleNavClick(e, "#schedule")}>Webinars</a>
            <a href="#curriculum" onClick={(e) => handleNavClick(e, "#curriculum")}>Free Resources</a>
            <a href="#outcomes" onClick={(e) => handleNavClick(e, "#outcomes")}>Career Guide</a>
          </div>

          <div className="sf-footer-col">
            <h4>Company</h4>
            <a href="#instructors" onClick={(e) => handleNavClick(e, "#instructors")}>About Us</a>
            <a href="#instructors" onClick={(e) => handleNavClick(e, "#instructors")}>Instructors</a>
            <a href="#curriculum" onClick={(e) => handleNavClick(e, "#curriculum")}>Careers</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")}>Contact Us</a>
          </div>

          <div className="sf-footer-col">
            <h4>Support</h4>
            <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")}>Help Center</a>
            <a href="#pricing" onClick={(e) => handleNavClick(e, "#pricing")}>Terms of Service</a>
            <a href="#pricing" onClick={(e) => handleNavClick(e, "#pricing")}>Privacy Policy</a>
            <a href="#pricing" onClick={(e) => handleNavClick(e, "#pricing")}>Refund Policy</a>
          </div>

          <div className="sf-footer-col sf-footer-newsletter">
            <h4>Stay Updated</h4>
            <p>Get workshop tips, career insights, and updates.</p>
            <form onSubmit={handleNewsletterSubmit} className="sf-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            {newsletterSuccess && (
              <small className="sf-news-success">✓ You're subscribed to SkillForge updates!</small>
            )}
          </div>
        </div>

        <div className="sf-footer-bottom">
          <div className="sf-wrap">
            <p>© 2025 SkillForge Workshops. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div
          className="sf-modal-overlay"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="sf-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="sf-modal-close"
              onClick={() => setSelectedProgram(null)}
            >
              <X size={20} />
            </button>

            <div className="sf-prog-modal-header">
              <span className="sf-prog-badge">{selectedProgram.badge}</span>
              <h2>{selectedProgram.title}</h2>
              <p>{selectedProgram.desc}</p>
            </div>

            <div className="sf-prog-modal-meta">
              <div><strong>Duration:</strong> {selectedProgram.duration}</div>
              <div><strong>Level:</strong> {selectedProgram.level}</div>
              <div><strong>Cohort Start:</strong> {selectedProgram.nextStart}</div>
              <div><strong>Expected Growth:</strong> {selectedProgram.salaryBoost}</div>
            </div>

            <h4>Core Curriculum Modules:</h4>
            <ul className="sf-prog-modal-topics">
              {selectedProgram.topics.map((t: string) => (
                <li key={t}><Check size={14} className="icon-orange" /> {t}</li>
              ))}
            </ul>

            <button
              onClick={() => {
                const title = selectedProgram.title;
                setSelectedProgram(null);
                setApplicationForm({ ...applicationForm, program: title });
                setIsApplyOpen(true);
              }}
              className="sf-btn-orange full-w"
            >
              Apply for {selectedProgram.title}
            </button>
          </div>
        </div>
      )}

      {/* Apply / Advising Call Modal */}
      {(isApplyOpen || isAdvisingOpen) && (
        <div
          className="sf-modal-overlay"
          onClick={() => {
            setIsApplyOpen(false);
            setIsAdvisingOpen(false);
          }}
        >
          <div
            className="sf-modal-content"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="sf-modal-close"
              onClick={() => {
                setIsApplyOpen(false);
                setIsAdvisingOpen(false);
              }}
            >
              <X size={20} />
            </button>

            {!formSubmitted ? (
              <>
                <div className="sf-modal-header">
                  <h2>{isApplyOpen ? "Apply for Next Cohort" : "Book a 1:1 Advising Call"}</h2>
                  <p>
                    {isApplyOpen
                      ? "Submit your application in 2 minutes. Limited seats per cohort."
                      : "Schedule a 15-minute consultation with our admissions advisors."}
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="sf-modal-form">
                  <div className="sf-form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rohan Sharma"
                      value={applicationForm.name}
                      onChange={(e) => setApplicationForm({ ...applicationForm, name: e.target.value })}
                    />
                  </div>

                  <div className="sf-form-group">
                    <label>Work Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="rohan@example.com"
                      value={applicationForm.email}
                      onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                    />
                  </div>

                  <div className="sf-form-group">
                    <label>Phone Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={applicationForm.phone}
                      onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
                    />
                  </div>

                  <div className="sf-form-group">
                    <label>Preferred Workshop Program</label>
                    <select
                      value={applicationForm.program}
                      onChange={(e) => setApplicationForm({ ...applicationForm, program: e.target.value })}
                    >
                      <option value="UX Design Workshop">UX Design Workshop (12 Wks)</option>
                      <option value="Data Analytics Workshop">Data Analytics Workshop (10 Wks)</option>
                      <option value="Product Management">Product Management (12 Wks)</option>
                      <option value="Front-End Development">Front-End Development (14 Wks)</option>
                      <option value="AI for Business Workshop">AI for Business Workshop (8 Wks)</option>
                      <option value="Digital Marketing Workshop">Digital Marketing Workshop (10 Wks)</option>
                    </select>
                  </div>

                  <button type="submit" className="sf-btn-orange full-w">
                    {isApplyOpen ? "Submit Cohort Application" : "Confirm Advising Call"}
                  </button>

                  <div className="sf-form-privacy">
                    <Lock size={12} />
                    <span>Your data is strictly encrypted. No spam ever.</span>
                  </div>
                </form>
              </>
            ) : (
              <div className="sf-modal-success">
                <CheckCircle2 size={54} className="icon-orange" />
                <h3>Application Submitted!</h3>
                <p>
                  Thank you <strong>{applicationForm.name}</strong>! Our admissions team has sent your program syllabus and onboarding link to <strong>{applicationForm.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setIsApplyOpen(false);
                    setIsAdvisingOpen(false);
                  }}
                  className="sf-btn-orange full-w"
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
export default SkillForge;
