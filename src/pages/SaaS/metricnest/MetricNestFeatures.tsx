import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MetricNestLayout } from './MetricNestLayout'

export function MetricNestFeatures() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/metricnest') ? '/metricnest' : '/saas/metricnest-analytics'

  // Interactive funnel drop-off calculator
  const [visitors, setVisitors] = useState(25000)
  const [signupRate, setSignupRate] = useState(65)
  const [activationRate, setActivationRate] = useState(48)
  const [paidRate, setPaidRate] = useState(24)

  const signups = Math.round(visitors * (signupRate / 100))
  const activations = Math.round(signups * (activationRate / 100))
  const payingCustomers = Math.round(activations * (paidRate / 100))

  return (
    <MetricNestLayout>
      {/* Header */}
      <section className="bg-[#0B132B] py-16 md:py-24 text-white text-center border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#10B981]">
            Platform Capabilities
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Complete Visibility Across Every User Interaction.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            From first touch to recurring renewal, MetricNest maps behavioral telemetry into clear product improvements.
          </p>
        </div>
      </section>

      {/* Interactive Funnel Drop-off Simulator */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F8FAFC] border-2 border-emerald-300/60 rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-3 py-1 rounded-full">
                Interactive Simulator
              </span>
              <h2 className="mt-3 text-3xl font-black text-slate-900">
                Model Your Conversion Funnel
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                See how improving step-by-step drop-offs compounds into massive customer acquisition.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Sliders on Left */}
              <div className="lg:col-span-6 space-y-5">
                <div>
                  <div className="flex justify-between items-center text-xs font-bold mb-1">
                    <span>1. Monthly Landing Visitors</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{visitors.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="100000"
                    step="5000"
                    value={visitors}
                    onChange={(e) => setVisitors(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-bold mb-1">
                    <span>2. Signup Step Rate</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{signupRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="20"
                    max="90"
                    value={signupRate}
                    onChange={(e) => setSignupRate(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-bold mb-1">
                    <span>3. Onboarding Activation Rate</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{activationRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="15"
                    max="80"
                    value={activationRate}
                    onChange={(e) => setActivationRate(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                  />
                </div>

                <div>
                  <div className="flex justify-between items-center text-xs font-bold mb-1">
                    <span>4. Paid Conversion Rate</span>
                    <span className="text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded">{paidRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="60"
                    value={paidRate}
                    onChange={(e) => setPaidRate(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#10B981]"
                  />
                </div>
              </div>

              {/* Calculated Funnel Output on Right */}
              <div className="lg:col-span-6 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm">
                <div className="border-b border-slate-100 pb-3">
                  <span className="text-xs text-slate-500 font-semibold">Total Signups Generated</span>
                  <div className="text-3xl font-black text-slate-900">{signups.toLocaleString()} users</div>
                </div>

                <div className="border-b border-slate-100 pb-3">
                  <span className="text-xs text-slate-500 font-semibold">Activated Power Users</span>
                  <div className="text-3xl font-black text-slate-900">{activations.toLocaleString()} users</div>
                </div>

                <div>
                  <span className="text-xs text-[#10B981] font-bold">Estimated Monthly Paid Conversions</span>
                  <div className="text-4xl font-black text-[#10B981]">{payingCustomers.toLocaleString()} customers</div>
                </div>

                <div className="pt-2">
                  <Link
                    to={`${basePath}/pricing`}
                    className="w-full inline-flex justify-center items-center py-3 px-4 rounded-xl text-xs font-bold text-white bg-[#10B981] hover:bg-[#059669] transition shadow-md"
                  >
                    Start Free 14-Day Trial →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Pillars Detailed Breakdown */}
      <section className="py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">Deep Dive 01</span>
              <h3 className="text-3xl font-black text-slate-900 mt-2">Retroactive Behavioral Event Telemetry</h3>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Never worry about forgetting to tag a button or track a modal. MetricNest captures raw DOM interactions and allows you to define queries retroactively so you can analyze historical trends without redeploying code.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Zero engineering tracking overhead</li>
                <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Backfill metrics for newly created funnels</li>
                <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Automatic PII scrubbing &amp; compliance</li>
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white p-4">
              <img src="/images/saas/metricnest/feature-user-journey.svg" alt="User Journey Mapping" className="w-full h-auto" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-white p-4">
              <img src="/images/saas/metricnest/feature-retention-analytics.svg" alt="Retention Analytics" className="w-full h-auto" />
            </div>
            <div className="order-1 md:order-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#10B981]">Deep Dive 02</span>
              <h3 className="text-3xl font-black text-slate-900 mt-2">Cohort Retention &amp; Stickiness Curves</h3>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Discover which product actions correlate with long-term retention. Segment by marketing source, user geography, or plan tier to pinpoint sticky features.
              </p>
              <ul className="mt-6 space-y-2.5 text-xs text-slate-700 font-medium">
                <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> N-day and unbounded cohort retention curves</li>
                <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Correlation discovery: find "Aha!" moments</li>
                <li className="flex items-center gap-2"><span className="text-emerald-600 font-bold">✓</span> Export cohort user lists to Slack or email marketing</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </MetricNestLayout>
  )
}
