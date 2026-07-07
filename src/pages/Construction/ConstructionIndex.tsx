import { Link } from 'react-router-dom'
import { AnimatedSection, Container, CTAButton } from '../../components'
import { constructionWebsites } from '../../data/websites'

const serviceTypes = ['Custom Homes', 'Renovations', 'Commercial Buildouts', 'Project Planning', 'Permits', 'Site Management']

const uxNotes = [
  ['Proof wins trust', 'Construction pages need project evidence, credentials, process clarity, and visible service areas.'],
  ['Quote paths matter', 'Users should understand the scope, timeline, and next step before they request an estimate.'],
  ['Rugged but readable', 'The visual system can feel sturdy and hands-on while keeping content organized for scanning.'],
]

const comingSoonConcepts = [
  ['Summit Roof Co.', 'roofing estimates and storm repair'],
  ['ClearLine Remodeling', 'kitchen and bath transformations'],
  ['IronGate Commercial', 'tenant improvements and buildouts'],
  ['StoneField Landscapes', 'outdoor living and hardscape projects'],
  ['PrimeDeck Builders', 'decks, pergolas, and backyard upgrades'],
  ['CivicWorks Contractors', 'municipal and infrastructure projects'],
  ['ForgeLine Electrical', 'residential and commercial electrical work'],
  ['TerraForm Concrete', 'foundations, flatwork, and structural concrete'],
  ['BluePeak Plumbing', 'plumbing installation and emergency service'],
]

