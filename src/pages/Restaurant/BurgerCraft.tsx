import { useEffect, useState, type FormEvent, type ReactNode } from 'react'
import { Link } from 'react-router-dom'
import { imageUrl } from '../../assets/images'

const burgerImages = {
  hero: imageUrl('restaurent/burger-craft/hero.png'),
  smash: imageUrl('restaurent/burger-craft/smash.png'),
  fries: imageUrl('restaurent/burger-craft/golden.png'),
  sauces: imageUrl('restaurent/burger-craft/sauces.png'),
  shake: imageUrl('restaurent/burger-craft/shake.png'),
  combo: imageUrl('restaurent/burger-craft/combo.png'),
}

const navItems = [
  ['Menu', '#menu'],
  ['Our Story', '#story'],
  ['Locations', '#locations'],
  ['Catering', '#catering'],
  ['Rewards', '#rewards'],
]

const locations = [
  {
    city: 'Nashville',
    neighborhood: 'The Gulch',
    address: '125 Craft Street, Nashville, TN 37203',
    hours: '10:30 AM–10 PM',
    phone: '(615) 555-0123',
    note: 'Dine-in · Pickup · Delivery',
  },
  {
    city: 'Franklin',
    neighborhood: 'Main Street',
    address: '44 Main Street, Franklin, TN 37064',
    hours: '11 AM–9 PM',
    phone: '(615) 555-0168',
    note: 'Dine-in · Patio · Pickup',
  },
  {
    city: 'Brentwood',
    neighborhood: 'Hill Center',
    address: '920 Franklin Road, Brentwood, TN 37027',
    hours: '10:30 AM–9:30 PM',
    phone: '(615) 555-0194',
    note: 'Dine-in · Pickup · Delivery',
  },
]

const favorites = [
  { title: 'Smash Burgers', text: 'Smashed thin, seared crispy, stacked with flavor.', image: burgerImages.smash, color: '#c82b24', icon: 'burger' },
  { title: 'Golden Fries', text: 'Crispy on the outside, soft and fluffy inside.', image: burgerImages.fries, color: '#e7a315', icon: 'fries' },
  { title: 'House Sauces', text: 'Bold, craveable flavors made fresh in-house daily.', image: burgerImages.sauces, color: '#5c8a2a', icon: 'bottle' },
  { title: 'Thick Shakes', text: 'Rich, creamy, and thick—the perfect finish.', image: burgerImages.shake, color: '#8a4a2b', icon: 'shake' },
]

const values = [
  ['leaf', 'Quality ingredients', 'Premium, responsibly sourced ingredients you can taste.'],
  ['burger', 'Smashed to perfection', 'Our smash technique locks in flavor and creates a crisp crust.'],
  ['flame', 'Cooked to order', 'Every item is cooked fresh, never sitting under a heat lamp.'],
  ['heart', 'Made with care', 'From our kitchen to your tray—made by people who care.'],
]

const reviews = [
  ['“Best smash burger I’ve ever had.” Everything is fresh and full of flavor.', 'Jason M.'],
  ['Fries are perfect. Sauces are next level. This place never misses.', 'Sarah T.'],
  ['Shakes are thick, creamy, and amazing. Highly recommend!', 'Mike R.'],
]

