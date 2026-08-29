import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Calendar,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Clock3,
  Compass,
  FileText,
  Filter,
  GraduationCap,
  Heart,
  Info,
  Layers,
  MapPin,
  Menu,
  MessageCircle,
  Plus,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Users,
  X,
} from "lucide-react";

import { imageUrl } from "../../assets/images";

const fallbackAtlas = imageUrl("education/atlascollege.webp") || "/images/education/atlascollege.webp";

const heroImage = imageUrl("education/atlascollege/atlas-hero-new.jpg") || imageUrl("education/atlascollege/atlas-hero.webp") || fallbackAtlas;
const counselorLaura = imageUrl("education/atlascollege/counselor-laura.jpg") || imageUrl("education/atlascollege/atlas-counselors.webp") || fallbackAtlas;
const counselorDavid = imageUrl("education/atlascollege/counselor-david.jpg") || imageUrl("education/atlascollege/atlas-counselors.webp") || fallbackAtlas;
const counselorMaria = imageUrl("education/atlascollege/counselor-maria.jpg") || imageUrl("education/atlascollege/atlas-counselors.webp") || fallbackAtlas;
const counselorJames = imageUrl("education/atlascollege/counselor-james.jpg") || imageUrl("education/atlascollege/atlas-counselors.webp") || fallbackAtlas;
const campusIvy = imageUrl("education/atlascollege/campus-ivy.jpg") || fallbackAtlas;

import "./AtlasCollegeCounseling.css";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Programs", href: "#programs" },
  { name: "Counselors", href: "#counselors" },
  { name: "Strategy Tool", href: "#strategy-tool" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "Outcomes", href: "#outcomes" },
  { name: "FAQ", href: "#faq" },
];

const services = [
  {
    icon: Compass,
    title: "Personalized Roadmaps",
    badge: "Custom Strategy",
    text: "Tailored academic & extracurricular blueprints aligned with your student's unique goals, passions, and high school timeline.",
  },
  {
    icon: Users,
    title: "Former Admissions Officers",
    badge: "Insider Knowledge",
    text: "Direct guidance from veteran admissions staff who understand behind-the-scenes committee decisions at top universities.",
  },
  {
    icon: FileText,
    title: "Standout Essay Coaching",
    badge: "Authentic Voice",
    text: "Brainstorming and line-by-line editing to craft memorable Personal Statements and supplemental essays that pop.",
  },
  {
    icon: MessageCircle,
    title: "Mock Interview Prep",
    badge: "Confidence Boost",
    text: "Simulated alumni, department, and honors program interviews with constructive video feedback and body language tips.",
  },
  {
    icon: Target,
    title: "Balanced College Lists",
    badge: "Fit-First Focus",
    text: "Data-informed selection of Reach, Target, and Safety colleges matching academic fit, culture, and financial parameters.",
  },
  {
    icon: Heart,
    title: "Family Stress Reduction",
    badge: "Calm & Structured",
    text: "Transparent weekly parent portals, deadline management, and regular check-ins that take friction out of the household.",
  },
];

const programs = [
  {
    id: "early",
    title: "Early High School Foundation",
    grade: "Grades 9–10",
    duration: "6–12 Months",
    tag: "9th-10th",
    text: "Build strong academic course selection, summer activity strategy, leadership projects, and early testing timelines.",
    icon: Compass,
    highlights: ["Course selection planning", "Extracurricular strategy", "Summer program positioning"],
  },
  {
    id: "list",
    title: "College Strategy & List Curation",
    grade: "Grades 10–11",
    duration: "3–6 Months",
    tag: "10th-11th",
    text: "In-depth research and curation of a strategic college list based on academic profile, target major, and budget.",
    icon: BookOpen,
    highlights: ["Campus visit itineraries", "Demonstrated interest plans", "Financial fit analysis"],
  },
  {
    id: "bootcamp",
    title: "Comprehensive Application Suite",
    grade: "Grades 11–12",
    duration: "4–9 Months",
    tag: "11th-12th",
    text: "Complete end-to-end management of Common App, Coalition, and UC applications with deadline tracking.",
    icon: FileText,
    highlights: ["Common App & UC apps", "Activities list optimization", "LOR strategy"],
  },
  {
    id: "essay",
    title: "Personal Statement & Essay Mastery",
    grade: "Grades 11–12",
    duration: "2–4 Months",
    tag: "11th-12th",
    text: "Intensive 1:1 essay coaching to brainstorm, outline, refine, and polish primary and supplemental essays.",
    icon: Sparkles,
    highlights: ["Unlimited essay revisions", "Topic selection brainstorm", "Grammar & tone check"],
  },
  {
    id: "interview",
    title: "Interview & Portfolio Prep",
    grade: "Grades 11–12",
    duration: "1–2 Months",
    tag: "11th-12th",
    text: "Targeted practice for Ivy League, BS/MD, and scholarship interviews with tailored question prep.",
    icon: MessageCircle,
    highlights: ["Mock video sessions", "Resume & portfolio polish", "Post-interview follow up"],
  },
  {
    id: "transfer",
    title: "Transfer & Special Pathways",
    grade: "All Grades",
    duration: "Flexible",
    tag: "Transfer",
    text: "Strategic counseling for community college transfers, lateral 4-year transfers, and gap year planning.",
    icon: GraduationCap,
    highlights: ["Credit transfer review", "Mid-year updates", "Targeted essay strategy"],
  },
];

