import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Droplets,
  HeartPulse,
  Leaf,
  Menu,
  Moon,
  Move,
  Salad,
  Sparkles,
  SunMedium,
  Utensils,
  X,
} from "lucide-react";
import { imageUrl } from "../../assets/optimized";

const navLinks = [
  ["Method", "#method"],
  ["Fitness", "#fitness"],
  ["Nutrition", "#nutrition"],
  ["Recovery", "#recovery"],
  ["Plans", "#plans"],
  ["Contact", "#contact"],
];

const images = {
  hero: imageUrl("fitness/VitalForm/hero.webp"),
  fitness: imageUrl("fitness/VitalForm/fitness-coaching.webp"),
  nutrition: imageUrl("fitness/VitalForm/nutrition-guidance.webp"),
  recovery: imageUrl("fitness/VitalForm/recovery-studio.webp"),
  cta: imageUrl("fitness/VitalForm/cta.webp"),
};

const pillars = [
  {
    title: "Move",
    icon: Move,
    metric: "4x weekly",
    text: "Strength, mobility, and conditioning plans designed around your current level and schedule.",
    color: "from-[#D7F7E6] to-[#F6FBF8]",
  },
  {
    title: "Nourish",
    icon: Salad,
    metric: "Plate rhythm",
    text: "Practical nutrition guidance focused on balanced plates, simple habits, and sustainable consistency.",
    color: "from-[#FFF1D8] to-[#FDF8EE]",
  },
  {
    title: "Restore",
    icon: Moon,
    metric: "Recovery loop",
    text: "Recovery support with sleep routines, mobility, breathwork, and rest-day structure.",
    color: "from-[#DDF4FF] to-[#F4FAFC]",
  },
];

const snapshots = [
  [
    "Movement Score",
    "Weekly workouts, mobility minutes, and consistency.",
    "82%",
    "bg-[#5ECFB6]",
  ],
  [
    "Nutrition Rhythm",
    "Meal structure, hydration, and balanced daily choices.",
    "4/5",
    "bg-[#F3B36B]",
  ],
  [
    "Recovery Status",
    "Sleep, rest days, stress resets, and low-intensity movement.",
    "7.6",
    "bg-[#7CC7DF]",
  ],
  [
    "Progress Notes",
    "Energy, strength, mood, and habit check-ins.",
    "+12",
    "bg-[#F47F72]",
  ],
];

const fitnessRows = [
  [
    "Strength Foundations",
    "Simple progressive strength blocks with clear movement patterns and room to adapt.",
  ],
  [
    "Mobility + Posture",
    "Short guided resets that keep joints moving well between training days.",
  ],
  [
    "Conditioning Without Burnout",
    "Low-impact intervals and steady sessions that support energy instead of draining it.",
  ],
];

const habits = [
  "Build balanced plates",
  "Plan easy meals",
  "Improve hydration",
  "Support energy",
];
const plateBalance = ["Protein", "Fiber", "Color", "Healthy fats", "Hydration"];
const recoveryCards = [
  "Sleep Routine",
  "Mobility Reset",
  "Stress Downshift",
  "Rest-Day Structure",
];

const week = [
  ["Monday", "Strength + Protein Focus", "Move"],
  ["Tuesday", "Mobility + Hydration", "Restore"],
  ["Wednesday", "Conditioning + Balanced Meals", "Nourish"],
  ["Thursday", "Recovery Reset", "Restore"],
  ["Friday", "Strength + Meal Prep", "Move"],
  ["Saturday", "Walk + Stretch", "Light"],
  ["Sunday", "Rest + Reflection", "Reset"],
];

const plans = [
  {
    name: "Essential Rhythm",
    text: "For building basic structure across movement, food, and recovery.",
    features: ["Weekly plan", "Habit tracker", "Movement guidance"],
  },
  {
    name: "Vital Balance",
    text: "For steady coaching and lifestyle accountability.",
    features: [
      "Fitness plan",
      "Nutrition check-ins",
      "Recovery routine",
      "Progress notes",
    ],
    popular: true,
  },
  {
    name: "Complete Form",
    text: "For full support across training, nutrition, and recovery.",
    features: [
      "Custom plan",
      "Weekly coaching",
      "Recovery review",
      "Lifestyle adjustments",
    ],
  },
];

