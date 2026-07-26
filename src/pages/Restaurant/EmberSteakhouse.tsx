import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { imageUrl } from "../../assets/optimized";

const emberImages = {
  hero: imageUrl("restaurent/ember/hero.webp"),
  interior: imageUrl("restaurent/ember/interior.webp"),
  ribeye: imageUrl("restaurent/ember/eyerib.webp"),
  tomahawk: imageUrl("restaurent/ember/stake.webp"),
  filet: imageUrl("restaurent/ember/filete.webp"),
  strip: imageUrl("restaurent/ember/stake-vegetables.webp"),
};

const steaks = [
  {
    name: "Ember Ribeye",
    detail: "Charred ribeye, rosemary butter, smoked sea salt.",
    price: "$42",
    image: emberImages.ribeye,
    alt: "Ember ribeye sliced and served with rosemary butter",
  },
  {
    name: "Tomahawk Prime",
    detail: "Bone-in tomahawk steak, roasted garlic, house jus.",
    price: "$78",
    image: emberImages.tomahawk,
    alt: "Bone-in tomahawk steak seared over live fire",
  },
  {
    name: "Filet Mignon",
    detail: "Tender center cut, herb butter, seasonal vegetables.",
    price: "$48",
    image: emberImages.filet,
    alt: "Tender filet mignon with herb butter and vegetables",
  },
  {
    name: "New York Strip",
    detail: "Bold sear, cracked pepper, ember-roasted potatoes.",
    price: "$46",
    image: emberImages.strip,
    alt: "New York strip steak with ember-roasted vegetables",
  },
];

