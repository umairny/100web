import { Link } from 'react-router-dom'
import { Container, CTAButton, RestaurantSubNav } from '../../components'

const catches = [
  { name: 'Citrus Seared Scallops', detail: 'Aqua herb oil, lemon cream, shaved fennel' },
  { name: 'Harbor Grill Salmon', detail: 'Charred asparagus, sand potatoes, coral glaze' },
  { name: 'Cold Tide Platter', detail: 'Oysters, shrimp, crab salad, mignonette' },
]

export function OceanPlateSeafood() {
  return (
    <main className="brand-motion motion-oceanplate bg-white text-[#063047]">
      <RestaurantSubNav
        brand="OceanPlate Seafood"
        links={[
          { label: 'Fresh Catch', href: '#catch' },
          { label: 'Experience', href: '#experience' },
          { label: 'Specials', href: '#specials' },
        ]}
        ctaLabel="Reserve"
        ctaHref="#reserve"
        className="border-b border-[#d7e8e8] bg-white/95"
        brandClassName="text-[#075985]"
        linkClassName="text-[#063047] transition hover:bg-[#e9f8fa] hover:text-[#39b6c8]"
        ctaClassName="bg-[#075985] text-white hover:bg-[#063047]"
        menuButtonClassName="border-[#d7e8e8] text-[#075985] hover:bg-[#e9f8fa]"
        mobilePanelClassName="border border-[#d7e8e8] bg-white"
      />

      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_24%,rgba(57,182,200,0.2),transparent_24%),radial-gradient(circle_at_86%_18%,rgba(244,234,213,0.9),transparent_28%)]" />
        <Container className="relative grid items-center gap-12 pb-20 md:grid-cols-[1fr_0.95fr] md:pb-28">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#39b6c8]">Fresh coastal seafood</p>
            <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">OceanPlate Seafood serves the coast with polish.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#496371]">
              Fresh catch, relaxed dining, premium plates, and a clean coastal room built for lunch, dinner, and sunset reservations.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="#reserve" size="lg" className="bg-[#075985] hover:bg-[#063047]">Reserve or Order</CTAButton>
              <CTAButton href="#catch" variant="outline" size="lg" className="border-[#39b6c8] text-[#075985] hover:bg-[#e9f8fa]">View Fresh Catch</CTAButton>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="aspect-[4/5] overflow-hidden rounded-[3rem] bg-[#f4ead5] p-8 shadow-2xl">
              <div className="h-full rounded-[2.5rem] bg-[linear-gradient(180deg,#075985,#39b6c8_42%,#f4ead5_43%)]">
                <div className="h-full bg-[radial-gradient(circle_at_30%_34%,rgba(255,255,255,0.65),transparent_12%),radial-gradient(circle_at_68%_54%,rgba(255,127,98,0.55),transparent_10%)]" />
              </div>
            </div>
            <div className="absolute -bottom-6 left-8 right-8 rounded-3xl bg-white p-5 shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#39b6c8]">Today's landing</p>
              <p className="mt-1 text-2xl font-black">Oysters, scallops, salmon.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="bg-[#f7fbfb] py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#39b6c8]">About OceanPlate</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Clean coastal dining with seafood treated simply.</h2>
          </div>
          <p className="text-lg leading-8 text-[#496371]">
            OceanPlate focuses on sourcing, timing, and restraint: fresh seafood, bright sauces, crisp sides,
            and a dining room that feels relaxed without losing polish.
          </p>
        </Container>
      </section>

      <section id="catch" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="font-black uppercase tracking-[0.24em] text-[#39b6c8]">Fresh catch menu</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Premium plates from the water to the table.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {catches.map((item) => (
              <article key={item.name} className="rounded-[2rem] border border-[#d7e8e8] bg-white p-6 shadow-sm">
                <div className="mb-6 aspect-[4/3] rounded-[1.5rem] bg-[linear-gradient(135deg,#075985,#39b6c8_48%,#f4ead5_49%),radial-gradient(circle_at_70%_30%,#ff7f62,transparent_18%)]" />
                <h3 className="text-2xl font-black">{item.name}</h3>
                <p className="mt-3 leading-7 text-[#496371]">{item.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="experience" className="bg-[#075985] py-20 text-white md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#aeeaf0]">Coastal dining experience</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Relaxed atmosphere, premium service, ocean-bright plates.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {['Raw bar', 'Sunlit dining', 'Coastal cocktails'].map((item) => (
              <div key={item} className="rounded-2xl bg-white/12 p-6">
                <h3 className="text-2xl font-black">{item}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="specials" className="py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-3">
          {['Lobster roll lunch', 'Coral reef ceviche', 'Grilled whole branzino'].map((special) => (
            <article key={special} className="rounded-3xl bg-[#f4ead5] p-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#075985]">Chef special</p>
              <h3 className="mt-6 text-3xl font-black">{special}</h3>
              <p className="mt-4 leading-7 text-[#496371]">A seasonal seafood plate prepared with bright coastal flavor.</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-[#f7fbfb] py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-3">
          {['Fresh, clean, and beautifully plated.', 'The scallops were perfect.', 'Relaxed coastal dinner without the fuss.'].map((quote) => (
            <blockquote key={quote} className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-xl font-bold leading-8">"{quote}"</p>
              <footer className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#075985]">OceanPlate guest</footer>
            </blockquote>
          ))}
        </Container>
      </section>

      <section id="reserve" className="bg-[#39b6c8] py-20 text-white">
        <Container className="text-center">
          <h2 className="text-4xl font-black md:text-5xl">Reserve a coastal table tonight.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">Join us for fresh seafood, chef specials, and relaxed premium dining.</p>
          <CTAButton href="tel:555-0118" size="lg" className="mt-8 bg-[#063047] text-white hover:bg-[#075985]">Call (555) 011-8800</CTAButton>
        </Container>
      </section>

      <section className="border-t border-[#d7e8e8] py-8">
        <Container>
          <Link to="/restaurant" className="font-bold text-[#075985] hover:text-[#39b6c8]">
            Back to Restaurant Collection
          </Link>
        </Container>
      </section>

      <footer className="py-10">
        <Container className="flex flex-col justify-between gap-4 text-sm md:flex-row">
          <p className="font-black">OceanPlate Seafood</p>
          <p className="text-[#496371]">28 Coastline Pier | Fresh catch, raw bar, dinner</p>
        </Container>
      </footer>
    </main>
  )
}
