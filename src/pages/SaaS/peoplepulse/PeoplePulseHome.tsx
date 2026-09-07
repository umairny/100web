import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PeoplePulseLayout } from './PeoplePulseLayout'
import {
  SlackLogo,
  MicrosoftLogo,
  ZoomLogo,
  GoogleWorkspaceLogo,
  AdpLogo,
  GustoLogo,
  LeverLogo,
  GreenhouseLogo,
  Soc2BadgePP,
  GdprBadgePP,
} from './PeoplePulseIcons'

export function PeoplePulseHome() {
  const [trialEmail, setTrialEmail] = useState('')
  const [trialCompany, setTrialCompany] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!trialEmail) return
    setFormSubmitted(true)
  }

  return (
    <PeoplePulseLayout>
      {/* ============================================================ */}
      {/* FRAME 1: HERO SECTION                                        */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-[#EEF2FF]/60 via-[#F5F3FF]/40 to-white">
        {/* Subtle Pastel Ambient Background Glows */}
        <div className="absolute -top-10 left-1/4 w-96 h-96 bg-[#93C5FD]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-[#C4B5FD]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          {/* Main Hero Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Streamline HR.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563EB] via-[#0D9488] to-[#14B8A6]">
              Elevate Employee Experience.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Centralize operations, empower employees, and grow with a modern HR platform.
          </p>

          {/* Top Primary CTA Button */}
          <div className="mt-8 flex justify-center">
            <Link
              to="/saas/peoplepulse-hr/trial"
              className="px-8 py-3.5 rounded-full text-sm font-bold bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              START YOUR FREE TRIAL (No Credit Card)
            </Link>
          </div>

          {/* Central Hero Dashboard Vector Graphic (Flanked by 2 characters) */}
          <div className="mt-12 max-w-5xl mx-auto flex justify-center group">
            <img
              src="/images/saas/peoplepulse/peoplepulse-hero.svg"
              alt="PeoplePulse HR Dashboard and Team Illustration"
              className="w-full h-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.01]"
            />
          </div>

          {/* Secondary CTA Button below Hero Graphic */}
          <div className="mt-12 flex justify-center">
            <Link
              to="/saas/peoplepulse-hr/trial"
              className="px-8 py-3.5 rounded-full text-sm font-bold bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-md hover:shadow-lg transition-all"
            >
              START YOUR FREE TRIAL (No Credit Card)
            </Link>
          </div>

          {/* 3 Value Metric Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-black tracking-wider text-slate-600 uppercase">
            <div className="px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              <span>INCREASE RETENTION</span>
            </div>
            <div className="px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0D9488]" />
              <span>SAVE ADMIN TIME</span>
            </div>
            <div className="px-5 py-2 rounded-full bg-white border border-slate-200 shadow-sm flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
              <span>IMPROVE ENGAGEMENT</span>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FRAME 1 & 2: CORE WORKFLOW & FEATURES (2x2 Pastel Grid)     */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Core Workflow &amp; Features
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Centralize operations, empower employees, and grow with a modern HR platform.
            </p>
          </div>

          {/* 2x2 Grid of pastel cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1: Modern Onboarding (Soft Blue #EFF6FF) */}
            <div className="rounded-3xl p-8 bg-[#EFF6FF] border border-blue-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#2563EB] flex items-center justify-center font-bold text-lg">
                    🚀
                  </div>
                  <div>
                    <h3 className="text-base font-black uppercase tracking-wider text-slate-900">
                      Modern Onboarding
                    </h3>
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs font-bold text-slate-700 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-[#2563EB]">•</span> New Hire Journeys
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2563EB]">•</span> Digital Forms
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#2563EB]">•</span> Day 1 Readiness
                  </li>
                </ul>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Centralize operations, welcome employees and new onboarding, automate paperwork, tasks, and provisions.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden bg-white/70 border border-blue-200/50 p-3 shadow-inner flex items-center justify-center">
                <img
                  src="/images/saas/peoplepulse/workflow-onboarding.svg"
                  alt="Modern Onboarding Flow"
                  className="w-full h-auto max-h-48 object-contain"
                />
              </div>
            </div>

            {/* Card 2: Employee Portal (Soft Lavender #F5F3FF) */}
            <div className="rounded-3xl p-8 bg-[#F5F3FF] border border-purple-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#7C3AED] flex items-center justify-center font-bold text-lg">
                    📱
                  </div>
                  <div>
                    <h3 className="text-base font-black uppercase tracking-wider text-slate-900">
                      Employee Portal
                    </h3>
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs font-bold text-slate-700 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-[#7C3AED]">•</span> PTO Requests
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#7C3AED]">•</span> Pay Stubs
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#7C3AED]">•</span> Org Chart
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#7C3AED]">•</span> Self-Service
                  </li>
                </ul>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Personalized portal, PTO requests clearance, one-click address updates, company org chart, and rewards.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden bg-white/70 border border-purple-200/50 p-3 shadow-inner flex items-center justify-center">
                <img
                  src="/images/saas/peoplepulse/workflow-portal.svg"
                  alt="Employee Self-Service Portal"
                  className="w-full h-auto max-h-48 object-contain"
                />
              </div>
            </div>

            {/* Card 3: Performance Management (Soft Mint #ECFDF5) */}
            <div className="rounded-3xl p-8 bg-[#ECFDF5] border border-emerald-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center font-bold text-lg">
                    🎯
                  </div>
                  <div>
                    <h3 className="text-base font-black uppercase tracking-wider text-slate-900">
                      Performance Management
                    </h3>
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs font-bold text-slate-700 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-[#059669]">•</span> Goal Setting
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#059669]">•</span> Real-time Feedback
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#059669]">•</span> Coaching
                  </li>
                </ul>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Continuous performance management, talent reviews, 360 feedback, personalized coaching, and career milestones.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden bg-white/70 border border-emerald-200/50 p-3 shadow-inner flex items-center justify-center">
                <img
                  src="/images/saas/peoplepulse/workflow-performance.svg"
                  alt="Performance Reviews and Goals"
                  className="w-full h-auto max-h-48 object-contain"
                />
              </div>
            </div>

            {/* Card 4: HR Records & Reports (Soft Peach #FFFBEB) */}
            <div className="rounded-3xl p-8 bg-[#FFFBEB] border border-amber-100 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-100 text-[#D97706] flex items-center justify-center font-bold text-lg">
                    📊
                  </div>
                  <div>
                    <h3 className="text-base font-black uppercase tracking-wider text-slate-900">
                      HR Records &amp; Compliance
                    </h3>
                  </div>
                </div>

                <ul className="space-y-1.5 text-xs font-bold text-slate-700 mb-4">
                  <li className="flex items-center gap-2">
                    <span className="text-[#D97706]">•</span> Centralized Data
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D97706]">•</span> Compliance
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#D97706]">•</span> Smart Reporting
                  </li>
                </ul>

                <p className="text-xs text-slate-500 leading-relaxed mb-6">
                  Centralized data, documents, compliance, and automated reporting across your global workforce.
                </p>
              </div>

              <div className="rounded-2xl overflow-hidden bg-white/70 border border-amber-200/50 p-3 shadow-inner flex items-center justify-center">
                <img
                  src="/images/saas/peoplepulse/workflow-records.svg"
                  alt="HR Records Directory and Reports"
                  className="w-full h-auto max-h-48 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FRAME 2: PRODUCT VALUE (3 Illustrated Cards)                  */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-[#FAFAFC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Product Value
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Connect our features to outcomes and real business value points.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value Card 1: Boost Productivity (Soft Blue) */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-[#2563EB] mb-1">
                  Boost Productivity
                </h3>
                <p className="text-sm font-bold text-slate-900 mb-6">
                  Automate tasks, reduce admin
                </p>
              </div>
              <div className="rounded-2xl bg-[#EFF6FF]/60 p-4 border border-blue-100 flex items-center justify-center">
                <img
                  src="/images/saas/peoplepulse/value-productivity.svg"
                  alt="Boost Productivity Illustration"
                  className="w-full h-auto max-h-40 object-contain"
                />
              </div>
            </div>

            {/* Value Card 2: Engage Teams (Soft Mint) */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-[#059669] mb-1">
                  Engage Teams
                </h3>
                <p className="text-sm font-bold text-slate-900 mb-6">
                  Personalized development, continuous feedback
                </p>
              </div>
              <div className="rounded-2xl bg-[#ECFDF5]/60 p-4 border border-emerald-100 flex items-center justify-center">
                <img
                  src="/images/saas/peoplepulse/value-engage.svg"
                  alt="Engage Teams Illustration"
                  className="w-full h-auto max-h-40 object-contain"
                />
              </div>
            </div>

            {/* Value Card 3: Make Data-Driven Decisions (Soft Peach) */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
              <div>
                <h3 className="text-xs font-black uppercase tracking-widest text-[#D97706] mb-1">
                  Make Data-Driven Decisions
                </h3>
                <p className="text-sm font-bold text-slate-900 mb-6">
                  Workforce analytics, predictive insights
                </p>
              </div>
              <div className="rounded-2xl bg-[#FFFBEB]/60 p-4 border border-amber-100 flex items-center justify-center">
                <img
                  src="/images/saas/peoplepulse/value-analytics.svg"
                  alt="Data-Driven Decisions Illustration"
                  className="w-full h-auto max-h-40 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FRAME 2 & 3: INTEGRATIONS — WORKS WITH YOUR ECOSYSTEM        */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-black uppercase tracking-widest text-[#2563EB]">
            Integrations
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mt-2">
            Works with Your Ecosystem.
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base">
            Seamlessly connect your workplace tools.
          </p>

          {/* 8 Integrations Grid (2 rows of 4) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 mt-12 mb-10">
            {/* Row 1 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md hover:border-[#2563EB] transition">
              <div className="flex items-center gap-2">
                <SlackLogo className="w-6 h-6" />
                <span className="font-bold text-slate-800 text-sm">slack</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md hover:border-[#2563EB] transition">
              <div className="flex items-center gap-2">
                <MicrosoftLogo className="w-5 h-5" />
                <span className="font-bold text-slate-800 text-sm">Microsoft</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md hover:border-[#2563EB] transition">
              <div className="flex items-center gap-2">
                <ZoomLogo className="w-6 h-6" />
                <span className="font-bold text-[#2D8CFF] text-sm">zoom</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md hover:border-[#2563EB] transition">
              <div className="flex items-center gap-2">
                <GoogleWorkspaceLogo className="w-5 h-5" />
                <span className="font-bold text-slate-800 text-xs">Google Workspace</span>
              </div>
            </div>

            {/* Row 2 */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md hover:border-[#2563EB] transition">
              <AdpLogo className="h-6 w-auto" />
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md hover:border-[#2563EB] transition">
              <GustoLogo className="h-6 w-auto" />
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md hover:border-[#2563EB] transition">
              <LeverLogo className="h-6 w-auto" />
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-center justify-center hover:shadow-md hover:border-[#2563EB] transition">
              <GreenhouseLogo className="h-6 w-auto" />
            </div>
          </div>

          <Link
            to="/saas/peoplepulse-hr/integrations"
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#2563EB] hover:text-[#1D4ED8] transition"
          >
            <span>EXPLORE INTEGRATIONS</span>
            <span>&rarr;</span>
          </Link>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FRAME 3: BUYER TRUST & REVIEWS                               */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#2563EB]">
              Buyer Trust
            </span>
            <h2 className="text-3xl font-black text-[#0F172A] tracking-tight mt-1">
              Loved by 500+ Progressive People Teams
            </h2>
          </div>

          {/* Logo bar */}
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-70 mb-14 text-xs font-bold text-slate-500 uppercase tracking-wider">
            <span>PeoplePulse</span>
            <span>culture amp</span>
            <span>workvivo</span>
            <span>lattice</span>
            <span>BambooHR</span>
            <span>ADP</span>
            <span>Security First</span>
          </div>

          {/* Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition"
              >
                <div>
                  <div className="flex items-center text-amber-400 text-sm mb-3">
                    ★★★★★
                  </div>
                  <blockquote className="text-xs sm:text-sm font-semibold text-slate-800 leading-relaxed mb-6">
                    &ldquo;PeoplePulse HR transformed our HR operations and culture! Efficiency is up 60% and our employee NPS hit an all-time high.&rdquo;
                  </blockquote>
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                  <div className="w-8 h-8 rounded-full bg-blue-100 text-[#2563EB] font-bold text-xs flex items-center justify-center">
                    SJ
                  </div>
                  <div>
                    <div className="font-bold text-slate-900 text-xs">Sarah J.</div>
                    <div className="text-[11px] text-slate-400">HR Director, Series B Tech</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats & Compliance Badges Bar */}
          <div className="flex flex-wrap items-center justify-around gap-8 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm text-center">
            <div>
              <div className="text-2xl font-black text-[#0F172A]">500+</div>
              <div className="text-xs text-slate-500 mt-0.5">Companies Trusted</div>
            </div>

            <div className="flex items-center gap-4">
              <Soc2BadgePP className="w-11 h-11" />
              <GdprBadgePP className="w-11 h-11" />
            </div>

            <div>
              <div className="text-2xl font-black text-[#0D9488]">98%</div>
              <div className="text-xs text-slate-500 mt-0.5">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FRAME 3: READY TO TRANSFORM YOUR HR? (Trial CTA Section)     */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-white to-[#EEF2FF]/40 border-t border-slate-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
            Ready to Transform Your HR?
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Set up your organization and HR operations.
          </p>

          <div className="mt-8 mb-6">
            <Link
              to="/saas/peoplepulse-hr/trial"
              className="inline-block px-8 py-3 rounded-full text-xs font-black uppercase tracking-wider bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-md transition"
            >
              START YOUR FREE 14-DAY TRIAL
            </Link>
          </div>

          {/* Quick Sign-Up Form */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-xl">
            {formSubmitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-800 text-xs">
                <div className="text-xl mb-1">🎉</div>
                <strong>Welcome to PeoplePulse HR!</strong>
                <p className="mt-1">
                  We&apos;ve sent your workspace setup link to <strong>{trialEmail}</strong>.
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="email"
                    required
                    value={trialEmail}
                    onChange={(e) => setTrialEmail(e.target.value)}
                    placeholder="Work Email"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                  <input
                    type="text"
                    required
                    value={trialCompany}
                    onChange={(e) => setTrialCompany(e.target.value)}
                    placeholder="Company Name"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-md transition"
                >
                  Sign Up
                </button>

                <p className="text-[11px] text-slate-400 pt-1">
                  Set Up in Minutes • No Credit Card Required • Cancel Anytime
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </PeoplePulseLayout>
  )
}
