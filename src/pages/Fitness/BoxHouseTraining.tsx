import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Check,
  Flame,
  Gauge,
  Menu,
  MoveUpRight,
  Shield,
  Swords,
  Target,
  Trophy,
  X,
  Zap,
} from "lucide-react";
import heroImage from "../../assets/optimized/fitness/boxhouse/hero.webp";
import fundamentalsImage from "../../assets/optimized/fitness/boxhouse/boing-fundamentals.webp";
import heavyBagImage from "../../assets/optimized/fitness/boxhouse/heavy-bag-conditioning.webp";
import footworkImage from "../../assets/optimized/fitness/boxhouse/footwork-speed.webp";
import strengthImage from "../../assets/optimized/fitness/boxhouse/strength-circuit.webp";
import processImage from "../../assets/optimized/fitness/boxhouse/coaching-process.webp";
import facilityImage from "../../assets/optimized/fitness/boxhouse/facility.webp";
import oneOnOneImage from "../../assets/optimized/fitness/boxhouse/one-on-one-coaching.webp";
import smallGroupImage from "../../assets/optimized/fitness/boxhouse/small-group-training.webp";
import conditioningImage from "../../assets/optimized/fitness/boxhouse/conditioning-plans.webp";
import membershipImage from "../../assets/optimized/fitness/boxhouse/membership.webp";
import cultureImage from "../../assets/optimized/fitness/boxhouse/culture.webp";
import abstractImage from "../../assets/optimized/fitness/boxhouse/boxing-abstract-bg.webp";
import ctaImage from "../../assets/optimized/fitness/boxhouse/cta.webp";

const navLinks = [
  ["Classes", "#classes"],
  ["Coaching", "#coaching"],
  ["Facility", "#facility"],
  ["Membership", "#membership"],
  ["Contact", "#contact"],
];

const classes = [
  {
    image: fundamentalsImage,
    title: "Boxing Fundamentals",
    text: "Learn stance, guard, footwork, punches, defense, and clean technique from the ground up.",
    rounds: "03 rounds",
  },
  {
    image: heavyBagImage,
    title: "Heavy Bag Conditioning",
    text: "Build power, rhythm, and endurance through high-energy bag rounds and intervals.",
    rounds: "08 rounds",
  },
  {
    image: footworkImage,
    title: "Footwork & Speed",
    text: "Improve movement, coordination, reaction time, and ring awareness with focused drills.",
    rounds: "05 drills",
  },
  {
    image: strengthImage,
    title: "Strength Circuit",
    text: "Train with bodyweight, dumbbells, kettlebells, and conditioning tools to support athletic performance.",
    rounds: "04 blocks",
  },
];

const processSteps = [
  [
    "01",
    "Learn",
    "Build the basics with proper stance, footwork, breathing, and punch mechanics.",
  ],
  [
    "02",
    "Drill",
    "Practice combinations, movement patterns, defense, and timing with coach guidance.",
  ],
  [
    "03",
    "Condition",
    "Add rounds, circuits, and intervals that build stamina and training discipline.",
  ],
  [
    "04",
    "Progress",
    "Track consistency, sharpen technique, and increase intensity as your confidence grows.",
  ],
];

const facilityFeatures = [
  "Heavy Bag Wall",
  "Coach-Led Rounds",
  "Strength Zone",
  "Focused Atmosphere",
];

const coaching = [
  {
    image: oneOnOneImage,
    title: "1:1 Boxing Coaching",
    text: "Personalized technique work, mitt rounds, movement, and feedback.",
  },
  {
    image: smallGroupImage,
    title: "Small Group Training",
    text: "High-energy coaching with structure, accountability, and focused instruction.",
  },
  {
    image: conditioningImage,
    title: "Conditioning Plans",
    text: "Build stamina and consistency with training blocks designed around your goals.",
  },
];

