import {
  ArrowRight,
  Baby,
  CalendarCheck,
  CheckCircle,
  Clock,
  FileText,
  Flower2,
  HeartPulse,
  Leaf,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Stethoscope,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container, CTAButton, SubWebsiteNav } from '../../components'
import { imageUrl } from '../../assets/images'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Visit Paths', href: '#visit-paths' },
  { label: 'Resources', href: '#resources' },
  { label: 'Providers', href: '#providers' },
  { label: 'Telehealth', href: '#telehealth' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const trustPoints = ['Supportive visit guidance', 'In-person and virtual options', 'Clear patient resources']

const services: Array<{ title: string; text: string; icon: LucideIcon; tone: string }> = [
  {
    title: 'Preventive Visits',
    text: 'Routine care conversations, screening guidance, and practical next-step planning.',
    icon: CalendarCheck,
    tone: 'bg-[#fff1f4]',
  },
  {
    title: 'Wellness Exams',
    text: 'Supportive visits focused on questions, comfort, history, and ongoing care needs.',
    icon: Stethoscope,
    tone: 'bg-[#f1f6ea]',
  },
  {
    title: 'Reproductive Health Guidance',
    text: 'Plain-language guidance for reproductive health questions, options, and follow-up planning.',
    icon: Flower2,
    tone: 'bg-[#f5efff]',
  },
  {
    title: 'Hormonal Health Conversations',
    text: 'Thoughtful conversations about changes, symptoms, questions, and care planning.',
    icon: HeartPulse,
    tone: 'bg-[#fff7e8]',
  },
  {
    title: 'Pregnancy & Postpartum Support',
    text: 'Supportive visit paths for pregnancy questions, postpartum needs, and practical resources.',
    icon: Baby,
    tone: 'bg-[#f9edf1]',
  },
  {
    title: 'Follow-Up Care',
    text: 'Review results, clarify next steps, and continue care conversations with confidence.',
    icon: MessageCircle,
    tone: 'bg-[#edf6f3]',
  },
]

const visitPaths = [
  ['New patient visit', 'For patients beginning care and looking for clear first steps.'],
  ['Preventive care', 'For routine wellness visits, screenings, and ongoing health planning.'],
  ['Specific concern', 'For questions, symptoms, or changes you want to discuss with a provider.'],
  ['Follow-up support', 'For reviewing results, next steps, care plans, or ongoing questions.'],
]

const resources = [
  'Preparing for your first appointment',
  'Questions to ask your provider',
  'Understanding follow-up steps',
  'Telehealth visit preparation',
  'Forms and practical details',
  'When to call the clinic',
]

const providers = [
  {
    name: 'Dr. Elena Brooks',
    role: "Women's Health Physician",
    bio: 'Elena helps patients understand care options, prepare for appointments, and leave with practical next steps.',
  },
  {
    name: 'Dr. Priya Shah',
    role: 'Preventive Care',
    bio: 'Priya focuses on preventive visits, patient questions, screening conversations, and ongoing care planning.',
  },
  {
    name: 'Maya Collins, NP',
    role: 'Patient Support',
    bio: 'Maya supports visits with warm guidance, resource review, and clear follow-up conversations.',
  },
]

const environmentPoints = ['Private visit rooms', 'Clear appointment guidance', 'Supportive resource access']

const visitDetails = [
  ['What to bring', 'Bring photo ID, payment details, current medications, and questions you want to discuss.'],
  ['First visit details', 'Your first visit reviews health history, care goals, practical questions, and next steps.'],
  ['Preventive visits', 'Preventive care may include wellness conversations, screenings, and ongoing health planning.'],
  ['Follow-up appointments', 'Follow-ups can review results, care plans, questions, or provider recommendations.'],
  ['Telehealth visits', 'Virtual visits can support follow-up conversations, resource review, and care-plan questions.'],
  ['Payment and plan questions', 'Contact the clinic to review payment and plan details before your visit.'],
]

const appointmentTypes = [
  'New patient visit',
  'Preventive visit',
  'Specific concern',
  'Telehealth follow-up',
  'Resource question',
]

const reviews = [
  {
    name: 'Leah',
    quote: 'The visit felt calm, and I understood what to expect before and after the appointment.',
  },
  {
    name: 'Camila',
    quote: 'The resources were easy to follow, and the provider explained the next steps clearly.',
  },
  {
    name: 'Avery',
    quote: 'I appreciated the warm tone and the way the appointment path was laid out.',
  },
]

const SoftIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#8a5570] shadow-sm shadow-[#7a405a]/8 ring-1 ring-[#ead5dc]">
    <Icon aria-hidden="true" size={22} strokeWidth={1.9} />
  </span>
)

