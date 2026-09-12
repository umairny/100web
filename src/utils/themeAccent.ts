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
  },
]

const STORAGE_KEY = '100web_theme_accent_preset'
const CUSTOM_KEY = '100web_theme_accent_custom'

export function getStoredThemePreset(): string {
  try {
    return localStorage.getItem(STORAGE_KEY) || 'original'
  } catch {
    return 'original'
  }
}

export function getStoredCustomColor(): string | null {
  try {
    return localStorage.getItem(CUSTOM_KEY)
  } catch {
    return null
  }
}

export function applyThemeVariables(presetId: string, customPrimary?: string | null) {
  if (typeof document === 'undefined') return

  const root = document.documentElement

  if (presetId === 'original' && !customPrimary) {
    root.removeAttribute('data-theme-preset')
    root.style.removeProperty('--theme-accent-primary')
    root.style.removeProperty('--theme-accent-secondary')
    root.style.removeProperty('--theme-accent-dark')
    root.style.removeProperty('--theme-accent-light')
    root.style.removeProperty('--theme-canvas-filter')
    root.style.removeProperty('--theme-img-filter')
    return
  }

  const preset = THEME_PRESETS.find((p) => p.id === presetId)
  const primary = customPrimary || preset?.primary || '#06b6d4'
  const accent = preset?.accent || '#a855f7'
  const dark = preset?.dark || '#09090b'
  const light = preset?.light || '#ffffff'

  let filter = preset?.filterCss || 'none'
  let imgFilter = preset?.imgFilterCss || 'none'

  if (customPrimary) {
    const hue = hexToHue(customPrimary)
    // Calculate rotation relative to default blue (210deg)
    const deg = Math.round(hue - 210)
    filter = `hue-rotate(${deg}deg) saturate(1.2)`
    imgFilter = `hue-rotate(${-deg}deg) saturate(0.833)`
  }

  root.setAttribute('data-theme-preset', presetId)
  root.style.setProperty('--theme-accent-primary', primary)
  root.style.setProperty('--theme-accent-secondary', accent)
  root.style.setProperty('--theme-accent-dark', dark)
  root.style.setProperty('--theme-accent-light', light)
  root.style.setProperty('--theme-canvas-filter', filter)
  root.style.setProperty('--theme-img-filter', imgFilter)
}

export function useThemeAccent() {
  const [activePresetId, setActivePresetId] = useState<string>(() => getStoredThemePreset())
  const [customPrimary, setCustomPrimary] = useState<string | null>(() => getStoredCustomColor())

  useEffect(() => {
    applyThemeVariables(activePresetId, customPrimary)
  }, [activePresetId, customPrimary])

  const setPreset = useCallback((presetId: string) => {
    setActivePresetId(presetId)
    setCustomPrimary(null)
    try {
      localStorage.setItem(STORAGE_KEY, presetId)
      localStorage.removeItem(CUSTOM_KEY)
    } catch {}
    applyThemeVariables(presetId, null)
  }, [])

  const setCustomColor = useCallback((hex: string) => {
    setCustomPrimary(hex)
    setActivePresetId('custom')
    try {
      localStorage.setItem(STORAGE_KEY, 'custom')
      localStorage.setItem(CUSTOM_KEY, hex)
    } catch {}
    applyThemeVariables('custom', hex)
  }, [])

  const resetTheme = useCallback(() => {
    setActivePresetId('original')
    setCustomPrimary(null)
    try {
      localStorage.removeItem(STORAGE_KEY)
      localStorage.removeItem(CUSTOM_KEY)
    } catch {}
    applyThemeVariables('original', null)
  }, [])

  const currentPreset = THEME_PRESETS.find((p) => p.id === activePresetId) || {
    id: 'custom',
    name: 'Custom',
    label: customPrimary || 'Custom Accent',
    description: 'User-specified brand accent color',
    primary: customPrimary || '#06b6d4',
    accent: '#a855f7',
    dark: '#09090b',
    light: '#ffffff',
  }

  return {
    activePresetId,
    currentPreset,
    customPrimary,
    isOriginal: activePresetId === 'original' && !customPrimary,
    setPreset,
    setCustomColor,
    resetTheme,
    presets: THEME_PRESETS,
  }
}
