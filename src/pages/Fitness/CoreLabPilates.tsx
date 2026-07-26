import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  CircleUserRound,
  Flower2,
  Heart,
  Leaf,
  Menu,
  MoveUpRight,
  Quote,
  SunMedium,
  Waves,
  X,
} from "lucide-react";
import heroImage from "../../assets/optimized/fitness/CoreLab/hero.webp";
import matImage from "../../assets/optimized/fitness/CoreLab/mat-pilates.webp";
import reformerImage from "../../assets/optimized/fitness/CoreLab/reformer-pilates.webp";
import mobilityImage from "../../assets/optimized/fitness/CoreLab/mobility-flow.webp";
import sculptImage from "../../assets/optimized/fitness/CoreLab/core-sculpt.webp";
import studioImage from "../../assets/optimized/fitness/CoreLab/studio-experience.webp";
import elenaImage from "../../assets/optimized/fitness/CoreLab/instructor-elena.webp";
import mayaImage from "../../assets/optimized/fitness/CoreLab/instructor-maya.webp";
import sofiaImage from "../../assets/optimized/fitness/CoreLab/instructor-sofia.webp";
import pricingImage from "../../assets/optimized/fitness/CoreLab/pricing-studio.webp";
import abstractImage from "../../assets/optimized/fitness/CoreLab/pilates-abstract-bg.webp";
import ctaImage from "../../assets/optimized/fitness/CoreLab/cta.webp";

const navLinks = [
  ["Classes", "#classes"],
  ["Studio", "#studio"],
  ["Instructors", "#instructors"],
  ["Pricing", "#pricing"],
  ["Contact", "#contact"],
];

const classes = [
  {
    image: matImage,
    number: "01",
    title: "Mat Pilates",
    text: "Build core strength, posture, and body awareness through controlled floor-based movement.",
  },
  {
    image: reformerImage,
    number: "02",
    title: "Reformer Pilates",
    text: "Train with guided resistance to improve strength, alignment, and flexibility.",
  },
  {
    image: mobilityImage,
    number: "03",
    title: "Mobility Flow",
    text: "Restore movement, reduce stiffness, and support recovery with slow intentional sequences.",
  },
  {
    image: sculptImage,
    number: "04",
    title: "Core Sculpt",
    text: "A focused class for strength, stability, and controlled full-body conditioning.",
  },
];

const instructors = [
  {
    image: elenaImage,
    name: "Elena Brooks",
    specialty: "Reformer & Alignment Coach",
    bio: "Elena teaches with precise cues and a warm, steady pace that helps every student understand the movement.",
  },
  {
    image: mayaImage,
    name: "Maya Chen",
    specialty: "Mat Pilates & Mobility Instructor",
    bio: "Maya blends foundational mat work with restorative mobility for classes that feel focused and freeing.",
  },
  {
    image: sofiaImage,
    name: "Sofia Reed",
    specialty: "Core Strength & Breathwork Coach",
    bio: "Sofia guides strength through breath, control, and thoughtful progressions that meet students where they are.",
  },
];

const plans = [
  {
    name: "First Flow",
    note: "For new students trying their first class.",
    price: "$28",
    cadence: "one time",
    features: [
      "1 intro class",
      "Studio orientation",
      "Beginner-friendly guidance",
    ],
    popular: false,
  },
  {
    name: "Studio Balance",
    note: "For weekly movement and steady progress.",
    price: "$124",
    cadence: "/ month",
    features: [
      "4 classes / month",
      "Mat or reformer options",
      "Schedule flexibility",
    ],
    popular: true,
  },
  {
    name: "Core Unlimited",
    note: "For members who want a consistent studio practice.",
    price: "$198",
    cadence: "/ month",
    features: [
      "Unlimited classes",
      "Priority booking",
      "Monthly progress check-in",
    ],
    popular: false,
  },
];

