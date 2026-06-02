import { Link } from 'react-router-dom'
import { Container, CTAButton } from '../../components'

const dishes = [
  { name: 'Tomato Fire Rigatoni', desc: 'House pasta, roasted tomato cream, basil oil', price: '$18' },
  { name: 'Street Corn Smash Burger', desc: 'Charred corn relish, pepper jack, brioche', price: '$17' },
  { name: 'Market Bowl', desc: 'Crisp greens, grains, avocado, citrus vinaigrette', price: '$15' },
]

export function UrbanBiteKitchen() {
  return (
    <main className="bg-[#f8f5ef] text-[#181818]">
      <nav className="fixed left-0 right-0 top-16 z-40 border-b border-white/10 bg-[#181818]/95 text-white backdrop-blur">
        <Container className="flex h-14 items-center justify-between">
          <Link to="/" className="text-sm font-black uppercase tracking-[0.24em]">UrbanBite</Link>
          <div className="hidden gap-6 text-sm font-semibold md:flex">
            <a href="#menu" className="hover:text-[#ef3b2d]">Dishes</a>
            <a href="#story" className="hover:text-[#ef3b2d]">Kitchen</a>
            <a href="#reviews" className="hover:text-[#ef3b2d]">Reviews</a>
          </div>
          <a href="#reserve" className="rounded-full bg-[#ef3b2d] px-4 py-2 text-sm font-bold text-white">Reserve</a>
        </Container>
      </nav>

      <section className="relative overflow-hidden bg-[#181818] pt-28 text-white md:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(239,59,45,0.2)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <Container className="relative grid items-center gap-12 pb-20 md:grid-cols-2 md:pb-28">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.28em] text-[#ef3b2d]">Modern casual restaurant</p>
            <h1 className="text-5xl font-black leading-none md:text-7xl">Fresh food with a city pulse.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-300">
              UrbanBite Kitchen serves bold plates, quick lunches, and late-night dinners in a room built for the city.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="#reserve" size="lg" className="bg-[#ef3b2d] hover:bg-[#d83227]">Book a Table</CTAButton>
              <CTAButton href="#menu" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">View Dishes</CTAButton>
            </div>
          </div>
          <div className="relative min-h-[420px]">
            <div className="absolute right-0 top-0 h-80 w-80 rounded-full bg-[#ef3b2d]" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-3xl bg-[#f8f5ef] p-6 shadow-2xl">
              <div className="h-full rounded-2xl bg-[radial-gradient(circle_at_30%_30%,#ef3b2d_0_12%,transparent_13%),radial-gradient(circle_at_70%_68%,#181818_0_18%,transparent_19%),linear-gradient(135deg,#f8f5ef,#d7d7d7)]" />
            </div>
            <div className="absolute right-6 top-16 w-52 rounded-2xl bg-white p-5 text-[#181818] shadow-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ef3b2d]">Tonight</p>
              <p className="mt-3 text-3xl font-black">Open kitchen. Fresh plates.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="rounded-3xl bg-[#181818] p-8 text-white">
            <p className="text-5xl font-black text-[#ef3b2d]">8 min</p>
            <p className="mt-3 text-xl font-bold">average lunch pickup</p>
            <p className="mt-6 text-gray-300">Designed for the weekday rush and the weekend table.</p>
          </div>
          <div>
            <h2 className="text-4xl font-black md:text-5xl">Modern comfort food without the slow-down.</h2>
            <p className="mt-5 text-lg leading-8 text-gray-700">
              We bring market produce, flame-grilled proteins, and house sauces into a polished casual dining experience.
              The menu changes with the season, but the energy stays loud, fresh, and welcoming.
            </p>
          </div>
        </Container>
      </section>

      <section id="menu" className="bg-white py-20 md:py-28">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="font-bold uppercase tracking-[0.24em] text-[#ef3b2d]">Signature dishes</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">Built for repeat cravings.</h2>
            </div>
            <p className="max-w-md text-gray-600">Bright tomato, charred edges, crunchy greens, and sauces made daily.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {dishes.map((dish) => (
              <article key={dish.name} className="rounded-2xl border border-gray-200 bg-[#f8f5ef] p-6">
                <div className="mb-6 h-36 rounded-xl bg-gradient-to-br from-[#181818] via-[#ef3b2d] to-[#f8f5ef]" />
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black">{dish.name}</h3>
                  <span className="font-black text-[#ef3b2d]">{dish.price}</span>
                </div>
                <p className="mt-3 text-gray-600">{dish.desc}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-4">
            {['Fast lunch flow', 'Seasonal produce', 'Open-fire flavor', 'Late dinner vibe'].map((item) => (
              <div key={item} className="border-l-4 border-[#ef3b2d] bg-white p-6 shadow-sm">
                <h3 className="text-xl font-black">{item}</h3>
                <p className="mt-3 text-gray-600">A sharper dining detail for people who want fresh meals without fuss.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="story" className="bg-[#181818] py-20 text-white md:py-28">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div className="h-80 rounded-3xl bg-[linear-gradient(135deg,#ef3b2d_0_30%,#f8f5ef_30%_55%,#2b2b2b_55%)]" />
          <div>
            <p className="font-bold uppercase tracking-[0.24em] text-[#ef3b2d]">Kitchen story</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">A chef counter with street-market instincts.</h2>
            <p className="mt-5 text-lg leading-8 text-gray-300">
              Our cooks prep in small batches, finish dishes on the line, and keep the menu tight so every plate leaves hot,
              colorful, and balanced.
            </p>
          </div>
        </Container>
      </section>

      <section id="reviews" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {['Best casual dinner downtown.', 'The burger has no business being this good.', 'Fast, stylish, and full of flavor.'].map((quote, index) => (
              <blockquote key={quote} className="rounded-2xl bg-white p-8 shadow-sm">
                <p className="text-xl font-bold leading-8">"{quote}"</p>
                <footer className="mt-6 text-sm font-bold uppercase tracking-[0.18em] text-gray-500">Guest {index + 1}</footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section id="reserve" className="bg-[#ef3b2d] py-20 text-white">
        <Container className="text-center">
          <h2 className="text-4xl font-black md:text-5xl">Save your table for tonight.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">Dinner service starts at 5 PM with walk-ins held for the bar.</p>
          <CTAButton href="tel:555-0144" size="lg" className="mt-8 bg-white text-[#181818] hover:bg-gray-100">Call (555) 014-4040</CTAButton>
        </Container>
      </section>

      <section className="border-t border-gray-200 py-8">
        <Container>
          <Link to="/restaurant" className="font-bold text-[#ef3b2d] hover:text-[#181818]">
            Back to Restaurant Collection
          </Link>
        </Container>
      </section>

      <footer className="bg-[#181818] py-10 text-white">
        <Container className="flex flex-col justify-between gap-4 text-sm md:flex-row">
          <p className="font-black">UrbanBite Kitchen</p>
          <p className="text-gray-400">214 Market Ave, Downtown | Open daily 11 AM - 11 PM</p>
        </Container>
      </footer>
    </main>
  )
}
