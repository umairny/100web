import React, { useState, useRef, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  Atom,
  Play,
  Code2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ExternalLink,
  X,
  Menu,
  ShieldCheck,
  Zap,
  Globe,
  Radio,
  Send,
  Volume2,
  VolumeX,
  Calendar,
  Clock,
  Copy,
  Check,
  Cpu,
  Layers,
  Activity,
} from "lucide-react";


interface SystemProject {
  id: string;
  title: string;
  subtitle: string;
  category: "Fintech" | "Deep Tech" | "Bio-AI" | "Logistics";
  image: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  summary: string;
  deliverables: string[];
  stack: string[];
}

const FEATURED_SYSTEMS: SystemProject[] = [
  {
    id: "quantum-payments",
    title: "QUANTUM PAYMENTS",
    subtitle: "REDEFINING FINTECH UI",
    category: "Fintech",
    image: "/images/axiom/quantum-payments.webp",
    tags: ["High-Throughput", "Distributed Ledger", "Institutional UI"],
    metrics: [
      { label: "Latency Reduction", value: "99.4%" },
      { label: "Execution Volume", value: "$12B+" },
      { label: "Client Conversion", value: "+38%" },
    ],
    summary:
      "A zero-friction, ultra-low latency trading and settlement dashboard engineered for quantitative liquidity providers and institutional crypto markets.",
    deliverables: [
      "Custom WebGL Real-time Visualizer",
      "Sub-millisecond Order Routing UI",
      "Multi-Currency Liquidity Matrices",
      "SOC2-Compliant Design System",
    ],
    stack: ["WebGL", "Rust / Wasm", "React 19", "Tailwind CSS", "WebSocket Engine"],
  },
  {
    id: "aether-space",
    title: "AETHER SPACE",
    subtitle: "SCALING SAAS GROWTH",
    category: "Deep Tech",
    image: "/images/axiom/aether-space.webp",
    tags: ["Telemetry", "Orbital Logistics", "Enterprise Cloud"],
    metrics: [
      { label: "Satellite Nodes", value: "1,420+" },
      { label: "Telemetry Stream", value: "48GB/s" },
      { label: "User Retention", value: "96.8%" },
    ],
    summary:
      "A next-generation orbital telemetry platform designed to visualize constellations, schedule downlink windows, and manage high-payload spacecraft missions.",
    deliverables: [
      "3D Constellation Mapping Viewport",
      "Automated Ground-Station Scheduler",
      "Dynamic Mission Control HUD",
      "Cross-Platform Desktop & Web Client",
    ],
    stack: ["Three.js", "TypeScript", "gRPC-Web", "Distributed Timeseries", "Electron"],
  },
  {
    id: "synapse-health",
    title: "SYNAPSE HEALTH",
    subtitle: "AI PLATFORM DESIGN",
    category: "Bio-AI",
    image: "/images/axiom/synapse-health.webp",
    tags: ["Neural Diagnostics", "Clinical Inference", "FDA Ready"],
    metrics: [
      { label: "Diagnostic Accuracy", value: "99.2%" },
      { label: "Physician Adoption", value: "85k+" },
      { label: "Review Time", value: "-64%" },
    ],
    summary:
      "An intelligent neural radiology diagnostic suite transforming how clinical oncologists parse high-density scan volumes with explainable AI overlays.",
    deliverables: [
      "Deep Learning Diagnostic Interface",
      "DICOM Image Rendering Engine",
      "Predictive Bio-Marker Timeline",
      "HIPAA-Grade Collaboration Workspace",
    ],
    stack: ["PyTorch Interop", "Cornerstone.js", "Next.js", "Tailwind v4", "WebAssembly"],
  },
  {
    id: "vanguard-logistics",
    title: "VANGUARD LOGISTICS",
    subtitle: "SUPPLY CHAIN UX",
    category: "Logistics",
    image: "/images/axiom/vanguard-logistics.webp",
    tags: ["Predictive Routing", "Global Fleet", "IoT Telemetry"],
    metrics: [
      { label: "Active Cargo Routes", value: "14,800" },
      { label: "Fuel Efficiency", value: "+22%" },
      { label: "On-Time Fulfillment", value: "99.8%" },
    ],
    summary:
      "An end-to-end autonomous freight orchestrator that dynamically reroutes global intermodal shipments based on live weather, port congestions, and energy grids.",
    deliverables: [
      "Global Real-Time Dispatch Console",
      "Autonomous Hauler Telemetry HUD",
      "Predictive Port Congestion Engine",
      "Driverless Handoff Mobile App",
    ],
    stack: ["Deck.gl", "Mapbox GL", "Node.js", "Redis Edge", "Reactive Microservices"],
  },
];

const ECOSYSTEM_SERVICES = [
  {
    id: "strategy",
    title: "STRATEGY",
    desc: "Define market position and user journeys.",
    icon: Compass,
    details: [
      "Market differentiation & moat analysis",
      "Audience mental models & user journey mapping",
      "Technical feasibility & architecture blueprints",
      "Value proposition refinement",
    ],
  },
  {
    id: "web-app",
    title: "WEB & APP",
    desc: "Craft high-converting, bespoke platforms.",
    icon: Atom,
    details: [
      "Full-stack React & Next.js web applications",
      "Custom responsive design systems & token libraries",
      "High-speed APIs & GraphQL integration",
      "Micro-animations & fluid WebGL interactions",
    ],
  },
  {
    id: "commerce",
    title: "COMMERCE",
    desc: "Design frictionless online transaction experiences.",
    icon: Play,
    details: [
      "Sub-second checkout & payment gateway orchestration",
      "B2B subscription & entitlement models",
      "High-AOV conversion rate optimization",
      "Unified omnichannel cart architecture",
    ],
  },
  {
    id: "optimizati",
    title: "OPTIMIZATI",
    desc: "Analyse and improve performance.",
    icon: Code2,
    details: [
      "Core Web Vitals tuning & 100/100 Lighthouse audits",
      "Behavioral heatmapping & multivariate testing",
      "Database query profiling & edge caching",
      "Ongoing conversion uplift sprints",
    ],
  },
];

const TIMELINE_STEPS = [
  {
    side: "left",
    step: "01",
    label: "IDENTIFY",
    desc: "Define market position and user journeys. Build cohesive visual and verbal systems.",
    highlight: "Discovery & Alignment",
    duration: "Week 1",
  },
  {
    side: "right",
    step: "02",
    label: "DECODE",
    desc: "Define market position and user journeys, and user archetypes.",
    highlight: "User Psychology & Insights",
    duration: "Week 2",
  },
  {
    side: "right",
    step: "03",
    label: "CONCEPT",
    desc: "Build cohesive visual and verbal systems.",
    highlight: "Design Architecture",
    duration: "Week 3",
  },
  {
    side: "left",
    step: "04",
    label: "PROTOTYPE",
    desc: "Craft high-converting, bespoke platforms.",
    highlight: "Interactive Simulation",
    duration: "Weeks 4-5",
  },
  {
    side: "right",
    step: "05",
    label: "BUILD",
    desc: "High-converting, bespoke platforms. Design frictionless experiences.",
    highlight: "Production Engineering",
    duration: "Weeks 6-8",
  },
  {
    side: "left",
    step: "06",
    label: "LAUNCH",
    desc: "Design frictionless online transaction experiences.",
    highlight: "Deployment & Orchestration",
    duration: "Week 9",
  },
  {
    side: "right",
    step: "07",
    label: "LAUNCH",
    desc: "Design frictionless online transaction experiences.",
    highlight: "Market Activation",
    duration: "Week 10",
  },
  {
    side: "right",
    step: "08",
    label: "EVALUATE",
    desc: "Analyze and improve performance of platforms and ecosystems.",
    highlight: "Telemetry & Growth Iteration",
    duration: "Ongoing",
  },
];

const TESTIMONIALS = [
  {
    quote:
      "WORKING WITH AXIOM LABS WAS A CATALYST FOR OUR GROWTH. THEY DIDN'T JUST DELIVER A PRODUCT; THEY BUILT AN ASSET.",
    name: "Marcus Vance",
    title: "Chief Product Officer",
    company: "Quantum Payments",
  },
  {
    quote:
      "THE LEVEL OF TECHNICAL PRECISION AND SYSTEMIC THINKING AXIOM BROUGHT TO AETHER SPACE COMPLETELY RESET OUR BENCHMARK FOR DIGITAL AGENCIES.",
    name: "Sarah Lin",
    title: "VP of Engineering",
    company: "Aether Space",
  },
  {
    quote:
      "AXIOM CRAFTED A PLATFORM SO INTUITIVE THAT CLINICIANS ADOPTED IT IN WEEKS INSTEAD OF QUARTERS. EXCEPTIONAL EXECUTION.",
    name: "Dr. Aris Thorne",
    title: "Chief Executive Officer",
    company: "Synapse Health AI",
  },
];

const TRUST_PARTNERS = [
  "QUANTUM PROTOCOL",
  "AETHER ORBITAL",
  "SYNAPSE NEURAL AI",
  "VANGUARD FLEET",
  "NEXA DYNAMICS",
  "HYPERION COMMERCE",
  "APEX VENTURES",
  "KINETIC LABS",
];

