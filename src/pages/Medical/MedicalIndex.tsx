import { Link } from 'react-router-dom'
import {
  ArrowRight,
  CalendarCheck,
  FileText,
  HeartPulse,
  ShieldCheck,
  Stethoscope,
} from 'lucide-react'
import { AnimatedSection, Container, CTAButton } from '../../components'
import { imageUrl } from '../../assets/images'
import { medicalWebsites } from '../../data/websites'

const careTracks = [
  'Primary Care',
  'Preventive Visits',
  'Telehealth',
  'Care Plans',
  'Patient Support',
  'Access Guidance',
]

const uxNotes = [
  {
    title: 'Trust before action',
    text: 'Patients should quickly see what care is offered, who provides it, and how the clinic handles next steps.',
    icon: ShieldCheck,
  },
  {
    title: 'Plain-language paths',
    text: 'Visit types, appointment options, insurance guidance, and follow-up details should be scannable.',
    icon: FileText,
  },
  {
    title: 'Calm conversion',
    text: 'Booking prompts should feel helpful and visible without adding pressure to an already sensitive search.',
    icon: CalendarCheck,
  },
]

const gallery = [
  {
    title: 'Clinic confidence',
    text: 'Warm spaces and staff imagery reduce the cold, clinical feel.',
    image: 'medical/harbor/clinic-interior.png',
  },
  {
    title: 'Clear consultation',
    text: 'Consultation visuals reinforce guidance, listening, and clarity.',
    image: 'medical/harbor/doctor-consultation.png',
  },
  {
    title: 'Support after visits',
    text: 'Follow-up imagery makes ongoing care feel organized.',
    image: 'medical/harbor/patient-support.png',
  },
]

const totalMedicalConcepts = 10

