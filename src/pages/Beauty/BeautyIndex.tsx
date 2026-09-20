import { useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Heart, Search, Sparkles, X, ArrowUpRight, SlidersHorizontal, Eye, ExternalLink, Play, Pause } from "lucide-react";
import { beautyWebsites, WebsiteDesign } from "../../data/websites";
import { useSafeInterval } from "../../hooks/useSafeInterval";
import { useFavorites } from "../../utils/favorites";
import { prefetchRoute } from "../../utils/routePrefetch";

const conceptMeta: Record<
  string,
  {
    category: string;
    featureTag: string;
    signatureFocus: string;
    curatorialNotes: string;
  }
> = {
  "glowhaus-salon": {
    category: "Hair",
    featureTag: "Interactive Color Bar",
    signatureFocus: "Editorial Color & Blowouts",
    curatorialNotes:
      "Modern hair salon concept designed for social-media natives with high-contrast pastel palettes and online appointment bookings.",
  },
  "luxe-nail-studio": {
    category: "Nails & Grooming",
    featureTag: "Sculptural Gel Suite",
    signatureFocus: "Russian Manicure & Nail Art",
    curatorialNotes:
      "Feminine luxury atelier aesthetic featuring tiered self-care packages, clean typography, and tactile photography.",
  },
  "serenity-spa": {
    category: "Wellness",
    featureTag: "Aromatic Hot Stone Sanctuary",
    signatureFocus: "Holistic Bodywork & Herbal Baths",
    curatorialNotes:
      "Earthen sanctuary with calming moss-green hues, intuitive therapy cards, and silent retreat reservation flows.",
  },
  "blush-beauty-bar": {
    category: "Bridal & Makeup",
    featureTag: "Event Glam & Lash Bar",
    signatureFocus: "Celebrity Makeup & Lash Extensions",
    curatorialNotes:
      "High-energy glam salon engineered for group parties, bridesmaid prep sessions, and bold vibrant visual impact.",
  },
  "velvet-skin-clinic": {
    category: "Skincare & Aesthetics",
    featureTag: "Dermal Skin Mapping",
    signatureFocus: "HydraFacials & Chemical Peels",
    curatorialNotes:
      "Clinical yet soft and welcoming dermatology practice with skin diagnosis questionnaires and transparent doctor profiles.",
  },
  "crown-comb-barber": {
    category: "Nails & Grooming",
    featureTag: "Hot Lather & Whiskey Lounge",
    signatureFocus: "Straight Razor Shaves & Fades",
    curatorialNotes:
      "Classic barbershop sophistication blending dark charcoal leather textures, chair booking, and polished beard sculpting.",
  },
  "pureglow-aesthetics": {
    category: "Skincare & Aesthetics",
    featureTag: "Micro-Droplet Injectables",
    signatureFocus: "Subtle Fillers & Collagen Induction",
    curatorialNotes:
      "Subtle, natural cosmetic rejuvenation experience with clean champagne tones and doctor-led clinical consultation workflows.",
  },
  "bloom-bridal-studio": {
    category: "Bridal & Makeup",
    featureTag: "French Window Arch & Knot Medallion",
    signatureFocus: "Bridal Hair & Wedding Day Glamour",
    curatorialNotes:
      "Haute-couture wedding atelier with French arched framing, Knot medallion seal, trial booking, and romantic cursive typography.",
  },
  "silk-style-hair": {
    category: "Hair",
    featureTag: "Interactive Transformation Slider",
    signatureFocus: "Sunlit Balayage & Parisian Cuts",
    curatorialNotes:
      "Couture Los Angeles hair atelier featuring draggable Before/After transformation sliders, live salon availability status, and master colorist profiles.",
  },
  "aura-wellness-spa": {
    category: "Wellness",
    featureTag: "Heated Magnesium Hydro-Pool",
    signatureFocus: "Thermal Circuits & At-Home Apothecary",
    curatorialNotes:
      "Beverly Hills luxury sanctuary featuring ambient soundscapes, thermal contrast hydrotherapy, master healers, and an interactive shopping bag drawer.",
  },
};

const categoryFilters = [
  "All Concepts",
  "Hair",
  "Wellness",
  "Skincare & Aesthetics",
  "Bridal & Makeup",
  "Nails & Grooming",
];