const memberships = [
  {
    name: "First Round",
    price: "$35",
    text: "For beginners ready to start boxing.",
    features: [
      "1 intro class",
      "Glove setup guidance",
      "Beginner-friendly coaching",
    ],
    popular: false,
  },
  {
    name: "House Training",
    price: "$118",
    text: "For members who want weekly boxing and conditioning.",
    features: ["4 classes/month", "Bag rounds", "Conditioning circuits"],
    popular: true,
  },
  {
    name: "Unlimited Rounds",
    price: "$188",
    text: "For members who want consistent training and full access.",
    features: [
      "Unlimited classes",
      "Priority booking",
      "Monthly coach check-in",
    ],
    popular: false,
  },
];

const culture = [
  "Better boxing technique",
  "Stronger conditioning",
  "More training consistency",
  "Improved movement confidence",
];

const testimonials = [
  [
    "The basics finally clicked",
    "The coaches broke down stance, guard, and combinations in a way that made boxing feel approachable without watering it down.",
    "Andre M.",
  ],
  [
    "My stamina is catching up",
    "The bag rounds are tough but structured. I can feel myself lasting longer each week because the workouts have a clear rhythm.",
    "Jules R.",
  ],
  [
    "Focused from start to finish",
    "Every class has coaching, rounds, and a purpose. I like knowing exactly what I am working on when I step in.",
    "Sam T.",
  ],
];

