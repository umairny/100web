import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { imageUrl } from "../../assets/optimized";

const oceanImages = {
  hero: imageUrl("restaurent/oceanplate/hero.webp"),
  oysters: imageUrl("restaurent/oceanplate/oysters.webp"),
  scallops: imageUrl("restaurent/oceanplate/citrus.webp"),
  seaBass: imageUrl("restaurent/oceanplate/sea-bass.webp"),
  breeze: imageUrl("restaurent/oceanplate/breese.webp"),
  chef: imageUrl("restaurent/oceanplate/chef.webp"),
};

const menuItems = [
  {
    category: "Raw bar",
    name: "Oysters on the Half Shell",
    detail: "Fresh shucked daily. Served with mignonette and lemon.",
    price: "$24",
    image: oceanImages.oysters,
    alt: "Fresh oysters on ice with mignonette and lemon",
  },
  {
    category: "From the sea",
    name: "Citrus Seared Scallops",
    detail: "Brown butter, yuzu, chive oil and shaved fennel.",
    price: "$32",
    image: oceanImages.scallops,
    alt: "Citrus seared scallops plated with herb oil",
  },
  {
    category: "From the grill",
    name: "Wild-Caught Sea Bass",
    detail: "Charred seasonal vegetables and lemon herb beurre blanc.",
    price: "$38",
    image: oceanImages.seaBass,
    alt: "Grilled wild-caught sea bass with seasonal vegetables",
  },
  {
    category: "Cocktails",
    name: "Coastal Breeze",
    detail: "Gin, cucumber, basil, lime and a touch of sea salt.",
    price: "$16",
    image: oceanImages.breeze,
    alt: "Pale green Coastal Breeze cocktail with citrus garnish",
  },
];

const navItems = [
  ["Home", "#home"],
  ["Menu", "#menu"],
  ["Reservations", "#reserve"],
  ["About", "#about"],
  ["Gallery", "#gallery"],
  ["Events", "#events"],
  ["Contact", "#contact"],
];

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: string;
  className?: string;
}) {
  const paths: Record<string, ReactNode> = {
    shell: (
      <>
        <path d="M12 21c-5 0-9-2.3-9-7.2C3 8.4 7 3 12 3s9 5.4 9 10.8C21 18.7 17 21 12 21Z" />
        <path d="M12 4v16M6.2 7.3l5.8 12M17.8 7.3 12 19.3M3.6 11.1 12 19.3M20.4 11.1 12 19.3" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 2v6M17 2v6M3 10h18" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v6l4 2" />
      </>
    ),
    guests: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="10" r="2" />
        <path d="M3 21c.3-5 2.4-7 6-7s5.7 2 6 7M15 15c3.7-.2 5.5 1.6 6 5" />
      </>
    ),
    arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
    home: (
      <>
        <path d="m3 11 9-8 9 8" />
        <path d="M5 10v11h14V10M9 21v-7h6v7" />
      </>
    ),
    menu: (
      <>
        <path d="M4 6h16M4 12h16M4 18h16" />
      </>
    ),
    gallery: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <circle cx="9" cy="10" r="2" />
        <path d="m4 18 5-5 4 3 3-4 5 6" />
      </>
    ),
    more: (
      <>
        <circle cx="5" cy="12" r="1" fill="currentColor" />
        <circle cx="12" cy="12" r="1" fill="currentColor" />
        <circle cx="19" cy="12" r="1" fill="currentColor" />
      </>
    ),
  };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

function Eyebrow({
  children,
  light = false,
}: {
  children: ReactNode;
  light?: boolean;
}) {
  return (
    <p
      className={`flex items-center gap-3 text-[0.59rem] font-bold uppercase tracking-[0.28em] ${light ? "text-[#ddb97b]" : "text-[#91734c]"}`}
    >
      <span className="h-px w-8 bg-[#c99d55]" />
      {children}
      <span className="h-px w-8 bg-[#c99d55]" />
    </p>
  );
}

