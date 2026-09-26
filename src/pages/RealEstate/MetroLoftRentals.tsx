import { useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowRight,
  Bike,
  BriefcaseBusiness,
  Building2,
  Check,
  ChevronDown,
  Coffee,
  Dumbbell,
  KeyRound,
  LockKeyhole,
  MapPin,
  Menu,
  PackageCheck,
  PawPrint,
  Search,
  Sparkles,
  TrainFront,
  Trees,
  UsersRound,
  X,
} from "lucide-react";
import heroImage from "../../assets/optimized/realestate/metroloft/hero.webp";
import studioImage from "../../assets/optimized/realestate/metroloft/studio-loft-living.webp";
import amenityBuildingImage from "../../assets/optimized/realestate/metroloft/amenity-building.webp";
import connectedImage from "../../assets/optimized/realestate/metroloft/connected-neighborhood.webp";
import hudsonImage from "../../assets/optimized/realestate/metroloft/hudson-loft.webp";
import eastlineImage from "../../assets/optimized/realestate/metroloft/eastline-residences.webp";
import brickYardImage from "../../assets/optimized/realestate/metroloft/brick-yard-apartments.webp";
import neighborhoodImage from "../../assets/optimized/realestate/metroloft/neighborhood-access.webp";
import flexibleImage from "../../assets/optimized/realestate/metroloft/flexible-living.webp";
import designImage from "../../assets/optimized/realestate/metroloft/design-forward-living.webp";
import ctaImage from "../../assets/optimized/realestate/metroloft/cta-city-rentals.webp";

const navLinks = [
  ["Apartments", "#apartments"],
  ["Neighborhoods", "#neighborhoods"],
  ["Amenities", "#amenities"],
  ["Leasing", "#leasing"],
  ["Contact", "#contact"],
];

const discoveryCards = [
  {
    image: studioImage,
    tag: "Flexible spaces",
    title: "Studio & Loft Living",
    text: "Smart modern spaces designed for flexibility, comfort, and everyday city convenience.",
  },
  {
    image: amenityBuildingImage,
    tag: "Everyday extras",
    title: "Amenity-First Buildings",
    text: "Explore rentals with rooftop lounges, fitness rooms, co-working spaces, package rooms, and more.",
  },
  {
    image: connectedImage,
    tag: "In the center of it",
    title: "Connected Neighborhoods",
    text: "Discover apartments close to transit, dining, nightlife, parks, offices, and daily essentials.",
  },
];

const rentals = [
  {
    image: hudsonImage,
    title: "The Hudson Loft",
    location: "Downtown Arts District",
    type: "Studio Loft",
    rent: "From $2,450/mo",
    details: ["Studio", "1 Bath", "620 sq ft"],
  },
  {
    image: eastlineImage,
    title: "Eastline Residences",
    location: "Midtown Transit Hub",
    type: "1 Bedroom",
    rent: "From $3,100/mo",
    details: ["1 Bed", "1 Bath", "780 sq ft"],
  },
  {
    image: brickYardImage,
    title: "Brick Yard Apartments",
    location: "Warehouse District",
    type: "2 Bedroom",
    rent: "From $4,250/mo",
    details: ["2 Beds", "2 Baths", "1,120 sq ft"],
  },
];

const amenities = [
  {
    icon: Sparkles,
    title: "Rooftop Lounge",
    text: "Skyline views and room to unwind.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Studio",
    text: "Well-equipped spaces steps from home.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Co-Working Space",
    text: "Focused rooms for flexible workdays.",
  },
  {
    icon: PackageCheck,
    title: "Package Lockers",
    text: "Secure, convenient delivery pickup.",
  },
  {
    icon: LockKeyhole,
    title: "Smart Entry",
    text: "Simple access with modern security.",
  },
  {
    icon: PawPrint,
    title: "Pet-Friendly Living",
    text: "Welcoming spaces for four-legged roommates.",
  },
  {
    icon: Bike,
    title: "Bike Storage",
    text: "Protected storage for city commuters.",
  },
  {
    icon: UsersRound,
    title: "Resident Lounge",
    text: "Comfortable spaces to gather and recharge.",
  },
];

