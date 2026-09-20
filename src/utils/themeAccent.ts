import { useState, useEffect, useCallback } from 'react'

export interface ColorThemePreset {
  id: string
  name: string
  label: string
  description: string
  primary: string
  accent: string
  dark: string
  light: string
  filterCss?: string
  imgFilterCss?: string
  colors: string[]
  gradient?: string
  isCustom?: boolean
}

export interface CustomTheme {
  id: string
  name: string
  colors: string[] // Array of 2 or more hex colors: e.g. ['#6366f1', '#ec4899', '#06b6d4']
  createdAt: number
}

export function hexToHue(hex: string): number {
  let c = hex.replace('#', '').trim()
  if (c.length === 3) {
    c = c.split('').map((x) => x + x).join('')
  }
  if (c.length !== 6) return 210
  const r = parseInt(c.substring(0, 2), 16) / 255
  const g = parseInt(c.substring(2, 4), 16) / 255
  const b = parseInt(c.substring(4, 6), 16) / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0

  if (max === min) {
    h = 0
  } else if (max === r) {
    h = ((g - b) / (max - min) + (g < b ? 6 : 0)) * 60
  } else if (max === g) {
    h = ((b - r) / (max - min) + 2) * 60
  } else {
    h = ((r - g) / (max - min) + 4) * 60
  }

  return Math.round(h)
}

export const THEME_PRESETS: ColorThemePreset[] = [
  {
    id: 'original',
    name: 'Original',
    label: 'Author Palette',
    description: 'Template default bespoke color design',
    primary: '',
    accent: '',
    dark: '',
    light: '',
    filterCss: 'none',
    imgFilterCss: 'none',
    colors: [],
    gradient: undefined,
    isCustom: false,
  },
  {
    id: 'cyberpunk',
    name: 'Cyber Neon',
    label: 'Electric Cyan & Violet',
    description: 'Futuristic high-contrast tech aesthetic',
    primary: '#06b6d4',
    accent: '#a855f7',
    dark: '#09090b',
    light: '#ecfeff',
    filterCss: 'hue-rotate(185deg) saturate(1.25)',
    imgFilterCss: 'hue-rotate(-185deg) saturate(0.8)',
    colors: ['#06b6d4', '#a855f7', '#09090b'],
    gradient: 'linear-gradient(135deg, #06b6d4, #a855f7)',
    isCustom: false,
  },
  {
    id: 'emerald',
    name: 'Emerald Luxury',
    label: 'Forest Green & Gold',
    description: 'Prestigious organic high-end aesthetic',
    primary: '#059669',
    accent: '#d97706',
    dark: '#064e3b',
    light: '#ecfdf5',
    filterCss: 'hue-rotate(95deg) saturate(1.15)',
    imgFilterCss: 'hue-rotate(-95deg) saturate(0.87)',
    colors: ['#059669', '#d97706', '#064e3b'],
    gradient: 'linear-gradient(135deg, #059669, #d97706)',
    isCustom: false,
  },
  {
    id: 'sunset',
    name: 'Sunset Crimson',
    label: 'Rose Coral & Warm Amber',
    description: 'Warm, vibrant lifestyle aesthetic',
    primary: '#f43f5e',
    accent: '#f59e0b',
    dark: '#1e1b4b',
    light: '#fff1f2',
    filterCss: 'hue-rotate(330deg) saturate(1.3)',
    imgFilterCss: 'hue-rotate(-330deg) saturate(0.77)',
    colors: ['#f43f5e', '#f59e0b', '#1e1b4b'],
    gradient: 'linear-gradient(135deg, #f43f5e, #f59e0b)',
    isCustom: false,
  },
  {
    id: 'royal',
    name: 'Royal Amethyst',
    label: 'Majestic Violet & Pink',
    description: 'Sophisticated creative and modern SaaS',
    primary: '#7c3aed',
    accent: '#ec4899',
    dark: '#0f172a',
    light: '#f5f3ff',
    filterCss: 'hue-rotate(245deg) saturate(1.25)',
    imgFilterCss: 'hue-rotate(-245deg) saturate(0.8)',
    colors: ['#7c3aed', '#ec4899', '#0f172a'],
    gradient: 'linear-gradient(135deg, #7c3aed, #ec4899)',
    isCustom: false,
  },
  {
    id: 'obsidian',
    name: 'Obsidian Slate',
    label: 'Monochrome Architectural',
    description: 'High-contrast editorial minimal',
    primary: '#0f172a',
    accent: '#64748b',
    dark: '#020617',
    light: '#f8fafc',
    filterCss: 'grayscale(0.95) contrast(1.12)',
    imgFilterCss: 'grayscale(0) contrast(1)',
    colors: ['#0f172a', '#64748b', '#020617'],
    gradient: 'linear-gradient(135deg, #0f172a, #64748b)',
    isCustom: false,
  },
]

