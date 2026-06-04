import { Link } from 'react-router-dom'
import { Container, CTAButton, RestaurantSubNav } from '../../components'

const burgers = [
  { name: 'Craft Classic', detail: 'Double smash patties, cheddar, pickles, craft sauce', price: '$15' },
  { name: 'Firehouse Stack', detail: 'Pepper jack, crispy onions, jalapeno relish, hot ketchup', price: '$17' },
  { name: 'Green Market Burger', detail: 'Veggie patty, pickle slaw, avocado, basil mayo', price: '$16' },
]

export function BurgerCraft() {
  return (
    <main className="brand-motion motion-burgercraft bg-[#fff3d7] text-[#202020]">
      <RestaurantSubNav
        brand="BurgerCraft"
        links={[
          { label: 'Burgers', href: '#burgers' },
          { label: 'Build', href: '#build' },
          { label: 'Combos', href: '#combos' },
        ]}
        ctaLabel="Order Now"
        ctaHref="#order"
        className="border-b border-[#202020]/10 bg-[#fff3d7]/95"
        brandClassName="text-[#d92d20]"
        linkClassName="text-[#202020] transition hover:bg-[#f3b53f]/30 hover:text-[#d92d20]"
        ctaClassName="bg-[#d92d20] text-white hover:bg-[#b9241a]"
        menuButtonClassName="border-[#202020]/15 text-[#202020] hover:bg-[#f3b53f]/30"
        mobilePanelClassName="border border-[#202020]/10 bg-[#fff3d7]"
      />

      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(32,32,32,0.08)_1px,transparent_1px),linear-gradient(rgba(217,45,32,0.08)_1px,transparent_1px)] bg-[size:38px_38px]" />
        <Container className="relative grid items-center gap-12 pb-20 md:grid-cols-[1fr_0.95fr] md:pb-28">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d92d20]">Gourmet burger restaurant</p>
            <h1 className="mt-4 text-5xl font-black leading-none md:text-7xl">BurgerCraft stacks big flavor by hand.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f4c34]">
              Crispy edges, toasted buns, pickle crunch, and street-food energy for casual dinners that do not play it safe.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="#order" size="lg" className="bg-[#d92d20] hover:bg-[#b9241a]">Order Now</CTAButton>
              <CTAButton href="#burgers" variant="outline" size="lg" className="border-[#202020] text-[#202020] hover:bg-[#f3b53f]/30">See Burgers</CTAButton>
            </div>
          </div>
          <div className="relative min-h-[430px]">
            <div className="absolute left-8 right-8 top-8 h-16 rounded-full bg-[#f3b53f] shadow-2xl" />
            <div className="absolute left-0 right-0 top-28 h-20 rounded-3xl bg-[#d92d20] shadow-2xl" />
            <div className="absolute left-10 right-10 top-52 h-16 rounded-2xl bg-[#3f8f3a] shadow-2xl" />
            <div className="absolute bottom-12 left-4 right-4 h-24 rounded-full bg-[#f3b53f] shadow-2xl" />
            <div className="absolute bottom-0 right-0 rounded-2xl bg-[#202020] p-5 text-white shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f3b53f]">Made loud</p>
              <p className="mt-1 text-2xl font-black">Smash, stack, sauce.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="bg-[#202020] py-20 text-white md:py-28">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#f3b53f]">About BurgerCraft</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">A modern burger counter with handcrafted attitude.</h2>
          </div>
          <p className="text-lg leading-8 text-white/75">
            We keep the menu tight, the griddle hot, and the flavor bold: fresh patties, punchy sauces, crisp toppings,
            and combos built for real appetite.
          </p>
        </Container>
      </section>

      <section id="burgers" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="font-black uppercase tracking-[0.24em] text-[#d92d20]">Signature burgers</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Stacks with crunch, char, and sauce.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {burgers.map((burger) => (
              <article key={burger.name} className="rounded-[2rem] border-4 border-[#202020] bg-white p-6 shadow-[8px_8px_0_#202020]">
                <div className="mb-6 aspect-[4/3] rounded-[1.5rem] bg-[linear-gradient(180deg,#f3b53f_0_22%,#d92d20_23%_48%,#3f8f3a_49%_62%,#f3b53f_63%)]" />
                <div className="flex justify-between gap-4">
                  <h3 className="text-2xl font-black">{burger.name}</h3>
                  <span className="font-black text-[#d92d20]">{burger.price}</span>
                </div>
                <p className="mt-3 leading-7 text-[#5f4c34]">{burger.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="build" className="bg-[#f3b53f] py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#202020]">Build your burger</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Choose the stack. Control the chaos.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {['Patty', 'Cheese', 'Sauce'].map((step) => (
              <div key={step} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-3xl font-black">{step}</h3>
                <p className="mt-3 text-[#5f4c34]">Pick your favorite and make the burger yours.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="combos" className="py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-3">
          {['Classic Combo', 'Loaded Fries Box', 'Craft Soda Duo'].map((combo) => (
            <article key={combo} className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d92d20]">Combo deal</p>
              <h3 className="mt-6 text-3xl font-black">{combo}</h3>
              <p className="mt-4 leading-7 text-[#5f4c34]">Burger, fries, drink, and enough flavor to make lunch feel like an event.</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-3">
          {['Messy in the best possible way.', 'The Firehouse Stack is ridiculous.', 'Fast, fun, and seriously good.'].map((quote) => (
            <blockquote key={quote} className="rounded-3xl bg-[#fff3d7] p-8">
              <p className="text-xl font-bold leading-8">"{quote}"</p>
              <footer className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#d92d20]">Burger fan</footer>
            </blockquote>
          ))}
        </Container>
      </section>

      <section id="order" className="bg-[#d92d20] py-20 text-white">
        <Container className="text-center">
          <h2 className="text-4xl font-black md:text-5xl">Your burger is waiting.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">Order now for pickup, dinner, or a full combo run.</p>
          <CTAButton href="tel:555-0155" size="lg" className="mt-8 bg-[#202020] text-white hover:bg-black">Call (555) 015-5500</CTAButton>
        </Container>
      </section>

      <section className="border-t border-[#202020]/10 py-8">
        <Container>
          <Link to="/restaurant" className="font-bold text-[#d92d20] hover:text-[#202020]">
            Back to Restaurant Collection
          </Link>
        </Container>
      </section>

      <footer className="bg-[#202020] py-10 text-white">
        <Container className="flex flex-col justify-between gap-4 text-sm md:flex-row">
          <p className="font-black">BurgerCraft</p>
          <p className="text-white/70">311 Griddle Street | Burgers, fries, craft sodas</p>
        </Container>
      </footer>
    </main>
  )
}