const counselors = [
  {
    name: "Laura Bennett, M.Ed.",
    role: "Lead Admissions Strategist",
    image: counselorLaura,
    alma: "Former Dartmouth Admissions Officer",
    exp: "14+ Years Experience",
    bio: "Specializes in Ivy League and Tier-1 university applications, essay narrative development, and high-impact extracurricular positioning.",
    tags: ["Ivy League", "STEM & Humanities", "Essay Expert"],
  },
  {
    name: "David Kim, M.A.",
    role: "Senior College Counselor",
    image: counselorDavid,
    alma: "Former USC Admissions Reader",
    exp: "11+ Years Experience",
    bio: "Focuses on holistic student development, engineering & computer science major pathways, and merit scholarship strategies.",
    tags: ["STEM Pathways", "UC System", "Scholarships"],
  },
  {
    name: "Maria Hernandez, M.Ed.",
    role: "Admissions Counselor",
    image: counselorMaria,
    alma: "Former NYU Admissions Advisor",
    exp: "9+ Years Experience",
    bio: "Passionate about helping students find creative voice in essays, navigating pre-med/pre-law tracks, and campus fit matching.",
    tags: ["Pre-Med / BS-MD", "Arts & Business", "Interview Coach"],
  },
  {
    name: "James Wilson, M.A.",
    role: "College & Financial Advisor",
    image: counselorJames,
    alma: "Former UCLA Admissions Officer",
    exp: "12+ Years Experience",
    bio: "Expert in college list balancing, athletic recruiting advisory, transfer applications, and financial award negotiation.",
    tags: ["Athletic Advisory", "Financial Aid", "Transfers"],
  },
];

const journeySteps = [
  {
    step: "01",
    title: "Diagnostic Assessment",
    desc: "We analyze transcripts, test scores, extracurriculars, and student interests to establish a baseline readiness profile.",
    details: "Includes 90-minute family discovery call & transcript evaluation.",
  },
  {
    step: "02",
    title: "Strategic Blueprint",
    desc: "Custom milestone timeline covering standardized testing, course selection, and unique passion project development.",
    details: "Interactive digital dashboard updated weekly.",
  },
  {
    step: "03",
    title: "College Curation",
    desc: "Data-driven research to build a highly balanced list of Reach, Target, and Safety institutions.",
    details: "In-depth breakdown of admission probability & financial fit.",
  },
  {
    step: "04",
    title: "Essay Creation",
    desc: "Guided story excavation, topic development, drafting, and rigorous editing for all primary & supplemental essays.",
    details: "Average 48-hour turnarounds on draft reviews.",
  },
  {
    step: "05",
    title: "Application Perfection",
    desc: "Meticulous review of every section of the Common App, UC App, and Coalition portals prior to submission.",
    details: "Zero-error quality check on all activities and descriptions.",
  },
  {
    step: "06",
    title: "Decision & Merit Review",
    desc: "Evaluating offer letters, comparing financial aid packages, appeal guidance, and final matriculation decision.",
    details: "Financial aid appeal coaching & waitlist strategy.",
  },
];

const sampleColleges = [
  { name: "Stanford University", type: "Reach", rate: "3.9%", avgSat: "1500-1570", tag: "Ivy/Tier 1" },
  { name: "UCLA", type: "Match", rate: "8.6%", avgSat: "1410-1540", tag: "Public Ivy" },
  { name: "University of Michigan", type: "Match", rate: "17.7%", avgSat: "1350-1530", tag: "Public Ivy" },
  { name: "UC Berkeley", type: "Reach", rate: "11.4%", avgSat: "1410-1540", tag: "Public Ivy" },
  { name: "Boston University", type: "Likely", rate: "14.4%", avgSat: "1370-1510", tag: "Top 40" },
  { name: "NYU Stern", type: "Reach", rate: "7.0%", avgSat: "1490-1560", tag: "Top Business" },
  { name: "University of Virginia", type: "Match", rate: "16.3%", avgSat: "1400-1540", tag: "Public Ivy" },
  { name: "Georgetown University", type: "Reach", rate: "12.0%", avgSat: "1420-1560", tag: "Top 20" },
];

