import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SecureLayerLayout } from './SecureLayerLayout'

interface ControlCheck {
  id: string
  name: string
  category: string
  status: 'PASS' | 'FAIL' | 'SCANNING'
  evidence: string
  remediation?: string
}

export function SecureLayerFeatures() {
  const [selectedFramework, setSelectedFramework] = useState<'SOC2' | 'ISO27001' | 'HIPAA' | 'GDPR'>('SOC2')
  const [isScanning, setIsScanning] = useState(false)
  const [scanProgress, setScanProgress] = useState(100)
  const [controls, setControls] = useState<ControlCheck[]>([
    {
      id: 'CC6.1',
      name: 'IAM & MFA Enforcement on Cloud Infrastructure',
      category: 'Identity',
      status: 'PASS',
      evidence: 'Okta & AWS IAM sync confirmed 100% MFA enabled across 42 active users.',
    },
    {
      id: 'CC6.6',
      name: 'Vulnerability & Secret Scanning on Main Branches',
      category: 'DevSecOps',
      status: 'PASS',
      evidence: 'GitHub branch protection active with zero high-severity CVEs in 14 repos.',
    },
    {
      id: 'CC6.7',
      name: 'Data Encryption at Rest & in Transit (TLS 1.3)',
      category: 'Infrastructure',
      status: 'PASS',
      evidence: 'AWS KMS keys rotated automatically; S3 bucket default AES-256 verified.',
    },
    {
      id: 'CC7.2',
      name: 'Automated Employee Security Training & Policy Sign-off',
      category: 'People Ops',
      status: 'PASS',
      evidence: 'Annual cybersecurity awareness training completed by 100% of staff.',
    },
    {
      id: 'CC8.1',
      name: 'Centralized Audit Logging & Immutable S3 Archival',
      category: 'Logging',
      status: 'PASS',
      evidence: 'AWS CloudTrail multi-region logs streamed to immutable S3 Glacier bucket.',
    },
  ])

  const runSimulatedScan = () => {
    setIsScanning(true)
    setScanProgress(0)

    // Mark all as scanning
    setControls((prev) =>
      prev.map((c) => ({ ...c, status: 'SCANNING' }))
    )

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setIsScanning(false)
          setControls((current) =>
            current.map((c) => ({ ...c, status: 'PASS' }))
          )
          return 100
        }
        return prev + 25
      })
    }, 400)
  }

  return (
    <SecureLayerLayout>
      {/* Header */}
      <section className="pt-12 pb-16 bg-gradient-to-b from-[#F0F9FF] to-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-[#0284C7] text-xs font-bold mb-4">
            Continuous Control Engine
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-[#0F172A] tracking-tight">
            Compliance on Autopilot.{' '}
            <span className="text-[#0284C7]">Zero Manual Screenshots.</span>
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Experience how SecureLayer continuously validates your infrastructure, identity providers, and developer workflows against international security standards.
          </p>
        </div>
      </section>

      {/* ============================================================ */}
      {/* INTERACTIVE COMPLIANCE SCANNER SIMULATOR                     */}
      {/* ============================================================ */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#0F172A] text-white rounded-3xl p-6 sm:p-10 shadow-2xl border border-slate-800 relative overflow-hidden">
            {/* Header bar of simulator */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-slate-800">
              <div>
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-xs font-black uppercase tracking-widest text-[#38BDF8]">
                    Live Continuous Scanner Simulator
                  </span>
                </div>
                <h3 className="text-2xl font-black text-white mt-1">
                  Cloud Infrastructure Health: 100% Passing
                </h3>
              </div>

              {/* Framework Selector */}
              <div className="flex flex-wrap items-center gap-2">
                {(['SOC2', 'ISO27001', 'HIPAA', 'GDPR'] as const).map((fw) => (
                  <button
                    key={fw}
                    onClick={() => setSelectedFramework(fw)}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                      selectedFramework === fw
                        ? 'bg-[#0284C7] text-white shadow-md'
                        : 'bg-slate-800 text-slate-400 hover:text-white'
                    }`}
                  >
                    {fw === 'SOC2' ? 'SOC 2 Type II' : fw}
                  </button>
                ))}
              </div>
            </div>

            {/* Scan Action & Stats Bar */}
            <div className="py-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-6">
                <div>
                  <div className="text-xs text-slate-400 uppercase font-bold">Total Controls</div>
                  <div className="text-2xl font-black text-white">142 Active</div>
                </div>
                <div className="w-px h-10 bg-slate-800" />
                <div>
                  <div className="text-xs text-slate-400 uppercase font-bold">Evidence Items</div>
                  <div className="text-2xl font-black text-emerald-400">1,840 Collected</div>
                </div>
                <div className="w-px h-10 bg-slate-800" />
                <div>
                  <div className="text-xs text-slate-400 uppercase font-bold">Frequency</div>
                  <div className="text-2xl font-black text-[#38BDF8]">Hourly (24/7)</div>
                </div>
              </div>

              <button
                onClick={runSimulatedScan}
                disabled={isScanning}
                className="px-6 py-3 rounded-xl font-bold text-xs uppercase tracking-wider bg-[#10B981] hover:bg-[#059669] text-white shadow-lg shadow-emerald-500/25 transition disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {isScanning ? (
                  <>
                    <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    <span>Scanning ({scanProgress}%)...</span>
                  </>
                ) : (
                  <>
                    <span>⚡ Run Real-Time Audit Check</span>
                  </>
                )}
              </button>
            </div>

            {/* Simulated Live Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-800 text-xs font-black uppercase tracking-wider text-slate-400">
                    <th className="pb-3">Control Code</th>
                    <th className="pb-3">Security Requirement</th>
                    <th className="pb-3">Category</th>
                    <th className="pb-3">Audit Evidence Status</th>
                    <th className="pb-3 text-right">Result</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {controls.map((control) => (
                    <tr key={control.id} className="hover:bg-slate-800/30 transition">
                      <td className="py-4 font-mono text-xs font-bold text-[#38BDF8]">
                        {control.id}
                      </td>
                      <td className="py-4 font-bold text-white max-w-xs">
                        {control.name}
                      </td>
                      <td className="py-4 text-xs text-slate-400">
                        {control.category}
                      </td>
                      <td className="py-4 text-xs text-slate-300 max-w-sm">
                        {control.evidence}
                      </td>
                      <td className="py-4 text-right">
                        {control.status === 'PASS' ? (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-emerald-500/20 text-[#34D399] border border-emerald-500/30">
                            <span>●</span> PASS
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-blue-500/20 text-[#38BDF8] border border-blue-500/30 animate-pulse">
                            <span>⟳</span> CHECKING
                          </span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Bottom Tip Box */}
            <div className="mt-8 p-4 rounded-2xl bg-slate-800/50 border border-slate-700/60 flex items-center justify-between text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <span className="text-emerald-400 text-base">🛡️</span>
                <span>
                  All findings are cryptographically hashed and made available to your auditor in a read-only portal.
                </span>
              </div>
              <Link to="/saas/securelayer/trust" className="text-[#38BDF8] font-bold hover:underline">
                View Public Trust Center &rarr;
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive 3-Pillar Section */}
      <section className="py-20 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-[#0F172A] tracking-tight">
              Engineered for DevSecOps Speed
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              SecureLayer doesn&apos;t slow down engineering. It seamlessly plugs into your pull requests, AWS CloudWatch, and Slack alerts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#0284C7] flex items-center justify-center text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-bold text-slate-900">Zero-Friction Integrations</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Connect AWS via IAM cross-account roles, Okta via read-only tokens, and GitHub via OAuth in under 3 minutes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#059669] flex items-center justify-center text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-bold text-slate-900">Pre-Built Policy Library</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Over 25+ vetted information security policies (Access Control, Incident Response, Cryptography, Vendor Management) ready for custom branding.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-[#7C3AED] flex items-center justify-center text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-bold text-slate-900">Auditor Partnership Network</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Work with our pre-vetted network of accredited AICPA CPA firms who already know how to audit directly inside SecureLayer.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SecureLayerLayout>
  )
}
