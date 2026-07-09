import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { imageUrl } from "../../assets/optimized";

const images = {
  hero: imageUrl("restaurent/urbanbite/hero.webp"),
  burger: imageUrl("restaurent/urbanbite/burger.webp"),
  pasta: imageUrl("restaurent/urbanbite/pasta.webp"),
  steak: imageUrl("restaurent/urbanbite/stake.webp"),
  dessert: imageUrl("restaurent/urbanbite/cheese-cake.webp"),
  interior: imageUrl("restaurent/urbanbite/interior.webp"),
  plating: imageUrl("restaurent/urbanbite/stake-bites.webp"),
};

const navLinks = [
  ["Home", "#home"],
  ["Menu", "#menu"],
  ["About", "#about"],
  ["Reservations", "#reservations"],
  ["Gallery", "#gallery"],
  ["Contact", "#contact"],
];

const menuItems = [
  {
    title: "Urban Burger",
    description:
      "Double smashed beef, smoked cheddar, house pickles and ember sauce.",
    price: "$18",
    image: images.burger,
    tag: "House favorite",
  },
  {
    title: "Fire Pasta",
    description:
      "Rigatoni, charred tomato cream, parmesan and a spark of chili oil.",
    price: "$22",
    image: images.pasta,
    tag: "Chef's pick",
  },
  {
    title: "Charred Steak",
    description:
      "Prime sirloin, blistered peppers, herb butter and natural jus.",
    price: "$36",
    image: images.steak,
    tag: "From the flame",
  },
  {
    title: "Berry Cheesecake",
    description: "Vanilla bean cheesecake, dark berry compote and cocoa crumb.",
    price: "$12",
    image: images.dessert,
    tag: "Sweet finish",
  },
];

const galleryItems = [
  [images.steak, "Steak", "Fire-grilled prime cut"],
  [images.burger, "Burger", "The Urban double stack"],
  [images.interior, "Interior", "Warm nights downtown"],
  [images.pasta, "Pasta", "Rigatoni from the pass"],
  [images.dessert, "Dessert", "Berry cheesecake"],
  [images.plating, "Chef plating", "Details at the pass"],
];

const features = [
  ["01", "Flame-grilled specials"],
  ["02", "Fresh ingredients"],
  ["03", "Modern dining room"],
  ["04", "Online reservations"],
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <path
        d="M5 12h13M13 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path
        d="M12 5v14M5 12h14"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FlameIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true" className="h-6 w-6">
      <path
        d="M17.4 2.8c1 6.2-4.8 7.2-2.8 12.3 1-1.9 2.6-3.1 4.3-4.2 2.5 2.8 4.5 5.7 4.5 9.5 0 4.6-3.2 8.1-7.6 8.1S8.2 25.1 8.2 20.4c0-5.9 4.1-9.9 9.2-17.6Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M16.1 18.1c1.9 2.2 2.8 3.7 2.8 5.4a3 3 0 0 1-6 0c0-2 1.2-3.7 3.2-5.4Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SectionEyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.24em] ${light ? "text-white/62" : "text-[#6e6863]"}`}
    >
      <span className="h-[2px] w-9 bg-[#ef3434]" />
      {children}
    </div>
  );
}

