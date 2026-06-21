import { useState, type ReactNode } from "react";
import { Link } from "react-router-dom";
import { Container, CTAButton, RestaurantSubNav } from "../../components";

const freshBowlImages = {
  hero: {
    src: "/images/freshbowl/hero-bowl.jpg",
    alt: "Colorful FreshBowl Cafe grain bowl with avocado and greens",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_28%_34%,rgba(47,143,70,0.34),transparent_20%),radial-gradient(circle_at_68%_30%,rgba(159,190,90,0.34),transparent_18%),radial-gradient(circle_at_58%_70%,rgba(245,211,122,0.3),transparent_22%),linear-gradient(135deg,#ffffff,#eef8df_48%,#d9efc6)]",
    imagePrompt:
      "Premium healthy bowl cafe hero image, colorful grain bowl with avocado, greens, chickpeas, cucumber, tomatoes, seeds, fresh herbs, bright natural lighting, clean modern cafe background, wellness lifestyle food photography, no text, no logo, no watermark.",
  },
  greenBowl: {
    src: "/images/freshbowl/green-bowl.jpg",
    alt: "Fresh green salad bowl with avocado, greens, quinoa, and seeds",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_26%_30%,#2f8f46_0_13%,transparent_14%),radial-gradient(circle_at_62%_36%,#9fbe5a_0_16%,transparent_17%),radial-gradient(circle_at_70%_72%,#f5d37a_0_12%,transparent_13%),linear-gradient(135deg,#fbfff6,#dcefc4)]",
    imagePrompt:
      "Fresh green salad bowl with avocado, spinach, cucumber, quinoa, edamame, pumpkin seeds, lemon dressing, white ceramic bowl, clean bright food photography, modern healthy cafe style, no text, no logo, no watermark.",
  },
  proteinBowl: {
    src: "/images/freshbowl/protein-bowl.jpg",
    alt: "Protein power bowl with chicken, rice, roasted vegetables, and greens",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_30%_34%,#f4b860_0_14%,transparent_15%),radial-gradient(circle_at_66%_32%,#2f8f46_0_16%,transparent_17%),radial-gradient(circle_at_60%_72%,#d9824b_0_13%,transparent_14%),linear-gradient(135deg,#fffaf0,#e6f3d2)]",
    imagePrompt:
      "Protein power bowl with grilled chicken, brown rice, roasted vegetables, avocado, greens, herbs, sesame seeds, clean modern presentation, bright natural light, premium healthy restaurant photography, no text, no logo, no watermark.",
  },
  smoothieBowl: {
    src: "/images/freshbowl/smoothie-bowl.jpg",
    alt: "Berry smoothie bowl with banana, granola, chia, coconut, and mint",
    fallbackStyle:
      "bg-[radial-gradient(circle_at_28%_34%,#d94685_0_16%,transparent_17%),radial-gradient(circle_at_64%_35%,#f6c453_0_13%,transparent_14%),radial-gradient(circle_at_58%_72%,#ffffff_0_12%,transparent_13%),linear-gradient(135deg,#fff7fb,#e8f5da)]",
    imagePrompt:
      "Colorful smoothie bowl with berries, banana, granola, chia seeds, coconut flakes, fresh mint, bright clean cafe table, wellness food photography, no text, no logo, no watermark.",
  },
  interior: {
    src: "/images/freshbowl/interior.jpg",
    alt: "Bright modern FreshBowl Cafe interior with plants and light wood",
    fallbackStyle:
      "bg-[linear-gradient(90deg,rgba(47,143,70,0.14)_1px,transparent_1px),linear-gradient(180deg,#ffffff,#f7f1e6_52%,#e7f4da)] [background-size:38px_38px]",
    imagePrompt:
      "Bright modern healthy cafe interior, white and light wood surfaces, leafy green plants, clean counter, fresh natural lighting, soft beige and green accents, casual premium wellness atmosphere, no people, no text, no logo, no watermark.",
  },
};

