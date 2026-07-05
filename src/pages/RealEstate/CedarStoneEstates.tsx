import { useEffect, useState, type ReactNode } from 'react'
import {
  ArrowRight,
  ChevronRight,
  Compass,
  Fence,
  Home,
  KeyRound,
  LandPlot,
  Leaf,
  MapPin,
  Menu,
  Mountain,
  ShieldCheck,
  Trees,
  X,
} from 'lucide-react'
import heroImage from '../../assets/images/realestate/cedar-stone/hero.png'
import privateEstatesImage from '../../assets/images/realestate/cedar-stone/private-estates.png'
import luxuryAcreageImage from '../../assets/images/realestate/cedar-stone/luxury-acreage.png'
import heritageImage from '../../assets/images/realestate/cedar-stone/heritage-craftsmanship.png'
import willowImage from '../../assets/images/realestate/cedar-stone/willow-ridge-estate.png'
import stonehavenImage from '../../assets/images/realestate/cedar-stone/stonehaven-acreage.png'
import cedarHollowImage from '../../assets/images/realestate/cedar-stone/cedar-hollow-residence.png'
import craftsmanshipImage from '../../assets/images/realestate/cedar-stone/crafted-privacy.png'
import lifestyleImage from '../../assets/images/realestate/cedar-stone/rural-lifestyle.png'
import estateGroundsImage from '../../assets/images/realestate/cedar-stone/estate-grounds.png'
import equestrianImage from '../../assets/images/realestate/cedar-stone/equestrian-living.png'
import retreatImage from '../../assets/images/realestate/cedar-stone/private-retreat.png'
import ctaImage from '../../assets/images/realestate/cedar-stone/cta-cedar-estate.png'

const navLinks = [
  { label: 'Estates', href: '#estates' },
  { label: 'Acreage', href: '#acreage' },
  { label: 'Craftsmanship', href: '#craftsmanship' },
  { label: 'Lifestyle', href: '#lifestyle' },
  { label: 'Contact', href: '#contact' },
]

const focusCards = [
  { image: privateEstatesImage, badge: 'Estate Home', title: 'Private Estates', text: 'Residences positioned for quiet living, refined architecture, and a strong sense of place.', href: '#estates' },
  { image: luxuryAcreageImage, badge: 'Acreage', title: 'Luxury Acreage', text: 'Expansive land-rich properties offering privacy, flexibility, and enduring value.', href: '#acreage' },
  { image: heritageImage, badge: 'Heritage', title: 'Heritage Craftsmanship', text: 'Homes with timeless materials, careful detailing, and a deep connection to land and legacy.', href: '#craftsmanship' },
]

const properties = [
  { image: willowImage, badge: 'Estate Home', title: 'Willow Ridge Estate', location: 'Countryside Reserve', type: 'Estate Home', size: '8.4 Acres' },
  { image: stonehavenImage, badge: 'Acreage', title: 'Stonehaven Acreage', location: 'Private Valley Enclave', type: 'Luxury Acreage', size: '15.2 Acres' },
  { image: cedarHollowImage, badge: 'Private Retreat', title: 'Cedar Hollow Residence', location: 'Heritage Hills', type: 'Rural Luxury Home', size: '6.1 Acres' },
]

const values = [
  ['01', 'Private Positioning', 'Discreet representation shaped around the character of each property.'],
  ['02', 'Refined Presentation', 'Editorial storytelling that gives architecture and landscape room to speak.'],
  ['03', 'Heritage Perspective', 'An appreciation for material integrity, provenance, and sense of place.'],
  ['04', 'Long-Term Value', 'Clear guidance grounded in land, stewardship, and enduring quality.'],
]

const journal = [
  ['Estate Notes', 'How to Evaluate a Luxury Rural Estate', 'Consider the relationship between residence, land, access, infrastructure, and the life the property can support.'],
  ['Land & Value', 'What Defines Lasting Value in Acreage Properties', 'A thoughtful look at usable land, setting, stewardship, improvements, and long-term flexibility.'],
  ['Heritage Living', 'Privacy, Craftsmanship, and the Appeal of Legacy Homes', 'Why honest materials, considered details, and a settled landscape continue to carry meaning.'],
]

