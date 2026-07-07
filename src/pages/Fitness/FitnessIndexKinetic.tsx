import { Link } from 'react-router-dom'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bolt,
  Dumbbell,
  Gauge,
  HeartPulse,
  MoveUpRight,
  Play,
  TimerReset,
} from 'lucide-react'
import { fitnessWebsites } from '../../data/websites'

const trainingPillars = [
  ['01', 'Strength'],
  ['02', 'Conditioning'],
  ['03', 'Mobility'],
  ['04', 'Nutrition'],
  ['05', 'Small Groups'],
  ['06', '1:1 Coaching'],
]

const uxNotes = [
  ['01', 'Proof first', 'Visible outcomes, trainer credibility, and a welcoming first step turn interest into action.'],
  ['02', 'Schedule clarity', 'Classes, sessions, trials, and membership paths should be understood in seconds.'],
  ['03', 'Energy with control', 'The interface can feel powerful and urgent without becoming noisy or difficult to use.'],
]

const comingSoonConcepts = [
  ['Elevate Climbing', 'bouldering and climbing community', 'CLIMB'],
  ['Reset Recovery Club', 'mobility, recovery, and restoration', 'REST'],
]

const posterStyles = [
  'bg-[#dfff3f] text-[#07130c]',
  'bg-[#07130c] text-white',
  'bg-[#f97316] text-[#07130c]',
  'bg-[#dbeafe] text-[#07130c]',
  'bg-[#dc2626] text-white',
  'bg-[#d9f99d] text-[#07130c]',
  'bg-[#38bdf8] text-[#07130c]',
  'bg-[#292524] text-white',
  'bg-[#e7e5e4] text-[#07130c]',
]

