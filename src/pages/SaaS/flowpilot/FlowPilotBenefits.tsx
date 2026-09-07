import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FlowPilotLayout } from './FlowPilotLayout'

export function FlowPilotBenefits() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/flowpilot') ? '/flowpilot' : '/saas/flowpilot-crm'

  // Interactive ROI & Burnout Calculator state
  const [repCount, setRepCount] = useState(6)
  const [dealSize, setDealSize] = useState(25000)

  // Calculations:
  // Avg hours saved per rep per month = 22 hours
  // Extra closed deals per year per team = repCount * 1.8
  // Revenue upside = extra deals * dealSize
  const hoursSavedMonthly = repCount * 22
  const extraDealsYearly = Math.round(repCount * 1.6)
  const revenueUpside = extraDealsYearly * dealSize

  return (
    <FlowPilotLayout>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#F0FDF9] to-white py-16 md:py-24 border-b border-sky-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
            The Business Impact
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Why Sales Teams Operate Better in Flow.
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Eliminating cognitive clutter isn’t just about mental wellness — it directly translates to faster response times, higher win rates, and reliable revenue.
          </p>
        </div>
      </section>

      {/* Interactive Burnout & ROI Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-[#FAFDFF] to-[#F0FDFA] border-2 border-teal-200 rounded-3xl p-8 sm:p-12 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-black uppercase tracking-wider text-teal-800 bg-teal-100 px-3 py-1 rounded-full">
                Interactive Calculator
              </span>
              <h2 className="mt-3 text-3xl font-black text-slate-900">
                Estimate Your Team's Flow Dividends
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Adjust team size and average deal size to calculate time recovered and potential revenue uplift.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* Sliders on Left */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-slate-800">
                      Number of Account Executives / Reps:
                    </label>
                    <span className="text-base font-black text-[#0D9488] bg-white px-3 py-1 rounded-lg border border-teal-200">
                      {repCount} sellers
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={repCount}
                    onChange={(e) => setRepCount(parseInt(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0D9488]"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>1 rep</span>
                    <span>25 reps</span>
                    <span>50 reps</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-bold text-slate-800">
                      Average Deal Size (ARR):
                    </label>
                    <span className="text-base font-black text-[#0D9488] bg-white px-3 py-1 rounded-lg border border-teal-200">
                      ${dealSize.toLocaleString()}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="5000"
                    max="150000"
                    step="5000"
                    value={dealSize}
                    onChange={(e) => setDealSize(parseInt(e.target.value))}
                    className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0D9488]"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>$5k</span>
                    <span>$75k</span>
                    <span>$150k+</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 text-xs text-slate-500 leading-relaxed">
                  💡 Based on verified team studies: Sales reps spend an average of 5.5 hours weekly updating CRM notes, hunting lost email threads, and logging data. FlowPilot cuts this admin by 82%.
                </div>
              </div>

              {/* Calculated Results on Right */}
              <div className="lg:col-span-6 bg-white border border-teal-200 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6">
                <div className="border-b border-slate-100 pb-4">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Admin Hours Saved Monthly
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900">
                      {hoursSavedMonthly} hrs
                    </span>
                    <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                      ~22 hrs/rep
                    </span>
                  </div>
                </div>

                <div className="border-b border-slate-100 pb-4">
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                    Projected Extra Wins Yearly
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-slate-900">
                      +{extraDealsYearly} deals
                    </span>
                    <span className="text-xs font-semibold text-slate-500">
                      from eliminated stall leakage
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-xs font-bold text-[#0D9488] uppercase tracking-wider">
                    Estimated Annual Revenue Uplift
                  </p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-[#0D9488]">
                      +${revenueUpside.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="pt-2">
                  <Link
                    to={`${basePath}/trial`}
                    className="w-full inline-flex items-center justify-center py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-[#0D9488] hover:bg-[#0F766E] shadow-md transition"
                  >
                    Unlock These Dividends (Free Trial) →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Core Benefit Pillars Deep Dive */}
      <section className="py-20 bg-[#FAFDFF] border-t border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-sm">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-black text-slate-900">Move Faster, More Confidently</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                When sellers open their CRM and immediately see who to follow up with and why, hesitation vanishes. Reps reach out within minutes of high-intent prospect behavior instead of hours later.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Metric: 3.2x faster response rate on critical prospect touchpoints.
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-sm">
              <div className="text-3xl mb-4">💬</div>
              <h3 className="text-xl font-black text-slate-900">Keep Conversations Relevant</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                No customer enjoys receiving "Just checking in" emails. FlowPilot attaches the exact context — the last question asked, recent page visits, or meeting notes — so every message feels personal and valuable.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Metric: 48% higher reply rate on ranked re-engagement nudges.
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-sm">
              <div className="text-3xl mb-4">🌿</div>
              <h3 className="text-xl font-black text-slate-900">Minimize Sales Burnout</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Cognitive overload from complex multi-tab software is the number one cause of sales turnover. FlowPilot replaces hundreds of micro-decisions with a serene, single-screen focus.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Metric: 64% reduction in daily CRM administrative fatigue.
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-sky-100 shadow-sm">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-black text-slate-900">Better Forecasting and Planning</h3>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                Instead of arguing about deal probability stages during weekly meetings, leaders see objective health indicators based on real two-way interactions and momentum metrics.
              </p>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-500">
                Metric: 91% quarterly forecast accuracy for teams over 10 reps.
              </div>
            </div>
          </div>
        </div>
      </section>
    </FlowPilotLayout>
  )
}
