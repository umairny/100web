import { Link } from 'react-router-dom'
import { Container, CTAButton, RestaurantSubNav } from '../../components'

const bowls = [
  { name: 'Avocado Garden Bowl', detail: 'Quinoa, avocado, cucumber, herbs, lemon tahini' },
  { name: 'Sunrise Smoothie Bowl', detail: 'Mango, banana, granola, berries, chia crunch' },
  { name: 'Protein Harvest Bowl', detail: 'Greens, brown rice, chickpeas, roasted sweet potato' },
]

export function FreshBowlCafe() {
  return (
    <main className="bg-[#fbf7ed] text-[#26332a]">
      <RestaurantSubNav
        brand="FreshBowl Cafe"
        links={[
          { label: 'Bowls', href: '#bowls' },
          { label: 'Nutrition', href: '#nutrition' },
          { label: 'Build Yours', href: '#build' },
        ]}
        ctaLabel="Start Order"
        ctaHref="#order"
        className="border-b border-[#dce8c2] bg-[#fbf7ed]/95"
        brandClassName="text-[#2f8f46]"
        linkClassName="text-[#5f6d61] transition hover:bg-[#eef6dc] hover:text-[#2f8f46]"
        ctaClassName="bg-[#2f8f46] text-white hover:bg-[#287a3d]"
        menuButtonClassName="border-[#dce8c2] text-[#2f8f46] hover:bg-[#eef6dc]"
        mobilePanelClassName="border border-[#dce8c2] bg-[#fbf7ed]"
      />

      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(47,143,70,0.08)_1px,transparent_1px),linear-gradient(rgba(159,190,90,0.12)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <Container className="relative grid items-center gap-12 pb-20 md:grid-cols-2 md:pb-28">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#2f8f46]">Healthy bowl cafe</p>
            <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">Fresh meals that fit your rhythm.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#5f6d61]">
              Salads, smoothie bowls, and nourishing grain bowls built for bright lunches and everyday wellness.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="#order" size="lg" className="bg-[#2f8f46] hover:bg-[#287a3d]">Start Your Order</CTAButton>
              <CTAButton href="#build" variant="outline" size="lg" className="border-[#2f8f46] text-[#2f8f46] hover:bg-[#eef6dc]">Build a Bowl</CTAButton>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="aspect-square rounded-[3rem] bg-white p-8 shadow-2xl">
              <div className="grid h-full grid-cols-2 gap-5">
                <div className="rounded-full bg-[#2f8f46]" />
                <div className="rounded-full bg-[#9fbe5a]" />
                <div className="rounded-full bg-[#f5d37a]" />
                <div className="rounded-full bg-[#fbf7ed] ring-8 ring-[#dce8c2]" />
              </div>
            </div>
            <div className="absolute -bottom-6 left-6 right-6 rounded-3xl bg-[#26332a] p-5 text-white shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9fbe5a]">Balanced bowls</p>
              <p className="mt-1 text-2xl font-black">Greens, grains, protein, crunch.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="bg-white py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div className="rounded-[2rem] bg-[#eef6dc] p-8">
            <p className="text-5xl font-black text-[#2f8f46]">15+</p>
            <p className="mt-3 text-xl font-black">fresh toppings prepped daily</p>
          </div>
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#2f8f46]">About FreshBowl</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Clean food without making lunch complicated.</h2>
            <p className="mt-5 text-lg leading-8 text-[#5f6d61]">
              We make quick meals feel calm and considered, using crisp produce, filling grains, bright sauces,
              and simple combinations that keep you moving.
            </p>
          </div>
        </Container>
      </section>

      <section id="bowls" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="font-black uppercase tracking-[0.24em] text-[#2f8f46]">Popular bowls</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Colorful, filling, easy to love.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {bowls.map((bowl) => (
              <article key={bowl.name} className="rounded-[2rem] bg-white p-6 shadow-sm">
                <div className="mb-6 aspect-[4/3] rounded-[2rem] bg-[radial-gradient(circle_at_25%_30%,#2f8f46_0_14%,transparent_15%),radial-gradient(circle_at_70%_65%,#9fbe5a_0_20%,transparent_21%),linear-gradient(135deg,#fbf7ed,#dce8c2)]" />
                <h3 className="text-2xl font-black">{bowl.name}</h3>
                <p className="mt-3 leading-7 text-[#5f6d61]">{bowl.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="nutrition" className="bg-[#26332a] py-20 text-white md:py-28">
        <Container>
          <div className="mb-12 max-w-2xl">
            <p className="font-black uppercase tracking-[0.24em] text-[#9fbe5a]">Nutrition benefits</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Built around balance.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-4">
            {['Fiber-rich grains', 'Lean proteins', 'Fresh greens', 'House dressings'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-2xl font-black">{item}</h3>
                <p className="mt-3 text-white/70">Simple ingredients that make meals satisfying and bright.</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="build" className="py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#2f8f46]">Build your bowl</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Pick a base, add color, finish with sauce.</h2>
          </div>
          <div className="space-y-4">
            {['Base: greens, rice, quinoa, or noodles', 'Protein: chickpeas, chicken, tofu, or egg', 'Finish: herbs, seeds, crunch, and dressing'].map((step) => (
              <div key={step} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-xl font-black">{step}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-3">
          {['My weekday lunch reset.', 'Fresh, fast, and actually filling.', 'The smoothie bowls taste like sunshine.'].map((quote) => (
            <blockquote key={quote} className="rounded-3xl bg-[#fbf7ed] p-8">
              <p className="text-xl font-bold leading-8">"{quote}"</p>
              <footer className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#2f8f46]">Cafe guest</footer>
            </blockquote>
          ))}
        </Container>
      </section>

      <section id="order" className="bg-[#9fbe5a] py-20">
        <Container className="text-center">
          <h2 className="text-4xl font-black md:text-5xl">Start fresh today.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[#26332a]/80">Order ahead for pickup, or build your bowl at the counter.</p>
          <CTAButton href="tel:555-0166" size="lg" className="mt-8 bg-[#26332a] text-white hover:bg-[#1c261f]">Call (555) 016-6600</CTAButton>
        </Container>
      </section>

      <section className="border-t border-[#dce8c2] py-8">
        <Container>
          <Link to="/restaurant" className="font-bold text-[#2f8f46] hover:text-[#26332a]">
            Back to Restaurant Collection
          </Link>
        </Container>
      </section>

      <footer className="py-10">
        <Container className="flex flex-col justify-between gap-4 text-sm md:flex-row">
          <p className="font-black">FreshBowl Cafe</p>
          <p className="text-[#5f6d61]">75 Wellness Way | Bowls, smoothies, salads</p>
        </Container>
      </footer>
    </main>
  )
}
