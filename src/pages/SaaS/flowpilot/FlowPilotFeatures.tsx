import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FlowPilotLayout } from './FlowPilotLayout'

export function FlowPilotFeatures() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/flowpilot') ? '/flowpilot' : '/saas/flowpilot-crm'

  // Interactive Action Queue simulator
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'urgent' | 'health' | 'automations'>('all')

  const queueItems = [
    {
      id: 1,
      category: 'urgent',
      rep: 'Alex M.',
      prospect: 'Acme Health Systems',
      contact: 'Dr. Eleanor Vance, VP Clinical Ops',
      dealValue: '$54,000 ARR',
      priorityScore: 9.6,
      reason: 'Proposal opened 3 times in past 2 hours; legal team mentioned in recent email exchange.',
      suggestedAction: 'Send executive contract summary & offer 15m review call.',
      badge: 'High Velocity',
      badgeColor: 'bg-emerald-100 text-emerald-800',
    },
    {
      id: 2,
      category: 'health',
      rep: 'Jordan T.',
      prospect: 'Kinetics Media Group',
      contact: 'David Sterling, Head of Revenue',
      dealValue: '$32,000 ARR',
      priorityScore: 9.2,
      reason: 'No seller touch in 14 days; deal velocity dropped 42% below stage average.',
      suggestedAction: 'Trigger contextual re-engagement sequence with case study.',
      badge: 'Stall Risk',
      badgeColor: 'bg-amber-100 text-amber-800',
    },
    {
      id: 3,
      category: 'automations',
      rep: 'Sophia R.',
      prospect: 'Hyperion Logistics',
      contact: 'Marcus Cole, COO',
      dealValue: '$78,000 ARR',
      priorityScore: 9.0,
      reason: 'Inbound booking from Zoom meeting completed. Meeting transcript synced.',
      suggestedAction: 'Automated post-meeting recap drafted with bulleted action items.',
      badge: 'Auto-Drafted',
      badgeColor: 'bg-sky-100 text-sky-800',
    },
    {
      id: 4,
      category: 'urgent',
      rep: 'Alex M.',
      prospect: 'Beacon Security LLC',
      contact: 'Rachel Green, CISO',
      dealValue: '$41,000 ARR',
      priorityScore: 8.7,
      reason: 'SOC-2 audit checklist approved; procurement step initiated.',
      suggestedAction: 'Send procurement agreement link and vendor onboarding packet.',
      badge: 'Closing Stage',
      badgeColor: 'bg-teal-100 text-teal-800',
    },
  ]

  const filteredItems = selectedCategory === 'all'
    ? queueItems
    : queueItems.filter(item => item.category === selectedCategory)

  return (
    <FlowPilotLayout>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#F0FDF9] to-white py-16 md:py-24 border-b border-sky-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
            Product Capabilities
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Built for Sales Velocity, Engineered for Peace of Mind.
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Discover the three foundational pillars that replace complex CRM tables with clear, high-leverage execution.
          </p>
        </div>
      </section>

      {/* Feature 1: Ranked Follow-Ups Deep Dive */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                Pillar 01
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Ranked Follow-Ups &amp; Next-Best Actions
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Most CRMs treat every lead as an equal task on a flat checklist. FlowPilot’s proprietary algorithm analyzes recency, deal size, stakeholder role, and message engagement to rank follow-ups by immediate revenue impact.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-[#0D9488] font-bold text-base">✓</span>
                  <div>
                    <strong className="text-slate-900">Engagement-Weighted Scoring:</strong> Prioritizes contacts who opened proposals, visited pricing pages, or looped in leadership.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#0D9488] font-bold text-base">✓</span>
                  <div>
                    <strong className="text-slate-900">Zero-Search Daily Queue:</strong> Wake up to 5–10 crystal clear moves, without running complex pipeline reports.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#0D9488] font-bold text-base">✓</span>
                  <div>
                    <strong className="text-slate-900">Context Snapping:</strong> Click any action and instantly read the last 3 touchpoints across email, notes, and calls in one window.
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Sandbox Queue */}
            <div className="bg-[#F8FDFF] border border-sky-100 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center justify-between pb-4 border-b border-sky-100">
                <h3 className="font-black text-slate-900 text-sm">Interactive Action Queue Simulator</h3>
                <span className="text-[11px] font-bold text-[#0D9488] bg-teal-50 px-2 py-0.5 rounded">
                  Live Preview
                </span>
              </div>

              {/* Filter Pills */}
              <div className="mt-4 flex flex-wrap gap-2">
                {[
                  { key: 'all', label: 'All Items (4)' },
                  { key: 'urgent', label: 'High Velocity' },
                  { key: 'health', label: 'Stall Warnings' },
                  { key: 'automations', label: 'Auto-Drafted' },
                ].map((pill) => (
                  <button
                    key={pill.key}
                    onClick={() => setSelectedCategory(pill.key as any)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition ${
                      selectedCategory === pill.key
                        ? 'bg-[#0D9488] text-white shadow-xs'
                        : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>

              {/* Items List */}
              <div className="mt-4 space-y-3">
                {filteredItems.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white border border-slate-200 rounded-xl p-4 hover:border-teal-300 transition"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded ${item.badgeColor}`}>
                          {item.badge}
                        </span>
                        <span className="text-xs font-bold text-slate-900">{item.prospect}</span>
                      </div>
                      <span className="text-xs font-black text-teal-700 bg-teal-50 px-2 py-0.5 rounded">
                        Score {item.priorityScore}
                      </span>
                    </div>

                    <p className="mt-1.5 text-xs text-slate-500 font-medium">
                      {item.contact} · <span className="text-slate-700 font-bold">{item.dealValue}</span>
                    </p>
                    <p className="mt-2 text-xs text-slate-600 bg-slate-50 p-2 rounded">
                      💡 {item.reason}
                    </p>

                    <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100">
                      <span className="text-[11px] font-semibold text-[#0D9488]">
                        Next: {item.suggestedAction}
                      </span>
                      <button className="text-[11px] font-bold px-3 py-1 rounded bg-[#0D9488] text-white hover:bg-[#0F766E] transition">
                        Execute →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2: Pipeline Health Intelligence */}
      <section className="py-20 bg-[#FAFDFF] border-y border-sky-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Visual health preview */}
            <div className="order-2 lg:order-1 bg-white border border-sky-100 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <span className="text-xs font-bold text-slate-500">Pipeline Velocity &amp; Risk Signals</span>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full">
                  Real-time Context
                </span>
              </div>

              <div className="mt-6 space-y-4">
                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">⚠️</span>
                    <h4 className="text-xs font-black text-amber-900">Stall Warning: 3 Deals In Contract Review</h4>
                  </div>
                  <p className="mt-1 text-xs text-amber-800">
                    Average contract turnaround is usually 4 days. These deals have been sitting for 9 days without redline updates.
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <button className="text-[10px] font-bold px-2.5 py-1 rounded bg-white text-amber-900 border border-amber-300">
                      Send Pre-Built Legal Bump
                    </button>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-teal-50/70 border border-teal-200">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">✓</span>
                    <h4 className="text-xs font-black text-teal-900">Strong Momentum: Enterprise Tier Tier-Up</h4>
                  </div>
                  <p className="mt-1 text-xs text-teal-800">
                    4 new stakeholders joined the customer Slack channel. Health index jumped from 72 to 94.
                  </p>
                </div>
              </div>
            </div>

            {/* Text description */}
            <div className="order-1 lg:order-2">
              <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
                Pillar 02
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                Pipeline Health Signals &amp; Stalled Deal Warnings
              </h2>
              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                Deals rarely die suddenly — they stall quietly over weeks while reps hope for the best. FlowPilot spots cadence drop-offs before weekly forecasts slip.
              </p>

              <div className="mt-6 space-y-3 text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <span className="text-[#0D9488] font-bold text-base">✓</span>
                  <div>
                    <strong className="text-slate-900">Early Warning Alerts:</strong> Identifies silent accounts days before normal CRM reports flag them as overdue.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#0D9488] font-bold text-base">✓</span>
                  <div>
                    <strong className="text-slate-900">Automated Re-engagement:</strong> Suggests specific questions and relevant case studies tailored to why the deal paused.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#0D9488] font-bold text-base">✓</span>
                  <div>
                    <strong className="text-slate-900">Objective Forecast Clarity:</strong> Sales leaders see pipeline health based on verifiable customer actions, not subjective gut-feels.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3: Context Automations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <span className="text-xs font-bold uppercase tracking-wider text-teal-700 bg-teal-50 px-3 py-1 rounded-full">
            Pillar 03
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Lightweight Automations That Preserve Context
          </h2>
          <p className="mt-4 text-base text-slate-600 leading-relaxed">
            Generic automation blasts cold generic emails that damage relationships. FlowPilot automates data hygiene, follow-up preparation, and team pings while keeping you in complete control.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="p-6 bg-[#FAFDFF] border border-sky-100 rounded-xl">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="font-bold text-slate-900 text-sm">Post-Call Briefs</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Connect Zoom or Google Meet. FlowPilot summarizes next steps and drafts the recap email automatically.
              </p>
            </div>

            <div className="p-6 bg-[#FAFDFF] border border-sky-100 rounded-xl">
              <div className="text-2xl mb-3">📬</div>
              <h3 className="font-bold text-slate-900 text-sm">Email Context Sync</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Works directly inside Gmail &amp; Outlook without browser extensions cluttering your inbox.
              </p>
            </div>

            <div className="p-6 bg-[#FAFDFF] border border-sky-100 rounded-xl">
              <div className="text-2xl mb-3">🔔</div>
              <h3 className="font-bold text-slate-900 text-sm">Slack Deal Rooms</h3>
              <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                Broadcast critical stage advancements and buyer questions into dedicated deal channels automatically.
              </p>
            </div>
          </div>

          <div className="mt-12">
            <Link
              to={`${basePath}/trial`}
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl text-base font-bold text-white bg-[#0D9488] hover:bg-[#0F766E] shadow-lg transition"
            >
              Start Free 14-Day Trial →
            </Link>
          </div>
        </div>
      </section>
    </FlowPilotLayout>
  )
}
