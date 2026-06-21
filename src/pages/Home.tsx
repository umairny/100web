import { Link } from 'react-router-dom'
import { useState, type ReactNode } from 'react'
import { AnimatedSection, Container, CTAButton } from '../components'
import { beautyWebsites, categories, fitnessWebsites, realEstateWebsites, restaurantWebsites } from '../data/websites'

const homeImages = {
  heroShowcase: {
    src: '/images/home/hero-showcase.png',
    alt: '100 website design showcase by Umair Ahmad',
    fallbackStyle:
      'bg-[radial-gradient(circle_at_20%_20%,rgba(139,111,82,0.25),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(239,59,45,0.2),transparent_24%),linear-gradient(135deg,#f7f2e8,#ffffff_48%,#111827)]',
  },
  restaurantCollection: {
    src: '/images/home/restaurant-collection-collage.png',
    alt: 'Restaurant website design collection preview collage',
    fallbackStyle:
      'bg-[radial-gradient(circle_at_18%_22%,rgba(239,59,45,0.22),transparent_24%),radial-gradient(circle_at_80%_78%,rgba(244,161,26,0.22),transparent_26%),linear-gradient(135deg,#fff7e8,#ffffff)]',
  },
  beautyCollection: {
    src: '/images/home/beauty-collection-collage.png',
    alt: 'Beauty and salon website design collection preview collage',
    fallbackStyle:
      'bg-[radial-gradient(circle_at_20%_24%,rgba(236,72,153,0.22),transparent_24%),radial-gradient(circle_at_78%_72%,rgba(215,181,109,0.2),transparent_24%),linear-gradient(135deg,#fff0f6,#ffffff)]',
  },
  componentSystem: {
    src: '/images/home/component-system.png',
    alt: 'Reusable website component system with cards, layouts, navigation, and CTA blocks',
    fallbackStyle:
      'bg-[radial-gradient(circle_at_22%_24%,rgba(139,111,82,0.2),transparent_24%),radial-gradient(circle_at_78%_72%,rgba(47,143,70,0.18),transparent_24%),linear-gradient(135deg,#111827,#374151)]',
  },
  categoriesOverview: {
    src: '/images/home/categories-overview.png',
    alt: 'Overview of website categories in the 100 website design project',
    fallbackStyle:
      'bg-[radial-gradient(circle_at_20%_22%,rgba(139,111,82,0.2),transparent_24%),radial-gradient(circle_at_80%_72%,rgba(14,165,233,0.16),transparent_24%),linear-gradient(135deg,#ffffff,#f7f2e8)]',
  },
  designProcess: {
    src: '/images/home/design-process.png',
    alt: 'Website design workflow from brand direction to client-ready responsive homepage',
    fallbackStyle:
      'bg-[radial-gradient(circle_at_22%_28%,rgba(244,161,26,0.24),transparent_24%),radial-gradient(circle_at_80%_70%,rgba(239,59,45,0.18),transparent_24%),linear-gradient(135deg,#f7f2e8,#ffffff)]',
  },
}

const processSteps = [
  {
    title: 'Choose a business mood',
    text: 'Each concept starts with audience, service type, palette, layout stance, and a conversion goal.',
  },
  {
    title: 'Build the real homepage',
    text: 'The pages include useful sections, local navigation, content hierarchy, CTAs, and responsive layout behavior.',
  },
  {
    title: 'Polish the collection',
    text: 'The index pages, hero systems, cards, spacing, and mobile states are tuned so the work feels portfolio-ready.',
  },
]

