import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { categories } from '../data/websites'

const primaryLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about-project' },
  { label: 'Roadmap', href: '/#categories' },
]

const categoryLinks = categories.map((category) => ({
  label: category.name,
  href: category.href ?? '/#categories',
  description: category.href ? 'Live collection' : 'Planned category',
  isLive: Boolean(category.href),
}))

interface NavbarProps {
  mode?: 'default' | 'floating'
}

function getInitials(label: string) {
  return label
    .split(/[\s-]+/)
    .map((word) => word[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

function isActiveHref(pathname: string, currentHash: string, href: string) {
  const [rawPath, rawHash] = href.split('#')
  const linkPath = rawPath || '/'
  const linkHash = rawHash ? `#${rawHash}` : ''

  if (linkPath === '/') {
    if (pathname !== '/') {
      return false
    }

    return linkHash ? currentHash === linkHash : currentHash === ''
  }

  const isPathMatch = pathname === linkPath || pathname.startsWith(`${linkPath}/`)

  if (!isPathMatch) {
    return false
  }

  return linkHash ? currentHash === linkHash : true
}

function MenuIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span className="flex flex-col gap-1.5" aria-hidden="true">
      <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
      <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'opacity-0' : ''}`} />
      <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
    </span>
  )
}

function Brand({ onClick, compact = false }: { onClick?: () => void; compact?: boolean }) {
  return (
    <Link to="/" className="group flex min-w-0 items-center gap-3" onClick={onClick}>
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-gray-950 text-sm font-black text-white shadow-lg shadow-gray-950/15 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:bg-coffee-700 group-hover:shadow-coffee-700/25">
        100
      </div>
      <div className="min-w-0">
        <span className="block truncate font-black leading-none text-gray-950">100 Websites</span>
        {!compact && (
          <span className="mt-1 hidden text-xs font-bold uppercase tracking-[0.18em] text-gray-500 sm:block">
            by Umair
          </span>
        )}
      </div>
    </Link>
  )
}

function CategoryMenu({
  pathname,
  currentHash,
  onNavigate,
  className = 'grid gap-2',
  compact = false,
}: {
  pathname: string
  currentHash: string
  onNavigate?: () => void
  className?: string
  compact?: boolean
}) {
  return (
    <div className={className}>
      {categoryLinks.map((link) => {
        const isActive = isActiveHref(pathname, currentHash, link.href)

        return (
          <Link
            key={link.label}
            to={link.href}
            onClick={onNavigate}
            className={`group flex items-center rounded-2xl border transition-all duration-200 hover:-translate-y-0.5 ${
              isActive
                ? 'active border-gray-950 bg-gray-950 text-white shadow-lg shadow-gray-950/15'
                : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300 hover:bg-gray-50 hover:text-gray-950 hover:shadow-md'
            } ${compact ? 'gap-2 p-2' : 'gap-3 p-3'}`}
          >
            <span
              className={`grid shrink-0 place-items-center rounded-xl text-xs font-black ${
                isActive ? 'bg-white/15 text-white' : 'bg-gray-100 text-gray-950 group-hover:bg-coffee-100'
              } ${compact ? 'h-8 w-8' : 'h-10 w-10'}`}
            >
              {getInitials(link.label)}
            </span>
            <span className="min-w-0 flex-1">
              <span className={`block truncate font-black ${compact ? 'text-xs sm:text-sm' : 'text-sm'}`}>
                {link.label}
              </span>
              {!compact && (
                <span className={`mt-0.5 block text-xs font-semibold ${isActive ? 'text-white/65' : 'text-gray-500'}`}>
                  {link.description}
                </span>
              )}
            </span>
            <span
              className={`h-2 w-2 rounded-full ${
                link.isLive ? (isActive ? 'bg-coffee-300' : 'bg-emerald-500') : isActive ? 'bg-white/45' : 'bg-gray-300'
              }`}
              aria-label={link.isLive ? 'Live' : 'Planned'}
            />
          </Link>
        )
      })}
    </div>
  )
}

export function Navbar({ mode = 'default' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { pathname, hash } = useLocation()
  const liveCategoryCount = categoryLinks.filter((category) => category.isLive).length
  const isCategoriesActive = categoryLinks.some((link) => isActiveHref(pathname, hash, link.href))
  const isBrowseActive = isActiveHref(pathname, hash, '/#categories')

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setIsCategoryMenuOpen(false)
  }, [pathname, hash])

  useEffect(() => {
    if (!hash) {
      if (pathname === '/') {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }

      return
    }

    const targetId = decodeURIComponent(hash.slice(1))
    const timeoutId = window.setTimeout(() => {
      const target = document.getElementById(targetId)

      if (!target) {
        return
      }

      const navbarOffset = mode === 'default' ? 84 : 0
      const targetTop = target.getBoundingClientRect().top + window.scrollY - navbarOffset

      window.scrollTo({ top: targetTop, behavior: 'smooth' })
    }, 80)

    return () => window.clearTimeout(timeoutId)
  }, [pathname, hash, mode])

  if (mode === 'floating') {
    return (
      <nav className="pointer-events-none fixed inset-0 z-[60]">
        {isOpen && (
          <button
            type="button"
            aria-label="Close portfolio navigation"
            onClick={() => setIsOpen(false)}
            className="pointer-events-auto fixed inset-0 hidden bg-transparent md:block"
          />
        )}

        <div className="pointer-events-auto fixed bottom-5 left-5 hidden md:block">
          <button
            type="button"
            aria-label="Toggle portfolio navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className={`relative z-10 flex h-16 items-center gap-3 rounded-full border px-3 pr-5 shadow-2xl backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-coffee-300/35 ${
              isOpen
                ? 'border-gray-950 bg-gray-950 text-white shadow-gray-950/25'
                : 'border-gray-200 bg-white/95 text-gray-950 shadow-gray-950/15 hover:border-gray-300 hover:bg-gray-50'
            }`}
          >
            <span
              className={`grid h-11 w-11 place-items-center rounded-full text-xs font-black transition ${
                isOpen ? 'bg-white text-gray-950' : 'bg-gray-950 text-white'
              }`}
            >
              100
            </span>
            <span className="text-left leading-none">
              <span className="block text-sm font-black">Explore sites</span>
              <span className={`mt-1 block text-[0.65rem] font-black uppercase tracking-[0.16em] ${isOpen ? 'text-white/55' : 'text-gray-500'}`}>
                {liveCategoryCount}/{categoryLinks.length} live
              </span>
            </span>
            <span className="ml-1">
              <MenuIcon isOpen={isOpen} />
            </span>
          </button>

          {isOpen && (
            <div className="absolute bottom-full left-0 pb-3">
              <div className="scale-in">
                <div className="w-[42rem] rounded-3xl border border-gray-200 bg-white/96 p-4 shadow-2xl shadow-gray-950/20 backdrop-blur-xl">
                  <Brand compact onClick={() => setIsOpen(false)} />

                  <div className="mt-4 grid gap-1 border-t border-gray-200 pt-4">
                    {primaryLinks.map((link) => {
                      const isActive = isActiveHref(pathname, hash, link.href)

                      return (
                        <Link
                          key={link.label}
                          to={link.href}
                          onClick={() => setIsOpen(false)}
                          className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${
                            isActive ? 'active bg-gray-950 text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-950'
                          }`}
                        >
                          {link.label}
                        </Link>
                      )
                    })}
                  </div>

                  <div className="mt-4 border-t border-gray-200 pt-4">
                    <div className="mb-3 flex items-center justify-between px-1">
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">Categories</p>
                      <p className="text-xs font-bold text-gray-400">{liveCategoryCount}/{categoryLinks.length} live</p>
                    </div>
                    <CategoryMenu
                      pathname={pathname}
                      currentHash={hash}
                      onNavigate={() => setIsOpen(false)}
                      className="grid grid-cols-2 gap-2"
                      compact
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <button
          type="button"
          aria-label="Toggle portfolio navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="pointer-events-auto fixed bottom-5 left-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white/95 text-gray-950 shadow-xl shadow-gray-950/15 backdrop-blur transition hover:-translate-y-0.5 hover:bg-gray-100 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <MenuIcon isOpen={isOpen} />
        </button>

        {isOpen && (
          <>
            <button
              type="button"
              aria-label="Close portfolio navigation"
              onClick={() => setIsOpen(false)}
              className="pointer-events-auto fixed inset-0 bg-gray-950/25 backdrop-blur-[2px] md:hidden"
            />
            <div className="pointer-events-auto fixed bottom-20 left-5 max-h-[calc(100vh-7rem)] w-[min(23rem,calc(100vw-2.5rem))] overflow-y-auto rounded-3xl border border-gray-200 bg-white/95 p-4 shadow-2xl shadow-gray-950/20 backdrop-blur-xl md:hidden">
              <Brand onClick={() => setIsOpen(false)} />

              <div className="mt-4 grid gap-1 border-t border-gray-200 pt-4">
                {primaryLinks.map((link) => {
                  const isActive = isActiveHref(pathname, hash, link.href)

                  return (
                    <Link
                      key={link.label}
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${
                        isActive ? 'active bg-gray-950 text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-950'
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                })}
              </div>

              <div className="mt-4 border-t border-gray-200 pt-4">
                <div className="mb-3 flex items-center justify-between px-1">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">All categories</p>
                  <p className="text-xs font-bold text-gray-400">{liveCategoryCount}/{categoryLinks.length} live</p>
                </div>
                <CategoryMenu
                  pathname={pathname}
                  currentHash={hash}
                  onNavigate={() => setIsOpen(false)}
                  className="grid grid-cols-2 gap-2"
                  compact
                />
              </div>
            </div>
          </>
        )}
      </nav>
    )
  }

  return (
    <nav
      className={`sticky top-0 z-50 border-b bg-white/88 backdrop-blur-xl fade-in-down transition-all duration-300 ${
        isScrolled ? 'border-gray-200 shadow-lg shadow-gray-950/10' : 'border-white/60 shadow-sm'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between gap-4 transition-all duration-300 ${isScrolled ? 'h-[3.75rem] py-2' : 'h-[4.5rem] py-3'}`}>
          <Brand onClick={() => setIsOpen(false)} />

          <div className="hidden items-center rounded-full border border-gray-200 bg-gray-50/80 p-1 shadow-inner lg:flex">
            {primaryLinks.map((link) => {
              const isActive = isActiveHref(pathname, hash, link.href)

              return (
                <Link
                  key={link.label}
                  to={link.href}
                  aria-current={isActive ? 'page' : undefined}
                  className={`relative rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ease-out hover:-translate-y-0.5 ${
                    isActive ? 'active bg-white text-gray-950 shadow-sm' : 'text-gray-600 hover:bg-white/75 hover:text-gray-950'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-5 -bottom-0.5 h-0.5 rounded-full bg-coffee-700 transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </Link>
              )
            })}

            <div
              className="relative"
              onMouseEnter={() => setIsCategoryMenuOpen(true)}
              onMouseLeave={() => setIsCategoryMenuOpen(false)}
              onFocus={() => setIsCategoryMenuOpen(true)}
            >
              <button
                type="button"
                aria-expanded={isCategoryMenuOpen}
                className={`relative rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/75 hover:text-gray-950 focus:outline-none focus-visible:ring-4 focus-visible:ring-coffee-300/35 ${
                  isCategoriesActive ? 'active bg-white text-gray-950 shadow-sm' : 'text-gray-600'
                }`}
              >
                Categories
                <span
                  className={`absolute inset-x-5 -bottom-0.5 h-0.5 rounded-full bg-coffee-700 transition-opacity ${
                    isCategoriesActive ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </button>
              <div
                className={`absolute right-0 top-full w-[44rem] origin-top pt-3 transition-all duration-200 ease-out ${
                  isCategoryMenuOpen
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-1 opacity-0'
                }`}
              >
                <div className="rounded-3xl border border-gray-200 bg-white/96 p-4 shadow-2xl shadow-gray-950/15 backdrop-blur-xl">
                  <div className="mb-4 flex items-end justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-coffee-700">Website categories</p>
                      <p className="mt-1 text-sm font-semibold text-gray-500">Live collections and planned batches.</p>
                    </div>
                    <Link
                      to="/#categories"
                      onClick={() => setIsCategoryMenuOpen(false)}
                      className="rounded-full bg-gray-950 px-4 py-2 text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-coffee-700"
                    >
                      View roadmap
                    </Link>
                  </div>
                  <CategoryMenu
                    pathname={pathname}
                    currentHash={hash}
                    onNavigate={() => setIsCategoryMenuOpen(false)}
                    className="grid grid-cols-2 gap-2"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/#categories"
              aria-current={isBrowseActive ? 'page' : undefined}
              className={`rounded-full px-5 py-2.5 text-sm font-black shadow-lg transition-all duration-300 ease-out hover:-translate-y-0.5 ${
                isBrowseActive
                  ? 'active bg-coffee-700 text-white shadow-coffee-700/20'
                  : 'bg-gray-950 text-white shadow-gray-950/20 hover:bg-coffee-700 hover:shadow-coffee-700/20'
              }`}
            >
              Browse Websites
            </Link>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-700 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-gray-950 hover:shadow-md hover:text-gray-950"
            >
              GitHub
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-gray-200 bg-white text-gray-950 shadow-sm transition hover:bg-gray-100 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <MenuIcon isOpen={isOpen} />
          </button>
        </div>

        {isOpen && (
          <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-gray-200 py-4 md:hidden">
            <div className="grid gap-2">
              {primaryLinks.map((link) => {
                const isActive = isActiveHref(pathname, hash, link.href)

                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className={`rounded-2xl px-4 py-3 text-sm font-bold transition ${
                      isActive ? 'active bg-gray-950 text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-950'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>

            <div className="mt-4 border-t border-gray-200 pt-4">
              <div className="mb-3 flex items-center justify-between px-1">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-gray-500">All categories</p>
                <p className="text-xs font-bold text-gray-400">{liveCategoryCount}/{categoryLinks.length} live</p>
              </div>
              <CategoryMenu
                pathname={pathname}
                currentHash={hash}
                onNavigate={() => setIsOpen(false)}
                className="grid grid-cols-2 gap-2"
                compact
              />
            </div>

            <div className="mt-4 grid grid-cols-2 gap-2 border-t border-gray-200 pt-4">
              <Link
                to="/#categories"
                onClick={() => setIsOpen(false)}
                aria-current={isBrowseActive ? 'page' : undefined}
                className={`rounded-2xl px-4 py-3 text-center text-sm font-black transition ${
                  isBrowseActive ? 'active bg-coffee-700 text-white' : 'bg-gray-950 text-white hover:bg-coffee-700'
                }`}
              >
                Browse
              </Link>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="rounded-2xl border border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-700 transition hover:border-gray-950 hover:text-gray-950"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
