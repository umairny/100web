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
      <style>{css}</style>
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

const css = `
/* Stonefield Landscapes - Indiana Limestone & Botanical Estate Design System */

@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

.sf-site {
  --sf-moss-deep: #141b14;
  --sf-moss: #222d22;
  --sf-moss-surface: #2d3b2d;
  --sf-moss-card: #374737;
  
  --sf-limestone: #f9f7f2;
  --sf-limestone-card: #f2ede2;
  --sf-limestone-border: rgba(60, 75, 55, 0.12);
  
  --sf-clay: #b45309;
  --sf-clay-light: #d97706;
  --sf-clay-glow: rgba(180, 83, 9, 0.25);
  
  --sf-sage: #16a34a;
  --sf-sage-light: #4ade80;
  
  --sf-text-dark: #1c241c;
  --sf-text-muted: #536253;
  --sf-text-light: #f8fafc;
  --sf-text-light-muted: #cbd5e1;

  background-color: var(--sf-limestone);
  color: var(--sf-text-dark);
  font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
  line-height: 1.6;
  overflow-x: clip;
}

.sf-site * {
  box-sizing: border-box;
}

.sf-site a {
  text-decoration: none;
  color: inherit;
}

.sf-font-serif {
  font-family: 'Cormorant Garamond', Georgia, serif;
}

.sf-wrap {
  width: min(1380px, calc(100% - 64px));
  margin-inline: auto;
}

@media (max-width: 640px) {
  .sf-wrap {
    width: calc(100% - 32px);
  }
}

/* Animations */
@keyframes botanicalPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.08); }
}

.sf-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--sf-sage-light);
  box-shadow: 0 0 12px var(--sf-sage-light);
  animation: botanicalPulse 2s infinite;
  display: inline-block;
}

/* 1. Top Ribbon */
.sf-top-ribbon {
  background: var(--sf-moss-deep);
  color: var(--sf-text-light-muted);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  padding: 6px 0;
  font-size: 0.8125rem;
}

.sf-top-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.sf-top-pill {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: rgba(74, 222, 128, 0.12);
  border: 1px solid rgba(74, 222, 128, 0.3);
  padding: 2px 10px;
  border-radius: 9999px;
  color: var(--sf-sage-light);
  font-weight: 700;
  font-size: 0.75rem;
}

@media (max-width: 768px) {
  .sf-top-service-text {
    display: none;
  }
  .sf-top-content {
    justify-content: center;
    text-align: center;
  }
}

/* 2. Main Navigation Header (Floating Luxury Glassmorphic Nav) */
.sf-header-bar {
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(249, 247, 242, 0.94);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--sf-limestone-border);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.sf-header-bar.scrolled {
  background: rgba(249, 247, 242, 0.98);
  box-shadow: 0 10px 30px rgba(20, 27, 20, 0.08);
  border-bottom-color: rgba(60, 75, 55, 0.16);
}

.sf-nav-flex {
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}

@media (max-width: 640px) {
  .sf-nav-flex {
    height: 68px;
  }
}

.sf-brand-box {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  cursor: pointer;
  flex-shrink: 0;
}

.sf-brand-logo-mark {
  width: 44px;
  height: 44px;
  background: linear-gradient(135deg, var(--sf-moss) 0%, var(--sf-moss-deep) 100%);
  color: var(--sf-sage-light);
  border: 1px solid rgba(74, 222, 128, 0.35);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 14px rgba(20, 27, 20, 0.2);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  flex-shrink: 0;
}

.sf-brand-box:hover .sf-brand-logo-mark {
  transform: translateY(-2px) rotate(2deg);
  box-shadow: 0 8px 20px rgba(20, 27, 20, 0.3);
}

.sf-brand-text h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--sf-moss-deep);
  margin: 0;
  line-height: 1;
  letter-spacing: 0.01em;
}

.sf-brand-text span {
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--sf-clay);
  display: block;
  margin-top: 2px;
}

@media (max-width: 480px) {
  .sf-brand-logo-mark {
    width: 36px;
    height: 36px;
  }
  .sf-brand-text h2 {
    font-size: 1.2rem;
  }
  .sf-brand-text span {
    font-size: 0.5625rem;
  }
}

/* Nav links pill container (Visible on Desktop >= 1200px) */
.sf-nav-pill-container {
  display: flex;
  align-items: center;
  gap: 2px;
  background: rgba(45, 59, 45, 0.05);
  border: 1px solid rgba(60, 75, 55, 0.1);
  padding: 4px 6px;
  border-radius: 9999px;
}

.sf-nav-link-btn {
  font-size: 0.8125rem;
  font-weight: 600;
  color: var(--sf-text-muted);
  padding: 7px 12px;
  border-radius: 9999px;
  transition: all 0.2s ease;
  position: relative;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
}

@media (min-width: 1400px) {
  .sf-nav-link-btn {
    font-size: 0.875rem;
    padding: 8px 15px;
  }
}

.sf-nav-link-btn:hover {
  color: var(--sf-moss-deep);
  background: rgba(255, 255, 255, 0.8);
}

.sf-nav-link-btn.active {
  color: #ffffff;
  background: var(--sf-moss-deep);
  font-weight: 700;
  box-shadow: 0 2px 8px rgba(20, 27, 20, 0.2);
}

.sf-nav-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.sf-nav-phone {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8125rem;
  font-weight: 700;
  color: var(--sf-moss-deep);
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid var(--sf-limestone-border);
  background: #ffffff;
  transition: all 0.2s ease;
  white-space: nowrap;
  text-decoration: none;
}

.sf-nav-phone:hover {
  border-color: var(--sf-clay);
  color: var(--sf-clay);
  transform: translateY(-1px);
}

.sf-nav-cta-btn {
  display: inline-flex;
}

/* Mobile Hamburger Button */
.sf-hamburger-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 10px;
  border: 1px solid var(--sf-limestone-border);
  background: #ffffff;
  color: var(--sf-moss-deep);
  cursor: pointer;
  transition: all 0.2s ease;
}

.sf-hamburger-btn:hover {
  background: var(--sf-limestone);
  border-color: var(--sf-clay);
}

/* Breakpoint Visibility Rules */
@media (min-width: 1200px) {
  .sf-nav-pill-container {
    display: flex !important;
  }
  .sf-hamburger-btn {
    display: none !important;
  }
  .sf-drawer-backdrop,
  .sf-drawer-menu {
    display: none !important;
  }
}

@media (max-width: 1199px) {
  .sf-nav-pill-container {
    display: none !important;
  }
  .sf-hamburger-btn {
    display: flex !important;
  }
}

@media (max-width: 768px) {
  .sf-nav-phone {
    display: none !important;
  }
  .sf-nav-cta-btn {
    display: none !important;
  }
}

/* Mobile Slide-Out Drawer Overlay */
.sf-drawer-root {
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  pointer-events: auto;
}

.sf-drawer-backdrop {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  background: rgba(10, 16, 10, 0.75);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  z-index: 100000;
  cursor: pointer;
  animation: sfFadeIn 0.25s ease-out forwards;
}

.sf-drawer-menu {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(360px, 86vw);
  height: 100%;
  height: 100dvh;
  background: #141b14;
  color: #ffffff;
  z-index: 100001;
  box-shadow: -15px 0 50px rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  border-left: 1px solid rgba(74, 222, 128, 0.25);
  animation: sfSlideIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes sfFadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes sfSlideIn {
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
}

.sf-drawer-header {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  background: #0f150f;
}

.sf-drawer-body {
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  flex-grow: 1;
}

.sf-drawer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 16px;
  border-radius: 12px;
  font-size: 0.9375rem;
  font-weight: 600;
  color: #cbd5e1;
  transition: all 0.2s ease;
  text-decoration: none;
  cursor: pointer;
}

.sf-drawer-link:hover,
.sf-drawer-link.active {
  background: rgba(74, 222, 128, 0.12);
  color: #ffffff;
}

.sf-drawer-link.active {
  border-left: 3px solid var(--sf-clay);
  color: var(--sf-clay-light);
  font-weight: 700;
}

.sf-drawer-footer {
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #0f150f;
}

/* Custom Buttons */
.sf-btn {
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

.sf-btn-clay {
  background: linear-gradient(135deg, var(--sf-clay) 0%, #92400e 100%);
  color: #ffffff;
  box-shadow: 0 4px 18px var(--sf-clay-glow);
}

.sf-btn-clay:hover {
  background: linear-gradient(135deg, var(--sf-clay-light) 0%, var(--sf-clay) 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 26px var(--sf-clay-glow);
}

.sf-btn-moss {
  background: var(--sf-moss);
  color: #ffffff;
}

.sf-btn-moss:hover {
  background: var(--sf-moss-surface);
  transform: translateY(-2px);
}

.sf-btn-outline {
  background: transparent;
  border: 1px solid var(--sf-moss);
  color: var(--sf-moss);
}

.sf-btn-outline:hover {
  background: var(--sf-moss);
  color: #ffffff;
  transform: translateY(-2px);
}

.sf-btn-sm {
  padding: 9px 18px;
  font-size: 0.8125rem;
}

.sf-btn-lg {
  padding: 16px 34px;
  font-size: 1.0625rem;
}

/* 3. Hero Section */
.sf-hero-container {
  position: relative;
  min-height: 660px;
  display: flex;
  align-items: center;
  background: var(--sf-moss-deep);
  color: #ffffff;
  overflow: hidden;
}

.sf-hero-bg-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.42;
  filter: saturate(1.15);
}

.sf-hero-shade-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    90deg,
    rgba(14, 23, 14, 0.96) 0%,
    rgba(14, 23, 14, 0.82) 45%,
    rgba(14, 23, 14, 0.35) 80%,
    rgba(14, 23, 14, 0.15) 100%
  );
}

.sf-hero-content-block {
  position: relative;
  z-index: 2;
  max-width: 740px;
  padding: 80px 0;
}

.sf-hero-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(180, 83, 9, 0.2);
  border: 1px solid rgba(180, 83, 9, 0.4);
  color: #fcd34d;
  padding: 6px 14px;
  border-radius: 9999px;
  font-size: 0.8125rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  margin-bottom: 24px;
}

.sf-hero-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(3rem, 5vw, 4.8rem);
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.01em;
  margin-bottom: 24px;
}

.sf-hero-title span {
  color: #fcd34d;
  font-style: italic;
}

.sf-hero-lead {
  font-size: 1.15rem;
  color: var(--sf-text-light-muted);
  line-height: 1.75;
  margin-bottom: 36px;
}

.sf-hero-btn-row {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

/* Floating Award Card */
.sf-hero-award-card {
  position: absolute;
  bottom: 40px;
  right: 60px;
  background: rgba(20, 27, 20, 0.9);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(180, 83, 9, 0.35);
  border-radius: 20px;
  padding: 22px 26px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  gap: 16px;
  z-index: 3;
}

/* 4. Stats Banner */
.sf-stats-row {
  background: #ffffff;
  border-bottom: 1px solid var(--sf-limestone-border);
}

.sf-stats-flex {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.sf-stat-unit {
  padding: 30px 24px;
  display: flex;
  align-items: center;
  gap: 16px;
  border-right: 1px solid var(--sf-limestone-border);
}

.sf-stat-unit:last-child {
  border-right: none;
}

.sf-stat-ico {
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: rgba(180, 83, 9, 0.1);
  color: var(--sf-clay);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.sf-stat-unit h3 {
  font-size: 1.65rem;
  font-weight: 800;
  color: var(--sf-moss-deep);
  line-height: 1;
  margin-bottom: 4px;
}

.sf-stat-unit p {
  font-size: 0.75rem;
  font-weight: 700;
  color: var(--sf-text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin: 0;
}

/* Section Header */
.sf-section {
  padding: 96px 0;
  position: relative;
}

.sf-section.moss-bg {
  background-color: var(--sf-moss-deep);
  color: #ffffff;
}

.sf-section.sand-bg {
  background-color: var(--sf-limestone-card);
}

.sf-section-heading-wrap {
  text-align: center;
  max-width: 760px;
  margin: 0 auto 60px;
}

.sf-eyebrow-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.8125rem;
  font-weight: 800;
  color: var(--sf-clay);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 14px;
}

.sf-section-h2 {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.4rem, 4vw, 3.2rem);
  font-weight: 700;
  color: var(--sf-moss-deep);
  letter-spacing: -0.01em;
  margin-bottom: 16px;
}

.sf-section.moss-bg .sf-section-h2 {
  color: #ffffff;
}

.sf-section-subtext {
  font-size: 1.0625rem;
  color: var(--sf-text-muted);
  line-height: 1.7;
}

.sf-section.moss-bg .sf-section-subtext {
  color: var(--sf-text-light-muted);
}

/* 1. Hardscape Natural Stone Studio Card */
.sf-stone-studio-card {
  background: #ffffff;
  border-radius: 24px;
  border: 1px solid var(--sf-limestone-border);
  box-shadow: 0 20px 50px rgba(20, 27, 20, 0.06);
  padding: 48px;
}

.sf-stone-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: center;
}

.sf-stone-swatch-list {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 24px;
}

.sf-stone-swatch-btn {
  background: var(--sf-limestone);
  border: 1px solid var(--sf-limestone-border);
  border-radius: 14px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 14px;
  text-align: left;
}

.sf-stone-swatch-btn:hover {
  border-color: var(--sf-clay);
  background: #ffffff;
}

.sf-stone-swatch-btn.active {
  background: rgba(180, 83, 9, 0.08);
  border-color: var(--sf-clay);
  box-shadow: 0 0 0 2px var(--sf-clay);
}

.sf-stone-color-block {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  flex-shrink: 0;
  border: 2px solid rgba(0, 0, 0, 0.1);
}

.sf-stone-swatch-info h4 {
  font-size: 0.9375rem;
  font-weight: 700;
  color: var(--sf-moss-deep);
  margin: 0 0 2px 0;
}

.sf-stone-swatch-info span {
  font-size: 0.75rem;
  color: var(--sf-text-muted);
}

/* Material Spec Box */
.sf-stone-preview-box {
  background: var(--sf-moss);
  border-radius: 20px;
  padding: 36px;
  color: #ffffff;
  position: relative;
  overflow: hidden;
}

.sf-stone-preview-box::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: linear-gradient(90deg, var(--sf-clay), #fcd34d);
}

.sf-stone-spec-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.8125rem;
}

/* 2. Four-Season Bloom Visualizer */
.sf-season-tabs {
  display: flex;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
  margin-bottom: 40px;
}

.sf-season-btn {
  background: var(--sf-moss-surface);
  border: 1px solid rgba(255, 255, 255, 0.12);
  color: var(--sf-text-light-muted);
  padding: 12px 24px;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.sf-season-btn:hover {
  background: var(--sf-moss-card);
  color: #ffffff;
}

.sf-season-btn.active {
  background: var(--sf-clay);
  border-color: var(--sf-clay);
  color: #ffffff;
  box-shadow: 0 4px 16px var(--sf-clay-glow);
}

/* 3. Budget Calculator Box */
.sf-calculator-box {
  background: #ffffff;
  border: 1px solid var(--sf-limestone-border);
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 20px 60px rgba(20, 27, 20, 0.06);
}

.sf-calc-grid {
  display: grid;
  grid-template-columns: 1.25fr 0.75fr;
  gap: 48px;
  align-items: center;
}

.sf-calc-chip-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 12px;
}

.sf-calc-chip {
  background: var(--sf-limestone);
  border: 1px solid var(--sf-limestone-border);
  border-radius: 12px;
  padding: 14px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
}

.sf-calc-chip:hover {
  border-color: var(--sf-clay);
}

.sf-calc-chip.active {
  border-color: var(--sf-clay);
  background: rgba(180, 83, 9, 0.08);
  box-shadow: 0 0 0 2px var(--sf-clay);
}

.sf-upgrade-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
}

.sf-upgrade-pill {
  background: var(--sf-limestone);
  border: 1px solid var(--sf-limestone-border);
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

.sf-upgrade-pill.checked {
  border-color: var(--sf-clay);
  background: rgba(180, 83, 9, 0.08);
}

/* Services Grid */
.sf-services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
}

.sf-service-card {
  background: #ffffff;
  border-radius: 20px;
  border: 1px solid var(--sf-limestone-border);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  box-shadow: 0 4px 20px rgba(20, 27, 20, 0.04);
}

.sf-service-card:hover {
  transform: translateY(-6px);
  border-color: var(--sf-clay);
  box-shadow: 0 20px 40px rgba(20, 27, 20, 0.08);
}

.sf-service-frame {
  height: 230px;
  position: relative;
  overflow: hidden;
}

.sf-service-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.sf-service-card:hover .sf-service-frame img {
  transform: scale(1.06);
}

.sf-service-body {
  padding: 28px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
}

.sf-service-body h3 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.45rem;
  font-weight: 700;
  color: var(--sf-moss-deep);
  margin: 10px 0 8px;
}

.sf-service-body p {
  color: var(--sf-text-muted);
  font-size: 0.9375rem;
  line-height: 1.6;
  margin-bottom: 20px;
}

/* Form Card */
.sf-form-card {
  background: #ffffff;
  border: 1px solid var(--sf-limestone-border);
  border-radius: 24px;
  padding: 48px;
  box-shadow: 0 20px 50px rgba(20, 27, 20, 0.06);
}

.sf-input {
  width: 100%;
  background: var(--sf-limestone);
  border: 1px solid var(--sf-limestone-border);
  border-radius: 10px;
  padding: 13px 16px;
  font-size: 0.9375rem;
  font-family: inherit;
  outline: none;
  transition: all 0.2s ease;
}

.sf-input:focus {
  border-color: var(--sf-clay);
  background: #ffffff;
  box-shadow: 0 0 0 3px var(--sf-clay-glow);
}

/* FAQ Accordion */
.sf-faq-box {
  background: #ffffff;
  border: 1px solid var(--sf-limestone-border);
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 14px;
  transition: all 0.2s ease;
}

.sf-faq-box.active {
  border-color: var(--sf-clay);
}

.sf-faq-header {
  width: 100%;
  padding: 22px 26px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: none;
  border: none;
  font-size: 1.0625rem;
  font-weight: 700;
  color: var(--sf-moss-deep);
  cursor: pointer;
  text-align: left;
  gap: 16px;
}

.sf-faq-header svg {
  color: var(--sf-clay);
  transition: transform 0.3s ease;
}

.sf-faq-box.active .sf-faq-header svg {
  transform: rotate(180deg);
}

.sf-faq-body {
  padding: 0 26px 24px;
  color: var(--sf-text-muted);
  font-size: 0.9375rem;
  line-height: 1.7;
}

/* Footer */
.sf-footer-block {
  background: var(--sf-moss-deep);
  color: var(--sf-text-light-muted);
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  padding: 80px 0 36px;
}

.sf-footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 0.9fr 0.9fr 1.2fr;
  gap: 48px;
  margin-bottom: 64px;
}

.sf-footer-col h4 {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 20px;
}

.sf-footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 12px;
  font-size: 0.875rem;
}

.sf-footer-links a:hover {
  color: #fcd34d;
}

/* Responsive */
@media (max-width: 1024px) {
  .sf-stats-flex {
    grid-template-columns: repeat(3, 1fr);
  }
  .sf-stone-grid,
  .sf-calc-grid,
  .sf-services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .sf-footer-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .sf-hero-award-card {
    display: none;
  }
}

@media (max-width: 768px) {
  .sf-links-row {
    display: none;
  }
  .sf-stats-flex,
  .sf-stone-grid,
  .sf-calc-grid,
  .sf-services-grid,
  .sf-footer-grid {
    grid-template-columns: 1fr;
  }
  .sf-stone-swatch-list,
  .sf-upgrade-grid {
    grid-template-columns: 1fr;
  }
  .sf-stone-studio-card,
  .sf-calculator-box,
  .sf-form-card {
    padding: 24px;
  }
}

/* =====================================================================
   THEME SELECTOR & PRESET INTEGRATION
   ===================================================================== */
[data-theme-preset]:not([data-theme-preset="original"]) .sf-site,
[data-theme-preset]:not([data-theme-preset="original"]) .sf-drawer-menu,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-site,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-drawer-menu {
  --sf-clay: var(--theme-accent-primary, #b45309) !important;
  --sf-clay-light: var(--theme-accent-primary-hover, #d97706) !important;
  --sf-clay-glow: var(--theme-accent-glow, rgba(180, 83, 9, 0.25)) !important;
  --sf-sage-light: var(--theme-accent-primary, #4ade80) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sf-btn-clay,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-btn-clay {
  background: var(--theme-accent-primary) !important;
  color: var(--theme-accent-contrast, #ffffff) !important;
  box-shadow: 0 4px 18px var(--theme-accent-glow, rgba(180, 83, 9, 0.25)) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sf-btn-clay:hover,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-btn-clay:hover {
  background: var(--theme-accent-primary-hover, var(--theme-accent-primary)) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sf-site .sf-brand-text span,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-site .sf-brand-text span,
[data-theme-preset]:not([data-theme-preset="original"]) .sf-drawer-menu .sf-brand-text span,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-drawer-menu .sf-brand-text span {
  color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sf-site .sf-hero-tag,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-site .sf-hero-tag {
  border-color: var(--theme-accent-primary) !important;
  color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sf-site .sf-hero-title span,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-site .sf-hero-title span {
  color: var(--theme-accent-primary-hover, var(--theme-accent-primary)) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sf-site .sf-eyebrow-tag,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-site .sf-eyebrow-tag {
  color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sf-site .sf-stone-swatch-btn.active,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-site .sf-stone-swatch-btn.active,
[data-theme-preset]:not([data-theme-preset="original"]) .sf-site .sf-calc-chip.active,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-site .sf-calc-chip.active,
[data-theme-preset]:not([data-theme-preset="original"]) .sf-site .sf-upgrade-pill.checked,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-site .sf-upgrade-pill.checked,
[data-theme-preset]:not([data-theme-preset="original"]) .sf-site .sf-faq-box.active,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-site .sf-faq-box.active {
  border-color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sf-site .sf-season-btn.active,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-site .sf-season-btn.active {
  background: var(--theme-accent-primary) !important;
  border-color: var(--theme-accent-primary) !important;
  color: var(--theme-accent-contrast, #ffffff) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sf-drawer-link.active,
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-drawer-link.active {
  border-left-color: var(--theme-accent-primary) !important;
  color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sf-site [class*="text-amber-700"],
[data-theme-preset]:not([data-theme-preset="original"]) .sf-site [class*="text-amber-800"],
[data-theme-preset]:not([data-theme-preset="original"]) .sf-site [class*="text-amber-900"],
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-site [class*="text-amber-700"],
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-site [class*="text-amber-800"],
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-site [class*="text-amber-900"] {
  color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sf-site [class*="bg-amber-700"],
[data-theme-preset]:not([data-theme-preset="original"]) .sf-site [class*="bg-amber-800"],
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-site [class*="bg-amber-700"],
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-site [class*="bg-amber-800"] {
  background-color: var(--theme-accent-primary) !important;
}

[data-theme-preset]:not([data-theme-preset="original"]) .sf-site [class*="border-amber-700"],
[data-theme-preset]:not([data-theme-preset="original"]) .sf-site [class*="border-amber-500"],
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-site [class*="border-amber-700"],
[data-theme-active="true"]:not([data-theme-preset="original"]) .sf-site [class*="border-amber-500"] {
  border-color: var(--theme-accent-primary) !important;
}

/* =====================================================================
   LIGHT MOOD (DEFAULT & ACTIVE)
   ===================================================================== */
html.light .sf-site,
body.light .sf-site,
[data-theme-mood="light"] .sf-site,
:root[data-theme-mood="light"] .sf-site,
:root[data-theme-active="true"][data-theme-mood="light"] .sf-site,
:root.light .sf-site {
  --sf-moss-deep: #141b14;
  --sf-moss: #222d22;
  --sf-moss-surface: #2d3b2d;
  --sf-moss-card: #374737;
  --sf-limestone: var(--theme-bg-base, #f9f7f2);
  --sf-limestone-card: var(--theme-bg-card, #f2ede2);
  --sf-limestone-border: var(--theme-border, rgba(60, 75, 55, 0.12));
  --sf-text-dark: var(--theme-text-primary, #1c241c);
  --sf-text-muted: var(--theme-text-muted, #536253);
  --sf-text-light: #f8fafc;
  --sf-text-light-muted: #cbd5e1;
  background-color: var(--sf-limestone);
  color: var(--sf-text-dark);
}

/* =====================================================================
   DARK MOOD OVERRIDES
   ===================================================================== */
html.dark .sf-site,
html.dark .sf-drawer-menu,
body.dark .sf-site,
body.dark .sf-drawer-menu,
[data-theme-mood="dark"] .sf-site,
[data-theme-mood="dark"] .sf-drawer-menu,
:root[data-theme-mood="dark"] .sf-site,
:root[data-theme-mood="dark"] .sf-drawer-menu,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-site,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-drawer-menu,
:root.dark .sf-site,
:root.dark .sf-drawer-menu {
  --sf-moss-deep: #0a110a;
  --sf-moss: #121c12;
  --sf-moss-surface: #1b281b;
  --sf-moss-card: #233423;
  --sf-limestone: var(--theme-bg-base, #0d140d);
  --sf-limestone-card: var(--theme-bg-card, #131c13);
  --sf-limestone-border: var(--theme-border, rgba(255, 255, 255, 0.12));
  --sf-text-dark: var(--theme-text-primary, #f1f5f9);
  --sf-text-muted: var(--theme-text-muted, #94a3b8);
  --sf-text-light: #f8fafc;
  --sf-text-light-muted: #cbd5e1;
  background-color: var(--sf-limestone);
  color: var(--sf-text-dark);
}

/* Dark mood header & floating nav */
html.dark .sf-header-bar,
[data-theme-mood="dark"] .sf-header-bar,
:root[data-theme-mood="dark"] .sf-header-bar,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-header-bar {
  background: rgba(13, 20, 13, 0.94);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

html.dark .sf-header-bar.scrolled,
[data-theme-mood="dark"] .sf-header-bar.scrolled,
:root[data-theme-mood="dark"] .sf-header-bar.scrolled,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-header-bar.scrolled {
  background: rgba(13, 20, 13, 0.98);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  border-bottom-color: rgba(255, 255, 255, 0.14);
}

html.dark .sf-brand-text h2,
[data-theme-mood="dark"] .sf-brand-text h2,
:root[data-theme-mood="dark"] .sf-brand-text h2,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-brand-text h2 {
  color: #f8fafc;
}

html.dark .sf-nav-phone,
html.dark .sf-hamburger-btn,
[data-theme-mood="dark"] .sf-nav-phone,
[data-theme-mood="dark"] .sf-hamburger-btn,
:root[data-theme-mood="dark"] .sf-nav-phone,
:root[data-theme-mood="dark"] .sf-hamburger-btn,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-nav-phone,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-hamburger-btn {
  background: #182418;
  border-color: rgba(255, 255, 255, 0.15);
  color: #f8fafc;
}

html.dark .sf-nav-phone:hover,
html.dark .sf-hamburger-btn:hover,
[data-theme-mood="dark"] .sf-nav-phone:hover,
[data-theme-mood="dark"] .sf-hamburger-btn:hover,
:root[data-theme-mood="dark"] .sf-nav-phone:hover,
:root[data-theme-mood="dark"] .sf-hamburger-btn:hover,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-nav-phone:hover,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-hamburger-btn:hover {
  background: #233423;
  border-color: var(--sf-clay);
  color: var(--sf-clay-light);
}

html.dark .sf-nav-pill-container,
[data-theme-mood="dark"] .sf-nav-pill-container,
:root[data-theme-mood="dark"] .sf-nav-pill-container,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-nav-pill-container {
  background: rgba(255, 255, 255, 0.06);
  border-color: rgba(255, 255, 255, 0.12);
}

html.dark .sf-nav-link-btn,
[data-theme-mood="dark"] .sf-nav-link-btn,
:root[data-theme-mood="dark"] .sf-nav-link-btn,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-nav-link-btn {
  color: #cbd5e1;
}

html.dark .sf-nav-link-btn:hover,
[data-theme-mood="dark"] .sf-nav-link-btn:hover,
:root[data-theme-mood="dark"] .sf-nav-link-btn:hover,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-nav-link-btn:hover {
  color: #ffffff;
  background: rgba(255, 255, 255, 0.12);
}

html.dark .sf-nav-link-btn.active,
[data-theme-mood="dark"] .sf-nav-link-btn.active,
:root[data-theme-mood="dark"] .sf-nav-link-btn.active,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-nav-link-btn.active {
  background: var(--sf-clay);
  color: #ffffff;
  box-shadow: 0 2px 10px var(--sf-clay-glow);
}

/* Dark mood stats banner */
html.dark .sf-stats-row,
[data-theme-mood="dark"] .sf-stats-row,
:root[data-theme-mood="dark"] .sf-stats-row,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-stats-row {
  background: #111a11;
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

html.dark .sf-stat-unit,
[data-theme-mood="dark"] .sf-stat-unit,
:root[data-theme-mood="dark"] .sf-stat-unit,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-stat-unit {
  border-right-color: rgba(255, 255, 255, 0.1);
}

html.dark .sf-stat-unit h3,
[data-theme-mood="dark"] .sf-stat-unit h3,
:root[data-theme-mood="dark"] .sf-stat-unit h3,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-stat-unit h3 {
  color: #f8fafc;
}

/* Dark mood sections & cards */
html.dark .sf-section.sand-bg,
[data-theme-mood="dark"] .sf-section.sand-bg,
:root[data-theme-mood="dark"] .sf-section.sand-bg,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-section.sand-bg {
  background-color: #0a100a;
}

html.dark .sf-section-h2,
[data-theme-mood="dark"] .sf-section-h2,
:root[data-theme-mood="dark"] .sf-section-h2,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-section-h2 {
  color: #f8fafc;
}

html.dark .sf-stone-studio-card,
html.dark .sf-calculator-box,
html.dark .sf-service-card,
html.dark .sf-form-card,
html.dark .sf-faq-box,
[data-theme-mood="dark"] .sf-stone-studio-card,
[data-theme-mood="dark"] .sf-calculator-box,
[data-theme-mood="dark"] .sf-service-card,
[data-theme-mood="dark"] .sf-form-card,
[data-theme-mood="dark"] .sf-faq-box,
:root[data-theme-mood="dark"] .sf-stone-studio-card,
:root[data-theme-mood="dark"] .sf-calculator-box,
:root[data-theme-mood="dark"] .sf-service-card,
:root[data-theme-mood="dark"] .sf-form-card,
:root[data-theme-mood="dark"] .sf-faq-box,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-stone-studio-card,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-calculator-box,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-service-card,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-form-card,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-faq-box {
  background: var(--sf-limestone-card, #131c13);
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4);
}

html.dark .sf-stone-swatch-btn,
html.dark .sf-calc-chip,
html.dark .sf-upgrade-pill,
html.dark .sf-input,
[data-theme-mood="dark"] .sf-stone-swatch-btn,
[data-theme-mood="dark"] .sf-calc-chip,
[data-theme-mood="dark"] .sf-upgrade-pill,
[data-theme-mood="dark"] .sf-input,
:root[data-theme-mood="dark"] .sf-stone-swatch-btn,
:root[data-theme-mood="dark"] .sf-calc-chip,
:root[data-theme-mood="dark"] .sf-upgrade-pill,
:root[data-theme-mood="dark"] .sf-input,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-stone-swatch-btn,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-calc-chip,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-upgrade-pill,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-input {
  background: #192519;
  border-color: rgba(255, 255, 255, 0.12);
  color: #f8fafc;
}

html.dark .sf-stone-swatch-info h4,
html.dark .sf-service-body h3,
html.dark .sf-faq-header,
[data-theme-mood="dark"] .sf-stone-swatch-info h4,
[data-theme-mood="dark"] .sf-service-body h3,
[data-theme-mood="dark"] .sf-faq-header,
:root[data-theme-mood="dark"] .sf-stone-swatch-info h4,
:root[data-theme-mood="dark"] .sf-service-body h3,
:root[data-theme-mood="dark"] .sf-faq-header,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-stone-swatch-info h4,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-service-body h3,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-faq-header {
  color: #f8fafc;
}

html.dark .sf-stone-swatch-info span,
html.dark .sf-service-body p,
html.dark .sf-faq-body,
[data-theme-mood="dark"] .sf-stone-swatch-info span,
[data-theme-mood="dark"] .sf-service-body p,
[data-theme-mood="dark"] .sf-faq-body,
:root[data-theme-mood="dark"] .sf-stone-swatch-info span,
:root[data-theme-mood="dark"] .sf-service-body p,
:root[data-theme-mood="dark"] .sf-faq-body,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-stone-swatch-info span,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-service-body p,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-faq-body {
  color: #94a3b8;
}

html.dark .sf-site .bg-white,
[data-theme-mood="dark"] .sf-site .bg-white,
:root[data-theme-mood="dark"] .sf-site .bg-white,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-site .bg-white {
  background-color: var(--sf-limestone-card, #131c13) !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
}

html.dark .sf-site .bg-stone-50,
html.dark .sf-site .bg-stone-100,
[data-theme-mood="dark"] .sf-site .bg-stone-50,
[data-theme-mood="dark"] .sf-site .bg-stone-100,
:root[data-theme-mood="dark"] .sf-site .bg-stone-50,
:root[data-theme-mood="dark"] .sf-site .bg-stone-100,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-site .bg-stone-50,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-site .bg-stone-100 {
  background-color: #192519 !important;
  border-color: rgba(255, 255, 255, 0.1) !important;
}

html.dark .sf-site .text-stone-900,
html.dark .sf-site .text-stone-800,
[data-theme-mood="dark"] .sf-site .text-stone-900,
[data-theme-mood="dark"] .sf-site .text-stone-800,
:root[data-theme-mood="dark"] .sf-site .text-stone-900,
:root[data-theme-mood="dark"] .sf-site .text-stone-800,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-site .text-stone-900,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-site .text-stone-800 {
  color: #f8fafc !important;
}

html.dark .sf-site .text-stone-700,
html.dark .sf-site .text-stone-600,
html.dark .sf-site .text-stone-500,
[data-theme-mood="dark"] .sf-site .text-stone-700,
[data-theme-mood="dark"] .sf-site .text-stone-600,
[data-theme-mood="dark"] .sf-site .text-stone-500,
:root[data-theme-mood="dark"] .sf-site .text-stone-700,
:root[data-theme-mood="dark"] .sf-site .text-stone-600,
:root[data-theme-mood="dark"] .sf-site .text-stone-500,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-site .text-stone-700,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-site .text-stone-600,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-site .text-stone-500 {
  color: #94a3b8 !important;
}

html.dark .sf-site .border-stone-200,
html.dark .sf-site .border-stone-300,
[data-theme-mood="dark"] .sf-site .border-stone-200,
[data-theme-mood="dark"] .sf-site .border-stone-300,
:root[data-theme-mood="dark"] .sf-site .border-stone-200,
:root[data-theme-mood="dark"] .sf-site .border-stone-300,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-site .border-stone-200,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-site .border-stone-300 {
  border-color: rgba(255, 255, 255, 0.12) !important;
}

/* Dark mood mobile slide-out drawer (portal level) */
html.dark .sf-drawer-menu,
[data-theme-mood="dark"] .sf-drawer-menu,
:root[data-theme-mood="dark"] .sf-drawer-menu,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-drawer-menu {
  background: #0d140d;
  border-left-color: rgba(255, 255, 255, 0.12);
}

html.dark .sf-drawer-header,
html.dark .sf-drawer-footer,
[data-theme-mood="dark"] .sf-drawer-header,
[data-theme-mood="dark"] .sf-drawer-footer,
:root[data-theme-mood="dark"] .sf-drawer-header,
:root[data-theme-mood="dark"] .sf-drawer-footer,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-drawer-header,
:root[data-theme-active="true"][data-theme-mood="dark"] .sf-drawer-footer {
  background: #090e09;
  border-color: rgba(255, 255, 255, 0.1);
}
`;

