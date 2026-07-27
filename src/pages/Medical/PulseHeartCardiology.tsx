import {
  Activity,
  ArrowRight,
  CalendarCheck,
  CheckCircle,
  ClipboardCheck,
  Clock,
  FileText,
  Gauge,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
  Stethoscope,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, CTAButton, SubWebsiteNav } from "../../components";
import { imageUrl } from "../../assets/optimized";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Diagnostics", href: "#diagnostics" },
  { label: "Specialists", href: "#specialists" },
  { label: "Visit Info", href: "#visit-info" },
  { label: "Resources", href: "#resources" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const trustPoints = [
  "Specialist cardiology care",
  "Diagnostic guidance",
  "Clear next steps",
];

const services: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: "Heart Health Consultations",
    text: "Specialist conversations for symptoms, history, referrals, questions, and care planning.",
    icon: HeartPulse,
  },
  {
    title: "Diagnostic Testing Guidance",
    text: "Plain-language support for understanding which diagnostic steps may be discussed.",
    icon: ClipboardCheck,
  },
  {
    title: "ECG / EKG Testing",
    text: "Sample website content for electrocardiogram visit guidance and result review conversations.",
    icon: Activity,
  },
  {
    title: "Blood Pressure Monitoring",
    text: "Practical visit support for tracking patterns, questions, and follow-up planning.",
    icon: Gauge,
  },
  {
    title: "Preventive Cardiology",
    text: "Care conversations focused on risk questions, screening discussions, and long-term planning.",
    icon: ShieldCheck,
  },
  {
    title: "Follow-Up Care",
    text: "Clear review of results, next steps, referral direction, or ongoing specialist care questions.",
    icon: CalendarCheck,
  },
];

const diagnosticFlow = [
  [
    "Share your concerns",
    "Tell the team about symptoms, history, questions, or referral needs.",
  ],
  [
    "Review the right tests",
    "Your provider explains which diagnostic steps may be appropriate and why.",
  ],
  [
    "Understand the results",
    "Results are reviewed in plain language with practical next steps.",
  ],
  [
    "Plan follow-up care",
    "Leave with guidance for monitoring, referrals, treatment discussions, or ongoing care.",
  ],
];

const diagnostics = [
  "ECG / EKG",
  "Echocardiogram discussion",
  "Blood pressure checks",
  "Rhythm monitoring guidance",
  "Preventive screening conversations",
  "Referral coordination",
];

const progressCards = [
  ["Before visit", "Prepare questions and referral details", "76%"],
  ["During consultation", "Review concerns with a specialist", "58%"],
  ["Diagnostic review", "Understand testing conversations", "68%"],
  ["Follow-up plan", "Clarify monitoring and next steps", "46%"],
];

const providers = [
  {
    name: "Dr. Adrian Cole",
    role: "Cardiologist",
    bio: "Adrian focuses on calm specialist consultations, diagnostic conversations, and clear care planning.",
  },
  {
    name: "Dr. Nina Patel",
    role: "Preventive Cardiology",
    bio: "Nina helps patients understand prevention-focused visits, screening questions, and follow-up planning.",
  },
  {
    name: "Grace Morgan, NP",
    role: "Cardiology Care Support",
    bio: "Grace supports visit preparation, result-review conversations, and practical next-step guidance.",
  },
];

const environmentPoints = [
  "Specialist consultation rooms",
  "Diagnostic review support",
  "Clear follow-up guidance",
];

const visitDetails = [
  [
    "What to bring",
    "Bring referral details, medication list, recent results, questions, and payment information.",
  ],
  [
    "Referral questions",
    "Contact the practice if you are unsure whether referral details are needed before booking.",
  ],
  [
    "First consultation",
    "Your first visit may review concerns, history, prior results, and possible diagnostic paths.",
  ],
  [
    "Diagnostic testing",
    "Testing conversations should be reviewed with the practice before your visit.",
  ],
  [
    "Follow-up visits",
    "Follow-ups can review results, monitoring questions, referrals, or ongoing care planning.",
  ],
  [
    "Payment and plan questions",
    "Contact the practice to review payment and plan details before your visit.",
  ],
];

const resources = [
  "Preparing for a cardiology visit",
  "Questions to ask your specialist",
  "Understanding diagnostic next steps",
  "Blood pressure tracking basics",
  "Follow-up visit preparation",
  "When to seek urgent help",
];

