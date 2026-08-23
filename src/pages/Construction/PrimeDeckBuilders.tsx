import React, { useState, useEffect, useMemo } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  Calculator,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  Compass,
  FileText,
  Flame,
  Grid,
  Hammer,
  HelpCircle,
  Home,
  Layers,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Moon,
  Phone,
  Ruler,
  Shield,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Trees,
  UploadCloud,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { imageUrl } from "../../assets/images";
import "./PrimeDeckBuilders.css";

// Asset Image Resolvers
const heroImg = imageUrl("Construction/primedeck/hero.webp") || "/images/Construction/primedeck/hero.webp";
const deckImg = imageUrl("Construction/primedeck/deck.webp") || "/images/Construction/primedeck/deck.webp";
const pergolaImg = imageUrl("Construction/primedeck/pergola.webp") || "/images/Construction/primedeck/pergola.webp";
const patioImg = imageUrl("Construction/primedeck/patio.webp") || "/images/Construction/primedeck/patio.webp";

// Nav items
const navItems = [
  { label: "Material Studio", id: "pd-studio" },
  { label: "Cost Configurator", id: "pd-configurator" },
  { label: "Capabilities", id: "pd-services" },
  { label: "Lighting Gallery", id: "pd-gallery" },
  { label: "Design Process", id: "pd-process" },
  { label: "HOA Feasibility", id: "pd-hoa" },
  { label: "FAQs", id: "pd-faq" },
];

// 1. Deck Material Studio Options
const deckMaterials = [
  {
    id: "spiced_rum",
    name: "Trex Transcend® Spiced Rum",
    brand: "Capped Composite",
    color: "#7d4827",
    tag: "Most Popular Warm Teak",
    warranty: "50-Year Stain & Fade",
    heatScore: "Cool-Touch Tech (85%)",
    slipRating: "Class C High-Traction",
    maintCost: "$0 / yr (Soap & Water)",
    desc: "Warm umber tones with natural exotic hardwood grain streaking. Resistant to rot, splinters, red wine stains, and pool chlorine.",
  },
  {
    id: "coastline",
    name: "TimberTech® AZEK Coastline",
    brand: "Advanced PVC",
    color: "#646f7c",
    tag: "Modern Coastal Slate",
    warranty: "50-Year Limited Lifetime",
    heatScore: "Stay-Cool Polymer (92%)",
    slipRating: "Class C Wet-Rated",
    maintCost: "$0 / yr (Zero Staining)",
    desc: "Sophisticated weathered gray finish that stays up to 30° cooler under direct sun than traditional composite boards.",
  },
  {
    id: "brazilian_ipe",
    name: "Authentic Brazilian Ipe",
    brand: "Exotic Hardwood",
    color: "#452818",
    tag: "Ultra-Luxury Natural Timber",
    warranty: "30-Year Structural Timber",
    heatScore: "Natural Thermal Dissipation",
    slipRating: "Class B Smooth Sanded",
    maintCost: "$350 / yr (Annual Oil Finish)",
    desc: "The gold standard of natural luxury hardwoods. Exceptionally dense, naturally fire-resistant, and age-defying architectural warmth.",
  },
  {
    id: "red_cedar",
    name: "Architectural Red Cedar",
    brand: "Natural Timber",
    color: "#99562e",
    tag: "Aromatic Hill Country Classic",
    warranty: "15-Year Solid Timber",
    heatScore: "Low Heat Retention",
    slipRating: "Class B Natural Grain",
    maintCost: "$280 / yr (Bi-Annual Seal)",
    desc: "Naturally insect and decay resistant with a fragrant cedar aroma. Warm honey undertones that can be custom stained to match any home.",
  },
];

// Railing Systems
const railingSystems = [
  { id: "cable", name: "Matte Black Marine Cable Rail", desc: "Unobstructed scenic views with 316-grade stainless steel tension cables." },
  { id: "glass", name: "Tempered Glass Windshield Panels", desc: "Full wind block and 100% crystal-clear backyard sightlines." },
  { id: "bronze", name: "Architectural Bronze Balusters", desc: "Classic estate styling with powder-coated rustproof aluminum spindles." },
  { id: "privacy", name: "Cedar Slat Privacy Wall", desc: "Modern horizontal timber slats with integrated climbing vine trellis." },
];

// 2. Cost Configurator Footprints
const deckFootprints = [
  { id: "192", label: "Compact Deck (12' x 16')", sqFt: 192, baseRate: 58 },
  { id: "384", label: "Entertainer's Deck (16' x 24')", sqFt: 384, baseRate: 54 },
  { id: "600", label: "Multi-Level Retreat (20' x 30')", sqFt: 600, baseRate: 52 },
  { id: "1000", label: "Luxury Estate Compound (30' x 40'+)", sqFt: 1000, baseRate: 48 },
];

