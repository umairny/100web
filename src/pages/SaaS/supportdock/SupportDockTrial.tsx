import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SupportDockLayout } from './SupportDockLayout'

export function SupportDockTrial() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/supportdock') ? '/supportdock' : '/saas/supportdock-ai'

  const [step, setStep] = useState<'form' | 'sandbox'>('form')
  const [formData, setFormData] = useState({
    name: 'Emily Watson',
    email: 'emily@brandstore.com',
    primaryTool: 'shopify',
  })
  const [resolvedCount, setResolvedCount] = useState(0)
  const [toastAlert, setToastAlert] = useState<string | null>(null)

  const sampleTickets = [
    {
      id: 'TK-1049',
      customer: 'Michael Brown',
      topic: 'Order tracking for #8932',
      snippet: 'Where is my delivery? It was supposed to arrive today.',
      status: 'Ready to Resolve',
    },
    {
      id: 'TK-1050',
      customer: 'Jessica Taylor',
      topic: 'Return policy question',
      snippet: 'Can I return unopened cosmetic items after 30 days?',
      status: 'Ready to Resolve',
    },
    {
      id: 'TK-1051',
      customer: 'Marcus Reed',
      topic: 'Discount code failure',
      snippet: 'Code WELCOME10 is giving invalid code error at checkout.',
      status: 'Ready to Resolve',
    },
  ]

  const [tickets, setTickets] = useState(sampleTickets)

  const handleResolve = (id: string) => {
    setTickets(prev => prev.map(t => t.id === id ? { ...t, status: 'Resolved autonomously ✓' } : t))
    setResolvedCount(c => c + 1)
    setToastAlert(`Ticket ${id} resolved in 0.3s! Customer notified.`)
    setTimeout(() => setToastAlert(null), 3000)
  }

  return (
    <SupportDockLayout>
      <section className="bg-gradient-to-b from-[#E8FBF4] via-[#F3FCF8] to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {toastAlert && (
            <div className="fixed top-24 right-6 z-50 bg-[#061E2D] text-white px-5 py-3 rounded-xl shadow-2xl text-xs font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
              {toastAlert}
            </div>
          )}

          {step === 'form' ? (
            <div className="bg-white border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-xl text-center max-w-xl mx-auto">
              <span className="text-xs font-black uppercase tracking-widest text-[#10B981]">
                14-Day Full Access Trial
              </span>
              <h1 className="text-3xl font-black text-slate-900 mt-2">
                Automate Support in 2 Minutes.
              </h1>
              <p className="text-xs text-slate-500 mt-2">
                No credit card required. Pre-loaded with realistic sample tickets.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setStep('sandbox')
                }}
                className="mt-8 space-y-4 text-left"
              >
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:border-[#10B981] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:border-[#10B981] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Primary Help Desk / Tool</label>
                  <select
                    value={formData.primaryTool}
                    onChange={(e) => setFormData({ ...formData, primaryTool: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-xs focus:border-[#10B981] focus:outline-none bg-white"
                  >
                    <option value="shopify">Shopify Store</option>
                    <option value="zendesk">Zendesk Support</option>
                    <option value="hubspot">HubSpot Service</option>
                    <option value="intercom">Intercom</option>
                    <option value="gmail">Email / Gmail</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#061E2D] hover:bg-[#0F2942] text-white font-black text-xs uppercase tracking-wider transition shadow-md"
                  >
                    Launch Live Support Sandbox →
                  </button>
                </div>

                <p className="text-center text-[11px] text-slate-400">
                  🔒 Encrypted with SOC-2 standard 256-bit TLS security.
                </p>
              </form>
            </div>
          ) : (
            <div className="bg-white border-2 border-emerald-300 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2.5 py-1 rounded">
                    Sandbox Mode Active
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 mt-2">
                    Welcome, {formData.name}!
                  </h2>
                  <p className="text-xs text-slate-500">
                    Live ticket resolution queue for <span className="font-bold capitalize">{formData.primaryTool}</span>.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800">
                    Deflected: {resolvedCount} tickets
                  </span>
                  <button
                    onClick={() => setStep('form')}
                    className="text-xs font-bold text-slate-500 hover:text-slate-800 underline"
                  >
                    Reset
                  </button>
                </div>
              </div>

              {/* Sample Tickets Queue */}
              <div className="space-y-3">
                {tickets.map((t) => {
                  const isResolved = t.status.includes('Resolved')
                  return (
                    <div
                      key={t.id}
                      className={`p-4 rounded-2xl border transition flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isResolved
                          ? 'bg-emerald-50/50 border-emerald-200'
                          : 'bg-[#F8FAFC] border-slate-200 hover:border-emerald-300'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2 text-xs">
                          <span className="font-black text-slate-900">{t.id}</span>
                          <span className="text-slate-500 font-medium">· {t.customer}</span>
                          <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded text-[10px]">
                            {t.topic}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-1 font-medium">
                          "{t.snippet}"
                        </p>
                      </div>

                      <div>
                        {isResolved ? (
                          <span className="text-xs font-bold text-emerald-700 flex items-center gap-1">
                            ✓ Auto-Resolved (0.3s)
                          </span>
                        ) : (
                          <button
                            onClick={() => handleResolve(t.id)}
                            className="px-4 py-2 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold shadow-xs transition"
                          >
                            Auto-Resolve with AI →
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-600">
                  Ready to connect your real customer inbox and eliminate 68% of support tickets?
                </p>
                <Link
                  to={`${basePath}/pricing`}
                  className="px-5 py-2.5 rounded-full bg-[#061E2D] hover:bg-[#0F2942] text-white text-xs font-black uppercase tracking-wider transition shrink-0"
                >
                  Activate Live Production →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </SupportDockLayout>
  )
}
