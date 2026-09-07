import React, { useState } from 'react'
import { PeoplePulseLayout } from './PeoplePulseLayout'
import {
  SlackLogo,
  MicrosoftLogo,
  ZoomLogo,
  GoogleWorkspaceLogo,
  AdpLogo,
  GustoLogo,
  LeverLogo,
  GreenhouseLogo,
} from './PeoplePulseIcons'

interface IntegrationItem {
  id: string
  name: string
  category: 'COMMUNICATION' | 'PAYROLL' | 'ATS' | 'CALENDAR'
  description: string
  icon: React.ComponentType<{ className?: string }>
}

export function PeoplePulseIntegrations() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('ALL')
  const [connectingItem, setConnectingItem] = useState<IntegrationItem | null>(null)
  const [isSyncing, setIsSyncing] = useState(false)
  const [connectedIds, setConnectedIds] = useState<string[]>(['slack', 'google', 'gusto'])

  const integrations: IntegrationItem[] = [
    {
      id: 'slack',
      name: 'Slack',
      category: 'COMMUNICATION',
      description: 'Receive PTO request notifications, celebrate birthdays and work anniversaries in public channels.',
      icon: SlackLogo,
    },
    {
      id: 'microsoft',
      name: 'Microsoft 365 & Teams',
      category: 'COMMUNICATION',
      description: 'Approve time off directly in Teams chats and sync user profiles with Azure AD.',
      icon: MicrosoftLogo,
    },
    {
      id: 'zoom',
      name: 'Zoom',
      category: 'COMMUNICATION',
      description: 'Auto-generate 1-on-1 meeting video links for review cycles and onboarding introductions.',
      icon: ZoomLogo,
    },
    {
      id: 'google',
      name: 'Google Workspace',
      category: 'CALENDAR',
      description: 'Two-way calendar sync for team time off, company holidays, and Google SSO authentication.',
      icon: GoogleWorkspaceLogo,
    },
    {
      id: 'adp',
      name: 'ADP Workforce Now',
      category: 'PAYROLL',
      description: 'Seamlessly sync employee salary rates, deductions, and tax withholdings with ADP.',
      icon: AdpLogo,
    },
    {
      id: 'gusto',
      name: 'Gusto Payroll',
      category: 'PAYROLL',
      description: 'Automate new hire payroll creation, benefits elections, and hourly contractor payouts.',
      icon: GustoLogo,
    },
    {
      id: 'lever',
      name: 'Lever ATS',
      category: 'ATS',
      description: 'Automatically convert hired candidates into PeoplePulse new hire onboarding journeys.',
      icon: LeverLogo,
    },
    {
      id: 'greenhouse',
      name: 'Greenhouse',
      category: 'ATS',
      description: '1-click offer letter and candidate profile import directly into the employee directory.',
      icon: GreenhouseLogo,
    },
  ]

  const filtered = integrations.filter((item) => {
    const matchesCat = category === 'ALL' || item.category === category
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    return matchesCat && matchesSearch
  })

  const toggleConnect = (item: IntegrationItem) => {
    if (connectedIds.includes(item.id)) {
      setConnectedIds((prev) => prev.filter((id) => id !== item.id))
    } else {
      setConnectingItem(item)
    }
  }

  const confirmConnect = () => {
    if (!connectingItem) return
    setIsSyncing(true)
    setTimeout(() => {
      setConnectedIds((prev) => [...prev, connectingItem.id])
      setIsSyncing(false)
      setConnectingItem(null)
    }, 800)
  }

  return (
    <PeoplePulseLayout>
      {/* Header */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-[#EEF2FF]/60 to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold mb-4">
            Workplace Connectivity
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Works with Your Entire Tech Stack.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Connect Slack, Google Calendar, Gusto, and your favorite ATS with zero coding.
          </p>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="relative w-full md:w-80">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search HR integrations..."
                className="w-full px-4 py-3 rounded-2xl border border-slate-200 text-xs focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
              />
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {(['ALL', 'COMMUNICATION', 'PAYROLL', 'ATS', 'CALENDAR'] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition ${
                    category === cat
                      ? 'bg-[#2563EB] text-white shadow-sm'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item) => {
              const Icon = item.icon
              const isConnected = connectedIds.includes(item.id)

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#2563EB] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-600">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">{item.name}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">{item.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    {isConnected ? (
                      <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" /> Connected
                      </span>
                    ) : (
                      <span className="text-xs text-slate-400">Available</span>
                    )}

                    <button
                      onClick={() => toggleConnect(item)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition ${
                        isConnected
                          ? 'border border-slate-200 text-slate-600 hover:bg-red-50 hover:text-red-600 hover:border-red-200'
                          : 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]'
                      }`}
                    >
                      {isConnected ? 'Disconnect' : 'Connect'}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* 1-Click Connect Modal */}
      {connectingItem && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <connectingItem.icon className="w-8 h-8" />
                <h3 className="font-bold text-slate-900 text-lg">Connect {connectingItem.name}</h3>
              </div>
              <button
                onClick={() => setConnectingItem(null)}
                className="text-slate-400 hover:text-slate-600 font-bold text-xl"
              >
                &times;
              </button>
            </div>

            <div className="py-6 space-y-4 text-xs text-slate-600">
              <p>
                PeoplePulse HR will authenticate with <strong>{connectingItem.name}</strong> to enable automated data sync.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                <div className="font-bold text-slate-800">Permissions:</div>
                <div>• Read &amp; write employee profile records</div>
                <div>• Bi-directional calendar and notification status</div>
                <div>• End-to-end encrypted token exchange</div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <button
                onClick={() => setConnectingItem(null)}
                className="flex-1 py-2.5 rounded-xl border border-slate-200 font-bold text-xs text-slate-600 hover:bg-slate-50"
              >
                Cancel
              </button>
              <button
                onClick={confirmConnect}
                disabled={isSyncing}
                className="flex-1 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2"
              >
                {isSyncing ? 'Connecting...' : 'Authorize Integration'}
              </button>
            </div>
          </div>
        </div>
      )}
    </PeoplePulseLayout>
  )
}
