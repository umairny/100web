import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  Heart,
  Search,
  X,
  Sparkles,
  ArrowRight,
  Zap,
  LayoutGrid,
  ExternalLink,
  TrendingUp,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Rocket,
  Code2,
  Users,
  XCircle,
  MessageSquare,
} from "lucide-react";
import { useState, useMemo, type ReactNode } from "react";
import { AnimatedSection, Container } from "../components";
import { imageUrl } from "../assets/optimized";
import { useFavorites } from "../utils/favorites";
import { useSafeInterval } from "../hooks/useSafeInterval";
import { prefetchRoute } from "../utils/routePrefetch";
import {
  allWebsites,
  beautyWebsites,
  categories,
  constructionWebsites,
  ecommerceWebsites,
  educationWebsites,
  fitnessWebsites,
  medicalWebsites,
  portfolioWebsites,
  realEstateWebsites,
  restaurantWebsites,
  saasWebsites,
} from "../data/websites";

const homeImages = {
  heroShowcase: {
    src: imageUrl("home/hero-showcase.webp"),
    alt: "100 website design showcase by Umair Ahmad",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_20%_20%,rgba(139,111,82,0.25),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(239,59,45,0.2),transparent_24%),linear-gradient(135deg,#f7f2e8,#ffffff_48%,#111827)]",
  },
  restaurantCollection: {
    src: imageUrl("home/restaurant-collection-collage.webp"),
    alt: "Restaurant website design collection preview collage",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_18%_22%,rgba(239,59,45,0.22),transparent_24%),radial-gradient(circle_at_80%_78%,rgba(244,161,26,0.22),transparent_26%),linear-gradient(135deg,#fff7e8,#ffffff)]",
  },
  beautyCollection: {
    src: imageUrl("home/beauty-collection-collage.webp"),
    alt: "Beauty and salon website design collection preview collage",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_20%_24%,rgba(236,72,153,0.22),transparent_24%),radial-gradient(circle_at_78%_72%,rgba(215,181,109,0.2),transparent_24%),linear-gradient(135deg,#fff0f6,#ffffff)]",
  },
  realEstatePreview: {
    src: imageUrl("home/real-estate-preview.webp"),
    alt: "Real estate website collection preview",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_18%_22%,rgba(21,62,117,0.2),transparent_24%),radial-gradient(circle_at_80%_74%,rgba(251,191,36,0.2),transparent_24%),linear-gradient(135deg,#eef6ff,#ffffff)]",
  },
  fitnessPreview: {
    src: imageUrl("home/fitness-preview.webp"),
    alt: "Fitness website collection preview",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_18%_22%,rgba(20,83,45,0.22),transparent_24%),radial-gradient(circle_at_80%_74%,rgba(132,204,22,0.2),transparent_24%),linear-gradient(135deg,#ecfdf5,#ffffff)]",
  },
  medicalPreview: {
    src: imageUrl("home/medical-preview.webp"),
    alt: "Medical website collection preview",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_18%_22%,rgba(15,118,110,0.2),transparent_24%),radial-gradient(circle_at_80%_74%,rgba(14,165,233,0.16),transparent_24%),linear-gradient(135deg,#ecfeff,#ffffff)]",
  },
  constructionPreview: {
    src: imageUrl("home/construction-preview.webp"),
    alt: "Construction website collection preview",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_18%_22%,rgba(146,64,14,0.22),transparent_24%),radial-gradient(circle_at_80%_74%,rgba(63,63,70,0.18),transparent_24%),linear-gradient(135deg,#fff7ed,#ffffff)]",
  },
  educationPreview: {
    src: imageUrl("home/education-preview.webp"),
    alt: "Education website collection preview",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_18%_22%,rgba(55,48,163,0.2),transparent_24%),radial-gradient(circle_at_80%_74%,rgba(34,197,94,0.16),transparent_24%),linear-gradient(135deg,#eef2ff,#ffffff)]",
  },
  ecommercePreview: {
    src: imageUrl("home/ecommerce-preview.webp"),
    alt: "E-commerce website collection preview",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_18%_22%,rgba(124,58,237,0.2),transparent_24%),radial-gradient(circle_at_80%_74%,rgba(236,72,153,0.16),transparent_24%),linear-gradient(135deg,#faf5ff,#ffffff)]",
  },
  portfolioPreview: {
    src: imageUrl("home/portfolio-preview.webp"),
    alt: "Portfolio website collection preview",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_18%_22%,rgba(3,105,161,0.2),transparent_24%),radial-gradient(circle_at_80%_74%,rgba(56,189,248,0.16),transparent_24%),linear-gradient(135deg,#f0f9ff,#ffffff)]",
  },
  saasPreview: {
    src: imageUrl("home/saas-preview.webp"),
    alt: "SaaS website collection preview",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_18%_22%,rgba(7,89,133,0.2),transparent_24%),radial-gradient(circle_at_80%_74%,rgba(20,184,166,0.16),transparent_24%),linear-gradient(135deg,#e0f2fe,#ffffff)]",
  },
};

