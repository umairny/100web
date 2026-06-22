import { Link } from 'react-router-dom'
import { Container } from '../../components'

type TeaTone = 'herbal' | 'cup' | 'citrus' | 'chamomile' | 'matcha' | 'pot'

interface Tea {
  name: string
  description: string
  price: string
  tone: TeaTone
  image: string
}

interface ResetItem {
  title: string
  description: string
  icon: 'drop' | 'sun' | 'steam' | 'leaf'
}

const navItems = ['Home', 'Menu', 'Rituals', 'Reservations', 'About', 'Journal', 'Contact']
const morningLeafHeroImage = '/images/restaurent/morningleaf-tea/hero-tea.png'
const morningLeafMobileHeroImage = '/images/restaurent/morningleaf-tea/hero-mobile-tea.png'
const morningLeafStoryImage = '/images/restaurent/morningleaf-tea/our-story.png'

const teas: Tea[] = [
  {
    name: 'Herbal Blends',
    description: 'Caffeine-free botanicals for balance and calm.',
    price: '$6.50',
    tone: 'herbal',
    image: '/images/restaurent/morningleaf-tea/herbal-blends.png',
  },
  {
    name: 'Low-Caffeine Cups',
    description: 'Gentle energy with mindful, natural notes.',
    price: '$6.00',
    tone: 'cup',
    image: '/images/restaurent/morningleaf-tea/Low-Caffeine-Cups.png',
  },
  {
    name: 'Citrus Green Tea',
    description: 'Bright citrus. Smooth green. Light and fresh.',
    price: '$6.75',
    tone: 'citrus',
    image: '/images/restaurent/morningleaf-tea/Citrus-Green-Tea.png',
  },
  {
    name: 'Chamomile Reset',
    description: 'Floral and soothing. Perfect for unwinding.',
    price: '$6.50',
    tone: 'chamomile',
    image: '/images/restaurent/morningleaf-tea/Chamomile-Reset.png',
  },
  {
    name: 'Matcha Ritual',
    description: 'Crafted matcha for focus and clarity.',
    price: '$7.25',
    tone: 'matcha',
    image: '/images/restaurent/morningleaf-tea/Matcha-Ritual.png',
  },
  {
    name: 'Steeped Wellness',
    description: 'Thoughtful blends for everyday well-being.',
    price: '$6.75',
    tone: 'pot',
    image: '/images/restaurent/morningleaf-tea/Steeped-Wellness.png',
  },
]

const resetItems: ResetItem[] = [
  { title: 'Relax', description: 'Soft botanicals ease the mind and body.', icon: 'drop' },
  { title: 'Focus', description: 'Clean energy to stay present.', icon: 'sun' },
  { title: 'Unwind', description: 'Slow down with intentional sips.', icon: 'steam' },
  { title: 'Restore', description: 'Nourish from within, daily.', icon: 'leaf' },
]

function LeafLogo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-6 w-6" fill="none" aria-hidden="true">
        <path d="M16 26V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M16 19C9 18 6 13 7 6c7 1 11 5 9 13Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M17 20c7-.8 10-5.2 9-12-6.5.9-10 4.5-9 12Z" stroke="currentColor" strokeWidth="1.6" />
        <path d="M11 13c2.2 1 3.8 2.5 5 4.6M21.5 14c-2 .9-3.5 2.2-4.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
      <span className="font-serif text-2xl">MorningLeaf</span>
    </span>
  )
}

function Icon({ type }: { type: ResetItem['icon'] | 'bag' | 'menu' | 'calendar' | 'home' | 'more' }) {
  const common = 'h-5 w-5'

  if (type === 'menu') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M4 7h16M4 12h16M4 17h16" />
      </svg>
    )
  }

  if (type === 'bag') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 9h10l1 11H6L7 9Z" />
        <path d="M9 9a3 3 0 0 1 6 0" />
      </svg>
    )
  }

  if (type === 'calendar') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 3v4M17 3v4M4 9h16M5 5h14v15H5z" />
      </svg>
    )
  }

  if (type === 'home') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="m4 11 8-7 8 7" />
        <path d="M7 10v10h10V10" />
        <path d="M10 20v-5h4v5" />
      </svg>
    )
  }

  if (type === 'more') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="currentColor" aria-hidden="true">
        <circle cx="5" cy="12" r="1.5" />
        <circle cx="12" cy="12" r="1.5" />
        <circle cx="19" cy="12" r="1.5" />
      </svg>
    )
  }

  if (type === 'drop') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3s6 6.3 6 11a6 6 0 0 1-12 0c0-4.7 6-11 6-11Z" />
        <path d="M10 15a3 3 0 0 0 4 0" />
      </svg>
    )
  }

  if (type === 'sun') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <circle cx="12" cy="12" r="3.5" />
        <path d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1" />
      </svg>
    )
  }

  if (type === 'steam') {
    return (
      <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M7 11h10v4a5 5 0 0 1-10 0v-4Z" />
        <path d="M17 12h1.5a2 2 0 0 1 0 4H17" />
        <path d="M8 6c1-1 .5-2 0-3M12 6c1-1 .5-2 0-3M16 6c1-1 .5-2 0-3" />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 24 24" className={common} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20V9" />
      <path d="M12 16C7 15 5 12 6 7c5 .7 7.5 3.7 6 9Z" />
      <path d="M13 17c4.8-.6 7-3.5 6-8-4.7.6-7 3.2-6 8Z" />
    </svg>
  )
}

