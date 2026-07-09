import { Link } from "react-router-dom";
import { Container } from "../../components";
import consultationImage from "../../assets/optimized/beauty/Velvet-Skin-Clinic/consultation.webp";
import facialTreatmentImage from "../../assets/optimized/beauty/Velvet-Skin-Clinic/facial-treatment.webp";
import heroImage from "../../assets/optimized/beauty/Velvet-Skin-Clinic/hero.webp";
import ledTreatmentImage from "../../assets/optimized/beauty/Velvet-Skin-Clinic/led-treatment.webp";
import peelTreatmentImage from "../../assets/optimized/beauty/Velvet-Skin-Clinic/peel-treatment.webp";
import studioInteriorImage from "../../assets/optimized/beauty/Velvet-Skin-Clinic/studio-interior.webp";

type IconName =
  | "menu"
  | "calendar"
  | "shield"
  | "person"
  | "leaf"
  | "star"
  | "drop"
  | "spark"
  | "sun"
  | "user"
  | "arrow"
  | "lock"
  | "home"
  | "book"
  | "plans"
  | "profile";

interface Treatment {
  title: string;
  description: string;
  imageLabel: string;
  imageSrc: string;
  tone: string;
  icon: IconName;
}

interface ProcessItem {
  title: string;
  text: string;
  icon: IconName;
}

const navLinks = [
  "Home",
  "Treatments",
  "Skin Plans",
  "About",
  "The Studio",
  "Guides",
  "Pricing",
];

const trustItems: Array<[IconName, string]> = [
  ["shield", "Medical-grade treatments"],
  ["person", "Personalized, never rushed"],
  ["leaf", "Real results, naturally"],
  ["star", "Expert clinicians"],
];

const treatments: Treatment[] = [
  {
    title: "Facials",
    description:
      "Deep cleansing, hydration and barrier support tailored to your skin's needs.",
    imageLabel: "facial-treatment",
    imageSrc: facialTreatmentImage,
    tone: "from-[#f8eee7] via-[#dfc5b8] to-[#b98f8f]",
    icon: "drop",
  },
  {
    title: "Peels",
    description:
      "Medical-grade peels to refine texture, clarity and tone with minimal downtime.",
    imageLabel: "peel-treatment",
    imageSrc: peelTreatmentImage,
    tone: "from-[#fff8f1] via-[#ead8cc] to-[#bfa394]",
    icon: "spark",
  },
  {
    title: "LED Recovery",
    description:
      "Calm inflammation, boost collagen and accelerate skin recovery.",
    imageLabel: "led-treatment",
    imageSrc: ledTreatmentImage,
    tone: "from-[#fff1f3] via-[#e8c7d0] to-[#c9aaa8]",
    icon: "sun",
  },
  {
    title: "Personalized Skin Plans",
    description:
      "Science-backed plans designed around your goals, lifestyle and skin.",
    imageLabel: "consultation",
    imageSrc: consultationImage,
    tone: "from-[#f7f0e9] via-[#d8cfc2] to-[#8f947b]",
    icon: "user",
  },
];

