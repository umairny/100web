import { Container, CTAButton, RestaurantSubNav } from '../../components'

const navLinks = [
  { label: 'Listings', href: '#listings' },
  { label: 'Neighborhoods', href: '#neighborhoods' },
  { label: 'Sellers', href: '#sellers' },
  { label: 'Contact', href: '#contact' },
]

const listings = [
  {
    price: '$1.28M',
    title: 'Northline Penthouse',
    detail: '3 bed / 2.5 bath / skyline terrace',
    tone: 'from-[#dbeafe] via-white to-[#f59e0b]',
  },
  {
    price: '$740K',
    title: 'Harbor View Loft',
    detail: '2 bed / 2 bath / walkable waterfront',
    tone: 'from-[#eff6ff] via-[#bfdbfe] to-[#153e75]',
  },
  {
    price: '$2.4M',
    title: 'Crescent Hill Estate',
    detail: '5 bed / 4 bath / private garden',
    tone: 'from-[#f8fafc] via-[#fde68a] to-[#0f172a]',
  },
]

const neighborhoods = [
  ['River North', 'Creative lofts, dining, gallery streets'],
  ['West Harbor', 'Waterfront condos and sunset trails'],
  ['Crescent Hill', 'Quiet estates, schools, and parks'],
]

const sellerSteps = [
  ['01', 'Price the market', 'Comparable sales, buyer demand, and timing are mapped before launch.'],
  ['02', 'Stage the story', 'Photography, copy, floor plan, and lifestyle positioning create stronger first impressions.'],
  ['03', 'Negotiate cleanly', 'Offer strategy, inspection terms, and closing details stay organized from start to finish.'],
]

export function SkylineRealtyGroup() {
  return (
    <main className="bg-[#f5f8fb] text-[#0f172a]">
      <RestaurantSubNav
        brand="Skyline Realty"
        links={navLinks}
        ctaLabel="Book Consult"
        ctaHref="#contact"
        collectionPath="/real-estate"
        className="border-b border-[#dbe4ef] bg-white/92 text-[#0f172a]"
        brandClassName="text-[#153e75]"
        linkClassName="text-slate-600 hover:text-[#153e75]"
        ctaClassName="bg-[#153e75] text-white hover:bg-[#0f172a]"
        menuButtonClassName="border-[#dbe4ef] text-[#153e75] hover:bg-[#eff6ff]"
        mobilePanelClassName="border border-[#dbe4ef] bg-white"
      />

      <section className="relative overflow-hidden bg-[#0f172a] pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(37,99,235,0.36),transparent_25%),radial-gradient(circle_at_82%_20%,rgba(245,158,11,0.24),transparent_23%)]" />
        <Container>
          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#fbbf24]">Skyline Realty Group</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                City homes curated with market intelligence.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                Premium representation for buyers, sellers, and investors who want sharp listing strategy, neighborhood
                context, and calm negotiation from first tour to close.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#listings" size="lg" className="bg-[#fbbf24] text-[#0f172a] hover:bg-white">
                  View Featured Homes
                </CTAButton>
                <CTAButton href="tel:555-0301" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  Call (555) 030-1000
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[560px]">
              <div className="absolute right-0 top-0 h-[32rem] w-full max-w-[38rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="grid h-full grid-rows-[1fr_auto] overflow-hidden bg-[#eff6ff] text-[#0f172a]">
                  <div className="relative bg-[linear-gradient(135deg,#dbeafe,#153e75_54%,#f59e0b)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:48px_48px]" />
                    <div className="absolute bottom-6 left-6 right-6 bg-white/92 p-5 shadow-xl">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#153e75]">Featured listing</p>
                      <h2 className="mt-2 text-3xl font-black">Northline Penthouse</h2>
                      <p className="mt-2 text-sm font-bold text-slate-500">$1.28M / Skyline terrace / Private elevator</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 border-t border-slate-200 bg-white text-center">
                    {[
                      ['28', 'Days avg'],
                      ['4.9', 'Rating'],
                      ['126', 'Closed'],
                    ].map(([value, label]) => (
                      <div key={label} className="border-r border-slate-200 p-4 last:border-r-0">
                        <p className="text-2xl font-black text-[#153e75]">{value}</p>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-64 bg-white p-5 text-[#0f172a] shadow-2xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#153e75]">Market desk</p>
                <p className="mt-3 text-3xl font-black">Tour plan ready within 24 hours.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="listings" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#153e75]">Featured listings</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Homes with a clear buyer story.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Each listing card balances price, location, lifestyle, and quick action so visitors can compare without friction.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {listings.map((listing) => (
              <article key={listing.title} className="overflow-hidden bg-white shadow-xl shadow-slate-950/8">
                <div className={`h-56 bg-gradient-to-br ${listing.tone}`} />
                <div className="p-6">
                  <p className="text-3xl font-black text-[#153e75]">{listing.price}</p>
                  <h3 className="mt-3 text-2xl font-black">{listing.title}</h3>
                  <p className="mt-3 text-sm font-bold text-slate-500">{listing.detail}</p>
                  <a href="#contact" className="mt-6 inline-flex w-full justify-center rounded-lg bg-[#0f172a] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#153e75]">
                    Request Tour
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="neighborhoods" className="border-y border-[#dbe4ef] bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="bg-[#eff6ff] p-8 md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#153e75]">Neighborhood intelligence</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                The right home starts with the right block.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Skyline pairs each search with schools, commute patterns, dining streets, parks, and resale signals before
                buyers fall in love with the wrong fit.
              </p>
            </div>
            <div className="grid gap-4">
              {neighborhoods.map(([name, text]) => (
                <article key={name} className="border border-[#dbe4ef] bg-[#f5f8fb] p-6">
                  <h3 className="text-2xl font-black">{name}</h3>
                  <p className="mt-2 text-sm font-bold text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="sellers" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#153e75]">Seller strategy</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              A calmer listing process with fewer surprises.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {sellerSteps.map(([number, title, text]) => (
              <article key={title} className="border border-[#dbe4ef] bg-white p-7 shadow-sm">
                <p className="text-5xl font-black text-[#f59e0b]">{number}</p>
                <h3 className="mt-8 text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="bg-[#0f172a] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#fbbf24]">Start the search</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                Get a focused buying or selling plan before your next move.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                Tell Skyline what you are trying to buy, sell, or evaluate. The first consult turns the market into a clear next step.
              </p>
            </div>
            <div className="bg-white p-6 text-[#0f172a]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">Consult desk</p>
              <a href="tel:555-0301" className="mt-5 block bg-[#153e75] px-5 py-4 text-center text-sm font-black text-white transition hover:bg-[#0f172a]">
                Call (555) 030-1000
              </a>
              <a href="mailto:hello@skylinerealty.example" className="mt-3 block bg-[#eff6ff] px-5 py-4 text-center text-sm font-black text-[#153e75] transition hover:bg-[#dbeafe]">
                Email Skyline Realty
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
