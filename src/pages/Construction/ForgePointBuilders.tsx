import { Container, CTAButton, SubWebsiteNav } from '../../components'

const navLinks = [
  { label: 'Projects', href: '#projects' },
  { label: 'Services', href: '#services' },
  { label: 'Process', href: '#process' },
  { label: 'Estimate', href: '#estimate' },
]

const projects = [
  ['Cedar Ridge Renovation', 'Whole-home remodel, structural updates, kitchen expansion', '$420K scope'],
  ['North Yard Buildout', 'Commercial office conversion with phased occupancy', '18 week schedule'],
  ['Maple House Addition', 'Two-story addition, mudroom, primary suite, deck', 'Permits managed'],
]

const services = [
  ['Custom Builds', 'Ground-up residential projects with planning, permits, site coordination, and finish management.'],
  ['Renovations', 'Kitchens, additions, whole-home remodels, and structural upgrades with clear milestones.'],
  ['Commercial Work', 'Office, retail, and light commercial buildouts designed around uptime and inspection readiness.'],
]

const processSteps = [
  ['01', 'Scope the work', 'Walkthrough, photos, measurements, constraints, and priorities become a clean project brief.'],
  ['02', 'Price the path', 'Materials, labor, allowances, timeline, and trade partners are mapped before approval.'],
  ['03', 'Build with updates', 'Weekly check-ins, site notes, schedule changes, and finish decisions stay visible.'],
]

export function ForgePointBuilders() {
  return (
    <main className="bg-[#faf7ef] text-[#1f2428]">
      <SubWebsiteNav
        brand="ForgePoint Builders"
        links={navLinks}
        ctaLabel="Request Estimate"
        ctaHref="#estimate"
        collectionPath="/construction"
        className="border-b border-[#eadfc8] bg-white/94 text-[#1f2428]"
        brandClassName="text-[#92400e]"
        linkClassName="text-stone-600 hover:text-[#92400e]"
        ctaClassName="bg-[#92400e] text-white hover:bg-[#78350f]"
        menuButtonClassName="border-[#eadfc8] text-[#92400e] hover:bg-[#fef3c7]"
        mobilePanelClassName="border border-[#eadfc8] bg-white"
      />

      <section className="relative overflow-hidden bg-[#252525] pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(217,119,6,0.42),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(254,243,199,0.16),transparent_22%),linear-gradient(135deg,#1f1f1f,#3f3f46_54%,#171717)]" />
        <Container>
          <div className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#fbbf24]">ForgePoint Builders</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                Built right, documented clearly, finished with pride.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                A general contractor website concept for custom builds, renovations, and commercial spaces that need
                strong project proof, transparent estimates, and a confident path from first call to final walkthrough.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#estimate" size="lg" className="bg-[#fbbf24] text-[#252525] hover:bg-white">
                  Request Estimate
                </CTAButton>
                <CTAButton href="tel:555-0507" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  Call (555) 050-7000
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[560px]">
              <div className="absolute right-0 top-0 h-[32rem] w-full max-w-[38rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="grid h-full grid-rows-[1fr_auto] overflow-hidden bg-[#fef3c7] text-[#1f2428]">
                  <div className="relative bg-[linear-gradient(135deg,#fef3c7,#3f3f46_52%,#d97706)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.20)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.20)_1px,transparent_1px)] [background-size:48px_48px]" />
                    <div className="absolute left-6 top-6 border border-white/50 bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#92400e] shadow-sm">
                      18 years in the field
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/94 p-5 shadow-xl">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#92400e]">Current project</p>
                      <h2 className="mt-2 text-3xl font-black">Cedar Ridge renovation, phase 03.</h2>
                      <p className="mt-2 text-sm font-bold text-stone-500">Framing complete / rough-ins scheduled</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 border-t border-stone-200 bg-white text-center">
                    {[
                      ['240', 'Projects'],
                      ['42', 'Trade partners'],
                      ['A+', 'Local rating'],
                    ].map(([value, label]) => (
                      <div key={label} className="border-r border-stone-200 p-4 last:border-r-0">
                        <p className="text-2xl font-black text-[#92400e]">{value}</p>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-stone-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-64 bg-white p-5 text-[#1f2428] shadow-2xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#92400e]">Estimate desk</p>
                <p className="mt-3 text-3xl font-black">Scope review returned within 48 hours.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="projects" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#92400e]">Project proof</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Recent work with scope, schedule, and outcome cues.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-stone-600">
              Construction buyers compare risk before style. These cards show the kind of proof a contractor site needs to earn a quote request.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {projects.map(([title, detail, meta]) => (
              <article key={title} className="overflow-hidden bg-white shadow-xl shadow-stone-950/8">
                <div className="h-56 bg-[linear-gradient(135deg,#fef3c7,#3f3f46_52%,#d97706)]" />
                <div className="p-6">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-[#92400e]">{meta}</p>
                  <h3 className="mt-4 text-2xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-stone-600">{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="services" className="border-y border-[#eadfc8] bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#92400e]">Services</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">From first sketch to final punch list.</h2>
              <p className="mt-5 text-lg leading-8 text-stone-600">
                The site keeps service areas specific enough for homeowners and business owners to identify the right fit quickly.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {services.map(([title, text]) => (
                <article key={title} className="bg-[#faf7ef] p-6 shadow-sm">
                  <div className="mb-6 h-2 w-16 bg-[#d97706]" />
                  <h3 className="text-2xl font-black">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-stone-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="process" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#92400e]">Build process</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">A cleaner project path with fewer surprises.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {processSteps.map(([number, title, text]) => (
              <article key={title} className="border border-[#eadfc8] bg-white p-7 shadow-sm">
                <p className="text-5xl font-black text-[#d97706]">{number}</p>
                <h3 className="mt-8 text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-stone-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="estimate" className="bg-[#252525] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.76fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#fbbf24]">Start the estimate</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                Bring the project idea. ForgePoint brings the scope, schedule, and next step.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                A contractor homepage should make it easy to share project type, location, budget range, and timeline without turning the form into a chore.
              </p>
            </div>
            <div className="bg-white p-6 text-[#1f2428]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-stone-500">Estimate desk</p>
              <a href="tel:555-0507" className="mt-5 block bg-[#92400e] px-5 py-4 text-center text-sm font-black text-white transition hover:bg-[#78350f]">
                Call (555) 050-7000
              </a>
              <a href="mailto:build@forgepoint.example" className="mt-3 block bg-[#fef3c7] px-5 py-4 text-center text-sm font-black text-[#92400e] transition hover:bg-[#fde68a]">
                Email Project Details
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
