import { Container, CTAButton, SubWebsiteNav } from '../../components'

const navLinks = [
  { label: 'Work', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

const projects = [
  ['Northline Identity', 'Brand system, landing page, and launch kit for a boutique property team.'],
  ['CartBloom Retail', 'Storefront structure, product cards, and campaign direction for a curated shop.'],
  ['Harbor Health UX', 'Clinic homepage strategy, service hierarchy, and patient booking flow.'],
]

const services = [
  ['Brand Direction', 'Positioning, visual systems, campaign language, and launch-ready creative rules.'],
  ['Web Design', 'Editorial homepages, service pages, conversion sections, and responsive design systems.'],
  ['Case Study Strategy', 'Project narratives that clarify the problem, the work, and the measurable result.'],
]

const process = [
  ['01', 'Frame the fit', 'Clarify audience, offer, proof, and the project story before designing screens.'],
  ['02', 'Shape the system', 'Create layouts, typography rhythm, visual direction, and repeatable sections.'],
  ['03', 'Package the launch', 'Polish case studies, contact prompts, handoff notes, and launch assets.'],
]

export function StudioValeCreative() {
  return (
    <main className="bg-[#f8fafc] text-[#111827]">
      <SubWebsiteNav
        brand="Studio Vale"
        links={navLinks}
        ctaLabel="Start a Brief"
        ctaHref="#contact"
        collectionPath="/portfolio"
        className="border-b border-slate-200 bg-white/94 text-[#111827]"
        brandClassName="text-[#0369a1]"
        linkClassName="text-slate-600 hover:text-[#0369a1]"
        ctaClassName="bg-[#111827] text-white hover:bg-[#0369a1]"
        menuButtonClassName="border-slate-200 text-[#0369a1] hover:bg-slate-100"
        mobilePanelClassName="border border-slate-200 bg-white"
      />

      <section className="relative overflow-hidden bg-[#111827] pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(56,189,248,0.28),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(229,231,235,0.16),transparent_22%),linear-gradient(135deg,#111827,#374151_54%,#0f172a)]" />
        <Container>
          <div className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#7dd3fc]">Studio Vale Creative</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                Brand and web work for teams with something specific to prove.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                A portfolio website concept for a small creative studio: selected case studies, service packaging,
                process clarity, and a crisp inquiry path for better-fit clients.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#work" size="lg" className="bg-[#7dd3fc] text-[#111827] hover:bg-white">
                  View Selected Work
                </CTAButton>
                <CTAButton href="#contact" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  Start a Brief
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[560px]">
              <div className="absolute right-0 top-0 h-[32rem] w-full max-w-[38rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="grid h-full grid-rows-[1fr_auto] overflow-hidden bg-[#e5e7eb] text-[#111827]">
                  <div className="relative bg-[linear-gradient(135deg,#e5e7eb,#111827_52%,#38bdf8)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:48px_48px]" />
                    <div className="absolute left-6 top-6 border border-white/40 bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#0369a1] shadow-sm">
                      Case study featured
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/94 p-5 shadow-xl">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0369a1]">Northline Identity</p>
                      <h2 className="mt-2 text-3xl font-black">A sharper story for a premium property team.</h2>
                      <p className="mt-2 text-sm font-bold text-slate-500">Brand system / homepage / launch kit</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 border-t border-slate-200 bg-white text-center">
                    {[
                      ['12', 'Selected works'],
                      ['3', 'Core offers'],
                      ['24h', 'Brief reply'],
                    ].map(([value, label]) => (
                      <div key={label} className="border-r border-slate-200 p-4 last:border-r-0">
                        <p className="text-2xl font-black text-[#0369a1]">{value}</p>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-64 bg-white p-5 text-[#111827] shadow-2xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#0369a1]">Project fit</p>
                <p className="mt-3 text-3xl font-black">Brand, site, and launch assets in one sprint.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="work" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0369a1]">Selected work</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">A portfolio that explains why the work mattered.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              The concept uses fewer, stronger cards with enough context to make each project feel like evidence instead of decoration.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map(([title, detail]) => (
              <article key={title} className="overflow-hidden bg-white shadow-xl shadow-slate-950/8">
                <div className="h-56 bg-[linear-gradient(135deg,#e5e7eb,#111827_52%,#38bdf8)]" />
                <div className="p-6">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0369a1]">Case study</p>
                  <h3 className="mt-4 text-2xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="services" className="border-y border-slate-200 bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0369a1]">Services</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Creative offers packaged for decisive buyers.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                The page clarifies what the studio does, who it helps, and how each service turns into a useful deliverable.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {services.map(([title, text]) => (
                <article key={title} className="bg-[#f8fafc] p-6 shadow-sm">
                  <div className="mb-6 h-2 w-16 bg-[#38bdf8]" />
                  <h3 className="text-2xl font-black">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="process" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0369a1]">Process</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">A creative process that feels specific, not mysterious.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {process.map(([number, title, text]) => (
              <article key={title} className="border border-slate-200 bg-white p-7 shadow-sm">
                <p className="text-5xl font-black text-[#38bdf8]">{number}</p>
                <h3 className="mt-8 text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="bg-[#111827] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.76fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#7dd3fc]">Inquiry</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                Send the project shape. Studio Vale replies with a fit check and next step.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                Portfolio contact sections work better when they set expectations: scope, timeline, budget, and response time.
              </p>
            </div>
            <div className="bg-white p-6 text-[#111827]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">Brief desk</p>
              <a href="mailto:hello@studiovale.example" className="mt-5 block bg-[#111827] px-5 py-4 text-center text-sm font-black text-white transition hover:bg-[#0369a1]">
                Email Studio Vale
              </a>
              <a href="tel:555-0709" className="mt-3 block bg-[#e0f2fe] px-5 py-4 text-center text-sm font-black text-[#0369a1] transition hover:bg-[#bae6fd]">
                Call (555) 070-9000
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
