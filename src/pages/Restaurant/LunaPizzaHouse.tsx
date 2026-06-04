import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container, CTAButton, RestaurantSubNav } from "../../components";

const imageAssets = {
  hero: {
    src: "/images/luna-pizza/hero-pizza.png",
    alt: "Handmade wood-fired pizza with melted mozzarella and basil on a rustic table",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_50%_46%,#f7cf7d_0_24%,transparent_25%),radial-gradient(circle_at_45%_42%,#f9f2df_0_6%,transparent_7%),radial-gradient(circle_at_58%_54%,#c92a22_0_5%,transparent_6%),radial-gradient(circle_at_38%_61%,#2f8f46_0_4%,transparent_5%),linear-gradient(135deg,#fff7e8,#f6d48b_45%,#c92a22)]",
    imagePrompt:
      "Premium modern pizza restaurant hero image, handmade wood-fired pizza on a rustic table, melted mozzarella, basil leaves, tomato sauce, warm Italian restaurant lighting, playful family-friendly atmosphere, cinematic food photography, no text, no logo, no watermark.",
  },
  margherita: {
    src: "/images/luna-pizza/margherita.png",
    alt: "Classic Margherita pizza with fresh mozzarella, basil, and tomato sauce",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_50%_52%,#f6d48b_0_31%,transparent_32%),radial-gradient(circle_at_42%_42%,#f9f2df_0_7%,transparent_8%),radial-gradient(circle_at_58%_60%,#2f8f46_0_5%,transparent_6%),radial-gradient(circle_at_61%_39%,#c92a22_0_6%,transparent_7%),linear-gradient(135deg,#fff7e8,#f2bc5b)]",
    imagePrompt:
      "Close-up of classic Margherita pizza with fresh mozzarella, basil leaves, rich tomato sauce, slightly charred crust, warm natural light, premium food photography, no text, no logo, no watermark.",
  },
  pepperoni: {
    src: "/images/luna-pizza/pepperoni.png",
    alt: "Pepperoni pizza with crispy edges, melted cheese, and golden crust",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_51%_50%,#f0bf63_0_31%,transparent_32%),radial-gradient(circle_at_42%_40%,#a91f18_0_6%,transparent_7%),radial-gradient(circle_at_58%_48%,#c92a22_0_6%,transparent_7%),radial-gradient(circle_at_48%_64%,#a91f18_0_7%,transparent_8%),linear-gradient(135deg,#fff7e8,#d83b2e)]",
    imagePrompt:
      "Modern pepperoni pizza with crispy edges, melted cheese, tomato sauce, golden crust, rustic Italian table, warm restaurant lighting, appetizing premium food photography, no text, no logo, no watermark.",
  },
  veggie: {
    src: "/images/luna-pizza/veggie.png",
    alt: "Vegetable pizza with peppers, mushrooms, olives, basil, and mozzarella",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_50%_50%,#f6d48b_0_31%,transparent_32%),radial-gradient(circle_at_39%_43%,#2f8f46_0_5%,transparent_6%),radial-gradient(circle_at_57%_38%,#7b3f98_0_4%,transparent_5%),radial-gradient(circle_at_62%_61%,#f36b2d_0_5%,transparent_6%),radial-gradient(circle_at_45%_63%,#f9f2df_0_6%,transparent_7%),linear-gradient(135deg,#fff7e8,#b7d879)]",
    imagePrompt:
      "Fresh vegetable pizza with colorful peppers, mushrooms, olives, basil, mozzarella, golden crust, bright modern pizza restaurant style, clean food photography, no text, no logo, no watermark.",
  },
  interior: {
    src: "/images/luna-pizza/interior.png",
    alt: "Modern family-friendly pizza restaurant interior with warm lights and red and green accents",
    fallbackStyle:
      "bg-[linear-gradient(90deg,rgba(201,42,34,0.18)_1px,transparent_1px),linear-gradient(180deg,#fff7e8,#f3dfbc_45%,#2f8f46)] [background-size:38px_38px]",
    imagePrompt:
      "Modern family-friendly pizza restaurant interior, warm lights, red and green Italian accents, cozy booths, open kitchen feeling, casual premium atmosphere, cinematic interior photography, no people, no text, no logo, no watermark.",
  },
};

