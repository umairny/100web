import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Truck,
  Zap,
  Smartphone,
  Layers,
  Check,
  ExternalLink,
  SlidersHorizontal,
  Star,
  ShoppingBag,
  RotateCcw,
  Palette,
} from "lucide-react";
import { AnimatedSection, Container, CTAButton } from "../../components";
import { ecommerceWebsites } from "../../data/websites";
import "./EcommerceIndex.css";

// Category taxonomy for quick filtering
type FilterCategory = "all" | "dtc" | "athletics" | "home" | "gourmet";

interface CategoryFilterOption {
  id: FilterCategory;
  label: string;
  count: number;
}

// Enhanced features metadata per store for the comparison matrix & tags
const storeFeatureMap: Record<
  string,
  {
    tags: string[];
    hasBuilder: boolean;
    hasQuickView: boolean;
    hasFreeShippingBar: boolean;
    hasMobileBottomNav: boolean;
    rating: string;
    reviewsCount: string;
    cluster: "dtc" | "athletics" | "home" | "gourmet";
  }
> = {
  "cartbloom-market": {
    tags: ["Bundle Builder", "Verified Reviews", "AOV Booster"],
    hasBuilder: true,
    hasQuickView: true,
    hasFreeShippingBar: true,
    hasMobileBottomNav: true,
    rating: "4.9",
    reviewsCount: "1,420+",
    cluster: "dtc",
  },
  "cyclebox-gear": {
    tags: ["Carbon Wheelsets", "Aero Gear", "Bike Studio"],
    hasBuilder: true,
    hasQuickView: true,
    hasFreeShippingBar: true,
    hasMobileBottomNav: true,
    rating: "4.9",
    reviewsCount: "890+",
    cluster: "athletics",
  },
  "desknest-supply": {
    tags: ["Solid Walnut", "Task Ergonomics", "Desk Configurator"],
    hasBuilder: true,
    hasQuickView: true,
    hasFreeShippingBar: true,
    hasMobileBottomNav: true,
    rating: "4.8",
    reviewsCount: "640+",
    cluster: "home",
  },
  "fieldnote-skincare": {
    tags: ["Kakadu Plum C", "AM/PM Rituals", "Skin Routine Matcher"],
    hasBuilder: true,
    hasQuickView: true,
    hasFreeShippingBar: true,
    hasMobileBottomNav: true,
    rating: "5.0",
    reviewsCount: "2,150+",
    cluster: "dtc",
  },
  "glowcart-beauty": {
    tags: ["Dewy Elixir", "Shade Matcher", "Launch Drop"],
    hasBuilder: true,
    hasQuickView: true,
    hasFreeShippingBar: true,
    hasMobileBottomNav: true,
    rating: "4.9",
    reviewsCount: "1,780+",
    cluster: "gourmet",
  },
  "hearth-linen": {
    tags: ["French Flax", "Mudcloth Accents", "Layering Studio"],
    hasBuilder: true,
    hasQuickView: true,
    hasFreeShippingBar: true,
    hasMobileBottomNav: true,
    rating: "4.8",
    reviewsCount: "510+",
    cluster: "home",
  },
  "little-sprout": {
    tags: ["Wooden Rainbows", "Stapelstein", "Milestone Matcher"],
    hasBuilder: true,
    hasQuickView: true,
    hasFreeShippingBar: true,
    hasMobileBottomNav: true,
    rating: "4.9",
    reviewsCount: "1,220+",
    cluster: "home",
  },
  "north-kind": {
    tags: ["GORE-TEX Pro 3L", "Layering Studio", "PFC-Free DWR"],
    hasBuilder: true,
    hasQuickView: true,
    hasFreeShippingBar: true,
    hasMobileBottomNav: true,
    rating: "5.0",
    reviewsCount: "3,400+",
    cluster: "athletics",
  },
  "pantry-pilot": {
    tags: ["Aged Balsamic", "San Marzano D.O.P.", "Refrigerated Dispatch"],
    hasBuilder: true,
    hasQuickView: true,
    hasFreeShippingBar: true,
    hasMobileBottomNav: true,
    rating: "4.9",
    reviewsCount: "980+",
    cluster: "gourmet",
  },
  "paw-parcel": {
    tags: ["Box Builder Studio", "Spring Box", "Grain-Free Treats"],
    hasBuilder: true,
    hasQuickView: true,
    hasFreeShippingBar: true,
    hasMobileBottomNav: true,
    rating: "5.0",
    reviewsCount: "1,630+",
    cluster: "dtc",
  },
};

