import { useEffect, useState, type ReactNode } from 'react'
import {
  ArrowRight,
  Check,
  ChevronRight,
  CircleDot,
  Compass,
  Flag,
  Menu,
  Mountain,
  Route,
  X,
} from 'lucide-react'
import { imageUrl } from '../../assets/images'

const navLinks = [
  ['Climb', '#climb', '#21A6A1'],
  ['Classes', '#classes', '#F36F5D'],
  ['Community', '#community', '#DCA83A'],
  ['Membership', '#membership', '#95C84A'],
  ['Events', '#events', '#315DC8'],
  ['Contact', '#contact', '#C97957'],
]

const observedSectionIds = ['home', ...navLinks.map(([, href]) => href.slice(1))]

const images = {
  hero: imageUrl('fitness/ElevateClimbing/hero.png'),
  experience: imageUrl('fitness/ElevateClimbing/climbing-experience.png'),
  classes: imageUrl('fitness/ElevateClimbing/classes.png'),
  setting: imageUrl('fitness/ElevateClimbing/route-setting.png'),
  community: imageUrl('fitness/ElevateClimbing/community-board.png'),
  progress: imageUrl('fitness/ElevateClimbing/progress.png'),
  cta: imageUrl('fitness/ElevateClimbing/cta.png'),
}

const holdColors = ['bg-[#21A6A1]', 'bg-[#F36F5D]', 'bg-[#DCA83A]', 'bg-[#95C84A]', 'bg-[#315DC8]']

const experienceCards = [
  ['Bouldering Walls', 'Color-coded problems, fresh routes, and movement challenges for every level.', 'V0–V7'],
  ['Technique Coaching', 'Learn footwork, body positioning, grip strategy, and safer falling skills.', 'Skills'],
  ['Community Sessions', 'Climb with others, join weekly events, and build confidence in a supportive space.', 'Social'],
]

const wallZones = [
  {
    title: 'Beginner Slab',
    badge: 'V0–V2',
    text: 'Lower-angle problems focused on footwork, balance, and confidence.',
    image: imageUrl('fitness/ElevateClimbing/beginner-slab.png'),
    color: '#21A6A1',
  },
  {
    title: 'Overhang Lab',
    badge: 'V3–V6',
    text: 'Steeper problems for body tension, grip strength, and powerful movement.',
    image: imageUrl('fitness/ElevateClimbing/overhang-lab.png'),
    color: '#F36F5D',
  },
  {
    title: 'Dynamic Wall',
    badge: 'V2–V7',
    text: 'Coordination climbs, jumps, and creative movement challenges.',
    image: imageUrl('fitness/ElevateClimbing/dynamic-wall.png'),
    color: '#315DC8',
  },
  {
    title: 'Training Board',
    badge: 'All Levels',
    text: 'Structured strength work, repeatable problems, and progression tracking.',
    image: imageUrl('fitness/ElevateClimbing/training-board.png'),
    color: '#95C84A',
  },
]

const classes = [
  ['Intro To Bouldering', 'Learn gym basics, falling technique, route reading, and movement confidence.', 'V0'],
  ['Footwork Fundamentals', 'Improve precision, balance, and control with guided drills.', 'V1'],
  ['Strength For Climbers', 'Build climbing-specific strength with rings, hangboard basics, mobility, and core work.', 'V3'],
  ['Route Reading Lab', 'Learn how to plan attempts, identify sequences, and climb smarter.', 'V2'],
]

const settingChips = ['Weekly Resets', 'Color-Coded Grades', 'Technique Variety', 'Creative Movement']

const events = [
  ['Beginner Boulder Night', 'Tuesday • 7:00 PM', '#21A6A1'],
  ['Partner Project Session', 'Thursday • 6:30 PM', '#F36F5D'],
  ['Route Reset Preview', 'Friday • 5:00 PM', '#DCA83A'],
  ['Weekend Community Climb', 'Saturday • 10:00 AM', '#315DC8'],
]

