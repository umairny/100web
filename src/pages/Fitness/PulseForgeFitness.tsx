import { Container, CTAButton, RestaurantSubNav } from '../../components'

const navLinks = [
  { label: 'Programs', href: '#programs' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Results', href: '#results' },
  { label: 'Join', href: '#join' },
]

const programs = [
  ['Forge Strength', 'Progressive barbell coaching for real strength gains.', 'from-[#dcfce7] to-[#14532d]'],
  ['Engine HIIT', 'Conditioning circuits built for speed, grit, and stamina.', 'from-[#ffedd5] to-[#f97316]'],
  ['Mobility Reset', 'Recovery, control, and range for sustainable training.', 'from-[#ecfdf5] to-[#16a34a]'],
]

const schedule = [
  ['06:00', 'Strength Lab'],
  ['08:30', 'Engine HIIT'],
  ['12:15', 'Lunch Lift'],
  ['18:00', 'Team Forge'],
]

const results = [
  ['42%', 'avg strength increase'],
  ['18', 'weekly coached classes'],
  ['6 wk', 'starter challenge'],
]

export function PulseForgeFitness() {
  return (
    <main className="bg-[#f3fbf6] text-[#111827]">
      <RestaurantSubNav
        brand="PulseForge"
        links={navLinks}
        ctaLabel="Start Trial"
        ctaHref="#join"
        collectionPath="/fitness"
        className="border-b border-[#d6eadb] bg-white/92 text-[#111827]"
        brandClassName="text-[#14532d]"
        linkClassName="text-slate-600 hover:text-[#14532d]"
        ctaClassName="bg-[#14532d] text-white hover:bg-[#111827]"
        menuButtonClassName="border-[#d6eadb] text-[#14532d] hover:bg-[#ecfdf5]"
        mobilePanelClassName="border border-[#d6eadb] bg-white"
      />

      <section className="relative overflow-hidden bg-[#07130c] pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(22,163,74,0.38),transparent_26%),radial-gradient(circle_at_82%_22%,rgba(249,115,22,0.34),transparent_23%),linear-gradient(135deg,#07130c,#14532d_58%,#111827)]" />
        <Container>
          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#fb923c]">PulseForge Fitness</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                Build power with coaching that keeps you moving.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                Strength, conditioning, and mobility training for members who want structure, accountability, and a
                clear path from first session to measurable progress.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#join" size="lg" className="bg-[#fb923c] text-[#07130c] hover:bg-white">
                  Claim 7-Day Trial
                </CTAButton>
                <CTAButton href="#programs" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  View Programs
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[560px]">
              <div className="absolute inset-x-0 top-0 h-[32rem] border border-white/15 bg-white/8 p-5 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="grid h-full grid-rows-[1fr_auto] overflow-hidden bg-[#ecfdf5] text-[#111827]">
                  <div className="relative bg-[linear-gradient(135deg,#14532d,#16a34a_48%,#f97316)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:44px_44px]" />
                    <div className="absolute left-6 top-6 bg-[#111827] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white">
                      Today: Engine HIIT
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/92 p-5 shadow-xl">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#14532d]">Member dashboard</p>
                      <h2 className="mt-2 text-3xl font-black">6-week starter challenge starts Monday.</h2>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 border-t border-slate-200 bg-white text-center">
                    {results.map(([value, label]) => (
                      <div key={label} className="border-r border-slate-200 p-4 last:border-r-0">
                        <p className="text-2xl font-black text-[#14532d]">{value}</p>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-64 bg-white p-5 text-[#111827] shadow-2xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#14532d]">Trial offer</p>
                <p className="mt-3 text-3xl font-black">7 days, 3 classes, one coach consult.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="programs" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#14532d]">Programs</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Pick the training lane that matches your goal.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              The page avoids vague gym promises and turns services into obvious paths for different levels of member intent.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {programs.map(([title, text, tone]) => (
              <article key={title} className="overflow-hidden bg-white shadow-xl shadow-slate-950/8">
                <div className={`h-48 bg-gradient-to-br ${tone}`} />
                <div className="p-6">
                  <h3 className="text-2xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                  <a href="#join" className="mt-6 inline-flex w-full justify-center rounded-lg bg-[#111827] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#14532d]">
                    Start This Track
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="schedule" className="border-y border-[#d6eadb] bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div className="bg-[#ecfdf5] p-8 md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#14532d]">Class schedule</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Clear times, clear intensity, easy commitment.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Fitness users decide quickly. A strong schedule block shows whether the gym fits their routine before
                they read every program detail.
              </p>
            </div>
            <div className="grid gap-4">
              {schedule.map(([time, name]) => (
                <article key={`${time}-${name}`} className="flex items-center justify-between border border-[#d6eadb] bg-[#f3fbf6] p-6">
                  <p className="text-3xl font-black text-[#14532d]">{time}</p>
                  <p className="text-xl font-black">{name}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="results" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#14532d]">Results</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Proof that feels concrete, not motivational filler.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {results.map(([value, label]) => (
              <article key={label} className="border border-[#d6eadb] bg-white p-8 shadow-sm">
                <p className="text-6xl font-black text-[#f97316]">{value}</p>
                <h3 className="mt-5 text-2xl font-black">{label}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  A short, measurable proof point designed for quick confidence before the user starts a trial.
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="join" className="bg-[#07130c] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#fb923c]">Start training</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                Try the gym with a coach, not a sales script.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                The first week includes class access, a movement screen, and a simple training recommendation.
              </p>
            </div>
            <div className="bg-white p-6 text-[#111827]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">Trial desk</p>
              <a href="tel:555-0401" className="mt-5 block bg-[#14532d] px-5 py-4 text-center text-sm font-black text-white transition hover:bg-[#111827]">
                Call (555) 040-1000
              </a>
              <a href="mailto:start@pulseforge.example" className="mt-3 block bg-[#ecfdf5] px-5 py-4 text-center text-sm font-black text-[#14532d] transition hover:bg-[#dcfce7]">
                Email PulseForge
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
