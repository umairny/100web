import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Container, SubWebsiteNav } from '../../components'
import { imageUrl } from '../../assets/images'

const bakeryImages = {
  hero: imageUrl('restaurent/golden-crust-bakery/golden-crust-hero-bakery.png'),
  rewardPastry: imageUrl('restaurent/golden-crust-bakery/golden-rewards-pastry-card.png'),
  interior: imageUrl('restaurent/golden-crust-bakery/golden-crust-interior.png'),
  displayCounter: imageUrl('restaurent/golden-crust-bakery/bakery-display-counter.png'),
  benefitsBg: imageUrl('restaurent/golden-crust-bakery/rewards-benefits-bg.png'),
  finalCta: imageUrl('restaurent/golden-crust-bakery/golden-crust-final-cta.png'),
}

const menuItems = [
  {
    name: 'Butter Croissant',
    desc: 'Laminated butter layers with a delicate, honey-gold finish.',
    price: '$4.75',
    badge: 'Baker’s pick',
    image: imageUrl('restaurent/golden-crust-bakery/butter-croissant.png'),
    alt: 'Flaky golden butter croissant on a warm bakery surface',
  },
  {
    name: 'Sourdough Loaf',
    desc: 'Slow-fermented for 36 hours with a crackly crust and open crumb.',
    price: '$9.50',
    badge: 'Daily bake',
    image: imageUrl('restaurent/golden-crust-bakery/sourdough-loaf.png'),
    alt: 'Fresh scored sourdough loaf with a crisp artisan crust',
  },
  {
    name: 'Chocolate Éclair',
    desc: 'Vanilla bean cream, airy choux and a dark chocolate glaze.',
    price: '$6.25',
    badge: 'Classic',
    image: imageUrl('restaurent/golden-crust-bakery/chocolate-eclair.png'),
    alt: 'Chocolate eclair with glossy dark chocolate glaze',
  },
  {
    name: 'Strawberry Cloud',
    desc: 'Soft vanilla sponge layered with strawberry cream and fresh jam.',
    price: '$8.00',
    badge: 'Seasonal',
    image: imageUrl('restaurent/golden-crust-bakery/strawberry-cream-cake.png'),
    alt: 'Slice of strawberry cream cake with soft sponge and berry filling',
  },
  {
    name: 'Cinnamon Roll',
    desc: 'Brown sugar swirl, cultured butter and a light vanilla glaze.',
    price: '$5.25',
    badge: 'Morning favorite',
    image: imageUrl('restaurent/golden-crust-bakery/cinnamon-roll.png'),
    alt: 'Cinnamon roll with vanilla glaze and cinnamon sugar swirl',
  },
  {
    name: 'Iced Oat Latte',
    desc: 'Double espresso, creamy oat milk and a caramel-smooth finish.',
    price: '$5.50',
    badge: 'Barista bar',
    image: imageUrl('restaurent/golden-crust-bakery/iced-latte.png'),
    alt: 'Iced latte in a clear glass with creamy coffee layers',
  },
]

const rewards = [
  ['01', 'Join in a minute', 'Create your free Golden Rewards account in a few simple taps.'],
  ['02', 'Collect your crumbs', 'Earn 10 crumbs for every dollar, in the bakery or online.'],
  ['03', 'Taste the rewards', 'Turn crumbs into fresh pastries, coffee and birthday treats.'],
]

const benefits = [
  ['10×', 'Crumbs on every dollar'],
  ['2×', 'Points every Friday'],
  ['Free', 'Birthday cake slice'],
  ['First', 'Taste of seasonal bakes'],
]

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path d="M5 12h13M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function WheatMark() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-6 w-6">
      <path d="M16 29V8M16 13c-5-.3-8-3.1-8.5-7 5-.2 8.2 2.6 8.5 7Zm0 6c-5-.3-8-3.1-8.5-7 5-.2 8.2 2.6 8.5 7Zm0 6c-5-.3-8-3.1-8.5-7 5-.2 8.2 2.6 8.5 7Zm0-12c5-.3 8-3.1 8.5-7-5-.2-8.2 2.6-8.5 7Zm0 6c5-.3 8-3.1 8.5-7-5-.2-8.2 2.6-8.5 7Zm0 6c5-.3 8-3.1 8.5-7-5-.2-8.2 2.6-8.5 7Z" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p className={`flex items-center gap-3 text-[0.66rem] font-black uppercase tracking-[0.24em] ${light ? 'text-[#f4c96e]' : 'text-[#a8652d]'}`}>
      <span className={`h-px w-9 ${light ? 'bg-[#f4c96e]' : 'bg-[#b87336]'}`} />
      {children}
    </p>
  )
}

