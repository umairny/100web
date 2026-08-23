import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  Clock,
  Calendar,
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  Sparkles,
  ChevronDown,
  Briefcase,
  TrendingUp,
  MessageSquare,
  Play,
  FileCheck,
  Zap,
} from "lucide-react";
import "./LearnSphereAcademy.css";

// WebP Image Imports
import heroImage from "../../assets/optimized/education/learnsphere/hero.webp";
import uiuxImage from "../../assets/optimized/education/learnsphere/learnsphere-uiux.webp";
import frontendImage from "../../assets/optimized/education/learnsphere/learnsphere-frontend.webp";
import analyticsImage from "../../assets/optimized/education/learnsphere/learnsphere-analytics.webp";
import productImage from "../../assets/optimized/education/learnsphere/learnsphere-product.webp";
import mentorImage from "../../assets/optimized/education/learnsphere/mentor.webp";

const navItems = [
  { id: "ls-programs", label: "Featured Programs" },
  { id: "ls-curriculum", label: "Curriculum Path" },
  { id: "ls-mentors", label: "Mentors & Office Hours" },
  { id: "ls-outcomes", label: "Career Outcomes" },
  { id: "ls-pricing", label: "Tuition & Plans" },
  { id: "ls-faq", label: "FAQ" },
];

const featuredPrograms = [
  {
    id: "uiux",
    title: "UI/UX & Product Design",
    desc: "Master user research, Figma design systems, interactive prototyping, and usability testing.",
    img: uiuxImage,
    duration: "12 Weeks",
    level: "Beginner to Pro",
    nextCohort: "Jun 10, 2024",
    tag: "MOST POPULAR",
  },
  {
    id: "frontend",
    title: "Front-End Web Development",
    desc: "Build responsive modern web applications using HTML5, CSS3, JavaScript, and React.",
    img: frontendImage,
    duration: "14 Weeks",
    level: "Beginner Friendly",
    nextCohort: "Jun 17, 2024",
    tag: "HIGH DEMAND",
  },
  {
    id: "analytics",
    title: "Data Analytics & Python",
    desc: "Turn complex data into actionable business insights with SQL, Python, and Tableau.",
    img: analyticsImage,
    duration: "12 Weeks",
    level: "Intermediate",
    nextCohort: "Jun 24, 2024",
    tag: "BUSINESS CAREER",
  },
  {
    id: "product",
    title: "Product Management & Strategy",
    desc: "Lead cross-functional engineering teams from product discovery to roadmap delivery.",
    img: productImage,
    duration: "10 Weeks",
    level: "Intermediate",
    nextCohort: "Jul 1, 2024",
    tag: "EXECUTIVE TRACK",
  },
];

const curriculumSteps = [
  {
    step: "01",
    title: "Foundations & Core Tools",
    text: "Build a strong base with core methodologies, industry tools, and foundational concepts.",
  },
  {
    step: "02",
    title: "Guided Practical Labs",
    text: "Apply new concepts in weekly hands-on labs with structured exercises and mentor reviews.",
  },
  {
    step: "03",
    title: "Capstone Portfolio Build",
    text: "Design and build an end-to-end real project for a real client or simulated startup brief.",
  },
  {
    step: "04",
    title: "Career Prep & Graduation",
    text: "Resume review, portfolio presentation polish, mock interviews, and alumni network intro.",
  },
];

const mentorsList = [
  {
    name: "Sarah Chen",
    role: "Senior Lead Product Designer",
    company: "Meta",
    bio: "10+ years shaping global consumer apps used by millions daily.",
  },
  {
    name: "Marcus Vance",
    role: "Staff Software Engineer",
    company: "Stripe",
    bio: "Passionate about clean architecture, React performance, and frontend tooling.",
  },
  {
    name: "Elena Rostova",
    role: "Head of Analytics & Data",
    company: "Snowflake",
    bio: "Specialist in machine learning pipelines, SQL optimization, and business intelligence.",
  },
];

const faqs = [
  {
    q: "Who are LearnSphere Academy cohorts designed for?",
    a: "Our programs are built for motivated beginners, career switchers, and upskilling professionals looking for structured, mentor-guided education.",
  },
  {
    q: "How much time should I dedicate each week?",
    a: "Students typically spend 8-12 hours per week attending live workshops, completing project labs, and joining mentor office hours.",
  },
  {
    q: "Do I get a verified certificate upon completion?",
    a: "Yes! All graduates receive a shareable digital certificate and a verified portfolio reviewed by lead industry mentors.",
  },
  {
    q: "Are flexible payment plans or installments available?",
    a: "Yes, we offer interest-free monthly installment plans as well as early-bird cohort discounts.",
  },
];