function HomeImage({
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

function SectionPill({ children, icon }: { children: ReactNode; icon?: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#1e8b79]/20 bg-[#1e8b79]/8 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-[#1e8b79]">
      {icon ?? <span className="h-1.5 w-1.5 rounded-full bg-[#1e8b79]" />}
      {children}
    </div>
  );
}

export function Home() {
  const liveRestaurants = restaurantWebsites.filter(
    (w) => w.status === "completed" || w.status === "live",
  );
  const liveBeauty = beautyWebsites.filter(
    (w) => w.status === "completed" || w.status === "live",
  );
  const liveRealEstate = realEstateWebsites.filter(
    (w) => w.status === "completed" || w.status === "live",
  );
  const liveFitness = fitnessWebsites.filter(
    (w) => w.status === "completed" || w.status === "live",
  );
  const liveMedical = medicalWebsites.filter(
    (w) => w.status === "completed" || w.status === "live",
  );
  const liveConstruction = constructionWebsites.filter(
    (w) => w.status === "completed" || w.status === "live",
  );
  const liveEducation = educationWebsites.filter(
    (w) => w.status === "completed" || w.status === "live",
  );
  const liveEcommerce = ecommerceWebsites.filter(
    (w) => w.status === "completed" || w.status === "live",
  );
  const livePortfolio = portfolioWebsites.filter(
    (w) => w.status === "completed" || w.status === "live",
  );
  const liveSaaS = saasWebsites.filter(
    (w) => w.status === "completed" || w.status === "live",
  );

  const completedDesignCount =
    liveRestaurants.length +
    liveBeauty.length +
    liveRealEstate.length +
    liveFitness.length +
    liveMedical.length +
    liveConstruction.length +
    liveEducation.length +
    liveEcommerce.length +
    livePortfolio.length +
    liveSaaS.length;
  const plannedCount = 100;
  const remainingCount = plannedCount - completedDesignCount;
  const completionPercent = Math.round((completedDesignCount / plannedCount) * 100);

  const liveCollections = [
    {
      title: "Restaurant",
      text: "Dining concepts with menu flow, atmosphere, reservations, and visual appetite.",
      href: "/restaurant",
      image: homeImages.restaurantCollection,
      count: liveRestaurants.length,
      icon: "🍽️",
      accentColor: "#c2400a",
      bgGradient: "from-orange-600 to-red-500",
      button: "Open restaurants",
    },
    {
      title: "Beauty",
      text: "Salon, spa, bridal, nails, skin, and wellness pages with booking-first UX.",
      href: "/beauty",
      image: homeImages.beautyCollection,
      count: liveBeauty.length,
      icon: "💄",
      accentColor: "#be185d",
      bgGradient: "from-pink-600 to-rose-500",
      button: "Open beauty",
    },
    {
      title: "Real Estate",
      text: "Listings, neighborhoods, agent trust, market positioning, and lead capture.",
      href: "/real-estate",
      image: homeImages.realEstatePreview,
      count: liveRealEstate.length,
      icon: "🏠",
      accentColor: "#1d4ed8",
      bgGradient: "from-blue-600 to-cyan-500",
      button: "Open real estate",
    },
    {
      title: "Fitness",
      text: "Gyms, studios, coaching, recovery, membership, and trial conversion pages.",
      href: "/fitness",
      image: homeImages.fitnessPreview,
      count: liveFitness.length,
      icon: "💪",
      accentColor: "#15803d",
      bgGradient: "from-green-600 to-emerald-500",
      button: "Open fitness",
    },
    {
      title: "Medical",
      text: "Clinic pages built around trust, services, patient pathways, and appointments.",
      href: "/medical",
      image: homeImages.medicalPreview,
      count: liveMedical.length,
      icon: "⚕️",
      accentColor: "#0e7490",
      bgGradient: "from-cyan-600 to-teal-500",
      button: "Open medical",
    },
    {
      title: "Construction",
      text: "Builder and contractor concepts focused on proof, services, and estimates.",
      href: "/construction",
      image: homeImages.constructionPreview,
      count: liveConstruction.length,
      icon: "🏗️",
      accentColor: "#b45309",
      bgGradient: "from-amber-600 to-yellow-500",
      button: "Open construction",
    },
    {
      title: "Education",
      text: "Learning pages with programs, outcomes, faculty trust, and enrollment paths.",
      href: "/education",
      image: homeImages.educationPreview,
      count: liveEducation.length,
      icon: "📚",
      accentColor: "#4338ca",
      bgGradient: "from-indigo-600 to-purple-500",
      button: "Open education",
    },
    {
      title: "E-commerce",
      text: "Retail homepages shaped around discovery, offers, trust, and cart momentum.",
      href: "/e-commerce",
      image: homeImages.ecommercePreview,
      count: liveEcommerce.length,
      icon: "🛍️",
      accentColor: "#7c3aed",
      bgGradient: "from-violet-600 to-fuchsia-500",
      button: "Open e-commerce",
    },
    {
      title: "Portfolio",
      text: "Creator and studio pages for positioning, selected work, services, and inquiry.",
      href: "/portfolio",
      image: homeImages.portfolioPreview,
      count: livePortfolio.length,
      icon: "✨",
      accentColor: "#0369a1",
      bgGradient: "from-sky-600 to-blue-500",
      button: "Open portfolio",
    },
    {
      title: "SaaS",
      text: "Software pages with product value, workflows, integrations, pricing, and trials.",
      href: "/saas",
      image: homeImages.saasPreview,
      count: liveSaaS.length,
      icon: "💻",
      accentColor: "#0d7d6e",
      bgGradient: "from-teal-600 to-emerald-500",
      button: "Open SaaS",
    },
  ];

  const featuredWebsites = [
    ...liveRestaurants.slice(0, 1),
    ...liveBeauty.slice(0, 1),
    ...liveRealEstate.slice(0, 1),
    ...liveFitness.slice(0, 1),
    ...liveMedical.slice(0, 1),
    ...liveConstruction.slice(0, 1),
    ...liveEducation.slice(0, 1),
    ...liveEcommerce.slice(0, 1),
    ...livePortfolio.slice(0, 1),
    ...liveSaaS.slice(0, 1),
  ];

  const heroSlides = [
    {
      label: "Portfolio preview",
      kicker: `${completedDesignCount} live homepages`,
      title: `Browse ${categories.length} business categories from one focused portfolio hub.`,
      image: homeImages.heroShowcase,
      href: "#collections",
      cta: "Browse collections",
      accent: "#f0c76a",
    },
    {
      label: "Restaurant systems",
      kicker: `${liveRestaurants.length} dining concepts`,
      title: "Menu-first restaurant pages with distinct atmospheres and conversion sections.",
      image: homeImages.restaurantCollection,
      href: "/restaurant",
      cta: "View restaurants",
      accent: "#ee765c",
    },
    {
      label: "Beauty brands",
      kicker: `${liveBeauty.length} beauty concepts`,
      title: "Salon, spa, skin, and wellness pages with soft visuals and clear booking flows.",
      image: homeImages.beautyCollection,
      href: "/beauty",
      cta: "View beauty",
      accent: "#f2a7bb",
    },
  ];

  const [activeHeroIndex, setActiveHeroIndex] = useState(0);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const activeHeroSlide = heroSlides[activeHeroIndex];

  const { favoriteIds, toggle } = useFavorites();
  const [featuredTab, setFeaturedTab] = useState<"featured" | "all" | "shortlist">("featured");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const shortlistedWebsites = useMemo(
    () => allWebsites.filter((site) => favoriteIds.includes(site.id)),
    [favoriteIds],
  );

  const categoryFilters = useMemo(
    () => [
      { id: "all", label: "All", icon: "✦" },
      { id: "restaurant", label: "Restaurant", icon: "🍽️" },
      { id: "beauty", label: "Beauty", icon: "💄" },
      { id: "real estate", label: "Real Estate", icon: "🏠" },
      { id: "fitness", label: "Fitness", icon: "💪" },
      { id: "medical", label: "Medical", icon: "⚕️" },
      { id: "construction", label: "Construction", icon: "🏗️" },
      { id: "education", label: "Education", icon: "📚" },
      { id: "e-commerce", label: "E-Commerce", icon: "🛍️" },
      { id: "portfolio", label: "Portfolio", icon: "✨" },
      { id: "saas", label: "SaaS", icon: "💻" },
    ],
    [],
  );

  const displayedWebsites = useMemo(() => {
    let list =
      featuredTab === "shortlist"
        ? shortlistedWebsites
        : featuredTab === "featured"
          ? featuredWebsites
          : allWebsites.filter((s) => s.status === "completed" || s.status === "live");

    if (selectedCategory !== "all") {
      list = list.filter((site) =>
        site.category.toLowerCase().includes(selectedCategory.toLowerCase()),
      );
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (site) =>
          site.title.toLowerCase().includes(q) ||
          site.shortDescription.toLowerCase().includes(q) ||
          site.category.toLowerCase().includes(q),
      );
    }

    return list;
  }, [featuredTab, selectedCategory, searchQuery, featuredWebsites, shortlistedWebsites]);

  useSafeInterval(() => {
    if (isHeroPaused || heroSlides.length < 2) return;
    setActiveHeroIndex((c) => (c + 1) % heroSlides.length);
  }, 5500);

  const moveHeroSlide = (direction: -1 | 1) => {
    setActiveHeroIndex((c) => (c + direction + heroSlides.length) % heroSlides.length);
  };

  return (
    <main className="bg-white text-[#17211d]">
      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className="relative -mt-[4.25rem] overflow-hidden bg-[#060f0b] pb-20 pt-36 text-white md:pb-28 md:pt-44">
        {/* Multi-layer background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_-15%_5%,rgba(30,139,121,0.55),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_55%_at_110%_-8%,rgba(238,118,92,0.18),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_75%_at_50%_115%,rgba(15,60,45,0.6),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_30%_at_80%_60%,rgba(240,199,106,0.07),transparent)]" />
        </div>
        {/* Dot grid */}
        <div className="absolute inset-0 opacity-[0.045] [background-image:radial-gradient(circle,rgba(255,255,255,0.5)_1px,transparent_1px)] [background-size:28px_28px]" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white to-transparent" />

        {/* Floating orbs */}
        <div className="absolute left-[8%] top-[22%] h-72 w-72 rounded-full bg-[#1e8b79]/12 blur-3xl" />
        <div className="absolute right-[5%] top-[15%] h-56 w-56 rounded-full bg-[#f0c76a]/8 blur-3xl" />

        <Container>
          <div className="relative grid gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16">
            {/* Left: text */}
            <AnimatedSection animation="slide-left">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#f0c76a]/22 bg-[#f0c76a]/9 px-4 py-2 text-[11px] font-black uppercase tracking-[0.2em] text-[#f0c76a]">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f0c76a] opacity-60" />
                  <span className="relative h-2 w-2 rounded-full bg-[#f0c76a]" />
                </span>
                Umair · 100 Website Designs
              </div>

              <h1 className="mt-7 text-[2.75rem] font-black leading-[1.02] tracking-tight md:text-[3.25rem] lg:text-[2.9rem] xl:text-[3.6rem]">
                100 production‑ready{" "}
                <span className="relative inline-block">
                  <span className="text-white/28">web design</span>
                </span>
                <br />
                <span className="relative">
                  templates.
                  <span className="absolute -bottom-1.5 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-[#1e8b79] via-[#1e8b79]/60 to-transparent" />
                </span>
              </h1>

              <p className="mt-6 max-w-lg text-base leading-8 text-white/52 md:text-lg md:leading-8">
                Every homepage built with a distinct brand direction — real business categories,
                real visual systems, no repeated color swaps.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="#collections"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#f0c76a] px-7 py-3.5 text-sm font-black text-[#0a1a15] shadow-xl shadow-[#f0c76a]/25 transition duration-200 hover:-translate-y-0.5 hover:bg-white hover:shadow-white/30 active:scale-95"
                >
                  Browse All Categories
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="#featured"
                  className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/6 px-7 py-3.5 text-sm font-black text-white/80 backdrop-blur transition duration-200 hover:border-white/28 hover:bg-white/11 hover:text-white"
                >
                  <Sparkles className="h-4 w-4 text-[#f0c76a]" />
                  View Templates
                </Link>
              </div>

              {/* Stats row */}
              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/8 pt-8">
                {[
                  { value: completedDesignCount, label: "Live now", color: "#6ee7b7" },
                  { value: categories.length, label: "Categories", color: "#93c5fd" },
                  { value: plannedCount, label: "Planned", color: "#f0c76a" },
                ].map(({ value, label, color }) => (
                  <div key={label} className="flex items-baseline gap-2">
                    <p className="text-3xl font-black" style={{ color }}>
                      {value}
                    </p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/38">
                      {label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Progress */}
              <div className="mt-6 max-w-xs">
                <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-[0.16em]">
                  <span className="text-white/30">Progress</span>
                  <span style={{ color: "#f0c76a" + "aa" }}>
                    {completionPercent}% · {remainingCount} remaining
                  </span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/7">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#1e8b79] via-[#a3e6d8] to-[#f0c76a] shadow-[0_0_10px_rgba(240,199,106,0.35)]"
                    style={{ width: `${completionPercent}%` }}
                  />
                </div>
              </div>

              {/* Category quick-links */}
              <div className="mt-6 flex flex-wrap gap-1.5">
                {liveCollections.slice(0, 6).map((c) => (
                  <Link
                    key={c.title}
                    to={c.href}
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/8 px-3 py-1 text-[11px] font-bold text-white/42 transition hover:border-white/22 hover:text-white/72"
                  >
                    <span className="text-xs">{c.icon}</span>
                    {c.title}
                  </Link>
                ))}
              </div>
            </AnimatedSection>

            {/* Right: carousel */}
            <AnimatedSection animation="scale-in" delay="delay-200">
              <div
                className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 shadow-[0_40px_80px_rgba(0,0,0,0.55)] backdrop-blur-sm"
                onMouseEnter={() => setIsHeroPaused(true)}
                onMouseLeave={() => setIsHeroPaused(false)}
                onFocusCapture={() => setIsHeroPaused(true)}
                onBlurCapture={() => setIsHeroPaused(false)}
              >
                {/* Carousel header */}
                <div className="flex items-center justify-between border-b border-white/8 px-4 py-3">
                  <div className="flex gap-1.5">
                    {["bg-[#ff5f56]", "bg-[#ffbe2d]", "bg-[#27c840]"].map((c) => (
                      <span key={c} className={`h-2.5 w-2.5 rounded-full ${c} opacity-70`} />
                    ))}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-[0.18em] text-white/32">
                    {activeHeroSlide.label}
                  </span>
                  <div className="flex gap-1.5">
                    <button
                      type="button"
                      onClick={() => moveHeroSlide(-1)}
                      className="grid h-7 w-7 place-items-center rounded-full bg-white/8 text-white/60 transition hover:bg-white/18 hover:text-white focus:outline-none"
                      aria-label="Previous slide"
                    >
                      <ChevronLeft className="h-3.5 w-3.5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => moveHeroSlide(1)}
                      className="grid h-7 w-7 place-items-center rounded-full bg-white/8 text-white/60 transition hover:bg-white/18 hover:text-white focus:outline-none"
                      aria-label="Next slide"
                    >
                      <ChevronRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>

                <HomeImage
                  key={activeHeroSlide.label}
                  src={activeHeroSlide.image.src}
                  alt={activeHeroSlide.image.alt}
                  fallbackStyle={activeHeroSlide.image.fallbackStyle}
                  className="min-h-[440px]"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="rounded-2xl border border-white/10 bg-black/52 p-4 backdrop-blur-md">
                      <p
                        className="text-[10px] font-black uppercase tracking-[0.2em]"
                        style={{ color: activeHeroSlide.accent }}
                      >
                        {activeHeroSlide.kicker}
                      </p>
                      <p className="mt-1.5 text-sm font-black leading-snug text-white">
                        {activeHeroSlide.title}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <Link
                          to={activeHeroSlide.href}
                          className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-black transition hover:-translate-y-px"
                          style={{
                            background: activeHeroSlide.accent + "22",
                            border: `1px solid ${activeHeroSlide.accent}40`,
                          }}
                        >
                          <span style={{ color: activeHeroSlide.accent }}>
                            {activeHeroSlide.cta}
                          </span>
                          <ArrowRight
                            className="h-3 w-3"
                            style={{ color: activeHeroSlide.accent }}
                          />
                        </Link>
                        <div className="flex gap-1.5">
                          {heroSlides.map((_, i) => (
                            <button
                              key={i}
                              type="button"
                              onClick={() => setActiveHeroIndex(i)}
                              className={`rounded-full transition-all duration-300 ${
                                i === activeHeroIndex
                                  ? "h-1.5 w-6 bg-white"
                                  : "h-1.5 w-1.5 bg-white/28 hover:bg-white/52"
                              }`}
                              aria-label={`Slide ${i + 1}`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </HomeImage>

                {/* Progress bar */}
                <div className="h-0.5 bg-white/6">
                  <span
                    key={`${activeHeroIndex}-${isHeroPaused}`}
                    className="home-hero-carousel-progress block h-full"
                    style={{
                      backgroundColor: activeHeroSlide.accent,
                      animationPlayState: isHeroPaused ? "paused" : "running",
                    }}
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────────────── */}
      <div className="home-marquee-wrap overflow-hidden border-y border-[#0d1f1a]/10 bg-[#0a1a14] py-3.5 cursor-default select-none">
        <div className="home-marquee-track">
          {[...liveCollections, ...liveCollections].map((c, i) => (
            <span key={`${c.title}-${i}`} className="flex shrink-0 items-center">
              <span className="px-6 text-[10px] font-black uppercase tracking-[0.28em] text-white/38 transition-colors hover:text-[#f0c76a]">
                <span className="mr-2 text-sm">{c.icon}</span>
                {c.title}
              </span>
              <span className="text-[#f0c76a]/25 text-sm">·</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── COLLECTIONS GRID ─────────────────────────────────────────── */}
      <section id="collections" className="bg-[#f7f8fa] py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionPill icon={<LayoutGrid className="h-3 w-3" />}>
                {categories.length} Categories
              </SectionPill>
              <h2 className="mt-5 text-4xl font-black leading-[1.06] tracking-tight md:text-5xl">
                Every business type,
                <br />
                <span className="text-[#5f6963]">one focused hub.</span>
              </h2>
            </div>
            <div className="max-w-xs">
              <p className="text-sm leading-7 text-[#5f6963]">
                Pick a category to open its full collection of live homepage demos — each one
                completely distinct.
              </p>
              <Link
                to="#featured"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-black text-[#1e8b79] transition hover:text-[#0d1f1a]"
              >
                Browse all templates <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-5">
            {liveCollections.map((collection, i) => (
              <Link
                key={collection.title}
                to={collection.href}
                className="group relative overflow-hidden rounded-2xl border border-gray-200/50 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-transparent hover:shadow-[0_16px_40px_rgba(0,0,0,0.12)]"
                style={{ animationDelay: `${i * 35}ms` }}
              >
                {/* Thumbnail */}
                <HomeImage
                  src={collection.image.src}
                  alt={collection.image.alt}
                  fallbackStyle={collection.image.fallbackStyle}
                  className="h-40"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                  {/* Hover color wash */}
                  <div
                    className="absolute inset-0 opacity-0 transition-opacity duration-400 group-hover:opacity-20"
                    style={{ background: collection.accentColor }}
                  />
                  {/* Live badge */}
                  <div className="absolute left-2.5 top-2.5 flex items-center gap-1 rounded-full bg-black/55 px-2 py-0.5 text-[9px] font-black text-white backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    {collection.count} live
                  </div>
                  {/* Icon */}
                  <div className="absolute right-2.5 top-2.5 flex h-7 w-7 items-center justify-center rounded-lg bg-black/45 text-sm backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    {collection.icon}
                  </div>
                  {/* Title overlay */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5">
                    <p className="text-base font-black leading-tight text-white">
                      {collection.title}
                    </p>
                    <p
                      className="mt-0.5 text-[9px] font-black uppercase tracking-[0.16em] opacity-0 transition-all duration-300 group-hover:opacity-100"
                      style={{ color: collection.accentColor }}
                    >
                      {collection.button} →
                    </p>
                  </div>
                </HomeImage>

                {/* Card body */}
                <div className="p-3.5">
                  <p
                    className="text-[10px] font-black uppercase tracking-[0.18em]"
                    style={{ color: collection.accentColor }}
                  >
                    {collection.count} demos
                  </p>
                  <p className="mt-1.5 text-[11px] leading-5 text-[#5f6963] line-clamp-2">
                    {collection.text}
                  </p>
                </div>

                {/* Bottom accent */}
                <div
                  className="absolute inset-x-0 bottom-0 h-0.5 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                  style={{ background: `linear-gradient(90deg, ${collection.accentColor}, transparent)` }}
                />
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FEATURE HIGHLIGHTS STRIP ─────────────────────────────────── */}
      <section className="border-y border-gray-100 bg-white py-14">
        <Container>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {[
              {
                icon: <Zap className="h-5 w-5" />,
                title: "React + TypeScript",
                text: "Every template is a real, runnable component with clean code.",
                color: "#f0c76a",
                bg: "bg-amber-50",
              },
              {
                icon: <Sparkles className="h-5 w-5" />,
                title: "Distinct brand systems",
                text: "Each design has its own visual language, palette, and feel.",
                color: "#1e8b79",
                bg: "bg-emerald-50",
              },
              {
                icon: <TrendingUp className="h-5 w-5" />,
                title: "Conversion-focused",
                text: "Layouts built around real business goals and user intent.",
                color: "#4338ca",
                bg: "bg-indigo-50",
              },
              {
                icon: <Heart className="h-5 w-5" />,
                title: "Shortlist & compare",
                text: "Save favorites, share with a link, and compare side-by-side.",
                color: "#be185d",
                bg: "bg-rose-50",
              },
            ].map(({ icon, title, text, color, bg }) => (
              <div key={title} className="flex flex-col gap-3">
                <div
                  className={`flex h-11 w-11 items-center justify-center rounded-2xl ${bg}`}
                  style={{ color }}
                >
                  {icon}
                </div>
                <p className="text-sm font-black text-[#17211d]">{title}</p>
                <p className="text-xs leading-5 text-[#5f6963]">{text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── FEATURED / BROWSE SECTION ────────────────────────────────── */}
      <section id="featured" className="bg-[#f7f8fa] py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <SectionPill icon={<Sparkles className="h-3 w-3" />}>Template browser</SectionPill>
              <h2 className="mt-5 text-4xl font-black leading-[1.06] tracking-tight md:text-5xl">
                Browse the full library.
                <span className="ml-3 inline-block align-middle rounded-xl bg-[#0d1f1a] px-3 py-1.5 text-xl text-[#f0c76a]">
                  {allWebsites.filter((s) => s.status === "completed" || s.status === "live").length}
                </span>
              </h2>
            </div>
            <p className="max-w-xs text-sm leading-7 text-[#5f6963]">
              Filter by category, search by name, or open your shortlist to compare designs.
            </p>
          </AnimatedSection>

          {/* Controls bar */}
          <div className="mb-6 overflow-hidden rounded-2xl border border-gray-200/60 bg-white shadow-sm">
            <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between">
              {/* Mode tabs */}
              <div className="flex gap-1.5">
                {[
                  { id: "featured", label: `Featured (${featuredWebsites.length})`, icon: "✦" },
                  { id: "all", label: "All Live", icon: "🔥" },
                  { id: "shortlist", label: `Saved (${shortlistedWebsites.length})`, icon: "♥" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => {
                      setFeaturedTab(tab.id as typeof featuredTab);
                      if (tab.id === "featured") setSelectedCategory("all");
                    }}
                    className={`flex items-center gap-1.5 rounded-xl px-4 py-2 text-xs font-black transition-all duration-200 ${
                      featuredTab === tab.id
                        ? tab.id === "shortlist"
                          ? "bg-rose-500 text-white shadow-sm shadow-rose-500/20"
                          : "bg-[#0d1f1a] text-white shadow-sm"
                        : tab.id === "shortlist"
                          ? "text-gray-500 hover:bg-rose-50 hover:text-rose-600"
                          : "text-gray-500 hover:bg-gray-100 hover:text-[#17211d]"
                    }`}
                  >
                    <span>{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative w-full sm:w-60">
                <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search templates..."
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2 pl-9 pr-8 text-xs font-semibold text-[#17211d] placeholder-gray-400 focus:border-[#1e8b79] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#1e8b79]/12"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 rounded-full p-0.5 text-gray-400 hover:bg-gray-200 hover:text-gray-700"
                    aria-label="Clear"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>

            {/* Category filter pills */}
            {featuredTab !== "shortlist" && (
              <div className="flex flex-wrap gap-1.5 border-t border-gray-100 px-4 py-3">
                {categoryFilters.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[11px] font-bold transition-all duration-150 ${
                      selectedCategory === cat.id
                        ? "bg-[#0d1f1a] text-white shadow-sm"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-[#17211d]"
                    }`}
                  >
                    <span className="text-xs">{cat.icon}</span>
                    {cat.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Cards grid */}
          {featuredTab === "shortlist" && shortlistedWebsites.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white py-24 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-rose-50 text-rose-400">
                <Heart className="h-7 w-7" />
              </div>
              <h3 className="mt-5 text-lg font-black text-[#17211d]">Your shortlist is empty</h3>
              <p className="mx-auto mt-2 max-w-xs text-sm leading-6 text-[#5f6963]">
                Click the <span className="font-bold text-rose-600">♥ heart</span> on any card to
                save it here.
              </p>
            </div>
          ) : displayedWebsites.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-white py-16 text-center">
              <h3 className="text-base font-black text-[#17211d]">No templates match</h3>
              <p className="mx-auto mt-2 max-w-xs text-xs text-[#5f6963]">
                Try a different search or category.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("all");
                }}
                className="mt-5 rounded-full bg-[#0d1f1a] px-5 py-2 text-xs font-black text-white transition hover:bg-[#1e8b79]"
              >
                Reset filters
              </button>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
              {displayedWebsites.map((website) => {
                const categoryPath = website.category.toLowerCase().replace(/\s+/g, "-");
                const routePath = `/${categoryPath}/${website.slug}`;
                const favorited = favoriteIds.includes(website.id);

                return (
                  <Link
                    key={website.id}
                    to={routePath}
                    onMouseEnter={() => prefetchRoute(routePath)}
                    onTouchStart={() => prefetchRoute(routePath)}
                    className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-gray-200 hover:shadow-xl"
                  >
                    {/* Thumbnail */}
                    <div
                      className="relative h-44 overflow-hidden"
                      style={{
                        backgroundImage: `linear-gradient(135deg, ${website.colors.secondary} 0%, ${website.colors.primary} 60%, ${website.colors.accent} 100%)`,
                      }}
                    >
                      {website.image && (
                        <img
                          src={website.image}
                          alt={`${website.title} preview`}
                          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                          loading="lazy"
                          decoding="async"
                        />
                      )}
                      <div
                        className={`absolute inset-0 ${
                          website.image
                            ? "bg-gradient-to-t from-black/55 via-black/5 to-transparent"
                            : "bg-[radial-gradient(circle_at_24%_24%,rgba(255,255,255,0.5),transparent_25%)]"
                        }`}
                      />

                      {/* Heart button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          toggle(website.id);
                        }}
                        aria-label={favorited ? "Remove from shortlist" : "Save to shortlist"}
                        className={`absolute right-2.5 top-2.5 z-10 flex h-7 w-7 items-center justify-center rounded-full backdrop-blur-sm transition hover:scale-110 active:scale-95 ${
                          favorited
                            ? "bg-rose-500 text-white shadow-md"
                            : "bg-black/35 text-white/80 hover:bg-black/55"
                        }`}
                      >
                        <Heart className={`h-3.5 w-3.5 ${favorited ? "fill-white" : ""}`} />
                      </button>

                      {/* External link indicator on hover */}
                      <div className="absolute left-2.5 bottom-2.5 flex gap-1.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                        <span className="flex items-center gap-1 rounded-full bg-black/55 px-2 py-0.5 text-[9px] font-black text-white backdrop-blur-sm">
                          <ExternalLink className="h-2.5 w-2.5" />
                          Open
                        </span>
                      </div>

                      {/* Color palette */}
                      <div className="absolute bottom-2.5 right-2.5 flex gap-1">
                        {[website.colors.primary, website.colors.secondary, website.colors.accent].map(
                          (color) => (
                            <span
                              key={color}
                              className="h-3.5 w-3.5 rounded-full border border-white/60 shadow-sm"
                              style={{ backgroundColor: color }}
                            />
                          ),
                        )}
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-3.5">
                      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1e8b79]">
                        {website.category}
                      </p>
                      <h3 className="mt-1.5 text-sm font-black leading-snug transition duration-200 group-hover:text-[#1e8b79]">
                        {website.title}
                      </h3>
                      <p className="mt-1.5 text-xs leading-5 text-[#5f6963] line-clamp-2">
                        {website.shortDescription}
                      </p>
                      <div className="mt-3 flex items-center justify-between">
                        <span className="text-[10px] font-black uppercase tracking-[0.14em] text-[#0d1f1a]/35 transition group-hover:text-[#1e8b79]">
                          View design →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </Container>
      </section>

      {/* ── ABOUT / STORY / CLIENT VALUE SECTION ────────────────────────────── */}
      <section id="about-project" className="relative overflow-hidden bg-[#060f0b] py-24 text-white md:py-32">
        {/* Ambient atmospheric glows */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 h-[32rem] w-full max-w-7xl bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(30,139,121,0.22),transparent)]" />
          <div className="absolute right-0 top-1/3 h-96 w-96 rounded-full bg-[#f0c76a]/6 blur-3xl" />
          <div className="absolute left-0 bottom-1/4 h-80 w-80 rounded-full bg-[#1e8b79]/10 blur-3xl" />
        </div>

        <Container>
          <AnimatedSection>
            {/* Header */}
            <div className="relative mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#f0c76a]/25 bg-[#f0c76a]/10 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.22em] text-[#f0c76a]">
                <Sparkles className="h-3.5 w-3.5" />
                The Origin Story & Client Advantage
              </div>

              <h2 className="mt-6 text-3xl font-black leading-[1.1] tracking-tight md:text-5xl lg:text-5xl">
                Most website templates are dead prototypes.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1e8b79] via-[#6ee7b7] to-[#f0c76a]">
                  100Web is built for clients who refuse to look average.
                </span>
              </h2>

              <p className="mt-5 text-base leading-8 text-white/60 md:text-lg">
                Traditional agencies charge $8,000–$20,000 to deliver static Figma mockups that lose their
                soul during development. 100Web gives founders and businesses live, testable digital realities
                before writing a single line of project scope.
              </p>
            </div>

            {/* Story & Client Pillars Bento Grid */}
            <div className="mt-16 grid gap-6 md:grid-cols-3">
              {/* Chapter 1 */}
              <div className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#1e8b79]/50 hover:bg-white/[0.06]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30">
                  <XCircle className="h-6 w-6" />
                </div>
                <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-rose-400">
                  <span>Chapter 01</span>
                  <span className="h-1 w-1 rounded-full bg-rose-400" />
                  <span>The Problem</span>
                </div>
                <h3 className="mt-2 text-xl font-black text-white">The "Recycled Theme" Trap</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Clients are repeatedly promised "bespoke web craft," only to receive bloated WordPress themes
                  with 35 plugins that load in 6 seconds, break on mobile, and look virtually identical to their
                  competitors.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-rose-300/80">
                  <span className="rounded-full bg-rose-500/10 px-2.5 py-1">Endless Wireframe Fatigue</span>
                  <span className="rounded-full bg-rose-500/10 px-2.5 py-1">Slow 3s+ Load</span>
                </div>
              </div>

              {/* Chapter 2 */}
              <div className="group relative rounded-3xl border border-[#1e8b79]/40 bg-gradient-to-b from-[#1e8b79]/15 to-transparent p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#1e8b79]/70 hover:shadow-2xl hover:shadow-[#1e8b79]/15">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1e8b79]/20 text-[#6ee7b7] ring-1 ring-[#1e8b79]/40">
                  <Code2 className="h-6 w-6" />
                </div>
                <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#6ee7b7]">
                  <span>Chapter 02</span>
                  <span className="h-1 w-1 rounded-full bg-[#6ee7b7]" />
                  <span>The Craft</span>
                </div>
                <h3 className="mt-2 text-xl font-black text-white">The 100-System Odyssey</h3>
                <p className="mt-3 text-sm leading-6 text-white/65">
                  Umair set out to prove what true digital craftsmanship looks like: engineering 100 autonomous brand
                  systems across 10 commercial industries. Every layout is hand-coded from scratch with distinct color
                  theories and niche conversion psychology.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#6ee7b7]">
                  <span className="rounded-full bg-[#1e8b79]/20 px-2.5 py-1">Pure React 19 + TS</span>
                  <span className="rounded-full bg-[#1e8b79]/20 px-2.5 py-1">Tailwind CSS</span>
                </div>
              </div>

              {/* Chapter 3 */}
              <div className="group relative rounded-3xl border border-white/10 bg-white/[0.03] p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#f0c76a]/50 hover:bg-white/[0.06]">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f0c76a]/15 text-[#f0c76a] ring-1 ring-[#f0c76a]/30">
                  <Rocket className="h-6 w-6" />
                </div>
                <div className="mt-6 flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#f0c76a]">
                  <span>Chapter 03</span>
                  <span className="h-1 w-1 rounded-full bg-[#f0c76a]" />
                  <span>The Client ROI</span>
                </div>
                <h3 className="mt-2 text-xl font-black text-white">Zero Guesswork, 10x Speed</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">
                  Instead of staring at abstract Figma rectangles for 2 months, clients test-drive live conversion
                  flows on their phone, pick their dream foundation, and launch a world-class production experience in
                  days.
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs font-bold text-[#f0c76a]/90">
                  <span className="rounded-full bg-[#f0c76a]/10 px-2.5 py-1">Launch in 5–7 Days</span>
                  <span className="rounded-full bg-[#f0c76a]/10 px-2.5 py-1">100% Code Ownership</span>
                </div>
              </div>
            </div>

            {/* Why Clients Choose 100Web Comparison Matrix */}
            <div className="mt-14 overflow-hidden rounded-3xl border border-white/12 bg-white/[0.02] shadow-2xl backdrop-blur-xl">
              <div className="border-b border-white/10 px-6 py-5 sm:px-8">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1e8b79]">
                      Direct Head-to-Head Proof
                    </span>
                    <h3 className="text-xl font-black text-white">How 100Web Compares to the Status Quo</h3>
                  </div>
                  <div className="flex items-center gap-4 text-xs font-bold">
                    <span className="flex items-center gap-1.5 text-white/50">
                      <span className="h-2 w-2 rounded-full bg-rose-400" /> Traditional Agency
                    </span>
                    <span className="flex items-center gap-1.5 text-[#6ee7b7]">
                      <span className="h-2 w-2 rounded-full bg-[#1e8b79]" /> 100Web Approach
                    </span>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-white/8">
                {[
                  {
                    feature: "Initial Experience",
                    traditional: "Static PDF or Figma mockups with placeholder text",
                    modern: "Fully interactive, runnable web applications in browser",
                    badge: "Live Interactive",
                  },
                  {
                    feature: "Turnaround Time",
                    traditional: "8 to 14 weeks of back-and-forth wireframing meetings",
                    modern: "Ready for content adaptation & launch in 3 to 7 business days",
                    badge: "92% Faster",
                  },
                  {
                    feature: "Performance & SEO",
                    traditional: "Bloated themes, 35+ plugins, 3–6s load times",
                    modern: "Handwritten React, zero bloat, sub-second 99+ Lighthouse",
                    badge: "< 0.8s Load",
                  },
                  {
                    feature: "Design Psychology",
                    traditional: "Generic one-size-fits-all layout with swapped colors",
                    modern: "Purpose-built conversion flows tailored to each industry niche",
                    badge: "Bespoke UX",
                  },
                  {
                    feature: "Code Ownership",
                    traditional: "Proprietary builder lock-in & monthly subscription fees",
                    modern: "100% clean TypeScript/React codebase owned by your business",
                    badge: "Zero Lock-in",
                  },
                ].map((row, idx) => (
                  <div
                    key={row.feature}
                    className={`grid gap-4 px-6 py-4.5 sm:grid-cols-[1.2fr_1.8fr_2fr] sm:items-center sm:px-8 transition-colors ${
                      idx % 2 === 0 ? "bg-white/[0.01]" : "bg-transparent"
                    }`}
                  >
                    <div>
                      <span className="text-xs font-black uppercase tracking-wider text-white/90">
                        {row.feature}
                      </span>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-white/45">
                      <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-400/70" />
                      <span>{row.traditional}</span>
                    </div>
                    <div className="flex items-start justify-between gap-3 text-xs font-bold text-white">
                      <div className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                        <span className="text-white/95">{row.modern}</span>
                      </div>
                      <span className="shrink-0 rounded-full border border-[#1e8b79]/40 bg-[#1e8b79]/15 px-2.5 py-0.5 text-[10px] font-black text-[#6ee7b7]">
                        {row.badge}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Founder Note & Direct Client Collaboration Card */}
            <div className="mt-14 relative overflow-hidden rounded-3xl border border-white/12 bg-gradient-to-br from-[#0a1a14] via-[#0d221b] to-[#07130e] p-8 sm:p-12 shadow-2xl">
              <div className="absolute right-0 top-0 h-64 w-64 bg-[radial-gradient(circle_at_80%_20%,rgba(240,199,106,0.12),transparent_70%)] pointer-events-none" />

              <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1e8b79] text-base font-black text-white shadow-lg shadow-[#1e8b79]/30">
                      U
                    </div>
                    <div>
                      <h4 className="text-lg font-black text-white">Umair Ahmad</h4>
                      <p className="text-xs font-bold uppercase tracking-wider text-[#f0c76a]">
                        Creator · Lead UI/UX Engineer & Frontend Architect
                      </p>
                    </div>
                  </div>

                  <blockquote className="mt-6 border-l-2 border-[#1e8b79] pl-4 text-base italic leading-7 text-white/80">
                    "I built 100Web because I believe digital credibility starts the moment a customer lands on your
                    page. When you work with one of these systems, you aren't buying a template — you're adopting a
                    production-tested foundation that I personally engineered to help businesses convert visitors into
                    loyal clients."
                  </blockquote>

                  <div className="mt-6 flex flex-wrap items-center gap-6 text-xs text-white/50">
                    <span className="flex items-center gap-1.5 text-white/70">
                      <ShieldCheck className="h-4 w-4 text-emerald-400" />
                      Production Tested
                    </span>
                    <span className="flex items-center gap-1.5 text-white/70">
                      <Clock className="h-4 w-4 text-[#f0c76a]" />
                      5–7 Day Custom Launch
                    </span>
                    <span className="flex items-center gap-1.5 text-white/70">
                      <Users className="h-4 w-4 text-sky-400" />
                      Direct Creator Collaboration
                    </span>
                  </div>
                </div>

                {/* Direct Action Hub */}
                <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f0c76a]">
                    Have a vision for your brand?
                  </p>
                  <p className="text-sm font-bold text-white">
                    Need one of these templates adapted for your business, or a custom build from scratch?
                  </p>
                  <p className="text-xs leading-5 text-white/50">
                    Collaborate directly with Umair to adapt layouts, connect custom backends (Stripe, Supabase, CMS),
                    and deploy your new digital flag.
                  </p>

                  <div className="mt-3 grid gap-2.5 sm:grid-cols-2">
                    <a
                      href="https://github.com/umairny"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f0c76a] px-4 py-2.5 text-xs font-black text-[#07130e] shadow-md shadow-[#f0c76a]/20 transition hover:bg-white active:scale-95"
                    >
                      <MessageSquare className="h-4 w-4" />
                      Contact & Connect
                    </a>
                    <Link
                      to="#collections"
                      className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.08] px-4 py-2.5 text-xs font-black text-white transition hover:border-white/30 hover:bg-white/15 active:scale-95"
                    >
                      Browse Collections
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────────── */}
      <section className="py-20 md:py-28">
        <Container>
          <AnimatedSection animation="scale-in">
            <div className="relative overflow-hidden rounded-3xl bg-[#0a1a14] text-white shadow-2xl">
              {/* Decorative */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_65%_65%_at_-8%_-8%,rgba(30,139,121,0.45),transparent),radial-gradient(ellipse_55%_75%_at_108%_108%,rgba(240,199,106,0.12),transparent)]" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#1e8b79]/45 to-transparent" />
              <div className="absolute right-0 top-0 h-full w-1/2 bg-[radial-gradient(circle_at_80%_40%,rgba(240,199,106,0.05),transparent_60%)]" />

              <div className="relative grid gap-10 px-8 py-14 md:grid-cols-[1.25fr_0.75fr] md:items-center md:px-14 md:py-18">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-[#f0c76a]/20 bg-[#f0c76a]/8 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-[#f0c76a]">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f0c76a] opacity-55" />
                      <span className="relative h-1.5 w-1.5 rounded-full bg-[#f0c76a]" />
                    </span>
                    {completedDesignCount} live · growing weekly
                  </div>
                  <h2 className="mt-6 max-w-xl text-3xl font-black leading-tight tracking-tight md:text-4xl">
                    {completedDesignCount} production-ready templates across {categories.length}{" "}
                    categories.
                  </h2>
                  <p className="mt-4 max-w-md text-base leading-7 text-white/52">
                    Not the same layout with swapped colors. Each one is a real brand system, built
                    to show what the web can look like.
                  </p>
                  <div className="mt-8 flex flex-wrap gap-3">
                    <Link
                      to="#collections"
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#f0c76a] px-7 py-3.5 text-sm font-black text-[#0d1f1a] shadow-lg shadow-[#f0c76a]/15 transition hover:-translate-y-0.5 hover:bg-white"
                    >
                      Browse collections
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      to="#featured"
                      className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/6 px-7 py-3.5 text-sm font-black text-white transition hover:bg-white/11 hover:border-white/24"
                    >
                      View templates
                    </Link>
                  </div>
                </div>

                {/* Stats panel */}
                <div className="grid grid-cols-3 overflow-hidden rounded-2xl border border-white/8 bg-white/4 md:grid-cols-1 md:divide-y md:divide-white/8">
                  {[
                    { val: completedDesignCount, label: "Live now", color: "#f0c76a" },
                    { val: categories.length, label: "Categories", color: "#6ee7b7" },
                    { val: plannedCount, label: "Total planned", color: "#93c5fd" },
                  ].map(({ val, label, color }) => (
                    <div key={label} className="p-5 text-center md:text-left">
                      <p className="text-3xl font-black md:text-4xl" style={{ color }}>
                        {val}
                      </p>
                      <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-white/32">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}