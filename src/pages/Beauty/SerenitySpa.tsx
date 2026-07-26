import { useEffect, useState, type MouseEvent, type ReactNode } from "react";
import {
  Brain,
  BriefcaseBusiness,
  Camera,
  Flower2,
  Layers3,
  Leaf,
  MoonStar,
  ShieldCheck,
  Smile,
  Sparkles,
  Sprout,
  Sun,
  UserRound,
  UsersRound,
  Waves,
  type LucideIcon,
} from "lucide-react";

const serenityImages = import.meta.glob(
<<<<<<< HEAD
  "../../assets/images/beauty/serenity/*.png",
=======
  "../../assets/optimized/beauty/serenity/*.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
  {
    eager: true,
    query: "?url",
    import: "default",
  },
) as Record<string, string>;

const image = (name: string) =>
<<<<<<< HEAD
  serenityImages[`../../assets/images/beauty/serenity/${name}`];
=======
  serenityImages[`../../assets/optimized/beauty/serenity/${name}`];
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Services", "services"],
  ["Packages", "packages"],
  ["Therapists", "therapists"],
  ["Gallery", "gallery"],
  ["Journal", "journal"],
  ["Contact", "contact"],
];

const services = [
  [
<<<<<<< HEAD
    "swidish.png",
=======
    "swidish.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
    "leaf",
    "Swedish Massage",
    "Relaxing, full-body massage to ease tension and promote circulation.",
  ],
  [
<<<<<<< HEAD
    "deep.png",
=======
    "deep.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
    "branch",
    "Deep Tissue",
    "Targeted pressure to release chronic tension and muscle knots.",
  ],
  [
<<<<<<< HEAD
    "hotstone.png",
=======
    "hotstone.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
    "waves",
    "Hot Stone Therapy",
    "Heated stones melt away tension and encourage deep relaxation.",
  ],
  [
<<<<<<< HEAD
    "aroma.png",
=======
    "aroma.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
    "leaf",
    "Aromatherapy",
    "Scent-led therapy to balance mood, mind, and body naturally.",
  ],
  [
<<<<<<< HEAD
    "facial.png",
=======
    "facial.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
    "face",
    "Signature Facials",
    "Nourishing facials for radiant, healthy, and balanced skin.",
  ],
  [
<<<<<<< HEAD
    "resorative.png",
=======
    "resorative.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
    "sun",
    "Restorative Packages",
    "Curated experiences for deeper rest, renewal, and calm.",
  ],
];

const journeys = [
  [
<<<<<<< HEAD
    "rest-journey.png",
=======
    "rest-journey.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
    "The Reset Journey",
    "90 Minutes",
    "Full body massage, aromatherapy scalp treatment, and herbal tea ritual.",
    "$195",
  ],
  [
<<<<<<< HEAD
    "restor-journey.png",
=======
    "restor-journey.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
    "The Restore Journey",
    "120 Minutes",
    "Deep tissue massage, hot stone therapy, and nourishing facial.",
    "$245",
  ],
  [
<<<<<<< HEAD
    "renew-journey.png",
=======
    "renew-journey.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
    "The Renew Journey",
    "180 Minutes",
    "Complete head-to-toe experience with massage, facial, and body polish.",
    "$320",
  ],
];

const therapists = [
  [
<<<<<<< HEAD
    "maya.png",
=======
    "maya.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
    "Maya Thompson",
    "Massage Therapist",
    "Specializes in relaxation and holistic healing techniques.",
  ],
  [
<<<<<<< HEAD
    "james.png",
=======
    "james.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
    "James Parker",
    "Deep Tissue Specialist",
    "Expert in sports therapy and chronic pain management.",
  ],
  [
<<<<<<< HEAD
    "elena.png",
=======
    "elena.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
    "Elena Morris",
    "Aromatherapy Therapist",
    "Blends essential oils and touch to restore mind-body balance.",
  ],
  [
<<<<<<< HEAD
    "sofia.png",
=======
    "sofia.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
    "Sophia Lee",
    "Facial & Skin Therapist",
    "Passionate about natural skincare and holistic beauty.",
  ],
];

