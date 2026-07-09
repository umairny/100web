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
  componentSystem: {
    src: imageUrl("home/component-system.webp"),
    alt: "Reusable website component system with cards, layouts, navigation, and CTA blocks",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_22%_24%,rgba(139,111,82,0.2),transparent_24%),radial-gradient(circle_at_78%_72%,rgba(47,143,70,0.18),transparent_24%),linear-gradient(135deg,#111827,#374151)]",
  },
  categoriesOverview: {
    src: imageUrl("home/categories-overview.webp"),
    alt: "Overview of website categories in the 100 website design project",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_20%_22%,rgba(139,111,82,0.2),transparent_24%),radial-gradient(circle_at_80%_72%,rgba(14,165,233,0.16),transparent_24%),linear-gradient(135deg,#ffffff,#f7f2e8)]",
  },
  designProcess: {
    src: imageUrl("home/design-process.webp"),
    alt: "Website design workflow from brand direction to client-ready responsive homepage",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_22%_28%,rgba(244,161,26,0.24),transparent_24%),radial-gradient(circle_at_80%_70%,rgba(239,59,45,0.18),transparent_24%),linear-gradient(135deg,#f7f2e8,#ffffff)]",
  },
};

const processSteps = [
  {
    title: "Choose a business mood",
    text: "Each concept starts with audience, service type, palette, layout stance, and a conversion goal.",
  },
  {
    title: "Build the real homepage",
    text: "The pages include useful sections, local navigation, content hierarchy, CTAs, and responsive layout behavior.",
  },
  {
    title: "Polish the collection",
    text: "The index pages, hero systems, cards, spacing, and mobile states are tuned so the work feels portfolio-ready.",
  },
];

