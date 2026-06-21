import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container, CTAButton, RestaurantSubNav } from "../../components";

const imageAssets = {
  hero: {
    src: "/images/luna-pizza/hero-pizza.png",
    alt: "Handmade wood-fired pizza with melted mozzarella and basil on a rustic table",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_50%_46%,#f7cf7d_0_24%,transparent_25%),radial-gradient(circle_at_45%_42%,#f9f2df_0_6%,transparent_7%),radial-gradient(circle_at_58%_54%,#c92a22_0_5%,transparent_6%),radial-gradient(circle_at_38%_61%,#2f8f46_0_4%,transparent_5%),linear-gradient(135deg,#fff7e8,#f6d48b_45%,#c92a22)]",
  },
  margherita: {
    src: "/images/luna-pizza/margherita.png",
    alt: "Classic Margherita pizza with fresh mozzarella, basil, and tomato sauce",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_50%_52%,#f6d48b_0_31%,transparent_32%),radial-gradient(circle_at_42%_42%,#f9f2df_0_7%,transparent_8%),radial-gradient(circle_at_58%_60%,#2f8f46_0_5%,transparent_6%),radial-gradient(circle_at_61%_39%,#c92a22_0_6%,transparent_7%),linear-gradient(135deg,#fff7e8,#f2bc5b)]",
  },
  pepperoni: {
    src: "/images/luna-pizza/pepperoni.png",
    alt: "Pepperoni pizza with crispy edges, melted cheese, and golden crust",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_51%_50%,#f0bf63_0_31%,transparent_32%),radial-gradient(circle_at_42%_40%,#a91f18_0_6%,transparent_7%),radial-gradient(circle_at_58%_48%,#c92a22_0_6%,transparent_7%),radial-gradient(circle_at_48%_64%,#a91f18_0_7%,transparent_8%),linear-gradient(135deg,#fff7e8,#d83b2e)]",
  },
  veggie: {
    src: "/images/luna-pizza/veggie.png",
    alt: "Vegetable pizza with peppers, mushrooms, olives, basil, and mozzarella",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_50%_50%,#f6d48b_0_31%,transparent_32%),radial-gradient(circle_at_39%_43%,#2f8f46_0_5%,transparent_6%),radial-gradient(circle_at_57%_38%,#7b3f98_0_4%,transparent_5%),radial-gradient(circle_at_62%_61%,#f36b2d_0_5%,transparent_6%),radial-gradient(circle_at_45%_63%,#f9f2df_0_6%,transparent_7%),linear-gradient(135deg,#fff7e8,#b7d879)]",
  },
  interior: {
    src: "/images/luna-pizza/interior.png",
    alt: "Modern family-friendly pizza restaurant interior with warm lights and red and green accents",
    fallbackStyle:
      "bg-[linear-gradient(90deg,rgba(201,42,34,0.18)_1px,transparent_1px),linear-gradient(180deg,#fff7e8,#f3dfbc_45%,#2f8f46)] [background-size:38px_38px]",
  },
};

const pizzaBoard = [
  {
    name: "Luna Margherita",
    tag: "Best seller",
    price: "$16",
    image: imageAssets.margherita,
    detail: "Tomato, mozzarella, basil, olive oil, blistered crust.",
  },
  {
    name: "Pepperoni Moon",
    tag: "Hot honey",
    price: "$19",
    image: imageAssets.pepperoni,
    detail: "Pepperoni cups, mozzarella, chili flakes, hot honey.",
  },
  {
    name: "Garden Basil Veggie",
    tag: "Fresh pick",
    price: "$18",
    image: imageAssets.veggie,
    detail: "Peppers, mushrooms, olives, pesto, mozzarella.",
  },
  {
    name: "Four Cheese White",
    tag: "Family favorite",
    price: "$20",
    image: imageAssets.hero,
    detail: "Mozzarella, ricotta, parmesan, provolone, garlic cream.",
  },
];

const builderSteps = [
  ["01", "Pick a crust", "Classic hand-stretched, thin crisp, or family pan."],
  ["02", "Choose sauce", "Tomato red, basil pesto, garlic cream, or spicy arrabbiata."],
  ["03", "Layer toppings", "Mozzarella, pepperoni, basil, peppers, olives, mushrooms."],
  ["04", "Finish it", "Hot honey, chili flakes, parmesan, herbs, or olive oil."],
];

const sliceCombos = [
  ["Lunch Slice + Salad", "$11", "One hot slice, side salad, fountain drink."],
  ["Two Pies + Knots", "$34", "Two large classics and a tray of garlic knots."],
  ["Family Night Bundle", "$48", "Two pizzas, Caesar salad, mozzarella sticks, drinks."],
  ["Weekend Party Box", "$72", "Three large pizzas, garlic knots, salad, sauces."],
];

