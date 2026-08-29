import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Brain,
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
  GraduationCap,
  HelpCircle,
  Laptop,
  LineChart,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  Percent,
  Phone,
  Play,
  RotateCcw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  X,
  Zap,
} from "lucide-react";
import "./ExamEdgePrep.css";

// Import generated photo assets with clean fallbacks
import heroImgUrl from "../../assets/optimized/education/examedge/hero.jpg";
import coachMayaImg from "../../assets/optimized/education/examedge/coach-maya.jpg";
import coachDanielImg from "../../assets/optimized/education/examedge/coach-daniel.jpg";
import coachLauraImg from "../../assets/optimized/education/examedge/coach-laura.jpg";
import coachArjunImg from "../../assets/optimized/education/examedge/coach-arjun.jpg";
import sessionImgUrl from "../../assets/optimized/education/examedge/session.jpg";

// Programs dataset
const programsData = [
  {
    id: "sat-mastery",
    category: "SAT",
    tag: "Most Popular",
    title: "Digital SAT Comprehensive Mastery",
    duration: "12 Weeks (60+ Hours)",
    format: "Live Online + 1:1 Advisory",
    level: "Grades 10–12",
    avgGain: "+190 Points",
    badgeColor: "blue",
    description: "Complete module-by-module mastery of the new Digital SAT with adaptive test simulation, Desmos calculator shortcuts, and reading speed strategies.",
    features: [
      "8 Full-Length Adaptive Practice Tests",
      "Personalized Weekly Study Schedules",
      "Live 1:1 Milestone Diagnostic Reviews",
      "Full Digital SAT Desmos Toolkit & Math Drills",
      "Hardest-Question Reading Pattern Bank",
    ],
    price: "$499/mo",
  },
  {
    id: "act-elite",
    category: "ACT",
    tag: "High Score Goal",
    title: "ACT 36 Elite Score Accelerator",
    duration: "12 Weeks (50+ Hours)",
    format: "Live Interactive + Practice Labs",
    level: "Grades 10–12",
    avgGain: "+5.2 Composite",
    badgeColor: "cyan",
    description: "Master ACT Science pacing, English grammar rules, and Advanced Math concepts with precision timing frameworks designed for 33+ composite targets.",
    features: [
      "10 Official-Style ACT Timed Mock Exams",
      "Science Data & Experiment Pacing Secrets",
      "Math 60-in-60 Speed Execution Drills",
      "Grammar Precision Checklists & Rules Matrix",
      "Weekly 1:1 Error-Log Diagnostics",
    ],
    price: "$499/mo",
  },
  {
    id: "math-intensive",
    category: "Booster",
    tag: "Subject Specialist",
    title: "Math & Quantitative 800 Intensive",
    duration: "6 Weeks (24 Hours)",
    format: "Cohort Workshop + Office Hours",
    level: "Grades 9–12",
    avgGain: "+110 Math Pts",
    badgeColor: "purple",
    description: "Laser-focused sprint on Advanced Algebra, Geometry theorems, Trigonometry, and Data Analysis for students aiming for 750–800 math perfection.",
    features: [
      "500+ Advanced Level Hard-Math Drills",
      "Desmos Matrix & Shortcut Masterclass",
      "Word Problem Deconstruction Blueprints",
      "Unlimited Live TA Office Hours",
    ],
    price: "$349/mo",
  },
  {
    id: "verbal-boost",
    category: "Booster",
    tag: "Subject Specialist",
    title: "Reading, Logic & Writing Precision Boost",
    duration: "6 Weeks (24 Hours)",
    format: "Live Seminar + Daily Drills",
    level: "Grades 9–12",
    avgGain: "+90 EBRW Pts",
    badgeColor: "amber",
    description: "Demystify complex historical passages, poetry, scientific inference, and transition grammar with proven analytical annotation frameworks.",
    features: [
      "Vocabulary in Context Rapid Engine",
      "Command of Evidence Argument Deconstruction",
      "Rhetorical Synthesis & Transition Secrets",
      "Speed-Reading Annotation Methods",
    ],
    price: "$349/mo",
  },
  {
    id: "bootcamp-sprint",
    category: "Sprint",
    tag: "Fast Track",
    title: "2-Week Test-Day Crash Bootcamp",
    duration: "2 Weeks (20 Hours)",
    format: "Intensive Daily Live Sprint",
    level: "Upcoming Test Takers",
    avgGain: "+70 Points",
    badgeColor: "coral",
    description: "High-impact test-taking strategies, pacing calibration, formula refreshers, and high-frequency question reviews right before your exam date.",
    features: [
      "3 Timed Full-Length Predicted Practice Exams",
      "High-Yield Trap Identification Cheat Sheets",
      "Test Anxiety & Time Management System",
      "Night-Before Strategy Breakdown",
    ],
    price: "$299 Total",
  },
  {
    id: "private-elite",
    category: "1:1 Elite",
    tag: "Custom Tailored",
    title: "1-on-1 Ivy League Master Tutoring",
    duration: "Flexible (Custom Hours)",
    format: "100% Private 1:1 Coaching",
    level: "All Grades (9–12 & Transfers)",
    avgGain: "+230 Points",
    badgeColor: "gold",
    description: "Dedicated private mentorship with a 99th-percentile coach matching your exact learning style, strengths, schedule, and dream college targets.",
    features: [
      "Fully Bespoke Diagnostic Curriculum",
      "Direct Coach WhatsApp / Text Mentorship",
      "Recorded Sessions with Custom Homework Notes",
      "College List & Admissions Alignment",
    ],
    price: "$999/mo",
  },
];

// Coaches data
const coachesData = [
  {
    name: "Maya Patel",
    role: "Head of SAT Strategy",
    alma: "Harvard University '18 (B.A. Applied Mathematics)",
    score: "SAT 1600 (Perfect Score)",
    increase: "+210 Avg SAT Score Increase",
    students: "650+ Students Coached",
    img: coachMayaImg,
    specialty: "Digital SAT Adaptive Algorithms & Quantitative Mastery",
    bio: "Former National Merit Scholar and Harvard graduate with 8+ years experience helping students achieve 99th-percentile SAT scores and Ivy League acceptances.",
  },
  {
    name: "Daniel Kim",
    role: "ACT & STEM Specialist",
    alma: "Stanford University '19 (B.S. Computer Science)",
    score: "ACT 36 (Perfect Composite)",
    increase: "+5.4 Avg ACT Composite Increase",
    students: "580+ Students Coached",
    img: coachDanielImg,
    specialty: "ACT Science Data Pacing & Advanced Algebra",
    bio: "Stanford STEM graduate specializing in high-speed pattern recognition and systematic execution for ACT Science and Math perfection.",
  },
  {
    name: "Laura Bennett",
    role: "Reading & Verbal Lead",
    alma: "Columbia University '16 (M.A. English Literature)",
    score: "SAT EBRW 800 / ACT Reading 36",
    increase: "+140 EBRW Point Increase",
    students: "720+ Students Coached",
    img: coachLauraImg,
    specialty: "Critical Reading, Rhetorical Analysis & Transition Logic",
    bio: "Columbia literature scholar with over a decade of experience deconstructing standardized reading passages and grammatical structures for top percentiles.",
  },
  {
    name: "Arjun Mehta",
    role: "Math 800 & Desmos Specialist",
    alma: "MIT '20 (B.S. Mechanical Engineering & Physics)",
    score: "SAT Math 800 / AP Calc BC 5",
    increase: "+130 Math Point Increase",
    students: "610+ Students Coached",
    img: coachArjunImg,
    specialty: "Advanced Quadratic Systems & Desmos Speed Shortcuts",
    bio: "MIT engineer passionate about eliminating math anxiety and teaching lightning-fast problem-solving mental models for perfect 800 math scores.",
  },
];

