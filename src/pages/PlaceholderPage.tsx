import { Link } from 'react-router-dom'

export function PlaceholderPage() {
  const features = [
    { title: 'Compare tutors', text: 'See ratings, specialties, availability, and teaching style at a glance.' },
    { title: 'Book sessions', text: 'Schedule one-to-one lessons, group classes, and mock exams in minutes.' },
    { title: 'Track progress', text: 'Follow goals, assignments, and milestones in a shared student dashboard.' },
  ]

  const trustPoints = ['Verified tutors', 'Flexible scheduling', 'Parent updates']

  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,_#f8fbff_0%,_#eef4ff_45%,_#fef7ed_100%)] px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <section className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_30px_90px_-30px_rgba(15,23,42,0.35)]">
          <div className="grid gap-8 p-8 md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:p-12">
            <div>
              <span className="inline-flex rounded-full bg-[#eef6ff] px-3 py-1 text-xs font-black uppercase tracking-[0.24em] text-[#2563eb]">
                Tutoring marketplace
              </span>
              <h1 className="mt-6 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
                A trusted marketplace that helps families compare tutors, book sessions, and track learning goals.
              </h1>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
                Find the right expert for math, reading, science, test prep, or enrichment with a simple, parent-friendly experience.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link to="/" className="rounded-full bg-slate-900 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-700">
                  Explore tutors
                </Link>
                <a href="#features" className="rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-black text-slate-700 transition hover:bg-slate-50">
                  See how it works
                </a>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {trustPoints.map((point) => (
                  <span key={point} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-semibold text-slate-600">
                    {point}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-gradient-to-br from-[#0f172a] via-[#1e3a8a] to-[#2563eb] p-6 text-white">
              <div className="rounded-[1.25rem] bg-white/10 p-5 backdrop-blur">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-semibold text-sky-100">Live availability</p>
                    <p className="mt-1 text-2xl font-black">Today • 14 tutors online</p>
                  </div>
                  <div className="rounded-full bg-emerald-400/20 px-3 py-2 text-sm font-bold text-emerald-200">
                    98% match rate
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {['Algebra • 6:30 PM', 'Reading • 7:00 PM', 'SAT prep • 8:00 PM'].map((slot) => (
                    <div key={slot} className="rounded-2xl border border-white/15 bg-slate-950/40 p-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-black">{slot}</p>
                          <p className="mt-1 text-sm text-slate-300">Certified tutor • 4.9/5 rating</p>
                        </div>
                        <div className="rounded-full bg-white/10 px-3 py-2 text-sm font-bold">Book</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="grid gap-4 md:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="rounded-[1.5rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="h-16 rounded-[1rem] bg-gradient-to-br from-[#2563eb]/15 to-[#38bdf8]/10" />
              <h2 className="mt-5 text-xl font-black">{feature.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600">{feature.text}</p>
            </article>
          ))}
        </section>

        <section className="rounded-[2rem] border border-slate-200 bg-slate-900 p-8 text-white shadow-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-sky-300">Parents trust the process</p>
              <h2 className="mt-2 text-3xl font-black sm:text-4xl">From discovery to lesson delivery, every step stays clear and calm.</h2>
            </div>
            <Link to="/" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-black text-slate-900 transition hover:bg-slate-100">
              Start matching now
            </Link>
          </div>
        </section>
      </div>
    </main>
  )
}
