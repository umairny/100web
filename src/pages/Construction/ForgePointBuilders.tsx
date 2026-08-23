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
import "./ForgePointBuilders.css";

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
      <header className={`fp-header ${isScrolled ? "is-scrolled" : ""}`}>
        <div className="fp-wrap fp-nav">
          <a href="#fp-home" className="fp-logo" onClick={(e) => scrollTo(e, "fp-home")}>
            <div className="fp-logo-mark">F</div>
            <div className="fp-logo-text">
              ForgePoint<br />
              <span>Builders</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="fp-nav-links">
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

          <div className="flex items-center gap-3">
            <a
              href="#fp-contact"
              className="fp-btn fp-btn-primary fp-btn-sm hidden sm:inline-flex"
              onClick={(e) => scrollTo(e, "fp-contact")}
            >
              Request Consultation
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              type="button"
              className="md:hidden text-white p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {menuOpen && (
          <div className="md:hidden bg-[#071320] border-b border-slate-800 p-6 flex flex-col gap-3 animate-in slide-in-from-top-4 duration-200">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`py-2 text-base font-semibold ${
                  activeSection === item.id ? "text-amber-500" : "text-slate-300"
                }`}
                onClick={(e) => scrollTo(e, item.id)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <a
                href="#fp-contact"
                className="fp-btn fp-btn-primary w-full"
                onClick={(e) => scrollTo(e, "fp-contact")}
              >
                Request Consultation
              </a>
            </div>
          </div>
        )}
      </header>

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
