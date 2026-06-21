import { Link } from 'react-router-dom'
import { AnimatedSection, Container, CTAButton } from '../../components'
import { medicalWebsites } from '../../data/websites'

const careTracks = ['Primary Care', 'Preventive Visits', 'Lab Work', 'Telehealth', 'Chronic Care', 'Family Medicine']

const uxNotes = [
  ['Trust immediately', 'Medical pages need board-certified signals, plain-language services, and easy access to appointment paths.'],
  ['Patient clarity', 'Insurance, visit types, hours, and next steps should be visible before the user has to search.'],
  ['Calm accessibility', 'The interface should feel reassuring, readable, and fast for users who may already be stressed.'],
]

const comingSoonConcepts = [
  ['BrightPath Pediatrics', 'family-first pediatric care'],
  ['NorthStar Dental', 'clean dental booking flow'],
  ['ClearView Optometry', 'eye exams and eyewear retail'],
  ['Renew Physical Therapy', 'recovery plans and progress proof'],
  ['MindWell Counseling', 'approachable therapy intake'],
  ['Harbor Urgent Care', 'same-day visits and wait-time clarity'],
]

export function MedicalIndex() {
  const liveWebsites = medicalWebsites.filter((website) => website.status === 'completed' || website.status === 'live')

  return (
    <main className="bg-[#f4fbfa] text-[#102522]">
      <section className="relative -mt-16 overflow-hidden bg-[#073b35] pb-20 pt-24 text-white md:pb-28 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(20,184,166,0.46),transparent_28%),radial-gradient(circle_at_84%_24%,rgba(239,68,68,0.22),transparent_22%),linear-gradient(135deg,#062f2b,#0f766e_58%,#08342f)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_56px)]" />
        <Container>
          <AnimatedSection className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <Link to="/" className="text-sm font-bold text-white/70 transition hover:text-white">
                Back to Home
              </Link>
              <div className="mt-8 inline-flex border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#99f6e4]">
                {liveWebsites.length} live / 10 planned
              </div>
              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                Medical websites built for patient trust and simple appointments.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                A category hub for clinics, doctors, dentists, therapists, urgent care centers, and health practices that
                need calm information architecture and direct patient action.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#live-concepts" size="lg" className="bg-[#99f6e4] text-[#073b35] hover:bg-white">
                  View Live Concept
                </CTAButton>
                <CTAButton href="#roadmap" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  See Roadmap
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[520px]">
              <div className="absolute right-0 top-8 h-[29rem] w-full border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="grid h-full grid-rows-[1fr_auto] overflow-hidden bg-[#ecfeff] text-[#102522]">
                  <div className="relative bg-[linear-gradient(135deg,#ccfbf1,#0f766e_54%,#ef4444)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:46px_46px]" />
                    <div className="absolute left-8 top-8 rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#0f766e] shadow-sm">
                      Same week appointments
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/94 p-5 shadow-xl">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#0f766e]">Harbor Health Clinic</p>
                      <p className="mt-2 text-3xl font-black">Care plans that feel clear before you arrive.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 border-t border-slate-200 bg-white text-center">
                    {[
                      ['24h', 'Portal reply'],
                      ['8-6', 'Weekdays'],
                      ['4.8', 'Rating'],
                    ].map(([value, label]) => (
                      <div key={label} className="border-r border-slate-200 p-4 last:border-r-0">
                        <p className="text-2xl font-black text-[#0f766e]">{value}</p>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="border-b border-[#cce8e4] bg-white py-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {careTracks.map((track) => (
              <span key={track} className="rounded-full border border-[#cce8e4] bg-[#f4fbfa] px-4 py-2 text-sm font-bold text-slate-600">
                {track}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="live-concepts" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0f766e]">Live concept</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                One primary care clinic homepage is ready to explore.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              The first medical concept focuses on a neighborhood clinic with service clarity, provider trust,
              insurance guidance, and appointment conversion.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            {liveWebsites.map((website) => (
              <Link
                key={website.id}
                to={`/medical/${website.slug}`}
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
                  <div className={`absolute inset-0 ${website.image ? 'bg-gradient-to-t from-[#073b35]/50 via-transparent to-transparent' : 'bg-[linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:44px_44px]'}`} />
                  <div className="absolute bottom-5 left-5 flex gap-2">
                    {[website.colors.primary, website.colors.secondary, website.colors.accent, website.colors.dark].map((color) => (
                      <span key={color} className="h-7 w-7 rounded-full border border-white/80 shadow-sm" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#0f766e]">Live design</p>
                  <h3 className="mt-4 text-4xl font-black transition group-hover:text-[#0f766e]">{website.title}</h3>
                  <p className="mt-3 text-sm font-bold text-slate-600">{website.style}</p>
                  <p className="mt-5 text-base leading-7 text-slate-600">{website.shortDescription}</p>
                  <div className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-[#102522] px-4 py-3 text-sm font-bold text-white transition group-hover:bg-[#0f766e]">
                    Open Homepage
                  </div>
                </div>
              </Link>
            ))}

            <div className="border border-[#cce8e4] bg-[#ecfeff] p-8">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#0f766e]">Medical UX rules</p>
              <h3 className="mt-4 text-3xl font-black">Patients need confidence before they click.</h3>
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

      <section id="roadmap" className="border-y border-[#cce8e4] bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#0f766e]">Roadmap</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                More healthcare niches can follow.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              These coming-soon cards keep the Medical category useful while the first clinic concept is live.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {comingSoonConcepts.map(([name, focus]) => (
              <article key={name} className="border border-[#cce8e4] bg-[#f4fbfa] p-6 opacity-90 shadow-sm">
                <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#0f766e]">
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
