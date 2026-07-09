import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedSection, Container, CTAButton } from '../../components'
import { realEstateWebsites } from '../../data/websites'

const marketSignals = ['Luxury listings', 'Seller strategy', 'Neighborhood guides', 'Buyer funnels', 'Open houses', 'Agent trust']

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

export function RealEstateIndex() {
  const liveWebsites = realEstateWebsites.filter(
    (website) => website.status === 'completed' || website.status === 'live',
  )
  const comingSoonWebsites = realEstateWebsites.filter(
    (website) => website.status !== 'completed' && website.status !== 'live',
  )
  const liveCount = liveWebsites.length
  const comingSoonCount = comingSoonWebsites.length
  const totalCount = realEstateWebsites.length
  const carouselWebsites = liveWebsites.filter((website) => website.image)
  const [activeHeroIndex, setActiveHeroIndex] = useState(0)
  const [isHeroPaused, setIsHeroPaused] = useState(false)
  const activeHero = carouselWebsites[activeHeroIndex] ?? liveWebsites[0] ?? realEstateWebsites[0]

  useEffect(() => {
    if (isHeroPaused || carouselWebsites.length < 2) return
    const interval = window.setInterval(() => {
      setActiveHeroIndex((index) => (index + 1) % carouselWebsites.length)
    }, 7000)
    return () => window.clearInterval(interval)
  }, [carouselWebsites.length, isHeroPaused])

  const moveHero = (direction: number) => {
    setActiveHeroIndex((index) => (index + direction + carouselWebsites.length) % carouselWebsites.length)
  }

  return (
    <main className="bg-[#f5f8fb] text-[#0f172a]">
      <section
        className="real-estate-hero relative -mt-16 min-h-[900px] overflow-hidden bg-[#08111f] pt-16 text-white sm:min-h-screen"
        aria-roledescription="carousel"
        aria-label="Featured real estate website concepts"
        onMouseEnter={() => setIsHeroPaused(true)}
        onMouseLeave={() => setIsHeroPaused(false)}
        onFocusCapture={() => setIsHeroPaused(true)}
        onBlurCapture={() => setIsHeroPaused(false)}
      >
        <style>{`
          .real-estate-hero-panel { opacity: 0; transform: translateX(18px) scale(.985); transition: opacity .7s ease, transform .9s ease; }
          .real-estate-hero-panel.is-active { opacity: 1; transform: translateX(0) scale(1); }
          .real-estate-hero-progress { animation: realEstateHeroProgress 7s linear both; transform-origin: left; }
          @keyframes realEstateHeroProgress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
          @media (prefers-reduced-motion: reduce) { .real-estate-hero-panel { transition: none; } .real-estate-hero-progress { animation: none; } }
        `}</style>

        {carouselWebsites.map((website, index) => (
          <div
            key={website.id}
            aria-hidden={index !== activeHeroIndex}
            className={`absolute inset-0 transition-opacity duration-700 ${index === activeHeroIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img src={website.image} alt="" className="h-full w-full object-cover" fetchPriority={index === 0 ? 'high' : 'auto'} />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,17,31,.98)_0%,rgba(8,17,31,.88)_33%,rgba(8,17,31,.52)_66%,rgba(8,17,31,.76)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_38%,rgba(255,255,255,.12),transparent_27%),linear-gradient(0deg,#08111f_0%,transparent_42%)]" />
          </div>
        ))}
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:64px_64px]" />

        <Container>
          <div className="relative z-10 flex min-h-[836px] flex-col pb-8 pt-8 sm:min-h-[calc(100vh-4rem)] lg:pt-10">
            <div className="flex items-center justify-between gap-4 border-b border-white/15 pb-4">
              <Link to="/" className="text-xs font-black uppercase tracking-[0.18em] text-white/55 transition hover:text-white">
                Back to Home
              </Link>
              <div className="hidden text-xs font-black uppercase tracking-[0.18em] text-white/45 sm:block">
                {String(activeHeroIndex + 1).padStart(2, '0')} / {String(carouselWebsites.length).padStart(2, '0')}
              </div>
            </div>

            <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)] lg:gap-14 xl:gap-20">
              <div key={`real-estate-copy-${activeHero.id}`} className="real-estate-hero-panel is-active max-w-3xl" aria-live="polite">
                <div className="inline-flex border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#fbbf24] backdrop-blur">
                  {liveCount} live / {comingSoonCount} coming soon / {totalCount} total
                </div>
                <p className="mt-8 text-xs font-black uppercase tracking-[0.24em] text-white/45">
                  {activeHero.marketLabel} / Concept dossier
                </p>
                <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.88] md:text-7xl">
                  {activeHero.title}
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
                  {activeHero.shortDescription}.
                </p>
                <p className="mt-4 max-w-xl text-sm font-bold capitalize leading-6 text-white/45">
                  {activeHero.style}
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Link
                    to={`/real-estate/${activeHero.slug}`}
                    className="inline-flex min-h-14 items-center justify-center rounded-lg bg-[#fbbf24] px-8 py-4 text-lg font-bold text-[#08111f] transition hover:-translate-y-0.5 hover:bg-white"
                  >
                    Open Concept
                  </Link>
                  <CTAButton href="#collection" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                    Explore Collection
                  </CTAButton>
                </div>
              </div>

              <div className="relative min-h-[520px] lg:min-h-[620px]">
                <div className="absolute left-0 top-8 z-20 hidden w-44 space-y-2 xl:block">
                  {carouselWebsites.slice(0, 6).map((website, index) => (
                    <button
                      key={website.id}
                      type="button"
                      onClick={() => setActiveHeroIndex(index)}
                      aria-label={`Show ${website.title}`}
                      aria-current={index === activeHeroIndex ? 'true' : undefined}
                      className={`group w-full border px-3 py-3 text-left backdrop-blur transition ${index === activeHeroIndex ? 'border-white/60 bg-white text-[#08111f]' : 'border-white/15 bg-white/8 text-white/55 hover:bg-white/15 hover:text-white'}`}
                    >
                      <span className="block text-[0.6rem] font-black uppercase tracking-[0.16em]">{String(index + 1).padStart(2, '0')}</span>
                      <span className="mt-1 block truncate text-xs font-black">{website.title}</span>
                    </button>
                  ))}
                </div>

                <div className="absolute inset-x-0 top-0 mx-auto max-w-[760px] xl:left-auto xl:right-0">
                  <div className="relative overflow-hidden border border-white/15 bg-white/10 p-3 shadow-[0_44px_120px_rgba(0,0,0,.5)] backdrop-blur">
                    <div className="relative aspect-[4/3] overflow-hidden bg-[#0f172a] sm:aspect-[16/10]">
                      <img key={activeHero.id} src={activeHero.image} alt={`${activeHero.title} website preview`} className="h-full w-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#08111f]/78 via-transparent to-transparent" />
                      <div className="absolute left-5 top-5 border border-white/20 bg-[#08111f]/70 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.16em] text-white/75 backdrop-blur">
                        Active market
                      </div>
                      <Link
                        to={`/real-estate/${activeHero.slug}`}
                        className="absolute bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full text-sm font-black text-[#08111f] transition hover:rotate-[-12deg] hover:bg-white"
                        style={{ backgroundColor: activeHero.colors.accent }}
                        aria-label={`Open ${activeHero.title}`}
                      >Open
                      </Link>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 border border-white/15 bg-white/95 text-center text-[#0f172a] shadow-xl">
                    {[
                      [String(liveCount).padStart(2, '0'), 'Live'],
                      [String(comingSoonCount).padStart(2, '0'), 'Queued'],
                      [String(totalCount).padStart(2, '0'), 'Total'],
                    ].map(([value, label]) => (
                      <div key={label} className="border-r border-slate-200 p-4 last:border-r-0">
                        <p className="text-3xl font-black" style={{ color: activeHero.colors.primary }}>{value}</p>
                        <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid items-end gap-5 border-t border-white/15 pt-5 lg:grid-cols-[auto_1fr_auto]">
              <div className="flex gap-2">
                <button type="button" onClick={() => moveHero(-1)} aria-label="Previous real estate concept" className="grid h-11 w-11 place-items-center border border-white/20 bg-white/8 text-lg transition hover:bg-white hover:text-[#08111f]">&lt;</button>
                <button type="button" onClick={() => moveHero(1)} aria-label="Next real estate concept" className="grid h-11 w-11 place-items-center border border-white/20 bg-white/8 text-lg transition hover:bg-white hover:text-[#08111f]">&gt;</button>
              </div>
              <div className="grid grid-cols-5 gap-2 lg:grid-cols-10">
                {carouselWebsites.map((website, index) => (
                  <button key={website.id} type="button" onClick={() => setActiveHeroIndex(index)} className={`group text-left transition ${index === activeHeroIndex ? 'text-white' : 'text-white/35 hover:text-white/70'}`} aria-label={`Show ${website.title}`}>
                    <span className="block h-1 overflow-hidden bg-white/15">
                      {index === activeHeroIndex && <span key={`${activeHeroIndex}-${isHeroPaused}`} className="real-estate-hero-progress block h-full" style={{ backgroundColor: website.colors.accent, animationPlayState: isHeroPaused ? 'paused' : 'running' }} />}
                    </span>
                    <span className="mt-3 hidden truncate text-[0.58rem] font-black uppercase tracking-[0.1em] xl:block">{website.marketLabel}</span>
                  </button>
                ))}
              </div>
              <p className="hidden max-w-44 text-right text-[0.62rem] font-bold uppercase leading-5 tracking-[0.14em] text-white/35 lg:block">
                Market-ready previews for property brands
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="border-b border-[#dbe4ef] bg-white py-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {marketSignals.map((signal) => (
              <span key={signal} className="rounded-full border border-[#dbe4ef] bg-[#f5f8fb] px-4 py-2 text-sm font-bold text-slate-600">
                {signal}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="collection" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#153e75]">Property collection</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Ten brands. Ten distinct real estate markets.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Skyline is ready to explore today. Nine additional directions establish the visual and strategic roadmap
              for coastal, commercial, mortgage, rental, development, vacation, and buyer-focused experiences.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {realEstateWebsites.map((website, index) => {
              const isLive = website.status === 'completed' || website.status === 'live'

              return (
                <article
                  key={website.id}
                  className="group flex h-full flex-col overflow-hidden border border-[#dbe4ef] bg-white shadow-sm transition duration-300 motion-reduce:transition-none motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl"
                >
                  <div
                    className="relative aspect-[16/10] overflow-hidden"
                    style={{
                      backgroundImage: `linear-gradient(145deg, ${website.colors.secondary} 0%, ${website.colors.primary} 58%, ${website.colors.dark} 100%)`,
                    }}
                  >
                    {website.image ? (
                      <img
                        src={website.image}
                        alt={`${website.title} website preview`}
                        className="absolute inset-0 h-full w-full object-cover transition duration-500 motion-reduce:transition-none motion-safe:group-hover:scale-105"
                        loading="lazy"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#153e75] shadow-sm">
                      {isLive ? 'Live design' : 'Coming soon'}
                    </div>
                    <div className="absolute bottom-4 left-4 text-xs font-black uppercase tracking-[0.16em] text-white">
                      Concept {String(index + 1).padStart(2, '0')}
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#153e75]">
                      {website.marketLabel}
                    </p>
                    <h3 className="mt-3 text-2xl font-black leading-tight">{website.title}</h3>
                    <p className="mt-3 text-sm font-bold leading-6 text-slate-500">{website.style}</p>
                    <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{website.shortDescription}</p>

                    <div className="mt-6 flex items-center gap-2 border-t border-slate-200 pt-5" aria-label={`${website.title} color palette`}>
                      {[website.colors.primary, website.colors.secondary, website.colors.accent, website.colors.dark].map((color) => (
                        <span
                          key={color}
                          className="h-6 w-6 rounded-full border border-slate-300 shadow-sm"
                          style={{ backgroundColor: color }}
                        />
                      ))}
                    </div>

                    {isLive ? (
                      <Link
                        to={`/real-estate/${website.slug}`}
                        className="mt-6 inline-flex min-h-12 w-full items-center justify-center rounded-lg bg-[#0f172a] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#153e75] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#153e75]"
                      >
                        View Website
                      </Link>
                    ) : (
                      <span
                        aria-disabled="true"
                        className="mt-6 inline-flex min-h-12 w-full cursor-not-allowed items-center justify-center rounded-lg border border-slate-200 bg-slate-100 px-4 py-3 text-sm font-bold text-slate-500"
                      >
                        Coming Soon
                      </span>
                    )}
                  </div>
                </article>
              )
            })}
          </div>
        </Container>
      </section>

      <section id="principles" className="border-y border-[#dbe4ef] bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#153e75]">Category principles</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Real estate pages have to reduce uncertainty fast.
            </h2>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-3">
            {pageNotes.map((note) => (
              <article key={note.title} className="border border-[#dbe4ef] bg-[#f5f8fb] p-7 shadow-sm">
                <h3 className="text-2xl font-black">{note.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{note.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
