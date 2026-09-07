import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PeoplePulseLayout } from './PeoplePulseLayout'

export function PeoplePulsePricing() {
  const [annual, setAnnual] = useState(true)
  const [employees, setEmployees] = useState(40)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0)

  const starterRate = annual ? 5 : 6
  const coreRate = annual ? 8 : 10
  const growthRate = annual ? 11 : 14

  const starterTotal = starterRate * employees
  const coreTotal = coreRate * employees
  const growthTotal = growthRate * employees

  const faqs = [
    {
      q: 'What is PEPM pricing?',
      a: 'PEPM stands for "Per Employee Per Month". You only pay for active employees currently in your directory. If someone departs, your bill adjusts automatically on the next billing cycle.',
    },
    {
      q: 'Are there any hidden implementation or onboarding fees?',
      a: 'None! We believe software should be self-serve and intuitive. Data import tools, CSV mappers, and customer success support are completely free on all plans.',
    },
    {
      q: 'Can we switch between monthly and annual plans anytime?',
      a: 'Yes. You can upgrade to annual billing at any point to lock in the 20% discount. Prorated credits are automatically applied.',
    },
    {
      q: 'How does the 14-day free trial work?',
      a: 'You get complete unrestricted access to all Core features for 14 days without entering any credit card. You can invite team members and test the full employee portal.',
    },
  ]

  return (
    <PeoplePulseLayout>
      {/* Header */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-[#EEF2FF]/60 to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold mb-4">
            Simple Per-Employee Pricing
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Fair Plans That Scale With Your Team.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            No bloated enterprise minimums. Pick the modules you need and upgrade when ready.
          </p>

          {/* Billing Switch */}
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
                  ? 'bg-[#2563EB] text-white shadow-md'
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

      {/* Pricing Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Starter */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                  Starter
                </div>
                <h3 className="text-2xl font-black text-slate-900">Essentials</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Best for early-stage teams wanting clean employee directory records and automated PTO tracking.
                </p>

                <div className="my-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">${starterRate}</span>
                    <span className="text-xs font-semibold text-slate-500">/ employee / mo</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Estimated: <strong>${starterTotal}/mo</strong> for {employees} staff
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-700 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Core Employee Directory
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Time Off &amp; PTO Requests
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Document Storage &amp; Signatures
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Employee Self-Service App
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  to="/saas/peoplepulse-hr/trial"
                  className="w-full block text-center py-3 rounded-xl border-2 border-slate-300 hover:border-[#2563EB] hover:text-[#2563EB] font-bold text-xs transition"
                >
                  Start 14-Day Free Trial
                </Link>
              </div>
            </div>

            {/* Core (Featured) */}
            <div className="bg-gradient-to-b from-[#EFF6FF] to-white rounded-3xl p-8 border-2 border-[#2563EB] shadow-xl relative flex flex-col justify-between">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#2563EB] text-white text-[10px] font-black uppercase tracking-widest shadow-md">
                Most Popular
              </div>

              <div>
                <div className="text-xs font-black uppercase tracking-widest text-[#2563EB] mb-2">
                  Core
                </div>
                <h3 className="text-2xl font-black text-slate-900">Modern HR</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  Everything in Starter, plus 360 reviews, goal alignment, Org charts, and Slack approvals.
                </p>

                <div className="my-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">${coreRate}</span>
                    <span className="text-xs font-semibold text-slate-500">/ employee / mo</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Estimated: <strong>${coreTotal}/mo</strong> for {employees} staff
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-700 pt-4 border-t border-blue-100">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Everything in Starter
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> 360 Performance &amp; Reviews
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Interactive Visual Org Chart
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Slack &amp; Teams Approvals Bot
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Gusto, ADP &amp; Payroll Sync
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  to="/saas/peoplepulse-hr/trial"
                  className="w-full block text-center py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-lg shadow-blue-500/25 transition"
                >
                  Start Free Core Trial
                </Link>
              </div>
            </div>

            {/* Growth */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 hover:border-slate-300 shadow-sm flex flex-col justify-between">
              <div>
                <div className="text-xs font-black uppercase tracking-widest text-slate-500 mb-2">
                  Growth
                </div>
                <h3 className="text-2xl font-black text-slate-900">Scale &amp; Enterprise</h3>
                <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                  For established scaleups needing custom analytics, SAML/SSO security, and a dedicated partner.
                </p>

                <div className="my-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-black text-slate-900">${growthRate}</span>
                    <span className="text-xs font-semibold text-slate-500">/ employee / mo</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Estimated: <strong>${growthTotal}/mo</strong> for {employees} staff
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-700 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Everything in Core
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Workforce Predictive Analytics
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> SAML SSO (Okta, Azure AD)
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Dedicated Customer Success Manager
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">✓</span> Custom API Access &amp; Webhooks
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  to="/saas/peoplepulse-hr/trial"
                  className="w-full block text-center py-3 rounded-xl border-2 border-slate-300 hover:border-[#2563EB] hover:text-[#2563EB] font-bold text-xs transition"
                >
                  Start Growth Trial
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Volume Slider */}
          <div className="mt-16 bg-[#FAFAFC] rounded-3xl p-8 border border-slate-200 max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-3">
              <span className="text-sm font-bold text-slate-800">Your Current Team Headcount:</span>
              <span className="text-base font-black text-[#2563EB]">{employees} Employees</span>
            </div>
            <input
              type="range"
              min="5"
              max="200"
              step="5"
              value={employees}
              onChange={(e) => setEmployees(Number(e.target.value))}
              className="w-full accent-[#2563EB] cursor-pointer"
            />
            <p className="text-[11px] text-slate-500 mt-2 text-center">
              All plans include free employee self-service mobile app logins and unlimited document storage.
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
                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-bold text-slate-900 text-sm hover:text-[#2563EB]"
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
    </PeoplePulseLayout>
  )
}
