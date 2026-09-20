import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Leaf,
  Sparkles,
  Heart,
  Clock,
  MapPin,
  Phone,
  ShoppingBag,
  Plus,
  Minus,
  ArrowRight,
  Star,
  CheckCircle2,
  ShieldCheck,
  Droplet,
  Flame,
  Check,
  Activity,
  Zap,
  RotateCcw,
  Sliders,
  Calendar,
  Layers,
} from "lucide-react";
import { Container, SubWebsiteNav } from "../../components";
import { imageUrl } from "../../assets/optimized";

const imageAssets = {
  hero: {
    src: imageUrl("restaurent/freshbowl-cafe/hero-bowl.webp"),
    alt: "Top-down organic warm grain bowl with avocado, quinoa, chickpeas, kale, and lemon tahini dressing",
  },
  salmon: {
    src: imageUrl("restaurent/freshbowl-cafe/salmon-bowl.jpg"),
    alt: "Seared wild salmon grain bowl with sliced avocado, edamame, sweet potatoes, and green goddess dressing",
  },
  avocado: {
    src: imageUrl("restaurent/freshbowl-cafe/avacado.webp"),
    alt: "Avocado garden bowl with quinoa, cucumber, fresh herbs, and tahini drizzle",
  },
  acai: {
    src: imageUrl("restaurent/freshbowl-cafe/acai-bowl.jpg"),
    alt: "Vibrant deep purple organic acai smoothie bowl with fresh strawberries, blueberries, kiwi, and chia seeds",
  },
  sunrise: {
    src: imageUrl("restaurent/freshbowl-cafe/sunrise.webp"),
    alt: "Sunrise mango smoothie bowl topped with toasted coconut, berries, and granola",
  },
  protein: {
    src: imageUrl("restaurent/freshbowl-cafe/protein.webp"),
    alt: "Protein harvest bowl with spiced chickpeas, brown rice, roasted sweet potato, and greens",
  },
  interior: {
    src: imageUrl("restaurent/freshbowl-cafe/cafe-interior.jpg"),
    alt: "Sunlit modern organic cafe interior with blonde oak tables, terrazzo counter, and indoor tropical plants",
  },
  coldPressed: {
    src: imageUrl("restaurent/freshbowl-cafe/cold-pressed.jpg"),
    alt: "Row of fresh cold-pressed organic juices: green kale-cucumber, golden turmeric, and iced matcha latte",
  },
};

type GoalFilter = "all" | "high-protein" | "gut-health" | "anti-inflammatory" | "low-carb";

interface BowlRecipe {
  id: string;
  name: string;
  category: "Warm Grain" | "Smoothie Bowl" | "Raw Tonic";
  goal: "high-protein" | "gut-health" | "anti-inflammatory" | "low-carb";
  benefitText: string;
  price: number;
  calories: number;
  macros: {
    protein: number; // in grams
    fiber: number; // in grams
    netCarbs: number; // in grams
  };
  ingredients: string[];
  dressing: string;
  image: string;
  featuredBadge?: string;
  farmOrigin: string;
}

const signatureRecipes: BowlRecipe[] = [
  {
    id: "salmon-goddess",
    name: "Wild Salmon Green Goddess",
    category: "Warm Grain",
    goal: "high-protein",
    benefitText: "Clean Omega-3 & Lean Muscle Repair",
    price: 18.5,
    calories: 610,
    macros: { protein: 36, fiber: 12, netCarbs: 28 },
    ingredients: ["Wild Alaskan Salmon", "Tri-Color Quinoa", "Hass Avocado", "Baby Kale", "Steamed Edamame", "Black Sesame"],
    dressing: "Herb Kefir Green Goddess (Zero Oil Emulsion)",
    image: imageAssets.salmon.src,
    featuredBadge: "Chef's Flagship",
    farmOrigin: "Bristol Bay, AK & Oxnard, CA",
  },
  {
    id: "avocado-garden",
    name: "Avocado Garden Harvest",
    category: "Warm Grain",
    goal: "gut-health",
    benefitText: "High Prebiotic Fiber & Cellular Hydration",
    price: 15.0,
    calories: 520,
    macros: { protein: 16, fiber: 16, netCarbs: 34 },
    ingredients: ["Whole Ripe Avocado", "Sprouted Quinoa", "Persian Cucumbers", "Campari Tomatoes", "Crisp Radish", "Sprouted Pumpkin Seeds"],
    dressing: "Cold-Pressed Lemon Sesame Tahini",
    image: imageAssets.avocado.src,
    featuredBadge: "100% Plant-Based",
    farmOrigin: "Carpinteria Organic Groves, CA",
  },
  {
    id: "protein-harvest",
    name: "Roasted Chickpea Energy Bowl",
    category: "Warm Grain",
    goal: "high-protein",
    benefitText: "Sustained Low-Glycemic Complex Fuel",
    price: 15.5,
    calories: 580,
    macros: { protein: 24, fiber: 15, netCarbs: 42 },
    ingredients: ["Coriander-Spiced Chickpeas", "Brown Basmati Rice", "Jewel Sweet Potato", "Shaved Purple Cabbage", "Pickled Shallots"],
    dressing: "Spicy Cashew Lime Crema",
    image: imageAssets.protein.src,
    farmOrigin: "Livingston Organic Farm, CA",
  },
  {
    id: "acai-superberry",
    name: "Amazonian Acai Superberry",
    category: "Smoothie Bowl",
    goal: "anti-inflammatory",
    benefitText: "Polyphenol Antioxidants & Skin Radiance",
    price: 14.0,
    calories: 430,
    macros: { protein: 12, fiber: 14, netCarbs: 38 },
    ingredients: ["Wild Organic Acai", "Fresh Strawberries", "Blueberries", "Kiwi Rounds", "Gluten-Free Oat Granola", "Hemp Hearts"],
    dressing: "House Stoneground Almond Butter Drizzle",
    image: imageAssets.acai.src,
    featuredBadge: "No Added Sugar",
    farmOrigin: "Sustainably Harvested Belem, Brazil",
  },
  {
    id: "sunrise-mango",
    name: "Golden Mango Turmeric Glow",
    category: "Smoothie Bowl",
    goal: "anti-inflammatory",
    benefitText: "Immunity Boost & Joint Recovery",
    price: 13.5,
    calories: 410,
    macros: { protein: 10, fiber: 11, netCarbs: 44 },
    ingredients: ["Alphonso Mango", "Golden Pineapple", "Cavendish Banana", "Coconut Flakes", "Chia Seeds", "Bee Pollen"],
    dressing: "Raw Wildflower Honey Swirl",
    image: imageAssets.sunrise.src,
    farmOrigin: "Kauai Organic Groves, HI",
  },
  {
    id: "cold-pressed-flight",
    name: "Raw Cold-Pressed Tonic Flight",
    category: "Raw Tonic",
    goal: "gut-health",
    benefitText: "Living Enzymes & Micronutrient Density",
    price: 12.0,
    calories: 175,
    macros: { protein: 4, fiber: 6, netCarbs: 18 },
    ingredients: ["Deep Green Kale-Cucumber", "Golden Turmeric Ginger Shot", "Ceremonial Uji Iced Matcha Latte"],
    dressing: "Zero Heat Press (Hydraulic Pressed at 38°F)",
    image: imageAssets.coldPressed.src,
    featuredBadge: "Pressed Today 5:45 AM",
    farmOrigin: "Salinas Valley & Kyoto, Japan",
  },
];

