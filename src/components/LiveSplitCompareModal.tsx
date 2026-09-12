import React, { useState } from 'react'
import { X, ExternalLink, Monitor, Tablet, Smartphone, Sparkles, ArrowLeftRight } from 'lucide-react'
import { WebsiteDesign } from '../data/websites'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { useEventListener } from '../hooks/useEventListener'

interface LiveSplitCompareModalProps {
  isOpen: boolean
  onClose: () => void
  initialSiteA?: WebsiteDesign | null
  initialSiteB?: WebsiteDesign | null
  availableSites: WebsiteDesign[]
}

export type SplitViewMode = 'desktop' | 'tablet' | 'mobile'

function getSiteRoute(site: WebsiteDesign) {
  return `/${site.category.toLowerCase().replace(/\s+/g, '-')}/${site.slug}`
}

export function LiveSplitCompareModal({
  isOpen,
  onClose,
  initialSiteA,
  initialSiteB,
  availableSites,
}: LiveSplitCompareModalProps) {
  const [siteAId, setSiteAId] = useState<string>(
    () => initialSiteA?.id || availableSites[0]?.id || ''
  )
  const [siteBId, setSiteBId] = useState<string>(
    () => initialSiteB?.id || availableSites[1]?.id || availableSites[0]?.id || ''
  )
  const [viewMode, setViewMode] = useState<SplitViewMode>('desktop')

  // Safely lock background scroll
  useLockBodyScroll(isOpen)

  // Close on Escape
  useEventListener('keydown', (e: KeyboardEvent) => {
    if (!isOpen) return
    if (e.key === 'Escape') {
      onClose()
    }
  })

  if (!isOpen) return null

  const siteA = availableSites.find((s) => s.id === siteAId) || availableSites[0]
  const siteB = availableSites.find((s) => s.id === siteBId) || availableSites[1] || availableSites[0]

  const handleSwap = () => {
    setSiteAId(siteB.id)
    setSiteBId(siteA.id)
  }

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-slate-950/95 backdrop-blur-xl animate-in fade-in duration-200">
      {/* Top Controls Header */}
      <header className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 bg-slate-900/90 px-6 py-3 shrink-0">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400">
            <Sparkles className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-sm font-extrabold text-white">Live Split-Screen Compare</h2>
            <p className="text-[11px] text-slate-400">Interactive side-by-side template preview</p>
          </div>
        </div>

        {/* Center: Template Selectors & Swap Button */}
        <div className="flex items-center gap-2 max-w-full overflow-x-auto py-1">
          {/* Selector A */}
          <div className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1">
            <span className="text-[10px] font-mono font-bold text-amber-400 uppercase">Site A:</span>
            <select
              value={siteA.id}
              onChange={(e) => setSiteAId(e.target.value)}
              className="bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer max-w-[140px] sm:max-w-[180px] truncate"
            >
              {availableSites.map((site) => (
                <option key={site.id} value={site.id} className="bg-slate-900 text-white">
                  {site.title} ({site.category})
                </option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <button
            type="button"
            onClick={handleSwap}
            title="Swap sides"
            className="flex h-7 w-7 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
          >
            <ArrowLeftRight className="h-3.5 w-3.5" />
          </button>

          {/* Selector B */}
          <div className="flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-800/80 px-2.5 py-1">
            <span className="text-[10px] font-mono font-bold text-blue-400 uppercase">Site B:</span>
            <select
              value={siteB.id}
              onChange={(e) => setSiteBId(e.target.value)}
              className="bg-transparent text-xs font-bold text-white focus:outline-none cursor-pointer max-w-[140px] sm:max-w-[180px] truncate"
            >
              {availableSites.map((site) => (
                <option key={site.id} value={site.id} className="bg-slate-900 text-white">
                  {site.title} ({site.category})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Right: Device Viewport Switcher & Close */}
        <div className="flex items-center gap-3">
          <div className="flex items-center rounded-lg bg-slate-800/90 p-0.5 border border-slate-700">
            <button
              type="button"
              onClick={() => setViewMode('desktop')}
              title="Full 50/50 Desktop Split"
              className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-bold transition ${
                viewMode === 'desktop'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Monitor className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Desktop</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('tablet')}
              title="Tablet Frame Split (768px)"
              className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-bold transition ${
                viewMode === 'tablet'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Tablet className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Tablet</span>
            </button>
            <button
              type="button"
              onClick={() => setViewMode('mobile')}
              title="Mobile Phone Frame Split (390px)"
              className={`flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-bold transition ${
                viewMode === 'mobile'
                  ? 'bg-amber-500 text-slate-950 shadow-xs'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="h-3.5 w-3.5" />
              <span className="hidden md:inline">Mobile</span>
            </button>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close split view"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </header>

      {/* Main Split Viewport Body */}
      <div className="flex-1 overflow-hidden flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-slate-800 p-3 gap-3 bg-slate-950">
        
        {/* Pane A */}
        <div className="flex-1 flex flex-col min-w-0 min-h-0 bg-slate-900/50 rounded-2xl border border-slate-800/80 overflow-hidden shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2 shrink-0">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-amber-500/20 text-amber-400 px-2 py-0.5 text-[10px] font-mono font-bold uppercase">
                A
              </span>
              <span className="font-extrabold text-xs text-white truncate max-w-[180px]">
                {siteA.title}
              </span>
              <span className="hidden sm:inline-block rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-400 uppercase">
                {siteA.category}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1">
                {[siteA.colors.primary, siteA.colors.accent, siteA.colors.dark].map((hex, i) => (
                  <span
                    key={i}
                    className="w-3 h-3 rounded-full border border-white/20"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
              <a
                href={getSiteRoute(siteA)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-amber-400 transition"
                title="Open in new tab"
              >
                <span>Launch</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Iframe Viewport Container */}
          <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-4 bg-slate-950/60">
            <div
              className={`w-full h-full transition-all duration-300 rounded-xl overflow-hidden shadow-2xl ${
                viewMode === 'mobile'
                  ? 'max-w-[390px] max-h-[780px] border-[8px] border-slate-800 rounded-[36px]'
                  : viewMode === 'tablet'
                  ? 'max-w-[768px] max-h-[860px] border-[8px] border-slate-800 rounded-[24px]'
                  : 'border border-slate-800/80'
              }`}
            >
              <iframe
                src={getSiteRoute(siteA)}
                title={`Live comparison: ${siteA.title}`}
                className="w-full h-full bg-white border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Pane B */}
        <div className="flex-1 flex flex-col min-w-0 min-h-0 bg-slate-900/50 rounded-2xl border border-slate-800/80 overflow-hidden shadow-xl">
          <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-2 shrink-0">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-blue-500/20 text-blue-400 px-2 py-0.5 text-[10px] font-mono font-bold uppercase">
                B
              </span>
              <span className="font-extrabold text-xs text-white truncate max-w-[180px]">
                {siteB.title}
              </span>
              <span className="hidden sm:inline-block rounded-full bg-slate-800 px-2 py-0.5 text-[10px] font-bold text-slate-400 uppercase">
                {siteB.category}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="hidden sm:flex items-center gap-1">
                {[siteB.colors.primary, siteB.colors.accent, siteB.colors.dark].map((hex, i) => (
                  <span
                    key={i}
                    className="w-3 h-3 rounded-full border border-white/20"
                    style={{ backgroundColor: hex }}
                  />
                ))}
              </div>
              <a
                href={getSiteRoute(siteB)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-[11px] font-bold text-slate-400 hover:text-blue-400 transition"
                title="Open in new tab"
              >
                <span>Launch</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>
          </div>

          {/* Iframe Viewport Container */}
          <div className="flex-1 overflow-auto flex items-center justify-center p-2 sm:p-4 bg-slate-950/60">
            <div
              className={`w-full h-full transition-all duration-300 rounded-xl overflow-hidden shadow-2xl ${
                viewMode === 'mobile'
                  ? 'max-w-[390px] max-h-[780px] border-[8px] border-slate-800 rounded-[36px]'
                  : viewMode === 'tablet'
                  ? 'max-w-[768px] max-h-[860px] border-[8px] border-slate-800 rounded-[24px]'
                  : 'border border-slate-800/80'
              }`}
            >
              <iframe
                src={getSiteRoute(siteB)}
                title={`Live comparison: ${siteB.title}`}
                className="w-full h-full bg-white border-0"
                loading="lazy"
              />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
