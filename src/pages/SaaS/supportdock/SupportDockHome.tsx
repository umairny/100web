import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SupportDockLayout } from './SupportDockLayout'
import { SupportPartnerIcon } from './SupportDockIcons'

export function SupportDockHome() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/supportdock') ? '/supportdock' : '/saas/supportdock-ai'

  const [trialName, setTrialName] = useState('')
  const [trialEmail, setTrialEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (trialEmail) {
      setSubmitted(true)
    }
  }

  const integrationPartners = [
    { id: 'zendesk', name: 'Zendesk', desc: 'Auto-sync tickets, triggers & tags' },
    { id: 'salesforce', name: 'Salesforce', desc: 'Case management & contact logs' },
    { id: 'hubspot', name: 'HubSpot', desc: 'Tickets, deals & customer status' },
    { id: 'slack', name: 'Slack', desc: 'Internal agent triage & alerts' },
    { id: 'shopify', name: 'Shopify', desc: 'Live order tracking & refunds' },
    { id: 'intercom', name: 'Intercom', desc: 'Live chat & help desk handoff' },
    { id: 'gmail', name: 'Gmail', desc: 'Email parsing & auto-responses' },
    { id: 'jira', name: 'Jira', desc: 'Escalate bugs directly to engineering' },
  ]

  const workflowSteps = [
    {
      step: '1',
      title: 'Connect Channels',
      subtitle: 'Zendesk, Gmail, etc.',
      icons: ['zendesk', 'gmail', 'slack'],
      desc: 'Ingest customer inquiries across email, chat, WhatsApp, SMS, and social in one centralized queue.',
    },
    {
      step: '2',
      title: 'AI Analyzes & Triage',
      subtitle: 'sentiment, topic',
      badge: '🤖 Real-time NLP',
      desc: 'Our fine-tuned LLMs classify intent, detect urgent churn signals, and extract customer context.',
    },
    {
      step: '3',
      title: 'Automated Resolution',
      subtitle: 'FAQs, common tasks',
      badge: '⚡ Instant Answer',
      desc: 'Instantly resolves order status, password resets, returns, and FAQs with 94%+ accuracy.',
    },
    {
      step: '4',
      title: 'Smart Handoff',
      subtitle: 'human agent escalations',
      badge: '🤝 Seamless Routing',
      desc: 'Complex edge-cases are summarized and smoothly handed to the right specialist without repeating questions.',
    },
  ]

  return (
    <SupportDockLayout>
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#E8FBF4] via-[#F3FCF8] to-white pt-12 pb-20 md:pt-20 md:pb-28">
        {/* Ambient background soft wave */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1440 600" preserveAspectRatio="none" fill="none">
            <path
              d="M0 350 C 350 420, 750 250, 1100 320 C 1280 360, 1380 300, 1440 320 V 600 H 0 Z"
              fill="url(#supportHeroWave)"
            />
            <defs>
              <linearGradient id="supportHeroWave" x1="0" y1="0" x2="1440" y2="600" gradientUnits="userSpaceOnUse">
                <stop stopColor="#D1FAE5" stopOpacity="0.4" />
                <stop offset="1" stopColor="#FFFFFF" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          {/* Main Headline matching screenshot */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-slate-900 leading-[1.08] max-w-4xl mx-auto">
            Automate Support. <br />
            <span className="text-[#10B981]">Delight Customers.</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            SupportDock AI solves issues faster, reduces costs, and delivers exceptional service 24/7.
          </p>

          {/* Primary CTA Button */}
          <div className="mt-8">
            <Link
              to={`${basePath}/trial`}
              id="hero-start-trial-btn"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-base font-bold text-white bg-[#10B981] hover:bg-[#059669] shadow-lg shadow-emerald-900/15 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Start Your Free 14-Day Trial
            </Link>
          </div>

          {/* Robot & Multi-Channel Hero Graphic */}
          <div className="mt-12 max-w-3xl mx-auto">
            <img
              src="/images/saas/supportdock/supportdock-robot-hero.svg"
              alt="SupportDock AI Robot ingesting multi-channel queries and delighting customers"
              className="w-full h-auto drop-shadow-sm"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. WHY SUPPORTDOCK AI?                                    */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Value Props matching screenshot */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Why SupportDock AI?
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  SupportDock AI solves issues faster, reduces costs, and delivers exceptional service 24/7 across every touchpoint.
                </p>
              </div>

              <div className="space-y-4 pt-2">
                {/* 1. Reduced Response Times */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center text-lg font-bold shrink-0">
                    ⏱️
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">Reduced Response Times</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Instant response times, sub-second triage, and 24/7 autonomous availability.
                    </p>
                  </div>
                </div>

                {/* 2. Lower Support Costs */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition">
                  <div className="w-10 h-10 rounded-xl bg-cyan-50 text-[#06B6D4] flex items-center justify-center text-lg font-bold shrink-0">
                    💰
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">Lower Support Costs</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Deflect up to 68% of tier-1 support volume and scale customer volume without hiring sprees.
                    </p>
                  </div>
                </div>

                {/* 3. Consistent Service Quality */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:border-emerald-200 transition">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#10B981] flex items-center justify-center text-lg font-bold shrink-0">
                    🛡️
                  </div>
                  <div>
                    <h3 className="font-bold text-sm text-slate-900">Consistent Service Quality</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                      Zero agent fatigue, reliable policy adherence, and consistent brand tone on every ticket.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Comparison Illustration (Slow Manual vs Fast Automated) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="w-full max-w-lg">
                <img
                  src="/images/saas/supportdock/supportdock-process-comparison.svg"
                  alt="Comparison: Slow manual paper process vs. Fast automated AI resolution"
                  className="w-full h-auto shadow-sm rounded-2xl"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. OUR CORE WORKFLOW (4-Step Sequential Pipeline)         */}
      {/* ========================================================= */}
      <section id="features" className="py-20 bg-[#F9FBFB] border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Our Core Workflow
            </h2>
            <p className="mt-3 text-base text-slate-600">
              How SupportDock AI intercepts, resolves, and escalates support tickets with surgical precision.
            </p>
          </div>

          {/* Desktop: 4 Horizontal Steps with Connecting Arrows */}
          <div className="hidden lg:grid lg:grid-cols-4 gap-6 items-stretch relative">
            {workflowSteps.map((item, idx) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-md transition flex flex-col justify-between relative"
              >
                <div>
                  {/* Step Number Circle */}
                  <div className="w-8 h-8 rounded-full bg-[#10B981] text-white flex items-center justify-center font-black text-xs mb-4">
                    {item.step}
                  </div>

                  <h3 className="text-base font-black text-slate-900">{item.title}</h3>
                  <p className="text-xs font-semibold text-emerald-700 mt-0.5">{item.subtitle}</p>

                  <p className="text-xs text-slate-600 leading-relaxed mt-3">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  {item.icons ? (
                    <div className="flex items-center gap-2">
                      {item.icons.map((ic) => (
                        <SupportPartnerIcon key={ic} name={ic} className="w-6 h-6" />
                      ))}
                    </div>
                  ) : (
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Connecting Right Arrow (for steps 1-3) */}
                {idx < 3 && (
                  <div className="absolute -right-3.5 top-1/2 -translate-y-1/2 z-10 w-7 h-7 rounded-full bg-white border border-slate-300 flex items-center justify-center text-xs font-black text-emerald-600 shadow-xs">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile & Tablet: Vertical Connected Timeline matching Frame 2 */}
          <div className="lg:hidden space-y-6 max-w-md mx-auto relative pl-6 border-l-2 border-emerald-300">
            {workflowSteps.map((item) => (
              <div
                key={item.step}
                className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs relative"
              >
                <div className="absolute -left-[35px] top-5 w-7 h-7 rounded-full bg-[#10B981] text-white flex items-center justify-center font-black text-xs shadow-sm">
                  {item.step}
                </div>
                <h3 className="text-base font-black text-slate-900">{item.title}</h3>
                <p className="text-xs font-semibold text-emerald-700">{item.subtitle}</p>
                <p className="text-xs text-slate-600 leading-relaxed mt-2">{item.desc}</p>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                  {item.icons ? (
                    <div className="flex items-center gap-2">
                      {item.icons.map((ic) => (
                        <SupportPartnerIcon key={ic} name={ic} className="w-6 h-6" />
                      ))}
                    </div>
                  ) : (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800">
                      {item.badge}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. SEAMLESS INTEGRATIONS (8 Partner Cards)                 */}
      {/* ========================================================= */}
      <section id="integrations" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Seamless Integrations
          </h2>
          <p className="mt-2 text-sm text-slate-600 font-medium">
            Works with 100+ Tools
          </p>

          {/* 8 Integrations Grid matching screenshot */}
          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {integrationPartners.map((tool) => (
              <div
                key={tool.id}
                className="bg-white border border-slate-200 hover:border-emerald-400 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-3 hover:shadow-lg transition group"
              >
                <SupportPartnerIcon name={tool.id} className="w-12 h-12 transition transform group-hover:scale-110" />
                <div>
                  <h3 className="font-black text-sm text-slate-900">{tool.name}</h3>
                  <p className="text-[10px] text-slate-500 mt-0.5">{tool.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-xs font-bold text-slate-500 uppercase tracking-widest">
            Works with 100+ Tools
          </div>
          <div className="mt-2">
            <Link
              to={`${basePath}/integrations`}
              className="text-xs font-bold text-[#10B981] hover:underline"
            >
              Explore all supported integrations →
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. TRUSTED BY INNOVATIVE COMPANIES                        */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-50 border-t border-slate-200/80 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Trusted by Innovative Companies
          </h2>

          {/* Enterprise Logo Strip matching screenshot */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-75 grayscale hover:grayscale-0 transition">
            <span className="font-black text-xl text-slate-800">OpenAI</span>
            <span className="font-black text-xl text-slate-800">Cursor</span>
            <span className="font-black text-xl text-slate-800">sentraal</span>
            <span className="font-black text-xl text-slate-800">stripe</span>
            <span className="font-black text-xl text-slate-800">Anthropic</span>
          </div>

          {/* Customer Testimonial Card matching screenshot */}
          <div className="mt-12 max-w-lg mx-auto bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex items-center gap-5 text-left">
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=140&q=80"
              alt="Jame Name"
              className="w-14 h-14 rounded-full object-cover border-2 border-emerald-200 shrink-0"
            />
            <div>
              <div className="flex text-amber-400 text-xs mb-1">
                ★★★★★
              </div>
              <p className="text-xs font-bold text-slate-800">
                "SupportDock AI transformed our operations! Cut resolution time by 50%."
              </p>
              <p className="text-[11px] text-slate-500 mt-1">
                Jame Name · VP of Customer Operations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. SIMPLE, LOW-FRICTION TRIAL SIGNUP                      */}
      {/* ========================================================= */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Simple, Low-Friction Trial
          </h2>

          {/* Signup Box Card matching screenshot */}
          <div className="mt-10 bg-[#FAFDFF] border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-sm text-left">
            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-emerald-100 text-[#10B981] flex items-center justify-center text-xl font-bold">
                  ✓
                </div>
                <h3 className="text-xl font-black text-slate-900">Welcome to SupportDock AI!</h3>
                <p className="text-xs text-slate-600">
                  Your 14-day free trial is active. Check <strong>{trialEmail}</strong> for instant login instructions.
                </p>
                <div className="pt-2">
                  <Link
                    to={`${basePath}/features`}
                    className="inline-flex px-5 py-2.5 rounded-full bg-[#10B981] text-white text-xs font-bold hover:bg-[#059669] transition"
                  >
                    Open Support Sandbox →
                  </Link>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Form on Left */}
                <div className="md:col-span-7 space-y-4">
                  <div>
                    <h3 className="text-lg font-black text-slate-900">Get Started in Minutes.</h3>
                    <p className="text-xs text-slate-500">No Credit Card Required.</p>
                  </div>

                  <form onSubmit={handleTrialSubmit} className="space-y-3">
                    <div>
                      <input
                        type="text"
                        required
                        placeholder="Name"
                        value={trialName}
                        onChange={(e) => setTrialName(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:border-[#10B981] focus:outline-none bg-white"
                      />
                    </div>

                    <div>
                      <input
                        type="email"
                        required
                        placeholder="Work Email"
                        value={trialEmail}
                        onChange={(e) => setTrialEmail(e.target.value)}
                        className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:border-[#10B981] focus:outline-none bg-white"
                      />
                    </div>

                    <button
                      type="submit"
                      id="home-create-account-btn"
                      className="w-full py-3 rounded-xl bg-[#061E2D] hover:bg-[#0F2942] text-white font-black text-xs uppercase tracking-wider transition shadow-md"
                    >
                      Create My Free Account
                    </button>
                  </form>
                </div>

                {/* Checklist on Right matching screenshot */}
                <div className="md:col-span-5 border-t md:border-t-0 md:border-l border-slate-200 pt-6 md:pt-0 md:pl-8 space-y-3 text-xs font-bold text-slate-700">
                  <div className="flex items-center gap-2">
                    <span className="text-[#10B981]">✓</span>
                    <span>Full Feature Access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#10B981]">✓</span>
                    <span>Pre-built Automations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#10B981]">✓</span>
                    <span>Dedicated Support</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </SupportDockLayout>
  )
}
