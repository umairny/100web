import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Coffee,
  Sparkles,
  Utensils,
  MapPin,
  Clock,
  Phone,
  ArrowRight,
  ChevronRight,
  Heart,
} from "lucide-react";
import { Container, CTAButton } from "../../components";
import { imageUrl } from "../../assets/optimized";

const signatureDrinks = [
  {
    name: "Velvet Roast Latte",
    image: imageUrl("restaurent/brewnest/velvet-roast-latte.webp"),
    label: "Best Seller",
    price: "$6.50",
    description:
      "Velvety espresso layered with house milk and a slow caramel finish.",
    background: "from-[#6f4d37] via-[#8c664a] to-[#e7d7c3]",
  },
  {
    name: "Honey Cinnamon Cold Brew",
    image: imageUrl("restaurent/brewnest/honey-cinnamon.webp"),
    label: "New",
    price: "$6.25",
    description:
      "Cold steeped for eighteen hours with wildflower honey and a warm spice lift.",
    background: "from-[#b17a3a] via-[#d9a65f] to-[#f1e3c7]",
  },
  {
    name: "Signature Espresso",
    image: imageUrl("restaurent/brewnest/signature-espresso.webp"),
    label: "House Favorite",
    price: "$4.25",
    description:
      "Our daily roast pulled short for dark chocolate depth and a clean finish.",
    background: "from-[#2a1f18] via-[#4b3528] to-[#c8b39c]",
  },
  {
    name: "Almond Cloud Cappuccino",
    image: imageUrl("restaurent/brewnest/almond-cloud-cappuccino.webp"),
    label: "Seasonal",
    price: "$6.75",
    description:
      "Silky almond foam, espresso, and toasted vanilla with a light nutty sweetness.",
    background: "from-[#8e6744] via-[#c19765] to-[#f3e6d2]",
  },
];

const reasons = [
  {
    title: "Roasted With Intention",
    description:
      "Every espresso and filter batch is roasted in small runs for depth, sweetness, and consistency.",
  },
  {
    title: "Thoughtful Service",
    description:
      "Our baristas know the menu, remember regulars, and guide each guest toward the right cup.",
  },
  {
    title: "A Room To Stay",
    description:
      "Warm lighting, quiet corners, and soft textures make BrewNest feel just as good as the coffee tastes.",
  },
];

const menuColumns = [
  {
    title: "Drinks",
    items: [
      { name: "Espresso", note: "Rich and syrupy", price: "$4" },
      { name: "Americano", note: "Clean and balanced", price: "$4.75" },
      { name: "Flat White", note: "Silky microfoam", price: "$5.75" },
      { name: "Mocha", note: "Dark chocolate and espresso", price: "$6.25" },
      { name: "Matcha Latte", note: "Ceremonial grade matcha", price: "$6" },
    ],
  },
  {
    title: "Bakery",
    items: [
      { name: "Croissant", note: "Buttery laminated pastry", price: "$4.50" },
      {
        name: "Breakfast Sandwich",
        note: "Egg, cheddar, brioche",
        price: "$8.50",
      },
      { name: "Seasonal Pastry", note: "Rotating house bake", price: "$5.25" },
    ],
  },
];

const testimonials = [
  {
    name: "Nadia Brooks",
    role: "Neighborhood Regular",
    quote:
      "BrewNest feels like the kind of place you plan your morning around. The latte is perfect and the room always feels calm.",
  },
  {
    name: "Evan Morales",
    role: "Creative Director",
    quote:
      "The coffee is excellent, but the service is what keeps me coming back. It feels polished without losing warmth.",
  },
  {
    name: "Leah Carter",
    role: "Weekend Brunch Guest",
    quote:
      "The cold brew and pastry case make BrewNest feel like a real local favorite. Everything tastes thoughtful.",
  },
];

interface NavItem {
  label: string;
  href: string;
  desc: string;
  icon: typeof Coffee;
}

const navItems: NavItem[] = [
  { label: "About", href: "#about", desc: "Our heritage & roasting craft", icon: Sparkles },
  { label: "Coffee", href: "#coffee", desc: "Signature roasts & cold steep", icon: Coffee },
  { label: "The Craft", href: "#why", desc: "Why our pours taste different", icon: Heart },
  { label: "Menu", href: "#menu", desc: "Espresso, lattes & baked goods", icon: Utensils },
  { label: "Visit & Hours", href: "#visit", desc: "Old Town Market & slow bar", icon: MapPin },
];

