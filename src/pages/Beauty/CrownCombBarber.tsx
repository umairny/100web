import { useEffect, useState, type MouseEvent } from "react";
import { Link } from "react-router-dom";
import {
  Award,
  Calendar,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Crown,
  Flame,
  MapPin,
  Phone,
  Scissors,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Star,
  Users,
  Wine,
} from "lucide-react";
import barberHero from "../../assets/optimized/beauty/crown-comb-barber/hero.webp";
import { imageUrl } from "../../assets/optimized";
import { Container } from "../../components";

const barberImages = {
  story: imageUrl("beauty/crown-comb-barber/our-story.webp"),
  chairs: imageUrl("beauty/crown-comb-barber/Barber-chairs.webp"),
  haircut: imageUrl("beauty/crown-comb-barber/Precision-haircut.webp"),
  tools: imageUrl("beauty/crown-comb-barber/Grooming-tools.webp"),
  interior: imageUrl("beauty/crown-comb-barber/Studio-interior.webp"),
  beardTrim: imageUrl("beauty/crown-comb-barber/Beard-trim.webp"),
  products: imageUrl("beauty/crown-comb-barber/Premium-products.webp"),
};

interface ServiceItem {
  id: string;
  title: string;
  price: string;
  duration: string;
  badge?: string;
  description: string;
  highlights: string[];
}

const servicesList: ServiceItem[] = [
  {
    id: "haircut",
    title: "The Signature Haircut",
    price: "$45",
    duration: "45 Mins",
    badge: "Most Requested",
    description: "Tailored scissor and clipper craftsmanship matched to your head shape, hair texture, and personal style.",
    highlights: ["Consultation & custom taper", "Eucalyptus hot towel finish", "Straight razor neck cleanup", "Premium matte styling finish"],
  },
  {
    id: "beard",
    title: "Beard Sculpt & Line-Up",
    price: "$35",
    duration: "30 Mins",
    badge: "Precision Craft",
    description: "Master level beard reshaping, symmetrical free-hand tapering, sharp razor line-up, and nourishing beard oil.",
    highlights: ["Detailed length & bulk shaping", "Crisp cheek & neckline razor line", "Warm botanical towel wrap", "Deep cedarwood conditioning balm"],
  },
  {
    id: "shave",
    title: "Traditional Straight Razor Shave",
    price: "$50",
    duration: "40 Mins",
    badge: "Old-World Ritual",
    description: "The classic barbershop ritual. Triple hot towels, whipped lather, hand-honed blade, and cooling aftershave splash.",
    highlights: ["Pre-shave essential oil prep", "Multi-layer hot lather steam", "Single-stroke straight razor glide", "Cold towel alum block close"],
  },
  {
    id: "royal",
    title: "The Royal Crown Package",
    price: "$95",
    duration: "75 Mins",
    badge: "Full Experience",
    description: "The ultimate gentlemen's treatment. Full signature cut, complete beard sculpt, hot lather shave, and head massage.",
    highlights: ["Signature haircut + styling", "Full beard sculpt or straight razor shave", "Invigorating scalp & neck massage", "Complimentary top-shelf bourbon or espresso"],
  },
];

const barbersList = [
  { name: "Marcus Vance", role: "Master Barber & Founder", exp: "14 Yrs Experience", specialty: "Classic Scissor Cuts & Fades" },
  { name: "Julian Reed", role: "Senior Stylist", exp: "9 Yrs Experience", specialty: "Skin Fades & Textured Crops" },
  { name: "Leo Sterling", role: "Master Shave Artisan", exp: "11 Yrs Experience", specialty: "Traditional Straight Razor Shaves" },
  { name: "First Available Master Barber", role: "Express Chair Booking", exp: "Fastest Availability", specialty: "All Signature Services" },
];

const galleryItems = [
  { title: "Precision Fade & Style", image: barberImages.haircut, category: "Haircut", alt: "Precision haircut service at Crown and Comb Barber" },
  { title: "Beard Sculpt & Razor Finish", image: barberImages.beardTrim, category: "Beard", alt: "Detailed beard trim and line up service" },
  { title: "Hand-Honed Grooming Tools", image: barberImages.tools, category: "Craft", alt: "Premium barber grooming tools laid out for service" },
  { title: "Vintage Leather Barber Chairs", image: barberImages.chairs, category: "Interior", alt: "Classic Crown and Comb barber chairs in the shop" },
  { title: "Warm Speakeasy Parlour Interior", image: barberImages.interior, category: "Parlour", alt: "Warm Crown and Comb Barber studio interior" },
  { title: "Artisanal Grooming Apothecary", image: barberImages.products, category: "Products", alt: "Premium grooming products for barber clients" },
];

const shopItems = [
  {
    id: "clay",
    title: "Matte Finish Texture Clay",
    price: "$26",
    rating: "4.9",
    reviews: "142",
    image: barberImages.products,
    desc: "High hold, natural zero-shine texture infused with cedarwood, bergamot, and bentonite clay.",
  },
  {
    id: "oil",
    title: "Conditioning Beard Elixir",
    price: "$28",
    rating: "5.0",
    reviews: "98",
    image: barberImages.beardTrim,
    desc: "Cold-pressed organic argan, jojoba, and sandalwood oil that eliminates itch and softens coarse whiskers.",
  },
  {
    id: "comb",
    title: "Handcrafted Pocket Comb",
    price: "$18",
    rating: "4.8",
    reviews: "210",
    image: barberImages.tools,
    desc: "Anti-static vintage tortoise acetate comb with hand-beveled rounded teeth for seamless pocket glide.",
  },
  {
    id: "tonic",
    title: "Restorative Aftershave Tonic",
    price: "$24",
    rating: "4.9",
    reviews: "87",
    image: barberImages.interior,
    desc: "Cooling witch hazel, organic aloe vera, and invigorating menthol splash to close pores and refresh.",
  },
];

