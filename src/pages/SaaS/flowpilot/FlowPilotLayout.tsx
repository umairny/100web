import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FlowPilotLogo } from './FlowPilotIcons'

interface LayoutProps {
  children: React.ReactNode
}

export function FlowPilotLayout({ children }: LayoutProps) {
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

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const basePath = location.pathname.startsWith('/flowpilot') ? '/flowpilot' : '/saas/flowpilot-crm'

  const navLinks = [
    { label: 'Features', href: `${basePath}/features`, hash: '#features' },
    { label: 'Benefits', href: `${basePath}/benefits`, hash: '#benefits' },
    { label: 'Integrations', href: `${basePath}/integrations`, hash: '#integrations' },
    { label: 'Pricing', href: `${basePath}/pricing`, hash: '#pricing' },
  ]

  const isHome = location.pathname === basePath || location.pathname === `${basePath}/`

  return (
    <div className="min-h-screen bg-[#FAFDFF] text-[#0F2942] font-sans selection:bg-[#99F6E4] selection:text-[#082F49] flex flex-col">
      {/* Top Floating Announcement Bar (Subtle & calming) */}
      <div className="bg-gradient-to-r from-[#0F766E] via-[#0E7490] to-[#0369A1] text-white text-xs py-2 px-4 text-center font-medium tracking-wide">
        <span className="bg-white/20 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mr-2">New</span>
        <span>Introducing Context-Aware Automations — Cut 5+ hours of CRM admin weekly.</span>
        <Link to={`${basePath}/features`} className="ml-2 font-bold underline hover:text-teal-200 transition">
          Explore Features →
        </Link>
      </div>

      {/* Main Header / Navigation */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md shadow-[0_4px_20px_rgba(8,47,73,0.06)] border-b border-sky-100'
            : 'bg-white/70 backdrop-blur-sm border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to={basePath} className="flex items-center gap-2 group">
            <FlowPilotLogo className="w-8 h-8 transition transform group-hover:scale-105" textClass="text-2xl" />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            {navLinks.map((item) => {
              const active = location.pathname === item.href
              return (
                <Link
                  key={item.label}
                  to={isHome ? item.hash : item.href}
                  className={`transition-colors duration-200 hover:text-[#0D9488] relative py-1 ${
                    active ? 'text-[#0D9488] font-semibold' : ''
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#0D9488] rounded-full" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to={`${basePath}/trial`}
              className="text-sm font-medium text-slate-700 hover:text-[#0D9488] transition px-3 py-2"
            >
              Sign In
            </Link>
            <Link
              to={`${basePath}/trial`}
              id="header-get-started-btn"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#0D9488] hover:bg-[#0F766E] shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
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
          <div className="md:hidden bg-white border-b border-sky-100 shadow-xl px-4 pt-3 pb-6 space-y-3">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:text-[#0D9488] hover:bg-sky-50"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-2">
              <Link
                to={`${basePath}/trial`}
                className="w-full text-center py-2.5 text-sm font-medium text-slate-700 border border-slate-200 rounded-xl hover:bg-slate-50"
              >
                Sign In
              </Link>
              <Link
                to={`${basePath}/trial`}
                className="w-full text-center py-2.5 text-sm font-bold text-white bg-[#0D9488] rounded-xl hover:bg-[#0F766E] shadow-sm"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Site Footer (Faithful to Image) */}
      <footer className="bg-white border-t border-sky-100 pt-16 pb-12 text-slate-600 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-100">
            {/* Brand column */}
            <div className="md:col-span-2 space-y-4">
              <Link to={basePath} className="inline-block">
                <FlowPilotLogo className="w-8 h-8" textClass="text-2xl" />
              </Link>
              <p className="text-slate-500 max-w-sm text-sm leading-relaxed">
                The Calmer CRM for sales teams. Turn scattered deal activity into prioritized actions,
                health signals, and smart automations without dashboard fatigue.
              </p>
              <div className="pt-2 text-xs text-slate-500 font-medium">
                Company Address, Street Address, NY 10014
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">Product</h4>
              <ul className="space-y-2.5">
                <li>
                  <Link to={`${basePath}/features`} className="hover:text-[#0D9488] transition">Features &amp; Flow</Link>
                </li>
                <li>
                  <Link to={`${basePath}/benefits`} className="hover:text-[#0D9488] transition">Benefits &amp; ROI</Link>
                </li>
                <li>
                  <Link to={`${basePath}/integrations`} className="hover:text-[#0D9488] transition">Integrations</Link>
                </li>
                <li>
                  <Link to={`${basePath}/pricing`} className="hover:text-[#0D9488] transition">Pricing Plans</Link>
                </li>
                <li>
                  <Link to={`${basePath}/trial`} className="hover:text-[#0D9488] transition">Interactive Sandbox</Link>
                </li>
              </ul>
            </div>

            {/* Legal & Company */}
            <div>
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-4">Company &amp; Legal</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="#about" className="hover:text-[#0D9488] transition">About Us</a>
                </li>
                <li>
                  <a href="#blog" className="hover:text-[#0D9488] transition">Blog</a>
                </li>
                <li>
                  <a href="#terms" className="hover:text-[#0D9488] transition">Terms of Service</a>
                </li>
                <li>
                  <a href="#privacy" className="hover:text-[#0D9488] transition">Privacy Policy</a>
                </li>
                <li>
                  <a href="#security" className="hover:text-[#0D9488] transition">SOC-2 Security</a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div className="flex items-center gap-6">
              <Link to={`${basePath}`} className="hover:text-slate-900 transition font-medium">About Us</Link>
              <Link to={`${basePath}`} className="hover:text-slate-900 transition font-medium">Blog</Link>
              <Link to={`${basePath}`} className="hover:text-slate-900 transition font-medium">Terms of Service</Link>
              <Link to={`${basePath}`} className="hover:text-slate-900 transition font-medium">Privacy Policy</Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-slate-600">
              {/* LinkedIn */}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-[#0D9488] transition p-1" aria-label="LinkedIn">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#0D9488] transition p-1" aria-label="X">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* Facebook / Github */}
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-[#0D9488] transition p-1" aria-label="Facebook">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
              <span>© Copyright 2026</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
