import { Link } from 'react-router-dom'
import { Container, CTAButton, SubWebsiteNav } from '../../components'
import { imageUrl } from '../../assets/images'

const bakeryImages = {
  hero: imageUrl('restaurent/golden-crust-bakery/golden-crust-hero-bakery.png'),
  rewardPastry: imageUrl('restaurent/golden-crust-bakery/golden-rewards-pastry-card.png'),
  interior: imageUrl('restaurent/golden-crust-bakery/golden-crust-interior.png'),
  displayCounter: imageUrl('restaurent/golden-crust-bakery/bakery-display-counter.png'),
  benefitsBg: imageUrl('restaurent/golden-crust-bakery/rewards-benefits-bg.png'),
  finalCta: imageUrl('restaurent/golden-crust-bakery/golden-crust-final-cta.png'),
}

const rewardSteps = [
  {
    title: 'Join for Free',
    text: 'Create your free account in seconds.',
    marker: '01',
  },
  {
    title: 'Earn Points',
    text: 'Earn points on every online or in-store bakery order.',
    marker: '02',
  },
  {
    title: 'Redeem Treats',
    text: 'Use your points for pastries, coffee, cakes, and seasonal specials.',
    marker: '03',
  },
]

const benefits = [
  'Earn 10 crumbs for every $1 spent',
  'Birthday cake slice reward',
  'Early access to seasonal pastries',
  'Member-only bakery bundles',
  'Surprise weekend treats',
  'Coffee and croissant deals',
]

const menuItems = [
  {
    name: 'Butter Croissant',
    desc: 'Laminated butter layers with a glossy golden finish.',
    price: '$4.75',
    tag: 'Butter Croissant',
    image: imageUrl('restaurent/golden-crust-bakery/butter-croissant.png'),
    alt: 'Flaky golden butter croissant on a warm bakery surface',
  },
  {
    name: 'Sourdough Loaf',
    desc: 'Slow-fermented loaf with a crackly crust and tender crumb.',
    price: '$9.50',
    tag: 'Sourdough Loaf',
    image: imageUrl('restaurent/golden-crust-bakery/sourdough-loaf.png'),
    alt: 'Fresh scored sourdough loaf with a crisp artisan crust',
  },
  {
    name: 'Chocolate Eclair',
    desc: 'Vanilla cream, choux pastry, and dark chocolate glaze.',
    price: '$6.25',
    tag: 'Chocolate Eclair',
    image: imageUrl('restaurent/golden-crust-bakery/chocolate-eclair.png'),
    alt: 'Chocolate eclair with glossy dark chocolate glaze',
  },
  {
    name: 'Strawberry Cream Cake',
    desc: 'Soft vanilla sponge layered with berry cream and jam.',
    price: '$8.00',
    tag: 'Strawberry Cream Cake',
    image: imageUrl('restaurent/golden-crust-bakery/strawberry-cream-cake.png'),
    alt: 'Slice of strawberry cream cake with soft sponge and berry filling',
  },
  {
    name: 'Cinnamon Roll',
    desc: 'Brown sugar swirl, cinnamon butter, and vanilla glaze.',
    price: '$5.25',
    tag: 'Cinnamon Roll',
    image: imageUrl('restaurent/golden-crust-bakery/cinnamon-roll.png'),
    alt: 'Cinnamon roll with vanilla glaze and cinnamon sugar swirl',
  },
  {
    name: 'Iced Latte',
    desc: 'Cold espresso, creamy milk, and a caramel-smooth finish.',
    price: '$5.50',
    tag: 'Iced Latte',
    image: imageUrl('restaurent/golden-crust-bakery/iced-latte.png'),
    alt: 'Iced latte in a clear glass with creamy coffee layers',
  },
]

function ProductImage({ label, image, alt }: { label: string; image: string; alt: string }) {
  return (
    <div className="golden-food-placeholder relative aspect-[4/3] overflow-hidden rounded-[1.5rem] bg-[#fff1c8] shadow-inner shadow-[#7b4826]/10">
      <img
        src={image}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#7b4826] shadow-sm backdrop-blur">
        {label}
      </div>
    </div>
  )
}