export function WillowWomensHealth() {
  return (
    <main className="bg-[#fff8f2] text-[#332a30]">
      <SubWebsiteNav
        brand="Willow Women's Health"
        links={navLinks}
        ctaLabel="Book a Visit"
        ctaHref="#contact"
        collectionPath="/medical"
        className="mx-auto mt-3 max-w-[94rem] rounded-full border border-white/80 bg-[#fffaf5]/92 text-[#332a30] shadow-xl shadow-[#7a405a]/10 ring-1 ring-[#ead5dc]"
        brandClassName="font-serif text-[#7a405a]"
        linkClassName="rounded-full px-3 py-2 text-[#7d6b72] transition hover:bg-[#f9edf1] hover:text-[#7a405a]"
        activeLinkClassName="active bg-[#f9edf1] text-[#7a405a]"
        ctaClassName="bg-[#7a405a] text-white shadow-lg shadow-[#7a405a]/18 hover:bg-[#6b8a70]"
        activeCtaClassName="active ring-2 ring-[#eec6d2] ring-offset-2"
        menuButtonClassName="border-[#ead5dc] bg-[#fff1f4] text-[#7a405a] hover:bg-[#f9edf1]"
        mobilePanelClassName="border border-[#ead5dc] bg-[#fffaf5]"
      />

      <section className="relative isolate -mt-16 overflow-hidden bg-[#fff8f2] pt-32 md:pt-36">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_14%_22%,rgba(238,198,210,0.55),transparent_30%),radial-gradient(circle_at_84%_12%,rgba(190,213,184,0.48),transparent_28%),linear-gradient(135deg,#fffaf5_0%,#faedf0_55%,#eef5ee_100%)]" />
        <div className="absolute -right-24 top-24 -z-10 h-72 w-72 rounded-full border-[42px] border-[#eec6d2]/34" />
        <div className="absolute -left-24 bottom-12 -z-10 h-80 w-80 rounded-full border-[36px] border-[#bed5b8]/34" />
        <Container className="grid min-h-[calc(100vh-7rem)] gap-10 py-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -left-7 top-10 h-32 w-32 rounded-full bg-[#f4d7df]/80 blur-sm" />
            <div className="absolute -right-4 bottom-10 h-40 w-40 rounded-full bg-[#dcebd8]/90 blur-sm" />
            <img
              src={imageUrl('medical/willow/hero.png')}
              alt="Warm women's health consultation"
              className="relative h-[34rem] w-full rounded-[3rem] object-cover shadow-2xl shadow-[#7a405a]/14 md:h-[40rem]"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-[2rem] border border-white/70 bg-white/90 p-5 shadow-2xl shadow-[#7a405a]/12 backdrop-blur md:right-auto md:w-80">
              <p className="text-xs font-black uppercase text-[#a7793d]">Visit path</p>
              <div className="mt-4 grid gap-3">
                {['Choose care', 'Prepare', 'Meet provider', 'Follow up'].map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f9edf1] text-sm font-black text-[#7a405a]">
                      {index + 1}
                    </span>
                    <span className="font-bold text-[#3b2632]">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 rounded-[2.5rem] border border-white/70 bg-white/58 p-6 shadow-2xl shadow-[#7a405a]/8 backdrop-blur md:p-8 lg:order-2 lg:text-right">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#ead5dc] bg-white/70 px-4 py-2 text-sm font-black text-[#7a405a] shadow-sm shadow-[#7a405a]/5">
              <Leaf aria-hidden="true" size={17} /> Supportive visit paths and patient resources
            </p>
            <h1 className="mt-6 font-serif text-5xl leading-[1.02] tracking-normal text-[#3b2632] md:text-7xl">
              Supportive care with clearer visit paths.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#675b61] md:ml-auto md:max-w-2xl md:text-xl">
              Willow Women's Health helps patients understand services, prepare for appointments, access helpful
              resources, and feel supported through each step of care.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:justify-end">
              <CTAButton href="#contact" size="lg" className="rounded-full bg-[#7a405a] text-white hover:bg-[#6b8a70]">
                Book a Visit
              </CTAButton>
              <CTAButton
                href="#resources"
                variant="outline"
                size="lg"
                trailingIcon={<ArrowRight aria-hidden="true" size={20} />}
                className="rounded-full border-[#cfa9b5] bg-white/70 text-[#7a405a] hover:bg-[#7a405a] hover:text-white"
              >
                Explore Resources
              </CTAButton>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-[1.5rem] border border-[#ead5dc] bg-white/70 p-4 text-sm font-bold text-[#675b61] shadow-sm shadow-[#7a405a]/5 backdrop-blur">
                  <CheckCircle aria-hidden="true" className="mb-2 text-[#6b8a70] lg:ml-auto" size={18} />
                  {point}
                </div>
              ))}
            </div>
          </div>
        </Container>
        <div className="h-14 bg-[#fff8f2] [clip-path:ellipse(76%_72%_at_50%_100%)]" />
      </section>

      <section id="services" className="bg-[#fff8f2] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#7a405a]">Services</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-[#3b2632] md:text-6xl">
                Care for every stage and season.
              </h2>
            </div>
            <img
              src={imageUrl('medical/willow/preventive-care.png')}
              alt="Preventive women's health care conversation"
              className="h-60 w-full rounded-[2rem] object-cover shadow-xl shadow-[#7a405a]/10"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ title, text, icon, tone }) => (
              <article key={title} className={`rounded-[2rem] border border-white p-6 shadow-sm shadow-[#7a405a]/6 ring-1 ring-[#ead5dc] ${tone}`}>
                <SoftIcon icon={icon} />
                <h3 className="mt-6 text-2xl font-black text-[#3b2632]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#675b61]">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="visit-paths" className="relative overflow-hidden bg-[#f9edf1] py-20 md:py-28">
        <div className="absolute inset-x-0 top-0 h-16 bg-[#fff8f2] [clip-path:ellipse(72%_76%_at_50%_0%)]" />
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase text-[#7a405a]">Visit paths</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-[#3b2632] md:text-6xl">
                Know where to start.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#675b61]">
                A soft visit-path system helps patients choose the right entry point before booking.
              </p>
              <img
                src={imageUrl('medical/willow/visit-paths.png')}
                alt="Women's health visit path planning"
                className="mt-8 h-80 w-full rounded-[2.5rem] object-cover shadow-xl shadow-[#7a405a]/10"
              />
            </div>
            <div className="relative grid gap-4">
              <div className="absolute left-8 top-8 hidden h-[calc(100%-4rem)] w-1 rounded-full bg-[#e7c0cc] md:block" />
              {visitPaths.map(([title, text], index) => (
                <article key={title} className="relative rounded-[2rem] border border-white bg-white/76 p-6 shadow-sm shadow-[#7a405a]/6 backdrop-blur">
                  <span className="absolute -left-1 top-6 hidden h-5 w-5 rounded-full border-4 border-[#f9edf1] bg-[#7a405a] md:block" />
                  <p className="text-xs font-black uppercase text-[#a7793d]">Path {index + 1}</p>
                  <h3 className="mt-2 text-2xl font-black text-[#3b2632]">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#675b61]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="resources" className="bg-[#fffaf5] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#7a405a]">Patient resources</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-[#3b2632] md:text-5xl">
                Helpful resources before and after your visit.
              </h2>
            </div>
            <img
              src={imageUrl('medical/willow/patient-resources.png')}
              alt="Patient resources and appointment notes"
              className="h-56 w-full rounded-[2rem] object-cover shadow-xl shadow-[#7a405a]/10"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <article key={resource} className="rounded-[1.75rem] border border-[#ead5dc] bg-white p-6 shadow-sm shadow-[#7a405a]/5">
                <FileText aria-hidden="true" className="text-[#7a405a]" size={24} />
                <h3 className="mt-5 text-xl font-black text-[#3b2632]">{resource}</h3>
                <p className="mt-3 text-sm leading-7 text-[#675b61]">
                  Resource {index + 1} keeps appointment preparation, questions, and follow-up details easy to scan.
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="providers" className="bg-[#eef5ee] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#6b8a70]">Providers</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-[#3b2632] md:text-6xl">
                A team that listens and explains clearly.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#675b61]">
              Provider cards stay warm and credible, with simple bios focused on listening, guidance, and practical
              visit support.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <img
              src={imageUrl('medical/willow/team.png')}
              alt="Willow Women's Health care team"
              className="h-full min-h-[32rem] w-full rounded-[2.5rem] object-cover shadow-xl shadow-[#7a405a]/10"
            />
            <div className="grid gap-4">
              {providers.map(({ name, role, bio }) => (
                <article key={name} className="rounded-[1.75rem] border border-[#d8e4d4] bg-white/82 p-6 shadow-sm shadow-[#6b8a70]/6">
                  <Users aria-hidden="true" className="text-[#6b8a70]" size={24} />
                  <h3 className="mt-5 text-2xl font-black text-[#3b2632]">{name}</h3>
                  <p className="mt-1 text-sm font-black text-[#7a405a]">{role}</p>
                  <p className="mt-4 text-sm leading-7 text-[#675b61]">{bio}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#fff8f2] py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <img
            src={imageUrl('medical/willow/room.png')}
            alt="Warm women's health clinic room"
            className="h-[34rem] w-full rounded-[2.5rem] object-cover shadow-xl shadow-[#7a405a]/10"
          />
          <div>
            <p className="text-sm font-black uppercase text-[#7a405a]">Clinic environment</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#3b2632] md:text-5xl">
              A calm space designed around comfort.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#675b61]">
              A warm, private clinic environment for conversations, checkups, care planning, and follow-up support.
            </p>
            <div className="mt-8 grid gap-3">
              {environmentPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 rounded-2xl border border-[#ead5dc] bg-white p-4">
                  <CheckCircle aria-hidden="true" className="text-[#6b8a70]" size={20} />
                  <span className="font-black text-[#3b2632]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="telehealth" className="bg-[#3b2632] py-20 text-white md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#eec6d2]">Telehealth</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-6xl">
              Support that can start from home.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Virtual appointment options can support follow-up conversations, questions about care plans, resource
              review, and convenient next-step guidance.
            </p>
          </div>
          <div className="rounded-[2.5rem] border border-white/14 bg-white/10 p-4 shadow-2xl shadow-black/18">
            <img
              src={imageUrl('medical/willow/telehealth-support.png')}
              alt="Telehealth support for women's health"
              className="h-80 w-full rounded-[2rem] object-cover"
            />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {['Virtual appointment options', 'Follow-up conversations', 'Questions about care plans', 'Resource review'].map((item) => (
                <div key={item} className="rounded-2xl bg-white/10 p-4 text-sm font-bold text-white/82 ring-1 ring-white/12">
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#fffaf5] py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase text-[#7a405a]">Visit details</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#3b2632] md:text-5xl">
              Practical details before your visit.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visitDetails.map(([title, text]) => (
              <article key={title} className="rounded-[1.75rem] border border-[#ead5dc] bg-white p-6">
                <Sparkles aria-hidden="true" className="text-[#7a405a]" size={22} />
                <h3 className="mt-5 text-xl font-black text-[#3b2632]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#675b61]">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f9edf1] py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#7a405a]">Appointment access</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#3b2632] md:text-5xl">
              Choose the visit path that fits your needs.
            </h2>
            <img
              src={imageUrl('medical/willow/appointment.png')}
              alt="Willow appointment access"
              className="mt-7 h-56 w-full rounded-[2rem] object-cover shadow-xl shadow-[#7a405a]/10"
            />
            <div className="mt-8">
              <CTAButton href="#contact" size="lg" className="rounded-full bg-[#7a405a] text-white hover:bg-[#6b8a70]">
                Book a Visit
              </CTAButton>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {appointmentTypes.map((type) => (
              <div key={type} className="flex items-center gap-3 rounded-2xl border border-[#ead5dc] bg-white/80 p-4">
                <CalendarCheck aria-hidden="true" className="text-[#7a405a]" size={20} />
                <span className="font-bold text-[#3b2632]">{type}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="reviews" className="bg-[#fff8f2] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#7a405a]">Reviews</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-[#3b2632] md:text-5xl">
                Patients notice when care feels clear and prepared.
              </h2>
            </div>
            <img
              src={imageUrl('medical/willow/supportive-consultation.png')}
              alt="Supportive women's health consultation"
              className="h-56 w-full rounded-[2rem] object-cover shadow-xl shadow-[#7a405a]/10"
            />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map(({ name, quote }) => (
              <blockquote key={name} className="rounded-[2rem] border border-[#ead5dc] bg-white p-7 shadow-sm shadow-[#7a405a]/5">
                <p className="font-serif text-5xl leading-none text-[#c77d96]">&ldquo;</p>
                <p className="mt-2 text-lg font-bold leading-8 text-[#3b2632]">{quote}</p>
                <footer className="mt-6 text-sm font-black uppercase text-[#6b8a70]">{name}</footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="relative isolate overflow-hidden bg-[#3b2632] py-20 text-white md:py-28">
        <img
          src={imageUrl('medical/willow/cta.png')}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(59,38,50,0.96),rgba(59,38,50,0.7))]" />
        <Container className="max-w-5xl">
          <p className="text-sm font-black uppercase text-[#eec6d2]">Start here</p>
          <h2 className="mt-3 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            Start with care that helps you feel prepared.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/74">
            Book a visit with Willow Women's Health and get supportive guidance, practical resources, and clearer next
            steps for your care.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="mailto:hello@willowwomens.example" size="lg" className="rounded-full bg-[#eec6d2] text-[#3b2632] hover:bg-white">
              Book a Visit
            </CTAButton>
            <CTAButton
              href="#resources"
              variant="outline"
              size="lg"
              trailingIcon={<ArrowRight aria-hidden="true" size={20} />}
              className="rounded-full border-white/30 bg-white/8 text-white hover:bg-white/14 hover:text-white"
            >
              View Resources
            </CTAButton>
          </div>
          <p className="mt-6 text-sm leading-6 text-white/70">
            If you are experiencing a life-threatening emergency, call local emergency services immediately.
          </p>
        </Container>
      </section>

      <footer className="bg-[#281a23] py-12 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <h2 className="font-serif text-3xl">Willow Women's Health</h2>
              <p className="mt-3 max-w-md leading-7 text-white/68">
                Supportive visit paths and patient resources for patient-first women's care.
              </p>
              <p className="mt-5 text-sm leading-6 text-white/58">
                If you are experiencing a life-threatening emergency, call local emergency services immediately.
              </p>
            </div>
            <nav aria-label="Footer navigation" className="grid gap-2 text-sm font-bold text-white/72">
              {['Services', 'Visit Paths', 'Resources', 'Providers', 'Telehealth', 'Reviews', 'Contact', 'Privacy'].map((item) => (
                <a
                  key={item}
                  href={
                    item === 'Services'
                      ? '#services'
                      : item === 'Visit Paths'
                        ? '#visit-paths'
                        : item === 'Resources'
                          ? '#resources'
                          : item === 'Providers'
                            ? '#providers'
                            : item === 'Telehealth'
                              ? '#telehealth'
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
                <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-[#eec6d2]" size={18} />
                <span>450 Willow Garden Avenue, Suite 180</span>
              </p>
              <p className="flex gap-3">
                <Clock aria-hidden="true" className="mt-0.5 shrink-0 text-[#eec6d2]" size={18} />
                <span>Monday-Friday, 8 AM-6 PM</span>
              </p>
              <p className="flex gap-3">
                <CalendarCheck aria-hidden="true" className="mt-0.5 shrink-0 text-[#eec6d2]" size={18} />
                <span>Saturday, 9 AM-1 PM</span>
              </p>
              <p className="flex gap-3">
                <Phone aria-hidden="true" className="mt-0.5 shrink-0 text-[#eec6d2]" size={18} />
                <a href="tel:5550154289" className="hover:text-white">(555) 015-4289</a>
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  )
}
