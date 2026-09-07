import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MetricNestLogo } from './MetricNestIcons'

interface LayoutProps {
  children: React.ReactNode
}

export function MetricNestLayout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const basePath = location.pathname.startsWith('/metricnest') ? '/metricnest' : '/saas/metricnest-analytics'

  const navLinks = [
    { label: 'Product', href: `${basePath}/features`, hash: '#features' },
    { label: 'Solutions', href: `${basePath}/solutions`, hash: '#solutions' },
    { label: 'Integrations', href: `${basePath}/integrations`, hash: '#integrations' },
    { label: 'Pricing', href: `${basePath}/pricing`, hash: '#pricing' },
    { label: 'Resources', href: `${basePath}/demo`, hash: '#resources' },
  ]

  const isHome = location.pathname === basePath || location.pathname === `${basePath}/`

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#10B981] selection:text-white flex flex-col">
      {/* Top Navigation Bar in Dark Midnight Navy */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 bg-[#0B132B]/95 backdrop-blur-md border-b ${
          scrolled ? 'border-slate-800 shadow-xl' : 'border-slate-800/60'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link to={basePath} className="flex items-center gap-2 group">
            <MetricNestLogo className="w-8 h-8 transition transform group-hover:scale-105" textClass="text-xl" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-slate-300">
            {navLinks.map((item) => {
              const active = location.pathname === item.href
              return (
                <Link
                  key={item.label}
                  to={isHome ? item.hash : item.href}
                  className={`transition-colors duration-200 hover:text-[#10B981] flex items-center gap-1 ${
                    active ? 'text-[#10B981] font-semibold' : ''
                  }`}
                >
                  {item.label}
                  {item.label !== 'Integrations' && item.label !== 'Pricing' && (
                    <span className="text-[10px] text-slate-400">▾</span>
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to={`${basePath}/demo`}
              className="text-sm font-semibold text-white px-4 py-2 rounded-lg border border-slate-700 hover:border-slate-500 hover:bg-slate-800/50 transition"
            >
              Request Demo
            </Link>
            <Link
              to={`${basePath}/pricing`}
              id="header-start-free-trial-btn"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg text-sm font-bold text-white bg-[#10B981] hover:bg-[#059669] shadow-md shadow-emerald-900/30 transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-300 hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle Navigation Menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0B132B] border-b border-slate-800 shadow-2xl px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-200 hover:text-[#10B981] hover:bg-slate-800/60"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-800 flex flex-col gap-2">
              <Link
                to={`${basePath}/demo`}
                className="w-full text-center py-2.5 text-sm font-semibold text-white border border-slate-700 rounded-lg hover:bg-slate-800"
              >
                Request Demo
              </Link>
              <Link
                to={`${basePath}/pricing`}
                className="w-full text-center py-2.5 text-sm font-bold text-white bg-[#10B981] rounded-lg hover:bg-[#059669] shadow-md"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Page Content */}
      <main className="flex-1">{children}</main>

      {/* Dark Navy Footer (Faithful to Image) */}
      <footer className="bg-[#0B132B] text-slate-400 text-sm pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
            {/* Brand column */}
            <div className="md:col-span-2 space-y-4">
              <Link to={basePath} className="inline-block">
                <MetricNestLogo className="w-8 h-8" textClass="text-2xl" />
              </Link>
              <p className="text-slate-400 max-w-sm text-sm leading-relaxed">
                MetricNest works seamlessly with the tools you already love to track user journeys, optimize funnels, and boost retention.
              </p>
              <div className="pt-2">
                <Link
                  to={`${basePath}/pricing`}
                  className="inline-flex items-center px-4 py-2 rounded-lg bg-[#10B981] hover:bg-[#059669] text-white text-xs font-bold transition shadow-sm"
                >
                  Start My Free 14-Day Trial
                </Link>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">Product</h4>
              <ul className="space-y-2.5 text-xs">
                <li><Link to={`${basePath}/features`} className="hover:text-[#10B981] transition">User Journey Mapping</Link></li>
                <li><Link to={`${basePath}/features`} className="hover:text-[#10B981] transition">Funnel Optimization</Link></li>
                <li><Link to={`${basePath}/features`} className="hover:text-[#10B981] transition">Retention Cohorts</Link></li>
                <li><Link to={`${basePath}/features`} className="hover:text-[#10B981] transition">A/B Testing Insights</Link></li>
                <li><Link to={`${basePath}/integrations`} className="hover:text-[#10B981] transition">Integrations</Link></li>
                <li><Link to={`${basePath}/pricing`} className="hover:text-[#10B981] transition">Pricing Plans</Link></li>
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">Solutions</h4>
              <ul className="space-y-2.5 text-xs">
                <li><Link to={`${basePath}/solutions`} className="hover:text-[#10B981] transition">For Product Managers</Link></li>
                <li><Link to={`${basePath}/solutions`} className="hover:text-[#10B981] transition">For Growth Teams</Link></li>
                <li><Link to={`${basePath}/solutions`} className="hover:text-[#10B981] transition">For Enterprise Apps</Link></li>
                <li><Link to={`${basePath}/demo`} className="hover:text-[#10B981] transition">Interactive Sandbox</Link></li>
              </ul>
            </div>

            {/* Company & Resources */}
            <div>
              <h4 className="font-bold text-white text-xs uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2.5 text-xs">
                <li><Link to={`${basePath}`} className="hover:text-[#10B981] transition">About Us</Link></li>
                <li><Link to={`${basePath}`} className="hover:text-[#10B981] transition">Blog &amp; Guides</Link></li>
                <li><Link to={`${basePath}`} className="hover:text-[#10B981] transition">Careers</Link></li>
                <li><Link to={`${basePath}/demo`} className="hover:text-[#10B981] transition">Contact Us</Link></li>
                <li><Link to={`${basePath}`} className="hover:text-[#10B981] transition">Privacy &amp; Security</Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <p>© 2026 MetricNest Analytics. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <span className="hover:text-slate-300 transition cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-300 transition cursor-pointer">Terms of Service</span>
              <span className="hover:text-slate-300 transition cursor-pointer">Security / SOC-2</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
