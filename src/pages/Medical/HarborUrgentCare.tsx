import {
  Activity,
  ArrowRight,
  Bus,
  CalendarCheck,
  Car,
  CheckCircle,
  ClipboardCheck,
  Clock,
  FileText,
  HeartPulse,
  MapPin,
  Navigation,
  Phone,
  Thermometer,
  Users,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container, CTAButton, SubWebsiteNav } from '../../components'
import { imageUrl } from '../../assets/images'

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Wait Times', href: '#wait-times' },
  { label: 'Visit Info', href: '#visit-info' },
  { label: 'Providers', href: '#providers' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const trustPoints = ['Same-day visit access', 'Walk-ins welcome', 'Clear visit guidance']

const waitModules = [
  ['Current visit flow', 'Check in, care team review, provider visit, next-step summary', 'w-[72%]'],
  ['Reserve your spot', 'Choose a visit window and share practical visit details before arrival', 'w-[58%]'],
  ['Walk-in information', 'Review hours, location details, and what to bring before heading in', 'w-[46%]'],
  ['What to bring', 'Photo ID, payment details, medication list, and any relevant visit notes', 'w-[64%]'],
  ['After-visit follow-up', 'Leave with care instructions, referral direction, or follow-up guidance when needed', 'w-[52%]'],
]

const services: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: 'Minor Illness Visits',
    text: 'Care guidance for common same-day concerns that need timely review.',
    icon: Thermometer,
  },
  {
    title: 'Minor Injury Care',
    text: 'Support for everyday injuries, sprains, strains, cuts, and practical next steps.',
    icon: Activity,
  },
  {
    title: 'Cold, Flu & Respiratory Symptoms',
    text: 'Plain-language visit support for cough, congestion, fever, and related symptoms.',
    icon: HeartPulse,
  },
  {
    title: 'Testing & Screening Guidance',
    text: 'Clear instructions for common screening needs and when results may require follow-up.',
    icon: ClipboardCheck,
  },
  {
    title: 'Physicals & Forms',
    text: 'Visit options for practical forms, school needs, work requirements, and activity paperwork.',
    icon: FileText,
  },
  {
    title: 'Follow-Up Care',
    text: 'Guidance after a visit, including care instructions, referrals, and questions.',
    icon: CalendarCheck,
  },
]

const visitSteps = [
  ['Choose your visit path', 'Reserve a spot online or review walk-in details before arriving.'],
  ['Share practical details', 'Provide basic visit needs so the team can prepare.'],
  ['Meet a provider', 'Get clear guidance from a provider who explains what is happening and what may come next.'],
  ['Leave with next steps', 'Receive practical follow-up guidance, care instructions, or referral direction when needed.'],
]

const providers = [
  {
    name: 'Dr. Avery Lane',
    role: 'Urgent Care Physician',
    bio: 'Avery keeps visits focused, calm, and easy to follow, with clear explanations before the next step.',
  },
  {
    name: 'Dr. Marcus Reed',
    role: 'Family Medicine',
    bio: 'Marcus helps patients understand visit details, care options, and when follow-up may be useful.',
  },
  {
    name: 'Sarah Kim, NP',
    role: 'Same-Day Care',
    bio: 'Sarah supports same-day visits with practical questions, efficient intake, and clear after-visit guidance.',
  },
]

const visitDetails = [
  ['What to bring', 'Bring photo ID, payment details, medication list, and any visit notes you want reviewed.'],
  ['Walk-in visits', 'Walk-ins are welcome during posted hours, with visit flow depending on clinic capacity.'],
  ['Reserved visits', 'Reserve a spot to share practical details before arrival and understand the visit path.'],
  ['New patient details', 'New patients can review visit expectations, contact information, and arrival guidance.'],
  ['Payment and plan questions', 'Contact the clinic to review payment and plan details before your visit.'],
  ['Follow-up instructions', 'The team explains care instructions, referral direction, or follow-up options when needed.'],
]

const accessDetails = [
  { label: 'Address', value: '780 Harbor Point Drive, Suite 110', icon: MapPin },
  { label: 'Weekdays', value: 'Monday-Friday, 8 AM-8 PM', icon: Clock },
  { label: 'Weekend', value: 'Saturday-Sunday, 9 AM-5 PM', icon: CalendarCheck },
  { label: 'Parking', value: 'Patient parking is available near the main entrance.', icon: Car },
  { label: 'Transit', value: 'Two local routes stop within a short walk of the clinic.', icon: Bus },
]

