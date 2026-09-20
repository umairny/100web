import { Link } from 'react-router-dom'
import { ArrowUp, Heart, Sparkles, ArrowRight } from 'lucide-react'
import { allWebsites, categories } from '../data/websites'
import { useFavorites } from '../utils/favorites'

const projectLinks = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/#collections' },
  { label: 'Featured Work', href: '/#featured' },
  { label: 'About Project', href: '/#about-project' },
]

function getCategoryPath(category: string) {
  return category.toLowerCase().replace(/\s+/g, '-')
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { count: shortlistCount } = useFavorites()
  const liveDesignCount = allWebsites.filter(
    (website) => website.status === 'completed' || website.status === 'live',
  ).length
  const liveCategories = categories.filter((category) => category.href)
  
  // Pick high-converting highlight templates
  const featuredDesigns = [
    allWebsites.find((w) => w.slug === 'ocean-plate' || w.slug === 'ember-steakhouse'),
    allWebsites.find((w) => w.slug === 'skyline-realty' || w.slug === 'harbor-key'),
    allWebsites.find((w) => w.slug === 'vitalform' || w.slug === 'reset-recovery'),
    allWebsites.find((w) => w.slug === 'pulseheart' || w.slug === 'willow-health'),
    allWebsites.find((w) => w.slug === 'flowpilot' || w.slug === 'metricnest'),
  ].filter(Boolean) as typeof allWebsites

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative mt-20 border-t border-white/10 bg-[#040a07] text-white">
      {/* Ambient background lighting */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-80 w-full max-w-6xl bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(30,139,121,0.18),transparent)]" />
        <div className="absolute right-10 bottom-20 h-64 w-64 rounded-full bg-[#f0c76a]/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Top Highlight Banner: Client Collaboration & Mission */}
        <div className="relative mb-16 overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-br from-[#091913] via-[#0c221a] to-[#06120c] p-8 sm:p-12 shadow-2xl shadow-black/40">
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_80%_30%,rgba(240,199,106,0.08),transparent_70%)]" />

          <div className="relative grid gap-10 lg:grid-cols-[1.3fr_0.9fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f0c76a]/25 bg-[#f0c76a]/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-[#f0c76a]">
                <Sparkles className="h-3.5 w-3.5" />
                Crafted for Discerning Clients
              </div>

              <h2 className="mt-5 text-2xl font-black leading-tight text-white sm:text-4xl">
                Ready to elevate your brand with a production-grade web system?
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                Whether you need to adapt one of our 100 live architectures for your company or commission a bespoke
                digital flagship from scratch, get direct collaboration with Umair Ahmad.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/umairny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#f0c76a] px-6 py-3 text-xs font-black text-[#040a07] shadow-lg shadow-[#f0c76a]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white active:scale-95"
                >
                  <span>Inquire / Collaborate</span>
                  <ArrowRight className="h-4 w-4" />
                </a>

                <Link
                  to="/#collections"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-xs font-bold text-white transition hover:border-white/30 hover:bg-white/10"
                >
                  Browse 100 Designs
                </Link>
              </div>
            </div>

            {/* Live Metrics Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { label: 'Live Systems', val: `${liveDesignCount}+`, sub: 'Real runnable apps', color: '#6ee7b7' },
                { label: 'Industries', val: `${categories.length}`, sub: 'Distinct verticals', color: '#93c5fd' },
                { label: 'Target Goal', val: '100', sub: 'Production suites', color: '#f0c76a' },
                { label: 'Tech Stack', val: 'Pure TS', sub: 'React 19 + Tailwind', color: '#fda4af' },
              ].map(({ label, val, sub, color }) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/8 bg-white/[0.03] p-4 sm:p-5 backdrop-blur-md transition hover:border-white/15 hover:bg-white/[0.06]"
                >
                  <p className="text-2xl font-black sm:text-3xl" style={{ color }}>
                    {val}
                  </p>
                  <p className="mt-1 text-xs font-bold text-white/90">{label}</p>
                  <p className="text-[10px] text-white/40">{sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Footer Links Columns */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_0.8fr]">
          {/* Col 1: Brand & Philosophy */}
          <div className="space-y-4">
            <Link
              to="/"
              onClick={scrollToTop}
              className="group inline-flex items-center gap-3"
            >
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#1e8b79] text-sm font-black text-white shadow-lg shadow-[#1e8b79]/20 transition group-hover:bg-[#23a28d]">
                100
              </div>
              <div>
                <span className="block text-base font-black leading-none text-white transition group-hover:text-[#f0c76a]">
                  100Web
                </span>
                <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#f0c76a]/80">
                  by Umair Ahmad
                </span>
              </div>
            </Link>

            <p className="text-xs leading-6 text-white/55 max-w-sm">
              An ambitious showcase of 100 production-ready business website systems. Engineered with bespoke UI
              aesthetics, responsive typography, and purpose-built conversion architecture.
            </p>

            <div className="pt-2">
              <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/40 block mb-2">
                Engineered With
              </span>
              <div className="flex flex-wrap gap-1.5">
                {['React 19', 'TypeScript', 'Tailwind CSS', 'Vite', 'Lucide'].map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/8 bg-white/[0.03] px-2.5 py-1 text-[10px] font-bold text-white/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Live Collections */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#f0c76a]">
                Live Collections
              </h3>
              <span className="text-[10px] font-bold text-white/40">
                {liveCategories.length} Categories
              </span>
            </div>

            <div className="grid grid-cols-2 gap-2 text-xs">
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.href || '/#collections'}
                  className="group flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-2 text-white/70 transition hover:border-[#1e8b79]/40 hover:bg-[#1e8b79]/10 hover:text-white"
                >
                  <span className="text-sm">{category.icon}</span>
                  <span className="truncate font-semibold">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Col 3: Notable Templates */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#f0c76a] mb-4">
              Featured Concepts
            </h3>
            <ul className="space-y-2.5 text-xs">
              {featuredDesigns.map((site) => (
                <li key={site.id}>
                  <Link
                    to={`/${getCategoryPath(site.category)}/${site.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] px-3 py-2 text-white/70 transition hover:border-white/15 hover:bg-white/[0.05] hover:text-white"
                  >
                    <div>
                      <span className="block font-bold text-white/85 group-hover:text-white">
                        {site.title}
                      </span>
                      <span className="text-[10px] text-white/40">
                        {site.category} · {site.style}
                      </span>
                    </div>
                    <span className="text-white/30 group-hover:text-[#6ee7b7] transition">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Navigation & Connect */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.2em] text-[#f0c76a] mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 text-xs">
              {projectLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="block font-bold text-white/60 transition hover:text-white hover:translate-x-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              {shortlistCount > 0 && (
                <li className="pt-2">
                  <div className="flex items-center gap-2 text-xs font-bold text-rose-300">
                    <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
                    <span>{shortlistCount} saved designs</span>
                  </div>
                </li>
              )}
              <li className="pt-3">
                <a
                  href="https://github.com/umairny"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-white/80 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                >
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  <span>GitHub @umairny</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/45 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>All 10 Category Systems Operational · 100Web</span>
          </div>

          <p>© {currentYear} Umair Ahmad. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-bold text-white/70 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            <span>Back to Top</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  )
}
