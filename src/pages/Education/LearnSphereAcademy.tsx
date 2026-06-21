import { Container, CTAButton, SubWebsiteNav } from '../../components'

const navLinks = [
  { label: 'Curriculum', href: '#curriculum' },
  { label: 'Outcomes', href: '#outcomes' },
  { label: 'Mentors', href: '#mentors' },
  { label: 'Enroll', href: '#enroll' },
]

const curriculum = [
  ['Foundation Sprint', 'Learning systems, study routines, goal mapping, and core skill refreshers.'],
  ['Project Labs', 'Guided assignments, feedback sessions, peer reviews, and portfolio-ready outcomes.'],
  ['Career Pathway', 'Interview prep, presentation practice, capstone polish, and next-step planning.'],
]

const outcomes = [
  ['92%', 'course completion rate'],
  ['4.9/5', 'mentor rating'],
  ['1:8', 'coach-to-student ratio'],
]

const mentors = [
  ['Nadia Brooks', 'Learning Designer', 'Builds practical course pathways and feedback loops.'],
  ['Evan Morales', 'Career Coach', 'Turns projects into stories students can present clearly.'],
]

export function LearnSphereAcademy() {
  return (
    <main className="bg-[#f7f8ff] text-[#111827]">
      <SubWebsiteNav
        brand="LearnSphere Academy"
        links={navLinks}
        ctaLabel="Enroll Now"
        ctaHref="#enroll"
        collectionPath="/education"
        className="border-b border-[#dbe0ff] bg-white/94 text-[#111827]"
        brandClassName="text-[#3730a3]"
        linkClassName="text-slate-600 hover:text-[#3730a3]"
        ctaClassName="bg-[#3730a3] text-white hover:bg-[#1e1b4b]"
        menuButtonClassName="border-[#dbe0ff] text-[#3730a3] hover:bg-[#eef2ff]"
        mobilePanelClassName="border border-[#dbe0ff] bg-white"
      />

      <section className="relative overflow-hidden bg-[#1e1b4b] pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(79,70,229,0.52),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(34,197,94,0.24),transparent_22%),linear-gradient(135deg,#111827,#3730a3_54%,#1e1b4b)]" />
        <Container>
          <div className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#bbf7d0]">LearnSphere Academy</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                Guided online learning with structure students can trust.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                A cohort-based academy concept for learners who need clear modules, mentor feedback, project labs,
                and a path from first lesson to portfolio-ready outcome.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#enroll" size="lg" className="bg-[#bbf7d0] text-[#111827] hover:bg-white">
                  Join Next Cohort
                </CTAButton>
                <CTAButton href="#curriculum" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  View Curriculum
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[560px]">
              <div className="absolute right-0 top-0 h-[32rem] w-full max-w-[38rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="grid h-full grid-rows-[1fr_auto] overflow-hidden bg-[#eef2ff] text-[#111827]">
                  <div className="relative bg-[linear-gradient(135deg,#e0e7ff,#3730a3_52%,#22c55e)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:48px_48px]" />
                    <div className="absolute left-6 top-6 rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#3730a3] shadow-sm">
                      Next cohort: 18 seats
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/94 p-5 shadow-xl">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#3730a3]">Module 01</p>
                      <h2 className="mt-2 text-3xl font-black">Build a study system before the work gets heavy.</h2>
                      <p className="mt-2 text-sm font-bold text-slate-500">Lessons, labs, mentor feedback, and progress checkpoints</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 border-t border-slate-200 bg-white text-center">
                    {outcomes.map(([value, label]) => (
                      <div key={label} className="border-r border-slate-200 p-4 last:border-r-0">
                        <p className="text-2xl font-black text-[#3730a3]">{value}</p>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-64 bg-white p-5 text-[#111827] shadow-2xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#3730a3]">Mentor desk</p>
                <p className="mt-3 text-3xl font-black">Feedback returned every Friday.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="curriculum" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#3730a3]">Curriculum path</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">A program shape students can understand in one scroll.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Education websites work harder when they reveal the path: what students learn, how they practice,
              and what they can show when the program ends.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {curriculum.map(([title, text], index) => (
              <article key={title} className="border border-[#dbe0ff] bg-white p-7 shadow-sm">
                <p className="text-5xl font-black text-[#22c55e]">0{index + 1}</p>
                <h3 className="mt-8 text-2xl font-black">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="outcomes" className="border-y border-[#dbe0ff] bg-white py-20 md:py-28">
        <Container className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#3730a3]">Student outcomes</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Progress proof without vague promises.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              The page uses specific metrics, project language, and coaching ratios so prospective students can judge the program quickly.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {outcomes.map(([value, label]) => (
              <div key={label} className="bg-[#eef2ff] p-6 text-center shadow-sm">
                <p className="text-4xl font-black text-[#3730a3]">{value}</p>
                <p className="mt-2 text-xs font-black uppercase tracking-[0.16em] text-slate-500">{label}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="mentors" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#3730a3]">Mentor team</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Guidance from people students can picture learning from.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {mentors.map(([name, role, text]) => (
              <article key={name} className="bg-white p-7 shadow-sm">
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#3730a3] text-2xl font-black text-white">
                  {name.split(' ').map((part) => part[0]).join('')}
                </div>
                <h3 className="text-2xl font-black">{name}</h3>
                <p className="mt-2 text-sm font-black uppercase tracking-[0.16em] text-[#3730a3]">{role}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="enroll" className="bg-[#1e1b4b] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.76fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#bbf7d0]">Enrollment</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                Start with the next cohort and a mentor-reviewed learning plan.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                Enrollment pages should make timing, fit, support, and next steps clear before a student clicks apply.
              </p>
            </div>
            <div className="bg-white p-6 text-[#111827]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">Admissions desk</p>
              <a href="mailto:hello@learnsphere.example" className="mt-5 block bg-[#3730a3] px-5 py-4 text-center text-sm font-black text-white transition hover:bg-[#1e1b4b]">
                Email Admissions
              </a>
              <a href="tel:555-0608" className="mt-3 block bg-[#dcfce7] px-5 py-4 text-center text-sm font-black text-[#166534] transition hover:bg-[#bbf7d0]">
                Call (555) 060-8000
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