const testimonials = [
  [
    "Serenity Spa is my sanctuary. Every visit leaves me feeling lighter, calmer, and completely renewed.",
    "Jessica M.",
<<<<<<< HEAD
    "maya.png",
=======
    "maya.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
  ],
  [
    "The therapists are incredible. The attention to detail and peaceful space are unmatched.",
    "David R.",
<<<<<<< HEAD
    "james.png",
=======
    "james.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
  ],
  [
    "I’ve finally found a place where I can truly relax and take care of myself.",
    "Amanda L.",
<<<<<<< HEAD
    "elena.png",
=======
    "elena.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
  ],
];

const galleryImages = [
<<<<<<< HEAD
  "gallary01.png",
  "gallary02.png",
  "gallary03.png",
  "gallary04.png",
  "gallary05.png",
  "gallary06.png",
=======
  "gallary01.webp",
  "gallary02.webp",
  "gallary03.webp",
  "gallary04.webp",
  "gallary05.webp",
  "gallary06.webp",
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
];

function Icon({
  name,
  className = "h-8 w-8",
}: {
  name: string;
  className?: string;
}) {
  const icons: Record<string, LucideIcon> = {
    leaf: Leaf,
    branch: Sprout,
    waves: Waves,
    face: Smile,
    sun: Sun,
    person: UserRound,
    lotus: Flower2,
    moon: MoonStar,
    head: Brain,
    stones: Layers3,
    shield: ShieldCheck,
    sparkles: Sparkles,
  };
  const Component = icons[name] ?? Leaf;
  return (
    <Component aria-hidden="true" className={className} strokeWidth={1.35} />
  );
}

function scrollToId(event: MouseEvent<HTMLAnchorElement>, id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const top = target.getBoundingClientRect().top + window.scrollY - 68;
  window.scrollTo({
    top: Math.max(0, top),
    behavior: reduced ? "auto" : "smooth",
  });
  window.history.replaceState(null, "", `#${id}`);
}

function Button({
  children,
  href = "#reserve",
  outline = false,
  className = "",
}: {
  children: ReactNode;
  href?: string;
  outline?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      onClick={(event) =>
        href.startsWith("#") && scrollToId(event, href.slice(1))
      }
      className={`inline-flex min-h-11 items-center justify-center rounded-full px-7 py-3 text-xs font-semibold uppercase tracking-[0.08em] transition duration-300 hover:-translate-y-0.5 ${outline ? "border border-white/75 bg-black/10 text-white hover:bg-white hover:text-[#35402c]" : "bg-[#778269] text-white shadow-lg shadow-black/15 hover:bg-[#626d56] hover:shadow-xl"} ${className}`}
    >
      {children}
    </a>
  );
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="text-center">
      <h2 className="serenity-serif text-xl uppercase tracking-[0.14em] text-[#4e4a3f]">
        {children}
      </h2>
      <div className="mt-2 flex items-center justify-center gap-2 text-[#818b6e]">
        <span className="h-px w-9 bg-[#bdbea8]" />
        <Icon name="branch" className="h-4 w-4" />
        <span className="h-px w-9 bg-[#bdbea8]" />
      </div>
    </div>
  );
}

