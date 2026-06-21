import { Link } from 'react-router-dom'
import { Container, CTAButton, SubWebsiteNav } from '../../components'

const burgers = [
  { name: 'Craft Classic', detail: 'Double smash patties, cheddar, pickles, craft sauce', price: '$15' },
  { name: 'Firehouse Stack', detail: 'Pepper jack, crispy onions, jalapeno relish, hot ketchup', price: '$17' },
  { name: 'Green Market Burger', detail: 'Veggie patty, pickle slaw, avocado, basil mayo', price: '$16' },
]

export function BurgerCraft() {
  return (
    <main className="brand-motion motion-burgercraft bg-[#fff3d7] text-[#202020]">
      <SubWebsiteNav
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

      <section className="relative overflow-hidden bg-[#fff3d7] pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(32,32,32,0.08)_1px,transparent_1px),linear-gradient(rgba(217,45,32,0.08)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute -left-24 top-24 h-48 w-48 rounded-full border-[28px] border-[#d92d20]/15" />
        <div className="absolute bottom-10 right-0 hidden h-40 w-40 rotate-12 bg-[#3f8f3a]/15 md:block" />

        <Container className="relative pb-16 md:pb-24">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div className="pb-6">
              <div className="inline-flex -rotate-2 border-4 border-[#202020] bg-[#f3b53f] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] shadow-[5px_5px_0_#202020]">
                Griddle-first burger lab
              </div>
              <h1 className="mt-7 max-w-4xl text-[4.6rem] font-black uppercase leading-[0.82] md:text-[7.4rem] lg:text-[8.2rem]">
                Built
                <span className="block text-[#d92d20]">to drip.</span>
              </h1>
              <p className="mt-7 max-w-2xl border-l-4 border-[#202020] pl-5 text-lg font-bold leading-8 text-[#5f4c34] md:text-xl">
                Smash patties hit the steel, sauces get mixed like signatures, and every stack leaves the counter with its own messy little swagger.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#order" size="lg" className="bg-[#d92d20] text-white shadow-[6px_6px_0_#202020] hover:bg-[#b9241a]">
                  Start My Stack
                </CTAButton>
                <CTAButton href="#build" variant="outline" size="lg" className="border-[#202020] bg-white text-[#202020] shadow-[6px_6px_0_#202020] hover:bg-[#f3b53f]">
                  Build The Bite
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[560px] overflow-hidden border-4 border-[#202020] bg-[#fff9e9] shadow-[12px_12px_0_#202020]">
              <div className="absolute left-0 top-0 z-10 flex w-full items-center justify-between border-b-4 border-[#202020] bg-white px-5 py-3 text-xs font-black uppercase tracking-[0.16em]">
                <span>Order 047</span>
                <span className="text-[#d92d20]">Open flame attitude</span>
              </div>

              <div className="absolute left-6 top-24 z-20 rotate-[-5deg] border-4 border-[#202020] bg-[#d92d20] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[5px_5px_0_#202020]">
                House sauce
              </div>
              <div className="absolute right-6 top-28 z-20 rotate-[6deg] border-4 border-[#202020] bg-[#3f8f3a] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white shadow-[5px_5px_0_#202020]">
                Pickle snap
              </div>
              <div className="absolute bottom-24 left-6 z-20 rotate-[4deg] border-4 border-[#202020] bg-white px-5 py-3 text-sm font-black uppercase tracking-[0.16em] shadow-[5px_5px_0_#202020]">
                Double smash
              </div>

              <div className="absolute left-1/2 top-[5.8rem] h-[29rem] w-[29rem] -translate-x-1/2 rounded-full bg-[#f3b53f]/25" />
              <div className="absolute left-1/2 top-[7.6rem] h-20 w-[70%] -translate-x-1/2 rounded-t-[8rem] rounded-b-[2rem] border-4 border-[#202020] bg-[#f3b53f] shadow-[0_12px_0_#202020]" />
              <div className="absolute left-1/2 top-[10.3rem] h-5 w-[62%] -translate-x-1/2 rounded-full bg-white/55" />

              <div className="absolute left-1/2 top-[14.2rem] h-14 w-[82%] -translate-x-1/2 rotate-[-2deg] rounded-[2rem] border-4 border-[#202020] bg-[#d92d20] shadow-[7px_7px_0_#202020]" />
              <div className="absolute left-1/2 top-[17.6rem] h-11 w-[76%] -translate-x-1/2 rotate-[2deg] rounded-[1.5rem] border-4 border-[#202020] bg-[#f7dc56] shadow-[7px_7px_0_#202020]" />
              <div className="absolute left-1/2 top-[20.2rem] h-16 w-[86%] -translate-x-1/2 rotate-[-1deg] rounded-[2rem] border-4 border-[#202020] bg-[#6b2f20] shadow-[8px_8px_0_#202020]" />
              <div className="absolute left-1/2 top-[23.9rem] h-12 w-[78%] -translate-x-1/2 rotate-[2deg] rounded-[1.5rem] border-4 border-[#202020] bg-[#3f8f3a] shadow-[7px_7px_0_#202020]" />
              <div className="absolute left-1/2 top-[27rem] h-20 w-[72%] -translate-x-1/2 rounded-b-[8rem] rounded-t-[2rem] border-4 border-[#202020] bg-[#f3b53f] shadow-[8px_8px_0_#202020]" />

              <div className="absolute bottom-0 left-0 right-0 grid border-t-4 border-[#202020] bg-[#202020] text-white sm:grid-cols-3">
                {[
                  { value: '3 min', label: 'Griddle sear' },
                  { value: '8', label: 'Sauces mixed' },
                  { value: '$15', label: 'Classic stack' },
                ].map((stat) => (
                  <div key={stat.label} className="border-b border-white/15 p-5 sm:border-b-0 sm:border-r sm:last:border-r-0">
                    <p className="text-3xl font-black text-[#f3b53f]">{stat.value}</p>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-white/70">{stat.label}</p>
                  </div>
                ))}
              </div>
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
