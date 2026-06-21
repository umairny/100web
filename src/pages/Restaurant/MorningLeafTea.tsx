import { Link } from 'react-router-dom'
import { Container, CTAButton, RestaurantSubNav } from '../../components'

const teas = [
  { name: 'Sage Morning', detail: 'Green tea, sage, pear, and muted gold citrus', tone: 'Light and clear' },
  { name: 'Chamomile Moon', detail: 'Chamomile, oat flower, vanilla, and soft honey', tone: 'Gentle and calm' },
  { name: 'Forest Mint', detail: 'Peppermint, nettle, lemon balm, and meadow herbs', tone: 'Fresh and cooling' },
]

export function MorningLeafTea() {
  return (
    <main className="brand-motion motion-morningleaf bg-[#fbf7ea] text-[#4b3d2f]">
      <RestaurantSubNav
        brand="MorningLeaf Tea"
        links={[
          { label: 'Blends', href: '#blends' },
          { label: 'Ritual', href: '#ritual' },
          { label: 'Specials', href: '#specials' },
        ]}
        ctaLabel="Visit"
        ctaHref="#visit"
        className="border-b border-[#d9ccb1] bg-[#fbf7ea]/95"
        brandClassName="text-[#6f8261]"
        linkClassName="text-[#6f5b45] transition hover:bg-white/70 hover:text-[#8fa37a]"
        ctaClassName="bg-[#8fa37a] text-white hover:bg-[#768b65]"
        menuButtonClassName="border-[#d9ccb1] text-[#6f8261] hover:bg-white/70"
        mobilePanelClassName="border border-[#d9ccb1] bg-[#fbf7ea]"
      />

      <section className="relative overflow-hidden bg-[#fbf7ea] pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(111,130,97,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(192,161,90,0.08)_1px,transparent_1px)] bg-[size:54px_54px]" />
        <div className="absolute left-1/2 top-0 hidden h-full w-px bg-[#d9ccb1]/70 lg:block" />
        <div className="absolute bottom-0 right-0 h-64 w-64 rounded-full bg-[#8fa37a]/12" />
        <Container className="relative pb-20 pt-8 md:pb-28">
          <div className="mx-auto max-w-6xl">
            <div className="mx-auto max-w-4xl text-center">
              <p className="inline-flex rounded-full border border-[#d9ccb1] bg-white/75 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#8fa37a]">
                Botanical tea house
              </p>
              <h1 className="mx-auto mt-6 max-w-4xl text-5xl font-black leading-[0.96] text-[#4b3d2f] md:text-7xl">
                A softer morning, poured one leaf at a time.
              </h1>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#6f5b45]">
                MorningLeaf slows the cafe ritual down with herbal blends, low-caffeine cups, quiet tables,
                and steep times that turn a drink into a small reset.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <CTAButton href="#visit" size="lg" className="bg-[#8fa37a] hover:bg-[#768b65]">
                  Find a Quiet Table
                </CTAButton>
                <CTAButton href="#blends" variant="outline" size="lg" className="border-[#8fa37a] bg-white/55 text-[#6f8261] hover:bg-white">
                  Browse Blends
                </CTAButton>
              </div>
            </div>

            <div className="relative mx-auto mt-12 min-h-[560px] w-full max-w-4xl">
              <div className="absolute left-1/2 top-10 h-[30rem] w-[30rem] -translate-x-1/2 rounded-full bg-[#f4ecd8]" />
              <div className="absolute left-1/2 top-32 h-72 w-72 -translate-x-1/2 rounded-full border-[24px] border-white bg-[radial-gradient(circle_at_48%_46%,#c0a15a_0_10%,#8fa37a_11%_42%,#5d714f_43%_100%)] shadow-2xl shadow-[#6f8261]/15" />
              <div className="absolute left-1/2 top-[21rem] h-16 w-96 -translate-x-1/2 rounded-full bg-[#4b3d2f]/15" />

              <div className="absolute left-[42%] top-0 h-24 w-1 rounded-full bg-[#8fa37a]/35" />
              <div className="absolute left-1/2 top-2 h-28 w-1 -translate-x-1/2 rounded-full bg-[#c0a15a]/40" />
              <div className="absolute right-[42%] top-0 h-24 w-1 rounded-full bg-[#8fa37a]/35" />

              <div className="absolute left-0 top-24 w-52 rotate-[-4deg] rounded-[2rem] border border-[#d9ccb1] bg-white p-5 text-left shadow-xl md:left-16">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8fa37a]">House blend</p>
                <p className="mt-2 text-2xl font-black text-[#4b3d2f]">Sage Morning</p>
                <p className="mt-2 text-sm leading-6 text-[#6f5b45]">Green tea, pear, sage, muted citrus.</p>
              </div>

              <div className="absolute right-0 top-24 w-52 rotate-[4deg] rounded-[2rem] bg-[#4b3d2f] p-5 text-left text-[#fbf7ea] shadow-xl md:right-16">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c0a15a]">Ritual card</p>
                <p className="mt-2 text-2xl font-black">Water at 175F. Wait for quiet.</p>
              </div>

              <div className="absolute bottom-28 left-1/2 grid w-full max-w-2xl -translate-x-1/2 gap-3 px-4 sm:grid-cols-3">
                {[
                  { value: '3-5', label: 'minute steep' },
                  { value: '0-40', label: 'mg caffeine' },
                  { value: 'Daily', label: 'herbal flights' },
                ].map((item) => (
                  <div key={item.label} className="border border-[#d9ccb1] bg-white/80 p-4 text-center shadow-sm">
                    <p className="text-2xl font-black text-[#6f8261]">{item.value}</p>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-[#6f5b45]">{item.label}</p>
                  </div>
                ))}
              </div>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-[#c0a15a] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white shadow-lg">
                Brewed to order
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="bg-white py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#8fa37a]">About MorningLeaf</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">A mindful tea cafe for herbal blends and quiet pauses.</h2>
          </div>
          <p className="text-lg leading-8 text-[#6f5b45]">
            MorningLeaf Tea is designed around calm service, natural textures, and seasonal leaves sourced for flavor,
            fragrance, and the feeling of being unrushed.
          </p>
        </Container>
      </section>

      <section id="blends" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="font-black uppercase tracking-[0.24em] text-[#8fa37a]">Featured tea blends</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Botanical cups with a gentle finish.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {teas.map((tea) => (
              <article key={tea.name} className="rounded-[2rem] bg-white p-6 shadow-sm">
                <div className="mb-6 aspect-[4/3] rounded-[2rem] bg-[radial-gradient(circle_at_30%_35%,#8fa37a_0_18%,transparent_19%),radial-gradient(circle_at_70%_65%,#c0a15a_0_14%,transparent_15%),linear-gradient(135deg,#fbf7ea,#ffffff)]" />
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8fa37a]">{tea.tone}</p>
                <h3 className="mt-3 text-2xl font-black">{tea.name}</h3>
                <p className="mt-3 leading-7 text-[#6f5b45]">{tea.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="ritual" className="bg-[#6f8261] py-20 text-white md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#f2dfaa]">Tea ritual and wellness</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">A small ritual that helps the day breathe.</h2>
            <p className="mt-5 text-lg leading-8 text-white/80">
              Choose your blend, set a steep time, pair it with a light bite, and settle into a calm corner.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {['Low caffeine options', 'Herbal support blends', 'Quiet cafe seating'].map((benefit) => (
              <div key={benefit} className="rounded-2xl bg-white/12 p-6">
                <h3 className="text-2xl font-black">{benefit}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="specials" className="py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-3">
          {['Spring jasmine flight', 'Honey oat matcha', 'Pear and sage iced tea'].map((special) => (
            <article key={special} className="rounded-3xl border border-[#d9ccb1] bg-white/70 p-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c0a15a]">Seasonal special</p>
              <h3 className="mt-6 text-3xl font-black">{special}</h3>
              <p className="mt-4 leading-7 text-[#6f5b45]">A limited blend prepared with soft aromatics and seasonal botanicals.</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-3">
          {['A peaceful pocket in the city.', 'The chamomile blend is my evening reset.', 'Quiet, beautiful, and deeply calming.'].map((quote) => (
            <blockquote key={quote} className="rounded-3xl bg-[#fbf7ea] p-8">
              <p className="text-xl font-bold leading-8">"{quote}"</p>
              <footer className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#8fa37a]">Tea guest</footer>
            </blockquote>
          ))}
        </Container>
      </section>

      <section id="visit" className="bg-[#c0a15a] py-20 text-white">
        <Container className="text-center">
          <h2 className="text-4xl font-black md:text-5xl">Visit the tea house this week.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">Open daily for hot tea, iced blends, light bites, and quiet table time.</p>
          <CTAButton href="tel:555-0133" size="lg" className="mt-8 bg-[#4b3d2f] text-white hover:bg-[#392d22]">Call (555) 013-3300</CTAButton>
        </Container>
      </section>

      <section className="border-t border-[#d9ccb1] py-8">
        <Container>
          <Link to="/restaurant" className="font-bold text-[#6f8261] hover:text-[#4b3d2f]">
            Back to Restaurant Collection
          </Link>
        </Container>
      </section>

      <footer className="py-10">
        <Container className="flex flex-col justify-between gap-4 text-sm md:flex-row">
          <p className="font-black">MorningLeaf Tea</p>
          <p className="text-[#6f5b45]">104 Willow Court | Tea, herbs, quiet cafe rituals</p>
        </Container>
      </footer>
    </main>
  )
}
