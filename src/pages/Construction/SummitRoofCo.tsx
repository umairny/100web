import React, { useState, useEffect, useMemo, useRef } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  Calculator,
  Camera,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  CloudRain,
  Eye,
  FileCheck2,
  Flame,
  Hammer,
  HelpCircle,
  Home,
  Layers,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Umbrella,
  UploadCloud,
  Wind,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { imageUrl } from "../../assets/images";
import "./SummitRoofCo.css";

// Asset Image Resolvers
const heroImg = imageUrl("Construction/summitroof/hero.webp") || "/images/Construction/summitroof/hero.webp";
const homeImg = imageUrl("Construction/summitroof/home.webp") || "/images/Construction/summitroof/home.webp";
const inspectionImg = imageUrl("Construction/summitroof/inspection.webp") || "/images/Construction/summitroof/inspection.webp";
const leakDetectionImg = imageUrl("Construction/summitroof/leakdetaction.webp") || "/images/Construction/summitroof/leakdetaction.webp";
const repairImg = imageUrl("Construction/summitroof/repair.webp") || "/images/Construction/summitroof/repair.webp";
const replacementImg = imageUrl("Construction/summitroof/replacement.webp") || "/images/Construction/summitroof/replacement.webp";
const roofImg = imageUrl("Construction/summitroof/roof.webp") || "/images/Construction/summitroof/roof.webp";
const stormRepairImg = imageUrl("Construction/summitroof/stromrepair.webp") || "/images/Construction/summitroof/stromrepair.webp";
const supportImg = imageUrl("Construction/summitroof/support.webp") || "/images/Construction/summitroof/support.webp";
const teamImg = imageUrl("Construction/summitroof/team.webp") || "/images/Construction/summitroof/team.webp";

// Nav Items
const navItems = [
  { label: "Roof Anatomy", id: "sr-anatomy" },
  { label: "Before & After", id: "sr-compare" },
  { label: "Hail Diagnostic", id: "sr-hail" },
  { label: "Cost Estimator", id: "sr-estimator" },
  { label: "Services", id: "sr-services" },
  { label: "Color Studio", id: "sr-colors" },
  { label: "Process", id: "sr-process" },
  { label: "FAQs", id: "sr-faq" },
];

// 6-Layer Roof Anatomy System
const roofLayers = [
  {
    id: 1,
    name: "Structural Decking (CDX Plywood)",
    tag: "Substrate Layer",
    desc: "1/2-inch CDX plywood or OSB sheathing that forms the structural foundation. We inspect and replace all rot, water stains, and sagging sheets before installing underlayment.",
    badge: "Structural Base",
    specs: ["Meets TN IRC Building Code", "H-Clip expansion spacing", "Galvanized 8d ring shank nails"],
  },
  {
    id: 2,
    name: "GAF WeatherWatch® Leak Barrier",
    tag: "Ice & Water Shield",
    desc: "Self-sealing SBS-modified asphalt membrane installed in valleys, eaves, rakes, and chimney flashings to prevent wind-driven rain and ice dam backups from penetrating.",
    badge: "Waterproof Shield",
    specs: ["100% waterproof adhesion", "Self-seals around fastener penetrations", "ASTM D1970 certified"],
  },
  {
    id: 3,
    name: "TigerPaw® Synthetic Underlayment",
    tag: "Breathing Membrane",
    desc: "High-traction spunbound polypropylene synthetic underlayment that repels moisture while allowing internal attic moisture vapors to escape cleanly.",
    badge: "Vapor Control",
    specs: ["10x stronger than felt paper", "UV-stabilized for 180 days", "Class A fire rating"],
  },
  {
    id: 4,
    name: "Pro-Start® Wind Starter Strips",
    tag: "Perimeter Lock",
    desc: "Factory-applied DuraGrip™ adhesive starter courses that lock the perimeter shingles tight against extreme upward wind shear along the roof edges.",
    badge: "130 MPH Wind Lock",
    specs: ["Prevents shingle blow-off", "Pre-cut clean edge alignment", "Meets high-velocity hurricane zones"],
  },
  {
    id: 5,
    name: "Timberline HDZ® LayerLock Shingles",
    tag: "Primary Armor",
    desc: "Architectural shingles with StrikeZone™ nailing area and LayerLock™ dual-phase mechanical bond for maximum wind and impact resistance.",
    badge: "Lifetime Defense",
    specs: ["Class A Fire Resistance", "StainGuard Plus™ Algae Defense", "50-Year Non-Prorated Warranty"],
  },
  {
    id: 6,
    name: "Cobra® Attic Ridge Ventilation",
    tag: "Exhaust Exhaust",
    desc: "Continuous ridge vent combined with TimberTex® premium ridge caps to exhaust scorching summer attic heat and prevent winter condensation rot.",
    badge: "Thermal Balance",
    specs: ["Low-profile architectural fit", "Exceeds 1:150 intake/exhaust ratio", "Prevents mold & roof deck warp"],
  },
];

