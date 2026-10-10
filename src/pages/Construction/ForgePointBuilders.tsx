import React, { useState, useEffect, useMemo } from "react";
import {
  ArrowRight,
  Award,
  Building2,
  Calculator,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock3,
  FileText,
  HardHat,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Star,
  Users,
  X,
  UploadCloud,
  Layers,
  Ruler,
} from "lucide-react";
import { imageUrl } from "../../assets/images";

// Asset Image Resolvers
const heroImg = imageUrl("Construction/forgepoint/hero.webp") || "/images/Construction/forgepoint/hero.webp";
const customBuildImg = imageUrl("Construction/forgepoint/custombuild.webp") || "/images/Construction/forgepoint/custombuild.webp";
const renovationImg = imageUrl("Construction/forgepoint/homerenovations.webp") || "/images/Construction/forgepoint/homerenovations.webp";
const commercialImg = imageUrl("Construction/forgepoint/commercial.webp") || "/images/Construction/forgepoint/commercial.webp";
const projectDocImg = imageUrl("Construction/forgepoint/project.webp") || "/images/Construction/forgepoint/project.webp";
const estimatesImg = imageUrl("Construction/forgepoint/estimates.webp") || "/images/Construction/forgepoint/estimates.webp";
const image01Img = imageUrl("Construction/forgepoint/image01.webp") || "/images/Construction/forgepoint/image01.webp";
const image02Img = imageUrl("Construction/forgepoint/image02.webp") || "/images/Construction/forgepoint/image02.webp";
const image03Img = imageUrl("Construction/forgepoint/image03.webp") || "/images/Construction/forgepoint/image03.webp";
const image04Img = imageUrl("Construction/forgepoint/image04.webp") || "/images/Construction/forgepoint/image04.webp";

// Navigation links
const navItems = [
  { label: "Services", id: "fp-services" },
  { label: "Cost Estimator", id: "fp-estimator" },
  { label: "Projects", id: "fp-projects" },
  { label: "Our Process", id: "fp-process" },
  { label: "Documentation", id: "fp-documentation" },
  { label: "Reviews", id: "fp-reviews" },
  { label: "FAQs", id: "fp-faq" },
];

// Services data
const servicesData = [
  {
    title: "Ground-Up Custom Builds",
    text: "Bespoke Texas Hill Country and modern architectural residences built with structural precision.",
    image: customBuildImg,
    icon: Home,
    badge: "New Construction",
    features: [
      "Architectural limestone & timber framing",
      "Expansive floor-to-ceiling glass engineering",
      "Energy-efficient envelope & spray foam insulation",
      "Dedicated full-time on-site superintendent",
    ],
  },
  {
    title: "Whole-Home Renovations",
    text: "Masterful kitchen transformations, primary suite additions, and complete architectural remodels.",
    image: renovationImg,
    icon: HardHat,
    badge: "Renovation",
    features: [
      "Custom white oak & walnut millwork",
      "Marble & quartzite waterfall island installations",
      "Structural load-bearing wall removals",
      "Turnkey interior design coordination",
    ],
  },
  {
    title: "Commercial & Tenant Spaces",
    text: "Functional, inspiring commercial headquarters, boutique retail buildouts, and medical offices.",
    image: commercialImg,
    icon: Building2,
    badge: "Commercial",
    features: [
      "Acoustic timber slat ceilings & glass partitions",
      "Polished concrete & commercial utility drops",
      "ADA compliance & expedited municipal permitting",
      "Strict zero-interruption milestone delivery",
    ],
  },
  {
    title: "Digital Project Documentation",
    text: "Centralized client dashboard with daily progress logs, high-res photos, and live Gantt schedules.",
    image: projectDocImg,
    icon: FileText,
    badge: "Transparency",
    features: [
      "Daily digital jobsite logs & 3D BIM models",
      "Real-time budget tracking & change orders",
      "Direct communication with build leads",
      "Cloud-accessible warranty archive",
    ],
  },
  {
    title: "Transparent Pre-Con Estimates",
    text: "Detailed line-item budgeting with fixed allowances so you never encounter hidden surprises.",
    image: estimatesImg,
    icon: Calculator,
    badge: "Planning",
    features: [
      "Itemized trade contractor bidding",
      "Structural engineering & soils feasibility",
      "Material lead-time & procurement mapping",
      "100% price certainty guarantee",
    ],
  },
];

// Projects data
const projectsData = [
  {
    type: "CUSTOM HOME",
    category: "custom",
    title: "The Overlook Modern Farmhouse",
    place: "Austin, TX (West Lake Hills)",
    image: image01Img,
    specs: ["5,800 Sq Ft", "Limestone & Timber", "12-Month Build"],
    desc: "A stunning modern Hill Country estate featuring standing seam metal rooflines, native Texas limestone, and an infinity-edge negative basin pool.",
  },
  {
    type: "RENOVATION",
    category: "renovation",
    title: "Barton Creek Estate Transformation",
    place: "West Lake Hills, TX",
    image: image02Img,
    specs: ["4,200 Sq Ft", "Chef's Kitchen", "6-Month Delivery"],
    desc: "Complete interior overhaul featuring custom rift-sawn white oak millwork, Calacatta marble waterfall surfaces, and open-concept vaulted ceilings.",
  },
  {
    type: "COMMERCIAL",
    category: "commercial",
    title: "Nexus Global Corporate Buildout",
    place: "Round Rock, TX",
    image: image03Img,
    specs: ["18,000 Sq Ft", "Acoustic Slats", "Strict 8-Wk Cutover"],
    desc: "Bespoke commercial headquarters buildout with collaborative glass meeting suites, underfloor power distribution, and architectural timber features.",
  },
  {
    type: "COMMERCIAL",
    category: "commercial",
    title: "Atelier Boutique Showroom",
    place: "Austin, TX (South Congress)",
    image: image04Img,
    specs: ["3,500 Sq Ft", "Custom Brass", "Retail Fitout"],
    desc: "Luxury retail showroom featuring blackened steel framed storefronts, polished terrazzo flooring, and integrated ambient cove lighting.",
  },
  {
    type: "CUSTOM HOME",
    category: "custom",
    title: "Hill Country Pavilion House",
    place: "Dripping Springs, TX",
    image: heroImg,
    specs: ["7,200 Sq Ft", "Architectural Glass", "Solar Integrated"],
    desc: "Expansive contemporary residence blending into the rugged landscape with deep cantilevered cedar overhangs and structural steel moment frames.",
  },
  {
    type: "RENOVATION",
    category: "renovation",
    title: "Rollingwood Modern Kitchen & Living",
    place: "Rollingwood, TX",
    image: renovationImg,
    specs: ["3,100 Sq Ft", "Sub-Zero Suite", "Zero Punch-List"],
    desc: "Chef-grade luxury kitchen renovation with hidden walk-in scullery pantry, integrated Sub-Zero refrigeration, and bespoke brass accents.",
  },
];

// Estimator Scopes
const estimatorProjectTypes = [
  { id: "custom_home", label: "Ground-Up Custom Home", baseSqFt: 420 },
  { id: "whole_renovation", label: "Whole-Home Renovation", baseSqFt: 240 },
  { id: "kitchen_living", label: "Kitchen & Living Remodel", baseSqFt: 180 },
  { id: "commercial_build", label: "Commercial Office Buildout", baseSqFt: 210 },
];

const squareFootTiers = [
  { id: "2500", label: "2,500 Sq Ft", value: 2500 },
  { id: "4000", label: "4,000 Sq Ft", value: 4000 },
  { id: "6000", label: "6,000 Sq Ft", value: 6000 },
  { id: "8500", label: "8,500+ Sq Ft", value: 8500 },
];

const finishTiers = [
  { id: "standard", label: "Premium Architectural", multiplier: 1.0 },
  { id: "luxury", label: "High-End Bespoke Luxury", multiplier: 1.25 },
  { id: "ultra", label: "Ultra-Luxury Showcase", multiplier: 1.5 },
];

// 5-Step Process
const processSteps = [
  {
    title: "Discovery & Site Walk",
    text: "We evaluate your homesite, topography, tree surveys, and lifestyle vision to establish feasibility.",
    icon: Users,
  },
  {
    title: "Line-Item Estimation",
    text: "You receive an honest, transparent estimate with trade contractor bids and zero hidden contingencies.",
    icon: Calculator,
  },
  {
    title: "Pre-Con & Permitting",
    text: "We finalize architectural selections, engineering approvals, and municipal city permits.",
    icon: ClipboardList,
  },
  {
    title: "Precision Construction",
    text: "Our dedicated on-site superintendent oversees daily execution with continuous photo updates.",
    icon: HardHat,
  },
  {
    title: "Walkthrough & 10-Yr Warranty",
    text: "We conduct a zero-punch-list final inspection and hand over your comprehensive home warranty.",
    icon: CheckCircle2,
  },
];