// Upgrades
const upgradeOptions = [
  { id: "kitchen", name: "Built-In Gas Grill & Island", cost: 8500, icon: Flame },
  { id: "pergola", name: "Motorized Louvered Pergola", cost: 12500, icon: Sun },
  { id: "lighting", name: "LED Step & Riser Illumination", cost: 2400, icon: Lightbulb },
  { id: "firepit", name: "Linear Quartz Gas Fire Table", cost: 4200, icon: Zap },
];

// 3. Core Capabilities
const capabilitiesData = [
  {
    title: "Custom Multi-Level Decks",
    desc: "Engineered composite and hardwood decks with curved border inlays, integrated stairs, and seamless transitions.",
    image: deckImg,
    badge: "Master Craftsmanship",
    features: ["Curved picture-frame board borders", "Evolution steel joist framing (zero sag)", "Hidden clip fastener installations", "Multi-tiered elevation landings"],
  },
  {
    title: "Motorized & Cedar Pergolas",
    desc: "Architectural shade structures featuring remote-controlled louvered roofs with automatic rain sensors.",
    image: pergolaImg,
    badge: "All-Weather Shade",
    features: ["140 MPH wind-rated louvered aluminum", "Integrated infrared patio heaters", "Custom rough-sawn cedar beams", "Concealed electrical chase channels"],
  },
  {
    title: "Covered Patios & Outdoor Kitchens",
    desc: "Resort-grade alfresco kitchens equipped with stainless grills, quartz counters, and under-deck waterproof drainage.",
    image: patioImg,
    badge: "Alfresco Living",
    features: ["Marine-grade 304 stainless cabinetry", "Dekton® heat & stain proof countertops", "Integrated under-deck dry ceilings", "Outdoor audio & ambient cove lighting"],
  },
];

// 4. Design-Build Process Steps
const processSteps = [
  { step: "01", title: "Site Discovery & 3D Scan", desc: "We evaluate your terrain, sunlight angles, property easements, and lifestyle flow." },
  { step: "02", title: "Photorealistic 3D Renderings", desc: "You visualize your exact backyard in 4K before groundbreaking." },
  { step: "03", title: "HOA & Permit Fast-Tracking", desc: "We submit architectural blueprints and secure all municipal approvals." },
  { step: "04", title: "Fortress Steel Substructure", desc: "We build level, lifetime steel joists that will never rot, warp, or sag." },
  { step: "05", title: "White-Glove Walkthrough", desc: "Final 50-point craftsmanship audit and registration of all 50-year warranties." },
];

// FAQs
const faqsList = [
  {
    q: "Why choose Capped Composite (Trex / TimberTech) over Pressure-Treated Wood?",
    a: "While pressure-treated pine has a lower upfront cost, it requires sanding, staining, and sealing every 12-18 months and typically splinters and warps within 10-12 years. Capped composite never rots, splinters, or requires staining, stays pristine for 30-50 years, and increases your home resale value significantly.",
  },
  {
    q: "Do you handle HOA approvals and city building permits in Middle Tennessee?",
    a: "Yes! PrimeDeck Builders manages 100% of the permitting process. We prepare CAD drawings, engineering stamps, site surveys, and HOA submittal packets for Nashville, Brentwood, Franklin, Belle Meade, Williamson County, and Davidson County.",
  },
  {
    q: "How long does a custom deck and pergola build take to complete?",
    a: "Once permits are approved, a standard custom deck takes between 7 to 12 business days on-site. Large multi-level outdoor living complexes with kitchens and pergolas typically take 3 to 4 weeks.",
  },
  {
    q: "Can you build on uneven hillside terrain or second-story walkouts?",
    a: "Absolutely. We specialize in complex hillside foundations using helical screw piles, structural steel posts, and reinforced concrete footings to ensure rock-solid stability even on steep slopes.",
  },
];