export const STARTER_CUSTOM_THEMES: CustomTheme[] = [
  {
    id: 'custom_aurora',
    name: 'Cosmic Aurora',
    colors: ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b'],
    createdAt: 1710000000000,
  },
  {
    id: 'custom_sunset_glow',
    name: 'Sunset Glow',
    colors: ['#f43f5e', '#fb923c', '#eab308'],
    createdAt: 1710000001000,
  },
  {
    id: 'custom_cyber_synth',
    name: 'Cyber Synthwave',
    colors: ['#06b6d4', '#ec4899', '#8b5cf6', '#3b82f6'],
    createdAt: 1710000002000,
  },
]

// Global key for shared custom theme definitions (user-created palettes available on all pages)
const CUSTOM_THEMES_KEY = '100web_custom_themes'

// Per-page theme keys: scoped by pathname so each page remembers its own theme
function pagePresetKey(pathname?: string) {
  return pathname ? `100web_theme_preset__${pathname}` : '100web_theme_accent_preset'
}
function pageCustomColorKey(pathname?: string) {
  return pathname ? `100web_theme_custom__${pathname}` : '100web_theme_accent_custom'
}

export function getStoredCustomThemes(): CustomTheme[] {
  try {
    const raw = localStorage.getItem(CUSTOM_THEMES_KEY)
    if (!raw) {
      // Store starter custom themes on first run
      localStorage.setItem(CUSTOM_THEMES_KEY, JSON.stringify(STARTER_CUSTOM_THEMES))
      return STARTER_CUSTOM_THEMES
    }
    const parsed = JSON.parse(raw)
    if (Array.isArray(parsed) && parsed.length > 0) {
      return parsed
    }
    return STARTER_CUSTOM_THEMES
  } catch {
    return STARTER_CUSTOM_THEMES
  }
}

export function saveStoredCustomThemes(themes: CustomTheme[]): void {
  try {
    localStorage.setItem(CUSTOM_THEMES_KEY, JSON.stringify(themes))
  } catch {}
}

export function getStoredThemePreset(pathname?: string): string {
  try {
    return localStorage.getItem(pagePresetKey(pathname)) || 'original'
  } catch {
    return 'original'
  }
}

export function getStoredCustomColor(pathname?: string): string | null {
  try {
    return localStorage.getItem(pageCustomColorKey(pathname))
  } catch {
    return null
  }
}