const conversionPillars = [
  {
    icon: Sparkles,
    title: "Product-Led Merchandising",
    num: "01",
    desc: "Clear collections, dynamic bundles, and high-impact hero visual rhythm keep shoppers engaged without cognitive fatigue.",
  },
  {
    icon: Truck,
    title: "Free Shipping Momentum Engines",
    num: "02",
    desc: "Real-time interactive threshold progress bars in slide-out cart drawers motivate shoppers to add companion items.",
  },
  {
    icon: Zap,
    title: "Zero-Friction Buying Paths",
    num: "03",
    desc: "Slide-out cart drawers, quick-add buttons, instant promo code evaluation, and rich quick-view modals streamline purchase intent.",
  },
  {
    icon: Smartphone,
    title: "Thumb-Zone Mobile Bottom Menus",
    num: "04",
    desc: "Dedicated mobile bottom navigation bars keep core workflows (Explore, Builder, Saved, Cart) within natural thumb reach on phones.",
  },
  {
    icon: ShieldCheck,
    title: "Tangible Trust Cues & Proof",
    num: "05",
    desc: "Purity guarantees, certified testing badges, transparent ingredient breakdowns, and real customer testimonials erase hesitation.",
  },
  {
    icon: Layers,
    title: "Interactive Studio Customizers",
    num: "06",
    desc: "Bespoke builders (like PawParcel Box Builder, Alpine Layering Explorer, and Milestone Toy Matchers) turn passive visitors into buyers.",
  },
];

