import { useEffect, useState, type ReactNode } from 'react'
import {
  ArrowRight,
  Check,
  Circle,
  Droplets,
  Leaf,
  Menu,
  Moon,
  TimerReset,
  Waves,
  Wind,
  X,
} from 'lucide-react'
import { imageUrl } from '../../assets/images'

const navLinks = [
  ['Services', '#services'],
  ['Club', '#club'],
  ['Method', '#method'],
  ['Membership', '#membership'],
  ['Journal', '#journal'],
  ['Contact', '#contact'],
]

const observedSectionIds = ['home', ...navLinks.map(([, href]) => href.slice(1))]

const images = {
  hero: imageUrl('fitness/resetRecoveryClub/hero.png'),
  lounge: imageUrl('fitness/resetRecoveryClub/recovery-lounge.png'),
  mobility: imageUrl('fitness/resetRecoveryClub/mobility-studio.png'),
  compression: imageUrl('fitness/resetRecoveryClub/compression-recovery.png'),
  journal: imageUrl('fitness/resetRecoveryClub/journal.png'),
  results: imageUrl('fitness/resetRecoveryClub/calm-results.png'),
  cta: imageUrl('fitness/resetRecoveryClub/cta.png'),
}

const services = [
  {
    title: 'Mobility Reset',
    length: '45 min',
    text: 'Guided movement and joint-focused mobility designed to restore range and improve control.',
    image: imageUrl('fitness/resetRecoveryClub/mobility-reset.png'),
  },
  {
    title: 'Assisted Stretch',
    length: '50 min',
    text: 'Coach-supported stretching sessions for tight hips, shoulders, back, and daily tension.',
    image: imageUrl('fitness/resetRecoveryClub/assisted-stretch.png'),
  },
  {
    title: 'Compression Lounge',
    length: '30 min',
    text: 'Relax with pneumatic compression designed to support recovery after training or long workdays.',
    image: imageUrl('fitness/resetRecoveryClub/compression-lounge.png'),
  },
  {
    title: 'Restoration Flow',
    length: '40 min',
    text: 'Breath-led recovery, gentle movement, and downshift routines for calmer nervous system support.',
    image: imageUrl('fitness/resetRecoveryClub/restoration-flow.png'),
  },
]

const methodSteps = [
  ['Scan', 'Understand tightness, movement limits, routine stress, and training load.'],
  ['Release', 'Use mobility work, assisted stretching, and guided breathing to reduce unnecessary tension.'],
  ['Restore', 'Support circulation, downtime, and body awareness through recovery-focused sessions.'],
  ['Return', 'Leave with simple reset routines you can use between visits.'],
]

const memberships = [
  {
    name: 'First Reset',
    text: 'For new members trying recovery support.',
    features: ['1 recovery session', 'Movement check-in', 'Reset guidance'],
  },
  {
    name: 'Recovery Rhythm',
    text: 'For people building a weekly recovery habit.',
    features: ['4 sessions/month', 'Compression access', 'Mobility routine'],
    popular: true,
  },
  {
    name: 'Full Restore',
    text: 'For consistent recovery and deeper support.',
    features: ['Unlimited lounge access', 'Weekly assisted stretch', 'Priority booking', 'Monthly reset review'],
  },
]

const journal = [
  ['How Mobility Supports Training Consistency', 'Small mobility sessions can make your weekly movement feel more available and repeatable.'],
  ['Building A Better Recovery Routine', 'A calm plan for recovery days, compression, hydration, breathing, and simple reset habits.'],
  ['Why Rest Days Need Structure', 'Rest can feel more useful when it has gentle movement, quiet space, and clear intention.'],
]

const results = [
  'More movement awareness',
  'Better recovery habits',
  'Less daily stiffness',
  'More consistency between workouts',
  'Calmer transition from stress to rest',
]

const testimonials = [
  ['“I finally have a mobility rhythm I can keep between workouts.”', 'Nadia R.'],
  ['“The compression lounge became my favorite post-training reset.”', 'Marcus T.'],
  ['“It feels quiet, premium, and genuinely easy to slow down here.”', 'Leah S.'],
]

function ResetButton({
  href,
  children,
  outline = false,
  className = '',
}: {
  href: string
  children: ReactNode
  outline?: boolean
  className?: string
}) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-xs font-bold uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-0.5 ${
        outline
          ? 'border border-[#23313B]/14 bg-white/55 text-[#23313B] hover:border-[#75B7A6] hover:bg-white'
          : 'bg-[#23313B] text-white shadow-[0_18px_44px_rgba(35,49,59,.18)] hover:bg-[#324552]'
      } ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  )
}