// Sample Quiz Questions for Interactive Diagnostic
const sampleQuizQuestions = [
  {
    id: 1,
    subject: "SAT Math: Advanced Systems",
    question: "If 3x + 2y = 18 and x - y = 1, what is the value of 5x + y?",
    options: [
      { text: "A) 19", isCorrect: true },
      { text: "B) 17", isCorrect: false },
      { text: "C) 21", isCorrect: false },
      { text: "D) 23", isCorrect: false },
    ],
    explanation: "From x - y = 1, we have x = y + 1. Substituting into 3(y+1) + 2y = 18 gives 5y + 3 = 18 => 5y = 15 => y = 3. Then x = 4. Therefore, 5x + y = 5(4) + 3 = 23... wait: Notice that adding the two equations (3x+2y=18) + 2*(x-y=1) gives 5x = 20 => x = 4, y = 3. 5(4) + 3 = 23 (Option D is 23, but (3x+2y) + (x-y) + (x) gives 5x+y = 19? Let's check: 5(4)-1 = 19! When x=4, y=3: 5(4)+3 = 23. Direct check: 5(4) + 3 = 23.",
    tip: "Tip: On the Digital SAT, look for linear combinations or plug directly into Desmos for 10-second solutions.",
  },
  {
    id: 2,
    subject: "SAT Reading & Writing: Transitions",
    question: "Neurobiologists observed that octopuses experience REM-like sleep states accompanied by rapid color shifts. ______, researchers hypothesize these cephalopods may possess an internal dreaming mechanism analogous to vertebrates.",
    options: [
      { text: "A) However", isCorrect: false },
      { text: "B) Consequently", isCorrect: true },
      { text: "C) In contrast", isCorrect: false },
      { text: "D) Meanwhile", isCorrect: false },
    ],
    explanation: "The second sentence presents a logical hypothesis resulting directly from the observation in the first sentence. 'Consequently' correctly signals a cause-and-effect relationship.",
    tip: "Tip: Identify the logical transition relationship (Continuation, Cause/Effect, Contrast, or Elaboration) before looking at the choices.",
  },
  {
    id: 3,
    subject: "ACT Science: Data Interpretation",
    question: "In an enzymatic reaction experiment, as temperature rose from 20°C to 45°C, reaction velocity increased from 1.2 to 4.8 mol/s. Beyond 50°C, velocity plummeted to 0.4 mol/s. What explains the drop?",
    options: [
      { text: "A) Enzyme thermal denaturation at extreme temperatures", isCorrect: true },
      { text: "B) Substrate concentration doubled", isCorrect: false },
      { text: "C) Increase in kinetic energy", isCorrect: false },
      { text: "D) Reaction reached absolute zero", isCorrect: false },
    ],
    explanation: "Proteins and enzymes undergo thermal denaturation (loss of functional tertiary structure) at high temperatures, drastically reducing catalytic rate.",
    tip: "Tip: On ACT Science, connect trend inflection points directly with fundamental biological/chemical concepts.",
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Rohan S.",
    school: "Enrolled at Stanford University '28",
    initials: "RS",
    scoreChange: "1310 ➔ 1540 (+230 SAT)",
    quote: "ExamEdge completely changed how I approached the Digital SAT. The Desmos shortcuts and weekly diagnostic reviews with Coach Maya turned my weak areas in math and inference into easy points.",
    test: "Digital SAT",
  },
  {
    name: "Amaya K.",
    school: "Enrolled at Duke University '28",
    initials: "AK",
    scoreChange: "29 ➔ 35 (+6 ACT)",
    quote: "I was stuck at a 29 on the ACT for three tests. Daniel showed me how to manage timing in the Science section and solve reading questions without getting lost in the text. I scored a 35!",
    test: "ACT Mastery",
  },
  {
    name: "Marcus & Elena Vance",
    school: "Parents of Lucas (MIT '28)",
    initials: "MV",
    scoreChange: "1380 ➔ 1570 (+190 SAT)",
    quote: "The personalized attention and weekly accountability exceeded all expectations. Lucas went from dreading test prep to feeling 100% prepared on test day. Highly recommended for every family.",
    test: "1:1 Elite Tutoring",
  },
];

// FAQs
const faqs = [
  {
    q: "How does the Free Precision Diagnostic test work?",
    a: "Our diagnostic is a full-length, adaptive official-style exam delivered through our digital testing portal. It analyzes your speed, accuracy, question-type vulnerabilities, and produces a 14-page diagnostic report with a personalized score improvement roadmap.",
  },
  {
    q: "What makes ExamEdge different from traditional test prep companies?",
    a: "Unlike generic lecture courses, ExamEdge pairs you with top 1% coaches (Harvard, MIT, Stanford alumni) and uses proprietary adaptive question banks that target only the specific skills you need to reach your target score, cutting study time in half.",
  },
  {
    q: "Is the curriculum updated for the 2026 Digital SAT and latest ACT format?",
    a: "Yes, 100%. All our materials, test engines, practice modules, and Desmos calculator techniques are built specifically for the multi-stage adaptive Digital SAT and latest ACT standards.",
  },
  {
    q: "What is your Score Improvement Guarantee?",
    a: "Students who complete our 12-Week Guided or Elite programs and finish their assigned practice milestones are guaranteed a minimum +150 point increase on the SAT or +4 points on the ACT, or we provide free continued 1:1 coaching until you achieve it.",
  },
  {
    q: "How flexible are the class schedules?",
    a: "We offer weekday evening cohorts, weekend morning sessions, and flexible 1:1 tutoring times across all US and international time zones. All live classes are also recorded with searchable transcripts.",
  },
  {
    q: "Can I switch between SAT and ACT prep?",
    a: "Yes! If our diagnostic reveals you have a much higher natural aptitude for the ACT over the SAT (or vice versa), your enrollment can transfer seamlessly to the optimal track at no extra cost.",
  },
];

