import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Award,
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
  Filter,
  Flame,
  Globe,
  GraduationCap,
  HeartHandshake,
  HelpCircle,
  Laptop,
  Layers,
  LineChart,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Mic,
  Moon,
  Percent,
  Phone,
  Play,
  RotateCcw,
  Search,
  Send,
  ShieldCheck,
  Sliders,
  Sparkles,
  Star,
  Sun,
  Target,
  TrendingUp,
  Trophy,
  UserCheck,
  Users,
  Video,
  Volume2,
  X,
  Zap,
} from "lucide-react";
import "./TutorLoop.css";

// Image assets
import heroImgUrl from "../../assets/optimized/education/tutorloop/hero.jpg";
import tutorSarahImg from "../../assets/optimized/education/tutorloop/tutor-sarah.jpg";
import tutorDavidImg from "../../assets/optimized/education/tutorloop/tutor-david.jpg";
import tutorElenaImg from "../../assets/optimized/education/tutorloop/tutor-elena.jpg";
import tutorMarcusImg from "../../assets/optimized/education/tutorloop/tutor-marcus.jpg";
import tutorAmaraImg from "../../assets/optimized/education/tutorloop/tutor-amara.jpg";
import tutorAlexImg from "../../assets/optimized/education/tutorloop/tutor-alex.jpg";

// Tutors database with live match tags
const tutorsList = [
  {
    id: "sarah-j",
    name: "Sarah Jenkins",
    role: "Mathematics & AP Calculus Specialist",
    university: "MIT '21 (B.S. Math & CS)",
    hourlyRate: 65,
    rating: 5.0,
    reviewCount: 148,
    totalHours: "1,200+ hrs",
    category: "Math & STEM",
    subjects: ["AP Calculus AB/BC", "Algebra II", "Geometry", "SAT Math"],
    grades: "Grades 8–12 & College",
    img: tutorSarahImg,
    badgeText: "MIT Math Fellow",
    badgeType: "purple",
    nextSlot: "Today • 4:00 PM",
    bio: "Demystifying complex mathematical proofs and equations with intuitive visual mental models. 94% of my students score a 5 on AP Calculus.",
    statHighlight: "+1.8 Letter Grade Boost in 8 Weeks",
    accentColor: "#6366f1",
  },
  {
    id: "david-r",
    name: "David Rossi",
    role: "AP Physics, Chem & Engineering",
    university: "Stanford University '19 (M.S. Applied Physics)",
    hourlyRate: 75,
    rating: 4.9,
    reviewCount: 162,
    totalHours: "1,500+ hrs",
    category: "Science & AP",
    subjects: ["AP Physics 1/2/C", "General Chemistry", "AP Chem", "Linear Algebra"],
    grades: "Grades 9–12 & Undergrad",
    img: tutorDavidImg,
    badgeText: "Stanford STEM Lead",
    badgeType: "emerald",
    nextSlot: "Tomorrow • 5:30 PM",
    bio: "Helping students build deep scientific intuition and exam-day speed. Former university teaching assistant with over 6 years of proven STEM mentorship.",
    statHighlight: "96% Pass Rate with Scores 4 or 5",
    accentColor: "#10b981",
  },
  {
    id: "elena-r",
    name: "Elena Rostova",
    role: "Literature, College Essays & Rhetoric",
    university: "Oxford University '20 (M.A. English Lit)",
    hourlyRate: 60,
    rating: 5.0,
    reviewCount: 124,
    totalHours: "950+ hrs",
    category: "Humanities & Writing",
    subjects: ["AP English Lit & Lang", "College Admissions Essays", "Critical Reading"],
    grades: "Grades 6–12 & College",
    img: tutorElenaImg,
    badgeText: "Oxford Essay Master",
    badgeType: "amber",
    nextSlot: "Today • 6:00 PM",
    bio: "Published writer helping students unlock their authentic voice and build compelling, persuasive essays for school and top college applications.",
    statHighlight: "80+ Ivy & Top 20 College Acceptances",
    accentColor: "#f59e0b",
  },
  {
    id: "marcus-v",
    name: "Marcus Vance",
    role: "Biology, Pre-Med & Anatomy",
    university: "Johns Hopkins '19 (B.S. Molecular Bio)",
    hourlyRate: 70,
    rating: 4.9,
    reviewCount: 110,
    totalHours: "880+ hrs",
    category: "Science & AP",
    subjects: ["AP Biology", "Biochemistry", "Anatomy", "MCAT Prep"],
    grades: "Grades 9–12 & Pre-Med",
    img: tutorMarcusImg,
    badgeText: "Johns Hopkins Pre-Med",
    badgeType: "emerald",
    nextSlot: "Wednesday • 4:00 PM",
    bio: "Focused on visual biological diagram deconstruction and clinical problem-solving. Makes tough biological pathways crystal clear.",
    statHighlight: "Average 92% on Finals & AP Exams",
    accentColor: "#10b981",
  },
  {
    id: "amara-k",
    name: "Amara Khan",
    role: "Spanish & French Language Immersion",
    university: "Columbia University '20 (M.A. Linguistics)",
    hourlyRate: 55,
    rating: 5.0,
    reviewCount: 95,
    totalHours: "750+ hrs",
    category: "Languages",
    subjects: ["Spanish (All Levels)", "French (A1–B2)", "AP Spanish Lang", "DELF"],
    grades: "All Grades (K–12 & Adults)",
    img: tutorAmaraImg,
    badgeText: "Columbia Linguist",
    badgeType: "purple",
    nextSlot: "Today • 7:00 PM",
    bio: "Trilingual coach teaching rapid speaking confidence, natural accent modulation, and cultural immersion through spontaneous dialogue.",
    statHighlight: "Conversational Fluency in 12 Weeks",
    accentColor: "#8b5cf6",
  },
  {
    id: "alex-t",
    name: "Alex Turner",
    role: "Computer Science, Python & Algorithms",
    university: "UC Berkeley '21 (B.S. Computer Science)",
    hourlyRate: 70,
    rating: 4.9,
    reviewCount: 138,
    totalHours: "1,100+ hrs",
    category: "Coding & Tech",
    subjects: ["AP Computer Science A", "Python & Data Structures", "Java", "Web Dev"],
    grades: "Grades 7–12 & Beginners",
    img: tutorAlexImg,
    badgeText: "Berkeley CS Engineer",
    badgeType: "cyan",
    nextSlot: "Thursday • 6:00 PM",
    bio: "Software engineer making programming intuitive and exciting through interactive projects, game building, and algorithm breakdowns.",
    statHighlight: "95% Score a 5 on AP CS A Exam",
    accentColor: "#06b6d4",
  },
];