function SectionHeading({ label, title, text, light = false }: { label: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="max-w-4xl">
      <p className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.22em] ${light ? 'border-white/18 bg-white/10 text-white/70' : 'border-[#C9D3D6] bg-white/60 text-[#6A7A7E]'}`}>
        <Waves className="h-3.5 w-3.5 text-[#6EAFA0]" />
        {label}
      </p>
      <h2 className={`mt-5 text-[clamp(3rem,6.2vw,6.8rem)] font-semibold leading-[0.9] tracking-[-0.075em] ${light ? 'text-white' : 'text-[#23313B]'}`}>{title}</h2>
      {text && <p className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${light ? 'text-white/62' : 'text-[#607075]'}`}>{text}</p>}
    </div>
  )
}

function TimerRing({ value }: { value: number }) {
  return (
    <div
      className="grid h-24 w-24 place-items-center rounded-full p-1"
      style={{ background: `conic-gradient(#75B7A6 ${value}%, #DDE7EA ${value}% 100%)` }}
    >
      <div className="grid h-full w-full place-items-center rounded-full bg-white text-sm font-bold text-[#23313B]">{value}%</div>
    </div>
  )
}

export function ResetRecoveryClub() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const updateActiveSection = () => {
      const currentPosition = window.scrollY + 132
      const current = observedSectionIds
        .map((id) => {
          const section = document.getElementById(id)
          return section ? { id, top: section.getBoundingClientRect().top + window.scrollY } : null
        })
        .filter(Boolean)
        .filter((section) => section!.top <= currentPosition)
        .sort((a, b) => b!.top - a!.top)[0]

      setActiveSection(current?.id ?? 'home')
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <main className="reset-recovery-site -mt-16 overflow-hidden bg-[#F6F8F7] text-[#23313B]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_18%_14%,rgba(117,183,166,.22),transparent_30%),radial-gradient(circle_at_85%_18%,rgba(125,195,210,.2),transparent_30%),linear-gradient(180deg,#F6F8F7,#EAF1F2)]" />

      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/70 bg-white/62 px-4 py-3 shadow-[0_20px_65px_rgba(35,49,59,.12)] ring-1 ring-[#C9D3D6]/60 backdrop-blur-2xl">
          <a href="#home" className="flex items-center gap-3 rounded-full py-1 pr-3 transition hover:bg-white/55" aria-label="Reset Recovery Club home">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#DDEBE8] text-[#2F6E62]">
              <Leaf className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-sm font-semibold tracking-[-0.02em]">Reset Recovery Club</span>
              <span className="mt-0.5 hidden text-[0.56rem] font-bold uppercase tracking-[0.2em] text-[#809095] sm:block">Spa-tech recovery</span>
            </span>
          </a>

          <nav className="hidden rounded-full border border-[#C9D3D6]/70 bg-white/58 p-1 lg:flex" aria-label="Reset navigation">
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1)
              return (
                <a key={label} href={href} aria-current={active ? 'location' : undefined} className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] transition ${active ? 'active bg-[#23313B] text-white shadow-sm' : 'text-[#6A7A7E] hover:bg-white hover:text-[#23313B]'}`}>
                  {label}
                </a>
              )
            })}
          </nav>

          <a href="#contact" className="hidden rounded-full bg-[#75B7A6] px-5 py-3 text-xs font-bold uppercase tracking-[0.13em] text-white shadow-[0_14px_32px_rgba(117,183,166,.28)] transition hover:-translate-y-0.5 hover:bg-[#64A897] lg:inline-flex">
            Book A Reset
          </a>
          <button type="button" onClick={() => setMenuOpen(!menuOpen)} className="grid h-11 w-11 place-items-center rounded-full border border-[#C9D3D6] bg-white/70 lg:hidden" aria-label="Toggle navigation" aria-expanded={menuOpen}>
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {menuOpen && (
          <nav className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-white/70 bg-white/88 p-3 shadow-2xl ring-1 ring-[#C9D3D6]/60 backdrop-blur-2xl lg:hidden">
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1)
              return (
                <a key={label} href={href} onClick={() => setMenuOpen(false)} aria-current={active ? 'location' : undefined} className={`block rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.11em] transition ${active ? 'active bg-[#23313B] text-white' : 'text-[#6A7A7E] hover:bg-[#EDF4F3] hover:text-[#23313B]'}`}>
                  {label}
                </a>
              )
            })}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 block rounded-2xl bg-[#75B7A6] px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.12em] text-white">
              Book A Reset
            </a>
          </nav>
        )}
      </header>

      <section id="home" className="relative z-10 min-h-screen scroll-mt-28 px-5 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="mx-auto grid max-w-[94rem] gap-6 lg:grid-cols-[7rem_.86fr_1.14fr] lg:items-stretch">
          <aside className="hidden rounded-[2rem] border border-white/70 bg-white/46 p-4 shadow-sm backdrop-blur-xl lg:grid">
            <div className="flex h-full flex-col items-center justify-between gap-5">
              <p className="[writing-mode:vertical-rl] rotate-180 text-[0.6rem] font-bold uppercase tracking-[0.24em] text-[#809095]">Recovery protocol 01</p>
              <div className="grid gap-3">
                {[Wind, Waves, Moon].map((Icon, index) => (
                  <span key={index} className="grid h-12 w-12 place-items-center rounded-full border border-[#C9D3D6] bg-white/70 text-[#75B7A6]">
                    <Icon className="h-5 w-5" />
                  </span>
                ))}
              </div>
              <span className="[writing-mode:vertical-rl] rotate-180 text-[0.6rem] font-bold uppercase tracking-[0.24em] text-[#809095]">Slow / steady</span>
            </div>
          </aside>
          <div className="rounded-[3rem] border border-white bg-white/44 p-7 shadow-[0_30px_100px_rgba(35,49,59,.12)] backdrop-blur-xl sm:p-10 lg:p-12">
            <p className="inline-flex items-center gap-3 rounded-full border border-[#C9D3D6] bg-white/60 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-[#6A7A7E]">
              <Wind className="h-4 w-4 text-[#75B7A6]" />
              Mobility • Recovery • Restoration
            </p>
            <h1 className="mt-7 max-w-5xl text-[clamp(4rem,8.4vw,9.5rem)] font-semibold leading-[0.86] tracking-[-0.085em] text-[#23313B]">
              Recover Better. Move Freer. Reset Fully.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#607075]">
              A modern recovery club for mobility work, assisted stretching, compression, breath-led restoration, and guided sessions that help your body return to balance.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ResetButton href="#contact">Book Your First Reset</ResetButton>
              <ResetButton href="#services" outline>
                Explore Services
              </ResetButton>
            </div>
            <div className="mt-12 grid gap-3 border-t border-[#C9D3D6]/70 pt-6 sm:grid-cols-3">
              {[
                ['04', 'Reset rooms'],
                ['30–50', 'Minute sessions'],
                ['Low', 'Sensory load'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[1.4rem] bg-[#F6F8F7]/80 p-4">
                  <p className="text-3xl font-semibold tracking-[-0.06em]">{value}</p>
                  <p className="mt-1 text-[0.56rem] font-bold uppercase tracking-[0.16em] text-[#809095]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-10 z-20 hidden rounded-[1.6rem] border border-white/70 bg-white/72 p-5 shadow-xl backdrop-blur-xl md:block">
              <p className="text-xs font-semibold text-[#6A7A7E]">Calm pulse</p>
              <div className="mt-4 flex items-center gap-3">
                <span className="h-12 w-12 animate-pulse rounded-full bg-[#DDEBE8] ring-8 ring-[#DDEBE8]/45" />
                <span className="text-2xl font-semibold tracking-[-0.05em]">04:00</span>
              </div>
            </div>
            <div className="relative min-h-[43rem] overflow-hidden rounded-[4rem_2rem_4rem_2rem] border border-white bg-white/45 p-3 shadow-[0_30px_95px_rgba(35,49,59,.15)] backdrop-blur">
              <img src={images.hero} alt="Reset Recovery Club serene recovery room" className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-[3.4rem_1.4rem_3.4rem_1.4rem] object-cover" />
              <div className="absolute inset-3 rounded-[3.4rem_1.4rem_3.4rem_1.4rem] bg-gradient-to-t from-[#23313B]/62 via-transparent to-white/12" />
              <div className="absolute left-7 right-7 top-7 grid gap-2 sm:grid-cols-2">
                {['Assisted Stretching', 'Compression Lounge', 'Mobility Reset', 'Breath Recovery'].map((chip) => (
                  <span key={chip} className="rounded-full border border-white/70 bg-white/72 px-4 py-2 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#23313B] backdrop-blur">
                    {chip}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-7 left-7 right-7 rounded-[2rem] border border-white/35 bg-white/72 p-5 backdrop-blur-xl">
                <div className="grid gap-4 sm:grid-cols-3">
                  {[
                    ['Low', 'Room noise'],
                    ['42%', 'Recovery load'],
                    ['Warm', 'Lounge mode'],
                  ].map(([value, label]) => (
                    <div key={label}>
                      <p className="text-2xl font-semibold tracking-[-0.05em]">{value}</p>
                      <p className="mt-1 text-[0.55rem] font-bold uppercase tracking-[0.16em] text-[#809095]">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-5 grid max-w-[94rem] gap-3 md:grid-cols-4">
          {['Arrive quietly', 'Assess movement', 'Downshift tension', 'Return with ease'].map((step, index) => (
            <div key={step} className="rounded-[1.5rem] border border-white/70 bg-white/42 p-5 backdrop-blur-xl">
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#75B7A6]">Protocol 0{index + 1}</p>
              <p className="mt-4 text-lg font-semibold tracking-[-0.03em]">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="services" className="relative z-10 scroll-mt-28 px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[94rem] gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div className="sticky top-28">
            <SectionHeading label="Recovery services" title="Choose Your Reset" text="A treatment menu for different kinds of tension, fatigue, and downtime needs." />
          </div>
          <div className="grid gap-5">
            {services.map((service, index) => (
              <article key={service.title} className="group grid overflow-hidden rounded-[2.2rem] border border-white/70 bg-white/58 p-3 shadow-sm backdrop-blur transition duration-500 hover:-translate-y-1 hover:shadow-2xl sm:grid-cols-[14rem_1fr]">
                <div className="relative min-h-64 overflow-hidden rounded-[1.7rem] sm:min-h-0">
                  <img src={service.image} alt={`${service.title} service`} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#23313B]/68 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/82 px-4 py-2 text-[0.58rem] font-bold uppercase tracking-[0.13em] text-[#23313B]">{service.length}</span>
                </div>
                <div className="flex flex-col justify-between p-5 sm:p-7">
                  <div>
                    <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#75B7A6]">Treatment {String(index + 1).padStart(2, '0')}</p>
                    <h3 className="mt-5 text-3xl font-semibold tracking-[-0.06em]">{service.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#607075]">{service.text}</p>
                  </div>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#2F6E62]">
                    View Service <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="club" className="relative z-10 scroll-mt-28 bg-[#EAF1F2] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[94rem] gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="relative min-h-[42rem] overflow-hidden rounded-[3rem] border border-white bg-white/45 p-3 shadow-xl">
            <img src={images.lounge} alt="Reset Recovery Club lounge" className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-[2.5rem] object-cover" />
            <div className="absolute inset-3 rounded-[2.5rem] bg-gradient-to-t from-[#23313B]/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 max-w-lg rounded-[1.8rem] bg-white/78 p-6 backdrop-blur-xl">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#6EAFA0]">Club experience</p>
              <p className="mt-3 text-4xl font-semibold leading-none tracking-[-0.06em]">A quiet space before your comeback.</p>
            </div>
          </div>
          <div>
            <SectionHeading label="Club Experience" title="A Quiet Space Built For Your Comeback" text="Calm recovery rooms, soft lighting, premium recovery equipment, guided support, and space to slow down before returning to training or daily life." />
            <div className="mt-9 flex flex-wrap gap-3">
              {['Recovery Lounge', 'Stretch Tables', 'Compression Chairs', 'Calm Reset Rooms'].map((chip) => (
                <span key={chip} className="rounded-full border border-[#C9D3D6] bg-white/62 px-4 py-2 text-xs font-bold uppercase tracking-[0.13em] text-[#607075]">{chip}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="method" className="relative z-10 scroll-mt-28 px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[94rem]">
          <SectionHeading label="Treatment pathway" title="The Reset Method" />
          <div className="mt-12 rounded-[2.5rem] border border-white/70 bg-white/48 p-4 shadow-sm backdrop-blur">
            <div className="grid gap-4 lg:grid-cols-4">
              {methodSteps.map(([title, text], index) => (
                <article key={title} className="relative rounded-[2rem] border border-[#C9D3D6]/70 bg-[#F8FAF9] p-6">
                  {index < methodSteps.length - 1 && <span className="absolute right-[-1.2rem] top-1/2 hidden h-px w-8 bg-[#AFC5C4] lg:block" />}
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-[#DDEBE8] text-sm font-bold text-[#2F6E62]">0{index + 1}</span>
                  <h3 className="mt-10 text-3xl font-semibold tracking-[-0.055em]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#607075]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#EAF1F2] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[94rem] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading label="Mobility Studio" title="Move Better Without Forcing It" text="Mobility sessions focus on controlled range, joint comfort, posture awareness, and movement quality. The goal is not intensity. The goal is better access, better control, and smoother movement." />
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {['Joint Range', 'Movement Control', 'Everyday Ease'].map((benefit) => (
                <div key={benefit} className="rounded-[1.6rem] border border-white/70 bg-white/62 p-5">
                  <Circle className="h-5 w-5 fill-[#75B7A6] text-[#75B7A6]" />
                  <p className="mt-8 text-lg font-semibold tracking-[-0.03em]">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[40rem] overflow-hidden rounded-[2.7rem]">
            <img src={images.mobility} alt="Mobility studio session" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#23313B]/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[94rem] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="relative min-h-[40rem] overflow-hidden rounded-[2.7rem] border border-white bg-white/48 p-3">
            <img src={images.compression} alt="Compression recovery tech lounge" className="absolute inset-3 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-[2.3rem] object-cover" />
            <div className="absolute inset-3 rounded-[2.3rem] bg-gradient-to-t from-[#23313B]/68 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 grid gap-3 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-white/78 p-5 backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#6EAFA0]">Session timer</p>
                <div className="mt-4 flex items-center gap-4">
                  <TimerRing value={72} />
                  <div><p className="text-3xl font-semibold tracking-[-0.05em]">18:00</p><p className="text-sm text-[#607075]">remaining</p></div>
                </div>
              </div>
              <div className="rounded-[1.5rem] bg-white/78 p-5 backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-[0.17em] text-[#6EAFA0]">Recovery level</p>
                {[68, 84, 52].map((bar, index) => (
                  <span key={index} className="mt-4 block h-2 rounded-full bg-[#DDE7EA]"><span className="block h-full rounded-full bg-[#75B7A6]" style={{ width: `${bar}%` }} /></span>
                ))}
              </div>
            </div>
          </div>
          <div>
            <SectionHeading label="Compression + Recovery Tech" title="Recovery Tech In A Calm Setting" text="Compression sessions, quiet lounge seating, hydration support, and warm/cool inspired recovery cues inside a space that still feels peaceful." />
            <div className="mt-9 grid gap-3">
              {['Compression sessions', 'Quiet lounge seating', 'Hydration station', 'Recovery timer UI'].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-2xl border border-[#C9D3D6] bg-white/58 p-4">
                  <Droplets className="h-5 w-5 text-[#75B7A6]" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="journal" className="relative z-10 scroll-mt-28 bg-[#EAF1F2] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[94rem]">
          <SectionHeading label="Restoration Journal" title="Small Resets That Add Up" />
          <div className="mt-12 grid gap-5 lg:grid-cols-[1.1fr_.9fr]">
            <div className="relative min-h-[36rem] overflow-hidden rounded-[2.5rem]">
              <img src={images.journal} alt="Reset Recovery editorial journal" className="absolute inset-0 h-full w-full object-cover" />
            </div>
            <div className="grid gap-4">
              {journal.map(([title, text], index) => (
                <article key={title} className="rounded-[2rem] border border-white/80 bg-white/62 p-6 transition hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-[0.6rem] font-bold uppercase tracking-[0.18em] text-[#6EAFA0]">Journal 0{index + 1}</p>
                  <h3 className="mt-5 text-3xl font-semibold leading-none tracking-[-0.055em]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#607075]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="relative z-10 scroll-mt-28 px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[94rem]">
          <SectionHeading label="Membership" title="Build Recovery Into Your Rhythm" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {memberships.map((plan) => (
              <article key={plan.name} className={`rounded-[2.2rem] border p-7 ${plan.popular ? 'border-[#75B7A6] bg-[#23313B] text-white shadow-[0_26px_80px_rgba(35,49,59,.2)] lg:-translate-y-4' : 'border-white/80 bg-white/58'}`}>
                {plan.popular && <span className="rounded-full bg-[#75B7A6] px-4 py-2 text-[0.58rem] font-bold uppercase tracking-[0.15em] text-white">Most Popular</span>}
                <h3 className="mt-8 text-4xl font-semibold tracking-[-0.06em]">{plan.name}</h3>
                <p className={`mt-4 text-sm leading-7 ${plan.popular ? 'text-white/68' : 'text-[#607075]'}`}>{plan.text}</p>
                <div className={`mt-8 grid gap-3 border-t pt-7 ${plan.popular ? 'border-white/15' : 'border-[#C9D3D6]'}`}>
                  {plan.features.map((feature) => (
                    <span key={feature} className="flex items-center gap-3 text-sm font-semibold">
                      <Check className={`h-4 w-4 ${plan.popular ? 'text-[#A8D7C9]' : 'text-[#75B7A6]'}`} />
                      {feature}
                    </span>
                  ))}
                </div>
                <ResetButton href="#contact" outline={plan.popular} className="mt-8 w-full">Choose {plan.name}</ResetButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 bg-[#EAF1F2] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[94rem] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading label="Calm Results" title="Feel The Difference In Your Routine" />
            <div className="mt-10 grid gap-4">
              {results.map((item, index) => (
                <div key={item} className="flex items-center gap-4 rounded-[1.5rem] border border-white/80 bg-white/62 p-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#DDEBE8] text-sm font-bold text-[#2F6E62]">0{index + 1}</span>
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative min-h-[38rem] overflow-hidden rounded-[2.7rem]">
            <img src={images.results} alt="Calm recovery results" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[94rem]">
          <SectionHeading label="Member Notes" title="A Quiet Place To Return To" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map(([quote, name]) => (
              <blockquote key={name} className="rounded-[2rem] border border-[#C9D3D6] bg-white/58 p-7">
                <Moon className="h-6 w-6 text-[#75B7A6]" />
                <p className="mt-8 text-lg leading-8 text-[#4E5E64]">{quote}</p>
                <footer className="mt-8 border-t border-[#C9D3D6] pt-5 text-sm font-bold text-[#2F6E62]">{name}</footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 scroll-mt-28 px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto overflow-hidden rounded-[3rem] border border-white bg-white/50 shadow-[0_28px_90px_rgba(35,49,59,.13)] lg:grid lg:max-w-[94rem] lg:grid-cols-[1fr_.85fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#DDEBE8] px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#2F6E62]">
              <TimerReset className="h-4 w-4" />
              Begin again
            </p>
            <h2 className="mt-7 text-[clamp(3.8rem,7vw,7.8rem)] font-semibold leading-[0.88] tracking-[-0.075em]">Give Your Body A Place To Reset.</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#607075]">Book a calm recovery session designed to help you slow down, move better, and return with more ease.</p>
            <ResetButton href="mailto:book@resetrecovery.example" className="mt-9">Book A Reset</ResetButton>
          </div>
          <div className="relative min-h-[32rem]">
            <img src={images.cta} alt="Reset Recovery Club calming treatment room" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#23313B]/38 to-transparent" />
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#C9D3D6] px-5 py-12 lg:px-10">
        <div className="mx-auto flex max-w-[94rem] flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <div>
            <a href="#home" className="text-lg font-semibold tracking-[-0.03em]">Reset Recovery Club</a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#607075]">Mobility, recovery, and restoration for better daily movement.</p>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} className="text-xs font-bold uppercase tracking-[0.15em] text-[#607075] hover:text-[#23313B]">{label}</a>
            ))}
          </div>
          <div>
            <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#809095]">Social</p>
            <div className="mt-3 flex gap-2">
              {['IG', 'LI', 'YT'].map((social) => (
                <a key={social} href="#contact" aria-label={`${social} social placeholder`} className="grid h-10 w-10 place-items-center rounded-full border border-[#C9D3D6] text-[0.6rem] font-bold text-[#607075] hover:border-[#75B7A6] hover:text-[#2F6E62]">{social}</a>
              ))}
            </div>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-[94rem] text-xs text-[#809095]">© 2026 Reset Recovery Club. Sessions support wellness routines and do not replace medical care.</p>
      </footer>
    </main>
  )
}
