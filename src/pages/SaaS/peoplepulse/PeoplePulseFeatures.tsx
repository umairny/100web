import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PeoplePulseLayout } from './PeoplePulseLayout'

export function PeoplePulseFeatures() {
  const [activeTab, setActiveTab] = useState<'onboarding' | 'pto' | 'performance'>('onboarding')

  // Onboarding simulator state
  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Sign Offer & Employment Agreement (DocuSign)', done: true },
    { id: 2, text: 'Submit W-4 Tax Form & Direct Deposit details', done: true },
    { id: 3, text: 'Select Health & Dental Benefits package', done: false },
    { id: 4, text: 'Order MacBook Pro M3 & Home Office equipment', done: false },
    { id: 5, text: 'Complete Security & Compliance Awareness quiz', done: false },
  ])

  const toggleCheck = (id: number) => {
    setChecklist((prev) =>
      prev.map((item) => (item.id === id ? { ...item, done: !item.done } : item))
    )
  }

  const completedCount = checklist.filter((c) => c.done).length
  const progressPercent = Math.round((completedCount / checklist.length) * 100)

  // PTO simulator state
  const [ptoDays, setPtoDays] = useState(3)
  const [ptoReason, setPtoReason] = useState('Vacation / Family Trip')
  const [ptoSubmitted, setPtoSubmitted] = useState(false)
  const [ptoBalance, setPtoBalance] = useState(18)

  const handlePtoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (ptoDays > ptoBalance) return
    setPtoBalance((prev) => prev - ptoDays)
    setPtoSubmitted(true)
  }

  return (
    <PeoplePulseLayout>
      {/* Header */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-[#EEF2FF]/60 to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold mb-4">
            Interactive HR Experience
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Designed to Delight People Teams{' '}
            <span className="text-[#2563EB]">&amp; Employees Alike.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Test drive our real-time interactive HR modules below. See how effortless onboarding, PTO requests, and reviews feel in PeoplePulse.
          </p>
        </div>
      </section>

      {/* Simulator Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Selector */}
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <button
              onClick={() => setActiveTab('onboarding')}
              className={`px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'onboarding'
                  ? 'bg-[#2563EB] text-white shadow-md'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>🚀</span>
              <span>Modern Onboarding Simulator</span>
            </button>

            <button
              onClick={() => setActiveTab('pto')}
              className={`px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'pto'
                  ? 'bg-[#2563EB] text-white shadow-md'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>✈</span>
              <span>Self-Service PTO Request</span>
            </button>

            <button
              onClick={() => setActiveTab('performance')}
              className={`px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 ${
                activeTab === 'performance'
                  ? 'bg-[#2563EB] text-white shadow-md'
                  : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>🎯</span>
              <span>360 Feedback Review</span>
            </button>
          </div>

          {/* TAB 1: ONBOARDING SIMULATOR */}
          {activeTab === 'onboarding' && (
            <div className="bg-[#EFF6FF] rounded-3xl p-8 sm:p-12 border border-blue-200 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-blue-200/60 mb-6">
                <div>
                  <div className="text-xs font-black uppercase text-[#2563EB]">Live Simulator</div>
                  <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                    Alex Rivera&apos;s New Hire Journey
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Role: Senior Frontend Engineer • Start Date: Next Monday</p>
                </div>

                {/* Progress Ring / Bar */}
                <div className="text-right">
                  <div className="text-xs font-bold text-slate-600">Onboarding Progress</div>
                  <div className="text-3xl font-black text-[#2563EB]">{progressPercent}%</div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-blue-200/70 h-3 rounded-full overflow-hidden mb-8">
                <div
                  className="bg-[#2563EB] h-full transition-all duration-300 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>

              {/* Interactive Checklist */}
              <div className="space-y-3">
                {checklist.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => toggleCheck(item.id)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between ${
                      item.done
                        ? 'bg-white/90 border-emerald-300 shadow-sm'
                        : 'bg-white border-slate-200 hover:border-blue-300'
                    }`}
                  >
                    <div className="flex items-center gap-3 text-xs sm:text-sm font-semibold">
                      <div
                        className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs ${
                          item.done
                            ? 'bg-emerald-500 text-white'
                            : 'border-2 border-slate-300 text-transparent'
                        }`}
                      >
                        ✓
                      </div>
                      <span className={item.done ? 'text-slate-900 line-through opacity-70' : 'text-slate-900'}>
                        {item.text}
                      </span>
                    </div>

                    <span
                      className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${
                        item.done ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'
                      }`}
                    >
                      {item.done ? 'Completed' : 'Click to Toggle'}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-2xl bg-white border border-blue-200 flex items-center justify-between text-xs text-slate-600">
                <span>
                  💡 When all tasks complete, automated welcome Slack messages and email credentials dispatch automatically.
                </span>
                <Link to="/saas/peoplepulse-hr/trial" className="text-[#2563EB] font-bold hover:underline">
                  Launch Free Trial &rarr;
                </Link>
              </div>
            </div>
          )}

          {/* TAB 2: PTO SIMULATOR */}
          {activeTab === 'pto' && (
            <div className="bg-[#F5F3FF] rounded-3xl p-8 sm:p-12 border border-purple-200 shadow-xl">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-purple-200/60 mb-6">
                <div>
                  <div className="text-xs font-black uppercase text-[#7C3AED]">Employee Self-Service</div>
                  <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                    Request Time Off (PTO)
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">Automatic manager notification &amp; calendar sync</p>
                </div>

                <div className="p-4 rounded-2xl bg-white border border-purple-200 text-center">
                  <div className="text-[10px] uppercase font-bold text-slate-500">Available Balance</div>
                  <div className="text-3xl font-black text-[#7C3AED]">{ptoBalance} Days</div>
                </div>
              </div>

              {ptoSubmitted ? (
                <div className="p-8 bg-white rounded-2xl border border-emerald-300 text-center space-y-3">
                  <div className="text-3xl">✈</div>
                  <h4 className="text-lg font-bold text-slate-900">PTO Request Auto-Approved!</h4>
                  <p className="text-xs text-slate-600">
                    Your {ptoDays} day(s) for &ldquo;{ptoReason}&rdquo; have been registered on the company team calendar.
                    Remaining balance: <strong>{ptoBalance} days</strong>.
                  </p>
                  <button
                    onClick={() => setPtoSubmitted(false)}
                    className="px-6 py-2 rounded-xl bg-[#7C3AED] text-white text-xs font-bold"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handlePtoSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Days Requested</label>
                      <input
                        type="number"
                        min="1"
                        max={ptoBalance}
                        value={ptoDays}
                        onChange={(e) => setPtoDays(Number(e.target.value))}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Time Off Type</label>
                      <select
                        value={ptoReason}
                        onChange={(e) => setPtoReason(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#7C3AED]"
                      >
                        <option>Vacation / Family Trip</option>
                        <option>Sick Leave / Doctor Appointment</option>
                        <option>Personal Mental Health Day</option>
                        <option>Volunteer Day</option>
                      </select>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-[#7C3AED] hover:bg-[#6D28D9] text-white font-bold text-xs uppercase tracking-wider shadow-md transition"
                  >
                    Submit Request for Approval
                  </button>
                </form>
              )}
            </div>
          )}

          {/* TAB 3: PERFORMANCE REVIEW BUILDER */}
          {activeTab === 'performance' && (
            <div className="bg-[#ECFDF5] rounded-3xl p-8 sm:p-12 border border-emerald-200 shadow-xl">
              <div className="pb-6 border-b border-emerald-200/60 mb-6">
                <div className="text-xs font-black uppercase text-[#059669]">Continuous Feedback</div>
                <h3 className="text-2xl font-black text-slate-900 mt-0.5">
                  Q3 Peer 360 Review Simulator
                </h3>
                <p className="text-xs text-slate-500 mt-1">Reviewing Mia Alvarez (Senior Product Designer)</p>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-bold text-slate-900">Design Execution &amp; Craft</div>
                    <div className="text-xs text-slate-500">Delivered mobile design system v2 on schedule</div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 text-lg">
                    ★★★★★
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-bold text-slate-900">Cross-Functional Collaboration</div>
                    <div className="text-xs text-slate-500">Partnership with engineering and product management</div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 text-lg">
                    ★★★★★
                  </div>
                </div>

                <div className="p-4 bg-white rounded-2xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-sm font-bold text-slate-900">Mentorship &amp; Culture</div>
                    <div className="text-xs text-slate-500">Guides junior designers and fosters team empathy</div>
                  </div>
                  <div className="flex items-center gap-1 text-amber-400 text-lg">
                    ★★★★★
                  </div>
                </div>
              </div>

              <div className="mt-8 flex justify-center">
                <Link
                  to="/saas/peoplepulse-hr/trial"
                  className="px-8 py-3.5 rounded-full bg-[#059669] hover:bg-[#047857] text-white font-bold text-xs uppercase tracking-wider shadow-md transition"
                >
                  Try Full Performance Suite in Free Trial
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>
    </PeoplePulseLayout>
  )
}
