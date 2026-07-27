import { useEffect, useState } from "react";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  ClipboardCheck,
  Clock,
  FileText,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  SmilePlus,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, CTAButton, SubWebsiteNav } from "../../components";
import { imageUrl } from "../../assets/optimized";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Booking", href: "#booking" },
  { label: "Dentists", href: "#dentists" },
  { label: "Visit Info", href: "#visit-info" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const trustPoints = [
  "Easy online booking",
  "Clear treatment guidance",
  "Modern dental care",
];

const heroSlides = [
  {
    image: "medical/northstar/hero.webp",
    label: "Modern dental care",
    title: "Dental visits made clear from the first click.",
    text: "NorthStar Dental helps patients book care, understand visit options, and feel prepared with clear services, trusted providers, and practical next steps.",
  },
  {
    image: "medical/northstar/treatment-room.webp",
    label: "Calm treatment rooms",
    title: "A cleaner path into confident care.",
    text: "Bright rooms, clear explanations, and organized visit details help each appointment feel easier to understand.",
  },
  {
    image: "medical/northstar/booking-flow.webp",
    label: "Simple booking",
    title: "Choose the right dental visit without guesswork.",
    text: "Select the visit type, share practical details, and arrive knowing what to bring and what comes next.",
  },
];

const bookingSteps: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: "Choose your visit",
    text: "Select cleaning, exam, consultation, dental concern, or follow-up.",
    icon: Calendar,
  },
  {
    title: "Share practical details",
    text: "Add basic visit needs so the team can prepare before you arrive.",
    icon: FileText,
  },
  {
    title: "Arrive with clarity",
    text: "Know what to bring, what to expect, and your next step after the appointment.",
    icon: ClipboardCheck,
  },
];

const services: Array<{
  title: string;
  text: string;
  icon: LucideIcon;
  image: string;
}> = [
  {
    title: "Routine Exams",
    text: "Clear preventive visits focused on checks, questions, and practical next steps.",
    icon: SmilePlus,
    image: "medical/northstar/dental-checkup.webp",
  },
  {
    title: "Dental Cleanings",
    text: "Professional cleaning appointments with simple guidance for ongoing home care.",
    icon: Sparkles,
    image: "medical/northstar/cleaning-care.webp",
  },
  {
    title: "Cosmetic Dentistry",
    text: "Consultation-focused conversations around appearance goals, options, and planning.",
    icon: SmilePlus,
    image: "medical/northstar/cosmetic-dentistry.webp",
  },
  {
    title: "Emergency Dental Concerns",
    text: "For urgent dental concerns, contact the office so the team can guide your next step.",
    icon: ShieldCheck,
    image: "medical/northstar/emergency-dental.webp",
  },
  {
    title: "Family Dentistry",
    text: "Organized care paths for adults, teens, and family appointment planning.",
    icon: Users,
    image: "medical/northstar/family-dental.webp",
  },
  {
    title: "Treatment Planning",
    text: "Plain-language planning that helps patients understand timing, priorities, and follow-up.",
    icon: ClipboardCheck,
    image: "medical/northstar/patient-details.webp",
  },
];

const visitDetails = [
  [
    "New patient forms",
    "Complete basic information ahead of time so the first visit feels organized.",
  ],
  [
    "What to bring",
    "Bring ID, current health details, medication lists, and any dental questions.",
  ],
  [
    "First visit expectations",
    "The team reviews your visit reason, answers questions, and explains likely next steps.",
  ],
  [
    "Payment and appointment questions",
    "Contact the office for appointment options and payment questions before care begins.",
  ],
  [
    "Follow-up planning",
    "Patients leave with clear timing and practical next steps when follow-up is recommended.",
  ],
  [
    "Urgent dental concerns",
    "Contact the office for urgent dental concerns. For severe symptoms, contact emergency services or a licensed dental professional.",
  ],
];

const providers = [
  {
    name: "Dr. Claire Morgan",
    role: "General Dentist",
    bio: "Dr. Morgan focuses on calm conversations, clear explanations, and organized care plans for everyday dental needs.",
  },
  {
    name: "Dr. Ethan Brooks",
    role: "Cosmetic & Restorative Dentistry",
    bio: "Dr. Brooks helps patients understand dental options, priorities, and next steps in a measured, practical way.",
  },
  {
    name: "Nina Patel, RDH",
    role: "Dental Hygienist",
    bio: "Nina supports preventive visits with friendly education, careful cleanings, and approachable home-care guidance.",
  },
];

