import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AnimatedSection, Container, CTAButton } from "../../components";
import { constructionWebsites } from "../../data/websites";
import {
  Hammer,
  ShieldCheck,
  Award,
  ArrowRight,
  Sparkles,
  Building2,
  Wrench,
  Layers,
  Search,
  CheckCircle2,
  HardHat,
  TrendingUp,
  MapPin,
  Clock,
  Briefcase,
  FileCheck2,
} from "lucide-react";

const tradeFilters = [
  { id: "all", label: "All Construction Websites" },
  { id: "building", label: "Builders & Remodelers" },
  { id: "specialty", label: "Specialty Trades (Roof, Decks, Landscaping)" },
  { id: "heavy", label: "Heavy Civil & Concrete" },
  { id: "meplumbing", label: "Electrical & Plumbing" },
];

const constructionPillars = [
  {
    icon: ShieldCheck,
    title: "Proof & Credibility First",
    desc: "Every website features verified project galleries, license numbers, BBB ratings, and insurance badges to build instant client trust.",
  },
  {
    icon: Clock,
    title: "Instant Estimate Paths",
    desc: "Built-in interactive cost estimators, project scope selection, and rapid 24/7 callout request forms designed for conversion.",
  },
  {
    icon: MapPin,
    title: "Regional Coverage Maps",
    desc: "Clear service territory matrices and ETA lookups so clients know instantly if their project location is covered.",
  },
  {
    icon: FileCheck2,
    title: "RFP & Municipal Readiness",
    desc: "Dedicated portals for commercial bid submittals, safety records (OSHA / DOT), and specification sheet downloads.",
  },
];

