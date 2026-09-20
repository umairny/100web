import { useState, useMemo } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Dumbbell,
  Gauge,
  HeartPulse,
  Play,
  TimerReset,
  Heart,
  Sparkles,
  Zap
} from 'lucide-react'
import { fitnessWebsites, WebsiteDesign } from '../../data/websites'
import { useFavorites } from '../../utils/favorites'
import { prefetchRoute } from '../../utils/routePrefetch'
import { imageUrl } from '../../assets/optimized'

const fitnessCardMockups: Record<string, string> = {
  'pulseforge-fitness': imageUrl('fitness/pulseforge-fitness.webp'),
  'corelab-pilates': imageUrl('fitness/corelab-pilates.webp'),
  'irondistrict-gym': imageUrl('fitness/irondistrict-gym.webp'),
  'peakrun-coaching': imageUrl('fitness/peakrun-coaching.webp'),
  'flowstate-yoga': imageUrl('fitness/flowstate-yoga.webp'),
  'boxhouse-training': imageUrl('fitness/boxhouse-training.webp'),
  'vitalform-wellness': imageUrl('fitness/vitaform-wellness.webp'),
  'ridehaus-cycling': imageUrl('fitness/redehaus-cycling.webp'),
  'elevate-climbing': imageUrl('fitness/elevate-climbing.webp'),
  'reset-recovery-club': imageUrl('fitness/resetrecovery-club.webp'),
}

const heroShowcaseItems = [
  {
    id: 'pulseforge-fitness',
    title: 'PulseForge Fitness',
    tagline: 'High-Velocity Performance',
    tag: 'Athletic Performance',
    slug: 'pulseforge-fitness',
    image: imageUrl('fitness/pulseforge/hero.webp'),
    intensity: '09.4',
    metric: '94% Heart Max',
    highlight: 'Data-driven conditioning & speed development',
  },
  {
    id: 'irondistrict-gym',
    title: 'Iron District',
    tagline: 'Raw Strength & Power',
    tag: 'Strength Facility',
    slug: 'irondistrict-gym',
    image: imageUrl('fitness/IronDistrict/hero.webp'),
    intensity: '09.8',
    metric: 'Heavy Compound',
    highlight: 'Competition-spec barbells & power racks',
  },
  {
    id: 'ridehaus-cycling',
    title: 'RideHaus Cycling',
    tagline: 'Rhythm & RPM Watts',
    tag: 'Indoor Cycling',
    slug: 'ridehaus-cycling',
    image: imageUrl('fitness/RideHaus/hero.webp'),
    intensity: '08.9',
    metric: '145 BPM Cadence',
    highlight: 'Sub-bass acoustic lighting & watt tracking',
  },
  {
    id: 'flowstate-yoga',
    title: 'FlowState Yoga',
    tagline: 'Deep Breath & Flow',
    tag: 'Mindful Yoga',
    slug: 'flowstate-yoga',
    image: imageUrl('fitness/FlowState/hero.webp'),
    intensity: '07.2',
    metric: 'Vinyasa Sync',
    highlight: 'Architectural warmth & restorative flow',
  },
  {
    id: 'elevate-climbing',
    title: 'Elevate Climbing',
    tagline: 'Problem Solving & Grip',
    tag: 'Bouldering & Walls',
    slug: 'elevate-climbing',
    image: imageUrl('fitness/ElevateClimbing/hero.webp'),
    intensity: '09.1',
    metric: 'V8 Boulder Reset',
    highlight: '60-degree overhangs & technical slab',
  },
]

const trainingPillars = [
  ['01', 'Strength'],
  ['02', 'Conditioning'],
  ['03', 'Mobility'],
  ['04', 'Nutrition'],
  ['05', 'Small Groups'],
  ['06', '1:1 Coaching'],
]

const uxNotes = [
  ['01', 'Proof first', 'Visible outcomes, trainer credibility, and a welcoming first step turn interest into action.'],
  ['02', 'Schedule clarity', 'Classes, sessions, trials, and membership paths should be understood in seconds.'],
  ['03', 'Energy with control', 'The interface can feel powerful and urgent without becoming noisy or difficult to use.'],
]

