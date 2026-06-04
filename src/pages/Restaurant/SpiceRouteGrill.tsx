import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container, CTAButton, RestaurantSubNav } from "../../components";

const imageAssets = {
  hero: {
    src: "/images/spiceroute/hero-grill.png",
    alt: "Sizzling grilled kebabs and tikka served on a dark charcoal plate",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_50%_45%,rgba(244,161,26,0.95)_0_12%,transparent_13%),radial-gradient(circle_at_42%_58%,rgba(143,29,27,0.95)_0_18%,transparent_19%),linear-gradient(135deg,#211815,#5b1518_48%,#f4a11a)]",
    imagePrompt:
      "A premium Indian-Pakistani fusion grill restaurant hero image, sizzling grilled kebabs and tikka on a dark charcoal plate, warm saffron and deep red lighting, subtle smoke, elegant restaurant atmosphere, premium food photography, cinematic, no text, no logo.",
  },
  signatureDish1: {
    src: "/images/spiceroute/signature-dish-1.png",
    alt: "Chicken tikka skewers with saffron rice, chutney, and herbs",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_45%_42%,#f4a11a_0_12%,transparent_13%),radial-gradient(circle_at_56%_55%,#8f1d1b_0_18%,transparent_19%),linear-gradient(135deg,#1f1b18,#6b181b_55%,#f0b13a)]",
    imagePrompt:
      "Close-up premium food photography of chicken tikka skewers with charred edges, saffron rice, chutney, herbs, warm restaurant lighting, deep red and charcoal background, no text.",
  },
  signatureDish2: {
    src: "/images/spiceroute/signature-dish-2.png",
    alt: "Seekh kebab platter with naan, grilled vegetables, and mint chutney",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_30%_55%,#e9c36a_0_10%,transparent_11%),radial-gradient(circle_at_58%_42%,#5f1517_0_22%,transparent_23%),linear-gradient(135deg,#241817,#8f1d1b_60%,#d99622)]",
    imagePrompt:
      "Modern plated seekh kebab platter with naan, grilled vegetables, mint chutney, rich spices, elegant dark table, warm golden highlights, premium restaurant menu photography, no text.",
  },
  signatureDish3: {
    src: "/images/spiceroute/signature-dish-3.png",
    alt: "Mixed grill family platter with kebabs, tikka, lamb chops, naan, and chutneys",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_36%_42%,#f4a11a_0_10%,transparent_11%),radial-gradient(circle_at_64%_46%,#c56a1b_0_12%,transparent_13%),radial-gradient(circle_at_52%_60%,#7c1c1d_0_22%,transparent_23%),linear-gradient(135deg,#171312,#4a1113_55%,#f4a11a)]",
    imagePrompt:
      "Indian-Pakistani fusion mixed grill family platter with kebabs, tikka, lamb chops, naan, chutneys, onions, lemon, cinematic warm lighting, premium dining style, no text.",
  },
  interior: {
    src: "/images/spiceroute/interior.png",
    alt: "Modern South Asian fusion restaurant interior with amber lights and deep red accents",
    fallbackStyle:
      "bg-[linear-gradient(90deg,rgba(244,161,26,0.18)_1px,transparent_1px),linear-gradient(180deg,#1f1b18,#4b1416_58%,#8f1d1b)] [background-size:42px_42px]",
    imagePrompt:
      "Elegant modern South Asian fusion restaurant interior, warm amber lights, charcoal walls, deep red accents, cozy premium dining tables, cultural pattern details, cinematic interior photography, no text.",
  },
};

const popularDishes = [
  {
    name: "Charcoal Chicken Tikka",
    label: "House Favorite",
    price: "$18",
    detail:
      "Yogurt-marinated chicken, charred over flame, served with saffron rice and mint chutney.",
    image: imageAssets.signatureDish1,
  },
  {
    name: "Saffron Seekh Kebab",
    label: "Smoky",
    price: "$19",
    detail:
      "Hand-formed beef kebabs with roasted cumin, fresh herbs, grilled naan, and pickled onions.",
    image: imageAssets.signatureDish2,
  },
  {
    name: "Lahori Lamb Chops",
    label: "Chef Special",
    price: "$28",
    detail:
      "Tender lamb chops rubbed with chili, coriander, lemon, and a warm house spice blend.",
    image: imageAssets.signatureDish3,
  },
  {
    name: "Masala Grill Platter",
    label: "Family Pick",
    price: "$46",
    detail:
      "A generous mixed grill with tikka, kebabs, chops, naan, chutneys, onions, and lemon.",
    image: imageAssets.hero,
  },
];

