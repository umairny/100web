import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { RouteStackLayout } from './RouteStackLayout'
import { 
  Search, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  Copy, 
  Check, 
  Code, 
  Database, 
  Truck, 
  Layers, 
  Radio, 
  ShoppingBag,
  ExternalLink
} from 'lucide-react'

interface ConnectorItem {
  id: string
  name: string
  category: 'erp' | 'ecommerce' | 'telematics' | 'billing' | 'comms'
  desc: string
  badge: string
  iconBg: string
  popular?: boolean
}

export default function RouteStackIntegrations() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [activeModalTool, setActiveModalTool] = useState<ConnectorItem | null>(null)
  const [copiedCode, setCopiedCode] = useState(false)

  const connectors: ConnectorItem[] = [
    {
      id: 'shopify',
      name: 'Shopify & Shopify Plus',
      category: 'ecommerce',
      desc: 'Automatically pull paid fulfillment orders into daily delivery batches and push back real-time driver tracking links.',
      badge: 'Official App',
      iconBg: 'bg-lime-50 text-lime-700',
      popular: true
    },
    {
      id: 'sap',
      name: 'SAP S/4HANA & ECC',
      category: 'erp',
      desc: 'Bi-directional freight order synchronization with automated delivery confirmation and inventory reconciliation.',
      badge: 'Certified Partner',
      iconBg: 'bg-blue-50 text-blue-700',
      popular: true
    },
    {
      id: 'oracle',
      name: 'Oracle NetSuite',
      category: 'erp',
      desc: 'Seamlessly convert sales orders into optimized vehicle stops and automatically update item fulfillment statuses upon ePOD capture.',
      badge: 'Built for NetSuite',
      iconBg: 'bg-red-50 text-red-700',
      popular: true
    },
    {
      id: 'sage',
      name: 'Sage Business Cloud',
      category: 'erp',
      desc: 'Connect warehouse pick lists directly to driver dispatch schedules without manual data entry.',
      badge: 'Direct Sync',
      iconBg: 'bg-emerald-50 text-emerald-700',
      popular: true
    },
    {
      id: 'salesforce',
      name: 'Salesforce Logistics Cloud',
      category: 'erp',
      desc: 'Synchronize customer service delivery cases, driver notes, and delivery exception tickets in real-time.',
      badge: 'AppExchange',
      iconBg: 'bg-cyan-50 text-cyan-700',
      popular: true
    },
    {
      id: 'samsara',
      name: 'Samsara Telematics',
      category: 'telematics',
      desc: 'Ingest live CAN-bus diagnostics, fuel usage, harsh braking events, and vehicle maintenance meters.',
      badge: 'Hardware Sync',
      iconBg: 'bg-slate-100 text-slate-800'
    },
    {
      id: 'geotab',
      name: 'Geotab Telematics',
      category: 'telematics',
      desc: 'Map engine fault codes and precise odometer telemetry with driver dispatch assignments.',
      badge: 'Fleet IoT',
      iconBg: 'bg-indigo-50 text-indigo-700'
    },
    {
      id: 'woocommerce',
      name: 'WooCommerce',
      category: 'ecommerce',
      desc: 'Instant delivery time slot picker at checkout that automatically locks into morning or afternoon delivery waves.',
      badge: 'Plugin',
      iconBg: 'bg-purple-50 text-purple-700'
    },
    {
      id: 'twilio',
      name: 'Twilio SMS & WhatsApp',
      category: 'comms',
      desc: 'Automate customer SMS arrival notifications ("Driver is 5 minutes away") with one-click live tracking.',
      badge: 'API Gateway',
      iconBg: 'bg-red-50 text-red-600'
    },
    {
      id: 'stripe',
      name: 'Stripe Invoicing',
      category: 'billing',
      desc: 'Collect customer cash-on-delivery (COD) payments digitally via mobile driver app upon signature receipt.',
      badge: 'Payments',
      iconBg: 'bg-violet-50 text-violet-700'
    },
    {
      id: 'magento',
      name: 'Adobe Commerce (Magento)',
      category: 'ecommerce',
      desc: 'Multi-warehouse shipment orchestration with automated delivery wave creation and driver dispatch.',
      badge: 'Enterprise',
      iconBg: 'bg-amber-50 text-amber-700'
    },
    {
      id: 'quickbooks',
      name: 'QuickBooks Online',
      category: 'billing',
      desc: 'Push signed electronic proof of delivery slips as attached attachments to customer invoices.',
      badge: 'Accounting',
      iconBg: 'bg-emerald-50 text-emerald-800'
    }
  ]

  const categories = [
    { id: 'all', label: 'All Connectors' },
    { id: 'erp', label: 'ERP & WMS' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'telematics', label: 'Telematics & GPS' },
    { id: 'comms', label: 'Customer Messaging' },
    { id: 'billing', label: 'Billing & Payments' }
  ]

  const filtered = connectors.filter(item => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory
    const matchesQuery = item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         item.desc.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCat && matchesQuery
  })

  const handleCopy = () => {
    setCopiedCode(true)
    setTimeout(() => setCopiedCode(false), 2000)
  }

  return (
    <RouteStackLayout>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#0B1528] via-[#0F1E36] to-[#0B1528] text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-500/10 text-sky-400 text-xs font-bold uppercase tracking-widest mb-6 border border-sky-500/30">
            <Sparkles className="w-4 h-4 text-sky-400" />
            Connected Fleet Ecosystem
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight uppercase max-w-4xl mx-auto">
            Connects With Your Entire <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-emerald-400 to-amber-400">
              Supply Chain Stack
            </span>
          </h1>
          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Zero-friction connectors for leading ERPs, warehouse management systems, telematics hardware, and e-commerce stores.
          </p>

          {/* Radial Spoke Graphic */}
          <div className="mt-12 max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-200">
            <img 
              src="/images/saas/routestack/ecosystem-radial.svg" 
              alt="RouteStack Logistics Ecosystem Spoke"
              className="w-full h-auto object-contain mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search & Filter Bar */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
            {/* Search Input */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search connectors (e.g. Shopify, SAP, Samsara)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white"
              />
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
              {categories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-sky-600 text-white shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Connectors */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map(item => (
              <div
                key={item.id}
                onClick={() => setActiveModalTool(item)}
                className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-sky-500 hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-sm uppercase ${item.iconBg}`}>
                      {item.id.slice(0, 3)}
                    </div>
                    <span className="text-[10px] font-bold text-sky-700 bg-sky-50 border border-sky-200 px-2.5 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-700 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-sky-700">
                  <span>View Webhook Config</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16 bg-slate-50 rounded-2xl border border-dashed border-slate-300">
              <Search className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <p className="text-slate-700 font-bold text-sm">No connectors found matching "{searchQuery}"</p>
              <p className="text-slate-500 text-xs mt-1">Try searching for SAP, Shopify, Samsara, or Oracle.</p>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Webhook Modal Guide */}
      {activeModalTool && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-8 shadow-2xl relative border border-slate-100">
            <button
              onClick={() => setActiveModalTool(null)}
              className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 text-sm font-bold w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center"
            >
              ✕
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-xs uppercase ${activeModalTool.iconBg}`}>
                {activeModalTool.id.slice(0, 3)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900">{activeModalTool.name} Integration</h3>
                <span className="text-xs text-emerald-600 font-bold">Bi-directional Webhook Active</span>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed mb-6">
              {activeModalTool.desc} Copy the automated dispatch payload below to trigger automatic vehicle sequencing:
            </p>

            <div className="bg-slate-900 rounded-xl p-4 text-xs font-mono text-emerald-400 relative mb-6">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-800 text-slate-400 text-[11px]">
                <span>webhook-{activeModalTool.id}.json</span>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-emerald-400 hover:text-white"
                >
                  {copiedCode ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                  {copiedCode ? "Copied" : "Copy"}
                </button>
              </div>
              <pre className="overflow-x-auto text-[11px] leading-relaxed">
{`{
  "event": "order.fulfilled",
  "connector": "${activeModalTool.id}",
  "fleet_id": "fl_auto_9941",
  "destination": {
    "lat": 40.7128,
    "lng": -74.0060,
    "time_window": "10:00-12:00"
  },
  "auto_sequence": true
}`}
              </pre>
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setActiveModalTool(null)}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-lg"
              >
                Close
              </button>
              <Link
                to="/saas/routestack-logistics/trial"
                className="px-5 py-2 text-xs font-bold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-xs"
              >
                Test in Free Sandbox
              </Link>
            </div>
          </div>
        </div>
      )}
    </RouteStackLayout>
  )
}
