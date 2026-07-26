import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import heroImage from "../../assets/images/beauty/pureglow/hero.png";
import beautyImage from "../../assets/images/beauty/pureglow/bearty-banner.png";
import interiorImage from "../../assets/images/beauty/pureglow/interior.png";
import createLookImage from "../../assets/images/beauty/pureglow/createyourlook.png";
import lipFillerImage from "../../assets/images/beauty/pureglow/lipfiller.png";
import botoxImage from "../../assets/images/beauty/pureglow/botox.png";
import hydrafacialImage from "../../assets/images/beauty/pureglow/hydrafacial.png";
import skinBoosterImage from "../../assets/images/beauty/pureglow/skinbooster.png";
import microneedleImage from "../../assets/images/beauty/pureglow/microneedle.png";
import underEyeImage from "../../assets/images/beauty/pureglow/undereyefiller.png";
=======
import heroImage from "../../assets/optimized/beauty/pureglow/hero.webp";
import beautyImage from "../../assets/optimized/beauty/pureglow/bearty-banner.webp";
import interiorImage from "../../assets/optimized/beauty/pureglow/interior.webp";
import createLookImage from "../../assets/optimized/beauty/pureglow/createyourlook.webp";
import lipFillerImage from "../../assets/optimized/beauty/pureglow/lipfiller.webp";
import botoxImage from "../../assets/optimized/beauty/pureglow/botox.webp";
import hydrafacialImage from "../../assets/optimized/beauty/pureglow/hydrafacial.webp";
import skinBoosterImage from "../../assets/optimized/beauty/pureglow/skinbooster.webp";
import microneedleImage from "../../assets/optimized/beauty/pureglow/microneedle.webp";
import underEyeImage from "../../assets/optimized/beauty/pureglow/undereyefiller.webp";
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0

const navItems = [
  { label: "Home", id: "home" },
  { label: "Treatments", id: "treatments" },
  { label: "About Us", id: "about-us" },
  { label: "Results", id: "results" },
  { label: "Pricing", id: "pricing" },
  { label: "Blog", id: "blog" },
  { label: "Contact", id: "contact" },
];

const services = [
  {
    icon: "✣",
    title: "Injectables",
    text: "Botox, fillers & more for natural enhancement",
  },
  {
    icon: "◉",
    title: "Skin Glow Treatments",
    text: "Hydration, brightening & rejuvenation therapies",
  },
  {
    icon: "✦",
    title: "Skin Rejuvenation",
    text: "Advanced treatments for smoother, youthful skin",
  },
  {
    icon: "⌁",
    title: "PRP Therapy",
    text: "Boost natural healing & skin regeneration",
  },
  {
    icon: "△",
    title: "Chemical Peels",
    text: "Reveal fresh, radiant & even-toned skin",
  },
];

const treatments = [
  { title: "Lip Filler", subtitle: "Define & Enhance", image: lipFillerImage },
  { title: "Botox", subtitle: "Smooth Fine Lines", image: botoxImage },
  {
    title: "HydraFacial",
    subtitle: "Deep Cleanse & Hydrate",
    image: hydrafacialImage,
  },
  {
    title: "Skin Booster",
    subtitle: "Hydrate & Revitalize",
    image: skinBoosterImage,
  },
  {
    title: "Microneedling",
    subtitle: "Renew & Rejuvenate",
    image: microneedleImage,
  },
  {
    title: "Under Eye Filler",
    subtitle: "Brighten & Refresh",
    image: underEyeImage,
  },
];

const testimonials = [
  {
    quote:
      "PureGlow truly lives up to its name! My skin has never felt better. The team is so professional and caring.",
    name: "Sarah J.",
  },
  {
    quote:
      "The best aesthetic clinic I’ve ever been to. Natural results, relaxing environment and amazing staff!",
    name: "Emily R.",
  },
  {
    quote:
      "I love how they focus on enhancing your natural beauty without making you look overdone. Highly recommend!",
    name: "Jessica M.",
  },
  {
    quote:
      "Every appointment feels thoughtful and personal. I finally found a clinic I completely trust.",
    name: "Maya L.",
  },
];