const testimonials = [
  [
    "More consistent routines",
    "VitalForm helped me stop guessing. My week finally has a plan that works around real life.",
    "Maya R.",
  ],
  [
    "Meals feel simpler",
    "The plate guidance made nutrition feel practical instead of all-or-nothing.",
    "Jordan K.",
  ],
  [
    "Better training balance",
    "I still train hard, but recovery is part of the rhythm now. That changed everything for me.",
    "Elena S.",
  ],
];

const heroMetrics = [
  {
    label: "Protein + Plate Balance",
    icon: Utensils,
    value: "4 meals logged",
    color: "#F3B36B",
    progress: 72,
  },
  {
    label: "Sleep + Recovery",
    icon: Moon,
    value: "7h 40m target",
    color: "#7CC7DF",
    progress: 64,
  },
  {
    label: "Hydration Check",
    icon: Droplets,
    value: "6 / 8 glasses",
    color: "#5ECFB6",
    progress: 78,
  },
];

function WellnessButton({
  href,
  children,
  secondary = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold transition duration-300 hover:-translate-y-0.5 ${
        secondary
          ? "border border-[#174136]/15 bg-white/70 text-[#174136] hover:border-[#5ECFB6] hover:bg-white"
          : "bg-[#174136] text-white shadow-[0_18px_45px_rgba(23,65,54,.2)] hover:bg-[#245B4B]"
      } ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="inline-flex items-center gap-2 rounded-full border border-[#174136]/10 bg-white/70 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#327C6C] shadow-sm">
      <Sparkles className="h-3.5 w-3.5 text-[#F47F72]" />
      {children}
    </p>
  );
}

