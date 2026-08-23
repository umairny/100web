import React, { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
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
  Droplets,
  Flame,
  Flower2,
  Hammer,
  HelpCircle,
  Home,
  Layers,
  Leaf,
  Lightbulb,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  ShieldCheck,
  Shovel,
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
import "./StonefieldLandscapes.css";

// Asset Image Resolvers
const heroImg = imageUrl("Construction/stonefield/hero.webp") || "/images/Construction/stonefield/hero.webp";
const entryImg = imageUrl("Construction/stonefield/entry.webp") || "/images/Construction/stonefield/entry.webp";
const poolImg = imageUrl("Construction/stonefield/pool.webp") || "/images/Construction/stonefield/pool.webp";

// Nav items
const navItems = [
  { label: "Stone Studio", id: "sf-studio" },
  { label: "4-Season Blooms", id: "sf-seasons" },
  { label: "Cost Estimator", id: "sf-calculator" },
  { label: "Capabilities", id: "sf-services" },
  { label: "Master Portfolio", id: "sf-portfolio" },
  { label: "Design Process", id: "sf-process" },
  { label: "Service Area", id: "sf-area" },
  { label: "FAQs", id: "sf-faq" },
];

// 1. Hardscape Natural Stone Options
const naturalStones = [
  {
    id: "indiana_limestone",
    name: "Hand-Cut Indiana Limestone",
    type: "Native Dimensional Flagstone",
    color: "#e8e1cf",
    compressive: "9,500+ PSI (Freeze-Thaw Proven)",
    slipRating: "High-Traction Honed Finish",
    sriScore: "Solar Reflectance 78 (Stays Cool)",
    desc: "Locally quarried architectural limestone with warm creamy buff tones and subtle natural fossil veining. The quintessential estate hardscape stone of Indiana.",
  },
  {
    id: "bluestone",
    name: "Pennsylvania Thermal Bluestone",
    type: "Natural Cleft Flagstone",
    color: "#5c6b73",
    compressive: "12,000+ PSI (Extreme Density)",
    slipRating: "Thermal Flame-Textured (Non-Slip)",
    sriScore: "Solar Reflectance 54",
    desc: "Rich smoky slate and blue-gray hues with timeless formal elegance. Ideal for geometric patio terraces, pool coping, and architectural stair treads.",
  },
  {
    id: "unilock_richcliff",
    name: "Unilock® Richcliff Textured Paver",
    type: "Engineered Natural Granite Blend",
    color: "#948f86",
    compressive: "Up to 4x Strength of Poured Concrete",
    slipRating: "EnduraColor™ Grip Matrix",
    sriScore: "Solar Reflectance 62",
    desc: "Engineered with Reala™ technology cast from hundreds of natural stone molds. Zero efflorescence and salt-pool resistant with a lifetime warranty.",
  },
  {
    id: "granite_boulders",
    name: "Glacial Granite & River Boulders",
    type: "Rugged Dry-Stack Hardscape",
    color: "#6b5e51",
    compressive: "22,000+ PSI (Indestructible)",
    slipRating: "Natural Split Face",
    sriScore: "Solar Reflectance 60",
    desc: "Massive hand-selected boulders and dry-stacked retaining stones providing structural grade retention and organic rustic mountain warmth.",
  },
];

// 2. 4-Season Botanical Bloom Data
const seasonData = [
  {
    id: "spring",
    title: "🌸 Spring Awakening (March – May)",
    tag: "Early Season Emergence",
    focalPoints: "Flowering Kousa Dogwoods, Allium 'Globemaster', Peonies, Allium Bulbs, Dwarf Korean Lilacs",
    desc: "Vibrant bursts of early color against crisp emerald boxwood hedges. Fresh lime-green foliage and aromatic flowering ornamental trees wake up your outdoor living space.",
    careNotes: "Deep root fertilizer feed & precision architectural pruning.",
  },
  {
    id: "summer",
    title: "☀️ Summer Lush (June – August)",
    tag: "Peak Outdoor Entertaining",
    focalPoints: "Annabelle Hydrangeas, Phenomenal Lavender, Coneflowers (Echinacea), Boxwood Cloud Topiaries",
    desc: "Massive hydrangea flowerheads, pollinator-rich purple salvia, and cooling evergreen cloud formations that frame terraces and pool surrounds in full glory.",
    careNotes: "Smart drip irrigation modulation & flowerhead deadheading.",
  },
  {
    id: "autumn",
    title: "🍂 Autumn Radiance (September – November)",
    tag: "Warm Fire Pit Season",
    focalPoints: "Bloodgood Japanese Maples, Karl Foerster Feather Grasses, Burning Bush, Black-Eyed Susans",
    desc: "Fiery scarlet foliage, golden plumes of swaying ornamental grasses, and warm textural depth that makes fire pit evenings captivating.",
    careNotes: "Perennial cutback, leaf extraction & bulb planting.",
  },
  {
    id: "winter",
    title: "❄️ Winter Structural Elegance (December – February)",
    tag: "Architectural Silhouette",
    focalPoints: "Pyramidal Green Mountain Boxwoods, Red Twig Dogwoods, Winterberry Holly, Uplighted Boulders",
    desc: "Crisp evergreen geometry and vivid crimson dogwood stems contrasted against snow-dusted limestone walls and low-voltage uplighting.",
    careNotes: "Anti-desiccant evergreen protective spray & winterization.",
  },
];

// 3. Calculator Scopes
const hardscapeScopes = [
  { id: "patio_fire", name: "Natural Stone Patio & Fire Lounge", baseRate: 64 },
  { id: "pool_terrace", name: "Poolside Travertine & Coping Surround", baseRate: 72 },
  { id: "retaining_walls", name: "Dry-Stack Limestone Retaining Walls", baseRate: 85 },
  { id: "full_estate", name: "Full Estate Hardscape & Botanical Gardens", baseRate: 98 },
];

const patioFootprints = [
  { id: "400", label: "Intimate Courtyard (400 SF)", sqFt: 400 },
  { id: "800", label: "Entertainer's Terrace (800 SF)", sqFt: 800 },
  { id: "1200", label: "Multi-Level Estate (1,200 SF)", sqFt: 1200 },
  { id: "2000", label: "Master Landscape Compound (2,000+ SF)", sqFt: 2000 },
];

const upgradeAddOns = [
  { id: "firepit", name: "Built-In Gas Fire Pit with Volcanic Glass", cost: 4500, icon: Flame },
  { id: "kitchen", name: "Custom Stone Outdoor Chef's Kitchen", cost: 9500, icon: Sparkles },
  { id: "lighting", name: "12V Brass Architectural Uplighting System", cost: 3200, icon: Lightbulb },
  { id: "waterfall", name: "Natural Boulder Waterfall & Circulating Basin", cost: 6800, icon: Droplets },
];

// 4. Core Capabilities
const capabilities = [
  {
    title: "Limestone Patios & Terraces",
    desc: "Artisan-laid Indiana limestone and bluestone terraces built over compacted road-base foundations with zero sinking.",
    image: heroImg,
    badge: "Master Masonry",
    features: ["Deep 8-12\" compacted aggregate road-base", "Polymeric high-traction joint stabilization", "Seamless indoor-to-outdoor grade transitions", "Integrated linear drainage channels"],
  },
  {
    title: "Poolside Hardscapes & Coping",
    desc: "Slip-resistant stone coping, sunken sun loungers, and resort-grade pool patios engineered for Central Indiana freeze-thaw cycles.",
    image: poolImg,
    badge: "Resort Living",
    features: ["Bullnose and chiseled pool coping edges", "Permeable paver drainage systems", "Integrated poolside fire bowls", "Saltwater-safe natural stone sealing"],
  },
  {
    title: "Architectural Front Entries",
    desc: "Commanding limestone columns, stone boundary pillars, front courtyard seating, and specimen tree groupings.",
    image: entryImg,
    badge: "Curb Appeal",
    features: ["Hand-chiseled limestone pier caps", "Motorized security gate stone integration", "Specimen boxwood & Japanese Maple installations", "Low-voltage step & pathway illumination"],
  },
];

// 5. Design-Build Process Steps
const processSteps = [
  { step: "01", title: "Topography & Drone Scan", desc: "We map your elevations, drainage flow, sun exposure, and tree root zones." },
  { step: "02", title: "Photorealistic 3D Master Plan", desc: "You preview every stone texture, fire feature, and mature plant in full 4K." },
  { step: "03", title: "Deep Base Excavation", desc: "We excavate and mechanically compact 8-12 inches of crushed aggregate foundation." },
  { step: "04", title: "Master Stone Masonry", desc: "Our guild stonemasons hand-cut and precision-joint every natural stone slab." },
  { step: "05", title: "3-Year Warranty Handover", desc: "We walk every joint and deliver your comprehensive 3-Year Workmanship Guarantee." },
];

// FAQs
const faqsList = [
  {
    q: "How does Stonefield prevent patios from shifting during Indiana winters?",
    a: "Central Indiana experiences severe freeze-thaw frost heave cycles. Unlike basic contractors who pour a thin sand bed, Stonefield excavates 10-14 inches deep, installs commercial geotextile stabilization fabric, and compacts three distinct layers of crushed aggregate road-base with laser-guided grading to ensure zero settling or cracked pavers.",
  },
  {
    q: "What warranty coverage comes with your hardscapes?",
    a: "Every Stonefield installation is backed by our exclusive 3-Year Master Craftsman Workmanship Warranty covering settling, joint integrity, and drainage, paired with lifetime manufacturer warranties on all Unilock® and natural stone products.",
  },
  {
    q: "Do you provide full-service 3D landscape architecture design?",
    a: "Yes. Our in-house landscape architects craft complete 3D architectural master plans showing real materials, daytime lighting, nighttime illumination, and mature plant foliage before groundbreaking.",
  },
  {
    q: "What areas of Central Indiana do you service?",
    a: "We service premier neighborhoods in Carmel, Zionsville, Meridian Hills, Geist Reservoir, Noblesville, Westfield, Fishers, and North Indianapolis.",
  },
];

export function StonefieldLandscapes() {
  const [activeStone, setActiveStone] = useState(naturalStones[0]);
  const [activeSeason, setActiveSeason] = useState(seasonData[1]); // Default Summer
  const [selectedScope, setSelectedScope] = useState(hardscapeScopes[0]);
  const [selectedFootprint, setSelectedFootprint] = useState(patioFootprints[1]);
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>(["firepit", "lighting"]);

  // Nav Scroll Spy
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("sf-studio");

  // Soil / Area validator
  const [areaInput, setAreaInput] = useState("");
  const [areaResult, setAreaResult] = useState<string | null>(null);

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

  const toggleAddOn = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  // Calculator Logic
  const calculatedBudget = useMemo(() => {
    const baseCost = selectedFootprint.sqFt * selectedScope.baseRate;
    const addOnTotal = selectedAddOns.reduce((sum, addId) => {
      const item = upgradeAddOns.find((u) => u.id === addId);
      return sum + (item ? item.cost : 0);
    }, 0);

    const total = baseCost + addOnTotal;
    const min = Math.round((total * 0.94) / 500) * 500;
    const max = Math.round((total * 1.08) / 500) * 500;

    return {
      min: min.toLocaleString(),
      max: max.toLocaleString(),
    };
  }, [selectedScope, selectedFootprint, selectedAddOns]);

  const handleAreaCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!areaInput.trim()) return;
    setAreaResult(
      `Verified! ${areaInput.trim()} is in Stonefield's Primary Design-Build Region (Complimentary On-Site Soil & Laser Elevation Walk Available).`
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Body scroll lock on mobile menu open
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

  return (
    <div className="sf-site" id="sf-top">
      {/* 1. Top Ribbon */}
      <div className="sf-top-ribbon">
        <div className="sf-wrap sf-top-content">
          <div className="flex items-center gap-3">
            <span className="sf-top-pill">
              <span className="sf-pulse-dot"></span>
              Central Indiana Master Hardscape Guild
            </span>
            <span className="sf-top-service-text text-xs text-slate-300">
              Serving Carmel, Zionsville, Meridian Hills, Noblesville, Geist &amp; Westfield
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="sf-top-service-text text-slate-300">Carmel Design Studio</span>
            <a href="tel:3175550148" className="text-amber-300 hover:text-amber-200 font-bold flex items-center gap-1">
              <Phone className="w-3.5 h-3.5" /> (317) 555-0148
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <header className={`sf-header-bar ${scrolled ? "scrolled" : ""}`}>
        <div className="sf-wrap sf-nav-flex">
          <a href="#sf-top" className="sf-brand-box" onClick={(e) => scrollTo(e, "sf-top")}>
            <div className="sf-brand-logo-mark">
              <Leaf className="w-6 h-6" />
            </div>
            <div className="sf-brand-text">
              <h2>STONEFIELD</h2>
              <span>Landscapes • Architecture</span>
            </div>
          </a>

          {/* Desktop Floating Pill Navigation */}
          <nav className="sf-nav-pill-container">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`sf-nav-link-btn ${activeNav === item.id ? "active" : ""}`}
                onClick={(e) => scrollTo(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="sf-nav-actions">
            <a href="tel:3175550148" className="sf-nav-phone">
              <Phone className="w-3.5 h-3.5 text-amber-700" />
              <span>(317) 555-0148</span>
            </a>

            <a
              href="#sf-quote-form"
              className="sf-btn sf-btn-clay sf-btn-sm sf-nav-cta-btn"
              onClick={(e) => scrollTo(e, "sf-quote-form")}
            >
              Book 3D Plan
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              className="sf-hamburger-btn"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer Portal mounted to document.body */}
      {menuOpen && typeof document !== "undefined" && createPortal(
        <div className="sf-drawer-root">
          <div
            className="sf-drawer-backdrop"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="sf-drawer-menu" role="dialog" aria-modal="true" aria-label="Navigation Menu">
            <div className="sf-drawer-header">
              <div className="flex items-center gap-3">
                <div className="sf-brand-logo-mark !w-9 !h-9">
                  <Leaf className="w-5 h-5" />
                </div>
                <div className="sf-brand-text">
                  <h2 className="!text-white !text-lg">STONEFIELD</h2>
                  <span>Design Navigation</span>
                </div>
              </div>
              <button
                type="button"
                className="text-slate-400 hover:text-white p-2 cursor-pointer bg-transparent border-0"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="sf-drawer-body">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`sf-drawer-link ${activeNav === item.id ? "active" : ""}`}
                  onClick={(e) => scrollTo(e, item.id)}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-60" />
                </a>
              ))}
            </div>

            <div className="sf-drawer-footer">
              <a
                href="tel:3175550148"
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-white/10 text-white font-bold text-sm hover:bg-white/15 no-underline"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Studio: (317) 555-0148</span>
              </a>
              <a
                href="#sf-quote-form"
                className="sf-btn sf-btn-clay w-full"
                onClick={(e) => scrollTo(e, "sf-quote-form")}
              >
                Schedule 3D Master Plan Discovery
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* 3. Hero Section (Indiana Limestone & Botanical Sanctuary) */}
      <section className="sf-hero-container">
        <img
          src={heroImg}
          alt="Luxury outdoor limestone patio and fire pit by Stonefield Landscapes"
          className="sf-hero-bg-image"
        />
        <div className="sf-hero-shade-gradient"></div>
        <div className="sf-wrap">
          <div className="sf-hero-content-block">
            <div className="sf-hero-tag">
              <Sparkles className="w-4 h-4" />
              Central Indiana’s Premier Landscape Architect &amp; Stonemason
            </div>
            <h1 className="sf-hero-title">
              Outdoor living <br />
              <span>crafted to last.</span>
            </h1>
            <p className="sf-hero-lead">
              Architectural limestone terraces, resort poolscapes, and four-season botanical gardens designed to elevate your estate and built to endure Indiana winters.
            </p>
            <div className="sf-hero-btn-row">
              <a
                href="#sf-studio"
                className="sf-btn sf-btn-clay sf-btn-lg"
                onClick={(e) => scrollTo(e, "sf-studio")}
              >
                <Layers className="w-5 h-5" />
                Natural Stone Studio
              </a>
              <a
                href="#sf-calculator"
                className="sf-btn sf-btn-outline sf-btn-lg !text-white !border-white/30 hover:!bg-white/10"
                onClick={(e) => scrollTo(e, "sf-calculator")}
              >
                <Calculator className="w-5 h-5" />
                Project Cost Estimator
              </a>
            </div>
          </div>
        </div>

        {/* Floating Award Badge */}
        <div className="sf-hero-award-card">
          <Award className="w-9 h-9 text-amber-400 shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-white mb-0.5">Best of Houzz Design 2024</h4>
            <p className="text-xs text-slate-300">15+ Years of Central Indiana Masonry</p>
          </div>
        </div>
      </section>

      {/* 4. Stats Banner */}
      <section className="sf-stats-row">
        <div className="sf-wrap sf-stats-flex">
          <div className="sf-stat-unit">
            <div className="sf-stat-ico">
              <Trees className="w-6 h-6" />
            </div>
            <div>
              <h3>15+</h3>
              <p>Years in Indiana</p>
            </div>
          </div>

          <div className="sf-stat-unit">
            <div className="sf-stat-ico">
              <Hammer className="w-6 h-6" />
            </div>
            <div>
              <h3>850+</h3>
              <p>Estates Transformed</p>
            </div>
          </div>

          <div className="sf-stat-unit">
            <div className="sf-stat-ico">
              <Star className="w-6 h-6 text-amber-500 fill-current" />
            </div>
            <div>
              <h3>4.97/5</h3>
              <p>180+ Google Reviews</p>
            </div>
          </div>

          <div className="sf-stat-unit">
            <div className="sf-stat-ico">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3>3-Year</h3>
              <p>Craftsman Warranty</p>
            </div>
          </div>

          <div className="sf-stat-unit">
            <div className="sf-stat-ico">
              <CircleDollarSign className="w-6 h-6" />
            </div>
            <div>
              <h3>0% APR</h3>
              <p>Financing Options</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Hardscape Stone & Texture Studio */}
      <section id="sf-studio" className="sf-section">
        <div className="sf-wrap">
          <div className="sf-section-heading-wrap">
            <div className="sf-eyebrow-tag">
              <Shovel className="w-4 h-4" />
              Material Science
            </div>
            <h2 className="sf-section-h2">Architectural Natural Stone Studio</h2>
            <p className="sf-section-subtext">
              Inspect hand-selected Indiana limestone, Pennsylvania bluestone, and engineered pavers built to withstand Midwestern freeze-thaw cycles.
            </p>
          </div>

          <div className="sf-stone-studio-card">
            <div className="sf-stone-grid">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-3">
                  Select Hardscape Stone Profile:
                </div>
                <div className="sf-stone-swatch-list">
                  {naturalStones.map((stone) => (
                    <button
                      key={stone.id}
                      type="button"
                      className={`sf-stone-swatch-btn ${activeStone.id === stone.id ? "active" : ""}`}
                      onClick={() => setActiveStone(stone)}
                    >
                      <div
                        className="sf-stone-color-block"
                        style={{ backgroundColor: stone.color }}
                      ></div>
                      <div className="sf-stone-swatch-info">
                        <h4>{stone.name.split("®")[0]}</h4>
                        <span>{stone.type}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Stone Preview Spec Card */}
              <div className="sf-stone-preview-box">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                  {activeStone.type}
                </div>
                <h3 className="sf-font-serif text-2xl font-bold text-white mb-2">
                  {activeStone.name}
                </h3>
                <p className="text-xs text-slate-300 mb-6 leading-relaxed">
                  {activeStone.desc}
                </p>

                <div className="space-y-1 mb-6">
                  <div className="sf-stone-spec-row">
                    <span className="text-slate-400">Compressive Strength:</span>
                    <strong className="text-amber-300">{activeStone.compressive}</strong>
                  </div>
                  <div className="sf-stone-spec-row">
                    <span className="text-slate-400">Traction / Slip Resistance:</span>
                    <strong className="text-white">{activeStone.slipRating}</strong>
                  </div>
                  <div className="sf-stone-spec-row">
                    <span className="text-slate-400">Thermal Solar Reflectance:</span>
                    <strong className="text-emerald-300">{activeStone.sriScore}</strong>
                  </div>
                  <div className="sf-stone-spec-row">
                    <span className="text-slate-400">Warranty Coverage:</span>
                    <strong className="text-white">3-Yr Workmanship + Lifetime Material</strong>
                  </div>
                </div>

                <a
                  href="#sf-quote-form"
                  className="sf-btn sf-btn-clay w-full"
                  onClick={(e) => {
                    scrollTo(e, "sf-quote-form");
                    setFormNotes(`Selected Hardscape Material: ${activeStone.name}`);
                  }}
                >
                  Request Stone Samples &amp; 3D Design
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Four-Season Bloom & Plant Architecture Visualizer */}
      <section id="sf-seasons" className="sf-section moss-bg">
        <div className="sf-wrap">
          <div className="sf-section-heading-wrap">
            <div className="sf-eyebrow-tag !text-amber-300">
              <Flower2 className="w-4 h-4" />
              Botanical Architecture
            </div>
            <h2 className="sf-section-h2 !text-white">Four-Season Garden Bloom Calendar</h2>
            <p className="sf-section-subtext !text-slate-300">
              We design layered planting schemes that deliver 365 days of architectural structure, blooming floral fragrance, and striking winter interest.
            </p>
          </div>

          {/* Season Tabs */}
          <div className="sf-season-tabs">
            {seasonData.map((s) => (
              <button
                key={s.id}
                type="button"
                className={`sf-season-btn ${activeSeason.id === s.id ? "active" : ""}`}
                onClick={() => setActiveSeason(s)}
              >
                {s.title}
              </button>
            ))}
          </div>

          {/* Season Display Card */}
          <div className="p-8 rounded-2xl bg-[#1a231a] border border-emerald-900/60 max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300">
                {activeSeason.tag}
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-800">
                Central Indiana Climate Zone 6a
              </span>
            </div>
            <h3 className="sf-font-serif text-2xl font-bold text-white mb-3">
              {activeSeason.title}
            </h3>
            <p className="text-sm text-slate-300 mb-6 leading-relaxed">
              {activeSeason.desc}
            </p>

            <div className="p-4 rounded-xl bg-black/40 border border-white/10 mb-6">
              <div className="text-xs font-bold text-amber-300 uppercase mb-1">
                Botanical Focal Species:
              </div>
              <p className="text-xs text-white font-medium">{activeSeason.focalPoints}</p>
            </div>

            <div className="flex justify-between items-center text-xs text-slate-400 pt-4 border-t border-white/10">
              <span>Maintenance Protocol: <strong className="text-slate-200">{activeSeason.careNotes}</strong></span>
              <a
                href="#sf-quote-form"
                className="text-amber-300 font-bold hover:underline"
                onClick={(e) => scrollTo(e, "sf-quote-form")}
              >
                Planting Plan Discovery →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Interactive Landscape Budget Calculator */}
      <section id="sf-calculator" className="sf-section sand-bg">
        <div className="sf-wrap">
          <div className="sf-section-heading-wrap">
            <div className="sf-eyebrow-tag">
              <Calculator className="w-4 h-4" />
              Pre-Con Estimator
            </div>
            <h2 className="sf-section-h2">Landscape Project Cost Calculator</h2>
            <p className="sf-section-subtext">
              Configure your hardscape footprint, outdoor cooking amenities, and lighting packages for a transparent investment ballpark.
            </p>
          </div>

          <div className="sf-calculator-box">
            <div className="sf-calc-grid">
              <div className="space-y-6">
                {/* 1. Scope Type */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-3">
                    1. Primary Hardscape Scope:
                  </div>
                  <div className="sf-calc-chip-grid">
                    {hardscapeScopes.map((scope) => (
                      <button
                        key={scope.id}
                        type="button"
                        className={`sf-calc-chip ${selectedScope.id === scope.id ? "active" : ""}`}
                        onClick={() => setSelectedScope(scope)}
                      >
                        <div className="text-sm font-bold text-stone-900 mb-1">{scope.name}</div>
                        <div className="text-xs text-amber-700">From ${scope.baseRate}/SF</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Footprint Size */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-3">
                    2. Target Square Footage Footprint:
                  </div>
                  <div className="sf-calc-chip-grid">
                    {patioFootprints.map((fp) => (
                      <button
                        key={fp.id}
                        type="button"
                        className={`sf-calc-chip ${selectedFootprint.id === fp.id ? "active" : ""}`}
                        onClick={() => setSelectedFootprint(fp)}
                      >
                        <div className="text-sm font-bold text-stone-900 mb-1">{fp.label}</div>
                        <div className="text-xs text-stone-500">{fp.sqFt} Sq Ft Hardscape</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Luxury Add-Ons */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-stone-600 mb-3">
                    3. Luxury Add-On Amenities:
                  </div>
                  <div className="sf-upgrade-grid">
                    {upgradeAddOns.map((up) => {
                      const isChecked = selectedAddOns.includes(up.id);
                      return (
                        <div
                          key={up.id}
                          className={`sf-upgrade-pill ${isChecked ? "checked" : ""}`}
                          onClick={() => toggleAddOn(up.id)}
                        >
                          <div
                            className={`w-4 h-4 rounded border flex items-center justify-center ${
                              isChecked ? "bg-amber-700 border-amber-700 text-white" : "border-stone-400"
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3" />}
                          </div>
                          <span className="text-stone-800">{up.name}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Calculation Summary Box */}
              <div className="p-8 rounded-2xl bg-[#141b14] border border-amber-500/40 text-center relative text-white">
                <div className="text-xs font-extrabold uppercase tracking-widest text-amber-300 mb-2">
                  Estimated Investment Ballpark
                </div>
                <div className="text-4xl font-black text-white my-3">
                  ${calculatedBudget.min} - ${calculatedBudget.max}
                </div>
                <p className="text-xs text-slate-300 mb-6">
                  {selectedScope.name} • {selectedFootprint.label}
                </p>

                <ul className="text-left space-y-2 text-xs text-slate-300 py-4 border-t border-b border-emerald-950 mb-6">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>8-12\" compacted aggregate road-base excavation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>Polymeric high-durability weed-free joint sand</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-300 shrink-0" />
                    <span>3-Year Master Craftsman Workmanship Warranty</span>
                  </li>
                </ul>

                <a
                  href="#sf-quote-form"
                  className="sf-btn sf-btn-clay w-full"
                  onClick={(e) => {
                    scrollTo(e, "sf-quote-form");
                    setFormNotes(
                      `Scope: ${selectedScope.name} (${selectedFootprint.label}) | Add-ons: ${selectedAddOns.join(", ")} | Estimated: $${calculatedBudget.min} - $${calculatedBudget.max}`
                    );
                  }}
                >
                  Apply Scope to 3D Consultation
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Core Capabilities Grid */}
      <section id="sf-services" className="sf-section">
        <div className="sf-wrap">
          <div className="sf-section-heading-wrap">
            <div className="sf-eyebrow-tag">
              <Shovel className="w-4 h-4" />
              Design-Build Capabilities
            </div>
            <h2 className="sf-section-h2">Exceptional Spaces Crafted with Intention</h2>
            <p className="sf-section-subtext">
              Every stone, tree, and ambient light channel is positioned to create a natural extension of your home's indoor living areas.
            </p>
          </div>

          <div className="sf-services-grid">
            {capabilities.map((cap, idx) => (
              <div key={idx} className="sf-service-card">
                <div className="sf-service-frame">
                  <img src={cap.image} alt={cap.title} />
                  <div className="absolute top-4 left-4 bg-stone-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-bold">
                    {cap.badge}
                  </div>
                </div>
                <div className="sf-service-body">
                  <h3>{cap.title}</h3>
                  <p>{cap.desc}</p>
                  <ul className="space-y-2 mb-6 text-xs text-stone-600">
                    {cap.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#sf-quote-form"
                    className="mt-auto text-sm font-bold text-amber-800 hover:text-amber-900 flex items-center gap-1.5"
                    onClick={(e) => {
                      scrollTo(e, "sf-quote-form");
                      setFormNotes(`Inquiring about: ${cap.title}`);
                    }}
                  >
                    <span>Design This Hardscape</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. 5-Step Landscape Architecture Process */}
      <section id="sf-process" className="sf-section sand-bg">
        <div className="sf-wrap">
          <div className="sf-section-heading-wrap">
            <div className="sf-eyebrow-tag">
              <Ruler className="w-4 h-4" />
              Methodical Execution
            </div>
            <h2 className="sf-section-h2">The Stonefield Design-Build Framework</h2>
            <p className="sf-section-subtext">
              A structured roadmap ensuring your estate landscape is delivered on time, with zero surprises, and with flawless execution.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {processSteps.map((step) => (
              <div key={step.step} className="p-6 rounded-2xl bg-white border border-stone-200 shadow-sm hover:border-amber-700 transition-all">
                <div className="w-10 h-10 rounded-xl bg-amber-700/10 text-amber-800 font-extrabold flex items-center justify-center text-sm mb-4">
                  {step.step}
                </div>
                <h4 className="font-bold text-stone-900 text-base mb-2">{step.title}</h4>
                <p className="text-xs text-stone-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Service Area & Soil Feasibility Validator */}
      <section id="sf-area" className="sf-section">
        <div className="sf-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="sf-eyebrow-tag">
                <MapPin className="w-4 h-4" />
                Central Indiana Coverage
              </div>
              <h2 className="sf-section-h2">Serving Indiana’s Finest Neighborhoods</h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">
                Stonefield Landscapes maintains dedicated construction crews across Marion, Hamilton, and Boone Counties, specializing in limestone estates in:
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {[
                  "Carmel (Village of WestClay, Bridgewater)",
                  "Zionsville (Holliday Farms)",
                  "Meridian Hills",
                  "Geist Reservoir",
                  "Noblesville (Lochaven)",
                  "Westfield (Chatham Hills)",
                ].map((city) => (
                  <span key={city} className="px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-200 text-xs font-semibold text-stone-800">
                    📍 {city}
                  </span>
                ))}
              </div>

              <form onSubmit={handleAreaCheck} className="flex gap-3">
                <input
                  type="text"
                  placeholder="Enter your Neighborhood or ZIP (e.g. 46032, Carmel)..."
                  value={areaInput}
                  onChange={(e) => setAreaInput(e.target.value)}
                  className="flex-grow bg-white border border-stone-300 rounded-xl px-4 py-3 text-xs outline-none focus:border-amber-700 focus:ring-2 focus:ring-amber-700/20"
                />
                <button type="submit" className="sf-btn sf-btn-clay">
                  Check Schedule
                </button>
              </form>

              {areaResult && (
                <div className="mt-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-xs text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{areaResult}</span>
                </div>
              )}
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-stone-200">
              <img
                src={entryImg}
                alt="Carmel Indiana landscape architecture front entry"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 11. Multi-Step 3D Master Plan Request Form */}
      <section id="sf-quote-form" className="sf-section sand-bg">
        <div className="sf-wrap">
          <div className="sf-form-card">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="sf-eyebrow-tag">
                  <Compass className="w-4 h-4" />
                  Initial Design Walk
                </div>
                <h2 className="sf-font-serif text-3xl font-bold text-stone-900 mb-4 leading-tight">
                  Schedule Your 3D <br />
                  <span className="text-amber-800">Master Plan Discovery</span>
                </h2>
                <p className="text-stone-600 text-sm leading-relaxed mb-6">
                  Meet with our principal landscape architect at your estate. We will evaluate your site grades, drainage, and lifestyle needs to craft your custom master plan.
                </p>

                <div className="space-y-3.5 text-xs text-stone-700 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Laser elevation survey &amp; drainage feasibility analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Complete 4K photorealistic 3D rendering package</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-700 shrink-0" />
                    <span>Itemized transparent line-item estimate guaranteed for 60 days</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-center gap-4">
                  <Phone className="w-8 h-8 text-amber-800" />
                  <div>
                    <div className="text-xs text-stone-500">Carmel Studio Direct Line:</div>
                    <div className="text-base font-bold text-stone-900">(317) 555-0148</div>
                  </div>
                </div>
              </div>

              {/* Form Inputs */}
              <div className="lg:col-span-7">
                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center animate-in fade-in">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-stone-900 mb-2">Master Plan Discovery Booked!</h3>
                    <p className="text-stone-600 text-sm mb-6">
                      Thank you, <strong>{formName || "Homeowner"}</strong>. Our senior landscape architect has received your property details and will contact you within <strong>24 hours</strong>.
                    </p>
                    <button
                      type="button"
                      className="sf-btn sf-btn-moss"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Submit Another Inquiry
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
                          placeholder="e.g. Jonathan Hayes"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className="sf-input"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase text-stone-600 block mb-1.5">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. (317) 555-0148"
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          className="sf-input"
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
                          placeholder="e.g. jonathan@example.com"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          className="sf-input"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase text-stone-600 block mb-1.5">
                          Property Location / City *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Carmel, Zionsville, Meridian Hills"
                          className="sf-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase text-stone-600 block mb-1.5">
                        Backyard Goals, Patio Size &amp; Vision
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Tell us about your stone preferences, outdoor kitchen, pool surround, or planting goals..."
                        value={formNotes}
                        onChange={(e) => setFormNotes(e.target.value)}
                        className="sf-input"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase text-stone-600 block mb-1.5">
                        Attach Yard Photos or Plat Survey (Optional)
                      </label>
                      <div className="border border-dashed border-stone-300 rounded-xl p-6 text-center bg-white hover:bg-stone-50 transition-colors cursor-pointer">
                        <UploadCloud className="w-8 h-8 text-amber-800 mx-auto mb-2" />
                        <p className="text-xs text-stone-700 font-medium">
                          Drag &amp; drop yard photos or site survey maps, or <span className="text-amber-800 underline">browse</span>
                        </p>
                        <p className="text-[11px] text-stone-400 mt-1">Accepts PDF, JPG, PNG up to 25MB</p>
                        <input type="file" className="hidden" />
                      </div>
                    </div>

                    <button type="submit" className="sf-btn sf-btn-clay sf-btn-lg w-full mt-2">
                      Schedule 3D Master Plan Discovery
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
      <section id="sf-faq" className="sf-section">
        <div className="sf-wrap">
          <div className="sf-section-heading-wrap">
            <div className="sf-eyebrow-tag">
              <HelpCircle className="w-4 h-4" />
              Homeowner FAQs
            </div>
            <h2 className="sf-section-h2">Frequently Asked Questions</h2>
            <p className="sf-section-subtext">
              Clear guidance on hardscape longevity, Indiana limestone care, drainage, and planting architecture.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqsList.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`sf-faq-box ${isOpen ? "active" : ""}`}>
                  <button
                    type="button"
                    className="sf-faq-header"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className="w-5 h-5" />
                  </button>
                  {isOpen && <div className="sf-faq-body">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. Footer */}
      <footer className="sf-footer-block">
        <div className="sf-wrap">
          <div className="sf-footer-grid">
            <div className="sf-footer-col">
              <div className="sf-brand-box mb-4">
                <div className="sf-brand-logo-mark">
                  <Leaf className="w-5 h-5" />
                </div>
                <div className="sf-brand-text">
                  <h2 className="text-white">STONEFIELD</h2>
                  <span className="text-amber-300">Landscapes • Architecture</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Central Indiana’s premier landscape architecture and natural stone masonry firm. Dedicated to timeless craftsmanship and 3-Year Master Warranties.
              </p>
              <div className="text-xs text-amber-300 font-bold">
                Licensed &amp; Insured Indiana General Contractor
              </div>
            </div>

            <div className="sf-footer-col">
              <h4>Hardscape Capabilities</h4>
              <ul className="sf-footer-links">
                <li><a href="#sf-services" onClick={(e) => scrollTo(e, "sf-services")}>Indiana Limestone Patios</a></li>
                <li><a href="#sf-services" onClick={(e) => scrollTo(e, "sf-services")}>Poolside Travertine Terraces</a></li>
                <li><a href="#sf-services" onClick={(e) => scrollTo(e, "sf-services")}>Dry-Stack Retaining Walls</a></li>
                <li><a href="#sf-services" onClick={(e) => scrollTo(e, "sf-services")}>Outdoor Kitchens &amp; Fire Pits</a></li>
                <li><a href="#sf-services" onClick={(e) => scrollTo(e, "sf-services")}>Four-Season Botanical Gardens</a></li>
              </ul>
            </div>

            <div className="sf-footer-col">
              <h4>Interactive Studio</h4>
              <ul className="sf-footer-links">
                <li><a href="#sf-studio" onClick={(e) => scrollTo(e, "sf-studio")}>Natural Stone Studio</a></li>
                <li><a href="#sf-seasons" onClick={(e) => scrollTo(e, "sf-seasons")}>4-Season Bloom Calendar</a></li>
                <li><a href="#sf-calculator" onClick={(e) => scrollTo(e, "sf-calculator")}>Project Cost Estimator</a></li>
                <li><a href="#sf-process" onClick={(e) => scrollTo(e, "sf-process")}>Design-Build Journey</a></li>
                <li><a href="#sf-faq" onClick={(e) => scrollTo(e, "sf-faq")}>Landscape FAQs</a></li>
              </ul>
            </div>

            <div className="sf-footer-col">
              <h4>Carmel Design Studio</h4>
              <div className="space-y-2 text-xs text-slate-400">
                <p>📍 11250 N Pennsylvania St, Suite 150<br />Carmel, IN 46032</p>
                <p>📞 Studio Direct: <strong className="text-white">(317) 555-0148</strong></p>
                <p>✉️ design@stonefieldlandscapes.com</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-emerald-950 flex justify-between items-center flex-wrap gap-4 text-xs text-slate-500">
            <div>© {new Date().getFullYear()} Stonefield Landscapes Inc. All Rights Reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400">Privacy Policy</a>
              <a href="#" className="hover:text-slate-400">Terms of Service</a>
              <a href="#" className="hover:text-slate-400">3-Year Warranty Guide</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default StonefieldLandscapes;
