import { Link } from 'react-router-dom'
import { Container, CTAButton, SubWebsiteNav } from '../../components'

const highlightBadges = ['Fresh Daily', 'House Sauce', 'Dine In / Takeout']

const burgers = [
  {
    name: 'The Classic Craft',
    detail: 'Lettuce, tomato, cheddar, pickles, and craft sauce.',
    price: '$12.95',
    label: 'Photo: The Classic Craft burger',
    gradient: 'from-[#f7c85b] via-[#b85a27] to-[#2a1710]',
  },
  {
    name: 'Bacon Melt',
    detail: 'Double cheddar, crispy bacon, grilled onions, and smoky mayo.',
    price: '$15.50',
    label: 'Photo: Bacon Melt burger',
    gradient: 'from-[#ffe071] via-[#9b3b24] to-[#1e1511]',
  },
  {
    name: 'Spicy Stack',
    detail: 'Jalapenos, pepper jack, hot honey, lettuce, and chili sauce.',
    price: '$14.75',
    label: 'Photo: Spicy Stack burger',
    gradient: 'from-[#f2bf3f] via-[#d73527] to-[#2f7a39]',
  },
  {
    name: 'Crispy Chicken Crunch',
    detail: 'Crispy chicken, slaw, pickles, and spicy ranch.',
    price: '$13.95',
    label: 'Photo: Crispy Chicken Crunch sandwich',
    gradient: 'from-[#f8df8b] via-[#d98d25] to-[#354f25]',
  },
  {
    name: 'Truffle Smash',
    detail: 'Swiss cheese, mushrooms, caramelized onions, and truffle mayo.',
    price: '$16.25',
    label: 'Photo: Truffle Smash burger',
    gradient: 'from-[#f4d46b] via-[#7a4a2a] to-[#17120f]',
  },
  {
    name: 'Plant Power Burger',
    detail: 'Plant-based patty, vegan cheddar, lettuce, tomato, and house sauce.',
    price: '$14.25',
    label: 'Photo: Plant Power Burger',
    gradient: 'from-[#f7c85b] via-[#44823c] to-[#23170f]',
  },
]

const comboItems = ['Craft Burger', 'Golden Fries', 'House Sauce', 'Classic Shake']

const locations = [
  {
    name: 'Burger Craft Downtown',
    address: '125 Craft Street, New York, NY',
    hours: 'Open daily: 11:00 AM - 11:00 PM',
  },
  {
    name: 'Burger Craft Kitchen',
    address: '88 Grill Avenue, Brooklyn, NY',
    hours: 'Open daily: 12:00 PM - 10:00 PM',
  },
]

function BurgerPhotoPlaceholder({ label, gradient }: { label: string; gradient: string }) {
  return (
    <div className="burger-photo-placeholder relative min-h-52 overflow-hidden rounded-[1.5rem] border-2 border-[#211915]/10 bg-[#fff1ce] p-4" aria-label={label}>
      <div className="absolute left-4 top-4 z-10 rounded-full bg-[#fffaf0]/90 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#7a3c1d]">
        {label}
      </div>
      <div className="absolute inset-x-8 top-16 h-14 rounded-t-[5rem] rounded-b-2xl bg-gradient-to-b from-[#f6bd45] to-[#b96624] shadow-[0_8px_0_#211915] transition duration-300 group-hover:-translate-y-1" />
      <div className="absolute inset-x-6 top-32 h-8 rotate-[-2deg] rounded-full bg-[#d92d20] shadow-[5px_5px_0_#211915]" />
      <div className="absolute inset-x-10 top-40 h-8 rotate-[2deg] rounded-xl bg-[#f7d94c] shadow-[5px_5px_0_#211915]" />
      <div className={`absolute inset-x-7 top-48 h-12 rounded-2xl bg-gradient-to-r ${gradient} shadow-[6px_6px_0_#211915]`} />
      <div className="absolute inset-x-12 bottom-8 h-14 rounded-b-[5rem] rounded-t-2xl bg-gradient-to-b from-[#d68a34] to-[#f2bd54] shadow-[0_8px_0_#211915]" />
      <div className="absolute bottom-4 left-1/2 h-4 w-52 -translate-x-1/2 rounded-full bg-[#211915]/15 blur-sm" />
    </div>
  )
}

