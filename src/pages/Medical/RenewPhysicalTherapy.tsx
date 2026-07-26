import {
  Activity,
  ArrowRight,
  Calendar,
  CheckCircle,
  ClipboardCheck,
  Clock,
  Dumbbell,
  FileText,
  MapPin,
  Phone,
  ShieldCheck,
  TrendingUp,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container, CTAButton, SubWebsiteNav } from '../../components'
import { imageUrl } from '../../assets/images'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Recovery Plans', href: '#plans' },
  { label: 'Progress', href: '#progress' },
  { label: 'Therapists', href: '#therapists' },
  { label: 'Visit Info', href: '#visit-info' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const trustPoints = ['Personalized recovery plans', 'Progress tracking', 'One-on-one guidance']
const progressPlan = ['Assess', 'Plan', 'Practice', 'Track']

const services: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: 'Movement Assessments',
    text: 'A practical look at movement, strength, mobility, symptoms, and everyday goals.',
    icon: Activity,
  },
  {
    title: 'Post-Injury Rehab',
    text: 'Supportive sessions focused on rebuilding movement confidence after an injury.',
    icon: ShieldCheck,
  },
  {
    title: 'Strength & Mobility Therapy',
    text: 'Guided work that combines controlled strength, mobility, and useful daily movement.',
    icon: Dumbbell,
  },
  {
    title: 'Hands-On Therapy',
    text: 'Therapist-guided care used alongside movement practice and home-plan support.',
    icon: Users,
  },
  {
    title: 'Balance & Stability Support',
    text: 'Careful practice for steadier movement, daily confidence, and functional control.',
    icon: CheckCircle,
  },
  {
    title: 'Recovery Planning',
    text: 'A clear plan for sessions, exercises, progress reviews, and next milestones.',
    icon: ClipboardCheck,
  },
]

const planSteps = [
  ['Understand the problem', 'Your therapist evaluates movement, symptoms, strength, mobility, and everyday goals.'],
  ['Build your plan', 'You receive a practical recovery plan with exercises, therapy sessions, and follow-up goals.'],
  ['Practice with support', 'Your therapist guides your movements, adjusts your plan, and helps you build confidence.'],
  ['Track progress', 'Progress is reviewed through movement improvements, comfort, consistency, and daily function.'],
]

const progressCards = [
  ['Mobility score', '72%', 'w-[72%]'],
  ['Strength progress', '64%', 'w-[64%]'],
  ['Comfort notes', 'Weekly', 'w-[58%]'],
  ['Home exercise consistency', '4 / week', 'w-[80%]'],
  ['Next milestone', 'Review', 'w-[46%]'],
]

const visitReasons = [
  'Back and neck discomfort',
  'Shoulder and knee issues',
  'Sports and activity injuries',
  'Post-surgery rehab support',
  'Balance and stability concerns',
  'Mobility and flexibility limits',
]

const providers = [
  {
    name: 'Dr. Maya Collins, PT',
    role: 'Physical Therapist',
    bio: 'Maya helps patients understand movement patterns, therapy goals, and practical steps between visits.',
  },
  {
    name: 'Jordan Hayes, PT',
    role: 'Movement & Mobility',
    bio: 'Jordan focuses on guided movement, mobility work, and clear coaching for everyday function.',
  },
  {
    name: 'Elena Brooks, PTA',
    role: 'Rehab Support',
    bio: 'Elena supports therapy sessions with calm instruction, home-plan review, and steady encouragement.',
  },
]

const studioFeatures = ['Private evaluation space', 'Guided exercise area', 'Practical home-plan support']

const visitDetails = [
  ['What to bring', 'Bring comfortable clothing, current movement questions, and any visit notes you want reviewed.'],
  ['First evaluation', 'Your therapist reviews movement, symptoms, goals, and practical next steps for care.'],
  ['Follow-up visits', 'Follow-ups may include guided practice, hands-on care, plan adjustments, and progress review.'],
  ['Home exercises', 'Your plan may include simple practice between visits with clear instructions.'],
  ['Appointment timing', 'Visit timing depends on evaluation needs, therapy focus, and follow-up goals.'],
  ['Payment and plan questions', 'Contact the clinic to review payment and plan details before your visit.'],
]

const appointmentTypes = [
  'Initial evaluation',
  'Follow-up therapy',
  'Injury rehab visit',
  'Mobility assessment',
  'Recovery plan review',
]

