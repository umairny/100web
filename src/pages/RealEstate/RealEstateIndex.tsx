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

const comingSoonConcepts = [
  ['HarborKey Homes', 'coastal family listings'],
  ['Apex Commercial Realty', 'leasing and investment'],
  ['NestPath Mortgage', 'home loan guidance'],
  ['Cedar & Stone Estates', 'rural premium properties'],
  ['MetroLoft Rentals', 'urban apartments'],
  ['Foundry Property Group', 'developer portfolio'],
]

export function RealEstateIndex() {
  const liveWebsites = realEstateWebsites.filter((website) => website.status === 'completed' || website.status === 'live')

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
                {liveWebsites.length} live / 10 planned
              </div>
              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                Real estate websites built around trust, search, and decisive action.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                A category hub for agencies, agents, developers, rentals, mortgage brands, and property groups that need
                listings to feel premium and easy to act on.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#live-concepts" size="lg" className="bg-[#fbbf24] text-[#0f172a] hover:bg-white">
                  View Live Concept
                </CTAButton>
                <CTAButton href="#roadmap" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  See Roadmap
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
                  ['01', 'Live'],
                  ['09', 'Queued'],
                  ['10', 'Goal'],
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

      <section id="live-concepts" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#153e75]">Live concept</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                One polished agency homepage is ready to explore.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              The first real estate website focuses on city buyers and sellers, with premium positioning, featured
              listings, agent trust, neighborhood context, and consultation CTAs.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            {liveWebsites.map((website) => (
              <Link
                key={website.id}
                to={`/real-estate/${website.slug}`}
                className="group grid overflow-hidden bg-white shadow-xl shadow-slate-950/8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:grid-cols-[0.95fr_1.05fr]"
              >
                <div
                  className="relative min-h-72"
                  style={{
                    backgroundImage: `linear-gradient(145deg, ${website.colors.secondary} 0%, ${website.colors.primary} 56%, ${website.colors.accent} 100%)`,
                  }}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:44px_44px]" />
                  <div className="absolute bottom-5 left-5 flex gap-2">
                    {[website.colors.primary, website.colors.secondary, website.colors.accent, website.colors.dark].map((color) => (
                      <span key={color} className="h-7 w-7 rounded-full border border-white/80 shadow-sm" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#153e75]">Live design</p>
                  <h3 className="mt-4 text-4xl font-black transition group-hover:text-[#153e75]">{website.title}</h3>
                  <p className="mt-3 text-sm font-bold text-slate-600">{website.style}</p>
                  <p className="mt-5 text-base leading-7 text-slate-600">{website.shortDescription}</p>
                  <div className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-[#0f172a] px-4 py-3 text-sm font-bold text-white transition group-hover:bg-[#153e75]">
                    Open Homepage
                  </div>
                </div>
              </Link>
            ))}

            <div className="border border-[#dbe4ef] bg-[#eff6ff] p-8">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#153e75]">Category rules</p>
              <h3 className="mt-4 text-3xl font-black">Real estate pages have to reduce uncertainty fast.</h3>
              <div className="mt-8 space-y-4">
                {pageNotes.map((note) => (
                  <article key={note.title} className="bg-white p-5 shadow-sm">
                    <h4 className="text-xl font-black">{note.title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{note.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="roadmap" className="border-y border-[#dbe4ef] bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#153e75]">Roadmap</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Nine more real estate directions can follow.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              These cards are placeholders for future full pages, keeping the category useful before all ten concepts exist.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {comingSoonConcepts.map(([name, focus]) => (
              <article key={name} className="border border-[#dbe4ef] bg-[#f5f8fb] p-6 opacity-90 shadow-sm">
                <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#153e75]">
                  Coming soon
                </div>
                <h3 className="mt-5 text-2xl font-black">{name}</h3>
                <p className="mt-3 text-sm font-bold text-slate-600">{focus}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