// Interactive Custom Assembly Line Options
const bases = [
  { name: "Warm Tri-Color Quinoa", cal: 170, protein: 6, tag: "Gluten-Free" },
  { name: "Brown Basmati Rice", cal: 160, protein: 4, tag: "Complex Carb" },
  { name: "Wild Lacinato Kale & Arugula", cal: 40, protein: 3, tag: "Low-Carb" },
  { name: "Chilled Cauliflower Rice", cal: 35, protein: 2, tag: "Keto-Friendly" },
];

const proteins = [
  { name: "Wild Alaskan Salmon Fillet", cal: 260, protein: 28, priceAdd: 5.0 },
  { name: "Citrus Herb Grilled Chicken", cal: 210, protein: 26, priceAdd: 3.5 },
  { name: "Crisp Organic Baked Tofu", cal: 160, protein: 16, priceAdd: 2.0 },
  { name: "Spiced Cumin Chickpeas", cal: 180, protein: 12, priceAdd: 1.5 },
];

const boosters = [
  { name: "Hass Avocado", cal: 110, icon: "🥑" },
  { name: "Roasted Jewel Yams", cal: 85, icon: "🍠" },
  { name: "Steamed Edamame", cal: 60, icon: "🫛" },
  { name: "Pickled Red Onions", cal: 20, icon: "🧅" },
  { name: "English Cucumbers", cal: 15, icon: "🥒" },
  { name: "Sprouted Pumpkin Seeds", cal: 70, icon: "🌰" },
  { name: "Castelvetrano Olives", cal: 45, icon: "🫒" },
  { name: "Heirloom Cherry Tomatoes", cal: 25, icon: "🍅" },
];

const dressings = [
  { name: "Green Goddess Herb Kefir", tag: "Probiotic Rich", cal: 65 },
  { name: "Lemon Sesame Tahini", tag: "100% Plant-Based", cal: 80 },
  { name: "Ginger Miso Vinaigrette", tag: "Fermented Umami", cal: 55 },
  { name: "Spicy Cashew Lime Crema", tag: "Creamy Vegan", cal: 75 },
];

