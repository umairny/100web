import { Link } from 'react-router-dom'
import { Container, CategoryCard, WebsiteCard, CTAButton } from '../components'
import { categories, restaurantWebsites } from '../data/websites'

const roadmapSteps = [
  {
    label: 'Current focus',
    title: 'Restaurant collection',
    text: 'Seven complete dining concepts are live, each with a different brand voice and visual system.',
  },
  {
    label: 'Next batch',
    title: 'Complete the final restaurants',
    text: 'MorningLeaf Tea, BurgerCraft, and OceanPlate Seafood are queued to finish the first category.',
  },
  {
    label: 'Portfolio expansion',
    title: 'Move across industries',
    text: 'Beauty, real estate, fitness, medical, education, commerce, portfolio, and SaaS concepts come after.',
  },
]

export function Home() {
  const completedWebsites = restaurantWebsites.filter((website) => website.status === 'completed')
  const plannedWebsites = restaurantWebsites.filter((website) => website.status !== 'completed')
  const recentlyCompletedWebsites = completedWebsites.slice(0, 7)
  const featuredWebsites = [...completedWebsites, ...plannedWebsites].slice(0, 6)

  return (
    <main className="bg-white text-gray-950">
      <section className="relative overflow-hidden bg-[#f7f2e8] py-16 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.9),rgba(255,255,255,0.42)),radial-gradient(circle_at_12%_18%,rgba(139,111,82,0.18),transparent_26%),radial-gradient(circle_at_86%_20%,rgba(239,59,45,0.12),transparent_24%),radial-gradient(circle_at_70%_86%,rgba(244,161,26,0.14),transparent_26%)]" />
        <Container>
          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <div className="mb-6 inline-flex rounded-full border border-coffee-200 bg-white/75 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-coffee-700 shadow-sm">
                Umair 100 Website Designs
              </div>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal text-gray-950 md:text-6xl">
                A practical design portfolio for 100 real business homepages.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
                A growing collection of polished Vite, React, TypeScript, and Tailwind CSS homepage concepts,
                built category by category instead of as empty placeholders.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton size="lg" href="#featured">
                  View Live Designs
                </CTAButton>
                <CTAButton variant="outline" size="lg" href="#roadmap">
                  See Roadmap
                </CTAButton>
              </div>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                {[
                  { value: categories.length, label: 'Categories' },
                  { value: 100, label: 'Planned concepts' },
                  { value: completedWebsites.length, label: 'Restaurant designs completed' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white bg-white/70 p-4 shadow-sm">
                    <p className="text-3xl font-black text-gray-950">{stat.value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {completedWebsites.map((website, index) => (
                <Link
                  key={website.id}
                  to={`/restaurant/${website.slug}`}
                  className={`group rounded-3xl border border-white bg-white p-4 shadow-xl transition hover:-translate-y-1 hover:shadow-2xl ${
                    index === 0 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div
                    className={`${index === 0 ? 'h-44' : 'h-32'} rounded-2xl transition group-hover:scale-[1.02]`}
                    style={{
                      backgroundImage: `linear-gradient(135deg, ${website.colors.primary}, ${website.colors.accent})`,
                    }}
                  />
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-emerald-700">Live design</p>
                      <h2 className="mt-1 text-xl font-black text-gray-950">{website.title}</h2>
                    </div>
                    <span className="rounded-full bg-gray-950 px-3 py-1 text-xs font-bold text-white">View</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="featured" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-coffee-700">Recently Completed Designs</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                Seven restaurant websites ready to view.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-gray-600">
              BrewNest, UrbanBite, Golden Crust, SpiceRoute, Luna, FreshBowl, and Ember now have complete responsive homepages.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentlyCompletedWebsites.map((website) => (
              <WebsiteCard key={website.id} website={website} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/restaurant" variant="secondary" size="lg">
              View Restaurant Collection
            </CTAButton>
          </div>
        </Container>
      </section>

      <section id="about-project" className="bg-gray-950 py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-coffee-300">Why this works</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Not a gallery of thumbnails. A library of complete homepage directions.
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-300">
                Every completed concept includes real sections, responsive layouts, custom color direction,
                and enough detail to show how a business could actually use the design.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                'Responsive React pages',
                'Tailwind-only styling',
                'Distinct brand systems',
                'No external image dependency',
              ].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                  <div className="mb-8 h-2 w-16 rounded-full bg-coffee-300" />
                  <h3 className="text-2xl font-black">{item}</h3>
                  <p className="mt-3 leading-7 text-gray-400">Built to be easy to scan, extend, and present.</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="categories" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-coffee-700">The full plan</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Ten categories, one hundred concepts.</h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              The project is structured as a broad website design portfolio, with restaurants leading the first set.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {categories.map((category) => (
              <CategoryCard key={category.name} category={category} />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-gray-50 py-20 md:py-28">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-coffee-700">Restaurant roadmap</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                All ten dining concepts in one place.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-gray-600">
              The first seven are live. The remaining three stay visible as coming-soon cards.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredWebsites.map((website) => (
              <WebsiteCard key={website.id} website={website} />
            ))}
          </div>
        </Container>
      </section>

      <section id="roadmap" className="bg-[#f7f2e8] py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-coffee-700">Build roadmap</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">The portfolio grows in focused batches.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {roadmapSteps.map((step, index) => (
              <article key={step.title} className="rounded-3xl border border-white bg-white/80 p-8 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-coffee-700">{step.label}</p>
                <p className="mt-8 text-5xl font-black text-gray-950">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-black">{step.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{step.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="overflow-hidden rounded-[2rem] bg-gray-950 text-white shadow-2xl">
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_0.8fr] md:p-12 lg:p-16">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-coffee-300">Next step</p>
                <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight md:text-5xl">
                  Keep building the restaurant collection.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
                  The strongest next move is to finish the remaining restaurant concepts and then start the next category.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 text-gray-950">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-gray-500">Queued concepts</p>
                <div className="mt-6 space-y-4">
                  {plannedWebsites.slice(0, 3).map((website) => (
                    <div key={website.id} className="flex items-center gap-4 rounded-2xl bg-gray-100 p-4">
                      <span
                        className="h-12 w-12 rounded-xl"
                        style={{
                          backgroundImage: `linear-gradient(135deg, ${website.colors.primary}, ${website.colors.accent})`,
                        }}
                      />
                      <div>
                        <p className="font-black">{website.title}</p>
                        <p className="text-sm text-gray-500">{website.style}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <CTAButton href="#featured" size="lg" className="mt-6 w-full bg-gray-950 hover:bg-coffee-700">
                  Review Current Designs
                </CTAButton>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