function Icon({ name, className = 'h-6 w-6' }: { name: string; className?: string }) {
  const paths: Record<string, ReactNode> = {
    burger: <><path d="M4 11c.6-4.1 3.4-6 8-6s7.4 1.9 8 6H4ZM3 14h18M5 17h14l-1 3H6l-1-3Z" /><path d="m6 14 2 2 2-2 2 2 2-2 2 2 2-2" /></>,
    fries: <><path d="m7 3 1 9M11 2l1 10M16 3l-1 9M4 10h16l-2 11H6L4 10Z" /></>,
    bottle: <><path d="M9 3h6v4l2 3v11H7V10l2-3V3ZM9 14h8" /></>,
    shake: <><path d="M7 7h10l-1 14H8L7 7ZM5 4h14M14 7l3-5" /></>,
    leaf: <><path d="M20 3C9 4 4 9 5 18c8 1 13-4 15-15Z" /><path d="M5 21c3-7 7-10 13-15" /></>,
    flame: <path d="M13 2.5c.5 4.2-3.4 5.4-2 9.1 1-1.7 2.4-2.6 3.7-3.4 2.2 2.4 3.8 4.8 3.8 8A6.6 6.6 0 0 1 12 22.8a6.6 6.6 0 0 1-6.6-6.6C5.4 11.5 8.4 8 13 2.5Z" />,
    heart: <path d="M20.8 5.7c-2.2-2.1-5.6-1.8-7.5.4L12 7.6l-1.3-1.5C8.8 3.9 5.4 3.6 3.2 5.7 1 8 1.2 11.6 3.7 13.8L12 21l8.3-7.2c2.5-2.2 2.7-5.8.5-8.1Z" />,
    arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
    user: <><circle cx="12" cy="8" r="3.5" /><path d="M5 21c.4-4.3 2.7-6.5 7-6.5s6.6 2.2 7 6.5" /></>,
    bag: <><path d="M5 8h14l1 13H4L5 8Z" /><path d="M9 9V6a3 3 0 0 1 6 0v3" /></>,
    cart: <><path d="M3 4h2l2 11h10l3-8H6" /><circle cx="9" cy="20" r="1" /><circle cx="17" cy="20" r="1" /></>,
    truck: <><path d="M3 6h11v11H3zM14 10h4l3 4v3h-7" /><circle cx="7" cy="19" r="2" /><circle cx="18" cy="19" r="2" /></>,
    rewards: <><path d="M4 9h16v12H4zM3 9h18M12 9v12" /><path d="M12 9H8.5a2.5 2.5 0 1 1 2.5-3.8L12 9Zm0 0h3.5A2.5 2.5 0 1 0 13 5.2L12 9Z" /></>,
    pin: <><path d="M20 10c0 5.6-8 12-8 12S4 15.6 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
    clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v6l4 2" /></>,
    phone: <path d="M7 3H4.5A1.5 1.5 0 0 0 3 4.5C3 13.6 10.4 21 19.5 21a1.5 1.5 0 0 0 1.5-1.5V17l-5-1-1.2 3c-4.4-1.8-8-5.4-9.8-9.8L8 8 7 3Z" />,
  }
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={className}>{paths[name]}</svg>
}

