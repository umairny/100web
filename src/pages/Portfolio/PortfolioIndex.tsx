import { Link } from 'react-router-dom'
import { AnimatedSection, Container, CTAButton } from '../../components'
import { portfolioWebsites } from '../../data/websites'

const portfolioTypes = ['Designers', 'Photographers', 'Developers', 'Agencies', 'Writers', 'Consultants']

const uxNotes = [
  ['Lead with proof', 'Portfolio pages need a sharp position, selected work, clear services, and a confident contact path.'],
  ['Make scanning easy', 'Visitors should understand specialty, project type, client fit, and outcomes without reading a long bio first.'],
  ['Show range with restraint', 'Case studies, testimonials, and process notes should feel curated instead of crowded.'],
]

const comingSoonConcepts = [
  ['FrameLab Photo', 'editorial photography portfolio'],
  ['Northline Developer', 'software engineer portfolio'],
  ['Inkhouse Copy', 'conversion copywriter site'],
  ['MotionDesk Studio', 'animation and motion design'],
  ['Cedar UX Consultant', 'product strategy portfolio'],
  ['Artisan Objects', 'maker and craft portfolio'],
  ['Atelier North Architecture', 'architecture and built-environment portfolio'],
  ['Signal Brand Designer', 'identity and visual systems portfolio'],
  ['Vale Interior Studio', 'residential interior design portfolio'],
]

export function PortfolioIndex() {
  const liveWebsites = portfolioWebsites.filter((website) => website.status === 'completed' || website.status === 'live')

  return (
    <main className="bg-[#f8fafc] text-[#111827]">
      <section className="relative -mt-16 overflow-hidden bg-[#111827] pb-20 pt-24 text-white md:pb-28 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(56,189,248,0.32),transparent_28%),radial-gradient(circle_at_84%_24%,rgba(229,231,235,0.18),transparent_22%),linear-gradient(135deg,#111827,#374151_58%,#0f172a)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_56px)]" />
        <Container>
          <AnimatedSection className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <Link to="/" className="text-sm font-bold text-white/70 transition hover:text-white">
                Back to Home
              </Link>
              <div className="mt-8 inline-flex border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#7dd3fc]">
                {liveWebsites.length} live / 10 planned
              </div>
              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                Portfolio websites built for proof, positioning, and better inquiries.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                A category hub for creative professionals, studios, consultants, and specialists who need their best work to create trust quickly.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#live-concepts" size="lg" className="bg-[#7dd3fc] text-[#111827] hover:bg-white">
                  View Live Concept
                </CTAButton>
                <CTAButton href="#roadmap" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  See Roadmap
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[520px]">
              <div className="absolute right-0 top-8 h-[29rem] w-full border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="grid h-full grid-rows-[1fr_auto] overflow-hidden bg-[#e5e7eb] text-[#111827]">
                  <div className="relative bg-[linear-gradient(135deg,#e5e7eb,#111827_54%,#38bdf8)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:46px_46px]" />
                    <div className="absolute left-8 top-8 border border-white/40 bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#0369a1] shadow-sm">
                      Selected case studies
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/94 p-5 shadow-xl">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0369a1]">Studio Vale Creative</p>
                      <p className="mt-2 text-3xl font-black">A tighter portfolio for higher-quality project calls.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 border-t border-slate-200 bg-white text-center">
                    {[
                      ['12', 'Projects'],
                      ['4', 'Services'],
                      ['24h', 'Reply'],
                    ].map(([value, label]) => (
                      <div key={label} className="border-r border-slate-200 p-4 last:border-r-0">
                        <p className="text-2xl font-black text-[#0369a1]">{value}</p>
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

      <section className="border-b border-slate-200 bg-white py-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {portfolioTypes.map((item) => (
              <span key={item} className="rounded-full border border-slate-200 bg-[#f8fafc] px-4 py-2 text-sm font-bold text-slate-600">
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
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0369a1]">Live concept</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                One creative studio portfolio is ready to explore.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              The first portfolio concept focuses on selected case studies, service packaging, client proof,
              and a direct inquiry flow.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            {liveWebsites.map((website) => (
              <Link
                key={website.id}
                to={`/portfolio/${website.slug}`}
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
                  <div className={`absolute inset-0 ${website.image ? 'bg-gradient-to-t from-[#111827]/55 via-transparent to-transparent' : 'bg-[linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:44px_44px]'}`} />
                  <div className="absolute bottom-5 left-5 flex gap-2">
                    {[website.colors.primary, website.colors.secondary, website.colors.accent, website.colors.dark].map((color) => (
                      <span key={color} className="h-7 w-7 rounded-full border border-white/80 shadow-sm" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0369a1]">Live design</p>
                  <h3 className="mt-4 text-4xl font-black transition group-hover:text-[#0369a1]">{website.title}</h3>
                  <p className="mt-3 text-sm font-bold text-slate-600">{website.style}</p>
                  <p className="mt-5 text-base leading-7 text-slate-600">{website.shortDescription}</p>
                  <div className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-[#111827] px-4 py-3 text-sm font-bold text-white transition group-hover:bg-[#0369a1]">
                    Open Homepage
                  </div>
                </div>
              </Link>
            ))}

            <div className="border border-slate-200 bg-[#f1f5f9] p-8">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0369a1]">Portfolio UX rules</p>
              <h3 className="mt-4 text-3xl font-black">The work needs context, not just screenshots.</h3>
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

      <section id="roadmap" className="border-y border-slate-200 bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0369a1]">Roadmap</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                More creator and specialist portfolios can follow.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              These coming-soon cards keep the Portfolio category useful while the first studio concept is live.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {comingSoonConcepts.map(([name, focus], index) => (
              <article key={name} className="group overflow-hidden border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-40 overflow-hidden bg-[linear-gradient(145deg,#f8fafc,#374151_58%,#38bdf8)]">
                  <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,white_1px,transparent_1px),linear-gradient(white_1px,transparent_1px)] [background-size:32px_32px]" /><div className="absolute bottom-0 left-[10%] h-[62%] w-[34%] bg-white/20" /><div className="absolute right-[12%] top-[18%] h-[48%] w-[34%] border-8 border-white/25" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#0369a1]">Coming soon</div><span className="absolute bottom-4 left-4 text-xs font-black uppercase tracking-[0.16em] text-white">Concept {String(index + 2).padStart(2, '0')}</span>
                </div>
                <div className="p-6"><p className="text-xs font-black uppercase tracking-[0.18em] text-[#0369a1]">Creative portfolio</p><Link to={`/portfolio/${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`} className="mt-3 inline-flex items-center rounded-full border border-slate-300 bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-slate-600 transition hover:border-slate-400 hover:text-slate-900">Coming soon</Link><h3 className="mt-3 text-2xl font-black">{name}</h3><p className="mt-2 text-sm font-bold capitalize text-slate-500">{focus}</p><p className="mt-4 text-sm leading-6 text-slate-600">A curated portfolio concept focused on positioning, selected work, process, credible outcomes, and a confident inquiry path.</p><div className="mt-5 flex gap-2 border-t border-slate-200 pt-5">{['#374151', '#f8fafc', '#38bdf8', '#111827'].map((color) => <span key={color} className="h-6 w-6 rounded-full border border-slate-300" style={{ backgroundColor: color }} />)}</div><span className="mt-5 inline-flex w-full cursor-not-allowed items-center justify-center rounded-lg bg-slate-100 px-4 py-3 text-sm font-bold text-slate-500">Concept preview</span></div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