// Shingle Color Visualizer Palette
const shingleColors = [
  {
    id: "charcoal",
    name: "Charcoal Black",
    hex: "#23272d",
    type: "Architectural HDZ",
    popular: true,
    desc: "Deep, rich obsidian shadowlines providing striking contrast on light stone and brick homes.",
  },
  {
    id: "weathered_wood",
    name: "Weathered Wood",
    hex: "#4b443c",
    type: "Architectural HDZ",
    popular: true,
    desc: "Natural earthy brown and slate blend that complements classic Tennessee estates and craftsman homes.",
  },
  {
    id: "pewter_gray",
    name: "Pewter Gray",
    hex: "#5c6570",
    type: "Architectural HDZ",
    popular: false,
    desc: "Sophisticated cool gray tones for modern architectural aesthetics and cool color palettes.",
  },
  {
    id: "barkwood",
    name: "Barkwood Rustic",
    hex: "#594235",
    type: "Architectural HDZ",
    popular: false,
    desc: "Warm cedar-shake aesthetic with deep timber depth and rugged dimensional shadowlines.",
  },
  {
    id: "copper_metal",
    name: "Appalachian Copper",
    hex: "#a35322",
    type: "24-Ga Standing Seam",
    popular: false,
    desc: "Ultra-premium architectural metal with lifelong anti-corrosion coating and energy-reflective glaze.",
  },
];

// Hail & Wind Diagnostic Tiers
const hailTiers = [
  {
    size: '0.75" (Dime / Penny)',
    wind: "40–50 MPH",
    risk: "Low / Cosmetic",
    prob: "25% Claim Approval",
    color: "#eab308",
    desc: "Light granule loss on older shingles. Minor gutter spatter. Recommended for 21-point check to verify sealant strip intactness.",
  },
  {
    size: '1.25" (Half Dollar)',
    wind: "50–65 MPH",
    risk: "Moderate Structural",
    prob: "75% Claim Approval",
    color: "#f97316",
    desc: "Fractured fiberglass matting beneath granules, bruised asphalt cores, and dented soft metal roof vents. Insurance inspection advised.",
  },
  {
    size: '1.75" (Golf Ball)',
    wind: "65–80 MPH",
    risk: "Severe Damage",
    prob: "95% Claim Approval",
    color: "#ea580c",
    desc: "Punctured shingles, cracked underlayment, shattered ridge caps, and dented AC fins. High risk of immediate internal water infiltration.",
  },
  {
    size: '2.50"+ (Tennis / Baseball)',
    wind: "80+ MPH",
    risk: "Catastrophic Emergency",
    prob: "100% Full Replacement",
    color: "#ef4444",
    desc: "Severe deck penetration, shattered tile/shingles, and total flashing tear-away. Requires immediate 24/7 emergency tarp dispatch.",
  },
];

// Cost Estimator Services
const costServices = [
  { id: "hdz_shingles", name: "GAF Timberline HDZ® Replacement", rate: 460 },
  { id: "class4_impact", name: "Class 4 Hail Impact Armored System", rate: 570 },
  { id: "standing_seam", name: "24-Gauge Standing Seam Metal Roof", rate: 890 },
  { id: "commercial_tpo", name: "Commercial 60-mil Heat-Welded TPO", rate: 540 },
];

// FAQs
const faqsList = [
  {
    q: "How do I know if my roof has hail damage after a Tennessee storm?",
    a: "Hail damage is rarely visible from the ground unless shingles are completely missing. Hailstones strike shingles and fracture the internal fiberglass mat without tearing the surface immediately. Over the next 3-6 months, granules fall off, exposing the bare asphalt to UV rays and creating active leaks. Our free 4K drone scan catches micro-bruises immediately.",
  },
  {
    q: "Does Summit Roof Co. handle the insurance claim paperwork?",
    a: "Yes. Our licensed claims specialists document every damaged shingle, soft metal vent, gutter, and window screen with photos and write itemized line-item estimates using Xactimate® (the exact software insurance adjusters use). We meet your adjuster on the roof to ensure 100% of required code upgrades are approved.",
  },
  {
    q: "What makes the GAF Master Elite® Golden Pledge® warranty different?",
    a: "Only 2% of roofers in North America achieve GAF Master Elite status. The Golden Pledge warranty is backed directly by GAF (not just the contractor) and covers 100% of material defects non-prorated for 50 years, plus 25 years of full workmanship coverage including factory quality audits.",
  },
  {
    q: "How fast is emergency leak response during severe weather?",
    a: "We maintain dedicated 24/7 emergency storm response teams across Nashville, Franklin, Gallatin, Hendersonville, and Murfreesboro with average on-site arrival under 60 minutes for emergency tarping and water intrusion stops.",
  },
];

