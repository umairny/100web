import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  X,
  ChevronLeft,
  ChevronRight,
  Menu,
  CheckCircle2,
  Search,
  Image as ImageIcon,
  Monitor,
  Sparkles,
  ArrowRight,
  Sliders,
  Layers,
  Film,
  Zap,
  RotateCcw,
  Copy,
  Check,
  Code2,
  Cpu,
  Headphones,
  Calendar,
  DollarSign,
  HelpCircle,
  ChevronDown,
  Wand2,
  Eye,
  Box,
  Compass,
} from "lucide-react";
import "./MotionDeskStudio.css";

// -----------------------------------------------------------------------------
// Interactive Video Showreel Modal
// -----------------------------------------------------------------------------
interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectTitle: string;
  category: string;
}

function ShowreelModal({ isOpen, onClose, projectTitle, category }: ShowreelModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(28);
  const [fps, setFps] = useState<24 | 60 | 120>(60);

  useEffect(() => {
    let timer: any;
    if (isOpen && isPlaying) {
      timer = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 0.5));
      }, 100);
    }
    return () => clearInterval(timer);
  }, [isOpen, isPlaying]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-xl">
      <div
        className="relative w-full max-w-4xl rounded-2xl border border-blue-500/30 bg-[#0a0d16] p-4 sm:p-6 shadow-2xl text-left motiondesk-modal-anim"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 animate-ping" />
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 block">
                {category} • 4K PRORES MASTER
              </span>
              <h3 className="text-base sm:text-lg font-bold text-white motiondesk-display">
                {projectTitle}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            aria-label="Close Showreel"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative my-4 aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group">
          <img
            src="/images/motiondesk/hero-fluid-glass.webp"
            alt="Showreel Preview"
            className="w-full h-full object-cover opacity-80"
          />

          {/* Animated Waveform Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Center Play / Pause Indicator */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute z-10 w-16 h-16 rounded-full bg-blue-600/90 hover:bg-blue-500 text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.6)] transition-transform hover:scale-110 cursor-pointer"
            aria-label={isPlaying ? "Pause" : "Play"}
          >
            {isPlaying ? <Pause className="w-7 h-7" /> : <Play className="w-7 h-7 ml-1" />}
          </button>

          {/* Audio reactive simulated bars */}
          <div className="absolute bottom-4 left-4 flex items-end gap-1 h-6">
            {[40, 75, 100, 60, 90, 45, 80, 65, 95, 30].map((h, i) => (
              <div
                key={i}
                className="w-1 bg-blue-400 rounded-full transition-all duration-150"
                style={{
                  height: isPlaying ? `${Math.max(15, (h * (progress % 10)) / 8)}%` : "20%",
                }}
              />
            ))}
          </div>

          {/* Resolution Badge */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-black/60 border border-white/20 text-[10px] font-mono text-white">
              {fps} FPS
            </span>
            <span className="px-2 py-0.5 rounded bg-blue-600/80 text-[10px] font-mono text-white font-bold">
              4K UHD
            </span>
          </div>
        </div>

        {/* Timeline Scrubber */}
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-slate-400">
              00:{Math.floor(progress / 3).toString().padStart(2, "0")}:18
            </span>
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => setProgress(parseFloat(e.target.value))}
              className="w-full accent-blue-500 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
            />
            <span className="text-xs font-mono text-slate-400">00:33:00</span>
          </div>

          {/* Playback Controls & FPS Selector */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-xs font-mono uppercase text-slate-300 hover:text-white flex items-center gap-1.5 cursor-pointer"
              >
                {isPlaying ? <Pause className="w-4 h-4 text-blue-400" /> : <Play className="w-4 h-4 text-blue-400" />}
                <span>{isPlaying ? "Pause" : "Resume"}</span>
              </button>
              <button
                onClick={() => setIsMuted(!isMuted)}
                className="text-xs font-mono text-slate-400 hover:text-white cursor-pointer"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-slate-500 uppercase">Frame Rate:</span>
              {[24, 60, 120].map((rate) => (
                <button
                  key={rate}
                  onClick={() => setFps(rate as any)}
                  className={`px-2 py-0.5 rounded text-[10px] font-mono transition-colors cursor-pointer ${
                    fps === rate
                      ? "bg-blue-600 text-white font-bold"
                      : "bg-slate-900 text-slate-400 hover:text-white"
                  }`}
                >
                  {rate}fps
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Interactive Process Step Detail Modal
// -----------------------------------------------------------------------------
interface ProcessStepModalProps {
  step: {
    num: string;
    title: string;
    description: string;
    deliverables: string[];
    tools: string[];
    timeline: string;
  } | null;
  onClose: () => void;
}

function ProcessStepModal({ step, onClose }: ProcessStepModalProps) {
  if (!step) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div
        className="w-full max-w-lg rounded-2xl border border-blue-500/40 bg-[#0d1424] p-6 text-left shadow-2xl motiondesk-modal-anim"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
          <div>
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">
              PHASE {step.num}
            </span>
            <h3 className="text-xl font-bold text-white motiondesk-display">
              {step.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-400 hover:text-white cursor-pointer"
            aria-label="Close Process Details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="mt-3 text-sm text-slate-300 leading-relaxed">
          {step.description}
        </p>

        <div className="my-5 grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
              Estimated Duration
            </span>
            <span className="text-sm font-bold text-blue-400 font-mono">
              {step.timeline}
            </span>
          </div>
          <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <span className="text-[10px] font-mono uppercase text-slate-400 block mb-1">
              Tooling Stack
            </span>
            <span className="text-xs font-medium text-slate-200">
              {step.tools.join(", ")}
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase text-slate-400 block">
            Core Phase Deliverables
          </span>
          <ul className="space-y-1.5 text-xs text-slate-200">
            {step.deliverables.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            Close Phase Overview
          </button>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Main MotionDeskStudio Component
// -----------------------------------------------------------------------------
export function MotionDeskStudio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("work");
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  // Showreel Modal State
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [selectedShowreel, setSelectedShowreel] = useState({
    title: "Project Alpha: Brand Identity Motion System",
    category: "Brand Motion",
  });

  // Process Step Modal State
  const [selectedProcessStep, setSelectedProcessStep] = useState<{
    num: string;
    title: string;
    description: string;
    deliverables: string[];
    tools: string[];
    timeline: string;
  } | null>(null);

  // Active Featured Project (Controlled by thumbnails or arrows)
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);

  // Before/After 3D Breakdown Slider State
  const [compareSplit, setCompareSplit] = useState(50);
  const [breakdownView, setBreakdownView] = useState<"split" | "wireframe" | "final">("split");

  // Hero Background Image Theme Toggle (Default to 3D Optical Prism)
  const [heroImageStyle, setHeroImageStyle] = useState<"prism" | "fluid">("prism");

  // Motion Design Token Inspector State
  const [selectedPreset, setSelectedPreset] = useState<"snappy" | "cinematic" | "bouncy" | "glitch">("snappy");
  const [codeCopied, setCodeCopied] = useState(false);

  // Audio Soundstage Style
  const [soundStyle, setSoundStyle] = useState<"synth" | "ambient" | "orchestral">("synth");
  const [isPlayingAudioSim, setIsPlayingAudioSim] = useState(true);

  // Interactive Project Scope Estimator
  const [estimatorType, setEstimatorType] = useState<"brand" | "product" | "spatial" | "commercial">("brand");
  const [estimatorDuration, setEstimatorDuration] = useState<"15s" | "30s" | "60s" | "system">("30s");
  const [estimatorAudio, setEstimatorAudio] = useState(true);
  const [estimatorTimeline, setEstimatorTimeline] = useState<"standard" | "rush">("standard");

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Testimonial Switcher
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectDetails: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const navItems = [
    { id: "work", label: "Work" },
    { id: "disciplines", label: "Disciplines" },
    { id: "craft", label: "Craft & 3D" },
    { id: "process", label: "Process" },
    { id: "tokens", label: "Tokens" },
    { id: "estimator", label: "Estimator" },
    { id: "outcomes", label: "Outcomes" },
    { id: "contact", label: "Contact" },
  ];

  // Projects Data
  const projects = [
    {
      id: "alpha",
      title: "Project Alpha: Brand Identity Motion System",
      client: "Alpha Protocol",
      category: "Brand Motion",
      description:
        "Brief identity exists transition dockershaft and animation, and motion design systems for next-generation multi-platform experiences.",
      image: "/images/motiondesk/project-alpha-card.webp",
      thumb: "/images/motiondesk/thumb-2-iridescent-sphere.webp",
      deliverables: ["Dynamic 3D Logo Stings", "Interactive UI Transitions", "Lottie Vector Mesh"],
    },
    {
      id: "beta",
      title: "Beta Corp: Product Launch Animation",
      client: "Beta Corp",
      category: "Product Launch",
      description:
        "Beta Corp is complete and remain sane animation, product launch animation highlighting sleek hardware finishes and fluid optics.",
      image: "/images/motiondesk/project-beta-card.webp",
      thumb: "/images/motiondesk/thumb-4-glass-prism.webp",
      deliverables: ["4K Hero Commercial", "Social Cutdowns (9:16)", "Exploded Hardware View"],
    },
    {
      id: "gamma",
      title: "Neon Flux: Audio Reactive Particle Field",
      client: "SoundLab Audio",
      category: "3D & Procedural",
      description:
        "Procedural point cloud simulations synchronized to real-time audio frequencies with GPU-accelerated volumetric lighting.",
      image: "/images/motiondesk/project-gamma-card.webp",
      thumb: "/images/motiondesk/thumb-3-particle-vortex.webp",
      deliverables: ["Houdini Particle Cache", "TouchDesigner Real-Time Setup", "Live Stage Visuals"],
    },
    {
      id: "delta",
      title: "Prism Flow: Generative Fluid Glass Ribbons",
      client: "Aura Creative",
      category: "Experimental",
      description:
        "Multi-layered chromatic dispersion ribbons rendered with spectral caustics and continuous physics-driven movement.",
      image: "/images/motiondesk/hero-fluid-glass.webp",
      thumb: "/images/motiondesk/thumb-1-fluid-ribbons.webp",
      deliverables: ["Octane Spectral Shaders", "Seamless Web Video Loops", "Spatial Wallpaper"],
    },
  ];

  // Process Steps Data
  const processSteps = [
    {
      num: "01",
      title: "1. Discovery & Strategy",
      description:
        "MotionDesk is admission animations, snorkeling and motion designers. We analyze brand personality, narrative cadence, and creative objectives.",
      deliverables: ["Creative Direction Deck", "Kinetic Moodboard", "Timing & Cadence Analysis"],
      tools: ["Figma", "Notion", "Miro"],
      timeline: "Week 1 - 2",
    },
    {
      num: "02",
      title: "2. Concept & Storyboard",
      description:
        "Decide animation constating and concept & storyboard starts. Rapid styleframes, 3D animatics, and kinetic typography tests.",
      deliverables: ["Keyframe Styleframes", "Rough 3D Animatics", "Sound Design Scratch Track"],
      tools: ["Photoshop", "After Effects", "Cinema 4D"],
      timeline: "Week 2 - 3",
    },
    {
      num: "03",
      title: "3. Design & Animation",
      description:
        "Design artcaps and animation is and design and animation opportunities. Full 3D rendering, simulation, and procedural shading.",
      deliverables: ["Procedural Simulations", "High-Fidelity Render Passes", "Lighting & Texturing"],
      tools: ["Houdini", "Octane Render", "Blender"],
      timeline: "Week 3 - 5",
    },
    {
      num: "04",
      title: "4. Delivery & Support",
      description:
        "Deliver and support continuous animation and delivery & support cohort. Multi-format mastering for web, broadcast, and DOOH.",
      deliverables: ["ProRes 4444 Master", "Optimized WebM / Lottie", "Design System Motion Spec"],
      tools: ["Media Encoder", "LottieFiles", "Premiere Pro"],
      timeline: "Week 5 - 6",
    },
  ];

  // Disciplines Data
  const disciplines = [
    {
      title: "Brand Motion & Kinetic Identity",
      tag: "IDENTITY SYSTEMS",
      desc: "Transform static brand guidelines into dynamic kinetic systems. We define easing curves, motion principles, and broadcast-ready animated logo stings.",
      image: "/images/motiondesk/discipline-brand-motion.webp",
      tags: ["Logo Stings", "Motion Guidelines", "Kinetic Typography"],
    },
    {
      title: "3D Product CGI & Hardware Reveals",
      tag: "PHOTOREAL CGI",
      desc: "Micro-machined product reveals, exploded internal architecture, and photorealistic raytraced caustics that highlight industrial engineering precision.",
      image: "/images/motiondesk/discipline-product-cgi.webp",
      tags: ["Octane Raytracing", "Exploded Views", "Hardware Optics"],
    },
    {
      title: "Spatial UI & Fluid Micro-interactions",
      tag: "INTERACTIVE RUNTIMES",
      desc: "High-frame-rate interaction models for next-generation platforms. Delivered in Lottie, Rive, and native Swift/Kotlin for 120Hz liquid response.",
      image: "/images/motiondesk/discipline-spatial-ui.webp",
      tags: ["Lottie / Rive", "VisionOS Spatial", "Micro-Interactions"],
    },
    {
      title: "Generative VFX & Procedural Simulations",
      tag: "PROCEDURAL DYNAMICS",
      desc: "Mathematical particle systems, fluid dynamics, and cloth simulations powered by Houdini and custom GLSL shaders for immersive brand experiences.",
      image: "/images/motiondesk/discipline-generative-vfx.webp",
      tags: ["Houdini Vellum", "Audio-Reactive", "GLSL Compute"],
    },
  ];

  // Motion Token Presets
  const tokenPresets = {
    snappy: {
      name: "Snappy UI (Spatial Swift)",
      duration: "240ms",
      cubic: "cubic-bezier(0.16, 1, 0.3, 1)",
      css: "transition: all 240ms cubic-bezier(0.16, 1, 0.3, 1);",
      swift: "withAnimation(.interactiveSpring(response: 0.24, dampingFraction: 0.82))",
      kotlin: "spring(dampingRatio = 0.82f, stiffness = Spring.StiffnessMedium)",
    },
    cinematic: {
      name: "Cinematic Ease (Broadcast Glide)",
      duration: "650ms",
      cubic: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      css: "transition: transform 650ms cubic-bezier(0.25, 0.1, 0.25, 1);",
      swift: "withAnimation(.easeInOut(duration: 0.65))",
      kotlin: "tween(durationMillis = 650, easing = FastOutSlowInEasing)",
    },
    bouncy: {
      name: "Tactile Spring (Micro-Feedback)",
      duration: "380ms",
      cubic: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      css: "transition: transform 380ms cubic-bezier(0.34, 1.56, 0.64, 1);",
      swift: "withAnimation(.spring(response: 0.38, dampingFraction: 0.62))",
      kotlin: "spring(dampingRatio = 0.62f, stiffness = Spring.StiffnessLow)",
    },
    glitch: {
      name: "Kinetic Snap (Immediate Trigger)",
      duration: "140ms",
      cubic: "cubic-bezier(0.0, 0.0, 0.2, 1)",
      css: "transition: opacity 140ms cubic-bezier(0.0, 0.0, 0.2, 1);",
      swift: "withAnimation(.linear(duration: 0.14))",
      kotlin: "tween(durationMillis = 140, easing = LinearEasing)",
    },
  };

  // FAQs Data
  const faqs = [
    {
      q: "What final deliverable formats do you provide?",
      a: "We master all video work in uncompressed Apple ProRes 4444 / 422HQ (with alpha transparency if required), high-bitrate MP4/WebM for web and social, and vector Lottie / Rive runtimes for engineering integration.",
    },
    {
      q: "How does MotionDesk handle sound design and scoring?",
      a: "Every flagship piece includes bespoke sound design crafted on our analog modular soundstage. We deliver stereo masters, 5.1 surround, and stem tracks (SFX, Foley, Ambience, Music) for modular editing.",
    },
    {
      q: "What is the typical turnaround timeline for a project?",
      a: "A standard 30-second 3D product reveal or brand kinetic system typically takes 4 to 6 weeks from kickoff to delivery. Fast-track 2-week rush production is available for high-priority launches.",
    },
    {
      q: "Do we own full commercial rights and intellectual property?",
      a: "Yes. Upon final milestone payment, 100% full worldwide commercial rights and master files are transferred to your organization without recurring license fees.",
    },
  ];

  // Testimonials Data
  const testimonials = [
    {
      quote:
        "MotionDesk elevated our brand with stunning visuals. Highly professional and creative.",
      author: "Jane Doe",
      role: "Marketing Director, Global FinTech",
      company: "Google Partner",
    },
    {
      quote:
        "The level of fidelity and kinetic nuance MotionDesk brought to our global product launch was extraordinary. They exceeded every benchmark.",
      author: "Marcus Vance",
      role: "VP of Brand Creative",
      company: "Nike Ecosystem",
    },
    {
      quote:
        "Seamless execution from storyboard to 3D simulation. They understand both high-art aesthetics and commercial performance.",
      author: "Elena Rostova",
      role: "Head of Design Systems",
      company: "Spotify Creative Lab",
    },
  ];

  // Computed Scope Estimate
  const calculatedEstimate = useMemo(() => {
    let base = 8500;
    if (estimatorType === "product") base = 14000;
    if (estimatorType === "spatial") base = 12000;
    if (estimatorType === "commercial") base = 18500;

    let mult = 1;
    if (estimatorDuration === "15s") mult = 0.8;
    if (estimatorDuration === "30s") mult = 1.0;
    if (estimatorDuration === "60s") mult = 1.6;
    if (estimatorDuration === "system") mult = 2.2;

    let audioCost = estimatorAudio ? 2400 : 0;
    let urgencyMult = estimatorTimeline === "rush" ? 1.35 : 1.0;

    const total = Math.round((base * mult + audioCost) * urgencyMult);
    const low = Math.round(total * 0.9);
    const high = Math.round(total * 1.15);

    return {
      range: `$${low.toLocaleString()} - $${high.toLocaleString()}`,
      time: estimatorTimeline === "rush" ? "2 - 3 Weeks" : "4 - 6 Weeks",
    };
  }, [estimatorType, estimatorDuration, estimatorAudio, estimatorTimeline]);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Check bottom of page
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120) {
        setActiveSection("contact");
        return;
      }

      const sections = [
        "contact",
        "outcomes",
        "estimator",
        "tokens",
        "process",
        "craft",
        "disciplines",
        "work",
      ];
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

  const handleCopyCode = (text: string) => {
    navigator.clipboard.writeText(text);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 2000);
  };

  const handleApplyEstimate = () => {
    const typeLabel =
      estimatorType === "brand"
        ? "Brand Motion System"
        : estimatorType === "product"
        ? "3D Product Launch CGI"
        : estimatorType === "spatial"
        ? "Spatial UI & Rive System"
        : "Full Commercial Campaign";

    setFormData((prev) => ({
      ...prev,
      projectDetails: `Project Estimate: ${typeLabel} (${estimatorDuration}). Sound Design: ${
        estimatorAudio ? "Included" : "None"
      }. Delivery: ${estimatorTimeline === "rush" ? "Rush Priority" : "Standard"}. Target Budget: ${
        calculatedEstimate.range
      }. Please advise on studio availability.`,
    }));
    scrollToSection("contact");
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
    <div className="motiondesk-container min-h-screen bg-[#ffffff] text-slate-900 selection:bg-blue-600 selection:text-white">
      {/* Showreel Video Modal */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        projectTitle={selectedShowreel.title}
        category={selectedShowreel.category}
      />

      {/* Process Step Detail Modal */}
      <ProcessStepModal
        step={selectedProcessStep}
        onClose={() => setSelectedProcessStep(null)}
      />

      {/* ======================================================================= */}
      {/* STICKY NAVIGATION BAR                                                   */}
      {/* ======================================================================= */}
      <header
        className={`motiondesk-nav-sticky ${
          isScrolled ? "motiondesk-nav-scrolled py-0" : "py-1.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            to="/portfolio/motiondesk-studio"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(37,99,235,0.4)] group-hover:scale-105 transition-transform">
              <Play className="w-4 h-4 ml-0.5 fill-current" />
            </div>
            <div className="flex flex-col text-left">
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-white motiondesk-display leading-tight group-hover:text-blue-400 transition-colors">
                MotionDesk
              </span>
              <span className="text-[9px] font-mono tracking-[0.2em] text-slate-400 uppercase -mt-0.5">
                STUDIO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden xl:flex items-center p-1 rounded-full bg-slate-900/80 border border-slate-800 text-xs font-mono tracking-wider"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                    isActive
                      ? "motiondesk-nav-active"
                      : "text-slate-400 hover:text-white hover:bg-slate-800/60"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Reel CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => {
                setSelectedShowreel({
                  title: "MotionDesk Master Showreel 2025",
                  category: "Studio Showreel",
                });
                setShowreelOpen(true);
              }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-mono uppercase tracking-wider font-bold transition-all shadow-[0_0_15px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_rgba(37,99,235,0.6)] cursor-pointer"
            >
              <Play className="w-3.5 h-3.5 fill-current" />
              <span>SHOWREEL 2025</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 rounded-lg border border-slate-800 text-slate-300 hover:text-white cursor-pointer"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden border-b border-slate-800 bg-[#070b14]/98 backdrop-blur-2xl px-6 py-5 space-y-2 text-sm font-mono uppercase text-left motiondesk-modal-anim">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-lg text-left transition-all cursor-pointer ${
                    isActive
                      ? "bg-blue-600 text-white font-bold"
                      : "text-slate-300 hover:text-white hover:bg-slate-800/50"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-white" />}
                </button>
              );
            })}
            <div className="pt-3 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setShowreelOpen(true);
                }}
                className="w-full py-2.5 rounded-lg bg-blue-600 text-white text-center font-bold text-xs font-mono tracking-wider flex items-center justify-center gap-2 cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>PLAY SHOWREEL</span>
              </button>
            </div>
          </div>
        )}
      </header>

      {/* ======================================================================= */}
      {/* HERO SECTION                                                            */}
      {/* ======================================================================= */}
      <section className="relative z-10 pt-24 pb-20 sm:pt-36 sm:pb-32 bg-[#060810] text-white text-center overflow-hidden">
        {/* Dynamic 3D Fluid Glass Ribbon Art Backdrop */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-85 overflow-hidden">
          <img
            key={heroImageStyle}
            src={
              heroImageStyle === "prism"
                ? "/images/motiondesk/hero-prism-motion.webp"
                : "/images/motiondesk/hero-fluid-glass.webp"
            }
            alt="MotionDesk Fluid 3D Ribbon Art"
            className="w-full h-full object-cover object-center motiondesk-float-anim scale-105 transition-opacity duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#060810]/50 via-transparent to-[#ffffff]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Aesthetic Style Toggle Pill */}
          <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-slate-900/80 border border-white/15 backdrop-blur-md text-[11px] font-mono text-slate-300 mb-6 shadow-lg">
            <span className="px-2.5 py-0.5 text-slate-400 uppercase tracking-widest text-[10px]">
              CANVAS THEME:
            </span>
            <button
              type="button"
              onClick={() => setHeroImageStyle("prism")}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                heroImageStyle === "prism"
                  ? "bg-blue-600 text-white font-bold shadow-[0_0_12px_rgba(37,99,235,0.5)]"
                  : "hover:text-white text-slate-400"
              }`}
            >
              3D Optical Prism
            </button>
            <button
              type="button"
              onClick={() => setHeroImageStyle("fluid")}
              className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                heroImageStyle === "fluid"
                  ? "bg-blue-600 text-white font-bold shadow-[0_0_12px_rgba(37,99,235,0.5)]"
                  : "hover:text-white text-slate-400"
              }`}
            >
              Ethereal Caustics
            </button>
          </div>

          {/* Main Title & Subtitle */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white motiondesk-display">
            MotionDesk Studio
          </h1>
          <p className="mt-3 text-lg sm:text-2xl text-slate-300 font-normal tracking-wide">
            animation and motion design
          </p>

          {/* Hero Call to Action Button */}
          <div className="mt-8 flex justify-center">
            <button
              onClick={() => scrollToSection("work")}
              className="px-8 py-3.5 rounded-full bg-white hover:bg-slate-100 text-[#060810] font-mono text-xs font-extrabold uppercase tracking-wider transition-all duration-200 shadow-[0_4px_25px_rgba(255,255,255,0.25)] hover:shadow-[0_6px_35px_rgba(255,255,255,0.4)] hover:scale-105 cursor-pointer"
            >
              VIEW SELECTED WORK
            </button>
          </div>

          {/* Studio Metrics Highlights Bar */}
          <div className="mt-14 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 max-w-2xl mx-auto text-center font-mono">
            <div>
              <div className="text-xl sm:text-2xl font-black text-white">140+</div>
              <div className="text-[10px] text-slate-400 uppercase mt-0.5">Films Shipped</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-blue-400">4K / 8K</div>
              <div className="text-[10px] text-slate-400 uppercase mt-0.5">ACEScg Pipeline</div>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-emerald-400">12</div>
              <div className="text-[10px] text-slate-400 uppercase mt-0.5">Design Awards</div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* SELECTED WORK SECTION                                                   */}
      {/* ======================================================================= */}
      <section id="work" className="relative z-10 pt-12 pb-24 bg-[#ffffff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Section Header */}
          <div className="mb-8">
            <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-blue-600 block mb-1">
              MOTIONDESIGN
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight motiondesk-display uppercase">
              SELECTED WORK
            </h2>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-8 text-xs font-mono">
            {["all", "brand", "3d", "product", "experimental"].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? "bg-slate-900 text-white font-bold shadow-sm"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900"
                }`}
              >
                {cat === "all" ? "All Projects" : cat}
              </button>
            ))}
          </div>

          {/* Flagship Work Showcase: 3 Cards Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left Card Preview: Project Gamma */}
            <div className="hidden lg:block lg:col-span-3 rounded-2xl border border-slate-800 bg-[#080b13] overflow-hidden text-left p-5 opacity-90 hover:opacity-100 transition-all cursor-pointer motiondesk-card">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-950">
                <img
                  src="/images/motiondesk/project-gamma-card.webp"
                  alt="Neon Flux Particle Field"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[10px] font-mono text-slate-400 block mb-1">
                Case Study
              </span>
              <h4 className="text-sm font-bold text-white leading-snug motiondesk-display">
                Neon Flux: Point Cloud Particle System
              </h4>
              <p className="mt-1 text-[11px] text-slate-400 line-clamp-2">
                Real-time audio-reactive point cloud simulations and GPU rendering.
              </p>
            </div>

            {/* Center Active Flagship Card: Project Alpha */}
            <div className="lg:col-span-6 rounded-3xl border border-slate-800 bg-[#0a0e1a] text-white p-6 sm:p-8 relative overflow-hidden shadow-2xl motiondesk-card group">
              {/* Subtle ambient lighting */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-blue-600/15 blur-[100px] pointer-events-none" />

              {/* 3D Orb Visual Preview */}
              <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 mb-6 flex items-center justify-center">
                <img
                  src={projects[activeProjectIndex].image}
                  alt={projects[activeProjectIndex].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Pulsating Glowing Blue Play Button */}
                <button
                  onClick={() => {
                    setSelectedShowreel({
                      title: projects[activeProjectIndex].title,
                      category: projects[activeProjectIndex].category,
                    });
                    setShowreelOpen(true);
                  }}
                  className="absolute z-10 w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-[0_0_35px_rgba(37,99,235,0.7)] transition-transform hover:scale-110 motiondesk-play-pulse cursor-pointer"
                  aria-label="Play Project Video"
                >
                  <Play className="w-8 h-8 ml-1 fill-current" />
                </button>
              </div>

              {/* Card Meta & Typography */}
              <div className="text-left space-y-2">
                <span className="text-xs font-mono text-slate-400 block">
                  Case Study
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white motiondesk-display leading-tight">
                  {projects[activeProjectIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {projects[activeProjectIndex].description}
                </p>

                <div className="pt-3 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {projects[activeProjectIndex].deliverables.map((item, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[10px] font-mono text-slate-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => {
                      setSelectedShowreel({
                        title: projects[activeProjectIndex].title,
                        category: projects[activeProjectIndex].category,
                      });
                      setShowreelOpen(true);
                    }}
                    className="text-xs font-mono text-blue-400 hover:text-blue-300 flex items-center gap-1 font-bold cursor-pointer"
                  >
                    <span>Watch Full Case Film</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Card Preview: Beta Corp */}
            <div className="hidden lg:block lg:col-span-3 rounded-2xl border border-slate-800 bg-[#080b13] overflow-hidden text-left p-5 opacity-90 hover:opacity-100 transition-all cursor-pointer motiondesk-card">
              <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 bg-slate-950">
                <img
                  src="/images/motiondesk/project-beta-card.webp"
                  alt="Beta Corp Product Launch"
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-[10px] font-mono text-slate-400 block mb-1">
                Case Study
              </span>
              <h4 className="text-sm font-bold text-white leading-snug motiondesk-display">
                Beta Corp: Product Launch Animation
              </h4>
              <p className="mt-1 text-[11px] text-slate-400 line-clamp-2">
                Beta Corp is complete and remain sane animation, product launch animation.
              </p>
            </div>
          </div>

          {/* Thumbnail Carousel Strip (With Arrows) */}
          <div className="mt-8 flex items-center justify-center gap-3 sm:gap-4">
            <button
              onClick={() =>
                setActiveProjectIndex((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
              }
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-700 transition-all cursor-pointer shadow-sm"
              aria-label="Previous Project"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div className="flex items-center gap-3 sm:gap-4 overflow-x-auto motiondesk-hide-scrollbar py-2">
              {projects.map((proj, idx) => {
                const isSelected = activeProjectIndex === idx;
                return (
                  <button
                    key={proj.id}
                    onClick={() => setActiveProjectIndex(idx)}
                    className={`relative w-24 sm:w-36 md:w-44 aspect-[16/9] rounded-xl overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                      isSelected
                        ? "border-blue-600 shadow-[0_0_20px_rgba(37,99,235,0.4)] scale-105"
                        : "border-slate-300 opacity-70 hover:opacity-100 hover:border-slate-400"
                    }`}
                  >
                    <img
                      src={proj.thumb}
                      alt={proj.title}
                      className="w-full h-full object-cover"
                    />
                    {isSelected && (
                      <div className="absolute inset-0 bg-blue-600/10 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-blue-500 shadow-md" />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <button
              onClick={() =>
                setActiveProjectIndex((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
              }
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-700 transition-all cursor-pointer shadow-sm"
              aria-label="Next Project"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* [NEW SECTION] MOTION DISCIPLINES & CAPABILITIES                         */}
      {/* ======================================================================= */}
      <section id="disciplines" className="relative z-10 py-16 sm:py-24 bg-[#080c16] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-blue-400 block mb-1">
                DISCIPLINES &amp; SPECIALIZATIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight motiondesk-display uppercase">
                FULL-SPECTRUM MOTION CAPABILITIES
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400 max-w-xs">
              From global product launch films to micro-interaction runtimes for production codebases.
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {disciplines.map((item, idx) => (
              <div
                key={idx}
                className="motiondesk-bento-card rounded-3xl p-6 sm:p-8 flex flex-col justify-between group"
              >
                {/* Visual Preview Banner */}
                <div className="aspect-[16/9] rounded-2xl overflow-hidden mb-6 bg-slate-950 border border-slate-800">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest font-bold">
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-white motiondesk-display">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>

                  <div className="pt-2 flex flex-wrap gap-2">
                    {item.tags.map((t, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-full bg-slate-900/90 border border-slate-800 text-[10px] font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* [NEW SECTION] CRAFT & 3D TOPOLOGY BREAKDOWN SLIDER                     */}
      {/* ======================================================================= */}
      <section id="craft" className="relative z-10 py-16 sm:py-24 bg-[#ffffff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-blue-600 block mb-1">
                TECHNICAL FIDELITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight motiondesk-display uppercase">
                FROM CLAY TOPOLOGY TO RAYTRACED MASTER
              </h2>
            </div>

            {/* Mode Switcher */}
            <div className="flex items-center p-1 rounded-xl bg-slate-100 border border-slate-200 text-xs font-mono">
              {(["split", "wireframe", "final"] as const).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setBreakdownView(mode)}
                  className={`px-3 py-1.5 rounded-lg capitalize transition-all cursor-pointer ${
                    breakdownView === mode
                      ? "bg-slate-900 text-white font-bold shadow-sm"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  {mode === "split" ? "Interactive Split" : `${mode} Pass`}
                </button>
              ))}
            </div>
          </div>

          {/* Comparison Canvas */}
          <div className="relative rounded-3xl border border-slate-300 bg-slate-950 overflow-hidden shadow-2xl">
            {breakdownView === "wireframe" ? (
              <img
                src="/images/motiondesk/breakdown-wireframe.webp"
                alt="Clay Wireframe Topology Pass"
                className="w-full h-auto object-cover"
              />
            ) : breakdownView === "final" ? (
              <img
                src="/images/motiondesk/breakdown-final.webp"
                alt="Final Raytraced Composited Master"
                className="w-full h-auto object-cover"
              />
            ) : (
              <div className="relative w-full aspect-[16/10] overflow-hidden select-none">
                {/* Background: Final Raytraced */}
                <img
                  src="/images/motiondesk/breakdown-final.webp"
                  alt="Final Master"
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Foreground Clip: Wireframe Pass */}
                <div
                  className="absolute inset-0 overflow-hidden border-r-2 border-white shadow-[0_0_20px_rgba(255,255,255,0.8)]"
                  style={{ width: `${compareSplit}%` }}
                >
                  <img
                    src="/images/motiondesk/breakdown-wireframe.webp"
                    alt="Wireframe Pass"
                    className="absolute inset-0 w-full h-full object-cover max-w-none"
                    style={{ width: "100%", height: "100%" }}
                  />
                  <div className="absolute top-4 left-4 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono text-cyan-300 font-bold uppercase">
                    01 // Clay Wireframe (4.8M Polys)
                  </div>
                </div>

                <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-black/70 backdrop-blur-md border border-white/20 text-[10px] font-mono text-blue-300 font-bold uppercase">
                  02 // Octane ACEScg Master
                </div>

                {/* Slider Handle */}
                <div
                  className="absolute top-0 bottom-0 flex items-center justify-center pointer-events-none"
                  style={{ left: `${compareSplit}%`, transform: "translateX(-50%)" }}
                >
                  <div className="w-9 h-9 rounded-full bg-white text-slate-900 shadow-xl flex items-center justify-center font-bold text-xs pointer-events-auto cursor-ew-resize">
                    ↔
                  </div>
                </div>

                <input
                  type="range"
                  min="5"
                  max="95"
                  value={compareSplit}
                  onChange={(e) => setCompareSplit(parseFloat(e.target.value))}
                  className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
                  aria-label="Drag to compare Wireframe and Final Render"
                />
              </div>
            )}

            {/* Spec Bar */}
            <div className="p-4 bg-slate-900/90 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono text-slate-300">
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Subdivision Engine</span>
                <span className="font-bold text-white">Cinema 4D R26 + Octane</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Dynamic Range</span>
                <span className="font-bold text-blue-400">16-Stop ACEScg Floating Point</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Shutter Angle</span>
                <span className="font-bold text-white">180° Physical Motion Blur</span>
              </div>
              <div>
                <span className="text-[10px] text-slate-500 uppercase block">Caustic Dispersion</span>
                <span className="font-bold text-emerald-400">Spectral Raytracing Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* OUR PROCESS SECTION                                                     */}
      {/* ======================================================================= */}
      <section id="process" className="relative z-10 py-16 sm:py-24 bg-[#ffffff] border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Section Header */}
          <div className="mb-14">
            <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-blue-600 block mb-1">
              OUR PROCESS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight motiondesk-display uppercase">
              OUR PROCESS
            </h2>
          </div>

          {/* Connected Process Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div
              onClick={() => setSelectedProcessStep(processSteps[0])}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(37,99,235,0.4)] group-hover:scale-110 transition-transform">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 motiondesk-display mb-1 group-hover:text-blue-600 transition-colors">
                1. Discovery &amp; Strategy
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                MotionDesk is admission animations, snorkeling and motion designers.
              </p>
              <span className="mt-2 text-[10px] font-mono text-blue-600 font-bold uppercase tracking-wider">
                Click to explore &rarr;
              </span>
            </div>

            {/* Step 2 */}
            <div
              onClick={() => setSelectedProcessStep(processSteps[1])}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-full bg-[#111827] text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                <ImageIcon className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 motiondesk-display mb-1 group-hover:text-blue-600 transition-colors">
                2. Concept &amp; Storyboard
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Decide animation constating and concept &amp; storyboard starts.
              </p>
              <span className="mt-2 text-[10px] font-mono text-blue-600 font-bold uppercase tracking-wider">
                Click to explore &rarr;
              </span>
            </div>

            {/* Step 3 */}
            <div
              onClick={() => setSelectedProcessStep(processSteps[2])}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-full bg-[#111827] text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 motiondesk-display mb-1 group-hover:text-blue-600 transition-colors">
                3. Design &amp; Animation
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Design artcaps and animation is and design and animation opportunities.
              </p>
              <span className="mt-2 text-[10px] font-mono text-blue-600 font-bold uppercase tracking-wider">
                Click to explore &rarr;
              </span>
            </div>

            {/* Step 4 */}
            <div
              onClick={() => setSelectedProcessStep(processSteps[3])}
              className="flex flex-col items-center text-center cursor-pointer group"
            >
              <div className="w-14 h-14 rounded-full bg-[#111827] text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-sm font-bold text-slate-900 motiondesk-display mb-1 group-hover:text-blue-600 transition-colors">
                4. Delivery &amp; Support
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Deliver and support continuous animation and delivery &amp; support cohort.
              </p>
              <span className="mt-2 text-[10px] font-mono text-blue-600 font-bold uppercase tracking-wider">
                Click to explore &rarr;
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* [NEW SECTION] ENGINEERING MOTION TOKENS SPEC ENGINE                     */}
      {/* ======================================================================= */}
      <section id="tokens" className="relative z-10 py-16 sm:py-24 bg-[#0a0e19] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-blue-400 block mb-1">
                ENGINEERING HANDOFF
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight motiondesk-display uppercase">
                PRODUCTION-READY MOTION TOKENS
              </h2>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Motion specs translated directly into CSS, Swift, and Jetpack Compose.
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left: Preset Selector */}
            <div className="lg:col-span-4 space-y-3">
              {(["snappy", "cinematic", "bouncy", "glitch"] as const).map((key) => {
                const item = tokenPresets[key];
                const isSelected = selectedPreset === key;
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedPreset(key)}
                    className={`w-full p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? "bg-blue-600/20 border-blue-400 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                        : "bg-[#080b13] border-slate-800 text-slate-400 hover:text-white hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold font-mono text-white">{item.name}</span>
                      <span className="text-xs font-mono text-blue-400">{item.duration}</span>
                    </div>
                    <div className="text-[11px] font-mono text-slate-500 mt-1 truncate">
                      {item.cubic}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Right: Code Inspector Box & Interactive Kinetic Preview */}
            <div className="lg:col-span-8 rounded-2xl border border-slate-800 bg-[#04060d] p-6 text-left relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <Code2 className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-mono text-slate-300">
                    MOTION SPEC // {tokenPresets[selectedPreset].name.toUpperCase()}
                  </span>
                </div>
                <button
                  onClick={() => handleCopyCode(tokenPresets[selectedPreset].css)}
                  className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 hover:border-blue-400 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer"
                >
                  {codeCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{codeCopied ? "Copied!" : "Copy Token"}</span>
                </button>
              </div>

              {/* Code Snippet Box */}
              <div className="my-5 p-4 rounded-xl motiondesk-code-box space-y-2 text-xs font-mono">
                <div className="text-slate-500">// 1. Web (Vanilla CSS / Tailwind)</div>
                <div className="text-sky-300">{tokenPresets[selectedPreset].css}</div>
                <div className="text-slate-500 pt-2">// 2. Apple iOS (Swift UI)</div>
                <div className="text-emerald-300">{tokenPresets[selectedPreset].swift}</div>
                <div className="text-slate-500 pt-2">// 3. Android (Jetpack Compose)</div>
                <div className="text-indigo-300">{tokenPresets[selectedPreset].kotlin}</div>
              </div>

              {/* Live Preview Target */}
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono text-slate-400">
                  Hover to test easing response:
                </span>
                <div className="w-28 h-10 rounded-lg bg-blue-600 hover:bg-sky-400 hover:translate-x-4 flex items-center justify-center text-xs font-mono font-bold text-white transition-all cursor-pointer select-none"
                  style={{ transitionTimingFunction: tokenPresets[selectedPreset].cubic }}
                >
                  Hover Me &rarr;
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* [NEW SECTION] BESPOKE SOUND DESIGN & SPATIAL MASTERING                  */}
      {/* ======================================================================= */}
      <section className="relative z-10 py-16 sm:py-24 bg-[#ffffff]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 shadow-sm overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-blue-600 block">
                  AUDIO-VISUAL HARMONY
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight motiondesk-display uppercase">
                  BESPOKE SOUND DESIGN &amp; SPATIAL SCORING
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Animation only reaches its peak emotional resonance when synchronized to tailored sonic frequencies. Our analog soundstage engineers custom foley, micro-tactile clicks, and full orchestral scores.
                </p>

                {/* Sound Style Filter */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {[
                    { id: "synth", label: "Analog Modular Synth" },
                    { id: "ambient", label: "Organic Ambient Caustics" },
                    { id: "orchestral", label: "Cinematic Orchestral" },
                  ].map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSoundStyle(style.id as any)}
                      className={`px-3.5 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                        soundStyle === style.id
                          ? "bg-slate-900 text-white font-bold"
                          : "bg-white border border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {style.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Soundstage Visualizer */}
              <div className="lg:col-span-6 rounded-2xl bg-[#060812] border border-slate-800 p-6 text-center text-white overflow-hidden shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 text-xs font-mono">
                  <span className="text-slate-400">SOUNDSTAGE SPECTRUM</span>
                  <span className="text-emerald-400 font-bold">● 48kHz / 24-BIT MASTER</span>
                </div>

                <div className="py-6 flex items-end justify-center gap-1.5 h-36">
                  {Array.from({ length: 28 }).map((_, i) => {
                    const h = 20 + Math.abs(Math.sin(i * 0.4 + (isPlayingAudioSim ? 1 : 0)) * 80);
                    return (
                      <div
                        key={i}
                        className="w-1.5 rounded-t bg-gradient-to-t from-blue-600 to-sky-400 transition-all duration-150"
                        style={{ height: `${h}%` }}
                      />
                    );
                  })}
                </div>

                <div className="pt-3 flex items-center justify-between text-[11px] font-mono text-slate-400 border-t border-slate-800">
                  <span>DOLBY ATMOS SPATIAL STEMS</span>
                  <span>ZERO SAMPLE LICENSING ISSUES</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* [NEW SECTION] STUDIO LEADERSHIP & CREATIVE DIRECTORS                   */}
      {/* ======================================================================= */}
      <section className="relative z-10 py-16 sm:py-24 bg-[#070a13] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="mb-12">
            <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-blue-400 block mb-1">
              STUDIO LEADERSHIP
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight motiondesk-display uppercase">
              DIRECTORS BEHIND THE CRAFT
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Alex Vance */}
            <div className="rounded-3xl border border-slate-800 bg-[#0c101d] p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 group hover:border-blue-500/40 transition-colors">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shrink-0">
                <img
                  src="/images/motiondesk/director-alex-vance.webp"
                  alt="Alex Vance"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 block">
                  FOUNDER &amp; ECD
                </span>
                <h3 className="text-lg font-bold text-white motiondesk-display">Alex Vance</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  14+ years pioneering kinetic identity and 3D broadcast systems. Formerly Design Director at Pentagram &amp; Buck.
                </p>
                <div className="text-[10px] font-mono text-slate-400 pt-1">
                  Accolades: D&amp;AD Yellow Pencil, Awwwards Site of the Day (x4)
                </div>
              </div>
            </div>

            {/* Maya Lin */}
            <div className="rounded-3xl border border-slate-800 bg-[#0c101d] p-6 sm:p-8 flex flex-col sm:flex-row items-center sm:items-start gap-6 group hover:border-blue-500/40 transition-colors">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 shrink-0">
                <img
                  src="/images/motiondesk/director-maya-lin.webp"
                  alt="Maya Lin"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-2 text-center sm:text-left">
                <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400 block">
                  HEAD OF 3D &amp; VFX
                </span>
                <h3 className="text-lg font-bold text-white motiondesk-display">Maya Lin</h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Specialist in procedural Houdini geometry and real-time raytracing shaders. Unreal Engine Fellow, ex-ManvsMachine.
                </p>
                <div className="text-[10px] font-mono text-slate-400 pt-1">
                  Accolades: Cannes Lion Silver, FWA of the Day
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* CREDIBLE OUTCOMES SECTION                                               */}
      {/* ======================================================================= */}
      <section id="outcomes" className="relative z-10 py-16 sm:py-24 bg-[#ffffff] border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          {/* Section Header */}
          <div className="mb-12">
            <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-blue-600 block mb-1">
              CREDIBLE OUTCOMES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight motiondesk-display uppercase">
              CREDIBLE OUTCOMES
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: 4x4 Grid of Client Logos */}
            <div className="lg:col-span-6">
              <div className="p-3 sm:p-4 rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
                <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
                  {[
                    "Google",
                    "Nike",
                    "amazon",
                    "Apple",
                    "G",
                    "Swoosh",
                    "Spotify",
                    "PayPal",
                    "hp",
                    "SoundCloud",
                    "FILA",
                    "IKEA",
                    "developer",
                    "dingfloor",
                    "Polestar",
                    "VW",
                  ].map((brand, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-xl bg-black text-white flex items-center justify-center p-2 text-center transition-transform hover:scale-105 hover:bg-slate-900 shadow-sm cursor-pointer select-none"
                    >
                      <span className="text-[11px] sm:text-xs font-bold font-mono tracking-tight">
                        {brand}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Featured Testimonial Quote with Tabs */}
            <div className="lg:col-span-6 space-y-6">
              {/* Giant quotation symbol */}
              <div className="text-5xl sm:text-6xl text-blue-600 font-serif leading-none select-none">
                “
              </div>

              <blockquote className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 motiondesk-display leading-snug">
                "{testimonials[activeTestimonialIndex].quote}"
              </blockquote>

              <div className="pt-2">
                <div className="text-sm font-bold text-slate-900">
                  — {testimonials[activeTestimonialIndex].author}
                </div>
                <div className="text-xs font-mono text-slate-500 mt-0.5">
                  {testimonials[activeTestimonialIndex].role} •{" "}
                  {testimonials[activeTestimonialIndex].company}
                </div>
              </div>

              {/* Testimonial Switcher Tabs */}
              <div className="flex items-center gap-2 pt-4 border-t border-slate-100">
                {testimonials.map((t, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTestimonialIndex(idx)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeTestimonialIndex === idx
                        ? "w-8 bg-blue-600"
                        : "w-2 bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`View testimonial ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Key Studio Metric Badges */}
              <div className="grid grid-cols-3 gap-3 pt-4">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-lg font-black text-blue-600 font-mono block">140+</span>
                  <span className="text-[10px] text-slate-500 uppercase font-mono">Films Shipped</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-lg font-black text-blue-600 font-mono block">12</span>
                  <span className="text-[10px] text-slate-500 uppercase font-mono">Design Awards</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-lg font-black text-blue-600 font-mono block">99.4%</span>
                  <span className="text-[10px] text-slate-500 uppercase font-mono">Client NPS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* [NEW SECTION] INTERACTIVE PROJECT SCOPE & BUDGET ESTIMATOR              */}
      {/* ======================================================================= */}
      <section id="estimator" className="relative z-10 py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="rounded-3xl border border-blue-500/30 bg-white p-6 sm:p-10 shadow-lg">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-slate-100">
              <div>
                <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-blue-600 block mb-1">
                  SCOPE PLANNER
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 motiondesk-display uppercase">
                  ESTIMATE YOUR PROJECT COMMISSION
                </h3>
              </div>
              <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-right shrink-0">
                <span className="text-[10px] font-mono text-slate-500 uppercase block">ESTIMATED BUDGET</span>
                <span className="text-2xl sm:text-3xl font-bold font-mono text-blue-600">
                  {calculatedEstimate.range}
                </span>
                <span className="text-[10px] font-mono text-slate-500 block mt-0.5">
                  Timeline: {calculatedEstimate.time}
                </span>
              </div>
            </div>

            {/* Controls */}
            <div className="space-y-6">
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-700 block mb-2 font-bold">
                  01 // Commission Type
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs font-mono">
                  {[
                    { id: "brand", label: "Brand Motion" },
                    { id: "product", label: "3D Product CGI" },
                    { id: "spatial", label: "Spatial UI (Rive)" },
                    { id: "commercial", label: "Hero Commercial" },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      onClick={() => setEstimatorType(t.id as any)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        estimatorType === t.id
                          ? "border-blue-600 bg-blue-600 text-white font-bold shadow-sm"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-slate-700 block mb-2 font-bold">
                  02 // Film Duration or Asset Volume
                </label>
                <div className="grid grid-cols-4 gap-2.5 text-xs font-mono">
                  {[
                    { id: "15s", label: "15s Teaser" },
                    { id: "30s", label: "30s Spot" },
                    { id: "60s", label: "60s Launch" },
                    { id: "system", label: "Full System" },
                  ].map((d) => (
                    <button
                      key={d.id}
                      type="button"
                      onClick={() => setEstimatorDuration(d.id as any)}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        estimatorDuration === d.id
                          ? "border-blue-600 bg-blue-600 text-white font-bold shadow-sm"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-700 block mb-2 font-bold">
                    03 // Bespoke Sound &amp; Foley Scoring
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setEstimatorAudio(true)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                        estimatorAudio
                          ? "border-blue-600 bg-blue-600 text-white font-bold"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      Included (+SFX)
                    </button>
                    <button
                      type="button"
                      onClick={() => setEstimatorAudio(false)}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                        !estimatorAudio
                          ? "border-blue-600 bg-blue-600 text-white font-bold"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      Client Provides
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-slate-700 block mb-2 font-bold">
                    04 // Production Schedule
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                    <button
                      type="button"
                      onClick={() => setEstimatorTimeline("standard")}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                        estimatorTimeline === "standard"
                          ? "border-blue-600 bg-blue-600 text-white font-bold"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      Standard (4-6 wks)
                    </button>
                    <button
                      type="button"
                      onClick={() => setEstimatorTimeline("rush")}
                      className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                        estimatorTimeline === "rush"
                          ? "border-blue-600 bg-blue-600 text-white font-bold"
                          : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      Rush (2-3 wks)
                    </button>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="button"
                  onClick={handleApplyEstimate}
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-md cursor-pointer"
                >
                  <span>Apply Scope to Inquiry &rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* [NEW SECTION] FREQUENTLY ASKED QUESTIONS (FAQ)                          */}
      {/* ======================================================================= */}
      <section className="relative z-10 py-16 sm:py-24 bg-[#ffffff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="mb-12 text-center">
            <span className="text-xs font-bold font-mono uppercase tracking-[0.2em] text-blue-600 block mb-1">
              QUESTIONS &amp; LOGISTICS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight motiondesk-display uppercase">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-slate-50 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-sm sm:text-base text-slate-900 cursor-pointer"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-blue-600 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-6 sm:px-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/70 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* CONFIDENT INQUIRY PATH (FOOTER CONTACT SECTION)                         */}
      {/* ======================================================================= */}
      <section id="contact" className="relative z-10 pt-20 pb-12 bg-[#000000] text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left pb-16 border-b border-slate-800/80">
            {/* Left Column: Heading & Contact Info */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-blue-500 block">
                CONFIDENT INQUIRY PATH
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white motiondesk-display uppercase leading-tight">
                READY TO
                <br />
                COLLABORATE?
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 font-normal max-w-sm">
                Open your portfolio website for animation and motion design. We partner with world-class brands on visual storytelling.
              </p>

              <div className="pt-6 space-y-1 text-xs font-mono">
                <div className="text-slate-500 uppercase tracking-wider font-bold">Contact Us</div>
                <div className="text-white hover:text-blue-400 transition-colors">+1 234 567 8900</div>
                <div className="text-blue-400 hover:underline cursor-pointer">video@motiondesk.com</div>
              </div>
            </div>

            {/* Right Column: Inquiry Form */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-slate-800 bg-[#0d121f]/90 p-6 sm:p-8">
                {formSubmitted ? (
                  <div className="p-8 text-center space-y-3 motiondesk-modal-anim">
                    <CheckCircle2 className="w-12 h-12 text-blue-500 mx-auto" />
                    <h3 className="text-xl font-bold text-white motiondesk-display">
                      Inquiry Received
                    </h3>
                    <p className="text-xs font-mono text-slate-400 max-w-md mx-auto">
                      Thank you, {formData.name || "friend"}. Our creative directors will review your project requirements and respond to {formData.email} within 24 hours.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({ name: "", email: "", projectDetails: "" });
                      }}
                      className="mt-4 px-5 py-2 rounded-lg bg-blue-600 text-white font-mono text-xs font-bold uppercase cursor-pointer"
                    >
                      Send Another Project Note
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        rows={4}
                        required
                        placeholder="Project Details"
                        value={formData.projectDetails}
                        onChange={(e) =>
                          setFormData({ ...formData, projectDetails: e.target.value })
                        }
                        className="w-full rounded-xl bg-slate-900/90 border border-slate-800 px-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 rounded-xl bg-[#2563eb] hover:bg-blue-600 text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] cursor-pointer"
                    >
                      {isSubmitting ? "TRANSMITTING..." : "SUBMIT INQUIRY"}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Socials */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
            <div>Copyright © MotionDesk Studio</div>

            <div className="flex items-center gap-6">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://vimeo.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-white transition-colors"
              >
                Vimeo
              </a>
            </div>

            <div>
              <a href="#contact" className="hover:text-white transition-colors">
                Privacy Notices
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
