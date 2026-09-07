import React, { useState } from 'react'
import { SecureLayerLayout } from './SecureLayerLayout'
import {
  AwsIcon,
  AzureIcon,
  GoogleCloudIcon,
  OktaIcon,
  GitHubIcon,
  GitLabIcon,
  SlackIcon,
  JiraIcon,
  HubSpotIcon,
  AsanaIcon,
  JamfIcon,
} from './SecureLayerIcons'

interface IntegrationItem {
  id: string
  name: string
  category: 'CLOUD' | 'IDENTITY' | 'DEV TOOLS' | 'PROJECT MGMT' | 'ENDPOINT'
  description: string
  icon: React.ComponentType<{ className?: string }>
  connected: boolean
}

export function SecureLayerIntegrations() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('ALL')
  const [connectingItem, setConnectingItem] = useState<IntegrationItem | null>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectedIds, setConnectedIds] = useState<string[]>(['aws', 'github', 'okta'])

  const allIntegrations: IntegrationItem[] = [
    {
      id: 'aws',
      name: 'Amazon Web Services',
      category: 'CLOUD',
      description: 'Continuous IAM, S3 bucket encryption, RDS snapshots, and CloudTrail auditing.',
      icon: AwsIcon,
      connected: true,
    },
    {
      id: 'gcp',
      name: 'Google Cloud Platform',
      category: 'CLOUD',
      description: 'BigQuery access controls, Service Account keys, and VPC firewall rules.',
      icon: GoogleCloudIcon,
      connected: false,
    },
    {
      id: 'azure',
      name: 'Microsoft Azure',
      category: 'CLOUD',
      description: 'Azure AD, subscription RBAC policies, and disk encryption verification.',
      icon: AzureIcon,
      connected: false,
    },
    {
      id: 'okta',
      name: 'Okta Identity Cloud',
      category: 'IDENTITY',
      description: 'Universal Directory, MFA enforcement status, and automated deprovisioning audit logs.',
      icon: OktaIcon,
      connected: true,
    },
    {
      id: 'github',
      name: 'GitHub Enterprise',
      category: 'DEV TOOLS',
      description: 'Branch protection rules, pull request approval requirements, and secret scanning.',
      icon: GitHubIcon,
      connected: true,
    },
    {
      id: 'gitlab',
      name: 'GitLab CI/CD',
      category: 'DEV TOOLS',
      description: 'Container scanning, pipeline approvals, and repository access management.',
      icon: GitLabIcon,
      connected: false,
    },
    {
      id: 'jira',
      name: 'Atlassian Jira',
      category: 'PROJECT MGMT',
      description: 'Automated vulnerability ticketing, SLA tracking, and audit remediation workflows.',
      icon: JiraIcon,
      connected: false,
    },
    {
      id: 'slack',
      name: 'Slack Alerts',
      category: 'DEV TOOLS',
      description: 'Real-time policy violation notifications, access request approvals, and daily digests.',
      icon: SlackIcon,
      connected: false,
    },
    {
      id: 'hubspot',
      name: 'HubSpot CRM',
      category: 'PROJECT MGMT',
      description: 'Customer data access governance and contact list export audit logs.',
      icon: HubSpotIcon,
      connected: false,
    },
    {
      id: 'asana',
      name: 'Asana Workflows',
      category: 'PROJECT MGMT',
      description: 'Security incident task management and auditor evidence collection boards.',
      icon: AsanaIcon,
      connected: false,
    },
    {
      id: 'jamf',
      name: 'Jamf Pro (MDM)',
      category: 'ENDPOINT',
      description: 'Mac laptop fleet FileVault encryption, OS version compliance, and screen lock timers.',
      icon: JamfIcon,
      connected: false,
    },
  ]

  const filtered = allIntegrations.filter((item) => {
    const matchesCategory = activeCategory === 'ALL' || item.category === activeCategory
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.description.toLowerCase().includes(search.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const handleConnectClick = (item: IntegrationItem) => {
    if (connectedIds.includes(item.id)) {
      // Disconnect
      setConnectedIds((prev) => prev.filter((id) => id !== item.id))
    } else {
      // Open modal
      setConnectingItem(item)
    }
  }

  const confirmConnect = () => {
    if (!connectingItem) return
    setIsConnecting(true)
    setTimeout(() => {
      setConnectedIds((prev) => [...prev, connectingItem.id])
      setIsConnecting(false)
      setConnectingItem(null)
    }, 800)
  }

  return (
    <SecureLayerLayout>
      {/* Header */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-[#F0F9FF] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0284C7] text-xs font-bold mb-4">
            Ecosystem Directory
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Connect Your Stack in Under 3 Minutes.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            SecureLayer uses read-only, least-privilege APIs to ingest audit evidence automatically. No agents to install, no code modifications required.
          </p>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Controls Bar: Search & Category Filter */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
            <div className="relative w-full md:w-96">
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search 100+ integrations..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7] text-slate-800"
              />
              <svg
                className="w-5 h-5 text-slate-400 absolute left-3.5 top-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {(['ALL', 'CLOUD', 'IDENTITY', 'DEV TOOLS', 'PROJECT MGMT', 'ENDPOINT'] as const).map(
                (cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      activeCategory === cat
                        ? 'bg-[#0284C7] text-white shadow-md'
                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => {
              const Icon = item.icon
              const isConnected = connectedIds.includes(item.id)

              return (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-[#38BDF8] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                        {item.category}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-1">{item.name}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed mb-6">{item.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    {isConnected ? (
                      <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-600">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Connected &amp; Syncing</span>
                      </div>
                    ) : (
                      <span className="text-xs text-slate-400">Not configured</span>
                    )}

                    <button
                      onClick={() => handleConnectClick(item)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                        isConnected
                          ? 'border border-slate-200 text-slate-600 hover:bg-red-50 hover:text-red-600 hover:border-red-200'
                          : 'bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-sm'
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

      {/* Interactive Authorization Modal */}
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
                SecureLayer will request <strong>read-only audit permissions</strong> for {connectingItem.name}.
              </p>
              <div className="bg-slate-50 p-4 rounded-xl space-y-2 border border-slate-100">
                <div className="font-bold text-slate-800">Permissions Requested:</div>
                <div>• Read resource metadata &amp; IAM policies</div>
                <div>• Read encryption configuration &amp; audit trails</div>
                <div>• No write or modify permissions granted</div>
              </div>
              <div className="p-3 bg-blue-50 text-[#0284C7] rounded-xl font-bold">
                🔒 100% encrypted in transit using TLS 1.3 &amp; AES-256 keys.
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
                disabled={isConnecting}
                className="flex-1 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-bold text-xs shadow-md transition flex items-center justify-center gap-2"
              >
                {isConnecting ? 'Authorizing...' : 'Authorize Read-Only Access'}
              </button>
            </div>
          </div>
        </div>
      )}
    </SecureLayerLayout>
  )
}
