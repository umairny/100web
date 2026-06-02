import { Link } from 'react-router-dom'
import { useState } from 'react'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Restaurant', href: '/restaurant' },
  { label: 'Beauty', href: '/beauty' },
  { label: 'Categories', href: '/#categories' },
  { label: 'About Project', href: '/#about-project' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3 group" onClick={() => setIsOpen(false)}>
            <div className="w-9 h-9 bg-gray-950 rounded-xl flex items-center justify-center group-hover:bg-coffee-700 transition">
              <span className="text-white font-black text-sm">100</span>
            </div>
            <div>
              <span className="block font-black leading-none text-gray-950">Umair 100</span>
              <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 sm:block">
                Website Designs
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-bold text-gray-600 transition hover:bg-gray-100 hover:text-gray-950"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full border border-gray-200 px-4 py-2 text-sm font-bold text-gray-700 transition hover:border-gray-950 hover:text-gray-950"
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
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="rounded-xl bg-gray-950 px-4 py-3 text-sm font-bold text-white transition hover:bg-coffee-700"
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
