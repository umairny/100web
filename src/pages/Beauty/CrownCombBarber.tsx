import { Link } from 'react-router-dom'
import barberHero from '../../assets/beauty/crown-comb-barber/barber-hero.png'
import { Container } from '../../components'

type IconName =
  | 'menu'
  | 'bell'
  | 'scissors'
  | 'beard'
  | 'razor'
  | 'bottle'
  | 'chevron'
  | 'calendar'
  | 'clock'
  | 'home'
  | 'bookings'
  | 'barbers'
  | 'profile'
  | 'quality'
  | 'community'
  | 'craft'
  | 'mail'

interface IconProps {
  name: IconName
  className?: string
}

interface Service {
  icon: IconName
  title: string
  description: string
}

interface Feature {
  icon: IconName
  title: string
  text: string
}

const navLinks = ['Home', 'Services', 'Book Online', 'About', 'Gallery', 'Shop', 'Contact']

const services: Service[] = [
  {
    icon: 'scissors',
    title: 'Haircut',
    description: 'Classic cuts, fades, tapers and modern styles.',
  },
  {
    icon: 'beard',
    title: 'Beard Trim',
    description: 'Beard shaping, trims and clean line ups.',
  },
  {
    icon: 'razor',
    title: 'Straight Razor Shave',
    description: 'Hot towel shave for a smooth, clean finish.',
  },
  {
    icon: 'bottle',
    title: 'Grooming Package',
    description: 'Haircut, beard trim, shave and styling.',
  },
]

const features: Feature[] = [
  {
    icon: 'quality',
    title: 'Quality',
    text: 'Over everything',
  },
  {
    icon: 'community',
    title: 'Community',
    text: 'Built on trust',
  },
  {
    icon: 'craft',
    title: 'Craftsmanship',
    text: 'In every detail',
  },
]

const galleryItems = [
  'Barber chairs',
  'Precision haircut',
  'Grooming tools',
  'Studio interior',
  'Beard trim',
  'Premium products',
]

const bottomNav: Array<[IconName, string]> = [
  ['home', 'Home'],
  ['bookings', 'Bookings'],
  ['barbers', 'Barbers'],
  ['profile', 'Profile'],
]

