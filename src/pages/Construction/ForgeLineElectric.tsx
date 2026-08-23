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
import "./ForgeLineElectric.css";

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
      <header className={`fl-header ${isScrolled ? "scrolled" : ""}`}>
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
          <nav className="fl-nav-links">
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
              className="fl-btn fl-btn-primary fl-btn-sm hidden sm:inline-flex"
              onClick={(e) => scrollToSection(e, "fl-quote")}
            >
              Get Free Estimate
              <ArrowRight className="w-4 h-4" />
            </a>
            <button
              type="button"
              className="md:hidden text-white p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0d1524] border-b border-slate-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top-4 duration-200">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={`#${link.target}`}
                className={`text-base font-semibold py-2 ${
                  activeNav === link.target ? "text-amber-400" : "text-slate-300"
                }`}
                onClick={(e) => scrollToSection(e, link.target)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="#fl-quote"
                className="fl-btn fl-btn-primary w-full"
                onClick={(e) => scrollToSection(e, "fl-quote")}
              >
                Request a Fast Quote
              </a>
              <a href="tel:18005558658" className="fl-btn fl-btn-emergency w-full">
                <Phone className="w-4 h-4" />
                Emergency Hotline
              </a>
            </div>
          </div>
        )}
      </header>

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
