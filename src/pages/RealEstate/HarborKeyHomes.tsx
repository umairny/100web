import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Compass,
  HeartHandshake,
  House,
  KeyRound,
  MapPin,
  Menu,
  Quote,
  Search,
  Waves,
  X,
} from "lucide-react";
import heroImage from "../../assets/optimized/realestate/harborkey/hero.webp";
import listingOne from "../../assets/optimized/realestate/harborkey/listing01.webp";
import listingTwo from "../../assets/optimized/realestate/harborkey/listing02.webp";
import listingThree from "../../assets/optimized/realestate/harborkey/listing03.webp";
import waterfrontImage from "../../assets/optimized/realestate/harborkey/waterfront.webp";
import parkImage from "../../assets/optimized/realestate/harborkey/park.webp";
import sellerImage from "../../assets/optimized/realestate/harborkey/stertegy.webp";
import testimonialImage from "../../assets/optimized/realestate/harborkey/testimonial.webp";
import brokerImage from "../../assets/optimized/realestate/harborkey/broker.webp";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Listings", href: "#listings" },
  { label: "Neighborhoods", href: "#neighborhoods" },
  { label: "Sell", href: "#sell" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const trustPoints = [
  {
    icon: Compass,
    title: "Local Waterfront Expertise",
    text: "Street-by-street insight into shoreline living and long-term value.",
  },
  {
    icon: HeartHandshake,
    title: "Family-Focused Guidance",
    text: "A patient, personal process shaped around the way your family lives.",
  },
  {
    icon: KeyRound,
    title: "Confident Buying & Selling",
    text: "Clear advice, calm negotiation, and no pressure at every decision.",
  },
];

const listings = [
  {
    image: listingOne,
    title: "Bayview Modern Retreat",
    location: "Harbor Point",
    price: "$2,850,000",
    details: ["4 Beds", "3.5 Baths", "Private Terrace"],
  },
  {
    image: listingTwo,
    title: "Seaside Family Estate",
    location: "North Shore Village",
    price: "$3,950,000",
    details: ["5 Beds", "4 Baths", "Garden + Guest Suite"],
  },
  {
    image: listingThree,
    title: "Marina Loft Residence",
    location: "Old Harbor District",
    price: "$1,680,000",
    details: ["3 Beds", "2 Baths", "Walkable Waterfront"],
  },
];

const journey = [
  {
    icon: HeartHandshake,
    title: "Define Your Priorities",
    text: "We listen for the needs behind the wish list—today and years from now.",
  },
  {
    icon: MapPin,
    title: "Explore the Right Neighborhoods",
    text: "Compare daily rhythms, schools, shoreline access, and local character.",
  },
  {
    icon: House,
    title: "Tour Homes With Confidence",
    text: "See each property clearly, with context on condition, value, and fit.",
  },
  {
    icon: KeyRound,
    title: "Negotiate and Move Forward",
    text: "Make a well-informed offer and move through closing with calm support.",
  },
];

function BrandMark({ light = false }: { light?: boolean }) {
  return (
    <a
      href="#home"
      className={`group flex items-center gap-3 ${light ? "text-white" : "text-[#12344a]"}`}
    >
      <span
        className={`grid h-10 w-10 place-items-center rounded-full border ${light ? "border-white/35" : "border-[#c8a466]/50"} transition-transform group-hover:-rotate-6`}
      >
        <Waves
          className={`h-5 w-5 ${light ? "text-[#e9d5aa]" : "text-[#2b7898]"}`}
          strokeWidth={1.6}
        />
      </span>
      <span>
        <span className="harborkey-serif block text-[1.35rem] leading-none">
          HarborKey
        </span>
        <span
          className={`mt-1 block text-[0.58rem] font-semibold uppercase tracking-[0.31em] ${light ? "text-white/60" : "text-[#60757e]"}`}
        >
          Homes
        </span>
      </span>
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  body,
  centered = false,
  light = false,
}: {
  eyebrow: string;
  title: string;
  body?: string;
  centered?: boolean;
  light?: boolean;
}) {
  return (
    <div
      className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}
      data-hk-reveal
    >
      <p
        className={`mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] ${centered ? "justify-center" : ""} ${light ? "text-[#e3c98f]" : "text-[#2d7593]"}`}
      >
        <span className="h-px w-8 bg-[#c7a466]" />
        {eyebrow}
        {centered && <span className="h-px w-8 bg-[#c7a466]" />}
      </p>
      <h2
        className={`harborkey-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-[0.98] tracking-[-0.035em] ${light ? "text-white" : "text-[#11354b]"}`}
      >
        {title}
      </h2>
      {body && (
        <p
          className={`mt-6 text-base leading-8 md:text-lg ${light ? "text-white/65" : "text-[#566971]"}`}
        >
          {body}
        </p>
      )}
    </div>
  );
}

