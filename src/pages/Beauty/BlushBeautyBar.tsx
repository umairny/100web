import { Link } from 'react-router-dom'
import { Container, CTAButton, RestaurantSubNav } from '../../components'

export function BlushBeautyBar() {
  return (
    <main className="bg-[#fff0f6] text-[#111111]">
      <RestaurantSubNav
        brand="Blush Beauty Bar"
        collectionPath="/beauty"
        links={[{ label: 'Makeup', href: '#makeup' }, { label: 'Packages', href: '#packages' }, { label: 'Events', href: '#events' }]}
        ctaLabel="Book Glam"
        ctaHref="#book"
        className="border-b border-[#ffc2df] bg-[#fff0f6]/95"
        brandClassName="text-[#ff3d9a]"
        linkClassName="text-[#111111] transition hover:bg-white/70 hover:text-[#ff3d9a]"
        ctaClassName="bg-[#ff3d9a] text-white hover:bg-[#111111]"
        menuButtonClassName="border-[#ffc2df] text-[#ff3d9a] hover:bg-white/70"
        mobilePanelClassName="border border-[#ffc2df] bg-[#fff0f6]"
      />

      <section className="relative overflow-hidden bg-[#111111] pt-28 text-white md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,61,154,0.34),transparent_24%),radial-gradient(circle_at_84%_20%,rgba(201,201,209,0.18),transparent_22%)]" />
        <Container className="relative grid items-center gap-12 pb-20 md:grid-cols-[1fr_0.95fr] md:pb-28">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#ff3d9a]">Makeup and beauty bar</p>
            <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">Blush Beauty Bar gets you event-ready.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">Bold glam, soft glam, party makeup, and social-ready beauty for nights that need a little flash.</p>
            <CTAButton href="#book" size="lg" className="mt-8 bg-[#ff3d9a] hover:bg-[#e02582]">Book Glam</CTAButton>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="h-72 rounded-full bg-[#ff3d9a] shadow-2xl" />
            <div className="mt-16 h-72 rounded-[3rem] bg-[linear-gradient(145deg,#fff,#c9c9d1,#ff3d9a)] shadow-2xl" />
          </div>
        </Container>
      </section>

      <section id="about" className="bg-white py-20 md:py-28"><Container className="grid gap-10 md:grid-cols-2 md:items-center"><h2 className="text-4xl font-black md:text-5xl">A glam beauty bar for makeup, events, and trend-forward looks.</h2><p className="text-lg leading-8 text-gray-600">Blush Beauty Bar is youthful, bold, and built for the camera, with artists who know soft glam, full glam, and party-ready detail.</p></Container></section>

      <section id="makeup" className="py-20 md:py-28"><Container><div className="grid gap-6 md:grid-cols-3">{['Soft glam', 'Full glam', 'Lash and liner'].map((item) => <article key={item} className="rounded-[2rem] bg-white p-8 shadow-sm"><div className="mb-8 h-32 rounded-2xl bg-gradient-to-br from-[#ff3d9a] to-[#c9c9d1]" /><h3 className="text-2xl font-black">{item}</h3><p className="mt-3 text-gray-600">Makeup services shaped around your face, outfit, and moment.</p></article>)}</div></Container></section>

      <section id="packages" className="bg-[#ff3d9a] py-20 text-white md:py-28"><Container><div className="mb-12 text-center"><p className="font-black uppercase tracking-[0.24em]">Glam packages</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Pick your level of shine.</h2></div><div className="grid gap-6 md:grid-cols-3">{['Birthday glam', 'Photoshoot prep', 'Night out bundle'].map((pack) => <article key={pack} className="rounded-3xl bg-white/15 p-8"><h3 className="text-3xl font-black">{pack}</h3><p className="mt-4 text-white/80">Makeup, lashes, touch-up kit, and confidence.</p></article>)}</div></Container></section>

      <section id="events" className="py-20 md:py-28"><Container className="grid gap-10 md:grid-cols-2 md:items-center"><div><p className="font-black uppercase tracking-[0.24em] text-[#ff3d9a]">Event beauty</p><h2 className="mt-3 text-4xl font-black md:text-5xl">For birthdays, shoots, proms, parties, and brand nights.</h2></div><div className="rounded-[3rem] bg-[#111111] p-8 text-white"><p className="text-5xl font-black text-[#ff3d9a]">6+</p><p className="mt-3 text-xl font-black">artists available for group bookings</p></div></Container></section>

      <section className="bg-white py-20 md:py-28"><Container className="grid gap-6 md:grid-cols-3">{['My makeup lasted all night.', 'The glam was exactly the vibe.', 'Best place before a big event.'].map((quote) => <blockquote key={quote} className="rounded-3xl bg-[#fff0f6] p-8"><p className="text-xl font-bold leading-8">"{quote}"</p><footer className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#ff3d9a]">Beauty bar guest</footer></blockquote>)}</Container></section>

      <section id="book" className="bg-[#111111] py-20 text-white"><Container className="text-center"><h2 className="text-4xl font-black md:text-5xl">Book your glam session.</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-white/75">Reserve makeup for events, photos, parties, or a night out.</p><CTAButton href="tel:555-0204" size="lg" className="mt-8 bg-[#ff3d9a] text-white hover:bg-[#e02582]">Call (555) 020-4000</CTAButton></Container></section>
      <section className="border-t border-[#ffc2df] py-8"><Container><Link to="/beauty" className="font-bold text-[#ff3d9a] hover:text-[#111111]">Back to Beauty Collection</Link></Container></section>
      <footer className="py-10"><Container className="flex flex-col justify-between gap-4 text-sm md:flex-row"><p className="font-black">Blush Beauty Bar</p><p className="text-gray-600">Makeup, events, lashes, and glam sessions</p></Container></footer>
    </main>
  )
}
