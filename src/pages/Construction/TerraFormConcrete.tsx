import React, { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Award,
  BadgeAlert,
  BadgeCheck,
  Box,
  Building,
  Building2,
  Calculator,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Compass,
  Cpu,
  Droplets,
  Eye,
  FileCheck,
  FileSpreadsheet,
  FileText,
  Flame,
  Gauge,
  Hammer,
  HardHat,
  HelpCircle,
  Layers,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  Maximize2,
  Menu,
  Phone,
  Ruler,
  Scale,
  Search,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Shovel,
  Sparkles,
  Target,
  Trees,
  Truck,
  UploadCloud,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { imageUrl } from "../../assets/images";
import "./TerraFormConcrete.css";

// Asset Image Resolvers
const heroImg = imageUrl("Construction/terraform/hero.webp") || "/images/Construction/terraform/hero.webp";
const structuralImg = imageUrl("Construction/terraform/structural.webp") || "/images/Construction/terraform/structural.webp";
const foundationImg = imageUrl("Construction/terraform/foundation.webp") || "/images/Construction/terraform/foundation.webp";
const architecturalImg = imageUrl("Construction/terraform/architectural.webp") || "/images/Construction/terraform/architectural.webp";
const polishedImg = imageUrl("Construction/terraform/polished.webp") || "/images/Construction/terraform/polished.webp";
const flatworkImg = imageUrl("Construction/terraform/flatwork.webp") || "/images/Construction/terraform/flatwork.webp";
const stampedImg = imageUrl("Construction/terraform/stamped.webp") || "/images/Construction/terraform/stamped.webp";

// Nav items
const navItems = [
  { label: "Mix Design Lab", id: "tf-lab" },
  { label: "Finish Studio", id: "tf-finishes" },
  { label: "Yardage Calculator", id: "tf-calculator" },
  { label: "Capabilities", id: "tf-capabilities" },
  { label: "Architectural Portfolio", id: "tf-portfolio" },
  { label: "ACI Standards", id: "tf-standards" },
  { label: "Ready-Mix Dispatch", id: "tf-dispatch" },
];

// 1. Concrete Mix Design & PSI Lab Options
const mixDesigns = [
  {
    id: "slab",
    name: "4,000 PSI Post-Tensioned Slab",
    category: "Residential & Multi-Family",
    psi28: "4,200 PSI",
    psi7: "2,850 PSI",
    slump: "4\" – 5\" Slump",
    wcRatio: "0.45 w/c Ratio",
    aggregate: "3/4\" Washed River Rock / Type I/II Portland",
    desc: "Engineered for high tensile post-tensioned tendon reinforcement, minimal shrinkage cracking, and high-tolerance laser screed finishing.",
  },
  {
    id: "mass_pour",
    name: "6,500 PSI High-Early Mat Foundation",
    category: "Commercial & Heavy Industrial",
    psi28: "6,850 PSI",
    psi7: "4,600 PSI",
    slump: "5\" – 6\" Slump (Superplasticized)",
    wcRatio: "0.38 w/c Ratio",
    aggregate: "Micro-Silica Blend + #57 Crushed Granite",
    desc: "High-early mass pour formulation for crane pads, deep footings, and structural pilings requiring rapid compressive strength gain.",
  },
  {
    id: "board_formed",
    name: "8,000 PSI Self-Consolidating (SCC)",
    category: "Architectural Board-Formed Walls",
    psi28: "8,400 PSI",
    psi7: "5,800 PSI",
    slump: "8\" – 10\" Flow Spread (SCC)",
    wcRatio: "0.32 w/c Ratio",
    aggregate: "3/8\" Pea Gravel + Polycarboxylate Superplasticizer",
    desc: "Ultra-fluid architectural mix that fills intricate formwork tie-holes and wood-grain form liners without vibration, guaranteeing zero honeycomb defects.",
  },
  {
    id: "uhpc",
    name: "10,000+ PSI Ultra-High Performance (UHPC)",
    category: "Structural High-Rise Tower Cores",
    psi28: "11,200 PSI",
    psi7: "7,900 PSI",
    slump: "9\" Fluid Flow Spread",
    wcRatio: "0.26 w/c Ratio",
    aggregate: "Silica Fume, Steel Fiber Matrix, Nano-Additives",
    desc: "Impermeable, ductile concrete engineered for extreme seismic structural columns, post-tensioned bridge cantilevers, and heavy shear walls.",
  },
];

// 2. Architectural Finishes
const architecturalFinishes = [
  {
    id: "board_form",
    title: "Board-Formed Woodgrain",
    image: architecturalImg,
    sheen: "Matte Tactile Texture",
    scof: "0.78 (High Traction)",
    application: "Feature Walls, Fireplaces, Luxury Facades",
    desc: "Cast against rough-sawn Douglas Fir or Cedar boards, transferring organic timber grain and crisp architectural tie-holes into permanent monolithic stone.",
  },
  {
    id: "polished",
    title: "Diamond Polished Terrazzo",
    image: polishedImg,
    sheen: "Level 4 High-Gloss (3000 Grit)",
    scof: "0.62 (OSHA Compliant)",
    application: "Showrooms, Museum Plazas, Interior Floors",
    desc: "Progressive diamond grinding reveals multi-colored aggregate matrix, densified with lithium silicate for a mirror-like, dust-proof monolithic surface.",
  },
  {
    id: "acid_etched",
    title: "Acid-Etched Architectural",
    image: flatworkImg,
    sheen: "Uniform Fine-Sand Matte",
    scof: "0.82 (Wet Traction)",
    application: "Plazas, Courtyards, Exterior Steps",
    desc: "Controlled chemical micro-etching removes the surface cement paste to expose uniform fine sand grains with a soft, natural limestone texture.",
  },
  {
    id: "stamped_slate",
    title: "Stamped Ashlar Slate",
    image: stampedImg,
    sheen: "Satin Acrylic Sealed",
    scof: "0.74 (Slip Resistant)",
    application: "Driveways, Patios, Pool Decks",
    desc: "Deep-relief continuous polyurethane stamping combined with dual-tone integral iron oxide colors and antique release agents.",
  },
  {
    id: "broomed",
    title: "Commercial Broomed Flatwork",
    image: foundationImg,
    sheen: "Directional Linear Traction",
    scof: "0.88 (Maximum Grip)",
    application: "Loading Docks, ADA Ramps, Sidewalks",
    desc: "Precision horsehair or nylon brooming creates micro-grooves designed for heavy industrial vehicular traffic and wet weather slip prevention.",
  },
];

// 3. Featured Concrete Megaprojects
const concretePortfolio = [
  {
    name: "The Helix Tower Mat Foundation",
    category: "Mass Foundation Pour",
    metric: "3,400 CY Continuous Pour • 28 Hours",
    image: heroImg,
    specs: "Continuous dual-boom pump trucks • 6,500 PSI High-Early mix • Zero cold joints",
    location: "Metropolitan Financial District",
  },
  {
    name: "Ridgeview Cantilever Architectural Residence",
    category: "Board-Formed Architectural",
    metric: "22-ft Free-Standing Board-Formed Walls",
    image: architecturalImg,
    specs: "Rough-sawn cedar form liners • 8,000 PSI SCC • Custom recessed reveal joints",
    location: "Alpine Foothills",
  },
  {
    name: "AeroTech Commercial Logistics Floor",
    category: "Super-Flat Polished Slabs",
    metric: "180,000 SF Slab • FF 65 / FL 50",
    image: polishedImg,
    specs: "Laser screed placement • Diamond polished Level 3 • Armored steel construction joints",
    location: "Logistics Airpark",
  },
  {
    name: "Cascade Plaza & Sunken Amphitheater",
    category: "Decorative & Structural Hardscape",
    metric: "45,000 SF Acid-Etched & Stamped Plaza",
    image: stampedImg,
    specs: "Integral charcoal pigment • Radiant hydronic heating embedded in slab",
    location: "Civic Cultural Center",
  },
];

// 4. Core Capabilities
const coreServices = [
  {
    title: "Structural & Mass Foundations",
    desc: "Mass mat pours, grade beams, drilled pier caps, and post-tensioned foundation engineering.",
    image: heroImg,
    badge: "Structural",
    points: ["Laser-guided Somero S-22EZ screed", "Thermocouple heat-of-hydration monitoring", "Continuous high-output boom pumping"],
  },
  {
    title: "Board-Formed Architectural Walls",
    desc: "Artisan cast-in-place walls with crisp tie-hole spacing, shadow reveals, and timber grain texture.",
    image: architecturalImg,
    badge: "Architectural",
    points: ["Self-consolidating concrete (SCC)", "Custom formwork fabrication", "Zero honeycomb guarantee"],
  },
  {
    title: "High-Tolerance Super-Flat Floors",
    desc: "Industrial warehouse slabs, VNA (Very Narrow Aisle) high-rack flooring, and automated logistics pads.",
    image: polishedImg,
    badge: "Industrial",
    points: ["FF 60 / FL 50 super-flat tolerances", "Diamond dowel load-transfer systems", "Dry-shake metallic hardeners"],
  },
  {
    title: "Decorative & Polished Flatwork",
    desc: "Diamond grinding, salt-and-pepper aggregate exposure, acid stains, and stamped slate hardscaping.",
    image: stampedImg,
    badge: "Decorative",
    points: ["Level 1 to Level 4 diamond polish", "UV-stable penetrating lithium densifiers", "Integral color batching"],
  },
];

// FAQs
const faqsList = [
  {
    q: "What is TerraForm's daily cubic yard placement and pump truck capacity?",
    a: "We operate a dedicated fleet of Putzmeister and Schwing boom pumps (32m to 56m) and can place up to 1,500 cubic yards per day on single-shift structural pours, or over 3,500 cubic yards on continuous 24-hour mat foundation operations.",
  },
  {
    q: "How do you prevent cracking in high-end architectural and polished concrete?",
    a: "We utilize low water-cement ratio mix designs (w/c < 0.38) with polycarboxylate superplasticizers, macro-synthetic structural fibers, early-entry Soff-Cut saw joints within 4 hours of finishing, and 7-day wet cure blankets to minimize shrinkage stress.",
  },
  {
    q: "What are your floor flatness (FF) and floor levelness (FL) tolerances?",
    a: "Our laser screed crews routinely achieve FF 50 to FF 75 (Flatness) and FL 40 to FL 60 (Levelness), meeting or exceeding ASTM E1155 standards for automated high-density warehouse robotics and industrial facilities.",
  },
  {
    q: "Are your formwork and finishing crews ACI and PTI certified?",
    a: "Yes. All field superintendents hold ACI Concrete Flatwork Finisher & Technician certifications, and our structural post-tensioning teams are certified under the Post-Tensioning Institute (PTI) Level 2 standard.",
  },
];

export function TerraFormConcrete() {
  const [activeMix, setActiveMix] = useState(mixDesigns[0]);
  const [activeFinish, setActiveFinish] = useState(architecturalFinishes[0]);

  // Yardage Calculator States
  const [calcLength, setCalcLength] = useState(60);
  const [calcWidth, setCalcWidth] = useState(40);
  const [calcThickness, setCalcThickness] = useState(6); // inches
  const [calcIncludePump, setCalcIncludePump] = useState(true);

  // Nav & Header States
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("tf-lab");

  // Dispatch Form States
  const [pourProject, setPourProject] = useState("");
  const [pourContact, setPourContact] = useState("");
  const [pourEmail, setPourEmail] = useState("");
  const [pourDate, setPourDate] = useState("");
  const [pourNotes, setPourNotes] = useState("");
  const [pourSubmitted, setPourSubmitted] = useState(false);

  // FAQ State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const offset = window.scrollY + 180;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= offset) {
          setActiveNav(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "auto";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    if (id === "tf-top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Concrete Yardage Calculation
  const yardageData = useMemo(() => {
    const rawVolumeCuFt = calcLength * calcWidth * (calcThickness / 12);
    const rawCubicYards = rawVolumeCuFt / 27;
    const safetyMarginYards = rawCubicYards * 1.10; // 10% spillage/excavation waste
    const finalYards = Math.ceil(safetyMarginYards * 10) / 10;
    const readyMixTrucks = Math.ceil(finalYards / 10); // 10 CY per standard truck
    const estRebarWeightLbs = Math.round(calcLength * calcWidth * (calcThickness >= 6 ? 3.5 : 2.0));
    
    let pumpBoom = "32m Z-Boom Pump Truck";
    if (calcLength > 100 || calcWidth > 100) pumpBoom = "47m 5-Section RZ-Boom";
    if (finalYards > 200) pumpBoom = "56m Heavy Commercial Mast Pump";

    return {
      rawYards: rawCubicYards.toFixed(1),
      finalYards: finalYards.toFixed(1),
      trucks: readyMixTrucks,
      rebarWeight: estRebarWeightLbs.toLocaleString(),
      pumpBoom,
      sqFt: (calcLength * calcWidth).toLocaleString(),
    };
  }, [calcLength, calcWidth, calcThickness]);

  const handlePourSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPourSubmitted(true);
  };

  return (
    <div className="tf-site" id="tf-top">
      {/* Simple Classic Header */}
      <header className={`tf-header ${scrolled ? "scrolled" : ""}`}>
        <div className="tf-wrap tf-header-inner">
          <a href="#tf-top" className="tf-brand-link" onClick={(e) => scrollTo(e, "tf-top")}>
            <div className="tf-brand-box">
              <Box className="w-5 h-5 text-[#e06820]" />
            </div>
            <h2 className="tf-brand-title">TERRAFORM</h2>
          </a>

          {/* Desktop Nav Links */}
          <nav className="tf-nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`tf-nav-item ${activeNav === item.id ? "active" : ""}`}
                onClick={(e) => scrollTo(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="tf-header-actions">
            <a
              href="#tf-dispatch"
              className="tf-cta-btn"
              onClick={(e) => scrollTo(e, "tf-dispatch")}
            >
              Schedule Pour
            </a>

            <button
              type="button"
              className="tf-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Portal Drawer */}
      {menuOpen && typeof document !== "undefined" && createPortal(
        <div className="tf-drawer-root">
          <div
            className="tf-drawer-backdrop"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="tf-drawer-menu" role="dialog" aria-modal="true" aria-label="Concrete Navigation Menu">
            <div className="tf-drawer-header">
              <div className="flex items-center gap-3">
                <div className="tf-brand-cube !w-9 !h-9">
                  <Box className="w-5 h-5 text-[#e06820]" />
                </div>
                <div className="tf-brand-text">
                  <h2 className="!text-white !text-lg">TERRAFORM</h2>
                  <span className="!text-xs">Concrete Studio</span>
                </div>
              </div>
              <button
                type="button"
                className="text-slate-400 hover:text-white p-2 bg-transparent border-0 cursor-pointer"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="tf-drawer-body">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`tf-drawer-link ${activeNav === item.id ? "active" : ""}`}
                  onClick={(e) => scrollTo(e, item.id)}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </div>

            <div className="tf-drawer-footer">
              <a
                href="tel:8005553676"
                className="flex items-center justify-center gap-2 p-3 rounded bg-white/10 text-white font-mono text-xs font-bold hover:bg-white/15"
              >
                <Phone className="w-4 h-4 text-[#e06820]" />
                <span>Ready-Mix Hotline: (800) 555-3676</span>
              </a>
              <a
                href="#tf-dispatch"
                className="tf-btn tf-btn-terracotta w-full"
                onClick={(e) => scrollTo(e, "tf-dispatch")}
              >
                Schedule Concrete Pour
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* 3. Hero Section (Monolithic Architecture) */}
      <section className="tf-hero">
        <img
          src={heroImg}
          alt="Architectural concrete mass foundation pour and laser flatwork by TerraForm Concrete"
          className="tf-hero-bg"
        />
        <div className="tf-hero-overlay"></div>
        <div className="tf-wrap">
          <div className="tf-hero-inner">
            <div className="tf-hero-badge">
              <Layers className="w-3.5 h-3.5" />
              Architectural Cast-in-Place &amp; Structural Foundations
            </div>
            <h1 className="tf-hero-h1">
              Liquid stone crafted with <br />
              <span>monolithic precision.</span>
            </h1>
            <p className="tf-hero-p">
              From mass foundation mat pours and post-tensioned high-rise slabs to glass-smooth polished terrazzo and board-formed architectural feature walls, TerraForm shapes concrete into architectural permanence.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#tf-lab"
                className="tf-btn tf-btn-terracotta tf-btn-lg"
                onClick={(e) => scrollTo(e, "tf-lab")}
              >
                <Gauge className="w-5 h-5" />
                Explore Mix Design Lab
              </a>
              <a
                href="#tf-calculator"
                className="tf-btn tf-btn-titanium tf-btn-lg"
                onClick={(e) => scrollTo(e, "tf-calculator")}
              >
                <Calculator className="w-5 h-5" />
                Yardage &amp; Pump Estimator
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Engineering Specs HUD */}
      <section className="tf-specs-bar">
        <div className="tf-wrap tf-specs-grid">
          <div className="tf-spec-stat">
            <div className="tf-spec-icon">
              <Gauge className="w-6 h-6" />
            </div>
            <div>
              <h3>10,000+</h3>
              <p>PSI Max Compressive Strength</p>
            </div>
          </div>

          <div className="tf-spec-stat">
            <div className="tf-spec-icon">
              <Ruler className="w-6 h-6" />
            </div>
            <div>
              <h3>FF 65 / FL 50</h3>
              <p>Laser Screed Tolerance</p>
            </div>
          </div>

          <div className="tf-spec-stat">
            <div className="tf-spec-icon">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3>3,500+ CY</h3>
              <p>Daily Mass Pour Capacity</p>
            </div>
          </div>

          <div className="tf-spec-stat">
            <div className="tf-spec-icon">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3>PTI Level 2</h3>
              <p>Certified Post-Tensioning</p>
            </div>
          </div>

          <div className="tf-spec-stat">
            <div className="tf-spec-icon">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3>ACI Star</h3>
              <p>Master Finisher Guild</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Concrete Mix Design & PSI Lab */}
      <section id="tf-lab" className="tf-section">
        <div className="tf-wrap">
          <div className="tf-section-head">
            <div className="tf-section-eyebrow">
              <Gauge className="w-4 h-4" />
              Materials Science
            </div>
            <h2 className="tf-section-title">Interactive Concrete Mix Design Lab</h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Select concrete formulations engineered for specific structural demands, workability slumps, and micro-silica curing kinetics.
            </p>
          </div>

          <div className="tf-lab-card">
            <div className="tf-lab-grid">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 font-mono">
                    1. Select Engineered Formulation:
                  </div>
                  <div className="tf-mix-options">
                    {mixDesigns.map((mix) => (
                      <button
                        key={mix.id}
                        type="button"
                        className={`tf-mix-btn ${activeMix.id === mix.id ? "active" : ""}`}
                        onClick={() => setActiveMix(mix)}
                      >
                        <h4>{mix.name}</h4>
                        <span>{mix.category}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <div className="text-xs font-bold text-slate-900 uppercase font-mono mb-1">
                    Application Details &amp; Formulation Notes:
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed m-0">
                    {activeMix.desc}
                  </p>
                </div>
              </div>

              {/* Live Mix Output Panel */}
              <div className="tf-mix-output">
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#e06820] mb-1">
                  ASTM C39 Break Telemetry
                </div>
                <h3 className="tf-font-display text-3xl font-black text-white mb-4">
                  {activeMix.psi28}
                </h3>

                <div className="space-y-1 mb-6">
                  <div className="tf-spec-row">
                    <span className="text-slate-400">7-Day Rapid Early Strength:</span>
                    <strong className="text-[#e06820] font-mono">{activeMix.psi7}</strong>
                  </div>
                  <div className="tf-spec-row">
                    <span className="text-slate-400">Slump / Flow Spread:</span>
                    <strong className="text-white font-mono">{activeMix.slump}</strong>
                  </div>
                  <div className="tf-spec-row">
                    <span className="text-slate-400">Water-Cement Ratio (w/c):</span>
                    <strong className="text-emerald-400 font-mono">{activeMix.wcRatio}</strong>
                  </div>
                  <div className="tf-spec-row">
                    <span className="text-slate-400">Aggregate Matrix:</span>
                    <strong className="text-slate-200 text-right">{activeMix.aggregate}</strong>
                  </div>
                </div>

                <a
                  href="#tf-dispatch"
                  className="tf-btn tf-btn-terracotta w-full !text-xs"
                  onClick={(e) => {
                    scrollTo(e, "tf-dispatch");
                    setPourNotes(`Inquiring on Mix Design: ${activeMix.name} (${activeMix.psi28})`);
                  }}
                >
                  Order Ready-Mix Batch Ticket
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive Architectural Finish & Texture Studio */}
      <section id="tf-finishes" className="tf-section titanium-bg">
        <div className="tf-wrap">
          <div className="tf-section-head">
            <div className="tf-section-eyebrow">
              <Sparkles className="w-4 h-4" />
              Surface Craftsmanship
            </div>
            <h2 className="tf-section-title">Architectural Finish Studio</h2>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              From organic board-formed timber impressions to diamond polished terrazzo sheens, explore our signature tactile concrete finishes.
            </p>
          </div>

          <div className="tf-swatches-grid mb-12">
            {architecturalFinishes.map((finish) => (
              <div
                key={finish.id}
                className={`tf-swatch-card ${activeFinish.id === finish.id ? "active" : ""}`}
                onClick={() => setActiveFinish(finish)}
              >
                <img src={finish.image} alt={finish.title} className="tf-swatch-img" />
                <div className="tf-swatch-body">
                  <h4>{finish.title}</h4>
                  <p>{finish.sheen}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Active Finish Highlight Card */}
          <div className="p-8 rounded-xl bg-slate-900 border border-white/10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 h-64 rounded-lg overflow-hidden relative">
              <img
                src={activeFinish.image}
                alt={activeFinish.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/80 px-2.5 py-1 rounded text-xs font-mono text-[#e06820] font-bold">
                {activeFinish.sheen}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="text-xs font-mono text-[#e06820] font-bold uppercase mb-1">
                Selected Finish Specification
              </div>
              <h3 className="tf-font-display text-3xl font-black text-white mb-3">
                {activeFinish.title}
              </h3>
              <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                {activeFinish.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                <div className="p-3 rounded bg-black/40 border border-white/10">
                  <span className="text-slate-400 block mb-0.5">Slip Coefficient (SCOF):</span>
                  <strong className="text-emerald-400">{activeFinish.scof}</strong>
                </div>
                <div className="p-3 rounded bg-black/40 border border-white/10">
                  <span className="text-slate-400 block mb-0.5">Ideal Applications:</span>
                  <strong className="text-white">{activeFinish.application}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Interactive Concrete Yardage & Pump Truck Calculator */}
      <section id="tf-calculator" className="tf-section card-bg">
        <div className="tf-wrap">
          <div className="tf-section-head">
            <div className="tf-section-eyebrow">
              <Calculator className="w-4 h-4" />
              Volume Engineering
            </div>
            <h2 className="tf-section-title">Concrete Yardage &amp; Pump Estimator</h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Calculate exact cubic yardage, required ready-mix trucks, structural rebar reinforcement tonnage, and boom pump sizes.
            </p>
          </div>

          <div className="tf-calc-card">
            <div className="tf-calc-grid">
              <div className="space-y-6">
                {/* Sliders */}
                <div>
                  <div className="flex justify-between text-xs font-bold font-mono text-slate-700 mb-2">
                    <span>Slab Length:</span>
                    <span className="text-[#c85a17]">{calcLength} Feet</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="250"
                    step="5"
                    value={calcLength}
                    onChange={(e) => setCalcLength(Number(e.target.value))}
                    className="w-full accent-[#c85a17]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold font-mono text-slate-700 mb-2">
                    <span>Slab Width:</span>
                    <span className="text-[#c85a17]">{calcWidth} Feet</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="150"
                    step="5"
                    value={calcWidth}
                    onChange={(e) => setCalcWidth(Number(e.target.value))}
                    className="w-full accent-[#c85a17]"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold font-mono text-slate-700 mb-2">
                    <span>Slab Thickness:</span>
                    <span className="text-[#c85a17]">{calcThickness} Inches</span>
                  </div>
                  <div className="grid grid-cols-4 gap-2">
                    {[4, 6, 8, 12].map((th) => (
                      <button
                        key={th}
                        type="button"
                        className={`p-2.5 rounded border text-xs font-mono font-bold transition-all ${
                          calcThickness === th
                            ? "bg-[#161a22] text-white border-[#161a22]"
                            : "bg-slate-50 text-slate-700 border-slate-300 hover:bg-slate-100"
                        }`}
                        onClick={() => setCalcThickness(th)}
                      >
                        {th}" Depth
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded bg-slate-50 border border-slate-200">
                  <input
                    type="checkbox"
                    id="includePump"
                    checked={calcIncludePump}
                    onChange={(e) => setCalcIncludePump(e.target.checked)}
                    className="w-4 h-4 accent-[#c85a17] cursor-pointer"
                  />
                  <label htmlFor="includePump" className="text-xs font-semibold text-slate-800 cursor-pointer">
                    Include Boom Pump Truck Dispatch &amp; Line Prime
                  </label>
                </div>
              </div>

              {/* Calculation Summary Box */}
              <div className="p-8 rounded-xl bg-[#161a22] text-white text-center border border-white/10 relative">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#e06820] mb-2">
                  Total Order Volume (10% Waste Incl.)
                </div>
                <div className="tf-font-display text-4xl font-black text-white mb-1">
                  {yardageData.finalYards} CY
                </div>
                <p className="text-xs text-slate-400 mb-6 font-mono">
                  {yardageData.sqFt} SQ FT Surface Area
                </p>

                <div className="space-y-2 text-xs font-mono text-left bg-black/40 p-4 rounded-lg border border-white/10 mb-6">
                  <div className="flex justify-between text-slate-300">
                    <span>Ready-Mix Trucks (10 CY ea):</span>
                    <strong className="text-white">{yardageData.trucks} Trucks</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Estimated Rebar Cage Weight:</span>
                    <strong className="text-[#e06820]">{yardageData.rebarWeight} Lbs</strong>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Recommended Pump Equipment:</span>
                    <strong className="text-emerald-400">{yardageData.pumpBoom}</strong>
                  </div>
                </div>

                <a
                  href="#tf-dispatch"
                  className="tf-btn tf-btn-terracotta w-full !text-xs"
                  onClick={(e) => {
                    scrollTo(e, "tf-dispatch");
                    setPourNotes(
                      `Calculated Order: ${yardageData.finalYards} CY (${yardageData.sqFt} SF @ ${calcThickness}" depth) | ${yardageData.trucks} Trucks | Rebar: ${yardageData.rebarWeight} lbs`
                    );
                  }}
                >
                  Confirm Pour Schedule with Dispatch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Core Capabilities Grid */}
      <section id="tf-capabilities" className="tf-section">
        <div className="tf-wrap">
          <div className="tf-section-head">
            <div className="tf-section-eyebrow">
              <Building2 className="w-4 h-4" />
              Specialized Divisions
            </div>
            <h2 className="tf-section-title">Concrete Capabilities &amp; Divisions</h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Self-performing commercial foundation pours, post-tensioned multi-family slabs, and luxury architectural cast-in-place concrete.
            </p>
          </div>

          <div className="tf-services-grid">
            {coreServices.map((srv, idx) => (
              <div key={idx} className="tf-service-card">
                <div className="tf-service-img-frame">
                  <img src={srv.image} alt={srv.title} />
                  <div className="absolute top-3 left-3 bg-slate-900/85 text-[#e06820] px-2.5 py-1 rounded text-xs font-mono font-bold">
                    {srv.badge}
                  </div>
                </div>
                <div className="tf-service-body">
                  <h3>{srv.title}</h3>
                  <p>{srv.desc}</p>
                  <ul className="space-y-1.5 mb-6 text-xs text-slate-600">
                    {srv.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#c85a17] shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#tf-dispatch"
                    className="mt-auto text-xs font-bold uppercase tracking-wider text-[#c85a17] hover:text-[#e06820] flex items-center gap-1.5 font-mono"
                    onClick={(e) => {
                      scrollTo(e, "tf-dispatch");
                      setPourNotes(`Inquiry for Division: ${srv.title}`);
                    }}
                  >
                    <span>Request Subcontractor Bid</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Architectural & Commercial Portfolio */}
      <section id="tf-portfolio" className="tf-section titanium-bg">
        <div className="tf-wrap">
          <div className="tf-section-head">
            <div className="tf-section-eyebrow">
              <Building className="w-4 h-4" />
              Structural Archive
            </div>
            <h2 className="tf-section-title">Architectural Project Showcase</h2>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              Engineered with zero cold-joint defects, laser flatness precision, and architectural permanence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {concretePortfolio.map((proj, idx) => (
              <div key={idx} className="rounded-xl overflow-hidden bg-slate-900/80 border border-white/10 hover:border-[#e06820] transition-all group">
                <div className="h-64 relative overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-[#c85a17] text-white font-bold text-xs px-3 py-1 font-mono uppercase rounded">
                    {proj.category}
                  </div>
                  <div className="absolute bottom-4 right-4 bg-black/80 text-white text-xs font-mono px-3 py-1 rounded">
                    {proj.location}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs text-[#e06820] font-mono font-bold mb-1">
                    {proj.metric}
                  </div>
                  <h3 className="tf-font-display text-2xl font-black text-white mb-2">
                    {proj.name}
                  </h3>
                  <p className="text-xs text-slate-300 mb-4 font-mono bg-black/40 p-3 rounded border border-white/10">
                    {proj.specs}
                  </p>
                  <a
                    href="#tf-dispatch"
                    className="text-xs font-mono font-bold text-[#e06820] hover:underline"
                    onClick={(e) => scrollTo(e, "tf-dispatch")}
                  >
                    View Engineering Specs →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. ACI & PTI Standards Matrix */}
      <section id="tf-standards" className="tf-section">
        <div className="tf-wrap">
          <div className="tf-section-head">
            <div className="tf-section-eyebrow">
              <ShieldCheck className="w-4 h-4" />
              Quality Assurance
            </div>
            <h2 className="tf-section-title">ACI Standards &amp; QA Protocols</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "ACI 301 / 318", subtitle: "Structural Spec Standard" },
              { title: "PTI Level 2", subtitle: "Post-Tensioning Institute" },
              { title: "ASTM C39 / C143", subtitle: "Cylinder Break & Slump" },
              { title: "ASTM E1155", subtitle: "FF / FL Laser Flatness" },
              { title: "ICRI Certified", subtitle: "Surface Prep & Repair" },
              { title: "OSHA 30", subtitle: "Zero Incident Safety" },
            ].map((std, idx) => (
              <div key={idx} className="p-5 rounded-lg bg-white border border-slate-200 text-center font-mono hover:border-[#c85a17] transition-colors shadow-sm">
                <Shield className="w-7 h-7 text-[#c85a17] mx-auto mb-2" />
                <div className="font-bold text-slate-900 text-sm mb-1">{std.title}</div>
                <div className="text-[11px] text-slate-500">{std.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Ready-Mix Schedule & Dispatch Portal */}
      <section id="tf-dispatch" className="tf-section card-bg">
        <div className="tf-wrap">
          <div className="p-8 sm:p-12 rounded-xl bg-white border border-slate-200 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="tf-section-eyebrow">
                  <Truck className="w-4 h-4" />
                  Dispatch Operations
                </div>
                <h2 className="tf-font-display text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
                  Schedule Concrete Pour <br />
                  <span className="text-[#c85a17]">&amp; Pump Dispatch</span>
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Book ready-mix truck batches, structural boom pump placement, and ACI laser screed finishing crews with 24-hour dispatch confirmation.
                </p>

                <div className="space-y-3 font-mono text-xs text-slate-700 mb-8 font-medium">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c85a17] shrink-0" />
                    <span>Continuous batch plant supply coordination</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c85a17] shrink-0" />
                    <span>Dedicated 32m – 56m boom pump truck reservation</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#c85a17] shrink-0" />
                    <span>Third-party ASTM cylinder break testing available</span>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 font-mono text-xs">
                  <div className="text-slate-500">Concrete Dispatch Direct:</div>
                  <div className="text-base font-bold text-slate-900 mt-0.5">(800) 555-FORM</div>
                  <div className="text-[11px] text-slate-500 mt-1">dispatch@terraformconcrete.com</div>
                </div>
              </div>

              {/* Dispatch Form */}
              <div className="lg:col-span-7">
                {pourSubmitted ? (
                  <div className="p-8 rounded-xl bg-emerald-50 border border-emerald-300 text-center font-mono">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Pour Request Confirmed!</h3>
                    <p className="text-slate-600 text-xs mb-6">
                      Thank you, <strong>{pourContact || "Contractor"}</strong> ({pourProject || "Project"}). Our concrete batch coordinator is reviewing your placement date for <strong>{pourDate || "Upcoming Pour"}</strong> and will confirm pump truck staging within <strong>2 hours</strong>.
                    </p>
                    <button
                      type="button"
                      className="tf-btn tf-btn-terracotta !text-xs"
                      onClick={() => setPourSubmitted(false)}
                    >
                      Schedule Another Placement
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handlePourSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono">
                          Project Name / General Contractor *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Skyline Logistics Mat Pour"
                          value={pourProject}
                          onChange={(e) => setPourProject(e.target.value)}
                          className="tf-input"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono">
                          Target Pour Date *
                        </label>
                        <input
                          type="date"
                          required
                          value={pourDate}
                          onChange={(e) => setPourDate(e.target.value)}
                          className="tf-input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono">
                          Contact Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Marcus Stone, PM"
                          value={pourContact}
                          onChange={(e) => setPourContact(e.target.value)}
                          className="tf-input"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. mstone@builder.com"
                          value={pourEmail}
                          onChange={(e) => setPourEmail(e.target.value)}
                          className="tf-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono">
                        Mix Design &amp; Placement Specifications
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Specify estimated yardage, PSI requirement, boom pump access, or finish type..."
                        value={pourNotes}
                        onChange={(e) => setPourNotes(e.target.value)}
                        className="tf-input"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono">
                        Upload Structural Drawings / Formwork Plans (Optional)
                      </label>
                      <div className="border border-dashed border-slate-300 rounded p-6 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                        <UploadCloud className="w-8 h-8 text-[#c85a17] mx-auto mb-2" />
                        <p className="text-xs text-slate-700 font-mono font-bold">
                          Drag &amp; drop foundation plans, rebar schedules, or structural drawings
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1 font-mono">Accepts PDF, DWG, ZIP up to 100MB</p>
                        <input type="file" className="hidden" />
                      </div>
                    </div>

                    <button type="submit" className="tf-btn tf-btn-terracotta tf-btn-lg w-full mt-2">
                      Transmit Pour Reservation to Dispatch
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Concrete Engineering FAQs */}
      <section id="tf-faq" className="tf-section">
        <div className="tf-wrap">
          <div className="tf-section-head">
            <div className="tf-section-eyebrow">
              <HelpCircle className="w-4 h-4" />
              Technical FAQs
            </div>
            <h2 className="tf-section-title">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqsList.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`p-6 rounded-lg bg-white border border-slate-200 mb-3 transition-all ${isOpen ? "border-[#c85a17] shadow-md" : ""}`}>
                  <button
                    type="button"
                    className="w-full flex justify-between items-center bg-transparent border-0 text-left font-bold text-slate-900 text-base cursor-pointer gap-4 tf-font-display"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#c85a17] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="pt-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 mt-4 font-mono">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. Footer */}
      <footer className="tf-footer">
        <div className="tf-wrap">
          <div className="tf-footer-grid">
            <div className="tf-footer-col">
              <div className="tf-brand-block mb-4">
                <div className="tf-brand-cube">
                  <Box className="w-5 h-5 text-[#e06820]" />
                </div>
                <div className="tf-brand-text">
                  <h2 className="!text-white">TERRAFORM</h2>
                  <span>ARCHITECTURAL CONCRETE</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4 font-mono">
                Premier architectural cast-in-place concrete, post-tensioned slabs, laser screed industrial flatwork, and structural mass foundation contractor.
              </p>
              <div className="text-xs text-[#e06820] font-mono font-bold">
                ACI Certified Master Guild • Bonded &amp; Insured up to $50M
              </div>
            </div>

            <div className="tf-footer-col">
              <h4>Concrete Divisions</h4>
              <ul className="tf-footer-links font-mono">
                <li><a href="#tf-capabilities" onClick={(e) => scrollTo(e, "tf-capabilities")}>Structural Mass Foundations</a></li>
                <li><a href="#tf-capabilities" onClick={(e) => scrollTo(e, "tf-capabilities")}>Board-Formed Walls</a></li>
                <li><a href="#tf-capabilities" onClick={(e) => scrollTo(e, "tf-capabilities")}>Post-Tensioned Slabs</a></li>
                <li><a href="#tf-capabilities" onClick={(e) => scrollTo(e, "tf-capabilities")}>Diamond Polished Terrazzo</a></li>
                <li><a href="#tf-capabilities" onClick={(e) => scrollTo(e, "tf-capabilities")}>Stamped Slate Patios</a></li>
              </ul>
            </div>

            <div className="tf-footer-col">
              <h4>Technical Systems</h4>
              <ul className="tf-footer-links font-mono">
                <li><a href="#tf-lab" onClick={(e) => scrollTo(e, "tf-lab")}>Concrete Mix Design Lab</a></li>
                <li><a href="#tf-finishes" onClick={(e) => scrollTo(e, "tf-finishes")}>Surface Finish Studio</a></li>
                <li><a href="#tf-calculator" onClick={(e) => scrollTo(e, "tf-calculator")}>Yardage &amp; Pump Estimator</a></li>
                <li><a href="#tf-standards" onClick={(e) => scrollTo(e, "tf-standards")}>ACI Standards Matrix</a></li>
                <li><a href="#tf-dispatch" onClick={(e) => scrollTo(e, "tf-dispatch")}>Ready-Mix Dispatch</a></li>
              </ul>
            </div>

            <div className="tf-footer-col">
              <h4>Batch Plants &amp; Dispatch</h4>
              <div className="space-y-2 text-xs text-slate-400 font-mono">
                <p>📍 8200 Industrial Aggregate Parkway<br />Concrete Batching &amp; Pump Staging</p>
                <p>📞 Dispatch Desk: <strong className="text-white">(800) 555-FORM</strong></p>
                <p>✉️ dispatch@terraformconcrete.com</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex justify-between items-center flex-wrap gap-4 text-xs font-mono text-slate-500">
            <div>© {new Date().getFullYear()} TerraForm Concrete Contractors Inc. All Rights Reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400">ACI Safety Charter</a>
              <a href="#" className="hover:text-slate-400">Quality Control Manual</a>
              <a href="#" className="hover:text-slate-400">Surety Bond Certificate</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default TerraFormConcrete;
