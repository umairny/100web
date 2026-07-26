import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BadgeCheck,
  CalendarClock,
  Check,
  ChevronRight,
  CircleDollarSign,
  Compass,
  FileText,
  HeartHandshake,
  Home,
  KeyRound,
  Landmark,
  Menu,
  MessageCircleHeart,
  RefreshCw,
  Route,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  Users,
  X,
} from "lucide-react";
import heroImage from "../../assets/optimized/realestate/nestpath/hero.webp";
import firstBuyerImage from "../../assets/optimized/realestate/nestpath/first-buyer.webp";
import refinanceGuidanceImage from "../../assets/optimized/realestate/nestpath/refinance-guidance.webp";
import planningImage from "../../assets/optimized/realestate/nestpath/home-ownership-planning.webp";
import buyerConsultationImage from "../../assets/optimized/realestate/nestpath/buyer-consultation.webp";
import refinanceHomeImage from "../../assets/optimized/realestate/nestpath/refinance-home.webp";
import loanOptionsImage from "../../assets/optimized/realestate/nestpath/loan-options.webp";
import ctaImage from "../../assets/optimized/realestate/nestpath/cta-path-home.webp";

const navLinks = [
  { label: "First-Time Buyers", href: "#first-time-buyers" },
  { label: "Refinance", href: "#refinance" },
  { label: "Loan Options", href: "#loan-options" },
  { label: "Guidance", href: "#guidance" },
  { label: "Contact", href: "#contact" },
];

const guidancePaths = [
  {
    image: firstBuyerImage,
    badge: "First-Time Buyers",
    title: "First-Time Buyers",
    text: "Understand affordability, loan options, down payments, and the steps from pre-approval to closing.",
    href: "#first-time-buyers",
  },
  {
    image: refinanceGuidanceImage,
    badge: "Refinance",
    title: "Refinancing",
    text: "Review your current mortgage, compare new options, and decide whether refinancing makes sense.",
    href: "#refinance",
  },
  {
    image: planningImage,
    badge: "Planning",
    title: "Home Ownership Planning",
    text: "Build a practical plan for savings, credit, monthly payments, and long-term stability.",
    href: "#guidance",
  },
];

const steps = [
  [
    "Share Your Goals",
    "Tell us if you are buying, refinancing, or planning ahead.",
  ],
  [
    "Review Your Options",
    "Compare practical mortgage paths in plain language.",
  ],
  ["Build Your Plan", "Understand payments, timelines, and next steps."],
  [
    "Move Forward Confidently",
    "Get guidance that helps you make informed decisions.",
  ],
];

const loanOptions = [
  {
    icon: Home,
    title: "Conventional Loans",
    text: "A common mortgage option with flexible terms for buyers who meet lender requirements.",
  },
  {
    icon: ShieldCheck,
    title: "FHA Loans",
    text: "Government-backed loans that may offer more flexible down payment and credit requirements.",
  },
  {
    icon: BadgeCheck,
    title: "VA Loans",
    text: "A benefit for eligible service members, veterans, and qualifying surviving spouses.",
  },
  {
    icon: Landmark,
    title: "Jumbo Loans",
    text: "Financing designed for homes priced above standard conforming loan limits.",
  },
  {
    icon: CalendarClock,
    title: "Fixed-Rate Mortgages",
    text: "The interest rate stays the same, helping keep principal and interest payments predictable.",
  },
  {
    icon: RefreshCw,
    title: "Adjustable-Rate Mortgages",
    text: "The initial rate may be fixed for a period, then can change based on the loan terms.",
  },
];

const resources = [
  {
    tag: "Buying",
    title: "What First-Time Buyers Should Know Before Applying",
    text: "A practical look at documents, credit, savings, and the questions worth asking before you begin.",
  },
  {
    tag: "Refinancing",
    title: "When Refinancing May Make Sense",
    text: "Explore the goals, costs, timing, and tradeoffs to consider before replacing your current mortgage.",
  },
  {
    tag: "Budgeting",
    title: "How to Think About Monthly Mortgage Payments",
    text: "Look beyond the loan amount and understand the pieces that can shape your full housing payment.",
  },
];

