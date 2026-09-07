import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SecureLayerLayout } from './SecureLayerLayout'

export function SecureLayerPricing() {
  const [annual, setAnnual] = useState(true)
  const [employees, setEmployees] = useState(30)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)

  // Dynamic pricing based on employees
  const multiplier = annual ? 0.8 : 1.0

  const startupBase = Math.round(199 * multiplier)
  const growthBase = Math.round((499 + Math.max(0, employees - 50) * 4) * multiplier)
  const enterpriseBase = Math.round((999 + Math.max(0, employees - 100) * 3) * multiplier)

  const faqs = [
    {
      q: 'Does SecureLayer include the CPA auditor fees in the price?',
      a: 'SecureLayer provides the continuous compliance platform, automated evidence collection, and direct auditor portal access. Independent CPA auditor fees are billed separately by our partner CPA network (typically $5,000–$10,000, which is 50% lower than traditional audits because the automated evidence is already pre-organized).',
    },
    {
      q: 'How fast can our team achieve a SOC 2 Type II report with SecureLayer?',
      a: 'Most startups achieve SOC 2 Type I readiness within 10 to 14 days. For Type II (which requires a 3 to 6-month observation window), SecureLayer monitors your controls continuously from Day 1, ensuring zero surprise lapses when the observation window closes.',
    },
    {
      q: 'Does SecureLayer store our proprietary customer data?',
      a: 'No. SecureLayer operates on least-privilege, read-only metadata APIs. We never ingest or store production database records or sensitive customer PII—only configuration metadata (e.g., whether S3 buckets are encrypted and whether MFA is enforced).',
    },
    {
      q: 'Can we add ISO 27001 or HIPAA later as we grow?',
      a: 'Yes! Over 80% of controls overlap between SOC 2, ISO 27001, and HIPAA. Once your evidence is connected to SecureLayer, unlocking an additional framework takes just a single click.',
    },
  ]

  return (
    <SecureLayerLayout>
      {/* Header */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-[#F0F9FF] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0284C7] text-xs font-bold mb-4">
            Transparent Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Predictable Compliance Plans.{' '}
            <span className="text-[#0284C7]">No Hidden Surprises.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Automate SOC 2, ISO 27001, and HIPAA at a fraction of the cost of traditional consultant-heavy audits.
          </p>

          {/* Billing Interval Toggle */}
          <div className="mt-8 inline-flex items-center gap-4 p-1.5 rounded-full bg-slate-100 border border-slate-200">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
                !annual ? 'bg-white text-slate-900 shadow-sm' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
                annual
                  ? 'bg-[#0284C7] text-white shadow-md'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>Annual Billing</span>
              <span className="px-2 py-0.5 rounded-full bg-[#10B981] text-white text-[10px] font-black uppercase">
                Save 20%
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Startup Plan */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                  Startup
                </div>
                <h3 className="text-2xl font-black text-slate-900">Seed &amp; Early Stage</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Everything an early-stage team needs to achieve fast SOC 2 Type I compliance and close initial enterprise deals.
                </p>

                <div className="my-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">${startupBase}</span>
                    <span className="text-xs font-semibold text-slate-500">/ month</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {annual ? 'Billed annually ($1,908/yr)' : 'Billed monthly'}
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-700 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Up to 25 employees
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> 1 Cloud Provider (AWS, GCP, or Azure)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> SOC 2 Type I automated framework
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> 25+ Security Policy Templates
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Read-only Auditor Portal Access
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  to="/saas/securelayer/trial"
                  className="w-full block text-center py-3 rounded-xl border-2 border-slate-300 hover:border-[#0284C7] hover:text-[#0284C7] font-bold text-xs transition"
                >
                  Start 14-Day Free Trial
                </Link>
              </div>
            </div>

            {/* Growth Plan (Featured) */}
            <div className="bg-gradient-to-b from-[#F0F9FF] to-white rounded-3xl p-8 border-2 border-[#0284C7] shadow-xl relative flex flex-col justify-between">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#0284C7] text-white text-[10px] font-black uppercase tracking-widest shadow-md">
                Most Popular for Scaleups
              </div>

              <div>
                <div className="text-xs font-black uppercase tracking-widest text-[#0284C7] mb-2">
                  Growth
                </div>
                <h3 className="text-2xl font-black text-slate-900">Continuous Security</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Designed for rapidly growing companies needing continuous SOC 2 Type II observation and ISO 27001.
                </p>

                <div className="my-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">${growthBase}</span>
                    <span className="text-xs font-semibold text-slate-500">/ month</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {annual ? 'Billed annually ($4,788/yr)' : 'Billed monthly'}
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-700 pt-4 border-t border-blue-100">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Up to 100 employees
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Multi-Cloud support (AWS + GCP + Azure)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> SOC 2 Type I &amp; Type II + ISO 27001
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Real-Time Public Trust Center
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> MDM endpoint sync (Jamf, Kandji)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Dedicated Customer Success Manager
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  to="/saas/securelayer/trial"
                  className="w-full block text-center py-3.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs shadow-lg shadow-emerald-500/25 transition"
                >
                  Start Free Growth Trial
                </Link>
              </div>
            </div>

            {/* Enterprise Plan */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                  Enterprise
                </div>
                <h3 className="text-2xl font-black text-slate-900">Custom Compliance</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  For complex organizations with specialized control frameworks, custom evidence mappings, and strict SLAs.
                </p>

                <div className="my-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">${enterpriseBase}</span>
                    <span className="text-xs font-semibold text-slate-500">/ month</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {annual ? 'Billed annually ($9,588/yr)' : 'Billed monthly'}
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-700 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Unlimited employees &amp; contractors
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> All Frameworks (SOC 2, ISO, HIPAA, GDPR, PCI)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Custom security control builder
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> In-house Former Big 4 Auditor Advisory
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> 99.99% SLA &amp; 24/7 Phone Escalation
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  to="/saas/securelayer/trial"
                  className="w-full block text-center py-3 rounded-xl border-2 border-slate-300 hover:border-[#0284C7] hover:text-[#0284C7] font-bold text-xs transition"
                >
                  Contact Enterprise Sales
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Seat Volume Slider */}
          <div className="mt-16 bg-[#F8FAFC] rounded-3xl p-8 border border-slate-200 max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold text-slate-800">Adjust Headcount / Cloud Accounts:</span>
              <span className="text-base font-black text-[#0284C7]">{employees} Users</span>
            </div>
            <input
              type="range"
              min="10"
              max="200"
              step="5"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="w-full accent-[#0284C7] cursor-pointer"
            />
            <p className="text-[11px] text-slate-500 mt-2 text-center">
              All plans include free auditor logins, unlimited automated tests, and customer support.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm text-slate-600 mt-2">
              Everything you need to know about pricing, auditor handoffs, and framework guarantees.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = expandedFaq === index
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden transition"
                >
                  <button
                    onClick={() => setExpandedFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-[#0284C7]"
                  >
                    <span>{faq.q}</span>
                    <span className="text-lg font-mono text-slate-400">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-50 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </SecureLayerLayout>
  )
}