const menuItems = [
  ["Margherita Pizza", "$16"],
  ["Pepperoni Pizza", "$19"],
  ["BBQ Chicken Pizza", "$20"],
  ["Veggie Supreme", "$18"],
  ["Garlic Knots", "$7"],
  ["Caesar Salad", "$10"],
  ["Mozzarella Sticks", "$9"],
  ["Family Pizza Bundle", "$48"],
];

const testimonials = [
  {
    quote:
      "Luna feels like the pizza place every neighborhood wants. The Margherita is simple, fresh, and so good with the garlic knots.",
    name: "Mia Hernandez",
  },
  {
    quote:
      "We bring the kids after soccer practice and everyone finds something. Fast, warm, friendly, and the crust is perfect.",
    name: "Daniel Brooks",
  },
  {
    quote:
      "The Spicy Pepperoni Moon is our Friday ritual now. Crispy pepperoni, hot honey, and a really fun dining room.",
    name: "Priya Shah",
  },
];

function PizzaImage({
  image,
  className = "",
  children,
}: {
  image: (typeof imageAssets)[keyof typeof imageAssets];
  className?: string;
  children?: ReactNode;
}) {
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
      {children}
    </div>
  );
}

function SliceMark({ className = "" }: { className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-t-[12rem] bg-[#f6d48b] shadow-xl shadow-[#c92a22]/12 ${className}`}
    >
      <span className="absolute left-1/2 top-8 h-8 w-8 rounded-full bg-[#c92a22]" />
      <span className="absolute left-1/3 top-24 h-7 w-7 rounded-full bg-[#2f8f46]" />
      <span className="absolute right-1/4 top-36 h-8 w-8 rounded-full bg-white/85" />
      <span className="absolute bottom-0 left-0 right-0 h-10 bg-[#c98a3c]" />
    </div>
  );
}

export function LunaPizzaHouse() {
  return (
    <main className="brand-motion motion-luna bg-[#fff7e8] text-[#24211d]">
      <RestaurantSubNav
        brand="Luna Pizza House"
        links={[
          { label: "Order Flow", href: "#order-flow" },
          { label: "Pizza Board", href: "#pizza-board" },
          { label: "Build", href: "#build" },
          { label: "Combos", href: "#combos" },
          { label: "Order", href: "#order" },
        ]}
        ctaLabel="Order Online"
        ctaHref="#order"
        className="border-b border-[#c92a22]/15 bg-[#fff7e8]/95 shadow-lg shadow-[#c92a22]/5"
        brandClassName="text-[#c92a22]"
        linkClassName="px-3 py-2 text-[#6a5044] transition-all duration-300 ease-out hover:bg-[#f7e6cb] hover:text-[#c92a22]"
        ctaClassName="bg-[#2f8f46] text-white shadow-sm shadow-[#2f8f46]/20 hover:bg-[#287a3d]"
        menuButtonClassName="border-[#c92a22]/20 text-[#c92a22] hover:bg-[#f7e6cb]"
        mobilePanelClassName="border border-[#c92a22]/15 bg-[#fff7e8]"
      />

      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(201,42,34,0.08)_1px,transparent_1px),linear-gradient(rgba(47,143,70,0.08)_1px,transparent_1px)] bg-[size:34px_34px]" />
        <Container className="relative pb-14 md:pb-20">
          <div className="grid min-h-[720px] overflow-hidden border-2 border-[#24211d] bg-white shadow-[12px_12px_0_#c92a22] lg:grid-cols-[0.92fr_1.08fr]">
            <div className="flex flex-col justify-between border-b-2 border-[#24211d] p-6 md:p-10 lg:border-b-0 lg:border-r-2">
              <div>
                <div className="inline-flex bg-[#2f8f46] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-white">
                  Handmade pizza / slices / family boxes
                </div>
                <h1 className="mt-8 max-w-4xl text-6xl font-black uppercase leading-[0.86] tracking-normal md:text-8xl">
                  Pizza night, built fast.
                </h1>
                <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-[#6a5044]">
                  Pick a pie, build a half-and-half, add knots, grab a booth, or
                  take the whole thing home warm. Luna turns pizza night into a
                  clean, colorful ordering experience.
                </p>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  ["14+", "signature pies"],
                  ["12 PM", "first slices"],
                  ["48", "bundle price"],
                ].map(([value, label]) => (
                  <div key={label} className="border-2 border-[#24211d] bg-[#fff7e8] p-4">
                    <p className="text-3xl font-black text-[#c92a22]">{value}</p>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.14em] text-[#6a5044]">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#order-flow" size="lg" className="bg-[#c92a22] text-white hover:bg-[#aa211b]">
                  Start Your Order
                </CTAButton>
                <CTAButton href="#pizza-board" variant="outline" size="lg" className="border-[#24211d] text-[#24211d] hover:bg-[#fff0d7]">
                  See Pizza Board
                </CTAButton>
              </div>
            </div>

            <div className="relative grid min-h-[520px] grid-rows-[1fr_auto] bg-[#f6d48b]">
              <PizzaImage image={imageAssets.hero} className="min-h-[520px]">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,33,29,0.06),rgba(36,33,29,0.56))]" />
                <div className="absolute left-6 top-6 bg-white px-4 py-3 text-xs font-black uppercase tracking-[0.2em] text-[#c92a22] shadow-lg">
                  Hot out of the oven
                </div>
                <div className="absolute bottom-6 left-6 right-6 border-2 border-[#24211d] bg-white/92 p-5 shadow-[8px_8px_0_#24211d] backdrop-blur">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2f8f46]">
                    Tonight's easy order
                  </p>
                  <p className="mt-2 text-3xl font-black">
                    Two pies, garlic knots, Caesar salad.
                  </p>
                </div>
              </PizzaImage>
              <div className="grid grid-cols-3 border-t-2 border-[#24211d] bg-white text-center">
                {["Dine in", "Pickup", "Family boxes"].map((item) => (
                  <a
                    key={item}
                    href="#order"
                    className="border-r-2 border-[#24211d] px-3 py-4 text-sm font-black uppercase tracking-[0.12em] text-[#c92a22] last:border-r-0 hover:bg-[#fff0d7]"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="order-flow" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[18rem_1fr]">
            <aside className="bg-[#24211d] p-7 text-white">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f6d48b]">
                Order flow
              </p>
              <h2 className="mt-4 text-4xl font-black uppercase leading-none">
                Choose your pizza path.
              </h2>
              <p className="mt-6 leading-7 text-white/70">
                A pizza-house UX should feel quick and obvious. These blocks
                make the core customer choices clear before the menu gets dense.
              </p>
            </aside>

            <div className="grid gap-px bg-[#24211d] md:grid-cols-3">
              {[
                ["Grab slices", "Fast lunch, quick counter order, add a drink."],
                ["Build a pie", "Choose crust, sauce, toppings, finishers."],
                ["Feed a table", "Bundles for families, teams, and parties."],
              ].map(([title, text], index) => (
                <article key={title} className="bg-[#fff7e8] p-7">
                  <SliceMark className="mb-8 h-28 w-24" />
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#2f8f46]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-3 text-3xl font-black uppercase leading-none">
                    {title}
                  </h3>
                  <p className="mt-4 leading-7 text-[#6a5044]">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="pizza-board" className="bg-[#24211d] py-20 text-white md:py-28">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f6d48b]">
                Pizza board
              </p>
              <h2 className="mt-3 text-5xl font-black uppercase leading-none md:text-7xl">
                Four pies, zero confusion.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-white/70">
              Bigger images, tighter copy, and obvious pricing make the menu
              faster to scan than a standard card grid.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <PizzaImage image={imageAssets.margherita} className="min-h-[520px] border-2 border-white/16">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(36,33,29,0.76))]" />
              <div className="absolute bottom-6 left-6 right-6 bg-[#c92a22] p-6 shadow-xl">
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#f6d48b]">
                  House favorite
                </p>
                <p className="mt-2 text-3xl font-black">Luna Margherita, always first.</p>
              </div>
            </PizzaImage>

            <div className="border-y border-white/16">
              {pizzaBoard.map((pizza, index) => (
                <article
                  key={pizza.name}
                  className="grid gap-5 border-b border-white/16 py-6 last:border-b-0 md:grid-cols-[4rem_1fr_auto] md:items-center"
                >
                  <span className="text-sm font-black uppercase tracking-[0.18em] text-[#f6d48b]">
                    0{index + 1}
                  </span>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-3xl font-black">{pizza.name}</h3>
                      <span className="bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#c92a22]">
                        {pizza.tag}
                      </span>
                    </div>
                    <p className="mt-3 max-w-2xl leading-7 text-white/70">{pizza.detail}</p>
                  </div>
                  <span className="text-3xl font-black text-[#f6d48b] md:text-right">
                    {pizza.price}
                  </span>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="build" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-start">
            <div className="border-2 border-[#24211d] bg-white p-7 shadow-[10px_10px_0_#2f8f46]">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#2f8f46]">
                Build your pie
              </p>
              <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-6xl">
                Half-and-half? Extra basil? Done.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#6a5044]">
                Luna's builder turns customization into a four-step flow that
                feels playful without making ordering complicated.
              </p>
            </div>
            <div className="grid gap-px bg-[#24211d]">
              {builderSteps.map(([number, title, text]) => (
                <article key={title} className="grid gap-4 bg-[#fff7e8] p-6 md:grid-cols-[4rem_1fr]">
                  <span className="text-2xl font-black text-[#c92a22]">{number}</span>
                  <div>
                    <h3 className="text-2xl font-black">{title}</h3>
                    <p className="mt-2 leading-7 text-[#6a5044]">{text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="combos" className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1.15fr]">
            <div>
              <p className="font-black uppercase tracking-[0.24em] text-[#c92a22]">
                Combos and bundles
              </p>
              <h2 className="mt-3 text-5xl font-black uppercase leading-none md:text-6xl">
                Feed the table fast.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#6a5044]">
                Designed for families, game nights, and post-practice appetites.
              </p>
            </div>
            <div className="grid gap-px bg-[#24211d]">
              {sliceCombos.map(([name, price, detail]) => (
                <article key={name} className="grid gap-4 bg-white p-5 md:grid-cols-[1fr_auto] md:items-center">
                  <div>
                    <h3 className="text-2xl font-black">{name}</h3>
                    <p className="mt-2 leading-6 text-[#6a5044]">{detail}</p>
                  </div>
                  <span className="text-3xl font-black text-[#2f8f46]">{price}</span>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <PizzaImage image={imageAssets.interior} className="min-h-[430px] border-2 border-[#24211d] shadow-[12px_12px_0_#c92a22]">
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(36,33,29,0.66))]" />
              <div className="absolute bottom-6 left-6 right-6 bg-white/92 p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#c92a22]">
                  Dine in or carry out
                </p>
                <p className="mt-2 text-2xl font-black text-[#24211d]">
                  Open daily, 12 PM - 10 PM.
                </p>
              </div>
            </PizzaImage>
            <div>
              <p className="font-black uppercase tracking-[0.24em] text-[#2f8f46]">
                The room
              </p>
              <h2 className="mt-3 text-5xl font-black uppercase leading-none md:text-6xl">
                Bright enough for kids, good enough for date night.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#6a5044]">
                Warm lights, cozy booths, quick counter pickup, and a dining
                room built around casual Friday-night energy.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y-2 border-[#24211d] bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="border-2 border-[#24211d] bg-[#fff7e8] p-7 shadow-[8px_8px_0_#f6d48b]">
                <p className="text-xl font-bold leading-8">"{item.quote}"</p>
                <footer className="mt-8 border-t-2 border-[#24211d] pt-4 text-sm font-black uppercase tracking-[0.18em] text-[#c92a22]">
                  {item.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section id="order" className="bg-[#c92a22] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_23rem] lg:items-stretch">
            <div className="border-y-2 border-white/28 py-8">
              <p className="font-black uppercase tracking-[0.24em] text-[#f6d48b]">
                Order online
              </p>
              <h2 className="mt-4 text-5xl font-black uppercase leading-none md:text-7xl">
                Pizza night starts with one warm box.
              </h2>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="tel:5550122200" size="lg" className="bg-white text-[#c92a22] hover:bg-[#fff7e8]">
                  Call (555) 012-2200
                </CTAButton>
                <CTAButton href="#pizza-board" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Pizza Board
                </CTAButton>
              </div>
            </div>
            <div className="bg-[#24211d] p-6">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#f6d48b]">
                Store card
              </p>
              <div className="mt-6 space-y-5 text-white/78">
                <p className="text-2xl font-black text-white">Daily, 12 PM - 10 PM</p>
                <p>42 Crescent Street</p>
                <p>Little Market Corner</p>
                <p>Pickup, dine-in, and party boxes.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y-2 border-[#24211d] bg-white py-8">
        <Container className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link to="/restaurant" className="font-black text-[#c92a22] transition hover:text-[#2f8f46]">
            Back to Restaurant Collection
          </Link>
          <Link to="/" className="font-black text-[#6a5044] transition hover:text-[#24211d]">
            Back to 100 Designs Portfolio
          </Link>
        </Container>
      </section>

      <footer className="bg-[#24211d] py-12 text-white">
        <Container className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <p className="text-2xl font-black uppercase">Luna Pizza House</p>
            <p className="mt-3 max-w-sm leading-7 text-white/70">
              Handmade pizza, fresh toppings, playful Italian energy, and easy
              family dinners.
            </p>
          </div>
          <div>
            <p className="font-black text-[#f6d48b]">Hours</p>
            <p className="mt-3 leading-7 text-white/70">Daily<br />12 PM - 10 PM</p>
          </div>
          <div>
            <p className="font-black text-[#f6d48b]">Location</p>
            <p className="mt-3 leading-7 text-white/70">42 Crescent Street<br />Little Market Corner</p>
          </div>
          <div>
            <p className="font-black text-[#f6d48b]">Social</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm font-bold">
              <a href="#order" className="transition hover:text-[#f6d48b]">Instagram</a>
              <a href="#order" className="transition hover:text-[#f6d48b]">Facebook</a>
              <a href="#order" className="transition hover:text-[#f6d48b]">Reviews</a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