export function GoldenCrustBakery() {
  const [addedItem, setAddedItem] = useState('')

  const addToOrder = (name: string) => {
    setAddedItem(name)
    window.setTimeout(() => setAddedItem(''), 2600)
  }

  return (
    <main className="brand-motion motion-goldencrust overflow-hidden bg-[#fbf5e9] text-[#2d1a11]">
      <SubWebsiteNav
        brand="Golden Crust"
        links={[
          { label: 'Home', href: '#home' },
          { label: 'Menu', href: '#menu' },
          { label: 'Our Bakery', href: '#bakery' },
          { label: 'Rewards', href: '#rewards' },
          { label: 'Visit', href: '#visit' },
        ]}
        ctaLabel="Order Online"
        ctaHref="#menu"
        className="border-b border-[#e7d8bd] bg-[#fbf5e9]/95 shadow-sm shadow-[#4b2816]/5"
        brandClassName="font-black uppercase tracking-[0.12em] text-[#342016]"
        linkClassName="rounded-full px-3 py-2 text-[#755039] transition hover:bg-[#f1e3c9] hover:text-[#2d1a11]"
        activeLinkClassName="golden-nav-active"
        ctaClassName="bg-[#342016] text-white shadow-lg shadow-[#342016]/15 hover:bg-[#b87336]"
        activeCtaClassName="golden-nav-cta-active"
        menuButtonClassName="border-[#dbc29b] text-[#342016] hover:bg-[#f1e3c9]"
        mobilePanelClassName="border border-[#e7d8bd] bg-[#fbf5e9]"
      />

      <section id="home" className="relative isolate min-h-[820px] overflow-hidden bg-[#2d1a11] pt-14 text-white lg:min-h-[880px]">
        <img src={bakeryImages.hero} alt="Golden Crust Bakery counter filled with artisan bread and pastries" className="absolute inset-0 -z-30 h-full w-full object-cover object-[65%_center]" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(35,18,10,0.98)_0%,rgba(35,18,10,0.92)_37%,rgba(35,18,10,0.3)_73%,rgba(35,18,10,0.48)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#2d1a11_0%,transparent_25%,rgba(0,0,0,0.08)_100%)]" />

        <Container className="flex min-h-[800px] items-end pb-16 pt-28 lg:min-h-[860px] lg:items-center lg:pb-12">
          <div className="max-w-3xl">
            <Link to="/restaurant" className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/15 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.14em] text-white/70 backdrop-blur transition hover:border-white/30 hover:text-white">
              <span>←</span> Restaurant collection
            </Link>
            <Eyebrow light>Made slowly · served warmly</Eyebrow>
            <h1 className="mt-6 text-[clamp(3.8rem,8vw,7.7rem)] font-black leading-[0.84] tracking-[-0.07em]">
              Your daily<br />dose of <span className="text-[#f2bd52]">golden.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              Small-batch sourdough, buttery layers, joyful cakes and really good coffee—baked fresh every morning in the heart of Old Market.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#menu" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f2bd52] px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-[#2d1a11] shadow-[0_16px_45px_rgba(242,189,82,0.2)] transition hover:-translate-y-1 hover:bg-[#ffd06e]">
                Explore the menu <ArrowIcon />
              </a>
              <a href="#rewards" className="inline-flex items-center justify-center rounded-full border border-white/25 bg-black/10 px-7 py-4 text-xs font-black uppercase tracking-[0.14em] backdrop-blur transition hover:-translate-y-1 hover:bg-white/10">
                Join rewards
              </a>
            </div>

            <div className="mt-12 grid max-w-2xl grid-cols-3 border-y border-white/14 py-5">
              {[['7 AM', 'First batch'], ['36 hr', 'Sourdough'], ['Local', 'Ingredients']].map(([value, label]) => (
                <div key={label} className="border-r border-white/14 px-3 first:pl-0 last:border-0 sm:px-6">
                  <p className="text-lg font-black text-[#f2bd52] sm:text-2xl">{value}</p>
                  <p className="mt-1 text-[0.55rem] font-bold uppercase tracking-[0.15em] text-white/42 sm:text-[0.62rem]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>

        <div className="absolute bottom-10 right-8 hidden w-64 rounded-[1.5rem] border border-white/15 bg-[#24140d]/80 p-5 shadow-2xl backdrop-blur-xl xl:block">
          <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#f2bd52] text-[#2d1a11]"><WheatMark /></span><div><p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-white/42">Fresh from the oven</p><p className="mt-1 text-sm font-bold">Next batch · 10:30 AM</p></div></div>
        </div>
      </section>

      <div className="border-y border-[#dfcda9] bg-[#f2bd52] py-3 text-[#2d1a11]">
        <div className="flex min-w-max justify-center gap-8 px-5 text-[0.62rem] font-black uppercase tracking-[0.2em] sm:gap-14">
          {['Baked this morning', 'Cultured butter', 'Locally milled flour', 'Coffee roasted nearby'].map((item) => <span key={item} className="flex items-center gap-8 sm:gap-14">{item}<span className="text-[#8b5129]">✦</span></span>)}
        </div>
      </div>

      <section id="menu" className="bg-[#fbf5e9] py-20 sm:py-24 lg:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><Eyebrow>Today at the counter</Eyebrow><h2 className="mt-5 text-4xl font-black leading-[0.93] tracking-[-0.05em] sm:text-6xl">Fresh favorites,<br />still warm.</h2></div>
            <div className="max-w-md md:text-right"><p className="text-sm leading-7 text-[#816550]">Our counter changes with the season. These are the beloved regulars we make every single day.</p><p className="mt-3 text-xs font-bold text-[#a8652d]">Pickup ready in 20–30 minutes</p></div>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {menuItems.map((item) => (
              <article key={item.name} className="golden-menu-card group overflow-hidden rounded-[1.6rem] border border-[#e7d7bc] bg-[#fffdf8] shadow-[0_16px_50px_rgba(64,36,19,0.07)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_24px_65px_rgba(64,36,19,0.13)]">
                <div className="golden-food-placeholder relative aspect-[1.35] overflow-hidden bg-[#ead8b6]">
                  <img src={item.image} alt={item.alt} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-[#fffaf0]/90 px-3 py-2 text-[0.56rem] font-black uppercase tracking-[0.16em] text-[#704327] shadow-sm backdrop-blur">{item.badge}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-4"><h3 className="text-2xl font-black tracking-[-0.025em]">{item.name}</h3><span className="shrink-0 text-lg font-black text-[#a8652d]">{item.price}</span></div>
                  <p className="mt-3 min-h-12 text-sm leading-6 text-[#816550]">{item.desc}</p>
                  <button type="button" onClick={() => addToOrder(item.name)} className="mt-5 flex w-full items-center justify-between rounded-full border border-[#d8c3a1] px-5 py-3 text-xs font-black uppercase tracking-[0.12em] transition hover:border-[#342016] hover:bg-[#342016] hover:text-white">
                    Add to order <span className="text-lg leading-none">+</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="bakery" className="bg-[#efe2ca] py-20 sm:py-24 lg:py-28">
        <Container className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20">
          <div className="relative pb-8 pr-0 sm:pr-10">
            <img src={bakeryImages.interior} alt="Warm Golden Crust artisan bakery interior" loading="lazy" className="aspect-[4/3] w-full rounded-[1.7rem] object-cover shadow-2xl shadow-[#482513]/15" />
            <img src={bakeryImages.displayCounter} alt="Counter filled with Golden Crust pastries" loading="lazy" className="absolute -bottom-2 right-0 hidden aspect-square w-[42%] rounded-[1.3rem] border-[6px] border-[#efe2ca] object-cover shadow-xl sm:block" />
            <div className="absolute -left-3 bottom-16 rounded-xl bg-[#f2bd52] px-4 py-3 text-[#2d1a11] shadow-lg sm:left-5"><p className="text-2xl font-black">Since ’98</p><p className="text-[0.55rem] font-black uppercase tracking-[0.16em]">Old Market mornings</p></div>
          </div>
          <div>
            <Eyebrow>Our bakery</Eyebrow>
            <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl">The good stuff takes time.</h2>
            <p className="mt-6 text-base leading-8 text-[#755a47]">Before the city wakes, our ovens are already humming. We fold, proof and bake in small batches, using techniques that reward patience and ingredients we can name.</p>
            <p className="mt-4 text-base leading-8 text-[#755a47]">Come for the bread. Stay for the warm light, a window seat and the very real possibility of a second pastry.</p>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[#cfb992] pt-7">
              {['Small-batch daily', 'Naturally leavened', 'Seasonal produce', 'Made by hand'].map((item) => <p key={item} className="flex items-center gap-3 text-sm font-bold"><span className="h-2 w-2 rounded-full bg-[#b87336]" />{item}</p>)}
            </div>
          </div>
        </Container>
      </section>

      <section id="rewards" className="relative overflow-hidden bg-[#2d1a11] py-20 text-white sm:py-24 lg:py-28">
        <img src={bakeryImages.benefitsBg} alt="" aria-hidden="true" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-[0.07] mix-blend-luminosity" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_center,rgba(242,189,82,0.12),transparent_60%)]" />
        <Container className="relative">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div><Eyebrow light>Golden Rewards</Eyebrow><h2 className="mt-5 text-4xl font-black leading-[0.93] tracking-[-0.05em] sm:text-6xl">A little thank-you in every bite.</h2></div>
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[1.2rem] bg-white/10 sm:grid-cols-4">
              {benefits.map(([value, label]) => <div key={label} className="bg-[#392117]/80 p-5"><p className="text-3xl font-black text-[#f2bd52]">{value}</p><p className="mt-2 text-xs leading-5 text-white/50">{label}</p></div>)}
            </div>
          </div>

          <div className="relative mt-14 grid gap-4 lg:grid-cols-3">
            <div className="absolute left-[16%] right-[16%] top-7 hidden h-px bg-white/12 lg:block" />
            {rewards.map(([number, title, text]) => (
              <article key={number} className="relative rounded-[1.4rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur transition hover:-translate-y-1 hover:border-[#f2bd52]/40 hover:bg-white/[0.07]">
                <span className="relative z-10 grid h-14 w-14 place-items-center rounded-full border border-[#f2bd52]/35 bg-[#2d1a11] text-sm font-black text-[#f2bd52]">{number}</span>
                <h3 className="mt-8 text-2xl font-black">{title}</h3><p className="mt-3 text-sm leading-7 text-white/52">{text}</p>
              </article>
            ))}
          </div>

          <div id="join" className="golden-feature-card mt-14 grid overflow-hidden rounded-[1.8rem] bg-[#f2bd52] text-[#2d1a11] shadow-2xl shadow-black/20 lg:grid-cols-[1fr_0.82fr]">
            <div className="flex flex-col justify-center p-7 sm:p-10 lg:p-14">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#815021]">A warm welcome</p>
              <h3 className="mt-4 text-4xl font-black leading-[0.95] tracking-[-0.045em] sm:text-5xl">Your first pastry is on us.</h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-[#684019]">Join Golden Rewards today and unlock a complimentary pastry after your first purchase.</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row"><button type="button" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#2d1a11] px-7 py-4 text-xs font-black uppercase tracking-[0.13em] text-white transition hover:-translate-y-1 hover:bg-[#4b2b1c]">Join for free <ArrowIcon /></button><p className="self-center text-xs font-bold text-[#815021]">No fee. Just better mornings.</p></div>
            </div>
            <div className="relative min-h-80 overflow-hidden"><img src={bakeryImages.rewardPastry} alt="Fresh pastry available as a Golden Rewards welcome gift" loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#f2bd52]/30 to-transparent lg:bg-gradient-to-r" /><span className="absolute right-5 top-5 rounded-full bg-[#fffaf0]/90 px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.16em] backdrop-blur">Welcome reward</span></div>
          </div>
        </Container>
      </section>

      <section id="visit" className="relative isolate overflow-hidden py-24 text-white sm:py-28">
        <img src={bakeryImages.finalCta} alt="Golden Crust pastries on the bakery counter" loading="lazy" className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-[#2d1a11]/78" />
        <Container className="text-center">
          <p className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#f2bd52] text-[#2d1a11]"><WheatMark /></p>
          <h2 className="mx-auto mt-7 max-w-3xl text-4xl font-black leading-[0.94] tracking-[-0.05em] sm:text-6xl">There’s always something warm waiting.</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/58">88 Brioche Lane · Old Market District<br />Open daily from 7 AM to 3 PM</p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row"><a href="#menu" className="inline-flex items-center justify-center gap-3 rounded-full bg-[#f2bd52] px-7 py-4 text-xs font-black uppercase tracking-[0.14em] text-[#2d1a11] transition hover:-translate-y-1 hover:bg-[#ffd06e]">Order for pickup <ArrowIcon /></a><a href="tel:5550142020" className="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-4 text-xs font-black uppercase tracking-[0.14em] transition hover:bg-white/10">Call the bakery</a></div>
        </Container>
      </section>

      <footer className="bg-[#fbf5e9] py-12">
        <Container>
          <div className="grid gap-10 border-b border-[#dfcdae] pb-10 sm:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.75fr_0.75fr]">
            <div><div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-full bg-[#342016] text-[#f2bd52]"><WheatMark /></span><div><p className="font-black uppercase tracking-[0.08em]">Golden Crust</p><p className="text-[0.55rem] font-bold uppercase tracking-[0.24em] text-[#9c7659]">Bakery &amp; Coffee</p></div></div><p className="mt-5 max-w-sm text-sm leading-7 text-[#816550]">Slow bread, flaky mornings and neighborhood warmth since 1998.</p></div>
            <div><p className="text-xs font-black uppercase tracking-[0.16em] text-[#a8652d]">Explore</p><div className="mt-4 grid gap-2 text-sm text-[#755a47]"><a href="#menu" className="hover:text-[#2d1a11]">Menu</a><a href="#bakery" className="hover:text-[#2d1a11]">Our bakery</a><a href="#rewards" className="hover:text-[#2d1a11]">Rewards</a></div></div>
            <div><p className="text-xs font-black uppercase tracking-[0.16em] text-[#a8652d]">Visit</p><p className="mt-4 text-sm leading-7 text-[#755a47]">88 Brioche Lane<br />Old Market District<br />Daily · 7 AM–3 PM</p></div>
            <div><p className="text-xs font-black uppercase tracking-[0.16em] text-[#a8652d]">Say hello</p><p className="mt-4 text-sm leading-7 text-[#755a47]">hello@goldencrust.test<br />(555) 014-2020</p><div className="mt-4 flex gap-3 text-xs font-black"><a href="#visit">IG</a><a href="#visit">FB</a><a href="#visit">TK</a></div></div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-7 text-xs text-[#9a7d66] sm:flex-row"><p>© 2026 Golden Crust Bakery. Baked with care.</p><Link to="/restaurant" className="font-bold transition hover:text-[#2d1a11]">← Restaurant collection</Link></div>
        </Container>
      </footer>

      <div aria-live="polite" className={`fixed bottom-6 right-6 z-[70] rounded-full bg-[#342016] px-5 py-3 text-sm font-bold text-white shadow-2xl transition duration-300 ${addedItem ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}>
        {addedItem ? `${addedItem} added to your order` : ''}
      </div>
    </main>
  )
}
