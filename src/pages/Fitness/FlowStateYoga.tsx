import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  Flower2,
  Leaf,
  Menu,
  Moon,
  Sparkles,
  SunMedium,
  Waves,
  X,
} from "lucide-react";
import heroImage from "../../assets/optimized/fitness/FlowState/hero.webp";
import vinyasaImage from "../../assets/optimized/fitness/FlowState/vinyasa-flow.webp";
import gentleImage from "../../assets/optimized/fitness/FlowState/gentle-yoga.webp";
import restorativeImage from "../../assets/optimized/fitness/FlowState/restorative-practice.webp";
import breathImage from "../../assets/optimized/fitness/FlowState/breath-meditation.webp";
import studioImage from "../../assets/optimized/fitness/FlowState/studio-experience.webp";
import amaraImage from "../../assets/optimized/fitness/FlowState/teacher-amara.webp";
import leilaImage from "../../assets/optimized/fitness/FlowState/teacher-leila.webp";
import ninaImage from "../../assets/optimized/fitness/FlowState/teacher-nina.webp";
import benefitsImage from "../../assets/optimized/fitness/FlowState/mindful-benefits.webp";
import membershipImage from "../../assets/optimized/fitness/FlowState/membership.webp";
import abstractImage from "../../assets/optimized/fitness/FlowState/yoga-abstract-bg.webp";
import ctaImage from "../../assets/optimized/fitness/FlowState/cta.webp";

const navLinks = [
  ["Classes", "#classes"],
  ["Studio", "#studio"],
  ["Teachers", "#teachers"],
  ["Membership", "#membership"],
  ["Contact", "#contact"],
];

const classes = [
  {
    image: vinyasaImage,
    title: "Vinyasa Flow",
    text: "A breath-led movement class that builds strength, mobility, and focus through smooth transitions.",
    tag: "Flow",
  },
  {
    image: gentleImage,
    title: "Gentle Yoga",
    text: "A slower practice for releasing tension, improving flexibility, and moving with care.",
    tag: "Ease",
  },
  {
    image: restorativeImage,
    title: "Restorative Practice",
    text: "Deeply calming sessions using supported poses, stillness, and mindful breathing.",
    tag: "Restore",
  },
  {
    image: breathImage,
    title: "Breath & Meditation",
    text: "Guided breathwork and meditation to support clarity, presence, and nervous system balance.",
    tag: "Stillness",
  },
];

const teachers = [
  {
    image: amaraImage,
    name: "Amara Lane",
    role: "Vinyasa & Breathwork Teacher",
    tag: "Breath-led flow",
    bio: "Amara guides steady, spacious classes that connect movement quality with calm attention.",
  },
  {
    image: leilaImage,
    name: "Leila Morgan",
    role: "Gentle Yoga & Restorative Guide",
    tag: "Restorative care",
    bio: "Leila creates soft, supportive practices for students who want to slow down and move with ease.",
  },
  {
    image: ninaImage,
    name: "Nina Patel",
    role: "Meditation & Mobility Instructor",
    tag: "Mindful mobility",
    bio: "Nina blends grounding meditation with accessible mobility work for everyday balance.",
  },
];

const memberships = [
  {
    name: "First Flow",
    price: "$28",
    text: "For new students beginning their practice.",
    features: [
      "1 intro class",
      "Studio orientation",
      "Beginner-friendly guidance",
    ],
    popular: false,
  },
  {
    name: "Monthly Balance",
    price: "$96",
    text: "For steady weekly practice and mindful routine.",
    features: ["4 classes/month", "Class flexibility", "Member booking"],
    popular: true,
  },
  {
    name: "Unlimited Flow",
    price: "$168",
    text: "For students who want consistent practice and deeper support.",
    features: [
      "Unlimited classes",
      "Priority booking",
      "Monthly workshop access",
    ],
    popular: false,
  },
];

const benefits = [
  "More body awareness",
  "Better movement confidence",
  "Calmer daily routine",
  "Consistent mindful practice",
];

const testimonials = [
  [
    "A practice I can return to",
    "The class rhythm feels calm and welcoming. I have been able to show up more consistently without feeling rushed.",
    "Hannah P.",
  ],
  [
    "Such a peaceful studio",
    "The space is quiet, warm, and beautifully simple. It feels easy to settle in as soon as I arrive.",
    "Mira S.",
  ],
  [
    "More confident in class",
    "The teachers offer clear options and gentle guidance, which helped me feel comfortable joining different classes.",
    "Lauren T.",
  ],
];

