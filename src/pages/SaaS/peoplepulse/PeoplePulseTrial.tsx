import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PeoplePulseLayout } from './PeoplePulseLayout'

export function PeoplePulseTrial() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [companyName, setCompanyName] = useState('Nexus Labs')
  const [teamSize, setTeamSize] = useState('25-50')
  const [isBuilding, setIsBuilding] = useState(false)

  const handleNext = () => {
    if (step === 2) {
      setIsBuilding(true)
      setTimeout(() => {
        setIsBuilding(false)
        setStep(3)
      }, 900)
    } else {
      setStep((prev) => (prev + 1) as any)
    }
  }

  const sampleStaff = [
    { name: 'Elena Woods', role: 'VP of Operations', dept: 'Operations', pto: '18 days', status: 'Active' },
    { name: 'Sarah Jenkins', role: 'Sr. Product Designer', dept: 'Design', pto: '14 days', status: 'Onboarding (Day 3)' },
    { name: 'Marcus Vance', role: 'Engineering Lead', dept: 'Engineering', pto: '12 days', status: 'Active' },
    { name: 'Alex Chen', role: 'Technical Talent Partner', dept: 'People', pto: '20 days', status: 'Active' },
  ]

  return (
    <PeoplePulseLayout>
      <section className="py-16 bg-gradient-to-b from-[#EEF2FF]/60 via-white to-slate-50 min-h-[80vh] flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Breadcrumbs */}
          <div className="flex items-center justify-center gap-3 mb-10 text-xs font-bold">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                step >= 1 ? 'bg-[#2563EB] text-white' : 'bg-slate-100 text-slate-400'
              }`}
            >
              <span>1</span>
              <span>Organization</span>
            </div>
            <div className="w-8 h-px bg-slate-300" />
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                step >= 2 ? 'bg-[#2563EB] text-white' : 'bg-slate-100 text-slate-400'
              }`}
            >
              <span>2</span>
              <span>Modules</span>
            </div>
            <div className="w-8 h-px bg-slate-300" />
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                step >= 3 ? 'bg-[#0D9488] text-white' : 'bg-slate-100 text-slate-400'
              }`}
            >
              <span>3</span>
              <span>Live Portal Ready</span>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Welcome to PeoplePulse HR
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Step 1 of 3: Tell us about your company and team.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company Name</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2563EB]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Company Size</label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {['1-15', '16-50', '51-150', '150+'].map((sz) => (
                        <button
                          key={sz}
                          type="button"
                          onClick={() => setTeamSize(sz)}
                          className={`py-3 rounded-xl border text-xs font-bold transition ${
                            teamSize === sz
                              ? 'border-[#2563EB] bg-blue-50 text-[#2563EB]'
                              : 'border-slate-200 hover:border-slate-300 text-slate-700'
                          }`}
                        >
                          {sz} Employees
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-8 py-3 rounded-full font-bold text-sm bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-md transition"
                  >
                    Continue to Modules &rarr;
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Select Your Starting Modules
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Step 2 of 3: Pick the workflows you want to test in your sandbox.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🚀</span>
                      <div>
                        <strong className="text-slate-900">Modern Onboarding &amp; Digital Forms</strong>
                        <div className="text-slate-500">Day 1 readiness checklists and e-signatures</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#2563EB]">Included</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-purple-50/70 border border-purple-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">✈</span>
                      <div>
                        <strong className="text-slate-900">Time Off &amp; Self-Service Portal</strong>
                        <div className="text-slate-500">Automated PTO requests and Google/Slack sync</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#7C3AED]">Included</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">🎯</span>
                      <div>
                        <strong className="text-slate-900">Continuous Performance &amp; 360 Reviews</strong>
                        <div className="text-slate-500">Goal alignment and peer praise badges</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-[#059669]">Included</span>
                  </div>
                </div>

                <div className="pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs font-bold text-slate-500 hover:text-slate-800"
                  >
                    &larr; Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={isBuilding}
                    className="px-8 py-3 rounded-full font-bold text-sm bg-[#0D9488] hover:bg-[#0f766e] text-white shadow-md transition"
                  >
                    {isBuilding ? 'Provisioning Sandbox...' : 'Launch Simulated Company Portal &rarr;'}
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-14 h-14 rounded-full bg-teal-100 text-[#0D9488] flex items-center justify-center text-2xl mx-auto mb-3 shadow-inner">
                    ✓
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    {companyName}&apos;s PeoplePulse Portal is Ready!
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    We populated your workspace with 4 sample employees and automated workflows.
                  </p>
                </div>

                {/* Simulated Employee Table */}
                <div className="overflow-x-auto rounded-2xl border border-slate-200">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 border-b border-slate-200 text-[10px] font-black uppercase text-slate-500">
                      <tr>
                        <th className="p-3">Team Member</th>
                        <th className="p-3">Role &amp; Department</th>
                        <th className="p-3">PTO Balance</th>
                        <th className="p-3 text-right">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-slate-700">
                      {sampleStaff.map((person) => (
                        <tr key={person.name} className="hover:bg-slate-50 transition">
                          <td className="p-3 font-bold text-slate-900">{person.name}</td>
                          <td className="p-3">{person.role} • {person.dept}</td>
                          <td className="p-3 font-semibold text-[#2563EB]">{person.pto}</td>
                          <td className="p-3 text-right">
                            <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                              {person.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
                  <Link
                    to="/saas/peoplepulse-hr/features"
                    className="px-6 py-3 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-md transition text-center"
                  >
                    Test Live Interactive Simulators
                  </Link>
                  <Link
                    to="/saas/peoplepulse-hr"
                    className="px-6 py-3 rounded-full border border-slate-300 hover:border-[#2563EB] text-slate-700 font-bold text-xs transition text-center"
                  >
                    Return to Home Overview
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </PeoplePulseLayout>
  )
}
