import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Eye,
  FileText,
  Glasses,
  MapPin,
  Monitor,
  Phone,
  RefreshCw,
  ShieldCheck,
  ShoppingBag,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Container, CTAButton, SubWebsiteNav } from '../../components'
import { imageUrl } from '../../assets/images'

const navLinks = [
  { label: 'Eye Exams', href: '#eye-exams' },
  { label: 'Eyewear', href: '#eyewear' },
  { label: 'Contacts', href: '#contacts' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Visit Info', href: '#visit-info' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
]

const trustPoints = ['Comprehensive eye exams', 'Eyewear styling help', 'Contact lens guidance']
const visitFlow = ['Exam', 'Guidance', 'Frames', 'Follow-up']

const services: Array<{ title: string; text: string; icon: LucideIcon; image: string }> = [
  {
    title: 'Comprehensive Eye Exams',
    text: 'Thorough routine vision visits with clear explanations and practical next steps.',
    icon: Eye,
    image: 'medical/clearview/eye-exam.png',
  },
  {
    title: 'Prescription Updates',
    text: 'Focused appointments for current vision needs, prescription questions, and eyewear planning.',
    icon: RefreshCw,
    image: 'medical/clearview/exam-room.png',
  },
  {
    title: 'Eyewear Selection',
    text: 'Helpful frame guidance built around fit, comfort, style, and everyday use.',
    icon: Glasses,
    image: 'medical/clearview/eyewear-display.png',
  },
  {
    title: 'Contact Lens Fittings',
    text: 'Contact lens visits that cover fit questions, comfort notes, routines, and follow-up needs.',
    icon: CheckCircle,
    image: 'medical/clearview/contact-lens-care.png',
  },
  {
    title: 'Digital Eye Strain Guidance',
    text: 'Practical conversations around screen habits, lens options, and clearer daily routines.',
    icon: Monitor,
    image: 'medical/clearview/appointment.png',
  },
  {
    title: 'Follow-Up Care',
    text: 'Organized support after visits so patients understand timing, pickup, and next questions.',
    icon: ShieldCheck,
    image: 'medical/clearview/frame-styling.png',
  },
]

const examFlow = [
  ['Book your exam', 'Choose a visit type and share the basics before you arrive.'],
  ['Understand your vision needs', 'Review prescription questions, screen habits, contacts, and day-to-day priorities.'],
  ['Choose eyewear with confidence', 'Move from exam notes to frame options with calm styling support.'],
]

const frameCategories = [
  ['Everyday Classics', 'Clean shapes and reliable fits for workdays, errands, and daily wear.', 'medical/clearview/retail-frames.png', 'View Frames'],
  ['Lightweight Minimal', 'Subtle profiles for patients who prefer barely-there styling.', 'medical/clearview/eyewear-display.png', 'View Frames'],
  ['Bold Modern', 'Stronger silhouettes for expressive style without losing comfort.', 'medical/clearview/frame-styling.png', 'Get Styling Help'],
  ['Sunwear & Specialty', 'Lens and frame options for bright days, driving, and specific routines.', 'medical/clearview/hero.png', 'Get Styling Help'],
]

const providers = [
  {
    name: 'Dr. Olivia Bennett',
    role: 'Optometrist',
    bio: 'Dr. Bennett helps patients understand exam findings, prescription questions, and practical next steps in plain language.',
  },
  {
    name: 'Dr. Marcus Lee',
    role: 'Optometrist',
    bio: 'Dr. Lee focuses on calm visits for routine eye exams, contact lens conversations, and everyday vision needs.',
  },
  {
    name: 'Sophia Rivera',
    role: 'Optical Stylist',
    bio: 'Sophia guides frame selection with attention to face shape, comfort, color, and how eyewear fits daily life.',
  },
]

const visitDetails = [
  ['What to bring', 'Bring current eyewear, contact lens details if applicable, ID, and any vision questions.'],
  ['New patient exams', 'Plan for a clear intake, routine exam flow, and time for practical questions.'],
  ['Prescription updates', 'Share what has changed so the team can review your current vision needs.'],
  ['Contact lens appointments', 'Bring current lens details and notes about comfort, routine, or fit questions.'],
  ['Eyewear pickup', 'The team reviews fit, basic care, and practical adjustment questions at pickup.'],
  ['Follow-up questions', 'Contact the office to review payment and plan details before your visit.'],
]

const appointmentTypes = [
  'Routine eye exam',
  'New patient visit',
  'Contact lens fitting',
  'Prescription update',
  'Eyewear styling help',
]

const reviews = [
  {
    name: 'Maya',
    quote: 'The visit felt organized, and the frame help made it easier to choose something I would actually wear.',
  },
  {
    name: 'Jon',
    quote: 'I liked that the team explained the appointment steps clearly and gave me time for questions.',
  },
  {
    name: 'Elena',
    quote: 'The eyewear area felt boutique without feeling overwhelming. The guidance was simple and useful.',
  },
]

const IconTile = ({ icon: Icon }: { icon: LucideIcon }) => (
  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eaf6fb] text-[#2f6f9f] ring-1 ring-[#cfe7f1]">
    <Icon aria-hidden="true" size={21} strokeWidth={2} />
  </span>
)

export function ClearViewOptometry() {
  return (
    <main className="brand-motion bg-[#f7fbfa] text-[#1e2a36]">
      <SubWebsiteNav
        brand="ClearView Optometry"
        links={navLinks}
        ctaLabel="Book Eye Exam"
        ctaHref="#contact"
        collectionPath="/medical"
        className="border-b border-[#dbe7e6] bg-white/94 text-[#1e2a36] shadow-sm shadow-[#1e2a36]/5"
        brandClassName="text-[#2f6f9f]"
        linkClassName="text-[#5e6c78] hover:text-[#2f6f9f]"
        ctaClassName="bg-[#1e2a36] text-white shadow-lg shadow-[#1e2a36]/15 hover:bg-[#2d4052]"
        menuButtonClassName="border-[#dbe7e6] text-[#2f6f9f] hover:bg-[#eef7f8]"
        mobilePanelClassName="border border-[#dbe7e6] bg-white"
      />

      <section className="relative isolate overflow-hidden bg-[#111d27] pt-28 text-white md:pt-32">
        <img
          src={imageUrl('medical/clearview/hero.png')}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(17,29,39,0.97)_0%,rgba(17,29,39,0.88)_45%,rgba(17,29,39,0.55)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-[#111d27] to-transparent" />

        <Container className="grid min-h-[calc(100vh-5.5rem)] gap-10 py-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <div className="inline-flex flex-wrap items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-sm font-black text-[#d9c49e] ring-1 ring-white/16 backdrop-blur">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#2f6f9f]">
                <Eye aria-hidden="true" size={17} />
              </span>
              Eye exams and eyewear retail
            </div>
            <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[1.01] tracking-normal md:text-7xl">
              Clearer vision starts with a simpler visit.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76 md:text-xl">
              ClearView Optometry brings together thorough eye exams, helpful guidance, and curated eyewear so patients
              can move from appointment to frame selection with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton href="#contact" size="lg" className="bg-[#d9c49e] text-[#111d27] hover:bg-white">
                Book Eye Exam
              </CTAButton>
              <CTAButton
                href="#eyewear"
                variant="outline"
                size="lg"
                trailingIcon={<ArrowRight aria-hidden="true" size={20} />}
                className="border-white/30 bg-white/8 text-white hover:bg-white/14 hover:text-white"
              >
                Shop Frames
              </CTAButton>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div key={point} className="rounded-2xl bg-white/10 p-4 text-sm font-black text-white/86 ring-1 ring-white/14 backdrop-blur">
                  <CheckCircle aria-hidden="true" className="mb-2 text-[#d9c49e]" size={19} />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.72fr_1fr] lg:items-end">
            <div className="order-2 grid gap-4 lg:order-1">
              <div className="rounded-[1.5rem] border border-white/14 bg-white/10 p-5 shadow-xl shadow-black/18 backdrop-blur">
                <p className="text-xs font-black uppercase text-[#d9c49e]">Next visit</p>
                <p className="mt-2 text-2xl font-black leading-tight">Exam, eyewear, and contact lens guidance in one place.</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 text-sm font-black text-white hover:text-[#d9c49e]">
                  Book Eye Exam <ArrowRight aria-hidden="true" size={17} />
                </a>
              </div>
              <img
                src={imageUrl('medical/clearview/eyewear-display.png')}
                alt="Curated eyewear display"
                className="h-56 w-full rounded-[1.5rem] object-cover shadow-xl shadow-black/18"
              />
            </div>

            <div className="relative order-1 lg:order-2">
              <img
                src={imageUrl('medical/clearview/frame-styling.png')}
                alt="Optical stylist helping with eyewear selection"
                className="h-[30rem] w-full rounded-[1.75rem] object-cover shadow-2xl shadow-black/24 md:h-[37rem]"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-[1.25rem] border border-white/72 bg-white/94 p-5 text-[#1e2a36] shadow-xl shadow-black/16 backdrop-blur">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase text-[#2f6f9f]">Visit flow</p>
                    <p className="mt-1 text-lg font-black">From exam to frame pickup</p>
                  </div>
                  <Glasses aria-hidden="true" className="shrink-0 text-[#2f6f9f]" size={28} />
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {visitFlow.map((step, index) => (
                    <div key={step} className="rounded-2xl bg-[#f5faf9] p-3 ring-1 ring-[#dbe7e6]">
                      <span className="text-xs font-black text-[#9a8a64]">0{index + 1}</span>
                      <p className="mt-1 text-sm font-black text-[#1e2a36]">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="eye-exams" className="bg-[#f7fbfa] py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
            <div className="lg:sticky lg:top-36">
              <p className="text-sm font-black uppercase text-[#2f6f9f]">Services</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#1e2a36] md:text-5xl">
                Eye care and eyewear in one clear path.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5e6c78]">
                Patients can move from exam questions to prescription updates, contact lens guidance, and frame
                selection without sorting through a complicated care menu.
              </p>
              <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-[#dbe7e6] bg-white shadow-xl shadow-[#1e2a36]/8">
                <img
                  src={imageUrl('medical/clearview/eye-exam.png')}
                  alt="ClearView Optometry eye exam room"
                  className="h-72 w-full object-cover"
                />
                <div className="grid grid-cols-3 divide-x divide-[#dbe7e6] text-center">
                  {['Exam', 'Lens', 'Frames'].map((item) => (
                    <div key={item} className="p-4">
                      <p className="text-sm font-black text-[#2f6f9f]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              {services.map(({ title, text, icon, image }, index) => (
                <article
                  key={title}
                  className="group grid gap-4 rounded-[1.35rem] border border-[#dbe7e6] bg-white p-4 shadow-sm shadow-[#1e2a36]/5 transition duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-[#1e2a36]/8 sm:grid-cols-[10rem_1fr]"
                >
                  <div className="relative h-40 overflow-hidden rounded-[1rem] sm:h-full">
                    <img src={imageUrl(image)} alt="" className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                    <span className="absolute left-3 top-3 rounded-full bg-white/92 px-3 py-1 text-xs font-black text-[#2f6f9f] shadow-sm">
                      0{index + 1}
                    </span>
                  </div>
                  <div className="flex gap-4 p-1 sm:p-3">
                    <IconTile icon={icon} />
                    <div>
                      <h3 className="text-2xl font-black text-[#1e2a36]">{title}</h3>
                      <p className="mt-2 text-sm leading-7 text-[#5e6c78]">{text}</p>
                      <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#2f6f9f] hover:text-[#1e2a36]">
                        Plan this visit <ArrowRight aria-hidden="true" size={17} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <img
            src={imageUrl('medical/clearview/exam-room.png')}
            alt="ClearView Optometry exam room"
            className="h-[34rem] w-full rounded-[1.75rem] object-cover shadow-xl shadow-[#1e2a36]/9"
          />
          <div>
            <p className="text-sm font-black uppercase text-[#2f6f9f]">Eye exam flow</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#1e2a36] md:text-5xl">
              A visit designed to feel clear.
            </h2>
            <div className="mt-8 grid gap-4">
              {examFlow.map(([title, text], index) => (
                <article key={title} className="flex gap-4 rounded-[1.35rem] border border-[#dbe7e6] bg-[#f7fbfa] p-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#d9c49e] text-sm font-black text-[#1e2a36]">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-black text-[#1e2a36]">{title}</h3>
                    <p className="mt-2 text-sm leading-7 text-[#5e6c78]">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="eyewear" className="overflow-hidden bg-[#111d27] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase text-[#d9c49e]">Eyewear retail</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Frames that fit your face, style, and day-to-day life.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/72">
                The optical experience keeps frame selection visual, easy to compare, and supported by practical styling
                guidance.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {['Fit first', 'Style guidance', 'Daily comfort'].map((item) => (
                  <div key={item} className="rounded-2xl bg-white/10 p-4 text-sm font-black text-white/82 ring-1 ring-white/14">
                    <Glasses aria-hidden="true" className="mb-2 text-[#d9c49e]" size={19} />
                    {item}
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <CTAButton href="#contact" size="lg" className="bg-[#d9c49e] text-[#111d27] hover:bg-white">
                  Get Styling Help
                </CTAButton>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <article className="group overflow-hidden rounded-[1.75rem] bg-white text-[#1e2a36] shadow-2xl shadow-black/18 sm:col-span-2">
                <div className="grid gap-0 md:grid-cols-[1.08fr_0.92fr]">
                  <img
                    src={imageUrl('medical/clearview/retail-frames.png')}
                    alt="Curated eyeglass frame display"
                    className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 md:h-full"
                  />
                  <div className="p-6 md:p-8">
                    <p className="text-xs font-black uppercase text-[#2f6f9f]">Featured frame path</p>
                    <h3 className="mt-3 text-3xl font-black leading-tight">Start with the way you wear them.</h3>
                    <p className="mt-4 text-sm leading-7 text-[#5e6c78]">
                      Compare everyday, minimal, bold, and sunwear options with a stylist who can help narrow the wall
                      into practical choices.
                    </p>
                    <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#2f6f9f] hover:text-[#1e2a36]">
                      View Frames <ArrowRight aria-hidden="true" size={17} />
                    </a>
                  </div>
                </div>
              </article>

              {frameCategories.map(([title, text, image, cta]) => (
                <article key={title} className="group overflow-hidden rounded-[1.5rem] bg-white/10 ring-1 ring-white/14 backdrop-blur">
                  <img src={imageUrl(image)} alt="" className="h-44 w-full object-cover opacity-92 transition duration-500 group-hover:scale-105" />
                  <div className="p-5">
                    <h3 className="text-xl font-black text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-6 text-white/68">{text}</p>
                    <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[#d9c49e] hover:text-white">
                      {cta} <ArrowRight aria-hidden="true" size={17} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="doctors" className="bg-[#eef7f8] py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#2f6f9f]">Doctors and styling support</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#1e2a36] md:text-5xl">
              Guidance from exam room to frame wall.
            </h2>
            <img
              src={imageUrl('medical/clearview/optometry-team.png')}
              alt="ClearView Optometry care team"
              className="mt-8 h-80 w-full rounded-[1.75rem] object-cover shadow-xl shadow-[#1e2a36]/9"
            />
          </div>
          <div className="grid gap-5">
            {providers.map(({ name, role, bio }) => (
              <article key={name} className="rounded-[1.5rem] border border-[#d1e5e8] bg-white p-6 shadow-sm shadow-[#1e2a36]/5">
                <h3 className="text-2xl font-black text-[#1e2a36]">{name}</h3>
                <p className="mt-1 text-sm font-black text-[#2f6f9f]">{role}</p>
                <p className="mt-4 text-sm leading-7 text-[#5e6c78]">{bio}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="visit-info" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase text-[#2f6f9f]">Visit details</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#1e2a36] md:text-5xl">
              Know what to bring and what comes next.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visitDetails.map(([title, text]) => (
              <article key={title} className="rounded-[1.35rem] border border-[#dbe7e6] bg-white p-5 shadow-sm shadow-[#1e2a36]/5">
                <IconTile icon={title.includes('Contact') ? CheckCircle : title.includes('pickup') ? ShoppingBag : FileText} />
                <h3 className="mt-5 text-xl font-black text-[#1e2a36]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5e6c78]">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="contacts" className="bg-white py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <img
            src={imageUrl('medical/clearview/contact-lens-care.png')}
            alt="Contact lens care guidance"
            className="h-[34rem] w-full rounded-[1.75rem] object-cover shadow-xl shadow-[#1e2a36]/9"
          />
          <div>
            <p className="text-sm font-black uppercase text-[#2f6f9f]">Contacts</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#1e2a36] md:text-5xl">
              Contact lens care with clear guidance.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5e6c78]">
              Contact lens appointments can include fittings, follow-up timing, comfort questions, care routines,
              prescription updates, and practical next steps for daily use.
            </p>
            <p className="mt-5 rounded-2xl border border-[#dbe7e6] bg-[#f7fbfa] p-5 text-sm leading-7 text-[#5e6c78]">
              For sudden or urgent vision changes, contact a licensed eye care professional or emergency services.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-[#1e2a36] py-20 text-white md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#d9c49e]">Appointment access</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Book the right vision visit without the guesswork.
            </h2>
            <div className="mt-8">
              <CTAButton href="#contact" size="lg" className="bg-[#d9c49e] text-[#1e2a36] hover:bg-white">
                Book Eye Exam
              </CTAButton>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {appointmentTypes.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/14">
                <Calendar aria-hidden="true" className="text-[#d9c49e]" size={20} />
                <span className="font-bold">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="reviews" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#2f6f9f]">Reviews</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#1e2a36] md:text-5xl">
                Calm visits, clearer choices.
              </h2>
            </div>
            <img
              src={imageUrl('medical/clearview/appointment.png')}
              alt="ClearView Optometry appointment area"
              className="h-56 w-full rounded-[1.5rem] object-cover shadow-xl shadow-[#1e2a36]/9"
            />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map(({ name, quote }) => (
              <blockquote key={name} className="rounded-[1.5rem] border border-[#dbe7e6] bg-white p-7 shadow-sm shadow-[#1e2a36]/5">
                <p className="text-5xl font-black leading-none text-[#d9c49e]">&ldquo;</p>
                <p className="mt-2 text-lg font-bold leading-8 text-[#1e2a36]">{quote}</p>
                <footer className="mt-6 text-sm font-black uppercase text-[#2f6f9f]">{name}</footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section id="contact" className="relative isolate overflow-hidden bg-[#1e2a36] py-20 text-white md:py-28">
        <img
          src={imageUrl('medical/clearview/cta.png')}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(30,42,54,0.96),rgba(30,42,54,0.72))]" />
        <Container className="max-w-5xl">
          <p className="text-sm font-black uppercase text-[#d9c49e]">Start here</p>
          <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Ready for clearer next steps?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">
            Start with a simple eye exam and get practical guidance for prescriptions, eyewear, contact lenses, and
            ongoing vision care.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton href="mailto:hello@clearview.example" size="lg" className="bg-[#d9c49e] text-[#1e2a36] hover:bg-white">
              Book Eye Exam
            </CTAButton>
            <CTAButton
              href="#eyewear"
              variant="outline"
              size="lg"
              trailingIcon={<ArrowRight aria-hidden="true" size={20} />}
              className="border-white/34 bg-white/8 text-white hover:bg-white/14 hover:text-white"
            >
              Explore Eyewear
            </CTAButton>
          </div>
        </Container>
      </section>

      <footer className="bg-[#121b24] py-12 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.15fr_0.85fr_1fr]">
            <div>
              <h2 className="text-2xl font-black">ClearView Optometry</h2>
              <p className="mt-3 max-w-md leading-7 text-white/68">
                Eye exams and eyewear retail with patient-first guidance.
              </p>
            </div>
            <nav aria-label="Footer navigation" className="grid gap-2 text-sm font-bold text-white/72">
              {['Eye Exams', 'Eyewear', 'Contacts', 'Doctors', 'Visit Info', 'Reviews', 'Contact', 'Privacy'].map((item) => (
                <a
                  key={item}
                  href={
                    item === 'Eye Exams'
                      ? '#eye-exams'
                      : item === 'Eyewear'
                        ? '#eyewear'
                        : item === 'Contacts'
                          ? '#contacts'
                          : item === 'Doctors'
                            ? '#doctors'
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
                <MapPin aria-hidden="true" className="mt-0.5 shrink-0 text-[#d9c49e]" size={18} />
                <span>188 ClearView Street, Suite 210</span>
              </p>
              <p className="flex gap-3">
                <Clock aria-hidden="true" className="mt-0.5 shrink-0 text-[#d9c49e]" size={18} />
                <span>Monday-Friday, 9 AM-6 PM</span>
              </p>
              <p className="flex gap-3">
                <Calendar aria-hidden="true" className="mt-0.5 shrink-0 text-[#d9c49e]" size={18} />
                <span>Saturday, 10 AM-3 PM</span>
              </p>
              <p className="flex gap-3">
                <Phone aria-hidden="true" className="mt-0.5 shrink-0 text-[#d9c49e]" size={18} />
                <a href="tel:5550169084" className="hover:text-white">(555) 016-9084</a>
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  )
}
