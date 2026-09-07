import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MetricNestLayout } from './MetricNestLayout'
import { PartnerIcon } from './MetricNestIcons'

interface IntegrationItem {
  id: string
  name: string
  category: 'cdp' | 'crm' | 'warehouse' | 'messaging' | 'billing' | 'engineering'
  description: string
  syncLatency: string
  verified: boolean
}

export function MetricNestIntegrations() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/metricnest') ? '/metricnest' : '/saas/metricnest-analytics'

  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [connectedTools, setConnectedTools] = useState<Record<string, boolean>>({
    segment: true,
    slack: true,
  })
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const directory: IntegrationItem[] = [
    {
      id: 'segment',
      name: 'Segment CDP',
      category: 'cdp',
      description: 'Stream all frontend and backend events directly into MetricNest with zero client-side latency.',
      syncLatency: '< 50ms streaming',
      verified: true,
    },
    {
      id: 'stripe',
      name: 'Stripe Billing',
      category: 'billing',
      description: 'Correlate user journey drop-offs with failed checkouts, refunds, and expansion upgrades.',
      syncLatency: 'Real-time webhooks',
      verified: true,
    },
    {
      id: 'slack',
      name: 'Slack Alerts',
      category: 'messaging',
      description: 'Receive instant notifications when conversion rates spike or unexpected drop-offs are detected.',
      syncLatency: 'Instant push',
      verified: true,
    },
    {
      id: 'salesforce',
      name: 'Salesforce CRM',
      category: 'crm',
      description: 'Enrich lead and opportunity stages with detailed product usage frequency and active minutes.',
      syncLatency: '15m bi-directional',
      verified: true,
    },
    {
      id: 'hubspot',
      name: 'HubSpot',
      category: 'crm',
      description: 'Trigger personalized lifecycle email sequences based on exact user milestones inside your app.',
      syncLatency: 'Real-time sync',
      verified: true,
    },
    {
      id: 'google-analytics',
      name: 'Google Analytics 4',
      category: 'cdp',
      description: 'Connect pre-signup search campaigns with post-login user journey depth.',
      syncLatency: 'Hourly batch',
      verified: true,
    },
    {
      id: 'jira',
      name: 'Jira Software',
      category: 'engineering',
      description: 'Create bug tickets directly from session replay drop-off points with full console telemetry.',
      syncLatency: 'Instant ticket hook',
      verified: true,
    },
    {
      id: 'figma',
      name: 'Figma Embeds',
      category: 'engineering',
      description: 'Link prototype frames to live user heatmaps and A/B test variant performance.',
      syncLatency: 'Live iframe sync',
      verified: true,
    },
    {
      id: 'api',
      name: 'REST / GraphQL Ingestion API',
      category: 'warehouse',
      description: 'Custom ingestion endpoint handling up to 100,000 events/second per enterprise tenant.',
      syncLatency: '< 20ms HTTP',
      verified: true,
    },
  ]

  const filtered = directory.filter((item) => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory
    const matchQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchQuery
  })

  const handleToggle = (id: string, name: string) => {
    const next = !connectedTools[id]
    setConnectedTools(prev => ({ ...prev, [id]: next }))
    setToastMessage(next ? `Connected to ${name}! Ingesting test payload.` : `Disconnected ${name}.`)
    setTimeout(() => setToastMessage(null), 3000)
  }

  return (
    <MetricNestLayout>
      {/* Header */}
      <section className="bg-[#0B132B] py-16 md:py-24 text-white text-center border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#10B981]">
            Ecosystem Directory
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Connect Your Entire Stack
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            MetricNest integrates seamlessly with modern databases, CDPs, and business tools in under 5 minutes.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search integrations (e.g. Segment, Stripe, Jira)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-800/90 border border-slate-700 rounded-xl text-sm text-white placeholder-slate-400 focus:outline-none focus:border-[#10B981] shadow-lg"
            />
            <span className="absolute left-3.5 top-3.5 text-slate-400">🔍</span>
          </div>
        </div>
      </section>

      {/* Toast Notice */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0B132B] text-white px-5 py-3 rounded-xl border border-emerald-500/60 shadow-2xl text-xs font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
          {toastMessage}
        </div>
      )}

      {/* Category Pills & Directory */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { key: 'all', label: 'All Connectors' },
              { key: 'cdp', label: 'CDPs & Tag Managers' },
              { key: 'billing', label: 'Billing & Payments' },
              { key: 'crm', label: 'CRMs & Marketing' },
              { key: 'messaging', label: 'Alerts & Messaging' },
              { key: 'engineering', label: 'Product & Engineering' },
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                  activeCategory === cat.key
                    ? 'bg-[#10B981] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Directory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => {
              const connected = !!connectedTools[item.id]
              return (
                <div
                  key={item.id}
                  className="bg-[#F8FAFC] border border-slate-200 rounded-2xl p-6 hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <PartnerIcon name={item.id} className="w-10 h-10" />
                        <div>
                          <h3 className="text-base font-black text-slate-900">{item.name}</h3>
                          <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">{item.syncLatency}</span>
                        </div>
                      </div>
                      {item.verified && (
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                          Certified
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mt-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <span className={`w-2 h-2 rounded-full ${connected ? 'bg-[#10B981]' : 'bg-slate-300'}`} />
                      {connected ? 'Live Streaming' : 'Ready to Connect'}
                    </span>
                    <button
                      onClick={() => handleToggle(item.id, item.name)}
                      className={`text-xs font-bold px-3.5 py-1.5 rounded-lg transition ${
                        connected
                          ? 'bg-slate-200 text-slate-700 hover:bg-rose-50 hover:text-rose-600'
                          : 'bg-[#10B981] text-white hover:bg-[#059669]'
                      }`}
                    >
                      {connected ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </MetricNestLayout>
  )
}
