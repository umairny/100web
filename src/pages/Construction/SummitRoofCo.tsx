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
      <style>{css}</style>
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
      <header className={`sr-header-nav${scrolled ? " scrolled" : ""}`}>
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
          <nav className="sr-nav-links" aria-label="Main navigation">
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

          <div className="sr-nav-actions">
            <a
              href="#sr-inspection-form"
              className="sr-btn sr-btn-copper sr-btn-sm sr-nav-cta"
              onClick={(e) => scrollTo(e, "sr-inspection-form")}
            >
              Free 4K Drone Inspection
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              className="sr-hamburger"
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
          className="sr-mobile-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-In Drawer */}
      <div className={`sr-mobile-drawer${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="sr-mobile-drawer-header">
          <div className="sr-brand-logo">
            <div className="sr-logo-icon">
              <Shield className="w-6 h-6" />
            </div>
            <div className="sr-brand-text">
              <h2>SUMMIT ROOF CO.</h2>
              <span>Alpine Armor Systems</span>
            </div>
          </div>
          <button
            type="button"
            className="sr-drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="sr-mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`sr-mobile-nav-link${activeNav === item.id ? " active" : ""}`}
              onClick={(e) => scrollTo(e, item.id)}
            >
              {item.label}
              <ArrowRight className="w-4 h-4" />
            </a>
          ))}
        </nav>

        <div className="sr-mobile-drawer-footer">
          <a
            href="#sr-inspection-form"
            className="sr-btn sr-btn-copper"
            style={{ width: "100%" }}
            onClick={(e) => scrollTo(e, "sr-inspection-form")}
          >
            Free 4K Drone Inspection
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:8333657663"
            className="sr-btn sr-btn-ghost"
            style={{ width: "100%" }}
          >
            <Phone className="w-4 h-4" />
            (833) 365-ROOF — 24/7 Hotline
          </a>
        </div>
      </div>

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

const css = `
/* Summit Roof Co. - Alpine Copper & Obsidian Slate Design System */

@import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700;800;900&family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400;1,700&display=swap');

.sr-site {
  --sr-bg-obsidian: #080c14;
  --sr-bg-slate: #0e1622;
  --sr-bg-elevated: #141f2e;
  --sr-bg-card: rgba(20, 31, 46, 0.7);
  --sr-bg-glass: rgba(14, 22, 34, 0.82);
  
  --sr-copper: #e06824;
  --sr-copper-light: #f78d48;
  --sr-copper-dark: #b84e12;
  --sr-copper-glow: rgba(224, 104, 36, 0.28);
  
  --sr-gold: #eab308;
  --sr-emerald: #10b981;
  --sr-emerald-glow: rgba(16, 185, 129, 0.25);
  
  --sr-border-subtle: rgba(255, 255, 255, 0.08);
  --sr-border-copper: rgba(224, 104, 36, 0.35);
  --sr-border-active: #e06824;
  
  --sr-text-primary: #f8fafc;
  --sr-text-secondary: #94a3b8;
  --sr-text-muted: #64748b;
  
  background-color: var(--sr-bg-obsidian);
  color: var(--sr-text-primary);
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  overflow-x: clip;
}

.sr-site * {
  box-sizing: border-box;
}

.sr-site a {
  text-decoration: none;
  color: inherit;
}

.sr-font-display {
  font-family: 'Cinzel', Georgia, serif;
}

.sr-wrap {
  width: min(1400px, calc(100% - 64px));
  margin-inline: auto;
}

@media (max-width: 640px) {
  .sr-wrap {
    width: calc(100% - 32px);
  }
}

/* Animations */
@keyframes copperPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.1); }
}

@keyframes topoFloat {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(0.5deg); }
}

.sr-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--sr-copper);
  box-shadow: 0 0 12px var(--sr-copper);
  animation: copperPulse 2s infinite;
  display: inline-block;
}

.sr-pulse-dot.green {
  background: var(--sr-emerald);
  box-shadow: 0 0 12px var(--sr-emerald);
}

/* Top Dispatch Banner */
.sr-dispatch-bar {
  background: #04070c;
  border-bottom: 1px solid var(--sr-border-subtle);
  padding: 8px 0;
  font-size: 0.8125rem;
  color: var(--sr-text-secondary);
}

.sr-dispatch-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
}

.sr-dispatch-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(224, 104, 36, 0.12);
  border: 1px solid rgba(224, 104, 36, 0.3);
  padding: 2px 10px;
  border-radius: 6px;
  color: var(--sr-copper-light);
  font-weight: 700;
  font-size: 0.75rem;
}

/* Sticky Header */
.sr-header-nav {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(8, 12, 20, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--sr-border-subtle);
  transition: all 0.3s ease;
}

.sr-header-nav.scrolled {
  background: rgba(8, 12, 20, 0.98);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.7);
}

.sr-nav-container {
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.sr-brand-logo {
  display: flex;
  align-items: center;
  gap: 14px;
}

.sr-logo-icon {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
  border: 1px solid var(--sr-border-copper);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--sr-copper);
  box-shadow: 0 4px 16px var(--sr-copper-glow);
}

