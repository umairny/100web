import React, { useEffect, useState, useMemo } from "react";
import {
  Zap,
  Phone,
  Mail,
  MapPin,
  Shield,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock,
  HardHat,
  Award,
  Search,
  ArrowRight,
  Calculator,
  ChevronDown,
  Building2,
  Home,
  Cpu,
  BatteryCharging,
  Sliders,
  FileCheck,
  Flame,
  Star,
  Menu,
  X,
  UploadCloud,
  Check,
} from "lucide-react";
import { imageUrl } from "../../assets/images";

// --- Asset Image Resolvers ---
const heroImg = imageUrl("Construction/forgeline/hero.webp") || "/images/forgeline/hero.webp";
const residentialImg = imageUrl("Construction/forgeline/residential.webp") || "/images/forgeline/residential.webp";
const commercialImg = imageUrl("Construction/forgeline/commercial.webp") || "/images/forgeline/commercial.webp";
const industrialImg = imageUrl("Construction/forgeline/industrial.webp") || "/images/forgeline/industrial.webp";
const evChargingImg = imageUrl("Construction/forgeline/ev_charging.webp") || "/images/forgeline/ev_charging.webp";
const project1Img = imageUrl("Construction/forgeline/project1.webp") || "/images/forgeline/project1.webp";
const project2Img = imageUrl("Construction/forgeline/project2.webp") || "/images/forgeline/project2.webp";
const project3Img = imageUrl("Construction/forgeline/project3.webp") || "/images/forgeline/project3.webp";
const serviceMapImg = imageUrl("Construction/forgeline/service_map.webp") || "/images/forgeline/service_map.webp";

// --- Navigation Links ---
const navLinks = [
  { label: "Services", target: "fl-services" },
  { label: "Cost Estimator", target: "fl-estimator" },
  { label: "Completed Projects", target: "fl-projects" },
  { label: "Code & Safety", target: "fl-safety" },
  { label: "Service Map", target: "fl-territory" },
  { label: "Reviews", target: "fl-reviews" },
  { label: "FAQs", target: "fl-faq" },
];

// --- Services Data ---
const servicesData = [
  {
    id: "residential",
    badge: "Smart Power",
    title: "Residential & Smart Panel Upgrades",
    image: residentialImg,
    desc: "Seamless 200A & 400A service upgrades, smart load center installations (Span/Leviton), whole-home rewiring, and subpanel distribution.",
    features: [
      "200A / 400A Main Service Upgrades",
      "Smart Energy Monitor & Subpanel Setup",
      "Whole-Home Surge Suppression (Type 2)",
      "Dedicated Appliance Circuits & AFCI/GFCI",
    ],
    code: "NEC 2024 Compliant",
  },
  {
    id: "commercial",
    badge: "High Voltage",
    title: "Commercial 3-Phase Power Distribution",
    image: commercialImg,
    desc: "Complete electrical engineering for office buildings, retail fit-outs, high-bay LED retrofits, busways, and commercial switchgear installations.",
    features: [
      "480V / 208V 3-Phase Switchgear & Transformers",
      "Tenant Buildouts & Server Room UPS Feeds",
      "Architectural & Emergency Egress Lighting",
      "Power Factor Correction & Demand Metering",
    ],
    code: "Title 24 & OSHA-30 Verified",
  },
  {
    id: "industrial",
    badge: "Automation",
    title: "Industrial Controls & PLC Automation",
    image: industrialImg,
    desc: "Custom control cabinet fabrication, SCADA systems, motor control centers (MCC), machinery power drops, and thermal imaging diagnostics.",
    features: [
      "UL 508A Certified Control Panels",
      "VFD & Servo Motor Circuit Wiring",
      "Preventative Thermal Infrared Scanning",
      "Substation Feeder Maintenance",
    ],
    code: "NFPA 70E Arc Flash Safe",
  },
  {
    id: "ev",
    badge: "Clean Energy",
    title: "Commercial & Fleet EV Charging Hubs",
    image: evChargingImg,
    desc: "Turnkey Level 2 and DC Fast Charging infrastructure for corporate fleets, municipal parking, residential complexes, and logistics hubs.",
    features: [
      "High-Output DC Fast Chargers (150kW - 350kW)",
      "Smart Load Balancing & Utility Interconnection",
      "Solar Canopy & Battery Energy Storage (BESS)",
      "EVITP Certified Master Electricians",
    ],
    code: "EVITP & Utility Rebate Qualified",
  },
  {
    id: "emergency",
    badge: "24/7 Rapid",
    title: "Emergency Diagnostics & Fault Locating",
    image: heroImg,
    desc: "24/7 rapid response fleet equipped with digital thermal imagers, underground cable locators, and megohmmeters to restore power fast.",
    features: [
      "Under 45-Min Metro Emergency Dispatch",
      "High-Resistance Ground Fault Tracing",
      "Transformer & Main Breaker Emergency Swaps",
      "Temporary Standby Generator Tie-Ins",
    ],
    code: "24/7 Active On-Call Fleet",
  },
  {
    id: "backup",
    badge: "Resilience",
    title: "Standby Generators & Automatic Transfer",
    image: project2Img,
    desc: "Whole-building standby power solutions, automatic transfer switches (ATS), natural gas/diesel generator installations, and critical load backups.",
    features: [
      "Automatic Transfer Switches (ATS) 100A-1200A",
      "Critical Care & Data Center Redundancy",
      "Utility Paralleling & Peak Shaving",
      "Routine Load Bank Testing & Maintenance",
    ],
    code: "NEC 700 / 701 Compliant",
  },
];

// --- Projects Data ---
const projectsData = [
  {
    id: 1,
    category: "commercial",
    tag: "Commercial HQ",
    title: "Nexus Tech Campus: 24,000 SF Power Infrastructure",
    location: "Metro Financial District",
    image: project1Img,
    desc: "Engineered dual 1200A 480V service feeds, architectural suspended linear LEDs, and dedicated server room isolated ground power.",
    specs: ["480V 3-Phase", "24,000 Sq Ft", "4-Week Delivery", "Zero Downtime"],
    rating: 5,
    client: "Nexus Global Holdings",
  },
  {
    id: 2,
    category: "industrial",
    tag: "Substation & Transformer",
    title: "Logistics Hub: 2.5 MVA Primary Substation Expansion",
    location: "South Valley Industrial Park",
    image: project2Img,
    desc: "Installed high-voltage pad-mounted oil-filled transformers, primary switchgear, and subterranean conduit runs for automated distribution.",
    specs: ["12.47 kV Step-down", "2.5 MVA Capacity", "OSHA-30 Certified", "NFPA 70E Tested"],
    rating: 5,
    client: "Apex Freight Logistics",
  },
  {
    id: 3,
    category: "residential",
    tag: "Smart Modern Estate",
    title: "Highland Ridge: 8,500 SF Whole-Home Smart Automation",
    location: "West Lake Hills",
    image: project3Img,
    desc: "Installed Span smart electrical panel, 40kW Generac standby generator with ATS, dual Level 2 EV chargers, and architectural twilight illumination.",
    specs: ["400A Smart Service", "8,500 Sq Ft", "Dual 80A EV feeds", "Bespoke Lighting"],
    rating: 5,
    client: "Private Residence",
  },
  {
    id: 4,
    category: "ev",
    tag: "EV Fleet Charging",
    title: "Metro Transit: 16-Bay High-Power Fleet Depot",
    location: "North Region Depot",
    image: evChargingImg,
    desc: "Complete turnkey design and installation of 16 DC fast chargers with solar canopy integration and automated cloud load management.",
    specs: ["350 kW DC Fast", "16 Fleet Stalls", "Solar Integrated", "EVITP Certified"],
    rating: 5,
    client: "City Mobility Partners",
  },
  {
    id: 5,
    category: "commercial",
    tag: "Switchgear Retrofit",
    title: "Apex Plaza: 3-Phase Main Switchboard Modernization",
    location: "Downtown Core",
    image: commercialImg,
    desc: "Overnight replacement of obsolete 1980s 800A switchboard with modern arc-resistant Eaton switchgear with zero tenant disruption.",
    specs: ["800A 3-Phase", "Arc-Resistant", "Weekend Cutover", "100% Code Pass"],
    rating: 5,
    client: "Plaza Property Management",
  },
  {
    id: 6,
    category: "industrial",
    tag: "PLC Automation",
    title: "BioPharm Controls: Precision Automation Panel",
    location: "East Tech Corridor",
    image: industrialImg,
    desc: "Engineered and wired UL 508A control cabinets with Siemens S7-1500 PLCs, digital HMI touchscreens, and isolated signal routing.",
    specs: ["UL 508A Certified", "Siemens S7-1500", "Thermal Verified", "Class 1 Div 2"],
    rating: 5,
    client: "BioPharm Solutions",
  },
];

// --- Estimator Scope Configurations ---
const estimatorServices = [
  { id: "panel", name: "Panel Upgrade (200A / 400A)", baseMin: 2800, baseMax: 4500, leadTime: "1-2 Days" },
  { id: "ev", name: "Level 2 EV Charger Install", baseMin: 950, baseMax: 1800, leadTime: "Same Day" },
  { id: "rewire", name: "Whole-Property Rewiring", baseMin: 8500, baseMax: 16500, leadTime: "3-5 Days" },
  { id: "commercial", name: "Commercial 3-Phase Buildout", baseMin: 12000, baseMax: 28000, leadTime: "1-2 Weeks" },
  { id: "generator", name: "Whole-Home Generator + ATS", baseMin: 7500, baseMax: 14000, leadTime: "2-3 Days" },
  { id: "emergency", name: "Emergency Diagnosis & Repair", baseMin: 450, baseMax: 1200, leadTime: "Immediate (<45m)" },
];

const propertyMultipliers: Record<string, { multiplier: number; label: string }> = {
  residential_small: { multiplier: 1.0, label: "Residential (< 2,500 sq ft)" },
  residential_large: { multiplier: 1.35, label: "Residential Estate (2,500+ sq ft)" },
  commercial_office: { multiplier: 1.8, label: "Commercial Office / Retail" },
  industrial_facility: { multiplier: 2.4, label: "Industrial / Manufacturing" },
};

const urgencyMultipliers: Record<string, { multiplier: number; label: string }> = {
  standard: { multiplier: 1.0, label: "Flexible (Within 1-2 Weeks)" },
  priority: { multiplier: 1.15, label: "Priority (Within 48-72 Hours)" },
  emergency: { multiplier: 1.3, label: "Emergency (Immediate 24/7 Dispatch)" },
};

