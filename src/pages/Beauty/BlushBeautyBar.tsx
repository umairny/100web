import { useEffect, useState, type MouseEvent, type ReactNode } from 'react'
import {
  ArrowRight,
  Award,
  Camera,
  CirclePlay,
  Clock3,
  Crown,
  Diamond,
  Gem,
  Heart,
  Mail,
  Music2,
  Pin,
  ShoppingBag,
  Sparkles,
  Star,
  UsersRound,
  type LucideIcon,
} from 'lucide-react'

const blushImages = import.meta.glob('../../assets/images/beauty/blush/*.png', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>

const image = (name: string) => blushImages[`../../assets/images/beauty/blush/${name}`]

const navItems = [['Home','home'],['Services','services'],['Gallery','gallery'],['About','about'],['Artists','artists'],['Shop','shop'],['Blog','blog'],['Contact','contact']]

const services: Array<{ name: string; copy: string; price: string; image: string; icon: LucideIcon }> = [
  { name: 'Bold Glam', copy: 'Full coverage makeup for all-night impact.', price: 'From $110', image: 'bold.png', icon: Star },
  { name: 'Soft Glam', copy: 'Flawless, natural enhancement.', price: 'From $90', image: 'soft.png', icon: Heart },
  { name: 'Party Looks', copy: 'Fun, fierce & camera-ready for any celebration.', price: 'From $95', image: 'party.png', icon: Crown },
  { name: 'Social Ready', copy: 'Quick glam refresh for photo-perfect, anywhere.', price: 'From $60', image: 'social.png', icon: Camera },
]

const features: Array<{ title: string; copy: string; icon: LucideIcon }> = [
  { title: 'Luxury Products', copy: 'Premium brands for flawless results.', icon: Diamond },
  { title: 'On Time. Always.', copy: 'Punctual, professional & prepared.', icon: Clock3 },
  { title: 'Expert Artists', copy: 'Skilled pros who bring your vision to life.', icon: Star },
  { title: 'Custom Looks', copy: 'Every look is tailored to you.', icon: Sparkles },
  { title: 'Confidence Boost', copy: 'Walk out feeling unforgettable.', icon: Heart },
]

const artists = [
  { name: 'Lena', role: 'Lead Makeup Artist', image: 'lena.png', copy: 'Specializing in glam, bridal & transformation looks.' },
  { name: 'Maya', role: 'Senior Glam Artist', image: 'maya.png', copy: 'Soft glam, party looks & social-ready expert.' },
]

const testimonials = [
  ['“Blush Beauty Bar made me feel like a queen. My makeup stayed flawless all night and I got so many compliments!”', 'Jessica R.'],
  ['“Professional, talented, and so sweet! They understood exactly what I wanted. 10/10 experience.”', 'Tiffany M.'],
  ['“Every time I book with Blush, I leave feeling more confident than ever. Highly recommend!”', 'Alexis D.'],
]

const products = [
  ['spray.png','Setting Spray','$28'], ['primer.png','Primer','$30'], ['lipgloss.png','Lip Glosses','$25'], ['highlite.png','Highlight Palette','$35'],
]

function Button({ children, href = '#book', outline = false, className = '' }: { children: ReactNode; href?: string; outline?: boolean; className?: string }) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith('#')) return
    const target = document.getElementById(href.slice(1))
    if (!target) return
    event.preventDefault()
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const top = target.getBoundingClientRect().top + window.scrollY - 70
    window.scrollTo({ top: Math.max(0, top), behavior: reduced ? 'auto' : 'smooth' })
    window.history.replaceState(null, '', href)
  }
  return <a href={href} onClick={handleClick} className={`inline-flex min-h-11 items-center justify-center gap-3 rounded-[3px] px-7 py-3 text-xs font-bold uppercase tracking-[0.08em] transition duration-300 hover:-translate-y-0.5 ${outline ? 'border border-[#ff397f] bg-black/20 text-white hover:bg-[#ff397f]' : 'border border-[#ff5b96] bg-[#ee286e] text-white shadow-[0_0_18px_rgba(255,41,113,0.65)] hover:bg-[#ff4385] hover:shadow-[0_0_28px_rgba(255,41,113,0.85)]'} ${className}`}>{children}</a>
}