.sr-brand-text h2 {
  font-family: 'Cinzel', serif;
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  line-height: 1;
  color: #ffffff;
  margin: 0;
}

.sr-brand-text span {
  font-size: 0.6875rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: var(--sr-copper);
}

.sr-nav-links {
  display: flex;
  align-items: center;
  gap: 24px;
}

.sr-nav-links a {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--sr-text-secondary);
  transition: all 0.2s ease;
  position: relative;
  padding: 8px 0;
}

.sr-nav-links a:hover,
.sr-nav-links a.active {
  color: #ffffff;
}

.sr-nav-links a.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--sr-copper), var(--sr-copper-light));
  border-radius: 2px;
}

/* Custom Buttons */
.sr-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-weight: 700;
  border-radius: 8px;
  font-size: 0.9375rem;
  padding: 13px 26px;
  cursor: pointer;
  border: 1px solid transparent;
  transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  white-space: nowrap;
  line-height: 1;
}

.sr-btn-copper {
  background: linear-gradient(135deg, var(--sr-copper) 0%, var(--sr-copper-dark) 100%);
  color: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 4px 20px var(--sr-copper-glow);
}

.sr-btn-copper:hover {
  background: linear-gradient(135deg, var(--sr-copper-light) 0%, var(--sr-copper) 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 30px var(--sr-copper-glow);
}

.sr-btn-ghost {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.15);
  color: #ffffff;
}

.sr-btn-ghost:hover {
  background: rgba(255, 255, 255, 0.12);
  border-color: rgba(255, 255, 255, 0.3);
  transform: translateY(-2px);
}

.sr-btn-sm {
  padding: 9px 18px;
  font-size: 0.8125rem;
}

.sr-btn-lg {
  padding: 16px 34px;
  font-size: 1rem;
}

/* Nav actions container */
.sr-nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

/* Hamburger button */
.sr-hamburger {
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.07);
  border: 1px solid rgba(224, 104, 36, 0.3);
  color: #ffffff;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.sr-hamburger:hover {
  background: rgba(224, 104, 36, 0.15);
  border-color: var(--sr-copper);
}

/* Mobile overlay backdrop */
.sr-mobile-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.65);
  backdrop-filter: blur(4px);
  z-index: 98;
  animation: srFadeIn 0.22s ease;
}

@keyframes srFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* Mobile slide-in drawer */
.sr-mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(380px, 90vw);
  background: var(--sr-bg-obsidian);
  border-left: 1px solid var(--sr-border-copper);
  z-index: 99;
  display: flex;
  flex-direction: column;
  transform: translateX(100%);
  transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1);
}

.sr-mobile-drawer.is-open {
  transform: translateX(0);
  box-shadow: -24px 0 70px rgba(0, 0, 0, 0.7);
}

.sr-mobile-drawer-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px;
  border-bottom: 1px solid var(--sr-border-subtle);
  flex-shrink: 0;
}

.sr-drawer-close {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease;
}

.sr-drawer-close:hover {
  background: rgba(224, 104, 36, 0.15);
  border-color: var(--sr-border-copper);
}

/* Mobile nav links list */
.sr-mobile-nav {
  flex: 1;
  overflow-y: auto;
  padding: 16px 0;
  display: flex;
  flex-direction: column;
}

.sr-mobile-nav-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 24px;
  font-size: 1rem;
  font-weight: 700;
  color: var(--sr-text-secondary);
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: all 0.18s ease;
}

.sr-mobile-nav-link svg {
  opacity: 0.3;
  transition: opacity 0.18s ease, transform 0.18s ease;
}

.sr-mobile-nav-link:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.04);
}

.sr-mobile-nav-link.active {
  color: var(--sr-copper-light);
  border-left: 3px solid var(--sr-copper);
  padding-left: 21px;
  background: rgba(224, 104, 36, 0.06);
}

.sr-mobile-nav-link:hover svg,
.sr-mobile-nav-link.active svg {
  opacity: 1;
  transform: translateX(3px);
}

/* Mobile drawer footer */
.sr-mobile-drawer-footer {
  padding: 24px;
  border-top: 1px solid var(--sr-border-subtle);
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-shrink: 0;
}

/* Dramatic Hero Section */
.sr-hero-split {
  position: relative;
  min-height: 700px;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: radial-gradient(circle at 80% 20%, #172438 0%, var(--sr-bg-obsidian) 70%);
  border-bottom: 1px solid var(--sr-border-subtle);
}

.sr-hero-bg-photo {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.28;
  mix-blend-mode: luminosity;
  filter: contrast(1.2) brightness(0.8);
}

.sr-hero-grid-overlay {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(circle at center, black 40%, transparent 80%);
}

.sr-hero-content-wrap {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 64px;
  align-items: center;
  padding: 80px 0;
}

.sr-eyebrow-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(224, 104, 36, 0.15);
  border: 1px solid rgba(224, 104, 36, 0.35);
  color: var(--sr-copper-light);
  padding: 6px 14px;
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 24px;
}

.sr-hero-h1 {
  font-family: 'Cinzel', serif;
  font-size: clamp(2.6rem, 4.2vw, 4.2rem);
  font-weight: 900;
  line-height: 1.1;
  letter-spacing: -0.01em;
  color: #ffffff;
  margin-bottom: 24px;
}

