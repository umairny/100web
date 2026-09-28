import { useState, useEffect, useCallback } from 'react'
import { allWebsites, WebsiteDesign } from '../data/websites'

export type ThemeScope = 'page' | 'global'
export type ThemeBgMode = 'immersive' | 'neutral' | 'custom'
export type ThemeMood = 'light' | 'dark' | 'system'

export interface BackgroundPresetOption {
  id: string
  name: string
  hex: string
  mood: 'light' | 'dark'
}

export interface ColorThemePreset {
  id: string
  name: string
  label: string
  description: string
  primary: string
  secondary: string
  dark: string
  light: string
  glow: string
  bgDark?: string
  bgSurface?: string
  bgCard?: string
  bgCardHover?: string
  bgLight?: string
  bgLightSurface?: string
  bgLightCard?: string
  colors: string[]
  gradient: string
  isCustom?: boolean
}


export interface CustomTheme {
  id: string
  name: string
  colors: string[] // Array of 2 or more hex colors: e.g. ['#6366f1', '#ec4899', '#06b6d4']
  createdAt: number
}

// ---------------------------------------------------------------------------
// COLOR UTILITIES (RGB, HEX, HSL, HARMONIES)
// ---------------------------------------------------------------------------

export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  let c = hex.replace('#', '').trim()
  if (c.length === 3) {
    c = c.split('').map((x) => x + x).join('')
  }
  if (c.length !== 6) return { r: 6, g: 182, b: 212 }
  return {
    r: parseInt(c.substring(0, 2), 16),
    g: parseInt(c.substring(2, 4), 16),
    b: parseInt(c.substring(4, 6), 16),
  }
}

