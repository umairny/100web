import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Search, Heart, ChevronDown, X, LayoutGrid, ArrowLeft } from 'lucide-react'
import { categories } from '../data/websites'
import { prefetchRoute } from '../utils/routePrefetch'
import { useFavorites } from '../utils/favorites'

export interface NavbarProps {
  mode?: 'default' | 'floating'
  onOpenSearch?: () => void
  onOpenShortlist?: () => void
}

const primaryLinks = [
  { label: 'Home', href: '/' },
  { label: 'Collections', href: '/#collections' },
  { label: 'Featured', href: '/#featured' },
  { label: 'About', href: '/#about-project' },
]

const categoryLinks = categories.map((c) => ({
  label: c.name,
  href: c.href ?? '/#collections',
  description: c.description,
  icon: c.icon,
  isLive: Boolean(c.href),
}))

function isActiveLink(pathname: string, hash: string, href: string) {
  const [linkPath, linkHash] = href.split('#')
  const path = linkPath || '/'

  if (path === '/') {
    if (pathname !== '/') return false
    return linkHash ? hash === `#${linkHash}` : !hash
  }

  const matchesPath = pathname === path || pathname.startsWith(`${path}/`)
  if (!matchesPath) return false
  return linkHash ? hash === `#${linkHash}` : true
}

