import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Briefcase,
  Calendar,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Code,
  FileCheck,
  FileText,
  GraduationCap,
  Headphones,
  HelpCircle,
  Laptop,
  Layers,
  Layout,
  LineChart,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Play,
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
import "./LearnSphereAcademy.css";

// Program card preview graphics
import uiuxImage from "../../assets/optimized/education/learnsphere/learnsphere-uiux.webp";
import frontendImage from "../../assets/optimized/education/learnsphere/learnsphere-frontend.webp";
import analyticsImage from "../../assets/optimized/education/learnsphere/learnsphere-analytics.webp";
import productImage from "../../assets/optimized/education/learnsphere/learnsphere-product.webp";

// Project Lab visual cards
import assignmentsImg from "../../assets/optimized/education/learnsphere/project-assignments.webp";
import capstoneImg from "../../assets/optimized/education/learnsphere/project-capstone.webp";
import critiqueImg from "../../assets/optimized/education/learnsphere/project-critique.webp";
import portfolioImg from "../../assets/optimized/education/learnsphere/project-portfolio.webp";

// Mentor visual graphics
import mentorOfficeHoursImg from "../../assets/optimized/education/learnsphere/mentor-office-hours.webp";
import mentorFeedbackImg from "../../assets/optimized/education/learnsphere/mentor-feedback.webp";

// Student & Chat Avatars
import studentAishaImg from "../../assets/optimized/education/learnsphere/student-aisha.webp";
import studentJamesImg from "../../assets/optimized/education/learnsphere/student-james.webp";
import studentEmilyImg from "../../assets/optimized/education/learnsphere/student-emily.webp";

// Bottom CTA Banner graphic
import graduationBannerImg from "../../assets/optimized/education/learnsphere/banner-graduation.webp";

// Mentor portraits
import mentorSarahImg from "../../assets/optimized/education/tutorloop/tutor-sarah.jpg";
import mentorDavidImg from "../../assets/optimized/education/tutorloop/tutor-david.jpg";
import mentorElenaImg from "../../assets/optimized/education/tutorloop/tutor-elena.jpg";
import mentorMarcusImg from "../../assets/optimized/education/tutorloop/tutor-marcus.jpg";

// LearnSphere Logo Icon
function LearnSphereLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <rect width="36" height="36" rx="8" fill="#2563eb" />
      <path d="M18 9L29 14.5L18 20L7 14.5L18 9Z" fill="#ffffff" />
      <path
        d="M11 17.5V23.5C11 25.2 14.1 27 18 27C21.9 27 25 25.2 25 23.5V17.5"
        stroke="#93c5fd"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M29 15V23" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
      <circle cx="29" cy="24.5" r="1.5" fill="#ffffff" />
    </svg>
  );
}

// Nav items
const navLinks = [
  { id: "programs", label: "Programs" },
  { id: "curriculum", label: "Curriculum" },
  { id: "mentors", label: "Mentors" },
  { id: "projects", label: "Projects" },
  { id: "outcomes", label: "Outcomes" },
  { id: "pricing", label: "Pricing" },
  { id: "faq", label: "FAQ" },
];

// 4 Featured Programs Dataset
const featuredPrograms = [
  {
    id: "uiux",
    title: "UI/UX Design",
    desc: "Design intuitive experiences users love. Master research, wireframing, UI design, and prototyping.",
    img: uiuxImage,
    duration: "12 Weeks",
    level: "Beginner to Intermediate",
    nextCohort: "Jun 3, 2024",
    highlights: ["Figma Design Systems", "User Research & Usability", "Interactive Prototypes", "Design Handoff"],
  },
  {
    id: "frontend",
    title: "Front-End Development",
    desc: "Build responsive websites and web apps using HTML, CSS, JavaScript, and modern frameworks.",
    img: frontendImage,
    duration: "14 Weeks",
    level: "Beginner to Intermediate",
    nextCohort: "Jun 10, 2024",
    highlights: ["HTML5 / CSS3 Grid & Flex", "Modern JavaScript & TypeScript", "React.js & State Management", "Git & CI/CD Deployments"],
  },
  {
    id: "analytics",
    title: "Data Analytics",
    desc: "Turn data into insights. Learn SQL, Excel, Python, and visualization to solve real business problems.",
    img: analyticsImage,
    duration: "12 Weeks",
    level: "Beginner to Intermediate",
    nextCohort: "Jun 17, 2024",
    highlights: ["Advanced Excel & Modeling", "SQL Query Optimization", "Python (Pandas, NumPy)", "Tableau & PowerBI Storytelling"],
  },
  {
    id: "product",
    title: "Product Design",
    desc: "Design products people need. Combine UX, strategy, and experimentation to build better products.",
    img: productImage,
    duration: "12 Weeks",
    level: "Intermediate",
    nextCohort: "Jun 24, 2024",
    highlights: ["Product Discovery & Strategy", "Growth Experimentation", "Design Sprints & Metrics", "Cross-Functional Leadership"],
  },
];

// Curriculum Roadmap Dataset
const curriculumRoadmap = [
  {
    week: "Week 1",
    title: "Foundations",
    desc: "Core concepts, tools setup, and first mini challenge.",
    status: "completed",
    badge: "Completed",
  },
  {
    week: "Week 2-5",
    title: "Core Concepts",
    desc: "Dive deeper with practical lessons and exercises.",
    status: "completed",
    badge: "Completed",
  },
  {
    week: "Week 6-8",
    title: "Application",
    desc: "Apply skills to guided projects and scenarios.",
    status: "in-progress",
    badge: "In Progress",
  },
  {
    week: "Week 9-11",
    title: "Advanced Topics",
    desc: "Advanced techniques and best practices.",
    status: "upcoming",
    badge: "Upcoming",
  },
  {
    week: "Week 12-13",
    title: "Project Labs",
    desc: "Build real-world projects with mentor feedback.",
    status: "upcoming",
    badge: "Upcoming",
  },
  {
    week: "Week 14",
    title: "Capstone & Showcase",
    desc: "Polish your portfolio and graduate with confidence.",
    status: "upcoming",
    badge: "Upcoming",
  },
];