const featuredPizzas = [
  {
    name: "Classic Luna Margherita",
    label: "Best Seller",
    price: "$16",
    detail:
      "San Marzano-style tomato sauce, fresh mozzarella, basil, olive oil, and a lightly blistered crust.",
    image: imageAssets.margherita,
  },
  {
    name: "Spicy Pepperoni Moon",
    label: "Spicy",
    price: "$19",
    detail:
      "Crispy pepperoni cups, mozzarella, tomato sauce, chili flakes, and a drizzle of hot honey.",
    image: imageAssets.pepperoni,
  },
  {
    name: "Garden Basil Veggie",
    label: "Fresh Pick",
    price: "$18",
    detail:
      "Roasted peppers, mushrooms, olives, basil pesto, mozzarella, and a bright tomato base.",
    image: imageAssets.veggie,
  },
  {
    name: "Four Cheese White Pizza",
    label: "Family Favorite",
    price: "$20",
    detail:
      "Mozzarella, ricotta, parmesan, provolone, garlic cream, cracked pepper, and fresh herbs.",
    image: imageAssets.hero,
  },
];

const menuPreview = [
  "Margherita Pizza",
  "Pepperoni Pizza",
  "BBQ Chicken Pizza",
  "Veggie Supreme",
  "Garlic Knots",
  "Caesar Salad",
  "Mozzarella Sticks",
  "Family Pizza Bundle",
];

const ingredientHighlights = [
  {
    title: "Fresh dough daily",
    text: "Our dough is mixed in-house, rested for flavor, and stretched by hand for a crisp, chewy bite.",
  },
  {
    title: "Bright tomato sauce",
    text: "A simple red sauce keeps the pizzas lively: tomato, garlic, herbs, olive oil, and just enough sweetness.",
  },
  {
    title: "Real mozzarella pull",
    text: "Creamy mozzarella melts into every slice, with ricotta, parmesan, and provolone layered into select pies.",
  },
  {
    title: "Basil and garden toppings",
    text: "Fresh basil, peppers, mushrooms, olives, onions, and greens bring color and balance to the board.",
  },
];

const familyDeals = [
  {
    name: "Two Large Pizzas + Garlic Knots",
    price: "$34",
    detail:
      "Choose any two large classics and add a warm tray of garlic knots with marinara for dipping.",
  },
  {
    name: "Family Night Bundle",
    price: "$48",
    detail:
      "Two large pizzas, Caesar salad, mozzarella sticks, and four fountain drinks for a full table.",
  },
  {
    name: "Kids Slice Combo",
    price: "$9",
    detail:
      "Cheese or pepperoni slice, a small drink, and a side of fruit or garlic knots.",
  },
  {
    name: "Weekend Party Box",
    price: "$72",
    detail:
      "Three large pizzas, garlic knots, salad, and dipping sauces for birthdays, game nights, and easy hosting.",
  },
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
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,transparent,rgba(36,33,29,0.06)_58%,rgba(36,33,29,0.2))]" />
      {children}
    </div>
  );
};

const IngredientDots = () => (
  <div className="pointer-events-none absolute inset-0 opacity-35 [background-image:radial-gradient(#c92a22_1.4px,transparent_1.4px),radial-gradient(#2f8f46_1.2px,transparent_1.2px)] [background-position:0_0,15px_15px] [background-size:30px_30px]" />
);

