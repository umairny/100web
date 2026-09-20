import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  Flame,
  Sparkles,
  Clock,
  MapPin,
  Phone,
  Check,
  ShoppingBag,
  Plus,
  Minus,
  Star,
  UtensilsCrossed,
  ArrowRight,
  Heart,
  ChevronRight,
  Pizza,
  CheckCircle2,
  Calendar,
  Users,
} from "lucide-react";
import { Container, CTAButton, SubWebsiteNav } from "../../components";
import { imageUrl } from "../../assets/optimized";

const imageAssets = {
  hero: {
    src: imageUrl("restaurent/luna-pizza/hero-pizza.webp"),
    alt: "Handmade wood-fired pizza with melted mozzarella and basil on a rustic table",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_50%_46%,#f0b44a_0_24%,transparent_25%),linear-gradient(135deg,#faf7f0,#e8dfd1_45%,#b92b1b)]",
  },
  margherita: {
    src: imageUrl("restaurent/luna-pizza/margherita.webp"),
    alt: "Classic Margherita pizza with fresh mozzarella, basil, and San Marzano sauce",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_50%_52%,#f0b44a_0_31%,transparent_32%),linear-gradient(135deg,#faf7f0,#ebd5a0)]",
  },
  pepperoni: {
    src: imageUrl("restaurent/luna-pizza/pepperoni.webp"),
    alt: "Crispy cup pepperoni pizza with hot honey and blistered crust",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_51%_50%,#e09f3e_0_31%,transparent_32%),linear-gradient(135deg,#faf7f0,#b92b1b)]",
  },
  veggie: {
    src: imageUrl("restaurent/luna-pizza/veggie.webp"),
    alt: "Fresh vegetable pizza with roasted peppers, mushrooms, olives, basil, and mozzarella",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_50%_50%,#f0b44a_0_31%,transparent_32%),linear-gradient(135deg,#faf7f0,#c8e0b2)]",
  },
  interior: {
    src: imageUrl("restaurent/luna-pizza/interior.webp"),
    alt: "Modern family-friendly pizza restaurant interior with warm ambient lighting and cozy booths",
    fallbackStyle:
      "bg-[linear-gradient(90deg,rgba(185,43,27,0.12)_1px,transparent_1px),linear-gradient(180deg,#faf7f0,#ebd5a0)] [background-size:38px_38px]",
  },
};

type PizzaCategory = "all" | "rosso" | "bianca" | "sides";

interface PizzaItem {
  id: string;
  name: string;
  category: "rosso" | "bianca" | "sides";
  label?: string;
  badgeColor?: string;
  price: number;
  ingredients: string;
  detail: string;
  spicy?: boolean;
  vegetarian?: boolean;
  image: (typeof imageAssets)[keyof typeof imageAssets];
}

const allPizzas: PizzaItem[] = [
  {
    id: "margherita",
    name: "Classic Luna Margherita",
    category: "rosso",
    label: "House Benchmark",
    badgeColor: "bg-[#1e5e3a] text-white",
    price: 17,
    ingredients: "San Marzano D.O.P., Fior di Latte, Wild Basil, Sicilian EVOO",
    detail:
      "Our 72-hour biga dough topped with hand-crushed tomatoes, local fresh curd, and torn basil baked at 900°F.",
    vegetarian: true,
    image: imageAssets.margherita,
  },
  {
    id: "pepperoni-moon",
    name: "Hot Honey Pepperoni Moon",
    category: "rosso",
    label: "Crowd Favorite",
    badgeColor: "bg-[#b92b1b] text-white",
    price: 21,
    ingredients: "Crispy Pepperoni Cups, Aged Mozzarella, Calabrian Chili, Mike's Hot Honey",
    detail:
      "Cupping pepperoni charred at the edges, balancing sweet wildflower hot honey and smoky chili flake.",
    spicy: true,
    image: imageAssets.pepperoni,
  },
  {
    id: "garden-basil",
    name: "Garden Harvest & Pesto",
    category: "rosso",
    label: "Farm Fresh",
    badgeColor: "bg-[#1e5e3a] text-white",
    price: 19,
    ingredients: "Charred Sweet Peppers, Cremini Mushrooms, Castelvetrano Olives, Nut-Free Basil Pesto",
    detail:
      "Roasted market vegetables over a bright tomato foundation with melted mozzarella and fresh pesto drops.",
    vegetarian: true,
    image: imageAssets.veggie,
  },
  {
    id: "four-cheese-white",
    name: "Four-Cheese Truffle Bianca",
    category: "bianca",
    label: "Chef's Selection",
    badgeColor: "bg-[#e09f3e] text-[#141210]",
    price: 22,
    ingredients: "Whole Milk Ricotta, Smoked Provolone, Fontina, Aged Parmigiano, White Truffle Oil",
    detail:
      "Zero tomato sauce. A creamy garlic-scented ricotta base layered with aged Italian cheeses and cracked pepper.",
    vegetarian: true,
    image: imageAssets.hero,
  },
  {
    id: "prosciutto-arugula",
    name: "Prosciutto & Baby Arugula",
    category: "bianca",
    label: "Dine-In Special",
    badgeColor: "bg-[#7a4b2a] text-white",
    price: 23,
    ingredients: "24-Month Prosciutto di Parma, Baby Arugula, Shaved Parmigiano, Lemon Crema",
    detail:
      "Crisp blistered crust baked with mozzarella, then finished cold with silky prosciutto, peppery greens, and balsamic.",
    image: imageAssets.hero,
  },
  {
    id: "garlic-knots",
    name: "Tuscan Garlic Knots (6 pcs)",
    category: "sides",
    label: "Must-Order Side",
    badgeColor: "bg-[#e09f3e] text-[#141210]",
    price: 8,
    ingredients: "Pizza Dough Knots, Roasted Garlic Confit Butter, Parsley, Warm Marinara Dipping",
    detail:
      "Golden pillows of baked pizza dough tossed in confit garlic, sea salt, and parmesan. Served with slow-simmered marinara.",
    vegetarian: true,
    image: imageAssets.margherita,
  },
  {
    id: "crispy-calamari",
    name: "Crispy Point Judith Calamari",
    category: "sides",
    label: "Table Sharing",
    badgeColor: "bg-[#141210] text-white",
    price: 14,
    ingredients: "Flash-Fried Calamari, Hot Cherry Peppers, Lemon Caper Aioli, Spicy Marinara",
    detail:
      "Tender, golden-fried calamari tossed with pickled hot cherry peppers for the ultimate communal table starter.",
    image: imageAssets.veggie,
  },
  {
    id: "burrata-caprese",
    name: "Heirloom Burrata Caprese",
    category: "sides",
    label: "Seasonal",
    badgeColor: "bg-[#1e5e3a] text-white",
    price: 15,
    ingredients: "4oz Creamy Burrata, Heirloom Campari Tomatoes, Basil Oil, Toasted Focaccia",
    detail:
      "Whole creamy burrata centered on marinated tomatoes, sea salt, and grilled wood-fired pizza dough triangles.",
    vegetarian: true,
    image: imageAssets.hero,
  },
];