export function rgbToHex(r: number, g: number, b: number): string {
  const clamp = (val: number) => Math.max(0, Math.min(255, Math.round(val)))
  const toHex = (val: number) => clamp(val).toString(16).padStart(2, '0')
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`
}

export function hexToRgba(hex: string, alpha: number): string {
  const { r, g, b } = hexToRgb(hex)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function adjustBrightness(hex: string, percent: number): string {
  const { r, g, b } = hexToRgb(hex)
  const factor = 1 + percent / 100
  return rgbToHex(r * factor, g * factor, b * factor)
}

export function hexToHsl(hex: string): { h: number; s: number; l: number } {
  const { r: r255, g: g255, b: b255 } = hexToRgb(hex)
  const r = r255 / 255
  const g = g255 / 255
  const b = b255 / 255

  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (max !== min) {
    const d = max - min
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0)
        break
      case g:
        h = (b - r) / d + 2
        break
      case b:
        h = (r - g) / d + 4
        break
    }
    h = Math.round(h * 60)
  }

  return { h, s: Math.round(s * 100), l: Math.round(l * 100) }
}

export function hslToHex(h: number, s: number, l: number): string {
  h = (h % 360 + 360) % 360
  s = Math.max(0, Math.min(100, s)) / 100
  l = Math.max(0, Math.min(100, l)) / 100

  const c = (1 - Math.abs(2 * l - 1)) * s
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1))
  const m = l - c / 2

  let r = 0, g = 0, b = 0
  if (h >= 0 && h < 60) {
    r = c; g = x; b = 0
  } else if (h >= 60 && h < 120) {
    r = x; g = c; b = 0
  } else if (h >= 120 && h < 180) {
    r = 0; g = c; b = x
  } else if (h >= 180 && h < 240) {
    r = 0; g = x; b = c
  } else if (h >= 240 && h < 300) {
    r = x; g = 0; b = c
  } else {
    r = c; g = 0; b = x
  }

  return rgbToHex((r + m) * 255, (g + m) * 255, (b + m) * 255)
}

export function generateHarmoniousPalette(primaryHex: string): {
  primary: string
  primaryHover: string
  primaryLight: string
  secondary: string
  secondaryHover: string
  glow: string
  dark: string
  light: string
  bgDark: string
  bgSurface: string
  bgCard: string
  bgCardHover: string
  gradient: string
} {
  const { h, s } = hexToHsl(primaryHex)
  const primary = primaryHex
  const primaryHover = adjustBrightness(primaryHex, -14)
  const primaryLight = hexToRgba(primaryHex, 0.12)
  
  // Secondary: split-complimentary (+40 degrees on color wheel) with high saturation
  const secondary = hslToHex(h + 42, Math.min(95, s + 10), 54)
  const secondaryHover = adjustBrightness(secondary, -14)

  const glow = hexToRgba(primaryHex, 0.38)
  const dark = hslToHex(h, 24, 7)
  const light = hslToHex(h, 60, 98)

  // Surface and dark background tints
  const bgDark = hslToHex(h, 30, 5)
  const bgSurface = hslToHex(h, 26, 8)
  const bgCard = hslToHex(h, 22, 12)
  const bgCardHover = hslToHex(h, 20, 16)

  const gradient = `linear-gradient(135deg, ${primary}, ${secondary})`

  return {
    primary,
    primaryHover,
    primaryLight,
    secondary,
    secondaryHover,
    glow,
    dark,
    light,
    bgDark,
    bgSurface,
    bgCard,
    bgCardHover,
    gradient,
  }
}

// ---------------------------------------------------------------------------
// CURATED THEME PRESETS
// ---------------------------------------------------------------------------

export const THEME_PRESETS: ColorThemePreset[] = [
  {
    id: 'original',
    name: 'Author Original',
    label: 'Template Default',
    description: 'Bespoke hand-crafted palette designed specifically for this template',
    primary: '',
    secondary: '',
    dark: '',
    light: '',
    glow: '',
    bgDark: '',
    bgSurface: '',
    bgCard: '',
    bgCardHover: '',
    colors: [],
    gradient: '',
    isCustom: false,
  },
  {
    id: 'cyberpunk',
    name: 'Cyber Neon',
    label: 'Electric Cyan & Violet',
    description: 'Futuristic high-contrast tech glow aesthetic with vibrant cyber accents',
    primary: '#06b6d4',
    secondary: '#a855f7',
    dark: '#090a0f',
    light: '#ecfeff',
    glow: 'rgba(6, 182, 212, 0.4)',
    bgDark: '#070a12',
    bgSurface: '#0d1322',
    bgCard: '#131b2e',
    bgCardHover: '#1a253e',
    colors: ['#06b6d4', '#a855f7', '#3b82f6'],
    gradient: 'linear-gradient(135deg, #06b6d4, #a855f7)',
    isCustom: false,
  },
  {
    id: 'emerald',
    name: 'Emerald Prestige',
    label: 'Forest Green & Burnished Amber',
    description: 'Prestigious, organic high-wealth aesthetic with luxurious botanical warmth',
    primary: '#059669',
    secondary: '#d97706',
    dark: '#052e16',
    light: '#ecfdf5',
    glow: 'rgba(5, 150, 105, 0.38)',
    bgDark: '#04160e',
    bgSurface: '#082218',
    bgCard: '#0d2e21',
    bgCardHover: '#133d2c',
    colors: ['#059669', '#d97706', '#10b981'],
    gradient: 'linear-gradient(135deg, #059669, #d97706)',
    isCustom: false,
  },
  {
    id: 'sunset',
    name: 'Sunset Crimson',
    label: 'Rose Crimson & Warm Gold',
    description: 'Vibrant, warm, and energetic modern lifestyle palette with high emotional appeal',
    primary: '#f43f5e',
    secondary: '#f59e0b',
    dark: '#1e1022',
    light: '#fff1f2',
    glow: 'rgba(244, 63, 94, 0.38)',
    bgDark: '#140914',
    bgSurface: '#1f0f20',
    bgCard: '#2b162c',
    bgCardHover: '#391e3b',
    colors: ['#f43f5e', '#f59e0b', '#fb7185'],
    gradient: 'linear-gradient(135deg, #f43f5e, #f59e0b)',
    isCustom: false,
  },
  {
    id: 'royal',
    name: 'Royal Amethyst',
    label: 'Majestic Violet & Fuchsia',
    description: 'Deep modern creative SaaS aesthetic with rich purple highlights',
    primary: '#7c3aed',
    secondary: '#ec4899',
    dark: '#0f0e26',
    light: '#f5f3ff',
    glow: 'rgba(124, 58, 237, 0.4)',
    bgDark: '#0a081a',
    bgSurface: '#120e2a',
    bgCard: '#1a153c',
    bgCardHover: '#241e50',
    colors: ['#7c3aed', '#ec4899', '#8b5cf6'],
    gradient: 'linear-gradient(135deg, #7c3aed, #ec4899)',
    isCustom: false,
  },
  {
    id: 'azure',
    name: 'Electric Azure',
    label: 'Cobalt Blue & Cyan Spark',
    description: 'Crisp enterprise executive aesthetic with high reliability and tech authority',
    primary: '#2563eb',
    secondary: '#00f2fe',
    dark: '#030b1e',
    light: '#eff6ff',
    glow: 'rgba(37, 99, 235, 0.38)',
    bgDark: '#050a18',
    bgSurface: '#09122a',
    bgCard: '#0f1d3e',
    bgCardHover: '#162854',
    colors: ['#2563eb', '#00f2fe', '#38bdf8'],
    gradient: 'linear-gradient(135deg, #2563eb, #00f2fe)',
    isCustom: false,
  },
  {
    id: 'terracotta',
    name: 'Nordic Clay',
    label: 'Warm Terracotta & Sage Teal',
    description: 'Earthy architectural minimalism inspired by Scandinavian ceramic and natural studio design',
    primary: '#ea580c',
    secondary: '#0d9488',
    dark: '#1c130e',
    light: '#fff7ed',
    glow: 'rgba(234, 88, 12, 0.35)',
    bgDark: '#140e0b',
    bgSurface: '#1d1511',
    bgCard: '#291e19',
    bgCardHover: '#372821',
    colors: ['#ea580c', '#0d9488', '#f97316'],
    gradient: 'linear-gradient(135deg, #ea580c, #0d9488)',
    isCustom: false,
  },
  {
    id: 'golden',
    name: 'Champagne Gold',
    label: 'Warm Gold & Tuscan Bronze',
    description: 'Ultra-luxury hospitality, fine jewelry, and boutique architectural finish',
    primary: '#ca8a04',
    secondary: '#b45309',
    dark: '#1a1408',
    light: '#fefce8',
    glow: 'rgba(202, 138, 4, 0.4)',
    bgDark: '#120e06',
    bgSurface: '#1c160a',
    bgCard: '#271f0f',
    bgCardHover: '#352b15',
    colors: ['#ca8a04', '#b45309', '#eab308'],
    gradient: 'linear-gradient(135deg, #ca8a04, #b45309)',
    isCustom: false,
  },
  {
    id: 'obsidian',
    name: 'Obsidian Minimal',
    label: 'Monochrome Slate & Carbon',
    description: 'High-contrast editorial typography and stark gallery minimalism',
    primary: '#0f172a',
    secondary: '#64748b',
    dark: '#020617',
    light: '#f8fafc',
    glow: 'rgba(15, 23, 42, 0.3)',
    bgDark: '#050507',
    bgSurface: '#0c0d12',
    bgCard: '#13151c',
    bgCardHover: '#1b1e28',
    colors: ['#0f172a', '#64748b', '#334155'],
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
    name: 'Sunset Horizon',
    colors: ['#f43f5e', '#fb923c', '#facc15'],
    createdAt: 1710000001000,
  },
  {
    id: 'custom_cyber_synth',
    name: 'Cyber Synthwave',
    colors: ['#06b6d4', '#ec4899', '#8b5cf6', '#3b82f6'],
    createdAt: 1710000002000,
  },
  {
    id: 'custom_emerald_luxe',
    name: 'Emerald Luxe',
    colors: ['#059669', '#10b981', '#f59e0b'],
    createdAt: 1710000003000,
  },
]

export const QUICK_BRAND_COLORS = [
  { label: 'Electric Indigo', hex: '#6366f1' },
  { label: 'Neon Cyan', hex: '#06b6d4' },
  { label: 'Emerald Mint', hex: '#10b981' },
  { label: 'Rose Ruby', hex: '#f43f5e' },
  { label: 'Solar Amber', hex: '#f59e0b' },
  { label: 'Royal Violet', hex: '#8b5cf6' },
  { label: 'Cobalt Blue', hex: '#2563eb' },
  { label: 'Flame Orange', hex: '#ea580c' },
  { label: 'Hot Fuchsia', hex: '#ec4899' },
  { label: 'Deep Teal', hex: '#14b8a6' },
  { label: 'Lime Flash', hex: '#84cc16' },
  { label: 'Obsidian Slate', hex: '#0f172a' },
]

export const BACKGROUND_PRESETS: BackgroundPresetOption[] = [
  { id: 'dark-obsidian', name: 'Obsidian Void', hex: '#090a0f', mood: 'dark' },
  { id: 'dark-midnight', name: 'Midnight Navy', hex: '#0a101d', mood: 'dark' },
  { id: 'dark-roast', name: 'Dark Roast', hex: '#18120c', mood: 'dark' },
  { id: 'dark-emerald', name: 'Forest Noir', hex: '#06160f', mood: 'dark' },
  { id: 'dark-slate', name: 'Modern Slate', hex: '#0f172a', mood: 'dark' },
  { id: 'light-cream', name: 'Artisan Cream', hex: '#f6efe5', mood: 'light' },
  { id: 'light-pure', name: 'Pure White', hex: '#ffffff', mood: 'light' },
  { id: 'light-frost', name: 'Frost Pearl', hex: '#f8fafc', mood: 'light' },
  { id: 'light-sand', name: 'Warm Linen', hex: '#fbf7ee', mood: 'light' },
  { id: 'light-soft', name: 'Soft Gray', hex: '#f3f4f6', mood: 'light' },
]

// ---------------------------------------------------------------------------
// PERSISTENCE KEYS & SCOPES
// ---------------------------------------------------------------------------

const CUSTOM_THEMES_KEY = '100web_custom_themes'
const THEME_SCOPE_KEY = '100web_theme_scope'

export function getStoredThemeScope(): ThemeScope {
  try {
    const raw = localStorage.getItem(THEME_SCOPE_KEY)
    return raw === 'global' ? 'global' : 'page'
  } catch {
    return 'page'
  }
}

export function saveStoredThemeScope(scope: ThemeScope): void {
  try {
    localStorage.setItem(THEME_SCOPE_KEY, scope)
  } catch {}
}

const THEME_BG_MODE_KEY = '100web_theme_bg_mode'
const THEME_MOOD_KEY = '100web_theme_mood'
const THEME_CUSTOM_BG_KEY = '100web_theme_custom_bg'

export function getStoredThemeMood(): ThemeMood {
  try {
    const raw = localStorage.getItem(THEME_MOOD_KEY)
    if (raw === 'light' || raw === 'dark' || raw === 'system') return raw
    return 'system'
  } catch {
    return 'system'
  }
}

export function saveStoredThemeMood(mood: ThemeMood): void {
  try {
    localStorage.setItem(THEME_MOOD_KEY, mood)
  } catch {}
}

export function resolveEffectiveMood(mood: ThemeMood): 'light' | 'dark' {
  if (mood === 'light' || mood === 'dark') return mood
  if (
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) {
    return 'dark'
  }
  return 'light'
}

export function getStoredCustomBg(): string | null {
  try {
    return localStorage.getItem(THEME_CUSTOM_BG_KEY)
  } catch {
    return null
  }
}

export function saveStoredCustomBg(color: string | null): void {
  try {
    if (color) {
      localStorage.setItem(THEME_CUSTOM_BG_KEY, color)
    } else {
      localStorage.removeItem(THEME_CUSTOM_BG_KEY)
    }
  } catch {}
}

export function getStoredThemeBgMode(): ThemeBgMode {
  try {
    const raw = localStorage.getItem(THEME_BG_MODE_KEY)
    if (raw === 'neutral' || raw === 'custom') return raw
    return 'immersive'
  } catch {
    return 'immersive'
  }
}

export function saveStoredThemeBgMode(mode: ThemeBgMode): void {
  try {
    localStorage.setItem(THEME_BG_MODE_KEY, mode)
  } catch {}
}

function getPresetStorageKey(scope: ThemeScope, pathname?: string): string {
  if (scope === 'global') return '100web_theme_preset__global'
  return pathname ? `100web_theme_preset__${pathname}` : '100web_theme_accent_preset'
}

function getCustomColorStorageKey(scope: ThemeScope, pathname?: string): string {
  if (scope === 'global') return '100web_theme_custom__global'
  return pathname ? `100web_theme_custom__${pathname}` : '100web_theme_accent_custom'
}

export function getStoredCustomThemes(): CustomTheme[] {
  try {
    const raw = localStorage.getItem(CUSTOM_THEMES_KEY)
    if (!raw) {
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

export function getStoredThemePreset(pathname?: string, scope?: ThemeScope): string {
  const activeScope = scope || getStoredThemeScope()
  try {
    return localStorage.getItem(getPresetStorageKey(activeScope, pathname)) || 'original'
  } catch {
    return 'original'
  }
}

export function getStoredCustomColor(pathname?: string, scope?: ThemeScope): string | null {
  const activeScope = scope || getStoredThemeScope()
  try {
    return localStorage.getItem(getCustomColorStorageKey(activeScope, pathname))
  } catch {
    return null
  }
}

// ---------------------------------------------------------------------------
// DYNAMIC THEME ENGINE: DEEP VARIABLE MAPPING & TARGETED STYLING
// ---------------------------------------------------------------------------

function findSiteByPathname(pathname?: string): WebsiteDesign | null {
  if (!pathname) return null
  const cleanPath = pathname.toLowerCase()
  const normalize = (s: string) => s.toLowerCase().replace(/[-_\s/]/g, '')
  const cleanNorm = normalize(cleanPath)

  const found = allWebsites.find((site) => {
    const catPath = site.category.toLowerCase().replace(/\s+/g, '-')
    const slugNorm = normalize(site.slug)
    return (
      cleanPath === `/${catPath}/${site.slug}` ||
      cleanPath.startsWith(`/${catPath}/${site.slug}/`) ||
      cleanPath === `/${site.slug}` ||
      cleanPath.startsWith(`/${site.slug}/`) ||
      cleanPath.includes(site.slug) ||
      cleanNorm === slugNorm ||
      cleanNorm.endsWith(slugNorm) ||
      slugNorm.endsWith(cleanNorm) ||
      cleanNorm.includes(slugNorm)
    )
  })
  return found || null
}

const DYNAMIC_STYLE_ID = 'theme-accent-dynamic-engine'

export function applyThemeVariables(
  presetOrCustomId: string,
  customPrimary?: string | null,
  customThemesList?: CustomTheme[],
  pathname?: string,
  themeBgModeParam?: ThemeBgMode,
  themeMoodParam?: ThemeMood,
  customBgParam?: string | null
) {
  if (typeof document === 'undefined') return

  const docs: Document[] = [document]
  const roots: HTMLElement[] = [document.documentElement]
  try {
    const iframe = document.getElementById('device-frame-iframe') as HTMLIFrameElement | null
    if (iframe?.contentDocument?.documentElement) {
      roots.push(iframe.contentDocument.documentElement)
      docs.push(iframe.contentDocument)
    }
  } catch {}

  const isOriginal = (presetOrCustomId === 'original' || !presetOrCustomId) && !customPrimary
  const mood = themeMoodParam || getStoredThemeMood()
  const effectiveMood = resolveEffectiveMood(mood)
  const bgMode = themeBgModeParam || getStoredThemeBgMode()
  const customBg = customBgParam !== undefined ? customBgParam : getStoredCustomBg()

  // Resolve palette values
  const customThemes = customThemesList || getStoredCustomThemes()
  const matchingCustomTheme = customThemes.find(
    (t) => t.id === presetOrCustomId || `custom_${t.id}` === presetOrCustomId
  )
  const preset = THEME_PRESETS.find((p) => p.id === presetOrCustomId)

  let primary: string = '#06b6d4'
  let secondary: string = '#a855f7'
  let dark: string = '#090a0f'
  let light: string = '#ffffff'
  let glow: string = 'rgba(6, 182, 212, 0.4)'
  let bgDark: string = '#070a12'
  let bgSurface: string = '#0d1322'
  let bgCard: string = '#131b2e'
  let bgCardHover: string = '#1a253e'
  let gradient: string = 'linear-gradient(135deg, #06b6d4, #a855f7)'
  let colorsList: string[] = []

  if (matchingCustomTheme) {
    colorsList = matchingCustomTheme.colors
    primary = colorsList[0] || '#06b6d4'
    secondary = colorsList[1] || primary
    const harmony = generateHarmoniousPalette(primary)
    dark = colorsList[colorsList.length - 1] || harmony.dark
    light = '#ffffff'
    glow = harmony.glow
    bgDark = harmony.bgDark
    bgSurface = harmony.bgSurface
    bgCard = harmony.bgCard
    bgCardHover = harmony.bgCardHover
    gradient = `linear-gradient(135deg, ${colorsList.join(', ')})`
  } else if (customPrimary) {
    const harmony = generateHarmoniousPalette(customPrimary)
    primary = harmony.primary
    secondary = harmony.secondary
    dark = harmony.dark
    light = harmony.light
    glow = harmony.glow
    bgDark = harmony.bgDark
    bgSurface = harmony.bgSurface
    bgCard = harmony.bgCard
    bgCardHover = harmony.bgCardHover
    gradient = harmony.gradient
    colorsList = [primary, secondary]
  } else if (preset && preset.id !== 'original') {
    primary = preset.primary || '#06b6d4'
    secondary = preset.secondary || '#a855f7'
    dark = preset.dark || '#090a0f'
    light = preset.light || '#ffffff'
    glow = preset.glow || hexToRgba(primary, 0.4)
    bgDark = preset.bgDark || '#070a12'
    bgSurface = preset.bgSurface || '#0d1322'
    bgCard = preset.bgCard || '#131b2e'
    bgCardHover = preset.bgCardHover || '#1a253e'
    gradient = preset.gradient || `linear-gradient(135deg, ${primary}, ${secondary})`
    colorsList = preset.colors || [primary, secondary]
  } else {
    const site = findSiteByPathname(
      pathname || (typeof window !== 'undefined' ? window.location.pathname : '')
    )
    let sitePrimary = site?.colors?.primary || '#06b6d4'
    let siteSecondary = site?.colors?.accent || site?.colors?.secondary || '#0ea5e9'
    let siteDark = site?.colors?.dark || '#030712'

    // If site primary is near black/dark bg (<0.20 lightness) and accent is vivid, swap them so accent is primary
    if (site?.colors?.primary && site?.colors?.accent) {
      const { l: primL } = hexToHsl(site.colors.primary)
      const { l: accL } = hexToHsl(site.colors.accent)
      if (primL < 0.20 && accL > 0.30) {
        sitePrimary = site.colors.accent
        siteSecondary = site.colors.secondary && hexToHsl(site.colors.secondary).l > 0.25 ? site.colors.secondary : adjustBrightness(sitePrimary, -14)
        siteDark = site.colors.primary
      }
    }

    primary = sitePrimary
    secondary = siteSecondary
    dark = siteDark
    light = site?.colors?.secondary || '#ffffff'
    glow = hexToRgba(primary, 0.35)
    bgDark = siteDark
    bgSurface = adjustBrightness(bgDark, 8)
    bgCard = adjustBrightness(bgDark, 14)
    bgCardHover = adjustBrightness(bgDark, 20)
    gradient = `linear-gradient(135deg, ${primary}, ${secondary})`
    colorsList = [primary, secondary]
  }

  const primaryHover = adjustBrightness(primary, -12)
  const primaryLight = hexToRgba(primary, 0.12)
  const secondaryHover = adjustBrightness(secondary, -12)
  const radialGradient = `radial-gradient(circle at 50% 50%, ${primary}, ${secondary})`

  // Background and surface calculations based on bgMode, effectiveMood, and customBg
  let finalBgBase: string
  let finalBgSurface: string
  let finalBgCard: string
  let finalBgCardHover: string
  let finalTextPrimary: string
  let finalTextSecondary: string
  let finalTextMuted: string
  let finalBorder: string

  if (bgMode === 'custom' && customBg) {
    const { l } = hexToHsl(customBg)
    const isCustomDark = l < 52
    if (isCustomDark) {
      finalBgBase = customBg
      finalBgSurface = adjustBrightness(customBg, 10)
      finalBgCard = adjustBrightness(customBg, 16)
      finalBgCardHover = adjustBrightness(customBg, 22)
      finalTextPrimary = '#f8fafc'
      finalTextSecondary = '#cbd5e1'
      finalTextMuted = '#94a3b8'
      finalBorder = 'rgba(255, 255, 255, 0.12)'
    } else {
      finalBgBase = customBg
      finalBgSurface = '#ffffff'
      finalBgCard = adjustBrightness(customBg, -4)
      finalBgCardHover = adjustBrightness(customBg, -8)
      finalTextPrimary = '#1c1917'
      finalTextSecondary = '#44403c'
      finalTextMuted = '#78716c'
      finalBorder = 'rgba(0, 0, 0, 0.08)'
    }
  } else if (effectiveMood === 'dark') {
    if (bgMode === 'immersive' && !isOriginal) {
      finalBgBase = bgDark
      finalBgSurface = bgSurface
      finalBgCard = bgCard
      finalBgCardHover = bgCardHover
    } else {
      finalBgBase = '#090a0f'
      finalBgSurface = '#11141e'
      finalBgCard = '#171b28'
      finalBgCardHover = '#1e2436'
    }
    finalTextPrimary = '#f8fafc'
    finalTextSecondary = '#cbd5e1'
    finalTextMuted = '#94a3b8'
    finalBorder = 'rgba(255, 255, 255, 0.1)'
  } else {
    // Light mood
    if (bgMode === 'immersive' && !isOriginal) {
      const { h } = hexToHsl(primary)
      finalBgBase = hslToHex(h, 25, 96)
      finalBgSurface = '#ffffff'
      finalBgCard = hslToHex(h, 20, 93)
      finalBgCardHover = hslToHex(h, 20, 89)
    } else {
      finalBgBase = '#f8fafc'
      finalBgSurface = '#ffffff'
      finalBgCard = '#f1f5f9'
      finalBgCardHover = '#e2e8f0'
    }
    finalTextPrimary = '#0f172a'
    finalTextSecondary = '#334155'
    finalTextMuted = '#64748b'
    finalBorder = 'rgba(0, 0, 0, 0.08)'
  }

  const isMoodActive = mood === 'dark' || mood === 'light'
  const hasThemeOverride = !isOriginal || bgMode === 'custom' || isMoodActive

  // Set root custom properties & attributes on each document root
  roots.forEach((root) => {
    root.setAttribute('data-theme-preset', presetOrCustomId || 'original')
    root.setAttribute('data-theme-bg-mode', bgMode)

    if (hasThemeOverride) {
      root.setAttribute('data-theme-active', 'true')
      root.setAttribute('data-theme-mood', effectiveMood)

      if (effectiveMood === 'dark') {
        root.classList.add('dark')
        root.classList.remove('light')
      } else {
        root.classList.remove('dark')
        root.classList.add('light')
      }

      // Set core layout & typography variables
      root.style.setProperty('--theme-mood', effectiveMood)
      root.style.setProperty('--theme-bg-base', finalBgBase)
      root.style.setProperty('--theme-bg-surface', finalBgSurface)
      root.style.setProperty('--theme-bg-card', finalBgCard)
      root.style.setProperty('--theme-bg-card-hover', finalBgCardHover)
      root.style.setProperty('--theme-text-primary', finalTextPrimary)
      root.style.setProperty('--theme-text-secondary', finalTextSecondary)
      root.style.setProperty('--theme-text-muted', finalTextMuted)
      root.style.setProperty('--theme-border', finalBorder)

      root.style.setProperty('--theme-accent-primary', primary)
      root.style.setProperty('--theme-accent-primary-hover', primaryHover)
      root.style.setProperty('--theme-accent-primary-light', primaryLight)
      root.style.setProperty('--theme-accent-secondary', secondary)
      root.style.setProperty('--theme-accent-secondary-hover', secondaryHover)
      root.style.setProperty('--theme-accent-glow', glow)
      root.style.setProperty('--theme-accent-dark', dark)
      root.style.setProperty('--theme-accent-light', light)
      root.style.setProperty('--theme-bg-dark', bgDark)
      root.style.setProperty('--theme-bg-surface-dark', bgSurface)
      root.style.setProperty('--theme-bg-card-dark', bgCard)
      root.style.setProperty('--theme-accent-gradient', gradient)
      root.style.setProperty('--theme-accent-gradient-radial', radialGradient)
      const { l: primaryL } = hexToHsl(primary)
      const accentContrast = primaryL > 65 ? '#0f172a' : '#ffffff'
      root.style.setProperty('--theme-accent-contrast', accentContrast)

      colorsList.forEach((col, idx) => {
        root.style.setProperty(`--theme-color-${idx + 1}`, col)
      })
    } else {
      // Return 100% to author original scheme
      root.removeAttribute('data-theme-active')
      root.removeAttribute('data-theme-mood')
      root.classList.remove('dark')
      root.classList.remove('light')

      root.style.removeProperty('--theme-mood')
      root.style.removeProperty('--theme-bg-base')
      root.style.removeProperty('--theme-bg-surface')
      root.style.removeProperty('--theme-bg-card')
      root.style.removeProperty('--theme-bg-card-hover')
      root.style.removeProperty('--theme-text-primary')
      root.style.removeProperty('--theme-text-secondary')
      root.style.removeProperty('--theme-text-muted')
      root.style.removeProperty('--theme-border')

      root.style.removeProperty('--theme-accent-primary')
      root.style.removeProperty('--theme-accent-primary-hover')
      root.style.removeProperty('--theme-accent-primary-light')
      root.style.removeProperty('--theme-accent-secondary')
      root.style.removeProperty('--theme-accent-secondary-hover')
      root.style.removeProperty('--theme-accent-glow')
      root.style.removeProperty('--theme-accent-dark')
      root.style.removeProperty('--theme-accent-light')
      root.style.removeProperty('--theme-accent-contrast')
      root.style.removeProperty('--theme-bg-dark')
      root.style.removeProperty('--theme-bg-surface-dark')
      root.style.removeProperty('--theme-bg-card-dark')
      root.style.removeProperty('--theme-accent-gradient')
      root.style.removeProperty('--theme-accent-gradient-radial')
      for (let i = 1; i <= 12; i++) {
        root.style.removeProperty(`--theme-color-${i}`)
      }
    }
  })

  // Dynamic CSS rule generation
  const site = findSiteByPathname(pathname || (typeof window !== 'undefined' ? window.location.pathname : ''))
  const sitePrimaryClean = site?.colors?.primary ? site.colors.primary.replace('#', '').toLowerCase() : null
  const siteAccentClean = site?.colors?.accent ? site.colors.accent.replace('#', '').toLowerCase() : null
  const siteDarkClean = site?.colors?.dark ? site.colors.dark.replace('#', '').toLowerCase() : null

  const cssRules = !hasThemeOverride
    ? `/* Original author styles active - zero overrides */`
    : `
    /* Universal theme variable mappings */
    :root[data-theme-active="true"] {
      --theme-bg-base: ${finalBgBase};
      --theme-bg-surface: ${finalBgSurface};
      --theme-bg-card: ${finalBgCard};
      --theme-bg-card-hover: ${finalBgCardHover};
      --theme-text-primary: ${finalTextPrimary};
      --theme-text-secondary: ${finalTextSecondary};
      --theme-text-muted: ${finalTextMuted};
      --theme-border: ${finalBorder};
    }

    [data-theme-active="true"] .theme-bg-base {
      background-color: var(--theme-bg-base) !important;
    }
    [data-theme-active="true"] .theme-bg-surface {
      background-color: var(--theme-bg-surface) !important;
    }
    [data-theme-active="true"] .theme-bg-card {
      background-color: var(--theme-bg-card) !important;
    }
    .theme-text-primary {
      color: var(--theme-text-primary) !important;
    }
    .theme-text-secondary {
      color: var(--theme-text-secondary) !important;
    }
    .theme-text-muted {
      color: var(--theme-text-muted) !important;
    }
    .theme-border {
      border-color: var(--theme-border) !important;
    }

    ${
      !isOriginal
        ? `
    [data-theme-preset]:not([data-theme-preset="original"]) {
      --color-primary: ${primary} !important;
      --color-accent: ${secondary} !important;
      --color-tertiary: ${secondary} !important;
      --color-gradient: ${gradient} !important;

      --brand-primary: ${primary} !important;
      --brand-accent: ${secondary} !important;
      --sf-flame: ${primary} !important;
      --sf-flame-hover: ${primaryHover} !important;
      --sf-flame-glow: ${glow} !important;
      --pt-gold: ${primary} !important;
      --tl-indigo: ${primary} !important;
      --ss-coral: ${primary} !important;
      --cb-primary: ${primary} !important;
      --ph-primary: ${primary} !important;
      --ph-primary-hover: ${primaryHover} !important;
      --ph-primary-light: ${primaryLight} !important;
      --ph-secondary: ${secondary} !important;
      --ph-accent: ${secondary} !important;
      --ph-glow: ${glow} !important;
      --ph-gradient: ${gradient} !important;
    }

    [data-theme-preset]:not([data-theme-preset="original"]) .theme-accent-btn,
    [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas [class*="btn-gold"],
    [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas [class*="-btn-primary"],
    [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas button[class*="bg-"][class*="text-white"]:not([class*="bg-gray"]):not([class*="bg-black"]):not([class*="bg-white"]):not([class*="bg-neutral"]):not([class*="bg-zinc"]):not([class*="bg-stone"]) {
      background: ${gradient} !important;
      box-shadow: 0 4px 20px ${glow} !important;
      border-color: transparent !important;
      color: #ffffff !important;
    }

    [data-theme-preset]:not([data-theme-preset="original"]) .theme-accent-text {
      color: ${primary} !important;
    }

    [data-theme-preset]:not([data-theme-preset="original"]) .theme-accent-bg {
      background-color: ${primary} !important;
    }

    [data-theme-preset]:not([data-theme-preset="original"]) .theme-accent-border {
      border-color: ${primary} !important;
    }

    [data-theme-preset]:not([data-theme-preset="original"]) .theme-accent-gradient-bg {
      background: ${gradient} !important;
    }

    [data-theme-preset]:not([data-theme-preset="original"]) .theme-accent-gradient-text {
      background: ${gradient} !important;
      -webkit-background-clip: text !important;
      -webkit-text-fill-color: transparent !important;
    }
    `
        : ''
    }

    ${
      bgMode === 'custom' || isMoodActive || (!isOriginal && (bgMode === 'immersive' || effectiveMood === 'dark'))
        ? `
      /* Adaptive canvas backgrounds */
      .demo-canvas .pt-site,
      .demo-canvas .sf-site,
      .demo-canvas .tl-site,
      .demo-canvas .ph-site {
        background-color: ${finalBgBase} !important;
      }
      .demo-canvas .ph-card {
        background-color: ${finalBgSurface} !important;
      }
      `
        : ''
    }

    ${
      sitePrimaryClean && !isOriginal
        ? `
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas [class*="border-[#${sitePrimaryClean}]"],
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas [class*="border-[#${sitePrimaryClean.toUpperCase()}]"] {
        border-color: ${primary} !important;
      }
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas button[class*="bg-[#${sitePrimaryClean}]"],
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas button[class*="bg-[#${sitePrimaryClean.toUpperCase()}]"],
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas a[class*="bg-[#${sitePrimaryClean}]"],
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas a[class*="bg-[#${sitePrimaryClean.toUpperCase()}]"],
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas [class*="bg-[#${sitePrimaryClean}]"],
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas [class*="bg-[#${sitePrimaryClean.toUpperCase()}]"] {
        background-color: ${primary} !important;
      }
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas [class*="text-[#${sitePrimaryClean}]"],
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas [class*="text-[#${sitePrimaryClean.toUpperCase()}]"] {
        color: ${primary} !important;
      }
      `
        : ''
    }

    ${
      siteAccentClean && !isOriginal
        ? `
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas [class*="border-[#${siteAccentClean}]"],
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas [class*="border-[#${siteAccentClean.toUpperCase()}]"] {
        border-color: ${secondary} !important;
      }
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas button[class*="bg-[#${siteAccentClean}]"],
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas button[class*="bg-[#${siteAccentClean.toUpperCase()}]"],
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas a[class*="bg-[#${siteAccentClean}]"],
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas a[class*="bg-[#${siteAccentClean.toUpperCase()}]"],
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas [class*="bg-[#${siteAccentClean}]"],
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas [class*="bg-[#${siteAccentClean.toUpperCase()}]"] {
        background-color: ${secondary} !important;
      }
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas [class*="text-[#${siteAccentClean}]"],
      [data-theme-preset]:not([data-theme-preset="original"]) .demo-canvas [class*="text-[#${siteAccentClean.toUpperCase()}]"] {
        color: ${secondary} !important;
      }
      `
        : ''
    }
  `

  docs.forEach((d) => {
    let styleEl = d.getElementById(DYNAMIC_STYLE_ID) as HTMLStyleElement | null
    if (!styleEl) {
      styleEl = d.createElement('style')
      styleEl.id = DYNAMIC_STYLE_ID
      d.head.appendChild(styleEl)
    }
    styleEl.textContent = cssRules
  })
}

// ---------------------------------------------------------------------------
// REACT HOOK: USE THEME ACCENT
// ---------------------------------------------------------------------------

export function useThemeAccent(pathname?: string) {
  const [themeScope, setThemeScopeState] = useState<ThemeScope>(() => getStoredThemeScope())
  const [themeMood, setThemeMoodState] = useState<ThemeMood>(() => getStoredThemeMood())
  const [themeBgMode, setThemeBgModeState] = useState<ThemeBgMode>(() => getStoredThemeBgMode())
  const [customBg, setCustomBgState] = useState<string | null>(() => getStoredCustomBg())
  const [activePresetId, setActivePresetId] = useState<string>(() =>
    getStoredThemePreset(pathname, getStoredThemeScope())
  )
  const [customPrimary, setCustomPrimary] = useState<string | null>(() =>
    getStoredCustomColor(pathname, getStoredThemeScope())
  )
  const [customThemes, setCustomThemes] = useState<CustomTheme[]>(() => getStoredCustomThemes())

  const effectiveMood = resolveEffectiveMood(themeMood)

  // Sync state when pathname, scope, bgMode, mood, or customBg changes
  useEffect(() => {
    const savedPreset = getStoredThemePreset(pathname, themeScope)
    const savedCustom = getStoredCustomColor(pathname, themeScope)
    setActivePresetId(savedPreset)
    setCustomPrimary(savedCustom)
    applyThemeVariables(
      savedPreset,
      savedCustom,
      getStoredCustomThemes(),
      pathname,
      themeBgMode,
      themeMood,
      customBg
    )
  }, [pathname, themeScope, themeBgMode, themeMood, customBg])

  // Apply theme whenever active parameters change
  useEffect(() => {
    applyThemeVariables(
      activePresetId,
      customPrimary,
      customThemes,
      pathname,
      themeBgMode,
      themeMood,
      customBg
    )
  }, [activePresetId, customPrimary, customThemes, pathname, themeBgMode, themeMood, customBg])

  const setThemeMood = useCallback(
    (newMood: ThemeMood) => {
      setThemeMoodState(newMood)
      saveStoredThemeMood(newMood)
      applyThemeVariables(
        activePresetId,
        customPrimary,
        customThemes,
        pathname,
        themeBgMode,
        newMood,
        customBg
      )
    },
    [activePresetId, customPrimary, customThemes, pathname, themeBgMode, customBg]
  )

  const toggleThemeMood = useCallback(() => {
    const nextMood = effectiveMood === 'dark' ? 'light' : 'dark'
    setThemeMood(nextMood)
  }, [effectiveMood, setThemeMood])

  const setThemeBgMode = useCallback(
    (newMode: ThemeBgMode) => {
      setThemeBgModeState(newMode)
      saveStoredThemeBgMode(newMode)
      applyThemeVariables(
        activePresetId,
        customPrimary,
        customThemes,
        pathname,
        newMode,
        themeMood,
        customBg
      )
    },
    [activePresetId, customPrimary, customThemes, pathname, themeMood, customBg]
  )

  const setCustomBg = useCallback(
    (hex: string | null) => {
      setCustomBgState(hex)
      saveStoredCustomBg(hex)
      const nextBgMode = hex ? 'custom' : 'immersive'
      setThemeBgModeState(nextBgMode)
      saveStoredThemeBgMode(nextBgMode)
      applyThemeVariables(
        activePresetId,
        customPrimary,
        customThemes,
        pathname,
        nextBgMode,
        themeMood,
        hex
      )
    },
    [activePresetId, customPrimary, customThemes, pathname, themeMood]
  )

  const setThemeScope = useCallback(
    (newScope: ThemeScope) => {
      setThemeScopeState(newScope)
      saveStoredThemeScope(newScope)
      const savedPreset = getStoredThemePreset(pathname, newScope)
      const savedCustom = getStoredCustomColor(pathname, newScope)
      setActivePresetId(savedPreset)
      setCustomPrimary(savedCustom)
      applyThemeVariables(
        savedPreset,
        savedCustom,
        customThemes,
        pathname,
        themeBgMode,
        themeMood,
        customBg
      )
    },
    [customThemes, pathname, themeBgMode, themeMood, customBg]
  )

  const setPreset = useCallback(
    (presetId: string) => {
      setActivePresetId(presetId)
      setCustomPrimary(null)
      try {
        localStorage.setItem(getPresetStorageKey(themeScope, pathname), presetId)
        localStorage.removeItem(getCustomColorStorageKey(themeScope, pathname))
      } catch {}
      applyThemeVariables(
        presetId,
        null,
        customThemes,
        pathname,
        themeBgMode,
        themeMood,
        customBg
      )
    },
    [customThemes, pathname, themeBgMode, themeMood, customBg, themeScope]
  )

  const setCustomColor = useCallback(
    (hex: string) => {
      setCustomPrimary(hex)
      setActivePresetId('custom')
      try {
        localStorage.setItem(getPresetStorageKey(themeScope, pathname), 'custom')
        localStorage.setItem(getCustomColorStorageKey(themeScope, pathname), hex)
      } catch {}
      applyThemeVariables(
        'custom',
        hex,
        customThemes,
        pathname,
        themeBgMode,
        themeMood,
        customBg
      )
    },
    [customThemes, pathname, themeBgMode, themeMood, customBg, themeScope]
  )

  const setActiveCustomTheme = useCallback(
    (themeId: string) => {
      setActivePresetId(themeId)
      setCustomPrimary(null)
      try {
        localStorage.setItem(getPresetStorageKey(themeScope, pathname), themeId)
        localStorage.removeItem(getCustomColorStorageKey(themeScope, pathname))
      } catch {}
      applyThemeVariables(
        themeId,
        null,
        customThemes,
        pathname,
        themeBgMode,
        themeMood,
        customBg
      )
    },
    [customThemes, pathname, themeBgMode, themeMood, customBg, themeScope]
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

      // Immediately activate
      setActivePresetId(themeId)
      setCustomPrimary(null)
      try {
        localStorage.setItem(getPresetStorageKey(themeScope, pathname), themeId)
        localStorage.removeItem(getCustomColorStorageKey(themeScope, pathname))
      } catch {}
      applyThemeVariables(
        themeId,
        null,
        [{ id: themeId, name, colors, createdAt: Date.now() }, ...customThemes],
        pathname,
        themeBgMode,
        themeMood,
        customBg
      )
    },
    [customThemes, pathname, themeBgMode, themeMood, customBg, themeScope]
  )

  const removeCustomTheme = useCallback(
    (themeId: string) => {
      setCustomThemes((prev) => {
        const updated = prev.filter((t) => t.id !== themeId)
        saveStoredCustomThemes(updated)
        return updated
      })

      if (activePresetId === themeId) {
        setActivePresetId('original')
        setCustomPrimary(null)
        try {
          localStorage.setItem(getPresetStorageKey(themeScope, pathname), 'original')
          localStorage.removeItem(getCustomColorStorageKey(themeScope, pathname))
        } catch {}
        applyThemeVariables('original', null, undefined, pathname, themeBgMode, themeMood, customBg)
      }
    },
    [activePresetId, pathname, themeBgMode, themeMood, customBg, themeScope]
  )

  const resetTheme = useCallback(() => {
    setActivePresetId('original')
    setCustomPrimary(null)
    setCustomBgState(null)
    saveStoredCustomBg(null)
    setThemeBgModeState('immersive')
    saveStoredThemeBgMode('immersive')
    try {
      localStorage.removeItem(getPresetStorageKey(themeScope, pathname))
      localStorage.removeItem(getCustomColorStorageKey(themeScope, pathname))
    } catch {}
    applyThemeVariables('original', null, customThemes, pathname, 'immersive', themeMood, null)
  }, [customThemes, pathname, themeMood, themeScope])

  // Current active preset resolution
  const activeCustomTheme = customThemes.find(
    (t) => t.id === activePresetId || `custom_${t.id}` === activePresetId
  )

  const currentPreset: ColorThemePreset = activeCustomTheme
    ? {
        id: activeCustomTheme.id,
        name: activeCustomTheme.name,
        label: `${activeCustomTheme.colors.length}-Color Custom Palette`,
        description: 'User-created custom color harmony',
        primary: activeCustomTheme.colors[0] || '#06b6d4',
        secondary: activeCustomTheme.colors[1] || activeCustomTheme.colors[0] || '#a855f7',
        dark: activeCustomTheme.colors[activeCustomTheme.colors.length - 1] || '#090a0f',
        light: '#ffffff',
        glow: hexToRgba(activeCustomTheme.colors[0] || '#06b6d4', 0.4),
        colors: activeCustomTheme.colors,
        gradient: `linear-gradient(135deg, ${activeCustomTheme.colors.join(', ')})`,
        isCustom: true,
      }
    : customPrimary
    ? (() => {
        const h = generateHarmoniousPalette(customPrimary)
        return {
          id: 'custom',
          name: 'Quick Brand Accent',
          label: customPrimary.toUpperCase(),
          description: 'Custom brand color with automatically balanced harmony and glow',
          primary: h.primary,
          secondary: h.secondary,
          dark: h.dark,
          light: h.light,
          glow: h.glow,
          colors: [h.primary, h.secondary],
          gradient: h.gradient,
          isCustom: true,
        }
      })()
    : THEME_PRESETS.find((p) => p.id === activePresetId) || THEME_PRESETS[0]

  return {
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
    isOriginal: (activePresetId === 'original' || !activePresetId) && !customPrimary,
    setPreset,
    setCustomColor,
    setActiveCustomTheme,
    createOrUpdateCustomTheme,
    removeCustomTheme,
    resetTheme,
    presets: THEME_PRESETS,
    quickBrandColors: QUICK_BRAND_COLORS,
    backgroundPresets: BACKGROUND_PRESETS,
  }
}