export function EcommerceIndex() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");

  // All completed websites
  const liveWebsites = useMemo(() => {
    return ecommerceWebsites.filter(
      (website) => website.status === "completed" || website.status === "live",
    );
  }, []);

  // Filter categories with counts
  const categories: CategoryFilterOption[] = useMemo(
    () => [
      { id: "all", label: "All Storefronts", count: liveWebsites.length },
      {
        id: "dtc",
        label: "DTC & Subscriptions",
        count: liveWebsites.filter(
          (w) => storeFeatureMap[w.id]?.cluster === "dtc",
        ).length,
      },
      {
        id: "athletics",
        label: "Performance & Gear",
        count: liveWebsites.filter(
          (w) => storeFeatureMap[w.id]?.cluster === "athletics",
        ).length,
      },
      {
        id: "home",
        label: "Home & Living",
        count: liveWebsites.filter(
          (w) => storeFeatureMap[w.id]?.cluster === "home",
        ).length,
      },
      {
        id: "gourmet",
        label: "Beauty & Culinary",
        count: liveWebsites.filter(
          (w) => storeFeatureMap[w.id]?.cluster === "gourmet",
        ).length,
      },
    ],
    [liveWebsites],
  );

  // Filtered websites based on category and search query
  const filteredWebsites = useMemo(() => {
    return liveWebsites.filter((website) => {
      const cluster = storeFeatureMap[website.id]?.cluster || "dtc";
      const matchesCategory =
        activeCategory === "all" || cluster === activeCategory;

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const tags = storeFeatureMap[website.id]?.tags.join(" ").toLowerCase() || "";
      const matchesTitle = website.title.toLowerCase().includes(q);
      const matchesDesc = website.shortDescription.toLowerCase().includes(q);
      const matchesStyle = website.style.toLowerCase().includes(q);
      const matchesMarket = (website.marketLabel || "").toLowerCase().includes(q);
      const matchesTags = tags.includes(q);

      return matchesTitle || matchesDesc || matchesStyle || matchesMarket || matchesTags;
    });
  }, [liveWebsites, activeCategory, searchQuery]);

  // Featured spotlight store (PawParcel Pets - newest launch)
  const spotlightStore = useMemo(() => {
    return (
      liveWebsites.find((w) => w.id === "paw-parcel") ||
      liveWebsites[0]
    );
  }, [liveWebsites]);

  return (
    <main className="ecom-index-main">
      {/* ==================================================================
          1. HERO HEADER SECTION
          ================================================================== */}
      <section className="ecom-hero">
        <div className="ecom-hero-grid-pattern" />
        <div className="ecom-hero-ambient-glow" />

        <Container>
          <AnimatedSection>
            {/* Top Bar Navigation */}
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-sm font-bold text-white/70 transition hover:text-white"
              >
                <span>&larr;</span> Back to Home
              </Link>
              <div className="ecom-badge-pill">
                <span className="ecom-pulse-dot" />
                <span>10 Completed Storefronts • 100% Production Ready</span>
              </div>
            </div>

            {/* Hero Headline & Intro */}
            <div className="mt-8 max-w-4xl">
              <h1 className="ecom-hero-title">
                E-Commerce Storefronts Engineered for{" "}
                <span className="ecom-title-gradient">
                  Discovery, Trust & Checkout Velocity.
                </span>
              </h1>
              <p className="ecom-hero-subtitle">
                Explore 10 bespoke, fully interactive retail applications. Each
                storefront features curated high-resolution photography, interactive
                product studios, live cart drawers with free-shipping momentum
                engines, and thumb-friendly mobile bottom menus.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap gap-4">
                <CTAButton
                  href="#storefronts"
                  size="lg"
                  className="bg-[#fbcfe8] text-[#2e1065] shadow-lg shadow-purple-950/40 hover:bg-white hover:text-[#2e1065]"
                >
                  Explore All 10 Stores
                </CTAButton>
                <CTAButton
                  href="#pillars"
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white backdrop-blur-sm hover:bg-white/10"
                >
                  Conversion Architecture
                </CTAButton>
              </div>
            </div>

            {/* Metrics Ribbon */}
            <div className="ecom-stats-ribbon">
              <div className="ecom-stat-card">
                <div className="ecom-stat-val">10 / 10</div>
                <div className="ecom-stat-lbl">Live Production Stores</div>
              </div>
              <div className="ecom-stat-card">
                <div className="ecom-stat-val">100+</div>
                <div className="ecom-stat-lbl">Real High-Res Photos</div>
              </div>
              <div className="ecom-stat-card">
                <div className="ecom-stat-val">100%</div>
                <div className="ecom-stat-lbl">Mobile Responsive</div>
              </div>
              <div className="ecom-stat-card">
                <div className="ecom-stat-val">$0 / Free</div>
                <div className="ecom-stat-lbl">Shipping Engine Demos</div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* ==================================================================
          2. STICKY CONTROLS BAR (Search & Category Chips)
          ================================================================== */}
      <nav aria-label="Storefront directory filters" className="ecom-controls-bar">
        <Container>
          <div className="ecom-controls-wrap">
            {/* Category Pills */}
            <div className="ecom-filter-pills" role="tablist">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  role="tab"
                  aria-selected={activeCategory === cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`ecom-filter-btn ${
                    activeCategory === cat.id ? "active" : ""
                  }`}
                >
                  <span>{cat.label}</span>
                  <span
                    className={`rounded-full px-2 py-0.5 text-xs font-black ${
                      activeCategory === cat.id
                        ? "bg-white/20 text-white"
                        : "bg-purple-100 text-purple-800"
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Live Search Input */}
            <div className="ecom-search-box">
              <Search size={17} className="ecom-search-icon" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by store name, tag, or niche..."
                className="ecom-search-input"
                aria-label="Search storefronts"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                  aria-label="Clear search"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </Container>
      </nav>

      {/* ==================================================================
          3. FEATURED STOREFRONT SPOTLIGHT (Newest Launch Highlight)
          ================================================================== */}
      {spotlightStore && activeCategory === "all" && !searchQuery && (
        <section className="pt-12 pb-6">
          <Container>
            <div className="ecom-spotlight-card">
              <div className="ecom-spotlight-grid">
                <div className="ecom-spotlight-info">
                  <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/20 px-3.5 py-1 text-xs font-black uppercase tracking-[0.16em] text-purple-200">
                    <Sparkles size={14} className="text-amber-300" />
                    <span>Featured Store Spotlight</span>
                  </div>

                  <h2 className="mt-4 text-3xl font-black md:text-5xl">
                    {spotlightStore.title}
                  </h2>

                  <p className="mt-2 text-sm font-bold uppercase tracking-wider text-purple-300">
                    {spotlightStore.marketLabel} • {spotlightStore.style}
                  </p>

                  <p className="mt-4 text-base leading-relaxed text-slate-200">
                    {spotlightStore.shortDescription}
                  </p>

                  {/* Highlights checklist */}
                  <div className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2 text-sm font-semibold text-purple-100">
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-emerald-400" />
                      <span>Interactive Box Builder Studio</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-emerald-400" />
                      <span>Spring Adventure Box Launch Sneak Peek</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-emerald-400" />
                      <span>$35 Free Shipping Threshold Progress</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Check size={16} className="text-emerald-400" />
                      <span>Ergonomic Mobile Bottom Bar</span>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    <Link
                      to={`/e-commerce/${spotlightStore.slug}`}
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-black text-[#1e1035] shadow-lg transition hover:bg-purple-100"
                    >
                      <span>Launch {spotlightStore.title}</span>
                      <ArrowRight size={17} />
                    </Link>
                    <span className="text-xs font-bold uppercase tracking-wider text-purple-300/80">
                      12 High-Res Pet Photography Assets
                    </span>
                  </div>
                </div>

                <div className="ecom-spotlight-media">
                  {spotlightStore.image && (
                    <img
                      src={spotlightStore.image}
                      alt={`${spotlightStore.title} preview`}
                      className="ecom-spotlight-img"
                      loading="lazy"
                    />
                  )}
                  <div className="ecom-spotlight-media-overlay" />
                </div>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* ==================================================================
          4. STOREFRONTS SHOWCASE GRID
          ================================================================== */}
      <section id="storefronts" className="py-12 md:py-16">
        <Container>
          {/* Section Heading */}
          <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-purple-700">
                <span>The Complete Catalog</span>
              </div>
              <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
                Explore All 10 Production Storefronts
              </h2>
            </div>
            <div className="text-sm font-bold text-slate-500">
              Showing{" "}
              <span className="font-black text-purple-700">
                {filteredWebsites.length}
              </span>{" "}
              of {liveWebsites.length} stores
            </div>
          </div>

          {/* Empty Search State */}
          {filteredWebsites.length === 0 && (
            <div className="rounded-2xl border border-dashed border-purple-300 bg-purple-50/50 p-12 text-center">
              <ShoppingBag size={48} className="mx-auto text-purple-400" />
              <h3 className="mt-4 text-xl font-black text-slate-800">
                No storefronts found matching "{searchQuery}"
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Try searching for a different keyword, niche, or reset the filters.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-purple-700 px-5 py-2.5 text-sm font-bold text-white hover:bg-purple-800"
              >
                <RotateCcw size={15} />
                <span>Reset Filters</span>
              </button>
            </div>
          )}

          {/* Cards Grid */}
          <div className="ecom-cards-grid">
            {filteredWebsites.map((website) => {
              const meta = storeFeatureMap[website.id];
              return (
                <article key={website.id} className="ecom-card">
                  {/* Media Aspect Container */}
                  <div className="ecom-card-media">
                    {website.image ? (
                      <img
                        src={website.image}
                        alt={`${website.title} website screenshot preview`}
                        className="ecom-card-img"
                        loading="lazy"
                      />
                    ) : (
                      <div
                        className="h-full w-full"
                        style={{
                          background: `linear-gradient(135deg, ${website.colors.primary}, ${website.colors.dark})`,
                        }}
                      />
                    )}

                    <div className="ecom-card-media-overlay" />

                    {/* Live Status Pill */}
                    <div className="ecom-card-status-pill">
                      <span className="ecom-pulse-dot" />
                      <span>Live Store</span>
                    </div>

                    {/* Market Label Badge */}
                    <div className="ecom-card-badge">
                      {website.marketLabel || "E-Commerce"}
                    </div>

                    {/* Color Swatch Dots */}
                    <div
                      className="ecom-card-swatches"
                      title="Curated Brand Palette"
                    >
                      {[
                        website.colors.primary,
                        website.colors.secondary,
                        website.colors.accent,
                        website.colors.dark,
                      ].map((c, i) => (
                        <span
                          key={i}
                          className="ecom-swatch-dot"
                          style={{ backgroundColor: c }}
                          title={`Color: ${c}`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Card Content Body */}
                  <div className="ecom-card-body">
                    <div className="flex items-center justify-between gap-2">
                      <span className="ecom-card-category">
                        {website.marketLabel || "Retail Store"}
                      </span>
                      {meta?.rating && (
                        <div className="flex items-center gap-1 text-xs font-black text-amber-600">
                          <Star size={13} className="fill-amber-400 text-amber-400" />
                          <span>{meta.rating}</span>
                          <span className="text-slate-400 font-normal">
                            ({meta.reviewsCount})
                          </span>
                        </div>
                      )}
                    </div>

                    <h3 className="ecom-card-title">
                      <Link to={`/e-commerce/${website.slug}`}>
                        {website.title}
                      </Link>
                    </h3>

                    <p className="ecom-card-style">{website.style}</p>

                    <p className="ecom-card-desc">{website.shortDescription}</p>

                    {/* Feature Tags */}
                    {meta?.tags && (
                      <div className="ecom-card-tags">
                        {meta.tags.map((tag) => (
                          <span key={tag} className="ecom-tag-pill">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Action Button */}
                    <Link
                      to={`/e-commerce/${website.slug}`}
                      className="ecom-card-action"
                      aria-label={`Launch ${website.title} storefront`}
                    >
                      <span>Open Live Storefront</span>
                      <ArrowRight size={17} className="ecom-card-action-icon" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ==================================================================
          5. CONVERSION PRINCIPLES & ARCHITECTURE SECTION
          ================================================================== */}
      <section id="pillars" className="ecom-pillars-sec">
        <Container>
          <AnimatedSection>
            <div className="max-w-2xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-700">
                Proven E-Commerce Architecture
              </p>
              <h2 className="mt-3 text-3xl font-black text-slate-900 md:text-5xl">
                The 6 Pillars Behind High-Converting Storefronts
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600">
                Every store in this directory implements best practices derived
                from premier DTC brands, reducing friction and maximizing checkout
                momentum.
              </p>
            </div>

            <div className="ecom-pillars-grid">
              {conversionPillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.num} className="ecom-pillar-card">
                    <div className="ecom-pillar-icon-box">
                      <Icon size={24} />
                    </div>
                    <div className="ecom-pillar-num">Pillar {pillar.num}</div>
                    <h3 className="ecom-pillar-title">{pillar.title}</h3>
                    <p className="ecom-pillar-text">{pillar.desc}</p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* ==================================================================
          6. INTERACTIVE FEATURE COMPARISON MATRIX
          ================================================================== */}
      <section className="ecom-matrix-sec">
        <Container>
          <AnimatedSection>
            <div className="max-w-3xl">
              <p className="text-xs font-black uppercase tracking-[0.2em] text-purple-700">
                Technical Capabilities Matrix
              </p>
              <h2 className="mt-2 text-3xl font-black text-slate-900 md:text-4xl">
                Storefront Feature Breakdown
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Compare interactive systems, customizer studios, and responsive
                mechanisms across all 10 live e-commerce websites.
              </p>
            </div>

            <div className="ecom-matrix-table-wrap">
              <table className="ecom-matrix-table">
                <thead>
                  <tr>
                    <th>Storefront</th>
                    <th>Niche / Focus</th>
                    <th>Customizer Studio</th>
                    <th>Slide-Out Cart</th>
                    <th>Free Shipping Bar</th>
                    <th>Mobile Bottom Nav</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {liveWebsites.map((website) => {
                    const meta = storeFeatureMap[website.id];
                    return (
                      <tr key={website.id}>
                        <td className="font-extrabold text-slate-900">
                          <Link
                            to={`/e-commerce/${website.slug}`}
                            className="hover:text-purple-700"
                          >
                            {website.title}
                          </Link>
                        </td>
                        <td>
                          <span className="rounded-full bg-purple-50 px-2.5 py-1 text-xs font-bold text-purple-800">
                            {website.marketLabel || "Retail"}
                          </span>
                        </td>
                        <td>
                          {meta?.hasBuilder ? (
                            <span className="ecom-matrix-check">
                              <Check size={14} />
                            </span>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )}
                        </td>
                        <td>
                          <span className="ecom-matrix-check">
                            <Check size={14} />
                          </span>
                        </td>
                        <td>
                          <span className="ecom-matrix-check">
                            <Check size={14} />
                          </span>
                        </td>
                        <td>
                          <span className="ecom-matrix-check">
                            <Check size={14} />
                          </span>
                        </td>
                        <td>
                          <Link
                            to={`/e-commerce/${website.slug}`}
                            className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-wider text-purple-700 hover:text-purple-900"
                          >
                            <span>Open</span>
                            <ArrowRight size={13} />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* ==================================================================
          7. BOTTOM CALL TO ACTION BANNER
          ================================================================== */}
      <section className="pt-4 pb-16">
        <Container>
          <div className="ecom-cta-banner">
            <div className="ecom-cta-glow" />
            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-white/10 px-4 py-1 text-xs font-black uppercase tracking-[0.2em] text-purple-200">
                <Sparkles size={14} className="text-amber-300" />
                <span>100 Websites Showcase</span>
              </div>
              <h2 className="mt-5 text-3xl font-black text-white md:text-5xl">
                Ready to Experience Modern E-Commerce?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-purple-100/80 md:text-lg">
                Jump into any of the 10 production-grade storefronts to test real
                interaction models, custom box builders, and seamless micro-checkouts.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <CTAButton
                  href="#storefronts"
                  size="lg"
                  className="bg-white text-[#170d2c] hover:bg-purple-100 hover:text-[#170d2c]"
                >
                  Browse Storefronts
                </CTAButton>
                <Link
                  to="/"
                  className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3.5 text-sm font-bold text-white transition hover:bg-white/10"
                >
                  Return to Home Directory
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}

export default EcommerceIndex;
