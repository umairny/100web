import React, { useEffect, useState, useMemo } from "react";
import { createPortal } from "react-dom";
import {
  Phone,
  ShieldCheck,
  Wrench,
  Clock,
  Droplet,
  Flame,
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
} from "lucide-react";
import "./BluePeakPlumbing.css";

// WebP Image Imports
import heroImg from "../../assets/optimized/Construction/bluepeak/hero.webp";
import emergencyImg from "../../assets/optimized/Construction/bluepeak/emergency.webp";
import repipeImg from "../../assets/optimized/Construction/bluepeak/repipe.webp";
import commercialImg from "../../assets/optimized/Construction/bluepeak/commercial.webp";
import waterheaterImg from "../../assets/optimized/Construction/bluepeak/waterheater.webp";
import drainImg from "../../assets/optimized/Construction/bluepeak/drain.webp";

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

      const offset = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= offset) {
          setActiveNav(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveNav(id);
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
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

          {/* Desktop Nav Links */}
          <nav className="bp-nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`bp-nav-item ${activeNav === item.id ? "active" : ""}`}
                onClick={(e) => scrollTo(e, item.id)}
              >
                {item.label}
              </a>
            ))}
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
                <span className="font-extrabold text-slate-900 text-lg">BluePeak</span>
              </div>
              <button
                type="button"
                className="p-2 text-slate-600 hover:text-slate-900"
                onClick={() => setMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="bp-drawer-body">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`bp-drawer-link ${activeNav === item.id ? "active" : ""}`}
                  onClick={(e) => scrollTo(e, item.id)}
                >
                  {item.label}
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="bp-drawer-footer">
              <a
                href="tel:8005552583"
                className="w-full bg-blue-600 text-white font-bold py-3 text-center rounded-lg flex items-center justify-center gap-2"
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
              <h2 className="bp-hero-title">
                Peak Performance. <span>Reliable Flow.</span> Zero Leaks.
              </h2>
              <p className="bp-hero-p">
                From emergency burst pipe containment and hydro-jetting to whole-building repiping and tankless water heating systems—trusted by over 14,000 residential & commercial properties.
              </p>

              <div className="bp-hero-cta-row">
                <a
                  href="#bp-dispatch"
                  className="bg-[#0052cc] hover:bg-[#0041a3] text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-center gap-2"
                  onClick={(e) => scrollTo(e, "bp-dispatch")}
                >
                  <ShieldAlert className="w-5 h-5" />
                  Dispatch Emergency Plumber
                </a>

                <a
                  href="#bp-estimator"
                  className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-bold text-base px-6 py-4 rounded-xl transition-colors flex items-center gap-2"
                  onClick={(e) => scrollTo(e, "bp-estimator")}
                >
                  <Calculator className="w-5 h-5 text-blue-600" />
                  Calculate Instant Cost
                </a>
              </div>
            </div>

            <div className="bp-hero-frame">
              <img src={heroImg} alt="BluePeak Plumbing Master Technician" />
              <div className="bp-hero-overlay-badge">
                <div className="bg-blue-600 p-3 rounded-xl text-white">
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
              <CheckCircle2 className="w-8 h-8 text-[#0099ff]" />
              <div>
                <h3>14,200+</h3>
                <p>Jobs Completed</p>
              </div>
            </div>

            <div className="bp-stat-card">
              <Clock className="w-8 h-8 text-[#0099ff]" />
              <div>
                <h3>30 Mins</h3>
                <p>Emergency SLA</p>
              </div>
            </div>

            <div className="bp-stat-card">
              <Award className="w-8 h-8 text-[#0099ff]" />
              <div>
                <h3>25-Year</h3>
                <p>Repipe Warranty</p>
              </div>
            </div>

            <div className="bp-stat-card">
              <Sparkles className="w-8 h-8 text-[#0099ff]" />
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
                  <span className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-md text-[#0099ff] border border-blue-500/30 text-xs font-mono font-bold px-3 py-1 rounded-full">
                    {service.badge}
                  </span>
                </div>
                <div className="bp-service-body">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <a
                    href="#bp-estimator"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-blue-600 hover:text-blue-800"
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
                <h2 className="text-3xl font-extrabold text-slate-900 mb-4">
                  Select Emergency Type for Instant Technician ETA
                </h2>
                <p className="text-slate-600 text-sm mb-6">
                  Our mobile hydro response vans are equipped with thermal cameras, hydro-jetters, and pipe crimping systems.
                </p>

                <div className="space-y-3 mb-6">
                  {emergencyIssues.map((issue) => (
                    <button
                      key={issue.id}
                      type="button"
                      className={`bp-issue-btn ${selectedIssue.id === issue.id ? "active" : ""}`}
                      onClick={() => setSelectedIssue(issue)}
                    >
                      <div className="flex items-center gap-3">
                        <Droplet className={`w-5 h-5 ${selectedIssue.id === issue.id ? "text-blue-600" : "text-slate-400"}`} />
                        <span className="font-bold text-slate-900 text-sm">{issue.title}</span>
                      </div>
                      <span className="text-xs font-mono font-bold text-red-600 bg-red-50 border border-red-200 px-2.5 py-1 rounded">
                        {issue.code}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-slate-950 color-white p-8 rounded-2xl border border-slate-800 text-white">
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

                <div className="grid grid-cols-2 gap-4 p-4 bg-slate-900 rounded-xl mb-6 border border-slate-800">
                  <div>
                    <span className="text-xs text-slate-400 font-mono">ESTIMATED ETA</span>
                    <p className="text-lg font-bold text-[#0099ff]">{selectedIssue.eta}</p>
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

          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
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

            <div className="flex items-center gap-3 mb-8 p-4 bg-white rounded-xl border border-slate-200">
              <input
                type="checkbox"
                id="bp-emergency-check"
                checked={isEmergency}
                onChange={(e) => setIsEmergency(e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded"
              />
              <label htmlFor="bp-emergency-check" className="text-sm font-semibold text-slate-800 cursor-pointer">
                Requires 24/7 Priority Emergency Same-Day Service (+$150 Priority Fee)
              </label>
            </div>

            <div className="bg-slate-900 text-white p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <span className="text-xs font-mono text-slate-400 uppercase">Estimated All-Inclusive Investment</span>
                <div className="text-4xl font-extrabold text-[#0099ff] mt-1">
                  ${estimatedCost.toLocaleString()}
                </div>
                <p className="text-xs text-slate-400 mt-1">Includes parts, master labor, pressure testing & 25-yr warranty</p>
              </div>

              {!quoteSubmitted ? (
                <button
                  type="button"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-xl transition-all shadow-md flex items-center gap-2"
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

      {/* 8. Service Zones & Coverage Matrix */}
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
                <MapPin className="w-8 h-8 text-[#0099ff] mx-auto mb-3" />
                <h4 className="font-bold text-lg text-white mb-2">{z.zone}</h4>
                <p className="text-xs font-mono text-green-400 font-bold mb-1">ETA: {z.eta}</p>
                <p className="text-xs text-slate-400">{z.trucks}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Warranty & Guarantees */}
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
            <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-extrabold text-xl text-slate-900 mb-2">100% Upfront Pricing</h3>
              <p className="text-slate-600 text-sm">
                No hidden fees or surprise hourly markups. You know the exact flat-rate cost before any work begins.
              </p>
            </div>

            <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl">
              <Award className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-extrabold text-xl text-slate-900 mb-2">Licensed Master Plumbers</h3>
              <p className="text-slate-600 text-sm">
                Every technician is background-checked, drug-tested, and certified for residential & commercial mechanical work.
              </p>
            </div>

            <div className="p-8 bg-slate-50 border border-slate-200 rounded-2xl">
              <Zap className="w-10 h-10 text-blue-600 mb-4" />
              <h3 className="font-extrabold text-xl text-slate-900 mb-2">25-Year Warranty</h3>
              <p className="text-slate-600 text-sm">
                Our repiping and major installations are backed by a written 25-year transferrable labor & materials guarantee.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Simple Clean Footer */}
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
                <li><a href="#bp-coverage" onClick={(e) => scrollTo(e, "bp-coverage")}>Service Zones</a></li>
                <li><a href="#bp-warranty" onClick={(e) => scrollTo(e, "bp-warranty")}>Our Guarantee</a></li>
              </ul>
            </div>

            <div>
              <h4>Emergency Hotline</h4>
              <p className="text-sm text-slate-300 mb-3">Available 24 Hours a Day, 7 Days a Week</p>
              <a
                href="tel:8005552583"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors"
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