const principles = [
  {
    number: "01",
    title: "Distinct by Design",
    text: "Zero shared templates. Each concept commands its own visual tone, bespoke typography stack, and emotional resonance tailored to its clientele.",
  },
  {
    number: "02",
    title: "Sensory Immersion",
    text: "From draggable transformation sliders and ambient soundscapes to French arched windows, interaction design bridges digital and physical luxury.",
  },
  {
    number: "03",
    title: "Engineered to Convert",
    text: "Every treatment list, stylist profile, and product apothecary is paired with friction-free concierge booking and trust-building guarantees.",
  },
];

function BeautyCard({
  website,
  index,
  totalCount,
  onQuickView,
}: {
  website: WebsiteDesign;
  index: number;
  totalCount: number;
  onQuickView: (site: WebsiteDesign) => void;
}) {
  const { isFavorited, toggle } = useFavorites(website.id);
  const routePath = `/beauty/${website.slug}`;
  const meta = conceptMeta[website.slug] || {
    category: "Beauty",
    featureTag: "Bespoke Design",
    signatureFocus: website.style,
    curatorialNotes: website.shortDescription,
  };

  return (
    <article
      className="group relative flex flex-col bg-white rounded-lg border border-[#e8e1d7] overflow-hidden shadow-[0_10px_30px_rgba(30,22,18,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(30,22,18,0.12)] hover:border-[#c5a069]"
    >
      {/* Visual Header */}
      <div className="relative aspect-[16/10.5] overflow-hidden bg-[#e6ded6]">
        <img
          src={website.image}
          alt={`${website.title} website live preview`}
          className="h-full w-full object-cover object-center transition duration-700 ease-out group-hover:scale-[1.04]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent pointer-events-none" />

        {/* Category Pill */}
        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[0.66rem] font-black uppercase tracking-[0.14em] text-[#1c1817] shadow-sm backdrop-blur">
          {meta.category}
        </span>

        {/* Shortlist Heart Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggle();
          }}
          title={isFavorited ? "Remove from saved concepts" : "Save concept to shortlist"}
          className={`absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md shadow-sm transition hover:scale-110 active:scale-95 ${
            isFavorited
              ? "bg-rose-500 text-white shadow-rose-500/30"
              : "bg-white/90 text-gray-700 hover:bg-white hover:text-rose-500"
          }`}
          aria-label="Save concept"
        >
          <Heart className={`h-4 w-4 ${isFavorited ? "fill-white" : ""}`} />
        </button>

        {/* Feature Tag Floating Pill */}
        <div className="absolute bottom-4 left-4 right-16 flex items-center gap-2">
          <span className="truncate rounded-md bg-[#161312]/80 px-2.5 py-1 text-[0.68rem] font-bold text-[#f5ebd7] backdrop-blur border border-white/15">
            ✦ {meta.featureTag}
          </span>
        </div>

        {/* Quick View Button */}
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onQuickView(website);
          }}
          className="absolute bottom-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white text-[#161312] shadow-md transition duration-300 hover:bg-[#c5a069] hover:text-white hover:scale-105"
          title="Quick preview concept"
          aria-label={`Quick view ${website.title}`}
        >
          <Eye className="h-4 w-4" />
        </button>
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-7 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-3">
          <div>
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-[#b36c58]">
              {String(index + 1).padStart(2, "0")} / {String(totalCount).padStart(2, "0")} · LIVE EXPERIENCE
            </span>
            <h3 className="beauty-display mt-2 text-2xl sm:text-[1.85rem] font-semibold text-[#181514] tracking-[-0.02em] leading-tight">
              {website.title}
            </h3>
          </div>

          {/* Palette Dots */}
          <div className="flex -space-x-1.5 mt-1 shrink-0" title="Brand Color Palette">
            {[website.colors.primary, website.colors.accent, website.colors.dark].map(
              (color, idx) => (
                <span
                  key={idx}
                  className="h-5 w-5 rounded-full border-2 border-white shadow-xs"
                  style={{ backgroundColor: color }}
                />
              ),
            )}
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-[#685e57] flex-1">
          {website.shortDescription}.
        </p>

        {/* Signature Focus */}
        <div className="mt-4 pt-3 border-t border-dashed border-[#e6ded6] text-xs text-[#524944]">
          <span className="font-bold text-[#b36c58] uppercase tracking-wider text-[0.66rem] block mb-1">
            Focus:
          </span>
          <span className="italic">{meta.signatureFocus}</span>
        </div>

        {/* Action Link Footer */}
        <div className="mt-6 pt-4 border-t border-[#ede7df] flex items-center justify-between">
          <button
            type="button"
            onClick={() => onQuickView(website)}
            className="text-xs font-bold uppercase tracking-[0.1em] text-[#7a7069] hover:text-[#181514] transition"
          >
            Inspect Brand →
          </button>

          <Link
            to={routePath}
            onMouseEnter={() => prefetchRoute(routePath)}
            onTouchStart={() => prefetchRoute(routePath)}
            className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-[0.12em] text-[#181514] hover:text-[#b36c58] transition"
          >
            <span>Launch Site</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export function BeautyIndex() {
  const websites = beautyWebsites.filter(
    (website) => website.status === "completed" || website.status === "live",
  );
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [filter, setFilter] = useState("All Concepts");
  const [searchQuery, setSearchQuery] = useState("");
  const [previewWebsite, setPreviewWebsite] = useState<WebsiteDesign | null>(null);
  const touchStart = useRef<number | null>(null);
  const { favoriteIds } = useFavorites();

  const shortlistedCount = websites.filter((w) => favoriteIds.includes(w.id)).length;

  const filteredWebsites = useMemo(() => {
    let list = websites;

    // Category Filter
    if (filter === "Saved Shortlist") {
      list = list.filter((website) => favoriteIds.includes(website.id));
    } else if (filter !== "All Concepts") {
      list = list.filter((website) => {
        const meta = conceptMeta[website.slug];
        return meta && meta.category === filter;
      });
    }

    // Search Query Filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter((w) => {
        const meta = conceptMeta[w.slug];
        return (
          w.title.toLowerCase().includes(q) ||
          w.shortDescription.toLowerCase().includes(q) ||
          w.style.toLowerCase().includes(q) ||
          (meta &&
            (meta.category.toLowerCase().includes(q) ||
              meta.featureTag.toLowerCase().includes(q) ||
              meta.signatureFocus.toLowerCase().includes(q)))
        );
      });
    }

    return list;
  }, [filter, searchQuery, websites, favoriteIds]);

  const featured = websites[activeSlide] || websites[0];

  useSafeInterval(() => {
    if (paused) return;
    setActiveSlide((slide) => (slide + 1) % websites.length);
  }, 5000);

  const moveSlide = (direction: number) =>
    setActiveSlide(
      (activeSlide + direction + websites.length) % websites.length,
    );

  return (
    <main className="beauty-index bg-[#f8f5f0] text-[#181514] min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&family=Outfit:wght@300;400;500;600;700&family=Pinyon+Script&display=swap');
        .beauty-index { font-family: 'Outfit', -apple-system, sans-serif; }
        .beauty-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .beauty-cursive { font-family: 'Pinyon Script', 'Alex Brush', cursive; }
        .beauty-slide { opacity: 0; transform: scale(1.035); transition: opacity .85s ease, transform 1.4s ease; }
        .beauty-slide.is-active { opacity: 1; transform: scale(1); }
        .beauty-progress { animation: beautyProgress 5s linear both; transform-origin: left; }
        @keyframes beautyProgress { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @media (prefers-reduced-motion: reduce) { .beauty-slide { transition: none; } .beauty-progress { animation: none; } }
      `}</style>

      {/* EXHIBITION HERO CAROUSEL */}
      <section
        className="relative -mt-16 min-h-[100svh] overflow-hidden bg-[#13100f] text-white"
        onTouchStart={(event) => {
          touchStart.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchStart.current === null) return;
          const distance = event.changedTouches[0].clientX - touchStart.current;
          if (Math.abs(distance) > 50) moveSlide(distance > 0 ? -1 : 1);
          touchStart.current = null;
        }}
        aria-roledescription="carousel"
        aria-label="Haute-couture beauty exhibition"
      >
        {websites.map((website, index) => (
          <div
            key={website.id}
            className={`beauty-slide absolute inset-0 ${index === activeSlide ? "is-active" : ""}`}
            aria-hidden={index !== activeSlide}
          >
            <img
              src={website.image}
              alt=""
              className="h-full w-full object-cover object-center"
              fetchPriority={index === 0 ? "high" : "auto"}
            />
            {/* Crystal-Clear Image Presentation: Subtle Top & Bottom Vignettes Only */}
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(12,10,9,0.72)_0%,rgba(12,10,9,0.2)_18%,transparent_38%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(0deg,rgba(10,8,7,0.92)_0%,rgba(10,8,7,0.7)_28%,rgba(10,8,7,0.15)_55%,transparent_78%)]" />
          </div>
        ))}

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1480px] flex-col justify-between px-5 pb-6 pt-20 sm:px-8 lg:px-12 lg:pb-8 lg:pt-24">
          {/* Top Bar Header */}
          <div className="flex items-center justify-between border-b border-white/20 pb-3 text-[0.72rem] font-bold uppercase tracking-[0.2em] text-white/75 backdrop-blur-[2px]">
            <Link
              to="/"
              className="transition hover:text-white flex items-center gap-2"
            >
              <span>←</span> 100 Websites Directory
            </Link>
            <span className="hidden sm:inline-flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#e8a390]" />
              Haute Couture Beauty Atelier Exhibition
            </span>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => setPaused(!paused)}
                className="hover:text-white transition p-1"
                title={paused ? "Resume auto-advance" : "Pause carousel"}
              >
                {paused ? <Play className="h-3 w-3" /> : <Pause className="h-3 w-3" />}
              </button>
              <span>
                {String(activeSlide + 1).padStart(2, "0")} / {String(websites.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* Unobstructed Center Viewport Area (allows full clear imagery to shine) */}
          <div className="flex-1 pointer-events-none min-h-[120px]" />

          {/* Middle-Bottom Presentation - Compact, Elegant & Non-Disturbing */}
          <div className="mx-auto w-full max-w-2xl text-center pb-5 sm:pb-7">
            <div key={featured.id} aria-live="polite" className="flex flex-col items-center">
              <div className="mb-2 flex items-center gap-2.5 text-[0.68rem] sm:text-xs font-bold uppercase tracking-[0.22em] text-[#e8a390]">
                <span className="h-px w-5 bg-[#e8a390]/80" />
                <span>
                  {conceptMeta[featured.slug]?.category || "Beauty"} Concept · {String(activeSlide + 1).padStart(2, "0")} of {String(websites.length).padStart(2, "0")}
                </span>
                <span className="h-px w-5 bg-[#e8a390]/80" />
              </div>

              <h1 className="beauty-display text-2xl sm:text-3xl md:text-4xl lg:text-[2.65rem] leading-tight tracking-[-0.01em] font-normal text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.7)]">
                {featured.title}
              </h1>

              <p className="mt-2 max-w-lg text-xs sm:text-sm leading-relaxed text-white/85 font-light drop-shadow-[0_1px_6px_rgba(0,0,0,0.8)]">
                {featured.shortDescription}.
              </p>

              <div className="mt-2.5 flex flex-wrap items-center justify-center gap-2">
                <span className="rounded-full bg-black/40 px-3 py-0.5 text-[0.68rem] font-semibold text-[#f5ebd7] backdrop-blur-md border border-white/20">
                  ✦ {conceptMeta[featured.slug]?.featureTag || "Bespoke System"}
                </span>
                <span className="text-[0.68rem] font-medium text-white/70 capitalize">
                  {featured.style.split(",").slice(0, 2).join(" · ")}
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
                <Link
                  to={`/beauty/${featured.slug}`}
                  onMouseEnter={() => prefetchRoute(`/beauty/${featured.slug}`)}
                  className="group inline-flex h-9 sm:h-10 items-center gap-2.5 bg-white px-5 text-[0.72rem] font-black uppercase tracking-[0.14em] text-[#161312] transition hover:bg-[#e8a390] hover:text-white rounded-full shadow-lg"
                >
                  <span>Explore Live Website</span>
                  <span className="transition-transform group-hover:translate-x-0.5">→</span>
                </Link>

                <button
                  type="button"
                  onClick={() => setPreviewWebsite(featured)}
                  className="inline-flex h-9 sm:h-10 items-center gap-2 border border-white/35 bg-black/30 backdrop-blur-md px-4 text-[0.72rem] font-bold uppercase tracking-[0.12em] text-white transition hover:bg-white/20 rounded-full"
                >
                  <Eye className="h-3.5 w-3.5" />
                  <span>Inspect Brand</span>
                </button>

                <a
                  href="#collection"
                  className="inline-flex h-9 sm:h-10 items-center px-3.5 text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-white/75 hover:text-white transition"
                >
                  <span>View All 10 ↓</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Thumbnail Selector Bar */}
          <div className="grid gap-4 border-t border-white/20 pt-4 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="grid grid-cols-5 gap-2 lg:grid-cols-10">
              {websites.map((website, index) => (
                <button
                  key={website.id}
                  type="button"
                  onClick={() => setActiveSlide(index)}
                  className={`group text-left transition ${activeSlide === index ? "text-white" : "text-white/45 hover:text-white/80"}`}
                  aria-label={`Show ${website.title}`}
                >
                  <span className="block h-[2px] overflow-hidden bg-white/25 rounded-full">
                    {activeSlide === index && (
                      <span
                        key={`${index}-${activeSlide}`}
                        className={`beauty-progress block h-full bg-[#e8a390] ${paused ? "[animation-play-state:paused]" : ""}`}
                      />
                    )}
                  </span>
                  <span className="mt-2 hidden truncate text-[0.62rem] font-bold uppercase tracking-[0.1em] xl:block">
                    {website.title}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex gap-2 justify-self-end">
              <button
                type="button"
                onClick={() => moveSlide(-1)}
                className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center border border-white/30 text-lg transition hover:bg-white hover:text-black rounded-sm"
                aria-label="Previous concept"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => moveSlide(1)}
                className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center border border-white/30 text-lg transition hover:bg-white hover:text-black rounded-sm"
                aria-label="Next concept"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CURATORIAL STATS BAR */}
      <section className="border-b border-[#e5ded4] bg-[#f2ece3]">
        <div className="mx-auto grid max-w-[1480px] grid-cols-2 divide-x divide-[#e5ded4] px-5 sm:grid-cols-4 sm:px-8 lg:px-12">
          {[
            { value: "10", label: "Haute-Couture Concepts", sub: "Fully Designed & Live" },
            { value: "40+", label: "Curated Rituals & Services", sub: "Interactive Suites" },
            { value: "100%", label: "Bespoke Visual Languages", sub: "Zero Shared Templates" },
            { value: "0ms", label: "Instant Route Prefetching", sub: "High Performance" },
          ].map((item) => (
            <div key={item.label} className="px-4 py-7 text-center">
              <b className="beauty-display block text-3xl sm:text-4xl font-normal text-[#181514]">
                {item.value}
              </b>
              <span className="mt-1 block text-[0.72rem] font-bold uppercase tracking-[0.14em] text-[#825c50]">
                {item.label}
              </span>
              <small className="block text-[0.66rem] text-[#786e68] mt-0.5">
                {item.sub}
              </small>
            </div>
          ))}
        </div>
      </section>

      {/* MAIN COLLECTION DIRECTORY */}
      <section id="collection" className="px-5 py-18 sm:px-8 lg:px-12 lg:py-24">
        <div className="mx-auto max-w-[1480px]">
          {/* Section Header */}
          <div className="grid gap-6 border-b border-[#e5ded4] pb-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#b36c58]">
                The Exhibition Archive
              </p>
              <h2 className="beauty-display mt-3 text-4xl sm:text-5xl lg:text-6xl font-medium tracking-[-0.03em] leading-tight text-[#181514]">
                Ten distinct brands.
                <br />
                <em className="beauty-cursive text-3xl sm:text-5xl lg:text-6xl text-[#b36c58] font-normal pl-2">
                  Ten bespoke atmospheric moods.
                </em>
              </h2>
            </div>
            <p className="max-w-xl text-sm sm:text-base leading-relaxed text-[#6d635c] lg:pb-2">
              Explore meticulously executed websites spanning couture hair studios, thermal wellness sanctuaries, clinical skincare, French bridal ateliers, nail bars, and classic gentleman grooming.
            </p>
          </div>

          {/* Search Bar & Filter Controls */}
          <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            {/* Search Input */}
            <div className="relative max-w-md w-full">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-[#8a7f78]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search concepts, styles, or rituals (e.g. balayage, bridal, facial)..."
                className="w-full pl-11 pr-10 py-3 rounded-full border border-[#d8d0c5] bg-white text-sm text-[#181514] placeholder-[#948a83] focus:outline-none focus:border-[#b36c58] focus:ring-1 focus:ring-[#b36c58]"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            {/* Category Filter Pills */}
            <div
              className="flex gap-2 overflow-x-auto pb-2 [scrollbar-width:none] lg:pb-0"
              role="tablist"
              aria-label="Category filters"
            >
              {categoryFilters.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={filter === cat}
                  onClick={() => setFilter(cat)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] transition ${
                    filter === cat
                      ? "bg-[#181514] text-white shadow-sm"
                      : "border border-[#d8d0c5] bg-white text-[#6d635c] hover:border-[#181514] hover:text-[#181514]"
                  }`}
                >
                  {cat}
                </button>
              ))}

              {/* Saved Shortlist Tab */}
              <button
                type="button"
                role="tab"
                aria-selected={filter === "Saved Shortlist"}
                onClick={() => setFilter("Saved Shortlist")}
                className={`shrink-0 inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.08em] transition ${
                  filter === "Saved Shortlist"
                    ? "bg-rose-600 text-white shadow-sm"
                    : "border border-[#d8d0c5] bg-white text-[#6d635c] hover:border-rose-500 hover:text-rose-600"
                }`}
              >
                <Heart className={`h-3.5 w-3.5 ${shortlistedCount > 0 ? "fill-rose-500 text-rose-500" : ""}`} />
                <span>Shortlist ({shortlistedCount})</span>
              </button>
            </div>
          </div>

          {/* Results Summary Bar */}
          <div className="mt-4 flex items-center justify-between text-xs text-[#786e68]">
            <span>
              Showing <strong>{filteredWebsites.length}</strong> of {websites.length} concepts
              {searchQuery && ` matching "${searchQuery}"`}
              {filter !== "All Concepts" && ` in ${filter}`}
            </span>
            {(searchQuery || filter !== "All Concepts") && (
              <button
                type="button"
                onClick={() => {
                  setFilter("All Concepts");
                  setSearchQuery("");
                }}
                className="text-[#b36c58] font-bold hover:underline"
              >
                Reset Filters
              </button>
            )}
          </div>

          {/* Cards Grid */}
          {filteredWebsites.length === 0 ? (
            <div className="rounded-2xl border border-dashed border-[#d8d0c5] bg-white/70 p-16 text-center my-8">
              <span className="text-3xl mb-2 block">◌</span>
              <p className="font-bold text-lg text-[#181514]">No concepts found</p>
              <p className="text-sm text-[#786e68] mt-1 max-w-md mx-auto">
                {filter === "Saved Shortlist"
                  ? "Click the heart icon on any beauty card to save your favorite concepts into this shortlist."
                  : "Try clearing your search query or selecting another category filter."}
              </p>
              <button
                type="button"
                onClick={() => {
                  setFilter("All Concepts");
                  setSearchQuery("");
                }}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-[#181514] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#b36c58]"
              >
                Show All 10 Concepts
              </button>
            </div>
          ) : (
            <div className="mt-8 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {filteredWebsites.map((website, index) => (
                <BeautyCard
                  key={website.id}
                  website={website}
                  index={index}
                  totalCount={websites.length}
                  onQuickView={(site) => setPreviewWebsite(site)}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* DESIGN PHILOSOPHY SECTION */}
      <section className="bg-[#151211] px-5 py-20 text-white sm:px-8 lg:px-12 lg:py-28">
        <div className="mx-auto max-w-[1480px]">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] items-end border-b border-white/15 pb-12">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#e8a390]">
                Curatorial Standards
              </p>
              <h2 className="beauty-display mt-4 text-4xl sm:text-5xl lg:text-6xl leading-[0.96] tracking-[-0.03em]">
                Beauty is only the beginning.
              </h2>
            </div>
            <p className="max-w-xl text-base leading-relaxed text-white/65 lg:justify-self-end">
              In luxury service industries, trust is non-negotiable. Every micro-interaction, typography hierarchy, and booking flow is calibrated to earn confidence before the first appointment is even scheduled.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3 md:divide-x md:divide-white/15">
            {principles.map((pr) => (
              <article key={pr.number} className="pt-2 md:px-8 first:md:pl-0">
                <span className="text-xs font-black uppercase tracking-[0.16em] text-[#e8a390]">
                  {pr.number}
                </span>
                <h3 className="beauty-display mt-6 text-2xl sm:text-3xl font-medium text-white">
                  {pr.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/55">{pr.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM INVITATION CTA */}
      <section className="relative overflow-hidden bg-[#e6baa8] px-5 py-20 sm:px-8 lg:px-12 lg:py-24 text-[#181514]">
        <div className="absolute -right-24 -top-36 h-96 w-96 rounded-full border border-[#181514]/15 pointer-events-none" />
        <div className="absolute -right-6 -top-16 h-64 w-64 rounded-full border border-[#181514]/15 pointer-events-none" />

        <div className="relative mx-auto flex max-w-[1480px] flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.22em] text-[#5e2e21]">
              Ready to Explore?
            </p>
            <h2 className="beauty-display mt-4 max-w-3xl text-4xl sm:text-6xl lg:text-7xl leading-[0.95] tracking-[-0.04em] font-medium">
              Find the beauty identity that feels like you.
            </h2>
          </div>
          <a
            href="#collection"
            className="group inline-flex min-h-14 shrink-0 items-center justify-between gap-10 bg-[#181514] px-8 text-xs font-black uppercase tracking-[0.14em] text-white hover:bg-white hover:text-[#181514] transition-all duration-300"
          >
            <span>Browse All 10 Concepts</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>
      </section>

      {/* CONCEPT QUICK VIEW MODAL */}
      {previewWebsite && (
        <div
          className="fixed inset-0 z-50 grid place-items-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setPreviewWebsite(null);
          }}
        >
          <div
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#faf8f5] rounded-xl shadow-2xl border border-[#e5ded4] p-6 sm:p-10"
            role="dialog"
            aria-modal="true"
            aria-labelledby="quickview-title"
          >
            <button
              type="button"
              onClick={() => setPreviewWebsite(null)}
              className="absolute right-5 top-5 grid h-9 w-9 place-items-center rounded-full bg-white border border-[#d8d0c5] text-gray-700 hover:text-black hover:bg-gray-100 transition"
              aria-label="Close preview"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-[#b36c58]">
              <Sparkles className="h-3.5 w-3.5" />
              <span>
                {conceptMeta[previewWebsite.slug]?.category || "Beauty"} Architecture
              </span>
            </div>

            <h2
              id="quickview-title"
              className="beauty-display mt-2 text-3xl sm:text-4xl font-medium text-[#181514]"
            >
              {previewWebsite.title}
            </h2>

            <div className="mt-4 aspect-[16/9] w-full overflow-hidden rounded-lg bg-gray-100">
              <img
                src={previewWebsite.image}
                alt={previewWebsite.title}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#786e68]">
                  Curatorial Overview
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-[#524944]">
                  {conceptMeta[previewWebsite.slug]?.curatorialNotes ||
                    previewWebsite.shortDescription}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#786e68]">
                  Signature Architecture
                </h4>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#181514]">
                    <span className="text-[#b36c58]">✦</span>
                    <span>{conceptMeta[previewWebsite.slug]?.featureTag}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#524944]">
                    <span className="text-[#b36c58]">✦</span>
                    <span>Style: {previewWebsite.style}</span>
                  </div>
                </div>

                <h4 className="text-xs font-bold uppercase tracking-[0.12em] text-[#786e68] mt-4">
                  Brand Color Swatches
                </h4>
                <div className="mt-2 flex items-center gap-3">
                  {[
                    { label: "Primary", hex: previewWebsite.colors.primary },
                    { label: "Accent", hex: previewWebsite.colors.accent },
                    { label: "Dark", hex: previewWebsite.colors.dark },
                  ].map((col) => (
                    <div key={col.hex} className="flex items-center gap-1.5">
                      <span
                        className="h-4 w-4 rounded-full border border-black/15 shadow-xs"
                        style={{ backgroundColor: col.hex }}
                      />
                      <span className="text-[0.68rem] font-mono text-[#524944]">
                        {col.hex}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-[#e5ded4] flex items-center justify-between">
              <button
                type="button"
                onClick={() => setPreviewWebsite(null)}
                className="text-xs font-bold uppercase tracking-[0.1em] text-[#786e68] hover:text-[#181514]"
              >
                Close Preview
              </button>

              <Link
                to={`/beauty/${previewWebsite.slug}`}
                className="inline-flex items-center gap-2 bg-[#181514] text-white px-6 py-3 rounded-sm text-xs font-bold uppercase tracking-[0.14em] hover:bg-[#b36c58] transition"
              >
                <span>Launch Live Website</span>
                <ExternalLink className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
