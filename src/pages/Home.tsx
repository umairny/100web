import { Link } from "react-router-dom";
import { useState, type ReactNode } from "react";
import {
  AnimatedSection,
  Container,
  CategoryCard,
  WebsiteCard,
  CTAButton,
} from "../components";
import {
  beautyWebsites,
  categories,
  restaurantWebsites,
} from "../data/websites";

const homeImages = {
  heroShowcase: {
    src: "/images/home/hero-showcase.png",
    alt: "100 website design showcase by Umair Ahmad",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_20%_20%,rgba(139,111,82,0.25),transparent_28%),radial-gradient(circle_at_82%_24%,rgba(239,59,45,0.2),transparent_24%),linear-gradient(135deg,#f7f2e8,#ffffff_48%,#111827)]",
  },
  heroAbstract: {
    src: "/images/home/hero-abstract-bg.png",
    alt: "Abstract homepage background for the Umair 100 website design portfolio",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_18%_22%,rgba(139,111,82,0.2),transparent_28%),radial-gradient(circle_at_84%_28%,rgba(239,59,45,0.14),transparent_24%),linear-gradient(135deg,#f7f2e8,#ffffff)]",
  },
  websiteCollection: {
    src: "/images/home/website-collection.png",
    alt: "A growing collection of polished website concepts",
    fallbackStyle:
      "bg-[linear-gradient(90deg,rgba(17,24,39,0.08)_1px,transparent_1px),linear-gradient(180deg,#ffffff,#f7f2e8)] [background-size:34px_34px]",
  },
  componentSystem: {
    src: "/images/home/component-system.png",
    alt: "Reusable website component system with cards, layouts, navigation, and CTA blocks",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_22%_24%,rgba(139,111,82,0.2),transparent_24%),radial-gradient(circle_at_78%_72%,rgba(47,143,70,0.18),transparent_24%),linear-gradient(135deg,#111827,#374151)]",
  },
  designProcess: {
    src: "/images/home/design-process.png",
    alt: "Website design workflow from brand direction to client-ready responsive homepage",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_22%_28%,rgba(244,161,26,0.24),transparent_24%),radial-gradient(circle_at_80%_70%,rgba(239,59,45,0.18),transparent_24%),linear-gradient(135deg,#f7f2e8,#ffffff)]",
  },
  restaurantCollection: {
    src: "/images/home/restaurant-collection-collage.png",
    alt: "Restaurant website design collection preview collage",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_18%_22%,rgba(239,59,45,0.22),transparent_24%),radial-gradient(circle_at_80%_78%,rgba(244,161,26,0.22),transparent_26%),linear-gradient(135deg,#fff7e8,#ffffff)]",
  },
  beautyCollection: {
    src: "/images/home/beauty-collection-collage.png",
    alt: "Beauty and salon website design collection preview collage",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_20%_24%,rgba(236,72,153,0.22),transparent_24%),radial-gradient(circle_at_78%_72%,rgba(215,181,109,0.2),transparent_24%),linear-gradient(135deg,#fff0f6,#ffffff)]",
  },
  aboutProject: {
    src: "/images/home/about-project.png",
    alt: "Project overview showing complete homepage design directions",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_20%_24%,rgba(255,255,255,0.16),transparent_24%),linear-gradient(135deg,#111827,#374151)]",
  },
  categoriesOverview: {
    src: "/images/home/categories-overview.png",
    alt: "Overview of website categories in the 100 website design project",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_20%_22%,rgba(139,111,82,0.2),transparent_24%),radial-gradient(circle_at_80%_72%,rgba(14,165,233,0.16),transparent_24%),linear-gradient(135deg,#ffffff,#f7f2e8)]",
  },
  responsiveDesign: {
    src: "/images/home/responsive-design.png",
    alt: "Responsive website design preview across mobile tablet and desktop screens",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_18%_24%,rgba(14,165,233,0.2),transparent_24%),linear-gradient(135deg,#ffffff,#e0f2fe)]",
  },
  designToCode: {
    src: "/images/home/design-to-code.png",
    alt: "Design to code workflow preview for React and Tailwind website pages",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_20%_24%,rgba(47,143,70,0.18),transparent_24%),linear-gradient(135deg,#111827,#1f2937)]",
  },
  uiComponentsCloseup: {
    src: "/images/home/ui-components-closeup.png",
    alt: "Close-up of reusable UI components for website concepts",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_28%_28%,rgba(139,111,82,0.2),transparent_24%),linear-gradient(135deg,#ffffff,#f3f4f6)]",
  },
  businessBrands: {
    src: "/images/home/business-brands.png",
    alt: "Business brand directions across website categories",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_22%_26%,rgba(239,59,45,0.18),transparent_24%),linear-gradient(135deg,#ffffff,#f7f2e8)]",
  },
  caseStudyPreview: {
    src: "/images/home/case-study-preview.png",
    alt: "Case study style preview for completed website concepts",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_20%_24%,rgba(139,111,82,0.2),transparent_24%),linear-gradient(135deg,#111827,#ffffff)]",
  },
  clientReadyWebsites: {
    src: "/images/home/client-ready-websites.png",
    alt: "Client-ready website designs preview",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_20%_24%,rgba(47,143,70,0.2),transparent_24%),radial-gradient(circle_at_78%_72%,rgba(239,59,45,0.16),transparent_24%),linear-gradient(135deg,#ffffff,#f7f2e8)]",
  },
  portfolioShowcase: {
    src: "/images/home/portfolio-showcase.png",
    alt: "Portfolio showcase preview for the Umair 100 website designs project",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_22%_24%,rgba(99,102,241,0.18),transparent_24%),linear-gradient(135deg,#ffffff,#e5e7eb)]",
  },
};

