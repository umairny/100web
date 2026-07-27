import {
  Activity,
  ArrowRight,
  Calendar,
  CheckCircle,
  ClipboardList,
  Clock,
  FileText,
  Heart,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Stethoscope,
  Video,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, CTAButton, SubWebsiteNav } from "../../components";
import { imageUrl } from "../../assets/optimized";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Care Team", href: "#care-team" },
  { label: "Telehealth", href: "#telehealth" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const trustBadges = [
  { label: "Same-week appointments", icon: Calendar },
  { label: "Telehealth available", icon: Video },
  { label: "Plain-language guidance", icon: MessageCircle },
];

const services: Array<{
  title: string;
  text: string;
  icon: LucideIcon;
  image: string;
}> = [
  {
    title: "Preventive Visits",
    text: "Annual checkups, wellness conversations, and screening guidance explained in everyday language.",
    icon: Heart,
    image: "medical/harbor/preventive-care.webp",
  },
  {
    title: "Same-Week Care",
    text: "Support for minor concerns, medication questions, and follow-up needs with clearer scheduling.",
    icon: Stethoscope,
    image: "medical/harbor/same-week-care.webp",
  },
  {
    title: "Telehealth Appointments",
    text: "Secure virtual visits for follow-ups, planning conversations, and questions from home.",
    icon: Video,
    image: "medical/harbor/telehealth.webp",
  },
  {
    title: "Long-Term Health Plans",
    text: "Practical plans for prevention, routines, referrals, and appointments that are easy to follow.",
    icon: ClipboardList,
    image: "medical/harbor/health-plan.webp",
  },
  {
    title: "Lab & Screening Guidance",
    text: "Plain-language help understanding what screenings are for and what steps may come after results.",
    icon: FileText,
    image: "medical/harbor/doctor-consultation.webp",
  },
  {
    title: "Follow-Up Care",
    text: "Organized reminders and visit summaries so patients know what to do after an appointment.",
    icon: Activity,
    image: "medical/harbor/patient-support.webp",
  },
];

const steps = [
  {
    step: "01",
    title: "Schedule clearly",
    text: "Choose an in-person or virtual visit with simple appointment options.",
    image: "medical/harbor/mobile-scheduling.webp",
  },
  {
    step: "02",
    title: "Get plain-language guidance",
    text: "Meet with a care provider who explains your next steps clearly.",
    image: "medical/harbor/doctor-consultation.webp",
  },
  {
    step: "03",
    title: "Follow a care plan",
    text: "Leave with a practical plan for prevention, treatment, or follow-up.",
    image: "medical/harbor/health-plan.webp",
  },
];

const features = [
  {
    title: "Easy scheduling",
    text: "Clear visit types, useful reminders, and appointment options that make the first step feel manageable.",
    icon: Calendar,
  },
  {
    title: "Clear next steps",
    text: "Visit summaries focus on what matters now, what to watch for, and when to follow up.",
    icon: CheckCircle,
  },
  {
    title: "Calm ongoing support",
    text: "Long-term planning, care coordination, and practical guidance without unnecessary complexity.",
    icon: Shield,
  },
];

const telehealthItems = [
  "Follow-ups",
  "Medication questions",
  "Minor concerns",
  "Care planning",
];

const providers = [
  {
    name: "Dr. Maya Reynolds",
    role: "Family Medicine",
    bio: "Dr. Reynolds helps patients understand preventive care, everyday concerns, and practical follow-up plans.",
  },
  {
    name: "Dr. Aaron Patel",
    role: "Internal Medicine",
    bio: "Dr. Patel focuses on adult primary care conversations that feel organized, measured, and easy to revisit.",
  },
  {
    name: "Lena Brooks, NP",
    role: "Preventive Care",
    bio: "Lena supports wellness visits, screenings, and patient education with a warm, detail-oriented approach.",
  },
];

const reviews = [
  {
    name: "Nora",
    quote:
      "They explained everything clearly and helped me understand what to do next.",
  },
  {
    name: "Marcus",
    quote:
      "Scheduling felt simple, and the visit summary made follow-up steps easy to remember.",
  },
  {
    name: "Elena",
    quote:
      "The team was calm, kind, and careful with my questions from the first call.",
  },
];

const IconBadge = ({ icon: Icon }: { icon: LucideIcon }) => (
  <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#d9f2ef] text-[#0e7168] ring-1 ring-[#b9ddd8]">
    <Icon aria-hidden="true" size={22} strokeWidth={2.2} />
  </span>
);

export function HarborHealthClinic() {
  return (
    <main className="brand-motion bg-[#f7fbf9] text-[#14313f]">
      <SubWebsiteNav
        brand="Harbor Health Clinic"
        links={navLinks}
        ctaLabel="Book a Visit"
        ctaHref="#contact"
        collectionPath="/medical"
        className="mx-auto mt-3 max-w-[92rem] rounded-full border border-white/70 bg-white/90 text-[#14313f] shadow-xl shadow-[#14313f]/10 ring-1 ring-[#d8ebe8]/80"
        brandClassName="text-[#0a5d58]"
        linkClassName="rounded-full px-3 py-2 text-[#4c6670] transition hover:bg-[#effaf8] hover:text-[#0a5d58]"
        activeLinkClassName="active bg-[#effaf8] text-[#0a5d58]"
        ctaClassName="bg-[#102d3b] text-white shadow-lg shadow-[#102d3b]/18 hover:bg-[#0e7168]"
        activeCtaClassName="active ring-2 ring-[#bff3e9] ring-offset-2"
        menuButtonClassName="border-[#cce2df] bg-[#effaf8] text-[#0a5d58] hover:bg-[#d9f2ef]"
        mobilePanelClassName="border border-[#d8ebe8] bg-white/96"
      />

      <section className="relative isolate overflow-hidden bg-[#0f343d] pt-24 text-white md:pt-28">
        <img
          src={imageUrl("medical/harbor/bg.webp")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-20"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(8,31,38,0.95)_0%,rgba(8,31,38,0.78)_48%,rgba(8,31,38,0.32)_100%)]" />
        <Container className="grid min-h-[calc(100vh-6rem)] gap-10 py-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center lg:py-16">
          <div>
            <p className="inline-flex items-center rounded-full bg-white/12 px-4 py-2 text-sm font-black text-[#c9f4eb] ring-1 ring-white/16">
              Modern neighborhood primary care
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] tracking-normal md:text-7xl">
              Primary care that makes next steps feel simple.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
              Preventive visits, same-week care, telehealth, and long-term
              health plans from a modern neighborhood clinic built around
              clarity and comfort.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton
                href="#contact"
                size="lg"
                className="bg-[#bff3e9] text-[#102d3b] hover:bg-white"
              >
                Book a Visit
              </CTAButton>
              <CTAButton
                href="#services"
                variant="outline"
                size="lg"
                trailingIcon={<ArrowRight aria-hidden="true" size={20} />}
                className="border-white/30 bg-white/8 text-white hover:bg-white/14 hover:text-white"
              >
                View Services
              </CTAButton>
            </div>
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {trustBadges.map(({ label, icon: Icon }) => (
                <div
                  key={label}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-3 text-sm font-bold text-white/84 ring-1 ring-white/14"
                >
                  <Icon
                    aria-hidden="true"
                    className="shrink-0 text-[#bff3e9]"
                    size={20}
                  />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-[0.95fr_1.05fr] sm:items-end">
            <div className="space-y-4">
              <div className="overflow-hidden rounded-[2rem] bg-white/10 p-2 shadow-2xl shadow-black/20 ring-1 ring-white/16">
                <img
                  src={imageUrl("medical/harbor/hero.webp")}
                  alt="A bright and calm primary care clinic"
                  className="h-72 w-full rounded-[1.45rem] object-cover sm:h-[26rem]"
                />
              </div>
              <div className="rounded-3xl bg-white p-5 text-[#102d3b] shadow-xl shadow-black/14">
                <p className="text-sm font-black uppercase text-[#0e7168]">
                  First visit
                </p>
                <p className="mt-2 text-2xl font-black leading-tight">
                  Start with a clear reason, leave with a plan.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="overflow-hidden rounded-[2rem] bg-white/10 p-2 ring-1 ring-white/16">
                <img
                  src={imageUrl("medical/harbor/clinic-interior.webp")}
                  alt="A warm clinic interior with soft natural light"
                  className="h-56 w-full rounded-[1.45rem] object-cover sm:h-72"
                />
              </div>
              <div className="overflow-hidden rounded-[2rem] bg-white/10 p-2 ring-1 ring-white/16">
                <img
                  src={imageUrl("medical/harbor/doctor-consultation.webp")}
                  alt="A clinician having a calm consultation with a patient"
                  className="h-56 w-full rounded-[1.45rem] object-cover sm:h-80"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#0e7168]">
                Services
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#102d3b] md:text-5xl">
                Choose care by what you need today.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#526b74]">
              A more visual service menu helps patients quickly recognize the
              right path, then understand the next step without clinical
              clutter.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, text, icon, image }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-[1.75rem] bg-white shadow-sm shadow-[#14313f]/7 ring-1 ring-[#d8ebe8]"
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={imageUrl(image)}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-2xl bg-white/92 p-2 text-[#0e7168] shadow-lg shadow-[#14313f]/12">
                    {(() => {
                      const Icon = icon;
                      return <Icon aria-hidden="true" size={22} />;
                    })()}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-[#102d3b]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#526b74]">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="how-it-works" className="bg-white py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase text-[#0e7168]">
              How care works
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#102d3b] md:text-5xl">
              Three steps, shown before patients have to ask.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {steps.map(({ step, title, text, image }) => (
              <article
                key={title}
                className="rounded-[2rem] bg-[#f4fbfa] p-3 ring-1 ring-[#d8ebe8]"
              >
                <img
                  src={imageUrl(image)}
                  alt=""
                  className="h-56 w-full rounded-[1.45rem] object-cover"
                />
                <div className="p-5">
                  <p className="text-sm font-black uppercase text-[#0e7168]">
                    {step}
                  </p>
                  <h3 className="mt-3 text-2xl font-black text-[#102d3b]">
                    {title}
                  </h3>
                  <p className="mt-3 leading-7 text-[#526b74]">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="grid gap-4 sm:grid-cols-2">
            <img
              src={imageUrl("medical/harbor/mobile-scheduling.webp")}
              alt="A simple appointment scheduling experience on a mobile device"
              className="h-80 w-full rounded-[2rem] object-cover shadow-xl shadow-[#14313f]/10"
            />
            <img
              src={imageUrl("medical/harbor/patient-support.webp")}
              alt="A calm support conversation with a patient"
              className="h-80 w-full rounded-[2rem] object-cover shadow-xl shadow-[#14313f]/10 sm:mt-12"
            />
          </div>
          <div>
            <p className="text-sm font-black uppercase text-[#0e7168]">
              Organized care
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#102d3b] md:text-5xl">
              Care that feels organized from the first click.
            </h2>
            <div className="mt-8 grid gap-5">
              {features.map(({ title, text, icon }) => (
                <article
                  key={title}
                  className="flex gap-5 rounded-3xl border border-[#d8ebe8] bg-white p-5 shadow-sm shadow-[#14313f]/5"
                >
                  <IconBadge icon={icon} />
                  <div>
                    <h3 className="text-xl font-black text-[#102d3b]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#526b74]">
                      {text}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="telehealth"
        className="bg-[#0d5f63] py-20 text-white md:py-28"
      >
        <Container className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#bff3e9]">
              Telehealth
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Virtual care with the same calm next step.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/78">
              Secure visits from home can be convenient for follow-ups,
              medication questions, minor concerns, and care planning.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {telehealthItems.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/14"
                >
                  <CheckCircle
                    aria-hidden="true"
                    className="text-[#bff3e9]"
                    size={20}
                  />
                  <span className="font-bold">{item}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 rounded-2xl bg-white/10 p-4 text-sm leading-6 text-white/72 ring-1 ring-white/14">
              For emergencies, call local emergency services.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-[1fr_0.78fr]">
            <img
              src={imageUrl("medical/harbor/telehealth.webp")}
              alt="A patient using a secure telehealth visit from home"
              className="h-[32rem] w-full rounded-[2rem] object-cover shadow-2xl shadow-black/20"
            />
            <div className="grid gap-4">
              <img
                src={imageUrl("medical/harbor/health-plan.webp")}
                alt="A practical care planning conversation"
                className="h-60 w-full rounded-[2rem] object-cover shadow-xl shadow-black/14"
              />
              <div className="rounded-[2rem] bg-white p-6 text-[#102d3b]">
                <p className="text-sm font-black uppercase text-[#0e7168]">
                  After visit
                </p>
                <p className="mt-2 text-2xl font-black leading-tight">
                  Clear notes, follow-up timing, and support.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="care-team" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#0e7168]">
                Care team
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#102d3b] md:text-5xl">
                A team patients can place in the room.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#526b74]">
              Warm provider introductions pair with real clinic imagery, making
              the page feel more human and easier to trust.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              <img
                src={imageUrl("medical/harbor/care-team.webp")}
                alt="Harbor Health Clinic care team in a welcoming clinic setting"
                className="h-80 w-full rounded-[2rem] object-cover shadow-xl shadow-[#14313f]/10"
              />
              <img
                src={imageUrl("medical/harbor/clinic-interior.webp")}
                alt="A welcoming clinic interior"
                className="h-80 w-full rounded-[2rem] object-cover shadow-xl shadow-[#14313f]/10 sm:mt-12"
              />
            </div>
            <div className="grid gap-5">
              {providers.map(({ name, role, bio }) => (
                <article
                  key={name}
                  className="rounded-3xl border border-[#d8ebe8] bg-white p-6 shadow-sm shadow-[#14313f]/5"
                >
                  <h3 className="text-xl font-black text-[#102d3b]">{name}</h3>
                  <p className="mt-1 text-sm font-bold text-[#0e7168]">
                    {role}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#526b74]">{bio}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="reviews"
        className="border-y border-[#d8ebe8] bg-[#eef8f6] py-20 md:py-28"
      >
        <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#0e7168]">
              Patient reviews
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#102d3b] md:text-5xl">
              Clear answers can change the tone of a visit.
            </h2>
            <img
              src={imageUrl("medical/harbor/preventive-care.webp")}
              alt="A preventive care conversation"
              className="mt-8 h-72 w-full rounded-[2rem] object-cover shadow-xl shadow-[#14313f]/10"
            />
          </div>
          <div className="grid gap-5 md:grid-cols-3 lg:grid-cols-1">
            {reviews.map(({ name, quote }) => (
              <blockquote
                key={name}
                className="rounded-3xl bg-white p-7 shadow-sm shadow-[#14313f]/5 ring-1 ring-[#d8ebe8]"
              >
                <p className="text-5xl font-black leading-none text-[#8ac8c0]">
                  &ldquo;
                </p>
                <p className="mt-2 text-lg font-bold leading-8 text-[#102d3b]">
                  {quote}
                </p>
                <footer className="mt-6 text-sm font-black uppercase text-[#0e7168]">
                  {name}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section id="insurance" className="py-20 md:py-28">
        <Container className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="rounded-[2rem] border border-[#d8ebe8] bg-white p-8 shadow-xl shadow-[#14313f]/7 md:p-10">
            <p className="text-sm font-black uppercase text-[#0e7168]">
              Insurance and access
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#102d3b] md:text-5xl">
              Know appointment options before care begins.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#526b74]">
              We help patients understand appointment options, accepted plans,
              and next steps before care begins.
            </p>
            <div className="mt-8 grid gap-4">
              {[
                "Appointment options explained clearly",
                "Plan questions handled before the visit",
                "Next steps shared in plain language",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-3xl bg-[#fbf6ed] p-5 text-[#102d3b] ring-1 ring-[#eadfcf]"
                >
                  <Shield
                    aria-hidden="true"
                    className="text-[#638f58]"
                    size={22}
                  />
                  <p className="font-black">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <img
            src={imageUrl("medical/harbor/patient-support.webp")}
            alt="Clinic support staff helping a patient understand next steps"
            className="h-[34rem] w-full rounded-[2rem] object-cover shadow-xl shadow-[#14313f]/10"
          />
        </Container>
      </section>

      <section
        id="contact"
        className="relative isolate overflow-hidden bg-[#102d3b] py-20 text-white md:py-28"
      >
        <img
          src={imageUrl("medical/harbor/cta-care.webp")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-28"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(16,45,59,0.96),rgba(16,45,59,0.7))]" />
        <Container className="max-w-5xl">
          <p className="text-sm font-black uppercase text-[#bff3e9]">
            Book a visit
          </p>
          <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Ready for a simpler path into care?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">
            Start with a visit that gives you clear answers, practical next
            steps, and support that continues beyond the appointment.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton
              href="mailto:care@harborhealth.example"
              size="lg"
              className="bg-[#bff3e9] text-[#102d3b] hover:bg-white"
            >
              Book a Visit
            </CTAButton>
            <CTAButton
              href="tel:5550142840"
              variant="outline"
              size="lg"
              leadingIcon={<Phone aria-hidden="true" size={20} />}
              className="border-white/34 bg-white/8 text-white hover:bg-white/14 hover:text-white"
            >
              Call the Clinic
            </CTAButton>
          </div>
          <p className="mt-6 text-sm leading-6 text-white/62">
            For emergencies, call local emergency services.
          </p>
        </Container>
      </section>

      <footer className="bg-[#071c26] py-12 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <h2 className="text-2xl font-black">Harbor Health Clinic</h2>
              <p className="mt-3 max-w-md leading-7 text-white/68">
                Primary care, preventive visits, telehealth, and long-term
                health planning.
              </p>
            </div>
            <nav
              aria-label="Footer navigation"
              className="grid gap-2 text-sm font-bold text-white/72"
            >
              {[
                "Services",
                "Telehealth",
                "Patient Resources",
                "Contact",
                "Privacy",
              ].map((item) => (
                <a
                  key={item}
                  href={
                    item === "Telehealth"
                      ? "#telehealth"
                      : item === "Services"
                        ? "#services"
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
                  className="mt-0.5 shrink-0 text-[#bff3e9]"
                  size={18}
                />
                <span>123 Harbor Avenue, Suite 200</span>
              </p>
              <p className="flex gap-3">
                <Clock
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#bff3e9]"
                  size={18}
                />
                <span>Monday-Friday, 8 AM-6 PM</span>
              </p>
              <p className="flex gap-3">
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#bff3e9]"
                  size={18}
                />
                <a href="tel:5550142840" className="hover:text-white">
                  (555) 014-2840
                </a>
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