export function applyThemeVariables(
  presetOrCustomId: string,
  customPrimary?: string | null,
  customThemesList?: CustomTheme[]
) {
  if (typeof document === 'undefined') return

  const roots: HTMLElement[] = [document.documentElement]
  try {
    const iframe = document.getElementById('device-frame-iframe') as HTMLIFrameElement | null
    if (iframe?.contentDocument?.documentElement) {
      roots.push(iframe.contentDocument.documentElement)
    }
  } catch {}

  const customThemes = customThemesList || getStoredCustomThemes()
  const matchingCustomTheme = customThemes.find(
    (t) => t.id === presetOrCustomId || `custom_${t.id}` === presetOrCustomId
  )

  roots.forEach((root) => {
    // Check if original
    if (presetOrCustomId === 'original' && !customPrimary) {
      root.removeAttribute('data-theme-preset')
      root.style.removeProperty('--theme-accent-primary')
      root.style.removeProperty('--theme-accent-secondary')
      root.style.removeProperty('--theme-accent-tertiary')
      root.style.removeProperty('--theme-accent-quaternary')
      root.style.removeProperty('--theme-accent-dark')
      root.style.removeProperty('--theme-accent-light')
      root.style.removeProperty('--theme-accent-gradient')
      root.style.removeProperty('--theme-accent-gradient-radial')
      root.style.removeProperty('--theme-canvas-filter')
      root.style.removeProperty('--theme-img-filter')

      // Clear dynamic indexed colors
      for (let i = 1; i <= 12; i++) {
        root.style.removeProperty(`--theme-color-${i}`)
      }
      return
    }

    if (matchingCustomTheme) {
      const colors = matchingCustomTheme.colors
      const primary = colors[0] || '#06b6d4'
      const accent = colors[1] || primary
      const tertiary = colors[2] || accent
      const quaternary = colors[3] || tertiary
      const dark = colors[colors.length - 1] || '#09090b'
      const light = '#ffffff'

      const hue = hexToHue(primary)
      const deg = Math.round(hue - 210)
      const filter = `hue-rotate(${deg}deg) saturate(1.2)`
      const imgFilter = `hue-rotate(${-deg}deg) saturate(0.833)`

      const gradient = `linear-gradient(135deg, ${colors.join(', ')})`
      const radial = `radial-gradient(circle, ${colors.join(', ')})`

      root.setAttribute('data-theme-preset', matchingCustomTheme.id)
      root.style.setProperty('--theme-accent-primary', primary)
      root.style.setProperty('--theme-accent-secondary', accent)
      root.style.setProperty('--theme-accent-tertiary', tertiary)
      root.style.setProperty('--theme-accent-quaternary', quaternary)
      root.style.setProperty('--theme-accent-dark', dark)
      root.style.setProperty('--theme-accent-light', light)
      root.style.setProperty('--theme-accent-gradient', gradient)
      root.style.setProperty('--theme-accent-gradient-radial', radial)
      root.style.setProperty('--theme-canvas-filter', filter)
      root.style.setProperty('--theme-img-filter', imgFilter)

      // Set individual numbered color tokens
      colors.forEach((col, idx) => {
        root.style.setProperty(`--theme-color-${idx + 1}`, col)
      })
      return
    }

    // Built-in preset
    const preset = THEME_PRESETS.find((p) => p.id === presetOrCustomId)
    const primary = customPrimary || preset?.primary || '#06b6d4'
    const accent = preset?.accent || '#a855f7'
    const dark = preset?.dark || '#09090b'
    const light = preset?.light || '#ffffff'

    let filter = preset?.filterCss || 'none'
    let imgFilter = preset?.imgFilterCss || 'none'

    if (customPrimary) {
      const hue = hexToHue(customPrimary)
      const deg = Math.round(hue - 210)
      filter = `hue-rotate(${deg}deg) saturate(1.2)`
      imgFilter = `hue-rotate(${-deg}deg) saturate(0.833)`
    }

    const gradient = `linear-gradient(135deg, ${primary}, ${accent})`
    const radial = `radial-gradient(circle, ${primary}, ${accent})`

    root.setAttribute('data-theme-preset', presetOrCustomId)
    root.style.setProperty('--theme-accent-primary', primary)
    root.style.setProperty('--theme-accent-secondary', accent)
    root.style.setProperty('--theme-accent-tertiary', accent)
    root.style.setProperty('--theme-accent-quaternary', accent)
    root.style.setProperty('--theme-accent-dark', dark)
    root.style.setProperty('--theme-accent-light', light)
    root.style.setProperty('--theme-accent-gradient', gradient)
    root.style.setProperty('--theme-accent-gradient-radial', radial)
    root.style.setProperty('--theme-color-1', primary)
    root.style.setProperty('--theme-color-2', accent)
    root.style.setProperty('--theme-canvas-filter', filter)
    root.style.setProperty('--theme-img-filter', imgFilter)
  })
}

