import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Building2, Sparkles, Eye, Play, Pause, ArrowUpRight, X, ArrowRight } from 'lucide-react'
import { AnimatedSection, Container, CTAButton } from '../../components'
import { realEstateWebsites, WebsiteDesign } from '../../data/websites'
import { useSafeInterval } from '../../hooks/useSafeInterval'
import { useFavorites } from '../../utils/favorites'
import { prefetchRoute } from '../../utils/routePrefetch'

const marketSignals = [
  'Luxury listings',
  'Seller strategy',
  'Neighborhood guides',
  'Buyer funnels',
  'Open houses',
  'Agent trust',
]

const pageNotes = [
  {
    title: 'Search Before Sales',
    text: 'Real estate visitors need instant orientation: location, price range, lifestyle fit, and a clear next action.',
  },
  {
    title: 'Trust Is The Product',
    text: 'Agent credibility, market proof, and transparent process matter as much as the property photography.',
  },
  {
    title: 'Neighborhood Context',
    text: 'The best property pages sell the area too: schools, commute, dining, parks, and investment confidence.',
  },
]

const realEstateImages: Record<string, string> = {
  'skyline-realty-group': '/images/realestate/skyline-realty.webp',
  'harborkey-homes': '/images/realestate/harborkey-homes.webp',
  'apex-commercial-realty': '/images/realestate/apex-commercial.webp',
  'nestpath-mortgage': '/images/realestate/nestpath-mortgage.webp',
  'cedar-stone-estates': '/images/realestate/cedar-stone.webp',
  'metroloft-rentals': '/images/realestate/meto-loft.webp',
  'foundry-property-group': '/images/realestate/foundry-property.webp',
  'suncrest-vacation-villas': '/images/realestate/suncrest-villas.webp',
  'oakline-property-management': '/images/realestate/oakline-property.webp',
  'keystart-realty': '/images/realestate/keystar.webp',
}

function getRealEstateImage(website: WebsiteDesign): string {
  return realEstateImages[website.slug] || realEstateImages[website.id] || website.image || ''
}

