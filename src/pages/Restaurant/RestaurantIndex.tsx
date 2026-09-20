import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Search, ArrowRight, Utensils, Sparkles, Flame, CheckCircle2, ArrowLeft, Star } from 'lucide-react'
import { Container } from '../../components'
import { restaurantWebsites, WebsiteDesign } from '../../data/websites'
import { prefetchRoute } from '../../utils/routePrefetch'
import { useFavorites } from '../../utils/favorites'
import { useEventListener } from '../../hooks/useEventListener'
import { useSafeInterval } from '../../hooks/useSafeInterval'

function RestaurantCard({ website, index }: { website: WebsiteDesign; index: number }) {
  const { isFavorited, toggle } = useFavorites(website.id)
  const routePath = `/restaurant/${website.slug}`

  return (
    <div className="group relative flex flex-col overflow-hidden rounded-3xl border border-[#e8dec8] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c2410c]/40 hover:shadow-2xl hover:shadow-[#c2410c]/10">
      {/* Visual Header / Preview */}
      <Link
        to={routePath}
        onMouseEnter={() => prefetchRoute(routePath)}
        onTouchStart={() => prefetchRoute(routePath)}
        className="relative block aspect-[16/10] overflow-hidden bg-[#1c1917]"
      >
        {website.image ? (
          <img
            src={website.image}
            alt={`${website.title} website preview`}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            loading="lazy"
            decoding="async"
          />
        ) : (
          <div
            className="h-full w-full"
            style={{
              background: `linear-gradient(135deg, ${website.colors.secondary}, ${website.colors.primary})`,
            }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Live Badge */}
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>Live Concept</span>
        </div>

        {/* Shortlist Heart Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            toggle()
          }}
          title={isFavorited ? 'Remove from shortlist' : 'Save to shortlist'}
          className={`absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 ${
            isFavorited
              ? 'bg-rose-500 text-white shadow-rose-500/40'
              : 'bg-black/50 text-white/80 hover:bg-white hover:text-rose-500'
          }`}
        >
          <Heart className={`h-4 w-4 ${isFavorited ? 'fill-white' : ''}`} />
        </button>

        {/* Bottom Card Image Overlay Info */}
        <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between text-white">
          <span className="text-[11px] font-black uppercase tracking-widest text-[#f0c76a]">
            {website.style.split(',')[0]}
          </span>
          <span className="rounded-md bg-white/15 px-2 py-0.5 text-[10px] font-bold backdrop-blur-xs">
            0{index + 1}
          </span>
        </div>
      </Link>

      {/* Card Body */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          {/* Palette Swatches */}
          <div className="flex items-center gap-1.5 mb-3">
            {[website.colors.primary, website.colors.accent, website.colors.secondary, website.colors.dark].map(
              (color, idx) => (
                <span
                  key={idx}
                  className="h-2.5 w-2.5 rounded-full border border-black/10 shadow-2xs"
                  style={{ backgroundColor: color }}
                  title={`Palette color: ${color}`}
                />
              ),
            )}
            <span className="ml-1 text-[10px] font-bold uppercase tracking-wider text-[#8c7e6d]">
              Brand Palette
            </span>
          </div>

          <Link
            to={routePath}
            className="block text-2xl font-black tracking-tight text-[#171512] transition group-hover:text-[#c2410c]"
          >
            {website.title}
          </Link>

          <p className="mt-2.5 text-xs leading-5 text-[#6d6254] line-clamp-2">
            {website.shortDescription}
          </p>
        </div>

        {/* Footer Action */}
        <div className="mt-6 pt-4 border-t border-[#f0e8d9] flex items-center justify-between">
          <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#a0907d]">
            Responsive UX
          </span>
          <Link
            to={routePath}
            className="inline-flex items-center gap-1.5 rounded-xl bg-[#171512] px-4 py-2 text-xs font-black text-white transition hover:bg-[#c2410c] active:scale-95"
          >
            <span>Open Website</span>
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export function RestaurantIndex() {
  const completedCount = restaurantWebsites.filter((w) => w.status === 'completed').length
  const carouselRestaurants = restaurantWebsites.filter((w) => w.status === 'completed' && w.image)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<'all' | 'cozy' | 'modern' | 'flavor' | 'shortlist'>('all')
  const { favoriteIds } = useFavorites()
  const activeRestaurant = carouselRestaurants[activeSlide] ?? restaurantWebsites[0]

  // Auto slide timer
  useSafeInterval(() => {
    if (isCarouselPaused || carouselRestaurants.length < 2) return
    setActiveSlide((c) => (c + 1) % carouselRestaurants.length)
  }, 6000)

  // Arrow key navigation
  useEventListener('keydown', (e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') setActiveSlide((c) => (c + 1) % carouselRestaurants.length)
    if (e.key === 'ArrowLeft') setActiveSlide((c) => (c - 1 + carouselRestaurants.length) % carouselRestaurants.length)
  })

  // Filter and search logic
  const filteredRestaurants = useMemo(() => {
    let list = restaurantWebsites

    if (activeFilter === 'shortlist') {
      list = list.filter((w) => favoriteIds.includes(w.id))
    } else if (activeFilter === 'cozy') {
      list = list.filter(
        (w) =>
          w.style.includes('warm') ||
          w.style.includes('cozy') ||
          w.style.includes('handcrafted') ||
          w.slug.includes('coffee') ||
          w.slug.includes('bakery') ||
          w.slug.includes('tea'),
      )
    } else if (activeFilter === 'modern') {
      list = list.filter(
        (w) =>
          w.style.includes('modern') ||
          w.style.includes('urban') ||
          w.style.includes('bold') ||
          w.slug.includes('urban') ||
          w.slug.includes('burger'),
      )
    } else if (activeFilter === 'flavor') {
      list = list.filter(
        (w) =>
          w.style.includes('flavor') ||
          w.style.includes('cultural') ||
          w.style.includes('rich') ||
          w.slug.includes('spice') ||
          w.slug.includes('steak') ||
          w.slug.includes('ocean'),
      )
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim()
      list = list.filter(
        (w) =>
          w.title.toLowerCase().includes(q) ||
          w.shortDescription.toLowerCase().includes(q) ||
          w.style.toLowerCase().includes(q),
      )
    }

    return list
  }, [activeFilter, favoriteIds, searchQuery])

  const moveSlide = (direction: number) => {
    setActiveSlide((c) => (c + direction + carouselRestaurants.length) % carouselRestaurants.length)
  }

  const diningTags = [
    { label: 'Artisan Coffee', emoji: '☕', slug: 'brewnest-coffee' },
    { label: 'Prime Steakhouse', emoji: '🥩', slug: 'ember-steakhouse' },
    { label: 'Wood-Fired Pizza', emoji: '🍕', slug: 'luna-pizza-house' },
    { label: 'Fusion Grill', emoji: '🔥', slug: 'spiceroute-grill' },
    { label: 'Coastal Seafood', emoji: '🦞', slug: 'oceanplate-seafood' },
    { label: 'Fresh Bakery', emoji: '🥐', slug: 'golden-crust-bakery' },
    { label: 'Craft Burgers', emoji: '🍔', slug: 'burger-craft' },
    { label: 'Organic Bowls', emoji: '🥗', slug: 'freshbowl-cafe' },
  ]

  const clientAdvantages = [
    {
      icon: <Utensils className="h-5 w-5 text-[#c2410c]" />,
      title: 'Visual Appetite Pacing',
      desc: 'Hero food photography, atmospheric lighting, and high-impact menu cards engineered to create craving in under 3 seconds.',
    },
    {
      icon: <CheckCircle2 className="h-5 w-5 text-emerald-600" />,
      title: 'Zero-Friction Reservations',
      desc: 'Seamless booking pathways tailored for OpenTable, Resy, Toast, or direct private dining requests right from the hero.',
    },
    {
      icon: <Star className="h-5 w-5 text-[#f59e0b]" />,
      title: 'Distinct Brand Atmospheres',
      desc: 'No shared theme templates. A cozy bakery feels organic and warm, while a late-night steakhouse feels moody, masculine, and flame-lit.',
    },
    {
      icon: <Sparkles className="h-5 w-5 text-indigo-600" />,
      title: 'Mobile-First Ordering Flow',
      desc: 'Over 85% of restaurant customers browse on mobile. Every layout features fluid touch navigation and thumb-friendly menu taps.',
    },
  ]

  return (
    <main className="bg-[#fcfaf6] text-[#171512] selection:bg-[#c2410c] selection:text-white">
      {/* ── CINEMATIC RESTAURANT HERO CAROUSEL ─────────────────────────────── */}
      <section
        aria-roledescription="carousel"
        aria-label="Featured restaurant concepts"
        onMouseEnter={() => setIsCarouselPaused(true)}
        onMouseLeave={() => setIsCarouselPaused(false)}
        className="relative overflow-hidden bg-[#090807] text-white pt-10 pb-16 lg:pt-14 lg:pb-20"
      >
        {/* Background slide cross-fade */}
        {carouselRestaurants.map((website, index) => (
          <div
            key={website.id}
            aria-hidden={index !== activeSlide}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === activeSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={website.image}
              alt=""
              className="h-full w-full object-cover blur-[2px] opacity-40 scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#090807] via-[#090807]/90 to-[#090807]/50" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090807] via-transparent to-black/60" />
          </div>
        ))}

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Top Breadcrumb & Status */}
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-6">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-white/70 transition hover:text-[#f0c76a]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>100Web Portfolio</span>
            </Link>

            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-bold text-white/80 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{completedCount} Restaurant Concepts Live</span>
            </div>
          </div>

          {/* Carousel Main Stage */}
          <div className="grid items-center gap-10 py-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-16">
            {/* Left: Text & Pitch */}
            <div key={`copy-${activeRestaurant.id}`} className="max-w-2xl animate-in fade-in slide-in-from-left-4 duration-300">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#f0c76a]/25 bg-[#f0c76a]/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-[#f0c76a]">
                <Flame className="h-3.5 w-3.5" />
                Featured Concept · 0{activeSlide + 1} of {carouselRestaurants.length}
              </div>

              <h1 className="mt-5 text-4xl font-black leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
                {activeRestaurant.title}
              </h1>

              <p className="mt-3 text-xs font-black uppercase tracking-[0.22em] text-white/50">
                {activeRestaurant.style}
              </p>

              <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">
                {activeRestaurant.shortDescription}. Handcrafted with menu flow, reservation urgency, and signature hospitality branding.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <Link
                  to={`/restaurant/${activeRestaurant.slug}`}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#f0c76a] px-7 py-3.5 text-xs font-black uppercase tracking-wider text-[#090807] shadow-xl shadow-[#f0c76a]/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-white active:scale-95"
                >
                  <span>Explore This Concept</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>

                <a
                  href="#concepts"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.06] px-6 py-3.5 text-xs font-bold text-white backdrop-blur-md transition hover:bg-white/15"
                >
                  Browse All 10 Concepts
                </a>
              </div>
            </div>

            {/* Right: Interactive Showcase Window */}
            <div key={`card-${activeRestaurant.id}`} className="relative animate-in fade-in zoom-in-95 duration-300">
              <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
                <Link
                  to={`/restaurant/${activeRestaurant.slug}`}
                  className="group relative block aspect-[16/10] overflow-hidden rounded-2xl bg-black/40"
                >
                  <img
                    src={activeRestaurant.image}
                    alt={`${activeRestaurant.title} preview`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f0c76a]">
                        Interactive Live Preview
                      </p>
                      <p className="text-xl font-black">{activeRestaurant.title}</p>
                    </div>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f0c76a] text-sm font-black text-[#090807] shadow-lg transition group-hover:scale-110">
                      ↗
                    </span>
                  </div>
                </Link>
              </div>

              {/* Slide Navigation Buttons */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => moveSlide(-1)}
                    aria-label="Previous concept"
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-sm font-bold transition hover:bg-white hover:text-black"
                  >
                    ←
                  </button>
                  <button
                    type="button"
                    onClick={() => moveSlide(1)}
                    aria-label="Next concept"
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 bg-white/5 text-sm font-bold transition hover:bg-white hover:text-black"
                  >
                    →
                  </button>
                </div>

                <div className="flex gap-1.5">
                  {carouselRestaurants.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveSlide(idx)}
                      aria-label={`Go to slide ${idx + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        idx === activeSlide ? 'w-8 bg-[#f0c76a]' : 'w-2 bg-white/30 hover:bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Carousel Thumbnail Strip */}
          <div className="mt-6 flex gap-2.5 overflow-x-auto pb-2 [scrollbar-width:none]">
            {carouselRestaurants.map((website, index) => (
              <button
                key={website.id}
                type="button"
                onClick={() => setActiveSlide(index)}
                className={`group relative h-16 min-w-[110px] overflow-hidden rounded-xl border text-left transition-all ${
                  index === activeSlide
                    ? 'border-[#f0c76a] ring-2 ring-[#f0c76a]/30 opacity-100'
                    : 'border-white/10 opacity-50 hover:opacity-90'
                }`}
              >
                <img src={website.image} alt="" className="absolute inset-0 h-full w-full object-cover" />
                <span className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <span className="absolute bottom-2 left-2 right-2 truncate text-[10px] font-black uppercase text-white">
                  {website.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── QUICK CUISINE TAGS STRIP ──────────────────────────────────────── */}
      <section className="border-b border-[#e8dec8] bg-white py-6">
        <Container>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <span className="text-xs font-black uppercase tracking-wider text-[#8c7e6d]">
              Explore by dining style:
            </span>
            <div className="flex flex-wrap gap-2">
              {diningTags.map((tag) => (
                <Link
                  key={tag.label}
                  to={`/restaurant/${tag.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[#e8dec8] bg-[#fcfaf6] px-3.5 py-1.5 text-xs font-bold text-[#5c5040] transition hover:border-[#c2410c] hover:bg-[#c2410c]/5 hover:text-[#c2410c]"
                >
                  <span>{tag.emoji}</span>
                  <span>{tag.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── ALL CONCEPTS GALLERY & DIRECTORY ─────────────────────────────── */}
      <section id="concepts" className="py-20 md:py-28">
        <Container>
          {/* Header */}
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c2410c]/20 bg-[#c2410c]/10 px-4 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#c2410c]">
                <Utensils className="h-3.5 w-3.5" />
                100Web Dining Collection
              </div>
              <h2 className="mt-4 text-3xl font-black tracking-tight text-[#171512] sm:text-5xl">
                Every restaurant mood, ready to launch.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#6d6254]">
              Each concept features complete menus, atmosphere pacing, online booking flows, and distinct
              color palettes built for culinary conversion.
            </p>
          </div>

          {/* Search Bar & Filter Switchers */}
          <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8c7e6d]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by restaurant name, cuisine, or vibe..."
                className="w-full rounded-full border border-[#e8dec8] bg-white py-2.5 pl-11 pr-4 text-xs font-bold text-[#171512] placeholder-[#a0907d] shadow-2xs focus:border-[#c2410c] focus:outline-none"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 rounded-full bg-gray-200 px-1.5 py-0.5 text-[10px] font-bold text-gray-700"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5">
              {[
                { id: 'all', label: `All (${restaurantWebsites.length})` },
                { id: 'cozy', label: 'Cozy & Bakery' },
                { id: 'modern', label: 'Urban & Fast Casual' },
                { id: 'flavor', label: 'Steak & Seafood' },
                {
                  id: 'shortlist',
                  label: `Saved (${restaurantWebsites.filter((w) => favoriteIds.includes(w.id)).length})`,
                },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveFilter(tab.id as any)}
                  className={`rounded-full px-4 py-2 text-xs font-bold transition-all ${
                    activeFilter === tab.id
                      ? 'bg-[#171512] text-white shadow-md'
                      : 'border border-[#e8dec8] bg-white text-[#6d6254] hover:border-[#c2410c]/30 hover:text-[#171512]'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          {filteredRestaurants.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-[#e8dec8] bg-white p-16 text-center shadow-xs">
              <Utensils className="mx-auto h-10 w-10 text-[#a0907d]" />
              <p className="mt-4 text-lg font-black text-[#171512]">No restaurant concepts found</p>
              <p className="mt-1 text-sm text-[#6d6254]">
                {activeFilter === 'shortlist'
                  ? 'You have not saved any restaurant concepts yet. Click the heart icon on any card to save favorites!'
                  : 'Try searching for a different term or reset your filters.'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter('all')
                  setSearchQuery('')
                }}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#171512] px-6 py-2.5 text-xs font-black text-white transition hover:bg-[#c2410c]"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredRestaurants.map((website, index) => (
                <RestaurantCard key={website.id} website={website} index={index} />
              ))}
            </div>
          )}
        </Container>
      </section>

      {/* ── CLIENT VALUE: WHY RESTAURANT WEBSITES SUCCEED ─────────────────── */}
      <section className="border-t border-[#e8dec8] bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-3xl text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#f59e0b]/25 bg-[#f59e0b]/10 px-4 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#d97706]">
              <Sparkles className="h-3.5 w-3.5" />
              Conversion UX Strategy
            </div>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-[#171512] sm:text-5xl">
              Why hospitality brands thrive on these architectures
            </h2>
            <p className="mt-4 text-base leading-7 text-[#6d6254]">
              Restaurant websites shouldn't look like tech startups. We engineer distinct visual appetites
              paired with booking and menu pathways that turn hungry visitors into booked tables.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {clientAdvantages.map((adv) => (
              <div
                key={adv.title}
                className="flex flex-col justify-between rounded-3xl border border-[#e8dec8] bg-[#fcfaf6] p-7 transition hover:-translate-y-1 hover:border-[#c2410c]/30 hover:shadow-xl"
              >
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white shadow-xs border border-[#e8dec8]">
                    {adv.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-black text-[#171512]">{adv.title}</h3>
                  <p className="mt-2.5 text-xs leading-6 text-[#6d6254]">{adv.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CALL TO ACTION BANNER FOR RESTAURANT OWNERS ───────────────────── */}
      <section className="bg-[#090807] py-20 text-white md:py-28">
        <Container>
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#1c1917] via-[#0f0e0d] to-[#090807] p-8 sm:p-14 shadow-2xl">
            <div className="absolute right-0 top-0 h-96 w-96 bg-[radial-gradient(circle_at_80%_20%,rgba(240,199,106,0.12),transparent_70%)] pointer-events-none" />

            <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
              <div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#f0c76a]">
                  Hospitality Partnerships
                </span>
                <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
                  Need a bespoke website for your restaurant, café, or dining group?
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
                  Pick any of these 10 live foundations to launch in under a week, or collaborate with Umair Ahmad
                  to design a completely bespoke digital flagship tailored to your chef, menu, and interior.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href="https://github.com/umairny"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#f0c76a] px-7 py-3.5 text-xs font-black uppercase tracking-wider text-[#090807] shadow-xl shadow-[#f0c76a]/20 transition hover:bg-white active:scale-95"
                  >
                    <span>Inquire for Custom Restaurant Build</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>

                  <Link
                    to="/"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3.5 text-xs font-bold text-white transition hover:bg-white/10"
                  >
                    Return to 100Web Home
                  </Link>
                </div>
              </div>

              {/* Quick Specs Highlight */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 backdrop-blur-md">
                <div className="p-3">
                  <p className="text-3xl font-black text-[#f0c76a]">10</p>
                  <p className="text-xs font-bold text-white">Distinct Concepts</p>
                  <p className="text-[10px] text-white/40 mt-0.5">Zero cloned layouts</p>
                </div>
                <div className="p-3">
                  <p className="text-3xl font-black text-emerald-400">&lt; 1s</p>
                  <p className="text-xs font-bold text-white">Load Time</p>
                  <p className="text-[10px] text-white/40 mt-0.5">Pure React 19</p>
                </div>
                <div className="p-3">
                  <p className="text-3xl font-black text-sky-400">100%</p>
                  <p className="text-xs font-bold text-white">Mobile Ready</p>
                  <p className="text-[10px] text-white/40 mt-0.5">Touch menu flows</p>
                </div>
                <div className="p-3">
                  <p className="text-3xl font-black text-rose-400">Days</p>
                  <p className="text-xs font-bold text-white">Launch Speed</p>
                  <p className="text-[10px] text-white/40 mt-0.5">Vs 3 months agency</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