const popularBowls = [
  {
    name: "Green Glow Bowl",
    label: "Best Seller",
    price: "$12.50",
    image: freshBowlImages.greenBowl,
    description:
      "Spinach, quinoa, avocado, cucumber, edamame, pumpkin seeds, herbs, and lemon herb dressing.",
  },
  {
    name: "Protein Power Bowl",
    label: "High Protein",
    price: "$14.75",
    image: freshBowlImages.proteinBowl,
    description:
      "Grilled chicken, brown rice, roasted vegetables, greens, avocado, sesame, and ginger sesame sauce.",
  },
  {
    name: "Citrus Salmon Bowl",
    label: "Fresh Pick",
    price: "$16.25",
    image: freshBowlImages.greenBowl,
    description:
      "Flaked salmon, greens, quinoa, citrus cucumber salad, avocado, herbs, and tahini drizzle.",
  },
  {
    name: "Berry Crunch Smoothie Bowl",
    label: "New",
    price: "$10.95",
    image: freshBowlImages.smoothieBowl,
    description:
      "Berry blend, banana, granola, chia seeds, coconut flakes, fresh mint, and a honey finish.",
  },
];

const menuItems = [
  ["Avocado Quinoa Bowl", "Greens, quinoa, avocado, cucumber, lemon herb", "$12.50"],
  ["Teriyaki Tofu Bowl", "Tofu, brown rice, edamame, cucumber, ginger sesame", "$13.25"],
  ["Grilled Chicken Harvest Bowl", "Chicken, roasted vegetables, greens, seeds", "$14.75"],
  ["Mediterranean Chickpea Bowl", "Chickpeas, tomato, cucumber, herbs, tahini", "$12.95"],
  ["Mango Green Smoothie", "Mango, spinach, banana, mint, coconut water", "$7.50"],
  ["Berry Banana Smoothie Bowl", "Berries, banana, granola, chia, coconut", "$10.95"],
  ["Lemon Mint Water", "Filtered water, citrus, mint, cucumber", "$3.75"],
  ["House Granola Cup", "Oats, seeds, coconut, yogurt, seasonal fruit", "$6.25"],
];

const buildSteps = [
  {
    title: "Choose a Base",
    items: "Greens, quinoa, brown rice, or cauliflower rice",
  },
  {
    title: "Add Protein",
    items: "Grilled chicken, tofu, salmon, or chickpeas",
  },
  {
    title: "Add Toppings",
    items: "Avocado, cucumber, tomatoes, seeds, and herbs",
  },
  {
    title: "Finish With Dressing",
    items: "Lemon herb, tahini, ginger sesame, or spicy green sauce",
  },
];

const benefits = [
  ["Balanced Energy", "Grains, greens, protein, and fats in portions that keep lunch satisfying."],
  ["Prepped Daily", "Crisp produce, bright herbs, and house dressings are prepared fresh every morning."],
  ["Fast Casual, Done Well", "Order at the counter, build it your way, and get a meal that still feels considered."],
];

const testimonials = [
  {
    quote:
      "FreshBowl is my weekday lunch reset. The Green Glow Bowl is bright, filling, and never feels heavy.",
    name: "Maya Thompson",
    role: "Studio Manager",
  },
  {
    quote:
      "I can get something quick between meetings without defaulting to boring takeout. The sauces are excellent.",
    name: "Daniel Reyes",
    role: "Local Regular",
  },
  {
    quote:
      "The smoothie bowls are beautiful, but they also taste fresh and balanced. My kids ask for them after practice.",
    name: "Avery Collins",
    role: "Weekend Guest",
  },
];

