import React, { useState, useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { allWebsites, WebsiteDesign } from '../data/websites'
import { prefetchRoute } from '../utils/routePrefetch'
import { useFavorites } from '../utils/favorites'
import { 
  ChevronLeft, 
  ChevronRight, 
  Heart, 
  Search, 
  X, 
  Check, 
  SlidersHorizontal,
  Home,
  ChevronUp,
  ChevronDown,
  Monitor,
  Tablet,
  Smartphone,
  Share2,
  Copy,
  Code2,
  Sparkles
} from 'lucide-react'

export type DeviceMode = 'desktop' | 'tablet' | 'mobile'

interface ShowcaseToolbarProps {
  onOpenSearch: () => void
  onOpenShortlist?: () => void
  deviceMode?: DeviceMode
  onDeviceModeChange?: (mode: DeviceMode) => void
}

export function ShowcaseToolbar({
  onOpenSearch,
  onOpenShortlist,
  deviceMode = 'desktop',
  onDeviceModeChange,
}: ShowcaseToolbarProps) {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  // Find the current website
  const { currentSite, prevSite, nextSite } = useMemo(() => {
    // Match by slug in pathname
    const cleanPath = pathname.toLowerCase()
    
    // Check direct matching or slug extraction
    let foundIndex = allWebsites.findIndex((site) => {
      const catPath = site.category.toLowerCase().replace(/\s+/g, '-')
      return (
        cleanPath === `/${catPath}/${site.slug}` ||
        cleanPath.startsWith(`/${catPath}/${site.slug}/`) ||
        cleanPath === `/${site.slug}` ||
        cleanPath.startsWith(`/${site.slug}/`)
      )
    })

    // Fallback search by slug substring
    if (foundIndex === -1) {
      foundIndex = allWebsites.findIndex((site) => cleanPath.includes(site.slug))
    }

    if (foundIndex === -1) {
      return { currentSite: null, prevSite: null, nextSite: null }
    }

    const currentSite = allWebsites[foundIndex]
    const prevSite = allWebsites[(foundIndex - 1 + allWebsites.length) % allWebsites.length]
    const nextSite = allWebsites[(foundIndex + 1) % allWebsites.length]

    return { currentSite, prevSite, nextSite }
  }, [pathname])

  const { isFavorited, toggle, count: shortlistCount } = useFavorites(currentSite?.id)

  if (!currentSite) return null

  const getSiteRoute = (site: WebsiteDesign) => {
    const categoryPath = site.category.toLowerCase().replace(/\s+/g, '-')
    return `/${categoryPath}/${site.slug}`
  }

  const [isShareOpen, setIsShareOpen] = useState(false)
  const [copiedLink, setCopiedLink] = useState(false)
  const [copiedAllColors, setCopiedAllColors] = useState(false)

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color).catch(() => {})
    setCopiedColor(color)
    setTimeout(() => setCopiedColor(null), 1800)
  }

  const handleCopyShareLink = () => {
    const url = new URL(window.location.href)
    if (deviceMode && deviceMode !== 'desktop') {
      url.searchParams.set('device', deviceMode)
    } else {
      url.searchParams.delete('device')
    }
    navigator.clipboard.writeText(url.toString()).catch(() => {})
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  const handleCopyAllColors = () => {
    if (!currentSite) return
    const palette = Object.entries(currentSite.colors)
      .map(([name, hex]) => `${name.toUpperCase()}: ${hex}`)
      .join(' | ')
    navigator.clipboard.writeText(palette).catch(() => {})
    setCopiedAllColors(true)
    setTimeout(() => setCopiedAllColors(false), 2000)
  }

  if (isCollapsed) {
    return (
      <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-[70] pointer-events-auto">
        <button
          type="button"
          onClick={() => setIsCollapsed(false)}
          className="flex items-center gap-2 rounded-full border border-gray-200/90 bg-white/95 px-4 py-2 text-xs font-bold text-gray-800 shadow-xl backdrop-blur-xl transition hover:bg-gray-50 active:scale-95"
        >
          <SlidersHorizontal className="h-3.5 w-3.5 text-gray-600" />
          <span>Showcase Bar</span>
          <ChevronUp className="h-3.5 w-3.5 text-gray-400" />
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-5 inset-x-0 z-[70] pointer-events-none flex justify-center px-4">
      <div className="pointer-events-auto flex items-center flex-wrap sm:flex-nowrap gap-2 sm:gap-3 rounded-2xl sm:rounded-full border border-gray-200/90 bg-white/95 p-2 sm:px-4 sm:py-2.5 shadow-2xl shadow-gray-950/20 backdrop-blur-xl transition-all max-w-full text-xs animate-in fade-in slide-in-from-bottom-3 duration-200">
        
        {/* Site Badge & Title */}
        <div className="flex items-center gap-2.5 pr-2 sm:border-r sm:border-gray-200">
          <span className="font-bold text-gray-900 truncate max-w-[140px] sm:max-w-[180px]">
            {currentSite.title}
          </span>
          <span className="hidden sm:inline-block rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-extrabold uppercase text-gray-600">
            {currentSite.category}
          </span>
        </div>

        {/* Color Palette Dots (Click to copy) */}
        <div className="hidden md:flex items-center gap-1.5 px-2 border-r border-gray-200">
          {[currentSite.colors.primary, currentSite.colors.accent, currentSite.colors.dark].map((color, i) => (
            <button
              key={i}
              type="button"
              onClick={() => handleCopyColor(color)}
              title={`Copy ${color}`}
              className="relative h-4 w-4 rounded-full border border-white/80 shadow-xs hover:scale-125 transition"
              style={{ backgroundColor: color }}
            >
              {copiedColor === color && (
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 rounded bg-gray-900 px-1.5 py-0.5 text-[9px] font-bold text-white shadow">
                  Copied!
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Favorite Shortlist Button & Count Drawer Trigger */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={() => toggle()}
            title={isFavorited ? 'Remove from shortlist' : 'Save to shortlist'}
            className={`flex items-center gap-1.5 px-3 py-1.5 font-bold transition ${
              onOpenShortlist && shortlistCount > 0 ? 'rounded-l-full' : 'rounded-full'
            } ${
              isFavorited
                ? 'bg-rose-50 text-rose-600 border border-rose-200'
                : 'text-gray-600 hover:bg-gray-100'
            }`}
          >
            <Heart className={`h-3.5 w-3.5 ${isFavorited ? 'fill-rose-600 text-rose-600' : 'text-gray-400'}`} />
            <span className="hidden lg:inline">{isFavorited ? 'Shortlisted' : 'Shortlist'}</span>
          </button>
          {onOpenShortlist && shortlistCount > 0 && (
            <button
              type="button"
              onClick={onOpenShortlist}
              title={`View Shortlist (${shortlistCount} saved)`}
              className={`rounded-r-full px-2 py-1.5 font-black text-[11px] border-y border-r transition ${
                isFavorited
                  ? 'bg-rose-100 text-rose-700 border-rose-200 hover:bg-rose-200'
                  : 'bg-gray-100 text-gray-700 border-gray-200 hover:bg-gray-200'
              }`}
            >
              {shortlistCount}
            </button>
          )}
        </div>

        {/* Device Frame Switcher */}
        {onDeviceModeChange && (
          <div className="hidden sm:flex items-center rounded-full bg-gray-100 p-0.5 border border-gray-200/80">
            <button
              type="button"
              onClick={() => onDeviceModeChange('desktop')}
              title="Desktop View (Full Width)"
              className={`p-1.5 rounded-full transition ${
                deviceMode === 'desktop'
                  ? 'bg-white text-gray-950 shadow-xs font-bold'
                  : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              <Monitor className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onDeviceModeChange('tablet')}
              title="Tablet View (768px)"
              className={`p-1.5 rounded-full transition ${
                deviceMode === 'tablet'
                  ? 'bg-white text-gray-950 shadow-xs font-bold'
                  : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              <Tablet className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onDeviceModeChange('mobile')}
              title="Mobile Phone View (390px)"
              className={`p-1.5 rounded-full transition ${
                deviceMode === 'mobile'
                  ? 'bg-white text-gray-950 shadow-xs font-bold'
                  : 'text-gray-400 hover:text-gray-700'
              }`}
            >
              <Smartphone className="h-3.5 w-3.5" />
            </button>
          </div>
        )}

        {/* Prev / Next Switchers */}
        <div className="flex items-center gap-1">
          {prevSite && (
            <button
              type="button"
              onClick={() => navigate(getSiteRoute(prevSite))}
              onMouseEnter={() => prefetchRoute(getSiteRoute(prevSite))}
              title={`Previous: ${prevSite.title}`}
              className="flex items-center gap-1 rounded-full p-1.5 sm:px-2.5 sm:py-1 text-gray-700 hover:bg-gray-100 transition font-semibold"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden xl:inline">Prev</span>
            </button>
          )}

          {nextSite && (
            <button
              type="button"
              onClick={() => navigate(getSiteRoute(nextSite))}
              onMouseEnter={() => prefetchRoute(getSiteRoute(nextSite))}
              title={`Next: ${nextSite.title}`}
              className="flex items-center gap-1 rounded-full p-1.5 sm:px-2.5 sm:py-1 text-gray-700 hover:bg-gray-100 transition font-semibold"
            >
              <span className="hidden xl:inline">Next</span>
              <ChevronRight className="h-4 w-4" />
            </button>
          )}
        </div>

        {/* Search Modal Trigger */}
        <button
          type="button"
          onClick={onOpenSearch}
          className="flex items-center gap-1.5 rounded-full bg-gray-100 hover:bg-gray-200 px-3 py-1.5 font-bold text-gray-700 transition"
          title="Search all websites (Ctrl+K)"
        >
          <Search className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Search</span>
        </button>

        {/* Share & Specs Trigger */}
        <button
          type="button"
          onClick={() => setIsShareOpen((prev) => !prev)}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 font-bold transition ${
            isShareOpen
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
          title="Share template & view color specs"
        >
          <Share2 className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Share</span>
        </button>

        {/* Exit Demo to Homepage */}
        <Link
          to="/"
          className="flex items-center gap-1 rounded-full bg-gray-950 px-3 py-1.5 font-bold text-white hover:bg-coffee-700 transition"
        >
          <Home className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">100 Sites</span>
        </Link>

        {/* Collapse Button */}
        <button
          type="button"
          onClick={() => setIsCollapsed(true)}
          aria-label="Minimize showcase bar"
          className="p-1 text-gray-400 hover:text-gray-600 rounded-full ml-0.5"
        >
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      {/* Share & Specs Modal Popover */}
      {isShareOpen && (
        <div className="pointer-events-auto fixed bottom-20 left-1/2 -translate-x-1/2 z-[75] w-[92vw] max-w-md rounded-2xl border border-gray-200/90 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl text-xs animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-start justify-between pb-3 border-b border-gray-100">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-sm text-gray-900">{currentSite.title}</h3>
                <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[10px] font-bold text-gray-600 uppercase tracking-wide">
                  {currentSite.category}
                </span>
              </div>
              <p className="text-[11px] text-gray-500 mt-0.5 line-clamp-2">{currentSite.shortDescription}</p>
            </div>
            <button
              type="button"
              onClick={() => setIsShareOpen(false)}
              className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Share Link Row */}
          <div className="mt-3.5 space-y-3">
            <div>
              <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                Shareable Link {deviceMode !== 'desktop' && `(${deviceMode} view)`}
              </label>
              <div className="flex items-center gap-2">
                <input
                  readOnly
                  value={
                    typeof window !== 'undefined'
                      ? `${window.location.origin}${getSiteRoute(currentSite)}${
                          deviceMode !== 'desktop' ? `?device=${deviceMode}` : ''
                        }`
                      : ''
                  }
                  className="flex-grow rounded-lg border border-gray-200 bg-gray-50/80 px-3 py-1.5 text-xs text-gray-700 font-mono select-all focus:outline-none"
                />
                <button
                  type="button"
                  onClick={handleCopyShareLink}
                  className="flex items-center gap-1.5 rounded-lg bg-gray-900 px-3 py-1.5 text-xs font-bold text-white hover:bg-black transition active:scale-95 shrink-0"
                >
                  {copiedLink ? <Check className="h-3.5 w-3.5 text-emerald-400" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedLink ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
            </div>

            {/* Color Palette List */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                  Brand Color Palette
                </label>
                <button
                  type="button"
                  onClick={handleCopyAllColors}
                  className="text-[10px] font-semibold text-blue-600 hover:text-blue-700"
                >
                  {copiedAllColors ? 'Copied all!' : 'Copy all hex'}
                </button>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {Object.entries(currentSite.colors).map(([key, hex]) => (
                  <button
                    key={key}
                    type="button"
                    onClick={() => handleCopyColor(hex)}
                    className="flex flex-col items-center p-2 rounded-xl border border-gray-100 bg-gray-50/70 hover:bg-gray-100 transition group"
                  >
                    <div
                      className="w-6 h-6 rounded-full border border-white shadow-xs mb-1 group-hover:scale-110 transition"
                      style={{ backgroundColor: hex }}
                    />
                    <span className="text-[9px] font-bold text-gray-700 uppercase">{key}</span>
                    <span className="text-[10px] text-gray-500 font-mono">{hex}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Template Specs */}
            <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
              <span>Style: <strong className="text-gray-800">{currentSite.style}</strong></span>
              {currentSite.marketLabel && (
                <span>Market: <strong className="text-gray-800">{currentSite.marketLabel}</strong></span>
              )}
              <span>Status: <strong className="text-emerald-700 uppercase text-[10px]">Production Ready</strong></span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