function TeaImage({ tone, src, alt, className = '' }: { tone: TeaTone; src?: string; alt?: string; className?: string }) {
  const toneStyles = {
    herbal:
      'bg-[radial-gradient(circle_at_34%_38%,#c29b55_0_10%,transparent_11%),radial-gradient(circle_at_57%_42%,#6f7c4d_0_9%,transparent_10%),radial-gradient(circle_at_44%_62%,#d7c790_0_11%,transparent_12%),linear-gradient(135deg,#3c331f,#a7854d_52%,#ede2c9)]',
    cup:
      'bg-[radial-gradient(ellipse_at_50%_58%,#8a5a28_0_22%,transparent_23%),radial-gradient(ellipse_at_52%_65%,#eee3d0_0_35%,transparent_36%),linear-gradient(135deg,#312918,#d8c6a8)]',
    citrus:
      'bg-[radial-gradient(circle_at_40%_38%,#e5d36a_0_13%,transparent_14%),radial-gradient(circle_at_60%_54%,#a5aa53_0_16%,transparent_17%),linear-gradient(135deg,#4d562b,#eadfa9_58%,#f9f5e8)]',
    chamomile:
      'bg-[radial-gradient(circle_at_46%_48%,#c47d25_0_20%,transparent_21%),radial-gradient(circle_at_60%_35%,#f1d38a_0_8%,transparent_9%),linear-gradient(135deg,#513a1f,#d9b66d_50%,#f6efe0)]',
    matcha:
      'bg-[radial-gradient(circle_at_50%_55%,#8fa37a_0_28%,transparent_29%),radial-gradient(circle_at_48%_50%,#526a38_0_12%,transparent_13%),linear-gradient(135deg,#2c311f,#d3c79d)]',
    pot:
      'bg-[radial-gradient(ellipse_at_55%_56%,#b28d42_0_20%,transparent_21%),radial-gradient(circle_at_46%_43%,#e7d9a2_0_9%,transparent_10%),linear-gradient(135deg,#2b2a1c,#6a6c45_50%,#eee7d7)]',
  }

  return (
    <div className={`relative overflow-hidden ${toneStyles[tone]} ${className}`}>
      {src && (
        <img
          src={src}
          alt={alt || ''}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.22),transparent_34%,rgba(31,25,13,0.3))]" />
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-black/12" />
    </div>
  )
}

function HeroImage() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-[#292818]">
      <img
        src={morningLeafHeroImage}
        alt="MorningLeaf tea house table with teapot, cups, herbs, and warm natural light"
        className="absolute left-0 top-0 hidden h-full w-[138%] max-w-none object-cover object-left-top md:block"
      />
      <img
        src={morningLeafMobileHeroImage}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-[78%_7%] md:hidden"
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_14%,rgba(220,224,148,0.18),transparent_27%),linear-gradient(90deg,rgba(21,18,10,0.72),rgba(21,18,10,0.24)_46%,rgba(21,18,10,0.5))]" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#19150e]/65 via-[#19150e]/12 to-transparent md:h-1/3" />
    </div>
  )
}

function DesktopHeader() {
  return (
    <header className="absolute left-0 right-0 top-0 z-20 hidden h-16 items-center border-b border-white/10 bg-[#171309]/50 px-10 text-white backdrop-blur-md lg:flex">
      <Link to="/restaurant" className="mr-16 text-white">
        <LeafLogo />
      </Link>
      <nav className="flex flex-1 items-center justify-center gap-10 text-sm font-bold">
        {navItems.map((item) => (
          <a key={item} href={item === 'Home' ? '#home' : `#${item.toLowerCase()}`} className={`py-6 text-white/88 transition hover:text-white ${item === 'Home' ? 'border-b-2 border-white' : ''}`}>
            {item}
          </a>
        ))}
      </nav>
      <a href="#reservations" className="rounded-full bg-[#717942] px-7 py-3 text-sm font-black text-white shadow-lg shadow-black/20 transition hover:bg-[#5f6838]">
        Reserve a Table
      </a>
    </header>
  )
}