function FreshImage({
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

function BowlFallbackDetails() {
  return (
    <>
      <div className="absolute left-8 top-8 h-20 w-20 rounded-full border-[14px] border-white/80 bg-[#2f8f46]/80 shadow-xl" />
      <div className="absolute right-10 top-12 h-16 w-16 rounded-full bg-[#f5d37a]/85 shadow-lg" />
      <div className="absolute bottom-16 left-12 h-14 w-14 rounded-full bg-[#9fbe5a]/90 shadow-lg" />
      <div className="absolute bottom-12 right-14 h-24 w-24 rounded-full border-[16px] border-[#eaf6dd] bg-white/75 shadow-xl" />
      <div className="absolute right-8 top-1/2 h-14 w-8 -translate-y-1/2 rotate-12 rounded-full bg-[#2f8f46]/45" />
    </>
  );
}

export function FreshBowlCafe() {
  return (
    <main className="brand-motion motion-freshbowl bg-[#fbf8f0] text-[#223127]">
      <RestaurantSubNav
        brand="FreshBowl Cafe"
        links={[
          { label: "About", href: "#about" },
          { label: "Bowls", href: "#bowls" },
          { label: "Benefits", href: "#nutrition" },
          { label: "Build Yours", href: "#build" },
          { label: "Visit", href: "#order" },
        ]}
        ctaLabel="Build Your Bowl"
        ctaHref="#build"
        className="border-b border-[#dce8c2] bg-[#fbf8f0]/95"
        brandClassName="text-[#2f8f46]"
        linkClassName="rounded-full px-3 py-2 text-[#526457] transition hover:bg-[#eef6dc] hover:text-[#2f8f46]"
        ctaClassName="bg-[#2f8f46] text-white shadow-sm shadow-[#2f8f46]/20 hover:bg-[#287a3d]"
        menuButtonClassName="border-[#dce8c2] text-[#2f8f46] hover:bg-[#eef6dc]"
        mobilePanelClassName="border border-[#dce8c2] bg-[#fbf8f0]"
      />

      <section className="relative overflow-hidden border-b border-[#dce8c2] bg-[linear-gradient(180deg,#ffffff_0%,#f5faec_48%,#fbf8f0_100%)] pt-28 md:pt-36">
        <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-[#9fbe5a]/20 blur-3xl" />
        <div className="absolute right-0 top-10 h-80 w-80 rounded-full bg-[#2f8f46]/12 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_22%,rgba(47,143,70,0.08),transparent_22%),radial-gradient(circle_at_86%_70%,rgba(159,190,90,0.16),transparent_24%)]" />
        <Container className="relative grid items-center gap-12 pb-20 lg:grid-cols-[0.95fr_1.05fr] md:pb-28">
          <div>
            <div className="inline-flex rounded-full border border-[#dce8c2] bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#2f8f46] shadow-sm">
              Fresh Bowls • Clean Ingredients • Made Daily
            </div>
            <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1.02] text-[#223127] md:text-7xl">
              Feel-Good Bowls Made Fresh for Every Day
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#526457] md:text-xl">
              Colorful bowls, clean ingredients, and balanced meals made for a
              healthier fast-casual rhythm. FreshBowl turns lunch, dinner, and
              post-workout bites into something bright, nourishing, and easy.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="#build" size="lg" className="bg-[#2f8f46] hover:bg-[#287a3d]">
                Build Your Bowl
              </CTAButton>
              <CTAButton
                href="#menu"
                variant="outline"
                size="lg"
                className="border-[#2f8f46] text-[#2f8f46] hover:bg-[#eef6dc]"
              >
                View Menu
              </CTAButton>
            </div>
            <div className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                ["20+", "Fresh Ingredients"],
                ["Made", "Daily"],
                ["Balanced", "Meals"],
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-[#dce8c2] bg-white/80 p-4 shadow-sm">
                  <p className="text-3xl font-black text-[#2f8f46]">{value}</p>
                  <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-[#526457]">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl">
            <div className="absolute -left-4 top-14 h-24 w-12 -rotate-12 rounded-full bg-[#2f8f46]/18" />
            <div className="absolute -right-3 bottom-16 h-28 w-14 rotate-12 rounded-full bg-[#9fbe5a]/24" />
            <FreshImage
              src={freshBowlImages.hero.src}
              alt={freshBowlImages.hero.alt}
              fallbackStyle={freshBowlImages.hero.fallbackStyle}
              className="float-slow min-h-[440px] rounded-[2.25rem] border border-white bg-white p-3 shadow-2xl shadow-[#223127]/12"
            >
              <BowlFallbackDetails />
              <div className="absolute inset-3 rounded-[1.75rem] bg-[linear-gradient(180deg,transparent_46%,rgba(34,49,39,0.54))]" />
              <div className="absolute bottom-7 left-7 right-7 rounded-3xl border border-white/40 bg-white/90 p-5 shadow-xl backdrop-blur">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#2f8f46]">Nutrition snapshot</p>
                <div className="mt-3 grid grid-cols-3 gap-3 text-center">
                  {["Protein", "Greens", "Crunch"].map((item) => (
                    <div key={item} className="rounded-2xl bg-[#eef6dc] px-3 py-3 text-sm font-black text-[#223127]">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </FreshImage>
          </div>
        </Container>
      </section>

      <section id="about" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <FreshImage
              src={freshBowlImages.interior.src}
              alt={freshBowlImages.interior.alt}
              fallbackStyle={freshBowlImages.interior.fallbackStyle}
              className="min-h-[360px] rounded-[2rem] border border-[#e2ead4] bg-white shadow-xl shadow-[#223127]/8"
            >
              <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_54%,rgba(34,49,39,0.48))]" />
              <div className="absolute bottom-5 left-5 right-5 rounded-3xl bg-white/90 p-5 shadow-lg backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#2f8f46]">Bright, quick, nourishing</p>
                <p className="mt-2 text-2xl font-black">A wellness cafe built for everyday meals.</p>
              </div>
            </FreshImage>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#2f8f46]">About FreshBowl Cafe</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Clean food that feels fresh, fast, and genuinely satisfying.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#526457]">
                FreshBowl Cafe serves colorful salads, grain bowls, and smoothie
                bowls for people who want real food without slowing down. Every
                bowl starts with crisp produce, filling bases, bright sauces, and
                thoughtful toppings that make healthy eating feel easy.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-3xl border border-[#dce8c2] bg-white p-6 shadow-sm">
                  <div className="mb-5 h-2 w-20 rounded-full bg-[#2f8f46]" />
                  <h3 className="text-xl font-black">Fresh Prep Rhythm</h3>
                  <p className="mt-3 leading-7 text-[#526457]">Produce is washed, chopped, dressed, and portioned daily for clean flavor.</p>
                </div>
                <div className="rounded-3xl border border-[#dce8c2] bg-[#eef6dc] p-6 shadow-sm">
                  <div className="mb-5 h-2 w-20 rounded-full bg-[#9fbe5a]" />
                  <h3 className="text-xl font-black">Fast-Casual Ease</h3>
                  <p className="mt-3 leading-7 text-[#526457]">Order quickly, customize freely, and leave with a meal that feels complete.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="bowls" className="border-y border-[#dce8c2] bg-white py-20 md:py-28">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#2f8f46]">Popular bowls</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                Bright bowls with enough flavor to become a routine.
              </h2>
            </div>
            <p className="max-w-md leading-7 text-[#526457]">
              Built for lunch breaks, post-gym cravings, and quick dinners that
              still feel fresh.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {popularBowls.map((bowl) => (
              <article
                key={bowl.name}
                className="group rounded-[2rem] border border-[#e2ead4] bg-[#fbf8f0] p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#c8dfac] hover:shadow-xl"
              >
                <FreshImage
                  src={bowl.image.src}
                  alt={bowl.image.alt}
                  fallbackStyle={bowl.image.fallbackStyle}
                  className="min-h-[210px] rounded-[1.5rem]"
                >
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(34,49,39,0.02),rgba(34,49,39,0.32))]" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#2f8f46] shadow-sm">
                    {bowl.label}
                  </div>
                </FreshImage>
                <div className="p-2 pt-5">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black">{bowl.name}</h3>
                    <span className="rounded-full bg-[#223127] px-3 py-1 text-sm font-black text-white">{bowl.price}</span>
                  </div>
                  <p className="mt-3 leading-7 text-[#526457]">{bowl.description}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="nutrition" className="relative overflow-hidden bg-[#223127] py-20 text-white md:py-28">
        <div className="absolute left-10 top-12 h-28 w-14 -rotate-12 rounded-full bg-[#9fbe5a]/18" />
        <div className="absolute bottom-8 right-12 h-32 w-16 rotate-12 rounded-full bg-[#2f8f46]/24" />
        <Container className="relative">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#b8db70]">Nutrition benefits</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
              Wellness-focused meals without the lecture.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/72">
              Our bowls are designed around simple ingredients, natural texture,
              and the kind of balance that helps a quick meal feel good after
              the last bite.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map(([title, text]) => (
              <article key={title} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-7 shadow-xl shadow-black/10 backdrop-blur">
                <div className="mb-6 h-2 w-16 rounded-full bg-[#b8db70]" />
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-4 leading-7 text-white/70">{text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="build" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#2f8f46]">Build your bowl</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Pick a base, add color, finish with sauce.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[#526457]">
              Guests can follow the menu or build from scratch. The counter flow
              stays simple: base, protein, toppings, dressing, done.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {buildSteps.map((step, index) => (
              <article key={step.title} className="rounded-[2rem] border border-[#dce8c2] bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eef6dc] text-sm font-black text-[#2f8f46]">
                  0{index + 1}
                </span>
                <h3 className="mt-7 text-2xl font-black">{step.title}</h3>
                <p className="mt-3 leading-7 text-[#526457]">{step.items}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="menu" className="border-y border-[#dce8c2] bg-[#f3f8ea] py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#2f8f46]">Menu preview</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">A real menu for everyday fresh eating.</h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#526457]">
              Bowls, smoothies, and simple sides made for dine-in, pickup, and
              the lunch break that needs to feel better.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
            {menuItems.map(([name, note, price]) => (
              <article key={name} className="flex items-start justify-between gap-5 rounded-3xl border border-[#dce8c2] bg-white p-5 shadow-sm">
                <div>
                  <h3 className="text-xl font-black">{name}</h3>
                  <p className="mt-2 leading-6 text-[#526457]">{note}</p>
                </div>
                <span className="shrink-0 rounded-full bg-[#eef6dc] px-3 py-1 text-sm font-black text-[#2f8f46]">{price}</span>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#2f8f46]">Testimonials</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">What guests say after the first bowl.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="rounded-[2rem] border border-[#e2ead4] bg-[#fbf8f0] p-8 shadow-sm">
                <div className="mb-5 flex gap-1 text-[#2f8f46]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>*</span>
                  ))}
                </div>
                <p className="text-lg font-semibold leading-8 text-[#324339]">"{testimonial.quote}"</p>
                <footer className="mt-7">
                  <p className="font-black">{testimonial.name}</p>
                  <p className="mt-1 text-sm text-[#526457]">{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section id="order" className="relative overflow-hidden bg-[#9fbe5a] py-20 md:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(255,255,255,0.28),transparent_22%),radial-gradient(circle_at_80%_76%,rgba(47,143,70,0.24),transparent_24%)]" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#223127]">Start your order</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Fresh bowls are ready when your day needs a clean reset.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#223127]/78">
                Call ahead for pickup, stop by the counter, or build a bowl that
                fits your appetite and your schedule.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="tel:555-016-6600" size="lg" className="bg-[#223127] text-white hover:bg-[#17221b]">
                  Call (555) 016-6600
                </CTAButton>
                <CTAButton href="#menu" variant="outline" size="lg" className="border-[#223127] text-[#223127] hover:bg-white/40">
                  View Menu
                </CTAButton>
              </div>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/30 bg-white/60 p-6 shadow-xl shadow-[#223127]/10 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#2f8f46]">Opening Hours</p>
                <div className="mt-5 space-y-3 text-sm text-[#324339]">
                  <div className="flex justify-between gap-4"><span>Mon - Fri</span><span className="font-bold">8 AM - 8 PM</span></div>
                  <div className="flex justify-between gap-4"><span>Sat - Sun</span><span className="font-bold">9 AM - 7 PM</span></div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/30 bg-white/60 p-6 shadow-xl shadow-[#223127]/10 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#2f8f46]">Find Us</p>
                <div className="mt-5 space-y-3 text-sm text-[#324339]">
                  <p>75 Wellness Way</p>
                  <p>Market Green District</p>
                  <p>Pickup and dine-in daily</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <footer className="border-t border-[#dce8c2] bg-[#223127] py-12 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-2xl font-black">FreshBowl Cafe</p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/70">
                Colorful bowls, smoothie bowls, and clean ingredients made fresh
                for everyday wellness.
              </p>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b8db70]">Hours</p>
              <div className="mt-4 space-y-2 text-sm text-white/72">
                <p>Mon - Fri: 8 AM - 8 PM</p>
                <p>Sat - Sun: 9 AM - 7 PM</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b8db70]">Location & Social</p>
              <div className="mt-4 space-y-2 text-sm text-white/72">
                <p>75 Wellness Way, Market Green</p>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>TikTok</p>
              </div>
            </div>
          </div>
        </Container>
      </footer>

      <section className="border-t border-[#dce8c2] bg-[#fbf8f0] py-10">
        <Container className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link to="/restaurant" className="font-bold text-[#2f8f46] hover:text-[#223127]">
            Back to Restaurant Collection
          </Link>
          <Link to="/" className="font-bold text-[#526457] hover:text-[#223127]">
            Back to 100 Designs Portfolio
          </Link>
        </Container>
      </section>
    </main>
  );
}