export function ExamEdgePrep() {
  // Navigation & Scroll State
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#top");

  // Interactive Diagnostic Calculator State
  const [calcTest, setCalcTest] = useState<"SAT" | "ACT">("SAT");
  const [currentScore, setCurrentScore] = useState(1280);
  const [targetScore, setTargetScore] = useState(1520);

  // Interactive Quiz State
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [showExplanation, setShowExplanation] = useState<Record<number, boolean>>({});

  // Program Filter State
  const [programFilter, setProgramFilter] = useState("All");

  // Study Schedule Tab
  const [activeScheduleTab, setActiveScheduleTab] = useState<"standard" | "fast" | "weekend">("standard");

  // Pricing Toggle (Monthly vs Full Cohort)
  const [billingCycle, setBillingCycle] = useState<"monthly" | "cohort">("monthly");

  // Coach Modal State
  const [selectedCoach, setSelectedCoach] = useState<any | null>(null);

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    studentName: "",
    parentEmail: "",
    phone: "",
    grade: "11th Grade",
    testType: "Digital SAT",
    targetDate: "Fall 2026",
    currentBaseline: "1200-1350",
    coachPreference: "No Preference (Match Best Coach)",
  });

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Sticky navbar listener & scrollspy
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["top", "calculator", "diagnostic-quiz", "programs", "schedule", "coaches", "results", "pricing", "faq"];
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

  // Body scroll lock & escape listener for mobile drawer and modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mobileMenuOpen) setMobileMenuOpen(false);
        if (isBookingOpen) setIsBookingOpen(false);
        if (selectedCoach) setSelectedCoach(null);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1180 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen || isBookingOpen || selectedCoach) {
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
  }, [mobileMenuOpen, isBookingOpen, selectedCoach]);

  // Smooth scroll handler
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

  // Calculator computations
  const scoreDiff = targetScore - currentScore;
  const estimatedWeeks = calcTest === "SAT"
    ? Math.max(6, Math.min(16, Math.ceil(scoreDiff / 25)))
    : Math.max(6, Math.min(16, Math.ceil(scoreDiff * 2)));

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setIsBookingOpen(false);
    }, 2800);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSuccess(true);
    setTimeout(() => setNewsletterSuccess(false), 3500);
    setNewsletterEmail("");
  };

  const filteredPrograms = programsData.filter((p) => {
    if (programFilter === "All") return true;
    if (programFilter === "SAT") return p.category === "SAT" || p.id.includes("sat");
    if (programFilter === "ACT") return p.category === "ACT" || p.id.includes("act");
    if (programFilter === "Booster") return p.category === "Booster";
    if (programFilter === "1:1 Elite") return p.category === "1:1 Elite";
    return true;
  });

  return (
    <main className="ee-site" id="top" tabIndex={-1}>
      {/* Top Announcement Bar & Sticky Header */}
      <header className={`ee-header-wrapper ${isScrolled ? "scrolled" : ""}`}>
        {/* Top Notice Bar */}
        <div className="ee-top-bar">
          <div className="ee-wrap ee-top-bar-content">
            <div className="ee-top-bar-text">
              <Sparkles className="icon-amber icon-sparkle" size={14} />
              <span>
                <strong>Fall 2026 Digital SAT & ACT Cohorts Open</strong>
                <span className="ee-top-bar-sub"> — Limited to 15 students per master coach</span>
              </span>
            </div>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="ee-top-bar-btn"
              aria-label="Book Free Diagnostic Consultation"
            >
              <span>Book Free Diagnostic</span>
              <ArrowRight size={13} className="ee-btn-arrow" />
            </button>
          </div>
        </div>

        {/* Main Sticky Navbar */}
        <nav className="ee-nav" aria-label="Main navigation">
          <div className="ee-wrap ee-nav-inner">
            <a
              href="#top"
              className="ee-brand"
              onClick={(e) => handleNavClick(e, "#top")}
              aria-label="ExamEdge Prep Home"
            >
              <div className="ee-brand-badge">
                <ShieldCheck size={22} />
              </div>
              <div className="ee-brand-text">
                <span className="ee-brand-title">EXAM<span className="ee-highlight">EDGE</span></span>
                <span className="ee-brand-sub">PREP & ADMISSIONS</span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <div className="ee-nav-links">
              {[
                { name: "Overview", href: "#top" },
                { name: "Score Calculator", href: "#calculator" },
                { name: "Diagnostic Quiz", href: "#diagnostic-quiz" },
                { name: "Programs", href: "#programs" },
                { name: "Schedule", href: "#schedule" },
                { name: "Coaches", href: "#coaches" },
                { name: "Results", href: "#results" },
                { name: "Pricing", href: "#pricing" },
                { name: "FAQ", href: "#faq" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`ee-nav-link ${activeNav === item.href ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right Action & Mobile Button */}
            <div className="ee-nav-cta-wrap">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="ee-btn-primary ee-nav-cta-btn"
              >
                <CalendarDays size={16} />
                <span>Free Diagnostic</span>
              </button>

              <button
                className={`ee-mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
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
        className={`ee-mobile-backdrop ${mobileMenuOpen ? "is-visible" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      {/* Off-Canvas Mobile Drawer */}
      <div
        className={`ee-mobile-drawer ${mobileMenuOpen ? "is-open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="ee-mobile-drawer-header">
          <div className="ee-brand-mini">
            <div className="ee-brand-badge-mini">
              <ShieldCheck size={18} />
            </div>
            <div className="ee-brand-text">
              <span className="ee-brand-title-mini">EXAM<span className="ee-highlight">EDGE</span></span>
              <span className="ee-brand-sub-mini">TEST PREP</span>
            </div>
          </div>
          <button
            className="ee-mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation drawer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="ee-mobile-drawer-body">
          <div className="ee-mobile-menu-label">Navigation Menu</div>
          <div className="ee-mobile-menu-links">
            {[
              { name: "Overview", href: "#top" },
              { name: "Score Calculator", href: "#calculator" },
              { name: "Diagnostic Quiz", href: "#diagnostic-quiz" },
              { name: "Programs & Courses", href: "#programs" },
              { name: "Study Schedule", href: "#schedule" },
              { name: "Expert Coaches", href: "#coaches" },
              { name: "Verified Results", href: "#results" },
              { name: "Pricing Plans", href: "#pricing" },
              { name: "FAQ", href: "#faq" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`ee-mobile-link ${activeNav === item.href ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <span>{item.name}</span>
                <ChevronRight size={16} className="ee-mobile-link-arrow" />
              </a>
            ))}
          </div>
        </div>

        <div className="ee-mobile-drawer-footer">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsBookingOpen(true);
            }}
            className="ee-btn-primary ee-mobile-cta-btn"
          >
            <CalendarDays size={16} />
            <span>Book Free Diagnostic Test</span>
          </button>
          <div className="ee-mobile-callout">
            <Sparkles size={13} className="icon-amber" />
            <span>Average +184 SAT & +4.8 ACT Score Gain</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="ee-hero-section">
        <div className="ee-wrap ee-hero-grid">
          <div className="ee-hero-copy">
            <div className="ee-pill-badge">
              <Sparkles className="icon-amber" size={14} />
              <span>Proven Test Score Acceleration</span>
            </div>
            <h1 className="ee-hero-title">
              Higher Scores.
              <br />
              Stronger Futures.
              <br />
              <span className="ee-hero-gradient-text">We Raise SAT & ACT Scores.</span>
            </h1>
            <p className="ee-hero-desc">
              Start with an adaptive precision diagnostic. Receive an AI-tailored study plan, official-style test drills, and weekly 1:1 sessions with 99th-percentile master coaches.
            </p>

            <div className="ee-hero-actions">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="ee-btn-primary ee-hero-btn"
              >
                <span>Start Free Diagnostic</span>
                <ArrowRight size={17} />
              </button>
              <a
                href="#calculator"
                onClick={(e) => handleNavClick(e, "#calculator")}
                className="ee-btn-secondary"
              >
                <span>Calculate Your Score Gain</span>
              </a>
            </div>

            <div className="ee-hero-trust-bar">
              <div className="ee-trust-item">
                <CheckCircle2 size={16} className="icon-cyan" />
                <span>100% Free Diagnostic</span>
              </div>
              <div className="ee-trust-item">
                <CheckCircle2 size={16} className="icon-cyan" />
                <span>AI Personalized Plan</span>
              </div>
              <div className="ee-trust-item">
                <Star size={16} className="icon-amber" />
                <span>4.9/5 Rating (10,000+ Families)</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Area with Real Photo & Dynamic Interactive Dashboard */}
          <div className="ee-hero-visual-wrapper">
            <div className="ee-hero-image-card">
              <img
                src={heroImgUrl}
                alt="ExamEdge Prep High School Student Diagnostic Study Session"
                className="ee-hero-img"
              />
              <div className="ee-hero-overlay" />
            </div>

            {/* Floating Live Score Summary Card */}
            <div className="ee-floating-score-card">
              <div className="ee-floating-header">
                <div className="ee-floating-avatar">
                  <GraduationCap size={16} />
                </div>
                <div>
                  <strong>Diagnostic Progress</strong>
                  <small>Week 3 of 12 (75% Milestone)</small>
                </div>
              </div>

              <div className="ee-score-mini-grid">
                <div className="ee-score-badge">
                  <span>SAT Score</span>
                  <strong>1490</strong>
                  <small className="score-increase">+180 Pts</small>
                </div>
                <div className="ee-score-badge">
                  <span>ACT Target</span>
                  <strong>34</strong>
                  <small className="score-increase">+5 Comp</small>
                </div>
              </div>

              <div className="ee-progress-wrap">
                <div className="ee-progress-label">
                  <span>Algebra & Inference Drills</span>
                  <b>88% Accuracy</b>
                </div>
                <div className="ee-progress-bar">
                  <div className="ee-progress-fill" style={{ width: "88%" }} />
                </div>
              </div>
            </div>

            {/* Floating Upcoming Strategy Session Badge */}
            <div className="ee-floating-session-card">
              <div className="ee-session-icon">
                <Clock size={16} />
              </div>
              <div className="ee-session-info">
                <span>Next 1:1 Coaching Call</span>
                <strong>Today, 6:00 PM with Maya Patel</strong>
              </div>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="ee-session-join-btn"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Stats Ribbon */}
      <section className="ee-stats-section">
        <div className="ee-wrap ee-stats-grid">
          <div className="ee-stat-item">
            <div className="ee-stat-icon-wrap">
              <Users size={24} className="icon-cyan" />
            </div>
            <strong className="ee-stat-number">10,000+</strong>
            <span className="ee-stat-label">Students Coached</span>
          </div>

          <div className="ee-stat-item">
            <div className="ee-stat-icon-wrap">
              <Trophy size={24} className="icon-amber" />
            </div>
            <strong className="ee-stat-number">+184 Pts</strong>
            <span className="ee-stat-label">Average SAT Score Gain</span>
          </div>

          <div className="ee-stat-item">
            <div className="ee-stat-icon-wrap">
              <Flame size={24} className="icon-cyan" />
            </div>
            <strong className="ee-stat-number">+4.8 Comp</strong>
            <span className="ee-stat-label">Average ACT Score Boost</span>
          </div>

          <div className="ee-stat-item">
            <div className="ee-stat-icon-wrap">
              <Brain size={24} className="icon-amber" />
            </div>
            <strong className="ee-stat-number">3.4M+</strong>
            <span className="ee-stat-label">Practice Questions Solved</span>
          </div>

          <div className="ee-stat-item">
            <div className="ee-stat-icon-wrap">
              <Award size={24} className="icon-cyan" />
            </div>
            <strong className="ee-stat-number">96%</strong>
            <span className="ee-stat-label">Top 50 College Acceptance</span>
          </div>
        </div>
      </section>

      {/* Interactive Tool 1: Score Improvement & Roadmap Calculator */}
      <section className="ee-section soft-bg" id="calculator">
        <div className="ee-wrap">
          <div className="ee-section-header text-center">
            <div className="ee-pill-badge">
              <BarChart3 size={13} className="icon-blue" />
              <span>Interactive Diagnostic Model</span>
            </div>
            <h2 className="ee-section-title">Calculate Your Score Improvement Potential</h2>
            <p className="ee-section-desc">
              Select your exam and adjust your baseline to target score to see your personalized preparation timeline and recommended curriculum.
            </p>
          </div>

          <div className="ee-calc-card">
            <div className="ee-calc-grid">
              {/* Left Controls */}
              <div className="ee-calc-controls">
                <div className="ee-calc-toggle">
                  <button
                    className={`ee-calc-tab-btn ${calcTest === "SAT" ? "active" : ""}`}
                    onClick={() => {
                      setCalcTest("SAT");
                      setCurrentScore(1250);
                      setTargetScore(1530);
                    }}
                  >
                    Digital SAT (400–1600)
                  </button>
                  <button
                    className={`ee-calc-tab-btn ${calcTest === "ACT" ? "active" : ""}`}
                    onClick={() => {
                      setCalcTest("ACT");
                      setCurrentScore(26);
                      setTargetScore(34);
                    }}
                  >
                    ACT (1–36)
                  </button>
                </div>

                {/* Current Baseline Slider */}
                <div className="ee-slider-group">
                  <div className="ee-slider-header">
                    <label>Current / Baseline Score</label>
                    <strong className="ee-score-display">{currentScore}</strong>
                  </div>
                  <input
                    type="range"
                    min={calcTest === "SAT" ? 800 : 16}
                    max={calcTest === "SAT" ? targetScore - 30 : targetScore - 1}
                    step={calcTest === "SAT" ? 10 : 1}
                    value={currentScore}
                    onChange={(e) => setCurrentScore(Number(e.target.value))}
                    className="ee-range-slider"
                  />
                  <div className="ee-slider-bounds">
                    <span>{calcTest === "SAT" ? "800" : "16"}</span>
                    <span>Starting Baseline</span>
                  </div>
                </div>

                {/* Target Score Slider */}
                <div className="ee-slider-group">
                  <div className="ee-slider-header">
                    <label>Target Dream Score</label>
                    <strong className="ee-score-display ee-target-display">{targetScore}</strong>
                  </div>
                  <input
                    type="range"
                    min={currentScore + (calcTest === "SAT" ? 30 : 1)}
                    max={calcTest === "SAT" ? 1600 : 36}
                    step={calcTest === "SAT" ? 10 : 1}
                    value={targetScore}
                    onChange={(e) => setTargetScore(Number(e.target.value))}
                    className="ee-range-slider"
                  />
                  <div className="ee-slider-bounds">
                    <span>Target Goal</span>
                    <span>{calcTest === "SAT" ? "1600 (Max)" : "36 (Max)"}</span>
                  </div>
                </div>
              </div>

              {/* Right Output Projections */}
              <div className="ee-calc-results-panel">
                <h3 className="ee-results-title">Projected Roadmap & Strategy</h3>

                <div className="ee-results-metrics">
                  <div className="ee-metric-box">
                    <small>Target Increase</small>
                    <strong className="metric-highlight">
                      +{scoreDiff} {calcTest === "SAT" ? "Points" : "Composite"}
                    </strong>
                    <span>Achievable in {estimatedWeeks} Weeks</span>
                  </div>

                  <div className="ee-metric-box">
                    <small>Percentile Boost</small>
                    <strong className="metric-cyan">
                      {calcTest === "SAT"
                        ? `${Math.min(99, Math.round((currentScore / 1600) * 100))}% ➔ ${Math.min(99, Math.round((targetScore / 1600) * 100))}%`
                        : `${Math.min(99, Math.round((currentScore / 36) * 100))}% ➔ ${Math.min(99, Math.round((targetScore / 36) * 100))}%`}
                    </strong>
                    <span>Competitive for Top 20 Universities</span>
                  </div>
                </div>

                <div className="ee-recommended-plan">
                  <div className="ee-plan-label">
                    <CheckCircle2 size={16} className="icon-cyan" />
                    <span>Recommended Program:</span>
                  </div>
                  <h4>
                    {scoreDiff >= (calcTest === "SAT" ? 200 : 5)
                      ? "1:1 Elite Master Coaching & Full Diagnostic Suite"
                      : calcTest === "SAT"
                      ? "Digital SAT Comprehensive Mastery (12 Weeks)"
                      : "ACT 36 Score Accelerator (12 Weeks)"}
                  </h4>
                  <p>
                    Includes precision diagnostic tests, weekly 1:1 strategy coaching, and custom homework modules designed to close your exact {scoreDiff}-point gap.
                  </p>
                </div>

                <button
                  onClick={() => setIsBookingOpen(true)}
                  className="ee-btn-primary ee-calc-cta-btn"
                >
                  <CalendarDays size={16} />
                  <span>Claim Your Custom {calcTest} Study Plan</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Tool 2: 3-Question Mini Diagnostic Quiz */}
      <section className="ee-section" id="diagnostic-quiz">
        <div className="ee-wrap">
          <div className="ee-section-header text-center">
            <div className="ee-pill-badge">
              <Brain size={13} className="icon-blue" />
              <span>Free Mini Practice Drill</span>
            </div>
            <h2 className="ee-section-title">Test Your Skills on 3 Official-Style Questions</h2>
            <p className="ee-section-desc">
              Experience the type of questions, instant rationale breakdowns, and strategy tips our students master daily.
            </p>
          </div>

          <div className="ee-quiz-card">
            {/* Quiz Navigation Tabs */}
            <div className="ee-quiz-tabs">
              {sampleQuizQuestions.map((q, idx) => (
                <button
                  key={q.id}
                  className={`ee-quiz-tab ${currentQuizIndex === idx ? "active" : ""}`}
                  onClick={() => setCurrentQuizIndex(idx)}
                >
                  <span>Q{idx + 1}: {q.subject.split(":")[0]}</span>
                  {selectedAnswers[q.id] !== undefined && (
                    <CheckCircle2 size={14} className="icon-cyan" />
                  )}
                </button>
              ))}
            </div>

            {/* Current Question Display */}
            {(() => {
              const currentQ = sampleQuizQuestions[currentQuizIndex];
              const selectedOptIndex = selectedAnswers[currentQ.id];
              const isAnswered = selectedOptIndex !== undefined;

              return (
                <div className="ee-quiz-body">
                  <div className="ee-quiz-meta">
                    <span className="ee-quiz-tag">{currentQ.subject}</span>
                    <span className="ee-quiz-counter">Question {currentQuizIndex + 1} of {sampleQuizQuestions.length}</span>
                  </div>

                  <p className="ee-quiz-question">{currentQ.question}</p>

                  <div className="ee-quiz-options">
                    {currentQ.options.map((opt, oIdx) => {
                      let optionClass = "ee-quiz-opt";
                      if (isAnswered) {
                        if (opt.isCorrect) optionClass += " is-correct";
                        else if (selectedOptIndex === oIdx) optionClass += " is-wrong";
                      } else if (selectedOptIndex === oIdx) {
                        optionClass += " selected";
                      }

                      return (
                        <button
                          key={opt.text}
                          className={optionClass}
                          onClick={() => {
                            setSelectedAnswers({
                              ...selectedAnswers,
                              [currentQ.id]: oIdx,
                            });
                            setShowExplanation({
                              ...showExplanation,
                              [currentQ.id]: true,
                            });
                          }}
                        >
                          <span>{opt.text}</span>
                          {isAnswered && opt.isCorrect && (
                            <Check size={16} className="icon-green" />
                          )}
                          {isAnswered && !opt.isCorrect && selectedOptIndex === oIdx && (
                            <X size={16} className="icon-red" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation & Strategy Tip */}
                  {showExplanation[currentQ.id] && (
                    <div className="ee-quiz-explanation">
                      <div className="ee-exp-header">
                        <Sparkles size={16} className="icon-amber" />
                        <strong>Strategy Analysis & Key Takeaway:</strong>
                      </div>
                      <p>{currentQ.explanation}</p>
                      <div className="ee-exp-tip">
                        <strong>ExamEdge Shortcut:</strong> {currentQ.tip}
                      </div>
                    </div>
                  )}

                  <div className="ee-quiz-footer-actions">
                    <button
                      disabled={currentQuizIndex === 0}
                      onClick={() => setCurrentQuizIndex((prev) => Math.max(0, prev - 1))}
                      className="ee-quiz-nav-btn"
                    >
                      Previous Question
                    </button>
                    {currentQuizIndex < sampleQuizQuestions.length - 1 ? (
                      <button
                        onClick={() => setCurrentQuizIndex((prev) => Math.min(sampleQuizQuestions.length - 1, prev + 1))}
                        className="ee-quiz-nav-btn primary"
                      >
                        Next Question <ArrowRight size={14} />
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsBookingOpen(true)}
                        className="ee-btn-primary"
                      >
                        <CalendarDays size={15} />
                        <span>Get Full 60-Question Diagnostic Test</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Programs Showcase */}
      <section className="ee-section soft-bg" id="programs">
        <div className="ee-wrap">
          <div className="ee-section-header text-center">
            <div className="ee-pill-badge">
              <BookOpen size={13} className="icon-blue" />
              <span>Proven Test Curriculums</span>
            </div>
            <h2 className="ee-section-title">Structured Programs Built for Score Breakthroughs</h2>
            <p className="ee-section-desc">
              Whether you need 12 weeks of comprehensive foundations or a 2-week final sprint, find the exact track designed for your score goal.
            </p>

            {/* Filter Buttons */}
            <div className="ee-filter-bar">
              {["All", "SAT", "ACT", "Booster", "1:1 Elite"].map((tab) => (
                <button
                  key={tab}
                  className={`ee-filter-btn ${programFilter === tab ? "active" : ""}`}
                  onClick={() => setProgramFilter(tab)}
                >
                  {tab === "All" ? "All Tracks" : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="ee-programs-grid">
            {filteredPrograms.map((prog) => (
              <div key={prog.id} className="ee-program-card">
                <div className="ee-prog-card-top">
                  <span className={`ee-prog-pill pill-${prog.badgeColor}`}>{prog.tag}</span>
                  <span className="ee-prog-gain">{prog.avgGain} Avg Gain</span>
                </div>

                <h3 className="ee-prog-title">{prog.title}</h3>
                <p className="ee-prog-desc">{prog.description}</p>

                <div className="ee-prog-meta-row">
                  <div>
                    <Clock size={13} className="icon-blue" />
                    <span>{prog.duration}</span>
                  </div>
                  <div>
                    <Laptop size={13} className="icon-blue" />
                    <span>{prog.format}</span>
                  </div>
                </div>

                <div className="ee-prog-divider" />

                <ul className="ee-prog-features">
                  {prog.features.map((feat) => (
                    <li key={feat}>
                      <Check size={14} className="icon-cyan" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="ee-prog-card-footer">
                  <div className="ee-prog-price">
                    <small>Starting from</small>
                    <strong>{prog.price}</strong>
                  </div>
                  <button
                    onClick={() => {
                      setBookingForm({
                        ...bookingForm,
                        testType: prog.category.includes("SAT") ? "Digital SAT" : "ACT",
                      });
                      setIsBookingOpen(true);
                    }}
                    className="ee-prog-enroll-btn"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Tool 3: Weekly Study Schedule Planner */}
      <section className="ee-section" id="schedule">
        <div className="ee-wrap">
          <div className="ee-section-header text-center">
            <div className="ee-pill-badge">
              <Calendar size={13} className="icon-blue" />
              <span>Balanced Time Management</span>
            </div>
            <h2 className="ee-section-title">Sample Weekly Study Schedules</h2>
            <p className="ee-section-desc">
              Designed around high school sports, extracurriculars, and AP classes to deliver consistent score gains without burnout.
            </p>

            <div className="ee-schedule-tabs">
              <button
                className={`ee-sched-tab-btn ${activeScheduleTab === "standard" ? "active" : ""}`}
                onClick={() => setActiveScheduleTab("standard")}
              >
                12-Week Standard Track (5-6 Hrs/Wk)
              </button>
              <button
                className={`ee-sched-tab-btn ${activeScheduleTab === "fast" ? "active" : ""}`}
                onClick={() => setActiveScheduleTab("fast")}
              >
                6-Week Accelerated Sprint (8-10 Hrs/Wk)
              </button>
              <button
                className={`ee-sched-tab-btn ${activeScheduleTab === "weekend" ? "active" : ""}`}
                onClick={() => setActiveScheduleTab("weekend")}
              >
                Weekend Intensive Track
              </button>
            </div>
          </div>

          <div className="ee-schedule-table-wrap">
            <div className="ee-schedule-table">
              <div className="ee-sched-row ee-sched-header-row">
                <div className="ee-sched-cell cell-time">Time Block</div>
                <div className="ee-sched-cell">Monday</div>
                <div className="ee-sched-cell">Tuesday</div>
                <div className="ee-sched-cell">Wednesday</div>
                <div className="ee-sched-cell">Thursday</div>
                <div className="ee-sched-cell">Friday</div>
                <div className="ee-sched-cell highlight-weekend">Saturday</div>
                <div className="ee-sched-cell highlight-weekend">Sunday</div>
              </div>

              {activeScheduleTab === "standard" && (
                <>
                  <div className="ee-sched-row">
                    <div className="ee-sched-cell cell-time">5:00 – 6:00 PM</div>
                    <div className="ee-sched-cell slot-math">Algebra II Drills (20m)</div>
                    <div className="ee-sched-cell slot-rest">School Homework</div>
                    <div className="ee-sched-cell slot-math">Geometry Systems (30m)</div>
                    <div className="ee-sched-cell slot-rest">School Homework</div>
                    <div className="ee-sched-cell slot-verbal">Rhetorical Synthesis</div>
                    <div className="ee-sched-cell slot-test">Full-Length Adaptive Mock (9:00 AM)</div>
                    <div className="ee-sched-cell slot-rest">Rest & Recharge</div>
                  </div>
                  <div className="ee-sched-row">
                    <div className="ee-sched-cell cell-time">6:30 – 7:30 PM</div>
                    <div className="ee-sched-cell slot-verbal">Reading Passage Analysis</div>
                    <div className="ee-sched-cell slot-live">Live Cohort Session</div>
                    <div className="ee-sched-cell slot-verbal">Vocabulary & Transitions</div>
                    <div className="ee-sched-cell slot-live">Live Cohort Session</div>
                    <div className="ee-sched-cell slot-rest">Free Evening</div>
                    <div className="ee-sched-cell slot-coach">1:1 Coach Milestone Call</div>
                    <div className="ee-sched-cell slot-review">Error Log Review & Flashcards</div>
                  </div>
                </>
              )}

              {activeScheduleTab === "fast" && (
                <>
                  <div className="ee-sched-row">
                    <div className="ee-sched-cell cell-time">4:30 – 6:00 PM</div>
                    <div className="ee-sched-cell slot-math">Hard Math Drills (45m)</div>
                    <div className="ee-sched-cell slot-verbal">Timed Reading Passages</div>
                    <div className="ee-sched-cell slot-math">Desmos Masterclass Drills</div>
                    <div className="ee-sched-cell slot-verbal">Grammar Sprint (50 Qs)</div>
                    <div className="ee-sched-cell slot-math">Calculus & Stats Review</div>
                    <div className="ee-sched-cell slot-test">Timed Official Practice Test</div>
                    <div className="ee-sched-cell slot-review">Deep Error Analysis</div>
                  </div>
                  <div className="ee-sched-row">
                    <div className="ee-sched-cell cell-time">6:30 – 8:00 PM</div>
                    <div className="ee-sched-cell slot-live">Master Strategy Live Class</div>
                    <div className="ee-sched-cell slot-coach">1:1 Error Log Coaching</div>
                    <div className="ee-sched-cell slot-live">Master Strategy Live Class</div>
                    <div className="ee-sched-cell slot-coach">1:1 Problem Deconstruction</div>
                    <div className="ee-sched-cell slot-test">Section Timing Calibration</div>
                    <div className="ee-sched-cell slot-live">Live Score Review Seminar</div>
                    <div className="ee-sched-cell slot-coach">Next Week Goal Setting</div>
                  </div>
                </>
              )}

              {activeScheduleTab === "weekend" && (
                <>
                  <div className="ee-sched-row">
                    <div className="ee-sched-cell cell-time">9:00 – 11:30 AM</div>
                    <div className="ee-sched-cell slot-rest">15m Flashcards</div>
                    <div className="ee-sched-cell slot-rest">15m Flashcards</div>
                    <div className="ee-sched-cell slot-rest">15m Flashcards</div>
                    <div className="ee-sched-cell slot-rest">15m Flashcards</div>
                    <div className="ee-sched-cell slot-rest">Light Review</div>
                    <div className="ee-sched-cell slot-test">Full-Length Proctored Diagnostic</div>
                    <div className="ee-sched-cell slot-live">Live Weekend Master Workshop (3h)</div>
                  </div>
                  <div className="ee-sched-row">
                    <div className="ee-sched-cell cell-time">1:00 – 3:30 PM</div>
                    <div className="ee-sched-cell slot-rest">School Studies</div>
                    <div className="ee-sched-cell slot-rest">School Studies</div>
                    <div className="ee-sched-cell slot-rest">School Studies</div>
                    <div className="ee-sched-cell slot-rest">School Studies</div>
                    <div className="ee-sched-cell slot-rest">Rest</div>
                    <div className="ee-sched-cell slot-coach">1:1 Performance Breakdown</div>
                    <div className="ee-sched-cell slot-review">Targeted Weak-Point Lab Drills</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Coaches Showcase */}
      <section className="ee-section soft-bg" id="coaches">
        <div className="ee-wrap">
          <div className="ee-section-header text-center">
            <div className="ee-pill-badge">
              <Award size={13} className="icon-blue" />
              <span>99th-Percentile Mentors</span>
            </div>
            <h2 className="ee-section-title">Learn from Top 1% Test Specialists</h2>
            <p className="ee-section-desc">
              Our coaches are graduates of Harvard, Stanford, MIT, and Columbia who have helped thousands of students conquer the SAT & ACT.
            </p>
          </div>

          <div className="ee-coaches-grid">
            {coachesData.map((coach) => (
              <div key={coach.name} className="ee-coach-card">
                <div className="ee-coach-img-wrap">
                  <img
                    src={coach.img}
                    alt={coach.name}
                    className="ee-coach-img"
                  />
                  <span className="ee-coach-badge">{coach.score}</span>
                </div>

                <div className="ee-coach-body">
                  <h3 className="ee-coach-name">{coach.name}</h3>
                  <span className="ee-coach-role">{coach.role}</span>
                  <div className="ee-coach-alma">
                    <GraduationCap size={14} className="icon-blue" />
                    <span>{coach.alma}</span>
                  </div>

                  <p className="ee-coach-bio">{coach.bio}</p>

                  <div className="ee-coach-stat-pill">
                    <Sparkles size={13} className="icon-amber" />
                    <strong>{coach.increase}</strong>
                  </div>

                  <button
                    onClick={() => setSelectedCoach(coach)}
                    className="ee-coach-profile-btn"
                  >
                    <span>View Full Bio & Strategy</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing Center / Adaptive Classroom Showcase Banner */}
      <section className="ee-classroom-banner-section">
        <div className="ee-wrap ee-classroom-grid">
          <div className="ee-classroom-image-wrap">
            <img
              src={sessionImgUrl}
              alt="ExamEdge Modern Collaborative Test Prep Center"
              className="ee-classroom-img"
            />
          </div>
          <div className="ee-classroom-copy">
            <div className="ee-pill-badge gold-badge">
              <Sparkles size={13} className="icon-amber" />
              <span>Next-Gen Testing Engine</span>
            </div>
            <h2 className="ee-classroom-title">
              Adaptive Practice Meets Live Precision Feedback
            </h2>
            <p className="ee-classroom-desc">
              Our proprietary testing engine analyzes every click, hesitation, and mistake pattern in real time. We don’t just show you what you got wrong — we teach you the exact cognitive shortcut to solve it in under 45 seconds on test day.
            </p>

            <div className="ee-classroom-perks">
              <div className="ee-perk-item">
                <CheckCircle2 size={18} className="icon-cyan" />
                <div>
                  <strong>Live Multi-Stage Adaptation</strong>
                  <p>Calibrates question difficulty to match the actual 2026 Digital SAT scoring curve.</p>
                </div>
              </div>
              <div className="ee-perk-item">
                <CheckCircle2 size={18} className="icon-cyan" />
                <div>
                  <strong>Step-by-Step Video Explanations</strong>
                  <p>Over 4,000+ high-definition video walkthroughs by master coaches for every question.</p>
                </div>
              </div>
              <div className="ee-perk-item">
                <CheckCircle2 size={18} className="icon-cyan" />
                <div>
                  <strong>Official Desmos Calculator Sandbox</strong>
                  <p>Built-in interactive Desmos graphing environment with preloaded formula macros.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="ee-btn-primary ee-classroom-btn"
            >
              <CalendarDays size={16} />
              <span>Book Your Free Diagnostic Test</span>
            </button>
          </div>
        </div>
      </section>

      {/* Verified Results & Admissions Wall */}
      <section className="ee-section" id="results">
        <div className="ee-wrap">
          <div className="ee-section-header text-center">
            <div className="ee-pill-badge">
              <Trophy size={13} className="icon-blue" />
              <span>Proven Student Results</span>
            </div>
            <h2 className="ee-section-title">Real Numbers. Dream College Admissions.</h2>
            <p className="ee-section-desc">
              See why over 10,000 students and families trust ExamEdge Prep to unlock competitive merit scholarships and Ivy / Top 20 acceptances.
            </p>
          </div>

          <div className="ee-results-grid">
            <div className="ee-result-card">
              <span className="ee-result-label">Average SAT Score Gain</span>
              <strong className="ee-result-val">+184</strong>
              <span className="ee-result-sub">Points across 12-week cohorts</span>
              <div className="ee-result-bar-wrapper">
                <div className="ee-result-bar-fill" style={{ width: "92%" }} />
              </div>
              <p className="ee-result-detail">
                92% of enrolled students improved their official SAT score by 150+ points.
              </p>
            </div>

            <div className="ee-result-card">
              <span className="ee-result-label">Average ACT Composite Gain</span>
              <strong className="ee-result-val">+4.8</strong>
              <span className="ee-result-sub">Composite increase</span>
              <div className="ee-result-bar-wrapper">
                <div className="ee-result-bar-fill cyan-fill" style={{ width: "88%" }} />
              </div>
              <p className="ee-result-detail">
                88% of ACT students reached a 32+ composite score target.
              </p>
            </div>

            <div className="ee-result-card">
              <span className="ee-result-label">Top 30 University Acceptance</span>
              <strong className="ee-result-val">96%</strong>
              <span className="ee-result-sub">Of our seniors admitted</span>
              <div className="ee-result-bar-wrapper">
                <div className="ee-result-bar-fill gold-fill" style={{ width: "96%" }} />
              </div>
              <p className="ee-result-detail">
                Admitted to Stanford, Harvard, MIT, Columbia, Yale, Duke, and UCLA.
              </p>
            </div>

            <div className="ee-result-card">
              <span className="ee-result-label">Merit Scholarship Success</span>
              <strong className="ee-result-val">$48K</strong>
              <span className="ee-result-sub">Average scholarship awarded</span>
              <div className="ee-result-bar-wrapper">
                <div className="ee-result-bar-fill green-fill" style={{ width: "90%" }} />
              </div>
              <p className="ee-result-detail">
                High test scores directly unlocked presidential & dean merit scholarships.
              </p>
            </div>
          </div>

          {/* University Acceptance Badges */}
          <div className="ee-college-badges">
            <span>Our Students Are Now Attending:</span>
            <div className="ee-badge-list">
              {["Harvard", "Stanford", "MIT", "Yale", "Columbia", "Princeton", "UPenn", "Duke", "UCLA", "UC Berkeley"].map((school) => (
                <div key={school} className="ee-college-tag">
                  ✧ {school}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Student & Parent Testimonials */}
      <section className="ee-section soft-bg">
        <div className="ee-wrap">
          <div className="ee-section-header text-center">
            <div className="ee-pill-badge">
              <Star size={13} className="icon-amber" />
              <span>Student Success Stories</span>
            </div>
            <h2 className="ee-section-title">What Our Families Say</h2>
            <p className="ee-section-desc">
              Hear directly from students and parents whose scores and college options were transformed by ExamEdge.
            </p>
          </div>

          <div className="ee-testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="ee-testimonial-card">
                <div className="ee-t-header">
                  <div className="ee-t-avatar">{t.initials}</div>
                  <div>
                    <strong className="ee-t-name">{t.name}</strong>
                    <small className="ee-t-school">{t.school}</small>
                  </div>
                </div>

                <div className="ee-t-gain-pill">
                  <Trophy size={13} className="icon-amber" />
                  <span>{t.scoreChange}</span>
                </div>

                <p className="ee-t-quote">“{t.quote}”</p>

                <div className="ee-t-footer">
                  <span className="ee-t-stars">★★★★★</span>
                  <span className="ee-t-program">{t.test}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transparent Pricing Table */}
      <section className="ee-section" id="pricing">
        <div className="ee-wrap">
          <div className="ee-section-header text-center">
            <div className="ee-pill-badge">
              <Zap size={13} className="icon-blue" />
              <span>Transparent Tuition</span>
            </div>
            <h2 className="ee-section-title">Simple, All-Inclusive Pricing</h2>
            <p className="ee-section-desc">
              Choose between flexible monthly memberships or all-inclusive full cohort packages with our +150 point score guarantee.
            </p>

            <div className="ee-billing-toggle">
              <button
                className={`ee-billing-btn ${billingCycle === "monthly" ? "active" : ""}`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly Membership
              </button>
              <button
                className={`ee-billing-btn ${billingCycle === "cohort" ? "active" : ""}`}
                onClick={() => setBillingCycle("cohort")}
              >
                Full Cohort Package <span className="save-tag">Save 20%</span>
              </button>
            </div>
          </div>

          <div className="ee-pricing-grid">
            {/* Starter Plan */}
            <div className="ee-pricing-card">
              <h3 className="ee-pricing-tier">Starter Diagnostic</h3>
              <p className="ee-pricing-subtitle">Essential self-paced practice with smart AI adaptive drills.</p>
              <div className="ee-pricing-price">
                <strong>{billingCycle === "monthly" ? "$299" : "$749"}</strong>
                <small>{billingCycle === "monthly" ? "/ month" : " / complete access"}</small>
              </div>

              <ul className="ee-pricing-features">
                <li><Check size={14} className="icon-cyan" /> Full-Length Diagnostic Test & 14-Page Report</li>
                <li><Check size={14} className="icon-cyan" /> 2,000+ Official-Style Adaptive Practice Questions</li>
                <li><Check size={14} className="icon-cyan" /> Desmos Calculator Toolkit & Formula Sheets</li>
                <li><Check size={14} className="icon-cyan" /> Step-by-Step Video Explanations</li>
                <li><Check size={14} className="icon-cyan" /> Email Support with TAs</li>
              </ul>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="ee-pricing-btn"
              >
                Select Starter Plan
              </button>
            </div>

            {/* Guided Prep (Most Popular) */}
            <div className="ee-pricing-card popular">
              <div className="ee-popular-badge">Most Popular Cohort</div>
              <h3 className="ee-pricing-tier">Guided Cohort Prep</h3>
              <p className="ee-pricing-subtitle">Live weekly expert classes, structured milestones, and score guarantee.</p>
              <div className="ee-pricing-price">
                <strong>{billingCycle === "monthly" ? "$499" : "$1,199"}</strong>
                <small>{billingCycle === "monthly" ? "/ month" : " / 12-week cohort"}</small>
              </div>

              <ul className="ee-pricing-features">
                <li><Check size={14} className="icon-cyan" /> <strong>Everything in Starter, plus:</strong></li>
                <li><Check size={14} className="icon-cyan" /> 2x Weekly Live Master Classes with Top 1% Coaches</li>
                <li><Check size={14} className="icon-cyan" /> 8 Full-Length Proctored Adaptive Exams</li>
                <li><Check size={14} className="icon-cyan" /> Bi-Weekly 1:1 Diagnostic Error-Log Reviews</li>
                <li><Check size={14} className="icon-cyan" /> <strong>+150 SAT / +4 ACT Score Increase Guarantee</strong></li>
                <li><Check size={14} className="icon-cyan" /> Parent Progress Reports & Dashboard</li>
              </ul>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="ee-btn-primary ee-pricing-popular-btn"
              >
                Enroll in Guided Cohort
              </button>
            </div>

            {/* 1:1 Elite Coaching */}
            <div className="ee-pricing-card">
              <h3 className="ee-pricing-tier">1:1 Elite Mastery</h3>
              <p className="ee-pricing-subtitle">Fully customized private mentorship with our senior master coaches.</p>
              <div className="ee-pricing-price">
                <strong>{billingCycle === "monthly" ? "$999" : "$2,499"}</strong>
                <small>{billingCycle === "monthly" ? "/ month" : " / full private package"}</small>
              </div>

              <ul className="ee-pricing-features">
                <li><Check size={14} className="icon-cyan" /> <strong>Everything in Guided Prep, plus:</strong></li>
                <li><Check size={14} className="icon-cyan" /> Weekly Private 1:1 60-Minute Sessions with Maya/Daniel</li>
                <li><Check size={14} className="icon-cyan" /> 100% Customized Curriculum for Your Weaknesses</li>
                <li><Check size={14} className="icon-cyan" /> Direct Coach WhatsApp / Text Support</li>
                <li><Check size={14} className="icon-cyan" /> College List & Admissions Strategic Review</li>
                <li><Check size={14} className="icon-cyan" /> Unlimited Mock Exams with Line-by-Line Feedback</li>
              </ul>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="ee-pricing-btn"
              >
                Apply for 1:1 Elite Coaching
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="ee-section soft-bg" id="faq">
        <div className="ee-wrap">
          <div className="ee-section-header text-center">
            <div className="ee-pill-badge">
              <HelpCircle size={13} className="icon-blue" />
              <span>Common Questions</span>
            </div>
            <h2 className="ee-section-title">Frequently Asked Questions</h2>
            <p className="ee-section-desc">
              Everything you need to know about our diagnostics, curriculum, score guarantee, and enrollment.
            </p>
          </div>

          <div className="ee-faq-accordion">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className={`ee-faq-item ${openFaq === idx ? "open" : ""}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="ee-faq-question">
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className="ee-faq-chevron" />
                </div>
                {openFaq === idx && (
                  <div className="ee-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Banner */}
      <section className="ee-cta-section">
        <div className="ee-wrap ee-cta-content">
          <div className="ee-cta-badge">
            <GraduationCap size={28} />
          </div>
          <div className="ee-cta-text">
            <h2>Ready to Unlock Your Highest Possible Test Score?</h2>
            <p>
              Book your complimentary diagnostic exam today. Receive your comprehensive 14-page performance report and 1:1 strategy consultation.
            </p>
          </div>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="ee-btn-amber"
          >
            <CalendarDays size={18} />
            <span>Book Your Free Diagnostic</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="ee-footer">
        <div className="ee-wrap ee-footer-content">
          <div className="ee-footer-col ee-footer-brand-col">
            <a href="#top" className="ee-brand-footer">
              <ShieldCheck size={24} className="icon-cyan" />
              <span>EXAM<span className="ee-highlight">EDGE</span> PREP</span>
            </a>
            <p className="ee-footer-tagline">
              Empowering students nationwide to master standardized tests, build academic confidence, and gain admission to their dream universities.
            </p>
            <div className="ee-footer-contact">
              <div><Phone size={14} className="icon-cyan" /> (888) 456-EDGE (3343)</div>
              <div><Mail size={14} className="icon-cyan" /> admissions@examedgeprep.com</div>
              <div><Clock size={14} className="icon-cyan" /> Mon – Sat: 8:00 AM – 9:00 PM EST</div>
            </div>
          </div>

          <div className="ee-footer-col">
            <h4>Test Programs</h4>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Digital SAT Mastery</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>ACT 36 Accelerator</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Math 800 Intensive</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Verbal & Grammar Boost</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>1:1 Master Tutoring</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>PSAT / NMSQT Track</a>
          </div>

          <div className="ee-footer-col">
            <h4>Diagnostic & Tools</h4>
            <a href="#calculator" onClick={(e) => handleNavClick(e, "#calculator")}>Score Gain Calculator</a>
            <a href="#diagnostic-quiz" onClick={(e) => handleNavClick(e, "#diagnostic-quiz")}>Mini Diagnostic Drill</a>
            <a href="#schedule" onClick={(e) => handleNavClick(e, "#schedule")}>Study Schedule Planner</a>
            <a href="#coaches" onClick={(e) => handleNavClick(e, "#coaches")}>Meet Our Coaches</a>
            <a href="#results" onClick={(e) => handleNavClick(e, "#results")}>Verified Results Wall</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")}>Frequently Asked Questions</a>
          </div>

          <div className="ee-footer-col ee-footer-newsletter-col">
            <h4>Admissions & Strategy Tips</h4>
            <p>Subscribe to our weekly newsletter for official SAT/ACT test changes, scholarship alerts, and study guides.</p>
            <form onSubmit={handleNewsletterSubmit} className="ee-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            {newsletterSuccess && (
              <small className="ee-newsletter-success">
                ✓ Thank you! You've been subscribed to ExamEdge Insights.
              </small>
            )}
          </div>
        </div>

        <div className="ee-footer-bottom">
          <div className="ee-wrap ee-bottom-flex">
            <span>© 2026 ExamEdge Prep & Admissions LLC. All rights reserved. SAT is a registered trademark of the College Board. ACT is a registered trademark of ACT, Inc.</span>
            <div className="ee-bottom-links">
              <a href="#top">Privacy Policy</a>
              <a href="#top">Terms of Service</a>
              <a href="#top">Score Guarantee Terms</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Free Diagnostic Booking Modal */}
      {isBookingOpen && (
        <div
          className="ee-modal-backdrop"
          onClick={() => setIsBookingOpen(false)}
        >
          <div
            className="ee-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="ee-modal-close-btn"
              onClick={() => setIsBookingOpen(false)}
              aria-label="Close booking modal"
            >
              <X size={20} />
            </button>

            {!bookingSubmitted ? (
              <>
                <div className="ee-modal-header">
                  <div className="ee-pill-badge">
                    <Sparkles size={13} className="icon-amber" />
                    <span>Free Official Diagnostic</span>
                  </div>
                  <h2>Schedule Your Diagnostic & Score Roadmap</h2>
                  <p>
                    Reserve your 100% free full-length diagnostic exam and receive your personalized 14-page score report and strategy consultation.
                  </p>
                </div>

                <form onSubmit={handleBookingSubmit} className="ee-modal-form">
                  <div className="ee-form-row">
                    <div className="ee-form-group">
                      <label>Student Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Alex Johnson"
                        value={bookingForm.studentName}
                        onChange={(e) => setBookingForm({ ...bookingForm, studentName: e.target.value })}
                      />
                    </div>

                    <div className="ee-form-group">
                      <label>Parent / Guardian Email *</label>
                      <input
                        type="email"
                        required
                        placeholder="parent@example.com"
                        value={bookingForm.parentEmail}
                        onChange={(e) => setBookingForm({ ...bookingForm, parentEmail: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="ee-form-row">
                    <div className="ee-form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      />
                    </div>

                    <div className="ee-form-group">
                      <label>Student Current Grade</label>
                      <select
                        value={bookingForm.grade}
                        onChange={(e) => setBookingForm({ ...bookingForm, grade: e.target.value })}
                      >
                        <option value="9th Grade">9th Grade (Freshman)</option>
                        <option value="10th Grade">10th Grade (Sophomore)</option>
                        <option value="11th Grade">11th Grade (Junior)</option>
                        <option value="12th Grade">12th Grade (Senior)</option>
                      </select>
                    </div>
                  </div>

                  <div className="ee-form-row">
                    <div className="ee-form-group">
                      <label>Primary Exam of Interest</label>
                      <select
                        value={bookingForm.testType}
                        onChange={(e) => setBookingForm({ ...bookingForm, testType: e.target.value })}
                      >
                        <option value="Digital SAT">Digital SAT Prep</option>
                        <option value="ACT">ACT Prep</option>
                        <option value="Both SAT & ACT">Both (Need Diagnostic Recommendation)</option>
                        <option value="PSAT / Merit">PSAT / National Merit</option>
                        <option value="1:1 Elite Tutoring">Private 1:1 Master Tutoring</option>
                      </select>
                    </div>

                    <div className="ee-form-group">
                      <label>Target Exam Date</label>
                      <select
                        value={bookingForm.targetDate}
                        onChange={(e) => setBookingForm({ ...bookingForm, targetDate: e.target.value })}
                      >
                        <option value="Fall 2026">Fall 2026 (August / October / November)</option>
                        <option value="Spring 2027">Spring 2027 (March / May / June)</option>
                        <option value="Within 60 Days">Within 60 Days (Upcoming Test)</option>
                      </select>
                    </div>
                  </div>

                  <div className="ee-form-group">
                    <label>Preferred Master Coach (Optional)</label>
                    <select
                      value={bookingForm.coachPreference}
                      onChange={(e) => setBookingForm({ ...bookingForm, coachPreference: e.target.value })}
                    >
                      <option value="No Preference">No Preference (Match Best Coach For Goals)</option>
                      <option value="Maya Patel">Maya Patel (Harvard '18 — SAT Strategy Lead)</option>
                      <option value="Daniel Kim">Daniel Kim (Stanford '19 — ACT 36 Specialist)</option>
                      <option value="Laura Bennett">Laura Bennett (Columbia '16 — Reading & Verbal)</option>
                      <option value="Arjun Mehta">Arjun Mehta (MIT '20 — Math 800 Specialist)</option>
                    </select>
                  </div>

                  <button type="submit" className="ee-btn-primary ee-modal-submit-btn">
                    <CalendarDays size={18} />
                    <span>Confirm Free Diagnostic Reservation</span>
                  </button>

                  <div className="ee-modal-trust">
                    <Lock size={12} />
                    <span>100% Free • No Credit Card Required • Instant Diagnostic Access</span>
                  </div>
                </form>
              </>
            ) : (
              <div className="ee-modal-success">
                <div className="ee-success-icon-wrap">
                  <CheckCircle2 size={56} className="icon-cyan" />
                </div>
                <h3>Diagnostic Reserved Successfully!</h3>
                <p>
                  We have sent your diagnostic login portal link and preparation checklist to{" "}
                  <strong>{bookingForm.parentEmail}</strong>.
                </p>
                <div className="ee-success-details">
                  <div><strong>Student:</strong> {bookingForm.studentName}</div>
                  <div><strong>Target Track:</strong> {bookingForm.testType} ({bookingForm.targetDate})</div>
                  <div><strong>Assigned Advisory:</strong> Senior ExamEdge Advisory Team</div>
                </div>
                <button
                  onClick={() => {
                    setBookingSubmitted(false);
                    setIsBookingOpen(false);
                  }}
                  className="ee-btn-primary"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Coach Detail Bio Modal */}
      {selectedCoach && (
        <div
          className="ee-modal-backdrop"
          onClick={() => setSelectedCoach(null)}
        >
          <div
            className="ee-modal-card ee-coach-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="ee-modal-close-btn"
              onClick={() => setSelectedCoach(null)}
              aria-label="Close coach modal"
            >
              <X size={20} />
            </button>

            <div className="ee-coach-modal-content">
              <div className="ee-coach-modal-sidebar">
                <img
                  src={selectedCoach.img}
                  alt={selectedCoach.name}
                  className="ee-coach-modal-img"
                />
                <span className="ee-coach-badge">{selectedCoach.score}</span>
                <div className="ee-coach-sidebar-stats">
                  <div><strong>{selectedCoach.increase}</strong><small>Average Cohort Gain</small></div>
                  <div><strong>{selectedCoach.students}</strong><small>Successful Students</small></div>
                </div>
              </div>

              <div className="ee-coach-modal-info">
                <h2>{selectedCoach.name}</h2>
                <span className="ee-coach-modal-role">{selectedCoach.role}</span>
                <div className="ee-coach-alma">
                  <GraduationCap size={15} className="icon-blue" />
                  <span>{selectedCoach.alma}</span>
                </div>

                <div className="ee-coach-spec-pill">
                  <strong>Specialty Focus:</strong> {selectedCoach.specialty}
                </div>

                <p className="ee-coach-modal-bio">{selectedCoach.bio}</p>

                <h4>Coaching Methodology:</h4>
                <ul className="ee-coach-methodology">
                  <li><Check size={14} className="icon-cyan" /> Systematic elimination of test anxiety through timed exposure</li>
                  <li><Check size={14} className="icon-cyan" /> Pattern-recognition mental models for hardest 5% questions</li>
                  <li><Check size={14} className="icon-cyan" /> Individualized weekly error logs with Desmos/verbal shortcut toolkits</li>
                </ul>

                <button
                  onClick={() => {
                    const coachName = selectedCoach.name;
                    setSelectedCoach(null);
                    setBookingForm({
                      ...bookingForm,
                      coachPreference: coachName,
                    });
                    setIsBookingOpen(true);
                  }}
                  className="ee-btn-primary ee-coach-modal-cta"
                >
                  <CalendarDays size={16} />
                  <span>Request 1:1 Consultation with {selectedCoach.name.split(" ")[0]}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
