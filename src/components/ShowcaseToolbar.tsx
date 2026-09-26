import React, { useState, useEffect, useMemo } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { allWebsites, WebsiteDesign } from '../data/websites'
import { prefetchRoute } from '../utils/routePrefetch'
import { useFavorites } from '../utils/favorites'
import { useEventListener } from '../hooks/useEventListener'
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
  QrCode,
  Eye,
  Palette,
  RotateCcw,
  Plus,
  Trash2,
  Edit3,
  Sparkles,
  Globe,
  Wand2,
  Layers,
  Sun,
  Moon,
  Laptop,
  Paintbrush
} from 'lucide-react'
import { 
  useThemeAccent, 
  CustomTheme, 
  generateHarmoniousPalette,
  QUICK_BRAND_COLORS,
  BACKGROUND_PRESETS,
  ThemeScope,
  ThemeMood,
  ThemeBgMode 
} from '../utils/themeAccent'

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

  // Keyboard navigation shortcuts: [ prev, ] next, F favorite, D device mode, S shortlist
  useEventListener('keydown', (e: KeyboardEvent) => {
    const tag = (e.target as HTMLElement)?.tagName?.toLowerCase()
    if (tag === 'input' || tag === 'textarea' || (e.target as HTMLElement)?.isContentEditable) {
      return
    }

    if (e.metaKey || e.ctrlKey || e.altKey) {
      return
    }

    if (e.key === '[' && prevSite) {
      e.preventDefault()
      navigate(getSiteRoute(prevSite))
    } else if (e.key === ']' && nextSite) {
      e.preventDefault()
      navigate(getSiteRoute(nextSite))
    } else if (e.key.toLowerCase() === 'f') {
      e.preventDefault()
      toggle()
    } else if (e.key.toLowerCase() === 's' && onOpenShortlist) {
      e.preventDefault()
      onOpenShortlist()
    } else if (e.key.toLowerCase() === 'd' && onDeviceModeChange) {
      e.preventDefault()
      const nextMode: DeviceMode =
        deviceMode === 'desktop' ? 'tablet' : deviceMode === 'tablet' ? 'mobile' : 'desktop'
      onDeviceModeChange(nextMode)
    } else if (e.key.toLowerCase() === 't') {
      e.preventDefault()
      setIsThemeOpen((prev) => !prev)
      setIsShareOpen(false)
    } else if (e.key.toLowerCase() === 'm') {
      e.preventDefault()
      toggleThemeMood()
    }
  })

  const {
    themeScope,
    setThemeScope,
    themeMood,
    setThemeMood,
    effectiveMood,
    toggleThemeMood,
    themeBgMode,
    setThemeBgMode,
    customBg,
    setCustomBg,
    activePresetId,
    currentPreset,
    customPrimary,
    customThemes,
    activeCustomTheme,
    isOriginal,
    setPreset,
    setCustomColor,
    setActiveCustomTheme,
    createOrUpdateCustomTheme,
    removeCustomTheme,
    resetTheme,
    presets,
    quickBrandColors,
    backgroundPresets,
  } = useThemeAccent(pathname)

  const [isThemeOpen, setIsThemeOpen] = useState(false)
  const [themeTab, setThemeTab] = useState<'presets' | 'brand' | 'custom' | 'creator'>('presets')
  const [copiedThemeTokens, setCopiedThemeTokens] = useState(false)

  // Quick brand custom color picker state
  const [quickHexInput, setQuickHexInput] = useState<string>(() => customPrimary || '#6366f1')
  // Custom background color picker state
  const [bgHexInput, setBgHexInput] = useState<string>(() => customBg || '#090a0f')

  useEffect(() => {
    if (customPrimary) {
      setQuickHexInput(customPrimary)
    }
  }, [customPrimary])

  useEffect(() => {
    if (customBg) {
      setBgHexInput(customBg)
    }
  }, [customBg])

  const handleApplyCustomBg = (hex: string) => {
    setBgHexInput(hex)
    setCustomBg(hex)
  }

  const quickHarmonyPreview = useMemo(() => {
    try {
      return generateHarmoniousPalette(quickHexInput)
    } catch {
      return generateHarmoniousPalette('#6366f1')
    }
  }, [quickHexInput])

  const handleApplyQuickColor = (hex: string) => {
    setQuickHexInput(hex)
    setCustomColor(hex)
  }

  // Custom Theme Creator / Editor state
  const [editingThemeId, setEditingThemeId] = useState<string | null>(null)
  const [creatorName, setCreatorName] = useState('')
  const [creatorColors, setCreatorColors] = useState<string[]>(['#6366f1', '#ec4899', '#06b6d4'])

  const handleStartCreateTheme = () => {
    setEditingThemeId(null)
    setCreatorName('')
    setCreatorColors(['#6366f1', '#ec4899', '#06b6d4'])
    setThemeTab('creator')
  }

  const handleStartEditTheme = (theme: CustomTheme, e: React.MouseEvent) => {
    e.stopPropagation()
    setEditingThemeId(theme.id)
    setCreatorName(theme.name)
    setCreatorColors([...theme.colors])
    setThemeTab('creator')
  }

  const handleAddCreatorColor = () => {
    const paletteOptions = ['#f59e0b', '#10b981', '#3b82f6', '#8b5cf6', '#f43f5e', '#06b6d4', '#14b8a6']
    const nextCol = paletteOptions.find((c) => !creatorColors.includes(c)) || '#f59e0b'
    setCreatorColors((prev) => [...prev, nextCol])
  }

  const handleUpdateCreatorColor = (index: number, val: string) => {
    setCreatorColors((prev) => {
      const next = [...prev]
      next[index] = val
      return next
    })
  }

  const handleRemoveCreatorColor = (index: number) => {
    if (creatorColors.length <= 2) return
    setCreatorColors((prev) => prev.filter((_, i) => i !== index))
  }

  const handleApplyPaletteTemplate = (template: { name: string; colors: string[] }) => {
    setCreatorName(template.name)
    setCreatorColors([...template.colors])
  }

  const handleSaveTheme = (e: React.FormEvent) => {
    e.preventDefault()
    if (creatorColors.length < 2) return
    const name = creatorName.trim() || `Custom Palette ${customThemes.length + 1}`
    createOrUpdateCustomTheme({
      id: editingThemeId || undefined,
      name,
      colors: creatorColors,
    })
    setThemeTab('custom')
  }

  const handleCopyThemeTokens = () => {
    if (activeCustomTheme) {
      const cssLines = [
        `:root {`,
        ...activeCustomTheme.colors.map((c, i) => `  --color-${i + 1}: ${c};`),
        `  --color-primary: ${activeCustomTheme.colors[0]};`,
        `  --color-accent: ${activeCustomTheme.colors[1] || activeCustomTheme.colors[0]};`,
        ...(activeCustomTheme.colors[2] ? [`  --color-tertiary: ${activeCustomTheme.colors[2]};`] : []),
        `  --theme-gradient: linear-gradient(135deg, ${activeCustomTheme.colors.join(', ')});`,
        `}`
      ]
      navigator.clipboard.writeText(cssLines.join('\n')).catch(() => {})
    } else {
      const primary = customPrimary || currentPreset.primary || currentSite?.colors.primary || '#06b6d4'
      const secondary = currentPreset.secondary || currentSite?.colors.accent || '#a855f7'
      const css = `:root {\n  --color-primary: ${primary};\n  --color-accent: ${secondary};\n  --theme-gradient: linear-gradient(135deg, ${primary}, ${secondary});\n}`
      navigator.clipboard.writeText(css).catch(() => {})
    }
    setCopiedThemeTokens(true)
    setTimeout(() => setCopiedThemeTokens(false), 2000)
  }


  const [isShareOpen, setIsShareOpen] = useState(false)
  const [shareTab, setShareTab] = useState<'specs' | 'qr' | 'embed'>('specs')
  const [copiedLink, setCopiedLink] = useState(false)
  const [copiedEmbed, setCopiedEmbed] = useState(false)
  const [copiedAllColors, setCopiedAllColors] = useState(false)
  const [copiedTailwind, setCopiedTailwind] = useState(false)
  const [copiedCss, setCopiedCss] = useState(false)

  const handleCopyColor = (color: string) => {
    navigator.clipboard.writeText(color).catch(() => {})
    setCopiedColor(color)
    setTimeout(() => setCopiedColor(null), 1800)
  }

  const getTemplateShareUrl = () => {
    if (typeof window === 'undefined' || !currentSite) return ''
    const url = new URL(window.location.origin + getSiteRoute(currentSite))
    if (deviceMode && deviceMode !== 'desktop') {
      url.searchParams.set('device', deviceMode)
    }
    return url.toString()
  }

  const handleCopyShareLink = () => {
    const shareUrl = getTemplateShareUrl()
    navigator.clipboard.writeText(shareUrl).catch(() => {})
    setCopiedLink(true)
    setTimeout(() => setCopiedLink(false), 2000)
  }

  const handleCopyEmbedCode = () => {
    const shareUrl = getTemplateShareUrl()
    const embedCode = `<iframe src="${shareUrl}" width="100%" height="800" frameborder="0" allowfullscreen style="border:none;border-radius:16px;box-shadow:0 20px 40px rgba(0,0,0,0.15)"></iframe>`
    navigator.clipboard.writeText(embedCode).catch(() => {})
    setCopiedEmbed(true)
    setTimeout(() => setCopiedEmbed(false), 2000)
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

  const handleCopyTailwind = () => {
    if (!currentSite) return
    const obj = JSON.stringify({ colors: currentSite.colors }, null, 2)
    navigator.clipboard.writeText(obj).catch(() => {})
    setCopiedTailwind(true)
    setTimeout(() => setCopiedTailwind(false), 2000)
  }

  const handleCopyCssVars = () => {
    if (!currentSite) return
    const css = Object.entries(currentSite.colors)
      .map(([name, hex]) => `--color-${name}: ${hex};`)
      .join('\n')
    navigator.clipboard.writeText(css).catch(() => {})
    setCopiedCss(true)
    setTimeout(() => setCopiedCss(false), 2000)
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
            title={isFavorited ? 'Remove from shortlist (F)' : 'Save to shortlist (F)'}
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
            <kbd className="hidden xl:inline rounded border border-gray-200 bg-gray-50 px-1 text-[9px] font-mono text-gray-400">
              F
            </kbd>
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
              title={`Previous: ${prevSite.title} ([)`}
              className="flex items-center gap-1 rounded-full p-1.5 sm:px-2.5 sm:py-1 text-gray-700 hover:bg-gray-100 transition font-semibold"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="hidden xl:inline">Prev</span>
              <kbd className="hidden xl:inline rounded border border-gray-200 bg-gray-50 px-1 text-[9px] font-mono text-gray-400">
                [
              </kbd>
            </button>
          )}

          {nextSite && (
            <button
              type="button"
              onClick={() => navigate(getSiteRoute(nextSite))}
              onMouseEnter={() => prefetchRoute(getSiteRoute(nextSite))}
              title={`Next: ${nextSite.title} (])`}
              className="flex items-center gap-1 rounded-full p-1.5 sm:px-2.5 sm:py-1 text-gray-700 hover:bg-gray-100 transition font-semibold"
            >
              <span className="hidden xl:inline">Next</span>
              <kbd className="hidden xl:inline rounded border border-gray-200 bg-gray-50 px-1 text-[9px] font-mono text-gray-400">
                ]
              </kbd>
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

        {/* Theme Accent Tuner Trigger */}
        <button
          type="button"
          onClick={() => {
            setIsThemeOpen((prev) => !prev)
            if (isShareOpen) setIsShareOpen(false)
          }}
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 font-bold transition ${
            isThemeOpen
              ? 'bg-purple-600 text-white shadow-md'
              : !isOriginal
              ? 'bg-purple-50 text-purple-700 border border-purple-200 shadow-xs'
              : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
          }`}
          title="Theme Accent Tuner (T)"
        >
          <Palette className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Theme</span>
          {!isOriginal && (
            <span
              className="w-2.5 h-2.5 rounded-full ring-1 ring-white shrink-0"
              style={{ background: currentPreset.gradient || currentPreset.primary || '#a855f7' }}
            />
          )}
          <kbd className="hidden xl:inline rounded border border-gray-200 bg-gray-50 px-1 text-[9px] font-mono text-gray-400">
            T
          </kbd>
        </button>

        {/* Quick Dark/Light Mood Toggle Button */}
        <button
          type="button"
          onClick={toggleThemeMood}
          className={`flex items-center gap-1.5 rounded-full px-2.5 py-1.5 font-bold transition ${
            effectiveMood === 'dark'
              ? 'bg-slate-900 text-amber-300 hover:bg-slate-800 border border-slate-700/80 shadow-xs'
              : 'bg-amber-50 text-amber-900 hover:bg-amber-100 border border-amber-300/80 shadow-xs'
          }`}
          title={`Switch to ${effectiveMood === 'dark' ? 'Light' : 'Dark'} Mode (M)`}
        >
          {effectiveMood === 'dark' ? (
            <Moon className="h-3.5 w-3.5 text-amber-300 fill-amber-300/40" />
          ) : (
            <Sun className="h-3.5 w-3.5 text-amber-600 fill-amber-500/30" />
          )}
          <span className="hidden md:inline capitalize">{effectiveMood}</span>
          <kbd className="hidden xl:inline rounded border border-current/20 bg-black/5 px-1 text-[9px] font-mono opacity-60">
            M
          </kbd>
        </button>

        {/* Share & Specs Trigger */}
        <button
          type="button"
          onClick={() => {
            setIsShareOpen((prev) => !prev)
            if (isThemeOpen) setIsThemeOpen(false)
          }}
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

          {/* Modal Tabs Header */}
          <div className="flex items-center gap-1.5 mt-3 border-b border-gray-100 pb-2">
            <button
              type="button"
              onClick={() => setShareTab('specs')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-[11px] transition ${
                shareTab === 'specs'
                  ? 'bg-blue-50 text-blue-600 border border-blue-200/80 shadow-xs'
                  : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <SlidersHorizontal className="h-3 w-3" />
              <span>Specs & Link</span>
            </button>
            <button
              type="button"
              onClick={() => setShareTab('qr')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-[11px] transition ${
                shareTab === 'qr'
                  ? 'bg-purple-50 text-purple-600 border border-purple-200/80 shadow-xs'
                  : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <QrCode className="h-3 w-3" />
              <span>Mobile QR Scan</span>
            </button>
            <button
              type="button"
              onClick={() => setShareTab('embed')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-[11px] transition ${
                shareTab === 'embed'
                  ? 'bg-emerald-50 text-emerald-600 border border-emerald-200/80 shadow-xs'
                  : 'text-gray-500 hover:text-gray-800 hover:bg-gray-100'
              }`}
            >
              <Code2 className="h-3 w-3" />
              <span>Embed Iframe</span>
            </button>
          </div>

          {/* TAB 1: Specs & Link */}
          {shareTab === 'specs' && (
            <div className="mt-3.5 space-y-3 animate-in fade-in duration-100">
              <div>
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                  Shareable Link {deviceMode !== 'desktop' && `(${deviceMode} view)`}
                </label>
                <div className="flex items-center gap-2">
                  <input
                    readOnly
                    value={getTemplateShareUrl()}
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
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={handleCopyAllColors}
                      className="text-[10px] font-semibold text-blue-600 hover:text-blue-700"
                    >
                      {copiedAllColors ? 'Copied all!' : 'Hex list'}
                    </button>
                    <span className="text-gray-300">•</span>
                    <button
                      type="button"
                      onClick={handleCopyCssVars}
                      className="text-[10px] font-semibold text-blue-600 hover:text-blue-700"
                    >
                      {copiedCss ? 'Copied CSS!' : 'CSS vars'}
                    </button>
                    <span className="text-gray-300">•</span>
                    <button
                      type="button"
                      onClick={handleCopyTailwind}
                      className="text-[10px] font-semibold text-blue-600 hover:text-blue-700"
                    >
                      {copiedTailwind ? 'Copied JSON!' : 'Tailwind'}
                    </button>
                  </div>
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

              {/* Keyboard Shortcuts Cheatsheet */}
              <div className="pt-2 border-t border-gray-100">
                <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1.5">
                  Keyboard Shortcuts
                </label>
                <div className="grid grid-cols-3 gap-1.5 text-[11px] text-gray-600">
                  <div className="flex items-center gap-1.5">
                    <kbd className="rounded border border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-gray-700">
                      [ / ]
                    </kbd>
                    <span>Prev / Next</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <kbd className="rounded border border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-gray-700">
                      D
                    </kbd>
                    <span>Device frame</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <kbd className="rounded border border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-gray-700">
                      F
                    </kbd>
                    <span>Shortlist</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <kbd className="rounded border border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-gray-700">
                      S
                    </kbd>
                    <span>Shortlist list</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <kbd className="rounded border border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-gray-700">
                      T
                    </kbd>
                    <span>Theme</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <kbd className="rounded border border-gray-200 bg-gray-100 px-1.5 py-0.5 font-mono text-[10px] font-bold text-gray-700">
                      Ctrl+K
                    </kbd>
                    <span>Search</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: Mobile QR Scan */}
          {shareTab === 'qr' && (
            <div className="mt-3.5 space-y-3 text-center animate-in fade-in duration-100">
              <p className="text-[11px] text-gray-600">
                Scan this QR code with your iPhone or Android camera to preview this design on real hardware.
              </p>
              <div className="inline-block p-3 rounded-2xl bg-white border border-gray-200 shadow-md">
                <img
                  src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(
                    getTemplateShareUrl()
                  )}&color=09090b`}
                  alt={`QR Code for ${currentSite.title}`}
                  className="w-40 h-40 mx-auto rounded-lg"
                  loading="lazy"
                />
              </div>
              <div className="flex items-center justify-center gap-2 pt-1">
                <button
                  type="button"
                  onClick={handleCopyShareLink}
                  className="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-bold text-gray-700 hover:bg-gray-100 transition"
                >
                  {copiedLink ? <Check className="h-3.5 w-3.5 text-emerald-500" /> : <Copy className="h-3.5 w-3.5 text-gray-500" />}
                  <span>{copiedLink ? 'Copied link' : 'Copy mobile URL'}</span>
                </button>
                <a
                  href={getTemplateShareUrl()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-lg bg-purple-600 px-3 py-1.5 text-xs font-bold text-white hover:bg-purple-700 transition"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>Open tab</span>
                </a>
              </div>
            </div>
          )}

          {/* TAB 3: Embed Iframe */}
          {shareTab === 'embed' && (
            <div className="mt-3.5 space-y-3 animate-in fade-in duration-100">
              <p className="text-[11px] text-gray-600">
                Embed this live interactive template directly into client proposals, Notion, Webflow, or documentation:
              </p>
              <div className="relative rounded-xl border border-gray-200 bg-gray-900 p-3 text-emerald-400 font-mono text-[11px] leading-relaxed break-all">
                <code>
                  {`<iframe src="${getTemplateShareUrl()}" width="100%" height="800" frameborder="0" allowfullscreen style="border:none;border-radius:16px;box-shadow:0 20px 40px rgba(0,0,0,0.15)"></iframe>`}
                </code>
              </div>
              <div className="flex items-center justify-between pt-1">
                <span className="text-[10px] text-gray-400">Responsive iframe with rounded shadow frame</span>
                <button
                  type="button"
                  onClick={handleCopyEmbedCode}
                  className="flex items-center gap-1.5 rounded-lg bg-emerald-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-emerald-700 transition active:scale-95"
                >
                  {copiedEmbed ? <Check className="h-3.5 w-3.5 text-white" /> : <Copy className="h-3.5 w-3.5" />}
                  <span>{copiedEmbed ? 'Embed Code Copied!' : 'Copy Embed Code'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Theme Accent Tuner Modal Popover */}
      {isThemeOpen && (
        <div className="pointer-events-auto fixed bottom-20 left-1/2 -translate-x-1/2 z-[75] w-[96vw] max-w-xl rounded-2xl border border-gray-200/90 bg-white/95 p-5 shadow-2xl backdrop-blur-2xl text-xs animate-in fade-in zoom-in-95 duration-150 max-h-[85vh] flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between pb-3 border-b border-gray-100 shrink-0">
            {themeTab === 'creator' ? (
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setThemeTab('custom')}
                  className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition"
                  title="Back to theme list"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <div>
                  <h3 className="font-extrabold text-sm text-gray-900 flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-purple-600" />
                    <span>{editingThemeId ? 'Edit Multi-Color Palette' : 'Palette Harmonizer Studio'}</span>
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-0.5">
                    Combine 2 to 6 colors to create an advanced multi-stop brand gradient.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <div className="flex items-center gap-2">
                  <div className="p-1 rounded-lg bg-purple-100 text-purple-700">
                    <Palette className="h-4 w-4" />
                  </div>
                  <div>
                    <h3 className="font-extrabold text-sm text-gray-900 flex items-center gap-2">
                      <span>Theme Accent Studio</span>
                      {!isOriginal && (
                        <span className="rounded-full bg-purple-100 text-purple-700 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wide">
                          {currentPreset.name}
                        </span>
                      )}
                    </h3>
                    <p className="text-[11px] text-gray-500 mt-0.5">
                      Change template colors effectively with real CSS variables and zero image distortion.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <div className="flex items-center gap-1.5">
              {!isOriginal && themeTab !== 'creator' && (
                <button
                  type="button"
                  onClick={resetTheme}
                  title="Reset to author original palette"
                  className="flex items-center gap-1 rounded-xl bg-gray-100 hover:bg-rose-50 hover:text-rose-600 px-2.5 py-1.5 text-[11px] font-bold text-gray-600 transition"
                >
                  <RotateCcw className="h-3 w-3" />
                  <span>Reset to Original</span>
                </button>
              )}
              <button
                type="button"
                onClick={() => setIsThemeOpen(false)}
                className="rounded-full p-1 text-gray-400 hover:bg-gray-100 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Scope Selector: This Page Only vs Global (All 100 Pages) */}
          {themeTab !== 'creator' && (
            <div className="mt-3 flex items-center justify-between p-2 rounded-xl bg-purple-50/60 border border-purple-100 shrink-0">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-purple-950">
                <Globe className="h-3.5 w-3.5 text-purple-600" />
                <span>Theme Scope:</span>
                <span className="text-[10px] text-purple-700/80 font-normal hidden sm:inline">
                  {themeScope === 'global' ? 'Applies across all 100 templates' : 'Applies to this template only'}
                </span>
              </div>
              <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-purple-200/80 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setThemeScope('page')}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold transition ${
                    themeScope === 'page'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  This Page Only
                </button>
                <button
                  type="button"
                  onClick={() => setThemeScope('global')}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold transition ${
                    themeScope === 'global'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  All 100 Pages
                </button>
              </div>
            </div>
          )}

          {/* Theme Mood Selector: Light vs Dark vs System */}
          {themeTab !== 'creator' && (
            <div className="mt-2.5 flex items-center justify-between p-2 rounded-xl bg-amber-50/50 border border-amber-100 shrink-0">
              <div className="flex items-center gap-1.5 text-[11px] font-bold text-amber-950">
                {effectiveMood === 'dark' ? (
                  <Moon className="h-3.5 w-3.5 text-amber-600 fill-amber-500/30" />
                ) : (
                  <Sun className="h-3.5 w-3.5 text-amber-600 fill-amber-500/30" />
                )}
                <span>Theme Mood:</span>
                <span className="text-[10px] text-amber-800/80 font-normal hidden sm:inline">
                  {themeMood === 'system'
                    ? `Auto (system prefers ${effectiveMood})`
                    : `${themeMood === 'dark' ? 'Dark' : 'Light'} appearance`}
                </span>
              </div>
              <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-amber-200/80 shadow-2xs">
                <button
                  type="button"
                  onClick={() => setThemeMood('light')}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold transition flex items-center gap-1 ${
                    themeMood === 'light'
                      ? 'bg-amber-500 text-white shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Sun className="h-3 w-3" />
                  <span>Light</span>
                </button>
                <button
                  type="button"
                  onClick={() => setThemeMood('dark')}
                  className={`px-2.5 py-1 rounded-md text-[10px] font-extrabold transition flex items-center gap-1 ${
                    themeMood === 'dark'
                      ? 'bg-slate-900 text-amber-300 shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Moon className="h-3 w-3" />
                  <span>Dark</span>
                </button>
                <button
                  type="button"
                  onClick={() => setThemeMood('system')}
                  className={`px-2 py-1 rounded-md text-[10px] font-extrabold transition flex items-center gap-1 ${
                    themeMood === 'system'
                      ? 'bg-purple-600 text-white shadow-xs'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  title="Follow your system OS preference"
                >
                  <Laptop className="h-3 w-3" />
                  <span>System</span>
                </button>
              </div>
            </div>
          )}

          {/* Canvas Background Mode Selector */}
          {themeTab !== 'creator' && (
            <div className="mt-2 space-y-2 p-2 rounded-xl bg-gray-50/90 border border-gray-200/80 shrink-0">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-[11px] font-bold text-gray-800">
                  <span className="text-xs">🌌</span>
                  <span>Canvas Background:</span>
                  <span className="text-[10px] text-gray-500 font-normal hidden sm:inline">
                    {themeBgMode === 'custom'
                      ? 'Custom background tint'
                      : themeBgMode === 'immersive'
                      ? 'Themed palette background'
                      : 'Neutral canvas'}
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-white p-0.5 rounded-lg border border-gray-200 shadow-2xs">
                  <button
                    type="button"
                    onClick={() => setThemeBgMode('immersive')}
                    title="Full immersive theme: page backgrounds adapt to the active preset palette"
                    className={`px-2 py-1 rounded-md text-[10px] font-extrabold transition flex items-center gap-1 ${
                      themeBgMode === 'immersive'
                        ? 'bg-purple-600 text-white shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span>Themed</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setThemeBgMode('neutral')}
                    title="Neutral canvas: keep a clean neutral dark or light surface"
                    className={`px-2 py-1 rounded-md text-[10px] font-extrabold transition flex items-center gap-1 ${
                      themeBgMode === 'neutral'
                        ? 'bg-purple-600 text-white shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span>Neutral</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setThemeBgMode('custom')
                      if (!customBg) {
                        handleApplyCustomBg(effectiveMood === 'dark' ? '#090a0f' : '#f6efe5')
                      }
                    }}
                    title="Custom background: pick any custom background color"
                    className={`px-2 py-1 rounded-md text-[10px] font-extrabold transition flex items-center gap-1 ${
                      themeBgMode === 'custom'
                        ? 'bg-purple-600 text-white shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Paintbrush className="h-3 w-3" />
                    <span>Custom</span>
                  </button>
                </div>
              </div>

              {/* Custom Background Color Palette Drawer */}
              {themeBgMode === 'custom' && (
                <div className="pt-2 border-t border-gray-200/80 space-y-2 animate-in fade-in slide-in-from-top-1 duration-150">
                  <div className="flex items-center justify-between text-[10px] text-gray-500 font-bold uppercase tracking-wider">
                    <span>Curated Backgrounds</span>
                    <span className="font-mono text-[9px] text-gray-400">{bgHexInput}</span>
                  </div>

                  {/* Swatches */}
                  <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5">
                    {backgroundPresets.map((bg) => {
                      const isSelected = customBg?.toLowerCase() === bg.hex.toLowerCase()
                      return (
                        <button
                          key={bg.id}
                          type="button"
                          onClick={() => handleApplyCustomBg(bg.hex)}
                          title={`${bg.name} (${bg.hex})`}
                          className={`group relative flex flex-col items-center p-1 rounded-lg border transition ${
                            isSelected
                              ? 'border-purple-600 ring-2 ring-purple-600/40 bg-white'
                              : 'border-gray-200/80 bg-white hover:border-gray-400'
                          }`}
                        >
                          <div
                            className="w-5 h-5 rounded-md border border-black/10 shadow-2xs relative flex items-center justify-center"
                            style={{ backgroundColor: bg.hex }}
                          >
                            {isSelected && <Check className="h-3 w-3 text-purple-600 drop-shadow-md stroke-[3]" />}
                          </div>
                          <span className="text-[8px] text-gray-500 font-medium truncate w-full text-center mt-0.5">
                            {bg.name.split(' ')[0]}
                          </span>
                        </button>
                      )
                    })}
                  </div>

                  {/* Custom Hex Picker Input */}
                  <div className="flex items-center gap-2 pt-1">
                    <label className="text-[10px] font-bold text-gray-600 shrink-0">Custom Hex:</label>
                    <div className="flex items-center gap-1.5 bg-white px-2 py-1 rounded-lg border border-gray-200 flex-grow shadow-2xs">
                      <input
                        type="color"
                        value={bgHexInput.startsWith('#') && bgHexInput.length === 7 ? bgHexInput : '#090a0f'}
                        onChange={(e) => handleApplyCustomBg(e.target.value)}
                        className="h-5 w-5 rounded border border-gray-300 cursor-pointer shrink-0"
                        title="Open native color picker"
                      />
                      <input
                        type="text"
                        value={bgHexInput}
                        onChange={(e) => {
                          const val = e.target.value
                          setBgHexInput(val)
                          if (/^#[0-9A-Fa-f]{6}$/.test(val)) {
                            setCustomBg(val)
                          }
                        }}
                        placeholder="#090a0f"
                        className="w-full text-xs font-mono font-bold text-gray-800 bg-transparent focus:outline-none"
                      />
                    </div>
                    {customBg && (
                      <button
                        type="button"
                        onClick={() => {
                          setCustomBg(null)
                          setThemeBgMode('immersive')
                        }}
                        className="text-[10px] text-gray-500 hover:text-gray-800 px-2 py-1 rounded-lg hover:bg-gray-100 transition shrink-0"
                      >
                        Reset Bg
                      </button>
                    )}
                  </div>
                </div>
              )}
            </div>
          )}

          {/* CREATOR VIEW */}
          {themeTab === 'creator' ? (
            <form onSubmit={handleSaveTheme} className="flex flex-col flex-grow overflow-hidden mt-3">
              <div className="overflow-y-auto pr-1 space-y-3.5 flex-grow max-h-[58vh]">
                {/* Theme Name */}
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-1">
                    Theme Name
                  </label>
                  <input
                    type="text"
                    required
                    value={creatorName}
                    onChange={(e) => setCreatorName(e.target.value)}
                    placeholder="e.g. Cyber Sunset, Nordic Frost, Neon Oasis..."
                    className="w-full rounded-xl border border-gray-200 bg-gray-50/80 px-3 py-2 text-xs font-semibold text-gray-800 focus:bg-white focus:border-purple-500 focus:outline-none transition"
                  />
                </div>

                {/* Quick Inspiration Presets */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 flex items-center gap-1">
                      <Sparkles className="h-3 w-3 text-amber-500" />
                      <span>Quick Harmonies</span>
                    </span>
                    <span className="text-[10px] text-gray-400">Click to apply palette</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {[
                      { name: 'Cosmic Aurora', colors: ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b'] },
                      { name: 'Sunset Horizon', colors: ['#f43f5e', '#fb923c', '#facc15'] },
                      { name: 'Nordic Frost', colors: ['#0d9488', '#06b6d4', '#6366f1'] },
                      { name: 'Cyber Synth', colors: ['#06b6d4', '#ec4899', '#8b5cf6', '#3b82f6'] },
                      { name: 'Emerald Luxe', colors: ['#059669', '#10b981', '#f59e0b'] },
                    ].map((template) => (
                      <button
                        key={template.name}
                        type="button"
                        onClick={() => handleApplyPaletteTemplate(template)}
                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-gray-200 bg-gray-50/70 hover:bg-purple-50 hover:border-purple-200 transition text-[11px] font-semibold text-gray-700"
                      >
                        <div className="flex items-center -space-x-1">
                          {template.colors.map((c, i) => (
                            <div
                              key={i}
                              className="w-2.5 h-2.5 rounded-full border border-white shadow-xs"
                              style={{ backgroundColor: c }}
                            />
                          ))}
                        </div>
                        <span>{template.name}</span>
                        <span className="text-[9px] text-gray-400 font-mono">({template.colors.length})</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Dynamic Color Slots Section */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                        Palette Colors ({creatorColors.length})
                      </span>
                      <span className="text-[10px] text-gray-500">
                        At least 2 colors required. Add as many colors as you want!
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleAddCreatorColor}
                      className="flex items-center gap-1 rounded-lg bg-purple-50 px-2.5 py-1 text-[11px] font-bold text-purple-700 hover:bg-purple-100 border border-purple-200/80 transition active:scale-95"
                    >
                      <Plus className="h-3 w-3" />
                      <span>Add Color</span>
                    </button>
                  </div>

                  <div className="space-y-2">
                    {creatorColors.map((col, index) => {
                      const roleLabel =
                        index === 0
                          ? 'Color 1 (Primary Base)'
                          : index === 1
                          ? 'Color 2 (Accent / Secondary)'
                          : index === 2
                          ? 'Color 3 (Highlight / Glow)'
                          : index === 3
                          ? 'Color 4 (Quaternary)'
                          : `Color ${index + 1}`

                      return (
                        <div
                          key={index}
                          className="flex items-center justify-between gap-2 p-2 rounded-xl border border-gray-200/80 bg-gray-50/50 hover:bg-gray-50 transition"
                        >
                          <div className="flex items-center gap-2.5 flex-grow min-w-0">
                            <input
                              type="color"
                              value={col}
                              onChange={(e) => handleUpdateCreatorColor(index, e.target.value)}
                              className="w-8 h-8 rounded-lg cursor-pointer border border-gray-200 p-0.5 bg-white shadow-xs shrink-0"
                            />
                            <div className="flex-grow min-w-0">
                              <span className="text-[10px] font-bold text-gray-600 truncate block">
                                {roleLabel}
                              </span>
                              <input
                                type="text"
                                value={col}
                                onChange={(e) => {
                                  let val = e.target.value
                                  if (!val.startsWith('#') && val.length > 0) val = '#' + val
                                  handleUpdateCreatorColor(index, val)
                                }}
                                maxLength={7}
                                className="w-24 rounded border border-gray-200 bg-white px-2 py-0.5 text-[11px] font-mono text-gray-800 focus:outline-purple-500 uppercase"
                              />
                            </div>
                          </div>

                          {creatorColors.length > 2 ? (
                            <button
                              type="button"
                              onClick={() => handleRemoveCreatorColor(index)}
                              title="Remove this color slot"
                              className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition"
                            >
                              <Trash2 className="h-3.5 w-3.5" />
                            </button>
                          ) : (
                            <span className="text-[9px] text-gray-300 px-1 font-semibold">Min 2</span>
                          )}
                        </div>
                      )
                    })}
                  </div>
                </div>

                {/* Live Dynamic Preview */}
                <div className="p-3 rounded-xl border border-purple-100 bg-gradient-to-br from-purple-50/40 via-white to-indigo-50/40 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-bold uppercase text-gray-500">
                    <span>Live Theme Blend Preview</span>
                    <span>{creatorColors.length} Colors</span>
                  </div>

                  <div
                    className="h-6 w-full rounded-lg shadow-inner border border-white/60 transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${creatorColors.join(', ')})`,
                    }}
                  />

                  <div className="flex items-center gap-1.5 flex-wrap pt-1">
                    {creatorColors.map((c, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-1 bg-white px-2 py-0.5 rounded-md border border-gray-200 shadow-2xs text-[10px] font-mono text-gray-700"
                      >
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Creator Footer Actions */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-end gap-2 shrink-0">
                <button
                  type="button"
                  onClick={() => setThemeTab('custom')}
                  className="rounded-xl px-3.5 py-2 font-bold text-gray-600 hover:bg-gray-100 transition text-xs"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 px-4 py-2 font-bold text-white shadow-md transition active:scale-95 text-xs"
                >
                  <Check className="h-3.5 w-3.5" />
                  <span>Save & Apply Theme</span>
                </button>
              </div>
            </form>
          ) : (
            /* MAIN THEME TUNER VIEW */
            <div className="flex flex-col flex-grow overflow-hidden mt-3">
              {/* Tab Navigation */}
              <div className="flex items-center justify-between pb-2 border-b border-gray-100 shrink-0">
                <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setThemeTab('presets')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-[11px] transition ${
                      themeTab === 'presets'
                        ? 'bg-white text-purple-700 shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <SlidersHorizontal className="h-3 w-3" />
                    <span>Curated ({presets.length})</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setThemeTab('brand')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-[11px] transition ${
                      themeTab === 'brand'
                        ? 'bg-white text-purple-700 shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Wand2 className="h-3 w-3" />
                    <span>Brand Accent</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setThemeTab('custom')}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-[11px] transition ${
                      themeTab === 'custom'
                        ? 'bg-white text-purple-700 shadow-xs'
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <Layers className="h-3 w-3" />
                    <span>Palettes ({customThemes.length})</span>
                  </button>
                </div>

                {themeTab === 'custom' && (
                  <button
                    type="button"
                    onClick={handleStartCreateTheme}
                    className="flex items-center gap-1 rounded-xl bg-purple-600 hover:bg-purple-700 px-3 py-1.5 text-[11px] font-bold text-white shadow-xs transition active:scale-95"
                  >
                    <Plus className="h-3 w-3" />
                    <span>New Palette</span>
                  </button>
                )}
              </div>

              {/* Tab Content Body */}
              <div className="overflow-y-auto pr-1 py-3 space-y-3 flex-grow max-h-[55vh]">
                {/* TAB 1: CURATED PRESETS */}
                {themeTab === 'presets' && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {presets.map((preset) => {
                      const isSelected = activePresetId === preset.id && !customPrimary
                      const isOriginalPreset = preset.id === 'original'

                      return (
                        <button
                          key={preset.id}
                          type="button"
                          onClick={() => setPreset(preset.id)}
                          className={`relative flex flex-col p-3 rounded-2xl border text-left transition group ${
                            isSelected
                              ? 'border-purple-600 bg-purple-50/70 shadow-sm ring-1 ring-purple-600'
                              : 'border-gray-200 bg-white hover:bg-gray-50/80 hover:border-gray-300'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-2">
                              {isOriginalPreset ? (
                                <div className="flex items-center -space-x-1.5">
                                  <div
                                    className="w-4 h-4 rounded-full border border-white shadow-2xs z-10"
                                    style={{ backgroundColor: currentSite?.colors?.primary || '#182820' }}
                                  />
                                  <div
                                    className="w-4 h-4 rounded-full border border-white shadow-2xs"
                                    style={{ backgroundColor: currentSite?.colors?.accent || '#C5AC8F' }}
                                  />
                                </div>
                              ) : (
                                <div className="flex items-center -space-x-1.5">
                                  <div
                                    className="w-4 h-4 rounded-full border border-white shadow-2xs z-20"
                                    style={{ backgroundColor: preset.primary }}
                                    title={`Primary: ${preset.primary}`}
                                  />
                                  <div
                                    className="w-4 h-4 rounded-full border border-white shadow-2xs z-10"
                                    style={{ backgroundColor: preset.secondary }}
                                    title={`Secondary: ${preset.secondary}`}
                                  />
                                  <div
                                    className="w-4 h-4 rounded-full border border-white shadow-2xs"
                                    style={{ backgroundColor: preset.dark }}
                                    title={`Dark Surface: ${preset.dark}`}
                                  />
                                </div>
                              )}
                              <span className="font-extrabold text-gray-900 text-xs">
                                {preset.name}
                              </span>
                            </div>

                            {isSelected ? (
                              <span className="flex items-center gap-1 rounded-full bg-purple-600 text-white px-2 py-0.5 text-[9px] font-black">
                                <Check className="h-2.5 w-2.5" />
                                <span>Active</span>
                              </span>
                            ) : (
                              <span className="text-[10px] text-gray-400 font-medium group-hover:text-gray-600">
                                {isOriginalPreset ? 'Default' : preset.label.split('&')[0]}
                              </span>
                            )}
                          </div>

                          <p className="text-[10px] text-gray-500 leading-snug mb-2 line-clamp-2">
                            {isOriginalPreset
                              ? `Handcrafted palette designed specifically for ${currentSite?.title || 'this site'}.`
                              : preset.description}
                          </p>

                          {/* Live preview banner */}
                          <div className="mt-auto pt-1 flex items-center justify-between">
                            <span className="text-[9px] font-mono text-gray-400">
                              {isOriginalPreset ? 'Bespoke' : `${preset.primary} • ${preset.secondary}`}
                            </span>
                            {!isOriginalPreset && (
                              <span
                                className="px-2 py-0.5 rounded-full text-white text-[9px] font-bold shadow-2xs"
                                style={{ background: preset.gradient }}
                              >
                                Preview CTA
                              </span>
                            )}
                          </div>
                        </button>
                      )
                    })}
                  </div>
                )}

                {/* TAB 2: BRAND ACCENT (QUICK PICKER + HARMONY) */}
                {themeTab === 'brand' && (
                  <div className="space-y-4">
                    {/* Explanation */}
                    <div className="p-3 rounded-xl bg-blue-50/70 border border-blue-100 flex items-start gap-2.5">
                      <Wand2 className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                      <div className="text-[11px] text-blue-900">
                        <strong className="font-bold">Instant Brand Harmonizer:</strong> Pick or enter any color. The engine mathematically calculates the complementary secondary tone, glow highlights, and dark surface tints!
                      </div>
                    </div>

                    {/* Quick Swatches Grid */}
                    <div>
                      <label className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block mb-2">
                        Designer Brand Colors
                      </label>
                      <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                        {quickBrandColors.map((color) => {
                          const isPicked = quickHexInput.toLowerCase() === color.hex.toLowerCase()
                          return (
                            <button
                              key={color.hex}
                              type="button"
                              onClick={() => handleApplyQuickColor(color.hex)}
                              className={`flex flex-col items-center p-2 rounded-xl border text-center transition group ${
                                isPicked
                                  ? 'border-purple-600 bg-purple-50 ring-1 ring-purple-600'
                                  : 'border-gray-200 bg-white hover:bg-gray-50'
                              }`}
                            >
                              <div
                                className="w-6 h-6 rounded-full border border-white shadow-xs mb-1 group-hover:scale-110 transition"
                                style={{ backgroundColor: color.hex }}
                              />
                              <span className="text-[9px] font-bold text-gray-700 truncate w-full">
                                {color.label}
                              </span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Custom Hex Picker Input */}
                    <div className="p-3 rounded-xl border border-gray-200 bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                          Custom Brand Hex Code
                        </span>
                        <span className="text-[11px] text-gray-500">
                          Use the color wheel or type any hex
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <input
                          type="color"
                          value={quickHexInput}
                          onChange={(e) => handleApplyQuickColor(e.target.value)}
                          className="w-9 h-9 rounded-xl cursor-pointer border border-gray-200 p-0.5 bg-white shadow-xs"
                          title="Pick custom color"
                        />
                        <input
                          type="text"
                          value={quickHexInput}
                          onChange={(e) => {
                            let val = e.target.value
                            if (!val.startsWith('#') && val.length > 0) val = '#' + val
                            setQuickHexInput(val)
                            if (val.length === 7) {
                              setCustomColor(val)
                            }
                          }}
                          maxLength={7}
                          className="w-24 rounded-xl border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-xs font-mono font-bold text-gray-800 focus:bg-white focus:outline-purple-500 uppercase"
                        />
                        <button
                          type="button"
                          onClick={() => handleApplyQuickColor(quickHexInput)}
                          className="px-3 py-1.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-[11px] transition shadow-xs"
                        >
                          Apply
                        </button>
                      </div>
                    </div>

                    {/* Calculated Harmony Preview Box */}
                    <div className="p-3.5 rounded-xl border border-purple-200 bg-gradient-to-br from-purple-50/50 via-white to-indigo-50/50 space-y-3">
                      <div className="flex items-center justify-between text-[10px] font-bold uppercase text-gray-500">
                        <span>Calculated Palette Harmony</span>
                        <span className="text-purple-700 font-mono">{quickHarmonyPreview.primary}</span>
                      </div>

                      {/* Swatch Bar */}
                      <div className="grid grid-cols-4 gap-2">
                        <div className="p-2 rounded-lg bg-white border border-gray-200 text-center">
                          <div
                            className="w-5 h-5 rounded-full mx-auto mb-1 shadow-xs"
                            style={{ backgroundColor: quickHarmonyPreview.primary }}
                          />
                          <span className="text-[9px] font-bold text-gray-700 block">Primary</span>
                          <span className="text-[8px] text-gray-400 font-mono">{quickHarmonyPreview.primary}</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white border border-gray-200 text-center">
                          <div
                            className="w-5 h-5 rounded-full mx-auto mb-1 shadow-xs"
                            style={{ backgroundColor: quickHarmonyPreview.secondary }}
                          />
                          <span className="text-[9px] font-bold text-gray-700 block">Accent</span>
                          <span className="text-[8px] text-gray-400 font-mono">{quickHarmonyPreview.secondary}</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white border border-gray-200 text-center">
                          <div
                            className="w-5 h-5 rounded-full mx-auto mb-1 shadow-xs"
                            style={{ backgroundColor: quickHarmonyPreview.dark }}
                          />
                          <span className="text-[9px] font-bold text-gray-700 block">Dark Tint</span>
                          <span className="text-[8px] text-gray-400 font-mono">{quickHarmonyPreview.dark}</span>
                        </div>
                        <div className="p-2 rounded-lg bg-white border border-gray-200 text-center">
                          <div
                            className="w-5 h-5 rounded-full mx-auto mb-1 shadow-xs border"
                            style={{ backgroundColor: quickHarmonyPreview.glow }}
                          />
                          <span className="text-[9px] font-bold text-gray-700 block">Glow Tint</span>
                          <span className="text-[8px] text-gray-400 font-mono">38% Alpha</span>
                        </div>
                      </div>

                      {/* Interactive Sample CTA */}
                      <div className="pt-1 flex items-center justify-between">
                        <span className="text-[11px] text-gray-600 font-medium">Rendered CTA Button:</span>
                        <button
                          type="button"
                          className="px-4 py-1.5 rounded-full text-white font-bold text-xs shadow-md transition"
                          style={{
                            background: quickHarmonyPreview.gradient,
                            boxShadow: `0 4px 14px ${quickHarmonyPreview.glow}`,
                          }}
                        >
                          Launch Experience
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                {/* TAB 3: CUSTOM PALETTES */}
                {themeTab === 'custom' && (
                  <div className="space-y-2.5">
                    {customThemes.length === 0 ? (
                      <div className="text-center py-8 px-4 rounded-2xl border border-dashed border-gray-200 bg-gray-50/50">
                        <Palette className="h-8 w-8 text-gray-300 mx-auto mb-2" />
                        <h4 className="font-bold text-gray-700 text-xs">No Custom Palettes Yet</h4>
                        <p className="text-[11px] text-gray-500 mt-1 max-w-xs mx-auto">
                          Create your own bespoke multi-color combinations with 2 to 6 colors.
                        </p>
                        <button
                          type="button"
                          onClick={handleStartCreateTheme}
                          className="mt-3 inline-flex items-center gap-1.5 rounded-xl bg-purple-600 px-3.5 py-1.5 text-xs font-bold text-white hover:bg-purple-700 transition"
                        >
                          <Plus className="h-3.5 w-3.5" />
                          <span>Create First Palette</span>
                        </button>
                      </div>
                    ) : (
                      customThemes.map((theme) => {
                        const isSelected = activePresetId === theme.id
                        return (
                          <div
                            key={theme.id}
                            onClick={() => setActiveCustomTheme(theme.id)}
                            className={`group relative flex items-center justify-between p-3 rounded-2xl border cursor-pointer transition ${
                              isSelected
                                ? 'border-purple-600 bg-purple-50/70 shadow-xs ring-1 ring-purple-600'
                                : 'border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300'
                            }`}
                          >
                            <div className="flex items-center gap-3 min-w-0 flex-grow pr-2">
                              {/* Multi-color gradient pill */}
                              <div
                                className="h-8 w-14 rounded-xl shadow-inner border border-white shrink-0 flex items-center justify-center overflow-hidden"
                                style={{
                                  background: `linear-gradient(135deg, ${theme.colors.join(', ')})`,
                                }}
                              />

                              <div className="min-w-0 flex-grow">
                                <div className="flex items-center gap-1.5">
                                  <span className="font-bold text-gray-900 text-xs truncate">
                                    {theme.name}
                                  </span>
                                  <span className="rounded-full bg-purple-100 px-1.5 py-0.2 text-[9px] font-black text-purple-700">
                                    {theme.colors.length} Colors
                                  </span>
                                  {isSelected && (
                                    <span className="flex items-center gap-0.5 text-[10px] font-bold text-purple-700">
                                      <Check className="h-3 w-3" />
                                      <span>Active</span>
                                    </span>
                                  )}
                                </div>

                                {/* Swatches preview */}
                                <div className="flex items-center gap-1 mt-1">
                                  {theme.colors.map((c, i) => (
                                    <div
                                      key={i}
                                      className="w-2.5 h-2.5 rounded-full border border-white shadow-2xs shrink-0"
                                      style={{ backgroundColor: c }}
                                      title={`Color ${i + 1}: ${c}`}
                                    />
                                  ))}
                                  <span className="text-[9px] text-gray-400 font-mono ml-1 truncate">
                                    {theme.colors.slice(0, 3).join(' • ')}
                                    {theme.colors.length > 3 ? '...' : ''}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Actions */}
                            <div className="flex items-center gap-1 shrink-0">
                              <button
                                type="button"
                                onClick={(e) => handleStartEditTheme(theme, e)}
                                title="Edit theme colors & name"
                                className="p-1.5 rounded-lg text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition"
                              >
                                <Edit3 className="h-3.5 w-3.5" />
                              </button>
                              <button
                                type="button"
                                onClick={(e) => {
                                  e.stopPropagation()
                                  removeCustomTheme(theme.id)
                                }}
                                title="Delete theme"
                                className="p-1.5 rounded-lg text-gray-400 hover:text-rose-600 hover:bg-rose-50 transition"
                              >
                                <Trash2 className="h-3.5 w-3.5" />
                              </button>
                            </div>
                          </div>
                        )
                      })
                    )}
                  </div>
                )}
              </div>

              {/* Footer with CSS Variables Export */}
              <div className="pt-3 border-t border-gray-100 flex items-center justify-between shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400">
                    Live Theme:
                  </span>
                  <div className="flex items-center gap-1.5">
                    <div
                      className="w-3.5 h-3.5 rounded-full border border-white shadow-xs"
                      style={{
                        background: currentPreset.gradient || currentPreset.primary || '#06b6d4',
                      }}
                    />
                    <span className="font-bold text-gray-800 text-[11px] truncate max-w-[140px]">
                      {currentPreset.name}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyThemeTokens}
                    className="flex items-center gap-1.5 rounded-xl border border-gray-200 bg-gray-50 px-2.5 py-1.5 text-[11px] font-bold text-gray-700 hover:bg-gray-100 transition active:scale-95"
                    title="Copy full CSS custom properties for this theme"
                  >
                    {copiedThemeTokens ? (
                      <Check className="h-3 w-3 text-emerald-500" />
                    ) : (
                      <Copy className="h-3 w-3 text-gray-500" />
                    )}
                    <span>{copiedThemeTokens ? 'Copied Tokens!' : 'Copy CSS Tokens'}</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