function FlowButton({
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
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-xs font-bold uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-0.5 ${outline ? "border border-[#5F6F58]/25 bg-white/70 text-[#4F6049] hover:border-[#B97358] hover:text-[#B97358]" : "bg-[#5F6F58] text-white shadow-[0_18px_38px_rgba(95,111,88,.18)] hover:bg-[#4F6049]"} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function FlowHeading({
  label,
  title,
  text,
  light = false,
}: {
  label: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-4xl">
      <p
        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-[0.62rem] font-bold uppercase tracking-[0.2em] ${light ? "bg-white/12 text-[#F6E8D7]" : "bg-[#EFE7DA] text-[#8F624F]"}`}
      >
        <Leaf className="h-4 w-4" />
        {label}
      </p>
      <h2
        className={`flowstate-serif mt-5 text-[clamp(3.2rem,6vw,6.8rem)] font-normal leading-[0.94] tracking-[-0.055em] ${light ? "text-white" : "text-[#332F2A]"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${light ? "text-white/68" : "text-[#746D64]"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function FlowLogo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3 text-[#332F2A]"
      aria-label="FlowState Yoga home"
    >
      <span className="grid h-11 w-11 place-items-center rounded-full bg-[#EFE7DA] text-[#5F6F58]">
        <Flower2 className="h-5 w-5" />
      </span>
      <span>
        <strong className="flowstate-serif block text-xl font-normal leading-none tracking-[-0.03em]">
          FlowState
        </strong>
        <span className="mt-1 block text-[0.55rem] font-bold uppercase tracking-[0.24em] text-[#8A8178]">
          Yoga
        </span>
      </span>
    </a>
  );
}

export function FlowStateYoga() {
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
      { rootMargin: "-24% 0px -58% 0px", threshold: [0.05, 0.2, 0.45] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="flowstate-site -mt-16 overflow-hidden bg-[#F8F2EA] text-[#332F2A] selection:bg-[#D7B5A4] selection:text-[#332F2A]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#5F6F58]/10 bg-[#FFFDF9]/88 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.75rem] max-w-[96rem] items-center justify-between px-5 lg:px-10">
          <FlowLogo />
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="FlowState navigation"
          >
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  className={`rounded-full px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] transition ${active ? "flowstate-nav-active bg-[#EFE7DA] text-[#5F6F58]" : "text-[#81786F] hover:bg-[#F3ECE2] hover:text-[#332F2A]"}`}
                >
                  {label}
                </a>
              );
            })}
          </nav>
          <FlowButton href="#contact" className="hidden lg:inline-flex">
            Book a Class
          </FlowButton>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#5F6F58]/20 lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#5F6F58]/10 bg-[#FFFDF9] p-5 lg:hidden">
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-2xl px-4 py-3 text-sm font-bold uppercase tracking-[0.1em] ${active ? "flowstate-nav-active bg-[#EFE7DA] text-[#5F6F58]" : "text-[#81786F]"}`}
                >
                  {label}
                </a>
              );
            })}
            <FlowButton href="#contact" className="mt-4 w-full">
              Book a Class
            </FlowButton>
          </nav>
        )}
      </header>

      <section
        id="home"
        className="relative isolate overflow-hidden bg-[#F6EFE6] pt-[4.75rem]"
      >
        <img
          src={abstractImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-multiply"
        />
        <div className="absolute inset-x-0 top-0 h-40 bg-[#5F6F58]" />
        <div className="absolute left-[6%] top-40 h-80 w-80 rounded-full bg-[#D7B5A4]/35 blur-3xl" />
        <div className="absolute right-[10%] bottom-10 h-96 w-96 rounded-full bg-[#C9D2BD]/45 blur-3xl" />
        <div className="relative mx-auto min-h-[calc(100vh-4.75rem)] max-w-[100rem] px-5 py-10 lg:px-10 lg:py-14">
          <div className="grid gap-5 lg:grid-cols-[1.05fr_.95fr] lg:items-stretch">
            <div className="rounded-[2.5rem] bg-[#332F2A] p-6 text-white shadow-2xl shadow-[#6D5A4D]/12 md:p-9 lg:min-h-[42rem]">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/12 pb-6">
                <p className="inline-flex items-center gap-2 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-[#D7B5A4]">
                  <Waves className="h-4 w-4" /> Mindful movement studio
                </p>
                <span className="rounded-full border border-white/14 px-4 py-2 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white/55">
                  Small classes / soft pacing
                </span>
              </div>
              <div className="py-12 lg:py-16">
                <h1 className="flowstate-serif max-w-5xl text-[clamp(4rem,9vw,9.8rem)] font-normal uppercase leading-[0.82] tracking-[-0.075em]">
                  Move With Breath. Find Your Flow.
                </h1>
                <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68 md:text-xl">
                  Mindful yoga, breathwork, and restorative classes designed to
                  help you build flexibility, calm your mind, and reconnect with
                  your body.
                </p>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <FlowButton href="#contact">Book Your First Class</FlowButton>
                  <FlowButton href="#classes" outline>
                    Explore Classes
                  </FlowButton>
                </div>
              </div>
              <div className="grid gap-px overflow-hidden rounded-[1.5rem] bg-white/14 sm:grid-cols-4">
                {[
                  "Vinyasa Flow",
                  "Restorative Yoga",
                  "Breathwork",
                  "Beginner Friendly",
                ].map((chip) => (
                  <span
                    key={chip}
                    className="bg-white/[0.06] px-4 py-4 text-xs font-bold uppercase tracking-[0.12em] text-white/64"
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-5 lg:grid-rows-[1fr_auto]">
              <div className="relative min-h-[34rem] overflow-hidden rounded-[2.5rem] bg-[#5F6F58] shadow-2xl shadow-[#6D5A4D]/10">
                <img
                  src={heroImage}
                  alt="Peaceful FlowState Yoga studio practice"
                  className="absolute inset-0 h-full w-full object-cover opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#332F2A]/78 via-transparent to-transparent" />
                <div className="flowstate-breath-line absolute inset-x-8 top-10 h-28" />
                <div className="absolute inset-x-6 bottom-6 rounded-[1.75rem] bg-white/82 p-5 text-[#332F2A] backdrop-blur">
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#8F624F]">
                    Today in studio
                  </p>
                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    {[
                      ["7:30", "Gentle Flow"],
                      ["12:15", "Breath Reset"],
                      ["18:00", "Restorative"],
                    ].map(([time, name]) => (
                      <div
                        key={time}
                        className="border-l border-[#D7B5A4] pl-3"
                      >
                        <p className="text-xl font-semibold tracking-[-0.04em]">
                          {time}
                        </p>
                        <p className="text-xs font-bold text-[#746D64]">
                          {name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="rounded-[2rem] bg-white/78 p-6">
                  <Moon className="h-5 w-5 text-[#5F6F58]" />
                  <p className="mt-10 text-sm font-semibold leading-7 text-[#746D64]">
                    Soft pacing, thoughtful cues, and space to meet your
                    practice gently.
                  </p>
                </div>
                <div className="rounded-[2rem] bg-[#D7B5A4] p-6 text-[#332F2A]">
                  <Leaf className="h-5 w-5" />
                  <p className="mt-10 text-sm font-semibold leading-7">
                    Natural materials, warm light, and a quieter rhythm from
                    arrival to savasana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="classes" className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[96rem]">
          <FlowHeading
            label="Classes"
            title="Classes For Every Season Of Practice"
            text="Choose a class that matches your energy, experience, and need for movement or rest today."
          />
          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {classes.map((item) => (
              <article
                key={item.title}
                className="flowstate-card group overflow-hidden rounded-[2.5rem] border border-[#E1D6CA] bg-white/75 transition duration-500"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={`${item.title} class`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#FFFDF9] px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.15em] text-[#8F624F]">
                    {item.tag}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="flowstate-serif text-3xl font-normal tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#746D64]">
                    {item.text}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#5F6F58]"
                  >
                    Explore Class <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="studio"
        className="bg-[#EFE7DA] px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-[96rem] gap-10 lg:grid-cols-[.86fr_1.14fr] lg:items-stretch">
          <div className="rounded-[2.5rem] bg-[#FFFDF9] p-7">
            <FlowHeading
              label="Studio experience"
              title="A Studio Designed To Help You Slow Down"
              text="A peaceful studio atmosphere with small class sizes, supportive teachers, soft lighting, natural materials, and welcoming practices for all levels."
            />
            <div className="mt-10 grid gap-4">
              {[
                ["Mindful Guidance", SunMedium],
                ["Calm Space", Leaf],
                ["Personal Pace", Waves],
              ].map(([title, Icon], index) => {
                const StudioIcon = Icon as typeof Leaf;
                return (
                  <div
                    key={title as string}
                    className="grid grid-cols-[auto_1fr] items-center gap-5 rounded-[1.5rem] border border-[#E1D6CA] bg-[#F8F2EA] p-5"
                  >
                    <span className="text-xs font-bold text-[#B97358]">
                      0{index + 1}
                    </span>
                    <div>
                      <StudioIcon className="h-5 w-5 text-[#5F6F58]" />
                      <h3 className="mt-3 text-sm font-bold uppercase tracking-[0.12em]">
                        {title as string}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative min-h-[40rem] overflow-hidden rounded-[2.5rem]">
            <img
              src={studioImage}
              alt="FlowState Yoga calm studio with natural materials"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#332F2A]/82 via-[#332F2A]/5 to-transparent" />
            <div className="absolute bottom-7 left-7 right-7 border-t border-white/25 pt-6 text-white">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#D7B5A4]">
                Studio atmosphere
              </p>
              <p className="flowstate-serif mt-3 max-w-2xl text-5xl leading-[0.95] tracking-[-0.055em]">
                Soft light. Natural textures. Room to breathe.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="teachers" className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[96rem]">
          <FlowHeading
            label="Teachers"
            title="Practice With Thoughtful Teachers"
            text="Meet guides who offer clear instruction, gentle options, and steady support for your practice."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {teachers.map((teacher) => (
              <article
                key={teacher.name}
                className="flowstate-card rounded-[2.5rem] border border-[#E1D6CA] bg-white/75 p-4"
              >
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="aspect-[4/4.35] w-full rounded-[2rem] object-cover"
                />
                <div className="p-4">
                  <span className="rounded-full bg-[#EFE7DA] px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#8F624F]">
                    {teacher.tag}
                  </span>
                  <h3 className="flowstate-serif mt-5 text-4xl font-normal tracking-[-0.05em]">
                    {teacher.name}
                  </h3>
                  <p className="mt-1 text-sm font-bold text-[#5F6F58]">
                    {teacher.role}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#746D64]">
                    {teacher.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="membership"
        className="relative bg-[#F3ECE2] px-5 py-24 lg:px-10 lg:py-32"
      >
        <img
          src={membershipImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.07]"
        />
        <div className="relative mx-auto max-w-[96rem]">
          <FlowHeading
            label="Membership"
            title="Choose A Practice Rhythm"
            text="Simple options for your first class, steady weekly practice, or a deeper studio routine."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {memberships.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-[2.5rem] border p-7 ${plan.popular ? "border-[#5F6F58] bg-[#5F6F58] text-white shadow-2xl shadow-[#5F6F58]/20 lg:-translate-y-4" : "border-[#E1D6CA] bg-white/78"}`}
              >
                {plan.popular && (
                  <span className="absolute right-6 top-6 rounded-full bg-[#D7B5A4] px-3 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.14em] text-[#332F2A]">
                    Most Popular
                  </span>
                )}
                <p
                  className={`text-[0.62rem] font-bold uppercase tracking-[0.18em] ${plan.popular ? "text-[#F6E8D7]" : "text-[#8F624F]"}`}
                >
                  Studio membership
                </p>
                <h3 className="flowstate-serif mt-6 text-5xl font-normal tracking-[-0.06em]">
                  {plan.name}
                </h3>
                <div className="mt-7 flex items-end gap-2">
                  <span className="text-6xl font-normal tracking-[-0.08em]">
                    {plan.price}
                  </span>
                  <span
                    className={`pb-2 text-xs font-bold ${plan.popular ? "text-white/55" : "text-[#8A8178]"}`}
                  >
                    / month
                  </span>
                </div>
                <p
                  className={`mt-5 text-sm leading-7 ${plan.popular ? "text-white/72" : "text-[#746D64]"}`}
                >
                  {plan.text}
                </p>
                <div
                  className={`mt-6 grid gap-3 border-t pt-6 ${plan.popular ? "border-white/16" : "border-[#E1D6CA]"}`}
                >
                  {plan.features.map((feature) => (
                    <span
                      key={feature}
                      className="flex items-center gap-2 text-sm font-semibold"
                    >
                      <Check
                        className={`h-4 w-4 ${plan.popular ? "text-[#F6E8D7]" : "text-[#5F6F58]"}`}
                      />
                      {feature}
                    </span>
                  ))}
                </div>
                <FlowButton
                  href="#contact"
                  outline={plan.popular}
                  className="mt-8"
                >{`Choose ${plan.name}`}</FlowButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[96rem] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <FlowHeading
              label="Mindful benefits"
              title="The Practice Meets You Where You Are"
              text="FlowState focuses on realistic, sustainable benefits that come from consistent mindful practice."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="rounded-[2rem] border border-[#E1D6CA] bg-white/72 p-6"
                >
                  <span className="text-xs font-bold text-[#B97358]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em]">
                    {benefit}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <img
            src={benefitsImage}
            alt="Mindful yoga practice benefits"
            className="rounded-[3rem] object-cover shadow-2xl shadow-[#6D5A4D]/10"
          />
        </div>
      </section>

      <section className="bg-[#EFE7DA] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[96rem]">
          <FlowHeading
            label="Student notes"
            title="A Softer Way To Keep Showing Up"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map(([title, quote, name]) => (
              <blockquote
                key={title}
                className="rounded-[2.5rem] bg-white/65 p-7"
              >
                <Sparkles className="h-5 w-5 text-[#B97358]" />
                <h3 className="flowstate-serif mt-6 text-3xl font-normal tracking-[-0.04em]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#746D64]">{quote}</p>
                <footer className="mt-7 text-xs font-bold uppercase tracking-[0.14em] text-[#5F6F58]">
                  {name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-[#332F2A] px-5 py-28 text-white lg:px-10 lg:py-36"
      >
        <img
          src={ctaImage}
          alt="Peaceful FlowState Yoga practice"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#332F2A] via-[#332F2A]/86 to-[#332F2A]/35" />
        <div className="relative mx-auto max-w-[96rem]">
          <div className="max-w-4xl">
            <p className="text-[0.62rem] font-bold uppercase tracking-[0.24em] text-[#D7B5A4]">
              Begin gently
            </p>
            <h2 className="flowstate-serif mt-6 text-[clamp(4rem,8vw,8.5rem)] font-normal leading-[0.9] tracking-[-0.065em]">
              Begin Your Flow Today
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Step into a calm studio space where movement, breath, and presence
              come together.
            </p>
            <FlowButton href="mailto:hello@flowstate.example" className="mt-9">
              Book a Class
            </FlowButton>
          </div>
        </div>
      </section>

      <footer className="bg-[#FFFDF9] px-5 pb-8 pt-14 lg:px-10">
        <div className="mx-auto max-w-[96rem]">
          <div className="flex flex-col justify-between gap-10 border-b border-[#E1D6CA] pb-10 lg:flex-row lg:items-start">
            <div>
              <FlowLogo />
              <p className="mt-5 max-w-sm text-sm leading-7 text-[#746D64]">
                Mindful movement studio for calm, strength, and balance.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs font-bold uppercase tracking-[0.13em] text-[#81786F] hover:text-[#5F6F58]"
                >
                  {label}
                </a>
              ))}
            </div>
            <div>
              <p className="text-[0.58rem] font-bold uppercase tracking-[0.18em] text-[#8A8178]">
                Social
              </p>
              <div className="mt-4 flex gap-2">
                {["IG", "YT", "TT"].map((social) => (
                  <a
                    key={social}
                    href="#contact"
                    aria-label={`${social} social placeholder`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-[#E1D6CA] text-[0.6rem] font-bold text-[#81786F] hover:border-[#5F6F58] hover:text-[#5F6F58]"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <p className="pt-7 text-[0.65rem] text-[#8A8178]">
            © 2026 FlowState Yoga. Class schedules, teacher availability, and
            membership details may vary.
          </p>
        </div>
      </footer>
    </main>
  );
}