const plannedCategoryBlueprints = [
  {
    name: 'Medical',
    focus: 'Provider trust, services, patient pathways, appointment booking, insurance cues, and calm accessibility.',
    palette: ['#0f766e', '#ccfbf1', '#ef4444'],
    accent: 'bg-[#0f766e]',
  },
  {
    name: 'Construction',
    focus: 'Project proof, service areas, before-after sections, quote funnels, certifications, and rugged visuals.',
    palette: ['#3f3f46', '#fef3c7', '#d97706'],
    accent: 'bg-[#3f3f46]',
  },
  {
    name: 'Education',
    focus: 'Programs, outcomes, course paths, enrollment CTAs, faculty trust, and parent/student clarity.',
    palette: ['#3730a3', '#e0e7ff', '#22c55e'],
    accent: 'bg-[#3730a3]',
  },
  {
    name: 'E-commerce',
    focus: 'Product discovery, offer hierarchy, category browsing, social proof, cart-first CTAs, and promotions.',
    palette: ['#7c3aed', '#f3e8ff', '#ec4899'],
    accent: 'bg-[#7c3aed]',
  },
  {
    name: 'Portfolio',
    focus: 'Creator positioning, project cards, case studies, service packaging, testimonials, and contact flow.',
    palette: ['#111827', '#e5e7eb', '#38bdf8'],
    accent: 'bg-[#111827]',
  },
  {
    name: 'SaaS',
    focus: 'Product value, feature modules, pricing, integrations, customer proof, and trial conversion.',
    palette: ['#075985', '#e0f2fe', '#14b8a6'],
    accent: 'bg-[#075985]',
  },
]

function HomeImage({
  src,
  alt,
  fallbackStyle,
  className = '',
  children,
}: {
  src: string
  alt: string
  fallbackStyle: string
  className?: string
  children?: ReactNode
}) {
  const [isLoaded, setIsLoaded] = useState(true)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={`absolute inset-0 ${fallbackStyle}`} />
      {isLoaded && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setIsLoaded(false)}
        />
      )}
      {children}
    </div>
  )
}