const navigation = [
  { label: "Home", href: "#home", icon: "flame" },
  { label: "Menu", href: "#menu", icon: "menu" },
  { label: "Specials", href: "#specials", icon: "spark" },
  { label: "Wine", href: "#wine", icon: "wine" },
  { label: "Reviews", href: "#reviews", icon: "star" },
  { label: "Reserve", href: "#reserve", icon: "profile" },
];

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: string;
  className?: string;
}) {
  const paths: Record<string, ReactNode> = {
    flame: (
      <path d="M13.5 2.8c.6 4.3-3.4 5.3-2 9 1-1.7 2.4-2.5 3.7-3.4 2.1 2.4 3.8 4.8 3.8 8A6.9 6.9 0 0 1 12 23a6.9 6.9 0 0 1-7-6.7c0-4.7 3.2-8 8.5-13.5Z" />
    ),
    menu: (
      <>
        <path d="M5 4v16M9 4v16M15 4h4v16h-4z" />
        <path d="M5 8h4M5 16h4" />
      </>
    ),
    spark: (
      <path d="m12 3 1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Zm7 12 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z" />
    ),
    wine: (
      <>
        <path d="M7 3h10l-1 6.5a4 4 0 0 1-8 0L7 3Z" />
        <path d="M12 14v7M8.5 21h7" />
      </>
    ),
    star: (
      <path d="m12 3 2.6 5.4 5.9.8-4.3 4.2 1 5.9-5.2-2.8-5.2 2.8 1-5.9-4.3-4.2 5.9-.8L12 3Z" />
    ),
    profile: (
      <>
        <circle cx="12" cy="8" r="3.5" />
        <path d="M5.5 21c.4-4.1 2.6-6.2 6.5-6.2s6.1 2.1 6.5 6.2h-13Z" />
      </>
    ),
    calendar: (
      <>
        <rect x="3" y="5" width="18" height="16" rx="2" />
        <path d="M7 2v6M17 2v6M3 10h18" />
      </>
    ),
    users: (
      <>
        <circle cx="9" cy="8" r="3" />
        <circle cx="17" cy="10" r="2" />
        <path d="M3 21c.3-5 2.4-7 6-7s5.7 2 6 7M15 15c3.7-.2 5.5 1.6 6 5" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v6l4 2" />
      </>
    ),
    occasion: (
      <>
        <path d="M4 8h16v13H4zM3 8h18" />
        <path d="M12 8v13M12 8H8.5a2.5 2.5 0 1 1 2.6-3.8L12 8Zm0 0h3.5a2.5 2.5 0 1 0-2.6-3.8L12 8Z" />
      </>
    ),
    arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
    plus: <path d="M12 5v14M5 12h14" />,
    quote: (
      <path d="M5 7h6v6H7c0 2.5 1.2 4 3.5 4.7M14 7h6v6h-4c0 2.5 1.2 4 3.5 4.7" />
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

function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-[0.62rem] font-bold uppercase tracking-[0.26em] text-[#d88932]">
      <span className="h-px w-10 bg-gradient-to-r from-[#b87333] to-[#f0b35a]" />
      {children}
    </p>
  );
}

export function EmberSteakhouse() {
  const [reserved, setReserved] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-ember-reveal]",
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

  const submitReservation = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setReserved(true);
    window.setTimeout(() => setReserved(false), 4500);
  };

  return (
    <main className="motion-ember min-h-screen overflow-x-hidden bg-[#070606] text-[#f8f3eb] lg:pl-[5.5rem]">
      <aside className="fixed inset-y-0 left-0 z-50 hidden w-[5.5rem] flex-col border-r border-[#c67c2f]/25 bg-[#0b0a09] lg:flex">
        <a
          href="#home"
          aria-label="Ember Steakhouse home"
          className="grid h-[5.5rem] place-items-center border-b border-[#c67c2f]/20 text-[#f0b35a]"
        >
          <Icon name="flame" className="h-7 w-7" />
        </a>
        <nav
          aria-label="Steakhouse navigation"
          className="flex flex-1 flex-col justify-center"
        >
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              aria-label={item.label}
              title={item.label}
              className={`group relative grid h-[4.4rem] place-items-center border-y border-transparent text-[#80776e] transition duration-300 hover:border-[#c67c2f]/20 hover:bg-[#17130f] hover:text-[#f0b35a] ${index === 0 ? "bg-gradient-to-r from-[#7e451f]/65 to-[#b87333]/25 text-[#f0b35a]" : ""}`}
            >
              {index === 0 && (
                <span className="absolute right-0 h-full w-[2px] bg-[#d88932] shadow-[0_0_14px_#d88932]" />
              )}
              <Icon name={item.icon} />
            </a>
          ))}
        </nav>
        <Link
          to="/restaurant"
          aria-label="Back to restaurant collection"
          className="grid h-[5.5rem] place-items-center border-t border-[#c67c2f]/20 text-xs font-black text-[#80776e] transition hover:text-[#f0b35a]"
        >
          100
        </Link>
      </aside>

      <header className="fixed inset-x-0 top-0 z-40 flex h-16 items-center justify-between border-b border-[#c67c2f]/20 bg-[#070606]/92 px-5 backdrop-blur-xl lg:left-[5.5rem] lg:h-[5.5rem] lg:px-10">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full border border-[#c67c2f]/40 text-[#f0b35a]">
            <Icon name="flame" className="h-5 w-5" />
          </span>
          <span>
            <span className="block text-sm font-black uppercase tracking-[0.24em]">
              Ember
            </span>
            <span className="hidden text-[0.5rem] font-bold uppercase tracking-[0.3em] text-[#8f8479] sm:block">
              Prime steakhouse
            </span>
          </span>
        </a>
        <div className="flex items-center gap-5">
          <p className="hidden text-[0.62rem] font-bold uppercase tracking-[0.16em] text-[#8f8479] md:block">
            Dinner nightly · 5 PM–12 AM
          </p>
          <a
            href="#reserve"
            className="hidden items-center gap-2 rounded-sm bg-gradient-to-r from-[#a85f29] to-[#d88932] px-5 py-3 text-[0.62rem] font-black uppercase tracking-[0.16em] shadow-[0_10px_35px_rgba(184,115,51,0.18)] transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(216,137,50,0.28)] sm:inline-flex"
          >
            Reserve <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </header>

      <section
        id="home"
        className="relative isolate min-h-[820px] overflow-hidden border-b border-[#c67c2f]/20 pt-16 lg:min-h-[900px] lg:pt-[5.5rem]"
      >
        <img
          src={emberImages.hero}
          alt="Prime steak seared over live embers with rosemary and wine"
          className="absolute inset-0 -z-30 h-full w-full object-cover object-[64%_center]"
        />
        <div className="absolute inset-0 -z-20 bg-[linear-gradient(90deg,#070606_0%,rgba(7,6,6,0.95)_30%,rgba(7,6,6,0.52)_57%,rgba(7,6,6,0.16)_82%,rgba(7,6,6,0.34)_100%)]" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,#070606_0%,transparent_28%,rgba(0,0,0,0.12)_100%)]" />
        <div className="absolute left-[8%] top-[22%] -z-10 h-72 w-72 rounded-full bg-[#b87333]/10 blur-[100px]" />

        <div className="mx-auto flex min-h-[755px] max-w-[1440px] items-end px-5 pb-36 sm:px-8 lg:min-h-[812px] lg:items-center lg:px-14 lg:pb-36 xl:px-20">
          <div className="max-w-2xl" data-ember-reveal>
            <Eyebrow>Live fire · prime cuts</Eyebrow>
            <h1 className="mt-7 text-[clamp(3.5rem,7.4vw,7.4rem)] font-black uppercase leading-[0.84] tracking-[-0.065em]">
              Prime cuts.
              <br />
              <span className="bg-gradient-to-r from-[#b87333] via-[#f0b35a] to-[#d88932] bg-clip-text text-transparent">
                Ember fire.
              </span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-[#a59b8f] sm:text-lg">
              A luxury steakhouse experience built around fire, flavor, and
              unforgettable nights.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#reserve"
                className="inline-flex items-center justify-center gap-3 rounded-sm bg-gradient-to-r from-[#a85f29] to-[#d88932] px-7 py-4 text-xs font-black uppercase tracking-[0.16em] shadow-[0_14px_40px_rgba(184,115,51,0.2)] transition hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(216,137,50,0.3)]"
              >
                Reserve table <Icon name="arrow" className="h-4 w-4" />
              </a>
              <a
                href="#menu"
                className="inline-flex items-center justify-center rounded-sm border border-[#c67c2f]/40 bg-black/15 px-7 py-4 text-xs font-black uppercase tracking-[0.16em] backdrop-blur transition hover:-translate-y-1 hover:border-[#f0b35a]/60 hover:bg-[#171512]"
              >
                Explore cuts
              </a>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-[#c67c2f]/20 pt-5 text-[0.57rem] font-bold uppercase tracking-[0.22em] text-[#746b62]">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d88932] shadow-[0_0_10px_#d88932]" />
                Open tonight
              </span>
              <span>Dry-aged in house</span>
              <span>19 Ashford Lane</span>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-28 right-8 hidden border border-[#c67c2f]/30 bg-[#0c0b0a]/70 p-5 backdrop-blur-md xl:block"
          data-ember-reveal
        >
          <p className="text-[0.56rem] font-bold uppercase tracking-[0.2em] text-[#d88932]">
            Chef's fire
          </p>
          <p className="mt-2 text-lg font-bold">Oak · Hickory · 900°F</p>
        </div>
      </section>

      <section
        id="reserve"
        className="relative z-20 -mt-24 px-4 sm:px-8 lg:px-12"
      >
        <form
          onSubmit={submitReservation}
          className="mx-auto grid max-w-[1320px] gap-2 border border-[#c67c2f]/35 bg-[#0d0c0b]/95 p-3 shadow-[0_25px_80px_rgba(0,0,0,0.55)] backdrop-blur-xl sm:grid-cols-2 lg:grid-cols-[repeat(4,1fr)_1.05fr]"
          data-ember-reveal
        >
          <label className="flex min-w-0 items-center gap-3 border border-[#c67c2f]/20 bg-[#171512] px-4 py-3 text-[#d88932]">
            <Icon name="calendar" />
            <span className="min-w-0 flex-1">
              <span className="block text-[0.5rem] font-bold uppercase tracking-[0.18em] text-[#746b62]">
                Date
              </span>
              <input
                required
                type="date"
                aria-label="Reservation date"
                className="ember-date mt-1 w-full bg-transparent text-xs font-bold text-[#f8f3eb] outline-none"
              />
            </span>
          </label>
          <label className="flex min-w-0 items-center gap-3 border border-[#c67c2f]/20 bg-[#171512] px-4 py-3 text-[#d88932]">
            <Icon name="users" />
            <span className="min-w-0 flex-1">
              <span className="block text-[0.5rem] font-bold uppercase tracking-[0.18em] text-[#746b62]">
                Guests
              </span>
              <select
                aria-label="Number of guests"
                defaultValue="2 Guests"
                className="mt-1 w-full bg-[#171512] text-xs font-bold text-[#f8f3eb] outline-none"
              >
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5 Guests</option>
                <option>6 Guests</option>
                <option>7+ Guests</option>
              </select>
            </span>
          </label>
          <label className="flex min-w-0 items-center gap-3 border border-[#c67c2f]/20 bg-[#171512] px-4 py-3 text-[#d88932]">
            <Icon name="clock" />
            <span className="min-w-0 flex-1">
              <span className="block text-[0.5rem] font-bold uppercase tracking-[0.18em] text-[#746b62]">
                Time
              </span>
              <select
                aria-label="Reservation time"
                defaultValue="7:30 PM"
                className="mt-1 w-full bg-[#171512] text-xs font-bold text-[#f8f3eb] outline-none"
              >
                <option>5:30 PM</option>
                <option>6:30 PM</option>
                <option>7:30 PM</option>
                <option>8:30 PM</option>
                <option>9:30 PM</option>
              </select>
            </span>
          </label>
          <label className="flex min-w-0 items-center gap-3 border border-[#c67c2f]/20 bg-[#171512] px-4 py-3 text-[#d88932]">
            <Icon name="occasion" />
            <span className="min-w-0 flex-1">
              <span className="block text-[0.5rem] font-bold uppercase tracking-[0.18em] text-[#746b62]">
                Occasion
              </span>
              <select
                aria-label="Reservation occasion"
                defaultValue="Dinner"
                className="mt-1 w-full bg-[#171512] text-xs font-bold text-[#f8f3eb] outline-none"
              >
                <option>Dinner</option>
                <option>Anniversary</option>
                <option>Birthday</option>
                <option>Business</option>
                <option>Private dining</option>
              </select>
            </span>
          </label>
          <button
            type="submit"
            className="inline-flex min-h-16 items-center justify-center gap-3 bg-gradient-to-r from-[#a85f29] to-[#d88932] px-6 text-[0.62rem] font-black uppercase tracking-[0.17em] shadow-[0_0_30px_rgba(216,137,50,0.1)] transition hover:-translate-y-0.5 hover:shadow-[0_0_35px_rgba(216,137,50,0.3)]"
          >
            Reserve table <Icon name="arrow" className="h-4 w-4" />
          </button>
        </form>
        <p
          aria-live="polite"
          className={`mx-auto mt-3 max-w-[1320px] text-center text-xs font-bold text-[#f0b35a] transition ${reserved ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}
        >
          Your table request has been received. Our host will confirm shortly.
        </p>
      </section>

      <section
        id="menu"
        className="bg-[#070606] pb-24 pt-16 sm:pb-28 sm:pt-20 lg:pb-32"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14 xl:px-20">
          <div
            className="flex flex-col justify-between gap-6 md:flex-row md:items-end"
            data-ember-reveal
          >
            <div>
              <Eyebrow>Signature cuts</Eyebrow>
              <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.045em] sm:text-6xl">
                From the ember.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-[#8f8479]">
              Prime beef, patient aging and a hard sear over open flame. Sauces
              are offered, never required.
            </p>
          </div>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {steaks.map((steak, index) => (
              <article
                key={steak.name}
                data-ember-reveal
                style={{ transitionDelay: `${index * 70}ms` }}
                className="group overflow-hidden border border-[#c67c2f]/25 bg-[#11100e] transition duration-500 hover:-translate-y-2 hover:border-[#d88932]/60 hover:shadow-[0_22px_60px_rgba(184,115,51,0.12)]"
              >
                <div className="relative aspect-[1.18] overflow-hidden bg-[#171512]">
                  <img
                    src={steak.image}
                    alt={steak.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.08]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#11100e]/75 via-transparent to-transparent" />
                  <span className="absolute left-4 top-4 border border-[#c67c2f]/30 bg-black/55 px-3 py-2 text-[0.52rem] font-bold uppercase tracking-[0.18em] text-[#f0b35a] backdrop-blur">
                    Prime selection
                  </span>
                </div>
                <div className="relative min-h-48 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-xl font-black uppercase tracking-[-0.02em]">
                      {steak.name}
                    </h3>
                    <span className="font-black text-[#f0b35a]">
                      {steak.price}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-[#8f8479]">
                    {steak.detail}
                  </p>
                  <span className="absolute bottom-6 left-5 h-px w-9 bg-gradient-to-r from-[#b87333] to-[#f0b35a]" />
                  <button
                    type="button"
                    aria-label={`View ${steak.name} details`}
                    className="absolute bottom-4 right-4 grid h-9 w-9 place-items-center rounded-full border border-[#c67c2f]/40 text-[#d88932] transition group-hover:rotate-90 group-hover:border-[#f0b35a] group-hover:bg-[#b87333] group-hover:text-white"
                  >
                    <Icon name="plus" className="h-4 w-4" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="specials"
        className="border-y border-[#c67c2f]/20 bg-[#11100e] py-24 sm:py-28"
      >
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-20 lg:px-14 xl:px-20">
          <div className="relative" data-ember-reveal>
            <img
              src={emberImages.interior}
              alt="Ember Steakhouse dining room in warm amber light"
              loading="lazy"
              className="aspect-[1.22] w-full object-cover shadow-[0_28px_80px_rgba(0,0,0,0.45)]"
            />
            <div className="absolute inset-0 border border-[#c67c2f]/25 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 border border-[#c67c2f]/35 bg-black/65 px-5 py-4 backdrop-blur">
              <p className="text-[0.55rem] font-bold uppercase tracking-[0.2em] text-[#d88932]">
                The flame room
              </p>
              <p className="mt-1 font-bold">Intimate seating · 42 guests</p>
            </div>
          </div>
          <div data-ember-reveal>
            <Eyebrow>The Ember experience</Eyebrow>
            <h2 className="mt-5 text-4xl font-black uppercase leading-[0.95] tracking-[-0.045em] sm:text-6xl">
              Dinner, wrapped in firelight.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#a59b8f]">
              An intimate dining room wrapped in warm amber light, dark
              textures, and the quiet drama of open-fire cooking.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Private dining",
                "Wine pairings",
                "Flame-grilled cuts",
                "Online reservations",
              ].map((feature) => (
                <span
                  key={feature}
                  className="border border-[#c67c2f]/30 bg-[#171512] px-4 py-3 text-[0.62rem] font-bold uppercase tracking-[0.13em] text-[#c2b6a9]"
                >
                  {feature}
                </span>
              ))}
            </div>
            <a
              href="#reserve"
              className="mt-9 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.16em] text-[#f0b35a] transition hover:gap-5"
            >
              Plan your evening <Icon name="arrow" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section id="wine" className="bg-[#070606] py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1440px] gap-4 px-5 sm:px-8 lg:grid-cols-2 lg:px-14 xl:px-20">
          <article
            data-ember-reveal
            className="relative overflow-hidden border border-[#c67c2f]/25 bg-[#171512] p-7 sm:p-10"
          >
            <span className="absolute -right-10 -top-10 text-[#b87333]/10">
              <Icon name="wine" className="h-52 w-52" />
            </span>
            <Eyebrow>The cellar</Eyebrow>
            <h2 className="relative mt-5 max-w-xl text-3xl font-black uppercase leading-tight sm:text-5xl">
              Bold reds. Old-world bottles. A pairing for every cut.
            </h2>
            <p className="relative mt-5 max-w-lg text-sm leading-7 text-[#8f8479]">
              Explore a cellar led by Cabernet, Barolo and Rhône reds, with
              thoughtful bottles by the glass.
            </p>
          </article>
          <article
            data-ember-reveal
            className="relative overflow-hidden border border-[#c67c2f]/25 bg-gradient-to-br from-[#2a160e] to-[#11100e] p-7 sm:p-10"
          >
            <Eyebrow>Private dining</Eyebrow>
            <h2 className="mt-5 max-w-xl text-3xl font-black uppercase leading-tight sm:text-5xl">
              Your room. Your menu. Our fire.
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-7 text-[#8f8479]">
              A twelve-seat private room with dedicated service, custom tasting
              menus and curated pairings.
            </p>
            <a
              href="#reserve"
              className="mt-8 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.15em] text-[#f0b35a]"
            >
              Make an inquiry <Icon name="arrow" className="h-4 w-4" />
            </a>
          </article>
        </div>
      </section>

      <section
        id="reviews"
        className="border-y border-[#c67c2f]/20 bg-[#11100e] py-24 sm:py-28"
      >
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14 xl:px-20">
          <div className="text-center" data-ember-reveal>
            <Eyebrow>Guest notes</Eyebrow>
            <h2 className="mt-5 text-4xl font-black uppercase tracking-[-0.04em] sm:text-6xl">
              After the last course.
            </h2>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              [
                "The lighting, the steak, the service—every detail felt considered.",
                "Mara L.",
              ],
              [
                "A proper anniversary dinner. The ribeye and Barolo were flawless.",
                "Daniel R.",
              ],
              [
                "The best steakhouse room in the city, without any of the noise.",
                "Alex C.",
              ],
            ].map(([quote, name]) => (
              <blockquote
                key={name}
                data-ember-reveal
                className="border border-[#c67c2f]/20 bg-[#171512] p-7 transition hover:border-[#d88932]/50"
              >
                <Icon name="quote" className="h-7 w-7 text-[#b87333]" />
                <p className="mt-6 text-lg font-bold leading-8 text-[#d8cfc5]">
                  “{quote}”
                </p>
                <footer className="mt-7 border-t border-[#c67c2f]/15 pt-4 text-[0.6rem] font-black uppercase tracking-[0.18em] text-[#d88932]">
                  {name} · Ember guest
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden py-24 text-center sm:py-28">
        <img
          src={emberImages.hero}
          alt=""
          aria-hidden="true"
          loading="lazy"
          className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-[#070606]/78" />
        <div className="mx-auto max-w-3xl px-5" data-ember-reveal>
          <p className="mx-auto grid h-14 w-14 place-items-center rounded-full border border-[#c67c2f]/40 text-[#f0b35a]">
            <Icon name="flame" />
          </p>
          <h2 className="mt-7 text-4xl font-black uppercase leading-[0.95] tracking-[-0.045em] sm:text-6xl">
            Your evening begins at the ember.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-[#a59b8f]">
            Dinner nightly from 5 PM. Private dining and celebration menus
            available.
          </p>
          <a
            href="#reserve"
            className="mt-8 inline-flex items-center gap-3 bg-gradient-to-r from-[#a85f29] to-[#d88932] px-8 py-4 text-xs font-black uppercase tracking-[0.16em] transition hover:-translate-y-1"
          >
            Reserve table <Icon name="arrow" className="h-4 w-4" />
          </a>
        </div>
      </section>

      <footer className="border-t border-[#c67c2f]/20 bg-[#070606] pb-28 pt-12 md:pb-12">
        <div className="mx-auto grid max-w-[1440px] gap-8 px-5 text-sm sm:grid-cols-2 sm:px-8 lg:grid-cols-[1.4fr_0.8fr_0.8fr_0.8fr] lg:px-14 xl:px-20">
          <div>
            <p className="text-xl font-black uppercase tracking-[0.16em]">
              Ember
            </p>
            <p className="mt-3 max-w-sm leading-7 text-[#746b62]">
              Prime cuts, open fire and an intimate room made for unhurried
              evenings.
            </p>
          </div>
          <div>
            <p className="text-[0.6rem] font-black uppercase tracking-[0.18em] text-[#d88932]">
              Visit
            </p>
            <p className="mt-3 leading-7 text-[#8f8479]">
              19 Ashford Lane
              <br />
              New York, NY 10013
            </p>
          </div>
          <div>
            <p className="text-[0.6rem] font-black uppercase tracking-[0.18em] text-[#d88932]">
              Hours
            </p>
            <p className="mt-3 leading-7 text-[#8f8479]">
              Sun–Thu · 5–11 PM
              <br />
              Fri–Sat · 5 PM–12 AM
            </p>
          </div>
          <div>
            <p className="text-[0.6rem] font-black uppercase tracking-[0.18em] text-[#d88932]">
              Connect
            </p>
            <p className="mt-3 leading-7 text-[#8f8479]">
              (555) 017-7700
              <br />
              Instagram · Facebook
            </p>
            <Link
              to="/restaurant"
              className="mt-3 inline-block font-bold text-[#f0b35a]"
            >
              ← Restaurant collection
            </Link>
          </div>
        </div>
      </footer>

      <nav
        aria-label="Mobile steakhouse navigation"
        className="fixed bottom-4 left-20 right-4 z-50 grid grid-cols-4 overflow-hidden border border-[#c67c2f]/30 bg-[#0d0c0b]/95 shadow-[0_18px_55px_rgba(0,0,0,0.7)] backdrop-blur-xl lg:hidden"
      >
        {[navigation[0], navigation[1], navigation[3], navigation[5]].map(
          (item, index) => (
            <a
              key={item.href}
              href={item.href}
              className={`flex min-h-16 flex-col items-center justify-center gap-1 text-[0.5rem] font-bold uppercase tracking-[0.12em] transition ${index === 0 ? "bg-gradient-to-b from-[#9a5426] to-[#6e3518] text-[#f8f3eb]" : "text-[#80776e] hover:bg-[#171512] hover:text-[#f0b35a]"}`}
            >
              <Icon name={item.icon} className="h-5 w-5" />
              {item.label}
            </a>
          ),
        )}
      </nav>
    </main>
  );
}
