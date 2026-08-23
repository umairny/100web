import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Calendar,
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Compass,
  FileCheck2,
  Calculator,
  Building2,
  Sparkles,
  Quote,
  Clock,
  ShieldCheck,
} from "lucide-react";
import "./BrightBridgeAcademy.css";

// WebP Image Imports
import heroImage from "../../assets/optimized/education/brightbridge/hero.webp";
import campusImage from "../../assets/optimized/education/brightbridge/brightbridge-campus.webp";
import studentsImage from "../../assets/optimized/education/brightbridge/brightbridge-students.webp";
import admissionsImage from "../../assets/optimized/education/brightbridge/brightbridge-admissions.webp";
import facultyImage from "../../assets/optimized/education/brightbridge/brightbridge-faculty.webp";
import artsImage from "../../assets/optimized/education/brightbridge/arts.webp";

const navItems = [
  { id: "bb-about", label: "Academy Overview" },
  { id: "bb-divisions", label: "Divisions & Curriculum" },
  { id: "bb-admissions", label: "Admissions Timeline" },
  { id: "bb-calculator", label: "Tuition Estimator" },
  { id: "bb-faculty", label: "Faculty Directory" },
  { id: "bb-faq", label: "FAQ" },
];

const divisionTabs = [
  {
    id: "lower",
    tabLabel: "Lower School (PK–5)",
    title: "Lower School & Primary Foundation",
    tagline: "Cultivating curiosity, foundational literacy, character, and mathematical reasoning.",
    img: studentsImage,
    grades: "PK–5",
    ratio: "7:1 Student-Teacher Ratio",
    bullet1: "Phonics, inquiry-based reading, and creative storytelling",
    bullet2: "Singapore Math methods and hands-on science discovery labs",
    bullet3: "Character education, mindfulness, and collaborative play",
  },
  {
    id: "middle",
    tabLabel: "Middle School (6–8)",
    title: "Middle School Scholars Program",
    tagline: "Bridging foundational knowledge with independent critical thinking and research.",
    img: campusImage,
    grades: "Grades 6–8",
    ratio: "8:1 Student-Teacher Ratio",
    bullet1: "Interdisciplinary STEM humanities and analytical essay writing",
    bullet2: "Robotics, competitive math team, and debate society",
    bullet3: "Advisory program supporting adolescent wellness and leadership",
  },
  {
    id: "upper",
    tabLabel: "Upper Prep & AP (9–12)",
    title: "Upper School & College Prep Honors",
    tagline: "Rigorous academic preparation featuring 22 AP courses and 1-on-1 college counseling.",
    img: admissionsImage,
    grades: "Grades 9–12",
    ratio: "8:1 Student-Teacher Ratio",
    bullet1: "22 Advanced Placement (AP) courses & post-AP capstone seminars",
    bullet2: "100% University acceptance rate to top global four-year institutions",
    bullet3: "Individualized 4-year college guidance starting in 9th grade",
  },
  {
    id: "stem-arts",
    tabLabel: "STEM & Arts Conservatory",
    title: "STEM Innovation & Performing Arts Conservatory",
    tagline: "State-of-the-art digital media suites, orchestral halls, and biotechnology labs.",
    img: artsImage,
    grades: "All Divisions",
    ratio: "Specialized Master Faculty",
    bullet1: "Gene editing, robotics, and astrophysics research labs",
    bullet2: "Full orchestral hall, theater blackbox, and digital pottery studio",
    bullet3: "Annual global arts exhibition and STEM symposium presentation",
  },
];

const admissionsTimeline = [
  { step: "01", date: "SEPTEMBER – NOVEMBER", title: "Inquiry & Digital Prospectus", desc: "Request our digital viewbook and curriculum guide to explore grade divisions and academy values." },
  { step: "02", date: "OCTOBER – DECEMBER", title: "Guided Campus Tour & Open House", desc: "Experience our classrooms, laboratories, and arts center during an Admissions Open House." },
  { step: "03", date: "BY JANUARY 15TH", title: "Application & Transcript Records", desc: "Submit student academic transcript records, teacher evaluation forms, and student family essay." },
  { step: "04", date: "JANUARY", title: "Student Shadow Visit Day", desc: "Applicants spend a full shadow day attending classes alongside a BrightBridge student ambassador." },
  { step: "05", date: "FEBRUARY", title: "Family Interview", desc: "Meet with our Admissions Committee to align educational aspirations and extracurricular goals." },
  { step: "06", date: "MARCH 10TH", title: "Decision & Financial Grant Award", desc: "Notification decisions released alongside merit scholarship awards and financial aid packages." },
];