const faqs = [
  {
    q: "When is the best time to start college counseling?",
    a: "Starting in 9th or 10th grade allows the greatest opportunity to shape academic course selection, extracurricular leadership, and summer opportunities without last-minute stress. However, we also offer intensive senior year application bootcamps starting in the summer before 12th grade.",
  },
  {
    q: "How many students does each counselor work with?",
    a: "To guarantee personalized attention and rapid turnaround times (under 48 hours for essay edits), our counselors maintain strict cap limits of no more than 15–20 seniors per application cycle.",
  },
  {
    q: "How do you assist with college essays without taking over the student's voice?",
    a: "We act as editors and mentors, never ghostwriters. Our structured brainstorming prompts draw out genuine personal stories. We teach students how to refine their narrative structure, tone, and clarity while ensuring the final essay remains 100% authentic to their own voice.",
  },
  {
    q: "Do you offer guidance on merit scholarships and financial aid?",
    a: "Yes! Every custom college list includes financial fit analyses. We help families identify merit scholarship targets, review FAFSA/CSS Profile strategies, and assist with financial aid appeal letters if offers fall short.",
  },
  {
    q: "Do you offer guarantees on college admissions?",
    a: "Ethical college counseling organizations do not offer guaranteed admissions, as decisions rest solely with university committees. What we DO guarantee is a strategic, error-free application process that maximizes your student's statistical and holistic admission probability.",
  },
  {
    q: "How does Atlas handle test-optional policies?",
    a: "We evaluate test-optional strategy on a school-by-school basis. We compare a student's SAT/ACT score against each college's middle 50% range to determine whether submitting or withholding scores will yield a stronger application.",
  },
];