export function OceanPlateSeafood() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-ocean-reveal]",
    );
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const handleReservation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 4200);
  };

  return (
    <main className="motion-oceanplate min-h-screen overflow-x-hidden bg-[#f4f0e9] text-[#0a2b3b]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#062536]/95 text-white shadow-lg shadow-[#062536]/10 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.6rem] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="flex items-center gap-3"
          >
            <span className="grid h-10 w-10 place-items-center rounded-full border border-[#d0ad70]/45 text-[#d0ad70]">
              <Icon name="shell" className="h-6 w-6" />
            </span>
            <span className="ocean-display text-xl tracking-[-0.02em] sm:text-2xl">
              OceanPlate
            </span>
          </a>
          <nav
            aria-label="OceanPlate navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {navItems.map(([label, href], index) => (
              <a
                key={href}
                href={href}
                className={`relative py-3 text-[0.61rem] font-bold uppercase tracking-[0.12em] text-white/70 transition hover:text-white ${index === 0 ? "text-white after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-[#d0ad70]" : ""}`}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#reserve"
            className="hidden rounded-sm bg-[#d8b474] px-5 py-3 text-[0.6rem] font-black uppercase tracking-[0.14em] text-[#082535] shadow-lg shadow-black/10 transition hover:-translate-y-0.5 hover:bg-[#ecc98d] sm:inline-flex"
          >
            Reserve a table
          </a>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((current) => !current)}
            className="grid h-10 w-10 place-items-center lg:hidden"
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`h-px w-full bg-white transition ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
              />
              <span
                className={`h-px w-full bg-white transition ${menuOpen ? "opacity-0" : ""}`}
              />
              <span
                className={`h-px w-full bg-white transition ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
        <div
          className={`overflow-hidden border-t border-white/10 bg-[#082b3d] transition-all duration-500 lg:hidden ${menuOpen ? "max-h-[34rem] opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="grid px-5 py-4">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-between border-b border-white/8 px-3 py-3 text-sm text-white/70 last:border-0"
              >
                {label}
                <span className="text-[#d8b474]">→</span>
              </a>
            ))}
          </div>
        </div>
      </header>

      <section
        id="home"
        className="relative isolate min-h-[700px] pt-[4.6rem] text-white sm:min-h-[780px]"
      >
        <img
          src={oceanImages.hero}
          alt="OceanPlate waterfront terrace with oysters and a coastal view"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-[58%_center]"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,rgba(4,28,42,0.42),rgba(4,28,42,0.08)_55%,rgba(4,28,42,0.2)),linear-gradient(0deg,rgba(4,28,42,0.45),transparent_50%,rgba(4,28,42,0.18))]" />
        <div className="mx-auto flex min-h-[625px] max-w-[1440px] items-center justify-center px-5 pb-28 text-center sm:min-h-[705px] sm:px-8">
          <div className="max-w-4xl" data-ocean-reveal>
            <h1 className="ocean-display text-[clamp(4rem,10vw,8.6rem)] leading-[0.83] tracking-[-0.055em] drop-shadow-[0_5px_22px_rgba(4,24,37,0.35)]">
              OceanPlate
            </h1>
            <p className="ocean-display mt-5 text-2xl italic tracking-[-0.02em] text-[#e3bc78] sm:text-4xl">
              Fresh Coastal Dining
            </p>
            <div className="mx-auto mt-7 flex items-center justify-center gap-4 text-[#e0bc7e]">
              <span className="h-px w-12 bg-[#e0bc7e]/75" />
              <Icon name="shell" className="h-7 w-7" />
              <span className="h-px w-12 bg-[#e0bc7e]/75" />
            </div>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#reserve"
                className="inline-flex min-w-48 items-center justify-center rounded-sm bg-[#d8b474] px-7 py-4 text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#082535] shadow-xl transition hover:-translate-y-1 hover:bg-[#ecc98d]"
              >
                Reserve a table
              </a>
              <a
                href="#menu"
                className="inline-flex items-center gap-2 border-b border-white/50 pb-2 text-[0.62rem] font-black uppercase tracking-[0.16em] transition hover:border-[#e3bc78] hover:text-[#e3bc78]"
              >
                View menu <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="relative z-10 -mt-24 px-4 sm:px-8">
        <div
          className="mx-auto max-w-[1320px] rounded-t-[1.5rem] bg-[#f8f5ef] p-4 shadow-[0_26px_80px_rgba(5,36,51,0.16)] sm:p-7 lg:p-9"
          data-ocean-reveal
        >
          <div className="mb-7 flex justify-center">
            <Eyebrow>Featured from our menu</Eyebrow>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {menuItems.map((item, index) => (
              <article
                key={item.name}
                data-ocean-reveal
                style={{ transitionDelay: `${index * 60}ms` }}
                className="group grid grid-cols-[7rem_1fr] overflow-hidden rounded-lg border border-[#ddd5c9] bg-[#fcfaf6] shadow-[0_8px_24px_rgba(9,42,57,0.07)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(9,42,57,0.13)] sm:block"
              >
                <div className="aspect-square overflow-hidden bg-[#dce5e3] sm:aspect-[1.42]">
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.06]"
                  />
                </div>
                <div className="relative flex min-w-0 flex-col p-4 sm:min-h-44">
                  <p className="text-[0.48rem] font-black uppercase tracking-[0.22em] text-[#9a784a]">
                    {item.category}
                  </p>
                  <div className="mt-2 flex items-start justify-between gap-3">
                    <h3 className="ocean-display text-base leading-tight sm:text-xl">
                      {item.name}
                    </h3>
                    <span className="shrink-0 text-xs font-bold text-[#9a784a] sm:hidden">
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-2 line-clamp-2 text-[0.68rem] leading-5 text-[#5e686b] sm:line-clamp-none sm:text-xs">
                    {item.detail}
                  </p>
                  <div className="mt-auto hidden items-center justify-between pt-3 sm:flex">
                    <span className="text-xs font-bold text-[#927044]">
                      {item.price}
                    </span>
                    <button
                      type="button"
                      aria-label={`View ${item.name}`}
                      className="text-[#9a784a] transition group-hover:translate-x-1"
                    >
                      <Icon name="arrow" className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="reserve" className="px-4 pb-20 sm:px-8 sm:pb-24 lg:pb-28">
        <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-b-[1.5rem] shadow-[0_26px_80px_rgba(5,36,51,0.12)] lg:grid-cols-[1fr_1.05fr]">
          <div
            id="about"
            className="relative isolate flex min-h-[390px] items-end overflow-hidden bg-[#062536] p-7 text-white sm:p-10 lg:min-h-[430px]"
          >
            <img
              src={oceanImages.chef}
              alt="OceanPlate chef carefully plating the day's catch"
              loading="lazy"
              className="absolute inset-0 -z-20 h-full w-full object-cover object-left"
            />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(4,31,45,0.22),rgba(4,31,45,0.94)_58%)]" />
            <div className="ml-auto max-w-sm" data-ocean-reveal>
              <p className="text-[0.58rem] font-black uppercase tracking-[0.23em] text-[#dfbc7e]">
                Chef's catch
              </p>
              <h2 className="ocean-display mt-3 text-3xl leading-tight sm:text-4xl">
                Today’s Ocean,
                <br />
                Perfectly Prepared
              </h2>
              <p className="mt-4 text-sm leading-7 text-white/65">
                We partner with local fishermen to bring in the finest catch
                each day. Simple ingredients, thoughtful preparation,
                unforgettable flavor.
              </p>
              <a
                href="#menu"
                className="mt-6 inline-flex items-center gap-3 border border-[#d8b474] px-5 py-3 text-[0.57rem] font-black uppercase tracking-[0.15em] text-[#dfbc7e] transition hover:bg-[#d8b474] hover:text-[#082535]"
              >
                Explore signature dishes{" "}
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="bg-[#dfe6df] p-6 sm:p-10" data-ocean-reveal>
            <div className="flex justify-center">
              <Eyebrow>Reserve your experience</Eyebrow>
            </div>
            <form
              onSubmit={handleReservation}
              className="mt-7 grid gap-3 sm:grid-cols-3"
            >
              <label className="flex items-center gap-3 rounded-md border border-[#d3cec5] bg-[#f9f7f3] px-4 py-3 text-[#9a784a]">
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.48rem] font-black uppercase tracking-[0.15em] text-[#8b8b82]">
                    Date
                  </span>
                  <input
                    required
                    type="date"
                    aria-label="Reservation date"
                    className="ocean-date mt-1 w-full bg-transparent text-xs font-bold text-[#193846] outline-none"
                  />
                </span>
                <Icon name="calendar" className="h-4 w-4" />
              </label>
              <label className="flex items-center gap-3 rounded-md border border-[#d3cec5] bg-[#f9f7f3] px-4 py-3 text-[#9a784a]">
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.48rem] font-black uppercase tracking-[0.15em] text-[#8b8b82]">
                    Time
                  </span>
                  <select
                    aria-label="Reservation time"
                    defaultValue="7:00 PM"
                    className="mt-1 w-full bg-[#f9f7f3] text-xs font-bold text-[#193846] outline-none"
                  >
                    <option>5:00 PM</option>
                    <option>6:00 PM</option>
                    <option>7:00 PM</option>
                    <option>8:00 PM</option>
                    <option>9:00 PM</option>
                  </select>
                </span>
                <Icon name="clock" className="h-4 w-4" />
              </label>
              <label className="flex items-center gap-3 rounded-md border border-[#d3cec5] bg-[#f9f7f3] px-4 py-3 text-[#9a784a]">
                <span className="min-w-0 flex-1">
                  <span className="block text-[0.48rem] font-black uppercase tracking-[0.15em] text-[#8b8b82]">
                    Party
                  </span>
                  <select
                    aria-label="Number of guests"
                    defaultValue="2 Guests"
                    className="mt-1 w-full bg-[#f9f7f3] text-xs font-bold text-[#193846] outline-none"
                  >
                    <option>1 Guest</option>
                    <option>2 Guests</option>
                    <option>3 Guests</option>
                    <option>4 Guests</option>
                    <option>5 Guests</option>
                    <option>6+ Guests</option>
                  </select>
                </span>
                <Icon name="guests" className="h-4 w-4" />
              </label>
              <button
                type="submit"
                className="rounded-sm bg-gradient-to-r from-[#c79a52] to-[#dab97e] px-6 py-4 text-[0.61rem] font-black uppercase tracking-[0.17em] text-[#082535] shadow-md transition hover:-translate-y-0.5 hover:shadow-lg sm:col-span-3"
              >
                Find a table
              </button>
              <p
                aria-live="polite"
                className={`text-center text-xs font-bold text-[#7f6037] transition sm:col-span-3 ${submitted ? "opacity-100" : "opacity-0"}`}
              >
                Thank you. Your table request is ready for confirmation.
              </p>
            </form>
            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-[#bfc9c1] pt-6 text-center">
              {[
                ["◉", "Waterfront dining", "Breathtaking views"],
                ["◇", "Fresh & sustainable", "Responsibly sourced"],
                ["○", "Private events", "Celebrate with us"],
              ].map(([icon, title, text]) => (
                <div key={title}>
                  <span className="text-lg text-[#8d724e]">{icon}</span>
                  <p className="mt-2 text-[0.47rem] font-black uppercase tracking-[0.12em] text-[#5f6b69]">
                    {title}
                  </p>
                  <p className="mt-1 hidden text-[0.58rem] text-[#73807d] sm:block">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="bg-[#f8f5ef] py-20 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            data-ocean-reveal
          >
            <div>
              <Eyebrow>From coast to table</Eyebrow>
              <h2 className="ocean-display mt-5 text-4xl leading-tight sm:text-6xl">
                A brighter way to dine.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#657276]">
              The day’s catch, open-air tables and an easy coastal rhythm—served
              with genuine care from first pour to last course.
            </p>
          </div>
          <div className="mt-12 grid auto-rows-[220px] gap-3 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[245px]">
            {[
              [oceanImages.oysters, "Raw bar", "lg:col-span-5 lg:row-span-2"],
              [oceanImages.scallops, "Citrus scallops", "lg:col-span-3"],
              [oceanImages.breeze, "Coastal cocktails", "lg:col-span-4"],
              [oceanImages.seaBass, "From the grill", "lg:col-span-4"],
              [oceanImages.chef, "At the pass", "lg:col-span-7"],
            ].map(([image, label, span]) => (
              <figure
                key={label}
                data-ocean-reveal
                className={`group relative overflow-hidden rounded-lg ${span}`}
              >
                <img
                  src={image}
                  alt={label}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062536]/75 via-transparent to-transparent" />
                <figcaption className="ocean-display absolute bottom-5 left-5 text-xl text-white">
                  {label}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="bg-[#062536] py-20 text-white sm:py-24">
        <div className="mx-auto grid max-w-[1320px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div data-ocean-reveal>
            <Eyebrow light>Gather by the water</Eyebrow>
            <h2 className="ocean-display mt-5 text-4xl leading-tight sm:text-6xl">
              Private events with an ocean view.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/58">
              From intimate dinners to full terrace celebrations, our events
              team creates menus and moments shaped around your occasion.
            </p>
            <a
              href="#contact"
              className="mt-7 inline-flex items-center gap-3 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#dfbc7e]"
            >
              Plan an event <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
          <div
            className="grid grid-cols-3 gap-px bg-white/10"
            data-ocean-reveal
          >
            {[
              ["40", "Terrace guests"],
              ["24", "Private room"],
              ["3", "Custom menus"],
            ].map(([value, label]) => (
              <div key={label} className="bg-[#082b3d] p-5 text-center sm:p-7">
                <p className="ocean-display text-3xl text-[#dfbc7e] sm:text-5xl">
                  {value}
                </p>
                <p className="mt-2 text-[0.48rem] font-bold uppercase tracking-[0.16em] text-white/45">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-[#f4f0e9] pb-28 pt-14 md:pb-8">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8">
          <div className="grid gap-10 border-b border-[#d8d0c4] pb-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_0.8fr_0.8fr_1fr]">
            <div>
              <div className="flex items-center gap-3 text-[#0a2b3b]">
                <Icon name="shell" className="h-10 w-10 text-[#9b7c50]" />
                <div>
                  <p className="ocean-display text-2xl">OceanPlate</p>
                  <p className="ocean-display text-sm italic text-[#9b7c50]">
                    Fresh Coastal Dining
                  </p>
                </div>
              </div>
              <div className="mt-6 flex gap-5 text-xs font-black">
                <a href="#contact">IG</a>
                <a href="#contact">FB</a>
                <a href="#contact">IN</a>
              </div>
            </div>
            <div>
              <p className="text-[0.55rem] font-black uppercase tracking-[0.17em]">
                Restaurant
              </p>
              <div className="mt-4 grid gap-2 text-xs text-[#657276]">
                <a href="#about">About us</a>
                <a href="#gallery">Our team</a>
                <a href="#events">Private events</a>
                <a href="#contact">Careers</a>
              </div>
            </div>
            <div>
              <p className="text-[0.55rem] font-black uppercase tracking-[0.17em]">
                Hours
              </p>
              <p className="mt-4 text-xs leading-6 text-[#657276]">
                Mon–Thu · 4–10 PM
                <br />
                Fri–Sat · 4–11 PM
                <br />
                Sun · 3–9 PM
              </p>
            </div>
            <div>
              <p className="text-[0.55rem] font-black uppercase tracking-[0.17em]">
                Location
              </p>
              <p className="mt-4 text-xs leading-6 text-[#657276]">
                123 Oceanfront Boulevard
                <br />
                Laguna Beach, CA 92651
                <br />
                (949) 555-0123
              </p>
              <a
                href="#home"
                className="mt-3 inline-flex items-center gap-2 text-[0.56rem] font-black uppercase tracking-[0.14em] text-[#927044]"
              >
                Get directions <Icon name="arrow" className="h-3 w-3" />
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 pt-6 text-[0.6rem] text-[#718084] sm:flex-row">
            <p>© 2026 OceanPlate. All rights reserved.</p>
            <Link to="/restaurant" className="font-bold text-[#0a2b3b]">
              ← Restaurant collection
            </Link>
          </div>
        </div>
      </footer>

      <nav
        aria-label="Mobile OceanPlate navigation"
        className="fixed bottom-4 left-20 right-4 z-50 grid grid-cols-5 overflow-hidden rounded-xl border border-[#d5cec2] bg-[#faf8f4]/95 text-[#183745] shadow-[0_18px_55px_rgba(5,36,51,0.2)] backdrop-blur-xl md:hidden"
      >
        {[
          ["Home", "#home", "home"],
          ["Menu", "#menu", "menu"],
          ["Reserve", "#reserve", "calendar"],
          ["Gallery", "#gallery", "gallery"],
          ["More", "#contact", "more"],
        ].map(([label, href, icon], index) => (
          <a
            key={href}
            href={href}
            className={`flex min-h-16 flex-col items-center justify-center gap-1 text-[0.48rem] font-bold ${index === 0 ? "text-[#0a2b3b]" : "text-[#778286]"}`}
          >
            <Icon name={icon} className="h-[1.15rem] w-[1.15rem]" />
            {label}
          </a>
        ))}
      </nav>
    </main>
  );
}