export function BurgerCraft() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [notice, setNotice] = useState('')
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>('[data-burger-reveal]')
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      items.forEach((item) => item.classList.add('is-visible'))
      return
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible')
        observer.unobserve(entry.target)
      }
    }), { threshold: 0.12 })
    items.forEach((item) => observer.observe(item))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sectionIds = ['home', 'menu', 'story', 'order', 'rewards', 'locations', 'catering']
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section))

    const updateActiveSection = () => {
      const marker = window.innerHeight * 0.32
      const current = sections.reduce((active, section) => {
        return section.getBoundingClientRect().top <= marker ? section.id : active
      }, 'home')
      setActiveSection(current)
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)
    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  const isNavActive = (href: string) => {
    const target = href.slice(1)
    if (target === 'menu') return activeSection === 'menu' || activeSection === 'order'
    return activeSection === target
  }

  const showNotice = (message: string) => {
    setNotice(message)
    window.setTimeout(() => setNotice(''), 3200)
  }

  const submitEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    showNotice('Welcome to the Built Fresh Club!')
    event.currentTarget.reset()
  }

  return (
    <main className="motion-burgercraft min-h-screen overflow-x-hidden bg-[#fffcf7] text-[#211c18]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#d9c9b8] bg-[#fffdf9]/95 shadow-sm backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a href="#home" onClick={() => setMenuOpen(false)} className="leading-none"><span className="burger-script block text-3xl font-black text-[#c72b25] sm:text-4xl">Built Fresh</span><span className="mt-1 block text-center text-[0.47rem] font-black uppercase tracking-[0.35em]">Smash burgers</span></a>
          <nav aria-label="Built Fresh navigation" className="hidden items-center gap-9 lg:flex">{navItems.map(([label, href]) => {
            const isActive = isNavActive(href)
            return <a key={href} href={href} aria-current={isActive ? 'location' : undefined} className={`relative py-3 text-[0.68rem] font-black uppercase tracking-[0.08em] transition hover:text-[#c72b25] ${isActive ? 'active text-[#c72b25]' : 'text-[#211c18]'}`}><span>{label}</span><span className={`absolute inset-x-0 bottom-1 h-[2px] origin-left rounded-full bg-[#c72b25] transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'}`} /></a>
          })}</nav>
          <div className="hidden items-center gap-4 sm:flex"><button type="button" aria-label="Account" className="grid h-10 w-10 place-items-center transition hover:text-[#c72b25]"><Icon name="user" /></button><button type="button" aria-label="Shopping bag" className="grid h-10 w-10 place-items-center transition hover:text-[#c72b25]"><Icon name="bag" /></button><a href="#order" aria-current={activeSection === 'order' ? 'location' : undefined} className={`rounded-2xl bg-[#c72b25] px-6 py-4 text-[0.65rem] font-black uppercase tracking-[0.08em] text-white shadow-lg shadow-red-800/10 transition hover:-translate-y-0.5 hover:bg-[#a91f1b] ${activeSection === 'order' ? 'active ring-4 ring-[#c72b25]/15' : ''}`}>Order now</a></div>
          <button type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen((current) => !current)} className="grid h-11 w-11 place-items-center rounded-xl border border-[#ded0c2] sm:hidden"><span className="flex w-5 flex-col gap-1.5"><span className={`h-[2px] bg-[#211c18] transition ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} /><span className={`h-[2px] bg-[#211c18] transition ${menuOpen ? 'opacity-0' : ''}`} /><span className={`h-[2px] bg-[#211c18] transition ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} /></span></button>
        </div>
        <div className={`overflow-hidden border-t border-[#e8ddd1] bg-[#fffaf3] transition-all duration-500 sm:hidden ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}><div className="grid p-4">{[...navItems, ['Order Now', '#order']].map(([label, href]) => {
          const isActive = isNavActive(href)
          return <a key={href} href={href} aria-current={isActive ? 'location' : undefined} onClick={() => setMenuOpen(false)} className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition ${isActive ? 'active bg-[#c72b25] text-white' : 'hover:bg-[#f6eadd]'}`}>{label}<span className={isActive ? 'text-white' : 'text-[#c72b25]'}>→</span></a>
        })}</div></div>
      </header>

      <section id="home" className="relative isolate min-h-[720px] pt-20 sm:min-h-[790px]">
        <img src={burgerImages.hero} alt="Built Fresh double smash burger with golden fries and a thick shake" className="absolute inset-0 -z-30 h-full w-full object-cover object-[61%_center]" />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(255,252,247,0.99)_0%,rgba(255,252,247,0.94)_35%,rgba(255,252,247,0.24)_68%,rgba(255,252,247,0.02)_100%)]" />
        <div className="mx-auto flex min-h-[640px] max-w-[1440px] items-center px-5 py-16 sm:min-h-[710px] sm:px-8 lg:px-12">
          <div className="max-w-[680px]" data-burger-reveal>
            <h1 className="burger-display text-[clamp(3.4rem,7vw,7.4rem)] font-black uppercase leading-[0.82] tracking-[-0.055em]">Built fresh.<br />Stacked high.<br /><span className="burger-script normal-case text-[#c72b25]">Served Hot.</span></h1>
            <span className="mt-4 block h-2 w-56 -rotate-2 rounded-full bg-[#e8a614] sm:w-72" />
            <p className="mt-7 max-w-lg text-base font-medium leading-7 text-[#423a34] sm:text-lg sm:leading-8">Smash-style burgers. Golden fries. House sauces. Thick shakes. All made fresh, crafted with care, and served hot for serious burger lovers.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#order" className="inline-flex items-center justify-center gap-3 rounded-2xl bg-[#c72b25] px-7 py-4 text-xs font-black uppercase tracking-[0.08em] text-white shadow-lg transition hover:-translate-y-1 hover:bg-[#aa211c]">Order now <Icon name="arrow" className="h-4 w-4" /></a><a href="#menu" className="inline-flex items-center justify-center rounded-2xl border-2 border-[#df9e1a] bg-white/65 px-7 py-4 text-xs font-black uppercase tracking-[0.08em] text-[#b87707] transition hover:-translate-y-1 hover:bg-[#fff3d9]">View menu</a></div>
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-[0.57rem] font-black uppercase tracking-[0.08em]">{[['leaf', 'Fresh ingredients', '#5f8c2f'], ['flame', 'Cooked to order', '#c72b25'], ['heart', 'Made with care', '#c72b25']].map(([icon, text, color]) => <span key={text} className="flex items-center gap-2" style={{ color }}><Icon name={icon} className="h-5 w-5" /><span className="text-[#3c352f]">{text}</span></span>)}</div>
          </div>
        </div>
      </section>

      <section id="menu" className="bg-[#fffdf9] py-16 sm:py-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="text-center" data-burger-reveal><p className="text-[0.63rem] font-black uppercase tracking-[0.13em] text-[#c72b25]">Our favorites</p><h2 className="burger-display mt-2 text-3xl font-black tracking-[-0.035em] sm:text-5xl">Made Fresh. Loved Daily.</h2></div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {favorites.map((item, index) => <article key={item.title} data-burger-reveal style={{ transitionDelay: `${index * 60}ms` }} className="group overflow-hidden rounded-[1.4rem] border border-[#e4d6c8] bg-white shadow-[0_10px_30px_rgba(69,42,25,0.07)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_18px_45px_rgba(69,42,25,0.13)]"><div className="relative aspect-[1.45] overflow-hidden"><img src={item.image} alt={item.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]" /><span className="absolute -bottom-7 left-5 grid h-14 w-14 place-items-center rounded-full border-[3px] border-white text-white shadow-lg" style={{ backgroundColor: item.color }}><Icon name={item.icon} /></span></div><div className="p-5 pt-10"><h3 className="burger-display text-xl font-black">{item.title}</h3><p className="mt-2 min-h-12 text-xs leading-5 text-[#62584f]">{item.text}</p><a href="#order" className="mt-4 inline-flex items-center gap-2 text-[0.58rem] font-black uppercase tracking-[0.11em] text-[#c72b25]">Explore <Icon name="arrow" className="h-3 w-3" /></a></div></article>)}
          </div>
        </div>
      </section>

      <section id="story" className="px-5 pb-8 sm:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-6 rounded-[1.3rem] border border-[#e3d4c4] bg-[#faf5ec] p-6 lg:grid-cols-[1.15fr_repeat(4,1fr)] lg:gap-0" data-burger-reveal>
          <div className="pr-6"><p className="text-[0.57rem] font-black uppercase tracking-[0.13em] text-[#c72b25]">Real ingredients</p><h2 className="burger-display mt-2 text-3xl font-black leading-[0.9]">Fresh is<br />Our Standard.</h2><p className="mt-3 text-xs leading-5 text-[#62584f]">We use real ingredients, sourced responsibly and prepared daily.</p></div>
          {values.map(([icon, title, text]) => <div key={title} className="border-t border-[#e3d4c4] pt-5 text-center lg:border-l lg:border-t-0 lg:px-5 lg:pt-0"><Icon name={icon} className="mx-auto h-10 w-10 text-[#5f8c2f]" /><h3 className="mt-3 text-sm font-black">{title}</h3><p className="mt-2 text-[0.68rem] leading-5 text-[#62584f]">{text}</p></div>)}
        </div>
      </section>

      <section id="order" className="px-5 py-8 sm:px-8">
        <div className="relative mx-auto min-h-[270px] max-w-[1240px] overflow-hidden rounded-[1.4rem] bg-[#171614] text-white" data-burger-reveal><img src={burgerImages.combo} alt="Signature burger combo with fries and shake" loading="lazy" className="absolute inset-0 h-full w-full object-cover" /><div className="relative mr-auto flex min-h-[270px] max-w-xl flex-col items-center justify-center p-7 text-center"><p className="burger-script text-3xl text-[#e5a516]">The</p><h2 className="burger-display text-4xl font-black uppercase leading-[0.8] sm:text-6xl">Signature<br /><span className="burger-script normal-case text-[#d73328]">Combo</span></h2><p className="mt-3 text-[0.6rem] font-black uppercase tracking-[0.11em] text-[#e5a516]">Any signature burger + fries + thick shake</p><div className="mt-5 flex items-center gap-4"><span className="bg-[#e6a416] px-5 py-2 text-2xl font-black text-[#171614]">$15.99</span><button type="button" onClick={() => showNotice('Signature combo added to your order!')} className="inline-flex items-center gap-2 rounded-xl bg-[#c72b25] px-5 py-3 text-[0.6rem] font-black uppercase tracking-[0.08em] transition hover:-translate-y-1 hover:bg-[#a91f1b]">Order now <Icon name="arrow" className="h-4 w-4" /></button></div></div></div>
      </section>

      <section className="px-5 py-4 sm:px-8">
        <div className="mx-auto grid max-w-[1240px] gap-5 rounded-[1.3rem] border border-[#e3d4c4] bg-[#faf5ec] p-5 md:grid-cols-[1.2fr_repeat(3,1fr)_auto] md:items-center" data-burger-reveal><div className="flex items-center gap-4"><span className="grid h-14 w-14 place-items-center rounded-full bg-[#c72b25] text-white"><Icon name="bag" /></span><div><h2 className="burger-display text-2xl font-black">Craving Built Fresh?</h2><p className="text-xs text-[#62584f]">Order online for pickup or delivery.</p></div></div>{[['cart', 'Order online', 'Fast & easy ordering'], ['truck', 'Pickup or delivery', 'Get it your way'], ['rewards', 'Earn rewards', 'Points with every order']].map(([icon, title, text]) => <div key={title} className="flex items-center gap-3"><Icon name={icon} className="h-8 w-8 text-[#5f8c2f]" /><div><p className="text-[0.56rem] font-black uppercase tracking-[0.1em] text-[#c72b25]">{title}</p><p className="mt-1 text-[0.65rem] text-[#62584f]">{text}</p></div></div>)}<button type="button" onClick={() => showNotice('Your order is ready to start!')} className="rounded-xl bg-[#c72b25] px-5 py-3 text-[0.6rem] font-black uppercase text-white">Order now →</button></div>
      </section>

      <section id="rewards" className="bg-[#fffdf9] py-16 sm:py-20">
        <div className="mx-auto max-w-[1180px] px-5 sm:px-8"><p className="text-center text-[0.62rem] font-black uppercase tracking-[0.13em] text-[#c72b25]">What our guests say</p><div className="mt-7 grid gap-4 md:grid-cols-3">{reviews.map(([quote, name], index) => <blockquote key={name} data-burger-reveal className="rounded-[1.2rem] border border-[#e5d8ca] bg-white p-6 shadow-sm"><p className="text-[#e7a315]">★★★★★</p><p className="mt-4 text-sm leading-6 text-[#524940]">{quote}</p><footer className="mt-4 flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#f0ddc6] text-sm font-black text-[#8c4c2c]">{index + 1}</span><span className="text-xs font-black">— {name}</span></footer></blockquote>)}</div></div>
      </section>

      <section id="locations" className="relative overflow-hidden border-y border-[#e3d4c4] bg-[#f8efe5] py-20 sm:py-24">
        <div className="absolute -left-24 top-12 h-72 w-72 rounded-full bg-[#e8a614]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#c72b25]/[0.06] blur-3xl" />
        <div className="relative mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div><p className="text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#c72b25]">Find your Built Fresh</p><h2 className="burger-display mt-3 text-4xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl">Fresh burgers,<br /><span className="burger-script normal-case text-[#c72b25]">right around the corner.</span></h2></div>
            <div className="max-w-md"><p className="text-sm leading-7 text-[#62584f]">Choose your nearest kitchen for current hours, pickup, delivery, and dine-in details.</p><div className="mt-4 flex gap-2"><span className="rounded-full bg-[#e4f0d1] px-3 py-2 text-[0.56rem] font-black uppercase tracking-[0.08em] text-[#567d2d]">3 locations open</span><span className="rounded-full bg-white px-3 py-2 text-[0.56rem] font-black uppercase tracking-[0.08em] text-[#806d5d]">More coming soon</span></div></div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-[1.04fr_0.96fr]">
            <div className="grid gap-4">
              {locations.map((location, index) => (
                <article key={location.city} style={{ transitionDelay: `${index * 70}ms` }} className="group grid gap-5 rounded-[1.4rem] border border-[#dfcfbf] bg-[#fffdf9] p-5 shadow-[0_12px_35px_rgba(67,40,23,0.06)] transition hover:-translate-y-1 hover:border-[#c72b25]/35 hover:shadow-[0_18px_45px_rgba(67,40,23,0.11)] sm:grid-cols-[1fr_auto] sm:items-center">
                  <div className="flex min-w-0 gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#c72b25] text-white shadow-md shadow-red-800/10"><Icon name="pin" className="h-5 w-5" /></span><div className="min-w-0"><div className="flex flex-wrap items-baseline gap-x-3"><h3 className="burger-display text-2xl font-black">{location.city}</h3><span className="text-[0.57rem] font-black uppercase tracking-[0.12em] text-[#c72b25]">{location.neighborhood}</span></div><p className="mt-2 text-xs leading-5 text-[#62584f]">{location.address}</p><div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-[0.65rem] font-bold text-[#806d5d]"><span className="flex items-center gap-1.5"><Icon name="clock" className="h-4 w-4 text-[#5f8c2f]" />Today · {location.hours}</span><a href={`tel:${location.phone.replace(/\D/g, '')}`} className="flex items-center gap-1.5 hover:text-[#c72b25]"><Icon name="phone" className="h-4 w-4 text-[#5f8c2f]" />{location.phone}</a></div><p className="mt-2 text-[0.56rem] font-black uppercase tracking-[0.08em] text-[#927b68]">{location.note}</p></div></div>
                  <div className="flex gap-2 sm:flex-col"><a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location.address)}`} target="_blank" rel="noreferrer" className="flex-1 rounded-xl border border-[#d8c7b5] px-4 py-2.5 text-center text-[0.58rem] font-black uppercase tracking-[0.07em] transition hover:border-[#211c18] hover:bg-[#211c18] hover:text-white">Directions</a><button type="button" onClick={() => showNotice(`${location.city} selected for pickup`)} className="flex-1 rounded-xl bg-[#c72b25] px-4 py-2.5 text-[0.58rem] font-black uppercase tracking-[0.07em] text-white transition hover:bg-[#aa211c]">Order here</button></div>
                </article>
              ))}
            </div>

            <div className="relative min-h-[430px] overflow-hidden rounded-[1.6rem] border border-[#d8c7b5] bg-[#f1e6d9] shadow-[0_18px_50px_rgba(67,40,23,0.1)]">
              <div className="absolute inset-0 opacity-55 [background-image:linear-gradient(28deg,transparent_46%,#d7c4ae_47%,#d7c4ae_49%,transparent_50%),linear-gradient(112deg,transparent_47%,#decdb9_48%,#decdb9_50%,transparent_51%)] [background-size:92px_92px,135px_135px]" />
              <div className="absolute inset-x-0 top-[42%] h-6 -rotate-6 bg-[#dfcfbc]/75" />
              <div className="absolute bottom-[32%] left-[45%] h-[120%] w-7 rotate-[24deg] bg-[#d4c1aa]/80" />
              {[["Nashville", 'left-[52%] top-[38%]'], ['Franklin', 'left-[30%] top-[67%]'], ['Brentwood', 'left-[64%] top-[61%]']].map(([city, position], index) => <div key={city} className={`absolute ${position} -translate-x-1/2 -translate-y-1/2`}><span className={`grid place-items-center rounded-full border-4 border-white text-white shadow-xl ${index === 0 ? 'h-14 w-14 bg-[#c72b25]' : 'h-11 w-11 bg-[#211c18]'}`}><Icon name="pin" className="h-5 w-5" /></span><span className="mt-2 block rounded-full bg-white/95 px-3 py-1 text-center text-[0.55rem] font-black uppercase shadow-sm">{city}</span></div>)}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#211c18]/95 p-5 text-white shadow-2xl backdrop-blur"><div className="flex items-center justify-between gap-4"><div><p className="text-[0.56rem] font-black uppercase tracking-[0.12em] text-[#e8a614]">Closest kitchen</p><p className="burger-display mt-1 text-xl">Nashville · The Gulch</p></div><span className="rounded-full bg-[#5f8c2f] px-3 py-2 text-[0.52rem] font-black uppercase tracking-[0.08em]">Open now</span></div><p className="mt-3 text-xs text-white/55">About 8 minutes away · Pickup ready in 15–20 min</p></div>
            </div>
          </div>
        </div>
      </section>

      <section id="catering" className="bg-[#211c18] py-16 text-white"><div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-7 px-5 sm:px-8 md:flex-row md:items-center"><div><p className="text-[0.6rem] font-black uppercase tracking-[0.14em] text-[#e7a315]">Big orders. Fresh flavor.</p><h2 className="burger-display mt-2 text-3xl font-black sm:text-5xl">Catering built for a crowd.</h2></div><a href="mailto:catering@builtfresh.test" className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#c72b25] px-7 py-4 text-xs font-black uppercase tracking-[0.08em] transition hover:-translate-y-1">Plan your order <Icon name="arrow" className="h-4 w-4" /></a></div></section>

      <footer className="border-t border-[#e2d2c2] bg-[#fffaf3]">
        <div className="mx-auto max-w-[1240px] px-5 py-14 sm:px-8 sm:py-16">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.7fr_0.85fr_1.15fr] lg:gap-12">
            <div>
              <a href="#home" className="inline-block leading-none"><span className="burger-script block text-5xl font-black text-[#c72b25]">Built Fresh</span><span className="mt-2 block text-center text-[0.48rem] font-black uppercase tracking-[0.35em]">Smash burgers</span></a>
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#62584f]">Smash burgers, golden fries, house sauces and thick shakes—made fresh every day.</p>
              <div className="mt-6 flex gap-3">{['IG', 'FB', 'TK'].map((item) => <a key={item} href="#home" aria-label={item} className="grid h-10 w-10 place-items-center rounded-full bg-[#211c18] text-xs font-black text-white transition hover:-translate-y-1 hover:bg-[#c72b25]">{item}</a>)}</div>
            </div>
            <div><p className="text-xs font-black uppercase tracking-[0.1em]">Quick links</p><div className="mt-5 grid gap-3 text-sm text-[#62584f]"><a href="#menu" className="transition hover:translate-x-1 hover:text-[#c72b25]">Menu</a><a href="#story" className="transition hover:translate-x-1 hover:text-[#c72b25]">Our story</a><a href="#locations" className="transition hover:translate-x-1 hover:text-[#c72b25]">Locations</a><a href="#catering" className="transition hover:translate-x-1 hover:text-[#c72b25]">Catering</a><a href="#rewards" className="transition hover:translate-x-1 hover:text-[#c72b25]">Rewards</a></div></div>
            <div><p className="text-xs font-black uppercase tracking-[0.1em]">Visit &amp; contact</p><p className="mt-5 text-sm leading-7 text-[#62584f]">125 Craft Street<br />Nashville, TN 37203<br /><a href="tel:6155550123" className="hover:text-[#c72b25]">(615) 555-0123</a><br /><a href="mailto:hello@builtfresh.test" className="break-all hover:text-[#c72b25]">hello@builtfresh.test</a></p><p className="mt-4 text-xs font-bold leading-6 text-[#8b7563]">Mon–Thu · 10:30 AM–9 PM<br />Fri–Sat · 10:30 AM–10 PM</p></div>
            <div className="rounded-2xl border border-[#e3d4c4] bg-white p-6 shadow-sm"><p className="text-xs font-black uppercase tracking-[0.1em] text-[#c72b25]">Join the Built Fresh Club</p><h3 className="burger-display mt-3 text-2xl font-black">Fresh deals, straight to your inbox.</h3><p className="mt-3 text-xs leading-5 text-[#62584f]">Get exclusive offers, new menu drops, and rewards updates.</p><form onSubmit={submitEmail} className="mt-5 flex overflow-hidden rounded-xl border border-[#d9c9b8] bg-[#fffaf3] focus-within:border-[#c72b25]"><input required type="email" aria-label="Email address" placeholder="Enter your email" className="min-w-0 flex-1 bg-transparent px-4 py-3 text-xs outline-none" /><button type="submit" aria-label="Join the club" className="grid w-12 place-items-center bg-[#c72b25] text-white transition hover:bg-[#a91f1b]"><Icon name="arrow" className="h-4 w-4" /></button></form></div>
          </div>
        </div>
        <div className="border-t border-[#e2d2c2] bg-[#f7eee4]"><div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 px-5 py-5 text-xs text-[#806d5d] sm:flex-row sm:items-center sm:px-8"><p>© 2026 Built Fresh. All rights reserved.</p><div className="flex flex-wrap gap-x-5 gap-y-2"><a href="#home" className="hover:text-[#c72b25]">Privacy policy</a><a href="#home" className="hover:text-[#c72b25]">Terms of service</a><Link to="/restaurant" className="font-bold text-[#c72b25]">Restaurant collection →</Link></div></div></div>
      </footer>

      <div aria-live="polite" className={`fixed bottom-6 right-6 z-[70] rounded-xl bg-[#211c18] px-5 py-3 text-sm font-bold text-white shadow-2xl transition duration-300 ${notice ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'}`}>{notice}</div>
    </main>
  )
}
