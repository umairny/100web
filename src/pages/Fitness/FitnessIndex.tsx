import { Link } from 'react-router-dom'
import { AnimatedSection, Container, CTAButton } from '../../components'
import { fitnessWebsites } from '../../data/websites'

const trainingPillars = ['Strength', 'Conditioning', 'Mobility', 'Nutrition', 'Small groups', '1:1 coaching']

const uxNotes = [
  ['Proof first', 'Fitness pages need visible outcomes, trainer trust, and clear beginner-friendly entry points.'],
  ['Schedule clarity', 'Classes, sessions, trials, and membership paths should be scannable in seconds.'],
  ['Energy with control', 'The visual system should feel powerful without becoming noisy or hard to read.'],
]

const comingSoonConcepts = [
  ['CoreLab Pilates', 'calm studio classes'],
  ['IronDistrict Gym', 'hardcore strength training'],
  ['PeakRun Coaching', 'running plans and races'],
  ['FlowState Yoga', 'mindful movement studio'],
  ['BoxHouse Training', 'boxing and conditioning'],
  ['VitalForm Wellness', 'fitness, nutrition, recovery'],
]

export function FitnessIndex() {
  const liveWebsites = fitnessWebsites.filter((website) => website.status === 'completed' || website.status === 'live')

  return (
    <main className="bg-[#f3fbf6] text-[#111827]">
      <section className="relative -mt-16 overflow-hidden bg-[#07130c] pb-20 pt-24 text-white md:pb-28 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(20,83,45,0.65),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(249,115,22,0.34),transparent_24%),linear-gradient(135deg,#07130c,#14532d_56%,#111827)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_54px)]" />
        <Container>
          <AnimatedSection className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <Link to="/" className="text-sm font-bold text-white/70 transition hover:text-white">
                Back to Home
              </Link>
              <div className="mt-8 inline-flex border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#fb923c]">
                {liveWebsites.length} live / 10 planned
              </div>
              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                Fitness websites built for momentum, trust, and trial signups.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                A category hub for gyms, studios, trainers, wellness programs, and coaching brands that need users to
                understand the offer and take the first step fast.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#live-concepts" size="lg" className="bg-[#fb923c] text-[#07130c] hover:bg-white">
                  View Live Concept
                </CTAButton>
                <CTAButton href="#roadmap" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  See Roadmap
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[520px]">
              <div className="absolute left-0 top-8 h-[29rem] w-full border border-white/15 bg-white/8 p-5 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="grid h-full grid-cols-[0.82fr_1.18fr]">
                  <div className="bg-[#ecfdf5] p-5 text-[#111827]">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#14532d]">Weekly split</p>
                    <div className="mt-8 space-y-3">
                      {['Strength', 'HIIT', 'Mobility', 'Recovery'].map((item, index) => (
                        <div key={item} className="flex items-center justify-between bg-white p-4 shadow-sm">
                          <span className="font-black">{item}</span>
                          <span className="text-xs font-black text-slate-400">0{index + 1}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="relative bg-[linear-gradient(135deg,#14532d,#16a34a_48%,#f97316)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:42px_42px]" />
                    <div className="absolute bottom-6 left-6 right-6 bg-white/92 p-5 text-[#111827] shadow-xl">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#14532d]">PulseForge Fitness</p>
                      <p className="mt-2 text-3xl font-black">Train hard. Track clearly. Start today.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 grid w-full max-w-md -translate-x-1/2 grid-cols-3 border border-white/15 bg-white text-center text-[#111827] shadow-xl">
                {[
                  ['01', 'Live'],
                  ['09', 'Queued'],
                  ['10', 'Goal'],
                ].map(([value, label]) => (
                  <div key={label} className="border-r border-slate-200 p-4 last:border-r-0">
                    <p className="text-3xl font-black text-[#14532d]">{value}</p>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-slate-500">{label}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="border-b border-[#d6eadb] bg-white py-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {trainingPillars.map((pillar) => (
              <span key={pillar} className="rounded-full border border-[#d6eadb] bg-[#f3fbf6] px-4 py-2 text-sm font-bold text-slate-600">
                {pillar}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="live-concepts" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#14532d]">Live concept</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                One gym homepage is ready to explore.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              The first fitness concept focuses on a performance gym with class clarity, coaching trust,
              transformation proof, and a trial-membership path.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            {liveWebsites.map((website) => (
              <Link
                key={website.id}
                to={`/fitness/${website.slug}`}
                className="group grid overflow-hidden bg-white shadow-xl shadow-slate-950/8 transition duration-300 hover:-translate-y-1 hover:shadow-2xl md:grid-cols-[0.95fr_1.05fr]"
              >
                <div
                  className="relative min-h-72"
                  style={{
                    backgroundImage: `linear-gradient(145deg, ${website.colors.secondary} 0%, ${website.colors.primary} 56%, ${website.colors.accent} 100%)`,
                  }}
                >
                  {website.image && (
                    <img
                      src={website.image}
                      alt={`${website.title} website preview`}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                  <div className={`absolute inset-0 ${website.image ? 'bg-gradient-to-t from-black/45 via-transparent to-transparent' : 'bg-[linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:44px_44px]'}`} />
                  <div className="absolute bottom-5 left-5 flex gap-2">
                    {[website.colors.primary, website.colors.secondary, website.colors.accent, website.colors.dark].map((color) => (
                      <span key={color} className="h-7 w-7 rounded-full border border-white/80 shadow-sm" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#14532d]">Live design</p>
                  <h3 className="mt-4 text-4xl font-black transition group-hover:text-[#14532d]">{website.title}</h3>
                  <p className="mt-3 text-sm font-bold text-slate-600">{website.style}</p>
                  <p className="mt-5 text-base leading-7 text-slate-600">{website.shortDescription}</p>
                  <div className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-[#111827] px-4 py-3 text-sm font-bold text-white transition group-hover:bg-[#14532d]">
                    Open Homepage
                  </div>
                </div>
              </Link>
            ))}

            <div className="border border-[#d6eadb] bg-[#ecfdf5] p-8">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#14532d]">Fitness UX rules</p>
              <h3 className="mt-4 text-3xl font-black">Users need a low-friction first win.</h3>
              <div className="mt-8 space-y-4">
                {uxNotes.map(([title, text]) => (
                  <article key={title} className="bg-white p-5 shadow-sm">
                    <h4 className="text-xl font-black">{title}</h4>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="roadmap" className="border-y border-[#d6eadb] bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#14532d]">Roadmap</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                More fitness niches can follow.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              These coming-soon cards keep the category roadmap visible while the first gym concept is live.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {comingSoonConcepts.map(([name, focus]) => (
              <article key={name} className="border border-[#d6eadb] bg-[#f3fbf6] p-6 opacity-90 shadow-sm">
                <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#14532d]">
                  Coming soon
                </div>
                <h3 className="mt-5 text-2xl font-black">{name}</h3>
                <p className="mt-3 text-sm font-bold text-slate-600">{focus}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
