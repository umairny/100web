import {
  Baby,
  BookOpen,
  Calendar,
  CheckCircle,
  Heart,
  MapPin,
  Phone,
  Smile,
  Sparkles,
  Stethoscope,
  Syringe,
  Trophy,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container, CTAButton, SubWebsiteNav } from '../../components'
import { imageUrl } from '../../assets/images'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Visits', href: '#visits' },
  { label: 'Providers', href: '#providers' },
  { label: 'Parents', href: '#parents' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const trustPoints = ['Newborn to teen care', 'Same-week sick visits', 'Parent-friendly guidance']

const services: Array<{ title: string; text: string; icon: LucideIcon; image: string; color: string }> = [
  {
    title: 'Newborn Care',
    text: 'Gentle early visits with clear guidance for feeding, sleep, growth, and common parent questions.',
    icon: Baby,
    image: 'medical/BrightPath/newborn-care.png',
    color: 'bg-[#fff7d8]',
  },
  {
    title: 'Wellness Visits',
    text: 'Routine checkups that help families understand growth, milestones, prevention, and next steps.',
    icon: Heart,
    image: 'medical/BrightPath/wellness-visits.png',
    color: 'bg-[#e9f8ff]',
  },
  {
    title: 'Sick Visits',
    text: 'Same-week care for common childhood concerns with practical guidance parents can use at home.',
    icon: Stethoscope,
    image: 'medical/BrightPath/sick-visits.png',
    color: 'bg-[#fff0e9]',
  },
  {
    title: 'Vaccination Guidance',
    text: 'Friendly conversations about visit timing, records, and prevention without confusing medical jargon.',
    icon: Syringe,
    image: 'medical/BrightPath/vaccination-guidance.png',
    color: 'bg-[#eef0ff]',
  },
  {
    title: 'School & Sports Physicals',
    text: 'Practical visits for forms, activity readiness conversations, and parent questions.',
    icon: Trophy,
    image: 'medical/BrightPath/child-checkup.png',
    color: 'bg-[#eaf8ee]',
  },
  {
    title: 'Growth & Development Support',
    text: 'Clear check-ins around childhood routines, milestones, habits, and follow-up planning.',
    icon: Smile,
    image: 'medical/BrightPath/family-consultation.png',
    color: 'bg-[#fff4fb]',
  },
]

const steps = [
  {
    title: 'Choose the right visit',
    text: 'Parents can schedule wellness care, sick visits, follow-ups, or physicals with simple options.',
  },
  {
    title: 'Meet a caring provider',
    text: 'Your child is seen by a pediatric provider who listens, explains clearly, and answers parent questions.',
  },
  {
    title: 'Leave with clear next steps',
    text: 'Families receive practical guidance for care, follow-up, prevention, or next appointments.',
  },
]

const visitDetails = [
  ['What to bring', 'Bring forms, medication lists, questions, and any recent records you want the team to review.'],
  ['New patient visits', 'First visits include extra time to learn your child history, routines, and family priorities.'],
  ['Sick visit timing', 'Same-week options help families get guidance for common concerns when care should not wait.'],
  ['Follow-up care', 'Families leave with practical next steps and timing for future appointments when needed.'],
  ['Parent communication', 'The team keeps explanations clear so parents know what to watch for and what to do next.'],
  ['Emergency note', 'For urgent or life-threatening symptoms, call local emergency services.'],
]

const providers = [
  {
    name: 'Dr. Emily Carter',
    role: 'Pediatrician',
    bio: 'Dr. Carter brings a calm, family-centered approach to newborn visits, wellness care, and everyday pediatric questions.',
  },
  {
    name: 'Dr. Noah Williams',
    role: 'Pediatrician',
    bio: 'Dr. Williams focuses on clear explanations, supportive conversations, and practical next steps for busy families.',
  },
  {
    name: 'Priya Shah, NP',
    role: 'Pediatric Nurse Practitioner',
    bio: 'Priya helps children and parents feel heard during checkups, sick visits, follow-ups, and routine care planning.',
  },
]

const resources = [
  ['Preparing for a first visit', 'What to bring, how to share concerns, and how to help your child feel ready.'],
  ['Understanding wellness checkups', 'A simple overview of routine visits, growth conversations, and prevention.'],
  ['When to schedule a sick visit', 'Parent-friendly guidance on when a clinic visit may be the right next step.'],
  ['Building healthy routines', 'Ideas for sleep, movement, meals, and everyday family rhythms.'],
]

const reviews = [
  {
    name: 'Alyssa',
    quote: 'They were patient with my child and explained everything in a way I could actually use at home.',
  },
  {
    name: 'Jordan',
    quote: 'The visit felt organized from the first call, and I left knowing exactly what the next steps were.',
  },
  {
    name: 'Mina',
    quote: 'The clinic felt bright and welcoming, and the team made space for all of my parent questions.',
  },
]

const accessItems = ['Wellness visits', 'Sick care', 'New patient appointments', 'Follow-ups', 'School forms and physicals']

const IconBadge = ({ icon: Icon, className = '' }: { icon: LucideIcon; className?: string }) => (
  <span className={`inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${className || 'bg-[#e7f6ff] text-[#316a9f]'}`}>
    <Icon aria-hidden="true" size={22} strokeWidth={2.2} />
  </span>
)

export function BrightPathPediatrics() {
  return (
    <main className="brand-motion bg-[#fffaf0] text-[#263452]">
      <SubWebsiteNav
        brand="BrightPath Pediatrics"
        links={navLinks}
        ctaLabel="Book a Visit"
        ctaHref="#contact"
        collectionPath="/medical"
        className="mx-auto mt-3 max-w-[94rem] rounded-[1.75rem] border border-white/80 bg-[linear-gradient(90deg,rgba(255,242,184,0.94),rgba(255,255,255,0.94)_38%,rgba(220,216,255,0.92))] text-[#263452] shadow-xl shadow-[#263452]/10 ring-1 ring-[#f3ddc8]/80"
        brandClassName="rounded-full bg-white px-4 py-2 text-[#3f65a8] shadow-sm shadow-[#263452]/6 ring-1 ring-[#f3ddc8]"
        linkClassName="rounded-full px-3 py-2 text-[#68738c] transition hover:bg-white/80 hover:text-[#3f65a8]"
        activeLinkClassName="active bg-white text-[#3f65a8] shadow-sm shadow-[#263452]/6"
        ctaClassName="bg-[#5f5aa2] text-white shadow-lg shadow-[#5f5aa2]/20 hover:bg-[#3f65a8]"
        activeCtaClassName="active ring-2 ring-[#fff2b8] ring-offset-2"
        menuButtonClassName="border-white/80 bg-white/80 text-[#5f5aa2] shadow-sm hover:bg-[#fff2b8]"
        mobilePanelClassName="border border-[#f3ddc8] bg-[#fffaf0]"
      />

      <section className="relative isolate overflow-hidden pt-28 md:pt-32">
        <img
          src={imageUrl('medical/BrightPath/bg.png')}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,#fffaf0_0%,rgba(231,246,255,0.96)_44%,rgba(255,239,245,0.9)_100%)]" />
        <div className="absolute left-[-6rem] top-24 -z-10 h-72 w-72 rounded-full bg-[#fff2b8]/70 blur-3xl" />
        <div className="absolute bottom-10 right-[-5rem] -z-10 h-80 w-80 rounded-full bg-[#dcd8ff]/65 blur-3xl" />
        <Container className="pb-20 pt-10 lg:pb-24">
          <div className="grid gap-10 rounded-[2.5rem] border border-white/70 bg-white/58 p-4 shadow-2xl shadow-[#263452]/8 backdrop-blur md:p-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="px-2 py-6 md:px-6 lg:py-10">
              <p className="inline-flex items-center gap-2 rounded-full bg-[#fff2b8] px-4 py-2 text-sm font-black text-[#765b10] shadow-sm ring-1 ring-[#f0d986]">
                <Sparkles aria-hidden="true" size={17} /> Family-first pediatric care
              </p>
              <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] tracking-normal text-[#263452] md:text-7xl">
                Pediatric care that helps families feel prepared.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5f6b83] md:text-xl">
                From newborn visits to sick care and wellness checkups, BrightPath Pediatrics gives parents clear
                guidance, practical next steps, and a caring team they can trust.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton href="#contact" size="lg" className="bg-[#3f65a8] text-white hover:bg-[#304f86]">
                  Book a Visit
                </CTAButton>
                <CTAButton
                  href="#services"
                  variant="outline"
                  size="lg"
                  className="border-[#f0cfa5] bg-white text-[#3f65a8] hover:border-[#f0b869] hover:bg-[#fff4dc] hover:text-[#263452]"
                >
                  Explore Services
                </CTAButton>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                {trustPoints.map((point) => (
                  <div key={point} className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-3 text-sm font-black text-[#4f5e77] shadow-sm ring-1 ring-[#f3ddc8]">
                    <CheckCircle aria-hidden="true" className="text-[#65a98a]" size={18} />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="relative min-h-[34rem] overflow-hidden rounded-[2rem] bg-[#e9f8ff] p-3">
              <div className="absolute left-5 top-5 z-10 rounded-full bg-white px-4 py-2 text-xs font-black uppercase text-[#3f65a8] shadow-lg shadow-[#263452]/10">
                New families welcome
              </div>
              <img
                src={imageUrl('medical/BrightPath/hero.png')}
                alt="A warm pediatric visit with a parent and child"
                className="h-[34rem] w-full rounded-[1.45rem] object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 grid gap-3 sm:grid-cols-[1fr_0.82fr]">
                <div className="rounded-3xl bg-white/94 p-5 shadow-xl shadow-[#263452]/12 backdrop-blur">
                  <p className="text-sm font-black uppercase text-[#b47243]">Parent note</p>
                  <p className="mt-2 text-2xl font-black leading-tight text-[#263452]">Simple visit options for real family schedules.</p>
                </div>
                <div className="rounded-3xl bg-[#dcd8ff]/95 p-5 shadow-xl shadow-[#263452]/10 backdrop-blur">
                  <p className="text-sm font-black uppercase text-[#5f5aa2]">Next step</p>
                  <p className="mt-2 text-lg font-black leading-tight text-[#263452]">Questions welcomed before and after the visit.</p>
                </div>
              </div>
              <div className="absolute -right-6 top-24 hidden rotate-3 rounded-[1.5rem] bg-[#fff2b8] p-3 shadow-xl shadow-[#263452]/12 sm:block">
                <img
                  src={imageUrl('medical/BrightPath/clinic-play-area.png')}
                  alt="A child-friendly clinic waiting area"
                  className="h-32 w-40 rounded-[1rem] object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase text-[#3f65a8]">Services</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#263452] md:text-5xl">Care for every stage of childhood.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, text, icon: Icon, image, color }) => (
              <article key={title} className={`overflow-hidden rounded-[1.75rem] ${color} shadow-sm shadow-[#263452]/6 ring-1 ring-[#f3ddc8]`}>
                <img src={imageUrl(image)} alt="" className="h-48 w-full object-cover" />
                <div className="p-6">
                  <IconBadge icon={Icon} className="bg-white text-[#3f65a8]" />
                  <h3 className="mt-5 text-2xl font-black text-[#263452]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f6b83]">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="visits" className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="absolute left-[-7rem] top-16 h-72 w-72 rounded-full bg-[#fff2b8]/55 blur-3xl" />
        <div className="absolute bottom-8 right-[-6rem] h-80 w-80 rounded-full bg-[#dcd8ff]/45 blur-3xl" />
        <Container>
          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="relative">
              <p className="text-sm font-black uppercase text-[#3f65a8]">Visit made simple</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#263452] md:text-5xl">A calmer appointment path for parents.</h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#5f6b83]">
                Booking should feel clear before families arrive. BrightPath keeps the visit type, timing, and follow-up
                expectations easy to understand.
              </p>
              <div className="relative mt-8 overflow-hidden rounded-[2rem] bg-[#fff7d8] p-3 shadow-xl shadow-[#263452]/9 ring-1 ring-[#f3ddc8]">
                <img
                  src={imageUrl('medical/BrightPath/appointment.png')}
                  alt="A simple pediatric appointment access moment"
                  className="h-[25rem] w-full rounded-[1.45rem] object-cover"
                />
                <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/94 p-5 shadow-xl shadow-[#263452]/12 backdrop-blur sm:right-auto sm:max-w-sm">
                  <p className="text-sm font-black uppercase text-[#d58b55]">Today&apos;s path</p>
                  <p className="mt-2 text-2xl font-black leading-tight text-[#263452]">Pick a visit, meet the team, leave with next steps.</p>
                </div>
              </div>
            </div>

            <div className="relative rounded-[2rem] bg-[#f7fbff] p-4 shadow-sm ring-1 ring-[#d6e8f5] md:p-5">
              <div className="absolute left-10 top-12 hidden h-[calc(100%-6rem)] w-1 rounded-full bg-[#d6e8f5] lg:block" />
              {steps.map(({ title, text }, index) => (
                <article key={title} className="relative mb-4 rounded-3xl bg-white p-5 shadow-sm shadow-[#263452]/5 ring-1 ring-[#e3edf7] last:mb-0 sm:p-6">
                  <div className="flex gap-4">
                    <span className="relative z-10 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#3f65a8] text-lg font-black text-white shadow-lg shadow-[#3f65a8]/20">
                      {index + 1}
                    </span>
                    <div>
                      <p className="text-sm font-black uppercase text-[#d58b55]">Step {index + 1}</p>
                      <h3 className="mt-2 text-2xl font-black text-[#263452]">{title}</h3>
                      <p className="mt-3 leading-7 text-[#5f6b83]">{text}</p>
                    </div>
                  </div>
                </article>
              ))}
              <div className="mt-5 rounded-3xl bg-[#fff2d9] p-5 ring-1 ring-[#f3ddc8]">
                <p className="text-sm font-black uppercase text-[#b47243]">Emergency note</p>
                <p className="mt-2 text-sm leading-6 text-[#5f6b83]">
                  For urgent or life-threatening symptoms, call local emergency services.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase text-[#3f65a8]">Practical details</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#263452] md:text-5xl">Parent questions answered up front.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {visitDetails.map(([title, text]) => (
              <article key={title} className="rounded-3xl bg-white p-6 shadow-sm shadow-[#263452]/5 ring-1 ring-[#f3ddc8]">
                <h3 className="text-xl font-black text-[#263452]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5f6b83]">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="providers" className="bg-[#eaf6ff] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#3f65a8]">Providers</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#263452] md:text-5xl">A pediatric team families can trust.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#5f6b83]">
              Warm introductions help parents understand who will listen, explain, and guide care.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <img
              src={imageUrl('medical/BrightPath/pediatric-team.png')}
              alt="BrightPath pediatric team in a friendly clinic setting"
              className="h-full min-h-[28rem] w-full rounded-[2rem] object-cover shadow-xl shadow-[#263452]/9"
            />
            <div className="grid gap-5">
              {providers.map(({ name, role, bio }) => (
                <article key={name} className="rounded-3xl bg-white p-6 shadow-sm shadow-[#263452]/5 ring-1 ring-[#d6e8f5]">
                  <h3 className="text-2xl font-black text-[#263452]">{name}</h3>
                  <p className="mt-1 text-sm font-black text-[#3f65a8]">{role}</p>
                  <p className="mt-4 text-sm leading-7 text-[#5f6b83]">{bio}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="parents" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase text-[#3f65a8]">Parent resources</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#263452] md:text-5xl">Helpful guidance between appointments.</h2>
              <img
                src={imageUrl('medical/BrightPath/parent-resources.png')}
                alt="Parent resources for pediatric care"
                className="mt-8 h-80 w-full rounded-[2rem] object-cover shadow-xl shadow-[#263452]/9"
              />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {resources.map(([title, text]) => (
                <article key={title} className="rounded-3xl bg-white p-6 shadow-sm shadow-[#263452]/5 ring-1 ring-[#f3ddc8]">
                  <BookOpen aria-hidden="true" className="text-[#d58b55]" size={26} />
                  <h3 className="mt-5 text-xl font-black text-[#263452]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f6b83]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <img src={imageUrl('medical/BrightPath/clinic-play-area.png')} alt="Child-friendly waiting area" className="h-80 w-full rounded-[2rem] object-cover shadow-xl shadow-[#263452]/9" />
            <img src={imageUrl('medical/BrightPath/family-consultation.png')} alt="Parent consultation moment" className="h-80 w-full rounded-[2rem] object-cover shadow-xl shadow-[#263452]/9 sm:mt-10" />
          </div>
          <div>
            <p className="text-sm font-black uppercase text-[#3f65a8]">Clinic environment</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#263452] md:text-5xl">A bright space designed for kids and parents.</h2>
            <p className="mt-5 text-lg leading-8 text-[#5f6b83]">
              The clinic environment is welcoming for children and organized for parents, with friendly spaces that help
              families feel comfortable and informed.
            </p>
          </div>
        </Container>
      </section>

      <section id="reviews" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase text-[#3f65a8]">Parent reviews</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#263452] md:text-5xl">Calm visits families remember.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map(({ name, quote }) => (
              <blockquote key={name} className="rounded-3xl bg-white p-7 shadow-sm shadow-[#263452]/5 ring-1 ring-[#f3ddc8]">
                <p className="text-5xl font-black leading-none text-[#d58b55]">&ldquo;</p>
                <p className="mt-2 text-lg font-bold leading-8 text-[#263452]">{quote}</p>
                <footer className="mt-6 text-sm font-black uppercase text-[#3f65a8]">{name}</footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#5f5aa2] py-20 text-white md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#fff2b8]">Appointment access</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Simple appointments for busy families.</h2>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="#contact" size="lg" className="bg-[#fff2b8] text-[#263452] hover:bg-white">
                Book a Visit
              </CTAButton>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {accessItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/12 p-4 ring-1 ring-white/16">
                <CheckCircle aria-hidden="true" className="text-[#fff2b8]" size={20} />
                <span className="font-bold">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="relative isolate overflow-hidden bg-[#263452] py-20 text-white md:py-28">
        <img
          src={imageUrl('medical/BrightPath/cta.png')}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(38,52,82,0.96),rgba(38,52,82,0.74))]" />
        <Container className="max-w-5xl">
          <p className="text-sm font-black uppercase text-[#fff2b8]">Start care</p>
          <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Start your child&apos;s care with a team that keeps things clear.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">
            Book a visit with BrightPath Pediatrics and get friendly care, practical answers, and guidance made for real
            family life.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="mailto:hello@brightpath.example" size="lg" className="bg-[#fff2b8] text-[#263452] hover:bg-white">
              Book a Visit
            </CTAButton>
            <CTAButton
              href="tel:5550193267"
              variant="outline"
              size="lg"
              leadingIcon={<Phone aria-hidden="true" size={20} />}
              className="border-white/34 bg-white/8 text-white hover:bg-white/14 hover:text-white"
            >
              Call the Clinic
            </CTAButton>
          </div>
          <p className="mt-6 text-sm leading-6 text-white/68">
            For urgent or life-threatening symptoms, call local emergency services.
          </p>
        </Container>
      </section>

      <footer className="bg-[#172139] py-12 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <h2 className="text-2xl font-black">BrightPath Pediatrics</h2>
              <p className="mt-3 max-w-md leading-7 text-white/68">
                Family-first pediatric care for newborns, children, and teens.
              </p>
            </div>
            <nav aria-label="Footer navigation" className="grid gap-2 text-sm font-bold text-white/72">
              {['Services', 'Visits', 'Providers', 'Parent Resources', 'Contact', 'Privacy'].map((item) => (
                <a key={item} href={item === 'Services' ? '#services' : item === 'Visits' ? '#visits' : item === 'Providers' ? '#providers' : item === 'Parent Resources' ? '#parents' : '#contact'} className="hover:text-white">
                  {item}
                </a>
              ))}
            </nav>
            <div className="grid gap-3 text-sm text-white/72">
              <p className="flex gap-3">
                <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-[#fff2b8]" size={18} />
                <span>245 Brightpath Lane, Suite 120</span>
              </p>
              <p className="flex gap-3">
                <Calendar aria-hidden="true" className="mt-0.5 shrink-0 text-[#fff2b8]" size={18} />
                <span>Monday-Friday, 8 AM-5 PM</span>
              </p>
              <p className="flex gap-3">
                <Users aria-hidden="true" className="mt-0.5 shrink-0 text-[#fff2b8]" size={18} />
                <span>Saturday, 9 AM-1 PM</span>
              </p>
              <p className="flex gap-3">
                <Phone aria-hidden="true" className="mt-0.5 shrink-0 text-[#fff2b8]" size={18} />
                <a href="tel:5550193267" className="hover:text-white">(555) 019-3267</a>
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  )
}