const craftPillars = [
  {
    num: "01",
    title: "72-Hour Biga Ferment",
    description:
      "We build a 100% pre-ferment biga rested cold for 3 full days. The result is an ultra-digestible, fragrant crust that feels airy inside with a crisp bite.",
    tag: "Double-Zero Caputo 1924",
  },
  {
    num: "02",
    title: "San Marzano D.O.P. Tomatoes",
    description:
      "Grown in volcanic soil under Mount Vesuvius. Hand-crushed raw with Sicilian sea salt and never precooked, preserving pure natural sweetness.",
    tag: "Volcanic Mineral Sweetness",
  },
  {
    num: "03",
    title: "900°F Oak Wood Hearth",
    description:
      "Our Italian stone oven roars with white oak hardwood. Every pie is spun across the stone floor and kissed with charred leopard spots in 90 seconds flat.",
    tag: "Fast 90s Blister",
  },
  {
    num: "04",
    title: "Fresh Hand-Torn Fior di Latte",
    description:
      "Made fresh every morning from whole pasture milk. Stretched and torn by hand right before firing for that silky, non-greasy cheese melt.",
    tag: "Pure Local Creamery",
  },
];

const familyDeals = [
  {
    id: "bundle-table",
    name: "The Table Duo + Garlic Knots",
    tag: "Most Popular",
    price: 38,
    originalPrice: 48,
    savings: "Save $10",
    detail: "Choose any two large signature pizzas + a warm 6-pack of garlic knots with marinara.",
    includes: ["2 Large 16″ Table Pizzas", "6x Garlic Knots with Warm Dip", "Homemade Hot Honey Cup"],
  },
  {
    id: "bundle-family",
    name: "Luna Family Feast",
    tag: "Feeds 4–5",
    price: 54,
    originalPrice: 68,
    savings: "Save $14",
    detail: "Two large pizzas, large chopped Caesar salad, mozzarella sticks, and 4 fountain sodas.",
    includes: ["2 Large 16″ Pizzas", "Family Tuscan Caesar Salad", "Cheesy Mozzarella Sticks", "4 Italian Sodas or Drinks"],
  },
  {
    id: "bundle-party",
    name: "Friday Night Block Party",
    tag: "Feeds 8–10",
    price: 84,
    originalPrice: 106,
    savings: "Save $22",
    detail: "Three large pizzas, double garlic knots, heirloom burrata, and four artisan dipping sauces.",
    includes: ["3 Large 16″ Pizzas", "12x Garlic Knots", "Burrata Caprese Sharing Plate", "Dipping Flight: Marinara, Ranch, Hot Honey, Garlic Butter"],
  },
];

