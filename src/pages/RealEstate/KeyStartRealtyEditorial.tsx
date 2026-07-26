import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  Calculator,
  Check,
  ChevronDown,
  CircleHelp,
  ClipboardCheck,
  Compass,
  FileCheck2,
  HeartHandshake,
  Home,
  KeyRound,
  MapPin,
  Menu,
  MessageCircleMore,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";
import heroImage from "../../assets/optimized/realestate/keystar/hero.webp";
import budgetImage from "../../assets/optimized/realestate/keystar/buyer-budget.webp";
import searchImage from "../../assets/optimized/realestate/keystar/home-search.webp";
import offerImage from "../../assets/optimized/realestate/keystar/offer-guidance.webp";
import mapleImage from "../../assets/optimized/realestate/keystar/maple-lane-cottage.webp";
import brooksideImage from "../../assets/optimized/realestate/keystar/brookside-townhome.webp";
import elmImage from "../../assets/optimized/realestate/keystar/elm-park-residence.webp";
import supportImage from "../../assets/optimized/realestate/keystar/buyer-support.webp";
import simpleSearchImage from "../../assets/optimized/realestate/keystar/simple-search.webp";
import resourcesImage from "../../assets/optimized/realestate/keystar/resources-guide.webp";
import ctaImage from "../../assets/optimized/realestate/keystar/cta.webp";

const navLinks = [
  ["Buyer Guide", "#buyer-guide"],
  ["Homes", "#homes"],
  ["How It Works", "#how-it-works"],
  ["Resources", "#resources"],
  ["Contact", "#contact"],
];

const journey = [
  [
    "01",
    "Understand Your Budget",
    "Learn what monthly payment, savings, and upfront costs may look like.",
  ],
  [
    "02",
    "Explore the Right Homes",
    "Compare homes around lifestyle, location, needs, and long-term comfort.",
  ],
  [
    "03",
    "Make a Confident Offer",
    "Get guidance on offer strategy, contingencies, and next steps.",
  ],
  [
    "04",
    "Prepare for Closing",
    "Understand inspections, paperwork, timelines, and what happens before move-in.",
  ],
];

const buyerGroups = [
  {
    image: budgetImage,
    number: "01",
    label: "First-time buyer",
    title: "First-Time Buyers",
    text: "Friendly guidance for buyers who want clear answers and a less stressful home search.",
  },
  {
    image: searchImage,
    number: "02",
    label: "Changing needs",
    title: "Growing Families",
    text: "Practical support for finding a home that fits changing needs, routines, and budgets.",
  },
  {
    image: offerImage,
    number: "03",
    label: "Ready to own",
    title: "Renters Ready to Own",
    text: "A simple path for renters comparing whether now is the right time to buy.",
  },
];

const homes = [
  {
    image: mapleImage,
    number: "01",
    title: "Maple Lane Cottage",
    location: "Quiet Residential Block",
    type: "Starter Home",
    price: "From $425,000",
    badge: "First-Time Buyer",
    text: "A welcoming, manageable home with bright gathering spaces and a comfortable neighborhood setting.",
  },
  {
    image: brooksideImage,
    number: "02",
    title: "Brookside Townhome",
    location: "Walkable Neighborhood",
    type: "Townhome",
    price: "From $510,000",
    badge: "Tour Ready",
    text: "Low-maintenance living close to daily essentials, local parks, and neighborhood conveniences.",
  },
  {
    image: elmImage,
    number: "03",
    title: "Elm Park Residence",
    location: "Near Parks & Transit",
    type: "Single-Family Home",
    price: "From $585,000",
    badge: "Starter Home",
    text: "A flexible first home with room to grow and practical access to green space and transit.",
  },
];

const faqs = [
  [
    "How much money do I need before buying?",
    "It depends on the home, loan program, closing costs, and your financial picture. A qualified lender can explain realistic upfront costs before you search.",
  ],
  [
    "Should I get pre-approved first?",
    "Pre-approval can clarify a comfortable price range and provide useful context. It is worth speaking with a qualified lender early.",
  ],
  [
    "What should I look for during home tours?",
    "Consider condition, layout, location, ongoing costs, and how the home fits daily life—not just finishes or first impressions.",
  ],
  [
    "What happens after my offer is accepted?",
    "The process commonly includes inspections, financing steps, appraisal, document review, and closing preparation. Details vary by transaction.",
  ],
  [
    "How long does closing usually take?",
    "Timelines vary with financing, inspections, documents, and the transaction. Your agent and lender should explain the expected schedule.",
  ],
];