const appointmentTypes = [
  'Reserve a spot',
  'Walk-in visit',
  'Minor illness',
  'Minor injury',
  'Physical or form visit',
  'Follow-up question',
]

const reviews = [
  {
    name: 'Jordan',
    quote: 'The visit felt organized, and I knew what to do next before I left.',
  },
  {
    name: 'Priya',
    quote: 'The online steps helped me understand what to bring and how the visit would work.',
  },
  {
    name: 'Miles',
    quote: 'The team explained the visit clearly and kept the process easy to follow.',
  },
]

const IconTile = ({ icon: Icon }: { icon: LucideIcon }) => (
  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e7fbff] text-[#0f7ea5] ring-1 ring-[#c7edf6]">
    <Icon aria-hidden="true" size={22} strokeWidth={2} />
  </span>
)

export function HarborUrgentCare() {
  return (
    <main className="bg-[#f4f8fa] text-[#172635]">
      <SubWebsiteNav
        brand="Harbor Urgent Care"
        links={navLinks}
        ctaLabel="Reserve a Spot"
        ctaHref="#contact"
        collectionPath="/medical"
        className="mx-auto mt-3 max-w-[94rem] rounded-full border border-white/70 bg-white/88 text-[#172635] shadow-xl shadow-[#172635]/10 ring-1 ring-[#d7e5eb]/80"
        brandClassName="text-[#0f5f7a]"
        linkClassName="rounded-full px-3 py-2 text-[#5f6f78] transition hover:bg-[#e7fbff] hover:text-[#0f5f7a]"
        activeLinkClassName="active bg-[#e7fbff] text-[#0f5f7a]"
        ctaClassName="bg-[#ff6b5f] text-white shadow-lg shadow-[#ff6b5f]/20 hover:bg-[#0f5f7a]"
        activeCtaClassName="active ring-2 ring-[#9ce7f5] ring-offset-2"
        menuButtonClassName="border-[#d7e5eb] bg-[#e7fbff] text-[#0f5f7a] hover:bg-[#d8f7ff]"
        mobilePanelClassName="border border-[#d7e5eb] bg-white/96"
      />

      <section className="relative isolate -mt-16 overflow-hidden bg-[#071b2a] pt-32 text-white md:pt-36">
        <img
          src={imageUrl('medical/harbor-urgent-care/hero.png')}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-42"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(7,27,42,0.96)_0%,rgba(7,27,42,0.88)_48%,rgba(7,27,42,0.72)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#071b2a] to-transparent" />
        <Container className="flex min-h-[calc(100vh-8rem)] flex-col justify-center gap-8 py-10">
          <div className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-black text-[#9ce7f5] ring-1 ring-white/16 backdrop-blur">
              <Clock aria-hidden="true" size={17} /> Same-day visits and wait-time clarity
            </p>
            <h1 className="mx-auto mt-6 max-w-5xl text-5xl font-black leading-[0.98] tracking-normal md:text-7xl">
              Same-day care with clearer next steps.
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/76 md:text-xl">
              Harbor Urgent Care helps patients understand visit options, check practical details, and access same-day
              care with a calm team and a simpler path from symptoms to next steps.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <CTAButton href="#contact" size="lg" className="rounded-full bg-[#ff6b5f] text-white hover:bg-[#9ce7f5] hover:text-[#071b2a]">
                Reserve a Spot
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
            <div className="mx-auto mt-8 grid max-w-3xl gap-3 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-2xl bg-white/10 p-4 text-sm font-black text-white/84 ring-1 ring-white/14 backdrop-blur">
                  <CheckCircle aria-hidden="true" className="mx-auto mb-2 text-[#9ce7f5]" size={18} />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto grid w-full max-w-6xl gap-4 lg:grid-cols-[0.72fr_1.4fr_0.72fr] lg:items-stretch">
            <div className="order-2 grid gap-4 lg:order-1">
              <div className="rounded-[1.75rem] border border-white/16 bg-white/12 p-5 shadow-2xl shadow-black/18 backdrop-blur lg:h-full">
                <p className="text-xs font-black uppercase text-[#9ce7f5]">Estimated wait-time UI</p>
                <p className="mt-2 text-4xl font-black">Status board</p>
                <p className="mt-2 text-sm leading-6 text-white/68">Placeholder module for real clinic data before production.</p>
                <div className="mt-5 grid gap-3">
                  {['Check-in', 'Care review', 'Provider visit'].map((label, index) => (
                    <div key={label}>
                      <div className="flex items-center justify-between text-xs font-black uppercase text-white/60">
                        <span>{label}</span>
                        <span>{index === 0 ? 'Open' : 'Queue'}</span>
                      </div>
                      <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/16">
                        <div className={`h-full rounded-full bg-[#9ce7f5] ${index === 0 ? 'w-[72%]' : index === 1 ? 'w-[48%]' : 'w-[36%]'}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 relative overflow-hidden rounded-[2rem] bg-white/10 p-3 shadow-2xl shadow-black/24 ring-1 ring-white/16 lg:order-2">
              <img
                src={imageUrl('medical/harbor-urgent-care/walk-in-reception.png')}
                alt="Modern urgent care reception"
                className="h-[24rem] w-full rounded-[1.5rem] object-cover md:h-[32rem]"
              />
              <div className="absolute bottom-6 left-6 right-6 rounded-[1.35rem] bg-[#071b2a]/88 p-5 text-left shadow-xl shadow-black/18 ring-1 ring-white/12 backdrop-blur">
                <p className="text-xs font-black uppercase text-[#9ce7f5]">Visit path</p>
                <p className="mt-2 text-2xl font-black">Reserve, walk in, or ask a follow-up question.</p>
              </div>
            </div>
            <div className="order-3 rounded-[1.75rem] bg-white p-5 text-[#172635] shadow-xl shadow-black/14">
              <p className="text-xs font-black uppercase text-[#0f7ea5]">Visit options</p>
              <div className="mt-4 grid gap-3">
                {['Walk in', 'Reserve', 'Follow up'].map((option) => (
                  <div key={option} className="flex items-center gap-3 rounded-2xl bg-[#eef6f8] p-3">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b5f]" />
                    <span className="font-black">{option}</span>
                  </div>
                ))}
              </div>
              <a href="#wait-times" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0f7ea5] hover:text-[#ff6b5f]">
                Walk-In Info <ArrowRight aria-hidden="true" size={17} />
              </a>
            </div>
          </div>
        </Container>
      </section>

      <section id="wait-times" className="bg-[#071b2a] py-20 text-white md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#9ce7f5]">Wait-time clarity</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
                Know what to expect before you arrive.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-white/70">
              Estimated wait-time information is shown as a placeholder and should be connected to real clinic data
              before production.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr]">
            <img
              src={imageUrl('medical/harbor-urgent-care/wait-time-board.png')}
              alt="Urgent care wait-time status board"
              className="h-full min-h-[32rem] w-full rounded-[2rem] object-cover shadow-2xl shadow-black/22"
            />
            <div className="grid gap-4">
              {waitModules.map(([title, text, width]) => (
                <article key={title} className="rounded-[1.35rem] bg-white/10 p-5 ring-1 ring-white/14">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-black">{title}</h3>
                      <p className="mt-2 text-sm leading-6 text-white/66">{text}</p>
                    </div>
                    <Clock aria-hidden="true" className="shrink-0 text-[#9ce7f5]" size={22} />
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/14">
                    <div className={`h-full rounded-full bg-[#ff6b5f] ${width}`} />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="bg-[#f4f8fa] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#0f7ea5]">Services</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
                Care for common same-day needs.
              </h2>
            </div>
            <img
              src={imageUrl('medical/harbor-urgent-care/urgent-care-services.png')}
              alt="Urgent care service consultation"
              className="h-64 w-full rounded-[1.75rem] object-cover shadow-xl shadow-[#172635]/10"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ title, text, icon }) => (
              <article key={title} className="rounded-[1.35rem] border border-[#d7e5eb] bg-white p-6 shadow-sm shadow-[#172635]/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <IconTile icon={icon} />
                <h3 className="mt-6 text-2xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5f6f78]">{text}</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#0f7ea5] hover:text-[#ff6b5f]">
                  Learn more <ArrowRight aria-hidden="true" size={17} />
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#0f7ea5]">Visit flow</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
              A simpler urgent care visit.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5f6f78]">
              From choosing a visit path to leaving with next steps, the experience is designed to stay clear and calm.
            </p>
            <img
              src={imageUrl('medical/harbor-urgent-care/same-day-visit.png')}
              alt="Same-day urgent care visit"
              className="mt-8 h-72 w-full rounded-[1.75rem] object-cover shadow-xl shadow-[#172635]/10"
            />
          </div>
          <div className="rounded-[2rem] border border-[#d7e5eb] bg-[#f4f8fa] p-4">
            {visitSteps.map(([title, text], index) => (
              <article key={title} className="grid gap-4 border-b border-[#d7e5eb] p-5 last:border-b-0 sm:grid-cols-[4rem_1fr]">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0f7ea5] text-sm font-black text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-black">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-[#5f6f78]">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="providers" className="bg-[#eaf4f7] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#0f7ea5]">Providers</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
                A care team focused on clarity and calm.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#5f6f78]">
              Provider introductions keep the experience grounded in listening, efficient care, and practical
              explanations.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <img
              src={imageUrl('medical/harbor-urgent-care/care-team.png')}
              alt="Harbor Urgent Care team"
              className="h-full min-h-[32rem] w-full rounded-[2rem] object-cover shadow-xl shadow-[#172635]/10"
            />
            <div className="grid gap-4">
              {providers.map(({ name, role, bio }) => (
                <article key={name} className="rounded-[1.35rem] border border-[#d7e5eb] bg-white p-6 shadow-sm shadow-[#172635]/5">
                  <Users aria-hidden="true" className="text-[#0f7ea5]" size={24} />
                  <h3 className="mt-5 text-2xl font-black">{name}</h3>
                  <p className="mt-1 text-sm font-black text-[#0f7ea5]">{role}</p>
                  <p className="mt-4 text-sm leading-7 text-[#5f6f78]">{bio}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="visit-info" className="bg-white py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#0f7ea5]">Visit info</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Practical details before you arrive.
              </h2>
            </div>
            <img
              src={imageUrl('medical/harbor-urgent-care/modern-exam-room.png')}
              alt="Modern urgent care exam room"
              className="h-56 w-full rounded-[1.75rem] object-cover shadow-xl shadow-[#172635]/10"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visitDetails.map(([title, text]) => (
              <article key={title} className="rounded-[1.35rem] border border-[#d7e5eb] bg-[#f4f8fa] p-6">
                <FileText aria-hidden="true" className="text-[#0f7ea5]" size={22} />
                <h3 className="mt-5 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5f6f78]">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#071b2a] py-20 text-white md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#9ce7f5]">Location and access</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
              Easy access when care cannot wait.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
              A streamlined location section gives patients the practical arrival details they need without a map API.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="tel:5550127048" size="lg" className="rounded-full bg-white text-[#071b2a] hover:bg-[#9ce7f5]">
                Call Clinic
              </CTAButton>
              <CTAButton href="#contact" size="lg" className="rounded-full bg-[#ff6b5f] text-white hover:bg-[#9ce7f5] hover:text-[#071b2a]">
                Reserve a Spot
              </CTAButton>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/14 bg-white/8 p-5 shadow-2xl shadow-black/18">
            <div className="relative mb-5 h-64 overflow-hidden rounded-[1.5rem] bg-[#0d3146]">
              <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(90deg,white_1px,transparent_1px),linear-gradient(white_1px,transparent_1px)] [background-size:42px_42px]" />
              <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#ff6b5f] shadow-2xl shadow-[#ff6b5f]/40">
                <Navigation aria-hidden="true" size={34} />
              </div>
              <div className="absolute bottom-4 left-4 rounded-full bg-white px-4 py-2 text-sm font-black text-[#071b2a]">
                Harbor Point access
              </div>
            </div>
            <div className="grid gap-3">
              {accessDetails.map(({ label, value, icon: Icon }) => (
                <div key={label} className="flex gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/12">
                  <Icon aria-hidden="true" className="mt-0.5 shrink-0 text-[#9ce7f5]" size={20} />
                  <div>
                    <p className="text-xs font-black uppercase text-white/52">{label}</p>
                    <p className="mt-1 text-sm font-bold text-white/82">{value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="reviews" className="bg-[#f4f8fa] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#0f7ea5]">Reviews</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Clear visits make same-day care easier to navigate.
              </h2>
            </div>
            <img
              src={imageUrl('medical/harbor-urgent-care/provider-consultation.png')}
              alt="Provider consultation at urgent care"
              className="h-56 w-full rounded-[1.75rem] object-cover shadow-xl shadow-[#172635]/10"
            />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map(({ name, quote }) => (
              <blockquote key={name} className="rounded-[1.5rem] border border-[#d7e5eb] bg-white p-7 shadow-sm shadow-[#172635]/5">
                <p className="text-5xl font-black leading-none text-[#ff6b5f]">&ldquo;</p>
                <p className="mt-2 text-lg font-bold leading-8">{quote}</p>
                <footer className="mt-6 text-sm font-black uppercase text-[#0f7ea5]">{name}</footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#0f7ea5]">Appointment access</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Choose the visit option that fits your day.
            </h2>
            <div className="mt-8">
              <CTAButton href="#contact" size="lg" className="rounded-full bg-[#ff6b5f] text-white hover:bg-[#0f5f7a]">
                Reserve a Spot
              </CTAButton>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-[2rem] bg-[#071b2a] p-5 text-white shadow-2xl shadow-[#172635]/14">
            <img
              src={imageUrl('medical/harbor-urgent-care/appointment-access.png')}
              alt="Urgent care appointment access"
              className="mb-5 h-56 w-full rounded-[1.5rem] object-cover opacity-90"
            />
            <div className="grid gap-3 sm:grid-cols-2">
              {appointmentTypes.map((type) => (
                <div key={type} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/12">
                  <CalendarCheck aria-hidden="true" className="text-[#9ce7f5]" size={20} />
                  <span className="font-bold">{type}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="relative isolate overflow-hidden bg-[#071b2a] py-20 text-white md:py-28">
        <img
          src={imageUrl('medical/harbor-urgent-care/cta.png')}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,27,42,0.96),rgba(7,27,42,0.74))]" />
        <Container className="max-w-5xl">
          <p className="text-sm font-black uppercase text-[#9ce7f5]">Get care now</p>
          <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Need same-day care with less confusion?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">
            Start with clear visit options, practical details, and a care team focused on helping you understand the
            next step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="mailto:hello@harborurgent.example" size="lg" className="rounded-full bg-[#ff6b5f] text-white hover:bg-[#9ce7f5] hover:text-[#071b2a]">
              Reserve a Spot
            </CTAButton>
            <CTAButton
              href="#wait-times"
              variant="outline"
              size="lg"
              trailingIcon={<ArrowRight aria-hidden="true" size={20} />}
              className="rounded-full border-white/30 bg-white/8 text-white hover:bg-white/14 hover:text-white"
            >
              View Walk-In Info
            </CTAButton>
          </div>
          <p className="mt-6 text-sm leading-6 text-white/70">
            If you are experiencing a life-threatening emergency, call local emergency services immediately.
          </p>
        </Container>
      </section>

      <footer className="bg-[#04131f] py-12 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.85fr_1.05fr]">
            <div>
              <h2 className="text-3xl font-black">Harbor Urgent Care</h2>
              <p className="mt-3 max-w-md leading-7 text-white/68">
                Same-day visits and wait-time clarity for patient-first urgent care.
              </p>
              <p className="mt-5 text-sm leading-6 text-white/58">
                If you are experiencing a life-threatening emergency, call local emergency services immediately.
              </p>
            </div>
            <nav aria-label="Footer navigation" className="grid gap-2 text-sm font-bold text-white/72">
              {['Services', 'Wait Times', 'Visit Info', 'Providers', 'Reviews', 'Contact', 'Privacy'].map((item) => (
                <a
                  key={item}
                  href={
                    item === 'Services'
                      ? '#services'
                      : item === 'Wait Times'
                        ? '#wait-times'
                        : item === 'Visit Info'
                          ? '#visit-info'
                          : item === 'Providers'
                            ? '#providers'
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
                <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-[#9ce7f5]" size={18} />
                <span>780 Harbor Point Drive, Suite 110</span>
              </p>
              <p className="flex gap-3">
                <Clock aria-hidden="true" className="mt-0.5 shrink-0 text-[#9ce7f5]" size={18} />
                <span>Monday-Friday, 8 AM-8 PM</span>
              </p>
              <p className="flex gap-3">
                <CalendarCheck aria-hidden="true" className="mt-0.5 shrink-0 text-[#9ce7f5]" size={18} />
                <span>Saturday-Sunday, 9 AM-5 PM</span>
              </p>
              <p className="flex gap-3">
                <Phone aria-hidden="true" className="mt-0.5 shrink-0 text-[#9ce7f5]" size={18} />
                <a href="tel:5550127048" className="hover:text-white">(555) 012-7048</a>
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  )
}
