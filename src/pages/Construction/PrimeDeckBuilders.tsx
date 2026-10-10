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

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // Close menu on ESC key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

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
      <style>{css}</style>
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
      <header className={`pd-header${scrolled ? " scrolled" : ""}`}>
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
          <nav className="pd-nav-links" aria-label="Main navigation">
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

          <div className="pd-nav-actions">
            <a
              href="#pd-quote-form"
              className="pd-btn pd-btn-teak pd-btn-sm pd-nav-cta"
              onClick={(e) => scrollTo(e, "pd-quote-form")}
            >
              Book 3D Design Walk
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              className="pd-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay Backdrop */}
      {menuOpen && (
        <div
          className="pd-mobile-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-In Drawer */}
      <div className={`pd-mobile-drawer${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="pd-mobile-drawer-header">
          <div className="pd-brand">
            <div className="pd-brand-icon">
              <Compass className="w-6 h-6" />
            </div>
            <div className="pd-brand-text">
              <h2>PRIMEDECK</h2>
              <span>Builders • Outdoor Living</span>
            </div>
          </div>
          <button
            type="button"
            className="pd-drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="pd-mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`pd-mobile-nav-link${activeNav === item.id ? " active" : ""}`}
              onClick={(e) => scrollTo(e, item.id)}
            >
              {item.label}
              <ArrowRight className="w-4 h-4" />
            </a>
          ))}
        </nav>

        <div className="pd-mobile-drawer-footer">
          <a
            href="#pd-quote-form"
            className="pd-btn pd-btn-teak"
            style={{ width: "100%" }}
            onClick={(e) => scrollTo(e, "pd-quote-form")}
          >
            Book 3D Design Walk
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:6155553325"
            className="pd-btn pd-btn-forest"
            style={{ width: "100%" }}
          >
            <Phone className="w-4 h-4" />
            (615) 555-DECK — Call Now
          </a>
        </div>
      </div>

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

const css = `
  /* PrimeDeck Builders - Warm Teak & Forest Sanctuary Design System & Theme Engine */

  .pd-site {
    --pd-forest: #071e19;
    --pd-forest-deep: #04120f;
    --pd-forest-surface: #0e2d26;
    --pd-forest-card: #133a31;
    
    --pd-teak: var(--theme-accent-primary, #c27034);
    --pd-teak-light: var(--theme-accent-primary-hover, #df8b4d);
    --pd-teak-dark: var(--theme-accent-dark, #9e4f1a);
    --pd-teak-glow: var(--theme-accent-glow, rgba(194, 112, 52, 0.28));
    --pd-teak-contrast: var(--theme-accent-contrast, #ffffff);
    
    --pd-sandalwood: #faf7f2;
    --pd-sandalwood-card: #f3ece1;
    --pd-sandalwood-border: rgba(120, 68, 33, 0.12);
    
    --pd-sage: #22c55e;
    --pd-sage-glow: rgba(34, 197, 94, 0.25);
    
    --pd-charcoal: #1c1917;
    --pd-text-dark: #1f2937;
    --pd-text-muted: #57534e;
    --pd-text-light: #f8fafc;
    --pd-text-light-muted: #cbd5e1;

    background-color: var(--pd-sandalwood);
    color: var(--pd-text-dark);
    font-family: 'Outfit', system-ui, -apple-system, sans-serif;
    line-height: 1.6;
    overflow-x: clip;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  /* Default / Original Preset: Authentic warm teak */
  .pd-site,
  :root[data-theme-preset="original"] .pd-site,
  [data-theme-preset="original"] .pd-site {
    --pd-teak: #c27034;
    --pd-teak-light: #df8b4d;
    --pd-teak-dark: #9e4f1a;
    --pd-teak-glow: rgba(194, 112, 52, 0.28);
    --pd-teak-contrast: #ffffff;
  }

  /* When a non-original color preset or custom accent is chosen */
  :root[data-theme-preset]:not([data-theme-preset="original"]) .pd-site,
  [data-theme-preset]:not([data-theme-preset="original"]) .pd-site {
    --pd-teak: var(--theme-accent-primary, #c27034);
    --pd-teak-light: var(--theme-accent-primary-hover, #df8b4d);
    --pd-teak-dark: var(--theme-accent-dark, #9e4f1a);
    --pd-teak-glow: var(--theme-accent-glow, rgba(194, 112, 52, 0.28));
    --pd-teak-contrast: var(--theme-accent-contrast, #ffffff);
  }

  /* Explicit Original Light Mood */
  :root[data-theme-mood="light"] .pd-site,
  [data-theme-mood="light"] .pd-site,
  html.light .pd-site,
  :root.light .pd-site,
  body.light .pd-site {
    --pd-forest: #071e19;
    --pd-forest-deep: #04120f;
    --pd-forest-surface: #0e2d26;
    --pd-forest-card: #133a31;
    --pd-sandalwood: #faf7f2;
    --pd-sandalwood-card: #f3ece1;
    --pd-sandalwood-border: rgba(120, 68, 33, 0.12);
    --pd-text-dark: #1f2937;
    --pd-text-muted: #57534e;
    background-color: var(--pd-sandalwood);
    color: var(--pd-text-dark);
  }

  :root[data-theme-mood="light"] .pd-site .pd-header,
  [data-theme-mood="light"] .pd-site .pd-header,
  html.light .pd-site .pd-header,
  :root.light .pd-site .pd-header,
  body.light .pd-site .pd-header {
    background: rgba(250, 247, 242, 0.95);
    border-bottom: 1px solid var(--pd-sandalwood-border);
  }

  :root[data-theme-mood="light"] .pd-site .pd-header.scrolled,
  [data-theme-mood="light"] .pd-site .pd-header.scrolled,
  html.light .pd-site .pd-header.scrolled,
  :root.light .pd-site .pd-header.scrolled,
  body.light .pd-site .pd-header.scrolled {
    background: rgba(250, 247, 242, 0.98);
    box-shadow: 0 10px 30px rgba(7, 30, 25, 0.08);
  }

  :root[data-theme-mood="light"] .pd-site .pd-brand-text h2,
  [data-theme-mood="light"] .pd-site .pd-brand-text h2,
  html.light .pd-site .pd-brand-text h2,
  :root.light .pd-site .pd-brand-text h2,
  body.light .pd-site .pd-brand-text h2 {
    color: var(--pd-forest);
  }

  :root[data-theme-mood="light"] .pd-site .pd-nav-links a,
  [data-theme-mood="light"] .pd-site .pd-nav-links a,
  html.light .pd-site .pd-nav-links a,
  :root.light .pd-site .pd-nav-links a,
  body.light .pd-site .pd-nav-links a {
    color: var(--pd-text-muted);
  }

  :root[data-theme-mood="light"] .pd-site .pd-nav-links a:hover,
  :root[data-theme-mood="light"] .pd-site .pd-nav-links a.active,
  [data-theme-mood="light"] .pd-site .pd-nav-links a:hover,
  [data-theme-mood="light"] .pd-site .pd-nav-links a.active,
  html.light .pd-site .pd-nav-links a:hover,
  html.light .pd-site .pd-nav-links a.active,
  :root.light .pd-site .pd-nav-links a:hover,
  :root.light .pd-site .pd-nav-links a.active,
  body.light .pd-site .pd-nav-links a:hover,
  body.light .pd-site .pd-nav-links a.active {
    color: var(--pd-forest);
  }

  :root[data-theme-mood="light"] .pd-site .pd-stats-banner,
  [data-theme-mood="light"] .pd-site .pd-stats-banner,
  html.light .pd-site .pd-stats-banner,
  :root.light .pd-site .pd-stats-banner,
  body.light .pd-site .pd-stats-banner {
    background: #ffffff;
    border-bottom: 1px solid var(--pd-sandalwood-border);
  }

  :root[data-theme-mood="light"] .pd-site .pd-stat-box h3,
  [data-theme-mood="light"] .pd-site .pd-stat-box h3,
  html.light .pd-site .pd-stat-box h3,
  :root.light .pd-site .pd-stat-box h3,
  body.light .pd-site .pd-stat-box h3 {
    color: var(--pd-forest);
  }

  :root[data-theme-mood="light"] .pd-site .pd-stat-box p,
  [data-theme-mood="light"] .pd-site .pd-stat-box p,
  html.light .pd-site .pd-stat-box p,
  :root.light .pd-site .pd-stat-box p,
  body.light .pd-site .pd-stat-box p {
    color: var(--pd-text-muted);
  }

  :root[data-theme-mood="light"] .pd-site .pd-material-studio-card,
  :root[data-theme-mood="light"] .pd-site .pd-service-card,
  :root[data-theme-mood="light"] .pd-site .pd-form-card,
  :root[data-theme-mood="light"] .pd-site .pd-faq-item,
  [data-theme-mood="light"] .pd-site .pd-material-studio-card,
  [data-theme-mood="light"] .pd-site .pd-service-card,
  [data-theme-mood="light"] .pd-site .pd-form-card,
  [data-theme-mood="light"] .pd-site .pd-faq-item,
  html.light .pd-site .pd-material-studio-card,
  html.light .pd-site .pd-service-card,
  html.light .pd-site .pd-form-card,
  html.light .pd-site .pd-faq-item,
  :root.light .pd-site .pd-material-studio-card,
  :root.light .pd-site .pd-service-card,
  :root.light .pd-site .pd-form-card,
  :root.light .pd-site .pd-faq-item,
  body.light .pd-site .pd-material-studio-card,
  body.light .pd-site .pd-service-card,
  body.light .pd-site .pd-form-card,
  body.light .pd-site .pd-faq-item {
    background: #ffffff;
    border: 1px solid var(--pd-sandalwood-border);
    box-shadow: 0 4px 20px rgba(7, 30, 25, 0.04);
  }

  :root[data-theme-mood="light"] .pd-site .pd-swatch-btn,
  [data-theme-mood="light"] .pd-site .pd-swatch-btn,
  html.light .pd-site .pd-swatch-btn,
  :root.light .pd-site .pd-swatch-btn,
  body.light .pd-site .pd-swatch-btn {
    background: var(--pd-sandalwood);
    border: 1px solid var(--pd-sandalwood-border);
  }

  :root[data-theme-mood="light"] .pd-site .pd-swatch-info h4,
  [data-theme-mood="light"] .pd-site .pd-swatch-info h4,
  html.light .pd-site .pd-swatch-info h4,
  :root.light .pd-site .pd-swatch-info h4,
  body.light .pd-site .pd-swatch-info h4 {
    color: var(--pd-forest);
  }

  :root[data-theme-mood="light"] .pd-site .pd-swatch-info span,
  [data-theme-mood="light"] .pd-site .pd-swatch-info span,
  html.light .pd-site .pd-swatch-info span,
  :root.light .pd-site .pd-swatch-info span,
  body.light .pd-site .pd-swatch-info span {
    color: var(--pd-text-muted);
  }

  :root[data-theme-mood="light"] .pd-site .pd-section-title,
  :root[data-theme-mood="light"] .pd-site .pd-service-body h3,
  :root[data-theme-mood="light"] .pd-site .pd-faq-trigger,
  [data-theme-mood="light"] .pd-site .pd-section-title,
  [data-theme-mood="light"] .pd-site .pd-service-body h3,
  [data-theme-mood="light"] .pd-site .pd-faq-trigger,
  html.light .pd-site .pd-section-title,
  html.light .pd-site .pd-service-body h3,
  html.light .pd-site .pd-faq-trigger,
  :root.light .pd-site .pd-section-title,
  :root.light .pd-site .pd-service-body h3,
  :root.light .pd-site .pd-faq-trigger,
  body.light .pd-site .pd-section-title,
  body.light .pd-site .pd-service-body h3,
  body.light .pd-site .pd-faq-trigger {
    color: var(--pd-forest);
  }

  :root[data-theme-mood="light"] .pd-site .pd-input-field,
  [data-theme-mood="light"] .pd-site .pd-input-field,
  html.light .pd-site .pd-input-field,
  :root.light .pd-site .pd-input-field,
  body.light .pd-site .pd-input-field {
    background: var(--pd-sandalwood);
    border: 1px solid var(--pd-sandalwood-border);
    color: var(--pd-text-dark);
  }

  /* Explicit Original Dark Mood: Authentic Midnight Forest Sanctuary */
  :root[data-theme-mood="dark"] .pd-site,
  [data-theme-mood="dark"] .pd-site,
  html.dark .pd-site,
  :root.dark .pd-site,
  body.dark .pd-site,
  [data-theme-bg-mode="custom"] .pd-site {
    --pd-forest: #071e19;
    --pd-forest-deep: #04120f;
    --pd-forest-surface: #0e2d26;
    --pd-forest-card: #133a31;

    --pd-sandalwood: #04120f;
    --pd-sandalwood-card: #08211b;
    --pd-sandalwood-border: rgba(194, 112, 52, 0.22);

    --pd-text-dark: #f8fafc;
    --pd-text-muted: #94a3b8;
    background-color: var(--pd-sandalwood);
    color: var(--pd-text-dark);
  }

  :root[data-theme-mood="dark"] .pd-site .pd-header,
  [data-theme-mood="dark"] .pd-site .pd-header,
  html.dark .pd-site .pd-header,
  :root.dark .pd-site .pd-header,
  body.dark .pd-site .pd-header,
  [data-theme-bg-mode="custom"] .pd-site .pd-header {
    background: rgba(7, 23, 20, 0.96);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  :root[data-theme-mood="dark"] .pd-site .pd-header.scrolled,
  [data-theme-mood="dark"] .pd-site .pd-header.scrolled,
  html.dark .pd-site .pd-header.scrolled,
  :root.dark .pd-site .pd-header.scrolled,
  body.dark .pd-site .pd-header.scrolled,
  [data-theme-bg-mode="custom"] .pd-site .pd-header.scrolled {
    background: rgba(7, 23, 20, 0.98);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.45);
  }

  :root[data-theme-mood="dark"] .pd-site .pd-brand-text h2,
  [data-theme-mood="dark"] .pd-site .pd-brand-text h2,
  html.dark .pd-site .pd-brand-text h2,
  :root.dark .pd-site .pd-brand-text h2,
  body.dark .pd-site .pd-brand-text h2,
  [data-theme-bg-mode="custom"] .pd-site .pd-brand-text h2 {
    color: #f8fafc;
  }

  :root[data-theme-mood="dark"] .pd-site .pd-nav-links a,
  [data-theme-mood="dark"] .pd-site .pd-nav-links a,
  html.dark .pd-site .pd-nav-links a,
  :root.dark .pd-site .pd-nav-links a,
  body.dark .pd-site .pd-nav-links a,
  [data-theme-bg-mode="custom"] .pd-site .pd-nav-links a {
    color: #cbd5e1;
  }

  :root[data-theme-mood="dark"] .pd-site .pd-nav-links a:hover,
  :root[data-theme-mood="dark"] .pd-site .pd-nav-links a.active,
  [data-theme-mood="dark"] .pd-site .pd-nav-links a:hover,
  [data-theme-mood="dark"] .pd-site .pd-nav-links a.active,
  html.dark .pd-site .pd-nav-links a:hover,
  html.dark .pd-site .pd-nav-links a.active,
  :root.dark .pd-site .pd-nav-links a:hover,
  :root.dark .pd-site .pd-nav-links a.active,
  body.dark .pd-site .pd-nav-links a:hover,
  body.dark .pd-site .pd-nav-links a.active,
  [data-theme-bg-mode="custom"] .pd-site .pd-nav-links a:hover,
  [data-theme-bg-mode="custom"] .pd-site .pd-nav-links a.active {
    color: #ffffff;
  }

  :root[data-theme-mood="dark"] .pd-site .pd-hamburger,
  [data-theme-mood="dark"] .pd-site .pd-hamburger,
  html.dark .pd-site .pd-hamburger,
  :root.dark .pd-site .pd-hamburger,
  body.dark .pd-site .pd-hamburger,
  [data-theme-bg-mode="custom"] .pd-site .pd-hamburger {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
    color: #ffffff;
  }

  :root[data-theme-mood="dark"] .pd-site .pd-mobile-drawer,
  [data-theme-mood="dark"] .pd-site .pd-mobile-drawer,
  html.dark .pd-site .pd-mobile-drawer,
  :root.dark .pd-site .pd-mobile-drawer,
  body.dark .pd-site .pd-mobile-drawer,
  [data-theme-bg-mode="custom"] .pd-site .pd-mobile-drawer {
    background: #071f1a;
    border-left-color: rgba(255, 255, 255, 0.1);
  }

  :root[data-theme-mood="dark"] .pd-site .pd-mobile-drawer-header,
  :root[data-theme-mood="dark"] .pd-site .pd-mobile-drawer-footer,
  [data-theme-mood="dark"] .pd-site .pd-mobile-drawer-header,
  [data-theme-mood="dark"] .pd-site .pd-mobile-drawer-footer,
  html.dark .pd-site .pd-mobile-drawer-header,
  html.dark .pd-site .pd-mobile-drawer-footer,
  :root.dark .pd-site .pd-mobile-drawer-header,
  :root.dark .pd-site .pd-mobile-drawer-footer,
  body.dark .pd-site .pd-mobile-drawer-header,
  body.dark .pd-site .pd-mobile-drawer-footer,
  [data-theme-bg-mode="custom"] .pd-site .pd-mobile-drawer-header,
  [data-theme-bg-mode="custom"] .pd-site .pd-mobile-drawer-footer {
    background: #051814;
    border-color: rgba(255, 255, 255, 0.1);
  }

  :root[data-theme-mood="dark"] .pd-site .pd-mobile-nav,
  [data-theme-mood="dark"] .pd-site .pd-mobile-nav,
  html.dark .pd-site .pd-mobile-nav,
  :root.dark .pd-site .pd-mobile-nav,
  body.dark .pd-site .pd-mobile-nav,
  [data-theme-bg-mode="custom"] .pd-site .pd-mobile-nav {
    background: #071f1a;
  }

  :root[data-theme-mood="dark"] .pd-site .pd-drawer-close,
  [data-theme-mood="dark"] .pd-site .pd-drawer-close,
  html.dark .pd-site .pd-drawer-close,
  :root.dark .pd-site .pd-drawer-close,
  body.dark .pd-site .pd-drawer-close,
  [data-theme-bg-mode="custom"] .pd-site .pd-drawer-close {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
    color: #ffffff;
  }

  :root[data-theme-mood="dark"] .pd-site .pd-mobile-nav-link,
  [data-theme-mood="dark"] .pd-site .pd-mobile-nav-link,
  html.dark .pd-site .pd-mobile-nav-link,
  :root.dark .pd-site .pd-mobile-nav-link,
  body.dark .pd-site .pd-mobile-nav-link,
  [data-theme-bg-mode="custom"] .pd-site .pd-mobile-nav-link {
    color: #cbd5e1;
    border-color: rgba(255, 255, 255, 0.08);
  }

  :root[data-theme-mood="dark"] .pd-site .pd-mobile-nav-link:hover,
  [data-theme-mood="dark"] .pd-site .pd-mobile-nav-link:hover,
  html.dark .pd-site .pd-mobile-nav-link:hover,
  :root.dark .pd-site .pd-mobile-nav-link:hover,
  body.dark .pd-site .pd-mobile-nav-link:hover,
  [data-theme-bg-mode="custom"] .pd-site .pd-mobile-nav-link:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.06);
  }

  :root[data-theme-mood="dark"] .pd-site .pd-stats-banner,
  [data-theme-mood="dark"] .pd-site .pd-stats-banner,
  html.dark .pd-site .pd-stats-banner,
  :root.dark .pd-site .pd-stats-banner,
  body.dark .pd-site .pd-stats-banner,
  [data-theme-bg-mode="custom"] .pd-site .pd-stats-banner {
    background: #09211c;
    border-color: rgba(255, 255, 255, 0.1);
  }

  :root[data-theme-mood="dark"] .pd-site .pd-stat-box,
  [data-theme-mood="dark"] .pd-site .pd-stat-box,
  html.dark .pd-site .pd-stat-box,
  :root.dark .pd-site .pd-stat-box,
  body.dark .pd-site .pd-stat-box,
  [data-theme-bg-mode="custom"] .pd-site .pd-stat-box {
    border-color: rgba(255, 255, 255, 0.1);
  }

  :root[data-theme-mood="dark"] .pd-site .pd-stat-box h3,
  [data-theme-mood="dark"] .pd-site .pd-stat-box h3,
  html.dark .pd-site .pd-stat-box h3,
  :root.dark .pd-site .pd-stat-box h3,
  body.dark .pd-site .pd-stat-box h3,
  [data-theme-bg-mode="custom"] .pd-site .pd-stat-box h3 {
    color: #f8fafc;
  }

  :root[data-theme-mood="dark"] .pd-site .pd-material-studio-card,
  :root[data-theme-mood="dark"] .pd-site .pd-service-card,
  :root[data-theme-mood="dark"] .pd-site .pd-form-card,
  :root[data-theme-mood="dark"] .pd-site .pd-faq-item,
  [data-theme-mood="dark"] .pd-site .pd-material-studio-card,
  [data-theme-mood="dark"] .pd-site .pd-service-card,
  [data-theme-mood="dark"] .pd-site .pd-form-card,
  [data-theme-mood="dark"] .pd-site .pd-faq-item,
  html.dark .pd-site .pd-material-studio-card,
  html.dark .pd-site .pd-service-card,
  html.dark .pd-site .pd-form-card,
  html.dark .pd-site .pd-faq-item,
  :root.dark .pd-site .pd-material-studio-card,
  :root.dark .pd-site .pd-service-card,
  :root.dark .pd-site .pd-form-card,
  :root.dark .pd-site .pd-faq-item,
  body.dark .pd-site .pd-material-studio-card,
  body.dark .pd-site .pd-service-card,
  body.dark .pd-site .pd-form-card,
  body.dark .pd-site .pd-faq-item,
  [data-theme-bg-mode="custom"] .pd-site .pd-material-studio-card,
  [data-theme-bg-mode="custom"] .pd-site .pd-service-card,
  [data-theme-bg-mode="custom"] .pd-site .pd-form-card,
  [data-theme-bg-mode="custom"] .pd-site .pd-faq-item {
    background: #0b241f;
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  }

  :root[data-theme-mood="dark"] .pd-site .pd-swatch-btn,
  [data-theme-mood="dark"] .pd-site .pd-swatch-btn,
  html.dark .pd-site .pd-swatch-btn,
  :root.dark .pd-site .pd-swatch-btn,
  body.dark .pd-site .pd-swatch-btn,
  [data-theme-bg-mode="custom"] .pd-site .pd-swatch-btn {
    background: #0e2d27;
    border-color: rgba(255, 255, 255, 0.1);
  }

  :root[data-theme-mood="dark"] .pd-site .pd-swatch-btn:hover,
  [data-theme-mood="dark"] .pd-site .pd-swatch-btn:hover,
  html.dark .pd-site .pd-swatch-btn:hover,
  :root.dark .pd-site .pd-swatch-btn:hover,
  body.dark .pd-site .pd-swatch-btn:hover,
  [data-theme-bg-mode="custom"] .pd-site .pd-swatch-btn:hover {
    background: #143e35;
  }

  :root[data-theme-mood="dark"] .pd-site .pd-swatch-info h4,
  [data-theme-mood="dark"] .pd-site .pd-swatch-info h4,
  html.dark .pd-site .pd-swatch-info h4,
  :root.dark .pd-site .pd-swatch-info h4,
  body.dark .pd-site .pd-swatch-info h4,
  [data-theme-bg-mode="custom"] .pd-site .pd-swatch-info h4 {
    color: #f8fafc;
  }

  :root[data-theme-mood="dark"] .pd-site .pd-railing-btn,
  [data-theme-mood="dark"] .pd-site .pd-railing-btn,
  html.dark .pd-site .pd-railing-btn,
  :root.dark .pd-site .pd-railing-btn,
  body.dark .pd-site .pd-railing-btn,
  [data-theme-bg-mode="custom"] .pd-site .pd-railing-btn {
    background: #0e2d27;
    border-color: rgba(255, 255, 255, 0.1);
    color: #cbd5e1;
  }

  :root[data-theme-mood="dark"] .pd-site .pd-section-title,
  :root[data-theme-mood="dark"] .pd-site .pd-service-body h3,
  :root[data-theme-mood="dark"] .pd-site .pd-faq-trigger,
  [data-theme-mood="dark"] .pd-site .pd-section-title,
  [data-theme-mood="dark"] .pd-site .pd-service-body h3,
  [data-theme-mood="dark"] .pd-site .pd-faq-trigger,
  html.dark .pd-site .pd-section-title,
  html.dark .pd-site .pd-service-body h3,
  html.dark .pd-site .pd-faq-trigger,
  :root.dark .pd-site .pd-section-title,
  :root.dark .pd-site .pd-service-body h3,
  :root.dark .pd-site .pd-faq-trigger,
  body.dark .pd-site .pd-section-title,
  body.dark .pd-site .pd-service-body h3,
  body.dark .pd-site .pd-faq-trigger,
  [data-theme-bg-mode="custom"] .pd-site .pd-section-title,
  [data-theme-bg-mode="custom"] .pd-site .pd-service-body h3,
  [data-theme-bg-mode="custom"] .pd-site .pd-faq-trigger {
    color: #f8fafc;
  }

  :root[data-theme-mood="dark"] .pd-site .pd-input-field,
  [data-theme-mood="dark"] .pd-site .pd-input-field,
  html.dark .pd-site .pd-input-field,
  :root.dark .pd-site .pd-input-field,
  body.dark .pd-site .pd-input-field,
  [data-theme-bg-mode="custom"] .pd-site .pd-input-field {
    background: #081d19;
    border-color: rgba(255, 255, 255, 0.12);
    color: #ffffff;
  }

  :root[data-theme-mood="dark"] .pd-site .pd-btn-outline,
  [data-theme-mood="dark"] .pd-site .pd-btn-outline,
  html.dark .pd-site .pd-btn-outline,
  :root.dark .pd-site .pd-btn-outline,
  body.dark .pd-site .pd-btn-outline,
  [data-theme-bg-mode="custom"] .pd-site .pd-btn-outline {
    border-color: rgba(255, 255, 255, 0.3);
    color: #f8fafc;
  }

  :root[data-theme-mood="dark"] .pd-site .pd-btn-outline:hover,
  [data-theme-mood="dark"] .pd-site .pd-btn-outline:hover,
  html.dark .pd-site .pd-btn-outline:hover,
  :root.dark .pd-site .pd-btn-outline:hover,
  body.dark .pd-site .pd-btn-outline:hover,
  [data-theme-bg-mode="custom"] .pd-site .pd-btn-outline:hover {
    background: rgba(255, 255, 255, 0.12);
    color: #ffffff;
  }

  .pd-site * {
    box-sizing: border-box;
  }

  .pd-site a {
    text-decoration: none;
    color: inherit;
  }

  .pd-font-serif {
    font-family: 'Playfair Display', Georgia, serif;
  }

  .pd-wrap {
    width: min(1380px, calc(100% - 64px));
    margin-inline: auto;
  }

  @media (max-width: 640px) {
    .pd-wrap {
      width: calc(100% - 32px);
    }
  }

  /* Animations */
  @keyframes teakPulse {
    0%, 100% { opacity: 1; transform: scale(1); }
    50% { opacity: 0.6; transform: scale(1.08); }
  }

  @keyframes warmGlow {
    0%, 100% { box-shadow: 0 0 20px rgba(194, 112, 52, 0.2); }
    50% { box-shadow: 0 0 35px rgba(194, 112, 52, 0.45); }
  }

  .pd-pulse-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--pd-sage);
    box-shadow: 0 0 12px var(--pd-sage);
    animation: teakPulse 2s infinite;
    display: inline-block;
  }

  /* 1. Top Builder Ribbon */
  .pd-ribbon {
    background: var(--pd-forest-deep);
    color: var(--pd-text-light-muted);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
    padding: 8px 0;
    font-size: 0.8125rem;
    transition: background 0.25s ease;
  }

  .pd-ribbon-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .pd-ribbon-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    background: rgba(194, 112, 52, 0.15);
    border: 1px solid rgba(194, 112, 52, 0.3);
    padding: 2px 10px;
    border-radius: 9999px;
    color: var(--pd-teak-light);
    font-weight: 700;
    font-size: 0.75rem;
  }

  /* 2. Main Sticky Navigation */
  .pd-header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(250, 247, 242, 0.95);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--pd-sandalwood-border);
    transition: all 0.3s ease;
  }

  .pd-header.scrolled {
    background: rgba(250, 247, 242, 0.98);
    box-shadow: 0 10px 30px rgba(7, 30, 25, 0.08);
  }

  .pd-nav {
    height: 86px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pd-brand {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .pd-brand-icon {
    width: 44px;
    height: 44px;
    background: linear-gradient(135deg, var(--pd-teak) 0%, var(--pd-teak-dark) 100%);
    color: #ffffff;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 16px var(--pd-teak-glow);
    transition: background 0.25s ease, box-shadow 0.25s ease;
  }

  .pd-brand-text h2 {
    font-family: 'Playfair Display', serif;
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--pd-forest);
    margin: 0;
    line-height: 1;
    transition: color 0.25s ease;
  }

  .pd-brand-text span {
    font-size: 0.6875rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.18em;
    color: var(--pd-teak);
    transition: color 0.25s ease;
  }

  .pd-nav-links {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .pd-nav-links a {
    font-size: 0.9375rem;
    font-weight: 600;
    color: var(--pd-text-muted);
    transition: color 0.2s ease;
    position: relative;
    padding: 8px 0;
  }

  .pd-nav-links a:hover,
  .pd-nav-links a.active {
    color: var(--pd-forest);
  }

  .pd-nav-links a.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--pd-teak);
    border-radius: 2px;
  }

  /* Buttons */
  .pd-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    font-weight: 700;
    border-radius: 10px;
    font-size: 0.9375rem;
    padding: 13px 26px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    white-space: nowrap;
    line-height: 1;
  }

  .pd-btn-teak {
    background: linear-gradient(135deg, var(--pd-teak) 0%, var(--pd-teak-dark) 100%);
    color: var(--pd-teak-contrast);
    box-shadow: 0 4px 18px var(--pd-teak-glow);
  }

  .pd-btn-teak:hover {
    background: linear-gradient(135deg, var(--pd-teak-light) 0%, var(--pd-teak) 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 26px var(--pd-teak-glow);
  }

  .pd-btn-forest {
    background: var(--pd-forest);
    color: #ffffff;
  }

  .pd-btn-forest:hover {
    background: var(--pd-forest-surface);
    transform: translateY(-2px);
  }

  .pd-btn-outline {
    background: transparent;
    border: 1px solid var(--pd-forest);
    color: var(--pd-forest);
  }

  .pd-btn-outline:hover {
    background: var(--pd-forest);
    color: #ffffff;
    transform: translateY(-2px);
  }

  .pd-btn-sm {
    padding: 9px 18px;
    font-size: 0.8125rem;
  }

  .pd-btn-lg {
    padding: 16px 34px;
    font-size: 1.0625rem;
  }

  /* Nav actions container */
  .pd-nav-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }

  /* Hamburger button */
  .pd-hamburger {
    display: none;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: rgba(7, 30, 25, 0.07);
    border: 1px solid rgba(194, 112, 52, 0.3);
    color: var(--pd-forest);
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease;
  }

  .pd-hamburger:hover {
    background: rgba(194, 112, 52, 0.12);
    border-color: var(--pd-teak);
  }

  /* Mobile overlay backdrop */
  .pd-mobile-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.55);
    backdrop-filter: blur(4px);
    z-index: 98;
    animation: pdFadeIn 0.22s ease;
  }

  @keyframes pdFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Mobile slide-in drawer */
  .pd-mobile-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(380px, 90vw);
    background: var(--pd-sandalwood);
    border-left: 1px solid var(--pd-sandalwood-border);
    box-shadow: none;
    z-index: 99;
    display: flex;
    flex-direction: column;
    transform: translateX(100%);
    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease;
  }

  .pd-mobile-drawer.is-open {
    transform: translateX(0);
    box-shadow: -24px 0 70px rgba(7, 30, 25, 0.25);
  }

  .pd-mobile-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    border-bottom: 1px solid var(--pd-sandalwood-border);
    flex-shrink: 0;
    background: #ffffff;
    transition: background 0.25s ease;
  }

  .pd-drawer-close {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: rgba(7, 30, 25, 0.06);
    border: 1px solid var(--pd-sandalwood-border);
    color: var(--pd-forest);
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease;
  }

  .pd-drawer-close:hover {
    background: rgba(194, 112, 52, 0.1);
    border-color: var(--pd-teak);
  }

  /* Mobile nav links list */
  .pd-mobile-nav {
    flex: 1;
    overflow-y: auto;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
    background: var(--pd-sandalwood);
    transition: background 0.25s ease;
  }

  .pd-mobile-nav-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 24px;
    font-size: 1rem;
    font-weight: 700;
    color: var(--pd-text-muted);
    border-bottom: 1px solid var(--pd-sandalwood-border);
    transition: all 0.18s ease;
  }

  .pd-mobile-nav-link svg {
    opacity: 0.3;
    transition: opacity 0.18s ease, transform 0.18s ease;
  }

  .pd-mobile-nav-link:hover {
    color: var(--pd-forest);
    background: rgba(194, 112, 52, 0.05);
  }

  .pd-mobile-nav-link.active {
    color: var(--pd-teak);
    border-left: 3px solid var(--pd-teak);
    padding-left: 21px;
    background: rgba(194, 112, 52, 0.06);
  }

  .pd-mobile-nav-link:hover svg,
  .pd-mobile-nav-link.active svg {
    opacity: 1;
    transform: translateX(3px);
  }

  /* Mobile drawer footer */
  .pd-mobile-drawer-footer {
    padding: 24px;
    border-top: 1px solid var(--pd-sandalwood-border);
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-shrink: 0;
    background: #ffffff;
    transition: background 0.25s ease;
  }

  /* 3. Hero Section - Warm Architectural Sanctuary */
  .pd-hero-wrap {
    position: relative;
    min-height: 680px;
    display: flex;
    align-items: center;
    background: var(--pd-forest-deep);
    color: #ffffff;
    overflow: hidden;
  }

  .pd-hero-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.45;
    filter: saturate(1.2);
  }

  .pd-hero-gradient {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(4, 18, 15, 0.95) 0%,
      rgba(4, 18, 15, 0.8) 45%,
      rgba(4, 18, 15, 0.35) 80%,
      rgba(4, 18, 15, 0.15) 100%
    );
  }

  .pd-hero-content {
    position: relative;
    z-index: 2;
    max-width: 740px;
    padding: 80px 0;
  }

  .pd-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(194, 112, 52, 0.18);
    border: 1px solid rgba(194, 112, 52, 0.4);
    color: var(--pd-teak-light);
    padding: 6px 14px;
    border-radius: 9999px;
    font-size: 0.8125rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    margin-bottom: 24px;
  }

  .pd-hero-h1 {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.8rem, 4.6vw, 4.4rem);
    font-weight: 800;
    line-height: 1.08;
    letter-spacing: -0.02em;
    margin-bottom: 24px;
    color: #ffffff;
  }

  .pd-hero-h1 span {
    color: var(--pd-teak-light);
    font-style: italic;
  }

  .pd-hero-desc {
    font-size: 1.125rem;
    color: var(--pd-text-light-muted);
    line-height: 1.75;
    margin-bottom: 36px;
  }

  .pd-hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }

  /* Floating Trust Badge */
  .pd-hero-floating-card {
    position: absolute;
    bottom: 40px;
    right: 60px;
    background: rgba(7, 30, 25, 0.9);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(194, 112, 52, 0.3);
    border-radius: 20px;
    padding: 22px 26px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
    display: flex;
    align-items: center;
    gap: 16px;
    z-index: 3;
  }

  /* 4. Stats Banner */
  .pd-stats-banner {
    background: #ffffff;
    border-bottom: 1px solid var(--pd-sandalwood-border);
    transition: background 0.25s ease, border-color 0.25s ease;
  }

  .pd-stats-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  .pd-stat-box {
    padding: 30px 24px;
    display: flex;
    align-items: center;
    gap: 16px;
    border-right: 1px solid var(--pd-sandalwood-border);
    transition: border-color 0.25s ease;
  }

  .pd-stat-box:last-child {
    border-right: none;
  }

  .pd-stat-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(194, 112, 52, 0.1);
    color: var(--pd-teak);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    transition: color 0.25s ease;
  }

  .pd-stat-box h3 {
    font-size: 1.65rem;
    font-weight: 800;
    color: var(--pd-forest);
    line-height: 1;
    margin-bottom: 4px;
    transition: color 0.25s ease;
  }

  .pd-stat-box p {
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--pd-text-muted);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0;
    transition: color 0.25s ease;
  }

  /* Section Header */
  .pd-section {
    padding: 96px 0;
    position: relative;
    transition: background-color 0.25s ease;
  }

  .pd-section.forest-bg {
    background-color: var(--pd-forest);
    color: #ffffff;
  }

  .pd-section.card-bg {
    background-color: var(--pd-sandalwood-card);
  }

  .pd-section-header {
    text-align: center;
    max-width: 740px;
    margin: 0 auto 60px;
  }

  .pd-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.8125rem;
    font-weight: 800;
    color: var(--pd-teak);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 14px;
    transition: color 0.25s ease;
  }

  .pd-section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(2.2rem, 3.6vw, 3rem);
    font-weight: 800;
    color: var(--pd-forest);
    letter-spacing: -0.01em;
    margin-bottom: 16px;
    transition: color 0.25s ease;
  }

  .pd-section.forest-bg .pd-section-title {
    color: #ffffff;
  }

  .pd-section-subtitle {
    font-size: 1.0625rem;
    color: var(--pd-text-muted);
    line-height: 1.7;
    transition: color 0.25s ease;
  }

  .pd-section.forest-bg .pd-section-subtitle {
    color: var(--pd-text-light-muted);
  }

  /* 1. Interactive 3D Deck Material Visualizer */
  .pd-material-studio-card {
    background: #ffffff;
    border-radius: 24px;
    border: 1px solid var(--pd-sandalwood-border);
    box-shadow: 0 20px 50px rgba(7, 30, 25, 0.06);
    padding: 48px;
    transition: background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .pd-studio-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
  }

  .pd-swatch-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-bottom: 24px;
  }

  .pd-swatch-btn {
    background: var(--pd-sandalwood);
    border: 1px solid var(--pd-sandalwood-border);
    border-radius: 14px;
    padding: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    align-items: center;
    gap: 14px;
    text-align: left;
  }

  .pd-swatch-btn:hover {
    border-color: var(--pd-teak);
    background: #ffffff;
  }

  .pd-swatch-btn.active {
    background: rgba(194, 112, 52, 0.08);
    border-color: var(--pd-teak);
    box-shadow: 0 0 0 2px var(--pd-teak);
  }

  .pd-swatch-color {
    width: 38px;
    height: 38px;
    border-radius: 8px;
    flex-shrink: 0;
    border: 2px solid rgba(0, 0, 0, 0.1);
  }

  .pd-swatch-info h4 {
    font-size: 0.9375rem;
    font-weight: 700;
    color: var(--pd-forest);
    margin: 0 0 2px 0;
    transition: color 0.25s ease;
  }

  .pd-swatch-info span {
    font-size: 0.75rem;
    color: var(--pd-text-muted);
    transition: color 0.25s ease;
  }

  /* Railing Options */
  .pd-railing-chips {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
  }

  .pd-railing-btn {
    background: var(--pd-sandalwood);
    border: 1px solid var(--pd-sandalwood-border);
    border-radius: 9999px;
    padding: 8px 16px;
    font-size: 0.8125rem;
    font-weight: 700;
    color: var(--pd-text-muted);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .pd-railing-btn.active {
    background: var(--pd-forest);
    color: #ffffff;
    border-color: var(--pd-forest);
  }

  /* Material Preview Display Card */
  .pd-material-preview-box {
    background: var(--pd-forest);
    border-radius: 20px;
    padding: 36px;
    color: #ffffff;
    position: relative;
    overflow: hidden;
  }

  .pd-material-preview-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--pd-teak), #fbbf24);
  }

  .pd-spec-meter-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    font-size: 0.8125rem;
  }

  /* 2. Interactive Cost Configurator */
  .pd-configurator-box {
    background: var(--pd-forest-surface);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 48px;
    color: #ffffff;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    transition: background 0.25s ease, border-color 0.25s ease;
  }

  .pd-config-grid {
    display: grid;
    grid-template-columns: 1.25fr 0.75fr;
    gap: 48px;
    align-items: center;
  }

  .pd-size-chips-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
  }

  .pd-size-chip {
    background: var(--pd-forest-card);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 14px;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
  }

  .pd-size-chip:hover {
    border-color: var(--pd-teak);
  }

  .pd-size-chip.active {
    border-color: var(--pd-teak);
    background: rgba(194, 112, 52, 0.2);
    box-shadow: 0 0 0 2px var(--pd-teak);
  }

  .pd-upgrade-checkbox-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .pd-upgrade-checkbox {
    background: var(--pd-forest-card);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 12px 14px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.8125rem;
    font-weight: 600;
    transition: all 0.2s ease;
  }

  .pd-upgrade-checkbox.checked {
    border-color: var(--pd-teak);
    background: rgba(194, 112, 52, 0.2);
  }

  /* Services Grid (Sanctuary Editorial Cards) */
  .pd-services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .pd-service-card {
    background: #ffffff;
    border-radius: 20px;
    border: 1px solid var(--pd-sandalwood-border);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    box-shadow: 0 4px 20px rgba(7, 30, 25, 0.04);
  }

  .pd-service-card:hover {
    transform: translateY(-6px);
    border-color: var(--pd-teak);
    box-shadow: 0 20px 40px rgba(7, 30, 25, 0.08);
  }

  .pd-service-media {
    height: 230px;
    position: relative;
    overflow: hidden;
  }

  .pd-service-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .pd-service-card:hover .pd-service-media img {
    transform: scale(1.06);
  }

  .pd-service-body {
    padding: 28px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .pd-service-body h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.35rem;
    font-weight: 700;
    color: var(--pd-forest);
    margin: 10px 0 8px;
    transition: color 0.25s ease;
  }

  .pd-service-body p {
    color: var(--pd-text-muted);
    font-size: 0.9375rem;
    line-height: 1.6;
    margin-bottom: 20px;
    transition: color 0.25s ease;
  }

  /* 3. Daylight vs Twilight Night Mode Switcher */
  .pd-mode-toggle-wrap {
    display: flex;
    justify-content: center;
    margin-bottom: 40px;
  }

  .pd-mode-toggle {
    background: var(--pd-forest-card);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 9999px;
    padding: 4px;
    display: flex;
    gap: 4px;
  }

  .pd-mode-btn {
    padding: 10px 24px;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 700;
    border: none;
    cursor: pointer;
    transition: all 0.25s ease;
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--pd-text-light-muted);
    background: transparent;
  }

  .pd-mode-btn.active {
    background: var(--pd-teak);
    color: #ffffff;
    box-shadow: 0 4px 14px var(--pd-teak-glow);
  }

  /* 4. Form Card */
  .pd-form-card {
    background: #ffffff;
    border: 1px solid var(--pd-sandalwood-border);
    border-radius: 24px;
    padding: 48px;
    box-shadow: 0 20px 50px rgba(7, 30, 25, 0.06);
    transition: background-color 0.25s ease, border-color 0.25s ease;
  }

  .pd-input-field {
    width: 100%;
    background: var(--pd-sandalwood);
    border: 1px solid var(--pd-sandalwood-border);
    border-radius: 10px;
    padding: 13px 16px;
    font-size: 0.9375rem;
    font-family: inherit;
    outline: none;
    transition: all 0.2s ease;
  }

  .pd-input-field:focus {
    border-color: var(--pd-teak);
    background: #ffffff;
    box-shadow: 0 0 0 3px var(--pd-teak-glow);
  }

  /* 5. FAQ Accordion */
  .pd-faq-item {
    background: #ffffff;
    border: 1px solid var(--pd-sandalwood-border);
    border-radius: 14px;
    overflow: hidden;
    margin-bottom: 14px;
    transition: all 0.2s ease;
  }

  .pd-faq-item.active {
    border-color: var(--pd-teak);
  }

  .pd-faq-trigger {
    width: 100%;
    padding: 22px 26px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    font-size: 1.0625rem;
    font-weight: 700;
    color: var(--pd-forest);
    cursor: pointer;
    text-align: left;
    gap: 16px;
    transition: color 0.25s ease;
  }

  .pd-faq-trigger svg {
    color: var(--pd-teak);
    transition: transform 0.3s ease, color 0.25s ease;
  }

  .pd-faq-item.active .pd-faq-trigger svg {
    transform: rotate(180deg);
  }

  .pd-faq-body {
    padding: 0 26px 24px;
    color: var(--pd-text-muted);
    font-size: 0.9375rem;
    line-height: 1.7;
    transition: color 0.25s ease;
  }

  /* 6. Footer */
  .pd-footer {
    background: var(--pd-forest-deep);
    color: var(--pd-text-light-muted);
    border-top: 1px solid rgba(255, 255, 255, 0.08);
    padding: 80px 0 36px;
    transition: background 0.25s ease;
  }

  .pd-footer-grid {
    display: grid;
    grid-template-columns: 1.4fr 0.9fr 0.9fr 1.2fr;
    gap: 48px;
    margin-bottom: 64px;
  }

  .pd-footer-col h4 {
    font-family: 'Playfair Display', serif;
    font-size: 1.125rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .pd-footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 0.875rem;
  }

  .pd-footer-links a:hover {
    color: var(--pd-teak-light);
  }

  /* Responsive */
  @media (max-width: 1280px) {
    .pd-nav-links {
      gap: 18px;
    }

    .pd-nav-links a {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 1100px) {
    .pd-nav-links {
      gap: 14px;
    }
  }

  @media (max-width: 1024px) {
    .pd-stats-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .pd-studio-grid,
    .pd-config-grid,
    .pd-services-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .pd-footer-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .pd-hero-floating-card {
      display: none;
    }
  }

  /* At 920px the 7-item nav starts crowding — switch to hamburger */
  @media (max-width: 920px) {
    .pd-nav-links {
      display: none;
    }

    .pd-hamburger {
      display: flex;
    }

    .pd-nav-cta {
      display: none;
    }

    .pd-nav {
      height: 68px;
    }
  }

  @media (max-width: 768px) {
    .pd-stats-grid,
    .pd-studio-grid,
    .pd-config-grid,
    .pd-services-grid,
    .pd-footer-grid {
      grid-template-columns: 1fr;
    }
    .pd-swatch-list,
    .pd-upgrade-checkbox-list {
      grid-template-columns: 1fr;
    }
    .pd-material-studio-card,
    .pd-configurator-box,
    .pd-form-card {
      padding: 24px;
    }
  }

  @media (max-width: 480px) {
    .pd-section {
      padding: 64px 0;
    }

    .pd-hero-content {
      padding: 60px 0;
    }

    .pd-hero-h1 {
      font-size: clamp(2rem, 8vw, 2.75rem);
    }

    .pd-hero-actions {
      flex-direction: column;
    }

    .pd-hero-actions .pd-btn {
      width: 100%;
      justify-content: center;
    }
  }
`;