export function Navbar({ onOpenSearch, onOpenShortlist }: NavbarProps) {
  const { count: shortlistCount } = useFavorites()
  const { pathname, hash } = useLocation()
  const isHomePage = pathname === '/'

  // Top navbar state (used on Home page)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isCategoryOpen, setIsCategoryOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string>('/')

  // Floating bottom-left hub state (used on Other pages)
  const [isBottomMenuOpen, setIsBottomMenuOpen] = useState(false)

  const liveCategoryCount = categoryLinks.filter((c) => c.isLive).length
  const isCategoryActive = categoryLinks.some((c) => isActiveLink(pathname, hash, c.href))

  // Close menus on route/hash changes
  useEffect(() => {
    setIsMobileMenuOpen(false)
    setIsCategoryOpen(false)
    setIsBottomMenuOpen(false)
  }, [pathname, hash])

  // Close floating bottom menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsBottomMenuOpen(false)
        setIsMobileMenuOpen(false)
        setIsCategoryOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Scroll spy to dynamically track active section as user scrolls on Home page
  useEffect(() => {
    if (!isHomePage) {
      setActiveSection('')
      return
    }

    const sections = [
      { id: 'about-project', href: '/#about-project' },
      { id: 'featured', href: '/#featured' },
      { id: 'collections', href: '/#collections' },
    ]

    const handleScroll = () => {
      const scrollPos = window.scrollY + 180

      // If reached bottom of page, highlight About
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120) {
        setActiveSection('/#about-project')
        return
      }

      // When near the top of the home page, highlight Home
      if (window.scrollY < 380) {
        setActiveSection('/')
        return
      }

      for (const sec of sections) {
        const el = document.getElementById(sec.id)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sec.href)
            return
          }
        }
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isHomePage])

  const isLinkActive = (href: string) => {
    if (isHomePage) {
      if (activeSection) {
        return activeSection === href
      }
      return href === '/'
    }
    return isActiveLink(pathname, hash, href)
  }

  // Smooth scroll handler for anchor links
  useEffect(() => {
    if (!hash) {
      if (pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
      return
    }

    const targetId = decodeURIComponent(hash.slice(1))
    const timer = window.setTimeout(() => {
      const target = document.getElementById(targetId)
      if (target) {
        const top = target.getBoundingClientRect().top + window.scrollY - 72
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }, 60)

    return () => window.clearTimeout(timer)
  }, [pathname, hash])

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // ── ON OTHER PAGES: RENDER SMALL FLOATING BUTTON ON BOTTOM-LEFT ─────────────
  if (!isHomePage) {
    return (
      <div className="fixed bottom-5 left-5 z-[80] pointer-events-auto">
        {/* Toggle Button */}
        <button
          type="button"
          onClick={() => setIsBottomMenuOpen((prev) => !prev)}
          aria-expanded={isBottomMenuOpen}
          aria-label={isBottomMenuOpen ? 'Close 100Web Menu' : 'Open 100Web Menu'}
          className={`flex items-center gap-2.5 rounded-full border px-3.5 py-2 text-xs font-bold shadow-2xl backdrop-blur-xl transition-all duration-300 hover:scale-105 active:scale-95 ${
            isBottomMenuOpen
              ? 'border-[#1e8b79] bg-[#07130e] text-white ring-2 ring-[#1e8b79]/40'
              : 'border-white/20 bg-[#07130e]/95 text-white shadow-black/50 hover:border-white/35'
          }`}
        >
          <div className="grid h-6 w-6 place-items-center rounded-lg bg-[#1e8b79] text-[11px] font-black text-white shadow-xs">
            100
          </div>
          <span className="font-extrabold tracking-tight">100Web</span>

          {shortlistCount > 0 && (
            <span className="flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-black text-white">
              {shortlistCount}
            </span>
          )}

          <span className="ml-0.5 text-white/60">
            {isBottomMenuOpen ? (
              <X className="h-3.5 w-3.5" />
            ) : (
              <LayoutGrid className="h-3.5 w-3.5 text-[#f0c76a]" />
            )}
          </span>
        </button>

        {/* Floating Popup Card */}
        {isBottomMenuOpen && (
          <>
            {/* Click-away Backdrop */}
            <div
              className="fixed inset-0 z-[75] bg-black/50 backdrop-blur-xs"
              onClick={() => setIsBottomMenuOpen(false)}
            />

            {/* Menu Panel */}
            <div className="fixed bottom-20 left-5 z-[80] max-h-[calc(100vh-6.5rem)] w-[min(26rem,calc(100vw-2.5rem))] overflow-y-auto rounded-3xl border border-white/15 bg-[#07130e]/98 p-5 shadow-2xl shadow-black/80 backdrop-blur-2xl text-white animate-in fade-in slide-in-from-bottom-3 duration-200">
              {/* Header */}
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <Link
                  to="/"
                  onClick={() => setIsBottomMenuOpen(false)}
                  className="flex items-center gap-2.5 group"
                >
                  <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#1e8b79] text-xs font-black text-white transition group-hover:scale-105">
                    100
                  </div>
                  <div>
                    <span className="block text-sm font-black text-white leading-none">100Web</span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-[#f0c76a]">by Umair</span>
                  </div>
                </Link>

                <button
                  type="button"
                  onClick={() => setIsBottomMenuOpen(false)}
                  className="rounded-full p-1.5 text-white/50 hover:bg-white/10 hover:text-white transition"
                  aria-label="Close menu"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Primary Links */}
              <div className="mt-3.5 grid grid-cols-2 gap-1.5">
                {primaryLinks.map((link) => (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsBottomMenuOpen(false)}
                    className="flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.04] px-3 py-2 text-xs font-bold text-white/80 transition hover:border-white/15 hover:bg-white/[0.08] hover:text-white"
                  >
                    <span>{link.label}</span>
                    <span className="text-[10px] text-white/40">→</span>
                  </Link>
                ))}
              </div>

              {/* Categories Section */}
              <div className="mt-4 border-t border-white/10 pt-3.5">
                <div className="mb-2 flex items-center justify-between px-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f0c76a]">
                    All Categories
                  </span>
                  <span className="text-[10px] font-bold text-white/40">
                    {liveCategoryCount} Live
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-1.5 max-h-48 overflow-y-auto pr-1">
                  {categoryLinks.map((cat) => (
                    <Link
                      key={cat.label}
                      to={cat.href}
                      onClick={() => setIsBottomMenuOpen(false)}
                      className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.02] p-2 text-xs font-semibold text-white/75 transition hover:border-[#1e8b79]/40 hover:bg-[#1e8b79]/15 hover:text-white"
                    >
                      <span className="text-sm">{cat.icon}</span>
                      <span className="truncate">{cat.label}</span>
                      {cat.isLive && (
                        <span className="ml-auto h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                      )}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="mt-4 border-t border-white/10 pt-3.5 flex flex-col gap-2">
                <div className="grid grid-cols-2 gap-2">
                  {onOpenSearch && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsBottomMenuOpen(false)
                        onOpenSearch()
                      }}
                      className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] py-2 text-xs font-bold text-white/80 transition hover:bg-white/10 hover:text-white"
                    >
                      <Search className="h-3.5 w-3.5 text-white/60" />
                      <span>Search</span>
                    </button>
                  )}

                  {onOpenShortlist && (
                    <button
                      type="button"
                      onClick={() => {
                        setIsBottomMenuOpen(false)
                        onOpenShortlist()
                      }}
                      className="flex items-center justify-center gap-2 rounded-xl border border-rose-400/20 bg-rose-500/10 py-2 text-xs font-bold text-rose-300 transition hover:bg-rose-500/20"
                    >
                      <Heart className="h-3.5 w-3.5 fill-rose-500 text-rose-500" />
                      <span>Saved ({shortlistCount})</span>
                    </button>
                  )}
                </div>

                <Link
                  to="/"
                  onClick={() => setIsBottomMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#f0c76a] py-2.5 text-xs font-black text-[#07130e] shadow-md transition hover:bg-white active:scale-95"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  <span>Return to 100Web Home</span>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    )
  }

  // ── ON HOME PAGE: RENDER FULL STICKY TOP NAVBAR WITH SCROLL SPY ────────────
  return (
    <>
      <nav
        aria-label="Main Navigation"
        className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#07130e]/95 backdrop-blur-xl shadow-lg shadow-black/20"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          {/* Brand Logo */}
          <Link
            to="/"
            onClick={() => {
              setIsMobileMenuOpen(false)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="group flex items-center gap-3 shrink-0"
          >
            <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#1e8b79] text-sm font-black text-white shadow-md shadow-[#1e8b79]/20 transition-transform duration-300 ease-out group-hover:scale-105 group-hover:bg-[#23a28d]">
              <span className="leading-none">100</span>
            </div>
            <div>
              <span className="block text-base font-black leading-none tracking-tight text-white transition-colors duration-200 group-hover:text-[#f0c76a]">
                100Web
              </span>
              <span className="mt-0.5 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#f0c76a]/80">
                by Umair
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.05] p-1 backdrop-blur-md">
            {primaryLinks.map((link) => {
              const active = isLinkActive(link.href)
              return (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`relative rounded-full px-4 py-1.5 text-sm font-bold transition-all duration-300 ${
                    active
                      ? 'bg-white/15 text-white shadow-xs'
                      : 'text-white/70 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-0.5 rounded-full bg-[#f0c76a] animate-in fade-in duration-200" />
                  )}
                </Link>
              )
            })}

            {/* Categories Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsCategoryOpen(true)}
              onMouseLeave={() => setIsCategoryOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsCategoryOpen((prev) => !prev)}
                aria-expanded={isCategoryOpen}
                aria-haspopup="true"
                className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-bold transition-all duration-200 focus:outline-none ${
                  isCategoryActive || isCategoryOpen
                    ? 'bg-white/15 text-white shadow-xs'
                    : 'text-white/70 hover:bg-white/10 hover:text-white'
                }`}
              >
                Categories
                <span className="rounded-full bg-[#1e8b79]/30 px-1.5 py-0.5 text-[9px] font-black text-[#6ee7b7]">
                  {liveCategoryCount}
                </span>
                <ChevronDown
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    isCategoryOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Mega-menu panel */}
              {isCategoryOpen && (
                <div className="absolute right-0 top-full pt-2 w-[38rem] origin-top-right">
                  <div className="rounded-2xl border border-white/12 bg-[#0a1712]/98 p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl">
                    <div className="mb-3 flex items-center justify-between border-b border-white/8 pb-2.5">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f0c76a]">
                          Website Collections
                        </p>
                        <p className="text-xs text-white/50">
                          {liveCategoryCount} live categories · {categoryLinks.length - liveCategoryCount} in progress
                        </p>
                      </div>
                      <Link
                        to="/#collections"
                        onClick={() => setIsCategoryOpen(false)}
                        className="rounded-full bg-[#1e8b79] px-3.5 py-1 text-xs font-bold text-white transition hover:bg-[#23a28d]"
                      >
                        View all →
                      </Link>
                    </div>

                    <div className="grid grid-cols-2 gap-1.5">
                      {categoryLinks.map((link) => {
                        const active = isActiveLink(pathname, hash, link.href)
                        return (
                          <Link
                            key={link.label}
                            to={link.href}
                            onClick={() => setIsCategoryOpen(false)}
                            onMouseEnter={() => prefetchRoute(link.href)}
                            className={`group flex items-center gap-2.5 rounded-xl border p-2.5 transition-all duration-200 ${
                              active
                                ? 'border-[#1e8b79]/60 bg-[#1e8b79]/20 text-white'
                                : 'border-white/5 bg-white/[0.03] text-white/80 hover:border-white/15 hover:bg-white/[0.08] hover:text-white'
                            }`}
                          >
                            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white/10 text-base transition-transform group-hover:scale-110">
                              {link.icon}
                            </span>
                            <div className="min-w-0 flex-1">
                              <span className="block truncate text-xs font-black">
                                {link.label}
                              </span>
                              <span className="block truncate text-[10px] text-white/45">
                                {link.description}
                              </span>
                            </div>
                            {link.isLive && (
                              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                            )}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Desktop Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2">
            {/* Shortlist trigger */}
            {onOpenShortlist && (
              <button
                type="button"
                onClick={onOpenShortlist}
                title="View Shortlist & Compare"
                className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-1.5 text-xs font-bold text-white/85 transition hover:border-rose-400/40 hover:bg-rose-500/10 hover:text-white"
              >
                <Heart
                  className={`h-3.5 w-3.5 ${
                    shortlistCount > 0 ? 'fill-rose-500 text-rose-500' : 'text-white/60'
                  }`}
                />
                <span>Saved</span>
                {shortlistCount > 0 && (
                  <span className="rounded-full bg-rose-500 px-1.5 py-0.2 text-[10px] font-black text-white">
                    {shortlistCount}
                  </span>
                )}
              </button>
            )}

            {/* Search trigger */}
            {onOpenSearch && (
              <button
                type="button"
                onClick={onOpenSearch}
                title="Search 100 websites (Ctrl+K)"
                className="flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.06] px-3.5 py-1.5 text-xs font-bold text-white/85 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
              >
                <Search className="h-3.5 w-3.5 text-white/60" />
                <span>Search</span>
                <kbd className="rounded border border-white/15 bg-white/10 px-1.5 py-0.2 font-mono text-[9px] text-white/60">
                  ⌘K
                </kbd>
              </button>
            )}

            {/* Browse All CTA */}
            <Link
              to="/#collections"
              className="rounded-full bg-[#f0c76a] px-4 py-1.5 text-xs font-black text-[#07130e] shadow-md shadow-[#f0c76a]/20 transition-all duration-200 hover:bg-white hover:shadow-white/20 active:scale-95"
            >
              Browse All
            </Link>

            {/* GitHub */}
            <a
              href="https://github.com/umairny"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View on GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 text-white/70 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
              </svg>
            </a>
          </div>

          {/* Mobile Right Icons */}
          <div className="flex items-center gap-1.5 lg:hidden">
            {onOpenShortlist && (
              <button
                type="button"
                onClick={onOpenShortlist}
                aria-label={`Shortlist (${shortlistCount})`}
                className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] text-white"
              >
                <Heart
                  className={`h-4 w-4 ${
                    shortlistCount > 0 ? 'fill-rose-500 text-rose-500' : 'text-white/70'
                  }`}
                />
                {shortlistCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-rose-500 text-[9px] font-black text-white">
                    {shortlistCount}
                  </span>
                )}
              </button>
            )}

            {onOpenSearch && (
              <button
                type="button"
                onClick={onOpenSearch}
                aria-label="Search"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/12 bg-white/[0.06] text-white/70"
              >
                <Search className="h-4 w-4" />
              </button>
            )}

            {/* Hamburger Toggle */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-xl border border-white/12 bg-white/[0.06] text-white"
            >
              <span
                className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'translate-y-1.5 rotate-45' : ''
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                  isMobileMenuOpen ? '-translate-y-1.5 -rotate-45' : ''
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile Slide-down Drawer */}
        {isMobileMenuOpen && (
          <div className="border-t border-white/10 bg-[#07130e]/98 backdrop-blur-2xl lg:hidden">
            <div className="max-h-[calc(100vh-4rem)] overflow-y-auto px-4 py-5 space-y-4">
              {/* Primary links */}
              <div className="grid gap-1">
                {primaryLinks.map((link) => {
                  const active = isLinkActive(link.href)
                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center rounded-xl px-4 py-2.5 text-sm font-bold transition ${
                        active
                          ? 'bg-[#1e8b79] text-white'
                          : 'text-white/80 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>

              {/* Categories Grid */}
              <div className="border-t border-white/10 pt-4">
                <div className="mb-2.5 flex items-center justify-between px-1">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f0c76a]">
                    Categories
                  </span>
                  <span className="rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-bold text-white/60">
                    {liveCategoryCount} live
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1.5">
                  {categoryLinks.map((link) => {
                    const active = isActiveLink(pathname, hash, link.href)
                    return (
                      <Link
                        key={link.label}
                        to={link.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-2 rounded-xl border p-2 text-xs font-bold transition ${
                          active
                            ? 'border-[#1e8b79] bg-[#1e8b79]/20 text-white'
                            : 'border-white/5 bg-white/[0.03] text-white/70 hover:bg-white/[0.08] hover:text-white'
                        }`}
                      >
                        <span className="text-sm">{link.icon}</span>
                        <span className="truncate">{link.label}</span>
                      </Link>
                    )
                  })}
                </div>
              </div>

              {/* Mobile CTAs */}
              <div className="border-t border-white/10 pt-4 grid gap-2">
                <Link
                  to="/#collections"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-xl bg-[#f0c76a] py-3 text-center text-sm font-black text-[#07130e] transition active:scale-95"
                >
                  Browse All 100 Websites
                </Link>
                {onOpenShortlist && (
                  <button
                    type="button"
                    onClick={() => {
                      setIsMobileMenuOpen(false)
                      onOpenShortlist()
                    }}
                    className="flex items-center justify-center gap-2 rounded-xl border border-rose-400/30 bg-rose-500/10 py-2.5 text-xs font-bold text-rose-300"
                  >
                    <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
                    <span>View Shortlist ({shortlistCount} saved)</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Mobile backdrop */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  )
}
