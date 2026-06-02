import { Link } from 'react-router-dom'
import { Container, CTAButton } from '../../components'

const dishes = [
  { name: 'Saffron Seekh Skewers', detail: 'Char-grilled beef, herbs, onion chutney' },
  { name: 'Lahori Butter Chicken', detail: 'Tomato makhani, smoked cream, naan' },
  { name: 'Karachi Masala Chops', detail: 'Lamb chops, dry spice rub, lemon heat' },
]

export function SpiceRouteGrill() {
  return (
    <main className="bg-[#fff4dd] text-[#1f1b18]">
      <nav className="fixed left-0 right-0 top-16 z-40 border-b border-[#f4a11a]/20 bg-[#1f1b18]/95 text-[#fff4dd] backdrop-blur">
        <Container className="flex h-14 items-center justify-between">
          <Link to="/" className="font-black uppercase tracking-[0.2em]">SpiceRoute</Link>
          <div className="hidden gap-6 text-sm font-bold md:flex">
            <a href="#dishes" className="hover:text-[#f4a11a]">Dishes</a>
            <a href="#journey" className="hover:text-[#f4a11a]">Journey</a>
            <a href="#platters" className="hover:text-[#f4a11a]">Platters</a>
          </div>
          <a href="#order" className="rounded-full bg-[#f4a11a] px-4 py-2 text-sm font-black text-[#1f1b18]">Order</a>
        </Container>
      </nav>

      <section className="relative overflow-hidden bg-[#1f1b18] pt-28 text-[#fff4dd] md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(143,29,27,0.45),transparent_28%),radial-gradient(circle_at_86%_10%,rgba(244,161,26,0.24),transparent_22%)]" />
        <Container className="relative grid items-center gap-12 pb-20 md:grid-cols-[1.05fr_0.95fr] md:pb-28">
          <div>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.28em] text-[#f4a11a]">Indian-Pakistani fusion grill</p>
            <h1 className="text-5xl font-black leading-tight md:text-7xl">Fire, spice, and family-style flavor.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#ead9bd]">
              SpiceRoute Grill brings smoky skewers, fragrant curries, and celebratory platters into a modern dining room.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="#order" size="lg" className="bg-[#f4a11a] text-[#1f1b18] hover:bg-[#d98c11]">Order Now</CTAButton>
              <CTAButton href="#dishes" variant="outline" size="lg" className="border-[#fff4dd] text-[#fff4dd] hover:bg-white/10">Explore Menu</CTAButton>
            </div>
          </div>
          <div className="relative min-h-[420px]">
            <div className="absolute left-8 top-0 h-80 w-80 rounded-full border-[34px] border-[#8f1d1b]" />
            <div className="absolute bottom-0 right-0 h-80 w-72 rounded-[2rem] bg-[#fff4dd] p-7 shadow-2xl">
              <div className="h-full rounded-[1.5rem] bg-[conic-gradient(from_30deg,#8f1d1b,#f4a11a,#1f1b18,#8f1d1b)]" />
            </div>
            <div className="absolute left-0 top-24 rounded-2xl bg-[#8f1d1b] p-6 shadow-2xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#f4a11a]">Tandoor heat</p>
              <p className="mt-2 text-3xl font-black">Grilled to order.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <div className="rounded-[2rem] bg-[#8f1d1b] p-8 text-[#fff4dd]">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f4a11a]">House blend</p>
            <p className="mt-8 text-5xl font-black">21 spices</p>
            <p className="mt-4 leading-7 text-[#ead9bd]">Toasted, ground, and balanced for smoke, warmth, and depth.</p>
          </div>
          <div>
            <h2 className="text-4xl font-black md:text-5xl">A grill house shaped by routes, recipes, and shared tables.</h2>
            <p className="mt-5 text-lg leading-8 text-[#5c4035]">
              Our menu connects roadside grill culture with polished hospitality: skewers over flame, creamy sauces,
              fragrant rice, fresh chutneys, and warm bread for tearing and sharing.
            </p>
          </div>
        </Container>
      </section>

      <section id="dishes" className="bg-[#8f1d1b] py-20 text-[#fff4dd] md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="font-black uppercase tracking-[0.24em] text-[#f4a11a]">Popular dishes</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Smoky, saucy, unforgettable.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {dishes.map((dish) => (
              <article key={dish.name} className="rounded-[2rem] bg-[#fff4dd] p-6 text-[#1f1b18]">
                <div className="mb-6 aspect-[4/3] rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_45%,#f4a11a_0_18%,transparent_19%),linear-gradient(135deg,#1f1b18,#8f1d1b)]" />
                <h3 className="text-2xl font-black">{dish.name}</h3>
                <p className="mt-3 leading-7 text-[#5c4035]">{dish.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="journey" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-2xl">
            <p className="font-black uppercase tracking-[0.24em] text-[#8f1d1b]">Flavor journey</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Layered from first aroma to last bite.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {['Toast spices', 'Marinate overnight', 'Grill over flame', 'Finish with chutney'].map((step, index) => (
              <div key={step} className="rounded-2xl border border-[#e4c58a] bg-white/60 p-6">
                <p className="text-3xl font-black text-[#f4a11a]">0{index + 1}</p>
                <h3 className="mt-6 text-xl font-black">{step}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="platters" className="bg-[#1f1b18] py-20 text-[#fff4dd] md:py-28">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#f4a11a]">Catering and family platters</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Built for the whole table.</h2>
            <p className="mt-5 text-lg leading-8 text-[#ead9bd]">
              Choose mixed grills, biryani trays, naan baskets, chutney flights, and dessert add-ons for gatherings of 6 to 60.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['Family Grill Box', 'Weekend Biryani Tray', 'Office Lunch Set', 'Celebration Feast'].map((platter) => (
              <div key={platter} className="rounded-2xl border border-white/15 p-6">
                <h3 className="text-2xl font-black">{platter}</h3>
                <p className="mt-3 text-[#ead9bd]">Generous portions, fresh naan, sauces, and sides.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {['The mixed grill tastes like a celebration.', 'Beautiful space, serious spice, great service.', 'Our new family platter spot.'].map((quote) => (
              <blockquote key={quote} className="rounded-[2rem] bg-white p-8 shadow-sm">
                <p className="text-xl font-bold leading-8">"{quote}"</p>
                <footer className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#8f1d1b]">Dining guest</footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section id="order" className="bg-[#f4a11a] py-20">
        <Container className="text-center">
          <h2 className="text-4xl font-black md:text-5xl">Bring the spice home tonight.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#1f1b18]/80">Order pickup, reserve a table, or ask about family platters for your next gathering.</p>
          <CTAButton href="tel:555-0199" size="lg" className="mt-8 bg-[#1f1b18] text-[#fff4dd] hover:bg-[#332b25]">Call (555) 019-9090</CTAButton>
        </Container>
      </section>

      <section className="border-t border-[#e4c58a] py-8">
        <Container>
          <Link to="/restaurant" className="font-bold text-[#8f1d1b] hover:text-[#f4a11a]">
            Back to Restaurant Collection
          </Link>
        </Container>
      </section>

      <footer className="bg-[#1f1b18] py-10 text-[#fff4dd]">
        <Container className="flex flex-col justify-between gap-4 text-sm md:flex-row">
          <p className="font-black">SpiceRoute Grill</p>
          <p className="text-[#ead9bd]">610 Ember Road | Lunch, dinner, catering</p>
        </Container>
      </footer>
    </main>
  )
}
