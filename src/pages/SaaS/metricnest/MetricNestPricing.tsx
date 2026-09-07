import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MetricNestLayout } from './MetricNestLayout'

export function MetricNestPricing() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/metricnest') ? '/metricnest' : '/saas/metricnest-analytics'

  const [annual, setAnnual] = useState(true)
  const [mtuCount, setMtuCount] = useState(35000)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  // Dynamic price based on MTU slider
  const baseGrowth = annual ? 71 : 89
  const estimatedCost = mtuCount <= 10000 ? 0 : Math.round(baseGrowth * (mtuCount / 30000))

  const faqs = [
    {
      q: 'What counts as a Monthly Tracked User (MTU)?',
      a: 'An MTU is an individual person who completes at least one tracked event or session in your product within a calendar month. Anonymous visitors and logged-in users are automatically merged when they sign up.',
    },
    {
      q: 'Do you offer retroactive query backfills?',
      a: 'Yes! All plans include our autocapture engine, meaning if you create a new funnel or cohort analysis today, you can instantly run it over historical data without waiting for future events.',
    },
    {
      q: 'How does the 14-day free trial work?',
      a: 'You get full access to all features in the Scale tier with up to 100k events per day. No credit card is required to sign up.',
    },
    {
      q: 'Can I export raw telemetry data to Snowflake or BigQuery?',
      a: 'Yes, Scale and Enterprise plans support daily and real-time streaming pipelines directly to Snowflake, Google BigQuery, AWS Redshift, and Databricks.',
    },
    {
      q: 'Is MetricNest GDPR & HIPAA compliant?',
      a: 'Yes. MetricNest operates SOC-2 Type II certified infrastructure with automated client-side PII scrubbing, localized EU data residency options, and BAA agreements for healthcare customers.',
    },
  ]

  return (
    <MetricNestLayout>
      {/* Header */}
      <section className="bg-[#0B132B] py-16 md:py-24 text-white text-center border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#10B981]">
            Predictable Pricing
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Plans That Scale With Your Product's Growth.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            Pay for active users, not arbitrary query volume. Start free and upgrade as your product expands.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-slate-800/80 p-1.5 rounded-full text-xs font-bold text-slate-300 border border-slate-700">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full transition ${
                !annual ? 'bg-[#10B981] text-white shadow-sm' : 'hover:text-white'
              }`}
            >
              Billed Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full transition flex items-center gap-1.5 ${
                annual ? 'bg-[#10B981] text-white shadow-sm' : 'hover:text-white'
              }`}
            >
              Billed Annually <span className="bg-emerald-950 text-emerald-300 text-[10px] px-2 py-0.5 rounded-full font-black">Save 20%</span>
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-stretch">
            {/* Starter (Free) */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Free Tier</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">Starter</h3>
                <p className="text-xs text-slate-500 mt-1">For early-stage products and MVPs</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">$0</span>
                  <span className="text-xs text-slate-500">/forever</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Up to 10,000 MTUs</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Core funnel &amp; user journeys</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> 30-day data retention</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Community forum support</li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to={`${basePath}/demo`}
                  className="w-full inline-flex justify-center items-center py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  Start Free
                </Link>
              </div>
            </div>

            {/* Growth (Featured) */}
            <div className="bg-white border-2 border-[#10B981] rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-xl shadow-emerald-950/10 relative transform lg:-translate-y-2">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#10B981] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">
                Most Popular
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">Scale Phase</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">Growth</h3>
                <p className="text-xs text-slate-500 mt-1">For fast-shipping product teams</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">${annual ? '71' : '89'}</span>
                  <span className="text-xs text-slate-500">/month</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-700 font-medium">
                  <li className="flex items-center gap-2"><span className="text-[#10B981] font-black">✓</span> Up to 50,000 MTUs</li>
                  <li className="flex items-center gap-2"><span className="text-[#10B981] font-black">✓</span> Retroactive query backfilling</li>
                  <li className="flex items-center gap-2"><span className="text-[#10B981] font-black">✓</span> A/B testing confidence metrics</li>
                  <li className="flex items-center gap-2"><span className="text-[#10B981] font-black">✓</span> 1-year data retention history</li>
                  <li className="flex items-center gap-2"><span className="text-[#10B981] font-black">✓</span> Slack &amp; Jira webhook alerts</li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-emerald-100">
                <Link
                  to={`${basePath}/demo`}
                  className="w-full inline-flex justify-center items-center py-3 rounded-xl bg-[#10B981] hover:bg-[#059669] text-xs font-bold text-white shadow-md transition"
                >
                  Start 14-Day Free Trial
                </Link>
              </div>
            </div>

            {/* Scale */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">High Volume</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">Scale</h3>
                <p className="text-xs text-slate-500 mt-1">For high-traffic platforms &amp; mobile apps</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-4xl font-black text-slate-900">${annual ? '199' : '249'}</span>
                  <span className="text-xs text-slate-500">/month</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Up to 250,000 MTUs</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Custom multi-touch attribution</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Raw data warehouse sync (Snowflake)</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Dedicated shared Slack channel</li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to={`${basePath}/demo`}
                  className="w-full inline-flex justify-center items-center py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  Select Scale Plan
                </Link>
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:shadow-md transition">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Custom SLA</span>
                <h3 className="text-2xl font-black text-slate-900 mt-2">Enterprise</h3>
                <p className="text-xs text-slate-500 mt-1">For global compliance &amp; custom hosting</p>
                <div className="mt-6 flex items-baseline gap-1">
                  <span className="text-3xl font-black text-slate-900">Custom</span>
                </div>
                <ul className="mt-6 space-y-2.5 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Unlimited MTU telemetry</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> 99.99% uptime guarantee</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> HIPAA BAA &amp; dedicated VPC instance</li>
                  <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> 24/7 dedicated solutions engineer</li>
                </ul>
              </div>
              <div className="mt-8 pt-6 border-t border-slate-100">
                <Link
                  to={`${basePath}/demo`}
                  className="w-full inline-flex justify-center items-center py-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>

          {/* Interactive MTU Volume Estimator */}
          <div className="mt-16 bg-[#F8FAFC] border border-slate-200 rounded-2xl p-8 max-w-2xl mx-auto text-center">
            <h3 className="text-lg font-black text-slate-900">Interactive MTU Volume Calculator</h3>
            <p className="text-xs text-slate-600 mt-1">Estimate your team's exact monthly plan cost</p>

            <div className="mt-6">
              <div className="flex justify-between items-center text-xs font-bold mb-2">
                <span>Selected Active Users:</span>
                <span className="text-[#10B981] text-sm">{mtuCount.toLocaleString()} MTU / mo</span>
              </div>
              <input
                type="range"
                min="5000"
                max="200000"
                step="5000"
                value={mtuCount}
                onChange={(e) => setMtuCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
              />
              <div className="mt-4 flex items-center justify-between pt-4 border-t border-slate-200 text-sm">
                <span className="text-slate-600">Calculated Investment:</span>
                <span className="font-black text-slate-900 text-lg">${estimatedCost}/month</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">Have Questions?</span>
            <h2 className="mt-2 text-3xl font-black text-slate-900">Frequently Asked Questions</h2>
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
    </MetricNestLayout>
  )
}
