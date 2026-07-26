import { useState, type ReactNode } from "react";
import {
  ArrowRight,
  Building2,
  Check,
  Compass,
  KeyRound,
  MapPin,
  Menu,
  Palmtree,
  Search,
  Sparkles,
  Sun,
  TrendingUp,
  Umbrella,
  Waves,
  X,
} from "lucide-react";
import heroImage from "../../assets/optimized/realestate/suncrest/hero.webp";
import beachfrontImage from "../../assets/optimized/realestate/suncrest/beachfront-villas.webp";
import resortHomesImage from "../../assets/optimized/realestate/suncrest/resort-style-homes.webp";
import incomeImage from "../../assets/optimized/realestate/suncrest/income-potential.webp";
import azureImage from "../../assets/optimized/realestate/suncrest/azure-palm-villa.webp";
import goldenBayImage from "../../assets/optimized/realestate/suncrest/golden-bay-retreat.webp";
import hillImage from "../../assets/optimized/realestate/suncrest/suncrest-hill-residence.webp";
import lifestyleImage from "../../assets/optimized/realestate/suncrest/destination-lifestyle.webp";
import investmentImage from "../../assets/optimized/realestate/suncrest/resort-investment.webp";
import experienceImage from "../../assets/optimized/realestate/suncrest/villa-experience.webp";
import coastalImage from "../../assets/optimized/realestate/suncrest/coastal-escapes.webp";
import islandImage from "../../assets/optimized/realestate/suncrest/island-retreats.webp";
import communityImage from "../../assets/optimized/realestate/suncrest/resort-communitie.webp";
import ctaImage from "../../assets/optimized/realestate/suncrest/cta-suncrest-villa.webp";

const navLinks = [
  ["Villas", "#villas"],
  ["Destinations", "#destinations"],
  ["Investments", "#investments"],
  ["Experiences", "#experiences"],
  ["Contact", "#contact"],
];

const discoveryCards = [
  {
    image: beachfrontImage,
    tag: "Coastal living",
    title: "Beachfront Villas",
    text: "Sunlit villas near coastlines, pools, terraces, and destination lifestyle experiences.",
  },
  {
    image: resortHomesImage,
    tag: "Effortless escapes",
    title: "Resort-Style Homes",
    text: "Properties positioned around guest comfort, amenities, and effortless holiday living.",
  },
  {
    image: incomeImage,
    tag: "Practical potential",
    title: "Income Potential",
    text: "Explore vacation properties with rental appeal, guest demand, and lifestyle value in mind.",
  },
];

const villas = [
  {
    image: azureImage,
    title: "Azure Palm Villa",
    location: "Coastal Resort District",
    type: "Beach Villa",
    price: "From $780,000",
    badge: "Private Pool",
    text: "A bright coastal retreat with breezy interiors, shaded terraces, and an easy connection to the waterfront.",
  },
  {
    image: goldenBayImage,
    title: "Golden Bay Retreat",
    location: "Sunset Harbor",
    type: "Resort Villa",
    price: "From $1.2M",
    badge: "Ocean View",
    text: "A refined resort residence pairing wide water views with generous indoor-outdoor spaces for relaxed stays.",
  },
  {
    image: hillImage,
    title: "Suncrest Hill Residence",
    location: "Island View Heights",
    type: "Luxury Vacation Home",
    price: "From $950,000",
    badge: "Resort Property",
    text: "An elevated destination home shaped around privacy, natural light, and memorable gathering spaces.",
  },
];

