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

  return (
    <main className="bg-[#f5f8fb] text-[#0f172a]">
      <section className="relative -mt-16 overflow-hidden bg-[#0f172a] pb-20 pt-24 text-white md:pb-28 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.36),transparent_26%),radial-gradient(circle_at_82%_22%,rgba(245,158,11,0.24),transparent_24%),linear-gradient(135deg,#0f172a,#153e75_56%,#0b1120)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_56px)]" />
        <Container>
          <AnimatedSection className="relative grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <Link to="/" className="text-sm font-bold text-white/70 transition hover:text-white">
                Back to Home
              </Link>
              <div className="mt-8 inline-flex border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#fbbf24]">
                {liveCount} live / {comingSoonCount} coming soon / {totalCount} total
              </div>
              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                Real estate websites built around trust, search, and decisive action.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                A category hub for agencies, agents, developers, rentals, mortgage brands, and property groups that need
                listings to feel premium and easy to act on.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#collection" size="lg" className="bg-[#fbbf24] text-[#0f172a] hover:bg-white">
                  Explore Collection
                </CTAButton>
                <CTAButton href="#principles" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  Design Principles
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[520px]">
              <div className="absolute inset-x-8 top-0 h-[31rem] border border-white/15 bg-white/8 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="grid h-full grid-cols-[0.7fr_1fr]">
                  <div className="border-r border-white/10 bg-[#eff6ff] p-5 text-[#0f172a]">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#153e75]">Listing board</p>
                    <div className="mt-8 space-y-4">
                      {['$1.28M', '$740K', '$2.4M'].map((price, index) => (
                        <div key={price} className="bg-white p-4 shadow-sm">
                          <p className="text-2xl font-black">{price}</p>
                          <p className="mt-1 text-xs font-bold text-slate-500">Featured property 0{index + 1}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative overflow-hidden bg-[linear-gradient(135deg,#153e75,#2563eb_48%,#f59e0b)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:46px_46px]" />
                    <div className="absolute bottom-6 left-6 right-6 bg-white/92 p-5 text-[#0f172a] shadow-xl">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#153e75]">Skyline Realty Group</p>
                      <p className="mt-2 text-3xl font-black">Curated city homes with market clarity.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 grid w-full grid-cols-3 border border-white/15 bg-white/95 text-center text-[#0f172a] shadow-xl">
                {[
                  [String(liveCount).padStart(2, '0'), 'Live'],
                  [String(comingSoonCount).padStart(2, '0'), 'Queued'],
                  [String(totalCount).padStart(2, '0'), 'Total'],
                ].map(([value, label]) => (
                  <div key={label} className="border-r border-slate-200 p-4 last:border-r-0">
                    <p className="text-3xl font-black text-[#153e75]">{value}</p>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
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
