import React, { useEffect, useState, useMemo } from "react";
import { createPortal } from "react-dom";
import {
  Phone,
  ShieldCheck,
  Wrench,
  Clock,
  Droplet,
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  Calculator,
  ShieldAlert,
  Award,
  Zap,
  MapPin,
  Calendar,
  Sparkles,
  Building,
  Check,
} from "lucide-react";

import { imageUrl } from "../../assets/images";

const fallbackBluepeak = imageUrl("Construction/bluepeak.webp") || "/images/Construction/bluepeak.webp";

// WebP Image Imports via imageUrl helper with fallback
const heroImg = imageUrl("Construction/bluepeak/hero.webp") || fallbackBluepeak;
const emergencyImg = imageUrl("Construction/bluepeak/emergency.webp") || fallbackBluepeak;
const repipeImg = imageUrl("Construction/bluepeak/repipe.webp") || fallbackBluepeak;
const commercialImg = imageUrl("Construction/bluepeak/commercial.webp") || fallbackBluepeak;
const waterheaterImg = imageUrl("Construction/bluepeak/waterheater.webp") || fallbackBluepeak;
const drainImg = imageUrl("Construction/bluepeak/drain.webp") || fallbackBluepeak;

const navItems = [
  { id: "bp-services", label: "Core Services" },
  { id: "bp-dispatch", label: "24/7 Emergency Desk" },
  { id: "bp-estimator", label: "Hydro Estimator" },
  { id: "bp-projects", label: "Recent Work" },
  { id: "bp-coverage", label: "Service Zones" },
  { id: "bp-warranty", label: "Guarantee" },
];

const coreServices = [
  {
    id: "emergency",
    title: "24/7 Rapid Emergency Response",
    desc: "30-minute rapid SLA for burst pipes, major leaks, gas shutoffs, and severe sewer backups.",
    img: emergencyImg,
    badge: "30-MIN DISPATCH",
  },
  {
    id: "repipe",
    title: "Whole-Home Whole-Facility Repipe",
    desc: "Premium PEX-a & Type-L copper piping upgrades with zero wall destruction technology.",
    img: repipeImg,
    badge: "25-YR WARRANTY",
  },
  {
    id: "waterheater",
    title: "Tankless & Hybrid Water Heaters",
    desc: "Endless hot water installation & repairs for Navien, Rinnai, and Rheem high-efficiency units.",
    img: waterheaterImg,
    badge: "98% EFFICIENCY",
  },
  {
    id: "commercial",
    title: "Commercial & High-Rise Plumbing",
    desc: "Boiler room systems, backflow prevention, hydro-jetting, and municipal water main tie-ins.",
    img: commercialImg,
    badge: "MASTER PLUMBER",
  },
  {
    id: "drain",
    title: "Hydro-Jetting & Sewer CCTV",
    desc: "4,000 PSI hydro-scrubbing with fiber-optic HD camera inspection and trenchless pipe lining.",
    img: drainImg,
    badge: "CCTV VERIFIED",
  },
  {
    id: "hero",
    title: "Gas Line Repair & Inspection",
    desc: "DOT certified gas pressure testing, leak detection, and earthquake shut-off valve installs.",
    img: heroImg,
    badge: "DOT CERTIFIED",
  },
];

const emergencyIssues = [
  { id: "burst", title: "Burst Pipe / Major Leak", eta: "15 - 25 Mins", code: "PRIORITY-1 RED" },
  { id: "heater", title: "Water Heater Breakdown", eta: "30 - 45 Mins", code: "PRIORITY-2 AMBER" },
  { id: "sewer", title: "Main Sewer Line Backup", eta: "20 - 35 Mins", code: "PRIORITY-1 RED" },
  { id: "gas", title: "Gas Smell / Line Leak", eta: "IMMEDIATE (15 Mins)", code: "HAZMAT HAZARD" },
];

const recentProjects = [
  {
    id: "repipe-project",
    title: "Whole-Home PEX-a Repipe Upgrade",
    location: "Oakridge Estate · 3,400 Sq Ft",
    scope: "Complete lead & galvanized pipe replacement with zero drywall destruction.",
    duration: "2-Day Turnaround",
    tag: "25-YR WARRANTY",
    img: repipeImg,
  },
  {
    id: "commercial-project",
    title: "Metropolitan Commercial Boiler Overhaul",
    location: "West Point Corporate Center · 18 Floors",
    scope: "Dual industrial gas boilers and master backflow certification with zero downtime.",
    duration: "Weekend Completion",
    tag: "COMMERCIAL SLA",
    img: commercialImg,
  },
  {
    id: "drain-project",
    title: "Municipal Hydro-Scrub & Trenchless CIPP",
    location: "Harbor Point Townhomes · 6 Units",
    scope: "4,000 PSI root removal and epoxy trenchless lining restoration.",
    duration: "Same-Day Return",
    tag: "HD CCTV VERIFIED",
    img: drainImg,
  },
  {
    id: "heater-project",
    title: "Cascade Hybrid Tankless Water System",
    location: "Riverside Athletic Club",
    scope: "Triple Navien NPE-240A2 condensing setup for continuous commercial peak draw.",
    duration: "48-Hour Deployment",
    tag: "ENERGY STAR 98%",
    img: waterheaterImg,
  },
];

const serviceZones = [
  { zone: "Downtown & Financial Center", eta: "15 Mins", trucks: "4 Units On Duty" },
  { zone: "Northside & Metropolitan Suburbs", eta: "20 Mins", trucks: "6 Units On Duty" },
  { zone: "Eastside Commercial District", eta: "25 Mins", trucks: "3 Units On Duty" },
  { zone: "Westside Waterfront & Marina", eta: "20 Mins", trucks: "5 Units On Duty" },
];

