import { Link } from 'react-router-dom'
import { Container, CTAButton, SubWebsiteNav } from '../../components'
import { imageUrl } from "../../assets/images";

const bowls = [
  { name: 'Avocado Garden Bowl', detail: 'Quinoa, avocado, cucumber, herbs, lemon tahini' },
  { name: 'Sunrise Smoothie Bowl', detail: 'Mango, banana, granola, berries, chia crunch' },
  { name: 'Protein Harvest Bowl', detail: 'Greens, brown rice, chickpeas, roasted sweet potato' },
]

export function FreshBowlCafe() {
  return (
    <main className="brand-motion motion-freshbowl bg-[#fbf7ed] text-[#26332a]">
      <SubWebsiteNav
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

      <section className="relative overflow-hidden bg-[#fbf7ed] pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(47,143,70,0.08)_1px,transparent_1px),linear-gradient(rgba(159,190,90,0.12)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute right-0 top-0 h-full w-24 bg-[#eef6dc] md:w-40" />
        <div className="absolute left-0 bottom-0 h-40 w-40 rounded-full bg-[#9fbe5a]/20" />
        <Container className="relative grid items-center gap-12 pb-20 pt-8 md:grid-cols-[1.08fr_0.92fr] md:pb-28">
          <div className="relative mx-auto min-h-[560px] w-full max-w-xl md:order-1">
            <div className="absolute left-1/2 top-4 h-[30rem] w-[30rem] -translate-x-1/2 rounded-[4rem] bg-white shadow-2xl shadow-[#2f8f46]/10 md:left-0 md:translate-x-0" />
            <div className="absolute left-1/2 top-14 h-80 w-80 -translate-x-1/2 rounded-full bg-[#eef6dc] md:left-12 md:translate-x-0" />
            <div className="absolute left-1/2 top-24 h-64 w-64 -translate-x-1/2 overflow-hidden rounded-full border-[18px] border-white bg-[#eef6dc] shadow-inner md:left-20 md:translate-x-0">
              <img
                src={imageUrl("restaurent/freshbowl-cafe/hero-bowl.png")}
                alt="Top-down fresh grain bowl with avocado, greens, chickpeas, herbs, and tahini"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(255,255,255,0.18),transparent_32%),radial-gradient(circle_at_50%_70%,transparent_52%,rgba(38,51,42,0.18)_100%)]" />
            </div>

            <div className="absolute left-1/2 top-80 grid w-72 -translate-x-1/2 rotate-[-3deg] grid-cols-2 gap-3 rounded-[2rem] border border-[#dce8c2] bg-white p-4 shadow-xl md:left-2 md:translate-x-0">
              {[
                ['Base', 'quinoa'],
                ['Green', 'kale'],
                ['Protein', 'chickpea'],
                ['Sauce', 'tahini'],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-[#fbf7ed] p-3">
                  <p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#2f8f46]">{label}</p>
                  <p className="mt-1 font-black text-[#26332a]">{value}</p>
                </div>
              ))}
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full bg-[#26332a] px-5 py-3 text-center text-sm font-black uppercase tracking-[0.16em] text-white shadow-xl md:left-auto md:right-0 md:translate-x-0 md:text-left">
              Greens, grains, protein, crunch
            </div>
          </div>

          <div className="text-center md:order-2 md:text-right">
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#2f8f46]">Healthy bowl cafe</p>
            <h1 className="mx-auto mt-4 max-w-4xl text-5xl font-black leading-[0.96] md:ml-auto md:mr-0 md:text-7xl">
              Fresh meals that move at your pace.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-[#5f6d61] md:ml-auto md:mr-0">
              Salads, smoothie bowls, and nourishing grain bowls built for bright lunches, fast pickup,
              and everyday wellness without the overthinking.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row md:justify-end">
              <CTAButton href="#order" size="lg" className="bg-[#2f8f46] hover:bg-[#287a3d]">
                Start Your Order
              </CTAButton>
              <CTAButton href="#build" variant="outline" size="lg" className="border-[#2f8f46] bg-white/65 text-[#2f8f46] hover:bg-[#eef6dc]">
                Build a Bowl
              </CTAButton>
            </div>

            <div className="mx-auto mt-10 grid max-w-xl gap-3 sm:grid-cols-3 md:ml-auto md:mr-0">
              {[
                { value: '15+', label: 'toppings' },
                { value: '6', label: 'house sauces' },
                { value: '10m', label: 'pickup window' },
              ].map((item) => (
                <div key={item.label} className="border border-[#dce8c2] bg-white/80 p-4 text-center shadow-sm md:text-right">
                  <p className="text-2xl font-black text-[#2f8f46]">{item.value}</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-[#5f6d61]">{item.label}</p>
                </div>
              ))}
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