const testimonials = [
  {
    quote:
      "The crust at Luna ruined all other delivery pizza for me. That blistered, bubbly leopard edge with the hot honey pepperoni is absolute perfection.",
    name: "Marco Valenti",
    role: "Local Food Critic & Resident",
    rating: 5,
  },
  {
    quote:
      "We bring our entire extended family here every other Sunday. Fast service, cozy booths, and the Margherita feels straight out of Naples.",
    name: "Sophia Chen",
    role: "Neighborhood Regular",
    rating: 5,
  },
  {
    quote:
      "The 72-hour fermented dough is no joke—you can eat three slices and feel completely energized without the heavy carb slump.",
    name: "David Ross",
    role: "Culinary Enthusiast",
    rating: 5,
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
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
          onError={() => setIsLoaded(false)}
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-[#141210]/60 via-transparent to-transparent pointer-events-none" />
      {children}
    </div>
  );
};

export function LunaPizzaHouse() {
  const [activeCategory, setActiveCategory] = useState<PizzaCategory>("all");
  const [selectedSize, setSelectedSize] = useState<"12" | "16" | "18">("16");
  const [cart, setCart] = useState<Record<string, number>>({});
  const [reservationState, setReservationState] = useState({
    partySize: "2 Guests",
    time: "7:00 PM",
    seating: "Indoor Booth",
    isBooked: false,
  });

  // Cart total calculations
  const totalCartCount = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const totalCartPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = allPizzas.find((p) => p.id === id);
    const bundle = familyDeals.find((b) => b.id === id);
    const price = item ? item.price : bundle ? bundle.price : 0;
    return sum + price * qty;
  }, 0);

  const addToCart = (id: string) => {
    setCart((prev) => ({
      ...prev,
      [id]: (prev[id] || 0) + 1,
    }));
  };

  const removeFromCart = (id: string) => {
    setCart((prev) => {
      const next = { ...prev };
      if (next[id] > 1) {
        next[id] -= 1;
      } else {
        delete next[id];
      }
      return next;
    });
  };

  const filteredPizzas =
    activeCategory === "all"
      ? allPizzas
      : allPizzas.filter((item) => item.category === activeCategory);

  return (
    <main className="brand-motion motion-luna min-h-screen bg-[#faf7f0] text-[#141210] selection:bg-[#b92b1b] selection:text-white">
      {/* ── TOP ANNOUNCEMENT TICKER ────────────────────────────────────────── */}
      <div className="bg-[#141210] py-2 px-4 text-center text-xs font-semibold text-[#f0b44a] tracking-wide border-b border-[#2d2822]">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-3">
          <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Wood-Fired Hearth Active: Today’s Special is Hot Honey Pepperoni & Burrata Bianca</span>
          <span className="hidden sm:inline text-white/40">|</span>
          <a
            href="#deals"
            className="hidden sm:inline-flex items-center gap-1 font-bold text-white hover:text-[#f0b44a] transition underline"
          >
            Family Packs Available Tonight
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>

      {/* ── SLEEK BRAND NAVIGATION ─────────────────────────────────────────── */}
      <SubWebsiteNav
        brand="Luna Pizza House"
        links={[
          { label: "Handmade Pies", href: "#pizzas" },
          { label: "The Craft", href: "#craft" },
          { label: "Family Bundles", href: "#deals" },
          { label: "Atmosphere", href: "#atmosphere" },
          { label: "Reservations", href: "#reserve" },
        ]}
        ctaLabel="Order Pickup & Delivery"
        ctaHref="#order-box"
        className="sticky top-0 z-40 border-b border-[#e8dfd1] bg-[#faf7f0]/95 backdrop-blur-md shadow-sm"
        brandClassName="text-[#b92b1b] font-black tracking-tight hover:text-[#962113] transition"
        linkClassName="rounded-full px-3.5 py-1.5 text-xs font-bold tracking-wide text-[#5c4a3d] transition-all hover:bg-[#ebd5a0]/40 hover:text-[#b92b1b]"
        ctaClassName="rounded-full bg-[#b92b1b] px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-md shadow-[#b92b1b]/20 hover:bg-[#962113] hover:shadow-lg hover:shadow-[#b92b1b]/30"
        menuButtonClassName="border-[#e8dfd1] text-[#b92b1b] hover:bg-[#ebd5a0]/30"
        mobilePanelClassName="border border-[#e8dfd1] bg-[#faf7f0]"
      />

      {/* ── CINEMATIC ARTISANAL HERO ───────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#faf7f0] via-[#f5ede0] to-[#faf7f0] pt-12 pb-20 md:pt-16 md:pb-28">
        {/* Subtle background flourishes */}
        <div className="pointer-events-none absolute -left-20 top-20 h-96 w-96 rounded-full bg-[#b92b1b]/5 blur-3xl" />
        <div className="pointer-events-none absolute -right-20 top-40 h-96 w-96 rounded-full bg-[#e09f3e]/8 blur-3xl" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(#141210_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10" />

        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            {/* Breadcrumb back to showcase */}
            <div className="mb-6 flex items-center gap-3">
              <Link
                to="/restaurant"
                className="inline-flex items-center gap-2 rounded-full border border-[#e8dfd1] bg-white px-3.5 py-1.5 text-xs font-bold text-[#5c4a3d] shadow-2xs transition hover:border-[#b92b1b] hover:text-[#b92b1b]"
              >
                <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                <span>Restaurant Collection</span>
              </Link>

              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#1e5e3a]/25 bg-[#1e5e3a]/10 px-3 py-1 text-xs font-bold text-[#1e5e3a]">
                <Flame className="h-3 w-3 text-[#b92b1b]" />
                900°F Oak Wood-Fired
              </span>
            </div>

            <h1 className="text-4xl font-black tracking-tight text-[#141210] sm:text-6xl lg:text-7xl lg:leading-[1.05]">
              Pizza night with its own <span className="text-[#b92b1b] italic font-serif">orbit.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-[#5c4a3d] sm:text-lg">
              Hand-stretched 72-hour fermented biga dough, volcanic San Marzano sauce, and blistered leopard crusts that pass from hand to hand until the last slice disappears.
            </p>

            {/* Quick Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#pizzas"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#b92b1b] px-7 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-[#b92b1b]/25 transition hover:bg-[#962113] hover:scale-105 active:scale-95"
              >
                <Pizza className="h-4 w-4" />
                <span>Explore The Pies</span>
              </a>

              <a
                href="#reserve"
                className="inline-flex items-center gap-2 rounded-full border border-[#5c4a3d]/25 bg-white px-6 py-3.5 text-xs font-bold text-[#141210] shadow-sm transition hover:border-[#b92b1b] hover:text-[#b92b1b]"
              >
                <Users className="h-4 w-4 text-[#1e5e3a]" />
                <span>Reserve a Table</span>
              </a>
            </div>

            {/* Quality Badges */}
            <div className="mt-12 grid grid-cols-3 gap-3 border-t border-[#e8dfd1] pt-8 max-w-lg">
              <div className="rounded-2xl border border-[#e8dfd1] bg-white/70 p-3.5 text-left backdrop-blur-xs shadow-2xs">
                <p className="text-2xl font-black text-[#b92b1b]">72hr</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#5c4a3d]">Cold Ferment</p>
              </div>
              <div className="rounded-2xl border border-[#e8dfd1] bg-white/70 p-3.5 text-left backdrop-blur-xs shadow-2xs">
                <p className="text-2xl font-black text-[#e09f3e]">900°F</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#5c4a3d]">Hearth Heat</p>
              </div>
              <div className="rounded-2xl border border-[#e8dfd1] bg-white/70 p-3.5 text-left backdrop-blur-xs shadow-2xs">
                <p className="text-2xl font-black text-[#1e5e3a]">90 sec</p>
                <p className="text-[11px] font-bold uppercase tracking-wider text-[#5c4a3d]">Bake Time</p>
              </div>
            </div>
          </div>

          {/* Hero Visual Presentation */}
          <div className="relative mx-auto w-full max-w-lg">
            {/* Glowing Oven Aura */}
            <div className="absolute left-1/2 top-1/2 h-[340px] w-[340px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#b92b1b]/20 to-[#e09f3e]/25 blur-2xl" />

            {/* Circular Pizza Frame */}
            <div className="relative mx-auto aspect-square w-full max-w-[420px] rounded-full border-[10px] border-[#e8dfd1] bg-[#141210] p-2.5 shadow-2xl ring-1 ring-black/10">
              <ImageWithFallback
                image={imageAssets.hero}
                className="h-full w-full rounded-full"
              >
                <div className="absolute inset-0 rounded-full ring-2 ring-inset ring-white/10" />
              </ImageWithFallback>

              {/* Floating Ticket Badge 1: Fresh Out of Oven */}
              <div className="absolute -top-3 right-4 flex items-center gap-2 rounded-full border border-white/20 bg-[#141210]/95 px-4 py-2 text-xs font-black text-white shadow-xl backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-[#f0b44a] animate-ping" />
                <span>Wood-Fired Right Now</span>
              </div>

              {/* Floating Ticket Badge 2: Daily Favorite */}
              <div className="absolute -bottom-4 left-4 rounded-2xl border border-[#e8dfd1] bg-white p-4 shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="flex text-[#f0b44a]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-3.5 w-3.5 fill-[#f0b44a]" />
                    ))}
                  </div>
                  <span className="text-xs font-black text-[#141210]">4.9 / 5</span>
                </div>
                <p className="mt-1 text-xs font-bold text-[#5c4a3d]">
                  "Best crust in the entire state."
                </p>
                <p className="text-[10px] text-[#5c4a3d]/70 font-semibold mt-0.5">
                  Over 1,200 neighborhood reviews
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── INTERACTIVE CRUST & SIZE SELECTOR ──────────────────────────────── */}
      <section className="border-y border-[#e8dfd1] bg-white py-10">
        <Container>
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#b92b1b]">
                Table Sizing Guide
              </span>
              <h2 className="mt-1 text-2xl font-black text-[#141210]">
                Choose your table pie diameter
              </h2>
              <p className="text-xs text-[#5c4a3d]">
                Every size is stretched by hand on marble with unbleached organic flour.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {[
                { size: "12" as const, label: "12″ Personal Pie", slices: "6 Slices", feeds: "1–2 People" },
                { size: "16" as const, label: "16″ Classic Table", slices: "8 Slices", feeds: "2–3 People (Standard)" },
                { size: "18" as const, label: "18″ Big Luna Hearth", slices: "10 Slices", feeds: "4–5 People" },
              ].map((item) => (
                <button
                  key={item.size}
                  type="button"
                  onClick={() => setSelectedSize(item.size)}
                  className={`flex flex-col rounded-2xl border px-5 py-3 text-left transition-all ${
                    selectedSize === item.size
                      ? "border-[#b92b1b] bg-[#b92b1b]/5 ring-2 ring-[#b92b1b]/30 shadow-sm"
                      : "border-[#e8dfd1] bg-[#faf7f0] hover:border-[#b92b1b]/40 hover:bg-white"
                  }`}
                >
                  <span className="text-xs font-black text-[#141210]">{item.label}</span>
                  <span className="text-[11px] font-bold text-[#5c4a3d]">
                    {item.slices} · {item.feeds}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* ── ALL HANDMADE PIZZAS (TABBED DIRECTORY) ─────────────────────────── */}
      <section id="pizzas" className="py-20 md:py-28">
        <Container>
          {/* Header */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#b92b1b]/20 bg-[#b92b1b]/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#b92b1b]">
                <UtensilsCrossed className="h-3.5 w-3.5" />
                Hand-Crafted Menu
              </div>
              <h2 className="mt-3 text-3xl font-black tracking-tight text-[#141210] sm:text-5xl">
                Round, blistered, bubbling & built to share.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#5c4a3d]">
              From sweet San Marzano tomato foundations to decadent four-cheese white pies, every order is baked live in our 900°F stone hearth.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="mb-10 flex flex-wrap items-center gap-2 border-b border-[#e8dfd1] pb-4">
            {[
              { id: "all" as const, label: `All Items (${allPizzas.length})` },
              { id: "rosso" as const, label: "Red Pies (Rosso)" },
              { id: "bianca" as const, label: "White Pies (Bianca)" },
              { id: "sides" as const, label: "Knots & Starters" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  activeCategory === tab.id
                    ? "bg-[#141210] text-white shadow-md"
                    : "border border-[#e8dfd1] bg-white text-[#5c4a3d] hover:border-[#b92b1b] hover:text-[#b92b1b]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Pizza Cards Grid */}
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {filteredPizzas.map((pizza) => {
              const qty = cart[pizza.id] || 0;
              const displayPrice =
                pizza.category === "sides"
                  ? pizza.price
                  : selectedSize === "12"
                  ? pizza.price - 3
                  : selectedSize === "18"
                  ? pizza.price + 5
                  : pizza.price;

              return (
                <article
                  key={pizza.id}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-[#e8dfd1] bg-white shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#b92b1b]/40 hover:shadow-2xl hover:shadow-[#b92b1b]/10"
                >
                  {/* Visual Header */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#141210]">
                    <ImageWithFallback image={pizza.image} className="h-full w-full" />
                    {pizza.label && (
                      <span
                        className={`absolute left-3.5 top-3.5 rounded-full px-3 py-1 text-[10px] font-black uppercase tracking-wider shadow-md backdrop-blur-md ${
                          pizza.badgeColor || "bg-white text-[#141210]"
                        }`}
                      >
                        {pizza.label}
                      </span>
                    )}

                    {pizza.spicy && (
                      <span className="absolute right-3.5 top-3.5 flex items-center gap-1 rounded-full bg-red-600/90 px-2.5 py-1 text-[10px] font-bold text-white shadow-md">
                        <Flame className="h-3 w-3" />
                        Spicy
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-baseline justify-between gap-2">
                      <h3 className="text-lg font-black tracking-tight text-[#141210]">
                        {pizza.name}
                      </h3>
                      <span className="text-lg font-black text-[#b92b1b]">
                        ${displayPrice}
                      </span>
                    </div>

                    <p className="mt-1 text-xs font-semibold text-[#1e5e3a]">
                      {pizza.ingredients}
                    </p>

                    <p className="mt-3 flex-1 text-xs leading-relaxed text-[#5c4a3d]">
                      {pizza.detail}
                    </p>

                    {/* Action Bar / Quantity */}
                    <div className="mt-5 border-t border-[#e8dfd1] pt-4 flex items-center justify-between">
                      {qty > 0 ? (
                        <div className="flex items-center gap-3 rounded-full border border-[#b92b1b] bg-[#b92b1b]/5 px-3 py-1.5">
                          <button
                            type="button"
                            onClick={() => removeFromCart(pizza.id)}
                            className="text-[#b92b1b] hover:scale-125 transition"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <span className="text-xs font-black text-[#141210]">{qty}</span>
                          <button
                            type="button"
                            onClick={() => addToCart(pizza.id)}
                            className="text-[#b92b1b] hover:scale-125 transition"
                            aria-label="Increase quantity"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      ) : (
                        <button
                          type="button"
                          onClick={() => addToCart(pizza.id)}
                          className="flex items-center gap-1.5 rounded-full border border-[#e8dfd1] bg-[#faf7f0] px-3.5 py-1.5 text-xs font-bold text-[#141210] transition hover:border-[#b92b1b] hover:bg-[#b92b1b] hover:text-white"
                        >
                          <Plus className="h-3 w-3" />
                          <span>Add to Order</span>
                        </button>
                      )}

                      <span className="text-[10px] font-bold uppercase text-[#5c4a3d]/70">
                        {pizza.category === "sides" ? "Appetizer" : `${selectedSize}″ Pie`}
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── THE 4 PILLARS OF LUNA CRAFT (ELEVATED DARK STONE SECTION) ───────── */}
      <section id="craft" className="relative overflow-hidden bg-[#141210] py-24 text-white md:py-32">
        {/* Subtle wood-fired oven glow background */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-full max-w-7xl -translate-x-1/2 bg-[radial-gradient(circle_at_50%_0%,rgba(224,159,62,0.15),transparent_70%)]" />

        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#f0b44a]/25 bg-[#f0b44a]/10 px-4 py-1 text-xs font-black uppercase tracking-widest text-[#f0b44a]">
              <Sparkles className="h-3.5 w-3.5" />
              The Luna Standard
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight sm:text-5xl">
              Four non-negotiable rules of our dough & hearth.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
              Great pizza is deceptively simple: high-hydration flour, cold patience, and blistering oak heat. Here is why every slice tastes distinct.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {craftPillars.map((pillar) => (
              <div
                key={pillar.num}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-7 backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#f0b44a]/40 hover:bg-white/[0.07]"
              >
                <div>
                  <span className="font-mono text-3xl font-black text-[#f0b44a]">
                    {pillar.num}
                  </span>
                  <h3 className="mt-4 text-xl font-black text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-white/70">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4">
                  <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-[#f0b44a]">
                    <CheckCircle2 className="h-3 w-3 text-emerald-400" />
                    {pillar.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FAMILY BUNDLES & WEEKEND DEALS ─────────────────────────────────── */}
      <section id="deals" className="py-20 md:py-28 bg-[#f5ede0]/50 border-b border-[#e8dfd1]">
        <Container>
          <div className="mb-14 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#b92b1b]">
                Table Bundles
              </span>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#141210] sm:text-5xl">
                Easy bundles for weeknights, sports, and celebrations.
              </h2>
            </div>
            <p className="max-w-md text-sm leading-relaxed text-[#5c4a3d]">
              Pre-set combinations that save money and make dinner effortless. Every pack includes dipping sauces and homemade garlic knots.
            </p>
          </div>

          <div className="grid gap-7 lg:grid-cols-3">
            {familyDeals.map((deal) => {
              const qty = cart[deal.id] || 0;
              return (
                <div
                  key={deal.id}
                  className="flex flex-col justify-between rounded-3xl border-2 border-[#e8dfd1] bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#b92b1b]/50 hover:shadow-xl"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-[#1e5e3a] px-3.5 py-1 text-[10px] font-black uppercase tracking-wider text-white">
                        {deal.tag}
                      </span>
                      <span className="rounded-full bg-[#b92b1b]/10 px-3 py-1 text-xs font-bold text-[#b92b1b]">
                        {deal.savings}
                      </span>
                    </div>

                    <h3 className="mt-5 text-2xl font-black text-[#141210]">
                      {deal.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-[#5c4a3d]">
                      {deal.detail}
                    </p>

                    {/* Price Tag */}
                    <div className="mt-6 flex items-baseline gap-2">
                      <span className="text-4xl font-black text-[#141210]">
                        ${deal.price}
                      </span>
                      <span className="text-sm font-bold text-[#5c4a3d]/60 line-through">
                        ${deal.originalPrice}
                      </span>
                    </div>

                    {/* Included items */}
                    <ul className="mt-6 space-y-2.5 border-t border-[#e8dfd1] pt-6">
                      {deal.includes.map((inc) => (
                        <li key={inc} className="flex items-center gap-2 text-xs font-semibold text-[#5c4a3d]">
                          <Check className="h-4 w-4 text-[#1e5e3a] shrink-0" />
                          <span>{inc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8">
                    {qty > 0 ? (
                      <div className="flex items-center justify-between rounded-full border border-[#b92b1b] bg-[#b92b1b]/5 px-4 py-2.5">
                        <span className="text-xs font-black text-[#b92b1b]">{qty}x in Table Order</span>
                        <div className="flex items-center gap-3">
                          <button
                            type="button"
                            onClick={() => removeFromCart(deal.id)}
                            className="text-[#b92b1b] hover:scale-125 transition"
                          >
                            <Minus className="h-3.5 w-3.5" />
                          </button>
                          <button
                            type="button"
                            onClick={() => addToCart(deal.id)}
                            className="text-[#b92b1b] hover:scale-125 transition"
                          >
                            <Plus className="h-3.5 w-3.5" />
                          </button>
                        </div>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => addToCart(deal.id)}
                        className="w-full rounded-full bg-[#141210] py-3 text-xs font-black uppercase tracking-wider text-white shadow-md transition hover:bg-[#b92b1b] active:scale-95"
                      >
                        Add Bundle to Order
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── RESTAURANT ATMOSPHERE & DINE-IN ───────────────────────────────── */}
      <section id="atmosphere" className="py-20 md:py-28 bg-white">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#1e5e3a]">
              The Dining Room
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#141210] sm:text-5xl">
              Cozy booths, glowing ovens, and vinyl Italian records.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#5c4a3d]">
              Luna was designed around the warmth of the open-fire pass. Grab a booth under the globe lights, watch our pizzaiolos stretch dough in real-time, and pass garlic knot trays across a crowded table.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#e8dfd1] bg-[#faf7f0] p-4">
                <Clock className="h-5 w-5 text-[#b92b1b]" />
                <p className="mt-2 text-sm font-black text-[#141210]">Open 7 Days</p>
                <p className="text-xs text-[#5c4a3d] mt-0.5">12:00 PM – 10:00 PM</p>
              </div>

              <div className="rounded-2xl border border-[#e8dfd1] bg-[#faf7f0] p-4">
                <MapPin className="h-5 w-5 text-[#1e5e3a]" />
                <p className="mt-2 text-sm font-black text-[#141210]">Neighborhood Corner</p>
                <p className="text-xs text-[#5c4a3d] mt-0.5">42 Crescent St, Market Sq.</p>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="tel:5550122200"
                className="inline-flex items-center gap-2 rounded-full bg-[#1e5e3a] px-6 py-3 text-xs font-black uppercase tracking-wider text-white shadow-md hover:bg-[#16472b] transition"
              >
                <Phone className="h-3.5 w-3.5" />
                <span>Call (555) 012-2200</span>
              </a>

              <a
                href="#reserve"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#b92b1b] hover:underline"
              >
                <span>Check Table Availability</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>

          <div className="relative">
            <ImageWithFallback
              image={imageAssets.interior}
              className="aspect-[4/3] rounded-3xl border border-[#e8dfd1] shadow-2xl"
            >
              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/95 p-4 shadow-xl backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-wider text-[#b92b1b]">
                  Walk-Ins Welcome
                </p>
                <p className="text-sm font-bold text-[#141210] mt-0.5">
                  Counter seating & family booths always held for casual walk-ins.
                </p>
              </div>
            </ImageWithFallback>
          </div>
        </Container>
      </section>

      {/* ── CUSTOMER REVIEWS ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28 bg-[#faf7f0] border-t border-[#e8dfd1]">
        <Container>
          <div className="mx-auto max-w-xl text-center mb-14">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#b92b1b]">
              Verified Feedback
            </span>
            <h2 className="mt-2 text-3xl font-black text-[#141210] sm:text-4xl">
              Loved by pizza purists and family tables.
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((review) => (
              <div
                key={review.name}
                className="flex flex-col justify-between rounded-3xl border border-[#e8dfd1] bg-white p-7 shadow-xs"
              >
                <div>
                  <div className="flex text-[#f0b44a] mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-[#f0b44a]" />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed text-[#141210] font-medium italic">
                    "{review.quote}"
                  </p>
                </div>

                <div className="mt-6 border-t border-[#e8dfd1] pt-4">
                  <p className="text-sm font-black text-[#141210]">{review.name}</p>
                  <p className="text-xs text-[#5c4a3d]">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── INTERACTIVE RESERVATION / PICKUP MODULE ────────────────────────── */}
      <section id="reserve" className="py-20 md:py-28 bg-[#141210] text-white">
        <Container>
          <div
            id="order-box"
            className="grid gap-10 rounded-3xl border border-white/15 bg-gradient-to-br from-[#1c1917] via-[#141210] to-[#0a0908] p-8 md:p-14 shadow-2xl lg:grid-cols-2 lg:items-center"
          >
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#f0b44a]">
                Direct Hearth Reservations
              </span>
              <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
                Claim your table or order pickup tonight.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Large groups of 6+ or birthday parties can lock in their booth right here. For immediate hot pickup, our online ovens fire orders in under 20 minutes.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <CheckCircle2 className="h-4 w-4 text-[#f0b44a]" />
                  <span>Zero reservation deposit required</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <CheckCircle2 className="h-4 w-4 text-[#f0b44a]" />
                  <span>Curbside trunk pickup available on Crescent St</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <CheckCircle2 className="h-4 w-4 text-[#f0b44a]" />
                  <span>Gluten-friendly cauliflower crust available on request</span>
                </div>
              </div>
            </div>

            {/* Interactive Booking Card */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
              {reservationState.isBooked ? (
                <div className="text-center py-8">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-black text-white">Table Reserved!</h3>
                  <p className="text-xs text-white/70 mt-1">
                    Confirmed for {reservationState.partySize} at {reservationState.time} ({reservationState.seating}).
                  </p>
                  <p className="text-xs text-[#f0b44a] font-bold mt-2">
                    Confirmation SMS sent to your phone.
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      setReservationState((prev) => ({ ...prev, isBooked: false }))
                    }
                    className="mt-6 rounded-full border border-white/20 px-5 py-2 text-xs font-bold text-white hover:bg-white/10"
                  >
                    Modify Booking
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="text-lg font-black text-white">Table Reservation</h3>
                  <p className="text-xs text-white/60 mt-0.5">Instant booking confirmation</p>

                  <div className="mt-5 space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1.5">
                        Party Size
                      </label>
                      <select
                        value={reservationState.partySize}
                        onChange={(e) =>
                          setReservationState((prev) => ({ ...prev, partySize: e.target.value }))
                        }
                        className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs font-bold text-white focus:border-[#f0b44a] focus:outline-none"
                      >
                        <option value="1 Guest" className="bg-[#141210]">1 Guest</option>
                        <option value="2 Guests" className="bg-[#141210]">2 Guests (Date Night)</option>
                        <option value="4 Guests" className="bg-[#141210]">4 Guests (Family Table)</option>
                        <option value="6 Guests" className="bg-[#141210]">6 Guests (Party Booth)</option>
                        <option value="8+ Guests" className="bg-[#141210]">8+ Guests (Celebration)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1.5">
                          Time Slot
                        </label>
                        <select
                          value={reservationState.time}
                          onChange={(e) =>
                            setReservationState((prev) => ({ ...prev, time: e.target.value }))
                          }
                          className="w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 text-xs font-bold text-white focus:border-[#f0b44a] focus:outline-none"
                        >
                          <option value="5:30 PM" className="bg-[#141210]">5:30 PM</option>
                          <option value="6:15 PM" className="bg-[#141210]">6:15 PM</option>
                          <option value="7:00 PM" className="bg-[#141210]">7:00 PM (Peak)</option>
                          <option value="8:15 PM" className="bg-[#141210]">8:15 PM</option>
                          <option value="9:00 PM" className="bg-[#141210]">9:00 PM</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1.5">
                          Seating Area
                        </label>
                        <select
                          value={reservationState.seating}
                          onChange={(e) =>
                            setReservationState((prev) => ({ ...prev, seating: e.target.value }))
                          }
                          className="w-full rounded-xl border border-white/15 bg-white/10 px-3 py-2.5 text-xs font-bold text-white focus:border-[#f0b44a] focus:outline-none"
                        >
                          <option value="Indoor Booth" className="bg-[#141210]">Cozy Booth</option>
                          <option value="Hearth Counter" className="bg-[#141210]">Oven Counter</option>
                          <option value="Patio" className="bg-[#141210]">Outdoor Patio</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setReservationState((prev) => ({ ...prev, isBooked: true }))
                      }
                      className="w-full rounded-full bg-[#b92b1b] py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-[#b92b1b]/30 transition hover:bg-[#962113] active:scale-95"
                    >
                      Confirm Reservation Tonight
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ── STICKY TABLE ORDER INDICATOR (FLOATING ON SCREEN) ──────────────── */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center gap-4 rounded-full border border-white/20 bg-[#141210]/95 px-5 py-3 text-white shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#b92b1b] text-xs font-black">
                {totalCartCount}
              </span>
              <span className="text-xs font-bold">
                Table Order: <span className="text-[#f0b44a] font-black">${totalCartPrice}</span>
              </span>
            </div>

            <a
              href="#order-box"
              className="rounded-full bg-white px-4 py-1.5 text-xs font-black uppercase text-[#141210] hover:bg-[#f0b44a] transition"
            >
              Checkout
            </a>
          </div>
        </div>
      )}

      {/* ── FOOTER & SHOWCASE DIRECTORY ────────────────────────────────────── */}
      <footer className="border-t border-[#2d2822] bg-[#0d0c0a] py-14 text-white">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#b92b1b] text-sm font-black text-white">
                  🍕
                </div>
                <p className="text-xl font-black text-white">Luna Pizza House</p>
              </div>
              <p className="mt-3 max-w-sm text-xs leading-relaxed text-white/60">
                Handmade artisan pizza with 72-hour cold-fermented dough, San Marzano tomatoes, and wood-fired leopard crusts.
              </p>
              <div className="mt-5">
                <Link
                  to="/restaurant"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f0b44a] hover:underline"
                >
                  <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                  <span>Return to 100Web Restaurant Collection</span>
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#f0b44a]">Hours</p>
              <div className="mt-3 space-y-1 text-xs text-white/70">
                <p className="font-semibold text-white">Monday – Thursday</p>
                <p>12:00 PM – 9:30 PM</p>
                <p className="mt-2 font-semibold text-white">Friday – Sunday</p>
                <p>12:00 PM – 10:30 PM</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#f0b44a]">Location</p>
              <div className="mt-3 space-y-1 text-xs text-white/70">
                <p>42 Crescent Street</p>
                <p>Market Corner District</p>
                <p className="mt-2 text-white font-semibold">(555) 012-2200</p>
                <p>orders@lunapizzahouse.com</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#f0b44a]">Menu Quick Links</p>
              <ul className="mt-3 space-y-1.5 text-xs text-white/70 font-semibold">
                <li><a href="#pizzas" className="hover:text-white transition">Classic Margherita</a></li>
                <li><a href="#pizzas" className="hover:text-white transition">Hot Honey Pepperoni</a></li>
                <li><a href="#pizzas" className="hover:text-white transition">Four-Cheese Truffle</a></li>
                <li><a href="#deals" className="hover:text-white transition">Family Night Bundle</a></li>
                <li><a href="#reserve" className="hover:text-white transition">Reserve a Booth</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
            <p>© {new Date().getFullYear()} Luna Pizza House · Part of the 100Web Project Portfolio</p>
            <p>Designed with React 19, Tailwind CSS & Vite</p>
          </div>
        </Container>
      </footer>
    </main>
  );
}
