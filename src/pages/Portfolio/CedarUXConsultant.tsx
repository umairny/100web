import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  X,
  Menu,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Brain,
  Compass,
  Rocket,
  Search,
  PenTool,
  Check,
  ChevronRight,
  Layers,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import "./CedarUXConsultant.css";

// -----------------------------------------------------------------------------
// Inline SVG Social Icons
// -----------------------------------------------------------------------------
function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function MediumIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M13.54 12a6.8 6.8 0 0 1-6.77 6.82A6.8 6.8 0 0 1 0 12a6.8 6.8 0 0 1 6.77-6.82A6.8 6.8 0 0 1 13.54 12zm7.42 0c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
    </svg>
  );
}

function GlobeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

// -----------------------------------------------------------------------------
// Interactive Case Study Modal
// -----------------------------------------------------------------------------
interface CaseStudy {
  id: string;
  title: string;
  category: string;
  client: string;
  metric: string;
  metricLabel: string;
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  kpis: string[];
}

interface CaseModalProps {
  study: CaseStudy | null;
  onClose: () => void;
}

function CaseStudyModal({ study, onClose }: CaseModalProps) {
  if (!study) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[90vh] overflow-y-auto cedar-scrollbar rounded-3xl border border-emerald-900/30 bg-[#17261d] text-white p-6 sm:p-8 shadow-2xl text-left cedar-modal-anim relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between pb-4 border-b border-emerald-900/40 mb-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#c89f5b] font-bold block mb-1">
              {study.category} // {study.client}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold cedar-serif leading-tight">
              {study.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mockup Preview */}
        <div className="rounded-2xl overflow-hidden border border-emerald-900/40 bg-black/40 mb-6 shadow-inner">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-auto object-contain max-h-[40vh] mx-auto"
          />
        </div>

        {/* Metrics Bar */}
        <div className="p-4 rounded-2xl bg-[#1f3327] border border-emerald-800/40 flex items-center justify-between mb-6">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-300">
              Validated Metric Lift
            </span>
            <div className="text-2xl sm:text-3xl font-black text-[#c89f5b] cedar-serif">
              {study.metric}
            </div>
            <span className="text-xs text-slate-300">{study.metricLabel}</span>
          </div>

          <div className="flex gap-2">
            {study.kpis.map((kpi, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono bg-emerald-950/60 border border-emerald-800/60 text-emerald-200 px-3 py-1.5 rounded-full"
              >
                {kpi}
              </span>
            ))}
          </div>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 text-xs sm:text-sm leading-relaxed text-slate-200">
          <div className="p-4 rounded-xl bg-black/20 border border-emerald-900/30">
            <h4 className="font-bold uppercase tracking-wider text-[#c89f5b] mb-2 font-mono text-xs">
              The Strategic Challenge
            </h4>
            <p>{study.challenge}</p>
          </div>
          <div className="p-4 rounded-xl bg-black/20 border border-emerald-900/30">
            <h4 className="font-bold uppercase tracking-wider text-[#c89f5b] mb-2 font-mono text-xs">
              The Cedar UX Intervention
            </h4>
            <p>{study.solution}</p>
          </div>
        </div>

        {/* Core Deliverables */}
        <div className="pt-4 border-t border-emerald-900/40">
          <span className="text-[10px] font-mono uppercase tracking-widest text-slate-400 font-bold block mb-3">
            Core Strategic Deliverables
          </span>
          <div className="flex flex-wrap gap-2">
            {study.deliverables.map((item, idx) => (
              <span
                key={idx}
                className="text-xs font-mono bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg text-slate-300 flex items-center gap-1.5"
              >
                <Check className="w-3 h-3 text-[#c89f5b]" />
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Main CedarUXConsultant Component
// -----------------------------------------------------------------------------
export function CedarUXConsultant() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("work");
  const [isScrolled, setIsScrolled] = useState(false);

  // Selected Case Study State
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  // Active Process Step in The Cedar Method
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Full Product UX Redesign",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Nav Items matching the original image
  const navItems = [
    { id: "work", label: "Work" },
    { id: "process", label: "Process" },
    { id: "impact", label: "Impact" },
    { id: "inquire", label: "Inquire" },
  ];

  // Selected Work Case Studies
  const caseStudies: CaseStudy[] = [
    {
      id: "fintech",
      title: "FINTECH REVOLUTION: Streamlining Onboarding",
      category: "Enterprise Fintech",
      client: "AeroPay Global",
      metric: "+45%",
      metricLabel: "Onboarding Conversion",
      image: "/images/cedar/case-fintech-dashboard.webp",
      overview:
        "Redesigned the multi-jurisdiction compliance and merchant KYC flow from an 11-screen maze into an intuitive 3-step progressive onboarding engine.",
      challenge:
        "Legacy merchant signups suffered from a 62% drop-off rate due to excessive upfront KYC verification, disconnected banking APIs, and opaque document error messaging.",
      solution:
        "Engineered an automated progressive disclosure workflow that validates credentials asynchronously, previews instant test-mode sandboxes, and eliminates cognitive friction.",
      deliverables: [
        "Biometric KYC Architecture",
        "Adaptive Onboarding Funnel",
        "Executive Analytics Dashboard",
        "Figma Component System",
      ],
      kpis: ["+45% Conversion Lift", "-68% Time-to-First-Transaction", "Zero Compliance Violations"],
    },
    {
      id: "saas",
      title: "SaaS GROWTH ENGINE: Redesigning the Core",
      category: "Cloud Telemetry",
      client: "PulseScale Cloud",
      metric: "Reduced Churn by 20%",
      metricLabel: "Quarterly Retention Lift",
      image: "/images/cedar/case-saas-core.webp",
      overview:
        "Overhauled the core data exploration experience for a high-velocity developer platform, unifying fragmented observability widgets into a cohesive workspace.",
      challenge:
        "Engineers struggled with cognitive fatigue across 4 disjointed legacy screens, resulting in low feature discovery, high trial drop-offs, and enterprise churn.",
      solution:
        "Consolidated monitoring telemetry into an interactive, root-cause investigative timeline that guides users directly from system alert to remediation in 3 clicks.",
      deliverables: [
        "Telemetry Journey Maps",
        "Configurable Canvas Workspace",
        "Microcopy Teardown",
        "Interactive Design Tokens",
      ],
      kpis: ["-20% Enterprise Churn", "3.4x Daily Active Minutes", "+88 NPS Score"],
    },
    {
      id: "healthtech",
      title: "HEALTH TECH IMPACT: Improving Patient Access",
      category: "Digital Healthcare",
      client: "VerveCare Telehealth",
      metric: "4.9 / 5.0",
      metricLabel: "Patient Satisfaction",
      image: "/images/cedar/case-healthtech.webp",
      overview:
        "Streamlined patient intake triage and clinician scheduling for an asynchronous outpatient healthcare network across 18 clinical specialties.",
      challenge:
        "Patients with acute care needs were confronted with 20-minute paperwork forms, leading to 41% booking abandonment and severe clinician burnout from data reentry.",
      solution:
        "Designed an empathetic conversational triage module that populates electronic health records dynamically and matches patients with appropriate specialists in under 90 seconds.",
      deliverables: [
        "HIPAA-Compliant Patient Portal",
        "Clinician Triage Flow",
        "Accessibility AAA Audit",
        "Mobile iOS & Android Design System",
      ],
      kpis: ["92% Form Completion", "-4.5 min Wait Time", "100% Specialist Adherence"],
    },
  ];

  // The Cedar Method Process Steps
  const processSteps = [
    {
      stepNumber: "01",
      title: "DISCOVER",
      subtitle: "Root Cause Analysis",
      image: "/images/cedar/step-discover.webp",
      description:
        "We dig beneath the surface symptoms to diagnose foundational product misalignment, user friction points, and untapped market opportunities.",
      activities: [
        "Qualitative User Interviews",
        "Telemetry & Drop-off Auditing",
        "Competitive Feature Gap Analysis",
      ],
      deliverable: "Root Cause Diagnosis Report",
    },
    {
      stepNumber: "02",
      title: "DEFINE",
      subtitle: "Opportunity Mapping",
      image: "/images/cedar/step-define.webp",
      description:
        "Synthesizing user data into clear architectural blueprints, product hypotheses, and high-impact UX roadmaps prioritized by ROI.",
      activities: [
        "Core Jobs-to-be-Done (JTBD)",
        "Service Blueprinting",
        "Hypothesis Scoring Matrix (ICE)",
      ],
      deliverable: "Product Opportunity Roadmap",
    },
    {
      stepNumber: "03",
      title: "DESIGN",
      subtitle: "Prototyping & Iteration",
      image: "/images/cedar/step-design.webp",
      description:
        "Rapid high-fidelity wireframing, clickable prototype validation, and design systems crafted for effortless developer handoff.",
      activities: [
        "Clickable Figma Prototypes",
        "Usability Moderation Testing",
        "Scalable Design System Tokens",
      ],
      deliverable: "Validated Production UI/UX Deck",
    },
    {
      stepNumber: "04",
      title: "DELIVER",
      subtitle: "Implementation Support",
      image: "/images/cedar/step-deliver.webp",
      description:
        "Partnering side-by-side with your engineering and product teams during deployment to guarantee pixel perfection and measurable metric lift.",
      activities: [
        "Front-End QA Pair Reviews",
        "Design Token Handoff",
        "Post-Launch A/B Metric Tracking",
      ],
      deliverable: "Production Audit & Impact Analytics",
    },
  ];

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Bottom detection -> activate "inquire"
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120
      ) {
        setActiveSection("inquire");
        return;
      }

      const sections = ["inquire", "impact", "process", "work"];
      const scrollPos = window.scrollY + 180;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("work");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <div className="cedar-container min-h-screen selection:bg-[#1e3226] selection:text-white">
      {/* Case Study Deep-Dive Modal */}
      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* ======================================================================= */}
      {/* STICKY HEADER / NAVBAR                                                  */}
      {/* ======================================================================= */}
      <header
        className={`cedar-navbar-sticky ${
          isScrolled ? "cedar-navbar-scrolled py-2.5" : "py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo with Green Cedar Tree Icon */}
          <Link
            to="/portfolio/cedar-ux-consultant"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group cursor-pointer select-none"
          >
            <div className="w-8 h-8 rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src="/images/cedar/logo-tree.webp"
                alt="Cedar UX Consultant Tree Icon"
                className="w-full h-full object-contain group-hover:scale-110 transition-transform"
              />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="text-xs sm:text-sm font-black tracking-wider text-[#1e3226] uppercase">
                CEDAR
              </span>
              <span className="text-[9px] font-mono tracking-[0.2em] text-[#9b7334] uppercase font-bold">
                UX CONSULTANT
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-xs font-mono font-bold tracking-wider text-slate-600"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors uppercase tracking-widest cursor-pointer py-1 relative ${
                    isActive
                      ? "text-[#1e3226] font-extrabold"
                      : "text-slate-600 hover:text-[#1e3226]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1e3226]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-300 text-slate-700 hover:text-black"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-300 bg-[#faf7f0] px-6 py-5 space-y-3 text-xs font-mono uppercase tracking-wider text-left cedar-modal-anim shadow-xl">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all ${
                    isActive
                      ? "bg-[#1e3226] text-white font-bold"
                      : "text-slate-700 hover:bg-slate-200/60"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#c89f5b]" />}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Spacer for sticky header */}
      <div className="h-16 sm:h-20" />

      {/* ======================================================================= */}
      {/* HERO SECTION                                                            */}
      {/* ======================================================================= */}
      <section className="relative z-10 pt-10 pb-16 sm:pt-16 sm:pb-24 overflow-hidden bg-[#faf7f0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Top Title & Subhead */}
          <div className="max-w-3xl mx-auto space-y-4 mb-8">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1e3226] cedar-serif leading-[1.08] tracking-tight uppercase">
              GROWING
              <br />
              PRODUCT VALUE FROM THE ROOT UP
            </h1>

            <p className="text-sm sm:text-base text-slate-700 font-normal leading-relaxed max-w-xl mx-auto">
              Strategic Product Design &amp; User Experience for Ambitious Teams
            </p>

            <div className="pt-2">
              <button
                onClick={() => scrollToSection("process")}
                className="px-8 py-3.5 rounded-full cedar-gold-btn font-mono text-xs font-bold uppercase tracking-wider cursor-pointer"
              >
                EXPLORE THE APPROACH
              </button>
            </div>
          </div>

          {/* Majestic Cedar Tree with Roots Artwork */}
          <div className="relative max-w-2xl mx-auto flex items-center justify-center mt-6">
            <div className="relative w-full aspect-[4/3] max-w-xl flex items-center justify-center">
              <img
                src="/images/cedar/hero-cedar-tree.webp"
                alt="Cedar Tree with Deep Roots and Canopy Growth"
                className="w-full h-full object-contain drop-shadow-md hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* POSITIONING SECTION                                                     */}
      {/* ======================================================================= */}
      <section
        id="positioning"
        className="relative z-10 py-16 sm:py-24 bg-[#1e3226] text-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-white uppercase cedar-serif mb-12 sm:mb-16">
            POSITIONING
          </h2>

          {/* 3 Illustrated Scroll Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Card 1: ECOSYSTEM THINKING */}
            <div className="cedar-scroll-card rounded-3xl overflow-hidden bg-[#243c2e] border border-emerald-800/40 p-5 sm:p-6 text-left flex flex-col justify-between shadow-xl">
              <div>
                <div className="rounded-2xl overflow-hidden bg-black/30 border border-emerald-900/40 mb-5 p-1">
                  <img
                    src="/images/cedar/positioning-card-1.webp"
                    alt="Ecosystem Thinking"
                    className="w-full h-auto object-contain rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold cedar-serif uppercase tracking-wider text-white mb-2">
                  Ecosystem Thinking
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  A holistic perspective that aligns product architecture, business viability, and technical feasibility into unified, resilient systems.
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-emerald-900/60 flex items-center justify-between text-[10px] font-mono text-[#c89f5b]">
                <span>HOLISTIC FRAMEWORK</span>
                <span>PILLAR 01 &rarr;</span>
              </div>
            </div>

            {/* Card 2: DATA-DRIVEN EMPATHY */}
            <div className="cedar-scroll-card rounded-3xl overflow-hidden bg-[#243c2e] border border-emerald-800/40 p-5 sm:p-6 text-left flex flex-col justify-between shadow-xl">
              <div>
                <div className="rounded-2xl overflow-hidden bg-black/30 border border-emerald-900/40 mb-5 p-1">
                  <img
                    src="/images/cedar/positioning-card-2.webp"
                    alt="Data-Driven Empathy"
                    className="w-full h-auto object-contain rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold cedar-serif uppercase tracking-wider text-white mb-2">
                  Data-Driven Empathy
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  Bridging quantitative behavioral telemetry with qualitative user intimacy to uncover root causes and eliminate decision bias.
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-emerald-900/60 flex items-center justify-between text-[10px] font-mono text-[#c89f5b]">
                <span>BEHAVIORAL SCIENCE</span>
                <span>PILLAR 02 &rarr;</span>
              </div>
            </div>

            {/* Card 3: ACTIONABLE STRATEGY */}
            <div className="cedar-scroll-card rounded-3xl overflow-hidden bg-[#243c2e] border border-emerald-800/40 p-5 sm:p-6 text-left flex flex-col justify-between shadow-xl">
              <div>
                <div className="rounded-2xl overflow-hidden bg-black/30 border border-emerald-900/40 mb-5 p-1">
                  <img
                    src="/images/cedar/positioning-card-3.webp"
                    alt="Actionable Strategy"
                    className="w-full h-auto object-contain rounded-xl hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-bold cedar-serif uppercase tracking-wider text-white mb-2">
                  Actionable Strategy
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  Pragmatic execution roadmaps with clear sprint milestones that engineering teams love to build and executives can measure.
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-emerald-900/60 flex items-center justify-between text-[10px] font-mono text-[#c89f5b]">
                <span>VELOCITY ENGINE</span>
                <span>PILLAR 03 &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* SELECTED WORK SECTION                                                   */}
      {/* ======================================================================= */}
      <section
        id="work"
        className="relative z-10 py-16 sm:py-24 bg-[#1e3226] text-white border-t border-emerald-900/50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-white uppercase cedar-serif mb-12 sm:mb-16">
            SELECTED WORK
          </h2>

          <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                className="cedar-case-card rounded-3xl bg-[#243c2e] border border-emerald-800/50 p-6 sm:p-8 text-left shadow-2xl transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
                  {/* Left Column: Case Meta & Narrative */}
                  <div className="lg:col-span-5 space-y-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#c89f5b] font-bold block mb-1">
                        {study.category}
                      </span>
                      <h3 className="text-lg sm:text-2xl font-bold text-white cedar-serif leading-tight">
                        {study.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                      {study.overview}
                    </p>

                    {/* Metric Callout */}
                    <div className="pt-2">
                      <div className="text-2xl sm:text-3xl font-black text-[#c89f5b] cedar-serif">
                        {study.metric}
                      </div>
                      <div className="text-[11px] font-mono text-slate-400">
                        {study.metricLabel}
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setSelectedCaseStudy(study)}
                        className="px-6 py-2.5 rounded-full cedar-gold-btn font-mono text-xs font-bold uppercase tracking-wider transition-all cursor-pointer inline-flex items-center gap-2"
                      >
                        <span>VIEW CASE STUDY</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Dashboard Mockup */}
                  <div
                    onClick={() => setSelectedCaseStudy(study)}
                    className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-black/40 border border-emerald-900/40 cursor-pointer group shadow-inner"
                  >
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* THE PROCESS SECTION: THE CEDAR METHOD                                   */}
      {/* ======================================================================= */}
      <section
        id="process"
        className="relative z-10 py-16 sm:py-24 bg-[#faf7f0] text-slate-900 border-t border-slate-300"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#9b7334] font-bold block mb-2">
            THE PROCESS
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold cedar-serif uppercase tracking-wider mb-12 sm:mb-16 text-[#1e3226]">
            THE CEDAR METHOD
          </h2>

          {/* 4 Connected Step Nodes matching the reference image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, idx) => {
              const isSelected = activeProcessStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`p-6 rounded-3xl transition-all cursor-pointer text-center flex flex-col items-center justify-between border ${
                    isSelected
                      ? "bg-white border-[#b88d48] shadow-2xl scale-102 ring-2 ring-[#c89f5b]/30"
                      : "bg-white/60 border-slate-300 hover:border-slate-400 hover:bg-white"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    {/* Illustrated Icon with Root */}
                    <div className="w-20 h-24 mb-4 flex items-center justify-center p-1">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-contain hover:scale-110 transition-transform"
                      />
                    </div>

                    <h3 className="text-sm font-extrabold tracking-wider uppercase cedar-serif text-[#1e3226] mb-1">
                      {step.title}
                    </h3>

                    <div className="text-xs font-mono text-[#9b7334] font-bold mb-2">
                      {step.subtitle}
                    </div>

                    <p className="text-xs font-normal leading-relaxed text-slate-600 line-clamp-3">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-200 w-full text-[10px] font-mono tracking-widest text-slate-500 font-bold">
                    PHASE {step.stepNumber}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Phase Deep-Dive Card */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-slate-300 max-w-3xl mx-auto text-left shadow-lg cedar-modal-anim">
            <div className="flex items-center justify-between mb-3 text-xs font-mono">
              <span className="uppercase tracking-widest text-[#1e3226] font-bold">
                PHASE {processSteps[activeProcessStep].stepNumber} // {processSteps[activeProcessStep].title} DEEP DIVE
              </span>
              <span className="text-[#9b7334] font-bold">
                {processSteps[activeProcessStep].subtitle}
              </span>
            </div>

            <p className="text-sm text-slate-700 leading-relaxed font-light mb-4">
              {processSteps[activeProcessStep].description}
            </p>

            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono">
              <span className="font-bold text-[#1e3226]">Core Milestone Deliverable:</span>
              <span className="text-[#9b7334] font-semibold">
                {processSteps[activeProcessStep].deliverable}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* CREDIBLE OUTCOMES SECTION                                               */}
      {/* ======================================================================= */}
      <section
        id="impact"
        className="relative z-10 py-16 sm:py-24 bg-[#faf7f0] border-t border-slate-300 text-center"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-[#1e3226] uppercase cedar-serif mb-12 sm:mb-16">
            CREDIBLE OUTCOMES
          </h2>

          {/* Client Logos Strip matching the reference image */}
          <div className="max-w-3xl mx-auto mb-14 p-2">
            <img
              src="/images/cedar/client-logos.webp"
              alt="Client Logos: Stripe, Google, Medium, Impact, Growth"
              className="w-full h-auto object-contain mx-auto opacity-85 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Testimonial Banner Card matching reference */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#1e3226] text-white p-6 sm:p-10 shadow-2xl text-left relative overflow-hidden mb-14 border border-emerald-800/40">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              {/* Client Photo Avatar */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-[#c89f5b] shadow-xl bg-black/40">
                <img
                  src="/images/cedar/client-executive.webp"
                  alt="Cedar UX Consulting Client Executive"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote Content */}
              <div className="space-y-3 flex-1 text-center md:text-left">
                <p className="text-base sm:text-xl font-medium cedar-serif leading-snug text-slate-100">
                  <span className="text-[#c89f5b] text-2xl font-serif mr-1">“</span>
                  Cedar UX Consulting didn't just give us a design; they unlocked a new product strategy that transformed our business.
                  <span className="text-[#c89f5b] text-2xl font-serif ml-1">”</span>
                </p>

                <div className="pt-1">
                  <div className="text-xs font-mono font-bold text-[#c89f5b] uppercase">
                    VP of Product, FinTech Enterprise
                  </div>
                  <div className="text-[11px] font-mono text-slate-300">
                    Cedar UX Consulting Client Partner
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3 Impact Stat Circles matching the reference */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-8 rounded-full border border-slate-300 bg-white/80 backdrop-blur shadow-md flex flex-col items-center justify-center aspect-[16/9] md:aspect-auto md:h-36">
              <div className="text-3xl sm:text-4xl font-black text-[#1e3226] cedar-serif">
                $10M+
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-600 mt-1">
                Revenue Generated
              </div>
            </div>

            <div className="p-8 rounded-full border border-slate-300 bg-white/80 backdrop-blur shadow-md flex flex-col items-center justify-center aspect-[16/9] md:aspect-auto md:h-36">
              <div className="text-3xl sm:text-4xl font-black text-[#1e3226] cedar-serif">
                50+
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-600 mt-1">
                Product Features Shipped
              </div>
            </div>

            <div className="p-8 rounded-full border border-slate-300 bg-white/80 backdrop-blur shadow-md flex flex-col items-center justify-center aspect-[16/9] md:aspect-auto md:h-36">
              <div className="text-3xl sm:text-4xl font-black text-[#1e3226] cedar-serif">
                95%
              </div>
              <div className="text-xs font-mono uppercase tracking-wider text-slate-600 mt-1">
                User Satisfaction
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* CONFIDENT INQUIRY PATH                                                  */}
      {/* ======================================================================= */}
      <section
        id="inquire"
        className="relative z-10 py-16 sm:py-24 bg-[#1e3226] text-white border-t border-emerald-900/60 text-center"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c89f5b] font-bold block mb-2">
            CONFIDENT INQUIRY PATH
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold cedar-serif uppercase tracking-wider mb-3 text-white">
            READY TO GROW YOUR
            <br />
            PRODUCT'S IMPACT?
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed mb-10 font-light">
            Let's discuss your goals and see how we can cultivate success together.
          </p>

          {/* Form */}
          {formSubmitted ? (
            <div className="p-8 sm:p-12 rounded-3xl bg-[#243c2e] border border-emerald-800/60 shadow-2xl space-y-4 cedar-modal-anim">
              <CheckCircle2 className="w-12 h-12 text-[#c89f5b] mx-auto" />
              <h3 className="text-2xl font-bold cedar-serif text-white">
                Inquiry Received
              </h3>
              <p className="text-xs font-mono text-slate-300 max-w-md mx-auto">
                Thank you, {formData.name || "partner"}. We have received your project details for {formData.company || "your team"} and our principal strategist will respond to {formData.email} within 24 hours.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    company: "",
                    projectType: "Full Product UX Redesign",
                    message: "",
                  });
                }}
                className="mt-4 px-6 py-2 rounded-full cedar-gold-btn font-mono text-xs font-bold uppercase cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className="space-y-4 text-left max-w-xl mx-auto"
            >
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c89f5b]"
                />
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c89f5b]"
                />
              </div>

              {/* Row 2: Company & Project Type */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Company"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c89f5b]"
                />
                <select
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#c89f5b]"
                >
                  <option value="Full Product UX Redesign">Full Product UX Redesign</option>
                  <option value="Onboarding & Conversion Optimization">Onboarding &amp; Conversion Optimization</option>
                  <option value="Design System Architecture">Design System Architecture</option>
                  <option value="Strategic UX Audit">Strategic UX Audit</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <textarea
                  rows={4}
                  required
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c89f5b] resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-full cedar-gold-btn font-mono text-xs font-bold uppercase tracking-widest cursor-pointer shadow-lg hover:shadow-2xl transition-all"
                >
                  {isSubmitting ? (
                    <span>PROCESSING...</span>
                  ) : (
                    <span>START THE CONVERSATION</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ======================================================================= */}
      {/* FOOTER                                                                  */}
      {/* ======================================================================= */}
      <footer className="py-8 bg-[#faf7f0] text-slate-600 text-xs font-mono border-t border-slate-300">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <img
              src="/images/cedar/logo-tree.webp"
              alt="Cedar Tree"
              className="w-5 h-5 object-contain"
            />
            <span className="font-bold text-[#1e3226]">CEDAR UX CONSULTANT</span>
          </div>

          <div className="flex items-center gap-5 text-slate-600">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1e3226] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1e3226] transition-colors"
              aria-label="Medium"
            >
              <MediumIcon className="w-4 h-4" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#1e3226] transition-colors"
              aria-label="Portfolio"
            >
              <GlobeIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="text-slate-500 text-[11px]">
            Product Strategy Portfolio // Cultivate Design
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CedarUXConsultant;