const environmentPoints = [
  "Modern treatment rooms",
  "Clear explanations",
  "Comfort-focused visits",
];

const appointmentTypes = [
  "Cleaning & exam",
  "New patient visit",
  "Cosmetic consultation",
  "Dental concern",
  "Follow-up visit",
];

const reviews = [
  {
    name: "Leah",
    quote:
      "The team explained each step clearly and made the appointment feel easy.",
  },
  {
    name: "Omar",
    quote:
      "Booking was straightforward, and I understood what to bring before I arrived.",
  },
  {
    name: "Tessa",
    quote:
      "The office felt modern and calm, and the visit details were easy to follow.",
  },
];

const IconTile = ({ icon: Icon }: { icon: LucideIcon }) => (
  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#e8fbff] text-[#127d96] ring-1 ring-[#c7edf4]">
    <Icon aria-hidden="true" size={21} strokeWidth={2} />
  </span>
);

export function NorthStarDental() {
  const [activeSlide, setActiveSlide] = useState(0);
  const currentSlide = heroSlides[activeSlide];

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6200);

    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <main className="brand-motion bg-[#f7fbfd] text-[#17253f]">
      <SubWebsiteNav
        brand="NorthStar Dental"
        links={navLinks}
        ctaLabel="Book Appointment"
        ctaHref="#contact"
        collectionPath="/medical"
        className="border-b border-[#dbe9ef] bg-white/94 text-[#17253f] shadow-sm shadow-[#17253f]/5"
        brandClassName="text-[#126f86]"
        linkClassName="text-[#617080] hover:text-[#126f86]"
        ctaClassName="bg-[#17253f] text-white shadow-lg shadow-[#17253f]/16 hover:bg-[#24385c]"
        menuButtonClassName="border-[#dbe9ef] text-[#126f86] hover:bg-[#eefbfe]"
        mobilePanelClassName="border border-[#dbe9ef] bg-white"
      />

      <section className="relative isolate min-h-screen overflow-hidden bg-[#0f1d32] pt-28 text-white md:pt-32">
        {heroSlides.map((slide, index) => (
          <img
            key={slide.image}
            src={imageUrl(slide.image)}
            alt=""
            aria-hidden="true"
            style={{ animation: "none" }}
            className={`absolute inset-0 -z-20 h-full w-full object-cover transition duration-700 ease-out ${
              index === activeSlide
                ? "scale-100 opacity-100"
                : "scale-105 opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(15,29,50,0.92)_0%,rgba(15,29,50,0.72)_44%,rgba(15,29,50,0.22)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-44 bg-gradient-to-t from-[#0f1d32] to-transparent" />

        <Container className="flex min-h-[calc(100vh-7rem)] flex-col justify-center pb-12 pt-10">
          <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/12 px-4 py-2 text-sm font-black text-[#9eeaf4] ring-1 ring-white/18 backdrop-blur">
                <SmilePlus aria-hidden="true" size={17} /> {currentSlide.label}
              </p>
              <h1 className="mt-6 max-w-5xl text-5xl font-black leading-[1.01] tracking-normal md:text-7xl">
                {currentSlide.title}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
                {currentSlide.text}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CTAButton
                  href="#contact"
                  size="lg"
                  className="bg-[#9eeaf4] text-[#17253f] hover:bg-white"
                >
                  Book Appointment
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
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl bg-white/10 p-4 text-sm font-black text-white/84 ring-1 ring-white/14 backdrop-blur"
                  >
                    <CheckCircle
                      aria-hidden="true"
                      className="mb-2 text-[#9eeaf4]"
                      size={19}
                    />
                    {point}
                  </div>
                ))}
              </div>
            </div>

            <div className="justify-self-end rounded-[1.5rem] border border-white/18 bg-white/12 p-4 shadow-2xl shadow-black/20 backdrop-blur md:w-[26rem]">
              <p className="text-xs font-black uppercase text-[#9eeaf4]">
                Next available
              </p>
              <p className="mt-2 text-2xl font-black leading-tight">
                Choose a visit type and send details ahead.
              </p>
              <div className="mt-5 grid gap-2 text-sm font-bold text-white/78">
                <span className="rounded-xl bg-white/12 px-3 py-2 ring-1 ring-white/12">
                  Cleaning & exam
                </span>
                <span className="rounded-xl bg-white/12 px-3 py-2 ring-1 ring-white/12">
                  Dental concern
                </span>
                <span className="rounded-xl bg-white/12 px-3 py-2 ring-1 ring-white/12">
                  New patient visit
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 border-t border-white/14 pt-6 md:flex-row md:items-center md:justify-between">
            <div className="flex gap-2">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.label}
                  type="button"
                  aria-label={`Show ${slide.label} slide`}
                  onClick={() => setActiveSlide(index)}
                  className={`h-2.5 rounded-full transition-all ${
                    index === activeSlide
                      ? "w-12 bg-[#9eeaf4]"
                      : "w-2.5 bg-white/42 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
            <div className="grid gap-3 text-sm font-black text-white/72 sm:grid-cols-3">
              {heroSlides.map((slide, index) => (
                <button
                  key={slide.title}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`rounded-xl px-4 py-3 text-left transition ${
                    index === activeSlide
                      ? "bg-white text-[#17253f]"
                      : "bg-white/8 hover:bg-white/14"
                  }`}
                >
                  {slide.label}
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="booking" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase text-[#126f86]">
              Booking flow
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#17253f] md:text-5xl">
              A cleaner way to book dental care.
            </h2>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {bookingSteps.map(({ title, text, icon }, index) => (
              <article
                key={title}
                className="rounded-[1.5rem] border border-[#dbe9ef] bg-white p-6 shadow-sm shadow-[#17253f]/5"
              >
                <div className="flex items-center justify-between gap-4">
                  <IconTile icon={icon} />
                  <span className="text-sm font-black text-[#9bb0bf]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-7 text-2xl font-black text-[#17253f]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5e6d7c]">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="services" className="bg-white py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase text-[#126f86]">
              Services
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#17253f] md:text-5xl">
              Dental services with clear next steps.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, text, icon, image }) => (
              <article
                key={title}
                className="group overflow-hidden rounded-[1.5rem] border border-[#dbe9ef] bg-[#fbfdfe] shadow-sm shadow-[#17253f]/5"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={imageUrl(image)}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute left-4 top-4 rounded-2xl bg-white/92 p-2 text-[#126f86] shadow-lg shadow-[#17253f]/10">
                    {(() => {
                      const Icon = icon;
                      return (
                        <Icon aria-hidden="true" size={22} strokeWidth={2} />
                      );
                    })()}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-black text-[#17253f]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5e6d7c]">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="visit-info" className="py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#126f86]">
              Visit info
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#17253f] md:text-5xl">
              Patient-first details before the appointment.
            </h2>
            <img
              src={imageUrl("medical/northstar/patient-details.webp")}
              alt="Dental visit details and patient preparation"
              className="mt-8 h-80 w-full rounded-[1.5rem] object-cover shadow-xl shadow-[#17253f]/9"
            />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {visitDetails.map(([title, text]) => (
              <article
                key={title}
                className="rounded-[1.35rem] border border-[#dbe9ef] bg-white p-5 shadow-sm shadow-[#17253f]/5"
              >
                <h3 className="text-xl font-black text-[#17253f]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5e6d7c]">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="dentists" className="bg-[#eefbfe] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#126f86]">
                Dentists
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#17253f] md:text-5xl">
                A dental team focused on comfort and clarity.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#5e6d7c]">
              Provider introductions stay practical, credible, and focused on
              how patients are guided through care.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <img
              src={imageUrl("medical/northstar/dental-team.webp")}
              alt="NorthStar Dental team in a modern office"
              className="h-full min-h-[28rem] w-full rounded-[1.75rem] object-cover shadow-xl shadow-[#17253f]/9"
            />
            <div className="grid gap-5">
              {providers.map(({ name, role, bio }) => (
                <article
                  key={name}
                  className="rounded-[1.5rem] border border-[#cfe8ef] bg-white p-6 shadow-sm shadow-[#17253f]/5"
                >
                  <h3 className="text-2xl font-black text-[#17253f]">{name}</h3>
                  <p className="mt-1 text-sm font-black text-[#126f86]">
                    {role}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#5e6d7c]">{bio}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <img
            src={imageUrl("medical/northstar/treatment-room.webp")}
            alt="A clean modern dental treatment room"
            className="h-[34rem] w-full rounded-[1.75rem] object-cover shadow-xl shadow-[#17253f]/9"
          />
          <div>
            <p className="text-sm font-black uppercase text-[#126f86]">
              Environment
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#17253f] md:text-5xl">
              A clean, modern space for calmer visits.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5e6d7c]">
              Designed with bright rooms, clear communication, and a calm
              patient experience in mind.
            </p>
            <div className="mt-8 grid gap-3">
              {environmentPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-2xl border border-[#dbe9ef] bg-white p-4 shadow-sm shadow-[#17253f]/5"
                >
                  <CheckCircle
                    aria-hidden="true"
                    className="text-[#1c9f9c]"
                    size={20}
                  />
                  <span className="font-black text-[#17253f]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#17253f] py-20 text-white md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#9eeaf4]">
              Appointment access
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Book the right dental visit without the guesswork.
            </h2>
            <div className="mt-8">
              <CTAButton
                href="#contact"
                size="lg"
                className="bg-[#9eeaf4] text-[#17253f] hover:bg-white"
              >
                Book Appointment
              </CTAButton>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {appointmentTypes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl bg-white/10 p-4 ring-1 ring-white/14"
              >
                <CheckCircle
                  aria-hidden="true"
                  className="text-[#9eeaf4]"
                  size={20}
                />
                <span className="font-bold">{item}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="reviews" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase text-[#126f86]">
              Reviews
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#17253f] md:text-5xl">
              Appointments that feel organized.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map(({ name, quote }) => (
              <blockquote
                key={name}
                className="rounded-[1.5rem] border border-[#dbe9ef] bg-white p-7 shadow-sm shadow-[#17253f]/5"
              >
                <p className="text-5xl font-black leading-none text-[#9ccbd7]">
                  &ldquo;
                </p>
                <p className="mt-2 text-lg font-bold leading-8 text-[#17253f]">
                  {quote}
                </p>
                <footer className="mt-6 text-sm font-black uppercase text-[#126f86]">
                  {name}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="contact"
        className="relative isolate overflow-hidden bg-[#17253f] py-20 text-white md:py-28"
      >
        <img
          src={imageUrl("medical/northstar/cta.webp")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-26"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(23,37,63,0.96),rgba(23,37,63,0.72))]" />
        <Container className="max-w-5xl">
          <p className="text-sm font-black uppercase text-[#9eeaf4]">
            Start here
          </p>
          <h2 className="mt-3 max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Ready for a cleaner path to dental care?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/76">
            Start with a simple appointment and get clear guidance from a dental
            team focused on comfort, organization, and practical next steps.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton
              href="mailto:hello@northstar.example"
              size="lg"
              className="bg-[#9eeaf4] text-[#17253f] hover:bg-white"
            >
              Book Appointment
            </CTAButton>
            <CTAButton
              href="tel:5550187442"
              variant="outline"
              size="lg"
              leadingIcon={<Phone aria-hidden="true" size={20} />}
              className="border-white/34 bg-white/8 text-white hover:bg-white/14 hover:text-white"
            >
              Call Office
            </CTAButton>
          </div>
          <p className="mt-6 text-sm leading-6 text-white/68">
            For urgent or severe symptoms, contact appropriate emergency
            services or a licensed dental professional.
          </p>
        </Container>
      </section>

      <footer className="bg-[#0e182a] py-12 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <h2 className="text-2xl font-black">NorthStar Dental</h2>
              <p className="mt-3 max-w-md leading-7 text-white/68">
                Clean dental booking flow for modern patient-first care.
              </p>
            </div>
            <nav
              aria-label="Footer navigation"
              className="grid gap-2 text-sm font-bold text-white/72"
            >
              {[
                "Services",
                "Booking",
                "Dentists",
                "Visit Info",
                "Reviews",
                "Contact",
                "Privacy",
              ].map((item) => (
                <a
                  key={item}
                  href={
                    item === "Services"
                      ? "#services"
                      : item === "Booking"
                        ? "#booking"
                        : item === "Dentists"
                          ? "#dentists"
                          : item === "Visit Info"
                            ? "#visit-info"
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
                  className="mt-0.5 shrink-0 text-[#9eeaf4]"
                  size={18}
                />
                <span>410 Northstar Avenue, Suite 300</span>
              </p>
              <p className="flex gap-3">
                <Clock
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#9eeaf4]"
                  size={18}
                />
                <span>Monday-Friday, 8 AM-6 PM</span>
              </p>
              <p className="flex gap-3">
                <Calendar
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#9eeaf4]"
                  size={18}
                />
                <span>Saturday, 9 AM-2 PM</span>
              </p>
              <p className="flex gap-3">
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#9eeaf4]"
                  size={18}
                />
                <a href="tel:5550187442" className="hover:text-white">
                  (555) 018-7442
                </a>
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
