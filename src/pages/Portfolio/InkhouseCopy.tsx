import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  X,
  Menu,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Brain,
  BarChart3,
  Microscope,
  Network,
  FileEdit,
  GitCompare,
  PieChart,
  DollarSign,
  Sparkles,
  ChevronRight,
  Quote,
  Send,
} from "lucide-react";
import "./InkhouseCopy.css";

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

function TwitterIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

// -----------------------------------------------------------------------------
// Interactive Case Study Modal
// -----------------------------------------------------------------------------
interface CaseStudyModalProps {
  study: {
    tag: string;
    title: string;
    client: string;
    image: string;
    metrics: string[];
    overview: string;
    beforeCopy: string;
    afterCopy: string;
    breakthrough: string;
    deliverables: string[];
  } | null;
  onClose: () => void;
}

function CaseStudyModal({ study, onClose }: CaseStudyModalProps) {
  if (!study) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md">
      <div
        className="w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl border border-slate-700 bg-[#162126] text-white p-6 sm:p-8 shadow-2xl text-left inkhouse-modal-anim"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between pb-4 border-b border-slate-700">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#c6673f] font-bold block mb-1">
              {study.tag} // {study.client}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold inkhouse-serif leading-tight">
              {study.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Visual Preview */}
        <div className="my-6 rounded-2xl overflow-hidden border border-slate-700 bg-slate-950">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-auto object-cover max-h-80"
          />
        </div>

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {study.metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-3 rounded-xl bg-[#1d2b32] border border-slate-700 text-center"
            >
              <span className="text-xs sm:text-sm font-bold text-[#c6673f] block">
                {m}
              </span>
            </div>
          ))}
        </div>

        {/* Before vs After Rewrite Teardown */}
        <div className="my-6 space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Psychological Copy Rewrite Teardown
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-rose-950/30 border border-rose-900/50">
              <span className="font-mono text-rose-400 font-bold uppercase block mb-1.5">
                ✕ Old Generic Copy
              </span>
              <p className="text-slate-300 leading-relaxed italic">
                "{study.beforeCopy}"
              </p>
            </div>
            <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-900/50">
              <span className="font-mono text-emerald-400 font-bold uppercase block mb-1.5">
                ✓ Inkhouse Conversion Copy
              </span>
              <p className="text-slate-200 leading-relaxed font-medium">
                "{study.afterCopy}"
              </p>
            </div>
          </div>
        </div>

        {/* Key Strategic Breakthrough */}
        <div className="p-4 rounded-xl bg-[#1d2b32] border border-slate-700 mb-6">
          <span className="text-xs font-mono uppercase text-[#c6673f] font-bold block mb-1">
            Conversion Architecture &amp; Strategy
          </span>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            {study.breakthrough}
          </p>
        </div>

        <div className="pt-4 border-t border-slate-700 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#c6673f] hover:bg-[#b55832] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Main InkhouseCopy Component