function FitnessCard({
  website,
  index,
  total,
}: {
  website: WebsiteDesign
  index: number
  total: number
}) {
  const { isFavorited, toggle } = useFavorites(website.id)
  const routePath = `/fitness/${website.slug}`
  const displayImage = fitnessCardMockups[website.id] || website.image

  return (
    <Link
      to={routePath}
      onMouseEnter={() => prefetchRoute(routePath)}
      onTouchStart={() => prefetchRoute(routePath)}
      className="group overflow-hidden border border-white/15 bg-[#0d1d13] p-3 transition duration-500 hover:-translate-y-1 hover:border-[#dfff3f] hover:shadow-2xl hover:shadow-black/30 relative flex flex-col justify-between"
    >
      <div>
        <div className="relative aspect-[16/10] overflow-hidden bg-[#07130c]">
          {displayImage && (
            <img
              src={displayImage}
              alt={`${website.title} website preview`}
              className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
              loading="lazy"
              decoding="async"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#07130c]/90 via-[#07130c]/20 to-transparent pointer-events-none" />
          <span className="absolute left-3 top-3 sm:left-4 sm:top-4 bg-[#dfff3f] px-2.5 py-1 sm:px-3 sm:py-1.5 text-[0.58rem] font-black uppercase tracking-[0.15em] text-[#07130c]">
            Live 0{index + 1}
          </span>

          {/* Shortlist Heart Button */}
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              toggle()
            }}
            title={isFavorited ? 'Remove from shortlist' : 'Save to shortlist'}
            className={`absolute right-3 top-3 sm:right-4 sm:top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md shadow-sm transition hover:scale-110 active:scale-95 ${
              isFavorited
                ? 'bg-rose-500 text-white shadow-rose-500/30'
                : 'bg-[#07130c]/80 text-white/80 hover:bg-[#07130c] hover:text-rose-400 border border-white/20'
            }`}
          >
            <Heart className={`h-4 w-4 ${isFavorited ? 'fill-white' : ''}`} />
          </button>

          <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 flex gap-1 sm:gap-1.5">
            {[website.colors.primary, website.colors.secondary, website.colors.accent, website.colors.dark].map(
              (color) => (
                <span key={color} className="h-4 w-4 sm:h-5 sm:w-5 border border-white/60 shadow-sm" style={{ backgroundColor: color }} />
              )
            )}
          </div>
        </div>

        <div className="p-4 sm:p-5 lg:p-6">
          <p className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#dfff3f]">
            {website.id === 'pulseforge-fitness'
              ? 'Performance coaching'
              : website.id === 'corelab-pilates'
              ? 'Pilates studio'
              : website.id === 'irondistrict-gym'
              ? 'Strength facility'
              : website.id === 'peakrun-coaching'
              ? 'Running coaching'
              : website.id === 'flowstate-yoga'
              ? 'Yoga studio'
              : website.id === 'vitalform-wellness'
              ? 'Wellness platform'
              : website.id === 'ridehaus-cycling'
              ? 'Cycling studio'
              : website.id === 'elevate-climbing'
              ? 'Climbing gym'
              : website.id === 'reset-recovery-club'
              ? 'Recovery studio'
              : 'Boxing studio'}
          </p>
          <div className="mt-2.5 flex items-start justify-between gap-3">
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase leading-tight tracking-[-0.04em] text-white">
              {website.title}
            </h3>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-[#dfff3f] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
          <p className="mt-3 line-clamp-2 text-xs sm:text-sm leading-6 text-white/60">{website.shortDescription}</p>
        </div>
      </div>

      <div className="px-4 pb-4 sm:px-5 sm:pb-5 lg:px-6 lg:pb-6">
        <div className="flex items-center justify-between border-t border-white/10 pt-3">
          <span className="text-[0.58rem] font-black uppercase tracking-[0.16em] text-white/40">Open experience</span>
          <span className="text-xs font-black text-[#dfff3f]">
            0{index + 1} / 0{total}
          </span>
        </div>
      </div>
    </Link>
  )
}

export function FitnessIndex() {
  const [activeFilter, setActiveFilter] = useState<'all' | 'shortlist' | 'strength' | 'mindful' | 'endurance'>('all')
  const [activeHeroIndex, setActiveHeroIndex] = useState(0)
  const { favoriteIds } = useFavorites()
  const liveWebsites = fitnessWebsites.filter(
    (website) => website.status === 'completed' || website.status === 'live'
  )
  const shortlistedCount = liveWebsites.filter((w) => favoriteIds.includes(w.id)).length

  const filteredWebsites = useMemo(() => {
    if (activeFilter === 'shortlist') {
      return liveWebsites.filter((w) => favoriteIds.includes(w.id))
    }
    if (activeFilter === 'strength') {
      return liveWebsites.filter((w) =>
        ['pulseforge-fitness', 'irondistrict-gym', 'boxhouse-training'].includes(w.id)
      )
    }
    if (activeFilter === 'mindful') {
      return liveWebsites.filter((w) =>
        ['flowstate-yoga', 'corelab-pilates', 'vitalform-wellness'].includes(w.id)
      )
    }
    if (activeFilter === 'endurance') {
      return liveWebsites.filter((w) =>
        ['peakrun-coaching', 'ridehaus-cycling', 'elevate-climbing', 'reset-recovery-club'].includes(w.id)
      )
    }
    return liveWebsites
  }, [activeFilter, favoriteIds, liveWebsites])

  const currentHero = heroShowcaseItems[activeHeroIndex] || heroShowcaseItems[0]

  return (
    <main className="fitness-index-kinetic w-full max-w-full overflow-x-hidden min-h-screen bg-[#f4f1e8] text-[#07130c] font-sans selection:bg-[#FF3B30] selection:text-white">
      {/* Hero Section */}
      <section className="relative min-h-screen border-b border-[#07130c] pt-12 sm:pt-16">
        <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(90deg,#07130c_1px,transparent_1px),linear-gradient(#07130c_1px,transparent_1px)] [background-size:5vw_5vw] pointer-events-none" />
        
        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-[100rem] lg:grid-cols-[1.05fr_.95fr]">
          {/* Left Column: Headline and Overview */}
          <div className="flex flex-col justify-between border-[#07130c] px-4 py-8 sm:px-8 sm:py-12 lg:border-r lg:px-10 lg:py-16 xl:px-16">
            <div className="flex items-center justify-between gap-4">
              <Link to="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] transition hover:text-[#14532d]">
                <ArrowDown className="h-4 w-4 rotate-90" /> Portfolio home
              </Link>
              <span className="rounded-full border border-[#07130c] px-3 py-1 text-[0.6rem] font-black uppercase tracking-[0.16em]">
                Category 04 / 10
              </span>
            </div>

            <div className="py-8 sm:py-12 lg:py-14">
              <p className="flex items-center gap-2.5 text-[0.68rem] font-black uppercase tracking-[0.25em] text-[#14532d]">
                <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#f97316]" /> Fitness website collection
              </p>
              <h1 className="mt-5 text-[clamp(2.75rem,9.5vw,11.5rem)] font-black uppercase leading-[0.76] tracking-[-0.08em] sm:leading-[0.72] lg:leading-[0.68]">
                Fit<span className="text-[#14532d]">/</span><br />ness
              </h1>
              <p className="mt-7 max-w-xl text-lg sm:text-xl md:text-2xl font-semibold leading-snug tracking-[-0.02em]">
                Digital experiences engineered for momentum, trust, and the courage to start.
              </p>
              <p className="mt-4 max-w-lg text-xs sm:text-sm leading-6 sm:leading-7 text-[#4b554f]">
                A category hub for gyms, studios, trainers, wellness programs, and coaching brands that need users to understand the offer and take the first step fast.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a 
                href="#live-concepts" 
                className="group inline-flex min-h-12 sm:min-h-14 items-center justify-center gap-3 bg-[#07130c] px-6 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#14532d]"
              >
                Enter live design <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a 
                href="#roadmap" 
                className="inline-flex min-h-12 sm:min-h-14 items-center justify-center gap-3 border border-[#07130c] bg-transparent px-6 text-xs font-black uppercase tracking-[0.16em] transition hover:bg-[#dfff3f]"
              >
                View training board <ArrowDown className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Performance Console with Hero Images */}
          <div className="relative flex flex-col justify-center bg-[#07130c] p-4 text-white sm:p-6 lg:p-10 xl:p-14">
            <div className="flex items-center justify-between pb-3 sm:pb-4 border-b border-white/15">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#f97316]" />
                <span className="h-2 w-2 rounded-full bg-[#dfff3f]" />
                <span className="h-2 w-2 rounded-full bg-white/25" />
                <span className="ml-2 text-[0.6rem] font-black uppercase tracking-[0.18em] text-white/50">Showcase Engine</span>
              </div>
              <div className="text-right text-[0.58rem] font-black uppercase tracking-[0.2em] text-white/40">
                <span className="text-[#dfff3f]">{String(liveWebsites.length).padStart(2, '0')} / 10 deployed</span>
              </div>
            </div>

            {/* Interactive showcase card */}
            <div className="mt-4 relative w-full border border-white/15 bg-[#0d1d13] p-4 sm:p-5 shadow-2xl shadow-black/40">
              {/* Concept Selector Tabs */}
              <div className="mb-4 flex flex-wrap gap-1.5 sm:gap-2">
                {heroShowcaseItems.map((item, idx) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveHeroIndex(idx)}
                    className={`px-2.5 py-1 text-[0.62rem] font-black uppercase tracking-wider transition ${
                      activeHeroIndex === idx
                        ? 'bg-[#dfff3f] text-[#07130c] shadow-sm'
                        : 'border border-white/15 bg-white/5 text-white/60 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    {item.title.split(' ')[0]}
                  </button>
                ))}
              </div>

              {/* Main Media Showcase Window */}
              <div className="relative min-h-[19rem] sm:min-h-[22rem] lg:min-h-[25rem] overflow-hidden border border-white/15 bg-[#07130c]">
                <img
                  src={currentHero.image}
                  alt={`${currentHero.title} hero showcase`}
                  className="absolute inset-0 h-full w-full object-cover object-center transition-all duration-700 scale-100 group-hover:scale-105"
                  key={currentHero.id}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07130c] via-[#07130c]/40 to-transparent" />
                
                {/* Top badges */}
                <div className="absolute left-3 top-3 sm:left-4 sm:top-4 flex items-center gap-2">
                  <span className="bg-[#07130c]/85 border border-[#dfff3f]/30 px-2.5 py-1 text-[0.58rem] font-black uppercase tracking-[0.16em] text-[#dfff3f] backdrop-blur-md">
                    {currentHero.tag}
                  </span>
                </div>

                <Link
                  to={`/fitness/${currentHero.slug}`}
                  onMouseEnter={() => prefetchRoute(`/fitness/${currentHero.slug}`)}
                  className="absolute right-3 top-3 sm:right-4 sm:top-4 grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full bg-[#dfff3f] text-[#07130c] shadow-lg transition hover:scale-110 active:scale-95"
                  title="Launch this concept"
                >
                  <Play className="h-4 w-4 fill-current ml-0.5" />
                </Link>

                {/* Bottom Overlay Info */}
                <div className="absolute inset-x-4 bottom-4 sm:inset-x-5 sm:bottom-5">
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#dfff3f]">
                    {currentHero.tagline}
                  </p>
                  <h2 className="mt-1 text-2xl sm:text-3xl lg:text-4xl font-black uppercase leading-tight tracking-[-0.05em] text-white">
                    {currentHero.title}
                  </h2>
                  <p className="mt-1 max-w-sm text-xs text-white/70 sm:text-sm line-clamp-1">
                    {currentHero.highlight}
                  </p>
                </div>
              </div>

              {/* Real-time telemetry metrics */}
              <div className="mt-3 grid grid-cols-3 gap-2">
                <div className="border border-white/10 bg-white/[0.03] p-2.5 sm:p-3 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-[#dfff3f]">
                    <Gauge className="h-3.5 w-3.5" />
                    <span className="text-[0.52rem] font-black uppercase tracking-wider text-white/40">Rating</span>
                  </div>
                  <p className="mt-1 text-base sm:text-lg font-black tracking-tight text-white">{currentHero.intensity}</p>
                </div>

                <div className="border border-white/10 bg-white/[0.03] p-2.5 sm:p-3 text-center">
                  <div className="flex items-center justify-center gap-1.5 text-[#dfff3f]">
                    <HeartPulse className="h-3.5 w-3.5" />
                    <span className="text-[0.52rem] font-black uppercase tracking-wider text-white/40">Sync</span>
                  </div>
                  <p className="mt-1 text-base sm:text-lg font-black tracking-tight text-white">{currentHero.metric.split(' ')[0]}</p>
                </div>

                <Link
                  to={`/fitness/${currentHero.slug}`}
                  onMouseEnter={() => prefetchRoute(`/fitness/${currentHero.slug}`)}
                  className="border border-[#dfff3f]/40 bg-[#dfff3f]/10 hover:bg-[#dfff3f] hover:text-[#07130c] p-2.5 sm:p-3 text-center transition flex flex-col justify-center items-center group/btn"
                >
                  <span className="text-[0.52rem] font-black uppercase tracking-wider text-white group-hover/btn:text-[#07130c] flex items-center gap-1">
                    Explore <ArrowUpRight className="h-3 w-3" />
                  </span>
                  <p className="text-[0.65rem] font-black tracking-tight text-[#dfff3f] group-hover/btn:text-[#07130c]">Live Site</p>
                </Link>
              </div>

              {/* Status Ticker Bar */}
              <div className="mt-3 grid grid-cols-3 border border-white/10 text-center">
                {[
                  [String(liveWebsites.length).padStart(2, '0'), 'Live'],
                  ['00', 'Queued'],
                  ['10', 'Total']
                ].map(([value, label]) => (
                  <div key={label} className="border-r border-white/10 py-2.5 px-2 last:border-r-0">
                    <p className="text-xl sm:text-2xl font-black text-[#dfff3f]">{value}</p>
                    <p className="text-[0.52rem] font-black uppercase tracking-[0.16em] text-white/40">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Pillars Ticker */}
      <section className="border-b border-[#07130c] bg-[#dfff3f]">
        <div className="mx-auto grid max-w-[100rem] grid-cols-2 sm:grid-cols-3 lg:grid-cols-6">
          {trainingPillars.map(([number, pillar], idx) => (
            <div 
              key={pillar} 
              className={`flex items-center gap-2.5 sm:gap-3 border-b border-[#07130c] px-4 py-3.5 sm:px-5 sm:py-4 lg:border-b-0 ${
                idx % 2 === 0 ? 'border-r sm:border-r-0' : ''
              } sm:border-r last:border-r-0`}
            >
              <span className="text-[0.58rem] font-black opacity-60">{number}</span>
              <span className="text-[0.7rem] sm:text-xs font-black uppercase tracking-[0.12em]">{pillar}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Live Concepts Section */}
      <section id="live-concepts" className="bg-[#07130c] px-4 py-16 text-white sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[94rem]">
          <div className="grid gap-6 lg:grid-cols-[.68fr_1.32fr] lg:items-end">
            <div>
              <p className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-[#dfff3f]">
                Live concepts / 01–{String(liveWebsites.length).padStart(2, '0')}
              </p>
              <h2 className="mt-4 text-[clamp(2.2rem,6.5vw,7.5rem)] font-black uppercase leading-[0.85] tracking-[-0.06em]">
                Ten training worlds are live.
              </h2>
            </div>
            <p className="max-w-2xl text-base sm:text-lg leading-7 sm:leading-8 text-white/60">
              From performance coaching to Pilates, serious lifting, race-ready running, mindful yoga, boxing conditioning, integrated wellness, indoor cycling, bouldering, and recovery, each live concept turns a distinct movement philosophy into a clear digital experience.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="mt-8 sm:mt-10 flex flex-wrap gap-2">
            {[
              { id: 'all', label: `All Fitness (${liveWebsites.length})` },
              { id: 'shortlist', label: `Shortlisted (${shortlistedCount})` },
              { id: 'strength', label: 'Strength & Power' },
              { id: 'mindful', label: 'Mindful & Yoga' },
              { id: 'endurance', label: 'Endurance & Outdoor' },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveFilter(tab.id as any)}
                className={`px-3.5 py-1.5 sm:px-4 sm:py-2 text-[0.68rem] sm:text-xs font-black uppercase tracking-[0.14em] transition ${
                  activeFilter === tab.id
                    ? 'bg-[#dfff3f] text-[#07130c]'
                    : 'border border-white/20 bg-white/5 text-white/70 hover:border-white/40 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Cards Grid */}
          {filteredWebsites.length === 0 ? (
            <div className="mt-12 rounded-xl border border-dashed border-white/20 bg-[#0d1d13] p-8 sm:p-12 text-center">
              <p className="font-extrabold text-base sm:text-lg text-white">No concepts in this view</p>
              <p className="text-xs sm:text-sm text-white/55 mt-1">
                {activeFilter === 'shortlist'
                  ? 'Click the heart icon on any fitness concept to save it to your shortlist.'
                  : 'Try selecting a different filter.'}
              </p>
              {activeFilter === 'shortlist' && (
                <button
                  type="button"
                  onClick={() => setActiveFilter('all')}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#dfff3f] px-5 py-2 text-xs font-black uppercase tracking-wider text-[#07130c] transition hover:bg-white"
                >
                  Browse all fitness concepts
                </button>
              )}
            </div>
          ) : (
            <div className="mt-10 sm:mt-14 grid gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredWebsites.map((website, index) => (
                <FitnessCard
                  key={website.id}
                  website={website}
                  index={index}
                  total={liveWebsites.length}
                />
              ))}
            </div>
          )}

          {/* UX Notes */}
          <div className="mt-14 sm:mt-16 grid border-y border-white/15 lg:grid-cols-[.55fr_1.45fr]">
            <div className="border-b border-white/15 py-6 sm:py-8 lg:border-b-0 lg:border-r lg:pr-8">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#f97316]">Design conditioning</p>
              <h3 className="mt-3 text-2xl sm:text-3xl font-black uppercase tracking-[-0.05em]">Three rules.<br />No wasted motion.</h3>
            </div>
            <div>
              {uxNotes.map(([number, title, text]) => (
                <article 
                  key={number} 
                  className="grid gap-2 sm:gap-4 border-b border-white/15 py-5 sm:py-6 last:border-b-0 md:grid-cols-[4rem_.6fr_1fr] md:items-center lg:px-8"
                >
                  <span className="text-lg sm:text-xl font-black text-[#dfff3f]">{number}</span>
                  <h4 className="text-lg sm:text-xl font-black uppercase">{title}</h4>
                  <p className="text-xs sm:text-sm leading-6 sm:leading-7 text-white/55">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Finished Section */}
      <section id="roadmap" className="bg-[#f4f1e8] px-4 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[94rem]">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <p className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-[#14532d]">Training board / Complete</p>
              <h2 className="mt-4 text-[clamp(2.2rem,6.5vw,7.5rem)] font-black uppercase leading-[0.85] tracking-[-0.07em]">
                All ten ways to move are live.
              </h2>
            </div>
            <p className="max-w-xl text-sm sm:text-base leading-7 sm:leading-8 text-[#4f5953]">
              The full fitness category now spans performance training, Pilates, strength, running, yoga, boxing, wellness, cycling, climbing, and recovery.
            </p>
          </div>

          <div className="mt-10 sm:mt-14 grid gap-5 border border-[#07130c] bg-[#dfff3f] p-5 sm:p-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#14532d]">Roadmap finished</p>
              <h3 className="mt-3 max-w-3xl text-2xl sm:text-3xl md:text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em]">
                No coming soon cards remain in fitness.
              </h3>
              <p className="mt-3 max-w-2xl text-xs sm:text-sm font-bold leading-6 sm:leading-7 text-[#405044]">
                Every planned fitness concept now has a completed website page, route, category record, and live index card.
              </p>
            </div>
            <a 
              href="#live-concepts" 
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] hover:text-[#14532d]"
            >
              Review live set <Dumbbell className="h-5 w-5 text-[#14532d]" />
            </a>
          </div>

          <div className="mt-14 sm:mt-20 flex flex-col items-start justify-between gap-4 border-t border-[#07130c] pt-6 sm:pt-8 md:flex-row md:items-center">
            <p className="max-w-xl text-lg sm:text-2xl font-black uppercase leading-tight tracking-[-0.04em]">
              Ten live. Zero in the rack. A complete fitness category in motion.
            </p>
            <a 
              href="#live-concepts" 
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] hover:text-[#14532d]"
            >
              Back to live designs <Dumbbell className="h-5 w-5 text-[#14532d]" />
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