const coaches = [
  {
    name: 'Rowan Blake',
    role: 'Technique Coach',
    bio: 'Helps climbers read movement, refine body position, and turn tricky problems into clear sequences.',
    badge: 'Slab + Balance',
    image: imageUrl('fitness/ElevateClimbing/coach-rowan.png'),
  },
  {
    name: 'Camila Torres',
    role: 'Beginner Climbing Guide',
    bio: 'Builds confidence for first-time climbers with simple cues, safer falling skills, and welcoming sessions.',
    badge: 'Intro Routes',
    image: imageUrl('fitness/ElevateClimbing/coach-camila.png'),
  },
  {
    name: 'Eli Morgan',
    role: 'Strength + Movement Coach',
    bio: 'Connects strength, mobility, and creative attempts so climbers can progress without rushing the process.',
    badge: 'Power Moves',
    image: imageUrl('fitness/ElevateClimbing/coach-eli.png'),
  },
]

const plans = [
  {
    name: 'First Ascent',
    text: 'For new climbers trying the gym.',
    features: ['Day pass', 'Shoe rental', 'Intro orientation'],
  },
  {
    name: 'Boulder Pass',
    text: 'For climbers building a weekly routine.',
    features: ['4 visits/month', 'Class discount', 'Community events'],
    popular: true,
  },
  {
    name: 'Unlimited Elevation',
    text: 'For consistent climbers and project seekers.',
    features: ['Unlimited climbing', 'Priority classes', 'Guest pass', 'Training zone access'],
  },
]

const progressStats = [
  ['Footwork', '78%', '#21A6A1'],
  ['Grip Confidence', '66%', '#F36F5D'],
  ['Route Reading', '84%', '#DCA83A'],
  ['Movement Flow', '72%', '#95C84A'],
  ['Project Attempts', '9', '#315DC8'],
  ['Consistency', '4x week', '#C97957'],
]

function ClimbButton({
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
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-xs font-black uppercase tracking-[0.15em] transition duration-300 hover:-translate-y-0.5 ${
        outline
          ? 'border border-[#25303A]/18 bg-white/70 text-[#25303A] hover:border-[#21A6A1] hover:bg-white'
          : 'bg-[#25303A] text-white shadow-[0_16px_38px_rgba(37,48,58,.2)] hover:bg-[#35434F]'
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
      <p className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.22em] shadow-sm ${light ? 'border border-white/18 bg-white/10 text-white/70' : 'border border-[#25303A]/12 bg-white/75 text-[#6C6A61]'}`}>
        <CircleDot className="h-3.5 w-3.5 text-[#F36F5D]" />
        {label}
      </p>
      <h2 className={`mt-5 text-[clamp(3rem,6.5vw,7rem)] font-black uppercase leading-[0.82] tracking-[-0.075em] ${light ? 'text-white' : 'text-[#25303A]'}`}>
        {title}
      </h2>
      {text && <p className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${light ? 'text-white/62' : 'text-[#606A70]'}`}>{text}</p>}
    </div>
  )
}

function RouteMap({ dark = false }: { dark?: boolean }) {
  return (
    <div className="relative h-40 overflow-hidden rounded-[1.75rem] border border-current/15 p-5 text-current" aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 360 160" fill="none">
        <path d="M32 126 C82 82 104 104 142 58 S228 28 268 72 310 70 334 34" stroke={dark ? '#F7F1E6' : '#25303A'} strokeOpacity=".22" strokeWidth="3" strokeDasharray="8 10" />
        <path d="M54 44 C96 82 122 28 170 74 S244 122 306 92" stroke="#21A6A1" strokeOpacity=".55" strokeWidth="3" />
      </svg>
      {[
        ['left-[12%] top-[64%]', '#21A6A1'],
        ['left-[28%] top-[35%]', '#F36F5D'],
        ['left-[45%] top-[48%]', '#DCA83A'],
        ['left-[63%] top-[22%]', '#95C84A'],
        ['left-[78%] top-[52%]', '#315DC8'],
      ].map(([position, color], index) => (
        <span
          key={index}
          className={`absolute h-5 w-7 rounded-[50%_35%_55%_40%] shadow-[0_8px_0_rgba(0,0,0,.08)] ${position}`}
          style={{ backgroundColor: color }}
        />
      ))}
    </div>
  )
}