const menuPreview = [
  "Chicken Boti Roll",
  "Beef Seekh Kebab",
  "Tandoori Wings",
  "Garlic Naan",
  "Butter Chicken Bowl",
  "Spiced Lamb Chops",
  "Mint Lemonade",
  "Family Mixed Grill",
];

const flavorSteps = [
  {
    title: "Toast the spices",
    text: "Cumin, coriander, chili, and cardamom are warmed until fragrant, then blended for depth.",
  },
  {
    title: "Marinate overnight",
    text: "Yogurt, lemon, ginger, garlic, and spice are given time to tenderize every skewer and chop.",
  },
  {
    title: "Grill over flame",
    text: "Each dish gets the smoky finish, charred edge, and bright heat that defines our grill.",
  },
  {
    title: "Finish for sharing",
    text: "Warm naan, chutney, pickled onions, herbs, and lemon bring the whole table together.",
  },
];

const testimonials = [
  {
    quote:
      "The mixed grill platter felt like a celebration. Every bite had smoke, heat, and a fresh chutney finish.",
    name: "Aisha Rahman",
  },
  {
    quote:
      "Beautiful dining room, generous family portions, and the lamb chops were easily the best we have had in town.",
    name: "Naveen Malik",
  },
  {
    quote:
      "SpiceRoute is our go-to for birthdays now. Premium enough for dinner out, relaxed enough for the whole family.",
    name: "Sofia Bennett",
  },
];

const ImageWithFallback = ({
  image,
  className = "",
  children,
}: {
  image: (typeof imageAssets)[keyof typeof imageAssets];
  className?: string;
  children?: ReactNode;
}) => {
  const [isLoaded, setIsLoaded] = useState(true);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <div className={`absolute inset-0 ${image.fallbackStyle}`} />
      {isLoaded && (
        <img
          src={image.src}
          alt={image.alt}
          className="absolute inset-0 h-full w-full object-cover"
          onError={() => setIsLoaded(false)}
        />
      )}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,transparent,rgba(20,15,13,0.18)_55%,rgba(20,15,13,0.42))]" />
      {children}
    </div>
  );
};