export function AxiomLabs() {
  // Mobile Nav & Drawers
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [connectDrawerOpen, setConnectDrawerOpen] = useState(false);
  const [calendarModalOpen, setCalendarModalOpen] = useState(false);

  // Active Project Detail Modal
  const [activeModalProject, setActiveModalProject] =
    useState<SystemProject | null>(null);

  // Ecosystem Node
  const [activeEcosystemNode, setActiveEcosystemNode] = useState<string | null>(
    "strategy"
  );

  // Filter for featured systems
  const [categoryFilter, setCategoryFilter] = useState<string>("ALL");
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  // Testimonial selector
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Active Timeline Step Highlight
  const [activeTimelineStep, setActiveTimelineStep] = useState<string>("01");

  // Web Audio UI Sound Toggle
  const [audioEnabled, setAudioEnabled] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);

  // Email Copy State
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    websiteUrl: "",
    projectScope: "",
    budget: "$50k - $120k",
    timeline: "Immediate (<30d)",
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Carousel ref
  const carouselRef = useRef<HTMLDivElement>(null);

  // Synthesize futuristic sound effects using Web Audio API
  const playSound = (freq = 440, type: OscillatorType = "sine", duration = 0.08) => {
    if (!audioEnabled) return;
    try {
      if (!audioCtxRef.current) {
        const AudioContextClass =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        audioCtxRef.current = new AudioContextClass();
      }
      if (audioCtxRef.current.state === "suspended") {
        audioCtxRef.current.resume();
      }
      const ctx = audioCtxRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch {
      // Audio playback failed silently
    }
  };

  const filteredSystems = useMemo(() => {
    if (categoryFilter === "ALL") return FEATURED_SYSTEMS;
    return FEATURED_SYSTEMS.filter((s) => s.category.toUpperCase() === categoryFilter);
  }, [categoryFilter]);

  const scrollCarousel = (direction: "left" | "right") => {
    playSound(direction === "right" ? 580 : 420, "triangle", 0.1);
    if (carouselRef.current) {
      const scrollAmount = 320;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const handleCarouselScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      const totalScrollable = scrollWidth - clientWidth;
      if (totalScrollable > 0) {
        const ratio = scrollLeft / totalScrollable;
        const index = Math.round(ratio * (filteredSystems.length - 1));
        setCurrentSlideIndex(Math.max(0, Math.min(filteredSystems.length - 1, index)));
      }
    }
  };

  const handleCopyEmail = () => {
    playSound(880, "sine", 0.12);
    navigator.clipboard.writeText("inquiries@axiomlabs.io");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    playSound(720, "sine", 0.15);
    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
      playSound(1040, "triangle", 0.25);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          websiteUrl: "",
          projectScope: "",
          budget: "$50k - $120k",
          timeline: "Immediate (<30d)",
        });
        setFormSubmitted(false);
      }, 6000);
    }, 1200);
  };

  const scrollToSection = (id: string) => {
    playSound(520, "sine", 0.08);
    setMobileMenuOpen(false);
    setConnectDrawerOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="axiom-container min-h-screen selection:bg-[var(--ax-accent)]/30 selection:text-[var(--ax-accent)]">
      {/* Inline Styles — replaces external AxiomLabs.css */}
      <style>{`
        /* ================= AXIOM LABS DESIGN TOKENS ================= */
        .axiom-container {
          --ax-bg: var(--theme-bg-base, #030712);
          --ax-surface: var(--theme-bg-surface, #070d1a);
          --ax-card: var(--theme-bg-card, #0a1628);
          --ax-card-hover: var(--theme-bg-card-hover, #0f213d);
          --ax-card-glass: rgba(10, 22, 40, 0.75);
          --ax-accent: var(--theme-accent-primary, #22d3ee);
          --ax-accent-secondary: var(--theme-accent-secondary, #0ea5e9);
          --ax-accent-glow: var(--theme-accent-glow, rgba(34, 211, 238, 0.35));
          --ax-accent-gradient: var(--theme-accent-gradient, linear-gradient(135deg, #22d3ee 0%, #0ea5e9 100%));
          --ax-text: var(--theme-text-primary, #f8fafc);
          --ax-text-muted: var(--theme-text-muted, #94a3b8);
          --ax-border: var(--theme-border, rgba(34, 211, 238, 0.18));
          --ax-border-subtle: rgba(255, 255, 255, 0.08);
          --ax-header-bg: color-mix(in srgb, var(--ax-bg) 85%, transparent);
          --ax-input-bg: rgba(8, 14, 26, 0.85);
          --ax-hex-outer: #061224;
          --ax-hex-inner: #030a16;

          background-color: var(--ax-bg);
          color: var(--ax-text);
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
          overflow-x: hidden;
          position: relative;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Light Mode Adaptive Tokens */
        html.light .axiom-container,
        body.light .axiom-container,
        [data-theme-mood="light"] .axiom-container,
        :root[data-theme-mood="light"] .axiom-container,
        :root[data-theme-active="true"][data-theme-mood="light"] .axiom-container,
        :root.light .axiom-container {
          --ax-bg: var(--theme-bg-base, #f8fafc);
          --ax-surface: var(--theme-bg-surface, #ffffff);
          --ax-card: var(--theme-bg-card, #f1f5f9);
          --ax-card-hover: var(--theme-bg-card-hover, #e2e8f0);
          --ax-card-glass: rgba(255, 255, 255, 0.88);
          --ax-accent: #0284c7;
          --ax-accent-secondary: #0369a1;
          --ax-accent-glow: rgba(2, 132, 199, 0.25);
          --ax-accent-gradient: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
          --ax-text: var(--theme-text-primary, #0f172a);
          --ax-text-muted: var(--theme-text-muted, #475569);
          --ax-border: var(--theme-border, rgba(2, 132, 199, 0.18));
          --ax-border-subtle: rgba(0, 0, 0, 0.06);
          --ax-header-bg: color-mix(in srgb, var(--ax-surface) 90%, transparent);
          --ax-input-bg: rgba(255, 255, 255, 0.95);
          --ax-hex-outer: #f1f5f9;
          --ax-hex-inner: #ffffff;
        }

        /* Original Preset explicitly in Light Mode */
        [data-theme-preset="original"][data-theme-mood="light"] .axiom-container,
        [data-theme-preset="original"] html.light .axiom-container,
        html.light[data-theme-preset="original"] .axiom-container,
        html.light:not([data-theme-preset]) .axiom-container,
        :root:not([data-theme-preset])[data-theme-mood="light"] .axiom-container {
          --ax-accent: #0284c7 !important;
          --ax-accent-secondary: #0369a1 !important;
          --ax-accent-glow: rgba(2, 132, 199, 0.25) !important;
          --ax-accent-gradient: linear-gradient(135deg, #0284c7 0%, #0369a1 100%) !important;
        }

        /* Original Preset explicitly in Dark Mode */
        [data-theme-preset="original"][data-theme-mood="dark"] .axiom-container,
        [data-theme-preset="original"] html.dark .axiom-container,
        html.dark[data-theme-preset="original"] .axiom-container,
        html.dark:not([data-theme-preset]) .axiom-container,
        :root:not([data-theme-preset])[data-theme-mood="dark"] .axiom-container,
        :root:not([data-theme-preset]):not([data-theme-mood="light"]) .axiom-container {
          --ax-accent: #22d3ee !important;
          --ax-accent-secondary: #0ea5e9 !important;
          --ax-accent-glow: rgba(34, 211, 238, 0.35) !important;
          --ax-accent-gradient: linear-gradient(135deg, #06b6d4 0%, #0284c7 100%) !important;
        }

        /* Support any preset from theme selector (Emerald, Violet, Cyberpunk, Amber, etc.) */
        [data-theme-preset]:not([data-theme-preset="original"]) .axiom-container,
        [data-theme-active="true"]:not([data-theme-preset="original"]) .axiom-container {
          --ax-accent: var(--theme-accent-primary) !important;
          --ax-accent-secondary: var(--theme-accent-secondary) !important;
          --ax-accent-glow: var(--theme-accent-glow) !important;
          --ax-accent-gradient: var(--theme-accent-gradient) !important;
        }

        /* ================= AXIOM NAVBAR & NAVIGATION ================= */
        .axiom-navbar {
          background-color: var(--ax-header-bg);
          border-bottom: 1px solid var(--ax-border);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.15);
        }

        .axiom-logo-text {
          color: var(--ax-text);
          font-weight: 700;
          letter-spacing: -0.02em;
          transition: color 0.3s ease;
        }

        .axiom-delta-cutout {
          fill: var(--ax-bg);
          transition: fill 0.3s ease;
        }

        .axiom-nav-link {
          color: var(--ax-text-muted);
          position: relative;
          padding: 6px 2px;
          font-weight: 500;
          font-size: 0.875rem;
          transition: color 0.2s ease;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        .axiom-nav-link:hover {
          color: var(--ax-accent);
        }
        .axiom-nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: var(--ax-accent);
          transition: width 0.25s ease, left 0.25s ease;
          border-radius: 9999px;
        }
        .axiom-nav-link:hover::after {
          width: 100%;
          left: 0;
        }

        /* Audio Pill Button */
        .axiom-audio-pill {
          background-color: color-mix(in srgb, var(--ax-card) 75%, transparent);
          border: 1px solid var(--ax-border);
          color: var(--ax-text-muted);
          transition: all 0.25s ease;
        }
        .axiom-audio-pill:hover {
          color: var(--ax-text);
          border-color: var(--ax-accent);
        }
        .axiom-audio-pill.active {
          background-color: color-mix(in srgb, var(--ax-accent) 15%, transparent);
          border-color: var(--ax-accent);
          color: var(--ax-accent);
          box-shadow: 0 0 12px var(--ax-accent-glow);
        }

        /* Connect Button with Equalizer Wave */
        .axiom-connect-pill {
          background: color-mix(in srgb, var(--ax-accent) 12%, var(--ax-card));
          border: 1px solid color-mix(in srgb, var(--ax-accent) 45%, transparent);
          color: var(--ax-accent);
          box-shadow: 0 2px 14px var(--ax-accent-glow);
          transition: all 0.3s ease;
        }
        .axiom-connect-pill:hover {
          background: var(--ax-accent);
          border-color: var(--ax-accent);
          color: #ffffff !important;
          box-shadow: 0 4px 22px var(--ax-accent-glow);
          transform: translateY(-1px);
        }
        .axiom-connect-pill .axiom-eq-bar {
          background-color: currentColor;
          transition: background-color 0.2s ease;
        }

        /* Mobile Controls */
        .axiom-mobile-btn {
          background-color: var(--ax-card);
          border: 1px solid var(--ax-border);
          color: var(--ax-text-muted);
          transition: all 0.2s ease;
        }
        .axiom-mobile-btn:hover {
          color: var(--ax-text);
          border-color: var(--ax-accent);
        }

        .axiom-mobile-drawer {
          background-color: var(--ax-surface);
          border-bottom: 1px solid var(--ax-border);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
        }

        .axiom-hud-drawer {
          background-color: var(--ax-surface);
          border-left: 1px solid var(--ax-border);
        }

        .axiom-modal-box {
          background-color: var(--ax-surface);
          border: 1px solid var(--ax-border);
        }

        /* ================= INTERACTIVE COMPONENT CLASSES ================= */
        .axiom-btn-primary {
          background: var(--ax-accent-gradient);
          color: #ffffff !important;
          font-weight: 600;
          box-shadow: 0 4px 20px var(--ax-accent-glow);
          border: 1px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
          overflow: hidden;
        }
        .axiom-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px var(--ax-accent-glow);
          filter: brightness(1.08);
        }

        .axiom-btn-secondary {
          background-color: color-mix(in srgb, var(--ax-card) 80%, transparent);
          border: 1px solid var(--ax-border);
          color: var(--ax-text);
          font-weight: 600;
          transition: all 0.25s ease;
        }
        .axiom-btn-secondary:hover {
          border-color: var(--ax-accent);
          color: var(--ax-accent);
          transform: translateY(-1px);
        }

        .axiom-project-card {
          background-color: var(--ax-card);
          border: 1px solid var(--ax-border);
          border-radius: 1rem;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 20px -4px rgba(0, 0, 0, 0.1);
        }
        .axiom-project-card:hover {
          transform: translateY(-6px);
          border-color: var(--ax-accent);
          box-shadow: 0 16px 40px -10px rgba(0, 0, 0, 0.2), 0 0 25px var(--ax-accent-glow);
        }

        .axiom-service-card {
          background-color: var(--ax-card);
          border: 1px solid var(--ax-border);
          border-radius: 1rem;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .axiom-service-card:hover,
        .axiom-service-card.active {
          border-color: var(--ax-accent);
          background-color: color-mix(in srgb, var(--ax-accent) 10%, var(--ax-card));
          box-shadow: 0 8px 30px -5px var(--ax-accent-glow);
          transform: scale(1.02);
        }

        .axiom-timeline-card {
          background-color: var(--ax-card);
          border: 1px solid var(--ax-border);
          border-radius: 1rem;
          transition: all 0.3s ease;
        }
        .axiom-timeline-card.active {
          border-color: var(--ax-accent);
          background-color: color-mix(in srgb, var(--ax-accent) 8%, var(--ax-card));
          box-shadow: 0 8px 30px var(--ax-accent-glow);
        }

        .axiom-timeline-node {
          background-color: var(--ax-bg);
          border: 2px solid var(--ax-border);
          transition: all 0.3s ease;
        }
        .axiom-timeline-node.active {
          border-color: var(--ax-accent);
          box-shadow: 0 0 20px var(--ax-accent-glow);
        }

        .axiom-contact-card {
          background-color: var(--ax-surface);
          border: 1px solid var(--ax-border);
          border-radius: 1.5rem;
          box-shadow: 0 20px 50px -10px rgba(0, 0, 0, 0.15), 0 0 30px var(--ax-accent-glow);
        }

        .axiom-trust-bar {
          background-color: color-mix(in srgb, var(--ax-card) 60%, var(--ax-bg));
          border-top: 1px solid var(--ax-border);
          border-bottom: 1px solid var(--ax-border);
        }

        .axiom-footer {
          background-color: color-mix(in srgb, var(--ax-surface) 90%, var(--ax-bg));
          border-top: 1px solid var(--ax-border);
          color: var(--ax-text-muted);
        }

        /* Accent text and borders across components */
        .axiom-container [class*="text-cyan-"],
        .axiom-container .text-cyan-400,
        .axiom-container .text-cyan-300,
        .axiom-container .text-cyan-200 {
          color: var(--ax-accent) !important;
        }

        .axiom-container [class*="border-cyan-"],
        .axiom-container .border-cyan-400,
        .axiom-container .border-cyan-500\/15,
        .axiom-container .border-cyan-500\/30,
        .axiom-container .border-cyan-900\/60,
        .axiom-container .border-cyan-900\/80 {
          border-color: var(--ax-border) !important;
        }

        .axiom-container [class*="bg-cyan-500\/"],
        .axiom-container [class*="bg-cyan-950\/"],
        .axiom-container .bg-cyan-950\/40,
        .axiom-container .bg-cyan-950\/60 {
          background-color: color-mix(in srgb, var(--ax-accent) 15%, transparent) !important;
        }

        .axiom-container button[class*="bg-cyan-500"],
        .axiom-container .bg-cyan-500 {
          background-color: var(--ax-accent) !important;
          color: #ffffff !important;
        }

        /* Ambience radial glow adapts to theme accent */
        .axiom-container .bg-\[radial-gradient\(ellipse_at_center\,rgba\(14\,165\,233\,0\.18\)\,transparent_70\%\)\] {
          background: radial-gradient(ellipse at center, var(--ax-accent-glow), transparent 70%) !important;
        }

        /* ================= FLAT LIGHT MODE CASCADES ================= */
        html.light .axiom-container .text-white,
        html.light .axiom-container .text-slate-100,
        html.light .axiom-container .text-slate-200,
        html.light .axiom-container h1,
        html.light .axiom-container h2,
        html.light .axiom-container h3,
        html.light .axiom-container h4,
        html.light .axiom-container h5,
        html.light .axiom-container h6,
        [data-theme-mood="light"] .axiom-container .text-white,
        [data-theme-mood="light"] .axiom-container .text-slate-100,
        [data-theme-mood="light"] .axiom-container .text-slate-200,
        [data-theme-mood="light"] .axiom-container h1,
        [data-theme-mood="light"] .axiom-container h2,
        [data-theme-mood="light"] .axiom-container h3,
        [data-theme-mood="light"] .axiom-container h4,
        [data-theme-mood="light"] .axiom-container h5,
        [data-theme-mood="light"] .axiom-container h6 {
          color: var(--ax-text) !important;
        }

        html.light .axiom-container .text-slate-300,
        html.light .axiom-container .text-slate-400,
        html.light .axiom-container .text-slate-500,
        [data-theme-mood="light"] .axiom-container .text-slate-300,
        [data-theme-mood="light"] .axiom-container .text-slate-400,
        [data-theme-mood="light"] .axiom-container .text-slate-500 {
          color: var(--ax-text-muted) !important;
        }

        /* Protect primary button text from light text overrides */
        html.light .axiom-container .axiom-btn-primary,
        html.light .axiom-container .axiom-btn-primary *,
        [data-theme-mood="light"] .axiom-container .axiom-btn-primary,
        [data-theme-mood="light"] .axiom-container .axiom-btn-primary * {
          color: #ffffff !important;
        }

        /* Dark surfaces mapped to light card/surface */
        html.light .axiom-container .bg-\[\#030712\],
        html.light .axiom-container .bg-\[\#040812\],
        html.light .axiom-container .bg-\[\#040812\]\/85,
        html.light .axiom-container .bg-\[\#0a1628\],
        html.light .axiom-container .bg-slate-950,
        html.light .axiom-container .bg-slate-900,
        html.light .axiom-container .bg-slate-900\/60,
        html.light .axiom-container .bg-slate-900\/80,
        html.light .axiom-container .bg-black\/30,
        html.light .axiom-container .bg-black\/40,
        html.light .axiom-container .bg-black\/50,
        html.light .axiom-container .bg-black\/60,
        html.light .axiom-container .bg-black\/70,
        html.light .axiom-container .bg-black\/80,
        [data-theme-mood="light"] .axiom-container .bg-\[\#030712\],
        [data-theme-mood="light"] .axiom-container .bg-\[\#040812\],
        [data-theme-mood="light"] .axiom-container .bg-\[\#040812\]\/85,
        [data-theme-mood="light"] .axiom-container .bg-\[\#0a1628\],
        [data-theme-mood="light"] .axiom-container .bg-slate-950,
        [data-theme-mood="light"] .axiom-container .bg-slate-900,
        [data-theme-mood="light"] .axiom-container .bg-slate-900\/60,
        [data-theme-mood="light"] .axiom-container .bg-slate-900\/80,
        [data-theme-mood="light"] .axiom-container .bg-black\/30,
        [data-theme-mood="light"] .axiom-container .bg-black\/40,
        [data-theme-mood="light"] .axiom-container .bg-black\/50,
        [data-theme-mood="light"] .axiom-container .bg-black\/60,
        [data-theme-mood="light"] .axiom-container .bg-black\/70,
        [data-theme-mood="light"] .axiom-container .bg-black\/80 {
          background-color: var(--ax-card) !important;
        }

        html.light .axiom-container .bg-\[\#060c18\],
        html.light .axiom-container .bg-\[\#070d1a\],
        html.light .axiom-container .bg-\[\#070e1d\],
        html.light .axiom-container .bg-\[\#070f1f\],
        html.light .axiom-container .bg-\[\#081224\],
        [data-theme-mood="light"] .axiom-container .bg-\[\#060c18\],
        [data-theme-mood="light"] .axiom-container .bg-\[\#070d1a\],
        [data-theme-mood="light"] .axiom-container .bg-\[\#070e1d\],
        [data-theme-mood="light"] .axiom-container .bg-\[\#070f1f\],
        [data-theme-mood="light"] .axiom-container .bg-\[\#081224\] {
          background-color: var(--ax-surface) !important;
        }

        html.light .axiom-container .border-slate-800,
        html.light .axiom-container .border-slate-800\/60,
        html.light .axiom-container .border-slate-800\/80,
        html.light .axiom-container .border-slate-700,
        html.light .axiom-container .border-slate-900,
        [data-theme-mood="light"] .axiom-container .border-slate-800,
        [data-theme-mood="light"] .axiom-container .border-slate-800\/60,
        [data-theme-mood="light"] .axiom-container .border-slate-800\/80,
        [data-theme-mood="light"] .axiom-container .border-slate-700,
        [data-theme-mood="light"] .axiom-container .border-slate-900 {
          border-color: var(--ax-border) !important;
        }

        html.light .axiom-container .axiom-input,
        html.light .axiom-container input,
        html.light .axiom-container textarea,
        html.light .axiom-container select,
        [data-theme-mood="light"] .axiom-container .axiom-input,
        [data-theme-mood="light"] .axiom-container input,
        [data-theme-mood="light"] .axiom-container textarea,
        [data-theme-mood="light"] .axiom-container select {
          background-color: var(--ax-input-bg) !important;
          color: var(--ax-text) !important;
          border-color: var(--ax-border) !important;
        }

        /* Custom glow utility classes */
        .axiom-text-glow {
          text-shadow: 0 0 25px color-mix(in srgb, var(--ax-accent) 45%, transparent),
                       0 0 50px color-mix(in srgb, var(--ax-accent-secondary) 25%, transparent);
        }

        .axiom-title-condensed {
          letter-spacing: -0.02em;
          word-spacing: 0.05em;
        }

        .axiom-box-glow {
          box-shadow: 0 0 35px -5px color-mix(in srgb, var(--ax-accent-secondary) 18%, transparent),
                      0 0 15px -3px color-mix(in srgb, var(--ax-accent) 25%, transparent);
        }

        .axiom-box-glow-lg {
          box-shadow: 0 0 60px -10px color-mix(in srgb, var(--ax-accent-secondary) 25%, transparent),
                      0 0 30px -5px color-mix(in srgb, var(--ax-accent) 35%, transparent);
        }

        .axiom-box-glow-cyan {
          box-shadow: 0 0 30px -5px color-mix(in srgb, var(--ax-accent) 35%, transparent),
                      inset 0 0 15px color-mix(in srgb, var(--ax-accent) 10%, transparent);
        }

        /* Equalizer soundwave animation for Connect button */
        @keyframes axiom-eq-1 {
          0%, 100% { height: 4px; }
          50% { height: 16px; }
        }
        @keyframes axiom-eq-2 {
          0%, 100% { height: 14px; }
          50% { height: 5px; }
        }
        @keyframes axiom-eq-3 {
          0%, 100% { height: 8px; }
          50% { height: 18px; }
        }
        .axiom-eq-bar-1 { animation: axiom-eq-1 1.1s infinite ease-in-out; }
        .axiom-eq-bar-2 { animation: axiom-eq-2 0.85s infinite ease-in-out; }
        .axiom-eq-bar-3 { animation: axiom-eq-3 1.35s infinite ease-in-out; }

        /* Luminous pulse for timeline node */
        @keyframes axiom-node-pulse {
          0% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--ax-accent) 70%, transparent); }
          70% { box-shadow: 0 0 0 14px color-mix(in srgb, var(--ax-accent) 0%, transparent); }
          100% { box-shadow: 0 0 0 0 color-mix(in srgb, var(--ax-accent) 0%, transparent); }
        }
        .axiom-node-beacon { animation: axiom-node-pulse 2.2s infinite cubic-bezier(0.66, 0, 0, 1); }

        /* Ambient star & hexagon orbital rotation */
        @keyframes axiom-spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        .axiom-spin-slow { animation: axiom-spin-slow 28s linear infinite; }

        @keyframes axiom-spin-reverse { from { transform: rotate(360deg); } to { transform: rotate(0deg); } }
        .axiom-spin-reverse { animation: axiom-spin-reverse 36s linear infinite; }

        /* Custom Scrollbar for Carousel */
        .axiom-carousel-track::-webkit-scrollbar { height: 6px; }
        .axiom-carousel-track::-webkit-scrollbar-track { background: var(--ax-bg); border-radius: 9999px; }
        .axiom-carousel-track::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 9999px; }
        .axiom-carousel-track::-webkit-scrollbar-thumb:hover { background: var(--ax-accent); }

        /* Glassmorphic input borders */
        .axiom-input {
          background: rgba(8, 14, 26, 0.8);
          border: 1px solid color-mix(in srgb, var(--ax-accent) 22%, transparent);
          color: #f8fafc;
          transition: all 0.25s ease;
        }
        .axiom-input:focus {
          background: rgba(11, 20, 36, 0.95);
          border-color: var(--ax-accent);
          box-shadow: 0 0 20px -2px color-mix(in srgb, var(--ax-accent) 35%, transparent);
          outline: none;
        }

        /* Ecosystem SVG Connector Animation */
        @keyframes axiom-dash { to { stroke-dashoffset: -40; } }
        .axiom-animated-line { stroke-dasharray: 6 6; animation: axiom-dash 1.4s linear infinite; }

        /* Shimmer beam effect */
        @keyframes axiom-shimmer { 0% { transform: translateX(-100%); } 100% { transform: translateX(200%); } }
        .axiom-shimmer-beam {
          position: absolute; top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(90deg, transparent, color-mix(in srgb, var(--ax-accent) 15%, transparent), transparent);
          animation: axiom-shimmer 3.5s infinite;
        }

        /* Infinite Marquee Animation for Trust Bar */
        @keyframes axiom-marquee { 0% { transform: translateX(0%); } 100% { transform: translateX(-50%); } }
        .axiom-marquee-track { display: flex; width: max-content; animation: axiom-marquee 25s linear infinite; }
        .axiom-marquee-track:hover { animation-play-state: paused; }

        /* Modal and Drawer Transitions */
        @keyframes axiom-fade-in { from { opacity: 0; transform: scale(0.97); } to { opacity: 1; transform: scale(1); } }
        .axiom-modal-animate { animation: axiom-fade-in 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        @keyframes axiom-slide-in-right { from { transform: translateX(100%); } to { transform: translateX(0); } }
        .axiom-drawer-animate { animation: axiom-slide-in-right 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        /* Futuristic Card 3D hover */
        .axiom-3d-card {
          perspective: 1000px;
          transform-style: preserve-3d;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }
        .axiom-3d-card:hover { transform: translateY(-4px); }
      `}</style>
      {/* Background Ambience Layer */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(14,165,233,0.18),transparent_70%)]" />
        <div className="absolute top-[40%] -left-48 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_center,rgba(6,182,212,0.12),transparent_70%)]" />
        <div className="absolute top-[70%] -right-48 w-[700px] h-[700px] bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.12),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0ea5e905_1px,transparent_1px),linear-gradient(to_bottom,#0ea5e905_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* ========================================================================= */}
      {/* HEADER / NAVIGATION BAR                                                  */}
      {/* ========================================================================= */}
      <header className="axiom-navbar fixed top-0 left-0 right-0 z-50 backdrop-blur-xl transition-all duration-300">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="/portfolio/axiom-labs"
            onClick={() => playSound(640, "sine", 0.1)}
            className="group flex items-center gap-3 transition-opacity hover:opacity-90"
          >
            {/* Custom Cyan Geometric Delta Logo */}
            <div className="relative flex h-10 w-10 items-center justify-center">
              <svg
                viewBox="0 0 40 40"
                className="h-8 w-8 text-[var(--ax-accent)] transition-transform duration-300 group-hover:scale-105"
                fill="none"
              >
                <path
                  d="M20 4L4 34H12L20 18L28 34H36L20 4Z"
                  fill="currentColor"
                  className="opacity-90"
                />
                <path
                  d="M20 12L10 32H16L20 23L24 32H30L20 12Z"
                  className="axiom-delta-cutout"
                />
                <circle
                  cx="20"
                  cy="20"
                  r="2.5"
                  fill="var(--ax-accent)"
                  className="animate-pulse"
                />
              </svg>
              <div className="absolute inset-0 rounded-full bg-[var(--ax-accent)]/20 blur-md -z-10 group-hover:bg-[var(--ax-accent)]/35 transition-all" />
            </div>
            <span className="axiom-logo-text text-xl font-bold tracking-tight">
              Axiom Labs
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center space-x-9 md:flex">
            <button
              onClick={() => scrollToSection("projects")}
              className="axiom-nav-link text-sm font-medium"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="axiom-nav-link text-sm font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("method")}
              className="axiom-nav-link text-sm font-medium"
            >
              Method
            </button>
            <button
              onClick={() => scrollToSection("studio")}
              className="axiom-nav-link text-sm font-medium"
            >
              Studio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="axiom-nav-link text-sm font-medium"
            >
              Contact
            </button>
          </nav>

          {/* Header Action Controls */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Audio Toggle */}
            <button
              onClick={() => {
                const next = !audioEnabled;
                setAudioEnabled(next);
                if (next) playSound(800, "sine", 0.1);
              }}
              title={audioEnabled ? "Mute interface audio" : "Enable futuristic interface audio"}
              className={`axiom-audio-pill flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ${
                audioEnabled ? "active" : ""
              }`}
            >
              {audioEnabled ? (
                <>
                  <Volume2 className="h-3.5 w-3.5" />
                  <span>AUDIO ON</span>
                </>
              ) : (
                <>
                  <VolumeX className="h-3.5 w-3.5 opacity-60" />
                  <span>AUDIO</span>
                </>
              )}
            </button>

            {/* Connect Action Button with Audio Wave / Equalizer */}
            <button
              onClick={() => {
                playSound(600, "sine", 0.1);
                setConnectDrawerOpen(true);
              }}
              className="axiom-connect-pill group relative flex items-center gap-3 rounded-full px-5 py-2 text-sm font-medium"
            >
              <span>Connect</span>
              {/* Animated Equalizer Waveform */}
              <div className="flex items-center gap-0.5 h-4">
                <span className="w-0.5 rounded-full axiom-eq-bar-1 axiom-eq-bar" />
                <span className="w-0.5 rounded-full axiom-eq-bar-2 axiom-eq-bar" />
                <span className="w-0.5 rounded-full axiom-eq-bar-3 axiom-eq-bar" />
                <span className="w-0.5 rounded-full axiom-eq-bar-1 axiom-eq-bar" />
              </div>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => {
                playSound(600, "sine", 0.1);
                setConnectDrawerOpen(true);
              }}
              className="axiom-connect-pill flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-medium"
            >
              <span>Connect</span>
              <div className="flex items-center gap-0.5 h-3">
                <span className="w-0.5 rounded-full axiom-eq-bar-1 axiom-eq-bar" />
                <span className="w-0.5 rounded-full axiom-eq-bar-2 axiom-eq-bar" />
              </div>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="axiom-mobile-btn rounded-lg p-2"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="axiom-mobile-drawer px-6 py-6 md:hidden">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("projects")}
                className="axiom-nav-link text-left text-base font-medium py-1"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="axiom-nav-link text-left text-base font-medium py-1"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("method")}
                className="axiom-nav-link text-left text-base font-medium py-1"
              >
                Method
              </button>
              <button
                onClick={() => scrollToSection("studio")}
                className="axiom-nav-link text-left text-base font-medium py-1"
              >
                Studio
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="axiom-nav-link text-left text-base font-medium py-1"
              >
                Contact
              </button>
              <div className="pt-2 border-t border-[var(--ax-border)]">
                <Link
                  to="/portfolio"
                  className="text-xs text-[var(--ax-text-muted)] hover:text-[var(--ax-accent)] flex items-center gap-1 transition-colors"
                >
                  <ArrowRight className="h-3 w-3 rotate-180" /> Back to
                  Portfolio Index
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Sections */}
      <main className="relative z-10 pt-28 sm:pt-32">
        {/* ========================================================================= */}
        {/* HERO SECTION                                                             */}
        {/* ========================================================================= */}
        <section className="relative px-4 pt-10 pb-16 sm:px-6 lg:px-8 lg:pt-16 lg:pb-24 text-center">
          <div className="mx-auto max-w-4xl">
            {/* Live Operational Beacon Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--ax-border)] bg-[var(--ax-card)] px-4 py-1.5 text-xs font-semibold text-[var(--ax-accent)] shadow-[0_0_15px_var(--ax-accent-glow)] mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>SYSTEM OPERATIONAL</span>
              <span className="text-[var(--ax-text-muted)] opacity-60">•</span>
              <span className="text-[var(--ax-text-muted)] tracking-wider">ARCHITECTING PARADIGMS</span>
            </div>

            {/* Main Headline - Matches Dynamic Theme Gradient */}
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl uppercase leading-[1.1] sm:leading-[1.15] font-sans">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--ax-accent)] via-[var(--ax-accent-secondary)] to-[var(--ax-text)] axiom-text-glow">
                WE BUILD DIGITAL SYSTEMS FOR TEAMS
              </span>
              <span className="block mt-1 sm:mt-2 text-[var(--ax-text)]">
                WITH SOMETHING TO PROVE.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 text-base font-normal text-[var(--ax-text-muted)] sm:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed">
              Axiom Labs: Crafting Strategic, User-Centric Digital Experiences.
            </p>

            {/* CTA Buttons */}
            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => scrollToSection("method")}
                className="axiom-btn-primary w-full sm:w-auto rounded-full px-8 py-3.5 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <span>Explore Our Method</span>
                <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => setCalendarModalOpen(true)}
                className="axiom-btn-secondary w-full sm:w-auto rounded-full px-6 py-3.5 text-sm font-semibold flex items-center justify-center gap-2"
              >
                <Calendar className="h-4 w-4 text-[var(--ax-accent)]" />
                <span>Schedule Architecture Review</span>
              </button>
            </div>

            {/* Live Telemetry Metrics Strip */}
            <div className="mt-14 pt-8 border-t border-[var(--ax-border)] grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="p-3.5 rounded-xl bg-[var(--ax-card)] border border-[var(--ax-border)] transition-transform hover:-translate-y-1">
                <div className="text-xl sm:text-2xl font-black text-[var(--ax-text)]">$48B+</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ax-text-muted)] mt-0.5">
                  Transactional Flow
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--ax-card)] border border-[var(--ax-border)] transition-transform hover:-translate-y-1">
                <div className="text-xl sm:text-2xl font-black text-[var(--ax-accent)]">99.999%</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ax-text-muted)] mt-0.5">
                  Core Uptime
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--ax-card)] border border-[var(--ax-border)] transition-transform hover:-translate-y-1">
                <div className="text-xl sm:text-2xl font-black text-[var(--ax-text)]">&lt;1.2ms</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ax-text-muted)] mt-0.5">
                  Edge Execution
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-[var(--ax-card)] border border-[var(--ax-border)] transition-transform hover:-translate-y-1">
                <div className="text-xl sm:text-2xl font-black text-[var(--ax-accent)]">40+</div>
                <div className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ax-text-muted)] mt-0.5">
                  Global Systems
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TRUST MARQUEE BAR                                                        */}
        {/* ========================================================================= */}
        <div className="axiom-trust-bar py-4 overflow-hidden relative">
          <div className="axiom-marquee-track flex items-center gap-12 text-xs font-mono font-bold tracking-[0.25em] text-[var(--ax-text-muted)] uppercase">
            {TRUST_PARTNERS.concat(TRUST_PARTNERS).map((partner, i) => (
              <span key={i} className="flex items-center gap-12 whitespace-nowrap hover:text-[var(--ax-accent)] transition-colors">
                <span>{partner}</span>
                <span className="text-[var(--ax-accent)] opacity-60">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ========================================================================= */}
        {/* FEATURED SYSTEMS (PORTFOLIO SHOWCASE CAROUSEL)                           */}
        {/* ========================================================================= */}
        <section id="projects" className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 sm:mb-12">
              <div>
                <h2 className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[var(--ax-text-muted)] uppercase">
                  FEATURED SYSTEMS
                </h2>
                <p className="text-xs text-[var(--ax-text-muted)] mt-1">
                  High-assurance digital platforms engineered for mission-critical operations
                </p>
              </div>

              {/* Category Filter Chips & Slide Counter */}
              <div className="flex items-center gap-3">
                <div className="flex flex-wrap gap-1.5 p-1 bg-[var(--ax-card)] rounded-full border border-[var(--ax-border)] text-xs">
                  {["ALL", "FINTECH", "DEEP TECH", "BIO-AI", "LOGISTICS"].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => {
                        playSound(500, "sine", 0.05);
                        setCategoryFilter(cat);
                      }}
                      className={`px-3.5 py-1.5 rounded-full text-[11px] font-semibold transition-all ${
                        categoryFilter === cat
                          ? "bg-[var(--ax-accent)] text-white font-bold shadow-[0_0_12px_var(--ax-accent-glow)]"
                          : "text-[var(--ax-text-muted)] hover:text-[var(--ax-text)]"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="hidden lg:flex items-center gap-1 text-xs font-mono font-bold text-[var(--ax-text-muted)] bg-[var(--ax-card)] px-3 py-1.5 rounded-full border border-[var(--ax-border)]">
                  <span className="text-[var(--ax-accent)]">0{currentSlideIndex + 1}</span>
                  <span>/</span>
                  <span>0{filteredSystems.length}</span>
                </div>
              </div>
            </div>

            {/* Carousel Container */}
            <div className="relative group/carousel">
              {/* Carousel Track */}
              <div
                ref={carouselRef}
                onScroll={handleCarouselScroll}
                className="axiom-carousel-track flex gap-5 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory px-1"
                style={{ scrollbarWidth: "none" }}
              >
                {filteredSystems.map((system) => (
                  <div
                    key={system.id}
                    onClick={() => {
                      playSound(700, "triangle", 0.1);
                      setActiveModalProject(system);
                    }}
                    className="flex-none w-[280px] sm:w-[310px] md:w-[290px] lg:w-[285px] cursor-pointer group axiom-3d-card transition-all duration-300 snap-start"
                  >
                    {/* Visual Card Frame */}
                    <div className="axiom-project-card relative overflow-hidden p-2.5">
                      {/* Visual Image */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg bg-[var(--ax-surface)]">
                        <img
                          src={system.image}
                          alt={system.title}
                          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--ax-card)]/90 via-transparent to-transparent opacity-60" />

                        {/* Interactive Inspect Tag */}
                        <div className="absolute top-2 right-2 rounded bg-[var(--ax-bg)]/85 backdrop-blur px-2 py-0.5 text-[10px] font-semibold text-[var(--ax-accent)] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 border border-[var(--ax-border)]">
                          <Sparkles className="h-2.5 w-2.5" /> Inspect Specs
                        </div>
                      </div>

                      {/* Card Title Box */}
                      <div className="pt-3 pb-1 text-center">
                        <h3 className="text-sm font-bold tracking-wide text-[var(--ax-text)] group-hover:text-[var(--ax-accent)] transition-colors">
                          {system.title}
                        </h3>
                        <p className="mt-1 text-[11px] font-semibold tracking-wider text-[var(--ax-text-muted)] uppercase">
                          {system.subtitle}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => scrollCarousel("left")}
                aria-label="Previous systems"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-5 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ax-border)] bg-[var(--ax-card)] text-[var(--ax-accent)] shadow-xl backdrop-blur transition-all duration-200 hover:border-[var(--ax-accent)] hover:bg-[var(--ax-accent)] hover:text-white disabled:opacity-30"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                aria-label="Next systems"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-5 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--ax-border)] bg-[var(--ax-card)] text-[var(--ax-accent)] shadow-xl backdrop-blur transition-all duration-200 hover:border-[var(--ax-accent)] hover:bg-[var(--ax-accent)] hover:text-white"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SERVICE ECOSYSTEM (HEXAGONAL ARCHITECTURE WITH CIRCUIT CONNECTIONS)       */}
        {/* ========================================================================= */}
        <section
          id="services"
          className="relative py-20 sm:py-28 overflow-hidden"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[var(--ax-text-muted)] uppercase">
                SERVICE ECOSYSTEM
              </h2>
              <p className="text-xs text-[var(--ax-text-muted)] mt-1">
                Integrated strategic and engineering capabilities built around a central architectural core
              </p>
            </div>

            {/* Hexagonal Interactive Constellation */}
            <div className="relative mx-auto max-w-4xl py-6">
              {/* Connecting Circuit Vector Lines (Visible on md+ screens) */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
                viewBox="0 0 800 400"
                fill="none"
              >
                {/* Circuit Line: Center to Strategy (Top-Left) */}
                <path
                  d="M 400 200 L 320 120 L 260 120"
                  stroke={activeEcosystemNode === "strategy" ? "var(--ax-accent)" : "var(--ax-border)"}
                  strokeWidth={activeEcosystemNode === "strategy" ? "2.5" : "1.5"}
                  className={activeEcosystemNode === "strategy" ? "axiom-animated-line" : ""}
                />
                {/* Circuit Line: Center to Web & App (Top-Right) */}
                <path
                  d="M 400 200 L 480 120 L 540 120"
                  stroke={activeEcosystemNode === "web-app" ? "var(--ax-accent)" : "var(--ax-border)"}
                  strokeWidth={activeEcosystemNode === "web-app" ? "2.5" : "1.5"}
                  className={activeEcosystemNode === "web-app" ? "axiom-animated-line" : ""}
                />
                {/* Circuit Line: Center to Commerce (Bottom-Left) */}
                <path
                  d="M 400 200 L 320 280 L 260 280"
                  stroke={activeEcosystemNode === "commerce" ? "var(--ax-accent)" : "var(--ax-border)"}
                  strokeWidth={activeEcosystemNode === "commerce" ? "2.5" : "1.5"}
                  className={activeEcosystemNode === "commerce" ? "axiom-animated-line" : ""}
                />
                {/* Circuit Line: Center to Optimization (Bottom-Right) */}
                <path
                  d="M 400 200 L 480 280 L 540 280"
                  stroke={activeEcosystemNode === "optimizati" ? "var(--ax-accent)" : "var(--ax-border)"}
                  strokeWidth={activeEcosystemNode === "optimizati" ? "2.5" : "1.5"}
                  className={activeEcosystemNode === "optimizati" ? "axiom-animated-line" : ""}
                />
              </svg>

              {/* Dynamic Hexagon Node Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center relative z-10">
                {/* Left Column: STRATEGY & COMMERCE */}
                <div className="space-y-8">
                  {/* Strategy */}
                  <div
                    onMouseEnter={() => {
                      playSound(550, "sine", 0.05);
                      setActiveEcosystemNode("strategy");
                    }}
                    onClick={() => {
                      playSound(550, "sine", 0.05);
                      setActiveEcosystemNode("strategy");
                    }}
                    className={`axiom-service-card group relative flex flex-col md:items-end text-left md:text-right p-5 cursor-pointer ${
                      activeEcosystemNode === "strategy" ? "active" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 md:flex-row-reverse">
                      {/* Hex Badge Icon */}
                      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--ax-surface)] border border-[var(--ax-border)] text-[var(--ax-accent)] shadow-md group-hover:scale-105 transition-transform">
                        <Compass className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold tracking-wider text-[var(--ax-text)]">
                          STRATEGY
                        </h3>
                        <p className="mt-1 text-xs text-[var(--ax-text-muted)] max-w-[200px]">
                          Define market position and user journeys.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Commerce */}
                  <div
                    onMouseEnter={() => {
                      playSound(600, "sine", 0.05);
                      setActiveEcosystemNode("commerce");
                    }}
                    onClick={() => {
                      playSound(600, "sine", 0.05);
                      setActiveEcosystemNode("commerce");
                    }}
                    className={`axiom-service-card group relative flex flex-col md:items-end text-left md:text-right p-5 cursor-pointer ${
                      activeEcosystemNode === "commerce" ? "active" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3 md:flex-row-reverse">
                      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--ax-surface)] border border-[var(--ax-border)] text-[var(--ax-accent)] shadow-md group-hover:scale-105 transition-transform">
                        <Play className="h-5 w-5 fill-current opacity-70" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold tracking-wider text-[var(--ax-text)]">
                          COMMERCE
                        </h3>
                        <p className="mt-1 text-xs text-[var(--ax-text-muted)] max-w-[200px]">
                          Design frictionless online transaction experiences.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Hex Hub: Axiom Labs */}
                <div className="relative flex flex-col items-center justify-center py-6">
                  {/* Central Hexagon Shape */}
                  <div className="relative flex h-40 w-40 sm:h-48 sm:w-48 items-center justify-center">
                    {/* SVG Hexagon Outline with Glow */}
                    <svg
                      viewBox="0 0 200 200"
                      className="absolute inset-0 h-full w-full text-[var(--ax-accent)] filter drop-shadow-[0_0_18px_var(--ax-accent-glow)]"
                    >
                      <polygon
                        points="100,10 185,55 185,145 100,190 15,145 15,55"
                        fill="var(--ax-hex-outer)"
                        stroke="currentColor"
                        strokeWidth="2.5"
                      />
                      <polygon
                        points="100,20 175,60 175,140 100,180 25,140 25,60"
                        fill="var(--ax-hex-inner)"
                        stroke="var(--ax-accent-secondary)"
                        strokeWidth="1"
                        strokeDasharray="4,4"
                        className="animate-spin-slow origin-center"
                      />
                    </svg>

                    {/* Content inside Hexagon */}
                    <div className="relative z-10 text-center">
                      <span className="block text-xl sm:text-2xl font-bold tracking-tight text-[var(--ax-text)]">
                        Axiom
                      </span>
                      <span className="block text-xl sm:text-2xl font-bold tracking-tight text-[var(--ax-accent)]">
                        Labs
                      </span>
                      <span className="mt-1 block text-[10px] uppercase tracking-widest text-[var(--ax-text-muted)] font-semibold">
                        Core Engine
                      </span>
                    </div>

                    {/* Radial Glow Layer */}
                    <div className="absolute inset-0 rounded-full bg-[var(--ax-accent)]/15 blur-xl -z-10 animate-pulse" />
                  </div>
                </div>

                {/* Right Column: WEB & APP & OPTIMIZATI */}
                <div className="space-y-8">
                  {/* Web & App */}
                  <div
                    onMouseEnter={() => {
                      playSound(650, "sine", 0.05);
                      setActiveEcosystemNode("web-app");
                    }}
                    onClick={() => {
                      playSound(650, "sine", 0.05);
                      setActiveEcosystemNode("web-app");
                    }}
                    className={`axiom-service-card group relative flex flex-col items-start text-left p-5 cursor-pointer ${
                      activeEcosystemNode === "web-app" ? "active" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--ax-surface)] border border-[var(--ax-border)] text-[var(--ax-accent)] shadow-md group-hover:scale-105 transition-transform">
                        <Atom className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold tracking-wider text-[var(--ax-text)]">
                          WEB & APP
                        </h3>
                        <p className="mt-1 text-xs text-[var(--ax-text-muted)] max-w-[200px]">
                          Craft high-converting, bespoke platforms.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Optimization */}
                  <div
                    onMouseEnter={() => {
                      playSound(700, "sine", 0.05);
                      setActiveEcosystemNode("optimizati");
                    }}
                    onClick={() => {
                      playSound(700, "sine", 0.05);
                      setActiveEcosystemNode("optimizati");
                    }}
                    className={`axiom-service-card group relative flex flex-col items-start text-left p-5 cursor-pointer ${
                      activeEcosystemNode === "optimizati" ? "active" : ""
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--ax-surface)] border border-[var(--ax-border)] text-[var(--ax-accent)] shadow-md group-hover:scale-105 transition-transform">
                        <Code2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold tracking-wider text-[var(--ax-text)]">
                          OPTIMIZATI
                        </h3>
                        <p className="mt-1 text-xs text-[var(--ax-text-muted)] max-w-[200px]">
                          Analyse and improve performance.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dynamic Deep-Dive Details Box */}
              {activeEcosystemNode && (
                <div className="mt-12 rounded-2xl border border-[var(--ax-border)] bg-[var(--ax-card)] p-6 sm:p-8 backdrop-blur shadow-2xl transition-all axiom-modal-animate">
                  {(() => {
                    const node = ECOSYSTEM_SERVICES.find(
                      (s) => s.id === activeEcosystemNode
                    );
                    if (!node) return null;
                    const Icon = node.icon;
                    return (
                      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_2fr] gap-6 items-center">
                        <div>
                          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--ax-surface)] border border-[var(--ax-border)] px-3 py-1 text-xs font-semibold text-[var(--ax-accent)]">
                            <Icon className="h-3.5 w-3.5" /> Capability Deep Dive
                          </div>
                          <h4 className="mt-3 text-2xl font-bold text-[var(--ax-text)]">
                            {node.title}
                          </h4>
                          <p className="mt-2 text-sm text-[var(--ax-text-muted)]">
                            {node.desc}
                          </p>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {node.details.map((detail, idx) => (
                            <div
                              key={idx}
                              className="flex items-start gap-2.5 rounded-lg border border-[var(--ax-border)] bg-[var(--ax-surface)] p-3 text-xs text-[var(--ax-text)] hover:border-[var(--ax-accent)] transition-colors"
                            >
                              <CheckCircle2 className="h-4 w-4 text-[var(--ax-accent)] shrink-0 mt-0.5" />
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    );
                  })()}
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* FLUID PROCESS (TIMELINE FLOW)                                             */}
        {/* ========================================================================= */}
        <section id="method" className="py-20 sm:py-28 relative">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[var(--ax-text-muted)] uppercase">
                FLUID PROCESS
              </h2>
              <p className="text-xs text-[var(--ax-text-muted)] mt-1">
                A deterministic execution cycle engineered to eliminate friction from concept to market launch
              </p>

              {/* Quick Jump Stage Selectors */}
              <div className="mt-6 flex flex-wrap justify-center gap-1.5 max-w-2xl mx-auto">
                {TIMELINE_STEPS.map((s) => (
                  <button
                    key={s.step}
                    onClick={() => {
                      playSound(500 + parseInt(s.step) * 40, "sine", 0.05);
                      setActiveTimelineStep(s.step);
                    }}
                    className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold transition-all ${
                      activeTimelineStep === s.step
                        ? "bg-[var(--ax-accent)] text-white shadow-[0_0_10px_var(--ax-accent-glow)]"
                        : "bg-[var(--ax-card)] border border-[var(--ax-border)] text-[var(--ax-text-muted)] hover:text-[var(--ax-text)]"
                    }`}
                  >
                    {s.step} {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Vertical Flow Diagram with Glowing Central Axis */}
            <div className="relative">
              {/* Central Glowing Axis Spine */}
              <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-0.5 bg-gradient-to-b from-transparent via-[var(--ax-accent)] to-transparent shadow-[0_0_12px_var(--ax-accent-glow)] hidden md:block" />

              <div className="space-y-10 sm:space-y-12">
                {TIMELINE_STEPS.map((step, idx) => {
                  const isLeft = step.side === "left";
                  const isActive = activeTimelineStep === step.step;

                  return (
                    <div
                      key={idx}
                      onClick={() => {
                        playSound(500 + parseInt(step.step) * 40, "sine", 0.05);
                        setActiveTimelineStep(step.step);
                      }}
                      className={`relative flex flex-col md:flex-row items-center cursor-pointer ${
                        isLeft ? "md:flex-row" : "md:flex-row-reverse"
                      } gap-4 md:gap-0 transition-transform ${isActive ? "scale-[1.02]" : ""}`}
                    >
                      {/* Step Content Box */}
                      <div
                        className={`w-full md:w-1/2 ${
                          isLeft
                            ? "md:pr-12 md:text-right"
                            : "md:pl-12 md:text-left"
                        }`}
                      >
                        <div
                          className={`axiom-timeline-card inline-block p-4 sm:p-5 max-w-md ${
                            isActive ? "active" : ""
                          }`}
                        >
                          <div
                            className={`flex items-center gap-2 ${
                              isLeft ? "md:justify-end" : "md:justify-start"
                            }`}
                          >
                            <span className="text-xs font-bold text-[var(--ax-accent)] tracking-wider">
                              PHASE {step.step}
                            </span>
                            <span className="text-[10px] text-[var(--ax-text-muted)] uppercase tracking-widest font-semibold">
                              • {step.highlight}
                            </span>
                            <span className="text-[10px] text-[var(--ax-accent)] font-mono bg-[var(--ax-surface)] px-1.5 py-0.5 rounded border border-[var(--ax-border)]">
                              {step.duration}
                            </span>
                          </div>
                          <h3 className="mt-1 text-lg font-extrabold tracking-wide text-[var(--ax-text)] group-hover:text-[var(--ax-accent)] transition-colors">
                            {step.label}
                          </h3>
                          <p className="mt-1.5 text-xs sm:text-sm text-[var(--ax-text-muted)] leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>

                      {/* Central Glowing Node Beacon */}
                      <div
                        className={`axiom-timeline-node relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${
                          isActive ? "active axiom-node-beacon" : ""
                        }`}
                      >
                        <span
                          className={`h-2 w-2 rounded-full transition-all ${
                            isActive ? "bg-[var(--ax-accent)] scale-125" : "bg-[var(--ax-text-muted)]"
                          }`}
                        />
                      </div>

                      {/* Spacer on opposite side */}
                      <div className="w-full md:w-1/2 hidden md:block" />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* TESTIMONIAL                                                               */}
        {/* ========================================================================= */}
        <section
          id="studio"
          className="py-20 sm:py-28 relative border-t border-[var(--ax-border)]"
        >
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-xs sm:text-sm font-bold tracking-[0.25em] text-[var(--ax-text-muted)] uppercase mb-8">
              TESTIMONIAL
            </h2>

            {/* Glowing Double Quotation Marks */}
            <div className="relative">
              <span className="text-5xl sm:text-7xl font-serif text-[var(--ax-accent)] select-none opacity-85 leading-none block mb-4">
                “
              </span>

              {/* Quote Statement */}
              <blockquote className="text-xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--ax-text)] leading-tight uppercase font-sans max-w-3xl mx-auto">
                {TESTIMONIALS[testimonialIdx].quote}
              </blockquote>

              <span className="text-5xl sm:text-7xl font-serif text-[var(--ax-accent)] select-none opacity-85 leading-none block mt-2">
                ”
              </span>

              {/* Attribution */}
              <div className="mt-6 text-sm sm:text-base font-medium text-[var(--ax-text-muted)]">
                — {TESTIMONIALS[testimonialIdx].name},{" "}
                {TESTIMONIALS[testimonialIdx].title},{" "}
                <span className="text-[var(--ax-accent)] font-semibold">
                  {TESTIMONIALS[testimonialIdx].company}
                </span>
              </div>

              {/* Quote Navigation Selectors */}
              <div className="mt-8 flex justify-center gap-2">
                {TESTIMONIALS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      playSound(600, "sine", 0.05);
                      setTestimonialIdx(i);
                    }}
                    aria-label={`Testimonial ${i + 1}`}
                    className={`h-2 rounded-full transition-all ${
                      testimonialIdx === i
                        ? "w-8 bg-[var(--ax-accent)] shadow-[0_0_10px_var(--ax-accent-glow)]"
                        : "w-2 bg-[var(--ax-border)] hover:bg-[var(--ax-text-muted)]"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CONNECT / CONTACT INQUIRY SECTION                                         */}
        {/* ========================================================================= */}
        <section id="contact" className="py-20 sm:py-28 relative">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            {/* Card Frame with Theme-Adaptive Border & Shadow */}
            <div className="axiom-contact-card relative overflow-hidden p-8 sm:p-12 lg:p-16 backdrop-blur-xl">
              {/* Ambient flare in background of card */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--ax-accent)]/10 blur-3xl pointer-events-none -z-10" />

              <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-10 lg:gap-14 items-center">
                {/* Left Side: Connect Headline */}
                <div>
                  <span className="text-xs font-bold tracking-[0.25em] text-[var(--ax-accent)] uppercase">
                    CONNECT
                  </span>
                  <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--ax-text)] uppercase leading-[1.08] font-sans">
                    ARE YOU READY TO BECOME A MARKET LEADER?
                  </h2>
                  <p className="mt-6 text-sm text-[var(--ax-text-muted)] leading-relaxed">
                    Partner with an engineering studio that treats software as a
                    strategic lever. Let&apos;s build an unfair advantage for
                    your organization.
                  </p>

                  <div className="mt-8 space-y-3 text-xs text-[var(--ax-text-muted)]">
                    <div className="flex items-center justify-between p-2.5 rounded-lg bg-[var(--ax-card)] border border-[var(--ax-border)]">
                      <div className="flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-[var(--ax-accent)]" />
                        <span className="font-mono text-[var(--ax-text)]">inquiries@axiomlabs.io</span>
                      </div>
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="flex items-center gap-1 text-[11px] text-[var(--ax-accent)] hover:opacity-80 transition-opacity"
                      >
                        {copiedEmail ? (
                          <>
                            <Check className="h-3 w-3 text-emerald-500" />
                            <span className="text-emerald-500 font-semibold">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex items-center gap-2 text-[var(--ax-text-muted)] text-xs pl-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--ax-accent)]" />
                      <span>Global Studios: San Francisco • London • Tokyo</span>
                    </div>
                    <div className="flex items-center gap-2 text-[var(--ax-text-muted)] text-xs pl-1">
                      <span className="h-1.5 w-1.5 rounded-full bg-[var(--ax-accent)]" />
                      <span>Response SLA: Within 24 Business Hours</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[var(--ax-border)]">
                    <button
                      type="button"
                      onClick={() => setCalendarModalOpen(true)}
                      className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--ax-accent)] hover:underline transition-all"
                    >
                      <Calendar className="h-4 w-4" />
                      <span>Prefer to talk directly? Book a 15-min discovery call &rarr;</span>
                    </button>
                  </div>
                </div>

                {/* Right Side: Form */}
                <div>
                  {formSubmitted ? (
                    <div className="rounded-2xl border border-[var(--ax-accent)]/40 bg-[var(--ax-card)] p-8 text-center axiom-modal-animate shadow-lg">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--ax-accent)]/20 text-[var(--ax-accent)]">
                        <CheckCircle2 className="h-8 w-8" />
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-[var(--ax-text)]">
                        Inquiry Transmitted
                      </h3>
                      <p className="mt-2 text-sm text-[var(--ax-text-muted)]">
                        Thank you, {formData.name || "Partner"}. Our technical team has received your brief
                        and will reply within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleFormSubmit} className="space-y-4">
                      {/* Name Input */}
                      <div>
                        <label htmlFor="form-name" className="sr-only">
                          Name
                        </label>
                        <input
                          id="form-name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          placeholder="Name"
                          className="axiom-input w-full rounded-xl px-4 py-3.5 text-sm placeholder-[var(--ax-text-muted)]"
                        />
                      </div>

                      {/* Email Input */}
                      <div>
                        <label htmlFor="form-email" className="sr-only">
                          Email
                        </label>
                        <input
                          id="form-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          placeholder="Email"
                          className="axiom-input w-full rounded-xl px-4 py-3.5 text-sm placeholder-[var(--ax-text-muted)]"
                        />
                      </div>

                      {/* Website URL Input */}
                      <div>
                        <label htmlFor="form-url" className="sr-only">
                          Website URL
                        </label>
                        <input
                          id="form-url"
                          type="url"
                          value={formData.websiteUrl}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              websiteUrl: e.target.value,
                            })
                          }
                          placeholder="Website URL"
                          className="axiom-input w-full rounded-xl px-4 py-3.5 text-sm placeholder-[var(--ax-text-muted)]"
                        />
                      </div>

                      {/* Project Scope Input */}
                      <div>
                        <label htmlFor="form-scope" className="sr-only">
                          Project Scope
                        </label>
                        <input
                          id="form-scope"
                          type="text"
                          value={formData.projectScope}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              projectScope: e.target.value,
                            })
                          }
                          placeholder="Project Scope (e.g. Next-Gen Web App, Fintech UI)"
                          className="axiom-input w-full rounded-xl px-4 py-3.5 text-sm placeholder-[var(--ax-text-muted)]"
                        />
                      </div>

                      {/* Project Budget Selector */}
                      <div>
                        <span className="block text-[11px] font-semibold text-[var(--ax-text-muted)] mb-1.5 uppercase tracking-wider">
                          Anticipated Investment
                        </span>
                        <div className="grid grid-cols-3 gap-2 text-xs">
                          {["$30k - $60k", "$60k - $120k", "$120k+"].map((b) => (
                            <button
                              key={b}
                              type="button"
                              onClick={() => {
                                playSound(500, "sine", 0.05);
                                setFormData({ ...formData, budget: b });
                              }}
                              className={`py-2 px-2 rounded-lg border text-center font-medium transition-all ${
                                formData.budget === b
                                  ? "border-[var(--ax-accent)] bg-[var(--ax-accent)]/15 text-[var(--ax-accent)] font-bold shadow-[0_0_12px_var(--ax-accent-glow)]"
                                  : "border-[var(--ax-border)] bg-[var(--ax-card)] text-[var(--ax-text-muted)] hover:border-[var(--ax-accent)]/50"
                              }`}
                            >
                              {b}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Submit Button */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={formSubmitting}
                          className="axiom-btn-primary w-full rounded-xl py-4 text-xs sm:text-sm font-bold tracking-wider uppercase transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
                        >
                          {formSubmitting ? (
                            <>
                              <div className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                              <span>Transmitting Architecture Request...</span>
                            </>
                          ) : (
                            <>
                              <span>SUBMIT PROJECT INQUIRY</span>
                              <ArrowRight className="h-4 w-4" />
                            </>
                          )}
                        </button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* FOOTER                                                                    */}
      {/* ========================================================================= */}
      <footer className="axiom-footer relative py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Left: Brand & Copyright */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2.5">
                <div className="flex h-6 w-6 items-center justify-center">
                  <svg viewBox="0 0 40 40" className="h-5 w-5 text-[var(--ax-accent)]" fill="none">
                    <path
                      d="M20 4L4 34H12L20 18L28 34H36L20 4Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                <span className="text-base font-bold text-[var(--ax-text)]">Axiom Labs</span>
              </div>
              <p className="mt-2 text-xs text-[var(--ax-text-muted)]">
                Copyright © 2026 Axiom Labs Agency. All Rights Reserved.
              </p>
            </div>

            {/* Middle: Links */}
            <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-[var(--ax-text-muted)]">
              <button
                onClick={() => scrollToSection("projects")}
                className="hover:text-[var(--ax-accent)] transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-[var(--ax-accent)] transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("method")}
                className="hover:text-[var(--ax-accent)] transition-colors"
              >
                Method
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-[var(--ax-accent)] transition-colors"
              >
                Contact
              </button>
              <Link
                to="/portfolio"
                className="text-[var(--ax-accent)] hover:opacity-80 transition-opacity font-semibold"
              >
                Portfolio Index
              </Link>
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-4">
              <a
                href="#facebook"
                aria-label="Facebook"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--ax-border)] bg-[var(--ax-card)] text-[var(--ax-text-muted)] transition-colors hover:border-[var(--ax-accent)] hover:text-[var(--ax-accent)]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a
                href="#twitter"
                aria-label="Twitter / X"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--ax-border)] bg-[var(--ax-card)] text-[var(--ax-text-muted)] transition-colors hover:border-[var(--ax-accent)] hover:text-[var(--ax-accent)]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="#instagram"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[var(--ax-border)] bg-[var(--ax-card)] text-[var(--ax-text-muted)] transition-colors hover:border-[var(--ax-accent)] hover:text-[var(--ax-accent)]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Ambient Glowing 4-Point Prism Star in Bottom Right */}
        <div className="absolute bottom-4 right-4 pointer-events-none opacity-40 hover:opacity-80 transition-opacity">
          <svg width="42" height="42" viewBox="0 0 42 42" fill="none">
            <path
              d="M21 0 C21 11.59798 11.59798 21 0 21 C11.59798 21 21 30.402 21 42 C21 30.402 30.402 21 42 21 C30.402 21 21 11.59798 21 0 Z"
              fill="url(#star-grad)"
            />
            <defs>
              <linearGradient id="star-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--ax-accent)" />
                <stop offset="100%" stopColor="var(--ax-accent-secondary)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* SYSTEM DETAIL MODAL                                                       */}
      {/* ========================================================================= */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="axiom-modal-box relative w-full max-w-2xl overflow-hidden rounded-2xl border border-[var(--ax-border)] bg-[var(--ax-surface)] p-6 sm:p-8 shadow-[0_0_50px_var(--ax-accent-glow)] text-left axiom-modal-animate"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveModalProject(null)}
              className="absolute top-4 right-4 rounded-full border border-[var(--ax-border)] bg-[var(--ax-card)] p-1.5 text-[var(--ax-text-muted)] hover:text-[var(--ax-text)] hover:border-[var(--ax-accent)] transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Image Header */}
            <div className="relative aspect-[16/8] w-full overflow-hidden rounded-xl border border-[var(--ax-border)] bg-black">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--ax-surface)] via-transparent to-transparent" />
            </div>

            {/* Modal Header */}
            <div className="mt-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--ax-accent)]">
                {activeModalProject.category}
              </span>
              <h3 className="text-2xl font-extrabold tracking-tight text-[var(--ax-text)] mt-1">
                {activeModalProject.title}
              </h3>
              <p className="text-sm font-semibold tracking-wider text-[var(--ax-text-muted)] uppercase mt-0.5">
                {activeModalProject.subtitle}
              </p>
            </div>

            {/* Metrics */}
            <div className="mt-5 grid grid-cols-3 gap-3 border-y border-[var(--ax-border)] py-4 bg-[var(--ax-card)] rounded-lg">
              {activeModalProject.metrics.map((m, i) => (
                <div key={i} className="text-center">
                  <div className="text-lg sm:text-xl font-extrabold text-[var(--ax-accent)]">
                    {m.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-wider text-[var(--ax-text-muted)]">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <p className="mt-4 text-sm text-[var(--ax-text-muted)] leading-relaxed">
              {activeModalProject.summary}
            </p>

            {/* Stack Tags */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {activeModalProject.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-[var(--ax-border)] bg-[var(--ax-card)] px-2.5 py-1 text-[11px] font-mono text-[var(--ax-accent)]"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Deliverables */}
            <div className="mt-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--ax-text-muted)] mb-2">
                System Deliverables
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeModalProject.deliverables.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-xs text-[var(--ax-text)] bg-[var(--ax-card)] px-3 py-2 rounded border border-[var(--ax-border)]"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-[var(--ax-accent)] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Footer action */}
            <div className="mt-6 flex justify-end gap-3">
              <button
                onClick={() => {
                  setActiveModalProject(null);
                  scrollToSection("contact");
                }}
                className="axiom-btn-primary rounded-xl px-5 py-2.5 text-xs font-bold tracking-wider uppercase transition-all"
              >
                Request Architecture Walkthrough
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* QUICK CONNECT HUD SLIDE-OVER DRAWER                                       */}
      {/* ========================================================================= */}
      {connectDrawerOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex justify-end"
          onClick={() => setConnectDrawerOpen(false)}
        >
          <div
            className="axiom-hud-drawer w-full max-w-md bg-[var(--ax-surface)] border-l border-[var(--ax-border)] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto axiom-drawer-animate shadow-[0_0_50px_var(--ax-accent-glow)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[var(--ax-border)]">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-[var(--ax-accent)] animate-ping" />
                  <span className="text-xs font-mono font-bold tracking-widest text-[var(--ax-accent)] uppercase">
                    QUICK CONNECT HUD
                  </span>
                </div>
                <button
                  onClick={() => setConnectDrawerOpen(false)}
                  className="rounded-lg p-1.5 text-[var(--ax-text-muted)] hover:text-[var(--ax-text)] border border-[var(--ax-border)]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6">
                <h3 className="text-2xl font-bold text-[var(--ax-text)] tracking-tight">
                  Initiate Partner Engagement
                </h3>
                <p className="mt-2 text-xs text-[var(--ax-text-muted)] leading-relaxed">
                  Connect directly with our managing partners and systems architects to evaluate roadmap fit.
                </p>
              </div>

              {/* Direct Channels */}
              <div className="mt-6 space-y-3">
                <button
                  onClick={() => {
                    setConnectDrawerOpen(false);
                    setCalendarModalOpen(true);
                  }}
                  className="w-full flex items-center justify-between p-4 rounded-xl border border-[var(--ax-border)] bg-[var(--ax-card)] text-left hover:border-[var(--ax-accent)] transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[var(--ax-accent)]/15 text-[var(--ax-accent)]">
                      <Calendar className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-[var(--ax-text)] group-hover:text-[var(--ax-accent)] transition-colors">
                        Book Architecture Briefing
                      </div>
                      <div className="text-[11px] text-[var(--ax-text-muted)]">15-min direct founder call</div>
                    </div>
                  </div>
                  <ArrowRight className="h-4 w-4 text-[var(--ax-accent)] group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="p-4 rounded-xl border border-[var(--ax-border)] bg-[var(--ax-card)]">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[var(--ax-text-muted)]">Direct Inquiries:</span>
                    <button
                      onClick={handleCopyEmail}
                      className="text-xs text-[var(--ax-accent)] hover:underline flex items-center gap-1 font-mono"
                    >
                      {copiedEmail ? "Copied!" : "Copy"}
                    </button>
                  </div>
                  <div className="mt-1 font-mono text-sm font-bold text-[var(--ax-text)]">
                    inquiries@axiomlabs.io
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-[var(--ax-border)] mt-8">
              <button
                onClick={() => {
                  setConnectDrawerOpen(false);
                  scrollToSection("contact");
                }}
                className="axiom-btn-primary w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all"
              >
                Go to Complete Inquiry Form &rarr;
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 15-MIN DISCOVERY CALENDAR MODAL                                           */}
      {/* ========================================================================= */}
      {calendarModalOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setCalendarModalOpen(false)}
        >
          <div
            className="axiom-modal-box w-full max-w-lg rounded-2xl border border-[var(--ax-border)] bg-[var(--ax-surface)] p-6 sm:p-8 axiom-modal-animate text-left shadow-[0_0_50px_var(--ax-accent-glow)]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-[var(--ax-border)]">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-[var(--ax-accent)]" />
                <span className="text-sm font-bold text-[var(--ax-text)] tracking-wide">
                  Schedule System Discovery
                </span>
              </div>
              <button
                onClick={() => setCalendarModalOpen(false)}
                className="p-1 rounded text-[var(--ax-text-muted)] hover:text-[var(--ax-text)]"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-4">
              <p className="text-xs text-[var(--ax-text-muted)]">
                Select an available slot with our Partner Architecture Team for a focused 15-minute feasibility evaluation:
              </p>

              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  "Tomorrow • 10:00 AM",
                  "Tomorrow • 02:30 PM",
                  "Wed • 11:00 AM",
                  "Wed • 04:00 PM",
                  "Thu • 09:30 AM",
                  "Thu • 03:00 PM",
                ].map((slot, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      playSound(800, "triangle", 0.1);
                      alert(`Slot reserved: ${slot}. A partner invitation has been prepared.`);
                      setCalendarModalOpen(false);
                    }}
                    className="p-2.5 rounded-lg border border-[var(--ax-border)] bg-[var(--ax-card)] hover:border-[var(--ax-accent)] hover:bg-[var(--ax-accent)]/10 text-[11px] font-medium text-[var(--ax-text)] text-center transition-all hover:scale-[1.02]"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[var(--ax-border)] text-right">
              <button
                onClick={() => setCalendarModalOpen(false)}
                className="text-xs text-[var(--ax-text-muted)] hover:text-[var(--ax-text)]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AxiomLabs;
