import React, { useState, useEffect, useRef, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { allWebsites, categories, WebsiteCategory, WebsiteDesign } from '../data/websites'
import { prefetchRoute } from '../utils/routePrefetch'
import { useEventListener, useLockBodyScroll } from '../hooks'
import { Search, X, Sparkles, ExternalLink, ArrowRight, CornerDownLeft } from 'lucide-react'

interface CommandPaletteProps {
  isOpen: boolean
  onClose: () => void
}

export function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const listRef = useRef<HTMLDivElement>(null)
  const navigate = useNavigate()

  useLockBodyScroll(isOpen)

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery('')
      setSelectedIndex(0)
      window.setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [isOpen])

  // Filter websites
  const filteredWebsites = useMemo(() => {
    const cleanQuery = query.toLowerCase().trim()

    return allWebsites.filter((site) => {
      const matchesCategory =
        selectedCategory === 'all' ||
        site.category.toLowerCase() === selectedCategory.toLowerCase()

      if (!matchesCategory) return false

      if (!cleanQuery) return true

      return (
        site.title.toLowerCase().includes(cleanQuery) ||
        site.category.toLowerCase().includes(cleanQuery) ||
        site.style.toLowerCase().includes(cleanQuery) ||
        site.shortDescription.toLowerCase().includes(cleanQuery) ||
        (site.marketLabel && site.marketLabel.toLowerCase().includes(cleanQuery)) ||
        site.slug.toLowerCase().includes(cleanQuery)
      )
    })
  }, [query, selectedCategory])

  // Clamp selectedIndex when results change
  useEffect(() => {
    setSelectedIndex(0)
  }, [filteredWebsites.length, selectedCategory])

  // Helper to resolve route path
  const getSiteRoute = (site: WebsiteDesign) => {
    const categoryPath = site.category.toLowerCase().replace(/\s+/g, '-')
    return `/${categoryPath}/${site.slug}`
  }

  // Handle opening a site
  const handleSelect = (site: WebsiteDesign) => {
    const path = getSiteRoute(site)
    navigate(path)
    onClose()
  }

  // Keyboard navigation inside the palette
  useEventListener('keydown', (e: KeyboardEvent) => {
    if (!isOpen) return

    if (e.key === 'Escape') {
      e.preventDefault()
      onClose()
      return
    }

    if (filteredWebsites.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((prev) => {
        const next = (prev + 1) % filteredWebsites.length
        prefetchSiteAtIndex(next)
        scrollToItem(next)
        return next
      })
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((prev) => {
        const next = (prev - 1 + filteredWebsites.length) % filteredWebsites.length
        prefetchSiteAtIndex(next)
        scrollToItem(next)
        return next
      })
    } else if (e.key === 'Enter') {
      e.preventDefault()
      const target = filteredWebsites[selectedIndex]
      if (target) {
        handleSelect(target)
      }
    }
  })

  const prefetchSiteAtIndex = (index: number) => {
    const site = filteredWebsites[index]
    if (site) {
      prefetchRoute(getSiteRoute(site))
    }
  }

  const scrollToItem = (index: number) => {
    if (!listRef.current) return
    const items = listRef.current.querySelectorAll('[data-palette-item]')
    const item = items[index] as HTMLElement | undefined
    if (item) {
      item.scrollIntoView({ block: 'nearest' })
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex items-start justify-center pt-16 sm:pt-24 px-4 sm:px-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-gray-950/60 backdrop-blur-sm transition-opacity animate-in fade-in duration-200"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Dialog */}
      <div
        role="dialog"
        aria-modal="true"
        className="relative w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-200/80 bg-white/95 shadow-2xl shadow-gray-950/25 backdrop-blur-xl transition-all animate-in fade-in zoom-in-95 duration-150"
      >
        {/* Search Header */}
        <div className="relative flex items-center border-b border-gray-100 px-4 sm:px-6 py-4">
          <Search className="h-5 w-5 text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search all 100 websites by name, style, niche (e.g. logistics, dental, coffee)..."
            className="w-full bg-transparent px-3 py-1 text-base sm:text-lg font-medium text-gray-900 placeholder:text-gray-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 text-gray-400 hover:text-gray-600 rounded-md"
              aria-label="Clear search"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          <button
            type="button"
            onClick={onClose}
            className="ml-2 rounded-lg p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-700 transition"
            aria-label="Close dialog"
          >
            <span className="text-xs font-mono font-bold bg-gray-100 px-2 py-1 rounded text-gray-600 border border-gray-200">
              ESC
            </span>
          </button>
        </div>

        {/* Category Pills Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto px-4 sm:px-6 py-3 border-b border-gray-100 bg-gray-50/50 scrollbar-none text-xs">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1.5 rounded-full font-bold transition whitespace-nowrap ${
              selectedCategory === 'all'
                ? 'bg-gray-950 text-white shadow-sm'
                : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
            }`}
          >
            All Categories (100)
          </button>
          {categories.map((cat) => (
            <button
              key={cat.name}
              type="button"
              onClick={() => setSelectedCategory(cat.name)}
              className={`px-3 py-1.5 rounded-full font-bold transition whitespace-nowrap flex items-center gap-1.5 ${
                selectedCategory.toLowerCase() === cat.name.toLowerCase()
                  ? 'bg-gray-950 text-white shadow-sm'
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-100'
              }`}
            >
              <span>{cat.icon}</span>
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Results List */}
        <div
          ref={listRef}
          className="max-h-[60vh] sm:max-h-[420px] overflow-y-auto p-2 sm:p-3 divide-y divide-gray-50"
        >
          {filteredWebsites.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <p className="text-base font-semibold text-gray-800">No websites found</p>
              <p className="text-xs text-gray-400 mt-1">Try another keyword or category filter.</p>
            </div>
          ) : (
            filteredWebsites.map((site, index) => {
              const isSelected = index === selectedIndex
              const isLive = site.status === 'completed' || site.status === 'live'

              return (
                <div
                  key={site.id}
                  data-palette-item
                  onMouseEnter={() => {
                    setSelectedIndex(index)
                    prefetchSiteAtIndex(index)
                  }}
                  onClick={() => handleSelect(site)}
                  className={`group flex items-center justify-between gap-3 p-3 sm:p-3.5 rounded-xl cursor-pointer transition-all duration-150 ${
                    isSelected
                      ? 'bg-gray-950 text-white shadow-md'
                      : 'hover:bg-gray-100/80 text-gray-800'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    {/* Palette Swatch Preview */}
                    <div className="flex -space-x-1 shrink-0">
                      {[site.colors.primary, site.colors.accent].map((c, i) => (
                        <span
                          key={i}
                          className="h-4 w-4 rounded-full border border-white/60 shadow-xs"
                          style={{ backgroundColor: c }}
                        />
                      ))}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm sm:text-base truncate">
                          {site.title}
                        </span>
                        <span
                          className={`text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${
                            isSelected
                              ? 'bg-white/20 text-white'
                              : 'bg-gray-100 text-gray-600'
                          }`}
                        >
                          {site.category}
                        </span>
                      </div>
                      <p
                        className={`text-xs truncate max-w-md mt-0.5 ${
                          isSelected ? 'text-white/75' : 'text-gray-500'
                        }`}
                      >
                        {site.style} • {site.shortDescription}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        isLive
                          ? isSelected
                            ? 'bg-emerald-500 text-white'
                            : 'bg-emerald-100 text-emerald-700'
                          : isSelected
                            ? 'bg-white/20 text-white'
                            : 'bg-gray-100 text-gray-500'
                      }`}
                    >
                      {isLive ? 'Live' : 'Preview'}
                    </span>
                    <CornerDownLeft
                      className={`w-3.5 h-3.5 transition-opacity ${
                        isSelected ? 'opacity-100 text-white' : 'opacity-0'
                      }`}
                    />
                  </div>
                </div>
              )
            })
          )}
        </div>

        {/* Footer Shortcut Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-2.5 bg-gray-50 border-t border-gray-100 text-[11px] font-medium text-gray-500">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="font-mono bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-2xs">↑↓</kbd> Navigate
            </span>
            <span>
              <kbd className="font-mono bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-2xs">↵</kbd> Select
            </span>
            <span>
              <kbd className="font-mono bg-white border border-gray-200 px-1.5 py-0.5 rounded shadow-2xs">Esc</kbd> Close
            </span>
          </div>
          <div className="text-gray-400">
            {filteredWebsites.length} matching of 100 concepts
          </div>
        </div>
      </div>
    </div>
  )
}
