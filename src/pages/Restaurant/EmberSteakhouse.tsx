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

      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_26%,rgba(227,106,44,0.28),transparent_24%),radial-gradient(circle_at_82%_14%,rgba(230,182,109,0.16),transparent_22%),linear-gradient(135deg,#0f0f10,#26211d)]" />
        <Container className="relative grid items-center gap-12 pb-20 md:grid-cols-[1fr_0.95fr] md:pb-28">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#e6b66d]">Premium steakhouse</p>
            <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">Evening dining built around fire.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#d8c7aa]">
              Prime steaks, low light, polished service, and private rooms for dinners that deserve a slower pace.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="#reserve" size="lg" className="bg-[#e36a2c] hover:bg-[#c95a22]">Reserve a Table</CTAButton>
              <CTAButton href="#steaks" variant="outline" size="lg" className="border-[#e6b66d] text-[#e6b66d] hover:bg-white/10">View Steaks</CTAButton>
            </div>
          </div>
          <div className="relative min-h-[430px]">
            <div className="absolute right-0 top-0 h-80 w-72 rounded-[2rem] bg-[#26211d] p-6 shadow-2xl">
              <div className="h-full rounded-[1.5rem] bg-[linear-gradient(145deg,#0f0f10,#e36a2c_48%,#e6b66d_50%,#0f0f10_72%)]" />
            </div>
            <div className="absolute bottom-0 left-0 w-72 rounded-[2rem] border border-[#f4ead7]/15 bg-[#0f0f10] p-6 shadow-2xl">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#e36a2c]">Tonight's cut</p>
              <p className="mt-8 text-4xl font-black">28-day dry-aged strip.</p>
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
