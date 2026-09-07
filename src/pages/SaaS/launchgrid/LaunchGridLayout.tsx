import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LaunchGridLogo } from "./LaunchGridIcons";

interface LaunchGridLayoutProps {
  children: React.ReactNode;
}

export function LaunchGridLayout({ children }: LaunchGridLayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productDropdownOpen, setProductDropdownOpen] = useState(false);
  const location = useLocation();

  const isCurrent = (path: string) => {
    return (
      location.pathname === path ||
      location.pathname === `/saas/launchgrid-pm${path}` ||
      (path === "" && (location.pathname === "/saas/launchgrid-pm" || location.pathname === "/launchgrid"))
    );
  };

  return (
    <div className="min-h-screen bg-[#FAFCFF] text-[#0F172A] font-sans antialiased selection:bg-blue-500 selection:text-white flex flex-col">
      {/* Top Navigation */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/saas/launchgrid-pm"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <LaunchGridLogo className="w-8 h-8 transition-transform group-hover:scale-105" />
            <span className="font-extrabold text-xl tracking-tight text-slate-900">
              LaunchGrid <span className="text-blue-600 font-bold text-sm bg-blue-50 px-1.5 py-0.5 rounded border border-blue-100">PM</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            {/* Product Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setProductDropdownOpen(!productDropdownOpen)}
                onMouseEnter={() => setProductDropdownOpen(true)}
                className="flex items-center gap-1 hover:text-blue-600 transition-colors py-2 focus:outline-none"
              >
                <span>Product</span>
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${
                    productDropdownOpen ? "rotate-180" : ""
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

              {productDropdownOpen && (
                <div
                  onMouseLeave={() => setProductDropdownOpen(false)}
                  className="absolute left-0 top-full mt-1 w-64 rounded-xl bg-white border border-slate-100 shadow-xl py-2 z-50 animate-in fade-in slide-in-from-top-2"
                >
                  <Link
                    to="/saas/launchgrid-pm/features"
                    className="block px-4 py-2.5 hover:bg-slate-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-900 text-sm">Sprint &amp; Kanban Boards</div>
                    <div className="text-xs text-slate-500">Visualize workflows &amp; backlogs</div>
                  </Link>
                  <Link
                    to="/saas/launchgrid-pm/demo"
                    className="block px-4 py-2.5 hover:bg-slate-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-900 text-sm">Interactive Product Tour</div>
                    <div className="text-xs text-slate-500">Watch full platform walkthrough</div>
                  </Link>
                  <Link
                    to="/saas/launchgrid-pm/trial"
                    className="block px-4 py-2.5 hover:bg-slate-50 transition-colors"
                  >
                    <div className="font-semibold text-slate-900 text-sm">14-Day Free Sandbox</div>
                    <div className="text-xs text-slate-500">Instant test workspace, no card</div>
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/saas/launchgrid-pm/features"
              className={`hover:text-blue-600 transition-colors ${
                isCurrent("/features") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Features
            </Link>
            <Link
              to="/saas/launchgrid-pm/integrations"
              className={`hover:text-blue-600 transition-colors ${
                isCurrent("/integrations") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Integrations
            </Link>
            <Link
              to="/saas/launchgrid-pm/pricing"
              className={`hover:text-blue-600 transition-colors ${
                isCurrent("/pricing") ? "text-blue-600 font-semibold" : ""
              }`}
            >
              Pricing
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/saas/launchgrid-pm/demo"
              className="text-sm font-semibold text-slate-600 hover:text-blue-600 transition-colors"
            >
              Watch Demo
            </Link>
            <Link
              to="/saas/launchgrid-pm/trial"
              className="inline-flex items-center justify-center px-4.5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm shadow-blue-500/20 transition-all hover:shadow-md hover:shadow-blue-500/30 active:scale-[0.98]"
            >
              Get Started Free
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle menu"
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

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 py-5 space-y-3">
            <Link
              to="/saas/launchgrid-pm"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-sm py-1.5"
            >
              Home
            </Link>
            <Link
              to="/saas/launchgrid-pm/features"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-sm py-1.5"
            >
              Features &amp; Simulator
            </Link>
            <Link
              to="/saas/launchgrid-pm/integrations"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-sm py-1.5"
            >
              Integrations (50+)
            </Link>
            <Link
              to="/saas/launchgrid-pm/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-sm py-1.5"
            >
              Pricing
            </Link>
            <Link
              to="/saas/launchgrid-pm/demo"
              onClick={() => setMobileMenuOpen(false)}
              className="block font-semibold text-slate-800 text-sm py-1.5"
            >
              Watch Demo
            </Link>
            <div className="pt-2">
              <Link
                to="/saas/launchgrid-pm/trial"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold shadow-sm"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* Page Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-100 py-10 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            {/* Left: Brand & Links */}
            <div className="flex flex-wrap items-center gap-6">
              <Link to="/saas/launchgrid-pm" className="flex items-center gap-2">
                <LaunchGridLogo className="w-6 h-6" />
                <span className="font-extrabold text-slate-900 tracking-tight text-sm">
                  LaunchGrid PM
                </span>
              </Link>

              <div className="flex items-center gap-5 text-sm text-slate-500 font-medium">
                <Link to="/saas/launchgrid-pm/features" className="hover:text-blue-600 transition-colors">
                  Features
                </Link>
                <Link to="/saas/launchgrid-pm/integrations" className="hover:text-blue-600 transition-colors">
                  Integrations
                </Link>
                <Link to="/saas/launchgrid-pm/pricing" className="hover:text-blue-600 transition-colors">
                  Pricing
                </Link>
                <Link to="/saas/launchgrid-pm/demo" className="hover:text-blue-600 transition-colors">
                  Product Tour
                </Link>
              </div>
            </div>

            {/* Right: Social icons & copyright */}
            <div className="flex items-center gap-5 text-slate-400">
              <span className="text-xs text-slate-400">
                &copy; {new Date().getFullYear()} LaunchGrid PM Inc. All rights reserved.
              </span>
              <div className="flex items-center gap-3">
                {/* X icon */}
                <a href="#twitter" aria-label="Twitter / X" className="hover:text-slate-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Globe */}
                <a href="#web" aria-label="Website" className="hover:text-slate-700 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </a>
                {/* YouTube */}
                <a href="#youtube" aria-label="YouTube" className="hover:text-slate-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a href="#instagram" aria-label="Instagram" className="hover:text-slate-700 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
