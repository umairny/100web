import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container, CTAButton, RestaurantSubNav } from "../../components";

const urbanImages = {
  hero: {
    src: "/images/urbanbite-kitchen-card.png",
    alt: "UrbanBite Kitchen bold casual dining preview",
    fallbackStyle:
      "bg-[linear-gradient(135deg,#161616_0%,#161616_34%,#ef3b2d_35%,#ef3b2d_58%,#f6c65c_59%,#f6c65c_72%,#f4efe8_73%)]",
  },
};

const signatureDishes = [
  {
    name: "Fire-Grilled Chicken Bowl",
    label: "Popular",
    price: "$18",
    description:
      "Charred chicken, herbed rice, pickled slaw, and smoky red pepper drizzle.",
  },
  {
    name: "Tomato Basil Smash Burger",
    label: "Chef Pick",
    price: "$17",
    description:
      "Double smashed beef, basil aioli, roasted tomato jam, and soft brioche.",
  },
  {
    name: "Street Corn Tacos",
    label: "Spicy",
    price: "$16",
    description:
      "Corn-crusted tortillas, chipotle crema, cotija, and lime-charred sweet corn.",
  },
  {
    name: "Urban Mac & Cheese",
    label: "New",
    price: "$15",
    description:
      "Cavatappi, aged cheddar sauce, crisp breadcrumbs, and roasted chili oil.",
  },
];

const menuItems = [
  ["Crispy Chicken Sliders", "Hot honey pickles", "$13"],
  ["Loaded Truffle Fries", "Parmesan and garlic herb", "$11"],
  ["Garlic Herb Flatbread", "Whipped ricotta and charred tomato", "$12"],
  ["Spicy Shrimp Tacos", "Lime slaw and chili crema", "$16"],
  ["Garden Power Bowl", "Greens, grains, avocado", "$15"],
  ["Classic House Burger", "Cheddar, pickles, onion", "$16"],
  ["Lemon Pepper Wings", "Crisp finish and ranch", "$14"],
  ["Chocolate Skillet Brownie", "Warm vanilla cream", "$9"],
];

const serviceStats = [
  ["8 min", "average lunch pickup"],
  ["25+", "fresh plates"],
  ["7 days", "open weekly"],
  ["214", "Market Ave"],
];

const reasons = [
  {
    title: "Fast Without Feeling Rushed",
    description:
      "Built for lunch meetings, dinner dates, and late city bites that still feel composed.",
  },
  {
    title: "Big Flavor, Clean Plates",
    description:
      "Fresh produce, tight prep, and flame-forward cooking keep every dish lively and balanced.",
  },
  {
    title: "A Room With Real Energy",
    description:
      "Open kitchen light, downtown rhythm, and a crowd that keeps the room current every night.",
  },
];

const testimonials = [
  {
    name: "Jordan Hayes",
    role: "Downtown Creative",
    quote:
      "UrbanBite feels like the place you text your friends about as soon as dinner lands. The burger is unreal.",
  },
  {
    name: "Mia Patel",
    role: "Neighborhood Regular",
    quote:
      "The bowl menu is fresh, the sauces are sharp, and the room has just the right amount of city energy.",
  },
  {
    name: "Carlos Benton",
    role: "Late Dinner Guest",
    quote:
      "Fast service, confident food, and a menu that actually makes you want to come back next week.",
  },
];

function UrbanImage({
  src,
  alt,
  fallbackStyle,
  className = "",
  children,
}: {
  src: string;
  alt: string;
  fallbackStyle: string;
  className?: string;
  children?: ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={`absolute inset-0 ${fallbackStyle}`} />
      {isLoaded && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setIsLoaded(false)}
        />
      )}
      {children}
    </div>
  );
}

function PosterMarks() {
  return (
    <>
      <div className="absolute left-6 top-6 h-20 w-20 border-[14px] border-white/80 bg-[#ef3b2d]" />
      <div className="absolute bottom-10 left-12 h-12 w-44 -rotate-6 bg-[#f6c65c]" />
      <div className="absolute right-10 top-16 h-36 w-20 rotate-12 bg-[#161616]/78" />
      <div className="absolute bottom-12 right-12 grid grid-cols-3 gap-2">
        {Array.from({ length: 9 }).map((_, index) => (
          <span key={index} className="h-3 w-3 bg-white/85" />
        ))}
      </div>
    </>
  );
}

