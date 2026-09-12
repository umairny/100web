import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  X,
  Heart,
  Share2,
  Trash2,
  ExternalLink,
  Check,
  Columns,
  Sparkles,
  ArrowRight,
  FileText,
  MessageSquare,
  Star,
  Printer,
} from 'lucide-react'
import { allWebsites, WebsiteDesign } from '../data/websites'
import { useFavorites, getShareableShortlistUrl } from '../utils/favorites'
import { prefetchRoute } from '../utils/routePrefetch'
import { useLockBodyScroll } from '../hooks/useLockBodyScroll'
import { useEventListener } from '../hooks/useEventListener'
import { LiveSplitCompareModal } from './LiveSplitCompareModal'

interface ShortlistDrawerProps {
  isOpen: boolean
  onClose: () => void
}

function getSiteRoute(site: WebsiteDesign) {
  return `/${site.category.toLowerCase().replace(/\s+/g, '-')}/${site.slug}`
}

export function ShortlistDrawer({ isOpen, onClose }: ShortlistDrawerProps) {
  const { favoriteIds, notes, ratings, setNote, setRating, toggle, clear } = useFavorites()
  const [copiedLink, setCopiedLink] = useState(false)
  const [copiedBrief, setCopiedBrief] = useState(false)
  const [compareMode, setCompareMode] = useState(false)
  const [isLiveSplitOpen, setIsLiveSplitOpen] = useState(false)
  const [selectedForCompare, setSelectedForCompare] = useState<string[]>([])
  const [activeEditingNoteId, setActiveEditingNoteId] = useState<string | null>(null)
  const [editingNoteText, setEditingNoteText] = useState('')

  // Lock scroll safely
  useLockBodyScroll(isOpen)

  // Close on Escape key
  useEventListener('keydown', (e: KeyboardEvent) => {
    if (!isOpen) return
    if (e.key === 'Escape') {
      onClose()
    }
  })

  // Match favorite IDs with full website objects
  const favoritedWebsites = useMemo(() => {
    return favoriteIds
      .map((id) => allWebsites.find((site) => site.id === id || site.slug === id))
      .filter((site): site is WebsiteDesign => Boolean(site))
  }, [favoriteIds])

  const handleCopyShareLink = async () => {
    const url = getShareableShortlistUrl(favoriteIds)
    try {
      await navigator.clipboard.writeText(url)
      setCopiedLink(true)
      setTimeout(() => setCopiedLink(false), 2200)
    } catch {
      // Fallback
      prompt('Copy your shareable shortlist URL:', url)
    }
  }

  const handleExportMarkdown = async () => {
    if (favoritedWebsites.length === 0) return
    const lines = [
      `# 100Web Shortlist Brief (${favoritedWebsites.length} Curated Templates)`,
      `*Exported on ${new Date().toLocaleDateString()}*`,
      '',
      ...favoritedWebsites.flatMap((site, i) => {
        const note = notes[site.id]
        const score = ratings[site.id] || 0
        return [
          `### ${i + 1}. ${site.title} (${site.category})`,
          score > 0 ? `- **Rating**: ${'★'.repeat(score)}${'☆'.repeat(5 - score)} (${score}/5)` : '',
          note ? `- **Client Note**: ${note}` : '',
          `- **Live Demo**: ${window.location.origin}${getSiteRoute(site)}`,
          `- **Brand Colors**: Primary: \`${site.colors.primary}\`, Secondary: \`${site.colors.secondary}\`, Accent: \`${site.colors.accent}\``,
          `- **Overview**: ${site.shortDescription}`,
          '',
        ].filter(Boolean)
      }),
      `---`,
      `*Generated via 100Web Portfolio Showcase*`,
    ]
    try {
      await navigator.clipboard.writeText(lines.join('\n'))
      setCopiedBrief(true)
      setTimeout(() => setCopiedBrief(false), 2200)
    } catch {
      // Fallback
    }
  }

  const toggleSelectForCompare = (id: string) => {
    setSelectedForCompare((prev) => {
      if (prev.includes(id)) {
        return prev.filter((i) => i !== id)
      }
      if (prev.length >= 3) {
        return [...prev.slice(1), id]
      }
      return [...prev, id]
    })
  }

  const comparedWebsites = useMemo(() => {
    const ids = selectedForCompare.length > 0 ? selectedForCompare : favoriteIds.slice(0, 3)
    return ids
      .map((id) => allWebsites.find((site) => site.id === id || site.slug === id))
      .filter((site): site is WebsiteDesign => Boolean(site))
  }, [selectedForCompare, favoriteIds])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[100] flex justify-end" role="dialog" aria-modal="true" aria-label="Your Shortlist">
      {/* Dimmed backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Slide-over panel */}
      <div className="relative z-10 flex h-full w-full max-w-2xl flex-col bg-slate-900 text-white shadow-2xl border-l border-slate-800 transition-transform">
        {/* Drawer Header */}
        <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5 bg-slate-950/80">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/20 text-rose-500 border border-rose-500/30">
              <Heart className="h-5 w-5 fill-rose-500" />
            </div>
            <div>
              <h2 className="text-lg font-black tracking-tight text-white flex items-center gap-2">
                Your Saved Shortlist
                <span className="rounded-full bg-rose-500/20 text-rose-400 border border-rose-500/30 px-2.5 py-0.5 text-xs font-bold">
                  {favoritedWebsites.length}
                </span>
              </h2>
              <p className="text-xs text-slate-400">
                Curated template candidates for your design review
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {favoritedWebsites.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => setIsLiveSplitOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-gradient-to-r from-amber-500 to-amber-400 px-3 py-1.5 text-xs font-black text-slate-950 hover:brightness-110 transition shadow-sm active:scale-95"
                  title="Compare 2 templates live in interactive split-screen"
                >
                  <Sparkles className="h-3.5 w-3.5" />
                  <span>Split Live</span>
                </button>
                <button
                  type="button"
                  onClick={() => setCompareMode((prev) => !prev)}
                  className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition ${
                    compareMode
                      ? 'bg-amber-500 text-slate-950 font-black'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white'
                  }`}
                  title="Compare specifications table"
                >
                  <Columns className="h-3.5 w-3.5" />
                  <span>{compareMode ? 'Exit Table' : 'Compare'}</span>
                </button>
              </>
            )}

            <button
              type="button"
              onClick={onClose}
              className="rounded-lg p-2 text-slate-400 hover:bg-slate-800 hover:text-white transition"
              aria-label="Close shortlist drawer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Action Toolbar (when items exist) */}
        {favoritedWebsites.length > 0 && !compareMode && (
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800/80 bg-slate-900/90 px-6 py-3 text-xs">
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleCopyShareLink}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-3.5 py-1.5 font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition active:scale-95"
              >
                {copiedLink ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Share Link Copied!</span>
                  </>
                ) : (
                  <>
                    <Share2 className="h-3.5 w-3.5 text-slate-400" />
                    <span>Copy Shareable URL</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={handleExportMarkdown}
                className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-3.5 py-1.5 font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition active:scale-95"
                title="Copy markdown formatted proposal brief of all shortlisted templates"
              >
                {copiedBrief ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-400" />
                    <span className="text-emerald-400">Brief Copied!</span>
                  </>
                ) : (
                  <>
                    <FileText className="h-3.5 w-3.5 text-slate-400" />
                    <span>Export Brief</span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={() => window.print()}
                className="inline-flex items-center gap-1.5 rounded-lg bg-slate-800 px-3.5 py-1.5 font-bold text-slate-200 hover:bg-slate-700 hover:text-white transition active:scale-95"
                title="Print or Save PDF pitch sheet for clients"
              >
                <Printer className="h-3.5 w-3.5 text-slate-400" />
                <span>Print / PDF</span>
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                if (window.confirm('Are you sure you want to clear your entire shortlist?')) {
                  clear()
                }
              }}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-rose-400 transition"
              title="Clear all shortlisted items"
            >
              <Trash2 className="h-3.5 w-3.5" />
              <span>Clear all</span>
            </button>
          </div>
        )}

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-slate-800">
          {favoritedWebsites.length === 0 ? (
            /* Empty State */
            <div className="flex h-full flex-col items-center justify-center text-center py-16">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800/70 text-slate-500 mb-4 border border-slate-800">
                <Heart className="h-8 w-8 text-slate-600" />
              </div>
              <h3 className="text-lg font-bold text-white">Your shortlist is empty</h3>
              <p className="mt-2 max-w-sm text-sm text-slate-400">
                Click the heart icon on any website card across the catalog or category hubs to curate your candidates.
              </p>
              <button
                type="button"
                onClick={onClose}
                className="mt-6 rounded-xl bg-white px-5 py-2.5 text-xs font-bold text-slate-900 hover:bg-slate-100 transition shadow-lg"
              >
                Browse Catalog
              </button>
            </div>
          ) : compareMode ? (
            /* Side-by-Side Compare Mode */
            <div className="space-y-6">
              <div className="rounded-xl bg-amber-500/10 border border-amber-500/20 p-4 text-xs text-amber-200 flex flex-wrap items-center justify-between gap-3">
                <div>
                  <span>
                    Comparing <strong>{comparedWebsites.length}</strong> template{comparedWebsites.length === 1 ? '' : 's'}. Click on any pill to customize selection.
                  </span>
                  <span className="block text-[11px] text-amber-300/70 mt-0.5">
                    Launch live interactive preview to see candidate designs side-by-side.
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => setIsLiveSplitOpen(true)}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-amber-500 px-3.5 py-1.5 font-bold text-slate-950 hover:bg-amber-400 transition shadow-sm active:scale-95"
                >
                  <Columns className="h-3.5 w-3.5" />
                  <span>Split-Screen Live</span>
                </button>
              </div>

              {/* Selection Pills */}
              <div className="flex flex-wrap gap-2">
                {favoritedWebsites.map((site) => {
                  const isSelected = selectedForCompare.length > 0
                    ? selectedForCompare.includes(site.id)
                    : comparedWebsites.some((c) => c.id === site.id)
                  return (
                    <button
                      key={site.id}
                      type="button"
                      onClick={() => toggleSelectForCompare(site.id)}
                      className={`rounded-full px-3 py-1 text-xs font-bold transition flex items-center gap-1.5 ${
                        isSelected
                          ? 'bg-amber-500 text-slate-950'
                          : 'bg-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {isSelected && <Check className="h-3 w-3" />}
                      {site.title}
                    </button>
                  )
                })}
              </div>

              {/* Comparison Matrix Table */}
              <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-950">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="border-b border-slate-800 bg-slate-900/60">
                      <th className="p-3 font-mono text-[10px] uppercase text-slate-500 w-28">Specification</th>
                      {comparedWebsites.map((site) => (
                        <th key={site.id} className="p-3 font-bold text-white min-w-[140px]">
                          {site.title}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60">
                    <tr>
                      <td className="p-3 font-mono text-[10px] text-slate-400 uppercase">Category</td>
                      {comparedWebsites.map((site) => (
                        <td key={site.id} className="p-3 text-slate-200">
                          <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[11px] font-bold text-slate-300">
                            {site.category}
                          </span>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-[10px] text-slate-400 uppercase">Style Aesthetic</td>
                      {comparedWebsites.map((site) => (
                        <td key={site.id} className="p-3 text-slate-300 capitalize text-xs leading-relaxed">
                          {site.style}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-[10px] text-slate-400 uppercase">Brand Palette</td>
                      {comparedWebsites.map((site) => (
                        <td key={site.id} className="p-3">
                          <div className="flex items-center gap-1.5">
                            {[site.colors.primary, site.colors.secondary, site.colors.accent, site.colors.dark].map(
                              (color, idx) => (
                                <span
                                  key={idx}
                                  className="h-5 w-5 rounded-full border border-white/20 shadow-sm"
                                  style={{ backgroundColor: color }}
                                  title={color}
                                />
                              )
                            )}
                          </div>
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-[10px] text-slate-400 uppercase">Rating</td>
                      {comparedWebsites.map((site) => {
                        const score = ratings[site.id] || 0
                        return (
                          <td key={site.id} className="p-3 text-xs text-amber-400 font-bold">
                            {score > 0 ? (
                              <span className="flex items-center gap-1">
                                {'★'.repeat(score)}{'☆'.repeat(5 - score)}
                                <span className="text-[10px] text-slate-400 font-mono font-normal">({score}/5)</span>
                              </span>
                            ) : (
                              <span className="text-slate-600 font-normal">Unrated</span>
                            )}
                          </td>
                        )
                      })}
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-[10px] text-slate-400 uppercase">Review Note</td>
                      {comparedWebsites.map((site) => (
                        <td key={site.id} className="p-3 text-xs text-amber-200/90 italic">
                          {notes[site.id] ? `"${notes[site.id]}"` : <span className="text-slate-600 not-italic">None</span>}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-[10px] text-slate-400 uppercase">Overview</td>
                      {comparedWebsites.map((site) => (
                        <td key={site.id} className="p-3 text-slate-400 text-xs leading-relaxed">
                          {site.shortDescription}
                        </td>
                      ))}
                    </tr>
                    <tr>
                      <td className="p-3 font-mono text-[10px] text-slate-400 uppercase">Action</td>
                      {comparedWebsites.map((site) => {
                        const route = `/${site.category.toLowerCase().replace(/\s+/g, '-')}/${site.slug}`
                        return (
                          <td key={site.id} className="p-3">
                            <Link
                              to={route}
                              onClick={onClose}
                              onMouseEnter={() => prefetchRoute(route)}
                              className="inline-flex items-center gap-1 rounded-lg bg-amber-500 px-3 py-1.5 text-xs font-bold text-slate-950 hover:bg-amber-400 transition"
                            >
                              <span>Launch</span>
                              <ExternalLink className="h-3 w-3" />
                            </Link>
                          </td>
                        )
                      })}
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ) : (
            /* Standard Grid List of Saved Cards */
            <div className="space-y-4">
              {favoritedWebsites.map((site) => {
                const route = `/${site.category.toLowerCase().replace(/\s+/g, '-')}/${site.slug}`
                return (
                  <div
                    key={site.id}
                    className="group relative flex flex-col sm:flex-row items-start sm:items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/80 p-3.5 transition hover:border-slate-700 hover:bg-slate-950"
                  >
                    {/* Thumbnail preview */}
                    <div className="relative aspect-[16/10] w-full sm:w-36 shrink-0 overflow-hidden rounded-xl bg-slate-900">
                      {site.image ? (
                        <img
                          src={site.image}
                          alt={site.title}
                          className="h-full w-full object-cover transition group-hover:scale-105 duration-300"
                          loading="lazy"
                          decoding="async"
                        />
                      ) : (
                        <div
                          className="h-full w-full"
                          style={{
                            background: `linear-gradient(135deg, ${site.colors.primary}, ${site.colors.dark})`,
                          }}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>

                    {/* Meta info */}
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="rounded-full bg-slate-800 px-2.5 py-0.5 text-[10px] font-bold uppercase text-slate-300">
                          {site.category}
                        </span>
                        {site.marketLabel && (
                          <span className="text-[11px] font-medium text-slate-400">
                            {site.marketLabel}
                          </span>
                        )}
                      </div>

                      <h4 className="mt-1 text-base font-bold text-white group-hover:text-amber-400 transition truncate">
                        {site.title}
                      </h4>

                      <p className="mt-1 line-clamp-1 text-xs text-slate-400">
                        {site.shortDescription}
                      </p>

                      {/* Color dots & Interactive 5-Star Rating */}
                      <div className="mt-2.5 flex items-center justify-between gap-2">
                        <div className="flex items-center gap-1.5">
                          {[site.colors.primary, site.colors.secondary, site.colors.accent, site.colors.dark].map(
                            (color, idx) => (
                              <span
                                key={idx}
                                className="h-3.5 w-3.5 rounded-full border border-white/20"
                                style={{ backgroundColor: color }}
                                title={color}
                              />
                            )
                          )}
                        </div>

                        {/* Interactive Rating Stars */}
                        <div className="flex items-center gap-0.5" title="Rate template priority (1-5 stars)">
                          {[1, 2, 3, 4, 5].map((star) => {
                            const score = ratings[site.id] || 0
                            const isFilled = star <= score
                            return (
                              <button
                                key={star}
                                type="button"
                                onClick={() => setRating(site.id, score === star ? 0 : star)}
                                className="p-0.5 text-slate-600 hover:text-amber-400 transition"
                                aria-label={`Rate ${star} star${star > 1 ? 's' : ''}`}
                              >
                                <Star className={`h-3.5 w-3.5 ${isFilled ? 'fill-amber-400 text-amber-400' : 'text-slate-600'}`} />
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Personal / Client Note Section */}
                      <div className="mt-3 pt-2.5 border-t border-slate-800/60">
                        {activeEditingNoteId === site.id ? (
                          <div className="flex items-center gap-1.5">
                            <input
                              type="text"
                              value={editingNoteText}
                              onChange={(e) => setEditingNoteText(e.target.value)}
                              placeholder="e.g. Needs dark mode, preferred layout..."
                              className="flex-1 rounded-lg border border-slate-700 bg-slate-950 px-2.5 py-1 text-xs text-white focus:border-amber-400 focus:outline-none"
                              autoFocus
                              onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                  setNote(site.id, editingNoteText)
                                  setActiveEditingNoteId(null)
                                } else if (e.key === 'Escape') {
                                  setActiveEditingNoteId(null)
                                }
                              }}
                            />
                            <button
                              type="button"
                              onClick={() => {
                                setNote(site.id, editingNoteText)
                                setActiveEditingNoteId(null)
                              }}
                              className="rounded-lg bg-amber-500 px-2.5 py-1 text-xs font-bold text-slate-950 hover:bg-amber-400"
                            >
                              Save
                            </button>
                            <button
                              type="button"
                              onClick={() => setActiveEditingNoteId(null)}
                              className="p-1 text-slate-400 hover:text-white"
                            >
                              <X className="h-3.5 w-3.5" />
                            </button>
                          </div>
                        ) : notes[site.id] ? (
                          <div className="flex items-center justify-between gap-2 rounded-lg bg-slate-800/50 px-2.5 py-1.5 text-xs text-amber-200/90 border border-slate-800">
                            <div className="flex items-center gap-1.5 min-w-0">
                              <MessageSquare className="h-3 w-3 text-amber-400 shrink-0" />
                              <span className="truncate italic">"{notes[site.id]}"</span>
                            </div>
                            <button
                              type="button"
                              onClick={() => {
                                setActiveEditingNoteId(site.id)
                                setEditingNoteText(notes[site.id] || '')
                              }}
                              className="text-[10px] text-slate-400 hover:text-amber-300 font-semibold underline shrink-0"
                            >
                              Edit
                            </button>
                          </div>
                        ) : (
                          <button
                            type="button"
                            onClick={() => {
                              setActiveEditingNoteId(site.id)
                              setEditingNoteText('')
                            }}
                            className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-500 hover:text-amber-400 transition"
                          >
                            <MessageSquare className="h-3 w-3" />
                            <span>+ Add note / client comment</span>
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto gap-2 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-800">
                      <Link
                        to={route}
                        onClick={onClose}
                        onMouseEnter={() => prefetchRoute(route)}
                        onTouchStart={() => prefetchRoute(route)}
                        className="inline-flex items-center gap-1.5 rounded-lg bg-white px-3.5 py-1.5 text-xs font-bold text-slate-900 hover:bg-slate-100 transition shadow-sm"
                      >
                        <span>Open</span>
                        <ExternalLink className="h-3 w-3" />
                      </Link>

                      <button
                        type="button"
                        onClick={() => toggle(site.id)}
                        className="p-1.5 text-slate-400 hover:text-rose-400 transition"
                        title="Remove from shortlist"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Drawer Footer */}
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-4 flex items-center justify-between text-xs text-slate-400">
          <span>
            {favoritedWebsites.length} of {allWebsites.length} templates shortlisted
          </span>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-300 hover:text-white font-bold transition"
          >
            Close
          </button>
        </div>
      </div>

      {/* Full-Screen Live Split-Screen Comparison Modal */}
      <LiveSplitCompareModal
        isOpen={isLiveSplitOpen}
        onClose={() => setIsLiveSplitOpen(false)}
        initialSiteA={comparedWebsites[0] || favoritedWebsites[0]}
        initialSiteB={comparedWebsites[1] || favoritedWebsites[1]}
        availableSites={favoritedWebsites.length > 0 ? favoritedWebsites : allWebsites}
      />
    </div>
  )
}
