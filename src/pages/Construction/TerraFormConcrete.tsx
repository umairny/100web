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
      if (window.scrollY < 200) {
        setActiveNav("");
        return;
      }
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
      <style>{css}</style>
      {/* Top Announcement Strip */}
      <div className="tf-topstrip">
        <div className="tf-wrap tf-topstrip-inner">
          <div className="tf-topstrip-left">
            <span className="tf-topstrip-badge">
              <span className="tf-topstrip-dot" />
              Accepting Commercial Pours
            </span>
            <span>ACI Certified Master Guild &bull; PTI Level 2 Post-Tensioning</span>
          </div>
          <div className="tf-topstrip-right">
            <a href="tel:8005553676" className="tf-topstrip-link">
              <Phone className="w-3 h-3" />
              (800) 555-FORM
            </a>
            <a href="mailto:dispatch@terraformconcrete.com" className="tf-topstrip-link">
              <Mail className="w-3 h-3" />
              dispatch@terraformconcrete.com
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <header className={`tf-header${scrolled ? " scrolled" : ""}`}>
        <div className="tf-wrap tf-header-inner">
          <a href="#tf-top" className="tf-brand-link" onClick={(e) => scrollTo(e, "tf-top")}>
            <div className="tf-brand-box">
              <Box className="w-5 h-5" style={{ color: "var(--tf-terracotta-bright)" }} />
            </div>
            <div className="tf-brand-wordmark">
              <h2 className="tf-brand-title">TERRAFORM</h2>
              <span className="tf-brand-sub">Architectural Concrete</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="tf-nav-links" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`tf-nav-item${activeNav === item.id ? " active" : ""}`}
                onClick={(e) => scrollTo(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="tf-header-actions">
            <a href="tel:8005553676" className="tf-phone-pill">
              <Phone className="w-3.5 h-3.5" />
              (800) 555-FORM
            </a>
            <a
              href="#tf-dispatch"
              className="tf-cta-btn"
              onClick={(e) => scrollTo(e, "tf-dispatch")}
            >
              Schedule Pour
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              className="tf-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
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
            <div className="tf-hero-ctas">
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
          <div className="tf-finish-highlight">
            <div className="tf-finish-highlight-img">
              <img
                src={activeFinish.image}
                alt={activeFinish.title}
              />
              <div className="tf-finish-sheen-tag">
                {activeFinish.sheen}
              </div>
            </div>

            <div>
              <div className="text-xs font-mono text-[#e06820] font-bold uppercase mb-1" style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"0.75rem",fontWeight:700,color:"var(--tf-terracotta-bright)",textTransform:"uppercase",letterSpacing:"0.08em",marginBottom:"6px"}}>
                Selected Finish Specification
              </div>
              <h3 className="tf-font-display" style={{fontSize:"clamp(1.6rem,3vw,2.2rem)",fontWeight:900,color:"#ffffff",marginBottom:"12px"}}>
                {activeFinish.title}
              </h3>
              <p style={{color:"#94a3b8",fontSize:"0.9375rem",marginBottom:"24px",lineHeight:1.7}}>
                {activeFinish.desc}
              </p>

              <div className="tf-finish-spec-cols">
                <div className="tf-finish-spec-cell">
                  <span style={{color:"#64748b",display:"block",marginBottom:"4px",fontSize:"0.6875rem"}}>Slip Coefficient (SCOF):</span>
                  <strong style={{color:"#34d399"}}>{activeFinish.scof}</strong>
                </div>
                <div className="tf-finish-spec-cell">
                  <span style={{color:"#64748b",display:"block",marginBottom:"4px",fontSize:"0.6875rem"}}>Ideal Applications:</span>
                  <strong style={{color:"#ffffff"}}>{activeFinish.application}</strong>
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

                <div className="tf-pump-toggle">
                  <input
                    type="checkbox"
                    id="includePump"
                    checked={calcIncludePump}
                    onChange={(e) => setCalcIncludePump(e.target.checked)}
                    style={{width:"16px",height:"16px",accentColor:"var(--tf-terracotta)",cursor:"pointer",flexShrink:0}}
                  />
                  <label htmlFor="includePump" className="tf-pump-toggle">
                    Include Boom Pump Truck Dispatch &amp; Line Prime
                  </label>
                </div>
              </div>

              {/* Calculation Summary Box */}
              <div className="tf-calc-result">
                <div style={{fontFamily:"'JetBrains Mono',monospace",fontSize:"0.6875rem",fontWeight:700,textTransform:"uppercase",letterSpacing:"0.1em",color:"var(--tf-terracotta-bright)",marginBottom:"8px"}}>
                  Total Order Volume (10% Waste Incl.)
                </div>
                <div className="tf-font-display" style={{fontSize:"clamp(2.5rem,5vw,3.5rem)",fontWeight:900,color:"#ffffff",marginBottom:"4px"}}>
                  {yardageData.finalYards} CY
                </div>
                <p style={{fontSize:"0.75rem",color:"#64748b",marginBottom:"24px",fontFamily:"'JetBrains Mono',monospace"}}>
                  {yardageData.sqFt} SQ FT Surface Area
                </p>

                <div className="tf-calc-result-details">
                  <div className="tf-calc-result-row">
                    <span>Ready-Mix Trucks (10 CY ea):</span>
                    <strong style={{color:"#ffffff"}}>{yardageData.trucks} Trucks</strong>
                  </div>
                  <div className="tf-calc-result-row">
                    <span>Estimated Rebar Cage Weight:</span>
                    <strong style={{color:"var(--tf-terracotta-bright)"}}>{yardageData.rebarWeight} Lbs</strong>
                  </div>
                  <div className="tf-calc-result-row">
                    <span>Recommended Pump Equipment:</span>
                    <strong style={{color:"#34d399"}}>{yardageData.pumpBoom}</strong>
                  </div>
                </div>

                <a
                  href="#tf-dispatch"
                  className="tf-btn tf-btn-terracotta"
                  style={{width:"100%",fontSize:"0.75rem"}}
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

          <div className="tf-portfolio-grid">
            {concretePortfolio.map((proj, idx) => (
              <div key={idx} className="tf-portfolio-card">
                <div className="tf-portfolio-card-img">
                  <img
                    src={proj.image}
                    alt={proj.name}
                  />
                  <div className="tf-portfolio-badge">{proj.category}</div>
                  <div className="tf-portfolio-location">{proj.location}</div>
                </div>

                <div className="tf-portfolio-card-body">
                  <div className="tf-portfolio-metric">{proj.metric}</div>
                  <h3 className="tf-portfolio-name">{proj.name}</h3>
                  <p className="tf-portfolio-specs">{proj.specs}</p>
                  <a
                    href="#tf-dispatch"
                    className="tf-btn tf-btn-sm tf-btn-outline"
                    onClick={(e) => scrollTo(e, "tf-dispatch")}
                  >
                    View Engineering Specs
                    <ArrowRight className="w-4 h-4" />
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

          <div className="tf-standards-grid">
            {[
              { title: "ACI 301 / 318", subtitle: "Structural Spec Standard" },
              { title: "PTI Level 2", subtitle: "Post-Tensioning Institute" },
              { title: "ASTM C39 / C143", subtitle: "Cylinder Break & Slump" },
              { title: "ASTM E1155", subtitle: "FF / FL Laser Flatness" },
              { title: "ICRI Certified", subtitle: "Surface Prep & Repair" },
              { title: "OSHA 30", subtitle: "Zero Incident Safety" },
            ].map((std, idx) => (
              <div key={idx} className="tf-standard-card">
                <Shield className="w-7 h-7 mx-auto" style={{color:"var(--tf-terracotta)"}} />
                <div className="tf-standard-title">{std.title}</div>
                <div className="tf-standard-sub">{std.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Ready-Mix Schedule & Dispatch Portal */}
      <section id="tf-dispatch" className="tf-section card-bg">
        <div className="tf-wrap">
          <div className="tf-dispatch-card">
            <div className="tf-dispatch-grid">
              <div>
                <div className="tf-section-eyebrow">
                  <Truck className="w-4 h-4" />
                  Dispatch Operations
                </div>
                <h2 className="tf-font-display" style={{fontSize:"clamp(1.8rem,3.5vw,2.8rem)",fontWeight:900,color:"var(--tf-titanium)",marginBottom:"16px",lineHeight:1.1}}>
                  Schedule Concrete Pour<br />
                  <span style={{color:"var(--tf-terracotta)"}}>&amp; Pump Dispatch</span>
                </h2>
                <p style={{color:"var(--tf-text-muted)",fontSize:"0.9375rem",lineHeight:1.7,marginBottom:"24px"}}>
                  Book ready-mix truck batches, structural boom pump placement, and ACI laser screed finishing crews with 24-hour dispatch confirmation.
                </p>

                <div style={{display:"flex",flexDirection:"column",gap:"10px",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.75rem",color:"var(--tf-text-muted)",marginBottom:"28px"}}>
                  <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                    <CheckCircle2 className="w-4 h-4" style={{color:"var(--tf-terracotta)",flexShrink:0}} />
                    <span>Continuous batch plant supply coordination</span>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                    <CheckCircle2 className="w-4 h-4" style={{color:"var(--tf-terracotta)",flexShrink:0}} />
                    <span>Dedicated 32m – 56m boom pump truck reservation</span>
                  </div>
                  <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                    <CheckCircle2 className="w-4 h-4" style={{color:"var(--tf-terracotta)",flexShrink:0}} />
                    <span>Third-party ASTM cylinder break testing available</span>
                  </div>
                </div>

                <div style={{padding:"16px",borderRadius:"8px",background:"var(--tf-concrete-surface)",border:"1px solid var(--tf-concrete-border)",fontFamily:"'JetBrains Mono',monospace",fontSize:"0.75rem"}}>
                  <div style={{color:"var(--tf-text-muted)"}}>Concrete Dispatch Direct:</div>
                  <div style={{fontSize:"1.1rem",fontWeight:700,color:"var(--tf-titanium)",marginTop:"4px"}}>(800) 555-FORM</div>
                  <div style={{fontSize:"0.6875rem",color:"var(--tf-text-muted)",marginTop:"4px"}}>dispatch@terraformconcrete.com</div>
                </div>
              </div>

              {/* Dispatch Form */}
              <div>
                {pourSubmitted ? (
                  <div style={{padding:"32px",borderRadius:"12px",background:"#ecfdf5",border:"1px solid #6ee7b7",textAlign:"center",fontFamily:"'JetBrains Mono',monospace"}}>
                    <div style={{width:"56px",height:"56px",background:"#d1fae5",color:"#065f46",borderRadius:"50%",display:"flex",alignItems:"center",justifyContent:"center",margin:"0 auto 12px"}}>
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 style={{fontSize:"1.25rem",fontWeight:700,color:"var(--tf-titanium)",marginBottom:"8px"}}>Pour Request Confirmed!</h3>
                    <p style={{color:"var(--tf-text-muted)",fontSize:"0.8125rem",marginBottom:"20px"}}>
                      Thank you, <strong>{pourContact || "Contractor"}</strong> ({pourProject || "Project"}). Our concrete batch coordinator is reviewing your placement date for <strong>{pourDate || "Upcoming Pour"}</strong> and will confirm pump truck staging within <strong>2 hours</strong>.
                    </p>
                    <button
                      type="button"
                      className="tf-btn tf-btn-terracotta tf-btn-sm"
                      onClick={() => setPourSubmitted(false)}
                    >
                      Schedule Another Placement
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handlePourSubmit} style={{display:"flex",flexDirection:"column",gap:"16px"}}>
                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}}>
                      <div>
                        <label style={{fontSize:"0.6875rem",fontWeight:700,textTransform:"uppercase",color:"var(--tf-text-muted)",display:"block",marginBottom:"6px",fontFamily:"'JetBrains Mono',monospace",letterSpacing:"0.06em"}}>
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
                        <label style={{fontSize:"0.6875rem",fontWeight:700,textTransform:"uppercase",color:"var(--tf-text-muted)",display:"block",marginBottom:"6px",fontFamily:"'JetBrains Mono',monospace",letterSpacing:"0.06em"}}>
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

                    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"16px"}}>
                      <div>
                        <label style={{fontSize:"0.6875rem",fontWeight:700,textTransform:"uppercase",color:"var(--tf-text-muted)",display:"block",marginBottom:"6px",fontFamily:"'JetBrains Mono',monospace",letterSpacing:"0.06em"}}>
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
                        <label style={{fontSize:"0.6875rem",fontWeight:700,textTransform:"uppercase",color:"var(--tf-text-muted)",display:"block",marginBottom:"6px",fontFamily:"'JetBrains Mono',monospace",letterSpacing:"0.06em"}}>
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
                      <label style={{fontSize:"0.6875rem",fontWeight:700,textTransform:"uppercase",color:"var(--tf-text-muted)",display:"block",marginBottom:"6px",fontFamily:"'JetBrains Mono',monospace",letterSpacing:"0.06em"}}>
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
                      <label style={{fontSize:"0.6875rem",fontWeight:700,textTransform:"uppercase",color:"var(--tf-text-muted)",display:"block",marginBottom:"6px",fontFamily:"'JetBrains Mono',monospace",letterSpacing:"0.06em"}}>
                        Upload Structural Drawings / Formwork Plans (Optional)
                      </label>
                      <div style={{border:"1.5px dashed var(--tf-concrete-border)",borderRadius:"8px",padding:"24px",textAlign:"center",background:"var(--tf-concrete-surface)",cursor:"pointer"}}>
                        <UploadCloud className="w-8 h-8 mx-auto mb-2" style={{color:"var(--tf-terracotta)"}} />
                        <p style={{fontSize:"0.75rem",color:"var(--tf-text-dark)",fontFamily:"'JetBrains Mono',monospace",fontWeight:700,margin:"0 0 4px"}}>
                          Drag &amp; drop foundation plans, rebar schedules, or structural drawings
                        </p>
                        <p style={{fontSize:"0.6875rem",color:"var(--tf-text-muted)",fontFamily:"'JetBrains Mono',monospace",margin:0}}>Accepts PDF, DWG, ZIP up to 100MB</p>
                        <input type="file" style={{display:"none"}} />
                      </div>
                    </div>

                    <button type="submit" className="tf-btn tf-btn-terracotta tf-btn-lg" style={{width:"100%",marginTop:"8px"}}>
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

const css = `
/* TerraForm Concrete - Architectural Monolithic Concrete Design System */

@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:ital,wght@0,600;0,700;0,800;0,900;1,700&family=Space+Grotesk:wght@400;500;600;700&family=JetBrains+Mono:wght@500;700&display=swap');

.tf-site {
  --tf-raw-concrete: #e8ecf1;
  --tf-concrete-surface: #f4f6f9;
  --tf-concrete-card: #ffffff;
  --tf-concrete-border: rgba(30, 41, 59, 0.12);
  
  --tf-titanium: #161a22;
  --tf-titanium-panel: #1f2530;
  --tf-titanium-card: #28303f;
  --tf-titanium-border: rgba(255, 255, 255, 0.1);
  
  --tf-terracotta: #c85a17;
  --tf-terracotta-bright: #e06820;
  --tf-terracotta-glow: rgba(200, 90, 23, 0.35);
  
  --tf-steel-cyan: #0284c7;
  
  --tf-text-dark: #0f172a;
  --tf-text-muted: #526071;
  --tf-text-light: #f8fafc;
  --tf-text-light-muted: #94a3b8;

  background-color: var(--tf-concrete-surface);
  color: var(--tf-text-dark);
  font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  overflow-x: clip;
}

.tf-site * {
  box-sizing: border-box;
}

.tf-site a {
  text-decoration: none;
  color: inherit;
}

.tf-font-display {
  font-family: 'Barlow Condensed', sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.01em;
}

.tf-font-mono {
  font-family: 'JetBrains Mono', monospace;
}

.tf-wrap {
  width: min(1380px, calc(100% - 64px));
  margin-inline: auto;
}

@media (max-width: 640px) {
  .tf-wrap {
    width: calc(100% - 32px);
  }
}

/* ==========================================================================
   NAVBAR — Premium Architectural Concrete Design
   ========================================================================== */

/* Announcement strip */
.tf-topstrip {
  background: var(--tf-titanium);
  border-bottom: 1px solid rgba(200, 90, 23, 0.35);
  padding: 7px 0;
  font-size: 0.75rem;
  color: var(--tf-text-light-muted);
  font-family: 'JetBrains Mono', monospace;
  font-weight: 600;
  letter-spacing: 0.04em;
}

.tf-topstrip-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}

.tf-topstrip-left {
  display: flex;
  align-items: center;
  gap: 20px;
}

.tf-topstrip-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(200, 90, 23, 0.16);
  border: 1px solid rgba(200, 90, 23, 0.4);
  color: var(--tf-terracotta-bright);
  padding: 2px 10px;
  border-radius: 4px;
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.tf-topstrip-dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: var(--tf-terracotta-bright);
  box-shadow: 0 0 8px var(--tf-terracotta-bright);
  animation: tfTopDot 2s ease-in-out infinite;
  display: inline-block;
}

@keyframes tfTopDot {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.tf-topstrip-link {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  color: #fbbf24;
  font-weight: 700;
  text-decoration: none;
  transition: color 0.15s ease;
}

.tf-topstrip-link:hover {
  color: #fde68a;
}

.tf-topstrip-right {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* Main header */
.tf-header {
  position: sticky;
  top: 0;
  z-index: 100;
  width: 100%;
  background: rgba(244, 246, 249, 0.97);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--tf-concrete-border);
  transition: background 0.3s ease, box-shadow 0.3s ease;
}

.tf-header.scrolled {
  background: rgba(248, 250, 252, 0.99);
  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.1), 0 1px 0 rgba(200, 90, 23, 0.12);
}

.tf-header-inner {
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

/* Brand */
.tf-brand-link {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  flex-shrink: 0;
}

.tf-brand-box {
  width: 40px;
  height: 40px;
  background: linear-gradient(135deg, var(--tf-titanium) 0%, #28303f 100%);
  color: #ffffff;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.5px solid rgba(200, 90, 23, 0.5);
  box-shadow: 0 4px 14px rgba(200, 90, 23, 0.25), inset 0 1px 0 rgba(255,255,255,0.08);
  flex-shrink: 0;
  transition: box-shadow 0.2s ease;
}

.tf-brand-link:hover .tf-brand-box {
  box-shadow: 0 6px 20px rgba(200, 90, 23, 0.4);
}

.tf-brand-wordmark {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.tf-brand-title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.35rem;
  font-weight: 900;
  color: var(--tf-titanium);
  margin: 0;
  line-height: 1;
  letter-spacing: 0.06em;
  text-transform: uppercase;
}

.tf-brand-sub {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.5625rem;
  font-weight: 700;
  color: var(--tf-terracotta);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  line-height: 1;
}

/* Desktop nav links */
.tf-nav-links {
  display: flex;
  align-items: center;
  gap: 4px;
}

.tf-nav-item {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--tf-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.07em;
  text-decoration: none;
  padding: 6px 10px;
  border-radius: 6px;
  position: relative;
  transition: color 0.15s ease, background 0.15s ease;
}

.tf-nav-item:hover {
  color: var(--tf-titanium);
  background: rgba(22, 26, 34, 0.06);
}

.tf-nav-item.active {
  color: var(--tf-terracotta);
}

.tf-nav-item.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 10px;
  right: 10px;
  height: 2px;
  background: linear-gradient(90deg, var(--tf-terracotta), var(--tf-terracotta-bright));
  border-radius: 2px 2px 0 0;
}

/* Header actions area */
.tf-header-actions {
  display: flex;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
}

/* Phone pill */
.tf-phone-pill {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--tf-titanium);
  background: rgba(22, 26, 34, 0.06);
  border: 1px solid var(--tf-concrete-border);
  border-radius: 9999px;
  padding: 6px 14px;
  text-decoration: none;
  white-space: nowrap;
  transition: all 0.18s ease;
}

.tf-phone-pill:hover {
  background: var(--tf-titanium);
  color: #ffffff;
  border-color: var(--tf-titanium);
}

/* CTA button */
.tf-cta-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 800;
  border-radius: 8px;
  font-size: 0.9375rem;
  height: 38px;
  padding: 0 18px;
  background: linear-gradient(135deg, var(--tf-terracotta) 0%, var(--tf-terracotta-bright) 100%);
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
  box-shadow: 0 3px 12px rgba(200, 90, 23, 0.35);
  transition: all 0.18s ease;
}

.tf-cta-btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(200, 90, 23, 0.5);
}

/* Hamburger */
.tf-menu-toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid var(--tf-concrete-border);
  background: #ffffff;
  color: var(--tf-titanium);
  cursor: pointer;
  transition: all 0.18s ease;
  box-shadow: 0 1px 4px rgba(15, 23, 42, 0.06);
}

.tf-menu-toggle:hover {
  background: var(--tf-titanium);
  color: #ffffff;
  border-color: var(--tf-titanium);
  box-shadow: 0 4px 12px rgba(15, 23, 42, 0.15);
}

/* Visibility Rules */
@media (min-width: 921px) {
  .tf-nav-links {
    display: flex !important;
  }
  .tf-menu-toggle {
    display: none !important;
  }
}

@media (max-width: 920px) {
  .tf-nav-links {
    display: none !important;
  }
  .tf-menu-toggle {
    display: flex !important;
  }
  .tf-header-inner {
    height: 60px;
  }
  .tf-phone-pill {
    display: none !important;
  }
}

@media (max-width: 640px) {
  .tf-cta-btn {
    display: none !important;
  }
  .tf-header-inner {
    height: 56px;
  }
  .tf-topstrip {
    display: none;
  }
}

@media (max-width: 640px) {
  .tf-pill-cta {
    display: none !important;
  }
}

@media (max-width: 920px) {
  .tf-topstrip-right {
    display: none;
  }
}

@media (max-width: 1200px) {
  .tf-nav-links {
    gap: 0;
  }
  .tf-nav-item {
    font-size: 0.75rem;
    padding: 6px 8px;
  }
}

@media (max-width: 1050px) {
  .tf-nav-item {
    font-size: 0.7rem;
    padding: 5px 6px;
  }
  .tf-phone-pill {
    display: none !important;
  }
}

/* ==========================================================================
   MOBILE PORTAL DRAWER
   ========================================================================== */

.tf-drawer-root {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  pointer-events: auto;
}

.tf-drawer-backdrop {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.82);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  z-index: 100000;
  cursor: pointer;
  animation: tfFadeIn 0.25s ease-out forwards;
}

.tf-drawer-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(360px, 86vw);
  height: 100%;
  height: 100dvh;
  background: var(--tf-titanium);
  color: #ffffff;
  z-index: 100001;
  box-shadow: -15px 0 50px rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  border-left: 2px solid var(--tf-terracotta);
  animation: tfSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes tfFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes tfSlideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.tf-drawer-header {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: #0f1217;
}

.tf-drawer-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-grow: 1;
}

.tf-drawer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 9999px;
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.05rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--tf-text-light-muted);
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;
}

.tf-drawer-link:hover,
.tf-drawer-link.active {
  background: rgba(200, 90, 23, 0.18);
  color: #ffffff;
}

.tf-drawer-link.active {
  border-left: 3px solid var(--tf-terracotta);
  color: var(--tf-terracotta-bright);
}

.tf-drawer-footer {
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #0f1217;
}

/* Brand block (used in footer + drawer) */
.tf-brand-block {
  display: flex;
  align-items: center;
  gap: 10px;
}

.tf-brand-cube {
  width: 36px;
  height: 36px;
  background: var(--tf-titanium);
  border: 1.5px solid var(--tf-terracotta);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tf-brand-text h2 {
  font-family: 'Syne', sans-serif;
  font-size: 1.1rem;
  font-weight: 900;
  color: var(--tf-titanium);
  margin: 0;
  line-height: 1;
  letter-spacing: -0.01em;
  text-transform: uppercase;
}

.tf-brand-text h2.text-white,
.tf-brand-text h2.\!text-white {
  color: #ffffff;
}

.tf-brand-text span {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.625rem;
  font-weight: 700;
  color: var(--tf-terracotta);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  display: block;
  margin-top: 2px;
}

/* General Page Layout Utilities */
.tf-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Barlow Condensed', sans-serif;
  font-weight: 800;
  border-radius: 6px;
  font-size: 0.9375rem;
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
  text-transform: uppercase;
  letter-spacing: 0.07em;
  white-space: nowrap;
  line-height: 1;
}

.tf-btn-terracotta {
  background: var(--tf-terracotta);
  color: #ffffff;
  box-shadow: 0 3px 14px var(--tf-terracotta-glow);
}

.tf-btn-terracotta:hover {
  background: var(--tf-terracotta-bright);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px var(--tf-terracotta-glow);
}

.tf-btn-titanium {
  background: var(--tf-titanium);
  color: #ffffff;
}

.tf-btn-titanium:hover {
  background: #28303f;
  transform: translateY(-1px);
}

.tf-btn-outline {
  background: transparent;
  border: 1px solid var(--tf-titanium);
  color: var(--tf-titanium);
}

.tf-btn-outline:hover {
  background: var(--tf-titanium);
  color: #ffffff;
  transform: translateY(-1px);
}

.tf-btn-sm {
  padding: 7px 14px;
  font-size: 0.72rem;
}

.tf-btn-lg {
  padding: 14px 28px;
  font-size: 0.9375rem;
}

/* 3. Hero Section (Monolithic Architecture) */
.tf-hero {
  position: relative;
  min-height: 720px;
  display: flex;
  align-items: center;
  background: var(--tf-titanium);
  color: #ffffff;
  overflow: hidden;
  padding-top: 80px;
}

.tf-hero-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.42;
  filter: contrast(1.15) brightness(0.9);
}

.tf-hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(22, 26, 34, 0.96) 0%,
    rgba(22, 26, 34, 0.82) 48%,
    rgba(22, 26, 34, 0.4) 80%,
    rgba(22, 26, 34, 0.15) 100%
  );
}

.tf-hero-inner {
  position: relative;
  z-index: 2;
  max-width: 820px;
  padding: 80px 0;
}

.tf-hero-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(200, 90, 23, 0.18);
  border: 1px solid rgba(200, 90, 23, 0.5);
  color: var(--tf-terracotta-bright);
  padding: 6px 14px;
  border-radius: 4px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.tf-hero-h1 {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(3.6rem, 7vw, 6rem);
  font-weight: 900;
  line-height: 0.94;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  margin-bottom: 24px;
}

.tf-hero-h1 span {
  color: var(--tf-terracotta-bright);
}

.tf-hero-p {
  font-size: 1.15rem;
  color: var(--tf-text-light-muted);
  line-height: 1.75;
  margin-bottom: 36px;
}

/* 4. Engineering Specs HUD */
.tf-specs-bar {
  background: #11141a;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.tf-specs-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.tf-spec-stat {
  padding: 24px 20px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  align-items: center;
  gap: 16px;
}

.tf-spec-stat:last-child {
  border-right: none;
}

.tf-spec-icon {
  width: 44px;
  height: 44px;
  border-radius: 6px;
  background: rgba(200, 90, 23, 0.12);
  color: var(--tf-terracotta-bright);
  border: 1px solid rgba(200, 90, 23, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.tf-spec-stat h3 {
  font-family: 'Syne', sans-serif;
  font-size: 1.85rem;
  font-weight: 900;
  color: #ffffff;
  line-height: 1;
  margin-bottom: 4px;
}

.tf-spec-stat p {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.625rem;
  font-weight: 700;
  color: var(--tf-text-light-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin: 0;
}

/* Section Containers */
.tf-section {
  padding: 96px 0;
  position: relative;
}

.tf-section.titanium-bg {
  background: var(--tf-titanium);
  color: #ffffff;
}

.tf-section.card-bg {
  background: #e9eef5;
}

.tf-section-head {
  text-align: center;
  max-width: 780px;
  margin: 0 auto 60px;
}

.tf-section-eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--tf-terracotta);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 12px;
}

.tf-section.titanium-bg .tf-section-eyebrow {
  color: var(--tf-terracotta-bright);
}

.tf-section-title {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: clamp(2.4rem, 4.5vw, 3.6rem);
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.02em;
  line-height: 1.02;
  margin-bottom: 16px;
}

.tf-section.titanium-bg .tf-section-title {
  color: #ffffff;
}

/* 1. Mix Design & PSI Lab Card */
.tf-lab-card {
  background: #ffffff;
  border: 1px solid var(--tf-concrete-border);
  border-radius: 12px;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.06);
  padding: 48px;
}

.tf-lab-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 48px;
  align-items: center;
}

.tf-mix-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.tf-mix-btn {
  background: var(--tf-concrete-surface);
  border: 1px solid var(--tf-concrete-border);
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.tf-mix-btn:hover {
  border-color: var(--tf-terracotta);
}

.tf-mix-btn.active {
  border-color: var(--tf-terracotta);
  background: rgba(200, 90, 23, 0.08);
  box-shadow: 0 0 0 2px var(--tf-terracotta);
}

.tf-mix-btn h4 {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.25rem;
  font-weight: 800;
  color: var(--tf-titanium);
  margin: 0 0 4px;
  letter-spacing: 0.02em;
}

.tf-mix-btn span {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--tf-terracotta);
}

/* Mix Spec Output Box */
.tf-mix-output {
  background: var(--tf-titanium);
  color: #ffffff;
  border-radius: 10px;
  padding: 36px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  position: relative;
}

.tf-mix-output::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: var(--tf-terracotta);
}

.tf-spec-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  font-size: 0.8125rem;
}

/* 2. Concrete Yardage & Pump Truck Configurator */
.tf-calc-card {
  background: #ffffff;
  border: 1px solid var(--tf-concrete-border);
  border-radius: 12px;
  padding: 48px;
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.06);
}

.tf-calc-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 48px;
  align-items: center;
}

/* Finish & Texture Swatches */
.tf-swatches-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 16px;
}

.tf-swatch-card {
  background: var(--tf-titanium-panel);
  border: 1px solid var(--tf-titanium-border);
  border-radius: 10px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  flex-direction: column;
}

.tf-swatch-card:hover,
.tf-swatch-card.active {
  border-color: var(--tf-terracotta);
  transform: translateY(-4px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.4);
}

.tf-swatch-card.active {
  box-shadow: 0 0 0 2px var(--tf-terracotta);
}

.tf-swatch-img {
  height: 140px;
  width: 100%;
  object-fit: cover;
}

.tf-swatch-body {
  padding: 16px;
  flex-grow: 1;
}

.tf-swatch-body h4 {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.15rem;
  font-weight: 800;
  color: #ffffff;
  margin: 0 0 4px;
  letter-spacing: 0.03em;
  text-transform: uppercase;
}

.tf-swatch-body p {
  font-size: 0.75rem;
  color: var(--tf-text-light-muted);
  line-height: 1.5;
  margin: 0;
}

/* Capabilities Grid */
.tf-services-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

/* Portfolio Grid */
.tf-portfolio-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
}

.tf-portfolio-card {
  border-radius: 12px;
  overflow: hidden;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(255,255,255,0.1);
  transition: border-color 0.25s ease;
}

.tf-portfolio-card:hover {
  border-color: var(--tf-terracotta-bright);
}

.tf-portfolio-card-img {
  height: 260px;
  position: relative;
  overflow: hidden;
}

.tf-portfolio-card-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.tf-portfolio-card:hover .tf-portfolio-card-img img {
  transform: scale(1.05);
}

.tf-portfolio-badge {
  position: absolute;
  top: 16px;
  left: 16px;
  background: var(--tf-terracotta);
  color: #ffffff;
  font-size: 0.6875rem;
  font-weight: 700;
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 4px 10px;
  border-radius: 4px;
}

.tf-portfolio-location {
  position: absolute;
  bottom: 12px;
  right: 12px;
  background: rgba(0,0,0,0.8);
  color: #fff;
  font-size: 0.6875rem;
  font-family: 'JetBrains Mono', monospace;
  padding: 4px 10px;
  border-radius: 4px;
}

.tf-portfolio-card-body {
  padding: 24px;
}

.tf-portfolio-metric {
  font-size: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
  font-weight: 700;
  color: var(--tf-terracotta-bright);
  margin-bottom: 6px;
}

.tf-portfolio-name {
  font-family: 'Syne', sans-serif;
  font-size: 1.35rem;
  font-weight: 900;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 10px;
  line-height: 1.1;
}

.tf-portfolio-specs {
  font-size: 0.75rem;
  font-family: 'JetBrains Mono', monospace;
  color: #94a3b8;
  background: rgba(0,0,0,0.4);
  border: 1px solid rgba(255,255,255,0.08);
  padding: 10px 14px;
  border-radius: 6px;
  margin-bottom: 14px;
  line-height: 1.6;
}

/* Standards Grid */
.tf-standards-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 16px;
}

.tf-standard-card {
  padding: 20px 12px;
  border-radius: 10px;
  background: #ffffff;
  border: 1px solid var(--tf-concrete-border);
  text-align: center;
  font-family: 'JetBrains Mono', monospace;
  transition: border-color 0.2s ease;
  box-shadow: 0 2px 8px rgba(15, 23, 42, 0.04);
}

.tf-standard-card:hover {
  border-color: var(--tf-terracotta);
}

.tf-standard-title {
  font-weight: 700;
  font-size: 0.8125rem;
  color: var(--tf-titanium);
  margin: 8px 0 4px;
}

.tf-standard-sub {
  font-size: 0.6875rem;
  color: var(--tf-text-muted);
  line-height: 1.4;
}

/* Dispatch Section */
.tf-dispatch-card {
  padding: 48px;
  border-radius: 16px;
  background: #ffffff;
  border: 1px solid var(--tf-concrete-border);
  box-shadow: 0 20px 60px rgba(15, 23, 42, 0.07);
}

.tf-dispatch-grid {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 48px;
  align-items: start;
}

/* Finish Highlight Card */
.tf-finish-highlight {
  padding: 32px;
  border-radius: 16px;
  background: #0f172a;
  border: 1px solid rgba(255,255,255,0.1);
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: 32px;
  align-items: center;
}

.tf-finish-highlight-img {
  height: 260px;
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.tf-finish-highlight-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.tf-finish-sheen-tag {
  position: absolute;
  top: 12px;
  left: 12px;
  background: rgba(0,0,0,0.8);
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.6875rem;
  font-weight: 700;
  color: var(--tf-terracotta-bright);
  padding: 4px 10px;
  border-radius: 4px;
}

.tf-finish-spec-cols {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
}

.tf-finish-spec-cell {
  padding: 12px;
  background: rgba(0,0,0,0.4);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 6px;
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
}

.tf-calc-result {
  padding: 32px;
  border-radius: 12px;
  background: var(--tf-titanium);
  color: #ffffff;
  text-align: center;
  border: 1px solid rgba(255,255,255,0.1);
  position: relative;
}

.tf-calc-result-details {
  font-family: 'JetBrains Mono', monospace;
  font-size: 0.75rem;
  text-align: left;
  background: rgba(0,0,0,0.4);
  padding: 14px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.1);
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 20px;
}

.tf-calc-result-row {
  display: flex;
  justify-content: space-between;
  color: #94a3b8;
}

.tf-pump-toggle {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border-radius: 8px;
  background: var(--tf-concrete-surface);
  border: 1px solid var(--tf-concrete-border);
  cursor: pointer;
}

.tf-pump-toggle label {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--tf-text-dark);
  cursor: pointer;
}

/* Hero CTA row */
.tf-hero-ctas {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.tf-service-card {
  background: #ffffff;
  border-radius: 10px;
  border: 1px solid var(--tf-concrete-border);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);
}

.tf-service-card:hover {
  transform: translateY(-6px);
  border-color: var(--tf-terracotta);
  box-shadow: 0 20px 40px rgba(15, 23, 42, 0.1);
}

.tf-service-img-frame {
  height: 210px;
  position: relative;
  overflow: hidden;
}

.tf-service-img-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.tf-service-card:hover .tf-service-img-frame img {
  transform: scale(1.08);
}

.tf-service-body {
  padding: 24px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.tf-service-body h3 {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.5rem;
  font-weight: 800;
  color: var(--tf-titanium);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin: 8px 0;
}

.tf-service-body p {
  font-size: 0.875rem;
  color: var(--tf-text-muted);
  line-height: 1.6;
  margin-bottom: 16px;
}

/* Input Fields */
.tf-input {
  width: 100%;
  background: #ffffff;
  border: 1px solid var(--tf-concrete-border);
  border-radius: 6px;
  padding: 13px 16px;
  font-size: 0.9375rem;
  font-family: inherit;
  outline: none;
  transition: all 0.2s ease;
}

.tf-input:focus {
  border-color: var(--tf-terracotta);
  box-shadow: 0 0 0 3px var(--tf-terracotta-glow);
}

/* Footer */
.tf-footer {
  background: #0d1015;
  color: var(--tf-text-light-muted);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 80px 0 36px;
}

.tf-footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.9fr 0.9fr 1.2fr;
  gap: 48px;
  margin-bottom: 64px;
}

.tf-footer-col h4 {
  font-family: 'Barlow Condensed', sans-serif;
  font-size: 1.4rem;
  font-weight: 800;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin-bottom: 20px;
}

.tf-footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 0.9rem;
}

.tf-footer-links a:hover {
  color: var(--tf-terracotta-bright);
}

/* =============================================
   RESPONSIVE BREAKPOINTS
   ============================================= */

@media (max-width: 1280px) {
  .tf-standards-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media (max-width: 1200px) {
  .tf-specs-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .tf-swatches-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  .tf-services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .tf-footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1024px) {
  .tf-finish-highlight,
  .tf-dispatch-grid {
    grid-template-columns: 1fr;
  }

  .tf-finish-highlight-img {
    height: 220px;
  }

  .tf-dispatch-card {
    padding: 32px;
  }
}

@media (max-width: 900px) {
  .tf-lab-grid,
  .tf-calc-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .tf-specs-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .tf-swatches-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .tf-portfolio-grid {
    grid-template-columns: 1fr;
  }
  .tf-section {
    padding: 64px 0;
  }
  .tf-hero {
    min-height: 560px;
  }
  .tf-hero-inner {
    padding: 60px 0;
  }
  .tf-finish-spec-cols {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 640px) {
  .tf-specs-grid,
  .tf-swatches-grid,
  .tf-services-grid,
  .tf-footer-grid,
  .tf-mix-options,
  .tf-standards-grid {
    grid-template-columns: 1fr;
  }
  .tf-lab-card,
  .tf-calc-card {
    padding: 20px;
  }
  .tf-dispatch-card {
    padding: 20px;
  }
  .tf-lab-grid,
  .tf-calc-grid {
    gap: 28px;
  }
  .tf-hero-h1 {
    font-size: clamp(2.4rem, 9vw, 3.5rem);
  }
  .tf-hero-p {
    font-size: 1rem;
  }
  .tf-hero-ctas {
    flex-direction: column;
  }
  .tf-hero-ctas .tf-btn {
    width: 100%;
    justify-content: center;
  }
  .tf-portfolio-grid {
    gap: 20px;
  }
  .tf-section-title {
    font-size: clamp(2rem, 7vw, 2.8rem);
  }
}

/* =====================================================================
   THEME SELECTOR & PRESET INTEGRATION
   ===================================================================== */
[data-theme-preset]:not([data-theme-preset="original"]) .tf-site,
[data-theme-preset]:not([data-theme-preset="original"]) .tf-drawer-menu,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-drawer-menu {
  --tf-terracotta: var(--theme-accent-primary, #c85a17) !important;
  --tf-terracotta-bright: var(--theme-accent-primary-hover, #e06820) !important;
  --tf-terracotta-glow: var(--theme-accent-glow, rgba(200, 90, 23, 0.35)) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-btn-terracotta,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-btn-terracotta {
  background: var(--theme-accent-primary) !important;
  color: var(--theme-accent-contrast, #ffffff) !important;
  box-shadow: 0 4px 18px var(--theme-accent-glow, rgba(200, 90, 23, 0.35)) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-btn-terracotta:hover,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-btn-terracotta:hover {
  background: var(--theme-accent-primary-hover, var(--theme-accent-primary)) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-cta-btn,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-cta-btn {
  background: var(--theme-accent-primary) !important;
  color: var(--theme-accent-contrast, #ffffff) !important;
  box-shadow: 0 3px 12px var(--theme-accent-glow, rgba(200, 90, 23, 0.35)) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-cta-btn:hover,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-cta-btn:hover {
  background: var(--theme-accent-primary-hover, var(--theme-accent-primary)) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site .tf-brand-sub,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site .tf-brand-sub,
[data-theme-preset]:not([data-theme-preset="original"]) .tf-drawer-menu .tf-brand-sub,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-drawer-menu .tf-brand-sub {
  color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site .tf-topstrip-dot,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site .tf-topstrip-dot {
  background: var(--theme-accent-primary) !important;
  box-shadow: 0 0 8px var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site .tf-topstrip-badge,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site .tf-topstrip-badge {
  color: var(--theme-accent-primary) !important;
  border-color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site .tf-hero-badge,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site .tf-hero-badge {
  border-color: var(--theme-accent-primary) !important;
  color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site .tf-hero-h1 span,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site .tf-hero-h1 span {
  color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site .tf-section-eyebrow,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site .tf-section-eyebrow {
  color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site .tf-nav-item.active,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site .tf-nav-item.active {
  color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site .tf-nav-item.active::after,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site .tf-nav-item.active::after {
  background: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-drawer-link.active,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-drawer-link.active {
  color: var(--theme-accent-primary) !important;
  border-left-color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-drawer-menu,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-drawer-menu {
  border-left-color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site .tf-mix-btn.active,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site .tf-mix-btn.active {
  border-color: var(--theme-accent-primary) !important;
  box-shadow: 0 0 0 2px var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site .tf-mix-btn span,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site .tf-mix-btn span {
  color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site .tf-swatch-card.active,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site .tf-swatch-card.active {
  border-color: var(--theme-accent-primary) !important;
  box-shadow: 0 0 0 2px var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site .tf-portfolio-badge,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site .tf-portfolio-badge {
  background: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site .tf-portfolio-metric,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site .tf-portfolio-metric {
  color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site .tf-portfolio-card:hover,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site .tf-portfolio-card:hover {
  border-color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site .tf-service-card:hover,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site .tf-service-card:hover {
  border-color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site .tf-standard-card:hover,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site .tf-standard-card:hover {
  border-color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site .tf-input:focus,
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site .tf-input:focus {
  border-color: var(--theme-accent-primary) !important;
  box-shadow: 0 0 0 3px var(--theme-accent-glow, rgba(200, 90, 23, 0.35)) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .tf-site [class*="text-amber-"],
[data-theme-preset]:not([data-theme-preset="original"]) .tf-site [class*="text-orange-"],
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site [class*="text-amber-"],
[data-theme-active="true"]:not([data-theme-preset="original"]) .tf-site [class*="text-orange-"] {
  color: var(--theme-accent-primary) !important;
}

/* =====================================================================
   LIGHT MOOD (ARCHITECTURAL MONOLITHIC CONCRETE LIGHT)
   ===================================================================== */
html.light .tf-site,
body.light .tf-site,
[data-theme-mood="light"] .tf-site,
:root[data-theme-mood="light"] .tf-site,
:root[data-theme-active="true"][data-theme-mood="light"] .tf-site,
:root.light .tf-site {
  --tf-concrete-surface: var(--theme-bg-base, #f4f6f9);
  --tf-raw-concrete: var(--theme-bg-surface, #e8ecf1);
  --tf-concrete-card: var(--theme-bg-card, #ffffff);
  --tf-concrete-border: var(--theme-border, rgba(30, 41, 59, 0.12));
  --tf-text-dark: var(--theme-text-primary, #0f172a);
  --tf-text-muted: var(--theme-text-muted, #526071);
  background-color: var(--tf-concrete-surface);
  color: var(--tf-text-dark);
}

/* =====================================================================
   DARK MOOD OVERRIDES
   ===================================================================== */
html.dark .tf-site,
html.dark .tf-drawer-menu,
body.dark .tf-site,
body.dark .tf-drawer-menu,
[data-theme-mood="dark"] .tf-site,
[data-theme-mood="dark"] .tf-drawer-menu,
:root[data-theme-mood="dark"] .tf-site,
:root[data-theme-mood="dark"] .tf-drawer-menu,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-site,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-drawer-menu,
:root.dark .tf-site,
:root.dark .tf-drawer-menu {
  --tf-concrete-surface: var(--theme-bg-base, #0d1117);
  --tf-raw-concrete: var(--theme-bg-surface, #161b22);
  --tf-concrete-card: var(--theme-bg-card, #1c212b);
  --tf-concrete-border: var(--theme-border, rgba(255, 255, 255, 0.1));
  --tf-titanium: #0a0d12;
  --tf-titanium-panel: #161a22;
  --tf-titanium-card: #212631;
  --tf-text-dark: var(--theme-text-primary, #f8fafc);
  --tf-text-muted: var(--theme-text-muted, #94a3b8);
  background-color: var(--tf-concrete-surface);
  color: var(--tf-text-dark);
}

/* Dark mood header & elements */
html.dark .tf-header,
[data-theme-mood="dark"] .tf-header,
:root[data-theme-mood="dark"] .tf-header,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-header {
  background: rgba(13, 17, 23, 0.96);
  border-bottom-color: rgba(255, 255, 255, 0.08);
}

html.dark .tf-header.scrolled,
[data-theme-mood="dark"] .tf-header.scrolled,
:root[data-theme-mood="dark"] .tf-header.scrolled,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-header.scrolled {
  background: rgba(13, 17, 23, 0.99);
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.6);
}

html.dark .tf-brand-title,
[data-theme-mood="dark"] .tf-brand-title,
:root[data-theme-mood="dark"] .tf-brand-title,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-brand-title {
  color: #f8fafc;
}

html.dark .tf-nav-item,
[data-theme-mood="dark"] .tf-nav-item,
:root[data-theme-mood="dark"] .tf-nav-item,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-nav-item {
  color: #94a3b8;
}

html.dark .tf-nav-item:hover,
[data-theme-mood="dark"] .tf-nav-item:hover,
:root[data-theme-mood="dark"] .tf-nav-item:hover,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-nav-item:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.08);
}

html.dark .tf-phone-pill,
[data-theme-mood="dark"] .tf-phone-pill,
:root[data-theme-mood="dark"] .tf-phone-pill,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-phone-pill {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.12);
  color: #f8fafc;
}

html.dark .tf-menu-toggle,
[data-theme-mood="dark"] .tf-menu-toggle,
:root[data-theme-mood="dark"] .tf-menu-toggle,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-menu-toggle {
  background: #1c212b;
  border-color: rgba(255, 255, 255, 0.12);
  color: #f8fafc;
}

html.dark .tf-section.card-bg,
[data-theme-mood="dark"] .tf-section.card-bg,
:root[data-theme-mood="dark"] .tf-section.card-bg,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-section.card-bg {
  background: #12161f;
}

html.dark .tf-section-title,
[data-theme-mood="dark"] .tf-section-title,
:root[data-theme-mood="dark"] .tf-section-title,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-section-title {
  color: #f8fafc;
}

html.dark .tf-lab-card,
html.dark .tf-calc-card,
html.dark .tf-service-card,
html.dark .tf-standard-card,
html.dark .tf-dispatch-card,
[data-theme-mood="dark"] .tf-lab-card,
[data-theme-mood="dark"] .tf-calc-card,
[data-theme-mood="dark"] .tf-service-card,
[data-theme-mood="dark"] .tf-standard-card,
[data-theme-mood="dark"] .tf-dispatch-card,
:root[data-theme-mood="dark"] .tf-lab-card,
:root[data-theme-mood="dark"] .tf-calc-card,
:root[data-theme-mood="dark"] .tf-service-card,
:root[data-theme-mood="dark"] .tf-standard-card,
:root[data-theme-mood="dark"] .tf-dispatch-card,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-lab-card,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-calc-card,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-service-card,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-standard-card,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-dispatch-card {
  background: #161b22;
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.4);
}

html.dark .tf-mix-btn,
[data-theme-mood="dark"] .tf-mix-btn,
:root[data-theme-mood="dark"] .tf-mix-btn,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-mix-btn {
  background: #1f2530;
  border-color: rgba(255, 255, 255, 0.1);
  color: #f8fafc;
}

html.dark .tf-mix-btn h4,
[data-theme-mood="dark"] .tf-mix-btn h4,
:root[data-theme-mood="dark"] .tf-mix-btn h4,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-mix-btn h4 {
  color: #f8fafc;
}

html.dark .tf-service-body h3,
[data-theme-mood="dark"] .tf-service-body h3,
:root[data-theme-mood="dark"] .tf-service-body h3,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-service-body h3 {
  color: #f8fafc;
}

html.dark .tf-service-body p,
[data-theme-mood="dark"] .tf-service-body p,
:root[data-theme-mood="dark"] .tf-service-body p,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-service-body p {
  color: #94a3b8;
}

html.dark .tf-standard-title,
[data-theme-mood="dark"] .tf-standard-title,
:root[data-theme-mood="dark"] .tf-standard-title,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-standard-title {
  color: #f8fafc;
}

html.dark .tf-standard-sub,
[data-theme-mood="dark"] .tf-standard-sub,
:root[data-theme-mood="dark"] .tf-standard-sub,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-standard-sub {
  color: #94a3b8;
}

html.dark .tf-input,
[data-theme-mood="dark"] .tf-input,
:root[data-theme-mood="dark"] .tf-input,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-input {
  background: #1f2530;
  border-color: rgba(255, 255, 255, 0.12);
  color: #f8fafc;
}

html.dark .tf-pump-toggle,
[data-theme-mood="dark"] .tf-pump-toggle,
:root[data-theme-mood="dark"] .tf-pump-toggle,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-pump-toggle {
  background: #1f2530;
  border-color: rgba(255, 255, 255, 0.1);
}

html.dark .tf-pump-toggle label,
[data-theme-mood="dark"] .tf-pump-toggle label,
:root[data-theme-mood="dark"] .tf-pump-toggle label,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-pump-toggle label {
  color: #f8fafc;
}

html.dark .tf-site .bg-white,
[data-theme-mood="dark"] .tf-site .bg-white,
:root[data-theme-mood="dark"] .tf-site .bg-white,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-site .bg-white {
  background-color: #161b22 !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
}

html.dark .tf-site .text-slate-900,
html.dark .tf-site .text-slate-800,
[data-theme-mood="dark"] .tf-site .text-slate-900,
[data-theme-mood="dark"] .tf-site .text-slate-800,
:root[data-theme-mood="dark"] .tf-site .text-slate-900,
:root[data-theme-mood="dark"] .tf-site .text-slate-800,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-site .text-slate-900,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-site .text-slate-800 {
  color: #f8fafc !important;
}

html.dark .tf-site .text-slate-600,
html.dark .tf-site .text-slate-500,
[data-theme-mood="dark"] .tf-site .text-slate-600,
[data-theme-mood="dark"] .tf-site .text-slate-500,
:root[data-theme-mood="dark"] .tf-site .text-slate-600,
:root[data-theme-mood="dark"] .tf-site .text-slate-500,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-site .text-slate-600,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-site .text-slate-500 {
  color: #94a3b8 !important;
}

/* Dark mood mobile drawer */
html.dark .tf-drawer-menu,
[data-theme-mood="dark"] .tf-drawer-menu,
:root[data-theme-mood="dark"] .tf-drawer-menu,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-drawer-menu {
  background: #0d1117;
  border-left-color: var(--tf-terracotta);
}

html.dark .tf-drawer-header,
html.dark .tf-drawer-footer,
[data-theme-mood="dark"] .tf-drawer-header,
[data-theme-mood="dark"] .tf-drawer-footer,
:root[data-theme-mood="dark"] .tf-drawer-header,
:root[data-theme-mood="dark"] .tf-drawer-footer,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-drawer-header,
:root[data-theme-active="true"][data-theme-mood="dark"] .tf-drawer-footer {
  background: #080a0e;
  border-color: rgba(255, 255, 255, 0.08);
};
`;