function CedarLogo({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className={`inline-flex items-center gap-3 ${light ? 'text-[#E9E4D8]' : 'text-[#1F2D28]'}`} aria-label="Cedar and Stone Estates home">
      <span className={`grid h-11 w-11 place-items-center border ${light ? 'border-[#A68E72]/70 text-[#A68E72]' : 'border-[#4C6252]/35 text-[#4C6252]'}`}><Trees className="h-5 w-5" strokeWidth={1.5} /></span>
      <span><strong className="cedar-serif block text-[1.18rem] font-normal leading-none tracking-[0.01em]">Cedar & Stone</strong><span className={`mt-1.5 block text-[0.52rem] font-bold uppercase tracking-[0.32em] ${light ? 'text-white/45' : 'text-[#4C6252]'}`}>Estates</span></span>
    </a>
  )
}

function SectionHeading({ eyebrow, title, text, centered = false, light = false }: { eyebrow: string; title: string; text?: string; centered?: boolean; light?: boolean }) {
  return (
    <div className={`${centered ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl'}`} data-cedar-reveal>
      <p className={`text-[0.62rem] font-bold uppercase tracking-[0.3em] ${light ? 'text-[#C5AC8F]' : 'text-[#4C6252]'}`}>{eyebrow}</p>
      <h2 className={`cedar-serif mt-5 text-[clamp(2.8rem,5.5vw,5.5rem)] font-normal leading-[0.96] tracking-[-0.035em] ${light ? 'text-[#E9E4D8]' : 'text-[#1F2D28]'}`}>{title}</h2>
      {text && <p className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${centered ? 'mx-auto' : ''} ${light ? 'text-white/58' : 'text-[#2E3A35]/65'}`}>{text}</p>}
    </div>
  )
}

function CedarButton({ href, children, variant = 'primary' }: { href: string; children: ReactNode; variant?: 'primary' | 'outline' | 'taupe' }) {
  const styles = {
    primary: 'bg-[#4C6252] text-white hover:bg-[#1F2D28]',
    outline: 'border border-[#E9E4D8]/45 text-[#E9E4D8] hover:border-[#A68E72] hover:bg-[#A68E72]',
    taupe: 'bg-[#A68E72] text-[#1F2D28] hover:bg-[#E9E4D8]',
  }
  return <a href={href} className={`group inline-flex min-h-12 items-center justify-center gap-3 px-6 text-[0.68rem] font-bold uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-0.5 ${styles[variant]}`}>{children}<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
}

export function CedarStoneEstates() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const elements = document.querySelectorAll('[data-cedar-reveal]')
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')), { threshold: 0.08 })
    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const ids = ['estates', 'craftsmanship', 'lifestyle', 'acreage', 'contact']
    const update = () => {
      let active = ''
      ids.forEach((id) => {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= 150) active = id
      })
      setActiveSection(active)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <main className="cedar-site overflow-hidden bg-[#E9E4D8] text-[#2E3A35]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#1F2D28]/10 bg-[#E9E4D8]/94 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[92rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          <CedarLogo />
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Main navigation">{navLinks.map((link) => { const active = activeSection === link.href.slice(1); return <a key={link.label} href={link.href} aria-current={active ? 'page' : undefined} onClick={() => setActiveSection(link.href.slice(1))} className={`border-b py-2 text-[0.66rem] font-bold uppercase tracking-[0.14em] transition ${active ? 'active border-[#4C6252] text-[#4C6252]' : 'border-transparent text-[#1F2D28] hover:text-[#4C6252]'}`}>{link.label}</a> })}</nav>
          <div className="flex items-center gap-3"><a href="#estates" className="hidden bg-[#4C6252] px-5 py-3 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#1F2D28] sm:inline-flex">View Properties</a><button type="button" onClick={() => setMenuOpen((open) => !open)} className="grid h-11 w-11 place-items-center border border-[#1F2D28]/20 text-[#1F2D28] lg:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen}>{menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button></div>
        </div>
        {menuOpen && <nav className="border-t border-[#1F2D28]/10 bg-[#E9E4D8] px-5 py-4 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto grid max-w-[92rem]">{navLinks.map((link) => { const active = activeSection === link.href.slice(1); return <a key={link.label} href={link.href} onClick={() => { setActiveSection(link.href.slice(1)); setMenuOpen(false) }} aria-current={active ? 'page' : undefined} className={`border-b border-[#1F2D28]/10 px-3 py-4 text-xs font-bold uppercase tracking-[0.12em] ${active ? 'active bg-[#4C6252]/10 text-[#4C6252]' : 'text-[#1F2D28]'}`}>{link.label}</a> })}</div></nav>}
      </header>

      <section id="home" className="relative min-h-[900px] pt-20 lg:min-h-[960px]">
        <div className="absolute inset-0 top-20"><img src={heroImage} alt="Sweeping rural estate surrounded by mature trees and open land" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,45,40,0.92)_0%,rgba(31,45,40,0.64)_48%,rgba(31,45,40,0.12)_82%)]" /></div>
        <div className="relative mx-auto flex min-h-[820px] max-w-[92rem] items-center px-5 py-20 sm:px-8 lg:min-h-[880px] lg:px-12"><div className="max-w-5xl text-[#E9E4D8]" data-cedar-reveal><p className="flex items-center gap-4 text-[0.62rem] font-bold uppercase tracking-[0.34em] text-[#C5AC8F]"><span className="h-px w-12 bg-[#A68E72]" />Rural estates · Private acreage</p><h1 className="cedar-serif mt-7 max-w-5xl text-[clamp(4rem,7.8vw,8rem)] font-normal leading-[0.86] tracking-[-0.05em]">Private Estates Rooted in Land, Craft, and <em className="text-[#C5AC8F]">Lasting Value</em></h1><p className="mt-8 max-w-2xl text-base leading-8 text-white/68 md:text-lg">Cedar & Stone Estates presents rural luxury homes and refined acreage properties defined by privacy, heritage-inspired design, and enduring craftsmanship.</p><div className="mt-10 flex flex-wrap gap-3"><CedarButton href="#estates">Explore Estates</CedarButton><CedarButton href="#acreage" variant="outline">Discover Acreage</CedarButton></div></div></div>
        <div className="absolute bottom-0 right-0 hidden bg-[#E9E4D8]/95 lg:grid lg:grid-cols-3">{[[KeyRound, 'Private Rural', 'Estates'], [LandPlot, 'Luxury', 'Acreage'], [Fence, 'Heritage', 'Craftsmanship']].map(([Icon, top, bottom]) => { const InfoIcon = Icon as typeof KeyRound; return <div key={String(bottom)} className="flex min-w-[190px] items-center gap-4 border-l border-[#1F2D28]/10 px-6 py-5 text-[#1F2D28]"><InfoIcon className="h-5 w-5 text-[#4C6252]" strokeWidth={1.5} /><span><b className="block text-xs">{String(top)}</b><small className="text-[0.62rem] text-[#2E3A35]/55">{String(bottom)}</small></span></div> })}</div>
      </section>

      <section className="px-5 py-24 sm:px-8 md:py-32 lg:px-12"><div className="mx-auto max-w-[88rem]"><SectionHeading eyebrow="Our focus" title="A Distinct Approach to Rural Luxury" text="A considered collection shaped by architecture, acreage, and the quiet qualities that make a property enduring." centered /><div className="mt-14 grid gap-6 lg:grid-cols-3">{focusCards.map((card, index) => <article key={card.title} className="group border border-[#1F2D28]/10 bg-[#F4F1EA] p-3 transition duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(31,45,40,0.1)]" data-cedar-reveal style={{ transitionDelay: `${index * 70}ms` }}><div className="aspect-[1.28] overflow-hidden"><img src={card.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div><div className="p-5 pb-7"><span className="text-[0.58rem] font-bold uppercase tracking-[0.22em] text-[#4C6252]">{card.badge}</span><h3 className="cedar-serif mt-4 text-3xl text-[#1F2D28]">{card.title}</h3><p className="mt-4 text-sm leading-7 text-[#2E3A35]/65">{card.text}</p><a href={card.href} className="mt-6 inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#4C6252]">Learn More <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" /></a></div></article>)}</div></div></section>

      <section id="estates" className="bg-[#D8D0C2] px-5 py-24 sm:px-8 md:py-32 lg:px-12"><div className="mx-auto max-w-[92rem]"><div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between"><SectionHeading eyebrow="Selected properties" title="Featured Estates" text="A considered selection of residences and acreage distinguished by setting, privacy, and material character." /><a href="#contact" className="w-fit border-b border-[#4C6252] pb-2 text-[0.65rem] font-bold uppercase tracking-[0.15em] text-[#4C6252]">Request the private collection</a></div><div className="mt-14 grid gap-6 lg:grid-cols-3">{properties.map((property, index) => <article key={property.title} className="group bg-[#E9E4D8] p-3 shadow-[0_18px_50px_rgba(31,45,40,0.08)] transition duration-500 hover:-translate-y-1" data-cedar-reveal style={{ transitionDelay: `${index * 70}ms` }}><div className="relative aspect-[1.2] overflow-hidden"><img src={property.image} alt={property.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /><span className="absolute left-4 top-4 bg-[#1F2D28]/90 px-3 py-2 text-[0.55rem] font-bold uppercase tracking-[0.18em] text-[#E9E4D8]">{property.badge}</span></div><div className="p-5 pb-6"><p className="flex items-center gap-2 text-[0.6rem] font-bold uppercase tracking-[0.15em] text-[#4C6252]"><MapPin className="h-3.5 w-3.5" />{property.location}</p><h3 className="cedar-serif mt-4 text-3xl text-[#1F2D28]">{property.title}</h3><div className="mt-6 grid grid-cols-2 border-y border-[#1F2D28]/12 py-4 text-xs"><div><small className="block uppercase tracking-[0.14em] text-[#2E3A35]/50">Type</small><b className="mt-2 block font-medium">{property.type}</b></div><div className="border-l border-[#1F2D28]/12 pl-5"><small className="block uppercase tracking-[0.14em] text-[#2E3A35]/50">Land</small><b className="mt-2 block font-medium">{property.size}</b></div></div><a href="#contact" className="mt-6 inline-flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#1F2D28]">View Details <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a></div></article>)}</div></div></section>

      <section id="craftsmanship" className="bg-[#1F2D28] text-[#E9E4D8]"><div className="grid lg:grid-cols-2"><div className="min-h-[560px] lg:min-h-[760px]" data-cedar-reveal><img src={craftsmanshipImage} alt="Natural stone and timber craftsmanship in a rural estate" className="h-full w-full object-cover" /></div><div className="flex items-center px-6 py-20 sm:px-12 lg:px-[clamp(3rem,7vw,8rem)]" data-cedar-reveal><div><SectionHeading eyebrow="Material integrity" title="Crafted for Privacy, Built to Endure" text="Our approach highlights homes where natural materials, thoughtful architecture, and enduring workmanship come together to create exceptional rural living." light /><div className="mt-10 grid">{[[Leaf, 'Timeless natural materials'], [Home, 'Thoughtful estate design'], [ShieldCheck, 'Lasting long-term value']].map(([Icon, text], index) => { const FeatureIcon = Icon as typeof Leaf; return <div key={String(text)} className="flex items-center gap-5 border-t border-white/10 py-5"><span className="grid h-10 w-10 place-items-center border border-[#A68E72]/45 text-[#C5AC8F]"><FeatureIcon className="h-5 w-5" strokeWidth={1.5} /></span><span className="text-sm font-medium">{String(text)}</span><span className="ml-auto text-xs text-[#A68E72]">0{index + 1}</span></div> })}</div></div></div></div></section>

      <section id="lifestyle" className="bg-[#F4F1EA] px-5 py-24 sm:px-8 md:py-32 lg:px-12"><div className="mx-auto max-w-[90rem]"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end"><SectionHeading eyebrow="A considered pace" title="The Rural Luxury Lifestyle" text="From quiet mornings and expansive grounds to private retreats and legacy properties, Cedar & Stone Estates represents a slower, more intentional standard of living." /><div className="overflow-hidden" data-cedar-reveal><img src={lifestyleImage} alt="An unhurried rural lifestyle surrounded by open landscape" className="aspect-[2.1] h-full w-full object-cover" /></div></div><div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{[[Compass, 'Privacy'], [LandPlot, 'Land'], [Trees, 'Heritage'], [Mountain, 'Retreat']].map(([Icon, title], index) => { const LifeIcon = Icon as typeof Compass; return <article key={String(title)} className="group border border-[#1F2D28]/10 bg-[#E9E4D8] p-7 transition hover:border-[#4C6252]" data-cedar-reveal style={{ transitionDelay: `${index * 60}ms` }}><LifeIcon className="h-6 w-6 text-[#4C6252]" strokeWidth={1.4} /><span className="mt-14 block text-[0.55rem] uppercase tracking-[0.2em] text-[#A68E72]">0{index + 1}</span><h3 className="cedar-serif mt-3 text-3xl text-[#1F2D28]">{String(title)}</h3></article> })}</div></div></section>

      <section className="border-y border-[#1F2D28]/10 px-5 py-24 sm:px-8 md:py-32 lg:px-12"><div className="mx-auto max-w-[88rem]"><SectionHeading eyebrow="The Cedar & Stone standard" title="Why Cedar & Stone Estates" centered /><div className="mt-14 grid gap-px overflow-hidden bg-[#1F2D28]/12 md:grid-cols-2 lg:grid-cols-4">{values.map(([number, title, text], index) => <article key={title} className="min-h-[300px] bg-[#E9E4D8] p-7" data-cedar-reveal style={{ transitionDelay: `${index * 60}ms` }}><span className="cedar-serif text-4xl text-[#A68E72]">{number}</span><h3 className="cedar-serif mt-16 text-2xl text-[#1F2D28]">{title}</h3><p className="mt-4 text-sm leading-7 text-[#2E3A35]/62">{text}</p></article>)}</div></div></section>

      <section id="acreage" className="relative overflow-hidden bg-[#4C6252] px-5 py-24 text-[#E9E4D8] sm:px-8 md:py-32 lg:px-12">
        <div className="absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full border border-[#C5AC8F]/10" />
        <div className="absolute -right-20 -top-20 h-[22rem] w-[22rem] rounded-full border border-[#C5AC8F]/10" />
        <div className="relative mx-auto max-w-[92rem]">
          <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <SectionHeading eyebrow="Land-led living" title="Luxury Acreage with Room to Breathe" light />
            <div className="lg:pb-2" data-cedar-reveal>
              <p className="max-w-xl text-base leading-8 text-white/65 md:text-lg">More than scale, acreage creates a measured sense of arrival—space for privacy, stewardship, and a life shaped by the landscape.</p>
              <div className="mt-8 grid grid-cols-3 border-y border-white/12 py-5">
                {[['Space', 'To settle'], ['Privacy', 'By nature'], ['Land', 'With purpose']].map(([value, label]) => <div key={value} className="border-r border-white/12 px-4 first:pl-0 last:border-r-0"><strong className="cedar-serif block text-xl font-normal text-[#E9E4D8]">{value}</strong><span className="mt-1 block text-[0.54rem] font-bold uppercase tracking-[0.16em] text-[#C5AC8F]">{label}</span></div>)}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2 lg:grid-rows-2">
            {[
              [estateGroundsImage, 'Acreage', 'Country Estate Grounds', 'Open lawns, mature trees, and a landscape that gives the residence its sense of place.'],
              [equestrianImage, 'Land-Rich Living', 'Equestrian & Land-Rich Living', 'Purposeful acreage with the flexibility to support horses, outbuildings, and considered country living.'],
              [retreatImage, 'Private Retreat', 'Private Retreat Properties', 'Secluded settings where distance, views, and quiet become part of the everyday experience.'],
            ].map(([image, label, title, description], index) => (
              <article key={title} className={`group relative min-h-[320px] overflow-hidden border border-white/10 ${index === 0 ? 'lg:row-span-2 lg:min-h-[680px]' : ''}`} data-cedar-reveal style={{ transitionDelay: `${index * 70}ms` }}>
                <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-[1.035]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F2D28] via-[#1F2D28]/30 to-black/5" />
                <span className="absolute left-6 top-6 grid h-10 w-10 place-items-center border border-white/35 bg-[#1F2D28]/25 text-[0.6rem] font-bold text-white backdrop-blur-sm">0{index + 1}</span>
                <div className="absolute inset-x-0 bottom-0 p-7 sm:p-8">
                  <p className="text-[0.56rem] font-bold uppercase tracking-[0.24em] text-[#C5AC8F]">{label}</p>
                  <h3 className={`cedar-serif mt-3 leading-none ${index === 0 ? 'text-4xl sm:text-5xl' : 'text-3xl'}`}>{title}</h3>
                  <div className="grid grid-cols-[1fr_auto] items-end gap-5 overflow-hidden">
                    <p className="mt-4 max-w-xl text-sm leading-6 text-white/60">{description}</p>
                    <a href="#contact" className="grid h-11 w-11 shrink-0 place-items-center border border-white/35 text-white transition group-hover:border-[#C5AC8F] group-hover:bg-[#A68E72] group-hover:text-[#1F2D28]" aria-label={`Explore ${title}`}><ArrowRight className="h-4 w-4" /></a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F4F1EA] px-5 py-24 sm:px-8 md:py-32 lg:px-12"><div className="mx-auto max-w-[88rem]"><SectionHeading eyebrow="Journal" title="Refined Living, Thoughtfully Presented" text="Notes on rural property, enduring materials, and the quieter considerations behind a meaningful estate." /><div className="mt-12 grid gap-6 lg:grid-cols-3">{journal.map(([label, title, text], index) => <article key={title} className="group flex min-h-[330px] flex-col border-t border-[#A68E72] bg-[#E9E4D8] p-7 transition hover:-translate-y-1 hover:shadow-lg" data-cedar-reveal style={{ transitionDelay: `${index * 60}ms` }}><span className="text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[#4C6252]">{label}</span><h3 className="cedar-serif mt-7 text-3xl leading-tight text-[#1F2D28]">{title}</h3><p className="mt-5 text-sm leading-7 text-[#2E3A35]/62">{text}</p><a href="#contact" className="mt-auto inline-flex items-center gap-2 pt-7 text-[0.64rem] font-bold uppercase tracking-[0.14em] text-[#4C6252]">Read More <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a></article>)}</div></div></section>

      <section id="contact" className="relative px-5 py-28 text-[#E9E4D8] sm:px-8 md:py-40 lg:px-12"><div className="absolute inset-0"><img src={ctaImage} alt="Private cedar estate at the edge of a quiet landscape" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(31,45,40,0.96),rgba(31,45,40,0.76),rgba(31,45,40,0.3))]" /></div><div className="relative mx-auto max-w-[88rem]" data-cedar-reveal><p className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-[#C5AC8F]">A more considered search</p><h2 className="cedar-serif mt-6 max-w-4xl text-[clamp(3.2rem,6.5vw,6.5rem)] font-normal leading-[0.92] tracking-[-0.04em]">Discover a More Private Way to Live</h2><p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">Connect with Cedar & Stone Estates to explore luxury rural homes and acreage properties shaped by beauty, privacy, and lasting value.</p><div className="mt-10"><CedarButton href="mailto:hello@cedarandstoneestates.com" variant="taupe">Inquire About Properties</CedarButton></div></div></section>

      <footer className="bg-[#17231f] px-5 py-14 text-[#E9E4D8] sm:px-8 lg:px-12"><div className="mx-auto max-w-[88rem]"><div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.3fr_0.7fr_0.8fr_1fr]"><div><CedarLogo light /><p className="mt-6 max-w-sm text-sm leading-7 text-white/48">Rural estates and luxury acreage positioned through privacy, craftsmanship, and lasting value.</p></div><div><p className="text-[0.58rem] font-bold uppercase tracking-[0.22em] text-[#C5AC8F]">Quick links</p><div className="mt-5 grid gap-3">{navLinks.slice(0, 4).map((link) => <a key={link.label} href={link.href} className="text-sm text-white/48 transition hover:text-white">{link.label}</a>)}</div></div><div><p className="text-[0.58rem] font-bold uppercase tracking-[0.22em] text-[#C5AC8F]">Properties</p><div className="mt-5 grid gap-3 text-sm text-white/48"><a href="#estates">Private Estates</a><a href="#acreage">Luxury Acreage</a><a href="#craftsmanship">Heritage Homes</a><a href="#acreage">Private Retreats</a></div></div><div><p className="text-[0.58rem] font-bold uppercase tracking-[0.22em] text-[#C5AC8F]">Contact</p><div className="mt-5 grid gap-3 text-sm text-white/48"><a href="mailto:hello@cedarandstoneestates.com" className="break-all hover:text-white">hello@cedarandstoneestates.com</a><a href="tel:+12125550172" className="hover:text-white">(212) 555-0172</a><span>New York, NY</span></div></div></div><div className="flex flex-col gap-3 pt-7 text-[0.62rem] uppercase tracking-[0.12em] text-white/28 sm:flex-row sm:justify-between"><p>© 2026 Cedar & Stone Estates</p><p>Private estates · Luxury acreage · Heritage homes</p></div></div></footer>
    </main>
  )
}