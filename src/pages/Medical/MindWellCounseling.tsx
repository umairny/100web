import { useEffect, useState } from "react";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  Clock,
  FileText,
  Home,
  Laptop,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Container, CTAButton, SubWebsiteNav } from "../../components";
import { imageUrl } from "../../assets/optimized";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Intake", href: "#intake" },
  { label: "Therapists", href: "#therapists" },
  { label: "Teletherapy", href: "#teletherapy" },
  { label: "Visit Info", href: "#visit-info" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const trustPoints = [
  "Clear intake process",
  "In-person and virtual options",
  "Supportive therapist guidance",
];

const heroSlides = [
  {
    label: "A calm first conversation",
    text: "Comfortable therapy spaces for private, human-centered intake.",
    image: "medical/mindwell/hero.webp",
    alt: "Comfortable counseling office conversation",
  },
  {
    label: "Warm office setting",
    text: "A grounded environment for thoughtful questions and clear next steps.",
    image: "medical/mindwell/calm-office.webp",
    alt: "Calm therapy office seating",
  },
  {
    label: "Thoughtful provider guidance",
    text: "Supportive conversations shaped around needs, preferences, and comfort.",
    image: "medical/mindwell/therapy-session.webp",
    alt: "Comfortable therapy conversation",
  },
];

const services: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: "Individual Therapy",
    text: "One-on-one counseling conversations for personal concerns, patterns, goals, and life context.",
    icon: MessageCircle,
  },
  {
    title: "Couples Counseling",
    text: "A guided setting for partners to discuss communication, relationship stress, and practical next steps.",
    icon: Users,
  },
  {
    title: "Anxiety Support",
    text: "Plain-language support for understanding concerns, daily stressors, and helpful care options.",
    icon: ShieldCheck,
  },
  {
    title: "Stress & Burnout Support",
    text: "Thoughtful conversations for workload pressure, overwhelm, boundaries, and sustainable routines.",
    icon: Sparkles,
  },
  {
    title: "Life Transitions",
    text: "Supportive space for change, decision points, grief, identity shifts, and new chapters.",
    icon: Home,
  },
  {
    title: "Teletherapy",
    text: "Virtual counseling appointments for ongoing sessions, busy schedules, and easier access.",
    icon: Laptop,
  },
];

const intakeSteps = [
  {
    title: "Start with a simple request",
    text: "Share what kind of support you are looking for and whether you prefer in-person or virtual care.",
  },
  {
    title: "Review practical details",
    text: "The team helps clarify appointment options, provider fit, and basic visit expectations.",
  },
  {
    title: "Meet your therapist",
    text: "Begin with a thoughtful conversation focused on your needs, goals, and comfort.",
  },
  {
    title: "Plan next steps",
    text: "Leave with a clearer understanding of the care path, follow-up options, and how support can continue.",
  },
];

const providers = [
  {
    name: "Dr. Claire Bennett",
    role: "Counseling Psychologist",
    bio: "Claire uses a steady, conversational approach to help clients feel oriented during the first appointment and understand what ongoing care may look like.",
  },
  {
    name: "Morgan Ellis, LMHC",
    role: "Individual Therapy",
    bio: "Morgan focuses on thoughtful intake conversations, practical questions, and clear expectations for continuing support.",
  },
  {
    name: "Rafael Stone, LCSW",
    role: "Couples & Life Transitions",
    bio: "Rafael helps clients name what brought them in, clarify priorities, and choose a supportive next step without rushing the process.",
  },
];

const approachPoints = [
  "Plain-language guidance",
  "Respectful, private conversations",
  "Practical next steps",
  "Flexible visit options",
];

const visitDetails = [
  [
    "What to expect",
    "A warm intake conversation, practical questions, and clear explanation of possible next steps.",
  ],
  [
    "First appointment",
    "Your therapist will learn about your concerns, preferences, goals, and comfort with care.",
  ],
  [
    "In-person visits",
    "Appointments take place in a calm office setting designed for private conversation.",
  ],
  [
    "Virtual visits",
    "Virtual appointments can support ongoing sessions and busy schedules.",
  ],
  [
    "Payment and plan questions",
    "Contact the practice to review payment and plan details before your visit.",
  ],
  [
    "Ongoing sessions",
    "Follow-up timing depends on your needs, provider fit, and the care path you choose together.",
  ],
];

