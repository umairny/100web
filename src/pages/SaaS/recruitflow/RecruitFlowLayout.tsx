import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RecruitFlowLogo } from "./RecruitFlowIcons";

interface RecruitFlowLayoutProps {
  children: React.ReactNode;
}

export function RecruitFlowLayout({ children }: RecruitFlowLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productMenuOpen, setProductMenuOpen] = useState(false);
  const location = useLocation();

  const isCurrent = (path: string) => {
    return (
      location.pathname === path ||
      location.pathname === `/saas/recruitflow${path}` ||
      (path === "" && (location.pathname === "/saas/recruitflow" || location.pathname === "/recruitflow"))
    );
  };

  return (
    <div className="min-h-screen bg-white text-[#0F172A] font-sans antialiased selection:bg-blue-600 selection:text-white flex flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo */}
          <Link to="/saas/recruitflow" className="flex items-center gap-2.5 group">
            <RecruitFlowLogo className="w-8 h-8 transition-transform group-hover:scale-105" />
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              Recruit<span className="text-blue-600">Flow</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <Link
              to="/saas/recruitflow"
              className={`hover:text-blue-600 transition-colors ${
                isCurrent("") ? "text-blue-600 font-bold" : ""
              }`}
            >
              Headline
            </Link>

            {/* Product Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setProductMenuOpen(!productMenuOpen)}
                onMouseEnter={() => setProductMenuOpen(true)}
                className="flex items-center gap-1 hover:text-blue-600 transition-colors py-2 focus:outline-none"
              >
                <span>Product</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    productMenuOpen ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {productMenuOpen && (
                <div
                  onMouseLeave={() => setProductMenuOpen(false)}
                  className="absolute left-0 top-full mt-1 w-60 rounded-xl bg-white border border-slate-100 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2"
                >
                  <Link
                    to="/saas/recruitflow/features"
                    className="block px-4 py-2 hover:bg-slate-50 text-xs font-semibold text-slate-800"
                  >
                    Candidate Pipeline Simulator
                  </Link>
                  <Link
                    to="/saas/recruitflow/integrations"
                    className="block px-4 py-2 hover:bg-slate-50 text-xs font-semibold text-slate-800"
                  >
                    Job Boards &amp; Integrations
                  </Link>
                  <Link
                    to="/saas/recruitflow/pricing"
                    className="block px-4 py-2 hover:bg-slate-50 text-xs font-semibold text-slate-800"
                  >
                    Plans &amp; Pricing
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/saas/recruitflow/careers"
              className={`hover:text-blue-600 transition-colors ${
                isCurrent("/careers") ? "text-blue-600 font-bold" : ""
              }`}
            >
              Careers
            </Link>

            <Link
              to="/saas/recruitflow/trial"
              className="hover:text-slate-900 transition-colors"
            >
              Log in
            </Link>
          </nav>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/saas/recruitflow/features"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-black uppercase tracking-wider shadow-sm shadow-blue-500/20 transition-all hover:shadow-md hover:shadow-blue-500/30 active:scale-[0.98]"
            >
              REQUEST A DEMO
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
              to="/saas/recruitflow"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-sm py-1"
            >
              Headline
            </Link>
            <Link
              to="/saas/recruitflow/features"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-sm py-1"
            >
              Pipeline Simulator
            </Link>
            <Link
              to="/saas/recruitflow/integrations"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-sm py-1"
            >
              Integrations (25+)
            </Link>
            <Link
              to="/saas/recruitflow/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-sm py-1"
            >
              Pricing
            </Link>
            <Link
              to="/saas/recruitflow/careers"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-sm py-1"
            >
              Careers Portal
            </Link>
            <div className="pt-2">
              <Link
                to="/saas/recruitflow/features"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-black uppercase tracking-wider shadow-sm"
              >
                REQUEST A DEMO
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer matching reference image */}
      <footer className="bg-[#F8FAFC] border-t border-slate-200 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left Brand */}
            <div className="flex items-center gap-3">
              <RecruitFlowLogo className="w-6 h-6" />
              <div>
                <span className="font-extrabold text-slate-900 text-sm tracking-tight">RecruitFlow</span>
                <p className="text-[11px] text-slate-400">Copyright 2026 RecruitFlow. Your company.</p>
              </div>
            </div>

            {/* Middle Links */}
            <div className="flex items-center gap-5 text-xs text-slate-500 font-semibold">
              <Link to="/saas/recruitflow" className="hover:text-blue-600 transition-colors">About</Link>
              <Link to="/saas/recruitflow/features" className="hover:text-blue-600 transition-colors">Product</Link>
              <Link to="/saas/recruitflow/careers" className="hover:text-blue-600 transition-colors">Careers</Link>
              <a href="#terms" className="hover:text-blue-600 transition-colors">Terms</a>
              <a href="#privacy" className="hover:text-blue-600 transition-colors">Privacy</a>
            </div>

            {/* Right Socials */}
            <div className="flex items-center gap-3 text-slate-400">
              <a href="#facebook" aria-label="Facebook" className="hover:text-slate-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#twitter" aria-label="Twitter" className="hover:text-slate-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#instagram" aria-label="Instagram" className="hover:text-slate-700 transition-colors">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