const roadmapSteps = [
  {
    label: "Current focus",
    title: "Restaurant collection",
    text: "Ten complete dining concepts are live, each with a different brand voice and visual system.",
  },
  {
    label: "Next batch",
    title: "Start the Beauty category",
    text: "The restaurant category is complete, so the next batch can begin salons, spas, skincare, and beauty brands.",
  },
  {
    label: "Portfolio expansion",
    title: "Move across industries",
    text: "Beauty, real estate, fitness, medical, education, commerce, portfolio, and SaaS concepts come after.",
  },
];

const processSteps = [
  {
    title: "Brand direction",
    text: "Define the business category, audience, mood, palette, and visual rhythm before the page takes shape.",
  },
  {
    title: "Homepage design",
    text: "Build a complete responsive homepage with real sections, strong hierarchy, and client-ready content.",
  },
  {
    title: "Polish and responsive testing",
    text: "Refine spacing, motion, cards, CTAs, and mobile behavior so the concept feels usable and finished.",
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
  const completedRestaurantWebsites = restaurantWebsites.filter(
    (website) => website.status === "completed" || website.status === "live",
  );
  const completedBeautyWebsites = beautyWebsites.filter(
    (website) => website.status === "completed" || website.status === "live",
  );
  const completedDesignCount =
    completedRestaurantWebsites.length + completedBeautyWebsites.length;

  return (
    <main className="bg-white text-gray-950">
      <section className="relative overflow-hidden bg-[#f7f2e8] py-16 md:py-24">
        <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,0.9),rgba(255,255,255,0.42)),radial-gradient(circle_at_12%_18%,rgba(139,111,82,0.18),transparent_26%),radial-gradient(circle_at_86%_20%,rgba(239,59,45,0.12),transparent_24%),radial-gradient(circle_at_70%_86%,rgba(244,161,26,0.14),transparent_26%)]" />
        <HomeImage
          src={homeImages.heroAbstract.src}
          alt={homeImages.heroAbstract.alt}
          fallbackStyle={homeImages.heroAbstract.fallbackStyle}
          className="absolute inset-0 opacity-35"
        >
          <div className="absolute inset-0 bg-white/50" />
        </HomeImage>
        <Container>
          <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
            <AnimatedSection animation="slide-left">
              <AnimatedSection
                animation="fade-down"
                className="mb-6 inline-flex rounded-full border border-coffee-200 bg-white/75 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-coffee-700 shadow-sm"
              >
                Umair 100 Website Designs
              </AnimatedSection>
              <h1 className="max-w-4xl text-4xl font-black leading-tight tracking-normal text-gray-950 md:text-6xl">
                A practical design portfolio for 100 real business homepages.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 md:text-xl">
                A growing collection of polished Vite, React, TypeScript, and
                Tailwind CSS homepage concepts, built category by category
                instead of as empty placeholders.
              </p>
              <AnimatedSection
                animation="fade-up"
                delay="delay-300"
                className="mt-8 flex flex-col gap-4 sm:flex-row"
              >
                <CTAButton size="lg" href="#featured">
                  View Live Designs
                </CTAButton>
                <CTAButton variant="outline" size="lg" href="#roadmap">
                  See Roadmap
                </CTAButton>
              </AnimatedSection>
              <div className="mt-10 grid max-w-xl grid-cols-3 gap-3">
                {[
                  { value: categories.length, label: "Categories" },
                  { value: 100, label: "Planned concepts" },
                  { value: completedDesignCount, label: "Completed designs" },
                ].map((stat, index) => (
                  <div
                    key={stat.label}
                    className={`reveal-card rounded-2xl border border-white bg-white/70 p-4 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""}`}
                  >
                    <p className="text-3xl font-black text-gray-950">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-gray-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection
              animation="scale-in"
              delay="delay-200"
              className="relative"
            >
              <div className="absolute -left-4 top-10 h-28 w-28 rounded-full bg-coffee-300/30 blur-2xl" />
              <div className="absolute -right-5 bottom-10 h-32 w-32 rounded-[2rem] bg-red-400/15 blur-xl" />
              <div className="relative rounded-[2rem] border border-white bg-white/70 p-3 shadow-2xl shadow-gray-950/12 backdrop-blur">
                <HomeImage
                  src={homeImages.heroShowcase.src}
                  alt={homeImages.heroShowcase.alt}
                  fallbackStyle={homeImages.heroShowcase.fallbackStyle}
                  className="min-h-[360px] rounded-[1.5rem] md:min-h-[520px]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_42%,rgba(17,24,39,0.72))]" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-gray-950 shadow-lg backdrop-blur">
                    Portfolio preview
                  </div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-[1.25rem] border border-white/40 bg-white/90 p-5 shadow-xl backdrop-blur">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-emerald-700">
                      {completedDesignCount} completed designs
                    </p>
                    <h2 className="mt-2 text-2xl font-black text-gray-950">
                      Restaurant and beauty concepts are live, with more
                      categories planned.
                    </h2>
                  </div>
                </HomeImage>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <AnimatedSection>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-coffee-700">
                Showcase library
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                A Growing Collection of Website Concepts
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                Each design is created for a real business category, with unique
                branding, layout direction, responsive structure, and polished
                visual style.
              </p>
              <div className="mt-8 grid max-w-xl gap-3 sm:grid-cols-3">
                {[
                  ["10", "Categories"],
                  ["100", "Concept goal"],
                  [completedDesignCount, "Finished so far"],
                ].map(([value, label], index) => (
                  <div
                    key={label}
                    className={`reveal-card rounded-2xl border border-gray-100 bg-[#f7f2e8] p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""}`}
                  >
                    <p className="text-3xl font-black text-gray-950">{value}</p>
                    <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-gray-500">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid max-w-xl gap-4 sm:grid-cols-2">
                {[
                  {
                    image: homeImages.businessBrands,
                    label: "Business brands",
                  },
                  {
                    image: homeImages.responsiveDesign,
                    label: "Responsive screens",
                  },
                ].map((item, index) => (
                  <HomeImage
                    key={item.label}
                    src={item.image.src}
                    alt={item.image.alt}
                    fallbackStyle={item.image.fallbackStyle}
                    className={`reveal-card min-h-[180px] rounded-2xl border border-gray-100 shadow-lg shadow-gray-950/5 ${index === 1 ? "delay-100" : ""}`}
                  >
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(17,24,39,0.68))]" />
                    <p className="absolute bottom-4 left-4 right-4 text-sm font-black uppercase tracking-[0.16em] text-white">
                      {item.label}
                    </p>
                  </HomeImage>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scale-in" delay="delay-200">
              <div className="rounded-[2rem] border border-gray-100 bg-[#f7f2e8] p-3 shadow-2xl shadow-gray-950/10">
                <HomeImage
                  src={homeImages.websiteCollection.src}
                  alt={homeImages.websiteCollection.alt}
                  fallbackStyle={homeImages.websiteCollection.fallbackStyle}
                  className="min-h-[340px] rounded-[1.5rem] md:min-h-[440px]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_54%,rgba(17,24,39,0.64))]" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-coffee-700">
                      Website collection
                    </p>
                    <p className="mt-1 text-xl font-black text-gray-950">
                      Real homepage directions instead of empty placeholders.
                    </p>
                  </div>
                </HomeImage>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section id="featured" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-coffee-700">
                Completed Restaurant Designs
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                Ten restaurant websites ready to view.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-gray-600">
              The restaurant category is now complete: cafes, bakeries, grills,
              pizza, healthy bowls, steakhouse, tea, burgers, and seafood.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scale-in" className="mb-10">
            <div className="rounded-[2rem] border border-gray-100 bg-[#f7f2e8] p-3 shadow-2xl shadow-gray-950/8">
              <HomeImage
                src={homeImages.restaurantCollection.src}
                alt={homeImages.restaurantCollection.alt}
                fallbackStyle={homeImages.restaurantCollection.fallbackStyle}
                className="min-h-[300px] rounded-[1.5rem] md:min-h-[420px]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_54%,rgba(17,24,39,0.72))]" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-5 shadow-xl backdrop-blur md:max-w-xl">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-coffee-700">
                    Restaurant collection
                  </p>
                  <p className="mt-1 text-2xl font-black text-gray-950">
                    Ten dining concepts with distinct atmosphere, color, and
                    menu direction.
                  </p>
                </div>
              </HomeImage>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {completedRestaurantWebsites.map((website, index) => (
              <div
                key={website.id}
                className={
                  index % 3 === 1
                    ? "delay-100"
                    : index % 3 === 2
                      ? "delay-200"
                      : ""
                }
              >
                <WebsiteCard website={website} />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/restaurant" variant="secondary" size="lg">
              View Restaurant Collection
            </CTAButton>
          </div>
        </Container>
      </section>

      <section id="beauty" className="bg-[#fff0f6] py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-pink-700">
                New Beauty Designs
              </p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                Four beauty and salon websites are now live.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-gray-600">
              GlowHaus Salon, Luxe Nail Studio, Serenity Spa, and Blush Beauty
              Bar start the second category.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scale-in" className="mb-10">
            <div className="rounded-[2rem] border border-pink-100 bg-white/75 p-3 shadow-2xl shadow-pink-900/8">
              <HomeImage
                src={homeImages.beautyCollection.src}
                alt={homeImages.beautyCollection.alt}
                fallbackStyle={homeImages.beautyCollection.fallbackStyle}
                className="min-h-[300px] rounded-[1.5rem] md:min-h-[420px]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(17,24,39,0.62))]" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-5 shadow-xl backdrop-blur md:max-w-xl">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-pink-700">
                    Beauty collection
                  </p>
                  <p className="mt-1 text-2xl font-black text-gray-950">
                    Salon, spa, nail, and beauty-bar directions with polished
                    visual style.
                  </p>
                </div>
              </HomeImage>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {completedBeautyWebsites.map((website, index) => (
              <div
                key={website.id}
                className={
                  index % 4 === 1
                    ? "delay-100"
                    : index % 4 === 2
                      ? "delay-200"
                      : index % 4 === 3
                        ? "delay-300"
                        : ""
                }
              >
                <WebsiteCard website={website} />
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <CTAButton href="/beauty" variant="secondary" size="lg">
              View Beauty Collection
            </CTAButton>
          </div>
        </Container>
      </section>

      <section
        id="about-project"
        className="bg-gray-950 py-20 text-white md:py-28"
      >
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
            <AnimatedSection animation="slide-left">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-coffee-300">
                Why this works
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Not a gallery of thumbnails. A library of complete homepage
                directions.
              </h2>
              <p className="mt-5 text-lg leading-8 text-gray-300">
                Every completed concept includes real sections, responsive
                layouts, custom color direction, and enough detail to show how a
                business could actually use the design.
              </p>
            </AnimatedSection>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Responsive React pages",
                "Tailwind-only styling",
                "Distinct brand systems",
                "No external image dependency",
              ].map((item, index) => (
                <div
                  key={item}
                  className={`reveal-card rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white/25 hover:bg-white/[0.07] hover:shadow-xl hover:shadow-black/20 ${index % 2 === 1 ? "delay-150" : ""}`}
                >
                  <div className="mb-8 h-2 w-16 rounded-full bg-coffee-300" />
                  <h3 className="text-2xl font-black">{item}</h3>
                  <p className="mt-3 leading-7 text-gray-400">
                    Built to be easy to scan, extend, and present.
                  </p>
                </div>
              ))}
              {[
                {
                  image: homeImages.aboutProject,
                  label: "Complete page systems",
                },
                {
                  image: homeImages.uiComponentsCloseup,
                  label: "Reusable UI details",
                },
              ].map((item, index) => (
                <HomeImage
                  key={item.label}
                  src={item.image.src}
                  alt={item.image.alt}
                  fallbackStyle={item.image.fallbackStyle}
                  className={`reveal-card min-h-[220px] rounded-2xl border border-white/10 shadow-xl shadow-black/20 ${index === 1 ? "delay-150" : ""}`}
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(0,0,0,0.72))]" />
                  <p className="absolute bottom-4 left-4 right-4 text-sm font-black uppercase tracking-[0.16em] text-white">
                    {item.label}
                  </p>
                </HomeImage>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-[#f7f2e8] py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <AnimatedSection animation="scale-in">
              <div className="rounded-[2rem] border border-white bg-white/75 p-3 shadow-2xl shadow-gray-950/10">
                <HomeImage
                  src={homeImages.componentSystem.src}
                  alt={homeImages.componentSystem.alt}
                  fallbackStyle={homeImages.componentSystem.fallbackStyle}
                  className="min-h-[340px] rounded-[1.5rem] md:min-h-[430px]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,24,39,0.04),rgba(17,24,39,0.66))]" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/20 bg-white/90 p-4 shadow-xl backdrop-blur">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-coffee-700">
                      Component library
                    </p>
                    <p className="mt-1 text-xl font-black text-gray-950">
                      Shared pieces, different brand personalities.
                    </p>
                  </div>
                </HomeImage>
              </div>
            </AnimatedSection>
            <AnimatedSection delay="delay-100">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-coffee-700">
                Design system
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Reusable Design System
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-600">
                Shared components, layouts, cards, hero sections, navigation,
                and CTA blocks help keep the project consistent while allowing
                every brand to feel unique.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Hero layouts",
                  "Website cards",
                  "Navigation bars",
                  "CTA blocks",
                ].map((item, index) => (
                  <div
                    key={item}
                    className={`reveal-card rounded-2xl border border-white bg-white/70 p-5 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl ${index % 2 === 1 ? "delay-100" : ""}`}
                  >
                    <p className="font-black text-gray-950">{item}</p>
                    <p className="mt-2 text-sm leading-6 text-gray-600">
                      Built once, tuned per brand.
                    </p>
                  </div>
                ))}
              </div>
              <HomeImage
                src={homeImages.designToCode.src}
                alt={homeImages.designToCode.alt}
                fallbackStyle={homeImages.designToCode.fallbackStyle}
                className="reveal-card mt-6 min-h-[220px] rounded-2xl border border-white shadow-xl shadow-gray-950/8"
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(17,24,39,0.7))]" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-white/85">
                    Design to code
                  </p>
                  <p className="mt-1 text-xl font-black text-white">
                    React, TypeScript, Tailwind, and reusable patterns.
                  </p>
                </div>
              </HomeImage>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section id="categories" className="py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-coffee-700">
              The full plan
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Ten categories, one hundred concepts.
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              The project is structured as a broad website design portfolio,
              with restaurants leading the first set.
            </p>
          </AnimatedSection>
          <AnimatedSection animation="scale-in" className="mb-10">
            <div className="rounded-[2rem] border border-gray-100 bg-[#f7f2e8] p-3 shadow-2xl shadow-gray-950/8">
              <HomeImage
                src={homeImages.categoriesOverview.src}
                alt={homeImages.categoriesOverview.alt}
                fallbackStyle={homeImages.categoriesOverview.fallbackStyle}
                className="min-h-[260px] rounded-[1.5rem] md:min-h-[360px]"
              >
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_52%,rgba(17,24,39,0.62))]" />
                <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-5 shadow-xl backdrop-blur md:max-w-xl">
                  <p className="text-sm font-black uppercase tracking-[0.18em] text-coffee-700">
                    Category map
                  </p>
                  <p className="mt-1 text-2xl font-black text-gray-950">
                    A broad plan across practical business website types.
                  </p>
                </div>
              </HomeImage>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
            {categories.map((category, index) => (
              <div
                key={category.name}
                className={`h-full ${index < 2 ? "xl:col-span-2" : ""} ${index % 4 === 1 ? "delay-100" : index % 4 === 2 ? "delay-200" : index % 4 === 3 ? "delay-300" : ""}`}
              >
                <CategoryCard category={category} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <AnimatedSection>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-coffee-700">
                Design workflow
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                From Concept to Client-Ready Website
              </h2>
              <div className="mt-8 grid gap-4">
                {processSteps.map((step, index) => (
                  <article
                    key={step.title}
                    className={`reveal-card rounded-2xl border border-gray-100 bg-[#f7f2e8] p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""}`}
                  >
                    <div className="flex gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gray-950 text-sm font-black text-white">
                        0{index + 1}
                      </span>
                      <div>
                        <h3 className="text-2xl font-black text-gray-950">
                          {step.title}
                        </h3>
                        <p className="mt-2 leading-7 text-gray-600">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection animation="scale-in" delay="delay-200">
              <div className="rounded-[2rem] border border-gray-100 bg-[#f7f2e8] p-3 shadow-2xl shadow-gray-950/10">
                <HomeImage
                  src={homeImages.designProcess.src}
                  alt={homeImages.designProcess.alt}
                  fallbackStyle={homeImages.designProcess.fallbackStyle}
                  className="min-h-[340px] rounded-[1.5rem] md:min-h-[460px]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(17,24,39,0.58))]" />
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur">
                    <p className="text-sm font-black uppercase tracking-[0.18em] text-coffee-700">
                      Process image
                    </p>
                    <p className="mt-1 text-xl font-black text-gray-950">
                      Brand, build, polish, then test across screens.
                    </p>
                  </div>
                </HomeImage>
              </div>
            </AnimatedSection>
          </div>
        </Container>
      </section>

      <section id="roadmap" className="bg-[#f7f2e8] py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-coffee-700">
              Build roadmap
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              The portfolio grows in focused batches.
            </h2>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-3">
            {roadmapSteps.map((step, index) => (
              <article
                key={step.title}
                className={`reveal-card rounded-3xl border border-white bg-white/80 p-8 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-xl ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""}`}
              >
                <p className="text-sm font-black uppercase tracking-[0.2em] text-coffee-700">
                  {step.label}
                </p>
                <p className="mt-8 text-5xl font-black text-gray-950">
                  0{index + 1}
                </p>
                <h3 className="mt-5 text-2xl font-black">{step.title}</h3>
                <p className="mt-3 leading-7 text-gray-600">{step.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <AnimatedSection className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-coffee-700">
              Portfolio proof
            </p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Visuals for case studies, finished pages, and portfolio
              presentation.
            </h2>
            <p className="mt-5 text-lg leading-8 text-gray-600">
              The project can grow from individual homepage concepts into a
              fuller portfolio with client-ready previews and case-study style
              presentation.
            </p>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                image: homeImages.caseStudyPreview,
                label: "Case study preview",
                text: "Show the design thinking behind each finished concept.",
              },
              {
                image: homeImages.clientReadyWebsites,
                label: "Client-ready websites",
                text: "Present polished homepages with realistic content and sections.",
              },
              {
                image: homeImages.portfolioShowcase,
                label: "Portfolio showcase",
                text: "Turn the collection into a strong visual presentation.",
              },
            ].map((item, index) => (
              <article
                key={item.label}
                className={`reveal-card overflow-hidden rounded-3xl border border-gray-100 bg-[#f7f2e8] shadow-xl shadow-gray-950/6 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-2xl ${index === 1 ? "delay-100" : index === 2 ? "delay-200" : ""}`}
              >
                <HomeImage
                  src={item.image.src}
                  alt={item.image.alt}
                  fallbackStyle={item.image.fallbackStyle}
                  className="min-h-[240px]"
                />
                <div className="p-6">
                  <p className="text-xs font-black uppercase tracking-[0.18em] text-coffee-700">
                    {item.label}
                  </p>
                  <p className="mt-3 leading-7 text-gray-600">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <AnimatedSection
            animation="scale-in"
            className="overflow-hidden rounded-[2rem] bg-gray-950 text-white shadow-2xl"
          >
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_0.8fr] md:p-12 lg:p-16">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.24em] text-coffee-300">
                  Next step
                </p>
                <h2 className="mt-4 max-w-2xl text-4xl font-black leading-tight md:text-5xl">
                  Keep building the restaurant collection.
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-300">
                  The restaurant category is complete. The strongest next move
                  is to start the Beauty and Salon category.
                </p>
              </div>
              <div className="rounded-3xl bg-white p-6 text-gray-950">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-gray-500">
                  Next category ideas
                </p>
                <div className="mt-6 space-y-4">
                  {[
                    "LuxeGlow Salon",
                    "Rose & Ritual Spa",
                    "Velvet Nail Studio",
                  ].map((idea) => (
                    <div
                      key={idea}
                      className="flex items-center gap-4 rounded-2xl bg-gray-100 p-4"
                    >
                      <span className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500 to-rose-500" />
                      <div>
                        <p className="font-black">{idea}</p>
                        <p className="text-sm text-gray-500">
                          Beauty and salon concept
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <CTAButton
                  href="#featured"
                  size="lg"
                  className="mt-6 w-full bg-gray-950 hover:bg-coffee-700"
                >
                  Review Current Designs
                </CTAButton>
              </div>
            </div>
          </AnimatedSection>
        </Container>
      </section>
    </main>
  );
}
