import { useEffect, useState } from 'react'
import {
  ArrowRight,
  CalendarCheck,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  ClipboardCheck,
  Clock,
  Droplets,
  FileText,
  MapPin,
  Microscope,
  Phone,
  ScanSearch,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container, CTAButton, SubWebsiteNav } from '../../components'
import { imageUrl } from '../../assets/images'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Consultation Flow', href: '#consultation-flow' },
  { label: 'Providers', href: '#providers' },
  { label: 'Skin Resources', href: '#resources' },
  { label: 'Visit Info', href: '#visit-info' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const trustPoints = ['Provider-led skin care', 'Clear consultation flow', 'Practical next steps']

const heroSlides = [
  {
    label: 'Consultation-first dermatology',
    text: 'A calm provider-led path for discussing concerns, options, and practical next steps.',
    image: 'medical/clearskin/hero.png',
    alt: 'Dermatology consultation in a clean clinic',
  },
  {
    label: 'Skin concern review',
    text: 'Focused visits help organize what you are noticing and what questions you want answered.',
    image: 'medical/clearskin/skin-consultation.png',
    alt: 'Dermatology skin consultation',
  },
  {
    label: 'Clean treatment setting',
    text: 'A refined clinic environment for private conversations, skin checks, and follow-up planning.',
    image: 'medical/clearskin/room.png',
    alt: 'Clean dermatology treatment room',
  },
]

const services: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: 'Medical Skin Consultations',
    text: 'Provider-led visits for skin concerns, questions, history, and practical care planning.',
    icon: Stethoscope,
  },
  {
    title: 'Acne & Blemish Care',
    text: 'Clear conversations about blemish concerns, routines, options, and follow-up needs.',
    icon: Droplets,
  },
  {
    title: 'Skin Screening Visits',
    text: 'Skin checks and screening conversations focused on clarity, questions, and next steps.',
    icon: ScanSearch,
  },
  {
    title: 'Rash & Irritation Concerns',
    text: 'Plain-language support for irritation questions, timing, patterns, and provider review.',
    icon: Sparkles,
  },
  {
    title: 'Mole & Spot Checks',
    text: 'Focused visits for changes, spots, questions, and guidance about follow-up when appropriate.',
    icon: Microscope,
  },
  {
    title: 'Follow-Up Care',
    text: 'Review care plans, treatment conversations, routine questions, and ongoing next steps.',
    icon: ClipboardCheck,
  },
]

const flowSteps = [
  ['Share your concern', 'Tell the team what you are noticing, how long it has been happening, and what questions you want answered.'],
  ['Review your skin history', 'Your provider reviews relevant history, routines, prior care, and practical visit details.'],
  ['Discuss care options', 'Your provider explains possible next steps in plain language and answers questions.'],
  ['Leave with a plan', 'You receive practical guidance for follow-up, care routines, treatment discussions, or referrals when appropriate.'],
]

const resources = [
  'Preparing for a dermatology visit',
  'Questions to ask your provider',
  'Tracking skin changes',
  'Understanding follow-up care',
  'Product routine notes',
  'When to call the clinic',
]

const providers = [
  {
    name: 'Dr. Nora Ellis',
    role: 'Dermatologist',
    bio: 'Nora keeps consultations calm and specific, with plain-language explanations and practical follow-up guidance.',
  },
  {
    name: 'Dr. Julian Reed',
    role: 'Medical Dermatology',
    bio: 'Julian supports patients through skin concern visits, screening conversations, and care-plan questions.',
  },
  {
    name: 'Amara Collins, PA-C',
    role: 'Skin Care Consultations',
    bio: 'Amara helps patients organize routines, concerns, visit goals, and next-step conversations.',
  },
]

const featurePoints = [
  'Plain-language explanations',
  'Provider-led recommendations',
  'Practical routine guidance',
  'Follow-up support',
]

const environmentPoints = ['Private consultation rooms', 'Clean treatment areas', 'Clear follow-up guidance']

