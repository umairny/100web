import { Link } from 'react-router-dom'
import { AnimatedSection, Container, CTAButton } from '../../components'
import { beautyWebsites } from '../../data/websites'

export function BeautyIndex() {
  const liveWebsites = beautyWebsites.filter((website) => website.status === 'completed' || website.status === 'live')
  const comingSoonWebsites = beautyWebsites.filter((website) => website.status !== 'completed' && website.status !== 'live')
  const beautyServices = ['Salon', 'Nails', 'Spa', 'Makeup', 'Skin', 'Barber', 'Bridal', 'Hair']
  const studioNotes = [
    {
      title: 'Soft Conversion',
      text: 'Beauty clients need trust first: clear service mood, gentle actions, and polished visual hierarchy before booking.',
    },
    {
      title: 'Palette Memory',
      text: 'Each concept keeps its own signature tones, from blush glam to spa greens and nail-studio gold.',
    },
    {
      title: 'Editorial Rhythm',
      text: 'The collection favors airy spacing, tactile cards, and boutique-style sections instead of a dense directory feel.',
    },
  ]
  const designModes = [
    ['Polished', 'nails, salon'],
    ['Restorative', 'spa, wellness'],
    ['Glam', 'makeup, beauty bar'],
    ['Clinical soft', 'skin, aesthetics'],
  ]

  return (
    <main className="bg-[#fff8fb] text-[#21191d]">
      <section className="relative -mt-16 overflow-hidden bg-[#fff8fb] pb-20 pt-20 md:pb-28 md:pt-28">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.92),rgba(255,240,246,0.74)),radial-gradient(circle_at_18%_22%,rgba(255,61,154,0.18),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(215,181,109,0.18),transparent_22%)]" />
        <div className="absolute right-0 top-0 hidden h-full w-28 bg-[#21191d] lg:block" />
        <div className="absolute bottom-0 left-0 h-40 w-full bg-[repeating-linear-gradient(90deg,rgba(33,25,29,0.06)_0_1px,transparent_1px_44px)]" />
        <Container>
          <AnimatedSection className="relative grid gap-12 lg:grid-cols-[1.04fr_0.96fr] lg:items-center">
            <div>
              <Link to="/" className="text-sm mr-4 font-bold text-[#b76e79] transition hover:text-[#21191d]">
                Back to Home
              </Link>
              <div className="mt-8 inline-flex rounded-full border border-[#efd7df] bg-white/80 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-[#b76e79] shadow-sm">
                {liveWebsites.length} live / {beautyWebsites.length} total
              </div>
              <p className="mt-8 text-sm font-black uppercase tracking-[0.26em] text-[#b76e79]">Beauty collection</p>
              <h1 className="mt-4 max-w-5xl text-5xl font-black leading-[0.94] md:text-7xl">
                Beauty websites with boutique energy, not template polish.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6b5a61]">
                Salon, spa, nails, bridal, skincare, barber, and beauty bar concepts shaped around trust,
                atmosphere, booking confidence, and a visual style clients can feel quickly.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#live-concepts" size="lg" className="bg-[#21191d] text-white hover:bg-[#b76e79]">
                  View Live Concepts
                </CTAButton>
                <CTAButton href="#coming-soon" variant="outline" size="lg" className="border-[#b76e79] bg-white/70 text-[#b76e79] hover:bg-white">
                  Preview Roadmap
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[520px]">
              <div className="absolute left-1/2 top-6 h-[27rem] w-[20rem] -translate-x-1/2 rounded-t-[12rem] rounded-b-[3rem] bg-[#21191d] shadow-2xl shadow-[#b76e79]/20" />
              <div className="absolute left-1/2 top-16 h-[20rem] w-[15rem] -translate-x-1/2 rounded-t-[9rem] rounded-b-[2rem] bg-[linear-gradient(160deg,#f5b6c8,#fffdf9_48%,#d7b56d)] p-5">
                <div className="h-full rounded-t-[7rem] rounded-b-[1.5rem] border border-white/70 bg-white/35" />
              </div>
              <div className="absolute left-2 top-20 w-48 rotate-[-5deg] border border-[#efd7df] bg-white p-5 shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b76e79]">Live studio</p>
                <p className="mt-2 text-2xl font-black">GlowHaus Salon</p>
                <p className="mt-2 text-sm leading-6 text-[#6b5a61]">Color, styling, confident beauty.</p>
              </div>
              <div className="absolute bottom-20 right-0 w-52 rotate-[5deg] bg-[#fff0f6] p-5 shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ff3d9a]">Mood board</p>
                <p className="mt-2 text-2xl font-black">Spa calm, nail polish, bridal softness.</p>
              </div>
              <div className="absolute bottom-2 left-1/2 grid w-full max-w-md -translate-x-1/2 grid-cols-3 border border-[#efd7df] bg-white/90 text-center shadow-xl">
                {[
                  { value: liveWebsites.length, label: 'Live' },
                  { value: comingSoonWebsites.length, label: 'Queued' },
                  { value: '10', label: 'Styles' },
                ].map((stat) => (
                  <div key={stat.label} className="border-r border-[#efd7df] p-4 last:border-r-0">
                    <p className="text-2xl font-black text-[#b76e79]">{stat.value}</p>
                    <p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#6b5a61]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="border-y border-[#efd7df] bg-white py-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {beautyServices.map((service) => (
              <span key={service} className="rounded-full border border-[#efd7df] bg-[#fff8fb] px-4 py-2 text-sm font-bold text-[#6b5a61]">
                {service}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="live-concepts" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b76e79]">Live concepts</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Four finished beauty homepages ready to explore.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#6b5a61]">
              These concepts are clickable and fully responsive, each with a different client mood: salon confidence,
              nail-studio luxury, spa quiet, and beauty-bar glam.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2">
            {liveWebsites.map((website, index) => (
              <Link
                key={website.id}
                to={`/beauty/${website.slug}`}
                className={`group reveal-card grid overflow-hidden border border-[#efd7df] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl lg:grid-cols-[0.92fr_1.08fr] ${
                  index % 2 === 1 ? 'delay-100' : ''
                }`}
              >
                <div
                  className="relative min-h-64"
                  style={{
                    backgroundImage: `linear-gradient(145deg, ${website.colors.secondary} 0%, ${website.colors.primary} 56%, ${website.colors.accent} 100%)`,
                  }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_26%_24%,rgba(255,255,255,0.62),transparent_25%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.28),transparent_30%)]" />
                  <div className="absolute bottom-5 left-5 flex gap-2">
                    {[website.colors.primary, website.colors.secondary, website.colors.accent, website.colors.dark].map((color) => (
                      <span key={color} className="h-7 w-7 rounded-full border border-white/80 shadow-sm" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
                <div className="p-7">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b76e79]">Live design</p>
                  <h3 className="mt-4 text-3xl font-black transition group-hover:text-[#b76e79]">{website.title}</h3>
                  <p className="mt-3 text-sm font-bold text-[#6b5a61]">{website.style}</p>
                  <p className="mt-5 text-base leading-7 text-[#6b5a61]">{website.shortDescription}</p>
                  <div className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-[#21191d] px-4 py-3 text-sm font-bold text-white transition group-hover:bg-[#b76e79]">
                    Open Homepage
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#efd7df] bg-[#fff0f6] py-20 md:py-28">
        <Container>
          <AnimatedSection className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b76e79]">Beauty UX direction</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Designed around confidence, calm, and booking intent.
              </h2>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {studioNotes.map((note) => (
                <article key={note.title} className="border border-white bg-white/80 p-6 shadow-sm">
                  <div className="mb-6 h-2 w-16 bg-[#b76e79]" />
                  <h3 className="text-2xl font-black">{note.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#6b5a61]">{note.text}</p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section id="coming-soon" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b76e79]">Roadmap</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Six beauty directions queued for expansion.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#6b5a61]">
              Coming-soon cards are intentionally softer and disabled, so users understand what is live without hitting dead routes.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {comingSoonWebsites.map((website) => (
              <article key={website.id} className="overflow-hidden border border-[#efd7df] bg-white/75 opacity-90 shadow-sm">
                <div
                  className="h-32"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${website.colors.secondary} 0%, ${website.colors.primary} 58%, ${website.colors.accent} 100%)`,
                  }}
                />
                <div className="p-6">
                  <div className="inline-flex rounded-full bg-[#fff0f6] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#b76e79]">
                    Coming soon
                  </div>
                  <h3 className="mt-5 text-2xl font-black">{website.title}</h3>
                  <p className="mt-3 text-sm font-bold text-[#6b5a61]">{website.style}</p>
                  <p className="mt-4 text-sm leading-6 text-[#6b5a61]">{website.shortDescription}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="border border-[#efd7df] bg-[#fff8fb] p-8 md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b76e79]">Design modes</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Beauty layouts need a different rhythm than restaurant pages.
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {designModes.map(([mode, examples]) => (
                  <div key={mode} className="border border-[#efd7df] bg-white p-5">
                    <p className="text-2xl font-black">{mode}</p>
                    <p className="mt-2 text-sm font-bold text-[#6b5a61]">{examples}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden bg-[#21191d] p-8 text-white shadow-2xl md:p-10">
              <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#ff3d9a]/25" />
              <div className="absolute -bottom-24 left-8 h-64 w-64 rounded-full bg-[#d7b56d]/20" />
              <div className="relative">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f5b6c8]">Start browsing</p>
                <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                  Begin with the live studios, then compare the queued service niches.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/70">
                  This page now works like a beauty lookbook: polished, calmer, and clearly separate from the restaurant collection.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <CTAButton href="#live-concepts" size="lg" className="bg-[#f5b6c8] text-[#21191d] hover:bg-white">
                    Back to Live Concepts
                  </CTAButton>
                  <CTAButton href="/beauty/glowhaus-salon" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                    Open GlowHaus
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