function KeyButton({
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
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-extrabold transition duration-300 hover:-translate-y-0.5 ${secondary ? "border border-[#C9D6CF] bg-white text-[#15344B] hover:border-[#3F7355]" : "bg-[#3F7355] text-white shadow-[0_12px_28px_rgba(63,115,85,.22)] hover:bg-[#346247]"} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function KeyHeading({
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
    <div className="max-w-3xl">
      <p
        className={`text-[0.66rem] font-black uppercase tracking-[0.24em] ${light ? "text-[#B7C7A1]" : "text-[#3F7355]"}`}
      >
        {label}
      </p>
      <h2
        className={`mt-4 text-[clamp(2.5rem,5vw,5.2rem)] font-black leading-[0.92] tracking-[-0.06em] ${light ? "text-white" : "text-[#15344B]"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${light ? "text-white/68" : "text-[#627076]"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function KeyLogo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className={`flex items-center gap-3 ${light ? "text-white" : "text-[#15344B]"}`}
      aria-label="KeyStart Realty home"
    >
      <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-[#3F7355] text-white">
        <KeyRound className="h-5 w-5" />
        <span className="absolute -bottom-1 -right-1 grid h-5 w-5 place-items-center rounded-full border-2 border-white bg-[#9BAD83]">
          <Home className="h-2.5 w-2.5" />
        </span>
      </span>
      <span>
        <strong className="block text-lg font-black leading-none tracking-[-0.04em]">
          KeyStart
        </strong>
        <span
          className={`mt-1 block text-[0.56rem] font-bold uppercase tracking-[0.2em] ${light ? "text-white/52" : "text-[#6E7C76]"}`}
        >
          Realty
        </span>
      </span>
    </a>
  );
}

export function KeyStartRealty() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
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
      { rootMargin: "-24% 0px -58% 0px", threshold: [0.05, 0.2, 0.5] },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="keystart-site keystart-editorial overflow-hidden bg-[#F7F1E5] text-[#354147] selection:bg-[#9BAD83] selection:text-white">
      <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3">
        <div className="mx-auto flex h-[4.25rem] max-w-[88rem] items-center justify-between rounded-2xl border border-[#D7E1DA] bg-white/95 px-4 shadow-[0_12px_40px_rgba(21,52,75,.08)] backdrop-blur-xl lg:px-6">
          <KeyLogo />
          <nav
            className="hidden items-center gap-1 lg:flex"
            aria-label="KeyStart navigation"
          >
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  className={`rounded-xl px-4 py-2 text-sm font-bold transition ${active ? "keystart-nav-active bg-[#E8F0EA] text-[#3F7355]" : "text-[#5E6C72] hover:bg-[#F3F7F4] hover:text-[#3F7355]"}`}
                >
                  {label}
                </a>
              );
            })}
          </nav>
          <KeyButton href="#buyer-guide" className="hidden lg:inline-flex">
            Start Your Search
          </KeyButton>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            className="grid h-11 w-11 place-items-center rounded-xl border border-[#D7E1DA] text-[#15344B] lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="mx-auto mt-2 max-w-[88rem] rounded-2xl border border-[#D7E1DA] bg-white p-4 shadow-xl lg:hidden">
            {navLinks.map(([label, href]) => {
              const active = activeSection === href.slice(1);
              return (
                <a
                  key={label}
                  href={href}
                  aria-current={active ? "location" : undefined}
                  onClick={() => setMenuOpen(false)}
                  className={`block rounded-xl px-3 py-3 font-bold ${active ? "keystart-nav-active bg-[#E8F0EA] text-[#3F7355]" : "text-[#56666C] hover:bg-[#F3F7F4]"}`}
                >
                  {label}
                </a>
              );
            })}
            <KeyButton href="#buyer-guide" className="mt-3 w-full">
              Start Your Search
            </KeyButton>
          </nav>
        )}
      </header>

      <section
        id="home"
        className="relative px-5 pb-24 pt-32 lg:px-10 lg:pb-32 lg:pt-40"
      >
        <div className="absolute left-[8%] top-40 h-40 w-40 rounded-full border-[28px] border-[#9BAD83]/15" />
        <div className="mx-auto max-w-[90rem] text-center">
          <p className="mx-auto inline-flex items-center gap-2 rounded-full border border-[#CED9CB] bg-white px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.2em] text-[#3F7355]">
            <Sparkles className="h-4 w-4" /> First-time buyer field guide
          </p>
          <h1 className="mx-auto mt-7 max-w-6xl text-[clamp(4rem,8.7vw,9rem)] font-semibold leading-[0.84] tracking-[-0.065em] text-[#15344B]">
            Your First Home Search,{" "}
            <span className="text-[#3F7355]">Made Simple.</span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-[#627076]">
            Understand each step, compare homes with confidence, and move from
            unsure to ready with practical buyer-first guidance.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <KeyButton href="#buyer-guide">Start Your Buyer Journey</KeyButton>
            <KeyButton href="#resources" secondary>
              Open the Buyer Guide
            </KeyButton>
          </div>

          <div className="mt-16 grid gap-4 text-left lg:grid-cols-[.7fr_1.6fr_.7fr] lg:items-end">
            <div className="order-2 rounded-[1.75rem] bg-[#15344B] p-6 text-white lg:order-1 lg:-rotate-2 lg:translate-y-8">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#B7C7A1]">
                Your next step
              </p>
              <p className="mt-5 text-3xl font-black tracking-[-0.05em]">
                Start with what feels comfortable.
              </p>
              <p className="mt-4 text-sm leading-7 text-white/60">
                Budget, routine, location, and timing come before the perfect
                kitchen.
              </p>
              <Calculator className="mt-8 h-8 w-8 text-[#B7C7A1]" />
            </div>
            <div className="order-1 relative overflow-hidden rounded-t-[11rem] rounded-b-[2rem] bg-[#DDE7DF] p-3 shadow-[0_30px_80px_rgba(21,52,75,.16)] lg:order-2">
              <img
                src={heroImage}
                alt="Welcoming first home exterior for a KeyStart buyer"
                className="h-[34rem] w-full rounded-t-[10rem] rounded-b-[1.4rem] object-cover md:h-[43rem]"
              />
              <span className="absolute bottom-7 left-7 rounded-full bg-white/94 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#3F7355] backdrop-blur">
                A place to begin
              </span>
            </div>
            <div className="order-3 rounded-[1.75rem] border border-[#D7E1DA] bg-white p-6 lg:rotate-2 lg:translate-y-4">
              <ClipboardCheck className="h-7 w-7 text-[#3F7355]" />
              <p className="mt-5 text-xl font-black text-[#15344B]">
                No mystery steps.
              </p>
              <div className="mt-5 grid gap-3 text-sm text-[#66747A]">
                {[
                  "Know the process",
                  "Compare with context",
                  "Decide at your pace",
                ].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#3F7355]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="how-it-works"
        className="bg-[#15344B] px-5 py-24 text-white lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <KeyHeading
              label="Step-by-step support"
              title="A Clear Path from Curious to Homeowner"
              light
            />
            <p className="max-w-lg text-base leading-8 text-white/60">
              Four understandable chapters turn a big decision into practical
              next steps.
            </p>
          </div>
          <div className="relative mt-14 grid gap-4 lg:grid-cols-4 lg:gap-0 before:absolute before:left-[12%] before:right-[12%] before:top-6 before:hidden before:h-px before:bg-white/20 lg:before:block">
            {journey.map(([number, title, text]) => (
              <article
                key={number}
                className="relative border border-white/12 bg-white/[0.04] p-6 lg:border-y lg:border-l lg:border-r-0 lg:last:border-r"
              >
                <span className="relative z-10 grid h-12 w-12 place-items-center rounded-full bg-[#9BAD83] text-sm font-black text-[#15344B] ring-8 ring-[#15344B]">
                  {number}
                </span>
                <h3 className="mt-10 text-xl font-black">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/55">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="buyer-guide"
        className="bg-[#F3F7F4] px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[90rem]">
          <KeyHeading
            label="Who this is for"
            title="Built for Buyers Taking the First Step"
            text="Different starting points, the same need for useful answers and a calm plan."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-2">
            {buyerGroups.map((card, index) => (
              <article
                key={card.title}
                className={`key-card group grid overflow-hidden rounded-[2rem] border border-[#D7E1DA] bg-white ${index === 0 ? "lg:col-span-2 lg:grid-cols-[1.2fr_.8fr]" : ""}`}
              >
                <div
                  className={`relative overflow-hidden ${index === 0 ? "min-h-80" : "aspect-[16/10]"}`}
                >
                  <img
                    src={card.image}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-white text-xs font-black text-[#3F7355]">
                    {card.number}
                  </span>
                </div>
                <div className="flex items-center p-7 lg:p-9">
                  <div>
                    <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-[#9BAD83]">
                      {card.label}
                    </p>
                    <h3 className="mt-3 text-3xl font-black tracking-[-0.05em] text-[#15344B]">
                      {card.title}
                    </h3>
                    <p className="mt-4 max-w-md text-sm leading-7 text-[#66747A]">
                      {card.text}
                    </p>
                    <a
                      href="#contact"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#3F7355]"
                    >
                      Learn More <ArrowDownRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="homes" className="bg-white px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[90rem]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <KeyHeading
              label="Simple home search"
              title="Starter Homes, Told as Stories"
            />
            <p className="max-w-md text-sm leading-7 text-[#61716B]">
              Rather than a wall of listings, start with three distinct ways a
              first home might fit real life.
            </p>
          </div>
          <div className="mt-14 grid gap-8">
            {homes.map((home, index) => (
              <article
                key={home.title}
                className="key-card grid overflow-hidden rounded-[2rem] border border-[#D7E1DA] bg-[#F8FBF9] lg:grid-cols-2"
              >
                <div
                  className={`relative min-h-[24rem] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}
                >
                  <img
                    src={home.image}
                    alt={`${home.title} starter property`}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-white/94 px-4 py-2 text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#3F7355]">
                    {home.badge}
                  </span>
                  <span className="absolute bottom-4 right-5 text-7xl font-black tracking-[-0.08em] text-white/45">
                    {home.number}
                  </span>
                </div>
                <div className="flex items-center p-8 lg:p-12">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[#E8F0EA] px-3 py-1 text-[0.62rem] font-black uppercase tracking-[0.15em] text-[#3F7355]">
                        {home.type}
                      </span>
                      <span className="text-sm font-black text-[#15344B]">
                        {home.price}
                      </span>
                    </div>
                    <h3 className="mt-6 text-[clamp(2.4rem,4vw,4.2rem)] font-black leading-[0.9] tracking-[-0.06em] text-[#15344B]">
                      {home.title}
                    </h3>
                    <p className="mt-4 flex items-center gap-2 text-sm text-[#66747A]">
                      <MapPin className="h-4 w-4 text-[#9BAD83]" />
                      {home.location}
                    </p>
                    <p className="mt-5 max-w-lg leading-8 text-[#66747A]">
                      {home.text}
                    </p>
                    <KeyButton href="#contact" className="mt-7">
                      View Home
                    </KeyButton>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-6 text-[#73807B]">
            Sample property information is illustrative. Prices and availability
            are subject to change.
          </p>
        </div>
      </section>

      <section className="bg-[#E8F0EA] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
          <div>
            <KeyHeading
              label="Buyer support"
              title="Guidance Before, During, and After the Search"
              text="Buying your first home can feel unfamiliar. We break it into practical conversations and decisions you can understand."
            />
            <div className="mt-8 grid gap-3">
              {[
                [Calculator, "Budget Conversations"],
                [Compass, "Neighborhood Guidance"],
                [Home, "Home Tour Support"],
                [FileCheck2, "Offer & Closing Help"],
              ].map(([Icon, title], index) => {
                const SupportIcon = Icon as typeof Home;
                return (
                  <div
                    key={title as string}
                    className="flex items-center justify-between rounded-2xl border border-white bg-white p-4"
                  >
                    <span className="flex items-center gap-3 font-black text-[#15344B]">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#E8F0EA] text-[#3F7355]">
                        <SupportIcon className="h-5 w-5" />
                      </span>
                      {title as string}
                    </span>
                    <span className="text-xs font-black text-[#9BAD83]">
                      0{index + 1}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="relative">
            <img
              src={supportImage}
              alt="KeyStart agent supporting a first-time home buyer"
              className="min-h-[42rem] w-full rounded-[12rem_2rem_2rem_2rem] object-cover"
            />
            <div className="absolute bottom-6 right-6 max-w-xs rounded-2xl bg-[#15344B] p-5 text-white shadow-xl">
              <HeartHandshake className="h-6 w-6 text-[#B7C7A1]" />
              <p className="mt-3 font-black">
                Questions are part of the process.
              </p>
              <p className="mt-2 text-sm leading-6 text-white/60">
                You should never feel rushed to pretend you already know.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-[#3F7355] lg:grid-cols-2">
        <img
          src={simpleSearchImage}
          alt="Clear and simple first home search"
          className="h-full min-h-[34rem] w-full object-cover"
        />
        <div className="flex items-center p-8 text-white md:p-12 lg:p-16 xl:p-20">
          <div>
            <p className="text-[0.66rem] font-black uppercase tracking-[0.24em] text-[#DCE7CE]">
              Home search made simple
            </p>
            <h2 className="mt-4 text-[clamp(3rem,5.4vw,5.5rem)] font-black leading-[0.9] tracking-[-0.065em]">
              Less Guesswork. More Clarity.
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/72">
              Focus on what matters most—location, budget, condition, commute,
              lifestyle, and long-term fit.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                "Easy-to-compare home options",
                "Practical pros and cons",
                "Clear next steps after every tour",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 border-b border-white/15 pb-3 font-bold"
                >
                  <Check className="h-5 w-5 text-[#DCE7CE]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7F1E5] px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <KeyHeading
              label="Buyer questions"
              title="Ask the Questions Everyone Starts With"
              text="Simple educational starting points—not legal or financial advice."
            />
            <CircleHelp className="mt-8 h-16 w-16 text-[#9BAD83]" />
          </div>
          <div className="grid gap-3">
            {faqs.map(([question, answer], index) => {
              const open = openFaq === index;
              return (
                <article
                  key={question}
                  className="overflow-hidden rounded-2xl border border-[#DED8CA] bg-white"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? -1 : index)}
                    aria-expanded={open}
                    className="flex w-full items-center gap-5 p-5 text-left"
                  >
                    <span className="text-xs font-black text-[#9BAD83]">
                      0{index + 1}
                    </span>
                    <span className="flex-1 font-black text-[#15344B]">
                      {question}
                    </span>
                    <ChevronDown
                      className={`h-5 w-5 text-[#3F7355] transition ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  {open && (
                    <p className="border-t border-[#E9E4D8] px-5 py-5 pl-14 text-sm leading-7 text-[#66747A]">
                      {answer}
                    </p>
                  )}
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="resources" className="bg-white px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
            <KeyHeading
              label="Resources"
              title="A Small Library for a Big First Step"
            />
            <img
              src={resourcesImage}
              alt="First-time buyer guides and resources"
              className="h-56 w-full rounded-[1.5rem_5rem_1.5rem_1.5rem] object-cover"
            />
          </div>
          <div className="mt-12 divide-y divide-[#D7E1DA] border-y border-[#D7E1DA]">
            {[
              [
                "Before touring",
                "What First-Time Buyers Should Know Before Touring Homes",
                "Prepare a useful shortlist, identify priorities, and make each tour easier to compare.",
              ],
              [
                "Comparing homes",
                "How to Compare Starter Homes",
                "Weigh condition, location, recurring costs, layout, and long-term fit.",
              ],
              [
                "Offer to closing",
                "What Happens Between Offer and Closing",
                "A plain-language overview of inspections, financing, documents, and milestones.",
              ],
            ].map(([tag, title, text], index) => (
              <article
                key={title}
                className="group grid gap-5 py-7 md:grid-cols-[4rem_1fr_1fr_auto] md:items-center"
              >
                <span className="text-3xl font-black tracking-[-0.06em] text-[#D5DED7]">
                  0{index + 1}
                </span>
                <div>
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-[#9BAD83]">
                    {tag}
                  </p>
                  <h3 className="mt-2 text-xl font-black text-[#15344B]">
                    {title}
                  </h3>
                </div>
                <p className="text-sm leading-7 text-[#66747A]">{text}</p>
                <a
                  href="#contact"
                  aria-label={`Read ${title}`}
                  className="grid h-11 w-11 place-items-center rounded-full border border-[#D7E1DA] text-[#3F7355] transition group-hover:bg-[#3F7355] group-hover:text-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F3F7F4] px-5 py-20 lg:px-10 lg:py-24">
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-px overflow-hidden rounded-[2rem] bg-[#D7E1DA] md:grid-cols-2 lg:grid-cols-4">
            {[
              [MessageCircleMore, "Plain-Language Guidance"],
              [ShieldCheck, "Practical Search Advice"],
              [HeartHandshake, "Calm Decision Support"],
              [ArrowRight, "Encouraging Next Steps"],
            ].map(([Icon, title]) => {
              const ValueIcon = Icon as typeof ShieldCheck;
              return (
                <article key={title as string} className="bg-white p-7">
                  <ValueIcon className="h-6 w-6 text-[#3F7355]" />
                  <h3 className="mt-7 font-black text-[#15344B]">
                    {title as string}
                  </h3>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative bg-[#15344B] px-5 py-28 text-white lg:px-10 lg:py-36"
      >
        <img
          src={ctaImage}
          alt="Warm first home ready for new buyers"
          className="absolute inset-0 h-full w-full object-cover opacity-24"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#15344B] via-[#15344B]/90 to-[#15344B]/35" />
        <div className="relative mx-auto max-w-[90rem]">
          <div className="max-w-4xl">
            <p className="text-[0.66rem] font-black uppercase tracking-[0.24em] text-[#B7C7A1]">
              Your first step starts here
            </p>
            <h2 className="mt-5 text-[clamp(3.5rem,7vw,7.2rem)] font-black leading-[0.84] tracking-[-0.075em]">
              Ready to Take the First Step?
            </h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/70">
              Start your first home search with simple guidance, helpful
              answers, and a clear plan.
            </p>
            <KeyButton
              href="mailto:hello@keystartrealty.com"
              className="mt-9 bg-[#9BAD83] text-[#15344B] shadow-none hover:bg-[#b3c39d]"
            >
              Begin Your Buyer Journey
            </KeyButton>
          </div>
        </div>
      </section>

      <footer className="bg-[#102B3F] px-5 pb-8 pt-16 text-white lg:px-10">
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.35fr_.65fr_.8fr_1fr]">
            <div>
              <KeyLogo light />
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/45">
                A first-time buyer agency that turns unfamiliar decisions into a
                practical, encouraging home search.
              </p>
            </div>
            <div>
              <p className="font-black">Quick links</p>
              <div className="mt-5 grid gap-3 text-sm text-white/45">
                {navLinks.slice(0, 4).map(([label, href]) => (
                  <a key={label} href={href} className="hover:text-white">
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-black">Buyer support</p>
              <div className="mt-5 grid gap-3 text-sm text-white/45">
                <a href="#how-it-works">Budget Basics</a>
                <a href="#homes">Home Search</a>
                <a href="#buyer-guide">Tour Guidance</a>
                <a href="#resources">Closing Help</a>
              </div>
            </div>
            <div>
              <p className="font-black">Contact</p>
              <div className="mt-5 grid gap-3 text-sm text-white/45">
                <a href="mailto:hello@keystartrealty.com">
                  hello@keystartrealty.com
                </a>
                <a href="tel:2125550139">(212) 555-0139</a>
                <span>New York, NY</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-[0.67rem] text-white/30 md:flex-row md:justify-between">
            <p>© 2026 KeyStart Realty. All rights reserved.</p>
            <p>
              Property prices, availability, financing, timelines, and buyer
              outcomes are subject to change.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