export function BluePeakPlumbing() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("bp-services");

  // Emergency Dispatcher State
  const [selectedIssue, setSelectedIssue] = useState(emergencyIssues[0]);
  const [phoneSubmitted, setPhoneSubmitted] = useState(false);
  const [dispatchPhone, setDispatchPhone] = useState("");

  // Hydro Estimator State
  const [serviceType, setServiceType] = useState("repipe");
  const [propertySize, setPropertySize] = useState("medium"); // small, medium, large
  const [isEmergency, setIsEmergency] = useState(false);
  const [quoteSubmitted, setQuoteSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const scrollPos = window.scrollY + 160;

      // Top area
      if (window.scrollY < 200) {
        setActiveNav(navItems[0].id);
        return;
      }

      // Check bottom of page to highlight last item
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

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveNav(id);
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  // Instant Cost Calculation
  const estimatedCost = useMemo(() => {
    let base = 350;
    if (serviceType === "repipe") base = 1800;
    if (serviceType === "heater") base = 1200;
    if (serviceType === "drain") base = 450;
    if (serviceType === "commercial") base = 2500;

    let multiplier = 1.0;
    if (propertySize === "medium") multiplier = 1.4;
    if (propertySize === "large") multiplier = 2.2;

    let total = Math.round(base * multiplier);
    if (isEmergency) total += 150;

    return total;
  }, [serviceType, propertySize, isEmergency]);

  return (
    <div className="bp-site" id="bp-top">
      <style>{css}</style>

      {/* Simple Classic Header */}
      <header className={`bp-header ${scrolled ? "scrolled" : ""}`}>
        <div className="bp-wrap bp-header-inner">
          <a href="#bp-top" className="bp-brand-link" onClick={(e) => scrollTo(e, "bp-top")}>
            <div className="bp-brand-icon-box">
              <Wrench className="w-5 h-5 text-white" />
            </div>
            <span className="bp-brand-title">
              BluePeak <span>Plumbing</span>
            </span>
          </a>

          {/* Desktop Nav Links with Active Class */}
          <nav className="bp-nav-links" aria-label="Main Navigation">
            {navItems.map((item) => {
              const isActive = activeNav === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`bp-nav-item ${isActive ? "active" : ""}`}
                  aria-current={isActive ? "page" : undefined}
                  onClick={(e) => scrollTo(e, item.id)}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>

          <div className="bp-header-actions">
            <a href="tel:8005552583" className="bp-cta-btn">
              <Phone className="w-4 h-4" />
              (800) 555-BLUE
            </a>

            <button
              type="button"
              className="bp-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Portal */}
      {menuOpen && typeof document !== "undefined" && createPortal(
        <div className="bp-drawer-root">
          <div
            className="bp-drawer-backdrop"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="bp-drawer-menu" role="dialog" aria-modal="true" aria-label="Plumbing Navigation Menu">
            <div className="bp-drawer-header">
              <div className="flex items-center gap-2">
                <div className="bp-brand-icon-box !w-8 !h-8">
                  <Wrench className="w-4 h-4 text-white" />
                </div>
                <span className="bp-drawer-title font-extrabold text-slate-900 text-lg">BluePeak</span>
              </div>
              <button
                type="button"
                className="bp-drawer-close p-2 text-slate-600 hover:text-slate-900"
                onClick={() => setMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="bp-drawer-body">
              {navItems.map((item) => {
                const isActive = activeNav === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`bp-drawer-link ${isActive ? "active" : ""}`}
                    aria-current={isActive ? "page" : undefined}
                    onClick={(e) => scrollTo(e, item.id)}
                  >
                    <span>{item.label}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 bp-drawer-arrow" />
                  </a>
                );
              })}
            </div>

            <div className="bp-drawer-footer">
              <a
                href="tel:8005552583"
                className="bp-drawer-cta w-full bg-blue-600 text-white font-bold py-3 text-center rounded-lg flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call (800) 555-BLUE
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* 3. Hero Section */}
      <section className="bp-hero-section">
        <div className="bp-wrap">
          <div className="bp-hero-grid">
            <div>
              <div className="bp-hero-badge">
                <ShieldCheck className="w-4 h-4" />
                24/7 EMERGENCY PLUMBING & MECHANICAL EXPERTS
              </div>
              <h1 className="bp-hero-title">
                Peak Performance. <span>Reliable Flow.</span> Zero Leaks.
              </h1>
              <p className="bp-hero-p">
                From emergency burst pipe containment and hydro-jetting to whole-building repiping and tankless water heating systems—trusted by over 14,000 residential & commercial properties.
              </p>

              <div className="bp-hero-cta-row">
                <a
                  href="#bp-dispatch"
                  className="bp-btn-primary bg-[#0052cc] hover:bg-[#0041a3] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                  onClick={(e) => scrollTo(e, "bp-dispatch")}
                >
                  <ShieldAlert className="w-5 h-5" />
                  Dispatch Emergency Plumber
                </a>

                <a
                  href="#bp-estimator"
                  className="bp-btn-secondary bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold text-base px-6 py-4 rounded-xl transition-colors flex items-center gap-2"
                  onClick={(e) => scrollTo(e, "bp-estimator")}
                >
                  <Calculator className="w-5 h-5 text-blue-600 bp-calc-icon" />
                  Calculate Instant Cost
                </a>
              </div>
            </div>

            <div className="bp-hero-frame">
              <img src={heroImg} alt="BluePeak Plumbing Master Technician" />
              <div className="bp-hero-overlay-badge">
                <div className="bg-blue-600 p-3 rounded-xl text-white bp-hero-clock-box">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-base text-white margin-0">Average Response Time: 22 Mins</h4>
                  <p className="text-xs text-slate-300 margin-0">GPS-Tracked Mobile Fleet Active Nearby</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Stats HUD */}
      <section className="bp-stats-bar">
        <div className="bp-wrap">
          <div className="bp-stats-grid">
            <div className="bp-stat-card">
              <CheckCircle2 className="w-8 h-8 text-[#0099ff] bp-stat-icon" />
              <div>
                <h3>14,200+</h3>
                <p>Jobs Completed</p>
              </div>
            </div>

            <div className="bp-stat-card">
              <Clock className="w-8 h-8 text-[#0099ff] bp-stat-icon" />
              <div>
                <h3>30 Mins</h3>
                <p>Emergency SLA</p>
              </div>
            </div>

            <div className="bp-stat-card">
              <Award className="w-8 h-8 text-[#0099ff] bp-stat-icon" />
              <div>
                <h3>25-Year</h3>
                <p>Repipe Warranty</p>
              </div>
            </div>

            <div className="bp-stat-card">
              <Sparkles className="w-8 h-8 text-[#0099ff] bp-stat-icon" />
              <div>
                <h3>4.9 / 5.0</h3>
                <p>Google Verified Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Services Section */}
      <section id="bp-services" className="bp-section bg-white">
        <div className="bp-wrap">
          <div className="bp-section-head">
            <span className="bp-eyebrow">
              <Wrench className="w-3.5 h-3.5" />
              COMPLETE HYDRO & MECHANICAL CAPABILITIES
            </span>
            <h2 className="bp-section-title">Master Plumbing Solutions</h2>
          </div>

          <div className="bp-services-grid">
            {coreServices.map((service) => (
              <div key={service.id} className="bp-service-card">
                <div className="bp-service-img-wrap">
                  <img src={service.img} alt={service.title} />
                  <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-[#0099ff] border border-blue-500/30 text-xs font-mono font-bold px-3 py-1 rounded-full bp-service-badge">
                    {service.badge}
                  </span>
                </div>
                <div className="bp-service-body">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <a
                    href="#bp-estimator"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800 bp-service-link"
                    onClick={(e) => scrollTo(e, "bp-estimator")}
                  >
                    Request Service <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 24/7 Emergency Dispatcher Widget */}
      <section id="bp-dispatch" className="bp-section">
        <div className="bp-wrap">
          <div className="bp-dispatcher-card">
            <div className="bp-dispatcher-grid">
              <div>
                <span className="bp-eyebrow">
                  <ShieldAlert className="w-4 h-4 text-red-600" />
                  EMERGENCY DISPATCH DESK
                </span>
                <h2 className="bp-dispatcher-title text-3xl font-extrabold text-slate-900 mb-4">
                  Select Emergency Type for Instant Technician ETA
                </h2>
                <p className="bp-dispatcher-desc text-slate-600 text-sm mb-6">
                  Our mobile hydro response vans are equipped with thermal cameras, hydro-jetters, and pipe crimping systems.
                </p>

                <div className="space-y-3 mb-6">
                  {emergencyIssues.map((issue) => {
                    const isSelected = selectedIssue.id === issue.id;
                    return (
                      <button
                        key={issue.id}
                        type="button"
                        className={`bp-issue-btn ${isSelected ? "active" : ""}`}
                        onClick={() => setSelectedIssue(issue)}
                      >
                        <div className="flex items-center gap-3">
                          <Droplet className={`w-5 h-5 ${isSelected ? "text-blue-600 bp-issue-icon-active" : "text-slate-400"}`} />
                          <span className="font-bold text-slate-900 text-sm bp-issue-title">{issue.title}</span>
                        </div>
                        <span className="text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded bp-issue-badge">
                          {issue.code}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="bp-telemetry-box bg-slate-950 p-8 rounded-2xl border border-slate-800 text-white">
                <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-6">
                  <span className="text-xs font-mono text-slate-400">DISPATCH TELEMETRY</span>
                  <span className="flex items-center gap-2 text-xs font-mono text-green-400">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-ping"></span>
                    FLEET READY
                  </span>
                </div>

                <div className="mb-6">
                  <span className="text-xs text-slate-400 uppercase font-mono">Selected Emergency</span>
                  <h3 className="text-xl font-bold text-white mt-1">{selectedIssue.title}</h3>
                </div>

                <div className="bp-telemetry-eta-box grid grid-cols-2 gap-4 p-4 bg-slate-900 rounded-xl mb-6 border border-slate-800">
                  <div>
                    <span className="text-xs text-slate-400 font-mono">ESTIMATED ETA</span>
                    <p className="bp-eta-value text-lg font-bold text-[#0099ff]">{selectedIssue.eta}</p>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono">CALLOUT FEE</span>
                    <p className="text-lg font-bold text-green-400">$0 (Waived)</p>
                  </div>
                </div>

                {!phoneSubmitted ? (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setPhoneSubmitted(true);
                    }}
                    className="space-y-3"
                  >
                    <input
                      type="tel"
                      required
                      placeholder="Enter Phone Number for Instant Callback"
                      value={dispatchPhone}
                      onChange={(e) => setDispatchPhone(e.target.value)}
                      className="bp-input !bg-slate-900 !text-white !border-slate-800 focus:!border-blue-500"
                    />
                    <button
                      type="submit"
                      className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-3.5 rounded-xl shadow-lg transition-colors flex items-center justify-center gap-2 text-sm"
                    >
                      <Phone className="w-4 h-4" />
                      REQUEST IMMEDIATE CALL & DISPATCH
                    </button>
                  </form>
                ) : (
                  <div className="bg-emerald-950/80 border border-emerald-500/40 p-4 rounded-xl text-center">
                    <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                    <h4 className="font-bold text-white text-base">Dispatch Signal Sent!</h4>
                    <p className="text-xs text-emerald-200 mt-1">
                      Technician calling {dispatchPhone} within 60 seconds.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Instant Hydro Quote Estimator */}
      <section id="bp-estimator" className="bp-section bg-white">
        <div className="bp-wrap">
          <div className="bp-section-head">
            <span className="bp-eyebrow">
              <Calculator className="w-3.5 h-3.5" />
              TRANSPARENT PRICING CALCULATOR
            </span>
            <h2 className="bp-section-title">Instant Hydro Service Estimator</h2>
          </div>

          <div className="bp-estimator-card max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="bp-field-label block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Select Plumbing Service
                </label>
                <select
                  value={serviceType}
                  onChange={(e) => setServiceType(e.target.value)}
                  className="bp-input"
                >
                  <option value="repipe">Whole-Home PEX / Copper Repipe</option>
                  <option value="heater">Tankless Water Heater Installation</option>
                  <option value="drain">Hydro-Jetting Drain Cleaning</option>
                  <option value="commercial">Commercial Facility Maintenance</option>
                </select>
              </div>

              <div>
                <label className="bp-field-label block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Property Size / Scope
                </label>
                <select
                  value={propertySize}
                  onChange={(e) => setPropertySize(e.target.value)}
                  className="bp-input"
                >
                  <option value="small">Small (1-2 Bathrooms / Under 1,500 sq ft)</option>
                  <option value="medium">Medium (3-4 Bathrooms / 1,500 - 3,000 sq ft)</option>
                  <option value="large">Large (5+ Bathrooms / Commercial Facility)</option>
                </select>
              </div>
            </div>

            <div className="bp-checkbox-card flex items-center gap-3 mb-8 p-4 bg-white rounded-xl border border-slate-200">
              <input
                type="checkbox"
                id="bp-emergency-check"
                checked={isEmergency}
                onChange={(e) => setIsEmergency(e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded"
              />
              <label htmlFor="bp-emergency-check" className="bp-checkbox-label text-sm font-semibold text-slate-800 cursor-pointer">
                Requires 24/7 Priority Emergency Same-Day Service (+$150 Priority Fee)
              </label>
            </div>

            <div className="bp-estimator-total-box bg-slate-900 text-white p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase">Estimated All-Inclusive Investment</span>
                <div className="bp-price-value text-4xl font-extrabold text-[#0099ff] mt-1">
                  ${estimatedCost.toLocaleString()}
                </div>
                <p className="text-xs text-slate-400 mt-1">Includes parts, master labor, pressure testing & 25-yr warranty</p>
              </div>

              {!quoteSubmitted ? (
                <button
                  type="button"
                  className="bp-schedule-btn bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md flex items-center gap-2"
                  onClick={() => setQuoteSubmitted(true)}
                >
                  <Calendar className="w-5 h-5" />
                  Lock In Estimate & Schedule
                </button>
              ) : (
                <div className="bg-emerald-900/60 border border-emerald-500/40 p-3 px-6 rounded-xl text-center text-emerald-300 font-bold text-sm">
                  ✓ Estimate Locked! Dispatch calling to confirm slot.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Recent Projects / Field Performance */}
      <section id="bp-projects" className="bp-section bg-slate-50">
        <div className="bp-wrap">
          <div className="bp-section-head">
            <span className="bp-eyebrow">
              <Building className="w-3.5 h-3.5" />
              VERIFIED RESIDENTIAL & COMMERCIAL WORK
            </span>
            <h2 className="bp-section-title">Recent Project Proof</h2>
            <p className="bp-section-sub mt-3 max-w-xl mx-auto text-sm text-slate-600">
              Real installations completed with zero collateral damage, backed by official city inspection sign-offs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {recentProjects.map((project) => (
              <div key={project.id} className="bp-project-card">
                <div className="bp-project-img-box">
                  <img src={project.img} alt={project.title} />
                  <span className="bp-project-badge">{project.tag}</span>
                </div>
                <div className="bp-project-body">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono font-bold text-blue-600 bp-project-location">
                      📍 {project.location}
                    </span>
                    <span className="text-xs font-mono bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded">
                      ⏱ {project.duration}
                    </span>
                  </div>
                  <h3 className="bp-project-title text-xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="bp-project-desc text-sm text-slate-600">
                    {project.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Service Zones & Coverage Matrix */}
      <section id="bp-coverage" className="bp-section bg-navy">
        <div className="bp-wrap">
          <div className="bp-section-head">
            <span className="bp-eyebrow">
              <MapPin className="w-3.5 h-3.5" />
              REGIONAL COVERAGE & RESPONSE TIMES
            </span>
            <h2 className="bp-section-title">Active Service Zones</h2>
          </div>

          <div className="bp-zones-grid">
            {serviceZones.map((z, idx) => (
              <div key={idx} className="bp-zone-box">
                <MapPin className="w-8 h-8 text-[#0099ff] mx-auto mb-3 bp-zone-icon" />
                <h4 className="font-bold text-lg text-white mb-2">{z.zone}</h4>
                <p className="text-xs font-mono text-green-400 font-bold mb-1">ETA: {z.eta}</p>
                <p className="text-xs text-slate-400">{z.trucks}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Warranty & Guarantees */}
      <section id="bp-warranty" className="bp-section bg-white">
        <div className="bp-wrap">
          <div className="bp-section-head">
            <span className="bp-eyebrow">
              <ShieldCheck className="w-3.5 h-3.5" />
              PEAK PERFORMANCE GUARANTEE
            </span>
            <h2 className="bp-section-title">Why Property Owners Choose BluePeak</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bp-warranty-card p-8 bg-slate-50 border border-slate-200 rounded-2xl">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-4 bp-warranty-icon" />
              <h3 className="font-extrabold text-xl text-slate-900 mb-2 bp-warranty-title">100% Upfront Pricing</h3>
              <p className="text-slate-600 text-sm bp-warranty-p">
                No hidden fees or surprise hourly markups. You know the exact flat-rate cost before any work begins.
              </p>
            </div>

            <div className="bp-warranty-card p-8 bg-slate-50 border border-slate-200 rounded-2xl">
              <Award className="w-10 h-10 text-blue-600 mb-4 bp-warranty-icon" />
              <h3 className="font-extrabold text-xl text-slate-900 mb-2 bp-warranty-title">Licensed Master Plumbers</h3>
              <p className="text-slate-600 text-sm bp-warranty-p">
                Every technician is background-checked, drug-tested, and certified for residential & commercial mechanical work.
              </p>
            </div>

            <div className="bp-warranty-card p-8 bg-slate-50 border border-slate-200 rounded-2xl">
              <Zap className="w-10 h-10 text-blue-600 mb-4 bp-warranty-icon" />
              <h3 className="font-extrabold text-xl text-slate-900 mb-2 bp-warranty-title">25-Year Warranty</h3>
              <p className="text-slate-600 text-sm bp-warranty-p">
                Our repiping and major installations are backed by a written 25-year transferrable labor & materials guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 11. Simple Clean Footer */}
      <footer className="bp-footer">
        <div className="bp-wrap">
          <div className="bp-footer-grid">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bp-brand-icon-box !w-8 !h-8">
                  <Wrench className="w-4 h-4 text-white" />
                </div>
                <span className="font-extrabold text-white text-xl">BluePeak Plumbing</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed mb-4">
                Peak performance, reliable flow, and 24/7 rapid emergency hydro dispatch for residential & commercial properties across the region.
              </p>
              <p className="text-xs font-mono text-slate-400">Master Plumber Lic #BP-94021-S</p>
            </div>

            <div>
              <h4>Core Services</h4>
              <ul className="bp-footer-links">
                <li><a href="#bp-services" onClick={(e) => scrollTo(e, "bp-services")}>Emergency Repairs</a></li>
                <li><a href="#bp-services" onClick={(e) => scrollTo(e, "bp-services")}>Whole-Home Repiping</a></li>
                <li><a href="#bp-services" onClick={(e) => scrollTo(e, "bp-services")}>Tankless Water Heaters</a></li>
                <li><a href="#bp-services" onClick={(e) => scrollTo(e, "bp-services")}>Commercial Plumbing</a></li>
                <li><a href="#bp-services" onClick={(e) => scrollTo(e, "bp-services")}>Hydro-Jetting & CCTV</a></li>
              </ul>
            </div>

            <div>
              <h4>Quick Links</h4>
              <ul className="bp-footer-links">
                <li><a href="#bp-dispatch" onClick={(e) => scrollTo(e, "bp-dispatch")}>Emergency Desk</a></li>
                <li><a href="#bp-estimator" onClick={(e) => scrollTo(e, "bp-estimator")}>Instant Estimator</a></li>
                <li><a href="#bp-projects" onClick={(e) => scrollTo(e, "bp-projects")}>Recent Work</a></li>
                <li><a href="#bp-coverage" onClick={(e) => scrollTo(e, "bp-coverage")}>Service Zones</a></li>
                <li><a href="#bp-warranty" onClick={(e) => scrollTo(e, "bp-warranty")}>Our Guarantee</a></li>
              </ul>
            </div>

            <div>
              <h4>Emergency Hotline</h4>
              <p className="text-sm text-slate-300 mb-3">Available 24 Hours a Day, 7 Days a Week</p>
              <a
                href="tel:8005552583"
                className="bp-hotline-btn inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
              >
                <Phone className="w-4 h-4" /> (800) 555-BLUE
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} BluePeak Plumbing Inc. All rights reserved. Registered Master Plumbers.
          </div>
        </div>
      </footer>
    </div>
  );
}

const css = `
  /* ==========================================================================
     BLUEPEAK PLUMBING - THEME ENGINE & DYNAMIC ADAPTIVE COLOR SYSTEM
     ========================================================================== */
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,400;0,500;0,600;0,700;0,800;1,700&family=Outfit:wght@600;700;800;900&family=JetBrains+Mono:wght@500;700&display=swap');

  .bp-site {
    /* Brand Accent Colors (Theme Selector Compatible) */
    --bp-blue-primary: var(--theme-accent-primary, #0052cc);
    --bp-blue-hover:   var(--theme-accent-primary-hover, #0041a3);
    --bp-cyan-bright:  var(--theme-accent-secondary, #0099ff);
    --bp-cyan-glow:    var(--theme-accent-glow, rgba(0, 153, 255, 0.35));

    /* Surface & Background System (Light Mood Defaults) */
    --bp-light-bg:     var(--theme-bg-base, #f8fafc);
    --bp-surface:      var(--theme-bg-surface, #ffffff);
    --bp-light-card:   var(--theme-bg-card, #ffffff);
    --bp-card-muted:   var(--theme-bg-card-hover, #f1f5f9);
    --bp-light-border: var(--theme-border, #e2e8f0);
    --bp-border-subtle: #cbd5e1;

    /* Typography Hierarchy */
    --bp-text-dark:    var(--theme-text-primary, #0f172a);
    --bp-text-muted:   var(--theme-text-muted, #475569);
    --bp-text-dim:     var(--theme-text-secondary, #64748b);
    --bp-text-light:   #f8fafc;
    --bp-text-light-muted: #94a3b8;

    /* Navy High-Contrast Contrast Sections */
    --bp-navy-dark:    #0a1424;
    --bp-navy-card:    #12213a;
    --bp-navy-border:  rgba(255, 255, 255, 0.1);

    /* Glassmorphism Header */
    --bp-header-bg:    rgba(255, 255, 255, 0.94);
    --bp-header-border: #e2e8f0;
    --bp-hero-bg:      linear-gradient(180deg, #ffffff 0%, var(--bp-light-bg) 100%);
    --bp-section-alt-bg: #f8fafc;

    background-color: var(--bp-light-bg);
    color: var(--bp-text-dark);
    font-family: 'Plus Jakarta Sans', system-ui, -apple-system, sans-serif;
    line-height: 1.6;
    overflow-x: clip;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  .bp-site * {
    box-sizing: border-box;
  }

  .bp-site a {
    text-decoration: none;
    color: inherit;
  }

  .bp-font-display {
    font-family: 'Outfit', sans-serif;
  }

  .bp-font-mono {
    font-family: 'JetBrains Mono', monospace;
  }

  .bp-wrap {
    width: min(1320px, calc(100% - 48px));
    margin-inline: auto;
  }

  @media (max-width: 640px) {
    .bp-wrap {
      width: calc(100% - 32px);
    }
  }

  /* ==========================================================================
     HEADER & NAV BAR WITH PROMINENT ACTIVE CLASS
     ========================================================================== */
  .bp-header {
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--bp-header-bg);
    border-bottom: 1px solid var(--bp-header-border);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    backdrop-filter: blur(14px);
    -webkit-backdrop-filter: blur(14px);
    transition: background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .bp-header.scrolled {
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  }

  .bp-header-inner {
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
  }

  .bp-brand-link {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    flex-shrink: 0;
  }

  .bp-brand-icon-box {
    width: 34px;
    height: 34px;
    background: var(--bp-blue-primary);
    color: #ffffff;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 2px 8px var(--bp-cyan-glow);
    transition: background-color 0.25s ease, box-shadow 0.25s ease;
  }

  .bp-brand-title {
    font-family: 'Outfit', sans-serif;
    font-size: 1.25rem;
    font-weight: 800;
    color: var(--bp-text-dark);
    letter-spacing: -0.01em;
  }

  .bp-brand-title span {
    color: var(--bp-blue-primary);
    font-weight: 500;
    transition: color 0.25s ease;
  }

  /* Navigation Links Container */
  .bp-nav-links {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  /* Nav Item & Active Class Indicator */
  .bp-nav-item {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.8125rem;
    font-weight: 600;
    color: var(--bp-text-muted);
    text-decoration: none;
    padding: 7px 14px;
    border-radius: 9999px;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .bp-nav-item:hover {
    color: var(--bp-blue-primary);
    background: color-mix(in srgb, var(--bp-blue-primary) 8%, transparent);
  }

  /* ACTIVE CLASS: Clear, high-contrast, modern active state pill */
  .bp-nav-item.active {
    color: var(--bp-blue-primary) !important;
    background: color-mix(in srgb, var(--bp-blue-primary) 12%, transparent) !important;
    font-weight: 700;
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--bp-blue-primary) 28%, transparent);
  }

  .bp-nav-item.active::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    width: 14px;
    height: 2.5px;
    border-radius: 9999px;
    background-color: var(--bp-blue-primary);
    transition: width 0.2s ease, background-color 0.2s ease;
  }

  .bp-header-actions {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-shrink: 0;
  }

  .bp-cta-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 700;
    border-radius: 8px;
    font-size: 0.8125rem;
    height: 38px;
    padding: 0 16px;
    background: var(--bp-blue-primary);
    color: #ffffff;
    text-decoration: none;
    white-space: nowrap;
    box-shadow: 0 2px 8px var(--bp-cyan-glow);
    transition: background 0.15s ease, transform 0.15s ease;
  }

  .bp-cta-btn:hover {
    background: var(--bp-blue-hover);
    transform: translateY(-1px);
  }

  .bp-menu-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    border-radius: 8px;
    border: 1px solid var(--bp-light-border);
    background: var(--bp-light-card);
    color: var(--bp-text-dark);
    cursor: pointer;
    transition: all 0.2s ease;
  }

  .bp-menu-toggle:hover {
    border-color: var(--bp-blue-primary);
    color: var(--bp-blue-primary);
  }

  @media (min-width: 1024px) {
    .bp-nav-links {
      display: flex !important;
    }
    .bp-menu-toggle {
      display: none !important;
    }
  }

  @media (max-width: 1023px) {
    .bp-nav-links {
      display: none !important;
    }
    .bp-menu-toggle {
      display: flex !important;
    }
  }

  @media (max-width: 520px) {
    .bp-cta-btn {
      display: none !important;
    }
  }

  /* ==========================================================================
     MOBILE PORTAL DRAWER MENU WITH ACTIVE STATE
     ========================================================================== */
  .bp-drawer-root {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: 99999;
    pointer-events: auto;
  }

  .bp-drawer-backdrop {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 20, 36, 0.72);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    z-index: 100000;
    cursor: pointer;
  }

  .bp-drawer-menu {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: min(340px, 86vw);
    height: 100%;
    height: 100dvh;
    background: var(--bp-surface);
    color: var(--bp-text-dark);
    z-index: 100001;
    box-shadow: -10px 0 40px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  .bp-drawer-header {
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--bp-light-border);
  }

  .bp-drawer-body {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 8px;
    flex-grow: 1;
  }

  .bp-drawer-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-radius: 10px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-size: 0.95rem;
    font-weight: 600;
    color: var(--bp-text-dark);
    transition: all 0.2s ease;
    text-decoration: none;
  }

  .bp-drawer-link:hover {
    background: color-mix(in srgb, var(--bp-blue-primary) 8%, transparent);
    color: var(--bp-blue-primary);
  }

  /* DRAWER ACTIVE STATE */
  .bp-drawer-link.active {
    background: color-mix(in srgb, var(--bp-blue-primary) 14%, transparent) !important;
    color: var(--bp-blue-primary) !important;
    font-weight: 700 !important;
    border-left: 4px solid var(--bp-blue-primary) !important;
    padding-left: 14px;
  }

  .bp-drawer-link.active .bp-drawer-arrow {
    color: var(--bp-blue-primary) !important;
    transform: translateX(3px);
  }

  .bp-drawer-footer {
    padding: 20px;
    border-top: 1px solid var(--bp-light-border);
    display: flex;
    flex-direction: column;
    gap: 12px;
    background: var(--bp-card-muted);
  }

  .bp-drawer-cta {
    background-color: var(--bp-blue-primary);
    transition: background-color 0.2s ease;
  }
  .bp-drawer-cta:hover {
    background-color: var(--bp-blue-hover);
  }

  /* ==========================================================================
     PAGE SECTIONS & COMPONENTS
     ========================================================================== */
  .bp-hero-section {
    padding: 72px 0 96px;
    background: var(--bp-hero-bg);
    position: relative;
    transition: background 0.25s ease;
  }

  .bp-hero-grid {
    display: grid;
    grid-template-columns: 1.15fr 0.85fr;
    gap: 48px;
    align-items: center;
  }

  .bp-hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: color-mix(in srgb, var(--bp-blue-primary) 10%, transparent);
    border: 1px solid color-mix(in srgb, var(--bp-blue-primary) 28%, transparent);
    color: var(--bp-blue-primary);
    padding: 6px 14px;
    border-radius: 9999px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    font-weight: 700;
    margin-bottom: 24px;
  }

  .bp-hero-title {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(2.8rem, 5.2vw, 4.2rem);
    font-weight: 900;
    line-height: 1.05;
    color: var(--bp-text-dark);
    letter-spacing: -0.02em;
    margin-bottom: 24px;
  }

  .bp-hero-title span {
    color: var(--bp-blue-primary);
    transition: color 0.25s ease;
  }

  .bp-hero-p {
    font-size: 1.125rem;
    color: var(--bp-text-muted);
    line-height: 1.7;
    margin-bottom: 36px;
  }

  .bp-hero-cta-row {
    display: flex;
    align-items: center;
    gap: 16px;
    flex-wrap: wrap;
  }

  .bp-hero-frame {
    position: relative;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 25px 60px rgba(10, 20, 36, 0.15);
  }

  .bp-hero-frame img {
    width: 100%;
    height: 480px;
    object-fit: cover;
  }

  .bp-hero-overlay-badge {
    position: absolute;
    bottom: 24px;
    left: 24px;
    right: 24px;
    background: rgba(10, 20, 36, 0.88);
    backdrop-filter: blur(12px);
    color: #ffffff;
    padding: 20px;
    border-radius: 14px;
    border: 1px solid rgba(255, 255, 255, 0.15);
    display: flex;
    align-items: center;
    gap: 16px;
  }

  /* Stats HUD */
  .bp-stats-bar {
    background: var(--bp-navy-dark);
    color: #ffffff;
    padding: 32px 0;
    border-top: 1px solid var(--bp-navy-border);
    border-bottom: 1px solid var(--bp-navy-border);
  }

  .bp-stats-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }

  .bp-stat-card {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 0 16px;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }

  .bp-stat-card:last-child {
    border-right: none;
  }

  .bp-stat-card h3 {
    font-family: 'Outfit', sans-serif;
    font-size: 2rem;
    font-weight: 800;
    color: #ffffff;
    margin: 0;
    line-height: 1;
  }

  .bp-stat-card p {
    font-size: 0.8125rem;
    color: var(--bp-text-light-muted);
    margin: 4px 0 0;
  }

  /* Section Headings */
  .bp-section {
    padding: 96px 0;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  .bp-section.bg-white {
    background: var(--bp-surface);
  }

  .bp-section.bg-slate-50 {
    background: var(--bp-section-alt-bg);
  }

  .bp-section.bg-navy {
    background: var(--bp-navy-dark);
    color: #ffffff;
  }

  .bp-section-head {
    text-align: center;
    max-width: 720px;
    margin: 0 auto 56px;
  }

  .bp-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.75rem;
    font-weight: 700;
    color: var(--bp-blue-primary);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 12px;
    transition: color 0.25s ease;
  }

  .bp-section.bg-navy .bp-eyebrow {
    color: var(--bp-cyan-bright);
  }

  .bp-section-title {
    font-family: 'Outfit', sans-serif;
    font-size: clamp(2.2rem, 4vw, 3.2rem);
    font-weight: 800;
    color: var(--bp-text-dark);
    line-height: 1.1;
    letter-spacing: -0.01em;
  }

  .bp-section.bg-navy .bp-section-title {
    color: #ffffff;
  }

  /* Core Services Grid */
  .bp-services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  .bp-service-card {
    background: var(--bp-light-card);
    border-radius: 16px;
    border: 1px solid var(--bp-light-border);
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
    flex-direction: column;
  }

  .bp-service-card:hover {
    transform: translateY(-6px);
    border-color: var(--bp-blue-primary);
    box-shadow: 0 20px 40px var(--bp-cyan-glow);
  }

  .bp-service-img-wrap {
    height: 220px;
    overflow: hidden;
    position: relative;
  }

  .bp-service-img-wrap img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .bp-service-card:hover .bp-service-img-wrap img {
    transform: scale(1.08);
  }

  .bp-service-body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .bp-service-body h3 {
    font-family: 'Outfit', sans-serif;
    font-size: 1.3rem;
    font-weight: 800;
    color: var(--bp-text-dark);
    margin: 0 0 10px;
  }

  .bp-service-body p {
    font-size: 0.9rem;
    color: var(--bp-text-muted);
    line-height: 1.6;
    margin-bottom: 20px;
  }

  /* Interactive Dispatcher Widget */
  .bp-dispatcher-card {
    background: var(--bp-light-card);
    border-radius: 20px;
    border: 1px solid var(--bp-light-border);
    box-shadow: 0 20px 50px rgba(15, 23, 42, 0.06);
    padding: 44px;
    transition: background-color 0.25s ease, border-color 0.25s ease;
  }

  .bp-dispatcher-grid {
    display: grid;
    grid-template-columns: 1.1fr 0.9fr;
    gap: 48px;
    align-items: center;
  }

  .bp-issue-btn {
    width: 100%;
    background: var(--bp-card-muted);
    border: 1px solid var(--bp-light-border);
    border-radius: 12px;
    padding: 16px;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .bp-issue-btn:hover {
    border-color: var(--bp-blue-primary);
  }

  .bp-issue-btn.active {
    border-color: var(--bp-blue-primary);
    background: color-mix(in srgb, var(--bp-blue-primary) 10%, transparent);
    box-shadow: 0 0 0 2px var(--bp-blue-primary);
  }

  /* Recent Projects Showcase */
  .bp-project-card {
    background: var(--bp-light-card);
    border: 1px solid var(--bp-light-border);
    border-radius: 18px;
    overflow: hidden;
    transition: all 0.25s ease;
    box-shadow: 0 10px 30px rgba(15, 23, 42, 0.04);
    display: flex;
    flex-direction: column;
  }

  .bp-project-card:hover {
    transform: translateY(-4px);
    border-color: var(--bp-blue-primary);
    box-shadow: 0 20px 40px var(--bp-cyan-glow);
  }

  .bp-project-img-box {
    position: relative;
    height: 240px;
    overflow: hidden;
  }

  .bp-project-img-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  .bp-project-card:hover .bp-project-img-box img {
    transform: scale(1.06);
  }

  .bp-project-badge {
    position: absolute;
    top: 14px;
    right: 14px;
    background: rgba(10, 20, 36, 0.85);
    color: var(--bp-cyan-bright);
    border: 1px solid rgba(0, 153, 255, 0.35);
    backdrop-filter: blur(8px);
    font-family: 'JetBrains Mono', monospace;
    font-size: 0.72rem;
    font-weight: 700;
    padding: 4px 10px;
    border-radius: 9999px;
  }

  .bp-project-body {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  /* Service Zones Grid */
  .bp-zones-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
  }

  .bp-zone-box {
    background: var(--bp-navy-card);
    border: 1px solid var(--bp-navy-border);
    border-radius: 14px;
    padding: 24px;
    text-align: center;
    transition: all 0.25s ease;
  }

  .bp-zone-box:hover {
    border-color: var(--bp-cyan-bright);
    transform: translateY(-4px);
  }

  /* Form Controls */
  .bp-input {
    width: 100%;
    background: var(--bp-light-card);
    border: 1px solid var(--bp-light-border);
    border-radius: 8px;
    padding: 14px 16px;
    font-size: 0.9375rem;
    font-family: inherit;
    color: var(--bp-text-dark);
    outline: none;
    transition: all 0.2s ease;
  }

  .bp-input:focus {
    border-color: var(--bp-blue-primary);
    box-shadow: 0 0 0 3px color-mix(in srgb, var(--bp-blue-primary) 20%, transparent);
  }

  /* Footer */
  .bp-footer {
    background: var(--bp-navy-dark);
    color: var(--bp-text-light-muted);
    border-top: 1px solid var(--bp-navy-border);
    padding: 80px 0 36px;
  }

  .bp-footer-grid {
    display: grid;
    grid-template-columns: 1.4fr 0.9fr 0.9fr 1.2fr;
    gap: 48px;
    margin-bottom: 64px;
  }

  .bp-footer-col h4,
  .bp-footer-grid h4 {
    font-family: 'Outfit', sans-serif;
    font-size: 1.2rem;
    font-weight: 800;
    color: #ffffff;
    margin-bottom: 20px;
  }

  .bp-footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    font-size: 0.875rem;
  }

  .bp-footer-links a:hover {
    color: var(--bp-cyan-bright);
  }

  /* ==========================================================================
     THEME SELECTOR & PRESET DYNAMIC RE-COLORING
     ========================================================================== */
  [data-theme-preset]:not([data-theme-preset="original"]) .bp-site,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site,
  [data-theme-preset]:not([data-theme-preset="original"]) .bp-drawer-menu,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-drawer-menu {
    --bp-blue-primary: var(--theme-accent-primary, #0052cc) !important;
    --bp-blue-hover:   var(--theme-accent-primary-hover, #0041a3) !important;
    --bp-cyan-bright:  var(--theme-accent-secondary, #0099ff) !important;
    --bp-cyan-glow:    var(--theme-accent-glow, rgba(0, 153, 255, 0.35)) !important;
  }

  /* Dynamic Preset Buttons, Badges & Accents */
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-btn-primary,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site [class*="bg-[#0052cc]"],
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site button.bg-blue-600,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site a.bg-blue-600,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-hero-clock-box,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-schedule-btn,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-hotline-btn,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-cta-btn,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-drawer-menu .bp-drawer-cta {
    background-color: var(--bp-blue-primary) !important;
    color: #ffffff !important;
  }

  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-btn-primary:hover,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site [class*="hover:bg-[#0041a3]"]:hover,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site button.hover\\:bg-blue-700:hover,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site a.hover\\:bg-blue-700:hover,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-schedule-btn:hover,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-hotline-btn:hover,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-cta-btn:hover {
    background-color: var(--bp-blue-hover) !important;
  }

  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-stat-icon,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-service-badge,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-price-value,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-eta-value,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-zone-icon,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-project-badge,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site [class*="text-[#0099ff]"] {
    color: var(--bp-cyan-bright) !important;
  }

  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-calc-icon,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-service-link,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-issue-icon-active,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-warranty-icon,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-project-location,
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site [class*="text-blue-600"] {
    color: var(--bp-blue-primary) !important;
  }

  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-issue-btn.active {
    border-color: var(--bp-blue-primary) !important;
    box-shadow: 0 0 0 2px var(--bp-blue-primary) !important;
  }

  /* Active Nav Item under theme presets */
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-nav-item.active {
    color: var(--bp-blue-primary) !important;
    background: color-mix(in srgb, var(--bp-blue-primary) 14%, transparent) !important;
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--bp-blue-primary) 35%, transparent) !important;
  }
  [data-theme-active="true"]:not([data-theme-preset="original"]) .bp-site .bp-nav-item.active::after {
    background-color: var(--bp-blue-primary) !important;
  }

  /* ==========================================================================
     DARK MOOD SYSTEM OVERRIDES (SEAMLESS DARK MODE)
     ========================================================================== */
  html.dark .bp-site,
  body.dark .bp-site,
  :root.dark .bp-site,
  [data-theme-mood="dark"] .bp-site,
  :root[data-theme-mood="dark"] .bp-site,
  :root[data-theme-active="true"][data-theme-mood="dark"] .bp-site {
    --bp-light-bg:     var(--theme-bg-base, #070d18);
    --bp-surface:      var(--theme-bg-surface, #0c1626);
    --bp-light-card:   var(--theme-bg-card, #101e34);
    --bp-card-muted:   var(--theme-bg-card-hover, #162844);
    --bp-section-alt-bg: #091322;
    --bp-light-border: var(--theme-border, rgba(255, 255, 255, 0.12));
    --bp-border-subtle: rgba(255, 255, 255, 0.18);

    --bp-text-dark:    var(--theme-text-primary, #f8fafc);
    --bp-text-muted:   var(--theme-text-muted, #cbd5e1);
    --bp-text-dim:     var(--theme-text-secondary, #94a3b8);

    --bp-header-bg:    rgba(10, 20, 36, 0.94);
    --bp-header-border: rgba(255, 255, 255, 0.1);
    --bp-hero-bg:      linear-gradient(180deg, #0b1526 0%, var(--bp-light-bg) 100%);

    --bp-navy-dark:    #060c16;
    --bp-navy-card:    #0d192c;
    --bp-navy-border:  rgba(255, 255, 255, 0.12);
  }

  /* Active Nav Item in Dark Mood */
  html.dark .bp-site .bp-nav-item.active,
  [data-theme-mood="dark"] .bp-site .bp-nav-item.active {
    color: var(--bp-cyan-bright) !important;
    background: color-mix(in srgb, var(--bp-cyan-bright) 16%, transparent) !important;
    box-shadow: inset 0 0 0 1px color-mix(in srgb, var(--bp-cyan-bright) 35%, transparent) !important;
  }
  html.dark .bp-site .bp-nav-item.active::after,
  [data-theme-mood="dark"] .bp-site .bp-nav-item.active::after {
    background-color: var(--bp-cyan-bright) !important;
  }

  /* Dark Mood Component Adaptations */
  html.dark .bp-site .bp-hero-section,
  [data-theme-mood="dark"] .bp-site .bp-hero-section {
    background: var(--bp-hero-bg);
  }

  html.dark .bp-site .bp-section.bg-white,
  [data-theme-mood="dark"] .bp-site .bp-section.bg-white {
    background: var(--bp-surface) !important;
  }

  html.dark .bp-site .bp-section.bg-slate-50,
  [data-theme-mood="dark"] .bp-site .bp-section.bg-slate-50 {
    background: var(--bp-section-alt-bg) !important;
  }

  html.dark .bp-site .bp-service-card,
  [data-theme-mood="dark"] .bp-site .bp-service-card,
  html.dark .bp-site .bp-dispatcher-card,
  [data-theme-mood="dark"] .bp-site .bp-dispatcher-card,
  html.dark .bp-site .bp-estimator-card,
  [data-theme-mood="dark"] .bp-site .bp-estimator-card,
  html.dark .bp-site .bp-project-card,
  [data-theme-mood="dark"] .bp-site .bp-project-card,
  html.dark .bp-site .bp-warranty-card,
  [data-theme-mood="dark"] .bp-site .bp-warranty-card {
    background-color: var(--bp-light-card) !important;
    border-color: var(--bp-light-border) !important;
  }

  html.dark .bp-site .bp-btn-secondary,
  [data-theme-mood="dark"] .bp-site .bp-btn-secondary {
    background-color: var(--bp-card-muted) !important;
    color: var(--bp-text-dark) !important;
    border-color: var(--bp-light-border) !important;
  }

  html.dark .bp-site .bp-btn-secondary:hover,
  [data-theme-mood="dark"] .bp-site .bp-btn-secondary:hover {
    background-color: var(--bp-surface) !important;
  }

  html.dark .bp-site .bp-checkbox-card,
  [data-theme-mood="dark"] .bp-site .bp-checkbox-card {
    background-color: var(--bp-card-muted) !important;
    border-color: var(--bp-light-border) !important;
  }

  html.dark .bp-site .bp-checkbox-label,
  [data-theme-mood="dark"] .bp-site .bp-checkbox-label,
  html.dark .bp-site .bp-field-label,
  [data-theme-mood="dark"] .bp-site .bp-field-label,
  html.dark .bp-site .bp-issue-title,
  [data-theme-mood="dark"] .bp-site .bp-issue-title,
  html.dark .bp-site .bp-dispatcher-title,
  [data-theme-mood="dark"] .bp-site .bp-dispatcher-title,
  html.dark .bp-site .bp-project-title,
  [data-theme-mood="dark"] .bp-site .bp-project-title,
  html.dark .bp-site .bp-warranty-title,
  [data-theme-mood="dark"] .bp-site .bp-warranty-title {
    color: var(--bp-text-dark) !important;
  }

  html.dark .bp-site .bp-dispatcher-desc,
  [data-theme-mood="dark"] .bp-site .bp-dispatcher-desc,
  html.dark .bp-site .bp-project-desc,
  [data-theme-mood="dark"] .bp-site .bp-project-desc,
  html.dark .bp-site .bp-warranty-p,
  [data-theme-mood="dark"] .bp-site .bp-warranty-p {
    color: var(--bp-text-muted) !important;
  }

  html.dark .bp-site .bp-input,
  [data-theme-mood="dark"] .bp-site .bp-input {
    background-color: var(--bp-card-muted) !important;
    border-color: var(--bp-light-border) !important;
    color: var(--bp-text-dark) !important;
  }

  html.dark .bp-site .bp-input option,
  [data-theme-mood="dark"] .bp-site .bp-input option {
    background-color: var(--bp-navy-card) !important;
    color: #ffffff !important;
  }

  html.dark .bp-site .bp-menu-toggle,
  [data-theme-mood="dark"] .bp-site .bp-menu-toggle {
    background: var(--bp-light-card) !important;
    border-color: var(--bp-light-border) !important;
    color: var(--bp-text-dark) !important;
  }

  /* Universal Dark Mode Slate Text Adjustments */
  html.dark .bp-site [class*="text-slate-900"],
  [data-theme-mood="dark"] .bp-site [class*="text-slate-900"],
  html.dark .bp-site [class*="text-slate-800"],
  [data-theme-mood="dark"] .bp-site [class*="text-slate-800"] {
    color: var(--bp-text-dark) !important;
  }

  html.dark .bp-site [class*="text-slate-700"],
  [data-theme-mood="dark"] .bp-site [class*="text-slate-700"],
  html.dark .bp-site [class*="text-slate-600"],
  [data-theme-mood="dark"] .bp-site [class*="text-slate-600"] {
    color: var(--bp-text-muted) !important;
  }

  html.dark .bp-site [class*="border-slate-200"],
  [data-theme-mood="dark"] .bp-site [class*="border-slate-200"] {
    border-color: var(--bp-light-border) !important;
  }

  /* Dark Mood Mobile Drawer */
  html.dark .bp-drawer-menu,
  [data-theme-mood="dark"] .bp-drawer-menu,
  :root.dark .bp-drawer-menu {
    background-color: var(--theme-bg-surface, #0c1626) !important;
    color: var(--theme-text-primary, #f8fafc) !important;
  }

  html.dark .bp-drawer-header,
  [data-theme-mood="dark"] .bp-drawer-header {
    border-color: var(--theme-border, rgba(255, 255, 255, 0.12)) !important;
  }

  html.dark .bp-drawer-title,
  [data-theme-mood="dark"] .bp-drawer-title {
    color: var(--theme-text-primary, #f8fafc) !important;
  }

  html.dark .bp-drawer-close,
  [data-theme-mood="dark"] .bp-drawer-close {
    color: var(--theme-text-muted, #94a3b8) !important;
  }

  html.dark .bp-drawer-link,
  [data-theme-mood="dark"] .bp-drawer-link {
    color: var(--theme-text-primary, #f8fafc) !important;
  }

  html.dark .bp-drawer-link:hover,
  [data-theme-mood="dark"] .bp-drawer-link:hover {
    background: rgba(255, 255, 255, 0.08) !important;
    color: var(--bp-cyan-bright) !important;
  }

  html.dark .bp-drawer-link.active,
  [data-theme-mood="dark"] .bp-drawer-link.active {
    background: color-mix(in srgb, var(--bp-cyan-bright) 18%, transparent) !important;
    color: var(--bp-cyan-bright) !important;
    border-left-color: var(--bp-cyan-bright) !important;
  }

  html.dark .bp-drawer-footer,
  [data-theme-mood="dark"] .bp-drawer-footer {
    background-color: var(--theme-bg-base, #070d18) !important;
    border-color: var(--theme-border, rgba(255, 255, 255, 0.12)) !important;
  }

  /* ==========================================================================
     LIGHT MOOD OVERRIDES
     ========================================================================== */
  html.light .bp-site,
  body.light .bp-site,
  :root.light .bp-site,
  [data-theme-mood="light"] .bp-site,
  :root[data-theme-mood="light"] .bp-site,
  :root[data-theme-active="true"][data-theme-mood="light"] .bp-site {
    --bp-light-bg:     var(--theme-bg-base, #f8fafc);
    --bp-surface:      var(--theme-bg-surface, #ffffff);
    --bp-light-card:   var(--theme-bg-card, #ffffff);
    --bp-card-muted:   var(--theme-bg-card-hover, #f1f5f9);
    --bp-section-alt-bg: #f8fafc;
    --bp-light-border: var(--theme-border, #e2e8f0);

    --bp-text-dark:    var(--theme-text-primary, #0f172a);
    --bp-text-muted:   var(--theme-text-muted, #475569);
    --bp-text-dim:     var(--theme-text-secondary, #64748b);

    --bp-header-bg:    rgba(255, 255, 255, 0.94);
    --bp-header-border: #e2e8f0;
    --bp-hero-bg:      linear-gradient(180deg, #ffffff 0%, var(--bp-light-bg) 100%);
  }

  /* ==========================================================================
     CUSTOM BACKGROUND MODE
     ========================================================================== */
  [data-theme-bg-mode="custom"] .bp-site {
    background-color: var(--theme-bg-base) !important;
  }

  [data-theme-bg-mode="custom"] .bp-site .bp-hero-section {
    background: linear-gradient(180deg, var(--theme-bg-surface, var(--theme-bg-base)) 0%, var(--theme-bg-base) 100%) !important;
  }

  [data-theme-bg-mode="custom"] .bp-site .bp-section.bg-white,
  [data-theme-bg-mode="custom"] .bp-site .bp-section.bg-slate-50 {
    background-color: var(--theme-bg-surface, var(--theme-bg-base)) !important;
  }

  [data-theme-bg-mode="custom"] .bp-site .bp-service-card,
  [data-theme-bg-mode="custom"] .bp-site .bp-dispatcher-card,
  [data-theme-bg-mode="custom"] .bp-site .bp-estimator-card,
  [data-theme-bg-mode="custom"] .bp-site .bp-project-card,
  [data-theme-bg-mode="custom"] .bp-site .bp-warranty-card {
    background-color: var(--theme-bg-card, var(--theme-bg-base)) !important;
  }

  /* ==========================================================================
     RESPONSIVE BREAKPOINTS
     ========================================================================== */
  @media (max-width: 1200px) {
    .bp-services-grid,
    .bp-zones-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .bp-footer-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 900px) {
    .bp-hero-grid,
    .bp-dispatcher-grid {
      grid-template-columns: 1fr;
    }
    .bp-stats-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 640px) {
    .bp-services-grid,
    .bp-zones-grid,
    .bp-stats-grid,
    .bp-footer-grid {
      grid-template-columns: 1fr;
    }
    .bp-dispatcher-card {
      padding: 24px;
    }
  }
`;