// Testimonials
const testimonials = [
  {
    quote:
      "ForgePoint Builders delivered our dream Hill Country home with exceptional craftsmanship and complete communication. Their daily digital portal kept us informed every single morning.",
    name: "Emily & David Richardson",
    place: "West Lake Hills, TX",
    initials: "ER",
  },
  {
    quote:
      "Our 18,000 SF corporate office buildout was completed exactly on schedule. The line-item documentation and transparent change-order process was the best I've experienced in commercial building.",
    name: "Michael Torres",
    place: "Director of Real Estate, Nexus Global",
    initials: "MT",
  },
  {
    quote:
      "From architectural limestone sourcing to the custom white oak cabinetry, the attention to detail was unmatched. We couldn't be happier with our whole-home renovation.",
    name: "Sarah & Robert Lewis",
    place: "Barton Creek, Austin",
    initials: "SL",
  },
];

// FAQs
const faqs = [
  {
    q: "What is the typical timeline for a ground-up custom home build in Central Texas?",
    a: "A custom luxury home typically takes between 10 to 14 months from foundation pour to completion, depending on square footage, architectural complexity, and site topography. Pre-construction planning and permitting usually takes 8-12 weeks.",
  },
  {
    q: "How does ForgePoint ensure estimates stay on budget?",
    a: "We operate on guaranteed fixed-price contracts or transparent cost-plus agreements with detailed trade-by-trade bids. Every allowance (cabinets, tile, fixtures) is clearly itemized before groundbreaking so you never encounter surprise overages.",
  },
  {
    q: "Can you build on our existing lot or assist with land feasibility?",
    a: "Yes! We frequently conduct complimentary site walks before land purchase to inspect tree ordinances, septic/utility availability, slope grading, and building setback envelopes in Austin, West Lake, Dripping Springs, and Travis/Hays counties.",
  },
  {
    q: "What warranty coverage does ForgePoint provide?",
    a: "Every ForgePoint home is backed by a 1-year comprehensive cosmetic craftsmanship warranty, a 2-year mechanical/electrical/plumbing distribution warranty, and a 10-year major structural warranty.",
  },
];

