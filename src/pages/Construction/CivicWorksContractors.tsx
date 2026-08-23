import React, { useState, useEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import {
  Activity,
  AlertOctagon,
  AlertTriangle,
  ArrowRight,
  Award,
  BadgeAlert,
  BadgeCheck,
  Building,
  Building2,
  Calculator,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Compass,
  Cpu,
  Droplets,
  FileCheck,
  FileSpreadsheet,
  FileText,
  Gauge,
  Hammer,
  HardHat,
  HelpCircle,
  Layers,
  Lightbulb,
  Lock,
  Mail,
  MapPin,
  Menu,
  Phone,
  Radio,
  Ruler,
  Scale,
  Search,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Shovel,
  Sparkles,
  Target,
  Trees,
  Truck,
  UploadCloud,
  Users,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import { imageUrl } from "../../assets/images";
import "./CivicWorksContractors.css";

// Asset Image Resolvers
const heroImg = imageUrl("Construction/civicworks/hero.webp") || "/images/Construction/civicworks/hero.webp";
const roadImg = imageUrl("Construction/civicworks/road.webp") || "/images/Construction/civicworks/road.webp";
const waterImg = imageUrl("Construction/civicworks/water.webp") || "/images/Construction/civicworks/water.webp";
const bridgeImg = imageUrl("Construction/civicworks/bridge.webp") || "/images/Construction/civicworks/bridge.webp";

// Nav items
const navItems = [
  { label: "CAD Stations", id: "cw-stations" },
  { label: "Schedule Matrix", id: "cw-fasttrack" },
  { label: "Fleet Telemetry", id: "cw-fleet" },
  { label: "Capabilities", id: "cw-capabilities" },
  { label: "Megaprojects", id: "cw-projects" },
  { label: "DOT Credentials", id: "cw-credentials" },
  { label: "Procurement FAQ", id: "cw-faq" },
];

// 1. Station-by-Station CAD Chainage Profile
const corridorStations = [
  {
    station: "STA 0+00",
    title: "Interstate Interchange & Flyover Ramp",
    elevation: "ELEV +742.80'",
    chainage: "Milepost 0.00",
    subgrade: "Lime Stabilized Class 1 (98.5% Proctor)",
    utilities: "138kV Transmission Vault Relocated",
    inspection: "DOT Sign-Off #DOT-401-PASS",
    desc: "Post-tensioned concrete structural flyover with 160-ton precast Florida I-beams and MSE mechanically stabilized earth retaining walls.",
  },
  {
    station: "STA 14+20",
    title: "60\" Precast Concrete Box Culvert",
    elevation: "ELEV +729.10'",
    chainage: "Milepost 0.27",
    subgrade: "Crushed Riprap & Geotextile Bedding",
    utilities: "Live Stream Flow Diversion Active",
    inspection: "EPA / USACE Permit Verified",
    desc: "Dual 12'x8' precast storm culverts engineered for 100-year hydraulic storm events with energy dissipator wingwalls.",
  },
  {
    station: "STA 28+50",
    title: "48\" Zinc-Coated Water Transmission Main",
    elevation: "ELEV +736.40'",
    chainage: "Milepost 0.54",
    subgrade: "Washed Granular Aggregate Bedding",
    utilities: "AWWA C151 Class 350 Ductile Iron",
    inspection: "Hydrostatic 250 PSI Test PASSED",
    desc: "Deep trench laser-guided excavation with active wellpoint dewatering and automated cathodic protection sensors.",
  },
  {
    station: "STA 42+00",
    title: "Superpave Paving & ITS Fiber Gantry",
    elevation: "ELEV +751.20'",
    chainage: "Milepost 0.80",
    subgrade: "10\" Graded Aggregate Base (100% Proctor)",
    utilities: "96-Strand Single-Mode DOT Fiber Duct",
    inspection: "Nuclear Density Gauge 99.1% Density",
    desc: "Continuous asphalt paving train with polymer-modified FC-9.5 wearing surface and dynamic electronic message gantries.",
  },
  {
    station: "STA 52+80",
    title: "Grade-Separated Railroad Overpass",
    elevation: "ELEV +768.90'",
    chainage: "Milepost 1.00 (Corridor End)",
    subgrade: "Driven Steel HP 14x89 Foundation Piles",
    utilities: "Class 1 Railroad Signal Coordination",
    inspection: "FRA / AREMA Structural Approval",
    desc: "Heavy structural steel plate girder overpass span erected under live 24/7 rail corridor telemetry monitoring.",
  },
];

// 2. Heavy Machine Fleet Telemetry
const heavyFleet = [
  {
    id: "dozer",
    model: "Caterpillar D8T LGP Bulldozer",
    role: "Mass Grading & Subgrade Trimming",
    gps: "3D Trimble GNSS Dual-Receiver",
    accuracy: "±0.015 ft Automated Blade Deviation",
    telemetry: "Active 428 HP • Tier 4 Final",
  },
  {
    id: "miller",
    model: "Wirtgen W 220 Fi Cold Profiler",
    role: "Full-Width Asphalt Cold Milling",
    gps: "Level Pro Plus Automatic Grade System",
    accuracy: "8' 2\" Milling Width • 13\" Depth in Single Pass",
    telemetry: "Active 801 HP • Real-Time Vacuum Extraction",
  },
  {
    id: "paver",
    model: "Vögele Super 2000-3i Asphalt Paver",
    role: "Superpave Highway Surface Lifts",
    gps: "Niveltronic Plus 3D Laser Screed Control",
    accuracy: "Up to 36 ft Paving Width • 1,200 Tons/Hr",
    telemetry: "Electric Heated Screed • Zero Segregation",
  },
  {
    id: "crane",
    model: "Tadano Demag CC 3800-1 Crane",
    role: "Heavy Structural Bridge Girder Lifts",
    gps: "Load Moment Indicator (LMI) Active",
    accuracy: "715-Ton Capacity • 472 ft Max Tip Height",
    telemetry: "Wind Speed Safety Interlock Active",
  },
];

// 3. Fast-Track Scope Options
const fastTrackScopes = [
  { id: "arterial", name: "Arterial Highway & Corridor Widening", baseMonths: 18, fastMonths: 11, baseCost: 32000000 },
  { id: "bridge", name: "Multi-Span Structural Bridge Replacement", baseMonths: 14, fastMonths: 8, baseCost: 24000000 },
  { id: "trunkline", name: "Deep Trench Utility & Water Interceptor", baseMonths: 12, fastMonths: 7, baseCost: 18500000 },
  { id: "site_megaproject", name: "Civic Logistics & Regional Stormwater Basin", baseMonths: 16, fastMonths: 9, baseCost: 28000000 },
];

// 4. Featured Megaprojects
const megaprojects = [
  {
    name: "I-94 Northern Gateway Reconstruction",
    agency: "State Dept. of Transportation",
    contract: "$58.4M",
    fastTrack: "Completed 74 Days Early",
    stats: "12.8 Lane Miles • 240,000 Tons Superpave • 3 Flyovers",
    image: roadImg,
  },
  {
    name: "Tri-County Raw Water Interceptor",
    agency: "Regional Water Supply Board",
    contract: "$36.2M",
    fastTrack: "Zero Customer Outage Recorded",
    stats: "38,000 LF 54\" Ductile Iron • 12 Microtunnel Crossings",
    image: waterImg,
  },
  {
    name: "Canyon River Memorial Bridge",
    agency: "County Transportation Authority",
    contract: "$26.8M",
    fastTrack: "Accelerated Weekend Deck Replacement",
    stats: "820-ft Steel Truss Span • 8,400 PSI High-Early Concrete",
    image: bridgeImg,
  },
  {
    name: "Metropolitan Civic Logistics Campus",
    agency: "Port & Airport Authority",
    contract: "$44.5M",
    fastTrack: "LEED Gold Certified Site Civil",
    stats: "680,000 CY Mass Excavation • 35-Acre Stormwater Lagoon",
    image: heroImg,
  },
];

// FAQs
const faqsList = [
  {
    q: "How does CivicWorks mitigate liquidated damages on high-profile public works?",
    a: "We deploy dual-shift 24/7 fast-track operations with pre-purchased critical path materials, automated 3D GPS machine fleets, and in-house asphalt plants to eliminate supply bottlenecks and routinely claim early completion incentives.",
  },
  {
    q: "What is your certified single-project and aggregate surety bond capacity?",
    a: "CivicWorks is backed by Treasury-listed (A+ rated) sureties with single-project bonding up to $75,000,000 and an aggregate bonding facility of $250,000,000+.",
  },
  {
    q: "Are all projects certified for Buy America and Davis-Bacon compliance?",
    a: "Yes. Every steel heat number, aggregate quarry certification, and certified weekly payroll is managed through automated compliance auditing software meeting 100% of federal FHWA and state DOT requirements.",
  },
  {
    q: "Can CivicWorks perform emergency disaster road & bridge repairs?",
    a: "Our heavy disaster response division maintains a 2-hour mobilization SLA for emergency culvert washouts, bridge structural strikes, water main ruptures, and post-storm route clearing.",
  },
];

export function CivicWorksContractors() {
  const [activeStation, setActiveStation] = useState(corridorStations[0]);
  const [activeScope, setActiveScope] = useState(fastTrackScopes[0]);
  const [acceleratedMode, setAcceleratedMode] = useState(true);

  // Nav & Drawer State
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("cw-stations");

  // RFP Form State
  const [rfpAgency, setRfpAgency] = useState("");
  const [rfpContact, setRfpContact] = useState("");
  const [rfpEmail, setRfpEmail] = useState("");
  const [rfpCode, setRfpCode] = useState("");
  const [rfpNotes, setRfpNotes] = useState("");
  const [rfpSubmitted, setRfpSubmitted] = useState(false);

  // FAQ State
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

  // Lock body scroll when mobile menu is open
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

  // Schedule & Savings Calculation
  const scheduleMetrics = useMemo(() => {
    const monthsSaved = activeScope.baseMonths - activeScope.fastMonths;
    const daysSaved = monthsSaved * 30;
    const motSavings = daysSaved * 3200; // $3.2k/day in traffic control & overhead savings
    const dotBonus = daysSaved * 12500; // $12.5k/day DOT early incentive
    const totalBenefit = motSavings + dotBonus;

    return {
      duration: acceleratedMode ? `${activeScope.fastMonths} Months` : `${activeScope.baseMonths} Months`,
      daysSaved: acceleratedMode ? `${daysSaved} Days Faster` : "Standard Timeline",
      motSavings: `$${(motSavings / 1000000).toFixed(2)}M`,
      dotBonus: `$${(dotBonus / 1000000).toFixed(2)}M`,
      totalBenefit: `$${(totalBenefit / 1000000).toFixed(2)}M`,
    };
  }, [activeScope, acceleratedMode]);

  const handleRfpSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setRfpSubmitted(true);
  };

  return (
    <div className="cw-site" id="cw-top">
      {/* Simple Classic Header */}
      <header className={`cw-header ${scrolled ? "scrolled" : ""}`}>
        <div className="cw-wrap cw-header-inner">
          <a href="#cw-top" className="cw-brand-link" onClick={(e) => scrollTo(e, "cw-top")}>
            <div className="cw-brand-box">
              CW
            </div>
            <h2 className="cw-brand-title">CIVICWORKS</h2>
          </a>

          {/* Desktop Nav Links */}
          <nav className="cw-nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`cw-nav-item ${activeNav === item.id ? "active" : ""}`}
                onClick={(e) => scrollTo(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="cw-header-actions">
            <a
              href="#cw-rfp-portal"
              className="cw-cta-btn"
              onClick={(e) => scrollTo(e, "cw-rfp-portal")}
            >
              Submit RFP
            </a>

            <button
              type="button"
              className="cw-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-Out Drawer Portal mounted to document.body */}
      {menuOpen && typeof document !== "undefined" && createPortal(
        <div className="cw-drawer-root">
          <div
            className="cw-drawer-backdrop"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="cw-drawer-menu" role="dialog" aria-modal="true" aria-label="Civil Engineering Menu">
            <div className="cw-drawer-header">
              <div className="flex items-center gap-3">
                <div className="cw-brand-stencil-box !w-8 !h-8 !text-base">
                  CW
                </div>
                <div className="cw-brand-text">
                  <h2 className="!text-white !text-base">CIVICWORKS</h2>
                  <span className="!text-xs">Terminal Menu</span>
                </div>
              </div>
              <button
                type="button"
                className="text-slate-400 hover:text-white p-2 bg-transparent border-0 cursor-pointer"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="cw-drawer-body">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`cw-drawer-link ${activeNav === item.id ? "active" : ""}`}
                  onClick={(e) => scrollTo(e, item.id)}
                >
                  <span>{item.label}</span>
                  <ArrowRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </div>

            <div className="cw-drawer-footer">
              <a
                href="tel:8005559400"
                className="flex items-center justify-center gap-2 p-3 rounded bg-white/10 text-white font-mono text-xs font-bold hover:bg-white/15"
              >
                <Phone className="w-4 h-4 text-[#d4ff00]" />
                <span>Heavy Civil Desk: (800) 555-9400</span>
              </a>
              <a
                href="#cw-rfp-portal"
                className="cw-btn cw-btn-neon w-full"
                onClick={(e) => scrollTo(e, "cw-rfp-portal")}
              >
                Submit RFP Plan Set
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* 3. Hero Section (Blueprint Terminal Aesthetic) */}
      <section className="cw-hero-terminal">
        <img
          src={heroImg}
          alt="Heavy civil roadway and municipal infrastructure by CivicWorks"
          className="cw-hero-bg"
        />
        <div className="cw-hero-blueprint-grid"></div>
        <div className="cw-hero-shade"></div>
        <div className="cw-wrap">
          <div className="cw-hero-inner">
            <div className="cw-tag-badge">
              <Activity className="w-3.5 h-3.5" />
              DOT Prequalified General Contractor • $250M Surety Bonding Line
            </div>
            <h1 className="cw-hero-h1">
              Heavy civil engineering <br />
              <span>built for public impact.</span>
            </h1>
            <p className="cw-hero-p">
              We engineer and construct arterial highway corridors, structural multi-span bridges, and deep-trench water interceptors with 24/7 fast-track acceleration and zero bond defaults.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#cw-stations"
                className="cw-btn cw-btn-neon cw-btn-lg"
                onClick={(e) => scrollTo(e, "cw-stations")}
              >
                <Compass className="w-5 h-5" />
                Inspect CAD Station Chainage
              </a>
              <a
                href="#cw-fasttrack"
                className="cw-btn cw-btn-outline cw-btn-lg"
                onClick={(e) => scrollTo(e, "cw-fasttrack")}
              >
                <Calculator className="w-5 h-5" />
                Accelerated Schedule Matrix
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Industrial Telemetry Metric HUD */}
      <section className="cw-hud-bar">
        <div className="cw-wrap cw-hud-grid">
          <div className="cw-hud-stat">
            <div className="cw-hud-icon">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h3>0.61</h3>
              <p>OSHA EMR Safety Score</p>
            </div>
          </div>

          <div className="cw-hud-stat">
            <div className="cw-hud-icon">
              <CircleDollarSign className="w-6 h-6" />
            </div>
            <div>
              <h3>$250M+</h3>
              <p>Surety Bonding Line</p>
            </div>
          </div>

          <div className="cw-hud-stat">
            <div className="cw-hud-icon">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h3>320+</h3>
              <p>GPS Heavy Fleet Units</p>
            </div>
          </div>

          <div className="cw-hud-stat">
            <div className="cw-hud-icon">
              <Gauge className="w-6 h-6" />
            </div>
            <div>
              <h3>100%</h3>
              <p>On-Time DOT Record</p>
            </div>
          </div>

          <div className="cw-hud-stat">
            <div className="cw-hud-icon">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h3>$750M+</h3>
              <p>Public Projects Built</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Interactive CAD Station Chainage Profile */}
      <section id="cw-stations" className="cw-section">
        <div className="cw-wrap">
          <div className="cw-section-head">
            <div className="cw-section-eyebrow">
              <Ruler className="w-4 h-4" />
              CAD Chainage Profile (Milepost 0.00 – 1.00)
            </div>
            <h2 className="cw-section-title">Interactive Corridor Station Viewer</h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Select corridor stations along the 1-mile project alignment to inspect laser grade elevations, subterranean utility clearances, and QA/QC inspection sign-offs.
            </p>
          </div>

          <div className="cw-station-card">
            {/* Station Horizontal Rail */}
            <div className="cw-station-track">
              {corridorStations.map((st) => (
                <button
                  key={st.station}
                  type="button"
                  className={`cw-station-btn ${activeStation.station === st.station ? "active" : ""}`}
                  onClick={() => setActiveStation(st)}
                >
                  <div className="cw-font-stencil text-sm font-black">{st.station}</div>
                  <div className="text-[11px] opacity-75 font-mono">{st.chainage}</div>
                </button>
              ))}
            </div>

            {/* Station Telemetry Display */}
            <div className="cw-station-grid">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-2.5 py-1 rounded bg-[#d4ff00]/10 border border-[#d4ff00]/30 text-[#d4ff00] font-mono text-xs font-bold">
                    {activeStation.station}
                  </span>
                  <span className="font-mono text-xs text-slate-400">
                    Chainage: {activeStation.chainage} • Datum Elevation: {activeStation.elevation}
                  </span>
                </div>
                <h3 className="cw-font-stencil text-3xl font-black text-white mb-3">
                  {activeStation.title}
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed">
                  {activeStation.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded bg-[#10141a] border border-white/10 font-mono text-xs">
                    <span className="text-slate-400 block mb-1">Subgrade &amp; Foundation:</span>
                    <strong className="text-white">{activeStation.subgrade}</strong>
                  </div>
                  <div className="p-3.5 rounded bg-[#10141a] border border-white/10 font-mono text-xs">
                    <span className="text-slate-400 block mb-1">Utility / Conflict Status:</span>
                    <strong className="text-[#d4ff00]">{activeStation.utilities}</strong>
                  </div>
                </div>
              </div>

              {/* Inspector QC Sign-off Card */}
              <div className="cw-station-telemetry-box">
                <div className="text-xs font-bold text-[#d4ff00] uppercase tracking-wider mb-3 flex items-center justify-between">
                  <span>DOT Station QC Log</span>
                  <BadgeCheck className="w-4 h-4 text-[#d4ff00]" />
                </div>
                <div className="cw-telemetry-row">
                  <span className="text-slate-400">Station ID:</span>
                  <strong className="text-white">{activeStation.station}</strong>
                </div>
                <div className="cw-telemetry-row">
                  <span className="text-slate-400">Surface Elevation:</span>
                  <strong className="text-[#d4ff00]">{activeStation.elevation}</strong>
                </div>
                <div className="cw-telemetry-row">
                  <span className="text-slate-400">Compliance Code:</span>
                  <strong className="text-emerald-400">{activeStation.inspection}</strong>
                </div>
                <div className="cw-telemetry-row">
                  <span className="text-slate-400">GPS Tolerance:</span>
                  <strong className="text-white">±0.015 ft (Trimble 3D)</strong>
                </div>

                <a
                  href="#cw-rfp-portal"
                  className="cw-btn cw-btn-neon w-full mt-4 !text-xs !py-2.5"
                  onClick={(e) => {
                    scrollTo(e, "cw-rfp-portal");
                    setRfpNotes(`Requesting CAD Alignment Profiles for: ${activeStation.station} - ${activeStation.title}`);
                  }}
                >
                  Download Alignment Plan Sets
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Accelerated Schedule & Incentive Matrix */}
      <section id="cw-fasttrack" className="cw-section light-mode">
        <div className="cw-wrap">
          <div className="cw-section-head">
            <div className="cw-section-eyebrow">
              <Zap className="w-4 h-4" />
              Contract Schedule Engineering
            </div>
            <h2 className="cw-section-title">24/7 Fast-Track Schedule &amp; Incentive Matrix</h2>
            <p className="text-slate-600 text-sm max-w-2xl mx-auto">
              Compare standard linear construction schedules against CivicWorks' 24/7 dual-shift accelerated operations to quantify liquidated damage mitigation and early completion bonuses.
            </p>
          </div>

          <div className="cw-fasttrack-card">
            <div className="cw-calc-grid">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 font-mono">
                    1. Select Public Works Scope Category:
                  </div>
                  <div className="cw-scope-selector">
                    {fastTrackScopes.map((sc) => (
                      <button
                        key={sc.id}
                        type="button"
                        className={`cw-scope-chip ${activeScope.id === sc.id ? "active" : ""}`}
                        onClick={() => setActiveScope(sc)}
                      >
                        <div className="font-bold text-slate-900 text-sm mb-1">{sc.name}</div>
                        <div className="text-xs font-mono text-blue-700">
                          Baseline: {sc.baseMonths} Mos • Fast-Track: {sc.fastMonths} Mos
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Schedule Toggle */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 font-mono">
                    2. Shift &amp; Crew Mobilization Mode:
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      className={`flex-1 p-3.5 rounded border text-xs font-bold font-mono transition-all ${
                        acceleratedMode
                          ? "bg-blue-900 text-white border-blue-900 shadow-md"
                          : "bg-slate-100 text-slate-700 border-slate-300"
                      }`}
                      onClick={() => setAcceleratedMode(true)}
                    >
                      ⚡ 24/7 Dual-Shift Accelerated Fast-Track
                    </button>
                    <button
                      type="button"
                      className={`flex-1 p-3.5 rounded border text-xs font-bold font-mono transition-all ${
                        !acceleratedMode
                          ? "bg-slate-800 text-white border-slate-800"
                          : "bg-slate-100 text-slate-700 border-slate-300"
                      }`}
                      onClick={() => setAcceleratedMode(false)}
                    >
                      Standard Single-Shift Schedule
                    </button>
                  </div>
                </div>
              </div>

              {/* Incentive Metrics Display */}
              <div className="p-8 rounded bg-[#0b1522] text-white border border-blue-500/30">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#d4ff00] mb-2">
                  Accelerated Impact Scorecard
                </div>
                <div className="cw-font-stencil text-4xl font-black text-white mb-1">
                  {scheduleMetrics.duration}
                </div>
                <div className="text-xs font-mono text-[#d4ff00] font-bold mb-6">
                  {scheduleMetrics.daysSaved}
                </div>

                <div className="space-y-2.5 text-xs font-mono py-4 border-t border-b border-white/10 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Traffic (MOT) Cost Savings:</span>
                    <strong className="text-white">{scheduleMetrics.motSavings}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">DOT Early Bonus Potential:</span>
                    <strong className="text-[#d4ff00]">{scheduleMetrics.dotBonus}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Total Public Value Saved:</span>
                    <strong className="text-emerald-400">{scheduleMetrics.totalBenefit}</strong>
                  </div>
                </div>

                <a
                  href="#cw-rfp-portal"
                  className="cw-btn cw-btn-neon w-full !text-xs"
                  onClick={(e) => {
                    scrollTo(e, "cw-rfp-portal");
                    setRfpNotes(
                      `Fast-Track Request: ${activeScope.name} | Accelerated Target: ${scheduleMetrics.duration} (${scheduleMetrics.daysSaved})`
                    );
                  }}
                >
                  Request Fast-Track Feasibility Plan
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Heavy Equipment Telemetry HUD */}
      <section id="cw-fleet" className="cw-section blueprint-mode">
        <div className="cw-wrap">
          <div className="cw-section-head">
            <div className="cw-section-eyebrow">
              <Cpu className="w-4 h-4" />
              Machine Control Fleet
            </div>
            <h2 className="cw-section-title">GPS-Guided Machine Control Fleet</h2>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              Our 320+ unit fleet operates with real-time 3D CAD grade telemetry, continuous compaction monitoring, and telematics dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {heavyFleet.map((fleet) => (
              <div key={fleet.id} className="p-6 rounded bg-[#132236] border border-blue-500/20 hover:border-[#d4ff00] transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#d4ff00]">
                    {fleet.role}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800">
                    Live Telemetry
                  </span>
                </div>
                <h4 className="cw-font-stencil text-2xl font-black text-white mb-2">
                  {fleet.model}
                </h4>
                <div className="p-3 rounded bg-black/40 border border-white/10 font-mono text-xs space-y-1 text-slate-300 mb-3">
                  <div>GNSS: <strong className="text-white">{fleet.gps}</strong></div>
                  <div>Tolerance: <strong className="text-[#d4ff00]">{fleet.accuracy}</strong></div>
                </div>
                <div className="text-xs font-mono text-slate-400">
                  Rating: {fleet.telemetry}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Core Capabilities Grid */}
      <section id="cw-capabilities" className="cw-section">
        <div className="cw-wrap">
          <div className="cw-section-head">
            <div className="cw-section-eyebrow">
              <Building2 className="w-4 h-4" />
              Turnkey Heavy Civil
            </div>
            <h2 className="cw-section-title">Municipal &amp; Civil Capabilities</h2>
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              Self-performing complex civil scopes with internal asphalt batching, stone quarries, and heavy crane logistics.
            </p>
          </div>

          <div className="cw-capabilities-grid">
            <div className="cw-cap-box">
              <div className="cw-cap-frame">
                <img src={roadImg} alt="Heavy highway paving" />
              </div>
              <div className="cw-cap-body">
                <h3>Highway &amp; Arterials</h3>
                <p>Multi-lane interstate widening, Superpave asphalt placement, concrete barrier walls, and intelligent signalization.</p>
                <div className="mt-auto font-mono text-xs text-[#d4ff00] font-bold">
                  DOT Prequalified Class A
                </div>
              </div>
            </div>

            <div className="cw-cap-box">
              <div className="cw-cap-frame">
                <img src={waterImg} alt="Deep utility trenching" />
              </div>
              <div className="cw-cap-body">
                <h3>Water &amp; Interceptors</h3>
                <p>Large-diameter zinc ductile iron transmission mains, sanitary interceptors, pump stations, and storm culverts.</p>
                <div className="mt-auto font-mono text-xs text-[#d4ff00] font-bold">
                  AWWA / EPA Standards
                </div>
              </div>
            </div>

            <div className="cw-cap-box">
              <div className="cw-cap-frame">
                <img src={bridgeImg} alt="Structural bridge construction" />
              </div>
              <div className="cw-cap-body">
                <h3>Bridge &amp; Structures</h3>
                <p>Post-tensioned concrete spans, driven H-piles, bridge deck hydrodemolition, and railroad overpasses.</p>
                <div className="mt-auto font-mono text-xs text-[#d4ff00] font-bold">
                  AASHTO Structural Specs
                </div>
              </div>
            </div>

            <div className="cw-cap-box">
              <div className="cw-cap-frame">
                <img src={heroImg} alt="Municipal earthwork" />
              </div>
              <div className="cw-cap-body">
                <h3>Site Civil &amp; Basins</h3>
                <p>Mass grading, 3D GPS laser excavation, regional stormwater retention lakes, and airport logistics pads.</p>
                <div className="mt-auto font-mono text-xs text-[#d4ff00] font-bold">
                  LEED Site Prequalified
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Featured Megaprojects */}
      <section id="cw-projects" className="cw-section blueprint-mode">
        <div className="cw-wrap">
          <div className="cw-section-head">
            <div className="cw-section-eyebrow">
              <Award className="w-4 h-4" />
              Public Records
            </div>
            <h2 className="cw-section-title">Major Civil Case Studies</h2>
            <p className="text-slate-300 text-sm max-w-2xl mx-auto">
              Delivered on-spec, under budget, and with stellar audit compliance for state and federal transportation boards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {megaprojects.map((proj, idx) => (
              <div key={idx} className="rounded bg-[#0d1b2a] border border-blue-500/20 overflow-hidden hover:border-[#d4ff00] transition-all group">
                <div className="h-60 relative overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#d4ff00] text-slate-950 font-black text-xs px-2.5 py-1 font-mono uppercase">
                    {proj.contract}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white font-mono text-xs px-3 py-1">
                    {proj.fastTrack}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-mono text-[#d4ff00] mb-1">
                    Agency: {proj.agency}
                  </div>
                  <h3 className="cw-font-stencil text-2xl font-black text-white mb-2">
                    {proj.name}
                  </h3>
                  <p className="font-mono text-xs text-slate-300 mb-4 bg-black/30 p-2.5 rounded border border-white/10">
                    {proj.stats}
                  </p>
                  <a
                    href="#cw-rfp-portal"
                    className="text-xs font-mono font-bold text-[#d4ff00] hover:underline"
                    onClick={(e) => scrollTo(e, "cw-rfp-portal")}
                  >
                    View DOT Verification Record →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. DOT Prequalification Credentials */}
      <section id="cw-credentials" className="cw-section">
        <div className="cw-wrap">
          <div className="cw-section-head">
            <div className="cw-section-eyebrow">
              <ShieldCheck className="w-4 h-4" />
              Surety &amp; Safety Compliance
            </div>
            <h2 className="cw-section-title">Prequalification Matrix</h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {[
              { title: "DOT Unlimited", subtitle: "State General Contractor" },
              { title: "0.61 EMR", subtitle: "OSHA VPP Star Safety" },
              { title: "$250M Surety", subtitle: "Treasury-Listed A+ Bond" },
              { title: "Buy America", subtitle: "100% Domestic Traceability" },
              { title: "Davis-Bacon", subtitle: "Certified Payroll Audited" },
              { title: "APWA Member", subtitle: "Public Works Association" },
            ].map((cred, idx) => (
              <div key={idx} className="p-5 rounded bg-white/5 border border-white/10 text-center font-mono hover:border-[#d4ff00] transition-colors">
                <Shield className="w-7 h-7 text-[#d4ff00] mx-auto mb-2" />
                <div className="font-bold text-white text-sm mb-1">{cred.title}</div>
                <div className="text-[11px] text-slate-400">{cred.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. RFP / IFB Plan Submission Portal */}
      <section id="cw-rfp-portal" className="cw-section light-mode">
        <div className="cw-wrap">
          <div className="p-8 sm:p-12 rounded bg-white border border-slate-300 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="cw-section-eyebrow">
                  <FileSpreadsheet className="w-4 h-4" />
                  Estimating Gateway
                </div>
                <h2 className="cw-font-stencil text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight">
                  Submit RFP Plan Sets <br />
                  <span className="text-blue-700">&amp; Bid Documents</span>
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  Our Chief Estimator reviews municipal capital improvement plan sets, quantity takeoffs, and engineering specifications with 24-hour bid bond verification.
                </p>

                <div className="space-y-3 font-mono text-xs text-slate-700 mb-8">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Instant $75M single-project bid bond pre-clearance</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Complete itemized unit-price schedule of values</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>DBE &amp; Small Business participation commitment</span>
                  </div>
                </div>

                <div className="p-4 rounded bg-slate-100 border border-slate-300 font-mono text-xs">
                  <div className="text-slate-500">Estimating Hotline Direct:</div>
                  <div className="text-base font-bold text-slate-900 mt-0.5">(800) 555-9400</div>
                  <div className="text-[11px] text-slate-500 mt-1">bids@civicworkscontractors.com</div>
                </div>
              </div>

              {/* Submission Form */}
              <div className="lg:col-span-7">
                {rfpSubmitted ? (
                  <div className="p-8 rounded bg-emerald-50 border border-emerald-300 text-center font-mono">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">RFP Documents Logged!</h3>
                    <p className="text-slate-600 text-xs mb-6">
                      Thank you, <strong>{rfpContact || "Procurement Officer"}</strong> ({rfpAgency || "Agency"}). Our estimating desk has registered RFP #{rfpCode || "CW-BID"} and will confirm review within <strong>2 hours</strong>.
                    </p>
                    <button
                      type="button"
                      className="cw-btn cw-btn-neon !text-xs"
                      onClick={() => setRfpSubmitted(false)}
                    >
                      Submit Another Document Set
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleRfpSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono">
                          Agency / Municipality *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. State DOT, Regional Water Authority"
                          value={rfpAgency}
                          onChange={(e) => setRfpAgency(e.target.value)}
                          className="cw-input-field"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono">
                          RFP / Contract Number *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. DOT-2026-HWY-108"
                          value={rfpCode}
                          onChange={(e) => setRfpCode(e.target.value)}
                          className="cw-input-field"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono">
                          Contact Name &amp; Title *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. David Vance, PE"
                          value={rfpContact}
                          onChange={(e) => setRfpContact(e.target.value)}
                          className="cw-input-field"
                        />
                      </div>
                      <div>
                        <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono">
                          Official Agency Email *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="e.g. dvance@dot.state.gov"
                          value={rfpEmail}
                          onChange={(e) => setRfpEmail(e.target.value)}
                          className="cw-input-field"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono">
                        Scope Summary &amp; Milestone Timeline
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Provide details on linear footage, tonnage, box culvert counts, or bid closing deadline..."
                        value={rfpNotes}
                        onChange={(e) => setRfpNotes(e.target.value)}
                        className="cw-input-field"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono">
                        Upload Plan Sheets, CAD, or Specs (Optional)
                      </label>
                      <div className="border border-dashed border-slate-300 rounded p-6 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                        <UploadCloud className="w-8 h-8 text-blue-700 mx-auto mb-2" />
                        <p className="text-xs text-slate-700 font-mono font-bold">
                          Drag &amp; drop PDF plan sets, ZIP files, or DWG CAD sheets
                        </p>
                        <p className="text-[10px] text-slate-400 mt-1 font-mono">Max file size 150MB</p>
                        <input type="file" className="hidden" />
                      </div>
                    </div>

                    <button type="submit" className="cw-btn cw-btn-neon cw-btn-lg w-full mt-2">
                      Transmit RFP for Engineering Takeoff
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 12. Procurement FAQs */}
      <section id="cw-faq" className="cw-section">
        <div className="cw-wrap">
          <div className="cw-section-head">
            <div className="cw-section-eyebrow">
              <HelpCircle className="w-4 h-4" />
              Procurement Inquiries
            </div>
            <h2 className="cw-section-title">Procurement &amp; Agency FAQs</h2>
          </div>

          <div className="max-w-3xl mx-auto">
            {faqsList.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className={`p-6 rounded bg-white/5 border border-white/10 mb-3 transition-all ${isOpen ? "border-[#d4ff00]" : ""}`}>
                  <button
                    type="button"
                    className="w-full flex justify-between items-center bg-transparent border-0 text-left font-bold text-white text-base cursor-pointer gap-4 cw-font-stencil"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#d4ff00] transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="pt-4 text-xs text-slate-300 leading-relaxed border-t border-white/10 mt-4 font-mono">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 13. Footer */}
      <footer className="cw-footer-block">
        <div className="cw-wrap">
          <div className="cw-footer-grid">
            <div className="cw-footer-col">
              <div className="cw-brand-block mb-4">
                <div className="cw-brand-stencil-box">
                  CW
                </div>
                <div className="cw-brand-text">
                  <h2>CIVICWORKS</h2>
                  <span>HEAVY CIVIL INFRASTRUCTURE</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4 font-mono">
                Prequalified municipal general contractor and heavy civil engineering builder. $250M aggregate surety line with 0.61 EMR safety record.
              </p>
              <div className="text-xs text-[#d4ff00] font-mono font-bold">
                DOT Vendor ID #CW-99201 • Buy America Certified
              </div>
            </div>

            <div className="cw-footer-col">
              <h4>Infrastructure Scopes</h4>
              <ul className="cw-footer-links font-mono">
                <li><a href="#cw-capabilities" onClick={(e) => scrollTo(e, "cw-capabilities")}>Heavy Highway Paving</a></li>
                <li><a href="#cw-capabilities" onClick={(e) => scrollTo(e, "cw-capabilities")}>Deep Water Interceptors</a></li>
                <li><a href="#cw-capabilities" onClick={(e) => scrollTo(e, "cw-capabilities")}>Structural Bridge Spans</a></li>
                <li><a href="#cw-capabilities" onClick={(e) => scrollTo(e, "cw-capabilities")}>Mass Site Logistics</a></li>
                <li><a href="#cw-capabilities" onClick={(e) => scrollTo(e, "cw-capabilities")}>ITS Traffic Signalization</a></li>
              </ul>
            </div>

            <div className="cw-footer-col">
              <h4>Technical Systems</h4>
              <ul className="cw-footer-links font-mono">
                <li><a href="#cw-stations" onClick={(e) => scrollTo(e, "cw-stations")}>CAD Station Chainage Profile</a></li>
                <li><a href="#cw-fasttrack" onClick={(e) => scrollTo(e, "cw-fasttrack")}>24/7 Fast-Track Schedule Matrix</a></li>
                <li><a href="#cw-fleet" onClick={(e) => scrollTo(e, "cw-fleet")}>GPS Machine Telemetry</a></li>
                <li><a href="#cw-credentials" onClick={(e) => scrollTo(e, "cw-credentials")}>Prequalification Matrix</a></li>
                <li><a href="#cw-faq" onClick={(e) => scrollTo(e, "cw-faq")}>Procurement FAQ</a></li>
              </ul>
            </div>

            <div className="cw-footer-col">
              <h4>Dispatch &amp; Headquarters</h4>
              <div className="space-y-2 text-xs text-slate-400 font-mono">
                <p>📍 4400 Civic Infrastructure Parkway<br />Heavy Industrial Logistics Hub</p>
                <p>📞 Estimating Desk: <strong className="text-white">(800) 555-9400</strong></p>
                <p>✉️ bids@civicworkscontractors.com</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex justify-between items-center flex-wrap gap-4 text-xs font-mono text-slate-500">
            <div>© {new Date().getFullYear()} CivicWorks Contractors Inc. All Rights Reserved.</div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-slate-400">Safety Charter</a>
              <a href="#" className="hover:text-slate-400">DBE Compliance</a>
              <a href="#" className="hover:text-slate-400">Surety Certificate</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default CivicWorksContractors;
