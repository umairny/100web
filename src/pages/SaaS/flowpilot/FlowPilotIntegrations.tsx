import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FlowPilotLayout } from './FlowPilotLayout'
import { IntegrationIcon } from './FlowPilotIcons'

interface IntegrationItem {
  id: string
  name: string
  category: 'crm' | 'email' | 'communication' | 'video' | 'automation'
  description: string
  syncType: 'Two-way live sync' | 'Webhooks & Triggers' | 'Smart Transcript Extraction'
  status: 'Certified' | 'Popular' | 'Instant Setup'
}

export function FlowPilotIntegrations() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/flowpilot') ? '/flowpilot' : '/saas/flowpilot-crm'

  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [connectedApps, setConnectedApps] = useState<Record<string, boolean>>({
    gmail: true,
    slack: true,
  })
  const [syncNotice, setSyncNotice] = useState<string | null>(null)

  const integrationsList: IntegrationItem[] = [
    {
      id: 'salesforce',
      name: 'Salesforce',
      category: 'crm',
      description: 'Overlay FlowPilot directly on top of Salesforce objects without data migration or re-mapping.',
      syncType: 'Two-way live sync',
      status: 'Popular',
    },
    {
      id: 'pipedrive',
      name: 'Pipedrive',
      category: 'crm',
      description: 'Sync stages, activities, and contact notes seamlessly in both directions in under 60 seconds.',
      syncType: 'Two-way live sync',
      status: 'Popular',
    },
    {
      id: 'hubspot',
      name: 'HubSpot',
      category: 'crm',
      description: 'Turn bloated HubSpot deal pipelines into a calm daily action queue for your quota carriers.',
      syncType: 'Two-way live sync',
      status: 'Certified',
    },
    {
      id: 'gmail',
      name: 'Google Workspace / Gmail',
      category: 'email',
      description: 'Contextually detects prospect replies, unread threads, and proposal views right inside your workflow.',
      syncType: 'Two-way live sync',
      status: 'Instant Setup',
    },
    {
      id: 'outlook',
      name: 'Microsoft Outlook 365',
      category: 'email',
      description: 'Native Microsoft Exchange sync for enterprise sales teams. Zero browser plugins required.',
      syncType: 'Two-way live sync',
      status: 'Instant Setup',
    },
    {
      id: 'slack',
      name: 'Slack',
      category: 'communication',
      description: 'Instant deal room pings when health indicators change, or run your daily action queue right in Slack.',
      syncType: 'Webhooks & Triggers',
      status: 'Popular',
    },
    {
      id: 'teams',
      name: 'Microsoft Teams',
      category: 'communication',
      description: 'Broadcast wins, deal alerts, and stalled account notifications into designated channels.',
      syncType: 'Webhooks & Triggers',
      status: 'Certified',
    },
    {
      id: 'zoom',
      name: 'Zoom Meetings',
      category: 'video',
      description: 'Automated transcript parsing that extracts action items and drafts client follow-ups instantly.',
      syncType: 'Smart Transcript Extraction',
      status: 'Popular',
    },
    {
      id: 'calendly',
      name: 'Calendly',
      category: 'email',
      description: 'Automatically creates deal records and cues preparation briefs whenever a prospect books a slot.',
      syncType: 'Webhooks & Triggers',
      status: 'Instant Setup',
    },
    {
      id: 'stripe',
      name: 'Stripe Billing',
      category: 'automation',
      description: 'Track invoice payments, trial conversions, and renewal health signals without leaving your queue.',
      syncType: 'Two-way live sync',
      status: 'Certified',
    },
    {
      id: 'zapier',
      name: 'Zapier',
      category: 'automation',
      description: 'Connect FlowPilot to over 5,000+ business tools with custom event triggers.',
      syncType: 'Webhooks & Triggers',
      status: 'Certified',
    },
    {
      id: 'notion',
      name: 'Notion',
      category: 'automation',
      description: 'Sync account research, battle cards, and team playbooks directly into contact cards.',
      syncType: 'Two-way live sync',
      status: 'Instant Setup',
    },
  ]

  const filteredIntegrations = integrationsList.filter((item) => {
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleConnection = (id: string, name: string) => {
    const newState = !connectedApps[id]
    setConnectedApps(prev => ({ ...prev, [id]: newState }))
    setSyncNotice(newState ? `Connected to ${name} with encrypted live sync!` : `Disconnected from ${name}.`)
    setTimeout(() => setSyncNotice(null), 3000)
  }

  return (
    <FlowPilotLayout>
      {/* Page Header */}
      <section className="bg-gradient-to-b from-[#F0FDF9] to-white py-16 md:py-24 border-b border-sky-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
            Ecosystem
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Seamlessly Integrates with Your Tech Stack.
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            FlowPilot overlays peacefully on top of your existing tools. No messy migrations, no database restructuring, no disruption to existing workflows.
          </p>

          {/* Search bar */}
          <div className="mt-8 max-w-md mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search 20+ integrations (e.g. Salesforce, Slack)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#0D9488] shadow-sm"
              />
              <span className="absolute left-3.5 top-3.5 text-slate-400">🔍</span>
            </div>
          </div>
        </div>
      </section>

      {/* Sync Toast Notice */}
      {syncNotice && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0F172A] text-white px-5 py-3 rounded-xl shadow-2xl text-xs font-bold flex items-center gap-2 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-teal-400" />
          {syncNotice}
        </div>
      )}

      {/* Category Pills & Directory Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { key: 'all', label: 'All Integrations' },
              { key: 'crm', label: 'CRMs' },
              { key: 'email', label: 'Email & Calendar' },
              { key: 'communication', label: 'Messaging' },
              { key: 'video', label: 'Video Conferencing' },
              { key: 'automation', label: 'Automation & Billing' },
            ].map((cat) => (
              <button
                key={cat.key}
                onClick={() => setSelectedCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition ${
                  selectedCategory === cat.key
                    ? 'bg-[#0D9488] text-white shadow-sm'
                    : 'bg-[#F8FAFC] text-slate-600 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((item) => {
              const isConnected = !!connectedApps[item.id]
              return (
                <div
                  key={item.id}
                  className="bg-[#FAFDFF] border border-sky-100 rounded-2xl p-6 hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <IntegrationIcon name={item.id} className="w-10 h-10" />
                        <div>
                          <h3 className="text-base font-black text-slate-900">{item.name}</h3>
                          <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                            {item.syncType}
                          </span>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-teal-50 text-[#0D9488]">
                        {item.status}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed mt-3">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-sky-100 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <span className={`w-2 h-2 rounded-full ${isConnected ? 'bg-emerald-500' : 'bg-slate-300'}`} />
                      {isConnected ? 'Active Live Sync' : 'Not Connected'}
                    </span>
                    <button
                      onClick={() => toggleConnection(item.id, item.name)}
                      className={`text-xs font-bold px-3.5 py-1.5 rounded-lg transition ${
                        isConnected
                          ? 'bg-slate-100 text-slate-700 hover:bg-rose-50 hover:text-rose-600'
                          : 'bg-[#0D9488] text-white hover:bg-[#0F766E]'
                      }`}
                    >
                      {isConnected ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Need a custom integration banner */}
          <div className="mt-16 bg-gradient-to-r from-[#E0F2FE] to-[#CCFBF1] rounded-2xl p-8 text-center max-w-3xl mx-auto">
            <h3 className="text-xl font-black text-slate-900">Don't see your specific in-house stack?</h3>
            <p className="mt-2 text-sm text-slate-600">
              Our REST API and enterprise Webhooks support any proprietary database or custom data warehouse with SOC-2 end-to-end encryption.
            </p>
            <div className="mt-6">
              <Link
                to={`${basePath}/trial`}
                className="inline-flex items-center px-6 py-3 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition shadow-sm"
              >
                Request Custom Connector →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </FlowPilotLayout>
  )
}
