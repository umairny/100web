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
      const scrollPos = window.scrollY + 180;

      // Top area
      if (window.scrollY < 200) {
        setActiveNav(navItems[0].id);
        return;
      }

      // Bottom area
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70) {
        setActiveNav(navItems[navItems.length - 1].id);
        return;
      }

      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveNav(navItems[i].id);
          return;
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
    setActiveNav(id);
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -70;
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
      <style>{css}</style>

      {/* Simple Classic Header */}
      <header className={`cw-header ${scrolled ? "scrolled" : ""}`}>
        <div className="cw-wrap cw-header-inner">
          <a href="#cw-top" className="cw-brand-link" onClick={(e) => scrollTo(e, "cw-top")}>
            <div className="cw-brand-box">
              CW
            </div>
            <h2 className="cw-brand-title">CIVICWORKS</h2>
          </a>

          {/* Desktop Nav Links with Prominent Active State */}
          <nav className="cw-nav-links" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`cw-nav-item ${isActive ? "active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(e) => scrollTo(e, item.id)}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
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
                <div className="cw-brand-box !w-8 !h-8 !text-base">
                  CW
                </div>
                <div className="cw-brand-text">
                  <h2 className="cw-drawer-title !text-base font-bold">CIVICWORKS</h2>
                  <span className="text-xs text-slate-400 font-mono">Terminal Menu</span>
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
              {navItems.map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`cw-drawer-link ${isActive ? "active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={(e) => scrollTo(e, item.id)}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 opacity-50 cw-drawer-arrow" />
                  </a>
                );
              })}
            </div>

            <div className="cw-drawer-footer">
              <a
                href="tel:8005559400"
                className="cw-drawer-phone flex items-center justify-center gap-2 p-3 rounded font-mono text-xs font-bold"
              >
                <Phone className="w-4 h-4 text-[#d4ff00] cw-phone-icon" />
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
            <p className="cw-section-desc text-sm max-w-2xl mx-auto">
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
                  <span className="px-2.5 py-1 rounded bg-[#d4ff00]/10 border border-[#d4ff00]/30 text-[#d4ff00] font-mono text-xs font-bold cw-station-badge">
                    {activeStation.station}
                  </span>
                  <span className="font-mono text-xs text-slate-400 cw-datum-text">
                    Chainage: {activeStation.chainage} • Datum Elevation: {activeStation.elevation}
                  </span>
                </div>
                <h3 className="cw-font-stencil text-3xl font-black text-white mb-3 cw-station-head-title">
                  {activeStation.title}
                </h3>
                <p className="text-slate-300 text-sm mb-6 leading-relaxed cw-station-desc">
                  {activeStation.desc}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded bg-[#10141a] border border-white/10 font-mono text-xs cw-subgrade-box">
                    <span className="text-slate-400 block mb-1">Subgrade &amp; Foundation:</span>
                    <strong className="text-white cw-subgrade-val">{activeStation.subgrade}</strong>
                  </div>
                  <div className="p-3.5 rounded bg-[#10141a] border border-white/10 font-mono text-xs cw-utilities-box">
                    <span className="text-slate-400 block mb-1">Utility / Conflict Status:</span>
                    <strong className="text-[#d4ff00] cw-utilities-val">{activeStation.utilities}</strong>
                  </div>
                </div>
              </div>

              {/* Inspector QC Sign-off Card */}
              <div className="cw-station-telemetry-box">
                <div className="text-xs font-bold text-[#d4ff00] uppercase tracking-wider mb-3 flex items-center justify-between cw-qc-head">
                  <span>DOT Station QC Log</span>
                  <BadgeCheck className="w-4 h-4 text-[#d4ff00] cw-badge-icon" />
                </div>
                <div className="cw-telemetry-row">
                  <span className="text-slate-400">Station ID:</span>
                  <strong className="text-white">{activeStation.station}</strong>
                </div>
                <div className="cw-telemetry-row">
                  <span className="text-slate-400">Surface Elevation:</span>
                  <strong className="text-[#d4ff00] cw-elevation-val">{activeStation.elevation}</strong>
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
            <p className="cw-section-desc text-sm max-w-2xl mx-auto">
              Compare standard linear construction schedules against CivicWorks' 24/7 dual-shift accelerated operations to quantify liquidated damage mitigation and early completion bonuses.
            </p>
          </div>

          <div className="cw-fasttrack-card">
            <div className="cw-calc-grid">
              <div className="space-y-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 font-mono cw-step-label">
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
                        <div className="font-bold text-slate-900 text-sm mb-1 cw-scope-name">{sc.name}</div>
                        <div className="text-xs font-mono text-blue-700 cw-scope-timeline">
                          Baseline: {sc.baseMonths} Mos • Fast-Track: {sc.fastMonths} Mos
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Schedule Toggle */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 font-mono cw-step-label">
                    2. Shift &amp; Crew Mobilization Mode:
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      className={`cw-shift-btn flex-1 p-3.5 rounded border text-xs font-bold font-mono transition-all ${
                        acceleratedMode
                          ? "bg-blue-900 text-white border-blue-900 shadow-md cw-shift-active"
                          : "bg-slate-100 text-slate-700 border-slate-300"
                      }`}
                      onClick={() => setAcceleratedMode(true)}
                    >
                      ⚡ 24/7 Dual-Shift Accelerated Fast-Track
                    </button>
                    <button
                      type="button"
                      className={`cw-shift-btn flex-1 p-3.5 rounded border text-xs font-bold font-mono transition-all ${
                        !acceleratedMode
                          ? "bg-slate-800 text-white border-slate-800 cw-shift-active"
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
              <div className="cw-scorecard-panel p-8 rounded bg-[#0b1522] text-white border border-blue-500/30">
                <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#d4ff00] mb-2 cw-scorecard-tag">
                  Accelerated Impact Scorecard
                </div>
                <div className="cw-font-stencil text-4xl font-black text-white mb-1">
                  {scheduleMetrics.duration}
                </div>
                <div className="text-xs font-mono text-[#d4ff00] font-bold mb-6 cw-scorecard-highlight">
                  {scheduleMetrics.daysSaved}
                </div>

                <div className="space-y-2.5 text-xs font-mono py-4 border-t border-b border-white/10 mb-6">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Traffic (MOT) Cost Savings:</span>
                    <strong className="text-white">{scheduleMetrics.motSavings}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">DOT Early Bonus Potential:</span>
                    <strong className="text-[#d4ff00] cw-scorecard-bonus">{scheduleMetrics.dotBonus}</strong>
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
            <p className="cw-section-desc text-sm max-w-2xl mx-auto">
              Our 320+ unit fleet operates with real-time 3D CAD grade telemetry, continuous compaction monitoring, and telematics dispatch.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {heavyFleet.map((fleet) => (
              <div key={fleet.id} className="cw-fleet-card p-6 rounded bg-[#132236] border border-blue-500/20 hover:border-[#d4ff00] transition-all">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-bold text-[#d4ff00] cw-fleet-role">
                    {fleet.role}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-800 cw-fleet-badge">
                    Live Telemetry
                  </span>
                </div>
                <h4 className="cw-font-stencil text-2xl font-black text-white mb-2 cw-fleet-title">
                  {fleet.model}
                </h4>
                <div className="p-3 rounded bg-black/40 border border-white/10 font-mono text-xs space-y-1 text-slate-300 mb-3 cw-fleet-specs">
                  <div>GNSS: <strong className="text-white">{fleet.gps}</strong></div>
                  <div>Tolerance: <strong className="text-[#d4ff00] cw-fleet-acc">{fleet.accuracy}</strong></div>
                </div>
                <div className="text-xs font-mono text-slate-400 cw-fleet-rating">
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
            <p className="cw-section-desc text-sm max-w-2xl mx-auto">
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
                <div className="mt-auto font-mono text-xs text-[#d4ff00] font-bold cw-cap-tag">
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
                <div className="mt-auto font-mono text-xs text-[#d4ff00] font-bold cw-cap-tag">
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
                <div className="mt-auto font-mono text-xs text-[#d4ff00] font-bold cw-cap-tag">
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
                <div className="mt-auto font-mono text-xs text-[#d4ff00] font-bold cw-cap-tag">
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
            <p className="cw-section-desc text-sm max-w-2xl mx-auto">
              Delivered on-spec, under budget, and with stellar audit compliance for state and federal transportation boards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {megaprojects.map((proj, idx) => (
              <div key={idx} className="cw-project-card rounded bg-[#0d1b2a] border border-blue-500/20 overflow-hidden hover:border-[#d4ff00] transition-all group">
                <div className="h-60 relative overflow-hidden">
                  <img
                    src={proj.image}
                    alt={proj.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#d4ff00] text-slate-950 font-black text-xs px-2.5 py-1 font-mono uppercase cw-proj-badge">
                    {proj.contract}
                  </div>
                  <div className="absolute bottom-3 right-3 bg-black/80 text-white font-mono text-xs px-3 py-1">
                    {proj.fastTrack}
                  </div>
                </div>

                <div className="p-6">
                  <div className="text-xs font-mono text-[#d4ff00] mb-1 cw-proj-agency">
                    Agency: {proj.agency}
                  </div>
                  <h3 className="cw-font-stencil text-2xl font-black text-white mb-2 cw-proj-title">
                    {proj.name}
                  </h3>
                  <p className="font-mono text-xs text-slate-300 mb-4 bg-black/30 p-2.5 rounded border border-white/10 cw-proj-stats">
                    {proj.stats}
                  </p>
                  <a
                    href="#cw-rfp-portal"
                    className="text-xs font-mono font-bold text-[#d4ff00] hover:underline cw-proj-link"
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
              <div key={idx} className="cw-cred-card p-5 rounded bg-white/5 border border-white/10 text-center font-mono hover:border-[#d4ff00] transition-colors">
                <Shield className="w-7 h-7 text-[#d4ff00] mx-auto mb-2 cw-cred-icon" />
                <div className="font-bold text-white text-sm mb-1 cw-cred-title">{cred.title}</div>
                <div className="text-[11px] text-slate-400 cw-cred-sub">{cred.subtitle}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. RFP / IFB Plan Submission Portal */}
      <section id="cw-rfp-portal" className="cw-section light-mode">
        <div className="cw-wrap">
          <div className="cw-rfp-card p-8 sm:p-12 rounded bg-white border border-slate-300 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-5">
                <div className="cw-section-eyebrow">
                  <FileSpreadsheet className="w-4 h-4" />
                  Estimating Gateway
                </div>
                <h2 className="cw-font-stencil text-3xl sm:text-4xl font-black text-slate-900 mb-4 leading-tight cw-rfp-title">
                  Submit RFP Plan Sets <br />
                  <span className="text-blue-700 cw-rfp-accent">&amp; Bid Documents</span>
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 cw-rfp-desc">
                  Our Chief Estimator reviews municipal capital improvement plan sets, quantity takeoffs, and engineering specifications with 24-hour bid bond verification.
                </p>

                <div className="space-y-3 font-mono text-xs text-slate-700 mb-8 cw-rfp-bullets">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 cw-bullet-icon" />
                    <span>Instant $75M single-project bid bond pre-clearance</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 cw-bullet-icon" />
                    <span>Complete itemized unit-price schedule of values</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 cw-bullet-icon" />
                    <span>DBE &amp; Small Business participation commitment</span>
                  </div>
                </div>

                <div className="cw-rfp-contact-box p-4 rounded bg-slate-100 border border-slate-300 font-mono text-xs">
                  <div className="text-slate-500">Estimating Hotline Direct:</div>
                  <div className="text-base font-bold text-slate-900 mt-0.5 cw-contact-phone">(800) 555-9400</div>
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
                        <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono cw-label">
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
                        <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono cw-label">
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
                        <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono cw-label">
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
                        <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono cw-label">
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
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono cw-label">
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
                      <label className="text-xs font-bold uppercase text-slate-600 block mb-1 font-mono cw-label">
                        Upload Plan Sheets, CAD, or Specs (Optional)
                      </label>
                      <div className="cw-upload-box border border-dashed border-slate-300 rounded p-6 text-center bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                        <UploadCloud className="w-8 h-8 text-blue-700 mx-auto mb-2 cw-upload-icon" />
                        <p className="text-xs text-slate-700 font-mono font-bold cw-upload-p">
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
                <div key={idx} className={`cw-faq-box p-6 rounded bg-white/5 border border-white/10 mb-3 transition-all ${isOpen ? "border-[#d4ff00] active" : ""}`}>
                  <button
                    type="button"
                    className="w-full flex justify-between items-center bg-transparent border-0 text-left font-bold text-white text-base cursor-pointer gap-4 cw-font-stencil cw-faq-btn"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-[#d4ff00] transition-transform cw-faq-chevron ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="pt-4 text-xs text-slate-300 leading-relaxed border-t border-white/10 mt-4 font-mono cw-faq-answer">
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
              <div className="cw-brand-link mb-4">
                <div className="cw-brand-box">
                  CW
                </div>
                <div>
                  <h2 className="cw-brand-title">CIVICWORKS</h2>
                  <span className="text-[10px] text-slate-400 font-mono tracking-wider">HEAVY CIVIL INFRASTRUCTURE</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4 font-mono">
                Prequalified municipal general contractor and heavy civil engineering builder. $250M aggregate surety line with 0.61 EMR safety record.
              </p>
              <div className="text-xs text-[#d4ff00] font-mono font-bold cw-footer-tag">
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

const css = `
  /* ==========================================================================
     CIVICWORKS CONTRACTORS - BRUTALIST HEAVY CIVIL & THEME ENGINE
     ========================================================================== */
  @import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,600;0,700;0,800;1,700&family=Space+Grotesk:wght@500;600;700;800&family=Space+Mono:ital,wght@0,400;0,700;1,400&display=swap');

  .cw-site {
    /* Brand Accent Colors (Theme Selector Compatible) */
    --cw-neon:            var(--theme-accent-primary, #d4ff00);
    --cw-neon-dark:       var(--theme-accent-primary-hover, #a8cc00);
    --cw-neon-glow:       var(--theme-accent-glow, rgba(212, 255, 0, 0.35));
    --cw-contrast:        var(--theme-accent-contrast, #0c0e11);

    --cw-blueprint-blue:  var(--theme-accent-primary, #004488);
    --cw-blueprint-cyan:  var(--theme-accent-secondary, #00b4d8);
    --cw-hazard-orange:   #ff5500;

    /* Dark/Author Mode Defaults */
    --cw-concrete-black:  var(--theme-bg-base, #0c0e11);
    --cw-concrete-dark:   var(--theme-bg-surface, #14171d);
    --cw-concrete-panel:  var(--theme-bg-card, #1b2028);
    --cw-concrete-border: var(--theme-border, #28303d);
    --cw-hud-bg:          #0f1217;

    --cw-light-bg:        #f3f5f8;
    --cw-light-card:      #ffffff;
    --cw-light-border:    #d0d7e2;

    --cw-text-dark:       #0f141c;
    --cw-text-muted:      #526071;
    --cw-text-light:      var(--theme-text-primary, #f3f5f8);
    --cw-text-light-muted: var(--theme-text-muted, #9ba8b8);

    --cw-header-bg:       rgba(12, 14, 17, 0.94);
    --cw-header-border:   var(--cw-concrete-border);

    background-color: var(--cw-concrete-black);
    color: var(--cw-text-light);
    font-family: 'Space Grotesk', system-ui, -apple-system, sans-serif;
    line-height: 1.55;
    overflow-x: clip;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  .cw-site * {
    box-sizing: border-box;
  }

  .cw-site a {
    text-decoration: none;
    color: inherit;
  }

  .cw-font-stencil {
    font-family: 'Chakra Petch', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .cw-font-mono {
    font-family: 'Space Mono', monospace;
  }

  .cw-wrap {
    width: min(1400px, calc(100% - 64px));
    margin-inline: auto;
  }

  @media (max-width: 640px) {
    .cw-wrap {
      width: calc(100% - 32px);
    }
  }

  /* ==========================================================================
     HEADER & NAV BAR WITH PROMINENT ACTIVE STATE
     ========================================================================== */
  .cw-header {
    position: sticky;
    top: 0;
    z-index: 100;
    width: 100%;
    background: var(--cw-header-bg);
    border-bottom: 1px solid var(--cw-header-border);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    transition: background-color 0.25s ease, border-color 0.25s ease;
  }

  .cw-header-inner {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .cw-brand-link {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    flex-shrink: 0;
  }

  .cw-brand-box {
    width: 34px;
    height: 34px;
    background: var(--cw-neon);
    color: var(--cw-contrast);
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 900;
    font-size: 0.95rem;
    transform: skewX(-6deg);
    flex-shrink: 0;
    box-shadow: 0 0 12px var(--cw-neon-glow);
    transition: background-color 0.25s ease, color 0.25s ease, box-shadow 0.25s ease;
  }

  .cw-brand-title {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 1.2rem;
    font-weight: 900;
    color: var(--cw-text-light);
    margin: 0;
    line-height: 1;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .cw-nav-links {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  /* Nav Item & Active State */
  .cw-nav-item {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 0.8125rem;
    font-weight: 700;
    color: var(--cw-text-light-muted);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    text-decoration: none;
    padding: 6px 14px;
    border-radius: 9999px;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .cw-nav-item:hover {
    color: var(--cw-neon);
    background: color-mix(in srgb, var(--cw-neon) 10%, transparent);
  }

  /* ACTIVE CLASS: Crisp neon pill & indicator */
  .cw-nav-item.active {
    color: var(--cw-neon) !important;
    background: color-mix(in srgb, var(--cw-neon) 14%, transparent) !important;
    font-weight: 800;
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--cw-neon) 35%, transparent);
  }

  .cw-nav-item.active::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 14px;
    height: 2px;
    border-radius: 9999px;
    background-color: var(--cw-neon);
  }

  .cw-header-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }

  .cw-cta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 800;
    border-radius: 4px;
    font-size: 0.8125rem;
    height: 38px;
    padding: 0 18px;
    background: var(--cw-neon);
    color: var(--cw-contrast);
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.04em;
    white-space: nowrap;
    box-shadow: 0 0 16px var(--cw-neon-glow);
    transition: background 0.15s ease, transform 0.15s ease;
  }

  .cw-cta-btn:hover {
    background: var(--cw-neon-dark);
    transform: translateY(-1px);
  }

  .cw-menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 4px;
    border: 1px solid var(--cw-concrete-border);
    background: var(--cw-concrete-dark);
    color: var(--cw-text-light);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .cw-menu-toggle:hover {
    border-color: var(--cw-neon);
    color: var(--cw-neon);
  }

  @media (min-width: 1024px) {
    .cw-nav-links {
      display: flex !important;
    }
    .cw-menu-toggle {
      display: none !important;
    }
  }

  @media (max-width: 1023px) {
    .cw-nav-links {
      display: none !important;
    }
    .cw-menu-toggle {
      display: flex !important;
    }
  }

  @media (max-width: 520px) {
    .cw-cta-btn {
      display: none !important;
    }
  }

  /* ==========================================================================
     MOBILE PORTAL DRAWER WITH ACTIVE STATE
     ========================================================================== */
  .cw-drawer-root {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99999;
    pointer-events: auto;
  }

  .cw-drawer-backdrop {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgba(8, 10, 13, 0.85);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    z-index: 100000;
    cursor: pointer;
  }

  .cw-drawer-menu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(360px, 86vw);
    height: 100%;
    height: 100dvh;
    background: var(--cw-concrete-dark);
    color: var(--cw-text-light);
    z-index: 100001;
    box-shadow: -15px 0 50px rgba(0, 0, 0, 0.9);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    border-left: 3px solid var(--cw-neon);
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  .cw-drawer-header {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--cw-concrete-border);
  }

  .cw-drawer-body {
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 6px;
    flex-grow: 1;
  }

  .cw-drawer-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-radius: 9999px;
    font-family: 'Chakra Petch', sans-serif;
    font-size: 0.9375rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--cw-text-light-muted);
    transition: all 0.2s ease;
    text-decoration: none;
    cursor: pointer;
  }

  .cw-drawer-link:hover {
    background: color-mix(in srgb, var(--cw-neon) 10%, transparent);
    color: var(--cw-neon);
  }

  .cw-drawer-link.active {
    background: color-mix(in srgb, var(--cw-neon) 16%, transparent) !important;
    border-left: 4px solid var(--cw-neon) !important;
    color: var(--cw-neon) !important;
    padding-left: 14px;
    font-weight: 800;
  }

  .cw-drawer-link.active .cw-drawer-arrow {
    opacity: 1 !important;
    color: var(--cw-neon);
    transform: translateX(3px);
  }

  .cw-drawer-footer {
    padding: 20px;
    border-top: 1px solid var(--cw-concrete-border);
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: var(--cw-concrete-panel);
  }

  .cw-drawer-phone {
    background: rgba(255, 255, 255, 0.08);
    color: var(--cw-text-light);
  }

  /* General Layout Buttons */
  .cw-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    font-family: 'Chakra Petch', sans-serif;
    font-weight: 800;
    border-radius: 4px;
    font-size: 0.8125rem;
    padding: 10px 20px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    text-transform: uppercase;
    letter-spacing: 0.04em;
    white-space: nowrap;
    line-height: 1;
  }

  .cw-btn-neon {
    background: var(--cw-neon);
    color: var(--cw-contrast);
    box-shadow: 0 0 18px var(--cw-neon-glow);
  }

  .cw-btn-neon:hover {
    background: var(--cw-neon-dark);
    transform: translateY(-1px);
    box-shadow: 0 0 24px var(--cw-neon-glow);
  }

  .cw-btn-outline {
    background: transparent;
    border: 1px solid rgba(255, 255, 255, 0.25);
    color: #ffffff;
  }

  .cw-btn-outline:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--cw-neon);
    color: var(--cw-neon);
    transform: translateY(-1px);
  }

  .cw-btn-sm {
    padding: 7px 14px;
    font-size: 0.72rem;
  }

  .cw-btn-lg {
    padding: 14px 28px;
    font-size: 0.9375rem;
  }

  /* ==========================================================================
     PAGE SECTIONS & COMPONENTS
     ========================================================================== */
  .cw-hero-terminal {
    position: relative;
    min-height: 720px;
    display: flex;
    align-items: center;
    background: #080a0d;
    color: #ffffff;
    overflow: hidden;
    border-bottom: 1px solid var(--cw-concrete-border);
    padding-top: 80px;
    transition: background 0.25s ease;
  }

  .cw-hero-bg {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.32;
    filter: contrast(1.2) grayscale(0.3);
  }

  .cw-hero-blueprint-grid {
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(rgba(0, 180, 216, 0.08) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 180, 216, 0.08) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  .cw-hero-shade {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(8, 10, 13, 0.98) 0%,
      rgba(8, 10, 13, 0.85) 45%,
      rgba(8, 10, 13, 0.45) 80%,
      rgba(8, 10, 13, 0.2) 100%
    );
  }

  .cw-hero-inner {
    position: relative;
    z-index: 2;
    max-width: 820px;
    padding: 80px 0;
  }

  .cw-tag-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: color-mix(in srgb, var(--cw-neon) 12%, transparent);
    border: 1px solid var(--cw-neon);
    color: var(--cw-neon);
    padding: 6px 14px;
    border-radius: 4px;
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .cw-hero-h1 {
    font-family: 'Chakra Petch', sans-serif;
    font-size: clamp(3.2rem, 6.5vw, 5.4rem);
    font-weight: 900;
    line-height: 0.95;
    letter-spacing: 0.02em;
    text-transform: uppercase;
    margin-bottom: 24px;
  }

  .cw-hero-h1 span {
    color: var(--cw-neon);
    text-shadow: 0 0 30px var(--cw-neon-glow);
    transition: color 0.25s ease;
  }

  .cw-hero-p {
    font-size: 1.15rem;
    color: var(--cw-text-light-muted);
    line-height: 1.75;
    margin-bottom: 36px;
  }

  /* Telemetry Metric HUD */
  .cw-hud-bar {
    background: var(--cw-hud-bg);
    border-bottom: 1px solid var(--cw-concrete-border);
    transition: background-color 0.25s ease;
  }

  .cw-hud-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }

  .cw-hud-stat {
    padding: 24px 20px;
    border-right: 1px solid var(--cw-concrete-border);
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .cw-hud-stat:last-child {
    border-right: none;
  }

  .cw-hud-icon {
    width: 44px;
    height: 44px;
    border-radius: 4px;
    background: color-mix(in srgb, var(--cw-neon) 12%, transparent);
    color: var(--cw-neon);
    border: 1px solid color-mix(in srgb, var(--cw-neon) 35%, transparent);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .cw-hud-stat h3 {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 2rem;
    font-weight: 900;
    color: var(--cw-text-light);
    line-height: 1;
    margin-bottom: 4px;
  }

  .cw-hud-stat p {
    font-family: 'Space Mono', monospace;
    font-size: 0.625rem;
    font-weight: 700;
    color: var(--cw-text-light-muted);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin: 0;
  }

  /* Section Containers */
  .cw-section {
    padding: 96px 0;
    position: relative;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  .cw-section.light-mode {
    background: var(--cw-light-bg);
    color: var(--cw-text-dark);
  }

  .cw-section.blueprint-mode {
    background: #0b1522;
    color: #ffffff;
  }

  .cw-section-head {
    text-align: center;
    max-width: 780px;
    margin: 0 auto 60px;
  }

  .cw-section-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--cw-neon);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    margin-bottom: 12px;
  }

  .cw-section.light-mode .cw-section-eyebrow {
    color: var(--cw-blueprint-blue);
  }

  .cw-section-title {
    font-family: 'Chakra Petch', sans-serif;
    font-size: clamp(2.4rem, 4.5vw, 3.6rem);
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.02em;
    line-height: 1.02;
    margin-bottom: 16px;
    color: var(--cw-text-light);
  }

  .cw-section.light-mode .cw-section-title {
    color: var(--cw-text-dark);
  }

  .cw-section-desc {
    color: var(--cw-text-light-muted);
  }
  .cw-section.light-mode .cw-section-desc {
    color: var(--cw-text-muted);
  }

  /* 1. CAD Station Profile Tool */
  .cw-station-card {
    background: var(--cw-concrete-panel);
    border: 1px solid var(--cw-concrete-border);
    border-radius: 8px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
    padding: 40px;
    transition: background-color 0.25s ease, border-color 0.25s ease;
  }

  .cw-station-track {
    display: flex;
    gap: 8px;
    overflow-x: auto;
    padding-bottom: 16px;
    margin-bottom: 32px;
  }

  .cw-station-btn {
    background: var(--cw-concrete-dark);
    border: 1px solid var(--cw-concrete-border);
    border-radius: 4px;
    padding: 12px 18px;
    cursor: pointer;
    transition: all 0.2s ease;
    white-space: nowrap;
    color: var(--cw-text-light-muted);
    text-align: left;
  }

  .cw-station-btn:hover {
    border-color: var(--cw-neon);
    color: var(--cw-text-light);
  }

  .cw-station-btn.active {
    background: var(--cw-neon);
    border-color: var(--cw-neon);
    color: var(--cw-contrast);
    box-shadow: 0 0 16px var(--cw-neon-glow);
    font-weight: 800;
  }

  .cw-station-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 36px;
    align-items: center;
  }

  .cw-station-telemetry-box {
    background: #0a0d11;
    border: 1px solid var(--cw-concrete-border);
    border-radius: 6px;
    padding: 24px;
    font-family: 'Space Mono', monospace;
    font-size: 0.75rem;
    transition: background-color 0.25s ease, border-color 0.25s ease;
  }

  .cw-telemetry-row {
    display: flex;
    justify-content: space-between;
    padding: 8px 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  }

  /* 2. Fast-Track Accelerated Schedule Card */
  .cw-fasttrack-card {
    background: var(--cw-light-card);
    color: var(--cw-text-dark);
    border: 1px solid var(--cw-light-border);
    border-radius: 8px;
    padding: 48px;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
    transition: background-color 0.25s ease, border-color 0.25s ease;
  }

  .cw-calc-grid {
    display: grid;
    grid-template-columns: 1.2fr 0.8fr;
    gap: 48px;
    align-items: center;
  }

  .cw-scope-selector {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .cw-scope-chip {
    background: var(--cw-light-bg);
    border: 1px solid var(--cw-light-border);
    border-radius: 6px;
    padding: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
  }

  .cw-scope-chip:hover {
    border-color: var(--cw-blueprint-blue);
  }

  .cw-scope-chip.active {
    border-color: var(--cw-blueprint-blue);
    background: rgba(0, 68, 136, 0.08);
    box-shadow: 0 0 0 2px var(--cw-blueprint-blue);
  }

  /* Capabilities Grid */
  .cw-capabilities-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .cw-cap-box {
    background: var(--cw-concrete-panel);
    border: 1px solid var(--cw-concrete-border);
    border-radius: 6px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .cw-cap-box:hover {
    transform: translateY(-6px);
    border-color: var(--cw-neon);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
  }

  .cw-cap-frame {
    height: 200px;
    position: relative;
    overflow: hidden;
  }

  .cw-cap-frame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: contrast(1.1);
    transition: transform 0.6s ease;
  }

  .cw-cap-box:hover .cw-cap-frame img {
    transform: scale(1.08);
  }

  .cw-cap-body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .cw-cap-body h3 {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 1.35rem;
    font-weight: 800;
    text-transform: uppercase;
    color: var(--cw-text-light);
    margin: 6px 0;
  }

  .cw-cap-body p {
    font-size: 0.8125rem;
    color: var(--cw-text-light-muted);
    line-height: 1.6;
    margin-bottom: 16px;
  }

  /* Input Fields */
  .cw-input-field {
    width: 100%;
    background: #ffffff;
    border: 1px solid var(--cw-light-border);
    border-radius: 4px;
    padding: 13px 16px;
    font-size: 0.9375rem;
    font-family: inherit;
    color: var(--cw-text-dark);
    outline: none;
    transition: all 0.2s ease;
  }

  .cw-input-field:focus {
    border-color: var(--cw-blueprint-blue);
    box-shadow: 0 0 0 3px rgba(0, 68, 136, 0.2);
  }

  /* Footer */
  .cw-footer-block {
    background: #08090c;
    color: var(--cw-text-light-muted);
    border-top: 1px solid var(--cw-concrete-border);
    padding: 80px 0 36px;
  }

  .cw-footer-grid {
    display: grid;
    grid-template-columns: 1.4fr 0.9fr 0.9fr 1.2fr;
    gap: 48px;
    margin-bottom: 64px;
  }

  .cw-footer-col h4 {
    font-family: 'Chakra Petch', sans-serif;
    font-size: 1.25rem;
    font-weight: 800;
    color: #ffffff;
    text-transform: uppercase;
    margin-bottom: 20px;
  }

  .cw-footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 0.875rem;
  }

  .cw-footer-links a:hover {
    color: var(--cw-neon);
  }

  /* ==========================================================================
     THEME SELECTOR & PRESETS SYSTEM
     ========================================================================== */
  [data-theme-preset]:not([data-theme-preset="original"]) .cw-site,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site,
  [data-theme-preset]:not([data-theme-preset="original"]) .cw-drawer-menu,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-drawer-menu {
    --cw-neon:            var(--theme-accent-primary, #d4ff00) !important;
    --cw-neon-dark:       var(--theme-accent-primary-hover, #a8cc00) !important;
    --cw-neon-glow:       var(--theme-accent-glow, rgba(212, 255, 0, 0.35)) !important;
    --cw-contrast:        var(--theme-accent-contrast, #0c0e11) !important;
    --cw-blueprint-cyan:  var(--theme-accent-secondary, #00b4d8) !important;
    --cw-blueprint-blue:  var(--theme-accent-primary, #004488) !important;
  }

  /* Dynamic Preset Buttons, Highlights & Accents */
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-btn-neon,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-cta-btn,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-brand-box,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-station-btn.active,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-drawer-menu .cw-btn-neon {
    background-color: var(--cw-neon) !important;
    color: var(--cw-contrast) !important;
  }

  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-btn-neon:hover,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-cta-btn:hover {
    background-color: var(--cw-neon-dark) !important;
  }

  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-nav-item.active {
    color: var(--cw-neon) !important;
    background: color-mix(in srgb, var(--cw-neon) 14%, transparent) !important;
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--cw-neon) 35%, transparent) !important;
  }
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-nav-item.active::after {
    background-color: var(--cw-neon) !important;
  }

  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-station-badge,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-utilities-val,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-qc-head,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-badge-icon,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-elevation-val,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-scorecard-tag,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-scorecard-highlight,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-scorecard-bonus,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-fleet-role,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-fleet-acc,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-cap-tag,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-proj-badge,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-proj-agency,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-proj-link,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-cred-icon,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-footer-tag,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-phone-icon {
    color: var(--cw-neon) !important;
  }

  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site [class*="text-[#d4ff00]"] {
    color: var(--cw-neon) !important;
  }

  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-hud-icon {
    color: var(--cw-neon) !important;
    background: color-mix(in srgb, var(--cw-neon) 12%, transparent) !important;
    border-color: color-mix(in srgb, var(--cw-neon) 35%, transparent) !important;
  }

  [data-theme-active="true"]:not([data-theme-preset="original"]) .cw-site .cw-scope-chip.active {
    border-color: var(--cw-neon) !important;
    box-shadow: 0 0 0 2px var(--cw-neon) !important;
  }

  /* ==========================================================================
     DARK MOOD SYSTEM OVERRIDES
     ========================================================================== */
  html.dark .cw-site,
  body.dark .cw-site,
  :root.dark .cw-site,
  [data-theme-mood="dark"] .cw-site,
  :root[data-theme-mood="dark"] .cw-site,
  :root[data-theme-active="true"][data-theme-mood="dark"] .cw-site {
    --cw-concrete-black:  var(--theme-bg-base, #0c0e11);
    --cw-concrete-dark:   var(--theme-bg-surface, #14171d);
    --cw-concrete-panel:  var(--theme-bg-card, #1b2028);
    --cw-concrete-border: var(--theme-border, #28303d);
    --cw-hud-bg:          #0f1217;
    --cw-header-bg:       rgba(12, 14, 17, 0.94);

    --cw-text-light:      var(--theme-text-primary, #f3f5f8);
    --cw-text-light-muted: var(--theme-text-muted, #9ba8b8);
  }

  /* Dark Mood: Adapt Originally Light Sections so they aren't jarring */
  html.dark .cw-site .cw-section.light-mode,
  [data-theme-mood="dark"] .cw-site .cw-section.light-mode {
    background: var(--theme-bg-base, #0c0e11) !important;
    color: var(--cw-text-light) !important;
  }

  html.dark .cw-site .cw-fasttrack-card,
  [data-theme-mood="dark"] .cw-site .cw-fasttrack-card {
    background: var(--theme-bg-card, #1b2028) !important;
    border-color: var(--theme-border, #28303d) !important;
    color: var(--cw-text-light) !important;
  }

  html.dark .cw-site .cw-scope-chip,
  [data-theme-mood="dark"] .cw-site .cw-scope-chip {
    background: var(--theme-bg-surface, #14171d) !important;
    border-color: var(--theme-border, #28303d) !important;
  }

  html.dark .cw-site .cw-scope-name,
  [data-theme-mood="dark"] .cw-site .cw-scope-name {
    color: #ffffff !important;
  }

  html.dark .cw-site .cw-scope-timeline,
  [data-theme-mood="dark"] .cw-site .cw-scope-timeline {
    color: var(--cw-blueprint-cyan) !important;
  }

  html.dark .cw-site .cw-step-label,
  [data-theme-mood="dark"] .cw-site .cw-step-label {
    color: var(--cw-text-light-muted) !important;
  }

  html.dark .cw-site .cw-rfp-card,
  [data-theme-mood="dark"] .cw-site .cw-rfp-card {
    background: var(--theme-bg-card, #1b2028) !important;
    border-color: var(--theme-border, #28303d) !important;
    color: var(--cw-text-light) !important;
  }

  html.dark .cw-site .cw-rfp-title,
  [data-theme-mood="dark"] .cw-site .cw-rfp-title {
    color: #ffffff !important;
  }

  html.dark .cw-site .cw-rfp-desc,
  [data-theme-mood="dark"] .cw-site .cw-rfp-desc {
    color: var(--cw-text-light-muted) !important;
  }

  html.dark .cw-site .cw-rfp-bullets,
  [data-theme-mood="dark"] .cw-site .cw-rfp-bullets {
    color: var(--cw-text-light-muted) !important;
  }

  html.dark .cw-site .cw-rfp-contact-box,
  [data-theme-mood="dark"] .cw-site .cw-rfp-contact-box {
    background: #14171d !important;
    border-color: var(--theme-border, #28303d) !important;
  }

  html.dark .cw-site .cw-contact-phone,
  [data-theme-mood="dark"] .cw-site .cw-contact-phone {
    color: #ffffff !important;
  }

  html.dark .cw-site .cw-label,
  [data-theme-mood="dark"] .cw-site .cw-label {
    color: var(--cw-text-light-muted) !important;
  }

  html.dark .cw-site .cw-input-field,
  [data-theme-mood="dark"] .cw-site .cw-input-field {
    background: #0f131a !important;
    border-color: var(--theme-border, #28303d) !important;
    color: #ffffff !important;
  }

  html.dark .cw-site .cw-upload-box,
  [data-theme-mood="dark"] .cw-site .cw-upload-box {
    background: #10141a !important;
    border-color: var(--theme-border, #28303d) !important;
  }

  html.dark .cw-site .cw-upload-p,
  [data-theme-mood="dark"] .cw-site .cw-upload-p {
    color: var(--cw-text-light-muted) !important;
  }

  /* ==========================================================================
     LIGHT MOOD SYSTEM OVERRIDES (AUTHORITATIVE MUNICIPAL BLUEPRINT)
     ========================================================================== */
  html.light .cw-site,
  body.light .cw-site,
  :root.light .cw-site,
  [data-theme-mood="light"] .cw-site,
  :root[data-theme-mood="light"] .cw-site,
  :root[data-theme-active="true"][data-theme-mood="light"] .cw-site {
    --cw-concrete-black:  var(--theme-bg-base, #f3f5f8);
    --cw-concrete-dark:   var(--theme-bg-surface, #ffffff);
    --cw-concrete-panel:  var(--theme-bg-card, #ffffff);
    --cw-concrete-border: var(--theme-border, #d0d7e2);
    --cw-hud-bg:          #ffffff;
    --cw-header-bg:       rgba(255, 255, 255, 0.94);
    --cw-header-border:   #d0d7e2;

    --cw-text-light:      var(--theme-text-primary, #0f141c);
    --cw-text-light-muted: var(--theme-text-muted, #526071);
  }

  html.light .cw-site .cw-header .cw-brand-title,
  [data-theme-mood="light"] .cw-site .cw-header .cw-brand-title {
    color: #0f141c !important;
  }

  html.light .cw-site .cw-nav-item,
  [data-theme-mood="light"] .cw-site .cw-nav-item {
    color: #526071;
  }
  html.light .cw-site .cw-nav-item:hover,
  [data-theme-mood="light"] .cw-site .cw-nav-item:hover {
    color: var(--cw-blueprint-blue, #004488);
    background: rgba(0, 68, 136, 0.08);
  }
  html.light .cw-site .cw-nav-item.active,
  [data-theme-mood="light"] .cw-site .cw-nav-item.active {
    color: var(--cw-blueprint-blue, #004488) !important;
    background: rgba(0, 68, 136, 0.1) !important;
    box-shadow: inset 0 0 0 1px rgba(0, 68, 136, 0.25) !important;
  }
  html.light .cw-site .cw-nav-item.active::after,
  [data-theme-mood="light"] .cw-site .cw-nav-item.active::after {
    background-color: var(--cw-blueprint-blue, #004488);
  }

  html.light .cw-site .cw-menu-toggle,
  [data-theme-mood="light"] .cw-site .cw-menu-toggle {
    background: #ffffff !important;
    border-color: #d0d7e2 !important;
    color: #0f141c !important;
  }

  /* Light Mood: Hero Terminal */
  html.light .cw-site .cw-hero-terminal,
  [data-theme-mood="light"] .cw-site .cw-hero-terminal {
    background: #edf2f7 !important;
    color: #0f141c !important;
    border-color: #d0d7e2 !important;
  }

  html.light .cw-site .cw-hero-shade,
  [data-theme-mood="light"] .cw-site .cw-hero-shade {
    background: linear-gradient(
      90deg,
      rgba(237, 242, 247, 0.98) 0%,
      rgba(237, 242, 247, 0.88) 45%,
      rgba(237, 242, 247, 0.45) 80%,
      rgba(237, 242, 247, 0.1) 100%
    ) !important;
  }

  html.light .cw-site .cw-hero-h1,
  [data-theme-mood="light"] .cw-site .cw-hero-h1 {
    color: #0f141c !important;
  }

  html.light .cw-site .cw-hero-h1 span,
  [data-theme-mood="light"] .cw-site .cw-hero-h1 span {
    color: var(--cw-blueprint-blue, #004488) !important;
    text-shadow: none !important;
  }

  html.light .cw-site .cw-hero-p,
  [data-theme-mood="light"] .cw-site .cw-hero-p {
    color: #526071 !important;
  }

  html.light .cw-site .cw-btn-outline,
  [data-theme-mood="light"] .cw-site .cw-btn-outline {
    border-color: #cbd5e1;
    color: #0f141c;
  }
  html.light .cw-site .cw-btn-outline:hover,
  [data-theme-mood="light"] .cw-site .cw-btn-outline:hover {
    background: rgba(0, 68, 136, 0.08);
    border-color: var(--cw-blueprint-blue, #004488);
    color: var(--cw-blueprint-blue, #004488);
  }

  /* Light Mood: HUD Bar */
  html.light .cw-site .cw-hud-bar,
  [data-theme-mood="light"] .cw-site .cw-hud-bar {
    background: #ffffff !important;
    border-color: #d0d7e2 !important;
  }

  html.light .cw-site .cw-hud-stat h3,
  [data-theme-mood="light"] .cw-site .cw-hud-stat h3 {
    color: #0f141c !important;
  }

  html.light .cw-site .cw-hud-stat p,
  [data-theme-mood="light"] .cw-site .cw-hud-stat p {
    color: #64748b !important;
  }

  html.light .cw-site .cw-hud-stat,
  [data-theme-mood="light"] .cw-site .cw-hud-stat {
    border-color: #e2e8f0 !important;
  }

  /* Light Mood: Section Headings */
  html.light .cw-site .cw-section-title,
  [data-theme-mood="light"] .cw-site .cw-section-title {
    color: #0f141c !important;
  }

  html.light .cw-site .cw-section-desc,
  [data-theme-mood="light"] .cw-site .cw-section-desc {
    color: #526071 !important;
  }

  /* Light Mood: CAD Station Profile */
  html.light .cw-site .cw-station-card,
  [data-theme-mood="light"] .cw-site .cw-station-card {
    background: #ffffff !important;
    border-color: #d0d7e2 !important;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06) !important;
  }

  html.light .cw-site .cw-station-btn,
  [data-theme-mood="light"] .cw-site .cw-station-btn {
    background: #f1f5f9;
    border-color: #cbd5e1;
    color: #475569;
  }

  html.light .cw-site .cw-station-head-title,
  [data-theme-mood="light"] .cw-site .cw-station-head-title {
    color: #0f141c !important;
  }

  html.light .cw-site .cw-station-desc,
  [data-theme-mood="light"] .cw-site .cw-station-desc {
    color: #526071 !important;
  }

  html.light .cw-site .cw-subgrade-box,
  [data-theme-mood="light"] .cw-site .cw-subgrade-box,
  html.light .cw-site .cw-utilities-box,
  [data-theme-mood="light"] .cw-site .cw-utilities-box {
    background: #f8fafc !important;
    border-color: #e2e8f0 !important;
  }

  html.light .cw-site .cw-subgrade-val,
  [data-theme-mood="light"] .cw-site .cw-subgrade-val {
    color: #0f141c !important;
  }

  html.light .cw-site .cw-station-telemetry-box,
  [data-theme-mood="light"] .cw-site .cw-station-telemetry-box {
    background: #f8fafc !important;
    border-color: #d0d7e2 !important;
  }

  html.light .cw-site .cw-station-telemetry-box strong,
  [data-theme-mood="light"] .cw-site .cw-station-telemetry-box strong {
    color: #0f141c !important;
  }

  /* Light Mood: Machine Fleet & Megaprojects */
  html.light .cw-site .cw-section.blueprint-mode,
  [data-theme-mood="light"] .cw-site .cw-section.blueprint-mode {
    background: #eef2f8 !important;
    color: #0f141c !important;
  }

  html.light .cw-site .cw-fleet-card,
  [data-theme-mood="light"] .cw-site .cw-fleet-card {
    background: #ffffff !important;
    border-color: #d0d7e2 !important;
  }

  html.light .cw-site .cw-fleet-title,
  [data-theme-mood="light"] .cw-site .cw-fleet-title {
    color: #0f141c !important;
  }

  html.light .cw-site .cw-project-card,
  [data-theme-mood="light"] .cw-site .cw-project-card {
    background: #ffffff !important;
    border-color: #d0d7e2 !important;
  }

  html.light .cw-site .cw-proj-title,
  [data-theme-mood="light"] .cw-site .cw-proj-title {
    color: #0f141c !important;
  }

  html.light .cw-site .cw-proj-stats,
  [data-theme-mood="light"] .cw-site .cw-proj-stats {
    background: #f1f5f9 !important;
    color: #475569 !important;
    border-color: #e2e8f0 !important;
  }

  /* Light Mood: Capabilities & Credentials & FAQs */
  html.light .cw-site .cw-cap-box,
  [data-theme-mood="light"] .cw-site .cw-cap-box {
    background: #ffffff !important;
    border-color: #d0d7e2 !important;
  }

  html.light .cw-site .cw-cap-body h3,
  [data-theme-mood="light"] .cw-site .cw-cap-body h3 {
    color: #0f141c !important;
  }

  html.light .cw-site .cw-cap-body p,
  [data-theme-mood="light"] .cw-site .cw-cap-body p {
    color: #526071 !important;
  }

  html.light .cw-site .cw-cred-card,
  [data-theme-mood="light"] .cw-site .cw-cred-card {
    background: #ffffff !important;
    border-color: #d0d7e2 !important;
  }

  html.light .cw-site .cw-cred-title,
  [data-theme-mood="light"] .cw-site .cw-cred-title {
    color: #0f141c !important;
  }

  html.light .cw-site .cw-cred-sub,
  [data-theme-mood="light"] .cw-site .cw-cred-sub {
    color: #64748b !important;
  }

  html.light .cw-site .cw-faq-box,
  [data-theme-mood="light"] .cw-site .cw-faq-box {
    background: #ffffff !important;
    border-color: #d0d7e2 !important;
  }

  html.light .cw-site .cw-faq-btn,
  [data-theme-mood="light"] .cw-site .cw-faq-btn {
    color: #0f141c !important;
  }

  html.light .cw-site .cw-faq-answer,
  [data-theme-mood="light"] .cw-site .cw-faq-answer {
    color: #526071 !important;
    border-color: #e2e8f0 !important;
  }

  /* Light Mood: Mobile Drawer */
  html.light .cw-drawer-menu,
  [data-theme-mood="light"] .cw-drawer-menu {
    background: #ffffff !important;
    color: #0f141c !important;
  }

  html.light .cw-drawer-header,
  [data-theme-mood="light"] .cw-drawer-header {
    border-color: #d0d7e2 !important;
  }

  html.light .cw-drawer-title,
  [data-theme-mood="light"] .cw-drawer-title {
    color: #0f141c !important;
  }

  html.light .cw-drawer-link,
  [data-theme-mood="light"] .cw-drawer-link {
    color: #475569 !important;
  }

  html.light .cw-drawer-link:hover,
  [data-theme-mood="light"] .cw-drawer-link:hover {
    background: rgba(0, 68, 136, 0.08) !important;
    color: var(--cw-blueprint-blue, #004488) !important;
  }

  html.light .cw-drawer-link.active,
  [data-theme-mood="light"] .cw-drawer-link.active {
    background: rgba(0, 68, 136, 0.12) !important;
    color: var(--cw-blueprint-blue, #004488) !important;
    border-left-color: var(--cw-blueprint-blue, #004488) !important;
  }

  html.light .cw-drawer-footer,
  [data-theme-mood="light"] .cw-drawer-footer {
    background: #f1f5f9 !important;
    border-color: #d0d7e2 !important;
  }

  /* ==========================================================================
     CUSTOM BACKGROUND MODE
     ========================================================================== */
  [data-theme-bg-mode="custom"] .cw-site {
    background-color: var(--theme-bg-base) !important;
  }

  [data-theme-bg-mode="custom"] .cw-site .cw-station-card,
  [data-theme-bg-mode="custom"] .cw-site .cw-fasttrack-card,
  [data-theme-bg-mode="custom"] .cw-site .cw-cap-box,
  [data-theme-bg-mode="custom"] .cw-site .cw-project-card,
  [data-theme-bg-mode="custom"] .cw-site .cw-rfp-card {
    background-color: var(--theme-bg-card, var(--theme-bg-base)) !important;
  }

  /* ==========================================================================
     RESPONSIVE BREAKPOINTS
     ========================================================================== */
  @media (max-width: 1200px) {
    .cw-hud-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .cw-capabilities-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .cw-footer-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 900px) {
    .cw-station-grid,
    .cw-calc-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 640px) {
    .cw-hud-grid,
    .cw-capabilities-grid,
    .cw-footer-grid,
    .cw-scope-selector {
      grid-template-columns: 1fr;
    }
    .cw-station-card,
    .cw-fasttrack-card {
      padding: 24px;
    }
  }
`;

export default CivicWorksContractors;