export function FitnessIndex() {
  const liveWebsites = fitnessWebsites.filter((website) => website.status === 'completed' || website.status === 'live')
  const featured = liveWebsites[0]

  return (
    <main className="fitness-index-kinetic -mt-16 overflow-hidden bg-[#f4f1e8] text-[#07130c]">
      <section className="relative min-h-screen border-b border-[#07130c] pt-16">
        <div className="absolute inset-0 opacity-[0.055] [background-image:linear-gradient(90deg,#07130c_1px,transparent_1px),linear-gradient(#07130c_1px,transparent_1px)] [background-size:5vw_5vw]" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4rem)] max-w-[100rem] lg:grid-cols-[1.05fr_.95fr]">
          <div className="flex flex-col justify-between border-[#07130c] px-5 py-12 lg:border-r lg:px-10 lg:py-16 xl:px-16">
            <div className="flex items-center justify-between gap-4">
              <Link to="/" className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] transition hover:text-[#14532d]"><ArrowDown className="h-4 w-4 rotate-90" /> Portfolio home</Link>
              <span className="rounded-full border border-[#07130c] px-3 py-1.5 text-[0.6rem] font-black uppercase tracking-[0.16em]">Category 04 / 10</span>
            </div>
            <div className="py-14">
              <p className="flex items-center gap-3 text-[0.68rem] font-black uppercase tracking-[0.25em] text-[#14532d]"><span className="h-2.5 w-2.5 animate-pulse rounded-full bg-[#f97316]" /> Fitness website collection</p>
              <h1 className="mt-7 text-[clamp(5.5rem,12vw,12.5rem)] font-black uppercase leading-[0.68] tracking-[-0.1em]">
                Fit<span className="text-[#14532d]">/</span><br />ness
              </h1>
              <p className="mt-10 max-w-xl text-xl font-semibold leading-8 tracking-[-0.02em] md:text-2xl">Digital experiences engineered for momentum, trust, and the courage to start.</p>
              <p className="mt-5 max-w-lg text-sm leading-7 text-[#4b554f]">A category hub for gyms, studios, trainers, wellness programs, and coaching brands that need users to understand the offer and take the first step fast.</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href="#live-concepts" className="group inline-flex min-h-14 items-center justify-center gap-3 bg-[#07130c] px-6 text-xs font-black uppercase tracking-[0.16em] text-white transition hover:bg-[#14532d]">Enter live design <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
              <a href="#roadmap" className="inline-flex min-h-14 items-center justify-center gap-3 border border-[#07130c] bg-transparent px-6 text-xs font-black uppercase tracking-[0.16em] transition hover:bg-[#dfff3f]">View training board <ArrowDown className="h-4 w-4" /></a>
            </div>
          </div>

          <div className="relative flex items-center bg-[#07130c] p-5 text-white lg:p-10 xl:p-14">
              <div className="absolute right-5 top-5 text-right text-[0.58rem] font-black uppercase tracking-[0.2em] text-white/35"><p>Live systems</p><p className="mt-1 text-[#dfff3f]">{String(liveWebsites.length).padStart(2, '0')} / 10 deployed</p></div>
            <div className="relative w-full border border-white/15 bg-[#0d1d13] p-4 shadow-2xl shadow-black/40 sm:p-6">
              <div className="flex items-center justify-between border-b border-white/12 pb-4"><div className="flex gap-1.5"><span className="h-2 w-2 rounded-full bg-[#f97316]" /><span className="h-2 w-2 rounded-full bg-[#dfff3f]" /><span className="h-2 w-2 rounded-full bg-white/25" /></div><p className="text-[0.58rem] font-black uppercase tracking-[0.2em] text-white/35">Performance console</p></div>
              <div className="grid gap-4 pt-4 sm:grid-cols-[.72fr_1.28fr]">
                <div className="grid gap-3">
                  {[[Gauge, 'Intensity', '08.6'], [HeartPulse, 'Momentum', '92%'], [TimerReset, 'Next class', '18:30']].map(([Icon, label, value]) => { const MetricIcon = Icon as typeof Gauge; return <div key={label as string} className="border border-white/10 bg-white/[0.04] p-4"><MetricIcon className="h-4 w-4 text-[#dfff3f]" /><p className="mt-5 text-[0.55rem] font-black uppercase tracking-[0.18em] text-white/35">{label as string}</p><p className="mt-1 text-2xl font-black tracking-[-0.05em]">{value as string}</p></div> })}
                </div>
                <div className="relative min-h-[25rem] overflow-hidden bg-[linear-gradient(145deg,#14532d,#16a34a_55%,#f97316)]">
                  {featured?.image && <img src={featured.image} alt="PulseForge Fitness homepage preview" className="absolute inset-0 h-full w-full object-cover mix-blend-luminosity opacity-65" />}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07130c] via-transparent to-transparent" />
                  <span className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-[#dfff3f] text-[#07130c]"><Play className="h-4 w-4 fill-current" /></span>
                  <div className="absolute inset-x-5 bottom-5"><p className="text-[0.58rem] font-black uppercase tracking-[0.2em] text-[#dfff3f]">PulseForge / Live now</p><p className="mt-3 text-4xl font-black uppercase leading-[0.85] tracking-[-0.06em]">Train hard.<br />Start clear.</p></div>
                </div>
              </div>
              <div className="mt-4 grid grid-cols-3 border border-white/10 text-center">{[[String(liveWebsites.length).padStart(2, '0'), 'Live'], [String(comingSoonConcepts.length).padStart(2, '0'), 'Queued'], ['10', 'Total']].map(([value, label]) => <div key={label} className="border-r border-white/10 p-4 last:border-r-0"><p className="text-3xl font-black text-[#dfff3f]">{value}</p><p className="mt-1 text-[0.52rem] font-black uppercase tracking-[0.18em] text-white/35">{label}</p></div>)}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#07130c] bg-[#dfff3f]">
        <div className="mx-auto grid max-w-[100rem] sm:grid-cols-2 lg:grid-cols-6">{trainingPillars.map(([number, pillar]) => <div key={pillar} className="flex items-center gap-3 border-b border-r border-[#07130c] px-5 py-5 last:border-r-0 sm:last:border-b-0 lg:border-b-0"><span className="text-[0.58rem] font-black">{number}</span><span className="text-xs font-black uppercase tracking-[0.13em]">{pillar}</span></div>)}</div>
      </section>

      <section id="live-concepts" className="bg-[#07130c] px-5 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[94rem]">
          <div className="grid gap-10 lg:grid-cols-[.68fr_1.32fr] lg:items-end">
            <div><p className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-[#dfff3f]">Live concepts / 01–{String(liveWebsites.length).padStart(2, '0')}</p><h2 className="mt-5 text-[clamp(3.5rem,7vw,7.5rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">Eight training worlds are live.</h2></div>
            <p className="max-w-2xl text-lg leading-8 text-white/55">From performance coaching to Pilates, serious lifting, race-ready running, mindful yoga, boxing conditioning, integrated wellness, and indoor cycling, each live concept turns a distinct movement philosophy into a clear digital experience.</p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {liveWebsites.map((website, index) => (
              <Link key={website.id} to={`/fitness/${website.slug}`} className="group overflow-hidden border border-white/15 bg-[#0d1d13] p-3 transition duration-500 hover:-translate-y-1 hover:border-[#dfff3f] hover:shadow-2xl hover:shadow-black/30">
                <div className="relative aspect-[16/10] overflow-hidden">
                  {website.image && <img src={website.image} alt={`${website.title} website preview`} className="absolute inset-0 h-full w-full object-cover object-center transition duration-700 group-hover:scale-105" />}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#07130c]/85 via-[#07130c]/10 to-transparent" />
                  <span className="absolute left-4 top-4 bg-[#dfff3f] px-3 py-1.5 text-[0.58rem] font-black uppercase tracking-[0.15em] text-[#07130c]">Live 0{index + 1}</span>
                  <div className="absolute bottom-4 right-4 flex gap-1.5">{[website.colors.primary, website.colors.secondary, website.colors.accent, website.colors.dark].map((color) => <span key={color} className="h-5 w-5 border border-white/60" style={{ backgroundColor: color }} />)}</div>
                </div>
                <div className="p-5 sm:p-6">
                  <p className="text-[0.6rem] font-black uppercase tracking-[0.2em] text-[#dfff3f]">{website.id === 'pulseforge-fitness' ? 'Performance coaching' : website.id === 'corelab-pilates' ? 'Pilates studio' : website.id === 'irondistrict-gym' ? 'Strength facility' : website.id === 'peakrun-coaching' ? 'Running coaching' : website.id === 'flowstate-yoga' ? 'Yoga studio' : website.id === 'vitalform-wellness' ? 'Wellness platform' : website.id === 'ridehaus-cycling' ? 'Cycling studio' : 'Boxing studio'}</p>
                  <div className="mt-3 flex items-start justify-between gap-4"><h3 className="text-3xl font-black uppercase leading-none tracking-[-0.05em] sm:text-4xl">{website.title}</h3><ArrowUpRight className="h-5 w-5 shrink-0 text-[#dfff3f] transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div>
                  <p className="mt-4 line-clamp-2 text-sm leading-6 text-white/55">{website.shortDescription}</p>
                  <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4"><span className="text-[0.58rem] font-black uppercase tracking-[0.16em] text-white/38">Open experience</span><span className="text-xs font-black text-[#dfff3f]">0{index + 1} / 0{liveWebsites.length}</span></div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 grid border-y border-white/15 lg:grid-cols-[.55fr_1.45fr]">
            <div className="border-b border-white/15 py-8 lg:border-b-0 lg:border-r lg:pr-8"><p className="text-[0.62rem] font-black uppercase tracking-[0.22em] text-[#f97316]">Design conditioning</p><h3 className="mt-4 text-3xl font-black uppercase tracking-[-0.05em]">Three rules.<br />No wasted motion.</h3></div>
            <div>{uxNotes.map(([number, title, text]) => <article key={number} className="grid gap-4 border-b border-white/15 py-7 last:border-b-0 md:grid-cols-[4rem_.6fr_1fr] md:items-center lg:px-8"><span className="text-xl font-black text-[#dfff3f]">{number}</span><h4 className="text-xl font-black uppercase">{title}</h4><p className="text-sm leading-7 text-white/48">{text}</p></article>)}</div>
          </div>
        </div>
      </section>

      <section id="roadmap" className="bg-[#f4f1e8] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[94rem]">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end"><div><p className="text-[0.65rem] font-black uppercase tracking-[0.25em] text-[#14532d]">Training board / Concepts 09–10</p><h2 className="mt-5 text-[clamp(3.7rem,7vw,7.5rem)] font-black uppercase leading-[0.8] tracking-[-0.08em]">Two ways still to move.</h2></div><p className="max-w-xl text-base leading-8 text-[#4f5953]">Each queued direction targets a distinct fitness behavior, audience, and first conversion moment.</p></div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {comingSoonConcepts.map(([name, focus, signal], index) => (
              <article key={name} className={`fitness-poster group relative flex min-h-[27rem] flex-col justify-between overflow-hidden border border-[#07130c] p-6 ${posterStyles[index]} ${index === 1 || index === 6 ? 'md:translate-y-8' : ''}`}>
                <div className="absolute -right-6 top-16 -rotate-90 text-[5rem] font-black uppercase leading-none tracking-[-0.08em] opacity-[0.08]">{signal}</div>
                <div className="relative flex items-center justify-between"><span className="text-xs font-black uppercase tracking-[0.18em]">Concept {String(index + 9).padStart(2, '0')}</span><Bolt className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" /></div>
                <div className="relative"><p className="text-[0.6rem] font-black uppercase tracking-[0.2em] opacity-55">{signal} / Coming soon</p><h3 className="mt-4 text-4xl font-black uppercase leading-[0.86] tracking-[-0.065em]">{name}</h3><p className="mt-4 text-sm font-bold capitalize opacity-65">{focus}</p><div className="mt-7 flex items-center justify-between border-t border-current/25 pt-5"><span className="text-[0.62rem] font-black uppercase tracking-[0.15em]">Queued direction</span><MoveUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div></div>
              </article>
            ))}
          </div>

          <div className="mt-20 flex flex-col items-start justify-between gap-5 border-t border-[#07130c] pt-8 md:flex-row md:items-center"><p className="max-w-xl text-2xl font-black uppercase leading-tight tracking-[-0.04em]">Eight live. Two in the rack. A complete fitness category in motion.</p><a href="#live-concepts" className="inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em]">Back to live designs <Dumbbell className="h-5 w-5 text-[#14532d]" /></a></div>
        </div>
      </section>
    </main>
  )
}
