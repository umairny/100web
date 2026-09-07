import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container } from '../../components'
import { saasWebsites } from '../../data/websites'
import { 
  Search, 
  Sparkles, 
  ArrowRight, 
  ExternalLink, 
  Sliders, 
  Layers, 
  ShieldCheck, 
  CheckCircle2, 
  Zap, 
  Cpu, 
  Eye, 
  Laptop, 
  Check, 
  ChevronRight,
  TrendingUp,
  Activity,
  Filter
} from 'lucide-react'

// Categorization helper for filter pills
const categories = [
  { id: 'all', label: 'All Platforms (10)' },
  { id: 'crm', label: 'CRM & Sales' },
  { id: 'analytics', label: 'Analytics & BI' },
  { id: 'support', label: 'AI & Customer Care' },
  { id: 'project', label: 'Project Management' },
  { id: 'finance', label: 'Finance & Invoicing' },
  { id: 'hr', label: 'HR & Recruiting' },
  { id: 'security', label: 'Security & Privacy' },
  { id: 'logistics', label: 'Fleet & Logistics' },
]

function getCategoryForSlug(slug: string): string {
  if (slug.includes('flowpilot')) return 'crm'
  if (slug.includes('metricnest')) return 'analytics'
  if (slug.includes('supportdock')) return 'support'
  if (slug.includes('launchgrid')) return 'project'
  if (slug.includes('invoicepilot')) return 'finance'
  if (slug.includes('recruitflow') || slug.includes('peoplepulse')) return 'hr'
  if (slug.includes('securelayer') || slug.includes('consentlayer')) return 'security'
  if (slug.includes('routestack')) return 'logistics'
  return 'crm'
}

const uxPlaybook = [
  {
    id: 'value',
    title: 'Value Before Feature Grids',
    badge: 'UX Rule 01',
    description: 'B2B SaaS buyers bounce if value is buried in dense spec lists. Every hero pairs an unequivocal, outcome-driven promise with contextual product artwork before feature sections unfold.',
    stats: '+42% Initial Engagement',
    quote: 'Show what the tool accomplishes before listing every setting toggle.'
  },
  {
    id: 'simulators',
    title: 'Interactive Simulators Drive Trial Intent',
    badge: 'UX Rule 02',
    description: 'Passive screenshots leave doubts. By embedding real-time simulators (e.g. RouteStack route recalculations, MetricNest funnel drop-off models, ConsentLayer CMP customizers), users experience value firsthand.',
    stats: '3.4x Trial Conversion Rate',
    quote: 'An interactive simulator is worth 100 marketing bullet points.'
  },
  {
    id: 'trust',
    title: 'Frictionless Trial & Transparent Proof',
    badge: 'UX Rule 03',
    description: 'Clear "No Credit Card Required", 14-day duration, explicit security certifications (SOC 2, ISO 27001, GDPR), and verified buyer quotes alleviate risk at the moment of conversion.',
    stats: 'Zero Risk Onboarding',
    quote: 'Transparency and verifiable certifications remove hesitation at checkout.'
  },
  {
    id: 'ecosystem',
    title: 'Visible Ecosystem Interoperability',
    badge: 'UX Rule 04',
    description: 'No modern software operates in isolation. Dedicated radial spoke diagrams and searchable connector catalogs demonstrate instant compatibility with CRM, ERP, and payment platforms.',
    stats: '100+ Enterprise Connectors',
    quote: 'Buyers need to know their existing stack integrates without friction.'
  }
]

