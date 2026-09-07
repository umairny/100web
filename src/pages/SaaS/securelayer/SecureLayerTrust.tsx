import React, { useState } from 'react'
import { SecureLayerLayout } from './SecureLayerLayout'
import { Soc2Badge, Iso27001Badge, HipaaBadge } from './SecureLayerIcons'

export function SecureLayerTrust() {
  const [reportModalOpen, setReportModalOpen] = useState(false)
  const [reportRequested, setReportRequested] = useState(false)
  const [workEmail, setWorkEmail] = useState('')

  const handleReportRequest = (e: React.FormEvent) => {
    e.preventDefault()
    if (!workEmail) return
    setReportRequested(true)
  }

  const subprocessors = [
    { name: 'Amazon Web Services (AWS)', purpose: 'Cloud infrastructure & database hosting', location: 'USA (us-east-1, us-west-2)', status: 'SOC 2, ISO 27001' },
    { name: 'Cloudflare', purpose: 'DDoS mitigation, CDN & edge WAF', location: 'Global Edge Network', status: 'SOC 2, PCI-DSS' },
    { name: 'Datadog', purpose: 'APM, security telemetry & log monitoring', location: 'USA (us-east-1)', status: 'SOC 2 Type II' },
    { name: 'Okta', purpose: 'Employee identity & MFA access federation', location: 'USA & EU', status: 'SOC 2 Type II' },
    { name: 'Stripe', purpose: 'Payment processing & billing infrastructure', location: 'Global', status: 'PCI-DSS Level 1' },
  ]

  return (
    <SecureLayerLayout>
      {/* Header */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-[#F0F9FF] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-[#059669] text-xs font-bold mb-4">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
            <span>Public Trust Center — Real-Time Status</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Security, Reliability, &amp; Compliance Transparency.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            We hold ourselves to the highest security standards. Inspect our continuous compliance posture, download auditor reports, and review our subprocessor registry.
          </p>
        </div>
      </section>

      {/* Real-time Status Card & Metrics */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F172A] text-white rounded-3xl p-8 border border-slate-800 shadow-xl mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">System Uptime</div>
                <div className="text-3xl font-black text-white mt-1">99.99%</div>
                <div className="text-[11px] text-emerald-400 mt-1">● All Systems Normal</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">Controls Monitored</div>
                <div className="text-3xl font-black text-white mt-1">142 / 142</div>
                <div className="text-[11px] text-emerald-400 mt-1">● 100% Passing Hourly</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">Penetration Testing</div>
                <div className="text-3xl font-black text-white mt-1">Clean</div>
                <div className="text-[11px] text-slate-400 mt-1">Q4 2025 by Bishop Fox</div>
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-[#38BDF8]">Data Encryption</div>
                <div className="text-3xl font-black text-white mt-1">AES-256</div>
                <div className="text-[11px] text-slate-400 mt-1">TLS 1.3 in transit</div>
              </div>
            </div>
          </div>

          {/* Compliance Certifications Grid */}
          <div className="mb-16">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Audited Frameworks &amp; Reports</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* SOC 2 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Soc2Badge className="w-12 h-12" />
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] uppercase tracking-wider">
                      Certified
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">SOC 2 Type II Report</h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Issued by an independent AICPA-accredited CPA audit firm covering Security and Confidentiality.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-4">
                  <button
                    onClick={() => setReportModalOpen(true)}
                    className="w-full py-2.5 rounded-xl bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold transition shadow-sm"
                  >
                    Request Auditor Report &rarr;
                  </button>
                </div>
              </div>

              {/* ISO 27001 */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <Iso27001Badge className="w-12 h-12" />
                    <span className="px-2.5 py-1 rounded-full bg-purple-100 text-purple-800 font-bold text-[10px] uppercase tracking-wider">
                      Certified
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">ISO 27001:2022 Certificate</h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Audited Information Security Management System (ISMS) covering global operations and data assets.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-4">
                  <button
                    onClick={() => setReportModalOpen(true)}
                    className="w-full py-2.5 rounded-xl border border-slate-300 hover:border-[#0284C7] text-slate-700 text-xs font-bold transition"
                  >
                    Download Certificate &rarr;
                  </button>
                </div>
              </div>

              {/* HIPAA */}
              <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <HipaaBadge className="w-12 h-12" />
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px] uppercase tracking-wider">
                      Verified
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900 text-base">HIPAA Compliance Attestation</h3>
                  <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                    Formal legal attestation letter validating physical, administrative, and technical safeguards.
                  </p>
                </div>
                <div className="pt-6 border-t border-slate-100 mt-4">
                  <button
                    onClick={() => setReportModalOpen(true)}
                    className="w-full py-2.5 rounded-xl border border-slate-300 hover:border-[#0284C7] text-slate-700 text-xs font-bold transition"
                  >
                    Request BAA / Letter &rarr;
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Subprocessors Registry */}
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200">
            <div className="mb-6">
              <h2 className="text-xl font-black text-slate-900">Third-Party Subprocessors</h2>
              <p className="text-xs text-slate-500 mt-1">
                We only partner with industry-leading infrastructure providers that maintain strict SOC 2 and ISO compliance.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-[10px] font-black uppercase text-slate-400 tracking-wider">
                    <th className="pb-3">Subprocessor</th>
                    <th className="pb-3">Purpose</th>
                    <th className="pb-3">Data Location</th>
                    <th className="pb-3 text-right">Security Baseline</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200/60 text-slate-700">
                  {subprocessors.map((sub) => (
                    <tr key={sub.name} className="hover:bg-slate-100/50 transition">
                      <td className="py-3.5 font-bold text-slate-900">{sub.name}</td>
                      <td className="py-3.5">{sub.purpose}</td>
                      <td className="py-3.5">{sub.location}</td>
                      <td className="py-3.5 text-right font-semibold text-[#0284C7]">{sub.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* NDA Report Access Modal */}
      {reportModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-slate-100 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <h3 className="font-bold text-slate-900 text-lg">Request SOC 2 Type II Audit Report</h3>
              <button
                onClick={() => setReportModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 font-bold text-xl"
              >
                &times;
              </button>
            </div>

            {reportRequested ? (
              <div className="py-8 text-center space-y-3">
                <div className="text-3xl">📬</div>
                <h4 className="font-bold text-slate-900 text-base">Request Submitted!</h4>
                <p className="text-xs text-slate-600">
                  A click-to-sign mutual NDA link has been dispatched to <strong>{workEmail}</strong>. Once signed, the CPA audit PDF will unlock immediately.
                </p>
                <button
                  onClick={() => {
                    setReportModalOpen(false)
                    setReportRequested(false)
                  }}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-[#0284C7] text-white text-xs font-bold"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleReportRequest} className="py-6 space-y-4">
                <p className="text-xs text-slate-600 leading-relaxed">
                  Due to the sensitive nature of our infrastructure architecture details, our full CPA auditor report requires a standard mutual NDA.
                </p>
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Corporate Email Address</label>
                  <input
                    type="email"
                    required
                    value={workEmail}
                    onChange={(e) => setWorkEmail(e.target.value)}
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#0284C7]"
                  />
                </div>
                <div className="p-3 bg-slate-50 border border-slate-100 rounded-xl text-[11px] text-slate-500">
                  📋 Instant automated NDA signature handled via DocuSign / HelloSign.
                </div>
                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setReportModalOpen(false)}
                    className="flex-1 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold shadow-md transition"
                  >
                    Request Secure Access
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </SecureLayerLayout>
  )
}