export function PrimeDeckBuilders() {
  const [activeMaterial, setActiveMaterial] = useState(deckMaterials[0]);
  const [activeRailing, setActiveRailing] = useState(railingSystems[0]);
  const [selectedFootprint, setSelectedFootprint] = useState(deckFootprints[1]);
  const [steelFraming, setSteelFraming] = useState(true);
  const [selectedUpgrades, setSelectedUpgrades] = useState<string[]>(["lighting", "pergola"]);

  // Lighting Mode (Day vs Night)
  const [lightingMode, setLightingMode] = useState<"day" | "night">("night");

  // Nav scroll
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("pd-studio");

  // HOA Checker
  const [hoaInput, setHoaInput] = useState("");
  const [hoaResult, setHoaResult] = useState<string | null>(null);

  // Form State
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formNotes, setFormNotes] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ state
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

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const toggleUpgrade = (id: string) => {
    setSelectedUpgrades((prev) =>
      prev.includes(id) ? prev.filter((u) => u !== id) : [...prev, id]
    );
  };

  // Cost Configurator Calculation
  const calculatedEstimate = useMemo(() => {
    const baseDeck = selectedFootprint.sqFt * selectedFootprint.baseRate;
    const framingSurcharge = steelFraming ? selectedFootprint.sqFt * 14 : 0;
    const upgradesTotal = selectedUpgrades.reduce((sum, uId) => {
      const up = upgradeOptions.find((u) => u.id === uId);
      return sum + (up ? up.cost : 0);
    }, 0);

    const total = baseDeck + framingSurcharge + upgradesTotal;
    const min = Math.round((total * 0.95) / 500) * 500;
    const max = Math.round((total * 1.08) / 500) * 500;

    return {
      min: min.toLocaleString(),
      max: max.toLocaleString(),
    };
  }, [selectedFootprint, steelFraming, selectedUpgrades]);

  const handleHoaCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hoaInput.trim()) return;
    setHoaResult(
      `Verified! ${hoaInput.trim()} is within PrimeDeck Builders' Fast-Track Permitting Zone (Average approval: 5–8 business days).`
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="pd-site" id="pd-top">
      {/* 1. Top Ribbon */}
      <div className="pd-ribbon">
        <div className="pd-wrap pd-ribbon-content">
          <div className="flex items-center gap-3">
            <span className="pd-ribbon-badge">
              <span className="pd-pulse-dot"></span>
              Trex Pro Platinum® &amp; TimberTech Master Builder
            </span>
            <span className="hidden md:inline text-xs text-slate-300">
              Middle TN License: TN-GC #79820 • Serving Nashville, Franklin, Brentwood &amp; Belle Meade
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="hidden sm:inline text-slate-300">Design Studio: Franklin, TN</span>
            <a href="tel:6155553325" className="text-amber-400 hover:text-amber-300 font-bold flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> (615) 555-DECK (3325)
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <header className={`pd-header ${scrolled ? "scrolled" : ""}`}>
        <div className="pd-wrap pd-nav">
          <a href="#pd-top" className="pd-brand" onClick={(e) => scrollTo(e, "pd-top")}>
            <div className="pd-brand-icon">
              <Compass className="w-6 h-6" />
            </div>
            <div className="pd-brand-text">
              <h2>PRIMEDECK</h2>
              <span>Builders • Outdoor Living</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="pd-nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeNav === item.id ? "active" : ""}
                onClick={(e) => scrollTo(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#pd-quote-form"
              className="pd-btn pd-btn-teak pd-btn-sm hidden sm:inline-flex"
              onClick={(e) => scrollTo(e, "pd-quote-form")}
            >
              Book 3D Design Walk
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              className="md:hidden text-stone-900 p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="md:hidden bg-[#071e19] text-white border-b border-emerald-900 p-6 flex flex-col gap-3 animate-in slide-in-from-top-4 duration-200">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`py-2 text-base font-semibold ${
                  activeNav === item.id ? "text-amber-400" : "text-slate-300"
                }`}
                onClick={(e) => scrollTo(e, item.id)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-emerald-800 flex flex-col gap-2">
              <a
                href="#pd-quote-form"
                className="pd-btn pd-btn-teak w-full"
                onClick={(e) => scrollTo(e, "pd-quote-form")}
              >
                Book 3D Design Walk
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. Hero Section (Warm Teak & Forest Sanctuary) */}
      <section className="pd-hero-wrap">
        <img
          src={heroImg}
          alt="Luxury custom outdoor deck and pergola in Franklin Tennessee"
          className="pd-hero-bg"
        />
        <div className="pd-hero-gradient"></div>
        <div className="pd-wrap">
          <div className="pd-hero-content">
            <div className="pd-hero-badge">
              <Trees className="w-4 h-4" />
              Middle Tennessee's Premier Deck &amp; Outdoor Architect
            </div>
            <h1 className="pd-hero-h1">
              Better outdoors. <br />
              <span>Built beautifully.</span>
            </h1>
            <p className="pd-hero-desc">
              Custom composite decks, motorized louvre pergolas, and full-scale outdoor living spaces designed for effortless entertainment and backed by 50-year warranties.
            </p>
            <div className="pd-hero-actions">
              <a
                href="#pd-studio"
                className="pd-btn pd-btn-teak pd-btn-lg"
                onClick={(e) => scrollTo(e, "pd-studio")}
              >
                <Layers className="w-5 h-5" />
                3D Material Visualizer
              </a>
              <a
                href="#pd-configurator"
                className="pd-btn pd-btn-outline pd-btn-lg !text-white !border-white/30 hover:!bg-white/10"
                onClick={(e) => scrollTo(e, "pd-configurator")}
              >
                <Calculator className="w-5 h-5" />
                Deck Cost Configurator
              </a>
            </div>
          </div>
        </div>

        {/* Floating Trust Badge */}
        <div className="pd-hero-floating-card">
          <Award className="w-9 h-9 text-amber-400 shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-white mb-0.5">Trex Pro Platinum®</h4>
            <p className="text-xs text-slate-300">Top 1% Composite Deck Builders in US</p>
          </div>
        </div>
      </section>

      {/* 4. Stats Banner */}
      <section className="pd-stats-banner">
        <div className="pd-wrap pd-stats-grid">
          <div className="pd-stat-box">
            <div className="pd-stat-icon">
              <Trees className="w-6 h-6" />
            </div>
            <div>
              <h3>14+</h3>
              <p>Years in Tennessee</p>
            </div>
          </div>

          <div className="pd-stat-box">
            <div className="pd-stat-icon">
              <Hammer className="w-6 h-6" />
            </div>
            <div>
              <h3>950+</h3>
              <p>Custom Decks Built</p>
            </div>
          </div>

          <div className="pd-stat-box">
            <div className="pd-stat-icon">
              <Star className="w-6 h-6 text-amber-500 fill-current" />
            </div>
            <div>
              <h3>4.98/5</h3>
              <p>Client Rating</p>
            </div>
          </div>

          <div className="pd-stat-box">
            <div className="pd-stat-icon">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3>50-Yr</h3>
              <p>Stain &amp; Fade Warranty</p>
            </div>
          </div>

          <div className="pd-stat-box">
            <div className="pd-stat-icon">
              <CircleDollarSign className="w-6 h-6" />
            </div>
            <div>
              <h3>0% APR</h3>
              <p>Financing Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive 3D Deck Material Studio */}
      <section id="pd-studio" className="pd-section">
        <div className="pd-wrap">
          <div className="pd-section-header">
            <div className="pd-eyebrow">
              <Sparkles className="w-4 h-4" />
              Design Studio
            </div>
            <h2 className="pd-section-title">Interactive Material &amp; Railing Studio</h2>
            <p className="pd-section-subtitle">
              Select premium composite or natural hardwood boards and pair them with architectural railing systems to preview real-time specs.
            </p>
          </div>

          <div className="pd-material-studio-card">
            <div className="pd-studio-grid">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                  1. Select Decking Board Material:
                </div>
                <div className="pd-swatch-list">
                  {deckMaterials.map((mat) => (
                    <button
                      key={mat.id}
                      type="button"
                      className={`pd-swatch-btn ${activeMaterial.id === mat.id ? "active" : ""}`}
                      onClick={() => setActiveMaterial(mat)}
                    >
                      <div
                        className="pd-swatch-color"
                        style={{ backgroundColor: mat.color }}
                      ></div>
                      <div className="pd-swatch-info">
                        <h4>{mat.name.split("®")[0]}</h4>
                        <span>{mat.brand}</span>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                  2. Select Railing Architecture:
                </div>
                <div className="pd-railing-chips mb-6">
                  {railingSystems.map((rail) => (
                    <button
                      key={rail.id}
                      type="button"
                      className={`pd-railing-btn ${activeRailing.id === rail.id ? "active" : ""}`}
                      onClick={() => setActiveRailing(rail)}
                    >
                      {rail.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Material Specs Display Card */}
              <div className="pd-material-preview-box">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-1">
                  {activeMaterial.brand} Specifications
                </div>
                <h3 className="pd-font-serif text-2xl font-bold text-white mb-2">
                  {activeMaterial.name}
                </h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  {activeMaterial.desc}
                </p>

                <div className="space-y-1 mb-6">
                  <div className="pd-spec-meter-row">
                    <span className="text-slate-400">Manufacturer Warranty:</span>
                    <strong className="text-emerald-400">{activeMaterial.warranty}</strong>
                  </div>
                  <div className="pd-spec-meter-row">
                    <span className="text-slate-400">Barefoot Heat Resistance:</span>
                    <strong className="text-amber-400">{activeMaterial.heatScore}</strong>
                  </div>
                  <div className="pd-spec-meter-row">
                    <span className="text-slate-400">Traction / Slip Rating:</span>
                    <strong className="text-white">{activeMaterial.slipRating}</strong>
                  </div>
                  <div className="pd-spec-meter-row">
                    <span className="text-slate-400">Annual Maintenance Cost:</span>
                    <strong className="text-emerald-400">{activeMaterial.maintCost}</strong>
                  </div>
                  <div className="pd-spec-meter-row">
                    <span className="text-slate-400">Paired Railing:</span>
                    <strong className="text-white">{activeRailing.name}</strong>
                  </div>
                </div>

                <a
                  href="#pd-quote-form"
                  className="pd-btn pd-btn-teak w-full"
                  onClick={(e) => {
                    scrollTo(e, "pd-quote-form");
                    setFormNotes(`Selected Board: ${activeMaterial.name} with ${activeRailing.name}`);
                  }}
                >
                  Request Sample Kit &amp; Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Interactive Deck & Living Cost Configurator */}
      <section id="pd-configurator" className="pd-section card-bg">
        <div className="pd-wrap">
          <div className="pd-section-header">
            <div className="pd-eyebrow">
              <Calculator className="w-4 h-4" />
              Budget Planning Tool
            </div>
            <h2 className="pd-section-title">Outdoor Living Cost Configurator</h2>
            <p className="pd-section-subtitle">
              Configure your square footage, structural framing, and luxury amenities to calculate instant pricing.
            </p>
          </div>

          <div className="pd-configurator-box">
            <div className="pd-config-grid">
              <div className="space-y-6">
                {/* 1. Footprint Size */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                    1. Choose Deck Footprint Dimensions:
                  </div>
                  <div className="pd-size-chips-grid">
                    {deckFootprints.map((fp) => (
                      <button
                        key={fp.id}
                        type="button"
                        className={`pd-size-chip ${selectedFootprint.id === fp.id ? "active" : ""}`}
                        onClick={() => setSelectedFootprint(fp)}
                      >
                        <div className="text-sm font-bold text-white mb-1">{fp.label}</div>
                        <div className="text-xs text-amber-400">{fp.sqFt} Sq Ft Footprint</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Sub-Structure Foundation */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                    2. Structural Framing Foundation:
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      className={`p-3 rounded-xl border text-left transition-all ${
                        steelFraming
                          ? "bg-amber-500/20 border-amber-500 text-white shadow-lg"
                          : "bg-emerald-950/40 border-emerald-800 text-slate-400"
                      }`}
                      onClick={() => setSteelFraming(true)}
                    >
                      <div className="text-xs font-bold text-white mb-0.5">Evolution Steel Framing</div>
                      <div className="text-[11px] text-amber-400">Zero Sag • 25-Yr Steel Warranty</div>
                    </button>
                    <button
                      type="button"
                      className={`p-3 rounded-xl border text-left transition-all ${
                        !steelFraming
                          ? "bg-amber-500/20 border-amber-500 text-white shadow-lg"
                          : "bg-emerald-950/40 border-emerald-800 text-slate-400"
                      }`}
                      onClick={() => setSteelFraming(false)}
                    >
                      <div className="text-xs font-bold text-white mb-0.5">Ground-Contact Wood</div>
                      <div className="text-[11px] text-slate-400">Traditional Pressure-Treated Pine</div>
                    </button>
                  </div>
                </div>

                {/* 3. Luxury Upgrades */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3">
                    3. Outdoor Living Upgrades &amp; Features:
                  </div>
                  <div className="pd-upgrade-checkbox-list">
                    {upgradeOptions.map((up) => {
                      const isChecked = selectedUpgrades.includes(up.id);
                      return (
                        <div
                          key={up.id}
                          className={`pd-upgrade-checkbox ${isChecked ? "checked" : ""}`}
                          onClick={() => toggleUpgrade(up.id)}
                        >
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center ${
                              isChecked ? "bg-amber-500 border-amber-500 text-white" : "border-slate-500"
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                          <span className="text-white">{up.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Configurator Price Summary */}
              <div className="p-8 rounded-2xl bg-[#04120f] border border-amber-500/40 text-center relative">
                <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-2">
                  Estimated Investment Range
                </div>
                <div className="text-4xl font-black text-white my-3">
                  ${calculatedEstimate.min} - ${calculatedEstimate.max}
                </div>
                <p className="text-xs text-slate-400 mb-6">
                  {selectedFootprint.label} • {steelFraming ? "Evolution Steel Frame" : "Treated Wood"}
                </p>

                <ul className="text-left space-y-2 text-xs text-slate-300 py-4 border-t border-b border-emerald-900/60 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Complete architectural 3D CAD design &amp; site engineering</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Middle TN HOA submittal &amp; county building permits</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>50-Year manufacturer stain &amp; fade warranty package</span>
                  </li>
                </ul>

                <a
                  href="#pd-quote-form"
                  className="pd-btn pd-btn-teak w-full"
                  onClick={(e) => {
                    scrollTo(e, "pd-quote-form");
                    setFormNotes(
                      `Configured Scope: ${selectedFootprint.label} | Framing: ${steelFraming ? "Steel" : "Wood"} | Upgrades: ${selectedUpgrades.join(", ")} | Estimated: $${calculatedEstimate.min} - $${calculatedEstimate.max}`
                    );
                  }}
                >
                  Lock In Scope for 3D Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Core Capabilities Grid */}
      <section id="pd-services" className="pd-section">
        <div className="pd-wrap">
          <div className="pd-section-header">
            <div className="pd-eyebrow">
              <Hammer className="w-4 h-4" />
              Build Capabilities
            </div>
            <h2 className="pd-section-title">Crafted for the Way You Live Outdoors</h2>
            <p className="pd-section-subtitle">
              Every space is custom designed around your home’s architecture, terrain grade, and entertaining lifestyle.
            </p>
          </div>

          <div className="pd-services-grid">
            {capabilitiesData.map((cap, idx) => (
              <div key={idx} className="pd-service-card">
                <div className="pd-service-media">
                  <img src={cap.image} alt={cap.title} />
                  <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
                    {cap.badge}
                  </div>
                </div>
                <div className="pd-service-body">
                  <h3>{cap.title}</h3>
                  <p>{cap.desc}</p>
                  <ul className="space-y-2 mb-6 text-xs text-stone-600">
                    {cap.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#pd-quote-form"
                    className="mt-auto text-sm font-bold text-amber-700 hover:text-amber-800 flex items-center gap-1.5"
                    onClick={(e) => {
                      scrollTo(e, "pd-quote-form");
                      setFormNotes(`Inquiring about: ${cap.title}`);
                    }}
                  >
                    <span>Design This Space</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Interactive Daylight vs Twilight Night Mode Outdoor Gallery */}
      <section id="pd-gallery" className="pd-section forest-bg">
        <div className="pd-wrap">
          <div className="pd-section-header">
            <div className="pd-eyebrow !text-amber-400">
              <Sun className="w-4 h-4" />
              Illumination &amp; Ambiance
            </div>
            <h2 className="pd-section-title !text-white">Daylight vs. Twilight Lighting View</h2>
            <p className="pd-section-subtitle !text-slate-300">
              Toggle between natural golden hour daylight and integrated low-voltage night lighting to preview how our ambient LED riser, post, and fire features transform the deck after dark.
            </p>
          </div>

          {/* Mode Toggle Switcher */}
          <div className="pd-mode-toggle-wrap">
            <div className="pd-mode-toggle">
              <button
                type="button"
                className={`pd-mode-btn ${lightingMode === "day" ? "active" : ""}`}
                onClick={() => setLightingMode("day")}
              >
                <Sun className="w-4 h-4" />
                ☀️ Golden Hour Sunset
              </button>
              <button
                type="button"
                className={`pd-mode-btn ${lightingMode === "night" ? "active" : ""}`}
                onClick={() => setLightingMode("night")}
              >
                <Moon className="w-4 h-4" />
                🌙 Ambient Night Illumination
              </button>
            </div>
          </div>

          {/* Gallery Showcase Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-emerald-800/60">
              <img
                src={lightingMode === "day" ? heroImg : patioImg}
                alt="Deck lighting mode preview"
                className="w-full h-[400px] object-cover transition-all duration-700"
                style={{
                  filter: lightingMode === "night" ? "brightness(0.85) contrast(1.15)" : "brightness(1.05)",
                }}
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white">
                <div className="flex justify-between items-center text-xs">
                  <span>
                    Current View:{" "}
                    <strong>{lightingMode === "day" ? "Natural Teak & Pergola Shade" : "Low-Voltage Step & Rail Glow"}</strong>
                  </span>
                  <span className="text-amber-400 font-bold">12V Smart App Controlled</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-800/60">
                <div className="flex items-center gap-3 mb-2">
                  <Lightbulb className="w-6 h-6 text-amber-400" />
                  <h4 className="text-lg font-bold text-white">Flush Stair Riser LED Dots</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Safely illuminates elevation transitions with warm 2700K waterproof recessed LEDs drilled flush into the composite fascia.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-800/60">
                <div className="flex items-center gap-3 mb-2">
                  <Flame className="w-6 h-6 text-amber-400" />
                  <h4 className="text-lg font-bold text-white">Integrated Gas Fire Ambiance</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Built-in electronic-ignition natural gas fire tables with volcanic glass embers that extend deck usability well into crisp autumn evenings.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-emerald-950/60 border border-emerald-800/60">
                <div className="flex items-center gap-3 mb-2">
                  <Sparkles className="w-6 h-6 text-amber-400" />
                  <h4 className="text-lg font-bold text-white">Under-Rail Hidden Glow</h4>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Continuous diffused LED channel lighting tucked seamlessly underneath the top rail for a glare-free architectural glow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. 5-Step Design-Build Process */}
      <section id="pd-process" className="pd-section">
        <div className="pd-wrap">
          <div className="pd-section-header">
            <div className="pd-eyebrow">
              <Ruler className="w-4 h-4" />
              Turnkey Execution
            </div>
            <h2 className="pd-section-title">The PrimeDeck Design-Build Journey</h2>
            <p className="pd-section-subtitle">
              From our first on-site backyard consultation to handing over your 50-year warranty certificate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-amber-600 transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-600/10 text-amber-700 font-extrabold flex items-center justify-center text-sm mb-4">
                  {step.step}
                </div>
                <h4 className="font-bold text-stone-900 text-base mb-2">{step.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. HOA & Permitting Fast-Track Validator */}
      <section id="pd-hoa" className="pd-section card-bg">
        <div className="pd-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="pd-eyebrow">
                <ShieldCheck className="w-4 h-4" />
                HOA &amp; Municipal Compliance
              </div>
              <h2 className="pd-section-title">We Handle 100% of HOA &amp; City Permits</h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Never worry about architectural review board meetings or city inspectors. Our in-house permitting team drafts all architectural plans, setbacks, and structural engineering stamps for fast-track approvals.
              </p>

              <div className="space-y-3 text-xs text-stone-700 mb-8">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Licensed General Contractors in Davidson, Williamson &amp; Sumner Counties</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Complete 3D color rendering packets for HOA architectural committee review</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                  <span>Property boundary survey &amp; easement setback verification</span>
                </div>
              </div>

              {/* HOA Form */}
              <form onSubmit={handleHoaCheck} className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter your Neighborhood or ZIP (e.g. Westhaven, 37064)..."
                  value={hoaInput}
                  onChange={(e) => setHoaInput(e.target.value)}
                  className="flex-grow bg-white border border-stone-300 rounded-xl px-4 py-3 text-xs outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-600/20"
                />
                <button type="submit" className="pd-btn pd-btn-teak">
                  Verify Approval Time
                </button>
              </form>

              {hoaResult && (
                <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{hoaResult}</span>
                </div>
              )}
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200">
              <img
                src={pergolaImg}
                alt="HOA compliant covered patio in Brentwood TN"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Multi-Step 3D Design Consultation Form */}
      <section id="pd-quote-form" className="pd-section">
        <div className="pd-wrap">
          <div className="pd-form-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="pd-eyebrow">
                  <Compass className="w-4 h-4" />
                  Complimentary 3D Consultation
                </div>
                <h2 className="pd-font-serif text-3xl font-bold text-stone-900 mb-4 leading-tight">
                  Bring Your Dream <br />
                  <span className="text-amber-700">Outdoors to Life</span>
                </h2>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Schedule an on-site design walk. We’ll measure your yard, review material swatches, and create a photorealistic 3D architectural rendering.
                </p>

                <div className="space-y-3.5 text-xs text-stone-700 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Free on-site backyard measurement &amp; terrain assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Full-color photorealistic 3D CAD rendering package</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Guaranteed fixed-price proposal with zero hidden allowances</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-4">
                  <Phone className="w-8 h-8 text-amber-700" />
                  <div>
                    <div className="text-xs text-stone-500">Franklin Studio Direct Line:</div>
                    <div className="text-base font-bold text-stone-900">(615) 555-DECK (3325)</div>
                  </div>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="lg:col-span-7">
                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center animate-in fade-in">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">Design Consultation Booked!</h3>
                    <p className="text-stone-600 text-sm mb-6">
                      Thank you, <strong>{formName || "Client"}</strong>. Our lead outdoor living architect will contact you within <strong>24 hours</strong> to schedule your on-site 3D walk.
                    </p>
                    <button
                      type="button"
                      className="pd-btn pd-btn-forest"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase text-stone-600 block mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Rachel Montgomery"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className="pd-input-field"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase text-stone-600 block mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. (615) 555-3325"
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          className="pd-input-field"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase text-stone-600 block mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. rachel@example.com"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          className="pd-input-field"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase text-stone-600 block mb-1.5">
                          Property Location / City *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Franklin, Brentwood, Belle Meade"
                          className="pd-input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase text-stone-600 block mb-1.5">
                        Backyard Vision, Target Dimensions &amp; Wishlist
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your desired deck size, pergola, outdoor kitchen, or elevation..."
                        value={formNotes}
                        onChange={(e) => setFormNotes(e.target.value)}
                        className="pd-input-field"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase text-stone-600 block mb-1.5">
                        Attach Yard Photos or Site Survey (Optional)
                      </label>
                      <div className="border border-dashed border-stone-300 rounded-xl p-6 text-center bg-stone-50 hover:bg-stone-100 transition-colors cursor-pointer">
                        <UploadCloud className="w-8 h-8 text-amber-700 mx-auto mb-2" />
                        <p className="text-xs text-stone-700 font-medium">
                          Drag &amp; drop backyard photos or plat maps, or <span className="text-amber-700 underline">browse</span>
                        </p>
                        <p className="text-[11px] text-stone-400 mt-1">Accepts PDF, JPG, PNG up to 25MB</p>
                        <input type="file" className="hidden" />
                      </div>
                    </div>

                    <button type="submit" className="pd-btn pd-btn-teak pd-btn-lg w-full mt-2">
                      Schedule 3D Design Consultation
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ Section */}
      <section id="pd-faq" className="pd-section card-bg">
        <div className="pd-wrap">
          <div className="pd-section-header">
            <div className="pd-eyebrow">
              <HelpCircle className="w-4 h-4" />
              Expert Answers
            </div>
            <h2 className="pd-section-title">Frequently Asked Questions</h2>
            <p className="pd-section-subtitle">
              Everything you need to know about composite decking, warranties, permits, and maintenance.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqsList.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`pd-faq-item ${isOpen ? "active" : ""}`}>
                  <button
                    type="button"
                    className="pd-faq-trigger"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className="w-5 h-5" />
                  </button>
                  {isOpen && <div className="pd-faq-body">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. Footer */}
      <footer className="pd-footer">
        <div className="pd-wrap">
          <div className="pd-footer-grid">
            <div className="pd-footer-col">
              <div className="pd-brand mb-4">
                <div className="pd-brand-icon">
                  <Compass className="w-5 h-5" />
                </div>
                <div className="pd-brand-text">
                  <h2 className="text-white">PRIMEDECK</h2>
                  <span>Builders • Outdoor Living</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Middle Tennessee’s premier custom composite deck and pergola architect. Trex Pro Platinum® and TimberTech Master Contractor.
              </p>
              <div className="text-xs text-amber-400 font-bold">
                Tennessee General Contractor License #79820
              </div>
            </div>

            <div className="pd-footer-col">
              <h4>Build Capabilities</h4>
              <ul className="pd-footer-links">
                <li><a href="#pd-services" onClick={(e) => scrollTo(e, "pd-services")}>Multi-Level Composite Decks</a></li>
                <li><a href="#pd-services" onClick={(e) => scrollTo(e, "pd-services")}>Motorized Louver Pergolas</a></li>
                <li><a href="#pd-services" onClick={(e) => scrollTo(e, "pd-services")}>Covered Patios &amp; Kitchens</a></li>
                <li><a href="#pd-services" onClick={(e) => scrollTo(e, "pd-services")}>Evolution Steel Joist Framing</a></li>
                <li><a href="#pd-services" onClick={(e) => scrollTo(e, "pd-services")}>Cable &amp; Glass Railing Systems</a></li>
              </ul>
            </div>

            <div className="pd-footer-col">
              <h4>Interactive Tools</h4>
              <ul className="pd-footer-links">
                <li><a href="#pd-studio" onClick={(e) => scrollTo(e, "pd-studio")}>3D Material Visualizer</a></li>
                <li><a href="#pd-configurator" onClick={(e) => scrollTo(e, "pd-configurator")}>Deck Cost Configurator</a></li>
                <li><a href="#pd-gallery" onClick={(e) => scrollTo(e, "pd-gallery")}>Daylight / Night Mode Gallery</a></li>
                <li><a href="#pd-hoa" onClick={(e) => scrollTo(e, "pd-hoa")}>HOA Permitting Checker</a></li>
                <li><a href="#pd-faq" onClick={(e) => scrollTo(e, "pd-faq")}>Decking FAQs</a></li>
              </ul>
            </div>

            <div className="pd-footer-col">
              <h4>Franklin Design Studio</h4>
              <div className="space-y-2 text-xs text-slate-400">
                <p>📍 7105 Crossroads Blvd, Suite 210<br />Franklin, TN 37067</p>
                <p>📞 Studio Direct: <strong className="text-white">(615) 555-DECK (3325)</strong></p>
                <p>✉️ design@primedeckbuilders.com</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-emerald-950 flex justify-between items-center flex-wrap gap-4 text-xs text-slate-500">
            <div>© {new Date().getFullYear()} PrimeDeck Builders Corp. All Rights Reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400">Terms of Service</a>
              <a href="#" className="hover:text-slate-400">50-Year Warranty Guide</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default PrimeDeckBuilders;