export function ConstructionIndex() {
  const liveWebsites = constructionWebsites.filter((website) => website.status === 'completed' || website.status === 'live')

  return (
    <main className="bg-[#faf7ef] text-[#1f2428]">
      <section className="relative -mt-16 overflow-hidden bg-[#252525] pb-20 pt-24 text-white md:pb-28 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(217,119,6,0.42),transparent_28%),radial-gradient(circle_at_84%_24%,rgba(254,243,199,0.18),transparent_22%),linear-gradient(135deg,#1f1f1f,#3f3f46_58%,#171717)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_56px)]" />
        <Container>
          <AnimatedSection className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <Link to="/" className="text-sm font-bold text-white/70 transition hover:text-white">
                Back to Home
              </Link>
              <div className="mt-8 inline-flex border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#fbbf24]">
                {liveWebsites.length} live / 10 planned
              </div>
              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                Construction websites built for trust, proof, and quote requests.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                A category hub for contractors, builders, remodelers, roofers, commercial crews, and specialty trades that
                need strong project proof and a clear path from interest to estimate.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#live-concepts" size="lg" className="bg-[#fbbf24] text-[#252525] hover:bg-white">
                  View Live Concept
                </CTAButton>
                <CTAButton href="#roadmap" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  See Roadmap
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[520px]">
              <div className="absolute right-0 top-8 h-[29rem] w-full border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="grid h-full grid-rows-[1fr_auto] overflow-hidden bg-[#fef3c7] text-[#1f2428]">
                  <div className="relative bg-[linear-gradient(135deg,#fef3c7,#3f3f46_54%,#d97706)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:46px_46px]" />
                    <div className="absolute left-8 top-8 border border-white/50 bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#92400e] shadow-sm">
                      Licensed and insured
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/94 p-5 shadow-xl">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#92400e]">ForgePoint Builders</p>
                      <p className="mt-2 text-3xl font-black">Projects scoped clearly before the first wall moves.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 border-t border-stone-200 bg-white text-center">
                    {[
                      ['18+', 'Years'],
                      ['240', 'Projects'],
                      ['A+', 'Rating'],
                    ].map(([value, label]) => (
                      <div key={label} className="border-r border-stone-200 p-4 last:border-r-0">
                        <p className="text-2xl font-black text-[#92400e]">{value}</p>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-stone-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="border-b border-[#eadfc8] bg-white py-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {serviceTypes.map((service) => (
              <span key={service} className="rounded-full border border-[#eadfc8] bg-[#faf7ef] px-4 py-2 text-sm font-bold text-stone-600">
                {service}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="live-concepts" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#92400e]">Live concept</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                One builder homepage is ready to explore.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-stone-600">
              The first construction concept focuses on custom builds and renovations with project proof, process steps,
              service area clarity, and estimate conversion.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            {liveWebsites.map((website) => (
              <Link
                key={website.id}
                to={`/construction/${website.slug}`}
                className="group grid overflow-hidden bg-white shadow-xl shadow-stone-950/8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:grid-cols-[0.95fr_1.05fr]"
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
                  <div className={`absolute inset-0 ${website.image ? 'bg-gradient-to-t from-[#1f2428]/55 via-transparent to-transparent' : 'bg-[linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:44px_44px]'}`} />
                  <div className="absolute bottom-5 left-5 flex gap-2">
                    {[website.colors.primary, website.colors.secondary, website.colors.accent, website.colors.dark].map((color) => (
                      <span key={color} className="h-7 w-7 rounded-full border border-white/80 shadow-sm" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#92400e]">Live design</p>
                  <h3 className="mt-4 text-4xl font-black transition group-hover:text-[#92400e]">{website.title}</h3>
                  <p className="mt-3 text-sm font-bold text-stone-600">{website.style}</p>
                  <p className="mt-5 text-base leading-7 text-stone-600">{website.shortDescription}</p>
                  <div className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-[#1f2428] px-4 py-3 text-sm font-bold text-white transition group-hover:bg-[#92400e]">
                    Open Homepage
                  </div>
                </div>
              </Link>
            ))}

            <div className="border border-[#eadfc8] bg-[#fef3c7] p-8">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#92400e]">Construction UX rules</p>
              <h3 className="mt-4 text-3xl font-black">Visitors need proof before they request pricing.</h3>
              <div className="mt-8 space-y-4">
                {uxNotes.map(([title, text]) => (
                  <article key={title} className="bg-white p-5 shadow-sm">
                    <h4 className="text-xl font-black">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-stone-600">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="roadmap" className="border-y border-[#eadfc8] bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#92400e]">Roadmap</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                More trade and contractor niches can follow.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-stone-600">
              These coming-soon cards keep the Construction category useful while the first builder concept is live.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {comingSoonConcepts.map(([name, focus], index) => (
              <article key={name} className="group overflow-hidden border border-[#eadfc8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-40 overflow-hidden bg-[linear-gradient(145deg,#faf7ef,#3f3f46_58%,#d97706)]">
                  <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,white_1px,transparent_1px),linear-gradient(white_1px,transparent_1px)] [background-size:32px_32px]" /><div className="absolute bottom-0 left-[12%] h-[50%] w-[28%] bg-white/20" /><div className="absolute bottom-0 right-[16%] h-[75%] w-[34%] bg-white/30 [clip-path:polygon(50%_0,100%_36%,100%_100%,0_100%,0_36%)]" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#92400e]">Coming soon</div><span className="absolute bottom-4 left-4 text-xs font-black uppercase tracking-[0.16em] text-white">Concept {String(index + 2).padStart(2, '0')}</span>
                </div>
                <div className="p-6"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#92400e]">Trade & contractor</p><h3 className="mt-3 text-2xl font-black">{name}</h3><p className="mt-2 text-sm font-bold capitalize text-stone-500">{focus}</p><p className="mt-4 text-sm leading-6 text-stone-600">A proof-led contractor concept featuring services, completed work, credentials, service areas, and a straightforward quote request.</p><div className="mt-5 flex gap-2 border-t border-stone-200 pt-5">{['#3f3f46', '#faf7ef', '#d97706', '#171717'].map((color) => <span key={color} className="h-6 w-6 rounded-full border border-stone-300" style={{ backgroundColor: color }} />)}</div><span className="mt-5 inline-flex w-full cursor-not-allowed items-center justify-center rounded-lg bg-stone-100 px-4 py-3 text-sm font-bold text-stone-500">Coming Soon</span></div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
