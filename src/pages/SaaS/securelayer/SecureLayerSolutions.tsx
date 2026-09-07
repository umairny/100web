import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SecureLayerLayout } from './SecureLayerLayout'
import { Soc2Badge, Iso27001Badge, HipaaBadge } from './SecureLayerIcons'

export function SecureLayerSolutions() {
  const [activeTab, setActiveTab] = useState<'SOC2' | 'ISO27001' | 'HIPAA' | 'GDPR'>('SOC2')
  const [teamSize, setTeamSize] = useState(35)

  // Savings calculation: ~5 hours per employee per audit without automation
  const hoursSaved = Math.round(teamSize * 6.5)
  const dollarSavings = Math.round(hoursSaved * 95)

  return (
    <SecureLayerLayout>
      {/* Header */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-[#F0F9FF] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0284C7] text-xs font-bold mb-4">
            Security Framework Playbooks
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Compliance Built for Your Specific Framework.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Whether you&apos;re preparing for your first SOC 2 audit to close an enterprise prospect or expanding globally with ISO 27001, SecureLayer has the tailored blueprint.
          </p>
        </div>
      </section>

      {/* Framework Selector Tabs */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {[
              { id: 'SOC2', label: 'SOC 2 Type I & II', badge: Soc2Badge },
              { id: 'ISO27001', label: 'ISO 27001:2022', badge: Iso27001Badge },
              { id: 'HIPAA', label: 'HIPAA Security Rule', badge: HipaaBadge },
              { id: 'GDPR', label: 'GDPR & Privacy', badge: Soc2Badge },
            ].map((fw) => (
              <button
                key={fw.id}
                onClick={() => setActiveTab(fw.id as any)}
                className={`px-6 py-3.5 rounded-2xl font-bold text-sm flex items-center gap-3 transition-all ${
                  activeTab === fw.id
                    ? 'bg-[#0284C7] text-white shadow-lg shadow-blue-500/25 scale-[1.02]'
                    : 'bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300'
                }`}
              >
                <span>{fw.label}</span>
              </button>
            ))}
          </div>

          {/* Tab Content Panels */}
          {activeTab === 'SOC2' && (
            <div className="bg-gradient-to-br from-blue-50/70 to-slate-50 rounded-3xl p-8 sm:p-12 border border-blue-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0284C7] text-xs font-bold">
                  Fast-Track 14-Day Readiness
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  SOC 2 Type I &amp; II Automated Compliance
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Prove to your enterprise buyers that their customer data is secure. SecureLayer automates evidence collection for all five AICPA Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality, and Privacy.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="text-[#10B981]">✓</span> Automated continuous access reviews
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="text-[#10B981]">✓</span> Real-time infrastructure encryption proof
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="text-[#10B981]">✓</span> Vetted auditor-ready policy templates
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="text-[#10B981]">✓</span> 1-click auditor evidence room
                  </div>
                </div>
                <div className="pt-4">
                  <Link
                    to="/saas/securelayer/trial"
                    className="inline-block px-7 py-3 rounded-full text-sm font-bold bg-[#10B981] hover:bg-[#059669] text-white shadow-md transition"
                  >
                    Start SOC 2 Free Trial
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl max-w-sm w-full space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="font-bold text-xs uppercase tracking-wider text-slate-500">SOC 2 Velocity</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">Passing</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>Controls Mapped</span>
                      <strong className="text-slate-900">89 / 89</strong>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#10B981] h-full w-full" />
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 text-xs text-blue-900">
                    💡 Typical time to audit report: <strong>14 days</strong> (vs. 6 months manual).
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'ISO27001' && (
            <div className="bg-gradient-to-br from-purple-50/70 to-slate-50 rounded-3xl p-8 sm:p-12 border border-purple-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-[#7C3AED] text-xs font-bold">
                  International Standard
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  ISO 27001:2022 ISMS Framework
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Expand internationally with confidence. SecureLayer provides the complete Information Security Management System (ISMS) scaffolding, Statement of Applicability (SoA), and Annex A controls.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="text-[#10B981]">✓</span> Complete Annex A control automation
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="text-[#10B981]">✓</span> Risk assessment &amp; treatment plans
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="text-[#10B981]">✓</span> Management review meeting templates
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="text-[#10B981]">✓</span> Internal audit module included
                  </div>
                </div>
                <div className="pt-4">
                  <Link
                    to="/saas/securelayer/trial"
                    className="inline-block px-7 py-3 rounded-full text-sm font-bold bg-[#7C3AED] hover:bg-[#6D28D9] text-white shadow-md transition"
                  >
                    Start ISO 27001 Assessment
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl max-w-sm w-full space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="font-bold text-xs uppercase tracking-wider text-slate-500">ISO Annex A</span>
                    <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-700 text-xs font-bold">93 Controls</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>ISMS Policies Signed</span>
                      <strong className="text-slate-900">100%</strong>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#7C3AED] h-full w-full" />
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-purple-50 border border-purple-100 text-xs text-purple-900">
                    🌍 Ready for UK, EU, APAC, and North American cross-border enterprise audits.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'HIPAA' && (
            <div className="bg-gradient-to-br from-emerald-50/70 to-slate-50 rounded-3xl p-8 sm:p-12 border border-emerald-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#059669] text-xs font-bold">
                  Healthcare &amp; PHI Security
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  HIPAA Security &amp; Privacy Rule Suite
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Safeguard Protected Health Information (PHI). SecureLayer continuously verifies database encryption, access controls, BAA agreements, and employee privacy training.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="text-[#10B981]">✓</span> Business Associate Agreement (BAA) tracker
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="text-[#10B981]">✓</span> PHI database access audit trails
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="text-[#10B981]">✓</span> Annual HIPAA workforce training modules
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-800">
                    <span className="text-[#10B981]">✓</span> Instant HIPAA compliance letter generator
                  </div>
                </div>
                <div className="pt-4">
                  <Link
                    to="/saas/securelayer/trial"
                    className="inline-block px-7 py-3 rounded-full text-sm font-bold bg-[#059669] hover:bg-[#047857] text-white shadow-md transition"
                  >
                    Start HIPAA Readiness
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl max-w-sm w-full space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="font-bold text-xs uppercase tracking-wider text-slate-500">HIPAA Security Rule</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold">Active</span>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between text-slate-600">
                      <span>BAAs Signed</span>
                      <strong className="text-slate-900">18 / 18 Vendors</strong>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#059669] h-full w-full" />
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-100 text-xs text-emerald-900">
                    🏥 Close deals with hospitals, telehealth platforms, and health tech buyers without delay.
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'GDPR' && (
            <div className="bg-gradient-to-br from-sky-50/70 to-slate-50 rounded-3xl p-8 sm:p-12 border border-sky-100 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-100 text-[#0284C7] text-xs font-bold">
                  Global Privacy Governance
                </div>
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                  GDPR &amp; CCPA Privacy Compliance
                </h2>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  Automate Data Subject Access Requests (DSARs), maintain Records of Processing Activities (RoPA), and manage subprocessor vendor transparency.
                </p>
                <div className="pt-4">
                  <Link
                    to="/saas/securelayer/trial"
                    className="inline-block px-7 py-3 rounded-full text-sm font-bold bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-md transition"
                  >
                    Start Privacy Assessment
                  </Link>
                </div>
              </div>
              <div className="lg:col-span-5 flex justify-center">
                <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-xl max-w-sm w-full space-y-4">
                  <div className="text-xs font-bold text-slate-900">Data Processing Inventory</div>
                  <p className="text-xs text-slate-500">Automated subprocessor mapping and GDPR Article 30 registry.</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Interactive Savings & Hours ROI Calculator */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
            <div className="text-center max-w-xl mx-auto mb-10">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                Calculate Your Team&apos;s Time &amp; Cost Savings
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-2">
                See how much engineering bandwidth SecureLayer saves during an annual audit cycle.
              </p>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-sm font-bold text-slate-700">Company Headcount:</label>
                  <span className="text-xl font-black text-[#0284C7]">{teamSize} Employees</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="250"
                  step="5"
                  value={teamSize}
                  onChange={(e) => setTeamSize(Number(e.target.value))}
                  className="w-full accent-[#0284C7] cursor-pointer"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="p-5 rounded-2xl bg-blue-50/70 border border-blue-100 text-center">
                  <div className="text-3xl font-black text-[#0284C7]">{hoursSaved} hrs</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mt-1">
                    Engineering Hours Saved
                  </div>
                </div>
                <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-100 text-center">
                  <div className="text-3xl font-black text-[#10B981]">${dollarSavings.toLocaleString()}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-600 mt-1">
                    Equivalent Annual Cost Saved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecureLayerLayout>
  )
}