const processItems: ProcessItem[] = [
  { title: "Consult", text: "We listen and assess deeply.", icon: "person" },
  { title: "Treat", text: "Evidence-led treatments.", icon: "spark" },
  { title: "Support", text: "Guidance between every visit.", icon: "leaf" },
  { title: "Results", text: "Healthier skin, long-term.", icon: "star" },
];

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: IconName;
  className?: string;
}) {
  const strokeProps = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.7,
  };

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {name === "menu" && (
        <>
          <path {...strokeProps} d="M5 7h14" />
          <path {...strokeProps} d="M5 12h10" />
          <path {...strokeProps} d="M5 17h14" />
        </>
      )}
      {name === "calendar" && (
        <>
          <rect {...strokeProps} x="5" y="5" width="14" height="14" rx="3" />
          <path {...strokeProps} d="M8 3v4M16 3v4M5 10h14" />
        </>
      )}
      {name === "shield" && (
        <path
          {...strokeProps}
          d="M12 3 19 6v5c0 4.4-2.8 7.7-7 10-4.2-2.3-7-5.6-7-10V6l7-3Z"
        />
      )}
      {name === "person" && (
        <>
          <circle {...strokeProps} cx="12" cy="8" r="3" />
          <path {...strokeProps} d="M5.5 20a6.5 6.5 0 0 1 13 0" />
        </>
      )}
      {name === "leaf" && (
        <>
          <path {...strokeProps} d="M5 20c8-1 13-6 14-15-9 1-14 6-14 15Z" />
          <path {...strokeProps} d="M8 17c3-3 6-5 10-7" />
        </>
      )}
      {name === "star" && (
        <path
          {...strokeProps}
          d="m12 3 2.5 5.5 6 .7-4.4 4 1.2 5.8L12 16l-5.3 3 1.2-5.8-4.4-4 6-.7L12 3Z"
        />
      )}
      {name === "drop" && (
        <>
          <path
            {...strokeProps}
            d="M12 3s6 6.2 6 10.5a6 6 0 1 1-12 0C6 9.2 12 3 12 3Z"
          />
          <path {...strokeProps} d="M10 15c1.2.9 2.8.9 4 0" />
        </>
      )}
      {name === "spark" && (
        <>
          <path {...strokeProps} d="M12 3v5M12 16v5M3 12h5M16 12h5" />
          <path {...strokeProps} d="m6 6 3 3M15 15l3 3M18 6l-3 3M9 15l-3 3" />
        </>
      )}
      {name === "sun" && (
        <>
          <circle {...strokeProps} cx="12" cy="12" r="3.5" />
          <path
            {...strokeProps}
            d="M12 2v3M12 19v3M4.9 4.9 7 7M17 17l2.1 2.1M2 12h3M19 12h3M4.9 19.1 7 17M17 7l2.1-2.1"
          />
        </>
      )}
      {name === "user" && (
        <>
          <circle {...strokeProps} cx="12" cy="8" r="4" />
          <path {...strokeProps} d="M5 21a7 7 0 0 1 14 0" />
        </>
      )}
      {name === "arrow" && <path {...strokeProps} d="M7 12h10M13 7l5 5-5 5" />}
      {name === "lock" && (
        <>
          <rect {...strokeProps} x="6" y="10" width="12" height="10" rx="2" />
          <path {...strokeProps} d="M9 10V7a3 3 0 0 1 6 0v3" />
        </>
      )}
      {name === "home" && (
        <>
          <path {...strokeProps} d="m4 11 8-7 8 7" />
          <path {...strokeProps} d="M7 10v10h10V10" />
        </>
      )}
      {name === "book" && (
        <>
          <rect {...strokeProps} x="5" y="4" width="14" height="16" rx="2" />
          <path {...strokeProps} d="M8 8h8M8 12h8M8 16h5" />
        </>
      )}
      {name === "plans" && (
        <>
          <path {...strokeProps} d="M7 6h10M7 12h10M7 18h10" />
          <circle {...strokeProps} cx="4" cy="6" r="1" />
          <circle {...strokeProps} cx="4" cy="12" r="1" />
          <circle {...strokeProps} cx="4" cy="18" r="1" />
        </>
      )}
      {name === "profile" && (
        <>
          <circle {...strokeProps} cx="12" cy="8" r="3.5" />
          <path {...strokeProps} d="M6 20a6 6 0 0 1 12 0" />
        </>
      )}
    </svg>
  );
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/beauty/velvet-skin-clinic"
      className="block text-center text-[#2f2a27]"
    >
      <span
        className={`${compact ? "text-2xl" : "text-4xl"} block font-serif uppercase tracking-[0.34em] leading-none`}
      >
        Velvet
      </span>
      <span className="mt-1 block text-[0.5rem] font-bold uppercase tracking-[0.42em] text-[#80756c]">
        Skin Clinic
      </span>
    </Link>
  );
}

