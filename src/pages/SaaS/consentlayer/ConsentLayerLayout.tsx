import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ConsentLayerLogo } from './ConsentLayerIcons'

interface ConsentLayerLayoutProps {
  children: React.ReactNode
}

export function ConsentLayerLayout({ children }: ConsentLayerLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productDropdownOpen, setProductDropdownOpen] = useState(false)
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false)
  const location = useLocation()

  const isShortPath = location.pathname.startsWith('/consentlayer')
  const basePath = isShortPath ? '/consentlayer' : '/saas/consentlayer-privacy'

  return (
    <div className="min-h-screen bg-[#FDFEFE] text-[#0F172A] font-sans antialiased selection:bg-[#10B981] selection:text-white">
      {/* Top Main Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to={basePath} className="flex items-center gap-3 group">
            <ConsentLayerLogo className="w-9 h-9 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight text-[#0F172A]">
                ConsentLayer <span className="text-[#0284C7] font-bold text-sm">Privacy</span>
              </span>
              <span className="text-[9px] uppercase tracking-widest font-bold text-slate-400 -mt-1">
                Universal Consent Platform
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
              <button className="flex items-center gap-1 hover:text-[#059669] py-2 transition-colors">
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
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center font-bold">
                      🍪
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Cookie Banners &amp; CMP</div>
                      <div className="text-xs text-slate-500">Multi-region custom consent prompts</div>
                    </div>
                  </Link>

                  <Link
                    to={`${basePath}/product`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-50 text-[#0284C7] flex items-center justify-center font-bold">
                      ⚙
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Preference Center</div>
                      <div className="text-xs text-slate-500">Universal granular privacy controls</div>
                    </div>
                  </Link>

                  <Link
                    to={`${basePath}/product`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-teal-50 text-[#0D9488] flex items-center justify-center font-bold">
                      📜
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Policy Automation</div>
                      <div className="text-xs text-slate-500">Auto-updating legal terms &amp; notices</div>
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
              <button className="flex items-center gap-1 hover:text-[#059669] py-2 transition-colors">
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
                    <div className="w-8 h-8 rounded-lg bg-emerald-50 text-[#059669] flex items-center justify-center font-bold">
                      🎨
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Banner Customizer</div>
                      <div className="text-xs text-slate-500">Live preview &amp; theme toggles</div>
                    </div>
                  </Link>

                  <Link
                    to={`${basePath}/features`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-purple-50 text-[#7C3AED] flex items-center justify-center font-bold">
                      🛡
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Immutable Audit Trails</div>
                      <div className="text-xs text-slate-500">Cryptographic consent logs</div>
                    </div>
                  </Link>

                  <Link
                    to={`${basePath}/features`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition flex items-start gap-3"
                  >
                    <div className="w-8 h-8 rounded-lg bg-amber-50 text-[#D97706] flex items-center justify-center font-bold">
                      🌍
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">Geo-IP Detection</div>
                      <div className="text-xs text-slate-500">GDPR, CCPA, LGPD compliance</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to={`${basePath}/integrations`}
              className={`hover:text-[#059669] transition-colors ${
                location.pathname.includes('/integrations') ? 'text-[#059669] font-bold' : ''
              }`}
            >
              Integrations
            </Link>

            <Link
              to={`${basePath}/pricing`}
              className={`hover:text-[#059669] transition-colors ${
                location.pathname.includes('/pricing') ? 'text-[#059669] font-bold' : ''
              }`}
            >
              Pricing
            </Link>
          </nav>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to={`${basePath}/trial`}
              className="px-5 py-2.5 rounded-full text-sm font-bold border border-slate-300 text-slate-700 hover:border-[#10B981] hover:text-[#059669] transition shadow-sm"
            >
              Request Demo
            </Link>

            <Link
              to={`${basePath}/trial`}
              className="px-6 py-2.5 rounded-full text-sm font-bold bg-[#10B981] hover:bg-[#059669] text-white shadow-md shadow-emerald-500/25 hover:shadow-lg hover:shadow-emerald-500/35 transition-all duration-200 transform hover:-translate-y-0.5"
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
              className="block font-bold text-slate-800 hover:text-[#059669] py-2"
            >
              Home
            </Link>
            <Link
              to={`${basePath}/product`}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-[#059669] py-2"
            >
              Product
            </Link>
            <Link
              to={`${basePath}/features`}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-[#059669] py-2"
            >
              Features
            </Link>
            <Link
              to={`${basePath}/integrations`}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-[#059669] py-2"
            >
              Integrations
            </Link>
            <Link
              to={`${basePath}/pricing`}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-bold text-slate-800 hover:text-[#059669] py-2"
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
                Start Free Trial
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main>{children}</main>

      {/* Global Footer matching Frame 3 */}
      <footer className="bg-white border-t border-slate-200 pt-16 pb-12 text-slate-500 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-100">
            {/* Brand column */}
            <div className="col-span-2 space-y-4">
              <Link to={basePath} className="flex items-center gap-3">
                <ConsentLayerLogo className="w-8 h-8" />
                <span className="text-xl font-black text-[#0F172A] tracking-tight">
                  ConsentLayer <span className="text-[#0284C7] font-bold text-sm">Privacy</span>
                </span>
              </Link>
              <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
                Streamline compliance, manage policies, and ensure transparency across your data ecosystem. Powered by cryptographically signed consent records.
              </p>
              <div className="text-xs text-slate-400">
                &copy; {new Date().getFullYear()} ConsentLayer Privacy Inc. All rights reserved.
              </div>
            </div>

            {/* Product */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-[#0F172A] mb-4">Product</h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li><Link to={`${basePath}/product`} className="hover:text-[#059669] transition">Privacy Banners</Link></li>
                <li><Link to={`${basePath}/features`} className="hover:text-[#059669] transition">Templates</Link></li>
                <li><Link to={`${basePath}/product`} className="hover:text-[#059669] transition">Preference Center</Link></li>
                <li><Link to={`${basePath}/features`} className="hover:text-[#059669] transition">Audit Trails</Link></li>
              </ul>
            </div>

            {/* Company & Resources */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-[#0F172A] mb-4">Company</h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li><Link to={`${basePath}/trial`} className="hover:text-[#059669] transition">Contact</Link></li>
                <li><Link to={`${basePath}/pricing`} className="hover:text-[#059669] transition">Pricing</Link></li>
                <li><Link to={`${basePath}/integrations`} className="hover:text-[#059669] transition">Resources</Link></li>
                <li><a href="#blog" className="hover:text-[#059669] transition">Blog</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest text-[#0F172A] mb-4">Legal</h4>
              <ul className="space-y-2 text-xs text-slate-600">
                <li><a href="#privacy" className="hover:text-[#059669] transition">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-[#059669] transition">Terms of Service</a></li>
                <li><a href="#dpa" className="hover:text-[#059669] transition">Data Processing (DPA)</a></li>
                <li><Link to="/saas" className="text-[#0284C7] font-bold hover:underline">&larr; SaaS Hub</Link></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              GDPR (EU 2016/679) • CCPA/CPRA (California) • LGPD (Brazil) • Clean scrolling effects.
            </div>
            <div className="flex items-center gap-4">
              <a href="#twitter" className="hover:text-slate-600">Twitter</a>
              <a href="#linkedin" className="hover:text-slate-600">LinkedIn</a>
              <a href="#github" className="hover:text-slate-600">GitHub</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ConsentLayerLayout