function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  const strokeProps = {
    fill: 'none',
    stroke: 'currentColor',
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    strokeWidth: 1.8,
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className}>
      {name === 'menu' && (
        <>
          <path {...strokeProps} d="M4 7h13" />
          <path {...strokeProps} d="M4 12h16" />
          <path {...strokeProps} d="M4 17h11" />
        </>
      )}
      {name === 'bell' && (
        <>
          <path {...strokeProps} d="M18 9a6 6 0 0 0-12 0c0 7-2 7-2 9h16c0-2-2-2-2-9" />
          <path {...strokeProps} d="M10 21h4" />
        </>
      )}
      {name === 'scissors' && (
        <>
          <circle {...strokeProps} cx="6" cy="6" r="2.4" />
          <circle {...strokeProps} cx="6" cy="18" r="2.4" />
          <path {...strokeProps} d="M8 8l11 11" />
          <path {...strokeProps} d="M8 16L19 5" />
        </>
      )}
      {name === 'beard' && (
        <>
          <path {...strokeProps} d="M5 8c1 7 4 11 7 11s6-4 7-11" />
          <path {...strokeProps} d="M8 8c.5 2 2 3 4 3s3.5-1 4-3" />
          <path {...strokeProps} d="M9 15c2 1.3 4 1.3 6 0" />
        </>
      )}
      {name === 'razor' && (
        <>
          <path {...strokeProps} d="M5 18l9-9" />
          <path {...strokeProps} d="M11 6l7 7" />
          <path {...strokeProps} d="M14 3l7 7-3 3-7-7z" />
        </>
      )}
      {name === 'bottle' && (
        <>
          <path {...strokeProps} d="M8 8h5v12H8z" />
          <path {...strokeProps} d="M9 4h3v4H9z" />
          <path {...strokeProps} d="M15 10h3v10h-3z" />
          <path {...strokeProps} d="M15.5 7h2v3h-2z" />
        </>
      )}
      {name === 'chevron' && <path {...strokeProps} d="M9 5l7 7-7 7" />}
      {name === 'calendar' || name === 'bookings' ? (
        <>
          <rect {...strokeProps} x="4" y="5" width="16" height="15" rx="2" />
          <path {...strokeProps} d="M8 3v4M16 3v4M4 10h16" />
        </>
      ) : null}
      {name === 'clock' && (
        <>
          <circle {...strokeProps} cx="12" cy="12" r="8" />
          <path {...strokeProps} d="M12 8v5l3 2" />
        </>
      )}
      {name === 'home' && (
        <>
          <path {...strokeProps} d="M4 11l8-7 8 7" />
          <path {...strokeProps} d="M6 10v10h12V10" />
        </>
      )}
      {name === 'barbers' && (
        <>
          <circle {...strokeProps} cx="12" cy="8" r="3" />
          <path {...strokeProps} d="M6 20a6 6 0 0 1 12 0" />
          <path {...strokeProps} d="M5 6l3 3M19 6l-3 3" />
        </>
      )}
      {name === 'profile' && (
        <>
          <circle {...strokeProps} cx="12" cy="8" r="4" />
          <path {...strokeProps} d="M5 21a7 7 0 0 1 14 0" />
        </>
      )}
      {name === 'quality' && (
        <>
          <path {...strokeProps} d="M12 3l2.4 2.1 3.2-.1.8 3.1 2.6 1.9-1.3 2.9.8 3.1-3 1.1-1.8 2.7-3-1.1-3 1.1-1.8-2.7-3-1.1.8-3.1-1.3-2.9 2.6-1.9.8-3.1 3.2.1z" />
          <path {...strokeProps} d="M9 12l2 2 4-5" />
        </>
      )}
      {name === 'community' && (
        <>
          <circle {...strokeProps} cx="9" cy="8" r="3" />
          <circle {...strokeProps} cx="17" cy="10" r="2.5" />
          <path {...strokeProps} d="M3 20a6 6 0 0 1 12 0M13 20a5 5 0 0 1 8 0" />
        </>
      )}
      {name === 'craft' && (
        <>
          <path {...strokeProps} d="M4 20l6-6" />
          <path {...strokeProps} d="M14 4l6 6-8 8-6-6z" />
          <path {...strokeProps} d="M12 6l6 6" />
        </>
      )}
      {name === 'mail' && (
        <>
          <rect {...strokeProps} x="4" y="6" width="16" height="12" rx="2" />
          <path {...strokeProps} d="M4 8l8 6 8-6" />
        </>
      )}
    </svg>
  )
}

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <Link to="/beauty/crown-comb-barber" className="flex items-center gap-3">
      <span className="grid h-11 w-11 place-items-center rounded-lg border border-[#6f5230] bg-[#15130f] text-2xl text-[#c8934b]">
        ♛
      </span>
      <span>
        <span className={`${compact ? 'text-sm' : 'text-xl'} block font-serif font-black leading-none tracking-wide text-white`}>
          Crown & Comb
        </span>
        <span className="block text-[0.62rem] font-black uppercase tracking-[0.32em] text-[#c8934b]">Barber</span>
      </span>
    </Link>
  )
}