function Header() {
  return (
    <header id="home" className="relative z-40 pt-5 lg:pt-10">
      <Container>
        <div className="hidden min-h-20 items-center justify-between rounded-t-[1.5rem] border border-[#ded5cb] bg-[#fffdf8]/92 px-7 shadow-xl shadow-[#8c8175]/10 backdrop-blur lg:flex">
          <Logo />
          <nav
            aria-label="Velvet navigation"
            className="flex items-center gap-8 text-sm font-semibold text-[#443f3a]"
          >
            {navLinks.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="transition hover:text-[#73795f]"
              >
                {item}
              </a>
            ))}
          </nav>
          <a
            href="#book"
            className="rounded-lg bg-[#73795f] px-7 py-3 text-sm font-black text-[#fffdf8] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#596044]"
          >
            Book Consultation
          </a>
        </div>

        <div className="flex h-16 items-center justify-between rounded-t-[1.35rem] border border-[#ded5cb] bg-[#fffdf8]/94 px-4 shadow-lg shadow-[#8c8175]/10 backdrop-blur lg:hidden">
          <button
            type="button"
            aria-label="Open menu"
            className="grid h-10 w-10 place-items-center text-[#2f2a27]"
          >
            <Icon name="menu" />
          </button>
          <Logo compact />
          <a
            href="#book"
            aria-label="Open booking"
            className="grid h-10 w-10 place-items-center rounded-xl border border-[#ded5cb] text-[#2f2a27]"
          >
            <Icon name="calendar" />
          </a>
        </div>
      </Container>
    </header>
  );
}