const FloatingIngredients = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    <span className="float-slow absolute left-[8%] top-[18%] h-10 w-10 rounded-full bg-[#c92a22]/18" />
    <span className="float-slow delay-200 absolute right-[10%] top-[22%] h-14 w-8 rounded-full bg-[#2f8f46]/20 rotate-12" />
    <span className="float-slow delay-300 absolute bottom-[14%] left-[18%] h-8 w-14 rounded-full bg-[#f6d48b]/55 -rotate-12" />
    <span className="pulse-soft absolute bottom-[20%] right-[18%] h-12 w-12 rounded-full border-4 border-[#c92a22]/18" />
  </div>
);

export function LunaPizzaHouse() {
  return (
    <main className="brand-motion motion-luna bg-[#fff7e8] text-[#24211d]">
      <RestaurantSubNav
        brand="Luna Pizza House"
        links={[
          { label: "Pizzas", href: "#pizzas" },
          { label: "Ingredients", href: "#ingredients" },
          { label: "Deals", href: "#deals" },
          { label: "Reviews", href: "#reviews" },
        ]}
        ctaLabel="Order Online"
        ctaHref="#order"
        className="border-b border-[#c92a22]/15 bg-[#fff7e8]/95 shadow-lg shadow-[#c92a22]/5"
        brandClassName="text-[#c92a22]"
        linkClassName="rounded-full px-3 py-2 text-[#6a5044] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#f7e6cb] hover:text-[#c92a22]"
        ctaClassName="bg-[#2f8f46] text-white shadow-sm shadow-[#2f8f46]/20 hover:bg-[#287a3d] hover:shadow-lg hover:shadow-[#2f8f46]/25"
        menuButtonClassName="border-[#c92a22]/20 text-[#c92a22] hover:bg-[#f7e6cb]"
        mobilePanelClassName="border border-[#c92a22]/15 bg-[#fff7e8]"
      />

      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,247,232,0.95),rgba(255,247,232,0.68)),radial-gradient(circle_at_14%_22%,rgba(201,42,34,0.2),transparent_25%),radial-gradient(circle_at_86%_16%,rgba(47,143,70,0.18),transparent_23%),radial-gradient(circle_at_72%_86%,rgba(246,212,139,0.5),transparent_28%)]" />
        <IngredientDots />
        <FloatingIngredients />
        <Container className="relative grid items-center gap-12 pb-20 md:grid-cols-[0.94fr_1.06fr] md:pb-28">
          <div>
            <Link
              to="/restaurant"
              className="mb-8 inline-flex items-center rounded-full border border-[#c92a22]/15 bg-white/70 px-4 py-2 text-sm font-black text-[#c92a22] shadow-sm backdrop-blur transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#2f8f46]/30 hover:text-[#2f8f46]"
            >
              Back to Restaurant Collection
            </Link>
            <p className="inline-flex rounded-full bg-[#2f8f46] px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-white shadow-xl shadow-[#2f8f46]/20">
              Handmade Pizza &bull; Fresh Ingredients &bull; Family Nights
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] text-[#24211d] md:text-7xl">
              Fresh From the Oven, Made for Sharing
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6a5044]">
              Luna Pizza House serves handcrafted pizzas with bubbly crusts,
              bright tomato sauce, fresh basil, and a dining room made for
              family-style meals. Come for one slice, stay for the whole table.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row fade-in-up delay-300">
              <CTAButton
                href="#pizzas"
                size="lg"
                className="rounded-full bg-[#c92a22] text-white shadow-xl shadow-[#c92a22]/20 hover:bg-[#aa211b] hover:shadow-[#c92a22]/30"
              >
                View Pizza Menu
              </CTAButton>
              <CTAButton
                href="#order"
                variant="outline"
                size="lg"
                className="rounded-full border-[#2f8f46] bg-white/65 text-[#2f8f46] hover:bg-[#eaf4dc] hover:shadow-[#2f8f46]/15"
              >
                Order Online
              </CTAButton>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["14+", "Signature Pizzas"],
                ["Fresh", "Dough Daily"],
                ["Family", "Combos"],
              ].map(([value, label], index) => (
                <div
                  key={label}
                  className={`reveal-card rounded-3xl border border-white bg-white/72 p-5 shadow-sm backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#c92a22]/20 hover:shadow-xl ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""}`}
                >
                  <p className="text-2xl font-black text-[#c92a22] md:text-3xl">
                    {value}
                  </p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-[#6a5044]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="float-slow absolute -left-5 top-10 h-28 w-28 rounded-full bg-[#c92a22]/18 blur-xl" />
            <div className="pulse-soft absolute -right-4 bottom-16 h-32 w-32 rounded-[2rem] bg-[#2f8f46]/18 blur-sm" />
            <ImageWithFallback
              image={imageAssets.hero}
              className="shimmer-soft relative min-h-[460px] rounded-[2rem] border border-white/80 shadow-2xl shadow-[#c92a22]/15"
            >
              <div className="absolute left-8 top-8 rounded-full bg-white/88 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#c92a22] shadow-lg">
                Oven-fresh tonight
              </div>
              <div className="absolute right-8 top-16 grid h-32 w-32 place-items-center rounded-full border-[12px] border-[#f6d48b] bg-[#c92a22] shadow-xl">
                <div className="h-14 w-14 rounded-full bg-[#f9f2df]" />
              </div>
              <div className="absolute bottom-8 left-6 right-6 rounded-[1.5rem] border border-white/70 bg-white/90 p-5 shadow-xl backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#2f8f46]">
                  Menu ticket
                </p>
                <p className="mt-2 text-2xl font-black text-[#24211d]">
                  Tonight's favorite: Margherita, pepperoni, veggie.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {["Garlic knots", "Basil pesto", "Hot honey"].map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#fff7e8] px-3 py-1 text-xs font-bold text-[#6a5044]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </ImageWithFallback>
          </div>
        </Container>
      </section>

      <section
        id="about"
        className="relative overflow-hidden bg-white py-20 md:py-28"
      >
        <IngredientDots />
        <Container className="relative grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-center">
          <div className="scale-in rounded-[2rem] border border-[#f0d8b0] bg-[#c92a22] p-8 text-white shadow-2xl shadow-[#c92a22]/15">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#fff7e8]">
              About Luna Pizza House
            </p>
            <p className="mt-8 text-5xl font-black">Handmade</p>
            <p className="mt-4 leading-7 text-white/86">
              Dough stretched by hand, toppings layered with care, and pies
              fired hot so every table gets that first-slice glow.
            </p>
            <div className="mt-8 h-2 w-28 rounded-full bg-[#f6d48b]" />
          </div>
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#2f8f46]">
              Warm dining, playful Italian flavor
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              A neighborhood pizza house built for easy dinners and happy noise.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#6a5044]">
              Luna keeps the menu familiar and the details thoughtful:
              slow-rested dough, rich tomato sauce, fresh mozzarella, garden
              toppings, crisp salads, and family bundles that make dinner feel
              effortless. It is casual, colorful, and ready for repeat visits.
            </p>
          </div>
        </Container>
      </section>

      <section id="pizzas" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="font-black uppercase tracking-[0.24em] text-[#c92a22]">
                Featured pizzas
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Round, bright, bubbling, and built to share.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#6a5044]">
              From classic Margherita to hot honey pepperoni, every pie gets a
              playful Luna finish and a crust worth talking about.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredPizzas.map((pizza, index) => (
              <article
                key={pizza.name}
                className={`group overflow-hidden rounded-[1.75rem] border border-[#f0d8b0] bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#c92a22]/25 hover:shadow-2xl hover:shadow-[#c92a22]/10 ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : index === 3 ? "delay-300" : ""}`}
              >
                <ImageWithFallback image={pizza.image} className="aspect-[4/3]">
                  <span className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#c92a22] shadow-md">
                    {pizza.label}
                  </span>
                </ImageWithFallback>
                <div className="p-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black leading-tight">
                      {pizza.name}
                    </h3>
                    <p className="rounded-full bg-[#2f8f46] px-3 py-1 text-sm font-black text-white">
                      {pizza.price}
                    </p>
                  </div>
                  <p className="mt-3 leading-7 text-[#6a5044]">
                    {pizza.detail}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-[#f0d8b0] bg-white/80 p-6 shadow-xl shadow-[#c92a22]/5">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#2f8f46]">
                  Menu preview
                </p>
                <h3 className="mt-2 text-3xl font-black">
                  Pizza night has options.
                </h3>
              </div>
              <p className="max-w-md leading-7 text-[#6a5044]">
                Pizzas, shareable starters, crisp salad, and bundles for the
                family table.
              </p>
            </div>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {menuPreview.map((item, index) => (
                <div
                  key={item}
                  className={`reveal-card rounded-2xl border border-[#f0d8b0] bg-[#fff7e8] px-4 py-3 font-bold text-[#24211d] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#c92a22]/25 hover:bg-white ${index % 4 === 1 ? "delay-100" : index % 4 === 2 ? "delay-200" : index % 4 === 3 ? "delay-300" : ""}`}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section
        id="ingredients"
        className="relative overflow-hidden bg-[#2f8f46] py-20 text-white md:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(255,247,232,0.16),transparent_25%),radial-gradient(circle_at_88%_72%,rgba(201,42,34,0.2),transparent_26%)]" />
        <Container className="relative grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#fff7e8]">
              Fresh ingredients
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Tomato, basil, dough, cheese, and fire.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/85">
              The Luna kitchen keeps the ingredient list simple and lively, then
              lets the oven do the loud part.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {ingredientHighlights.map((item, index) => (
              <article
                key={item.title}
                className={`rounded-[1.5rem] border border-white/15 bg-white/12 p-6 shadow-lg shadow-black/5 backdrop-blur transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/16 ${index % 2 === 1 ? "delay-100" : ""}`}
              >
                <div className="mb-6 h-10 w-16 rounded-full bg-[#fff7e8]/22" />
                <h3 className="text-2xl font-black">{item.title}</h3>
                <p className="mt-3 leading-7 text-white/82">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="deals" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="font-black uppercase tracking-[0.24em] text-[#c92a22]">
              Family deals
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Easy bundles for weeknights, parties, and post-game appetites.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {familyDeals.map((deal, index) => (
              <article
                key={deal.name}
                className={`rounded-[1.75rem] border-2 border-[#c92a22]/16 bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#c92a22]/40 hover:shadow-xl ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : index === 3 ? "delay-300" : ""}`}
              >
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#2f8f46]">
                  Family deal
                </p>
                <div className="mt-6 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black">{deal.name}</h3>
                  <span className="rounded-full bg-[#c92a22] px-3 py-1 text-sm font-black text-white">
                    {deal.price}
                  </span>
                </div>
                <p className="mt-4 leading-7 text-[#6a5044]">{deal.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-[1fr_0.95fr] md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#2f8f46]">
              Dine in or carry out
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              A bright room for birthdays, date nights, and casual family meals.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[#6a5044]">
              Warm lights, cozy booths, a busy open-kitchen feeling, and a menu
              built for sharing make Luna feel like a real neighborhood
              favorite.
            </p>
          </div>
          <ImageWithFallback
            image={imageAssets.interior}
            className="min-h-[340px] rounded-[2rem] border border-[#f0d8b0] shadow-2xl shadow-[#2f8f46]/10"
          >
            <div className="absolute bottom-6 left-6 right-6 rounded-[1.5rem] bg-white/90 p-5 shadow-xl backdrop-blur">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c92a22]">
                Open daily
              </p>
              <p className="mt-1 text-2xl font-black text-[#24211d]">
                12 PM - 10 PM for lunch, dinner, and pickup.
              </p>
            </div>
          </ImageWithFallback>
        </Container>
      </section>

      <section id="reviews" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="font-black uppercase tracking-[0.24em] text-[#c92a22]">
              Customer reviews
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Friday-night regulars, family tables, and crust fans agree.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <blockquote
                key={item.name}
                className={`rounded-[2rem] border border-[#f0d8b0] bg-white p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""}`}
              >
                <p className="text-xl font-bold leading-8">"{item.quote}"</p>
                <footer className="mt-6 border-t border-[#f0d8b0] pt-5 text-sm font-black uppercase tracking-[0.18em] text-[#c92a22]">
                  {item.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="order"
        className="relative overflow-hidden bg-[#c92a22] py-20 text-white md:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(255,247,232,0.18),transparent_24%),radial-gradient(circle_at_82%_78%,rgba(47,143,70,0.22),transparent_26%)]" />
        <Container className="relative">
          <div className="grid gap-6 rounded-[2rem] border border-white/20 bg-white/10 p-6 shadow-2xl shadow-[#24211d]/15 backdrop-blur md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div className="rounded-[1.5rem] bg-[#24211d] p-7 text-white">
              <p className="font-black uppercase tracking-[0.22em] text-[#f6d48b]">
                Order online CTA
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Pizza night starts with one warm box.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
                Order pickup, call ahead for family bundles, or gather in the
                dining room for a casual Italian meal with fresh pies and plenty
                to share.
              </p>
              <CTAButton
                href="tel:5550122200"
                size="lg"
                className="mt-8 rounded-full bg-white text-[#c92a22] hover:bg-[#fff7e8]"
              >
                Call (555) 012-2200
              </CTAButton>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1.5rem] bg-white p-6 text-[#24211d]">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#2f8f46]">
                  Opening hours
                </p>
                <p className="mt-4 text-2xl font-black">Daily, 12 PM - 10 PM</p>
                <p className="mt-2 leading-7 text-[#6a5044]">
                  Lunch slices, dinner pies, pickup, and weekend party boxes.
                </p>
              </div>
              <div className="rounded-[1.5rem] bg-[#fff7e8] p-6 text-[#24211d]">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c92a22]">
                  Address and contact
                </p>
                <p className="mt-4 text-2xl font-black">42 Crescent Street</p>
                <p className="mt-2 leading-7 text-[#6a5044]">
                  Little Market Corner
                  <br />
                  hello@lunapizza.example
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#f0d8b0] bg-white py-8">
        <Container>
          <Link
            to="/restaurant"
            className="font-black text-[#c92a22] transition hover:text-[#2f8f46]"
          >
            Back to Restaurant Collection
          </Link>
        </Container>
      </section>

      <footer className="bg-[#24211d] py-12 text-white">
        <Container className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <p className="text-2xl font-black">Luna Pizza House</p>
            <p className="mt-3 max-w-sm leading-7 text-white/70">
              Handmade pizza, fresh toppings, playful Italian energy, and easy
              family dinners.
            </p>
          </div>
          <div>
            <p className="font-black text-[#f6d48b]">Hours</p>
            <p className="mt-3 leading-7 text-white/70">
              Daily
              <br />
              12 PM - 10 PM
            </p>
          </div>
          <div>
            <p className="font-black text-[#f6d48b]">Location</p>
            <p className="mt-3 leading-7 text-white/70">
              42 Crescent Street
              <br />
              Little Market Corner
            </p>
          </div>
          <div>
            <p className="font-black text-[#f6d48b]">Social</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm font-bold">
              <a href="#order" className="transition hover:text-[#f6d48b]">
                Instagram
              </a>
              <a href="#order" className="transition hover:text-[#f6d48b]">
                Facebook
              </a>
              <a href="#order" className="transition hover:text-[#f6d48b]">
                Reviews
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
