import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ConsentLayerLayout } from './ConsentLayerLayout'
import {
  WordPressLogo,
  ShopifyLogo,
  SegmentLogo,
  HubSpotLogoCL,
  SalesforceLogo,
  GoogleTagManagerLogo,
  Soc2BadgeCL,
  Iso27001BadgeCL,
  GdprBadgeCL,
} from './ConsentLayerIcons'

export function ConsentLayerHome() {
  const [trialEmail, setTrialEmail] = useState('')
  const [trialSubmitted, setTrialSubmitted] = useState(false)

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!trialEmail) return
    setTrialSubmitted(true)
  }

  return (
    <ConsentLayerLayout>
      {/* ============================================================ */}
      {/* FRAME 1: HERO SECTION                                        */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 bg-gradient-to-b from-[#F0FDF4]/70 via-[#F0F9FF]/50 to-white">
        {/* Ambient Pastel Glow Circles */}
        <div className="absolute -top-10 left-1/3 w-96 h-96 bg-[#86EFAC]/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-[#BAE6FD]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.15]">
                Simplify Consent,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#059669] via-[#10B981] to-[#0284C7]">
                  Elevate Privacy,
                </span>{' '}
                Build Trust.
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Streamline compliance, manage policies, and ensure transparency across your data ecosystem.
              </p>

              {/* Primary CTA */}
              <div className="pt-2">
                <Link
                  to="/saas/consentlayer-privacy/trial"
                  className="inline-block px-8 py-3.5 rounded-full text-sm font-bold bg-[#10B981] hover:bg-[#059669] text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  START YOUR FREE TRIAL
                </Link>
              </div>

              {/* 3 Checkmark Bullets below CTA */}
              <div className="pt-2 space-y-2 text-xs font-bold text-slate-600">
                <div className="flex items-center gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span>14-Day Free Trial</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span>No Credit Card Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#10B981] font-bold">•</span>
                  <span>GDPR, CCPA, &amp; Global Compliant</span>
                </div>
              </div>
            </div>

            {/* Right Hero Graphic: Dashboard with Floating Banners (6 cols) */}
            <div className="lg:col-span-6 flex justify-center group">
              <div className="w-full max-w-xl">
                <img
                  src="/images/saas/consentlayer/consentlayer-hero.svg"
                  alt="ConsentLayer Privacy Dashboard and Cookie Banner Preview"
                  className="w-full h-auto drop-shadow-xl transition-transform duration-500 group-hover:scale-[1.01]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FRAME 1: WHY CONSENTLAYER PRIVACY? (3 Pillars)               */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Why ConsentLayer Privacy?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-200 text-center flex flex-col items-center hover:shadow-md transition">
              <div className="w-32 h-28 mb-4 flex items-center justify-center">
                <img
                  src="/images/saas/consentlayer/feature-unified-consent.svg"
                  alt="Unified Consent Management"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 mb-2">
                Unified Consent Management
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                Gather user choice across websites, apps, and platforms with standardized consent tokens.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-200 text-center flex flex-col items-center hover:shadow-md transition">
              <div className="w-32 h-28 mb-4 flex items-center justify-center">
                <img
                  src="/images/saas/consentlayer/feature-policy-management.svg"
                  alt="Automated Policy Management"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 mb-2">
                Automated Policy Management
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                Keep privacy policies and terms updated automatically with global regulations.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-[#F8FAFC] rounded-3xl p-8 border border-slate-200 text-center flex flex-col items-center hover:shadow-md transition">
              <div className="w-32 h-28 mb-4 flex items-center justify-center">
                <img
                  src="/images/saas/consentlayer/feature-audit-trails.svg"
                  alt="Detailed Audit Trails"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 mb-2">
                Detailed Audit Trails
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed max-w-xs">
                Track and report all user consent for regulatory requirements with tamper-proof timestamped logs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FRAME 1 & 2: HOW CONSENTLAYER PRIVACY WORKS (4 Steps)        */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              How ConsentLayer Privacy Works
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              End-to-end data compliance from initial visitor arrival to regulatory auditor sign-off.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {/* Step 1 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
              <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0284C7] font-black text-xs flex items-center justify-center mb-3">
                1
              </div>
              <div className="w-28 h-24 mb-3 flex items-center justify-center">
                <img
                  src="/images/saas/consentlayer/workflow-step1-connect.svg"
                  alt="Connect Data Sources"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm font-black text-slate-900 mb-1">
                Connect Data Sources
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Integrate websites, mobile apps, CRM, and customer data platforms.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
              <div className="w-8 h-8 rounded-full bg-amber-50 text-[#D97706] font-black text-xs flex items-center justify-center mb-3">
                2
              </div>
              <div className="w-28 h-24 mb-3 flex items-center justify-center">
                <img
                  src="/images/saas/consentlayer/workflow-step2-design.svg"
                  alt="Design Consent Experiences"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm font-black text-slate-900 mb-1">
                Design Consent Experiences
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Create custom, user-friendly banners and preference centers.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
              <div className="w-8 h-8 rounded-full bg-emerald-50 text-[#059669] font-black text-xs flex items-center justify-center mb-3">
                3
              </div>
              <div className="w-28 h-24 mb-3 flex items-center justify-center">
                <img
                  src="/images/saas/consentlayer/workflow-step3-gather.svg"
                  alt="Gather & Store Consent"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm font-black text-slate-900 mb-1">
                Gather &amp; Store Consent
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Collect and securely store user consent with detailed logs.
              </p>
            </div>

            {/* Step 4 */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm flex flex-col items-center text-center hover:shadow-md transition">
              <div className="w-8 h-8 rounded-full bg-cyan-50 text-[#0891B2] font-black text-xs flex items-center justify-center mb-3">
                4
              </div>
              <div className="w-28 h-24 mb-3 flex items-center justify-center">
                <img
                  src="/images/saas/consentlayer/workflow-step4-monitor.svg"
                  alt="Monitor & Audit Compliance"
                  className="w-full h-full object-contain"
                />
              </div>
              <h3 className="text-sm font-black text-slate-900 mb-1">
                Monitor &amp; Audit Compliance
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed">
                Continuously monitor compliance and generate detailed audit reports.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FRAME 2 & 3: INTEGRATIONS (Cloud Spoke Graphic)              */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-black uppercase tracking-widest text-[#059669]">
            Integrations
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mt-1">
            Seamlessly Connect with Your Modern Stack
          </h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-500">
            100+ Integrations &amp; Global Coverage
          </p>

          {/* Central Cloud Spoke Diagram */}
          <div className="max-w-2xl mx-auto mt-8 mb-8 flex justify-center">
            <img
              src="/images/saas/consentlayer/ecosystem-cloud.svg"
              alt="ConsentLayer 100+ Integrations Ecosystem Cloud"
              className="w-full h-auto drop-shadow-md"
            />
          </div>

          <div className="text-xs font-bold text-slate-400">
            100+ Integrations &amp; Global Coverage Tack
          </div>

          <div className="mt-6">
            <Link
              to="/saas/consentlayer-privacy/integrations"
              className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-[#059669] hover:underline"
            >
              <span>EXPLORE INTEGRATIONS DIRECTORY</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FRAME 3: BUYER TRUST & REVIEWS                               */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-black uppercase tracking-widest text-slate-500">
            Buyer Trust
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#0F172A] tracking-tight mt-1 mb-10">
            Trusted by Industry Leaders and Regulators.
          </h2>

          {/* Client Logos Bar */}
          <div className="flex flex-wrap items-center justify-center gap-10 opacity-80 mb-12 text-slate-700 font-black text-sm">
            <div className="flex items-center gap-2">
              <span className="text-[#0284C7]">☁</span> CloudScale
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#38BDF8]">✦</span> NexaLink
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[#10B981]">●</span> DataSphere
            </div>
          </div>

          {/* Verified Review Quote Card */}
          <div className="max-w-md mx-auto bg-white rounded-2xl p-6 border border-slate-200 shadow-sm mb-12 text-left">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-emerald-100 text-[#059669] font-bold text-xs flex items-center justify-center">
                JS
              </div>
              <div>
                <p className="text-xs font-semibold text-slate-800">
                  &ldquo;ConsentLayer made our compliance a breeze. Highly recommended!&rdquo;
                </p>
                <span className="text-[10px] text-slate-400">Head of Data Governance, DataSphere</span>
              </div>
            </div>
          </div>

          {/* Badges Bar */}
          <div className="flex items-center justify-center gap-6">
            <Soc2BadgeCL className="w-12 h-12" />
            <Iso27001BadgeCL className="w-12 h-12" />
            <GdprBadgeCL className="w-12 h-12" />
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FRAME 3: TRIAL PATH                                          */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-24 bg-gradient-to-b from-[#F0FDF4]/80 to-[#E0F2FE]/40 border-t border-slate-100 text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#059669]">
            Trial Path
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mt-2">
            Ready to Simplify Privacy Compliance?
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Build Trust, Ensure Compliance, and Respect Your Users. Try ConsentLayer Free.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              to="/saas/consentlayer-privacy/trial"
              className="px-8 py-3.5 rounded-full text-xs font-black uppercase tracking-wider bg-[#10B981] hover:bg-[#059669] text-white shadow-lg shadow-emerald-500/25 transition"
            >
              START YOUR FREE TRIAL
            </Link>

            <div className="text-left text-xs font-bold text-slate-600 space-y-1">
              <div>• Easy Set-up</div>
              <div>• No Commitments</div>
              <div>• Expert Support</div>
            </div>
          </div>
        </div>
      </section>
    </ConsentLayerLayout>
  )
}
