import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MetricNestLayout } from './MetricNestLayout'

export function MetricNestDemo() {
  const location = useLocation()
  const basePath = location.pathname.startsWith('/metricnest') ? '/metricnest' : '/saas/metricnest-analytics'

  const [demoStep, setDemoStep] = useState<'tour' | 'book'>('tour')
  const [selectedEvent, setSelectedEvent] = useState('checkout_completed')
  const [selectedSegment, setSelectedSegment] = useState('all_users')
  const [bookedSuccess, setBookedSuccess] = useState(false)

  const [bookingForm, setBookingForm] = useState({
    name: '',
    email: '',
    company: '',
    date: '2026-09-10',
    time: '14:00 EST',
  })

  return (
    <MetricNestLayout>
      {/* Header */}
      <section className="bg-[#0B132B] py-16 md:py-24 text-white text-center border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#10B981]">
            Interactive Demonstration
          </span>
          <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            See MetricNest in Action.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
            Explore our live sandbox query builder or schedule a 1-on-1 walkthrough with a solutions architect.
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <button
              onClick={() => setDemoStep('tour')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition ${
                demoStep === 'tour'
                  ? 'bg-[#10B981] text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Live Query Sandbox
            </button>
            <button
              onClick={() => setDemoStep('book')}
              className={`px-5 py-2.5 rounded-xl text-xs font-bold transition ${
                demoStep === 'book'
                  ? 'bg-[#10B981] text-white shadow-md'
                  : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
              }`}
            >
              Book Live Demo Call
            </button>
          </div>
        </div>
      </section>

      {/* Main Interactive Demo Container */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {demoStep === 'tour' ? (
            <div className="bg-[#F8FAFC] border-2 border-emerald-300/60 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200">
                <div>
                  <h3 className="text-xl font-black text-slate-900">Live Telemetry Sandbox</h3>
                  <p className="text-xs text-slate-500">Test query builder speed across 1.2M synthetic user sessions</p>
                </div>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-100 text-emerald-800">
                  Response Time: 84ms
                </span>
              </div>

              {/* Query Bar */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-white p-4 rounded-xl border border-slate-200">
                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1 uppercase tracking-wider">Select Event Filter</label>
                  <select
                    value={selectedEvent}
                    onChange={(e) => setSelectedEvent(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-semibold focus:border-[#10B981] focus:outline-none bg-white"
                  >
                    <option value="checkout_completed">Event: Checkout Completed</option>
                    <option value="signup_submitted">Event: Free Trial Signup</option>
                    <option value="onboarding_step_3">Event: Workspace Setup</option>
                    <option value="export_report">Event: Report Exported</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-600 mb-1 uppercase tracking-wider">Cohort Segment</label>
                  <select
                    value={selectedSegment}
                    onChange={(e) => setSelectedSegment(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs font-semibold focus:border-[#10B981] focus:outline-none bg-white"
                  >
                    <option value="all_users">All Web &amp; Mobile Traffic</option>
                    <option value="organic_seo">Segment: Organic Search (High Intent)</option>
                    <option value="paid_ads">Segment: Paid Google Ads</option>
                    <option value="enterprise_tier">Segment: Enterprise Accounts (20+ seats)</option>
                  </select>
                </div>
              </div>

              {/* Live Sandbox Results Preview */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-black text-slate-900">
                    Query: <span className="text-[#10B981]">{selectedEvent}</span> on <span className="text-cyan-600">{selectedSegment}</span>
                  </span>
                  <span className="text-[11px] font-bold text-slate-500">Showing last 30 days</span>
                </div>

                {/* Dynamic mini SVG Graph based on selection */}
                <div className="h-44 w-full bg-slate-50 rounded-xl p-4 flex items-center justify-center relative overflow-hidden">
                  <svg viewBox="0 0 400 120" className="w-full h-full" fill="none">
                    <path
                      d="M0 100 C 60 90, 100 70, 150 65 C 200 60, 240 40, 300 30 C 350 22, 380 15, 400 10 L 400 120 L 0 120 Z"
                      fill="#D1FAE5"
                      opacity="0.6"
                    />
                    <path
                      d="M0 100 C 60 90, 100 70, 150 65 C 200 60, 240 40, 300 30 C 350 22, 380 15, 400 10"
                      stroke="#10B981"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                    <circle cx="300" cy="30" r="5" fill="#059669" stroke="#FFF" strokeWidth="2" />
                  </svg>
                  <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-lg border border-slate-200 text-xs font-bold text-slate-800 shadow-sm">
                    Total Volume: 42,850 matches
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-slate-500 pt-2 border-t border-slate-100">
                  <span>✓ 100% of events sampled without synthetic estimation</span>
                  <Link to={`${basePath}/pricing`} className="text-[#10B981] font-bold hover:underline">
                    Deploy this query to production →
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-[#F8FAFC] border border-slate-200 rounded-3xl p-8 max-w-xl mx-auto shadow-sm">
              {bookedSuccess ? (
                <div className="text-center py-8 space-y-3">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 text-[#10B981] flex items-center justify-center text-2xl font-bold">
                    ✓
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Demo Call Confirmed!</h3>
                  <p className="text-xs text-slate-600">
                    A Google Meet invitation has been sent to <strong>{bookingForm.email}</strong> for {bookingForm.date} at {bookingForm.time}.
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={() => setBookedSuccess(false)}
                      className="text-xs font-bold text-slate-600 hover:text-slate-900 underline"
                    >
                      Book another time
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    setBookedSuccess(true)
                  }}
                  className="space-y-4"
                >
                  <h3 className="text-2xl font-black text-slate-900 text-center">Schedule a 1-on-1 Product Demo</h3>
                  <p className="text-xs text-slate-500 text-center mb-6">
                    A solutions engineer will prepare custom product benchmarks tailored to your company's traffic.
                  </p>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Alex Morgan"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:border-[#10B981] focus:outline-none bg-white"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Work Email</label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                      className="w-full px-3 py-2 rounded-lg border border-slate-300 text-sm focus:border-[#10B981] focus:outline-none bg-white"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Preferred Date</label>
                      <input
                        type="date"
                        required
                        value={bookingForm.date}
                        onChange={(e) => setBookingForm({ ...bookingForm, date: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:border-[#10B981] focus:outline-none bg-white"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Time Slot</label>
                      <select
                        value={bookingForm.time}
                        onChange={(e) => setBookingForm({ ...bookingForm, time: e.target.value })}
                        className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs focus:border-[#10B981] focus:outline-none bg-white"
                      >
                        <option value="10:00 EST">10:00 AM EST</option>
                        <option value="14:00 EST">2:00 PM EST</option>
                        <option value="16:30 EST">4:30 PM EST</option>
                      </select>
                    </div>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white font-bold text-sm shadow-md transition"
                    >
                      Confirm Demo Booking →
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>
      </section>
    </MetricNestLayout>
  )
}
