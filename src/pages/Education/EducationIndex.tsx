import { Link } from 'react-router-dom'
import { AnimatedSection, Container, CTAButton } from '../../components'
import { educationWebsites } from '../../data/websites'

const learningTypes = ['Online Courses', 'Tutoring', 'Academies', 'Test Prep', 'Workshops', 'Student Portals']

const uxNotes = [
  ['Outcomes first', 'Education pages need clear learning goals, curriculum shape, student proof, and enrollment paths.'],
  ['Reduce decision stress', 'Users should quickly see who it is for, what is included, schedule options, and pricing cues.'],
  ['Trust through structure', 'Strong hierarchy, lesson previews, instructor credibility, and progress signals make programs feel real.'],
]

const comingSoonConcepts = [
  ['BrightBridge Academy', 'private school admissions'],
  ['ExamEdge Prep', 'SAT and ACT preparation'],
  ['CodeNest Kids', 'coding classes for children'],
  ['FluentPath Languages', 'adult language learning'],
  ['TutorLoop', 'one-on-one tutoring marketplace'],
  ['SkillForge Workshops', 'career upskilling programs'],
]

export function EducationIndex() {
  const liveWebsites = educationWebsites.filter((website) => website.status === 'completed' || website.status === 'live')

  return (
    <main className="bg-[#f7f8ff] text-[#111827]">
      <section className="relative -mt-16 overflow-hidden bg-[#1e1b4b] pb-20 pt-24 text-white md:pb-28 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_20%,rgba(79,70,229,0.58),transparent_28%),radial-gradient(circle_at_84%_24%,rgba(34,197,94,0.28),transparent_22%),linear-gradient(135deg,#111827,#3730a3_58%,#1e1b4b)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_56px)]" />
        <Container>
          <AnimatedSection className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <Link to="/" className="text-sm font-bold text-white/70 transition hover:text-white">
                Back to Home
              </Link>
              <div className="mt-8 inline-flex border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-[#bbf7d0]">
                {liveWebsites.length} live / 10 planned
              </div>
              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                Education websites built for enrollment, clarity, and student momentum.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                A category hub for schools, tutors, course creators, academies, test prep brands, and training programs that need users to understand the learning path fast.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#live-concepts" size="lg" className="bg-[#bbf7d0] text-[#111827] hover:bg-white">
                  View Live Concept
                </CTAButton>
                <CTAButton href="#roadmap" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  See Roadmap
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[520px]">
              <div className="absolute right-0 top-8 h-[29rem] w-full border border-white/15 bg-white/10 p-5 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="grid h-full grid-rows-[1fr_auto] overflow-hidden bg-[#e0e7ff] text-[#111827]">
                  <div className="relative bg-[linear-gradient(135deg,#e0e7ff,#3730a3_54%,#22c55e)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.20)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.20)_1px,transparent_1px)] [background-size:46px_46px]" />
                    <div className="absolute left-8 top-8 rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#3730a3] shadow-sm">
                      Cohort starts Monday
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/94 p-5 shadow-xl">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#3730a3]">LearnSphere Academy</p>
                      <p className="mt-2 text-3xl font-black">A course path students can actually follow.</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 border-t border-slate-200 bg-white text-center">
                    {[
                      ['12', 'Modules'],
                      ['92%', 'Completion'],
                      ['4.9', 'Rating'],
                    ].map(([value, label]) => (
                      <div key={label} className="border-r border-slate-200 p-4 last:border-r-0">
                        <p className="text-2xl font-black text-[#3730a3]">{value}</p>
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

      <section className="border-b border-[#dbe0ff] bg-white py-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {learningTypes.map((item) => (
              <span key={item} className="rounded-full border border-[#dbe0ff] bg-[#f7f8ff] px-4 py-2 text-sm font-bold text-slate-600">
                {item}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="live-concepts" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 grid gap-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#3730a3]">Live concept</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                One online academy homepage is ready to explore.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              The first education concept focuses on cohort learning with curriculum previews, instructor trust,
              student outcomes, and a clear enrollment flow.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
            {liveWebsites.map((website) => (
              <Link
                key={website.id}
                to={`/education/${website.slug}`}
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
                  <div className={`absolute inset-0 ${website.image ? 'bg-gradient-to-t from-[#111827]/50 via-transparent to-transparent' : 'bg-[linear-gradient(90deg,rgba(255,255,255,0.24)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.24)_1px,transparent_1px)] [background-size:44px_44px]'}`} />
                  <div className="absolute bottom-5 left-5 flex gap-2">
                    {[website.colors.primary, website.colors.secondary, website.colors.accent, website.colors.dark].map((color) => (
                      <span key={color} className="h-7 w-7 rounded-full border border-white/80 shadow-sm" style={{ backgroundColor: color }} />
                    ))}
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#3730a3]">Live design</p>
                  <h3 className="mt-4 text-4xl font-black transition group-hover:text-[#3730a3]">{website.title}</h3>
                  <p className="mt-3 text-sm font-bold text-slate-600">{website.style}</p>
                  <p className="mt-5 text-base leading-7 text-slate-600">{website.shortDescription}</p>
                  <div className="mt-8 inline-flex w-full items-center justify-center rounded-lg bg-[#111827] px-4 py-3 text-sm font-bold text-white transition group-hover:bg-[#3730a3]">
                    Open Homepage
                  </div>
                </div>
              </Link>
            ))}

            <div className="border border-[#dbe0ff] bg-[#eef2ff] p-8">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-[#3730a3]">Education UX rules</p>
              <h3 className="mt-4 text-3xl font-black">Students need to see the path before they enroll.</h3>
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

      <section id="roadmap" className="border-y border-[#dbe0ff] bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#3730a3]">Roadmap</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                More school and learning niches can follow.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-600">
              These coming-soon cards keep the Education category useful while the first academy concept is live.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {comingSoonConcepts.map(([name, focus]) => (
              <article key={name} className="border border-[#dbe0ff] bg-[#f7f8ff] p-6 opacity-90 shadow-sm">
                <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#3730a3]">
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
