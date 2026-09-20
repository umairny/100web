import React, { useEffect, useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Sparkles,
  Heart,
  Clock,
  MapPin,
  Phone,
  ArrowRight,
  Star,
  CheckCircle2,
  Calendar,
  Check,
  Sliders,
  Users,
  Award,
  X,
  Menu,
  ChevronRight,
  ChevronLeft,
  Eye,
  Plus,
  Minus,
} from "lucide-react";

import heroImage from "../../assets/optimized/beauty/bloombridal/hero.webp";
import galleryOne from "../../assets/optimized/beauty/bloombridal/gallary01.webp";
import galleryTwo from "../../assets/optimized/beauty/bloombridal/gallary02.webp";
import galleryThree from "../../assets/optimized/beauty/bloombridal/gallary03.webp";
import galleryFour from "../../assets/optimized/beauty/bloombridal/gallary04.webp";
import galleryFive from "../../assets/optimized/beauty/bloombridal/gallary05.webp";
import gallerySix from "../../assets/optimized/beauty/bloombridal/gallary06.webp";
import interiorImage from "../../assets/optimized/beauty/bloombridal/interior.webp";
import passionImage from "../../assets/optimized/beauty/bloombridal/passion.webp";

const IMG = {
  hero: heroImage,
  featured1: galleryOne,
  featured2: galleryTwo,
  featured3: galleryThree,
  featured4: galleryFour,
  featured5: galleryFive,
  featured6: gallerySix,
  studio: interiorImage,
  artistLead: passionImage,
  artist1: galleryOne,
  artist2: galleryFour,
  artist3: galleryFive,
  sideBride: gallerySix,
  footer1: galleryOne,
  footer2: galleryTwo,
  footer3: interiorImage,
  footer4: galleryFour,
  footer5: galleryFive,
  footer6: gallerySix,
};

const navItems = [
  { id: "services", label: "Services" },
  { id: "lookbook", label: "Lookbook" },
  { id: "calculator", label: "Estimator" },
  { id: "packages", label: "Packages" },
  { id: "journey", label: "Journey" },
  { id: "artists", label: "Artists" },
  { id: "reviews", label: "Love Notes" },
  { id: "faq", label: "FAQ" },
];


const services = [
  {
    title: "Bespoke Bridal Hair",
    text: "Long-wearing textured updos, Hollywood waves, and braided romantic styling engineered to last from first look to final dance.",
    time: "90 min service",
    includes: "Veil placement, hair padding, accessory pinning",
  },
  {
    title: "Soft Glam Makeup",
    text: "Waterproof HD airbrushed foundation with custom-blended individual lashes that looks breathtaking in both natural daylight and flash photography.",
    time: "75 min service",
    includes: "Skin prep facial massage, custom lash clusters, touch-up kit",
  },
  {
    title: "In-Studio Bridal Trials",
    text: "A 2.5-hour collaborative atelier session with champagne to explore variations, photograph lighting tests, and perfect your vision with zero rush.",
    time: "150 min atelier",
    includes: "Up to 2 look variations, veil trial, lighting check",
  },
  {
    title: "On-Location VIP Concierge",
    text: "We arrive directly at your bridal suite, private estate, or hotel with professional lighting stations, full sanitation kits, and calm energy.",
    time: "Full wedding morning",
    includes: "Schedule coordination, touch-ups until you walk down aisle",
  },
];

const lookbookData = [
  {
    id: "look-1",
    category: "makeup",
    title: "Dewy Rose Gold Soft Glam",
    subtitle: "Greystone Mansion, Beverly Hills",
    details: "Airbrush luminous base, individual lash clusters, and sheer rose petal lip tint.",
    artist: "Jessica Lee",
    image: IMG.featured1,
    tall: true,
  },
  {
    id: "look-2",
    category: "hair",
    title: "Textured Romantic Low Bun",
    subtitle: "Malibu Rocky Oaks Estate",
    details: "Airy twisted knot with organic tendrils and fresh jasmine floral pins.",
    artist: "Sarah James",
    image: IMG.featured2,
    tall: false,
  },
  {
    id: "look-3",
    category: "trials",
    title: "The Atelier Bridal Kit",
    subtitle: "Bloom Studio, Beverly Hills",
    details: "Hospitality skincare prep with lymphatic cryo globes and luxury French makeup.",
    artist: "Lisa Monteiro",
    image: IMG.featured3,
    tall: false,
  },
  {
    id: "look-4",
    category: "makeup",
    title: "Velvet Radiance & Sculpted Brow",
    subtitle: "Pelican Hill Resort, Newport Beach",
    details: "Soft smoky taupe eye, feathered brows, and satin cashmere complexion.",
    artist: "Jessica Lee",
    image: IMG.featured4,
    tall: true,
    wide: true,
  },
  {
    id: "look-5",
    category: "hair",
    title: "Glossy Old Hollywood Waves",
    subtitle: "Hotel Bel-Air Pavilions",
    details: "High-shine mirror waves with seamless clip-in extension blending.",
    artist: "Sarah James",
    image: IMG.featured5,
    tall: false,
  },
  {
    id: "look-6",
    category: "trials",
    title: "Cohesive Bridal Party Glam",
    subtitle: "Kestrel Park, Santa Ynez",
    details: "Harmonized aesthetic for 7 bridesmaids with individually customized flattering accents.",
    artist: "Team Bloom Artists",
    image: IMG.featured6,
    tall: false,
  },
];

const packages = [
  {
    title: "The Essential",
    tag: "For the intimate or minimalist bride.",
    price: 950,
    priceLabel: "$950",
    featured: false,
    items: [
      "Day-of Bridal Hair Styling",
      "Day-of Luxury Bridal Makeup",
      "Individual Custom Lash Clusters",
      "Full Deluxe Touch-Up Kit (lipstick, powder, pins)",
      "Veil & Accessory Placement",
    ],
  },
  {
    title: "The Signature",
    tag: "Our most coveted, stress-free bridal experience.",
    price: 1450,
    priceLabel: "$1,450",
    featured: true,
    items: [
      "In-Studio 2.5-Hour Bridal Trial Session",
      "Day-of Bridal Hair & Airbrush Makeup",
      "Luxury Pre-Wedding Skin Prep with Cryo Globes",
      "Custom Individual Flare Lashes",
      "Deluxe Wedding-Day Touch-Up Bag",
      "Complimentary Hair Extension Clip-In Placement",
      "Assistance with Gowning & Final Veil Pinning",
    ],
  },
  {
    title: "The Luxe All-Day",
    tag: "The ultimate red-carpet wedding day indulgence.",
    price: 2250,
    priceLabel: "$2,250",
    featured: false,
    items: [
      "Full Signature Experience with In-Studio Trial",
      "Second Look / Reception Hair & Makeup Change",
      "3-Hour Dedicated On-Site Touch-Up Concierge",
      "Pre-Ceremony Groom Touch-Up (shine control, hair)",
      "Premium Silk Robe & Luxury Keepsake Kit",
      "Unlimited Artist Access through Sunset Photos",
    ],
  },
];

const journey = [
  {
    no: "01",
    title: "Vision & Inquiry",
    text: "Share your date, wedding aesthetic, and venue. We confirm availability and reserve your weekend pencil hold within 24 hours.",
  },
  {
    no: "02",
    title: "The Studio Trial",
    text: "3–4 months prior, visit our Beverly Hills atelier for an unhurried 2.5-hour trial with champagne, lighting tests, and look variations.",
  },
  {
    no: "03",
    title: "Bespoke Beauty Schedule",
    text: "We collaborate with your wedding planner to build a seamless timeline, ensuring zero rush and complete relaxation on wedding morning.",
  },
  {
    no: "04",
    title: "Wedding Day Glow",
    text: "Our team arrives on location with professional vanity lighting, pampering you and your bridal party until you step down the aisle.",
  },
];

const artists = [
  {
    name: "Lisa Monteiro",
    role: "Founder & Creative Director",
    specialty: "Editorial French Romance & Ethereal Skin",
    experience: "12+ Years · 400+ Brides",
    image: IMG.artistLead,
  },
  {
    name: "Jessica Lee",
    role: "Senior Makeup Artist",
    specialty: "Soft Glam Airbrush & Custom Lashes",
    experience: "8+ Years · Vogue Weddings Featured",
    image: IMG.artist1,
  },
  {
    name: "Sarah James",
    role: "Lead Hair Specialist",
    specialty: "Hollywood Waves & Textured Updos",
    experience: "10+ Years · Celebrity Stylist",
    image: IMG.artist2,
  },
  {
    name: "Megha Patel",
    role: "Bridal Party Lead Artist",
    specialty: "Cohesive Large Party Glamour",
    experience: "7+ Years · Destination Specialist",
    image: IMG.artist3,
  },
];

const reviews = [
  {
    text: "Bloom Bridal Studio made me feel like the most ethereal, radiant version of myself. My hair and makeup didn’t budge through an emotional ceremony and 4 hours of non-stop dancing under the stars.",
    name: "Anisha Rodriguez",
    venue: "Greystone Mansion, Beverly Hills",
    date: "October 2025 Bride",
    stars: 5,
  },
  {
    text: "The trial was pure heaven. Lisa examined my dress neckline and designed a textured updo that was absolute couture art. Every single one of my 7 bridesmaids was glowing.",
    name: "Karishma Desai",
    venue: "Malibu Rocky Oaks Estate",
    date: "August 2025 Bride",
    stars: 5,
  },
  {
    text: "They brought total tranquility into our bridal suite on a morning when nerves were running high. They arrived 15 minutes early, kept our schedule ahead of time, and our photography proofs are stunning.",
    name: "Meghna Sterling",
    venue: "Pelican Hill Resort, Newport",
    date: "November 2025 Bride",
    stars: 5,
  },
];

const faqs = [
  [
    "How far in advance should we reserve our wedding date?",
    "We recommend booking 9–14 months ahead. Prime spring and autumn Saturday dates in Southern California often fill more than a year in advance.",
  ],
  [
    "Are bridal hair and makeup trials included in the packages?",
    "Yes, comprehensive 2.5-hour in-studio trials are included in both The Signature and The Luxe packages, and can be added a la carte to The Essential.",
  ],
  [
    "Do you travel on-location to private estates and hotels?",
    "Yes! We provide on-location services across Beverly Hills, Malibu, Los Angeles, Santa Barbara, Orange County, and destination weddings worldwide.",
  ],
  [
    "Can you accommodate large bridal parties?",
    "Absolutely. Our studio retains an elite team of senior artists and hair specialists capable of seamlessly styling bridal parties of up to 14 guests while keeping to schedule.",
  ],
  [
    "What products are in your bridal kits?",
    "We use only luxury, dermatologist-approved, camera-tested formulations including Charlotte Tilbury, Dior Backstage, Tom Ford, Westman Atelier, and Oribe.",
  ],
];

