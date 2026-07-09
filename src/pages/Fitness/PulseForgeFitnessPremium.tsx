import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  Dumbbell,
  Flame,
  Gauge,
  HeartPulse,
  Menu,
  MoveUpRight,
  ShieldCheck,
  Star,
  Target,
  TimerReset,
  TrendingUp,
  UsersRound,
  X,
  Zap,
} from "lucide-react";
import heroImage from "../../assets/optimized/fitness/pulseforge/hero.webp";
import strengthImage from "../../assets/optimized/fitness/pulseforge/strength-training.webp";
import conditioningImage from "../../assets/optimized/fitness/pulseforge/conditioning.webp";
import mobilityImage from "../../assets/optimized/fitness/pulseforge/mobility-recovery.webp";
import processImage from "../../assets/optimized/fitness/pulseforge/coaching-process.webp";
import resultsImage from "../../assets/optimized/fitness/pulseforge/results-progress.webp";
import membershipImage from "../../assets/optimized/fitness/pulseforge/membership-training.webp";
import abstractImage from "../../assets/optimized/fitness/pulseforge/pulseforge-abstract-bg.webp";
import ctaImage from "../../assets/optimized/fitness/pulseforge/cta-gym.webp";

const navLinks = [
  ["Programs", "#programs"],
  ["Coaching", "#coaching"],
  ["Results", "#results"],
  ["Membership", "#membership"],
  ["Contact", "#contact"],
];

const programs = [
  {
    image: strengthImage,
    icon: Dumbbell,
    number: "01",
    title: "Strength Training",
    text: "Build foundational power with progressive lifts, proper form, and smart coaching.",
    tags: ["Progressive lifts", "Form coaching"],
  },
  {
    image: conditioningImage,
    icon: Zap,
    number: "02",
    title: "Conditioning",
    text: "Improve endurance, stamina, and athletic performance with structured training circuits.",
    tags: ["Work capacity", "Athletic circuits"],
  },
  {
    image: mobilityImage,
    icon: HeartPulse,
    number: "03",
    title: "Mobility & Recovery",
    text: "Move better, reduce stiffness, and support long-term progress with guided mobility work.",
    tags: ["Range of motion", "Recovery habits"],
  },
];

const memberships = [
  {
    name: "Starter Forge",
    price: "$179",
    cadence: "/ month",
    text: "For beginners who want structure and confidence.",
    features: [
      "2 coached sessions / week",
      "Mobility basics",
      "Progress tracking",
    ],
    popular: false,
  },
  {
    name: "Power Forge",
    price: "$249",
    cadence: "/ month",
    text: "For members ready to train with intensity and accountability.",
    features: [
      "3 coached sessions / week",
      "Strength + conditioning",
      "Coaching check-ins",
    ],
    popular: true,
  },
  {
    name: "Elite Forge",
    price: "Custom",
    cadence: "coaching",
    text: "For advanced members who want performance-focused support.",
    features: [
      "4+ sessions / week",
      "Custom programming",
      "Recovery planning",
      "Priority coaching",
    ],
    popular: false,
  },
];

