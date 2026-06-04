import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Container } from './Container'

interface RestaurantSubNavLink {
  label: string
  href: string
}

interface RestaurantSubNavProps {
  brand: string
  links: RestaurantSubNavLink[]
  ctaLabel: string
  ctaHref: string
  className: string
  brandClassName: string
  linkClassName: string
  ctaClassName: string
  menuButtonClassName: string
  mobilePanelClassName: string
  collectionPath?: string
}

export function RestaurantSubNav({
  brand,
  links,
  ctaLabel,
  ctaHref,
  className,
  brandClassName,
  linkClassName,
  ctaClassName,
  menuButtonClassName,
  mobilePanelClassName,
  collectionPath = '/restaurant',
}: RestaurantSubNavProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { pathname } = useLocation()

  const handleBrandClick = () => {
    setIsOpen(false)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }

  return (
    <nav className={`restaurant-subnav fixed left-0 right-0 top-16 z-40 backdrop-blur fade-in-down ${className}`}>
      <Container>
        <div className="flex h-14 items-center justify-between gap-4">
          <Link to={pathname} onClick={handleBrandClick} className={`truncate font-black ${brandClassName}`}>
            {brand}
          </Link>

          <div className="hidden items-center gap-6 text-sm font-bold md:flex">
            {links.map((link) => (
              <a key={link.href} href={link.href} className={linkClassName}>
                {link.label}
              </a>
            ))}
          </div>

          <a href={ctaHref} className={`hidden rounded-full px-4 py-2 text-sm font-black transition-all duration-300 ease-out hover:-translate-y-0.5 md:inline-flex ${ctaClassName}`}>
            {ctaLabel}
          </a>

          <button
            type="button"
            aria-label="Toggle restaurant navigation"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition md:hidden ${menuButtonClassName}`}
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
          <div className={`mb-3 grid gap-2 rounded-2xl p-3 shadow-lg md:hidden ${mobilePanelClassName}`}>
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`rounded-xl px-4 py-3 text-sm font-bold ${linkClassName}`}
              >
                {link.label}
              </a>
            ))}
            <a
              href={ctaHref}
              onClick={() => setIsOpen(false)}
              className={`rounded-xl px-4 py-3 text-center text-sm font-black ${ctaClassName}`}
            >
              {ctaLabel}
            </a>
          </div>
        )}
      </Container>
    </nav>
  )
}