// --- Testimonials ---
const testimonials = [
  {
    name: "Marcus Vance",
    role: "Director of Facilities, Nexus BioTech",
    stars: 5,
    text: "ForgeLine executed our 480V 3-phase switchgear retrofit seamlessly over a single weekend. Their safety protocols, precision conduit work, and zero downtime execution made them our exclusive electrical contractor.",
    tag: "Commercial Switchgear",
  },
  {
    name: "Elena Rostova",
    role: "Homeowner, West Lake Estates",
    stars: 5,
    text: "Upgraded our 100A fuse box to a 200A Span Smart Panel and installed dual Tesla Wall Connectors. The electricians were prompt, extremely neat, and handled all city permitting and utility inspections effortlessly.",
    tag: "Smart Panel & EV",
  },
  {
    name: "Derrick Holbrook",
    role: "Operations Manager, Apex Freight",
    stars: 5,
    text: "When our main transformer tripped at 2 AM on a Sunday, ForgeLine had a master electrician and bucket truck on-site in 30 minutes. They diagnosed the thermal fault and restored full power before morning shifts.",
    tag: "24/7 Emergency Dispatch",
  },
];

// --- FAQs ---
const faqs = [
  {
    q: "How long does a 200-Amp electrical panel upgrade take?",
    a: "Most residential 200A panel upgrades are completed in a single day (typically 6-8 hours). ForgeLine coordinates all utility cut-off and re-connections with the local power company and handles city permit sign-offs so power is safely restored by late afternoon.",
  },
  {
    q: "Are your electricians licensed, insured, and background-checked?",
    a: "Yes. ForgeLine Electrical holds a state C-10 Electrical Contractor License (#1094821), carries $5,000,000 in comprehensive liability and worker's compensation insurance, and mandates OSHA-30 and NFPA 70E Arc Flash safety training for all technicians.",
  },
  {
    q: "Do you offer rebates and incentives for commercial EV chargers and solar?",
    a: "Yes! Because our technicians are EVITP certified (Electric Vehicle Infrastructure Training Program), our installations qualify for federal tax credits (Section 30C), state clean-energy rebates, and utility-sponsored commercial charging grants. We assist with all rebate filing.",
  },
  {
    q: "How fast is your 24/7 Emergency Electrical Dispatch?",
    a: "Our emergency on-call crews maintain an average dispatch response time of under 45 minutes across the greater metro region. Our mobile service vans are equipped with diagnostic thermal cameras, high-voltage test gear, and essential switchgear components.",
  },
  {
    q: "What is the difference between an estimate and a formal quote?",
    a: "Our online calculator provides an instant ballpark estimate based on standard regional scopes. When you submit your details or schedule an on-site evaluation, we provide an itemized, guaranteed fixed-price quote with zero hidden change orders.",
  },
];