const facultyMembers = [
  {
    name: "Dr. Laura Mitchell",
    role: "Head of School",
    degree: "Ph.D. Educational Leadership, Columbia University",
    bio: "Over 20 years leading premier independent college preparatory academies.",
  },
  {
    name: "James Parker",
    role: "Chair of Mathematics & Computer Science",
    degree: "M.S. Applied Mathematics, MIT",
    bio: "Directs our advanced calculus and competitive algorithm research teams.",
  },
  {
    name: "Emily Chen",
    role: "Dean of Science & Innovation",
    degree: "M.S. Molecular Genetics, Stanford University",
    bio: "Guides student research projects presenting at national STEM symposiums.",
  },
];

const faqs = [
  {
    q: "What makes BrightBridge Academy's curriculum unique?",
    a: "We blend classical academic rigor with modern STEM innovation, maintaining an 8:1 student-to-faculty ratio and 22 Advanced Placement courses.",
  },
  {
    q: "How does the financial aid process work?",
    a: "We are committed to socio-economic diversity. Over 28% of families receive need-based tuition assistance evaluated confidentially.",
  },
  {
    q: "What is the college placement track record?",
    a: "100% of BrightBridge graduates are accepted into four-year universities, with 88% matriculating into Tier-1 research universities and liberal arts colleges.",
  },
  {
    q: "How can parents schedule a campus tour?",
    a: "You can book a private campus tour directly through our website or contact our Admissions Office at (800) 555-BRIGHT.",
  },
];

