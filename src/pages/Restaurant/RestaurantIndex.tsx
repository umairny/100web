import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatedSection, Container, CTAButton } from '../../components'
import { restaurantWebsites } from '../../data/websites'

export function RestaurantIndex() {
  const completedCount = restaurantWebsites.filter((website) => website.status === 'completed').length
  const carouselRestaurants = restaurantWebsites.filter((website) => website.status === 'completed' && website.image)
  const [activeSlide, setActiveSlide] = useState(0)
  const [isCarouselPaused, setIsCarouselPaused] = useState(false)
  const activeRestaurant = carouselRestaurants[activeSlide] ?? restaurantWebsites[0]

  useEffect(() => {
    if (isCarouselPaused || carouselRestaurants.length < 2) return
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % carouselRestaurants.length)
    }, 6000)
    return () => window.clearInterval(interval)
  }, [carouselRestaurants.length, isCarouselPaused])

  useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') setActiveSlide((current) => (current + 1) % carouselRestaurants.length)
      if (event.key === 'ArrowLeft') setActiveSlide((current) => (current - 1 + carouselRestaurants.length) % carouselRestaurants.length)
    }
    window.addEventListener('keydown', handleKeyboard)
    return () => window.removeEventListener('keydown', handleKeyboard)
  }, [carouselRestaurants.length])

  const moveSlide = (direction: number) => {
    setActiveSlide((current) => (current + direction + carouselRestaurants.length) % carouselRestaurants.length)
  }
  const diningStyles = ['Coffee', 'Bakery', 'Pizza', 'Bowls', 'Steak', 'Tea', 'Burgers', 'Seafood']
  const experienceNotes = [
    {
      title: 'Distinct First Screens',
      text: 'Each restaurant opens with a different layout language: centered ritual, right-aligned editorial, dark reservation room, tide table, orbiting pizza, and more.',
    },
    {
      title: 'Brand-Led Palettes',
      text: 'The cards and pages use each concept palette consistently, making the collection easier to scan and more memorable.',
    },
    {
      title: 'Conversion Ready',
      text: 'Every design keeps restaurant actions close: reserve, order, visit, browse menu, or build a custom meal.',
    },
  ]
  const layoutStyles = [
    ['Center', 'Tea, seafood'],
    ['Right align', 'Fresh bowls'],
    ['Editorial', 'Coffee, bakery'],
    ['High contrast', 'Steakhouse, burgers'],
  ]

  return (
    <main className="restaurant-cinematic bg-[#fffaf1] text-[#171512]">
      <section
        aria-roledescription="carousel"
        aria-label="Featured restaurant concepts"
        onMouseEnter={() => setIsCarouselPaused(true)}
        onMouseLeave={() => setIsCarouselPaused(false)}
        onFocusCapture={() => setIsCarouselPaused(true)}
        onBlurCapture={() => setIsCarouselPaused(false)}
        className="relative -mt-16 min-h-[920px] overflow-hidden bg-[#0b0a09] pt-16 text-white sm:min-h-screen"
      >
        {carouselRestaurants.map((website, index) => (
          <div key={website.id} aria-hidden={index !== activeSlide} className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={website.image} alt="" className={`h-full w-full object-cover blur-[1px] ${index === activeSlide ? 'restaurant-cinematic-image' : 'scale-105'}`} />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,7,6,0.98)_0%,rgba(7,7,6,0.9)_34%,rgba(7,7,6,0.42)_66%,rgba(7,7,6,0.7)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_44%,transparent_0%,rgba(0,0,0,0.18)_45%,rgba(0,0,0,0.72)_100%),linear-gradient(0deg,#0b0a09_0%,transparent_38%,rgba(0,0,0,0.28)_100%)]" />
          </div>
        ))}
        <div className="absolute inset-0 opacity-[0.04] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:48px_48px]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-3 bg-black/55" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-3 bg-black/55" />
        <div className="absolute left-0 top-0 h-full w-1 bg-white/10" style={{ backgroundColor: activeRestaurant.colors.accent }} />

        <div className="relative mx-auto flex min-h-[856px] max-w-[1500px] flex-col px-5 pb-7 pt-10 sm:min-h-[calc(100vh-4rem)] sm:px-8 lg:px-12">
          <div className="flex items-center justify-between gap-4">
            <Link to="/" className="inline-flex items-center gap-2 text-[0.65rem] font-black uppercase tracking-[0.18em] text-white/60 transition hover:text-white"><span>←</span> Portfolio home</Link>
            <div className="rounded-full border border-white/15 bg-black/25 px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.16em] text-white/65 backdrop-blur">{completedCount} concepts live</div>
          </div>

          <div className="grid flex-1 items-center gap-10 py-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-24">
            <div key={`copy-${activeRestaurant.id}`} aria-live="polite" className="restaurant-slide-copy relative z-10 max-w-2xl">
              <div className="flex items-center gap-3 text-[0.6rem] font-semibold uppercase tracking-[0.28em]" style={{ color: activeRestaurant.colors.accent }}><span className="h-px w-10" style={{ backgroundColor: activeRestaurant.colors.accent }} />Restaurant collection · 0{activeSlide + 1}</div>
              <p className="mt-7 text-xs font-medium uppercase tracking-[0.24em] text-white/42">{activeRestaurant.style}</p>
              <h1 className="restaurant-cinematic-title mt-3 text-[clamp(4.2rem,8vw,8.6rem)] leading-[0.78] tracking-[-0.055em]">{activeRestaurant.title}</h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-white/62 sm:text-lg">{activeRestaurant.shortDescription}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link to={`/restaurant/${activeRestaurant.slug}`} className="inline-flex items-center justify-center gap-3 rounded-full px-7 py-4 text-xs font-black uppercase tracking-[0.13em] text-[#11100f] shadow-2xl transition hover:-translate-y-1" style={{ backgroundColor: activeRestaurant.colors.accent }}>Explore this concept <span>→</span></Link>
                <a href="#concepts" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-black/15 px-7 py-4 text-xs font-black uppercase tracking-[0.13em] backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">View all restaurants</a>
              </div>
              <div className="mt-9 flex items-center gap-3 text-[0.55rem] font-semibold uppercase tracking-[0.2em] text-white/35"><span className="h-px w-12 bg-white/25" />Curated dining stories</div>
            </div>

            <div key={`card-${activeRestaurant.id}`} className="restaurant-slide-card relative mx-auto w-full max-w-3xl lg:ml-auto">
              <div className="absolute -inset-5 rotate-2 rounded-[2rem] border border-white/10 bg-white/[0.035] backdrop-blur-sm" />
              <Link to={`/restaurant/${activeRestaurant.slug}`} className="group relative block overflow-hidden rounded-[1.5rem] border border-white/20 bg-[#1b1917] p-2 shadow-[0_40px_110px_rgba(0,0,0,0.5)] sm:p-3">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1rem]"><img src={activeRestaurant.image} alt={`${activeRestaurant.title} website preview`} className="h-full w-full object-cover transition duration-1000 group-hover:scale-[1.025]" /><div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" /></div>
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between gap-4 text-white sm:bottom-8 sm:left-8 sm:right-8"><div><p className="text-[0.55rem] font-black uppercase tracking-[0.18em] text-white/55">Live restaurant concept</p><p className="mt-1 hidden text-lg font-black sm:block">Open the full experience</p></div><span className="grid h-11 w-11 place-items-center rounded-full text-xl text-[#11100f] transition group-hover:rotate-[-15deg] group-hover:scale-110" style={{ backgroundColor: activeRestaurant.colors.accent }}>↗</span></div>
              </Link>
              <div className="absolute -bottom-4 -left-3 rounded-full border border-white/15 bg-[#161412]/90 px-4 py-2 text-[0.55rem] font-black uppercase tracking-[0.15em] text-white/55 shadow-xl backdrop-blur sm:-left-6">Responsive · Editorial · Conversion ready</div>
            </div>
          </div>

          <div className="grid items-end gap-5 lg:grid-cols-[auto_1fr_auto]">
            <div className="flex gap-2">
              <button type="button" onClick={() => moveSlide(-1)} aria-label="Previous restaurant" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/20 text-lg backdrop-blur transition hover:bg-white hover:text-[#11100f]">←</button>
              <button type="button" onClick={() => moveSlide(1)} aria-label="Next restaurant" className="grid h-11 w-11 place-items-center rounded-full border border-white/20 bg-black/20 text-lg backdrop-blur transition hover:bg-white hover:text-[#11100f]">→</button>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
              {carouselRestaurants.map((website, index) => (
                <button key={website.id} type="button" onClick={() => setActiveSlide(index)} aria-label={`Show ${website.title}`} aria-current={index === activeSlide ? 'true' : undefined} className={`group relative h-[4.6rem] min-w-[7.5rem] overflow-hidden rounded-xl border text-left transition sm:h-20 sm:min-w-[9rem] ${index === activeSlide ? 'active border-white/60 opacity-100' : 'border-white/10 opacity-50 hover:opacity-90'}`}>
                  <img src={website.image} alt="" className="absolute inset-0 h-full w-full object-cover transition group-hover:scale-105" /><span className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" /><span className="absolute bottom-2 left-2 right-2 truncate text-[0.54rem] font-black uppercase tracking-[0.08em] text-white">{website.title}</span>{index === activeSlide && <span className="absolute inset-x-0 bottom-0 h-[3px]" style={{ backgroundColor: website.colors.accent }} />}
                </button>
              ))}
            </div>
            <div className="hidden min-w-24 text-right lg:block"><p className="text-2xl font-black">{String(activeSlide + 1).padStart(2, '0')}</p><p className="text-[0.55rem] font-black uppercase tracking-[0.16em] text-white/35">of {String(carouselRestaurants.length).padStart(2, '0')}</p></div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-3 z-20 h-[2px] bg-white/10"><span key={`progress-${activeSlide}-${isCarouselPaused}`} className="restaurant-carousel-progress block h-full w-full" style={{ backgroundColor: activeRestaurant.colors.accent, animationPlayState: isCarouselPaused ? 'paused' : 'running' }} /></div>
      </section>

      <section className="border-b border-[#eadfc8] bg-[#fffaf1] py-10">
        <Container>
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex flex-wrap gap-2">
              {diningStyles.map((style) => (
                <span key={style} className="rounded-full border border-[#e0d1b4] bg-white px-4 py-2 text-sm font-bold text-[#5f5242]">
                  {style}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 overflow-hidden border border-[#e0d1b4] bg-white text-center">
              {[
                { value: restaurantWebsites.length, label: 'Concepts' },
                { value: completedCount, label: 'Live' },
                { value: restaurantWebsites.length - completedCount, label: 'Queued' },
              ].map((stat) => (
                <div key={stat.label} className="border-r border-[#e0d1b4] px-5 py-3 last:border-r-0">
                  <p className="text-2xl font-black">{stat.value}</p>
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#7b6d5b]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="concepts" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#9a5b25]">All concepts</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight md:text-5xl">
                Pick a restaurant mood and open the full homepage.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#6d6254]">
              Each card uses real concept artwork so the collection reads like a visual menu of distinct restaurant experiences.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {restaurantWebsites.map((website, index) => (
              <Link
                key={website.id}
                to={`/restaurant/${website.slug}`}
                className={`group reveal-card overflow-hidden border border-[#eadfc8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  index % 3 === 1 ? 'delay-100' : index % 3 === 2 ? 'delay-200' : ''
                }`}
              >
                <div
                  className="relative h-44 overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${website.colors.secondary} 0%, ${website.colors.primary} 52%, ${website.colors.accent} 100%)`,
                  }}
                >
                  {website.image && (
                    <img
                      src={website.image}
                      alt={`${website.title} website preview`}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                  <div className={`absolute inset-0 ${website.image ? 'bg-gradient-to-t from-[#171512]/70 via-[#171512]/10 to-transparent' : 'bg-[radial-gradient(circle_at_22%_24%,rgba(255,255,255,0.55),transparent_22%),radial-gradient(circle_at_76%_70%,rgba(255,255,255,0.25),transparent_26%)]'}`} />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#171512] shadow-sm">
                    {website.status === 'completed' ? 'Live' : 'Queued'}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9a5b25]">{website.category}</p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="restaurant-cinematic-title text-3xl font-semibold text-[#171512] transition group-hover:text-[#9a5b25]">
                      {website.title}
                    </h3>
                    <span className="text-sm font-semibold tracking-[0.12em] text-[#9a5b25]">0{index + 1}</span>
                  </div>
                  <p className="mt-3 text-xs font-semibold uppercase tracking-[0.1em] text-[#6d6254]">{website.style}</p>
                  <p className="mt-4 min-h-12 text-sm leading-6 text-[#6d6254]">{website.shortDescription}</p>
                  <div className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#171512] px-4 py-3 text-sm font-bold text-white transition group-hover:bg-[#9a5b25]">
                    View Design
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#eadfc8] bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#9a5b25]">Collection UX</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Built to compare concepts quickly without making them feel the same.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#6d6254]">
                The page works as a tasting flight: fast visual scanning, clear brand contrast, and direct paths into
                the full restaurant homepages.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {experienceNotes.map((note) => (
                <article key={note.title} className="border border-[#eadfc8] bg-[#fffaf1] p-6 shadow-sm">
                  <div className="mb-6 h-2 w-16 bg-[#9a5b25]" />
                  <h3 className="text-2xl font-black">{note.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#6d6254]">{note.text}</p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-[#fffaf1] py-20 md:py-28">
        <Container>
          <AnimatedSection className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="border border-[#eadfc8] bg-white p-8 shadow-sm md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#9a5b25]">Layout map</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                A restaurant collection with more than one visual recipe.
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {layoutStyles.map(([layout, examples]) => (
                  <div key={layout} className="border border-[#eadfc8] bg-[#fffaf1] p-5">
                    <p className="text-2xl font-black">{layout}</p>
                    <p className="mt-2 text-sm font-bold text-[#6d6254]">{examples}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden bg-[#171512] p-8 text-white shadow-2xl md:p-10">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#e36a2c]/30" />
              <div className="absolute -bottom-24 left-8 h-64 w-64 rounded-full bg-[#2f8f46]/25" />
              <div className="relative">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f4c76d]">Next step</p>
                <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                  Open a concept, compare the hero, then scan the full page flow.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/70">
                  The strongest restaurant pages now use different structures, so this hub helps you judge the whole set
                  as a portfolio instead of a repeated template.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <CTAButton href="#concepts" size="lg" className="bg-[#f4c76d] text-[#171512] hover:bg-white">
                    Return to Concepts
                  </CTAButton>
                  <CTAButton href="/restaurant/brewnest-coffee" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                    Start with BrewNest
                  </CTAButton>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  )
}
