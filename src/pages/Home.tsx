import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { AnimatedSection, Container, CTAButton } from "../components";
import { imageUrl } from "../assets/optimized";
import {
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

export function Home() {
  const liveRestaurants = restaurantWebsites.filter(
    (website) => website.status === "completed" || website.status === "live",
  );
  const liveBeauty = beautyWebsites.filter(
    (website) => website.status === "completed" || website.status === "live",
  );
  const liveRealEstate = realEstateWebsites.filter(
    (website) => website.status === "completed" || website.status === "live",
  );
  const liveFitness = fitnessWebsites.filter(
    (website) => website.status === "completed" || website.status === "live",
  );
  const liveMedical = medicalWebsites.filter(
    (website) => website.status === "completed" || website.status === "live",
  );
  const liveConstruction = constructionWebsites.filter(
    (website) => website.status === "completed" || website.status === "live",
  );
  const liveEducation = educationWebsites.filter(
    (website) => website.status === "completed" || website.status === "live",
  );
  const liveEcommerce = ecommerceWebsites.filter(
    (website) => website.status === "completed" || website.status === "live",
  );
  const livePortfolio = portfolioWebsites.filter(
    (website) => website.status === "completed" || website.status === "live",
  );
  const liveSaaS = saasWebsites.filter(
    (website) => website.status === "completed" || website.status === "live",
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
      tone: "text-[#9a5b25]",
      button: "Open restaurants",
    },
    {
      title: "Beauty",
      text: "Salon, spa, bridal, nails, skin, and wellness pages with booking-first UX.",
      href: "/beauty",
      image: homeImages.beautyCollection,
      count: liveBeauty.length,
      tone: "text-[#b76e79]",
      button: "Open beauty",
    },
    {
      title: "Real Estate",
      text: "Listings, neighborhoods, agent trust, market positioning, and lead capture.",
      href: "/real-estate",
      image: homeImages.realEstatePreview,
      count: liveRealEstate.length,
      tone: "text-[#153e75]",
      button: "Open real estate",
    },
    {
      title: "Fitness",
      text: "Gyms, studios, coaching, recovery, membership, and trial conversion pages.",
      href: "/fitness",
      image: homeImages.fitnessPreview,
      count: liveFitness.length,
      tone: "text-[#14532d]",
      button: "Open fitness",
    },
    {
      title: "Medical",
      text: "Clinic pages built around trust, services, patient pathways, and appointments.",
      href: "/medical",
      image: homeImages.medicalPreview,
      count: liveMedical.length,
      tone: "text-[#0f766e]",
      button: "Open medical",
    },
    {
      title: "Construction",
      text: "Builder and contractor concepts focused on proof, services, and estimates.",
      href: "/construction",
      image: homeImages.constructionPreview,
      count: liveConstruction.length,
      tone: "text-[#92400e]",
      button: "Open construction",
    },
    {
      title: "Education",
      text: "Learning pages with programs, outcomes, faculty trust, and enrollment paths.",
      href: "/education",
      image: homeImages.educationPreview,
      count: liveEducation.length,
      tone: "text-[#3730a3]",
      button: "Open education",
    },
    {
      title: "E-commerce",
      text: "Retail homepages shaped around discovery, offers, trust, and cart momentum.",
      href: "/e-commerce",
      image: homeImages.ecommercePreview,
      count: liveEcommerce.length,
      tone: "text-[#7c3aed]",
      button: "Open e-commerce",
    },
    {
      title: "Portfolio",
      text: "Creator and studio pages for positioning, selected work, services, and inquiry.",
      href: "/portfolio",
      image: homeImages.portfolioPreview,
      count: livePortfolio.length,
      tone: "text-[#0369a1]",
      button: "Open portfolio",
    },
    {
      title: "SaaS",
      text: "Software pages with product value, workflows, integrations, pricing, and trials.",
      href: "/saas",
      image: homeImages.saasPreview,
      count: liveSaaS.length,
      tone: "text-[#075985]",
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

  useEffect(() => {
    if (isHeroPaused || heroSlides.length < 2) return;

    const timer = window.setInterval(() => {
      setActiveHeroIndex((current) => (current + 1) % heroSlides.length);
    }, 5500);

    return () => window.clearInterval(timer);
  }, [heroSlides.length, isHeroPaused]);

  const moveHeroSlide = (direction: -1 | 1) => {
    setActiveHeroIndex(
      (current) => (current + direction + heroSlides.length) % heroSlides.length,
    );
  };

  return (
    <main className="bg-[#f6f1e8] text-[#17211d]">
      <section className="relative -mt-16 overflow-hidden bg-[#0d1f1a] pb-12 pt-24 text-white md:pb-16 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_14%,rgba(30,139,121,0.42),transparent_28%),radial-gradient(circle_at_82%_18%,rgba(238,118,92,0.28),transparent_24%),linear-gradient(135deg,#0d1f1a_0%,#142822_50%,#07110f_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-white/15" />
        <Container>
          <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <AnimatedSection animation="slide-left">
              <div className="inline-flex border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#f0c76a]">
                Umair 100 Website Designs
              </div>
              <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.96] md:text-7xl">
                A cleaner way to browse complete business homepage demos.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                Pick a category, scan the live count, and open polished React
                homepages built with distinct brand direction instead of the
                same template wearing different colors.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton
                  href="#collections"
                  size="lg"
                  className="bg-[#f0c76a] text-[#10201c] hover:bg-white"
                >
                  Browse Collections
                </CTAButton>
                <CTAButton
                  href="#featured"
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white/10"
                >
                  View Featured Demos
                </CTAButton>
              </div>

              <div className="mt-10 max-w-2xl border border-white/12 bg-white/8 p-5 backdrop-blur">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-white/52">
                      Portfolio progress
                    </p>
                    <p className="mt-2 text-4xl font-black text-[#f0c76a]">
                      {completedDesignCount}/{plannedCount}
                    </p>
                  </div>
                  <p className="max-w-xs text-sm leading-6 text-white/62">
                    {remainingCount} concepts remaining across {categories.length} planned categories.
                  </p>
                </div>
                <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/12">
                  <div
                    className="h-full rounded-full bg-[#f0c76a]"
                    style={{ width: `${completionPercent}%` }}
                  />
                </div>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {liveCollections.slice(0, 6).map((collection) => (
                  <Link
                    key={collection.title}
                    to={collection.href}
                    className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-bold text-white/72 transition hover:border-[#f0c76a]/60 hover:bg-white/14 hover:text-white"
                  >
                    {collection.title} - {collection.count}
                  </Link>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay="delay-200">
              <div
                className="relative overflow-hidden border border-white/12 bg-white/8 p-3 shadow-2xl shadow-black/30"
                onMouseEnter={() => setIsHeroPaused(true)}
                onMouseLeave={() => setIsHeroPaused(false)}
                onFocusCapture={() => setIsHeroPaused(true)}
                onBlurCapture={() => setIsHeroPaused(false)}
              >
                <HomeImage
                  key={activeHeroSlide.label}
                  src={activeHeroSlide.image.src}
                  alt={activeHeroSlide.image.alt}
                  fallbackStyle={activeHeroSlide.image.fallbackStyle}
                  className="min-h-[520px]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02)_12%,rgba(0,0,0,0.78))]" />
                  <div className="absolute left-5 right-5 top-5 flex items-start justify-between gap-4">
                    <div className="bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#161616] shadow-lg">
                      {activeHeroSlide.label}
                    </div>
                    <div className="flex gap-2">
                      <button
                        type="button"
                        onClick={() => moveHeroSlide(-1)}
                        className="grid h-11 w-11 place-items-center rounded-full bg-white/92 text-[#10201c] shadow-lg transition hover:bg-[#f0c76a] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/45"
                        aria-label="Show previous hero slide"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => moveHeroSlide(1)}
                        className="grid h-11 w-11 place-items-center rounded-full bg-white/92 text-[#10201c] shadow-lg transition hover:bg-[#f0c76a] focus:outline-none focus-visible:ring-4 focus-visible:ring-white/45"
                        aria-label="Show next hero slide"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 grid gap-4 lg:grid-cols-[1fr_auto] lg:items-end">
                    <div className="bg-white/94 p-5 text-[#17211d] shadow-xl backdrop-blur">
                      <p
                        className="text-sm font-black uppercase tracking-[0.16em]"
                        style={{ color: activeHeroSlide.accent }}
                      >
                        {activeHeroSlide.kicker}
                      </p>
                      <h2 className="mt-2 max-w-xl text-2xl font-black md:text-3xl">
                        {activeHeroSlide.title}
                      </h2>
                      <Link
                        to={activeHeroSlide.href}
                        className="mt-5 inline-flex items-center justify-center rounded-lg bg-[#10201c] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1e8b79]"
                      >
                        {activeHeroSlide.cta}
                      </Link>
                    </div>
                    <div className="flex items-center justify-between gap-3 bg-white/94 p-4 shadow-xl backdrop-blur lg:flex-col lg:items-stretch">
                      <div className="flex gap-2" aria-label="Hero slides">
                        {heroSlides.map((slide, index) => (
                          <button
                            key={slide.label}
                            type="button"
                            onClick={() => setActiveHeroIndex(index)}
                            className={`h-3 rounded-full transition ${
                              index === activeHeroIndex
                                ? "w-10 bg-[#10201c]"
                                : "w-3 bg-[#10201c]/25 hover:bg-[#10201c]/55"
                            }`}
                            aria-label={`Show ${slide.label}`}
                            aria-current={
                              index === activeHeroIndex ? "true" : undefined
                            }
                          />
                        ))}
                      </div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-[#5f6963]">
                        {activeHeroIndex + 1}/{heroSlides.length}
                      </p>
                    </div>
                  </div>

                  <div className="absolute inset-x-3 bottom-3 h-1 bg-white/20">
                    <span
                      key={`${activeHeroIndex}-${isHeroPaused}`}
                      className="home-hero-carousel-progress block h-full w-full"
                      style={{
                        backgroundColor: activeHeroSlide.accent,
                        animationPlayState: isHeroPaused ? "paused" : "running",
                      }}
                    />
                  </div>
                </HomeImage>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>
      <section id="collections" className="py-16 md:py-24">
        <Container>
          <AnimatedSection className="mb-10 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1e8b79]">
                Collection hubs
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Ten direct paths into finished homepage concepts.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#5f6963]">
              The homepage now works like an index: choose the business type,
              open the category, then review the individual demos inside.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {liveCollections.map((collection) => (
              <Link
                key={collection.title}
                to={collection.href}
                className="group overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <HomeImage
                  src={collection.image.src}
                  alt={collection.image.alt}
                  fallbackStyle={collection.image.fallbackStyle}
                  className="min-h-[220px]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(0,0,0,0.72))]" />
                  <div className="absolute left-4 top-4 bg-white/94 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#161616]">
                    {collection.count} live
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-2xl font-black">{collection.title}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.14em] text-white/70">
                      {collection.button}
                    </p>
                  </div>
                </HomeImage>
                <div className="p-5">
                  <p
                    className={`text-xs font-black uppercase tracking-[0.18em] ${collection.tone}`}
                  >
                    Category hub
                  </p>
                  <p className="mt-3 text-sm leading-6 text-[#5f6963]">
                    {collection.text}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section id="featured" className="border-y border-[#ddd2c0] bg-[#fffaf1] py-16 md:py-24">
        <Container>
          <AnimatedSection className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1e8b79]">
                Featured work
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                A quick sample from every live category.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#5f6963]">
              Use this section for fast review, then jump into the full category
              hub when a direction feels right.
            </p>
          </AnimatedSection>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">
            {featuredWebsites.map((website, index) => (
              <Link
                key={website.id}
                to={`/${website.category.toLowerCase().replace(/\s+/g, "-")}/${website.slug}`}
                className={`group reveal-card overflow-hidden bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                  index === 1
                    ? "delay-100"
                    : index === 2
                      ? "delay-200"
                      : index === 3
                        ? "delay-300"
                        : ""
                }`}
              >
                <div
                  className="relative h-40 overflow-hidden"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${website.colors.secondary} 0%, ${website.colors.primary} 55%, ${website.colors.accent} 100%)`,
                  }}
                >
                  {website.image && (
                    <img
                      src={website.image}
                      alt={`${website.title} website preview`}
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  )}
                  <div
                    className={`absolute inset-0 ${website.image ? "bg-gradient-to-t from-black/50 via-black/5 to-transparent" : "bg-[radial-gradient(circle_at_24%_24%,rgba(255,255,255,0.58),transparent_25%),radial-gradient(circle_at_78%_76%,rgba(255,255,255,0.26),transparent_28%)]"}`}
                  />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {[
                      website.colors.primary,
                      website.colors.secondary,
                      website.colors.accent,
                    ].map((color) => (
                      <span
                        key={color}
                        className="h-5 w-5 rounded-full border border-white/75"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-[#1e8b79]">
                    {website.category}
                  </p>
                  <h3 className="mt-3 text-xl font-black transition group-hover:text-[#1e8b79]">
                    {website.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5f6963]">
                    {website.shortDescription}
                  </p>
                  <div className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-[#10201c] px-4 py-3 text-sm font-bold text-white transition group-hover:bg-[#1e8b79]">
                    Open design
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <AnimatedSection
            animation="scale-in"
            className="overflow-hidden bg-[#10201c] text-white shadow-2xl"
          >
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_0.82fr] md:p-12 lg:p-16">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0c76a]">
                  Portfolio status
                </p>
                <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                  {completedDesignCount} live concepts across {categories.length} categories.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  The page is intentionally shorter now: fewer explanations,
                  more direct routes into the work.
                </p>
              </div>
              <div className="bg-white p-6 text-[#161616]">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6a6258]">
                  Start here
                </p>
                <div className="mt-6 grid gap-3">
                  <a
                    href="#collections"
                    className="bg-[#f8f4ec] p-4 font-black transition hover:bg-[#f0c76a]"
                  >
                    Browse all collections
                  </a>
                  <a
                    href="#featured"
                    className="bg-[#eef7f3] p-4 font-black transition hover:bg-[#b9e5d9]"
                  >
                    Review featured concepts
                  </a>
                  <Link
                    to="/fitness"
                    className="bg-gray-100 p-4 font-black transition hover:bg-gray-200"
                  >
                    Latest category: Fitness
                  </Link>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}