const testimonials = [
  {
    quote: "The best haircut in Brooklyn, hands down. Marcus took his time, dialed in the cleanest taper I've ever had, and the bourbon while waiting was top shelf.",
    author: "David K.",
    neighborhood: "Brooklyn Heights",
    service: "The Signature Haircut",
    stars: 5,
  },
  {
    quote: "The straight razor shave is an absolute ritual here. Steaming hot towels, whipped lather, and a completely irritation-free finish. You walk out feeling like a new man.",
    author: "Thomas R.",
    neighborhood: "DUMBO",
    service: "Traditional Straight Razor Shave",
    stars: 5,
  },
  {
    quote: "Clean, professional, and timeless. Crown & Comb is the only shop I trust with my beard and hair. The vibe is relaxed yet supremely detail-oriented.",
    author: "Marcus B.",
    neighborhood: "Williamsburg",
    service: "The Royal Crown Package",
    stars: 5,
  },
];

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Book Online", id: "book-online" },
  { label: "Our Story", id: "about" },
  { label: "Gallery", id: "gallery" },
  { label: "Shop", id: "shop" },
  { label: "Contact", id: "contact" },
];

const bottomNavItems = [
  { label: "Home", id: "home", icon: Crown },
  { label: "Services", id: "services", icon: Scissors },
  { label: "Book Chair", id: "book-online", icon: Calendar, highlight: true },
  { label: "Shop", id: "shop", icon: ShoppingBag },
  { label: "Contact", id: "contact", icon: MapPin },
];

function scrollToSectionId(id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  const headerOffset = 76;
  const top = target.getBoundingClientRect().top + window.scrollY - headerOffset;
  window.scrollTo({
    top: Math.max(0, top),
    behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
  });
  window.history.replaceState(null, "", `#${id}`);
}