export function LearnSphereAcademy() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("ls-programs");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [selectedTier, setSelectedTier] = useState("guided");
  const [applicationSubmitted, setApplicationSubmitted] = useState(false);

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

  return (
    <div className="learnsphere-site" id="ls-top">
      {/* 1. Simple Classic Header */}
      <header className={`ls-header ${scrolled ? "scrolled" : ""}`}>
        <div className="ls-wrap ls-header-inner">
          <a href="#ls-top" className="ls-brand-link" onClick={(e) => scrollTo(e, "ls-top")}>
            <div className="ls-brand-icon-box">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <h1 className="ls-brand-title">
              LearnSphere <span>Academy</span>
            </h1>
          </a>

          {/* Desktop Nav Links */}
          <nav className="ls-nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`ls-nav-item ${activeNav === item.id ? "active" : ""}`}
                onClick={(e) => scrollTo(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="ls-header-actions">
            <a
              href="#ls-pricing"
              className="ls-cta-btn"
              onClick={(e) => scrollTo(e, "ls-pricing")}
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              className="ls-menu-toggle"
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
        <div className="ls-drawer-root">
          <div
            className="ls-drawer-backdrop"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="ls-drawer-menu" role="dialog" aria-modal="true" aria-label="LearnSphere Navigation Menu">
            <div className="ls-drawer-header">
              <div className="flex items-center gap-2">
                <div className="ls-brand-icon-box !w-8 !h-8">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <span className="font-extrabold text-slate-900 text-lg">LearnSphere</span>
              </div>
              <button
                type="button"
                className="p-2 text-slate-600 hover:text-slate-900"
                onClick={() => setMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="ls-drawer-body">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`ls-drawer-link ${activeNav === item.id ? "active" : ""}`}
                  onClick={(e) => scrollTo(e, item.id)}
                >
                  {item.label}
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="ls-drawer-footer">
              <a
                href="#ls-pricing"
                className="w-full bg-purple-700 text-white font-bold py-3 text-center rounded-lg flex items-center justify-center gap-2"
                onClick={(e) => scrollTo(e, "ls-pricing")}
              >
                Apply for Next Cohort
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* 2. Hero Section */}
      <section className="ls-hero-section">
        <div className="ls-wrap">
          <div className="ls-hero-grid">
            <div>
              <div className="ls-badge-pill">
                <Sparkles className="w-4 h-4" />
                SUMMER 2024 COHORTS NOW OPEN
              </div>

              <h2 className="ls-hero-title">
                Guided Online Learning with <span>Structure You Trust</span>.
              </h2>

              <p className="ls-hero-p">
                Clear weekly modules, 1-on-1 mentor code & design reviews, project labs, and portfolio-ready career outcomes for high-growth tech careers.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#ls-programs"
                  className="bg-purple-700 hover:bg-purple-800 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-purple-600/20 transition-all flex items-center gap-2"
                  onClick={(e) => scrollTo(e, "ls-programs")}
                >
                  Explore Programs
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#ls-pricing"
                  className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold text-base px-7 py-4 rounded-xl transition-colors flex items-center gap-2"
                  onClick={(e) => scrollTo(e, "ls-pricing")}
                >
                  View Cohort Plans
                </a>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="ls-hero-frame">
              <img src={heroImage} alt="LearnSphere Academy Students & Mentors" />
              <div className="ls-hero-widget-overlay">
                <div className="bg-purple-600 p-3 rounded-xl text-white">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm margin-0">92% Graduation Success Rate</h4>
                  <p className="text-xs text-slate-300 margin-0">Verified 1-on-1 Mentor Feedback Each Week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats HUD Bar */}
      <section className="ls-stats-bar">
        <div className="ls-wrap">
          <div className="ls-stats-grid">
            <div className="ls-stat-box">
              <Users className="w-8 h-8 text-purple-400" />
              <div>
                <h3>12,500+</h3>
                <p>Active Learners</p>
              </div>
            </div>

            <div className="ls-stat-box">
              <Calendar className="w-8 h-8 text-purple-400" />
              <div>
                <h3>8,200+</h3>
                <p>Mentor Sessions</p>
              </div>
            </div>

            <div className="ls-stat-box">
              <Award className="w-8 h-8 text-purple-400" />
              <div>
                <h3>92%</h3>
                <p>Career Outcomes</p>
              </div>
            </div>

            <div className="ls-stat-box">
              <Briefcase className="w-8 h-8 text-purple-400" />
              <div>
                <h3>1,800+</h3>
                <p>Portfolios Built</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Featured Programs */}
      <section id="ls-programs" className="ls-section bg-white">
        <div className="ls-wrap">
          <div className="ls-section-head">
            <span className="ls-eyebrow">
              <BookOpen className="w-3.5 h-3.5" />
              CAREER-READY COHORTS
            </span>
            <h2 className="ls-section-title">Programs Designed for In-Demand Careers</h2>
          </div>

          <div className="ls-programs-grid">
            {featuredPrograms.map((program) => (
              <div key={program.id} className="ls-program-card">
                <div className="ls-program-img-wrap">
                  <img src={program.img} alt={program.title} />
                  <span className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-purple-300 border border-purple-500/30 text-xs font-mono font-bold px-3 py-1 rounded-full">
                    {program.tag}
                  </span>
                </div>

                <div className="ls-program-body">
                  <h3>{program.title}</h3>
                  <p>{program.desc}</p>

                  <div className="ls-program-meta">
                    <div className="ls-program-meta-item">
                      <span>DURATION</span>
                      <strong>{program.duration}</strong>
                    </div>
                    <div className="ls-program-meta-item">
                      <span>LEVEL</span>
                      <strong>{program.level}</strong>
                    </div>
                    <div className="ls-program-meta-item">
                      <span>NEXT COHORT</span>
                      <strong>{program.nextCohort}</strong>
                    </div>
                  </div>

                  <a
                    href="#ls-pricing"
                    className="mt-auto inline-flex items-center justify-between text-sm font-bold text-purple-700 hover:text-purple-900"
                    onClick={(e) => scrollTo(e, "ls-pricing")}
                  >
                    Enroll in Cohort
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Curriculum Path */}
      <section id="ls-curriculum" className="ls-section bg-slate">
        <div className="ls-wrap">
          <div className="ls-section-head">
            <span className="ls-eyebrow">
              <TrendingUp className="w-3.5 h-3.5" />
              STRUCTURED SYLLABUS
            </span>
            <h2 className="ls-section-title">A Clear Path from Start to Success</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {curriculumSteps.map((s, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm relative">
                <span className="text-3xl font-extrabold text-purple-600/20 font-mono absolute top-6 right-6">
                  {s.step}
                </span>
                <h3 className="font-extrabold text-lg text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Mentors Section */}
      <section id="ls-mentors" className="ls-section bg-white">
        <div className="ls-wrap">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="ls-eyebrow">
                <Users className="w-3.5 h-3.5" />
                EXPERT MENTORSHIP
              </span>
              <h2 className="ls-section-title mb-6">
                Learn with Guidance from Industry Experts
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-8">
                Our mentors are staff engineers, lead product designers, and senior analytics directors working at top technology companies.
              </p>

              <div className="space-y-4">
                {mentorsList.map((m, i) => (
                  <div key={i} className="p-5 bg-slate-50 border border-slate-200 rounded-xl flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-purple-700 text-white font-bold flex items-center justify-center text-sm flex-shrink-0">
                      {m.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{m.name}</h4>
                      <p className="text-xs font-mono text-purple-700 font-bold mb-1">{m.role} • {m.company}</p>
                      <p className="text-xs text-slate-600">{m.bio}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img src={mentorImage} alt="LearnSphere Mentor Office Hours" className="w-full h-[520px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 7. Tuition & Pricing */}
      <section id="ls-pricing" className="ls-section bg-slate">
        <div className="ls-wrap">
          <div className="ls-section-head">
            <span className="ls-eyebrow">
              <FileCheck className="w-3.5 h-3.5" />
              TRANSPARENT TUITION
            </span>
            <h2 className="ls-section-title">Choose the Path That Fits Your Goals</h2>
          </div>

          <div className="ls-pricing-grid">
            <div className="ls-price-card">
              <h3 className="font-extrabold text-xl text-slate-900 mb-2">Core Self-Paced</h3>
              <p className="text-slate-600 text-sm mb-6">Full curriculum access with student community support.</p>
              <div className="text-4xl font-extrabold text-slate-900 mb-1">$699</div>
              <span className="text-xs font-mono text-slate-500 mb-6">One-time enrollment fee</span>

              <ul className="space-y-3 text-sm text-slate-700 mb-8 flex-grow">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Complete 12-week course modules</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Student Discord community access</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Capstone project templates</li>
              </ul>

              <button
                type="button"
                className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-colors"
                onClick={() => setSelectedTier("core")}
              >
                Enroll in Core
              </button>
            </div>

            <div className="ls-price-card popular">
              <span className="ls-popular-badge">RECOMMENDED</span>
              <h3 className="font-extrabold text-xl text-slate-900 mb-2">Guided Cohort</h3>
              <p className="text-slate-600 text-sm mb-6">Live weekly workshops, code reviews, and mentor check-ins.</p>
              <div className="text-4xl font-extrabold text-purple-700 mb-1">$1,199</div>
              <span className="text-xs font-mono text-slate-500 mb-6">One-time or $399/mo installments</span>

              <ul className="space-y-3 text-sm text-slate-700 mb-8 flex-grow">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Everything in Core plan</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Weekly 1-on-1 mentor office hours</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Personalized project feedback</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Verified Certificate of Completion</li>
              </ul>

              <button
                type="button"
                className="w-full bg-purple-700 text-white font-bold py-3.5 rounded-xl hover:bg-purple-800 transition-colors shadow-lg"
                onClick={() => setSelectedTier("guided")}
              >
                Enroll in Guided Cohort
              </button>
            </div>

            <div className="ls-price-card">
              <h3 className="font-extrabold text-xl text-slate-900 mb-2">Career Track</h3>
              <p className="text-slate-600 text-sm mb-6">Full career coaching, portfolio polish, and interview prep.</p>
              <div className="text-4xl font-extrabold text-slate-900 mb-1">$1,799</div>
              <span className="text-xs font-mono text-slate-500 mb-6">Includes job search guarantee</span>

              <ul className="space-y-3 text-sm text-slate-700 mb-8 flex-grow">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Everything in Guided Cohort</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> 1:1 Resume & LinkedIn review</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Mock technical & design interviews</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-purple-600" /> Direct referral to partner network</li>
              </ul>

              <button
                type="button"
                className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-colors"
                onClick={() => setSelectedTier("career")}
              >
                Apply for Career Track
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ Section */}
      <section id="ls-faq" className="ls-section bg-white">
        <div className="ls-wrap max-w-3xl">
          <div className="ls-section-head">
            <span className="ls-eyebrow">
              <MessageSquare className="w-3.5 h-3.5" />
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="ls-section-title">Everything You Need to Know</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  className="w-full p-5 text-left font-bold text-slate-900 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
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

      {/* 9. Simple Footer */}
      <footer className="ls-footer">
        <div className="ls-wrap">
          <div className="ls-footer-grid">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="ls-brand-icon-box !w-8 !h-8">
                  <GraduationCap className="w-4 h-4 text-white" />
                </div>
                <span className="font-extrabold text-white text-xl">LearnSphere Academy</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Guided online learning with structure you can trust. Build skills, ship portfolio projects, and launch high-growth careers.
              </p>
            </div>

            <div>
              <h4>Programs</h4>
              <ul className="ls-footer-links">
                <li><a href="#ls-programs" onClick={(e) => scrollTo(e, "ls-programs")}>UI/UX Design</a></li>
                <li><a href="#ls-programs" onClick={(e) => scrollTo(e, "ls-programs")}>Front-End Development</a></li>
                <li><a href="#ls-programs" onClick={(e) => scrollTo(e, "ls-programs")}>Data Analytics</a></li>
                <li><a href="#ls-programs" onClick={(e) => scrollTo(e, "ls-programs")}>Product Management</a></li>
              </ul>
            </div>

            <div>
              <h4>Quick Links</h4>
              <ul className="ls-footer-links">
                <li><a href="#ls-curriculum" onClick={(e) => scrollTo(e, "ls-curriculum")}>Curriculum Path</a></li>
                <li><a href="#ls-mentors" onClick={(e) => scrollTo(e, "ls-mentors")}>Mentors & Office Hours</a></li>
                <li><a href="#ls-pricing" onClick={(e) => scrollTo(e, "ls-pricing")}>Tuition & Plans</a></li>
                <li><a href="#ls-faq" onClick={(e) => scrollTo(e, "ls-faq")}>FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4>Admissions Office</h4>
              <p className="text-sm text-slate-300 mb-3">Questions about upcoming cohorts?</p>
              <a
                href="mailto:admissions@learnsphere.academy"
                className="inline-flex items-center gap-2 bg-purple-700 hover:bg-purple-800 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                Contact Admissions
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} LearnSphere Academy Inc. All rights reserved. Registered Educational Provider.
          </div>
        </div>
      </footer>
    </div>
  );
}