export function SerenitySpa() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      let active = "home";
      let activeTop = -1;
      const marker = window.scrollY + 88;
      navItems.forEach(([, id]) => {
        const section = document.getElementById(id);
        const top = section
          ? section.getBoundingClientRect().top + window.scrollY
          : -1;
        if (section && top <= marker && top > activeTop) {
          active = id;
          activeTop = top;
        }
      });
      if (
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 3
      )
        active = "contact";
      setActiveSection(active);
      setScrolled(window.scrollY > 20);
    };
    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const close = (event: KeyboardEvent) =>
      event.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [menuOpen]);

  const navigate = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    setMenuOpen(false);
    setActiveSection(id);
    scrollToId(event, id);
  };

  return (
    <main className="serenity-site brand-motion motion-serenity bg-[#f7f4ec] text-[#4d4b42] [font-family:Arial,sans-serif]">
      <header
        className={`fixed inset-x-0 top-0 z-50 border-b transition duration-300 ${scrolled || menuOpen ? "border-white/10 bg-[#3f4937]/95 shadow-xl backdrop-blur-xl" : "border-transparent bg-gradient-to-b from-black/45 to-transparent"}`}
      >
        <div className="mx-auto flex h-[70px] max-w-[1510px] items-center justify-between px-5 lg:px-10">
          <a
            href="#home"
            onClick={(event) => navigate(event, "home")}
            className="flex items-center gap-3 text-white"
          >
            <span className="grid h-11 w-9 place-items-center rounded-full border border-white/75">
              <Icon name="branch" className="h-7 w-7" />
            </span>
            <span className="serenity-serif text-lg tracking-[0.22em]">
              SERENITY SPA
            </span>
          </a>
          <nav className="hidden items-center gap-6 xl:flex">
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => navigate(event, id)}
                aria-current={activeSection === id ? "location" : undefined}
                className={`relative py-3 text-[11px] font-semibold uppercase tracking-[0.06em] text-white transition after:absolute after:inset-x-0 after:bottom-1 after:h-px after:bg-white after:transition-transform ${activeSection === id ? "active after:scale-x-100" : "text-white/80 after:scale-x-0 hover:text-white hover:after:scale-x-100"}`}
              >
                {label}
              </a>
            ))}
          </nav>
          <Button className="hidden bg-[#7d876c] px-8 lg:inline-flex">
            Book a Retreat
          </Button>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="serenity-mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-10 w-10 place-items-center rounded-full border border-white/50 text-white xl:hidden"
          >
            <span className="flex flex-col gap-1.5">
              <i
                className={`h-px w-5 bg-current transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <i
                className={`h-px w-5 bg-current transition ${menuOpen ? "opacity-0" : ""}`}
              />
              <i
                className={`h-px w-5 bg-current transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
        {menuOpen && (
          <nav
            id="serenity-mobile-menu"
            className="grid max-h-[calc(100vh-70px)] overflow-auto border-t border-white/10 bg-[#3f4937] p-4 xl:hidden"
          >
            {navItems.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(event) => navigate(event, id)}
                className={`rounded-lg px-4 py-3 text-sm font-semibold uppercase tracking-wider text-white ${activeSection === id ? "active bg-white/12" : "hover:bg-white/8"}`}
              >
                {label}
              </a>
            ))}
            <Button className="mt-3 bg-[#818b70]">Book a Retreat</Button>
          </nav>
        )}
      </header>

      <section
        id="home"
        className="relative min-h-[640px] overflow-hidden text-white"
      >
        <img
<<<<<<< HEAD
          src={image("hero.png")}
