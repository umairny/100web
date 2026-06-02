import { Link } from 'react-router-dom'
import { Container, WebsiteCard, CTAButton } from '../../components'
import { beautyWebsites } from '../../data/websites'

export function BeautyIndex() {
  const completedCount = beautyWebsites.filter((website) => website.status === 'completed' || website.status === 'live').length

  return (
    <main className="bg-white text-gray-950">
      <section className="relative overflow-hidden bg-[#fff0f6] py-16 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.92),rgba(255,255,255,0.48)),radial-gradient(circle_at_18%_20%,rgba(255,61,154,0.14),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(215,181,109,0.16),transparent_22%)]" />
        <Container>
          <div className="relative max-w-4xl">
            <Link to="/" className="text-sm font-bold text-pink-700 hover:text-pink-900">
              Back to Home
            </Link>
            <div className="mt-8 inline-flex rounded-full bg-pink-100 px-4 py-2 text-sm font-black text-pink-800">
              {completedCount} / {beautyWebsites.length} Completed
            </div>
            <p className="mt-8 text-sm font-black uppercase tracking-[0.24em] text-pink-700">Beauty collection</p>
            <h1 className="mt-4 text-4xl font-black leading-tight md:text-6xl">
              Beauty & Salon Website Collection
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
              This category includes salon, spa, nails, skincare, beauty bar, barber, bridal, hair,
              and wellness website concepts. Completed concepts link to full responsive homepage designs.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-pink-700">All concepts</p>
              <h2 className="mt-3 text-3xl font-black md:text-5xl">Four live beauty designs, six coming soon.</h2>
            </div>
            <CTAButton href="/#beauty" variant="outline">
              New Beauty Designs
            </CTAButton>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {beautyWebsites.map((website) => (
              <WebsiteCard key={website.id} website={website} />
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