// FAQ Dataset
const faqList = [
  {
    q: "Who is LearnSphere Academy for?",
    a: "Our programs are crafted for motivated beginners, career switchers, and working professionals looking for structured, mentor-guided education without leaving their day jobs.",
  },
  {
    q: "What kind of support will I get?",
    a: "You receive direct weekly 1-on-1 mentor code & design reviews, live weekly office hours, an active cohort Slack/Discord community, and dedicated career guidance.",
  },
  {
    q: "How long are the programs?",
    a: "Most cohorts run for 12 to 14 weeks. Students typically dedicate 8 to 12 hours per week covering on-demand lessons, practical project labs, and live mentor check-ins.",
  },
  {
    q: "Will I get a certificate?",
    a: "Yes! Every graduate earns an industry-recognized, verifiable digital certificate and a peer-reviewed capstone portfolio ready for employer presentation.",
  },
  {
    q: "Do I need prior experience?",
    a: "No prior experience is required for our beginner-to-intermediate tracks. We teach foundational tools from scratch before progressing to advanced topics.",
  },
  {
    q: "How does payment work?",
    a: "We offer one-time tuition discounts, zero-interest monthly installment plans, and employer tuition reimbursement documentation to suit your budget.",
  },
];

export function LearnSphereAcademy() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("programs");

  // Interactive state
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [selectedProgram, setSelectedProgram] = useState<any | null>(null);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isAdvisorOpen, setIsAdvisorOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Application form data
  const [appForm, setAppForm] = useState({
    name: "",
    email: "",
    phone: "",
    track: "UI/UX Design (12 Weeks)",
    cohort: "June 3, 2024",
    experience: "Beginner / Career Switcher",
  });

  // Scrollspy & sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sectionIds = ["programs", "curriculum", "mentors", "projects", "outcomes", "pricing", "faq"];
      const scrollPos = window.scrollY + 120;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveNav(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modal key and scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mobileMenuOpen) setMobileMenuOpen(false);
        if (isApplyOpen) setIsApplyOpen(false);
        if (isAdvisorOpen) setIsAdvisorOpen(false);
        if (selectedProgram) setSelectedProgram(null);
      }
    };

    if (mobileMenuOpen || isApplyOpen || isAdvisorOpen || selectedProgram) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, isApplyOpen, isAdvisorOpen, selectedProgram]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveNav(id);
    setMobileMenuOpen(false);

    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 76;
      const elementPosition = el.getBoundingClientRect().top;
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
      setIsAdvisorOpen(false);
    }, 2800);
  };

  return (
    <main className="ls-page" id="top" tabIndex={-1}>
      {/* 1. STICKY HEADER NAVBAR */}
      <header className={`ls-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="ls-wrap ls-nav-inner">
          {/* Brand Logo */}
          <a
            href="#top"
            className="ls-brand"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            aria-label="LearnSphere Academy Home"
          >
            <LearnSphereLogo size={34} />
            <div className="ls-brand-text">
              <span className="ls-brand-name">LearnSphere</span>
              <span className="ls-brand-sub">Academy</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="ls-nav-menu">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`ls-nav-item ${activeNav === item.id ? "active" : ""}`}
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Nav Actions */}
          <div className="ls-nav-actions">
            <button
              onClick={() => {
                setSelectedProgram(null);
                setIsApplyOpen(true);
              }}
              className="ls-btn-primary ls-nav-cta"
            >
              Apply Now
            </button>

            <button
              className="ls-mobile-toggle"
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
        className={`ls-mobile-overlay ${mobileMenuOpen ? "visible" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`ls-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="ls-drawer-top">
          <div className="ls-brand">
            <LearnSphereLogo size={28} />
            <span className="ls-brand-name">LearnSphere</span>
          </div>
          <button
            className="ls-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="ls-drawer-body">
          <div className="ls-drawer-links">
            {navLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="ls-drawer-item"
                onClick={(e) => scrollToSection(e, item.id)}
              >
                <span>{item.label}</span>
                <ChevronRight size={16} />
              </a>
            ))}
          </div>

          <div className="ls-drawer-footer">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsApplyOpen(true);
              }}
              className="ls-btn-primary full-w"
            >
              Apply for Next Cohort
            </button>
          </div>
        </div>
      </div>

      {/* 2. HERO SECTION */}
      <section className="ls-hero-section">
        <div className="ls-wrap ls-hero-grid">
          {/* Left Copy */}
          <div className="ls-hero-content">
            <h1 className="ls-hero-title">
              Guided online <br />
              learning with <span className="ls-text-blue">structure</span> <br />
              students can trust.
            </h1>

            <p className="ls-hero-desc">
              Clear modules. Mentor feedback. Project labs. Graduate with real skills and a portfolio that opens doors.
            </p>

            <div className="ls-hero-cta-row">
              <a
                href="#programs"
                onClick={(e) => scrollToSection(e, "programs")}
                className="ls-btn-primary ls-hero-btn"
              >
                <span>Explore Programs</span>
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => setIsApplyOpen(true)}
                className="ls-btn-outline ls-hero-btn"
              >
                <span>Join a Cohort</span>
                <ArrowRight size={16} />
              </button>
            </div>

            {/* Feature Bullets */}
            <div className="ls-hero-features-row">
              <div className="ls-hero-feature-item">
                <Headphones size={15} className="ls-feature-icon" />
                <span>Live Mentor Guidance</span>
              </div>
              <div className="ls-hero-feature-item">
                <Users size={15} className="ls-feature-icon" />
                <span>Cohort Community</span>
              </div>
              <div className="ls-hero-feature-item">
                <Briefcase size={15} className="ls-feature-icon" />
                <span>Portfolio-Ready Outcomes</span>
              </div>
            </div>
          </div>

          {/* Right Interactive Student Learning Dashboard Mockup */}
          <div className="ls-hero-visual">
            <div className="ls-dashboard-window">
              {/* Left Mini Sidebar */}
              <div className="ls-dash-sidebar">
                <div className="ls-dash-logo">
                  <LearnSphereLogo size={22} />
                </div>
                <div className="ls-dash-nav-list">
                  <div className="ls-dash-nav-item active" title="Dashboard">
                    <Layout size={15} />
                    <span>Dashboard</span>
                  </div>
                  <div className="ls-dash-nav-item" title="My Courses">
                    <BookOpen size={15} />
                    <span>My Courses</span>
                  </div>
                  <div className="ls-dash-nav-item" title="Calendar">
                    <Calendar size={15} />
                    <span>Calendar</span>
                  </div>
                  <div className="ls-dash-nav-item" title="Mentors">
                    <Users size={15} />
                    <span>Mentors</span>
                  </div>
                  <div className="ls-dash-nav-item" title="Community">
                    <MessageSquare size={15} />
                    <span>Community</span>
                  </div>
                  <div className="ls-dash-nav-item" title="Resources">
                    <Layers size={15} />
                    <span>Resources</span>
                  </div>
                </div>
                <div className="ls-dash-user-avatar">
                  <img src={studentAishaImg} alt="Aisha" className="ls-avatar-img" />
                </div>
              </div>

              {/* Main Dashboard Panel */}
              <div className="ls-dash-main">
                <div className="ls-dash-header-row">
                  <div>
                    <h3 className="ls-dash-greeting">Welcome back, Aisha 👋</h3>
                    <p className="ls-dash-greeting-sub">You're making steady progress this week.</p>
                  </div>
                </div>

                {/* Two Top Cards Row */}
                <div className="ls-dash-cards-grid">
                  {/* Card 1: Your Progress */}
                  <div className="ls-dash-card ls-dash-progress-card">
                    <div className="ls-dash-card-label">Your Progress</div>
                    <div className="ls-dash-dial-box">
                      <div className="ls-dash-donut">
                        <svg viewBox="0 0 36 36" className="ls-donut-svg">
                          <path
                            className="ls-donut-bg"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                          <path
                            className="ls-donut-fill"
                            strokeDasharray="72, 100"
                            d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                          />
                        </svg>
                        <span className="ls-donut-val">72%</span>
                      </div>
                      <div className="ls-dash-track-text">
                        <strong>UI/UX Design Cohort</strong>
                        <small>Week 8 of 12 • Product Design</small>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const target = featuredPrograms[0];
                        setSelectedProgram(target);
                      }}
                      className="ls-btn-primary ls-dash-mini-btn"
                    >
                      Continue Learning
                    </button>
                  </div>

                  {/* Card 2: Upcoming Mentor Check-in */}
                  <div className="ls-dash-card ls-dash-mentor-card">
                    <div className="ls-dash-card-label">Upcoming Mentor Check-in</div>
                    <div className="ls-dash-mentor-profile">
                      <img src={mentorSarahImg} alt="Sarah Chen" className="ls-mentor-thumb" />
                      <div>
                        <strong>Sarah Chen</strong>
                        <span>Senior UX Designer</span>
                      </div>
                    </div>
                    <div className="ls-dash-checkin-time">
                      <Clock size={13} className="ls-text-blue" />
                      <span>Today, 4:00 PM</span>
                    </div>
                    <button
                      onClick={() => setIsAdvisorOpen(true)}
                      className="ls-btn-soft ls-dash-mini-btn"
                    >
                      Join Session
                    </button>
                  </div>
                </div>

                {/* Two Bottom Cards Row */}
                <div className="ls-dash-cards-grid ls-dash-bottom-grid">
                  {/* Card 3: Recent Activity */}
                  <div className="ls-dash-card">
                    <div className="ls-dash-card-label">Recent Activity</div>
                    <div className="ls-dash-activity-list">
                      <div className="ls-activity-item">
                        <div className="ls-act-icon green">
                          <CheckCircle2 size={12} />
                        </div>
                        <div className="ls-act-text">
                          <strong>Submitted: Mobile Banking UI</strong>
                          <small>Reviewed by Sarah • 2h ago</small>
                        </div>
                      </div>
                      <div className="ls-activity-item">
                        <div className="ls-act-icon blue">
                          <MessageSquare size={12} />
                        </div>
                        <div className="ls-act-text">
                          <strong>Feedback: Dashboard Redesign</strong>
                          <small>1 new mentor comment • 5h ago</small>
                        </div>
                      </div>
                      <div className="ls-activity-item">
                        <div className="ls-act-icon purple">
                          <Award size={12} />
                        </div>
                        <div className="ls-act-text">
                          <strong>Completed: User Research Quiz</strong>
                          <small>Passed 96% score • 1d ago</small>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card 4: Cohort Chat */}
                  <div className="ls-dash-card">
                    <div className="ls-dash-card-label">Cohort Chat</div>
                    <div className="ls-dash-chat-messages">
                      <div className="ls-chat-bubble">
                        <img src={studentJamesImg} alt="James" className="ls-chat-avatar" />
                        <div className="ls-chat-bubble-content">
                          <strong>James</strong>
                          <p>Great feedback everyone on the component library!</p>
                        </div>
                      </div>
                      <div className="ls-chat-bubble reply">
                        <img src={studentEmilyImg} alt="Emily" className="ls-chat-avatar" />
                        <div className="ls-chat-bubble-content">
                          <strong>Emily</strong>
                          <p>Thanks! Updated my prototype links in Figma.</p>
                        </div>
                      </div>
                    </div>
                    <div className="ls-dash-chat-input">
                      <input type="text" placeholder="Message cohort..." readOnly />
                      <Send size={13} className="ls-text-blue" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. KEY METRICS STATS BAR */}
      <section className="ls-stats-bar">
        <div className="ls-wrap ls-stats-container">
          <div className="ls-stat-card">
            <div className="ls-stat-icon-box">
              <Users size={20} />
            </div>
            <div className="ls-stat-info">
              <strong>12,500+</strong>
              <span>Active Learners</span>
            </div>
          </div>

          <div className="ls-stat-card">
            <div className="ls-stat-icon-box">
              <CalendarDays size={20} />
            </div>
            <div className="ls-stat-info">
              <strong>8,200+</strong>
              <span>Mentor Sessions</span>
            </div>
          </div>

          <div className="ls-stat-card">
            <div className="ls-stat-icon-box">
              <CheckCircle2 size={20} />
            </div>
            <div className="ls-stat-info">
              <strong>92%</strong>
              <span>Completion Rate</span>
            </div>
          </div>

          <div className="ls-stat-card">
            <div className="ls-stat-icon-box">
              <Briefcase size={20} />
            </div>
            <div className="ls-stat-info">
              <strong>1,800+</strong>
              <span>Portfolio Projects</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SECTION: YOUR LEARNING PATH (A clear path from start to success) */}
      <section className="ls-section ls-path-section" id="path">
        <div className="ls-wrap">
          <div className="ls-section-header text-center">
            <span className="ls-tag-badge">YOUR LEARNING PATH</span>
            <h2 className="ls-section-title">A clear path from start to success</h2>
          </div>

          <div className="ls-path-steps-row">
            {/* Step 1 */}
            <div className="ls-path-card">
              <div className="ls-path-num-badge">1</div>
              <div className="ls-path-icon-box">
                <BookOpen size={22} />
              </div>
              <h3 className="ls-path-card-title">Start with Fundamentals</h3>
              <p className="ls-path-card-desc">
                Build a strong foundation with core concepts and essential tools you'll use throughout your journey.
              </p>
            </div>

            <div className="ls-path-connector" />

            {/* Step 2 */}
            <div className="ls-path-card">
              <div className="ls-path-num-badge">2</div>
              <div className="ls-path-icon-box">
                <Calendar size={22} />
              </div>
              <h3 className="ls-path-card-title">Learn in Weekly Modules</h3>
              <p className="ls-path-card-desc">
                Follow structured lessons, practical exercises, and quizzes designed for steady weekly progress.
              </p>
            </div>

            <div className="ls-path-connector" />

            {/* Step 3 */}
            <div className="ls-path-card">
              <div className="ls-path-num-badge">3</div>
              <div className="ls-path-icon-box">
                <Code size={22} />
              </div>
              <h3 className="ls-path-card-title">Build in Project Labs</h3>
              <p className="ls-path-card-desc">
                Apply what you learn in hands-on projects with mentor feedback and real-world scenarios.
              </p>
            </div>

            <div className="ls-path-connector" />

            {/* Step 4 */}
            <div className="ls-path-card">
              <div className="ls-path-num-badge">4</div>
              <div className="ls-path-icon-box">
                <Trophy size={22} />
              </div>
              <h3 className="ls-path-card-title">Graduate with a Portfolio</h3>
              <p className="ls-path-card-desc">
                Complete a capstone project and graduate with a portfolio that showcases your best work.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SECTION: FEATURED COHORTS (Programs designed for in-demand careers) */}
      <section className="ls-section ls-programs-section" id="programs">
        <div className="ls-wrap">
          <div className="ls-programs-header-row">
            <div>
              <span className="ls-tag-badge">FEATURED COHORTS</span>
              <h2 className="ls-section-title">Programs designed for in-demand careers</h2>
            </div>
            <a
              href="#pricing"
              onClick={(e) => scrollToSection(e, "pricing")}
              className="ls-link-with-arrow"
            >
              <span>View all programs</span>
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="ls-programs-grid">
            {featuredPrograms.map((prog) => (
              <div key={prog.id} className="ls-prog-card">
                <div className="ls-prog-preview-banner">
                  <img src={prog.img} alt={prog.title} loading="lazy" />
                </div>

                <div className="ls-prog-body">
                  <h3 className="ls-prog-name">{prog.title}</h3>
                  <p className="ls-prog-desc">{prog.desc}</p>

                  <div className="ls-prog-meta-list">
                    <div className="ls-prog-meta-row">
                      <Clock size={14} className="ls-meta-icon" />
                      <span className="ls-meta-label">Duration</span>
                      <strong className="ls-meta-val">{prog.duration}</strong>
                    </div>

                    <div className="ls-prog-meta-row">
                      <Target size={14} className="ls-meta-icon" />
                      <span className="ls-meta-label">Level</span>
                      <strong className="ls-meta-val">{prog.level}</strong>
                    </div>

                    <div className="ls-prog-meta-row">
                      <Calendar size={14} className="ls-meta-icon" />
                      <span className="ls-meta-label">Next Cohort</span>
                      <strong className="ls-meta-val">{prog.nextCohort}</strong>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedProgram(prog)}
                    className="ls-prog-learn-link"
                  >
                    <span>Learn More</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. SECTION: CURRICULUM ROADMAP (Structured curriculum. Measurable progress.) */}
      <section className="ls-section ls-curriculum-section" id="curriculum">
        <div className="ls-wrap ls-curriculum-layout">
          {/* Left Copy */}
          <div className="ls-curriculum-copy">
            <span className="ls-tag-badge">CURRICULUM ROADMAP</span>
            <h2 className="ls-section-title">
              Structured curriculum. <br />
              Measurable progress.
            </h2>
            <p className="ls-curriculum-desc">
              Our programs are broken into weekly modules with clear outcomes and milestones so you always know what's next.
            </p>
            <a
              href="#curriculum"
              onClick={(e) => {
                e.preventDefault();
                setIsApplyOpen(true);
              }}
              className="ls-link-with-arrow"
            >
              <span>View Full Curriculum</span>
              <ArrowRight size={15} />
            </a>
          </div>

          {/* Right Interactive/Visual Weekly Timeline Tracker */}
          <div className="ls-timeline-card">
            <div className="ls-timeline-items">
              {curriculumRoadmap.map((item, idx) => (
                <div key={item.week} className={`ls-timeline-row ${item.status}`}>
                  <div className="ls-timeline-node-col">
                    <div className={`ls-timeline-dot ${item.status}`}>
                      {item.status === "completed" ? (
                        <Check size={10} strokeWidth={3} />
                      ) : (
                        <span className="ls-dot-inner" />
                      )}
                    </div>
                    {idx !== curriculumRoadmap.length - 1 && <div className="ls-timeline-line" />}
                  </div>

                  <div className="ls-timeline-content-col">
                    <div className="ls-timeline-week">{item.week}</div>
                    <h4 className="ls-timeline-title">{item.title}</h4>
                    <p className="ls-timeline-desc">{item.desc}</p>
                  </div>

                  <div className="ls-timeline-badge-col">
                    <span className={`ls-status-pill ${item.status}`}>
                      {item.badge}
                      {item.status === "completed" && <Check size={11} className="ml-1" />}
                      {item.status === "in-progress" && <Clock size={11} className="ml-1" />}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. SECTION: MENTOR SUPPORT (Learn with guidance from industry experts) */}
      <section className="ls-section ls-mentors-section" id="mentors">
        <div className="ls-wrap">
          <div className="ls-section-header text-center">
            <span className="ls-tag-badge">MENTOR SUPPORT</span>
            <h2 className="ls-section-title">Learn with guidance from industry experts</h2>
          </div>

          <div className="ls-mentors-3col-grid">
            {/* Card 1: Meet Your Mentors */}
            <div className="ls-mentor-feature-card">
              <h3 className="ls-mentor-card-title">Meet Your Mentors</h3>
              <div className="ls-mentors-avatar-stack">
                <img src={mentorSarahImg} alt="Mentor Sarah" className="ls-stack-avatar" />
                <img src={mentorDavidImg} alt="Mentor David" className="ls-stack-avatar" />
                <img src={mentorElenaImg} alt="Mentor Elena" className="ls-stack-avatar" />
                <div className="ls-stack-avatar plus">+12</div>
              </div>
              <p className="ls-mentor-card-desc">
                Experienced professionals who've worked at top companies and love teaching what they do.
              </p>
              <button
                onClick={() => setIsAdvisorOpen(true)}
                className="ls-card-link-action"
              >
                <span>View All Mentors</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Card 2: Office Hours */}
            <div className="ls-mentor-feature-card">
              <div className="ls-mentor-visual-banner">
                <img src={mentorOfficeHoursImg} alt="Weekly Office Hours" loading="lazy" />
              </div>
              <h3 className="ls-mentor-card-title">Office Hours</h3>
              <p className="ls-mentor-card-desc">
                Join weekly live sessions, Q&A, and doubt clearing with your mentors and cohort.
              </p>
              <button
                onClick={() => setIsAdvisorOpen(true)}
                className="ls-card-link-action"
              >
                <span>View Schedule</span>
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Card 3: Feedback That Helps */}
            <div className="ls-mentor-feature-card">
              <div className="ls-mentor-visual-banner">
                <img src={mentorFeedbackImg} alt="Feedback That Helps" loading="lazy" />
              </div>
              <h3 className="ls-mentor-card-title">Feedback That Helps</h3>
              <p className="ls-mentor-card-desc">
                Get actionable feedback on your work and iterate with clarity and confidence.
              </p>
              <button
                onClick={() => setIsAdvisorOpen(true)}
                className="ls-card-link-action"
              >
                <span>How Feedback Works</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. SECTION: PROJECT-LED LEARNING (Build real projects. Get real feedback.) */}
      <section className="ls-section ls-projects-section" id="projects">
        <div className="ls-wrap">
          <div className="ls-section-header text-center">
            <span className="ls-tag-badge">PROJECT-LED LEARNING</span>
            <h2 className="ls-section-title">Build real projects. Get real feedback.</h2>
          </div>

          <div className="ls-projects-4col-grid">
            {/* Card 1 */}
            <div className="ls-proj-feature-card">
              <div className="ls-proj-card-banner">
                <img src={assignmentsImg} alt="Hands-on Assignments" loading="lazy" />
              </div>
              <div className="ls-proj-card-body">
                <h3 className="ls-proj-card-title">Hands-on Assignments</h3>
                <p className="ls-proj-card-desc">
                  Weekly tasks to apply what you learn and strengthen core skills.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="ls-proj-feature-card">
              <div className="ls-proj-card-banner">
                <img src={capstoneImg} alt="Capstone Projects" loading="lazy" />
              </div>
              <div className="ls-proj-card-body">
                <h3 className="ls-proj-card-title">Capstone Projects</h3>
                <p className="ls-proj-card-desc">
                  Work on end-to-end projects that solve real-world problems.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="ls-proj-feature-card">
              <div className="ls-proj-card-banner">
                <img src={critiqueImg} alt="Critique Sessions" loading="lazy" />
              </div>
              <div className="ls-proj-card-body">
                <h3 className="ls-proj-card-title">Critique Sessions</h3>
                <p className="ls-proj-card-desc">
                  Present your work, receive constructive feedback, and improve.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="ls-proj-feature-card">
              <div className="ls-proj-card-banner">
                <img src={portfolioImg} alt="Portfolio Building" loading="lazy" />
              </div>
              <div className="ls-proj-card-body">
                <h3 className="ls-proj-card-title">Portfolio Building</h3>
                <p className="ls-proj-card-desc">
                  Curate and publish your best work to stand out to employers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SECTION: CURRICULUM THAT MATTERS (Graduate job-ready with skills and confidence.) */}
      <section className="ls-section ls-outcomes-section" id="outcomes">
        <div className="ls-wrap">
          <div className="ls-outcomes-split-grid">
            {/* Left Copy */}
            <div className="ls-outcomes-copy">
              <span className="ls-tag-badge">CURRICULUM THAT MATTERS</span>
              <h2 className="ls-section-title">
                Graduate job-ready with <br />
                skills and confidence.
              </h2>

              <ul className="ls-outcomes-checklist">
                <li>
                  <CheckCircle2 size={18} className="ls-check-icon" />
                  <span>In-demand skills employers look for</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="ls-check-icon" />
                  <span>Portfolio-ready projects</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="ls-check-icon" />
                  <span>Resume & interview preparation</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="ls-check-icon" />
                  <span>Lifetime access to alumni network</span>
                </li>
              </ul>

              <a
                href="#pricing"
                onClick={(e) => scrollToSection(e, "pricing")}
                className="ls-link-with-arrow"
              >
                <span>See Full Outcomes</span>
                <ArrowRight size={15} />
              </a>
            </div>

            {/* Right 3 Visual Data Cards */}
            <div className="ls-outcomes-cards-grid">
              {/* Card 1: 92% Placement */}
              <div className="ls-out-card">
                <div className="ls-out-huge-stat">92%</div>
                <p className="ls-out-card-label">of graduates get job opportunities within 6 months</p>
                {/* Mini Bar Chart Graphic */}
                <div className="ls-mini-barchart">
                  <div className="ls-bar" style={{ height: "45%" }} />
                  <div className="ls-bar" style={{ height: "62%" }} />
                  <div className="ls-bar" style={{ height: "55%" }} />
                  <div className="ls-bar" style={{ height: "80%" }} />
                  <div className="ls-bar active" style={{ height: "92%" }} />
                  <div className="ls-bar" style={{ height: "74%" }} />
                </div>
              </div>

              {/* Card 2: Top Skills Gained */}
              <div className="ls-out-card">
                <div className="ls-out-card-head">Top Skills Gained</div>
                <div className="ls-skills-progress-list">
                  <div className="ls-skill-row">
                    <span>UI/UX Design</span>
                    <span className="ls-skill-pct">96%</span>
                  </div>
                  <div className="ls-skill-bar-wrap">
                    <div className="ls-skill-bar-fill" style={{ width: "96%" }} />
                  </div>

                  <div className="ls-skill-row">
                    <span>User Research</span>
                    <span className="ls-skill-pct">91%</span>
                  </div>
                  <div className="ls-skill-bar-wrap">
                    <div className="ls-skill-bar-fill" style={{ width: "91%" }} />
                  </div>

                  <div className="ls-skill-row">
                    <span>Prototyping</span>
                    <span className="ls-skill-pct">89%</span>
                  </div>
                  <div className="ls-skill-bar-wrap">
                    <div className="ls-skill-bar-fill" style={{ width: "89%" }} />
                  </div>

                  <div className="ls-skill-row">
                    <span>Figma</span>
                    <span className="ls-skill-pct">94%</span>
                  </div>
                  <div className="ls-skill-bar-wrap">
                    <div className="ls-skill-bar-fill" style={{ width: "94%" }} />
                  </div>

                  <div className="ls-skill-row">
                    <span>Design Systems</span>
                    <span className="ls-skill-pct">90%</span>
                  </div>
                  <div className="ls-skill-bar-wrap">
                    <div className="ls-skill-bar-fill" style={{ width: "90%" }} />
                  </div>
                </div>
              </div>

              {/* Card 3: Portfolio Impact */}
              <div className="ls-out-card">
                <div className="ls-out-card-head">Portfolio Impact</div>
                <div className="ls-out-huge-stat text-blue">+3.2x</div>
                <p className="ls-out-card-label">more interview callbacks with portfolio projects</p>
                {/* Mini upward trend visual */}
                <div className="ls-mini-wave-chart">
                  <svg viewBox="0 0 100 40" preserveAspectRatio="none" className="ls-wave-svg">
                    <path
                      d="M0,35 Q25,28 50,18 T100,6 L100,40 L0,40 Z"
                      fill="rgba(37, 99, 235, 0.12)"
                    />
                    <path
                      d="M0,35 Q25,28 50,18 T100,6"
                      fill="none"
                      stroke="#2563eb"
                      strokeWidth="2.5"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Badge Bar */}
          <div className="ls-outcomes-badges-row">
            <div className="ls-outcome-pill">
              <GraduationCap size={16} className="ls-text-blue" />
              <span>Certificate of Completion</span>
            </div>
            <div className="ls-outcome-pill">
              <FileCheck size={16} className="ls-text-blue" />
              <span>Verified Portfolio</span>
            </div>
            <div className="ls-outcome-pill">
              <Users size={16} className="ls-text-blue" />
              <span>Alumni Community Access</span>
            </div>
          </div>
        </div>
      </section>

      {/* 10. SECTION: STUDENT SUCCESS STORIES & PRICING (Loved by learners. Proven by results.) */}
      <section className="ls-section ls-pricing-section" id="pricing">
        <div className="ls-wrap">
          <div className="ls-section-header text-center">
            <span className="ls-tag-badge">STUDENT SUCCESS STORIES</span>
            <h2 className="ls-section-title">Loved by learners. Proven by results.</h2>
          </div>

          <div className="ls-pricing-grid">
            {/* Plan 1: Core */}
            <div className="ls-price-card">
              <div className="ls-plan-header">
                <h3 className="ls-plan-title">Core</h3>
                <p className="ls-plan-sub">Self-paced learning with community support</p>
              </div>

              <div className="ls-plan-price-block">
                <div className="ls-plan-amount">$699</div>
                <div className="ls-plan-terms">one-time payment</div>
              </div>

              <ul className="ls-plan-features">
                <li>
                  <Check size={16} className="ls-check-green" />
                  <span>Access to all course content</span>
                </li>
                <li>
                  <Check size={16} className="ls-check-green" />
                  <span>Community access</span>
                </li>
                <li>
                  <Check size={16} className="ls-check-green" />
                  <span>Projects & resources</span>
                </li>
                <li>
                  <Check size={16} className="ls-check-green" />
                  <span>Certificate of completion</span>
                </li>
              </ul>

              <button
                onClick={() => {
                  setAppForm({ ...appForm, experience: "Core Track ($699)" });
                  setIsApplyOpen(true);
                }}
                className="ls-btn-outline full-w"
              >
                Choose Core
              </button>
            </div>

            {/* Plan 2: Guided (Most Popular) */}
            <div className="ls-price-card featured">
              <div className="ls-popular-ribbon">Most Popular</div>

              <div className="ls-plan-header">
                <h3 className="ls-plan-title">Guided</h3>
                <p className="ls-plan-sub">Mentor guidance and feedback</p>
              </div>

              <div className="ls-plan-price-block">
                <div className="ls-plan-amount">$1,199</div>
                <div className="ls-plan-terms">one-time payment</div>
              </div>

              <ul className="ls-plan-features">
                <li>
                  <Check size={16} className="ls-check-green" />
                  <span>Everything in Core</span>
                </li>
                <li>
                  <Check size={16} className="ls-check-green" />
                  <span>Weekly mentor feedback</span>
                </li>
                <li>
                  <Check size={16} className="ls-check-green" />
                  <span>Office hours access</span>
                </li>
                <li>
                  <Check size={16} className="ls-check-green" />
                  <span>Personalized support</span>
                </li>
              </ul>

              <button
                onClick={() => {
                  setAppForm({ ...appForm, experience: "Guided Track ($1,199)" });
                  setIsApplyOpen(true);
                }}
                className="ls-btn-primary full-w"
              >
                Choose Guided
              </button>
            </div>

            {/* Plan 3: Career Track */}
            <div className="ls-price-card">
              <div className="ls-plan-header">
                <h3 className="ls-plan-title">Career Track</h3>
                <p className="ls-plan-sub">Full support to launch your career</p>
              </div>

              <div className="ls-plan-price-block">
                <div className="ls-plan-amount">$1,799</div>
                <div className="ls-plan-terms">one-time payment</div>
              </div>

              <ul className="ls-plan-features">
                <li>
                  <Check size={16} className="ls-check-green" />
                  <span>Everything in Guided</span>
                </li>
                <li>
                  <Check size={16} className="ls-check-green" />
                  <span>1:1 career coaching</span>
                </li>
                <li>
                  <Check size={16} className="ls-check-green" />
                  <span>Resume & LinkedIn review</span>
                </li>
                <li>
                  <Check size={16} className="ls-check-green" />
                  <span>Job placement support</span>
                </li>
              </ul>

              <button
                onClick={() => {
                  setAppForm({ ...appForm, experience: "Career Track ($1,799)" });
                  setIsApplyOpen(true);
                }}
                className="ls-btn-outline full-w"
              >
                Choose Career Track
              </button>
            </div>
          </div>

          <div className="ls-pricing-foot-note">
            <span>Flexible payment plans available. Need help choosing? </span>
            <button
              onClick={() => setIsAdvisorOpen(true)}
              className="ls-talk-advisor-btn"
            >
              Talk to an advisor →
            </button>
          </div>
        </div>
      </section>

      {/* 11. SECTION: FREQUENTLY ASKED QUESTIONS (Everything you need to know) */}
      <section className="ls-section ls-faq-section" id="faq">
        <div className="ls-wrap">
          <div className="ls-faq-header-row">
            <div>
              <span className="ls-tag-badge">FREQUENTLY ASKED QUESTIONS</span>
              <h2 className="ls-section-title">Everything you need to know</h2>
            </div>
            <button
              onClick={() => setIsAdvisorOpen(true)}
              className="ls-link-with-arrow"
            >
              <span>Contact Support</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="ls-faq-2col-grid">
            {faqList.map((faq, idx) => (
              <div
                key={faq.q}
                className={`ls-faq-item ${openFaq === idx ? "open" : ""}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="ls-faq-question-row">
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className={`ls-faq-chevron ${openFaq === idx ? "open" : ""}`} />
                </div>
                {openFaq === idx && (
                  <div className="ls-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 12. BOTTOM CTA BANNER (Ready to build your future?) */}
      <section className="ls-cta-banner-section">
        <div className="ls-wrap">
          <div className="ls-cta-card">
            {/* Left Vector/Cap Graphic */}
            <div className="ls-cta-graphic-col">
              <img
                src={graduationBannerImg}
                alt="LearnSphere Graduation Cap and Diploma"
                className="ls-grad-cap-img"
              />
            </div>

            {/* Middle Text */}
            <div className="ls-cta-text-col">
              <h2 className="ls-cta-headline">Ready to build your future?</h2>
              <p className="ls-cta-sub">
                Join the next cohort and take the first step towards a better career.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="ls-cta-actions-col">
              <button
                onClick={() => {
                  setSelectedProgram(null);
                  setIsApplyOpen(true);
                }}
                className="ls-btn-white"
              >
                <span>Apply for Next Cohort</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => setIsAdvisorOpen(true)}
                className="ls-cta-sub-link"
              >
                Schedule a call with an advisor
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 13. FOOTER */}
      <footer className="ls-footer">
        <div className="ls-wrap ls-footer-grid">
          {/* Col 1: Brand & Bio */}
          <div className="ls-footer-brand-col">
            <div className="ls-brand footer">
              <LearnSphereLogo size={30} />
              <div className="ls-brand-text">
                <span className="ls-brand-name light">LearnSphere</span>
                <span className="ls-brand-sub light">Academy</span>
              </div>
            </div>
            <p className="ls-footer-bio">
              Guided online learning with structure you can trust. Real skills, wireframes, and launch your career.
            </p>
            <div className="ls-footer-social-icons">
              <a href="#top" aria-label="Twitter">𝕏</a>
              <a href="#top" aria-label="LinkedIn">in</a>
              <a href="#top" aria-label="Instagram">📷</a>
              <a href="#top" aria-label="Discord">💬</a>
            </div>
          </div>

          {/* Col 2: Programs */}
          <div className="ls-footer-links-col">
            <h4>Programs</h4>
            <a href="#programs" onClick={(e) => scrollToSection(e, "programs")}>UI/UX Design</a>
            <a href="#programs" onClick={(e) => scrollToSection(e, "programs")}>Front-End Development</a>
            <a href="#programs" onClick={(e) => scrollToSection(e, "programs")}>Data Analytics</a>
            <a href="#programs" onClick={(e) => scrollToSection(e, "programs")}>Product Design</a>
            <a href="#programs" onClick={(e) => scrollToSection(e, "programs")}>All Programs</a>
          </div>

          {/* Col 3: Resources */}
          <div className="ls-footer-links-col">
            <h4>Resources</h4>
            <a href="#curriculum" onClick={(e) => scrollToSection(e, "curriculum")}>Curriculum</a>
            <a href="#mentors" onClick={(e) => scrollToSection(e, "mentors")}>Mentors</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, "projects")}>Projects</a>
            <a href="#faq" onClick={(e) => scrollToSection(e, "faq")}>Blog</a>
            <a href="#faq" onClick={(e) => scrollToSection(e, "faq")}>Careers</a>
          </div>

          {/* Col 4: Company */}
          <div className="ls-footer-links-col">
            <h4>Company</h4>
            <a href="#top">About Us</a>
            <a href="#top" onClick={(e) => { e.preventDefault(); setIsAdvisorOpen(true); }}>Contact Us</a>
            <a href="#top">Privacy Policy</a>
            <a href="#top">Terms of Service</a>
          </div>

          {/* Col 5: Stay in the loop */}
          <div className="ls-footer-newsletter-col">
            <h4>Stay in the loop</h4>
            <p>Get tips, updates, and cohort announcements.</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for subscribing to LearnSphere announcements!");
              }}
              className="ls-footer-input-row"
            >
              <input type="email" placeholder="Enter your email" required />
              <button type="submit" aria-label="Submit email">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="ls-footer-bottom">
          <div className="ls-wrap ls-footer-bottom-inner">
            <p>© 2024 LearnSphere Academy. All rights reserved.</p>
            <p>Made with ❤️ for learners worldwide</p>
          </div>
        </div>
      </footer>

      {/* Program Detail Modal */}
      {selectedProgram && (
        <div
          className="ls-modal-backdrop"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="ls-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="ls-modal-close"
              onClick={() => setSelectedProgram(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="ls-modal-header">
              <span className="ls-tag-badge">{selectedProgram.duration} • {selectedProgram.level}</span>
              <h2>{selectedProgram.title}</h2>
              <p>{selectedProgram.desc}</p>
            </div>

            <div className="ls-modal-img-wrap">
              <img src={selectedProgram.img} alt={selectedProgram.title} />
            </div>

            <div className="ls-modal-body">
              <h4>Key Skills & Technologies Covered:</h4>
              <ul className="ls-modal-highlights">
                {selectedProgram.highlights.map((h: string) => (
                  <li key={h}>
                    <Check size={16} className="ls-check-green" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="ls-modal-cohort-info">
                <div>
                  <small>NEXT COHORT START</small>
                  <strong>{selectedProgram.nextCohort}</strong>
                </div>
                <div>
                  <small>FORMAT</small>
                  <strong>Guided Online + Mentorship</strong>
                </div>
              </div>

              <button
                onClick={() => {
                  const title = selectedProgram.title;
                  setSelectedProgram(null);
                  setAppForm({ ...appForm, track: `${title} (${selectedProgram.duration})` });
                  setIsApplyOpen(true);
                }}
                className="ls-btn-primary full-w"
              >
                Enroll in {selectedProgram.title}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Application / Tour Modal */}
      {(isApplyOpen || isAdvisorOpen) && (
        <div
          className="ls-modal-backdrop"
          onClick={() => {
            setIsApplyOpen(false);
            setIsAdvisorOpen(false);
          }}
        >
          <div
            className="ls-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="ls-modal-close"
              onClick={() => {
                setIsApplyOpen(false);
                setIsAdvisorOpen(false);
              }}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            {!formSubmitted ? (
              <>
                <div className="ls-modal-header">
                  <h2>{isApplyOpen ? "Apply for Next Cohort" : "Schedule an Advisor Call"}</h2>
                  <p>
                    {isApplyOpen
                      ? "Submit your application in 2 minutes. Cohort seats are limited to ensure 1-on-1 mentor guidance."
                      : "Speak with an admissions advisor to find the right program, review financing options, or ask questions."}
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="ls-modal-form">
                  <div className="ls-form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Aisha Taylor"
                      value={appForm.name}
                      onChange={(e) => setAppForm({ ...appForm, name: e.target.value })}
                    />
                  </div>

                  <div className="ls-form-2col">
                    <div className="ls-form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="aisha@example.com"
                        value={appForm.email}
                        onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                      />
                    </div>
                    <div className="ls-form-group">
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

                  <div className="ls-form-2col">
                    <div className="ls-form-group">
                      <label>Desired Program</label>
                      <select
                        value={appForm.track}
                        onChange={(e) => setAppForm({ ...appForm, track: e.target.value })}
                      >
                        <option value="UI/UX Design (12 Weeks)">UI/UX Design (12 Weeks)</option>
                        <option value="Front-End Development (14 Weeks)">Front-End Development (14 Weeks)</option>
                        <option value="Data Analytics (12 Weeks)">Data Analytics (12 Weeks)</option>
                        <option value="Product Design (12 Weeks)">Product Design (12 Weeks)</option>
                      </select>
                    </div>
                    <div className="ls-form-group">
                      <label>Cohort Start Date</label>
                      <select
                        value={appForm.cohort}
                        onChange={(e) => setAppForm({ ...appForm, cohort: e.target.value })}
                      >
                        <option value="June 3, 2024">June 3, 2024</option>
                        <option value="June 10, 2024">June 10, 2024</option>
                        <option value="June 17, 2024">June 17, 2024</option>
                        <option value="June 24, 2024">June 24, 2024</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="ls-btn-primary full-w">
                    {isApplyOpen ? "Submit Cohort Application" : "Confirm Call Reservation"}
                  </button>

                  <div className="ls-form-privacy">
                    <Lock size={12} />
                    <span>Your information is strictly protected and never shared with third parties.</span>
                  </div>
                </form>
              </>
            ) : (
              <div className="ls-modal-success">
                <CheckCircle2 size={54} className="ls-text-blue" />
                <h3>Application Received!</h3>
                <p>
                  Thank you <strong>{appForm.name}</strong>! We have sent confirmation and curriculum onboarding details to <strong>{appForm.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setIsApplyOpen(false);
                    setIsAdvisorOpen(false);
                  }}
                  className="ls-btn-primary full-w"
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

export default LearnSphereAcademy;