const categoryTabs = [
  "All Subjects",
  "Math & STEM",
  "Science & AP",
  "Humanities & Writing",
  "Languages",
  "Coding & Tech",
];

const quickGoals = [
  { label: "📐 AP Calculus Exam in May", subject: "Math & STEM", desc: "Master integrals, series & mock exams with Sarah" },
  { label: "⚡ Physics Midterm Panic", subject: "Science & AP", desc: "Turn around mechanics & vectors in 3 sessions with David" },
  { label: "✍️ Ivy League Essay Polish", subject: "Humanities & Writing", desc: "Structure & polish common app essays with Elena" },
  { label: "🐍 Learn Python Fast", subject: "Coding & Tech", desc: "Build real projects & ace AP CS with Alex" },
];

export function TutorLoop() {
  // Navigation & Scroll State
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#top");

  // Marketplace Filters
  const [activeCategory, setActiveCategory] = useState("All Subjects");
  const [searchQuery, setSearchQuery] = useState("");
  const [maxPrice, setMaxPrice] = useState(80);
  const [onlyAvailableToday, setOnlyAvailableToday] = useState(false);

  // Active Goal Simulator Tab
  const [selectedGoal, setSelectedGoal] = useState(0);
  const [simHours, setSimHours] = useState(2);

  // Compare System
  const [compareList, setCompareList] = useState<string[]>([]);
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  // Profile Modal & Booking Modal
  const [activeTutorModal, setActiveTutorModal] = useState<any | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [bookingData, setBookingData] = useState({
    parentName: "",
    email: "",
    phone: "",
    studentName: "",
    grade: "10th Grade",
    subject: "AP Calculus",
    tutorName: "Sarah Jenkins",
    slot: "Today at 4:00 PM EST",
    notes: "",
  });

  // FAQ Accordion State
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  // Scrollspy & sticky listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["top", "marketplace", "loop-framework", "goal-simulator", "how-it-works", "reviews", "pricing", "faq"];
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
        if (isBookingModalOpen) setIsBookingModalOpen(false);
        if (activeTutorModal) setActiveTutorModal(null);
        if (isCompareOpen) setIsCompareOpen(false);
      }
    };

    if (mobileMenuOpen || isBookingModalOpen || activeTutorModal || isCompareOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, isBookingModalOpen, activeTutorModal, isCompareOpen]);

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

  const toggleCompare = (id: string) => {
    if (compareList.includes(id)) {
      setCompareList(compareList.filter((item) => item !== id));
    } else {
      if (compareList.length >= 3) {
        alert("You can compare up to 3 tutors at once.");
        return;
      }
      setCompareList([...compareList, id]);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSuccess(true);
    setTimeout(() => {
      setBookingSuccess(false);
      setIsBookingModalOpen(false);
    }, 2800);
  };

  // Filtered tutors
  const filteredTutors = tutorsList.filter((tutor) => {
    const matchesCategory =
      activeCategory === "All Subjects" || tutor.category === activeCategory;

    const matchesSearch =
      searchQuery === "" ||
      tutor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tutor.subjects.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      tutor.university.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesPrice = tutor.hourlyRate <= maxPrice;
    const matchesAvailability = !onlyAvailableToday || tutor.nextSlot.includes("Today");

    return matchesCategory && matchesSearch && matchesPrice && matchesAvailability;
  });

  return (
    <main className="tl-app" id="top" tabIndex={-1}>
      {/* Floating Island Sticky Navigation */}
      <header className={`tl-header-island ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="tl-island-inner">
          <a
            href="#top"
            className="tl-brand-pill"
            onClick={(e) => handleNavClick(e, "#top")}
            aria-label="TutorLoop Home"
          >
            <div className="tl-brand-icon">
              <Sparkles size={16} />
            </div>
            <span className="tl-brand-name">
              Tutor<span className="tl-dot">Loop</span>
            </span>
            <span className="tl-live-badge">
              <span className="tl-pulse-dot" />
              18 Online
            </span>
          </a>

          {/* Desktop Nav Pills */}
          <nav className="tl-nav-island-links">
            {[
              { label: "Tutors", href: "#marketplace" },
              { label: "The Loop Method", href: "#loop-framework" },
              { label: "Goal Tracker", href: "#goal-simulator" },
              { label: "Reviews", href: "#reviews" },
              { label: "Pricing", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`tl-nav-island-item ${activeNav === item.href ? "is-active" : ""}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Right Action Island */}
          <div className="tl-island-actions">
            {compareList.length > 0 && (
              <button
                onClick={() => setIsCompareOpen(true)}
                className="tl-compare-btn-pill"
              >
                <Sliders size={13} />
                <span>Compare ({compareList.length})</span>
              </button>
            )}

            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="tl-btn-glow tl-header-btn"
            >
              <span>Book Free Trial</span>
              <ArrowRight size={14} />
            </button>

            <button
              className={`tl-menu-pill-btn ${mobileMenuOpen ? "is-open" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Off-Canvas Mobile Drawer */}
      <div
        className={`tl-mobile-overlay ${mobileMenuOpen ? "is-active" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`tl-mobile-panel ${mobileMenuOpen ? "is-open" : ""}`}>
        <div className="tl-mobile-panel-header">
          <div className="tl-brand-pill">
            <div className="tl-brand-icon">
              <Sparkles size={16} />
            </div>
            <span className="tl-brand-name">TutorLoop</span>
          </div>
          <button
            className="tl-close-drawer-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <X size={20} />
          </button>
        </div>

        <div className="tl-mobile-panel-body">
          <div className="tl-mobile-links">
            {[
              { label: "Find Verified Tutors", href: "#marketplace" },
              { label: "The Loop Framework", href: "#loop-framework" },
              { label: "Interactive Goal Tracker", href: "#goal-simulator" },
              { label: "How It Works", href: "#how-it-works" },
              { label: "Parent & Student Reviews", href: "#reviews" },
              { label: "Pricing & Packs", href: "#pricing" },
              { label: "FAQ", href: "#faq" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="tl-mobile-nav-link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <span>{item.label}</span>
                <ChevronRight size={16} />
              </a>
            ))}
          </div>

          <div className="tl-mobile-panel-footer">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="tl-btn-glow full-w"
            >
              <CalendarDays size={16} />
              <span>Book a Risk-Free Trial Session</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Studio Section */}
      <section className="tl-hero-studio">
        <div className="tl-wrap tl-hero-layout">
          {/* Hero Left Content */}
          <div className="tl-hero-main">
            <div className="tl-badge-future">
              <span className="tl-badge-glow-dot" />
              <span>AI-Matched • Top 1% University Tutors • Real-Time Goal Tracking</span>
            </div>

            <h1 className="tl-hero-headline">
              Find the perfect tutor.
              <br />
              <span className="tl-gradient-glow">Track every milestone.</span>
              <br />
              Watch grades transform.
            </h1>

            <p className="tl-hero-subtext">
              TutorLoop is the transparent learning marketplace connecting students with vetted subject specialists from MIT, Stanford, and Oxford. Zero subscription traps. 100% money-back first session guarantee.
            </p>

            {/* Quick Match Goal Buttons */}
            <div className="tl-quick-matches">
              <span className="tl-quick-label">⚡ What do you need help with right now?</span>
              <div className="tl-goal-chips">
                {quickGoals.map((qg, idx) => (
                  <button
                    key={qg.label}
                    className={`tl-goal-chip ${selectedGoal === idx ? "active" : ""}`}
                    onClick={() => {
                      setSelectedGoal(idx);
                      setActiveCategory(qg.subject);
                      const el = document.getElementById("marketplace");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    <span>{qg.label}</span>
                    <ArrowRight size={12} />
                  </button>
                ))}
              </div>
            </div>

            <div className="tl-hero-trust-row">
              <div className="tl-trust-badge-item">
                <ShieldCheck size={16} className="text-emerald" />
                <span>100% Background Verified</span>
              </div>
              <div className="tl-trust-badge-item">
                <Star size={16} className="text-amber" />
                <span>4.9/5 Rating (12,000+ Sessions)</span>
              </div>
              <div className="tl-trust-badge-item">
                <Zap size={16} className="text-purple" />
                <span>$0 Platform Fees</span>
              </div>
            </div>
          </div>

          {/* Hero Right Visual Canvas */}
          <div className="tl-hero-canvas">
            <div className="tl-glass-art-card">
              <img
                src={heroImgUrl}
                alt="TutorLoop 1-on-1 Interactive Tutoring Session"
                className="tl-art-img"
              />
              <div className="tl-art-gradient-overlay" />

              {/* Floating Dynamic Score Leap Widget */}
              <div className="tl-card-float-top">
                <div className="tl-float-avatar-row">
                  <div className="tl-float-icon-wrap">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <strong>AP Precalculus & Physics</strong>
                    <small>Ethan T. • Grade 10 Milestone</small>
                  </div>
                </div>

                <div className="tl-float-stats-row">
                  <div className="tl-float-stat">
                    <span>Grade Delta</span>
                    <strong className="text-emerald">C- ➔ A</strong>
                  </div>
                  <div className="tl-float-stat">
                    <span>Milestones</span>
                    <strong>8 of 8 Mastered</strong>
                  </div>
                </div>

                <div className="tl-float-progress-track">
                  <div className="tl-float-progress-fill" style={{ width: "94%" }} />
                </div>
              </div>

              {/* Floating Tutor Callout Widget */}
              <div className="tl-card-float-bottom">
                <div className="tl-tutor-mini-avatar">
                  <img src={tutorSarahImg} alt="Sarah Jenkins MIT" />
                  <span className="tl-status-online" />
                </div>
                <div className="tl-float-tutor-info">
                  <strong>Sarah Jenkins (MIT '21)</strong>
                  <span>Next slot: Today at 4:00 PM EST</span>
                </div>
                <button
                  onClick={() => setIsBookingModalOpen(true)}
                  className="tl-btn-float-book"
                >
                  Book $65/hr
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Stats Marquee Strip */}
      <section className="tl-stats-strip">
        <div className="tl-wrap tl-stats-strip-grid">
          <div className="tl-stat-strip-item">
            <strong>25,000+</strong>
            <span>Verified 1:1 Tutoring Hours</span>
          </div>
          <div className="tl-stat-strip-item">
            <strong className="text-emerald">98.4%</strong>
            <span>Parent Satisfaction Score</span>
          </div>
          <div className="tl-stat-strip-item">
            <strong>Top 1%</strong>
            <span>Ivy & Top 20 University Alumni</span>
          </div>
          <div className="tl-stat-strip-item">
            <strong className="text-amber">+1.8</strong>
            <span>Average Letter Grade Leap in 8 Wks</span>
          </div>
          <div className="tl-stat-strip-item">
            <strong>100%</strong>
            <span>Money-Back First Session Guarantee</span>
          </div>
        </div>
      </section>

      {/* The Loop Framework (Distinctive Visual Concept) */}
      <section className="tl-loop-section" id="loop-framework">
        <div className="tl-wrap">
          <div className="tl-section-header text-center">
            <div className="tl-badge-future">
              <Layers size={13} className="text-emerald" />
              <span>The 4-Step Mastery Cycle</span>
            </div>
            <h2 className="tl-section-title">The TutorLoop Feedback Architecture</h2>
            <p className="tl-section-desc">
              Unlike traditional tutoring agencies that leave parents in the dark, TutorLoop is engineered as a continuous, transparent learning loop.
            </p>
          </div>

          <div className="tl-loop-grid">
            <div className="tl-loop-card">
              <div className="tl-loop-step-badge">Phase 01</div>
              <div className="tl-loop-icon-box bg-purple">
                <Search size={22} />
              </div>
              <h3>Precision Diagnostic Match</h3>
              <p>We analyze your student's learning style, exact pain points, syllabus, and target exam date to match top-tier tutors.</p>
              <span className="tl-loop-meta">✓ Matched in &lt; 2 Minutes</span>
            </div>

            <div className="tl-loop-card">
              <div className="tl-loop-step-badge">Phase 02</div>
              <div className="tl-loop-icon-box bg-emerald">
                <Target size={22} />
              </div>
              <h3>Collaborative Milestone Roadmap</h3>
              <p>Your tutor breaks down your child’s semester syllabus into achievable bite-sized milestones with clear checkpoints.</p>
              <span className="tl-loop-meta">✓ Measurable Goal System</span>
            </div>

            <div className="tl-loop-card">
              <div className="tl-loop-step-badge">Phase 03</div>
              <div className="tl-loop-icon-box bg-indigo">
                <Video size={22} />
              </div>
              <h3>Interactive Virtual Studio</h3>
              <p>Live 1-on-1 sessions with collaborative math/coding whiteboards, live problem deconstructions, and recorded replays.</p>
              <span className="tl-loop-meta">✓ 100% Recorded for Revision</span>
            </div>

            <div className="tl-loop-card">
              <div className="tl-loop-step-badge">Phase 04</div>
              <div className="tl-loop-icon-box bg-amber">
                <LineChart size={22} />
              </div>
              <h3>Live Parent Proof Dashboard</h3>
              <p>Receive immediate post-session progress digests, homework summaries, and visual mastery analytics directly to your inbox.</p>
              <span className="tl-loop-meta">✓ Full Peace of Mind</span>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tutor Marketplace */}
      <section className="tl-marketplace-section" id="marketplace">
        <div className="tl-wrap">
          <div className="tl-section-header">
            <div className="tl-badge-future">
              <UserCheck size={13} className="text-emerald" />
              <span>Live Marketplace Directory</span>
            </div>
            <h2 className="tl-section-title">Compare Verified Subject Tutors</h2>
            <p className="tl-section-desc">
              Browse top educators with transparent hourly rates, verified student grade gains, and immediate lesson availability.
            </p>

            {/* Category Filter Pills */}
            <div className="tl-category-pills">
              {categoryTabs.map((tab) => (
                <button
                  key={tab}
                  className={`tl-cat-btn ${activeCategory === tab ? "active" : ""}`}
                  onClick={() => setActiveCategory(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Filter Search & Slider Controls Bar */}
            <div className="tl-filter-control-bar">
              <div className="tl-search-input-wrap">
                <Search size={16} className="tl-search-icon" />
                <input
                  type="text"
                  placeholder="Filter by subject, topic, or university..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>

              <div className="tl-price-slider-pill">
                <span>Max Budget:</span>
                <strong>${maxPrice}/hr</strong>
                <input
                  type="range"
                  min="40"
                  max="100"
                  step="5"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
              </div>

              <label className="tl-toggle-available-pill">
                <input
                  type="checkbox"
                  checked={onlyAvailableToday}
                  onChange={(e) => setOnlyAvailableToday(e.target.checked)}
                />
                <span>Available Today Only</span>
              </label>
            </div>
          </div>

          {/* Tutors Cards Grid */}
          <div className="tl-tutors-grid">
            {filteredTutors.map((tutor) => {
              const isComparing = compareList.includes(tutor.id);

              return (
                <article key={tutor.id} className="tl-tutor-card">
                  <div className="tl-tutor-header">
                    <div className="tl-avatar-col">
                      <img
                        src={tutor.img}
                        alt={tutor.name}
                        className="tl-avatar-img"
                      />
                      <span className="tl-verified-check-badge">
                        <ShieldCheck size={13} />
                      </span>
                    </div>

                    <div className="tl-tutor-title-col">
                      <div className="tl-tutor-price-tag">
                        <strong>${tutor.hourlyRate}</strong>
                        <small>/hr</small>
                      </div>
                      <h3 className="tl-tutor-name">{tutor.name}</h3>
                      <span className="tl-tutor-subrole">{tutor.role}</span>
                      <div className="tl-tutor-uni-tag">
                        <GraduationCap size={13} />
                        <span>{tutor.university}</span>
                      </div>
                    </div>
                  </div>

                  <div className="tl-tutor-card-body">
                    <p className="tl-tutor-bio-snippet">{tutor.bio}</p>

                    <div className="tl-tutor-pills-row">
                      {tutor.subjects.map((sub) => (
                        <span key={sub} className="tl-sub-badge">{sub}</span>
                      ))}
                    </div>

                    <div className="tl-proof-badge-box">
                      <Trophy size={14} className="text-amber" />
                      <span>{tutor.statHighlight}</span>
                    </div>

                    <div className="tl-meta-status-bar">
                      <div className="tl-tutor-rating">
                        <Star size={14} className="star-filled" />
                        <strong>{tutor.rating}</strong>
                        <span>({tutor.reviewCount} reviews)</span>
                      </div>
                      <div className="tl-tutor-next-slot">
                        <Clock size={12} className="text-emerald" />
                        <span>{tutor.nextSlot}</span>
                      </div>
                    </div>
                  </div>

                  <div className="tl-tutor-card-actions">
                    <label className="tl-checkbox-compare">
                      <input
                        type="checkbox"
                        checked={isComparing}
                        onChange={() => toggleCompare(tutor.id)}
                      />
                      <span>Compare</span>
                    </label>

                    <div className="tl-btn-actions-group">
                      <button
                        onClick={() => setActiveTutorModal(tutor)}
                        className="tl-btn-glass"
                      >
                        Profile
                      </button>
                      <button
                        onClick={() => {
                          setBookingData({
                            ...bookingData,
                            tutorName: tutor.name,
                            subject: tutor.subjects[0] || "Mathematics",
                          });
                          setIsBookingModalOpen(true);
                        }}
                        className="tl-btn-glow sm"
                      >
                        Book Trial
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          {filteredTutors.length === 0 && (
            <div className="tl-empty-state">
              <Search size={40} className="text-emerald" />
              <h3>No Tutors Matching Your Exact Filter</h3>
              <p>Try clearing your budget filter or selecting "All Subjects" to see top available educators.</p>
              <button
                onClick={() => {
                  setActiveCategory("All Subjects");
                  setSearchQuery("");
                  setMaxPrice(100);
                  setOnlyAvailableToday(false);
                }}
                className="tl-btn-glow"
              >
                Reset All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Goal & Milestone Simulator */}
      <section className="tl-simulator-section" id="goal-simulator">
        <div className="tl-wrap">
          <div className="tl-section-header text-center">
            <div className="tl-badge-future">
              <Target size={13} className="text-emerald" />
              <span>Interactive Simulator</span>
            </div>
            <h2 className="tl-section-title">Calculate Your Grade Improvement Trajectory</h2>
            <p className="tl-section-desc">
              See how weekly targeted 1-on-1 tutoring sessions accelerate milestone mastery and turn around semester grades.
            </p>
          </div>

          <div className="tl-sim-card-wrapper">
            <div className="tl-sim-left-controls">
              <h3>Simulate Your Student's Roadmap</h3>
              <p>Adjust weekly tutoring commitment to preview expected timeline and milestone velocity.</p>

              <div className="tl-sim-control-group">
                <div className="tl-slider-header-flex">
                  <label>Weekly 1:1 Tutoring Commitment</label>
                  <strong className="tl-slider-highlight">{simHours} Hours / Week</strong>
                </div>
                <input
                  type="range"
                  min="1"
                  max="5"
                  step="1"
                  value={simHours}
                  onChange={(e) => setSimHours(Number(e.target.value))}
                  className="tl-slider-neon"
                />
                <div className="tl-slider-range-sub">
                  <span>1 Hr/Wk (Homework Support)</span>
                  <span>5 Hrs/Wk (Intensive Turnaround)</span>
                </div>
              </div>

              <div className="tl-sim-metric-cards">
                <div className="tl-metric-box-glow">
                  <small>Projected Grade Leap</small>
                  <strong className="text-emerald">
                    {simHours >= 3 ? "+2 Full Letter Grades (C ➔ A)" : simHours === 2 ? "+1.5 Letter Grades (C+ ➔ A-)" : "+1 Letter Grade (B- ➔ A)"}
                  </strong>
                </div>
                <div className="tl-metric-box-glow">
                  <small>Time to Total Mastery</small>
                  <strong className="text-indigo">
                    {Math.max(4, Math.round(14 / simHours))} Weeks Target
                  </strong>
                </div>
              </div>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="tl-btn-glow full-w"
              >
                <CalendarDays size={16} />
                <span>Claim Your Child's Custom Study Roadmap</span>
              </button>
            </div>

            {/* Live Interactive Milestone Board Preview */}
            <div className="tl-sim-right-board">
              <div className="tl-board-top">
                <div className="tl-board-student">
                  <div className="tl-board-avatar">LM</div>
                  <div>
                    <strong>Lucas Miller • 10th Grade</strong>
                    <span>AP Calculus & Physics Mastery Track</span>
                  </div>
                </div>
                <span className="tl-board-live-pill">● Milestone Active</span>
              </div>

              <div className="tl-timeline-milestones">
                <div className="tl-tl-item is-done">
                  <div className="tl-tl-circle"><Check size={12} /></div>
                  <div className="tl-tl-body">
                    <div className="tl-tl-top">
                      <strong>Milestone 1: Algebraic Foundations & Limits</strong>
                      <span className="tl-tl-grade">100% Mastered</span>
                    </div>
                    <p>4 Sessions completed. Zero formula hesitation on diagnostic quizzes.</p>
                  </div>
                </div>

                <div className="tl-tl-item is-current">
                  <div className="tl-tl-circle">2</div>
                  <div className="tl-tl-body">
                    <div className="tl-tl-top">
                      <strong>Milestone 2: Chain Rule & Implicit Differentiation</strong>
                      <span className="tl-tl-grade text-amber">85% In Progress</span>
                    </div>
                    <p>Great geometric visualization. Homework accuracy up by 40%.</p>
                  </div>
                </div>

                <div className="tl-tl-item is-next">
                  <div className="tl-tl-circle">3</div>
                  <div className="tl-tl-body">
                    <div className="tl-tl-top">
                      <strong>Milestone 3: AP Exam Practice & Speed Calibration</strong>
                      <span className="tl-tl-grade text-muted">Upcoming Session</span>
                    </div>
                    <p>Scheduled with Sarah Jenkins this Thursday at 4:00 PM EST.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How TutorLoop Compares Against Old Agencies */}
      <section className="tl-compare-section" id="how-it-works">
        <div className="tl-wrap">
          <div className="tl-section-header text-center">
            <div className="tl-badge-future">
              <Zap size={13} className="text-emerald" />
              <span>Why Families Switch</span>
            </div>
            <h2 className="tl-section-title">The TutorLoop Advantage</h2>
            <p className="tl-section-desc">
              See why over 10,000 parents abandoned opaque tutoring agencies in favor of TutorLoop.
            </p>
          </div>

          <div className="tl-comparison-matrix">
            <div className="tl-matrix-col old-way">
              <h3 className="tl-matrix-title">❌ Traditional Tutoring Agencies</h3>
              <ul className="tl-matrix-list">
                <li><span>$120–$180/hr with heavy agency markups</span></li>
                <li><span>Opaque tutor assignments (no choice or interview)</span></li>
                <li><span>Locked 6-month contracts with cancellation fees</span></li>
                <li><span>Zero weekly progress logs or lesson recordings</span></li>
                <li><span>No money-back guarantee if tutor isn't a fit</span></li>
              </ul>
            </div>

            <div className="tl-matrix-col tutorloop-way">
              <div className="tl-winner-ribbon">The TutorLoop Way</div>
              <h3 className="tl-matrix-title">✨ TutorLoop Marketplace</h3>
              <ul className="tl-matrix-list">
                <li><Check size={16} className="text-emerald" /> <strong>Fair transparent rates from $55/hr (0 platform fees)</strong></li>
                <li><Check size={16} className="text-emerald" /> <strong>Choose and interview your verified tutor directly</strong></li>
                <li><Check size={16} className="text-emerald" /> <strong>Pay per lesson or flexible packs • Cancel anytime</strong></li>
                <li><Check size={16} className="text-emerald" /> <strong>Live milestone tracking & HD recorded session replays</strong></li>
                <li><Check size={16} className="text-emerald" /> <strong>100% Money-Back First Lesson Guarantee</strong></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Parent Reviews & Feedback */}
      <section className="tl-reviews-section" id="reviews">
        <div className="tl-wrap">
          <div className="tl-section-header text-center">
            <div className="tl-badge-future">
              <Star size={13} className="text-amber" />
              <span>Verified Parent Feedback</span>
            </div>
            <h2 className="tl-section-title">Trusted by Families Worldwide</h2>
            <p className="tl-section-desc">
              Real stories from parents whose children conquered academic anxiety and reached the top of their class.
            </p>
          </div>

          <div className="tl-reviews-grid">
            {[
              {
                name: "Rebecca & Thomas Sterling",
                sub: "Parents of Ethan (10th Grade)",
                quote: "Finding David on TutorLoop transformed Ethan's sophomore year. He went from failing physics quizzes to scoring a 94% on his midterm. The weekly parent recap notes gave us complete clarity.",
                badge: "C- ➔ A in 6 Weeks",
                stars: 5,
              },
              {
                name: "Dr. Maya Lin",
                sub: "Mother of Chloe (11th Grade)",
                quote: "Sarah is phenomenal. She doesn't just spoon-feed answers—she teaches my daughter how to think mathematically. Chloe's SAT Math score jumped 140 points after just 10 sessions.",
                badge: "+140 SAT Math Leap",
                stars: 5,
              },
              {
                name: "Julian Gomez",
                sub: "Senior (Admitted to Cornell '28)",
                quote: "Elena helped me structure and refine my Ivy League personal statements. The 1-on-1 feedback on TutorLoop was sharper and faster than any private admissions counselor.",
                badge: "Cornell University '28",
                stars: 5,
              },
            ].map((rev) => (
              <div key={rev.name} className="tl-review-card">
                <div className="tl-rev-top">
                  <div className="tl-rev-stars">{"★".repeat(rev.stars)}</div>
                  <span className="tl-rev-badge">{rev.badge}</span>
                </div>
                <p className="tl-rev-quote">“{rev.quote}”</p>
                <div className="tl-rev-author">
                  <strong>{rev.name}</strong>
                  <small>{rev.sub}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing & Lesson Packs */}
      <section className="tl-pricing-section" id="pricing">
        <div className="tl-wrap">
          <div className="tl-section-header text-center">
            <div className="tl-badge-future">
              <Zap size={13} className="text-emerald" />
              <span>Transparent Pricing</span>
            </div>
            <h2 className="tl-section-title">Simple Tutoring. Zero Contracts.</h2>
            <p className="tl-section-desc">
              Book pay-as-you-go or save with milestone goal packs. Backed by our 100% money-back guarantee.
            </p>
          </div>

          <div className="tl-pricing-cards-grid">
            <div className="tl-price-card">
              <h3 className="tl-price-tier">Pay As You Go</h3>
              <p className="tl-price-desc">Flexible single lessons for homework help and exam prep.</p>
              <div className="tl-price-num">
                <strong>$55–$75</strong>
                <small>/ 60-min lesson</small>
              </div>

              <ul className="tl-price-bullets">
                <li><Check size={14} className="text-emerald" /> 1-on-1 60-Min Virtual Studio Lesson</li>
                <li><Check size={14} className="text-emerald" /> Interactive Math & Code Whiteboards</li>
                <li><Check size={14} className="text-emerald" /> HD Session Replays & Notes</li>
                <li><Check size={14} className="text-emerald" /> 100% First Lesson Guarantee</li>
              </ul>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="tl-btn-glass full-w"
              >
                Book Single Lesson
              </button>
            </div>

            <div className="tl-price-card popular">
              <div className="tl-pop-banner">Most Popular for Grade Leaps</div>
              <h3 className="tl-price-tier">12-Lesson Mastery Pack</h3>
              <p className="tl-price-desc">Structured semester turnaround with dedicated milestone tracking.</p>
              <div className="tl-price-num">
                <strong>$680</strong>
                <small>/ 12 sessions ($56/hr • Save 15%)</small>
              </div>

              <ul className="tl-price-bullets">
                <li><Check size={14} className="text-emerald" /> <strong>Everything in Single Lessons, plus:</strong></li>
                <li><Check size={14} className="text-emerald" /> Custom Milestone Goal Roadmap</li>
                <li><Check size={14} className="text-emerald" /> Weekly Direct Parent Recap Digests</li>
                <li><Check size={14} className="text-emerald" /> Guaranteed Weekly Time Slot Reservation</li>
                <li><Check size={14} className="text-emerald" /> Direct Tutor Homework Chat</li>
              </ul>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="tl-btn-glow full-w"
              >
                Claim 12-Lesson Pack
              </button>
            </div>

            <div className="tl-price-card">
              <h3 className="tl-price-tier">Family Multi-Subject Pass</h3>
              <p className="tl-price-desc">Shareable lesson credits across multiple siblings and subjects.</p>
              <div className="tl-price-num">
                <strong>$1,250</strong>
                <small>/ 24 shared lessons ($52/hr)</small>
              </div>

              <ul className="tl-price-bullets">
                <li><Check size={14} className="text-emerald" /> <strong>Everything in Mastery Pack, plus:</strong></li>
                <li><Check size={14} className="text-emerald" /> Share Credits Between Multiple Children</li>
                <li><Check size={14} className="text-emerald" /> Switch Between Any Subject Tutors Freely</li>
                <li><Check size={14} className="text-emerald" /> Dedicated Family Success Advisor</li>
              </ul>

              <button
                onClick={() => setIsBookingModalOpen(true)}
                className="tl-btn-glass full-w"
              >
                Select Family Pass
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="tl-faq-section" id="faq">
        <div className="tl-wrap">
          <div className="tl-section-header text-center">
            <div className="tl-badge-future">
              <HelpCircle size={13} className="text-emerald" />
              <span>Common Questions</span>
            </div>
            <h2 className="tl-section-title">Frequently Asked Questions</h2>
            <p className="tl-section-desc">
              Everything you need to know about tutor vetting, guarantees, and scheduling.
            </p>
          </div>

          <div className="tl-faq-accordion">
            {[
              {
                q: "How does TutorLoop vet and background-check tutors?",
                a: "Every educator undergoes identity verification, multi-state criminal background screening, transcript verification from top accredited universities, and a live 30-minute teaching audit before joining our network.",
              },
              {
                q: "What is your 1st Lesson Money-Back Guarantee?",
                a: "If you or your child are not completely satisfied with your trial session, we will either match you with another master tutor for free or issue an instant 100% refund with zero questions asked.",
              },
              {
                q: "What technology do students need for lessons?",
                a: "Just a laptop or tablet with internet. Our browser-based virtual studio has built-in collaborative math whiteboards, code editors, and screen sharing—no downloads required.",
              },
              {
                q: "Can I switch tutors or subjects at any time?",
                a: "Yes, 100%. If your child masters math and needs chemistry help next month, your credits seamlessly transfer to any certified tutor on the platform.",
              },
              {
                q: "Are there any recurring monthly subscription fees?",
                a: "No. You only pay for the tutoring lessons you book. There are zero membership fees, zero hidden booking charges, and no long-term contracts.",
              },
            ].map((faq, idx) => (
              <div
                key={faq.q}
                className={`tl-faq-row ${activeFaq === idx ? "is-open" : ""}`}
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
              >
                <div className="tl-faq-q">
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className="tl-faq-arrow" />
                </div>
                {activeFaq === idx && (
                  <div className="tl-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer Banner */}
      <section className="tl-bottom-cta">
        <div className="tl-wrap tl-bottom-cta-inner">
          <div className="tl-bottom-cta-text">
            <h2>Ready to unlock your child's highest academic potential?</h2>
            <p>Book your first 1-on-1 trial session in 2 minutes. 100% money-back guarantee.</p>
          </div>
          <button
            onClick={() => setIsBookingModalOpen(true)}
            className="tl-btn-glow"
          >
            <CalendarDays size={18} />
            <span>Book a Trial Session</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="tl-footer-main">
        <div className="tl-wrap tl-footer-grid">
          <div className="tl-footer-brand-col">
            <div className="tl-brand-pill">
              <div className="tl-brand-icon">
                <Sparkles size={16} />
              </div>
              <span className="tl-brand-name">TutorLoop</span>
            </div>
            <p className="tl-footer-tagline">
              Connecting students with inspiring, verified university tutors to build lasting academic confidence and dream college futures.
            </p>
            <div className="tl-footer-contact">
              <div>(800) 582-LOOP (5667)</div>
              <div>support@tutorloop.com</div>
              <div>7 Days a Week • 8 AM – 10 PM EST</div>
            </div>
          </div>

          <div className="tl-footer-links-col">
            <h4>Popular Subjects</h4>
            <a href="#marketplace" onClick={(e) => handleNavClick(e, "#marketplace")}>AP Calculus & Math</a>
            <a href="#marketplace" onClick={(e) => handleNavClick(e, "#marketplace")}>Physics & Chemistry</a>
            <a href="#marketplace" onClick={(e) => handleNavClick(e, "#marketplace")}>College Admissions Essays</a>
            <a href="#marketplace" onClick={(e) => handleNavClick(e, "#marketplace")}>Biology & Pre-Med</a>
            <a href="#marketplace" onClick={(e) => handleNavClick(e, "#marketplace")}>Python & Computer Science</a>
          </div>

          <div className="tl-footer-links-col">
            <h4>Platform</h4>
            <a href="#marketplace" onClick={(e) => handleNavClick(e, "#marketplace")}>Tutor Directory</a>
            <a href="#loop-framework" onClick={(e) => handleNavClick(e, "#loop-framework")}>The Loop Method</a>
            <a href="#goal-simulator" onClick={(e) => handleNavClick(e, "#goal-simulator")}>Goal Tracker</a>
            <a href="#reviews" onClick={(e) => handleNavClick(e, "#reviews")}>Parent Reviews</a>
            <a href="#pricing" onClick={(e) => handleNavClick(e, "#pricing")}>Pricing & Packs</a>
          </div>

          <div className="tl-footer-newsletter-col">
            <h4>Study Insights Newsletter</h4>
            <p>Get weekly STEM study cheat sheets and homework acceleration tips.</p>
            <div className="tl-newsletter-form-row">
              <input type="email" placeholder="Parent email address..." />
              <button className="tl-btn-glow sm">Subscribe</button>
            </div>
          </div>
        </div>

        <div className="tl-footer-legal">
          <div className="tl-wrap tl-legal-flex">
            <span>© 2026 TutorLoop Inc. All rights reserved. 100% Background-Checked Tutors.</span>
            <div className="tl-legal-links">
              <a href="#top">Privacy Policy</a>
              <a href="#top">Terms of Service</a>
              <a href="#top">Safety Guarantee</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Trial Booking Modal */}
      {isBookingModalOpen && (
        <div
          className="tl-modal-backdrop"
          onClick={() => setIsBookingModalOpen(false)}
        >
          <div
            className="tl-modal-window"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="tl-modal-close"
              onClick={() => setIsBookingModalOpen(false)}
            >
              <X size={18} />
            </button>

            {!bookingSuccess ? (
              <>
                <div className="tl-modal-top">
                  <div className="tl-badge-future">
                    <Sparkles size={12} className="text-emerald" />
                    <span>Risk-Free Trial Session</span>
                  </div>
                  <h2>Book 1-on-1 with {bookingData.tutorName}</h2>
                  <p>Reserve your preferred date and time. Backed by our 100% money-back satisfaction guarantee.</p>
                </div>

                <form onSubmit={handleBookingSubmit} className="tl-booking-form">
                  <div className="tl-form-2col">
                    <div className="tl-input-group">
                      <label>Parent Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Christine Miller"
                        value={bookingData.parentName}
                        onChange={(e) => setBookingData({ ...bookingData, parentName: e.target.value })}
                      />
                    </div>
                    <div className="tl-input-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="parent@example.com"
                        value={bookingData.email}
                        onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="tl-form-2col">
                    <div className="tl-input-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={bookingData.phone}
                        onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                      />
                    </div>
                    <div className="tl-input-group">
                      <label>Student Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Lucas Miller"
                        value={bookingData.studentName}
                        onChange={(e) => setBookingData({ ...bookingData, studentName: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="tl-form-2col">
                    <div className="tl-input-group">
                      <label>Grade Level</label>
                      <select
                        value={bookingData.grade}
                        onChange={(e) => setBookingData({ ...bookingData, grade: e.target.value })}
                      >
                        <option value="Elementary (K-5)">Elementary School (Grades K-5)</option>
                        <option value="Middle School (6-8)">Middle School (Grades 6-8)</option>
                        <option value="9th Grade">9th Grade (Freshman)</option>
                        <option value="10th Grade">10th Grade (Sophomore)</option>
                        <option value="11th Grade">11th Grade (Junior)</option>
                        <option value="12th Grade">12th Grade (Senior)</option>
                        <option value="College">College / AP Exam Prep</option>
                      </select>
                    </div>
                    <div className="tl-input-group">
                      <label>Subject Focus</label>
                      <select
                        value={bookingData.subject}
                        onChange={(e) => setBookingData({ ...bookingData, subject: e.target.value })}
                      >
                        <option value="AP Calculus">AP Calculus & Advanced Math</option>
                        <option value="Physics & Chem">AP Physics & Chemistry</option>
                        <option value="English & Essays">College Essays & English</option>
                        <option value="Biology">AP Biology & Pre-Med</option>
                        <option value="Computer Science">Python & Computer Science</option>
                        <option value="Languages">Spanish / French</option>
                      </select>
                    </div>
                  </div>

                  <div className="tl-input-group">
                    <label>Preferred Time Slot</label>
                    <select
                      value={bookingData.slot}
                      onChange={(e) => setBookingData({ ...bookingData, slot: e.target.value })}
                    >
                      <option value="Today at 4:00 PM EST">Today at 4:00 PM EST (Available Now)</option>
                      <option value="Today at 6:30 PM EST">Today at 6:30 PM EST</option>
                      <option value="Tomorrow at 5:00 PM EST">Tomorrow at 5:00 PM EST</option>
                      <option value="Saturday at 10:00 AM EST">Saturday at 10:00 AM EST</option>
                    </select>
                  </div>

                  <button type="submit" className="tl-btn-glow full-w">
                    <CalendarDays size={18} />
                    <span>Confirm Trial Lesson Reservation</span>
                  </button>

                  <div className="tl-form-security">
                    <Lock size={12} />
                    <span>100% Satisfaction Guaranteed • Free Rescheduling • Encrypted Booking</span>
                  </div>
                </form>
              </>
            ) : (
              <div className="tl-booking-success">
                <div className="tl-success-icon-halo">
                  <CheckCircle2 size={54} className="text-emerald" />
                </div>
                <h3>Trial Session Reserved!</h3>
                <p>We’ve dispatched your virtual classroom link and onboarding roadmap to <strong>{bookingData.email}</strong>.</p>
                <div className="tl-success-card-summary">
                  <div><strong>Student:</strong> {bookingData.studentName} ({bookingData.grade})</div>
                  <div><strong>Tutor:</strong> {bookingData.tutorName}</div>
                  <div><strong>Slot:</strong> {bookingData.slot}</div>
                </div>
                <button
                  onClick={() => {
                    setBookingSuccess(false);
                    setIsBookingModalOpen(false);
                  }}
                  className="tl-btn-glow full-w"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tutor Profile Details Modal */}
      {activeTutorModal && (
        <div
          className="tl-modal-backdrop"
          onClick={() => setActiveTutorModal(null)}
        >
          <div
            className="tl-modal-window tl-profile-window"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="tl-modal-close"
              onClick={() => setActiveTutorModal(null)}
            >
              <X size={18} />
            </button>

            <div className="tl-profile-split">
              <div className="tl-profile-sidebar">
                <img
                  src={activeTutorModal.img}
                  alt={activeTutorModal.name}
                  className="tl-profile-avatar-img"
                />
                <span className="tl-verified-profile-pill">
                  <ShieldCheck size={14} className="text-emerald" />
                  <span>100% Verified Tutor</span>
                </span>
                <div className="tl-profile-stats-box">
                  <div><strong>{activeTutorModal.totalHours}</strong><small>Hours Tutored</small></div>
                  <div><strong>{activeTutorModal.rating} ★</strong><small>{activeTutorModal.reviewCount} Reviews</small></div>
                  <div><strong>${activeTutorModal.hourlyRate}/hr</strong><small>Standard Rate</small></div>
                </div>
              </div>

              <div className="tl-profile-details">
                <h2>{activeTutorModal.name}</h2>
                <span className="tl-profile-sub">{activeTutorModal.role}</span>
                <div className="tl-profile-uni">
                  <GraduationCap size={15} />
                  <span>{activeTutorModal.university}</span>
                </div>

                <div className="tl-profile-boost-box">
                  <strong>Track Record:</strong> {activeTutorModal.statHighlight}
                </div>

                <p className="tl-profile-bio">{activeTutorModal.bio}</p>

                <h4>Specialized Subjects:</h4>
                <div className="tl-profile-subjects">
                  {activeTutorModal.subjects.map((s: string) => (
                    <span key={s} className="tl-sub-badge">{s}</span>
                  ))}
                </div>

                <button
                  onClick={() => {
                    const tutorName = activeTutorModal.name;
                    setActiveTutorModal(null);
                    setBookingData({
                      ...bookingData,
                      tutorName,
                      subject: activeTutorModal.subjects[0] || "Mathematics",
                    });
                    setIsBookingModalOpen(true);
                  }}
                  className="tl-btn-glow full-w"
                >
                  <CalendarDays size={16} />
                  <span>Book Trial Lesson with {activeTutorModal.name.split(" ")[0]}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Comparison Modal */}
      {isCompareOpen && (
        <div
          className="tl-modal-backdrop"
          onClick={() => setIsCompareOpen(false)}
        >
          <div
            className="tl-modal-window tl-compare-window"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="tl-modal-close"
              onClick={() => setIsCompareOpen(false)}
            >
              <X size={18} />
            </button>

            <div className="tl-modal-top">
              <h2>Compare Selected Tutors Side-by-Side</h2>
              <p>Compare credentials, hourly rates, verified ratings, and student outcomes.</p>
            </div>

            <div className="tl-compare-grid-modal">
              {compareList.map((tId) => {
                const tutor = tutorsList.find((t) => t.id === tId);
                if (!tutor) return null;

                return (
                  <div key={tutor.id} className="tl-compare-item-card">
                    <img src={tutor.img} alt={tutor.name} className="tl-compare-avatar" />
                    <h3>{tutor.name}</h3>
                    <span className="tl-compare-role">{tutor.role}</span>
                    <strong className="tl-compare-rate">${tutor.hourlyRate}/hr</strong>

                    <div className="tl-compare-prop">
                      <small>University</small>
                      <b>{tutor.university}</b>
                    </div>

                    <div className="tl-compare-prop">
                      <small>Rating</small>
                      <b>{tutor.rating} ★ ({tutor.reviewCount})</b>
                    </div>

                    <div className="tl-compare-prop">
                      <small>Outcome Track Record</small>
                      <span>{tutor.statHighlight}</span>
                    </div>

                    <button
                      onClick={() => {
                        setIsCompareOpen(false);
                        setBookingData({
                          ...bookingData,
                          tutorName: tutor.name,
                          subject: tutor.subjects[0] || "Mathematics",
                        });
                        setIsBookingModalOpen(true);
                      }}
                      className="tl-btn-glow sm full-w"
                    >
                      Book {tutor.name.split(" ")[0]}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
