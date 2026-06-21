import { Link } from 'react-router-dom'
import { AnimatedSection, Container, CTAButton } from '../../components'
import { ecommerceWebsites } from '../../data/websites'

const shopTypes = ['DTC Stores', 'Marketplaces', 'Product Launches', 'Subscriptions', 'Gift Shops', 'Retail Catalogs']

const uxNotes = [
  ['Merchandise fast', 'E-commerce pages need product hierarchy, clear offers, trust cues, and a cart path that stays obvious.'],
  ['Reduce buying friction', 'Visitors should understand shipping, returns, reviews, and product value before comparing alternatives.'],
  ['Design for scanning', 'Strong category blocks, quick product cards, and offer rhythm help shoppers move without getting tired.'],
]

const comingSoonConcepts = [
  ['NorthKind Apparel', 'outdoor clothing store'],
  ['GlowCart Beauty', 'cosmetics product launch'],
  ['DeskNest Supply', 'home office accessories'],
  ['LittleSprout Toys', 'curated toy shop'],
  ['PantryPilot', 'specialty grocery delivery'],
  ['CycleBox Gear', 'cycling equipment store'],
]

export function EcommerceIndex() {
  const liveWebsites = ecommerceWebsites.filter((website) => website.status === 'completed' || website.status === 'live')

  return (
    <main className="bg-[#fbf7ff] text-[#17111f]">
      <section className="relative -mt-16 overflow-hidden bg-[#2e1065] pb-20 pt-24 text-white md:pb-28 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(124,58,237,0.62),transparent_28%),radial-gradient(circle_at_84%_24%,rgba(236,72,153,0.34),transparent_22%),linear-gradient(135deg,#2e1065,#7c3aed_58%,#4c1d95)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_56px)]" />
        <Container>
          <AnimatedSection className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <Link to="/" className="text-sm font-bold text-white/70 transition hover:text-white">
                Back to Home
              </Link>
              <div className="mt-8 inline-flex border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#fbcfe8]">
                {liveWebsites.length} live / 10 planned
              </div>
              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                E-commerce websites built for discovery, trust, and checkout momentum.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                A category hub for online stores, product launches, curated shops, subscription boxes, and retail brands that need polished browsing and fewer buying doubts.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#live-concepts" size="lg" className="bg-[#fbcfe8] text-[#2e1065] hover:bg-white">
                  View Live Concept
                </CTAButton>
                <CTAButton href="#roadmap" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  See Roadmap
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[520px]">
              <div className="absolute right-0 top-8 h-[29rem] w-full border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="grid h-full grid-rows-[1fr_auto] overflow-hidden bg-[#f3e8ff] text-[#17111f]">
                  <div className="relative bg-[linear-gradient(135deg,#f3e8ff,#7c3aed_54%,#ec4899)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:46px_46px]" />
                    <div className="absolute left-8 top-8 rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#7c3aed] shadow-sm">
                      Free shipping over $75
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/94 p-5 shadow-xl">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#7c3aed]">CartBloom Market</p>
                      <p className="mt-2 text-3xl font-black">Curated products with a checkout path that stays close.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 border-t border-slate-200 bg-white text-center">
                    {[
                      ['42', 'Products'],
                      ['18%', 'Bundle save'],
                      ['4.8', 'Reviews'],
                    ].map(([value, label]) => (
                      <div key={label} className="border-r border-slate-200 p-4 last:border-r-0">
                        <p className="text-2xl font-black text-[#7c3aed]">{value}</p>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="border-b border-[#eadcff] bg-white py-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {shopTypes.map((item) => (
              <span key={item} className="rounded-full border border-[#eadcff] bg-[#fbf7ff] px-4 py-2 text-sm font-bold text-slate-600">
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="live-concepts" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#7c3aed]">Live concept</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                One curated market homepage is ready to explore.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              The first E-commerce concept focuses on product discovery, featured collections, social proof,
              offer clarity, and a strong checkout path.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            {liveWebsites.map((website) => (
              <Link
                key={website.id}
                to={`/e-commerce/${website.slug}`}
                className="group grid overflow-hidden bg-white shadow-xl shadow-slate-950/8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:grid-cols-[0.95fr_1.05fr]"
              >
                <div
                  className="relative min-h-72"
                  style={{
                    backgroundImage: `linear-gradient(145deg, ${website.colors.secondary} 0%, ${website.colors.primary} 56%, ${website.colors.accent} 100%)`,
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
                  <div className={`absolute inset-0 ${website.image ? 'bg-gradient-to-t from-[#2e1065]/50 via-transparent to-transparent' : 'bg-[linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:44px_44px]'}`} />
                  <div className="absolute bottom-5 left-5 flex gap-2">
                    {[website.colors.primary, website.colors.secondary, website.colors.accent, website.colors.dark].map((color) => (
                      <span key={color} className="h-7 w-7 rounded-full border border-white/80 shadow-sm" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#7c3aed]">Live design</p>
                  <h3 className="mt-4 text-4xl font-black transition group-hover:text-[#7c3aed]">{website.title}</h3>
                  <p className="mt-3 text-sm font-bold text-slate-600">{website.style}</p>
                  <p className="mt-5 text-base leading-7 text-slate-600">{website.shortDescription}</p>
                  <div className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-[#17111f] px-4 py-3 text-sm font-bold text-white transition group-hover:bg-[#7c3aed]">
                    Open Homepage
                  </div>
                </div>
              </Link>
            ))}

            <div className="border border-[#eadcff] bg-[#f3e8ff] p-8">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#7c3aed]">E-commerce UX rules</p>
              <h3 className="mt-4 text-3xl font-black">Shoppers need reasons to keep moving.</h3>
              <div className="mt-8 space-y-4">
                {uxNotes.map(([title, text]) => (
                  <article key={title} className="bg-white p-5 shadow-sm">
                    <h4 className="text-xl font-black">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="roadmap" className="border-y border-[#eadcff] bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#7c3aed]">Roadmap</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                More retail and product niches can follow.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              These coming-soon cards keep the E-commerce category useful while the first store concept is live.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {comingSoonConcepts.map(([name, focus]) => (
              <article key={name} className="border border-[#eadcff] bg-[#fbf7ff] p-6 opacity-90 shadow-sm">
                <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#7c3aed]">
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
