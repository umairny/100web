import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Restaurant', href: '/restaurant' },
  { label: 'Beauty', href: '/beauty' },
  { label: 'Categories', href: '/#categories' },
  { label: 'About Project', href: '/#about-project' },
]

interface NavbarProps {
  mode?: 'default' | 'floating'
}

export function Navbar({ mode = 'default' }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24)

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (mode === 'floating') {
    return (
      <nav className="pointer-events-none fixed inset-0 z-[60]">
        <div className="group pointer-events-auto fixed left-0 top-1/2 hidden -translate-y-1/2 items-stretch md:flex">
          <button
            type="button"
            aria-label="Open portfolio navigation"
            className="relative z-10 flex h-28 w-11 items-center justify-center rounded-r-2xl border-y border-r border-gray-200 bg-white/95 text-gray-950 shadow-xl shadow-gray-950/15 backdrop-blur transition duration-300 group-hover:bg-gray-950 group-hover:text-white group-hover:shadow-gray-950/25"
          >
            <span className="-rotate-90 whitespace-nowrap text-xs font-black uppercase tracking-[0.2em]">100</span>
          </button>

          <div className="w-0 overflow-visible">
            <div className="pointer-events-none -translate-x-3 scale-95 opacity-0 transition-all duration-300 ease-out group-hover:pointer-events-auto group-hover:translate-x-0 group-hover:scale-100 group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:translate-x-0 group-focus-within:scale-100 group-focus-within:opacity-100">
              <div className="ml-3 w-72 rounded-r-3xl border border-gray-200 bg-white/95 p-4 shadow-2xl shadow-gray-950/20 backdrop-blur-xl">
                <Link to="/" className="group/brand flex items-center gap-3 rounded-2xl p-3 transition hover:bg-gray-100">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-950 transition group-hover/brand:bg-coffee-700">
                    <span className="text-sm font-black text-white">100</span>
                  </div>
                  <div>
                    <span className="block font-black leading-none text-gray-950">100 Websites</span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">by Umair</span>
                  </div>
                </Link>

                <div className="mt-3 grid gap-1 border-t border-gray-200 pt-3">
                  {navLinks.map((link) => {
                    const linkPath = link.href.split('#')[0]
                    const isActive = linkPath === '/' ? pathname === '/' : pathname.startsWith(linkPath)

                    return (
                      <a
                        key={link.label}
                        href={link.href}
                        className={`rounded-xl px-4 py-3 text-sm font-bold transition ${
                          isActive ? 'bg-gray-950 text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-950'
                        }`}
                      >
                        {link.label}
                      </a>
                    )
                  })}
                </div>

                <div className="mt-3 grid grid-cols-2 gap-2 border-t border-gray-200 pt-3">
                  <a
                    href="/#categories"
                    className="rounded-xl bg-gray-950 px-4 py-3 text-center text-sm font-black text-white transition hover:bg-coffee-700"
                  >
                    Browse
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl border border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-700 transition hover:border-gray-950 hover:text-gray-950"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button
          type="button"
          aria-label="Toggle portfolio navigation"
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="pointer-events-auto fixed bottom-5 left-5 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-gray-200 bg-white/95 text-gray-950 shadow-xl shadow-gray-950/15 backdrop-blur transition hover:-translate-y-0.5 hover:bg-gray-100 md:hidden"
        >
          <span className="sr-only">Menu</span>
          <span className="flex flex-col gap-1.5">
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>

        {isOpen && (
          <>
            <button
              type="button"
              aria-label="Close portfolio navigation"
              onClick={() => setIsOpen(false)}
              className="pointer-events-auto fixed inset-0 bg-gray-950/20 backdrop-blur-[2px] md:hidden"
            />
            <div className="pointer-events-auto fixed bottom-20 left-5 w-[min(20rem,calc(100vw-2.5rem))] rounded-3xl border border-gray-200 bg-white/95 p-4 shadow-2xl shadow-gray-950/20 backdrop-blur-xl md:hidden">
              <Link to="/" onClick={() => setIsOpen(false)} className="group flex items-center gap-3 rounded-2xl p-3 transition hover:bg-gray-100">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-950 transition group-hover:bg-coffee-700">
                  <span className="text-sm font-black text-white">100</span>
                </div>
                <div>
                  <span className="block font-black leading-none text-gray-950">100 Websites</span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">by Umair</span>
                </div>
              </Link>

              <div className="mt-3 grid gap-1 border-t border-gray-200 pt-3">
                {navLinks.map((link) => {
                  const linkPath = link.href.split('#')[0]
                  const isActive = linkPath === '/' ? pathname === '/' : pathname.startsWith(linkPath)

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-xl px-4 py-3 text-sm font-bold transition ${
                        isActive ? 'bg-gray-950 text-white' : 'text-gray-700 hover:bg-gray-100 hover:text-gray-950'
                      }`}
                    >
                      {link.label}
                    </a>
                  )
                })}
              </div>

              <div className="mt-3 grid grid-cols-2 gap-2 border-t border-gray-200 pt-3">
                <a
                  href="/#categories"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-gray-950 px-4 py-3 text-center text-sm font-black text-white transition hover:bg-coffee-700"
                >
                  Browse
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-700 transition hover:border-gray-950 hover:text-gray-950"
                >
                  GitHub
                </a>
              </div>
            </div>
          </>
        )}
      </nav>
    )
  }

  return (
    <nav
      className={`sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-xl fade-in-down transition-all duration-300 ${
        isScrolled ? 'shadow-lg shadow-gray-950/10' : 'shadow-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${isScrolled ? 'h-14' : 'h-16'}`}>
          <Link to="/" className="group flex items-center gap-3" onClick={() => setIsOpen(false)}>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-950 transition-all duration-300 ease-out group-hover:-translate-y-0.5 group-hover:bg-coffee-700 group-hover:shadow-lg group-hover:shadow-coffee-700/20">
              <span className="text-white font-black text-sm">100</span>
            </div>
            <div>
              <span className="block font-black leading-none text-gray-950">100 Websites</span>
              <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 sm:block">
                by Umair
              </span>
            </div>
          </Link>

          <div className="hidden items-center rounded-full border border-gray-200 bg-gray-50/80 p-1 shadow-inner md:flex">
            {navLinks.map((link) => {
              const linkPath = link.href.split('#')[0]
              const isActive = linkPath === '/' ? pathname === '/' : pathname.startsWith(linkPath)

              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative rounded-full px-4 py-2 text-sm font-bold transition-all duration-300 ease-out hover:-translate-y-0.5 ${
                    isActive ? 'bg-white text-gray-950 shadow-sm' : 'text-gray-600 hover:bg-white/75 hover:text-gray-950'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute inset-x-5 -bottom-0.5 h-0.5 rounded-full bg-coffee-700 transition-opacity ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              )
            })}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="/#categories"
              className="rounded-full bg-gray-950 px-5 py-2.5 text-sm font-black text-white shadow-lg shadow-gray-950/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-coffee-700 hover:shadow-coffee-700/20"
            >
              Browse Websites
            </a>
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-950 transition hover:bg-gray-100 md:hidden"
          >
            <span className="sr-only">Menu</span>
            <span className="flex flex-col gap-1.5">
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 rounded-full bg-current transition ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        {isOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-bold text-gray-700 transition hover:bg-gray-100 hover:text-gray-950"
                >
                  {link.label}
                </a>
              ))}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <a
                  href="/#categories"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl bg-gray-950 px-4 py-3 text-center text-sm font-black text-white transition hover:bg-coffee-700"
                >
                  Browse
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-700 transition hover:border-gray-950 hover:text-gray-950"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