=======
          src={image("hero.webp")}
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
          alt="Peaceful massage room opening onto a lush garden"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/5" />
        <div className="relative mx-auto flex min-h-[640px] max-w-[1510px] items-center px-6 pb-12 pt-28 lg:px-20">
          <div className="max-w-[660px]">
            <h1 className="serenity-serif text-5xl leading-[0.98] sm:text-6xl lg:text-7xl">
              A retreat for
              <br />
              the nervous system.
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-white/90 sm:text-lg">
              Restorative massage, purposeful treatments,
              <br className="hidden sm:block" /> and calming rituals to help you
              slow down,
              <br className="hidden sm:block" /> reset, and return to balance.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button>Book a Retreat</Button>
              <Button href="#services" outline>
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#d9d5c9] bg-[#fbfaf6] px-5 py-6">
        <div className="mx-auto grid max-w-[1370px] grid-cols-2 gap-6 md:grid-cols-4">
          {[
            [
              "leaf",
              "Restorative Care",
              "Designed to calm, restore and renew.",
            ],
            [
              "person",
              "Licensed Therapists",
              "Highly trained professionals who truly care.",
            ],
            [
              "leaf",
              "Natural & Clean",
              "Pure oils and skincare. No harsh chemicals.",
            ],
            [
              "lotus",
              "Peaceful Setting",
              "A serene environment for deep relaxation.",
            ],
          ].map(([icon, title, copy]) => (
            <div
              key={title}
              className="flex gap-4 md:border-r md:border-[#d8d3c7] md:pr-5 md:last:border-0"
            >
              <Icon name={icon} className="h-10 w-10 shrink-0 text-[#7e886f]" />
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.12em] text-[#6c6b60]">
                  {title}
                </h2>
                <p className="mt-1 text-xs leading-5 text-[#6b695f]">{copy}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="services"
        className="mx-auto max-w-[1510px] px-5 py-9 lg:px-10"
      >
        <SectionTitle>Signature Services</SectionTitle>
        <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {services.map(([src, icon, title, copy]) => (
            <article
              key={title}
              className="group overflow-hidden rounded-xl border border-[#dcd8cc] bg-[#fbfaf6] shadow-[0_5px_20px_rgba(74,67,51,0.04)] transition duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="aspect-[1.35/1] overflow-hidden">
                <img
                  src={image(src)}
                  alt={title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="relative px-4 pb-5 pt-8 text-center">
                <span className="absolute left-1/2 top-0 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-[#fbfaf6] text-[#7b856d] shadow-md">
                  <Icon name={icon} className="h-6 w-6" />
                </span>
                <h3 className="text-xs font-bold uppercase tracking-[0.08em]">
                  {title}
                </h3>
                <p className="mt-3 min-h-14 text-xs leading-5 text-[#6a675d]">
                  {copy}
                </p>
                <a
                  href="#packages"
                  className="mt-3 inline-block text-[11px] font-semibold uppercase tracking-wider text-[#64695a] hover:text-[#879174]"
                >
                  Learn More →
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="grid bg-[#f2f0e8] lg:grid-cols-[0.88fr_1.12fr]"
      >
        <img
<<<<<<< HEAD
          src={image("interior.png")}
=======
          src={image("interior.webp")}
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
          alt="Serenity Spa relaxation lounge"
          className="h-full min-h-[420px] w-full object-cover"
        />
        <div className="relative flex items-center overflow-hidden px-7 py-12 lg:px-20">
          <div className="relative z-10 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#777b69]">
              About Serenity Spa
            </p>
            <h2 className="serenity-serif mt-3 text-4xl leading-none md:text-5xl">
              Wellness is not a luxury,
              <br />
              it’s a way of being.
            </h2>
            <p className="mt-5 text-sm leading-6 text-[#66645b]">
              At Serenity Spa, we believe true wellbeing comes from slowing down
              and reconnecting—to yourself, to nature, and to what truly
              matters. Our treatments blend ancient healing wisdom with modern
              techniques to support your body, calm your mind, and uplift your
              spirit.
            </p>
            <Button href="#journal" className="mt-6">
              Our Philosophy
            </Button>
          </div>
          <Icon
            name="branch"
            className="absolute -right-4 bottom-8 h-36 w-36 rotate-[-20deg] text-[#aeb49a]/55"
          />
        </div>
      </section>

      <section
        id="packages"
        className="mx-auto max-w-[1510px] px-5 py-8 lg:px-10"
      >
        <SectionTitle>Wellness Journeys</SectionTitle>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {journeys.map(([src, title, time, copy, price]) => (
            <article
              key={title}
              className="group grid overflow-hidden rounded-xl border border-[#dcd8cc] bg-[#fbfaf6] sm:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="overflow-hidden">
                <img
                  src={image(src)}
                  alt={title}
                  className="h-full min-h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col p-5">
                <h3 className="serenity-serif text-lg uppercase tracking-[0.08em]">
                  {title}
                </h3>
                <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[#7b806d]">
                  {time}
                </p>
                <p className="mt-3 flex-1 text-xs leading-5 text-[#67645a]">
                  {copy}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <strong className="serenity-serif text-lg">{price}</strong>
                  <a
                    href="#reserve"
                    className="text-[11px] font-semibold uppercase"
                  >
                    Book Now →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#efeee7] px-5 py-7">
        <div className="mx-auto grid max-w-[1350px] grid-cols-2 gap-7 md:grid-cols-3 lg:grid-cols-5">
          {[
            [
              "lotus",
              "Relaxation",
              "Helps lower cortisol and promotes deep calm.",
            ],
            ["lotus", "Recovery", "Supports muscle recovery and pain relief."],
            [
              "moon",
              "Better Sleep",
              "Encourages deeper, more restorative sleep.",
            ],
            ["head", "Stress Relief", "Reduces anxiety and improves mood."],
            [
              "stones",
              "Body Balance",
              "Restores energy flow and body alignment.",
            ],
          ].map(([icon, title, copy]) => (
            <div
              key={title}
              className="text-center lg:border-r lg:border-[#cecbbf] lg:pr-5 lg:last:border-0"
            >
              <Icon name={icon} className="mx-auto h-11 w-11 text-[#69715f]" />
              <h3 className="mt-3 text-xs font-bold uppercase tracking-[0.1em]">
                {title}
              </h3>
              <p className="mx-auto mt-2 max-w-40 text-xs leading-5 text-[#69675e]">
                {copy}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="therapists" className="mx-auto max-w-[1430px] px-5 py-8">
        <SectionTitle>Meet Our Therapists</SectionTitle>
        <div className="mt-7 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {therapists.map(([src, name, role, copy]) => (
            <article
              key={name}
              className="grid gap-4 sm:grid-cols-[0.82fr_1.18fr]"
            >
              <img
                src={image(src)}
                alt={`${name}, ${role}`}
                className="aspect-square h-full w-full rounded-xl object-cover object-top"
              />
              <div className="py-2">
                <h3 className="text-xs font-bold uppercase tracking-[0.08em]">
                  {name}
                </h3>
                <p className="mt-1 text-xs text-[#777c68]">{role}</p>
                <p className="mt-3 text-xs leading-5 text-[#68665e]">{copy}</p>
                <div className="mt-3 flex gap-3 text-[#69745f]">
                  <a
                    href="#contact"
                    aria-label={`${name} photo gallery`}
                    className="transition hover:text-[#3e4835]"
                  >
                    <Camera className="h-4 w-4" strokeWidth={1.6} />
                  </a>
                  <a
                    href="#contact"
                    aria-label={`${name} professional profile`}
                    className="transition hover:text-[#3e4835]"
                  >
                    <BriefcaseBusiness className="h-4 w-4" strokeWidth={1.6} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="journal" className="mx-auto max-w-[1430px] px-5 pb-8">
        <SectionTitle>What Our Guests Say</SectionTitle>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {testimonials.map(([quote, name, portrait]) => (
            <blockquote
              key={name}
              className="relative rounded-xl bg-[#f2f0e9] p-7 shadow-[0_8px_28px_rgba(77,70,56,0.04)]"
            >
              <span className="serenity-serif absolute left-5 top-2 text-5xl text-[#b6baa6]">
                “
              </span>
              <p className="pl-8 text-sm leading-6 text-[#625f56]">{quote}</p>
              <footer className="mt-5 flex items-center gap-3 pl-8">
                <img
                  src={image(portrait)}
                  alt=""
                  className="h-9 w-9 rounded-full object-cover object-top"
                />
                <span className="text-xs font-semibold uppercase tracking-wider">
                  — {name}
                </span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section id="gallery" className="grid grid-cols-3 sm:grid-cols-6">
        {galleryImages.map((src) => (
          <a
            key={src}
            href="#reserve"
            className="group aspect-[1.25/1] overflow-hidden"
          >
            <img
              src={image(src)}
              alt="Serenity Spa atmosphere"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110 group-hover:brightness-90"
            />
          </a>
        ))}
      </section>

      <section
        id="reserve"
        className="relative overflow-hidden bg-[#68725b] px-6 py-8 text-white"
      >
        <Icon
          name="branch"
          className="absolute -left-6 -top-8 h-36 w-36 rotate-45 text-white/8"
        />
        <Icon
          name="branch"
          className="absolute -right-6 bottom-0 h-36 w-36 -rotate-45 text-white/8"
        />
        <div className="relative mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
          <div>
            <h2 className="serenity-serif text-3xl md:text-4xl">
              Ready to relax, reset, and reconnect?
            </h2>
            <p className="mt-2 text-sm text-white/80">
              Your well-being is waiting.
            </p>
          </div>
          <div className="text-center">
            <Button outline className="px-10">
              Book Your Retreat
            </Button>
            <p className="mt-3 text-xs text-white/75">
              Or call us at (555) 123-4567
            </p>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-white/25 bg-[#4e5845] px-6 py-9 text-white"
      >
        <div className="mx-auto grid max-w-[1370px] gap-8 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.85fr_0.9fr_0.75fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-12 w-10 place-items-center rounded-full border border-white/60">
                <Icon name="branch" className="h-8 w-8" />
              </span>
              <span className="serenity-serif tracking-[0.2em]">
                SERENITY SPA
              </span>
            </div>
            <p className="mt-4 max-w-52 text-xs leading-5 text-white/70">
              A sanctuary for relaxation, healing, and renewal.
            </p>
            <div className="mt-4 flex gap-3 text-white/75">
              <a
                href="#home"
                aria-label="Photo gallery"
                className="hover:text-white"
              >
                <Camera className="h-4 w-4" />
              </a>
              <a
                href="#home"
                aria-label="Community"
                className="hover:text-white"
              >
                <UsersRound className="h-4 w-4" />
              </a>
              <a
                href="#home"
                aria-label="Professional network"
                className="hover:text-white"
              >
                <BriefcaseBusiness className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase">Contact</h3>
            <div className="mt-4 space-y-2 text-xs leading-5 text-white/75">
              <p>
                123 Wellness Way
                <br />
                San Diego, CA 92101
              </p>
              <p>(555) 123-4567</p>
              <p>hello@serenityspa.com</p>
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase">Hours</h3>
            <div className="mt-4 grid grid-cols-2 gap-3 text-xs leading-5 text-white/75">
              <span>
                Monday – Friday
                <br />
                Saturday
                <br />
                Sunday
              </span>
              <span>
                9am – 8pm
                <br />
                9am – 7pm
                <br />
                10am – 6pm
              </span>
            </div>
            <p className="mt-3 text-xs">By appointment</p>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase">Quick Links</h3>
            <div className="mt-4 grid gap-1.5 text-xs text-white/75">
              {navItems.slice(2).map(([label, id]) => (
                <a key={id} href={`#${id}`} className="hover:text-white">
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs font-bold uppercase">Stay In Touch</h3>
            <p className="mt-4 text-xs leading-5 text-white/70">
              Sign up for wellness tips, exclusive offers, and mindful
              inspiration.
            </p>
            <form
              onSubmit={(event) => event.preventDefault()}
              className="mt-4 flex overflow-hidden rounded-md bg-white"
            >
              <label htmlFor="serenity-email" className="sr-only">
                Email address
              </label>
              <input
                id="serenity-email"
                type="email"
                placeholder="Your email address"
                className="min-w-0 flex-1 px-3 py-2.5 text-xs text-[#4e5845] outline-none"
              />
              <button type="submit" className="bg-[#7b856c] px-4">
                →
              </button>
            </form>
          </div>
        </div>
      </footer>
    </main>
  );
}