function BrewNestNav() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("#about");

  // Scroll detection for elevated glass effect and scroll spy
  useEffect(() => {
    const sectionList = [
      { id: "about", hash: "#about" },
      { id: "coffee", hash: "#coffee" },
      { id: "why", hash: "#why" },
      { id: "menu", hash: "#menu" },
      { id: "testimonials", hash: "#why" },
      { id: "visit", hash: "#visit" },
    ];

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // 1. If reached the bottom of page, activate visit
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 70
      ) {
        setActiveHash("#visit");
        return;
      }

      // 2. If above the about section (in hero), no section active
      const firstSection = document.getElementById("about");
      const marker = Math.min(240, Math.max(120, window.innerHeight * 0.28));

      if (firstSection) {
        const firstRect = firstSection.getBoundingClientRect();
        if (firstRect.top > marker) {
          setActiveHash("");
          return;
        }
      }

      // 3. Find active section: the last section whose top has reached or passed the marker
      let current = "";
      for (const section of sectionList) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= marker) {
            current = section.hash;
          }
        }
      }

      if (current) {
        setActiveHash(current);
      }
    };

    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveHash(window.location.hash);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    window.addEventListener("hashchange", handleHashChange);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#fbf6ef]/96 backdrop-blur-xl border-b border-[#d7c7b3] shadow-[0_8px_30px_rgba(45,33,26,0.08)] py-2.5 sm:py-3"
          : "bg-[#fbf6ef]/92 backdrop-blur-md border-b border-[#d7c7b3]/60 py-3 sm:py-4"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
            setIsMobileMenuOpen(false);
          }}
          className="group flex items-center gap-2.5 sm:gap-3 select-none"
        >
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#caa56f] via-[#b88755] to-[#6c4a34] text-white shadow-md shadow-[#2d211a]/20 ring-1 ring-white/40 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-1">
            <Coffee className="h-5 w-5" />
            <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#d9b274] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#caa56f]"></span>
            </span>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-serif text-lg sm:text-xl font-black tracking-tight text-[#2d211a] leading-none">
                BrewNest<span className="text-[#caa56f]">.</span>
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-emerald-600/30 bg-emerald-500/10 px-2 py-0.5 text-[9.5px] font-bold text-emerald-800">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span>
                <span>Open</span>
              </span>
            </div>
            <span className="mt-0.5 text-[8.5px] sm:text-[9px] font-black uppercase tracking-[0.2em] text-[#8d6748]">
              Artisan Roasters &amp; Slow Bar
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation Pills */}
        <nav
          aria-label="BrewNest Main Navigation"
          className="hidden md:flex items-center gap-1 rounded-full border border-[#d7c7b3]/70 bg-white/60 p-1 backdrop-blur-md shadow-2xs"
        >
          {navItems.map((item) => {
            const isActive = activeHash === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                onClick={() => setActiveHash(item.href)}
                className={`relative rounded-full px-3.5 py-1.5 text-xs font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-[#2d211a] text-white shadow-xs font-black"
                    : "text-[#5a4638] hover:bg-[#6c4a34]/10 hover:text-[#6c4a34]"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Desktop CTA & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Hours Pill (Large screens) */}
          <div className="hidden lg:flex items-center gap-2 text-xs font-semibold text-[#6c4a34] bg-white/70 border border-[#d7c7b3]/80 rounded-full px-3 py-1.5">
            <Clock className="h-3.5 w-3.5 text-[#b88755]" />
            <span>6:30 AM – 7 PM</span>
          </div>

          {/* Primary CTA (Desktop & Tablet) */}
          <a
            href="#visit"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-[#2d211a] px-4 py-2 text-xs font-black uppercase tracking-wider text-white shadow-md shadow-[#2d211a]/15 transition-all duration-300 hover:bg-[#6c4a34] hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Visit Cafe</span>
            <ArrowRight className="h-3.5 w-3.5 text-[#d9b274]" />
          </a>

          {/* Mobile Visit Icon Button */}
          <a
            href="#visit"
            aria-label="Visit Cafe Location"
            className="sm:hidden flex h-10 w-10 items-center justify-center rounded-xl border border-[#d7c7b3] bg-white/80 text-[#6c4a34] shadow-xs active:scale-95 transition"
          >
            <MapPin className="h-4 w-4" />
          </a>

          {/* Mobile Menu Hamburger Button */}
          <button
            type="button"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d7c7b3] bg-white/80 text-[#2d211a] transition hover:bg-white hover:border-[#6c4a34] md:hidden shadow-xs active:scale-95"
          >
            <span className="sr-only">Toggle navigation menu</span>
            <div className="relative h-4 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-5 rounded-full bg-[#2d211a] transition-all duration-300 ${
                  isMobileMenuOpen ? "top-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 block h-0.5 w-5 rounded-full bg-[#2d211a] transition-all duration-200 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-3 block h-0.5 w-5 rounded-full bg-[#2d211a] transition-all duration-300 ${
                  isMobileMenuOpen ? "top-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop Dimmer */}
          <div
            className="fixed inset-0 top-[58px] sm:top-[66px] z-40 bg-black/40 backdrop-blur-xs md:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-down Sheet */}
          <div
            className="relative z-50 border-b border-[#d7c7b3] bg-[#fbf6ef]/98 px-4 pt-3 pb-6 shadow-2xl backdrop-blur-2xl md:hidden max-h-[calc(100dvh-4.5rem)] overflow-y-auto"
          >
            {/* Quick Status Bar */}
            <div className="mb-3 flex items-center justify-between rounded-xl bg-white/80 border border-[#e5d9ca] px-3.5 py-2 text-xs">
              <span className="flex items-center gap-2 font-bold text-[#6c4a34]">
                <span className="h-2 w-2 rounded-full bg-emerald-600 animate-pulse" />
                Slow Bar Serving Now
              </span>
              <span className="text-[11px] font-medium text-[#8d6748]">
                Old Town Market
              </span>
            </div>

            {/* Navigation Cards */}
            <nav className="space-y-1.5" aria-label="Mobile Navigation">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                const isActive = activeHash === item.href;
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setActiveHash(item.href);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`flex items-center justify-between rounded-xl p-2.5 transition-all ${
                      isActive
                        ? "bg-[#2d211a] text-white shadow-sm"
                        : "bg-white/70 text-[#2d211a] hover:bg-white active:bg-[#f0e3d2]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                          isActive
                            ? "bg-white/15 text-[#d9b274]"
                            : "bg-[#f0e3d2] text-[#6c4a34]"
                        }`}
                      >
                        <IconComponent className="h-4.5 w-4.5" />
                      </div>
                      <div>
                        <div className="text-sm font-black leading-tight">
                          {item.label}
                        </div>
                        <div
                          className={`text-[11px] ${
                            isActive ? "text-white/70" : "text-[#7a6657]"
                          }`}
                        >
                          {item.desc}
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`h-4 w-4 shrink-0 ${
                        isActive ? "text-[#d9b274]" : "text-[#b88755]"
                      }`}
                    />
                  </a>
                );
              })}
            </nav>

            {/* Cafe Details Card */}
            <div className="mt-4 rounded-2xl border border-[#d7c7b3] bg-white/90 p-4 shadow-sm">
              <div className="grid grid-cols-2 gap-3 text-xs text-[#5f4a3d] border-b border-[#ebdcd0] pb-3 mb-3">
                <div className="flex items-start gap-2">
                  <Clock className="h-3.5 w-3.5 text-[#b88755] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2d211a] block">Hours</span>
                    <span>Daily 6:30am–7pm</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="h-3.5 w-3.5 text-[#b88755] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-[#2d211a] block">Location</span>
                    <span>Old Town Market</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <a
                  href="#visit"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2d211a] py-3 text-center text-xs font-black uppercase tracking-wider text-white shadow-md hover:bg-[#6c4a34] transition active:scale-[0.99]"
                >
                  <Coffee className="h-4 w-4 text-[#d9b274]" />
                  <span>Plan Your Visit</span>
                </a>
                <a
                  href="tel:555-123-4567"
                  className="flex items-center justify-center gap-2 rounded-xl border border-[#d7c7b3] bg-white py-2.5 text-xs font-bold text-[#6c4a34] hover:bg-[#f6efe5] transition"
                >
                  <Phone className="h-3.5 w-3.5 text-[#b88755]" />
                  <span>Call: (555) 123-4567</span>
                </a>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export function BrewNestCoffee() {
  return (
    <main className="brand-motion motion-brewnest bg-[#f6efe5] text-[#251c16]">
      <BrewNestNav />

      <section className="relative isolate overflow-hidden border-b border-[#4c382b] bg-[#241a14] pt-20 text-[#f8f1e8] md:pt-24">
        <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_24%,rgba(192,145,94,0.18),transparent_28%),linear-gradient(115deg,#241a14_0%,#2d211a_52%,#17100c_100%)]" />
        <div className="absolute inset-0 -z-10 opacity-[0.045] [background-image:linear-gradient(90deg,#fff_1px,transparent_1px),linear-gradient(#fff_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute -left-32 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#b88755]/10 blur-[100px]" />

        <Container className="relative pb-14 pt-10 sm:pb-20 md:pt-14 lg:pb-24">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 text-[0.61rem] font-bold uppercase tracking-[0.18em] text-white/48">
            <span className="flex items-center gap-2 text-[#d9b274]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#d9b274] shadow-[0_0_10px_#d9b274]" />
              Slow bar open now
            </span>
            <span>Old Town Market · 6:30 AM–7 PM</span>
          </div>

          <div className="grid items-center gap-12 lg:grid-cols-[0.94fr_1.06fr] lg:gap-16">
            <div className="relative z-10">
              <p className="flex items-center gap-3 text-[0.68rem] font-black uppercase tracking-[0.22em] text-[#d9b274]">
                <span className="h-px w-9 bg-[#d9b274]" />
                Roasted slowly · poured with care
              </p>
              <h1 className="mt-7 max-w-3xl text-[clamp(3.6rem,7vw,7.1rem)] font-black leading-[0.86] tracking-[-0.06em]">
                Coffee worth
                <br />
                <span className="font-serif font-normal italic text-[#d9b274]">
                  slowing down for.
                </span>
              </h1>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/58 sm:text-lg">
                Hand-pulled espresso, small-batch roasts, and warm pastry
                shelves in a room designed to make mornings feel unhurried.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <CTAButton
                  href="#menu"
                  size="lg"
                  className="rounded-full bg-[#d4ad78] text-[#241a14] shadow-xl shadow-black/15 hover:bg-[#edd0a8]"
                >
                  Explore Today's Menu
                </CTAButton>
                <CTAButton
                  href="#visit"
                  variant="outline"
                  size="lg"
                  className="rounded-full border-white/30 text-white hover:border-white/55 hover:bg-white/8"
                >
                  Plan a Visit
                </CTAButton>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 border-y border-white/10 py-5">
                {[
                  { value: "18 hr", label: "Cold steep" },
                  { value: "Local", label: "Roast partner" },
                  { value: "12+", label: "House pours" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="border-r border-white/10 px-3 first:pl-0 last:border-0 sm:px-5"
                  >
                    <p className="text-xl font-black text-[#f8f1e8] sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[0.5rem] font-black uppercase tracking-[0.15em] text-white/38 sm:text-[0.58rem]">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl pb-8 sm:pb-12">
              <div className="absolute -right-5 -top-5 h-48 w-48 rounded-full border border-[#d9b274]/20 sm:-right-10 sm:-top-10 sm:h-72 sm:w-72" />
              <div className="absolute -right-1 top-7 h-28 w-28 rounded-full border border-[#d9b274]/10 sm:h-44 sm:w-44" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#3a2a20] shadow-[0_35px_90px_rgba(0,0,0,0.42)] sm:rounded-[2.8rem]">
                <img
                  src={signatureDrinks[0].image}
                  alt="Velvet Roast latte at BrewNest Coffee"
                  className="aspect-[4/5] max-h-[650px] w-full object-cover object-center sm:aspect-[5/4] lg:aspect-[4/5]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_48%,rgba(26,17,12,0.7)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between gap-5 p-6 sm:p-8">
                  <div>
                    <p className="text-[0.56rem] font-black uppercase tracking-[0.2em] text-[#e4bd86]">
                      House signature
                    </p>
                    <p className="mt-2 text-2xl font-black sm:text-3xl">
                      Velvet Roast Latte
                    </p>
                    <p className="mt-1 text-xs text-white/55">
                      Caramel · cocoa · silky finish
                    </p>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#f8f1e8] text-sm font-black text-[#241a14]">
                    $6.50
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-1 left-4 rounded-2xl border border-[#dfc69f]/30 bg-[#f8f1e8] p-4 text-[#2d211a] shadow-2xl sm:-left-7 sm:bottom-2 sm:p-5">
                <p className="text-[0.52rem] font-black uppercase tracking-[0.18em] text-[#8d6748]">
                  Barista note
                </p>
                <p className="mt-2 max-w-[12rem] text-sm font-bold leading-5">
                  Best enjoyed here, without checking the clock.
                </p>
              </div>
              <div className="absolute right-4 top-4 rounded-full border border-white/15 bg-[#241a14]/75 px-4 py-2 text-[0.54rem] font-black uppercase tracking-[0.16em] text-[#e4bd86] backdrop-blur sm:right-6 sm:top-6">
                Guest favorite
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="rounded-[2rem] border border-[#e2d4c3] bg-white/80 p-8 shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#8d6748]">
                About BrewNest
              </p>
              <p className="mt-8 text-5xl font-black text-[#2d211a]">
                Since 2018
              </p>
              <p className="mt-4 text-lg leading-8 text-[#5f4a3d]">
                We built BrewNest to feel like the best part of a good morning:
                steady, welcoming, and full of care.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-black leading-tight text-[#2d211a] md:text-5xl">
                A coffee house shaped by craft, comfort, and familiar faces.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#5f4a3d]">
                BrewNest works closely with local roasting partners, seasonal
                bakers, and a bar team that values consistency as much as
                hospitality. The result is a premium cafe experience that still
                feels deeply neighborhood.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#f0e3d2] p-5">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8d6748]">
                    Fresh every morning
                  </p>
                  <p className="mt-2 text-[#5f4a3d]">
                    Espresso dialed in daily, pastries delivered warm, and beans
                    resting at their ideal window.
                  </p>
                </div>
                <div className="rounded-2xl bg-[#f9f2e8] p-5">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#8d6748]">
                    Made to linger
                  </p>
                  <p className="mt-2 text-[#5f4a3d]">
                    Quiet corners, generous seating, and a pace that gives your
                    morning room to unfold.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section
        id="coffee"
        className="border-y border-[#e2d4c3] bg-[#fbf6ef] py-20 md:py-28"
      >
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8d6748]">
                Featured Coffee
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#2d211a] md:text-5xl">
                Our signature pours, built to feel memorable.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#5f4a3d]">
              A tighter, more thoughtful menu of drinks that regulars come back
              for and new guests ask about by name.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {signatureDrinks.map((drink) => (
              <article
                key={drink.name}
                className="group rounded-[2rem] border border-[#e2d4c3] bg-white/85 p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className={`relative h-48 overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${drink.background}`}
                >
                  <img
                    src={drink.image}
                    alt={`${drink.name} coffee drink`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2d211a]/50 via-transparent to-transparent" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#6c4a34] shadow-sm">
                    {drink.label}
                  </div>
                  <div className="absolute bottom-5 right-5 grid gap-2">
                    {Array.from({ length: 4 }).map((_, index) => (
                      <span
                        key={index}
                        className="h-3 w-5 rounded-full border border-white/50 bg-white/20"
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black text-[#2d211a]">
                    {drink.name}
                  </h3>
                  <span className="rounded-full bg-[#2d211a] px-3 py-1 text-sm font-black text-white">
                    {drink.price}
                  </span>
                </div>
                <p className="mt-3 leading-7 text-[#5f4a3d]">
                  {drink.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="why" className="py-20 md:py-28">
        <Container>
          <div className="mb-14 text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8d6748]">
              Why Choose BrewNest
            </p>
            <h2 className="mt-3 text-4xl font-black text-[#2d211a] md:text-5xl">
              A cafe experience that feels quietly elevated.
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {reasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-[2rem] border border-[#e2d4c3] bg-white/80 p-8 shadow-sm"
              >
                <div className="mb-6 h-2 w-20 rounded-full bg-[#caa56f]" />
                <h3 className="text-2xl font-black text-[#2d211a]">
                  {reason.title}
                </h3>
                <p className="mt-4 leading-7 text-[#5f4a3d]">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="menu"
        className="border-y border-[#e2d4c3] bg-white py-20 md:py-28"
      >
        <Container>
          <div className="mb-14 text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8d6748]">
              Menu Preview
            </p>
            <h2 className="mt-3 text-4xl font-black text-[#2d211a] md:text-5xl">
              A daily menu that feels refined, not overworked.
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-[#5f4a3d]">
              Coffee first, bakery always, and just enough savory breakfast to
              make BrewNest an everyday stop.
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-2">
            {menuColumns.map((column) => (
              <article
                key={column.title}
                className="rounded-[2rem] border border-[#e2d4c3] bg-[#fbf6ef] p-8 shadow-sm"
              >
                <h3 className="text-3xl font-black text-[#6c4a34]">
                  {column.title}
                </h3>
                <div className="mt-8 space-y-5">
                  {column.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-start justify-between gap-4 border-b border-[#eadfd1] pb-4 last:border-b-0 last:pb-0"
                    >
                      <div>
                        <p className="font-black text-[#2d211a]">{item.name}</p>
                        <p className="mt-1 text-sm text-[#7a6657]">
                          {item.note}
                        </p>
                      </div>
                      <span className="font-black text-[#8d6748]">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="testimonials" className="py-20 md:py-28">
        <Container>
          <div className="mb-14 text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#8d6748]">
              Testimonials
            </p>
            <h2 className="mt-3 text-4xl font-black text-[#2d211a] md:text-5xl">
              What guests say after the first cup.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="rounded-[2rem] border border-[#e2d4c3] bg-white/85 p-8 shadow-sm"
              >
                <div className="mb-5 flex gap-1 text-[#caa56f]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>*</span>
                  ))}
                </div>
                <p className="text-lg leading-8 text-[#4f3d30]">
                  "{testimonial.quote}"
                </p>
                <footer className="mt-6">
                  <p className="font-black text-[#2d211a]">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-[#7a6657]">{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section
        id="visit"
        className="relative overflow-hidden bg-[#2d211a] py-20 text-white md:py-28"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_24%,rgba(202,165,111,0.18),transparent_24%),radial-gradient(circle_at_82%_20%,rgba(255,255,255,0.06),transparent_22%)]" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#d9b274]">
                Visit BrewNest
              </p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Find your corner table, order your favorite cup, and stay a
                little longer.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/78">
                We are open early, roast for freshness, and keep the room warm
                from the first pour to the last pastry run.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton
                  href="tel:555-123-4567"
                  size="lg"
                  className="bg-white text-[#2d211a] hover:bg-[#f6efe5]"
                >
                  Call the Cafe
                </CTAButton>
                <CTAButton
                  href="#menu"
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  Explore Menu
                </CTAButton>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9b274]">
                  Hours
                </p>
                <div className="mt-5 space-y-3 text-sm text-white/82">
                  <div className="flex justify-between gap-4">
                    <span>Mon - Fri</span>
                    <span className="font-bold">6:30 AM - 7 PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Sat - Sun</span>
                    <span className="font-bold">7 AM - 8 PM</span>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/10 bg-white/8 p-6 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9b274]">
                  Find Us
                </p>
                <div className="mt-5 space-y-3 text-sm text-white/82">
                  <p>123 Coffee Street</p>
                  <p>Old Town Market District</p>
                  <p>(555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <footer className="border-t border-[#3b2d24] bg-[#211813] py-12 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-2xl font-black text-[#f6efe5]">
                BrewNest Coffee
              </p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/70">
                Handcrafted coffee, warm mornings, and a local cafe rhythm that
                keeps guests coming back.
              </p>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9b274]">
                Hours
              </p>
              <div className="mt-4 space-y-2 text-sm text-white/72">
                <p>Mon - Fri: 6:30 AM - 7 PM</p>
                <p>Sat - Sun: 7 AM - 8 PM</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#d9b274]">
                Location & Social
              </p>
              <div className="mt-4 space-y-2 text-sm text-white/72">
                <p>123 Coffee Street, Old Town</p>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>TikTok</p>
              </div>
            </div>
          </div>
        </Container>
      </footer>

      <section className="border-t border-[#d7c7b3] bg-[#fbf6ef] py-10">
        <Container className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link
            to="/restaurant"
            className="font-bold text-[#6c4a34] hover:text-[#2d211a]"
          >
            Back to Restaurant Collection
          </Link>
          <Link
            to="/"
            className="font-bold text-[#7a6657] hover:text-[#2d211a]"
          >
            Back to 100 Designs Portfolio
          </Link>
        </Container>
      </section>
    </main>
  );
}