export function UrbanBiteKitchen() {
  return (
    <main className="brand-motion motion-urbanbite bg-[#f4efe8] text-[#161616]">
      <RestaurantSubNav
        brand="UrbanBite"
        links={[
          { label: "Tickets", href: "#tickets" },
          { label: "Menu", href: "#menu" },
          { label: "Kitchen", href: "#kitchen" },
          { label: "Reviews", href: "#reviews" },
        ]}
        ctaLabel="Reserve"
        ctaHref="#reserve"
        className="border-b border-white/10 bg-[#161616]/95 text-white"
        brandClassName="text-sm uppercase tracking-[0.24em] text-white"
        linkClassName="px-3 py-2 text-white/85 transition hover:bg-[#ef3b2d] hover:text-white"
        ctaClassName="bg-[#ef3b2d] text-white hover:bg-[#d83227]"
        menuButtonClassName="border-white/20 text-white hover:bg-white/10"
        mobilePanelClassName="border border-white/10 bg-[#161616]"
      />

      <section className="relative overflow-hidden bg-[#161616] pt-28 text-white md:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <Container className="relative pb-10 md:pb-14">
          <div className="grid min-h-[700px] border border-white/12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="flex flex-col justify-between border-b border-white/12 p-6 md:p-10 lg:border-b-0 lg:border-r">
              <div>
                <div className="inline-flex bg-[#ef3b2d] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white">
                  Modern casual dining / downtown energy
                </div>
                <h1 className="mt-8 max-w-4xl text-6xl font-black uppercase leading-[0.85] tracking-normal text-white md:text-8xl lg:text-9xl">
                  Urban Bite Kitchen
                </h1>
              </div>

              <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_18rem] lg:items-end">
                <p className="max-w-2xl text-xl font-semibold leading-9 text-white/78">
                  Flame-forward plates, stacked burgers, quick lunch tickets,
                  and a dining room with enough downtown charge to carry the
                  night.
                </p>
                <div className="border border-white/16 bg-white/[0.06] p-5">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f6c65c]">
                    Service window
                  </p>
                  <div className="mt-5 space-y-3 text-sm text-white/80">
                    <div className="flex justify-between gap-4">
                      <span>Mon - Thu</span>
                      <span className="font-black">11 AM - 10 PM</span>
                    </div>
                    <div className="flex justify-between gap-4">
                      <span>Fri - Sun</span>
                      <span className="font-black">11 AM - 11 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#menu" size="lg" className="bg-[#ef3b2d] hover:bg-[#d83227]">
                  View Menu
                </CTAButton>
                <CTAButton
                  href="#reserve"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Reserve a Table
                </CTAButton>
              </div>
            </div>

            <div className="relative grid min-h-[520px] grid-rows-[1fr_auto]">
              <UrbanImage
                src={urbanImages.hero.src}
                alt={urbanImages.hero.alt}
                fallbackStyle={urbanImages.hero.fallbackStyle}
                className="min-h-[460px]"
              >
                <PosterMarks />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(22,22,22,0.04),rgba(22,22,22,0.72))]" />
                <div className="absolute bottom-6 left-6 right-6 bg-[#161616]/84 p-5 shadow-2xl backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f6c65c]">
                    Chef pick
                  </p>
                  <p className="mt-2 text-3xl font-black">
                    Tomato Basil Smash Burger
                  </p>
                </div>
              </UrbanImage>
              <div className="grid grid-cols-2 border-t border-white/12 md:grid-cols-4">
                {serviceStats.map(([value, label]) => (
                  <div key={label} className="border-r border-white/12 p-4 last:border-r-0">
                    <p className="text-2xl font-black text-[#f6c65c]">{value}</p>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-white/62">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>

        <div className="border-y border-white/12 bg-[#ef3b2d] py-4 text-sm font-black uppercase tracking-[0.24em] text-white">
          <div className="flex min-w-max gap-8 px-6">
            {[
              "Open kitchen",
              "City plates",
              "Hot honey",
              "Smash burgers",
              "Late bites",
              "Counter energy",
            ].map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>
        </div>
      </section>

      <section id="tickets" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[22rem_1fr]">
            <div className="bg-[#161616] p-7 text-white">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f6c65c]">
                Signature tickets
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none">
                Order-board hits.
              </h2>
              <p className="mt-6 leading-7 text-white/68">
                No soft luxury layout here. UrbanBite reads like a live kitchen:
                tickets up, plates moving, flavor loud.
              </p>
            </div>

            <div className="border-y border-[#161616]">
              {signatureDishes.map((dish, index) => (
                <article
                  key={dish.name}
                  className="grid gap-5 border-b border-[#161616] py-6 last:border-b-0 md:grid-cols-[4rem_1fr_auto] md:items-center"
                >
                  <span className="text-sm font-black uppercase tracking-[0.2em] text-[#ef3b2d]">
                    #{index + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-3xl font-black uppercase leading-none">
                        {dish.name}
                      </h3>
                      <span className="bg-[#ef3b2d] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-white">
                        {dish.label}
                      </span>
                    </div>
                    <p className="mt-3 max-w-2xl leading-7 text-[#535353]">
                      {dish.description}
                    </p>
                  </div>
                  <span className="text-3xl font-black">{dish.price}</span>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="menu" className="bg-[#161616] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f6c65c]">
                Menu Preview
              </p>
              <h2 className="mt-3 text-5xl font-black uppercase leading-none md:text-7xl">
                Fast line, full flavor.
              </h2>
            </div>
            <div className="grid gap-px bg-white/12 md:grid-cols-2">
              {menuItems.map(([name, note, price]) => (
                <article key={name} className="bg-[#161616] p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-black">{name}</h3>
                    <span className="font-black text-[#f6c65c]">{price}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-white/58">{note}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="kitchen" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-px bg-[#161616]">
              {reasons.map((reason) => (
                <article key={reason.title} className="bg-[#f4efe8] p-7 md:p-8">
                  <div className="mb-7 h-3 w-24 bg-[#ef3b2d]" />
                  <h3 className="text-3xl font-black uppercase">{reason.title}</h3>
                  <p className="mt-4 max-w-2xl leading-7 text-[#535353]">
                    {reason.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="bg-[#ef3b2d] p-8 text-white md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f6c65c]">
                Kitchen story
              </p>
              <h2 className="mt-4 text-5xl font-black uppercase leading-none">
                Built like a busy line.
              </h2>
              <p className="mt-7 text-lg leading-8 text-white/84">
                The room is open, the pass is visible, and the food moves with
                purpose. UrbanBite is clean prep, fast plates, and city comfort
                with sharper edges.
              </p>
              <div className="mt-8 border border-white/24 p-5">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f6c65c]">
                  Chef note
                </p>
                <p className="mt-4 text-2xl font-black">
                  Bright sauces, hard sears, crisp textures, clean plates.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="reviews" className="border-y border-[#161616] bg-white py-20 md:py-28">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ef3b2d]">
                Receipts
              </p>
              <h2 className="mt-3 text-4xl font-black uppercase leading-none md:text-6xl">
                Heard after dinner.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#535353]">
              A few notes from guests who came for something quick and stayed
              for another round.
            </p>
          </div>
          <div className="grid gap-5 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="border-2 border-[#161616] bg-[#f4efe8] p-7 shadow-[8px_8px_0_#161616]">
                <p className="text-lg font-bold leading-8">"{testimonial.quote}"</p>
                <footer className="mt-8 border-t border-[#161616] pt-4">
                  <p className="font-black uppercase">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-[#535353]">{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section id="reserve" className="bg-[#ef3b2d] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_24rem] lg:items-stretch">
            <div className="border-y border-white/28 py-8">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f6c65c]">
                Reservation callout
              </p>
              <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
                Pull up for lunch, dinner, or a late bite.
              </h2>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="tel:555-014-4040" size="lg" className="bg-[#161616] text-white hover:bg-black">
                  Reserve by Phone
                </CTAButton>
                <CTAButton href="#menu" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Menu
                </CTAButton>
              </div>
            </div>

            <div className="bg-[#161616] p-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f6c65c]">
                Find us
              </p>
              <div className="mt-6 space-y-5 text-white/82">
                <p>214 Market Ave</p>
                <p>Downtown Arts District</p>
                <p>(555) 014-4040</p>
                <div className="border-t border-white/12 pt-5">
                  <p>Mon - Thu: 11 AM - 10 PM</p>
                  <p className="mt-2">Fri - Sun: 11 AM - 11 PM</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <footer className="border-t border-[#2c2c2c] bg-[#111111] py-12 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-2xl font-black uppercase">UrbanBite Kitchen</p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/68">
                Bold city dining with fresh plates, strong sauces, and a room
                that feels current from open to close.
              </p>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f6c65c]">Hours</p>
              <div className="mt-4 space-y-2 text-sm text-white/68">
                <p>Mon - Thu: 11 AM - 10 PM</p>
                <p>Fri - Sun: 11 AM - 11 PM</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f6c65c]">Location & Social</p>
              <div className="mt-4 space-y-2 text-sm text-white/68">
                <p>214 Market Ave, Downtown Arts District</p>
                <p>Instagram</p>
                <p>TikTok</p>
                <p>Facebook</p>
              </div>
            </div>
          </div>
        </Container>
      </footer>

      <section className="border-t border-[#ddd6cf] bg-[#f4efe8] py-10">
        <Container className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link to="/restaurant" className="font-bold text-[#ef3b2d] hover:text-[#161616]">
            Back to Restaurant Collection
          </Link>
          <Link to="/" className="font-bold text-[#666666] hover:text-[#161616]">
            Back to 100 Designs Portfolio
          </Link>
        </Container>
      </section>
    </main>
  );
}
