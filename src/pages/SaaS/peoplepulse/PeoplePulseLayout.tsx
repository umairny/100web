import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PeoplePulseLogo } from './PeoplePulseIcons'

interface PeoplePulseLayoutProps {
  children: React.ReactNode
}

export function PeoplePulseLayout({ children }: PeoplePulseLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productDropdownOpen, setProductDropdownOpen] = useState(false)
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false)
  const location = useLocation()

  const isShortPath = location.pathname.startsWith('/peoplepulse')
  const basePath = isShortPath ? '/peoplepulse' : '/saas/peoplepulse-hr'

  return (
    <div className="min-h-screen bg-[#FAFAFC] text-[#0F172A] font-sans antialiased selection:bg-[#2563EB] selection:text-white">
      {/* Top Main Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to={basePath} className="flex items-center gap-3 group">
            <PeoplePulseLogo className="w-9 h-9 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[#0F172A]">
                PeoplePulse <span className="text-[#0D9488]">HR</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400 -mt-1">
                Modern Workplace Platform
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
              <button className="flex items-center gap-1 hover:text-[#2563EB] py-2 transition-colors">
                Product
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {productDropdownOpen && (
                <div className="absolute top-full -left-4 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    to={`${basePath}/product`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold">
                      👥
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Core HR &amp; Records</div>
                      <div className="text-xs text-slate-500">Central employee directory &amp; docs</div>
                    </div>
                  </Link>

                  <Link
                    to={`${basePath}/product`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0D9488] flex items-center justify-center font-bold">
                      ✈
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Time Off &amp; Attendance</div>
                      <div className="text-xs text-slate-500">Automated PTO requests &amp; balances</div>
                    </div>
                  </Link>

                  <Link
                    to={`${basePath}/product`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center font-bold">
                      ★
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Performance &amp; Feedback</div>
                      <div className="text-xs text-slate-500">360 reviews &amp; continuous coaching</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            {/* Features Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setFeaturesDropdownOpen(true)}
              onMouseLeave={() => setFeaturesDropdownOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-[#2563EB] py-2 transition-colors">
                Features
                <svg className="w-4 h-4 text-slate-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              {featuresDropdownOpen && (
                <div className="absolute top-full -left-4 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-3 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link
                    to={`${basePath}/features`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#2563EB] flex items-center justify-center font-bold">
                      🚀
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Modern Onboarding</div>
                      <div className="text-xs text-slate-500">Day 1 readiness with digital forms</div>
                    </div>
                  </Link>

                  <Link
                    to={`${basePath}/features`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#7C3AED] flex items-center justify-center font-bold">
                      📱
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Employee Self-Service</div>
                      <div className="text-xs text-slate-500">Pay stubs, org charts, and perks</div>
                    </div>
                  </Link>

                  <Link
                    to={`${basePath}/features`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#D97706] flex items-center justify-center font-bold">
                      📊
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Smart Workforce Reports</div>
                      <div className="text-xs text-slate-500">Headcount growth &amp; retention stats</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to={`${basePath}/integrations`}
              className={`hover:text-[#2563EB] transition-colors ${
                location.pathname.includes('/integrations') ? 'text-[#2563EB] font-bold' : ''
              }`}
            >
              Integrations
            </Link>

            <Link
              to={`${basePath}/pricing`}
              className={`hover:text-[#2563EB] transition-colors ${
                location.pathname.includes('/pricing') ? 'text-[#2563EB] font-bold' : ''
              }`}
            >
              Pricing
            </Link>
          </nav>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to={`${basePath}/trial`}
              className="px-6 py-2.5 rounded-full text-sm font-bold bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 transition-all duration-200 transform hover:-translate-y-0.5"
            >
              Start Free Trial
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
              className="block font-bold text-slate-800 hover:text-[#2563EB] py-2"
            >
              Home
            </Link>
            <Link
              to={`${basePath}/product`}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-[#2563EB] py-2"
            >
              Product
            </Link>
            <Link
              to={`${basePath}/features`}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-[#2563EB] py-2"
            >
              Features
            </Link>
            <Link
              to={`${basePath}/integrations`}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-[#2563EB] py-2"
            >
              Integrations
            </Link>
            <Link
              to={`${basePath}/pricing`}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-[#2563EB] py-2"
            >
              Pricing
            </Link>

            <div className="pt-4 border-t border-slate-100">
              <Link
                to={`${basePath}/trial`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full block text-center py-3 rounded-full font-bold bg-[#2563EB] text-white shadow-md"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main>{children}</main>

      {/* Global Footer (matching Frame 3) */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-12 border-b border-slate-100">
            {/* Brand column */}
            <div className="md:col-span-2 space-y-4">
              <Link to={basePath} className="flex items-center gap-3">
                <PeoplePulseLogo className="w-8 h-8" />
                <span className="text-xl font-black text-[#0F172A] tracking-tight">
                  PeoplePulse <span className="text-[#0D9488]">HR</span>
                </span>
              </Link>
              <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
                Centralize operations, empower employees, and grow with a modern HR platform. Designed for fast-growing distributed teams.
              </p>
              <div className="text-xs text-slate-400">
                &copy; {new Date().getFullYear()} PeoplePulse HR Inc. All rights reserved.
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-[#0F172A] mb-4">Contact</h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li>548 Market St, Suite 8200</li>
                <li>San Francisco, CA 94104</li>
                <li>support@peoplepulsehr.com</li>
                <li>sales@peoplepulsehr.com</li>
              </ul>
            </div>

            {/* Links */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-[#0F172A] mb-4">Links</h4>
              <ul className="space-y-2.5 text-xs text-slate-600">
                <li><Link to={`${basePath}/product`} className="hover:text-[#2563EB] transition">Product Overview</Link></li>
                <li><Link to={`${basePath}/features`} className="hover:text-[#2563EB] transition">Features &amp; Modules</Link></li>
                <li><Link to={`${basePath}/integrations`} className="hover:text-[#2563EB] transition">Integrations Ecosystem</Link></li>
                <li><Link to={`${basePath}/pricing`} className="hover:text-[#2563EB] transition">Pricing &amp; Plans</Link></li>
                <li><a href="#terms" className="hover:text-[#2563EB] transition">Terms &amp; Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar with Social Icons */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <div className="flex items-center gap-6 text-slate-400">
              <Link to="/saas" className="text-[#2563EB] font-bold hover:underline">
                &larr; Back to SaaS Hub
              </Link>
              <span>SOC 2 Type II Certified</span>
              <span>GDPR Ready</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-slate-400">
              <a href="#linkedin" className="hover:text-[#2563EB] transition text-sm">LinkedIn</a>
              <a href="#twitter" className="hover:text-[#2563EB] transition text-sm">X / Twitter</a>
              <a href="#youtube" className="hover:text-[#2563EB] transition text-sm">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
