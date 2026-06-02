import { Link } from 'react-router-dom'
import { Container, WebsiteCard, CTAButton } from '../../components'
import { restaurantWebsites } from '../../data/websites'

export function RestaurantIndex() {
  const completedCount = restaurantWebsites.filter((website) => website.status === 'completed').length

  return (
    <main className="bg-white text-gray-950">
      <section className="relative overflow-hidden bg-[#f7f2e8] py-16 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.92),rgba(255,255,255,0.5)),radial-gradient(circle_at_15%_20%,rgba(239,59,45,0.14),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(47,143,70,0.14),transparent_22%),radial-gradient(circle_at_70%_84%,rgba(227,106,44,0.14),transparent_24%)]" />
        <Container>
          <div className="relative max-w-4xl">
            <Link to="/" className="text-sm font-bold text-coffee-700 hover:text-coffee-800">
              Back to Home
            </Link>
            <p className="mt-8 text-sm font-black uppercase tracking-[0.24em] text-coffee-700">Restaurant collection</p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Ten restaurant and cafe homepage concepts.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              Browse the dining-focused section of Umair 100 Website Designs. Completed concepts link to full responsive pages,
              while planned concepts remain visible as the roadmap for the category.
            </p>
            <div className="mt-8 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { value: restaurantWebsites.length, label: 'Restaurant concepts' },
                { value: completedCount, label: 'Completed designs' },
                { value: restaurantWebsites.length - completedCount, label: 'Coming soon' },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white bg-white/80 p-5 shadow-sm">
                  <p className="text-3xl font-black">{stat.value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-coffee-700">All concepts</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Completed and upcoming restaurant designs.</h2>
            </div>
            <CTAButton href="/#featured" variant="outline">
              Recently Completed
            </CTAButton>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {restaurantWebsites.map((website) => (
              <WebsiteCard key={website.id} website={website} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