const visitDetails = [
  ['What to bring', 'Bring current product lists, medications, photos if helpful, questions, and payment details.'],
  ['First consultation', 'Your first visit may review concerns, history, routines, goals, and practical next steps.'],
  ['Skin concern visits', 'Concern-focused visits help organize symptoms, timelines, questions, and provider review.'],
  ['Follow-up appointments', 'Follow-ups can review progress conversations, routine questions, and care-plan details.'],
  ['Product routine notes', 'Bring names or photos of products you currently use so the team can review context.'],
  ['Payment and plan questions', 'Contact the practice to review payment and plan details before your visit.'],
]

const appointmentTypes = [
  'New skin consultation',
  'Acne or blemish concern',
  'Skin screening visit',
  'Mole or spot check',
  'Follow-up care',
  'Product routine question',
]

const reviews = [
  {
    name: 'Iris',
    quote: 'The visit felt organized, and I understood the next steps for follow-up before I left.',
  },
  {
    name: 'Maren',
    quote: 'The provider explained my options clearly and helped me understand what to track.',
  },
  {
    name: 'Theo',
    quote: 'The consultation felt calm, practical, and focused on what I needed to ask.',
  },
]

const ServiceIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-[#fffaf4] text-[#a4613e] ring-1 ring-[#eadccd]">
    <Icon aria-hidden="true" size={21} strokeWidth={1.9} />
  </span>
)