export function UrbanBiteKitchen() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = Array.from(
      document.querySelectorAll<HTMLElement>("[data-urban-reveal]"),
    );
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14 },
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleReservation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 4200);
    event.currentTarget.reset();
  };

  return (
    <main className="urbanbite-site min-h-screen overflow-x-clip bg-[#0b0b0c] text-white">
      <nav
        aria-label="UrbanBite navigation"
        className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
          scrolled
            ? "border-white/10 bg-[#0b0b0c]/95 shadow-2xl shadow-black/30 backdrop-blur-xl"
            : "border-transparent bg-black/30 backdrop-blur-sm"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-all duration-500 sm:px-8 lg:px-12 ${scrolled ? "h-[4.5rem]" : "h-[5.25rem]"}`}
        >
          <a
            href="#home"
            className="group flex items-center gap-3"
            onClick={() => setMenuOpen(false)}
          >
            <span className="grid h-11 w-11 place-items-center rounded-[0.8rem] bg-[#ef3434] text-white shadow-[0_0_30px_rgba(239,52,52,0.3)] transition-transform group-hover:rotate-3 group-hover:scale-105">
              <FlameIcon />
            </span>
            <span>
              <span className="block text-[1.05rem] font-black uppercase leading-none tracking-[-0.02em]">
                UrbanBite
              </span>
              <span className="mt-1 block text-[0.55rem] font-bold uppercase tracking-[0.32em] text-white/45">
                Kitchen &amp; Grill
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="group relative py-3 text-[0.72rem] font-bold uppercase tracking-[0.14em] text-white/68 transition hover:text-white"
              >
                {label}
                <span className="absolute inset-x-0 bottom-1 h-px origin-left scale-x-0 bg-[#ef3434] transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <a
            href="#reservations"
            className="hidden items-center gap-2 rounded-full bg-[#ef3434] px-5 py-3 text-[0.7rem] font-black uppercase tracking-[0.14em] shadow-[0_10px_30px_rgba(239,52,52,0.2)] transition hover:-translate-y-0.5 hover:bg-[#ff4848] md:inline-flex"
          >
            Book a table <ArrowIcon />
          </a>

          <button
            type="button"
            aria-label="Toggle restaurant navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.04] md:hidden"
          >
            <span className="flex w-5 flex-col gap-[5px]">
              <span
                className={`h-[2px] w-full bg-white transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`h-[2px] w-full bg-white transition ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-[2px] w-full bg-white transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-white/10 bg-[#111112] transition-all duration-500 md:hidden ${menuOpen ? "max-h-[30rem] opacity-100" : "max-h-0 border-transparent opacity-0"}`}
        >
          <div className="grid gap-1 px-5 py-5">
            {navLinks.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold text-white/70 transition hover:bg-white/5 hover:text-white"
              >
                {label}
                <span className="text-[#ef3434]">→</span>
              </a>
            ))}
            <a
              href="#reservations"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-xl bg-[#ef3434] px-4 py-3 text-center text-sm font-black uppercase tracking-[0.12em]"
            >
              Book a table
            </a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative isolate flex min-h-[760px] items-end overflow-hidden pt-28 lg:min-h-[850px] lg:items-center"
      >
        <img
          src={images.hero}
          alt="Flame-grilled steak with a chef in the UrbanBite kitchen"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-[62%_center]"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(7,7,8,0.98)_0%,rgba(7,7,8,0.88)_35%,rgba(7,7,8,0.28)_72%,rgba(7,7,8,0.55)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#0b0b0c_0%,transparent_24%,rgba(0,0,0,0.15)_100%)]" />
        <div className="absolute -left-40 top-20 -z-10 h-[38rem] w-[38rem] rounded-full bg-[#ef3434]/10 blur-[120px]" />

        <div className="mx-auto w-full max-w-[1400px] px-5 pb-16 sm:px-8 lg:px-12 lg:pb-12">
          <div className="max-w-[760px]" data-urban-reveal>
            <SectionEyebrow light>
              Modern grill · downtown nights
            </SectionEyebrow>
            <h1 className="mt-7 text-[clamp(3.7rem,8vw,7.8rem)] font-black uppercase leading-[0.84] tracking-[-0.065em]">
              Bold flavor.
              <br />
              <span className="text-[#ef3434]">Urban fire.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/64 sm:text-lg sm:leading-8">
              A modern grill kitchen serving smoky steaks, handcrafted burgers,
              rich pastas, and unforgettable desserts.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#menu"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#ef3434] px-7 py-4 text-xs font-black uppercase tracking-[0.15em] shadow-[0_14px_40px_rgba(239,52,52,0.25)] transition hover:-translate-y-1 hover:bg-[#ff4949]"
              >
                View menu <ArrowIcon />
              </a>
              <a
                href="#reservations"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-white/25 bg-black/20 px-7 py-4 text-xs font-black uppercase tracking-[0.15em] backdrop-blur transition hover:-translate-y-1 hover:border-white/50 hover:bg-white/10"
              >
                Reserve now
              </a>
            </div>
          </div>

          <div className="mt-14 flex max-w-[760px] flex-wrap items-center gap-x-9 gap-y-4 border-t border-white/14 pt-6 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/46 lg:mt-20">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ef3434]" />
              Open daily
            </span>
            <span>Lunch · Dinner · Late nights</span>
            <span>214 Market Avenue</span>
          </div>
        </div>

        <div
          className="absolute bottom-12 right-12 hidden rounded-2xl border border-white/15 bg-black/45 p-5 backdrop-blur-xl xl:block"
          data-urban-reveal
        >
          <div className="flex items-center gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-full border border-[#ef3434]/50 text-[#ef3434]">
              <FlameIcon />
            </div>
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/45">
                Tonight at the pass
              </p>
              <p className="mt-1 font-bold">Live fire from 5 PM</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="menu"
        className="bg-[#f5f2ee] py-20 text-[#141414] sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            data-urban-reveal
          >
            <div>
              <SectionEyebrow>From the kitchen</SectionEyebrow>
              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.045em] sm:text-6xl">
                Featured plates
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#77716c]">
              Big heat, honest ingredients, and a menu built to turn an ordinary
              night into something worth remembering.
            </p>
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {menuItems.map((item, index) => (
              <article
                key={item.title}
                data-urban-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
                className="group overflow-hidden rounded-[1.35rem] border border-black/[0.07] bg-white shadow-[0_18px_55px_rgba(31,24,20,0.09)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_26px_70px_rgba(31,24,20,0.16)]"
              >
                <div className="relative aspect-[1.15] overflow-hidden bg-[#ddd7d0]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-110"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-black/65 px-3 py-2 text-[0.58rem] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
                    {item.tag}
                  </span>
                </div>
                <div className="relative min-h-[190px] p-5 pb-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-black tracking-[-0.025em]">
                      {item.title}
                    </h3>
                    <span className="text-lg font-black text-[#ef3434]">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-3 pr-2 text-sm leading-6 text-[#77716c]">
                    {item.description}
                  </p>
                  <button
                    type="button"
                    aria-label={`Add ${item.title} to order`}
                    className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full bg-[#ef3434] text-white shadow-lg shadow-red-500/20 transition group-hover:rotate-90 group-hover:scale-110"
                  >
                    <PlusIcon />
                  </button>
                  <span className="absolute bottom-8 left-5 h-[2px] w-8 bg-[#ef3434]" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="reservations"
        className="relative bg-[#111112] py-20 sm:py-24 lg:py-28"
      >
        <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_60%_50%,rgba(239,52,52,0.08),transparent_55%)]" />
        <div className="relative mx-auto grid max-w-[1400px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:px-12">
          <div className="relative" data-urban-reveal>
            <div className="overflow-hidden rounded-[1.5rem]">
              <img
                src={images.interior}
                alt="Warm modern UrbanBite dining room"
                className="aspect-[4/3] h-full w-full object-cover"
              />
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-t from-black/45 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-5 left-5 right-5 flex items-center justify-between rounded-2xl border border-white/10 bg-[#0b0b0c]/90 p-5 shadow-2xl backdrop-blur sm:left-auto sm:right-5 sm:w-72">
              <div>
                <p className="text-2xl font-black">4.9</p>
                <p className="text-[0.62rem] uppercase tracking-[0.18em] text-white/45">
                  Guest rating
                </p>
              </div>
              <div className="text-sm tracking-[0.12em] text-[#ef3434]">
                ★★★★★
              </div>
            </div>
          </div>

          <div data-urban-reveal>
            <SectionEyebrow light>Plan your night</SectionEyebrow>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.045em] sm:text-6xl">
              Reserve your table
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/55 sm:text-base">
              Choose your evening and we’ll take care of the atmosphere. For
              parties larger than eight, call our host directly.
            </p>

            <form
              onSubmit={handleReservation}
              className="mt-9 grid gap-4 sm:grid-cols-2"
            >
              <label className="grid gap-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/45">
                Name
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Your name"
                  className="h-14 rounded-xl border border-white/12 bg-white/[0.045] px-4 text-sm normal-case tracking-normal text-white outline-none transition placeholder:text-white/24 focus:border-[#ef3434] focus:bg-white/[0.07]"
                />
              </label>
              <label className="grid gap-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/45">
                Date
                <input
                  required
                  name="date"
                  type="date"
                  className="urban-date h-14 rounded-xl border border-white/12 bg-white/[0.045] px-4 text-sm normal-case tracking-normal text-white outline-none transition focus:border-[#ef3434] focus:bg-white/[0.07]"
                />
              </label>
              <label className="grid gap-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/45">
                Time
                <select
                  required
                  name="time"
                  defaultValue=""
                  className="h-14 rounded-xl border border-white/12 bg-[#171718] px-4 text-sm normal-case tracking-normal text-white outline-none transition focus:border-[#ef3434]"
                >
                  <option value="" disabled>
                    Select time
                  </option>
                  <option>5:30 PM</option>
                  <option>6:30 PM</option>
                  <option>7:30 PM</option>
                  <option>8:30 PM</option>
                  <option>9:30 PM</option>
                </select>
              </label>
              <label className="grid gap-2 text-[0.62rem] font-bold uppercase tracking-[0.18em] text-white/45">
                Guests
                <select
                  required
                  name="guests"
                  defaultValue="2 guests"
                  className="h-14 rounded-xl border border-white/12 bg-[#171718] px-4 text-sm normal-case tracking-normal text-white outline-none transition focus:border-[#ef3434]"
                >
                  <option>1 guest</option>
                  <option>2 guests</option>
                  <option>3 guests</option>
                  <option>4 guests</option>
                  <option>5 guests</option>
                  <option>6 guests</option>
                  <option>7 guests</option>
                  <option>8 guests</option>
                </select>
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-[#ef3434] text-xs font-black uppercase tracking-[0.15em] shadow-[0_14px_40px_rgba(239,52,52,0.2)] transition hover:-translate-y-1 hover:bg-[#ff4848] sm:col-span-2"
              >
                Confirm reservation <ArrowIcon />
              </button>
              <p
                aria-live="polite"
                className={`text-center text-sm text-[#ff6969] transition sm:col-span-2 ${submitted ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
              >
                Thanks — your table request is on its way. We’ll confirm
                shortly.
              </p>
            </form>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-y border-white/[0.07] bg-[#0b0b0c] py-20 sm:py-24 lg:py-28"
      >
        <div className="mx-auto grid max-w-[1400px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:px-12">
          <div data-urban-reveal>
            <SectionEyebrow light>Our story</SectionEyebrow>
            <h2 className="mt-5 max-w-4xl text-4xl font-black uppercase leading-[0.98] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              City energy.
              <br />
              <span className="text-[#ef3434]">Made over fire.</span>
            </h2>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/56">
              UrbanBite Kitchen blends fire, flavor, and modern city dining.
              From flame-grilled steaks to handcrafted comfort plates, every
              dish is made for bold taste and memorable nights.
            </p>
          </div>
          <div
            className="grid border-t border-white/12 sm:grid-cols-2 lg:grid-cols-1"
            data-urban-reveal
          >
            {features.map(([number, label]) => (
              <div
                key={label}
                className="group flex items-center gap-5 border-b border-white/12 py-5 transition hover:pl-2"
              >
                <span className="text-xs font-black text-[#ef3434]">
                  {number}
                </span>
                <span className="font-bold text-white/78 group-hover:text-white">
                  {label}
                </span>
                <span className="ml-auto text-white/25 transition group-hover:translate-x-1 group-hover:text-[#ef3434]">
                  →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="bg-[#f5f2ee] py-20 text-[#141414] sm:py-24 lg:py-28"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div
            className="flex flex-col justify-between gap-5 md:flex-row md:items-end"
            data-urban-reveal
          >
            <div>
              <SectionEyebrow>Inside UrbanBite</SectionEyebrow>
              <h2 className="mt-5 text-4xl font-black uppercase leading-none tracking-[-0.045em] sm:text-6xl">
                Food. Fire. People.
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.15em] text-[#ef3434]"
            >
              Follow the kitchen <ArrowIcon />
            </a>
          </div>

          <div className="mt-12 grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[230px]">
            {galleryItems.map(([src, title, caption], index) => {
              const spans = [
                "lg:col-span-5 lg:row-span-2",
                "lg:col-span-3",
                "lg:col-span-4",
                "lg:col-span-3",
                "lg:col-span-4",
                "lg:col-span-7",
              ];
              return (
                <figure
                  key={title}
                  data-urban-reveal
                  style={{ transitionDelay: `${(index % 3) * 70}ms` }}
                  className={`group relative overflow-hidden rounded-[1.2rem] ${spans[index]}`}
                >
                  <img
                    src={src}
                    alt={title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent opacity-80 transition group-hover:opacity-100" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <p className="text-lg font-black uppercase tracking-[-0.02em]">
                      {title}
                    </p>
                    <p className="mt-1 text-xs text-white/55">{caption}</p>
                  </figcaption>
                </figure>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#ef3434] py-16 sm:py-20">
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(90deg,#000_1px,transparent_1px),linear-gradient(#000_1px,transparent_1px)] [background-size:32px_32px]" />
        <div
          className="relative mx-auto flex max-w-[1400px] flex-col justify-between gap-7 px-5 sm:px-8 md:flex-row md:items-center lg:px-12"
          data-urban-reveal
        >
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-black/55">
              Your table is waiting
            </p>
            <h2 className="mt-3 text-4xl font-black uppercase leading-none tracking-[-0.045em] sm:text-5xl">
              Come hungry. Leave inspired.
            </h2>
          </div>
          <a
            href="#reservations"
            className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#0b0b0c] px-7 py-4 text-xs font-black uppercase tracking-[0.15em] text-white transition hover:-translate-y-1 hover:bg-[#202022]"
          >
            Book your night <ArrowIcon />
          </a>
        </div>
      </section>

      <footer
        id="contact"
        className="bg-[#0b0b0c] pb-10 pt-16 text-white sm:pt-20"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="grid gap-10 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_0.8fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[#ef3434]">
                  <FlameIcon />
                </span>
                <div>
                  <p className="font-black uppercase">UrbanBite</p>
                  <p className="text-[0.55rem] font-bold uppercase tracking-[0.3em] text-white/35">
                    Kitchen &amp; Grill
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/44">
                A modern neighborhood grill for hard sears, cold drinks, and
                nights that deserve another round.
              </p>
            </div>
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#ef3434]">
                Visit
              </p>
              <p className="mt-4 text-sm leading-7 text-white/55">
                214 Market Avenue
                <br />
                Downtown Arts District
                <br />
                New York, NY 10012
              </p>
            </div>
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#ef3434]">
                Hours
              </p>
              <p className="mt-4 text-sm leading-7 text-white/55">
                Mon–Thu · 5–11 PM
                <br />
                Fri–Sat · 5 PM–1 AM
                <br />
                Sunday · 4–10 PM
              </p>
            </div>
            <div>
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.2em] text-[#ef3434]">
                Quick links
              </p>
              <div className="mt-4 grid gap-2 text-sm text-white/55">
                <a href="#menu" className="hover:text-white">
                  Menu
                </a>
                <a href="#about" className="hover:text-white">
                  Our story
                </a>
                <a href="#reservations" className="hover:text-white">
                  Reservations
                </a>
                <span className="mt-2 flex gap-4 text-white/75">
                  <a href="#contact">IG</a>
                  <a href="#contact">FB</a>
                  <a href="#contact">TK</a>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-4 pt-7 text-xs text-white/30 sm:flex-row sm:items-center">
            <p>© 2026 UrbanBite Kitchen. All fire, all flavor.</p>
            <Link to="/restaurant" className="transition hover:text-white">
              ← Back to restaurant collection
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
