import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FlowPilotLayout } from './FlowPilotLayout'

export function FlowPilotTrial() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/flowpilot') ? '/flowpilot' : '/saas/flowpilot-crm'

  const [step, setStep] = useState<'form' | 'sandbox'>('form')
  const [formData, setFormData] = useState({
    name: 'Sarah Connor',
    email: 'sarah@skynet-sales.com',
    teamSize: '5-15 sellers',
    primaryCrm: 'salesforce',
  })
  const [completedTasks, setCompletedTasks] = useState<Record<number, boolean>>({})
  const [notification, setNotification] = useState<string | null>(null)

  const mockTasks = [
    {
      id: 1,
      contact: 'John Doe',
      account: 'FinTech Global ($48,000 ARR)',
      action: 'Send contextual recap email',
      reason: 'Proposal viewed 2h ago by CFO',
      score: 9.5,
    },
    {
      id: 2,
      contact: 'Elena Rostova',
      account: 'CloudScale ($92,000 ARR)',
      action: 'Book 15m security check',
      reason: 'Security pack approved; procurement waiting',
      score: 9.3,
    },
    {
      id: 3,
      contact: 'Marcus Vance',
      account: 'Nexus Media ($34,000 ARR)',
      action: 'Send expansion benchmark',
      reason: 'Hiring 5 new reps signal detected',
      score: 8.9,
    },
  ]

  const handleCompleteTask = (id: number, contact: string) => {
    setCompletedTasks(prev => ({ ...prev, [id]: true }))
    setNotification(`Action completed for ${contact}! Flow state maintained.`)
    setTimeout(() => setNotification(null), 3000)
  }

  return (
    <FlowPilotLayout>
      <section className="bg-gradient-to-b from-[#F0FDF9] via-[#E8F7FB] to-white py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {notification && (
            <div className="fixed top-24 right-6 z-50 bg-[#0F172A] text-white px-4 py-3 rounded-xl shadow-2xl text-xs font-bold flex items-center gap-2 animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              {notification}
            </div>
          )}

          {step === 'form' ? (
            <div className="bg-white border border-sky-100 rounded-3xl p-8 sm:p-12 shadow-xl shadow-teal-900/5">
              <div className="text-center max-w-xl mx-auto mb-8">
                <span className="text-xs font-bold uppercase tracking-widest text-[#0D9488]">
                  Start Your 14-Day Free Trial
                </span>
                <h1 className="mt-3 text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                  Experience The Calmer Sales Flow.
                </h1>
                <p className="mt-2 text-sm text-slate-600">
                  No credit card required. Connect your real inbox or explore an instant pre-populated sandbox immediately.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  setStep('sandbox')
                }}
                className="space-y-4 max-w-md mx-auto"
              >
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0D9488] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Work Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0D9488] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Current CRM / Source</label>
                  <select
                    value={formData.primaryCrm}
                    onChange={(e) => setFormData({ ...formData, primaryCrm: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:border-[#0D9488] focus:outline-none bg-white"
                  >
                    <option value="salesforce">Salesforce</option>
                    <option value="hubspot">HubSpot</option>
                    <option value="pipedrive">Pipedrive</option>
                    <option value="sheets">Spreadsheets / CSV</option>
                    <option value="none">No CRM (Starting fresh)</option>
                  </select>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-white bg-[#0D9488] hover:bg-[#0F766E] shadow-md transition"
                  >
                    Launch Instant Sandbox Queue →
                  </button>
                </div>

                <p className="text-center text-[11px] text-slate-400 pt-2">
                  🔒 Encrypted with SOC-2 standard 256-bit TLS security.
                </p>
              </form>
            </div>
          ) : (
            <div className="bg-white border-2 border-teal-200 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-sky-100">
                <div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#0D9488] bg-teal-50 px-2.5 py-1 rounded">
                    Live Sandbox Activated
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 mt-2">
                    Welcome, {formData.name}!
                  </h2>
                  <p className="text-xs text-slate-500">
                    Here is your prioritized action queue for today. Complete high-impact moves with one click.
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setStep('form')}
                    className="text-xs font-bold text-slate-600 hover:text-slate-900 underline"
                  >
                    ← Edit Details
                  </button>
                  <Link
                    to={basePath}
                    className="text-xs font-bold px-3 py-1.5 rounded-lg bg-teal-50 text-[#0D9488]"
                  >
                    Exit Sandbox
                  </Link>
                </div>
              </div>

              {/* Sandbox Action Queue */}
              <div className="space-y-3">
                {mockTasks.map((task) => {
                  const isDone = !!completedTasks[task.id]
                  return (
                    <div
                      key={task.id}
                      className={`p-4 rounded-xl border transition flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                        isDone
                          ? 'bg-slate-50 border-slate-200 opacity-60'
                          : 'bg-[#F8FDFF] border-teal-200/70 hover:border-teal-400'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-slate-900">{task.contact}</span>
                          <span className="text-xs text-slate-500 font-medium">({task.account})</span>
                          <span className="text-[10px] font-black px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                            ★ {task.score}
                          </span>
                        </div>
                        <p className="text-xs text-[#0D9488] font-semibold mt-1">
                          Next Action: {task.action}
                        </p>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Trigger: {task.reason}
                        </p>
                      </div>

                      <div>
                        {isDone ? (
                          <span className="text-xs font-bold text-emerald-600 flex items-center gap-1">
                            ✓ Done &amp; Logged
                          </span>
                        ) : (
                          <button
                            onClick={() => handleCompleteTask(task.id, task.contact)}
                            className="text-xs font-bold px-4 py-2 rounded-lg bg-[#0D9488] hover:bg-[#0F766E] text-white shadow-xs transition"
                          >
                            Execute Action →
                          </button>
                        )}
                      </div>
                    </div>
                  )
                })}
              </div>

              <div className="bg-teal-50 border border-teal-100 rounded-xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-teal-900">
                    Ready to link your real Gmail or Outlook account?
                  </p>
                  <p className="text-[11px] text-teal-700 mt-0.5">
                    Your real pipeline will be scanned and ranked in under 2 minutes.
                  </p>
                </div>
                <button
                  onClick={() => alert('In full production, this triggers OAuth with your email provider!')}
                  className="px-4 py-2 rounded-lg bg-[#0D9488] text-white text-xs font-bold shadow-xs hover:bg-[#0F766E] transition"
                >
                  Connect Mailbox
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </FlowPilotLayout>
  )
}