export function ClearSkinDermatology() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0)

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length)
    }, 5400)

    return () => window.clearInterval(slideTimer)
  }, [])

  const activeSlide = heroSlides[activeHeroSlide]
  const showPreviousSlide = () => setActiveHeroSlide((current) => (current - 1 + heroSlides.length) % heroSlides.length)
  const showNextSlide = () => setActiveHeroSlide((current) => (current + 1) % heroSlides.length)

  return (
    <main className="bg-[#fbf7f1] text-[#2b2520]">
      <SubWebsiteNav
        brand="ClearSkin Dermatology"
        links={navLinks}
        ctaLabel="Book Consultation"
        ctaHref="#contact"
        collectionPath="/medical"
        className="border-b border-[#e8ded2] bg-[#fffaf4]/94 text-[#2b2520] shadow-sm shadow-[#2b2520]/5"
        brandClassName="font-serif text-lg tracking-normal text-[#6e4a38]"
        linkClassName="rounded-full px-3 py-2 text-[#71645b] transition hover:bg-[#f2e7dc] hover:text-[#6e4a38]"
        activeLinkClassName="active bg-[#f2e7dc] text-[#6e4a38]"
        ctaClassName="bg-[#6e4a38] text-white shadow-lg shadow-[#6e4a38]/18 hover:bg-[#8a5b43]"
        activeCtaClassName="active ring-2 ring-[#c78b5f] ring-offset-2"
        menuButtonClassName="border-[#e8ded2] bg-[#fffaf4] text-[#6e4a38] hover:bg-[#f2e7dc]"
        mobilePanelClassName="border border-[#e8ded2] bg-[#fffaf4]"
      />

      <section className="relative isolate -mt-16 min-h-screen overflow-hidden bg-[#2b2520] pt-32 text-white md:pt-36">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.image}
            src={imageUrl(slide.image)}
            alt={slide.alt}
            className={`absolute inset-0 -z-30 h-full w-full object-cover transition duration-700 ${
              index === activeHeroSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
            }`}
          />
        ))}
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(180deg,rgba(43,37,32,0.74)_0%,rgba(43,37,32,0.54)_42%,rgba(43,37,32,0.9)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_14%_24%,rgba(216,176,142,0.32),transparent_26%),radial-gradient(circle_at_84%_18%,rgba(119,132,99,0.24),transparent_24%)]" />

        <Container className="flex min-h-[calc(100vh-8rem)] flex-col justify-center gap-8 py-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center gap-2 border border-white/28 bg-white/12 px-4 py-2 text-sm font-black uppercase text-[#f1d6c1] shadow-sm backdrop-blur">
              <Sparkles aria-hidden="true" size={17} /> Medical skin care and consultation flow
            </p>
            <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[1.02] tracking-normal md:text-7xl">
              Medical skin care with a clearer consultation path.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/78 md:text-xl">
              ClearSkin Dermatology helps patients understand skin concerns, prepare for visits, review care options,
              and leave with practical next steps from a provider-led dermatology team.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <CTAButton href="#contact" size="lg" className="rounded-full bg-[#d8b08e] text-[#2b2520] hover:bg-white">
                Book Consultation
              </CTAButton>
              <CTAButton
                href="#services"
                variant="outline"
                size="lg"
                trailingIcon={<ArrowRight aria-hidden="true" size={20} />}
                className="rounded-full border-white/34 bg-white/10 text-white hover:bg-white/16 hover:text-white"
              >
                Explore Services
              </CTAButton>
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-[0.78fr_1.44fr_0.78fr] lg:items-end">
            <div className="rounded-[1.5rem] border border-white/18 bg-white/12 p-5 shadow-2xl shadow-black/18 backdrop-blur">
              <p className="text-xs font-black uppercase text-[#f1d6c1]">{activeSlide.label}</p>
              <p className="mt-3 text-sm leading-7 text-white/76">{activeSlide.text}</p>
              <div className="mt-5 flex items-center gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.image}
                    type="button"
                    aria-label={`Show ${slide.label}`}
                    aria-current={index === activeHeroSlide}
                    onClick={() => setActiveHeroSlide(index)}
                    className={`h-2.5 rounded-full transition ${
                      index === activeHeroSlide ? 'w-8 bg-[#d8b08e]' : 'w-2.5 bg-white/42 hover:bg-white/72'
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-3 border border-white/18 bg-white/10 p-4 shadow-2xl shadow-black/22 backdrop-blur md:grid-cols-3">
              {trustPoints.map((point) => (
                <div key={point} className="border border-white/14 bg-white/10 p-4 text-center text-sm font-bold text-white/82">
                  <CheckCircle aria-hidden="true" className="mx-auto mb-2 text-[#d8b08e]" size={18} />
                  {point}
                </div>
              ))}
            </div>

            <div className="border border-white/22 bg-white/90 p-5 text-[#2b2520] shadow-2xl shadow-black/18 backdrop-blur">
              <p className="text-xs font-black uppercase text-[#a4613e]">Consultation card</p>
              <div className="mt-4 grid gap-3">
                {['Discuss concern', 'Review options', 'Plan next steps'].map((step, index) => (
                  <div key={step} className="grid grid-cols-[2rem_1fr] items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#f2e7dc] text-xs font-black text-[#6e4a38]">
                      {index + 1}
                    </span>
                    <span className="font-bold text-[#2b2520]">{step}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mx-auto flex items-center gap-3">
            <button
              type="button"
              aria-label="Previous hero image"
              onClick={showPreviousSlide}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/24 bg-white/12 text-white backdrop-blur transition hover:bg-white/20"
            >
              <ChevronLeft aria-hidden="true" size={20} />
            </button>
            <span className="text-xs font-black uppercase text-white/64">
              {String(activeHeroSlide + 1).padStart(2, '0')} / {String(heroSlides.length).padStart(2, '0')}
            </span>
            <button
              type="button"
              aria-label="Next hero image"
              onClick={showNextSlide}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#d8b08e] text-[#2b2520] transition hover:bg-white"
            >
              <ChevronRight aria-hidden="true" size={20} />
            </button>
          </div>
        </Container>
      </section>

      <section id="services" className="border-y border-[#e8ded2] bg-[#fffaf4] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 border-b border-[#e8ded2] pb-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8a5b43]">Services</p>
              <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-[#2b2520] md:text-6xl">
                Dermatology care with clear guidance.
              </h2>
            </div>
            <img
              src={imageUrl('medical/clearskin/acne-care.png')}
              alt="Medical skincare consultation detail"
              className="h-64 w-full object-cover shadow-xl shadow-[#6e4a38]/10"
            />
          </div>
          <div className="grid gap-0 border-x border-[#e8ded2] bg-white md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ title, text, icon }) => (
              <article key={title} className="border-b border-r border-[#e8ded2] bg-white p-6 transition duration-300 hover:bg-[#fbf7f1]">
                <div className="mb-6 flex items-center justify-between gap-4">
                  <ServiceIcon icon={icon} />
                  <span className="h-px flex-1 bg-[#e8ded2]" />
                </div>
                <h3 className="font-serif text-2xl leading-tight text-[#2b2520]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6f6258]">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="consultation-flow" className="bg-[#2b2520] py-20 text-white md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d8b08e]">Consultation flow</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-6xl">
                A visit flow that helps skin care feel less confusing.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-white/66">
              A clean sequence keeps dermatology visits focused on what the patient noticed, what the provider reviews,
              and what practical guidance comes next.
            </p>
          </div>
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-stretch">
            <img
              src={imageUrl('medical/clearskin/consultation-flow.png')}
              alt="Dermatology consultation flow"
              className="h-full min-h-[34rem] w-full object-cover shadow-xl shadow-black/18"
            />
            <div className="grid border-y border-white/16">
              {flowSteps.map(([title, text], index) => (
                <article key={title} className="grid gap-4 border-b border-white/16 p-6 last:border-b-0 md:grid-cols-[8rem_1fr] md:items-start">
                  <span className="font-serif text-6xl leading-none text-[#d8b08e]">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-serif text-3xl leading-tight">{title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="resources" className="bg-[#fbf7f1] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8a5b43]">Skin resources</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2b2520] md:text-5xl">
                Helpful skin care resources before and after your visit.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-8 text-[#6f6258]">
              A magazine-style resource shelf keeps preparation, product notes, and follow-up questions easy to scan
              without turning into diagnosis advice.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-0 border border-[#e8ded2] bg-white">
              {resources.slice(0, 3).map((resource, index) => (
                <article key={resource} className="grid gap-4 border-b border-[#e8ded2] p-6 last:border-b-0 sm:grid-cols-[4rem_1fr]">
                  <span className="font-serif text-4xl text-[#a4613e]">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="font-serif text-2xl leading-tight text-[#2b2520]">{resource}</h3>
                    <p className="mt-3 text-sm leading-7 text-[#6f6258]">
                      General preparation prompt for dermatology conversations and follow-up clarity.
                    </p>
                  </div>
                </article>
              ))}
            </div>
            <div className="grid gap-5">
              {resources.slice(3).map((resource) => (
                <article key={resource} className="border border-[#e8ded2] bg-[#fffaf4] p-6">
                  <FileText aria-hidden="true" className="text-[#a4613e]" size={22} />
                  <h3 className="mt-5 font-serif text-2xl leading-tight text-[#2b2520]">{resource}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#6f6258]">
                    A concise note for visit planning, routine context, and clinic communication.
                  </p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#e8ded2] bg-white py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-stretch">
          <div className="flex flex-col justify-between border-l-4 border-[#c78b5f] pl-6 lg:py-4">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8a5b43]">Medical skin care</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2b2520] md:text-6xl">
                Clinical guidance without the confusion.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#6f6258]">
                A provider-led approach keeps skin care conversations practical, specific, and easy to understand.
              </p>
            </div>
            <div className="mt-10 divide-y divide-[#e8ded2] border-y border-[#e8ded2]">
              {featurePoints.map((point) => (
                <div key={point} className="flex items-center gap-4 py-5">
                  <CheckCircle aria-hidden="true" className="shrink-0 text-[#778463]" size={20} />
                  <span className="font-bold leading-6 text-[#2b2520]">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={imageUrl('medical/clearskin/medical-skin-care.png')}
            alt="Medical skin care consultation"
            className="h-[36rem] w-full object-cover shadow-xl shadow-[#6e4a38]/10"
          />
        </Container>
      </section>

      <section id="providers" className="bg-[#eee5da] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 border-b border-[#d9c8b9] pb-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8a5b43]">Providers</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2b2520] md:text-6xl">
                Dermatology providers focused on clarity.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#6f6258]">
              Provider cards emphasize calm communication, clear consultation steps, and practical dermatology guidance.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <img
              src={imageUrl('medical/clearskin/team.png')}
              alt="ClearSkin Dermatology provider team"
              className="h-full min-h-[32rem] w-full object-cover shadow-xl shadow-[#6e4a38]/10"
            />
            <div className="grid border-y border-[#d9c8b9] bg-white">
              {providers.map(({ name, role, bio }) => (
                <article key={name} className="grid gap-5 border-b border-[#d9c8b9] p-6 last:border-b-0 sm:grid-cols-[3rem_1fr]">
                  <Users aria-hidden="true" className="mt-1 text-[#a4613e]" size={24} />
                  <div>
                    <h3 className="font-serif text-3xl leading-tight text-[#2b2520]">{name}</h3>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-[#8a5b43]">{role}</p>
                    <p className="mt-4 text-sm leading-7 text-[#6f6258]">{bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8a5b43]">Clinic environment</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2b2520] md:text-6xl">
              A calm space for focused skin care.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#6f6258]">
              A refined, private setting for consultations, skin checks, care planning, and follow-up conversations.
            </p>
            <div className="mt-10 grid border border-[#e8ded2] md:grid-cols-3 lg:grid-cols-1">
              {environmentPoints.map((point) => (
                <div key={point} className="flex items-center gap-3 border-b border-[#e8ded2] bg-[#fbf7f1] p-5 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 lg:border-b lg:border-r-0 lg:last:border-b-0">
                  <CheckCircle aria-hidden="true" className="text-[#778463]" size={20} />
                  <span className="font-bold leading-6 text-[#2b2520]">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <img
            src={imageUrl('medical/clearskin/room.png')}
            alt="Clean dermatology treatment room"
            className="h-[34rem] w-full object-cover shadow-xl shadow-[#6e4a38]/10"
          />
        </Container>
      </section>

      <section id="visit-info" className="bg-[#fbf7f1] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 border-b border-[#e8ded2] pb-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8a5b43]">Visit info</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2b2520] md:text-5xl">
                Practical details before your appointment.
              </h2>
            </div>
            <img
              src={imageUrl('medical/clearskin/skin-screening.png')}
              alt="Dermatology skin screening visit"
              className="h-56 w-full object-cover shadow-xl shadow-[#6e4a38]/10"
            />
          </div>
          <div className="grid gap-0 border-l border-t border-[#e8ded2] md:grid-cols-2 lg:grid-cols-3">
            {visitDetails.map(([title, text], index) => (
              <article key={title} className="border-b border-r border-[#e8ded2] bg-white p-6">
                <div className="flex items-center justify-between gap-4">
                  <ShieldCheck aria-hidden="true" className="text-[#a4613e]" size={22} />
                  <span className="font-serif text-3xl text-[#d9c8b9]">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="mt-6 font-serif text-2xl leading-tight text-[#2b2520]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#6f6258]">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8a5b43]">Appointment access</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2b2520] md:text-5xl">
              Choose the right skin-care visit with less guesswork.
            </h2>
            <img
              src={imageUrl('medical/clearskin/appointment.png')}
              alt="Dermatology appointment access"
              className="mt-8 h-72 w-full object-cover shadow-xl shadow-[#6e4a38]/10"
            />
            <div className="mt-8">
              <CTAButton href="#contact" size="lg" className="rounded-full bg-[#6e4a38] text-white hover:bg-[#8a5b43]">
                Book Consultation
              </CTAButton>
            </div>
          </div>
          <div className="grid gap-0 border border-[#e8ded2] sm:grid-cols-2">
            {appointmentTypes.map((type, index) => (
              <div key={type} className="flex min-h-28 items-center gap-4 border-b border-[#e8ded2] bg-[#fbf7f1] p-5 sm:border-r even:sm:border-r-0">
                <CalendarCheck aria-hidden="true" className="text-[#a4613e]" size={20} />
                <span className="font-serif text-2xl leading-tight text-[#2b2520]">{type}</span>
                <span className="ml-auto self-start font-serif text-2xl text-[#d9c8b9]">{String(index + 1).padStart(2, '0')}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="reviews" className="bg-[#eee5da] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#8a5b43]">Reviews</p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-[#2b2520] md:text-5xl">
                Patients value clear dermatology conversations.
              </h2>
            </div>
            <img
              src={imageUrl('medical/clearskin/skin-consultation.png')}
              alt="Dermatology skin consultation"
              className="h-56 w-full object-cover shadow-xl shadow-[#6e4a38]/10"
            />
          </div>
          <div className="grid gap-0 border-l border-t border-[#d9c8b9] md:grid-cols-3">
            {reviews.map(({ name, quote }) => (
              <blockquote key={name} className="border-b border-r border-[#d9c8b9] bg-white p-7">
                <p className="font-serif text-6xl leading-none text-[#a4613e]">&ldquo;</p>
                <p className="mt-2 font-serif text-2xl leading-9 text-[#2b2520]">{quote}</p>
                <footer className="mt-6 text-xs font-black uppercase tracking-[0.16em] text-[#778463]">{name}</footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="relative isolate overflow-hidden bg-[#2b2520] py-20 text-white md:py-28">
        <img
          src={imageUrl('medical/clearskin/cta.png')}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(43,37,32,0.96),rgba(43,37,32,0.74))]" />
        <Container className="max-w-5xl">
          <p className="text-xs font-black uppercase tracking-[0.22em] text-[#d8b08e]">Start here</p>
          <h2 className="mt-4 max-w-4xl font-serif text-4xl leading-tight md:text-6xl">
            Start with skin care that explains the next step.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">
            Book a consultation with ClearSkin Dermatology and get clear guidance, practical visit details, and a care
            path built around your skin concerns.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="mailto:hello@clearskin.example" size="lg" className="rounded-full bg-[#d8b08e] text-[#2b2520] hover:bg-white">
              Book Consultation
            </CTAButton>
            <CTAButton
              href="#services"
              variant="outline"
              size="lg"
              trailingIcon={<ArrowRight aria-hidden="true" size={20} />}
              className="rounded-full border-white/30 bg-white/8 text-white hover:bg-white/14 hover:text-white"
            >
              View Services
            </CTAButton>
          </div>
          <p className="mt-6 text-sm leading-6 text-white/70">
            If you are experiencing a life-threatening emergency or severe allergic reaction symptoms, call local
            emergency services immediately.
          </p>
        </Container>
      </section>

      <footer className="bg-[#1b1714] py-12 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <h2 className="font-serif text-3xl">ClearSkin Dermatology</h2>
              <p className="mt-3 max-w-md leading-7 text-white/68">
                Medical skin care and consultation flow for patient-first dermatology.
              </p>
              <p className="mt-5 text-sm leading-6 text-white/58">
                If you are experiencing a life-threatening emergency or severe allergic reaction symptoms, call local
                emergency services immediately.
              </p>
            </div>
            <nav aria-label="Footer navigation" className="grid gap-2 text-sm font-bold text-white/72">
              {['Services', 'Consultation Flow', 'Providers', 'Skin Resources', 'Visit Info', 'Reviews', 'Contact', 'Privacy'].map((item) => (
                <a
                  key={item}
                  href={
                    item === 'Services'
                      ? '#services'
                      : item === 'Consultation Flow'
                        ? '#consultation-flow'
                        : item === 'Providers'
                          ? '#providers'
                          : item === 'Skin Resources'
                            ? '#resources'
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
                <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-[#d8b08e]" size={18} />
                <span>265 ClearSkin Lane, Suite 310</span>
              </p>
              <p className="flex gap-3">
                <Clock aria-hidden="true" className="mt-0.5 shrink-0 text-[#d8b08e]" size={18} />
                <span>Monday-Friday, 8 AM-6 PM</span>
              </p>
              <p className="flex gap-3">
                <CalendarCheck aria-hidden="true" className="mt-0.5 shrink-0 text-[#d8b08e]" size={18} />
                <span>Saturday, 9 AM-1 PM</span>
              </p>
              <p className="flex gap-3">
                <Phone aria-hidden="true" className="mt-0.5 shrink-0 text-[#d8b08e]" size={18} />
                <a href="tel:5550116942" className="hover:text-white">(555) 011-6942</a>
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  )
}
