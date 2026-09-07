import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SupportDockLayout } from './SupportDockLayout'
import { SupportPartnerIcon } from './SupportDockIcons'

interface IntegrationItem {
  id: string
  name: string
  category: 'helpdesk' | 'ecommerce' | 'crm' | 'chat' | 'developer'
  description: string
  deflectionRate: string
  status: 'Turnkey' | 'Popular' | 'Instant Setup'
}

export function SupportDockIntegrations() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/supportdock') ? '/supportdock' : '/saas/supportdock-ai'

  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [connectedTools, setConnectedTools] = useState<Record<string, boolean>>({
    zendesk: true,
    shopify: true,
    slack: true,
  })
  const [toastMsg, setToastMsg] = useState<string | null>(null)

  const integrationsList: IntegrationItem[] = [
    {
      id: 'zendesk',
      name: 'Zendesk Support',
      category: 'helpdesk',
      description: 'Reads Zendesk macros, solves incoming tickets autonomously, and updates tags in real-time.',
      deflectionRate: '68% deflection',
      status: 'Popular',
    },
    {
      id: 'shopify',
      name: 'Shopify Store',
      category: 'ecommerce',
      description: 'Authenticates customer emails, pulls live order tracking, processes refunds, and modifies shipping addresses.',
      deflectionRate: '74% deflection',
      status: 'Popular',
    },
    {
      id: 'salesforce',
      name: 'Salesforce Service Cloud',
      category: 'crm',
      description: 'Synchronizes case histories, logs autonomous responses, and attaches sentiment score to contact objects.',
      deflectionRate: '58% deflection',
      status: 'Turnkey',
    },
    {
      id: 'hubspot',
      name: 'HubSpot Service Hub',
      category: 'crm',
      description: 'Resolves service tickets, updates deal stage properties, and triggers post-resolution CSAT surveys.',
      deflectionRate: '62% deflection',
      status: 'Turnkey',
    },
    {
      id: 'slack',
      name: 'Slack Deal & Triage Rooms',
      category: 'chat',
      description: 'Broadcasts VIP customer churn alerts and allows human reps to answer escalated tickets directly in Slack.',
      deflectionRate: 'Instant agent handoff',
      status: 'Popular',
    },
    {
      id: 'intercom',
      name: 'Intercom Messenger',
      category: 'chat',
      description: 'Injects SupportDock AI directly into Intercom live chat widgets for instant 24/7 web visitor triage.',
      deflectionRate: '71% deflection',
      status: 'Instant Setup',
    },
    {
      id: 'gmail',
      name: 'Gmail & Google Workspace',
      category: 'helpdesk',
      description: 'Ingests support inbox threads, drafts context-aware replies, and files auto-resolved archive labels.',
      deflectionRate: '64% deflection',
      status: 'Instant Setup',
    },
    {
      id: 'jira',
      name: 'Jira Service Management',
      category: 'developer',
      description: 'Translates recurring customer complaints into structured engineering bug reports with full telemetry.',
      deflectionRate: 'Instant engineering link',
      status: 'Turnkey',
    },
  ]

  const filtered = integrationsList.filter((item) => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory
    const matchQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                       item.description.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCat && matchQuery
  })

  const toggleConnection = (id: string, name: string) => {
    const next = !connectedTools[id]
    setConnectedTools(prev => ({ ...prev, [id]: next }))
    setToastMsg(next ? `Connected to ${name}! Ingesting webhook test payload.` : `Disconnected from ${name}.`)
    setTimeout(() => setToastMsg(null), 3000)
  }

  return (
    <SupportDockLayout>
      {/* Header */}
      <section className="bg-[#E8FBF4] py-16 md:py-24 text-center border-b border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
            Seamless Integrations
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Works Seamlessly With 100+ Tools.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 max-w-xl mx-auto">
            SupportDock AI overlays peacefully on top of your existing ticketing systems, eCommerce platforms, and messaging stacks.
          </p>

          {/* Search Box */}
          <div className="mt-8 max-w-md mx-auto relative">
            <input
              type="text"
              placeholder="Search tools (e.g. Zendesk, Shopify, Slack)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-full text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#10B981] shadow-sm"
            />
            <span className="absolute left-3.5 top-3.5 text-slate-400">🔍</span>
          </div>
        </div>
      </section>

      {/* Toast Notice */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#061E2D] text-white px-5 py-3 rounded-xl shadow-2xl text-xs font-bold flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
          {toastMsg}
        </div>
      )}

      {/* Category Pills & Directory Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {[
              { key: 'all', label: 'All 100+ Tools' },
              { key: 'helpdesk', label: 'Help Desks' },
              { key: 'ecommerce', label: 'eCommerce' },
              { key: 'crm', label: 'CRMs' },
              { key: 'chat', label: 'Live Chat & Messaging' },
              { key: 'developer', label: 'Developer & Bug Trackers' },
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

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((tool) => {
              const connected = !!connectedTools[tool.id]
              return (
                <div
                  key={tool.id}
                  className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-md transition flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <SupportPartnerIcon name={tool.id} className="w-10 h-10" />
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800">
                        {tool.status}
                      </span>
                    </div>

                    <h3 className="font-black text-sm text-slate-900">{tool.name}</h3>
                    <p className="text-[11px] text-emerald-700 font-bold mt-0.5">{tool.deflectionRate}</p>
                    <p className="text-xs text-slate-500 leading-relaxed mt-2">{tool.description}</p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-slate-500">
                      <span className={`w-2 h-2 rounded-full ${connected ? 'bg-[#10B981]' : 'bg-slate-300'}`} />
                      {connected ? 'Active' : 'Disconnected'}
                    </span>
                    <button
                      onClick={() => toggleConnection(tool.id, tool.name)}
                      className={`text-xs font-bold px-3 py-1.5 rounded-lg transition ${
                        connected
                          ? 'bg-slate-100 text-slate-700 hover:bg-rose-50 hover:text-rose-600'
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
    </SupportDockLayout>
  )
}
