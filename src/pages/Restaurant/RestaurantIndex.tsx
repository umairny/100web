import { Link } from 'react-router-dom'
import { AnimatedSection, Container, CTAButton } from '../../components'
import { restaurantWebsites } from '../../data/websites'

export function RestaurantIndex() {
  const completedCount = restaurantWebsites.filter((website) => website.status === 'completed').length
  const featuredRestaurants = restaurantWebsites.slice(0, 4)
  const diningStyles = ['Coffee', 'Bakery', 'Pizza', 'Bowls', 'Steak', 'Tea', 'Burgers', 'Seafood']
  const experienceNotes = [
    {
      title: 'Distinct First Screens',
      text: 'Each restaurant opens with a different layout language: centered ritual, right-aligned editorial, dark reservation room, tide table, orbiting pizza, and more.',
    },
    {
      title: 'Brand-Led Palettes',
      text: 'The cards and pages use each concept palette consistently, making the collection easier to scan and more memorable.',
    },
    {
      title: 'Conversion Ready',
      text: 'Every design keeps restaurant actions close: reserve, order, visit, browse menu, or build a custom meal.',
    },
  ]
  const layoutStyles = [
    ['Center', 'Tea, seafood'],
    ['Right align', 'Fresh bowls'],
    ['Editorial', 'Coffee, bakery'],
    ['High contrast', 'Steakhouse, burgers'],
  ]

  return (
    <main className="bg-[#fffaf1] text-[#171512]">
      <section className="relative -mt-16 overflow-hidden bg-[#171512] py-16 text-white md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(239,59,45,0.28),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(47,143,70,0.2),transparent_22%),radial-gradient(circle_at_70%_84%,rgba(227,106,44,0.22),transparent_24%)]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_52px)]" />
        <Container>
          <AnimatedSection className="relative grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end xl:gap-24">
            <div>
              <Link to="/" className="text-sm mr-4 font-bold text-[#f4c76d] transition hover:text-white">
                Back to Home
              </Link>
              <div className="mt-8 inline-flex border rounded-full border-white/15 bg-white/10 px-4 py-2 text-sm font-black uppercase tracking-[0.16em] text-[#f4c76d]">
                {completedCount} / {restaurantWebsites.length} concepts live
              </div>
              <p className="mt-8 text-sm font-black uppercase tracking-[0.24em] text-[#f4c76d]">Restaurant collection</p>
              <h1 className="mt-4 max-w-4xl text-5xl font-black leading-[0.95] md:text-7xl">
                A tasting menu of restaurant web experiences.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                Ten responsive homepage concepts across coffee, bakery, grill, pizza, healthy bowls,
                steakhouse, tea, burgers, and seafood. Each one explores a different brand mood and layout system.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#concepts" size="lg" className="bg-[#f4c76d] text-[#171512] hover:bg-white">
                  Browse Concepts
                </CTAButton>
                <CTAButton href="/#featured" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  Recently Completed
                </CTAButton>
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:pl-6 xl:pl-10">
              {featuredRestaurants.map((website, index) => (
                <Link
                  key={website.id}
                  to={`/restaurant/${website.slug}`}
                  className={`group relative min-h-48 overflow-hidden border border-white/12 bg-white/8 p-5 shadow-2xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:bg-white/12 ${
                    index % 2 === 1 ? 'lg:translate-y-10' : ''
                  }`}
                >
                  <div
                    className="absolute inset-x-0 top-0 h-2"
                    style={{ backgroundColor: website.colors.accent }}
                  />
                  {website.image && (
                    <img
                      src={website.image}
                      alt={`${website.title} website preview`}
                      className="absolute inset-0 h-full w-full object-cover opacity-35 transition duration-500 group-hover:scale-105 group-hover:opacity-45"
                      loading="lazy"
                    />
                  )}
                  <div
                    className="absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-35 transition duration-300 group-hover:scale-110"
                    style={{ backgroundColor: website.colors.primary }}
                  />
                  <p className="relative text-xs font-black uppercase tracking-[0.18em] text-white/55">
                    Concept 0{index + 1}
                  </p>
                  <h2 className="relative mt-8 text-2xl font-black text-white">{website.title}</h2>
                  <p className="relative mt-3 text-sm leading-6 text-white/65">{website.shortDescription}</p>
                  <div className="relative mt-5 flex gap-2">
                    {[website.colors.primary, website.colors.secondary, website.colors.accent].map((color) => (
                      <span key={color} className="h-5 w-5 rounded-full border border-white/40" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="border-b border-[#eadfc8] bg-[#fffaf1] py-10">
        <Container>
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex flex-wrap gap-2">
              {diningStyles.map((style) => (
                <span key={style} className="rounded-full border border-[#e0d1b4] bg-white px-4 py-2 text-sm font-bold text-[#5f5242]">
                  {style}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-3 overflow-hidden border border-[#e0d1b4] bg-white text-center">
              {[
                { value: restaurantWebsites.length, label: 'Concepts' },
                { value: completedCount, label: 'Live' },
                { value: restaurantWebsites.length - completedCount, label: 'Queued' },
              ].map((stat) => (
                <div key={stat.label} className="border-r border-[#e0d1b4] px-5 py-3 last:border-r-0">
                  <p className="text-2xl font-black">{stat.value}</p>
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#7b6d5b]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="concepts" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#9a5b25]">All concepts</p>
              <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight md:text-5xl">
                Pick a restaurant mood and open the full homepage.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#6d6254]">
              Each card uses the actual brand palette so the page works like a quick visual menu for the collection.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {restaurantWebsites.map((website, index) => (
              <Link
                key={website.id}
                to={`/restaurant/${website.slug}`}
                className={`group reveal-card overflow-hidden border border-[#eadfc8] bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  index % 3 === 1 ? 'delay-100' : index % 3 === 2 ? 'delay-200' : ''
                }`}
              >
                <div
                  className="relative h-44 overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${website.colors.secondary} 0%, ${website.colors.primary} 52%, ${website.colors.accent} 100%)`,
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
                  <div className={`absolute inset-0 ${website.image ? 'bg-gradient-to-t from-[#171512]/70 via-[#171512]/10 to-transparent' : 'bg-[radial-gradient(circle_at_22%_24%,rgba(255,255,255,0.55),transparent_22%),radial-gradient(circle_at_76%_70%,rgba(255,255,255,0.25),transparent_26%)]'}`} />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#171512] shadow-sm">
                    {website.status === 'completed' ? 'Live' : 'Queued'}
                  </div>
                  <div className="absolute bottom-5 left-5 flex gap-2">
                    {[website.colors.primary, website.colors.secondary, website.colors.accent, website.colors.dark].map((color) => (
                      <span key={color} className="h-6 w-6 rounded-full border border-white/75 shadow-sm" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#9a5b25]">{website.category}</p>
                  <div className="mt-3 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black text-[#171512] transition group-hover:text-[#9a5b25]">
                      {website.title}
                    </h3>
                    <span className="text-xl font-black text-[#9a5b25]">0{index + 1}</span>
                  </div>
                  <p className="mt-3 text-sm font-bold text-[#6d6254]">{website.style}</p>
                  <p className="mt-4 min-h-12 text-sm leading-6 text-[#6d6254]">{website.shortDescription}</p>
                  <div className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#171512] px-4 py-3 text-sm font-bold text-white transition group-hover:bg-[#9a5b25]">
                    View Design
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#eadfc8] bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#9a5b25]">Collection UX</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Built to compare concepts quickly without making them feel the same.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#6d6254]">
                The page works as a tasting flight: fast visual scanning, clear brand contrast, and direct paths into
                the full restaurant homepages.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {experienceNotes.map((note) => (
                <article key={note.title} className="border border-[#eadfc8] bg-[#fffaf1] p-6 shadow-sm">
                  <div className="mb-6 h-2 w-16 bg-[#9a5b25]" />
                  <h3 className="text-2xl font-black">{note.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#6d6254]">{note.text}</p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-[#fffaf1] py-20 md:py-28">
        <Container>
          <AnimatedSection className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="border border-[#eadfc8] bg-white p-8 shadow-sm md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#9a5b25]">Layout map</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                A restaurant collection with more than one visual recipe.
              </h2>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {layoutStyles.map(([layout, examples]) => (
                  <div key={layout} className="border border-[#eadfc8] bg-[#fffaf1] p-5">
                    <p className="text-2xl font-black">{layout}</p>
                    <p className="mt-2 text-sm font-bold text-[#6d6254]">{examples}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative overflow-hidden bg-[#171512] p-8 text-white shadow-2xl md:p-10">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#e36a2c]/30" />
              <div className="absolute -bottom-24 left-8 h-64 w-64 rounded-full bg-[#2f8f46]/25" />
              <div className="relative">
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f4c76d]">Next step</p>
                <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">
                  Open a concept, compare the hero, then scan the full page flow.
                </h2>
                <p className="mt-5 text-lg leading-8 text-white/70">
                  The strongest restaurant pages now use different structures, so this hub helps you judge the whole set
                  as a portfolio instead of a repeated template.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <CTAButton href="#concepts" size="lg" className="bg-[#f4c76d] text-[#171512] hover:bg-white">
                    Return to Concepts
                  </CTAButton>
                  <CTAButton href="/restaurant/brewnest-coffee" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                    Start with BrewNest
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