export function SummitRoofCo() {
  const [activeLayer, setActiveLayer] = useState(roofLayers[4]);
  const [selectedColor, setSelectedColor] = useState(shingleColors[0]);
  const [activeHail, setActiveHail] = useState(hailTiers[1]);

  // Comparison Slider State (0 to 100)
  const [sliderPos, setSliderPos] = useState(50);
  const isDragging = useRef(false);

  // Estimator State
  const [estService, setEstService] = useState("hdz_shingles");
  const [estSquares, setEstSquares] = useState(32); // 32 squares = ~3,200 sq ft

  // Nav scroll state
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("sr-anatomy");

  // Form State
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formAddress, setFormAddress] = useState("");
  const [formNotes, setFormNotes] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ Accordion State
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

  // Slider Mouse/Touch Handlers
  const handleSliderMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const pct = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(pct);
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging.current) return;
    handleSliderMove(e.clientX, e.currentTarget.getBoundingClientRect());
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleSliderMove(e.touches[0].clientX, e.currentTarget.getBoundingClientRect());
  };

  // Estimator Calculation
  const calculatedBudget = useMemo(() => {
    const srv = costServices.find((s) => s.id === estService) || costServices[0];
    const total = estSquares * srv.rate;
    const min = Math.round((total * 0.94) / 250) * 250;
    const max = Math.round((total * 1.08) / 250) * 250;
    return {
      name: srv.name,
      min: min.toLocaleString(),
      max: max.toLocaleString(),
    };
  }, [estService, estSquares]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="sr-site" id="sr-top">
      {/* 1. Top Emergency Dispatch Bar */}
      <div className="sr-dispatch-bar">
        <div className="sr-wrap sr-dispatch-content">
          <div className="flex items-center gap-3">
            <span className="sr-dispatch-tag">
              <span className="sr-pulse-dot"></span>
              24/7 Rapid Storm &amp; Leak Dispatch Active
            </span>
            <span className="hidden md:inline text-xs text-slate-400">
              State General Contractor License: TN #68492 • GAF Master Elite® #ME40918
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="hidden sm:inline text-slate-300">Middle Tennessee Command Center</span>
            <a href="tel:8333657663" className="text-orange-400 hover:text-orange-300 font-bold flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> (833) 365-ROOF (7663)
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Sticky Header */}
      <header className={`sr-header-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="sr-wrap sr-nav-container">
          <a href="#sr-top" className="sr-brand-logo" onClick={(e) => scrollTo(e, "sr-top")}>
            <div className="sr-logo-icon">
              <Shield className="w-6 h-6" />
            </div>
            <div className="sr-brand-text">
              <h2>SUMMIT ROOF CO.</h2>
              <span>Alpine Armor Systems</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="sr-nav-links">
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
              href="#sr-inspection-form"
              className="sr-btn sr-btn-copper sr-btn-sm hidden sm:inline-flex"
              onClick={(e) => scrollTo(e, "sr-inspection-form")}
            >
              Free 4K Drone Inspection
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle Navigation"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="md:hidden bg-[#060a12] border-b border-slate-800 p-6 flex flex-col gap-3 animate-in slide-in-from-top-4 duration-200">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`py-2 text-base font-semibold ${
                  activeNav === item.id ? "text-orange-500" : "text-slate-300"
                }`}
                onClick={(e) => scrollTo(e, item.id)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <a
                href="#sr-inspection-form"
                className="sr-btn sr-btn-copper w-full"
                onClick={(e) => scrollTo(e, "sr-inspection-form")}
              >
                Request Free Drone Inspection
              </a>
              <a href="tel:8333657663" className="sr-btn sr-btn-ghost w-full">
                <Phone className="w-4 h-4" /> Call 24/7 Hotline
              </a>
            </div>
          </div>
        )}
      </header>

      {/* 3. Hero Section (Obsidian & Alpine Copper) */}
      <section className="sr-hero-split">
        <img
          src={heroImg}
          alt="Architectural roof installation in Middle Tennessee"
          className="sr-hero-bg-photo"
        />
        <div className="sr-hero-grid-overlay"></div>
        <div className="sr-wrap">
          <div className="sr-hero-content-wrap">
            <div>
              <div className="sr-eyebrow-badge">
                <ShieldCheck className="w-4 h-4" />
                GAF Master Elite® Certified Contractor
              </div>
              <h1 className="sr-hero-h1">
                Engineered for storms. <br />
                <span>Crafted for generations.</span>
              </h1>
              <p className="sr-hero-lead">
                Middle Tennessee's premier architectural roofing contractor. Specializing in 4K aerial drone forensics, seamless insurance claim negotiation, and 50-year non-prorated roof armor.
              </p>
              <div className="sr-hero-actions-row">
                <a
                  href="#sr-inspection-form"
                  className="sr-btn sr-btn-copper sr-btn-lg"
                  onClick={(e) => scrollTo(e, "sr-inspection-form")}
                >
                  <Camera className="w-5 h-5" />
                  Free 4K Drone Inspection
                </a>
                <a
                  href="#sr-anatomy"
                  className="sr-btn sr-btn-ghost sr-btn-lg"
                  onClick={(e) => scrollTo(e, "sr-anatomy")}
                >
                  <Layers className="w-5 h-5" />
                  Explore 6-Layer Anatomy
                </a>
              </div>

              {/* Trust Matrix */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/10 text-xs font-semibold text-slate-300">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-current" />
                  <span>5.0 Star Rated (450+ Reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-orange-400" />
                  <span>50-Yr Golden Pledge®</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock3 className="w-4 h-4 text-emerald-400" />
                  <span>&lt; 60m Storm Dispatch</span>
                </div>
              </div>
            </div>

            {/* Quick Diagnostic Card in Hero */}
            <div className="sr-hero-card">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-orange-400">
                  Storm Damage Diagnostic
                </span>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  Live Dispatch
                </span>
              </div>
              <h3 className="sr-font-display text-xl text-white font-bold mb-2">
                Middle TN Storm Assessment
              </h3>
              <p className="text-xs text-slate-300 mb-5 leading-relaxed">
                Hail storms in Nashville, Franklin, and Gallatin frequently cause hidden fiberglass mat fractures that lead to interior leaks.
              </p>
              <div className="space-y-3 text-xs mb-6 text-slate-200">
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex justify-between">
                  <span>Current Hail Threat Level:</span>
                  <span className="font-bold text-orange-400">Severe (Spring/Summer)</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex justify-between">
                  <span>Inspection Wait Time:</span>
                  <span className="font-bold text-emerald-400">&lt; 24 Hours Guaranteed</span>
                </div>
                <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 flex justify-between">
                  <span>Zero Out-Of-Pocket Scope:</span>
                  <span className="font-bold text-white">Full Insurance Billing</span>
                </div>
              </div>
              <a
                href="#sr-inspection-form"
                className="sr-btn sr-btn-copper w-full"
                onClick={(e) => scrollTo(e, "sr-inspection-form")}
              >
                Schedule On-Roof Inspection
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive 6-Layer Roof Anatomy Explorer */}
      <section id="sr-anatomy" className="sr-section-block slate-bg">
        <div className="sr-wrap">
          <div className="sr-section-title-wrap">
            <div className="sr-eyebrow-badge">
              <Layers className="w-4 h-4" />
              Structural Engineering
            </div>
            <h2 className="sr-section-heading">Interactive 6-Layer Roof Anatomy</h2>
            <p className="sr-section-subtitle">
              A complete roofing system is much more than shingles. Click through each engineered layer to see how Summit builds storm-proof armor for your home.
            </p>
          </div>

          <div className="sr-anatomy-box">
            <div className="sr-anatomy-grid">
              {/* Layer Selection Column */}
              <div className="sr-layer-list">
                {roofLayers.map((layer) => (
                  <div
                    key={layer.id}
                    className={`sr-layer-item ${activeLayer.id === layer.id ? "active" : ""}`}
                    onClick={() => setActiveLayer(layer)}
                  >
                    <div className="sr-layer-number">{layer.id}</div>
                    <div className="sr-layer-content">
                      <h4>{layer.name}</h4>
                      <p>{layer.tag}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Active Layer Deep Dive Box */}
              <div className="sr-layer-display">
                <div className="sr-layer-display-badge">
                  <ShieldCheck className="w-4 h-4" />
                  {activeLayer.badge}
                </div>
                <h3>{activeLayer.name}</h3>
                <p>{activeLayer.desc}</p>

                <div className="pt-4 border-t border-white/10">
                  <div className="text-xs font-bold uppercase tracking-wider text-orange-400 mb-3">
                    Engineered Specifications:
                  </div>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {activeLayer.specs.map((spec, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Before & After Storm Restoration Slider */}
      <section id="sr-compare" className="sr-section-block">
        <div className="sr-wrap">
          <div className="sr-section-title-wrap">
            <div className="sr-eyebrow-badge">
              <Eye className="w-4 h-4" />
              Real Transformations
            </div>
            <h2 className="sr-section-heading">Interactive Before &amp; After Comparison</h2>
            <p className="sr-section-subtitle">
              Drag the center slider left and right to inspect how Summit transformed this wind-damaged, leaking Hendersonville roof into a lifetime GAF architectural system.
            </p>
          </div>

          <div
            className="sr-comparison-container"
            onMouseDown={() => (isDragging.current = true)}
            onMouseUp={() => (isDragging.current = false)}
            onMouseLeave={() => (isDragging.current = false)}
            onMouseMove={onMouseMove}
            onTouchMove={onTouchMove}
          >
            {/* After Image (Full background) */}
            <img
              src={roofImg}
              alt="After roof restoration by Summit Roof Co."
              className="sr-comp-img"
            />
            <div className="sr-comp-tag after">After: Lifetime GAF HDZ</div>

            {/* Before Image (Clipped overlay) */}
            <div
              className="sr-comp-overlay"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={stormRepairImg}
                alt="Before storm damage roof"
                className="sr-comp-img"
                style={{ width: "960px", maxWidth: "none" }}
              />
              <div className="sr-comp-tag before">Before: Hail &amp; Wind Damage</div>
            </div>

            {/* Vertical Divider Bar */}
            <div
              className="sr-comp-divider"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="sr-comp-handle">
                <span className="text-xs font-bold">⇄</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-6 text-xs text-slate-400">
            👈 Drag or click across the image to reveal before &amp; after comparison 👉
          </div>
        </div>
      </section>

      {/* 6. Interactive Storm Hail Threat Diagnostic */}
      <section id="sr-hail" className="sr-section-block slate-bg">
        <div className="sr-wrap">
          <div className="sr-section-title-wrap">
            <div className="sr-eyebrow-badge">
              <CloudRain className="w-4 h-4" />
              Storm Threat Matrix
            </div>
            <h2 className="sr-section-heading">Hail Diameter &amp; Wind Threat Meter</h2>
            <p className="sr-section-subtitle">
              Select the estimated hailstone size from your recent storm to evaluate your structural risk and insurance approval probability.
            </p>
          </div>

          <div className="sr-threat-box">
            <div className="sr-threat-scale">
              {hailTiers.map((tier, idx) => (
                <div
                  key={idx}
                  className={`sr-threat-card ${activeHail.size === tier.size ? "active" : ""}`}
                  onClick={() => setActiveHail(tier)}
                >
                  <div className="text-xs font-bold text-slate-400 mb-1">Hail Diameter</div>
                  <div className="text-base font-extrabold text-white mb-2">{tier.size}</div>
                  <div className="text-xs font-semibold px-2 py-1 rounded bg-white/5 text-orange-400 mb-2">
                    Wind: {tier.wind}
                  </div>
                  <div
                    className="text-xs font-bold"
                    style={{ color: tier.color }}
                  >
                    {tier.risk}
                  </div>
                </div>
              ))}
            </div>

            {/* Diagnostic Output */}
            <div className="p-8 rounded-2xl bg-[#090f18] border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Selected Storm Profile:
                </div>
                <h4 className="text-xl font-bold text-white mb-1">{activeHail.size}</h4>
                <p className="text-xs text-orange-400 font-semibold">{activeHail.wind} Wind Shear</p>
              </div>

              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                  Insurance Claim Probability:
                </div>
                <div className="text-2xl font-black text-emerald-400">{activeHail.prob}</div>
                <p className="text-xs text-slate-300 mt-1">{activeHail.desc}</p>
              </div>

              <div className="text-right md:text-center">
                <a
                  href="#sr-inspection-form"
                  className="sr-btn sr-btn-copper w-full"
                  onClick={(e) => scrollTo(e, "sr-inspection-form")}
                >
                  Schedule Drone Verification
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Interactive Architectural Color Studio */}
      <section id="sr-colors" className="sr-section-block">
        <div className="sr-wrap">
          <div className="sr-section-title-wrap">
            <div className="sr-eyebrow-badge">
              <Sparkles className="w-4 h-4" />
              Design Studio
            </div>
            <h2 className="sr-section-heading">Architectural Shingle Color Studio</h2>
            <p className="sr-section-subtitle">
              Explore high-definition shingle colorways engineered to elevate your curb appeal while reflecting harsh summer thermal heat.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Color Details Card */}
            <div className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800">
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-8 h-8 rounded-full border-2 border-white/20"
                  style={{ backgroundColor: selectedColor.hex }}
                ></div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{selectedColor.name}</h3>
                  <p className="text-xs text-orange-400 font-semibold">{selectedColor.type}</p>
                </div>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedColor.desc}
              </p>

              <div className="grid grid-cols-2 gap-4 text-xs text-slate-300 pt-4 border-t border-slate-800 mb-6">
                <div>
                  <span className="text-slate-500 block">Algae Protection:</span>
                  <strong>StainGuard Plus™ 25-Yr</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Wind Rating:</span>
                  <strong>130 MPH Unlimited</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Fire Rating:</span>
                  <strong>Class A (Highest)</strong>
                </div>
                <div>
                  <span className="text-slate-500 block">Solar Reflectance:</span>
                  <strong>Cool Roof Rated</strong>
                </div>
              </div>

              <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                Select Color Profile:
              </div>
              <div className="sr-color-selector-grid">
                {shingleColors.map((color) => (
                  <button
                    key={color.id}
                    type="button"
                    className={`sr-color-swatch-btn ${selectedColor.id === color.id ? "active" : ""}`}
                    onClick={() => setSelectedColor(color)}
                  >
                    <div
                      className="sr-swatch-circle"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <span className="text-xs font-bold text-white text-center">{color.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Visual Photo Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-800">
              <img
                src={homeImg}
                alt="Luxury estate roof installation by Summit Roof Co."
                className="w-full h-[420px] object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-black/75 backdrop-blur-md border border-white/10 text-white">
                <div className="flex justify-between items-center text-xs">
                  <span>Selected Palette: <strong>{selectedColor.name}</strong></span>
                  <span className="text-orange-400 font-bold">50-Yr Warranty</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Reimagined Cost Estimator */}
      <section id="sr-estimator" className="sr-section-block slate-bg">
        <div className="sr-wrap">
          <div className="sr-section-title-wrap">
            <div className="sr-eyebrow-badge">
              <Calculator className="w-4 h-4" />
              Instant Pre-Con Pricing
            </div>
            <h2 className="sr-section-heading">Roof Replacement Cost Calculator</h2>
            <p className="sr-section-subtitle">
              Adjust your target roof size and material specification to get a transparent ballpark calculation.
            </p>
          </div>

          <div className="sr-estimator-dark">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-7 space-y-8">
                {/* Service Selection */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block mb-3">
                    1. Select Material System:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {costServices.map((s) => (
                      <button
                        key={s.id}
                        type="button"
                        className={`p-4 rounded-xl text-left border transition-all ${
                          estService === s.id
                            ? "bg-orange-500/10 border-orange-500 text-white shadow-lg shadow-orange-500/20"
                            : "bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"
                        }`}
                        onClick={() => setEstService(s.id)}
                      >
                        <div className="text-sm font-bold text-white mb-1">{s.name}</div>
                        <div className="text-xs text-orange-400">From ${s.rate}/Square</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Square Footage Slider */}
                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      2. Estimated Roof Size (Squares):
                    </label>
                    <span className="text-base font-extrabold text-orange-400">
                      {estSquares} Squares (~{(estSquares * 100).toLocaleString()} Sq Ft)
                    </span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="75"
                    step="1"
                    value={estSquares}
                    onChange={(e) => setEstSquares(Number(e.target.value))}
                    className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-orange-500"
                  />
                  <div className="flex justify-between text-[11px] text-slate-500 mt-2">
                    <span>15 Squares (Townhome)</span>
                    <span>32 Squares (Avg Home)</span>
                    <span>50 Squares (Large Estate)</span>
                    <span>75+ Squares (Commercial)</span>
                  </div>
                </div>
              </div>

              {/* Estimate Calculation Result Card */}
              <div className="lg:col-span-5 p-8 rounded-2xl bg-[#090f18] border border-orange-500/40 text-center relative overflow-hidden">
                <div className="text-xs font-extrabold uppercase tracking-widest text-orange-400 mb-2">
                  Estimated Ballpark Range
                </div>
                <div className="text-4xl font-black text-white my-3">
                  ${calculatedBudget.min} - ${calculatedBudget.max}
                </div>
                <p className="text-xs text-slate-400 mb-6">
                  {calculatedBudget.name} • {estSquares} Squares
                </p>

                <ul className="text-left space-y-2.5 text-xs text-slate-300 py-4 border-t border-b border-slate-800 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Complete 1-day tear-off and haul-away</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>GAF WeatherWatch® Ice &amp; Water Barrier</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>50-Year Non-Prorated Lifetime Warranty</span>
                  </li>
                </ul>

                <a
                  href="#sr-inspection-form"
                  className="sr-btn sr-btn-copper w-full"
                  onClick={(e) => {
                    scrollTo(e, "sr-inspection-form");
                    setFormNotes(`Estimator Scope: ${calculatedBudget.name} (${estSquares} Squares) | $${calculatedBudget.min} - $${calculatedBudget.max}`);
                  }}
                >
                  Apply Scope to Free Inspection
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Core Roofing Services Grid */}
      <section id="sr-services" className="sr-section-block">
        <div className="sr-wrap">
          <div className="sr-section-title-wrap">
            <div className="sr-eyebrow-badge">
              <Wrench className="w-4 h-4" />
              Complete Roofing Capabilities
            </div>
            <h2 className="sr-section-heading">Full-Spectrum Exterior Services</h2>
            <p className="sr-section-subtitle">
              From emergency midnight leak stops to large-scale commercial flat roof restorations.
            </p>
          </div>

          <div className="sr-services-obsidian-grid">
            <div className="sr-service-obsidian-card">
              <div className="sr-service-img-frame">
                <img src={replacementImg} alt="Architectural shingle replacement" />
              </div>
              <div className="sr-service-card-body">
                <Home className="w-6 h-6 text-orange-500" />
                <h3>Full Roof Replacement</h3>
                <p>Complete tear-off with GAF Timberline HDZ® lifetime architectural shingles and 130 MPH wind lock.</p>
                <a href="#sr-inspection-form" onClick={(e) => scrollTo(e, "sr-inspection-form")} className="text-xs font-bold text-orange-400 flex items-center gap-1.5 mt-auto">
                  Book Free Assessment <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="sr-service-obsidian-card">
              <div className="sr-service-img-frame">
                <img src={stormRepairImg} alt="Hail and storm damage repair" />
              </div>
              <div className="sr-service-card-body">
                <Hammer className="w-6 h-6 text-orange-500" />
                <h3>Storm &amp; Hail Claims</h3>
                <p>Free 4K drone damage reports, Xactimate® line-item writing, and on-roof meeting with insurance adjusters.</p>
                <a href="#sr-inspection-form" onClick={(e) => scrollTo(e, "sr-inspection-form")} className="text-xs font-bold text-orange-400 flex items-center gap-1.5 mt-auto">
                  Start Claim Advocacy <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="sr-service-obsidian-card">
              <div className="sr-service-img-frame">
                <img src={repairImg} alt="Emergency leak detection" />
              </div>
              <div className="sr-service-card-body">
                <Zap className="w-6 h-6 text-orange-500" />
                <h3>Emergency Leak Tarping</h3>
                <p>24/7 rapid dispatch across Middle Tennessee with under 60-minute emergency tarp response.</p>
                <a href="tel:8333657663" className="text-xs font-bold text-orange-400 flex items-center gap-1.5 mt-auto">
                  Call Emergency Line <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="sr-service-obsidian-card">
              <div className="sr-service-img-frame">
                <img src={teamImg} alt="Commercial TPO installation" />
              </div>
              <div className="sr-service-card-body">
                <Building2 className="w-6 h-6 text-orange-500" />
                <h3>Commercial Flat TPO</h3>
                <p>60-mil energy-reflective white TPO, tapered ISO board drainage, and 20-year manufacturer NDL warranties.</p>
                <a href="#sr-inspection-form" onClick={(e) => scrollTo(e, "sr-inspection-form")} className="text-xs font-bold text-orange-400 flex items-center gap-1.5 mt-auto">
                  Commercial Bid Request <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="sr-service-obsidian-card">
              <div className="sr-service-img-frame">
                <img src={inspectionImg} alt="Comprehensive roof inspection" />
              </div>
              <div className="sr-service-card-body">
                <ClipboardCheck className="w-6 h-6 text-orange-500" />
                <h3>21-Point Drone Scans</h3>
                <p>Detailed high-resolution photo certificates assessing decking, flashings, chimneys, and attic ventilation.</p>
                <a href="#sr-inspection-form" onClick={(e) => scrollTo(e, "sr-inspection-form")} className="text-xs font-bold text-orange-400 flex items-center gap-1.5 mt-auto">
                  Schedule Drone Scan <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            <div className="sr-service-obsidian-card">
              <div className="sr-service-img-frame">
                <img src={supportImg} alt="Insurance claims advocacy" />
              </div>
              <div className="sr-service-card-body">
                <FileCheck2 className="w-6 h-6 text-orange-500" />
                <h3>Claims Advocacy</h3>
                <p>Ensuring full coverage for all municipal building code upgrades with zero out-of-pocket beyond deductible.</p>
                <a href="#sr-inspection-form" onClick={(e) => scrollTo(e, "sr-inspection-form")} className="text-xs font-bold text-orange-400 flex items-center gap-1.5 mt-auto">
                  Claims Consultation <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. 5-Step Process Timeline */}
      <section id="sr-process" className="sr-section-block slate-bg">
        <div className="sr-wrap">
          <div className="sr-section-title-wrap">
            <div className="sr-eyebrow-badge">
              <CheckCircle2 className="w-4 h-4" />
              Methodical Execution
            </div>
            <h2 className="sr-section-heading">Our 5-Step Storm Restoration Flow</h2>
            <p className="sr-section-subtitle">
              From our first 4K drone scan to registering your 50-year Golden Pledge warranty, we guarantee total transparency.
            </p>
          </div>

          <div className="sr-timeline-grid">
            <div className="sr-timeline-card">
              <div className="sr-step-hex">01</div>
              <h4>Free 4K Drone Scan</h4>
              <p>We photograph every elevation, shingle line, and soft metal vent with high-resolution aerial sensors.</p>
            </div>
            <div className="sr-timeline-card">
              <div className="sr-step-hex">02</div>
              <h4>Xactimate® Report</h4>
              <p>We write line-item estimates using standard insurance pricing to ensure full replacement approval.</p>
            </div>
            <div className="sr-timeline-card">
              <div className="sr-step-hex">03</div>
              <h4>Adjuster Walk</h4>
              <p>Our claims specialist walks the roof alongside your adjuster to point out all code upgrade items.</p>
            </div>
            <div className="sr-timeline-card">
              <div className="sr-step-hex">04</div>
              <h4>1-Day Installation</h4>
              <p>Factory-certified crews install the complete 6-layer system with magnetic yard sweeps.</p>
            </div>
            <div className="sr-timeline-card">
              <div className="sr-step-hex">05</div>
              <h4>50-Yr Warranty</h4>
              <p>We deliver your certificate of completion and register your non-prorated manufacturer warranty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Multi-Step Free Drone Inspection Form */}
      <section id="sr-inspection-form" className="sr-section-block">
        <div className="sr-wrap">
          <div className="sr-dark-form-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="sr-eyebrow-badge">
                  <Camera className="w-4 h-4" />
                  No-Obligation Assessment
                </div>
                <h2 className="sr-font-display text-3xl font-extrabold text-white mb-4">
                  Schedule Your Free <br />
                  <span className="text-orange-400">4K Drone Inspection</span>
                </h2>
                <p className="text-slate-300 text-sm leading-relaxed mb-6">
                  Fill out your property details. A certified roofing inspector will deploy an aerial drone to capture 4K high-res photos and provide an itemized report within 24 hours.
                </p>

                <div className="space-y-3.5 text-xs text-slate-300 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Complimentary aerial 4K damage forensics report</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Xactimate® insurance claim assistance with zero obligation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>GAF Master Elite® 50-Year Non-Prorated Warranty options</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-900/90 border border-slate-800 flex items-center gap-4">
                  <Phone className="w-8 h-8 text-orange-400" />
                  <div>
                    <div className="text-xs text-slate-400">24/7 Middle TN Dispatch Line:</div>
                    <div className="text-base font-bold text-white">(833) 365-7663 (ROOF)</div>
                  </div>
                </div>
              </div>

              {/* Form Input Side */}
              <div className="lg:col-span-7">
                {formSubmitted ? (
                  <div className="bg-emerald-950/60 border border-emerald-500/40 rounded-2xl p-8 text-center animate-in fade-in">
                    <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Inspection Request Dispatched!</h3>
                    <p className="text-slate-300 text-sm mb-6">
                      Thank you, <strong>{formName || "Homeowner"}</strong>. Our drone inspection pilot has received your property details and will contact you within <strong>2 hours</strong> to confirm timing.
                    </p>
                    <button
                      type="button"
                      className="sr-btn sr-btn-ghost"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Submit Another Address
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase text-slate-400 block mb-1.5">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Thomas Anderson"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className="sr-input-dark"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase text-slate-400 block mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. (615) 555-0198"
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          className="sr-input-dark"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase text-slate-400 block mb-1.5">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. thomas@example.com"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          className="sr-input-dark"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase text-slate-400 block mb-1.5">
                          Property Address / City *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 104 Crestview Dr, Gallatin, TN"
                          value={formAddress}
                          onChange={(e) => setFormAddress(e.target.value)}
                          className="sr-input-dark"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase text-slate-400 block mb-1.5">
                        Current Roof Issues &amp; Scope Details
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about active leaks, recent hail storms, insurance adjuster dates, or age of roof..."
                        value={formNotes}
                        onChange={(e) => setFormNotes(e.target.value)}
                        className="sr-input-dark"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase text-slate-400 block mb-1.5">
                        Attach Roof Photos or Insurance Paperwork (Optional)
                      </label>
                      <div className="border border-dashed border-slate-700 rounded-xl p-6 text-center bg-slate-900/40 hover:bg-slate-900/80 transition-colors cursor-pointer">
                        <UploadCloud className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                        <p className="text-xs text-slate-300 font-medium">
                          Drag &amp; drop photos or adjuster estimates, or <span className="text-orange-400 underline">browse files</span>
                        </p>
                        <p className="text-[11px] text-slate-500 mt-1">Accepts PDF, JPG, PNG up to 25MB</p>
                        <input type="file" className="hidden" />
                      </div>
                    </div>

                    <button type="submit" className="sr-btn sr-btn-copper sr-btn-lg w-full mt-2">
                      Dispatch Free Drone Inspection
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
      <section id="sr-faq" className="sr-section-block slate-bg">
        <div className="sr-wrap">
          <div className="sr-section-title-wrap">
            <div className="sr-eyebrow-badge">
              <HelpCircle className="w-4 h-4" />
              Contractor Guidance
            </div>
            <h2 className="sr-section-heading">Frequently Asked Questions</h2>
            <p className="sr-section-subtitle">
              Clear, transparent answers about storm damage claims, roofing warranties, and Middle Tennessee building codes.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqsList.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`sr-faq-dark-item ${isOpen ? "active" : ""}`}>
                  <button
                    type="button"
                    className="sr-faq-btn-dark"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className="w-5 h-5" />
                  </button>
                  {isOpen && <div className="sr-faq-body-dark">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. Footer */}
      <footer className="bg-[#04070c] border-t border-slate-900 py-16 text-slate-400 text-sm">
        <div className="sr-wrap">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="sr-brand-logo mb-4">
                <div className="sr-logo-icon">
                  <Shield className="w-5 h-5" />
                </div>
                <div className="sr-brand-text">
                  <h2 className="text-white">SUMMIT ROOF CO.</h2>
                  <span>Alpine Armor Systems</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Middle Tennessee’s premier architectural roofing and storm restoration contractor. GAF Master Elite® certified.
              </p>
              <div className="text-xs text-orange-400 font-bold">
                Tennessee General Contractor License #68492
              </div>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Engineered Solutions
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#sr-services" onClick={(e) => scrollTo(e, "sr-services")} className="hover:text-orange-400">Architectural Shingles</a></li>
                <li><a href="#sr-services" onClick={(e) => scrollTo(e, "sr-services")} className="hover:text-orange-400">Standing Seam Metal Roofs</a></li>
                <li><a href="#sr-services" onClick={(e) => scrollTo(e, "sr-services")} className="hover:text-orange-400">Hail Damage Claims Advocacy</a></li>
                <li><a href="#sr-services" onClick={(e) => scrollTo(e, "sr-services")} className="hover:text-orange-400">Emergency Leak Tarping</a></li>
                <li><a href="#sr-services" onClick={(e) => scrollTo(e, "sr-services")} className="hover:text-orange-400">Commercial TPO &amp; EPDM</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Interactive Tools
              </h4>
              <ul className="space-y-2 text-xs">
                <li><a href="#sr-anatomy" onClick={(e) => scrollTo(e, "sr-anatomy")} className="hover:text-orange-400">6-Layer Roof Anatomy</a></li>
                <li><a href="#sr-compare" onClick={(e) => scrollTo(e, "sr-compare")} className="hover:text-orange-400">Before &amp; After Slider</a></li>
                <li><a href="#sr-hail" onClick={(e) => scrollTo(e, "sr-hail")} className="hover:text-orange-400">Hail Threat Meter</a></li>
                <li><a href="#sr-colors" onClick={(e) => scrollTo(e, "sr-colors")} className="hover:text-orange-400">Shingle Color Studio</a></li>
                <li><a href="#sr-estimator" onClick={(e) => scrollTo(e, "sr-estimator")} className="hover:text-orange-400">Cost Calculator</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
                Middle TN Headquarters
              </h4>
              <div className="space-y-2 text-xs text-slate-400">
                <p>📍 500 Mainstream Drive, Suite 300<br />Nashville, TN 37228</p>
                <p>📞 24/7 Hotline: <strong className="text-white">(833) 365-7663</strong></p>
                <p>✉️ claims@summitroofco.com</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-900 flex justify-between items-center flex-wrap gap-4 text-xs text-slate-600">
            <div>© {new Date().getFullYear()} Summit Roof Co. LLC. All Rights Reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400">Terms of Service</a>
              <a href="#" className="hover:text-slate-400">GAF Golden Pledge® Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SummitRoofCo;