function NestPathLogo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className={`inline-flex items-center gap-3 ${light ? "text-[#F4F1EA]" : "text-[#0E3D3F]"}`}
      aria-label="NestPath Mortgage home"
    >
      <span
        className={`grid h-11 w-11 place-items-center rounded-[1rem] ${light ? "bg-white/10 text-[#E0AF45]" : "bg-[#197D7A] text-white"}`}
      >
        <Home className="h-5 w-5" strokeWidth={2.2} />
      </span>
      <span>
        <strong className="block text-[1.05rem] font-extrabold leading-none tracking-[-0.02em]">
          NestPath
        </strong>
        <span
          className={`mt-1 block text-[0.58rem] font-bold uppercase tracking-[0.24em] ${light ? "text-white/55" : "text-[#197D7A]"}`}
        >
          Mortgage
        </span>
      </span>
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  centered = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div
      className={`${centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"} ${light ? "text-[#F4F1EA]" : ""}`}
      data-np-reveal
    >
      <p
        className={`text-[0.68rem] font-extrabold uppercase tracking-[0.24em] ${light ? "text-[#E0AF45]" : "text-[#197D7A]"}`}
      >
        {eyebrow}
      </p>
      <h2
        className={`mt-4 text-[clamp(2.25rem,5vw,4.6rem)] font-extrabold leading-[1.02] tracking-[-0.045em] ${light ? "text-[#F4F1EA]" : "text-[#0E3D3F]"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-6 text-base leading-8 md:text-lg ${light ? "text-white/70" : "text-[#263333]/70"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function PathButton({
  href,
  children,
  variant = "primary",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "light";
}) {
  const styles = {
    primary:
      "bg-[#197D7A] text-white shadow-[0_14px_30px_rgba(25,125,122,0.2)] hover:bg-[#0E3D3F]",
    secondary: "bg-[#E0AF45] text-[#0E3D3F] hover:bg-[#f0c65f]",
    light:
      "border border-[#0E3D3F]/15 bg-white text-[#0E3D3F] hover:border-[#197D7A] hover:text-[#197D7A]",
  };
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-extrabold transition duration-300 hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

export function NestPathMortgage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const elements = document.querySelectorAll("[data-np-reveal]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.08 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const sectionIds = [
      "guidance",
      "first-time-buyers",
      "refinance",
      "loan-options",
      "contact",
    ];

    const updateActiveSection = () => {
      let currentSection = "";
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 160)
          currentSection = id;
      });
      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <main className="nestpath-site overflow-hidden bg-[#F4F1EA] text-[#263333]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#0E3D3F]/10 bg-[#F4F1EA]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          <NestPathLogo />
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setActiveSection(link.href.slice(1))}
                  aria-current={isActive ? "page" : undefined}
                  className={`rounded-full px-3 py-2 text-[0.76rem] font-bold transition ${isActive ? "active bg-[#197D7A]/10 text-[#197D7A]" : "text-[#0E3D3F] hover:text-[#197D7A]"}`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden rounded-full bg-[#197D7A] px-5 py-3 text-xs font-extrabold text-white transition hover:bg-[#0E3D3F] sm:inline-flex"
            >
              Get Guidance
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              className="grid h-11 w-11 place-items-center rounded-full border border-[#0E3D3F]/15 text-[#0E3D3F] lg:hidden"
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
        </div>
        {menuOpen && (
          <nav
            className="border-t border-[#0E3D3F]/10 bg-[#F4F1EA] px-5 py-4 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto grid max-w-[90rem]">
              {navLinks.map((link) => {
                const isActive = activeSection === link.href.slice(1);
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={() => {
                      setActiveSection(link.href.slice(1));
                      setMenuOpen(false);
                    }}
                    aria-current={isActive ? "page" : undefined}
                    className={`border-b border-[#0E3D3F]/10 px-3 py-4 text-sm font-bold transition ${isActive ? "active bg-[#197D7A]/10 text-[#197D7A]" : "text-[#0E3D3F]"}`}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>
          </nav>
        )}
      </header>

      <section
        id="home"
        className="relative px-5 pb-20 pt-28 sm:px-8 md:pb-28 lg:px-12 lg:pt-36"
      >
        <div className="absolute -left-20 top-40 h-64 w-64 rounded-full bg-[#E0AF45]/10 blur-3xl" />
        <div className="mx-auto grid max-w-[90rem] gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div className="relative z-10" data-np-reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#197D7A]/15 bg-white/60 px-4 py-2 text-[0.67rem] font-extrabold uppercase tracking-[0.16em] text-[#197D7A]">
              <Sparkles className="h-3.5 w-3.5 text-[#E0AF45]" />
              Friendly mortgage guidance
            </div>
            <h1 className="mt-7 max-w-3xl text-[clamp(3.2rem,6.8vw,6.7rem)] font-extrabold leading-[0.92] tracking-[-0.065em] text-[#0E3D3F]">
              Your Clear Path to{" "}
              <span className="relative text-[#197D7A]">
                Home Ownership
                <span className="absolute -bottom-2 left-1 right-1 h-2 rounded-full bg-[#E0AF45]/65" />
              </span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-[#263333]/72 md:text-lg">
              NestPath Mortgage helps first-time buyers, homeowners, and
              families understand their mortgage options with practical
              guidance, simple steps, and reassuring support.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <PathButton href="#guidance">Start Your Path</PathButton>
              <PathButton href="#refinance" variant="light">
                Explore Refinancing
              </PathButton>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-xs font-bold text-[#0E3D3F]/65">
              {[
                "Plain-language help",
                "No-pressure guidance",
                "Practical next steps",
              ].map((item) => (
                <span key={item} className="flex items-center gap-2">
                  <Check className="h-4 w-4 rounded-full bg-[#197D7A] p-0.5 text-white" />
                  {item}
                </span>
              ))}
            </div>
          </div>
          <div className="relative" data-np-reveal>
            <div className="overflow-hidden rounded-[2.5rem] rounded-tr-[8rem] bg-[#D8DDD8] shadow-[0_30px_80px_rgba(14,61,63,0.16)]">
              <img
                src={heroImage}
                alt="Family feeling at home in a bright, welcoming house"
                className="aspect-[1.08] h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-8 left-3 right-3 grid gap-2 rounded-[1.5rem] border border-white/70 bg-white/95 p-3 shadow-xl sm:left-8 sm:right-8 sm:grid-cols-3">
              {[
                ["First-Time", "Buyer Support"],
                ["Refinance", "Guidance"],
                ["Simple", "Next Steps"],
              ].map(([top, bottom], index) => (
                <div
                  key={bottom}
                  className="flex items-center gap-3 rounded-2xl bg-[#F4F1EA] p-3"
                >
                  <span
                    className={`grid h-9 w-9 shrink-0 place-items-center rounded-full ${index === 1 ? "bg-[#E0AF45] text-[#0E3D3F]" : "bg-[#197D7A] text-white"}`}
                  >
                    {index === 0 ? (
                      <KeyRound className="h-4 w-4" />
                    ) : index === 1 ? (
                      <RefreshCw className="h-4 w-4" />
                    ) : (
                      <Compass className="h-4 w-4" />
                    )}
                  </span>
                  <span>
                    <b className="block text-xs text-[#0E3D3F]">{top}</b>
                    <small className="text-[0.65rem] text-[#263333]/55">
                      {bottom}
                    </small>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="guidance"
        className="bg-[#EFE8DA] px-5 py-24 sm:px-8 md:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Guidance paths"
            title="Mortgage Guidance for Every Step"
            text="Choose the path that feels closest to where you are today. We will help make the next step easier to understand."
            centered
          />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {guidancePaths.map((path, index) => (
              <article
                key={path.title}
                className="group overflow-hidden rounded-[2rem] bg-white p-3 shadow-[0_16px_50px_rgba(14,61,63,0.08)] transition duration-300 hover:-translate-y-1"
                data-np-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <div className="aspect-[1.45] overflow-hidden rounded-[1.4rem]">
                  <img
                    src={path.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-5 pb-6">
                  <span className="inline-flex rounded-full bg-[#197D7A]/10 px-3 py-1.5 text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-[#197D7A]">
                    {path.badge}
                  </span>
                  <h3 className="mt-5 text-2xl font-extrabold tracking-[-0.03em] text-[#0E3D3F]">
                    {path.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#263333]/65">
                    {path.text}
                  </p>
                  <a
                    href={path.href}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#197D7A]"
                  >
                    Learn More{" "}
                    <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="How it works"
            title="A Simpler Way to Understand Your Mortgage"
            centered
          />
          <div className="relative mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="absolute left-[12%] right-[12%] top-8 hidden h-px bg-[#E0AF45]/60 lg:block" />
            {steps.map(([title, text], index) => (
              <article
                key={title}
                className="relative rounded-[1.6rem] border border-[#0E3D3F]/10 bg-white p-6 text-center shadow-sm"
                data-np-reveal
              >
                <span className="relative z-10 mx-auto grid h-16 w-16 place-items-center rounded-full border-8 border-[#F4F1EA] bg-[#E0AF45] text-lg font-extrabold text-[#0E3D3F]">
                  0{index + 1}
                </span>
                <h3 className="mt-6 text-xl font-extrabold text-[#0E3D3F]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#263333]/65">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="first-time-buyers"
        className="bg-white px-5 py-24 sm:px-8 md:py-32 lg:px-12"
      >
        <div className="mx-auto grid max-w-[88rem] gap-14 lg:grid-cols-2 lg:items-center">
          <div data-np-reveal>
            <SectionHeading
              eyebrow="First-time buyers"
              title="Buying Your First Home Should Feel Less Overwhelming"
              text="We break down mortgage basics, affordability questions, down payment options, and approval steps so you can move forward with clarity."
            />
            <div className="mt-8 grid gap-3">
              {[
                "Understand your monthly payment range",
                "Learn what lenders usually review",
                "Prepare for down payment and closing costs",
                "Know what to expect before closing",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl bg-[#F4F1EA] p-4 text-sm font-bold text-[#0E3D3F]"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#197D7A] text-white">
                    <Check className="h-4 w-4" />
                  </span>
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-8">
              <PathButton href="#contact">
                Talk Through Your First Step
              </PathButton>
            </div>
          </div>
          <div className="relative" data-np-reveal>
            <div className="overflow-hidden rounded-[2.5rem] rounded-bl-[8rem]">
              <img
                src={buyerConsultationImage}
                alt="First-time buyers reviewing their home ownership plan"
                className="aspect-[1.04] h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 right-4 max-w-[16rem] rounded-2xl bg-[#E0AF45] p-5 text-[#0E3D3F] shadow-xl">
              <MessageCircleHeart className="h-6 w-6" />
              <p className="mt-3 text-sm font-extrabold leading-6">
                Questions are welcome. Clear answers come first.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="refinance"
        className="bg-[#0E3D3F] px-5 py-24 text-[#F4F1EA] sm:px-8 md:py-32 lg:px-12"
      >
        <div className="mx-auto grid max-w-[90rem] gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative" data-np-reveal>
            <div className="overflow-hidden rounded-[2.5rem]">
              <img
                src={refinanceHomeImage}
                alt="Homeowner considering refinancing options"
                className="aspect-[1.06] h-full w-full object-cover"
              />
            </div>
            <span className="absolute left-5 top-5 rounded-full bg-[#F4F1EA] px-4 py-2 text-xs font-extrabold text-[#0E3D3F]">
              Refinance guidance
            </span>
          </div>
          <div data-np-reveal>
            <SectionHeading
              eyebrow="Refinance with purpose"
              title="Refinance with a Clear Reason, Not Guesswork"
              text="Whether you want a lower payment, a shorter loan term, or a more stable mortgage structure, NestPath helps you compare refinancing paths with practical guidance."
              light
            />
            <div className="mt-9 grid gap-4 sm:grid-cols-3">
              {[
                [TrendingDown, "Lower Monthly Payment"],
                [CalendarClock, "Shorter Loan Timeline"],
                [Route, "Better Long-Term Plan"],
              ].map(([Icon, title]) => {
                const CardIcon = Icon as typeof TrendingDown;
                return (
                  <div
                    key={String(title)}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5"
                  >
                    <CardIcon className="h-6 w-6 text-[#E0AF45]" />
                    <div className="mt-5 h-0.5 w-9 bg-[#E0AF45]" />
                    <p className="mt-4 text-sm font-extrabold leading-6">
                      {String(title)}
                    </p>
                  </div>
                );
              })}
            </div>
            <div className="mt-9">
              <PathButton href="#contact" variant="secondary">
                Review Your Refinance Goals
              </PathButton>
            </div>
          </div>
        </div>
      </section>

      <section
        id="loan-options"
        className="px-5 py-24 sm:px-8 md:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:items-end">
            <SectionHeading
              eyebrow="Loan options"
              title="Understand Common Mortgage Options"
            />
            <div className="overflow-hidden rounded-[2rem] lg:max-h-64">
              <img
                src={loanOptionsImage}
                alt="A welcoming home representing mortgage options"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {loanOptions.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="rounded-[1.6rem] border border-[#0E3D3F]/10 bg-white p-6 shadow-sm transition hover:border-[#197D7A]/35 hover:shadow-lg"
                data-np-reveal
                style={{ transitionDelay: `${(index % 3) * 60}ms` }}
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#197D7A]/10 text-[#197D7A]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-xl font-extrabold text-[#0E3D3F]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#263333]/65">
                  {text}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-6 text-center text-xs leading-6 text-[#263333]/55">
            Loan availability and requirements vary. These summaries are
            educational and are not personalized financial or legal advice.
          </p>
        </div>
      </section>

      <section className="bg-[#EFE8DA] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Our approach"
            title="Guidance That Feels Human"
            text="Mortgages can feel complicated. Our approach is designed to make each step easier to understand, with clear explanations and supportive planning."
            centered
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [FileText, "Plain-Language Explanations"],
              [CircleDollarSign, "Practical Budget Conversations"],
              [HeartHandshake, "No Pressure Guidance"],
              [Users, "Support from Start to Closing"],
            ].map(([Icon, title], index) => {
              const TrustIcon = Icon as typeof FileText;
              return (
                <article
                  key={String(title)}
                  className="rounded-[1.6rem] bg-white p-6 text-center shadow-sm"
                  data-np-reveal
                  style={{ transitionDelay: `${index * 60}ms` }}
                >
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-[#E0AF45]/25 text-[#0E3D3F]">
                    <TrustIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-lg font-extrabold leading-6 text-[#0E3D3F]">
                    {String(title)}
                  </h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[88rem]">
          <SectionHeading
            eyebrow="Helpful resources"
            title="Learn Before You Decide"
            text="Short, practical guides to help you ask better questions and feel more prepared."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {resources.map((resource, index) => (
              <article
                key={resource.title}
                className="group flex min-h-[300px] flex-col rounded-[1.8rem] border border-[#0E3D3F]/10 bg-[#F4F1EA] p-7 transition hover:-translate-y-1 hover:shadow-lg"
                data-np-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <span className="w-fit rounded-full bg-[#197D7A]/10 px-3 py-1.5 text-[0.62rem] font-extrabold uppercase tracking-[0.14em] text-[#197D7A]">
                  {resource.tag}
                </span>
                <h3 className="mt-6 text-2xl font-extrabold leading-tight tracking-[-0.03em] text-[#0E3D3F]">
                  {resource.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#263333]/65">
                  {resource.text}
                </p>
                <a
                  href="#contact"
                  className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-extrabold text-[#197D7A]"
                >
                  Read Guide{" "}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative overflow-hidden bg-[#0E3D3F] px-5 py-24 text-[#F4F1EA] sm:px-8 md:py-32 lg:px-12"
      >
        <div className="absolute inset-y-0 right-0 hidden w-[46%] lg:block">
          <img
            src={ctaImage}
            alt="A welcoming path leading home"
            className="h-full w-full object-cover opacity-55"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0E3D3F] via-[#0E3D3F]/55 to-transparent" />
        </div>
        <div className="absolute -bottom-24 left-[38%] h-72 w-72 rounded-full border border-[#E0AF45]/20" />
        <div className="relative mx-auto max-w-[88rem]" data-np-reveal>
          <p className="text-[0.68rem] font-extrabold uppercase tracking-[0.24em] text-[#E0AF45]">
            Your next step
          </p>
          <h2 className="mt-5 max-w-3xl text-[clamp(2.8rem,6vw,5.8rem)] font-extrabold leading-[0.98] tracking-[-0.055em]">
            Ready to Find Your Path Home?
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
            Start with a simple conversation about your goals, timeline, and
            options.
          </p>
          <div className="mt-9">
            <PathButton
              href="mailto:hello@nestpathmortgage.com"
              variant="secondary"
            >
              Get Mortgage Guidance
            </PathButton>
          </div>
        </div>
      </section>

      <footer className="bg-[#092f31] px-5 py-14 text-[#F4F1EA] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-[1.3fr_0.7fr_0.8fr_1fr]">
            <div>
              <NestPathLogo light />
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
                Friendly mortgage guidance for first-time buyers, refinancing,
                and practical paths to home ownership.
              </p>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E0AF45]">
                Quick links
              </p>
              <div className="mt-5 grid gap-3">
                {navLinks.slice(0, 3).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/55 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E0AF45]">
                Guidance paths
              </p>
              <div className="mt-5 grid gap-3 text-sm text-white/55">
                <a href="#first-time-buyers">Buying a Home</a>
                <a href="#refinance">Refinancing</a>
                <a href="#guidance">Planning Ahead</a>
              </div>
            </div>
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-[#E0AF45]">
                Contact
              </p>
              <div className="mt-5 grid gap-3 text-sm text-white/55">
                <a
                  href="mailto:hello@nestpathmortgage.com"
                  className="break-all hover:text-white"
                >
                  hello@nestpathmortgage.com
                </a>
                <a href="tel:+12125550147" className="hover:text-white">
                  (212) 555-0147
                </a>
                <span>New York, NY</span>
              </div>
            </div>
          </div>
          <p className="mt-8 max-w-4xl text-xs leading-6 text-white/40">
            Information on this website is for educational purposes only and
            does not guarantee loan approval or specific mortgage terms.
          </p>
          <div className="mt-6 flex flex-col gap-2 border-t border-white/8 pt-6 text-[0.65rem] uppercase tracking-[0.12em] text-white/30 sm:flex-row sm:justify-between">
            <p>© 2026 NestPath Mortgage</p>
            <p>Guidance • Education • Home ownership planning</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