export function ElevateClimbing() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const updateActiveSection = () => {
      const sections = observedSectionIds.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[]
      const currentPosition = window.scrollY + 132
      const current = sections
        .map((section) => ({
          id: section.id,
          top: section.getBoundingClientRect().top + window.scrollY,
        }))
        .filter((section) => section.top <= currentPosition)
        .sort((a, b) => b.top - a.top)[0]
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
    <main className="elevate-climbing-site -mt-16 overflow-hidden bg-[#F7F1E6] text-[#25303A]">
      <div className="pointer-events-none fixed inset-0 z-0 opacity-[0.18] [background-image:radial-gradient(#25303A_1px,transparent_1px)] [background-size:22px_22px]" />

      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[2rem] border-2 border-white/70 bg-[#F7F1E6]/90 px-3 py-3 shadow-[0_18px_55px_rgba(37,48,58,.13)] ring-1 ring-[#25303A]/10 backdrop-blur-xl lg:rounded-full lg:px-4">
          <a href="#home" className="group flex items-center gap-3 rounded-full py-1 pl-1 pr-3 transition hover:bg-white/60" aria-label="Elevate Climbing home">
            <span className="relative grid h-11 w-11 place-items-center rounded-[1rem] bg-[#25303A] text-[#F7F1E6] shadow-[0_7px_0_rgba(37,48,58,.18)] transition group-hover:-translate-y-0.5">
              <Mountain className="h-5 w-5" />
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-[#F7F1E6] bg-[#21A6A1]" />
            </span>
            <span>
              <span className="block text-sm font-black uppercase tracking-[-0.02em]">Elevate Climbing</span>
              <span className="mt-0.5 hidden text-[0.55rem] font-black uppercase tracking-[0.18em] text-[#6C6A61] sm:block">Route map studio</span>
            </span>
          </a>

          <nav className="hidden rounded-full border border-[#25303A]/10 bg-white/62 p-1.5 shadow-inner lg:flex" aria-label="Elevate navigation">
            {navLinks.map(([label, href, color]) => {
              const active = activeSection === href.slice(1)
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? 'location' : undefined}
                  className={`group relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.11em] transition ${
                    active ? 'active bg-[#25303A] text-white shadow-[0_8px_18px_rgba(37,48,58,.18)]' : 'text-[#6C6A61] hover:bg-white hover:text-[#25303A]'
                  }`}
                >
                  <span className={`h-2.5 w-2.5 rounded-full transition ${active ? 'scale-125 border border-white/80' : 'opacity-75 group-hover:scale-110'}`} style={{ backgroundColor: color }} />
                  {label}
                  {active && <span className="absolute inset-x-4 -bottom-1 h-1 rounded-full bg-[#F36F5D]" />}
                </a>
              )
            })}
          </nav>

          <a href="#contact" className="hidden rounded-full bg-[#F36F5D] px-5 py-3 text-xs font-black uppercase tracking-[0.13em] text-white shadow-[0_9px_0_rgba(37,48,58,.16),0_18px_32px_rgba(243,111,93,.22)] transition hover:-translate-y-0.5 hover:shadow-[0_11px_0_rgba(37,48,58,.16),0_22px_36px_rgba(243,111,93,.25)] lg:inline-flex">
            Start Climbing
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#25303A]/15 bg-white/75 text-[#25303A] shadow-sm lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="mx-auto mt-3 max-w-7xl overflow-hidden rounded-[2rem] border-2 border-white/70 bg-[#F7F1E6]/96 p-3 shadow-2xl ring-1 ring-[#25303A]/10 backdrop-blur-xl lg:hidden">
            <div className="mb-2 flex items-center justify-between rounded-[1.4rem] bg-white/60 px-4 py-3">
              <span className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#6C6A61]">Climbing map</span>
              <Route className="h-4 w-4 text-[#21A6A1]" />
            </div>
            {navLinks.map(([label, href, color]) => {
              const active = activeSection === href.slice(1)
              return (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? 'location' : undefined}
                  className={`flex items-center justify-between rounded-2xl px-4 py-3 text-sm font-black uppercase tracking-[0.1em] transition ${
                    active ? 'active bg-[#25303A] text-white shadow-sm' : 'text-[#606A70] hover:bg-white hover:text-[#25303A]'
                  }`}
                >
                  <span className="flex items-center gap-3">
                    <span className={`h-3 w-3 rounded-full ${active ? 'border border-white/80' : ''}`} style={{ backgroundColor: color }} />
                    {label}
                  </span>
                  <span className={`text-[0.58rem] ${active ? 'text-white/65' : 'text-[#6C6A61]'}`}>V{label.length}</span>
                </a>
              )
            })}
            <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 block rounded-2xl bg-[#F36F5D] px-4 py-3 text-center text-sm font-black uppercase tracking-[0.12em] text-white shadow-[0_7px_0_rgba(37,48,58,.16)]">
              Start Climbing
            </a>
          </nav>
        )}
      </header>

      <section id="home" className="relative z-10 min-h-screen scroll-mt-28 px-5 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_16%,rgba(33,166,161,.22),transparent_28%),radial-gradient(circle_at_78%_20%,rgba(243,111,93,.2),transparent_28%),linear-gradient(180deg,#F7F1E6,#EFE4D5)]" />
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-3 rounded-full border border-[#25303A]/12 bg-white/70 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.22em] text-[#6C6A61]">
              <Route className="h-4 w-4 text-[#21A6A1]" />
              Bouldering • Training • Community
            </p>
            <h1 className="mt-7 max-w-5xl text-[clamp(4.1rem,8.9vw,10rem)] font-black uppercase leading-[0.73] tracking-[-0.09em]">
              Find Your Route. Build Your Grip. Climb Together.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-[#606A70]">
              Indoor bouldering, beginner-friendly coaching, skill sessions, and community events for climbers who want progress, challenge, and a place to belong.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ClimbButton href="#contact">Book Your First Climb</ClimbButton>
              <ClimbButton href="#classes" outline>
                View Classes
              </ClimbButton>
            </div>
          </div>

          <div className="relative">
            <RouteMap />
            <div className="relative -mt-10 min-h-[42rem] overflow-hidden rounded-[2.6rem] border-2 border-white bg-[#A9AAA3] shadow-[0_28px_90px_rgba(37,48,58,.18)]">
              <img src={images.hero} alt="Elevate Climbing indoor bouldering wall" className="absolute inset-0 h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#25303A]/74 via-transparent to-transparent" />
              <div className="absolute left-6 right-6 top-6 flex flex-wrap gap-2">
                {['V0–V3 Beginner', 'V4–V6 Progression', 'Technique Classes', 'Community Nights'].map((chip, index) => (
                  <span key={chip} className={`rounded-full border border-white/55 bg-white/82 px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.13em] text-[#25303A] shadow-sm ${index % 2 ? 'rotate-1' : '-rotate-1'}`}>
                    {chip}
                  </span>
                ))}
              </div>
              <div className="absolute bottom-7 left-7 right-7 grid gap-3 sm:grid-cols-3">
                {[
                  ['42', 'Fresh problems'],
                  ['V0–V8', 'Route spread'],
                  ['7 PM', 'Beginner night'],
                ].map(([value, label]) => (
                  <div key={label} className="rounded-[1.4rem] border border-white/18 bg-[#25303A]/78 p-5 text-white backdrop-blur">
                    <p className="text-3xl font-black tracking-[-0.06em]">{value}</p>
                    <p className="mt-2 text-[0.55rem] font-black uppercase tracking-[0.16em] text-white/55">{label}</p>
                  </div>
                ))}
              </div>
              {holdColors.map((color, index) => (
                <span key={color} className={`absolute h-7 w-10 rounded-[55%_35%_50%_42%] shadow-[0_7px_0_rgba(0,0,0,.14)] ${color} ${['left-[10%] top-[38%]', 'left-[74%] top-[20%]', 'left-[58%] top-[46%]', 'left-[31%] top-[26%]', 'left-[82%] top-[56%]'][index]}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="climb" className="relative z-10 scroll-mt-28 px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="relative min-h-[39rem] overflow-hidden rounded-[2.4rem] border-2 border-[#25303A]/12 bg-[#D7D0C5]">
            <img src={images.experience} alt="Climbers working through bouldering problems" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#25303A]/70 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 max-w-sm rounded-[1.5rem] bg-[#F7F1E6]/88 p-5 shadow-xl backdrop-blur">
              <p className="text-[0.6rem] font-black uppercase tracking-[0.18em] text-[#21A6A1]">Climbing experience</p>
              <p className="mt-2 text-3xl font-black uppercase leading-none tracking-[-0.055em]">Movement, puzzles, people.</p>
            </div>
          </div>
          <div>
            <SectionHeading label="Climbing Experience" title="A Gym Built Around Movement, Problem Solving, And Community" />
            <div className="mt-10 grid gap-4">
              {experienceCards.map(([title, text, grade], index) => (
                <article key={title} className="group grid gap-5 rounded-[1.8rem] border-2 border-[#25303A]/10 bg-white/72 p-5 transition hover:-translate-y-1 hover:border-[#21A6A1]/45 hover:shadow-xl sm:grid-cols-[4rem_1fr_auto] sm:items-center">
                  <span className="grid h-14 w-14 place-items-center rounded-[1.2rem] text-sm font-black text-white shadow-sm" style={{ backgroundColor: ['#21A6A1', '#F36F5D', '#315DC8'][index] }}>
                    {grade}
                  </span>
                  <div>
                    <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.055em]">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#606A70]">{text}</p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-[#6C6A61] transition group-hover:translate-x-1" />
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto mt-28 max-w-[96rem]">
          <SectionHeading label="Wall Zones" title="Choose Your Wall" />
          <div className="mt-12 grid gap-5 lg:grid-cols-4">
            {wallZones.map((zone, index) => (
              <article key={zone.title} className={`group overflow-hidden rounded-[2rem] border-2 border-[#25303A]/12 bg-white/72 transition duration-500 hover:-translate-y-2 hover:shadow-2xl ${index % 2 ? 'lg:translate-y-8' : ''}`}>
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={zone.image} alt={`${zone.title} climbing zone`} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#25303A]/78 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.13em] text-white shadow-sm" style={{ backgroundColor: zone.color }}>
                    {zone.badge}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.06em]">{zone.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#606A70]">{zone.text}</p>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#25303A]">
                    Explore Zone <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="classes" className="relative z-10 scroll-mt-28 bg-[#E5DED2] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[.92fr_1.08fr] lg:items-center">
          <div>
            <SectionHeading label="Classes" title="Learn Skills That Make Every Climb Feel Better" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {classes.map(([title, text, grade], index) => (
                <article key={title} className="rounded-[1.8rem] border-2 border-white/70 bg-[#F7F1E6] p-6 shadow-sm transition hover:-translate-y-1">
                  <span className="inline-flex rounded-full bg-[#25303A] px-3 py-1.5 text-xs font-black text-white">{grade}</span>
                  <h3 className="mt-8 text-2xl font-black uppercase leading-none tracking-[-0.05em]">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#606A70]">{text}</p>
                  <span className={`mt-7 block h-3 w-16 rounded-full ${holdColors[index % holdColors.length]}`} />
                </article>
              ))}
            </div>
          </div>
          <div className="relative min-h-[38rem] overflow-hidden rounded-[2.4rem] border-2 border-white bg-[#B6B1A8]">
            <img src={images.classes} alt="Elevate Climbing class instruction" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#25303A]/74 via-transparent to-transparent" />
            <RouteMap dark />
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="relative min-h-[40rem] overflow-hidden rounded-[2.4rem] border-2 border-[#25303A]/12">
            <img src={images.setting} alt="Elevate route setting team creating new climbing problems" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#25303A]/78 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 right-7 rounded-[1.7rem] bg-[#F7F1E6]/88 p-6 backdrop-blur">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#F36F5D]">Route setting</p>
              <p className="mt-2 text-3xl font-black uppercase leading-none tracking-[-0.055em]">Fresh movement every week.</p>
            </div>
          </div>
          <div>
            <SectionHeading label="Route Setting" title="Fresh Problems. New Challenges. Every Week." text="Our setting team builds creative routes with clear progressions, technical movement, and problems that help climbers discover new skills." />
            <div className="mt-8 flex flex-wrap gap-3">
              {settingChips.map((chip, index) => (
                <span key={chip} className="rounded-full px-4 py-2 text-xs font-black uppercase tracking-[0.13em] text-white" style={{ backgroundColor: ['#21A6A1', '#F36F5D', '#DCA83A', '#315DC8'][index] }}>
                  {chip}
                </span>
              ))}
            </div>
            <div className="mt-9">
              <RouteMap />
            </div>
          </div>
        </div>
      </section>

      <section id="community" className="relative z-10 scroll-mt-28 bg-[#25303A] px-5 py-24 text-white lg:px-10 lg:py-32">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:44px_44px]" />
        <div className="relative mx-auto max-w-[96rem]">
          <SectionHeading label="Community Board" title="What’s Happening At The Gym" text="Pinned nights, route sessions, previews, and weekend climbs keep the gym social without making it complicated." light />
          <div id="events" className="mt-12 grid scroll-mt-28 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {events.map(([title, time, color], index) => (
              <article key={title} className={`relative min-h-64 rounded-[1.3rem] border-2 border-white/18 bg-[#F7F1E6] p-6 text-[#25303A] shadow-xl ${index % 2 ? 'rotate-1' : '-rotate-1'}`}>
                <span className="absolute -top-3 left-1/2 h-6 w-6 -translate-x-1/2 rounded-full border-2 border-white shadow" style={{ backgroundColor: color }} />
                <p className="text-[0.58rem] font-black uppercase tracking-[0.18em]" style={{ color }}>{time}</p>
                <h3 className="mt-12 text-3xl font-black uppercase leading-none tracking-[-0.06em]">{title}</h3>
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border-t border-[#25303A]/12 pt-4">
                  <span className="text-[0.58rem] font-black uppercase tracking-[0.14em] text-[#6C6A61]">Pinned event</span>
                  <Flag className="h-5 w-5" style={{ color }} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[96rem]">
          <SectionHeading label="Route Team" title="Meet The Team" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {coaches.map((coach, index) => (
              <article key={coach.name} className="group overflow-hidden rounded-[2rem] border-2 border-[#25303A]/12 bg-white/72 transition hover:-translate-y-1 hover:shadow-xl">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={coach.image} alt={`${coach.name} Elevate Climbing coach`} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#25303A]/72 via-transparent to-transparent" />
                  <span className="absolute left-5 top-5 rounded-full bg-[#F7F1E6] px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.14em] text-[#25303A]">Team 0{index + 1}</span>
                </div>
                <div className="p-6">
                  <p className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#21A6A1]">{coach.role}</p>
                  <h3 className="mt-3 text-4xl font-black uppercase leading-none tracking-[-0.065em]">{coach.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#606A70]">{coach.bio}</p>
                  <span className="mt-6 inline-flex rounded-full bg-[#25303A] px-4 py-2 text-xs font-black uppercase tracking-[0.13em] text-white">{coach.badge}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="membership" className="relative z-10 scroll-mt-28 bg-[#E5DED2] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[96rem]">
          <SectionHeading label="Membership" title="Pick Your Climbing Rhythm" />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article key={plan.name} className={`rounded-[2rem] border-2 p-7 ${plan.popular ? 'border-[#F36F5D] bg-[#25303A] text-white shadow-[16px_16px_0_rgba(243,111,93,.22)] lg:-translate-y-4' : 'border-white bg-[#F7F1E6]'}`}>
                {plan.popular && <span className="rounded-full bg-[#F36F5D] px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.14em] text-white">Most Popular</span>}
                <h3 className="mt-8 text-4xl font-black uppercase leading-none tracking-[-0.065em]">{plan.name}</h3>
                <p className={`mt-4 text-sm leading-7 ${plan.popular ? 'text-white/68' : 'text-[#606A70]'}`}>{plan.text}</p>
                <div className={`mt-8 grid gap-3 border-t pt-7 ${plan.popular ? 'border-white/15' : 'border-[#25303A]/12'}`}>
                  {plan.features.map((feature) => (
                    <span key={feature} className="flex items-center gap-3 text-sm font-bold">
                      <Check className={`h-4 w-4 ${plan.popular ? 'text-[#95C84A]' : 'text-[#21A6A1]'}`} />
                      {feature}
                    </span>
                  ))}
                </div>
                <ClimbButton href="#contact" outline={plan.popular} className="mt-8 w-full">
                  Choose {plan.name}
                </ClimbButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeading label="Progress" title="Track Skills, Not Just Strength" />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {progressStats.map(([label, value, color]) => (
                <article key={label} className="rounded-[1.7rem] border-2 border-[#25303A]/10 bg-white/72 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-black uppercase tracking-[-0.02em]">{label}</p>
                    <span className="rounded-full px-3 py-1.5 text-xs font-black text-white" style={{ backgroundColor: color }}>{value}</span>
                  </div>
                  <div className="mt-5 h-3 overflow-hidden rounded-full bg-[#E5DED2]">
                    <span className="block h-full rounded-full" style={{ width: value.includes('%') ? value : '62%', backgroundColor: color }} />
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="relative min-h-[40rem] overflow-hidden rounded-[2.4rem] border-2 border-[#25303A]/12">
            <img src={images.progress} alt="Elevate Climbing skill progress tracking" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#25303A]/76 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 right-7">
              <RouteMap dark />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="relative z-10 scroll-mt-28 px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto overflow-hidden rounded-[2.8rem] border-2 border-[#25303A]/12 bg-[#25303A] text-white lg:grid lg:max-w-[96rem] lg:grid-cols-[1fr_.85fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#95C84A] px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#25303A]">
              <Compass className="h-4 w-4" />
              Start your route
            </p>
            <h2 className="mt-7 text-[clamp(4rem,8vw,8.8rem)] font-black uppercase leading-[0.72] tracking-[-0.09em]">Your Next Route Starts Here.</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/68">Step onto the wall, meet the community, and discover how far your climbing can go.</p>
            <ClimbButton href="mailto:hello@elevateclimbing.example" outline className="mt-9">
              Start Climbing
            </ClimbButton>
          </div>
          <div className="relative min-h-[32rem]">
            <img src={images.cta} alt="Elevate Climbing community at the wall" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#25303A]/50 to-transparent" />
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-[#25303A]/12 px-5 py-12 lg:px-10">
        <div className="mx-auto flex max-w-[96rem] flex-col justify-between gap-8 lg:flex-row lg:items-start">
          <div>
            <a href="#home" className="text-xl font-black uppercase tracking-[-0.04em]">Elevate Climbing</a>
            <p className="mt-4 max-w-sm text-sm leading-7 text-[#606A70]">Bouldering, skill progression, and climbing community.</p>
          </div>
          <div className="flex flex-wrap gap-x-7 gap-y-3">
            {navLinks.map(([label, href]) => (
              <a key={label} href={href} className="text-xs font-black uppercase tracking-[0.15em] text-[#606A70] hover:text-[#25303A]">
                {label}
              </a>
            ))}
          </div>
          <div>
            <p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#6C6A61]">Social</p>
            <div className="mt-3 flex gap-2">
              {['IG', 'YT', 'FB'].map((social) => (
                <a key={social} href="#contact" aria-label={`${social} social placeholder`} className="grid h-10 w-10 place-items-center rounded-full border border-[#25303A]/14 text-[0.6rem] font-black text-[#606A70] hover:border-[#21A6A1] hover:text-[#21A6A1]">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-[96rem] text-xs text-[#6C6A61]">© 2026 Elevate Climbing. Route availability, classes, events, and memberships may vary.</p>
      </footer>
    </main>
  )
}