export function SaaSIndex() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [activeSpotlightIdx, setActiveSpotlightIdx] = useState(0)
  const [activePlaybookTab, setActivePlaybookTab] = useState(0)

  const liveWebsites = saasWebsites.filter((website) => website.status === 'completed' || website.status === 'live')

  const filteredWebsites = liveWebsites.filter((site) => {
    const siteCat = getCategoryForSlug(site.slug)
    const matchesCategory = selectedCategory === 'all' || siteCat === selectedCategory
    const matchesSearch = site.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          site.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          site.style.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const spotlightSite = liveWebsites[activeSpotlightIdx] || liveWebsites[0]

  return (
    <main className="bg-[#F8FAFC] text-[#0F172A] min-h-screen selection:bg-[#0284C7] selection:text-white">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION: ULTRA-PREMIUM MIDNIGHT GRADIENT SHOWCASE                 */}
      {/* ========================================================================= */}
      <section className="relative -mt-16 pt-28 pb-20 md:pt-36 md:pb-28 bg-[#0B132B] text-white overflow-hidden border-b border-slate-800">
        {/* Ambient Mesh Gradient Glows */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(14,165,233,0.35),transparent_40%),radial-gradient(circle_at_85%_35%,rgba(16,185,129,0.25),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(99,102,241,0.15),transparent_45%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:40px_40px] opacity-40 pointer-events-none" />

        <Container>
          <div className="relative z-10 grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <Link to="/" className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  ← 100Web Home
                </Link>
                <span className="text-slate-600">•</span>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-widest">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  10 of 10 Platforms Complete
                </div>
              </div>

              <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-white">
                Production-Grade SaaS Platforms Built for <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 to-teal-300">
                  Product Clarity &amp; Conversion.
                </span>
              </h1>

              <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Explore 10 bespoke software product ecosystems featuring multi-page workflows, 50+ dedicated sub-pages, custom vector artwork, and interactive real-time simulators.
              </p>

              {/* Stats Strip */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-slate-800/80">
                <div>
                  <div className="text-2xl font-black text-white">10 / 10</div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Live Apps</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-sky-400">50+</div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Sub-Pages</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-emerald-400">30+</div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Interactive Tools</div>
                </div>
                <div>
                  <div className="text-2xl font-black text-amber-400">100%</div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">Responsive</div>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#directory"
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-emerald-500 hover:from-sky-400 hover:to-emerald-400 text-slate-950 font-black text-xs uppercase tracking-widest transition-all shadow-lg shadow-sky-500/25 active:scale-95 flex items-center gap-2"
                >
                  Explore All 10 Platforms <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#playbook"
                  className="px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-white font-bold text-xs uppercase tracking-wider transition-all border border-slate-700"
                >
                  SaaS UX Playbook
                </a>
              </div>
            </div>

            {/* Right Interactive Spotlight Hub (5 cols) */}
            <div className="lg:col-span-5">
              <div className="bg-[#0F1E36] rounded-3xl p-6 border border-slate-700 shadow-2xl relative overflow-hidden backdrop-blur">
                {/* Spotlight Header Bar */}
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-700 text-xs">
                  <span className="font-bold text-sky-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" /> Featured Spotlight
                  </span>
                  <span className="font-mono text-slate-400">
                    {activeSpotlightIdx + 1} of {liveWebsites.length}
                  </span>
                </div>

                {/* Spotlight Image Thumbnail */}
                <div className="relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 h-48 mb-5 group">
                  <img 
                    src={spotlightSite.image || '/images/saas/flowpilot-clean-queue.svg'} 
                    alt={spotlightSite.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-white bg-slate-900/90 border border-white/20 backdrop-blur">
                      {spotlightSite.style.split(',')[0]}
                    </span>
                    <div className="flex gap-1.5">
                      {[spotlightSite.colors.primary, spotlightSite.colors.accent, spotlightSite.colors.secondary].map((c, i) => (
                        <span key={i} className="w-4 h-4 rounded-full border border-white/40 shadow-xs" style={{ backgroundColor: c }} />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spotlight Text Info */}
                <h3 className="text-xl font-extrabold text-white">
                  {spotlightSite.title}
                </h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed line-clamp-2">
                  {spotlightSite.shortDescription}
                </p>

                {/* Quick Sub-Page Links */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between gap-2 text-[11px] font-semibold text-slate-400">
                  <Link to={`/saas/${spotlightSite.slug}`} className="hover:text-white transition-colors">Home</Link>
                  <span>•</span>
                  <Link to={`/saas/${spotlightSite.slug}/features`} className="hover:text-sky-400 transition-colors">Features</Link>
                  <span>•</span>
                  <Link to={`/saas/${spotlightSite.slug}/pricing`} className="hover:text-emerald-400 transition-colors">Pricing</Link>
                  <span>•</span>
                  <Link to={`/saas/${spotlightSite.slug}/trial`} className="hover:text-amber-400 transition-colors">Free Trial</Link>
                </div>

                {/* Launch Button */}
                <div className="mt-5 flex gap-2">
                  <Link
                    to={`/saas/${spotlightSite.slug}`}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs uppercase tracking-wider text-center transition-colors shadow-md"
                  >
                    Open Platform →
                  </Link>
                  <button
                    onClick={() => setActiveSpotlightIdx((prev) => (prev + 1) % liveWebsites.length)}
                    className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold transition-colors"
                    title="Next Platform"
                  >
                    Next ↻
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2. DIRECTORY & SHOWCASE SECTION (FILTER + 10 BESPOKE PLATFORMS)           */}
      {/* ========================================================================= */}
      <section id="directory" className="py-20 bg-white">
        <Container>
          {/* Header & Controls */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-widest text-sky-700 bg-sky-50 px-3 py-1 rounded-full border border-sky-200">
                <Filter className="w-3.5 h-3.5" /> Full Portfolio
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
                Explore All 10 SaaS Implementations
              </h2>
              <p className="mt-2 text-slate-600 text-sm max-w-xl">
                Every application is a complete, multi-page standalone SaaS product with real interactivity.
              </p>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search platforms, features, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white transition-all shadow-xs"
              />
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 mb-12 pb-4 border-b border-slate-200">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-slate-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* 10 SaaS Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredWebsites.map((website, index) => {
              const primaryColor = website.colors.primary || '#0284C7'
              return (
                <div
                  key={website.id}
                  className="group bg-white rounded-3xl border border-slate-200/80 shadow-md hover:shadow-2xl hover:border-sky-400 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:-translate-y-1.5"
                >
                  {/* Card Image Banner */}
                  <div>
                    <div className="relative h-56 bg-slate-900 overflow-hidden border-b border-slate-100">
                      <img
                        src={website.image || '/images/saas/flowpilot-clean-queue.svg'}
                        alt={website.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />

                      {/* Number Tag & Live Badge */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-full bg-slate-950/80 text-white font-mono text-[10px] font-bold border border-white/20 backdrop-blur">
                          #{String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="px-2.5 py-1 rounded-full bg-emerald-500/90 text-slate-950 font-black text-[10px] uppercase tracking-wider shadow-xs">
                          ● Live &amp; Complete
                        </span>
                      </div>

                      {/* Palette Dots */}
                      <div className="absolute bottom-3 left-3 flex gap-1.5">
                        {[website.colors.primary, website.colors.accent, website.colors.secondary, website.colors.dark].map((col, cIdx) => (
                          <span
                            key={cIdx}
                            className="w-3.5 h-3.5 rounded-full border border-white/80 shadow-xs"
                            style={{ backgroundColor: col }}
                            title={col}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <div className="text-[10px] font-extrabold uppercase tracking-widest text-sky-700 mb-1.5">
                        {website.style.split(',')[0]}
                      </div>
                      <h3 className="text-2xl font-black text-slate-900 group-hover:text-sky-700 transition-colors">
                        {website.title}
                      </h3>
                      <p className="mt-2 text-xs text-slate-600 leading-relaxed line-clamp-3">
                        {website.shortDescription}
                      </p>

                      {/* Sub-Pages Quick Access Matrix */}
                      <div className="mt-5 pt-4 border-t border-slate-100 grid grid-cols-4 gap-1 text-center">
                        <Link
                          to={`/saas/${website.slug}`}
                          className="p-1.5 rounded-lg bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 text-[10px] font-bold transition-colors"
                        >
                          Home
                        </Link>
                        <Link
                          to={`/saas/${website.slug}/features`}
                          className="p-1.5 rounded-lg bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 text-[10px] font-bold transition-colors"
                        >
                          Features
                        </Link>
                        <Link
                          to={`/saas/${website.slug}/pricing`}
                          className="p-1.5 rounded-lg bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 text-[10px] font-bold transition-colors"
                        >
                          Pricing
                        </Link>
                        <Link
                          to={`/saas/${website.slug}/trial`}
                          className="p-1.5 rounded-lg bg-slate-50 hover:bg-sky-50 text-slate-700 hover:text-sky-700 text-[10px] font-bold transition-colors"
                        >
                          Trial
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Card Bottom CTA */}
                  <div className="p-6 pt-0">
                    <Link
                      to={`/saas/${website.slug}`}
                      className="w-full py-3 px-4 rounded-xl bg-slate-900 group-hover:bg-[#0284C7] text-white font-bold text-xs uppercase tracking-widest text-center transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      Launch Platform <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          {filteredWebsites.length === 0 && (
            <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-300">
              <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="text-base font-bold text-slate-800">No SaaS platforms match "{searchQuery}"</p>
              <p className="text-xs text-slate-500 mt-1">Try clearing your search query or selecting "All Platforms".</p>
            </div>
          )}
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. SAAS UX PLAYBOOK: CONVERSION ARCHITECTURE GUIDE                        */}
      {/* ========================================================================= */}
      <section id="playbook" className="py-24 bg-[#0B1528] text-white border-y border-slate-800">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest mb-3 border border-sky-500/30">
              Architectural Standard
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              The 100Web SaaS Design Playbook
            </h2>
            <p className="mt-4 text-slate-400 text-sm sm:text-base">
              Four battle-tested product design principles applied across all 10 software experiences.
            </p>
          </div>

          {/* Interactive Playbook Tabs */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Selector List (5 cols) */}
            <div className="lg:col-span-5 space-y-3">
              {uxPlaybook.map((rule, idx) => {
                const isActive = activePlaybookTab === idx
                return (
                  <button
                    key={rule.id}
                    onClick={() => setActivePlaybookTab(idx)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all ${
                      isActive
                        ? 'bg-[#0F1E36] border-sky-500 text-white shadow-xl shadow-sky-950/60'
                        : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-black uppercase tracking-widest text-sky-400">
                        {rule.badge}
                      </span>
                      {isActive && <span className="w-2 h-2 rounded-full bg-sky-400" />}
                    </div>
                    <div className="text-base font-bold text-white">
                      {rule.title}
                    </div>
                  </button>
                )
              })}
            </div>

            {/* Right Tab Detail Card (7 cols) */}
            <div className="lg:col-span-7 bg-[#0F1E36] rounded-3xl p-8 sm:p-10 border border-slate-700 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

              <span className="text-xs font-bold uppercase tracking-widest text-sky-400 bg-sky-500/20 px-3 py-1 rounded-full border border-sky-500/30">
                {uxPlaybook[activePlaybookTab].badge}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4">
                {uxPlaybook[activePlaybookTab].title}
              </h3>

              <p className="mt-4 text-slate-300 text-sm leading-relaxed">
                {uxPlaybook[activePlaybookTab].description}
              </p>

              {/* Impact Metric Callout */}
              <div className="mt-8 p-5 rounded-2xl bg-slate-900/90 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-slate-400 font-bold">Observed Impact</div>
                  <div className="text-xl font-black text-emerald-400 mt-0.5">
                    {uxPlaybook[activePlaybookTab].stats}
                  </div>
                </div>
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5" />
                </div>
              </div>

              {/* Quote */}
              <blockquote className="mt-6 border-l-2 border-sky-400 pl-4 text-xs italic text-slate-400">
                "{uxPlaybook[activePlaybookTab].quote}"
              </blockquote>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. INTERACTIVE TOOL LAUNCHPAD: INSTANT FEATURE SANDBOX SHORTCUTS           */}
      {/* ========================================================================= */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-widest mb-3 border border-emerald-200">
              Live Interactivity
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Interactive Tool &amp; Simulator Launchpad
            </h2>
            <p className="mt-2 text-slate-600 text-sm">
              Jump directly into the interactive builders, calculators, and sandboxes across the collection:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Multi-Stop Route Optimizer",
                site: "RouteStack Logistics",
                desc: "Sequences delivery waypoints with time-windows, capacity, and live fuel savings calculation.",
                path: "/saas/routestack-logistics/features",
                tag: "Logistics Simulator",
                color: "text-orange-700 bg-orange-50"
              },
              {
                title: "Cookie Consent & CMP Builder",
                site: "ConsentLayer Privacy",
                desc: "Switch banner layouts (Floating, Bar, Modal), regulation rules (GDPR, CCPA), and generate live code.",
                path: "/saas/consentlayer-privacy/features",
                tag: "Privacy Tool",
                color: "text-emerald-700 bg-emerald-50"
              },
              {
                title: "Funnel Drop-off Simulator",
                site: "MetricNest Analytics",
                desc: "Simulate step drop-offs, track retention cohorts, and visualize conversion leaks in real time.",
                path: "/saas/metricnest-analytics/features",
                tag: "Analytics Tool",
                color: "text-blue-700 bg-blue-50"
              },
              {
                title: "Employee PTO & 360 Review Hub",
                site: "PeoplePulse HR",
                desc: "Interactive time-off request calculator with team calendar auto-approvals and peer reviews.",
                path: "/saas/peoplepulse-hr/features",
                tag: "HR Portal",
                color: "text-purple-700 bg-purple-50"
              },
              {
                title: "AI Intent Bot Trainer",
                site: "SupportDock AI",
                desc: "Simulate automated customer ticket classification, instant SLA replies, and human handoff.",
                path: "/saas/supportdock-ai/features",
                tag: "Support Bot",
                color: "text-teal-700 bg-teal-50"
              },
              {
                title: "Subscription Dunning & Billing",
                site: "InvoicePilot",
                desc: "Interactive B2B recurring subscription builder with smart dunning recovery simulator.",
                path: "/saas/invoicepilot/features",
                tag: "Billing Tool",
                color: "text-sky-700 bg-sky-50"
              }
            ].map((tool, idx) => (
              <Link
                key={idx}
                to={tool.path}
                className="p-6 bg-slate-50 hover:bg-white rounded-2xl border border-slate-200 hover:border-sky-500 hover:shadow-xl transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${tool.color}`}>
                      {tool.tag}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">{tool.site}</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {tool.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs font-bold text-sky-700">
                  <span>Launch Simulator</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. BOTTOM NAVIGATION & CROSS-PORTFOLIO EXPLORER                           */}
      {/* ========================================================================= */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-[#0B132B] to-slate-900 text-white">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
                100Web Universe
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Explore More Industry Categories
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-lg">
                Discover our responsive production websites across Restaurants, Fitness Centers, Medical Clinics, E-Commerce, and Portfolios.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-3">
              <Link
                to="/restaurant"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 hover:text-white transition-colors border border-slate-700"
              >
                Restaurants (10)
              </Link>
              <Link
                to="/fitness"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 hover:text-white transition-colors border border-slate-700"
              >
                Fitness (10)
              </Link>
              <Link
                to="/medical"
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 hover:text-white transition-colors border border-slate-700"
              >
                Medical (10)
              </Link>
              <Link
                to="/"
                className="px-5 py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-xs font-extrabold text-white transition-colors shadow-md"
              >
                All 100Web Categories →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}

export default SaaSIndex
