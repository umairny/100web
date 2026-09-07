import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SecureLayerLayout } from './SecureLayerLayout'
import {
  AwsIcon,
  AzureIcon,
  GoogleCloudIcon,
  OktaIcon,
  GitHubIcon,
  GitLabIcon,
  SlackIcon,
  JiraIcon,
  HubSpotIcon,
  AsanaIcon,
  JamfIcon,
  Soc2Badge,
  Iso27001Badge,
  HipaaBadge,
} from './SecureLayerIcons'

export function SecureLayerHome() {
  const [selectedCategory, setSelectedCategory] = useState<
    'ALL' | 'CLOUD' | 'IDENTITY' | 'DEV TOOLS' | 'PROJECT MGMT' | 'ENDPOINT'
  >('ALL')
  const [trialEmail, setTrialEmail] = useState('')
  const [trialCompany, setTrialCompany] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const integrations = [
    { name: 'AWS', category: 'CLOUD', icon: AwsIcon, desc: 'Continuous IAM, S3, RDS, & EC2 audit checks' },
    { name: 'Google Cloud', category: 'CLOUD', icon: GoogleCloudIcon, desc: 'GCP Project IAM and BigQuery compliance' },
    { name: 'Microsoft Azure', category: 'CLOUD', icon: AzureIcon, desc: 'Azure AD, subscription & network security' },
    { name: 'Okta', category: 'IDENTITY', icon: OktaIcon, desc: 'SSO, MFA enforcement & user deprovisioning' },
    { name: 'GitHub', category: 'DEV TOOLS', icon: GitHubIcon, desc: 'Branch protection, PR reviews & secret scanning' },
    { name: 'GitLab', category: 'DEV TOOLS', icon: GitLabIcon, desc: 'CI/CD pipeline security & repository audits' },
    { name: 'Jira', category: 'PROJECT MGMT', icon: JiraIcon, desc: 'Automated vulnerability ticket sync & tracking' },
    { name: 'Slack', category: 'DEV TOOLS', icon: SlackIcon, desc: 'Real-time alert notifications & approval workflows' },
    { name: 'HubSpot', category: 'PROJECT MGMT', icon: HubSpotIcon, desc: 'Customer data access & CRM privacy rules' },
    { name: 'Asana', category: 'PROJECT MGMT', icon: AsanaIcon, desc: 'Security remediation task assignment' },
    { name: 'Jamf', category: 'ENDPOINT', icon: JamfIcon, desc: 'MDM fleet encryption, password policies & OS sync' },
  ]

  const filteredIntegrations =
    selectedCategory === 'ALL'
      ? integrations
      : integrations.filter((item) => item.category === selectedCategory)

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!trialEmail) return
    setSubmitted(true)
  }

  return (
    <SecureLayerLayout>
      {/* ============================================================ */}
      {/* FRAME 1: HERO SECTION                                        */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 bg-gradient-to-b from-[#F0F9FF] via-[#F8FAFC] to-white">
        {/* Subtle Ambient Background Gradients */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#38BDF8]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-[#10B981]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 border border-blue-200 text-[#0284C7] text-xs font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
                <span>Next-Gen Compliance Automation</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#0F172A] tracking-tight leading-[1.1]">
                Automate Compliance.{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#10B981]">
                  Build Unshakable Trust.
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-slate-600 leading-relaxed max-w-xl">
                SecureLayer streamlines security standards like <strong>SOC 2</strong>, <strong>ISO 27001</strong>, and <strong>HIPAA</strong> with continuous monitoring and automated workflows.
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Link
                  to="/saas/securelayer/trial"
                  className="px-8 py-3.5 rounded-full text-base font-bold bg-[#10B981] hover:bg-[#059669] text-white shadow-lg shadow-emerald-500/25 hover:shadow-xl hover:shadow-emerald-500/35 transition-all duration-200 transform hover:-translate-y-0.5"
                >
                  Get Started for Free
                </Link>

                <Link
                  to="/saas/securelayer/features"
                  className="px-6 py-3.5 rounded-full text-base font-bold text-[#0284C7] hover:text-[#0369A1] hover:bg-blue-50 transition-all duration-200 flex items-center gap-2"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>

              {/* 3 Checkmarks */}
              <div className="pt-4 space-y-2.5">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span>Continuous Monitoring of all cloud &amp; identity assets</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span>Rapid Evidence Gathering with 100+ automated connectors</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
                    ✓
                  </div>
                  <span>Expert In-House Support &amp; Auditor Network</span>
                </div>
              </div>
            </div>

            {/* Right Hero Graphic (6 cols) */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-lg lg:max-w-xl group">
                <img
                  src="/images/saas/securelayer/securelayer-hero.svg"
                  alt="SecureLayer Hero Cyber Shield"
                  className="w-full h-auto drop-shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FRAME 1 SECTION 2: SIMPLIFY YOUR COMPLIANCE JOURNEY          */}
      {/* 4 Rich Colorful Stage Cards (Blue, Cyan, Green, Purple)      */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
              Simplify Your Compliance Journey
            </h2>
            <p className="mt-4 text-slate-600 text-base sm:text-lg">
              Say goodbye to chaotic spreadsheets and manual screenshots. SecureLayer coordinates your entire compliance cycle from start to finish.
            </p>
          </div>

          {/* 4 Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Continuous Monitoring (Blue) */}
            <div className="rounded-3xl p-6 bg-gradient-to-b from-[#2563EB] to-[#1D4ED8] text-white shadow-xl shadow-blue-500/15 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300">
              <div>
                <div className="text-sm font-black uppercase tracking-widest text-blue-200 mb-1">
                  Step 01
                </div>
                <h3 className="text-xl font-bold mb-2">Continuous Monitoring</h3>
                <p className="text-xs text-blue-100 leading-relaxed mb-6">
                  24/7 automated scans across AWS, GCP, Azure, and GitHub. Detect configuration drift in seconds.
                </p>
              </div>
              <div className="bg-blue-900/40 rounded-2xl p-3 border border-white/10 flex items-center justify-center">
                <img
                  src="/images/saas/securelayer/journey-step1-monitoring.svg"
                  alt="Continuous Monitoring Radar"
                  className="w-full h-32 object-contain"
                />
              </div>
            </div>

            {/* Card 2: Automated Evidence (Cyan) */}
            <div className="rounded-3xl p-6 bg-gradient-to-b from-[#0284C7] to-[#0369A1] text-white shadow-xl shadow-cyan-500/15 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300">
              <div>
                <div className="text-sm font-black uppercase tracking-widest text-cyan-200 mb-1">
                  Step 02
                </div>
                <h3 className="text-xl font-bold mb-2">Automated Evidence</h3>
                <p className="text-xs text-cyan-100 leading-relaxed mb-6">
                  Ingest verified proof, IAM permissions, commit histories, and encryption checks automatically.
                </p>
              </div>
              <div className="bg-sky-950/40 rounded-2xl p-3 border border-white/10 flex items-center justify-center">
                <img
                  src="/images/saas/securelayer/journey-step2-evidence.svg"
                  alt="Automated Evidence Documents"
                  className="w-full h-32 object-contain"
                />
              </div>
            </div>

            {/* Card 3: Risk Assessment (Green) */}
            <div className="rounded-3xl p-6 bg-gradient-to-b from-[#059669] to-[#047857] text-white shadow-xl shadow-emerald-500/15 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300">
              <div>
                <div className="text-sm font-black uppercase tracking-widest text-emerald-200 mb-1">
                  Step 03
                </div>
                <h3 className="text-xl font-bold mb-2">Risk Assessment</h3>
                <p className="text-xs text-emerald-100 leading-relaxed mb-6">
                  Real-time risk heatmap scoring, automated policy gap detection, and severity-ranked remediations.
                </p>
              </div>
              <div className="bg-emerald-950/40 rounded-2xl p-3 border border-white/10 flex items-center justify-center">
                <img
                  src="/images/saas/securelayer/journey-step3-risk.svg"
                  alt="Risk Assessment Matrix"
                  className="w-full h-32 object-contain"
                />
              </div>
            </div>

            {/* Card 4: Audit Readiness (Purple) */}
            <div className="rounded-3xl p-6 bg-gradient-to-b from-[#7C3AED] to-[#6D28D9] text-white shadow-xl shadow-purple-500/15 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300">
              <div>
                <div className="text-sm font-black uppercase tracking-widest text-purple-200 mb-1">
                  Step 04
                </div>
                <h3 className="text-xl font-bold mb-2">Audit Readiness</h3>
                <p className="text-xs text-purple-100 leading-relaxed mb-6">
                  Provide certified auditors with instant one-click evidence rooms. Cut audit duration by 70%.
                </p>
              </div>
              <div className="bg-purple-950/40 rounded-2xl p-3 border border-white/10 flex items-center justify-center">
                <img
                  src="/images/saas/securelayer/journey-step4-audit.svg"
                  alt="Audit Readiness Certificate & Handshake"
                  className="w-full h-32 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FRAME 1 SECTION 3: CORE WORKFLOW TIMELINE                    */}
      {/* 1. Connect Stack -> 2. Assess -> 3. Gather -> 4. Certify     */}
      {/* ============================================================ */}
      <section className="py-20 bg-[#F0F9FF]/60 border-t border-b border-slate-200/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-black uppercase tracking-widest text-[#0284C7]">
              End-to-End Governance
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mt-2">
              Core Workflow
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              From initial cloud connection to final auditor stamp in four structured milestones.
            </p>
          </div>

          {/* Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Horizontal connecting line on desktop */}
            <div className="hidden md:block absolute top-12 left-16 right-16 h-0.5 bg-gradient-to-r from-[#0284C7] via-[#10B981] to-[#7C3AED] z-0" />

            {/* Step 1 */}
            <div className="relative z-10 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-blue-50 border-2 border-[#0284C7] text-[#0284C7] font-black flex items-center justify-center mb-4">
                1
              </div>
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 mb-1">
                Connect Your Stack
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Continuous evidence sync across AWS, GCP, Azure, GitHub, and Okta.
              </p>
              <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
                <AwsIcon className="w-5 h-5" />
                <AzureIcon className="w-5 h-5" />
                <GoogleCloudIcon className="w-5 h-5" />
                <GitHubIcon className="w-5 h-5 text-slate-700" />
                <OktaIcon className="w-5 h-5" />
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative z-10 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-sky-50 border-2 border-[#0EA5E9] text-[#0EA5E9] font-black flex items-center justify-center mb-4">
                2
              </div>
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 mb-1">
                Assess Controls
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Continuous security policy scanning, vulnerability tests, and automated remediation tickets.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#0EA5E9] pt-2 border-t border-slate-100">
                <span>🛡️ 140+ Controls Scanned</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative z-10 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-emerald-50 border-2 border-[#10B981] text-[#10B981] font-black flex items-center justify-center mb-4">
                3
              </div>
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 mb-1">
                Gather Evidence
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Automated data ingestion, immutable timestamped audit logs, and verified policy signatures.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#10B981] pt-2 border-t border-slate-100">
                <span>⚡ 100% Zero-Touch Sync</span>
              </div>
            </div>

            {/* Step 4 */}
            <div className="relative z-10 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md transition">
              <div className="w-12 h-12 rounded-full bg-purple-50 border-2 border-[#7C3AED] text-[#7C3AED] font-black flex items-center justify-center mb-4">
                4
              </div>
              <h3 className="text-sm font-black uppercase tracking-wider text-slate-900 mb-1">
                Achieve Certification
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-4">
                Generate auditor-ready reports, invite independent CPAs, and fast-track audit signoff.
              </p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#7C3AED] pt-2 border-t border-slate-100">
                <span>🏆 Clean Audit Report</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FRAME 2 SECTION: SECURE YOUR INGESTION                        */}
      {/* Centerpiece gear-shield vector & bullet benefits             */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Vector illustration (6 cols) */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md">
                <img
                  src="/images/saas/securelayer/secure-ingestion-shield.svg"
                  alt="Secure Your Ingestion Shield"
                  className="w-full h-auto drop-shadow-xl"
                />
              </div>
            </div>

            {/* Content (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[#059669] text-xs font-bold">
                Automated Architecture
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight">
                Secure Your Ingestion
              </h2>
              <p className="text-base text-slate-600 leading-relaxed">
                SecureLayer streamlines security operations with continuous, cryptographically signed data streams. Our ingestion engine connects directly to your cloud APIs with read-only least-privilege tokens.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-blue-100 text-[#0284C7] flex items-center justify-center font-bold text-sm shrink-0">
                    🔄
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Automatic Policy Sync</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Always up to date with the latest 2026 AICPA SOC 2 and ISO 27001:2022 framework revisions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center font-bold text-sm shrink-0">
                    🛡️
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Continuous Compliance</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Zero gaps between audit cycles. Sleep soundly knowing controls are tested every single hour.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-8 h-8 rounded-xl bg-purple-100 text-[#7C3AED] flex items-center justify-center font-bold text-sm shrink-0">
                    📈
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Scalable Enterprise Platform</h4>
                    <p className="text-xs text-slate-500 mt-1">
                      Designed to grow from 10 to 10,000+ employees and multi-cloud architectures without friction.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FRAME 2 & 3: INTEGRATIONS — WORKS WITH YOUR ECOSYSTEM        */}
      {/* Radial Hub Vector + Category Filters + Interactive Cards     */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-[#F8FAFC] border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-black uppercase tracking-widest text-[#0284C7]">
              Integrations
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mt-2">
              Works with Your Ecosystem
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              Connect SecureLayer to 100+ platforms in under five minutes. Read-only permissions ensure zero risk to production.
            </p>
          </div>

          {/* Central Radial Ecosystem Hub Graphic */}
          <div className="max-w-4xl mx-auto mb-12 flex justify-center">
            <img
              src="/images/saas/securelayer/ecosystem-hub.svg"
              alt="SecureLayer Integrations Ecosystem Hub"
              className="w-full h-auto drop-shadow-md"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {(['ALL', 'CLOUD', 'IDENTITY', 'DEV TOOLS', 'PROJECT MGMT', 'ENDPOINT'] as const).map(
              (cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-black tracking-wider transition-all duration-200 ${
                    selectedCategory === cat
                      ? 'bg-[#0284C7] text-white shadow-md shadow-blue-500/25'
                      : 'bg-white text-slate-600 border border-slate-200 hover:border-[#0284C7] hover:text-[#0284C7]'
                  }`}
                >
                  {cat}
                </button>
              )
            )}
          </div>

          {/* Interactive Integration Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredIntegrations.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.name}
                  className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#38BDF8] transition-all flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-slate-900 text-sm truncate">{item.name}</h4>
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-100 text-slate-500">
                        {item.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed line-clamp-2">
                      {item.desc}
                    </p>
                    <div className="mt-3 flex items-center gap-1 text-[11px] font-bold text-[#0284C7]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span>1-Click Connect Ready</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/saas/securelayer/integrations"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold text-[#0284C7] bg-white border border-slate-200 hover:border-[#0284C7] shadow-sm transition"
            >
              <span>Explore All 100+ Integrations</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FRAME 3: BUYER TRUST & SOCIAL PROOF                          */}
      {/* Client Logos, 3 Testimonials, Official Badges                */}
      {/* ============================================================ */}
      <section className="py-20 lg:py-28 bg-white border-t border-slate-100" id="customers">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-black uppercase tracking-widest text-[#0284C7]">
              Buyer Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0F172A] tracking-tight mt-2">
              Trusted by Innovative Companies
            </h2>
            <p className="mt-3 text-slate-600 text-sm sm:text-base">
              From hyper-growth YC startups to public SaaS enterprises, teams rely on SecureLayer to pass compliance audits in record time.
            </p>
          </div>

          {/* Partner / Client Logos */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 items-center justify-center opacity-80 mb-16">
            <div className="flex items-center justify-center gap-2 text-slate-700 font-black tracking-tight text-lg">
              <span className="text-[#0284C7]">☁</span> CLOUDSCALE
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-700 font-black tracking-tight text-lg">
              <span className="text-[#38BDF8]">✦</span> NexaLink
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-700 font-black tracking-tight text-lg">
              <span className="text-[#10B981]">●</span> DataSphere
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-700 font-black tracking-tight text-lg">
              <span className="text-[#0EA5E9]">▲</span> FinTech Solutions
            </div>
            <div className="flex items-center justify-center gap-2 text-slate-700 font-black tracking-tight text-lg">
              <span className="text-[#7C3AED]">■</span> SaaS Innovations
            </div>
          </div>

          {/* 3 Testimonial Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Review 1 */}
            <div className="bg-[#F8FAFC] rounded-3xl p-7 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                </div>
                <blockquote className="text-slate-800 font-medium text-sm leading-relaxed mb-6">
                  &ldquo;SecureLayer made SOC 2 a breeze. The automated evidence collection saved our engineering team over 200 hours of manual screenshot-taking.&rdquo;
                </blockquote>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-black flex items-center justify-center text-sm">
                  DW
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">David Wright</div>
                  <div className="text-xs text-slate-500">CTO, CloudScale</div>
                </div>
              </div>
            </div>

            {/* Review 2 */}
            <div className="bg-[#F8FAFC] rounded-3xl p-7 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                </div>
                <blockquote className="text-slate-800 font-medium text-sm leading-relaxed mb-6">
                  &ldquo;Game changer for our security posture. We closed 4 enterprise healthcare contracts this quarter thanks to our public real-time Trust Center.&rdquo;
                </blockquote>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-black flex items-center justify-center text-sm">
                  SL
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Sarah Lin</div>
                  <div className="text-xs text-slate-500">Head of Security, DataSphere</div>
                </div>
              </div>
            </div>

            {/* Review 3 */}
            <div className="bg-[#F8FAFC] rounded-3xl p-7 border border-slate-200 flex flex-col justify-between hover:shadow-lg transition">
              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-base">★</span>
                  ))}
                </div>
                <blockquote className="text-slate-800 font-medium text-sm leading-relaxed mb-6">
                  &ldquo;SOC 2 audit completed in under 2 weeks. Our CPA auditor loved the organized evidence rooms and timestamped audit logs.&rdquo;
                </blockquote>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                <div className="w-10 h-10 rounded-full bg-purple-600 text-white font-black flex items-center justify-center text-sm">
                  AR
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">Alex Rivera</div>
                  <div className="text-xs text-slate-500">VP Engineering, FinTech Solutions</div>
                </div>
              </div>
            </div>
          </div>

          {/* Compliance Seals Bar */}
          <div className="bg-gradient-to-r from-blue-50 via-slate-50 to-emerald-50 rounded-3xl p-8 border border-slate-200 flex flex-wrap items-center justify-around gap-8 text-center">
            <div className="flex items-center gap-4">
              <Soc2Badge className="w-14 h-14" />
              <div className="text-left">
                <div className="font-black text-slate-900 text-sm">SOC 2 Type II</div>
                <div className="text-xs text-slate-500">Security &amp; Confidentiality</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Iso27001Badge className="w-14 h-14" />
              <div className="text-left">
                <div className="font-black text-slate-900 text-sm">ISO 27001:2022</div>
                <div className="text-xs text-slate-500">Information Security Management</div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <HipaaBadge className="w-14 h-14" />
              <div className="text-left">
                <div className="font-black text-slate-900 text-sm">HIPAA Security</div>
                <div className="text-xs text-slate-500">Protected Health Information</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/* FRAME 3: LOW-FRICTION TRIAL SIGNUP                           */}
      {/* "Ready to Automate Compliance?" + Work Email Form            */}
      {/* ============================================================ */}
      <section className="py-20 bg-gradient-to-b from-white to-[#F0F9FF]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A] text-white p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Ambient Cyan glow inside card */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#0284C7]/20 rounded-full blur-3xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">
              {/* Left col */}
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-[#34D399] text-xs font-bold">
                  ⚡ 14-Day Full Access
                </div>
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                  Ready to Automate Compliance?
                </h2>
                <ul className="space-y-3 text-sm text-slate-300">
                  <li className="flex items-center gap-2">
                    <span className="text-[#34D399] font-bold">✓</span> Automatic Policy Updates
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#34D399] font-bold">✓</span> Continuous Compliance Monitoring
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-[#34D399] font-bold">✓</span> Scalable Multi-Cloud Platform
                  </li>
                </ul>
              </div>

              {/* Right col: Form */}
              <div className="lg:col-span-6 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-white">Low-Friction. No Credit Card.</h3>
                  <p className="text-xs text-slate-300 mt-1">Get started in minutes with pre-built templates.</p>
                </div>

                {submitted ? (
                  <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-xl p-5 text-center space-y-2">
                    <div className="text-2xl">🎉</div>
                    <div className="font-bold text-white text-sm">Sandbox Provisioned!</div>
                    <p className="text-xs text-emerald-200">
                      We've sent access instructions to <strong>{trialEmail}</strong>.
                    </p>
                    <Link
                      to="/saas/securelayer/trial"
                      className="inline-block mt-2 text-xs font-bold text-white underline"
                    >
                      Enter Live Simulation &rarr;
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleTrialSubmit} className="space-y-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Work Email</label>
                      <input
                        type="email"
                        required
                        value={trialEmail}
                        onChange={(e) => setTrialEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-300 mb-1">Company Name</label>
                      <input
                        type="text"
                        required
                        value={trialCompany}
                        onChange={(e) => setTrialCompany(e.target.value)}
                        placeholder="Acme Inc."
                        className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-[#38BDF8]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 rounded-xl font-bold text-sm bg-[#10B981] hover:bg-[#059669] text-white shadow-lg shadow-emerald-500/30 transition-all duration-200"
                    >
                      START YOUR FREE 14-DAY TRIAL
                    </button>
                    <p className="text-[11px] text-center text-slate-400 pt-1">
                      By signing up you agree to SecureLayer&apos;s Terms and Privacy Policy.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </SecureLayerLayout>
  )
}
