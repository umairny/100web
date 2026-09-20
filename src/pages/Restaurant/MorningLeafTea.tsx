import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Clock,
  MapPin,
  Phone,
  ShoppingBag,
  Plus,
  Minus,
  ArrowRight,
  Play,
  Pause,
  RotateCcw,
  Check,
  Droplet,
  Flame,
  Volume2,
  CheckCircle2,
  Sparkles,
  Compass,
} from "lucide-react";
import { Container, SubWebsiteNav } from "../../components";
import { imageUrl } from "../../assets/optimized";

const imageAssets = {
  hero: {
    src: imageUrl("restaurent/morningleaf-tea/hero-tea.webp"),
    alt: "MorningLeaf tea house table with cast iron teapot, cups, and warm morning sunlight",
  },
  tatami: {
    src: imageUrl("restaurent/morningleaf-tea/tatami-room.jpg"),
    alt: "Minimalist Japanese tatami tea house room with shoji screens, low wooden table, and bamboo garden view",
  },
  ourStory: {
    src: imageUrl("restaurent/morningleaf-tea/our-story.webp"),
    alt: "Sunlit tea table with brewing ceramics, stone coasters, and fresh herbs",
  },
  matcha: {
    src: imageUrl("restaurent/morningleaf-tea/Matcha-Ritual.webp"),
    alt: "Ceremonial matcha bowl with bamboo chasen whisk and vivid emerald green foam",
  },
  citrusGreen: {
    src: imageUrl("restaurent/morningleaf-tea/Citrus-Green-Tea.webp"),
    alt: "Clear glass teapot with steeped green tea leaves and dehydrated citrus slices",
  },
  chamomile: {
    src: imageUrl("restaurent/morningleaf-tea/Chamomile-Reset.webp"),
    alt: "Golden chamomile herbal infusion in handcrafted ceramic teacup with dried flowers",
  },
  herbalBlends: {
    src: imageUrl("restaurent/morningleaf-tea/herbal-blends.webp"),
    alt: "Loose leaf botanical herbal blend with lavender, mint, and rosehips on raw linen",
  },
  lowCaffeine: {
    src: imageUrl("restaurent/morningleaf-tea/Low-Caffeine-Cups.webp"),
    alt: "Warm roasted hojicha and genmaicha tea in rustic ceramic stoneware cups",
  },
  steepedWellness: {
    src: imageUrl("restaurent/morningleaf-tea/Steeped-Wellness.webp"),
    alt: "Cast iron tetsubin teapot with twin matching cups on dark wood tea board",
  },
};

type TeaCategory = "all" | "matcha-green" | "roasted-oolong" | "botanical-herbal";

interface TeaProfile {
  id: string;
  name: string;
  kanji: string;
  category: "matcha-green" | "roasted-oolong" | "botanical-herbal";
  origin: string;
  tastingNotes: string[];
  caffeine: "None" | "Gentle" | "Moderate" | "Ceremonial Alert";
  steepTemp: string;
  steepTime: string;
  priceDineIn: number;
  priceCanister: number; // 50g tin
  description: string;
  image: string;
  badge?: string;
  harvestYear: string;
}

