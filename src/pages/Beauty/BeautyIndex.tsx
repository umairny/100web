import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { beautyWebsites } from '../../data/websites'

const tags: Record<string, string> = {
  'glowhaus-salon': 'Hair',
  'luxe-nail-studio': 'Nails',
  'serenity-spa': 'Wellness',
  'blush-beauty-bar': 'Beauty',
  'velvet-skin-clinic': 'Skin',
  'crown-comb-barber': 'Grooming',
  'pureglow-aesthetics': 'Aesthetics',
  'bloom-bridal-studio': 'Bridal',
  'silk-style-hair': 'Hair',
  'aura-wellness-spa': 'Wellness',
}

const principles = [
  ['01', 'Distinct by design', 'Every concept has its own visual language, audience, and conversion rhythm.'],
  ['02', 'Built to be felt', 'Typography, photography, color, and motion work together to create a memorable atmosphere.'],
  ['03', 'Ready to convert', 'Clear services, social proof, and thoughtful booking paths turn browsing into confident action.'],
]

export function BeautyIndex() {
  const websites = beautyWebsites.filter((website) => website.status === 'completed' || website.status === 'live')
  const [activeSlide, setActiveSlide] = useState(0)
  const [paused, setPaused] = useState(false)
  const [filter, setFilter] = useState('All')
  const touchStart = useRef<number | null>(null)
  const filters = ['All', ...Array.from(new Set(websites.map((website) => tags[website.slug])))]
  const filteredWebsites = useMemo(() => filter === 'All' ? websites : websites.filter((website) => tags[website.slug] === filter), [filter, websites])
  const featured = websites[activeSlide]

  useEffect(() => {
    if (paused) return
    const interval = window.setInterval(() => setActiveSlide((slide) => (slide + 1) % websites.length), 6500)
    return () => window.clearInterval(interval)
  }, [paused, websites.length])

  const moveSlide = (direction: number) => setActiveSlide((activeSlide + direction + websites.length) % websites.length)

  return (
    <main className="beauty-index bg-[#f5f0eb] text-[#181514]">
      <style>{`
        .beauty-index { font-family: "Avenir Next", Avenir, "Segoe UI", sans-serif; }
        .beauty-display { font-family: Georgia, "Times New Roman", serif; }
        .beauty-slide { opacity: 0; transform: scale(1.035); transition: opacity .85s ease, transform 1.4s ease; }
        .beauty-slide.is-active { opacity: 1; transform: scale(1); }
        .beauty-progress { animation: beautyProgress 6.5s linear both; transform-origin: left; }
        @keyframes beautyProgress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @media (prefers-reduced-motion: reduce) { .beauty-slide { transition: none; } .beauty-progress { animation: none; } }
      `}</style>

      <section
        className="relative -mt-16 min-h-[100svh] overflow-hidden bg-[#171312] text-white"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
        onTouchStart={(event) => { touchStart.current = event.touches[0].clientX }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return
          const distance = event.changedTouches[0].clientX - touchStart.current
          if (Math.abs(distance) > 50) moveSlide(distance > 0 ? -1 : 1)
          touchStart.current = null
        }}
        aria-roledescription="carousel"
        aria-label="Featured beauty websites"
      >
        {websites.map((website, index) => (
          <div key={website.id} className={`beauty-slide absolute inset-0 ${index === activeSlide ? 'is-active' : ''}`} aria-hidden={index !== activeSlide}>
            <img src={website.image} alt="" className="h-full w-full object-cover object-center" fetchPriority={index === 0 ? 'high' : 'auto'} />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,12,12,.94)_0%,rgba(16,12,12,.72)_36%,rgba(16,12,12,.16)_72%,rgba(16,12,12,.26)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(10,8,8,.78),transparent_42%)]" />
          </div>
        ))}

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1480px] flex-col px-5 pb-8 pt-24 sm:px-8 lg:px-12 lg:pb-10 lg:pt-28">
          <div className="flex items-center justify-between border-b border-white/20 pb-4 text-[.7rem] font-bold uppercase tracking-[.2em] text-white/70">
            <Link to="/" className="transition hover:text-white">← 100 Websites</Link>
            <span className="hidden sm:block">Beauty / Live Collection</span>
            <span>{String(activeSlide + 1).padStart(2, '0')} / {String(websites.length).padStart(2, '0')}</span>
          </div>

          <div className="grid flex-1 items-center py-14 lg:grid-cols-[minmax(0,760px)_1fr]">
            <div key={featured.id} className="fade-in-up max-w-3xl" aria-live="polite">
              <div className="mb-6 flex items-center gap-3 text-xs font-bold uppercase tracking-[.22em] text-[#f0bdac]">
                <span className="h-px w-10 bg-[#f0bdac]" /> {tags[featured.slug]} concept
              </div>
              <h1 className="beauty-display text-[clamp(3.9rem,8vw,8.2rem)] leading-[.88] tracking-[-.055em]">
                {featured.title}
              </h1>
              <p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg sm:leading-8">{featured.shortDescription}.</p>
              <p className="mt-4 max-w-xl text-sm font-semibold capitalize tracking-wide text-[#e9c0b2]">{featured.style}</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Link to={`/beauty/${featured.slug}`} className="group inline-flex min-h-14 items-center justify-between gap-10 bg-white px-6 text-sm font-black uppercase tracking-[.1em] text-[#181514] transition hover:bg-[#e9c0b2]">
                  Explore Website <span className="transition group-hover:translate-x-1">→</span>
                </Link>
                <a href="#collection" className="inline-flex min-h-14 items-center justify-center border border-white/35 px-6 text-sm font-bold uppercase tracking-[.1em] text-white transition hover:bg-white/10">View Collection</a>
              </div>
            </div>
          </div>

          <div className="grid gap-6 border-t border-white/20 pt-5 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="grid grid-cols-5 gap-2 lg:grid-cols-10">
              {websites.map((website, index) => (
                <button key={website.id} type="button" onClick={() => setActiveSlide(index)} className={`group text-left transition ${activeSlide === index ? 'text-white' : 'text-white/45 hover:text-white/80'}`} aria-label={`Show ${website.title}`}>
                  <span className="block h-px overflow-hidden bg-white/25">{activeSlide === index && <span key={`${index}-${activeSlide}`} className={`beauty-progress block h-full bg-[#efb49f] ${paused ? '[animation-play-state:paused]' : ''}`} />}</span>
                  <span className="mt-3 hidden truncate text-[.62rem] font-bold uppercase tracking-[.1em] xl:block">{website.title}</span>
                </button>
              ))}
            </div>
            <div className="flex gap-2 justify-self-end">
              <button type="button" onClick={() => moveSlide(-1)} className="grid h-12 w-12 place-items-center border border-white/30 text-xl transition hover:bg-white hover:text-black" aria-label="Previous website">←</button>
              <button type="button" onClick={() => moveSlide(1)} className="grid h-12 w-12 place-items-center border border-white/30 text-xl transition hover:bg-white hover:text-black" aria-label="Next website">→</button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d0c8] bg-[#efe7e0]">
        <div className="mx-auto grid max-w-[1480px] grid-cols-2 divide-x divide-[#d9d0c8] px-5 sm:grid-cols-4 sm:px-8 lg:px-12">
          {[[websites.length, 'Live websites'], ['10', 'Unique identities'], ['100%', 'Responsive'], ['∞', 'Ways to glow']].map(([value, label]) => (
            <div key={label} className="px-4 py-7 text-center"><b className="beauty-display block text-3xl font-normal">{value}</b><span className="mt-1 block text-[.68rem] font-bold uppercase tracking-[.14em] text-[#756b66]">{label}</span></div>
          ))}
        </div>
      </section>

      <section id="collection" className="px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-8 border-b border-[#cfc4bc] pb-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div><p className="text-xs font-black uppercase tracking-[.22em] text-[#a25f58]">The live collection</p><h2 className="beauty-display mt-4 max-w-3xl text-5xl leading-[.96] tracking-[-.045em] sm:text-6xl lg:text-7xl">Ten brands. Ten completely different moods.</h2></div>
            <p className="max-w-2xl text-base leading-8 text-[#665e59] lg:justify-self-end">Explore finished, responsive beauty websites spanning editorial hair, wellness, skincare, bridal artistry, nails, makeup, and modern grooming.</p>
          </div>

          <div className="flex gap-2 overflow-x-auto py-7 [scrollbar-width:none]" aria-label="Filter websites">
            {filters.map((item) => <button key={item} type="button" onClick={() => setFilter(item)} className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-bold transition ${filter === item ? 'border-[#181514] bg-[#181514] text-white' : 'border-[#cfc4bc] bg-transparent text-[#665e59] hover:border-[#181514] hover:text-[#181514]'}`}>{item}</button>)}
          </div>

          <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {filteredWebsites.map((website, index) => (
              <Link key={website.id} to={`/beauty/${website.slug}`} className={`group block ${index % 3 === 1 ? 'xl:translate-y-10' : ''}`}>
                <article className="overflow-hidden bg-white shadow-[0_12px_40px_rgba(54,42,36,.08)] transition duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_28px_70px_rgba(54,42,36,.16)]">
                  <div className="relative aspect-[16/11] overflow-hidden bg-[#ddd3cc]">
                    <img src={website.image} alt={`${website.title} website preview`} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" loading="lazy" decoding="async" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1.5 text-[.65rem] font-black uppercase tracking-[.14em] text-[#282220] backdrop-blur">{tags[website.slug]}</span>
                    <span className="absolute bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-white text-xl text-black transition duration-300 group-hover:rotate-[-30deg] group-hover:bg-[#edb29d]">↗</span>
                  </div>
                  <div className="p-6 sm:p-7">
                    <div className="flex items-start justify-between gap-4"><div><p className="text-[.68rem] font-black uppercase tracking-[.16em] text-[#a25f58]">0{websites.indexOf(website) + 1} / Live</p><h3 className="beauty-display mt-2 text-3xl tracking-[-.035em] sm:text-[2.15rem]">{website.title}</h3></div><div className="mt-1 flex -space-x-1">{[website.colors.primary, website.colors.accent, website.colors.dark].map((color) => <span key={color} className="h-5 w-5 rounded-full border-2 border-white" style={{ backgroundColor: color }} />)}</div></div>
                    <p className="mt-4 min-h-14 text-sm leading-6 text-[#6e6560]">{website.shortDescription}.</p>
                    <div className="mt-6 flex items-center justify-between border-t border-[#e5ddd7] pt-4 text-xs font-bold uppercase tracking-[.1em]"><span className="capitalize text-[#827873]">{website.style.split(',').slice(0, 2).join(' ·')}</span><span>Open site →</span></div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1b1817] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-black uppercase tracking-[.22em] text-[#eeb49f]">Design philosophy</p><h2 className="beauty-display mt-4 text-5xl leading-none tracking-[-.045em] sm:text-6xl">Beautiful is only the beginning.</h2></div><p className="max-w-xl self-end text-base leading-8 text-white/60 lg:justify-self-end">Each concept is designed to earn attention, build trust, and make the next step feel natural.</p></div>
          <div className="mt-14 grid border-y border-white/15 md:grid-cols-3 md:divide-x md:divide-white/15">
            {principles.map(([number, title, text]) => <article key={number} className="border-b border-white/15 px-2 py-9 last:border-b-0 md:border-b-0 md:px-8 md:py-12"><span className="text-xs font-bold text-[#eeb49f]">{number}</span><h3 className="beauty-display mt-8 text-3xl">{title}</h3><p className="mt-4 text-sm leading-7 text-white/55">{text}</p></article>)}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e8b4a2] px-5 py-20 sm:px-8 lg:px-12 lg:py-24">
        <div className="absolute -right-24 -top-36 h-96 w-96 rounded-full border border-[#181514]/15" /><div className="absolute -right-5 -top-16 h-64 w-64 rounded-full border border-[#181514]/15" />
        <div className="relative mx-auto flex max-w-[1480px] flex-col justify-between gap-8 lg:flex-row lg:items-end"><div><p className="text-xs font-black uppercase tracking-[.22em]">Ready to explore?</p><h2 className="beauty-display mt-4 max-w-4xl text-5xl leading-[.95] tracking-[-.05em] sm:text-7xl">Find the beauty brand that feels like you.</h2></div><a href="#collection" className="group inline-flex min-h-14 shrink-0 items-center justify-between gap-12 bg-[#181514] px-7 text-sm font-black uppercase tracking-[.1em] text-white">Browse all websites <span className="transition group-hover:translate-x-1">→</span></a></div>
      </section>
    </main>
  )
}