function Header() {
  return (
    <header id="home" className="sticky top-0 z-50 border-b border-[#2e2519] bg-[#070807]/92 backdrop-blur-xl">
      <Container>
        <div className="hidden h-20 items-center justify-between gap-8 lg:flex">
          <BrandMark />
          <nav aria-label="Primary navigation" className="flex items-center gap-7 text-[0.72rem] font-black uppercase tracking-[0.08em] text-white">
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="relative py-3 text-white/82 transition hover:text-[#c8934b] first:text-[#c8934b] first:after:absolute first:after:inset-x-0 first:after:bottom-0 first:after:h-px first:after:bg-[#c8934b]"
              >
                {item}
              </a>
            ))}
          </nav>
          <a href="#book-online" className="rounded-md bg-[#c8934b] px-7 py-3 text-sm font-black uppercase tracking-[0.08em] text-white shadow-lg shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#dfad67]">
            Book Appointment
          </a>
        </div>

        <div className="flex h-20 items-center justify-between lg:hidden">
          <button type="button" aria-label="Open menu" className="grid h-11 w-11 place-items-center rounded-xl border border-[#3c3021] text-white">
            <Icon name="menu" />
          </button>
          <BrandMark compact />
          <button type="button" aria-label="Notifications" className="grid h-11 w-11 place-items-center rounded-xl border border-[#3c3021] text-white">
            <Icon name="bell" />
          </button>
        </div>
      </Container>
    </header>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#090a08]">
      <div className="absolute inset-0">
        <img src={barberHero} alt="" className="h-full w-full object-cover object-center opacity-58" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#070807_0%,rgba(7,8,7,0.88)_42%,rgba(7,8,7,0.16)_100%),linear-gradient(0deg,#090a08_0%,transparent_28%)]" />
      </div>
      <Container className="relative grid min-h-[650px] items-center py-20 lg:min-h-[720px] lg:grid-cols-[0.92fr_1.08fr]">
        <div className="max-w-2xl">
          <p className="text-sm font-black uppercase tracking-[0.26em] text-[#c8934b]">Classic tradition. Modern precision.</p>
          <h1 className="mt-5 font-serif text-5xl font-black leading-[0.9] text-white md:text-7xl lg:text-8xl">
            Precision Cuts. Timeless Style.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#efe5d5]">
            Expert barbers. Premium grooming. Leave looking sharp. Every time.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#book-online" className="inline-flex min-h-12 items-center justify-center rounded-md bg-[#c8934b] px-7 text-sm font-black uppercase tracking-[0.08em] text-white shadow-xl shadow-black/25 transition hover:-translate-y-0.5 hover:bg-[#dfad67]">
              Book Appointment
            </a>
            <a href="#services" className="inline-flex min-h-12 items-center justify-center rounded-md border border-[#8c7251] bg-black/18 px-7 text-sm font-black uppercase tracking-[0.08em] text-white transition hover:-translate-y-0.5 hover:bg-white/10">
              View Services
            </a>
          </div>
        </div>
      </Container>
    </section>
  )
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group rounded-lg border border-[#372c1e] bg-[linear-gradient(145deg,#1a1a16,#10110e)] p-8 text-center shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-[#c8934b]">
      <div className="mx-auto grid h-16 w-16 place-items-center rounded-full text-[#c8934b] transition group-hover:scale-110">
        <Icon name={service.icon} className="h-10 w-10" />
      </div>
      <h3 className="mt-5 font-serif text-xl font-black text-white">{service.title}</h3>
      <p className="mx-auto mt-3 max-w-48 text-sm leading-6 text-[#d5cbbb]">{service.description}</p>
      <a href="#book-online" className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#c8934b] transition hover:text-white">
        Learn More <span aria-hidden="true">→</span>
      </a>
    </article>
  )
}

function ServicesSection() {
  return (
    <section id="services" className="border-y border-[#211b13] bg-[#0d0f0c] py-20 md:py-24">
      <Container>
        <p className="text-center text-sm font-black uppercase tracking-[0.24em] text-[#c8934b]">Our services</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </Container>
    </section>
  )
}

function BookingForm({ mobile = false }: { mobile?: boolean }) {
  const inputClass = mobile
    ? 'grid grid-cols-[5.5rem_1fr] items-center border-b border-white/10 bg-white/[0.035] px-3 py-3 last:border-b-0'
    : 'rounded-lg border border-[#d8cbb7] bg-[#fffaf4] px-4 py-3'

  const fields = [
    ['Select service', 'Haircut'],
    ['Select barber', 'Any Available'],
    ['Date', 'May 24, 2025'],
    ['Time', '10:00 AM'],
  ]

  return (
    <form
      className={mobile ? 'rounded-2xl border border-[#314424] bg-[#172413] p-4 shadow-xl shadow-black/30' : 'grid gap-4 lg:grid-cols-[repeat(4,minmax(0,1fr))_auto] lg:items-stretch'}
      onSubmit={(event) => event.preventDefault()}
    >
      {mobile && <h3 className="mb-4 text-sm font-black uppercase tracking-[0.12em] text-white">Book your appointment</h3>}
      <div className={mobile ? 'overflow-hidden rounded-xl border border-white/10' : 'contents'}>
        {fields.map(([label, value]) => (
          <label key={label} className={inputClass}>
            <span className={mobile ? 'text-xs font-bold text-white' : 'block text-[0.66rem] font-black uppercase tracking-[0.12em] text-[#887a68]'}>
              {label}
            </span>
            <select className={mobile ? 'min-w-0 appearance-none bg-transparent text-sm font-medium text-[#e9dcc9] outline-none' : 'mt-2 w-full bg-transparent text-sm font-bold text-[#17130e] outline-none'}>
              <option>{value}</option>
            </select>
          </label>
        ))}
      </div>
      <button type="submit" className={mobile ? 'mt-4 min-h-12 w-full rounded-lg bg-[#c8934b] text-sm font-black uppercase tracking-[0.08em] text-white shadow-lg shadow-black/25 transition hover:bg-[#dfad67]' : 'rounded-lg bg-[#172716] px-10 py-4 text-sm font-black uppercase tracking-[0.08em] text-white shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#c8934b]'}>
        Book Now
      </button>
    </form>
  )
}