const appointmentTypes = [
  "Specialist consultation",
  "Diagnostic review",
  "Preventive heart visit",
  "Blood pressure follow-up",
  "Referral question",
];

const reviews = [
  {
    name: "Daniel",
    quote:
      "The team explained the testing process clearly and helped me understand what the next step would be.",
  },
  {
    name: "Mina",
    quote:
      "I appreciated how calmly the provider walked through the visit and follow-up details.",
  },
  {
    name: "Owen",
    quote:
      "The appointment felt organized, and the diagnostic conversation was easy to follow.",
  },
];

const CircleIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
  <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-white text-[#b31942] shadow-sm shadow-[#621526]/10 ring-1 ring-[#f0c6cf]">
    <Icon aria-hidden="true" size={24} strokeWidth={2} />
  </span>
);

export function PulseHeartCardiology() {
  return (
    <main className="bg-[#f7f9fb] text-[#172232]">
      <SubWebsiteNav
        brand="PulseHeart Cardiology"
        links={navLinks}
        ctaLabel="Book Consultation"
        ctaHref="#contact"
        collectionPath="/medical"
        className="mx-auto mt-3 max-w-[94rem] rounded-full border border-white/80 bg-white/92 text-[#172232] shadow-xl shadow-[#172232]/10 ring-1 ring-[#dce5ea]"
        brandClassName="text-[#8e1730]"
        linkClassName="rounded-full px-3 py-2 text-[#5d6976] transition hover:bg-[#f8e7ec] hover:text-[#8e1730]"
        activeLinkClassName="active bg-[#f8e7ec] text-[#8e1730]"
        ctaClassName="bg-[#8e1730] text-white shadow-lg shadow-[#8e1730]/20 hover:bg-[#172b49]"
        activeCtaClassName="active ring-2 ring-[#f2b8c3] ring-offset-2"
        menuButtonClassName="border-[#dce5ea] bg-[#f8e7ec] text-[#8e1730] hover:bg-[#f4d6de]"
        mobilePanelClassName="border border-[#dce5ea] bg-white/96"
      />

      <section className="relative isolate -mt-16 overflow-hidden bg-[#eef4f8] pt-32 md:pt-36">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_16%_20%,rgba(179,25,66,0.2),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(165,218,211,0.42),transparent_24%),linear-gradient(135deg,#ffffff_0%,#f7f9fb_52%,#edf4f9_100%)]" />
        <div className="absolute -left-24 top-28 -z-10 h-80 w-80 rounded-full border-[44px] border-[#f0c6cf]/45" />
        <div className="absolute -right-20 bottom-16 -z-10 h-96 w-96 rounded-full border-[52px] border-[#d8e8f0]/70" />
        <Container className="grid min-h-[calc(100vh-7rem)] gap-10 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#f0c6cf] bg-white/78 px-4 py-2 text-sm font-black text-[#8e1730] shadow-sm shadow-[#621526]/6">
              <HeartPulse aria-hidden="true" size={17} /> Specialist care and
              diagnostic clarity
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.98] tracking-normal text-[#172232] md:text-7xl">
              Specialist heart care with clearer answers.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5d6976] md:text-xl">
              PulseHeart Cardiology helps patients understand symptoms,
              screenings, diagnostic options, and next steps with a specialist
              team focused on clarity, comfort, and ongoing heart health
              guidance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton
                href="#contact"
                size="lg"
                className="rounded-full bg-[#8e1730] text-white hover:bg-[#172b49]"
              >
                Book Consultation
              </CTAButton>
              <CTAButton
                href="#diagnostics"
                variant="outline"
                size="lg"
                trailingIcon={<ArrowRight aria-hidden="true" size={20} />}
                className="rounded-full border-[#c64660] bg-white/70 text-[#8e1730] hover:bg-[#8e1730] hover:text-white"
              >
                View Diagnostics
              </CTAButton>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div
                  key={point}
                  className="rounded-[1.5rem] border border-[#dce5ea] bg-white/70 p-4 text-sm font-bold text-[#5d6976] shadow-sm shadow-[#172232]/5"
                >
                  <CheckCircle
                    aria-hidden="true"
                    className="mb-2 text-[#2c9b91]"
                    size={18}
                  />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 top-1/2 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f0c6cf]" />
            <div className="absolute left-1/2 top-1/2 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d6e5ec]" />
            <img
              src={imageUrl("medical/pulseheart/hero.webp")}
              alt="Cardiology consultation in a specialist clinic"
              className="relative mx-auto h-[36rem] w-full max-w-[36rem] rounded-full object-cover shadow-2xl shadow-[#621526]/16"
            />
            <div className="absolute left-3 top-12 rounded-[1.5rem] border border-white/70 bg-white/88 p-4 shadow-xl shadow-[#172232]/10 backdrop-blur">
              <p className="text-xs font-black uppercase text-[#8e1730]">
                Pulse check
              </p>
              <p className="mt-1 text-2xl font-black text-[#172232]">
                Rhythm UI
              </p>
            </div>
            <div className="absolute bottom-10 right-3 rounded-[1.5rem] border border-white/70 bg-white/88 p-4 shadow-xl shadow-[#172232]/10 backdrop-blur">
              <p className="text-xs font-black uppercase text-[#8e1730]">
                Diagnostic review
              </p>
              <p className="mt-1 text-sm font-bold text-[#5d6976]">
                Abstract status only
              </p>
            </div>
            <div className="absolute bottom-5 left-5 right-5 mx-auto max-w-sm rounded-[2rem] bg-[#172b49]/92 p-5 text-white shadow-2xl shadow-[#172232]/20">
              <p className="text-xs font-black uppercase text-[#f2b8c3]">
                Follow-up plan
              </p>
              <div className="mt-3 flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#2c9b91]" />
                <span className="text-sm font-bold text-white/78">
                  Clear next-step pathway
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <p className="text-sm font-black uppercase text-[#8e1730]">
              Services
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#172232] md:text-6xl">
              Cardiology services with clear next steps.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ title, text, icon }) => (
              <article
                key={title}
                className="relative overflow-hidden rounded-[2rem] border border-[#dce5ea] bg-[#f7f9fb] p-6 shadow-sm shadow-[#172232]/5"
              >
                <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-[#f8e7ec]" />
                <CircleIcon icon={icon} />
                <h3 className="relative mt-6 text-2xl font-black text-[#172232]">
                  {title}
                </h3>
                <p className="relative mt-3 text-sm leading-7 text-[#5d6976]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="diagnostics"
        className="bg-[#172b49] py-20 text-white md:py-28"
      >
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#f2b8c3]">
                Diagnostic clarity
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-6xl">
                From concern to clearer direction.
              </h2>
            </div>
            <img
              src={imageUrl("medical/pulseheart/diagnostic-clarity.webp")}
              alt="Cardiology diagnostic clarity review"
              className="h-60 w-full rounded-[2rem] object-cover shadow-xl shadow-black/18"
            />
          </div>
          <div className="grid gap-5 lg:grid-cols-4">
            {diagnosticFlow.map(([title, text], index) => (
              <article
                key={title}
                className="relative rounded-[2rem] border border-white/14 bg-white/8 p-6 text-center shadow-xl shadow-black/10"
              >
                <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#b31942] text-lg font-black text-white ring-8 ring-white/8">
                  {index + 1}
                </span>
                <h3 className="mt-6 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/66">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f9fb] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#8e1730]">
                Diagnostic services
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#172232] md:text-5xl">
                Testing support in a calm specialist setting.
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={imageUrl("medical/pulseheart/ecg.webp")}
                alt="ECG review display"
                className="h-56 w-full rounded-[2rem] object-cover shadow-xl shadow-[#172232]/10"
              />
              <img
                src={imageUrl("medical/pulseheart/heart-screening.webp")}
                alt="Heart screening conversation"
                className="h-56 w-full rounded-[2rem] object-cover shadow-xl shadow-[#172232]/10"
              />
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {diagnostics.map((item) => (
              <article
                key={item}
                className="rounded-[2rem] border border-[#dce5ea] bg-white p-6 shadow-sm shadow-[#172232]/5"
              >
                <Activity
                  aria-hidden="true"
                  className="text-[#b31942]"
                  size={24}
                />
                <h3 className="mt-5 text-xl font-black text-[#172232]">
                  {item}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5d6976]">
                  Sample website content for specialist diagnostic conversations
                  and practical next-step planning.
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase text-[#8e1730]">
              Clarity dashboard
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#172232] md:text-5xl">
              Know what happens before, during, and after your visit.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {progressCards.map(([title, text, value]) => (
              <article
                key={title}
                className="rounded-[2rem] border border-[#dce5ea] bg-[#f7f9fb] p-6 text-center"
              >
                <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border-[10px] border-[#f0c6cf] bg-white text-2xl font-black text-[#8e1730]">
                  {value}
                </div>
                <h3 className="mt-6 text-xl font-black text-[#172232]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5d6976]">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="specialists" className="bg-[#eef4f8] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#8e1730]">
                Specialists
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#172232] md:text-6xl">
                Specialists focused on calm, clear guidance.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#5d6976]">
              Provider introductions stay focused on communication, diagnostic
              conversations, and practical next steps.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
            <img
              src={imageUrl("medical/pulseheart/team.webp")}
              alt="PulseHeart Cardiology specialist team"
              className="h-full min-h-[32rem] w-full rounded-[2rem] object-cover shadow-xl shadow-[#172232]/10"
            />
            <div className="grid gap-4">
              {providers.map(({ name, role, bio }) => (
                <article
                  key={name}
                  className="rounded-[2rem] border border-[#dce5ea] bg-white p-6 shadow-sm shadow-[#172232]/5"
                >
                  <Users
                    aria-hidden="true"
                    className="text-[#8e1730]"
                    size={24}
                  />
                  <h3 className="mt-5 text-2xl font-black text-[#172232]">
                    {name}
                  </h3>
                  <p className="mt-1 text-sm font-black text-[#8e1730]">
                    {role}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#5d6976]">{bio}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <img
            src={imageUrl("medical/pulseheart/room.webp")}
            alt="Modern cardiology diagnostic room"
            className="h-[34rem] w-full rounded-[2rem] object-cover shadow-xl shadow-[#172232]/10"
          />
          <div>
            <p className="text-sm font-black uppercase text-[#8e1730]">
              Clinic environment
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#172232] md:text-5xl">
              Modern diagnostics in a reassuring space.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5d6976]">
              A calm specialist setting for consultations, screenings,
              diagnostic conversations, and follow-up planning.
            </p>
            <div className="mt-8 grid gap-3">
              {environmentPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-full border border-[#dce5ea] bg-[#f7f9fb] p-4"
                >
                  <CheckCircle
                    aria-hidden="true"
                    className="text-[#2c9b91]"
                    size={20}
                  />
                  <span className="font-black text-[#172232]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="visit-info" className="bg-[#f7f9fb] py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase text-[#8e1730]">
              Visit info
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#172232] md:text-5xl">
              Practical details for specialist visits.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visitDetails.map(([title, text]) => (
              <article
                key={title}
                className="rounded-[2rem] border border-[#dce5ea] bg-white p-6"
              >
                <FileText
                  aria-hidden="true"
                  className="text-[#8e1730]"
                  size={22}
                />
                <h3 className="mt-5 text-xl font-black text-[#172232]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5d6976]">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="resources" className="bg-white py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#8e1730]">
                Patient resources
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#172232] md:text-5xl">
                Heart care resources that are easier to understand.
              </h2>
            </div>
            <img
              src={imageUrl("medical/pulseheart/patient-resources.webp")}
              alt="Heart care patient resources"
              className="h-56 w-full rounded-[2rem] object-cover shadow-xl shadow-[#172232]/10"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <article
                key={resource}
                className="rounded-[2rem] border border-[#dce5ea] bg-[#f7f9fb] p-6 shadow-sm shadow-[#172232]/5"
              >
                <ShieldCheck
                  aria-hidden="true"
                  className="text-[#8e1730]"
                  size={24}
                />
                <h3 className="mt-5 text-xl font-black text-[#172232]">
                  {resource}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5d6976]">
                  A plain-language resource prompt for visit preparation and
                  follow-up conversations.
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="reviews" className="bg-[#eef4f8] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#8e1730]">
                Reviews
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#172232] md:text-5xl">
                Patients value clear specialist conversations.
              </h2>
            </div>
            <img
              src={imageUrl("medical/pulseheart/specialist-consultation.webp")}
              alt="Cardiology specialist consultation"
              className="h-56 w-full rounded-[2rem] object-cover shadow-xl shadow-[#172232]/10"
            />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map(({ name, quote }) => (
              <blockquote
                key={name}
                className="rounded-[2rem] border border-[#dce5ea] bg-white p-7 shadow-sm shadow-[#172232]/5"
              >
                <p className="text-5xl font-black leading-none text-[#b31942]">
                  &ldquo;
                </p>
                <p className="mt-2 text-lg font-bold leading-8 text-[#172232]">
                  {quote}
                </p>
                <footer className="mt-6 text-sm font-black uppercase text-[#8e1730]">
                  {name}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#8e1730]">
              Appointment access
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#172232] md:text-5xl">
              Book the right heart-care visit with less uncertainty.
            </h2>
            <img
              src={imageUrl("medical/pulseheart/appointment.webp")}
              alt="Cardiology appointment access"
              className="mt-7 h-56 w-full rounded-[2rem] object-cover shadow-xl shadow-[#172232]/10"
            />
            <div className="mt-8">
              <CTAButton
                href="#contact"
                size="lg"
                className="rounded-full bg-[#8e1730] text-white hover:bg-[#172b49]"
              >
                Book Consultation
              </CTAButton>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {appointmentTypes.map((type) => (
              <div
                key={type}
                className="flex items-center gap-3 rounded-full border border-[#dce5ea] bg-[#f7f9fb] p-4"
              >
                <CalendarCheck
                  aria-hidden="true"
                  className="text-[#8e1730]"
                  size={20}
                />
                <span className="font-bold text-[#172232]">{type}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="contact"
        className="relative isolate overflow-hidden bg-[#172b49] py-20 text-white md:py-28"
      >
        <img
          src={imageUrl("medical/pulseheart/cta.webp")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(23,43,73,0.96),rgba(23,43,73,0.72))]" />
        <Container className="max-w-5xl">
          <p className="text-sm font-black uppercase text-[#f2b8c3]">
            Start here
          </p>
          <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Start with heart care that explains the next step.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">
            Book a consultation with PulseHeart Cardiology and get specialist
            guidance, practical visit details, and clearer direction for
            diagnostic care and follow-up.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton
              href="mailto:hello@pulseheart.example"
              size="lg"
              className="rounded-full bg-[#f2b8c3] text-[#172232] hover:bg-white"
            >
              Book Consultation
            </CTAButton>
            <CTAButton
              href="#diagnostics"
              variant="outline"
              size="lg"
              trailingIcon={<ArrowRight aria-hidden="true" size={20} />}
              className="rounded-full border-white/30 bg-white/8 text-white hover:bg-white/14 hover:text-white"
            >
              View Diagnostics
            </CTAButton>
          </div>
          <p className="mt-6 text-sm leading-6 text-white/70">
            If you are experiencing chest pain, severe shortness of breath,
            sudden weakness, or a life-threatening emergency, call local
            emergency services immediately.
          </p>
        </Container>
      </section>

      <footer className="bg-[#0c1828] py-12 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <h2 className="text-3xl font-black">PulseHeart Cardiology</h2>
              <p className="mt-3 max-w-md leading-7 text-white/68">
                Specialist care and diagnostic clarity for patient-first heart
                health.
              </p>
              <p className="mt-5 text-sm leading-6 text-white/58">
                If you are experiencing chest pain, severe shortness of breath,
                sudden weakness, or a life-threatening emergency, call local
                emergency services immediately.
              </p>
            </div>
            <nav
              aria-label="Footer navigation"
              className="grid gap-2 text-sm font-bold text-white/72"
            >
              {[
                "Services",
                "Diagnostics",
                "Specialists",
                "Visit Info",
                "Resources",
                "Reviews",
                "Contact",
                "Privacy",
              ].map((item) => (
                <a
                  key={item}
                  href={
                    item === "Services"
                      ? "#services"
                      : item === "Diagnostics"
                        ? "#diagnostics"
                        : item === "Specialists"
                          ? "#specialists"
                          : item === "Visit Info"
                            ? "#visit-info"
                            : item === "Resources"
                              ? "#resources"
                              : item === "Reviews"
                                ? "#reviews"
                                : "#contact"
                  }
                  className="hover:text-white"
                >
                  {item}
                </a>
              ))}
            </nav>
            <div className="grid gap-3 text-sm text-white/72">
              <p className="flex gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#f2b8c3]"
                  size={18}
                />
                <span>530 Pulse Avenue, Suite 240</span>
              </p>
              <p className="flex gap-3">
                <Clock
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#f2b8c3]"
                  size={18}
                />
                <span>Monday-Friday, 8 AM-5 PM</span>
              </p>
              <p className="flex gap-3">
                <CalendarCheck
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#f2b8c3]"
                  size={18}
                />
                <span>Saturday, 9 AM-12 PM</span>
              </p>
              <p className="flex gap-3">
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#f2b8c3]"
                  size={18}
                />
                <a href="tel:5550147318" className="hover:text-white">
                  (555) 014-7318
                </a>
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
