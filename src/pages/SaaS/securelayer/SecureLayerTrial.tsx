import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SecureLayerLayout } from './SecureLayerLayout'
import { AwsIcon, GitHubIcon, OktaIcon } from './SecureLayerIcons'

export function SecureLayerTrial() {
  const [step, setStep] = useState<1 | 2 | 3>(1)
  const [companyName, setCompanyName] = useState('Acme Corp')
  const [framework, setFramework] = useState<'SOC 2 Type II' | 'ISO 27001' | 'HIPAA'>('SOC 2 Type II')
  const [cloud, setCloud] = useState('AWS')
  const [isProvisioning, setIsProvisioning] = useState(false)

  const handleNext = () => {
    if (step === 2) {
      setIsProvisioning(true)
      setTimeout(() => {
        setIsProvisioning(false)
        setStep(3)
      }, 1000)
    } else {
      setStep((prev) => (prev + 1) as any)
    }
  }

  return (
    <SecureLayerLayout>
      <section className="py-16 bg-gradient-to-b from-[#F0F9FF] via-white to-slate-50 min-h-[80vh] flex items-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Top Step Breadcrumb */}
          <div className="flex items-center justify-center gap-3 mb-10 text-xs font-bold">
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                step >= 1 ? 'bg-[#0284C7] text-white' : 'bg-slate-100 text-slate-400'
              }`}
            >
              <span>1</span>
              <span>Company &amp; Target</span>
            </div>
            <div className="w-8 h-px bg-slate-300" />
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                step >= 2 ? 'bg-[#0284C7] text-white' : 'bg-slate-100 text-slate-400'
              }`}
            >
              <span>2</span>
              <span>Connect Stack</span>
            </div>
            <div className="w-8 h-px bg-slate-300" />
            <div
              className={`flex items-center gap-2 px-4 py-2 rounded-full ${
                step >= 3 ? 'bg-[#10B981] text-white' : 'bg-slate-100 text-slate-400'
              }`}
            >
              <span>3</span>
              <span>Live Sandbox Ready</span>
            </div>
          </div>

          {/* Main Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl">
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Set Up Your Compliance Sandbox
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Step 1 of 3: Choose your primary audit goal and company profile.
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company / Team Name</label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-2">Primary Compliance Framework</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {(['SOC 2 Type II', 'ISO 27001', 'HIPAA'] as const).map((fw) => (
                        <button
                          key={fw}
                          type="button"
                          onClick={() => setFramework(fw)}
                          className={`p-4 rounded-xl text-left border text-xs font-bold transition-all ${
                            framework === fw
                              ? 'border-[#0284C7] bg-blue-50 text-[#0284C7] shadow-sm'
                              : 'border-slate-200 hover:border-slate-300 text-slate-700'
                          }`}
                        >
                          <div className="text-base mb-1">🛡️</div>
                          <div>{fw}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    onClick={handleNext}
                    className="px-8 py-3 rounded-full font-bold text-sm bg-[#0284C7] hover:bg-[#0369A1] text-white shadow-md transition"
                  >
                    Continue to Integrations &rarr;
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Select Your Primary Cloud &amp; Tools
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Step 2 of 3: Simulate connecting your cloud infrastructure.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {['AWS', 'Google Cloud', 'Microsoft Azure'].map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setCloud(item)}
                        className={`p-4 rounded-xl text-left border text-xs font-bold transition-all ${
                          cloud === item
                            ? 'border-[#0284C7] bg-blue-50 text-[#0284C7] shadow-sm'
                            : 'border-slate-200 hover:border-slate-300 text-slate-700'
                        }`}
                      >
                        <AwsIcon className="w-6 h-6 mb-2" />
                        <div>{item}</div>
                      </button>
                    ))}
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <GitHubIcon className="w-5 h-5 text-slate-700" />
                      <span className="font-bold text-slate-800">GitHub Branch Protection</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      Simulated Auto-Detect
                    </span>
                  </div>

                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-3">
                      <OktaIcon className="w-5 h-5" />
                      <span className="font-bold text-slate-800">Okta / Google Workspace SSO</span>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">
                      Simulated Auto-Detect
                    </span>
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
                    disabled={isProvisioning}
                    className="px-8 py-3 rounded-full font-bold text-sm bg-[#10B981] hover:bg-[#059669] text-white shadow-md transition flex items-center gap-2"
                  >
                    {isProvisioning ? 'Provisioning Sandbox...' : 'Launch Simulated Audit Scan &rarr;'}
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-6 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-3xl mx-auto shadow-inner">
                  ✓
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                    Your {companyName} Sandbox is Live!
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 mt-2">
                    We generated a fully populated {framework} compliance instance using simulated {cloud} telemetry.
                  </p>
                </div>

                {/* Status metrics pill bar */}
                <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left">
                  <div>
                    <div className="text-[10px] font-black uppercase text-slate-400">Controls Mapped</div>
                    <div className="text-xl font-black text-slate-900">89 / 89</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase text-slate-400">Compliance Rate</div>
                    <div className="text-xl font-black text-emerald-600">100% Pass</div>
                  </div>
                  <div>
                    <div className="text-[10px] font-black uppercase text-slate-400">Auditor Status</div>
                    <div className="text-xl font-black text-[#0284C7]">Ready to Invite</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 justify-center">
                  <Link
                    to="/saas/securelayer/features"
                    className="px-6 py-3 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white font-bold text-xs shadow-md transition"
                  >
                    Explore Real-Time Scanner Simulator
                  </Link>
                  <Link
                    to="/saas/securelayer/trust"
                    className="px-6 py-3 rounded-full border border-slate-300 hover:border-[#0284C7] text-slate-700 font-bold text-xs transition"
                  >
                    View Your Public Trust Center
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </SecureLayerLayout>
  )
}