function SectionTitle({ eyebrow, title }: { eyebrow: string; title?: string }) {
  return <div className="text-center"><p className="text-xs font-bold uppercase tracking-[0.24em] text-[#ff4385]">{eyebrow}</p>{title && <h2 className="blush-serif mt-2 text-2xl text-[#f5e9eb] md:text-3xl">{title}</h2>}</div>
}

export function BlushBeautyBar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let frame = 0
    const update = () => {
      let active = 'home'
      let activeTop = -1
      const marker = window.scrollY + 90
      navItems.forEach(([,id]) => {
        const section = document.getElementById(id)
        const top = section ? section.getBoundingClientRect().top + window.scrollY : -1
        if (section && top <= marker && top > activeTop) { active = id; activeTop = top }
      })
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 3) active = 'contact'
      setActiveSection(active)
      setScrolled(window.scrollY > 18)
    }
    const requestUpdate = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(update) }
    update()
    window.addEventListener('scroll', requestUpdate, { passive: true })
    window.addEventListener('resize', requestUpdate)
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', requestUpdate); window.removeEventListener('resize', requestUpdate) }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const close = (event: KeyboardEvent) => event.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [menuOpen])

  const navigate = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id)
    if (!target) return
    event.preventDefault()
    setMenuOpen(false)
    setActiveSection(id)
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    window.scrollTo({ top: Math.max(0, target.getBoundingClientRect().top + window.scrollY - 70), behavior: reduced ? 'auto' : 'smooth' })
    window.history.replaceState(null, '', `#${id}`)
  }

  return (
    <main className="blush-site brand-motion motion-blush min-h-screen overflow-hidden bg-[#02020b] text-[#f4e8eb]">
      <header className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${scrolled || menuOpen ? 'border-[#ff3374]/30 bg-[#03030d]/95 shadow-[0_10px_40px_rgba(0,0,0,0.65)] backdrop-blur-xl' : 'border-transparent bg-gradient-to-b from-black/70 to-transparent'}`}>
        <div className="mx-auto flex h-[72px] max-w-[1510px] items-center justify-between px-5 lg:px-10">
          <a href="#home" onClick={(event) => navigate(event,'home')} className="leading-none"><span className="blush-script block -rotate-3 text-4xl text-[#ff4d8d] drop-shadow-[0_0_9px_rgba(255,55,128,0.9)]">Blush</span><span className="mt-1 block pl-5 text-[10px] font-bold uppercase tracking-[0.32em] text-white">Beauty Bar</span></a>
          <nav className="hidden items-center gap-7 xl:flex">{navItems.map(([label,id]) => <a key={id} href={`#${id}`} onClick={(event) => navigate(event,id)} aria-current={activeSection === id ? 'location' : undefined} className={`relative py-3 text-xs font-semibold uppercase text-white transition after:absolute after:inset-x-0 after:bottom-1 after:h-px after:bg-[#ff3c7d] after:transition-transform ${activeSection === id ? 'active text-[#ff4d8d] after:scale-x-100' : 'text-white/80 after:scale-x-0 hover:text-[#ff4d8d] hover:after:scale-x-100'}`}>{label}</a>)}</nav>
          <Button className="hidden lg:inline-flex">Book Now <Sparkles className="h-4 w-4" /></Button>
          <button type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="blush-mobile-menu" onClick={() => setMenuOpen((open) => !open)} className="grid h-10 w-10 place-items-center rounded border border-[#ff4385]/60 text-[#ff4385] xl:hidden"><span className="flex flex-col gap-1.5"><i className={`h-px w-5 bg-current transition ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} /><i className={`h-px w-5 bg-current transition ${menuOpen ? 'opacity-0' : ''}`} /><i className={`h-px w-5 bg-current transition ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} /></span></button>
        </div>
        {menuOpen && <nav id="blush-mobile-menu" className="grid max-h-[calc(100vh-72px)] overflow-auto border-t border-[#ff4385]/20 bg-[#050510] p-4 xl:hidden">{navItems.map(([label,id]) => <a key={id} href={`#${id}`} onClick={(event) => navigate(event,id)} className={`rounded px-4 py-3 text-sm font-semibold uppercase ${activeSection === id ? 'active bg-[#ff3374]/15 text-[#ff4d8d]' : 'hover:bg-white/5'}`}>{label}</a>)}<Button className="mt-3">Book Now</Button></nav>}
      </header>

      <section id="home" className="relative min-h-[720px] overflow-hidden sm:min-h-[700px]">
        <img src={image('hero.png')} alt="Bold pink glam makeup look" className="absolute inset-0 h-full w-full object-cover object-[68%_center] sm:object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02020b] via-[#02020b]/80 to-[#02020b]/10 sm:via-[#02020b]/65 lg:via-[#02020b]/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_48%,rgba(255,32,111,0.14),transparent_34%),linear-gradient(to_top,rgba(2,2,11,0.85),transparent_35%)]" />
        <div className="relative mx-auto flex min-h-[720px] max-w-[1510px] items-center px-6 pb-20 pt-32 sm:min-h-[700px] lg:px-14">
          <div className="max-w-[720px]">
            <div className="flex items-center gap-3"><span className="h-px w-10 bg-[#ff4385] shadow-[0_0_8px_#ff4385]" /><p className="text-sm font-bold uppercase tracking-[0.18em] text-[#ffc0d3]">Event-Ready Beauty That Steals the Night</p><Sparkles className="h-4 w-4 shrink-0 text-[#ff4385]" /></div>
            <h1 className="blush-serif mt-6 text-[clamp(3.6rem,7vw,7.25rem)] uppercase leading-[0.82] tracking-[-0.045em] text-white drop-shadow-[0_5px_25px_rgba(0,0,0,0.45)]">Bold Looks.</h1>
            <p className="blush-script mt-3 whitespace-nowrap text-[clamp(3rem,6vw,6.3rem)] leading-none text-[#ff4b8a] drop-shadow-[0_0_12px_rgba(255,47,120,0.95)]">Unforgettable Nights.</p>
            <p className="mt-8 max-w-lg border-l-2 border-[#ff4385] pl-5 text-base leading-7 text-white/80">From soft glam to full-on glam — we create camera-ready beauty that turns heads and steals the spotlight.</p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row"><Button>Book Your Glam <ArrowRight className="h-4 w-4" /></Button><Button href="#services" outline>Explore Services</Button></div>
            <div className="mt-7 flex items-center gap-3 text-xs uppercase tracking-[0.12em] text-white/55"><span className="relative flex h-2.5 w-2.5"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#ff4385] opacity-50" /><span className="relative h-2.5 w-2.5 rounded-full bg-[#ff4385]" /></span>Evening appointments available</div>
          </div>
        </div>
        <a href="#services" className="absolute bottom-8 right-8 hidden items-center gap-3 text-xs uppercase tracking-[0.18em] text-white/55 transition hover:text-[#ff4385] lg:flex"><span className="h-px w-12 bg-current" />Scroll to explore</a>
      </section>

      <section className="relative z-10 mx-auto -mt-8 max-w-[1370px] px-5"><div className="grid rounded-lg border border-[#ff397f] bg-[#080812]/95 px-6 py-5 shadow-[0_0_25px_rgba(255,33,107,0.12)] sm:grid-cols-2 lg:grid-cols-4">{[[Star,'4.9','500+ 5-Star Reviews'],[Diamond,'Expert Beauty Every Time','On Time. On Point. Always.'],[UsersRound,'10K+','Happy Glam Clients'],[Award,'Premium Beauty Experience','Luxury Products. Pro Artists.']].map(([RawIcon,title,copy],index) => { const StatIcon = RawIcon as LucideIcon; return <div key={String(title)} className="flex items-center gap-4 py-3 lg:border-r lg:border-[#ff397f]/45 lg:px-6 lg:last:border-0"><StatIcon className="h-9 w-9 shrink-0 text-[#ff4385]" strokeWidth={1.5} /><div><h2 className="text-base font-semibold uppercase">{String(title)}</h2><p className="mt-1 text-xs text-white/65">{String(copy)}</p>{index === 0 && <span className="text-xs tracking-widest text-[#ffd800]">★★★★★</span>}</div></div> })}</div></section>

      <section id="services" className="mx-auto max-w-[1370px] px-5 py-8"><SectionTitle eyebrow="Our Glam Services" title="Looks for every moment. Perfect for every you." /><div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{services.map(({name,copy,price,image:src,icon:ServiceIcon}) => <article key={name} className="group overflow-hidden rounded-lg border border-[#ff397f]/85 bg-[#080812] transition duration-300 hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,45,119,0.28)]"><div className="aspect-[1.35/1] overflow-hidden"><img src={image(src)} alt={name} className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105" /></div><div className="p-5"><ServiceIcon className="h-7 w-7 text-[#ff4385]" strokeWidth={1.5} /><h3 className="blush-serif mt-2 text-xl uppercase text-[#ff4b8a]">{name}</h3><p className="mt-2 min-h-11 text-sm leading-5 text-white/70">{copy}</p><p className="mt-3 text-xs font-bold uppercase tracking-wider text-[#ff4385]">{price}</p></div></article>)}</div></section>

      <section id="gallery" className="mx-auto max-w-[1370px] px-5 pb-8">
        <div className="group relative grid overflow-hidden rounded-xl border border-[#ff397f]/85 bg-[#070711] shadow-[0_14px_45px_rgba(0,0,0,0.4),0_0_22px_rgba(255,38,112,0.10)] md:grid-cols-[0.82fr_2.18fr]">
          <div className="relative flex min-h-64 flex-col justify-center overflow-hidden bg-[radial-gradient(circle_at_20%_20%,rgba(255,48,119,0.16),transparent_44%)] p-7 md:p-9">
            <Sparkles className="absolute -right-5 -top-5 h-28 w-28 text-[#ff4385]/10" strokeWidth={1} />
            <div className="flex items-center gap-3"><span className="h-px w-8 bg-[#ff4385]" /><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff4385]">Signature Looks</p></div>
            <h2 className="blush-serif mt-4 text-4xl leading-[0.95] md:text-5xl">Your Look.<br /><span className="text-[#ff8aaf]">Our Artistry.</span></h2>
            <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">Precision detail, bold color and a finish designed around you.</p>
            <Button href="#blog" outline className="mt-6 w-fit min-h-10 px-6 py-2">View Gallery <ArrowRight className="h-4 w-4" /></Button>
          </div>
          <div className="relative min-h-64 overflow-hidden md:min-h-[310px]">
            <img src={image('banner.png')} alt="Signature Blush makeup looks" className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070711]/35 via-transparent to-transparent" />
            <div className="absolute right-4 top-4 rounded-full border border-white/20 bg-black/35 px-4 py-2 text-xs uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">The Blush Edit</div>
            <a href="#blog" aria-label="Explore signature looks" className="absolute right-4 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#ff6b9e]/70 bg-[#120712]/75 text-[#ff6b9e] backdrop-blur-md transition hover:scale-105 hover:bg-[#ff397f] hover:text-white"><ArrowRight className="h-5 w-5" /></a>
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-[1370px] gap-8 px-5 py-5 lg:grid-cols-[1.08fr_0.92fr] lg:items-center"><img src={image('interior.png')} alt="Blush Beauty Bar neon interior" className="min-h-[360px] w-full rounded-lg border border-[#ff397f]/70 object-cover" /><div className="px-2 lg:px-8"><p className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff4385]">About Us</p><h2 className="blush-serif mt-3 text-4xl uppercase leading-none md:text-5xl">More Than Makeup.<br />It’s <span className="text-[#ff4385]">An Experience.</span></h2><p className="mt-5 max-w-xl text-sm leading-6 text-white/65">Blush Beauty Bar is more than beauty — it’s confidence, celebration and self-expression. From everyday looks to unforgettable nights, we make you feel iconic.</p><Button href="#blog" outline className="mt-6">Learn More</Button></div></section>

      <section className="mx-auto max-w-[1370px] px-5 py-5"><div className="mb-5 flex items-center gap-4"><span className="h-px flex-1 bg-[#ff397f]/60" /><h2 className="text-center text-xs font-bold uppercase tracking-[0.2em] text-[#ff4385]">Why Choose Blush Beauty Bar?</h2><span className="h-px flex-1 bg-[#ff397f]/60" /></div><div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">{features.map(({title,copy,icon:FeatureIcon}) => <div key={title} className="flex gap-3"><FeatureIcon className="h-8 w-8 shrink-0 text-[#ff4385]" strokeWidth={1.5} /><div><h3 className="text-xs font-bold uppercase text-[#ff4385]">{title}</h3><p className="mt-1 text-xs leading-5 text-white/60">{copy}</p></div></div>)}</div></section>

      <section id="artists" className="mx-auto max-w-[1170px] px-5 py-6"><div className="mb-5 flex items-center gap-4"><span className="h-px flex-1 bg-[#ff397f]/60" /><h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff4385]">Meet Our Artists</h2><span className="h-px flex-1 bg-[#ff397f]/60" /></div><div className="grid gap-6 md:grid-cols-2">{artists.map((artist) => <article key={artist.name} className="grid overflow-hidden rounded-lg border border-[#ff397f]/80 bg-[#080812] sm:grid-cols-[0.85fr_1.15fr]"><img src={image(artist.image)} alt={`${artist.name}, ${artist.role}`} className="h-full min-h-52 w-full object-cover" /><div className="flex flex-col justify-center p-6"><h3 className="blush-serif text-2xl uppercase">{artist.name}</h3><p className="blush-script mt-1 text-2xl text-[#ff4385]">{artist.role}</p><p className="mt-3 text-sm leading-5 text-white/65">{artist.copy}</p><div className="mt-4 flex gap-3 text-[#ff4385]"><a href="#contact" aria-label={`${artist.name} gallery`}><Camera className="h-4 w-4" /></a><a href="#contact" aria-label={`Email ${artist.name}`}><Mail className="h-4 w-4" /></a></div></div></article>)}</div></section>

      <section id="blog" className="mx-auto max-w-[1370px] px-5 pb-6"><div className="mb-4 flex items-center gap-4"><span className="h-px flex-1 bg-[#ff397f]/60" /><h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#ff4385]">Loved By Our Clients</h2><span className="h-px flex-1 bg-[#ff397f]/60" /></div><div className="grid gap-4 md:grid-cols-3">{testimonials.map(([quote,name]) => <blockquote key={name} className="rounded-lg border border-[#ff397f]/75 bg-[#080812] p-6"><p className="blush-serif text-4xl leading-none text-[#ff4385]">“</p><p className="text-sm leading-6 text-white/70">{quote}</p><footer className="mt-4 flex items-center justify-between gap-3"><span className="text-xs font-semibold uppercase text-[#ffb3c9]">— {name}</span><span className="text-xs tracking-widest text-[#ffe400]">★★★★★</span></footer></blockquote>)}</div></section>

      <section id="book" className="mx-auto max-w-[1370px] px-5 pb-7"><div className="relative overflow-hidden rounded-lg border border-[#ff397f]/75"><img src={image('product-banner.png')} alt="Professional makeup brushes" className="absolute inset-0 h-full w-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#050510]/95 via-[#090614]/60 to-[#180313]/35" /><div className="relative flex min-h-40 flex-col items-start justify-center gap-6 p-8 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="blush-serif text-3xl uppercase md:text-4xl">Your Night. Your Moment.</h2><p className="blush-script mt-1 text-4xl text-[#ff4385] drop-shadow-[0_0_8px_#ff2670]">We Make It Iconic.</p></div><Button className="px-10">Book Your Appointment <Sparkles className="h-4 w-4" /></Button></div></div></section>

      <section id="shop" className="mx-auto max-w-[1170px] px-5 pb-8"><SectionTitle eyebrow="Beauty Essentials" title="Premium beauty must-haves to glow, set & go." /><div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">{products.map(([src,name,price]) => <article key={name} className="group overflow-hidden rounded-lg border border-[#ff397f]/75 bg-[#080812]"><div className="aspect-[1.45/1] overflow-hidden"><img src={image(src)} alt={name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" /></div><div className="p-4"><h3 className="text-xs font-bold uppercase">{name}</h3><p className="mt-1 text-xs text-white/65">{price}</p><button type="button" className="mt-3 flex w-full items-center justify-center gap-2 border border-[#ff397f] py-2 text-xs font-bold uppercase text-[#ff4385] transition hover:bg-[#ff397f] hover:text-white"><ShoppingBag className="h-4 w-4" />Add to Cart</button></div></article>)}</div></section>

      <footer id="contact" className="border-t border-[#ff397f] bg-[#05050d] px-6 py-7"><div className="mx-auto grid max-w-[1370px] gap-8 md:grid-cols-[1fr_0.8fr_1.4fr_1fr]"><div><h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff4385]">Follow The Beauty</h3><p className="mt-2 text-xs text-white/55">Tag us to be featured</p><div className="mt-4 flex gap-3 text-[#ff4385]"><Camera className="h-5 w-5" /><Music2 className="h-5 w-5" /><UsersRound className="h-5 w-5" /><Pin className="h-5 w-5" /><CirclePlay className="h-5 w-5" /></div></div><img src={image('goodvibes.png')} alt="Good Vibes Only" className="mx-auto h-24 w-24 object-contain drop-shadow-[0_0_8px_rgba(255,45,119,0.65)]" /><div><h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff4385]">Glam Gallery</h3><div className="mt-3 grid grid-cols-4 gap-1">{['modal01.png','modal02.png','modal03.png','modal04.png'].map((src) => <a key={src} href="#gallery" className="aspect-square overflow-hidden"><img src={image(src)} alt="Blush glam gallery" className="h-full w-full object-cover transition hover:scale-110" /></a>)}</div></div><div><h3 className="text-xs font-bold uppercase tracking-[0.18em] text-[#ff4385]">Stay In The Glow</h3><p className="mt-2 text-xs leading-5 text-white/55">Subscribe for glam tips, exclusive offers & first access to new looks.</p><form onSubmit={(event) => event.preventDefault()} className="mt-4 flex"><label htmlFor="blush-email" className="sr-only">Email address</label><input id="blush-email" type="email" placeholder="Enter your email" className="min-w-0 flex-1 border border-[#ff397f]/50 bg-[#080812] px-3 py-2.5 text-xs outline-none focus:border-[#ff397f]" /><button type="submit" className="bg-[#ff397f] px-4">→</button></form></div></div><div className="mx-auto mt-7 flex max-w-[1370px] flex-col justify-between gap-3 border-t border-[#ff397f]/25 pt-4 text-xs text-white/40 sm:flex-row"><p>© 2026 Blush Beauty Bar. All rights reserved.</p><p>Privacy Policy &nbsp; · &nbsp; Terms & Conditions &nbsp; · &nbsp; Refund Policy</p><p>Website by Glow Creative ♥</p></div></footer>
    </main>
  )
}
