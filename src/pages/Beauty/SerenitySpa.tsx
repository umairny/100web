import { Link } from 'react-router-dom'
import { Container, CTAButton, RestaurantSubNav } from '../../components'

export function SerenitySpa() {
  return (
    <main className="bg-[#fbf7ea] text-[#5f4d3d]">
      <RestaurantSubNav
        brand="Serenity Spa"
        collectionPath="/beauty"
        links={[{ label: 'Treatments', href: '#treatments' }, { label: 'Benefits', href: '#benefits' }, { label: 'Packages', href: '#packages' }]}
        ctaLabel="Reserve"
        ctaHref="#reserve"
        className="border-b border-[#d9ccb1] bg-[#fbf7ea]/95"
        brandClassName="text-[#8fa37a]"
        linkClassName="text-[#5f4d3d] transition hover:bg-white/70 hover:text-[#8fa37a]"
        ctaClassName="bg-[#8fa37a] text-white hover:bg-[#768b65]"
        menuButtonClassName="border-[#d9ccb1] text-[#8fa37a] hover:bg-white/70"
        mobilePanelClassName="border border-[#d9ccb1] bg-[#fbf7ea]"
      />

      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(143,163,122,0.24),transparent_26%),radial-gradient(circle_at_82%_18%,rgba(192,161,90,0.15),transparent_22%)]" />
        <Container className="relative grid items-center gap-12 pb-20 md:grid-cols-[1fr_0.9fr] md:pb-28">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.28em] text-[#8fa37a]">Spa and massage wellness</p>
            <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">Serenity Spa is a retreat for the nervous system.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#756454]">Massage, restorative treatments, and calming packages in a soft natural space.</p>
            <CTAButton href="#reserve" size="lg" className="mt-8 bg-[#8fa37a] hover:bg-[#768b65]">Reserve Treatment</CTAButton>
          </div>
          <div className="rounded-[3rem] bg-white p-8 shadow-2xl"><div className="aspect-square rounded-full bg-[conic-gradient(from_90deg,#8fa37a,#fbf7ea,#c0a15a,#8fa37a)] p-10"><div className="h-full rounded-full bg-[#fbf7ea]" /></div></div>
        </Container>
      </section>

      <section id="about" className="bg-white py-20 md:py-28"><Container className="grid gap-10 md:grid-cols-2 md:items-center"><h2 className="text-4xl font-black md:text-5xl">A peaceful spa for massage, body care, and quiet restoration.</h2><p className="text-lg leading-8 text-[#756454]">Serenity Spa pairs warm hospitality with natural textures, soft lighting, and treatments designed to help guests fully exhale.</p></Container></section>

      <section id="treatments" className="py-20 md:py-28"><Container><div className="grid gap-6 md:grid-cols-3">{['Signature massage', 'Herbal body polish', 'Aromatherapy facial'].map((item) => <article key={item} className="rounded-3xl bg-white p-8 shadow-sm"><div className="mb-8 h-32 rounded-2xl bg-gradient-to-br from-[#8fa37a] to-[#fbf7ea]" /><h3 className="text-2xl font-black">{item}</h3><p className="mt-3 text-[#756454]">A calming treatment paced for deep relaxation.</p></article>)}</div></Container></section>

      <section id="benefits" className="bg-[#8fa37a] py-20 text-white md:py-28"><Container className="grid gap-10 md:grid-cols-2 md:items-center"><div><p className="font-black uppercase tracking-[0.24em] text-[#f7e3a8]">Relaxation benefits</p><h2 className="mt-3 text-4xl font-black md:text-5xl">Feel lighter, calmer, and more present.</h2></div><div className="grid gap-4 sm:grid-cols-3">{['Ease tension', 'Slow down', 'Reset energy'].map((item) => <div key={item} className="rounded-2xl bg-white/12 p-6"><h3 className="text-2xl font-black">{item}</h3></div>)}</div></Container></section>

      <section id="packages" className="py-20 md:py-28"><Container className="grid gap-6 md:grid-cols-3">{['Half-day retreat', 'Couples calm', 'Monthly reset'].map((pack) => <article key={pack} className="rounded-3xl border border-[#d9ccb1] bg-white/70 p-8"><h3 className="text-3xl font-black">{pack}</h3><p className="mt-4 text-[#756454]">Treatment bundles for deeper rest.</p></article>)}</Container></section>

      <section className="bg-white py-20 md:py-28"><Container className="grid gap-6 md:grid-cols-3">{['The massage room was pure calm.', 'I left floating.', 'A beautiful reset after a long week.'].map((quote) => <blockquote key={quote} className="rounded-3xl bg-[#fbf7ea] p-8"><p className="text-xl font-bold leading-8">"{quote}"</p><footer className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#8fa37a]">Spa guest</footer></blockquote>)}</Container></section>

      <section id="reserve" className="bg-[#c0a15a] py-20 text-white"><Container className="text-center"><h2 className="text-4xl font-black md:text-5xl">Reserve your treatment.</h2><p className="mx-auto mt-4 max-w-2xl text-lg text-white/90">Choose a massage, facial, polish, or spa package.</p><CTAButton href="tel:555-0203" size="lg" className="mt-8 bg-[#5f4d3d] text-white hover:bg-[#47382c]">Call (555) 020-3000</CTAButton></Container></section>
      <section className="border-t border-[#d9ccb1] py-8"><Container><Link to="/beauty" className="font-bold text-[#8fa37a] hover:text-[#5f4d3d]">Back to Beauty Collection</Link></Container></section>
      <footer className="py-10"><Container className="flex flex-col justify-between gap-4 text-sm md:flex-row"><p className="font-black">Serenity Spa</p><p className="text-[#756454]">Massage, wellness, and restorative treatments</p></Container></footer>
    </main>
  )
}