const reviews = [
  {
    name: 'Ari',
    quote: 'They explained what we were working on and helped me understand what to practice between visits.',
  },
  {
    name: 'Nora',
    quote: 'The plan felt organized, and I could see what the next step was after each appointment.',
  },
  {
    name: 'Ben',
    quote: 'The studio felt calm and focused. The team made the exercises easy to follow.',
  },
]

const IconTile = ({ icon: Icon }: { icon: LucideIcon }) => (
  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e8f0ec] text-[#507566] ring-1 ring-[#d6e2dc]">
    <Icon aria-hidden="true" size={22} strokeWidth={2} />
  </span>
)

export function RenewPhysicalTherapy() {
  return (
    <main className="brand-motion bg-[#f8f5ef] text-[#222b30]">
      <SubWebsiteNav
        brand="Renew Physical Therapy"
        links={navLinks}
        ctaLabel="Book Evaluation"
        ctaHref="#contact"
        collectionPath="/medical"
        className="border-b border-[#e7ded0] bg-[#fffdf8]/94 text-[#222b30] shadow-sm shadow-[#222b30]/5"
        brandClassName="text-[#507566]"
        linkClassName="text-[#6f756f] hover:text-[#507566]"
        ctaClassName="bg-[#222b30] text-white shadow-lg shadow-[#222b30]/15 hover:bg-[#33434a]"
        menuButtonClassName="border-[#e7ded0] text-[#507566] hover:bg-[#f1ede4]"
        mobilePanelClassName="border border-[#e7ded0] bg-[#fffdf8]"
      />

      <section className="relative isolate -mt-16 min-h-screen overflow-hidden bg-[#171f23] pt-32 text-white md:pt-36">
        <img
          src={imageUrl('medical/renewphysical/hero.png')}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(23,31,35,0.96)_0%,rgba(23,31,35,0.78)_48%,rgba(23,31,35,0.22)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-[#171f23] to-transparent" />

        <Container className="flex min-h-[calc(100vh-8rem)] flex-col justify-between gap-10 py-10">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-[#f0c9a7] ring-1 ring-white/16 backdrop-blur">
                <Activity aria-hidden="true" size={17} /> Recovery plans and progress proof
              </p>
              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[0.95] tracking-normal md:text-7xl lg:text-8xl">
                A clearer path from pain to progress.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 md:text-xl">
                Renew Physical Therapy helps patients understand what is limiting movement, follow a practical recovery
                plan, and track progress with a care team focused on steady improvement.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton href="#contact" size="lg" className="bg-[#d96d5c] text-white hover:bg-[#f0c9a7] hover:text-[#171f23]">
                  Book Evaluation
                </CTAButton>
                <CTAButton
                  href="#services"
                  variant="outline"
                  size="lg"
                  trailingIcon={<ArrowRight aria-hidden="true" size={20} />}
                  className="border-white/30 bg-white/8 text-white hover:bg-white/14 hover:text-white"
                >
                  Explore Services
                </CTAButton>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-[0.72fr_1fr] lg:items-end">
              <div className="grid gap-4">
                {trustPoints.map((point) => (
                  <div key={point} className="rounded-[1.25rem] bg-white/10 p-4 text-sm font-black text-white/84 ring-1 ring-white/14 backdrop-blur">
                    <CheckCircle aria-hidden="true" className="mb-2 text-[#f0c9a7]" size={19} />
                    {point}
                  </div>
                ))}
              </div>
              <div className="rounded-[1.75rem] border border-white/16 bg-white/12 p-5 shadow-2xl shadow-black/18 backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase text-[#f0c9a7]">Progress plan</p>
                    <p className="mt-1 text-2xl font-black leading-tight">One plan, visible next steps.</p>
                  </div>
                  <TrendingUp aria-hidden="true" className="shrink-0 text-[#d96d5c]" size={30} />
                </div>
                <div className="mt-5 grid gap-3">
                  {progressPlan.map((step, index) => (
                    <div key={step} className="grid grid-cols-[2.5rem_1fr] items-center gap-3 rounded-2xl bg-white/10 p-3 ring-1 ring-white/12">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#d96d5c] text-sm font-black text-white">
                        {index + 1}
                      </span>
                      <p className="text-sm font-black text-white">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4 border-t border-white/14 pt-6 md:grid-cols-4">
            {[
              ['Plan style', 'Structured, practical, trackable'],
              ['Studio feel', 'Movement space, not clinic waiting room'],
              ['Visit focus', 'Assess, practice, review'],
              ['Next step', 'Book an evaluation'],
            ].map(([label, value]) => (
              <div key={label}>
                <p className="text-xs font-black uppercase text-[#f0c9a7]">{label}</p>
                <p className="mt-1 text-sm font-bold text-white/74">{value}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="services" className="overflow-hidden bg-[#efe8dc] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#507566]">Services</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
                Support for movement, strength, and recovery.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#5d6667]">
              Services are grouped like a working therapy floor: assess the movement, practice the right skill, and
              review the plan before the next visit.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="relative min-h-[38rem] overflow-hidden rounded-[2rem] bg-[#222b30] shadow-2xl shadow-[#222b30]/12">
              <img
                src={imageUrl('medical/renewphysical/therapy.png')}
                alt="Physical therapy movement assessment"
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(34,43,48,0.88),rgba(34,43,48,0.18))]" />
              <div className="absolute left-5 right-5 top-5 grid gap-3 sm:grid-cols-3">
                {[
                  ['Assess', 'Movement and symptoms'],
                  ['Practice', 'Guided therapy work'],
                  ['Track', 'Next visit goals'],
                ].map(([label, text]) => (
                  <div key={label} className="rounded-2xl bg-white/12 p-4 text-white ring-1 ring-white/14 backdrop-blur">
                    <p className="text-xs font-black uppercase text-[#f0c9a7]">{label}</p>
                    <p className="mt-1 text-sm font-bold text-white/78">{text}</p>
                  </div>
                ))}
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white md:p-8">
                <p className="text-sm font-black uppercase text-[#f0c9a7]">Therapy service lab</p>
                <h3 className="mt-3 max-w-xl text-4xl font-black leading-tight md:text-5xl">
                  The right service starts with how you move today.
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-white/72">
                  Renew keeps services connected to a practical recovery plan so each visit has a purpose and a next
                  step.
                </p>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['Rehab practice', 'medical/renewphysical/rehab.png'],
                  ['Movement work', 'medical/renewphysical/movement.png'],
                ].map(([label, image]) => (
                  <div key={label} className="relative h-48 overflow-hidden rounded-[1.5rem] shadow-sm shadow-[#222b30]/7">
                    <img src={imageUrl(image)} alt="" className="h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#222b30]/76 to-transparent" />
                    <p className="absolute bottom-4 left-4 text-sm font-black uppercase text-white">{label}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-3">
                {services.map(({ title, text, icon }, index) => (
                  <article
                    key={title}
                    className="group grid gap-4 rounded-[1.35rem] bg-white p-4 shadow-sm shadow-[#222b30]/5 ring-1 ring-[#e7ded0] transition duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <span className="mt-1 text-xs font-black text-[#d96d5c]">0{index + 1}</span>
                      <IconTile icon={icon} />
                      <div>
                        <h3 className="text-xl font-black text-[#222b30]">{title}</h3>
                        <p className="mt-2 text-sm leading-6 text-[#5d6667]">{text}</p>
                        <a href="#contact" className="mt-3 inline-flex items-center gap-2 text-sm font-black text-[#507566] hover:text-[#222b30]">
                          Learn more <ArrowRight aria-hidden="true" size={17} />
                        </a>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="plans" className="bg-[#222b30] py-20 text-white md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#f0c9a7]">Recovery operating system</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
                A plan that shows what happens next.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-white/70">
              A structured board pairs therapy steps with simple progress signals, so the visit feels active,
              organized, and easy to follow without making medical promises.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="grid gap-5">
              <img
                src={imageUrl('medical/renewphysical/recovery.png')}
                alt="Guided therapy movement practice"
                className="h-72 w-full rounded-[1.75rem] object-cover shadow-xl shadow-black/20"
              />
              <div id="progress" className="rounded-[1.75rem] bg-white p-5 text-[#222b30] shadow-xl shadow-black/18">
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase text-[#507566]">Progress you can actually follow</p>
                    <h3 className="mt-1 text-2xl font-black">Weekly movement review</h3>
                  </div>
                  <TrendingUp aria-hidden="true" className="text-[#d96d5c]" size={28} />
                </div>
                <div className="grid gap-3">
                  {progressCards.map(([title, value, width]) => (
                    <div key={title}>
                      <div className="flex items-center justify-between gap-3">
                        <p className="text-sm font-black">{title}</p>
                        <p className="text-sm font-black text-[#507566]">{value}</p>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-[#e7ded0]">
                        <div className={`h-full rounded-full bg-[#d96d5c] ${width}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/14 bg-white/8 p-4 shadow-2xl shadow-black/18">
              {planSteps.map(([title, text], index) => (
                <article
                  key={title}
                  className="relative border-b border-white/12 p-5 last:border-b-0 md:grid md:grid-cols-[5rem_1fr] md:gap-5"
                >
                  <div className="mb-4 flex items-center gap-3 md:mb-0 md:block">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#d96d5c] text-sm font-black text-white">
                      {index + 1}
                    </span>
                    <span className="hidden h-full w-px bg-white/14 md:mx-auto md:mt-4 md:block" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/70">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#efe8dc] py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase text-[#507566]">Visit reasons</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
                Common reasons people start therapy.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5d6667]">
                These are starting points for a conversation with a therapist, not diagnoses or promised outcomes.
              </p>
              <div className="mt-8 grid gap-3">
                {visitReasons.map((reason, index) => (
                  <article key={reason} className="grid grid-cols-[3rem_1fr] items-center gap-4 rounded-2xl bg-white p-4 ring-1 ring-[#e7ded0]">
                    <span className="text-sm font-black text-[#d96d5c]">0{index + 1}</span>
                    <h3 className="text-lg font-black">{reason}</h3>
                  </article>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={imageUrl('medical/renewphysical/progress-tracking.png')}
                alt="Therapy progress notes and planning"
                className="h-[38rem] w-full rounded-[2rem] object-cover shadow-2xl shadow-[#222b30]/12"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.35rem] bg-[#222b30]/92 p-5 text-white shadow-xl shadow-black/18 backdrop-blur">
                <p className="text-xs font-black uppercase text-[#f0c9a7]">Careful language</p>
                <p className="mt-2 text-lg font-bold leading-7">
                  The goal is to understand movement needs and choose practical next steps with a licensed care team.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="therapists" className="bg-[#f8f5ef] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#507566]">Therapists</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
                Therapists who explain the plan clearly.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#5d6667]">
              Provider introductions stay focused on how the team supports movement, practice, and follow-through.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <img
              src={imageUrl('medical/renewphysical/team.png')}
              alt="Renew Physical Therapy care team"
              className="h-full min-h-[30rem] w-full rounded-[2rem] object-cover shadow-xl shadow-[#222b30]/9"
            />
            <div className="grid gap-0 overflow-hidden rounded-[2rem] border border-[#e7ded0] bg-white shadow-sm shadow-[#222b30]/5">
              {providers.map(({ name, role, bio }) => (
                <article key={name} className="border-b border-[#e7ded0] p-6 last:border-b-0">
                  <h3 className="text-2xl font-black">{name}</h3>
                  <p className="mt-1 text-sm font-black text-[#507566]">{role}</p>
                  <p className="mt-4 text-sm leading-7 text-[#5d6667]">{bio}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#eef5f1] py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <img
            src={imageUrl('medical/renewphysical/therapy-studio.png')}
            alt="Physical therapy studio with movement and recovery tools"
            className="h-[34rem] w-full rounded-[1.75rem] object-cover shadow-xl shadow-[#222b30]/9"
          />
          <div>
            <p className="text-sm font-black uppercase text-[#507566]">Studio environment</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              A calm studio built for focused recovery.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5d6667]">
              A clean, supportive space for assessments, guided movement, hands-on care, and practical recovery work.
            </p>
            <div className="mt-8 grid gap-3">
              {studioFeatures.map((feature) => (
                <div key={feature} className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-[#d6e2dc]">
                  <CheckCircle aria-hidden="true" className="text-[#507566]" size={20} />
                  <span className="font-black">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="visit-info" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase text-[#507566]">Visit info</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Practical details before your visit.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visitDetails.map(([title, text]) => (
              <article key={title} className="rounded-[1.35rem] border border-[#e7ded0] bg-white p-5 shadow-sm shadow-[#222b30]/5">
                <FileText aria-hidden="true" className="text-[#507566]" size={22} />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5d6667]">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#222b30] py-20 text-white md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#f0c9a7]">Appointment access</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Book the right therapy visit without the guesswork.
            </h2>
            <div className="mt-8">
              <CTAButton href="#contact" size="lg" className="bg-[#d96d5c] text-white hover:bg-[#f0c9a7] hover:text-[#222b30]">
                Book Evaluation
              </CTAButton>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {appointmentTypes.map((type) => (
              <div key={type} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/14">
                <Calendar aria-hidden="true" className="text-[#f0c9a7]" size={20} />
                <span className="font-bold">{type}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="reviews" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#507566]">Reviews</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Support that makes the plan easier to follow.
              </h2>
            </div>
            <img
              src={imageUrl('medical/renewphysical/appointment.png')}
              alt="Renew Physical Therapy appointment planning"
              className="h-56 w-full rounded-[1.5rem] object-cover shadow-xl shadow-[#222b30]/9"
            />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map(({ name, quote }) => (
              <blockquote key={name} className="rounded-[1.5rem] border border-[#e7ded0] bg-white p-7 shadow-sm shadow-[#222b30]/5">
                <p className="text-5xl font-black leading-none text-[#d96d5c]">&ldquo;</p>
                <p className="mt-2 text-lg font-bold leading-8">{quote}</p>
                <footer className="mt-6 text-sm font-black uppercase text-[#507566]">{name}</footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="relative isolate overflow-hidden bg-[#222b30] py-20 text-white md:py-28">
        <img
          src={imageUrl('medical/renewphysical/cta.png')}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(34,43,48,0.96),rgba(34,43,48,0.74))]" />
        <Container className="max-w-5xl">
          <p className="text-sm font-black uppercase text-[#f0c9a7]">Start here</p>
          <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Start with a recovery plan you can understand.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">
            Book an evaluation and leave with clear next steps, practical guidance, and a therapy plan built around your
            goals and daily movement.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="mailto:hello@renewpt.example" size="lg" className="bg-[#d96d5c] text-white hover:bg-[#f0c9a7] hover:text-[#222b30]">
              Book Evaluation
            </CTAButton>
            <CTAButton
              href="#services"
              variant="outline"
              size="lg"
              trailingIcon={<ArrowRight aria-hidden="true" size={20} />}
              className="border-white/34 bg-white/8 text-white hover:bg-white/14 hover:text-white"
            >
              View Services
            </CTAButton>
          </div>
          <p className="mt-6 text-sm leading-6 text-white/68">
            For urgent or severe symptoms, contact a licensed healthcare professional or appropriate emergency services.
          </p>
        </Container>
      </section>

      <footer className="bg-[#171f23] py-12 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr_1fr]">
            <div>
              <h2 className="text-2xl font-black">Renew Physical Therapy</h2>
              <p className="mt-3 max-w-md leading-7 text-white/68">
                Recovery plans and progress proof for patient-first movement care.
              </p>
            </div>
            <nav aria-label="Footer navigation" className="grid gap-2 text-sm font-bold text-white/72">
              {['Services', 'Recovery Plans', 'Progress', 'Therapists', 'Visit Info', 'Reviews', 'Contact', 'Privacy'].map((item) => (
                <a
                  key={item}
                  href={
                    item === 'Services'
                      ? '#services'
                      : item === 'Recovery Plans'
                        ? '#plans'
                        : item === 'Progress'
                          ? '#progress'
                          : item === 'Therapists'
                            ? '#therapists'
                            : item === 'Visit Info'
                              ? '#visit-info'
                              : item === 'Reviews'
                                ? '#reviews'
                                : '#contact'
                  }
                  className="hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="grid gap-3 text-sm text-white/72">
              <p className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-[#f0c9a7]" size={18} />
                <span>620 Renewal Way, Suite 140</span>
              </p>
              <p className="flex gap-3">
                <Clock aria-hidden="true" className="mt-0.5 shrink-0 text-[#f0c9a7]" size={18} />
                <span>Monday-Friday, 7 AM-6 PM</span>
              </p>
              <p className="flex gap-3">
                <Calendar aria-hidden="true" className="mt-0.5 shrink-0 text-[#f0c9a7]" size={18} />
                <span>Saturday, 9 AM-1 PM</span>
              </p>
              <p className="flex gap-3">
                <Phone aria-hidden="true" className="mt-0.5 shrink-0 text-[#f0c9a7]" size={18} />
                <a href="tel:5550174826" className="hover:text-white">(555) 017-4826</a>
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  )
}