function AppointmentSection() {
  return (
    <section id="book-online">
      <div className="hidden bg-[#f6efe5] py-10 text-[#17130e] lg:block">
        <Container className="grid gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8c642e]">Book your appointment</p>
            <h2 className="mt-3 font-serif text-3xl font-black leading-tight md:text-4xl">
              Choose your time. We’ll take care of the rest.
            </h2>
            <div className="mt-5 flex flex-wrap gap-5 text-sm font-bold text-[#695b49]">
              {['Expert Barbers', 'Premium Products', 'Great Experience'].map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </div>
          <BookingForm />
        </Container>
      </div>
      <div className="bg-[#090a08] px-4 py-6 lg:hidden">
        <BookingForm mobile />
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="bg-[#090a08] py-20 md:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.95fr_0.75fr_0.7fr] lg:items-center">
        <div className="min-h-[21rem] overflow-hidden rounded-lg border border-[#332819] bg-[#14140f] shadow-2xl shadow-black/25">
          <img src={barberHero} alt="Crown & Comb Barber interior" className="h-full w-full object-cover" />
        </div>
        <div>
          <p className="text-sm font-black uppercase tracking-[0.24em] text-[#c8934b]">Our story</p>
          <h2 className="mt-3 font-serif text-4xl font-black leading-tight text-white md:text-5xl">
            Rooted in tradition. Focused on you.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#d5cbbb]">
            Crown & Comb Barber was built around precision grooming, calm service, and confident style.
            We combine timeless technique with modern appointment flow so every visit feels sharp and easy.
          </p>
          <a href="#contact" className="mt-7 inline-flex rounded-md border border-[#8c7251] px-7 py-3 text-xs font-black uppercase tracking-[0.12em] text-white transition hover:bg-white/10">
            Learn More About Us
          </a>
        </div>
        <div className="rounded-lg border border-[#3e4a2d] bg-[#162415] p-6 shadow-xl shadow-black/20">
          {features.map((feature) => (
            <article key={feature.title} className="grid grid-cols-[3.25rem_1fr] gap-4 border-b border-white/10 py-5 first:pt-0 last:border-b-0 last:pb-0">
              <span className="grid h-11 w-11 place-items-center text-[#c8934b]">
                <Icon name={feature.icon} className="h-8 w-8" />
              </span>
              <span>
                <span className="block text-sm font-black uppercase tracking-[0.12em] text-white">{feature.title}</span>
                <span className="mt-1 block text-sm text-[#d5cbbb]">{feature.text}</span>
              </span>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function GalleryGrid() {
  return (
    <section id="gallery" className="border-y border-[#211b13] bg-[#0d0f0c] py-20 md:py-24">
      <Container>
        <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#c8934b]">Gallery</p>
            <h2 className="mt-3 font-serif text-4xl font-black text-white md:text-5xl">Inside the shop.</h2>
          </div>
          <p className="max-w-xl text-sm leading-6 text-[#d5cbbb]">
            Image slots are editable placeholders styled to match the dark luxury visual system.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <article key={item} className="group overflow-hidden rounded-lg border border-[#332819] bg-[#14140f] shadow-xl shadow-black/20">
              <div className="relative aspect-[4/3]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_22%,rgba(200,147,75,0.38),transparent_26%),linear-gradient(135deg,#2a2117,#090a08_62%,#1b2a17)] transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-4 left-4 rounded-full border border-white/15 bg-black/35 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-white backdrop-blur">
                  {String(index + 1).padStart(2, '0')} / {item}
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ShopSection() {
  return (
    <section id="shop" className="bg-[#f6efe5] py-20 text-[#17130e] md:py-24">
      <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8c642e]">Shop</p>
          <h2 className="mt-3 font-serif text-4xl font-black leading-tight md:text-5xl">Take the finish home.</h2>
          <p className="mt-5 text-lg leading-8 text-[#695b49]">
            Pomades, oils, combs, and aftercare products curated by the barbers who use them every day.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          {['Texture Clay', 'Beard Oil', 'Pocket Comb'].map((item) => (
            <article key={item} className="rounded-lg border border-[#d9cbb7] bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="mb-5 aspect-square rounded-md bg-[linear-gradient(145deg,#1b1712,#c8934b)]" />
              <h3 className="font-black">{item}</h3>
              <p className="mt-2 text-sm text-[#695b49]">Premium daily grooming essential.</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Footer() {
  return (
    <footer id="contact" className="bg-[#070807] pb-24 pt-16 text-[#d5cbbb] lg:pb-10">
      <Container className="grid gap-10 lg:grid-cols-[1.1fr_0.8fr_0.8fr_1fr]">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-sm text-sm leading-7">
            Premium grooming, precision cuts, and a timeless shop experience for clients who care about the details.
          </p>
        </div>
        <div>
          <h3 className="font-black uppercase tracking-[0.14em] text-white">Address</h3>
          <p className="mt-4 text-sm leading-7">214 King Street<br />Brooklyn, NY 11201</p>
        </div>
        <div>
          <h3 className="font-black uppercase tracking-[0.14em] text-white">Hours</h3>
          <p className="mt-4 text-sm leading-7">Mon-Fri: 9am-7pm<br />Sat-Sun: 10am-5pm</p>
          <div className="mt-4 flex gap-3 text-[#c8934b]">
            {['IG', 'FB', 'YT'].map((item) => (
              <a key={item} href="#home" className="grid h-9 w-9 place-items-center rounded-full border border-[#3c3021] text-xs font-black transition hover:bg-[#c8934b] hover:text-[#070807]">
                {item}
              </a>
            ))}
          </div>
        </div>
        <form className="rounded-lg border border-[#332819] bg-[#10110e] p-5" onSubmit={(event) => event.preventDefault()}>
          <h3 className="font-black uppercase tracking-[0.14em] text-white">Email signup</h3>
          <p className="mt-3 text-sm leading-6">Get grooming notes and appointment reminders.</p>
          <label className="mt-5 flex min-h-12 overflow-hidden rounded-md border border-[#3c3021] bg-black/20">
            <span className="sr-only">Email address</span>
            <input type="email" placeholder="you@example.com" className="min-w-0 flex-1 bg-transparent px-4 text-sm text-white outline-none placeholder:text-white/42" />
            <button type="submit" aria-label="Subscribe" className="grid w-12 place-items-center bg-[#c8934b] text-[#070807]">
              <Icon name="mail" />
            </button>
          </label>
        </form>
      </Container>
    </footer>
  )
}

function MobileBottomNav() {
  return (
    <nav aria-label="Mobile quick navigation" className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-4 border-t border-white/10 bg-[#080907]/96 px-3 pb-4 pt-3 backdrop-blur lg:hidden">
      {bottomNav.map(([icon, label], index) => (
        <a key={label} href={index === 0 ? '#home' : index === 1 ? '#book-online' : index === 2 ? '#services' : '#contact'} className={`flex flex-col items-center gap-1 text-[0.68rem] font-medium ${index === 0 ? 'text-[#c8934b]' : 'text-white/72'}`}>
          <Icon name={icon} className="h-5 w-5" />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  )
}

export function CrownCombBarber() {
  return (
    <main className="bg-[#090a08] text-white">
      <Header />
      <Hero />
      <ServicesSection />
      <AppointmentSection />
      <AboutSection />
      <GalleryGrid />
      <ShopSection />
      <Footer />
      <MobileBottomNav />
    </main>
  )
}
