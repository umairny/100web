import React from 'react'
import { Link } from 'react-router-dom'
import { PeoplePulseLayout } from './PeoplePulseLayout'

export function PeoplePulseProduct() {
  const modules = [
    {
      id: 'core-hr',
      title: 'Core HR & Employee Directory',
      badge: 'Foundation',
      color: 'blue',
      desc: 'One single source of truth for your entire distributed organization. Manage personal profiles, emergency contacts, job titles, reporting lines, and custom employee fields.',
      features: ['Dynamic visual Org Chart', 'Document storage with e-signatures', 'Custom role-based permissions', 'Automated employee milestone celebrations'],
    },
    {
      id: 'time-off',
      title: 'Time Off & Attendance',
      badge: 'Self-Service',
      color: 'teal',
      desc: 'Simplify PTO tracking with customizable policies, accrual rules, local public holiday calendars, and instant manager approvals right inside Slack or email.',
      features: ['Unlimited custom time-off policies', 'Slack & Microsoft Teams approval bot', 'Google & Outlook calendar two-way sync', 'Negative balance protection rules'],
    },
    {
      id: 'performance',
      title: 'Performance & 360 Reviews',
      badge: 'Talent Growth',
      color: 'emerald',
      desc: 'Foster high-performance teams with lightweight, continuous feedback cycles, automated 360 reviews, goal alignment (OKRs), and 1-on-1 meeting agendas.',
      features: ['Company, team & individual OKRs', 'Peer feedback & praise badges', 'Manager review calibration tools', 'Private 1-on-1 meeting notes'],
    },
    {
      id: 'payroll-sync',
      title: 'Payroll & Benefits Integration',
      badge: 'Zero Errors',
      color: 'amber',
      desc: 'Never manually re-key employee salary changes, bonuses, or new hire details again. PeoplePulse syncs bi-directionally with Gusto, ADP, Rippling, and Deel.',
      features: ['1-click salary change sync', 'Automatic deduction calculations', 'Global contractor & EOR support', 'Tax document W-2 / 1099 distribution'],
    },
  ]

  return (
    <PeoplePulseLayout>
      {/* Header */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-[#EEF2FF]/60 to-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-bold mb-4">
            Unified HR Suite
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            The Complete Modern Workplace Platform.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Replace 5 disconnected HR tools with one intuitive platform built for distributed teams from 10 to 2,000 employees.
          </p>
        </div>
      </section>

      {/* Modules Deep Dive */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {modules.map((m, idx) => (
            <div
              key={m.id}
              className={`rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                idx % 2 === 1 ? 'bg-slate-50/70' : 'bg-white'
              }`}
            >
              <div className="lg:col-span-7 space-y-4">
                <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-slate-100 text-slate-700">
                  {m.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  {m.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {m.desc}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {m.features.map((feat) => (
                    <div key={feat} className="flex items-center gap-2 text-xs font-bold text-slate-800">
                      <span className="text-[#0D9488]">✓</span>
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex justify-center">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-lg w-full max-w-sm space-y-3 text-xs">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <span className="font-bold text-slate-900">{m.title}</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <div className="p-3 bg-slate-50 rounded-xl text-slate-600">
                    ⚡ Live automation active • 0 manual sync errors.
                  </div>
                  <Link
                    to="/saas/peoplepulse-hr/trial"
                    className="block w-full text-center py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold transition shadow-sm"
                  >
                    Try in Free Trial &rarr;
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </PeoplePulseLayout>
  )
}
