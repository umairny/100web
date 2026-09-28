import React, { useState, useMemo, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Server,
  Cloud,
  Layers,
  GitBranch,
  RefreshCw,
  UploadCloud,
  Activity,
  CheckCircle2,
  ExternalLink,
  Menu,
  X,
  Send,
  Code2,
  Database,
  Terminal,
  Cpu,
  ArrowRight,
  Settings,
  Sliders,
  Play,
  Pause,
  Globe2,
  ShieldCheck,
  Zap,
  HardDrive,
  BarChart3,
  Network,
  ChevronRight,
  Sparkles,
} from "lucide-react";


interface CaseStudyModalProps {
  isOpen: boolean;
  onClose: () => void;
  study: {
    id: string;
    title: string;
    tech: string;
    description: string;
    outcomes: string[];
    architectureDetails: string[];
    image: string;
  } | null;
}

function CaseStudyModal({ isOpen, onClose, study }: CaseStudyModalProps) {
  if (!isOpen || !study) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl rounded-2xl border border-blue-500/30 bg-[#0c1222] p-6 sm:p-8 shadow-[0_0_50px_rgba(37,99,235,0.3)] northline-modal-anim text-left my-6 max-h-[90vh] overflow-y-auto northline-scroll"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full border border-slate-700 bg-slate-900/80 p-2 text-slate-300 hover:text-white hover:border-blue-400 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4 pr-8">
          <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">
            {study.tech}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-white northline-display">
            {study.title}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-300 leading-relaxed">
            {study.description}
          </p>
        </div>

        {/* Visual Preview */}
        <div className="my-5 rounded-xl border border-slate-800 overflow-hidden bg-slate-950">
          <img
            src={study.image}
            alt={study.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Key Metrics & Architectural Decisions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
          <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60">
            <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
              Architecture &amp; Implementation
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
              {study.architectureDetails.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-4 rounded-xl border border-blue-900/40 bg-blue-950/20">
            <h4 className="text-xs font-mono uppercase tracking-wider text-blue-400 mb-2">
              Measured Business Outcomes
            </h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200">
              {study.outcomes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs font-mono uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)]"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
}

export function NorthlineDeveloper() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("work");
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { id: "work", label: "Work" },
    { id: "simulator", label: "Simulator" },
    { id: "audit", label: "Audit" },
    { id: "process", label: "Process" },
    { id: "outcomes", label: "Outcomes" },
    { id: "connect", label: "Connect" },
  ];

  // Scroll spy to track active section and scroll progress
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress percentage (0 - 100)
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setIsScrolled(window.scrollY > 20);

      // Check if user is near the bottom of page -> activate "connect"
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
        setActiveSection("connect");
        return;
      }

      // Check sections from bottom to top in DOM order
      const sectionsInReverse = [
        { id: "connect", nav: "connect" },
        { id: "outcomes", nav: "outcomes" },
        { id: "process", nav: "process" },
        { id: "audit", nav: "audit" },
        { id: "work", nav: "work" },
        { id: "positioning", nav: "work" },
        { id: "simulator", nav: "simulator" },
      ];

      const scrollPos = window.scrollY + 160;

      for (const item of sectionsInReverse) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(item.nav);
            return;
          }
        }
      }

      // At top of page (hero), activate "work" by default to match design
      setActiveSection("work");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -85;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const [selectedCaseStudy, setSelectedCaseStudy] = useState<{
    id: string;
    title: string;
    tech: string;
    description: string;
    outcomes: string[];
    architectureDetails: string[];
    image: string;
  } | null>(null);

  // Hero Live Traffic Simulator State
  const [trafficRps, setTrafficRps] = useState(45000);
  const [isSimulating, setIsSimulating] = useState(true);

  // Case Study Category Filter
  const [activeCategory, setActiveCategory] = useState<"all" | "fintech" | "streaming" | "api" | "ai">("all");

  // Interactive Architecture Audit Calculator
  const [auditArch, setAuditArch] = useState<"monolith" | "microservices" | "serverless">("monolith");
  const [auditCloud, setAuditCloud] = useState<"aws" | "gcp" | "multi">("aws");
  const [auditBottleneck, setAuditBottleneck] = useState<"db" | "latency" | "ci">("latency");

  // Selected Positioning Detail Drawer
  const [selectedStrength, setSelectedStrength] = useState<string | null>(null);

  // Active Testimonial index
  const [activeTestimonial, setActiveTestimonial] = useState<0 | 1>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    projectDetails: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Computed live metrics based on traffic slider
  const liveLatency = useMemo(() => {
    // 4ms baseline + small jitter based on RPS
    const ms = 4.2 + (trafficRps / 100000) * 2.8;
    return ms.toFixed(1);
  }, [trafficRps]);

  const activePods = useMemo(() => {
    return Math.max(6, Math.round(trafficRps / 4000));
  }, [trafficRps]);

  // Computed Audit Metrics
  const auditResult = useMemo(() => {
    let score = 55;
    let savings = "$48,000";
    if (auditArch === "monolith") {
      score = 42;
      savings = "$95,000 - $140,000";
    } else if (auditArch === "microservices") {
      score = 78;
      savings = "$35,000 - $65,000";
    } else {
      score = 86;
      savings = "$20,000 - $40,000";
    }
    return { score, savings };
  }, [auditArch, auditCloud, auditBottleneck]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const caseStudies = [
    {
      id: "fintech",
      category: "fintech",
      title: "FINTECH PLATFORM MODERNIZATION",
      tech: "AWS, Kubernetes, Microservices",
      image: "/images/northline/fintech-architecture.webp",
      description:
        "Modernized a legacy monolithic banking core into a distributed, multi-region microservices topology capable of processing 45,000 transactions per second with zero downtime deployments.",
      architectureDetails: [
        "Migrated monolithic Java codebase to modular Go & Node.js microservices",
        "Configured Amazon EKS clusters with Karpenter auto-scaling across 3 AZs",
        "Implemented transactional outbox pattern via Apache Kafka and AWS Aurora",
        "Automated Canary rollouts with Istio service mesh and Prometheus alerts",
      ],
      outcomes: [
        "Reduced P99 transaction latency from 320ms down to 7.8ms",
        "Achieved 99.999% SLA uptime over 12 consecutive months",
        "Decreased cloud infrastructure operational costs by 38%",
      ],
    },
    {
      id: "streaming",
      category: "streaming",
      title: "REAL-TIME ANALYTICS ENGINE",
      tech: "Node.js, Kafka, Go",
      image: "/images/northline/analytics-engine.webp",
      description:
        "Engineered a high-throughput event processing pipeline ingesting 1.4+ GB/sec of telemetry events with sub-5ms end-to-end ingestion latency and instant dashboard aggregation.",
      architectureDetails: [
        "Distributed Kafka cluster with custom partitioned consumers in Go",
        "ClickHouse columnar OLAP storage for sub-second analytical queries",
        "Real-time WebSocket telemetry push layer with backpressure handling",
        "Zero-allocation streaming parser minimizing V8 garbage collection",
      ],
      outcomes: [
        "Scales seamlessly to 4.8 million concurrent event streams",
        "Reduced mean aggregation delay from 15 minutes to real-time (< 5ms)",
        "Zero message loss guarantee with exactly-once semantic delivery",
      ],
    },
    {
      id: "api",
      category: "api",
      title: "E-COMMERCE API",
      tech: "TypeScript, PostgreSQL, GraphQL",
      image: "/images/northline/ecommerce-api.webp",
      description:
        "Designed and deployed an enterprise GraphQL API layer for multi-region retail fulfillment, featuring atomic inventory reservation and sub-10ms cached catalog responses.",
      architectureDetails: [
        "Type-safe GraphQL schema with automated TypeScript resolver codegen",
        "PostgreSQL advisory locking ensuring zero inventory overselling",
        "Redis-backed multi-tier cache layer with automated invalidation hooks",
        "Stateless JWT session authentication with distributed rate limiting",
      ],
      outcomes: [
        "Handled 18x normal traffic surges during global Cyber Week without latency spike",
        "Decreased cart checkout abandon rate by 22% due to instant API responses",
        "Accelerated partner API onboarding from weeks to under 2 days",
      ],
    },
    {
      id: "ai",
      category: "ai",
      title: "AI INFERENCE GATEWAY & VECTOR MESH",
      tech: "Python, vLLM, Qdrant, Rust",
      image: "/images/northline/ai-inference-gateway.webp",
      description:
        "Architected an enterprise multi-model inference proxy and semantic vector cache routing 12M+ daily queries across pooled NVIDIA H100 clusters with speculative decoding.",
      architectureDetails: [
        "Dynamic semantic router with sub-millisecond cosine vector cache in Qdrant",
        "Speculative decoding pipeline routing to lightweight draft models first",
        "Continuous token batching proxy written in Rust with zero-copy I/O",
        "Multi-cloud fallback from on-prem H100s to AWS Bedrock & Claude Sonnet",
      ],
      outcomes: [
        "Cut monthly LLM compute expenses by 64.2% via semantic prompt caching",
        "Reduced Time-To-First-Token (TTFT) from 450ms down to 42ms",
        "Zero dropped queries during viral traffic spikes of 120,000 prompt/min",
      ],
    },
  ];

  const filteredStudies = useMemo(() => {
    if (activeCategory === "all") return caseStudies;
    return caseStudies.filter((s) => s.category === activeCategory);
  }, [activeCategory, caseStudies]);

  const strengthDetails: Record<string, { title: string; bullets: string[] }> = {
    "Distributed Systems": {
      title: "Distributed Systems Architecture",
      bullets: [
        "Event Sourcing & CQRS architectures with Kafka and RabbitMQ",
        "Raft & Paxos consensus patterns for distributed state reconciliation",
        "Idempotency keys & distributed locking (Redis Redlock, Postgres advisory locks)",
        "Saga pattern for long-running multi-service transactions",
      ],
    },
    "Cloud Platforms AWS/GCP": {
      title: "Cloud Infrastructure & Platform Engineering",
      bullets: [
        "Terraform & Pulumi Infrastructure-as-Code with automated CI/CD plans",
        "Multi-region Kubernetes (EKS / GKE) with Karpenter spot instance optimization",
        "Service mesh networking with Istio & Envoy for mTLS zero-trust security",
        "CloudWatch, Datadog & Prometheus distributed tracing with OpenTelemetry",
      ],
    },
    "API Design": {
      title: "High-Throughput API Engineering",
      bullets: [
        "High-performance REST, gRPC with Protocol Buffers, and GraphQL APIs",
        "Token bucket & leaky bucket rate-limiting algorithms at API Gateway level",
        "Cache stampede prevention with probabilistic early expiration (XFetch)",
        "Strict contract testing with OpenAPI 3.1 & Pact tooling",
      ],
    },
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      title: "CTO, Innovate Inc.",
      image: "/images/northline/client-sarah-chen.webp",
      quote:
        "Northline Developer delivered complex architecture seamlessly; system reliability improved significantly. Our cloud bills dropped by 38% while throughput doubled.",
      metric: "99.999% SLA • -38% Cloud Spend",
    },
    {
      name: "David Ross",
      title: "VP Infrastructure, NextGen FinTech",
      image: "/images/northline/client-david-ross.webp",
      quote:
        "The technical depth Northline brought to our Kafka event-driven migration was world-class. Handled 45,000 transactions/second during peak trading hours without a single dropped packet.",
      metric: "45K TPS • Zero Downtime",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "DISCOVER & MODEL",
      desc: "In-depth requirement analysis, domain-driven boundary modeling, throughput profiling, and SLA architecture blueprints.",
      image: "/images/northline/process-plan.jpg",
      icon: GitBranch,
      deliverables: ["Domain Topology", "Data Schema", "SLA & Threat Matrix"],
    },
    {
      step: "02",
      title: "BUILD & BENCHMARK",
      desc: "Low-latency microservice development, sub-millisecond serialization, Kafka event bus, and rigorous automated stress tests.",
      image: "/images/northline/process-build.jpg",
      icon: RefreshCw,
      deliverables: ["Golang / Node Codebase", "Kafka Streams", "Chaos Tests"],
    },
    {
      step: "03",
      title: "CLOUD DEPLOYMENT",
      desc: "Terraform IaC automation, multi-region Kubernetes clusters, Istio mesh routing, and automated zero-downtime canary rollouts.",
      image: "/images/northline/process-deploy.jpg",
      icon: UploadCloud,
      deliverables: ["EKS / GKE Clusters", "Istio Mesh", "Anycast BGP"],
    },
    {
      step: "04",
      title: "OBSERVE & SCALE",
      desc: "OpenTelemetry distributed tracing, automated pod scaling, P99 latency alerts, and continuous performance governance.",
      image: "/images/northline/process-monitor.jpg",
      icon: Activity,
      deliverables: ["Telemetry Dashboards", "K8s Auto-Scaling", "24/7 Autopilot"],
    },
  ];

  return (
    <div className="northline-container min-h-screen selection:bg-blue-600/30 selection:text-blue-200">
      {/* ======================================================================= */}
      {/* EMBEDDED DESIGN TOKENS & THEME RULES (NO EXTERNAL CSS FILE)            */}
      {/* ======================================================================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');

        /* ============================================================ */
        /* NORTHLINE DESIGN TOKENS — Default: Deep Navy Dark Studio     */
        /* ============================================================ */
        .northline-container {
          /* Accent: electric blue — stays consistent across themes */
          --nl-accent:         var(--theme-accent-primary,       #2563eb);
          --nl-accent-hover:   var(--theme-accent-primary-hover, #1d4ed8);
          --nl-accent-glow:    var(--theme-accent-glow,          rgba(37,99,235,0.35));
          --nl-accent-sec:     var(--theme-accent-secondary,     #38bdf8);

          /* Background layers (dark by default) */
          --nl-bg:         var(--theme-bg-base,    #0b0f19);
          --nl-surface:    var(--theme-bg-surface, #0d1322);
          --nl-card:       var(--theme-bg-card,    #0c1222);
          --nl-card2:      var(--theme-bg-card,    #0d1424);

          /* Text */
          --nl-text:       var(--theme-text-primary, #f1f5f9);
          --nl-text-muted: var(--theme-text-muted,   #94a3b8);
          --nl-text-dim:   var(--theme-text-secondary, #64748b);

          /* Border */
          --nl-border:     var(--theme-border, rgba(51,65,85,0.8));
          --nl-border-dim: var(--theme-border, rgba(30,41,59,0.8));

          /* Nav */
          --nl-nav-bg:        rgba(11, 15, 25, 0.88);
          --nl-nav-bg-scroll: rgba(11, 15, 25, 0.96);
          --nl-nav-border:    rgba(30, 41, 59, 0.8);
          --nl-nav-cap-bg:    rgba(15, 23, 42, 0.7);
          --nl-nav-cap-border:rgba(51, 65, 85, 0.6);

          /* Input */
          --nl-input-bg:    rgba(15, 23, 42, 0.7);
          --nl-input-border:rgba(51, 65, 85, 0.7);

          /* Ambient glow backgrounds */
          --nl-ambient1: rgba(37, 99, 235, 0.10);
          --nl-ambient2: rgba(59, 130, 246, 0.08);
          --nl-ambient3: rgba(14, 165, 233, 0.08);

          background-color: var(--nl-bg);
          color: var(--nl-text);
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          overflow-x: clip;
          position: relative;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* ===== LIGHT MOOD overrides ===== */
        html.light .northline-container,
        body.light .northline-container,
        [data-theme-mood="light"] .northline-container,
        :root[data-theme-mood="light"] .northline-container,
        :root[data-theme-active="true"][data-theme-mood="light"] .northline-container,
        :root.light .northline-container {
          --nl-bg:         var(--theme-bg-base,    #f1f5f9);
          --nl-surface:    var(--theme-bg-surface, #e2e8f0);
          --nl-card:       var(--theme-bg-card,    #ffffff);
          --nl-card2:      var(--theme-bg-card,    #f8fafc);

          --nl-text:       var(--theme-text-primary,   #0f172a);
          --nl-text-muted: var(--theme-text-muted,     #475569);
          --nl-text-dim:   var(--theme-text-secondary, #64748b);

          --nl-border:     var(--theme-border, rgba(148,163,184,0.4));
          --nl-border-dim: var(--theme-border, rgba(203,213,225,0.8));

          --nl-nav-bg:        rgba(241, 245, 249, 0.90);
          --nl-nav-bg-scroll: rgba(255, 255, 255, 0.97);
          --nl-nav-border:    rgba(203, 213, 225, 0.8);
          --nl-nav-cap-bg:    rgba(248, 250, 252, 0.8);
          --nl-nav-cap-border:rgba(203, 213, 225, 0.8);

          --nl-input-bg:    rgba(248, 250, 252, 0.9);
          --nl-input-border:rgba(148, 163, 184, 0.5);

          --nl-ambient1: rgba(37, 99, 235, 0.06);
          --nl-ambient2: rgba(59, 130, 246, 0.04);
          --nl-ambient3: rgba(14, 165, 233, 0.04);
        }

        /* ===== DARK MOOD (explicit) ===== */
        html.dark .northline-container,
        body.dark .northline-container,
        [data-theme-mood="dark"] .northline-container,
        :root[data-theme-mood="dark"] .northline-container,
        :root[data-theme-active="true"][data-theme-mood="dark"] .northline-container,
        :root.dark .northline-container {
          --nl-bg:         var(--theme-bg-base,    #0b0f19);
          --nl-surface:    var(--theme-bg-surface, #0d1322);
          --nl-card:       var(--theme-bg-card,    #0c1222);
          --nl-card2:      var(--theme-bg-card,    #0d1424);

          --nl-text:       var(--theme-text-primary,   #f1f5f9);
          --nl-text-muted: var(--theme-text-muted,     #94a3b8);
          --nl-text-dim:   var(--theme-text-secondary, #64748b);

          --nl-border:     var(--theme-border, rgba(51,65,85,0.8));
          --nl-border-dim: var(--theme-border, rgba(30,41,59,0.8));

          --nl-nav-bg:        rgba(11, 15, 25, 0.88);
          --nl-nav-bg-scroll: rgba(11, 15, 25, 0.96);
          --nl-nav-border:    rgba(30, 41, 59, 0.8);
          --nl-nav-cap-bg:    rgba(15, 23, 42, 0.7);
          --nl-nav-cap-border:rgba(51, 65, 85, 0.6);

          --nl-input-bg:    rgba(15, 23, 42, 0.7);
          --nl-input-border:rgba(51, 65, 85, 0.7);

          --nl-ambient1: rgba(37, 99, 235, 0.10);
          --nl-ambient2: rgba(59, 130, 246, 0.08);
          --nl-ambient3: rgba(14, 165, 233, 0.08);
        }

        /* ===== Non-original preset: use theme accent ===== */
        [data-theme-preset]:not([data-theme-preset="original"]) .northline-container,
        [data-theme-active="true"]:not([data-theme-preset="original"]) .northline-container {
          --nl-accent:       var(--theme-accent-primary) !important;
          --nl-accent-hover: var(--theme-accent-primary-hover) !important;
          --nl-accent-glow:  var(--theme-accent-glow) !important;
          --nl-accent-sec:   var(--theme-accent-secondary) !important;
        }

        /* ===== TYPOGRAPHY ===== */
        .northline-display {
          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          letter-spacing: -0.01em;
        }

        .northline-mono {
          font-family: 'JetBrains Mono', monospace;
        }

        /* ===== STICKY NAVIGATION ===== */
        .northline-navbar-sticky {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          background-color: var(--nl-nav-bg);
          border-bottom: 1px solid var(--nl-nav-border);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .northline-navbar-scrolled {
          background-color: var(--nl-nav-bg-scroll);
          border-bottom-color: var(--nl-border);
          box-shadow: 0 8px 32px -4px rgba(0,0,0,0.4), 0 0 15px -3px var(--nl-accent-glow);
        }

        /* ===== NAV CAPSULE ===== */
        .northline-nav-capsule {
          background: var(--nl-nav-cap-bg);
          border: 1px solid var(--nl-nav-cap-border);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-radius: 9999px;
          padding: 4px;
        }

        .northline-nav-active {
          background: var(--nl-surface) !important;
          color: var(--nl-text) !important;
          font-weight: 600 !important;
          border-color: var(--nl-border) !important;
          box-shadow: 0 0 14px -2px var(--nl-accent-glow), inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .northline-nav-item {
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          color: var(--nl-text-muted);
          border-radius: 9999px;
        }

        .northline-nav-item:hover {
          color: var(--nl-text);
          background-color: color-mix(in srgb, var(--nl-surface) 50%, transparent);
        }

        /* ===== CARD GLOW ===== */
        .northline-card-glow {
          box-shadow: 0 0 25px -5px var(--nl-accent-glow), 0 0 10px -2px color-mix(in srgb, var(--nl-accent) 10%, transparent);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .northline-card-glow:hover {
          box-shadow: 0 0 35px -5px color-mix(in srgb, var(--nl-accent) 25%, transparent), 0 0 15px -2px color-mix(in srgb, var(--nl-accent-sec) 20%, transparent);
          border-color: color-mix(in srgb, var(--nl-accent) 50%, transparent) !important;
          transform: translateY(-2px);
        }

        /* ===== INPUT FIELDS ===== */
        .northline-input {
          background: var(--nl-input-bg);
          border: 1px solid var(--nl-input-border);
          color: var(--nl-text);
          transition: all 0.2s ease;
        }

        .northline-input::placeholder {
          color: var(--nl-text-dim);
        }

        .northline-input:focus {
          background: var(--nl-card);
          border-color: var(--nl-accent);
          box-shadow: 0 0 15px -2px var(--nl-accent-glow);
          outline: none;
        }

        /* ===== CODE WATERMARK TEXTURE ===== */
        .northline-code-watermark {
          background-image: radial-gradient(circle at 1px 1px, color-mix(in srgb, var(--nl-accent) 10%, transparent) 1px, transparent 0);
          background-size: 28px 28px;
        }

        /* ===== PULSE FLOW ANIMATION ===== */
        @keyframes northline-pulse-flow {
          0%, 100% { opacity: 0.4; }
          50%       { opacity: 0.9; }
        }

        .northline-flow-anim {
          animation: northline-pulse-flow 2.5s infinite ease-in-out;
        }

        /* ===== MODAL ANIMATION ===== */
        @keyframes northline-modal-appear {
          from { opacity: 0; transform: scale(0.96) translateY(8px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        .northline-modal-anim {
          animation: northline-modal-appear 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        /* ===== CUSTOM SCROLLBAR ===== */
        .northline-scroll::-webkit-scrollbar { width: 6px; height: 6px; }
        .northline-scroll::-webkit-scrollbar-track { background: var(--nl-surface); }
        .northline-scroll::-webkit-scrollbar-thumb { background: var(--nl-border); border-radius: 3px; }
        .northline-scroll::-webkit-scrollbar-thumb:hover { background: var(--nl-accent); }

        /* ===== RANGE SLIDER ===== */
        .northline-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 6px;
          background: var(--nl-surface);
          border-radius: 9999px;
          outline: none;
        }

        .northline-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: var(--nl-accent);
          cursor: pointer;
          box-shadow: 0 0 12px var(--nl-accent-glow);
          border: 2px solid #ffffff;
          transition: transform 0.15s ease;
        }

        .northline-slider::-webkit-slider-thumb:hover { transform: scale(1.2); }

        /* ===== BEACON PULSE ===== */
        @keyframes beacon-ping {
          0%   { transform: scale(1); opacity: 0.8; }
          100% { transform: scale(2.2); opacity: 0; }
        }

        .northline-beacon {
          animation: beacon-ping 1.8s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        /* ============================================================ */
        /* LIGHT MOOD: TEXT & BACKGROUND INVERSION OVERRIDES            */
        /* ============================================================ */
        html.light .northline-container,
        body.light .northline-container,
        [data-theme-mood="light"] .northline-container,
        :root[data-theme-mood="light"] .northline-container,
        :root[data-theme-active="true"][data-theme-mood="light"] .northline-container,
        :root.light .northline-container {
          background-color: var(--nl-bg) !important;
          color: var(--nl-text) !important;
        }

        /* Override hardcoded text colors in light mode */
        html.light .northline-container .text-white,
        body.light .northline-container .text-white,
        [data-theme-mood="light"] .northline-container .text-white,
        :root[data-theme-mood="light"] .northline-container .text-white,
        :root.light .northline-container .text-white {
          color: var(--nl-text) !important;
        }

        html.light .northline-container .text-slate-100,
        html.light .northline-container .text-slate-200,
        html.light .northline-container .text-slate-300,
        html.light .northline-container .text-gray-100,
        html.light .northline-container .text-gray-200,
        html.light .northline-container .text-gray-300,
        html.light .northline-container .text-zinc-100,
        html.light .northline-container .text-zinc-200,
        html.light .northline-container .text-zinc-300,
        body.light .northline-container .text-slate-100,
        body.light .northline-container .text-slate-200,
        body.light .northline-container .text-slate-300,
        [data-theme-mood="light"] .northline-container .text-slate-100,
        [data-theme-mood="light"] .northline-container .text-slate-200,
        [data-theme-mood="light"] .northline-container .text-slate-300,
        [data-theme-mood="light"] .northline-container .text-gray-100,
        [data-theme-mood="light"] .northline-container .text-gray-200,
        [data-theme-mood="light"] .northline-container .text-gray-300,
        :root.light .northline-container .text-slate-100,
        :root.light .northline-container .text-slate-200,
        :root.light .northline-container .text-slate-300 {
          color: var(--nl-text-muted) !important;
        }

        html.light .northline-container .text-slate-400,
        html.light .northline-container .text-slate-500,
        html.light .northline-container .text-gray-400,
        html.light .northline-container .text-gray-500,
        html.light .northline-container .text-zinc-400,
        html.light .northline-container .text-zinc-500,
        body.light .northline-container .text-slate-400,
        body.light .northline-container .text-slate-500,
        [data-theme-mood="light"] .northline-container .text-slate-400,
        [data-theme-mood="light"] .northline-container .text-slate-500,
        [data-theme-mood="light"] .northline-container .text-gray-400,
        [data-theme-mood="light"] .northline-container .text-gray-500,
        :root.light .northline-container .text-slate-400,
        :root.light .northline-container .text-slate-500 {
          color: var(--nl-text-dim) !important;
        }

        /* Keep brand/accent text vivid in light mode */
        html.light .northline-container .text-blue-200,
        html.light .northline-container .text-blue-300,
        [data-theme-mood="light"] .northline-container .text-blue-200,
        [data-theme-mood="light"] .northline-container .text-blue-300 {
          color: var(--nl-accent) !important;
        }

        html.light .northline-container .text-blue-400,
        [data-theme-mood="light"] .northline-container .text-blue-400 {
          color: #1d4ed8 !important;
        }

        /* Keep button text white for solid colored buttons */
        html.light .northline-container button.bg-blue-600,
        html.light .northline-container a.bg-blue-600,
        html.light .northline-container a.bg-\[\#2563eb\],
        html.light .northline-container .bg-blue-600,
        html.light .northline-container .bg-\[\#2563eb\],
        html.light .northline-container .bg-blue-600 .text-white,
        html.light .northline-container .bg-\[\#2563eb\] .text-white,
        html.light .northline-container .bg-blue-600 span,
        html.light .northline-container .bg-\[\#2563eb\] span,
        [data-theme-mood="light"] .northline-container button.bg-blue-600,
        [data-theme-mood="light"] .northline-container a.bg-blue-600,
        [data-theme-mood="light"] .northline-container a.bg-\[\#2563eb\],
        [data-theme-mood="light"] .northline-container .bg-blue-600,
        [data-theme-mood="light"] .northline-container .bg-\[\#2563eb\],
        [data-theme-mood="light"] .northline-container .bg-blue-600 .text-white,
        [data-theme-mood="light"] .northline-container .bg-\[\#2563eb\] .text-white,
        [data-theme-mood="light"] .northline-container .bg-blue-600 span,
        [data-theme-mood="light"] .northline-container .bg-\[\#2563eb\] span {
          color: #ffffff !important;
        }

        /* Active nav item text */
        html.light .northline-container .northline-nav-active,
        [data-theme-mood="light"] .northline-container .northline-nav-active {
          color: var(--nl-text) !important;
          background: var(--nl-surface) !important;
        }

        /* Backgrounds: convert dark hardcoded cards/containers into light card backgrounds */
        html.light .northline-container .bg-\[\#0c1222\],
        html.light .northline-container .bg-\[\#0d1322\],
        html.light .northline-container .bg-\[\#0d1424\],
        html.light .northline-container .bg-\[\#070b14\],
        html.light .northline-container .bg-\[\#0c1426\],
        html.light .northline-container .bg-slate-900,
        html.light .northline-container .bg-slate-950,
        [data-theme-mood="light"] .northline-container .bg-\[\#0c1222\],
        [data-theme-mood="light"] .northline-container .bg-\[\#0d1322\],
        [data-theme-mood="light"] .northline-container [class*="bg-[#0d1424]"],
        [data-theme-mood="light"] .northline-container [class*="bg-[#070b14]"],
        [data-theme-mood="light"] .northline-container [class*="bg-[#0c1426]"],
        [data-theme-mood="light"] .northline-container .bg-slate-900,
        [data-theme-mood="light"] .northline-container .bg-slate-950 {
          background-color: var(--nl-card) !important;
        }

        html.light .northline-container [class*="bg-slate-900/"],
        html.light .northline-container [class*="bg-slate-950/"],
        [data-theme-mood="light"] .northline-container [class*="bg-slate-900/"],
        [data-theme-mood="light"] .northline-container [class*="bg-slate-950/"] {
          background-color: var(--nl-surface) !important;
        }

        html.light .northline-container [class*="bg-blue-950/"],
        [data-theme-mood="light"] .northline-container [class*="bg-blue-950/"] {
          background-color: rgba(37, 99, 235, 0.08) !important;
        }

        /* Light borders */
        html.light .northline-container .border-slate-800,
        html.light .northline-container .border-slate-700,
        html.light .northline-container [class*="border-slate-800/"],
        html.light .northline-container [class*="border-slate-700/"],
        html.light .northline-container [class*="border-blue-900/"],
        [data-theme-mood="light"] .northline-container .border-slate-800,
        [data-theme-mood="light"] .northline-container .border-slate-700,
        [data-theme-mood="light"] .northline-container [class*="border-slate-800/"],
        [data-theme-mood="light"] .northline-container [class*="border-slate-700/"],
        [data-theme-mood="light"] .northline-container [class*="border-blue-900/"] {
          border-color: var(--nl-border) !important;
        }

        /* Light inputs */
        html.light .northline-container input,
        html.light .northline-container textarea,
        html.light .northline-container select,
        [data-theme-mood="light"] .northline-container input,
        [data-theme-mood="light"] .northline-container textarea,
        [data-theme-mood="light"] .northline-container select {
          color: var(--nl-text) !important;
        }

        /* ============================================================ */
        /* CAPSULES & SMALL BOXES SYSTEM (LIGHT & DARK ADAPTIVE)        */
        /* ============================================================ */
        .northline-capsule-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 9999px;
          background: rgba(30, 58, 138, 0.3);
          border: 1px solid rgba(59, 130, 246, 0.35);
          color: #93c5fd;
          font-family: 'JetBrains Mono', monospace;
          box-shadow: 0 0 12px rgba(37, 99, 235, 0.15);
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .northline-capsule-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 9999px;
          background: rgba(15, 23, 42, 0.75);
          border: 1px solid rgba(51, 65, 85, 0.7);
          color: #94a3b8;
          font-family: 'JetBrains Mono', monospace;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .northline-capsule-btn:hover {
          border-color: var(--nl-accent, #2563eb);
          color: #ffffff;
          transform: translateY(-1px);
        }

        .northline-capsule-btn-active {
          background: var(--nl-accent, #2563eb) !important;
          border-color: var(--nl-accent, #2563eb) !important;
          color: #ffffff !important;
          font-weight: 700 !important;
          box-shadow: 0 0 18px -2px var(--nl-accent-glow), 0 2px 8px rgba(0,0,0,0.25) !important;
        }

        .northline-small-box {
          background: rgba(13, 19, 34, 0.85);
          border: 1px solid rgba(51, 65, 85, 0.65);
          box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.05);
          border-radius: 0.75rem;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .northline-small-box:hover {
          border-color: rgba(59, 130, 246, 0.5);
          transform: translateY(-1px);
        }

        /* Light Mood adaptions for capsules & small boxes */
        html.light .northline-container .northline-capsule-badge,
        :root.light .northline-container .northline-capsule-badge,
        :root[data-theme-mood="light"] .northline-container .northline-capsule-badge,
        [data-theme-mood="light"] .northline-container .northline-capsule-badge {
          background: #eff6ff !important;
          border: 1px solid #bfdbfe !important;
          color: #1d4ed8 !important;
          box-shadow: 0 2px 6px rgba(37, 99, 235, 0.08) !important;
        }

        html.light .northline-container .northline-capsule-btn,
        :root.light .northline-container .northline-capsule-btn,
        :root[data-theme-mood="light"] .northline-container .northline-capsule-btn,
        [data-theme-mood="light"] .northline-container .northline-capsule-btn {
          background: #ffffff !important;
          border: 1px solid #cbd5e1 !important;
          color: #334155 !important;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05) !important;
        }

        html.light .northline-container .northline-capsule-btn:hover,
        :root.light .northline-container .northline-capsule-btn:hover,
        :root[data-theme-mood="light"] .northline-container .northline-capsule-btn:hover,
        [data-theme-mood="light"] .northline-container .northline-capsule-btn:hover {
          background: #f8fafc !important;
          border-color: var(--nl-accent, #2563eb) !important;
          color: #0f172a !important;
        }

        html.light .northline-container .northline-capsule-btn-active,
        :root.light .northline-container .northline-capsule-btn-active,
        :root[data-theme-mood="light"] .northline-container .northline-capsule-btn-active,
        [data-theme-mood="light"] .northline-container .northline-capsule-btn-active {
          background: var(--nl-accent, #2563eb) !important;
          border-color: var(--nl-accent, #2563eb) !important;
          color: #ffffff !important;
          box-shadow: 0 2px 10px rgba(37, 99, 235, 0.3) !important;
        }

        html.light .northline-container .northline-small-box,
        :root.light .northline-container .northline-small-box,
        :root[data-theme-mood="light"] .northline-container .northline-small-box,
        [data-theme-mood="light"] .northline-container .northline-small-box {
          background: #ffffff !important;
          border: 1px solid #cbd5e1 !important;
          box-shadow: 0 2px 8px -2px rgba(15, 23, 42, 0.06), 0 1px 3px rgba(15, 23, 42, 0.04) !important;
        }

        html.light .northline-container .northline-small-box:hover,
        :root.light .northline-container .northline-small-box:hover,
        :root[data-theme-mood="light"] .northline-container .northline-small-box:hover,
        [data-theme-mood="light"] .northline-container .northline-small-box:hover {
          border-color: var(--nl-accent, #2563eb) !important;
          box-shadow: 0 4px 14px -2px rgba(37, 99, 235, 0.12) !important;
        }

        /* Nav Capsule in light mode */
        html.light .northline-container .northline-nav-capsule,
        :root.light .northline-container .northline-nav-capsule,
        :root[data-theme-mood="light"] .northline-container .northline-nav-capsule,
        [data-theme-mood="light"] .northline-container .northline-nav-capsule {
          background: rgba(248, 250, 252, 0.94) !important;
          border: 1px solid rgba(203, 213, 225, 0.95) !important;
          box-shadow: 0 2px 12px rgba(0, 0, 0, 0.05) !important;
        }

        /* Explicit Dark Mood adaptions to ensure clean transition back */
        html.dark .northline-container .northline-capsule-badge,
        :root.dark .northline-container .northline-capsule-badge,
        :root[data-theme-mood="dark"] .northline-container .northline-capsule-badge,
        [data-theme-mood="dark"] .northline-container .northline-capsule-badge {
          background: rgba(30, 58, 138, 0.3) !important;
          border: 1px solid rgba(59, 130, 246, 0.35) !important;
          color: #93c5fd !important;
          box-shadow: 0 0 12px rgba(37, 99, 235, 0.15) !important;
        }

        html.dark .northline-container .northline-capsule-btn,
        :root.dark .northline-container .northline-capsule-btn,
        :root[data-theme-mood="dark"] .northline-container .northline-capsule-btn,
        [data-theme-mood="dark"] .northline-container .northline-capsule-btn {
          background: rgba(15, 23, 42, 0.75) !important;
          border: 1px solid rgba(51, 65, 85, 0.7) !important;
          color: #94a3b8 !important;
        }

        html.dark .northline-container .northline-capsule-btn:hover,
        :root.dark .northline-container .northline-capsule-btn:hover,
        :root[data-theme-mood="dark"] .northline-container .northline-capsule-btn:hover,
        [data-theme-mood="dark"] .northline-container .northline-capsule-btn:hover {
          border-color: var(--nl-accent, #2563eb) !important;
          color: #ffffff !important;
        }

        html.dark .northline-container .northline-capsule-btn-active,
        :root.dark .northline-container .northline-capsule-btn-active,
        :root[data-theme-mood="dark"] .northline-container .northline-capsule-btn-active,
        [data-theme-mood="dark"] .northline-container .northline-capsule-btn-active {
          background: var(--nl-accent, #2563eb) !important;
          border-color: var(--nl-accent, #2563eb) !important;
          color: #ffffff !important;
        }

        html.light .northline-container .northline-nav-active,
        [data-theme-mood="light"] .northline-container .northline-nav-active {
          background: #ffffff !important;
          color: #0f172a !important;
          border-color: rgba(203, 213, 225, 0.95) !important;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06), 0 0 12px -2px var(--nl-accent-glow) !important;
        }
      `}</style>
      {/* Background Ambience and Code Watermark Pattern */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[25%] w-[600px] h-[500px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div className="absolute top-[45%] right-[-5%] w-[500px] h-[500px] rounded-full bg-blue-500/8 blur-[160px]" />
        <div className="absolute bottom-[10%] left-[10%] w-[450px] h-[450px] rounded-full bg-sky-600/8 blur-[140px]" />
        <div className="absolute inset-0 northline-code-watermark opacity-40" />
      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        isOpen={!!selectedCaseStudy}
        onClose={() => setSelectedCaseStudy(null)}
        study={selectedCaseStudy}
      />

      {/* ========================================================================= */}
      {/* HEADER / NAVIGATION BAR                                                  */}
      {/* ========================================================================= */}
      <header
        className={`northline-navbar-sticky ${
          isScrolled ? "northline-navbar-scrolled py-0 shadow-lg" : "py-1"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between transition-all duration-300">
          {/* Logo: Blue geometric N icon + Brand Name */}
          <Link
            to="/portfolio/northline-developer"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group text-left cursor-pointer select-none"
            aria-label="Northline Developer Home"
          >
            {/* Custom Folded Ribbon 'N' SVG Logo */}
            <div className="w-8 h-8 flex items-center justify-center">
              <svg
                viewBox="0 0 36 36"
                fill="none"
                className="w-8 h-8 group-hover:scale-110 transition-transform duration-200"
              >
                <path
                  d="M6 30V6L14 6V30H6Z"
                  fill="#1d4ed8"
                  className="transition-colors group-hover:fill-blue-500"
                />
                <path
                  d="M10 6L26 30H18L6 12V6H10Z"
                  fill="#3b82f6"
                  className="transition-colors group-hover:fill-blue-400"
                />
                <path
                  d="M22 6H30V30L22 30V6Z"
                  fill="#60a5fa"
                  className="transition-colors group-hover:fill-sky-300"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold tracking-wider text-white northline-display leading-tight group-hover:text-blue-400 transition-colors">
                NORTHLINE
              </span>
              <span className="text-[9px] font-mono tracking-[0.25em] text-slate-400 uppercase -mt-0.5">
                DEVELOPER
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links with Active Class & Capsule Container */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center northline-nav-capsule gap-1 text-xs font-medium tracking-wider"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-mono tracking-wider border transition-all cursor-pointer flex items-center gap-1.5 ${
                    isActive
                      ? "northline-nav-active"
                      : "border-transparent text-slate-400 northline-nav-item hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#3b82f6] animate-pulse" />
                  )}
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick CTA / Availability Beacon */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => scrollToSection("connect")}
              className="northline-capsule-badge px-4 py-1.5 text-xs hover:border-blue-400 hover:scale-105 transition-all cursor-pointer"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 northline-beacon" />
              <span>AVAILABLE FOR HIRE</span>
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-800 text-slate-400 hover:text-white transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Real-Time Reading / Scroll Progress Bar */}
        <div className="w-full h-[2px] bg-slate-800/30 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-sky-400 transition-all duration-100 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-800 bg-[#0d1424]/95 backdrop-blur-xl px-6 py-5 space-y-2 text-sm font-mono uppercase tracking-wider text-left northline-modal-anim">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left transition-all ${
                    isActive
                      ? "bg-blue-600 text-white font-bold shadow-[0_0_15px_rgba(37,99,235,0.4)]"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {isActive && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    )}
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <span className="text-[10px] uppercase font-mono tracking-widest text-blue-200">
                      Active
                    </span>
                  )}
                </button>
              );
            })}
            <div className="pt-3 border-t border-slate-800/80">
              <button
                onClick={() => scrollToSection("connect")}
                className="w-full py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white text-center font-bold text-xs font-mono tracking-wider shadow-[0_0_15px_rgba(37,99,235,0.3)]"
              >
                START A PROJECT &rarr;
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for fixed sticky navbar */}
      <div className="h-20" />

      {/* ========================================================================= */}
      {/* HERO SECTION                                                             */}
      {/* ========================================================================= */}
      <section className="relative z-10 pt-16 pb-16 sm:pt-24 sm:pb-24 text-center overflow-hidden">
        {/* Subtle background code snippet decoration */}
        <div className="absolute inset-0 flex items-center justify-center opacity-[0.035] pointer-events-none select-none text-[11px] font-mono leading-relaxed text-blue-400 px-4 text-left overflow-hidden">
          <pre>
{`function bootstrapCluster(config: ClusterConfig): Promise<SystemState> {
  const mesh = new ServiceMesh({ discovery: config.consulEndpoint });
  const bus = new KafkaEventBus({ brokers: config.brokerNodes, tls: true });
  const orchestrator = new K8sController({ namespace: "production", replicas: 24 });
  return orchestrator.reconcile(mesh, bus);
}`}
          </pre>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="northline-capsule-badge px-4 py-1.5 text-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-400 northline-beacon" />
            <span>AVAILABLE FOR SYSTEM ARCHITECTURE COMMISSIONS</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.18] northline-display uppercase">
            CRAFTING SCALABLE SOLUTIONS
            <br />
            THROUGH INNOVATIVE SOFTWARE
            <br />
            ENGINEERING
          </h1>

          <p className="mt-6 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal">
            Expertise in Backend Systems, Cloud Architecture, and Full-Stack Development
          </p>


          {/* Hero Architecture Visual Preview Banner Card */}
          <div className="mt-12 rounded-2xl border border-[var(--nl-border)] bg-[var(--nl-card)] p-2 sm:p-3 shadow-2xl northline-card-glow max-w-3xl mx-auto overflow-hidden text-left">
            <div className="flex items-center justify-between px-3 py-2 border-b border-[var(--nl-border)] text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-slate-400 text-[11px]">northline-core-mesh-v4.production.telemetry</span>
              </div>
              <span className="northline-capsule-badge px-2.5 py-0.5 text-[10px]">
                ● ZERO-DROP FABRIC
              </span>
            </div>
            <div className="relative rounded-xl overflow-hidden max-h-[340px] bg-slate-950">
              <img
                src="/images/northline/hero-architecture.jpg"
                alt="Northline Distributed Core Architecture Telemetry"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute bottom-3 left-3 right-3 flex flex-wrap items-center justify-between gap-2 p-3 rounded-lg backdrop-blur-md bg-slate-950/70 border border-slate-800/80 text-xs font-mono text-slate-200">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1.5 text-emerald-400 font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    LIVE RUNTIME
                  </span>
                  <span className="hidden sm:inline text-slate-400">|</span>
                  <span className="hidden sm:inline text-slate-300">Throughput: 140,000 req/sec</span>
                </div>
                <div className="flex items-center gap-2 text-[11px] text-blue-300">
                  <span>P99: 4.2ms</span>
                  <span>•</span>
                  <span>Pods: 36 (Multi-AZ)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HERO INTERACTIVE CLUSTER TRAFFIC & LATENCY SIMULATOR                     */}
      {/* ========================================================================= */}
      <section id="simulator" className="relative z-10 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-blue-500/30 bg-[var(--nl-card)] p-5 sm:p-7 text-left northline-card-glow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-emerald-400 northline-beacon" />
                <div>
                  <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
                    Distributed Cluster Live Simulator
                  </h3>
                  <p className="text-[11px] font-mono text-slate-400">
                    Adjust throughput to stress test Kubernetes pod auto-scaling and P99 latency
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="northline-capsule-badge px-3 py-1 text-[10px]">
                  SLO: 99.999%
                </span>
                <span className="northline-capsule-badge px-3 py-1 text-[10px] !text-emerald-500 !border-emerald-500/30">
                  HEALTHY
                </span>
              </div>
            </div>

            {/* Controls & Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-5 items-center">
              <div className="md:col-span-7 space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-400">INCOMING LOAD (RPS):</span>
                  <span className="text-blue-400 font-bold">{trafficRps.toLocaleString()} req/sec</span>
                </div>
                <input
                  type="range"
                  min="5000"
                  max="150000"
                  step="5000"
                  value={trafficRps}
                  onChange={(e) => setTrafficRps(parseInt(e.target.value))}
                  className="northline-slider w-full cursor-pointer"
                  aria-label="Adjust traffic load"
                />
                <div className="flex justify-between text-[10px] font-mono text-slate-500">
                  <span>5K RPS (Base)</span>
                  <span>75K RPS (Peak)</span>
                  <span>150K RPS (Spike)</span>
                </div>
              </div>

              <div className="md:col-span-5 grid grid-cols-3 gap-2 text-center">
                <div className="northline-small-box p-3 text-center">
                  <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">P99 LATENCY</div>
                  <div className="text-lg font-bold text-blue-500 font-mono mt-0.5">{liveLatency} ms</div>
                </div>
                <div className="northline-small-box p-3 text-center">
                  <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">K8S PODS</div>
                  <div className="text-lg font-bold text-white font-mono mt-0.5">{activePods}</div>
                </div>
                <div className="northline-small-box p-3 text-center">
                  <div className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">ERROR RATE</div>
                  <div className="text-lg font-bold text-emerald-500 font-mono mt-0.5">0.00%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* POSITIONING SECTION                                                      */}
      {/* ========================================================================= */}
      <section
        id="positioning"
        className="relative z-10 py-16 sm:py-20 border-t border-[var(--nl-border-dim)] bg-[var(--nl-surface)]/70"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[var(--nl-text)] northline-display mb-10">
            POSITIONING
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {/* Left Column: OUR PHILOSOPHY */}
            <div className="rounded-xl border border-[var(--nl-border)] bg-[var(--nl-card)] overflow-hidden">
              <div className="bg-[var(--nl-surface)] border-b border-[var(--nl-border)] py-3 px-5 text-center">
                <h3 className="text-xs sm:text-sm font-bold tracking-wider text-[var(--nl-text)] uppercase northline-display">
                  OUR PHILOSOPHY
                </h3>
              </div>

              <div className="p-5 space-y-3">
                <div className="northline-small-box py-3.5 px-4 text-center text-xs sm:text-sm font-semibold text-[var(--nl-text)]">
                  Efficient Code
                </div>
                <div className="northline-small-box py-3.5 px-4 text-center text-xs sm:text-sm font-semibold text-[var(--nl-text)]">
                  User-Centric Design
                </div>
                <div className="northline-small-box py-3.5 px-4 text-center text-xs sm:text-sm font-semibold text-[var(--nl-text)]">
                  Continuous Innovation
                </div>
              </div>
            </div>

            {/* Right Column: CORE STRENGTHS */}
            <div className="rounded-xl border border-[var(--nl-border)] bg-[var(--nl-card)] overflow-hidden">
              <div className="bg-[var(--nl-surface)] border-b border-[var(--nl-border)] py-3 px-5 text-center">
                <h3 className="text-xs sm:text-sm font-bold tracking-wider text-[var(--nl-text)] uppercase northline-display">
                  CORE STRENGTHS
                </h3>
              </div>

              <div className="p-5 space-y-3">
                {["Distributed Systems", "Cloud Platforms AWS/GCP", "API Design"].map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() =>
                      setSelectedStrength(selectedStrength === item ? null : item)
                    }
                    className={`w-full py-3.5 px-4 rounded-xl text-center text-xs sm:text-sm font-semibold transition-all flex items-center justify-between cursor-pointer ${
                      selectedStrength === item
                        ? "northline-capsule-btn-active"
                        : "northline-small-box text-[var(--nl-text)] hover:border-blue-500"
                    }`}
                  >
                    <span className="mx-auto">{item}</span>
                    <ChevronRight
                      className={`w-4 h-4 text-blue-400 transition-transform ${
                        selectedStrength === item ? "rotate-90 text-white" : ""
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Strength Details Drawer */}
          {selectedStrength && strengthDetails[selectedStrength] && (
            <div className="mt-6 p-5 rounded-xl border border-blue-500/40 bg-[var(--nl-card)] text-left northline-modal-anim shadow-xl">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-bold text-[var(--nl-text)] font-mono uppercase tracking-wider flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-400" />
                  {strengthDetails[selectedStrength].title}
                </h4>
                <button
                  onClick={() => setSelectedStrength(null)}
                  className="northline-capsule-btn px-2.5 py-1 text-xs"
                >
                  ✕ Close
                </button>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs text-slate-300 font-mono">
                {strengthDetails[selectedStrength].bullets.map((b, i) => (
                  <li key={i} className="flex items-start gap-2 northline-small-box p-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 shrink-0" />
                    <span className="text-[var(--nl-text-muted)]">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SELECTED WORK SECTION WITH CATEGORY FILTER                               */}
      {/* ========================================================================= */}
      <section
        id="work"
        className="relative z-10 py-16 sm:py-24 border-t border-[var(--nl-border-dim)]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-semibold block mb-1">
                ENGINEERING PORTFOLIO
              </span>
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-wider text-[var(--nl-text)] northline-display">
                SELECTED WORK
              </h2>
            </div>

            {/* Category Filter Capsules */}
            <div className="flex flex-wrap gap-2.5 text-xs font-mono">
              {([
                { id: "all", label: `All Systems (${caseStudies.length})` },
                { id: "fintech", label: "FinTech & Distributed" },
                { id: "streaming", label: "Real-Time Streaming" },
                { id: "ai", label: "AI & Inference" },
              ] as const).map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`px-4 py-2 text-xs font-mono tracking-wider transition-all ${
                    activeCategory === cat.id
                      ? "northline-capsule-btn northline-capsule-btn-active"
                      : "northline-capsule-btn"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {filteredStudies.map((study) => (
              <div
                key={study.id}
                onClick={() => setSelectedCaseStudy(study)}
                className="rounded-xl border border-[var(--nl-border)] bg-[var(--nl-card2)] p-5 sm:p-6 flex flex-col justify-between transition-all northline-card-glow cursor-pointer group"
              >
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--nl-text)] northline-display uppercase mb-1 group-hover:text-[color:var(--nl-accent-sec)] transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono mb-4">
                    {study.tech}
                  </p>

                  <div className="inline-flex items-center gap-1.5 text-xs font-mono text-blue-400 mb-4 hover:text-blue-300">
                    <Settings className="w-3.5 h-3.5 text-blue-400" />
                    <span>Outcome + Case Study</span>
                  </div>

                  {/* Visual Mockup Box */}
                  <div className="rounded-lg border border-slate-800 overflow-hidden bg-slate-950 mt-1">
                    <img
                      src={study.image}
                      alt={study.title}
                      className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>TAP TO INSPECT ARCHITECTURE</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* GLOBAL CLUSTER TOPOLOGY MAP                                              */}
      {/* ========================================================================= */}
      <section className="relative z-10 py-16 border-t border-[var(--nl-border-dim)] bg-[var(--nl-surface)]/90">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-[var(--nl-border)] bg-[var(--nl-card)] p-6 sm:p-8 text-left northline-card-glow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">
                  GLOBAL MULTI-REGION MESH
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--nl-text)] northline-display uppercase">
                  ACTIVE DEPLOYMENT INFRASTRUCTURE
                </h3>
              </div>
              <span className="northline-capsule-badge px-3.5 py-1 text-xs self-start sm:self-auto">
                ANYCAST BGP AUTO-FAILOVER
              </span>
            </div>

            <div className="rounded-xl border border-slate-800 overflow-hidden bg-slate-950">
              <img
                src="/images/northline/cloud-infrastructure-map.webp"
                alt="Global Cloud Infrastructure Mesh Map"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-5 gap-3 text-center text-xs font-mono">
              <div className="northline-small-box p-3 text-center">
                <div className="text-slate-400 text-[10px]">US-EAST-1</div>
                <div className="text-emerald-500 font-bold mt-0.5">● 14ms (HQ)</div>
              </div>
              <div className="northline-small-box p-3 text-center">
                <div className="text-slate-400 text-[10px]">US-WEST-2</div>
                <div className="text-emerald-500 font-bold mt-0.5">● 18ms</div>
              </div>
              <div className="northline-small-box p-3 text-center">
                <div className="text-slate-400 text-[10px]">EU-CENTRAL-1</div>
                <div className="text-emerald-500 font-bold mt-0.5">● 22ms</div>
              </div>
              <div className="northline-small-box p-3 text-center">
                <div className="text-slate-400 text-[10px]">AP-SOUTHEAST-1</div>
                <div className="text-emerald-500 font-bold mt-0.5">● 32ms</div>
              </div>
              <div className="northline-small-box p-3 text-center col-span-2 sm:col-span-1">
                <div className="text-slate-400 text-[10px]">AP-NORTHEAST-1</div>
                <div className="text-emerald-500 font-bold mt-0.5">● 26ms</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE "ARCHITECTURE & CLOUD HEALTH" AUDIT TOOL                     */}
      {/* ========================================================================= */}
      <section
        id="audit"
        className="relative z-10 py-16 sm:py-24 border-t border-[var(--nl-border-dim)] bg-[var(--nl-surface)]/80"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="rounded-2xl border border-blue-500/30 bg-[var(--nl-card)] p-6 sm:p-10 northline-card-glow">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-semibold block mb-1">
                  TECHNICAL ASSESSMENT
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--nl-text)] northline-display uppercase">
                  SYSTEM ARCHITECTURE HEALTH AUDIT
                </h3>
              </div>

              {/* Diagnostic Score Card */}
              <div className="northline-small-box p-4 text-right shrink-0 border-blue-500/40">
                <div className="text-[10px] font-mono text-slate-400 uppercase">HEALTH SCORE</div>
                <div className="text-3xl font-bold text-blue-500 font-mono">{auditResult.score}/100</div>
                <div className="text-[10px] font-mono text-emerald-500 mt-1">Est. Savings: {auditResult.savings}/yr</div>
              </div>
            </div>

            {/* Audit Inputs */}
            <div className="space-y-6">
              {/* Step 1: Architecture Topology */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[var(--nl-text-muted)] block mb-2 font-semibold">
                  01 // Current Architectural Topology
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                  {[
                    { id: "monolith", label: "Legacy Monolith" },
                    { id: "microservices", label: "Distributed Microservices" },
                    { id: "serverless", label: "Serverless / Hybrid" },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setAuditArch(opt.id as any)}
                      className={`py-3 px-3 rounded-xl border text-center transition-all ${
                        auditArch === opt.id
                          ? "northline-capsule-btn-active"
                          : "northline-capsule-btn justify-center"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Primary Cloud Platform */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[var(--nl-text-muted)] block mb-2 font-semibold">
                  02 // Cloud Platform Deployment
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                  {[
                    { id: "aws", label: "Amazon Web Services" },
                    { id: "gcp", label: "Google Cloud Platform" },
                    { id: "multi", label: "Multi-Cloud / Hybrid" },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setAuditCloud(opt.id as any)}
                      className={`py-3 px-3 rounded-xl border text-center transition-all ${
                        auditCloud === opt.id
                          ? "northline-capsule-btn-active"
                          : "northline-capsule-btn justify-center"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Biggest Technical Bottleneck */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-[var(--nl-text-muted)] block mb-2 font-semibold">
                  03 // Principal Scalability Friction
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                  {[
                    { id: "latency", label: "High P99 Latency & Spikes" },
                    { id: "db", label: "Database Contention & Locks" },
                    { id: "ci", label: "Deploy Downtime & Rollbacks" },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setAuditBottleneck(opt.id as any)}
                      className={`py-3 px-3 rounded-xl border text-center transition-all ${
                        auditBottleneck === opt.id
                          ? "northline-capsule-btn-active"
                          : "northline-capsule-btn justify-center"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Strategic Diagnostic Action */}
            <div className="mt-8 p-4 rounded-xl border border-blue-900/40 bg-blue-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-wider text-blue-500 block mb-1 font-bold">
                  RECOMMENDED REMEDIATION
                </span>
                <p className="text-xs sm:text-sm text-[var(--nl-text-muted)]">
                  {auditArch === "monolith"
                    ? "Strangler Fig migration to containerized microservices with Kafka message decoupling recommended."
                    : "Implement distributed Redis tiering and database read-replicas with automated failover."}
                </p>
              </div>

              <a
                href="#connect"
                onClick={() => {
                  setFormData((prev) => ({
                    ...prev,
                    projectDetails: `Architecture Audit: Topology: ${auditArch}. Cloud: ${auditCloud}. Bottleneck: ${auditBottleneck}. Est. Savings: ${auditResult.savings}/yr. We want Northline to evaluate our architecture.`,
                  }));
                }}
                className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors shrink-0 text-center shadow-[0_0_15px_rgba(37,99,235,0.3)]"
              >
                Send Audit to Inquiry &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PROCESS SECTION WITH 4 HIGH-RES ARCHITECTURAL IMAGES                     */}
      {/* ========================================================================= */}
      <section
        id="process"
        className="relative z-10 py-16 sm:py-24 border-t border-[var(--nl-border-dim)] bg-[var(--nl-surface)]/80"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-blue-400 font-semibold block mb-1">
            ENGINEERING LIFECYCLE
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold uppercase tracking-wider text-[var(--nl-text)] northline-display mb-3">
            THE PROCESS
          </h2>
          <p className="text-sm text-[var(--nl-text-muted)] max-w-xl mx-auto font-mono mb-12">
            Rigorous architectural methodology from requirements to global telemetry
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.step}
                  className="rounded-2xl border border-[var(--nl-border)] bg-[var(--nl-card)] overflow-hidden flex flex-col justify-between northline-card-glow transition-all group"
                >
                  <div>
                    {/* Process Step Image Preview */}
                    <div className="relative h-44 overflow-hidden bg-slate-950">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[var(--nl-card)] via-transparent to-transparent opacity-80" />
                      
                      {/* Step Number Capsule */}
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full font-mono text-[10px] font-bold tracking-wider northline-capsule-badge">
                        PHASE {step.step}
                      </div>

                      {/* Floating Step Icon */}
                      <div className="absolute bottom-3 right-3 w-9 h-9 rounded-lg border border-blue-500/40 bg-blue-950/70 backdrop-blur-md flex items-center justify-center text-blue-400 shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-5">
                      <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider text-[var(--nl-text)] northline-display mb-2 group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-xs text-[var(--nl-text-muted)] leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                  {/* Deliverables tags */}
                  <div className="px-5 pb-5 pt-2 border-t border-[var(--nl-border)]/60">
                    <span className="text-[10px] font-mono text-[var(--nl-text-dim)] uppercase tracking-widest block mb-2">
                      Key Deliverables
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {step.deliverables.map((item, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-mono text-[var(--nl-text-muted)] bg-[var(--nl-surface)] border border-[var(--nl-border)]"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CREDIBLE OUTCOMES SECTION & MULTI-FOUNDER TESTIMONIALS                    */}
      {/* ========================================================================= */}
      <section
        id="outcomes"
        className="relative z-10 py-16 sm:py-24 border-t border-[var(--nl-border-dim)] text-center"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-wider text-[var(--nl-text)] northline-display mb-10">
            CREDIBLE OUTCOMES
          </h2>

          {/* Client Logos: Stripe, Google, Uber, AWS */}
          <div className="flex flex-wrap items-center justify-center gap-10 sm:gap-16 opacity-75 mb-12">
            <span className="text-2xl font-black tracking-tight text-white hover:text-blue-400 transition-colors font-sans">
              stripe
            </span>
            <span className="text-2xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors font-sans">
              Google
            </span>
            <span className="text-2xl font-bold tracking-widest text-white hover:text-blue-400 transition-colors font-sans uppercase">
              Uber
            </span>
            <span className="text-2xl font-black tracking-tight text-white hover:text-blue-400 transition-colors font-sans">
              aws
            </span>
          </div>

          {/* Testimonial Switcher Tabs */}
          <div className="flex justify-center gap-3 mb-6">
            {testimonials.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonial(idx as 0 | 1)}
                className={`px-4 py-2 text-xs font-mono transition-all flex items-center gap-2 ${
                  activeTestimonial === idx
                    ? "northline-capsule-btn northline-capsule-btn-active"
                    : "northline-capsule-btn"
                }`}
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

          {/* Testimonial Card */}
          <div className="max-w-2xl mx-auto rounded-2xl border border-[var(--nl-border)] bg-[var(--nl-card)]/90 p-6 sm:p-8 text-left northline-card-glow relative">
            <div className="flex flex-col sm:flex-row items-center gap-5">
              <div className="w-18 h-18 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-blue-400/60 shrink-0 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <img
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              <div className="space-y-2">
                <span className="inline-block px-2.5 py-0.5 rounded bg-blue-950 border border-blue-800 text-[10px] font-mono text-blue-300 font-bold uppercase">
                  {testimonials[activeTestimonial].metric}
                </span>
                <blockquote className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed italic">
                  “{testimonials[activeTestimonial].quote}”
                </blockquote>
                <p className="text-xs font-mono text-slate-400">
                  — {testimonials[activeTestimonial].name}, {testimonials[activeTestimonial].title}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* CONFIDENT INQUIRY PATH (CONTACT FORM)                                    */}
      {/* ========================================================================= */}
      <section
        id="connect"
        className="relative z-10 py-16 sm:py-24 border-t border-[var(--nl-border-dim)] bg-[var(--nl-surface)]"
      >
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400 block mb-2">
            CONFIDENT INQUIRY PATH
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-[var(--nl-text)] northline-display uppercase mb-8">
            LET'S BUILD SOMETHING GREAT
          </h2>

          <div className="rounded-2xl border border-[var(--nl-border)] bg-[var(--nl-card)]/90 p-6 sm:p-8 text-left northline-card-glow">
            {formSubmitted ? (
              <div className="p-6 text-center space-y-3 northline-modal-anim">
                <CheckCircle2 className="w-12 h-12 text-blue-400 mx-auto" />
                <h3 className="text-lg font-bold text-white">Inquiry Received</h3>
                <p className="text-xs text-slate-300 font-mono">
                  Thank you, {formData.name || "partner"}. I'll review your project details and reply to {formData.email} within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", company: "", email: "", projectDetails: "" });
                  }}
                  className="mt-4 px-4 py-2 rounded-lg bg-blue-600 text-white font-mono text-xs"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="northline-input w-full rounded-lg px-4 py-3 text-sm placeholder-slate-500"
                  />
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="northline-input w-full rounded-lg px-4 py-3 text-sm placeholder-slate-500"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    required
                    placeholder="Work Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="northline-input w-full rounded-lg px-4 py-3 text-sm placeholder-slate-500"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    required
                    placeholder="Project Details & Requirements..."
                    value={formData.projectDetails}
                    onChange={(e) => setFormData({ ...formData, projectDetails: e.target.value })}
                    className="northline-input w-full rounded-lg px-4 py-3 text-sm placeholder-slate-500 resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-lg bg-[#2563eb] hover:bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-[0_0_20px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>SEND INQUIRY</span>
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

      {/* ========================================================================= */}
      {/* FOOTER                                                                   */}
      {/* ========================================================================= */}
      <footer className="relative z-10 border-t border-[var(--nl-border-dim)] bg-[var(--nl-surface)] py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          {/* Logo Name */}
          <span className="font-bold text-white uppercase tracking-wider">
            NORTHLINE DEVELOPER
          </span>

          {/* Social Icons: GitHub & LinkedIn */}
          <div className="flex items-center gap-5 text-slate-400">
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="hover:text-blue-400 transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-400 transition-colors"
            >
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76c-.99 0-1.8-.8-1.8-1.79 0-.99.81-1.8 1.8-1.8.99 0 1.8.81 1.8 1.8 0 .99-.81 1.79-1.8 1.79m1.4 9.74v-8.37H5.06v8.37h2.8z" />
              </svg>
            </a>
          </div>

          <span>© 2026 NORTHLINE DEVELOPER. ALL RIGHTS RESERVED.</span>
        </div>
      </footer>
    </div>
  );
}

export default NorthlineDeveloper;