function MetroButton({
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
      className={`group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-extrabold transition duration-300 hover:-translate-y-0.5 ${
        secondary
          ? "border border-[var(--theme-border,#C9D2DE)] [html.dark_&]:border-white/20 bg-white [html.dark_&]:bg-white/10 text-[var(--theme-text-primary,#202446)] [html.dark_&]:text-white hover:border-[var(--theme-accent-primary,#5A52C8)]"
          : "bg-[var(--theme-accent-primary,#5A52C8)] text-[var(--theme-accent-contrast,#ffffff)] shadow-[0_12px_30px_rgba(90,82,200,0.28)] hover:opacity-90"
      } ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

function SectionHeading({
  label,
  title,
  text,
  center = false,
}: {
  label: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="text-[0.68rem] font-black uppercase tracking-[0.25em] text-[var(--theme-accent-primary,#5A52C8)]">
        {label}
      </p>
      <h2 className="mt-3 text-[clamp(2.15rem,4.7vw,4.4rem)] font-black leading-[0.95] tracking-[-0.055em] text-[var(--theme-text-primary,#202446)] [html.dark_&]:text-white">
        {title}
      </h2>
      {text && (
        <p
          className={`mt-5 text-base leading-7 text-[var(--theme-text-secondary,#60677A)] [html.dark_&]:text-[var(--theme-text-secondary,#9aa2b5)] md:text-lg md:leading-8 ${center ? "mx-auto max-w-2xl" : ""}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}

export function MetroLoftRentals() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searched, setSearched] = useState(false);

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearched(true);
    document.querySelector("#featured")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main className="metroloft-site overflow-hidden bg-[var(--theme-bg-base,#F8F9FD)] [html.dark_&]:bg-[var(--theme-bg-base,#0c0e1a)] text-[var(--theme-text-primary,#40475A)] [html.dark_&]:text-[var(--theme-text-primary,#e2e8f0)] selection:bg-[var(--theme-accent-secondary,#F07C72)] selection:text-white transition-colors duration-300">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[var(--theme-border,#DDE3EC)] [html.dark_&]:border-white/10 bg-white/95 [html.dark_&]:bg-[var(--theme-bg-surface,#12162a)]/95 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto flex h-[4.5rem] max-w-[90rem] items-center justify-between px-5 lg:px-10">
          <a
            href="#home"
            className="flex items-center gap-3"
            aria-label="MetroLoft Rentals home"
          >
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--theme-accent-primary,#5A52C8)] text-[var(--theme-accent-contrast,#ffffff)]">
              <Building2 className="h-5 w-5" />
            </span>
            <span className="text-lg font-black tracking-[-0.04em] text-[var(--theme-text-primary,#202446)] [html.dark_&]:text-white">
              MetroLoft <span className="text-[var(--theme-accent-primary,#5A52C8)]">Rentals</span>
            </span>
          </a>
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="MetroLoft navigation"
          >
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-bold text-[var(--theme-text-secondary,#5F6678)] [html.dark_&]:text-white/70 transition hover:text-[var(--theme-accent-primary,#5A52C8)] [html.dark_&]:hover:text-white"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <MetroButton href="#featured">Find a Loft</MetroButton>
          </div>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-11 w-11 place-items-center rounded-xl border border-[var(--theme-border,#DDE3EC)] [html.dark_&]:border-white/15 text-[var(--theme-text-primary,#202446)] [html.dark_&]:text-white lg:hidden transition active:scale-95 hover:border-[var(--theme-accent-primary,#5A52C8)]"
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-[var(--theme-border,#DDE3EC)] [html.dark_&]:border-white/10 bg-white [html.dark_&]:bg-[var(--theme-bg-surface,#12162a)] px-5 py-5 lg:hidden">
            <div className="mx-auto grid max-w-[90rem] gap-1">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 font-bold text-[var(--theme-text-secondary,#40475A)] [html.dark_&]:text-white/80 hover:bg-[var(--theme-bg-surface,#F4F5FB)] [html.dark_&]:hover:bg-white/10 hover:text-[var(--theme-accent-primary,#5A52C8)] [html.dark_&]:hover:text-white"
                >
                  {label}
                </a>
              ))}
              <MetroButton href="#featured" className="mt-3">
                Find a Loft
              </MetroButton>
            </div>
          </nav>
        )}
      </header>

      <section
        id="home"
        className="relative bg-[var(--theme-bg-base,#F4F5FB)] [html.dark_&]:bg-[var(--theme-bg-base,#0c0e1a)] pb-16 pt-28 lg:pb-28 lg:pt-36 transition-colors duration-300"
      >
        <div className="absolute -left-24 top-28 h-72 w-72 rounded-full bg-[var(--theme-accent-secondary,#F07C72)]/15 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-[var(--theme-accent-primary,#5A52C8)]/10 blur-3xl" />
        <div className="mx-auto grid max-w-[90rem] gap-12 px-5 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:px-10">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--theme-border,#D7D6F1)] [html.dark_&]:border-white/15 bg-white [html.dark_&]:bg-white/10 px-4 py-2 text-[0.68rem] font-black uppercase tracking-[0.2em] text-[var(--theme-accent-primary,#5A52C8)] [html.dark_&]:text-white">
              <span className="h-2 w-2 rounded-full bg-[var(--theme-accent-secondary,#F07C72)]" /> Urban
              rentals, simplified
            </div>
            <h1 className="mt-7 max-w-2xl text-[clamp(3.4rem,6.8vw,7.2rem)] font-black leading-[0.86] tracking-[-0.075em] text-[var(--theme-text-primary,#202446)] [html.dark_&]:text-white">
              Find Your Next City{" "}
              <span className="text-[var(--theme-accent-primary,#5A52C8)]">Apartment,</span> Faster
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--theme-text-secondary,#5E6577)] [html.dark_&]:text-[var(--theme-text-secondary,#9aa2b5)]">
              MetroLoft Rentals helps renters discover modern apartments built
              around city access, amenities, flexible leasing, and
              design-forward living.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <MetroButton href="#featured">Explore Apartments</MetroButton>
              <MetroButton href="#neighborhoods" secondary>
                View Neighborhoods
              </MetroButton>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-bold text-[var(--theme-text-secondary,#40475A)] [html.dark_&]:text-white/80">
              {["Flexible leases", "Amenity-rich", "Walkable locations"].map(
                (item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Check className="h-4 w-4 rounded-full bg-[var(--theme-accent-primary-light,rgba(90,82,200,0.15))] p-0.5 text-[var(--theme-accent-primary,#5A52C8)]" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>

          <div className="relative lg:pl-8">
            <div className="relative overflow-hidden rounded-[2rem] bg-[var(--theme-bg-dark,#202446)] shadow-[0_40px_100px_rgba(32,36,70,0.2)]">
              <img
                src={heroImage}
                alt="Modern MetroLoft apartment overlooking the city"
                className="h-[34rem] w-full object-cover md:h-[43rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-bg-dark,#202446)]/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 [html.dark_&]:bg-[var(--theme-bg-card,#171c34)]/95 p-4 shadow-xl backdrop-blur md:bottom-8 md:left-8">
                <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[var(--theme-accent-secondary,#F07C72)]">
                  Now touring
                </p>
                <p className="mt-1 font-black text-[var(--theme-text-primary,#202446)] [html.dark_&]:text-white">
                  Downtown loft collection
                </p>
              </div>
            </div>
            <div className="absolute -right-4 top-8 hidden rounded-2xl bg-[var(--theme-accent-secondary,#F07C72)] p-4 text-[var(--theme-accent-contrast,#ffffff)] shadow-xl sm:block lg:-right-2">
              <MapPin className="h-5 w-5" />
              <p className="mt-2 text-xs font-black uppercase tracking-[0.16em]">
                12 neighborhoods
              </p>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSearch}
          className="relative z-20 mx-auto mt-10 grid max-w-[82rem] gap-3 rounded-[1.5rem] border border-[var(--theme-border,#DDE3EC)] [html.dark_&]:border-white/10 bg-white [html.dark_&]:bg-[var(--theme-bg-card,#171c34)] p-4 shadow-[0_24px_70px_rgba(32,36,70,0.14)] sm:grid-cols-2 lg:-mb-44 lg:-mt-12 lg:grid-cols-[1.2fr_1fr_.8fr_1fr_auto] lg:items-end lg:p-5 transition-colors duration-300"
        >
          {[
            ["Neighborhood", "Downtown Arts District", "text"],
            ["Move-In Date", "", "date"],
          ].map(([label, placeholder, type]) => (
            <label
              key={label}
              className="block rounded-xl bg-[var(--theme-bg-surface,#F4F5FB)] [html.dark_&]:bg-white/5 px-4 py-3 text-[0.64rem] font-black uppercase tracking-[0.15em] text-[var(--theme-text-secondary,#747B8D)] [html.dark_&]:text-white/60"
            >
              {label}
              <input
                type={type}
                placeholder={placeholder}
                className="mt-1.5 w-full bg-transparent text-sm font-bold normal-case tracking-normal text-[var(--theme-text-primary,#202446)] [html.dark_&]:text-white outline-none placeholder:text-[var(--theme-text-secondary,#747B8D)] [html.dark_&]:placeholder:text-white/40"
              />
            </label>
          ))}
          {[
            ["Bedrooms", ["Studio", "1 Bedroom", "2 Bedrooms"]],
            ["Budget", ["Up to $3,000", "$3,000–$4,000", "$4,000+"]],
          ].map(([label, options]) => (
            <label
              key={label as string}
              className="relative block rounded-xl bg-[var(--theme-bg-surface,#F4F5FB)] [html.dark_&]:bg-white/5 px-4 py-3 text-[0.64rem] font-black uppercase tracking-[0.15em] text-[var(--theme-text-secondary,#747B8D)] [html.dark_&]:text-white/60"
            >
              {label as string}
              <select className="mt-1.5 w-full appearance-none bg-transparent pr-5 text-sm font-bold normal-case tracking-normal text-[var(--theme-text-primary,#202446)] [html.dark_&]:text-white outline-none">
                {(options as string[]).map((option) => (
                  <option key={option} className="bg-white text-[#202446] [html.dark_&]:bg-[#171c34] [html.dark_&]:text-white">{option}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute bottom-4 right-4 h-4 w-4 text-[var(--theme-accent-primary,#5A52C8)]" />
            </label>
          ))}
          <button
            type="submit"
            className="inline-flex min-h-[4.1rem] items-center justify-center gap-2 rounded-xl bg-[var(--theme-accent-primary,#5A52C8)] px-6 text-sm font-black text-[var(--theme-accent-contrast,#ffffff)] transition hover:opacity-90 shadow-md"
          >
            <Search className="h-4 w-4" />
            Search Rentals
          </button>
          {searched && (
            <p
              className="col-span-full px-2 text-sm font-bold text-[var(--theme-accent-primary,#5A52C8)]"
              role="status"
            >
              Showing featured rentals that match your starting criteria.
            </p>
          )}
        </form>
      </section>

      <section
        id="apartments"
        className="px-5 pb-20 pt-24 lg:px-10 lg:pb-28 lg:pt-44 bg-[var(--theme-bg-base,#F8F9FD)] [html.dark_&]:bg-[var(--theme-bg-base,#0c0e1a)] transition-colors duration-300"
      >
        <div className="mx-auto max-w-[90rem]">
          <SectionHeading
            label="Urban rentals"
            title="Apartments Designed Around City Life"
            text="Built for how you actually live—from compact layouts that work harder to buildings that make the everyday feel easier."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {discoveryCards.map((card) => (
              <article
                key={card.title}
                className="metro-card group overflow-hidden rounded-[1.5rem] border border-[var(--theme-border,#DDE3EC)] [html.dark_&]:border-white/10 bg-white [html.dark_&]:bg-[var(--theme-bg-card,#171c34)]"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={card.image}
                    alt=""
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:p-7">
                  <p className="text-[0.64rem] font-black uppercase tracking-[0.2em] text-[var(--theme-accent-secondary,#F07C72)]">
                    {card.tag}
                  </p>
                  <h3 className="mt-3 text-2xl font-black tracking-[-0.04em] text-[var(--theme-text-primary,#202446)] [html.dark_&]:text-white">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--theme-text-secondary,#6B7284)] [html.dark_&]:text-[var(--theme-text-secondary,#9aa2b5)]">
                    {card.text}
                  </p>
                  <a
                    href="#featured"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[var(--theme-accent-primary,#5A52C8)] transition hover:opacity-80"
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
        id="featured"
        className="bg-[var(--theme-bg-dark,#202446)] px-5 py-20 text-white lg:px-10 lg:py-28 transition-colors duration-300"
      >
        <div className="mx-auto max-w-[90rem]">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-[0.68rem] font-black uppercase tracking-[0.25em] text-[var(--theme-accent-secondary,#F07C72)]">
                Featured apartments
              </p>
              <h2 className="mt-3 text-[clamp(2.4rem,5vw,4.8rem)] font-black leading-none tracking-[-0.055em]">
                Featured City Rentals
              </h2>
            </div>
            <p className="max-w-md text-sm leading-7 text-white/60">
              A fresh selection of city homes with the location, layout, and
              building extras renters ask for most.
            </p>
          </div>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {rentals.map((rental) => (
              <article
                key={rental.title}
                className="group overflow-hidden rounded-[1.5rem] bg-white [html.dark_&]:bg-[var(--theme-bg-card,#171c34)] text-[var(--theme-text-primary,#40475A)] [html.dark_&]:text-white shadow-2xl shadow-black/10 border border-transparent [html.dark_&]:border-white/10"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={rental.image}
                    alt={`${rental.title} apartment interior`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-[var(--theme-accent-secondary,#F07C72)] px-3 py-1.5 text-[0.62rem] font-black uppercase tracking-[0.16em] text-[var(--theme-accent-contrast,#ffffff)]">
                    Available
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <span className="rounded-full bg-[var(--theme-accent-primary-light,rgba(90,82,200,0.12))] px-3 py-1 text-xs font-black text-[var(--theme-accent-primary,#5A52C8)]">
                      {rental.type}
                    </span>
                    <span className="text-sm font-black text-[var(--theme-text-primary,#202446)] [html.dark_&]:text-white">
                      {rental.rent}
                    </span>
                  </div>
                  <h3 className="mt-5 text-2xl font-black tracking-[-0.04em] text-[var(--theme-text-primary,#202446)] [html.dark_&]:text-white">
                    {rental.title}
                  </h3>
                  <p className="mt-2 flex items-center gap-1.5 text-sm text-[var(--theme-text-secondary,#747B8D)] [html.dark_&]:text-[var(--theme-text-secondary,#9aa2b5)]">
                    <MapPin className="h-4 w-4 text-[var(--theme-accent-secondary,#F07C72)]" />
                    {rental.location}
                  </p>
                  <div className="mt-5 flex gap-4 border-y border-[var(--theme-border,#E7EAF0)] [html.dark_&]:border-white/10 py-4 text-xs font-bold text-[var(--theme-text-secondary,#60677A)] [html.dark_&]:text-white/60">
                    {rental.details.map((detail) => (
                      <span key={detail}>{detail}</span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--theme-bg-dark,#202446)] [html.dark_&]:bg-[var(--theme-accent-primary,#5A52C8)] px-5 py-3 text-sm font-black text-white transition hover:bg-[var(--theme-accent-primary,#5A52C8)] [html.dark_&]:hover:opacity-90"
                  >
                    View Apartment <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="neighborhoods" className="px-5 py-20 lg:px-10 lg:py-28 bg-[var(--theme-bg-base,#F8F9FD)] [html.dark_&]:bg-[var(--theme-bg-base,#0c0e1a)] transition-colors duration-300">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
          <div className="relative overflow-hidden rounded-[2rem]">
            <img
              src={neighborhoodImage}
              alt="Walkable MetroLoft neighborhood with city access"
              className="min-h-[34rem] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-bg-dark,#202446)]/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between rounded-2xl bg-white/95 [html.dark_&]:bg-[var(--theme-bg-card,#171c34)]/95 p-5 backdrop-blur">
              <div>
                <p className="text-[0.62rem] font-black uppercase tracking-[0.18em] text-[var(--theme-accent-secondary,#F07C72)]">
                  City access
                </p>
                <p className="mt-1 font-black text-[var(--theme-text-primary,#202446)] [html.dark_&]:text-white">
                  Your routine, within reach.
                </p>
              </div>
              <TrainFront className="h-7 w-7 text-[var(--theme-accent-primary,#5A52C8)]" />
            </div>
          </div>
          <div>
            <SectionHeading
              label="City access"
              title="Live Closer to What Moves You"
              text="Search rentals by the way you live — near transit, work, coffee, restaurants, parks, and cultural spaces."
            />
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                [
                  Building2,
                  "Downtown Access",
                  "Culture, work, and everyday essentials nearby.",
                ],
                [
                  TrainFront,
                  "Transit-Friendly",
                  "Simple connections across the city.",
                ],
                [
                  Coffee,
                  "Dining & Nightlife",
                  "Neighborhood favorites just down the block.",
                ],
                [
                  Trees,
                  "Parks & Lifestyle",
                  "Room for fresh air and weekend plans.",
                ],
              ].map(([Icon, title, text]) => {
                const CardIcon = Icon as typeof Building2;
                return (
                  <article
                    key={title as string}
                    className="rounded-2xl border border-[var(--theme-border,#DDE3EC)] [html.dark_&]:border-white/10 bg-white [html.dark_&]:bg-[var(--theme-bg-card,#171c34)] p-5"
                  >
                    <CardIcon className="h-5 w-5 text-[var(--theme-accent-primary,#5A52C8)]" />
                    <h3 className="mt-4 font-black text-[var(--theme-text-primary,#202446)] [html.dark_&]:text-white">
                      {title as string}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[var(--theme-text-secondary,#6B7284)] [html.dark_&]:text-[var(--theme-text-secondary,#9aa2b5)]">
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
        id="amenities"
        className="border-y border-[var(--theme-border,#E2E6ED)] [html.dark_&]:border-white/10 bg-[var(--theme-bg-surface,#EEF1F7)] [html.dark_&]:bg-[var(--theme-bg-surface,#12162a)] px-5 py-20 lg:px-10 lg:py-28 transition-colors duration-300"
      >
        <div className="mx-auto max-w-[90rem]">
          <SectionHeading
            label="Everyday ease"
            title="Amenities That Make City Living Easier"
            center
          />
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {amenities.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="metro-card rounded-2xl border border-white [html.dark_&]:border-white/10 bg-white [html.dark_&]:bg-[var(--theme-bg-card,#171c34)] p-6"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--theme-accent-primary-light,rgba(90,82,200,0.12))] text-[var(--theme-accent-primary,#5A52C8)]">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-black text-[var(--theme-text-primary,#202446)] [html.dark_&]:text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--theme-text-secondary,#71788A)] [html.dark_&]:text-[var(--theme-text-secondary,#9aa2b5)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="leasing" className="px-5 py-20 lg:px-10 lg:py-28 bg-[var(--theme-bg-base,#F8F9FD)] [html.dark_&]:bg-[var(--theme-bg-base,#0c0e1a)] transition-colors duration-300">
        <div className="mx-auto grid max-w-[90rem] overflow-hidden rounded-[2rem] bg-[var(--theme-accent-primary,#5A52C8)] [html.dark_&]:bg-[var(--theme-bg-card,#171c34)] [html.dark_&]:border [html.dark_&]:border-white/10 lg:grid-cols-2">
          <div className="p-8 text-white md:p-12 lg:p-16">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.25em] text-[var(--theme-accent-secondary,#FFB4AD)]">
              Flexible living
            </p>
            <h2 className="mt-4 text-[clamp(2.5rem,5vw,4.8rem)] font-black leading-[0.95] tracking-[-0.055em]">
              Leasing That Fits Your Timeline
            </h2>
            <p className="mt-6 max-w-xl leading-8 text-white/75">
              Whether you are moving for work, upgrading your space, or
              exploring a new neighborhood, MetroLoft Rentals makes it easier to
              compare options and move with confidence.
            </p>
            <div className="mt-8 grid gap-3">
              {[
                "Flexible Lease Terms",
                "Fast Apartment Discovery",
                "Clear Move-In Guidance",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 font-bold"
                >
                  <Check className="h-5 w-5 rounded-full bg-[var(--theme-accent-secondary,#F07C72)] p-1 text-[var(--theme-accent-contrast,#ffffff)]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <img
            src={flexibleImage}
            alt="Renter enjoying a flexible modern city apartment"
            className="h-full min-h-[30rem] w-full object-cover"
          />
        </div>
      </section>

      <section className="bg-white [html.dark_&]:bg-[var(--theme-bg-surface,#12162a)] px-5 py-20 lg:px-10 lg:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-[90rem]">
          <SectionHeading
            label="How it works"
            title="From Search to Move-In"
            text="A clear path, useful details, and guidance when you need it."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "01",
                "Choose Your Neighborhood",
                "Start with the city areas that fit your routine.",
              ],
              [
                "02",
                "Compare Apartments",
                "Review layouts, rent, amenities, and lifestyle details.",
              ],
              [
                "03",
                "Schedule a Tour",
                "Request an in-person or virtual walkthrough.",
              ],
              [
                "04",
                "Apply with Confidence",
                "Move forward with clear leasing guidance.",
              ],
            ].map(([number, title, text]) => (
              <article
                key={number}
                className="relative rounded-[1.5rem] border border-[var(--theme-border,#DDE3EC)] [html.dark_&]:border-white/10 bg-[var(--theme-bg-surface,#F8F9FD)] [html.dark_&]:bg-[var(--theme-bg-card,#171c34)] p-7"
              >
                <span className="text-5xl font-black tracking-[-0.08em] text-[var(--theme-accent-primary-light,#DAD8F5)] [html.dark_&]:text-white/20">
                  {number}
                </span>
                <h3 className="mt-7 text-xl font-black text-[var(--theme-text-primary,#202446)] [html.dark_&]:text-white">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[var(--theme-text-secondary,#6B7284)] [html.dark_&]:text-[var(--theme-text-secondary,#9aa2b5)]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 lg:px-10 lg:py-28 bg-[var(--theme-bg-base,#F8F9FD)] [html.dark_&]:bg-[var(--theme-bg-base,#0c0e1a)] transition-colors duration-300">
        <div className="mx-auto grid max-w-[90rem] gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              label="Design-forward living"
              title="Spaces with Style, Function, and City Energy"
              text="From industrial lofts to polished high-rise residences, our rentals focus on smart layouts, natural light, modern finishes, and everyday convenience."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {["Modern Interiors", "Smart Layouts", "Urban Views"].map(
                (item) => (
                  <span
                    key={item}
                    className="rounded-full border border-[var(--theme-border,#D7D6F1)] [html.dark_&]:border-white/15 bg-white [html.dark_&]:bg-white/10 px-4 py-2 text-sm font-black text-[var(--theme-accent-primary,#5A52C8)] [html.dark_&]:text-white"
                  >
                    {item}
                  </span>
                ),
              )}
            </div>
          </div>
          <div className="relative">
            <img
              src={designImage}
              alt="Design-forward MetroLoft apartment interior"
              className="min-h-[32rem] w-full rounded-[2rem] object-cover"
            />
            <div className="absolute -bottom-5 -left-4 rounded-2xl bg-[var(--theme-accent-secondary,#F07C72)] p-5 text-[var(--theme-accent-contrast,#ffffff)] shadow-xl md:-left-6">
              <KeyRound className="h-6 w-6" />
              <p className="mt-3 text-sm font-black">
                Made for modern city life.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--theme-border,#E2E6ED)] [html.dark_&]:border-white/10 bg-[var(--theme-bg-surface,#F1F3F9)] [html.dark_&]:bg-[var(--theme-bg-surface,#12162a)] px-5 py-20 lg:px-10 lg:py-28 transition-colors duration-300">
        <div className="mx-auto max-w-[90rem]">
          <SectionHeading label="Resources" title="Renter Guides" />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              [
                "Apartment search",
                "How to Compare City Apartments",
                "Look beyond the monthly rent to weigh space, location, building features, and the true shape of your routine.",
              ],
              [
                "Leasing basics",
                "What to Ask Before Signing a Lease",
                "A practical checklist for fees, policies, renewals, utilities, and the details worth confirming in writing.",
              ],
              [
                "Neighborhood fit",
                "How to Choose the Right Neighborhood",
                "Turn commute time, weekend habits, transit, green space, and daily errands into a smarter shortlist.",
              ],
            ].map(([tag, title, text]) => (
              <article
                key={title}
                className="metro-card rounded-[1.5rem] border border-[var(--theme-border,#DDE3EC)] [html.dark_&]:border-white/10 bg-white [html.dark_&]:bg-[var(--theme-bg-card,#171c34)] p-7"
              >
                <p className="text-[0.62rem] font-black uppercase tracking-[0.2em] text-[var(--theme-accent-secondary,#F07C72)]">
                  {tag}
                </p>
                <h3 className="mt-4 text-2xl font-black tracking-[-0.04em] text-[var(--theme-text-primary,#202446)] [html.dark_&]:text-white">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--theme-text-secondary,#6B7284)] [html.dark_&]:text-[var(--theme-text-secondary,#9aa2b5)]">{text}</p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center gap-2 text-sm font-black text-[var(--theme-accent-primary,#5A52C8)] transition hover:opacity-80"
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
        className="relative overflow-hidden bg-[var(--theme-bg-dark,#202446)] px-5 py-24 text-white lg:px-10 lg:py-32 transition-colors duration-300"
      >
        <img
          src={ctaImage}
          alt="City apartments at dusk"
          className="absolute inset-0 h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--theme-bg-dark,#202446)] via-[var(--theme-bg-dark,#202446)]/90 to-[var(--theme-bg-dark,#202446)]/55" />
        <div className="relative mx-auto max-w-[90rem]">
          <div className="max-w-3xl">
            <p className="text-[0.68rem] font-black uppercase tracking-[0.25em] text-[var(--theme-accent-secondary,#F07C72)]">
              Your city. Your place.
            </p>
            <h2 className="mt-4 text-[clamp(3rem,7vw,6.8rem)] font-black leading-[0.9] tracking-[-0.065em]">
              Ready to Find Your MetroLoft?
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">
              Explore modern rentals built around city access, amenities, and
              flexible living.
            </p>
            <MetroButton
              href="#apartments"
              className="mt-8 bg-[var(--theme-accent-secondary,#F07C72)] text-[var(--theme-accent-contrast,#ffffff)] shadow-[0_12px_30px_rgba(240,124,114,0.25)] hover:opacity-90"
            >
              Start Apartment Search
            </MetroButton>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--theme-bg-dark,#171A35)] [html.dark_&]:bg-[var(--theme-bg-dark,#090b14)] px-5 pb-8 pt-16 text-white lg:px-10 transition-colors duration-300">
        <div className="mx-auto max-w-[90rem]">
          <div className="grid gap-10 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_.7fr_.7fr_1fr]">
            <div>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--theme-accent-primary,#5A52C8)] text-white">
                  <Building2 className="h-5 w-5" />
                </span>
                <span className="text-lg font-black">MetroLoft Rentals</span>
              </div>
              <p className="mt-5 max-w-sm text-sm leading-7 text-white/55">
                Modern apartment discovery and leasing built around city access,
                amenities, and flexible living.
              </p>
            </div>
            <div>
              <p className="font-black">Quick links</p>
              <div className="mt-4 grid gap-3 text-sm text-white/55">
                {navLinks.slice(0, 4).map(([label, href]) => (
                  <a key={label} href={href} className="hover:text-white transition-colors">
                    {label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="font-black">Rental categories</p>
              <div className="mt-4 grid gap-3 text-sm text-white/55">
                <a href="#featured" className="hover:text-white transition-colors">Studios</a>
                <a href="#featured" className="hover:text-white transition-colors">Lofts</a>
                <a href="#featured" className="hover:text-white transition-colors">1 Bedrooms</a>
                <a href="#featured" className="hover:text-white transition-colors">2 Bedrooms</a>
              </div>
            </div>
            <div>
              <p className="font-black">Contact</p>
              <div className="mt-4 grid gap-3 text-sm text-white/55">
                <a href="mailto:hello@metroloftrentals.com" className="hover:text-white transition-colors">
                  hello@metroloftrentals.com
                </a>
                <a href="tel:2125550164" className="hover:text-white transition-colors">(212) 555-0164</a>
                <span>New York, NY</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-xs text-white/40 md:flex-row md:items-center md:justify-between">
            <p>© 2026 MetroLoft Rentals. All rights reserved.</p>
            <p>
              Rental prices, availability, amenities, and lease terms are
              subject to change.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
