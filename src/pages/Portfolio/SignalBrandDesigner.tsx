import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  Network,
  Radio,
  Search,
  PenTool,
  Rocket,
  CheckCircle2,
  ArrowUpRight,
  ChevronRight,
  Menu,
  X,
  Sparkles,
  ExternalLink,
  Layers,
  BarChart3,
  ShieldCheck,
  Send,
  Sliders,
  SlidersHorizontal,
  Volume2,
  VolumeX,
  Copy,
  Check,
  Cpu,
  ShoppingBag,
  TrendingUp,
  Zap,
} from "lucide-react";
import "./SignalBrandDesigner.css";

interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  study: {
    id: string;
    title: string;
    tag: string;
    description: string;
    metrics: string[];
    deliverables: string[];
    images: { src: string; caption: string }[];
  } | null;
}

function CaseStudyModal({ isOpen, onClose, study }: CaseStudyModalProps) {
  if (!isOpen || !study) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-sky-500/30 bg-[#060c18] p-5 sm:p-8 shadow-[0_0_60px_rgba(14,165,233,0.3)] signal-modal-animate text-left my-6 max-h-[90vh] overflow-y-auto signal-custom-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full border border-slate-700 bg-slate-900/80 p-2 text-slate-300 hover:text-white hover:border-sky-400 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6 pr-8">
          <span className="inline-block px-3 py-1 text-xs font-mono font-semibold uppercase tracking-wider text-sky-400 bg-sky-950/60 border border-sky-800/60 rounded-full mb-2">
            {study.tag}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white signal-display">
            {study.title}
          </h2>
          <p className="mt-2 text-slate-300 text-sm sm:text-base leading-relaxed">
            {study.description}
          </p>
        </div>

        {/* Deliverables & Outcomes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/50">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Core Deliverables
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
              {study.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="p-4 rounded-xl border border-sky-900/40 bg-sky-950/20">
            <h4 className="text-xs font-mono uppercase tracking-wider text-sky-400 mb-2">
              Verified Business Outcomes
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
              {study.metrics.map((metric, idx) => (
                <li key={idx} className="flex items-center gap-2 font-medium">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
                  <span>{metric}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Image Showcase Gallery */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400">
            Visual Artifacts &amp; Identity System ({study.images.length} Assets)
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {study.images.map((img, idx) => (
              <div
                key={idx}
                className="overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80 group flex flex-col"
              >
                <div className="overflow-hidden relative">
                  <img
                    src={img.src}
                    alt={`${study.title} - ${img.caption}`}
                    className="w-full h-48 sm:h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-2.5 bg-slate-900/90 border-t border-slate-800 text-[11px] font-mono text-slate-300">
                  {img.caption}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-sm transition-all shadow-[0_0_20px_rgba(56,189,248,0.4)]"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}

export function SignalBrandDesigner() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<{
    id: string;
    title: string;
    tag: string;
    description: string;
    metrics: string[];
    deliverables: string[];
    images: { src: string; caption: string }[];
  } | null>(null);

  // Hero Interactive Waveform Controller
  const [frequency, setFrequency] = useState(142.8);
  const [isSignalLive, setIsSignalLive] = useState(true);

  // Case study category filter
  const [activeCategory, setActiveCategory] = useState<"all" | "fintech" | "lifestyle" | "ai">("all");

  // Quantum Leap interactive view tabs
  const [quantumActiveTab, setQuantumActiveTab] = useState<"beforeAfter" | "dashboard" | "tokens" | "stationery">("beforeAfter");

  // Aurora Home interactive view tabs
  const [auroraActiveTab, setAuroraActiveTab] = useState<"palette" | "typography" | "physical" | "book">("palette");

  // Synapse AI interactive view tabs
  const [synapseActiveTab, setSynapseActiveTab] = useState<"identity" | "hardware">("identity");

  // Testimonial selector
  const [activeTestimonial, setActiveTestimonial] = useState<0 | 1 | 2>(0);

  // Copy hex token toast
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  // Brand readiness assessment state
  const [auditStage, setAuditStage] = useState<"seed" | "growth" | "enterprise">("growth");
  const [auditTouchpoints, setAuditTouchpoints] = useState<"digital" | "physical" | "hybrid">("hybrid");
  const [auditConsistency, setAuditConsistency] = useState<"fragmented" | "moderate" | "standardized">("fragmented");

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectType: "Full Brand Identity",
    budget: "$25k - $50k",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate brand signal score
  const signalScore = useMemo(() => {
    let score = 40;
    if (auditStage === "growth") score += 20;
    if (auditStage === "enterprise") score += 30;
    if (auditTouchpoints === "hybrid") score += 15;
    if (auditConsistency === "moderate") score += 10;
    if (auditConsistency === "standardized") score += 20;
    return Math.min(score, 96);
  }, [auditStage, auditTouchpoints, auditConsistency]);

  const copyToken = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 900);
  };

  // Detailed case study open handlers
  const openQuantumLeap = () => {
    setSelectedCaseStudy({
      id: "quantum-leap",
      title: "Project: QUANTUM LEAP",
      tag: "FinTech / SaaS",
      description:
        "Quantum Leap required an authoritative, modern brand overhaul to transition from an early-stage startup to a tier-one enterprise fintech platform. We engineered a mathematical precision logo mark, dynamic web platform, and cohesive identity system.",
      metrics: [
        "+150% Brand Recognition across institutional buyers",
        "+24% Lead Conversion on revised landing environments",
        "Decreased enterprise sales cycle friction by 35%",
      ],
      deliverables: [
        "Comprehensive Brand Book & Mathematical Grid Specification",
        "Multi-Platform Design Tokens (Figma to Tailwind/Code)",
        "Dark-mode Enterprise Product UI & Web App Architecture",
        "Laser-Etched Stationery, Pitch Decks, and Investor Collateral",
      ],
      images: [
        { src: "/images/signal/quantum-logo-comparison.webp", caption: "Vector Mark Evolution: Old handwritten mark to Mathematical Hexagon" },
        { src: "/images/signal/quantum-dashboard.webp", caption: "Enterprise Analytics Dashboard & Responsive Mobile App" },
        { src: "/images/signal/quantum-design-tokens.webp", caption: "Mathematical Construction & Color/Spatial Token Taxonomy" },
        { src: "/images/signal/quantum-stationery-deck.webp", caption: "Series B Investor Deck Folder & Foil-Stamped NFC Keycards" },
      ],
    });
  };

  const openAuroraHome = () => {
    setSelectedCaseStudy({
      id: "aurora-home",
      title: "Project: AURORA HOME",
      tag: "Lifestyle / E-commerce",
      description:
        "Aurora Home needed a sophisticated, warm luxury identity system for conscious lifestyle products. We curated an architectural earth-tone palette, editorial typography hierarchy, luxury physical packaging, and a high-converting digital storefront.",
      metrics: [
        "Successfully launched in 2 new international retail markets",
        "+28% Increased Average Order Value (AOV)",
        "Over 45,000 monthly active brand visitors in Q1",
      ],
      deliverables: [
        "Editorial Serif & Sans-Serif Typographic System",
        "Architectural Pattern & Color Palette Tokens",
        "Linen Hardcover Brand Guidelines Manual",
        "Sustainable Packaging, Stationery & Storefront Art Direction",
      ],
      images: [
        { src: "/images/signal/aurora-palette-pattern.webp", caption: "Earth-tone Palette & Architectural Linework Pattern System" },
        { src: "/images/signal/aurora-typography.webp", caption: "Cormorant Garamond & Neue Haas Grotesk Typographic Ramp" },
        { src: "/images/signal/aurora-brand-book.webp", caption: "Cloth-Bound Hardcover Brand Guidelines Manual Spread" },
        { src: "/images/signal/aurora-packaging.webp", caption: "Sustainable Retail Tote Bags & Embossed Packaging Boxes" },
        { src: "/images/signal/aurora-storefront.webp", caption: "Flagship Retail Architectural Storefront & Interior Layout" },
      ],
    });
  };

  const openSynapseAi = () => {
    setSelectedCaseStudy({
      id: "synapse-ai",
      title: "Project: SYNAPSE INTELLIGENCE",
      tag: "Enterprise AI & Neural Systems",
      description:
        "Synapse AI engineers autonomous cognitive infrastructure for global enterprises. We designed an identity anchored in neural graph vectors, real-time telemetry visualizers, server rack hardware faceplates, and zero-trust biometric security applications.",
      metrics: [
        "$180M Series B Valuation announced post-rebrand",
        "99.98% Token Recognition across enterprise CTOs",
        "Zero-friction deployment across multi-cloud SDKs",
      ],
      deliverables: [
        "Hexagonal Neural Graph Vector Mark & Kinetic Identity",
        "Real-Time Telemetry Interface & Observability System",
        "Anodized Aluminum Server Faceplate Hardware Badging",
        "Zero-Trust Mobile Authenticator App & Keycard System",
      ],
      images: [
        { src: "/images/signal/synapse-brand-identity.webp", caption: "Neural Graph Mark Construction & Live Telemetry UI" },
        { src: "/images/signal/synapse-hardware-kiosk.webp", caption: "Mil-Spec Server Rack Faceplate & Mobile Authenticator App" },
      ],
    });
  };

  // Testimonials database
  const testimonials = [
    {
      name: "Sarah L.",
      title: "Founder, Quantum Leap [Tech Startup]",
      image: "/images/signal/client-sarah.webp",
      quote:
        "Signal didn't just give us a logo; they built an entire visual language that our team and customers love. Our brand is now a true enterprise asset that closes deals.",
      badge: "+150% Brand Recognition",
    },
    {
      name: "Marcus Vance",
      title: "VP Product & Engineering, Synapse AI",
      image: "/images/signal/client-marcus.webp",
      quote:
        "The technical rigor of Signal's design system was astonishing. Having tokens that automatically compile to our React and Rust SDKs elevated our entire product suite.",
      badge: "$180M Series B Valuation",
    },
    {
      name: "Elena Rostova",
      title: "Creative VP, Aurora Home",
      image: "/images/signal/client-elena.webp",
      quote:
        "Signal captured the quiet warmth of our philosophy while creating a scalable system for packaging, physical stores, and our international e-commerce launch.",
      badge: "+28% Higher Average Order Value",
    },
  ];

  return (
    <div className="signal-container min-h-screen bg-[#030712] text-slate-100 selection:bg-sky-500/30 selection:text-sky-200">
      {/* Background Ambience & Glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[20%] w-[550px] h-[550px] rounded-full bg-sky-600/10 blur-[140px]" />
        <div className="absolute top-[40%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[450px] h-[450px] rounded-full bg-cyan-600/10 blur-[130px]" />
        <div className="absolute bottom-[5%] right-[20%] w-[500px] h-[500px] rounded-full bg-amber-600/5 blur-[160px]" />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #38bdf8 1px, transparent 0)`,
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        study={selectedCaseStudy}
      />

      {/* Navigation Header */}
      <header className="signal-navbar-sticky">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/portfolio/signal-brand-designer"
            className="flex items-center gap-3 group"
          >
            {/* Animated Waveform glyph bars */}
            <div className="flex items-end gap-0.5 h-6 px-1">
              <span className={`w-1 rounded-sm bg-sky-500 ${isSignalLive ? "signal-eq-1" : "h-3"}`} />
              <span className={`w-1 rounded-sm bg-cyan-400 ${isSignalLive ? "signal-eq-2" : "h-5"}`} />
              <span className={`w-1 rounded-sm bg-sky-300 ${isSignalLive ? "signal-eq-3" : "h-4"}`} />
              <span className={`w-1 rounded-sm bg-blue-500 ${isSignalLive ? "signal-eq-1" : "h-2"}`} />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black tracking-wider text-white signal-display group-hover:text-sky-300 transition-colors">
                SIGNAL
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-slate-400 uppercase -mt-1">
                BRAND DESIGNER
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono uppercase tracking-widest text-slate-300">
            <a href="#work" className="hover:text-sky-400 transition-colors py-1">
              Work
            </a>
            <a href="#tokens" className="hover:text-sky-400 transition-colors py-1">
              Tokens
            </a>
            <a href="#process" className="hover:text-sky-400 transition-colors py-1">
              Process
            </a>
            <a href="#audit" className="hover:text-sky-400 transition-colors py-1">
              Audit
            </a>
            <a href="#outcomes" className="hover:text-sky-400 transition-colors py-1">
              Outcomes
            </a>
            <a href="#inquire" className="hover:text-sky-400 transition-colors py-1">
              Inquire
            </a>
          </nav>

          {/* Action CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="#inquire"
              className="px-5 py-2 rounded-full border border-slate-700 bg-slate-900/80 hover:border-sky-400 hover:text-white hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] text-xs font-mono font-semibold uppercase tracking-wider text-slate-200 transition-all"
            >
              LET'S TALK
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#060c18] px-6 py-6 space-y-4 text-sm font-mono uppercase tracking-wider">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-sky-400 py-1"
            >
              Work
            </a>
            <a
              href="#tokens"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-sky-400 py-1"
            >
              Design Tokens
            </a>
            <a
              href="#process"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-sky-400 py-1"
            >
              Process
            </a>
            <a
              href="#audit"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-sky-400 py-1"
            >
              Brand Audit
            </a>
            <a
              href="#outcomes"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-sky-400 py-1"
            >
              Outcomes
            </a>
            <a
              href="#inquire"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-slate-300 hover:text-sky-400 py-1"
            >
              Inquire
            </a>
            <div className="pt-4 border-t border-slate-800">
              <a
                href="#inquire"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center w-full py-2.5 rounded-full border border-sky-500/50 bg-sky-500/10 text-sky-300 font-bold"
              >
                LET'S TALK
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed navbar */}
      <div className="h-20" />

      {/* HERO SECTION WITH INTERACTIVE WAVEFORM TUNER */}
      <section className="relative z-10 pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Copy */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-sky-500/30 bg-sky-950/40 text-xs font-mono text-sky-400">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                <span>ACCEPTING Q3/Q4 BRAND COMMISSIONS</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08] signal-display uppercase">
                BUILDING BRANDS THAT
                <br />
                <span className="text-white signal-text-glow">
                  CUT THROUGH THE NOISE.
                </span>
              </h1>

              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-slate-400 font-medium max-w-xl">
                STRATEGIC IDENTITY &amp; VISUAL SYSTEMS FOR AMBITIOUS COMPANIES
              </p>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="px-7 py-3 rounded-full border border-white/80 bg-white/10 hover:bg-white hover:text-slate-950 font-mono text-xs font-bold uppercase tracking-wider text-white transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(56,189,248,0.5)] inline-flex items-center gap-2 group"
                >
                  <span>EXPLORE THE WORK</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#audit"
                  className="px-6 py-3 rounded-full border border-slate-800 hover:border-sky-500/50 font-mono text-xs font-semibold uppercase tracking-wider text-slate-400 hover:text-sky-300 transition-all flex items-center gap-2"
                >
                  <SlidersHorizontal className="w-3.5 h-3.5 text-sky-400" />
                  <span>Run Brand Audit</span>
                </a>
              </div>
            </div>

            {/* Right Waveform Visual Element with Interactive Frequency Tuner */}
            <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
              <div className="relative w-full max-w-md rounded-2xl border border-sky-500/20 bg-gradient-to-b from-sky-950/20 to-slate-950/60 p-6 flex flex-col justify-center items-center overflow-hidden signal-card-glow">
                {/* Horizontal Waveform Vector */}
                <div className="w-full signal-wave-glow py-2">
                  <svg
                    viewBox="0 0 400 160"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto drop-shadow-[0_0_16px_rgba(56,189,248,0.7)]"
                  >
                    {/* Primary Sine Wave with dynamically adjusted wavelength based on frequency */}
                    <path
                      d={`M 0 80 L 40 80 L 70 ${80 - (frequency - 100) * 0.15} L 90 ${80 + (frequency - 100) * 0.2} L 110 50 L 130 115 L 150 25 L 170 145 L 190 ${15 - (frequency - 140) * 0.2} L 210 ${140 + (frequency - 140) * 0.2} L 230 40 L 250 120 L 270 65 L 290 95 L 310 75 L 340 80 L 400 80`}
                      stroke="url(#signalWaveGrad)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Secondary harmonic wave */}
                    <path
                      d="M 0 80 L 50 80 L 85 75 L 110 95 L 135 65 L 160 100 L 185 55 L 210 105 L 235 65 L 260 90 L 290 75 L 340 80 L 400 80"
                      stroke="#0284c7"
                      strokeWidth="1.5"
                      strokeOpacity="0.4"
                      strokeLinecap="round"
                    />
                    {/* Peak Nodes */}
                    <circle cx="190" cy={15 - (frequency - 140) * 0.2} r="4.5" fill="#38bdf8" />
                    <circle cx="170" cy="145" r="3.5" fill="#0284c7" />
                    <circle cx="210" cy={140 + (frequency - 140) * 0.2} r="3.5" fill="#38bdf8" />
                    <defs>
                      <linearGradient
                        id="signalWaveGrad"
                        x1="0"
                        y1="80"
                        x2="400"
                        y2="80"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0%" stopColor="#0369a1" stopOpacity="0.3" />
                        <stop offset="35%" stopColor="#0ea5e9" />
                        <stop offset="50%" stopColor="#38bdf8" />
                        <stop offset="65%" stopColor="#0ea5e9" />
                        <stop offset="100%" stopColor="#0369a1" stopOpacity="0.3" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>

                {/* Interactive Frequency Controller Controls */}
                <div className="w-full mt-4 pt-4 border-t border-slate-800/80 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-slate-400">CARRIER FREQUENCY:</span>
                    <span className="text-sky-400 font-bold">{frequency.toFixed(1)} MHz</span>
                  </div>

                  <input
                    type="range"
                    min="100"
                    max="200"
                    step="0.5"
                    value={frequency}
                    onChange={(e) => setFrequency(parseFloat(e.target.value))}
                    className="signal-range-slider w-full cursor-pointer"
                    aria-label="Adjust carrier frequency"
                  />

                  <div className="flex items-center justify-between text-[10px] font-mono tracking-widest text-slate-500 uppercase">
                    <button
                      onClick={() => setIsSignalLive(!isSignalLive)}
                      className="flex items-center gap-1.5 text-sky-400 hover:text-sky-300 cursor-pointer"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${isSignalLive ? "bg-sky-400 animate-ping" : "bg-slate-600"}`} />
                      <span>{isSignalLive ? "SIGNAL ACTIVE" : "SIGNAL PAUSED"}</span>
                    </button>
                    <span>SNR: +46.4 dB</span>
                    <span>Q-FACTOR: 8.9</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING / PHILOSOPHY SECTION */}
      <section
        id="philosophy"
        className="relative z-10 py-16 sm:py-24 border-t border-slate-800/80 bg-[#02050e]/60"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-left">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-sky-400 font-semibold block mb-2">
              POSITIONING
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white signal-display uppercase">
              MY PHILOSOPHY: CLEAR SIGNALS, LASTING IMPACT.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Strategy First */}
            <div className="rounded-2xl border border-sky-900/40 bg-gradient-to-b from-[#081224]/80 to-[#040914]/90 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 signal-card-glow group">
              <div>
                <div className="w-14 h-14 rounded-full border border-sky-500/40 bg-sky-950/60 flex items-center justify-center mb-6 text-sky-400 group-hover:scale-110 transition-transform">
                  <Compass className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white signal-display uppercase tracking-wider mb-3">
                  STRATEGY FIRST.
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  Identity must be rooted in business goals and audience insights, not just aesthetics.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-sky-400/80 uppercase tracking-wider flex justify-between items-center">
                <span>01 / FOUNDATION</span>
                <span>DISCOVERY &amp; AUDIENCE</span>
              </div>
            </div>

            {/* Card 2: Coherent Systems */}
            <div className="rounded-2xl border border-cyan-900/40 bg-gradient-to-b from-[#081724]/80 to-[#040d17]/90 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 signal-card-glow group">
              <div>
                <div className="w-14 h-14 rounded-full border border-cyan-500/40 bg-cyan-950/60 flex items-center justify-center mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                  <Network className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white signal-display uppercase tracking-wider mb-3">
                  COHERENT SYSTEMS.
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  A brand is more than a logo. It's a living system applied across every touchpoint.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-cyan-400/80 uppercase tracking-wider flex justify-between items-center">
                <span>02 / ARCHITECTURE</span>
                <span>TOKENS &amp; GUIDELINES</span>
              </div>
            </div>

            {/* Card 3: Bold Simplicity */}
            <div className="rounded-2xl border border-amber-900/40 bg-gradient-to-b from-[#1c1208]/80 to-[#0d0a06]/90 p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 signal-card-glow-orange group">
              <div>
                <div className="w-14 h-14 rounded-full border border-amber-500/40 bg-amber-950/60 flex items-center justify-center mb-6 text-amber-400 group-hover:scale-110 transition-transform">
                  <Radio className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-white signal-display uppercase tracking-wider mb-3">
                  BOLD SIMPLICITY.
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed font-normal">
                  We distill complex ideas into clear, memorable, and iconic visual signals.
                </p>
              </div>
              <div className="mt-8 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-amber-400/80 uppercase tracking-wider flex justify-between items-center">
                <span>03 / CLARITY</span>
                <span>SIGNAL OVER NOISE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED WORK SECTION WITH CATEGORY FILTER */}
      <section
        id="work"
        className="relative z-10 py-16 sm:py-24 border-t border-slate-800/80"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-sky-400 font-semibold block mb-2">
                PORTFOLIO SHOWCASE
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white signal-display uppercase">
                SELECTED WORK
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              <button
                onClick={() => setActiveCategory("all")}
                className={`px-3.5 py-1.5 rounded-full transition-all ${activeCategory === "all" ? "bg-sky-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(56,189,248,0.5)]" : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`}
              >
                All Systems (3)
              </button>
              <button
                onClick={() => setActiveCategory("fintech")}
                className={`px-3.5 py-1.5 rounded-full transition-all ${activeCategory === "fintech" ? "bg-sky-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(56,189,248,0.5)]" : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`}
              >
                FinTech &amp; SaaS
              </button>
              <button
                onClick={() => setActiveCategory("lifestyle")}
                className={`px-3.5 py-1.5 rounded-full transition-all ${activeCategory === "lifestyle" ? "bg-sky-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(56,189,248,0.5)]" : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`}
              >
                Lifestyle &amp; Retail
              </button>
              <button
                onClick={() => setActiveCategory("ai")}
                className={`px-3.5 py-1.5 rounded-full transition-all ${activeCategory === "ai" ? "bg-sky-500 text-slate-950 font-bold shadow-[0_0_12px_rgba(56,189,248,0.5)]" : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"}`}
              >
                Deep Tech &amp; AI
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            {/* CASE STUDY 1: QUANTUM LEAP (FinTech / SaaS) */}
            {(activeCategory === "all" || activeCategory === "fintech") && (
              <div className="rounded-2xl border border-slate-800 bg-[#060c18]/90 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-sky-500/50 signal-card-glow text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Case Study 1: FinTech / SaaS
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white signal-display">
                        Project Name: QUANTUM LEAP
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-sky-950 border border-sky-800 text-sky-400">
                      FLAGSHIP
                    </span>
                  </div>

                  {/* Interactive Sub-tab switcher for Quantum Leap */}
                  <div className="flex gap-1.5 pb-3 overflow-x-auto text-[11px] font-mono">
                    <button
                      onClick={() => setQuantumActiveTab("beforeAfter")}
                      className={`px-2.5 py-1 rounded-md transition-colors ${quantumActiveTab === "beforeAfter" ? "bg-sky-500/20 text-sky-300 border border-sky-500/40" : "text-slate-400 hover:text-white"}`}
                    >
                      Evolution
                    </button>
                    <button
                      onClick={() => setQuantumActiveTab("dashboard")}
                      className={`px-2.5 py-1 rounded-md transition-colors ${quantumActiveTab === "dashboard" ? "bg-sky-500/20 text-sky-300 border border-sky-500/40" : "text-slate-400 hover:text-white"}`}
                    >
                      Web App UI
                    </button>
                    <button
                      onClick={() => setQuantumActiveTab("tokens")}
                      className={`px-2.5 py-1 rounded-md transition-colors ${quantumActiveTab === "tokens" ? "bg-sky-500/20 text-sky-300 border border-sky-500/40" : "text-slate-400 hover:text-white"}`}
                    >
                      Design Tokens
                    </button>
                    <button
                      onClick={() => setQuantumActiveTab("stationery")}
                      className={`px-2.5 py-1 rounded-md transition-colors ${quantumActiveTab === "stationery" ? "bg-sky-500/20 text-sky-300 border border-sky-500/40" : "text-slate-400 hover:text-white"}`}
                    >
                      Investor Deck
                    </button>
                  </div>

                  {/* Dynamic Image Display Based on Tab */}
                  <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950">
                    <div className="relative group cursor-pointer" onClick={openQuantumLeap}>
                      {quantumActiveTab === "beforeAfter" && (
                        <img
                          src="/images/signal/quantum-logo-comparison.webp"
                          alt="Quantum Leap Before and After Logo Redesign"
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      )}
                      {quantumActiveTab === "dashboard" && (
                        <img
                          src="/images/signal/quantum-dashboard.webp"
                          alt="Quantum Leap Digital Dashboard and Multi-Device Mockup"
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      )}
                      {quantumActiveTab === "tokens" && (
                        <img
                          src="/images/signal/quantum-design-tokens.webp"
                          alt="Quantum Leap Token Taxonomy and Construction Matrix"
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      )}
                      {quantumActiveTab === "stationery" && (
                        <img
                          src="/images/signal/quantum-stationery-deck.webp"
                          alt="Quantum Leap Investor Pitch Deck and Embossed Cards"
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-sky-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-full bg-sky-500 text-slate-950 text-xs font-bold font-mono uppercase flex items-center gap-1">
                          Zoom Artifacts <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                    <div className="py-1.5 px-3 flex justify-between bg-slate-900/60 border-t border-slate-800 text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                      <span>
                        {quantumActiveTab === "beforeAfter" && "Before / After Brand Evolution"}
                        {quantumActiveTab === "dashboard" && "Enterprise Liquidity Web Console"}
                        {quantumActiveTab === "tokens" && "Spatial & Color Token Architecture"}
                        {quantumActiveTab === "stationery" && "Foil-Stamped Deck & Keycards"}
                      </span>
                      <span className="text-sky-400">Click to expand</span>
                    </div>
                  </div>
                </div>

                {/* Outcomes list */}
                <div className="mt-6 pt-5 border-t border-slate-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                    Outcome
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      <span>+150% Brand Recognition across enterprise buyers</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      <span>+24% Lead Conversion on high-touch sales pages</span>
                    </li>
                  </ul>

                  <button
                    onClick={openQuantumLeap}
                    className="mt-5 w-full py-2.5 rounded-xl border border-sky-500/30 bg-sky-950/20 hover:bg-sky-500/20 text-sky-300 font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Explore Full Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* CASE STUDY 2: AURORA HOME (Lifestyle / E-commerce) */}
            {(activeCategory === "all" || activeCategory === "lifestyle") && (
              <div className="rounded-2xl border border-slate-800 bg-[#060c18]/90 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-sky-500/50 signal-card-glow text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Case Study 2: Lifestyle E-commerce
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white signal-display">
                        Project Name: AURORA HOME
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-amber-950 border border-amber-800 text-amber-400">
                      RETAIL
                    </span>
                  </div>

                  {/* Interactive Sub-tab switcher for Aurora Home */}
                  <div className="flex gap-1.5 pb-3 overflow-x-auto text-[11px] font-mono">
                    <button
                      onClick={() => setAuroraActiveTab("palette")}
                      className={`px-2.5 py-1 rounded-md transition-colors ${auroraActiveTab === "palette" ? "bg-amber-500/20 text-amber-300 border border-amber-500/40" : "text-slate-400 hover:text-white"}`}
                    >
                      Palette &amp; Pattern
                    </button>
                    <button
                      onClick={() => setAuroraActiveTab("typography")}
                      className={`px-2.5 py-1 rounded-md transition-colors ${auroraActiveTab === "typography" ? "bg-amber-500/20 text-amber-300 border border-amber-500/40" : "text-slate-400 hover:text-white"}`}
                    >
                      Typography
                    </button>
                    <button
                      onClick={() => setAuroraActiveTab("book")}
                      className={`px-2.5 py-1 rounded-md transition-colors ${auroraActiveTab === "book" ? "bg-amber-500/20 text-amber-300 border border-amber-500/40" : "text-slate-400 hover:text-white"}`}
                    >
                      Brand Book
                    </button>
                    <button
                      onClick={() => setAuroraActiveTab("physical")}
                      className={`px-2.5 py-1 rounded-md transition-colors ${auroraActiveTab === "physical" ? "bg-amber-500/20 text-amber-300 border border-amber-500/40" : "text-slate-400 hover:text-white"}`}
                    >
                      Storefront &amp; Packaging
                    </button>
                  </div>

                  {/* Dynamic Image Display Based on Tab */}
                  <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950">
                    <div className="relative group cursor-pointer" onClick={openAuroraHome}>
                      {auroraActiveTab === "palette" && (
                        <img
                          src="/images/signal/aurora-palette-pattern.webp"
                          alt="Aurora Home Color Palette and Architectural Pattern"
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      )}
                      {auroraActiveTab === "typography" && (
                        <img
                          src="/images/signal/aurora-typography.webp"
                          alt="Aurora Home Typography and Grid System"
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      )}
                      {auroraActiveTab === "book" && (
                        <img
                          src="/images/signal/aurora-brand-book.webp"
                          alt="Aurora Home Hardcover Linen Brand Book Manual"
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      )}
                      {auroraActiveTab === "physical" && (
                        <div className="grid grid-cols-2 gap-2 p-2">
                          <img
                            src="/images/signal/aurora-packaging.webp"
                            alt="Aurora Home Packaging"
                            className="w-full h-36 object-cover rounded-lg"
                            loading="lazy"
                          />
                          <img
                            src="/images/signal/aurora-storefront.webp"
                            alt="Aurora Home Storefront"
                            className="w-full h-36 object-cover rounded-lg"
                            loading="lazy"
                          />
                        </div>
                      )}
                      <div className="absolute inset-0 bg-amber-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-full bg-amber-500 text-slate-950 text-xs font-bold font-mono uppercase flex items-center gap-1">
                          Zoom Artifacts <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                    <div className="py-1.5 px-3 flex justify-between bg-slate-900/60 border-t border-slate-800 text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                      <span>
                        {auroraActiveTab === "palette" && "Earth Tone Spectrum & Linework"}
                        {auroraActiveTab === "typography" && "Editorial Cormorant Garamond Ramp"}
                        {auroraActiveTab === "book" && "Linen Hardcover Standards Manual"}
                        {auroraActiveTab === "physical" && "Packaging Suite & Flagship Storefront"}
                      </span>
                      <span className="text-amber-400">Click to expand</span>
                    </div>
                  </div>
                </div>

                {/* Outcomes list */}
                <div className="mt-6 pt-5 border-t border-slate-800">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-2">
                    Outcome
                  </span>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300 font-medium">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      <span>Successfully launched in 2 new international markets</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-400 shrink-0" />
                      <span>+28% Increased average order value (AOV)</span>
                    </li>
                  </ul>

                  <button
                    onClick={openAuroraHome}
                    className="mt-5 w-full py-2.5 rounded-xl border border-sky-500/30 bg-sky-950/20 hover:bg-sky-500/20 text-sky-300 font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2"
                  >
                    <span>Explore Full Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}

            {/* CASE STUDY 3: SYNAPSE AI (Deep Tech & Neural Systems) */}
            {(activeCategory === "all" || activeCategory === "ai") && (
              <div className="lg:col-span-2 rounded-2xl border border-slate-800 bg-[#060c18]/90 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-violet-500/50 signal-card-glow-violet text-left">
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                        Case Study 3: Deep Tech / Enterprise AI
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-white signal-display">
                        Project Name: SYNAPSE INTELLIGENCE
                      </h3>
                    </div>
                    <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase bg-violet-950 border border-violet-800 text-violet-400">
                      DEEP TECH
                    </span>
                  </div>

                  {/* Interactive Sub-tab switcher for Synapse AI */}
                  <div className="flex gap-1.5 pb-3 overflow-x-auto text-[11px] font-mono">
                    <button
                      onClick={() => setSynapseActiveTab("identity")}
                      className={`px-2.5 py-1 rounded-md transition-colors ${synapseActiveTab === "identity" ? "bg-violet-500/20 text-violet-300 border border-violet-500/40" : "text-slate-400 hover:text-white"}`}
                    >
                      Neural Hexagon Identity &amp; Observability UI
                    </button>
                    <button
                      onClick={() => setSynapseActiveTab("hardware")}
                      className={`px-2.5 py-1 rounded-md transition-colors ${synapseActiveTab === "hardware" ? "bg-violet-500/20 text-violet-300 border border-violet-500/40" : "text-slate-400 hover:text-white"}`}
                    >
                      Server Faceplate Hardware &amp; Keycard App
                    </button>
                  </div>

                  {/* Dynamic Image Display Based on Tab */}
                  <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950">
                    <div className="relative group cursor-pointer" onClick={openSynapseAi}>
                      {synapseActiveTab === "identity" && (
                        <img
                          src="/images/signal/synapse-brand-identity.webp"
                          alt="Synapse AI Neural Graph Construction and Telemetry UI"
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      )}
                      {synapseActiveTab === "hardware" && (
                        <img
                          src="/images/signal/synapse-hardware-kiosk.webp"
                          alt="Synapse AI Anodized Server Rack Faceplate and Passkey App"
                          className="w-full h-auto object-cover"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-violet-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <span className="px-3 py-1.5 rounded-full bg-violet-500 text-slate-950 text-xs font-bold font-mono uppercase flex items-center gap-1">
                          Zoom Artifacts <ExternalLink className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                    <div className="py-1.5 px-3 flex justify-between bg-slate-900/60 border-t border-slate-800 text-[10px] font-mono tracking-wider text-slate-400 uppercase">
                      <span>
                        {synapseActiveTab === "identity" && "Hexagonal Neural Graph Vector Mark & Observability Platform"}
                        {synapseActiveTab === "hardware" && "Anodized Rack Bezel Chassis & Zero-Trust Authenticator Mobile App"}
                      </span>
                      <span className="text-violet-400">Click to expand</span>
                    </div>
                  </div>
                </div>

                {/* Outcomes list */}
                <div className="mt-6 pt-5 border-t border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block mb-1">
                      Outcome
                    </span>
                    <ul className="space-y-1 text-xs sm:text-sm text-slate-300 font-medium">
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                        <span>$180M Series B Valuation announced post-rebrand</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-violet-400 shrink-0" />
                        <span>99.98% Token Recognition across enterprise CTOs</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={openSynapseAi}
                    className="px-6 py-2.5 rounded-xl border border-violet-500/30 bg-violet-950/20 hover:bg-violet-500/20 text-violet-300 font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 shrink-0"
                  >
                    <span>Explore Full Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* INTERACTIVE DESIGN TOKEN & COLOR PALETTE INSPECTOR */}
      <section
        id="tokens"
        className="relative z-10 py-16 sm:py-24 border-t border-slate-800/80 bg-[#020612]/70"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-left">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-sky-400 font-semibold block mb-2">
              TOKEN TAXONOMY
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white signal-display uppercase">
              PRECISION DESIGN TOKENS &amp; PALETTE MATRIX
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-400 font-mono">
              Click any token swatch to copy its hexadecimal definition to clipboard.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { name: "Cyan 500", hex: "#00F0FF", role: "Primary Beacon" },
              { name: "Sky 600", hex: "#0284C7", role: "Harmonic Wave" },
              { name: "Slate 800", hex: "#1E293B", role: "Architectural Border" },
              { name: "Core 950", hex: "#030712", role: "Obsidian Canvas" },
              { name: "Amber 500", hex: "#F59E0B", role: "High-Priority Action" },
              { name: "Violet 500", hex: "#A855F7", role: "Neural Cluster" },
            ].map((token, idx) => (
              <div
                key={idx}
                onClick={() => copyToken(token.hex)}
                className="p-3 rounded-xl border border-slate-800 bg-[#060c18] hover:border-sky-500/50 cursor-pointer transition-all group flex flex-col justify-between"
              >
                <div
                  className="w-full h-14 rounded-lg mb-3 shadow-inner relative flex items-center justify-center"
                  style={{ backgroundColor: token.hex }}
                >
                  {copiedHex === token.hex ? (
                    <span className="px-2 py-0.5 rounded bg-slate-950/80 text-[10px] font-mono text-cyan-300 flex items-center gap-1 font-bold">
                      <Check className="w-3 h-3" /> Copied
                    </span>
                  ) : (
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity px-2 py-0.5 rounded bg-slate-950/70 text-[10px] font-mono text-white flex items-center gap-1">
                      <Copy className="w-3 h-3" /> Copy
                    </span>
                  )}
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white font-mono">{token.name}</div>
                  <div className="text-[11px] text-sky-400 font-mono font-semibold">{token.hex}</div>
                  <div className="text-[9px] text-slate-500 uppercase tracking-wider mt-1">{token.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE PROCESS SECTION */}
      <section
        id="process"
        className="relative z-10 py-16 sm:py-24 border-t border-slate-800/80 bg-[#020611]/80"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-left">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-sky-400 font-semibold block mb-2">
              THE PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white signal-display uppercase">
              THE SIGNAL PATH: OUR COLLABORATION JOURNEY
            </h2>
          </div>

          {/* 5 Connected Milestones Grid */}
          <div className="relative">
            {/* Connecting Wave SVG for desktop */}
            <div className="hidden lg:block absolute top-14 left-10 right-10 h-10 pointer-events-none z-0">
              <svg
                viewBox="0 0 900 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                <path
                  d="M 20 20 Q 225 -10 450 20 T 880 20"
                  stroke="#0284c7"
                  strokeWidth="2"
                  fill="none"
                  className="signal-animated-path"
                />
              </svg>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
              {/* Step 1: Discover */}
              <div className="flex flex-col items-start text-left p-5 rounded-xl border border-slate-800 bg-[#070e1c]/80 hover:border-sky-500/40 transition-colors">
                <div className="w-14 h-14 rounded-full border border-sky-500/40 bg-sky-950/80 flex items-center justify-center mb-4 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                  <Search className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white signal-display mb-1">
                  1. DISCOVER
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Business &amp; market context, stakeholder interviews &amp; customer pain points.
                </p>
              </div>

              {/* Step 2: Define */}
              <div className="flex flex-col items-start text-left p-5 rounded-xl border border-slate-800 bg-[#070e1c]/80 hover:border-sky-500/40 transition-colors">
                <div className="w-14 h-14 rounded-full border border-sky-500/40 bg-sky-950/80 flex items-center justify-center mb-4 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                  <Compass className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white signal-display mb-1">
                  2. DEFINE
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Positioning architecture, competitive whitespace &amp; brand North Star.
                </p>
              </div>

              {/* Step 3: Design */}
              <div className="flex flex-col items-start text-left p-5 rounded-xl border border-sky-500/40 bg-[#070e1c]/80 hover:border-sky-500 transition-colors">
                <div className="w-14 h-14 rounded-full border border-sky-500/40 bg-sky-950/80 flex items-center justify-center mb-4 text-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                  <PenTool className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white signal-display mb-1">
                  3. DESIGN
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Strategic design systems, bespoke logo marks &amp; distinctive typography.
                </p>
              </div>

              {/* Step 4: Systemize */}
              <div className="flex flex-col items-start text-left p-5 rounded-xl border border-cyan-800 bg-[#070e1c]/80 hover:border-cyan-500/40 transition-colors">
                <div className="w-14 h-14 rounded-full border border-cyan-500/40 bg-cyan-950/80 flex items-center justify-center mb-4 text-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.25)]">
                  <Network className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-white signal-display mb-1">
                  4. SYSTEMIZE
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Complete brand guidelines, design tokens &amp; modular multi-platform kits.
                </p>
              </div>

              {/* Step 5: Activate */}
              <div className="flex flex-col items-start text-left p-5 rounded-xl border border-amber-800 bg-[#070e1c]/80 hover:border-amber-500/40 transition-colors">
                <div className="w-14 h-14 rounded-full border border-amber-500/40 bg-amber-950/80 flex items-center justify-center mb-4 text-amber-400 shadow-[0_0_15px_rgba(245,158,11,0.25)]">
                  <Rocket className="w-6 h-6" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-amber-300 signal-display mb-1">
                  5. ACTIVATE
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Global rollout support, digital touchpoints &amp; launch team enablement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE "SIGNAL STRENGTH" BRAND READINESS AUDIT CALCULATOR */}
      <section
        id="audit"
        className="relative z-10 py-16 sm:py-24 border-t border-slate-800/80 bg-[#030815]/90"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-sky-500/30 bg-[#060c18] p-6 sm:p-10 signal-card-glow text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-sky-400 font-semibold block mb-1">
                  FOUNDER SELF-ASSESSMENT
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-white signal-display uppercase">
                  BRAND SIGNAL STRENGTH INDEX
                </h2>
              </div>

              {/* Computed Score Badge */}
              <div className="p-4 rounded-xl border border-sky-500/40 bg-sky-950/50 flex items-center gap-4 shrink-0">
                <div className="text-right">
                  <div className="text-[10px] font-mono text-slate-400 uppercase">SIGNAL SCORE</div>
                  <div className="text-3xl font-extrabold text-cyan-300 font-mono">{signalScore}%</div>
                </div>
                <div className="w-3 h-10 rounded-full bg-slate-800 overflow-hidden flex flex-col justify-end">
                  <div
                    className="w-full bg-gradient-to-t from-sky-500 to-cyan-300 rounded-full transition-all duration-500"
                    style={{ height: `${signalScore}%` }}
                  />
                </div>
              </div>
            </div>

            {/* Assessment Step Inputs */}
            <div className="space-y-6">
              {/* Question 1: Stage */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
                  01 // Stage of Company Growth
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setAuditStage("seed")}
                    className={`py-2.5 px-3 rounded-lg border text-center transition-all ${auditStage === "seed" ? "border-sky-400 bg-sky-500/20 text-white font-bold" : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"}`}
                  >
                    Seed / Stealth
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuditStage("growth")}
                    className={`py-2.5 px-3 rounded-lg border text-center transition-all ${auditStage === "growth" ? "border-sky-400 bg-sky-500/20 text-white font-bold" : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"}`}
                  >
                    Series A-B Growth
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuditStage("enterprise")}
                    className={`py-2.5 px-3 rounded-lg border text-center transition-all ${auditStage === "enterprise" ? "border-sky-400 bg-sky-500/20 text-white font-bold" : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"}`}
                  >
                    Global Enterprise
                  </button>
                </div>
              </div>

              {/* Question 2: Touchpoints */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
                  02 // Primary Brand Touchpoints
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setAuditTouchpoints("digital")}
                    className={`py-2.5 px-3 rounded-lg border text-center transition-all ${auditTouchpoints === "digital" ? "border-cyan-400 bg-cyan-500/20 text-white font-bold" : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"}`}
                  >
                    Pure Digital / Web App
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuditTouchpoints("physical")}
                    className={`py-2.5 px-3 rounded-lg border text-center transition-all ${auditTouchpoints === "physical" ? "border-cyan-400 bg-cyan-500/20 text-white font-bold" : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"}`}
                  >
                    Packaging &amp; Retail
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuditTouchpoints("hybrid")}
                    className={`py-2.5 px-3 rounded-lg border text-center transition-all ${auditTouchpoints === "hybrid" ? "border-cyan-400 bg-cyan-500/20 text-white font-bold" : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"}`}
                  >
                    Hybrid Hardware + Cloud
                  </button>
                </div>
              </div>

              {/* Question 3: Current Consistency */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-300 block mb-2">
                  03 // Current Design Asset Consistency
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                  <button
                    type="button"
                    onClick={() => setAuditConsistency("fragmented")}
                    className={`py-2.5 px-3 rounded-lg border text-center transition-all ${auditConsistency === "fragmented" ? "border-amber-400 bg-amber-500/20 text-white font-bold" : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"}`}
                  >
                    Fragmented / Outdated
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuditConsistency("moderate")}
                    className={`py-2.5 px-3 rounded-lg border text-center transition-all ${auditConsistency === "moderate" ? "border-amber-400 bg-amber-500/20 text-white font-bold" : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"}`}
                  >
                    Partial Guidelines
                  </button>
                  <button
                    type="button"
                    onClick={() => setAuditConsistency("standardized")}
                    className={`py-2.5 px-3 rounded-lg border text-center transition-all ${auditConsistency === "standardized" ? "border-amber-400 bg-amber-500/20 text-white font-bold" : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"}`}
                  >
                    Ready for Full System
                  </button>
                </div>
              </div>
            </div>

            {/* Strategic Diagnostic Recommendation */}
            <div className="mt-8 p-4 rounded-xl border border-sky-900/50 bg-sky-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-sky-400 block mb-1">
                  STRATEGIC VERDICT
                </span>
                <p className="text-xs sm:text-sm text-slate-200">
                  {signalScore >= 75
                    ? "High Signal Potential: Your company is ideally positioned for a tier-one identity & design token system."
                    : "Signal Noise Alert: Inconsistent visual touchpoints are likely hindering enterprise close rates. A cohesive brand architecture is strongly advised."}
                </p>
              </div>

              <a
                href="#inquire"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    projectType: "Full Brand Identity",
                    message: `Signal Strength Score: ${signalScore}%. Growth Stage: ${auditStage}. Touchpoints: ${auditTouchpoints}. Consistency: ${auditConsistency}. We need to amplify our brand clarity.`,
                  }));
                }}
                className="px-5 py-2 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0 text-center"
              >
                Transmit to Brief &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CREDIBLE OUTCOMES & MULTI-FOUNDER TESTIMONIALS */}
      <section
        id="outcomes"
        className="relative z-10 py-16 sm:py-24 border-t border-slate-800/80"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-10">
            <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-[0.2em] text-slate-200 signal-display">
              CREDIBLE OUTCOMES
            </h2>

            {/* Client Logo Strip */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-60 font-mono text-xs sm:text-sm tracking-widest uppercase">
              <span className="hover:opacity-100 hover:text-sky-400 transition-all cursor-default">
                client
              </span>
              <span className="hover:opacity-100 hover:text-sky-400 transition-all cursor-default">
                • quantpulse
              </span>
              <span className="hover:opacity-100 hover:text-sky-400 transition-all cursor-default">
                ☼ solaria
              </span>
              <span className="hover:opacity-100 hover:text-sky-400 transition-all cursor-default">
                ☵ vortex
              </span>
              <span className="hover:opacity-100 hover:text-sky-400 transition-all cursor-default">
                ⚡ flowlabs
              </span>
            </div>
          </div>

          {/* Testimonial Switcher Tabs */}
          <div className="flex justify-center gap-2 mb-6">
            {testimonials.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx as 0 | 1 | 2)}
                className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-mono transition-all ${activeTestimonial === idx ? "border-sky-400 bg-sky-500/20 text-white font-bold" : "border-slate-800 text-slate-400 hover:text-white"}`}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-5 h-5 rounded-full object-cover"
                />
                <span>{t.name}</span>
              </button>
            ))}
          </div>

          {/* Testimonial Box */}
          <div className="rounded-2xl border border-slate-800 bg-[#060c18]/90 p-6 sm:p-8 text-left signal-card-glow mb-10 transition-all">
            <div className="flex flex-col sm:flex-row items-center gap-6">
              {/* Client Avatar */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-2 border-sky-400/50 shrink-0 shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Quote & Attribution */}
              <div className="space-y-3">
                <div className="inline-block px-2.5 py-0.5 rounded-md bg-sky-950/60 border border-sky-800/60 text-[10px] font-mono text-cyan-300 font-bold uppercase">
                  {testimonials[activeTestimonial].badge}
                </div>
                <p className="text-base sm:text-lg text-slate-100 font-medium leading-relaxed italic">
                  “{testimonials[activeTestimonial].quote}”
                </p>
                <p className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  — {testimonials[activeTestimonial].title}
                </p>
              </div>
            </div>
          </div>

          {/* Circular / Badge Stat Counters */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-sky-500/40 bg-gradient-to-b from-sky-950/40 to-slate-950/80 flex flex-col items-center justify-center signal-card-glow">
              <span className="text-2xl sm:text-3xl font-extrabold text-white signal-display">
                +40%
              </span>
              <span className="text-[11px] font-mono tracking-wider text-slate-300 uppercase mt-1">
                Brand Equity
              </span>
            </div>

            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-sky-500/40 bg-gradient-to-b from-sky-950/40 to-slate-950/80 flex flex-col items-center justify-center signal-card-glow">
              <span className="text-2xl sm:text-3xl font-extrabold text-white signal-display">
                +15%
              </span>
              <span className="text-[11px] font-mono tracking-wider text-slate-300 uppercase mt-1">
                Customer Trust
              </span>
            </div>

            <div className="w-36 h-36 sm:w-40 sm:h-40 rounded-full border border-sky-500/40 bg-gradient-to-b from-sky-950/40 to-slate-950/80 flex flex-col items-center justify-center signal-card-glow">
              <span className="text-2xl sm:text-3xl font-extrabold text-white signal-display">
                $180M
              </span>
              <span className="text-[11px] font-mono tracking-wider text-slate-300 uppercase mt-1">
                Capital Raised
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* CONFIDENT INQUIRY PATH (CONTACT FORM) */}
      <section
        id="inquire"
        className="relative z-10 py-16 sm:py-24 border-t border-slate-800/80 bg-[#02050e]"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-slate-800 bg-[#060c18]/95 p-6 sm:p-10 signal-card-glow text-center">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400 block mb-2">
              CONFIDENT INQUIRY PATH
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white signal-display uppercase mb-3">
              READY TO AMPLIFY YOUR BRAND?
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto mb-8 font-mono">
              Let's discuss your project, challenges, and goals. I'll respond within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-xl border border-sky-500/50 bg-sky-950/30 text-center signal-modal-animate">
                <CheckCircle2 className="w-12 h-12 text-sky-400 mx-auto mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">
                  Inquiry Transmitted Successfully
                </h3>
                <p className="text-xs font-mono text-slate-300">
                  Thank you, {formData.name || "friend"}. I'll review your project details and respond to {formData.email || "your inbox"} within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      name: "",
                      company: "",
                      email: "",
                      projectType: "Full Brand Identity",
                      budget: "$25k - $50k",
                      message: "",
                    });
                  }}
                  className="mt-5 px-5 py-2 rounded-full border border-sky-500/40 text-sky-300 text-xs font-mono font-semibold hover:bg-sky-500/20 transition-colors"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Name"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="signal-input w-full rounded-xl px-4 py-3 text-sm"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Company / Organization"
                      value={formData.company}
                      onChange={(e) =>
                        setFormData({ ...formData, company: e.target.value })
                      }
                      className="signal-input w-full rounded-xl px-4 py-3 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Work Email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="signal-input w-full rounded-xl px-4 py-3 text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({ ...formData, projectType: e.target.value })
                      }
                      className="signal-input w-full rounded-xl px-4 py-3 text-sm appearance-none cursor-pointer"
                    >
                      <option value="Full Brand Identity" className="bg-slate-900 text-white">
                        Project: Full Brand Identity
                      </option>
                      <option value="Design System & Guidelines" className="bg-slate-900 text-white">
                        Project: Design System &amp; Tokens
                      </option>
                      <option value="Deep Tech & AI Visual Platform" className="bg-slate-900 text-white">
                        Project: Deep Tech / AI Platform
                      </option>
                      <option value="Lifestyle Storefront & Packaging" className="bg-slate-900 text-white">
                        Project: Storefront &amp; Packaging
                      </option>
                    </select>
                  </div>

                  <div>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="signal-input w-full rounded-xl px-4 py-3 text-sm appearance-none cursor-pointer"
                    >
                      <option value="$15k - $25k" className="bg-slate-900 text-white">
                        Estimated Budget: $15k - $25k
                      </option>
                      <option value="$25k - $50k" className="bg-slate-900 text-white">
                        Estimated Budget: $25k - $50k
                      </option>
                      <option value="$50k+" className="bg-slate-900 text-white">
                        Estimated Budget: $50k+ (Comprehensive)
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about your project, current brand challenges, and timeline..."
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="signal-input w-full rounded-xl px-4 py-3 text-sm resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_35px_rgba(56,189,248,0.5)] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING SIGNAL...</span>
                    ) : (
                      <>
                        <span>START THE CONVERSATION</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative z-10 border-t border-slate-800/80 bg-[#02050c] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="flex items-end gap-0.5 h-5">
                <span className="w-1 h-3 bg-sky-500 rounded-sm" />
                <span className="w-1 h-5 bg-cyan-400 rounded-sm" />
                <span className="w-1 h-3 bg-sky-300 rounded-sm" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-base font-black tracking-wider text-white signal-display">
                  SIGNAL
                </span>
                <span className="text-[8px] font-mono tracking-[0.25em] text-slate-400 uppercase -mt-1">
                  BRAND DESIGNER
                </span>
              </div>
            </div>

            {/* Navigation & Email */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono uppercase tracking-wider text-slate-400">
              <a href="#work" className="hover:text-white transition-colors">
                Work
              </a>
              <a href="#tokens" className="hover:text-white transition-colors">
                Tokens
              </a>
              <a href="#process" className="hover:text-white transition-colors">
                Process
              </a>
              <a href="#audit" className="hover:text-white transition-colors">
                Audit
              </a>
              <a href="#outcomes" className="hover:text-white transition-colors">
                Outcomes
              </a>
              <a href="#inquire" className="hover:text-white transition-colors">
                Inquire
              </a>
              <a
                href="mailto:hello@signaldesign.studio"
                className="text-sky-400 hover:text-sky-300 transition-colors lowercase"
              >
                hello@signaldesign.studio
              </a>
            </div>

            {/* Social Icons (using clean inline SVGs) */}
            <div className="flex items-center gap-4 text-slate-400">
              {/* LinkedIn */}
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-slate-800 hover:border-sky-400 hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.99 0-1.8-.8-1.8-1.79 0-.99.81-1.8 1.8-1.8.99 0 1.8.81 1.8 1.8 0 .99-.81 1.79-1.8 1.79m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                </svg>
              </a>

              {/* Dribbble / Portfolio */}
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-slate-800 hover:border-sky-400 hover:text-white transition-colors"
                aria-label="Dribbble"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 0 1 1.93 5.31c-.324-.007-1.8-.072-3.604-.072-.452 0-.92.006-1.398.018a17.38 17.38 0 0 0-2.316-4.664c2.253-.33 4.283-.497 5.388-.592zm-7.61-2.43c1.782 0 3.425.592 4.75 1.587-.99.09-2.85.253-4.985.568a28.09 28.09 0 0 0-2.617-2.028c.88-.084 1.84-.127 2.852-.127zm-4.32 1.378a26.11 26.11 0 0 1 2.455 1.895A21.1 21.1 0 0 0 4.14 11.23a8.55 8.55 0 0 1 2.535-5.672zM3.56 13.06c.71-.02 2.65-.05 4.74.05a27.67 27.67 0 0 1 .715 5.51 8.528 8.528 0 0 1-5.455-5.56zm7.25 6.84c-.16-1.57-.45-3.32-.78-4.99 1.62-.06 3.19-.07 4.54-.07 1.2 0 2.22.02 3.01.07a8.553 8.553 0 0 1-6.77 4.99zm7.99-3.3c-.7-.04-1.63-.06-2.73-.06-1.25 0-2.72.01-4.24.07.29 1.48.54 3.03.68 4.41a8.49 8.49 0 0 0 6.29-4.42z" />
                </svg>
              </a>

              {/* Twitter / X */}
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full border border-slate-800 hover:border-sky-400 hover:text-white transition-colors"
                aria-label="X (Twitter)"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-500 gap-4">
            <p>© 2026 SIGNAL BRAND DESIGNER. ALL RIGHTS RESERVED.</p>
            <p className="flex items-center gap-1">
              <span>DESIGNED &amp; ENGINEERED FOR STRATEGIC IMPACT</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SignalBrandDesigner;