const plannedCategoryBlueprints = [
  {
    name: "Medical",
    focus:
      "Provider trust, services, patient pathways, appointment booking, insurance cues, and calm accessibility.",
    palette: ["#0f766e", "#ccfbf1", "#ef4444"],
    accent: "bg-[#0f766e]",
  },
  {
    name: "Construction",
    focus:
      "Project proof, service areas, before-after sections, quote funnels, certifications, and rugged visuals.",
    palette: ["#3f3f46", "#fef3c7", "#d97706"],
    accent: "bg-[#3f3f46]",
  },
  {
    name: "Education",
    focus:
      "Programs, outcomes, course paths, enrollment CTAs, faculty trust, and parent/student clarity.",
    palette: ["#3730a3", "#e0e7ff", "#22c55e"],
    accent: "bg-[#3730a3]",
  },
  {
    name: "E-commerce",
    focus:
      "Product discovery, offer hierarchy, category browsing, social proof, cart-first CTAs, and promotions.",
    palette: ["#7c3aed", "#f3e8ff", "#ec4899"],
    accent: "bg-[#7c3aed]",
  },
  {
    name: "Portfolio",
    focus:
      "Creator positioning, project cards, case studies, service packaging, testimonials, and contact flow.",
    palette: ["#111827", "#e5e7eb", "#38bdf8"],
    accent: "bg-[#111827]",
  },
  {
    name: "SaaS",
    focus:
      "Product value, feature modules, pricing, integrations, customer proof, and trial conversion.",
    palette: ["#075985", "#e0f2fe", "#14b8a6"],
    accent: "bg-[#075985]",
  },
];

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
  const liveCollections = [
    {
      title: "Restaurant Collection",
      text: "Ten complete dining concepts with different hero systems, palettes, and menu-driven sections.",
      href: "/restaurant",
      image: homeImages.restaurantCollection,
      count: liveRestaurants.length,
      tone: "text-[#9a5b25]",
      button: "View restaurants",
    },
    {
      title: "Beauty Collection",
      text: "Four live beauty concepts plus a roadmap for salons, spas, nails, bridal, skin, and wellness.",
      href: "/beauty",
      image: homeImages.beautyCollection,
      count: liveBeauty.length,
      tone: "text-[#b76e79]",
      button: "View beauty",
    },
    {
      title: "Real Estate Collection",
      text: "Premium property pages focused on listings, neighborhood trust, agent credibility, and lead capture.",
      href: "/real-estate",
      image: homeImages.categoriesOverview,
      count: liveRealEstate.length,
      tone: "text-[#153e75]",
      button: "View real estate",
    },
    {
      title: "Fitness Collection",
      text: "High-energy gym and coaching pages focused on programs, schedules, proof, and trial signups.",
      href: "/fitness",
      image: homeImages.componentSystem,
      count: liveFitness.length,
      tone: "text-[#14532d]",
      button: "View fitness",
    },
    {
      title: "Medical Collection",
      text: "Patient-friendly clinic pages focused on trust, services, insurance clarity, and appointment booking.",
      href: "/medical",
      image: homeImages.categoriesOverview,
      count: liveMedical.length,
      tone: "text-[#0f766e]",
      button: "View medical",
    },
    {
      title: "Construction Collection",
      text: "Contractor and builder pages focused on project proof, services, process clarity, and estimate requests.",
      href: "/construction",
      image: homeImages.categoriesOverview,
      count: liveConstruction.length,
      tone: "text-[#92400e]",
      button: "View construction",
    },
    {
      title: "Education Collection",
      text: "Learning pages focused on curriculum clarity, mentor trust, outcomes, and enrollment flow.",
      href: "/education",
      image: homeImages.categoriesOverview,
      count: liveEducation.length,
      tone: "text-[#3730a3]",
      button: "View education",
    },
    {
      title: "E-commerce Collection",
      text: "Retail pages focused on product discovery, offer clarity, trust signals, and checkout momentum.",
      href: "/e-commerce",
      image: homeImages.categoriesOverview,
      count: liveEcommerce.length,
      tone: "text-[#7c3aed]",
      button: "View e-commerce",
    },
    {
      title: "Portfolio Collection",
      text: "Creator and studio pages focused on positioning, selected work, services, and inquiry quality.",
      href: "/portfolio",
      image: homeImages.categoriesOverview,
      count: livePortfolio.length,
      tone: "text-[#0369a1]",
      button: "View portfolio",
    },
    {
      title: "SaaS Collection",
      text: "Software product pages focused on value, workflows, integrations, pricing, and trial conversion.",
      href: "/saas",
      image: homeImages.categoriesOverview,
      count: liveSaaS.length,
      tone: "text-[#075985]",
      button: "View SaaS",
    },
  ];
  const categoryProgress = categories.map((category) => {
    const liveCount =
      category.name === "Restaurant"
        ? liveRestaurants.length
        : category.name === "Beauty"
          ? liveBeauty.length
          : category.name === "Real Estate"
            ? liveRealEstate.length
            : category.name === "Fitness"
              ? liveFitness.length
              : category.name === "Medical"
                ? liveMedical.length
                : category.name === "Construction"
                  ? liveConstruction.length
                  : category.name === "Education"
                    ? liveEducation.length
                    : category.name === "E-commerce"
                      ? liveEcommerce.length
                      : category.name === "Portfolio"
                        ? livePortfolio.length
                        : category.name === "SaaS"
                          ? liveSaaS.length
                          : 0;

    return { ...category, liveCount };
  });
  const heroSlides = [
    {
      label: "Portfolio preview",
      kicker: `${completedDesignCount} live homepages`,
      title: `Restaurant, beauty, real estate, and fitness collections are live, with ${remainingCount} concepts still planned.`,
      image: homeImages.heroShowcase,
      href: "#live-work",
      cta: "Browse live work",
      accent: "#f0c76a",
    },
    {
      label: "Restaurant systems",
      kicker: `${liveRestaurants.length} dining concepts`,
      title:
        "Menu-first landing pages with distinct atmospheres, conversion sections, and polished mobile layouts.",
      image: homeImages.restaurantCollection,
      href: "/restaurant",
      cta: "View restaurants",
      accent: "#ee765c",
    },
    {
      label: "Beauty brands",
      kicker: `${liveBeauty.length} beauty concepts`,
      title:
        "Salon, spa, aesthetics, and wellness pages with soft visuals, clear services, and booking-focused flows.",
      image: homeImages.beautyCollection,
      href: "/beauty",
      cta: "View beauty",
      accent: "#f2a7bb",
    },
    {
      label: "Category roadmap",
      kicker: `${categories.length} business categories`,
      title:
        "A full portfolio map across restaurants, real estate, fitness, medical, construction, education, retail, and more.",
      image: homeImages.categoriesOverview,
      href: "#categories",
      cta: "View categories",
      accent: "#1e8b79",
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
      <section className="relative -mt-16 overflow-hidden bg-[#10201c] pb-20 pt-24 text-white md:pb-28 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(30,139,121,0.38),transparent_25%),radial-gradient(circle_at_84%_18%,rgba(238,118,92,0.32),transparent_22%),radial-gradient(circle_at_70%_88%,rgba(229,177,90,0.22),transparent_26%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[repeating-linear-gradient(90deg,rgba(255,255,255,0.08)_0_1px,transparent_1px_52px)]" />
        <Container>
          <div className="relative grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <AnimatedSection animation="slide-left">
              <div className="inline-flex border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#f0c76a]">
                Umair 100 Website Designs
              </div>
              <h1 className="mt-7 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                A portfolio system for real business homepage concepts.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-xl">
                A growing library of complete React, TypeScript, and Tailwind
                homepage designs, built category by category with distinct brand
                direction instead of repeated templates.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton
                  href="#live-work"
                  size="lg"
                  className="bg-[#f0c76a] text-[#10201c] hover:bg-white"
                >
                  Explore Live Work
                </CTAButton>
                <CTAButton
                  href="#planned-categories"
                  variant="outline"
                  size="lg"
                  className="border-white/40 text-white hover:bg-white/10"
                >
                  View Roadmap
                </CTAButton>
              </div>
              <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
                {[
                  { value: categories.length, label: "Categories" },
                  { value: plannedCount, label: "Planned concepts" },
                  { value: completedDesignCount, label: "Live designs" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="border border-white/12 bg-white/8 p-5"
                  >
                    <p className="text-3xl font-black text-[#f0c76a]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-white/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="scale-in" delay="delay-200">
              <div className="relative">
                <div className="absolute -left-5 top-10 h-32 w-32 rounded-full bg-[#f0c76a]/20 blur-2xl" />
                <div className="absolute -right-6 bottom-12 h-40 w-40 rounded-full bg-[#ee765c]/25 blur-2xl" />
                <div
                  className="relative border border-white/12 bg-white/8 p-3 shadow-2xl shadow-black/30"
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
                    className="min-h-[430px] md:min-h-[560px]"
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_16%,rgba(0,0,0,0.78))]" />
                    <div className="absolute left-5 top-5 max-w-[calc(100%-8.5rem)] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#161616] shadow-lg">
                      {activeHeroSlide.label}
                    </div>
                    <div className="absolute right-5 top-5 flex gap-2">
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
                    <div className="absolute bottom-5 left-5 right-5 bg-white/92 p-5 text-[#17211d] shadow-xl backdrop-blur">
                      <p
                        className="text-sm font-black uppercase tracking-[0.18em]"
                        style={{ color: activeHeroSlide.accent }}
                      >
                        {activeHeroSlide.kicker}
                      </p>
                      <h2 className="mt-2 text-2xl font-black">
                        {activeHeroSlide.title}
                      </h2>
                      <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <Link
                          to={activeHeroSlide.href}
                          className="inline-flex items-center justify-center rounded-lg bg-[#10201c] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#1e8b79]"
                        >
                          {activeHeroSlide.cta}
                        </Link>
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
                </div>              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="border-b border-[#ddd2c0] bg-[#fffaf1] py-8">
        <Container>
          <div className="grid gap-3 md:grid-cols-[1fr_auto] md:items-center">
            <div className="flex flex-wrap gap-2">
              {[
                "React",
                "TypeScript",
                "Tailwind CSS",
                "Responsive",
                "Business homepages",
                "Portfolio-ready",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-[#ddd2c0] bg-white px-4 py-2 text-sm font-bold text-[#5f6963]"
                >
                  {item}
                </span>
              ))}
            </div>
            <div className="grid grid-cols-2 overflow-hidden border border-[#ddd2c0] bg-white text-center">
              <div className="border-r border-[#ddd2c0] px-5 py-3">
                <p className="text-2xl font-black">{completedDesignCount}</p>
                <p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#5f6963]">
                  Complete
                </p>
              </div>
              <div className="px-5 py-3">
                <p className="text-2xl font-black">{remainingCount}</p>
                <p className="text-[0.65rem] font-black uppercase tracking-[0.14em] text-[#5f6963]">
                  Remaining
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="live-work" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1e8b79]">
                Live collections
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Four category hubs with full-page concepts inside.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#5f6963]">
              The homepage now leads with what is actually useful: direct paths
              into complete collections, visible progress, and a clear
              explanation of how the system grows.
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {liveCollections.map((collection) => (
              <Link
                key={collection.title}
                to={collection.href}
                className="group overflow-hidden bg-white shadow-xl shadow-black/5 transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <HomeImage
                  src={collection.image.src}
                  alt={collection.image.alt}
                  fallbackStyle={collection.image.fallbackStyle}
                  className="min-h-[330px]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_45%,rgba(0,0,0,0.72))]" />
                  <div className="absolute left-5 top-5 bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#161616]">
                    {collection.count} live
                  </div>
                </HomeImage>
                <div className="p-8">
                  <p
                    className={`text-sm font-black uppercase tracking-[0.22em] ${collection.tone}`}
                  >
                    Collection hub
                  </p>
                  <h3 className="mt-3 text-4xl font-black">
                    {collection.title}
                  </h3>
                  <p className="mt-4 text-base leading-7 text-[#5f6963]">
                    {collection.text}
                  </p>
                  <div className="mt-7 inline-flex w-full items-center justify-center rounded-lg bg-[#10201c] px-5 py-3 text-sm font-bold text-white transition group-hover:bg-[#1e8b79]">
                    {collection.button}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-y border-[#ddd2c0] bg-[#fffaf1] py-20 md:py-28">
        <Container>
          <AnimatedSection className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1e8b79]">
                Portfolio structure
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                The project is organized like a product, not a pile of pages.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#5f6963]">
                Each category gets its own index, each business gets a full
                homepage, and each completed page is designed to feel like a
                different real-world brand.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {processSteps.map((step, index) => (
                <article
                  key={step.title}
                  className="border border-[#ddd2c0] bg-white p-6 shadow-sm"
                >
                  <p className="text-5xl font-black text-[#ee765c]">
                    0{index + 1}
                  </p>
                  <h3 className="mt-6 text-2xl font-black">{step.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#5f6963]">
                    {step.text}
                  </p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section id="featured" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1e8b79]">
                Featured work
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                All ten categories now have live starter concepts ready to
                review.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#5f6963]">
              A tighter preview of the live work, with links into each live
              collection page for the full set.
            </p>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {[
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
            ].map((website, index) => (
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
                  className="relative h-44 overflow-hidden"
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
                    className={`absolute inset-0 ${website.image ? "bg-gradient-to-t from-black/45 via-black/5 to-transparent" : "bg-[radial-gradient(circle_at_24%_24%,rgba(255,255,255,0.58),transparent_25%),radial-gradient(circle_at_78%_76%,rgba(255,255,255,0.26),transparent_28%)]"}`}
                  />
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    {[
                      website.colors.primary,
                      website.colors.secondary,
                      website.colors.accent,
                    ].map((color) => (
                      <span
                        key={color}
                        className="h-6 w-6 rounded-full border border-white/75"
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.2em] text-[#1e8b79]">
                    {website.category}
                  </p>
                  <h3 className="mt-3 text-2xl font-black transition group-hover:text-[#1e8b79]">
                    {website.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#5f6963]">
                    {website.shortDescription}
                  </p>
                  <div className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-[#10201c] px-4 py-3 text-sm font-bold text-white transition group-hover:bg-[#1e8b79]">
                    Open design
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="categories"
        className="border-y border-[#ddd2c0] bg-[#f6f1e8] py-20 md:py-28"
      >
        <Container>
          <AnimatedSection className="mb-12 grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#1e8b79]">
                The full plan
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Ten categories, one hundred practical homepage concepts.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#5f6963]">
              Restaurants and beauty are underway. The remaining categories stay
              visible as the roadmap, so the project feels intentional even
              before every page is live.
            </p>
          </AnimatedSection>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
            {categoryProgress.map((category) => (
              <Link
                key={category.name}
                to={category.href || "#categories"}
                className={`group min-h-56 overflow-hidden bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  category.href ? "" : "pointer-events-none opacity-75"
                }`}
              >
                <div className={`h-2 bg-gradient-to-r ${category.color}`} />
                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-3xl font-black">{category.name}</p>
                    <p className="mt-3 text-sm leading-6 text-[#5f6963]">
                      {category.description}
                    </p>
                  </div>
                  <span className="text-2xl">{category.icon}</span>
                </div>
                <div className="mt-8 flex items-end justify-between">
                  <div>
                    <p className="text-3xl font-black text-[#ee765c]">
                      {category.liveCount}
                    </p>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#5f6963]">
                      Live
                    </p>
                  </div>
                  <p className="text-xs font-black uppercase tracking-[0.16em] text-[#5f6963]">
                    {category.href ? "Open" : "Planned"}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="about-project"
        className="bg-[#10201c] py-20 text-white md:py-28"
      >
        <Container>
          <AnimatedSection className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0c76a]">
                Why this works
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Complete page systems make the portfolio easier to judge.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                Instead of isolated hero shots, each concept has sections,
                navigation, CTA behavior, responsive structure, and enough
                detail to understand the business direction.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {[
                "Distinct category indexes",
                "Full responsive homepages",
                "Brand-specific color systems",
                "Reusable React components",
              ].map((item) => (
                <article
                  key={item}
                  className="border border-white/10 bg-white/5 p-6"
                >
                  <div className="mb-8 h-2 w-16 bg-[#f0c76a]" />
                  <h3 className="text-2xl font-black">{item}</h3>
                  <p className="mt-3 leading-7 text-white/55">
                    Built for scanning, extending, and presenting.
                  </p>
                </article>
              ))}
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div className="border border-[#e5dccd] bg-[#f8f4ec] p-8 md:p-10">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#9a5b25]">
                Design system
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Shared components, different personalities.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#6a6258]">
                Cards, nav, CTA buttons, image fallbacks, motion classes, and
                layout shells are reused, while each business gets its own
                visual stance.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Hero systems",
                  "Collection cards",
                  "Responsive spacing",
                  "CTA patterns",
                ].map((item) => (
                  <div
                    key={item}
                    className="border border-[#e5dccd] bg-white p-5"
                  >
                    <p className="font-black">{item}</p>
                    <p className="mt-2 text-sm leading-6 text-[#6a6258]">
                      Shared base, tuned per brand.
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <HomeImage
              src={homeImages.componentSystem.src}
              alt={homeImages.componentSystem.alt}
              fallbackStyle={homeImages.componentSystem.fallbackStyle}
              className="min-h-[430px] shadow-2xl shadow-black/10"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.68))]" />
              <div className="absolute bottom-5 left-5 right-5 bg-white/92 p-5 text-[#161616] shadow-xl">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9a5b25]">
                  Component library
                </p>
                <p className="mt-2 text-2xl font-black">
                  One system, many business moods.
                </p>
              </div>
            </HomeImage>
          </AnimatedSection>
        </Container>
      </section>

      <section id="roadmap" className="bg-[#f8f4ec] py-20 md:py-28">
        <Container>
          <AnimatedSection className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <HomeImage
              src={homeImages.designProcess.src}
              alt={homeImages.designProcess.alt}
              fallbackStyle={homeImages.designProcess.fallbackStyle}
              className="min-h-[420px] shadow-2xl shadow-black/10"
            />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#9a5b25]">
                Build roadmap
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Keep expanding in focused, reviewable batches.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[#6a6258]">
                The next best work is continuing category by category, keeping
                every index page and individual homepage coherent as the project
                grows.
              </p>
              <div className="mt-8 space-y-3">
                {[
                  [
                    "Live now",
                    "Restaurant, beauty, real estate, and fitness categories",
                  ],
                  ["Next focus", "Expand each category to 10"],
                  ["Long-term goal", "100 polished homepage concepts"],
                ].map(([label, text]) => (
                  <div
                    key={label}
                    className="border border-[#e5dccd] bg-white p-5"
                  >
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#9a5b25]">
                      {label}
                    </p>
                    <p className="mt-2 text-xl font-black">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <AnimatedSection
            animation="scale-in"
            className="overflow-hidden bg-[#161616] text-white shadow-2xl"
          >
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_0.82fr] md:p-12 lg:p-16">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f4c76d]">
                  Next step
                </p>
                <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                  Review the live collections, then keep building the next
                  category.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                  The homepage now acts as a cleaner command center for the full
                  portfolio: what is live, why it matters, and where the project
                  is going.
                </p>
              </div>
              <div className="bg-white p-6 text-[#161616]">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-[#6a6258]">
                  Quick links
                </p>
                <div className="mt-6 grid gap-3">
                  <Link
                    to="/restaurant"
                    className="bg-[#f8f4ec] p-4 font-black transition hover:bg-[#f4c76d]"
                  >
                    Restaurant Collection
                  </Link>
                  <Link
                    to="/beauty"
                    className="bg-[#fff0f6] p-4 font-black transition hover:bg-[#f5b6c8]"
                  >
                    Beauty Collection
                  </Link>
                  <a
                    href="#categories"
                    className="bg-gray-100 p-4 font-black transition hover:bg-gray-200"
                  >
                    Category Roadmap
                  </a>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
