import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MetricNestLayout } from './MetricNestLayout'
import { PartnerIcon } from './MetricNestIcons'

export function MetricNestHome() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/metricnest') ? '/metricnest' : '/saas/metricnest-analytics'

  // Trial form inputs
  const [trialEmail, setTrialEmail] = useState('')
  const [trialPassword, setTrialPassword] = useState('')
  const [trialSubmitted, setTrialSubmitted] = useState(false)

  // Interactive dashboard feature modal / preview
  const [activeFeatureModal, setActiveFeatureModal] = useState<string | null>(null)

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (trialEmail) {
      setTrialSubmitted(true)
    }
  }

  const integrations = [
    { id: 'salesforce', name: 'Salesforce', desc: 'Sync CRM revenue and account tier attributes directly to event streams.' },
    { id: 'hubspot', name: 'HubSpot', desc: 'Ingest inbound lead attributes and campaign source parameters automatically.' },
    { id: 'slack', name: 'Slack', desc: 'Real-time alerts when conversion funnels drop or retention milestones are hit.' },
    { id: 'segment', name: 'Segment', desc: 'One-click turnkey customer data platform source & destination connector.' },
    { id: 'stripe', name: 'Stripe', desc: 'Link checkout conversions and subscription plan upgrades to product behavior.' },
    { id: 'google-analytics', name: 'Google Analytics', desc: 'Reconcile top-of-funnel acquisition sessions with in-app product depth.' },
    { id: 'jira', name: 'Jira', desc: 'Auto-create engineering tickets from detected user friction points and drop-offs.' },
    { id: 'api', name: 'Custom API', desc: 'High-throughput REST & GraphQL ingestion endpoints with 99.99% uptime.' },
  ]

  const testimonials = [
    {
      id: 1,
      quote: "The customer insights analysis is fast and gives our product team immediate clarity without waiting days for SQL queries.",
      name: "Darcy James",
      title: "Principal Product Lead",
      company: "FinTech Scale",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 2,
      quote: "Resolving conversion bottlenecks saved our team months of trial and error. Funnel drop-off dropped by 34% in 60 days.",
      name: "James Thorne",
      title: "VP of Growth",
      company: "CloudScale HQ",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    },
    {
      id: 3,
      quote: "Our executive team relies on MetricNest daily for investor reporting and prioritizing engineering roadmaps with real data.",
      name: "Elena Park",
      title: "Chief Product Officer",
      company: "SaaS Systems",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80",
    },
  ]

  return (
    <MetricNestLayout>
      {/* ========================================================= */}
      {/* 1. HERO SECTION (Dark Navy with Wave & Tilted Mockup)     */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-[#0B132B] pt-12 pb-24 lg:pt-20 lg:pb-36 text-white">
        {/* Electric Green Diagonal Slice on Right Side (Matching reference image) */}
        <div className="absolute right-0 top-0 w-1/3 h-full overflow-hidden pointer-events-none opacity-80 hidden lg:block">
          <div
            className="w-full h-full bg-gradient-to-bl from-[#10B981]/40 via-[#10B981]/10 to-transparent transform rotate-12 translate-x-1/4 -translate-y-12"
            style={{
              clipPath: 'polygon(40% 0%, 100% 0%, 60% 100%, 0% 100%)',
              background: 'linear-gradient(135deg, #10B981 0%, #059669 40%, transparent 80%)',
              opacity: 0.85
            }}
          />
        </div>

        {/* Ambient background glow */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-500/10 blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-6 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-slate-300 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                Next-Gen Product Analytics Platform
              </div>

              {/* Headline matching screenshot */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                Unlock Product Insights, <br />
                <span className="text-[#10B981]">Drive Conversion</span>
              </h1>

              {/* Subtitle matching screenshot */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl font-normal leading-relaxed">
                Track user journeys, optimize funnels, and boost retention with MetricNest's intuitive product analytics platform.
              </p>

              {/* CTA Form / Button */}
              <div className="pt-2 space-y-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                  <Link
                    to={`${basePath}/pricing`}
                    id="hero-get-started-btn"
                    className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-[#10B981] hover:bg-[#059669] shadow-xl shadow-emerald-950/40 hover:shadow-2xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Get Started for Free (No Credit Card Required)
                  </Link>
                </div>
                <p className="text-xs text-slate-400 font-medium pl-1">
                  14-day free trial · Instant 2-minute setup · GDPR &amp; SOC-2 compliant
                </p>
              </div>

              {/* Stat Highlights */}
              <div className="pt-6 border-t border-slate-800 flex items-center gap-8 text-xs text-slate-400 font-medium">
                <div>
                  <span className="text-white font-bold text-lg block">3.8B+</span>
                  <span>Events tracked daily</span>
                </div>
                <div className="w-px h-8 bg-slate-800" />
                <div>
                  <span className="text-white font-bold text-lg block">&lt; 120ms</span>
                  <span>Query response time</span>
                </div>
                <div className="w-px h-8 bg-slate-800" />
                <div>
                  <span className="text-white font-bold text-lg block">99.99%</span>
                  <span>Platform uptime SLA</span>
                </div>
              </div>
            </div>

            {/* Right Hero Visual: Tilted Analytics Dashboard */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="w-full max-w-xl transform lg:rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src="/images/saas/metricnest/metricnest-dashboard-hero.svg"
                  alt="MetricNest Analytics Product Dashboard"
                  className="w-full h-auto drop-shadow-2xl rounded-2xl border border-slate-700/60"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Curved Wave Bottom Border (matching screenshot) */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none">
          <svg
            className="w-full h-12 sm:h-20 text-white fill-current"
            viewBox="0 0 1440 120"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C360,90 1080,90 1440,0 L1440,120 L0,120 Z" />
          </svg>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. CORE WORKFLOW (Collect -> Analyze -> Act)              */}
      {/* ========================================================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Core Workflow
            </h2>
            <p className="mt-3 text-base text-slate-600">
              A frictionless 3-step loop designed for modern software teams to iterate faster.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Step 1: Collect */}
            <div className="text-center space-y-4 p-6 rounded-2xl bg-slate-50/60 hover:bg-slate-50 border border-slate-100 transition hover:shadow-md">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 text-[#10B981] flex items-center justify-center text-2xl shadow-xs">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-slate-900">Collect</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Seamlessly integrate and ingest data from your product and tech stack with zero event loss.
              </p>
            </div>

            {/* Step 2: Analyze */}
            <div className="text-center space-y-4 p-6 rounded-2xl bg-slate-50/60 hover:bg-slate-50 border border-slate-100 transition hover:shadow-md">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-cyan-50 text-[#06B6D4] flex items-center justify-center text-2xl shadow-xs">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-slate-900">Analyze</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Explore user behavior, segment audiences, and visualize funnels without writing complex SQL.
              </p>
            </div>

            {/* Step 3: Act */}
            <div className="text-center space-y-4 p-6 rounded-2xl bg-slate-50/60 hover:bg-slate-50 border border-slate-100 transition hover:shadow-md">
              <div className="w-16 h-16 mx-auto rounded-2xl bg-emerald-50 text-[#10B981] flex items-center justify-center text-2xl shadow-xs">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-black text-slate-900">Act</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Identify friction points, ship high-impact product updates, and measure conversion gains.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. DASHBOARD FEATURES (2x2 Grid with Realistic Mockups)   */}
      {/* ========================================================= */}
      <section id="features" className="py-20 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-[#10B981]">
              Dashboard Features
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              MetricNest Works Seamlessly, Product Is Value
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Four specialized analytical engines unified into an intuitive interface.
            </p>
          </div>

          {/* 2x2 Cards Grid matching screenshot */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Card 1: User Journey Mapping */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-lg font-bold">
                    🗺️
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">User Journey Mapping</h3>
                    <p className="text-xs text-slate-500 font-medium">Multi-path flow analysis</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Seamlessly integrate ingest data from your user path to discover where prospects convert or abandon.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50">
                <img
                  src="/images/saas/metricnest/feature-user-journey.svg"
                  alt="User Journey Mapping Preview"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Card 2: Funnel Optimization */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold">
                    📊
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Funnel Optimization</h3>
                    <p className="text-xs text-slate-500 font-medium">Stage-by-stage drop-off alerts</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Explore user behavior, segment audiences, and visualize funnels to fix conversion leaks immediately.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50">
                <img
                  src="/images/saas/metricnest/feature-funnel-optimization.svg"
                  alt="Funnel Optimization Preview"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Card 3: Retention Analytics */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold">
                    🔁
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">Retention Analytics</h3>
                    <p className="text-xs text-slate-500 font-medium">Cohort stickiness &amp; churn signals</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Explore user behavior retention and cohort analysis to build habitual, high-LTV product usage.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50">
                <img
                  src="/images/saas/metricnest/feature-retention-analytics.svg"
                  alt="Retention Analytics Preview"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Card 4: A/B Testing Insights */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 hover:shadow-xl transition flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-lg font-bold">
                    ⚖️
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">A/B Testing Insights</h3>
                    <p className="text-xs text-slate-500 font-medium">Statistical significance confidence</p>
                  </div>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                  Identify friction points on analytics, calculate sample sizes, and launch winning experiments with confidence.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-100 shadow-inner bg-slate-50">
                <img
                  src="/images/saas/metricnest/feature-ab-testing.svg"
                  alt="A/B Testing Insights Preview"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. INTEGRATIONS: CONNECT YOUR ENTIRE STACK               */}
      {/* ========================================================= */}
      <section id="integrations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#10B981]">
            Integrations
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Connect Your Entire Stack
          </h2>
          <p className="mt-3 text-base text-slate-600 max-w-xl mx-auto">
            MetricNest works seamlessly with the tools you already love.
          </p>

          {/* 8 Integrations Grid matching screenshot */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {integrations.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-slate-200 hover:border-emerald-400 rounded-xl p-5 flex flex-col items-center justify-center text-center gap-2 hover:shadow-md transition group"
              >
                <PartnerIcon name={item.id} className="w-8 h-8 transition transform group-hover:scale-110" />
                <span className="font-bold text-sm text-slate-800">{item.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <Link
              to={`${basePath}/integrations`}
              className="inline-flex items-center text-sm font-bold text-[#10B981] hover:text-[#059669] transition"
            >
              Explore more integrations →
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. BUYER TRUST (Testimonials & Trusted Enterprise Logos)   */}
      {/* ========================================================= */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Buyer Trust
            </h2>
            <p className="mt-3 text-base text-slate-600">
              MetricNest gives real value to satisfied product and growth leaders.
            </p>
          </div>

          {/* 3 Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex text-amber-400 mb-3 text-sm">
                    ★★★★★
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed italic">
                    "{t.quote}"
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-10 h-10 rounded-full object-cover border border-slate-200"
                  />
                  <div className="text-left">
                    <p className="text-xs font-black text-slate-900">{t.name}</p>
                    <p className="text-[10px] text-slate-500">{t.title} · {t.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trusted By Enterprise Logo Bar matching screenshot */}
          <div className="mt-16 text-center">
            <p className="text-xs font-bold uppercase tracking-widest text-slate-600 mb-6">
              Trusted By
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 grayscale hover:grayscale-0 transition">
              <span className="font-black text-xl tracking-tight text-slate-800">amazon</span>
              <span className="font-black text-xl tracking-wider text-slate-800">SAP</span>
              <span className="font-black text-xl tracking-tight text-slate-800"># slack</span>
              <span className="font-black text-xl tracking-tight text-slate-800">segment</span>
              <span className="font-black text-xl tracking-tight text-slate-800">stripe</span>
              <span className="font-black text-xl tracking-tight text-slate-800">Jira</span>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. LOW-FRICTION TRIAL PATH (Sign Up Form)                 */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#10B981]">
            Low-Friction Trial Path
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Start Optimizing in Minutes
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Join 2,000+ teams who accelerated product adoption with MetricNest.
          </p>

          {/* Form Card */}
          <div className="mt-8 bg-[#FAFDFF] border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
            {trialSubmitted ? (
              <div className="py-6 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-[#10B981] flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-lg font-bold text-slate-900">Your 14-Day Trial Is Ready!</h3>
                <p className="text-xs text-slate-600">
                  We've sent a temporary access token to <strong>{trialEmail}</strong>.
                </p>
                <div className="pt-2">
                  <Link
                    to={`${basePath}/demo`}
                    className="inline-flex px-5 py-2.5 rounded-lg bg-[#10B981] text-white text-xs font-bold hover:bg-[#059669] transition"
                  >
                    Enter Live Demo Sandbox →
                  </Link>
                </div>
              </div>
            ) : (
              <form onSubmit={handleTrialSubmit} className="space-y-4 text-left">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={trialEmail}
                    onChange={(e) => setTrialEmail(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-[#10B981] focus:outline-none bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
                  <input
                    type="password"
                    required
                    placeholder="At least 8 characters"
                    value={trialPassword}
                    onChange={(e) => setTrialPassword(e.target.value)}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:border-[#10B981] focus:outline-none bg-white"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="home-start-trial-btn"
                    className="w-full py-3.5 rounded-lg font-bold text-sm text-white bg-[#10B981] hover:bg-[#059669] shadow-md transition"
                  >
                    Start My Free 14-Day Trial
                  </button>
                </div>

                <p className="text-center text-[11px] text-slate-400 pt-1">
                  No credit card required. Cancel anytime.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </MetricNestLayout>
  )
}
