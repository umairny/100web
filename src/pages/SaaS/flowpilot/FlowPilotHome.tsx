import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FlowPilotLayout } from './FlowPilotLayout'
import { IntegrationIcon } from './FlowPilotIcons'

export function FlowPilotHome() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/flowpilot') ? '/flowpilot' : '/saas/flowpilot-crm'

  // Interactive state for Comparison slider/view
  const [comparisonMode, setComparisonMode] = useState<'side-by-side' | 'toggle'>('side-by-side')
  const [activeWay, setActiveWay] = useState<'old' | 'flowpilot'>('flowpilot')

  // Interactive state for Follow-ups funnel filter
  const [activeFollowUp, setActiveFollowUp] = useState<number | null>(0)

  // Pricing billing toggle: monthly vs annual
  const [annualBilling, setAnnualBilling] = useState(true)

  const followUpItems = [
    {
      id: '01',
      name: 'John D.',
      role: 'VP Sales · FinTech Global',
      deal: 'Urgent $12k Deal',
      score: '9.5',
      timing: 'Reviewed quote 2h ago',
      color: 'bg-[#FEF3C7] text-[#B45309]',
      borderColor: 'border-[#F59E0B]',
      action: 'Send contextual recap',
    },
    {
      id: '02',
      name: 'Sarah K.',
      role: 'CTO · CloudScale',
      deal: 'Urgent $35k Deal',
      score: '9.3',
      timing: 'Security review pending',
      color: 'bg-[#E0F2FE] text-[#0369A1]',
      borderColor: 'border-[#0284C7]',
      action: 'Schedule 15m verification',
    },
    {
      id: '03',
      name: 'Marcus L.',
      role: 'Growth Dir · Nexus',
      deal: 'Urgent $18k Deal',
      score: '8.9',
      timing: 'Hiring 5 reps trigger',
      color: 'bg-[#F0FDFA] text-[#0F766E]',
      borderColor: 'border-[#14B8A6]',
      action: 'Send expansion benchmark',
    },
  ]

  return (
    <FlowPilotLayout>
      {/* ========================================================= */}
      {/* 1. HERO SECTION                                           */}
      {/* ========================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-[#F0FDF9] via-[#E8F7FB] to-[#FAFDFF]">
        {/* Soft atmospheric wave background */}
        <div className="absolute inset-0 pointer-events-none opacity-40">
          <svg className="w-full h-full" preserveAspectRatio="none" viewBox="0 0 1440 800" fill="none">
            <path
              d="M-100 400C250 320 450 520 850 430C1250 340 1400 500 1600 450V800H-100V400Z"
              fill="url(#heroWaveGrad)"
            />
            <defs>
              <linearGradient id="heroWaveGrad" x1="0" y1="0" x2="1440" y2="800" gradientUnits="userSpaceOnUse">
                <stop stopColor="#CCFBF1" stopOpacity="0.4" />
                <stop offset="1" stopColor="#BAE6FD" stopOpacity="0.15" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-200 text-teal-800 text-xs font-semibold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
                Next-Generation Calm Sales Intelligence
              </div>

              {/* Headline matching image */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#0F172A] leading-[1.08]">
                The Calmer CRM for Sales Teams.{' '}
                <span className="block mt-2 text-[#0D9488]">Move Faster, Not More Stressed.</span>
              </h1>

              {/* Subtitle matching image */}
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl font-normal leading-relaxed">
                Say Goodbye to Dashboard Fatigue. FlowPilot Turns Scattered Deal Activity Into Prioritized Actions, Health Signals, and Smart Automations.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <Link
                  to={`${basePath}/trial`}
                  id="hero-start-trial-btn"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-[#0D9488] hover:bg-[#0F766E] shadow-lg shadow-teal-900/15 hover:shadow-xl transition-all transform hover:-translate-y-0.5"
                >
                  Start Your Flow (Free Trial)
                </Link>
                <Link
                  to={`${basePath}/features`}
                  className="inline-flex items-center justify-center px-6 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition hover:border-slate-300"
                >
                  Explore How It Works →
                </Link>
              </div>

              {/* Social Proof Stats under CTA */}
              <div className="pt-6 flex flex-wrap items-center gap-8 border-t border-sky-100 text-xs text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <span className="text-teal-600 font-bold text-base">3.2x</span>
                  <span>Faster daily follow-up</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600 font-bold text-base">0</span>
                  <span>Setup calls needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-teal-600 font-bold text-base">14-Day</span>
                  <span>Free full-access trial</span>
                </div>
              </div>
            </div>

            {/* Right Visual: Upward Curved Arrow with Floating Deal Badges */}
            <div className="lg:col-span-5 relative flex items-center justify-center min-h-[380px] sm:min-h-[460px]">
              {/* Background soft glow ring */}
              <div className="absolute w-72 h-72 rounded-full bg-teal-200/40 blur-3xl pointer-events-none" />

              {/* SVG Fluid Upward Curve & Arrow */}
              <svg className="w-full h-[440px]" viewBox="0 0 420 440" fill="none">
                <defs>
                  <linearGradient id="arrowGrad" x1="40" y1="400" x2="380" y2="40" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#99F6E4" stopOpacity="0.4" />
                    <stop offset="0.4" stopColor="#2DD4BF" />
                    <stop offset="1" stopColor="#0D9488" />
                  </linearGradient>
                  <filter id="badgeShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="6" stdDeviation="8" floodColor="#0F172A" floodOpacity="0.08" />
                  </filter>
                </defs>

                {/* Soft ambient wave trails */}
                <path
                  d="M10 380 C 80 370, 140 330, 210 260 C 280 190, 320 120, 360 40"
                  stroke="#E0F2FE"
                  strokeWidth="32"
                  strokeLinecap="round"
                  opacity="0.6"
                />
                <path
                  d="M30 400 C 100 390, 160 340, 230 250 C 300 160, 340 100, 380 40"
                  stroke="url(#arrowGrad)"
                  strokeWidth="14"
                  strokeLinecap="round"
                  strokeDasharray="400"
                  strokeDashoffset="0"
                />

                {/* Arrow head pointing to top right */}
                <path
                  d="M350 40 L385 35 L378 70 Z"
                  fill="#0D9488"
                />
              </svg>

              {/* Floating Interaction Cards Placed along the flow matching screenshot */}
              {/* 1. Bottom Left: [meeting ->] */}
              <div
                className="absolute left-4 bottom-14 bg-white/95 backdrop-blur border border-sky-100 rounded-xl px-4 py-3 shadow-lg shadow-sky-900/5 flex items-center gap-3 transition transform hover:scale-105"
                style={{ animation: 'floatSlow 4s ease-in-out infinite' }}
              >
                <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600 font-bold text-sm">
                  📅
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 flex items-center gap-1">
                    meeting <span className="text-teal-600 font-bold">→</span>
                  </p>
                  <p className="text-[10px] text-slate-500">Auto-brief prepared</p>
                </div>
              </div>

              {/* 2. Middle Left: [email ->] */}
              <div
                className="absolute left-16 top-48 bg-white/95 backdrop-blur border border-sky-100 rounded-xl px-4 py-3 shadow-lg shadow-sky-900/5 flex items-center gap-3 transition transform hover:scale-105"
                style={{ animation: 'floatSlow 5s ease-in-out infinite 1s' }}
              >
                <div className="w-8 h-8 rounded-lg bg-sky-50 flex items-center justify-center text-sky-600 font-bold text-sm">
                  ✉️
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 flex items-center gap-1">
                    email <span className="text-sky-600 font-bold">→</span>
                  </p>
                  <p className="text-[10px] text-slate-500">Proposal context queued</p>
                </div>
              </div>

              {/* 3. Center Right: [meeting ?] */}
              <div
                className="absolute right-14 top-36 bg-white/95 backdrop-blur border border-amber-100 rounded-xl px-4 py-3 shadow-lg shadow-amber-900/5 flex items-center gap-3 transition transform hover:scale-105"
                style={{ animation: 'floatSlow 4.5s ease-in-out infinite 0.5s' }}
              >
                <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center text-amber-600 font-bold text-sm">
                  🎯
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 flex items-center gap-1">
                    meeting <span className="text-amber-500 font-bold">?</span>
                  </p>
                  <p className="text-[10px] text-slate-500">Stalled 14d · Reconnect</p>
                </div>
              </div>

              {/* 4. Top Right: [call ?] */}
              <div
                className="absolute right-6 top-8 bg-white/95 backdrop-blur border border-rose-100 rounded-xl px-4 py-3 shadow-lg shadow-rose-900/5 flex items-center gap-3 transition transform hover:scale-105"
                style={{ animation: 'floatSlow 5.5s ease-in-out infinite 1.5s' }}
              >
                <div className="w-8 h-8 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 font-bold text-sm">
                  📞
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-800 flex items-center gap-1">
                    call <span className="text-rose-500 font-bold">?</span>
                  </p>
                  <p className="text-[10px] text-slate-500">VP reviewed specs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 2. THE PROBLEM: STOP DROWNING IN DATA LANDFILLS          */}
      {/* ========================================================= */}
      <section className="py-20 md:py-28 bg-white border-y border-sky-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0D9488]">
              The Problem
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Stop Drowning in Data Landfills.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Legacy CRMs were built for accounting, not human sales flow. See the difference between noise and clarity.
            </p>

            {/* Mobile / Tablet view toggle buttons */}
            <div className="mt-6 inline-flex md:hidden bg-slate-100 p-1 rounded-xl">
              <button
                onClick={() => setActiveWay('old')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition ${
                  activeWay === 'old' ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600'
                }`}
              >
                The Old Way
              </button>
              <button
                onClick={() => setActiveWay('flowpilot')}
                className={`px-4 py-2 text-xs font-bold rounded-lg transition ${
                  activeWay === 'flowpilot' ? 'bg-[#0D9488] text-white shadow-sm' : 'text-slate-600'
                }`}
              >
                The FlowPilot Way
              </button>
            </div>
          </div>

          {/* Side-by-Side Comparison Container */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* The Old Way Column */}
            <div
              className={`md:col-span-5 md:block transition-all duration-300 ${
                activeWay === 'old' ? 'block' : 'hidden md:block'
              }`}
            >
              <div className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition">
                <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                  <h3 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    The Old Way
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-rose-100 text-rose-700">
                    High Cognitive Friction
                  </span>
                </div>

                {/* SVG Visual Graphic Preview */}
                <div className="mt-4 rounded-xl overflow-hidden border border-slate-200 shadow-inner bg-white">
                  <img
                    src="/images/saas/flowpilot-old-crm.svg"
                    alt="The Old Way - Chaotic legacy CRM dashboard"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Captions matching image */}
                <div className="mt-6 text-center">
                  <h4 className="text-base font-black text-slate-900">Too Much Noise</h4>
                  <p className="mt-1 text-sm text-slate-500 font-medium">
                    Where do I even start? Missing context.
                  </p>
                </div>
              </div>
            </div>

            {/* Center Arrow Connector */}
            <div className="hidden md:flex md:col-span-2 flex-col items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center text-[#0D9488] font-black text-lg shadow-sm">
                →
              </div>
              <span className="mt-2 text-[11px] font-bold text-slate-600 uppercase tracking-wider">
                Shift To Flow
              </span>
            </div>

            {/* The FlowPilot Way Column */}
            <div
              className={`md:col-span-5 md:block transition-all duration-300 ${
                activeWay === 'flowpilot' ? 'block' : 'hidden md:block'
              }`}
            >
              <div className="bg-gradient-to-b from-[#F0FDFA] to-white border-2 border-teal-300/80 rounded-2xl p-5 sm:p-6 shadow-xl shadow-teal-900/5 hover:shadow-2xl transition">
                <div className="flex items-center justify-between pb-4 border-b border-teal-100">
                  <h3 className="text-lg font-bold text-[#0D9488] flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#14B8A6] animate-ping" />
                    The FlowPilot Way
                  </h3>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-teal-100 text-teal-800">
                    Zero Fatigue
                  </span>
                </div>

                {/* SVG Visual Graphic Preview */}
                <div className="mt-4 rounded-xl overflow-hidden border border-teal-200/60 shadow-inner bg-white">
                  <img
                    src="/images/saas/flowpilot-clean-queue.svg"
                    alt="The FlowPilot Way - Focused action queue"
                    className="w-full h-auto object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Captions matching image */}
                <div className="mt-6 text-center">
                  <h4 className="text-base font-black text-[#0D9488]">A Focused Action Queue</h4>
                  <p className="mt-1 text-sm text-slate-600 font-medium">
                    Always know your next best move.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 3. HOW IT WORKS - TURN SCATTERED ACTIVITY INTO SALES FLOW */}
      {/* ========================================================= */}
      <section id="features" className="py-20 md:py-28 bg-[#FAFDFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Headline */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#0D9488]">
              How It Works —
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Turn Scattered Activity Into Sales Flow
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Three streamlined pillars that replace 50 scattered tabs with actionable momentum.
            </p>
          </div>

          {/* 3 Feature Blocks Stack */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {/* ---------------------------------------------------- */}
            {/* Feature 1: Ranked Follow-Ups / Prioritize with Purpose */}
            {/* ---------------------------------------------------- */}
            <div className="bg-white border border-sky-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Visual Funnel & Ranked list */}
                <div className="md:col-span-7 flex flex-col sm:flex-row items-center gap-6">
                  {/* Funnel SVG illustration */}
                  <div className="relative w-36 h-36 shrink-0 flex items-center justify-center">
                    <svg viewBox="0 0 120 120" className="w-full h-full" fill="none">
                      {/* Incoming scattered activity icons at top */}
                      <circle cx="28" cy="20" r="12" fill="#E0F2FE" />
                      <text x="28" y="24" fontSize="10" textAnchor="middle">✉️</text>
                      <circle cx="60" cy="14" r="12" fill="#FEF3C7" />
                      <text x="60" y="18" fontSize="10" textAnchor="middle">📞</text>
                      <circle cx="92" cy="20" r="12" fill="#CCFBF1" />
                      <text x="92" y="24" fontSize="10" textAnchor="middle">💬</text>

                      {/* Calming funnel shape */}
                      <path
                        d="M15 42 L105 42 L72 88 L48 88 Z"
                        fill="url(#funnelGrad)"
                        stroke="#99F6E4"
                        strokeWidth="1.5"
                      />
                      {/* Flowing stem output */}
                      <path
                        d="M48 88 L48 112 C48 116 72 116 72 112 L72 88 Z"
                        fill="#0D9488"
                        opacity="0.85"
                      />
                      <defs>
                        <linearGradient id="funnelGrad" x1="60" y1="42" x2="60" y2="100" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#CCFBF1" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#5EEAD4" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Ranked Action rows 01, 02, 03 */}
                  <div className="w-full space-y-2.5">
                    {followUpItems.map((item, idx) => (
                      <div
                        key={item.id}
                        onClick={() => setActiveFollowUp(idx)}
                        className={`cursor-pointer rounded-xl p-3 border transition flex items-center justify-between text-xs ${
                          activeFollowUp === idx
                            ? 'bg-[#F0FDFA] border-teal-400 shadow-sm'
                            : 'bg-white border-slate-100 hover:border-slate-200'
                        }`}
                      >
                        <div className="flex items-center gap-2.5">
                          <span className={`px-2 py-0.5 rounded font-black text-[11px] ${item.color}`}>
                            {item.id}
                          </span>
                          <div>
                            <p className="font-bold text-slate-800">{item.name} <span className="text-slate-600 font-normal">· {item.deal}</span></p>
                            <p className="text-[10px] text-slate-500">{item.timing}</p>
                          </div>
                        </div>
                        <span className="font-bold text-[11px] px-2 py-1 rounded-md bg-amber-50 text-amber-700">
                          ★ {item.score}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Text Description */}
                <div className="md:col-span-5 space-y-3">
                  <h3 className="text-xl font-black text-slate-900 leading-tight">
                    Ranked Follow-Ups<br />
                    <span className="text-[#0D9488]">Prioritize with Purpose.</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Disparate activity is analyzed and ranked by impact and timing. Focus only on high-value interactions.
                  </p>
                  <div className="pt-2">
                    <Link
                      to={`${basePath}/features`}
                      className="inline-flex items-center text-xs font-bold text-[#0D9488] hover:text-[#0F766E]"
                    >
                      See Action Ranking Algorithm →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* Feature 2: Pipeline Health Signals / Predict. Correct. Close */}
            {/* ---------------------------------------------------- */}
            <div className="bg-white border border-sky-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Visual Line Chart with Health Markers */}
                <div className="md:col-span-7 bg-[#F8FDFF] border border-sky-100 rounded-xl p-4 sm:p-5 relative">
                  {/* Top Header Pill */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Health Trend</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 text-[11px] font-bold">
                      health score: 88
                    </span>
                  </div>

                  {/* SVG Health Line Graph */}
                  <div className="relative h-32 w-full">
                    <svg viewBox="0 0 340 100" className="w-full h-full overflow-visible" fill="none">
                      {/* Gradient area */}
                      <path
                        d="M0 70 C 40 75, 70 85, 110 82 C 160 78, 200 45, 250 35 C 290 26, 315 20, 340 15 L340 100 L0 100 Z"
                        fill="url(#healthArea)"
                        opacity="0.3"
                      />
                      {/* Primary trend curve */}
                      <path
                        d="M0 70 C 40 75, 70 85, 110 82 C 160 78, 200 45, 250 35 C 290 26, 315 20, 340 15"
                        stroke="#0D9488"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />

                      {/* Stalled deal warning flag */}
                      <circle cx="110" cy="82" r="5" fill="#EF4444" stroke="#FFF" strokeWidth="2" />
                      <g transform="translate(70, 48)">
                        <rect width="80" height="22" rx="4" fill="#FEE2E2" stroke="#FCA5A5" strokeWidth="1" />
                        <text x="8" y="15" fontSize="9" fill="#B91C1C" fontWeight="bold">⚠️ Deal stalled</text>
                      </g>

                      {/* Strong engagement flag */}
                      <circle cx="250" cy="35" r="5" fill="#10B981" stroke="#FFF" strokeWidth="2" />
                      <g transform="translate(210, 6)">
                        <rect width="112" height="22" rx="4" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
                        <text x="8" y="15" fontSize="9" fill="#065F46" fontWeight="bold">✓ Strong engagement</text>
                      </g>

                      <defs>
                        <linearGradient id="healthArea" x1="0" y1="15" x2="0" y2="100" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#99F6E4" stopOpacity="0.8" />
                          <stop offset="1" stopColor="#E0F2FE" stopOpacity="0.05" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  {/* Bullet points under graph */}
                  <div className="mt-4 pt-3 border-t border-sky-100 flex flex-wrap gap-4 text-xs">
                    <div className="flex items-center gap-1.5 text-amber-700 font-medium">
                      <span>⚠️</span> Deal stalled alert
                    </div>
                    <div className="flex items-center gap-1.5 text-teal-700 font-medium">
                      <span>🛡️</span> Early warning indicators
                    </div>
                  </div>
                </div>

                {/* Text Description */}
                <div className="md:col-span-5 space-y-3">
                  <h3 className="text-xl font-black text-slate-900 leading-tight">
                    Pipeline Health Signals<br />
                    <span className="text-[#0D9488]">Predict. Correct. Close.</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Early detection of deal health, velocity trends, and forecasting based on recent context, not just historical data.
                  </p>
                  <div className="pt-2">
                    <Link
                      to={`${basePath}/benefits`}
                      className="inline-flex items-center text-xs font-bold text-[#0D9488] hover:text-[#0F766E]"
                    >
                      Calculate Team Forecast Accuracy →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* ---------------------------------------------------- */}
            {/* Feature 3: Lightweight Automations / Save Time, Not Context */}
            {/* ---------------------------------------------------- */}
            <div className="bg-white border border-sky-100 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                {/* Visual Step flow & integration cluster */}
                <div className="md:col-span-7 bg-[#F8FDFF] border border-sky-100 rounded-xl p-5 flex flex-col sm:flex-row items-center justify-between gap-6">
                  {/* Step boxes */}
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <div className="p-3 bg-white border border-slate-200 rounded-xl shadow-xs text-center">
                      <div className="text-sm">🔄</div>
                      <p className="text-[11px] font-bold text-slate-800 mt-1">Deal Stage</p>
                      <p className="text-[9px] text-slate-600">Changes</p>
                    </div>
                    <div className="text-teal-600 font-bold text-sm">→</div>
                    <div className="p-3 bg-teal-50 border border-teal-200 rounded-xl shadow-xs text-center">
                      <div className="text-sm">📨</div>
                      <p className="text-[11px] font-bold text-teal-900 mt-1">Send pre-built</p>
                      <p className="text-[9px] text-teal-700">case study</p>
                    </div>
                  </div>

                  {/* Integration mini-wheel */}
                  <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-xs font-black text-[#0D9488]">
                      ⚡
                    </div>
                    {/* Surrounding mini badges */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2">
                      <IntegrationIcon name="gmail" className="w-6 h-6" />
                    </div>
                    <div className="absolute top-1/4 right-0">
                      <IntegrationIcon name="slack" className="w-6 h-6" />
                    </div>
                    <div className="absolute bottom-1/4 right-0">
                      <IntegrationIcon name="zoom" className="w-6 h-6" />
                    </div>
                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                      <IntegrationIcon name="outlook" className="w-6 h-6" />
                    </div>
                    <div className="absolute top-1/2 left-0 -translate-y-1/2">
                      <IntegrationIcon name="teams" className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Text Description */}
                <div className="md:col-span-5 space-y-3">
                  <h3 className="text-xl font-black text-slate-900 leading-tight">
                    Lightweight Automations<br />
                    <span className="text-[#0D9488]">Save Time, Not Context.</span>
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Set context-aware triggers. Automate repetitive tasks like email sequences or reminders without losing a personal touch.
                  </p>
                  <div className="pt-2">
                    <Link
                      to={`${basePath}/integrations`}
                      className="inline-flex items-center text-xs font-bold text-[#0D9488] hover:text-[#0F766E]"
                    >
                      Browse Supported Triggers →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 4. BENEFITS                                               */}
      {/* ========================================================= */}
      <section id="benefits" className="py-20 md:py-28 bg-white border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Benefits
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Designed specifically to return hours to sellers and predictability to leaders.
            </p>
          </div>

          {/* 4 Benefit Cards Grid matching image */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-[#FAFDFF] border border-sky-100 rounded-2xl p-6 hover:shadow-lg transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl mb-5 font-bold">
                  🚀
                </div>
                <h3 className="text-lg font-black text-slate-900">
                  Move Faster, More Confidently
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Focus your energy on closing deals, not deciphering data.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sky-100">
                <p className="text-xs font-bold text-slate-900">Proceed Activity</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Focus your closing deals</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#FAFDFF] border border-sky-100 rounded-2xl p-6 hover:shadow-lg transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center text-xl mb-5 font-bold">
                  💡
                </div>
                <h3 className="text-lg font-black text-slate-900">
                  Keep Conversations Relevant
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Every action comes with context, making follow-ups natural and compelling.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sky-100">
                <p className="text-xs font-bold text-slate-900">Relieve Sales</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Keep seller momentum</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-[#FAFDFF] border border-sky-100 rounded-2xl p-6 hover:shadow-lg transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 text-teal-600 flex items-center justify-center text-xl mb-5 font-bold">
                  🌿
                </div>
                <h3 className="text-lg font-black text-slate-900">
                  Minimize Sales Burnout
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  A calmer interface reduces cognitive load, letting teams operate sustainably.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sky-100">
                <p className="text-xs font-bold text-slate-900">Effort Forecasting</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Reduces cognitive friction</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-[#FAFDFF] border border-sky-100 rounded-2xl p-6 hover:shadow-lg transition flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center text-xl mb-5 font-bold">
                  📈
                </div>
                <h3 className="text-lg font-black text-slate-900">
                  Better Forecasting and Planning
                </h3>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Clear signals give sales leaders a reliable view of future performance.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-sky-100">
                <p className="text-xs font-bold text-slate-900">Clean Forecasting</p>
                <p className="text-[11px] text-slate-500 mt-0.5">Leaders maintain cognitive flow</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 5. INTEGRATIONS HUB-AND-SPOKE                             */}
      {/* ========================================================= */}
      <section id="integrations" className="py-20 md:py-28 bg-[#FAFDFF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Central Hub & Spoke Diagram */}
          <div className="relative max-w-xl mx-auto h-72 sm:h-80 flex items-center justify-center">
            {/* SVG Connecting Spokes */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 480 320" fill="none">
              {/* Spoke lines from center (240, 160) */}
              <line x1="240" y1="160" x2="80" y2="70" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="240" y1="160" x2="60" y2="160" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="240" y1="160" x2="80" y2="250" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="240" y1="160" x2="400" y2="70" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="240" y1="160" x2="420" y2="160" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
              <line x1="240" y1="160" x2="400" y2="250" stroke="#CBD5E1" strokeWidth="1.5" strokeDasharray="4 4" />
            </svg>

            {/* Center FlowPilot Emblem */}
            <div className="relative z-10 w-20 h-20 rounded-full bg-white shadow-xl shadow-teal-900/10 border-2 border-teal-200 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#0D9488] to-[#2DD4BF] flex items-center justify-center text-white text-xl font-black">
                FP
              </div>
            </div>

            {/* Left Spokes */}
            {/* Salesforce */}
            <div className="absolute left-6 top-10 flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-md border border-slate-100 hover:scale-105 transition">
              <IntegrationIcon name="salesforce" className="w-6 h-6" />
              <span className="text-xs font-bold text-slate-700 hidden sm:inline">Salesforce</span>
            </div>

            {/* Pipedrive */}
            <div className="absolute left-2 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-md border border-slate-100 hover:scale-105 transition">
              <IntegrationIcon name="pipedrive" className="w-6 h-6" />
              <span className="text-xs font-bold text-slate-700 hidden sm:inline">pipedrive</span>
            </div>

            {/* Outlook */}
            <div className="absolute left-6 bottom-10 flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-md border border-slate-100 hover:scale-105 transition">
              <IntegrationIcon name="outlook" className="w-6 h-6" />
              <span className="text-xs font-bold text-slate-700 hidden sm:inline">Outlook</span>
            </div>

            {/* Right Spokes */}
            {/* Gmail */}
            <div className="absolute right-6 top-10 flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-md border border-slate-100 hover:scale-105 transition">
              <IntegrationIcon name="gmail" className="w-6 h-6" />
              <span className="text-xs font-bold text-slate-700 hidden sm:inline">Gmail</span>
            </div>

            {/* Slack */}
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-md border border-slate-100 hover:scale-105 transition">
              <IntegrationIcon name="slack" className="w-6 h-6" />
              <span className="text-xs font-bold text-slate-700 hidden sm:inline">Slack</span>
            </div>

            {/* Zoom */}
            <div className="absolute right-6 bottom-10 flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-md border border-slate-100 hover:scale-105 transition">
              <IntegrationIcon name="zoom" className="w-6 h-6" />
              <span className="text-xs font-bold text-slate-700 hidden sm:inline">Zoom</span>
            </div>
          </div>

          {/* Subtitle & CTA */}
          <div className="mt-8 space-y-3">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Seamlessly Integrates with Your Tech Stack.
            </h3>
            <p className="text-sm text-slate-600">
              No painful database migrations. FlowPilot reads your current CRM and overlays tranquility on top.
            </p>
            <div className="pt-2">
              <Link
                to={`${basePath}/integrations`}
                className="inline-flex items-center text-sm font-bold text-[#0D9488] hover:text-[#0F766E] underline"
              >
                Check all Integrations →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 6. PRICING                                                */}
      {/* ========================================================= */}
      <section id="pricing" className="py-20 md:py-28 bg-white border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
              Pricing
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Predictable, calm pricing for individual closers and high-performing sales teams.
            </p>

            {/* Monthly / Annual Toggle */}
            <div className="mt-8 inline-flex items-center gap-3 bg-slate-100 p-1.5 rounded-full text-xs font-bold text-slate-600">
              <button
                onClick={() => setAnnualBilling(false)}
                className={`px-4 py-2 rounded-full transition ${
                  !annualBilling ? 'bg-white text-slate-900 shadow-sm' : 'hover:text-slate-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnualBilling(true)}
                className={`px-4 py-2 rounded-full transition flex items-center gap-1.5 ${
                  annualBilling ? 'bg-[#0D9488] text-white shadow-sm' : 'hover:text-slate-900'
                }`}
              >
                Annual <span className="bg-teal-200 text-teal-900 text-[10px] px-2 py-0.5 rounded-full font-black">Save 20%</span>
              </button>
            </div>
          </div>

          {/* 3 Pricing Cards matching image */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
            {/* Card 1: FlowPilot Basic */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Target single users</p>
                <h3 className="text-2xl font-black text-slate-900 mt-2">FlowPilot Basic</h3>
                <p className="mt-2 text-xs text-slate-500">Small fee, solo closers</p>
                
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900">
                    {annualBilling ? '$24' : '$29'}
                  </span>
                  <span className="text-sm font-semibold text-slate-500">/mo</span>
                </div>

                <ul className="mt-6 space-y-3 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">✓</span> Target single users
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">✓</span> Small fee &amp; instant setup
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">✓</span> Primary features included
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">✓</span> Up to 15 prioritized actions daily
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to={`${basePath}/trial`}
                  className="w-full inline-flex justify-center items-center py-3 px-4 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 hover:border-slate-400 transition"
                >
                  Select Plan
                </Link>
              </div>
            </div>

            {/* Card 2: FlowPilot Team (Featured Card) */}
            <div className="bg-white border-2 border-[#0D9488] rounded-2xl p-7 sm:p-8 flex flex-col justify-between shadow-2xl shadow-teal-900/10 relative transform lg:-translate-y-2">
              {/* Popular Badge */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0D9488] text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-sm">
                Most Popular
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">Multi-user</p>
                <h3 className="text-2xl font-black text-slate-900 mt-2">FlowPilot Team</h3>
                <p className="mt-2 text-xs text-slate-500">Larger team features, shared flow</p>
                
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl sm:text-5xl font-black text-slate-900">
                    {annualBilling ? '$49' : '$59'}
                  </span>
                  <span className="text-sm font-semibold text-slate-500">/user/mo</span>
                </div>

                <ul className="mt-6 space-y-3 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-[#0D9488] font-black">✓</span> Multi-user collaboration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0D9488] font-black">✓</span> Ranked flow &amp; shared pipeline
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0D9488] font-black">✓</span> Medium fee / high ROI
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0D9488] font-black">✓</span> Health signals &amp; stalled alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0D9488] font-black">✓</span> Context-aware automations
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-teal-100">
                <Link
                  to={`${basePath}/trial`}
                  className="w-full inline-flex justify-center items-center py-3.5 px-4 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] text-white font-bold text-sm shadow-md transition"
                >
                  Select Plan
                </Link>
              </div>
            </div>

            {/* Card 3: FlowPilot Enterprise */}
            <div className="bg-white border border-slate-200 rounded-2xl p-7 sm:p-8 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Custom solutions</p>
                <h3 className="text-2xl font-black text-slate-900 mt-2">FlowPilot Enterprise</h3>
                <p className="mt-2 text-xs text-slate-500">Advanced support, security &amp; scale</p>
                
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-black text-slate-900">
                    Contact Us
                  </span>
                </div>

                <ul className="mt-6 space-y-3 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">✓</span> Custom solutions &amp; SLA
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">✓</span> Advanced support &amp; dedicated rep
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">✓</span> Custom internal triggers
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">✓</span> Enterprise SOC-2 compliance
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to={`${basePath}/pricing`}
                  className="w-full inline-flex justify-center items-center py-3 px-4 rounded-xl border border-slate-300 text-slate-700 font-bold text-sm hover:bg-slate-50 hover:border-slate-400 transition"
                >
                  Select Plan
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* 7. FINAL CTA BANNER                                       */}
      {/* ========================================================= */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-r from-[#E0F2FE] via-[#CCFBF1] to-[#E0F2FE] border-b border-sky-100 text-center">
        {/* Subtle wavy vector background */}
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1440 320" preserveAspectRatio="none" fill="none">
            <path
              d="M0 160 C 320 280, 720 40, 1140 220 C 1300 290, 1400 120, 1440 160 L1440 320 L0 320 Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Ready to find your flow and close more deals?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Join thousands of sales professionals who traded dashboard exhaustion for serene execution.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={`${basePath}/trial`}
              id="cta-start-trial-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-[#0D9488] hover:bg-[#0F766E] shadow-lg shadow-teal-900/15 hover:shadow-xl transition"
            >
              Start Your Free Trial
            </Link>
            <Link
              to={`${basePath}/pricing`}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 rounded-xl text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm transition"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </FlowPilotLayout>
  )
}