function BoxButton({
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
      className={`group inline-flex min-h-12 items-center justify-center gap-3 px-6 text-xs font-black uppercase tracking-[0.16em] transition duration-300 hover:-translate-y-0.5 ${outline ? "border border-white/20 bg-white/[0.035] text-white hover:border-[#E24835] hover:text-[#F7B04A]" : "bg-[#E24835] text-white shadow-[7px_7px_0_rgba(247,176,74,.24)] hover:bg-[#f05b44]"} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function BoxHeading({
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
        className={`inline-flex items-center gap-2 text-[0.62rem] font-black uppercase tracking-[0.24em] ${light ? "text-[#F7B04A]" : "text-[#B13228]"}`}
      >
        <Flame className="h-4 w-4" />
        {label}
      </p>
      <h2
        className={`mt-5 text-[clamp(3.2rem,6.6vw,7.2rem)] font-semibold uppercase leading-[0.82] tracking-[-0.075em] ${light ? "text-[#F8EFE2]" : "text-[#171717]"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${light ? "text-white/58" : "text-[#5E5A55]"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function BoxLogo() {
  return (
    <a
      href="#home"
      className="flex items-center gap-3 text-white"
      aria-label="BoxHouse Training home"
    >
      <span className="relative grid h-11 w-11 place-items-center bg-[#E24835] text-white">
        <Swords className="h-5 w-5" />
        <span className="absolute -bottom-1 -right-1 h-2.5 w-2.5 bg-[#F7B04A]" />
      </span>
      <span>
        <strong className="block text-base font-black uppercase leading-none tracking-[-0.03em]">
          BoxHouse
        </strong>
        <span className="mt-1 block text-[0.52rem] font-black uppercase tracking-[0.24em] text-white/42">
          Training
        </span>
      </span>
    </a>
  );
}

export function BoxHouseTraining() {
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
    <main className="boxhouse-site -mt-16 overflow-hidden bg-[#101112] text-[#F8EFE2] selection:bg-[#E24835] selection:text-white">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#0A0B0C]/95 text-white backdrop-blur-xl">
        <div className="mx-auto flex h-[4.75rem] max-w-[98rem] items-center justify-between px-5 lg:px-10">
          <BoxLogo />
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="BoxHouse navigation"
          >
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  className={`px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.14em] transition ${active ? "boxhouse-nav-active bg-[#E24835] text-white" : "text-white/48 hover:bg-white/[0.06] hover:text-white"}`}
                >
                  {label}
                </a>
              );
            })}
          </nav>
          <BoxButton href="#contact" className="hidden lg:inline-flex">
            Start Training
          </BoxButton>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="grid h-10 w-10 place-items-center border border-white/16 lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#0A0B0C] p-5 lg:hidden">
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`block px-4 py-3 text-sm font-black uppercase tracking-[0.1em] ${active ? "boxhouse-nav-active bg-[#E24835] text-white" : "text-white/58"}`}
                >
                  {label}
                </a>
              );
            })}
            <BoxButton href="#contact" className="mt-4 w-full">
              Start Training
            </BoxButton>
          </nav>
        )}
      </header>

      <section
        id="home"
        className="relative isolate overflow-hidden bg-[#0A0B0C] pt-[4.75rem]"
      >
        <img
          src={abstractImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.14] mix-blend-screen"
        />
        <div className="absolute left-0 top-0 h-full w-2/3 bg-[linear-gradient(135deg,#0A0B0C_0%,#17191B_58%,#3A1110_100%)]" />
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[#E24835]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,11,12,.96)_0%,rgba(10,11,12,.74)_48%,rgba(10,11,12,.2)_100%)]" />
        <div className="boxhouse-ropes absolute inset-x-[-6%] bottom-24 h-28 opacity-65" />
        <div className="relative mx-auto grid min-h-[calc(100vh-4.75rem)] max-w-[100rem] gap-8 px-5 py-12 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:px-10 lg:py-16">
          <div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-[#E24835] px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.2em] text-white">
                Red corner
              </span>
              <span className="border border-white/16 bg-white/[0.055] px-4 py-2 text-[0.58rem] font-black uppercase tracking-[0.2em] text-white/58">
                Boxing and conditioning
              </span>
            </div>
            <h1 className="mt-8 max-w-6xl text-[clamp(5rem,12vw,12.5rem)] font-semibold uppercase leading-[0.68] tracking-[-0.095em]">
              Hit Hard. Move Fast. Train With Purpose.
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/66 md:text-xl">
              Boxing technique, conditioning circuits, and coach-led training
              built to sharpen your skills, build stamina, and keep every
              session focused.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <BoxButton href="#contact">Book Your First Class</BoxButton>
              <BoxButton href="#classes" outline>
                View Training Options
              </BoxButton>
            </div>
          </div>
          <div className="relative">
            <div className="relative min-h-[44rem] overflow-hidden border-[10px] border-[#F8EFE2] bg-[#17191B] shadow-2xl shadow-black/50">
              <img
                src={heroImage}
                alt="BoxHouse athlete hitting a heavy bag"
                className="absolute inset-0 h-full w-full object-cover grayscale-[12%] contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0B0C]/90 via-transparent to-[#0A0B0C]/10" />
              <div className="absolute left-0 top-0 bg-[#F8EFE2] px-5 py-3 text-[0.6rem] font-black uppercase tracking-[0.18em] text-[#171717]">
                BoxHouse / Round 01
              </div>
              <div className="absolute bottom-5 left-5 right-5 grid gap-3 bg-[#0A0B0C]/88 p-5 backdrop-blur sm:grid-cols-3">
                <div>
                  <p className="text-5xl font-black tracking-[-0.08em] text-[#F7B04A]">
                    03:00
                  </p>
                  <p className="text-[0.55rem] font-black uppercase tracking-[0.16em] text-white/42">
                    Round timer
                  </p>
                </div>
                {[
                  ["06", "Bag lanes"],
                  ["04", "Skill blocks"],
                ].map(([value, label]) => (
                  <div key={label} className="border-l border-white/12 pl-4">
                    <p className="text-4xl font-black tracking-[-0.08em] text-white">
                      {value}
                    </p>
                    <p className="text-[0.55rem] font-black uppercase tracking-[0.16em] text-white/42">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -left-5 top-1/2 hidden -translate-y-1/2 bg-[#F7B04A] px-3 py-8 text-[0.58rem] font-black uppercase tracking-[0.16em] text-[#171717] [writing-mode:vertical-rl] md:block">
              Coach-led rounds
            </div>
          </div>
        </div>
        <div className="relative border-y border-white/12 bg-[#101112]">
          <div className="mx-auto grid max-w-[100rem] gap-px bg-white/12 sm:grid-cols-4">
            {[
              "Boxing Technique",
              "Heavy Bag Classes",
              "Conditioning Circuits",
              "Coach-Led Training",
            ].map((chip) => (
              <span
                key={chip}
                className="bg-[#101112] px-5 py-5 text-center text-xs font-black uppercase tracking-[0.14em] text-white/58"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section
        id="classes"
        className="bg-[#F8EFE2] px-5 py-24 text-[#171717] lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[98rem]">
          <div className="grid gap-10 lg:grid-cols-[.78fr_1.22fr] lg:items-start">
            <BoxHeading
              label="Training classes"
              title="Boxing And Conditioning Built For Every Level"
              text="Step into structured rounds that balance boxing technique, conditioning pressure, and coach-led intensity."
            />
            <div className="border-y-2 border-[#171717]">
              {classes.map((item, index) => (
                <article
                  key={item.title}
                  className="group grid gap-5 border-b border-[#CFC5B7] py-5 last:border-b-0 md:grid-cols-[4rem_12rem_1fr_auto] md:items-center"
                >
                  <span className="text-3xl font-black text-[#B13228]">
                    0{index + 1}
                  </span>
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#171717]">
                    <img
                      src={item.image}
                      alt={`${item.title} training`}
                      className="h-full w-full object-cover grayscale-[20%] transition duration-700 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <div>
                    <p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-[#B13228]">
                      {item.rounds}
                    </p>
                    <h3 className="mt-2 text-3xl font-black uppercase leading-none tracking-[-0.06em]">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#5E5A55]">
                      {item.text}
                    </p>
                  </div>
                  <a
                    href="#contact"
                    aria-label={`Explore ${item.title}`}
                    className="grid h-12 w-12 place-items-center border border-[#171717] transition group-hover:bg-[#E24835] group-hover:text-white"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-[#151719] px-5 py-24 lg:px-10 lg:py-32">
        <img
          src={processImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08] grayscale"
        />
        <div className="relative mx-auto grid max-w-[98rem] gap-10 lg:grid-cols-[.82fr_1.18fr] lg:items-end">
          <BoxHeading
            label="Coaching process"
            title="Train With Structure, Not Guesswork"
            text="Every round has a job. Learn the mechanics, drill with intent, condition under pressure, then progress with clearer skills."
            light
          />
          <div className="grid gap-3 sm:grid-cols-2">
            {processSteps.map(([number, title, text]) => (
              <article
                key={title}
                className="border border-white/12 bg-white/[0.045] p-6"
              >
                <span className="text-3xl font-black text-[#E24835]">
                  {number}
                </span>
                <h3 className="mt-8 text-2xl font-black uppercase tracking-[-0.055em] text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-white/50">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="facility"
        className="bg-[#0D0E0F] px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-[98rem] gap-12 lg:grid-cols-[1.12fr_.88fr] lg:items-center">
          <div className="relative min-h-[42rem] overflow-hidden">
            <img
              src={facilityImage}
              alt="BoxHouse heavy bag wall and training space"
              className="absolute inset-0 h-full w-full object-cover grayscale-[25%]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0E0F] via-transparent to-transparent" />
            <div className="absolute bottom-7 left-7 right-7 border-t border-white/18 pt-6">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#F7B04A]">
                Facility floor
              </p>
              <p className="mt-2 text-5xl font-black uppercase leading-[0.85] tracking-[-0.075em]">
                Heavy bags. Strength tools. No wasted space.
              </p>
            </div>
          </div>
          <div>
            <BoxHeading
              label="Facility"
              title="A Boxing House Built For Work"
              text="Heavy bags, a ring-inspired training zone, mitt work areas, conditioning equipment, strength tools, and a clean focused floor for serious sessions."
              light
            />
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {facilityFeatures.map((feature, index) => (
                <div
                  key={feature}
                  className="border border-white/12 bg-[#191B1D] p-5"
                >
                  <span className="text-xs font-black text-[#E24835]">
                    0{index + 1}
                  </span>
                  <h3 className="mt-10 text-lg font-black uppercase">
                    {feature}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="coaching"
        className="bg-[#F8EFE2] px-5 py-24 text-[#171717] lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[98rem]">
          <BoxHeading
            label="Coaching"
            title="Coaching That Sharpens Every Round"
            text="Technique, accountability, and conditioning support for members who want more than random sweat."
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {coaching.map((item) => (
              <article
                key={item.title}
                className="boxhouse-card group border border-[#CFC5B7] bg-white p-4"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <MoveUpRight className="absolute right-4 top-4 h-8 w-8 bg-[#E24835] p-2 text-white" />
                </div>
                <div className="p-4">
                  <h3 className="text-3xl font-black uppercase leading-none tracking-[-0.06em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#5E5A55]">
                    {item.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="membership"
        className="relative bg-[#111315] px-5 py-24 lg:px-10 lg:py-32"
      >
        <img
          src={membershipImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover opacity-[0.08] grayscale"
        />
        <div className="relative mx-auto max-w-[98rem]">
          <BoxHeading
            label="Membership"
            title="Choose Your Round Count"
            text="Three training paths for beginners, weekly members, and members who want full access."
            light
          />
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {memberships.map((plan) => (
              <article
                key={plan.name}
                className={`relative flex flex-col border p-7 ${plan.popular ? "border-[#E24835] bg-[#E24835] text-white shadow-[12px_12px_0_rgba(247,176,74,.22)] lg:-translate-y-4" : "border-white/12 bg-[#191B1D]"}`}
              >
                {plan.popular && (
                  <span className="absolute right-5 top-5 bg-[#101112] px-3 py-2 text-[0.58rem] font-black uppercase tracking-[0.14em] text-[#F7B04A]">
                    Most Popular
                  </span>
                )}
                <p
                  className={`text-[0.6rem] font-black uppercase tracking-[0.18em] ${plan.popular ? "text-white/72" : "text-[#F7B04A]"}`}
                >
                  BoxHouse membership
                </p>
                <h3 className="mt-6 text-4xl font-black uppercase leading-none tracking-[-0.065em]">
                  {plan.name}
                </h3>
                <div className="mt-8 flex items-end gap-2">
                  <span className="text-6xl font-black tracking-[-0.08em]">
                    {plan.price}
                  </span>
                  <span
                    className={`pb-2 text-xs font-bold ${plan.popular ? "text-white/55" : "text-white/35"}`}
                  >
                    / month
                  </span>
                </div>
                <p
                  className={`mt-5 text-sm leading-7 ${plan.popular ? "text-white/72" : "text-white/48"}`}
                >
                  {plan.text}
                </p>
                <div
                  className={`mt-6 grid gap-3 border-t pt-6 ${plan.popular ? "border-white/18" : "border-white/12"}`}
                >
                  {plan.features.map((feature) => (
                    <span
                      key={feature}
                      className="flex items-center gap-2 text-sm font-bold"
                    >
                      <Check
                        className={`h-4 w-4 ${plan.popular ? "text-[#F7B04A]" : "text-[#E24835]"}`}
                      />
                      {feature}
                    </span>
                  ))}
                </div>
                <BoxButton
                  href="#contact"
                  outline={plan.popular}
                  className="mt-8"
                >{`Choose ${plan.name}`}</BoxButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#0A0B0C] px-5 py-24 lg:px-10 lg:py-32">
        <img
          src={cultureImage}
          alt="BoxHouse training culture"
          className="absolute inset-0 h-full w-full object-cover opacity-24 grayscale-[25%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0C] via-[#0A0B0C]/92 to-[#0A0B0C]/45" />
        <div className="relative mx-auto max-w-[98rem]">
          <BoxHeading
            label="Results & culture"
            title="Discipline In Every Round"
            text="A serious training room for realistic progress: cleaner technique, stronger conditioning, more consistency, and better movement confidence."
            light
          />
          <div className="mt-12 grid border-l border-t border-white/14 sm:grid-cols-2 lg:grid-cols-4">
            {culture.map((item, index) => (
              <div
                key={item}
                className="border-b border-r border-white/14 bg-black/30 p-6"
              >
                <span className="text-xs font-black text-[#F7B04A]">
                  0{index + 1}
                </span>
                {[Target, Gauge, Shield, Trophy].map((Icon, iconIndex) =>
                  iconIndex === index ? (
                    <Icon key={item} className="mt-10 h-6 w-6 text-[#E24835]" />
                  ) : null,
                )}
                <h3 className="mt-5 text-xl font-black uppercase">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F8EFE2] px-5 py-24 text-[#171717] lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[98rem]">
          <BoxHeading
            label="Member notes"
            title="The Room Makes The Work Clear"
          />
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {testimonials.map(([title, quote, name], index) => (
              <blockquote
                key={title}
                className="border border-[#CFC5B7] bg-white p-7"
              >
                <span className="text-xs font-black text-[#B13228]">
                  0{index + 1}
                </span>
                <h3 className="mt-8 text-3xl font-black uppercase leading-none tracking-[-0.06em]">
                  {title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#5E5A55]">{quote}</p>
                <footer className="mt-7 border-t border-[#D8CEC0] pt-5 text-xs font-black uppercase tracking-[0.14em] text-[#B13228]">
                  {name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-[#0A0B0C] px-5 py-28 lg:px-10 lg:py-36"
      >
        <img
          src={ctaImage}
          alt="BoxHouse athlete training with focus"
          className="absolute inset-0 h-full w-full object-cover opacity-45 grayscale-[20%]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0B0C] via-[#0A0B0C]/88 to-[#0A0B0C]/35" />
        <div className="relative mx-auto max-w-[98rem]">
          <div className="max-w-5xl">
            <p className="text-[0.62rem] font-black uppercase tracking-[0.24em] text-[#F7B04A]">
              The bell is live
            </p>
            <h2 className="mt-6 text-[clamp(4.2rem,9vw,9.6rem)] font-black uppercase leading-[0.74] tracking-[-0.095em]">
              Step Into The House.
            </h2>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/62">
              Train with boxing, conditioning, and coaching that keeps every
              round focused.
            </p>
            <BoxButton href="mailto:start@boxhouse.example" className="mt-9">
              Book Your First Class
            </BoxButton>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#070808] px-5 pb-8 pt-14 lg:px-10">
        <div className="mx-auto max-w-[98rem]">
          <div className="flex flex-col justify-between gap-10 border-b border-white/10 pb-10 lg:flex-row lg:items-start">
            <div>
              <BoxLogo />
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/40">
                Boxing and conditioning for focused, powerful training.
              </p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-xs font-black uppercase tracking-[0.13em] text-white/40 hover:text-[#F7B04A]"
                >
                  {label}
                </a>
              ))}
            </div>
            <div>
              <p className="text-[0.58rem] font-black uppercase tracking-[0.18em] text-white/30">
                Social
              </p>
              <div className="mt-4 flex gap-2">
                {["IG", "YT", "TK"].map((social) => (
                  <a
                    key={social}
                    href="#contact"
                    aria-label={`${social} social placeholder`}
                    className="grid h-10 w-10 place-items-center border border-white/15 text-[0.6rem] font-black hover:border-[#E24835] hover:text-[#F7B04A]"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <p className="pt-7 text-[0.65rem] text-white/25">
            © 2026 BoxHouse Training. Class schedules, coaching availability,
            and memberships may vary.
          </p>
        </div>
      </footer>
    </main>
  );
}
