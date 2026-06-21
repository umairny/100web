import { Link } from 'react-router-dom'
import { Container, CTAButton, SubWebsiteNav } from '../../components'

const styles = ['Pearl chrome', 'Soft french', 'Gold line art']

export function LuxeNailStudio() {
  return (
    <main className="brand-motion motion-luxenail bg-[#fffdf9] text-[#191919]">
      <SubWebsiteNav
        brand="Luxe Nail Studio"
        collectionPath="/beauty"
        links={[{ label: 'Services', href: '#services' }, { label: 'Styles', href: '#styles' }, { label: 'Packages', href: '#packages' }]}
        ctaLabel="Book Nails"
        ctaHref="#book"
        className="border-b border-[#eadfda] bg-[#fffdf9]/95"
        brandClassName="text-[#191919]"
        linkClassName="text-[#5f5f63] transition hover:bg-[#f4eeee] hover:text-[#191919]"
        ctaClassName="bg-[#191919] text-white hover:bg-[#d7b56d]"
        menuButtonClassName="border-[#eadfda] text-[#191919] hover:bg-[#f4eeee]"
        mobilePanelClassName="border border-[#eadfda] bg-[#fffdf9]"
      />

      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(233,199,196,0.34),transparent_24%),radial-gradient(circle_at_82%_16%,rgba(215,181,109,0.16),transparent_22%)]" />
        <Container className="relative grid items-center gap-12 pb-20 md:grid-cols-2 md:pb-28">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#d7b56d]">Luxury nail salon</p>
            <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">Luxe Nail Studio makes self-care look polished.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#686868]">Elegant manicures, sculpted sets, and nail art in a clean studio with champagne-gold detail.</p>
            <CTAButton href="#book" size="lg" className="mt-8 bg-[#191919] hover:bg-[#d7b56d]">Book Nails</CTAButton>
          </div>
          <div className="rounded-[3rem] bg-[#e9c7c4] p-8 shadow-2xl">
            <div className="grid aspect-square grid-cols-3 gap-4 rounded-[2.5rem] bg-white p-6">
              {Array.from({ length: 9 }).map((_, index) => <span key={index} className="rounded-full bg-gradient-to-br from-[#fffdf9] to-[#d7b56d]" />)}
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="bg-[#f7f7f7] py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <h2 className="text-4xl font-black md:text-5xl">A refined nail studio for manicures, art, and luxury self-care.</h2>
          <p className="text-lg leading-8 text-[#686868]">Every appointment is shaped around clean technique, careful prep, and a finish that feels expensive.</p>
        </Container>
      </section>

      <section id="services" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {['Gel manicure', 'Builder gel set', 'Nail art session'].map((service) => (
              <article key={service} className="rounded-[2rem] border border-[#eadfda] bg-white p-8 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d7b56d]">Nail service</p>
                <h3 className="mt-8 text-3xl font-black">{service}</h3>
                <p className="mt-4 leading-7 text-[#686868]">Detailed prep, precise shaping, and a glossy studio finish.</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="styles" className="bg-[#191919] py-20 text-white md:py-28">
        <Container>
          <div className="mb-12 text-center"><p className="font-black uppercase tracking-[0.24em] text-[#d7b56d]">Trending nail styles</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Minimal, glossy, and camera-ready.</h2></div>
          <div className="grid gap-6 md:grid-cols-3">
            {styles.map((style) => <div key={style} className="rounded-3xl bg-white/10 p-8"><div className="mb-8 h-28 rounded-2xl bg-gradient-to-br from-[#e9c7c4] to-[#d7b56d]" /><h3 className="text-2xl font-black">{style}</h3></div>)}
          </div>
        </Container>
      </section>

      <section id="packages" className="py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-3">
          {['Monthly gloss pass', 'Art lover package', 'Bridal nail prep'].map((pack) => (
            <article key={pack} className="rounded-3xl bg-[#f4eeee] p-8"><h3 className="text-3xl font-black">{pack}</h3><p className="mt-4 text-[#686868]">A polished package for consistent self-care.</p></article>
          ))}
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28"><Container className="grid gap-6 md:grid-cols-3">{['The cleanest manicure I have had.', 'Luxury without feeling cold.', 'My nail art always gets compliments.'].map((quote) => <blockquote key={quote} className="rounded-3xl bg-[#fffdf9] p-8 shadow-sm"><p className="text-xl font-bold leading-8">"{quote}"</p><footer className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#d7b56d]">Studio guest</footer></blockquote>)}</Container></section>

      <section id="book" className="bg-[#d7b56d] py-20 text-white"><Container className="text-center"><h2 className="text-4xl font-black md:text-5xl">Book your next set.</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">Choose a manicure, structured gel, or custom art appointment.</p><CTAButton href="tel:555-0202" size="lg" className="mt-8 bg-[#191919] text-white hover:bg-black">Call (555) 020-2000</CTAButton></Container></section>
      <section className="border-t border-[#eadfda] py-8"><Container><Link to="/beauty" className="font-bold text-[#191919] hover:text-[#d7b56d]">Back to Beauty Collection</Link></Container></section>
      <footer className="py-10"><Container className="flex flex-col justify-between gap-4 text-sm md:flex-row"><p className="font-black">Luxe Nail Studio</p><p className="text-[#686868]">Manicures, nail art, and polished self-care</p></Container></footer>
    </main>
  )
}