export default function BloomBridalStudio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [galleryFilter, setGalleryFilter] = useState<"all" | "hair" | "makeup" | "trials">("all");
  const [lightboxLook, setLightboxLook] = useState<(typeof lookbookData)[0] | null>(null);

  // Reviews slider state
  const [reviewIndex, setReviewIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Interactive Party Investment Estimator State
  const [calcPackage, setCalcPackage] = useState<string>("The Signature");
  const [calcBridesmaids, setCalcBridesmaids] = useState<number>(3);
  const [calcMothers, setCalcMothers] = useState<number>(1);
  const [calcRehearsal, setCalcRehearsal] = useState<boolean>(false);
  const [calcTouchupArtist, setCalcTouchupArtist] = useState<boolean>(false);

  // Booking Modal State
  const [bookingOpen, setBookingOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingData, setBookingData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "2026-06-20",
    venue: "Beverly Hills / Malibu",
    package: "The Signature ($1,450)",
    partySize: "4 (Bride + 3 Guests)",
    visionNotes: "",
  });

  // Calculate live estimate
  const liveEstimate = useMemo(() => {
    let base = 1450;
    if (calcPackage === "The Essential") base = 950;
    if (calcPackage === "The Luxe All-Day") base = 2250;

    const bridesmaidTotal = calcBridesmaids * 220;
    const motherTotal = calcMothers * 190;
    const rehearsalTotal = calcRehearsal ? 450 : 0;
    const touchupTotal = calcTouchupArtist ? 550 : 0;

    return base + bridesmaidTotal + motherTotal + rehearsalTotal + touchupTotal;
  }, [calcPackage, calcBridesmaids, calcMothers, calcRehearsal, calcTouchupArtist]);

  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll spy & scroll elevation
  useEffect(() => {
    const updateActive = () => {
      setIsScrolled(window.scrollY > 25);
      const marker = window.scrollY + 120;
      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter((section): section is HTMLElement => Boolean(section))
        .sort((a, b) => a.offsetTop - b.offsetTop);
      const passed = sections.filter((section) => section.offsetTop <= marker);
      setActiveSection(passed[passed.length - 1]?.id ?? (window.scrollY < 200 ? "home" : "services"));
    };

    window.addEventListener("scroll", updateActive, { passive: true });
    updateActive();
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  // Keyboard close for modals
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setBookingOpen(false);
        setLightboxLook(null);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // Filtered Lookbook
  const filteredLookbook = useMemo(() => {
    if (galleryFilter === "all") return lookbookData;
    return lookbookData.filter((item) => item.category === galleryFilter);
  }, [galleryFilter]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = 82;
      const elementPos = element.getBoundingClientRect().top;
      const offsetPos = elementPos + window.pageYOffset - topOffset;
      window.scrollTo({ top: offsetPos, behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
      setActiveSection(id);
    }
  };

  const openBookingWithPackage = (packageName: string, customPrice?: number) => {
    setBookingData((prev) => ({
      ...prev,
      package: customPrice ? `${packageName} (Custom: $${customPrice.toLocaleString()})` : packageName,
      partySize: `${1 + calcBridesmaids + calcMothers} Guests Total`,
    }));
    setIsSubmitted(false);
    setBookingOpen(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="bloomPage">
      <style>{css}</style>

      {/* ── TOP LUXURY BRIDAL TICKER ────────────────────────────────────────── */}
      <div className="topTicker">
        <div className="sectionShell tickerContent">
          <div className="tickerItem">
            <span className="tickerDot" />
            <span>BEVERLY HILLS ATELIER · NOW WELCOMING 2026–2027 WEDDINGS</span>
          </div>
          <div className="tickerMeta">
            <span className="hidden sm:inline">✨ VOGUE WEDDINGS FEATURED</span>
            <span className="hidden md:inline">💄 AIRBRUSH HD FINISH</span>
            <span className="phoneLink">
              <Phone className="iconMini" /> (555) 123-4567
            </span>
          </div>
        </div>
      </div>

      {/* ── STICKY NAVIGATION BAR ─────────────────────────────────────────── */}
      <header className={`navWrap ${isScrolled ? "scrolled" : ""}`}>
        <div className="navContainer">
          <a
            className="logo"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
              window.history.pushState(null, "", "#home");
            }}
            aria-label="Bloom Bridal Studio home"
          >
            <span className="logoMain">Bloom</span>
            <span className="logoSub">Bridal Atelier · Beverly Hills</span>
          </a>

          <nav className="navLinks" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                className={activeSection === item.id ? "active" : ""}
                aria-current={activeSection === item.id ? "page" : undefined}
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="navActions">
            <Link to="/beauty" className="backToHub" title="Return to 100Web Beauty Showcase">
              <span>←</span> Beauty Showcase
            </Link>
            <button
              className="bookTop"
              type="button"
              onClick={() => openBookingWithPackage("The Signature")}
            >
              <Calendar className="iconMini" />
              <span>Check Date</span>
            </button>
            <button
              className="menuButton"
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X className="iconSmall" /> : <Menu className="iconSmall" />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <>
            <div className="mobileBackdrop" onClick={() => setMenuOpen(false)} />
            <nav className="mobileNav" aria-label="Mobile navigation">
              <div className="mobileNavHeader">
                <span className="mobileNavTitle">Atelier Navigation</span>
                <button
                  type="button"
                  className="mobileCloseBtn"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="iconMini" />
                </button>
              </div>
              <div className="mobileNavLinks">
                {navItems.map((item) => (
                  <a
                    className={activeSection === item.id ? "active" : ""}
                    onClick={(e) => handleNavClick(e, item.id)}
                    key={item.id}
                    href={`#${item.id}`}
                  >
                    <span>{item.label}</span>
                    <span className="mobileNavArrow">→</span>
                  </a>
                ))}
              </div>
              <div className="mobileDrawerCta">
                <button
                  type="button"
                  className="btn fullField"
                  onClick={() => {
                    setMenuOpen(false);
                    openBookingWithPackage("The Signature");
                  }}
                >
                  Reserve Your Date →
                </button>
                <Link
                  to="/beauty"
                  className="mobileHubLink"
                  onClick={() => setMenuOpen(false)}
                >
                  ← Return to Beauty Showcase
                </Link>
              </div>
            </nav>
          </>
        )}
      </header>

      {/* ── LUXURY EDITORIAL HERO ─────────────────────────────────────────── */}
      <section id="home" className="hero sectionShell">
        <div className="heroCopy">
          <p className="eyebrow">Luxury Bridal Atelier · Beverly Hills</p>
          <h1>
            Where You <em>Bloom</em> for Your Big Day
          </h1>
          <div className="goldLine" />
          <p className="lead">
            Bespoke bridal hair, soft glam makeup, and calm wedding-morning artistry for the modern romantic bride.
          </p>

          <div className="heroActions">
            <button
              type="button"
              className="btn"
              onClick={() => openBookingWithPackage("The Signature")}
            >
              Reserve Your Wedding Date <span>→</span>
            </button>
            <a href="#lookbook" className="btn btnOutline" onClick={(e) => handleNavClick(e, "lookbook")}>
              Explore Lookbook <span>↓</span>
            </a>
          </div>

          <div className="heroSocialProof">
            <div className="avatarCluster" aria-label="Recent Beverly Hills Bloom brides">
              <img src={IMG.featured1} alt="Bloom bride Claire" className="avatarImg" />
              <img src={IMG.featured2} alt="Bloom bride Jessica" className="avatarImg" />
              <img src={IMG.featured4} alt="Bloom bride Karishma" className="avatarImg" />
              <img src={IMG.featured5} alt="Bloom bride Anisha" className="avatarImg" />
            </div>
            <div className="socialProofText">
              <div className="starRating">
                <Star className="starFilled" />
                <Star className="starFilled" />
                <Star className="starFilled" />
                <Star className="starFilled" />
                <Star className="starFilled" />
                <span className="ratingScore">4.98</span>
              </div>
              <p className="socialProofSub">Loved by <strong>280+</strong> Beverly Hills & Malibu brides</p>
            </div>
          </div>
        </div>

        <div className="heroArt">
          <div className="windowFrame">
            <div className="windowInner">
              <img
                src={IMG.hero}
                alt="Bride in lace gown with romantic updo at Bloom Bridal Studio"
                fetchPriority="high"
                decoding="async"
              />
              <div className="windowSheen" />
            </div>
            <div className="award" aria-label="The Knot 2026 Best of Weddings Winner">
              <div className="awardInnerRing">
                <div className="awardStars">
                  <Star className="awardStar" />
                  <Star className="awardStarMain" />
                  <Star className="awardStar" />
                </div>
                <span className="awardBrand">The Knot</span>
                <strong className="awardYear">2026</strong>
                <span className="awardTitle">Best of Weddings</span>
                <span className="awardPill">Hall of Fame</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES OVERVIEW ─────────────────────────────────────────────── */}
      <section id="services" className="serviceBar sectionShell" aria-label="Services overview">
        {services.map((service) => (
          <article className="serviceItem" key={service.title}>
            <div className="serviceIcon">
              <Sparkles />
            </div>
            <div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <div className="serviceSpecs">
                <span className="specTag"><Clock className="iconNano" /> {service.time}</span>
                <span className="specTagSub">{service.includes}</span>
              </div>
            </div>
          </article>
        ))}
      </section>

      {/* ── INTERACTIVE BRIDAL LOOKBOOK ───────────────────────────────────── */}
      <section id="lookbook" className="gallery sectionShell">
        <div className="sectionIntro">
          <p className="eyebrow">Curated Portfolio</p>
          <h2>
            Timeless Elegance, Modern <em>Romance</em>
          </h2>
          <p>
            Real brides from Southern California luxury estates and destination celebrations. Click any look to view styling notes and products used.
          </p>

          {/* Gallery Category Filter Pills */}
          <div className="lookbookFilter">
            {[
              { id: "all" as const, label: "All Works" },
              { id: "hair" as const, label: "Bridal Hair" },
              { id: "makeup" as const, label: "Soft Glam Makeup" },
              { id: "trials" as const, label: "Trials & Details" },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                className={`filterBtn ${galleryFilter === tab.id ? "active" : ""}`}
                onClick={() => setGalleryFilter(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="galleryGrid">
          {filteredLookbook.map((item) => (
            <div
              key={item.id}
              className={`galleryCard ${item.tall ? "tall" : ""} ${item.wide ? "wide" : ""}`}
              onClick={() => setLightboxLook(item)}
              tabIndex={0}
              role="button"
              aria-label={`View details for ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
              />
              <div className="galleryOverlay">
                <span className="overlayCategory">{item.category.toUpperCase()}</span>
                <p className="overlayTitle">{item.title}</p>
                <p className="overlaySub">{item.subtitle}</p>
                <span className="inspectPrompt"><Eye className="iconNano" /> Tap to view look details</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── LIGHTBOX DETAIL MODAL ─────────────────────────────────────────── */}
      {lightboxLook && (
        <div className="modalBackdrop" onClick={() => setLightboxLook(null)}>
          <div className="lookbookModal" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="modalClose"
              onClick={() => setLightboxLook(null)}
              aria-label="Close lookbook modal"
            >
              ×
            </button>
            <div className="lookbookModalContent">
              <div className="lookbookModalImg">
                <img src={lightboxLook.image} alt={lightboxLook.title} />
              </div>
              <div className="lookbookModalDetails">
                <span className="eyebrow">{lightboxLook.category.toUpperCase()} ARTISTRY</span>
                <h2>{lightboxLook.title}</h2>
                <p className="lookbookVenue"><MapPin className="iconMini" /> {lightboxLook.subtitle}</p>
                <p className="lookbookDesc">{lightboxLook.details}</p>
                <div className="lookbookMetaBox">
                  <p><strong>Artist in Charge:</strong> {lightboxLook.artist}</p>
                  <p><strong>Finish Type:</strong> 16h Airbrushed Moisture-Shield</p>
                </div>
                <button
                  type="button"
                  className="btn"
                  onClick={() => {
                    setLightboxLook(null);
                    openBookingWithPackage("The Signature");
                  }}
                >
                  Inquire For This Aesthetic →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ── ABOUT STUDIO ──────────────────────────────────────────────────── */}
      <section id="about" className="about sectionShell">
        <img
          className="studioImg"
          src={IMG.studio}
          alt="Elegant Beverly Hills bridal beauty studio interior"
          loading="lazy"
          decoding="async"
        />
        <div className="aboutCopy">
          <p className="eyebrow">The Atelier Philosophy</p>
          <h2>
            Beauty with Heart, Artistry with <em>Purpose</em>
          </h2>
          <p>
            Bloom Bridal Studio was founded with a singular conviction: your wedding morning should be the most serene, joyful, and confidence-filled hours of your entire life.
          </p>
          <p>
            We don't do cookie-cutter bridal templates. Every look is custom-sculpted around your dress silhouette, face structure, ceremony climate, and natural features.
          </p>
          <p className="script">"A calm morning, a radiant bride, an unforgettable entrance."</p>
          <div className="aboutMetaRow">
            <div>
              <strong>Beverly Hills</strong>
              <small>Private Trial Suites</small>
            </div>
            <div>
              <strong>Worldwide</strong>
              <small>Destination Travel</small>
            </div>
            <div>
              <strong>Sanitary First</strong>
              <small>Medical-Grade Hygiene</small>
            </div>
          </div>
        </div>
        <div className="flowerCard">✿</div>
      </section>

      {/* ── INTERACTIVE BRIDAL PARTY ESTIMATOR (NEW UX FEATURE) ───────────── */}
      <section id="calculator" className="calculatorSection sectionShell">
        <div className="calculatorCard">
          <div className="calcHeader">
            <span className="eyebrow">Interactive Planning Tool</span>
            <h2>Bridal Party Investment Estimator</h2>
            <p>
              Configure your celebration size below for instant, transparent pricing. No hidden fees or surprise morning-of additions.
            </p>
          </div>

          <div className="calcGrid">
            {/* Options Selection */}
            <div className="calcControls">
              {/* Bride Package Selection */}
              <div className="calcGroup">
                <label className="calcLabel">1. Choose Bride Package</label>
                <div className="calcPills">
                  {packages.map((pkg) => (
                    <button
                      key={pkg.title}
                      type="button"
                      onClick={() => setCalcPackage(pkg.title)}
                      className={`calcChoiceBtn ${calcPackage === pkg.title ? "active" : ""}`}
                    >
                      <span className="choiceTitle">{pkg.title}</span>
                      <span className="choicePrice">${pkg.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Bridesmaids Stepper */}
              <div className="calcGroup">
                <div className="stepperRow">
                  <div>
                    <label className="calcLabel">2. Number of Bridesmaids</label>
                    <p className="calcSub">Hair & Makeup styling ($220 / person)</p>
                  </div>
                  <div className="stepper">
                    <button
                      type="button"
                      onClick={() => setCalcBridesmaids((p) => Math.max(0, p - 1))}
                      aria-label="Decrease bridesmaids"
                    >
                      <Minus className="iconNano" />
                    </button>
                    <span className="stepperVal">{calcBridesmaids}</span>
                    <button
                      type="button"
                      onClick={() => setCalcBridesmaids((p) => Math.min(10, p + 1))}
                      aria-label="Increase bridesmaids"
                    >
                      <Plus className="iconNano" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Mothers Stepper */}
              <div className="calcGroup">
                <div className="stepperRow">
                  <div>
                    <label className="calcLabel">3. Mother of Bride / Groom</label>
                    <p className="calcSub">Soft age-defying glam & styling ($190 / person)</p>
                  </div>
                  <div className="stepper">
                    <button
                      type="button"
                      onClick={() => setCalcMothers((p) => Math.max(0, p - 1))}
                      aria-label="Decrease mothers"
                    >
                      <Minus className="iconNano" />
                    </button>
                    <span className="stepperVal">{calcMothers}</span>
                    <button
                      type="button"
                      onClick={() => setCalcMothers((p) => Math.min(4, p + 1))}
                      aria-label="Increase mothers"
                    >
                      <Plus className="iconNano" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add-ons Checkboxes */}
              <div className="calcGroup">
                <label className="calcLabel">4. Optional Luxury Upgrades</label>
                <div className="checkboxGrid">
                  <label className="checkboxCard">
                    <input
                      type="checkbox"
                      checked={calcRehearsal}
                      onChange={(e) => setCalcRehearsal(e.target.checked)}
                    />
                    <div>
                      <span className="checkTitle">Rehearsal Dinner Styling (+$450)</span>
                      <span className="checkSub">Hair & Makeup look for pre-wedding dinner</span>
                    </div>
                  </label>
                  <label className="checkboxCard">
                    <input
                      type="checkbox"
                      checked={calcTouchupArtist}
                      onChange={(e) => setCalcTouchupArtist(e.target.checked)}
                    />
                    <div>
                      <span className="checkTitle">3-Hour Reception Touchup Artist (+$550)</span>
                      <span className="checkSub">Artist remains through ceremony & sunset portraits</span>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Live Pricing Summary */}
            <div className="calcSummary">
              <span className="summaryEyebrow">Estimated Total Investment</span>
              <div className="summaryTotal">
                <span className="dollarSign">$</span>
                <span className="totalNumber">{liveEstimate.toLocaleString()}</span>
              </div>
              <p className="summaryNote">
                Includes all taxes, false lashes, trial (if Signature/Luxe), and on-location travel within Greater Los Angeles.
              </p>

              <div className="summaryBreakdown">
                <div className="breakdownRow">
                  <span>{calcPackage} (Bride)</span>
                  <span>
                    ${calcPackage === "The Essential" ? 950 : calcPackage === "The Signature" ? 1450 : 2250}
                  </span>
                </div>
                {calcBridesmaids > 0 && (
                  <div className="breakdownRow">
                    <span>{calcBridesmaids}x Bridesmaid Hair & Makeup</span>
                    <span>+${calcBridesmaids * 220}</span>
                  </div>
                )}
                {calcMothers > 0 && (
                  <div className="breakdownRow">
                    <span>{calcMothers}x Mother / Family Styling</span>
                    <span>+${calcMothers * 190}</span>
                  </div>
                )}
                {calcRehearsal && (
                  <div className="breakdownRow">
                    <span>Rehearsal Dinner Styling</span>
                    <span>+$450</span>
                  </div>
                )}
                {calcTouchupArtist && (
                  <div className="breakdownRow">
                    <span>Reception Touchup Service</span>
                    <span>+$550</span>
                  </div>
                )}
              </div>

              <button
                type="button"
                className="btn fullField"
                onClick={() => openBookingWithPackage(calcPackage, liveEstimate)}
              >
                Inquire With This Configuration (${liveEstimate.toLocaleString()}) →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── PACKAGES ──────────────────────────────────────────────────────── */}
      <section id="packages" className="packages sectionShell">
        <div className="sectionIntro small">
          <p className="eyebrow">Curated Collections</p>
          <h2>Signature Bridal Packages</h2>
          <p>Transparent inclusions, high-touch luxury, and zero compromise.</p>
        </div>

        <div className="packageCards">
          {packages.map((pack) => (
            <article
              className={pack.featured ? "packageCard featured" : "packageCard"}
              key={pack.title}
            >
              {pack.featured && <div className="badge">Most Loved</div>}
              <div className="packageIcon">✺</div>
              <h3>{pack.title}</h3>
              <p className="packageTag">{pack.tag}</p>
              <ul className="packageItems">
                {pack.items.map((item) => (
                  <li key={item}>
                    <Check className="iconNano textRose" /> {item}
                  </li>
                ))}
              </ul>
              <div className="priceBox">
                <small>Starting at</small>
                <strong>{pack.priceLabel}</strong>
              </div>
              <button
                type="button"
                className="choosePackage"
                onClick={() => openBookingWithPackage(pack.title, pack.price)}
              >
                Select {pack.title.replace("The ", "")}
              </button>
            </article>
          ))}
          <article className="addons">
            <h3>Bridal Party Add-ons</h3>
            <ul>
              <li>Bridesmaid Hair & Makeup: $220</li>
              <li>Mother of Bride/Groom: $190</li>
              <li>Flower Girl Hair & Shimmer: $85</li>
              <li>Rehearsal Dinner Full Look: $450</li>
              <li>Groom Grooming & Anti-Shine: $120</li>
            </ul>
            <p>Custom multi-artist teams available for bridal parties up to 14 guests.</p>
            <button
              type="button"
              className="choosePackage whiteBtn"
              onClick={() => openBookingWithPackage("Custom Bridal Party Package")}
            >
              Build Party Quote
            </button>
          </article>
        </div>
      </section>

      {/* ── BRIDAL BEAUTY JOURNEY ─────────────────────────────────────────── */}
      <section id="journey" className="journey sectionShell">
        <div className="sectionIntro small">
          <p className="eyebrow">Four-Step Blueprint</p>
          <h2>Your Journey to the Altar ✨</h2>
          <p>A seamless, highly organized experience coordinated with your planner.</p>
        </div>
        <div className="steps">
          {journey.map((step) => (
            <article className="step" key={step.no}>
              <div className="stepIcon">
                <Calendar />
              </div>
              <span className="stepNumber">{step.no}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ── MEET THE ARTISTS ──────────────────────────────────────────────── */}
      <section id="artists" className="artists sectionShell">
        <img
          className="artistLead"
          src={IMG.artistLead}
          alt="Lisa Monteiro, Lead bridal artist"
          loading="lazy"
          decoding="async"
        />
        <article className="artistNote">
          <p className="eyebrow">The Atelier Team</p>
          <h2>
            Led by <em>Passion</em>. Driven by Perfection.
          </h2>
          <p>
            Our artists are background-checked, insured, and train continuously in high-fashion editorial techniques.
          </p>
          <strong>Lisa Monteiro</strong>
          <small>Founder & Creative Director</small>
        </article>
        {artists.map((artist) => (
          <article className="artistCard" key={artist.name}>
            <img
              src={artist.image}
              alt={artist.name}
              loading="lazy"
              decoding="async"
            />
            <h3>{artist.name}</h3>
            <p className="artistRole">{artist.role}</p>
            <p className="artistSpecialty">{artist.specialty}</p>
            <span className="artistExp">{artist.experience}</span>
          </article>
        ))}
        <aside className="greenQuote">
          "A team that cares as deeply about your peace of mind as your finished look."
        </aside>
      </section>

      {/* ── LOVE NOTES & REVIEWS ──────────────────────────────────────────── */}
      <section id="reviews" className="reviews sectionShell">
        <div className="sectionIntro small">
          <p className="eyebrow">Love Notes</p>
          <h2>
            From Our Beautiful <em>Brides</em>
          </h2>
          <div className="overallRating">
            <span className="starRow">★★★★★</span>
            <span>4.98 Rating · Verified Reviews</span>
          </div>
        </div>
        <div className="reviewCards">
          {reviews.map((review, index) => (
            <article
              className={`reviewCard ${reviewIndex === index ? "active" : ""}`}
              key={review.name}
            >
              <div className="quote">“</div>
              <div className="stars">★★★★★</div>
              <p className="reviewText">{review.text}</p>
              <div className="reviewAuthor">
                <strong>— {review.name}</strong>
                <small>{review.venue} · {review.date}</small>
              </div>
            </article>
          ))}
          <div className="reviewControls" aria-label="Testimonial controls">
            <button
              type="button"
              onClick={() =>
                setReviewIndex(
                  (reviewIndex + reviews.length - 1) % reviews.length,
                )
              }
              aria-label="Previous testimonial"
            >
              <ChevronLeft />
            </button>
            <span>
              {reviewIndex + 1} / {reviews.length}
            </span>
            <button
              type="button"
              onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)}
              aria-label="Next testimonial"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
        <img
          className="sideBride"
          src={IMG.sideBride}
          alt="Bride holding fresh bouquet"
          loading="lazy"
          decoding="async"
        />
      </section>

      {/* ── PLANNING & FAQ ────────────────────────────────────────────────── */}
      <section id="faq" className="planning sectionShell" aria-labelledby="planning-title">
        <div className="availability">
          <p className="eyebrow">Availability & Inquiries</p>
          <h2 id="planning-title">
            Your Wedding Date Deserves a Calm, Beautiful Plan.
          </h2>
          <p>
            We are currently booking 2026–2027 celebrations across Beverly Hills, Bel-Air, Malibu, Santa Barbara, and destination worldwide.
          </p>
          <div className="availabilityMeta">
            <span>
              <Calendar className="iconMini textGold" /> Weekend dates limited
            </span>
            <span>
              <Sparkles className="iconMini textGold" /> On-location travel ready
            </span>
          </div>
          <button
            type="button"
            className="btn"
            onClick={() => openBookingWithPackage("The Signature")}
          >
            Inquire for Date Availability →
          </button>
        </div>
        <div className="faqList">
          <p className="eyebrow">Frequently Asked Questions</p>
          {faqs.map(([question, answer], index) => (
            <article className="faqItem" key={question}>
              <button
                type="button"
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                aria-expanded={openFaq === index}
              >
                <span>{question}</span>
                <span className="faqToggle">{openFaq === index ? "−" : "+"}</span>
              </button>
              {openFaq === index && <p className="faqAnswer">{answer}</p>}
            </article>
          ))}
        </div>
      </section>

      {/* ── CALL TO ACTION BANNER ─────────────────────────────────────────── */}
      <section id="contact" className="cta">
        <div>
          <h2>Let’s Create Your Dream Wedding Look</h2>
          <p>Your day is one of a kind. Your bridal glow should be unforgettable.</p>
        </div>
        <button
          type="button"
          className="btn btnOutline"
          onClick={() => openBookingWithPackage("The Signature")}
        >
          Check Date Availability →
        </button>
        <p className="ctaPhone">
          Or concierge direct: <strong>(555) 123-4567</strong>
        </p>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="footer sectionShell">
        <div>
          <a
            className="logo footerLogo"
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span>Bloom</span>
            <small>Bridal Studio · Beverly Hills</small>
          </a>
          <p>
            Luxury bridal hair, makeup and styling for modern romantic brides.
          </p>
          <div className="footerBackLink">
            <Link to="/beauty" className="showcaseLink">
              ← Return to 100Web Beauty Showcase
            </Link>
          </div>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="#services" onClick={(e) => handleNavClick(e, "services")}>Services</a>
          <a href="#lookbook" onClick={(e) => handleNavClick(e, "lookbook")}>Lookbook</a>
          <a href="#calculator" onClick={(e) => handleNavClick(e, "calculator")}>Party Estimator</a>
          <a href="#packages" onClick={(e) => handleNavClick(e, "packages")}>Packages</a>
          <a href="#artists" onClick={(e) => handleNavClick(e, "artists")}>The Artists</a>
          <a href="#faq" onClick={(e) => handleNavClick(e, "faq")}>FAQ</a>
        </div>

        <div>
          <h3>Atelier Suite</h3>
          <p>
            123 Blossom Lane, Suite 400
            <br />
            Beverly Hills, CA 90210
          </p>
          <p>(555) 123-4567</p>
          <p>concierge@bloombridalstudio.com</p>
          <p>Trial Hours: Tue – Sun | 9am – 6pm</p>
        </div>

        <div>
          <h3>Follow Along</h3>
          <div className="instaGrid">
            {[IMG.footer1, IMG.footer2, IMG.footer3, IMG.footer4, IMG.footer5, IMG.footer6].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Bloom Bridal Studio real wedding preview"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>

        <div>
          <h3>Stay in Bloom</h3>
          <p>Receive seasonal bridal trend forecasts, skincare timelines, and booking updates.</p>
          <form
            className="subscribe"
            onSubmit={(event) => {
              event.preventDefault();
              alert("Thank you! You are now subscribed to the Bloom Bridal Gazette.");
            }}
          >
            <label htmlFor="bloom-email">Email address</label>
            <input
              id="bloom-email"
              type="email"
              placeholder="bride@example.com"
              required
            />
            <button type="submit">Join Bridal Gazette</button>
          </form>
        </div>
      </footer>

      {/* ── INTERACTIVE CONSULTATION & BOOKING MODAL ──────────────────────── */}
      {bookingOpen && (
        <div className="modalBackdrop" onClick={() => setBookingOpen(false)}>
          <div className="bookingModal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modalClose"
              type="button"
              onClick={() => setBookingOpen(false)}
              aria-label="Close inquiry window"
            >
              ×
            </button>

            {isSubmitted ? (
              <div className="submittedSuccess">
                <div className="heartSeal">
                  <Heart className="heartIcon" />
                </div>
                <h2>Your Bridal Inquiry Has Been Received! ✨</h2>
                <p className="successText">
                  Thank you, <strong>{bookingData.name || "Beautiful Bride"}</strong>. We have placed a temporary 48-hour pencil hold on your wedding date for <strong>{bookingData.date}</strong>.
                </p>
                <div className="summaryPillBox">
                  <p><strong>Package Inquired:</strong> {bookingData.package}</p>
                  <p><strong>Bridal Party:</strong> {bookingData.partySize}</p>
                  <p><strong>Venue Location:</strong> {bookingData.venue}</p>
                </div>
                <p className="successSub">
                  Creative Director Lisa Monteiro will review our team roster and email your tailored timeline and trial availability within 24 business hours.
                </p>
                <button
                  type="button"
                  className="btn"
                  onClick={() => setBookingOpen(false)}
                >
                  Return to Studio
                </button>
              </div>
            ) : (
              <div>
                <span className="eyebrow">Concierge Date Inquiry</span>
                <h2>Let’s Celebrate Your Date.</h2>
                <p className="modalIntro">
                  Tell us about your wedding date, venue, and vision. We will confirm our senior artist availability right away.
                </p>

                <form className="bookingForm" onSubmit={handleBookingSubmit}>
                  <label>
                    Your Full Name *
                    <input
                      name="name"
                      required
                      placeholder="e.g. Lauren Hayes"
                      value={bookingData.name}
                      onChange={(e) => setBookingData({ ...bookingData, name: e.target.value })}
                    />
                  </label>
                  <label>
                    Email Address *
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="bride@example.com"
                      value={bookingData.email}
                      onChange={(e) => setBookingData({ ...bookingData, email: e.target.value })}
                    />
                  </label>
                  <label>
                    Mobile Phone *
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="(555) 000-0000"
                      value={bookingData.phone}
                      onChange={(e) => setBookingData({ ...bookingData, phone: e.target.value })}
                    />
                  </label>
                  <label>
                    Wedding Celebration Date *
                    <input
                      type="date"
                      name="date"
                      required
                      value={bookingData.date}
                      onChange={(e) => setBookingData({ ...bookingData, date: e.target.value })}
                    />
                  </label>
                  <label>
                    Wedding Venue / City *
                    <input
                      name="venue"
                      required
                      placeholder="e.g. Greystone Mansion, Beverly Hills"
                      value={bookingData.venue}
                      onChange={(e) => setBookingData({ ...bookingData, venue: e.target.value })}
                    />
                  </label>
                  <label>
                    Selected Package
                    <select
                      name="package"
                      value={bookingData.package}
                      onChange={(e) => setBookingData({ ...bookingData, package: e.target.value })}
                    >
                      <option value="The Signature ($1,450)">The Signature ($1,450)</option>
                      <option value="The Luxe All-Day ($2,250)">The Luxe All-Day ($2,250)</option>
                      <option value="The Essential ($950)">The Essential ($950)</option>
                      <option value="Custom Bridal Party Package">Custom Bridal Party Package</option>
                    </select>
                  </label>
                  <label>
                    Estimated Bridal Party Count
                    <input
                      name="partySize"
                      placeholder="e.g. Bride + 4 Bridesmaids + 1 Mother"
                      value={bookingData.partySize}
                      onChange={(e) => setBookingData({ ...bookingData, partySize: e.target.value })}
                    />
                  </label>
                  <label className="fullField">
                    Tell Us About Your Style & Aesthetic Vision
                    <textarea
                      name="vision"
                      rows={3}
                      placeholder="Your dress neckline, hairstyle preferences, timeline notes, or anything else you’d love us to know..."
                      value={bookingData.visionNotes}
                      onChange={(e) => setBookingData({ ...bookingData, visionNotes: e.target.value })}
                    />
                  </label>
                  <button className="btn fullField" type="submit">
                    Send Priority Date Inquiry <span>→</span>
                  </button>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

const css = `
  :root {
    --cream: #faf6f3;
    --ivory: #ffffff;
    --blush: #f5e4e7;
    --blush-soft: #fbf2f4;
    --coral: #c47385;
    --coral-dark: #8d4457;
    --gold: #c9a063;
    --sage: #7a8e80;
    --ink: #2e2428;
    --muted: #6d5f65;
    --line: rgba(196, 115, 133, 0.2);
    --shadow: 0 24px 70px rgba(78, 38, 49, 0.08);
  }

  * { box-sizing: border-box; }

  body { margin: 0; background: var(--cream); }

  .bloomPage {
    min-height: 100vh;
    color: var(--ink);
    background:
      radial-gradient(circle at 0 10%, rgba(245, 228, 231, 0.55), transparent 22rem),
      radial-gradient(circle at 100% 12%, rgba(240, 224, 214, 0.5), transparent 24rem),
      linear-gradient(180deg, #fdfbfb 0%, #faf6f6 45%, #f9f2f2 100%);
    font-family: "Avenir Next", Avenir, "Segoe UI", system-ui, sans-serif;
    overflow-x: clip;
    isolation: isolate;
  }

  .bloomPage section[id] { scroll-margin-top: 92px; }
  .bloomPage button, .bloomPage input, .bloomPage select, .bloomPage textarea { font: inherit; }
  .bloomPage a:focus-visible, .bloomPage button:focus-visible, .bloomPage input:focus-visible, .bloomPage select:focus-visible, .bloomPage textarea:focus-visible { outline: 3px solid rgba(201,160,99,.5); outline-offset: 3px; }

  .sectionShell { width: min(1280px, calc(100% - 48px)); margin-inline: auto; }

  /* Top Ticker */
  .topTicker {
    background: var(--coral-dark);
    color: #fdfbf9;
    padding: 8px 0;
    border-bottom: 1px solid rgba(201, 160, 99, 0.25);
    font-size: 11px;
    letter-spacing: 0.04em;
    position: relative;
    z-index: 52;
  }
  .tickerContent { display: flex; justify-content: space-between; align-items: center; gap: 12px; }
  .tickerItem { display: flex; align-items: center; gap: 8px; font-weight: 700; letter-spacing: 0.08em; }
  .tickerDot { width: 7px; height: 7px; border-radius: 50%; background: #48bb78; animation: pulse 2s infinite; }
  .tickerMeta { display: flex; align-items: center; gap: 16px; opacity: 0.92; font-weight: 600; font-size: 0.72rem; }
  .phoneLink { display: flex; align-items: center; gap: 4px; color: #f5e4e7; text-decoration: none; transition: color .2s; }
  .phoneLink:hover { color: white; }
  @keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

  /* Navigation Wrapper */
  .navWrap {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 50;
    background: rgba(253, 251, 250, 0.92);
    border-bottom: 1px solid rgba(201, 160, 99, 0.22);
    box-shadow: 0 4px 20px rgba(78, 38, 49, 0.04);
    backdrop-filter: blur(16px);
    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .navWrap.scrolled {
    background: rgba(253, 251, 250, 0.98);
    box-shadow: 0 10px 30px rgba(78, 38, 49, 0.08);
    border-bottom-color: rgba(201, 160, 99, 0.35);
  }
  .navContainer {
    width: min(1320px, calc(100% - 48px));
    margin-inline: auto;
    min-height: 74px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 16px;
    transition: min-height 0.3s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .navWrap.scrolled .navContainer {
    min-height: 64px;
  }

  /* Logo */
  .logo {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    line-height: 1;
    transition: transform 0.2s ease;
    flex-shrink: 0;
  }
  .logo:hover {
    transform: scale(1.02);
  }
  .logoMain {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 2.1rem;
    font-weight: 500;
    letter-spacing: -0.04em;
    color: var(--coral-dark);
  }
  .logoSub {
    color: var(--gold);
    text-transform: uppercase;
    letter-spacing: 0.2em;
    font-weight: 700;
    font-size: 0.58rem;
    margin-top: 2px;
  }

  /* Nav Links Capsule */
  .navLinks {
    display: flex;
    align-items: center;
    gap: 3px;
    background: rgba(255, 255, 255, 0.72);
    padding: 4px 6px;
    border-radius: 99px;
    border: 1px solid rgba(201, 160, 99, 0.24);
    box-shadow: inset 0 1px 3px rgba(78, 38, 49, 0.03);
  }
  .navLinks a {
    color: var(--muted);
    text-transform: uppercase;
    font-size: 0.71rem;
    letter-spacing: 0.06em;
    font-weight: 700;
    text-decoration: none;
    padding: 7px 13px;
    border-radius: 99px;
    transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
    white-space: nowrap;
    position: relative;
  }
  .navLinks a:hover {
    color: var(--coral-dark);
    background: rgba(245, 228, 231, 0.5);
  }
  .navLinks a.active {
    color: var(--coral-dark);
    background: var(--blush);
    box-shadow: 0 2px 8px rgba(196, 115, 133, 0.2);
  }

  /* Nav Actions */
  .navActions {
    display: flex;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
  }
  .backToHub {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    color: var(--coral-dark);
    text-decoration: none;
    padding: 8px 14px;
    border-radius: 99px;
    border: 1px solid rgba(201, 160, 99, 0.35);
    background: rgba(255, 255, 255, 0.85);
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: all 0.2s ease;
    white-space: nowrap;
  }
  .backToHub:hover {
    background: var(--blush);
    border-color: var(--coral);
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(78, 38, 49, 0.05);
  }
  .bookTop {
    border: 0;
    background: linear-gradient(135deg, var(--coral), var(--coral-dark));
    color: white;
    border-radius: 99px;
    padding: 9px 18px;
    text-transform: uppercase;
    font-size: 0.72rem;
    font-weight: 800;
    letter-spacing: 0.07em;
    display: inline-flex;
    align-items: center;
    gap: 7px;
    box-shadow: 0 6px 18px rgba(196, 115, 133, 0.26);
    cursor: pointer;
    white-space: nowrap;
    transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .bookTop:hover {
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(141, 68, 87, 0.32);
    filter: brightness(1.05);
  }
  .menuButton {
    display: none;
    width: 40px;
    height: 40px;
    place-items: center;
    border: 1px solid rgba(201, 160, 99, 0.35);
    border-radius: 50%;
    background: white;
    color: var(--coral-dark);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .menuButton:hover {
    background: var(--blush);
    border-color: var(--coral);
  }

  /* Mobile Backdrop & Drawer */
  .mobileBackdrop {
    position: fixed;
    inset: 0;
    background: rgba(46, 36, 40, 0.45);
    backdrop-filter: blur(4px);
    z-index: 45;
    animation: fadeIn 0.2s ease;
  }
  .mobileNav {
    position: absolute;
    left: 16px;
    right: 16px;
    top: calc(100% + 10px);
    display: flex;
    flex-direction: column;
    gap: 12px;
    padding: 20px;
    border: 1px solid rgba(201, 160, 99, 0.35);
    border-radius: 18px;
    background: rgba(255, 252, 249, 0.98);
    box-shadow: 0 20px 50px rgba(78, 38, 49, 0.2);
    backdrop-filter: blur(20px);
    z-index: 50;
    animation: slideDown 0.25s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .mobileNavHeader {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--line);
  }
  .mobileNavTitle {
    font-size: 0.72rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--coral-dark);
  }
  .mobileCloseBtn {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 1px solid var(--line);
    background: white;
    color: var(--coral-dark);
    display: grid;
    place-items: center;
    cursor: pointer;
  }
  .mobileNavLinks {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
  .mobileNavLinks a {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 14px;
    border-radius: 10px;
    color: var(--ink);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    transition: all 0.2s ease;
  }
  .mobileNavLinks a:hover,
  .mobileNavLinks a.active {
    color: var(--coral-dark);
    background: var(--blush);
  }
  .mobileNavArrow {
    color: var(--coral);
    font-size: 0.9rem;
  }

  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .btn {
    border: 0;
    background: var(--coral);
    color: white;
    border-radius: 99px;
    padding: 13px 24px;
    text-transform: uppercase;
    font-size: 0.74rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    box-shadow: 0 12px 24px rgba(196, 115, 133, 0.22);
    cursor: pointer;
    transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
  }

  .bookTop:hover, .btn:hover { transform: translateY(-2px); box-shadow: 0 16px 30px rgba(196, 115, 133, 0.32); background: var(--coral-dark); }
  .btnOutline:hover { background: white; box-shadow: 0 12px 26px rgba(78, 38, 49, 0.08); color: var(--coral); }
  .btnOutline { background: rgba(255,255,255,0.7); color: var(--coral-dark); border: 1px solid rgba(201, 160, 99, 0.45); box-shadow: none; }
  .whiteBtn { background: white !important; color: var(--coral-dark) !important; border-color: white !important; }

  /* Hero Section */
  .hero { min-height: calc(100vh - 120px); max-height: 720px; display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 48px; align-items: center; padding: 20px 0 48px; position: relative; }
  .hero::before { content: ""; position: absolute; left: -14vw; top: 6%; width: 32vw; height: 75%; border-radius: 50%; background: radial-gradient(circle, rgba(245, 228, 231, 0.45), transparent 68%); pointer-events: none; }
  .eyebrow { color: var(--coral); text-transform: uppercase; font-size: 0.74rem; letter-spacing: 0.17em; font-weight: 800; margin: 0 0 16px; }
  .hero h1, h2 { font-family: Georgia, "Times New Roman", serif; font-weight: 500; letter-spacing: -0.055em; line-height: 0.98; margin: 0; }
  .hero h1 { font-size: clamp(3.4rem, 5.2vw, 5.2rem); max-width: 620px; }
  h2 { font-size: clamp(2.4rem, 4.5vw, 3.8rem); }
  em { color: var(--coral); font-style: italic; }
  .goldLine { width: 72px; height: 2px; background: var(--gold); margin: 20px 0; }
  .lead { max-width: 480px; color: var(--muted); font-size: 1.05rem; line-height: 1.75; }
  .heroActions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 24px; }

  /* Bride Avatars Social Proof Under CTAs */
  .heroSocialProof {
    margin-top: 22px;
    display: flex;
    align-items: center;
    gap: 14px;
    padding-top: 16px;
    border-top: 1px solid rgba(201, 160, 99, 0.24);
  }
  .avatarCluster {
    display: flex;
    align-items: center;
  }
  .avatarImg {
    width: 38px;
    height: 38px;
    border-radius: 50%;
    object-fit: cover;
    border: 2px solid white;
    box-shadow: 0 4px 10px rgba(78, 38, 49, 0.15);
    margin-left: -10px;
    transition: transform 0.25s ease, z-index 0.25s ease;
  }
  .avatarImg:first-child {
    margin-left: 0;
  }
  .avatarImg:hover {
    transform: translateY(-3px) scale(1.12);
    z-index: 4;
  }
  .socialProofText {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }
  .starRating {
    display: flex;
    align-items: center;
    gap: 3px;
  }
  .starFilled {
    width: 13px;
    height: 13px;
    fill: var(--gold);
    color: var(--gold);
  }
  .ratingScore {
    font-size: 0.82rem;
    font-weight: 800;
    color: var(--coral-dark);
    margin-left: 4px;
    font-family: Georgia, serif;
  }
  .socialProofSub {
    font-size: 0.74rem;
    color: var(--muted);
    margin: 0;
    line-height: 1.3;
  }
  .socialProofSub strong {
    color: var(--ink);
    font-weight: 700;
  }

  /* French Architectural Arched Window Frame */
  .heroArt { position: relative; display: flex; justify-content: center; align-items: center; }
  .windowFrame {
    position: relative;
    width: min(100%, 450px);
    height: 520px;
    padding: 9px;
    border: 2px solid var(--gold);
    border-radius: 999px 999px 24px 24px;
    background: rgba(255, 255, 255, 0.65);
    box-shadow: 0 24px 64px rgba(78, 38, 49, 0.12);
    backdrop-filter: blur(10px);
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }
  .windowFrame:hover {
    transform: translateY(-3px);
    box-shadow: 0 30px 75px rgba(78, 38, 49, 0.16);
  }
  .windowInner {
    width: 100%;
    height: 100%;
    border-radius: 999px 999px 18px 18px;
    overflow: hidden;
    position: relative;
    border: 1.5px solid rgba(201, 160, 99, 0.4);
  }
  .windowInner img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 18%;
    display: block;
    transition: transform 0.7s ease;
  }
  .windowInner:hover img {
    transform: scale(1.03);
  }
  .windowInner::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 45%, rgba(196, 115, 133, 0.05) 100%);
    pointer-events: none;
    z-index: 2;
  }

  /* Sweeping Parisian Sunlight Sheen */
  .windowSheen {
    position: absolute;
    top: -60%;
    left: -130%;
    width: 75%;
    height: 220%;
    background: linear-gradient(
      110deg,
      transparent 0%,
      rgba(255, 255, 255, 0.05) 30%,
      rgba(255, 255, 255, 0.42) 50%,
      rgba(253, 242, 222, 0.5) 54%,
      rgba(255, 255, 255, 0.18) 60%,
      transparent 80%
    );
    transform: rotate(28deg);
    pointer-events: none;
    z-index: 3;
    animation: sunlightSheen 7s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }

  @keyframes sunlightSheen {
    0%, 30% {
      left: -130%;
      opacity: 0;
    }
    35% {
      opacity: 1;
    }
    55% {
      left: 170%;
      opacity: 1;
    }
    60%, 100% {
      left: 170%;
      opacity: 0;
    }
  }

  /* Luxury The Knot Award Medallion Seal */
  .award {
    position: absolute;
    right: -24px;
    top: 30px;
    z-index: 5;
    width: 144px;
    height: 144px;
    border-radius: 50%;
    padding: 5px;
    background: linear-gradient(145deg, #ffffff 0%, #fcf7f1 45%, #f6e7d6 100%);
    border: 2px solid var(--gold);
    box-shadow:
      0 14px 34px rgba(78, 38, 49, 0.14),
      0 4px 14px rgba(201, 160, 99, 0.28),
      inset 0 0 10px rgba(255, 255, 255, 0.9);
    backdrop-filter: blur(12px);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.35s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.35s ease;
    animation: floatAward 5.5s ease-in-out infinite;
    cursor: default;
    user-select: none;
  }
  .award:hover {
    transform: translateY(-4px) scale(1.06) rotate(-2deg);
    box-shadow:
      0 20px 45px rgba(78, 38, 49, 0.18),
      0 6px 20px rgba(201, 160, 99, 0.38);
  }
  .awardInnerRing {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 1px dashed rgba(201, 160, 99, 0.65);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 6px;
    background: radial-gradient(circle, rgba(255, 255, 255, 0.96) 45%, rgba(253, 248, 243, 0.88) 100%);
    position: relative;
  }
  .awardInnerRing::before {
    content: "";
    position: absolute;
    inset: 3px;
    border-radius: 50%;
    border: 1px solid rgba(201, 160, 99, 0.22);
    pointer-events: none;
  }
  .awardStars {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3px;
    margin-bottom: 2px;
  }
  .awardStar {
    width: 8px;
    height: 8px;
    fill: var(--gold);
    color: var(--gold);
    opacity: 0.85;
  }
  .awardStarMain {
    width: 10px;
    height: 10px;
    fill: var(--gold);
    color: var(--gold);
    transform: translateY(-1px);
  }
  .awardBrand {
    font-family: Inter, sans-serif;
    font-size: 0.64rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.16em;
    color: var(--coral-dark);
    line-height: 1.1;
  }
  .awardYear {
    font-family: Georgia, "Times New Roman", serif;
    font-size: 1.65rem;
    font-weight: 700;
    letter-spacing: -0.02em;
    color: var(--gold);
    line-height: 1;
    margin: 1px 0;
    text-shadow: 0 1px 2px rgba(201, 160, 99, 0.15);
  }
  .awardTitle {
    font-family: Inter, sans-serif;
    font-size: 0.55rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.11em;
    color: var(--coral-dark);
    line-height: 1.1;
  }
  .awardPill {
    margin-top: 3px;
    font-size: 0.52rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: white;
    background: linear-gradient(135deg, var(--coral), var(--coral-dark));
    padding: 1px 6px;
    border-radius: 99px;
    box-shadow: 0 2px 5px rgba(196, 115, 133, 0.25);
  }

  @keyframes floatAward {
    0%, 100% {
      transform: translateY(0px) rotate(0deg);
    }
    50% {
      transform: translateY(-5px) rotate(1.2deg);
    }
  }

  /* Services Bar */
  .serviceBar { margin-top: 40px; position: relative; z-index: 5; display: grid; grid-template-columns: repeat(4, 1fr); background: rgba(255, 255, 255, 0.96); border: 1px solid var(--line); border-radius: 12px; box-shadow: var(--shadow); backdrop-filter: blur(12px); }
  .serviceItem { display: grid; grid-template-columns: auto 1fr; align-items: start; gap: 16px; padding: 26px 28px; border-right: 1px solid var(--line); }
  .serviceItem:last-child { border-right: 0; }
  .serviceIcon { color: var(--coral); padding-top: 2px; }
  h3 { margin: 0 0 8px; text-transform: uppercase; letter-spacing: .08em; font-size: .88rem; font-weight: 700; color: var(--ink); }
  p { color: var(--muted); line-height: 1.65; margin: 0; }
  .serviceItem p { font-size: .85rem; }
  .serviceSpecs { margin-top: 10px; display: flex; flex-direction: column; gap: 3px; font-size: 0.75rem; }
  .specTag { font-weight: 700; color: var(--coral-dark); display: inline-flex; align-items: center; gap: 4px; }
  .specTagSub { color: var(--muted); font-size: 0.7rem; }

  /* Gallery / Lookbook */
  .gallery { display: grid; grid-template-columns: 280px 1fr; gap: 42px; align-items: start; padding: 78px 0 42px; }
  .sectionIntro p:not(.eyebrow) { margin: 16px 0; font-size: 0.95rem; }
  .lookbookFilter { display: flex; flex-direction: column; gap: 8px; margin-top: 24px; }
  .filterBtn { text-align: left; padding: 10px 14px; border: 1px solid var(--line); border-radius: 6px; background: white; color: var(--ink); font-size: 0.78rem; font-weight: 700; text-transform: uppercase; cursor: pointer; transition: all .2s; }
  .filterBtn.active { background: var(--coral); color: white; border-color: var(--coral); box-shadow: 0 4px 12px rgba(196,115,133,0.25); }

  .galleryGrid { display: grid; grid-template-columns: 1.05fr .8fr 1.05fr .75fr; grid-auto-rows: 155px; gap: 14px; }
  .galleryCard { position: relative; border-radius: 10px; overflow: hidden; box-shadow: 0 12px 30px rgba(70, 45, 32, .1); cursor: pointer; }
  .galleryCard img { width: 100%; height: 100%; object-fit: cover; object-position: center 20%; transition: transform .4s ease; }
  .galleryCard:hover img { transform: scale(1.05); }
  .galleryOverlay { position: absolute; inset: 0; background: linear-gradient(180deg, transparent 40%, rgba(46,36,40,0.92) 100%); display: flex; flex-direction: column; justify-content: flex-end; padding: 14px; color: white; opacity: 0.95; transition: opacity .2s; }
  .overlayCategory { font-size: 0.65rem; font-weight: 800; letter-spacing: 0.12em; color: var(--gold); }
  .overlayTitle { font-family: Georgia, serif; font-size: 0.95rem; font-weight: 700; color: white; margin: 2px 0; }
  .overlaySub { font-size: 0.7rem; color: rgba(255,255,255,0.8); margin: 0; }
  .inspectPrompt { font-size: 0.65rem; font-weight: 700; color: var(--blush); margin-top: 6px; display: inline-flex; align-items: center; gap: 4px; }
  .galleryGrid .tall { grid-row: span 2; }
  .galleryGrid .wide { grid-column: span 1; grid-row: span 2; }

  /* Lookbook Modal Lightbox */
  .lookbookModal { position: relative; width: min(840px, 94vw); max-height: 90vh; overflow-y: auto; background: white; border-radius: 16px; border: 1px solid var(--line); box-shadow: 0 35px 100px rgba(46,36,40,0.3); }
  .lookbookModalContent { display: grid; grid-template-columns: 1.1fr 1fr; }
  .lookbookModalImg img { width: 100%; height: 100%; min-height: 380px; object-fit: cover; }
  .lookbookModalDetails { padding: 36px; display: flex; flex-direction: column; justify-content: center; }
  .lookbookVenue { display: flex; align-items: center; gap: 6px; font-size: 0.85rem; font-weight: 600; color: var(--muted); margin: 6px 0 14px; }
  .lookbookDesc { font-size: 0.92rem; line-height: 1.6; color: var(--ink); margin-bottom: 20px; }
  .lookbookMetaBox { background: var(--blush-soft); border: 1px solid var(--line); border-radius: 8px; padding: 14px; margin-bottom: 24px; font-size: 0.82rem; }
  .lookbookMetaBox p { margin: 4px 0; }

  /* About */
  .about { display: grid; grid-template-columns: 1.05fr .85fr 180px; gap: 34px; align-items: center; padding: 32px 0 70px; }
  .studioImg { width: 100%; min-height: 320px; height: 100%; object-fit: cover; border-radius: 0 40px 0 0; box-shadow: var(--shadow); }
  .aboutCopy { padding: 20px 0; }
  .aboutCopy p { margin-bottom: 14px; font-size: 0.95rem; }
  .script { font-family: Georgia, serif; font-style: italic; color: var(--coral) !important; font-size: 1.25rem; }
  .aboutMetaRow { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 24px; border-top: 1px solid var(--line); padding-top: 18px; }
  .aboutMetaRow strong { display: block; font-size: 0.85rem; color: var(--ink); }
  .aboutMetaRow small { font-size: 0.72rem; color: var(--muted); }
  .flowerCard { height: 260px; display: grid; place-items: center; font-size: 7rem; color: var(--coral); background: rgba(255,255,255,.72); border-radius: 90px 0 0 0; border: 1px solid var(--line); }

  /* Interactive Party Estimator (Calculator) */
  .calculatorSection { padding: 40px 0 80px; }
  .calculatorCard { background: white; border: 1px solid var(--line); border-radius: 20px; padding: 42px; box-shadow: var(--shadow); }
  .calcHeader { max-width: 680px; margin-bottom: 32px; }
  .calcHeader p { font-size: 0.95rem; margin-top: 8px; }
  .calcGrid { display: grid; grid-template-columns: 1.2fr 0.8fr; gap: 40px; align-items: start; }
  .calcControls { display: flex; flex-direction: column; gap: 24px; }
  .calcGroup { border-bottom: 1px solid var(--line); padding-bottom: 20px; }
  .calcGroup:last-child { border-bottom: 0; }
  .calcLabel { display: block; font-size: 0.85rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: var(--ink); margin-bottom: 8px; }
  .calcSub { font-size: 0.78rem; color: var(--muted); margin: 0; }
  .calcPills { display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 10px; }
  .calcChoiceBtn { border: 1px solid var(--line); background: var(--cream); border-radius: 8px; padding: 10px; text-align: center; cursor: pointer; transition: all .2s; }
  .calcChoiceBtn.active { background: var(--coral); color: white; border-color: var(--coral); box-shadow: 0 4px 14px rgba(196,115,133,0.25); }
  .choiceTitle { display: block; font-size: 0.75rem; font-weight: 800; }
  .choicePrice { display: block; font-size: 0.85rem; font-family: Georgia, serif; font-weight: 700; margin-top: 2px; }
  .stepperRow { display: flex; justify-content: space-between; align-items: center; }
  .stepper { display: flex; align-items: center; gap: 12px; background: var(--blush-soft); border: 1px solid var(--line); border-radius: 99px; padding: 4px 10px; }
  .stepper button { width: 28px; height: 28px; border-radius: 50%; border: 1px solid var(--line); background: white; color: var(--coral-dark); cursor: pointer; display: grid; place-items: center; }
  .stepperVal { font-weight: 800; font-size: 0.95rem; width: 20px; text-align: center; }
  .checkboxGrid { display: grid; gap: 10px; margin-top: 10px; }
  .checkboxCard { display: flex; align-items: center; gap: 12px; background: var(--cream); border: 1px solid var(--line); border-radius: 8px; padding: 12px; cursor: pointer; }
  .checkboxCard input { width: 18px; height: 18px; accent-color: var(--coral); }
  .checkTitle { display: block; font-size: 0.82rem; font-weight: 700; color: var(--ink); }
  .checkSub { display: block; font-size: 0.72rem; color: var(--muted); }

  .calcSummary { background: linear-gradient(145deg, #faedf0, #fdfbf9); border: 1px solid var(--line); border-radius: 16px; padding: 32px; box-shadow: 0 12px 30px rgba(78,38,49,0.06); }
  .summaryEyebrow { font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.12em; color: var(--coral); display: block; }
  .summaryTotal { display: flex; align-items: baseline; gap: 2px; margin: 6px 0; }
  .dollarSign { font-family: Georgia, serif; font-size: 2rem; font-weight: 700; color: var(--coral-dark); }
  .totalNumber { font-family: Georgia, serif; font-size: 3.5rem; font-weight: 700; color: var(--ink); letter-spacing: -0.04em; }
  .summaryNote { font-size: 0.75rem; color: var(--muted); line-height: 1.4; margin-bottom: 20px; border-bottom: 1px solid var(--line); padding-bottom: 14px; }
  .summaryBreakdown { display: flex; flex-direction: column; gap: 8px; font-size: 0.82rem; margin-bottom: 24px; }
  .breakdownRow { display: flex; justify-content: space-between; color: var(--ink); font-weight: 600; }
  .breakdownRow span:last-child { color: var(--coral-dark); font-weight: 700; }

  /* Packages */
  .packages { padding: 16px 0 70px; }
  .packageCards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; align-items: stretch; }
  .packageCard, .addons { position: relative; text-align: center; padding: 34px 22px; background: rgba(255,255,255,.95); border: 1px solid var(--line); border-radius: 12px; box-shadow: 0 18px 42px rgba(70,45,32,.08); display: flex; flex-direction: column; justify-content: space-between; }
  .packageCard.featured { border: 2px solid var(--coral); transform: translateY(-10px); box-shadow: 0 24px 50px rgba(196,115,133,0.18); }
  .badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--coral); color: white; padding: 6px 20px; border-radius: 99px; text-transform: uppercase; letter-spacing: .12em; font-size: .68rem; font-weight: 800; }
  .packageIcon { color: var(--gold); font-size: 2rem; margin-bottom: 6px; }
  .packageTag { font-size: 0.78rem; color: var(--muted); margin-bottom: 16px; min-height: 38px; }
  .packageItems { text-align: left; list-style: none; padding: 0; margin: 0 0 20px; font-size: 0.82rem; color: var(--ink); display: flex; flex-direction: column; gap: 10px; }
  .packageItems li { display: flex; align-items: start; gap: 8px; line-height: 1.4; }
  .priceBox { border-top: 1px solid var(--line); padding-top: 14px; margin-bottom: 16px; }
  .packageCard strong { display: block; color: var(--coral-dark); font-family: Georgia, serif; font-size: 2.2rem; }
  .packageCard small { color: var(--muted); text-transform: uppercase; letter-spacing: .12em; font-size: 0.68rem; font-weight: 800; }
  .choosePackage { width: 100%; padding: 12px 14px; border: 1px solid var(--line); border-radius: 4px; background: var(--blush-soft); color: var(--coral-dark); text-transform: uppercase; font-size: .72rem; font-weight: 800; letter-spacing: .08em; cursor: pointer; transition: all .2s ease; }
  .choosePackage:hover { background: var(--coral); color: white; }
  .addons { background: var(--sage); color: white; text-align: left; }
  .addons h3 { color: white; }
  .addons ul { padding-left: 20px; margin: 12px 0; color: rgba(255,255,255,0.9); font-size: 0.85rem; line-height: 1.8; }
  .addons p { color: rgba(255,255,255,0.85); font-size: 0.8rem; margin-bottom: 16px; }

  /* Journey */
  .journey { display: grid; grid-template-columns: 260px 1fr; gap: 50px; padding: 20px 0 68px; }
  .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; position: relative; }
  .steps::before { content: ""; position: absolute; top: 32px; left: 8%; right: 8%; height: 1px; background: var(--gold); opacity: .6; }
  .step { position: relative; z-index: 1; }
  .stepIcon { width: 64px; aspect-ratio: 1; border: 1px solid var(--gold); background: var(--cream); color: var(--gold); border-radius: 50%; display: grid; place-items: center; margin-bottom: 16px; }
  .stepNumber { font-family: Georgia, serif; color: var(--coral); font-size: 1.8rem; font-weight: 700; display: block; margin-bottom: 4px; }

  /* Artists */
  .artists { display: grid; grid-template-columns: 1fr .95fr repeat(3, .82fr) .7fr; gap: 16px; align-items: stretch; padding: 10px 0 50px; }
  .artistLead { width: 100%; height: 100%; object-fit: cover; object-position: center 20%; border-radius: 0 16px 0 0; min-height: 250px; }
  .artistNote, .artistCard, .greenQuote { background: rgba(255, 255, 255, .94); border: 1px solid var(--line); border-radius: 10px; box-shadow: 0 10px 28px rgba(50, 30, 38, .06); padding: 22px; }
  .artistNote h2 { font-size: 2.2rem; }
  .artistNote small { display: block; color: var(--muted); margin-top: 4px; font-size: 0.8rem; }
  .artistCard { text-align: center; padding: 0 0 20px; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; }
  .artistCard img { width: 100%; height: 160px; object-fit: cover; object-position: center 20%; margin-bottom: 14px; }
  .artistRole { font-size: 0.72rem; font-weight: 700; text-transform: uppercase; color: var(--coral); margin: 2px 0 4px; }
  .artistSpecialty { font-size: 0.75rem; color: var(--muted); line-height: 1.4; padding: 0 10px; margin-bottom: 8px; }
  .artistExp { font-size: 0.68rem; font-weight: 700; color: var(--ink); background: var(--blush-soft); padding: 3px 8px; border-radius: 99px; display: inline-block; margin: 0 auto; }
  .greenQuote { background: var(--sage); color: white; display: grid; place-items: center; text-align: center; font-family: Georgia, serif; font-size: 1.6rem; line-height: 1.3; }

  /* Reviews */
  .reviews { display: grid; grid-template-columns: 260px 1fr 180px; gap: 30px; align-items: center; padding: 10px 0 54px; }
  .overallRating { margin-top: 14px; font-size: 0.82rem; font-weight: 700; color: var(--ink); }
  .starRow { color: var(--gold); display: block; font-size: 1.2rem; margin-bottom: 2px; }
  .reviewCards { display: grid; grid-template-columns: repeat(3, 1fr); background: rgba(255, 255, 255, .95); border: 1px solid var(--line); box-shadow: var(--shadow); border-radius: 12px; overflow: hidden; }
  .reviewCard { padding: 30px; border-right: 1px solid var(--line); display: flex; flex-direction: column; justify-content: space-between; }
  .reviewCard:last-child { border-right: 0; }
  .quote { color: var(--coral); font-family: Georgia, serif; font-size: 3.8rem; height: 30px; line-height: 1; }
  .stars { color: var(--gold); letter-spacing: .08em; margin: 10px 0; font-size: 0.9rem; }
  .reviewText { font-size: 0.88rem; line-height: 1.6; color: var(--ink); margin-bottom: 16px; font-style: italic; }
  .reviewAuthor strong { display: block; color: var(--coral-dark); font-size: 0.9rem; }
  .reviewAuthor small { color: var(--muted); font-size: 0.72rem; }
  .sideBride { width: 100%; height: 280px; object-fit: cover; border-radius: 999px 999px 10px 10px; }
  .reviewControls { display: none; }

  /* Planning & FAQ */
  .planning { display: grid; grid-template-columns: .92fr 1.08fr; gap: 60px; align-items: start; padding: 20px 0 78px; }
  .availability { padding: 42px; border-radius: 180px 16px 16px 16px; background: linear-gradient(145deg, #faedf0, #fdfbf9 62%); border: 1px solid var(--line); box-shadow: var(--shadow); }
  .availability h2 { font-size: clamp(2.2rem, 3.8vw, 3.2rem); margin: 10px 0 16px; }
  .availabilityMeta { display: flex; flex-wrap: wrap; gap: 16px; margin: 22px 0 28px; }
  .availabilityMeta span { display: inline-flex; align-items: center; gap: 8px; color: var(--ink); font-size: .85rem; font-weight: 700; }
  .faqList { padding-top: 10px; }
  .faqItem { border-top: 1px solid var(--line); }
  .faqItem:last-child { border-bottom: 1px solid var(--line); }
  .faqItem button { width: 100%; display: flex; justify-content: space-between; align-items: center; gap: 16px; padding: 18px 0; border: 0; background: transparent; color: var(--ink); text-align: left; font-weight: 700; font-size: 0.95rem; cursor: pointer; }
  .faqToggle { color: var(--coral); font-size: 1.4rem; font-weight: 400; }
  .faqAnswer { margin: -2px 0 20px; color: var(--muted); font-size: 0.88rem; line-height: 1.6; }

  /* Call to Action */
  .cta { background: var(--coral); color: white; padding: 36px min(6vw, 86px); display: grid; grid-template-columns: 1fr auto auto; gap: 40px; align-items: center; }
  .cta h2 { color: white; font-size: clamp(2rem, 3vw, 2.8rem); margin-bottom: 6px; }
  .cta p { color: rgba(255,255,255,.9); margin: 0; font-size: 0.95rem; }
  .ctaPhone { font-size: 0.85rem; }
  .ctaPhone strong { font-size: 1.05rem; }

  /* Footer */
  .footer { display: grid; grid-template-columns: 1.2fr .75fr 1.15fr 1fr 1.2fr; gap: 36px; padding: 54px 0 38px; border-top: 1px solid var(--line); }
  .footer h3 { color: var(--coral); font-size: 0.85rem; margin-bottom: 14px; }
  .footer a { display: block; color: var(--muted); text-decoration: none; margin: 8px 0; font-size: 0.88rem; transition: color .2s; }
  .footer a:hover { color: var(--coral); }
  .footer p { font-size: .88rem; margin: 8px 0; color: var(--muted); }
  .footerLogo span { font-size: 2.6rem; }
  .footerBackLink { margin-top: 16px; }
  .showcaseLink { color: var(--coral) !important; font-weight: 700; font-size: 0.82rem !important; }
  .instaGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
  .instaGrid img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 4px; }
  .subscribe { display: grid; gap: 10px; }
  .subscribe label { font-size: .78rem; font-weight: 700; color: var(--muted); }
  .subscribe input { width: 100%; padding: 12px 14px; border: 1px solid var(--line); background: white; border-radius: 4px; font-size: 0.85rem; }
  .subscribe button { background: var(--gold); color: white; border: 0; border-radius: 4px; padding: 12px 14px; text-transform: uppercase; font-weight: 800; letter-spacing: .08em; font-size: 0.74rem; cursor: pointer; }

  /* Booking Modal */
  .modalBackdrop { position: fixed; inset: 0; z-index: 100; display: grid; place-items: center; padding: 22px; background: rgba(46, 36, 40, 0.65); backdrop-filter: blur(12px); }
  .bookingModal { position: relative; width: min(720px, 100%); max-height: calc(100vh - 44px); overflow-y: auto; padding: 42px; border: 1px solid var(--line); border-radius: 18px; background: var(--ivory); box-shadow: 0 35px 100px rgba(46, 36, 40, 0.28); }
  .modalClose { position: absolute; top: 16px; right: 16px; width: 40px; height: 40px; border: 1px solid var(--line); border-radius: 50%; background: white; color: var(--coral-dark); font-size: 1.4rem; display: grid; place-items: center; cursor: pointer; }
  .modalIntro { font-size: 0.9rem; color: var(--muted); margin: 6px 0 20px; }
  .bookingForm { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px; }
  .bookingForm label { display: grid; gap: 6px; color: var(--ink); font-size: .78rem; font-weight: 700; }
  .bookingForm input, .bookingForm select, .bookingForm textarea { width: 100%; min-width: 0; padding: 12px 13px; border: 1px solid var(--line); border-radius: 6px; background: white; color: var(--ink); font-size: 0.85rem; }
  .fullField { grid-column: 1 / -1; }

  /* Confirmation Screen in Modal */
  .submittedSuccess { text-align: center; padding: 20px 0; }
  .heartSeal { width: 64px; height: 64px; border-radius: 50%; background: var(--blush); color: var(--coral); display: grid; place-items: center; margin: 0 auto 16px; }
  .heartIcon { width: 32px; height: 32px; fill: currentColor; }
  .successText { font-size: 1rem; color: var(--ink); max-width: 520px; margin: 12px auto; }
  .summaryPillBox { background: var(--blush-soft); border: 1px solid var(--line); border-radius: 10px; padding: 16px; max-width: 480px; margin: 18px auto; text-align: left; font-size: 0.85rem; }
  .summaryPillBox p { margin: 6px 0; }
  .successSub { font-size: 0.82rem; color: var(--muted); max-width: 460px; margin: 16px auto 24px; line-height: 1.5; }

  /* Utility Icons */
  .iconMini { width: 14px; height: 14px; }
  .iconSmall { width: 16px; height: 16px; }
  .iconNano { width: 12px; height: 12px; }
  .textRose { color: var(--coral); }
  .textGold { color: var(--gold); }

  /* Responsive Rules */
  @media (max-width: 1100px) {
    .navLinks { display: none; }
    .menuButton { display: grid; }
    .hero { grid-template-columns: 1fr; }
    .heroArt { min-height: auto; justify-content: center; }
    .serviceBar, .steps, .reviewCards { grid-template-columns: repeat(2, 1fr); }
    .serviceItem:nth-child(2) { border-right: 0; }
    .gallery, .about, .journey, .reviews, .packages, .planning, .calcGrid { grid-template-columns: 1fr; }
    .calcPills { grid-template-columns: 1fr; }
    .about { gap: 20px; }
    .flowerCard { display: none; }
    .artists { grid-template-columns: repeat(3, 1fr); }
    .artistLead, .artistNote, .greenQuote { grid-column: span 1; }
    .packageCards { grid-template-columns: repeat(2, 1fr); }
    .cta { grid-template-columns: 1fr; gap: 18px; }
    .footer { grid-template-columns: repeat(2, 1fr); }
    .mobileDrawerCta { border-top: 1px solid var(--line); margin-top: 12px; padding-top: 12px; display: flex; flex-direction: column; gap: 8px; }
    .mobileHubLink { text-align: center; font-size: 0.75rem; color: var(--coral-dark); font-weight: 700; text-decoration: none; }
  }

  @media (max-width: 720px) {
    .sectionShell, .navContainer { width: min(100% - 28px, 1280px); }
    .topTicker .tickerMeta { display: none; }
    .navContainer { min-height: 62px; }
    .logoMain { font-size: 1.7rem; }
    .backToHub, .bookTop { display: none; }
    .hero { min-height: auto; max-height: none; padding: 18px 0 36px; }
    .hero h1 { font-size: clamp(3.2rem, 13vw, 4rem); }
    .windowFrame { width: 100%; max-width: 360px; height: 400px; }
    .award {
      width: 104px;
      height: 104px;
      right: -8px;
      top: 14px;
      padding: 3px;
    }
    .awardYear { font-size: 1.25rem; }
    .awardBrand { font-size: 0.52rem; }
    .awardTitle { font-size: 0.46rem; }
    .awardPill { display: none; }
    .serviceBar, .galleryGrid, .steps, .artists, .reviewCards, .packageCards, .footer { grid-template-columns: 1fr; }
    .serviceItem, .reviewCard { border-right: 0; border-bottom: 1px solid var(--line); }
    .galleryGrid { grid-auto-rows: 240px; }
    .galleryGrid .tall, .galleryGrid .wide { grid-row: span 1; grid-column: span 1; }
    .lookbookModalContent { grid-template-columns: 1fr; }
    .lookbookModalDetails { padding: 24px; }
    .packageCard.featured { transform: none; }
    .reviewCard { display: none; }
    .reviewCard.active { display: block; }
    .reviewControls { display: flex; align-items: center; justify-content: center; gap: 18px; padding: 14px; }
    .reviewControls button { width: 38px; height: 38px; border: 1px solid var(--line); border-radius: 50%; background: white; color: var(--coral-dark); cursor: pointer; display: grid; place-items: center; }
    .availability { padding: 32px 20px; border-radius: 80px 14px 14px 14px; }
    .bookingModal { padding: 30px 18px; }
    .bookingForm { grid-template-columns: 1fr; }
    .calcGrid { gap: 24px; }
    .calculatorCard { padding: 24px 16px; }
  }
`;
