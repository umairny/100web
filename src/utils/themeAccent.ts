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
}

export const THEME_PRESETS: ColorThemePreset[] = [
  {
    id: 'original',
    name: 'Original',
    label: 'Author Palette',
    description: 'Default bespoke color design',
    primary: '',
    accent: '',
    dark: '',
    light: '',
  },
  {
    id: 'cyberpunk',
    name: 'Cyber Neon',
    label: 'Electric Cyan & Violet',
    description: 'Futuristic high-contrast tech vibe',
    primary: '#06b6d4',
    accent: '#a855f7',
    dark: '#09090b',
    light: '#ecfeff',
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
    return
  }

  const preset = THEME_PRESETS.find((p) => p.id === presetId)
  const primary = customPrimary || preset?.primary || '#06b6d4'
  const accent = preset?.accent || '#a855f7'
  const dark = preset?.dark || '#09090b'
  const light = preset?.light || '#ffffff'

  root.setAttribute('data-theme-preset', presetId)
  root.style.setProperty('--theme-accent-primary', primary)
  root.style.setProperty('--theme-accent-secondary', accent)
  root.style.setProperty('--theme-accent-dark', dark)
  root.style.setProperty('--theme-accent-light', light)
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