export function BrightBridgeAcademy() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("bb-about");
  const [activeTab, setActiveTab] = useState("lower");
  const [incomeRange, setIncomeRange] = useState<number>(120000);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [tourBooked, setTourBooked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const offset = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= offset) {
          setActiveNav(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveNav(id);
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  // Tuition Calculation logic
  const calculateEstimatedTuition = () => {
    const baseTuition = 28500;
    if (incomeRange < 80000) return baseTuition * 0.25; // 75% aid
    if (incomeRange < 130000) return baseTuition * 0.5;  // 50% aid
    if (incomeRange < 180000) return baseTuition * 0.75; // 25% aid
    return baseTuition; // Standard
  };

  const selectedDivision = divisionTabs.find((d) => d.id === activeTab) || divisionTabs[0];

  return (
    <div className="brightbridge-site" id="bb-top">
      {/* 1. Classic Editorial Header */}
      <header className={`bb-editorial-header ${scrolled ? "scrolled" : ""}`}>
        <div className="bb-editorial-wrap bb-header-row">
          <a href="#bb-top" className="bb-crest-brand" onClick={(e) => scrollTo(e, "bb-top")}>
            <div className="bb-monogram-shield">BB</div>
            <h1 className="bb-brand-name">
              BRIGHTBRIDGE
              <span>ACADEMY EST. 1988</span>
            </h1>
          </a>

          {/* Desktop Links */}
          <nav className="bb-nav-menu">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`bb-nav-link ${activeNav === item.id ? "active" : ""}`}
                onClick={(e) => scrollTo(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#bb-admissions"
              className="bb-tour-cta"
              onClick={(e) => scrollTo(e, "bb-admissions")}
            >
              Book Campus Tour
              <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              className="bb-drawer-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Portal */}
      {menuOpen && typeof document !== "undefined" && createPortal(
        <div className="bb-portal-drawer-root">
          <div
            className="bb-portal-backdrop"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="bb-portal-drawer" role="dialog" aria-modal="true" aria-label="BrightBridge Navigation Menu">
            <div className="bb-drawer-head">
              <div className="flex items-center gap-2">
                <div className="bb-monogram-shield !w-7 !h-8 text-xs">BB</div>
                <span className="font-serif font-bold text-white text-base">BRIGHTBRIDGE</span>
              </div>
              <button
                type="button"
                className="p-2 text-slate-400 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="bb-drawer-nav">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`bb-drawer-item ${activeNav === item.id ? "active" : ""}`}
                  onClick={(e) => scrollTo(e, item.id)}
                >
                  {item.label}
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* 2. Hero Magazine Cover Section */}
      <section className="bb-hero-editorial" id="bb-about">
        <div className="bb-editorial-wrap">
          <div className="bb-hero-magazine-grid">
            <div>
              <div className="bb-editorial-kicker">
                <Sparkles className="w-4 h-4" />
                INDEPENDENT COLLEGE PREPARATORY (PRE-K – 12TH)
              </div>

              <h2 className="bb-editorial-title">
                Inspiring Intellectual <em>Curiosity & Character</em>.
              </h2>

              <p className="bb-editorial-p">
                At BrightBridge Academy, we prepare young minds for top global universities through rigorous classical scholarship, advanced STEM labs, and personalized mentorship.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#bb-admissions"
                  className="bg-[#c59b27] hover:bg-[#b48732] text-[#0b2b22] font-extrabold text-sm uppercase tracking-wider px-8 py-4 rounded shadow-xl transition-all flex items-center gap-2"
                  onClick={(e) => scrollTo(e, "bb-admissions")}
                >
                  Schedule Campus Visit
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#bb-calculator"
                  className="bg-transparent hover:bg-white/10 text-white border border-amber-400/40 font-bold text-sm uppercase tracking-wider px-7 py-4 rounded transition-colors flex items-center gap-2"
                  onClick={(e) => scrollTo(e, "bb-calculator")}
                >
                  <Calculator className="w-4 h-4 text-[#c59b27]" />
                  Tuition Estimator
                </a>
              </div>
            </div>

            {/* Magazine Cover Frame */}
            <div className="bb-magazine-frame">
              <span className="bb-magazine-badge">ACADEMY JOURNAL 2026</span>
              <img src={heroImage} alt="BrightBridge Academy Historic Campus" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. Statistical HUD Band */}
      <section className="bb-editorial-stats-band">
        <div className="bb-editorial-wrap">
          <div className="bb-stats-flex">
            <div className="bb-stat-item">
              <span className="bb-stat-number">100%</span>
              <span className="bb-stat-label">College Acceptance</span>
            </div>

            <div className="bb-stat-item">
              <span className="bb-stat-number">8 : 1</span>
              <span className="bb-stat-label">Student-Faculty Ratio</span>
            </div>

            <div className="bb-stat-item">
              <span className="bb-stat-number">22 AP</span>
              <span className="bb-stat-label">Advanced Placement Courses</span>
            </div>

            <div className="bb-stat-item">
              <span className="bb-stat-number">28%</span>
              <span className="bb-stat-label">Receive Financial Aid</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Academic Divisions Tabs */}
      <section id="bb-divisions" className="bb-section-padded bg-[#f5f2eb]">
        <div className="bb-editorial-wrap">
          <div className="bb-editorial-heading">
            <span className="bb-editorial-sub">ACADEMIC DIVISIONS</span>
            <h2 className="bb-editorial-main-title">Pathways to University Excellence</h2>
          </div>

          {/* Division Selector Tabs */}
          <div className="bb-divisions-tabs">
            {divisionTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`bb-tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.tabLabel}
              </button>
            ))}
          </div>

          {/* Tab Content Display */}
          <div className="bb-division-feature-card">
            <div className="bb-division-card-body">
              <span className="text-xs font-mono font-bold text-[#c59b27] uppercase tracking-wider mb-2">
                {selectedDivision.grades} • {selectedDivision.ratio}
              </span>
              <h3 className="font-serif text-3xl font-extrabold text-[#121b18] mb-3">
                {selectedDivision.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                {selectedDivision.tagline}
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#c59b27]" />
                  {selectedDivision.bullet1}
                </li>
                <li className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#c59b27]" />
                  {selectedDivision.bullet2}
                </li>
                <li className="flex items-center gap-3 text-xs font-bold text-slate-800">
                  <CheckCircle2 className="w-4 h-4 text-[#c59b27]" />
                  {selectedDivision.bullet3}
                </li>
              </ul>

              <a
                href="#bb-admissions"
                className="inline-flex items-center gap-2 text-xs font-extrabold text-[#0b2b22] uppercase tracking-wider hover:text-[#c59b27]"
                onClick={(e) => scrollTo(e, "bb-admissions")}
              >
                Inquire About {selectedDivision.tabLabel}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="bb-division-card-img">
              <img src={selectedDivision.img} alt={selectedDivision.title} />
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Tuition & Financial Aid Section */}
      <section id="bb-calculator" className="bb-section-padded bg-white">
        <div className="bb-editorial-wrap">
          <div className="bb-editorial-heading">
            <span className="bb-editorial-sub">TUITION & FINANCIAL AID</span>
            <h2 className="bb-editorial-main-title">Transparent Tuition & Financial Aid</h2>
          </div>

          {/* Division Tuition Tiers Grid */}
          <div className="bb-tuition-tiers-grid">
            <div className="bb-tuition-tier-card">
              <span className="text-xs font-mono font-bold text-[#c59b27] uppercase tracking-wider mb-2">GRADES PK – 5</span>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">Lower School</h3>
              <p className="text-xs text-slate-500 mb-6">Primary foundation and inquiry labs.</p>

              <div className="font-serif text-3xl font-extrabold text-[#0b2b22] mb-1">$22,500 <span className="text-xs font-mono text-slate-500">/ academic yr</span></div>
              <p className="text-xs text-emerald-700 font-mono mb-6">Available 10-month payment plan: $2,250/mo</p>

              <ul className="space-y-3 text-xs text-slate-700 mb-8 flex-grow">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c59b27]" /> 7:1 Student to Teacher Ratio</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c59b27]" /> Textbooks & Learning Materials</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c59b27]" /> Science Discovery & Robotics Labs</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c59b27]" /> Morning & Afternoon After-care Option</li>
              </ul>

              <a
                href="#bb-admissions"
                className="w-full text-center bg-[#0b2b22] text-white font-bold text-xs uppercase tracking-wider py-3 rounded hover:bg-[#071f18]"
                onClick={(e) => scrollTo(e, "bb-admissions")}
              >
                Inquire for PK–5
              </a>
            </div>

            <div className="bb-tuition-tier-card featured">
              <span className="bb-featured-tag">MOST ENROLLED</span>
              <span className="text-xs font-mono font-bold text-[#c59b27] uppercase tracking-wider mb-2">GRADES 6 – 8</span>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">Middle School</h3>
              <p className="text-xs text-slate-500 mb-6">Independent research & STEM logic labs.</p>

              <div className="font-serif text-3xl font-extrabold text-[#c59b27] mb-1">$25,800 <span className="text-xs font-mono text-slate-500">/ academic yr</span></div>
              <p className="text-xs text-emerald-700 font-mono mb-6">Available 10-month payment plan: $2,580/mo</p>

              <ul className="space-y-3 text-xs text-slate-700 mb-8 flex-grow">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c59b27]" /> 8:1 Student to Teacher Ratio</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c59b27]" /> Competitive Debate & Math Olympiad</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c59b27]" /> Athletic Center & Performing Arts Access</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c59b27]" /> Personal 1-on-1 Academic Advisor</li>
              </ul>

              <a
                href="#bb-admissions"
                className="w-full text-center bg-[#c59b27] text-[#0b2b22] font-extrabold text-xs uppercase tracking-wider py-3 rounded hover:bg-[#b48732]"
                onClick={(e) => scrollTo(e, "bb-admissions")}
              >
                Inquire for Grades 6–8
              </a>
            </div>

            <div className="bb-tuition-tier-card">
              <span className="text-xs font-mono font-bold text-[#c59b27] uppercase tracking-wider mb-2">GRADES 9 – 12</span>
              <h3 className="font-serif text-2xl font-bold text-slate-900 mb-1">Upper Prep & AP</h3>
              <p className="text-xs text-slate-500 mb-6">22 AP Courses & College Counseling.</p>

              <div className="font-serif text-3xl font-extrabold text-[#0b2b22] mb-1">$28,500 <span className="text-xs font-mono text-slate-500">/ academic yr</span></div>
              <p className="text-xs text-emerald-700 font-mono mb-6">Available 10-month payment plan: $2,850/mo</p>

              <ul className="space-y-3 text-xs text-slate-700 mb-8 flex-grow">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c59b27]" /> 22 Advanced Placement (AP) Courses</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c59b27]" /> 100% University Placement Track</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c59b27]" /> Dedicated 4-Year College Counselor</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-[#c59b27]" /> Post-AP Capstone Research Seminars</li>
              </ul>

              <a
                href="#bb-admissions"
                className="w-full text-center bg-[#0b2b22] text-white font-bold text-xs uppercase tracking-wider py-3 rounded hover:bg-[#071f18]"
                onClick={(e) => scrollTo(e, "bb-admissions")}
              >
                Inquire for Grades 9–12
              </a>
            </div>
          </div>

          {/* Calculator Box */}
          <div className="bb-calculator-box">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-xs font-mono text-[#c59b27] uppercase tracking-widest font-bold block mb-2">
                  CONFIDENTIAL FINANCIAL GRANT PREVIEW
                </span>
                <h3 className="font-serif text-2xl font-bold text-white mb-3">Interactive Financial Aid Estimator</h3>
                <p className="text-slate-300 text-xs leading-relaxed mb-6">
                  BrightBridge is committed to socio-economic accessibility. Adjust your family's household annual income below to calculate your estimated financial aid package.
                </p>

                <label className="block text-xs font-mono font-bold text-[#c59b27] uppercase tracking-wider mb-2">
                  Household Annual Income: ${incomeRange.toLocaleString()}
                </label>

                <input
                  type="range"
                  min="40000"
                  max="250000"
                  step="10000"
                  value={incomeRange}
                  onChange={(e) => setIncomeRange(Number(e.target.value))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#c59b27] mb-6"
                />

                <div className="flex items-center gap-3 p-3 bg-[#051410] border border-slate-700 rounded text-xs text-slate-300">
                  <ShieldCheck className="w-5 h-5 text-[#c59b27] flex-shrink-0" />
                  <span><strong>28% of enrolled families</strong> receive need-based grant awards ranging from $5,000 to $21,000.</span>
                </div>
              </div>

              <div className="bg-[#051410] border border-[#c59b27]/40 p-8 rounded text-center">
                <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block mb-2">
                  ESTIMATED NET TUITION AFTER GRANT
                </span>
                <div className="font-serif text-4xl font-extrabold text-[#c59b27] mb-2">
                  ${calculateEstimatedTuition().toLocaleString()} <span className="text-xs font-mono text-slate-400">/ academic yr</span>
                </div>
                <p className="text-xs text-emerald-400 font-mono mb-6">
                  Estimated Grant Reduction: ${(28500 - calculateEstimatedTuition()).toLocaleString()} / yr
                </p>

                <a
                  href="#bb-admissions"
                  className="inline-block w-full bg-[#c59b27] text-[#0b2b22] font-extrabold text-xs uppercase tracking-wider py-3.5 rounded hover:bg-[#b48732]"
                  onClick={(e) => scrollTo(e, "bb-admissions")}
                >
                  Submit Financial Aid Application
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Overhauled Admissions Timeline Section */}
      <section id="bb-admissions" className="bb-section-padded bg-[#0b2b22] text-white">
        <div className="bb-editorial-wrap">
          <div className="bb-editorial-heading">
            <span className="bb-editorial-sub">ADMISSIONS TIMELINE</span>
            <h2 className="bb-editorial-main-title text-white" style={{ color: "#ffffff" }}>
              Six Steps to Joining BrightBridge
            </h2>
          </div>

          <div className="bb-timeline-grid mb-16">
            {/* Connected Vertical Stepper */}
            <div className="bb-timeline-stepper">
              {admissionsTimeline.map((item) => (
                <div key={item.step} className="bb-timeline-node">
                  <div className="bb-node-num">{item.step}</div>
                  <div className="bb-node-content">
                    <span className="bb-node-date">{item.date}</span>
                    <h3 className="bb-node-title">{item.title}</h3>
                    <p className="bb-node-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Side-by-Side Campus Tour Card */}
            <div className="bg-[#051410] border border-[#c59b27]/40 p-8 rounded sticky top-24">
              <div className="mb-6 rounded overflow-hidden border border-slate-700 h-48">
                <img src={admissionsImage} alt="Guided Campus Tour" className="w-full h-full object-cover" />
              </div>

              <span className="text-xs font-mono text-[#c59b27] uppercase tracking-wider font-bold block mb-2">
                PERSONAL CAMPUS EXPERIENCE
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mb-2">Book Your Campus Tour</h3>
              <p className="text-slate-300 text-xs leading-relaxed mb-6">
                Guided campus tours run every Tuesday and Thursday morning. Tour our STEM labs, libraries, and arts center with an Admissions Ambassador.
              </p>

              {!tourBooked ? (
                <button
                  type="button"
                  className="w-full bg-[#c59b27] hover:bg-[#b48732] text-[#0b2b22] font-extrabold text-xs uppercase tracking-widest py-4 rounded transition-all"
                  onClick={() => setTourBooked(true)}
                >
                  Schedule Tour Appointment
                </button>
              ) : (
                <div className="bg-emerald-950/90 border border-emerald-500/40 p-4 rounded text-emerald-300 font-bold text-xs text-center">
                  ✓ Tour Appointment Requested! Our Admissions Ambassador will call within 24 hours.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Faculty Directory */}
      <section id="bb-faculty" className="bb-section-padded bg-[#f5f2eb]">
        <div className="bb-editorial-wrap">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="bb-editorial-sub">FACULTY DIRECTORY</span>
              <h2 className="bb-editorial-main-title mb-6">
                Scholar-Mentors Committed to Excellence
              </h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-8">
                Over 78% of BrightBridge faculty hold advanced master’s or doctoral degrees, bringing university-level scholarship into small-group classrooms.
              </p>

              <div className="space-y-4">
                {facultyMembers.map((member, idx) => (
                  <div key={idx} className="p-5 bg-white border border-slate-200 rounded">
                    <h4 className="font-serif font-bold text-slate-900 text-base">{member.name}</h4>
                    <p className="text-xs font-mono text-[#c59b27] font-bold mb-1">{member.role}</p>
                    <p className="text-xs text-slate-500 italic mb-1">{member.degree}</p>
                    <p className="text-xs text-slate-600">{member.bio}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bb-magazine-frame">
              <img src={facultyImage} alt="Head of School Dr. Laura Mitchell and Faculty Seminar" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section id="bb-faq" className="bb-section-padded bg-white">
        <div className="bb-editorial-wrap max-w-3xl">
          <div className="bb-editorial-heading">
            <span className="bb-editorial-sub">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="bb-editorial-main-title">Admissions & Academy Information</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded overflow-hidden">
                <button
                  type="button"
                  className="w-full p-5 text-left font-serif font-bold text-slate-900 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openFaqIndex === idx ? "rotate-180" : ""}`} />
                </button>

                {openFaqIndex === idx && (
                  <div className="p-5 text-slate-600 text-sm bg-white border-t border-slate-200 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Classical Footer */}
      <footer className="bg-[#051410] text-slate-300 py-16 border-t border-amber-500/30">
        <div className="bb-editorial-wrap">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bb-monogram-shield !w-7 !h-8 text-xs">BB</div>
                <span className="font-serif font-bold text-white text-lg">BRIGHTBRIDGE</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                An independent college preparatory academy for Pre-K through 12th Grade students.
              </p>
            </div>

            <div>
              <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4">Divisions</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#bb-divisions" onClick={(e) => scrollTo(e, "bb-divisions")}>Lower School (PK–5)</a></li>
                <li><a href="#bb-divisions" onClick={(e) => scrollTo(e, "bb-divisions")}>Middle School (6–8)</a></li>
                <li><a href="#bb-divisions" onClick={(e) => scrollTo(e, "bb-divisions")}>Upper Prep (9–12)</a></li>
                <li><a href="#bb-divisions" onClick={(e) => scrollTo(e, "bb-divisions")}>STEM & Arts Conservatory</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4">Admissions</h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#bb-admissions" onClick={(e) => scrollTo(e, "bb-admissions")}>Inquire & Tour</a></li>
                <li><a href="#bb-calculator" onClick={(e) => scrollTo(e, "bb-calculator")}>Tuition Estimator</a></li>
                <li><a href="#bb-faculty" onClick={(e) => scrollTo(e, "bb-faculty")}>Faculty Directory</a></li>
                <li><a href="#bb-faq" onClick={(e) => scrollTo(e, "bb-faq")}>Admissions FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-serif font-bold text-white text-sm uppercase tracking-wider mb-4">Admissions Office</h4>
              <p className="text-xs text-slate-300 mb-1">(800) 555-BRIGHT</p>
              <p className="text-xs text-slate-400 mb-4">admissions@brightbridge.edu</p>
              <a
                href="#bb-admissions"
                className="inline-flex items-center gap-2 bg-[#c59b27] text-[#0b2b22] font-extrabold px-4 py-2.5 rounded text-xs uppercase tracking-wider hover:bg-[#b48732]"
                onClick={(e) => scrollTo(e, "bb-admissions")}
              >
                Book Campus Visit
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} BrightBridge Academy. All rights reserved. Classical College Preparatory Education.
          </div>
        </div>
      </footer>
    </div>
  );
}