export function useThemeAccent(pathname?: string) {
  // Re-initialize state whenever the page/pathname changes so each page loads its own saved theme
  const [activePresetId, setActivePresetId] = useState<string>(() => getStoredThemePreset(pathname))
  const [customPrimary, setCustomPrimary] = useState<string | null>(() => getStoredCustomColor(pathname))
  const [customThemes, setCustomThemes] = useState<CustomTheme[]>(() => getStoredCustomThemes())

  // When pathname changes (user navigated to a new page), load that page's saved theme
  useEffect(() => {
    const savedPreset = getStoredThemePreset(pathname)
    const savedCustom = getStoredCustomColor(pathname)
    setActivePresetId(savedPreset)
    setCustomPrimary(savedCustom)
    applyThemeVariables(savedPreset, savedCustom, getStoredCustomThemes())
  }, [pathname])

  useEffect(() => {
    applyThemeVariables(activePresetId, customPrimary, customThemes)
  }, [activePresetId, customPrimary, customThemes])

  const setPreset = useCallback(
    (presetId: string) => {
      setActivePresetId(presetId)
      setCustomPrimary(null)
      try {
        localStorage.setItem(pagePresetKey(pathname), presetId)
        localStorage.removeItem(pageCustomColorKey(pathname))
      } catch {}
      applyThemeVariables(presetId, null, customThemes)
    },
    [customThemes, pathname]
  )

  const setCustomColor = useCallback(
    (hex: string) => {
      setCustomPrimary(hex)
      setActivePresetId('custom')
      try {
        localStorage.setItem(pagePresetKey(pathname), 'custom')
        localStorage.setItem(pageCustomColorKey(pathname), hex)
      } catch {}
      applyThemeVariables('custom', hex, customThemes)
    },
    [customThemes, pathname]
  )

  const setActiveCustomTheme = useCallback(
    (themeId: string) => {
      setActivePresetId(themeId)
      setCustomPrimary(null)
      try {
        localStorage.setItem(pagePresetKey(pathname), themeId)
        localStorage.removeItem(pageCustomColorKey(pathname))
      } catch {}
      applyThemeVariables(themeId, null, customThemes)
    },
    [customThemes, pathname]
  )

  const createOrUpdateCustomTheme = useCallback(
    (themeInput: { id?: string; name: string; colors: string[] }) => {
      const sanitizedColors = themeInput.colors.filter(
        (c) => Boolean(c) && c.startsWith('#')
      )
      const colors = sanitizedColors.length >= 2 ? sanitizedColors : ['#6366f1', '#ec4899']
      const themeId = themeInput.id || `custom_${Date.now()}`
      const name = themeInput.name.trim() || 'Custom Palette'

      setCustomThemes((prev) => {
        const existingIndex = prev.findIndex((t) => t.id === themeId)
        let updated: CustomTheme[]
        if (existingIndex >= 0) {
          updated = [...prev]
          updated[existingIndex] = {
            ...prev[existingIndex],
            name,
            colors,
          }
        } else {
          updated = [
            {
              id: themeId,
              name,
              colors,
              createdAt: Date.now(),
            },
            ...prev,
          ]
        }
        saveStoredCustomThemes(updated)
        return updated
      })

      // Immediately activate the created/updated custom theme for this page
      setActivePresetId(themeId)
      setCustomPrimary(null)
      try {
        localStorage.setItem(pagePresetKey(pathname), themeId)
        localStorage.removeItem(pageCustomColorKey(pathname))
      } catch {}
      applyThemeVariables(themeId, null, [
        { id: themeId, name, colors, createdAt: Date.now() },
        ...customThemes,
      ])
    },
    [customThemes, pathname]
  )

  const removeCustomTheme = useCallback(
    (themeId: string) => {
      setCustomThemes((prev) => {
        const updated = prev.filter((t) => t.id !== themeId)
        saveStoredCustomThemes(updated)
        return updated
      })

      // If active theme was the removed one, revert to original for this page
      if (activePresetId === themeId) {
        setActivePresetId('original')
        setCustomPrimary(null)
        try {
          localStorage.setItem(pagePresetKey(pathname), 'original')
          localStorage.removeItem(pageCustomColorKey(pathname))
        } catch {}
        applyThemeVariables('original', null)
      }
    },
    [activePresetId, pathname]
  )

  const resetTheme = useCallback(() => {
    setActivePresetId('original')
    setCustomPrimary(null)
    try {
      localStorage.removeItem(pagePresetKey(pathname))
      localStorage.removeItem(pageCustomColorKey(pathname))
    } catch {}
    applyThemeVariables('original', null, customThemes)
  }, [customThemes, pathname])

  // Resolve current active preset or custom theme
  const activeCustomTheme = customThemes.find(
    (t) => t.id === activePresetId || `custom_${t.id}` === activePresetId
  )

  const currentPreset = activeCustomTheme
    ? {
        id: activeCustomTheme.id,
        name: activeCustomTheme.name,
        label: `${activeCustomTheme.colors.length}-Color Custom Palette`,
        description: 'User-created custom color harmony',
        primary: activeCustomTheme.colors[0] || '#06b6d4',
        accent: activeCustomTheme.colors[1] || '#a855f7',
        dark: activeCustomTheme.colors[activeCustomTheme.colors.length - 1] || '#09090b',
        light: '#ffffff',
        colors: activeCustomTheme.colors,
        gradient: `linear-gradient(135deg, ${activeCustomTheme.colors.join(', ')})`,
        isCustom: true,
      }
    : THEME_PRESETS.find((p) => p.id === activePresetId) || {
        id: 'custom',
        name: 'Custom',
        label: customPrimary || 'Custom Accent',
        description: 'User-specified brand accent color',
        primary: customPrimary || '#06b6d4',
        accent: '#a855f7',
        dark: '#09090b',
        light: '#ffffff',
        colors: [customPrimary || '#06b6d4', '#a855f7'],
        gradient: `linear-gradient(135deg, ${customPrimary || '#06b6d4'}, #a855f7)`,
        isCustom: true,
      }

  return {
    activePresetId,
    currentPreset,
    customPrimary,
    customThemes,
    activeCustomTheme,
    isOriginal: activePresetId === 'original' && !customPrimary,
    setPreset,
    setCustomColor,
    setActiveCustomTheme,
    createOrUpdateCustomTheme,
    removeCustomTheme,
    resetTheme,
    presets: THEME_PRESETS,
  }
}