function RealEstateCard({
  website,
  index,
  onQuickView,
}: {
  website: WebsiteDesign
  index: number
  onQuickView: (site: WebsiteDesign) => void
}) {
  const { isFavorited, toggle } = useFavorites(website.id)
  const isLive = website.status === 'completed' || website.status === 'live'
  const routePath = `/real-estate/${website.slug}`
  const cardImage = getRealEstateImage(website)

  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-[#dbe4ef] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#c5a069]">
      <div
        className="relative aspect-[16/10] overflow-hidden bg-slate-900"
        style={{
          backgroundImage: `linear-gradient(145deg, ${website.colors.secondary} 0%, ${website.colors.primary} 58%, ${website.colors.dark} 100%)`,
        }}
      >
        {cardImage ? (
          <img
            src={cardImage}
            alt={`${website.title} website preview`}
            className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            role="img"
            aria-label={`${website.title} conceptual property preview placeholder`}
            className="absolute inset-0"
          >
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(90deg,rgba(255,255,255,0.28)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.28)_1px,transparent_1px)] [background-size:32px_32px]" />
            <div className="absolute bottom-0 left-[10%] h-[42%] w-[30%] bg-white/25 shadow-2xl" />
            <div className="absolute bottom-0 left-[38%] h-[68%] w-[28%] bg-white/35 shadow-2xl" />
            <div className="absolute bottom-0 right-[8%] h-[52%] w-[28%] bg-white/20 shadow-2xl" />
            <div className="absolute left-[44%] top-[23%] h-2 w-[16%] bg-white/55" />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-black/20" />

        <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#153e75] shadow-sm backdrop-blur-sm">
          {isLive ? 'Live Concept' : 'Coming Soon'}
        </div>

        {/* Shortlist Heart Toggle */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            toggle()
          }}
          title={isFavorited ? 'Remove from shortlist' : 'Save to shortlist'}
          className={`absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md shadow-sm transition hover:scale-110 active:scale-95 ${
            isFavorited
              ? 'bg-rose-500 text-white shadow-rose-500/30'
              : 'bg-black/40 text-white hover:bg-black/60 hover:text-rose-400'
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorited ? 'fill-white' : ''}`} />
        </button>

        <div className="absolute bottom-3 left-4 text-xs font-black uppercase tracking-[0.16em] text-white/90 drop-shadow">
          Concept {String(index + 1).padStart(2, '0')}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#c5a069]">
          {website.marketLabel}
        </p>
        <h3 className="re-display mt-2 text-2xl font-bold leading-tight text-[#09111f] group-hover:text-[#153e75] transition">
          {website.title}
        </h3>
        <p className="mt-1 text-xs font-semibold capitalize text-slate-500">{website.style}</p>
        <p className="mt-3 flex-1 text-xs leading-relaxed text-slate-600 line-clamp-3">
          {website.shortDescription}
        </p>

        {/* Color Palette Dots */}
        <div
          className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4"
          aria-label={`${website.title} color palette`}
        >
          {[website.colors.primary, website.colors.secondary, website.colors.accent, website.colors.dark].map(
            (color) => (
              <span
                key={color}
                className="h-5 w-5 rounded-full border border-slate-200 shadow-sm"
                style={{ backgroundColor: color }}
              />
            ),
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-5 grid grid-cols-2 gap-2 pt-1">
          <button
            type="button"
            onClick={() => onQuickView(website)}
            className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
          >
            <Eye className="h-3.5 w-3.5" />
            <span>Inspect</span>
          </button>

          {isLive ? (
            <Link
              to={routePath}
              onMouseEnter={() => prefetchRoute(routePath)}
              onTouchStart={() => prefetchRoute(routePath)}
              className="flex items-center justify-center gap-1.5 rounded-lg bg-[#153e75] py-2.5 text-xs font-bold text-white transition hover:bg-[#09111f] shadow-sm"
            >
              <span>Launch Site</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          ) : (
            <span
              aria-disabled="true"
              className="flex items-center justify-center rounded-lg border border-slate-200 bg-slate-100 py-2.5 text-xs font-bold text-slate-400 cursor-not-allowed"
            >
              Coming Soon
            </span>
          )}
        </div>
      </div>
    </article>
  )
}

export function RealEstateIndex() {
  const [activeHeroIndex, setActiveHeroIndex] = useState(0)
  const [isHeroPaused, setIsHeroPaused] = useState(false)
  const [previewWebsite, setPreviewWebsite] = useState<WebsiteDesign | null>(null)
  const [activeFilter, setActiveFilter] = useState<'all' | 'shortlist' | 'residential' | 'commercial'>('all')

  const carouselWebsites = realEstateWebsites
  const activeHero = carouselWebsites[activeHeroIndex] || carouselWebsites[0]

  const { favoriteIds, isFavorited: isHeroFavorited, toggle: toggleHeroFavorite } = useFavorites(activeHero?.id)
  const shortlistedCount = realEstateWebsites.filter((w) => favoriteIds.includes(w.id)).length

  const filteredWebsites = useMemo(() => {
    if (activeFilter === 'shortlist') {
      return realEstateWebsites.filter((w) => favoriteIds.includes(w.id))
    }
    if (activeFilter === 'residential') {
      return realEstateWebsites.filter((w) =>
        ['skyline-realty-group', 'harborkey-homes', 'cedar-stone-estates', 'suncrest-vacation-villas', 'metroloft-rentals'].includes(w.id)
      )
    }
    if (activeFilter === 'commercial') {
      return realEstateWebsites.filter((w) =>
        ['apex-commercial-realty', 'foundry-property-group', 'nestpath-mortgage', 'oakline-property-management', 'keystart-realty'].includes(w.id)
      )
    }
    return realEstateWebsites
  }, [activeFilter, favoriteIds])

  // Automatic slide rotation every 5 seconds on page arrival
  useSafeInterval(() => {
    if (isHeroPaused || carouselWebsites.length < 2) return
    setActiveHeroIndex((index) => (index + 1) % carouselWebsites.length)
  }, 5000)

  const moveHero = (direction: number) => {
    setActiveHeroIndex((index) => (index + direction + carouselWebsites.length) % carouselWebsites.length)
  }

  return (
    <main className="re-app bg-[#f8fafc] text-[#0f172a]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        .re-app { font-family: 'Outfit', -apple-system, sans-serif; }
        .re-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .re-hero-slide { opacity: 0; transform: scale(1.03); transition: opacity .85s ease, transform 1.2s ease; }
        .re-hero-slide.is-active { opacity: 1; transform: scale(1); }
        .re-progress { animation: reProgress 5s linear both; transform-origin: left; }
        @keyframes reProgress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @media (prefers-reduced-motion: reduce) { .re-hero-slide { transition: none; } .re-progress { animation: none; } }
      `}</style>

      {/* EXHIBITION HERO CAROUSEL */}
      <section
        className="relative -mt-16 min-h-[100svh] overflow-hidden bg-[#08111f] text-white"
        aria-roledescription="carousel"
        aria-label="Architectural Real Estate Showcase"
      >
        {/* Full-Bleed Clear Background Imagery */}
        {carouselWebsites.map((website, index) => {
          const heroBgImage = getRealEstateImage(website)
          return (
            <div
              key={website.id}
              aria-hidden={index !== activeHeroIndex}
              className={`re-hero-slide absolute inset-0 ${index === activeHeroIndex ? 'is-active' : ''}`}
            >
              <img
                src={heroBgImage}
                alt=""
                className="h-full w-full object-cover object-center"
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
              {/* Crystal-Clear Image Presentation: Subtle Top & Bottom Vignettes Only */}
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,17,31,0.74)_0%,rgba(8,17,31,0.2)_18%,transparent_38%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(8,17,31,0.95)_0%,rgba(8,17,31,0.72)_28%,rgba(8,17,31,0.16)_55%,transparent_80%)]" />
            </div>
          )
        })}

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-between px-5 pb-6 pt-20 sm:px-8 lg:px-12 lg:pb-8 lg:pt-24">
          {/* Top Bar Header */}
          <div className="flex items-center justify-between border-b border-white/20 pb-3 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white/75 backdrop-blur-[2px]">
            <Link to="/" className="transition hover:text-white flex items-center gap-2">
              <span>←</span> 100 Websites Directory
            </Link>
            <span className="hidden sm:inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c5a069]" />
              Architectural & Real Estate Portfolio
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setIsHeroPaused(!isHeroPaused)}
                className="hover:text-white transition p-1"
                title={isHeroPaused ? 'Resume auto-advance' : 'Pause carousel'}
              >
                {isHeroPaused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
              </button>
              <span>
                {String(activeHeroIndex + 1).padStart(2, '0')} / {String(carouselWebsites.length).padStart(2, '0')}
              </span>
            </div>
          </div>

          {/* Unobstructed Center Viewport Area (allows full clear photo to shine) */}
          <div className="flex-1 pointer-events-none min-h-[120px]" />

          {/* Middle-Bottom Presentation - Compact, Elegant & Non-Disturbing */}
          <div className="mx-auto w-full max-w-2xl text-center pb-5 sm:pb-7">
            <div key={activeHero.id} aria-live="polite" className="flex flex-col items-center">
              <div className="mb-2 flex items-center gap-2.5 text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#e6cfa3]">
                <span className="h-px w-5 bg-[#c5a069]/80" />
                <span>
                  {activeHero.marketLabel} · Concept {String(activeHeroIndex + 1).padStart(2, '0')} of{' '}
                  {String(carouselWebsites.length).padStart(2, '0')}
                </span>
                <span className="h-px w-5 bg-[#c5a069]/80" />
              </div>

              <h1 className="re-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] leading-tight tracking-[-0.01em] font-normal text-white drop-shadow-[0_2px_14px_rgba(0,0,0,0.8)]">
                {activeHero.title}
              </h1>

              <p className="mt-2 max-w-lg text-xs sm:text-sm leading-relaxed text-white/85 font-light drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
                {activeHero.shortDescription}.
              </p>

              <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full bg-black/40 px-3 py-0.5 text-[0.68rem] font-semibold text-[#f5ebd7] backdrop-blur-md border border-white/20">
                  ✦ {activeHero.style.split(',').slice(0, 2).join(' · ')}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                <Link
                  to={`/real-estate/${activeHero.slug}`}
                  onMouseEnter={() => prefetchRoute(`/real-estate/${activeHero.slug}`)}
                  className="group inline-flex h-9 sm:h-10 items-center gap-2 bg-white px-5 text-[0.72rem] font-black uppercase tracking-[0.14em] text-[#09111f] transition hover:bg-[#c5a069] hover:text-white rounded-full shadow-lg"
                >
                  <span>Launch Concept</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>

                <button
                  type="button"
                  onClick={() => setPreviewWebsite(activeHero)}
                  className="inline-flex h-9 sm:h-10 items-center gap-2 border border-white/35 bg-black/30 backdrop-blur-md px-4 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/20 rounded-full"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>Inspect Dossier</span>
                </button>

                <button
                  type="button"
                  onClick={() => toggleHeroFavorite()}
                  className="inline-flex h-9 sm:h-10 items-center gap-1.5 border border-white/30 bg-black/30 backdrop-blur-md px-3.5 text-[0.72rem] font-bold uppercase tracking-wider text-white hover:bg-white/20 rounded-full transition"
                >
                  <Heart className={`h-3.5 w-3.5 ${isHeroFavorited ? 'fill-rose-500 text-rose-500' : ''}`} />
                  <span>{isHeroFavorited ? 'Saved' : 'Save'}</span>
                </button>

                <a
                  href="#collection"
                  className="inline-flex h-9 sm:h-10 items-center px-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white/75 hover:text-white transition"
                >
                  <span>All 10 Concepts ↓</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Thumbnail Selector Bar */}
          <div className="grid gap-4 border-t border-white/20 pt-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="grid grid-cols-5 gap-2 lg:grid-cols-10">
              {carouselWebsites.map((website, index) => (
                <button
                  key={website.id}
                  type="button"
                  onClick={() => setActiveHeroIndex(index)}
                  className={`group text-left transition ${activeHeroIndex === index ? 'text-white' : 'text-white/45 hover:text-white/80'}`}
                  aria-label={`Show ${website.title}`}
                >
                  <span className="block h-[2px] overflow-hidden bg-white/25 rounded-full">
                    {activeHeroIndex === index && (
                      <span
                        key={`${index}-${activeHeroIndex}`}
                        className={`re-progress block h-full bg-[#c5a069] ${isHeroPaused ? '[animation-play-state:paused]' : ''}`}
                      />
                    )}
                  </span>
                  <span className="mt-2 hidden truncate text-[0.62rem] font-bold uppercase tracking-[0.1em] xl:block">
                    {website.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex gap-2 justify-self-end">
              <button
                type="button"
                onClick={() => moveHero(-1)}
                className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center border border-white/30 text-lg transition hover:bg-white hover:text-black rounded-sm"
                aria-label="Previous concept"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => moveHero(1)}
                className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center border border-white/30 text-lg transition hover:bg-white hover:text-black rounded-sm"
                aria-label="Next concept"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CURATORIAL SIGNALS BAR */}
      <section className="border-b border-[#dbe4ef] bg-white py-6">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {marketSignals.map((signal) => (
              <span
                key={signal}
                className="rounded-full border border-[#dbe4ef] bg-[#f8fafc] px-4 py-1.5 text-xs font-bold text-slate-700 shadow-sm"
              >
                ✦ {signal}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION: PROPERTY COLLECTION */}
      <section id="collection" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-10 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c5a069]">
                Architectural Portfolio
              </p>
              <h2 className="re-display mt-2 text-4xl font-normal leading-tight text-[#09111f] md:text-5xl">
                Ten brands. Ten distinct real estate markets.
              </h2>
            </div>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600">
              Skyline Realty Group is live and interactive today. Nine additional concepts establish the visual and strategic roadmap for coastal, commercial, mortgage, rental, development, vacation, and first-time buyer experiences.
            </p>
          </AnimatedSection>

          {/* Filter Pills */}
          <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-slate-200 pb-5">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                activeFilter === 'all'
                  ? 'bg-[#153e75] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              All Properties ({realEstateWebsites.length})
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('shortlist')}
              className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold transition ${
                activeFilter === 'shortlist'
                  ? 'bg-rose-500 text-white shadow-sm shadow-rose-500/20'
                  : 'bg-white text-slate-600 hover:bg-rose-50 hover:text-rose-600 border border-slate-200'
              }`}
            >
              <Heart className={`h-3.5 w-3.5 ${activeFilter === 'shortlist' ? 'fill-white' : 'text-rose-500'}`} />
              Shortlisted ({shortlistedCount})
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('residential')}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                activeFilter === 'residential'
                  ? 'bg-[#153e75] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Residential & Luxury
            </button>

            <button
              type="button"
              onClick={() => setActiveFilter('commercial')}
              className={`rounded-full px-4 py-2 text-xs font-bold transition ${
                activeFilter === 'commercial'
                  ? 'bg-[#153e75] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              Commercial & Advisory
            </button>
          </div>

          {filteredWebsites.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <Heart className="mx-auto h-10 w-10 text-slate-300" />
              <h3 className="re-display mt-3 text-2xl font-medium text-slate-800">
                No properties in shortlist yet
              </h3>
              <p className="mt-1 text-xs text-slate-500">
                Click the heart icon on any property card or in the carousel to build your review collection.
              </p>
              <button
                type="button"
                onClick={() => setActiveFilter('all')}
                className="mt-4 inline-flex items-center rounded-lg bg-[#153e75] px-4 py-2 text-xs font-bold text-white hover:bg-[#09111f]"
              >
                Browse All Properties
              </button>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredWebsites.map((website, index) => (
                <RealEstateCard
                  key={website.id}
                  website={website}
                  index={index}
                  onQuickView={setPreviewWebsite}
                />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* SECTION: CATEGORY PRINCIPLES */}
      <section id="principles" className="border-y border-[#dbe4ef] bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 max-w-3xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c5a069]">Category Principles</p>
            <h2 className="re-display mt-2 text-4xl font-normal leading-tight text-[#09111f] md:text-5xl">
              Real estate experiences must eliminate ambiguity immediately.
            </h2>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-3">
            {pageNotes.map((note) => (
              <article key={note.title} className="rounded-xl border border-[#dbe4ef] bg-[#f8fafc] p-7 shadow-sm">
                <h3 className="re-display text-2xl font-normal text-slate-900">{note.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-600">{note.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CONCEPT QUICK-INSPECT MODAL */}
      {previewWebsite && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
          onClick={() => setPreviewWebsite(null)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src={getRealEstateImage(previewWebsite)}
                alt={previewWebsite.title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              <button
                type="button"
                onClick={() => setPreviewWebsite(null)}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white hover:bg-black transition"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="rounded-full bg-[#c5a069] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-[#09111f]">
                  {previewWebsite.marketLabel}
                </span>
                <h3 className="re-display mt-2 text-3xl font-normal text-white">
                  {previewWebsite.title}
                </h3>
                <p className="text-xs text-white/80 capitalize">{previewWebsite.style}</p>
              </div>
            </div>

            <div className="p-6 sm:p-8">
              <p className="text-xs leading-relaxed text-slate-700">
                {previewWebsite.shortDescription}
              </p>

              <div className="mt-6 border-t border-slate-100 pt-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Brand Color Hierarchy
                </span>
                <div className="grid grid-cols-4 gap-2">
                  {[
                    ['Primary', previewWebsite.colors.primary],
                    ['Secondary', previewWebsite.colors.secondary],
                    ['Accent', previewWebsite.colors.accent],
                    ['Dark', previewWebsite.colors.dark],
                  ].map(([label, color]) => (
                    <div key={label} className="rounded-lg border border-slate-200 p-2 text-center">
                      <span
                        className="block h-7 w-full rounded border border-black/10 shadow-inner"
                        style={{ backgroundColor: color }}
                      />
                      <span className="mt-1 block text-[0.65rem] font-bold text-slate-700">{label}</span>
                      <span className="block text-[0.6rem] font-mono text-slate-400">{color}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex gap-3">
                <Link
                  to={`/real-estate/${previewWebsite.slug}`}
                  className="flex-1 rounded-lg bg-[#153e75] py-3 text-center text-xs font-bold uppercase tracking-wider text-white hover:bg-[#09111f] transition shadow"
                >
                  Launch Full Concept →
                </Link>
                <button
                  type="button"
                  onClick={() => setPreviewWebsite(null)}
                  className="rounded-lg border border-slate-200 px-5 py-3 text-xs font-bold text-slate-700 hover:bg-slate-50"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
export default RealEstateIndex
