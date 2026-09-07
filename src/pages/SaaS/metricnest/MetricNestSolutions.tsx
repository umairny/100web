import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MetricNestLayout } from './MetricNestLayout'

export function MetricNestSolutions() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/metricnest') ? '/metricnest' : '/saas/metricnest-analytics'

  const [activeTab, setActiveTab] = useState<'pm' | 'growth' | 'exec'>('pm')

  const solutions = {
    pm: {
      role: 'For Product Managers',
      title: 'Prioritize What Truly Moves Your Roadmap',
      desc: 'Stop guessing which features users love and which gather digital dust. MetricNest shows adoption velocity, feature drop-off, and user paths with precision.',
      bullets: [
        'Feature adoption rate across distinct user segments',
        'Automatic path discovery when onboarding stalls',
        'Direct correlation between user actions and 30-day retention',
      ],
      metric: '4.8x faster feature evaluation cycles',
    },
    growth: {
      role: 'For Growth Marketers',
      title: 'Eliminate Funnel Leaks & Amplify CAC Efficiency',
      desc: 'Trace acquisition channels all the way through activation and monetization. Know the exact lifetime value of Google, LinkedIn, and organic search traffic.',
      bullets: [
        'Multi-touch attribution with reverse path analysis',
        'Real-time landing page A/B test statistical significance',
        'Automated drop-off alerts directly piped into Slack',
      ],
      metric: '+32% average conversion uplift in 90 days',
    },
    exec: {
      role: 'For Founders & Executives',
      title: 'Investor-Ready Retention & Unit Economics',
      desc: 'Unify product telemetry with Stripe revenue metrics. See cohort retention curves, net revenue expansion, and churn predictability at a single glance.',
      bullets: [
        'Real-time MRR and LTV calculations tied to active usage',
        'Board-ready cohort retention heatmaps',
        'SOC-2 Type II certified enterprise data governance',
      ],
      metric: '100% board transparency with live dashboards',
    },
  }

  const current = solutions[activeTab]

  return (
    <MetricNestLayout>
      {/* Header */}
      <section className="bg-[#0B132B] py-16 md:py-24 text-white text-center border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#10B981]">
            Tailored Solutions
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Analytics Tailored to How Your Team Builds.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto">
            Whether you are shipping features, optimizing acquisition funnels, or reporting to your board, MetricNest provides clear answers.
          </p>
        </div>
      </section>

      {/* Role Tabs Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Selector */}
          <div className="flex justify-center gap-2 p-1.5 bg-slate-100 rounded-2xl max-w-md mx-auto mb-12">
            {[
              { key: 'pm', label: 'Product Teams' },
              { key: 'growth', label: 'Growth Teams' },
              { key: 'exec', label: 'Founders & Execs' },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key as any)}
                className={`flex-1 py-2.5 rounded-xl text-xs font-bold transition ${
                  activeTab === tab.key
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Solution Content Card */}
          <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 bg-emerald-100 px-3 py-1 rounded-full">
                  {current.role}
                </span>
                <h2 className="text-3xl font-black text-slate-900 leading-tight">
                  {current.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {current.desc}
                </p>
                <div className="pt-2 space-y-2.5">
                  {current.bullets.map((b, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 font-medium">
                      <span className="text-[#10B981] font-bold text-sm">✓</span>
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
                <div className="pt-4">
                  <Link
                    to={`${basePath}/pricing`}
                    className="inline-flex items-center px-6 py-3 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold transition shadow-md"
                  >
                    Start Free Trial for {current.role.replace('For ', '')} →
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white border border-slate-200 rounded-2xl p-6 text-center space-y-4 shadow-xs">
                <div className="text-3xl">🎯</div>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block">
                  Measured Customer Impact
                </span>
                <div className="text-2xl font-black text-slate-900">
                  {current.metric}
                </div>
                <p className="text-xs text-slate-500">
                  Based on telemetry benchmarks across 450+ high-growth software products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MetricNestLayout>
  )
}