.sr-hero-h1 span {
  background: linear-gradient(135deg, var(--sr-copper-light) 0%, #fb923c 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.sr-hero-lead {
  font-size: 1.125rem;
  color: var(--sr-text-secondary);
  line-height: 1.75;
  margin-bottom: 36px;
  max-width: 620px;
}

.sr-hero-actions-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

/* Quick Diagnostic Card inside Hero */
.sr-hero-card {
  background: var(--sr-bg-glass);
  border: 1px solid var(--sr-border-copper);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(16px);
  position: relative;
}

.sr-hero-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 3px;
  background: linear-gradient(90deg, var(--sr-copper), var(--sr-gold));
  border-radius: 20px 20px 0 0;
}

/* Section Header */
.sr-section-block {
  padding: 100px 0;
  position: relative;
}

.sr-section-block.slate-bg {
  background-color: var(--sr-bg-slate);
}

.sr-section-title-wrap {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 60px;
}

.sr-section-heading {
  font-family: 'Cinzel', serif;
  font-size: clamp(2.2rem, 3.5vw, 3rem);
  font-weight: 800;
  color: #ffffff;
  letter-spacing: -0.01em;
  margin-bottom: 16px;
}

.sr-section-subtitle {
  font-size: 1.0625rem;
  color: var(--sr-text-secondary);
  line-height: 1.7;
}

/* 1. Interactive Roof Anatomy Exploded View */
.sr-anatomy-box {
  background: var(--sr-bg-elevated);
  border: 1px solid var(--sr-border-subtle);
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
}

.sr-anatomy-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 48px;
  align-items: center;
}

.sr-layer-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.sr-layer-item {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--sr-border-subtle);
  border-radius: 12px;
  padding: 16px 20px;
  cursor: pointer;
  transition: all 0.25s ease;
  display: flex;
  align-items: center;
  gap: 16px;
}

.sr-layer-item:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: var(--sr-border-copper);
}

.sr-layer-item.active {
  background: rgba(224, 104, 36, 0.12);
  border-color: var(--sr-copper);
  box-shadow: 0 0 20px var(--sr-copper-glow);
}

.sr-layer-number {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: #1e293b;
  color: #ffffff;
  font-weight: 800;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8125rem;
}

.sr-layer-item.active .sr-layer-number {
  background: var(--sr-copper);
}

.sr-layer-content h4 {
  font-size: 1rem;
  font-weight: 700;
  color: #ffffff;
  margin: 0 0 2px 0;
}

.sr-layer-content p {
  font-size: 0.8125rem;
  color: var(--sr-text-muted);
  margin: 0;
}

.sr-layer-display {
  background: #090f18;
  border: 1px solid var(--sr-border-copper);
  border-radius: 20px;
  padding: 36px;
  position: relative;
  overflow: hidden;
}

.sr-layer-display-badge {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(224, 104, 36, 0.15);
  color: var(--sr-copper-light);
  font-size: 0.75rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  padding: 4px 10px;
  border-radius: 4px;
  margin-bottom: 16px;
}

.sr-layer-display h3 {
  font-family: 'Cinzel', serif;
  font-size: 1.75rem;
  color: #ffffff;
  margin-bottom: 14px;
}

.sr-layer-display p {
  font-size: 0.9375rem;
  color: var(--sr-text-secondary);
  line-height: 1.7;
  margin-bottom: 24px;
}

/* 2. Interactive Before / After Comparison Slider */
.sr-comparison-container {
  max-width: 960px;
  margin: 0 auto;
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  user-select: none;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.7);
  border: 1px solid var(--sr-border-subtle);
  height: 480px;
}

.sr-comp-img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sr-comp-overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
}

.sr-comp-divider {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 3px;
  background: #ffffff;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.8);
  cursor: ew-resize;
}

.sr-comp-handle {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: var(--sr-copper);
  color: #ffffff;
  border: 3px solid #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.6);
}

.sr-comp-tag {
  position: absolute;
  top: 20px;
  background: rgba(4, 7, 12, 0.85);
  backdrop-filter: blur(8px);
  color: #ffffff;
  padding: 6px 14px;
  border-radius: 8px;
  font-size: 0.8125rem;
  font-weight: 800;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.sr-comp-tag.before { left: 20px; border-left: 3px solid #ef4444; }
.sr-comp-tag.after { right: 20px; border-right: 3px solid var(--sr-emerald); }

/* 3. Interactive Color & Material Customizer */
.sr-color-selector-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 12px;
  margin-top: 20px;
}

.sr-color-swatch-btn {
  background: var(--sr-bg-elevated);
  border: 1px solid var(--sr-border-subtle);
  border-radius: 12px;
  padding: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}

.sr-color-swatch-btn:hover {
  border-color: var(--sr-copper);
}

.sr-color-swatch-btn.active {
  border-color: var(--sr-copper);
  background: rgba(224, 104, 36, 0.12);
  box-shadow: 0 0 0 2px var(--sr-copper);
}

.sr-swatch-circle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 2px solid rgba(255, 255, 255, 0.2);
}