export function ForgeLineElectric() {
  const [activeNav, setActiveNav] = useState("fl-services");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  // Close menu on ESC key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setMobileMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Estimator State
  const [selectedServiceId, setSelectedServiceId] = useState("panel");
  const [selectedProperty, setSelectedProperty] = useState("residential_small");
  const [selectedUrgency, setSelectedUrgency] = useState("standard");
  const [quotePrefillNote, setQuotePrefillNote] = useState("");

  // Projects Filter State
  const [activeProjectTab, setActiveProjectTab] = useState("all");

  // Zip Code Checker State
  const [zipInput, setZipInput] = useState("");
  const [zipResult, setZipResult] = useState<{ status: "success" | "error"; msg: string } | null>(null);

  // Quote Form State
  const [formService, setFormService] = useState("Panel Upgrade (200A / 400A)");
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formDetails, setFormDetails] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  // FAQ Accordion State
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // Handle scroll detection for sticky header & active nav tracking
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (window.scrollY < 200) {
        setActiveNav(navLinks[0].target);
        return;
      }

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70) {
        setActiveNav(navLinks[navLinks.length - 1].target);
        return;
      }

      const offset = window.scrollY + 160;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const el = document.getElementById(navLinks[i].target);
        if (el && el.offsetTop <= offset) {
          setActiveNav(navLinks[i].target);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll helper
  const scrollToSection = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const el = document.getElementById(targetId);
    if (el) {
      const yOffset = -85;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Live Price Calculation
  const calculatedEstimate = useMemo(() => {
    const s = estimatorServices.find((item) => item.id === selectedServiceId) || estimatorServices[0];
    const p = propertyMultipliers[selectedProperty]?.multiplier || 1.0;
    const u = urgencyMultipliers[selectedUrgency]?.multiplier || 1.0;

    const min = Math.round((s.baseMin * p * u) / 50) * 50;
    const max = Math.round((s.baseMax * p * u) / 50) * 50;

    return {
      service: s.name,
      leadTime: s.leadTime,
      min: min.toLocaleString(),
      max: max.toLocaleString(),
    };
  }, [selectedServiceId, selectedProperty, selectedUrgency]);

  // Apply estimator selection to Quote Form
  const applyEstimateToQuote = () => {
    setFormService(calculatedEstimate.service);
    setFormDetails(
      `Pre-selected Scope: ${calculatedEstimate.service} | ${propertyMultipliers[selectedProperty].label} | ${urgencyMultipliers[selectedUrgency].label} (Ballpark Est: $${calculatedEstimate.min} - $${calculatedEstimate.max})`
    );
    setQuotePrefillNote(`Applied Scope: $${calculatedEstimate.min} - $${calculatedEstimate.max}`);
    const quoteEl = document.getElementById("fl-quote");
    if (quoteEl) {
      quoteEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ZIP Code Validation Logic
  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanZip = zipInput.trim();
    if (!cleanZip || cleanZip.length < 3) {
      setZipResult({
        status: "error",
        msg: "Please enter a valid 5-digit ZIP Code or City name.",
      });
      return;
    }

    // High coverage validation
    setZipResult({
      status: "success",
      msg: `Verified! ${cleanZip} is in ForgeLine's Direct Primary Coverage Area. Estimated Emergency Dispatch: < 35 minutes.`,
    });
  };

  // Filtered Projects
  const filteredProjects = useMemo(() => {
    if (activeProjectTab === "all") return projectsData;
    return projectsData.filter((p) => p.category === activeProjectTab);
  }, [activeProjectTab]);

  // Quote Form Submission
  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="fl-site">
      <style>{css}</style>
      {/* 1. Emergency Top Dispatch Bar */}
      <div className="fl-topbar">
        <div className="fl-container fl-topbar-content">
          <div className="fl-topbar-left">
            <span className="fl-badge-pill">
              <span className="fl-pulse-dot"></span>
              24/7 Rapid Dispatch: Active On-Call
            </span>
            <span className="hidden md:inline-flex items-center gap-1.5 text-xs">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              State License: C-10 #1094821 • $5M Bonded & Insured
            </span>
          </div>
          <div className="fl-topbar-right">
            <span className="hidden sm:inline-flex items-center gap-2 text-xs">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              Avg Metro Response: <strong>&lt; 45 Mins</strong>
            </span>
            <a href="tel:18005558658" className="fl-topbar-link font-bold text-amber-400">
              <Phone className="w-3.5 h-3.5" />
              (800) 555-VOLT
            </a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
      <header className={`fl-header${isScrolled ? " scrolled" : ""}`}>
        <div className="fl-container fl-nav-wrapper">
          <a href="#fl-hero" className="fl-logo" onClick={(e) => scrollToSection(e, "fl-hero")}>
            <div className="fl-logo-icon">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <div className="fl-logo-text">
              ForgeLine<span>Electrical</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="fl-nav-links" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={`#${link.target}`}
                className={`fl-nav-item ${activeNav === link.target ? "active" : ""}`}
                onClick={(e) => scrollToSection(e, link.target)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="fl-nav-actions">
            <a
              href="#fl-quote"
              className="fl-btn fl-btn-primary fl-btn-sm fl-nav-cta"
              onClick={(e) => scrollToSection(e, "fl-quote")}
            >
              Get Free Estimate
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              className="fl-hamburger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay Backdrop */}
      {mobileMenuOpen && (
        <div
          className="fl-mobile-backdrop"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Slide-In Drawer */}
      <div className={`fl-mobile-drawer${mobileMenuOpen ? " is-open" : ""}`} aria-hidden={!mobileMenuOpen}>
        <div className="fl-mobile-drawer-header">
          <div className="fl-logo">
            <div className="fl-logo-icon">
              <Zap className="w-6 h-6 fill-current" />
            </div>
            <div className="fl-logo-text">
              ForgeLine<span>Electrical</span>
            </div>
          </div>
          <button
            type="button"
            className="fl-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="fl-mobile-nav">
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              className={`fl-mobile-nav-link${activeNav === link.target ? " active" : ""}`}
              onClick={(e) => scrollToSection(e, link.target)}
            >
              {link.label}
              <ArrowRight className="w-4 h-4" />
            </a>
          ))}
        </nav>

        <div className="fl-mobile-drawer-footer">
          <a
            href="#fl-quote"
            className="fl-btn fl-btn-primary"
            style={{ width: "100%" }}
            onClick={(e) => scrollToSection(e, "fl-quote")}
          >
            Request a Fast Quote
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="tel:18005558658"
            className="fl-btn fl-btn-emergency"
            style={{ width: "100%" }}
          >
            <Phone className="w-4 h-4" />
            Emergency Hotline — 24/7
          </a>
        </div>
      </div>

      {/* 3. Hero Section */}
      <section id="fl-hero" className="fl-hero-section">
        <div className="fl-hero-grid-bg"></div>
        <div className="fl-container">
          <div className="fl-hero-layout">
            <div>
              <div className="fl-hero-tag">
                <Zap className="w-4 h-4 fill-current" />
                Master Electrician Contracting & Engineering
              </div>
              <h1 className="fl-hero-title">
                Engineered Power. <br />
                <span className="highlight-amber">Precision Code.</span> <br />
                <span className="highlight-cyan">24/7 Reliability.</span>
              </h1>
              <p className="fl-hero-desc">
                From 480V commercial switchgear and industrial automation to smart home 400A panel upgrades and fleet EV charging hubs. Precision electrical contracting built to outlast.
              </p>
              <div className="fl-hero-ctas">
                <a
                  href="#fl-estimator"
                  className="fl-btn fl-btn-primary fl-btn-lg"
                  onClick={(e) => scrollToSection(e, "fl-estimator")}
                >
                  <Calculator className="w-5 h-5" />
                  Instant Cost Estimator
                </a>
                <a
                  href="#fl-projects"
                  className="fl-btn fl-btn-secondary fl-btn-lg"
                  onClick={(e) => scrollToSection(e, "fl-projects")}
                >
                  View Completed Work
                </a>
              </div>

              {/* Live Trust Metrics */}
              <div className="fl-hero-stats">
                <div className="fl-stat-item">
                  <h3>15<span>+</span></h3>
                  <p>Years in Field</p>
                </div>
                <div className="fl-stat-item">
                  <h3>100<span>%</span></h3>
                  <p>Code Pass Rate</p>
                </div>
                <div className="fl-stat-item">
                  <h3>380<span>+</span></h3>
                  <p>5-Star Reviews</p>
                </div>
                <div className="fl-stat-item">
                  <h3>&lt;45<span>m</span></h3>
                  <p>Avg Dispatch</p>
                </div>
              </div>
            </div>

            {/* Hero Visual Card */}
            <div className="fl-hero-media">
              <div className="fl-hero-image-wrap">
                <img
                  src={heroImg}
                  alt="Master Electrician with Digital Diagnostic Tools at Commercial Panel"
                />
                <div className="fl-hero-image-overlay"></div>
                <div className="fl-hero-live-badge">
                  <span className="fl-pulse-dot"></span>
                  <span className="text">Live Diagnostics Active</span>
                </div>
              </div>

              {/* Floating Highlight Card */}
              <div className="fl-hero-floating-card fl-floating-badge">
                <div className="fl-floating-card-icon">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-0.5">NFPA 70E & NEC 2024</h4>
                  <p className="text-xs text-slate-400">Guaranteed 1st-Pass Municipal Inspection on every installation.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Interactive Live Cost Estimator Section */}
      <section id="fl-estimator" className="fl-section">
        <div className="fl-container">
          <div className="fl-section-header">
            <div className="fl-eyebrow">
              <Calculator className="w-4 h-4" />
              Transparent Pricing Tool
            </div>
            <h2 className="fl-section-title">Interactive Electrical Ballpark Estimator</h2>
            <p className="fl-section-subtitle">
              Get an instant, transparent ballpark calculation for your upcoming electrical project. No email required to calculate.
            </p>
          </div>

          <div className="fl-estimator-box">
            <div className="fl-estimator-grid">
              <div className="fl-estimator-options">
                {/* Step 1: Select Service */}
                <div>
                  <div className="fl-option-group-label">1. Select Electrical Service Needed</div>
                  <div className="fl-pill-selectors">
                    {estimatorServices.map((srv) => (
                      <button
                        key={srv.id}
                        type="button"
                        className={`fl-pill-btn ${selectedServiceId === srv.id ? "active" : ""}`}
                        onClick={() => setSelectedServiceId(srv.id)}
                      >
                        <span>{srv.name}</span>
                        <span className="sub">Lead: {srv.leadTime}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Property Type */}
                <div>
                  <div className="fl-option-group-label">2. Property Scope / Facility Type</div>
                  <div className="fl-pill-selectors">
                    {Object.entries(propertyMultipliers).map(([key, data]) => (
                      <button
                        key={key}
                        type="button"
                        className={`fl-pill-btn ${selectedProperty === key ? "active" : ""}`}
                        onClick={() => setSelectedProperty(key)}
                      >
                        <span>{data.label.split("(")[0]}</span>
                        <span className="sub">{data.label.includes("(") ? `(${data.label.split("(")[1]}` : ""}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: Urgency */}
                <div>
                  <div className="fl-option-group-label">3. Timeline & Scheduling</div>
                  <div className="fl-pill-selectors">
                    {Object.entries(urgencyMultipliers).map(([key, data]) => (
                      <button
                        key={key}
                        type="button"
                        className={`fl-pill-btn ${selectedUrgency === key ? "active" : ""}`}
                        onClick={() => setSelectedUrgency(key)}
                      >
                        <span>{data.label.split("(")[0]}</span>
                        <span className="sub">{data.label.includes("(") ? `(${data.label.split("(")[1]}` : ""}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Result Summary Box */}
              <div className="fl-estimator-result-card">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/20 mb-2">
                  <Zap className="w-3.5 h-3.5" />
                  Estimated Range
                </div>
                <div className="fl-estimate-price-range">
                  ${calculatedEstimate.min} - ${calculatedEstimate.max}
                </div>
                <p className="text-xs text-slate-400">
                  Estimated duration: <strong>{calculatedEstimate.leadTime}</strong>
                </p>

                <ul className="fl-estimate-details-list">
                  <li>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Complete Municipal Permit & Utility Filing Included</span>
                  </li>
                  <li>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Licensed Master Electrician On-Site Supervision</span>
                  </li>
                  <li>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>10-Year Comprehensive Craftsmanship Warranty</span>
                  </li>
                  <li>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>100% First-Pass Inspection Guarantee</span>
                  </li>
                </ul>

                <button
                  type="button"
                  className="fl-btn fl-btn-primary w-full"
                  onClick={applyEstimateToQuote}
                >
                  Apply Scope to Fast Quote
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Comprehensive Services Grid */}
      <section id="fl-services" className="fl-section alt">
        <div className="fl-container">
          <div className="fl-section-header">
            <div className="fl-eyebrow">
              <Sliders className="w-4 h-4" />
              End-to-End Capabilities
            </div>
            <h2 className="fl-section-title">Specialized Electrical Solutions</h2>
            <p className="fl-section-subtitle">
              Engineered for absolute code compliance, peak energy efficiency, and industrial durability across residential, commercial, and high-tech facilities.
            </p>
          </div>

          <div className="fl-services-grid">
            {servicesData.map((service) => (
              <div key={service.id} className="fl-service-card">
                <div className="fl-service-thumb">
                  <img src={service.image} alt={service.title} />
                  <div className="fl-service-badge">
                    <Zap className="w-3.5 h-3.5" />
                    {service.badge}
                  </div>
                </div>
                <div className="fl-service-body">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <ul className="fl-service-features">
                    {service.features.map((feat, idx) => (
                      <li key={idx}>
                        <Check className="w-4 h-4" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#fl-quote"
                    className="fl-service-link"
                    onClick={(e) => {
                      scrollToSection(e, "fl-quote");
                      setFormService(service.title);
                    }}
                  >
                    <span>Request Spec & Quote</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Filterable Projects Gallery */}
      <section id="fl-projects" className="fl-section">
        <div className="fl-container">
          <div className="fl-section-header">
            <div className="fl-eyebrow">
              <Award className="w-4 h-4" />
              Verified Portfolio Proof
            </div>
            <h2 className="fl-section-title">Featured Installations & Fit-Outs</h2>
            <p className="fl-section-subtitle">
              Explore our track record of high-stakes electrical projects executed on-time, on-budget, and zero incident safety records.
            </p>
          </div>

          {/* Project Filters */}
          <div className="fl-project-tabs">
            {[
              { id: "all", label: "All Projects" },
              { id: "commercial", label: "Commercial & Switchgear" },
              { id: "industrial", label: "Industrial & Substation" },
              { id: "residential", label: "Residential & Smart Home" },
              { id: "ev", label: "EV Infrastructure" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`fl-tab-btn ${activeProjectTab === tab.id ? "active" : ""}`}
                onClick={() => setActiveProjectTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="fl-projects-grid">
            {filteredProjects.map((project) => (
              <div key={project.id} className="fl-project-card">
                <div className="fl-project-media">
                  <img src={project.image} alt={project.title} />
                  <div className="fl-project-tag">{project.tag}</div>
                  <div className="fl-project-specs-overlay">
                    {project.specs.slice(0, 2).map((sp, idx) => (
                      <span key={idx} className="fl-spec-chip">
                        {sp}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="fl-project-body">
                  <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold mb-2">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </div>
                  <h3>{project.title}</h3>
                  <p>{project.desc}</p>
                  <div className="fl-project-footer">
                    <span>Client: <strong>{project.client}</strong></span>
                    <span className="flex items-center gap-1 text-amber-400">
                      <Star className="w-3.5 h-3.5 fill-current" />
                      5.0 Verified
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Safety, Code Compliance & Certifications */}
      <section id="fl-safety" className="fl-section alt">
        <div className="fl-container">
          <div className="fl-section-header">
            <div className="fl-eyebrow">
              <ShieldCheck className="w-4 h-4" />
              Zero-Compromise Standards
            </div>
            <h2 className="fl-section-title">Credentials, Code & Safety First</h2>
            <p className="fl-section-subtitle">
              Electricity is unforgiving. We back every circuit with rigorous master-level certifications, calibrated test equipment, and continuous safety audits.
            </p>
          </div>

          <div className="fl-certs-grid">
            <div className="fl-cert-card">
              <div className="fl-cert-icon-wrap">
                <Award className="w-8 h-8" />
              </div>
              <h3>C-10 Master License</h3>
              <p>Fully licensed electrical contractor (#1094821) with bonded protection and $5,000,000 commercial liability coverage.</p>
            </div>

            <div className="fl-cert-card">
              <div className="fl-cert-icon-wrap">
                <Shield className="w-8 h-8" />
              </div>
              <h3>NFPA 70E Arc Flash Safe</h3>
              <p>Strict adherence to national electrical workplace safety standards, PPE Level 4 protocols, and daily job hazard analyses.</p>
            </div>

            <div className="fl-cert-card">
              <div className="fl-cert-icon-wrap">
                <HardHat className="w-8 h-8" />
              </div>
              <h3>OSHA-30 Certified Crews</h3>
              <p>100% of our on-site supervisors and field electricians hold active OSHA-30 construction safety credentials.</p>
            </div>

            <div className="fl-cert-card">
              <div className="fl-cert-icon-wrap">
                <BatteryCharging className="w-8 h-8" />
              </div>
              <h3>EVITP Certified Installers</h3>
              <p>Certified by the Electric Vehicle Infrastructure Training Program for high-voltage DC fast charging installations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Service Territory Map & Interactive ZIP Checker */}
      <section id="fl-territory" className="fl-section">
        <div className="fl-container">
          <div className="fl-territory-layout">
            <div>
              <div className="fl-eyebrow">
                <MapPin className="w-4 h-4" />
                Regional Coverage Network
              </div>
              <h2 className="fl-section-title">Serving the Greater Regional Grid</h2>
              <p className="text-slate-300 text-base leading-relaxed mb-6">
                ForgeLine operates multiple decentralized mobile electrical dispatch hubs across the metropolitan core, industrial sectors, and surrounding communities.
              </p>

              <div className="grid grid-cols-2 gap-4 text-sm text-slate-300 mb-6">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Central Metro Core</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>North Region Hub</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>East Tech Corridor</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>South Valley Industrial</span>
                </div>
              </div>

              {/* Interactive Zip Code Checker */}
              <div className="fl-zip-checker">
                <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-2">
                  Check Instant Service & Dispatch Availability:
                </h4>
                <form onSubmit={handleZipCheck} className="fl-zip-input-group">
                  <input
                    type="text"
                    placeholder="Enter your 5-digit ZIP Code or City..."
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value)}
                    className="fl-zip-input"
                  />
                  <button type="submit" className="fl-btn fl-btn-primary">
                    Verify Area
                  </button>
                </form>

                {zipResult && (
                  <div className={`fl-zip-result ${zipResult.status}`}>
                    {zipResult.status === "success" ? (
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                    ) : (
                      <AlertTriangle className="w-5 h-5 shrink-0" />
                    )}
                    <span>{zipResult.msg}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Territory Map Visual */}
            <div className="fl-territory-map-card">
              <img src={serviceMapImg} alt="ForgeLine Regional Service Grid Coverage Map" />
            </div>
          </div>
        </div>
      </section>

      {/* 9. Reviews & Social Proof */}
      <section id="fl-reviews" className="fl-section alt">
        <div className="fl-container">
          <div className="fl-section-header">
            <div className="fl-eyebrow">
              <Star className="w-4 h-4" />
              Verified Client Trust
            </div>
            <h2 className="fl-section-title">What Facility Directors & Homeowners Say</h2>
            <p className="fl-section-subtitle">
              Rated 4.98 / 5.0 across Google, Yelp, and commercial contractor registries.
            </p>
          </div>

          <div className="fl-reviews-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className="fl-review-card">
                <div>
                  <div className="fl-review-stars">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="fl-review-text">"{t.text}"</p>
                </div>
                <div className="fl-reviewer-info">
                  <div className="fl-reviewer-avatar">{t.name[0]}</div>
                  <div className="fl-reviewer-details">
                    <h4>{t.name}</h4>
                    <p>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Quote Request & Project File Upload Form */}
      <section id="fl-quote" className="fl-section">
        <div className="fl-container">
          <div className="fl-quote-wrapper">
            <div className="fl-quote-grid">
              <div>
                <div className="fl-eyebrow">
                  <FileCheck className="w-4 h-4" />
                  Fast Turnaround
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-6 leading-tight">
                  Ready to Power Up? <br />
                  <span className="text-amber-400">Request a Precision Quote</span>
                </h2>
                <p className="text-slate-300 text-base leading-relaxed mb-6">
                  Submit your project details for a prompt, itemized fixed-price proposal. Upload blueprints, panel photos, or equipment specs for accelerated engineering review.
                </p>

                <div className="space-y-4 text-sm text-slate-300 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Same-Day Proposal Review:</strong> Detailed line-item breakdown with zero hidden fees.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Full Utility Coordination:</strong> We handle all permits, utility disconnects, and inspection scheduling.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Direct Line to Master Electrician:</strong> Talk directly with engineers who understand the technical scope.
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Need Immediate Emergency Help?</div>
                    <div className="text-base font-bold text-white">(800) 555-8658 (VOLT)</div>
                  </div>
                </div>
              </div>

              {/* The Form */}
              <div>
                {formSubmitted ? (
                  <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-2xl p-8 text-center animate-in fade-in">
                    <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/40">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Quote Request Received!</h3>
                    <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                      Thank you, <strong>{formName || "Client"}</strong>. An engineering estimator has been assigned to your request and will follow up within <strong>2 hours</strong> with your proposal.
                    </p>
                    <button
                      type="button"
                      className="fl-btn fl-btn-secondary"
                      onClick={() => setFormSubmitted(false)}
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    {quotePrefillNote && (
                      <div className="mb-4 p-3 bg-amber-500/10 border border-amber-500/30 rounded-lg text-xs text-amber-300 flex items-center justify-between">
                        <span>⚡ {quotePrefillNote}</span>
                        <button
                          type="button"
                          className="text-slate-400 hover:text-white"
                          onClick={() => setQuotePrefillNote("")}
                        >
                          ✕
                        </button>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="fl-form-control">
                        <label htmlFor="fl-name">Full Name *</label>
                        <input
                          id="fl-name"
                          type="text"
                          required
                          placeholder="e.g. David Martinez"
                          value={formName}
                          onChange={(e) => setFormName(e.target.value)}
                          className="fl-input"
                        />
                      </div>
                      <div className="fl-form-control">
                        <label htmlFor="fl-phone">Phone Number *</label>
                        <input
                          id="fl-phone"
                          type="tel"
                          required
                          placeholder="e.g. (555) 234-5678"
                          value={formPhone}
                          onChange={(e) => setFormPhone(e.target.value)}
                          className="fl-input"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="fl-form-control">
                        <label htmlFor="fl-email">Email Address *</label>
                        <input
                          id="fl-email"
                          type="email"
                          required
                          placeholder="e.g. david@company.com"
                          value={formEmail}
                          onChange={(e) => setFormEmail(e.target.value)}
                          className="fl-input"
                        />
                      </div>
                      <div className="fl-form-control">
                        <label htmlFor="fl-service">Service Required *</label>
                        <select
                          id="fl-service"
                          value={formService}
                          onChange={(e) => setFormService(e.target.value)}
                          className="fl-select"
                        >
                          <option value="Panel Upgrade (200A / 400A)">Panel Upgrade (200A / 400A)</option>
                          <option value="Commercial 3-Phase Power Distribution">Commercial 3-Phase Power</option>
                          <option value="Industrial Controls & PLC Automation">Industrial PLC & Automation</option>
                          <option value="Level 2 / DC Fast EV Charging Hub">EV Charging Hub / Fleet</option>
                          <option value="Whole-Home Rewire & Smart Subpanels">Whole-Home Rewire & Smart Panels</option>
                          <option value="Standby Generator & Automatic Transfer Switch">Generator + ATS System</option>
                          <option value="Emergency Diagnostics & Fault Locating">Emergency Diagnostics (24/7)</option>
                        </select>
                      </div>
                    </div>

                    <div className="fl-form-control">
                      <label htmlFor="fl-details">Project Scope & Details</label>
                      <textarea
                        id="fl-details"
                        rows={3}
                        placeholder="Describe your current panel size, electrical needs, timeline, or location..."
                        value={formDetails}
                        onChange={(e) => setFormDetails(e.target.value)}
                        className="fl-textarea"
                      />
                    </div>

                    {/* File Attachment Dropzone */}
                    <div className="fl-form-control">
                      <label>Attach Blueprints or Panel Photos (Optional)</label>
                      <div className="fl-dropzone">
                        <UploadCloud className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                        <p className="text-sm text-slate-300 font-medium">
                          Drag & drop drawings or photos here, or <span className="text-amber-400 underline">browse</span>
                        </p>
                        <p className="text-xs text-slate-500 mt-1">Accepts PDF, JPG, PNG, CAD up to 25MB</p>
                        <input type="file" className="hidden" />
                      </div>
                    </div>

                    <button type="submit" className="fl-btn fl-btn-primary fl-btn-lg w-full mt-2">
                      Submit Precision Quote Request
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. FAQ Accordion */}
      <section id="fl-faq" className="fl-section alt">
        <div className="fl-container">
          <div className="fl-section-header">
            <div className="fl-eyebrow">
              <Zap className="w-4 h-4" />
              Frequently Asked Questions
            </div>
            <h2 className="fl-section-title">Clear Answers to Electrical Questions</h2>
            <p className="fl-section-subtitle">
              Need technical clarity on permits, inspections, utility cut-offs, or power loads? Here are the facts.
            </p>
          </div>

          <div className="fl-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className={`fl-faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    type="button"
                    className="fl-faq-trigger"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className="w-5 h-5" />
                  </button>
                  {isOpen && <div className="fl-faq-content">{faq.a}</div>}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 12. High-Voltage Footer */}
      <footer className="fl-footer">
        <div className="fl-container">
          <div className="fl-footer-grid">
            <div className="fl-footer-col">
              <div className="fl-logo mb-4">
                <div className="fl-logo-icon">
                  <Zap className="w-5 h-5 fill-current" />
                </div>
                <div className="fl-logo-text">
                  ForgeLine<span>Electrical</span>
                </div>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-6 max-w-sm">
                Master Electrician Contracting & High-Voltage Engineering. Dedicated to absolute safety, flawless code compliance, and reliable 24/7 power systems.
              </p>
              <div className="flex items-center gap-3">
                <span className="fl-badge-pill">C-10 License #1094821</span>
                <span className="fl-badge-pill amber">OSHA-30 Safe</span>
              </div>
            </div>

            <div className="fl-footer-col">
              <h4>Core Services</h4>
              <ul className="fl-footer-links">
                <li><a href="#fl-services" onClick={(e) => scrollToSection(e, "fl-services")}>Residential Smart Panels</a></li>
                <li><a href="#fl-services" onClick={(e) => scrollToSection(e, "fl-services")}>Commercial 3-Phase Switchgear</a></li>
                <li><a href="#fl-services" onClick={(e) => scrollToSection(e, "fl-services")}>Industrial PLC & Automation</a></li>
                <li><a href="#fl-services" onClick={(e) => scrollToSection(e, "fl-services")}>EV Fleet Charging Depots</a></li>
                <li><a href="#fl-services" onClick={(e) => scrollToSection(e, "fl-services")}>Standby Generators & ATS</a></li>
              </ul>
            </div>

            <div className="fl-footer-col">
              <h4>Quick Links</h4>
              <ul className="fl-footer-links">
                <li><a href="#fl-estimator" onClick={(e) => scrollToSection(e, "fl-estimator")}>Ballpark Cost Estimator</a></li>
                <li><a href="#fl-projects" onClick={(e) => scrollToSection(e, "fl-projects")}>Completed Work Gallery</a></li>
                <li><a href="#fl-safety" onClick={(e) => scrollToSection(e, "fl-safety")}>Code & Safety Standards</a></li>
                <li><a href="#fl-territory" onClick={(e) => scrollToSection(e, "fl-territory")}>Regional Service Area</a></li>
                <li><a href="#fl-faq" onClick={(e) => scrollToSection(e, "fl-faq")}>Contractor FAQs</a></li>
              </ul>
            </div>

            <div className="fl-footer-col">
              <h4>Emergency & Headquarters</h4>
              <div className="flex flex-col gap-3 text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                  <span>ForgeLine Engineering Center<br />480 High-Voltage Way, Suite 200<br />Metro Industrial Center, USA</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>24/7 Hotline: <strong>(800) 555-8658</strong></span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>dispatch@forgelineelectric.com</span>
                </div>
              </div>
            </div>
          </div>

          <div className="fl-footer-bottom">
            <div>
              © {new Date().getFullYear()} ForgeLine Electrical Contracting Corp. All Rights Reserved.
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Safety Manual</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ForgeLineElectric;

const css = `
  /* ForgeLine Electrical - High-Voltage Modern Industrial Design System & Theme Engine */

  .fl-site {
    --fl-bg: #090e17;
    --fl-surface: #0f172a;
    --fl-surface-card: #141e33;
    --fl-surface-elevated: #1b2844;
    --fl-border: rgba(255, 255, 255, 0.08);
    --fl-border-focus: rgba(245, 158, 11, 0.45);
    --fl-amber: #f59e0b;
    --fl-amber-glow: rgba(245, 158, 11, 0.25);
    --fl-amber-light: #fbbf24;
    --fl-cyan: #06b6d4;
    --fl-cyan-glow: rgba(6, 182, 212, 0.2);
    --fl-blue: #3b82f6;
    --fl-emerald: #10b981;
    --fl-emerald-glow: rgba(16, 185, 129, 0.25);
    --fl-text-main: #f8fafc;
    --fl-text-muted: #94a3b8;
    --fl-text-dim: #64748b;
    
    background-color: var(--fl-bg);
    color: var(--fl-text-main);
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    overflow-x: clip;
    line-height: 1.6;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  .fl-site * {
    box-sizing: border-box;
  }

  .fl-site a {
    text-decoration: none;
    color: inherit;
  }

  /* Container */
  .fl-container {
    width: min(1380px, calc(100% - 48px));
    margin-inline: auto;
  }

  @media (max-width: 640px) {
    .fl-container {
      width: calc(100% - 32px);
    }
  }

  /* Animations */
  @keyframes flPulse {
    0%, 100% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.65;
      transform: scale(1.08);
    }
  }

  @keyframes flShimmer {
    0% {
      background-position: -200% 0;
    }
    100% {
      background-position: 200% 0;
    }
  }

  @keyframes flFloat {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-8px);
    }
  }

  @keyframes flGlow {
    0%, 100% {
      box-shadow: 0 0 15px var(--fl-amber-glow);
    }
    50% {
      box-shadow: 0 0 30px var(--fl-amber-glow), 0 0 10px rgba(245, 158, 11, 0.4);
    }
  }

  .fl-pulse-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: var(--fl-emerald);
    box-shadow: 0 0 10px var(--fl-emerald);
    animation: flPulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    display: inline-block;
  }

  .fl-pulse-dot.amber {
    background-color: var(--fl-amber);
    box-shadow: 0 0 10px var(--fl-amber);
  }

  .fl-floating-badge {
    animation: flFloat 6s ease-in-out infinite;
  }

  /* Top Emergency Bar */
  .fl-topbar {
    background: linear-gradient(90deg, #0b1322 0%, #16243d 50%, #0b1322 100%);
    border-bottom: 1px solid var(--fl-border);
    font-size: 0.8125rem;
    color: var(--fl-text-muted);
    padding: 8px 0;
    transition: background-color 0.25s ease, border-color 0.25s ease;
  }

  .fl-topbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 12px;
  }

  .fl-topbar-left {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .fl-badge-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 3px 10px;
    border-radius: 9999px;
    background: rgba(16, 185, 129, 0.12);
    border: 1px solid rgba(16, 185, 129, 0.3);
    color: #34d399;
    font-weight: 600;
    font-size: 0.75rem;
    letter-spacing: 0.02em;
  }

  .fl-badge-pill.amber {
    background: rgba(245, 158, 11, 0.12);
    border-color: rgba(245, 158, 11, 0.3);
    color: #fbbf24;
  }

  .fl-topbar-right {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .fl-topbar-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s ease;
  }

  .fl-topbar-link:hover {
    color: var(--fl-amber-light);
  }

  /* Header & Nav */
  .fl-header {
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(9, 14, 23, 0.88);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--fl-border);
    transition: all 0.3s ease;
  }

  .fl-header.scrolled {
    background: rgba(9, 14, 23, 0.96);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  }

  .fl-nav-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 80px;
  }

  .fl-logo {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .fl-logo-icon {
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: linear-gradient(135deg, var(--fl-amber) 0%, #d97706 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #090e17;
    box-shadow: 0 4px 18px var(--fl-amber-glow);
    transition: background 0.25s ease, box-shadow 0.25s ease;
  }

  .fl-logo-text {
    font-size: 1.35rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #ffffff;
  }

  .fl-logo-text span {
    color: var(--fl-amber);
    font-weight: 400;
    transition: color 0.25s ease;
  }

  .fl-nav-links {
    display: flex;
    align-items: center;
    gap: 24px;
  }

  .fl-nav-item {
    color: var(--fl-text-muted);
    font-size: 0.9375rem;
    font-weight: 600;
    transition: all 0.2s ease;
    position: relative;
    padding: 8px 0;
  }

  .fl-nav-item:hover,
  .fl-nav-item.active {
    color: #ffffff;
  }

  .fl-nav-item.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, var(--fl-amber), var(--fl-cyan));
    border-radius: 2px;
  }

  .fl-nav-actions {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  /* Buttons */
  .fl-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-weight: 700;
    border-radius: 8px;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
    cursor: pointer;
    border: none;
    font-size: 0.9375rem;
    padding: 12px 24px;
    line-height: 1;
    white-space: nowrap;
  }

  .fl-btn-primary {
    background: linear-gradient(135deg, var(--fl-amber) 0%, #d97706 100%);
    color: #090e17;
    box-shadow: 0 4px 16px var(--fl-amber-glow);
  }

  .fl-btn-primary:hover {
    background: linear-gradient(135deg, var(--fl-amber-light) 0%, var(--fl-amber) 100%);
    transform: translateY(-2px);
    box-shadow: 0 8px 24px var(--fl-amber-glow);
  }

  .fl-btn-secondary {
    background: rgba(255, 255, 255, 0.06);
    color: #ffffff;
    border: 1px solid var(--fl-border);
    backdrop-filter: blur(10px);
  }

  .fl-btn-secondary:hover {
    background: rgba(255, 255, 255, 0.12);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  .fl-btn-emergency {
    background: linear-gradient(135deg, #ef4444 0%, #b91c1c 100%);
    color: #ffffff;
    box-shadow: 0 4px 16px rgba(239, 68, 68, 0.35);
  }

  .fl-btn-emergency:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(239, 68, 68, 0.5);
  }

  .fl-btn-sm {
    padding: 8px 16px;
    font-size: 0.8125rem;
    border-radius: 6px;
  }

  .fl-btn-lg {
    padding: 16px 32px;
    font-size: 1.0625rem;
    border-radius: 10px;
  }

  .fl-hamburger {
    display: none;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border-radius: 10px;
    background: rgba(245, 158, 11, 0.1);
    border: 1px solid rgba(245, 158, 11, 0.25);
    color: #ffffff;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease;
  }

  .fl-hamburger:hover {
    background: rgba(245, 158, 11, 0.2);
    border-color: var(--fl-amber);
  }

  /* Mobile Drawer */
  .fl-mobile-backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(4px);
    z-index: 98;
    animation: flFadeIn 0.22s ease;
  }

  @keyframes flFadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .fl-mobile-drawer {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(380px, 90vw);
    background: #0d1524;
    border-left: 1px solid rgba(245, 158, 11, 0.2);
    z-index: 99;
    display: flex;
    flex-direction: column;
    transform: translateX(100%);
    transition: transform 0.32s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.25s ease;
  }

  .fl-mobile-drawer.is-open {
    transform: translateX(0);
    box-shadow: -24px 0 70px rgba(0, 0, 0, 0.8);
  }

  .fl-mobile-drawer-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 24px;
    border-bottom: 1px solid var(--fl-border);
    flex-shrink: 0;
  }

  .fl-drawer-close {
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 8px;
    background: rgba(255, 255, 255, 0.06);
    border: 1px solid var(--fl-border);
    color: #ffffff;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease;
  }

  .fl-drawer-close:hover {
    background: rgba(245, 158, 11, 0.15);
    border-color: rgba(245, 158, 11, 0.4);
  }

  .fl-mobile-nav {
    flex: 1;
    overflow-y: auto;
    padding: 12px 0;
    display: flex;
    flex-direction: column;
  }

  .fl-mobile-nav-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 24px;
    font-size: 1rem;
    font-weight: 700;
    color: var(--fl-text-muted);
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: all 0.18s ease;
  }

  .fl-mobile-nav-link svg {
    opacity: 0.3;
    transition: opacity 0.18s ease, transform 0.18s ease;
  }

  .fl-mobile-nav-link:hover {
    color: #ffffff;
    background: rgba(255, 255, 255, 0.04);
  }

  .fl-mobile-nav-link.active {
    color: var(--fl-amber-light);
    border-left: 3px solid var(--fl-amber);
    padding-left: 21px;
    background: rgba(245, 158, 11, 0.06);
  }

  .fl-mobile-nav-link:hover svg,
  .fl-mobile-nav-link.active svg {
    opacity: 1;
    transform: translateX(3px);
  }

  .fl-mobile-drawer-footer {
    padding: 24px;
    border-top: 1px solid var(--fl-border);
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-shrink: 0;
  }

  /* Hero Section */
  .fl-hero-section {
    position: relative;
    padding: 80px 0 100px;
    overflow: hidden;
    background: radial-gradient(circle at 75% 20%, rgba(245, 158, 11, 0.08) 0%, transparent 45%),
                radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 40%),
                #090e17;
    transition: background 0.3s ease;
  }

  .fl-hero-grid-bg {
    position: absolute;
    inset: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0.025) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255, 255, 255, 0.025) 1px, transparent 1px);
    background-size: 48px 48px;
    pointer-events: none;
  }

  .fl-hero-layout {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 56px;
    align-items: center;
    position: relative;
    z-index: 1;
  }

  .fl-hero-tag {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 14px;
    border-radius: 9999px;
    background: rgba(245, 158, 11, 0.1);
    border: 1px solid rgba(245, 158, 11, 0.25);
    color: var(--fl-amber-light);
    font-size: 0.8125rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 24px;
  }

  .fl-hero-title {
    font-size: clamp(2.5rem, 4.2vw, 4rem);
    font-weight: 900;
    line-height: 1.08;
    letter-spacing: -0.035em;
    color: #ffffff;
    margin-bottom: 24px;
  }

  .fl-hero-title .highlight-amber {
    color: var(--fl-amber);
    background: linear-gradient(135deg, var(--fl-amber-light) 0%, var(--fl-amber) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .fl-hero-title .highlight-cyan {
    color: var(--fl-cyan);
    background: linear-gradient(135deg, #38bdf8 0%, var(--fl-cyan) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .fl-hero-desc {
    font-size: 1.125rem;
    color: var(--fl-text-muted);
    max-width: 580px;
    margin-bottom: 36px;
    line-height: 1.7;
  }

  .fl-hero-ctas {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
    margin-bottom: 48px;
  }

  .fl-hero-stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding-top: 36px;
    border-top: 1px solid var(--fl-border);
  }

  .fl-stat-item h3 {
    font-size: 1.75rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 4px;
    letter-spacing: -0.02em;
  }

  .fl-stat-item h3 span {
    color: var(--fl-amber);
  }

  .fl-stat-item p {
    font-size: 0.8125rem;
    color: var(--fl-text-dim);
    font-weight: 500;
  }

  .fl-hero-media {
    position: relative;
  }

  .fl-hero-image-wrap {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid rgba(255, 255, 255, 0.12);
    box-shadow: 0 25px 60px -15px rgba(0, 0, 0, 0.7),
                0 0 35px var(--fl-amber-glow);
  }

  .fl-hero-image-wrap img {
    width: 100%;
    height: 520px;
    object-fit: cover;
    display: block;
    transition: transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .fl-hero-media:hover .fl-hero-image-wrap img {
    transform: scale(1.03);
  }

  .fl-hero-image-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, rgba(9, 14, 23, 0.1) 0%, rgba(9, 14, 23, 0.8) 100%);
  }

  .fl-hero-live-badge {
    position: absolute;
    top: 24px;
    right: 24px;
    background: rgba(9, 14, 23, 0.85);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 10px 16px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
  }

  .fl-hero-live-badge .text {
    font-size: 0.8125rem;
    font-weight: 700;
    color: #ffffff;
  }

  .fl-hero-floating-card {
    position: absolute;
    bottom: -24px;
    left: -24px;
    background: rgba(15, 23, 42, 0.95);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(245, 158, 11, 0.3);
    padding: 20px 24px;
    border-radius: 16px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6),
                0 0 20px var(--fl-amber-glow);
    display: flex;
    align-items: center;
    gap: 16px;
    max-width: 320px;
  }

  .fl-floating-card-icon {
    width: 48px;
    height: 48px;
    border-radius: 12px;
    background: rgba(245, 158, 11, 0.15);
    color: var(--fl-amber);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  /* Sections */
  .fl-section {
    padding: 100px 0;
    position: relative;
    transition: background-color 0.25s ease;
  }

  .fl-section.alt {
    background-color: var(--fl-surface);
    border-top: 1px solid var(--fl-border);
    border-bottom: 1px solid var(--fl-border);
  }

  .fl-section-header {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 64px;
  }

  .fl-section-header.left-aligned {
    text-align: left;
    margin: 0 0 48px 0;
  }

  .fl-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 0.8125rem;
    font-weight: 800;
    color: var(--fl-amber);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 16px;
  }

  .fl-section-title {
    font-size: clamp(2rem, 3.2vw, 2.75rem);
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #ffffff;
    margin-bottom: 18px;
    line-height: 1.15;
  }

  .fl-section-subtitle {
    font-size: 1.0625rem;
    color: var(--fl-text-muted);
    line-height: 1.7;
  }

  /* Estimator */
  .fl-estimator-box {
    background: linear-gradient(145deg, #121c2e 0%, #0b1320 100%);
    border: 1px solid rgba(245, 158, 11, 0.25);
    border-radius: 24px;
    padding: 44px;
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.5),
                0 0 30px var(--fl-amber-glow);
    transition: all 0.25s ease;
  }

  .fl-estimator-grid {
    display: grid;
    grid-template-columns: 1.25fr 0.75fr;
    gap: 48px;
    align-items: center;
  }

  .fl-estimator-options {
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .fl-option-group-label {
    font-size: 0.875rem;
    font-weight: 700;
    color: var(--fl-text-main);
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin-bottom: 12px;
  }

  .fl-pill-selectors {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 12px;
  }

  .fl-pill-btn {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--fl-border);
    color: var(--fl-text-muted);
    padding: 14px 16px;
    border-radius: 12px;
    font-size: 0.875rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
    display: flex;
    flex-direction: column;
    gap: 4px;
    text-align: left;
  }

  .fl-pill-btn:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
    border-color: rgba(255, 255, 255, 0.2);
  }

  .fl-pill-btn.active {
    background: rgba(245, 158, 11, 0.12);
    border-color: var(--fl-amber);
    color: #ffffff;
    box-shadow: 0 0 15px var(--fl-amber-glow);
  }

  .fl-pill-btn .sub {
    font-size: 0.75rem;
    color: var(--fl-text-dim);
    font-weight: 400;
  }

  .fl-pill-btn.active .sub {
    color: var(--fl-amber-light);
  }

  .fl-estimator-result-card {
    background: rgba(9, 14, 23, 0.85);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 20px;
    padding: 36px;
    text-align: center;
    position: relative;
    overflow: hidden;
    transition: all 0.25s ease;
  }

  .fl-estimator-result-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, var(--fl-amber), var(--fl-cyan));
  }

  .fl-estimate-price-range {
    font-size: 2.75rem;
    font-weight: 900;
    color: var(--fl-amber-light);
    margin: 16px 0 8px;
    letter-spacing: -0.03em;
  }

  .fl-estimate-details-list {
    text-align: left;
    margin: 24px 0 28px;
    padding: 16px 0;
    border-top: 1px solid var(--fl-border);
    border-bottom: 1px solid var(--fl-border);
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 0.875rem;
    color: var(--fl-text-muted);
  }

  .fl-estimate-details-list li {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .fl-estimate-details-list li svg {
    color: var(--fl-emerald);
    flex-shrink: 0;
  }

  /* Services Grid */
  .fl-services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .fl-service-card {
    background: var(--fl-surface-card);
    border: 1px solid var(--fl-border);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
  }

  .fl-service-card:hover {
    transform: translateY(-6px);
    border-color: rgba(245, 158, 11, 0.4);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4),
                0 0 25px var(--fl-amber-glow);
  }

  .fl-service-thumb {
    position: relative;
    height: 220px;
    overflow: hidden;
  }

  .fl-service-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }

  .fl-service-card:hover .fl-service-thumb img {
    transform: scale(1.06);
  }

  .fl-service-badge {
    position: absolute;
    top: 16px;
    left: 16px;
    background: rgba(9, 14, 23, 0.85);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 4px 12px;
    border-radius: 8px;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--fl-amber-light);
    display: flex;
    align-items: center;
    gap: 6px;
  }

  .fl-service-body {
    padding: 28px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .fl-service-body h3 {
    font-size: 1.35rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 12px;
    letter-spacing: -0.02em;
  }

  .fl-service-body p {
    color: var(--fl-text-muted);
    font-size: 0.9375rem;
    line-height: 1.6;
    margin-bottom: 20px;
  }

  .fl-service-features {
    list-style: none;
    padding: 0;
    margin: 0 0 24px 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 0.875rem;
    color: var(--fl-text-muted);
  }

  .fl-service-features li {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .fl-service-features li svg {
    color: var(--fl-amber);
    width: 16px;
    height: 16px;
    flex-shrink: 0;
  }

  .fl-service-link {
    margin-top: auto;
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: var(--fl-amber-light);
    font-weight: 700;
    font-size: 0.875rem;
    transition: gap 0.2s ease;
  }

  .fl-service-link:hover {
    gap: 12px;
  }

  /* Projects Tabs */
  .fl-project-tabs {
    display: flex;
    justify-content: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 48px;
  }

  .fl-tab-btn {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid var(--fl-border);
    color: var(--fl-text-muted);
    padding: 10px 22px;
    border-radius: 9999px;
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .fl-tab-btn:hover {
    background: rgba(255, 255, 255, 0.08);
    color: #ffffff;
  }

  .fl-tab-btn.active {
    background: var(--fl-amber);
    border-color: var(--fl-amber);
    color: #090e17;
    box-shadow: 0 0 20px var(--fl-amber-glow);
  }

  .fl-projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .fl-project-card {
    background: var(--fl-surface-card);
    border: 1px solid var(--fl-border);
    border-radius: 20px;
    overflow: hidden;
    transition: all 0.35s ease;
    display: flex;
    flex-direction: column;
  }

  .fl-project-card:hover {
    transform: translateY(-6px);
    border-color: rgba(245, 158, 11, 0.4);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5);
  }

  .fl-project-media {
    position: relative;
    height: 280px;
    overflow: hidden;
  }

  .fl-project-media img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .fl-project-card:hover .fl-project-media img {
    transform: scale(1.05);
  }

  .fl-project-tag {
    position: absolute;
    top: 16px;
    left: 16px;
    background: rgba(9, 14, 23, 0.85);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.15);
    padding: 4px 12px;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 700;
    color: #ffffff;
  }

  .fl-project-specs-overlay {
    position: absolute;
    bottom: 0;
    inset-inline: 0;
    background: linear-gradient(0deg, rgba(9, 14, 23, 0.95) 0%, transparent 100%);
    padding: 24px 20px 16px;
    display: flex;
    gap: 12px;
  }

  .fl-spec-chip {
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(8px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 3px 8px;
    border-radius: 4px;
    font-size: 0.6875rem;
    font-weight: 700;
    color: #f8fafc;
  }

  .fl-project-body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .fl-project-body h3 {
    font-size: 1.25rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 8px;
  }

  .fl-project-body p {
    font-size: 0.875rem;
    color: var(--fl-text-muted);
    line-height: 1.6;
    margin-bottom: 16px;
  }

  .fl-project-footer {
    margin-top: auto;
    padding-top: 16px;
    border-top: 1px solid var(--fl-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.8125rem;
    color: var(--fl-text-dim);
  }

  .fl-project-footer strong {
    color: #ffffff;
  }

  /* Certifications */
  .fl-certs-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  .fl-cert-card {
    background: var(--fl-surface-card);
    border: 1px solid var(--fl-border);
    border-radius: 16px;
    padding: 32px 24px;
    text-align: center;
    transition: all 0.3s ease;
  }

  .fl-cert-card:hover {
    border-color: rgba(245, 158, 11, 0.4);
    transform: translateY(-4px);
    background: var(--fl-surface-elevated);
  }

  .fl-cert-icon-wrap {
    width: 64px;
    height: 64px;
    border-radius: 16px;
    background: rgba(245, 158, 11, 0.1);
    border: 1px solid rgba(245, 158, 11, 0.25);
    color: var(--fl-amber);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 20px;
  }

  .fl-cert-card h3 {
    font-size: 1.125rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 8px;
  }

  .fl-cert-card p {
    font-size: 0.8125rem;
    color: var(--fl-text-muted);
    line-height: 1.5;
  }

  /* Territory */
  .fl-territory-layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px;
    align-items: center;
  }

  .fl-territory-map-card {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    border: 1px solid var(--fl-border);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.6);
  }

  .fl-territory-map-card img {
    width: 100%;
    height: 420px;
    object-fit: cover;
    display: block;
  }

  .fl-zip-checker {
    background: var(--fl-surface-card);
    border: 1px solid var(--fl-border);
    border-radius: 16px;
    padding: 32px;
    margin-top: 32px;
  }

  .fl-zip-input-group {
    display: flex;
    gap: 12px;
    margin-top: 16px;
  }

  .fl-zip-input {
    flex-grow: 1;
    background: rgba(9, 14, 23, 0.8);
    border: 1px solid var(--fl-border);
    border-radius: 8px;
    padding: 14px 18px;
    color: #ffffff;
    font-size: 0.9375rem;
    outline: none;
    transition: border-color 0.2s ease;
  }

  .fl-zip-input:focus {
    border-color: var(--fl-amber);
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
  }

  .fl-zip-result {
    margin-top: 16px;
    padding: 12px 16px;
    border-radius: 8px;
    font-size: 0.875rem;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .fl-zip-result.success {
    background: rgba(16, 185, 129, 0.12);
    border: 1px solid rgba(16, 185, 129, 0.3);
    color: #34d399;
  }

  .fl-zip-result.error {
    background: rgba(239, 68, 68, 0.12);
    border: 1px solid rgba(239, 68, 68, 0.3);
    color: #f87171;
  }

  /* Reviews */
  .fl-reviews-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
  }

  .fl-review-card {
    background: var(--fl-surface-card);
    border: 1px solid var(--fl-border);
    border-radius: 20px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
  }

  .fl-review-stars {
    display: flex;
    gap: 4px;
    color: #fbbf24;
    margin-bottom: 16px;
  }

  .fl-review-text {
    font-size: 0.9375rem;
    color: var(--fl-text-main);
    line-height: 1.7;
    margin-bottom: 24px;
    font-style: italic;
  }

  .fl-reviewer-info {
    display: flex;
    align-items: center;
    gap: 14px;
    border-top: 1px solid var(--fl-border);
    padding-top: 16px;
  }

  .fl-reviewer-avatar {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: var(--fl-amber);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .fl-reviewer-details h4 {
    font-size: 0.9375rem;
    font-weight: 700;
    color: #ffffff;
  }

  .fl-reviewer-details p {
    font-size: 0.75rem;
    color: var(--fl-text-dim);
  }

  /* Quote Wizard */
  .fl-quote-wrapper {
    background: linear-gradient(145deg, #101929 0%, #0a0f1a 100%);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 24px;
    padding: 48px;
    box-shadow: 0 30px 70px rgba(0, 0, 0, 0.6);
  }

  .fl-quote-grid {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 56px;
  }

  .fl-form-control {
    display: flex;
    flex-direction: column;
    gap: 6px;
    margin-bottom: 20px;
  }

  .fl-form-control label {
    font-size: 0.8125rem;
    font-weight: 700;
    color: var(--fl-text-main);
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  .fl-input,
  .fl-select,
  .fl-textarea {
    background: rgba(9, 14, 23, 0.7);
    border: 1px solid var(--fl-border);
    border-radius: 8px;
    padding: 12px 16px;
    color: #ffffff;
    font-size: 0.9375rem;
    font-family: inherit;
    outline: none;
    transition: all 0.2s ease;
  }

  .fl-input:focus,
  .fl-select:focus,
  .fl-textarea:focus {
    border-color: var(--fl-amber);
    background: rgba(9, 14, 23, 0.95);
    box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.15);
  }

  .fl-dropzone {
    border: 2px dashed rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 24px;
    text-align: center;
    cursor: pointer;
    transition: all 0.2s ease;
    background: rgba(255, 255, 255, 0.02);
  }

  .fl-dropzone:hover {
    border-color: var(--fl-amber);
    background: rgba(245, 158, 11, 0.04);
  }

  /* FAQ */
  .fl-faq-list {
    max-width: 860px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .fl-faq-item {
    background: var(--fl-surface-card);
    border: 1px solid var(--fl-border);
    border-radius: 14px;
    overflow: hidden;
    transition: all 0.2s ease;
  }

  .fl-faq-item.open {
    border-color: rgba(245, 158, 11, 0.35);
    background: var(--fl-surface-elevated);
  }

  .fl-faq-trigger {
    width: 100%;
    padding: 20px 24px;
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

  .fl-faq-trigger svg {
    color: var(--fl-amber);
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  .fl-faq-item.open .fl-faq-trigger svg {
    transform: rotate(180deg);
  }

  .fl-faq-content {
    padding: 0 24px 24px;
    color: var(--fl-text-muted);
    font-size: 0.9375rem;
    line-height: 1.7;
  }

  /* Footer */
  .fl-footer {
    background: #05080e;
    border-top: 1px solid var(--fl-border);
    padding: 80px 0 36px;
    color: var(--fl-text-muted);
    transition: background-color 0.25s ease;
  }

  .fl-footer-grid {
    display: grid;
    grid-template-columns: 1.4fr 0.9fr 0.9fr 1.2fr;
    gap: 48px;
    margin-bottom: 64px;
  }

  .fl-footer-col h4 {
    font-size: 0.9375rem;
    font-weight: 800;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 20px;
  }

  .fl-footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 0.875rem;
  }

  .fl-footer-links a {
    transition: color 0.2s ease;
  }

  .fl-footer-links a:hover {
    color: var(--fl-amber-light);
  }

  .fl-footer-bottom {
    padding-top: 32px;
    border-top: 1px solid var(--fl-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 16px;
    font-size: 0.8125rem;
    color: var(--fl-text-dim);
  }

  /* ==========================================================================
     THEME SELECTOR & PRESETS SUPPORT
     ========================================================================== */
  :root[data-theme-active="true"] .fl-site,
  :root[data-theme-preset]:not([data-theme-preset="original"]) .fl-site {
    --fl-amber:       var(--theme-accent-primary, #f59e0b);
    --fl-amber-light: var(--theme-accent-primary-hover, #fbbf24);
    --fl-amber-glow:  var(--theme-accent-glow, rgba(245, 158, 11, 0.25));
    --fl-cyan:        var(--theme-accent-secondary, #06b6d4);
    --fl-cyan-glow:   var(--theme-accent-glow, rgba(6, 182, 212, 0.2));
  }

  /* ==========================================================================
     DARK MOOD SPECIFICS
     ========================================================================== */
  html.dark .fl-site,
  body.dark .fl-site,
  :root.dark .fl-site,
  [data-theme-mood="dark"] .fl-site,
  :root[data-theme-mood="dark"] .fl-site,
  :root[data-theme-active="true"][data-theme-mood="dark"] .fl-site {
    --fl-bg:               var(--theme-bg-base, #090e17);
    --fl-surface:          var(--theme-bg-surface, #0f172a);
    --fl-surface-card:     var(--theme-bg-card, #141e33);
    --fl-surface-elevated: var(--theme-bg-card-hover, #1b2844);
    --fl-border:           var(--theme-border, rgba(255, 255, 255, 0.08));
    --fl-text-main:        var(--theme-text-primary, #f8fafc);
    --fl-text-muted:       var(--theme-text-muted, #94a3b8);
    --fl-text-dim:         var(--theme-text-secondary, #64748b);
    background-color: var(--fl-bg);
    color: var(--fl-text-main);
  }

  /* ==========================================================================
     LIGHT MOOD SPECIFICS
     ========================================================================== */
  html.light .fl-site,
  body.light .fl-site,
  :root.light .fl-site,
  [data-theme-mood="light"] .fl-site,
  :root[data-theme-mood="light"] .fl-site,
  :root[data-theme-active="true"][data-theme-mood="light"] .fl-site {
    --fl-bg:               var(--theme-bg-base, #f8fafc);
    --fl-surface:          var(--theme-bg-surface, #ffffff);
    --fl-surface-card:     var(--theme-bg-card, #ffffff);
    --fl-surface-elevated: var(--theme-bg-card-hover, #f1f5f9);
    --fl-border:           var(--theme-border, #e2e8f0);
    --fl-border-focus:     rgba(245, 158, 11, 0.5);
    --fl-text-main:        var(--theme-text-primary, #0f172a);
    --fl-text-muted:       var(--theme-text-muted, #475569);
    --fl-text-dim:         var(--theme-text-secondary, #64748b);
    background-color: var(--fl-bg);
    color: var(--fl-text-main);
  }

  /* Light Mood Overrides */
  html.light .fl-site .fl-topbar,
  [data-theme-mood="light"] .fl-site .fl-topbar {
    background: #f1f5f9;
    border-bottom-color: #e2e8f0;
    color: #475569;
  }
  html.light .fl-site .fl-topbar-link,
  [data-theme-mood="light"] .fl-site .fl-topbar-link {
    color: #0f172a;
  }
  html.light .fl-site .fl-header,
  [data-theme-mood="light"] .fl-site .fl-header {
    background: rgba(255, 255, 255, 0.94);
    border-bottom-color: #e2e8f0;
  }
  html.light .fl-site .fl-header.scrolled,
  [data-theme-mood="light"] .fl-site .fl-header.scrolled {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }
  html.light .fl-site .fl-logo-text,
  [data-theme-mood="light"] .fl-site .fl-logo-text {
    color: #0f172a;
  }
  html.light .fl-site .fl-nav-item,
  [data-theme-mood="light"] .fl-site .fl-nav-item {
    color: #475569;
  }
  html.light .fl-site .fl-nav-item:hover,
  [data-theme-mood="light"] .fl-site .fl-nav-item:hover,
  html.light .fl-site .fl-nav-item.active,
  [data-theme-mood="light"] .fl-site .fl-nav-item.active {
    color: #0f172a;
  }
  html.light .fl-site .fl-hamburger,
  [data-theme-mood="light"] .fl-site .fl-hamburger {
    background: #f1f5f9;
    border-color: #cbd5e1;
    color: #0f172a;
  }

  html.light .fl-site .fl-hero-section,
  [data-theme-mood="light"] .fl-site .fl-hero-section {
    background: radial-gradient(circle at 75% 20%, rgba(245, 158, 11, 0.08) 0%, transparent 45%),
                radial-gradient(circle at 20% 80%, rgba(6, 182, 212, 0.06) 0%, transparent 40%),
                #f8fafc;
  }
  html.light .fl-site .fl-hero-grid-bg,
  [data-theme-mood="light"] .fl-site .fl-hero-grid-bg {
    background-image: linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px);
  }
  html.light .fl-site .fl-hero-title,
  [data-theme-mood="light"] .fl-site .fl-hero-title {
    color: #0f172a;
  }
  html.light .fl-site .fl-hero-desc,
  [data-theme-mood="light"] .fl-site .fl-hero-desc {
    color: #475569;
  }
  html.light .fl-site .fl-stat-item h3,
  [data-theme-mood="light"] .fl-site .fl-stat-item h3 {
    color: #0f172a;
  }
  html.light .fl-site .fl-stat-item p,
  [data-theme-mood="light"] .fl-site .fl-stat-item p {
    color: #64748b;
  }
  html.light .fl-site .fl-hero-floating-card,
  [data-theme-mood="light"] .fl-site .fl-hero-floating-card {
    background: rgba(255, 255, 255, 0.95);
    border-color: rgba(245, 158, 11, 0.35);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
    color: #0f172a;
  }
  html.light .fl-site .fl-hero-floating-card h4,
  [data-theme-mood="light"] .fl-site .fl-hero-floating-card h4 {
    color: #0f172a;
  }

  html.light .fl-site .fl-estimator-box,
  [data-theme-mood="light"] .fl-site .fl-estimator-box {
    background: #ffffff;
    border-color: #e2e8f0;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
  }
  html.light .fl-site .fl-option-group-label,
  [data-theme-mood="light"] .fl-site .fl-option-group-label {
    color: #0f172a;
  }
  html.light .fl-site .fl-pill-btn,
  [data-theme-mood="light"] .fl-site .fl-pill-btn {
    background: #f1f5f9;
    border-color: #e2e8f0;
    color: #475569;
  }
  html.light .fl-site .fl-pill-btn:hover,
  [data-theme-mood="light"] .fl-site .fl-pill-btn:hover {
    background: #e2e8f0;
    color: #0f172a;
  }
  html.light .fl-site .fl-pill-btn.active,
  [data-theme-mood="light"] .fl-site .fl-pill-btn.active {
    background: rgba(245, 158, 11, 0.12);
    border-color: var(--fl-amber);
    color: #0f172a;
  }
  html.light .fl-site .fl-estimator-result-card,
  [data-theme-mood="light"] .fl-site .fl-estimator-result-card {
    background: #f8fafc;
    border-color: #e2e8f0;
  }
  html.light .fl-site .fl-estimate-details-list,
  [data-theme-mood="light"] .fl-site .fl-estimate-details-list {
    color: #475569;
    border-color: #e2e8f0;
  }

  html.light .fl-site .fl-section-title,
  [data-theme-mood="light"] .fl-site .fl-section-title {
    color: #0f172a;
  }
  html.light .fl-site .fl-section-subtitle,
  [data-theme-mood="light"] .fl-site .fl-section-subtitle {
    color: #475569;
  }
  html.light .fl-site .fl-service-card,
  [data-theme-mood="light"] .fl-site .fl-service-card {
    background: #ffffff;
    border-color: #e2e8f0;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  }
  html.light .fl-site .fl-service-body h3,
  [data-theme-mood="light"] .fl-site .fl-service-body h3 {
    color: #0f172a;
  }
  html.light .fl-site .fl-service-body p,
  [data-theme-mood="light"] .fl-site .fl-service-body p {
    color: #475569;
  }
  html.light .fl-site .fl-service-features,
  [data-theme-mood="light"] .fl-site .fl-service-features {
    color: #475569;
  }

  html.light .fl-site .fl-tab-btn,
  [data-theme-mood="light"] .fl-site .fl-tab-btn {
    background: #f1f5f9;
    border-color: #e2e8f0;
    color: #475569;
  }
  html.light .fl-site .fl-tab-btn:hover,
  [data-theme-mood="light"] .fl-site .fl-tab-btn:hover {
    background: #e2e8f0;
    color: #0f172a;
  }
  html.light .fl-site .fl-tab-btn.active,
  [data-theme-mood="light"] .fl-site .fl-tab-btn.active {
    background: var(--fl-amber);
    color: #090e17;
  }
  html.light .fl-site .fl-project-card,
  [data-theme-mood="light"] .fl-site .fl-project-card {
    background: #ffffff;
    border-color: #e2e8f0;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  }
  html.light .fl-site .fl-project-body h3,
  [data-theme-mood="light"] .fl-site .fl-project-body h3 {
    color: #0f172a;
  }
  html.light .fl-site .fl-project-body p,
  [data-theme-mood="light"] .fl-site .fl-project-body p {
    color: #475569;
  }
  html.light .fl-site .fl-project-footer,
  [data-theme-mood="light"] .fl-site .fl-project-footer {
    border-top-color: #e2e8f0;
    color: #64748b;
  }
  html.light .fl-site .fl-project-footer strong,
  [data-theme-mood="light"] .fl-site .fl-project-footer strong {
    color: #0f172a;
  }

  html.light .fl-site .fl-cert-card,
  [data-theme-mood="light"] .fl-site .fl-cert-card {
    background: #ffffff;
    border-color: #e2e8f0;
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.04);
  }
  html.light .fl-site .fl-cert-card h3,
  [data-theme-mood="light"] .fl-site .fl-cert-card h3 {
    color: #0f172a;
  }
  html.light .fl-site .fl-cert-card p,
  [data-theme-mood="light"] .fl-site .fl-cert-card p {
    color: #475569;
  }

  html.light .fl-site .fl-territory-map-card,
  [data-theme-mood="light"] .fl-site .fl-territory-map-card {
    border-color: #e2e8f0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }
  html.light .fl-site .fl-zip-checker,
  [data-theme-mood="light"] .fl-site .fl-zip-checker {
    background: #ffffff;
    border-color: #e2e8f0;
  }
  html.light .fl-site .fl-zip-input,
  [data-theme-mood="light"] .fl-site .fl-zip-input {
    background: #f8fafc;
    border-color: #cbd5e1;
    color: #0f172a;
  }

  html.light .fl-site .fl-review-card,
  [data-theme-mood="light"] .fl-site .fl-review-card {
    background: #ffffff;
    border-color: #e2e8f0;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  }
  html.light .fl-site .fl-review-text,
  [data-theme-mood="light"] .fl-site .fl-review-text {
    color: #1e293b;
  }
  html.light .fl-site .fl-reviewer-info,
  [data-theme-mood="light"] .fl-site .fl-reviewer-info {
    border-top-color: #e2e8f0;
  }
  html.light .fl-site .fl-reviewer-details h4,
  [data-theme-mood="light"] .fl-site .fl-reviewer-details h4 {
    color: #0f172a;
  }
  html.light .fl-site .fl-reviewer-avatar,
  [data-theme-mood="light"] .fl-site .fl-reviewer-avatar {
    background: #e2e8f0;
    border-color: #cbd5e1;
    color: var(--fl-amber);
  }

  html.light .fl-site .fl-quote-wrapper,
  [data-theme-mood="light"] .fl-site .fl-quote-wrapper {
    background: #ffffff;
    border-color: #e2e8f0;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.07);
  }
  html.light .fl-site .fl-form-control label,
  [data-theme-mood="light"] .fl-site .fl-form-control label {
    color: #0f172a;
  }
  html.light .fl-site .fl-input,
  [data-theme-mood="light"] .fl-site .fl-input,
  html.light .fl-site .fl-select,
  [data-theme-mood="light"] .fl-site .fl-select,
  html.light .fl-site .fl-textarea,
  [data-theme-mood="light"] .fl-site .fl-textarea {
    background: #f8fafc;
    border-color: #cbd5e1;
    color: #0f172a;
  }
  html.light .fl-site .fl-select option,
  [data-theme-mood="light"] .fl-site .fl-select option {
    background: #ffffff;
    color: #0f172a;
  }
  html.light .fl-site .fl-dropzone,
  [data-theme-mood="light"] .fl-site .fl-dropzone {
    background: #f8fafc;
    border-color: #cbd5e1;
    color: #475569;
  }

  html.light .fl-site .fl-faq-item,
  [data-theme-mood="light"] .fl-site .fl-faq-item {
    background: #ffffff;
    border-color: #e2e8f0;
  }
  html.light .fl-site .fl-faq-item.open,
  [data-theme-mood="light"] .fl-site .fl-faq-item.open {
    background: #f8fafc;
    border-color: rgba(245, 158, 11, 0.4);
  }
  html.light .fl-site .fl-faq-trigger,
  [data-theme-mood="light"] .fl-site .fl-faq-trigger {
    color: #0f172a;
  }
  html.light .fl-site .fl-faq-content,
  [data-theme-mood="light"] .fl-site .fl-faq-content {
    color: #475569;
  }

  html.light .fl-mobile-drawer,
  [data-theme-mood="light"] .fl-mobile-drawer {
    background: #ffffff;
    border-left-color: #e2e8f0;
    color: #0f172a;
  }
  html.light .fl-mobile-drawer-header,
  [data-theme-mood="light"] .fl-mobile-drawer-header {
    border-bottom-color: #e2e8f0;
  }
  html.light .fl-mobile-nav-link,
  [data-theme-mood="light"] .fl-mobile-nav-link {
    color: #475569;
    border-bottom-color: #f1f5f9;
  }
  html.light .fl-mobile-nav-link:hover,
  [data-theme-mood="light"] .fl-mobile-nav-link:hover {
    color: #0f172a;
    background: #f8fafc;
  }
  html.light .fl-mobile-nav-link.active,
  [data-theme-mood="light"] .fl-mobile-nav-link.active {
    color: var(--fl-amber);
    background: rgba(245, 158, 11, 0.08);
  }
  html.light .fl-drawer-close,
  [data-theme-mood="light"] .fl-drawer-close {
    background: #f1f5f9;
    border-color: #e2e8f0;
    color: #0f172a;
  }
  html.light .fl-mobile-drawer-footer,
  [data-theme-mood="light"] .fl-mobile-drawer-footer {
    background: #f8fafc;
    border-top-color: #e2e8f0;
  }

  /* Universal text helpers in light mode */
  html.light .fl-site [class*="text-slate-400"],
  [data-theme-mood="light"] .fl-site [class*="text-slate-400"] {
    color: #64748b !important;
  }
  html.light .fl-site [class*="text-slate-300"],
  [data-theme-mood="light"] .fl-site [class*="text-slate-300"] {
    color: #475569 !important;
  }
  html.light .fl-site [class*="text-slate-200"],
  [data-theme-mood="light"] .fl-site [class*="text-slate-200"] {
    color: #334155 !important;
  }

  /* Custom Background Mode */
  [data-theme-bg-mode="custom"] .fl-site {
    background-color: var(--theme-bg-base) !important;
  }
  [data-theme-bg-mode="custom"] .fl-site .fl-hero-section {
    background: radial-gradient(circle at 75% 20%, rgba(245, 158, 11, 0.08) 0%, transparent 45%),
                var(--theme-bg-base) !important;
  }
  [data-theme-bg-mode="custom"] .fl-site .fl-estimator-box,
  [data-theme-bg-mode="custom"] .fl-site .fl-service-card,
  [data-theme-bg-mode="custom"] .fl-site .fl-project-card,
  [data-theme-bg-mode="custom"] .fl-site .fl-cert-card,
  [data-theme-bg-mode="custom"] .fl-site .fl-review-card,
  [data-theme-bg-mode="custom"] .fl-site .fl-quote-wrapper,
  [data-theme-bg-mode="custom"] .fl-site .fl-faq-item {
    background-color: var(--theme-bg-card, var(--theme-bg-base)) !important;
  }

  /* Responsive Media Queries */
  @media (max-width: 1280px) {
    .fl-nav-links {
      gap: 18px;
    }
    .fl-nav-item {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 1100px) {
    .fl-nav-links {
      gap: 14px;
    }
  }

  @media (max-width: 1024px) {
    .fl-hero-layout,
    .fl-estimator-grid,
    .fl-territory-layout,
    .fl-quote-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    
    .fl-services-grid,
    .fl-projects-grid,
    .fl-certs-grid,
    .fl-reviews-grid {
      grid-template-columns: repeat(2, 1fr);
    }

    .fl-footer-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    
    .fl-hero-image-wrap img {
      height: 420px;
    }
  }

  @media (max-width: 920px) {
    .fl-nav-links {
      display: none;
    }
    .fl-hamburger {
      display: flex;
    }
    .fl-nav-cta {
      display: none;
    }
    .fl-nav-wrapper {
      height: 68px;
    }
  }

  @media (max-width: 768px) {
    .fl-hero-stats {
      grid-template-columns: repeat(2, 1fr);
    }
    .fl-services-grid,
    .fl-projects-grid,
    .fl-certs-grid,
    .fl-reviews-grid {
      grid-template-columns: 1fr;
    }
    .fl-footer-grid {
      grid-template-columns: 1fr;
    }
    .fl-hero-floating-card {
      position: relative;
      bottom: auto;
      left: auto;
      margin-top: 20px;
      max-width: 100%;
    }
    .fl-estimator-box,
    .fl-quote-wrapper {
      padding: 24px;
    }
  }

  @media (max-width: 480px) {
    .fl-section {
      padding: 64px 0;
    }
    .fl-hero-section {
      padding: 60px 0 80px;
    }
    .fl-hero-title {
      font-size: clamp(2rem, 8vw, 2.75rem);
    }
    .fl-hero-ctas {
      flex-direction: column;
    }
    .fl-hero-ctas .fl-btn {
      width: 100%;
      justify-content: center;
    }
  }
`;

