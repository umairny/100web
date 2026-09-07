import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RouteStackLogo } from './RouteStackIcons'
import { 
  ChevronDown, 
  Menu, 
  X, 
  MapPin, 
  Navigation, 
  ShieldCheck, 
  Truck, 
  Zap, 
  Sliders, 
  Layers, 
  ArrowRight,
  Sparkles
} from 'lucide-react'

interface RouteStackLayoutProps {
  children: React.ReactNode
}

export function RouteStackLayout({ children }: RouteStackLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productDropdownOpen, setProductDropdownOpen] = useState(false)
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false)
  const location = useLocation()

  const isShortPath = location.pathname.startsWith('/routestack')
  const basePath = isShortPath ? '/routestack' : '/saas/routestack-logistics'

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans antialiased selection:bg-[#0284C7] selection:text-white flex flex-col">
      {/* Top Main Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to={basePath} className="flex items-center gap-3 group">
            <RouteStackLogo className="w-9 h-9 transition-transform group-hover:scale-105" />
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-slate-900 flex items-center gap-1">
                RouteStack
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold text-sky-700 -mt-1">
                Smart Logistics
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
              <button 
                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                className="flex items-center gap-1.5 hover:text-sky-700 transition-colors py-2"
              >
                Product <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${productDropdownOpen ? 'rotate-180 text-sky-700' : ''}`} />
              </button>

              {productDropdownOpen && (
                <div className="absolute top-full left-0 w-80 bg-white rounded-2xl shadow-2xl border border-slate-100 p-4 grid gap-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                  <Link 
                    to={`${basePath}/product`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-sky-50 text-sky-700">
                      <Truck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Dynamic Dispatch Engine</div>
                      <div className="text-xs text-slate-500 mt-0.5">Automated time-window vehicle routing</div>
                    </div>
                  </Link>

                  <Link 
                    to={`${basePath}/product`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                      <Navigation className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Driver Mobile GPS App</div>
                      <div className="text-xs text-slate-500 mt-0.5">Turn-by-turn nav and instant ePOD capture</div>
                    </div>
                  </Link>

                  <Link 
                    to={`${basePath}/product`}
                    className="p-3 rounded-xl hover:bg-slate-50 transition-colors flex items-start gap-3"
                  >
                    <div className="p-2 rounded-lg bg-amber-50 text-amber-700">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-sm">Fleet Telematics</div>
                      <div className="text-xs text-slate-500 mt-0.5">Live fuel, speed, and geofence tracking</div>
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
              <Link 
                to={`${basePath}/features`}
                className="flex items-center gap-1.5 hover:text-sky-700 transition-colors py-2"
              >
                Features <ChevronDown className="w-4 h-4" />
              </Link>
            </div>

            <Link to={`${basePath}/integrations`} className="hover:text-sky-700 transition-colors">
              Integrations
            </Link>

            <Link to={`${basePath}/pricing`} className="hover:text-sky-700 transition-colors">
              Pricing
            </Link>

            <Link to={`${basePath}/features`} className="hover:text-sky-700 transition-colors">
              Blog
            </Link>
          </nav>

          {/* Right Action Button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to={`${basePath}/trial`}
              className="px-6 py-2.5 rounded-full bg-[#0284C7] hover:bg-[#0369A1] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-sky-600/20 hover:shadow-sky-600/30 active:scale-95"
            >
              START FREE TRIAL
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-sky-700 focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
            <Link 
              to={basePath}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 hover:text-sky-700"
            >
              Home
            </Link>
            <Link 
              to={`${basePath}/features`}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 hover:text-sky-700"
            >
              Features & Route Optimizer
            </Link>
            <Link 
              to={`${basePath}/product`}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 hover:text-sky-700"
            >
              Product Architecture
            </Link>
            <Link 
              to={`${basePath}/integrations`}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 hover:text-sky-700"
            >
              Integrations (100+ Connectors)
            </Link>
            <Link 
              to={`${basePath}/pricing`}
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 hover:text-sky-700"
            >
              Pricing & Fleet Plans
            </Link>
            <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
              <Link
                to={`${basePath}/trial`}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3 rounded-full bg-[#0284C7] text-white font-bold text-xs uppercase tracking-wider shadow-md"
              >
                START FREE TRIAL
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Body */}
      <main className="flex-1">
        {children}
      </main>

      {/* Global Dark Midnight Footer */}
      <footer className="bg-[#0B1528] text-white pt-16 pb-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link to={basePath} className="flex items-center gap-3">
                <RouteStackLogo className="w-8 h-8" />
                <span className="text-xl font-extrabold tracking-tight text-white">
                  RouteStack
                </span>
              </Link>
              <p className="mt-4 text-xs text-slate-400 max-w-sm leading-relaxed">
                Streamline fleet coordination, automate dispatches, and empower drivers with AI-driven route optimization and digital proof of delivery.
              </p>
              <div className="mt-6 flex items-center gap-3 text-slate-400">
                <a href="#twitter" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:text-sky-400 hover:bg-slate-700 transition-colors">
                  𝕏
                </a>
                <a href="#linkedin" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:text-sky-400 hover:bg-slate-700 transition-colors font-bold text-xs">
                  in
                </a>
                <a href="#github" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:text-sky-400 hover:bg-slate-700 transition-colors font-bold text-xs">
                  git
                </a>
                <a href="#instagram" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center hover:text-sky-400 hover:bg-slate-700 transition-colors font-bold text-xs">
                  ig
                </a>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">
                Product
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><Link to={`${basePath}/features`} className="hover:text-white transition-colors">Route Optimizer</Link></li>
                <li><Link to={`${basePath}/product`} className="hover:text-white transition-colors">Driver Mobile App</Link></li>
                <li><Link to={`${basePath}/features`} className="hover:text-white transition-colors">Digital ePOD</Link></li>
                <li><Link to={`${basePath}/product`} className="hover:text-white transition-colors">Fleet Telematics</Link></li>
                <li><Link to={`${basePath}/pricing`} className="hover:text-white transition-colors">Pricing Plans</Link></li>
              </ul>
            </div>

            {/* Integrations & Links */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">
                Integrations
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><Link to={`${basePath}/integrations`} className="hover:text-white transition-colors">Shopify & WooCommerce</Link></li>
                <li><Link to={`${basePath}/integrations`} className="hover:text-white transition-colors">SAP S/4HANA</Link></li>
                <li><Link to={`${basePath}/integrations`} className="hover:text-white transition-colors">Oracle NetSuite</Link></li>
                <li><Link to={`${basePath}/integrations`} className="hover:text-white transition-colors">Sage ERP</Link></li>
                <li><Link to={`${basePath}/integrations`} className="hover:text-white transition-colors">Salesforce Logistics</Link></li>
              </ul>
            </div>

            {/* Company & Support */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-300 mb-4">
                Support & Legal
              </h4>
              <ul className="space-y-2.5 text-xs text-slate-400">
                <li><Link to={`${basePath}/trial`} className="hover:text-white transition-colors">Free 14-Day Trial</Link></li>
                <li><a href="#docs" className="hover:text-white transition-colors">API Documentation</a></li>
                <li><a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#security" className="hover:text-white transition-colors">Security & Compliance</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Dispatch Team</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
            <div>
              RouteStack Logistics • Smart Fleet Coordination &amp; Multi-Stop Route Optimization
            </div>
            <div>
              © 2026 RouteStack, Inc. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default RouteStackLayout