function ImagePanel({
  label,
  tone,
  className = "",
  src,
  alt = "",
}: {
  label: string;
  tone: string;
  className?: string;
  src?: string;
  alt?: string;
}) {
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${tone} ${className}`}
    >
      {src && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_18%,rgba(255,255,255,0.38),transparent_24%),radial-gradient(circle_at_28%_76%,rgba(115,121,95,0.14),transparent_24%)]" />
      {label && (
        <div className="absolute inset-x-6 bottom-6 rounded-2xl border border-white/55 bg-white/42 p-4 text-xs font-black uppercase tracking-[0.18em] text-[#6d6258] backdrop-blur">
          {label}
        </div>
      )}
    </div>
  );
}

function Hero() {
  return (
    <section className="relative -mt-px overflow-hidden">
      <Container>
        <div className="relative overflow-hidden border-x border-b border-[#ded5cb] bg-[#f8efe7] lg:min-h-[540px]">
          <img
            src={heroImage}
            alt="Velvet Skin Clinic treatment room"
            className="absolute inset-0 z-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(248,239,231,0.96)_0%,rgba(248,239,231,0.88)_34%,rgba(248,239,231,0.2)_70%,rgba(248,239,231,0.05)_100%),radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.7),transparent_32%)]" />
          <div className="relative z-20 grid min-h-[560px] items-center px-6 py-12 md:px-12 lg:grid-cols-[0.9fr_1.1fr] lg:px-16">
            <div className="max-w-xl">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-[#746756]">
                Clinical Care. Calm Environment.
              </p>
              <h1 className="mt-5 font-serif text-5xl leading-[0.98] text-[#2f2a27] md:text-7xl">
                Clinical Skincare, Calmly Delivered
              </h1>
              <p className="mt-6 max-w-md text-lg leading-8 text-[#4f4842]">
                Evidence-led treatments for real skin. Facials, peels, LED
                recovery, and skin plans-explained in plain language.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                <a
                  href="#book"
                  className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#73795f] px-7 text-sm font-black text-[#fffdf8] shadow-lg shadow-[#73795f]/18 transition hover:-translate-y-0.5 hover:bg-[#596044]"
                >
                  Book Your Consultation
                </a>
                <a
                  href="#the-studio"
                  className="inline-flex min-h-12 items-center justify-center gap-3 text-sm font-black text-[#4f4842] transition hover:text-[#73795f]"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-[#ded5cb] bg-white/58">
                    <Icon name="arrow" className="h-4 w-4" />
                  </span>
                  See the Studio
                </a>
              </div>
              <ImagePanel
                label=""
                tone="from-[#f4e7dc] via-[#dac7b8] to-[#b9a08e]"
                src={heroImage}
                alt="Velvet Skin Clinic treatment room"
                className="mt-10 aspect-[1.25] rounded-2xl shadow-xl shadow-[#7b7065]/10 lg:hidden"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TrustBar() {
  return (
    <section className="border-y border-[#ded5cb] bg-[#fffdf8]">
      <Container>
        <div className="grid divide-y divide-[#ded5cb] text-sm text-[#4f4842] md:grid-cols-4 md:divide-x md:divide-y-0">
          {trustItems.map(([icon, text]) => (
            <div
              key={text}
              className="flex items-center justify-center gap-3 px-5 py-5"
            >
              <Icon name={icon} className="h-5 w-5 text-[#73795f]" />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function TreatmentCard({ treatment }: { treatment: Treatment }) {
  return (
    <article className="group overflow-hidden rounded-xl border border-[#ded5cb] bg-[#fffdf8] shadow-sm shadow-[#7b7065]/8 transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-[#7b7065]/12">
      <ImagePanel
        label={treatment.imageLabel}
        tone={treatment.tone}
        src={treatment.imageSrc}
        alt={`${treatment.title} treatment at Velvet Skin Clinic`}
        className="aspect-[1.45]"
      />
      <div className="relative p-6 pt-8">
        <span className="absolute -top-7 left-6 grid h-14 w-14 place-items-center rounded-full border border-[#ded5cb] bg-[#fffdf8] text-[#73795f] shadow-md">
          <Icon name={treatment.icon} className="h-7 w-7" />
        </span>
        <h3 className="font-serif text-2xl text-[#2f2a27]">
          {treatment.title}
        </h3>
        <p className="mt-3 min-h-20 text-sm leading-6 text-[#5b534d]">
          {treatment.description}
        </p>
        <a
          href="#book"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#746756] transition group-hover:text-[#73795f]"
        >
          Learn more <Icon name="arrow" className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}

function Treatments() {
  return (
    <section id="treatments" className="bg-[#fffaf5] py-16 md:py-20">
      <Container>
        <div className="text-center">
          <p className="text-xs font-black uppercase tracking-[0.28em] text-[#746756]">
            Our Treatments
          </p>
          <h2 className="mt-3 font-serif text-4xl text-[#2f2a27] md:text-5xl">
            Targeted Care. Visible Results.
          </h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {treatments.map((treatment) => (
            <TreatmentCard key={treatment.title} treatment={treatment} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ConsultationForm() {
  const inputClass =
    "min-h-11 rounded-lg border border-[#ded5cb] bg-[#fffdf8] px-4 text-sm text-[#4f4842] outline-none transition placeholder:text-[#9a9188] focus:border-[#73795f]";

  return (
    <form
      id="book"
      className="rounded-2xl border border-[#ded5cb] bg-[#fffdf8] p-5 shadow-xl shadow-[#7b7065]/10"
      onSubmit={(event) => event.preventDefault()}
    >
      <h3 className="font-serif text-2xl text-[#2f2a27]">
        Book Your Consultation
      </h3>
      <p className="mt-1 text-sm text-[#5b534d]">
        Start with a personalized skin assessment.
      </p>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <input className={inputClass} placeholder="Full Name" />
        <input
          className={inputClass}
          placeholder="Email Address"
          type="email"
        />
        <input
          className={`${inputClass} sm:col-span-2`}
          placeholder="Phone Number"
        />
        <select className={`${inputClass} sm:col-span-2`} defaultValue="">
          <option value="" disabled>
            What brings you in?
          </option>
          <option>Facials</option>
          <option>Peels</option>
          <option>LED Recovery</option>
          <option>Skin plan</option>
        </select>
        <input className={inputClass} placeholder="Preferred Date" />
        <select className={inputClass} defaultValue="">
          <option value="" disabled>
            Preferred Time
          </option>
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>
      </div>
      <button
        type="submit"
        className="mt-4 min-h-12 w-full rounded-lg bg-[#73795f] px-5 text-sm font-black text-[#fffdf8] transition hover:-translate-y-0.5 hover:bg-[#596044]"
      >
        Request Appointment
      </button>
      <p className="mt-4 flex items-center justify-center gap-2 text-xs text-[#746756]">
        <Icon name="lock" className="h-4 w-4" /> Your information is safe and
        secure.
      </p>
    </form>
  );
}

function Approach() {
  return (
    <section id="about" className="bg-[#f4ebe3] py-16 md:py-20">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_0.95fr_0.95fr] lg:items-center">
          <ImagePanel
            label="studio-interior"
            tone="from-[#efe2d6] via-[#c8b7a9] to-[#8b806f]"
            src={studioInteriorImage}
            alt="Velvet Skin Clinic studio interior"
            className="min-h-[390px] rounded-none shadow-xl shadow-[#7b7065]/10"
          />
          <div className="text-center lg:text-left">
            <p className="text-xs font-black uppercase tracking-[0.28em] text-[#746756]">
              Our Approach
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-[#2f2a27] md:text-5xl">
              Skin Care That Feels Precise, Soft & Never Rushed
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-[#5b534d] lg:mx-0">
              We combine clinical expertise with a calm, unhurried environment
              to deliver treatments that are effective-and thoughtfully
              delivered.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {processItems.map((item) => (
                <div key={item.title} className="text-center">
                  <span className="mx-auto grid h-12 w-12 place-items-center rounded-full border border-[#ded5cb] bg-[#fffdf8] text-[#73795f]">
                    <Icon name={item.icon} />
                  </span>
                  <p className="mt-3 font-serif text-lg text-[#2f2a27]">
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[#5b534d]">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <ConsultationForm />
        </div>
      </Container>
    </section>
  );
}

function MobileTreatmentList() {
  return (
    <section className="bg-[#fffaf5] px-4 py-6 lg:hidden">
      <p className="mb-4 text-xs font-black uppercase tracking-[0.22em] text-[#746756]">
        Treatments
      </p>
      <div className="grid gap-3">
        {treatments.map((treatment) => (
          <a
            key={treatment.title}
            href="#book"
            className="grid grid-cols-[5.25rem_1fr_auto] items-center gap-4 rounded-xl border border-[#ded5cb] bg-[#fffdf8] p-3 shadow-sm"
          >
            <ImagePanel
              label=""
              tone={treatment.tone}
              src={treatment.imageSrc}
              alt={`${treatment.title} treatment`}
              className="h-20 rounded-lg"
            />
            <span>
              <span className="block font-serif text-xl text-[#2f2a27]">
                {treatment.title}
              </span>
              <span className="mt-1 line-clamp-2 block text-xs leading-5 text-[#5b534d]">
                {treatment.description}
              </span>
            </span>
            <Icon name="arrow" className="h-5 w-5 text-[#746756]" />
          </a>
        ))}
      </div>
    </section>
  );
}

function MobileBottomNav() {
  const items: Array<[IconName, string, string]> = [
    ["home", "Home", "#home"],
    ["spark", "Treatments", "#treatments"],
    ["calendar", "Book", "#book"],
    ["plans", "Plans", "#skin-plans"],
    ["profile", "Profile", "#about"],
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 grid grid-cols-5 border-t border-[#ded5cb] bg-[#fffdf8]/96 px-2 pb-4 pt-3 text-center text-[0.68rem] font-semibold text-[#746756] shadow-2xl shadow-[#7b7065]/16 backdrop-blur lg:hidden">
      {items.map(([icon, label, href]) => (
        <a
          key={label}
          href={href}
          className="grid justify-items-center gap-1 first:text-[#73795f]"
        >
          <Icon name={icon} className="h-5 w-5" />
          <span>{label}</span>
        </a>
      ))}
    </nav>
  );
}

function Footer() {
  return (
    <footer
      id="pricing"
      className="bg-[#fffdf8] pb-28 pt-14 text-[#4f4842] lg:pb-12"
    >
      <Container className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div>
          <Logo />
          <p className="mt-5 max-w-sm text-sm leading-7 text-[#5b534d]">
            Clinical skincare studio for facials, peels, LED recovery, and calm
            skin planning.
          </p>
        </div>
        <div>
          <h3 className="font-black uppercase tracking-[0.16em] text-[#2f2a27]">
            Address
          </h3>
          <p className="mt-4 text-sm leading-7">
            118 Linden Avenue
            <br />
            Suite 204
            <br />
            New York, NY
          </p>
        </div>
        <div>
          <h3 className="font-black uppercase tracking-[0.16em] text-[#2f2a27]">
            Hours
          </h3>
          <p className="mt-4 text-sm leading-7">
            Mon-Fri 9am-7pm
            <br />
            Saturday 10am-4pm
            <br />
            Sunday Closed
          </p>
        </div>
        <form
          className="rounded-2xl border border-[#ded5cb] bg-[#f8efe7] p-5"
          onSubmit={(event) => event.preventDefault()}
        >
          <h3 className="font-black uppercase tracking-[0.16em] text-[#2f2a27]">
            Newsletter
          </h3>
          <p className="mt-3 text-sm leading-6 text-[#5b534d]">
            Skin notes, treatment guides, and seasonal care reminders.
          </p>
          <label className="mt-5 flex min-h-12 overflow-hidden rounded-lg border border-[#ded5cb] bg-[#fffdf8]">
            <span className="sr-only">Email address</span>
            <input
              className="min-w-0 flex-1 bg-transparent px-4 text-sm outline-none placeholder:text-[#9a9188]"
              placeholder="Email address"
              type="email"
            />
            <button
              className="grid w-12 place-items-center bg-[#73795f] text-[#fffdf8]"
              type="submit"
              aria-label="Subscribe"
            >
              <Icon name="arrow" />
            </button>
          </label>
          <div className="mt-5 flex gap-4 text-sm font-bold text-[#73795f]">
            <a href="#home">Instagram</a>
            <a href="#home">TikTok</a>
            <a href="#home">Reviews</a>
          </div>
        </form>
      </Container>
    </footer>
  );
}

export function VelvetSkinClinic() {
  return (
    <main className="min-h-screen bg-[#eee3d9] pb-0 text-[#2f2a27] lg:bg-[radial-gradient(circle_at_8%_14%,rgba(255,255,255,0.8),transparent_24%),linear-gradient(135deg,#efe5db,#d8c8bb)]">
      <Header />
      <Hero />
      <TrustBar />
      <MobileTreatmentList />
      <Treatments />
      <section
        id="skin-plans"
        className="border-y border-[#ded5cb] bg-[#fffdf8] py-14"
      >
        <Container className="grid gap-5 md:grid-cols-3">
          {["Skin Plans", "Guides", "Pricing"].map((item) => (
            <article
              key={item}
              id={item === "Guides" ? "guides" : undefined}
              className="scroll-mt-28 rounded-2xl border border-[#ded5cb] bg-[#fffaf5] p-6 shadow-sm"
            >
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#746756]">
                {item}
              </p>
              <h3 className="mt-3 font-serif text-2xl text-[#2f2a27]">
                Clear steps before you commit.
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5b534d]">
                Simple treatment guidance, transparent expectations, and warm
                follow-through.
              </p>
            </article>
          ))}
        </Container>
      </section>
      <section id="the-studio" className="scroll-mt-28">
        <Approach />
      </section>
      <Footer />
      <MobileBottomNav />
    </main>
  );
}