const SpiceDots = () => (
  <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(#f4a11a_1px,transparent_1px),radial-gradient(#8f1d1b_1px,transparent_1px)] [background-position:0_0,13px_13px] [background-size:26px_26px]" />
);

export function SpiceRouteGrill() {
  return (
    <main className="brand-motion motion-spiceroute bg-[#fff4dd] text-[#1f1b18]">
      <RestaurantSubNav
        brand="SpiceRoute Grill"
        links={[
          { label: "Dishes", href: "#dishes" },
          { label: "Journey", href: "#journey" },
          { label: "Platters", href: "#platters" },
          { label: "Reserve", href: "#order" },
        ]}
        ctaLabel="Reserve"
        ctaHref="#order"
        className="border-b border-[#f4a11a]/25 bg-[#1f1b18]/95 text-[#fff4dd] shadow-lg shadow-black/10"
        brandClassName="text-[#fff4dd]"
        linkClassName="rounded-full px-3 py-2 text-[#fff4dd]/85 transition hover:bg-white/10 hover:text-[#f4a11a]"
        ctaClassName="bg-[#f4a11a] text-[#1f1b18] shadow-sm hover:bg-[#ffc85b]"
        menuButtonClassName="border-[#f4a11a]/35 text-[#fff4dd] hover:bg-white/10"
        mobilePanelClassName="border border-[#f4a11a]/25 bg-[#1f1b18]"
      />

      <section className="relative overflow-hidden bg-[#1f1b18] pt-28 text-[#fff4dd] md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(143,29,27,0.65),transparent_28%),radial-gradient(circle_at_84%_12%,rgba(244,161,26,0.24),transparent_24%),linear-gradient(135deg,#171211_0%,#271716_48%,#4b1114_100%)]" />
        <SpiceDots />
        <Container className="relative grid items-center gap-12 pb-20 md:grid-cols-[0.96fr_1.04fr] md:pb-28">
          <div>
            <Link
              to="/restaurant"
              className="mb-8 inline-flex items-center rounded-full border border-[#f4a11a]/30 bg-white/10 px-4 py-2 text-sm font-black text-[#fff4dd] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 hover:text-[#f4a11a]"
            >
              Back to Restaurant Collection
            </Link>
            <p className="inline-flex rounded-full bg-[#8f1d1b] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#ffc85b] shadow-xl shadow-[#8f1d1b]/30">
              Flame-Grilled • Spice Crafted • Family Style
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] md:text-7xl">
              A Bold Grill Experience Inspired by the Spice Route
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#ead9bd]">
              Flame-grilled tikka, rich house spices, warm naan, and family
              platters meet a polished modern dining room. SpiceRoute Grill
              brings the comfort of shared South Asian meals into a bold,
              premium restaurant experience.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row fade-in-up delay-300">
              <CTAButton
                href="#dishes"
                size="lg"
                className="rounded-full bg-[#f4a11a] text-[#1f1b18] shadow-xl shadow-[#f4a11a]/20 hover:-translate-y-0.5 hover:bg-[#ffc85b] hover:shadow-[#f4a11a]/35"
              >
                Explore Menu
              </CTAButton>
              <CTAButton
                href="#order"
                variant="outline"
                size="lg"
                className="rounded-full border-[#fff4dd] bg-white/5 text-[#fff4dd] hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-[#fff4dd]/10"
              >
                Reserve a Table
              </CTAButton>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["18+", "Signature Grills"],
                ["Fresh", "Naan Daily"],
                ["Family", "Platters"],
              ].map(([value, label], index) => (
                <div
                  key={label}
                  className={`reveal-card rounded-3xl border border-[#f4a11a]/25 bg-white/[0.07] p-5 backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#ffc85b]/50 hover:bg-white/[0.09] ${index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : ''}`}
                >
                  <p className="text-2xl font-black text-[#ffc85b] md:text-3xl">
                    {value}
                  </p>
                  <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-[#ead9bd]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="float-slow absolute -left-4 top-12 h-28 w-28 rounded-full bg-[#f4a11a]/25 blur-xl" />
            <div className="pulse-soft absolute -right-3 bottom-16 h-36 w-36 rounded-[2rem] bg-[#8f1d1b]/45 blur-sm" />
            <ImageWithFallback
              image={imageAssets.hero}
              className="shimmer-soft relative min-h-[460px] rounded-[2rem] border border-[#f4a11a]/25 shadow-2xl shadow-black/35"
            >
              <div className="absolute inset-x-8 top-8 flex justify-center gap-6">
                <span className="float-slow h-16 w-1 rounded-full bg-[#fff4dd]/30 blur-[1px]" />
                <span className="float-slow delay-200 h-24 w-1 rounded-full bg-[#f4a11a]/35 blur-[1px]" />
                <span className="float-slow delay-300 h-14 w-1 rounded-full bg-[#fff4dd]/25 blur-[1px]" />
              </div>
              <div className="absolute bottom-8 left-6 right-6 rounded-[1.5rem] border border-[#f4a11a]/30 bg-[#1f1b18]/85 p-5 backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f4a11a]">
                  Menu ticket
                </p>
                <p className="mt-2 text-2xl font-black">
                  Tonight's flame grill: tikka, kebab, lamb chops.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Mint chutney", "Garlic naan", "Pickled onion"].map(
                    (item) => (
                      <span
                        key={item}
                        className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold text-[#ead9bd]"
                      >
                        {item}
                      </span>
                    ),
                  )}
                </div>
              </div>
            </ImageWithFallback>
          </div>
        </Container>
      </section>

      <section id="about" className="relative overflow-hidden py-20 md:py-28">
        <SpiceDots />
        <Container className="relative grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div className="rounded-[2rem] border border-[#e4c58a] bg-[#8f1d1b] p-8 text-[#fff4dd] shadow-2xl shadow-[#8f1d1b]/15">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ffc85b]">
              Chef's spice note
            </p>
            <p className="mt-8 text-5xl font-black">21 spices</p>
            <p className="mt-4 leading-7 text-[#ead9bd]">
              Toasted, ground, and balanced for smoke, warmth, citrus
              brightness, and slow-building heat.
            </p>
            <div className="mt-8 h-2 w-28 rounded-full bg-[#f4a11a]" />
          </div>
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#8f1d1b]">
              About SpiceRoute Grill
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              A modern grill house shaped by routes, recipes, and shared tables.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#5c4035]">
              Our menu connects Indian and Pakistani grill traditions with
              polished hospitality: skewers over flame, creamy bowls, fragrant
              rice, fresh chutneys, and warm bread for tearing and sharing.
              Every plate is built for bold flavor without losing the warmth of
              a family meal.
            </p>
          </div>
        </Container>
      </section>

      <section
        id="dishes"
        className="bg-[#8f1d1b] py-20 text-[#fff4dd] md:py-28"
      >
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="font-black uppercase tracking-[0.24em] text-[#ffc85b]">
              Popular dishes
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Smoky, saucy, charred, and unforgettable.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {popularDishes.map((dish, index) => (
              <article
                key={dish.name}
                className={`group overflow-hidden rounded-[1.75rem] border border-[#f4a11a]/25 bg-[#1f1b18] shadow-xl shadow-black/15 transition duration-300 hover:-translate-y-1 hover:border-[#ffc85b] hover:shadow-2xl hover:shadow-black/25 ${index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : index === 3 ? 'delay-300' : ''}`}
              >
                <ImageWithFallback image={dish.image} className="aspect-[4/3]">
                  <span className="absolute right-4 top-4 rounded-full bg-[#fff4dd] px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#8f1d1b]">
                    {dish.label}
                  </span>
                </ImageWithFallback>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black leading-tight">
                      {dish.name}
                    </h3>
                    <p className="rounded-full bg-[#f4a11a] px-3 py-1 text-sm font-black text-[#1f1b18]">
                      {dish.price}
                    </p>
                  </div>
                  <p className="mt-3 leading-7 text-[#ead9bd]">{dish.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="mt-10 rounded-[1.75rem] border border-[#f4a11a]/25 bg-[#1f1b18]/65 p-6 shadow-xl shadow-black/10">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f4a11a]">
                  Menu preview
                </p>
                <h3 className="mt-2 text-3xl font-black">
                  A quick look at the grill board.
                </h3>
              </div>
              <p className="max-w-md leading-7 text-[#ead9bd]">
                Rolls, kebabs, wings, bowls, drinks, and family platters for
                dine-in or pickup.
              </p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {menuPreview.map((item, index) => (
                <div
                  key={item}
                  className={`reveal-card rounded-2xl border border-white/10 bg-white/[0.07] px-4 py-3 font-bold text-[#fff4dd] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#f4a11a]/35 hover:bg-white/[0.1] ${index % 4 === 1 ? 'delay-100' : index % 4 === 2 ? 'delay-200' : index % 4 === 3 ? 'delay-300' : ''}`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="journey" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="font-black uppercase tracking-[0.24em] text-[#8f1d1b]">
              Flavor journey
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Layered from first aroma to last bite.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-4">
            {flavorSteps.map((step, index) => (
              <article
                key={step.title}
                className={`rounded-[1.5rem] border border-[#e4c58a] bg-white/70 p-6 shadow-sm transition-all duration-300 ease-out hover:border-[#f4a11a]/60 hover:shadow-xl ${index === 1 ? 'delay-100' : index === 2 ? 'delay-200' : index === 3 ? 'delay-300' : ''}`}
              >
                <p className="text-3xl font-black text-[#f4a11a]">
                  0{index + 1}
                </p>
                <h3 className="mt-6 text-xl font-black">{step.title}</h3>
                <p className="mt-3 leading-7 text-[#5c4035]">{step.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="platters"
        className="bg-[#1f1b18] py-20 text-[#fff4dd] md:py-28"
      >
        <Container className="grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#f4a11a]">
              Catering and family platters
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Built for the whole table.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#ead9bd]">
              Choose mixed grills, biryani trays, naan baskets, chutney flights,
              and dessert add-ons for gatherings from an easy family dinner to a
              full celebration.
            </p>
            <div className="mt-8 rounded-3xl border border-[#f4a11a]/25 bg-white/[0.07] p-5">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffc85b]">
                Family platter callout
              </p>
              <p className="mt-2 text-xl font-black">
                Serves 4 to 6 with grilled meats, naan, rice, salad, and
                chutneys.
              </p>
            </div>
          </div>
          <div className="grid gap-5">
            <ImageWithFallback
              image={imageAssets.interior}
              className="min-h-[260px] rounded-[1.75rem] border border-[#f4a11a]/25"
            >
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-[#1f1b18]/80 p-4 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f4a11a]">
                  Modern dining room
                </p>
                <p className="mt-1 text-xl font-black">
                  Warm amber lights, charcoal walls, and deep red accents.
                </p>
              </div>
            </ImageWithFallback>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Family Mixed Grill",
                "Weekend Biryani Tray",
                "Office Lunch Set",
                "Celebration Feast",
              ].map((platter) => (
                <div
                  key={platter}
                  className="rounded-2xl border border-white/15 bg-white/[0.06] p-5"
                >
                  <h3 className="text-xl font-black">{platter}</h3>
                  <p className="mt-3 leading-7 text-[#ead9bd]">
                    Generous portions, fresh naan, sauces, and sides.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="font-black uppercase tracking-[0.24em] text-[#8f1d1b]">
              Testimonials
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Guests come for the flame and stay for the hospitality.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote
                key={item.name}
                className="rounded-[2rem] border border-[#e4c58a] bg-white p-8 shadow-sm"
              >
                <p className="text-xl font-bold leading-8">"{item.quote}"</p>
                <footer className="mt-6 border-t border-[#ead6aa] pt-5 text-sm font-black uppercase tracking-[0.18em] text-[#8f1d1b]">
                  {item.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section id="order" className="bg-[#f4a11a] py-20 md:py-28">
        <Container>
          <div className="grid gap-6 rounded-[2rem] border border-[#8f1d1b]/20 bg-[#fff4dd]/55 p-6 shadow-2xl shadow-[#8f1d1b]/15 md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div className="rounded-[1.5rem] bg-[#1f1b18] p-7 text-[#fff4dd]">
              <p className="font-black uppercase tracking-[0.22em] text-[#ffc85b]">
                Order or reserve
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Bring the spice home or gather at our table.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#ead9bd]">
                Order pickup, reserve a table, or ask about family platters for
                your next gathering. We will help you build the right mix of
                grills, naan, rice, and cooling sides.
              </p>
              <CTAButton
                href="tel:5550199090"
                size="lg"
                className="mt-8 rounded-full bg-[#f4a11a] text-[#1f1b18] hover:-translate-y-0.5 hover:bg-[#ffc85b]"
              >
                Call (555) 019-9090
              </CTAButton>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1.5rem] bg-[#fff4dd] p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#8f1d1b]">
                  Opening hours
                </p>
                <p className="mt-4 text-2xl font-black">
                  Tue - Sun, 12 PM - 10 PM
                </p>
                <p className="mt-2 leading-7 text-[#5c4035]">
                  Lunch, dinner, catering, and weekend family platters.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[#8f1d1b] p-6 text-[#fff4dd]">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ffc85b]">
                  Address and contact
                </p>
                <p className="mt-4 text-2xl font-black">610 Ember Road</p>
                <p className="mt-2 leading-7 text-[#ead9bd]">
                  Market Square, Suite 12
                  <br />
                  hello@spiceroute.example
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#e4c58a] py-8">
        <Container>
          <Link
            to="/restaurant"
            className="font-black text-[#8f1d1b] transition hover:text-[#f4a11a]"
          >
            Back to Restaurant Collection
          </Link>
        </Container>
      </section>

      <footer className="bg-[#1f1b18] py-12 text-[#fff4dd]">
        <Container className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <p className="text-2xl font-black">SpiceRoute Grill</p>
            <p className="mt-3 max-w-sm leading-7 text-[#ead9bd]">
              Flame-grilled Indian-Pakistani fusion plates, warm naan, and
              family-style hospitality.
            </p>
          </div>
          <div>
            <p className="font-black text-[#f4a11a]">Hours</p>
            <p className="mt-3 leading-7 text-[#ead9bd]">
              Tue - Sun
              <br />
              12 PM - 10 PM
            </p>
          </div>
          <div>
            <p className="font-black text-[#f4a11a]">Location</p>
            <p className="mt-3 leading-7 text-[#ead9bd]">
              610 Ember Road
              <br />
              Market Square
            </p>
          </div>
          <div>
            <p className="font-black text-[#f4a11a]">Social</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm font-bold">
              <a href="#order" className="hover:text-[#f4a11a]">
                Instagram
              </a>
              <a href="#order" className="hover:text-[#f4a11a]">
                Facebook
              </a>
              <a href="#order" className="hover:text-[#f4a11a]">
                Reviews
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
