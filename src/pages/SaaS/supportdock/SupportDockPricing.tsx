import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SupportDockLayout } from './SupportDockLayout'

export function SupportDockPricing() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/supportdock') ? '/supportdock' : '/saas/supportdock-ai'

  const [annual, setAnnual] = useState(true)
  const [ticketCount, setTicketCount] = useState(3000)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const starterPrice = annual ? 39 : 49
  const growthPrice = annual ? 119 : 149
  const scalePrice = annual ? 319 : 399

  // Estimated cost based on ticket slider
  const dynamicCost = Math.round((annual ? 119 : 149) * (ticketCount / 2500))

  const faqs = [
    {
      q: 'What counts as an automated resolution?',
      a: 'A resolution is counted when SupportDock AI answers a customer query completely without requiring a human agent to intervene. If the ticket is escalated to a human, it is not billed as an automated resolution.',
    },
    {
      q: 'How does SupportDock AI integrate with our existing help desk?',
      a: 'We connect natively to Zendesk, Intercom, Salesforce Service Cloud, Freshdesk, and Gorgias. You do not need to replace your current ticketing platform — SupportDock AI acts as an autonomous co-pilot inside your current queues.',
    },
    {
      q: 'What happens if the AI encounters an issue it doesn\'t know how to resolve?',
      a: 'Our smart escalation rules automatically detect low-confidence answers and smoothly route the conversation to your human support agents with a concise internal briefing summary.',
    },
    {
      q: 'How does the 14-day free trial work?',
      a: 'You get full access to the Growth plan with up to 1,000 automated resolutions and all integrations. No credit card is required to begin.',
    },
  ]

  return (
    <SupportDockLayout>
      {/* Header */}
      <section className="bg-[#E8FBF4] py-16 md:py-24 text-center border-b border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
            Transparent Pricing
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Predictable Plans for Support Teams of All Sizes.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            Pay only for successful customer resolutions. No hidden seat limits or confusing add-on fees.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white p-1.5 rounded-full text-xs font-bold text-slate-700 border border-slate-200 shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full transition ${
                !annual ? 'bg-[#061E2D] text-white shadow-sm' : 'hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full transition flex items-center gap-1.5 ${
                annual ? 'bg-[#10B981] text-white shadow-sm' : 'hover:text-slate-900'
              }`}
            >
              Annual Billing <span className="bg-emerald-200 text-emerald-900 text-[10px] px-2 py-0.5 rounded-full font-black">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
            {/* Starter */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Starter</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">Starter</h3>
                <p className="text-xs text-slate-500 mt-1">For boutique brands and indie SaaS</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">${starterPrice}</span>
                  <span className="text-xs text-slate-500">/month</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Up to 500 auto-resolutions/mo</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Email &amp; Web chat channels</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Standard FAQ knowledge sync</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Community support</li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to={`${basePath}/trial`}
                  className="w-full inline-flex justify-center items-center py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  Start Free Trial
                </Link>
              </div>
            </div>

            {/* Growth (Featured) */}
            <div className="bg-white border-2 border-[#10B981] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl shadow-emerald-900/10 relative transform lg:-translate-y-2">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#10B981] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">Scale Operations</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">Growth</h3>
                <p className="text-xs text-slate-500 mt-1">For growing customer support teams</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">${growthPrice}</span>
                  <span className="text-xs text-slate-500">/month</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2"><span className="text-[#10B981] font-black">✓</span> Up to 2,500 auto-resolutions/mo</li>
                  <li className="flex items-center gap-2"><span className="text-[#10B981] font-black">✓</span> Unlimited support channels</li>
                  <li className="flex items-center gap-2"><span className="text-[#10B981] font-black">✓</span> Real-time sentiment triage</li>
                  <li className="flex items-center gap-2"><span className="text-[#10B981] font-black">✓</span> Zendesk, HubSpot &amp; Shopify sync</li>
                  <li className="flex items-center gap-2"><span className="text-[#10B981] font-black">✓</span> Smart human escalation handoff</li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-emerald-100">
                <Link
                  to={`${basePath}/trial`}
                  className="w-full inline-flex justify-center items-center py-3 rounded-xl bg-[#10B981] hover:bg-[#059669] text-xs font-black uppercase tracking-wider text-white shadow-md transition"
                >
                  Start Free 14-Day Trial
                </Link>
              </div>
            </div>

            {/* Scale */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">High Volume</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">Scale</h3>
                <p className="text-xs text-slate-500 mt-1">For multi-market e-commerce &amp; SaaS</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">${scalePrice}</span>
                  <span className="text-xs text-slate-500">/month</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Up to 10,000 auto-resolutions/mo</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Fine-tuned custom LLM models</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> 99.9% uptime SLA</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Priority Slack &amp; phone support</li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to={`${basePath}/trial`}
                  className="w-full inline-flex justify-center items-center py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  Select Plan
                </Link>
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Custom Fleet</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">Enterprise</h3>
                <p className="text-xs text-slate-500 mt-1">For global call centers &amp; regulated brands</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-slate-900">Custom</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Unlimited resolution capacity</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Private VPC &amp; on-prem hosting</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Dedicated Customer Success Manager</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> SOC-2 &amp; HIPAA compliance BAA</li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to={`${basePath}/trial`}
                  className="w-full inline-flex justify-center items-center py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive Monthly Ticket Volume Estimator */}
          <div className="mt-16 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-black text-slate-900">Interactive Ticket Resolution Estimator</h3>
            <p className="text-xs text-slate-600 mt-1">Adjust to your current monthly inbound support volume</p>

            <div className="mt-6">
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span>Monthly Support Inquiries:</span>
                <span className="text-[#10B981] text-sm">{ticketCount.toLocaleString()} tickets / mo</span>
              </div>
              <input
                type="range"
                min="500"
                max="25000"
                step="500"
                value={ticketCount}
                onChange={(e) => setTicketCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
              />
              <div className="mt-4 flex items-center justify-between pt-4 border-t border-slate-200 text-sm">
                <span className="text-slate-600">Estimated Monthly Cost:</span>
                <span className="font-black text-slate-900 text-lg">${dynamicCost}/month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((f, idx) => {
              const isOpen = openFaq === idx
              return (
                <div key={idx} className="bg-white border border-slate-200 rounded-xl overflow-hidden transition">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex justify-between items-center hover:bg-slate-50 transition"
                  >
                    <span className="text-sm font-bold text-slate-900">{f.q}</span>
                    <span className="text-emerald-600 font-bold ml-4">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100">
                      {f.a}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </SupportDockLayout>
  )
}
