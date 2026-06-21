import { Link } from 'react-router-dom'
import { Container, CTAButton, SubWebsiteNav } from '../../components'

const catches = [
  { name: 'Citrus Seared Scallops', detail: 'Aqua herb oil, lemon cream, shaved fennel' },
  { name: 'Harbor Grill Salmon', detail: 'Charred asparagus, sand potatoes, coral glaze' },
  { name: 'Cold Tide Platter', detail: 'Oysters, shrimp, crab salad, mignonette' },
]

export function OceanPlateSeafood() {
  return (
    <main className="brand-motion motion-oceanplate bg-white text-[#063047]">
      <SubWebsiteNav
        brand="OceanPlate Seafood"
        links={[
          { label: 'Fresh Catch', href: '#catch' },
          { label: 'Experience', href: '#experience' },
          { label: 'Specials', href: '#specials' },
        ]}
        ctaLabel="Reserve"
        ctaHref="#reserve"
        className="border-b border-[#d7e8e8] bg-white/95"
        brandClassName="text-[#075985]"
        linkClassName="text-[#063047] transition hover:bg-[#e9f8fa] hover:text-[#39b6c8]"
        ctaClassName="bg-[#075985] text-white hover:bg-[#063047]"
        menuButtonClassName="border-[#d7e8e8] text-[#075985] hover:bg-[#e9f8fa]"
        mobilePanelClassName="border border-[#d7e8e8] bg-white"
      />

      <section className="relative overflow-hidden bg-[#f7fbfb] pt-28 md:pt-36">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-[linear-gradient(180deg,#dff6f8_0%,#f7fbfb_100%)]" />
        <div className="absolute inset-x-0 top-[46%] h-20 bg-[repeating-linear-gradient(0deg,rgba(57,182,200,0.22)_0_2px,transparent_2px_12px)]" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-[#f4ead5]" />
        <div className="absolute left-1/2 top-[42%] h-px w-[92%] -translate-x-1/2 bg-[#075985]/20" />
        <Container className="relative pb-20 pt-8 md:pb-28">
          <div className="mx-auto max-w-5xl text-center">
            <p className="inline-flex rounded-full border border-[#d7e8e8] bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#39b6c8] shadow-sm">
              Fresh catch and raw bar
            </p>
            <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[0.95] text-[#063047] md:text-7xl">
              Seafood timed to the tide, plated for sunset.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#496371]">
              OceanPlate brings the day boat into a polished coastal room: oysters on ice, citrus scallops,
              grilled fish, clean cocktails, and tables that feel close to the water.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <CTAButton href="#reserve" size="lg" className="bg-[#075985] hover:bg-[#063047]">
                Reserve by the Water
              </CTAButton>
              <CTAButton href="#catch" variant="outline" size="lg" className="border-[#39b6c8] bg-white/65 text-[#075985] hover:bg-[#e9f8fa]">
                See Today's Catch
              </CTAButton>
            </div>
          </div>

          <div className="relative mx-auto mt-14 min-h-[520px] max-w-5xl">
            <div className="absolute left-1/2 top-20 h-80 w-[44rem] max-w-[92vw] -translate-x-1/2 rounded-[50%] bg-white shadow-2xl shadow-[#075985]/12" />
            <div className="absolute left-1/2 top-32 h-56 w-[34rem] max-w-[78vw] -translate-x-1/2 rounded-[50%] bg-[#e9f8fa] shadow-inner" />
            <div className="absolute left-1/2 top-44 grid w-[28rem] max-w-[70vw] -translate-x-1/2 grid-cols-5 gap-3">
              {[0, 1, 2, 3, 4].map((item) => (
                <div key={item} className="aspect-square rounded-full border-[10px] border-[#075985] bg-[radial-gradient(circle,#f7fbfb_0_28%,#ff7f62_29%_42%,#f4ead5_43%_100%)] shadow-md" />
              ))}
            </div>
            <div className="absolute left-1/2 top-72 h-16 w-[30rem] max-w-[76vw] -translate-x-1/2 rounded-full bg-[#063047]/10" />

            <div className="absolute left-0 top-16 w-56 rotate-[-4deg] rounded-[1.75rem] border border-[#d7e8e8] bg-white p-5 text-left shadow-xl md:left-10">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#39b6c8]">Today's landing</p>
              <p className="mt-2 text-2xl font-black text-[#063047]">Oysters, scallops, salmon.</p>
              <p className="mt-2 text-sm leading-6 text-[#496371]">Bright, cold, and cut close to service.</p>
            </div>

            <div className="absolute right-0 top-20 w-56 rotate-[4deg] rounded-[1.75rem] bg-[#075985] p-5 text-left text-white shadow-xl md:right-10">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#aeeaf0]">Tide note</p>
              <p className="mt-2 text-2xl font-black">Raw bar opens at 4 PM.</p>
            </div>

            <div className="absolute bottom-24 left-1/2 grid w-full max-w-2xl -translate-x-1/2 gap-3 px-4 sm:grid-cols-3">
              {[
                { value: '12', label: 'oyster varieties' },
                { value: '4 PM', label: 'raw bar' },
                { value: 'Sunset', label: 'dinner tables' },
              ].map((item) => (
                <div key={item.label} className="border border-[#d7e8e8] bg-white/85 p-4 text-center shadow-sm">
                  <p className="text-2xl font-black text-[#075985]">{item.value}</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-[#496371]">{item.label}</p>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 rounded-full bg-[#39b6c8] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white shadow-lg">
              Coastal table service
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="bg-[#f7fbfb] py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#39b6c8]">About OceanPlate</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Clean coastal dining with seafood treated simply.</h2>
          </div>
          <p className="text-lg leading-8 text-[#496371]">
            OceanPlate focuses on sourcing, timing, and restraint: fresh seafood, bright sauces, crisp sides,
            and a dining room that feels relaxed without losing polish.
          </p>
        </Container>
      </section>

      <section id="catch" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="font-black uppercase tracking-[0.24em] text-[#39b6c8]">Fresh catch menu</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Premium plates from the water to the table.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {catches.map((item) => (
              <article key={item.name} className="rounded-[2rem] border border-[#d7e8e8] bg-white p-6 shadow-sm">
                <div className="mb-6 aspect-[4/3] rounded-[1.5rem] bg-[linear-gradient(135deg,#075985,#39b6c8_48%,#f4ead5_49%),radial-gradient(circle_at_70%_30%,#ff7f62,transparent_18%)]" />
                <h3 className="text-2xl font-black">{item.name}</h3>
                <p className="mt-3 leading-7 text-[#496371]">{item.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="experience" className="bg-[#075985] py-20 text-white md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#aeeaf0]">Coastal dining experience</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Relaxed atmosphere, premium service, ocean-bright plates.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {['Raw bar', 'Sunlit dining', 'Coastal cocktails'].map((item) => (
              <div key={item} className="rounded-2xl bg-white/12 p-6">
                <h3 className="text-2xl font-black">{item}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="specials" className="py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-3">
          {['Lobster roll lunch', 'Coral reef ceviche', 'Grilled whole branzino'].map((special) => (
            <article key={special} className="rounded-3xl bg-[#f4ead5] p-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#075985]">Chef special</p>
              <h3 className="mt-6 text-3xl font-black">{special}</h3>
              <p className="mt-4 leading-7 text-[#496371]">A seasonal seafood plate prepared with bright coastal flavor.</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-[#f7fbfb] py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-3">
          {['Fresh, clean, and beautifully plated.', 'The scallops were perfect.', 'Relaxed coastal dinner without the fuss.'].map((quote) => (
            <blockquote key={quote} className="rounded-3xl bg-white p-8 shadow-sm">
              <p className="text-xl font-bold leading-8">"{quote}"</p>
              <footer className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#075985]">OceanPlate guest</footer>
            </blockquote>
          ))}
        </Container>
      </section>

      <section id="reserve" className="bg-[#39b6c8] py-20 text-white">
        <Container className="text-center">
          <h2 className="text-4xl font-black md:text-5xl">Reserve a coastal table tonight.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">Join us for fresh seafood, chef specials, and relaxed premium dining.</p>
          <CTAButton href="tel:555-0118" size="lg" className="mt-8 bg-[#063047] text-white hover:bg-[#075985]">Call (555) 011-8800</CTAButton>
        </Container>
      </section>

      <section className="border-t border-[#d7e8e8] py-8">
        <Container>
          <Link to="/restaurant" className="font-bold text-[#075985] hover:text-[#39b6c8]">
            Back to Restaurant Collection
          </Link>
        </Container>
      </section>

      <footer className="py-10">
        <Container className="flex flex-col justify-between gap-4 text-sm md:flex-row">
          <p className="font-black">OceanPlate Seafood</p>
          <p className="text-[#496371]">28 Coastline Pier | Fresh catch, raw bar, dinner</p>
        </Container>
      </footer>
    </main>
  )
}
