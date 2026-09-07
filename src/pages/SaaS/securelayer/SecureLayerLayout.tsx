import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SecureLayerLogo, Soc2Badge, Iso27001Badge, HipaaBadge } from './SecureLayerIcons'

interface SecureLayerLayoutProps {
  children: React.ReactNode
}

export function SecureLayerLayout({ children }: SecureLayerLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productDropdownOpen, setProductDropdownOpen] = useState(false)
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false)
  const location = useLocation()

  // Base path helper to support both /saas/securelayer and /securelayer
  const isShortPath = location.pathname.startsWith('/securelayer')
  const basePath = isShortPath ? '/securelayer' : '/saas/securelayer'

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#0284C7] selection:text-white">
      {/* Top Banner */}
      <div className="bg-[#0284C7] text-white text-xs font-semibold py-2 px-4 text-center">
        <span>⚡ Accelerate SOC 2 Type II audit readiness by 70% with automated evidence collection.</span>{' '}
        <Link to={`${basePath}/trial`} className="underline hover:text-[#BAE6FD] ml-1">
          Start Free Trial &rarr;
        </Link>
      </div>

      {/* Main Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to={basePath} className="flex items-center gap-3 group">
            <SecureLayerLogo className="w-9 h-9 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[#0F172A]">
                Secure<span className="text-[#0284C7]">Layer</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400 -mt-1">
                Continuous Compliance
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-600">
            {/* Product Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setProductDropdownOpen(true)}
              onMouseLeave={() => setProductDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#0284C7] py-2 transition-colors">
                Product
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {productDropdownOpen && (
                <div className="absolute top-full -left-4 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    to={`${basePath}/features`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0284C7] flex items-center justify-center font-bold">
                      📡
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Continuous Monitoring</div>
                      <div className="text-xs text-slate-500">Real-time cloud & asset scanner</div>
                    </div>
                  </Link>

                  <Link
                    to={`${basePath}/features`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-cyan-50 text-[#06B6D4] flex items-center justify-center font-bold">
                      📑
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Automated Evidence</div>
                      <div className="text-xs text-slate-500">1-click collector for 100+ tools</div>
                    </div>
                  </Link>

                  <Link
                    to={`${basePath}/integrations`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#10B981] flex items-center justify-center font-bold">
                      ⚡
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Integrations Ecosystem</div>
                      <div className="text-xs text-slate-500">AWS, Azure, GCP, Okta, Jira</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolutionsDropdownOpen(true)}
              onMouseLeave={() => setSolutionsDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#0284C7] py-2 transition-colors">
                Solutions
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {solutionsDropdownOpen && (
                <div className="absolute top-full -left-4 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    to={`${basePath}/solutions`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100 text-[#0284C7] flex items-center justify-center font-bold text-xs">
                      SOC2
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">SOC 2 Type I & II</div>
                      <div className="text-xs text-slate-500">Fast-track audit in under 3 weeks</div>
                    </div>
                  </Link>

                  <Link
                    to={`${basePath}/solutions`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-100 text-[#7C3AED] flex items-center justify-center font-bold text-xs">
                      ISO
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">ISO 27001:2022</div>
                      <div className="text-xs text-slate-500">ISMS policy governance suite</div>
                    </div>
                  </Link>

                  <Link
                    to={`${basePath}/solutions`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#059669] flex items-center justify-center font-bold text-xs">
                      HIPAA
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">HIPAA Security Rule</div>
                      <div className="text-xs text-slate-500">Safeguard PHI & health data</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to={`${basePath}/features`}
              className={`hover:text-[#0284C7] transition-colors ${
                location.pathname.includes('/features') ? 'text-[#0284C7] font-bold' : ''
              }`}
            >
              Features
            </Link>

            <Link
              to={`${basePath}/trust`}
              className={`hover:text-[#0284C7] transition-colors ${
                location.pathname.includes('/trust') ? 'text-[#0284C7] font-bold' : ''
              }`}
            >
              Trust &amp; Security
            </Link>

            <Link
              to={`${basePath}/pricing`}
              className={`hover:text-[#0284C7] transition-colors ${
                location.pathname.includes('/pricing') ? 'text-[#0284C7] font-bold' : ''
              }`}
            >
              Pricing
            </Link>
          </nav>

          {/* Header Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to={`${basePath}/trial`}
              className="px-5 py-2.5 rounded-full text-sm font-bold border border-slate-300 text-slate-700 hover:border-[#0284C7] hover:text-[#0284C7] transition-all duration-200 shadow-sm"
            >
              Request Demo
            </Link>

            <Link
              to={`${basePath}/trial`}
              className="px-6 py-2.5 rounded-full text-sm font-bold bg-[#10B981] hover:bg-[#059669] text-white shadow-md shadow-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/35 transition-all duration-200"
            >
              Get Started for Free
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-100 bg-white px-6 py-6 space-y-4 shadow-xl animate-in slide-in-from-top-4 duration-200">
            <Link
              to={basePath}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-[#0284C7] py-2"
            >
              Home
            </Link>
            <Link
              to={`${basePath}/features`}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-[#0284C7] py-2"
            >
              Features
            </Link>
            <Link
              to={`${basePath}/solutions`}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-[#0284C7] py-2"
            >
              Solutions
            </Link>
            <Link
              to={`${basePath}/integrations`}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-[#0284C7] py-2"
            >
              Integrations
            </Link>
            <Link
              to={`${basePath}/trust`}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-[#0284C7] py-2"
            >
              Trust &amp; Security
            </Link>
            <Link
              to={`${basePath}/pricing`}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-[#0284C7] py-2"
            >
              Pricing
            </Link>

            <div className="pt-4 border-t border-slate-100 grid gap-3">
              <Link
                to={`${basePath}/trial`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full font-bold border border-slate-300 text-slate-700"
              >
                Request Demo
              </Link>
              <Link
                to={`${basePath}/trial`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full font-bold bg-[#10B981] text-white shadow-md"
              >
                Get Started for Free
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main>{children}</main>

      {/* Global Footer */}
      <footer className="bg-[#0F172A] text-slate-400 pt-20 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-slate-800">
            {/* Brand column */}
            <div className="lg:col-span-2 space-y-5">
              <Link to={basePath} className="flex items-center gap-3">
                <SecureLayerLogo className="w-8 h-8" />
                <span className="text-2xl font-black text-white tracking-tight">
                  Secure<span className="text-[#38BDF8]">Layer</span>
                </span>
              </Link>
              <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
                The continuous compliance platform that automates evidence collection, streamlines security audits like SOC 2 and ISO 27001, and builds unshakable customer trust.
              </p>
              {/* Compliance Badges in footer */}
              <div className="flex items-center gap-4 pt-2">
                <Soc2Badge className="w-11 h-11" />
                <Iso27001Badge className="w-11 h-11" />
                <HipaaBadge className="w-11 h-11" />
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-white mb-4">Product</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to={`${basePath}/features`} className="hover:text-white transition">Continuous Monitoring</Link></li>
                <li><Link to={`${basePath}/features`} className="hover:text-white transition">Automated Evidence</Link></li>
                <li><Link to={`${basePath}/features`} className="hover:text-white transition">Risk Assessment</Link></li>
                <li><Link to={`${basePath}/integrations`} className="hover:text-white transition">Ecosystem Integrations</Link></li>
                <li><Link to={`${basePath}/trust`} className="hover:text-white transition">Public Trust Center</Link></li>
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-white mb-4">Solutions</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to={`${basePath}/solutions`} className="hover:text-white transition">SOC 2 Type I &amp; II</Link></li>
                <li><Link to={`${basePath}/solutions`} className="hover:text-white transition">ISO 27001:2022</Link></li>
                <li><Link to={`${basePath}/solutions`} className="hover:text-white transition">HIPAA Compliance</Link></li>
                <li><Link to={`${basePath}/solutions`} className="hover:text-white transition">GDPR &amp; CCPA</Link></li>
                <li><Link to={`${basePath}/pricing`} className="hover:text-white transition">Startup vs Enterprise</Link></li>
              </ul>
            </div>

            {/* Company & Support */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-white mb-4">Company</h4>
              <ul className="space-y-3 text-sm">
                <li><Link to={`${basePath}/trust`} className="hover:text-white transition">Trust &amp; Security</Link></li>
                <li><Link to={`${basePath}/pricing`} className="hover:text-white transition">Pricing Plans</Link></li>
                <li><a href="#customers" className="hover:text-white transition">Customer Stories</a></li>
                <li><a href="#careers" className="hover:text-white transition">Careers (Hiring!)</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact Support</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              &copy; {new Date().getFullYear()} SecureLayer Inc. All rights reserved. Automated Compliance &amp; Trust.
            </div>
            <div className="flex items-center gap-6">
              <a href="#privacy" className="hover:text-slate-400 transition">Privacy Policy</a>
              <a href="#terms" className="hover:text-slate-400 transition">Terms of Service</a>
              <a href="#security" className="hover:text-slate-400 transition">Security Disclosure</a>
              <Link to="/saas" className="text-[#38BDF8] hover:underline">
                &larr; Back to SaaS Hub
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