function MobileHeader() {
  return (
    <div className="absolute left-0 right-0 top-0 z-20 px-5 pt-4 text-white lg:hidden">
      <div className="flex items-center justify-between text-xs font-bold">
        <span>9:41</span>
        <span className="h-7 w-20 rounded-full bg-black/85" aria-hidden="true" />
        <span className="flex items-center gap-1.5">
          <span className="h-3 w-4 rounded-sm border border-current" />
          <span className="h-2 w-5 rounded-sm bg-current" />
        </span>
      </div>
      <div className="mt-7 flex items-center justify-between">
        <button type="button" className="grid h-10 w-10 place-items-center rounded-full bg-black/10" aria-label="Open menu">
          <Icon type="menu" />
        </button>
        <LeafLogo className="text-white" />
        <button type="button" className="grid h-10 w-10 place-items-center rounded-full bg-black/10" aria-label="Open bag">
          <Icon type="bag" />
        </button>
      </div>
    </div>
  )
}

function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden rounded-b-[2rem] bg-[#2c2918] text-white shadow-xl lg:rounded-b-none">
      <DesktopHeader />
      <MobileHeader />
      <div className="relative min-h-[355px] md:min-h-[520px] lg:min-h-[570px]">
        <HeroImage />
        <Container className="relative z-10 flex min-h-[355px] items-end pb-7 pt-32 md:min-h-[520px] md:pb-10 md:pt-36 lg:min-h-[570px] lg:items-center lg:pt-16">
          <div className="max-w-3xl md:max-w-3xl">
            <h1 className="font-serif text-3xl leading-none md:text-6xl lg:text-7xl">MorningLeaf</h1>
            <p className="mt-2 max-w-xs font-serif text-xl leading-tight md:mt-3 md:max-w-2xl md:text-4xl">Quiet Tea Rituals for Modern Calm</p>
            <div className="mt-4 hidden h-px w-20 bg-white md:block" />
            <p className="mt-3 hidden max-w-lg text-base font-medium leading-7 text-white/86 md:mt-5 md:block md:text-lg">
              Herbal blends. Low-caffeine cups. Quiet tables. Steep times that turn a drink into a small reset.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-7">
              <a href="#reservations" className="rounded-full bg-[#737c45] px-6 py-3 text-xs font-black text-white shadow-xl shadow-black/25 transition hover:bg-[#60683a] md:px-7 md:py-4 md:text-sm">
                Reserve a Table
              </a>
              <a href="#menu" className="hidden rounded-full border border-white px-7 py-4 text-sm font-black text-white transition hover:bg-white/10 sm:inline-flex">
                Explore the Menu
              </a>
            </div>
          </div>
        </Container>
      </div>
    </section>
  )
}

