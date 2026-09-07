import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { InvoicePilotLogo } from "./InvoicePilotIcons";

interface InvoicePilotLayoutProps {
  children: React.ReactNode;
}

export function InvoicePilotLayout({ children }: InvoicePilotLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isCurrent = (path: string) => {
    return (
      location.pathname === path ||
      location.pathname === `/saas/invoicepilot${path}` ||
      (path === "" && (location.pathname === "/saas/invoicepilot" || location.pathname === "/invoicepilot"))
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans antialiased selection:bg-emerald-500 selection:text-white flex flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Brand Logo */}
          <Link to="/saas/invoicepilot" className="flex items-center gap-2.5 group">
            <InvoicePilotLogo className="w-8 h-8 transition-transform group-hover:scale-105" />
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              Invoice<span className="text-emerald-600">Pilot</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <Link
              to="/saas/invoicepilot/features"
              className={`hover:text-emerald-600 transition-colors ${
                isCurrent("/features") ? "text-emerald-600 font-bold" : ""
              }`}
            >
              Features
            </Link>
            <Link
              to="/saas/invoicepilot/pricing"
              className={`hover:text-emerald-600 transition-colors ${
                isCurrent("/pricing") ? "text-emerald-600 font-bold" : ""
              }`}
            >
              Pricing
            </Link>
            <Link
              to="/saas/invoicepilot/integrations"
              className={`hover:text-emerald-600 transition-colors ${
                isCurrent("/integrations") ? "text-emerald-600 font-bold" : ""
              }`}
            >
              Integrations
            </Link>
            <Link
              to="/saas/invoicepilot/blog"
              className={`hover:text-emerald-600 transition-colors ${
                isCurrent("/blog") ? "text-emerald-600 font-bold" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              to="/saas/invoicepilot/trial"
              className="hover:text-slate-900 transition-colors"
            >
              Log in
            </Link>
          </nav>

          {/* Start Free Trial CTA (Green button) */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/saas/invoicepilot/trial"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#10B981] hover:bg-[#059669] text-white text-xs font-black uppercase tracking-wider shadow-sm shadow-emerald-500/20 transition-all hover:shadow-md hover:shadow-emerald-500/30 active:scale-[0.98]"
            >
              START FREE TRIAL
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle navigation"
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

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 py-5 space-y-3">
            <Link
              to="/saas/invoicepilot"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-sm py-1"
            >
              Home
            </Link>
            <Link
              to="/saas/invoicepilot/features"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-sm py-1"
            >
              Features &amp; Simulator
            </Link>
            <Link
              to="/saas/invoicepilot/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-sm py-1"
            >
              Pricing
            </Link>
            <Link
              to="/saas/invoicepilot/integrations"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-sm py-1"
            >
              Integrations (25+)
            </Link>
            <Link
              to="/saas/invoicepilot/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-sm py-1"
            >
              Blog &amp; Case Studies
            </Link>
            <div className="pt-2">
              <Link
                to="/saas/invoicepilot/trial"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#10B981] hover:bg-[#059669] text-white text-xs font-black uppercase tracking-wider shadow-sm"
              >
                START FREE TRIAL
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-[#F8FAFC] border-t border-slate-200/80 pt-16 pb-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-slate-200">
            {/* Brand column */}
            <div className="col-span-2 space-y-4">
              <Link to="/saas/invoicepilot" className="flex items-center gap-2">
                <InvoicePilotLogo className="w-7 h-7" />
                <span className="font-extrabold text-slate-900 tracking-tight text-base">
                  InvoicePilot
                </span>
              </Link>
              <p className="text-xs text-slate-500 leading-relaxed max-w-sm">
                Automated subscription billing, smart dunning retries, and unified global payment gateway reconciliation for modern B2B SaaS.
              </p>
              <div className="text-xs text-slate-500">
                PCI-DSS Level 1 Compliant Service Provider
              </div>
            </div>

            {/* Company */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Company</h4>
              <ul className="space-y-2 text-xs text-slate-500 font-medium">
                <li><a href="#about" className="hover:text-emerald-600 transition-colors">About Us</a></li>
                <li><a href="#careers" className="hover:text-emerald-600 transition-colors">Careers</a></li>
                <li><a href="#contact" className="hover:text-emerald-600 transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Product */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Product</h4>
              <ul className="space-y-2 text-xs text-slate-500 font-medium">
                <li><Link to="/saas/invoicepilot/features" className="hover:text-emerald-600 transition-colors">Features</Link></li>
                <li><Link to="/saas/invoicepilot/pricing" className="hover:text-emerald-600 transition-colors">Pricing</Link></li>
                <li><Link to="/saas/invoicepilot/integrations" className="hover:text-emerald-600 transition-colors">Integrations</Link></li>
                <li><Link to="/saas/invoicepilot/trial" className="hover:text-emerald-600 transition-colors">Free Trial</Link></li>
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">Legal</h4>
              <ul className="space-y-2 text-xs text-slate-500 font-medium">
                <li><a href="#privacy" className="hover:text-emerald-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#terms" className="hover:text-emerald-600 transition-colors">Terms of Service</a></li>
                <li><a href="#security" className="hover:text-emerald-600 transition-colors">Security</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              &copy; {new Date().getFullYear()} InvoicePilot Inc. All rights reserved.
            </div>
            <div className="flex items-center gap-4">
              <a href="#twitter" aria-label="Twitter" className="hover:text-slate-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#github" aria-label="GitHub" className="hover:text-slate-600 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