function SuncrestButton({
  href,
  children,
  gold = false,
  outline = false,
  className = "",
}: {
  href: string;
  children: ReactNode;
  gold?: boolean;
  outline?: boolean;
  className?: string;
}) {
  const style = outline
    ? "border border-[#1595A3]/30 bg-white text-[#103F4A] hover:border-[#1595A3]"
    : gold
      ? "bg-[#E8B94A] text-[#103F4A] hover:bg-[#f0c963]"
      : "bg-[#1595A3] text-white hover:bg-[#117f8b]";
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-extrabold shadow-sm transition duration-300 hover:-translate-y-0.5 ${style} ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function SuncrestHeading({
  label,
  title,
  text,
  center = false,
  light = false,
}: {
  label: string;
  title: string;
  text?: string;
  center?: boolean;
  light?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}>
      <p className="text-[0.67rem] font-black uppercase tracking-[0.25em] text-[#1595A3]">
        {label}
      </p>
      <h2
        className={`mt-4 text-[clamp(2.5rem,5.3vw,5.3rem)] font-semibold leading-[0.95] tracking-[-0.055em] ${light ? "text-[#F7F1E3]" : "text-[#103F4A]"}`}
      >
        {title}
      </h2>
      {text && (
        <p
          className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${center ? "mx-auto" : ""} ${light ? "text-white/65" : "text-[#557074]"}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

function SuncrestLogo({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className={`flex items-center gap-3 ${light ? "text-white" : "text-[#103F4A]"}`}
      aria-label="Suncrest Vacation Villas home"
    >
      <span className="relative grid h-11 w-11 place-items-center rounded-full bg-[#1595A3] text-white">
        <Sun className="h-5 w-5" />
        <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-white bg-[#E8B94A]" />
      </span>
      <span>
        <strong className="block text-base font-black leading-none tracking-[-0.03em]">
          Suncrest
        </strong>
        <span
          className={`mt-1 block text-[0.54rem] font-bold uppercase tracking-[0.2em] ${light ? "text-white/55" : "text-[#688084]"}`}
        >
          Vacation Villas
        </span>
      </span>
    </a>
  );
}

export function SuncrestVacationVillas() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="suncrest-site overflow-hidden bg-[#F7F1E3] text-[#243C40] selection:bg-[#E8B94A] selection:text-[#103F4A]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#EADFCB] bg-[#FFFDF8]/95 backdrop-blur-xl">
        <div className="mx-auto flex h-[4.75rem] max-w-[92rem] items-center justify-between px-5 lg:px-10">
          <SuncrestLogo />
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Suncrest navigation"
          >
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-bold text-[#557074] transition hover:text-[#1595A3]"
              >
                {label}
              </a>
            ))}
          </nav>
          <SuncrestButton href="#villas" className="hidden lg:inline-flex">
            Explore Villas
          </SuncrestButton>
          <button
            type="button"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#D7E1DF] text-[#103F4A] lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[#EADFCB] bg-[#FFFDF8] px-5 py-5 lg:hidden">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-xl px-3 py-3 font-bold text-[#486367] hover:bg-[#F7F1E3]"
              >
                {label}
              </a>
            ))}
            <SuncrestButton href="#villas" className="mt-3 w-full">
              Explore Villas
            </SuncrestButton>
          </nav>
        )}
      </header>

      <section id="home" className="relative min-h-[52rem] pt-[4.75rem]">
        <img
          src={heroImage}
          alt="Sunlit luxury vacation villa with pool and ocean views"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(16,63,74,.82)_0%,rgba(16,63,74,.53)_44%,rgba(16,63,74,.08)_100%)]" />
        <div className="relative mx-auto flex min-h-[47.25rem] max-w-[92rem] items-center px-5 py-16 lg:px-10">
          <div className="max-w-4xl text-white">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-[0.65rem] font-black uppercase tracking-[0.22em] backdrop-blur">
              <Sun className="h-4 w-4 text-[#E8B94A]" /> Vacation property
            </p>
            <h1 className="mt-7 text-[clamp(4rem,8.5vw,8.7rem)] font-semibold leading-[0.82] tracking-[-0.075em]">
              Own the Stay.{" "}
              <span className="text-[#F4C65B]">Enjoy the Destination.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-white/78">
              Suncrest Vacation Villas connects buyers and investors with
              holiday villas and resort properties designed around memorable
              stays, relaxed living, and long-term lifestyle value.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <SuncrestButton href="#villas">Explore Villas</SuncrestButton>
              <SuncrestButton
                href="#investments"
                outline
                className="border-white/40 bg-white/10 text-white hover:border-white hover:bg-white/15"
              >
                View Investment Paths
              </SuncrestButton>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 hidden grid-cols-3 bg-[#FFFDF8]/95 shadow-2xl backdrop-blur lg:grid">
          {[
            ["Holiday Villas", Palmtree],
            ["Resort Investments", Building2],
            ["Lifestyle Income Potential", TrendingUp],
          ].map(([label, Icon]) => {
            const InfoIcon = Icon as typeof Palmtree;
            return (
              <div
                key={label as string}
                className="flex min-w-52 items-center gap-3 border-l border-[#EADFCB] px-5 py-5"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[#DCE8E8] text-[#1595A3]">
                  <InfoIcon className="h-5 w-5" />
                </span>
                <p className="max-w-28 text-xs font-black leading-5 text-[#103F4A]">
                  {label as string}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 px-5 lg:px-10">
        <div className="mx-auto -mt-8 grid max-w-5xl gap-3 rounded-[1.5rem] border border-[#EADFCB] bg-white p-4 shadow-[0_22px_60px_rgba(16,63,74,.13)] md:grid-cols-[1fr_1fr_1fr_auto]">
          <label className="rounded-xl bg-[#F7F1E3] px-4 py-3 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#688084]">
            Destination
            <select className="mt-1.5 w-full bg-transparent text-sm font-bold normal-case tracking-normal text-[#103F4A] outline-none">
              <option>Coastal escapes</option>
              <option>Island retreats</option>
              <option>Resort communities</option>
            </select>
          </label>
          <label className="rounded-xl bg-[#F7F1E3] px-4 py-3 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#688084]">
            Property Type
            <select className="mt-1.5 w-full bg-transparent text-sm font-bold normal-case tracking-normal text-[#103F4A] outline-none">
              <option>All villas</option>
              <option>Beach villa</option>
              <option>Resort villa</option>
            </select>
          </label>
          <label className="rounded-xl bg-[#F7F1E3] px-4 py-3 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[#688084]">
            Ownership Goal
            <select className="mt-1.5 w-full bg-transparent text-sm font-bold normal-case tracking-normal text-[#103F4A] outline-none">
              <option>Lifestyle & stays</option>
              <option>Rental appeal</option>
              <option>Mixed use</option>
            </select>
          </label>
          <a
            href="#villas"
            className="inline-flex min-h-16 items-center justify-center gap-2 rounded-xl bg-[#1595A3] px-6 text-sm font-black text-white"
          >
            <Search className="h-4 w-4" />
            Discover
          </a>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[92rem]">
          <SuncrestHeading
            label="Holiday villas"
            title="Vacation Properties Designed for Memorable Stays"
            text="Discover destination homes where thoughtful design, guest comfort, and a sense of escape come naturally."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {discoveryCards.map((card) => (
              <article
                key={card.title}
                className="suncrest-card group overflow-hidden rounded-[1.75rem] border border-[#EADFCB] bg-white"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={card.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#E2A924]">
                    {card.tag}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-[-0.04em] text-[#103F4A]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[#688084]">
                    {card.text}
                  </p>
                  <a
                    href="#villas"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#1595A3]"
                  >
                    Explore <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="villas"
        className="bg-[#DCE8E8]/70 px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[92rem]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SuncrestHeading
              label="Featured villas"
              title="Featured Vacation Villas"
            />
            <p className="max-w-md text-sm leading-7 text-[#607A7E]">
              A curated selection of resort and destination homes for personal
              escapes, guest stays, and considered ownership goals.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {villas.map((villa) => (
              <article
                key={villa.title}
                className="suncrest-card group overflow-hidden rounded-[1.75rem] border border-white bg-white"
              >
                <div className="relative aspect-[16/11] overflow-hidden">
                  <img
                    src={villa.image}
                    alt={`${villa.title} vacation property`}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[#E8B94A] px-3 py-1.5 text-[0.62rem] font-black uppercase tracking-[0.14em] text-[#103F4A]">
                    {villa.badge}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="text-[0.6rem] font-black uppercase tracking-[0.17em] text-[#1595A3]">
                        {villa.type}
                      </p>
                      <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#103F4A]">
                        {villa.title}
                      </h3>
                    </div>
                    <p className="shrink-0 text-sm font-black text-[#103F4A]">
                      {villa.price}
                    </p>
                  </div>
                  <p className="mt-3 flex items-center gap-1.5 text-sm text-[#688084]">
                    <MapPin className="h-4 w-4 text-[#E2A924]" />
                    {villa.location}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-[#688084]">
                    {villa.text}
                  </p>
                  <a
                    href="#contact"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#103F4A] px-5 py-3 text-sm font-black text-white transition hover:bg-[#1595A3]"
                  >
                    View Villa <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="experiences" className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[92rem] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={lifestyleImage}
              alt="Destination lifestyle at a Suncrest villa"
              className="min-h-[38rem] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#103F4A]/60 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/92 p-5 backdrop-blur">
              <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-[#1595A3]">
                Destination living
              </p>
              <p className="mt-1 font-semibold text-[#103F4A]">
                More room for the moments that matter.
              </p>
            </div>
          </div>
          <div>
            <SuncrestHeading
              label="Destination lifestyle"
              title="A Lifestyle Built Around Sun, Space, and Escape"
              text="From morning swims to golden-hour terraces, our villa portfolio is shaped around destinations where guests return for comfort, beauty, and ease."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                [
                  Waves,
                  "Ocean Views",
                  "Open horizons and restorative coastal settings.",
                ],
                [
                  Sparkles,
                  "Private Pools",
                  "Personal spaces for slow mornings and long afternoons.",
                ],
                [
                  Sun,
                  "Outdoor Living",
                  "Terraces, gardens, and rooms that flow outside.",
                ],
                [
                  Umbrella,
                  "Resort Amenities",
                  "Comfort and convenience close to home.",
                ],
              ].map(([Icon, title, text]) => {
                const LifestyleIcon = Icon as typeof Waves;
                return (
                  <article
                    key={title as string}
                    className="rounded-2xl border border-[#EADFCB] bg-white p-5"
                  >
                    <LifestyleIcon className="h-5 w-5 text-[#1595A3]" />
                    <h3 className="mt-4 font-black text-[#103F4A]">
                      {title as string}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#688084]">
                      {text as string}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="investments"
        className="relative bg-[#103F4A] px-5 py-24 text-white lg:px-10 lg:py-32"
      >
        <img
          src={investmentImage}
          alt="Suncrest resort investment property"
          className="absolute inset-0 h-full w-full object-cover opacity-15"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#103F4A] via-[#103F4A]/95 to-[#103F4A]/70" />
        <div className="relative mx-auto max-w-[92rem]">
          <SuncrestHeading
            label="Resort investments"
            title="Vacation Homes with Lifestyle and Income Potential"
            text="Suncrest Vacation Villas helps frame resort properties around guest appeal, destination demand, ownership goals, and practical income potential."
            light
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                Compass,
                "Destination Demand",
                "Consider seasonality, access, local appeal, and the reasons guests choose to return.",
              ],
              [
                TrendingUp,
                "Rental Appeal",
                "Review guest fit, property features, positioning, and comparable destination supply.",
              ],
              [
                Palmtree,
                "Lifestyle Value",
                "Balance personal enjoyment with the practical realities of vacation ownership.",
              ],
              [
                KeyRound,
                "Ownership Planning",
                "Clarify intended use, management needs, costs, and decision priorities.",
              ],
            ].map(([Icon, title, text]) => {
              const InvestIcon = Icon as typeof Compass;
              return (
                <article
                  key={title as string}
                  className="rounded-2xl border border-white/12 bg-white/[0.06] p-6 backdrop-blur"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-[#E8B94A] text-[#103F4A]">
                    <InvestIcon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-7 text-xl font-semibold">
                    {title as string}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/58">
                    {text as string}
                  </p>
                </article>
              );
            })}
          </div>
          <p className="mt-6 max-w-3xl text-xs leading-6 text-white/40">
            Rental income, occupancy, appreciation, and investment outcomes are
            influenced by market conditions and are not guaranteed.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[92rem]">
          <SuncrestHeading
            label="How it works"
            title="Your Path to a Destination Property"
            center
          />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Choose Your Destination",
                "Explore locations that match lifestyle goals, guest appeal, and ownership plans.",
              ],
              [
                "02",
                "Compare Villa Options",
                "Review property type, amenities, design, and rental positioning.",
              ],
              [
                "03",
                "Understand Ownership Goals",
                "Balance personal use, guest stays, and income potential.",
              ],
              [
                "04",
                "Move Forward Confidently",
                "Get clear guidance before making your next property decision.",
              ],
            ].map(([number, title, text]) => (
              <article
                key={number}
                className="rounded-[1.5rem] border border-[#EADFCB] bg-[#FFFDF8] p-7"
              >
                <span className="grid h-12 w-12 place-items-center rounded-full bg-[#E8B94A] text-sm font-black text-[#103F4A]">
                  {number}
                </span>
                <h3 className="mt-7 text-xl font-semibold text-[#103F4A]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#688084]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[92rem] overflow-hidden rounded-[2rem] bg-[#1595A3] lg:grid-cols-2">
          <img
            src={experienceImage}
            alt="Guest-ready interior and outdoor living at a Suncrest villa"
            className="h-full min-h-[35rem] w-full object-cover"
          />
          <div className="flex items-center p-8 text-white md:p-12 lg:p-16">
            <div>
              <p className="text-[0.67rem] font-black uppercase tracking-[0.25em] text-[#F4C65B]">
                Villa experience
              </p>
              <h2 className="mt-4 text-[clamp(2.7rem,5vw,5rem)] font-semibold leading-[0.95] tracking-[-0.055em]">
                Designed for Guests, Built for Owners
              </h2>
              <p className="mt-6 leading-8 text-white/72">
                The best vacation properties combine memorable guest experiences
                with durable design, easy maintenance, and strong destination
                appeal.
              </p>
              <div className="mt-8 grid gap-3">
                {[
                  "Guest-ready interiors",
                  "Outdoor living spaces",
                  "Destination-led positioning",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 font-bold"
                  >
                    <Check className="h-5 w-5 rounded-full bg-[#E8B94A] p-1 text-[#103F4A]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="destinations"
        className="bg-[#DCE8E8]/65 px-5 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-[92rem]">
          <SuncrestHeading
            label="Destination markets"
            title="Explore Destination Markets"
            text="Begin with the kind of setting, pace, and guest experience you want your property to offer."
          />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {[
              [
                coastalImage,
                "Coastal Escapes",
                "Waterfront districts shaped around beaches, dining, and effortless outdoor days.",
              ],
              [
                islandImage,
                "Island Retreats",
                "Private-feeling destinations with natural beauty and a slower rhythm.",
              ],
              [
                communityImage,
                "Resort Communities",
                "Amenity-rich settings offering service, convenience, and shared experiences.",
              ],
            ].map(([image, title, text]) => (
              <article
                key={title}
                className="group relative min-h-[34rem] overflow-hidden rounded-[1.75rem]"
              >
                <img
                  src={image}
                  alt={title}
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#103F4A]/90 via-[#103F4A]/10 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 text-white">
                  <h3 className="text-3xl font-semibold tracking-[-0.04em]">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/70">{text}</p>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#F4C65B]"
                  >
                    View Destination <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-[92rem]">
          <SuncrestHeading
            label="Owner resources"
            title="Vacation Property Guides"
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              [
                "Villa buying",
                "What to Consider Before Buying a Vacation Villa",
                "A practical look at destination fit, personal use, ongoing costs, management needs, and local ownership requirements.",
              ],
              [
                "Rental positioning",
                "How to Evaluate Rental Appeal",
                "Consider guest demand, seasonality, property features, comparable supply, and the experience a villa can reliably offer.",
              ],
              [
                "Ownership planning",
                "Lifestyle Use vs. Investment Goals",
                "Questions that help clarify how personal stays, guest use, flexibility, and financial priorities can coexist.",
              ],
            ].map(([tag, title, text]) => (
              <article
                key={title}
                className="suncrest-card rounded-[1.5rem] border border-[#EADFCB] bg-white p-7"
              >
                <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[#E2A924]">
                  {tag}
                </p>
                <h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-0.04em] text-[#103F4A]">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#688084]">{text}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[#1595A3]"
                >
                  Read Guide <ArrowRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="relative bg-[#103F4A] px-5 py-28 text-white lg:px-10 lg:py-36"
      >
        <img
          src={ctaImage}
          alt="Suncrest villa at a poolside sunset"
          className="absolute inset-0 h-full w-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#103F4A] via-[#103F4A]/88 to-[#103F4A]/35" />
        <div className="relative mx-auto max-w-[92rem]">
          <div className="max-w-4xl">
            <p className="text-[0.67rem] font-black uppercase tracking-[0.25em] text-[#F4C65B]">
              Your next escape
            </p>
            <h2 className="mt-5 text-[clamp(3.3rem,7vw,7rem)] font-semibold leading-[0.88] tracking-[-0.065em]">
              Ready to Find Your Suncrest Villa?
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Explore holiday villas and resort properties framed around
              memorable stays, relaxed lifestyle, and practical income
              potential.
            </p>
            <SuncrestButton href="#villas" gold className="mt-9">
              Start Villa Search
            </SuncrestButton>
          </div>
        </div>
      </section>

      <footer className="bg-[#0B333C] px-5 pb-8 pt-16 text-white lg:px-10">
        <div className="mx-auto max-w-[92rem]">
          <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.35fr_.65fr_.8fr_1fr]">
            <div>
              <SuncrestLogo light />
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/48">
                Holiday villas and resort investments framed around memorable
                stays, lifestyle, and income potential.
              </p>
            </div>
            <div>
              <p className="font-black">Quick links</p>
              <div className="mt-5 grid gap-3 text-sm text-white/48">
                {navLinks.slice(0, 4).map(([label, href]) => (
                  <a key={label} href={href} className="hover:text-white">
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-black">Property categories</p>
              <div className="mt-5 grid gap-3 text-sm text-white/48">
                <a href="#villas">Beach Villas</a>
                <a href="#villas">Resort Homes</a>
                <a href="#destinations">Island Retreats</a>
                <a href="#investments">Income Potential</a>
              </div>
            </div>
            <div>
              <p className="font-black">Contact</p>
              <div className="mt-5 grid gap-3 text-sm text-white/48">
                <a href="mailto:hello@suncrestvillas.com">
                  hello@suncrestvillas.com
                </a>
                <a href="tel:2125550184">(212) 555-0184</a>
                <span>New York, NY</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-[0.67rem] leading-5 text-white/32 md:flex-row md:justify-between">
            <p>© 2026 Suncrest Vacation Villas. All rights reserved.</p>
            <p className="max-w-2xl">
              Property prices, availability, rental income potential, and
              investment outcomes are subject to market conditions and are not
              guaranteed.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