export function AtlasCollegeCounseling() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#about");
  const [isScrolled, setIsScrolled] = useState(false);

  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedProgramFilter, setSelectedProgramFilter] = useState("All");
  const [activeRoadmapStep, setActiveRoadmapStep] = useState(0);

  // Strategy Tool state
  const [searchCollege, setSearchCollege] = useState("");
  const [filterType, setFilterType] = useState("All");
  const [userGpa, setUserGpa] = useState("3.85");
  const [userSat, setUserSat] = useState("1450");
  const [myList, setMyList] = useState([
    { name: "Stanford University", status: "Reach" },
    { name: "UCLA", status: "Match" },
    { name: "University of Michigan", status: "Match" },
    { name: "Boston University", status: "Likely" },
  ]);
  const [newCollegeName, setNewCollegeName] = useState("");
  const [newCollegeStatus, setNewCollegeStatus] = useState("Match");

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [selectedCounselor, setSelectedCounselor] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    parentName: "",
    email: "",
    phone: "",
    studentGrade: "11th Grade",
    interests: "Comprehensive Application Support",
  });

  // Sticky navbar scroll listener & active nav scrollspy
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = navLinks.map((link) => link.href.substring(1));
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveNav(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll lock, Escape key, and resize on mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1180 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveNav(href);
    setMobileMenuOpen(false);

    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 90;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleAddCollege = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCollegeName.trim()) return;
    setMyList([...myList, { name: newCollegeName.trim(), status: newCollegeStatus }]);
    setNewCollegeName("");
  };

  const handleRemoveCollege = (index: number) => {
    setMyList(myList.filter((_, i) => i !== index));
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setIsBookingOpen(false);
    }, 2800);
  };

  const filteredColleges = sampleColleges.filter((c) => {
    const matchesSearch = c.name.toLowerCase().includes(searchCollege.toLowerCase());
    const matchesFilter = filterType === "All" || c.type === filterType;
    return matchesSearch && matchesFilter;
  });

  const filteredPrograms = programs.filter((p) => {
    if (selectedProgramFilter === "All") return true;
    if (selectedProgramFilter === "9th-10th") return p.tag.includes("9th") || p.tag.includes("10th");
    if (selectedProgramFilter === "11th-12th") return p.tag.includes("11th") || p.tag.includes("12th");
    if (selectedProgramFilter === "Transfer") return p.tag === "Transfer";
    return true;
  });

  return (
    <main className="atlas-app" id="about">
      {/* Top Banner Notice & Sticky Header Wrapper */}
      <header className={`atlas-header-wrapper ${isScrolled ? "scrolled" : ""}`}>
        {/* Top Banner Notice */}
        <div className="atlas-top-bar">
          <div className="atlas-container atlas-top-bar-content">
            <div className="atlas-top-bar-text">
              <Sparkles className="icon-gold icon-sparkle-spin" />
              <span>
                <strong>Fall 2026 Admissions Cohort Open</strong>
                <span className="atlas-top-bar-subtext"> — Limited spots available per counselor</span>
              </span>
            </div>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="atlas-top-bar-btn"
              aria-label="Reserve Your Consultation"
            >
              <span>Reserve Consultation</span>
              <ArrowRight className="top-btn-arrow" />
            </button>
          </div>
        </div>

        {/* Main Sticky Navigation Bar */}
        <nav className="atlas-header" aria-label="Main Navigation">
          <div className="atlas-container atlas-nav-inner">
            <a
              href="#about"
              className="atlas-brand"
              onClick={(e) => handleNavClick(e, "#about")}
              aria-label="Atlas College Counseling Home"
            >
              <div className="atlas-brand-badge">✧</div>
              <div className="atlas-brand-text">
                <span className="atlas-brand-title">ATLAS</span>
                <span className="atlas-brand-sub">COLLEGE COUNSELING</span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="atlas-nav-links">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`atlas-nav-link ${activeNav === link.href ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Nav Actions & Mobile Toggle */}
            <div className="atlas-nav-cta">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="atlas-btn-gold atlas-nav-desktop-btn"
              >
                <CalendarDays size={16} />
                <span>Book Consultation</span>
              </button>

              <button
                className={`atlas-mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Overlay Backdrop */}
      <div
        className={`atlas-mobile-backdrop ${mobileMenuOpen ? "is-visible" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      {/* Mobile Off-Canvas Drawer */}
      <div
        className={`atlas-mobile-drawer ${mobileMenuOpen ? "is-open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="atlas-mobile-drawer-header">
          <div className="atlas-brand-mini">
            <div className="atlas-brand-badge-mini">✧</div>
            <div className="atlas-brand-text-mini">
              <span className="atlas-brand-title-mini">ATLAS</span>
              <span className="atlas-brand-sub-mini">COLLEGE COUNSELING</span>
            </div>
          </div>
          <button
            className="atlas-mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation drawer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="atlas-mobile-drawer-body">
          <div className="atlas-mobile-menu-label">Navigation</div>
          <div className="atlas-mobile-menu-links">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`atlas-mobile-link ${activeNav === link.href ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span>{link.name}</span>
                <ArrowRight className="mobile-link-arrow" size={15} />
              </a>
            ))}
          </div>
        </div>

        <div className="atlas-mobile-drawer-footer">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsBookingOpen(true);
            }}
            className="atlas-btn-gold atlas-mobile-cta-btn"
          >
            <CalendarDays size={16} />
            <span>Book Free Consultation</span>
          </button>

          <div className="atlas-mobile-contact-card">
            <div className="atlas-mobile-contact-badge">
              <Sparkles size={13} className="icon-gold" />
              <span>Fall 2026 Admissions Open</span>
            </div>
            <div className="atlas-mobile-contact-note">
              Comprehensive Ivy & Elite College Counseling
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="atlas-hero-section">
        <div className="atlas-container hero-grid">
          <div className="hero-content">
            <div className="atlas-pill-tag">
              <Compass className="icon-gold" /> Purposefully Planned Admissions
            </div>
            <h1 className="hero-headline">
              Your College Journey.
              <br />
              <span className="text-highlight">Purposefully Planned.</span>
              <br />
              Confidently Achieved.
            </h1>
            <p className="hero-description">
              Personalized 1:1 college counseling for high school students and families. From academic roadmap building and custom essay strategy to Ivy League &amp; Top 50 admissions success.
            </p>

            <div className="hero-actions">
              <button onClick={() => setIsBookingOpen(true)} className="atlas-btn-primary">
                Schedule Free Strategy Call <ArrowRight />
              </button>
              <a
                href="#strategy-tool"
                className="atlas-btn-secondary"
                onClick={(e) => handleNavClick(e, "#strategy-tool")}
              >
                Try List Builder Tool <BarChart3 />
              </a>
            </div>

            {/* Feature Pills */}
            <div className="hero-feature-pills">
              <div className="feature-pill">
                <FileText />
                <span>Essay Coaching</span>
              </div>
              <div className="feature-pill">
                <Target />
                <span>List Strategy</span>
              </div>
              <div className="feature-pill">
                <CalendarDays />
                <span>Deadline Tracker</span>
              </div>
              <div className="feature-pill">
                <Users />
                <span>Mock Interviews</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Area */}
          <div className="hero-visual-wrapper">
            <div className="hero-image-card">
              <img src={heroImage} alt="Atlas College Counseling Student & Advisor Session" className="hero-img" />
              <div className="hero-img-overlay" />
            </div>

            {/* Floating Interactive Widget 1: College List Tracker */}
            <div className="floating-card list-tracker-card">
              <div className="floating-card-header">
                <Target className="icon-sage" />
                <div>
                  <strong>Student College Tracker</strong>
                  <small>4 Active Applications</small>
                </div>
              </div>
              <div className="mini-college-list">
                {myList.slice(0, 4).map((col, idx) => (
                  <div key={idx} className="mini-college-item">
                    <span>{col.name}</span>
                    <span className={`tag-badge tag-${col.status.toLowerCase()}`}>{col.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Interactive Widget 2: Live Counselor Message */}
            <div className="floating-card message-card">
              <div className="msg-header">
                <div className="msg-avatar">LB</div>
                <div>
                  <strong>Laura Bennett (Lead Counselor)</strong>
                  <small>Just now</small>
                </div>
              </div>
              <p className="msg-text">
                "Great work on your Common App draft! Your personal statement narrative is looking stellar."
              </p>
              <div className="msg-status">
                <CheckCircle2 className="icon-green" /> Draft Approved · 98% Readiness
              </div>
            </div>
          </div>
        </div>

        {/* Hero Background Campus Wallpaper */}
        <div className="hero-bg-texture" />
      </section>

      {/* Stats Counter Bar */}
      <section className="atlas-stats-section">
        <div className="atlas-container stats-grid">
          <div className="stat-card">
            <GraduationCap className="stat-icon" />
            <div className="stat-num">1,250+</div>
            <div className="stat-label">Students Advised</div>
          </div>
          <div className="stat-card">
            <ShieldCheck className="stat-icon" />
            <div className="stat-num">98%</div>
            <div className="stat-label">Acceptance Rate</div>
          </div>
          <div className="stat-card">
            <Award className="stat-icon" />
            <div className="stat-num">$24M+</div>
            <div className="stat-label">Scholarships Earned</div>
          </div>
          <div className="stat-card">
            <Star className="stat-icon" />
            <div className="stat-num">4.9 / 5.0</div>
            <div className="stat-label">Family Satisfaction</div>
          </div>
          <div className="stat-card">
            <Clock3 className="stat-icon" />
            <div className="stat-num">&lt; 48 Hrs</div>
            <div className="stat-label">Avg. Essay Turnaround</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="atlas-section" id="services">
        <div className="atlas-container">
          <div className="section-header text-center">
            <div className="atlas-pill-tag">Why Families Partner With Atlas</div>
            <h2 className="section-title">Comprehensive Support for Every Step</h2>
            <p className="section-subtitle">
              We remove the stress and confusion from college admissions, providing a structured, supportive, and data-informed pathway.
            </p>
          </div>

          <div className="services-grid">
            {services.map((srv, idx) => {
              const IconComponent = srv.icon;
              return (
                <div key={idx} className="service-card">
                  <div className="service-card-top">
                    <div className="service-icon-box">
                      <IconComponent />
                    </div>
                    <span className="service-badge">{srv.badge}</span>
                  </div>
                  <h3 className="service-title">{srv.title}</h3>
                  <p className="service-desc">{srv.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programs & Offerings Section */}
      <section className="atlas-section soft-bg" id="programs">
        <div className="atlas-container">
          <div className="section-header text-center">
            <div className="atlas-pill-tag">Tailored High School Programs</div>
            <h2 className="section-title">Guidance Built Around Your Timeline</h2>
            <p className="section-subtitle">
              Whether you are an ambitious 9th grader planning ahead or a senior writing final supplemental essays, we have a dedicated program for you.
            </p>

            {/* Filter Buttons */}
            <div className="filter-button-group">
              {["All", "9th-10th", "11th-12th", "Transfer"].map((filter) => (
                <button
                  key={filter}
                  className={`filter-btn ${selectedProgramFilter === filter ? "active" : ""}`}
                  onClick={() => setSelectedProgramFilter(filter)}
                >
                  {filter === "All" ? "All Programs" : filter}
                </button>
              ))}
            </div>
          </div>

          <div className="programs-grid">
            {filteredPrograms.map((prog) => {
              const IconComp = prog.icon;
              return (
                <div key={prog.id} className="program-card">
                  <div className="program-card-header">
                    <div className="program-grade-pill">{prog.grade}</div>
                    <span className="program-duration"><Clock className="icon-inline" /> {prog.duration}</span>
                  </div>
                  <div className="program-icon-title">
                    <IconComp className="program-icon" />
                    <h3>{prog.title}</h3>
                  </div>
                  <p className="program-text">{prog.text}</p>
                  <ul className="program-highlights">
                    {prog.highlights.map((h, i) => (
                      <li key={i}>
                        <Check className="icon-green" /> {h}
                      </li>
                    ))}
                  </ul>
                  <button onClick={() => setIsBookingOpen(true)} className="program-btn">
                    Enquire About Program <ArrowRight />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Counselors Section */}
      <section className="atlas-section" id="counselors">
        <div className="atlas-container">
          <div className="section-header text-center">
            <div className="atlas-pill-tag">Meet Our Expert Team</div>
            <h2 className="section-title">Former Admissions Officers &amp; Dedicated Mentors</h2>
            <p className="section-subtitle">
              Our counselors bring insider knowledge from top universities combined with warm, student-first coaching.
            </p>
          </div>

          <div className="counselors-grid">
            {counselors.map((c, i) => (
              <div key={i} className="counselor-card">
                <div className="counselor-image-wrapper">
                  <img src={c.image} alt={c.name} className="counselor-img" />
                  <div className="counselor-badge">{c.exp}</div>
                </div>
                <div className="counselor-info">
                  <h3 className="counselor-name">{c.name}</h3>
                  <div className="counselor-role">{c.role}</div>
                  <div className="counselor-alma"><GraduationCap className="icon-gold" /> {c.alma}</div>
                  <p className="counselor-bio">{c.bio}</p>
                  <div className="counselor-tags">
                    {c.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="counselor-tag">{tag}</span>
                    ))}
                  </div>
                  <button
                    onClick={() => {
                      setSelectedCounselor(c.name);
                      setIsBookingOpen(true);
                    }}
                    className="counselor-book-btn"
                  >
                    Book Consultation with {c.name.split(" ")[0]} <ArrowRight />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive College Strategy & List Curation Tool */}
      <section className="atlas-section dark-bg" id="strategy-tool">
        <div className="atlas-container">
          <div className="section-header text-center light-text">
            <div className="atlas-pill-tag gold-pill">Interactive Strategy Workspace</div>
            <h2 className="section-title text-white">College List Builder &amp; Target Evaluator</h2>
            <p className="section-subtitle text-light-muted">
              Simulate your college list balancing. Calculate your reach, match, and safety profile with our interactive dashboard.
            </p>
          </div>

          <div className="strategy-tool-card">
            <div className="tool-grid">
              {/* Left Column: List Simulator */}
              <div className="tool-panel">
                <div className="tool-panel-title">
                  <Target className="icon-gold" />
                  <h3>My Target College List ({myList.length})</h3>
                </div>

                <form onSubmit={handleAddCollege} className="add-college-form">
                  <input
                    type="text"
                    placeholder="e.g. Harvard, Cornell, Northwestern..."
                    value={newCollegeName}
                    onChange={(e) => setNewCollegeName(e.target.value)}
                    className="tool-input"
                  />
                  <select
                    value={newCollegeStatus}
                    onChange={(e) => setNewCollegeStatus(e.target.value)}
                    className="tool-select"
                  >
                    <option value="Reach">Reach</option>
                    <option value="Match">Match</option>
                    <option value="Likely">Likely</option>
                  </select>
                  <button type="submit" className="atlas-btn-gold">
                    <Plus /> Add
                  </button>
                </form>

                <div className="college-items-container">
                  {myList.length === 0 ? (
                    <div className="empty-list-msg">No colleges added yet. Type a college above to get started!</div>
                  ) : (
                    myList.map((item, idx) => (
                      <div key={idx} className="college-list-row">
                        <span className="college-name-str">{item.name}</span>
                        <span className={`tag-badge tag-${item.status.toLowerCase()}`}>{item.status}</span>
                        <button
                          onClick={() => handleRemoveCollege(idx)}
                          className="remove-btn"
                          title="Remove college"
                        >
                          <X />
                        </button>
                      </div>
                    ))
                  )}
                </div>

                <div className="tool-summary-footer">
                  <div className="summary-stat">
                    <span>Reaches</span>
                    <strong>{myList.filter((m) => m.status === "Reach").length}</strong>
                  </div>
                  <div className="summary-stat">
                    <span>Matches</span>
                    <strong>{myList.filter((m) => m.status === "Match").length}</strong>
                  </div>
                  <div className="summary-stat">
                    <span>Likelys</span>
                    <strong>{myList.filter((m) => m.status === "Likely").length}</strong>
                  </div>
                </div>
              </div>

              {/* Right Column: Database Explorer */}
              <div className="tool-panel">
                <div className="tool-panel-title">
                  <Search className="icon-gold" />
                  <h3>College Admissions Quick Reference</h3>
                </div>

                <div className="tool-filter-bar">
                  <div className="search-box">
                    <Search className="search-icon" />
                    <input
                      type="text"
                      placeholder="Search college name..."
                      value={searchCollege}
                      onChange={(e) => setSearchCollege(e.target.value)}
                    />
                  </div>
                  <div className="filter-select-box">
                    <Filter className="filter-icon" />
                    <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
                      <option value="All">All Categories</option>
                      <option value="Reach">Reach Schools</option>
                      <option value="Match">Match Schools</option>
                      <option value="Likely">Likely Schools</option>
                    </select>
                  </div>
                </div>

                <div className="college-db-list">
                  {filteredColleges.map((c, i) => (
                    <div key={i} className="db-college-card">
                      <div className="db-card-main">
                        <div>
                          <strong>{c.name}</strong>
                          <span className="db-college-tag">{c.tag}</span>
                        </div>
                        <span className={`tag-badge tag-${c.type.toLowerCase()}`}>{c.type}</span>
                      </div>
                      <div className="db-card-stats">
                        <span>Acc. Rate: <b>{c.rate}</b></span>
                        <span>Middle 50% SAT: <b>{c.avgSat}</b></span>
                        <button
                          onClick={() => {
                            if (!myList.some((m) => m.name === c.name)) {
                              setMyList([...myList, { name: c.name, status: c.type }]);
                            }
                          }}
                          className="quick-add-btn"
                        >
                          + Add to List
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counseling Journey Roadmap */}
      <section className="atlas-section" id="roadmap">
        <div className="atlas-container">
          <div className="section-header text-center">
            <div className="atlas-pill-tag">Our Proven Framework</div>
            <h2 className="section-title">The 6-Step Counseling Roadmap</h2>
            <p className="section-subtitle">
              From diagnostic profiling to final offer selection, our structured process brings order, clarity, and peace of mind.
            </p>
          </div>

          <div className="roadmap-stepper">
            <div className="roadmap-tabs">
              {journeySteps.map((stepObj, idx) => (
                <button
                  key={idx}
                  className={`roadmap-tab ${activeRoadmapStep === idx ? "active" : ""}`}
                  onClick={() => setActiveRoadmapStep(idx)}
                >
                  <span className="step-num">{stepObj.step}</span>
                  <span className="step-title">{stepObj.title}</span>
                </button>
              ))}
            </div>

            <div className="roadmap-active-content">
              <div className="roadmap-detail-card">
                <div className="step-badge">Step {journeySteps[activeRoadmapStep].step} of 06</div>
                <h3>{journeySteps[activeRoadmapStep].title}</h3>
                <p className="step-desc">{journeySteps[activeRoadmapStep].desc}</p>
                <div className="step-highlight">
                  <Sparkles className="icon-gold" />
                  <span>{journeySteps[activeRoadmapStep].details}</span>
                </div>
                <div className="step-nav-buttons">
                  <button
                    disabled={activeRoadmapStep === 0}
                    onClick={() => setActiveRoadmapStep(activeRoadmapStep - 1)}
                    className="step-btn"
                  >
                    Previous Step
                  </button>
                  <button
                    disabled={activeRoadmapStep === journeySteps.length - 1}
                    onClick={() => setActiveRoadmapStep(activeRoadmapStep + 1)}
                    className="step-btn primary"
                  >
                    Next Step <ArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Highlight Showcase */}
      <section className="atlas-section campus-banner-section">
        <div className="campus-banner-img-container">
          <img src={campusIvy} alt="Prestigious University Campus Quad" className="campus-banner-img" />
          <div className="campus-banner-overlay" />
        </div>
        <div className="atlas-container campus-banner-content">
          <div className="campus-box">
            <div className="atlas-pill-tag gold-pill">Proven Outcome Track Record</div>
            <h2>Over 92% of Atlas Students Enter One of Their Top-3 Target Colleges</h2>
            <p>
              Whether aim is Ivy League excellence, top STEM universities, liberal arts powerhouses, or maximum merit scholarship funding, our counselors empower students to stand out.
            </p>
            <div className="campus-actions">
              <button onClick={() => setIsBookingOpen(true)} className="atlas-btn-gold">
                Schedule Consultation Call <ArrowRight />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes & Results */}
      <section className="atlas-section soft-bg" id="outcomes">
        <div className="atlas-container">
          <div className="section-header text-center">
            <div className="atlas-pill-tag">Data That Matters</div>
            <h2 className="section-title">Measurable Results &amp; Student Outcomes</h2>
            <p className="section-subtitle">
              We track our performance across every admissions cycle to maintain exceptional standards.
            </p>
          </div>

          <div className="outcomes-grid">
            <div className="outcome-card">
              <div className="outcome-header">Admissions Rate</div>
              <div className="outcome-val">98%</div>
              <div className="progress-bar-wrap">
                <div className="progress-bar-fill" style={{ width: "98%" }} />
              </div>
              <p className="outcome-desc">Accepted to a top 4-year university</p>
            </div>

            <div className="outcome-card">
              <div className="outcome-header">Scholarship Dollars</div>
              <div className="outcome-val">$24M+</div>
              <div className="stat-sub">$38,200 avg per student</div>
              <p className="outcome-desc">Merit scholarships &amp; institutional aid</p>
            </div>

            <div className="outcome-card">
              <div className="outcome-header">Student Confidence</div>
              <div className="outcome-val">3.1 → 8.9</div>
              <div className="growth-indicator">
                <span className="growth-bar b1" />
                <span className="growth-bar b2" />
                <span className="growth-bar b3" />
              </div>
              <p className="outcome-desc">Pre vs Post counseling self-reported rating</p>
            </div>

            <div className="outcome-card">
              <div className="outcome-header">On-Time Submissions</div>
              <div className="outcome-val">100%</div>
              <div className="progress-bar-wrap">
                <div className="progress-bar-fill green-fill" style={{ width: "100%" }} />
              </div>
              <p className="outcome-desc">Applications finalized before deadlines</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="atlas-section">
        <div className="atlas-container">
          <div className="section-header text-center">
            <div className="atlas-pill-tag">Testimonials</div>
            <h2 className="section-title">What Families &amp; Students Say</h2>
            <p className="section-subtitle">Real stories of calm, clarity, and college success.</p>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">
                "Atlas helped me transform my scattered high school experiences into a cohesive story. Laura's essay coaching was instrumental in getting into my dream school!"
              </p>
              <div className="testimonial-author">
                <strong>Sophie L.</strong>
                <span className="author-detail">UCLA · Class of 2028</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">
                "As parents of a high school senior, the college process felt overwhelming. Atlas took the tension out of our home with weekly check-ins and total deadline management."
              </p>
              <div className="testimonial-author">
                <strong>The Patel Family</strong>
                <span className="author-detail">Parents of Stanford ’28 Student</span>
              </div>
            </div>

            <div className="testimonial-card">
              <div className="stars-row">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">
                "The mock interview sessions prepared me for my alumni interviews with total confidence. I knew exactly how to highlight my research project without sounding rehearsed."
              </p>
              <div className="testimonial-author">
                <strong>Ethan W.</strong>
                <span className="author-detail">University of Michigan ’27</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="atlas-section soft-bg" id="faq">
        <div className="atlas-container">
          <div className="section-header text-center">
            <div className="atlas-pill-tag">Got Questions?</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">Everything you need to know about starting your admissions journey.</p>
          </div>

          <div className="faq-accordion">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${activeFaq === i ? "open" : ""}`}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <div className="faq-question">
                  <span>{faq.q}</span>
                  <ChevronDown className="faq-chevron" />
                </div>
                {activeFaq === i && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="atlas-footer">
        <div className="atlas-container footer-content">
          <div className="footer-brand-col">
            <a
              href="#about"
              className="atlas-brand text-white"
              onClick={(e) => handleNavClick(e, "#about")}
            >
              <div className="atlas-brand-badge">✧</div>
              <div className="atlas-brand-text">
                <span className="atlas-brand-title">ATLAS</span>
                <span className="atlas-brand-sub">COLLEGE COUNSELING</span>
              </div>
            </a>
            <p className="footer-tagline">
              Empowering students with strategic, compassionate, and expert college admissions guidance.
            </p>
            <div className="footer-contact-info">
              <div><MapPin className="icon-gold" /> Cambridge &amp; Palo Alto Offices</div>
              <div><MessageCircle className="icon-gold" /> hello@atlascollege.example</div>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Services</h4>
            <a href="#services" onClick={(e) => handleNavClick(e, "#services")}>Academic Planning</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Essay Coaching</a>
            <a href="#strategy-tool" onClick={(e) => handleNavClick(e, "#strategy-tool")}>List Curation</a>
            <a href="#counselors" onClick={(e) => handleNavClick(e, "#counselors")}>Interview Prep</a>
          </div>

          <div className="footer-links-col">
            <h4>Quick Links</h4>
            <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>About Atlas</a>
            <a href="#counselors" onClick={(e) => handleNavClick(e, "#counselors")}>Our Counselors</a>
            <a href="#outcomes" onClick={(e) => handleNavClick(e, "#outcomes")}>Results &amp; Stats</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")}>FAQ</a>
          </div>

          <div className="footer-newsletter-col">
            <h4>College Admissions Insights</h4>
            <p>Subscribe for key deadline alerts &amp; monthly essay tips.</p>
            <form onSubmit={(e) => e.preventDefault()} className="newsletter-form">
              <input type="email" placeholder="Enter parent or student email..." required />
              <button type="submit" className="atlas-btn-gold">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="atlas-container bottom-flex">
            <span>© 2026 Atlas College Counseling. All rights reserved.</span>
            <div className="bottom-links">
              <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>Privacy Policy</a>
              <a href="#about" onClick={(e) => handleNavClick(e, "#about")}>Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      {isBookingOpen && (
        <div className="modal-backdrop" onClick={() => setIsBookingOpen(false)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={() => setIsBookingOpen(false)}>
              <X />
            </button>

            {bookingSubmitted ? (
              <div className="modal-success-state">
                <CheckCircle2 className="success-icon" />
                <h3>Consultation Strategy Call Requested!</h3>
                <p>
                  Thank you! Our senior advising coordinator will reach out within 24 hours to finalize your strategy session time.
                </p>
              </div>
            ) : (
              <>
                <div className="modal-header">
                  <div className="atlas-pill-tag gold-pill">Complimentary 30-Min Strategy Call</div>
                  <h2>Book Your Family Consultation</h2>
                  {selectedCounselor && (
                    <p className="counselor-preference-note">
                      Requested Counselor: <strong>{selectedCounselor}</strong>
                    </p>
                  )}
                </div>

                <form onSubmit={handleBookingSubmit} className="modal-form">
                  <div className="form-group">
                    <label>Parent / Guardian Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.parentName}
                      onChange={(e) => setFormData({ ...formData, parentName: e.target.value })}
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="parent@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                    <div className="form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label>Student Current Grade</label>
                      <select
                        value={formData.studentGrade}
                        onChange={(e) => setFormData({ ...formData, studentGrade: e.target.value })}
                      >
                        <option>9th Grade (Freshman)</option>
                        <option>10th Grade (Sophomore)</option>
                        <option>11th Grade (Junior)</option>
                        <option>12th Grade (Senior)</option>
                        <option>Transfer / Gap Year</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label>Primary Focus</label>
                      <select
                        value={formData.interests}
                        onChange={(e) => setFormData({ ...formData, interests: e.target.value })}
                      >
                        <option>Comprehensive Application Support</option>
                        <option>Essay Coaching &amp; Editing</option>
                        <option>College List Curation</option>
                        <option>Early High School Planning (9th-10th)</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="atlas-btn-gold atlas-full-width modal-submit-btn">
                    Confirm Consultation Request <ArrowRight />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
