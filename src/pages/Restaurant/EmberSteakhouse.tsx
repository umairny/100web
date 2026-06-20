import { Link } from 'react-router-dom'
import { Container, CTAButton, RestaurantSubNav } from '../../components'

const steaks = [
  { name: 'Prime Ribeye', detail: '16 oz, ember butter, charred rosemary', price: '$58' },
  { name: 'Filet Mignon', detail: '8 oz center cut, black garlic jus', price: '$64' },
  { name: 'Dry-Aged Strip', detail: '28-day aged, smoked salt, bone marrow glaze', price: '$72' },
]

export function EmberSteakhouse() {
  return (
    <main className="brand-motion motion-ember bg-[#0f0f10] text-[#f4ead7]">
      <RestaurantSubNav
        brand="Ember"
        links={[
          { label: 'Steaks', href: '#steaks' },
          { label: 'Private Dining', href: '#private' },
          { label: 'Wine', href: '#wine' },
        ]}
        ctaLabel="Reserve"
        ctaHref="#reserve"
        className="border-b border-[#f4ead7]/10 bg-[#0f0f10]/95"
        brandClassName="uppercase tracking-[0.2em] text-[#e6b66d]"
        linkClassName="text-[#f4ead7]/85 transition hover:bg-white/10 hover:text-[#e36a2c]"
        ctaClassName="bg-[#e36a2c] text-white hover:bg-[#c95a22]"
        menuButtonClassName="border-[#f4ead7]/20 text-[#e6b66d] hover:bg-white/10"
        mobilePanelClassName="border border-[#f4ead7]/10 bg-[#0f0f10]"
      />

      <section className="relative overflow-hidden bg-[#0f0f10] pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_32%,rgba(227,106,44,0.24),transparent_25%),radial-gradient(circle_at_74%_14%,rgba(230,182,109,0.14),transparent_22%),linear-gradient(135deg,#0f0f10_0%,#181413_46%,#2a1f19_100%)]" />
        <div className="absolute left-0 top-0 h-full w-px bg-[#e6b66d]/35 md:left-10" />
        <div className="absolute right-0 top-0 h-full w-px bg-[#e6b66d]/20 md:right-10" />
        <div className="absolute inset-x-0 top-28 h-px bg-[#e6b66d]/25" />
        <Container className="relative grid items-center gap-12 pb-20 pt-8 md:grid-cols-[0.92fr_1.08fr] md:pb-28">
          <div>
            <p className="inline-flex border border-[#e6b66d]/35 bg-[#161414] px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[#e6b66d] shadow-[0_0_35px_rgba(227,106,44,0.18)]">
              Reservation-only flame room
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.94] md:text-7xl">
              Low light. High heat. No rushed courses.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#d8c7aa]">
              Ember is a darker kind of steakhouse: prime cuts over live fire, brass-lit booths, deep reds,
              and a room tuned for long dinners instead of quick exits.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="#reserve" size="lg" className="bg-[#e36a2c] shadow-xl shadow-[#e36a2c]/20 hover:bg-[#c95a22]">
                Reserve the Room
              </CTAButton>
              <CTAButton href="#steaks" variant="outline" size="lg" className="border-[#e6b66d] text-[#e6b66d] hover:bg-white/10">
                Choose a Cut
              </CTAButton>
            </div>
            <div className="mt-10 grid max-w-xl gap-3 sm:grid-cols-3">
              {[
                { value: '900F', label: 'Sear heat' },
                { value: '28d', label: 'Dry aged' },
                { value: '5 PM', label: 'Dinner fire' },
              ].map((item) => (
                <div key={item.label} className="border border-[#f4ead7]/10 bg-[#161414]/85 p-4">
                  <p className="text-3xl font-black text-[#e6b66d]">{item.value}</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-[#d8c7aa]/75">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto min-h-[570px] w-full max-w-xl">
            <div className="absolute inset-x-8 top-10 h-[30rem] rounded-t-[16rem] rounded-b-[4rem] border border-[#e6b66d]/25 bg-[#161414] shadow-2xl shadow-black/40" />
            <div className="absolute left-1/2 top-24 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_42%_36%,#e6b66d_0_8%,#e36a2c_9%_18%,#6f2b1c_38%,#160f0d_70%)] shadow-[0_0_80px_rgba(227,106,44,0.22)]" />
            <div className="absolute left-1/2 top-40 h-48 w-64 -translate-x-1/2 rotate-[-10deg] rounded-[45%] border-[14px] border-[#2a120d] bg-[linear-gradient(135deg,#7a2f1e,#2b120d_52%,#d48d4d_53%,#43180f_62%,#120d0c)] shadow-2xl" />
            <div className="absolute left-1/2 top-64 h-2 w-72 -translate-x-1/2 rounded-full bg-[#e6b66d]/70" />
            <div className="absolute left-1/2 top-[18.5rem] h-2 w-64 -translate-x-1/2 rounded-full bg-[#e36a2c]/75" />

            <div className="absolute right-0 top-12 w-48 border border-[#e6b66d]/35 bg-[#0f0f10] p-5 shadow-xl shadow-black/40">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#e36a2c]">Tonight's cut</p>
              <p className="mt-3 text-3xl font-black">Dry-aged strip</p>
              <p className="mt-3 text-sm leading-6 text-[#d8c7aa]">Smoked salt, bone marrow glaze, rested warm.</p>
            </div>

            <div className="absolute bottom-16 left-0 w-56 border border-[#e6b66d]/35 bg-[#f4ead7] p-5 text-[#0f0f10] shadow-xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8a4b24]">Pairing</p>
              <p className="mt-3 text-2xl font-black">Cabernet by the glass</p>
            </div>

            <div className="absolute bottom-0 right-8 rounded-full bg-[#e36a2c] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-white shadow-xl shadow-[#e36a2c]/25">
              Private dining available
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="border-y border-[#f4ead7]/10 bg-[#161414] py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#e36a2c]">About Ember</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">A dark, elegant dining room for serious steak.</h2>
          </div>
          <p className="text-lg leading-8 text-[#d8c7aa]">
            Ember pairs premium cuts with patient technique: hard sears, resting time, warm plates, elegant sides,
            and a wine list built for long conversations.
          </p>
        </Container>
      </section>

      <section id="steaks" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.24em] text-[#e36a2c]">Signature steaks</p>
              <h2 className="mt-3 text-4xl font-black md:text-5xl">Seared, rested, finished in ember butter.</h2>
            </div>
            <p className="max-w-md leading-7 text-[#d8c7aa]">Classic cuts, precise temperatures, and sauces that stay out of the way.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {steaks.map((steak) => (
              <article key={steak.name} className="rounded-[2rem] border border-[#f4ead7]/10 bg-[#161414] p-6">
                <div className="mb-6 aspect-[4/3] rounded-[1.5rem] bg-[linear-gradient(135deg,#26211d,#e36a2c_50%,#0f0f10)]" />
                <div className="flex justify-between gap-4">
                  <h3 className="text-2xl font-black">{steak.name}</h3>
                  <span className="font-black text-[#e6b66d]">{steak.price}</span>
                </div>
                <p className="mt-3 leading-7 text-[#d8c7aa]">{steak.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="private" className="bg-[#f4ead7] py-20 text-[#0f0f10] md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#8a4b24]">Private dining</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">A quieter room for milestone nights.</h2>
            <p className="mt-5 text-lg leading-8 text-[#5b5146]">
              Host business dinners, anniversaries, and small celebrations with dedicated service and custom menus.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {['12-seat room', 'Chef menus', 'Wine pairing'].map((item) => (
              <div key={item} className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-black">{item}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="wine" className="py-20 md:py-28">
        <Container className="grid gap-8 md:grid-cols-2">
          <div className="rounded-[2rem] border border-[#f4ead7]/10 bg-[#161414] p-8">
            <p className="font-black uppercase tracking-[0.24em] text-[#e6b66d]">Wine</p>
            <h2 className="mt-4 text-4xl font-black">Bold reds, old world bottles, by-the-glass favorites.</h2>
          </div>
          <div className="rounded-[2rem] border border-[#f4ead7]/10 bg-[#161414] p-8">
            <p className="font-black uppercase tracking-[0.24em] text-[#e6b66d]">Sides</p>
            <h2 className="mt-4 text-4xl font-black">Creamed spinach, ember potatoes, mushrooms, and warm rolls.</h2>
          </div>
        </Container>
      </section>

      <section className="bg-[#161414] py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-3">
          {['The lighting, the steak, the service: flawless.', 'A proper anniversary dinner.', 'Best ribeye in the city.'].map((quote) => (
            <blockquote key={quote} className="rounded-3xl border border-[#f4ead7]/10 p-8">
              <p className="text-xl font-bold leading-8">"{quote}"</p>
              <footer className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#e6b66d]">Ember guest</footer>
            </blockquote>
          ))}
        </Container>
      </section>

      <section id="reserve" className="bg-[#e36a2c] py-20 text-white">
        <Container className="text-center">
          <h2 className="text-4xl font-black md:text-5xl">Reserve your evening at Ember.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">Dinner service begins at 5 PM. Private dining inquiries welcome.</p>
          <CTAButton href="tel:555-0177" size="lg" className="mt-8 bg-[#0f0f10] text-white hover:bg-[#26211d]">Call (555) 017-7700</CTAButton>
        </Container>
      </section>

      <section className="border-t border-[#f4ead7]/10 py-8">
        <Container>
          <Link to="/restaurant" className="font-bold text-[#e6b66d] hover:text-[#e36a2c]">
            Back to Restaurant Collection
          </Link>
        </Container>
      </section>

      <footer className="py-10">
        <Container className="flex flex-col justify-between gap-4 text-sm md:flex-row">
          <p className="font-black">Ember Steakhouse</p>
          <p className="text-[#d8c7aa]">19 Ashford Lane | Dinner and private dining</p>
        </Container>
      </footer>
    </main>
  )
}