export function BurgerCraft() {
  return (
    <main className="brand-motion motion-burgercraft overflow-hidden bg-[#fff4dc] text-[#211915]">
      <SubWebsiteNav
        brand="Burger Craft"
        links={[
          { label: 'Home', href: '#home' },
          { label: 'Menu', href: '#menu' },
          { label: 'Craft Story', href: '#story' },
          { label: 'Locations', href: '#locations' },
          { label: 'Order Online', href: '#order' },
        ]}
        ctaLabel="Order Now"
        ctaHref="#order"
        className="border-b border-[#211915]/10 bg-[#fff4dc]/94 shadow-sm shadow-[#211915]/10"
        brandClassName="text-[#d92d20]"
        linkClassName="rounded-full px-3 py-2 text-[#211915] transition hover:bg-[#f7c948] hover:text-[#211915]"
        activeLinkClassName="burger-nav-active"
        ctaClassName="bg-[#d92d20] text-white shadow-lg shadow-[#d92d20]/20 hover:bg-[#b52319]"
        activeCtaClassName="burger-nav-cta-active"
        menuButtonClassName="border-[#211915]/20 text-[#211915] hover:bg-[#f7c948]"
        mobilePanelClassName="border border-[#211915]/10 bg-[#fff4dc]"
      />

      <section id="home" className="relative min-h-screen overflow-hidden pt-28 md:pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(33,25,21,0.07)_1px,transparent_1px),linear-gradient(rgba(217,45,32,0.08)_1px,transparent_1px)] bg-[size:46px_46px]" />
        <div className="absolute inset-x-0 top-0 h-32 bg-[#211915]" />
        <div className="absolute inset-x-0 top-24 h-12 bg-[repeating-linear-gradient(90deg,#f7c948_0_60px,#fff4dc_60px_120px,#d92d20_120px_180px)] shadow-xl shadow-[#211915]/15" />
        <div className="float-slow absolute -left-20 top-48 h-44 w-44 rounded-full border-[24px] border-[#d92d20]/20" />
        <div className="pulse-soft absolute bottom-24 right-8 hidden h-40 w-40 rotate-12 rounded-[2rem] bg-[#2f7a39]/15 lg:block" />

        <Container className="relative grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-20 pt-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-4xl">
            <Link
              to="/restaurant"
              className="mb-7 inline-flex rounded-full border border-[#211915]/15 bg-white/80 px-4 py-2 text-sm font-black text-[#211915] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#fff8ea]"
            >
              Back to Restaurant Collection
            </Link>
            <p className="inline-flex -rotate-1 rounded-full bg-[#211915] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#f7c948] shadow-xl shadow-[#211915]/15">
              Handcrafted Burgers
            </p>
            <h1 className="mt-6 text-5xl font-black uppercase leading-[0.88] tracking-normal text-[#211915] sm:text-6xl lg:text-8xl">
              Built Fresh. Stacked High. Served Hot.
            </h1>
            <p className="mt-6 max-w-2xl text-lg font-bold leading-8 text-[#654026] md:text-xl">
              Smash-style burgers, golden fries, house sauces, and thick shakes made for serious burger lovers.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="#order" size="lg" className="rounded-full bg-[#d92d20] text-white shadow-[7px_7px_0_#211915] hover:bg-[#b52319]">
                Order Now
              </CTAButton>
              <CTAButton href="#menu" variant="outline" size="lg" className="rounded-full border-[#211915] bg-white text-[#211915] shadow-[7px_7px_0_#211915] hover:bg-[#f7c948] hover:text-[#211915]">
                View Menu
              </CTAButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-3">
              {highlightBadges.map((badge) => (
                <span key={badge} className="burger-badge rounded-full border-2 border-[#211915] bg-[#fffaf0] px-4 py-2 text-sm font-black uppercase tracking-[0.12em] shadow-[4px_4px_0_#211915]">
                  {badge}
                </span>
              ))}
            </div>
          </div>

          <div className="burger-stack-visual relative mx-auto min-h-[560px] w-full max-w-2xl">
            <div className="absolute inset-x-4 bottom-7 top-4 rounded-[2.5rem] border-4 border-[#211915] bg-[#fffaf0] shadow-[12px_12px_0_#211915]" />
            <div className="absolute left-8 right-8 top-10 flex items-center justify-between border-b-4 border-[#211915] pb-4 text-xs font-black uppercase tracking-[0.16em]">
              <span>Photo: Hero craft burger</span>
              <span className="text-[#d92d20]">Hot counter</span>
            </div>
            <div className="absolute left-1/2 top-24 h-96 w-96 -translate-x-1/2 rounded-full bg-[#f7c948]/28" />
            <div className="absolute left-1/2 top-28 h-20 w-[78%] -translate-x-1/2 rounded-t-[8rem] rounded-b-[2rem] border-4 border-[#211915] bg-[#f1af3b] shadow-[0_12px_0_#211915]" />
            <div className="absolute left-1/2 top-48 h-12 w-[88%] -translate-x-1/2 -rotate-2 rounded-full border-4 border-[#211915] bg-[#d92d20] shadow-[7px_7px_0_#211915]" />
            <div className="absolute left-1/2 top-56 h-12 w-[78%] -translate-x-1/2 rotate-2 rounded-xl border-4 border-[#211915] bg-[#f7d94c] shadow-[7px_7px_0_#211915]" />
            <div className="absolute left-1/2 top-[17rem] h-20 w-[90%] -translate-x-1/2 -rotate-1 rounded-[2rem] border-4 border-[#211915] bg-[#5b2f1f] shadow-[8px_8px_0_#211915]" />
            <div className="absolute left-1/2 top-[21.5rem] h-12 w-[78%] -translate-x-1/2 rotate-2 rounded-2xl border-4 border-[#211915] bg-[#2f7a39] shadow-[7px_7px_0_#211915]" />
            <div className="absolute left-1/2 top-[24.7rem] h-20 w-[72%] -translate-x-1/2 rounded-b-[8rem] rounded-t-[2rem] border-4 border-[#211915] bg-[#f1af3b] shadow-[8px_8px_0_#211915]" />
            <div className="absolute left-2 top-28 rotate-[-7deg] rounded-2xl border-4 border-[#211915] bg-[#d92d20] px-5 py-4 text-sm font-black uppercase tracking-[0.14em] text-white shadow-[6px_6px_0_#211915]">
              Sauce drip approved
            </div>
            <div className="absolute bottom-12 right-2 rotate-[5deg] rounded-2xl border-4 border-[#211915] bg-[#f7c948] px-5 py-4 text-sm font-black uppercase tracking-[0.14em] shadow-[6px_6px_0_#211915]">
              Thick shakes daily
            </div>
          </div>
        </Container>
      </section>

      <section id="story" className="bg-[#211915] py-20 text-white md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#f7c948]">Craft story</p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] md:text-7xl">This Is Burger Craft</h2>
            <p className="mt-6 max-w-3xl text-xl font-bold leading-9 text-white/78">
              We keep it simple: quality beef, toasted buns, melted cheese, fresh toppings, crispy sides, and flavor in every bite.
            </p>
          </div>
          <div className="relative min-h-[360px] overflow-hidden rounded-[2rem] border-4 border-white bg-[#d92d20] p-6 shadow-[10px_10px_0_#f7c948]">
            <div className="absolute inset-0 opacity-25 bg-[radial-gradient(circle_at_20%_20%,#f7c948_0_10%,transparent_11%),radial-gradient(circle_at_70%_60%,#fff4dc_0_8%,transparent_9%)]" />
            <div className="relative rounded-[1.5rem] bg-[#fff4dc] p-6 text-[#211915]">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d92d20]">Texture: burger counter wall</p>
              <p className="mt-16 text-4xl font-black uppercase leading-none md:text-5xl">Hot griddle. Cold shakes. No shortcuts.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="menu" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <p className="font-black uppercase tracking-[0.24em] text-[#d92d20]">Featured burgers</p>
              <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-6xl">Stacks with crunch, char, and sauce.</h2>
            </div>
            <CTAButton href="#order" className="rounded-full bg-[#211915] text-white hover:bg-black">
              Order From Menu
            </CTAButton>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {burgers.map((burger) => (
              <article key={burger.name} className="burger-menu-card group rounded-[2rem] border-4 border-[#211915] bg-white p-5 shadow-[8px_8px_0_#211915] transition duration-300 hover:-translate-y-1 hover:shadow-[12px_12px_0_#d92d20]">
                <BurgerPhotoPlaceholder label={burger.label} gradient={burger.gradient} />
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black uppercase leading-tight">{burger.name}</h3>
                    <p className="mt-3 leading-7 text-[#654026]">{burger.detail}</p>
                  </div>
                  <p className="shrink-0 rounded-full bg-[#f7c948] px-3 py-1 text-sm font-black text-[#211915]">{burger.price}</p>
                </div>
                <button type="button" className="mt-6 w-full rounded-full bg-[#d92d20] px-5 py-3 font-black text-white transition hover:-translate-y-0.5 hover:bg-[#b52319]">
                  Add to Order
                </button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f7c948] py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#211915]">Signature combo</p>
            <h2 className="mt-4 text-5xl font-black uppercase leading-[0.95] md:text-7xl">Make It a Craft Combo</h2>
            <p className="mt-6 text-lg font-bold leading-8 text-[#4e321f]">
              Pair your burger with crispy fries, loaded sauce, and a shake for the full Burger Craft experience.
            </p>
            <CTAButton href="#order" size="lg" className="mt-8 rounded-full bg-[#211915] text-white shadow-[7px_7px_0_#d92d20] hover:bg-black">
              Build Your Combo
            </CTAButton>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {comboItems.map((item, index) => (
              <article key={item} className="burger-combo-card rounded-[1.5rem] border-4 border-[#211915] bg-[#fffaf0] p-6 shadow-[7px_7px_0_#211915]">
                <p className="text-sm font-black uppercase tracking-[0.16em] text-[#d92d20]">Combo item 0{index + 1}</p>
                <h3 className="mt-6 text-3xl font-black uppercase">{item}</h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="order" className="bg-[#fffaf0] py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="font-black uppercase tracking-[0.24em] text-[#d92d20]">Pickup and delivery</p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-6xl">Burger Craft at Home</h2>
            <p className="mt-5 text-lg font-bold leading-8 text-[#654026]">
              Order online for pickup or delivery and bring the craft burger experience to your table.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {[
              ['Pickup', 'Order ahead and grab your meal fresh from the counter.', 'Start Pickup Order'],
              ['Delivery', 'Get burgers, fries, and shakes delivered hot.', 'Order Delivery'],
            ].map(([title, text, button]) => (
              <article key={title} className="rounded-[2rem] border-4 border-[#211915] bg-[#211915] p-8 text-white shadow-[10px_10px_0_#f7c948] transition hover:-translate-y-1">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f7c948]">Order option</p>
                <h3 className="mt-5 text-5xl font-black uppercase">{title}</h3>
                <p className="mt-4 max-w-xl text-lg leading-8 text-white/75">{text}</p>
                <button type="button" className="mt-8 rounded-full bg-[#d92d20] px-6 py-3 font-black text-white transition hover:bg-[#b52319]">
                  {button}
                </button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="locations" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="font-black uppercase tracking-[0.24em] text-[#d92d20]">Locations</p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-6xl">Visit Burger Craft</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-2">
            {locations.map((location) => (
              <article key={location.name} className="rounded-[2rem] border-4 border-[#211915] bg-white p-7 shadow-[8px_8px_0_#211915]">
                <h3 className="text-3xl font-black uppercase">{location.name}</h3>
                <p className="mt-4 text-lg font-bold text-[#654026]">{location.address}</p>
                <p className="mt-2 text-[#654026]">{location.hours}</p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <button type="button" className="rounded-full border-2 border-[#211915] bg-white px-5 py-3 font-black transition hover:bg-[#f7c948]">
                    Get Directions
                  </button>
                  <button type="button" className="rounded-full bg-[#d92d20] px-5 py-3 font-black text-white transition hover:bg-[#b52319]">
                    Order From This Location
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#211915] py-20 text-white md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#f7c948]">Events and catering</p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-tight md:text-6xl">Big Orders. Bigger Flavor.</h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-white/75">
              Planning a party, office lunch, or game night? Burger Craft can handle large burger orders, combo boxes, and custom meal packs.
            </p>
          </div>
          <CTAButton href="#order" size="lg" className="rounded-full bg-[#f7c948] text-[#211915] shadow-[7px_7px_0_#d92d20] hover:bg-[#ffe37a]">
            Plan a Group Order
          </CTAButton>
        </Container>
      </section>

      <section className="bg-[#d92d20] py-20 text-white md:py-28">
        <Container className="text-center">
          <p className="font-black uppercase tracking-[0.24em] text-[#f7c948]">Final call</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-5xl font-black uppercase leading-[0.95] md:text-7xl">Craving a Better Burger?</h2>
          <p className="mx-auto mt-5 max-w-xl text-lg font-bold leading-8 text-white/85">
            Your next handcrafted burger is only one click away.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButton href="#order" size="lg" className="rounded-full bg-[#211915] text-white hover:bg-black">
              Order Now
            </CTAButton>
            <CTAButton href="#menu" variant="outline" size="lg" className="rounded-full border-white bg-transparent text-white hover:bg-white hover:text-[#211915]">
              Explore Menu
            </CTAButton>
          </div>
        </Container>
      </section>

      <footer className="bg-[#fff4dc] py-12 text-[#211915]">
        <Container className="grid gap-8 md:grid-cols-[1.25fr_0.75fr_0.85fr_0.65fr]">
          <div>
            <p className="text-2xl font-black uppercase text-[#d92d20]">Burger Craft</p>
            <p className="mt-3 max-w-sm leading-7 text-[#654026]">
              Handmade burgers, crispy fries, sauces, shakes, and casual dine-in or takeout energy.
            </p>
            <p className="mt-6 text-sm font-bold text-[#8b725f]">Copyright 2026 Burger Craft. All rights reserved.</p>
          </div>
          <div>
            <p className="font-black uppercase">Quick links</p>
            <div className="mt-3 grid gap-2 text-[#654026]">
              <a href="#home" className="hover:text-[#d92d20]">Home</a>
              <a href="#menu" className="hover:text-[#d92d20]">Menu</a>
              <a href="#story" className="hover:text-[#d92d20]">Craft Story</a>
              <a href="#locations" className="hover:text-[#d92d20]">Locations</a>
            </div>
          </div>
          <div>
            <p className="font-black uppercase">Contact</p>
            <p className="mt-3 leading-7 text-[#654026]">hello@burgercraft.example<br />(555) 015-5500<br />Open daily for lunch and dinner</p>
          </div>
          <div>
            <p className="font-black uppercase">Social</p>
            <div className="mt-3 flex gap-3">
              {['IG', 'FB', 'TK'].map((item) => (
                <a key={item} href="#home" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#211915] text-sm font-black text-white transition hover:-translate-y-0.5 hover:bg-[#d92d20]">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </footer>
    </main>
  )
}
