import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FlowPilotLayout } from './FlowPilotLayout'

export function FlowPilotPricing() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/flowpilot') ? '/flowpilot' : '/saas/flowpilot-crm'

  const [annualBilling, setAnnualBilling] = useState(true)
  const [teamSeats, setTeamSeats] = useState(5)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const basicPrice = annualBilling ? 24 : 29
  const teamPrice = annualBilling ? 49 : 59
  const totalTeamMonthly = teamSeats * teamPrice

  const faqs = [
    {
      q: 'Do I need to migrate or export my database from Salesforce or HubSpot?',
      a: 'No migration required! FlowPilot acts as a peaceful, intelligent overlay. We read and write directly to your existing CRM objects in real-time, meaning your ops team keeps their reports while your reps get a calm, prioritized daily action queue.',
    },
    {
      q: 'How does the 14-day free trial work?',
      a: 'Your trial is completely unrestricted. You can connect your real inbox (Gmail or Outlook) or use our instant sandbox with pre-loaded mock deals. No credit card is required to begin.',
    },
    {
      q: 'What makes FlowPilot "calmer" than standard sales tools?',
      a: 'Traditional CRMs bombard sellers with 40+ filters, unranked lists, and stressful overdue notifications. FlowPilot strips away the visual clutter, analyzing deal recency and stakeholder intent to surface only the 5–10 next best moves each morning.',
    },
    {
      q: 'Can I add or remove seats as my sales team changes?',
      a: 'Yes! You can adjust seat counts at any time from your account settings. Prorated credits are automatically applied to your next billing cycle.',
    },
    {
      q: 'Is FlowPilot compliant with enterprise security standards?',
      a: 'Yes, FlowPilot is SOC-2 Type II certified, GDPR compliant, and enforces AES-256 encryption at rest and TLS 1.3 in transit.',
    },
  ]

  const featureMatrix = [
    { name: 'Daily Ranked Action Queue', basic: '15 moves/day', team: 'Unlimited', enterprise: 'Unlimited + Custom Weighting' },
    { name: 'Deal Health Signals & Stall Detection', basic: 'Basic', team: 'Advanced Multi-touch', enterprise: 'Predictive ML Model' },
    { name: 'Gmail & Outlook 2-Way Sync', basic: '✓', team: '✓', enterprise: '✓' },
    { name: 'Shared Pipeline & Rep Handoffs', basic: '—', team: '✓', enterprise: '✓' },
    { name: 'Context-Aware Automation Triggers', basic: '3 recipes', team: 'Unlimited recipes', enterprise: 'Custom webhooks & SLA' },
    { name: 'Zoom & Teams Call Recaps', basic: '—', team: '✓', enterprise: '✓ + Custom templates' },
    { name: 'Dedicated Onboarding & Account Manager', basic: 'Email support', team: 'Priority chat support', enterprise: 'Dedicated CSM + 99.9% SLA' },
  ]

  return (
    <FlowPilotLayout>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#F0FDF9] to-white py-16 md:py-24 border-b border-sky-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
            Simple &amp; Transparent
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Transparent Pricing That Scales With Your Deals.
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            No surprise add-ons, no extortionate seat minimums. Start with a 14-day free trial and pick the plan that fits.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-slate-100 p-1.5 rounded-full text-xs font-bold text-slate-600">
            <button
              onClick={() => setAnnualBilling(false)}
              className={`px-4 py-2 rounded-full transition ${
                !annualBilling ? 'bg-white text-slate-900 shadow-sm' : 'hover:text-slate-900'
              }`}
            >
              Billed Monthly
            </button>
            <button
              onClick={() => setAnnualBilling(true)}
              className={`px-4 py-2 rounded-full transition flex items-center gap-1.5 ${
                annualBilling ? 'bg-[#0D9488] text-white shadow-sm' : 'hover:text-slate-900'
              }`}
            >
              Billed Annually <span className="bg-teal-200 text-teal-900 text-[10px] px-2 py-0.5 rounded-full font-black">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3 Tier Cards Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {/* Basic */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Target single users
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-2">FlowPilot Basic</h2>
                <p className="text-xs text-slate-500 mt-1">Small fee, solo closers &amp; consultants</p>
                
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">${basicPrice}</span>
                  <span className="text-xs font-semibold text-slate-500">/month</span>
                </div>

                <ul className="mt-6 space-y-3 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">✓</span> Target single users
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">✓</span> Primary features included
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">✓</span> Daily 15 prioritized actions
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">✓</span> 1 email account connected
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to={`${basePath}/trial`}
                  className="w-full inline-flex justify-center items-center py-3 rounded-xl border border-slate-300 font-bold text-xs text-slate-700 hover:bg-slate-50 transition"
                >
                  Select Plan
                </Link>
              </div>
            </div>

            {/* Team */}
            <div className="bg-white border-2 border-[#0D9488] rounded-2xl p-8 flex flex-col justify-between shadow-xl shadow-teal-900/10 relative transform lg:-translate-y-2">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#0D9488] text-white text-[11px] font-black uppercase tracking-widest px-4 py-1 rounded-full">
                Most Popular
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">
                  Multi-user
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-2">FlowPilot Team</h2>
                <p className="text-xs text-slate-500 mt-1">Larger team features, shared flow</p>
                
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">${teamPrice}</span>
                  <span className="text-xs font-semibold text-slate-500">/user/month</span>
                </div>

                <ul className="mt-6 space-y-3 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2">
                    <span className="text-[#0D9488] font-black">✓</span> Multi-user collaboration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0D9488] font-black">✓</span> Ranked flow &amp; shared pipeline
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0D9488] font-black">✓</span> Medium fee / highest velocity
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0D9488] font-black">✓</span> Stalled deal &amp; health alerts
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#0D9488] font-black">✓</span> Slack &amp; Zoom integrations
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-teal-100">
                <Link
                  to={`${basePath}/trial`}
                  className="w-full inline-flex justify-center items-center py-3.5 rounded-xl bg-[#0D9488] hover:bg-[#0F766E] font-bold text-xs text-white shadow-md transition"
                >
                  Select Plan
                </Link>
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-white border border-slate-200 rounded-2xl p-8 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Custom solutions
                </span>
                <h2 className="text-2xl font-black text-slate-900 mt-2">FlowPilot Enterprise</h2>
                <p className="text-xs text-slate-500 mt-1">Advanced support, security &amp; custom SLAs</p>
                
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-slate-900">Custom Quote</span>
                </div>

                <ul className="mt-6 space-y-3 text-xs text-slate-600">
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">✓</span> Custom solutions &amp; staging instances
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">✓</span> Dedicated Customer Success Manager
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">✓</span> Custom trigger recipes &amp; data lake sync
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-teal-600 font-bold">✓</span> Enterprise SOC-2 compliance
                  </li>
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to={`${basePath}/trial`}
                  className="w-full inline-flex justify-center items-center py-3 rounded-xl border border-slate-300 font-bold text-xs text-slate-700 hover:bg-slate-50 transition"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Team Seat Estimator */}
          <div className="mt-16 bg-[#F8FDFF] border border-sky-100 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-lg font-black text-slate-900 text-center">Team Seat Cost Estimator</h3>
            <div className="mt-6">
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span>Selected Seats:</span>
                <span className="text-[#0D9488] text-sm">{teamSeats} team members</span>
              </div>
              <input
                type="range"
                min="2"
                max="50"
                value={teamSeats}
                onChange={(e) => setTeamSeats(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0D9488]"
              />
              <div className="mt-4 flex items-center justify-between pt-4 border-t border-sky-100 text-sm">
                <span className="text-slate-600">Total estimated investment:</span>
                <span className="font-black text-slate-900 text-lg">${totalTeamMonthly}/month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison Matrix */}
      <section className="py-20 bg-[#FAFDFF] border-t border-sky-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900">Compare Plan Capabilities</h2>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-slate-200 shadow-sm">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/70">
                  <th className="p-4 font-bold text-slate-700">Capability</th>
                  <th className="p-4 font-bold text-slate-700 text-center">Basic</th>
                  <th className="p-4 font-bold text-[#0D9488] text-center bg-teal-50/50">Team</th>
                  <th className="p-4 font-bold text-slate-700 text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {featureMatrix.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition">
                    <td className="p-4 font-semibold text-slate-800">{row.name}</td>
                    <td className="p-4 text-center text-slate-600">{row.basic}</td>
                    <td className="p-4 text-center font-bold text-[#0D9488] bg-teal-50/20">{row.team}</td>
                    <td className="p-4 text-center text-slate-600">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-white border-t border-sky-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#0D9488]">Got Questions?</span>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              return (
                <div key={index} className="border border-slate-200 rounded-xl overflow-hidden transition">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full p-5 text-left flex justify-between items-center bg-white hover:bg-slate-50 transition"
                  >
                    <span className="text-sm font-bold text-slate-900">{faq.q}</span>
                    <span className="text-teal-600 font-bold ml-4">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed bg-white border-t border-slate-100">
                      {faq.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </FlowPilotLayout>
  )
}
