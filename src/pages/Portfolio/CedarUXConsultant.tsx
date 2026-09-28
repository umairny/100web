import React, { useState, useEffect, useMemo } from "react";
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
  ShieldCheck,
  Zap,
  Award,
  Users,
  BarChart3,
  Sliders,
  DollarSign,
  Clock,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";

// -----------------------------------------------------------------------------
// Social Icons
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
// Interactive Case Study Interface & Modal
// -----------------------------------------------------------------------------
export interface CaseStudy {
  id: string;
  title: string;
  category: "FinTech" | "Cloud SaaS" | "HealthTech" | "AI Systems";
  client: string;
  metric: string;
  metricLabel: string;
  image: string;
  duration: string;
  year: string;
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
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (study) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [study, onClose]);

  if (!study) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md cedar-modal-overlay"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[92vh] overflow-y-auto cedar-scrollbar rounded-3xl cedar-modal-panel p-6 sm:p-9 shadow-2xl text-left cedar-modal-anim relative border"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between pb-5 border-b cedar-border mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono uppercase tracking-widest cedar-accent-text font-bold">
                {study.category}
              </span>
              <span className="cedar-muted-text text-xs font-mono">/</span>
              <span className="text-xs font-mono uppercase tracking-wider cedar-muted-text font-semibold">
                {study.client} ({study.year})
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold cedar-serif leading-tight cedar-heading-text">
              {study.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2.5 rounded-full cedar-close-btn transition-colors cursor-pointer shrink-0 ml-4"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* High-Definition Mockup Preview */}
        <div className="rounded-2xl overflow-hidden border cedar-border cedar-card-preview mb-6 shadow-xl relative group">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-auto object-cover max-h-[50vh] mx-auto transition-transform duration-500 group-hover:scale-102"
          />
          <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md text-[11px] font-mono text-white flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 cedar-accent-text" />
            <span>Interactive Production System</span>
          </div>
        </div>

        {/* Validated Metrics Bar */}
        <div className="p-5 rounded-2xl cedar-metric-bar flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 border">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-wider cedar-accent-text font-semibold block mb-0.5">
              Validated Metric Lift
            </span>
            <div className="text-3xl sm:text-4xl font-black cedar-accent-text cedar-serif">
              {study.metric}
            </div>
            <span className="text-xs cedar-muted-text font-medium">{study.metricLabel}</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {study.kpis.map((kpi, idx) => (
              <span
                key={idx}
                className="text-[11px] font-mono px-3.5 py-1.5 rounded-full cedar-kpi-badge border font-semibold flex items-center gap-1.5"
              >
                <CheckCircle2 className="w-3.5 h-3.5 cedar-accent-text" />
                {kpi}
              </span>
            ))}
          </div>
        </div>

        {/* Narrative Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6 text-xs sm:text-sm leading-relaxed">
          <div className="p-5 rounded-2xl cedar-info-box border">
            <div className="flex items-center gap-2 mb-2.5">
              <Compass className="w-4 h-4 cedar-accent-text" />
              <h4 className="font-bold uppercase tracking-wider cedar-accent-text font-mono text-xs">
                The Strategic Challenge
              </h4>
            </div>
            <p className="cedar-muted-text font-light leading-relaxed">{study.challenge}</p>
          </div>

          <div className="p-5 rounded-2xl cedar-info-box border">
            <div className="flex items-center gap-2 mb-2.5">
              <Zap className="w-4 h-4 cedar-accent-text" />
              <h4 className="font-bold uppercase tracking-wider cedar-accent-text font-mono text-xs">
                The Cedar UX Intervention
              </h4>
            </div>
            <p className="cedar-muted-text font-light leading-relaxed">{study.solution}</p>
          </div>
        </div>

        {/* Core Deliverables */}
        <div className="pt-4 border-t cedar-border">
          <span className="text-[11px] font-mono uppercase tracking-widest cedar-muted-text font-bold block mb-3">
            Production Deliverables &amp; Design Architecture
          </span>
          <div className="flex flex-wrap gap-2.5">
            {study.deliverables.map((item, idx) => (
              <span
                key={idx}
                className="text-xs font-mono px-3.5 py-2 rounded-xl cedar-deliverable-chip border flex items-center gap-2"
              >
                <Check className="w-3.5 h-3.5 cedar-accent-text" />
                <span>{item}</span>
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

  // Filter for Case Studies
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Active Process Step in The Cedar Method
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);

  // Active Testimonial Index
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  // Hero Image Lightbox Zoom State
  const [isHeroZoomed, setIsHeroZoomed] = useState<boolean>(false);

  // Interactive ROI Calculator State
  const [calcTier, setCalcTier] = useState<"seed" | "growth" | "enterprise">("growth");
  const [calcUsers, setCalcUsers] = useState<number>(25000);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "$50k - $100k",
    timeline: "Next 30 Days",
    projectType: "Full Product UX Redesign",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Navigation Items
  const navItems = [
    { id: "work", label: "Selected Work" },
    { id: "positioning", label: "Strategic Pillars" },
    { id: "process", label: "The Cedar Method" },
    { id: "calculator", label: "ROI Estimator" },
    { id: "impact", label: "Credible Outcomes" },
    { id: "inquire", label: "Inquire" },
  ];

  // 4 Featured Case Studies with High-Definition Bespoke Visuals
  const caseStudies: CaseStudy[] = [
    {
      id: "fintech",
      title: "FINTECH REVOLUTION: Streamlining Global Onboarding",
      category: "FinTech",
      client: "AeroPay Global",
      year: "2025",
      duration: "10 Weeks",
      metric: "+45%",
      metricLabel: "Merchant Onboarding Conversion Lift",
      image: "/images/cedar/case-fintech-curved.jpg",
      overview:
        "Redesigned the multi-jurisdiction compliance and merchant KYC flow from an 11-screen maze into an intuitive 3-step progressive onboarding engine.",
      challenge:
        "Legacy merchant signups suffered from a 62% drop-off rate due to excessive upfront KYC verification, disconnected banking APIs, and opaque document error messaging across 14 currencies.",
      solution:
        "Engineered an automated progressive disclosure workflow that validates credentials asynchronously, previews instant test-mode sandboxes, and eliminates cognitive friction with biometric verification.",
      deliverables: [
        "Biometric KYC Architecture",
        "Adaptive Onboarding Funnel",
        "Executive Financial Telemetry UI",
        "Multi-Currency Figma System",
      ],
      kpis: ["+45% Conversion Lift", "-68% Time-to-First-Transaction", "Zero Compliance Violations"],
    },
    {
      id: "saas",
      title: "SaaS GROWTH ENGINE: Cloud Observability & Telemetry",
      category: "Cloud SaaS",
      client: "PulseScale Cloud",
      year: "2025",
      duration: "12 Weeks",
      metric: "-20%",
      metricLabel: "Quarterly Enterprise Churn Reduction",
      image: "/images/cedar/case-saas-telemetry.jpg",
      overview:
        "Overhauled the core data exploration experience for a high-velocity developer platform, unifying fragmented observability widgets into a cohesive investigative canvas.",
      challenge:
        "Site Reliability Engineers struggled with cognitive fatigue across 4 disjointed legacy screens, resulting in slow incident triage, high trial drop-offs, and enterprise churn.",
      solution:
        "Consolidated monitoring telemetry into an interactive, root-cause investigative timeline that guides users directly from automated alert to remediation in under 3 clicks.",
      deliverables: [
        "Distributed Telemetry Maps",
        "Configurable Canvas Workspace",
        "Microcopy Teardown",
        "Interactive Design Tokens",
      ],
      kpis: ["-20% Enterprise Churn", "3.4x Daily Active Minutes", "+88 NPS Score"],
    },
    {
      id: "healthtech",
      title: "HEALTHTECH IMPACT: Empathetic Clinical Triage",
      category: "HealthTech",
      client: "VerveCare Telehealth",
      year: "2024",
      duration: "8 Weeks",
      metric: "4.9 / 5.0",
      metricLabel: "Average Patient Care Experience Rating",
      image: "/images/cedar/case-healthtech-clinical.jpg",
      overview:
        "Streamlined patient intake triage and clinician scheduling for an asynchronous outpatient healthcare network across 18 clinical specialties.",
      challenge:
        "Patients with acute care needs were confronted with 20-minute paperwork forms, leading to 41% booking abandonment and severe clinician burnout from repetitive data reentry.",
      solution:
        "Designed an empathetic conversational triage module that populates electronic health records dynamically and matches patients with appropriate specialists in under 90 seconds.",
      deliverables: [
        "HIPAA-Compliant Patient Portal",
        "Clinician Triage Flow",
        "Accessibility AAA Audit",
        "Tablet & Desktop Design System",
      ],
      kpis: ["92% Form Completion", "-4.5 min Wait Time", "100% Specialist Adherence"],
    },
    {
      id: "ai-systems",
      title: "AI DESIGN INTELLIGENCE: Autonomous Workflow Studio",
      category: "AI Systems",
      client: "Synthetix Systems",
      year: "2025",
      duration: "14 Weeks",
      metric: "4.2x",
      metricLabel: "Sprint Delivery & Design Token Velocity",
      image: "/images/cedar/case-ai-workflow.jpg",
      overview:
        "Created an enterprise multimodal AI design orchestration platform that links generative token generation directly to live front-end component repos.",
      challenge:
        "Design and engineering teams lost hundreds of hours manually translating complex generative AI prompt graphs and token variations into production-ready front-end code.",
      solution:
        "Designed a node-based interactive canvas where cross-functional teams visually configure AI agent workflows, test token hierarchies, and deploy tested changes in seconds.",
      deliverables: [
        "Neural Graph Canvas UX",
        "Multimodal Token Architecture",
        "Live Component Sandbox",
        "Developer SDK Documentation",
      ],
      kpis: ["4.2x Design Velocity", "-74% Token Sync Defects", "99.2% Team Adoption"],
    },
  ];

  // Filtered Case Studies
  const filteredStudies = useMemo(() => {
    if (selectedCategory === "All") return caseStudies;
    return caseStudies.filter((s) => s.category === selectedCategory);
  }, [selectedCategory]);

  // The Cedar Method Process Steps
  const processSteps = [
    {
      stepNumber: "01",
      title: "DISCOVER",
      subtitle: "Root Cause Diagnosis",
      image: "/images/cedar/step-discover.webp",
      timeline: "Weeks 1 - 2",
      description:
        "We dig beneath the surface symptoms to diagnose foundational product misalignment, user friction points, and untapped market opportunities.",
      activities: [
        "Qualitative User Interviews & Recorded Teardowns",
        "Telemetry Drop-off Auditing & Funnel Analytics",
        "Competitive Feature Gap & Pricing Matrix",
      ],
      deliverable: "Root Cause Diagnosis & Metric Opportunity Deck",
    },
    {
      stepNumber: "02",
      title: "DEFINE",
      subtitle: "Opportunity Blueprinting",
      image: "/images/cedar/step-define.webp",
      timeline: "Weeks 3 - 4",
      description:
        "Synthesizing user data into clear architectural blueprints, product hypotheses, and high-impact UX roadmaps prioritized by verified business ROI.",
      activities: [
        "Core Jobs-to-be-Done (JTBD) Service Blueprints",
        "Information Architecture & User Flow Remapping",
        "Hypothesis Scoring Matrix (ICE Priority Score)",
      ],
      deliverable: "Strategic Product Opportunity Roadmap & Flow Matrix",
    },
    {
      stepNumber: "03",
      title: "DESIGN",
      subtitle: "Rapid High-Fidelity Validation",
      image: "/images/cedar/step-design.webp",
      timeline: "Weeks 5 - 8",
      description:
        "Rapid high-fidelity wireframing, clickable prototype usability tests, and design systems crafted for effortless, zero-friction developer handoff.",
      activities: [
        "Clickable Figma Prototypes with Production Microcopy",
        "Moderated Usability Validation Sessions",
        "Multi-Platform Scalable Design Token System",
      ],
      deliverable: "Production Figma UI/UX Deck & Tested Design Tokens",
    },
    {
      stepNumber: "04",
      title: "DELIVER",
      subtitle: "Engineering Handoff & Launch QA",
      image: "/images/cedar/step-deliver.webp",
      timeline: "Weeks 9 - 10",
      description:
        "Partnering side-by-side with your engineering and product teams during deployment to guarantee pixel perfection and measurable metric lift.",
      activities: [
        "Front-End Engineering QA Reviews & Token Handoff",
        "Interactive State & Accessibility Auditing",
        "Post-Launch A/B Metric Tracking & Iteration Sprints",
      ],
      deliverable: "Production Audit & Validated Metric Analytics Report",
    },
  ];

  // Testimonials Array
  const testimonials = [
    {
      quote:
        "Cedar UX Consulting didn't just give us a slick design; they diagnosed deep structural flaws in our compliance funnel and unlocked an entirely new product strategy that transformed our onboarding velocity.",
      name: "Sarah Chen",
      role: "VP of Product",
      company: "AeroPay Global",
      avatar: "/images/cedar/executive-partner-sarah.jpg",
      metric: "+45% Conversion Lift",
    },
    {
      quote:
        "Working with Cedar felt like having a veteran Chief Design Officer embedded on our core team. They bridged the gap between our SRE engineering constraints and enterprise buyers effortlessly.",
      name: "David Vance",
      role: "Head of Engineering",
      company: "PulseScale Cloud",
      avatar: "/images/cedar/client-executive.webp",
      metric: "-20% Churn Drop",
    },
    {
      quote:
        "The Cedar Method brought clarity to our clinical patient triage. Our patient satisfaction jumped to 4.9/5 while clinician administrative fatigue dropped by over 40% across all 18 clinical departments.",
      name: "Dr. Elena Rostova",
      role: "Chief Medical Officer",
      company: "VerveCare Telehealth",
      avatar: "/images/cedar/hero-cedar-bonsai.jpg",
      metric: "4.9/5 Care Score",
    },
  ];

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = ["inquire", "impact", "calculator", "process", "positioning", "work"];
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
    }, 650);
  };

  // ROI Calculator Calculations
  const calculatedLift = useMemo(() => {
    if (calcTier === "seed") {
      const annualLift = Math.round(calcUsers * 0.08 * 120);
      return {
        rate: "+38% to +52%",
        estAnnualValue: `$${(annualLift / 1000).toFixed(0)}k - $${((annualLift * 1.4) / 1000).toFixed(0)}k`,
        timeframe: "3-4 Months",
      };
    } else if (calcTier === "growth") {
      const annualLift = Math.round(calcUsers * 0.12 * 280);
      return {
        rate: "+25% to +45%",
        estAnnualValue: `$${(annualLift / 1000000).toFixed(1)}M - $${((annualLift * 1.5) / 1000000).toFixed(1)}M`,
        timeframe: "6 Months",
      };
    } else {
      const annualLift = Math.round(calcUsers * 0.15 * 520);
      return {
        rate: "+18% to +35%",
        estAnnualValue: `$${(annualLift / 1000000).toFixed(1)}M - $${((annualLift * 1.6) / 1000000).toFixed(1)}M`,
        timeframe: "6-12 Months",
      };
    }
  }, [calcTier, calcUsers]);

  return (
    <div className="cedar-page selection:bg-[#1e3a29] selection:text-white">
      {/* ======================================================================= */}
      {/* THEME & DESIGN SYSTEM STYLES                                            */}
      {/* Automatically binds to ThemeSelector & light/dark mode variables        */}
      {/* ======================================================================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600;700&display=swap');

        /* Default Cedar Palette (Adapts smoothly to themeAccent.ts) */
        .cedar-page {
          --c-bg: var(--theme-bg-base, #faf7f0);
          --c-surface: var(--theme-bg-surface, #ffffff);
          --c-card: var(--theme-bg-card, #f4efe4);
          --c-card-hover: var(--theme-bg-card-hover, #ede6d8);
          --c-border: var(--theme-border, rgba(30, 58, 41, 0.12));
          --c-border-subtle: rgba(30, 58, 41, 0.08);

          --c-primary: var(--theme-accent-primary, #1e3a29);
          --c-primary-hover: var(--theme-accent-primary-hover, #14281c);
          --c-accent: var(--theme-accent-secondary, #c89f5b);
          --c-accent-hover: var(--theme-accent-secondary-hover, #b88d48);
          --c-accent-glow: var(--theme-accent-glow, rgba(200, 159, 91, 0.35));
          --c-gradient: var(--theme-accent-gradient, linear-gradient(135deg, #1e3a29 0%, #c89f5b 100%));

          --c-contrast-bg: var(--theme-bg-dark, #16261c);
          --c-contrast-surface: #1f3527;
          --c-contrast-card: #274232;
          --c-contrast-card-hover: #31523f;
          --c-contrast-text: #ffffff;
          --c-contrast-muted: #cbd5e1;
          --c-contrast-border: rgba(200, 159, 91, 0.22);

          --c-text: var(--theme-text-primary, #18201a);
          --c-text-muted: var(--theme-text-muted, #556259);
          --c-text-heading: var(--theme-accent-primary, #1e3a29);

          background-color: var(--c-bg);
          color: var(--c-text);
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
          line-height: 1.6;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* DARK MODE SUPPORT (html.dark or [data-theme-mood="dark"]) */
        html.dark .cedar-page,
        [data-theme-mood="dark"] .cedar-page {
          --c-bg: var(--theme-bg-base, #0b140f);
          --c-surface: var(--theme-bg-surface, #111e17);
          --c-card: var(--theme-bg-card, #17281f);
          --c-card-hover: var(--theme-bg-card-hover, #1e3328);
          --c-border: var(--theme-border, rgba(255, 255, 255, 0.12));
          --c-border-subtle: rgba(255, 255, 255, 0.08);

          --c-primary: var(--theme-accent-primary, #2d5a3f);
          --c-primary-hover: var(--theme-accent-primary-hover, #3b7452);
          --c-accent: var(--theme-accent-secondary, #d8b26e);
          --c-accent-hover: var(--theme-accent-secondary-hover, #e4c485);
          --c-accent-glow: var(--theme-accent-glow, rgba(216, 178, 110, 0.4));
          --c-gradient: var(--theme-accent-gradient, linear-gradient(135deg, #2d5a3f 0%, #d8b26e 100%));

          --c-contrast-bg: var(--theme-bg-base, #070d0a);
          --c-contrast-surface: #0e1712;
          --c-contrast-card: #15221b;
          --c-contrast-card-hover: #1c2e24;
          --c-contrast-text: #ffffff;
          --c-contrast-muted: #94a3b8;
          --c-contrast-border: rgba(216, 178, 110, 0.28);

          --c-text: var(--theme-text-primary, #f0f4f1);
          --c-text-muted: var(--theme-text-muted, #94a3b8);
          --c-text-heading: #f0f4f1;
        }

        /* Serif Display Typography */
        .cedar-serif {
          font-family: 'Playfair Display', Georgia, serif;
          letter-spacing: -0.015em;
        }

        .cedar-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        /* Adaptive Classes */
        .cedar-bg-main { background-color: var(--c-bg); }
        .cedar-bg-surface { background-color: var(--c-surface); }
        .cedar-bg-card { background-color: var(--c-card); }
        .cedar-bg-contrast { background-color: var(--c-contrast-bg); }
        .cedar-bg-contrast-card { background-color: var(--c-contrast-card); }

        .cedar-heading-text { color: var(--c-text-heading); }
        .cedar-body-text { color: var(--c-text); }
        .cedar-muted-text { color: var(--c-text-muted); }
        .cedar-accent-text { color: var(--c-accent); }
        .cedar-contrast-text { color: var(--c-contrast-text); }
        .cedar-contrast-muted { color: var(--c-contrast-muted); }

        .cedar-border { border-color: var(--c-border); }
        .cedar-contrast-border { border-color: var(--c-contrast-border); }

        /* Desktop Floating Dock Navbar */
        .cedar-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cedar-navbar-dock {
          background-color: color-mix(in srgb, var(--c-surface) 86%, transparent);
          border: 1px solid var(--c-border);
          box-shadow: 0 10px 35px -8px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.05);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .cedar-navbar.scrolled .cedar-navbar-dock {
          background-color: color-mix(in srgb, var(--c-surface) 96%, transparent);
          box-shadow: 0 16px 45px -10px rgba(0, 0, 0, 0.25), 0 0 0 1px var(--c-border);
        }

        /* Nav Segmented Pill Capsule */
        .cedar-nav-capsule {
          background-color: color-mix(in srgb, var(--c-card) 65%, transparent);
          border: 1px solid var(--c-border);
          padding: 3px;
          border-radius: 9999px;
        }

        /* Grand Hero Artwork Showcase */
        .cedar-hero-grand-card {
          background-color: var(--c-surface);
          border: 1px solid var(--c-border);
          border-radius: 32px;
          box-shadow: 0 25px 65px -15px rgba(0, 0, 0, 0.28);
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.6s ease, border-color 0.4s ease;
        }

        .cedar-hero-grand-card:hover {
          border-color: var(--c-accent);
          box-shadow: 0 35px 85px -15px rgba(0, 0, 0, 0.38), 0 0 40px var(--c-accent-glow);
        }

        /* Buttons */
        .cedar-btn-primary {
          background: linear-gradient(135deg, var(--c-accent) 0%, var(--c-accent-hover) 100%);
          color: #ffffff;
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          box-shadow: 0 6px 20px var(--c-accent-glow);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid rgba(255, 255, 255, 0.15);
        }
        .cedar-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 28px var(--c-accent-glow);
          filter: brightness(1.08);
        }

        .cedar-btn-secondary {
          background-color: var(--c-surface);
          color: var(--c-text);
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          letter-spacing: 0.05em;
          border: 1px solid var(--c-border);
          transition: all 0.25s ease;
        }
        .cedar-btn-secondary:hover {
          border-color: var(--c-accent);
          color: var(--c-accent);
          transform: translateY(-1px);
        }

        /* Cards & Hover Effects */
        .cedar-card-interactive {
          transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .cedar-card-interactive:hover {
          transform: translateY(-5px);
          border-color: var(--c-accent);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.25);
        }

        /* Modal styling */
        .cedar-modal-panel {
          background-color: var(--c-contrast-bg);
          color: var(--c-contrast-text);
          border-color: var(--c-contrast-border);
        }
        .cedar-close-btn {
          background-color: rgba(255, 255, 255, 0.1);
          color: var(--c-contrast-muted);
        }
        .cedar-close-btn:hover {
          background-color: rgba(255, 255, 255, 0.2);
          color: #ffffff;
        }
        .cedar-card-preview {
          background-color: rgba(0, 0, 0, 0.4);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .cedar-metric-bar {
          background-color: var(--c-contrast-surface);
          border-color: var(--c-contrast-border);
        }
        .cedar-kpi-badge {
          background-color: rgba(0, 0, 0, 0.3);
          border-color: rgba(255, 255, 255, 0.12);
          color: var(--c-contrast-text);
        }
        .cedar-info-box {
          background-color: var(--c-contrast-surface);
          border-color: rgba(255, 255, 255, 0.1);
        }
        .cedar-deliverable-chip {
          background-color: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.12);
          color: var(--c-contrast-text);
        }

        /* Modal Animations */
        .cedar-modal-anim {
          animation: cedarModalFadeIn 0.32s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes cedarModalFadeIn {
          from { opacity: 0; transform: scale(0.95) translateY(14px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* Scrollbar */
        .cedar-scrollbar::-webkit-scrollbar { width: 6px; }
        .cedar-scrollbar::-webkit-scrollbar-track { background: rgba(0, 0, 0, 0.1); }
        .cedar-scrollbar::-webkit-scrollbar-thumb {
          background: color-mix(in srgb, var(--c-accent) 45%, transparent);
          border-radius: 9999px;
        }
        .cedar-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--c-accent);
        }

        /* Pulse Dot */
        .cedar-pulse-dot {
          animation: cedarPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        @keyframes cedarPulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.3); }
        }
      `}</style>

      {/* Case Study Deep-Dive Interactive Modal */}
      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* ======================================================================= */}
      {/* NAVIGATION BAR                                                          */}
      {/* ======================================================================= */}
      {/* Fullscreen Hero Image Lightbox Modal */}
      {isHeroZoomed && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl cedar-modal-overlay"
          onClick={() => setIsHeroZoomed(false)}
        >
          <div
            className="relative max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden border border-white/20 shadow-2xl cedar-modal-anim p-2 bg-black/60"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsHeroZoomed(false)}
              className="absolute top-5 right-5 z-20 p-3 rounded-full bg-black/70 hover:bg-black text-white border border-white/20 transition-all cursor-pointer"
              aria-label="Close zoomed image"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src="/images/cedar/hero-cedar-bonsai.jpg"
              alt="Japanese Cedar Bonsai Full 8K Resolution"
              className="w-full h-auto max-h-[82vh] object-contain rounded-2xl mx-auto"
            />
            <div className="p-3 text-center text-xs cedar-mono text-slate-300 flex items-center justify-between">
              <span className="font-semibold text-white">CEDAR ARCHITECTURAL SPECIMEN NO. 01</span>
              <span className="text-[11px] text-slate-400">Natural Travertine Pedestal // Deep Root Telemetry</span>
            </div>
          </div>
        </div>
      )}

      {/* ======================================================================= */}
      {/* FLOATING EXECUTIVE DOCK NAVBAR FOR DESKTOP                              */}
      {/* ======================================================================= */}
      <header
        className={`cedar-navbar ${
          isScrolled ? "py-2 sm:py-3" : "py-3 sm:py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="cedar-navbar-dock rounded-full px-4 sm:px-6 py-2 sm:py-2.5 backdrop-blur-xl flex items-center justify-between shadow-xl">
            {/* Logo with Green Cedar Tree Icon & Pro Badge */}
            <Link
              to="/portfolio/cedar-ux-consultant"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="flex items-center gap-3 group cursor-pointer select-none shrink-0"
            >
              <div className="w-10 h-10 rounded-2xl cedar-bg-card border cedar-border flex items-center justify-center p-2 shadow-inner group-hover:scale-108 transition-all duration-300">
                <img
                  src="/images/cedar/logo-tree.webp"
                  alt="Cedar UX Consultant Tree Icon"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col text-left leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-black tracking-wider cedar-heading-text uppercase">
                    CEDAR
                  </span>
                  <span className="text-[9px] font-mono px-1.5 py-0.5 rounded-full bg-[var(--c-accent)]/15 cedar-accent-text font-bold">
                    STUDIO
                  </span>
                </div>
                <span className="text-[9px] cedar-mono tracking-[0.22em] cedar-accent-text uppercase font-bold">
                  UX ADVISORY
                </span>
              </div>
            </Link>

            {/* Desktop Navigation: Segmented Floating Capsule */}
            <nav
              aria-label="Main Navigation"
              className="hidden lg:flex items-center cedar-nav-capsule shadow-inner"
            >
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative px-4 py-2 rounded-full text-[11px] cedar-mono uppercase tracking-wider font-semibold transition-all duration-300 cursor-pointer select-none flex items-center gap-1.5 ${
                      isActive
                        ? "bg-[var(--c-accent)] text-white shadow-md font-bold scale-[1.02]"
                        : "cedar-muted-text hover:cedar-heading-text hover:bg-[var(--c-surface)]/75"
                    }`}
                  >
                    <span className={`text-[9px] ${isActive ? "text-white/80" : "opacity-45"}`}>
                      0{idx + 1}
                    </span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </nav>

            

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl border cedar-border cedar-bg-surface cedar-body-text hover:cedar-accent-text"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-2 max-w-7xl mx-auto px-3 sm:px-6">
            <div className="border cedar-border cedar-bg-surface p-5 rounded-3xl space-y-2 text-xs cedar-mono uppercase tracking-wider text-left cedar-modal-anim shadow-2xl">
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-2xl text-left transition-all ${
                      isActive
                        ? "bg-[var(--c-accent)] text-white font-bold"
                        : "cedar-muted-text hover:cedar-bg-card"
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <span className="text-[10px] opacity-60">0{idx + 1}</span>
                      <span>{item.label}</span>
                    </span>
                    {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
                  </button>
                );
              })}
              <div className="pt-3 border-t cedar-border">
                <button
                  onClick={() => scrollToSection("inquire")}
                  className="w-full py-3.5 rounded-2xl cedar-btn-primary text-center text-xs"
                >
                  Book Strategy Call
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for floating navbar */}
      <div className="h-20 sm:h-24" />

      {/* ======================================================================= */}
      {/* HERO SECTION WITH EXPANSIVE, GRAND HERO ARTWORK                         */}
      {/* ======================================================================= */}
      <section className="relative z-10 pt-4 pb-16 sm:pt-8 sm:pb-24 overflow-hidden cedar-bg-main">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-center">
            {/* Left Content Column (5 Cols) */}
            <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full cedar-bg-surface border cedar-border text-xs cedar-mono shadow-sm">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 cedar-pulse-dot" />
                <span className="font-semibold cedar-heading-text">EXECUTIVE PRODUCT DESIGN &amp; UX STRATEGY</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-black cedar-heading-text cedar-serif leading-[1.06] tracking-tight uppercase">
                GROWING PRODUCT VALUE <br />
                <span className="cedar-accent-text italic font-normal">FROM THE ROOT UP</span>
              </h1>

              {/* Subhead Narrative */}
              <p className="text-sm sm:text-base lg:text-base xl:text-lg cedar-muted-text font-normal leading-relaxed max-w-xl mx-auto lg:mx-0">
                We partner with high-growth SaaS, FinTech, and Enterprise leaders to diagnose friction, re-architect user ecosystems, and deliver validated metric lift. Zero design fluff.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => scrollToSection("work")}
                  className="w-full sm:w-auto px-8 py-4 rounded-full cedar-btn-primary text-xs cursor-pointer flex items-center justify-center gap-2 shadow-xl"
                >
                  <span>Explore Selected Work</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => scrollToSection("process")}
                  className="w-full sm:w-auto px-7 py-4 rounded-full cedar-btn-secondary text-xs cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>The Cedar Method</span>
                  <Compass className="w-4 h-4" />
                </button>
              </div>

              {/* Proof Metric Highlights */}
              <div className="pt-6 grid grid-cols-3 gap-4 border-t cedar-border text-left">
                <div>
                  <div className="text-2xl sm:text-3xl font-black cedar-accent-text cedar-serif">
                    $10M+
                  </div>
                  <div className="text-[11px] cedar-mono cedar-muted-text uppercase tracking-wider font-semibold">
                    Client Value Unlocked
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black cedar-accent-text cedar-serif">
                    +45%
                  </div>
                  <div className="text-[11px] cedar-mono cedar-muted-text uppercase tracking-wider font-semibold">
                    Avg. Conversion Lift
                  </div>
                </div>
                <div>
                  <div className="text-2xl sm:text-3xl font-black cedar-accent-text cedar-serif">
                    50+
                  </div>
                  <div className="text-[11px] cedar-mono cedar-muted-text uppercase tracking-wider font-semibold">
                    Shipped Core Products
                  </div>
                </div>
              </div>
            </div>

            {/* Right Artwork Column: GRAND ENLARGED HERO VISUAL (7 Cols) */}
            <div className="lg:col-span-7 relative flex items-center justify-center">
              <div className="cedar-hero-grand-card relative w-full p-3 sm:p-4 group">
                <div className="rounded-2xl overflow-hidden relative aspect-[16/11] sm:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/11] w-full min-h-[380px] sm:min-h-[480px] lg:min-h-[540px] xl:min-h-[600px]">
                  <img
                    src="/images/cedar/hero-cedar-bonsai.jpg"
                    alt="Cedar Bonsai with Sculptural Deep Roots"
                    className="w-full h-full object-cover rounded-2xl group-hover:scale-104 transition-transform duration-700 cursor-pointer"
                    onClick={() => setIsHeroZoomed(true)}
                  />

                  {/* Gradient Depth Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15 pointer-events-none" />

                  {/* Floating Badges Across the Large Visual */}
                  <div className="absolute top-4 left-4 px-3.5 py-2 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] cedar-mono flex items-center gap-2 border border-white/20 shadow-lg">
                    <Brain className="w-3.5 h-3.5 cedar-accent-text" />
                    <span className="font-semibold">Holistic Ecosystem Architecture</span>
                  </div>

                  <div
                    onClick={() => setIsHeroZoomed(true)}
                    className="absolute top-4 right-4 px-3.5 py-2 rounded-full bg-black/70 hover:bg-black/90 backdrop-blur-md text-white text-[11px] cedar-mono flex items-center gap-2 border border-white/20 shadow-lg cursor-pointer transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span className="font-semibold">Click to Zoom 8K</span>
                  </div>

                  <div className="absolute bottom-4 left-4 px-3.5 py-2 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] cedar-mono flex items-center gap-2 border border-white/20 shadow-lg">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span className="font-semibold">Rooted in Behavioral Telemetry</span>
                  </div>

                  <div className="absolute bottom-4 right-4 hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full bg-black/70 backdrop-blur-md text-white text-[11px] cedar-mono border border-white/20 shadow-lg">
                    <TrendingUp className="w-3.5 h-3.5 cedar-accent-text" />
                    <span className="font-semibold">+45% Avg. Client Metric Lift</span>
                  </div>
                </div>

                {/* Museum Exhibition Placard at Base */}
                <div className="mt-3 px-3.5 py-2.5 rounded-xl cedar-bg-card border cedar-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1 text-[11px] cedar-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--c-accent)]" />
                    <span className="cedar-heading-text uppercase tracking-widest font-bold">
                      CEDAR ARTIFACT NO. 01 — LIVING SYSTEM &amp; TACTILE FOUNDATION
                    </span>
                  </div>
                  <span className="cedar-accent-text font-bold">STUDIO ARCHIVE &bull; 8K RESOLUTION</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* STRATEGIC PILLARS / POSITIONING SECTION                                */}
      {/* 3 3D Sculpture Cards with High-Res Bespoke Imagery                     */}
      {/* ======================================================================= */}
      <section
        id="positioning"
        className="relative z-10 py-16 sm:py-24 cedar-bg-contrast cedar-contrast-text border-t cedar-contrast-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs cedar-mono uppercase tracking-[0.25em] cedar-accent-text font-bold block mb-2">
            HOW WE THINK &amp; OPERATE
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase cedar-serif mb-4 text-white">
            THREE STRATEGIC PILLARS
          </h2>
          <p className="text-xs sm:text-sm cedar-contrast-muted max-w-2xl mx-auto leading-relaxed mb-12 sm:mb-16 font-light">
            We don't do superficial cosmetic facelifts. We anchor product design in system longevity, telemetry, and business growth.
          </p>

          {/* 3 Illustrated Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 items-stretch text-left">
            {/* Pillar 01 */}
            <div className="cedar-card-interactive rounded-3xl overflow-hidden cedar-bg-contrast-card border cedar-contrast-border p-6 flex flex-col justify-between shadow-xl">
              <div>
                <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10 mb-6 aspect-[4/3] relative">
                  <img
                    src="/images/cedar/pillar-ecosystem.jpg"
                    alt="Ecosystem Thinking 3D Sculpture"
                    className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] cedar-mono text-white font-bold border border-white/15">
                    PILLAR 01
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold cedar-serif uppercase tracking-wider text-white mb-2.5">
                  Ecosystem Thinking
                </h3>
                <p className="text-xs sm:text-sm cedar-contrast-muted leading-relaxed font-light">
                  A holistic perspective that aligns product architecture, business viability, and technical feasibility into unified, resilient systems.
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] cedar-mono cedar-accent-text font-bold">
                <span>ORGANIC SYSTEMS ALIGNMENT</span>
                <span>LEARN MORE &rarr;</span>
              </div>
            </div>

            {/* Pillar 02 */}
            <div className="cedar-card-interactive rounded-3xl overflow-hidden cedar-bg-contrast-card border cedar-contrast-border p-6 flex flex-col justify-between shadow-xl">
              <div>
                <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10 mb-6 aspect-[4/3] relative">
                  <img
                    src="/images/cedar/pillar-empathy.jpg"
                    alt="Data-Driven Empathy 3D Sculpture"
                    className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] cedar-mono text-white font-bold border border-white/15">
                    PILLAR 02
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold cedar-serif uppercase tracking-wider text-white mb-2.5">
                  Data-Driven Empathy
                </h3>
                <p className="text-xs sm:text-sm cedar-contrast-muted leading-relaxed font-light">
                  Bridging quantitative behavioral telemetry with qualitative user intimacy to uncover foundational root causes and eliminate decision bias.
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] cedar-mono cedar-accent-text font-bold">
                <span>BEHAVIORAL TELEMETRY</span>
                <span>LEARN MORE &rarr;</span>
              </div>
            </div>

            {/* Pillar 03 */}
            <div className="cedar-card-interactive rounded-3xl overflow-hidden cedar-bg-contrast-card border cedar-contrast-border p-6 flex flex-col justify-between shadow-xl">
              <div>
                <div className="rounded-2xl overflow-hidden bg-black/40 border border-white/10 mb-6 aspect-[4/3] relative">
                  <img
                    src="/images/cedar/pillar-strategy.jpg"
                    alt="Actionable Strategy 3D Sculpture"
                    className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] cedar-mono text-white font-bold border border-white/15">
                    PILLAR 03
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl font-bold cedar-serif uppercase tracking-wider text-white mb-2.5">
                  Actionable Strategy
                </h3>
                <p className="text-xs sm:text-sm cedar-contrast-muted leading-relaxed font-light">
                  Pragmatic execution roadmaps with clear sprint milestones that engineering teams love to build and executive stakeholders can accurately measure.
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] cedar-mono cedar-accent-text font-bold">
                <span>VELOCITY ENGINE</span>
                <span>LEARN MORE &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* SELECTED WORK SECTION                                                   */}
      {/* 4 Case Studies with Category Filter, High-Res Mockups & Modal           */}
      {/* ======================================================================= */}
      <section
        id="work"
        className="relative z-10 py-16 sm:py-24 cedar-bg-main cedar-body-text border-t cedar-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs cedar-mono uppercase tracking-[0.25em] cedar-accent-text font-bold block mb-2">
            PROVEN TRACK RECORD
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase cedar-serif mb-4 cedar-heading-text">
            SELECTED CASE STUDIES
          </h2>
          <p className="text-xs sm:text-sm cedar-muted-text max-w-2xl mx-auto leading-relaxed mb-10 font-light">
            Deep-dive case studies showcasing how deliberate UX architecture unlocked monumental conversion lifts, churn reduction, and enterprise market traction.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {["All", "FinTech", "Cloud SaaS", "HealthTech", "AI Systems"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs cedar-mono uppercase tracking-wider transition-all cursor-pointer border ${
                  selectedCategory === cat
                    ? "cedar-btn-primary border-transparent"
                    : "cedar-bg-surface cedar-muted-text cedar-border hover:cedar-heading-text"
                }`}
              >
                {cat} {cat === "All" ? `(${caseStudies.length})` : ""}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="space-y-8 max-w-6xl mx-auto">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                className="cedar-card-interactive rounded-3xl cedar-bg-surface border cedar-border p-6 sm:p-9 text-left shadow-lg"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Case Meta & Narrative */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-xs cedar-mono uppercase tracking-widest cedar-accent-text font-bold">
                        {study.category}
                      </span>
                      <span className="cedar-muted-text text-xs">/</span>
                      <span className="text-xs cedar-mono uppercase tracking-wider cedar-muted-text">
                        {study.client} &bull; {study.duration}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-black cedar-heading-text cedar-serif leading-tight">
                      {study.title}
                    </h3>

                    <p className="text-xs sm:text-sm cedar-muted-text leading-relaxed font-light">
                      {study.overview}
                    </p>

                    {/* Metric Callout Card */}
                    <div className="p-4 rounded-2xl cedar-bg-card border cedar-border flex items-center justify-between">
                      <div>
                        <div className="text-2xl sm:text-3xl font-black cedar-accent-text cedar-serif">
                          {study.metric}
                        </div>
                        <div className="text-[11px] cedar-mono cedar-muted-text font-semibold">
                          {study.metricLabel}
                        </div>
                      </div>
                      <Award className="w-8 h-8 cedar-accent-text opacity-75" />
                    </div>

                    <div className="pt-2 flex items-center gap-3">
                      <button
                        onClick={() => setSelectedCaseStudy(study)}
                        className="px-6 py-3 rounded-full cedar-btn-primary text-xs cursor-pointer inline-flex items-center gap-2"
                      >
                        <span>Examine Case Study</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Dashboard Mockup */}
                  <div
                    onClick={() => setSelectedCaseStudy(study)}
                    className="lg:col-span-7 relative rounded-2xl overflow-hidden cedar-bg-card border cedar-border cursor-pointer group shadow-xl"
                  >
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-auto object-cover group-hover:scale-104 transition-transform duration-600 max-h-[380px]"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
                    <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] cedar-mono text-white flex items-center gap-1.5 opacity-90 group-hover:opacity-100">
                      <span>Click to view breakdown</span>
                      <ChevronRight className="w-3 h-3 cedar-accent-text" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* THE PROCESS SECTION: THE CEDAR METHOD                                   */}
      {/* 4 Interactive Phases with Timeline & Deliverables Switcher             */}
      {/* ======================================================================= */}
      <section
        id="process"
        className="relative z-10 py-16 sm:py-24 cedar-bg-card cedar-body-text border-t cedar-border"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs cedar-mono uppercase tracking-[0.25em] cedar-accent-text font-bold block mb-2">
            STRUCTURED EXECUTION
          </span>

          <h2 className="text-2xl sm:text-4xl font-black cedar-serif uppercase tracking-tight mb-4 cedar-heading-text">
            THE CEDAR METHOD
          </h2>

          <p className="text-xs sm:text-sm cedar-muted-text max-w-2xl mx-auto leading-relaxed mb-12 sm:mb-16 font-light">
            A repeatable 4-phase strategic engagement model engineered to unearth root causes, validate prototypes with real users, and ensure zero-friction engineering handoff.
          </p>

          {/* 4 Connected Step Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, idx) => {
              const isSelected = activeProcessStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`p-6 rounded-3xl transition-all cursor-pointer text-center flex flex-col items-center justify-between border ${
                    isSelected
                      ? "cedar-bg-surface border-[var(--c-accent)] shadow-2xl scale-102 ring-2 ring-[var(--c-accent)]/30"
                      : "cedar-bg-surface/60 cedar-border hover:cedar-bg-surface hover:border-[var(--c-accent)]"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    {/* Illustrated Icon with Root */}
                    <div className="w-20 h-20 mb-4 flex items-center justify-center p-2 rounded-2xl cedar-bg-card border cedar-border">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-contain hover:scale-110 transition-transform"
                      />
                    </div>

                    <div className="text-[10px] cedar-mono cedar-accent-text font-bold mb-1">
                      PHASE {step.stepNumber} &bull; {step.timeline}
                    </div>

                    <h3 className="text-sm font-black tracking-wider uppercase cedar-serif cedar-heading-text mb-1">
                      {step.title}
                    </h3>

                    <div className="text-xs cedar-mono cedar-muted-text font-semibold mb-2">
                      {step.subtitle}
                    </div>

                    <p className="text-xs font-normal leading-relaxed cedar-muted-text line-clamp-3">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t cedar-border w-full flex items-center justify-center gap-1.5 text-[10px] cedar-mono tracking-widest cedar-accent-text font-bold">
                    <span>{isSelected ? "ACTIVE MILESTONE" : "CLICK TO EXPAND"}</span>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Phase Deep-Dive Card */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl cedar-bg-surface border cedar-border max-w-4xl mx-auto text-left shadow-xl cedar-modal-anim">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b cedar-border mb-4 text-xs cedar-mono">
              <span className="uppercase tracking-widest cedar-heading-text font-bold">
                PHASE {processSteps[activeProcessStep].stepNumber} // {processSteps[activeProcessStep].title}: {processSteps[activeProcessStep].subtitle}
              </span>
              <span className="cedar-accent-text font-bold">
                {processSteps[activeProcessStep].timeline}
              </span>
            </div>

            <p className="text-sm cedar-muted-text leading-relaxed font-light mb-6">
              {processSteps[activeProcessStep].description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <span className="text-[11px] cedar-mono uppercase tracking-wider cedar-heading-text font-bold block">
                  Core Sprinted Activities:
                </span>
                {processSteps[activeProcessStep].activities.map((act, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs cedar-muted-text">
                    <CheckCircle2 className="w-4 h-4 cedar-accent-text shrink-0" />
                    <span>{act}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 rounded-2xl cedar-bg-card border cedar-border flex flex-col justify-center">
                <span className="text-[11px] cedar-mono uppercase tracking-wider cedar-accent-text font-bold mb-1">
                  Guaranteed Milestone Deliverable:
                </span>
                <span className="text-xs sm:text-sm font-bold cedar-heading-text">
                  {processSteps[activeProcessStep].deliverable}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* INTERACTIVE ROI / IMPACT ESTIMATOR                                      */}
      {/* Strategic Value Calculator for Ambitious Product Leaders               */}
      {/* ======================================================================= */}
      <section
        id="calculator"
        className="relative z-10 py-16 sm:py-24 cedar-bg-contrast cedar-contrast-text border-t cedar-contrast-border"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs cedar-mono uppercase tracking-[0.25em] cedar-accent-text font-bold block mb-2">
            MEASURABLE BUSINESS IMPACT
          </span>
          <h2 className="text-2xl sm:text-4xl font-black uppercase cedar-serif mb-4 text-white">
            PROJECTED UX ROI ESTIMATOR
          </h2>
          <p className="text-xs sm:text-sm cedar-contrast-muted max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            See how targeted UX architecture and onboarding optimization translate directly to enterprise valuation and bottom-line revenue.
          </p>

          <div className="rounded-3xl cedar-bg-contrast-card border cedar-contrast-border p-6 sm:p-10 max-w-4xl mx-auto shadow-2xl text-left">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Controls */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <label className="text-xs cedar-mono uppercase tracking-wider text-white font-bold block mb-3">
                    1. Select Product Scale
                  </label>
                  <div className="grid grid-cols-3 gap-2.5">
                    {[
                      { id: "seed", label: "Seed / Series A" },
                      { id: "growth", label: "Growth SaaS" },
                      { id: "enterprise", label: "Enterprise Core" },
                    ].map((t) => (
                      <button
                        key={t.id}
                        type="button"
                        onClick={() => setCalcTier(t.id as any)}
                        className={`p-3 rounded-2xl text-xs cedar-mono font-semibold transition-all cursor-pointer border text-center ${
                          calcTier === t.id
                            ? "bg-[var(--c-accent)] text-white border-transparent shadow-lg font-bold"
                            : "bg-black/30 border-white/10 text-slate-300 hover:border-white/25"
                        }`}
                      >
                        {t.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs cedar-mono uppercase tracking-wider text-white font-bold">
                      2. Monthly Active Users / Accounts:
                    </label>
                    <span className="text-xs cedar-mono cedar-accent-text font-bold">
                      {calcUsers.toLocaleString()} Users
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    value={calcUsers}
                    onChange={(e) => setCalcUsers(Number(e.target.value))}
                    className="w-full accent-[var(--c-accent)] cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] cedar-mono text-slate-400 mt-1">
                    <span>5,000</span>
                    <span>50,000</span>
                    <span>100,000+</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-black/25 border border-white/10 text-xs cedar-contrast-muted leading-relaxed font-light">
                  Estimates are based on historical client telemetry benchmarks across our B2B SaaS and FinTech client portfolio engagements over the last 36 months.
                </div>
              </div>

              {/* Outputs */}
              <div className="lg:col-span-5 p-6 rounded-2xl bg-black/40 border border-white/15 space-y-5 text-center">
                <span className="text-[11px] cedar-mono uppercase tracking-widest text-slate-400 font-bold block">
                  Projected Engagement Impact
                </span>

                <div>
                  <div className="text-3xl sm:text-4xl font-black cedar-accent-text cedar-serif">
                    {calculatedLift.rate}
                  </div>
                  <div className="text-xs cedar-mono text-slate-300 mt-1">
                    Estimated Conversion / Retention Lift
                  </div>
                </div>

                <div className="pt-3 border-t border-white/10">
                  <div className="text-2xl sm:text-3xl font-black text-white cedar-serif">
                    {calculatedLift.estAnnualValue}
                  </div>
                  <div className="text-xs cedar-mono cedar-accent-text font-semibold mt-1">
                    Projected Annualized Value Created
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => scrollToSection("inquire")}
                    className="w-full py-3 rounded-full cedar-btn-primary text-xs cursor-pointer"
                  >
                    Validate Your Metrics With Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* CREDIBLE OUTCOMES & TESTIMONIALS SECTION                               */}
      {/* Partner Strip + Executive Testimonial Slider                           */}
      {/* ======================================================================= */}
      <section
        id="impact"
        className="relative z-10 py-16 sm:py-24 cedar-bg-main cedar-body-text border-t cedar-border text-center"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs cedar-mono uppercase tracking-[0.25em] cedar-accent-text font-bold block mb-2">
            VALIDATED SOCIAL PROOF
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight uppercase cedar-serif mb-4 cedar-heading-text">
            CREDIBLE OUTCOMES
          </h2>
          <p className="text-xs sm:text-sm cedar-muted-text max-w-2xl mx-auto leading-relaxed mb-12 font-light">
            Trusted by venture-backed founders and Fortune 500 product leaders to redesign flagship customer journeys.
          </p>

          {/* Client Logos Strip */}
          <div className="max-w-3xl mx-auto mb-14 p-4 rounded-2xl cedar-bg-surface border cedar-border shadow-sm">
            <img
              src="/images/cedar/client-logos.webp"
              alt="Client Logos: Stripe, Google, Medium, Impact, Growth"
              className="w-full h-auto object-contain mx-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Testimonial Card with Switcher */}
          <div className="max-w-4xl mx-auto rounded-3xl cedar-bg-contrast cedar-contrast-text p-6 sm:p-10 shadow-2xl text-left relative overflow-hidden mb-14 border cedar-contrast-border">
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-8">
              {/* Executive Photo Avatar */}
              <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl overflow-hidden shrink-0 border-2 border-[var(--c-accent)] shadow-2xl bg-black/40">
                <img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote Content */}
              <div className="space-y-3 flex-1 text-center md:text-left">
                <p className="text-base sm:text-xl font-medium cedar-serif leading-snug text-white">
                  <span className="cedar-accent-text text-2xl font-serif mr-1">“</span>
                  {testimonials[activeTestimonial].quote}
                  <span className="cedar-accent-text text-2xl font-serif ml-1">”</span>
                </p>

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <div className="text-xs cedar-mono font-bold cedar-accent-text uppercase">
                      {testimonials[activeTestimonial].name} &bull; {testimonials[activeTestimonial].role}
                    </div>
                    <div className="text-[11px] cedar-mono text-slate-300">
                      {testimonials[activeTestimonial].company}
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-black/40 border border-white/10 text-xs cedar-mono text-emerald-300 font-bold self-center sm:self-auto">
                    {testimonials[activeTestimonial].metric}
                  </span>
                </div>
              </div>
            </div>

            {/* Testimonial Selectors */}
            <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-center gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-2.5 rounded-full transition-all cursor-pointer ${
                    activeTestimonial === i
                      ? "w-8 bg-[var(--c-accent)]"
                      : "w-2.5 bg-white/25 hover:bg-white/50"
                  }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* 3 Impact Stat Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-8 rounded-3xl border cedar-border cedar-bg-surface shadow-sm flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl font-black cedar-heading-text cedar-serif">
                $10M+
              </div>
              <div className="text-xs cedar-mono uppercase tracking-wider cedar-muted-text mt-1 font-semibold">
                Revenue Generated
              </div>
            </div>

            <div className="p-8 rounded-3xl border cedar-border cedar-bg-surface shadow-sm flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl font-black cedar-heading-text cedar-serif">
                50+
              </div>
              <div className="text-xs cedar-mono uppercase tracking-wider cedar-muted-text mt-1 font-semibold">
                Core Features Shipped
              </div>
            </div>

            <div className="p-8 rounded-3xl border cedar-border cedar-bg-surface shadow-sm flex flex-col items-center justify-center">
              <div className="text-3xl sm:text-4xl font-black cedar-heading-text cedar-serif">
                95%
              </div>
              <div className="text-xs cedar-mono uppercase tracking-wider cedar-muted-text mt-1 font-semibold">
                Stakeholder NPS
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* CONFIDENT INQUIRY PATH                                                  */}
      {/* Interactive Project Builder Form                                        */}
      {/* ======================================================================= */}
      <section
        id="inquire"
        className="relative z-10 py-16 sm:py-24 cedar-bg-contrast cedar-contrast-text border-t cedar-contrast-border text-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs cedar-mono uppercase tracking-[0.25em] cedar-accent-text font-bold block mb-2">
            CONFIDENT INQUIRY PATH
          </span>

          <h2 className="text-2xl sm:text-4xl font-black cedar-serif uppercase tracking-tight mb-3 text-white">
            READY TO GROW YOUR <br />
            PRODUCT'S IMPACT?
          </h2>

          <p className="text-xs sm:text-sm cedar-contrast-muted max-w-xl mx-auto leading-relaxed mb-10 font-light">
            We accept a maximum of 2 strategic partner engagements per quarter to ensure principal-level focus and extreme craftsmanship.
          </p>

          {/* Form */}
          {formSubmitted ? (
            <div className="p-8 sm:p-12 rounded-3xl cedar-bg-contrast-card border cedar-contrast-border shadow-2xl space-y-5 cedar-modal-anim max-w-xl mx-auto">
              <CheckCircle2 className="w-14 h-14 cedar-accent-text mx-auto" />
              <h3 className="text-2xl sm:text-3xl font-bold cedar-serif text-white">
                Inquiry Received
              </h3>
              <p className="text-xs sm:text-sm cedar-mono cedar-contrast-muted max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-white">{formData.name || "partner"}</strong>. We have received your project details for <strong className="text-white">{formData.company || "your team"}</strong>. Our principal strategist will review your scope and respond to <strong className="text-white">{formData.email}</strong> within 24 hours.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      budget: "$50k - $100k",
                      timeline: "Next 30 Days",
                      projectType: "Full Product UX Redesign",
                      message: "",
                    });
                  }}
                  className="px-8 py-3 rounded-full cedar-btn-primary text-xs cursor-pointer"
                >
                  Submit Another Request
                </button>
              </div>
            </div>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className="space-y-5 text-left max-w-2xl mx-auto cedar-bg-contrast-card p-6 sm:p-9 rounded-3xl border cedar-contrast-border shadow-2xl"
            >
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] cedar-mono uppercase tracking-wider text-slate-300 font-bold block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jessica Sterling"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full rounded-xl bg-black/40 text-white border border-white/15 px-4 py-3 text-xs placeholder-slate-500 focus:outline-none focus:border-[var(--c-accent)]"
                  />
                </div>
                <div>
                  <label className="text-[11px] cedar-mono uppercase tracking-wider text-slate-300 font-bold block mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jessica@company.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full rounded-xl bg-black/40 text-white border border-white/15 px-4 py-3 text-xs placeholder-slate-500 focus:outline-none focus:border-[var(--c-accent)]"
                  />
                </div>
              </div>

              {/* Row 2: Company & Project Scope */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[11px] cedar-mono uppercase tracking-wider text-slate-300 font-bold block mb-1.5">
                    Company / Organization
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. NextWave Labs"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                    className="w-full rounded-xl bg-black/40 text-white border border-white/15 px-4 py-3 text-xs placeholder-slate-500 focus:outline-none focus:border-[var(--c-accent)]"
                  />
                </div>
                <div>
                  <label className="text-[11px] cedar-mono uppercase tracking-wider text-slate-300 font-bold block mb-1.5">
                    Engagement Focus
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) =>
                      setFormData({ ...formData, projectType: e.target.value })
                    }
                    className="w-full rounded-xl bg-black/40 text-white border border-white/15 px-4 py-3 text-xs focus:outline-none focus:border-[var(--c-accent)]"
                  >
                    <option value="Full Product UX Redesign" className="bg-[#16261c] text-white">Full Product UX Redesign</option>
                    <option value="Onboarding & Conversion Optimization" className="bg-[#16261c] text-white">Onboarding &amp; Conversion Optimization</option>
                    <option value="Design System & Token Architecture" className="bg-[#16261c] text-white">Design System &amp; Token Architecture</option>
                    <option value="Strategic Root-Cause Audit" className="bg-[#16261c] text-white">Strategic Root-Cause Audit</option>
                    <option value="AI Workflow & Canvas UX" className="bg-[#16261c] text-white">AI Workflow &amp; Canvas UX</option>
                  </select>
                </div>
              </div>

              {/* Budget Range Chips */}
              <div>
                <label className="text-[11px] cedar-mono uppercase tracking-wider text-slate-300 font-bold block mb-2">
                  Expected Capital Allocation (USD)
                </label>
                <div className="grid grid-cols-3 gap-2.5">
                  {["$25k - $50k", "$50k - $100k", "$100k+"].map((b) => (
                    <button
                      key={b}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: b })}
                      className={`py-2.5 rounded-xl text-xs cedar-mono transition-all cursor-pointer border text-center ${
                        formData.budget === b
                          ? "bg-[var(--c-accent)] text-white border-transparent font-bold"
                          : "bg-black/30 border-white/10 text-slate-300 hover:border-white/25"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="text-[11px] cedar-mono uppercase tracking-wider text-slate-300 font-bold block mb-1.5">
                  Project Brief &amp; Goals *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your product, key friction points, and target launch timeline..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-xl bg-black/40 text-white border border-white/15 px-4 py-3 text-xs placeholder-slate-500 focus:outline-none focus:border-[var(--c-accent)] resize-none"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-full cedar-btn-primary text-xs cursor-pointer shadow-xl flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>PROCESSING YOUR BRIEF...</span>
                  ) : (
                    <>
                      <span>Submit Strategic Inquiry</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>

              <div className="text-center text-[10px] cedar-mono text-slate-400">
                🔒 Protected by strict mutual non-disclosure (NDA) standards.
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ======================================================================= */}
      {/* FOOTER                                                                  */}
      {/* ======================================================================= */}
      <footer className="py-10 cedar-bg-main cedar-body-text text-xs cedar-mono border-t cedar-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg cedar-bg-surface border cedar-border flex items-center justify-center p-1">
              <img
                src="/images/cedar/logo-tree.webp"
                alt="Cedar Tree"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col text-left leading-tight">
              <span className="font-bold cedar-heading-text">CEDAR UX CONSULTANT</span>
              <span className="text-[10px] cedar-muted-text">Strategic Product Design &bull; Cultivate Design</span>
            </div>
          </div>

          <div className="flex items-center gap-6 cedar-muted-text">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:cedar-accent-text transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noreferrer"
              className="hover:cedar-accent-text transition-colors"
              aria-label="Medium"
            >
              <MediumIcon className="w-4 h-4" />
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noreferrer"
              className="hover:cedar-accent-text transition-colors"
              aria-label="Portfolio"
            >
              <GlobeIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="cedar-muted-text text-[11px] text-center md:text-right">
            <span>&copy; {new Date().getFullYear()} Cedar UX Consulting. All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CedarUXConsultant;
