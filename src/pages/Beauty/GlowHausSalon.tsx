import { Link } from 'react-router-dom'
import { Container, CTAButton, RestaurantSubNav } from '../../components'

const services = ['Signature cut and style', 'Dimensional color', 'Gloss and blowout']

export function GlowHausSalon() {
  return (
    <main className="brand-motion motion-glowhaus bg-[#fbf4ef] text-[#2b2b2d]">
      <RestaurantSubNav
        brand="GlowHaus Salon"
        collectionPath="/beauty"
        links={[
          { label: 'Services', href: '#services' },
          { label: 'Stylists', href: '#stylists' },
          { label: 'Gallery', href: '#gallery' },
        ]}
        ctaLabel="Book"
        ctaHref="#book"
        className="border-b border-[#f1ccd6] bg-[#fbf4ef]/95"
        brandClassName="text-[#b76e79]"
        linkClassName="text-[#2b2b2d] transition hover:bg-white/70 hover:text-[#b76e79]"
        ctaClassName="bg-[#2b2b2d] text-white hover:bg-[#b76e79]"
        menuButtonClassName="border-[#f1ccd6] text-[#b76e79] hover:bg-white/70"
        mobilePanelClassName="border border-[#f1ccd6] bg-[#fbf4ef]"
      />

      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(245,182,200,0.28),transparent_24%),radial-gradient(circle_at_84%_18%,rgba(183,110,121,0.14),transparent_22%)]" />
        <Container className="relative grid items-center gap-12 pb-20 md:grid-cols-[0.95fr_1.05fr] md:pb-28">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#b76e79]">Modern hair salon</p>
            <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">GlowHaus Salon makes confidence camera-ready.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6f6060]">
              Stylish cuts, soft color, and polished salon branding for clients who want modern hair with a premium feel.
            </p>
            <CTAButton href="#book" size="lg" className="mt-8 bg-[#2b2b2d] hover:bg-[#b76e79]">Book Appointment</CTAButton>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-72 rounded-[2rem] bg-[linear-gradient(145deg,#f5b6c8,#ffffff_55%,#b76e79)] shadow-2xl" />
            <div className="mt-12 h-72 rounded-[2rem] bg-[#2b2b2d] p-6 text-white shadow-2xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f5b6c8]">Fresh color</p>
              <p className="mt-20 text-3xl font-black">Gloss, shape, movement.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="bg-white py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <h2 className="text-4xl font-black md:text-5xl">A premium salon built for confident beauty and clean modern branding.</h2>
          <p className="text-lg leading-8 text-[#6f6060]">GlowHaus blends technical hair expertise with a stylish, social-media friendly salon experience.</p>
        </Container>
      </section>

      <section id="services" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="font-black uppercase tracking-[0.24em] text-[#b76e79]">Hair services</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Looks with polish and movement.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <article key={service} className="rounded-3xl bg-white p-8 shadow-sm">
                <div className="mb-8 h-32 rounded-2xl bg-gradient-to-br from-[#f5b6c8] to-[#b76e79]" />
                <h3 className="text-2xl font-black">{service}</h3>
                <p className="mt-3 leading-7 text-[#6f6060]">Tailored consultation, careful technique, and a finish that photographs beautifully.</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="stylists" className="bg-[#2b2b2d] py-20 text-white md:py-28">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#f5b6c8]">Stylist expertise</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Colorists, cutters, and blowout specialists.</h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {['Color', 'Cut', 'Finish'].map((item) => (
              <div key={item} className="rounded-2xl bg-white/10 p-6"><h3 className="text-2xl font-black">{item}</h3></div>
            ))}
          </div>
        </Container>
      </section>

      <section id="gallery" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-4 md:grid-cols-4">
            {['Before', 'After', 'Color', 'Style'].map((item) => (
              <div key={item} className="aspect-[3/4] rounded-3xl bg-[linear-gradient(145deg,#fff,#f5b6c8,#b76e79)] p-5 shadow-sm">
                <p className="font-black">{item}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-3">
          {['My color has never looked better.', 'The salon feels elevated but welcoming.', 'Perfect blowout before every event.'].map((quote) => (
            <blockquote key={quote} className="rounded-3xl bg-[#fbf4ef] p-8">
              <p className="text-xl font-bold leading-8">"{quote}"</p>
              <footer className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#b76e79]">Salon guest</footer>
            </blockquote>
          ))}
        </Container>
      </section>

      <section id="book" className="bg-[#b76e79] py-20 text-white">
        <Container className="text-center">
          <h2 className="text-4xl font-black md:text-5xl">Ready for your glow-up?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">Book a cut, color, gloss, or blowout with the GlowHaus team.</p>
          <CTAButton href="tel:555-0201" size="lg" className="mt-8 bg-white text-[#2b2b2d] hover:bg-[#fbf4ef]">Call (555) 020-1000</CTAButton>
        </Container>
      </section>

      <section className="border-t border-[#f1ccd6] py-8">
        <Container><Link to="/beauty" className="font-bold text-[#b76e79] hover:text-[#2b2b2d]">Back to Beauty Collection</Link></Container>
      </section>

      <footer className="py-10"><Container className="flex flex-col justify-between gap-4 text-sm md:flex-row"><p className="font-black">GlowHaus Salon</p><p className="text-[#6f6060]">Cuts, color, gloss, and blowouts</p></Container></footer>
    </main>
  )
}