export function Home() {
  const liveRestaurants = restaurantWebsites.filter((website) => website.status === 'completed' || website.status === 'live')
  const liveBeauty = beautyWebsites.filter((website) => website.status === 'completed' || website.status === 'live')
  const liveRealEstate = realEstateWebsites.filter((website) => website.status === 'completed' || website.status === 'live')
  const liveFitness = fitnessWebsites.filter((website) => website.status === 'completed' || website.status === 'live')
  const completedDesignCount = liveRestaurants.length + liveBeauty.length + liveRealEstate.length + liveFitness.length
  const plannedCount = 100
  const remainingCount = plannedCount - completedDesignCount
  const liveCollections = [
    {
      title: 'Restaurant Collection',
      text: 'Ten complete dining concepts with different hero systems, palettes, and menu-driven sections.',
      href: '/restaurant',
      image: homeImages.restaurantCollection,
      count: liveRestaurants.length,
      tone: 'text-[#9a5b25]',
      button: 'View restaurants',
    },
    {
      title: 'Beauty Collection',
      text: 'Four live beauty concepts plus a roadmap for salons, spas, nails, bridal, skin, and wellness.',
      href: '/beauty',
      image: homeImages.beautyCollection,
      count: liveBeauty.length,
      tone: 'text-[#b76e79]',
      button: 'View beauty',
    },
    {
      title: 'Real Estate Collection',
      text: 'Premium property pages focused on listings, neighborhood trust, agent credibility, and lead capture.',
      href: '/real-estate',
      image: homeImages.categoriesOverview,
      count: liveRealEstate.length,
      tone: 'text-[#153e75]',
      button: 'View real estate',
    },
    {
      title: 'Fitness Collection',
      text: 'High-energy gym and coaching pages focused on programs, schedules, proof, and trial signups.',
      href: '/fitness',
      image: homeImages.componentSystem,
      count: liveFitness.length,
      tone: 'text-[#14532d]',
      button: 'View fitness',
    },
  ]
  const categoryProgress = categories.map((category) => {
    const liveCount =
      category.name === 'Restaurant'
        ? liveRestaurants.length
        : category.name === 'Beauty'
          ? liveBeauty.length
          : category.name === 'Real Estate'
            ? liveRealEstate.length
            : category.name === 'Fitness'
              ? liveFitness.length
              : 0

    return { ...category, liveCount }
  })

  return (
    <main className="bg-[#f6f1e8] text-[#17211d]">
      <section className="relative -mt-16 overflow-hidden bg-[#10201c] pb-20 pt-24 text-white md:pb-28 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(30,139,121,0.38),transparent_25%),radial-gradient(circle_at_84%_18%,rgba(238,118,92,0.32),transparent_22%),radial-gradient(circle_at_70%_88%,rgba(229,177,90,0.22),transparent_26%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_52px)]" />
        <Container>
          <div className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <AnimatedSection animation="slide-left">
              <div className="inline-flex border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#f0c76a]">
                Umair 100 Website Designs
              </div>
              <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                A portfolio system for real business homepage concepts.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                A growing library of complete React, TypeScript, and Tailwind homepage designs, built category by
                category with distinct brand direction instead of repeated templates.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#live-work" size="lg" className="bg-[#f0c76a] text-[#10201c] hover:bg-white">
                  Explore Live Work
                </CTAButton>
                <CTAButton href="#planned-categories" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  View Roadmap
                </CTAButton>
              </div>
              <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {[
                  { value: categories.length, label: 'Categories' },
                  { value: plannedCount, label: 'Planned concepts' },
                  { value: completedDesignCount, label: 'Live designs' },
                ].map((stat) => (
                  <div key={stat.label} className="border border-white/12 bg-white/8 p-5">
                    <p className="text-3xl font-black text-[#f0c76a]">{stat.value}</p>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-white/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay="delay-200">
              <div className="relative">
                <div className="absolute -left-5 top-10 h-32 w-32 rounded-full bg-[#f0c76a]/20 blur-2xl" />
                <div className="absolute -right-6 bottom-12 h-40 w-40 rounded-full bg-[#ee765c]/25 blur-2xl" />
                <div className="relative border border-white/12 bg-white/8 p-3 shadow-2xl shadow-black/30">
                  <HomeImage
                    src={homeImages.heroShowcase.src}
                    alt={homeImages.heroShowcase.alt}
                    fallbackStyle={homeImages.heroShowcase.fallbackStyle}
                    className="min-h-[380px] md:min-h-[540px]"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(0,0,0,0.76))]" />
                    <div className="absolute left-5 top-5 bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#161616] shadow-lg">
                      Portfolio preview
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 bg-white/92 p-5 text-[#17211d] shadow-xl backdrop-blur">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#1e8b79]">
                        {completedDesignCount} live homepages
                      </p>
                      <h2 className="mt-2 text-2xl font-black">
                        Restaurant, beauty, real estate, and fitness collections are live, with {remainingCount} concepts still planned.
                      </h2>
                    </div>
                  </HomeImage>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#ddd2c0] bg-[#fffaf1] py-8">
        <Container>
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS', 'Responsive', 'Business homepages', 'Portfolio-ready'].map((item) => (
                <span key={item} className="rounded-full border border-[#ddd2c0] bg-white px-4 py-2 text-sm font-bold text-[#5f6963]">
                  {item}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 overflow-hidden border border-[#ddd2c0] bg-white text-center">
              <div className="border-r border-[#ddd2c0] px-5 py-3">
                <p className="text-2xl font-black">{completedDesignCount}</p>
                <p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#5f6963]">Complete</p>
              </div>
              <div className="px-5 py-3">
                <p className="text-2xl font-black">{remainingCount}</p>
                <p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#5f6963]">Remaining</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="live-work" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1e8b79]">Live collections</p>
                <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Four category hubs with full-page concepts inside.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#5f6963]">
              The homepage now leads with what is actually useful: direct paths into complete collections,
              visible progress, and a clear explanation of how the system grows.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {liveCollections.map((collection) => (
              <Link key={collection.title} to={collection.href} className="group overflow-hidden bg-white shadow-xl shadow-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <HomeImage
                  src={collection.image.src}
                  alt={collection.image.alt}
                  fallbackStyle={collection.image.fallbackStyle}
                  className="min-h-[330px]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.72))]" />
                  <div className="absolute left-5 top-5 bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#161616]">
                    {collection.count} live
                  </div>
                </HomeImage>
                <div className="p-8">
                  <p className={`text-sm font-black uppercase tracking-[0.22em] ${collection.tone}`}>Collection hub</p>
                  <h3 className="mt-3 text-4xl font-black">{collection.title}</h3>
                  <p className="mt-4 text-base leading-7 text-[#5f6963]">{collection.text}</p>
                  <div className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-[#10201c] px-5 py-3 text-sm font-bold text-white transition group-hover:bg-[#1e8b79]">
                    {collection.button}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#ddd2c0] bg-[#fffaf1] py-20 md:py-28">
        <Container>
          <AnimatedSection className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1e8b79]">Portfolio structure</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                The project is organized like a product, not a pile of pages.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5f6963]">
                Each category gets its own index, each business gets a full homepage, and each completed page is designed
                to feel like a different real-world brand.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <article key={step.title} className="border border-[#ddd2c0] bg-white p-6 shadow-sm">
                  <p className="text-5xl font-black text-[#ee765c]">0{index + 1}</p>
                  <h3 className="mt-6 text-2xl font-black">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#5f6963]">{step.text}</p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section id="featured" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1e8b79]">Featured work</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                Restaurant, beauty, real estate, and fitness concepts are ready to review.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#5f6963]">
              A tighter preview of the live work, with links into each live collection page for the full set.
            </p>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[...liveRestaurants.slice(0, 1), ...liveBeauty.slice(0, 1), ...liveRealEstate.slice(0, 1), ...liveFitness.slice(0, 1)].map((website, index) => (
              <Link
                key={website.id}
                to={`/${website.category.toLowerCase().replace(/\s+/g, '-')}/${website.slug}`}
                className={`group reveal-card overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : index === 3 ? 'delay-300' : ''
                }`}
              >
                <div
                  className="relative h-44"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${website.colors.secondary} 0%, ${website.colors.primary} 55%, ${website.colors.accent} 100%)`,
                  }}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_24%_24%,rgba(255,255,255,0.58),transparent_25%),radial-gradient(circle_at_78%_76%,rgba(255,255,255,0.26),transparent_28%)]" />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {[website.colors.primary, website.colors.secondary, website.colors.accent].map((color) => (
                      <span key={color} className="h-6 w-6 rounded-full border border-white/75" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1e8b79]">{website.category}</p>
                  <h3 className="mt-3 text-2xl font-black transition group-hover:text-[#1e8b79]">{website.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#5f6963]">{website.shortDescription}</p>
                  <div className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#10201c] px-4 py-3 text-sm font-bold text-white transition group-hover:bg-[#1e8b79]">
                    Open design
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="categories" className="border-y border-[#ddd2c0] bg-[#f6f1e8] py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1e8b79]">The full plan</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Ten categories, one hundred practical homepage concepts.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#5f6963]">
              Restaurants and beauty are underway. The remaining categories stay visible as the roadmap, so the project
              feels intentional even before every page is live.
            </p>
          </AnimatedSection>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {categoryProgress.map((category) => (
              <Link
                key={category.name}
                to={category.href || '#categories'}
                className={`group min-h-56 overflow-hidden bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  category.href ? '' : 'pointer-events-none opacity-75'
                }`}
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-3xl font-black">{category.name}</p>
                    <p className="mt-3 text-sm leading-6 text-[#5f6963]">{category.description}</p>
                  </div>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <div className="mt-8 flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-black text-[#ee765c]">{category.liveCount}</p>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#5f6963]">Live</p>
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#5f6963]">
                    {category.href ? 'Open' : 'Planned'}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="planned-categories" className="bg-[#fffaf1] py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ee765c]">Category studios</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Dummy sections for the next six business categories.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#5f6963]">
              These blocks reserve the strategy for upcoming pages: what each category needs, what users expect, and
              how the visual direction can start before the full homepage exists.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {plannedCategoryBlueprints.map((category, index) => (
              <article
                key={category.name}
                className={`reveal-card border border-[#ddd2c0] bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  index % 4 === 1 ? 'delay-100' : index % 4 === 2 ? 'delay-200' : index % 4 === 3 ? 'delay-300' : ''
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#5f6963]">Coming batch</p>
                    <h3 className="mt-3 text-3xl font-black">{category.name}</h3>
                  </div>
                  <span className={`h-12 w-12 ${category.accent}`} />
                </div>
                <p className="mt-5 min-h-28 text-sm leading-7 text-[#5f6963]">{category.focus}</p>
                <div className="mt-6 flex gap-2">
                  {category.palette.map((color) => (
                    <span
                      key={color}
                      className="h-9 flex-1 border border-black/10"
                      style={{ backgroundColor: color }}
                      aria-label={`${category.name} palette color ${color}`}
                    />
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-between border-t border-[#eee4d4] pt-4">
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#ee765c]">0/10 live</p>
                  <a href="#categories" className="text-xs font-black uppercase tracking-[0.16em] text-[#17211d]">
                    Roadmap
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="about-project" className="bg-[#10201c] py-20 text-white md:py-28">
        <Container>
          <AnimatedSection className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0c76a]">Why this works</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Complete page systems make the portfolio easier to judge.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                Instead of isolated hero shots, each concept has sections, navigation, CTA behavior, responsive structure,
                and enough detail to understand the business direction.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                'Distinct category indexes',
                'Full responsive homepages',
                'Brand-specific color systems',
                'Reusable React components',
              ].map((item) => (
                <article key={item} className="border border-white/10 bg-white/5 p-6">
                  <div className="mb-8 h-2 w-16 bg-[#f0c76a]" />
                  <h3 className="text-2xl font-black">{item}</h3>
                  <p className="mt-3 leading-7 text-white/55">Built for scanning, extending, and presenting.</p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="border border-[#e5dccd] bg-[#f8f4ec] p-8 md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#9a5b25]">Design system</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Shared components, different personalities.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#6a6258]">
                Cards, nav, CTA buttons, image fallbacks, motion classes, and layout shells are reused, while each business
                gets its own visual stance.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {['Hero systems', 'Collection cards', 'Responsive spacing', 'CTA patterns'].map((item) => (
                  <div key={item} className="border border-[#e5dccd] bg-white p-5">
                    <p className="font-black">{item}</p>
                    <p className="mt-2 text-sm leading-6 text-[#6a6258]">Shared base, tuned per brand.</p>
                  </div>
                ))}
              </div>
            </div>
            <HomeImage
              src={homeImages.componentSystem.src}
              alt={homeImages.componentSystem.alt}
              fallbackStyle={homeImages.componentSystem.fallbackStyle}
              className="min-h-[430px] shadow-2xl shadow-black/10"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.68))]" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/92 p-5 text-[#161616] shadow-xl">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9a5b25]">Component library</p>
                <p className="mt-2 text-2xl font-black">One system, many business moods.</p>
              </div>
            </HomeImage>
          </AnimatedSection>
        </Container>
      </section>

      <section id="roadmap" className="bg-[#f8f4ec] py-20 md:py-28">
        <Container>
          <AnimatedSection className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <HomeImage
              src={homeImages.designProcess.src}
              alt={homeImages.designProcess.alt}
              fallbackStyle={homeImages.designProcess.fallbackStyle}
              className="min-h-[420px] shadow-2xl shadow-black/10"
            />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#9a5b25]">Build roadmap</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Keep expanding in focused, reviewable batches.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#6a6258]">
                The next best work is continuing category by category, keeping every index page and individual homepage
                coherent as the project grows.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  ['Live now', 'Restaurant, beauty, real estate, and fitness categories'],
                  ['Next focus', 'Medical, construction, education, commerce'],
                  ['Long-term goal', '100 polished homepage concepts'],
                ].map(([label, text]) => (
                  <div key={label} className="border border-[#e5dccd] bg-white p-5">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9a5b25]">{label}</p>
                    <p className="mt-2 text-xl font-black">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <AnimatedSection animation="scale-in" className="overflow-hidden bg-[#161616] text-white shadow-2xl">
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_0.82fr] md:p-12 lg:p-16">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f4c76d]">Next step</p>
                <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                  Review the live collections, then keep building the next category.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  The homepage now acts as a cleaner command center for the full portfolio: what is live, why it matters,
                  and where the project is going.
                </p>
              </div>
              <div className="bg-white p-6 text-[#161616]">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6a6258]">Quick links</p>
                <div className="mt-6 grid gap-3">
                  <Link to="/restaurant" className="bg-[#f8f4ec] p-4 font-black transition hover:bg-[#f4c76d]">
                    Restaurant Collection
                  </Link>
                  <Link to="/beauty" className="bg-[#fff0f6] p-4 font-black transition hover:bg-[#f5b6c8]">
                    Beauty Collection
                  </Link>
                  <a href="#categories" className="bg-gray-100 p-4 font-black transition hover:bg-gray-200">
                    Category Roadmap
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  )
}