function CoreButton({
  href,
  children,
  outline = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  outline?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-bold transition duration-300 hover:-translate-y-0.5 ${outline ? "border border-[#B7AAA0] bg-white/60 text-[#373330] hover:border-[#B56F59]" : "bg-[#B56F59] text-white shadow-[0_12px_28px_rgba(181,111,89,.2)] hover:bg-[#9f5f4c]"} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function CoreHeading({
  label,
  title,
  text,
  center = false,
  light = false,
}: {
  label: string;
  title: string;
  text?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      <p className="text-[0.64rem] font-black uppercase tracking-[0.24em] text-[#B56F59]">
        {label}
      </p>
      <h2
        className={`mt-4 text-[clamp(2.8rem,5.5vw,5.7rem)] leading-[0.94] tracking-[-0.045em] ${light ? "text-[#F7F0E7]" : "text-[#373330]"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${center ? "mx-auto" : ""} ${light ? "text-white/62" : "text-[#716A65]"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function CoreLogo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className={`flex items-center gap-3 ${light ? "text-white" : "text-[#373330]"}`}
      aria-label="CoreLab Pilates home"
    >
      <span className="grid h-11 w-11 place-items-center rounded-full bg-[#B56F59] text-white">
        <Flower2 className="h-5 w-5" />
      </span>
      <span>
        <strong className="corelab-serif block text-xl font-normal leading-none">
          CoreLab
        </strong>
        <span
          className={`mt-1 block text-[0.52rem] font-bold uppercase tracking-[0.25em] ${light ? "text-white/48" : "text-[#7F756F]"}`}
        >
          Pilates Studio
        </span>
      </span>
    </a>
  );
}

export function CoreLabPilates() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sections = navLinks
      .map(([, href]) => document.getElementById(href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-25% 0px -58% 0px", threshold: [0.05, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="corelab-site -mt-16 overflow-hidden bg-[#F7F0E7] text-[#514B47] selection:bg-[#B56F59] selection:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#DED3C8] bg-[#FCF9F4]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.75rem] max-w-[92rem] items-center justify-between px-5 lg:px-10">
          <CoreLogo />
          <nav
            className="hidden items-center gap-2 lg:flex"
            aria-label="CoreLab navigation"
          >
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-semibold transition ${active ? "corelab-nav-active bg-[#EEE3DA] text-[#9A5D4A]" : "text-[#6E6762] hover:bg-white hover:text-[#B56F59]"}`}
                >
                  {label}
                </a>
              );
            })}
          </nav>
          <CoreButton href="#contact" className="hidden lg:inline-flex">
            Book a Class
          </CoreButton>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#D8CCC1] text-[#514B47] lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#DED3C8] bg-[#FCF9F4] p-5 lg:hidden">
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 font-semibold ${active ? "corelab-nav-active bg-[#EEE3DA] text-[#9A5D4A]" : "text-[#6E6762]"}`}
                >
                  {label}
                </a>
              );
            })}
            <CoreButton href="#contact" className="mt-4 w-full">
              Book a Class
            </CoreButton>
          </nav>
        )}
      </header>

      <section id="home" className="relative min-h-[54rem] pt-[4.75rem]">
        <img
          src={abstractImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.07] mix-blend-multiply"
        />
        <div className="absolute left-[7%] top-40 h-56 w-56 rounded-full bg-[#C8D1B8]/30 blur-3xl" />
        <div className="relative mx-auto grid min-h-[49.25rem] max-w-[92rem] gap-12 px-5 py-16 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:px-10">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#D9CCC0] bg-white/70 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#9A5D4A]">
              <Leaf className="h-4 w-4" /> Calm studio classes
            </p>
            <h1 className="mt-7 max-w-3xl text-[clamp(3.8rem,7vw,7.4rem)] leading-[0.88] tracking-[-0.055em] text-[#373330]">
              Move With Control.{" "}
              <span className="text-[#B56F59]">Breathe With Intention.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#716A65]">
              Calm studio Pilates classes designed to build core strength,
              improve mobility, and help you feel grounded through mindful
              movement.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <CoreButton href="#contact">Book Your First Class</CoreButton>
              <CoreButton href="#classes" outline>
                View Class Schedule
              </CoreButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-2">
              {[
                "Mat Pilates",
                "Reformer Classes",
                "Mobility Flow",
                "Beginner Friendly",
              ].map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-[#DDD1C7] bg-white/70 px-4 py-2 text-xs font-bold text-[#716A65]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-[12rem_12rem_2rem_2rem] bg-[#E7DED5] p-3 shadow-[0_30px_80px_rgba(84,72,64,.14)]">
              <img
                src={heroImage}
                alt="Bright and peaceful CoreLab Pilates studio class"
                className="h-[40rem] w-full rounded-[11rem_11rem_1.4rem_1.4rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-4 max-w-xs rounded-2xl bg-[#6F7D61] p-5 text-white shadow-xl md:-left-8">
              <Waves className="h-5 w-5" />
              <p className="mt-3 text-sm font-semibold leading-6">
                A quieter space to build steady, lasting strength.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="classes"
        className="bg-[#FCF9F4] px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[92rem]">
          <CoreHeading
            label="Studio classes"
            title="Designed for strength and balance"
            text="Four class styles, each taught with clear guidance, thoughtful pacing, and space to move with confidence."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {classes.map((item, index) => (
              <article
                key={item.title}
                className="corelab-card group grid overflow-hidden rounded-[2rem] border border-[#DED3C8] bg-white sm:grid-cols-[.9fr_1.1fr]"
              >
                <div
                  className={`relative min-h-72 overflow-hidden ${index % 2 === 1 ? "sm:order-2" : ""}`}
                >
                  <img
                    src={item.image}
                    alt={`${item.title} class`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-xs font-bold text-[#B56F59]">
                    {item.number}
                  </span>
                </div>
                <div className="flex items-center p-7">
                  <div>
                    <h3 className="text-3xl leading-none tracking-[-0.04em] text-[#373330]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#716A65]">
                      {item.text}
                    </p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#A4614D]"
                    >
                      Explore Class <MoveUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="studio" className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center">
          <div className="relative">
            <img
              src={studioImage}
              alt="Warm, airy CoreLab Pilates studio interior"
              className="min-h-[42rem] w-full rounded-[2rem_10rem_2rem_2rem] object-cover"
            />
            <span className="absolute bottom-5 right-5 rounded-full bg-white/92 px-4 py-2 text-xs font-bold text-[#6F7D61]">
              Small classes • Clear guidance
            </span>
          </div>
          <div>
            <CoreHeading
              label="Studio experience"
              title="A calm space to reset and strengthen"
              text="Our studio brings together small class sizes, supportive instruction, a peaceful atmosphere, and clear guidance for every level."
            />
            <div className="mt-9 grid gap-3">
              {[
                [
                  Heart,
                  "Gentle Coaching",
                  "Thoughtful cues and personal attention without pressure.",
                ],
                [
                  Waves,
                  "Balanced Movement",
                  "Strength, mobility, and breath working together.",
                ],
                [
                  SunMedium,
                  "Welcoming Studio",
                  "A bright, grounded space where every level belongs.",
                ],
              ].map(([Icon, title, text]) => {
                const HighlightIcon = Icon as typeof Heart;
                return (
                  <article
                    key={title as string}
                    className="flex gap-4 rounded-2xl border border-[#DED3C8] bg-white/65 p-5"
                  >
                    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#E5E9DC] text-[#6F7D61]">
                      <HighlightIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-xl text-[#373330]">
                        {title as string}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-[#716A65]">
                        {text as string}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="instructors"
        className="bg-[#E9E3DA] px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[92rem]">
          <CoreHeading
            label="Our instructors"
            title="Guided by thoughtful instructors"
            text="Experienced teachers who bring attentive cues, calm energy, and respect for every student’s starting point."
            center
          />
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {instructors.map((person) => (
              <article
                key={person.name}
                className="corelab-card group overflow-hidden rounded-[8rem_8rem_2rem_2rem] border border-white/70 bg-white"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={person.image}
                    alt={`${person.name}, ${person.specialty}`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7 text-center">
                  <span className="inline-flex rounded-full bg-[#EEE3DA] px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#9A5D4A]">
                    {person.specialty}
                  </span>
                  <h3 className="mt-5 text-3xl text-[#373330]">
                    {person.name}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#716A65]">
                    {person.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="relative bg-[#FCF9F4] px-5 py-24 lg:px-10 lg:py-32"
      >
        <img
          src={pricingImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.035]"
        />
        <div className="relative mx-auto max-w-[92rem]">
          <CoreHeading
            label="Membership"
            title="A practice that fits your rhythm"
            text="Begin with one class or build a weekly routine. Membership pricing and availability may vary by schedule."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-[2rem] border p-7 ${plan.popular ? "border-[#B56F59] bg-[#6F7D61] text-white shadow-[0_24px_55px_rgba(91,105,78,.2)] lg:-translate-y-4" : "border-[#DED3C8] bg-white"}`}
              >
                {plan.popular && (
                  <span className="absolute right-5 top-5 rounded-full bg-[#F7F0E7] px-3 py-1.5 text-[0.58rem] font-black uppercase tracking-[0.14em] text-[#6F7D61]">
                    Most Popular
                  </span>
                )}
                <p
                  className={`text-[0.62rem] font-black uppercase tracking-[0.18em] ${plan.popular ? "text-white/55" : "text-[#B56F59]"}`}
                >
                  Studio membership
                </p>
                <h3 className="mt-5 text-4xl">{plan.name}</h3>
                <div className="mt-6 flex items-end gap-2">
                  <span className="text-5xl font-semibold tracking-[-0.05em]">
                    {plan.price}
                  </span>
                  <span
                    className={`pb-1 text-xs ${plan.popular ? "text-white/55" : "text-[#7B746F]"}`}
                  >
                    {plan.cadence}
                  </span>
                </div>
                <p
                  className={`mt-5 text-sm leading-7 ${plan.popular ? "text-white/72" : "text-[#716A65]"}`}
                >
                  {plan.note}
                </p>
                <div
                  className={`mt-6 grid gap-3 border-t pt-6 ${plan.popular ? "border-white/15" : "border-[#E8E0D8]"}`}
                >
                  {plan.features.map((feature) => (
                    <span
                      key={feature}
                      className="flex items-center gap-2 text-sm font-semibold"
                    >
                      <Check
                        className={`h-4 w-4 ${plan.popular ? "text-[#F5D6C9]" : "text-[#B56F59]"}`}
                      />
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-bold transition ${plan.popular ? "bg-white text-[#6F7D61] hover:bg-[#F7F0E7]" : "bg-[#373330] text-white hover:bg-[#B56F59]"}`}
                >
                  Choose {plan.name}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[92rem]">
          <CoreHeading
            label="Student notes"
            title="A studio practice people look forward to"
            center
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [
                "Nora L.",
                "The class rhythm makes it easier to stay consistent. I leave feeling focused rather than depleted.",
              ],
              [
                "Amelia R.",
                "I notice my posture more throughout the day, and the instructors explain each adjustment so clearly.",
              ],
              [
                "Jamie K.",
                "The studio feels peaceful and welcoming. I never feel behind, even when a movement is new to me.",
              ],
            ].map(([name, quote]) => (
              <blockquote
                key={name}
                className="rounded-[2rem] border border-[#DED3C8] bg-white/70 p-7"
              >
                <Quote className="h-7 w-7 text-[#B56F59]" />
                <p className="mt-7 text-lg leading-8 text-[#5E5753]">
                  “{quote}”
                </p>
                <footer className="mt-7 flex items-center gap-3 border-t border-[#E5DBD2] pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#E5E9DC] text-[#6F7D61]">
                    <CircleUserRound className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-bold text-[#373330]">{name}</p>
                    <p className="text-xs text-[#8A817B]">CoreLab student</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative bg-[#4B4743] px-5 py-28 text-white lg:px-10 lg:py-36"
      >
        <img
          src={ctaImage}
          alt="Calm Pilates class at CoreLab studio"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3D3936] via-[#3D3936]/88 to-[#3D3936]/40" />
        <div className="relative mx-auto max-w-[92rem]">
          <div className="max-w-4xl">
            <p className="text-[0.64rem] font-black uppercase tracking-[0.24em] text-[#E7B9A8]">
              Your practice can begin gently
            </p>
            <h2 className="mt-6 text-[clamp(3.3rem,7vw,7rem)] leading-[0.88] tracking-[-0.055em] text-[#F7F0E7]">
              Begin your calm strength practice
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/68">
              Join a studio class designed to help you move better, breathe
              deeper, and build strength with care.
            </p>
            <CoreButton
              href="mailto:hello@corelabpilates.example"
              className="mt-9"
            >
              Book a Class
            </CoreButton>
          </div>
        </div>
      </section>

      <footer className="bg-[#373330] px-5 pb-8 pt-14 text-white lg:px-10">
        <div className="mx-auto max-w-[92rem]">
          <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-start">
            <div>
              <CoreLogo light />
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/45">
                Calm studio classes for mindful strength and balanced movement.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-sm text-white/50 hover:text-white"
                >
                  {label}
                </a>
              ))}
            </div>
            <div>
              <p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-white/35">
                Follow the studio
              </p>
              <div className="mt-4 flex gap-2">
                {["IG", "PN", "YT"].map((social) => (
                  <a
                    key={social}
                    href="#contact"
                    aria-label={`${social} social placeholder`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-[0.6rem] font-black hover:border-[#D69A84]"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <p className="pt-7 text-[0.65rem] text-white/28">
            © 2026 CoreLab Pilates. Class schedules, memberships, pricing, and
            availability are subject to change.
          </p>
        </div>
      </footer>
    </main>
  );
}