const appointmentTypes = [
  "Individual therapy intake",
  "Couples counseling consultation",
  "Teletherapy intake",
  "Ongoing session request",
  "General appointment question",
];

const reviews = [
  {
    name: "Maya",
    quote:
      "The intake felt simple, and I understood what the next step would be before the first session.",
  },
  {
    name: "Elliot",
    quote:
      "I appreciated that the first conversation was clear, respectful, and easy to follow.",
  },
  {
    name: "Nina",
    quote:
      "They helped me understand appointment options without making the process feel overwhelming.",
  },
];

const FooterLink = ({ label, href }: { label: string; href: string }) => (
  <a
    href={href}
    className="text-sm font-semibold text-white/70 transition hover:text-white"
  >
    {label}
  </a>
);

const ServiceIcon = ({ icon: Icon }: { icon: LucideIcon }) => (
  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#eef3ec] text-[#657d68] ring-1 ring-[#d9ded2]">
    <Icon aria-hidden="true" size={20} strokeWidth={1.8} />
  </span>
);

export function MindWellCounseling() {
  const [activeHeroSlide, setActiveHeroSlide] = useState(0);

  useEffect(() => {
    const slideTimer = window.setInterval(() => {
      setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
    }, 5200);

    return () => window.clearInterval(slideTimer);
  }, []);

  const activeSlide = heroSlides[activeHeroSlide];
  const showPreviousSlide = () => {
    setActiveHeroSlide(
      (current) => (current - 1 + heroSlides.length) % heroSlides.length,
    );
  };
  const showNextSlide = () => {
    setActiveHeroSlide((current) => (current + 1) % heroSlides.length);
  };

  return (
    <main className="bg-[#f8f3ea] text-[#1f2933]">
      <SubWebsiteNav
        brand="MindWell Counseling"
        links={navLinks}
        ctaLabel="Start Intake"
        ctaHref="#contact"
        collectionPath="/medical"
        className="border-b border-[#e4d9c9] bg-[#fffaf1]/95 text-[#1f2933] shadow-sm shadow-[#1f2933]/5"
        brandClassName="font-serif text-xl text-[#2d4b58]"
        linkClassName="rounded-full px-3 py-2 text-[#6f675e] transition hover:bg-[#efe7dc] hover:text-[#2d4b58]"
        activeLinkClassName="active bg-[#efe7dc] text-[#2d4b58]"
        ctaClassName="bg-[#2d4b58] text-white shadow-lg shadow-[#2d4b58]/15 hover:bg-[#203842]"
        activeCtaClassName="active ring-2 ring-[#d7be7f] ring-offset-2"
        menuButtonClassName="border-[#e4d9c9] bg-[#fffaf1] text-[#2d4b58] hover:bg-[#efe7dc]"
        mobilePanelClassName="border border-[#e4d9c9] bg-[#fffaf1]"
      />

      <section className="relative isolate -mt-16 overflow-hidden border-b border-[#e4d9c9] bg-[#f5eee4] pt-28 md:pt-32">
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(120deg,#fffaf1_0%,#f1e5d6_48%,#dfe9e5_100%)]" />
        <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-[#fffaf1]/78" />
        <Container className="grid min-h-[calc(100vh-5rem)] gap-8 py-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch lg:py-12">
          <div className="flex flex-col justify-center rounded-[2rem] border border-[#e4d9c9] bg-[#fffaf1]/82 p-6 shadow-2xl shadow-[#2d4b58]/8 backdrop-blur md:p-9">
            <div className="flex flex-wrap items-center gap-3">
              <p className="inline-flex items-center gap-2 rounded-full border border-[#decfb9] bg-white/70 px-4 py-2 text-sm font-bold text-[#657d68]">
                <ShieldCheck aria-hidden="true" size={17} /> Approachable
                therapy intake
              </p>
              <a
                href="#teletherapy"
                className="inline-flex items-center gap-2 rounded-full bg-[#eef3ec] px-4 py-2 text-sm font-bold text-[#2d4b58] transition hover:bg-[#dfe9e5]"
              >
                Virtual visits <ArrowRight aria-hidden="true" size={15} />
              </a>
            </div>
            <h1 className="mt-7 max-w-4xl font-serif text-5xl leading-[1.01] tracking-normal text-[#18242c] md:text-7xl">
              A simpler first step toward feeling supported.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5e635f] md:text-xl">
              MindWell Counseling helps clients begin therapy with a clear
              intake process, thoughtful provider guidance, and practical next
              steps for care that feels private, approachable, and human.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CTAButton
                href="#contact"
                size="lg"
                className="rounded-full bg-[#2d4b58] text-white hover:bg-[#203842]"
              >
                Start Intake
              </CTAButton>
              <CTAButton
                href="#services"
                variant="outline"
                size="lg"
                trailingIcon={<ArrowRight aria-hidden="true" size={20} />}
                className="rounded-full border-[#b9a98f] bg-white/70 text-[#2d4b58] hover:bg-[#2d4b58] hover:text-white"
              >
                View Services
              </CTAButton>
            </div>
            <div className="mt-8 grid gap-3 border-t border-[#e4d9c9] pt-6 sm:grid-cols-3">
              {trustPoints.map((point) => (
                <div key={point} className="text-sm font-bold text-[#4f5f59]">
                  <CheckCircle
                    aria-hidden="true"
                    className="mb-2 text-[#657d68]"
                    size={18}
                  />
                  {point}
                </div>
              ))}
            </div>
          </div>

          <div className="relative grid gap-4">
            <div className="relative min-h-[34rem] overflow-hidden rounded-[2rem] bg-[#18242c] shadow-2xl shadow-[#2d4b58]/16 md:min-h-[42rem]">
              {heroSlides.map((slide, index) => (
                <img
                  key={slide.image}
                  src={imageUrl(slide.image)}
                  alt={slide.alt}
                  className={`absolute inset-0 h-full w-full object-cover transition duration-700 ${
                    index === activeHeroSlide
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-[1.03]"
                  }`}
                />
              ))}
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(24,36,44,0.78),rgba(24,36,44,0.1)_48%,rgba(255,250,241,0.08))]" />

              <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/40 bg-white/82 px-3 py-2 text-xs font-black uppercase text-[#2d4b58] shadow-lg shadow-[#18242c]/10 backdrop-blur">
                <span className="h-2 w-2 rounded-full bg-[#657d68]" />
                Therapy intake
              </div>

              <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/30 bg-[#fffaf1]/90 p-5 text-[#18242c] shadow-xl shadow-[#18242c]/14 backdrop-blur md:bottom-6 md:right-auto md:w-[25rem]">
                <p className="text-xs font-black uppercase text-[#9b7d42]">
                  {activeSlide.label}
                </p>
                <p className="mt-2 text-lg font-bold leading-7">
                  {activeSlide.text}
                </p>
              </div>

              <div className="absolute right-5 top-5 flex gap-2">
                {heroSlides.map((slide, index) => (
                  <button
                    key={slide.image}
                    type="button"
                    aria-label={`Show ${slide.label}`}
                    aria-current={index === activeHeroSlide}
                    onClick={() => setActiveHeroSlide(index)}
                    className={`h-2.5 rounded-full transition ${
                      index === activeHeroSlide
                        ? "w-8 bg-white"
                        : "w-2.5 bg-white/52 hover:bg-white/78"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-end">
              <div className="rounded-[1.5rem] border border-[#e4d9c9] bg-[#fffaf1] p-5 shadow-xl shadow-[#2d4b58]/8">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-black uppercase text-[#9b7d42]">
                      Intake steps
                    </p>
                    <p className="mt-1 text-lg font-black text-[#18242c]">
                      A clear path before the first visit.
                    </p>
                  </div>
                  <MessageCircle
                    aria-hidden="true"
                    className="shrink-0 text-[#657d68]"
                    size={28}
                  />
                </div>
                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  {["Share needs", "Match support", "Plan next steps"].map(
                    (step, index) => (
                      <div
                        key={step}
                        className="flex items-center gap-3 rounded-2xl bg-[#f8f3ea] p-3"
                      >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eef3ec] text-sm font-black text-[#657d68]">
                          {index + 1}
                        </span>
                        <span className="text-sm font-bold text-[#26333b]">
                          {step}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between gap-3 rounded-full border border-[#e4d9c9] bg-[#fffaf1] p-2 shadow-lg shadow-[#2d4b58]/8 md:justify-center">
                <button
                  type="button"
                  aria-label="Previous hero image"
                  onClick={showPreviousSlide}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#eef3ec] text-[#2d4b58] transition hover:bg-[#dfe9e5]"
                >
                  <ChevronLeft aria-hidden="true" size={20} />
                </button>
                <span className="px-2 text-xs font-black uppercase text-[#6f675e]">
                  {String(activeHeroSlide + 1).padStart(2, "0")} /{" "}
                  {String(heroSlides.length).padStart(2, "0")}
                </span>
                <button
                  type="button"
                  aria-label="Next hero image"
                  onClick={showNextSlide}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#2d4b58] text-white transition hover:bg-[#203842]"
                >
                  <ChevronRight aria-hidden="true" size={20} />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="services" className="bg-[#f8f3ea] py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase text-[#657d68]">
              Services
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#18242c] md:text-6xl">
              Support for different seasons of life.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map(({ title, text, icon }) => (
              <article
                key={title}
                className="rounded-[1.25rem] border border-[#e4d9c9] bg-[#fffaf1] p-6 shadow-sm shadow-[#2d4b58]/5"
              >
                <ServiceIcon icon={icon} />
                <h3 className="mt-6 text-2xl font-black text-[#18242c]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5e635f]">{text}</p>
              </article>
            ))}
          </div>
          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {[
              [
                "Individual therapy intake",
                "medical/mindwell/individual-therapy.webp",
              ],
              [
                "Couples counseling consultation",
                "medical/mindwell/couples-counseling.webp",
              ],
            ].map(([label, image]) => (
              <div
                key={label}
                className="relative h-72 overflow-hidden rounded-[1.5rem] shadow-xl shadow-[#2d4b58]/8"
              >
                <img
                  src={imageUrl(image)}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18242c]/76 via-transparent to-transparent" />
                <p className="absolute bottom-5 left-5 font-serif text-3xl leading-tight text-white">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="intake"
        className="border-y border-[#e4d9c9] bg-[#efe7dc] py-20 md:py-28"
      >
        <Container className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#657d68]">
              Intake process
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#18242c] md:text-6xl">
              Therapy intake, made clear.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5e635f]">
              The first step is organized around clarity: what you need, what
              appointment format fits, and what happens next.
            </p>
            <img
              src={imageUrl("medical/mindwell/intake-process.webp")}
              alt="Therapy intake notes and calm appointment planning"
              className="mt-8 h-80 w-full rounded-[1.5rem] object-cover shadow-xl shadow-[#2d4b58]/10"
            />
          </div>
          <div className="rounded-[1.75rem] border border-[#d7cbbb] bg-[#fffaf1] p-4 shadow-xl shadow-[#2d4b58]/8">
            {intakeSteps.map(({ title, text }, index) => (
              <article
                key={title}
                className="grid gap-4 border-b border-[#e4d9c9] p-5 last:border-b-0 sm:grid-cols-[4rem_1fr]"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2d4b58] text-sm font-black text-white">
                  {index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-black text-[#18242c]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#5e635f]">
                    {text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="therapists" className="bg-[#fffaf1] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#657d68]">
                Therapists
              </p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-[#18242c] md:text-6xl">
                Therapists who listen first.
              </h2>
            </div>
            <p className="max-w-3xl text-lg leading-8 text-[#5e635f]">
              Provider introductions are intentionally simple: who you may meet,
              what they focus on, and how the first conversation is framed.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1fr_1.05fr]">
            <img
              src={imageUrl("medical/mindwell/counseling-team.webp")}
              alt="MindWell Counseling provider team"
              className="h-full min-h-[32rem] w-full rounded-[1.75rem] object-cover shadow-xl shadow-[#2d4b58]/10"
            />
            <div className="grid gap-4">
              {providers.map(({ name, role, bio }) => (
                <article
                  key={name}
                  className="rounded-[1.25rem] border border-[#e4d9c9] bg-[#f8f3ea] p-6"
                >
                  <h3 className="text-2xl font-black text-[#18242c]">{name}</h3>
                  <p className="mt-1 text-sm font-black text-[#657d68]">
                    {role}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#5e635f]">{bio}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f8f3ea] py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <img
            src={imageUrl("medical/mindwell/calm-office.webp")}
            alt="Calm therapy office seating"
            className="h-[35rem] w-full rounded-[1.75rem] object-cover shadow-xl shadow-[#2d4b58]/10"
          />
          <div>
            <p className="text-sm font-black uppercase text-[#657d68]">
              Approach
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#18242c] md:text-5xl">
              A calm space for practical conversations.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5e635f]">
              MindWell keeps counseling approachable through clear language,
              respectful pacing, and practical details before and after the
              first visit.
            </p>
            <div className="mt-8 grid gap-3">
              {approachPoints.map((point) => (
                <div
                  key={point}
                  className="flex items-center gap-3 rounded-2xl border border-[#e4d9c9] bg-[#fffaf1] p-4"
                >
                  <CheckCircle
                    aria-hidden="true"
                    className="text-[#657d68]"
                    size={20}
                  />
                  <span className="font-black text-[#26333b]">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="teletherapy"
        className="bg-[#2d4b58] py-20 text-white md:py-28"
      >
        <Container className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#d7be7f]">
              Teletherapy
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight md:text-6xl">
              Support that can meet you where you are.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Virtual counseling appointments can be useful for ongoing
              sessions, busy schedules, and clients who want clear next steps
              before the first visit.
            </p>
          </div>
          <div className="relative overflow-hidden rounded-[1.75rem] bg-white/10 p-4 ring-1 ring-white/14">
            <img
              src={imageUrl("medical/mindwell/teletherapy.webp")}
              alt="Virtual counseling appointment setup"
              className="h-80 w-full rounded-[1.25rem] object-cover"
            />
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                "Virtual counseling appointments",
                "Good for ongoing sessions",
                "Helpful for busy schedules",
                "Private and convenient access",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white/10 p-4 text-sm font-bold text-white/82 ring-1 ring-white/12"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="visit-info" className="bg-[#fffaf1] py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase text-[#657d68]">
              Visit info
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#18242c] md:text-5xl">
              Practical answers before you begin.
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {visitDetails.map(([title, text]) => (
              <article
                key={title}
                className="rounded-[1.25rem] border border-[#e4d9c9] bg-[#f8f3ea] p-6"
              >
                <FileText
                  aria-hidden="true"
                  className="text-[#657d68]"
                  size={22}
                />
                <h3 className="mt-5 text-xl font-black text-[#18242c]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#5e635f]">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-[#efe7dc] py-20 md:py-28">
        <Container className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase text-[#657d68]">
              Appointment access
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#18242c] md:text-5xl">
              Begin with the right first conversation.
            </h2>
            <img
              src={imageUrl("medical/mindwell/appointment-access.webp")}
              alt="Counseling appointment intake planning"
              className="mt-7 h-56 w-full rounded-[1.5rem] object-cover shadow-xl shadow-[#2d4b58]/8"
            />
            <div className="mt-8">
              <CTAButton
                href="#contact"
                size="lg"
                className="rounded-full bg-[#2d4b58] text-white hover:bg-[#203842]"
              >
                Start Intake
              </CTAButton>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {appointmentTypes.map((type) => (
              <div
                key={type}
                className="flex items-center gap-3 rounded-2xl border border-[#d7cbbb] bg-[#fffaf1] p-4"
              >
                <Calendar
                  aria-hidden="true"
                  className="text-[#9b7d42]"
                  size={20}
                />
                <span className="font-bold text-[#26333b]">{type}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="reviews" className="bg-[#f8f3ea] py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase text-[#657d68]">
                Reviews
              </p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-[#18242c] md:text-5xl">
                Clients notice when the first step feels understandable.
              </h2>
            </div>
            <img
              src={imageUrl("medical/mindwell/therapy-session.webp")}
              alt="Comfortable therapy conversation"
              className="h-56 w-full rounded-[1.5rem] object-cover shadow-xl shadow-[#2d4b58]/10"
            />
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map(({ name, quote }) => (
              <blockquote
                key={name}
                className="rounded-[1.5rem] border border-[#e4d9c9] bg-[#fffaf1] p-7"
              >
                <p className="font-serif text-5xl leading-none text-[#9b7d42]">
                  "
                </p>
                <p className="mt-2 text-lg font-bold leading-8 text-[#26333b]">
                  {quote}
                </p>
                <footer className="mt-6 text-sm font-black uppercase text-[#657d68]">
                  {name}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="contact"
        className="relative isolate overflow-hidden bg-[#18242c] py-20 text-white md:py-28"
      >
        <img
          src={imageUrl("medical/mindwell/cta.webp")}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-30"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(24,36,44,0.95),rgba(24,36,44,0.72))]" />
        <Container className="max-w-5xl">
          <p className="text-sm font-black uppercase text-[#d7be7f]">
            Start here
          </p>
          <h2 className="mt-3 font-serif text-4xl leading-tight md:text-6xl">
            Ready to take the first step?
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/74">
            Start with a simple intake request and get clear guidance for
            choosing the right support, appointment type, and next step.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <CTAButton
              href="mailto:hello@mindwell.example"
              size="lg"
              className="rounded-full bg-[#d7be7f] text-[#18242c] hover:bg-white"
            >
              Start Intake
            </CTAButton>
            <CTAButton
              href="#services"
              variant="outline"
              size="lg"
              trailingIcon={<ArrowRight aria-hidden="true" size={20} />}
              className="rounded-full border-white/30 bg-white/8 text-white hover:bg-white/14 hover:text-white"
            >
              Book Consultation
            </CTAButton>
          </div>
        </Container>
      </section>

      <footer className="bg-[#111b22] py-12 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr_1fr]">
            <div>
              <h2 className="font-serif text-3xl">MindWell Counseling</h2>
              <p className="mt-3 max-w-md leading-7 text-white/66">
                Approachable therapy intake with clear next steps and supportive
                guidance.
              </p>
              <p className="mt-5 text-sm leading-6 text-white/58">
                If you are in immediate danger or experiencing a crisis, contact
                local emergency services or a crisis hotline in your area.
              </p>
            </div>
            <nav aria-label="Footer navigation" className="grid gap-2">
              {[
                ["Services", "#services"],
                ["Intake", "#intake"],
                ["Therapists", "#therapists"],
                ["Teletherapy", "#teletherapy"],
                ["Visit Info", "#visit-info"],
                ["Reviews", "#reviews"],
                ["Contact", "#contact"],
                ["Privacy", "#contact"],
              ].map(([label, href]) => (
                <FooterLink key={label} label={label} href={href} />
              ))}
            </nav>
            <div className="grid gap-3 text-sm text-white/70">
              <p className="flex gap-3">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#d7be7f]"
                  size={18}
                />
                <span>320 Willow Avenue, Suite 220</span>
              </p>
              <p className="flex gap-3">
                <Clock
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#d7be7f]"
                  size={18}
                />
                <span>Monday-Friday, 9 AM-7 PM</span>
              </p>
              <p className="flex gap-3">
                <Calendar
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#d7be7f]"
                  size={18}
                />
                <span>Saturday, 10 AM-2 PM</span>
              </p>
              <p className="flex gap-3">
                <Phone
                  aria-hidden="true"
                  className="mt-0.5 shrink-0 text-[#d7be7f]"
                  size={18}
                />
                <a href="tel:5550136824" className="hover:text-white">
                  (555) 013-6824
                </a>
              </p>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