const teaCatalog: TeaProfile[] = [
  {
    id: "ceremonial-matcha",
    name: "First-Harvest Uji Matcha",
    kanji: "濃茶 · 宇治",
    category: "matcha-green",
    origin: "Uji, Kyoto, Japan · Single Estate",
    tastingNotes: ["Fresh Sweet Cream", "Nutty Edamame", "Deep Velvety Umami"],
    caffeine: "Ceremonial Alert",
    steepTemp: "80°C · 175°F",
    steepTime: "Whisk 35s",
    priceDineIn: 8.5,
    priceCanister: 34.0,
    description: "Stone-milled shade-grown tencha hand-whisked before your eyes with a 100-prong bamboo chasen into a thick, luminous emerald froth.",
    image: imageAssets.matcha.src,
    badge: "Master Reserve",
    harvestYear: "Spring 2026",
  },
  {
    id: "citrus-sencha",
    name: "Yuzu Mountain Sencha",
    kanji: "柚子 · 静岡",
    category: "matcha-green",
    origin: "Shizuoka Terraces, Japan",
    tastingNotes: ["Meyer Lemon Blossom", "Sweet Grass", "Crisp Pine"],
    caffeine: "Moderate",
    steepTemp: "75°C · 167°F",
    steepTime: "Steep 90s",
    priceDineIn: 7.25,
    priceCanister: 26.0,
    description: "First-flush steamed green tea infused with sun-dried organic yuzu peel. Opens the breath and gently resets mental clarity.",
    image: imageAssets.citrusGreen.src,
    badge: "Morning Favorite",
    harvestYear: "First Flush",
  },
  {
    id: "roasted-hojicha",
    name: "Charcoal Roasted Hojicha",
    kanji: "炭火 · 焙じ茶",
    category: "roasted-oolong",
    origin: "Wazuka River Valley, Kyoto",
    tastingNotes: ["Toasted Barley", "Warm Hazelnut", "Caramelized Rice"],
    caffeine: "Gentle",
    steepTemp: "90°C · 195°F",
    steepTime: "Steep 2m",
    priceDineIn: 7.0,
    priceCanister: 24.0,
    description: "Slow-roasted over porcelain hot coals. Almost zero astringency and deeply comforting for calm, unhurried afternoons.",
    image: imageAssets.lowCaffeine.src,
    harvestYear: "Autumn Roast",
  },
  {
    id: "chamomile-botanical",
    name: "Wild Nile Chamomile & Lavender",
    kanji: "安眠 · 花茶",
    category: "botanical-herbal",
    origin: "Faiyum Oasis, Egypt & Provence, France",
    tastingNotes: ["Honeyed Apple", "French Lavender", "Sweet Vanilla Pod"],
    caffeine: "None",
    steepTemp: "100°C · 212°F",
    steepTime: "Steep 5m",
    priceDineIn: 6.75,
    priceCanister: 22.0,
    description: "Whole chamomile flower blossoms hand-blended with soothing French lavender buds and lemon verbena for restful sleep.",
    image: imageAssets.chamomile.src,
    badge: "Evening Rest",
    harvestYear: "Wild Harvest",
  },
  {
    id: "tetsubin-wellness",
    name: "Mountain Ginseng & Safflower",
    kanji: "滋養 · 鉄瓶",
    category: "botanical-herbal",
    origin: "Changbai High Alpine & Alishan",
    tastingNotes: ["Sweet Earth", "Ginger Root", "Orchid Nectar"],
    caffeine: "None",
    steepTemp: "95°C · 203°F",
    steepTime: "Steep 4m",
    priceDineIn: 8.0,
    priceCanister: 28.0,
    description: "Simmered in cast iron tetsubin teaware with red jujube dates, astragalus, and wild mountain ginseng root.",
    image: imageAssets.steepedWellness.src,
    harvestYear: "Alpine Reserve",
  },
  {
    id: "botanical-harmony",
    name: "Alpine Peppermint & Crimson Rose",
    kanji: "薄荷 · 薔薇",
    category: "botanical-herbal",
    origin: "Cascade Mountain Foothills, Oregon",
    tastingNotes: ["Crisp Spearmint", "Crimson Rose Petal", "Clean Eucalyptus"],
    caffeine: "None",
    steepTemp: "95°C · 203°F",
    steepTime: "Steep 3m",
    priceDineIn: 6.5,
    priceCanister: 20.0,
    description: "Crisp aromatic mint leaves blended with whole organic rose petals for soothing digestion and mindful grounding.",
    image: imageAssets.herbalBlends.src,
    harvestYear: "Summer Blend",
  },
];

const steepRituals = [
  {
    id: "gyokuro",
    name: "Gyokuro Shade-Grown Green",
    temp: "60°C · 140°F",
    seconds: 90,
    vibe: "Meditative Umami",
    tip: "Cool water preserves rich L-theanine and sweet amino acids without extracting tannic bite.",
  },
  {
    id: "matcha",
    name: "Ceremonial Koicha Matcha",
    temp: "80°C · 175°F",
    seconds: 35,
    vibe: "Focused Clarity",
    tip: "Whisk briskly in rapid 'W' strokes from the wrist to suspend microscopic emerald tea particles.",
  },
  {
    id: "hojicha",
    name: "Kyoto Roasted Hojicha",
    temp: "90°C · 195°F",
    seconds: 120,
    vibe: "Warm Evening Calm",
    tip: "High thermal water coaxes deep roasted hazelnut notes while keeping caffeine virtually non-existent.",
  },
  {
    id: "chamomile",
    name: "Egyptian Blossom Herbal",
    temp: "100°C · 212°F",
    seconds: 300,
    vibe: "Deep Sleep Release",
    tip: "Keep teapot tightly lidded throughout the steep to capture delicate essential flower vapors.",
  },
];