/* 4. Interactive Storm & Hail Threat Meter */
.sr-threat-box {
  background: var(--sr-bg-card);
  border: 1px solid var(--sr-border-subtle);
  border-radius: 24px;
  padding: 40px;
}

.sr-threat-scale {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  margin: 28px 0;
}

.sr-threat-card {
  background: var(--sr-bg-elevated);
  border: 1px solid var(--sr-border-subtle);
  border-radius: 14px;
  padding: 20px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: center;
}

.sr-threat-card.active {
  border-color: var(--sr-copper);
  background: rgba(224, 104, 36, 0.1);
  box-shadow: 0 0 24px var(--sr-copper-glow);
}

/* Services Grid (Obsidian Glass) */
.sr-services-obsidian-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.sr-service-obsidian-card {
  background: var(--sr-bg-card);
  border: 1px solid var(--sr-border-subtle);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.sr-service-obsidian-card:hover {
  transform: translateY(-6px);
  border-color: var(--sr-border-copper);
  box-shadow: 0 24px 50px rgba(0, 0, 0, 0.5);
}

.sr-service-img-frame {
  height: 220px;
  position: relative;
  overflow: hidden;
}

.sr-service-img-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.sr-service-obsidian-card:hover .sr-service-img-frame img {
  transform: scale(1.06);
}

.sr-service-card-body {
  padding: 28px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.sr-service-card-body h3 {
  font-family: 'Cinzel', serif;
  font-size: 1.3rem;
  color: #ffffff;
  margin: 12px 0 8px;
}

.sr-service-card-body p {
  color: var(--sr-text-secondary);
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

/* Estimator Reimagined */
.sr-estimator-dark {
  background: var(--sr-bg-elevated);
  border: 1px solid var(--sr-border-copper);
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
}

/* Process Timeline (Angled Nordic) */
.sr-timeline-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
}

.sr-timeline-card {
  background: var(--sr-bg-card);
  border: 1px solid var(--sr-border-subtle);
  border-radius: 16px;
  padding: 28px 22px;
  transition: all 0.2s ease;
  position: relative;
}

.sr-timeline-card:hover {
  border-color: var(--sr-copper);
  transform: translateY(-4px);
}

.sr-step-hex {
  width: 40px;
  height: 40px;
  background: var(--sr-copper);
  color: #ffffff;
  font-weight: 800;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9375rem;
  margin-bottom: 18px;
}

.sr-timeline-card h4 {
  font-family: 'Cinzel', serif;
  font-size: 1.125rem;
  color: #ffffff;
  margin-bottom: 8px;
}

.sr-timeline-card p {
  font-size: 0.8125rem;
  color: var(--sr-text-secondary);
  line-height: 1.5;
}

/* Form Container */
.sr-dark-form-card {
  background: var(--sr-bg-elevated);
  border: 1px solid var(--sr-border-subtle);
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 24px 60px rgba(0, 0, 0, 0.6);
}

.sr-input-dark {
  width: 100%;
  background: rgba(8, 12, 20, 0.8);
  border: 1px solid var(--sr-border-subtle);
  border-radius: 8px;
  padding: 14px 16px;
  color: #ffffff;
  font-family: inherit;
  font-size: 0.9375rem;
  outline: none;
  transition: all 0.2s ease;
}

.sr-input-dark:focus {
  border-color: var(--sr-copper);
  box-shadow: 0 0 0 3px var(--sr-copper-glow);
}

/* FAQ Accordion */
.sr-faq-dark-item {
  background: var(--sr-bg-card);
  border: 1px solid var(--sr-border-subtle);
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 14px;
  transition: all 0.2s ease;
}

.sr-faq-dark-item.active {
  border-color: var(--sr-copper);
}

.sr-faq-btn-dark {
  width: 100%;
  padding: 22px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.0625rem;
  font-weight: 700;
  cursor: pointer;
  text-align: left;
  gap: 16px;
}

.sr-faq-btn-dark svg {
  color: var(--sr-copper);
  transition: transform 0.3s ease;
}

.sr-faq-dark-item.active .sr-faq-btn-dark svg {
  transform: rotate(180deg);
}

.sr-faq-body-dark {
  padding: 0 26px 24px;
  color: var(--sr-text-secondary);
  font-size: 0.9375rem;
  line-height: 1.7;
}

/* Responsive Breakpoints */
@media (max-width: 1280px) {
  .sr-nav-links {
    gap: 18px;
  }

  .sr-nav-links a {
    font-size: 0.8125rem;
  }
}

@media (max-width: 1100px) {
  .sr-nav-links {
    gap: 14px;
  }
}

@media (max-width: 1024px) {
  .sr-hero-content-wrap,
  .sr-anatomy-grid {
    grid-template-columns: 1fr;
  }
  .sr-services-obsidian-grid,
  .sr-timeline-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .sr-threat-scale {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 920px) {
  .sr-nav-links {
    display: none;
  }

  .sr-hamburger {
    display: flex;
  }

  .sr-nav-cta {
    display: none;
  }

  .sr-nav-container {
    height: 68px;
  }
}

@media (max-width: 768px) {
  .sr-services-obsidian-grid,
  .sr-timeline-grid,
  .sr-threat-scale {
    grid-template-columns: 1fr;
  }
  .sr-anatomy-box,
  .sr-estimator-dark,
  .sr-dark-form-card {
    padding: 24px;
  }
  .sr-comparison-container {
    height: 340px;
  }
}

@media (max-width: 480px) {
  .sr-section-block {
    padding: 64px 0;
  }

  .sr-hero-content-wrap {
    padding: 60px 0;
  }

  .sr-hero-h1 {
    font-size: clamp(2rem, 8vw, 2.75rem);
  }

  .sr-hero-actions-row {
    flex-direction: column;
  }

  .sr-hero-actions-row .sr-btn {
    width: 100%;
    justify-content: center;
  }
}

/* =====================================================================
   THEME SELECTOR & PRESET INTEGRATION
   ===================================================================== */
[data-theme-preset]:not([data-theme-preset="original"]) .sr-site,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site {
  --sr-copper: var(--theme-accent-primary, #e06824) !important;
  --sr-copper-light: var(--theme-accent-primary-hover, #f78d48) !important;
  --sr-copper-dark: var(--theme-accent-primary, #b84e12) !important;
  --sr-copper-glow: var(--theme-accent-glow, rgba(224, 104, 36, 0.28)) !important;
  --sr-border-copper: var(--theme-accent-primary, rgba(224, 104, 36, 0.35)) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sr-btn-copper,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-btn-copper {
  background: var(--theme-accent-primary) !important;
  color: var(--theme-accent-contrast, #ffffff) !important;
  box-shadow: 0 4px 20px var(--theme-accent-glow, rgba(224, 104, 36, 0.28)) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sr-btn-copper:hover,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-btn-copper:hover {
  background: var(--theme-accent-primary-hover, var(--theme-accent-primary)) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sr-site .sr-brand-text span,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site .sr-brand-text span {
  color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sr-site .sr-eyebrow-badge,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site .sr-eyebrow-badge {
  border-color: var(--theme-accent-primary) !important;
  color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sr-site .sr-hero-h1 span,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site .sr-hero-h1 span {
  background: linear-gradient(135deg, var(--theme-accent-primary-hover, var(--theme-accent-primary)) 0%, var(--theme-accent-primary) 100%) !important;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sr-site .sr-pulse-dot:not(.green),
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site .sr-pulse-dot:not(.green) {
  background: var(--theme-accent-primary) !important;
  box-shadow: 0 0 12px var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sr-site .sr-dispatch-tag,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site .sr-dispatch-tag {
  border-color: var(--theme-accent-primary) !important;
  color: var(--theme-accent-primary-hover, var(--theme-accent-primary)) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sr-site .sr-nav-links a.active::after,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site .sr-nav-links a.active::after {
  background: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sr-site .sr-layer-item.active,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site .sr-layer-item.active {
  border-color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sr-site .sr-layer-item.active .sr-layer-number,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site .sr-layer-item.active .sr-layer-number {
  background: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sr-site .sr-comp-handle,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site .sr-comp-handle {
  background: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sr-site .sr-color-swatch-btn.active,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site .sr-color-swatch-btn.active,
[data-theme-preset]:not([data-theme-preset="original"]) .sr-site .sr-threat-card.active,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site .sr-threat-card.active,
[data-theme-preset]:not([data-theme-preset="original"]) .sr-site .sr-faq-dark-item.active,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site .sr-faq-dark-item.active {
  border-color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sr-site .sr-mobile-nav-link.active,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site .sr-mobile-nav-link.active {
  color: var(--theme-accent-primary) !important;
  border-left-color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sr-site .sr-step-hex,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site .sr-step-hex {
  background: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sr-site [class*="text-orange-"],
[data-theme-preset]:not([data-theme-preset="original"]) .sr-site [class*="text-amber-"],
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site [class*="text-orange-"],
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site [class*="text-amber-"] {
  color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sr-site [class*="bg-orange-"],
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site [class*="bg-orange-"] {
  background-color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sr-site [class*="border-orange-"],
[data-theme-active="true"]:not([data-theme-preset="original"]) .sr-site [class*="border-orange-"] {
  border-color: var(--theme-accent-primary) !important;
}

/* =====================================================================
   LIGHT MOOD (CLEAN ALPINE LIGHT PALETTE)
   ===================================================================== */
html.light .sr-site,
body.light .sr-site,
[data-theme-mood="light"] .sr-site,
:root[data-theme-mood="light"] .sr-site,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-site,
:root.light .sr-site {
  --sr-bg-obsidian: var(--theme-bg-base, #f4f7fb);
  --sr-bg-slate: var(--theme-bg-surface, #e9eff7);
  --sr-bg-elevated: var(--theme-bg-card, #ffffff);
  --sr-bg-card: var(--theme-bg-card, #ffffff);
  --sr-bg-glass: rgba(255, 255, 255, 0.94);
  --sr-border-subtle: var(--theme-border, rgba(15, 23, 42, 0.1));
  --sr-text-primary: var(--theme-text-primary, #0f172a);
  --sr-text-secondary: var(--theme-text-muted, #475569);
  --sr-text-muted: #64748b;
  background-color: var(--sr-bg-obsidian);
  color: var(--sr-text-primary);
}

/* Light mood header & floating nav */
html.light .sr-header-nav,
[data-theme-mood="light"] .sr-header-nav,
:root[data-theme-mood="light"] .sr-header-nav,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-header-nav {
  background: rgba(244, 247, 251, 0.94);
  border-bottom-color: var(--sr-border-subtle);
}

html.light .sr-header-nav.scrolled,
[data-theme-mood="light"] .sr-header-nav.scrolled,
:root[data-theme-mood="light"] .sr-header-nav.scrolled,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-header-nav.scrolled {
  background: rgba(255, 255, 255, 0.98);
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
}

html.light .sr-brand-text h2,
[data-theme-mood="light"] .sr-brand-text h2,
:root[data-theme-mood="light"] .sr-brand-text h2,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-brand-text h2 {
  color: #0f172a;
}

html.light .sr-nav-links a,
[data-theme-mood="light"] .sr-nav-links a,
:root[data-theme-mood="light"] .sr-nav-links a,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-nav-links a {
  color: #475569;
}

html.light .sr-nav-links a:hover,
html.light .sr-nav-links a.active,
[data-theme-mood="light"] .sr-nav-links a:hover,
[data-theme-mood="light"] .sr-nav-links a.active,
:root[data-theme-mood="light"] .sr-nav-links a:hover,
:root[data-theme-mood="light"] .sr-nav-links a.active,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-nav-links a:hover,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-nav-links a.active {
  color: #0f172a;
}

html.light .sr-hamburger,
[data-theme-mood="light"] .sr-hamburger,
:root[data-theme-mood="light"] .sr-hamburger,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-hamburger {
  background: #ffffff;
  border-color: rgba(15, 23, 42, 0.15);
  color: #0f172a;
}

/* Light mood hero section */
html.light .sr-hero-split,
[data-theme-mood="light"] .sr-hero-split,
:root[data-theme-mood="light"] .sr-hero-split,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-hero-split {
  background: radial-gradient(circle at 80% 20%, #dbeafe 0%, #f4f7fb 70%);
}

html.light .sr-hero-h1,
[data-theme-mood="light"] .sr-hero-h1,
:root[data-theme-mood="light"] .sr-hero-h1,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-hero-h1 {
  color: #0f172a;
}

html.light .sr-hero-lead,
[data-theme-mood="light"] .sr-hero-lead,
:root[data-theme-mood="light"] .sr-hero-lead,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-hero-lead {
  color: #475569;
}

html.light .sr-hero-card,
[data-theme-mood="light"] .sr-hero-card,
:root[data-theme-mood="light"] .sr-hero-card,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-hero-card {
  background: rgba(255, 255, 255, 0.94);
  border-color: rgba(224, 104, 36, 0.3);
  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08);
  color: #0f172a;
}

html.light .sr-hero-card h3,
[data-theme-mood="light"] .sr-hero-card h3,
:root[data-theme-mood="light"] .sr-hero-card h3,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-hero-card h3 {
  color: #0f172a !important;
}

html.light .sr-hero-card p,
[data-theme-mood="light"] .sr-hero-card p,
:root[data-theme-mood="light"] .sr-hero-card p,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-hero-card p {
  color: #475569 !important;
}

html.light .sr-btn-ghost,
[data-theme-mood="light"] .sr-btn-ghost,
:root[data-theme-mood="light"] .sr-btn-ghost,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-btn-ghost {
  background: #ffffff;
  border-color: rgba(15, 23, 42, 0.15);
  color: #0f172a;
}

html.light .sr-btn-ghost:hover,
[data-theme-mood="light"] .sr-btn-ghost:hover,
:root[data-theme-mood="light"] .sr-btn-ghost:hover,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-btn-ghost:hover {
  background: #f1f5f9;
  color: #0f172a;
}

/* Light mood section headings */
html.light .sr-section-heading,
[data-theme-mood="light"] .sr-section-heading,
:root[data-theme-mood="light"] .sr-section-heading,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-section-heading {
  color: #0f172a;
}

html.light .sr-section-subtitle,
[data-theme-mood="light"] .sr-section-subtitle,
:root[data-theme-mood="light"] .sr-section-subtitle,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-section-subtitle {
  color: #475569;
}

/* Light mood cards & interactive modules */
html.light .sr-anatomy-box,
html.light .sr-threat-box,
html.light .sr-service-obsidian-card,
html.light .sr-estimator-dark,
html.light .sr-timeline-card,
html.light .sr-dark-form-card,
html.light .sr-faq-dark-item,
[data-theme-mood="light"] .sr-anatomy-box,
[data-theme-mood="light"] .sr-threat-box,
[data-theme-mood="light"] .sr-service-obsidian-card,
[data-theme-mood="light"] .sr-estimator-dark,
[data-theme-mood="light"] .sr-timeline-card,
[data-theme-mood="light"] .sr-dark-form-card,
[data-theme-mood="light"] .sr-faq-dark-item,
:root[data-theme-mood="light"] .sr-anatomy-box,
:root[data-theme-mood="light"] .sr-threat-box,
:root[data-theme-mood="light"] .sr-service-obsidian-card,
:root[data-theme-mood="light"] .sr-estimator-dark,
:root[data-theme-mood="light"] .sr-timeline-card,
:root[data-theme-mood="light"] .sr-dark-form-card,
:root[data-theme-mood="light"] .sr-faq-dark-item,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-anatomy-box,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-threat-box,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-service-obsidian-card,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-estimator-dark,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-timeline-card,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-dark-form-card,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-faq-dark-item {
  background: #ffffff;
  border-color: var(--sr-border-subtle);
  box-shadow: 0 10px 40px rgba(15, 23, 42, 0.06);
}

html.light .sr-layer-item,
[data-theme-mood="light"] .sr-layer-item,
:root[data-theme-mood="light"] .sr-layer-item,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-layer-item {
  background: #f8fafc;
  border-color: rgba(15, 23, 42, 0.08);
}

html.light .sr-layer-item:hover,
[data-theme-mood="light"] .sr-layer-item:hover,
:root[data-theme-mood="light"] .sr-layer-item:hover,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-layer-item:hover {
  background: #ffffff;
}

html.light .sr-layer-content h4,
[data-theme-mood="light"] .sr-layer-content h4,
:root[data-theme-mood="light"] .sr-layer-content h4,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-layer-content h4 {
  color: #0f172a;
}

html.light .sr-layer-display,
[data-theme-mood="light"] .sr-layer-display,
:root[data-theme-mood="light"] .sr-layer-display,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-layer-display {
  background: #f8fafc;
  border-color: rgba(15, 23, 42, 0.12);
}

html.light .sr-layer-display h3,
[data-theme-mood="light"] .sr-layer-display h3,
:root[data-theme-mood="light"] .sr-layer-display h3,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-layer-display h3 {
  color: #0f172a;
}

html.light .sr-layer-display p,
[data-theme-mood="light"] .sr-layer-display p,
:root[data-theme-mood="light"] .sr-layer-display p,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-layer-display p {
  color: #475569;
}

html.light .sr-color-swatch-btn,
html.light .sr-threat-card,
[data-theme-mood="light"] .sr-color-swatch-btn,
[data-theme-mood="light"] .sr-threat-card,
:root[data-theme-mood="light"] .sr-color-swatch-btn,
:root[data-theme-mood="light"] .sr-threat-card,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-color-swatch-btn,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-threat-card {
  background: #f8fafc;
  border-color: rgba(15, 23, 42, 0.1);
  color: #0f172a;
}

html.light .sr-threat-card .text-white,
[data-theme-mood="light"] .sr-threat-card .text-white,
:root[data-theme-mood="light"] .sr-threat-card .text-white,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-threat-card .text-white {
  color: #0f172a !important;
}

html.light .sr-service-card-body h3,
[data-theme-mood="light"] .sr-service-card-body h3,
:root[data-theme-mood="light"] .sr-service-card-body h3,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-service-card-body h3 {
  color: #0f172a;
}

html.light .sr-service-card-body p,
[data-theme-mood="light"] .sr-service-card-body p,
:root[data-theme-mood="light"] .sr-service-card-body p,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-service-card-body p {
  color: #475569;
}

html.light .sr-timeline-card h4,
[data-theme-mood="light"] .sr-timeline-card h4,
:root[data-theme-mood="light"] .sr-timeline-card h4,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-timeline-card h4 {
  color: #0f172a;
}

html.light .sr-timeline-card p,
[data-theme-mood="light"] .sr-timeline-card p,
:root[data-theme-mood="light"] .sr-timeline-card p,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-timeline-card p {
  color: #475569;
}

html.light .sr-input-dark,
[data-theme-mood="light"] .sr-input-dark,
:root[data-theme-mood="light"] .sr-input-dark,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-input-dark {
  background: #ffffff;
  border-color: rgba(15, 23, 42, 0.15);
  color: #0f172a;
}

html.light .sr-faq-btn-dark,
[data-theme-mood="light"] .sr-faq-btn-dark,
:root[data-theme-mood="light"] .sr-faq-btn-dark,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-faq-btn-dark {
  color: #0f172a;
}

html.light .sr-faq-body-dark,
[data-theme-mood="light"] .sr-faq-body-dark,
:root[data-theme-mood="light"] .sr-faq-body-dark,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-faq-body-dark {
  color: #475569;
}

html.light .sr-dark-form-card .text-white,
[data-theme-mood="light"] .sr-dark-form-card .text-white,
:root[data-theme-mood="light"] .sr-dark-form-card .text-white,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-dark-form-card .text-white {
  color: #0f172a !important;
}

html.light .sr-site [class*="bg-slate-900"],
html.light .sr-site [class*="bg-[#090f18]"],
[data-theme-mood="light"] .sr-site [class*="bg-slate-900"],
[data-theme-mood="light"] .sr-site [class*="bg-[#090f18]"],
:root[data-theme-mood="light"] .sr-site [class*="bg-slate-900"],
:root[data-theme-mood="light"] .sr-site [class*="bg-[#090f18]"],
:root[data-theme-active="true"][data-theme-mood="light"] .sr-site [class*="bg-slate-900"],
:root[data-theme-active="true"][data-theme-mood="light"] .sr-site [class*="bg-[#090f18]"] {
  background-color: #f8fafc !important;
  border-color: rgba(15, 23, 42, 0.1) !important;
}

html.light .sr-site [class*="bg-slate-900"] .text-white,
html.light .sr-site [class*="bg-[#090f18]"] .text-white,
[data-theme-mood="light"] .sr-site [class*="bg-slate-900"] .text-white,
[data-theme-mood="light"] .sr-site [class*="bg-[#090f18]"] .text-white,
:root[data-theme-mood="light"] .sr-site [class*="bg-slate-900"] .text-white,
:root[data-theme-mood="light"] .sr-site [class*="bg-[#090f18]"] .text-white,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-site [class*="bg-slate-900"] .text-white,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-site [class*="bg-[#090f18]"] .text-white {
  color: #0f172a !important;
}

html.light .sr-site [class*="bg-slate-900"] .text-slate-300,
html.light .sr-site [class*="bg-[#090f18]"] .text-slate-300,
html.light .sr-site [class*="bg-[#090f18]"] .text-slate-400,
[data-theme-mood="light"] .sr-site [class*="bg-slate-900"] .text-slate-300,
[data-theme-mood="light"] .sr-site [class*="bg-[#090f18]"] .text-slate-300,
[data-theme-mood="light"] .sr-site [class*="bg-[#090f18]"] .text-slate-400,
:root[data-theme-mood="light"] .sr-site [class*="bg-slate-900"] .text-slate-300,
:root[data-theme-mood="light"] .sr-site [class*="bg-[#090f18]"] .text-slate-300,
:root[data-theme-mood="light"] .sr-site [class*="bg-[#090f18]"] .text-slate-400,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-site [class*="bg-slate-900"] .text-slate-300,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-site [class*="bg-[#090f18]"] .text-slate-300,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-site [class*="bg-[#090f18]"] .text-slate-400 {
  color: #475569 !important;
}

html.light .sr-site .text-slate-300,
[data-theme-mood="light"] .sr-site .text-slate-300,
:root[data-theme-mood="light"] .sr-site .text-slate-300,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-site .text-slate-300 {
  color: #475569 !important;
}

/* Light mood mobile drawer */
html.light .sr-mobile-drawer,
[data-theme-mood="light"] .sr-mobile-drawer,
:root[data-theme-mood="light"] .sr-mobile-drawer,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-mobile-drawer {
  background: #ffffff;
  border-left-color: rgba(15, 23, 42, 0.1);
  color: #0f172a;
}

html.light .sr-mobile-drawer-header,
[data-theme-mood="light"] .sr-mobile-drawer-header,
:root[data-theme-mood="light"] .sr-mobile-drawer-header,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-mobile-drawer-header {
  border-bottom-color: rgba(15, 23, 42, 0.08);
}

html.light .sr-mobile-drawer-header .sr-brand-text h2,
[data-theme-mood="light"] .sr-mobile-drawer-header .sr-brand-text h2,
:root[data-theme-mood="light"] .sr-mobile-drawer-header .sr-brand-text h2,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-mobile-drawer-header .sr-brand-text h2 {
  color: #0f172a;
}

html.light .sr-drawer-close,
[data-theme-mood="light"] .sr-drawer-close,
:root[data-theme-mood="light"] .sr-drawer-close,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-drawer-close {
  background: #f1f5f9;
  color: #0f172a;
  border-color: rgba(15, 23, 42, 0.1);
}

html.light .sr-mobile-nav-link,
[data-theme-mood="light"] .sr-mobile-nav-link,
:root[data-theme-mood="light"] .sr-mobile-nav-link,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-mobile-nav-link {
  color: #475569;
  border-bottom-color: rgba(15, 23, 42, 0.06);
}

html.light .sr-mobile-nav-link:hover,
[data-theme-mood="light"] .sr-mobile-nav-link:hover,
:root[data-theme-mood="light"] .sr-mobile-nav-link:hover,
:root[data-theme-active="true"][data-theme-mood="light"] .sr-mobile-nav-link:hover {
  color: #0f172a;
  background: #f8fafc;
}

/* =====================================================================
   DARK MOOD (DEFAULT & ACTIVE OBSIDIAN PALETTE)
   ===================================================================== */
html.dark .sr-site,
body.dark .sr-site,
[data-theme-mood="dark"] .sr-site,
:root[data-theme-mood="dark"] .sr-site,
:root[data-theme-active="true"][data-theme-mood="dark"] .sr-site,
:root.dark .sr-site {
  --sr-bg-obsidian: var(--theme-bg-base, #080c14);
  --sr-bg-slate: var(--theme-bg-surface, #0e1622);
  --sr-bg-elevated: var(--theme-bg-card, #141f2e);
  --sr-bg-card: rgba(20, 31, 46, 0.7);
  --sr-bg-glass: rgba(14, 22, 34, 0.82);
  --sr-text-primary: var(--theme-text-primary, #f8fafc);
  --sr-text-secondary: var(--theme-text-muted, #94a3b8);
  --sr-border-subtle: var(--theme-border, rgba(255, 255, 255, 0.08));
  background-color: var(--sr-bg-obsidian);
  color: var(--sr-text-primary);
}
`;