export function MedicalIndex() {
  const liveWebsites = medicalWebsites.filter((website) => website.status === 'completed' || website.status === 'live')
  const plannedRoadmapCount = Math.max(totalMedicalConcepts - liveWebsites.length, 0)

  return (
    <main className="bg-[#fff8f2] text-[#18313a]">
      <section className="relative isolate -mt-16 overflow-hidden bg-[#fbeee8] pt-24 md:pt-32">
        <img
          src={imageUrl('medical/harbor/doctor-consultation.png')}
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 -z-20 hidden h-full w-1/2 object-cover opacity-28 lg:block"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(115deg,#fff8f2_0%,#fff8f2_54%,rgba(251,238,232,0.74)_100%)]" />
        <svg
          aria-hidden="true"
          className="absolute left-0 top-20 -z-10 h-[34rem] w-full text-[#d77565]/18"
          viewBox="0 0 1440 520"
          preserveAspectRatio="none"
        >
          <path
            d="M-80 320 C 160 120, 310 500, 560 260 S 940 150, 1160 300 S 1430 350, 1530 130"
            fill="none"
            stroke="currentColor"
            strokeWidth="54"
            strokeLinecap="round"
          />
        </svg>
        <Container>
          <AnimatedSection className="grid min-h-[calc(100vh-5rem)] gap-12 py-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:py-16">
            <div>
              <Link to="/" className="inline-flex text-sm font-bold text-[#6e6f55] transition hover:text-[#18313a]">
                Back to Home
              </Link>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-black text-[#8a4d5c] shadow-sm ring-1 ring-[#efd5cc]">
                <Stethoscope aria-hidden="true" size={17} />
                {liveWebsites.length} live / {totalMedicalConcepts} planned
              </div>
              <h1 className="mt-6 max-w-5xl font-serif text-5xl leading-[1.02] tracking-normal text-[#18313a] md:text-7xl">
                A stylish medical design library with softer patient paths.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d6d66] md:text-xl">
                A healthcare design hub focused on trust, service clarity, appointment confidence, and friendly paths
                into care.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton href="#live-concepts" size="lg" className="rounded-full bg-[#18313a] text-white hover:bg-[#8a4d5c]">
                  View Live Concepts
                </CTAButton>
                <CTAButton
                  href="#design-system"
                  variant="outline"
                  size="lg"
                  trailingIcon={<ArrowRight aria-hidden="true" size={20} />}
                  className="rounded-full border-[#dcbfb4] bg-white/70 text-[#18313a] hover:bg-white hover:text-[#18313a]"
                >
                  View Design System
                </CTAButton>
              </div>
            </div>

            <div className="relative">
              <div className="grid gap-4 rounded-[3rem] border border-white bg-white/74 p-4 shadow-2xl shadow-[#8a4d5c]/14 backdrop-blur sm:grid-cols-[0.92fr_1.08fr] sm:items-end">
                <img
                  src={imageUrl('medical/harbor/hero.png')}
                  alt="A welcoming modern clinic"
                  className="h-80 w-full rounded-[2.25rem] rounded-br-[6rem] object-cover shadow-xl shadow-[#18313a]/12 sm:h-[34rem]"
                />
                <div className="space-y-4">
                  <img
                    src={imageUrl('medical/clearview/appointment.png')}
                    alt="Mobile scheduling for a healthcare appointment"
                    className="h-56 w-full rounded-[2.25rem] rounded-tl-[5rem] object-cover shadow-lg shadow-[#18313a]/10"
                  />
                  <div className="rounded-[2.25rem] rounded-bl-[5rem] bg-[#18313a] p-6 text-white shadow-lg shadow-[#18313a]/16">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f3c8bd]">Medical UX focus</p>
                    <p className="mt-3 font-serif text-3xl leading-tight">Book clearly, understand care, follow the plan.</p>
                  </div>
                  <img
                    src={imageUrl('medical/northstar/dental-team.png')}
                    alt="A friendly healthcare care team"
                    className="h-52 w-full rounded-[2.25rem] rounded-tr-[5rem] object-cover shadow-lg shadow-[#18313a]/10"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="border-y border-[#efd5cc] bg-white py-8">
        <Container>
          <div className="flex flex-wrap justify-center gap-2">
            {careTracks.map((track) => (
              <span key={track} className="rounded-full border border-[#efd5cc] bg-[#fff8f2] px-5 py-2 text-sm font-bold text-[#6c6158]">
                {track}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <section id="live-concepts" className="relative isolate overflow-hidden bg-[#18313a] py-20 text-white md:py-28">
        <svg
          aria-hidden="true"
          className="absolute inset-x-0 top-10 -z-10 h-64 w-full text-white/7"
          viewBox="0 0 1440 260"
          preserveAspectRatio="none"
        >
          <path
            d="M-70 150 C 120 40, 260 220, 430 116 S 720 18, 880 138 S 1190 254, 1510 58"
            fill="none"
            stroke="currentColor"
            strokeWidth="42"
            strokeLinecap="round"
          />
        </svg>
        <Container>
          <AnimatedSection className="mb-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f3c8bd]">Live concepts</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
                Ten specialty concepts in one polished board.
              </h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                [liveWebsites.length, 'Live'],
                [plannedRoadmapCount, 'Queued'],
                [totalMedicalConcepts, 'Total'],
              ].map(([value, label]) => (
                <div key={label} className="rounded-[2rem] rounded-br-[4rem] bg-white/10 p-4 text-center ring-1 ring-white/14">
                  <p className="font-serif text-4xl text-[#f3c8bd]">{value}</p>
                  <p className="mt-1 text-xs font-black uppercase text-white/60">{label}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {liveWebsites.map((website, index) => (
              <Link
                key={website.id}
                to={`/medical/${website.slug}`}
                className="group relative min-h-[25rem] overflow-hidden rounded-[2.5rem] rounded-br-[6rem] bg-white/10 shadow-xl shadow-black/16 ring-1 ring-white/14 transition duration-300 hover:-translate-y-1 hover:ring-[#f3c8bd]/80"
              >
                {website.image && (
                  <img
                    src={website.image}
                    alt={`${website.title} website preview`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                )}
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(24,49,58,0.92)_0%,rgba(24,49,58,0.42)_56%,rgba(24,49,58,0.1)_100%)]" />
                <div className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-black uppercase text-[#8a4d5c] shadow-lg shadow-black/10">
                  Concept {String(index + 1).padStart(2, '0')}
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="font-serif text-3xl leading-tight text-white">
                    {website.title}
                  </h3>
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/72">
                    {website.shortDescription}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-black text-[#8a4d5c] transition group-hover:bg-[#f3c8bd] group-hover:text-[#18313a]">
                    Open Homepage <ArrowRight aria-hidden="true" size={17} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 rounded-[2rem] border border-white/12 bg-white/8 p-5">
            <p className="text-sm leading-7 text-white/68">
              {liveWebsites.length} healthcare demos are live now, each with a different specialty, visual system, and
              appointment path. {plannedRoadmapCount} concepts remain in the medical roadmap.
            </p>
          </div>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            {uxNotes.map(({ title, text, icon: Icon }) => (
              <article key={title} className="rounded-[2rem] rounded-tl-[4rem] bg-white/10 p-6 ring-1 ring-white/14">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#f3c8bd] text-[#18313a]">
                  <Icon aria-hidden="true" size={22} />
                </span>
                <h3 className="mt-5 font-serif text-2xl text-white">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/68">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="design-system" className="bg-[#fff8f2] py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8a4d5c]">Visual system</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#18313a] md:text-5xl">
                Healthcare pages work better when patients can picture the experience.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#5d6d66]">
              The index now uses softer curves, image-led sections, and calmer labels so the collection feels curated
              instead of crowded.
            </p>
          </AnimatedSection>
          <div className="grid gap-5 md:grid-cols-3">
            {gallery.map(({ title, text, image }) => (
              <article key={title} className="overflow-hidden rounded-[2.5rem] rounded-tr-[6rem] bg-white shadow-sm shadow-[#14313f]/6 ring-1 ring-[#efd5cc]">
                <img src={imageUrl(image)} alt="" className="h-72 w-full object-cover" />
                <div className="p-6">
                  <h3 className="font-serif text-3xl text-[#18313a]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5d6d66]">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="roadmap" className="border-y border-[#efd5cc] bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8a4d5c]">Roadmap</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#18313a] md:text-5xl">
                The medical collection is complete.
              </h2>
              <p className="mt-5 max-w-xl text-lg leading-8 text-[#5d6d66]">
                All 10 healthcare concepts are now live, each with its own specialty, visual system, calls to action,
                and patient-first information structure.
              </p>
            </div>
            <div className="rounded-[3rem] rounded-bl-[7rem] border border-[#efd5cc] bg-[#fff8f2] p-8 shadow-sm shadow-[#14313f]/5">
              <div className="flex items-center gap-4">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#18313a] text-white">
                  <HeartPulse aria-hidden="true" size={25} />
                </span>
                <div>
                  <p className="font-serif text-4xl text-[#18313a]">10 / 10</p>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#8a4d5c]">Live concepts</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-[#5d6d66]">
                Browse the live concept board above to compare primary care, pediatrics, dental, optometry, physical
                therapy, counseling, urgent care, women's health, cardiology, and dermatology designs.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Primary', 'Pediatric', 'Dental', 'Optometry', 'Therapy', 'Mental health', 'Urgent', 'Women', 'Heart', 'Skin'].map((item) => (
                  <span key={item} className="rounded-full bg-white px-3 py-1 text-xs font-black text-[#6c6158] ring-1 ring-[#efd5cc]">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  )
}