export function CrownCombBarber() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [addedItem, setAddedItem] = useState<string | null>(null);

  // Booking Form State
  const [bookingService, setBookingService] = useState("The Signature Haircut ($45)");
  const [bookingBarber, setBookingBarber] = useState("Marcus Vance (Master Barber)");
  const [bookingDate, setBookingDate] = useState("Tomorrow");
  const [bookingTime, setBookingTime] = useState("11:30 AM");
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Scroll Spy Implementation
  useEffect(() => {
    let frame = 0;
    const updateActiveSection = () => {
      const scrollY = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;

      // Bottom of page guard
      if (scrollable > 0 && scrollY >= scrollable - 70) {
        setActiveSection("contact");
        setScrolled(true);
        return;
      }

      // Top of page guard
      if (scrollY < 80) {
        setActiveSection("home");
        setScrolled(false);
        return;
      }

      const marker = Math.min(240, Math.max(120, window.innerHeight * 0.32));
      let current = "home";
      const sections = ["home", "services", "book-online", "about", "gallery", "shop", "contact"];

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= marker) {
            current = id;
          }
        }
      }

      setActiveSection(current);
      setScrolled(scrollY > 15);
    };

    const requestUpdate = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  // Escape key closes mobile menu
  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNavClick = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    setMenuOpen(false);
    setActiveSection(id);
    scrollToSectionId(id);
  };

  const handleAddToCart = (title: string) => {
    setAddedItem(title);
    setTimeout(() => {
      setAddedItem((curr) => (curr === title ? null : curr));
    }, 2600);
  };

  const handleSelectServiceAndBook = (serviceName: string, price: string) => {
    setBookingService(`${serviceName} (${price})`);
    scrollToSectionId("book-online");
  };

  const handleBookingSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setBookingConfirmed(true);
  };

  return (
    <main className="min-h-screen w-full max-w-full overflow-x-hidden bg-[#080907] text-[#efe7da] font-sans pb-24 lg:pb-0 selection:bg-[#c8934b] selection:text-black">
      {/* Toast Notification */}
      {addedItem && (
        <aside
          role="status"
          aria-live="polite"
          className="fixed top-20 right-4 z-50 flex items-center gap-3 rounded-xl border border-[#c8934b] bg-[#121410] px-4 py-3 text-xs font-bold text-white shadow-[0_10px_35px_rgba(0,0,0,0.8)] backdrop-blur-md transition-all duration-300 animate-in fade-in slide-in-from-top-3"
        >
          <span className="grid h-6 w-6 place-items-center rounded-full bg-[#c8934b] text-[#080907]">
            <Check className="h-3.5 w-3.5 stroke-[3]" />
          </span>
          <div>
            <p className="font-semibold text-white">Grooming Bag Updated</p>
            <p className="text-[11px] text-[#c8934b]">Added {addedItem}</p>
          </div>
        </aside>
      )}

      {/* Top Fixed Header */}
      <header
        className={`fixed inset-x-0 top-0 z-50 w-full max-w-full border-b transition-all duration-300 ${
          scrolled || menuOpen
            ? "border-[#382d1c] bg-[#070806]/96 shadow-[0_12px_40px_rgba(0,0,0,0.85)] backdrop-blur-xl"
            : "border-transparent bg-gradient-to-b from-black/85 via-black/45 to-transparent"
        }`}
      >
        <div className="mx-auto flex h-[74px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Brand Mark */}
          <Link
            to="/beauty/crown-comb-barber"
            onClick={(event) => handleNavClick(event, "home")}
            className="flex items-center gap-3 group transition-opacity hover:opacity-90"
            aria-label="Crown & Comb Barber Home"
          >
            <span className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-lg border border-[#6f5230] bg-[#14120e] text-2xl text-[#c8934b] shadow-[0_0_15px_rgba(200,147,75,0.2)] transition duration-300 group-hover:border-[#c8934b] group-hover:shadow-[0_0_25px_rgba(200,147,75,0.4)]">
              ♛
            </span>
            <div className="leading-tight">
              <span className="block font-serif text-lg sm:text-xl font-bold tracking-wider text-white">
                Crown & Comb
              </span>
              <span className="block text-[0.62rem] font-bold uppercase tracking-[0.32em] text-[#c8934b]">
                Barber · Brooklyn
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary desktop navigation"
            className="hidden items-center gap-7 lg:flex"
          >
            {navLinks.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(event) => handleNavClick(event, item.id)}
                  aria-current={isActive ? "page" : undefined}
                  className={`relative py-2.5 text-xs font-bold uppercase tracking-[0.14em] transition duration-200 after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:bg-[#c8934b] after:transition-transform ${
                    isActive
                      ? "active text-[#c8934b] font-black after:scale-x-100"
                      : "text-white/80 after:scale-x-0 hover:text-[#c8934b] hover:after:scale-x-100"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop-Only Book Appointment CTA Container (Isolated from mobile viewports) */}
          <div className="hidden lg:block">
            <a
              href="#book-online"
              onClick={(event) => handleNavClick(event, "book-online")}
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#dfad67]/80 bg-gradient-to-r from-[#b37f37] via-[#c8934b] to-[#b37f37] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.12em] text-[#080907] shadow-[0_4px_20px_rgba(200,147,75,0.35)] transition-all duration-300 hover:shadow-[0_4px_25px_rgba(200,147,75,0.6)] hover:-translate-y-0.5 active:scale-95"
            >
              <Calendar className="h-4 w-4" />
              <span>Book Chair</span>
            </a>
          </div>

          {/* Mobile Top Controls: Live Status & Animated Hamburger Toggle */}
          <div className="flex items-center gap-2.5 lg:hidden">
            {/* Live Status Pill */}
            <div className="hidden sm:flex items-center gap-1.5 rounded-full border border-[#c8934b]/30 bg-[#15130f]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#dfad67]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#c8934b] animate-ping" />
              <span>Walk-Ins Welcome</span>
            </div>

            {/* Hamburger Button */}
            <button
              type="button"
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              aria-controls="crow-mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
              className="grid h-11 w-11 place-items-center rounded-lg border border-[#523e24] bg-[#12110e]/90 text-[#c8934b] transition active:scale-95 hover:border-[#c8934b] shadow-[0_0_12px_rgba(200,147,75,0.15)]"
            >
              <span className="flex flex-col gap-1.5">
                <i
                  className={`h-0.5 w-5 bg-current transition-transform duration-300 ${
                    menuOpen ? "translate-y-2 rotate-45" : ""
                  }`}
                />
                <i
                  className={`h-0.5 w-5 bg-current transition-opacity duration-300 ${
                    menuOpen ? "opacity-0" : ""
                  }`}
                />
                <i
                  className={`h-0.5 w-5 bg-current transition-transform duration-300 ${
                    menuOpen ? "-translate-y-2 -rotate-45" : ""
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Overlay */}
        {menuOpen && (
          <>
            {/* Backdrop Dimmer */}
            <div
              className="fixed inset-0 top-[74px] z-40 bg-black/75 backdrop-blur-xs lg:hidden"
              onClick={() => setMenuOpen(false)}
              aria-hidden="true"
            />
            {/* Slide-Down Drawer */}
            <nav
              id="crow-mobile-menu"
              aria-label="Mobile menu navigation"
              className="fixed inset-x-0 top-[74px] z-50 w-full max-w-full max-h-[calc(100dvh-74px)] overflow-y-auto overflow-x-hidden border-b border-[#c8934b]/35 bg-[#0a0c08]/98 p-5 shadow-2xl backdrop-blur-2xl lg:hidden"
            >
              {/* Parlour Status Banner */}
              <div className="mb-4 flex items-center justify-between rounded-xl border border-[#c8934b]/30 bg-[#181913] px-4 py-2.5 text-xs">
                <span className="flex items-center gap-2 font-bold text-[#c8934b]">
                  <span className="h-2 w-2 rounded-full bg-[#c8934b] animate-pulse" />
                  Chairs Open Today
                </span>
                <span className="text-[11px] font-medium text-white/70">
                  214 King St · Brooklyn
                </span>
              </div>

              {/* Navigation Links with Active Class */}
              <div className="space-y-1">
                {navLinks.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(event) => handleNavClick(event, item.id)}
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between rounded-lg px-4 py-3 text-xs font-bold uppercase tracking-[0.14em] transition ${
                        isActive
                          ? "active bg-[#c8934b]/20 text-[#c8934b] border-l-2 border-[#c8934b] font-black shadow-sm"
                          : "text-white/85 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronRight className={`h-4 w-4 ${isActive ? "text-[#c8934b]" : "text-white/40"}`} />
                    </a>
                  );
                })}
              </div>

              {/* Parlour Quick Info Card */}
              <div className="mt-5 rounded-xl border border-[#3e3220] bg-[#11130e] p-4 text-xs">
                <div className="grid grid-cols-2 gap-3 pb-3 mb-3 border-b border-white/10 text-white/75">
                  <div>
                    <span className="block font-bold uppercase text-[#c8934b] text-[10px] tracking-wider">Parlour Hours</span>
                    <span className="text-[11px]">Mon–Fri: 9am–8pm</span>
                    <span className="block text-[11px]">Sat–Sun: 9am–6pm</span>
                  </div>
                  <div>
                    <span className="block font-bold uppercase text-[#c8934b] text-[10px] tracking-wider">Hospitality</span>
                    <span className="text-[11px] text-white/70">Complimentary Bourbon & Espresso</span>
                  </div>
                </div>

                <a
                  href="tel:7185550192"
                  className="flex items-center justify-center gap-2 rounded-lg border border-[#c8934b]/40 bg-[#1a1711] py-2.5 font-bold uppercase tracking-wider text-[#c8934b] transition active:scale-95 hover:bg-[#c8934b]/15"
                >
                  <Phone className="h-3.5 w-3.5" />
                  <span>Call Parlour: (718) 555-0192</span>
                </a>
              </div>
            </nav>
          </>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative scroll-mt-20 overflow-hidden bg-[#090a08] pt-28 pb-20 sm:pt-32 sm:pb-28 lg:min-h-[85vh] lg:flex lg:items-center"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={barberHero}
            alt="Crown and Comb master barber cutting hair"
            className="h-full w-full object-cover object-center opacity-40 scale-105 filter contrast-110"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#070806] via-[#070806]/90 to-[#070806]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#080907] via-transparent to-black/60" />
        </div>

        <Container className="relative z-10">
          <div className="max-w-3xl">
            {/* Social Proof Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c8934b]/40 bg-[#1c1912]/85 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-[#dfad67] shadow-[0_0_20px_rgba(200,147,75,0.2)]">
              <Sparkles className="h-3.5 w-3.5 text-[#c8934b]" />
              <span>Brooklyn's Premier Men's Grooming Parlour</span>
              <span className="hidden sm:inline text-white/50">·</span>
              <span className="hidden sm:inline text-white font-medium">★ 4.9 (850+ Cuts)</span>
            </div>

            {/* Fluid Responsive Heading */}
            <h1
              className="mt-6 font-serif font-black tracking-tight text-white leading-[1.02]"
              style={{ fontSize: "clamp(2.4rem, 6.2vw, 5.2rem)" }}
            >
              Precision Cuts. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#edd3aa] via-[#c8934b] to-[#b37f37]">
                Timeless Style.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-[#d7ccb9]">
              Master barbers, hand-honed straight razors, and old-world hospitality in a vintage Brooklyn speakeasy setting. Complimentary top-shelf bourbon or espresso with every cut.
            </p>

            {/* Responsive Action Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#book-online"
                onClick={(event) => handleNavClick(event, "book-online")}
                className="inline-flex min-h-12 items-center justify-center gap-2.5 rounded-md border border-[#dfad67] bg-gradient-to-r from-[#b37f37] via-[#c8934b] to-[#b37f37] px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-[#080907] shadow-[0_4px_25px_rgba(200,147,75,0.4)] transition-all duration-300 hover:shadow-[0_4px_35px_rgba(200,147,75,0.7)] hover:-translate-y-0.5 active:scale-95"
              >
                <Calendar className="h-4 w-4" />
                <span>Book Your Chair</span>
              </a>

              <a
                href="#services"
                onClick={(event) => handleNavClick(event, "services")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-[#6d5434] bg-[#12110c]/80 px-8 py-3.5 text-xs font-bold uppercase tracking-[0.14em] text-white transition duration-300 hover:border-[#c8934b] hover:bg-white/5 hover:text-[#c8934b]"
              >
                <Scissors className="h-4 w-4 text-[#c8934b]" />
                <span>Explore Services</span>
              </a>
            </div>

            {/* Heritage Highlights Strip */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-[#332817] pt-8">
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded bg-[#1f1b13] text-[#c8934b] border border-[#524128]">
                  <Award className="h-4 w-4" />
                </span>
                <span className="text-xs font-bold text-white/90">Master Barbers</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded bg-[#1f1b13] text-[#c8934b] border border-[#524128]">
                  <Flame className="h-4 w-4" />
                </span>
                <span className="text-xs font-bold text-white/90">Hot Towel Steam</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded bg-[#1f1b13] text-[#c8934b] border border-[#524128]">
                  <Wine className="h-4 w-4" />
                </span>
                <span className="text-xs font-bold text-white/90">Whiskey Lounge</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded bg-[#1f1b13] text-[#c8934b] border border-[#524128]">
                  <ShieldCheck className="h-4 w-4" />
                </span>
                <span className="text-xs font-bold text-white/90">Clean Razor Guarantee</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="scroll-mt-20 border-y border-[#261f14] bg-[#0c0e0a] py-20 sm:py-24"
      >
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c8934b]/30 bg-[#1c1912] px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#dfad67]">
              <Scissors className="h-3.5 w-3.5 text-[#c8934b]" />
              <span>Craft Barbering</span>
              <Scissors className="h-3.5 w-3.5 text-[#c8934b]" />
            </div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              Signature Services
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#cfc2ae]">
              Every appointment includes a detailed consultation, customized shampoo wash, hot towel wrap, straight razor neck cleanup, and precision styling.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {servicesList.map((service) => (
              <article
                key={service.id}
                className="group flex flex-col justify-between rounded-xl border border-[#382d1c] bg-gradient-to-b from-[#151712] to-[#0e100c] p-6 sm:p-7 shadow-xl shadow-black/40 transition-all duration-300 hover:-translate-y-1.5 hover:border-[#c8934b] hover:shadow-[0_15px_35px_rgba(200,147,75,0.18)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="rounded-full border border-[#c8934b]/40 bg-[#1d1b13] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#dfad67]">
                      {service.badge}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-white/60">
                      <Clock className="h-3.5 w-3.5 text-[#c8934b]" />
                      {service.duration}
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-xl font-bold text-white group-hover:text-[#dfad67] transition">
                    {service.title}
                  </h3>

                  <div className="mt-2 flex items-baseline gap-2">
                    <span className="text-3xl font-black text-[#c8934b]">{service.price}</span>
                    <span className="text-xs text-white/50">per session</span>
                  </div>

                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#c7bcab]">
                    {service.description}
                  </p>

                  <ul className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs text-[#d7cbba]">
                    {service.highlights.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <Check className="h-3.5 w-3.5 shrink-0 text-[#c8934b] mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => handleSelectServiceAndBook(service.title, service.price)}
                  className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg border border-[#c8934b]/60 bg-[#1b1912] py-3 text-xs font-bold uppercase tracking-[0.14em] text-[#dfad67] transition group-hover:bg-[#c8934b] group-hover:text-[#080907] active:scale-95"
                >
                  <span>Book This Service</span>
                  <ChevronRight className="h-3.5 w-3.5" />
                </button>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Speakeasy Chair Reservation & Booking Suite */}
      <section
        id="book-online"
        className="scroll-mt-20 relative bg-[#090b08] py-20 sm:py-24 border-b border-[#261f14]"
      >
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            {/* Left Column: Perks & Parlour Promise */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c8934b]/30 bg-[#1a1711] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#dfad67]">
                <Calendar className="h-3.5 w-3.5 text-[#c8934b]" />
                <span>Reserve A Chair</span>
              </div>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Step into the Chair. <br />
                Leave Looking Sharp.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#c7bcab]">
                Select your service, choose your preferred master barber, and pick a time slot. We guarantee on-time chair seating with zero waiting room hassle.
              </p>

              {/* VIP Parlour Perks List */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5 rounded-xl border border-[#342918] bg-[#12130e] p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#201d14] text-[#c8934b] border border-[#524128]">
                    <Wine className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Speakeasy Beverage Bar</h4>
                    <p className="text-xs text-[#b8ab97] mt-0.5">Complimentary single malt bourbon, draft cold brew, or artisanal espresso on the house.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-xl border border-[#342918] bg-[#12130e] p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#201d14] text-[#c8934b] border border-[#524128]">
                    <Clock className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Guaranteed Zero Wait Policy</h4>
                    <p className="text-xs text-[#b8ab97] mt-0.5">Your chair is ready the minute you arrive. We respect your schedule and your craft.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 rounded-xl border border-[#342918] bg-[#12130e] p-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[#201d14] text-[#c8934b] border border-[#524128]">
                    <ShieldCheck className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">100% Satisfaction or Free Touch-Up</h4>
                    <p className="text-xs text-[#b8ab97] mt-0.5">If any line or taper isn't immaculate, stop by within 7 days for a complimentary edge-up.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Dark Speakeasy Booking Form */}
            <div className="rounded-2xl border border-[#483921] bg-[#131510] p-6 sm:p-8 shadow-2xl shadow-black/60 relative">
              {bookingConfirmed ? (
                <div className="py-8 text-center animate-in fade-in zoom-in-95 duration-300">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full border border-[#c8934b] bg-[#1f1d13] text-[#c8934b] shadow-[0_0_30px_rgba(200,147,75,0.4)]">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="mt-5 font-serif text-2xl font-bold text-white">
                    Chair Reservation Confirmed
                  </h3>
                  <p className="mt-2 text-sm text-[#cfc2ae]">
                    We've sent a reservation receipt and calendar invite to your phone.
                  </p>

                  <div className="mt-6 rounded-xl border border-[#3a2f1c] bg-[#1a1c15] p-5 text-left text-xs space-y-2.5 max-w-md mx-auto">
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/60">Service:</span>
                      <span className="font-bold text-[#dfad67]">{bookingService}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/60">Master Barber:</span>
                      <span className="font-bold text-white">{bookingBarber}</span>
                    </div>
                    <div className="flex justify-between border-b border-white/10 pb-2">
                      <span className="text-white/60">Date & Slot:</span>
                      <span className="font-bold text-white">{bookingDate} at {bookingTime}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/60">Location:</span>
                      <span className="font-bold text-white">Crown & Comb · 214 King St, Brooklyn</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setBookingConfirmed(false)}
                    className="mt-6 inline-flex rounded-md border border-[#c8934b] bg-[#c8934b]/20 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-[#dfad67] transition hover:bg-[#c8934b] hover:text-[#080907]"
                  >
                    Reserve Another Chair
                  </button>
                </div>
              ) : (
                <form onSubmit={handleBookingSubmit} className="space-y-5">
                  <div className="flex items-center justify-between border-b border-[#312616] pb-4">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white">
                        Online Chair Booking
                      </h3>
                      <p className="text-xs text-[#cfc2ae]">Instant appointment confirmation</p>
                    </div>
                    <span className="rounded-full border border-[#c8934b]/30 bg-[#1f1d13] px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#c8934b]">
                      Live Schedule
                    </span>
                  </div>

                  {/* Step 1: Select Service */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#c8934b] mb-2">
                      1. Select Service
                    </label>
                    <select
                      value={bookingService}
                      onChange={(e) => setBookingService(e.target.value)}
                      className="w-full rounded-lg border border-[#3e311e] bg-[#1a1c15] px-4 py-3 text-xs sm:text-sm font-medium text-white outline-none focus:border-[#c8934b]"
                    >
                      {servicesList.map((s) => (
                        <option key={s.id} value={`${s.title} (${s.price})`} className="bg-[#12140e] text-white">
                          {s.title} — {s.price} ({s.duration})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Step 2: Select Barber */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#c8934b] mb-2">
                      2. Select Barber
                    </label>
                    <select
                      value={bookingBarber}
                      onChange={(e) => setBookingBarber(e.target.value)}
                      className="w-full rounded-lg border border-[#3e311e] bg-[#1a1c15] px-4 py-3 text-xs sm:text-sm font-medium text-white outline-none focus:border-[#c8934b]"
                    >
                      {barbersList.map((b) => (
                        <option key={b.name} value={`${b.name} (${b.role})`} className="bg-[#12140e] text-white">
                          {b.name} — {b.role}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Step 3: Preferred Date & Time Slots */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#c8934b] mb-2">
                        3. Date
                      </label>
                      <select
                        value={bookingDate}
                        onChange={(e) => setBookingDate(e.target.value)}
                        className="w-full rounded-lg border border-[#3e311e] bg-[#1a1c15] px-4 py-3 text-xs sm:text-sm font-medium text-white outline-none focus:border-[#c8934b]"
                      >
                        <option value="Today">Today (Limited Walk-In Slots)</option>
                        <option value="Tomorrow">Tomorrow</option>
                        <option value="Friday">This Friday</option>
                        <option value="Saturday">This Saturday</option>
                        <option value="Sunday">This Sunday</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#c8934b] mb-2">
                        4. Time Slot
                      </label>
                      <select
                        value={bookingTime}
                        onChange={(e) => setBookingTime(e.target.value)}
                        className="w-full rounded-lg border border-[#3e311e] bg-[#1a1c15] px-4 py-3 text-xs sm:text-sm font-medium text-white outline-none focus:border-[#c8934b]"
                      >
                        <option value="10:00 AM">10:00 AM</option>
                        <option value="11:30 AM">11:30 AM (Popular)</option>
                        <option value="1:15 PM">1:15 PM</option>
                        <option value="3:00 PM">3:00 PM</option>
                        <option value="4:45 PM">4:45 PM</option>
                        <option value="6:30 PM">6:30 PM (Evening)</option>
                      </select>
                    </div>
                  </div>

                  {/* Client Info Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      className="w-full rounded-lg border border-[#3e311e] bg-[#1a1c15] px-4 py-3 text-xs sm:text-sm text-white placeholder-white/40 outline-none focus:border-[#c8934b]"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone (For SMS Reminder)"
                      className="w-full rounded-lg border border-[#3e311e] bg-[#1a1c15] px-4 py-3 text-xs sm:text-sm text-white placeholder-white/40 outline-none focus:border-[#c8934b]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-4 flex w-full min-h-12 items-center justify-center gap-2 rounded-lg border border-[#dfad67] bg-gradient-to-r from-[#b37f37] via-[#c8934b] to-[#b37f37] py-3.5 text-xs font-black uppercase tracking-[0.14em] text-[#080907] shadow-lg shadow-black/40 transition hover:shadow-[0_4px_25px_rgba(200,147,75,0.6)] active:scale-95"
                  >
                    <span>Confirm Chair Reservation</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <p className="text-center text-[11px] text-white/50">
                    No upfront card required · Pay at chair with card, Apple Pay, or cash.
                  </p>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Our Story / Craftsmanship Section */}
      <section id="about" className="scroll-mt-20 bg-[#0c0e0a] py-20 sm:py-24 border-b border-[#261f14]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            {/* Story Image with Brass Border Accents */}
            <div className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#4d3a22] shadow-2xl shadow-black/60">
                <img
                  src={barberImages.story}
                  alt="Inside Crown and Comb Barber parlour"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/10 bg-black/60 p-4 backdrop-blur-md">
                  <div>
                    <span className="block text-xs font-bold uppercase tracking-wider text-[#c8934b]">Brooklyn Flagship</span>
                    <span className="font-serif text-sm font-bold text-white">King Street Heritage Parlour</span>
                  </div>
                  <span className="rounded-md border border-[#c8934b]/40 bg-[#c8934b]/10 px-3 py-1 text-xs font-black text-[#dfad67]">
                    Est. 2012
                  </span>
                </div>
              </div>
            </div>

            {/* Story Text & The 3 Pillars */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c8934b]/30 bg-[#1c1912] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#dfad67]">
                <Crown className="h-3.5 w-3.5 text-[#c8934b]" />
                <span>Our Heritage</span>
              </div>
              <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight">
                Rooted in Tradition. <br />
                Focused on You.
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#c7bcab]">
                Crown & Comb Barber was born out of a desire to revive the golden age of American barbering. We combined hand-honed razor craft and bespoke hot lather steam with modern booking convenience and premium botanical aftercare.
              </p>

              {/* The Three Pillars */}
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-4 rounded-xl border border-[#342918] bg-[#12130e] p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#221e15] text-[#c8934b] border border-[#524128]">
                    <Award className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Uncompromising Quality</h4>
                    <p className="text-xs leading-relaxed text-[#b5a793] mt-1">Single-use surgical-grade blades, hand-sharpened Japanese shears, and certified organic grooming elixirs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-[#342918] bg-[#12130e] p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#221e15] text-[#c8934b] border border-[#524128]">
                    <Users className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Neighborhood Brotherhood</h4>
                    <p className="text-xs leading-relaxed text-[#b5a793] mt-1">A welcoming sanctuary where conversations flow naturally, records spin on vinyl, and gentlemen unwind.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 rounded-xl border border-[#342918] bg-[#12130e] p-4">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#221e15] text-[#c8934b] border border-[#524128]">
                    <Scissors className="h-5 w-5" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-white">Master Barber Apprenticeship</h4>
                    <p className="text-xs leading-relaxed text-[#b5a793] mt-1">Every barber on our floor has completed over 3,000 hours of precision cutting and traditional shave training.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="scroll-mt-20 border-b border-[#261f14] bg-[#090a08] py-20 sm:py-24"
      >
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#c8934b]/30 bg-[#1c1912] px-3.5 py-1 text-xs font-bold uppercase tracking-[0.2em] text-[#dfad67]">
                <Sparkles className="h-3.5 w-3.5 text-[#c8934b]" />
                <span>Visual Archive</span>
              </div>
              <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white">
                Inside the Parlour
              </h2>
            </div>
            <p className="max-w-md text-xs sm:text-sm text-[#c7bcab]">
              A closer look at the precision fades, hand-honed tools, vintage chairs, and speakeasy ambiance that define Crown & Comb.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <article
                key={item.title}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-[#382d1c] bg-[#11130e] shadow-xl shadow-black/40"
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent opacity-80 group-hover:opacity-95 transition" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-wider text-[#c8934b]">
                      {String(index + 1).padStart(2, "0")} · {item.category}
                    </span>
                    <h3 className="text-sm font-bold text-white group-hover:text-[#dfad67] transition">
                      {item.title}
                    </h3>
                  </div>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-white/20 bg-black/40 text-white backdrop-blur group-hover:border-[#c8934b] group-hover:text-[#c8934b] transition">
                    <ChevronRight className="h-4 w-4" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Curated Grooming Shop Section */}
      <section
        id="shop"
        className="scroll-mt-20 bg-[#0d0f0c] py-20 sm:py-24 border-b border-[#261f14]"
      >
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c8934b]/30 bg-[#1c1912] px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#dfad67]">
              <ShoppingBag className="h-3.5 w-3.5 text-[#c8934b]" />
              <span>Barber Apothecary</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              Take the Finish Home
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#cfc2ae]">
              Small-batch pomades, soothing beard elixirs, and hand-beveled pocket combs formulated and used daily at our chairs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {shopItems.map((item) => (
              <article
                key={item.id}
                className="group flex flex-col justify-between rounded-xl border border-[#382d1c] bg-[#12140f] overflow-hidden shadow-xl shadow-black/40 transition duration-300 hover:-translate-y-1 hover:border-[#c8934b]"
              >
                <div className="relative aspect-square overflow-hidden bg-[#181a14]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 rounded-full border border-black/40 bg-black/70 px-2.5 py-1 text-[11px] font-bold text-[#dfad67] backdrop-blur">
                    ★ {item.rating} ({item.reviews})
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <div className="flex items-baseline justify-between">
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#dfad67] transition">
                        {item.title}
                      </h3>
                      <span className="text-lg font-black text-[#c8934b]">{item.price}</span>
                    </div>
                    <p className="mt-2 text-xs leading-relaxed text-[#c2b6a5]">
                      {item.desc}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleAddToCart(item.title)}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg border border-[#c8934b]/70 bg-[#1a1711] py-2.5 text-xs font-bold uppercase tracking-wider text-[#dfad67] transition hover:bg-[#c8934b] hover:text-[#080907] active:scale-95"
                  >
                    <ShoppingBag className="h-3.5 w-3.5" />
                    <span>Add to Bag</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Client Testimonials Section */}
      <section className="bg-[#090a08] py-20 sm:py-24 border-b border-[#261f14]">
        <Container>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#c8934b]/30 bg-[#1c1912] px-4 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#dfad67]">
              <Star className="h-3.5 w-3.5 text-[#c8934b]" />
              <span>Patron Reviews</span>
            </div>
            <h2 className="mt-4 font-serif text-3xl sm:text-4xl lg:text-5xl font-black text-white">
              What the Neighborhood Says
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#cfc2ae]">
              Real testimonials from clients who trust Crown & Comb with their weekly cuts and beard maintenance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <article
                key={t.author}
                className="flex flex-col justify-between rounded-xl border border-[#382d1c] bg-[#12140e] p-6 sm:p-7 shadow-xl shadow-black/40"
              >
                <div>
                  <div className="flex gap-1 text-[#c8934b]">
                    {Array.from({ length: t.stars }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#d7ccb9] italic">
                    "{t.quote}"
                  </p>
                </div>

                <div className="mt-6 border-t border-white/10 pt-4 flex items-center justify-between text-xs">
                  <div>
                    <span className="block font-bold text-white">{t.author}</span>
                    <span className="text-[#c8934b] text-[11px]">{t.neighborhood}</span>
                  </div>
                  <span className="rounded bg-[#1e1b13] px-2.5 py-1 text-[10px] font-medium text-white/70">
                    {t.service}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Footer Section */}
      <footer
        id="contact"
        className="scroll-mt-20 bg-[#060705] pt-16 pb-28 lg:pb-12 text-[#cfc2ae] border-t border-[#261f14]"
      >
        <Container>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {/* Col 1: Brand & Philosophy */}
            <div>
              <Link
                to="/beauty/crown-comb-barber"
                className="flex items-center gap-3 group"
              >
                <span className="grid h-10 w-10 place-items-center rounded-lg border border-[#6f5230] bg-[#14120e] text-2xl text-[#c8934b]">
                  ♛
                </span>
                <div>
                  <span className="block font-serif text-lg font-bold text-white">Crown & Comb</span>
                  <span className="block text-[0.62rem] font-bold uppercase tracking-[0.32em] text-[#c8934b]">Barber · Brooklyn</span>
                </div>
              </Link>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#b5a793]">
                Precision cuts, traditional straight razor shaves, and old-world hospitality. Established 2012 in Brooklyn, NY.
              </p>
              <div className="mt-5 flex gap-2.5">
                {["IG", "FB", "YT"].map((network) => (
                  <a
                    key={network}
                    href="#home"
                    className="grid h-9 w-9 place-items-center rounded-lg border border-[#3e311e] bg-[#14120e] text-xs font-bold text-[#c8934b] transition hover:bg-[#c8934b] hover:text-[#080907]"
                  >
                    {network}
                  </a>
                ))}
              </div>
            </div>

            {/* Col 2: Parlour Address & Transit */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
                Parlour Location
              </h3>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#c7bcab]">
                214 King Street
                <br />
                Brooklyn, NY 11201
              </p>
              <p className="mt-2 text-xs text-white/50">
                Transit: F/G train to Carroll Street (5-min walk). Street parking available.
              </p>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-[#c8934b] hover:underline"
              >
                <MapPin className="h-3.5 w-3.5" />
                <span>Open in Google Maps</span>
              </a>
            </div>

            {/* Col 3: Hours & Phone */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
                Parlour Hours
              </h3>
              <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#c7bcab]">
                <strong className="text-white">Mon–Fri:</strong> 9:00 AM – 8:00 PM
                <br />
                <strong className="text-white">Sat–Sun:</strong> 9:00 AM – 6:00 PM
              </p>
              <p className="mt-3 text-xs text-[#dfad67]">
                Walk-ins welcomed daily. Appointments encouraged.
              </p>
              <a
                href="tel:7185550192"
                className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-white hover:text-[#c8934b]"
              >
                <Phone className="h-3.5 w-3.5 text-[#c8934b]" />
                <span>(718) 555-0192</span>
              </a>
            </div>

            {/* Col 4: Newsletter & Dispatch */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white">
                Gentlemen's Dispatch
              </h3>
              <p className="mt-4 text-xs leading-relaxed text-[#b5a793]">
                Receive seasonal grooming notes, barber schedules, and early access to holiday gift sets.
              </p>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Thank you for subscribing to the Crown & Comb Dispatch.");
                }}
                className="mt-4 flex"
              >
                <label htmlFor="barber-email-input" className="sr-only">Email address</label>
                <input
                  id="barber-email-input"
                  type="email"
                  required
                  placeholder="Your email address"
                  className="min-w-0 flex-1 rounded-l-md border border-r-0 border-[#4a3921] bg-[#141610] px-3.5 py-2.5 text-xs text-white placeholder-white/40 outline-none focus:border-[#c8934b]"
                />
                <button
                  type="submit"
                  className="rounded-r-md bg-[#c8934b] px-4 text-xs font-bold uppercase tracking-wider text-[#080907] transition hover:bg-[#dfad67]"
                >
                  Join
                </button>
              </form>
            </div>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50">
            <p>© 2026 Crown & Comb Barber NYC. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#home" className="hover:text-white">Privacy</a>
              <a href="#home" className="hover:text-white">Terms</a>
              <a href="#home" className="hover:text-white">Cancellation Policy</a>
            </div>
            <p className="text-[#c8934b]">Precision Cuts · Timeless Brotherhood</p>
          </div>
        </Container>
      </footer>

      {/* Mobile Bottom Quick Navigation Bar (Connected to dynamic activeSection state) */}
      <nav
        aria-label="Mobile quick navigation"
        className="fixed bottom-0 inset-x-0 z-40 grid grid-cols-5 border-t border-[#c8934b]/25 bg-[#080906]/98 px-2 py-2 backdrop-blur-xl lg:hidden shadow-[0_-10px_30px_rgba(0,0,0,0.8)]"
      >
        {bottomNavItems.map((item) => {
          const IconComponent = item.icon;
          const isActive =
            item.id === "home"
              ? activeSection === "home"
              : item.id === "services"
                ? activeSection === "services"
                : item.id === "book-online"
                  ? activeSection === "book-online"
                  : item.id === "shop"
                    ? activeSection === "shop" || activeSection === "gallery"
                    : activeSection === "contact" || activeSection === "about";

          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(event) => handleNavClick(event, item.id)}
              aria-current={isActive ? "page" : undefined}
              className={`flex flex-col items-center justify-center gap-1 py-1 text-center transition active:scale-95 ${
                item.highlight
                  ? isActive
                    ? "text-[#dfad67] font-black"
                    : "text-[#c8934b] font-bold"
                  : isActive
                    ? "active text-[#c8934b] font-black"
                    : "text-white/65 hover:text-white"
              }`}
            >
              <div
                className={`relative grid h-7 w-7 place-items-center rounded-lg transition ${
                  item.highlight
                    ? "bg-[#c8934b]/20 border border-[#c8934b]/50 shadow-[0_0_12px_rgba(200,147,75,0.3)]"
                    : isActive
                      ? "bg-[#c8934b]/15 text-[#c8934b]"
                      : ""
                }`}
              >
                <IconComponent className="h-4 w-4" />
                {isActive && (
                  <span className="absolute -bottom-1 h-1 w-1 rounded-full bg-[#c8934b] shadow-[0_0_6px_#c8934b]" />
                )}
              </div>
              <span className="text-[10px] tracking-tight">{item.label}</span>
            </a>
          );
        })}
      </nav>
    </main>
  );
}

export default CrownCombBarber;