function HarborButton({
  href,
  children,
  variant = "navy",
}: {
  href: string;
  children: ReactNode;
  variant?: "navy" | "light" | "outline";
}) {
  const styles = {
    navy: "bg-[#123b53] text-white hover:bg-[#1f6583]",
    light: "bg-[#f8f4ec] text-[#123b53] hover:bg-white",
    outline:
      "border border-[#173e54]/25 text-[#173e54] hover:border-[#173e54] hover:bg-[#173e54] hover:text-white",
  };
  return (
    <a
      href={href}
      className={`group inline-flex min-h-12 items-center justify-center gap-3 rounded-full px-6 text-sm font-bold transition-all duration-300 hover:-translate-y-0.5 ${styles[variant]}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </a>
  );
}

export function HarborKeyHomes() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll("[data-hk-reveal]");
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) =>
            entry.isIntersecting && entry.target.classList.add("is-visible"),
        ),
      { threshold: 0.12 },
    );
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <main className="harborkey-site overflow-hidden bg-[#f8f5ee] text-[#314650]">
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? "border-b border-[#173e54]/10 bg-[#fbf8f2]/95 shadow-[0_12px_40px_rgba(18,59,83,0.08)] backdrop-blur-xl" : "bg-[#fbf8f2]/90 backdrop-blur-md"}`}
      >
        <div className="mx-auto flex h-[5.25rem] max-w-[90rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          <BrandMark />
          <nav
            className="hidden items-center gap-7 lg:flex"
            aria-label="HarborKey navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[0.8rem] font-semibold text-[#284859] transition-colors hover:text-[#2d7a99]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden rounded-full bg-[#163d53] px-5 py-3 text-xs font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#2d7593] sm:inline-flex"
          >
            Book a Consultation
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((current) => !current)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#173e54]/15 text-[#173e54] lg:hidden"
            aria-label="Toggle menu"
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
          <nav
            className="border-t border-[#173e54]/10 bg-[#fbf8f2] px-5 py-5 lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="mx-auto grid max-w-[90rem] gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 font-semibold text-[#173e54] hover:bg-[#eaf0ec]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-3 rounded-full bg-[#173e54] px-5 py-3 text-center text-sm font-bold text-white sm:hidden"
              >
                Book a Consultation
              </a>
            </div>
          </nav>
        )}
      </header>

      <section
        id="home"
        className="relative min-h-[760px] pt-[5.25rem] lg:min-h-[900px]"
      >
        <div className="absolute inset-0 top-[5.25rem]">
          <img
            src={heroImage}
            alt="Contemporary coastal home overlooking calm water"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,35,51,0.9)_0%,rgba(10,39,54,0.68)_42%,rgba(10,38,52,0.1)_76%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(8,33,47,0.32),transparent_45%)]" />
        </div>
        <div className="relative mx-auto flex min-h-[675px] max-w-[90rem] items-center px-5 py-20 sm:px-8 lg:min-h-[815px] lg:px-12">
          <div className="max-w-3xl text-white">
            <p className="mb-7 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.28em] text-[#e7d4a9]">
              <span className="h-px w-10 bg-[#e7d4a9]" />
              Coastal living, thoughtfully found
            </p>
            <h1 className="harborkey-serif max-w-3xl text-[clamp(4.1rem,8vw,7.9rem)] leading-[0.86] tracking-[-0.045em]">
              Find Your Place{" "}
              <em className="font-normal text-[#dbe7e4]">by the Water</em>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-white/80 sm:text-lg">
              Coastal and waterfront homes guided by local knowledge, family
              priorities, and confident moves.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <HarborButton href="#listings" variant="light">
                View Featured Homes
              </HarborButton>
              <a
                href="#about"
                className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/35 px-6 text-sm font-bold text-white transition hover:bg-white/10"
              >
                Talk to a Local Advisor <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
          <div className="absolute bottom-9 right-8 hidden items-center gap-4 text-white lg:flex">
            <div className="h-px w-20 bg-white/40" />
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.25em]">
              Harbor Point · North Shore · Old Harbor
            </span>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[82rem]">
          <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-24">
            <SectionHeading
              eyebrow="Our approach"
              title="Coastal Real Estate, Guided With Care"
            />
            <p
              className="self-end text-lg leading-9 text-[#536870] md:text-xl"
              data-hk-reveal
            >
              HarborKey Homes helps buyers and sellers navigate coastal living
              with clarity, local insight, and a personal approach. From
              waterfront condos to family estates near the shore, we focus on
              homes that fit your lifestyle as much as your budget.
            </p>
          </div>
          <div
            className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-[#173e54]/10 bg-[#173e54]/10 md:grid-cols-3"
            data-hk-reveal
          >
            {trustPoints.map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="group bg-[#f8f5ee] p-8 transition hover:bg-[#eef2eb] lg:p-10"
              >
                <Icon className="h-7 w-7 text-[#2d7898]" strokeWidth={1.4} />
                <h3 className="harborkey-serif mt-8 text-2xl text-[#15394e]">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#62747b]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="listings"
        className="bg-[#eaf0ec] px-5 py-24 sm:px-8 md:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-[90rem]">
          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Curated for you"
              title="Featured Coastal Homes"
              body="Homes with a sense of place, selected for their setting, design, and everyday livability."
            />
            <a
              href="#contact"
              className="group inline-flex w-fit items-center gap-2 border-b border-[#173e54]/40 pb-1 text-sm font-bold text-[#173e54]"
            >
              Explore all listings{" "}
              <ArrowUpRight className="h-4 w-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
          <div className="mt-14 grid gap-7 lg:grid-cols-3">
            {listings.map((listing, index) => (
              <article
                key={listing.title}
                className="group overflow-hidden rounded-[1.5rem] bg-[#fbf9f4] shadow-[0_18px_50px_rgba(18,59,83,0.08)]"
                data-hk-reveal
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="relative aspect-[1.18] overflow-hidden">
                  <img
                    src={listing.image}
                    alt={listing.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <span className="absolute left-5 top-5 rounded-full bg-[#f8f5ee]/92 px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-[#173e54] backdrop-blur">
                    Featured
                  </span>
                </div>
                <div className="p-6 lg:p-7">
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#588193]">
                    <MapPin className="h-3.5 w-3.5" />
                    {listing.location}
                  </div>
                  <h3 className="harborkey-serif mt-4 text-[1.85rem] leading-tight text-[#12364b]">
                    {listing.title}
                  </h3>
                  <p className="mt-3 text-lg font-bold text-[#173e54]">
                    {listing.price}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-x-3 gap-y-2 border-y border-[#173e54]/10 py-4 text-xs font-medium text-[#60727a]">
                    {listing.details.map((detail) => (
                      <span
                        key={detail}
                        className="after:ml-3 after:text-[#c49d5f] after:content-['·'] last:after:hidden"
                      >
                        {detail}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#173e54]"
                  >
                    View Property{" "}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="neighborhoods"
        className="px-5 py-24 sm:px-8 md:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-[86rem]">
          <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
            <div>
              <SectionHeading
                eyebrow="Beyond the front door"
                title="Life Moves Differently Near the Coast"
                body="Morning walks along the harbor, weekend markets, quiet parks, and sunset dinners by the water. We help you understand not only the home, but the rhythm of the neighborhood around it."
              />
              <div className="mt-10 space-y-3" data-hk-reveal>
                {[
                  "Walkable Harbor Living",
                  "Parks, Schools & Family Spaces",
                  "Dining, Galleries & Local Culture",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center gap-5 border-b border-[#173e54]/12 py-4"
                  >
                    <span className="harborkey-serif text-lg text-[#c19d60]">
                      0{index + 1}
                    </span>
                    <h3 className="text-sm font-bold text-[#173e54]">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4" data-hk-reveal>
              <div className="col-span-8 overflow-hidden rounded-[1.5rem]">
                <img
                  src={waterfrontImage}
                  alt="Walkable harbor neighborhood"
                  className="h-full min-h-[420px] w-full object-cover"
                />
              </div>
              <div className="col-span-4 mt-16 overflow-hidden rounded-[1.5rem]">
                <img
                  src={parkImage}
                  alt="Family-friendly coastal park"
                  className="h-full min-h-[340px] w-full object-cover"
                />
              </div>
              <div className="col-span-8 col-start-5 -mt-16 rounded-[1.5rem] bg-[#153e53] p-7 text-white shadow-xl sm:p-9">
                <Waves className="h-7 w-7 text-[#e5ce9d]" strokeWidth={1.4} />
                <p className="harborkey-serif mt-5 text-2xl leading-snug">
                  A home is also the walk to school, the favorite café, and the
                  view at day’s end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#12384d] px-5 py-24 text-white sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[86rem]">
          <SectionHeading
            eyebrow="The buyer journey"
            title="A Clear Path to Your Coastal Home"
            centered
            light
          />
          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {journey.map(({ icon: Icon, title, text }, index) => (
              <article
                key={title}
                className="relative rounded-[1.5rem] border border-white/12 bg-white/[0.045] p-7 lg:min-h-[300px]"
                data-hk-reveal
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <span className="harborkey-serif text-5xl text-[#d6b978]/55">
                  0{index + 1}
                </span>
                <Icon
                  className="mt-8 h-6 w-6 text-[#9fc0b8]"
                  strokeWidth={1.4}
                />
                <h3 className="harborkey-serif mt-5 text-2xl leading-tight text-white">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-white/60">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sell" className="bg-[#e8e4d7]">
        <div className="grid lg:grid-cols-2">
          <div className="min-h-[480px] lg:min-h-[670px]" data-hk-reveal>
            <img
              src={sellerImage}
              alt="Coastal home prepared for sale"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="flex items-center px-6 py-20 sm:px-12 lg:px-[clamp(3rem,7vw,8rem)]"
            data-hk-reveal
          >
            <div className="max-w-xl">
              <SectionHeading
                eyebrow="For sellers"
                title="Selling a Coastal Home With Strategy"
                body="From pricing and presentation to buyer positioning, we create a thoughtful listing strategy designed to highlight the lifestyle, location, and long-term value of your home."
              />
              <ul className="mt-8 grid gap-3 text-sm font-semibold text-[#415b65]">
                {[
                  "Market-informed pricing",
                  "Editorial presentation",
                  "Qualified buyer positioning",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-[#c3d4cb]">
                      <Check className="h-3.5 w-3.5 text-[#173e54]" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-9">
                <HarborButton href="#contact">Plan My Sale</HarborButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div
          className="mx-auto grid max-w-[82rem] overflow-hidden rounded-[2rem] bg-[#dbe8e3] lg:grid-cols-[0.82fr_1.18fr]"
          data-hk-reveal
        >
          <img
            src={testimonialImage}
            alt="A couple enjoying life by the coast"
            className="h-full min-h-[400px] w-full object-cover"
          />
          <div className="flex items-center p-8 sm:p-14 lg:p-20">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#2d7593]">
                Trusted by coastal buyers and sellers
              </p>
              <Quote
                className="mt-9 h-9 w-9 text-[#bd9657]"
                strokeWidth={1.2}
              />
              <blockquote className="harborkey-serif mt-5 text-[clamp(2rem,4vw,3.4rem)] leading-[1.08] tracking-[-0.025em] text-[#12384d]">
                “HarborKey helped us understand the neighborhoods, compare homes
                clearly, and move forward without pressure. We found a place
                that truly fits our family.”
              </blockquote>
              <p className="mt-8 text-sm font-bold text-[#294d5e]">
                Emily &amp; Daniel R.
              </p>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-[#6e8588]">
                Buyers · North Shore Village
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-y border-[#173e54]/10 bg-[#fbf9f4] px-5 py-24 sm:px-8 md:py-32 lg:px-12"
      >
        <div className="mx-auto grid max-w-[76rem] gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
          <div className="relative mx-auto max-w-[28rem]" data-hk-reveal>
            <div className="absolute -left-5 -top-5 h-full w-full rounded-[12rem_12rem_2rem_2rem] border border-[#bd985d]/50" />
            <img
              src={brokerImage}
              alt="Claire Bennett, Principal Broker"
              className="relative aspect-[4/5] w-full rounded-[12rem_12rem_2rem_2rem] object-cover"
            />
            <div className="absolute -bottom-5 -right-5 rounded-full bg-[#173e54] p-5 text-white shadow-xl">
              <Waves className="h-7 w-7" strokeWidth={1.3} />
            </div>
          </div>
          <div data-hk-reveal>
            <SectionHeading
              eyebrow="Meet your advisor"
              title="Meet Your Coastal Real Estate Advisor"
            />
            <div className="mt-8 border-l-2 border-[#c6a365] pl-6">
              <h3 className="harborkey-serif text-3xl text-[#15394e]">
                Claire Bennett
              </h3>
              <p className="mt-1 text-xs font-bold uppercase tracking-[0.2em] text-[#66808a]">
                Principal Broker, HarborKey Homes
              </p>
            </div>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#586d75]">
              Claire combines local market knowledge, calm negotiation, and
              thoughtful client care to help families make confident real-estate
              decisions along the coast.
            </p>
            <div className="mt-9">
              <HarborButton href="#contact" variant="outline">
                Schedule a Consultation
              </HarborButton>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="bg-[#285f76] px-5 py-24 text-center text-white sm:px-8 md:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-4xl" data-hk-reveal>
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ead5a7]">
            Your next chapter
          </p>
          <h2 className="harborkey-serif mt-5 text-[clamp(3.2rem,7vw,6.4rem)] leading-[0.92] tracking-[-0.04em]">
            Ready to Make Your Next Move?
          </h2>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
            Whether you are buying your first coastal home, upgrading for your
            family, or preparing to sell, HarborKey Homes is ready to guide your
            next step.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <HarborButton href="#listings" variant="light">
              <Search className="h-4 w-4" />
              Start Your Search
            </HarborButton>
            <a
              href="mailto:hello@harborkeyhomes.com?subject=Home%20Valuation"
              className="inline-flex min-h-12 items-center gap-3 rounded-full border border-white/35 px-6 text-sm font-bold text-white transition hover:bg-white/10"
            >
              Request a Home Valuation <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#0d2c3d] px-5 py-14 text-white sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[86rem]">
          <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.2fr_0.8fr_1fr]">
            <div>
              <BrandMark light />
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/55">
                A boutique coastal real-estate advisory helping families find
                the right home, neighborhood, and next move.
              </p>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4b77d]">
                Explore
              </p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/60 hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#d4b77d]">
                Start a conversation
              </p>
              <div className="mt-5 grid gap-3 text-sm">
                <a
                  href="mailto:hello@harborkeyhomes.com"
                  className="text-white/70 hover:text-white"
                >
                  hello@harborkeyhomes.com
                </a>
                <a
                  href="tel:+15554182700"
                  className="text-white/70 hover:text-white"
                >
                  (555) 418-2700
                </a>
                <p className="text-white/45">Coastal real-estate advisory</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 HarborKey Homes. All rights reserved.</p>
            <p>Equal Housing Opportunity · Privacy</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