function Brand({ light = false }: { light?: boolean }) {
  return (
    <span
      className={`inline-flex flex-col leading-none ${light ? "text-white" : "text-[#174d4a]"}`}
    >
      <span className="font-serif text-[1.7rem] tracking-[-0.04em]">
        Pure<span className="text-[#ef8d86]">Glow</span>
      </span>
      <span className="mt-1 text-center text-[0.58rem] font-bold uppercase tracking-[0.32em]">
        Aesthetics
      </span>
    </span>
  );
}

function Arrow() {
  return (
    <span
      aria-hidden="true"
      className="ml-2 transition-transform group-hover:translate-x-1"
    >
      →
    </span>
  );
}

function LeafSketch({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 240"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M26 232C72 177 71 104 135 18M66 177c-23-1-40-14-47-37 24-2 43 9 47 37Zm22-42c25-3 42-18 49-42-25 1-43 15-49 42Zm18-47C89 76 84 59 91 42c18 10 24 27 15 46ZM50 196c-20-3-34-16-39-36 20 1 36 12 39 36Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export function PureGlowAesthetics() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 150;
      const visibleSections = navItems
        .map((item) => ({
          id: item.id,
          element: document.getElementById(item.id),
        }))
        .filter((item): item is { id: string; element: HTMLElement } =>
          Boolean(item.element),
        )
        .sort((a, b) => a.element.offsetTop - b.element.offsetTop);
      const passedSections = visibleSections.filter(
        ({ element }) => element.offsetTop <= marker,
      );
      const current = passedSections[passedSections.length - 1];
      setActiveSection(current?.id ?? "home");
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  const visibleTestimonials = [0, 1, 2].map(
    (offset) => testimonials[(testimonialIndex + offset) % testimonials.length],
  );

  return (
    <main className="pureglow-site overflow-x-clip bg-[#fffdfa] pt-[76px] text-[#143f3d]">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-[#efdcd2]/70 bg-white/95 shadow-[0_8px_30px_rgba(20,63,61,.06)] backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 lg:px-8">
          <a href="#home" aria-label="PureGlow home">
            <Brand />
          </a>
          <nav
            className="hidden items-center gap-8 lg:flex"
            aria-label="Primary navigation"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={`relative py-2 text-sm font-semibold transition after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:rounded-full after:bg-[#ed8d84] after:transition-transform ${activeSection === item.id ? "text-[#df756e] after:scale-x-100" : "text-[#203d3b] after:scale-x-0 hover:text-[#ed8d84]"}`}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="group hidden rounded-full bg-gradient-to-r from-[#ef9b8f] to-[#ed7e79] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#ef8d86]/20 transition hover:-translate-y-0.5 hover:shadow-xl sm:inline-flex"
          >
            Book Appointment <Arrow />
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="grid h-11 w-11 place-items-center rounded-full border border-[#eed6cb] text-xl lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            ☰
          </button>
        </div>
        {menuOpen && (
          <div className="grid border-t border-[#efdcd2] bg-white px-5 py-4 shadow-xl lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.id}
                onClick={() => setMenuOpen(false)}
                href={`#${item.id}`}
                aria-current={activeSection === item.id ? "page" : undefined}
                className={`rounded-lg border-b border-[#f5e9e3] px-3 py-3 text-base font-semibold transition ${activeSection === item.id ? "bg-[#fff1ed] text-[#df756e]" : "text-[#203d3b]"}`}
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </header>

      <section id="home" className="relative isolate bg-[#fff7f0]">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_17%_32%,rgba(255,255,255,.98),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(239,141,132,.14),transparent_25%),linear-gradient(110deg,#fffdf9_0%,#fff5ed_52%,#fce8df_100%)]" />
        <div className="absolute -left-24 top-20 -z-10 h-72 w-72 rounded-full border border-[#e9c8b5]/50" />
        <div className="relative mx-auto grid max-w-[1320px] lg:min-h-[700px] lg:grid-cols-[48%_52%]">
          <div className="z-10 flex flex-col justify-center px-6 py-16 sm:px-10 lg:px-8 lg:py-24">
            <div className="inline-flex w-fit items-center gap-2 rounded-full border border-[#ebd4c6] bg-white/75 px-4 py-2 shadow-sm backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-[#ef8d84] shadow-[0_0_0_4px_rgba(239,141,132,.14)]" />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#a96b42]">
                Minimal. Clean. Soft. Expert.
              </p>
            </div>
            <h1 className="mt-6 max-w-[650px] font-serif text-[3.65rem] leading-[0.92] tracking-[-0.05em] text-[#114745] sm:text-7xl lg:text-[5.6rem]">
              Confidence
              <br />
              Looks Beautiful
            </h1>
            <p className="-mt-1 -rotate-2 font-serif text-[2.7rem] italic leading-none text-[#ef9188] sm:text-[3.8rem]">
              When It’s You.
            </p>
            <p className="mt-7 max-w-lg text-base leading-7 text-[#405754]">
              Expert aesthetic care for subtle, natural results. Discover
              injectables, advanced skin treatments, and glow solutions designed
              around you.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group rounded-full bg-[#ef8d84] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-[#ef8d84]/25 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                Book Your Consultation <Arrow />
              </a>
              <a
                href="#treatments"
                className="group rounded-full border border-[#d9a97d] bg-white/75 px-7 py-4 text-sm font-bold shadow-sm transition hover:-translate-y-0.5 hover:bg-white"
              >
                Explore Treatments <Arrow />
              </a>
            </div>
            <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#e9d8ce] pt-5 text-sm text-[#4e6562]">
              <span>
                <b className="font-serif text-xl text-[#174d4a]">500+</b> happy
                clients
              </span>
              <span className="hidden h-7 w-px bg-[#dfcbc0] sm:block" />
              <span>
                <b className="text-[#dc8c2d]">★★★★★</b>{" "}
                <strong className="text-[#174d4a]">4.9</strong> rating
              </span>
            </div>
          </div>
          <div className="relative min-h-[560px] px-4 pb-8 sm:px-8 lg:min-h-full lg:px-0 lg:pb-0">
            <div className="absolute inset-x-4 bottom-8 top-4 overflow-hidden rounded-[9rem_2rem_2rem_2rem] bg-[#f5d8cc] shadow-[0_35px_80px_rgba(95,64,48,.16)] sm:inset-x-8 lg:inset-y-8 lg:left-6 lg:right-0 lg:rounded-[15rem_0_0_2rem]">
              <img
                src={heroImage}
                alt="Woman with radiant skin"
                className="h-full w-full object-cover object-[center_24%] transition duration-700 hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#174d4a]/15 via-transparent to-white/5" />
            </div>
            <div className="absolute right-8 top-10 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-xl backdrop-blur-md sm:right-12 lg:right-7 lg:top-16">
              <span className="block text-xs font-bold uppercase tracking-[.15em] text-[#b6774b]">
                Trusted care
              </span>
              <span className="mt-1 block text-sm font-semibold text-[#174d4a]">
                Natural. Never overdone.
              </span>
            </div>
            <div className="absolute bottom-14 left-7 grid h-28 w-28 place-items-center rounded-full border border-white/60 bg-[#2f6d67]/95 text-center text-white shadow-xl sm:left-10 lg:-left-7 lg:bottom-28">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.2em]">
                Pure care
                <br />
                <span className="font-serif text-3xl font-normal">
                  P<small>&</small>G
                </span>
                <br />
                Real results
              </span>
            </div>
            <LeafSketch className="absolute -bottom-6 right-0 h-72 text-[#668b73]" />
          </div>
        </div>
        <div className="relative mx-auto grid max-w-[1320px] grid-cols-2 gap-4 border-t border-[#f1e2da] bg-[#fffaf6] px-6 py-6 sm:grid-cols-4 lg:px-8">
          {[
            "Expert Clinicians|Certified & Experienced",
            "Natural Results|Enhance, Never Change",
            "Premium Products|Safe. Proven. Trusted",
            "Personalized Care|Just for You",
          ].map((item, index) => {
            const [title, subtitle] = item.split("|");
            return (
              <div key={title} className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-[#e7c8aa] text-[#c3824b]">
                  {["♙", "♧", "♜", "♙"][index]}
                </span>
                <span>
                  <b className="block text-xs">{title}</b>
                  <small className="text-[0.7rem] text-[#687875]">
                    {subtitle}
                  </small>
                </span>
              </div>
            );
          })}
        </div>
      </section>

      <section id="treatments" className="px-5 py-20 lg:px-8">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-wrap items-end justify-between gap-4 px-1">
            <div>
              <p className="eyebrow">Our expert services</p>
              <h2 className="section-title">
                Aesthetic Care, Tailored For You
              </h2>
            </div>
            <a
              href="#most-loved"
              className="group text-xs font-semibold text-[#365e5a]"
            >
              View All Treatments <Arrow />
            </a>
          </div>
          <div className="mt-7 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {services.map((service, index) => (
              <article
                key={service.title}
                className="group rounded-2xl border border-[#efddd4] bg-white px-5 py-7 text-center shadow-[0_12px_40px_rgba(51,75,69,.04)] transition hover:-translate-y-1 hover:shadow-xl"
              >
                <span
                  className={`mx-auto grid h-16 w-16 place-items-center rounded-full text-2xl text-white ${index % 2 ? "bg-[#719792]" : "bg-[#f2a39d]"}`}
                >
                  {service.icon}
                </span>
                <h3 className="mt-4 font-serif text-lg text-[#133f3d]">
                  {service.title}
                </h3>
                <p className="mt-2 min-h-10 text-sm leading-6 text-[#5b6967]">
                  {service.text}
                </p>
                <span className="mt-4 inline-block text-[#cb844e] transition group-hover:translate-x-1">
                  →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about-us" className="px-4 pb-16">
        <div className="mx-auto grid max-w-[1320px] overflow-hidden rounded-[1.75rem] bg-[#fffaf6] lg:grid-cols-[1fr_.96fr_.76fr]">
          <img
            src={beautyImage}
            alt="Client enjoying a soft skin treatment"
            className="h-full min-h-[420px] w-full object-cover"
          />
          <div className="flex flex-col justify-center px-8 py-12 lg:px-14">
            <p className="eyebrow">About PureGlow</p>
            <h2 className="section-title max-w-md">
              Where Science Meets Beauty & Care
            </h2>
            <p className="mt-5 text-sm leading-7 text-[#536360]">
              At PureGlow Aesthetics, we believe in enhancing your natural
              beauty with minimal, advanced, and safe aesthetic treatments. Our
              expert team is dedicated to helping you look and feel confident in
              your own skin.
            </p>
            <ul className="mt-5 space-y-2.5 text-sm text-[#38504d]">
              {[
                "Personalized treatment plans",
                "Advanced technology & techniques",
                "Comfortable & luxury environment",
                "Natural-looking, long-lasting results",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="grid h-5 w-5 place-items-center rounded-full border border-[#d58a51] text-[.6rem] text-[#d58a51]">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="group mt-7 w-fit rounded-full bg-[#ef8d84] px-6 py-3 text-xs font-bold text-white"
            >
              Learn More About Us <Arrow />
            </a>
          </div>
          <img
            src={interiorImage}
            alt="PureGlow clinic interior"
            className="h-full min-h-[420px] w-full object-cover"
          />
        </div>
      </section>

      <section id="most-loved" className="px-5 py-12 lg:px-8">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="eyebrow">Most loved treatments</p>
          <h2 className="section-title">Glow Comes In Many Forms</h2>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {treatments.map((treatment) => (
              <article
                key={treatment.title}
                className="group overflow-hidden rounded-xl border border-[#efddd4] bg-white text-left transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="aspect-[.95/1] overflow-hidden">
                  <img
                    src={treatment.image}
                    alt={treatment.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-serif text-lg">{treatment.title}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#657370]">
                    {treatment.subtitle}{" "}
                    <span className="text-[#d4864c]">→</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        className="mt-8 border-y border-[#f0e5df] bg-[#fffaf6] px-5 py-16 lg:px-8"
      >
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[.8fr_1.7fr]">
          <div>
            <p className="eyebrow">How it works</p>
            <h2 className="section-title max-w-sm">
              Your Journey To Confidence
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              ["▣", "Book", "Schedule your consultation with our experts"],
              ["♙", "Consult", "We analyze your needs and create a plan"],
              ["♧", "Treat", "Advanced treatments with expert care"],
            ].map((step, index) => (
              <div key={step[1]} className="relative flex gap-4">
                <span
                  className={`grid h-16 w-16 shrink-0 place-items-center rounded-full text-2xl text-white ${index === 1 ? "bg-[#719792]" : "bg-[#f3aa9d]"}`}
                >
                  {step[0]}
                </span>
                <span>
                  <small className="text-xs font-semibold text-[#9a6848]">
                    Step {index + 1}
                  </small>
                  <h3 className="font-serif text-xl">{step[1]}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#60706d]">
                    {step[2]}
                  </p>
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="results" className="px-5 py-20 lg:px-8">
        <div className="relative mx-auto grid max-w-[1200px] gap-6 overflow-hidden rounded-[1.75rem] bg-[#fff7ed] p-7 lg:grid-cols-[.7fr_1.8fr] lg:p-10">
          <LeafSketch className="absolute -bottom-16 -right-4 h-72 text-[#e8b574]/60" />
          <div className="relative z-10">
            <p className="eyebrow">Real results, real people</p>
            <h2 className="section-title">Loved By Our Clients</h2>
            <div className="mt-6 flex items-end gap-4">
              <span className="text-[#df8c27]">★★★★★</span>
              <span>
                <b className="block text-2xl">4.9</b>
                <small>(500+ Reviews)</small>
              </span>
            </div>
            <p className="mt-5 text-sm leading-6 text-[#66726f]">
              Join hundreds of happy clients glowing with confidence.
            </p>
          </div>
          <div className="relative z-10 grid gap-4 md:grid-cols-3">
            {visibleTestimonials.map((item) => (
              <blockquote
                key={item.name}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <span className="font-serif text-4xl leading-none text-[#f3a49e]">
                  “
                </span>
                <p className="min-h-28 text-sm leading-7 text-[#475956]">
                  {item.quote}
                </p>
                <footer className="mt-5 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#f5d5c8] font-serif">
                    {item.name[0]}
                  </span>
                  <span>
                    <b className="block text-sm">{item.name}</b>
                    <small className="text-[#dc8c2d]">★★★★★</small>
                  </span>
                </footer>
              </blockquote>
            ))}
          </div>
          <button
            type="button"
            onClick={() =>
              setTestimonialIndex(
                (testimonialIndex + testimonials.length - 1) %
                  testimonials.length,
              )
            }
            className="absolute bottom-5 left-5 grid h-10 w-10 place-items-center rounded-full border border-[#dfb579] bg-white text-[#b67b3d] lg:left-auto lg:right-[calc(75%+10px)] lg:top-1/2"
            aria-label="Previous testimonial"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() =>
              setTestimonialIndex((testimonialIndex + 1) % testimonials.length)
            }
            className="absolute bottom-5 right-5 grid h-10 w-10 place-items-center rounded-full border border-[#dfb579] bg-white text-[#b67b3d]"
            aria-label="Next testimonial"
          >
            →
          </button>
        </div>
      </section>

      <section
        id="blog"
        className="border-y border-[#f0e5df] bg-[#fffaf6] px-5 py-16 lg:px-8"
      >
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="eyebrow">The glow journal</p>
              <h2 className="section-title">Expert Notes For Better Skin</h2>
            </div>
            <a
              href="#contact"
              className="group text-sm font-semibold text-[#365e5a]"
            >
              Explore all articles <Arrow />
            </a>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              [
                "Aftercare",
                "How to care for your skin after an injectable treatment",
              ],
              [
                "Skin Health",
                "The simple routine behind a healthy, lasting glow",
              ],
              [
                "Expert Advice",
                "Choosing the right treatment for natural-looking results",
              ],
            ].map(([category, title]) => (
              <article
                key={title}
                className="rounded-2xl border border-[#ecdcd3] bg-white p-6 transition hover:-translate-y-1 hover:shadow-xl"
              >
                <p className="text-xs font-bold uppercase tracking-[.16em] text-[#c27b49]">
                  {category}
                </p>
                <h3 className="mt-3 font-serif text-2xl leading-snug text-[#143f3d]">
                  {title}
                </h3>
                <a
                  href="#contact"
                  className="group mt-5 inline-flex text-sm font-semibold text-[#52736f]"
                >
                  Read article <Arrow />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="px-5 py-12 lg:px-8">
        <div className="relative mx-auto min-h-[260px] max-w-[1240px] overflow-hidden rounded-[1.75rem] bg-[#23605c] text-white">
          <img
            src={createLookImage}
            alt="PureGlow client"
            className="absolute inset-0 h-full w-full object-cover object-center opacity-70 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#235f5b] via-[#235f5b]/80 to-[#235f5b]/55" />
          <LeafSketch className="absolute -bottom-16 right-3 h-72 text-[#d7aa59]" />
          <div className="relative z-10 flex min-h-[260px] max-w-xl flex-col justify-center p-8 sm:p-12">
            <p className="text-xs font-bold uppercase tracking-[.2em] text-[#f2c98a]">
              Ready to glow?
            </p>
            <h2 className="mt-3 font-serif text-4xl leading-none sm:text-5xl">
              Let’s Create Your Best
              <br />
              Look Yet
            </h2>
            <a
              href="mailto:hello@pureglow.example"
              className="group mt-6 w-fit rounded-full bg-[#ef8d84] px-6 py-3 text-sm font-bold"
            >
              Book Your Appointment <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#f0e4dd] bg-[#fffdfa] px-5 pb-8 pt-12 lg:px-8">
        <div className="mx-auto grid max-w-[1200px] gap-10 border-b border-[#eee1d9] pb-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_.7fr_.8fr_.8fr_1.5fr]">
          <div>
            <Brand />
            <p className="mt-4 max-w-[210px] text-sm leading-6 text-[#5e6e6b]">
              Minimal. Clean. Soft. Expert.
              <br />
              Aesthetic care that brings out the best in you.
            </p>
            <Link
              to="/beauty"
              className="mt-4 inline-block text-sm font-bold text-[#d08350]"
            >
              ← Beauty collection
            </Link>
          </div>
          {[
            [
              "Quick Links",
              [
                "Home",
                "Treatments",
                "About Us",
                "Results",
                "Pricing",
                "Contact",
              ],
            ],
            [
              "Treatments",
              [
                "Injectables",
                "Skin Treatments",
                "PRP Therapy",
                "Chemical Peels",
                "Skin Rejuvenation",
                "View All",
              ],
            ],
            [
              "Information",
              [
                "FAQs",
                "Blog",
                "Aftercare",
                "Privacy Policy",
                "Terms & Conditions",
              ],
            ],
          ].map(([title, links]) => (
            <div key={title as string}>
              <h3 className="text-sm font-bold">{title}</h3>
              <ul className="mt-4 space-y-2">
                {(links as string[]).map((link) => (
                  <li key={link}>
                    <a
                      href="#home"
                      className="text-sm text-[#5d6d69] hover:text-[#ed8d84]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h3 className="text-sm font-bold">Stay Connected</h3>
            <p className="mt-4 text-sm leading-6 text-[#5d6d69]">
              Subscribe for tips, offers & glow updates.
            </p>
            <form
              className="mt-5 flex rounded-full border border-[#eadcd4] bg-white p-1"
              onSubmit={(event) => event.preventDefault()}
            >
              <label className="sr-only" htmlFor="pureglow-email">
                Email address
              </label>
              <input
                id="pureglow-email"
                type="email"
                placeholder="Enter your email"
                className="min-w-0 flex-1 bg-transparent px-3 text-sm outline-none"
              />
              <button className="rounded-full bg-[#ed8d84] px-4 py-2 text-xs font-bold text-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <p className="mx-auto max-w-[1200px] pt-5 text-center text-xs text-[#87928f]">
          © 2026 PureGlow Aesthetics. All Rights Reserved.
        </p>
      </footer>
    </main>
  );
}
