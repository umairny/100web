import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { SupportDockLogo } from './SupportDockIcons'

interface LayoutProps {
  children: React.ReactNode
}

export function SupportDockLayout({ children }: LayoutProps) {
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

  const basePath = location.pathname.startsWith('/supportdock') ? '/supportdock' : '/saas/supportdock-ai'

  const navLinks = [
    { label: 'Features', href: `${basePath}/features`, hash: '#features' },
    { label: 'Pricing', href: `${basePath}/pricing`, hash: '#pricing' },
    { label: 'Integrations', href: `${basePath}/integrations`, hash: '#integrations' },
    { label: 'Blog', href: `${basePath}/blog`, hash: '#blog' },
  ]

  const isHome = location.pathname === basePath || location.pathname === `${basePath}/`

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans selection:bg-[#10B981] selection:text-white flex flex-col">
      {/* Top Navbar */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-200'
            : 'bg-white/90 backdrop-blur-sm border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand */}
          <Link to={basePath} className="flex items-center gap-2 group">
            <SupportDockLogo className="w-8 h-8 transition transform group-hover:scale-105" textClass="text-2xl" />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold text-slate-700">
            {navLinks.map((item) => {
              const active = location.pathname === item.href
              return (
                <Link
                  key={item.label}
                  to={isHome ? item.hash : item.href}
                  className={`transition-colors duration-200 hover:text-[#10B981] relative py-1 ${
                    active ? 'text-[#10B981] font-bold' : ''
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#10B981] rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Action CTAs matching Screenshot */}
          <div className="hidden md:flex items-center gap-5">
            <Link
              to={`${basePath}/trial`}
              className="text-sm font-bold text-slate-700 hover:text-[#10B981] transition"
            >
              Log in
            </Link>
            <Link
              to={`${basePath}/trial`}
              id="header-start-free-trial-btn"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-wider text-white bg-[#061E2D] hover:bg-[#0F2942] shadow-md transition transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Start Free Trial
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
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
          <div className="md:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block px-3 py-2 rounded-lg text-base font-semibold text-slate-800 hover:text-[#10B981] hover:bg-slate-50"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <Link
                to={`${basePath}/trial`}
                className="w-full text-center py-2.5 text-sm font-bold text-slate-700 border border-slate-200 rounded-full hover:bg-slate-50"
              >
                Log in
              </Link>
              <Link
                to={`${basePath}/trial`}
                className="w-full text-center py-2.5 text-sm font-black uppercase tracking-wider text-white bg-[#061E2D] rounded-full hover:bg-[#0F2942] shadow-md"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer (Faithful to Frame 3 in Screenshot) */}
      <footer className="bg-white border-t border-slate-200 text-slate-600 text-sm pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-100">
            {/* Brand column */}
            <div className="col-span-2 space-y-3">
              <Link to={basePath} className="inline-block">
                <SupportDockLogo className="w-8 h-8" textClass="text-2xl" />
              </Link>
              <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
                SupportDock AI solves issues faster, reduces costs, and delivers exceptional service 24/7 across all your channels.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">Product</h4>
              <ul className="space-y-2 text-xs">
                <li><Link to={`${basePath}/features`} className="hover:text-[#10B981] transition">About</Link></li>
                <li><Link to={`${basePath}/features`} className="hover:text-[#10B981] transition">Businesses</Link></li>
                <li><Link to={`${basePath}/blog`} className="hover:text-[#10B981] transition">Press</Link></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">Company</h4>
              <ul className="space-y-2 text-xs">
                <li><Link to={`${basePath}/trial`} className="hover:text-[#10B981] transition">Careers</Link></li>
                <li><Link to={`${basePath}/pricing`} className="hover:text-[#10B981] transition">Pricing</Link></li>
                <li><Link to={`${basePath}/features`} className="hover:text-[#10B981] transition">Templates</Link></li>
              </ul>
            </div>

            {/* Resources & Follow */}
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">Resources</h4>
              <ul className="space-y-2 text-xs">
                <li><Link to={`${basePath}/blog`} className="hover:text-[#10B981] transition">Blog</Link></li>
                <li><Link to={`${basePath}/features`} className="hover:text-[#10B981] transition">Guides</Link></li>
                <li><Link to={`${basePath}/trial`} className="hover:text-[#10B981] transition">Contact Us</Link></li>
              </ul>

              <div className="mt-6">
                <p className="font-bold text-slate-900 text-xs mb-2">Follow us:</p>
                <div className="flex items-center gap-3 text-slate-600">
                  <span className="cursor-pointer hover:text-[#10B981] transition text-sm">𝕏</span>
                  <span className="cursor-pointer hover:text-[#10B981] transition text-sm">in</span>
                  <span className="cursor-pointer hover:text-[#10B981] transition text-sm">📺</span>
                  <span className="cursor-pointer hover:text-[#10B981] transition text-sm">📷</span>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <p>© 2026 SupportDock AI. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-slate-600 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-600 cursor-pointer">Terms of Service</span>
              <span className="hover:text-slate-600 cursor-pointer">Security</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