function WellnessHeading({
  label,
  title,
  text,
}: {
  label: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="max-w-3xl">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-5 text-[clamp(2.8rem,6vw,5.9rem)] font-semibold leading-[0.95] tracking-[-0.065em] text-[#174136]">
        {title}
      </h2>
      {text && (
        <p className="mt-6 max-w-2xl text-base leading-8 text-[#53635F] md:text-lg">
          {text}
        </p>
      )}
    </div>
  );
}

function ProgressRing({
  value,
  color = "#5ECFB6",
}: {
  value: number;
  color?: string;
}) {
  return (
    <div
      className="grid h-20 w-20 place-items-center rounded-full"
      style={{
        background: `conic-gradient(${color} ${value}%, #E8F0EF ${value}% 100%)`,
      }}
      aria-label={`${value}% progress`}
    >
      <div className="grid h-14 w-14 place-items-center rounded-full bg-white text-sm font-bold text-[#174136]">
        {value}%
      </div>
    </div>
  );
}

export function VitalFormWellness() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("method");

  useEffect(() => {
    const sections = navLinks
      .map(([, href]) => document.getElementById(href.slice(1)))
      .filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="vitalform-site -mt-16 overflow-hidden bg-[#FBFAF5] text-[#174136]">
      <header className="fixed inset-x-0 top-4 z-50 px-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#174136]/10 bg-[#FBFAF5]/88 px-4 py-3 shadow-[0_20px_60px_rgba(23,65,54,.12)] backdrop-blur-xl lg:px-5">
          <a
            href="#home"
            className="flex items-center gap-3"
            aria-label="VitalForm Wellness home"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full bg-[#D8F6E7] text-[#174136]">
              <Leaf className="h-5 w-5" />
            </span>
            <span className="text-sm font-semibold tracking-[-0.02em]">
              VitalForm Wellness
            </span>
          </a>

          <nav
            className="hidden items-center rounded-full bg-white/80 p-1 lg:flex"
            aria-label="VitalForm navigation"
          >
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                    active
                      ? "bg-[#174136] text-white shadow-sm"
                      : "text-[#53635F] hover:bg-[#EAF7F3] hover:text-[#174136]"
                  }`}
                >
                  {label}
                </a>
              );
            })}
          </nav>

          <a
            href="#plans"
            className="hidden rounded-full bg-[#F47F72] px-5 py-3 text-xs font-bold text-white shadow-[0_14px_35px_rgba(244,127,114,.28)] transition hover:-translate-y-0.5 hover:bg-[#E86E61] lg:inline-flex"
          >
            Start Your Plan
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-10 w-10 place-items-center rounded-full border border-[#174136]/10 bg-white lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="mx-auto mt-3 max-w-7xl rounded-[2rem] border border-[#174136]/10 bg-[#FBFAF5] p-3 shadow-xl lg:hidden">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-semibold text-[#53635F] hover:bg-[#EAF7F3] hover:text-[#174136]"
              >
                {label}
              </a>
            ))}
            <a
              href="#plans"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-2xl bg-[#174136] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Start Your Plan
            </a>
          </nav>
        )}
      </header>

      <section
        id="home"
        className="relative px-5 pb-20 pt-32 lg:px-10 lg:pb-28 lg:pt-40"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(94,207,182,.28),transparent_32%),radial-gradient(circle_at_86%_20%,rgba(124,199,223,.28),transparent_30%),linear-gradient(180deg,#FBFAF5,#F4F8F6)]" />
        <div className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>Integrated Wellness Coaching</SectionLabel>
            <h1 className="mt-7 max-w-4xl text-[clamp(3.8rem,7.8vw,8.4rem)] font-semibold leading-[0.9] tracking-[-0.075em] text-[#174136]">
              Build A Body That Feels Strong, Fueled, And Restored.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[#53635F]">
              A balanced coaching system combining fitness, nutrition, and
              recovery so you can train smarter, eat with clarity, and maintain
              energy through real-life routines.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <WellnessButton href="#plans">
                Start Your Wellness Plan
              </WellnessButton>
              <WellnessButton href="#method" secondary>
                Explore The Method
              </WellnessButton>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-4 top-10 hidden rounded-[2rem] bg-white/85 p-4 shadow-xl backdrop-blur md:block">
              <p className="text-xs font-semibold text-[#53635F]">
                Hydration Check
              </p>
              <div className="mt-3 flex gap-1.5">
                {[1, 2, 3, 4, 5].map((bar) => (
                  <span
                    key={bar}
                    className={`h-10 w-3 rounded-full ${bar < 5 ? "bg-[#7CC7DF]" : "bg-[#E3ECEB]"}`}
                  />
                ))}
              </div>
            </div>
            <div className="rounded-[2.5rem] border border-white bg-white/70 p-3 shadow-[0_30px_90px_rgba(23,65,54,.18)] backdrop-blur">
              <div className="rounded-[2rem] bg-[#EEF7F4] p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-3 rounded-[1.5rem] bg-white px-5 py-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#327C6C]">
                      Wellness dashboard
                    </p>
                    <p className="mt-1 text-sm text-[#53635F]">
                      Today’s balanced rhythm
                    </p>
                  </div>
                  <span className="rounded-full bg-[#D8F6E7] px-4 py-2 text-xs font-bold text-[#174136]">
                    78% aligned
                  </span>
                </div>
                <div className="mt-4 grid gap-4 lg:grid-cols-[1.1fr_.9fr]">
                  <div className="relative min-h-[30rem] overflow-hidden rounded-[1.8rem]">
                    <img
                      src={images.hero}
                      alt="VitalForm Wellness balanced lifestyle coaching"
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#174136]/55 via-transparent to-transparent" />
                    <div className="absolute bottom-5 left-5 right-5 rounded-[1.4rem] bg-white/88 p-4 backdrop-blur">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#327C6C]">
                        Weekly Movement
                      </p>
                      <div className="mt-4 grid grid-cols-7 gap-1.5">
                        {[65, 82, 48, 74, 92, 40, 58].map((height, index) => (
                          <span
                            key={index}
                            className="flex h-24 items-end rounded-full bg-[#E6EFED] p-1"
                          >
                            <span
                              className="w-full rounded-full bg-[#5ECFB6]"
                              style={{ height: `${height}%` }}
                            />
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="grid gap-4">
                    {heroMetrics.map(
                      ({ label, icon: MetricIcon, value, color, progress }) => {
                        return (
                          <div
                            key={label}
                            className="rounded-[1.6rem] bg-white p-5"
                          >
                            <div className="flex items-center justify-between gap-3">
                              <span
                                className="grid h-11 w-11 place-items-center rounded-full"
                                style={{ backgroundColor: `${color}33`, color }}
                              >
                                <MetricIcon className="h-5 w-5" />
                              </span>
                              <ProgressRing value={progress} color={color} />
                            </div>
                            <p className="mt-4 text-sm font-semibold text-[#174136]">
                              {label}
                            </p>
                            <p className="mt-1 text-xs text-[#53635F]">
                              {value}
                            </p>
                          </div>
                        );
                      },
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 right-6 rounded-[1.6rem] bg-[#F47F72] px-5 py-4 text-white shadow-xl">
              <p className="text-xs font-semibold">Recovery streak</p>
              <p className="mt-1 text-3xl font-semibold tracking-[-0.05em]">
                12 days
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="method" className="px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[92rem]">
          <WellnessHeading
            label="The VitalForm Method"
            title="One System. Three Pillars. Better Daily Rhythm."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <article
                  key={pillar.title}
                  className={`group rounded-[2rem] bg-gradient-to-br ${pillar.color} p-6 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl`}
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white text-[#174136] shadow-sm">
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-white/75 px-4 py-2 text-xs font-bold text-[#327C6C]">
                      {pillar.metric}
                    </span>
                  </div>
                  <p className="mt-14 text-sm font-bold text-[#7A8A86]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-4xl font-semibold tracking-[-0.06em] text-[#174136]">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-[#53635F]">
                    {pillar.text}
                  </p>
                  <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/70">
                    <span
                      className="block h-full rounded-full bg-[#5ECFB6]"
                      style={{ width: `${72 + index * 8}%` }}
                    />
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#ECF4F2] px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[92rem]">
          <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <WellnessHeading
              label="Wellness Snapshot"
              title="A Clear Read On Your Weekly Rhythm."
              text="Track the basics without turning health into homework. The dashboard style keeps movement, nutrition, recovery, and notes easy to scan."
            />
            <div className="rounded-[2rem] bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#174136]">
                  Weekly balance
                </p>
                <BarChart3 className="h-5 w-5 text-[#5ECFB6]" />
              </div>
              <div className="mt-5 grid grid-cols-12 gap-1.5">
                {Array.from({ length: 36 }).map((_, index) => (
                  <span
                    key={index}
                    className={`h-8 rounded-lg ${index % 7 === 0 ? "bg-[#F47F72]" : index % 3 === 0 ? "bg-[#7CC7DF]" : "bg-[#D8F6E7]"}`}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {snapshots.map(([title, text, value, color]) => (
              <article
                key={title}
                className="rounded-[2rem] bg-white p-6 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-[#174136]">
                      {title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[#53635F]">
                      {text}
                    </p>
                  </div>
                  <span
                    className={`rounded-2xl px-3 py-2 text-sm font-bold text-white ${color}`}
                  >
                    {value}
                  </span>
                </div>
                <div className="mt-8 grid grid-cols-5 gap-2">
                  {[44, 62, 86, 54, 74].map((height, index) => (
                    <span
                      key={index}
                      className="flex h-20 items-end rounded-full bg-[#EEF4F2] p-1"
                    >
                      <span
                        className={`w-full rounded-full ${color}`}
                        style={{ height: `${height}%` }}
                      />
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="fitness" className="px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#D8F6E7] p-4">
            <img
              src={images.fitness}
              alt="VitalForm fitness coaching session"
              className="h-[34rem] w-full rounded-[2rem] object-cover"
            />
            <div className="absolute bottom-8 left-8 rounded-[1.5rem] bg-white/88 p-5 shadow-xl backdrop-blur">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#327C6C]">
                Training mix
              </p>
              <p className="mt-2 text-3xl font-semibold tracking-[-0.05em]">
                Strength + mobility
              </p>
            </div>
          </div>
          <div>
            <WellnessHeading
              label="Fitness Coaching"
              title="Training That Supports Your Whole Life"
              text="VitalForm fitness plans combine strength, low-impact conditioning, mobility, and realistic scheduling so training feels structured without taking over your life."
            />
            <div className="mt-9 grid gap-4">
              {fitnessRows.map(([title, text], index) => (
                <article
                  key={title}
                  className="group grid gap-4 rounded-[1.7rem] border border-[#174136]/10 bg-white p-5 transition hover:-translate-y-1 hover:shadow-xl sm:grid-cols-[4rem_1fr_auto] sm:items-center"
                >
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-[#ECF8F4] text-sm font-bold text-[#327C6C]">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-[-0.04em] text-[#174136]">
                      {title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-[#53635F]">
                      {text}
                    </p>
                  </div>
                  <ChevronRight className="h-5 w-5 text-[#5ECFB6] transition group-hover:translate-x-1" />
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="nutrition"
        className="bg-[#FFF7EA] px-5 py-20 lg:px-10 lg:py-28"
      >
        <div className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div>
            <WellnessHeading
              label="Nutrition Guidance"
              title="Simple Nutrition Without Complicated Rules"
              text="Clean food structure, practical habit support, and flexible meals that fit busy routines."
            />
            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {habits.map((habit) => (
                <div
                  key={habit}
                  className="rounded-[1.5rem] bg-white p-5 shadow-sm"
                >
                  <Check className="h-5 w-5 text-[#F3B36B]" />
                  <p className="mt-6 text-lg font-semibold tracking-[-0.03em]">
                    {habit}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-[2.5rem] bg-white p-4 shadow-[0_24px_70px_rgba(92,63,33,.12)]">
            <img
              src={images.nutrition}
              alt="Balanced nutrition guidance and meal planning"
              className="h-72 w-full rounded-[2rem] object-cover sm:h-96"
            />
            <div className="mt-4 rounded-[2rem] bg-[#FFF7EA] p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B56B22]">
                Plate balance
              </p>
              <div className="mt-5 grid gap-3">
                {plateBalance.map((item, index) => (
                  <div
                    key={item}
                    className="grid grid-cols-[7rem_1fr] items-center gap-3"
                  >
                    <span className="text-sm font-semibold text-[#174136]">
                      {item}
                    </span>
                    <span className="h-3 overflow-hidden rounded-full bg-white">
                      <span
                        className="block h-full rounded-full bg-[#F3B36B]"
                        style={{ width: `${52 + index * 9}%` }}
                      />
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="recovery" className="px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[92rem]">
          <div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
            <WellnessHeading
              label="Recovery Studio"
              title="Recovery Is Part Of The Plan"
              text="Recovery is treated as a core part of progress, with support for sleep routines, mobility resets, breathwork, and rest-day planning."
            />
            <div className="relative min-h-[23rem] overflow-hidden rounded-[2.5rem]">
              <img
                src={images.recovery}
                alt="VitalForm recovery studio"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#174136]/65 to-transparent" />
              <div className="absolute left-6 top-6 rounded-[1.4rem] bg-white/88 p-5 backdrop-blur">
                <HeartPulse className="h-6 w-6 text-[#7CC7DF]" />
                <p className="mt-4 text-sm font-semibold">
                  Sleep, mobility, breathwork, rest.
                </p>
              </div>
            </div>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {recoveryCards.map((card, index) => (
              <article
                key={card}
                className="rounded-[2rem] bg-[#EEF7F4] p-6 transition hover:-translate-y-1 hover:bg-[#DDF4FF]"
              >
                <SunMedium className="h-6 w-6 text-[#327C6C]" />
                <h3 className="mt-10 text-2xl font-semibold tracking-[-0.04em]">
                  {card}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#53635F]">
                  A focused reset for day {index + 1} of your weekly wellness
                  rhythm.
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#ECF4F2] px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[92rem]">
          <WellnessHeading
            label="Weekly Plan Preview"
            title="Your Week, Structured Without Guesswork"
          />
          <div className="mt-12 overflow-hidden rounded-[2.5rem] border border-[#174136]/10 bg-white p-4 shadow-sm">
            <div className="grid gap-3 lg:grid-cols-7">
              {week.map(([day, task, chip]) => (
                <article
                  key={day}
                  className="min-h-48 rounded-[1.8rem] bg-[#F7FAF8] p-5"
                >
                  <p className="text-sm font-bold text-[#174136]">{day}</p>
                  <p className="mt-7 text-lg font-semibold leading-6 tracking-[-0.03em]">
                    {task}
                  </p>
                  <span className="mt-8 inline-flex rounded-full bg-[#D8F6E7] px-3 py-1.5 text-xs font-bold text-[#327C6C]">
                    {chip}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[92rem]">
          <WellnessHeading
            label="Coaching Plans"
            title="Choose The Support Level That Fits Your Season."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {plans.map((plan) => (
              <article
                key={plan.name}
                className={`rounded-[2.2rem] border p-7 ${plan.popular ? "border-[#5ECFB6] bg-[#174136] text-white shadow-[0_26px_80px_rgba(23,65,54,.22)] lg:-translate-y-4" : "border-[#174136]/10 bg-white"}`}
              >
                {plan.popular && (
                  <span className="rounded-full bg-[#F47F72] px-4 py-2 text-xs font-bold text-white">
                    Most popular
                  </span>
                )}
                <h3 className="mt-7 text-3xl font-semibold tracking-[-0.055em]">
                  {plan.name}
                </h3>
                <p
                  className={`mt-4 text-sm leading-7 ${plan.popular ? "text-white/70" : "text-[#53635F]"}`}
                >
                  {plan.text}
                </p>
                <div
                  className={`mt-7 grid gap-3 border-t pt-7 ${plan.popular ? "border-white/15" : "border-[#174136]/10"}`}
                >
                  {plan.features.map((feature) => (
                    <span
                      key={feature}
                      className="flex items-center gap-3 text-sm font-semibold"
                    >
                      <Check
                        className={`h-4 w-4 ${plan.popular ? "text-[#5ECFB6]" : "text-[#327C6C]"}`}
                      />
                      {feature}
                    </span>
                  ))}
                </div>
                <WellnessButton
                  href="#contact"
                  secondary={plan.popular}
                  className="mt-8 w-full"
                >
                  Start {plan.name}
                </WellnessButton>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF7EA] px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[92rem]">
          <WellnessHeading
            label="Client Notes"
            title="Practical Progress Feels Better Than Perfection."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {testimonials.map(([title, quote, name]) => (
              <blockquote
                key={title}
                className="rounded-[2rem] bg-white p-7 shadow-sm"
              >
                <h3 className="text-2xl font-semibold tracking-[-0.04em]">
                  {title}
                </h3>
                <p className="mt-5 text-sm leading-7 text-[#53635F]">
                  “{quote}”
                </p>
                <footer className="mt-8 border-t border-[#174136]/10 pt-5 text-sm font-bold text-[#327C6C]">
                  {name}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto grid max-w-[92rem] overflow-hidden rounded-[3rem] bg-[#D8F6E7] lg:grid-cols-[1fr_.85fr]">
          <div className="p-8 sm:p-12 lg:p-16">
            <SectionLabel>Start here</SectionLabel>
            <h2 className="mt-6 max-w-3xl text-[clamp(3rem,6vw,6.5rem)] font-semibold leading-[0.92] tracking-[-0.07em] text-[#174136]">
              Create A Wellness Rhythm That Lasts.
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#53635F]">
              Start with a balanced plan for movement, nutrition, and recovery
              built around your real schedule.
            </p>
            <WellnessButton
              href="mailto:start@vitalform.example"
              className="mt-9"
            >
              Start Your Plan
            </WellnessButton>
          </div>
          <div className="relative min-h-[30rem]">
            <img
              src={images.cta}
              alt="VitalForm Wellness healthy lifestyle planning"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-[#174136]/10 px-5 py-12 lg:px-10">
        <div className="mx-auto flex max-w-[92rem] flex-col justify-between gap-8 md:flex-row md:items-start">
          <div>
            <a
              href="#home"
              className="text-lg font-semibold tracking-[-0.03em]"
            >
              VitalForm Wellness
            </a>
            <p className="mt-3 max-w-sm text-sm leading-7 text-[#53635F]">
              Fitness, nutrition, and recovery for balanced daily progress.
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-semibold text-[#53635F] hover:text-[#174136]"
              >
                {label}
              </a>
            ))}
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#7A8A86]">
              Social
            </p>
            <div className="mt-3 flex gap-2">
              {["IG", "YT", "LI"].map((social) => (
                <a
                  key={social}
                  href="#contact"
                  aria-label={`${social} social placeholder`}
                  className="grid h-10 w-10 place-items-center rounded-full bg-[#EEF7F4] text-xs font-bold text-[#327C6C] hover:bg-[#D8F6E7]"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-[92rem] text-xs text-[#7A8A86]">
          © 2026 VitalForm Wellness. Coaching plans are lifestyle support and do
          not replace medical advice.
        </p>
      </footer>
    </main>
  );
}