export function FreshBowlCafe() {
  const [goalFilter, setGoalFilter] = useState<GoalFilter>("all");
  const [cart, setCart] = useState<Record<string, number>>({});

  // Custom Assembly State
  const [selectedBase, setSelectedBase] = useState(bases[0]);
  const [selectedProtein, setSelectedProtein] = useState(proteins[0]);
  const [selectedBoosters, setSelectedBoosters] = useState<string[]>([
    "Hass Avocado",
    "Roasted Jewel Yams",
    "Steamed Edamame",
  ]);
  const [selectedDressing, setSelectedDressing] = useState(dressings[0]);
  const [customToast, setCustomToast] = useState(false);

  // Cart totals
  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalCartPrice = Object.entries(cart).reduce((sum, [id, qty]) => {
    if (id === "custom-lab-bowl") {
      const price = 14.5 + selectedProtein.priceAdd;
      return sum + price * qty;
    }
    const item = signatureRecipes.find((r) => r.id === id);
    return sum + (item ? item.price : 0) * qty;
  }, 0);

  const addToCart = (id: string) => {
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
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

  const toggleBooster = (name: string) => {
    setSelectedBoosters((prev) =>
      prev.includes(name)
        ? prev.filter((b) => b !== name)
        : prev.length < 4
        ? [...prev, name]
        : prev
    );
  };

  const handleAddCustomBowl = () => {
    addToCart("custom-lab-bowl");
    setCustomToast(true);
    setTimeout(() => setCustomToast(false), 2800);
  };

  // Calculated Custom Nutrition
  const customTotalCal =
    selectedBase.cal +
    selectedProtein.cal +
    selectedDressing.cal +
    selectedBoosters.reduce((acc, b) => {
      const found = boosters.find((item) => item.name === b);
      return acc + (found ? found.cal : 0);
    }, 0);

  const customTotalProtein = selectedBase.protein + selectedProtein.protein + 2;

  const filteredBowls = useMemo(() => {
    if (goalFilter === "all") return signatureRecipes;
    return signatureRecipes.filter((b) => b.goal === goalFilter);
  }, [goalFilter]);

  return (
    <main className="brand-motion motion-freshbowl min-h-screen bg-[#f5f3ec] text-[#16221b] selection:bg-[#2d5a3c] selection:text-white">
      {/* ── APOTHECARY STATUS TICKER ─────────────────────────────────────── */}
      <div className="border-b border-[#e2dcce] bg-[#16221b] px-4 py-2.5 text-xs text-[#f5f3ec]">
        <Container className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-mono text-[11px] text-[#8fad66]">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-bold">HARVEST DISPENSARY LIVE:</span>
            <span className="text-white/80">Batch #041 Pressed at 5:45 AM Today</span>
          </div>

          <div className="flex items-center gap-5 text-[11px] font-semibold text-white/70">
            <span>🌱 100% Regenerative Organic</span>
            <span>🥑 Zero Seed Oils</span>
            <span className="hidden sm:inline">⏱️ 8-Min Curbside Pickup</span>
          </div>
        </Container>
      </div>

      {/* ── EDITORIAL SUB-NAV ────────────────────────────────────────────── */}
      <SubWebsiteNav
        brand="FreshBowl Lab & Cafe"
        links={[
          { label: "Signature Bowls", href: "#signature" },
          { label: "Assembly Station", href: "#assembly" },
          { label: "Raw Dispensary", href: "#dispensary" },
          { label: "Our Space", href: "#space" },
          { label: "Nutrition Purity", href: "#purity" },
        ]}
        ctaLabel="Order for 8-Min Pickup"
        ctaHref="#pickup-card"
        className="sticky top-0 z-40 border-b border-[#e2dcce] bg-[#f5f3ec]/95 backdrop-blur-md"
        brandClassName="text-[#2d5a3c] font-black tracking-tight hover:opacity-80 transition"
        linkClassName="rounded-full px-3.5 py-1.5 text-xs font-bold text-[#4a5e50] hover:bg-[#2d5a3c]/10 hover:text-[#2d5a3c] transition"
        ctaClassName="rounded-full bg-[#2d5a3c] px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-sm hover:bg-[#1e3e29] transition"
        menuButtonClassName="border-[#e2dcce] text-[#2d5a3c] hover:bg-[#2d5a3c]/10"
        mobilePanelClassName="border border-[#e2dcce] bg-[#f5f3ec]"
      />

      {/* ── ASYMMETRICAL LIVING FARM HERO ────────────────────────────────── */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-14 md:pb-24">
        <Container>
          {/* Breadcrumb + Category Badge */}
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <Link
              to="/restaurant"
              className="inline-flex items-center gap-2 rounded-full border border-[#e2dcce] bg-white px-3.5 py-1 text-xs font-bold text-[#4a5e50] shadow-2xs hover:border-[#2d5a3c] hover:text-[#2d5a3c] transition"
            >
              <ArrowRight className="h-3 w-3 rotate-180" />
              <span>Restaurant Showcase</span>
            </Link>
            <span className="rounded-full bg-[#2d5a3c]/10 px-3.5 py-1 text-xs font-black uppercase tracking-wider text-[#2d5a3c]">
              Functional Nutrition Kitchen
            </span>
          </div>

          {/* Hero Grid */}
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1 className="text-4xl font-black tracking-tight text-[#16221b] sm:text-6xl lg:text-7xl lg:leading-[1.04]">
                Clean nutrition engineered for your <span className="font-serif italic text-[#2d5a3c]">biology.</span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-relaxed text-[#4a5e50] sm:text-lg">
                Warm sprouted grain bowls, cold-pressed living juices, and superfood blends formulated with whole plants, pasture-raised proteins, and certified zero industrial seed oils.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#signature"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#2d5a3c] px-7 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-xl shadow-[#2d5a3c]/20 hover:bg-[#1e3e29] hover:scale-105 active:scale-95 transition"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Explore Daily Bowls</span>
                </a>
                <a
                  href="#assembly"
                  className="inline-flex items-center gap-2 rounded-full border border-[#4a5e50]/30 bg-white px-6 py-3.5 text-xs font-bold text-[#16221b] shadow-sm hover:border-[#2d5a3c] hover:text-[#2d5a3c] transition"
                >
                  <Sliders className="h-4 w-4 text-[#8fad66]" />
                  <span>Custom Assembly Station</span>
                </a>
              </div>

              {/* Micro Nutrition Standards */}
              <div className="mt-12 grid grid-cols-3 gap-3 border-t border-[#e2dcce] pt-8 max-w-lg">
                <div className="rounded-2xl border border-[#e2dcce] bg-white p-3.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#2d5a3c]">
                    <Activity className="h-3.5 w-3.5" />
                    <span>Metabolic Fuel</span>
                  </div>
                  <p className="mt-1 text-xs text-[#4a5e50]">High fiber & low glycemic curves</p>
                </div>

                <div className="rounded-2xl border border-[#e2dcce] bg-white p-3.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#b86a42]">
                    <ShieldCheck className="h-3.5 w-3.5" />
                    <span>Zero Seed Oils</span>
                  </div>
                  <p className="mt-1 text-xs text-[#4a5e50]">100% EVOO & avocado fats only</p>
                </div>

                <div className="rounded-2xl border border-[#e2dcce] bg-white p-3.5">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-[#2d5a3c]">
                    <Clock className="h-3.5 w-3.5" />
                    <span>8m Pickup</span>
                  </div>
                  <p className="mt-1 text-xs text-[#4a5e50]">Tossed fresh to your arrival</p>
                </div>
              </div>
            </div>

            {/* Asymmetrical Bento Visual Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Main Hero Card 1: Seared Salmon Bowl */}
                <div className="group relative col-span-2 overflow-hidden rounded-3xl border border-[#e2dcce] bg-white shadow-xl aspect-[16/10]">
                  <img
                    src={imageAssets.salmon.src}
                    alt={imageAssets.salmon.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3.5 py-1 text-[11px] font-black uppercase tracking-wider text-[#2d5a3c] shadow-md backdrop-blur-xs">
                    Spring Feature: Wild Salmon Goddess
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-xs font-bold">
                    <span>36g Protein · 12g Prebiotic Fiber</span>
                    <span className="rounded-full bg-black/60 px-2.5 py-1 text-emerald-300">Bristol Bay Wild Catch</span>
                  </div>
                </div>

                {/* Secondary Card 2: Cafe Space Snapshot */}
                <div className="relative overflow-hidden rounded-2xl border border-[#e2dcce] bg-white shadow-md aspect-[4/3]">
                  <img
                    src={imageAssets.interior.src}
                    alt={imageAssets.interior.alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute bottom-2.5 left-2.5 rounded-md bg-white/90 px-2 py-0.5 text-[10px] font-bold text-[#16221b]">
                    Sunlit Dining Room
                  </span>
                </div>

                {/* Secondary Card 3: Cold-Pressed Juice */}
                <div className="relative overflow-hidden rounded-2xl border border-[#e2dcce] bg-white shadow-md aspect-[4/3]">
                  <img
                    src={imageAssets.coldPressed.src}
                    alt={imageAssets.coldPressed.alt}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20" />
                  <span className="absolute bottom-2.5 left-2.5 rounded-md bg-[#16221b]/90 px-2 py-0.5 text-[10px] font-bold text-white">
                    Raw Press: Batch #041
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── LIVING FARM MARQUEE TICKER ───────────────────────────────────── */}
      <div className="border-y border-[#e2dcce] bg-white py-3.5 overflow-hidden">
        <div className="flex gap-8 whitespace-nowrap text-xs font-bold uppercase tracking-widest text-[#4a5e50]/80 animate-marquee">
          <span>🥑 Hass Avocados · Carpinteria, CA</span>
          <span className="text-[#8fad66]">✦</span>
          <span>🐟 Wild Sockeye Salmon · Bristol Bay, AK</span>
          <span className="text-[#8fad66]">✦</span>
          <span>🌿 Lacinato Dinosaur Kale · Salinas Valley</span>
          <span className="text-[#8fad66]">✦</span>
          <span>🍠 Organic Jewel Yams · Livingston, CA</span>
          <span className="text-[#8fad66]">✦</span>
          <span>🫐 Wild Forest Acai · Belem, Brazil</span>
          <span className="text-[#8fad66]">✦</span>
          <span>🍵 Ceremonial Uji Matcha · Kyoto, Japan</span>
        </div>
      </div>

      {/* ── SIGNATURE BOWLS BENTO DIRECTORY (GOAL-DRIVEN) ─────────────────── */}
      <section id="signature" className="py-20 md:py-28">
        <Container>
          {/* Section Header */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-12">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#2d5a3c]">
                Formulated Bowls
              </span>
              <h2 className="mt-2 text-3xl font-black tracking-tight text-[#16221b] sm:text-5xl">
                Curated for how you want to feel.
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-[#4a5e50] sm:text-sm">
              Filter by biological focus: High-Protein Muscle Repair, Gut Microbiome Fiber, Anti-Inflammatory Recovery, or Low-Carb Clarity.
            </p>
          </div>

          {/* Goal Filter Switcher */}
          <div className="mb-10 flex flex-wrap items-center gap-2">
            {[
              { id: "all" as const, label: `All Creations (${signatureRecipes.length})` },
              { id: "high-protein" as const, label: "⚡ High-Protein (>24g)" },
              { id: "gut-health" as const, label: "🌱 Gut & Microbiome Fiber" },
              { id: "anti-inflammatory" as const, label: "✨ Anti-Inflammatory" },
            ].map((pill) => (
              <button
                key={pill.id}
                type="button"
                onClick={() => setGoalFilter(pill.id)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  goalFilter === pill.id
                    ? "bg-[#2d5a3c] text-white shadow-md"
                    : "border border-[#e2dcce] bg-white text-[#4a5e50] hover:border-[#2d5a3c] hover:text-[#2d5a3c]"
                }`}
              >
                {pill.label}
              </button>
            ))}
          </div>

          {/* Bento Cards Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBowls.map((bowl) => {
              const qty = cart[bowl.id] || 0;
              return (
                <article
                  key={bowl.id}
                  className="group flex flex-col justify-between overflow-hidden rounded-3xl border border-[#e2dcce] bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2d5a3c]/40 hover:shadow-2xl hover:shadow-[#2d5a3c]/10"
                >
                  <div>
                    {/* Visual Card Top */}
                    <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#eaf0e6]">
                      <img
                        src={bowl.image}
                        alt={bowl.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {bowl.featuredBadge && (
                        <span className="absolute top-3 left-3 rounded-full bg-white/95 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#2d5a3c] shadow-sm">
                          {bowl.featuredBadge}
                        </span>
                      )}

                      <span className="absolute bottom-3 left-3 rounded-full bg-black/65 px-2.5 py-1 text-[10px] font-bold text-white backdrop-blur-xs">
                        {bowl.farmOrigin}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="mt-5">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="text-[10px] font-black uppercase tracking-widest text-[#2d5a3c]">
                            {bowl.category}
                          </span>
                          <h3 className="text-lg font-black text-[#16221b] mt-0.5">
                            {bowl.name}
                          </h3>
                        </div>
                        <span className="text-lg font-black text-[#2d5a3c]">
                          ${bowl.price.toFixed(2)}
                        </span>
                      </div>

                      {/* Benefit Tag */}
                      <p className="mt-2 text-xs font-bold text-[#b86a42]">
                        ✦ {bowl.benefitText}
                      </p>

                      {/* Macro Meters Bar */}
                      <div className="mt-4 grid grid-cols-3 gap-2 rounded-xl bg-[#f5f3ec] p-3 text-center">
                        <div>
                          <p className="text-xs font-black text-[#16221b]">{bowl.macros.protein}g</p>
                          <p className="text-[9px] font-bold uppercase text-[#4a5e50]">Protein</p>
                        </div>
                        <div>
                          <p className="text-xs font-black text-[#16221b]">{bowl.macros.fiber}g</p>
                          <p className="text-[9px] font-bold uppercase text-[#4a5e50]">Fiber</p>
                        </div>
                        <div>
                          <p className="text-xs font-black text-[#16221b]">{bowl.calories}</p>
                          <p className="text-[9px] font-bold uppercase text-[#4a5e50]">Calories</p>
                        </div>
                      </div>

                      {/* Ingredients List */}
                      <div className="mt-3.5">
                        <p className="text-[11px] leading-relaxed text-[#4a5e50]">
                          <span className="font-bold text-[#16221b]">Bowl Base: </span>
                          {bowl.ingredients.join(", ")}.
                        </p>
                        <p className="mt-1 text-[11px] font-medium text-[#2d5a3c]">
                          <span className="font-bold">Dressing: </span>
                          {bowl.dressing}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Add to Bag Action */}
                  <div className="mt-6 border-t border-[#e2dcce] pt-4 flex items-center justify-between">
                    {qty > 0 ? (
                      <div className="flex items-center gap-3 rounded-full border border-[#2d5a3c] bg-[#2d5a3c]/10 px-3.5 py-1.5">
                        <button
                          type="button"
                          onClick={() => removeFromCart(bowl.id)}
                          className="text-[#2d5a3c] hover:scale-125 transition"
                          aria-label="Remove item"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="text-xs font-black text-[#16221b]">{qty}</span>
                        <button
                          type="button"
                          onClick={() => addToCart(bowl.id)}
                          className="text-[#2d5a3c] hover:scale-125 transition"
                          aria-label="Add more"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => addToCart(bowl.id)}
                        className="flex items-center gap-1.5 rounded-full border border-[#e2dcce] bg-[#f5f3ec] px-4 py-2 text-xs font-bold text-[#16221b] hover:border-[#2d5a3c] hover:bg-[#2d5a3c] hover:text-white transition"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        <span>Add to Order</span>
                      </button>
                    )}

                    <span className="text-[10px] font-bold text-[#4a5e50]/70 uppercase">
                      Tossed Fresh
                    </span>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── THE ASSEMBLY STATION: VISUAL STEP-BY-STEP BAR ─────────────────── */}
      <section id="assembly" className="py-20 md:py-28 bg-white border-y border-[#e2dcce]">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2d5a3c]/20 bg-[#2d5a3c]/10 px-4 py-1 text-xs font-black uppercase tracking-widest text-[#2d5a3c]">
              <Layers className="h-3.5 w-3.5" />
              The Assembly Line
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#16221b] sm:text-5xl">
              Construct your custom metabolic formula.
            </h2>
            <p className="mt-3 text-sm text-[#4a5e50]">
              Click through the four phases below. Your live nutrition monitor calculates real-time calories and clean protein.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Left Steps Assembly Box */}
            <div className="space-y-8 rounded-3xl border border-[#e2dcce] bg-[#f5f3ec] p-6 sm:p-9">
              {/* Step 1: Base */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#16221b]">
                    01. Sprouted Warm Base
                  </h3>
                  <span className="text-[11px] font-bold text-[#2d5a3c]">Select 1 Foundation</span>
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {bases.map((base) => (
                    <button
                      key={base.name}
                      type="button"
                      onClick={() => setSelectedBase(base)}
                      className={`flex items-center justify-between rounded-2xl border p-3.5 text-left text-xs font-bold transition ${
                        selectedBase.name === base.name
                          ? "border-[#2d5a3c] bg-white text-[#2d5a3c] shadow-xs ring-2 ring-[#2d5a3c]/20"
                          : "border-[#e2dcce] bg-white/60 text-[#4a5e50] hover:bg-white"
                      }`}
                    >
                      <div>
                        <p>{base.name}</p>
                        <p className="text-[10px] text-[#4a5e50]/70 font-normal">
                          {base.cal} kcal · {base.tag}
                        </p>
                      </div>
                      {selectedBase.name === base.name && (
                        <Check className="h-4 w-4 text-[#2d5a3c]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Protein */}
              <div className="border-t border-[#e2dcce] pt-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#16221b]">
                    02. Pasture-Raised Protein
                  </h3>
                  <span className="text-[11px] font-bold text-[#2d5a3c]">Select 1 Protein</span>
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {proteins.map((prot) => (
                    <button
                      key={prot.name}
                      type="button"
                      onClick={() => setSelectedProtein(prot)}
                      className={`flex items-center justify-between rounded-2xl border p-3.5 text-left text-xs font-bold transition ${
                        selectedProtein.name === prot.name
                          ? "border-[#2d5a3c] bg-white text-[#2d5a3c] shadow-xs ring-2 ring-[#2d5a3c]/20"
                          : "border-[#e2dcce] bg-white/60 text-[#4a5e50] hover:bg-white"
                      }`}
                    >
                      <div>
                        <p>{prot.name}</p>
                        <p className="text-[10px] text-[#4a5e50]/70 font-normal">
                          +{prot.protein}g protein · {prot.cal} kcal
                        </p>
                      </div>
                      {selectedProtein.name === prot.name && (
                        <Check className="h-4 w-4 text-[#2d5a3c]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Boosters */}
              <div className="border-t border-[#e2dcce] pt-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#16221b]">
                    03. Farm Boosters & Crunch
                  </h3>
                  <span className="text-[11px] font-bold text-[#2d5a3c]">
                    {selectedBoosters.length}/4 Selected
                  </span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {boosters.map((b) => {
                    const active = selectedBoosters.includes(b.name);
                    return (
                      <button
                        key={b.name}
                        type="button"
                        onClick={() => toggleBooster(b.name)}
                        className={`rounded-2xl border p-3 text-center text-xs font-bold transition ${
                          active
                            ? "border-[#2d5a3c] bg-[#2d5a3c] text-white shadow-sm"
                            : "border-[#e2dcce] bg-white text-[#4a5e50] hover:border-[#2d5a3c]/50 hover:bg-white"
                        }`}
                      >
                        <span className="text-base block mb-1">{b.icon}</span>
                        <span className="block truncate">{b.name}</span>
                        <span className={`text-[9px] block ${active ? "text-white/80" : "text-[#4a5e50]/60"}`}>
                          +{b.cal} kcal
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Step 4: Dressing */}
              <div className="border-t border-[#e2dcce] pt-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xs font-black uppercase tracking-wider text-[#16221b]">
                    04. Scratch Emulsion Dressing
                  </h3>
                  <span className="text-[11px] font-bold text-[#2d5a3c]">Zero Seed Oil Recipe</span>
                </div>
                <div className="grid gap-2.5 sm:grid-cols-2">
                  {dressings.map((d) => (
                    <button
                      key={d.name}
                      type="button"
                      onClick={() => setSelectedDressing(d)}
                      className={`flex items-center justify-between rounded-2xl border p-3.5 text-left text-xs font-bold transition ${
                        selectedDressing.name === d.name
                          ? "border-[#2d5a3c] bg-white text-[#2d5a3c] shadow-xs ring-2 ring-[#2d5a3c]/20"
                          : "border-[#e2dcce] bg-white/60 text-[#4a5e50] hover:bg-white"
                      }`}
                    >
                      <div>
                        <p>{d.name}</p>
                        <p className="text-[10px] text-[#4a5e50]/70 font-normal">{d.tag}</p>
                      </div>
                      {selectedDressing.name === d.name && (
                        <Check className="h-4 w-4 text-[#2d5a3c]" />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side: Live Recipe & Macro Meter Display */}
            <div className="sticky top-28 self-start rounded-3xl border border-[#16221b] bg-[#16221b] p-7 text-white shadow-2xl">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#8fad66]">
                Formula Monitor
              </span>
              <h3 className="text-2xl font-black text-white mt-1">My Daily Power Bowl</h3>

              {/* Macro Gauge Cards */}
              <div className="mt-6 grid grid-cols-2 gap-3 rounded-2xl bg-white/5 p-4 border border-white/10">
                <div>
                  <p className="text-2xl font-black text-[#8fad66]">{customTotalProtein}g</p>
                  <p className="text-[10px] font-bold uppercase text-white/60">Estimated Clean Protein</p>
                </div>
                <div>
                  <p className="text-2xl font-black text-white">{customTotalCal}</p>
                  <p className="text-[10px] font-bold uppercase text-white/60">Total Calories</p>
                </div>
              </div>

              {/* Recipe Spec Sheet */}
              <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-xs text-white/80">
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">Base:</span>
                  <p className="font-bold text-white mt-0.5">{selectedBase.name}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">Protein:</span>
                  <p className="font-bold text-white mt-0.5">{selectedProtein.name}</p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">Boosters:</span>
                  <p className="font-bold text-white mt-0.5">
                    {selectedBoosters.length > 0 ? selectedBoosters.join(", ") : "None chosen"}
                  </p>
                </div>
                <div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-white/50">Dressing:</span>
                  <p className="font-bold text-[#8fad66] mt-0.5">{selectedDressing.name}</p>
                </div>
              </div>

              {/* Bottom Price & Add */}
              <div className="mt-8 flex items-baseline justify-between border-t border-white/10 pt-6">
                <div>
                  <span className="text-3xl font-black text-white">
                    ${(14.5 + selectedProtein.priceAdd).toFixed(2)}
                  </span>
                  <p className="text-[10px] text-white/50">Fresh pickup in 8m</p>
                </div>

                <button
                  type="button"
                  onClick={handleAddCustomBowl}
                  className="rounded-full bg-[#8fad66] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-[#16221b] shadow-lg hover:bg-white transition active:scale-95"
                >
                  {customToast ? "Added to Order! ✓" : "Toss This Bowl"}
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── THE RAW COLD-PRESSED DISPENSARY ───────────────────────────────── */}
      <section id="dispensary" className="py-20 md:py-28 bg-[#16221b] text-white">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#8fad66]">
              Apothecary Cold-Press
            </span>
            <h2 className="mt-3 text-3xl font-black leading-tight sm:text-5xl">
              No heat. No pasteurization. Living enzyme density.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-white/70 sm:text-base">
              Conventional blenders spin at 14,000 RPM, creating heat and friction that degrades delicate enzymes and vitamins. Our hydraulic press applies 9 tons of pressure at 38°F, extracting pure, unfiltered plant blood that keeps for 72 hours.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">Deep Green Alkalizer (16oz)</p>
                  <p className="text-xs text-white/60">Lacinato Kale, Cucumber, Celery, Green Apple, Ginger, Lemon</p>
                </div>
                <span className="text-sm font-black text-[#8fad66]">$9.00</span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">Golden Turmeric Shot (4oz)</p>
                  <p className="text-xs text-white/60">Fresh Hawaiian Turmeric, Ginger, Orange, Black Pepper Extract</p>
                </div>
                <span className="text-sm font-black text-[#8fad66]">$5.50</span>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-white">Ceremonial Uji Matcha Latte (12oz)</p>
                  <p className="text-xs text-white/60">First-Harvest Organic Matcha, House Sprouted Oat Milk, Vanilla</p>
                </div>
                <span className="text-sm font-black text-[#8fad66]">$8.00</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/15 shadow-2xl aspect-[4/3]">
              <img
                src={imageAssets.coldPressed.src}
                alt={imageAssets.coldPressed.alt}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── SUNLIT CAFE SPACE & WELLNESS COMMUNITY ─────────────────────────── */}
      <section id="space" className="py-20 md:py-28 bg-[#f5f3ec]">
        <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-[#e2dcce] shadow-2xl aspect-[16/10]">
              <img
                src={imageAssets.interior.src}
                alt={imageAssets.interior.alt}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 hidden sm:block rounded-2xl border border-[#e2dcce] bg-white p-5 shadow-xl">
              <p className="text-xs font-black uppercase tracking-wider text-[#2d5a3c]">Design Architecture</p>
              <p className="text-sm font-bold text-[#16221b] mt-0.5">Blonde Oak, Japanese Terrazzo & Clean Air Filtration</p>
            </div>
          </div>

          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#2d5a3c]">
              The Space & Vibe
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-[#16221b] sm:text-5xl">
              A serene oasis for mindful lunchtime resets.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#4a5e50]">
              Leave the noisy workday outside. Step into a space bathed in morning sunlight, lush tropical greenery, and minimalist blonde timber. Plug in for a focused 45-minute lunch break or grab your express bowl from our dedicated pickup cubby.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#e2dcce] bg-white p-4">
                <Clock className="h-5 w-5 text-[#2d5a3c]" />
                <p className="mt-2 text-sm font-black text-[#16221b]">Cafe Hours</p>
                <p className="text-xs text-[#4a5e50] mt-0.5">7:30 AM – 8:30 PM Daily</p>
              </div>

              <div className="rounded-2xl border border-[#e2dcce] bg-white p-4">
                <MapPin className="h-5 w-5 text-[#b86a42]" />
                <p className="mt-2 text-sm font-black text-[#16221b]">Neighborhood</p>
                <p className="text-xs text-[#4a5e50] mt-0.5">75 Wellness Way, Suite A</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── NUTRITION PURITY PLEDGE ────────────────────────────────────────── */}
      <section id="purity" className="py-20 md:py-28 bg-white border-y border-[#e2dcce]">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-14">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#2d5a3c]">
              The Purity Standard
            </span>
            <h2 className="mt-2 text-3xl font-black text-[#16221b] sm:text-4xl">
              What we refuse to put in your body.
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Zero Canola or Seed Oils",
                desc: "Every vegetable is seared in 100% California cold-pressed extra virgin olive oil or pure avocado oil.",
              },
              {
                title: "Zero Refined Cane Sugars",
                desc: "Smoothie bowls and dressings are sweetened exclusively with raw dates, wildflower honey, or unrefined maple.",
              },
              {
                title: "100% Non-GMO Verified",
                desc: "Certified organic grains and produce harvested within 48 hours of service from regenerative partners.",
              },
              {
                title: "Backyard Compostable",
                desc: "Our bowls, lids, and cutlery are constructed from plant starches and birchwood. 0% landfill plastic.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-[#e2dcce] bg-[#f5f3ec] p-6 text-left"
              >
                <div className="h-8 w-8 rounded-full bg-[#2d5a3c]/10 text-[#2d5a3c] grid place-items-center mb-4">
                  <Check className="h-4 w-4" />
                </div>
                <h3 className="text-base font-black text-[#16221b]">{card.title}</h3>
                <p className="mt-2 text-xs leading-relaxed text-[#4a5e50]">{card.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── 8-MINUTE CURBSIDE PICKUP CARD ──────────────────────────────────── */}
      <section id="pickup-card" className="py-20 md:py-28 bg-[#f5f3ec]">
        <Container>
          <div className="rounded-3xl border border-[#e2dcce] bg-white p-8 sm:p-14 shadow-sm grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#2d5a3c]">
                Rapid Digital Ordering
              </span>
              <h2 className="mt-2 text-3xl font-black text-[#16221b] sm:text-5xl">
                Ready in 8 minutes. Walk in & take off.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-[#4a5e50]">
                Lock in your order online and bypass all lunch counter lines. Your warm bowl will be waiting in our temperature-controlled pickup cubby under your first name.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="tel:5550166600"
                  className="inline-flex items-center gap-2 rounded-full bg-[#2d5a3c] px-6 py-3.5 text-xs font-black uppercase tracking-wider text-white shadow-md hover:bg-[#1e3e29] transition"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call (555) 016-6600</span>
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-[#e2dcce] bg-[#f5f3ec] p-6 sm:p-8 space-y-4">
              <h3 className="text-base font-black text-[#16221b]">Express Pickup Protocol</h3>
              <div className="flex items-start gap-3 text-xs text-[#4a5e50]">
                <CheckCircle2 className="h-4 w-4 text-[#2d5a3c] shrink-0 mt-0.5" />
                <span>Text alert dispatched with cubby shelf number the second your bowl is sealed.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#4a5e50]">
                <CheckCircle2 className="h-4 w-4 text-[#2d5a3c] shrink-0 mt-0.5" />
                <span>Dressings packaged in cold side ramekins to maintain maximum leaf crunch.</span>
              </div>
              <div className="flex items-start gap-3 text-xs text-[#4a5e50]">
                <CheckCircle2 className="h-4 w-4 text-[#2d5a3c] shrink-0 mt-0.5" />
                <span>Curbside trunk drop-off available for vehicle pickup on Wellness Way.</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── STICKY PICKUP ORDER INDICATOR ──────────────────────────────────── */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center gap-4 rounded-full border border-white/20 bg-[#16221b]/95 px-5 py-3 text-white shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#2d5a3c] text-xs font-black">
                {totalCartCount}
              </span>
              <span className="text-xs font-bold">
                Order Total: <span className="text-[#8fad66] font-black">${totalCartPrice.toFixed(2)}</span>
              </span>
            </div>
            <a
              href="#pickup-card"
              className="rounded-full bg-[#8fad66] px-4 py-1.5 text-xs font-black uppercase text-[#16221b] hover:bg-white transition"
            >
              Checkout
            </a>
          </div>
        </div>
      )}

      {/* ── REFINED MINIMALIST FOOTER ──────────────────────────────────────── */}
      <footer className="border-t border-[#e2dcce] bg-[#16221b] py-14 text-white">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#2d5a3c] text-sm font-black text-white">
                  🥗
                </div>
                <p className="text-xl font-black text-white">FreshBowl Lab & Cafe</p>
              </div>
              <p className="mt-3 max-w-sm text-xs leading-relaxed text-white/60">
                Regenerative organic warm bowls, superfood smoothie bowls, and daily hydraulic raw cold-press elixirs.
              </p>
              <div className="mt-5">
                <Link
                  to="/restaurant"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8fad66] hover:underline"
                >
                  <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                  <span>Return to 100Web Restaurant Portfolio</span>
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#8fad66]">Hours</p>
              <div className="mt-3 space-y-1 text-xs text-white/70">
                <p className="font-semibold text-white">Monday – Friday</p>
                <p>7:30 AM – 8:30 PM</p>
                <p className="mt-2 font-semibold text-white">Saturday – Sunday</p>
                <p>8:30 AM – 7:30 PM</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#8fad66]">Dispensary & Cafe</p>
              <div className="mt-3 space-y-1 text-xs text-white/70">
                <p>75 Wellness Way, Suite A</p>
                <p>Green Market District</p>
                <p className="mt-2 text-white font-semibold">(555) 016-6600</p>
                <p>hello@freshbowlcafe.com</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#8fad66]">Focus Menus</p>
              <ul className="mt-3 space-y-1.5 text-xs text-white/70 font-semibold">
                <li><a href="#signature" className="hover:text-white transition">Wild Salmon Bowl</a></li>
                <li><a href="#signature" className="hover:text-white transition">Avocado Garden Harvest</a></li>
                <li><a href="#assembly" className="hover:text-white transition">Assembly Station</a></li>
                <li><a href="#dispensary" className="hover:text-white transition">Cold-Pressed Juices</a></li>
                <li><a href="#purity" className="hover:text-white transition">Zero Seed Oil Pledge</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
            <p>© {new Date().getFullYear()} FreshBowl Lab & Cafe · 100Web Showcase</p>
            <p>Built with React 19, Tailwind CSS & Vite</p>
          </div>
        </Container>
      </footer>
    </main>
  );
}