function SectionTitle({ title, action }: { title: string; action?: string }) {
  return (
    <div className="mb-6 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <span className="text-[#9aa276]"><Icon type="leaf" /></span>
        <h2 className="font-serif text-2xl text-[#2f281c] md:text-3xl">{title}</h2>
        <span className="hidden h-px w-7 bg-[#9aa276] sm:block" />
      </div>
      {action && (
        <a href="#menu" className="text-xs font-black text-[#596035] transition hover:text-[#2f281c]">
          {action}
        </a>
      )}
    </div>
  )
}

function TeaCard({ tea, compact = false }: { tea: Tea; compact?: boolean }) {
  if (compact) {
    return (
      <article className="grid grid-cols-[5.6rem_1fr_auto] gap-3 border-b border-[#ded7c9] pb-4 last:border-b-0">
        <TeaImage tone={tea.tone} src={tea.image} alt={`${tea.name} tea`} className="h-20 rounded-xl" />
        <div>
          <h3 className="font-serif text-lg leading-tight text-[#2f281c]">{tea.name}</h3>
          <p className="mt-1 text-xs leading-5 text-[#5b5347]">{tea.description}</p>
        </div>
        <p className="pt-6 font-serif text-lg text-[#2f281c]">{tea.price}</p>
      </article>
    )
  }

  return (
    <article className="overflow-hidden rounded-lg border border-[#ded7c9] bg-[#fbf8ef] shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <TeaImage tone={tea.tone} src={tea.image} alt={`${tea.name} tea`} className="h-28" />
      <div className="p-4">
        <h3 className="font-serif text-xl text-[#2f281c]">{tea.name}</h3>
        <p className="mt-2 min-h-12 text-sm leading-6 text-[#5b5347]">{tea.description}</p>
        <p className="mt-4 font-serif text-lg text-[#2f281c]">{tea.price}</p>
      </div>
    </article>
  )
}

function ResetPanel() {
  return (
    <section id="rituals" className="rounded-2xl bg-[#f1ecdf] p-6 shadow-sm">
      <SectionTitle title="Find Your Reset" />
      <div className="grid grid-cols-2 gap-6">
        {resetItems.map((item) => (
          <article key={item.title} className="grid grid-cols-[2.75rem_1fr] gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#d9ddbf] text-[#596035]">
              <Icon type={item.icon} />
            </span>
            <span>
              <h3 className="font-serif text-lg text-[#2f281c]">{item.title}</h3>
              <p className="mt-1 text-xs leading-5 text-[#5b5347]">{item.description}</p>
            </span>
          </article>
        ))}
      </div>
    </section>
  )
}

function ReservationPanel({ mobile = false }: { mobile?: boolean }) {
  return (
    <section id="reservations" className={`rounded-2xl bg-[#f1ecdf] p-6 shadow-sm ${mobile ? 'shadow-lg shadow-black/5' : ''}`}>
      <SectionTitle title="Reserve Your Table" />
      <form className="grid gap-4" onSubmit={(event) => event.preventDefault()}>
        <label className="grid gap-1 text-xs font-bold text-[#5b5347]">
          Date
          <span className="flex items-center justify-between rounded-lg border border-[#d9d1c0] bg-[#fbf8ef] px-3 py-3 text-sm font-medium text-[#2f281c]">
            May 24, 2025
            <Icon type="calendar" />
          </span>
        </label>
        <div className="grid grid-cols-2 gap-3">
          <label className="grid gap-1 text-xs font-bold text-[#5b5347]">
            Time
            <select className="rounded-lg border border-[#d9d1c0] bg-[#fbf8ef] px-3 py-3 text-sm font-medium text-[#2f281c]">
              <option>10:00 AM</option>
              <option>11:30 AM</option>
              <option>2:00 PM</option>
            </select>
          </label>
          <label className="grid gap-1 text-xs font-bold text-[#5b5347]">
            Guests
            <select className="rounded-lg border border-[#d9d1c0] bg-[#fbf8ef] px-3 py-3 text-sm font-medium text-[#2f281c]">
              <option>2 Guests</option>
              <option>3 Guests</option>
              <option>4 Guests</option>
            </select>
          </label>
        </div>
        <button type="submit" className="mt-1 rounded-lg bg-[#68713d] px-5 py-4 text-sm font-black text-white transition hover:bg-[#596035]">
          Find a Table
        </button>
      </form>
    </section>
  )
}

function StoryPanel() {
  return (
    <section id="about" className="grid gap-6 rounded-2xl bg-[#f1ecdf] p-6 shadow-sm md:grid-cols-[1fr_14rem]">
      <div>
        <h2 className="font-serif text-2xl text-[#2f281c]">Our Story</h2>
        <p className="mt-4 text-sm leading-6 text-[#5b5347]">MorningLeaf is a quiet tea house for modern life.</p>
        <p className="mt-4 text-sm leading-6 text-[#5b5347]">
          We believe in mindful moments, thoughtfully sourced ingredients, and the simple beauty of a pause.
        </p>
        <p className="mt-4 text-sm leading-6 text-[#5b5347]">
          Join us for rituals that restore balance and bring you home to yourself.
        </p>
        <a href="#about" className="mt-5 inline-flex items-center gap-3 text-sm font-black text-[#596035]">
          Learn More About Us
          <span aria-hidden="true">-&gt;</span>
        </a>
      </div>
      <div className="relative min-h-48 overflow-hidden rounded-lg bg-[#2f281c]">
        <img
          src={morningLeafStoryImage}
          alt="Sunlit MorningLeaf tea table with teapot and cups"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
    </section>
  )
}

function MobileBottomNav() {
  const items = [
    ['Home', 'home'],
    ['Menu', 'steam'],
    ['Reserve', 'calendar'],
    ['Rituals', 'leaf'],
    ['More', 'more'],
  ] as const

  return (
    <nav className="fixed bottom-4 left-1/2 z-50 grid w-[calc(100%-2rem)] max-w-md -translate-x-1/2 grid-cols-5 rounded-[1.75rem] border border-[#e3dccd] bg-[#fbf8ef]/95 px-3 py-3 text-center text-[0.68rem] font-bold text-[#5b5347] shadow-2xl shadow-black/15 backdrop-blur lg:hidden">
      {items.map(([label, icon]) => (
        <a key={label} href={label === 'Home' ? '#home' : `#${label.toLowerCase()}`} className={`grid justify-items-center gap-1 ${label === 'Home' ? 'text-[#596035]' : ''}`}>
          <Icon type={icon} />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#596035] px-6 py-8 text-[#f9f4e7] lg:px-10">
      <div className="grid gap-8 md:grid-cols-[1.1fr_1fr_1fr_1fr_1.5fr]">
        <div>
          <LeafLogo />
          <p className="mt-3 max-w-44 text-sm leading-6 text-white/72">Quiet tea rituals for modern calm.</p>
        </div>
        <div>
          <h3 className="text-sm font-black">Visit Us</h3>
          <p className="mt-3 text-sm leading-6 text-white/72">123 Leafy Lane<br />Portland, OR 97201</p>
          <a href="#contact" className="mt-3 inline-block text-sm font-black">View on Map</a>
        </div>
        <div>
          <h3 className="text-sm font-black">Hours</h3>
          <p className="mt-3 text-sm leading-6 text-white/72">Mon - Fri&nbsp;&nbsp; 8:00 AM - 8:00 PM<br />Sat - Sun&nbsp;&nbsp; 9:00 AM - 7:00 PM</p>
        </div>
        <div>
          <h3 className="text-sm font-black">Connect</h3>
          <div className="mt-4 flex gap-3">
            {['ig', 'f', 'p', 'x'].map((item) => (
              <a key={item} href="#contact" className="grid h-9 w-9 place-items-center rounded-full border border-white/30 text-xs font-black uppercase text-white/80">
                {item}
              </a>
            ))}
          </div>
        </div>
        <form className="max-w-sm" onSubmit={(event) => event.preventDefault()}>
          <h3 className="text-sm font-black">Stay in the Loop</h3>
          <p className="mt-3 text-sm leading-6 text-white/72">Thoughtful tea. Seasonal news. Special invites.</p>
          <label className="mt-4 flex rounded-lg border border-white/25 bg-white/5 p-1">
            <span className="sr-only">Email address</span>
            <input type="email" placeholder="Your email address" className="min-w-0 flex-1 bg-transparent px-3 py-2 text-sm text-white placeholder:text-white/45 outline-none" />
            <button type="submit" className="grid h-10 w-10 place-items-center rounded-md bg-[#fbf8ef] text-[#596035]" aria-label="Subscribe">
              -&gt;
            </button>
          </label>
        </form>
      </div>
      <div className="mt-8 flex flex-col justify-between gap-4 border-t border-white/10 pt-5 text-xs text-white/60 md:flex-row">
        <p>(c) 2025 MorningLeaf Tea House. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#contact">Privacy Policy</a>
          <a href="#contact">Terms of Service</a>
          <a href="#contact">Accessibility</a>
        </div>
      </div>
    </footer>
  )
}

export function MorningLeafTea() {
  return (
    <main className="brand-motion motion-morningleaf bg-[#e9e1d0] pb-24 text-[#2f281c] lg:pb-0">
      <div className="mx-auto min-h-screen max-w-[92rem] bg-[#fbf8ef] shadow-2xl shadow-black/15 lg:my-8 lg:overflow-hidden lg:rounded-[1.75rem]">
        <HeroSection />

        <section id="menu" className="px-5 py-6 md:px-10 lg:px-16">
          <SectionTitle title="Featured Teas" action="View All Menu ->" />
          <div className="hidden grid-cols-2 gap-4 md:grid lg:grid-cols-6">
            {teas.map((tea) => (
              <TeaCard key={tea.name} tea={tea} />
            ))}
          </div>
          <div className="grid gap-4 md:hidden">
            {teas.slice(0, 4).map((tea) => (
              <TeaCard key={tea.name} tea={tea} compact />
            ))}
          </div>
        </section>

        <section className="grid gap-5 px-5 pb-6 md:px-10 lg:grid-cols-[1fr_0.82fr_1.36fr] lg:px-16">
          <ResetPanel />
          <ReservationPanel />
          <StoryPanel />
        </section>

        <Footer />
      </div>

      <section className="border-t border-[#d9ccb1] bg-[#fbf8ef] px-5 py-7 text-center lg:hidden">
        <Link to="/restaurant" className="font-bold text-[#596035]">
          Back to Restaurant Collection
        </Link>
      </section>

      <MobileBottomNav />
    </main>
  )
}