// -----------------------------------------------------------------------------
export function InkhouseCopy() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("work");
  const [isScrolled, setIsScrolled] = useState(false);

  // Selected Case Study State
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<{
    tag: string;
    title: string;
    client: string;
    image: string;
    metrics: string[];
    overview: string;
    beforeCopy: string;
    afterCopy: string;
    breakthrough: string;
    deliverables: string[];
  } | null>(null);

  // Positioning Framework Drawer
  const [selectedPillar, setSelectedPillar] = useState<string | null>(null);

  // Active Process Step Details
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);

  // Active Testimonial Index
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Contact Form State
  const [budgetSlider, setBudgetSlider] = useState(12000);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "Website Copy Overhaul",
    budgetRange: "$10,000 - $25,000",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navItems = [
    { id: "work", label: "WORK" },
    { id: "philosophy", label: "PHILOSOPHY" },
    { id: "process", label: "PROCESS" },
    { id: "outcomes", label: "OUTCOMES" },
    { id: "contact", label: "CONTACT" },
  ];

  // Case Studies Data
  const caseStudies = [
    {
      id: "ecommerce",
      tag: "Case Study 1 (Ecommerce)",
      title: "REVITALIZING CHECKOUT FOR A GLOBAL BRAND.",
      client: "Meridian Luxury Goods",
      image: "/images/inkhouse/case-checkout.webp",
      metrics: ["+32% Conversion Rate", "AOV Up 18.5%", "Lower Cart Abandonment"],
      overview:
        "Redesigned the entire multi-step cart-to-checkout sequence for a high-volume international direct-to-consumer fashion label.",
      beforeCopy:
        "Proceed to secure payment. Review your order details below and enter your shipping information.",
      afterCopy:
        "Your tailored wardrobe is reserved for the next 15 minutes. Enjoy complimentary insured express shipping and 30-day effortless returns.",
      breakthrough:
        "Replaced dry bureaucratic friction microcopy with reassuring risk-reversal triggers, scarcity timers, and value-reinforcing order confirmations.",
      deliverables: ["Checkout Microcopy", "Cart Abandonment Sequences", "Post-Purchase Referral Emails"],
    },
    {
      id: "saas",
      tag: "Case Study 2 (SaaS)",
      title: "STREAMLINING A SAAS FREE-TRIAL FLOW.",
      client: "CloudPulse Analytics",
      image: "/images/inkhouse/case-saas.webp",
      metrics: ["+40.4% Signups", "Reduced Churn 24%", "Improved User Onboarding"],
      overview:
        "Overhauled the self-serve signup flow and onboarding empty states for an enterprise telemetry data platform.",
      beforeCopy:
        "Start your free 14-day trial today. No credit card required. Experience our modern analytics tool.",
      afterCopy:
        "See your first cluster latency metrics in under 90 seconds. Zero config required. Connect your AWS or GCP cluster with 1 click.",
      breakthrough:
        "Shifted value proposition from abstract product features to immediate Time-To-Value (TTV), driving engineers straight to the 'Aha!' moment.",
      deliverables: ["Product Tour Onboarding", "Pricing Table Copy", "Trial-to-Paid Nurture Drips"],
    },
    {
      id: "b2b",
      tag: "Case Study 3 (B2B)",
      title: "IGNITING B2B LEADS WITH NURTURE CAMPAIGNS.",
      client: "Vanguard Logistics",
      image: "/images/inkhouse/case-b2b.webp",
      metrics: ["Qualified Leads +65%", "Higher Response Rate", "Sales Team Alignment"],
      overview:
        "Engineered an account-based email campaign targeting Fortune 500 Chief Supply Chain Officers.",
      beforeCopy:
        "Our logistics platform provides cutting-edge optimization for your global fleet. Schedule a demo with our representatives.",
      afterCopy:
        "How 3 major pharmaceutical distributors eliminated port congestion demurrage penalties by 42% in Q3. Read the 4-minute field teardown.",
      breakthrough:
        "Replaced generic sales pitches with peer benchmarking data and proprietary logistics risk models that C-level buyers couldn't ignore.",
      deliverables: ["Cold Outreach Angles", "Whitepaper Executive Summaries", "Sales Discovery Scripts"],
    },
  ];

  // Positioning Frameworks
  const pillars = [
    {
      id: "insight",
      title: "HUMAN INSIGHT",
      subtitle: "Empathy-Driven Messaging",
      image: "/images/inkhouse/pillar-human-2x.webp",
      icon: Brain,
      framework:
        "Deep qualitative customer discovery, VOC (Voice of Customer) mining, and pain-point categorization to understand why your buyers hesitate before they buy.",
      bullets: ["Customer Interview Transcripts", "Objection Mapping Matrices", "Emotional Trigger Profiling"],
    },
    {
      id: "strategy",
      title: "DATA-BACKED STRATEGY",
      subtitle: "Conversion Rate Optimization",
      image: "/images/inkhouse/pillar-data-2x.webp",
      icon: BarChart3,
      framework:
        "Rigorous quantitative A/B testing methodologies, analytics heatmaps, and funnel drop-off analytics that turn copywriting into an empirical science.",
      bullets: ["A/B Headline Hypotheses", "Funnel Microcopy Optimization", "Scroll Depth & Click Audits"],
    },
    {
      id: "narrative",
      title: "COMPELLING NARRATIVE",
      subtitle: "Brand Voice & Storytelling",
      image: "/images/inkhouse/pillar-narrative-2x.webp",
      icon: TrendingUp,
      framework:
        "A distinctive, defensible brand voice that commands attention, differentiates from commodity competitors, and builds fierce customer loyalty.",
      bullets: ["Brand Voice Bibles", "Narrative Arc Prototypes", "Editorial Cadence Guidelines"],
    },
  ];

  // The Process Steps
  const processSteps = [
    {
      title: "DISCOVER & DEEP DIVE",
      color: "#19383e",
      textColor: "text-white",
      image: "/images/inkhouse/process-card-1-2x.webp",
      icon: Microscope,
      tagline: "Uncovering Customer Truths",
      desc: "Comprehensive customer interviews, VOC review mining, competitor positioning teardowns, and historical sales call audits.",
      deliverable: "Positioning Brief & Objection Matrix",
    },
    {
      title: "MAP THE CUSTOMER JOURNEY",
      color: "#729796",
      textColor: "text-white",
      image: "/images/inkhouse/process-card-2-2x.webp",
      icon: Network,
      tagline: "Tracing Buying Mindsets",
      desc: "Pinpointing every touchpoint from unaware prospect to eager repeat purchaser, aligning narrative velocity with buyer intent.",
      deliverable: "Journey Touchpoint Blueprint",
    },
    {
      title: "STRATEGIZE & WRITE",
      color: "#fbf8f3",
      textColor: "text-slate-900",
      borderColor: "border-slate-300",
      image: "/images/inkhouse/process-card-3-2x.webp",
      icon: FileEdit,
      tagline: "High-Fidelity Copywriting",
      desc: "Drafting punchy headlines, objection-crushing body copy, and irresistible CTAs structured on proven psychological frameworks.",
      deliverable: "Full Wireframe Copy Deck",
    },
    {
      title: "TEST & OPTIMIZE",
      color: "#ffffff",
      textColor: "text-slate-900",
      borderColor: "border-slate-300",
      image: "/images/inkhouse/process-card-4-2x.webp",
      icon: GitCompare,
      tagline: "A/B Validation in Real Traffic",
      desc: "Deploying multi-variant split tests on hero headlines, CTA hooks, and risk-reversal guarantees to validate performance empirically.",
      deliverable: "Split-Test Results & Winning Variations",
    },
    {
      title: "ANALYZE & REPORT",
      color: "#e7decb",
      textColor: "text-slate-900",
      borderColor: "border-slate-300",
      image: "/images/inkhouse/process-card-5-2x.webp",
      icon: PieChart,
      tagline: "Measurable Revenue Accounting",
      desc: "Measuring bottom-line conversion lifts, average order value expansion, and customer lifetime value progression.",
      deliverable: "Executive Impact & ROI Report",
    },
  ];

  // Testimonials Data
  const testimonials = [
    {
      quote:
        "Inkhouse transformed our messaging. The impact on our bottom line was immediate and significant.",
      name: "ANNA V.",
      role: "CMO, SAASCO",
      avatar: "/images/inkhouse/client-anna.webp",
      metric: "+40.4% Trial-to-Paid Conversion",
    },
    {
      quote:
        "Working with Inkhouse was a revelation. Our checkout abandonment plummeted, and customer acquisition costs dropped by 28%.",
      name: "MARCUS CHEN",
      role: "VP Growth, Meridian Direct",
      avatar: "/images/northline/client-sarah-chen.webp",
      metric: "+32% Checkout Completion",
    },
    {
      quote:
        "The B2B email sequence generated more executive meetings in 3 weeks than our SDR team booked all last quarter.",
      name: "DAVID ROSS",
      role: "Managing Director, Apex Logistics",
      avatar: "/images/northline/client-david-ross.webp",
      metric: "$2.4M Pipeline Generated",
    },
  ];

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Bottom detection
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120) {
        setActiveSection("contact");
        return;
      }

      const sections = ["contact", "outcomes", "process", "philosophy", "work"];
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 700);
  };

  return (
    <div className="inkhouse-container min-h-screen selection:bg-[#19383e] selection:text-white">
      {/* Case Study Modal */}
      <CaseStudyModal
        study={selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
      />

      {/* ======================================================================= */}
      {/* HEADER / NAVIGATION BAR                                                 */}
      {/* ======================================================================= */}
      <header
        className={`inkhouse-navbar-sticky ${
          isScrolled ? "inkhouse-navbar-scrolled py-2" : "py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo: INKHOUSE COPY with Geometric Icon */}
          <Link
            to="/portfolio/inkhouse-copy"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            {/* Geometric ribbon emblem */}
            <div className="w-8 h-8 rounded-lg bg-[#19383e] flex items-center justify-center text-white shadow-sm group-hover:bg-[#132c31] transition-colors">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
                <path
                  d="M5 4V20M5 12H11L19 4M11 12L19 20"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm font-black tracking-wider text-[#19383e] uppercase leading-tight">
                INKHOUSE
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-[#c6673f] uppercase -mt-0.5 font-bold">
                COPY
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-xs font-mono font-bold tracking-widest"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`inkhouse-nav-link cursor-pointer uppercase ${
                    isActive ? "inkhouse-nav-active" : ""
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right CTA Button: LET'S TALK */}
          <div className="hidden sm:flex items-center">
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 rounded-full bg-[#c6673f] hover:bg-[#b55832] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_4px_15px_rgba(198,103,63,0.35)] hover:shadow-[0_6px_20px_rgba(198,103,63,0.5)] cursor-pointer"
            >
              LET'S TALK
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-300 text-slate-700 hover:text-black cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-300 bg-[#fbf8f3] px-6 py-5 space-y-3 text-sm font-mono uppercase text-left inkhouse-modal-anim shadow-lg">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2 rounded-lg text-left transition-all cursor-pointer ${
                    isActive
                      ? "bg-[#19383e] text-white font-bold"
                      : "text-slate-700 hover:bg-slate-200/60"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#c6673f]" />}
                </button>
              );
            })}
            <div className="pt-3 border-t border-slate-300">
              <button
                onClick={() => scrollToSection("contact")}
                className="w-full py-2.5 rounded-full bg-[#c6673f] text-white font-bold text-xs font-mono tracking-wider cursor-pointer"
              >
                LET'S TALK
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed sticky navbar */}
      <div className="h-20 sm:h-24" />

      {/* ======================================================================= */}
      {/* HERO SECTION                                                            */}
      {/* ======================================================================= */}
      <section className="relative z-10 py-12 sm:py-20 lg:py-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Headline & Pitch */}
            <div className="lg:col-span-7 text-left space-y-6">
              <h1 className="text-4xl sm:text-6xl md:text-6xl lg:text-7xl font-extrabold text-[#19383e] inkhouse-serif leading-[1.08] tracking-tight">
                WORDS THAT
                <br />
                CONVERT.
                <br />
                STORIES THAT
                <br />
                STICK.
              </h1>

              <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-xl">
                Crafting data-backed, human-centric copywriting that moves markets and builds empires.
              </p>

              <div className="pt-2">
                <button
                  onClick={() => scrollToSection("work")}
                  className="px-8 py-3.5 rounded-lg bg-[#19383e] hover:bg-[#132c31] text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer"
                >
                  EXPLORE MY WORK
                </button>
              </div>
            </div>

            {/* Right Ink & Story Calligraphy Illustration */}
            <div className="lg:col-span-5 flex items-center justify-center relative">
              <div className="relative w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-[#fbf8f3]">
                <img
                  src="/images/inkhouse/hero-ink-art-hd.webp"
                  alt="Inkhouse Fluid Ink Calligraphy Artwork"
                  className="w-full h-full object-contain p-4 hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-4 right-4 px-3 py-1 rounded-full bg-white/90 backdrop-blur-md border border-slate-300 text-[10px] font-mono text-slate-600">
                  EST. 2024 // INK &amp; STRATEGY
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* POSITIONING SECTION                                                     */}
      {/* ======================================================================= */}
      <section
        id="philosophy"
        className="relative z-10 py-16 sm:py-24 bg-[#f8f5ee] border-t border-slate-200/80"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#19383e] inkhouse-serif uppercase tracking-wider mb-12 sm:mb-16">
            POSITIONING
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
            {/* Left Column: Manifesto Text */}
            <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-medium">
                I craft copy that doesn't just fill space, but compels action, ignites desire, and builds lasting customer loyalty. My approach blends deep psychological insight with rigorous data analysis.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-[#c6673f] font-bold">
                <span>CONVERSION ARCHITECTURE</span>
                <span>&rarr;</span>
              </div>
            </div>

            {/* Right 3 Pillars Grid */}
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {pillars.map((pillar) => {
                const isSelected = selectedPillar === pillar.id;
                return (
                  <div
                    key={pillar.id}
                    onClick={() =>
                      setSelectedPillar(isSelected ? null : pillar.id)
                    }
                    className={`p-6 rounded-2xl border text-center transition-all cursor-pointer group ${
                      isSelected
                        ? "bg-[#19383e] text-white border-[#19383e] shadow-lg"
                        : "bg-white border-slate-200 hover:border-[#19383e]/50 shadow-sm"
                    }`}
                  >
                    {/* Illustrated Icon Badge */}
                    <div
                      className={`w-20 h-20 rounded-full mx-auto flex items-center justify-center mb-4 transition-transform group-hover:scale-110 p-1 ${
                        isSelected
                          ? "bg-white/20 ring-2 ring-[#c6673f]"
                          : "bg-[#fbf8f3] border border-slate-300 shadow-sm"
                      }`}
                    >
                      <img
                        src={pillar.image}
                        alt={pillar.title}
                        className="w-full h-full object-contain rounded-full"
                      />
                    </div>

                    <h3
                      className={`text-sm sm:text-base font-extrabold uppercase tracking-wide inkhouse-serif mb-1 ${
                        isSelected ? "text-white" : "text-[#19383e]"
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <p
                      className={`text-xs ${
                        isSelected ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      {pillar.subtitle}
                    </p>

                    <div className="mt-4 text-[10px] font-mono text-[#c6673f] font-bold uppercase">
                      {isSelected ? "▲ Collapse details" : "▼ Click framework"}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Expanded Pillar Framework Drawer */}
          {selectedPillar && (
            <div className="mt-8 p-6 rounded-2xl bg-white border border-[#19383e]/30 text-left shadow-md inkhouse-modal-anim">
              {(() => {
                const p = pillars.find((x) => x.id === selectedPillar);
                if (!p) return null;
                return (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono uppercase text-[#c6673f] font-bold">
                        METHODOLOGY BLUEPRINT // {p.title}
                      </span>
                      <button
                        onClick={() => setSelectedPillar(null)}
                        className="text-xs text-slate-500 hover:text-black font-mono cursor-pointer"
                      >
                        ✕ Close
                      </button>
                    </div>
                    <p className="text-sm text-slate-800 leading-relaxed font-medium">
                      {p.framework}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {p.bullets.map((b, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 rounded-full bg-[#fbf8f3] border border-slate-300 text-xs font-mono text-slate-700 font-bold"
                        >
                          ✓ {b}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          )}
        </div>
      </section>

      {/* ======================================================================= */}
      {/* SELECTED WORK SECTION                                                   */}
      {/* ======================================================================= */}
      <section
        id="work"
        className="relative z-10 py-16 sm:py-24 bg-[#141d22] text-white"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white inkhouse-serif uppercase tracking-wider mb-12 sm:mb-16">
            SELECTED WORK
          </h2>

          {/* 3 Featured Case Studies Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left">
            {caseStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => setSelectedCaseStudy(study)}
                className="rounded-2xl border border-slate-700/80 bg-[#182329] p-5 sm:p-6 flex flex-col justify-between cursor-pointer inkhouse-case-card group"
              >
                <div>
                  <span className="text-xs font-mono text-slate-400 block mb-2 font-bold">
                    {study.tag}
                  </span>

                  {/* Visual Preview */}
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-5 bg-slate-950 border border-slate-800">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-white inkhouse-serif leading-snug mb-4 group-hover:text-[#c6673f] transition-colors">
                    {study.title}
                  </h3>

                  {/* Metrics bullet list */}
                  <ul className="space-y-1.5 text-xs text-slate-300 font-mono mb-6">
                    {study.metrics.map((metric, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c6673f]" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-700/60 flex items-center justify-between text-xs font-mono text-[#c6673f] font-bold">
                  <span>View Case Teardown</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {/* Lower Horizontal Thumbnail Gallery Strip */}
          <div className="mt-12 pt-8 border-t border-slate-800/80">
            <div className="text-xs font-mono uppercase text-slate-400 mb-4 tracking-wider text-left">
              ADDITIONAL CLIENT ENGAGEMENTS &amp; SPRINT MOCKUPS:
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <div
                  key={num}
                  onClick={() => setSelectedCaseStudy(caseStudies[num % 3])}
                  className="aspect-[4/3] rounded-xl overflow-hidden border border-slate-700 bg-slate-900 cursor-pointer hover:border-[#c6673f] transition-all hover:scale-105"
                >
                  <img
                    src={`/images/inkhouse/thumb-${num}.webp`}
                    alt={`Case study thumbnail ${num}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* THE PROCESS SECTION                                                     */}
      {/* ======================================================================= */}
      <section
        id="process"
        className="relative z-10 py-16 sm:py-24 bg-[#fbf8f3] border-t border-slate-200"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#19383e] inkhouse-serif uppercase tracking-wider mb-8 sm:mb-12">
            THE PROCESS
          </h2>

          {/* Authentic Process Flow Diagram Visual */}
          <div className="mb-10 max-w-4xl mx-auto rounded-3xl p-3 sm:p-5 bg-white/70 border border-slate-200/80 shadow-sm overflow-hidden group">
            <img
              src="/images/inkhouse/process-diagram-full-2x.webp"
              alt="The 5-Step Copywriting Conversion Process Flow"
              className="w-full h-auto object-contain mx-auto group-hover:scale-[1.01] transition-transform duration-300"
            />
          </div>

          {/* Connected Process Flow Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 relative">
            {processSteps.map((step, idx) => {
              const isSelected = activeProcessStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`rounded-2xl p-4 sm:p-5 text-center flex flex-col justify-between cursor-pointer inkhouse-process-card border transition-all ${
                    step.borderColor || "border-transparent"
                  } ${isSelected ? "ring-2 ring-[#c6673f] scale-105" : ""}`}
                  style={{ backgroundColor: step.color }}
                >
                  <div>
                    {/* Process Step Illustration Badge */}
                    <div className="w-full h-24 sm:h-28 mb-3 flex items-center justify-center overflow-hidden rounded-xl bg-black/5 p-1">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="h-full w-auto object-contain hover:scale-105 transition-transform"
                      />
                    </div>

                    <h3
                      className={`text-xs sm:text-sm font-extrabold tracking-wide uppercase inkhouse-serif leading-snug mb-2 ${step.textColor}`}
                    >
                      {step.title}
                    </h3>

                    <p
                      className={`text-[11px] leading-relaxed line-clamp-3 ${
                        step.textColor === "text-white"
                          ? "text-slate-200"
                          : "text-slate-600"
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/10 text-[10px] font-mono font-bold uppercase opacity-80">
                    Step 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Callout */}
          <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-300 max-w-3xl mx-auto text-left shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-mono text-[#c6673f] font-bold uppercase">
                PHASE 0{activeProcessStep + 1} DETAILS // {processSteps[activeProcessStep].tagline}
              </span>
              <span className="text-xs font-mono text-slate-500">
                Turnaround: 3-5 Days
              </span>
            </div>
            <p className="text-sm text-slate-800 leading-relaxed font-medium">
              {processSteps[activeProcessStep].desc}
            </p>
            <div className="mt-3 pt-3 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-700">
              <span className="font-bold text-[#19383e]">Core Artifact:</span>
              <span>{processSteps[activeProcessStep].deliverable}</span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* CREDIBLE OUTCOMES SECTION                                               */}
      {/* ======================================================================= */}
      <section
        id="outcomes"
        className="relative z-10 py-16 sm:py-24 bg-[#f8f5ee] border-t border-slate-200"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#19383e] inkhouse-serif uppercase tracking-wider mb-12 sm:mb-16">
            CREDIBLE OUTCOMES
          </h2>

          {/* Client Logos Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-85 mb-14">
            <img
              src="/images/inkhouse/logo-shopify.webp"
              alt="Shopify"
              className="h-7 sm:h-8 w-auto object-contain hover:scale-110 transition-transform cursor-pointer"
            />
            <img
              src="/images/inkhouse/logo-asana.webp"
              alt="Asana"
              className="h-6 sm:h-7 w-auto object-contain hover:scale-110 transition-transform cursor-pointer"
            />
            <img
              src="/images/inkhouse/logo-mailchimp.webp"
              alt="Mailchimp"
              className="h-7 sm:h-8 w-auto object-contain hover:scale-110 transition-transform cursor-pointer"
            />
            <img
              src="/images/inkhouse/logo-salesforce.webp"
              alt="Salesforce"
              className="h-6 sm:h-7 w-auto object-contain hover:scale-110 transition-transform cursor-pointer"
            />
            <img
              src="/images/inkhouse/logo-adobe.webp"
              alt="Adobe"
              className="h-6 sm:h-7 w-auto object-contain hover:scale-110 transition-transform cursor-pointer"
            />
            <img
              src="/images/inkhouse/logo-client.webp"
              alt="Client"
              className="h-6 sm:h-7 w-auto object-contain hover:scale-110 transition-transform cursor-pointer"
            />
          </div>

          {/* Featured Testimonial Quote Box */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-sm text-left relative max-w-4xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Circular Avatar */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden bg-slate-200 border-2 border-[#19383e]/20 shrink-0">
                <img
                  src={testimonials[activeTestimonial].avatar}
                  alt={testimonials[activeTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote Content */}
              <div className="space-y-3 text-center sm:text-left flex-1">
                <span className="text-4xl text-[#c6673f] font-serif leading-none select-none block">
                  “
                </span>
                <p className="text-lg sm:text-xl font-bold text-slate-900 inkhouse-serif leading-snug">
                  "{testimonials[activeTestimonial].quote}"
                </p>

                <div className="pt-1">
                  <div className="text-xs font-mono font-bold text-[#19383e] tracking-wider uppercase">
                    — {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Tabs Switcher */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-mono text-[#c6673f] font-bold">
                Impact: {testimonials[activeTestimonial].metric}
              </span>
              <div className="flex items-center gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonial(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeTestimonial === idx
                        ? "w-8 bg-[#19383e]"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`View review ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Dual Big Metric Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-14 max-w-2xl mx-auto">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
              <div className="text-4xl sm:text-5xl font-black text-[#19383e] inkhouse-serif">
                $5M+
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                in Generated Revenue
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-slate-200 text-center shadow-sm">
              <div className="text-4xl sm:text-5xl font-black text-[#c6673f] inkhouse-serif">
                Average 45%
              </div>
              <div className="text-xs sm:text-sm font-medium text-slate-600 mt-1">
                Increase in Conversion
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* CONFIDENT INQUIRY PATH (CONTACT FORM)                                   */}
      {/* ======================================================================= */}
      <section
        id="contact"
        className="relative z-10 py-16 sm:py-24 bg-[#fbf8f3] border-t border-slate-200"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[#c6673f] font-bold block mb-2">
            CONFIDENT INQUIRY PATH
          </span>

          {/* Dark Charcoal Form Card */}
          <div className="rounded-3xl bg-[#182329] text-white p-6 sm:p-12 shadow-2xl text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white inkhouse-serif uppercase tracking-tight mb-3">
              READY TO TURN VISITORS INTO
              <br />
              VALUABLE CUSTOMERS?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed mb-8">
              Let's discuss your project. Tell me about your goals, challenges, and what you want to achieve. I'll respond within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl bg-[#1d2b32] border border-slate-700 text-center space-y-3 inkhouse-modal-anim">
                <CheckCircle2 className="w-12 h-12 text-[#c6673f] mx-auto" />
                <h3 className="text-xl font-bold text-white inkhouse-serif">
                  Inquiry Received
                </h3>
                <p className="text-xs font-mono text-slate-300 max-w-md mx-auto">
                  Thank you, {formData.name || "partner"}. I have received your project details for {formData.company || "your business"} and will respond to {formData.email} within 24 hours with custom strategic recommendations.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      company: "",
                      projectType: "Website Copy Overhaul",
                      budgetRange: "$10,000 - $25,000",
                      message: "",
                    });
                  }}
                  className="mt-4 px-6 py-2 rounded-full bg-[#c6673f] text-white font-mono text-xs font-bold uppercase cursor-pointer"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left max-w-2xl mx-auto">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c6673f]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c6673f]"
                    />
                  </div>
                </div>

                {/* Row 2: Company & Project Type */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Company"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c6673f]"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Project Type (e.g. SaaS Funnel, Landing Page)"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c6673f]"
                    />
                  </div>
                </div>

                {/* Row 3: Dropdowns for Project Scope & Budget */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#c6673f] cursor-pointer"
                    >
                      <option value="Website Copy Overhaul">Website Copy Overhaul</option>
                      <option value="Email Nurture Sequences">Email Nurture Sequences</option>
                      <option value="Sales Page & Checkout Optimization">Sales Page &amp; Checkout Optimization</option>
                      <option value="Full Brand Voice Bible">Full Brand Voice Bible</option>
                    </select>
                  </div>
                  <div>
                    <select
                      value={formData.budgetRange}
                      onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                      className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 text-xs focus:outline-none focus:ring-2 focus:ring-[#c6673f] cursor-pointer"
                    >
                      <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                      <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                      <option value="$25,000 - $50,000">$25,000 - $50,000</option>
                      <option value="$50,000+">$50,000+</option>
                    </select>
                  </div>
                </div>

                {/* Row 4: Budget Slider & Message Textarea */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-start">
                  <div className="p-4 rounded-xl bg-white text-slate-900 space-y-2">
                    <div className="flex justify-between items-center text-xs font-mono font-bold">
                      <span className="text-slate-600 uppercase">Target Budget:</span>
                      <span className="text-[#c6673f]">${budgetSlider.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="3000"
                      max="45000"
                      step="1000"
                      value={budgetSlider}
                      onChange={(e) => setBudgetSlider(parseInt(e.target.value))}
                      className="inkhouse-slider cursor-pointer"
                      aria-label="Adjust target budget"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-slate-400">
                      <span>$3K (Sprint)</span>
                      <span>$25K (Full)</span>
                      <span>$45K+ (Enterprise)</span>
                    </div>
                  </div>

                  <div>
                    <textarea
                      rows={3}
                      required
                      placeholder="Message (Share your current conversion rates, target launch date, and key goals...)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c6673f] resize-none"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-[#e7decb] hover:bg-[#ded1bc] text-slate-900 font-mono text-xs font-black uppercase tracking-widest transition-all shadow-md hover:shadow-lg cursor-pointer"
                  >
                    {isSubmitting ? "PROCESSING..." : "SUBMIT YOUR PROJECT INQUIRY"}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* FOOTER                                                                  */}
      {/* ======================================================================= */}
      <footer className="py-10 bg-[#fbf8f3] border-t border-slate-200 text-slate-600 text-xs font-mono">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Brand Logo */}
          <Link
            to="/portfolio/inkhouse-copy"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="w-6 h-6 rounded bg-[#19383e] flex items-center justify-center text-white text-[10px] font-bold">
              IK
            </div>
            <div className="text-left font-black tracking-wider text-[#19383e] uppercase">
              INKHOUSE COPY
            </div>
          </Link>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-slate-600">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#19383e] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#19383e] transition-colors"
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#19383e] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>

          {/* Copyright & Disclaimer */}
          <div className="text-slate-500">
            © 2024 INKHOUSE COPY. All Rights Reserved.
          </div>
        </div>

        <div className="text-center text-[10px] text-slate-400 mt-4">
          A smooth UX parallax effects and smooth animations.
        </div>
      </footer>
    </div>
  );
}

export default InkhouseCopy;