export function ForgePointBuilders() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("fp-services");
  const [isScrolled, setIsScrolled] = useState(false);

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

  // Estimator state
  const [selectedProjectType, setSelectedProjectType] = useState("custom_home");
  const [selectedSqFt, setSelectedSqFt] = useState("4000");
  const [selectedFinish, setSelectedFinish] = useState("luxury");

  // Project Filter state
  const [activeTab, setActiveTab] = useState("all");

  // FAQ state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Form state
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formProjectType, setFormProjectType] = useState("Ground-Up Custom Home");
  const [formNotes, setFormNotes] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Scroll spy for sticky nav
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (window.scrollY < 200) {
        setActiveSection(navItems[0].id);
        return;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70) {
        setActiveSection(navItems[navItems.length - 1].id);
        return;
      }

      const offset = window.scrollY + 160;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= offset) {
          setActiveSection(navItems[i].id);
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

  // Estimator calculation
  const calculatedEstimate = useMemo(() => {
    const p = estimatorProjectTypes.find((item) => item.id === selectedProjectType) || estimatorProjectTypes[0];
    const sq = squareFootTiers.find((item) => item.id === selectedSqFt) || squareFootTiers[1];
    const f = finishTiers.find((item) => item.id === selectedFinish) || finishTiers[1];

    const baseCost = sq.value * p.baseSqFt * f.multiplier;
    const min = Math.round((baseCost * 0.95) / 10000) * 10000;
    const max = Math.round((baseCost * 1.08) / 10000) * 10000;

    return {
      type: p.label,
      sqFt: sq.label,
      finish: f.label,
      min: min.toLocaleString(),
      max: max.toLocaleString(),
    };
  }, [selectedProjectType, selectedSqFt, selectedFinish]);

  const applyEstimateToForm = () => {
    setFormProjectType(calculatedEstimate.type);
    setFormNotes(
      `Pre-selected Scope: ${calculatedEstimate.type} (${calculatedEstimate.sqFt}, ${calculatedEstimate.finish}) | Ballpark: $${calculatedEstimate.min} - $${calculatedEstimate.max}`
    );
    const contactEl = document.getElementById("fp-contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredProjects = useMemo(() => {
    if (activeTab === "all") return projectsData;
    return projectsData.filter((p) => p.category === activeTab);
  }, [activeTab]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="fp-site" id="fp-home">
      <style>{css}</style>
      {/* 1. Top Builder Status Bar */}
      <div className="fp-topbar">
        <div className="fp-wrap fp-topbar-content">
          <div className="flex items-center gap-3">
            <span className="fp-topbar-pill">
              <span className="fp-pulse-dot"></span>
              Central Texas Builder License: TX-GC #884920
            </span>
            <span className="hidden md:inline text-xs">
              Serving Austin, West Lake Hills, Rollingwood, Dripping Springs & Hill Country
            </span>
          </div>
          <div className="flex items-center gap-4 text-xs font-semibold">
            <span className="hidden sm:inline">Austin On-Site Design Studio</span>
            <a href="tel:5125550198" className="text-amber-500 hover:text-amber-400 font-bold">
              (512) 555-0198
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Header */}
      <header className={`fp-header${isScrolled ? " is-scrolled" : ""}`}>
        <div className="fp-wrap fp-nav">
          <a href="#fp-home" className="fp-logo" onClick={(e) => scrollTo(e, "fp-home")}>
            <div className="fp-logo-mark">F</div>
            <div className="fp-logo-text">
              ForgePoint<br />
              <span>Builders</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="fp-nav-links" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? "active" : ""}
                onClick={(e) => scrollTo(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="fp-nav-actions">
            <a
              href="#fp-contact"
              className="fp-btn fp-btn-primary fp-btn-sm fp-nav-cta"
              onClick={(e) => scrollTo(e, "fp-contact")}
            >
              Request Consultation
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              className="fp-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      {menuOpen && (
        <div
          className="fp-mobile-backdrop"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div className={`fp-mobile-drawer${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="fp-mobile-drawer-header">
          <div className="fp-logo">
            <div className="fp-logo-mark">F</div>
            <div className="fp-logo-text">
              ForgePoint<br />
              <span>Builders</span>
            </div>
          </div>
          <button
            type="button"
            className="fp-drawer-close"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="fp-mobile-nav">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`fp-mobile-nav-link${activeSection === item.id ? " active" : ""}`}
              onClick={(e) => scrollTo(e, item.id)}
            >
              {item.label}
              <ArrowRight className="w-4 h-4" />
            </a>
          ))}
        </nav>
        <div className="fp-mobile-drawer-footer">
          <a
            href="#fp-contact"
            className="fp-btn fp-btn-primary"
            style={{ width: "100%" }}
            onClick={(e) => scrollTo(e, "fp-contact")}
          >
            Request Consultation
            <ArrowRight className="w-4 h-4" />
          </a>
          <div className="fp-mobile-contact-info">
            <a href="tel:5125550198" className="fp-mobile-phone">
              <Phone className="w-4 h-4" />
              (512) 555-0198
            </a>
          </div>
        </div>
      </div>

      {/* 3. Hero Section */}
      <section className="fp-hero">
        <img
          src={heroImg}
          alt="Architectural modern Texas custom luxury residence at twilight"
          className="fp-hero-bg-img"
        />
        <div className="fp-hero-overlay"></div>
        <div className="fp-wrap">
          <div className="fp-hero-content">
            <div className="fp-hero-eyebrow">
              <ShieldCheck className="w-4 h-4" />
              Premier General Contractor • Central Texas
            </div>
            <h1 className="fp-hero-title">
              Built right, <br />
              documented clearly, <br />
              <span>finished with pride.</span>
            </h1>
            <p className="fp-hero-desc">
              Custom luxury homes, whole-estate transformations, and commercial buildouts. Delivered with guaranteed line-item estimates, daily cloud photo logs, and uncompromising Texas craftsmanship.
            </p>
            <div className="fp-hero-actions">
              <a
                href="#fp-estimator"
                className="fp-btn fp-btn-primary fp-btn-lg"
                onClick={(e) => scrollTo(e, "fp-estimator")}
              >
                <Calculator className="w-5 h-5" />
                Pre-Con Budget Estimator
              </a>
              <a
                href="#fp-projects"
                className="fp-btn fp-btn-outline fp-btn-lg"
                onClick={(e) => scrollTo(e, "fp-projects")}
              >
                Explore Portfolio
              </a>
            </div>
          </div>
        </div>

        {/* Floating Spec Badge */}
        <div className="fp-hero-floating-spec">
          <Award className="w-8 h-8 text-amber-500 shrink-0" />
          <div>
            <h4 className="text-sm font-bold text-white mb-0.5">100% On-Time Completion</h4>
            <p className="text-xs text-slate-300">Austin Business Journal Top Custom Builders 2024</p>
          </div>
        </div>
      </section>

      {/* 4. Stats Ribbon */}
      <section className="fp-stats-ribbon">
        <div className="fp-wrap fp-stats-grid">
          <div className="fp-stat-cell">
            <div className="fp-stat-icon">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="fp-stat-info">
              <h3>18+</h3>
              <p>Years of Experience</p>
            </div>
          </div>

          <div className="fp-stat-cell">
            <div className="fp-stat-icon">
              <HardHat className="w-6 h-6" />
            </div>
            <div className="fp-stat-info">
              <h3>450+</h3>
              <p>Projects Completed</p>
            </div>
          </div>

          <div className="fp-stat-cell">
            <div className="fp-stat-icon">
              <Award className="w-6 h-6" />
            </div>
            <div className="fp-stat-info">
              <h3>10-Yr</h3>
              <p>Structural Warranty</p>
            </div>
          </div>

          <div className="fp-stat-cell">
            <div className="fp-stat-icon">
              <Clock3 className="w-6 h-6" />
            </div>
            <div className="fp-stat-info">
              <h3>98%</h3>
              <p>On-Time Delivery</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive Pre-Con Budget Estimator */}
      <section id="fp-estimator" className="fp-section">
        <div className="fp-wrap">
          <div className="fp-section-head">
            <div className="fp-eyebrow-tag">
              <Calculator className="w-4 h-4" />
              Pre-Construction Calculator
            </div>
            <h2 className="fp-section-title">Interactive Project Budget Estimator</h2>
            <p className="fp-section-desc">
              Calculate realistic construction budget ranges based on Central Texas building indexes, square footage, and architectural finish tiers.
            </p>
          </div>

          <div className="fp-estimator-card">
            <div className="fp-estimator-layout">
              <div className="fp-estimator-controls">
                {/* 1. Project Type */}
                <div>
                  <div className="fp-control-label">1. Project Category</div>
                  <div className="fp-chips-grid">
                    {estimatorProjectTypes.map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        className={`fp-chip-btn ${selectedProjectType === type.id ? "is-active" : ""}`}
                        onClick={() => setSelectedProjectType(type.id)}
                      >
                        <span className="fp-chip-title">{type.label}</span>
                        <span className="fp-chip-sub">From ${type.baseSqFt}/SF</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 2. Square Footage */}
                <div>
                  <div className="fp-control-label">2. Target Square Footage</div>
                  <div className="fp-chips-grid">
                    {squareFootTiers.map((sq) => (
                      <button
                        key={sq.id}
                        type="button"
                        className={`fp-chip-btn ${selectedSqFt === sq.id ? "is-active" : ""}`}
                        onClick={() => setSelectedSqFt(sq.id)}
                      >
                        <span className="fp-chip-title">{sq.label}</span>
                        <span className="fp-chip-sub">{sq.value.toLocaleString()} sq ft</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* 3. Finish Level */}
                <div>
                  <div className="fp-control-label">3. Architectural Finish Tier</div>
                  <div className="fp-chips-grid">
                    {finishTiers.map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        className={`fp-chip-btn ${selectedFinish === f.id ? "is-active" : ""}`}
                        onClick={() => setSelectedFinish(f.id)}
                      >
                        <span className="fp-chip-title">{f.label}</span>
                        <span className="fp-chip-sub">{f.multiplier === 1 ? "Standard Custom" : "Luxury Allowance"}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Estimate Calculation Display */}
              <div className="fp-estimator-display">
                <div className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-2">
                  Estimated Construction Range
                </div>
                <div className="fp-price-val">
                  ${calculatedEstimate.min} - ${calculatedEstimate.max}
                </div>
                <p className="text-xs text-slate-300">
                  {calculatedEstimate.type} • {calculatedEstimate.sqFt}
                </p>

                <ul className="fp-included-list">
                  <li>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Dedicated Full-Time On-Site Superintendent</span>
                  </li>
                  <li>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Guaranteed Line-Item Trade Contractor Bidding</span>
                  </li>
                  <li>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Daily Cloud Progress Logs & Milestone Tracking</span>
                  </li>
                  <li>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>10-Year Major Structural Warranty Package</span>
                  </li>
                </ul>

                <button
                  type="button"
                  className="fp-btn fp-btn-primary w-full"
                  onClick={applyEstimateToForm}
                >
                  Apply Scope to Consultation
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Core Services Grid */}
      <section id="fp-services" className="fp-section sand">
        <div className="fp-wrap">
          <div className="fp-section-head">
            <div className="fp-eyebrow-tag">
              <Layers className="w-4 h-4" />
              General Contracting Services
            </div>
            <h2 className="fp-section-title">Built for How You Live and Work</h2>
            <p className="fp-section-desc">
              Comprehensive residential and commercial construction capabilities backed by structured project management and transparent communication.
            </p>
          </div>

          <div className="fp-services-grid">
            {servicesData.map((service, idx) => (
              <div key={idx} className="fp-service-card">
                <div className="fp-service-img-wrap">
                  <img src={service.image} alt={service.title} />
                  <div className="fp-service-badge">{service.badge}</div>
                </div>
                <div className="fp-service-body">
                  <div className="flex items-center gap-2 mb-3">
                    <service.icon className="w-5 h-5 text-amber-600" />
                    <h3>{service.title}</h3>
                  </div>
                  <p>{service.text}</p>
                  <ul className="fp-service-bullets">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx}>
                        <Check className="w-4 h-4" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#fp-contact"
                    className="mt-auto text-sm font-bold text-amber-600 hover:text-amber-700 flex items-center gap-2"
                    onClick={(e) => {
                      scrollTo(e, "fp-contact");
                      setFormProjectType(service.title);
                    }}
                  >
                    <span>Discuss This Scope</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Filterable Projects Gallery */}
      <section id="fp-projects" className="fp-section dark">
        <div className="fp-wrap">
          <div className="fp-section-head">
            <div className="fp-eyebrow-tag">
              <Ruler className="w-4 h-4" />
              Featured Installations
            </div>
            <h2 className="fp-section-title text-white">Quality You Can See. Results That Last.</h2>
            <p className="fp-section-desc">
              Explore our recent custom homes, whole-house architectural renovations, and commercial spaces across Austin and Central Texas.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="fp-projects-tabs">
            {[
              { id: "all", label: "All Projects" },
              { id: "custom", label: "Custom Homes" },
              { id: "renovation", label: "Renovations" },
              { id: "commercial", label: "Commercial Spaces" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`fp-tab-btn ${activeTab === tab.id ? "is-active" : ""}`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="fp-projects-grid">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="fp-project-card">
                <div className="fp-project-thumb">
                  <img src={project.image} alt={project.title} />
                  <div className="fp-project-type-tag">{project.type}</div>
                </div>
                <div className="fp-project-body">
                  <div className="fp-project-loc">
                    <MapPin className="w-3.5 h-3.5 text-amber-500" />
                    <span>{project.place}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{project.desc}</p>
                  <div className="fp-project-spec-chips">
                    {project.specs.map((sp, sIdx) => (
                      <span key={sIdx} className="fp-spec-badge">
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. 5-Step Process Section */}
      <section id="fp-process" className="fp-section">
        <div className="fp-wrap">
          <div className="fp-section-head">
            <div className="fp-eyebrow-tag">
              <ClipboardList className="w-4 h-4" />
              Methodical Execution
            </div>
            <h2 className="fp-section-title">A Clear Process. A Better Experience.</h2>
            <p className="fp-section-desc">
              From our first site consultation to handing over your keys, our 5-step framework eliminates guesswork and ensures total visibility.
            </p>
          </div>

          <div className="fp-process-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="fp-process-card">
                <div className="fp-step-num">{idx + 1}</div>
                <div className="w-8 h-8 text-amber-600 mb-3">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Digital Documentation & Client Portal Featurette */}
      <section id="fp-documentation" className="fp-section sand">
        <div className="fp-wrap">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="fp-eyebrow-tag">
                <FileText className="w-4 h-4" />
                Client Dashboard Portal
              </div>
              <h2 className="fp-section-title">Clarity in Every Detail. Confidence at Every Step.</h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Building or remodeling your home shouldn't feel like a black box. Our cloud-based owner portal gives you 24/7 access to live jobsite photos, daily supervisor logs, budget accounting, and delivery schedules.
              </p>

              <div className="space-y-4 text-sm font-medium text-slate-700">
                {[
                  "Real-time daily site progress logs & 4K jobsite photos",
                  "Centralized architectural drawings, engineering permits & schedules",
                  "Transparent change orders with itemized trade cost sign-offs",
                  "Live budget tracking with zero hidden allowances",
                  "Direct messaging with your project manager and superintendent",
                ].map((text, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img
                src={projectDocImg}
                alt="General Contractor Superintendent Reviewing 3D BIM Model On-Site"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 10. Reviews & Testimonials */}
      <section id="fp-reviews" className="fp-section">
        <div className="fp-wrap">
          <div className="fp-section-head">
            <div className="fp-eyebrow-tag">
              <Star className="w-4 h-4" />
              Client Testimonials
            </div>
            <h2 className="fp-section-title">Trusted by Homeowners & Businesses Alike</h2>
            <p className="fp-section-desc">
              Over 450 completed projects with a 99.4% client satisfaction rate across Central Texas.
            </p>
          </div>

          <div className="fp-testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="fp-testimonial-card">
                <div>
                  <div className="fp-stars-row">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="fp-quote-copy">"{t.quote}"</p>
                </div>
                <div className="fp-author-row">
                  <div className="fp-avatar">{t.initials}</div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{t.name}</h4>
                    <p className="text-xs text-slate-500">{t.place}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. Consultation & Quote Request Wizard */}
      <section id="fp-contact" className="fp-section sand">
        <div className="fp-wrap">
          <div className="fp-form-wrapper">
            <div className="fp-form-grid">
              <div>
                <div className="fp-eyebrow-tag">
                  <Mail className="w-4 h-4" />
                  Free Pre-Con Consultation
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                  Ready to Build <br />
                  <span className="text-amber-600">Something Great?</span>
                </h2>
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  Schedule a complimentary site walk and architectural discovery meeting with our principal builders. We’ll review your plans, budget, and lot feasibility.
                </p>

                <div className="space-y-4 text-sm text-slate-700 mb-8">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>Complimentary homesite feasibility evaluation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>Itemized line-item budget review with zero surprises</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>Direct access to master builders and project managers</span>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-slate-200 flex items-center gap-4">
                  <Phone className="w-8 h-8 text-amber-600" />
                  <div>
                    <div className="text-xs text-slate-500">Direct Austin Office Line</div>
                    <div className="text-base font-bold text-slate-900">(512) 555-0198</div>
                  </div>
                </div>
              </div>

              {/* Form */}
              <div>
                {formSubmitted ? (
                  <div className="bg-emerald-50 border border-emerald-300 rounded-2xl p-8 text-center animate-in fade-in">
                    <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Consultation Request Received!</h3>
                    <p className="text-slate-600 text-sm mb-6">
                      Thank you, <strong>{formName || "Client"}</strong>. One of our senior construction managers will contact you within <strong>24 hours</strong> to schedule your site discovery meeting.
                    </p>
                    <button
                      type="button"
                      className="fp-btn fp-btn-secondary-dark"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="fp-field-group">
                        <label htmlFor="fp-name">Full Name *</label>
                        <input
                          id="fp-name"
                          type="text"
                          required
                          placeholder="e.g. David Reynolds"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className="fp-input"
                        />
                      </div>
                      <div className="fp-field-group">
                        <label htmlFor="fp-phone">Phone Number *</label>
                        <input
                          id="fp-phone"
                          type="tel"
                          required
                          placeholder="e.g. (512) 555-0198"
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          className="fp-input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="fp-field-group">
                        <label htmlFor="fp-email">Email Address *</label>
                        <input
                          id="fp-email"
                          type="email"
                          required
                          placeholder="e.g. david@example.com"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          className="fp-input"
                        />
                      </div>
                      <div className="fp-field-group">
                        <label htmlFor="fp-type">Project Scope *</label>
                        <select
                          id="fp-type"
                          value={formProjectType}
                          onChange={(e) => setFormProjectType(e.target.value)}
                          className="fp-select"
                        >
                          <option value="Ground-Up Custom Home">Ground-Up Custom Home</option>
                          <option value="Whole-Home Renovation">Whole-Home Renovation</option>
                          <option value="Kitchen & Living Remodel">Kitchen & Living Remodel</option>
                          <option value="Commercial & Tenant Buildout">Commercial & Tenant Buildout</option>
                          <option value="Guest Casita / Outdoor Living">Guest Casita / Outdoor Living</option>
                        </select>
                      </div>
                    </div>

                    <div className="fp-field-group">
                      <label htmlFor="fp-notes">Project Location, Lot Details & Vision</label>
                      <textarea
                        id="fp-notes"
                        rows={3}
                        placeholder="Tell us about your homesite, target square footage, or timeline..."
                        value={formNotes}
                        onChange={(e) => setFormNotes(e.target.value)}
                        className="fp-textarea"
                      />
                    </div>

                    <div className="fp-field-group">
                      <label>Attach Blueprints or Site Surveys (Optional)</label>
                      <div className="border-2 border-dashed border-slate-300 rounded-xl p-6 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                        <UploadCloud className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                        <p className="text-sm text-slate-700 font-medium">
                          Drag & drop architectural drawings or sketches, or <span className="text-amber-600 underline">browse</span>
                        </p>
                        <p className="text-xs text-slate-400 mt-1">Accepts PDF, DWG, JPG up to 25MB</p>
                        <input type="file" className="hidden" />
                      </div>
                    </div>

                    <button type="submit" className="fp-btn fp-btn-primary fp-btn-lg w-full mt-2">
                      Schedule Discovery Consultation
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. FAQ Accordion */}
      <section id="fp-faq" className="fp-section">
        <div className="fp-wrap">
          <div className="fp-section-head">
            <div className="fp-eyebrow-tag">
              <ClipboardList className="w-4 h-4" />
              General Contracting FAQ
            </div>
            <h2 className="fp-section-title">Frequently Asked Questions</h2>
            <p className="fp-section-desc">
              Clear, honest answers about building, budgeting, permitting, and timelines in Central Texas.
            </p>
          </div>

          <div className="fp-faq-list">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`fp-faq-card ${isOpen ? "is-open" : ""}`}>
                  <button
                    type="button"
                    className="fp-faq-btn"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className="w-5 h-5" />
                  </button>
                  {isOpen && <div className="fp-faq-body">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. Footer */}
      <footer className="fp-footer">
        <div className="fp-wrap">
          <div className="fp-footer-grid">
            <div className="fp-footer-col">
              <div className="fp-logo mb-4">
                <div className="fp-logo-mark">F</div>
                <div className="fp-logo-text">
                  ForgePoint<br />
                  <span>Builders</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
                Premier general contracting and custom architectural building. Dedicated to structural integrity, transparent budgeting, and lasting craftsmanship across Central Texas.
              </p>
              <div className="text-xs text-amber-500 font-bold">
                Texas General Contractor License #884920
              </div>
            </div>

            <div className="fp-footer-col">
              <h4>Build Capabilities</h4>
              <ul className="fp-footer-links">
                <li><a href="#fp-services" onClick={(e) => scrollTo(e, "fp-services")}>Custom Luxury Homes</a></li>
                <li><a href="#fp-services" onClick={(e) => scrollTo(e, "fp-services")}>Whole-Home Renovations</a></li>
                <li><a href="#fp-services" onClick={(e) => scrollTo(e, "fp-services")}>Commercial Tenant Buildouts</a></li>
                <li><a href="#fp-services" onClick={(e) => scrollTo(e, "fp-services")}>Architectural Kitchen Remodels</a></li>
                <li><a href="#fp-services" onClick={(e) => scrollTo(e, "fp-services")}>Pre-Con Feasibility Walks</a></li>
              </ul>
            </div>

            <div className="fp-footer-col">
              <h4>Quick Navigation</h4>
              <ul className="fp-footer-links">
                <li><a href="#fp-estimator" onClick={(e) => scrollTo(e, "fp-estimator")}>Budget Estimator</a></li>
                <li><a href="#fp-projects" onClick={(e) => scrollTo(e, "fp-projects")}>Completed Work Gallery</a></li>
                <li><a href="#fp-process" onClick={(e) => scrollTo(e, "fp-process")}>Our 5-Step Process</a></li>
                <li><a href="#fp-documentation" onClick={(e) => scrollTo(e, "fp-documentation")}>Owner Portal</a></li>
                <li><a href="#fp-faq" onClick={(e) => scrollTo(e, "fp-faq")}>Contractor FAQs</a></li>
              </ul>
            </div>

            <div className="fp-footer-col">
              <h4>Studio & Contact</h4>
              <div className="flex flex-col gap-3 text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                  <span>ForgePoint Design & Build Center<br />3200 West Lake Dr, Suite 400<br />Austin, TX 78746</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>Austin Studio: <strong>(512) 555-0198</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                  <span>inquiry@forgepointbuilders.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="fp-footer-bottom">
            <div>
              © {new Date().getFullYear()} ForgePoint Builders Corp. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Warranty Guidelines</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ForgePointBuilders;

const css = `
  /* ForgePoint Builders - Premier Architectural General Contracting Design System & Theme Engine */

  .fp-site {
    --fp-navy-dark: #071320;
    --fp-navy: #0c2031;
    --fp-navy-surface: #112a40;
    --fp-navy-elevated: #183753;
    --fp-forge-orange: #ea580c;
    --fp-forge-amber: #f97316;
    --fp-forge-glow: rgba(234, 88, 12, 0.25);
    --fp-limestone: #fbf9f5;
    --fp-limestone-card: #f4efe6;
    --fp-stone-border: rgba(0, 0, 0, 0.08);
    --fp-dark-border: rgba(255, 255, 255, 0.1);
    --fp-text-dark: #0f172a;
    --fp-text-muted-dark: #475569;
    --fp-text-light: #f8fafc;
    --fp-text-muted-light: #94a3b8;

    color: var(--fp-text-dark);
    background-color: var(--fp-limestone);
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    overflow-x: clip;
    line-height: 1.6;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  .fp-site * {
    box-sizing: border-box;
  }

  .fp-site a {
    text-decoration: none;
    color: inherit;
  }

  .fp-wrap {
    width: min(1380px, calc(100% - 64px));
    margin-inline: auto;
  }

  @media (max-width: 640px) {
    .fp-wrap {
      width: calc(100% - 32px);
    }
  }

  /* Animations */
  @keyframes fpPulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.08); opacity: 0.7; }
  }

  @keyframes fpFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-6px); }
  }

  .fp-pulse-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #10b981;
    box-shadow: 0 0 10px #10b981;
    animation: fpPulse 2s infinite;
    display: inline-block;
  }

  /* Top Builder Status Bar */
  .fp-topbar {
    background: var(--fp-navy-dark);
    color: var(--fp-text-muted-light);
    border-bottom: 1px solid var(--fp-dark-border);
    font-size: 0.8125rem;
    padding: 8px 0;
    transition: background-color 0.25s ease, border-color 0.25s ease;
  }

  .fp-topbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .fp-topbar-pill {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 3px 10px;
    border-radius: 9999px;
    color: #ffffff;
    font-weight: 600;
    font-size: 0.75rem;
  }

  /* Sticky Header & Nav */
  .fp-header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(12, 32, 49, 0.94);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--fp-dark-border);
    color: #ffffff;
    transition: all 0.3s ease;
  }

  .fp-header.is-scrolled {
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.35);
  }

  .fp-nav {
    height: 84px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .fp-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 1.25rem;
    font-weight: 800;
    color: #ffffff;
    letter-spacing: -0.02em;
  }

  .fp-logo-mark {
    width: 42px;
    height: 42px;
    border-radius: 8px;
    background: linear-gradient(135deg, var(--fp-forge-orange) 0%, #c2410c 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ffffff;
    font-size: 1.4rem;
    font-weight: 900;
    box-shadow: 0 4px 14px var(--fp-forge-glow);
    transition: background 0.25s ease, box-shadow 0.25s ease;
  }

  .fp-logo-text {
    line-height: 1.1;
  }

  .fp-logo-text span {
    color: var(--fp-forge-amber);
    font-weight: 400;
    transition: color 0.25s ease;
  }

  .fp-nav-links {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .fp-nav-links a {
    color: var(--fp-text-muted-light);
    font-size: 0.9375rem;
    font-weight: 600;
    transition: color 0.2s ease;
    position: relative;
    padding: 8px 0;
  }

  .fp-nav-links a:hover,
  .fp-nav-links a.active {
    color: #ffffff;
  }

  .fp-nav-links a.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: var(--fp-forge-orange);
    border-radius: 2px;
  }

  /* Buttons */
  .fp-btn {
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

  .fp-btn-primary {
    background: var(--fp-forge-orange);
    color: #ffffff;
    box-shadow: 0 4px 16px var(--fp-forge-glow);
  }

  .fp-btn-primary:hover {
    background: #c2410c;
    transform: translateY(-2px);
    box-shadow: 0 8px 24px var(--fp-forge-glow);
  }

  .fp-btn-outline {
    background: transparent;
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.35);
  }

  .fp-btn-outline:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: #ffffff;
    transform: translateY(-2px);
  }

  .fp-btn-secondary-dark {
    background: var(--fp-navy);
    color: #ffffff;
    border: 1px solid var(--fp-navy-surface);
  }

  .fp-btn-secondary-dark:hover {
    background: var(--fp-navy-surface);
    transform: translateY(-2px);
  }

  .fp-btn-sm {
    padding: 9px 18px;
    font-size: 0.8125rem;
  }

  .fp-btn-lg {
    padding: 16px 34px;
    font-size: 1.0625rem;
  }

  /* Nav actions container */
  .fp-nav-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }

  /* Hamburger button */
  .fp-hamburger {
    display: none;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.15);
    color: #ffffff;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .fp-hamburger:hover {
    background: rgba(255, 255, 255, 0.16);
  }

  /* Mobile overlay backdrop */
  .fp-mobile-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(4px);
    z-index: 98;
    animation: fpFadeIn 0.2s ease;
  }

  @keyframes fpFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  /* Mobile slide-in drawer */
  .fp-mobile-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(360px, 88vw);
    background: var(--fp-navy-dark);
    border-left: 1px solid var(--fp-dark-border);
    z-index: 99;
    display: flex;
    flex-direction: column;
    transform: translateX(100%);
    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease;
  }

  .fp-mobile-drawer.is-open {
    transform: translateX(0);
    box-shadow: -20px 0 60px rgba(0, 0, 0, 0.5);
  }

  .fp-mobile-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    border-bottom: 1px solid var(--fp-dark-border);
    flex-shrink: 0;
  }

  .fp-drawer-close {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.07);
    border: 1px solid rgba(255, 255, 255, 0.12);
    color: #ffffff;
    cursor: pointer;
    transition: background 0.2s ease;
  }

  .fp-drawer-close:hover {
    background: rgba(255, 255, 255, 0.15);
  }

  /* Mobile nav links list */
  .fp-mobile-nav {
    flex: 1;
    overflow-y: auto;
    padding: 16px 0;
    display: flex;
    flex-direction: column;
  }

  .fp-mobile-nav-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 24px;
    font-size: 1rem;
    font-weight: 700;
    color: var(--fp-text-muted-light);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.18s ease;
  }

  .fp-mobile-nav-link svg {
    opacity: 0.3;
    transition: opacity 0.18s ease, transform 0.18s ease;
  }

  .fp-mobile-nav-link:hover,
  .fp-mobile-nav-link.active {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.05);
  }

  .fp-mobile-nav-link.active {
    color: var(--fp-forge-amber);
    border-left: 3px solid var(--fp-forge-orange);
    padding-left: 21px;
  }

  .fp-mobile-nav-link:hover svg,
  .fp-mobile-nav-link.active svg {
    opacity: 1;
    transform: translateX(3px);
  }

  /* Mobile drawer footer */
  .fp-mobile-drawer-footer {
    padding: 24px;
    border-top: 1px solid var(--fp-dark-border);
    display: flex;
    flex-direction: column;
    gap: 16px;
    flex-shrink: 0;
  }

  .fp-mobile-contact-info {
    display: flex;
    justify-content: center;
  }

  .fp-mobile-phone {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--fp-forge-amber);
    transition: color 0.2s ease;
  }

  .fp-mobile-phone:hover {
    color: var(--fp-forge-orange);
  }

  /* Hero Section */
  .fp-hero {
    position: relative;
    min-height: 640px;
    display: flex;
    align-items: center;
    color: #ffffff;
    overflow: hidden;
    background: var(--fp-navy-dark);
  }

  .fp-hero-bg-img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transform: scale(1.03);
    transition: transform 10s ease-out;
  }

  .fp-hero-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(7, 19, 32, 0.94) 0%,
      rgba(7, 19, 32, 0.82) 42%,
      rgba(7, 19, 32, 0.35) 80%,
      rgba(7, 19, 32, 0.15) 100%
    );
  }

  .fp-hero-content {
    position: relative;
    z-index: 2;
    max-width: 720px;
    padding: 80px 0;
  }

  .fp-hero-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(234, 88, 12, 0.15);
    border: 1px solid rgba(234, 88, 12, 0.35);
    color: var(--fp-forge-amber);
    font-size: 0.8125rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    padding: 6px 14px;
    border-radius: 9999px;
    margin-bottom: 24px;
  }

  .fp-hero-title {
    font-size: clamp(2.6rem, 4.5vw, 4.25rem);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.035em;
    margin-bottom: 24px;
  }

  .fp-hero-title span {
    color: var(--fp-forge-amber);
  }

  .fp-hero-desc {
    font-size: 1.125rem;
    color: var(--fp-text-muted-light);
    line-height: 1.7;
    margin-bottom: 36px;
  }

  .fp-hero-actions {
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }

  .fp-hero-floating-spec {
    position: absolute;
    bottom: 40px;
    right: 60px;
    background: rgba(7, 19, 32, 0.88);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 16px;
    padding: 20px 24px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    gap: 16px;
    z-index: 3;
    animation: fpFloat 6s ease-in-out infinite;
  }

  /* Stats Ribbon */
  .fp-stats-ribbon {
    background: #ffffff;
    border-bottom: 1px solid var(--fp-stone-border);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    transition: background-color 0.25s ease, border-color 0.25s ease;
  }

  .fp-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  .fp-stat-cell {
    padding: 32px 28px;
    display: flex;
    align-items: center;
    gap: 18px;
    border-right: 1px solid var(--fp-stone-border);
  }

  .fp-stat-cell:last-child {
    border-right: none;
  }

  .fp-stat-icon {
    width: 52px;
    height: 52px;
    border-radius: 12px;
    background: rgba(234, 88, 12, 0.1);
    color: var(--fp-forge-orange);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .fp-stat-info h3 {
    font-size: 1.85rem;
    font-weight: 900;
    color: var(--fp-navy);
    line-height: 1;
    margin-bottom: 4px;
    letter-spacing: -0.02em;
  }

  .fp-stat-info p {
    font-size: 0.8125rem;
    font-weight: 700;
    color: var(--fp-text-muted-dark);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    margin: 0;
  }

  /* Section Common */
  .fp-section {
    padding: 96px 0;
    transition: background-color 0.25s ease;
  }

  .fp-section.dark {
    background: var(--fp-navy-dark);
    color: #ffffff;
  }

  .fp-section.sand {
    background: var(--fp-limestone-card);
  }

  .fp-section-head {
    text-align: center;
    max-width: 700px;
    margin: 0 auto 60px;
  }

  .fp-eyebrow-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.8125rem;
    font-weight: 800;
    color: var(--fp-forge-orange);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 14px;
  }

  .fp-section-title {
    font-size: clamp(2rem, 3.2vw, 2.75rem);
    font-weight: 900;
    letter-spacing: -0.03em;
    line-height: 1.15;
    margin-bottom: 16px;
  }

  .fp-section-desc {
    font-size: 1.0625rem;
    color: var(--fp-text-muted-dark);
    line-height: 1.7;
  }

  .fp-section.dark .fp-section-desc {
    color: var(--fp-text-muted-light);
  }

  /* Estimator Interactive Tool */
  .fp-estimator-card {
    background: #ffffff;
    border-radius: 24px;
    border: 1px solid var(--fp-stone-border);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
    padding: 44px;
    transition: background-color 0.25s ease, border-color 0.25s ease;
  }

  .fp-estimator-layout {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 48px;
    align-items: center;
  }

  .fp-estimator-controls {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .fp-control-label {
    font-size: 0.875rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--fp-navy);
    margin-bottom: 12px;
  }

  .fp-chips-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 12px;
  }

  .fp-chip-btn {
    background: var(--fp-limestone);
    border: 1px solid var(--fp-stone-border);
    border-radius: 12px;
    padding: 14px 16px;
    text-align: left;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .fp-chip-btn:hover {
    border-color: var(--fp-forge-orange);
    background: #ffffff;
  }

  .fp-chip-btn.is-active {
    background: rgba(234, 88, 12, 0.08);
    border-color: var(--fp-forge-orange);
    box-shadow: 0 0 0 2px var(--fp-forge-orange);
  }

  .fp-chip-title {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--fp-navy);
  }

  .fp-chip-sub {
    font-size: 0.75rem;
    color: var(--fp-text-muted-dark);
  }

  .fp-estimator-display {
    background: var(--fp-navy);
    color: #ffffff;
    border-radius: 20px;
    padding: 36px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }

  .fp-estimator-display::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--fp-forge-orange), #fbbf24);
  }

  .fp-price-val {
    font-size: 2.5rem;
    font-weight: 900;
    color: #ffffff;
    margin: 16px 0 8px;
    letter-spacing: -0.03em;
  }

  .fp-price-val span {
    color: var(--fp-forge-amber);
  }

  .fp-included-list {
    text-align: left;
    margin: 24px 0 28px;
    padding: 16px 0;
    border-top: 1px solid var(--fp-dark-border);
    border-bottom: 1px solid var(--fp-dark-border);
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 0.875rem;
    color: var(--fp-text-muted-light);
  }

  .fp-included-list li {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .fp-included-list li svg {
    color: var(--fp-forge-amber);
    flex-shrink: 0;
  }

  /* Services Grid */
  .fp-services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .fp-service-card {
    background: #ffffff;
    border-radius: 18px;
    border: 1px solid var(--fp-stone-border);
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
  }

  .fp-service-card:hover {
    transform: translateY(-6px);
    border-color: rgba(234, 88, 12, 0.4);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  }

  .fp-service-img-wrap {
    position: relative;
    height: 230px;
    overflow: hidden;
  }

  .fp-service-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .fp-service-card:hover .fp-service-img-wrap img {
    transform: scale(1.06);
  }

  .fp-service-badge {
    position: absolute;
    top: 16px;
    left: 16px;
    background: rgba(7, 19, 32, 0.85);
    backdrop-filter: blur(8px);
    color: #ffffff;
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 700;
  }

  .fp-service-body {
    padding: 28px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .fp-service-body h3 {
    font-size: 1.35rem;
    font-weight: 800;
    color: var(--fp-navy);
    margin-bottom: 12px;
  }

  .fp-service-body p {
    color: var(--fp-text-muted-dark);
    font-size: 0.9375rem;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .fp-service-bullets {
    list-style: none;
    padding: 0;
    margin: 0 0 24px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 0.875rem;
    color: var(--fp-text-muted-dark);
  }

  .fp-service-bullets li {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .fp-service-bullets li svg {
    color: var(--fp-forge-orange);
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  /* Projects Filterable Showcase */
  .fp-projects-tabs {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 48px;
  }

  .fp-tab-btn {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid var(--fp-dark-border);
    color: var(--fp-text-muted-light);
    padding: 10px 22px;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .fp-tab-btn:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.15);
  }

  .fp-tab-btn.is-active {
    background: var(--fp-forge-orange);
    border-color: var(--fp-forge-orange);
    color: #ffffff;
    box-shadow: 0 4px 14px var(--fp-forge-glow);
  }

  .fp-projects-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  .fp-project-card {
    background: var(--fp-navy-surface);
    border: 1px solid var(--fp-dark-border);
    border-radius: 18px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all 0.3s ease;
  }

  .fp-project-card:hover {
    transform: translateY(-6px);
    border-color: var(--fp-forge-orange);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
  }

  .fp-project-thumb {
    position: relative;
    height: 220px;
    overflow: hidden;
  }

  .fp-project-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .fp-project-card:hover .fp-project-thumb img {
    transform: scale(1.06);
  }

  .fp-project-type-tag {
    position: absolute;
    top: 14px;
    left: 14px;
    background: rgba(7, 19, 32, 0.88);
    backdrop-filter: blur(8px);
    color: var(--fp-forge-amber);
    padding: 4px 10px;
    border-radius: 6px;
    font-size: 0.6875rem;
    font-weight: 800;
    text-transform: uppercase;
  }

  .fp-project-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .fp-project-body h3 {
    font-size: 1.125rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 6px;
  }

  .fp-project-loc {
    display: flex;
    align-items: center;
    gap: 4px;
    font-size: 0.8125rem;
    color: var(--fp-text-muted-light);
    margin-bottom: 14px;
  }

  .fp-project-spec-chips {
    display: flex;
    gap: 6px;
    flex-wrap: wrap;
    margin-top: auto;
    padding-top: 14px;
    border-top: 1px solid var(--fp-dark-border);
  }

  .fp-spec-badge {
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.12);
    padding: 2px 8px;
    border-radius: 4px;
    font-size: 0.6875rem;
    font-weight: 700;
    color: var(--fp-text-muted-light);
  }

  /* Process Timeline */
  .fp-process-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }

  .fp-process-card {
    background: #ffffff;
    border: 1px solid var(--fp-stone-border);
    border-radius: 16px;
    padding: 28px 22px;
    position: relative;
    transition: transform 0.2s ease, border-color 0.2s ease;
  }

  .fp-process-card:hover {
    transform: translateY(-4px);
    border-color: var(--fp-forge-orange);
  }

  .fp-step-num {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    background: var(--fp-navy);
    color: #ffffff;
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    margin-bottom: 18px;
  }

  .fp-process-card h3 {
    font-size: 1.125rem;
    font-weight: 800;
    color: var(--fp-navy);
    margin-bottom: 8px;
  }

  .fp-process-card p {
    font-size: 0.8125rem;
    color: var(--fp-text-muted-dark);
    line-height: 1.5;
  }

  /* Testimonials */
  .fp-testimonials-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .fp-testimonial-card {
    background: #ffffff;
    border: 1px solid var(--fp-stone-border);
    border-radius: 20px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);
    transition: background-color 0.25s ease, border-color 0.25s ease;
  }

  .fp-stars-row {
    display: flex;
    gap: 4px;
    color: #f59e0b;
    margin-bottom: 16px;
  }

  .fp-quote-copy {
    font-size: 0.9375rem;
    color: var(--fp-text-dark);
    line-height: 1.7;
    font-style: italic;
    margin-bottom: 24px;
  }

  .fp-author-row {
    display: flex;
    align-items: center;
    gap: 14px;
    padding-top: 16px;
    border-top: 1px solid var(--fp-stone-border);
  }

  .fp-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: var(--fp-navy);
    color: var(--fp-forge-amber);
    font-weight: 800;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* Estimate Form Wizard */
  .fp-form-wrapper {
    background: #ffffff;
    border: 1px solid var(--fp-stone-border);
    border-radius: 24px;
    padding: 48px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.06);
    transition: background-color 0.25s ease, border-color 0.25s ease;
  }

  .fp-form-grid {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 56px;
  }

  .fp-field-group {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 18px;
  }

  .fp-field-group label {
    font-size: 0.8125rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    color: var(--fp-navy);
  }

  .fp-input,
  .fp-select,
  .fp-textarea {
    background: var(--fp-limestone);
    border: 1px solid var(--fp-stone-border);
    border-radius: 8px;
    padding: 12px 16px;
    font-size: 0.9375rem;
    font-family: inherit;
    outline: none;
    transition: all 0.2s ease;
  }

  .fp-input:focus,
  .fp-select:focus,
  .fp-textarea:focus {
    border-color: var(--fp-forge-orange);
    background: #ffffff;
    box-shadow: 0 0 0 3px rgba(234, 88, 12, 0.15);
  }

  /* FAQ Accordion */
  .fp-faq-list {
    max-width: 840px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .fp-faq-card {
    background: #ffffff;
    border: 1px solid var(--fp-stone-border);
    border-radius: 14px;
    overflow: hidden;
    transition: all 0.2s ease;
  }

  .fp-faq-card.is-open {
    border-color: var(--fp-forge-orange);
  }

  .fp-faq-btn {
    width: 100%;
    padding: 20px 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: none;
    border: none;
    font-size: 1.0625rem;
    font-weight: 800;
    color: var(--fp-navy);
    cursor: pointer;
    text-align: left;
    gap: 16px;
  }

  .fp-faq-btn svg {
    color: var(--fp-forge-orange);
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  .fp-faq-card.is-open .fp-faq-btn svg {
    transform: rotate(180deg);
  }

  .fp-faq-body {
    padding: 0 24px 24px;
    color: var(--fp-text-muted-dark);
    font-size: 0.9375rem;
    line-height: 1.7;
  }

  /* Footer */
  .fp-footer {
    background: var(--fp-navy-dark);
    color: var(--fp-text-muted-light);
    border-top: 1px solid var(--fp-dark-border);
    padding: 80px 0 36px;
    transition: background-color 0.25s ease;
  }

  .fp-footer-grid {
    display: grid;
    grid-template-columns: 1.4fr 0.9fr 0.9fr 1.2fr;
    gap: 48px;
    margin-bottom: 64px;
  }

  .fp-footer-col h4 {
    font-size: 0.9375rem;
    font-weight: 800;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 20px;
  }

  .fp-footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 0.875rem;
  }

  .fp-footer-links a:hover {
    color: var(--fp-forge-amber);
  }

  .fp-footer-bottom {
    padding-top: 32px;
    border-top: 1px solid var(--fp-dark-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 0.8125rem;
  }

  /* ==========================================================================
     THEME SELECTOR PRESET OVERRIDES
     ========================================================================== */
  :root[data-theme-active="true"] .fp-site,
  :root[data-theme-preset]:not([data-theme-preset="original"]) .fp-site {
    --fp-forge-orange: var(--theme-accent-primary, #ea580c);
    --fp-forge-amber:  var(--theme-accent-primary-hover, #f97316);
    --fp-forge-glow:   var(--theme-accent-glow, rgba(234, 88, 12, 0.25));
  }

  /* ==========================================================================
     DARK MOOD SPECIFICS
     ========================================================================== */
  html.dark .fp-site,
  body.dark .fp-site,
  :root.dark .fp-site,
  [data-theme-mood="dark"] .fp-site,
  :root[data-theme-mood="dark"] .fp-site,
  :root[data-theme-active="true"][data-theme-mood="dark"] .fp-site {
    --fp-limestone:         var(--theme-bg-base, #071320);
    --fp-limestone-card:    var(--theme-bg-card, #0c2031);
    --fp-stone-border:      var(--theme-border, rgba(255, 255, 255, 0.1));
    --fp-text-dark:         var(--theme-text-primary, #f8fafc);
    --fp-text-muted-dark:   var(--theme-text-muted, #94a3b8);
    background-color: var(--fp-limestone);
    color: var(--fp-text-dark);
  }

  html.dark .fp-site .fp-stats-ribbon,
  [data-theme-mood="dark"] .fp-site .fp-stats-ribbon {
    background: var(--theme-bg-card, #0c2031) !important;
    border-bottom-color: var(--fp-stone-border) !important;
  }
  html.dark .fp-site .fp-stat-cell,
  [data-theme-mood="dark"] .fp-site .fp-stat-cell {
    border-right-color: var(--fp-stone-border) !important;
  }
  html.dark .fp-site .fp-stat-info h3,
  [data-theme-mood="dark"] .fp-site .fp-stat-info h3 {
    color: #ffffff !important;
  }
  html.dark .fp-site .fp-stat-info p,
  [data-theme-mood="dark"] .fp-site .fp-stat-info p {
    color: var(--fp-text-muted-dark) !important;
  }

  html.dark .fp-site .fp-section.sand,
  [data-theme-mood="dark"] .fp-site .fp-section.sand {
    background: var(--theme-bg-surface, #091726) !important;
  }
  html.dark .fp-site .fp-section-title,
  [data-theme-mood="dark"] .fp-site .fp-section-title {
    color: #ffffff !important;
  }
  html.dark .fp-site .fp-section-desc,
  [data-theme-mood="dark"] .fp-site .fp-section-desc {
    color: var(--fp-text-muted-dark) !important;
  }

  html.dark .fp-site .fp-estimator-card,
  [data-theme-mood="dark"] .fp-site .fp-estimator-card {
    background: var(--theme-bg-card, #0c2031) !important;
    border-color: var(--fp-stone-border) !important;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4) !important;
  }
  html.dark .fp-site .fp-control-label,
  [data-theme-mood="dark"] .fp-site .fp-control-label {
    color: #ffffff !important;
  }
  html.dark .fp-site .fp-chip-btn,
  [data-theme-mood="dark"] .fp-site .fp-chip-btn {
    background: var(--theme-bg-surface, #112a40) !important;
    border-color: var(--fp-stone-border) !important;
  }
  html.dark .fp-site .fp-chip-btn:hover,
  [data-theme-mood="dark"] .fp-site .fp-chip-btn:hover {
    background: var(--theme-bg-elevated, #183753) !important;
  }
  html.dark .fp-site .fp-chip-title,
  [data-theme-mood="dark"] .fp-site .fp-chip-title {
    color: #ffffff !important;
  }
  html.dark .fp-site .fp-chip-sub,
  [data-theme-mood="dark"] .fp-site .fp-chip-sub {
    color: var(--fp-text-muted-dark) !important;
  }

  html.dark .fp-site .fp-service-card,
  [data-theme-mood="dark"] .fp-site .fp-service-card {
    background: var(--theme-bg-card, #0c2031) !important;
    border-color: var(--fp-stone-border) !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
  }
  html.dark .fp-site .fp-service-body h3,
  [data-theme-mood="dark"] .fp-site .fp-service-body h3 {
    color: #ffffff !important;
  }
  html.dark .fp-site .fp-service-body p,
  [data-theme-mood="dark"] .fp-site .fp-service-body p {
    color: var(--fp-text-muted-dark) !important;
  }
  html.dark .fp-site .fp-service-bullets,
  [data-theme-mood="dark"] .fp-site .fp-service-bullets {
    color: var(--fp-text-muted-dark) !important;
  }

  html.dark .fp-site .fp-process-card,
  [data-theme-mood="dark"] .fp-site .fp-process-card {
    background: var(--theme-bg-card, #0c2031) !important;
    border-color: var(--fp-stone-border) !important;
  }
  html.dark .fp-site .fp-step-num,
  [data-theme-mood="dark"] .fp-site .fp-step-num {
    background: var(--theme-bg-surface, #112a40) !important;
    color: var(--fp-forge-amber) !important;
  }
  html.dark .fp-site .fp-process-card h3,
  [data-theme-mood="dark"] .fp-site .fp-process-card h3 {
    color: #ffffff !important;
  }
  html.dark .fp-site .fp-process-card p,
  [data-theme-mood="dark"] .fp-site .fp-process-card p {
    color: var(--fp-text-muted-dark) !important;
  }

  html.dark .fp-site .fp-testimonial-card,
  [data-theme-mood="dark"] .fp-site .fp-testimonial-card {
    background: var(--theme-bg-card, #0c2031) !important;
    border-color: var(--fp-stone-border) !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3) !important;
  }
  html.dark .fp-site .fp-quote-copy,
  [data-theme-mood="dark"] .fp-site .fp-quote-copy {
    color: #f8fafc !important;
  }
  html.dark .fp-site .fp-author-row,
  [data-theme-mood="dark"] .fp-site .fp-author-row {
    border-top-color: var(--fp-stone-border) !important;
  }
  html.dark .fp-site .fp-author-row h4,
  [data-theme-mood="dark"] .fp-site .fp-author-row h4 {
    color: #ffffff !important;
  }
  html.dark .fp-site .fp-author-row p,
  [data-theme-mood="dark"] .fp-site .fp-author-row p {
    color: var(--fp-text-muted-dark) !important;
  }

  html.dark .fp-site .fp-form-wrapper,
  [data-theme-mood="dark"] .fp-site .fp-form-wrapper {
    background: var(--theme-bg-card, #0c2031) !important;
    border-color: var(--fp-stone-border) !important;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.4) !important;
  }
  html.dark .fp-site .fp-field-group label,
  [data-theme-mood="dark"] .fp-site .fp-field-group label {
    color: #ffffff !important;
  }
  html.dark .fp-site .fp-input,
  [data-theme-mood="dark"] .fp-site .fp-input,
  html.dark .fp-site .fp-select,
  [data-theme-mood="dark"] .fp-site .fp-select,
  html.dark .fp-site .fp-textarea,
  [data-theme-mood="dark"] .fp-site .fp-textarea {
    background: var(--theme-bg-surface, #112a40) !important;
    border-color: var(--fp-stone-border) !important;
    color: #ffffff !important;
  }
  html.dark .fp-site .fp-select option,
  [data-theme-mood="dark"] .fp-site .fp-select option {
    background: #0c2031 !important;
    color: #ffffff !important;
  }

  html.dark .fp-site .fp-faq-card,
  [data-theme-mood="dark"] .fp-site .fp-faq-card {
    background: var(--theme-bg-card, #0c2031) !important;
    border-color: var(--fp-stone-border) !important;
  }
  html.dark .fp-site .fp-faq-btn,
  [data-theme-mood="dark"] .fp-site .fp-faq-btn {
    color: #ffffff !important;
  }
  html.dark .fp-site .fp-faq-body,
  [data-theme-mood="dark"] .fp-site .fp-faq-body {
    color: var(--fp-text-muted-dark) !important;
  }

  /* ==========================================================================
     LIGHT MOOD SPECIFICS
     ========================================================================== */
  html.light .fp-site,
  body.light .fp-site,
  :root.light .fp-site,
  [data-theme-mood="light"] .fp-site,
  :root[data-theme-mood="light"] .fp-site,
  :root[data-theme-active="true"][data-theme-mood="light"] .fp-site {
    --fp-limestone:         var(--theme-bg-base, #fbf9f5);
    --fp-limestone-card:    var(--theme-bg-card, #f4efe6);
    --fp-stone-border:      var(--theme-border, rgba(0, 0, 0, 0.08));
    --fp-text-dark:         var(--theme-text-primary, #0f172a);
    --fp-text-muted-dark:   var(--theme-text-muted, #475569);
    background-color: var(--fp-limestone);
    color: var(--fp-text-dark);
  }

  /* ==========================================================================
     CUSTOM BACKGROUND MODE
     ========================================================================== */
  [data-theme-bg-mode="custom"] .fp-site {
    background-color: var(--theme-bg-base) !important;
  }
  [data-theme-bg-mode="custom"] .fp-site .fp-stats-ribbon,
  [data-theme-bg-mode="custom"] .fp-site .fp-estimator-card,
  [data-theme-bg-mode="custom"] .fp-site .fp-service-card,
  [data-theme-bg-mode="custom"] .fp-site .fp-process-card,
  [data-theme-bg-mode="custom"] .fp-site .fp-testimonial-card,
  [data-theme-bg-mode="custom"] .fp-site .fp-form-wrapper,
  [data-theme-bg-mode="custom"] .fp-site .fp-faq-card {
    background-color: var(--theme-bg-card, var(--theme-bg-base)) !important;
  }

  /* Responsive Breakpoints */
  @media (max-width: 1280px) {
    .fp-nav-links {
      gap: 18px;
    }
    .fp-nav-links a {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 1100px) {
    .fp-nav-links {
      gap: 14px;
    }
  }

  @media (max-width: 1024px) {
    .fp-estimator-layout,
    .fp-form-grid {
      grid-template-columns: 1fr;
    }
    .fp-services-grid,
    .fp-projects-grid,
    .fp-testimonials-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .fp-process-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .fp-footer-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .fp-hero-floating-spec {
      display: none;
    }
  }

  @media (max-width: 920px) {
    .fp-nav-links {
      display: none;
    }
    .fp-hamburger {
      display: flex;
    }
    .fp-nav-cta {
      display: none;
    }
    .fp-nav {
      height: 68px;
    }
  }

  @media (max-width: 768px) {
    .fp-stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .fp-services-grid,
    .fp-projects-grid,
    .fp-process-grid,
    .fp-testimonials-grid,
    .fp-footer-grid {
      grid-template-columns: 1fr;
    }
    .fp-estimator-card,
    .fp-form-wrapper {
      padding: 24px;
    }
  }

  @media (max-width: 480px) {
    .fp-section {
      padding: 64px 0;
    }
    .fp-hero-content {
      padding: 60px 0;
    }
    .fp-hero-title {
      font-size: clamp(2rem, 8vw, 2.75rem);
    }
    .fp-hero-actions {
      flex-direction: column;
    }
    .fp-hero-actions .fp-btn {
      width: 100%;
      justify-content: center;
    }
  }
`;

