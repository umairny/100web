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

      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(143,163,122,0.24),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(192,161,90,0.16),transparent_22%)]" />
        <Container className="relative grid items-center gap-12 pb-20 md:grid-cols-[0.95fr_1.05fr] md:pb-28">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#8fa37a]">Tea house and wellness cafe</p>
            <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">MorningLeaf Tea for slower, softer mornings.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f5b45]">
              Herbal blends, quiet tables, and a peaceful ritual for people who want their cafe time to feel intentional.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="#visit" size="lg" className="bg-[#8fa37a] hover:bg-[#768b65]">Visit the Tea House</CTAButton>
              <CTAButton href="#blends" variant="outline" size="lg" className="border-[#8fa37a] text-[#6f8261] hover:bg-white/70">Explore Blends</CTAButton>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="aspect-[4/5] rounded-[3rem] bg-white p-8 shadow-2xl">
              <div className="h-full rounded-[2.5rem] bg-[linear-gradient(160deg,#8fa37a,#fbf7ea_45%,#c0a15a)] p-8">
                <div className="h-full rounded-full border-[18px] border-white/55" />
              </div>
            </div>
            <div className="absolute -bottom-6 left-8 right-8 rounded-3xl bg-[#4b3d2f] p-5 text-[#fbf7ea] shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c0a15a]">Steeped slowly</p>
              <p className="mt-1 text-2xl font-black">A quiet cup, brewed to order.</p>
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
