import { Link } from 'react-router-dom'
import { Container, CTAButton } from '../../components'

const goods = [
  { name: 'Sourdough Country Loaf', note: 'Slow-fermented, crackly crust, soft center' },
  { name: 'Honey Butter Croissant', note: 'Layered pastry with a glossy golden finish' },
  { name: 'Chocolate Babka Slice', note: 'Rich cocoa ribbons and tender brioche crumb' },
]

export function GoldenCrustBakery() {
  return (
    <main className="bg-[#fff7df] text-[#3a2418]">
      <nav className="fixed left-0 right-0 top-16 z-40 border-b border-[#ead6aa] bg-[#fff7df]/95 backdrop-blur">
        <Container className="flex h-14 items-center justify-between">
          <Link to="/" className="font-black text-[#6f3f22]">Golden Crust Bakery</Link>
          <div className="hidden gap-6 text-sm font-bold md:flex">
            <a href="#goods" className="hover:text-[#d99a22]">Baked Goods</a>
            <a href="#process" className="hover:text-[#d99a22]">Process</a>
            <a href="#visit" className="hover:text-[#d99a22]">Visit</a>
          </div>
          <a href="#visit" className="rounded-full bg-[#6f3f22] px-4 py-2 text-sm font-bold text-white">Morning Hours</a>
        </Container>
      </nav>

      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(217,154,34,0.22),transparent_28%),radial-gradient(circle_at_82%_16%,rgba(111,63,34,0.12),transparent_24%)]" />
        <Container className="relative grid items-center gap-12 pb-20 md:grid-cols-[0.9fr_1.1fr] md:pb-28">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-[#d99a22]">Artisan bakery</p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">Warm bread, golden mornings.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f3f22]">
              A neighborhood bakery for handcrafted loaves, buttery pastries, and family-friendly morning rituals.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="#goods" size="lg" className="bg-[#d99a22] text-[#3a2418] hover:bg-[#c98c19]">See Today's Bakes</CTAButton>
              <CTAButton href="#visit" variant="outline" size="lg" className="border-[#6f3f22] text-[#6f3f22] hover:bg-[#f5e6bd]">Plan a Visit</CTAButton>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-lg rounded-[2rem] bg-[#f5dfaa] p-8 shadow-2xl">
            <div className="grid h-full grid-cols-2 gap-5">
              <div className="rounded-t-full bg-[#d99a22]" />
              <div className="rounded-full bg-[#6f3f22]" />
              <div className="rounded-full bg-[#fff7df]" />
              <div className="rounded-t-full bg-[#c7832b]" />
            </div>
            <div className="absolute -bottom-6 left-8 right-8 rounded-2xl bg-white p-5 shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#d99a22]">Fresh out</p>
              <p className="mt-1 text-2xl font-black">Batch one lands at 7 AM.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="bg-white py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#d99a22]">About the bakery</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Small batches, patient dough, familiar faces.</h2>
          </div>
          <p className="text-lg leading-8 text-[#6f3f22]">
            Golden Crust focuses on the simple things that make a bakery memorable: long fermentation, real butter,
            seasonal fillings, and a counter team that knows the regulars by name.
          </p>
        </Container>
      </section>

      <section id="goods" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="font-black uppercase tracking-[0.24em] text-[#d99a22]">Featured baked goods</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">The case favorites.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {goods.map((item) => (
              <article key={item.name} className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="mb-6 aspect-[4/3] rounded-2xl bg-[linear-gradient(135deg,#d99a22,#fff7df_45%,#6f3f22)]" />
                <h3 className="text-2xl font-black">{item.name}</h3>
                <p className="mt-3 leading-7 text-[#6f3f22]">{item.note}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#3a2418] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-center">
            <div>
              <p className="font-black uppercase tracking-[0.24em] text-[#f5c15f]">Daily specials</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">A new reason to stop in.</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {['Monday: cinnamon pull-aparts', 'Wednesday: seeded baguettes', 'Friday: berry cream danish'].map((special) => (
                <div key={special} className="rounded-2xl border border-white/15 p-5">
                  <p className="font-bold leading-7">{special}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="process" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-2xl">
            <p className="font-black uppercase tracking-[0.24em] text-[#d99a22]">Baking process</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">From starter to shelf.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {['Mix', 'Rest', 'Shape', 'Bake'].map((step, index) => (
              <div key={step} className="rounded-3xl border border-[#ead6aa] bg-[#fffaf0] p-6">
                <p className="text-sm font-black text-[#d99a22]">0{index + 1}</p>
                <h3 className="mt-8 text-3xl font-black">{step}</h3>
                <p className="mt-3 leading-7 text-[#6f3f22]">Careful timing keeps texture, flavor, and crust exactly where they should be.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {['The croissants sell out for a reason.', 'Feels like a weekend morning even on Tuesday.', 'Best sourdough in the neighborhood.'].map((quote) => (
              <blockquote key={quote} className="rounded-3xl bg-[#fff7df] p-8">
                <p className="text-xl font-bold leading-8">"{quote}"</p>
                <footer className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#9a6b32]">Bakery guest</footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section id="visit" className="py-20">
        <Container className="rounded-[2rem] bg-[#d99a22] p-8 text-center shadow-xl md:p-14">
          <h2 className="text-4xl font-black md:text-5xl">Visit before the shelves clear.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#3a2418]/80">Open 7 AM - 3 PM, with fresh bread cooling all morning.</p>
          <CTAButton href="tel:555-0188" size="lg" className="mt-8 bg-[#3a2418] text-white hover:bg-[#24160f]">Call (555) 018-8000</CTAButton>
        </Container>
      </section>

      <section className="border-t border-[#ead6aa] py-8">
        <Container>
          <Link to="/restaurant" className="font-bold text-[#6f3f22] hover:text-[#d99a22]">
            Back to Restaurant Collection
          </Link>
        </Container>
      </section>

      <footer className="border-t border-[#ead6aa] py-10">
        <Container className="flex flex-col justify-between gap-4 text-sm md:flex-row">
          <p className="font-black">Golden Crust Bakery</p>
          <p className="text-[#6f3f22]">88 Brioche Lane | Daily 7 AM - 3 PM</p>
        </Container>
      </footer>
    </main>
  )
}