export function MorningLeafTea() {
  const [activeCategory, setActiveCategory] = useState<TeaCategory>("all");
  const [cart, setCart] = useState<Record<string, number>>({});

  // Interactive Steep Timer State
  const [activeRitual, setActiveRitual] = useState(steepRituals[0]);
  const [timerSeconds, setTimerSeconds] = useState(steepRituals[0].seconds);
  const [timerRunning, setTimerRunning] = useState(false);

  // Table reservation form state
  const [bookingState, setBookingState] = useState({
    tableType: "Tatami Garden Room",
    guests: "2 Guests",
    time: "2:30 PM",
    isConfirmed: false,
  });

  // Handle Steep Timer Countdown
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    } else if (timerSeconds === 0) {
      setTimerRunning(false);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [timerRunning, timerSeconds]);

  const selectRitual = (ritual: (typeof steepRituals)[0]) => {
    setActiveRitual(ritual);
    setTimerSeconds(ritual.seconds);
    setTimerRunning(false);
  };

  const resetTimer = () => {
    setTimerSeconds(activeRitual.seconds);
    setTimerRunning(false);
  };

  // Cart operations
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

  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalCartPrice = Object.entries(cart).reduce((sum, [id, count]) => {
    const tea = teaCatalog.find((t) => t.id === id);
    return sum + (tea ? tea.priceDineIn : 0) * count;
  }, 0);

  const filteredTeas = useMemo(() => {
    if (activeCategory === "all") return teaCatalog;
    return teaCatalog.filter((t) => t.category === activeCategory);
  }, [activeCategory]);

  return (
    <main className="brand-motion motion-morningleaf min-h-screen bg-[#f8f6f0] text-[#181f19] selection:bg-[#2d4a32] selection:text-white">
      {/* ── REFINED SUB-WEBSITE NAVIGATION (FROSTED GLASS ON TOP OF HERO) ──── */}
      <SubWebsiteNav
        brand="MorningLeaf Tea Sanctuary"
        links={[
          { label: "Tea Scrolls", href: "#scrolls" },
          { label: "Steep Timer", href: "#timer" },
          { label: "Tatami Pavilion", href: "#space" },
          { label: "Ceremony Booking", href: "#reserve" },
        ]}
        ctaLabel="Reserve a Tea Table"
        ctaHref="#reserve"
        className="sticky top-0 z-40 border-b border-[#e5dfd2]/80 bg-[#f8f6f0]/95 backdrop-blur-md shadow-2xs"
        brandClassName="text-[#2d4a32] font-serif text-xl tracking-wide font-black"
        linkClassName="rounded-full px-3.5 py-1.5 text-xs font-bold text-[#556456] transition hover:bg-[#2d4a32]/10 hover:text-[#2d4a32]"
        ctaClassName="rounded-full bg-[#2d4a32] px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-sm hover:bg-[#1f3423] transition"
        menuButtonClassName="border-[#e5dfd2] text-[#2d4a32] hover:bg-[#2d4a32]/10"
        mobilePanelClassName="border border-[#e5dfd2] bg-[#f8f6f0]"
      />

      {/* ── FULL BACKGROUND CINEMATIC HERO SECTION ───────────────────────── */}
      <section className="relative min-h-[92vh] flex flex-col justify-between overflow-hidden bg-[#181f19] text-white">
        {/* Full-bleed background photograph */}
        <div className="absolute inset-0">
          <img
            src={imageAssets.hero.src}
            alt={imageAssets.hero.alt}
            className="h-full w-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          {/* Deep atmospheric Sumi-ink Japanese gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#181f19] via-[#181f19]/65 to-[#181f19]/45" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(24,31,25,0.7)_80%)]" />
        </div>

        {/* Hero Top Content Header */}
        <div className="relative z-10 pt-16 md:pt-24">
          <Container>
            <div className="flex items-center justify-between border-b border-white/15 pb-6">
              <Link
                to="/restaurant"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/75 hover:text-[#d4a359] transition"
              >
                <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                <span>Restaurant Collection</span>
              </Link>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-4 py-1.5 text-xs font-serif text-[#d4a359] backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>朝葉 · 静寂の茶 · Kyoto Uji & Alishan Harvests</span>
              </div>
            </div>
          </Container>
        </div>

        {/* Hero Center Master Copy */}
        <div className="relative z-10 py-16 md:py-24">
          <Container>
            <div className="max-w-3xl">
              <span className="inline-block font-serif text-sm md:text-base tracking-[0.25em] uppercase text-[#d4a359] mb-4">
                Single-Origin Tea Sanctuary
              </span>

              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight text-white drop-shadow-md">
                Slow down. The kettle is <span className="italic font-normal text-[#d4a359]">whispering.</span>
              </h1>

              <p className="mt-6 max-w-2xl text-base sm:text-xl font-light leading-relaxed text-white/85 drop-shadow-sm">
                In the space between thoughts, there is tea. Sip shade-grown Gyokuro, stoneground ceremonial Uji matcha, and restorative Egyptian chamomile steeped in unhurried silence.
              </p>

              {/* Action Buttons over background image */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="#scrolls"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#d4a359] px-8 py-4 text-xs font-black uppercase tracking-wider text-[#181f19] shadow-2xl hover:bg-white hover:scale-105 active:scale-95 transition"
                >
                  <ShoppingBag className="h-4 w-4" />
                  <span>Explore Tea Scrolls</span>
                </a>

                <a
                  href="#timer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/35 px-7 py-4 text-xs font-bold text-white backdrop-blur-md hover:bg-white/20 transition"
                >
                  <Clock className="h-4 w-4 text-[#d4a359]" />
                  <span>Interactive Steep Master</span>
                </a>
              </div>
            </div>
          </Container>
        </div>

        {/* Hero Bottom Glassmorphism Ledger Bar */}
        <div className="relative z-10 border-t border-white/15 bg-black/45 backdrop-blur-xl py-6">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-white">
              <div className="border-l border-white/20 pl-4">
                <p className="font-serif text-lg font-bold text-[#d4a359]">80°C Precision</p>
                <p className="text-xs text-white/70 mt-0.5">Custom thermal curve per harvest</p>
              </div>
              <div className="border-l border-white/20 pl-4">
                <p className="font-serif text-lg font-bold text-[#d4a359]">100% Whole Leaf</p>
                <p className="text-xs text-white/70 mt-0.5">Uji, Shizuoka & Alishan single estates</p>
              </div>
              <div className="border-l border-white/20 pl-4">
                <p className="font-serif text-lg font-bold text-[#d4a359]">Woven Tatami</p>
                <p className="text-xs text-white/70 mt-0.5">Barefoot screen-free sanctuary</p>
              </div>
              <div className="border-l border-white/20 pl-4">
                <p className="font-serif text-lg font-bold text-[#d4a359]">Quiet Hours</p>
                <p className="text-xs text-white/70 mt-0.5">Daily 8:00 AM – 7:30 PM</p>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ── THE TEA SCROLLS (HORIZONTAL LEDGER CARDS - DISTINCT DESIGN) ──── */}
      <section id="scrolls" className="py-20 md:py-28 bg-[#f8f6f0]">
        <Container>
          {/* Header */}
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end mb-14">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.25em] text-[#2d4a32]">
                The Botanical Ledger
              </span>
              <h2 className="mt-2 font-serif text-3xl tracking-tight text-[#181f19] sm:text-5xl">
                Curated Single-Estate Tea Scrolls
              </h2>
            </div>
            <p className="max-w-md text-xs leading-relaxed text-[#556456] sm:text-sm">
              Each harvest is selected for mineral terroir, aroma complexity, and meditative feeling. Served by the ceramic pot for your table or packaged into airtight washi canisters.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="mb-10 flex flex-wrap items-center gap-2.5">
            {[
              { id: "all" as const, label: `All Harvests (${teaCatalog.length})` },
              { id: "matcha-green" as const, label: "Ceremonial Matcha & Green" },
              { id: "roasted-oolong" as const, label: "Roasted Hojicha & Oolong" },
              { id: "botanical-herbal" as const, label: "Botanical Herbs & Blossoms" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveCategory(tab.id)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                  activeCategory === tab.id
                    ? "bg-[#2d4a32] text-white shadow-md"
                    : "border border-[#e5dfd2] bg-white text-[#556456] hover:border-[#2d4a32] hover:text-[#2d4a32]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Horizontal Ledger Cards (Distinct from standard grid) */}
          <div className="space-y-6">
            {filteredTeas.map((tea) => {
              const qty = cart[tea.id] || 0;
              return (
                <article
                  key={tea.id}
                  className="group rounded-3xl border border-[#e5dfd2] bg-white p-6 shadow-xs transition-all duration-300 hover:border-[#2d4a32]/50 hover:shadow-xl grid gap-6 md:grid-cols-[160px_1fr_auto] md:items-center"
                >
                  {/* Photo with Kanji Seal */}
                  <div className="relative aspect-square w-full max-w-[160px] overflow-hidden rounded-2xl bg-[#f0ebe1] mx-auto md:mx-0">
                    <img
                      src={tea.image}
                      alt={tea.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                    <span className="absolute bottom-2 left-2 rounded-md bg-[#181f19]/85 px-2 py-0.5 text-[9px] font-mono font-bold text-white">
                      {tea.kanji}
                    </span>
                  </div>

                  {/* Tea Description & Flavor Ledger */}
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="font-serif text-2xl font-bold text-[#181f19]">
                        {tea.name}
                      </h3>
                      {tea.badge && (
                        <span className="rounded-full bg-[#2d4a32]/10 px-2.5 py-0.5 text-[10px] font-black uppercase text-[#2d4a32]">
                          {tea.badge}
                        </span>
                      )}
                      <span className="text-xs text-[#556456]">· {tea.harvestYear}</span>
                    </div>

                    <p className="mt-1 text-xs font-semibold text-[#c9933b]">
                      ✦ Origin: {tea.origin}
                    </p>

                    <p className="mt-2 text-xs leading-relaxed text-[#556456] max-w-2xl">
                      {tea.description}
                    </p>

                    {/* Tasting Profile Tags */}
                    <div className="mt-3.5 flex flex-wrap items-center gap-2">
                      <span className="text-[10px] uppercase font-bold text-[#556456]/70">Notes:</span>
                      {tea.tastingNotes.map((note) => (
                        <span
                          key={note}
                          className="rounded-full border border-[#e5dfd2] bg-[#f8f6f0] px-2.5 py-0.5 text-[10px] font-medium text-[#556456]"
                        >
                          {note}
                        </span>
                      ))}
                      <span className="rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 text-[10px] font-semibold">
                        Caffeine: {tea.caffeine}
                      </span>
                    </div>
                  </div>

                  {/* Pricing & Table Action */}
                  <div className="flex flex-row md:flex-col items-center md:items-end justify-between gap-4 border-t md:border-t-0 md:border-l border-[#e5dfd2] pt-4 md:pt-0 md:pl-6">
                    <div className="text-left md:text-right">
                      <span className="font-serif text-2xl font-bold text-[#2d4a32]">
                        ${tea.priceDineIn.toFixed(2)}
                      </span>
                      <p className="text-[10px] text-[#556456]">Fresh Table Pot</p>
                      <p className="text-[10px] text-[#c9933b] font-bold mt-0.5">50g Washi Tin: ${tea.priceCanister}</p>
                    </div>

                    {qty > 0 ? (
                      <div className="flex items-center gap-3 rounded-full border border-[#2d4a32] bg-[#2d4a32]/10 px-3.5 py-1.5">
                        <button
                          type="button"
                          onClick={() => removeFromCart(tea.id)}
                          className="text-[#2d4a32] hover:scale-125 transition"
                          aria-label="Remove pot"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="text-xs font-black text-[#181f19]">{qty}</span>
                        <button
                          type="button"
                          onClick={() => addToCart(tea.id)}
                          className="text-[#2d4a32] hover:scale-125 transition"
                          aria-label="Add pot"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ) : (
                      <button
                        type="button"
                        onClick={() => addToCart(tea.id)}
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#2d4a32] px-5 py-2.5 text-xs font-black uppercase tracking-wider text-white shadow-sm hover:bg-[#1f3423] transition active:scale-95"
                      >
                        <Plus className="h-3.5 w-3.5" />
                        <span>Order Pot</span>
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ── INTERACTIVE STEEP TIMER & RITUAL MASTER ───────────────────────── */}
      <section id="timer" className="py-20 md:py-28 bg-white border-y border-[#e5dfd2]">
        <Container>
          <div className="mx-auto max-w-2xl text-center mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#2d4a32]/20 bg-[#2d4a32]/10 px-4 py-1 text-xs font-black uppercase tracking-widest text-[#2d4a32]">
              <Clock className="h-3.5 w-3.5 text-[#c9933b]" />
              The Steep Master
            </span>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-[#181f19] sm:text-5xl">
              Water Temperature & Unhurried Seconds
            </h2>
            <p className="mt-3 text-sm text-[#556456]">
              Calibrate water heat, leaf weight, and start the live countdown for the optimal steep.
            </p>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            {/* Ritual Selector Options */}
            <div className="space-y-4">
              {steepRituals.map((ritual) => {
                const isSelected = activeRitual.id === ritual.id;
                return (
                  <button
                    key={ritual.id}
                    type="button"
                    onClick={() => selectRitual(ritual)}
                    className={`w-full text-left rounded-3xl border p-5 sm:p-6 transition-all ${
                      isSelected
                        ? "border-[#2d4a32] bg-[#f8f6f0] ring-2 ring-[#2d4a32]/20 shadow-md"
                        : "border-[#e5dfd2] bg-white hover:border-[#2d4a32]/40 hover:bg-[#f8f6f0]/50"
                    }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-black uppercase tracking-wider text-[#c9933b]">
                          {ritual.vibe}
                        </span>
                        <h3 className="font-serif text-xl font-bold text-[#181f19] mt-0.5">
                          {ritual.name}
                        </h3>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-bold">
                        <span className="rounded-full bg-white px-3 py-1 text-[#2d4a32] border border-[#e5dfd2]">
                          {ritual.temp}
                        </span>
                        <span className="rounded-full bg-[#2d4a32] px-3 py-1 text-white">
                          {ritual.seconds}s Steep
                        </span>
                      </div>
                    </div>
                    <p className="mt-3 text-xs leading-relaxed text-[#556456]">
                      {ritual.tip}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Live Interactive Timer Widget */}
            <div className="rounded-3xl border border-[#2d4a32]/20 bg-[#181f19] p-8 sm:p-10 text-white shadow-2xl text-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#d4a359]">
                Steeping Chamber
              </span>
              <h3 className="font-serif text-2xl font-bold text-white mt-1">
                {activeRitual.name}
              </h3>

              {/* Big Animated Timer Circle */}
              <div className="my-8 mx-auto relative flex h-48 w-48 items-center justify-center rounded-full border-4 border-white/10 bg-white/5 shadow-inner">
                <div className="text-center">
                  <p className="font-serif text-5xl font-black text-[#d4a359] tracking-tight">
                    {Math.floor(timerSeconds / 60)}:
                    {(timerSeconds % 60).toString().padStart(2, "0")}
                  </p>
                  <p className="text-[10px] uppercase font-bold text-white/50 mt-1">
                    {timerRunning ? "Slow Steeping..." : timerSeconds === 0 ? "Tea is Ready! 🍵" : "Resting"}
                  </p>
                </div>
              </div>

              {/* Timer Controls */}
              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={() => setTimerRunning((prev) => !prev)}
                  className="inline-flex items-center gap-2 rounded-full bg-[#d4a359] px-7 py-3 text-xs font-black uppercase tracking-wider text-[#181f19] shadow-lg hover:bg-white transition active:scale-95"
                >
                  {timerRunning ? (
                    <>
                      <Pause className="h-4 w-4" />
                      <span>Pause Steep</span>
                    </>
                  ) : (
                    <>
                      <Play className="h-4 w-4" />
                      <span>Start Steep Timer</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={resetTimer}
                  className="rounded-full border border-white/20 p-3 text-white/80 hover:bg-white/10 transition"
                  title="Reset timer"
                >
                  <RotateCcw className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── THE TATAMI PAVILION & ZEN ARCHITECTURE ────────────────────────── */}
      <section id="space" className="py-20 md:py-28 bg-[#f0ebe1] border-y border-[#e5dfd2]">
        <Container className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-[#e5dfd2] shadow-2xl aspect-[16/10]">
              <img
                src={imageAssets.tatami.src}
                alt={imageAssets.tatami.alt}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-2xl border border-[#e5dfd2] bg-white p-5 shadow-xl">
              <p className="text-xs font-black uppercase tracking-wider text-[#2d4a32]">Architecture</p>
              <p className="font-serif text-sm font-bold text-[#181f19] mt-0.5">Woven Igusa Tatami & Cedar Wood Lattice</p>
            </div>
          </div>

          <div>
            <span className="text-xs font-black uppercase tracking-[0.2em] text-[#2d4a32]">
              The Tea House Setting
            </span>
            <h2 className="mt-3 font-serif text-3xl tracking-tight text-[#181f19] sm:text-5xl">
              A serene refuge where time moves at a gentler cadence.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-[#556456]">
              Step out of your shoes and onto woven tatami mats. Filtered morning light through washi paper screens, steaming iron tetsubin kettles, and quiet garden vistas of moss and bamboo create an immediate somatic calm.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="rounded-2xl border border-[#e5dfd2] bg-white p-4">
                <Clock className="h-5 w-5 text-[#2d4a32]" />
                <p className="font-serif text-sm font-bold text-[#181f19] mt-2">Opening Hours</p>
                <p className="text-xs text-[#556456] mt-0.5">8:00 AM – 7:30 PM Daily</p>
              </div>

              <div className="rounded-2xl border border-[#e5dfd2] bg-white p-4">
                <MapPin className="h-5 w-5 text-[#c9933b]" />
                <p className="font-serif text-sm font-bold text-[#181f19] mt-2">Garden Location</p>
                <p className="text-xs text-[#556456] mt-0.5">123 Leafy Lane, Bamboo Courtyard</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── TABLE & CEREMONY RESERVATIONS ──────────────────────────────────── */}
      <section id="reserve" className="py-20 md:py-28 bg-[#181f19] text-white">
        <Container>
          <div className="grid gap-12 rounded-3xl border border-white/15 bg-gradient-to-br from-[#242e26] via-[#181f19] to-[#121613] p-8 sm:p-14 shadow-2xl lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-[#d4a359]">
                Tea Table Bookings
              </span>
              <h2 className="mt-3 font-serif text-3xl leading-tight sm:text-5xl">
                Reserve your quiet table in the tea house.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Whether you seek a solitary morning reflection with a book, an intimate conversation with friends, or a formal 90-minute ceremonial matcha tasting, we hold tables ready for your arrival.
              </p>

              <div className="mt-8 space-y-3">
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <CheckCircle2 className="h-4 w-4 text-[#d4a359]" />
                  <span>Complimentary first steeping guided by our tea sommelier</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <CheckCircle2 className="h-4 w-4 text-[#d4a359]" />
                  <span>Shoes checked into private cedar lockers at entry</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-white/80">
                  <CheckCircle2 className="h-4 w-4 text-[#d4a359]" />
                  <span>Handmade seasonal wagashi sweets paired with every pot</span>
                </div>
              </div>
            </div>

            {/* Interactive Booking Module */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6 sm:p-8 backdrop-blur-xl">
              {bookingState.isConfirmed ? (
                <div className="text-center py-6">
                  <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 mb-3">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">Table Reserved</h3>
                  <p className="text-xs text-white/70 mt-1">
                    {bookingState.tableType} for {bookingState.guests} at {bookingState.time}.
                  </p>
                  <p className="text-xs text-[#d4a359] font-bold mt-2">
                    A confirmation email has been dispatched with directions.
                  </p>
                  <button
                    type="button"
                    onClick={() =>
                      setBookingState((prev) => ({ ...prev, isConfirmed: false }))
                    }
                    className="mt-6 rounded-full border border-white/20 px-5 py-2 text-xs font-bold text-white hover:bg-white/10"
                  >
                    Modify Reservation
                  </button>
                </div>
              ) : (
                <div>
                  <h3 className="font-serif text-xl font-bold text-white">Reserve a Tea Table</h3>
                  <p className="text-xs text-white/60 mt-0.5">Instant booking without deposit</p>

                  <div className="mt-5 space-y-4">
                    <div>
                      <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1.5">
                        Experience & Seating
                      </label>
                      <select
                        value={bookingState.tableType}
                        onChange={(e) =>
                          setBookingState((prev) => ({ ...prev, tableType: e.target.value }))
                        }
                        className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs font-bold text-white focus:border-[#d4a359] focus:outline-none"
                      >
                        <option value="Tatami Garden Room" className="bg-[#181f19]">Tatami Garden Room (Barefoot / Low Tables)</option>
                        <option value="Sunlit Reading Hearth" className="bg-[#181f19]">Sunlit Reading Hearth (Armchairs)</option>
                        <option value="Tea Master Bar" className="bg-[#181f19]">Tea Master Bar (Direct Whisking View)</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1.5">
                          Party Size
                        </label>
                        <select
                          value={bookingState.guests}
                          onChange={(e) =>
                            setBookingState((prev) => ({ ...prev, guests: e.target.value }))
                          }
                          className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs font-bold text-white focus:border-[#d4a359] focus:outline-none"
                        >
                          <option value="1 Guest" className="bg-[#181f19]">1 Guest (Solo Reset)</option>
                          <option value="2 Guests" className="bg-[#181f19]">2 Guests (Intimate)</option>
                          <option value="3 Guests" className="bg-[#181f19]">3 Guests</option>
                          <option value="4+ Guests" className="bg-[#181f19]">4+ Guests</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-[11px] font-bold uppercase tracking-wider text-white/70 mb-1.5">
                          Time Slot
                        </label>
                        <select
                          value={bookingState.time}
                          onChange={(e) =>
                            setBookingState((prev) => ({ ...prev, time: e.target.value }))
                          }
                          className="w-full rounded-xl border border-white/15 bg-white/10 px-3.5 py-2.5 text-xs font-bold text-white focus:border-[#d4a359] focus:outline-none"
                        >
                          <option value="10:30 AM" className="bg-[#181f19]">10:30 AM (Morning Calm)</option>
                          <option value="1:00 PM" className="bg-[#181f19]">1:00 PM</option>
                          <option value="2:30 PM" className="bg-[#181f19]">2:30 PM (Afternoon Tea)</option>
                          <option value="4:00 PM" className="bg-[#181f19]">4:00 PM</option>
                          <option value="5:30 PM" className="bg-[#181f19]">5:30 PM (Evening Twilight)</option>
                        </select>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        setBookingState((prev) => ({ ...prev, isConfirmed: true }))
                      }
                      className="w-full rounded-full bg-[#d4a359] py-3.5 text-xs font-black uppercase tracking-wider text-[#181f19] shadow-xl hover:bg-white transition active:scale-95"
                    >
                      Confirm Tea Table Reservation
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ── STICKY TEA ORDER BADGE ─────────────────────────────────────────── */}
      {totalCartCount > 0 && (
        <div className="fixed bottom-6 right-6 z-50 animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="flex items-center gap-4 rounded-full border border-white/20 bg-[#181f19]/95 px-5 py-3 text-white shadow-2xl backdrop-blur-xl">
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-[#2d4a32] text-xs font-black">
                {totalCartCount}
              </span>
              <span className="text-xs font-bold">
                Table Pots: <span className="text-[#d4a359] font-black">${totalCartPrice.toFixed(2)}</span>
              </span>
            </div>
            <a
              href="#reserve"
              className="rounded-full bg-[#d4a359] px-4 py-1.5 text-xs font-black uppercase text-[#181f19] hover:bg-white transition"
            >
              Finish Order
            </a>
          </div>
        </div>
      )}

      {/* ── CALM JAPANESE MINIMALIST FOOTER ────────────────────────────────── */}
      <footer className="border-t border-[#e5dfd2] bg-[#121613] py-14 text-white">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
            <div>
              <div className="flex items-center gap-2.5">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#2d4a32] text-sm font-black text-white">
                  🍵
                </div>
                <p className="font-serif text-xl font-bold text-white">MorningLeaf</p>
              </div>
              <p className="mt-3 max-w-sm text-xs leading-relaxed text-white/60">
                Single-estate ceremonial green teas, stoneground matcha, and slow botanical infusions steeped in unhurried silence.
              </p>
              <div className="mt-5">
                <Link
                  to="/restaurant"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4a359] hover:underline"
                >
                  <ArrowRight className="h-3.5 w-3.5 rotate-180" />
                  <span>Return to 100Web Restaurant Collection</span>
                </Link>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#d4a359]">Hours</p>
              <div className="mt-3 space-y-1 text-xs text-white/70">
                <p className="font-semibold text-white">Monday – Friday</p>
                <p>8:00 AM – 7:30 PM</p>
                <p className="mt-2 font-semibold text-white">Saturday – Sunday</p>
                <p>9:00 AM – 8:00 PM</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#d4a359]">Location</p>
              <div className="mt-3 space-y-1 text-xs text-white/70">
                <p>123 Leafy Lane</p>
                <p>Bamboo Courtyard District</p>
                <p className="mt-2 text-white font-semibold">(555) 019-4400</p>
                <p>tea@morningleafhouse.com</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-wider text-[#d4a359]">Tea Quick Links</p>
              <ul className="mt-3 space-y-1.5 text-xs text-white/70 font-semibold">
                <li><a href="#scrolls" className="hover:text-white transition">First-Harvest Matcha</a></li>
                <li><a href="#scrolls" className="hover:text-white transition">Yuzu Citrus Sencha</a></li>
                <li><a href="#scrolls" className="hover:text-white transition">Roasted Hojicha</a></li>
                <li><a href="#timer" className="hover:text-white transition">Interactive Steep Timer</a></li>
                <li><a href="#space" className="hover:text-white transition">Tatami Garden Room</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/40">
            <p>© {new Date().getFullYear()} MorningLeaf Tea Sanctuary · 100Web Portfolio</p>
            <p>Designed with React 19, Tailwind CSS & Vite</p>
          </div>
        </Container>
      </footer>
    </main>
  );
}