export function GoldenCrustBakery() {
  return (
    <main className="brand-motion motion-goldencrust overflow-hidden bg-[#fff8e8] text-[#2f1c12]">
      <SubWebsiteNav
        brand="Golden Crust Bakery"
        links={[
          { label: 'Home', href: '#join' },
          { label: 'Rewards', href: '#rewards' },
          { label: 'Perks', href: '#benefits' },
          { label: 'Menu', href: '#menu' },
          { label: 'Order Online', href: '#order' },
        ]}
        ctaLabel="Join Rewards"
        ctaHref="#join"
        className="border-b border-[#efd9a8] bg-[#fff8e8]/92 shadow-sm shadow-[#5b2f1f]/10"
        brandClassName="text-[#4b2a18]"
        linkClassName="rounded-full px-3 py-2 text-[#6d3b20] transition hover:bg-[#f5dfad] hover:text-[#2f1c12]"
        activeLinkClassName="golden-nav-active"
        ctaClassName="bg-[#f3b536] text-[#2f1c12] shadow-lg shadow-[#b87528]/20 hover:bg-[#ffd05a]"
        activeCtaClassName="golden-nav-cta-active"
        menuButtonClassName="border-[#e3bd75] text-[#4b2a18] hover:bg-[#f5dfad]"
        mobilePanelClassName="border border-[#efd9a8] bg-[#fff8e8]"
      />

      <section id="join" className="relative min-h-screen overflow-hidden bg-[#fff8e8] pt-28 md:pt-32">
        <div className="absolute inset-x-0 top-0 h-36 bg-[#3b2214]" />
        <div className="absolute inset-x-0 top-24 h-16 bg-[repeating-linear-gradient(90deg,#f6c257_0_58px,#fff4d2_58px_116px,#b66b2c_116px_174px)] shadow-xl shadow-[#5b2f1f]/20" />
        <div className="absolute inset-0 top-36 bg-[radial-gradient(circle_at_80%_20%,rgba(246,194,87,0.42),transparent_28%),linear-gradient(180deg,#fff8e8_0%,#fff2cf_48%,#fffaf1_100%)]" />
        <div className="golden-orbit absolute left-4 top-52 h-24 w-24 rounded-full border-[18px] border-[#f6c257]/40" />
        <div className="golden-soft-pulse absolute bottom-24 right-8 hidden h-40 w-40 rounded-full bg-[#7b4826]/10 lg:block" />
        <div className="golden-floating-badge absolute right-[14%] top-48 hidden rotate-12 rounded-full bg-[#fffaf1] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-[#7b4826] shadow-xl lg:block">
          250 crumbs = free pastry
        </div>

        <Container className="relative grid min-h-[calc(100vh-7rem)] items-center gap-12 pb-20 pt-14 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="max-w-3xl">
            <Link
              to="/restaurant"
              className="mb-7 inline-flex rounded-full border border-[#e5bf73] bg-white/70 px-4 py-2 text-sm font-black text-[#6d3b20] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#fff4d2]"
            >
              Back to Restaurant Collection
            </Link>
            <p className="inline-flex rounded-full bg-[#3b2214] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#ffd76a] shadow-xl shadow-[#5b2f1f]/15">
              Freshly Baked Rewards
            </p>
            <h1 className="mt-6 text-5xl font-black leading-[0.92] text-[#2f1c12] sm:text-6xl lg:text-7xl">
              Earn Sweet Rewards With Every Bite
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6d3b20] md:text-xl">
              Join Golden Rewards and collect points every time you order your favorite breads, pastries, cakes, and coffee.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <CTAButton
                href="#rewards"
                size="lg"
                className="rounded-full bg-[#f3b536] text-[#2f1c12] shadow-2xl shadow-[#b87528]/25 hover:bg-[#ffd05a]"
              >
                Join Golden Rewards
              </CTAButton>
              <CTAButton
                href="#menu"
                variant="outline"
                size="lg"
                className="rounded-full border-[#4b2a18] bg-white/70 text-[#4b2a18] hover:bg-[#4b2a18] hover:text-white"
              >
                View Bakery Menu
              </CTAButton>
            </div>
            <div className="golden-crumb-row mt-10 grid max-w-xl grid-cols-3 gap-3">
              {['10 crumbs per $1', 'Free birthday slice', 'Seasonal previews'].map((item) => (
                <div key={item} className="rounded-2xl border border-[#e6c27b] bg-white/70 p-4 text-sm font-black text-[#4b2a18] shadow-sm">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="golden-hero-visual relative mx-auto min-h-[520px] w-full max-w-2xl">
            <div className="absolute inset-x-6 bottom-8 top-4 rounded-[3rem] bg-[#4b2a18] shadow-2xl shadow-[#5b2f1f]/25" />
            <div className="absolute inset-x-12 top-12 rounded-[2.5rem] bg-[#fffaf1] p-5 shadow-2xl">
              <div className="overflow-hidden rounded-[2rem] bg-[#f5d98c] p-3">
                <img
                  src={bakeryImages.hero}
                  alt="Golden Crust Bakery display with fresh croissants, bread, cakes, and pastries"
                  className="h-80 w-full rounded-[1.6rem] object-cover shadow-xl shadow-[#5b2f1f]/20 sm:h-[24rem]"
                />
              </div>
            </div>
            <div className="absolute left-0 top-28 rounded-[1.5rem] bg-white p-5 shadow-2xl shadow-[#5b2f1f]/15">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b87528]">Member badge</p>
              <p className="mt-2 text-3xl font-black text-[#2f1c12]">Golden</p>
              <p className="mt-1 text-sm font-bold text-[#7b4826]">128 crumbs earned</p>
            </div>
            <div className="absolute bottom-2 right-2 rounded-[1.5rem] bg-[#f3b536] p-5 text-[#2f1c12] shadow-2xl shadow-[#b87528]/25">
              <p className="text-sm font-black uppercase tracking-[0.16em]">Today only</p>
              <p className="mt-2 text-2xl font-black">Double crumbs on cakes</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#fffaf1] py-20 md:py-28">
        <Container className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.22em] text-[#b87528]">Inside the bakery</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#2f1c12] md:text-5xl">
              Warm counters, small batches, and a pastry case worth lingering over.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6d3b20]">
              Step into Golden Crust for fresh bread, laminated pastry, celebration cakes, and a display counter that changes with the season.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src={bakeryImages.interior}
              alt="Warm Golden Crust Bakery interior with artisan bakery styling"
              loading="lazy"
              className="h-72 w-full rounded-[2rem] object-cover shadow-2xl shadow-[#5b2f1f]/12 sm:h-96"
            />
            <img
              src={bakeryImages.displayCounter}
              alt="Bakery display counter filled with fresh pastries and seasonal baked goods"
              loading="lazy"
              className="h-72 w-full rounded-[2rem] object-cover shadow-2xl shadow-[#5b2f1f]/12 sm:mt-10 sm:h-96"
            />
          </div>
        </Container>
      </section>

      <section id="rewards" className="relative overflow-hidden bg-[#fffaf1] py-20 md:py-28">
        <img
          src={bakeryImages.benefitsBg}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-[#fffaf1]/82" />
        <Container className="relative">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="font-black uppercase tracking-[0.22em] text-[#b87528]">How Golden Rewards works</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#2f1c12] md:text-5xl">Join once, earn every delicious time.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {rewardSteps.map((step) => (
              <article key={step.title} className="golden-reward-card rounded-[2rem] border border-[#ead09a] bg-white/92 p-7 shadow-sm shadow-[#5b2f1f]/5 backdrop-blur transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#5b2f1f]/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3b536] text-lg font-black text-[#2f1c12] shadow-lg shadow-[#b87528]/15">
                  {step.marker}
                </div>
                <h3 className="mt-8 text-2xl font-black text-[#2f1c12]">{step.title}</h3>
                <p className="mt-3 leading-7 text-[#6d3b20]">{step.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="golden-feature-card grid overflow-hidden rounded-[2.5rem] bg-[#3b2214] shadow-2xl shadow-[#5b2f1f]/20 lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 text-[#fff8e8] md:p-12 lg:p-16">
              <p className="inline-flex rounded-full bg-[#f3b536] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2f1c12]">
                Welcome reward
              </p>
              <h2 className="mt-6 text-4xl font-black leading-tight md:text-6xl">Your First Treat Is On Us</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#f8dfac]">
                Sign up today and unlock a welcome pastry reward after your first order.
              </p>
              <CTAButton href="#join" size="lg" className="mt-9 rounded-full bg-[#f3b536] text-[#2f1c12] hover:bg-[#ffd05a]">
                Start Earning Today
              </CTAButton>
            </div>
            <div className="relative min-h-[360px] overflow-hidden bg-[#f3b536] p-6 md:p-8">
              <img
                src={bakeryImages.rewardPastry}
                alt="Golden Rewards welcome pastry reward with a freshly baked pastry"
                loading="lazy"
                className="h-full min-h-[320px] w-full rounded-[2rem] object-cover shadow-2xl shadow-[#5b2f1f]/25"
              />
              <div className="absolute left-12 top-12 rounded-full bg-[#3b2214]/92 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#ffd76a] shadow-lg backdrop-blur">
                Welcome pastry reward
              </div>
              <div className="absolute bottom-10 right-8 rotate-6 rounded-[1.25rem] bg-white p-4 text-[#2f1c12] shadow-xl">
                <p className="text-sm font-black uppercase tracking-[0.14em] text-[#b87528]">Unlocked</p>
                <p className="mt-1 text-2xl font-black">Free pastry</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="benefits" className="bg-[#fffaf1] py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="font-black uppercase tracking-[0.22em] text-[#b87528]">Crumbs, cakes, and perks</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#2f1c12] md:text-5xl">Rewards that feel fresh from the oven.</h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <article key={benefit} className="golden-benefit-card group rounded-[1.75rem] border border-[#ead09a] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#f3b536] hover:shadow-2xl hover:shadow-[#5b2f1f]/10">
                <div className="mb-8 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#fff0c2] text-lg font-black text-[#7b4826]">{index + 1}</span>
                  <span className="h-3 w-3 rounded-full bg-[#f3b536] transition group-hover:scale-[1.8]" />
                </div>
                <h3 className="text-xl font-black leading-tight text-[#2f1c12]">{benefit}</h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.22em] text-[#b87528]">Rewards account</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#2f1c12] md:text-5xl">Track Your Crumbs Anytime</h2>
            <p className="mt-5 max-w-xl text-lg leading-8 text-[#6d3b20]">
              See your points, unlock rewards, and discover fresh bakery offers from your account.
            </p>
          </div>
          <div className="golden-account-panel mx-auto w-full max-w-md rounded-[2.5rem] bg-[#3b2214] p-4 shadow-2xl shadow-[#5b2f1f]/20">
            <div className="rounded-[2rem] bg-[#fff8e8] p-5">
              <div className="mx-auto mb-4 h-1.5 w-20 rounded-full bg-[#d7bd90]" />
              <div className="rounded-[1.5rem] bg-gradient-to-br from-[#f3b536] to-[#b87528] p-5 text-[#2f1c12]">
                <p className="text-sm font-black uppercase tracking-[0.16em]">Golden Rewards</p>
                <p className="mt-4 text-5xl font-black">1,240</p>
                <p className="font-bold">crumbs in your account</p>
              </div>
              <div className="mt-5 grid gap-3">
                {['Free coffee ready', '80 crumbs to cake slice', 'Weekend bundle unlocked'].map((item) => (
                  <div key={item} className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
                    <span className="font-bold text-[#4b2a18]">{item}</span>
                    <span className="h-3 w-3 rounded-full bg-[#f3b536]" />
                  </div>
                ))}
              </div>
              <button type="button" className="mt-5 w-full rounded-full bg-[#3b2214] px-5 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-[#24140d]">
                Open Rewards Panel
              </button>
            </div>
          </div>
        </Container>
      </section>

      <section id="menu" className="bg-[#fffaf1] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.22em] text-[#b87528]">Menu preview</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#2f1c12] md:text-5xl">Fresh favorites for your next order.</h2>
              <CTAButton href="#order" variant="outline" className="mt-6 rounded-full border-[#4b2a18] bg-white text-[#4b2a18] hover:bg-[#4b2a18] hover:text-white">
                Order Online
              </CTAButton>
            </div>
            <img
              src={bakeryImages.displayCounter}
              alt="Golden Crust Bakery pastry display counter with fresh menu favorites"
              loading="lazy"
              className="h-72 w-full rounded-[2rem] object-cover shadow-2xl shadow-[#5b2f1f]/12"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {menuItems.map((item) => (
              <article key={item.name} className="golden-menu-card group rounded-[2rem] border border-[#ead09a] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#5b2f1f]/10">
                <ProductImage label={item.tag} image={item.image} alt={item.alt} />
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-[#2f1c12]">{item.name}</h3>
                    <p className="mt-2 leading-7 text-[#6d3b20]">{item.desc}</p>
                  </div>
                  <p className="shrink-0 rounded-full bg-[#f3b536] px-3 py-1 text-sm font-black text-[#2f1c12]">{item.price}</p>
                </div>
                <button type="button" className="mt-5 w-full rounded-full border border-[#4b2a18] bg-[#4b2a18] px-5 py-3 font-black text-white transition hover:-translate-y-0.5 hover:bg-[#2f1c12]">
                  Add to Order
                </button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="order" className="relative overflow-hidden bg-[#3b2214] py-20 text-[#fff8e8] md:py-28">
        <img
          src={bakeryImages.finalCta}
          alt="Fresh Golden Crust Bakery pastries ready for rewards members"
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-[#3b2214]/78" />
        <div className="absolute inset-x-0 top-0 h-8 bg-[repeating-linear-gradient(90deg,#f6c257_0_56px,#fff4d2_56px_112px,#b66b2c_112px_168px)]" />
        <Container className="relative text-center">
          <p className="font-black uppercase tracking-[0.22em] text-[#f3b536]">Final call</p>
          <h2 className="mx-auto mt-3 max-w-3xl text-4xl font-black leading-tight md:text-6xl">Ready to Taste the Rewards?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#f8dfac]">
            Fresh bread, warm pastries, and golden rewards are waiting.
          </p>
          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <CTAButton href="#join" size="lg" className="rounded-full bg-[#f3b536] text-[#2f1c12] hover:bg-[#ffd05a]">
              Join Golden Rewards
            </CTAButton>
            <CTAButton href="#menu" variant="outline" size="lg" className="rounded-full border-[#fff8e8] bg-transparent text-[#fff8e8] hover:bg-[#fff8e8] hover:text-[#2f1c12]">
              Order Online
            </CTAButton>
          </div>
        </Container>
      </section>

      <footer id="footer" className="bg-[#fff8e8] py-12 text-[#2f1c12]">
        <Container className="grid gap-8 md:grid-cols-[1.3fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <p className="text-2xl font-black">Golden Crust Bakery</p>
            <p className="mt-3 max-w-sm leading-7 text-[#6d3b20]">
              Artisan bread, warm pastries, celebration cakes, and golden rewards baked for everyday joy.
            </p>
            <p className="mt-6 text-sm font-bold text-[#8c684d]">Copyright 2026 Golden Crust Bakery. All rights reserved.</p>
          </div>
          <div>
            <p className="font-black text-[#7b4826]">Links</p>
            <div className="mt-3 grid gap-2 text-[#6d3b20]">
              <a href="#menu" className="hover:text-[#2f1c12]">Menu</a>
              <a href="#rewards" className="hover:text-[#2f1c12]">Rewards</a>
              <a href="#benefits" className="hover:text-[#2f1c12]">Catering</a>
              <a href="#footer" className="hover:text-[#2f1c12]">Contact</a>
            </div>
          </div>
          <div>
            <p className="font-black text-[#7b4826]">Visit</p>
            <p className="mt-3 leading-7 text-[#6d3b20]">88 Brioche Lane<br />Old Market District<br />Open daily 7 AM - 3 PM</p>
          </div>
          <div>
            <p className="font-black text-[#7b4826]">Social</p>
            <div className="mt-3 flex gap-3">
              {['IG', 'FB', 'TT'].map((item) => (
                <a key={item} href="#join" className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3b2214] text-sm font-black text-[#fff8e8] transition hover:-translate-y-0.5 hover:bg-[#b87528]">
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