function ForgeButton({
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
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg px-6 text-xs font-black uppercase tracking-[0.15em] transition duration-300 hover:-translate-y-0.5 ${outline ? "border border-white/30 bg-white/[0.04] text-white hover:border-[#F05A28] hover:text-[#FF7444]" : "bg-[#F05A28] text-white shadow-[0_14px_38px_rgba(240,90,40,.25)] hover:bg-[#ff7040]"} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function ForgeHeading({
  eyebrow,
  title,
  text,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-4xl">
      <p className="flex items-center gap-3 text-[0.64rem] font-black uppercase tracking-[0.25em] text-[#F05A28] before:h-px before:w-8 before:bg-[#F05A28]">
        {eyebrow}
      </p>
      <h2
        className={`mt-5 text-[clamp(2.8rem,5.5vw,5.8rem)] font-black uppercase leading-[0.88] tracking-[-0.065em] ${light ? "text-white" : "text-[#111318]"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${light ? "text-white/58" : "text-[#656B74]"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function ForgeLogo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3 text-white"
      aria-label="PulseForge Fitness home"
    >
      <span className="relative grid h-10 w-10 place-items-center rounded-lg bg-[#F05A28]">
        <Flame className="h-5 w-5 fill-current" />
        <span className="absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-[#0B0D10] bg-white" />
      </span>
      <span>
        <strong className="block text-sm font-black uppercase leading-none tracking-[0.03em]">
          PulseForge
        </strong>
        <span className="mt-1 block text-[0.5rem] font-black uppercase tracking-[0.25em] text-white/45">
          Fitness Coaching
        </span>
      </span>
    </a>
  );
}

export function PulseForgeFitness() {
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
    <main className="pulseforge-premium -mt-16 overflow-hidden bg-[#ECEEF1] text-[#111318] selection:bg-[#F05A28] selection:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0B0D10]/94 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[4.5rem] max-w-[94rem] items-center justify-between px-5 lg:px-10">
          <ForgeLogo />
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="PulseForge navigation"
          >
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  className={`rounded-lg px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.13em] transition ${active ? "pulseforge-nav-active bg-white/10 text-[#FF7444]" : "text-white/55 hover:bg-white/[0.06] hover:text-white"}`}
                >
                  {label}
                </a>
              );
            })}
          </nav>
          <ForgeButton href="#contact" className="hidden lg:inline-flex">
            Start Training
          </ForgeButton>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
            className="grid h-10 w-10 place-items-center rounded-lg border border-white/15 lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#0B0D10] p-5 lg:hidden">
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-lg px-4 py-3 text-sm font-bold ${active ? "pulseforge-nav-active bg-white/10 text-[#FF7444]" : "text-white/65"}`}
                >
                  {label}
                </a>
              );
            })}
            <ForgeButton href="#contact" className="mt-4 w-full">
              Start Training
            </ForgeButton>
          </nav>
        )}
      </header>

      <section
        id="home"
        className="relative min-h-[58rem] bg-[#0B0D10] pt-[4.5rem] text-white"
      >
        <img
          src={heroImage}
          alt="PulseForge coach guiding a member through strength training"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,13,16,.97)_0%,rgba(11,13,16,.87)_46%,rgba(11,13,16,.25)_100%)]" />
        <img
          src={abstractImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08] mix-blend-screen"
        />
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(90deg,white_1px,transparent_1px)] [background-size:12.5%_100%]" />
        <div className="relative mx-auto flex min-h-[53.5rem] max-w-[94rem] flex-col justify-between px-5 py-16 lg:px-10 lg:py-20">
          <div className="max-w-6xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#FF7444] backdrop-blur">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#F05A28]" />{" "}
              Coaching that keeps you moving
            </div>
            <h1 className="mt-8 max-w-6xl text-[clamp(4rem,8.6vw,9rem)] font-black uppercase leading-[0.79] tracking-[-0.08em]">
              Build Power. <span className="text-[#F05A28]">Move Better.</span>{" "}
              Stay Accountable.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/68">
              Strength, conditioning, and mobility coaching designed to help you
              train with structure, track progress, and stay consistent from
              your first session forward.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ForgeButton href="#contact">
                Start Your First Session
              </ForgeButton>
              <ForgeButton href="#programs" outline>
                View Programs
              </ForgeButton>
            </div>
          </div>
          <div className="mt-16 grid max-w-5xl border-l border-t border-white/15 sm:grid-cols-3">
            {[
              [TimerReset, "12-Week", "Training Plans"],
              [UsersRound, "1:1", "Coaching Support"],
              [BarChart3, "Progress", "Based Programming"],
            ].map(([Icon, value, label]) => {
              const StatIcon = Icon as typeof TimerReset;
              return (
                <div
                  key={label as string}
                  className="flex items-center gap-4 border-b border-r border-white/15 bg-black/35 p-5 backdrop-blur"
                >
                  <StatIcon className="h-6 w-6 text-[#F05A28]" />
                  <div>
                    <p className="text-xl font-black uppercase">
                      {value as string}
                    </p>
                    <p className="mt-1 text-[0.58rem] font-black uppercase tracking-[0.17em] text-white/40">
                      {label as string}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="programs" className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[94rem]">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <ForgeHeading
              eyebrow="Training programs"
              title="Three systems. One stronger foundation."
              text="Choose a focused training lane or combine all three through coached programming built around your starting point."
            />
            <p className="max-w-md border-l-2 border-[#F05A28] pl-5 text-sm leading-7 text-[#656B74]">
              Every program includes coaching cues, clear session intent, and a
              way to understand what comes next.
            </p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {programs.map(
              ({ image, icon: Icon, number, title, text, tags }) => (
                <article
                  key={title}
                  className="forge-card group overflow-hidden rounded-2xl border border-[#CFD3D8] bg-white"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={image}
                      alt={`${title} coaching`}
                      className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/65 via-transparent to-transparent" />
                    <span className="absolute left-5 top-5 grid h-11 w-11 place-items-center rounded-lg bg-[#F05A28] text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="absolute bottom-4 right-5 text-6xl font-black tracking-[-0.08em] text-white/35">
                      {number}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.05em]">
                      {title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#656B74]">
                      {text}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#ECEEF1] px-3 py-1.5 text-[0.6rem] font-black uppercase tracking-[0.12em] text-[#4D535B]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href="#contact"
                      className="mt-7 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.14em] text-[#D94718]"
                    >
                      Learn More <MoveUpRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        id="coaching"
        className="bg-[#111318] px-5 py-24 text-white lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-[94rem] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <ForgeHeading
              eyebrow="Coaching process"
              title="A clear path from first session to real progress"
              text="No random workouts. Your coaching relationship starts with context and evolves through useful feedback."
              light
            />
            <div className="mt-10 grid gap-1">
              {[
                [
                  "01",
                  "Assess",
                  "Understand your goals, movement, experience level, and starting point.",
                ],
                [
                  "02",
                  "Build",
                  "Create a balanced plan around strength, conditioning, and mobility.",
                ],
                [
                  "03",
                  "Coach",
                  "Stay accountable with guidance, form support, and consistent check-ins.",
                ],
                [
                  "04",
                  "Progress",
                  "Track improvements and adjust the plan as strength and confidence grow.",
                ],
              ].map(([number, title, text]) => (
                <article
                  key={number}
                  className="group grid gap-3 border-t border-white/12 py-5 sm:grid-cols-[3rem_.4fr_1fr] sm:items-center"
                >
                  <span className="text-sm font-black text-[#F05A28]">
                    {number}
                  </span>
                  <h3 className="text-xl font-black uppercase">{title}</h3>
                  <p className="text-sm leading-6 text-white/48">{text}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="relative">
            <img
              src={processImage}
              alt="PulseForge coach assessing movement and building a plan"
              className="min-h-[42rem] w-full rounded-2xl object-cover grayscale-[20%]"
            />
            <div className="absolute bottom-5 left-5 right-5 rounded-xl border border-white/15 bg-[#0B0D10]/88 p-5 backdrop-blur">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#F05A28]">
                    Current phase
                  </p>
                  <p className="mt-1 font-black uppercase">Build / Week 03</p>
                </div>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-[#F05A28]">
                  <Target className="h-5 w-5" />
                </span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[42%] rounded-full bg-gradient-to-r from-[#F05A28] to-[#FF9A57]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="results" className="bg-white">
        <div className="grid lg:grid-cols-2">
          <div className="relative min-h-[38rem]">
            <img
              src={resultsImage}
              alt="Member tracking training progress with a PulseForge coach"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D10]/65 via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#FF7444]">
                Progress, not promises
              </p>
              <p className="mt-2 max-w-md text-3xl font-black uppercase leading-tight">
                A stronger training habit starts with the next completed
                session.
              </p>
            </div>
          </div>
          <div className="flex items-center px-5 py-20 lg:px-16 lg:py-28 xl:px-20">
            <div>
              <ForgeHeading
                eyebrow="Results & transformation"
                title="Progress is built, not rushed"
                text="Progress is built through consistency, structure, and coaching that adapts with you. We track the work without making extreme promises."
              />
              <div className="mt-9 grid gap-3 sm:grid-cols-2">
                {[
                  [Dumbbell, "More strength"],
                  [Gauge, "Better movement"],
                  [ShieldCheck, "Improved consistency"],
                  [TrendingUp, "Clear training direction"],
                ].map(([Icon, label]) => {
                  const ResultIcon = Icon as typeof Dumbbell;
                  return (
                    <div
                      key={label as string}
                      className="flex items-center gap-3 rounded-xl border border-[#D8DBDF] bg-[#F5F6F7] p-4"
                    >
                      <ResultIcon className="h-5 w-5 text-[#F05A28]" />
                      <span className="font-black">{label as string}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="membership"
        className="relative bg-[#ECEEF1] px-5 py-24 lg:px-10 lg:py-32"
      >
        <img
          src={membershipImage}
          alt=""
          className="absolute inset-x-0 top-0 h-full w-full object-cover opacity-[0.035] grayscale"
        />
        <div className="relative mx-auto max-w-[94rem]">
          <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
            <ForgeHeading
              eyebrow="Membership plans"
              title="Choose your level of support"
              text="Simple coaching tiers for different training rhythms. Final recommendations follow a conversation about goals and availability."
            />
            <p className="max-w-lg text-sm leading-7 text-[#656B74]">
              Illustrative membership pricing may vary by coaching format,
              schedule, and location.
            </p>
          </div>
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {memberships.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col rounded-2xl border p-7 ${plan.popular ? "border-[#F05A28] bg-[#111318] text-white shadow-[0_25px_65px_rgba(17,19,24,.24)] lg:-translate-y-4" : "border-[#CFD3D8] bg-white"}`}
              >
                {plan.popular && (
                  <span className="absolute right-5 top-5 rounded-full bg-[#F05A28] px-3 py-1.5 text-[0.58rem] font-black uppercase tracking-[0.14em] text-white">
                    Most Popular
                  </span>
                )}
                <p
                  className={`text-[0.62rem] font-black uppercase tracking-[0.18em] ${plan.popular ? "text-[#FF7444]" : "text-[#D94718]"}`}
                >
                  Coached membership
                </p>
                <h3 className="mt-5 text-3xl font-black uppercase tracking-[-0.05em]">
                  {plan.name}
                </h3>
                <div className="mt-7 flex items-end gap-2">
                  <span className="text-5xl font-black tracking-[-0.07em]">
                    {plan.price}
                  </span>
                  <span
                    className={`pb-1 text-xs font-bold ${plan.popular ? "text-white/45" : "text-[#747A83]"}`}
                  >
                    {plan.cadence}
                  </span>
                </div>
                <p
                  className={`mt-5 text-sm leading-7 ${plan.popular ? "text-white/55" : "text-[#656B74]"}`}
                >
                  {plan.text}
                </p>
                <div
                  className={`mt-6 grid gap-3 border-t pt-6 ${plan.popular ? "border-white/12" : "border-[#E0E2E5]"}`}
                >
                  {plan.features.map((feature) => (
                    <span
                      key={feature}
                      className="flex items-center gap-2 text-sm font-bold"
                    >
                      <Check className="h-4 w-4 text-[#F05A28]" />
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href="#contact"
                  className={`mt-8 inline-flex min-h-12 items-center justify-center rounded-lg px-5 text-xs font-black uppercase tracking-[0.14em] transition ${plan.popular ? "bg-[#F05A28] text-white hover:bg-[#ff7040]" : "bg-[#111318] text-white hover:bg-[#F05A28]"}`}
                >
                  Choose {plan.name}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#111318] px-5 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[94rem]">
          <ForgeHeading
            eyebrow="Member experience"
            title="Structure changes how training feels"
            text="Fictional member perspectives representing common coaching experiences—consistency, confidence, and a clearer plan."
            light
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              [
                "Maya R.",
                "I stopped guessing what to do each session. The plan is clear, and the check-ins make it easier to stay consistent.",
              ],
              [
                "Daniel K.",
                "The coaching helped me feel more confident with the basics before adding intensity. I understand why each session matters.",
              ],
              [
                "Alex T.",
                "I finally have a rhythm I can maintain. The mix of strength, conditioning, and mobility feels purposeful instead of random.",
              ],
            ].map(([name, quote], index) => (
              <blockquote
                key={name}
                className="rounded-2xl border border-white/12 bg-white/[0.045] p-7"
              >
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, star) => (
                    <Star
                      key={star}
                      className="h-4 w-4 fill-[#F05A28] text-[#F05A28]"
                    />
                  ))}
                </div>
                <p className="mt-8 text-lg leading-8 text-white/75">
                  “{quote}”
                </p>
                <footer className="mt-8 flex items-center gap-3 border-t border-white/10 pt-5">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-[#F05A28] text-xs font-black">
                    0{index + 1}
                  </span>
                  <div>
                    <p className="font-black">{name}</p>
                    <p className="text-xs text-white/35">PulseForge member</p>
                  </div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative bg-[#0B0D10] px-5 py-28 text-white lg:px-10 lg:py-36"
      >
        <img
          src={ctaImage}
          alt="PulseForge coaching session in progress"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B0D10] via-[#0B0D10]/92 to-[#0B0D10]/40" />
        <div className="relative mx-auto max-w-[94rem]">
          <div className="max-w-5xl">
            <p className="text-[0.65rem] font-black uppercase tracking-[0.24em] text-[#FF7444]">
              Your next session starts here
            </p>
            <h2 className="mt-6 text-[clamp(3.5rem,7.5vw,8rem)] font-black uppercase leading-[0.82] tracking-[-0.075em]">
              Ready to forge your next level?
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/65">
              Start with a structured training plan, expert coaching, and a
              fitness system built to keep you moving.
            </p>
            <ForgeButton
              href="mailto:start@pulseforge.example"
              className="mt-9"
            >
              Book Your First Session
            </ForgeButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#08090B] px-5 pb-8 pt-14 text-white lg:px-10">
        <div className="mx-auto max-w-[94rem]">
          <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-start">
            <div>
              <ForgeLogo />
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
                Build power with coaching that keeps you moving.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {navLinks
                .filter(([label]) =>
                  ["Programs", "Coaching", "Membership", "Contact"].includes(
                    label,
                  ),
                )
                .map(([label, href]) => (
                  <a
                    key={label}
                    href={href}
                    className="text-xs font-black uppercase tracking-[0.14em] text-white/50 hover:text-white"
                  >
                    {label}
                  </a>
                ))}
            </div>
            <div>
              <p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-white/35">
                Follow training
              </p>
              <div className="mt-4 flex gap-2">
                {["IG", "YT", "TT"].map((social) => (
                  <a
                    key={social}
                    href="#contact"
                    aria-label={`${social} social placeholder`}
                    className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-[0.6rem] font-black hover:border-[#F05A28] hover:text-[#FF7444]"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <p className="pt-7 text-[0.65rem] text-white/28">
            © 2026 PulseForge Fitness. Coaching plans, schedules, membership
            pricing, and availability are subject to change.
          </p>
        </div>
      </footer>
    </main>
  );
}