export function ConstructionIndex() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const liveWebsites = constructionWebsites.filter(
    (website) => website.status === "completed" || website.status === "live"
  );

  const filteredWebsites = liveWebsites.filter((site) => {
    const matchesSearch =
      site.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      site.style.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;

    if (activeFilter === "building") {
      return (
        site.id === "forgepoint-builders" ||
        site.id === "clearline-remodeling" ||
        site.id === "irongate-commercial"
      );
    }
    if (activeFilter === "specialty") {
      return (
        site.id === "summit-roof-co" ||
        site.id === "primedeck-builders" ||
        site.id === "stonefield-landscapes"
      );
    }
    if (activeFilter === "heavy") {
      return (
        site.id === "civicworks-contractors" || site.id === "terraform-concrete"
      );
    }
    if (activeFilter === "meplumbing") {
      return (
        site.id === "forgeline-electric" || site.id === "bluepeak-plumbing"
      );
    }

    return true;
  });

  return (
    <main className="bg-[#0f141c] text-slate-100 min-h-screen font-sans">
      {/* 1. Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#090d14] via-[#0f141c] to-[#151c28] pt-28 pb-20 border-b border-slate-800">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

        <Container>
          <AnimatedSection className="relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-amber-400 hover:text-amber-300 uppercase transition-colors mb-6"
              >
                ← Back to Main Showcase Hub
              </Link>

              <div className="inline-flex items-center gap-2 border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold text-amber-400 mb-6">
                <HardHat className="w-4 h-4 text-amber-400 animate-pulse" />
                CONSTRUCTION & TRADES SYSTEM HUB • {liveWebsites.length} LIVE SITES
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white leading-[1.08] tracking-tight mb-6">
                Contractor Websites Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200">Trust, Proof & Quote Requests</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8">
                Explore custom responsive web design platforms engineered for general contractors, heavy civil engineers, luxury remodelers, roofers, concrete labs, electricians, and plumbers.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#live-websites"
                  className="bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm px-7 py-3.5 rounded-xl shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2"
                >
                  <Building2 className="w-4 h-4" />
                  Explore All 10 Live Sites
                </a>
                <a
                  href="#construction-ux"
                  className="bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm px-6 py-3.5 rounded-xl transition-colors flex items-center gap-2"
                >
                  <Wrench className="w-4 h-4 text-amber-400" />
                  UX Standards
                </a>
              </div>
            </div>

            {/* Hero Showcase Widget */}
            <div className="relative">
              <div className="relative bg-slate-900/90 border border-slate-700/60 rounded-2xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between pb-6 border-b border-slate-800 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-lg">
                      CW
                    </div>
                    <div>
                      <h3 className="font-extrabold text-white text-base leading-tight">Construction Suite Overview</h3>
                      <p className="text-xs font-mono text-slate-400">10 Distinct Trades • Production Ready</p>
                    </div>
                  </div>
                  <span className="flex items-center gap-1.5 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    100% Verified
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl">
                    <span className="text-xs font-mono text-slate-400">TOTAL SITES</span>
                    <p className="text-2xl font-extrabold text-amber-400 mt-1">10 Websites</p>
                  </div>
                  <div className="bg-slate-950/80 border border-slate-800 p-4 rounded-xl">
                    <span className="text-xs font-mono text-slate-400">AVG PAGE SCORE</span>
                    <p className="text-2xl font-extrabold text-emerald-400 mt-1">99 / 100</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
                    <span className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" /> High-Resolution WebP Media Assets
                    </span>
                    <span className="font-mono text-emerald-400">LOADED</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
                    <span className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" /> Interactive Quote & Dispatch Estimators
                    </span>
                    <span className="font-mono text-emerald-400">ACTIVE</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-slate-300 bg-slate-800/60 p-3 rounded-lg border border-slate-700/50">
                    <span className="flex items-center gap-2 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-amber-400" /> Ultra-Simple Responsive Navigation
                    </span>
                    <span className="font-mono text-emerald-400">VERIFIED</span>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* 2. Stats Bar */}
      <section className="bg-slate-950 border-b border-slate-800 py-6">
        <Container>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-extrabold text-white">10</p>
              <p className="text-xs font-mono text-amber-400 uppercase mt-1">Live Contractor Sites</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">100%</p>
              <p className="text-xs font-mono text-amber-400 uppercase mt-1">Mobile & Tablet Responsive</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">24/7</p>
              <p className="text-xs font-mono text-amber-400 uppercase mt-1">Dispatch & Quote Ready</p>
            </div>
            <div>
              <p className="text-3xl font-extrabold text-white">0.2s</p>
              <p className="text-xs font-mono text-amber-400 uppercase mt-1">Lightning Fast Load</p>
            </div>
          </div>
        </Container>
      </section>

      {/* 3. Live Websites Grid with Search & Filters */}
      <section id="live-websites" className="py-20 bg-[#0f141c]">
        <Container>
          <AnimatedSection className="mb-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-2">
                  <Briefcase className="w-4 h-4" />
                  EXPLORE LIVE WEBSITES
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                  Contractor & Trade Websites
                </h2>
              </div>
              <p className="text-slate-400 text-sm max-w-md">
                Click any website card to launch the complete interactive homepage experience.
              </p>
            </div>

            {/* Filter Tabs & Search Bar */}
            <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 bg-slate-900/80 p-3 rounded-2xl border border-slate-800 mb-10">
              <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
                {tradeFilters.map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveFilter(tab.id)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                      activeFilter === tab.id
                        ? "bg-amber-500 text-slate-950 shadow-md"
                        : "bg-slate-800/60 text-slate-300 hover:bg-slate-800 hover:text-white"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="relative min-w-[260px]">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search websites by name or trade..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-slate-950 border border-slate-800 text-white placeholder-slate-500 rounded-xl pl-10 pr-4 py-2.5 text-xs focus:outline-none focus:border-amber-500 transition-colors"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Websites Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredWebsites.map((website) => (
              <Link
                key={website.id}
                to={`/construction/${website.slug}`}
                className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-300 flex flex-col"
              >
                {/* Image Preview Container */}
                <div className="relative h-56 overflow-hidden bg-slate-950">
                  {website.image ? (
                    <img
                      src={website.image}
                      alt={website.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  ) : (
                    <div
                      className="w-full h-full"
                      style={{
                        background: `linear-gradient(135deg, ${website.colors.primary}, ${website.colors.dark})`,
                      }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />

                  {/* Top Badge */}
                  <span className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-slate-700/60 text-amber-400 font-mono text-[10px] font-bold uppercase px-3 py-1 rounded-full">
                    {website.category}
                  </span>

                  {/* Color Dots */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
                    {[
                      website.colors.primary,
                      website.colors.secondary,
                      website.colors.accent,
                      website.colors.dark,
                    ].map((c, i) => (
                      <span
                        key={i}
                        className="w-3.5 h-3.5 rounded-full border border-white/20 shadow-sm"
                        style={{ backgroundColor: c }}
                      />
                    ))}
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-extrabold text-white group-hover:text-amber-400 transition-colors">
                      {website.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-amber-400 group-hover:translate-x-1 transition-all" />
                  </div>

                  <p className="text-xs font-mono text-slate-400 mb-3 capitalize">
                    {website.style}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6 flex-grow">
                    {website.shortDescription}
                  </p>

                  <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                    <span className="text-emerald-400 font-mono font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Ready & Live
                    </span>
                    <span className="text-slate-400 font-bold group-hover:text-white transition-colors">
                      Launch Demo →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredWebsites.length === 0 && (
            <div className="text-center py-16 bg-slate-900/50 rounded-2xl border border-slate-800">
              <Search className="w-10 h-10 text-slate-600 mx-auto mb-3" />
              <h3 className="text-lg font-bold text-white mb-1">No websites matched your search</h3>
              <p className="text-xs text-slate-400 mb-4">Try searching for another trade or clear filters.</p>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter("all");
                  setSearchQuery("");
                }}
                className="bg-amber-500 text-slate-950 font-bold text-xs px-4 py-2 rounded-lg"
              >
                Reset Search Filters
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* 4. Construction UX Standards Section */}
      <section id="construction-ux" className="py-20 bg-slate-950 border-t border-slate-800">
        <Container>
          <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase tracking-widest mb-3">
              <Layers className="w-4 h-4" />
              CONSTRUCTION UX ESSENTIALS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Designed Around Proof, Speed & Conversion
            </h2>
            <p className="text-slate-400 text-base">
              Commercial and residential clients evaluate contractors differently than standard ecommerce shoppers. Here is how our templates drive conversion:
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {constructionPillars.map((pillar, idx) => (
              <div key={idx} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-5">
                  <pillar.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-extrabold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
