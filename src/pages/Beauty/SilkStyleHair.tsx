import { useEffect, useRef, useState } from "react";
import heroImage from "../../assets/optimized/beauty/silkstyle/hero.webp";
import interiorImage from "../../assets/optimized/beauty/silkstyle/interio.webp";
import galleryOne from "../../assets/optimized/beauty/silkstyle/gallary01.webp";
import galleryTwo from "../../assets/optimized/beauty/silkstyle/gallary02.webp";
import galleryThree from "../../assets/optimized/beauty/silkstyle/gallary03.webp";
import galleryFour from "../../assets/optimized/beauty/silkstyle/gallary04.webp";
import jessicaImage from "../../assets/optimized/beauty/silkstyle/jessica.webp";
import marcusImage from "../../assets/optimized/beauty/silkstyle/marcus.webp";
import glossImage from "../../assets/optimized/beauty/silkstyle/gloss.webp";
import repairImage from "../../assets/optimized/beauty/silkstyle/repair.webp";

const navSections = [
  { id: "home", label: "Home" },
  { id: "services", label: "Services" },
  { id: "about", label: "About" },
  { id: "transformations", label: "Transformations" },
  { id: "stylists", label: "Stylists" },
  { id: "products", label: "Products" },
  { id: "faq", label: "FAQ" },
  { id: "journal", label: "Journal" },
  { id: "contact", label: "Contact" },
];

type IconName = "color" | "dryer" | "scissors" | "drop";

const services: Array<{
  icon: IconName;
  title: string;
  text: string;
  price: string;
  duration: string;
  ideal: string;
  includes: string[];
}> = [
  {
    icon: "color",
    title: "Color",
    text: "Dimensional, lived-in color mapped to your tone, texture, and lifestyle.",
    price: "From $185",
    duration: "2–3.5 hours",
    ideal: "For depth, brightness, and seamless grow-out",
    includes: [
      "Personal color mapping",
      "Gloss and bond care",
      "At-home maintenance plan",
    ],
  },
  {
    icon: "dryer",
    title: "Blowouts",
    text: "Polished, touchable volume shaped to last without feeling overstyled.",
    price: "From $75",
    duration: "45–60 minutes",
    ideal: "For events, weekly styling, or an instant reset",
    includes: ["Luxury cleanse", "Heat protection", "Finish tailored to you"],
  },
  {
    icon: "scissors",
    title: "Cuts",
    text: "Modern, wearable shapes designed around movement, density, and natural texture.",
    price: "From $110",
    duration: "60–90 minutes",
    ideal: "For refined shape and effortless daily styling",
    includes: ["Shape consultation", "Precision cut", "Styling lesson"],
  },
  {
    icon: "drop",
    title: "Treatments",
    text: "Targeted restorative rituals that rebuild strength and return luminous softness.",
    price: "From $95",
    duration: "45–75 minutes",
    ideal: "For dryness, damage, dullness, or stressed hair",
    includes: [
      "Hair health analysis",
      "Custom treatment blend",
      "Care prescription",
    ],
  },
];

const transformationsData = [
  {
    title: "Dimensional Sunlit Brunette",
    category: "Balayage & Gloss",
    stylist: "Jessica Lane · Senior Color Specialist",
    time: "3 hrs 15 mins",
    beforeImage: galleryOne,
    afterImage: galleryTwo,
    goal: "Eliminate brassy flat warmth, build dimensional caramel & honeycomb ribbons, and seal with a luminous golden-gloss glaze.",
    formula: "Freehand clay lightener + 7NB/8GI acidic gloss toner + K18 molecular mist",
    serviceName: "Dimensional Color",
  },
  {
    title: "Architectural Parisian Bob",
    category: "Couture Cut & Restyle",
    stylist: "Marcus Vale · Creative Director",
    time: "1 hr 30 mins",
    beforeImage: galleryThree,
    afterImage: galleryFour,
    goal: "Shed damaged ends for a razor-precise collarbone crop with interior air-pockets that naturally falls into place without styling effort.",
    formula: "Dry scissor-carved perimeter + crown debulking + Silk & Style Gloss Elixir polish",
    serviceName: "Cuts",
  },
];

const stylistsData = [
  {
    name: "Jessica Lane",
    role: "Senior Stylist & Color Specialist",
    handle: "@jessica.silkstyle",
    rating: "5.0",
    reviewCount: "142",
    image: jessicaImage,
    bio: "Renowned across Los Angeles for sun-washed brunettes, lived-in micro-foils, and French balayage that grows out seamlessly with no harsh line of demarcation.",
    specialties: ["Lived-In Brunettes", "Sunlit Balayage", "Silk Glossing", "Bond Therapy"],
    nextOpening: "Thursday · 11:00 AM",
    serviceKey: "Color with Jessica",
  },
  {
    name: "Marcus Vale",
    role: "Creative Director & Cut Artist",
    handle: "@marcus.atelier",
    rating: "4.9",
    reviewCount: "188",
    image: marcusImage,
    bio: "Brings 14 years of European and editorial training to precision French bobs, architectural silhouettes, and effortless dry texturizing tailored to bone structure.",
    specialties: ["French Bobs", "Curtain Bangs", "Architectural Cuts", "Dry Texturizing"],
    nextOpening: "Saturday · 1:30 PM",
    serviceKey: "Cut with Marcus",
  },
];

const retailProducts = [
  {
    id: "gloss-elixir",
    name: "Gloss Elixir",
    badge: "Atelier Favorite",
    price: "$48",
    size: "50ml / 1.7 fl oz",
    image: glossImage,
    tagline: "Weightless Radiant Polish & Heat Defense",
    description: "Cold-pressed botanical oils seal the cuticle against humidity, eliminate flyaways, and impart a glass-like mirror shine without greasiness.",
    botanicals: ["Cold-Pressed Marula Oil", "Plant Squalane", "Japanese Camellia Seed"],
  },
  {
    id: "repair-masque",
    name: "Repair Masque",
    badge: "Bond Restorative",
    price: "$56",
    size: "200ml / 6.8 fl oz",
    image: repairImage,
    tagline: "Cellular Peptide & Keratin Reconstruction",
    description: "Bio-identical amino acids and silk peptides penetrate compromised hair cortexes to rebuild structural elasticity and tensile strength.",
    botanicals: ["Hydrolyzed Silk Protein", "Organic Shea Butter", "Bio-Lipid Complex"],
  },
];

const faqs = [
  {
    q: "How should I prep my hair before a dimensional color appointment?",
    a: "Please arrive with clean, dry hair free of heavy root touch-up sprays, oil elixirs, or heavy dry shampoo buildup. We also encourage saving 2–3 reference photos so your colorist can calibrate tone and placement to your skin undertone and lifestyle.",
  },
  {
    q: "What is your cancellation and rescheduling policy?",
    a: "We cherish both our guests' schedules and our stylists' dedicated focus. We kindly ask for at least 48 hours notice for any cancellations or date adjustments so we can accommodate guests from our waitlist.",
  },
  {
    q: "Can I book a complimentary consultation before committing to a change?",
    a: "Yes, absolutely! Every major color transition, corrective session, or bespoke haircut can begin with a complimentary 15-minute consultation. We assess hair elasticity, review past processes, and map out a transparent roadmap and quote.",
  },
  {
    q: "Which professional care lines do you formulate with during services?",
    a: "We formulate exclusively with clean, low-tox, high-performance lines including Davines, Oribe, and K18 molecular peptide repair to preserve and fortify hair integrity with every single appointment.",
  },
  {
    q: "Do you offer silent appointments or low-sensory visits?",
    a: "Yes! Simply select or note 'Silent appointment' when reserving your time. Following your initial consultation, we will keep conversation strictly to essential service check-ins so you can read, work, or unwind peacefully.",
  },
];

const testimonials = [
  [
    "The most thoughtful color consultation I’ve ever had. My hair looks expensive, healthy, and completely like me.",
    "Maya R.",
  ],
  [
    "Jessica understood the movement I wanted immediately. The cut still falls beautifully weeks later.",
    "Amelia K.",
  ],
  [
    "The salon is calm, refined, and never rushed. Marcus gave me the best transformation of my life.",
    "Sofia T.",
  ],
];

const journalPosts = [
  [
    "Color Notes",
    "How to keep dimensional brunette color luminous between visits",
    galleryTwo,
  ],
  [
    "The Cut Edit",
    "Why shape and movement matter more than chasing every trend",
    galleryFour,
  ],
  [
    "Healthy Hair",
    "A stylist-approved ritual for stronger, silkier lengths",
    glossImage,
  ],
];

function Icon({ name }: { name: IconName }) {
  const p = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true">
      {name === "color" && (
        <>
          <path {...p} d="m7 25 12-12 5 5-12 12H7Z" />
          <path {...p} d="m17 15 6-8 3 3-5 8M9 25l3 3" />
        </>
      )}
      {name === "dryer" && (
        <>
          <path
            {...p}
            d="M5 9h13c5 0 8 3 8 7s-3 7-8 7h-5v-6h5c1 0 2-1 2-2s-1-2-2-2H5Z"
          />
          <path {...p} d="m13 22-2 8H7l1-8M26 12l3-2M26 20l3 2" />
        </>
      )}
      {name === "scissors" && (
        <>
          <circle {...p} cx="9" cy="24" r="4" />
          <circle {...p} cx="23" cy="24" r="4" />
          <path {...p} d="M12 21 24 5M20 21 8 5M16 16l-4 5" />
        </>
      )}
      {name === "drop" && (
        <>
          <path {...p} d="M16 3S8 12 8 20a8 8 0 0 0 16 0c0-8-8-17-8-17Z" />
          <path {...p} d="M12 21c1 3 5 4 8 1" />
        </>
      )}
    </svg>
  );
}

function Logo() {
  return (
    <a className="silkLogo" href="#home" aria-label="Silk and Style Hair home">
      <span className="logoScript">
        Silk <i className="logoAmp">&</i> Style
      </span>
      <small className="logoSub">H A I R &nbsp; S T U D I O</small>
    </a>
  );
}

export default function SilkStyleHair() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState("Dimensional Color");
  const [preferredStylist, setPreferredStylist] = useState("Any Available Stylist");
  const [preferredTime, setPreferredTime] = useState("Afternoon (1pm–4pm)");
  const [reserveProduct, setReserveProduct] = useState("");
  const [activeTransformation, setActiveTransformation] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [scrollProgress, setScrollProgress] = useState(0);
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateActive = () => {
      const sectionElements = navSections
        .map((item) => document.getElementById(item.id))
        .filter((item): item is HTMLElement => Boolean(item));

      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      if (windowHeight + scrollY >= docHeight - 80) {
        setActiveSection("contact");
      } else {
        const scrollThreshold = scrollY + 140;
        const passed = sectionElements.filter(
          (section) => section.offsetTop <= scrollThreshold,
        );
        if (passed.length > 0) {
          setActiveSection(passed[passed.length - 1].id);
        } else {
          setActiveSection("home");
        }
      }

      const height = docHeight - windowHeight;
      setScrollProgress(height > 0 ? (scrollY / height) * 100 : 0);
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setBookingOpen(false);
      }
    };
    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Silk & Style Hair | Luxury Hair Salon Los Angeles";
    let description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const createdDescription = !description;
    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }
    const previousDescription = description?.content;
    if (description)
      description.content =
        "Luxury cuts, dimensional color, blowouts, and restorative hair treatments at Silk & Style Hair in Los Angeles.";
    const structuredData = document.createElement("script");
    structuredData.type = "application/ld+json";
    structuredData.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "HairSalon",
      name: "Silk & Style Hair",
      telephone: "+1-323-555-0198",
      email: "hello@silkandstylehair.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1234 Maple Drive",
        addressLocality: "Los Angeles",
        addressRegion: "CA",
        postalCode: "90026",
      },
      priceRange: "$$$",
    });
    document.head.appendChild(structuredData);
    return () => {
      document.title = previousTitle;
      if (createdDescription) description?.remove();
      else if (description && previousDescription !== undefined)
        description.content = previousDescription;
      structuredData.remove();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = bookingOpen || menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [bookingOpen, menuOpen]);

  useEffect(() => {
    if (!bookingOpen || !modalRef.current) return;
    const modal = modalRef.current;
    const focusable = Array.from(
      modal.querySelectorAll<HTMLElement>(
        "button, input, select, textarea, a[href]",
      ),
    ).filter((item) => !item.hasAttribute("disabled"));
    focusable[0]?.focus();
    const trapFocus = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    modal.addEventListener("keydown", trapFocus);
    return () => modal.removeEventListener("keydown", trapFocus);
  }, [bookingOpen, bookingSuccess]);

  const openBooking = (
    service = "Dimensional Color",
    stylist = "Any Available Stylist",
    product = "",
  ) => {
    setSelectedService(service);
    setPreferredStylist(stylist);
    if (product) setReserveProduct(product);
    setBookingSuccess(false);
    setBookingOpen(true);
  };

  const currTransform = transformationsData[activeTransformation];

  return (
    <main className="silkPage">
      <style>{css}</style>

      <header className="silkNav">
        <div className="scrollProgressBar" style={{ width: `${scrollProgress}%` }} />
        <Logo />
        <nav className="desktopNav" aria-label="Primary navigation">
          {navSections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={activeSection === item.id ? "active" : ""}
              aria-current={
                activeSection === item.id ? "page" : undefined
              }
            >
              {item.label}
            </a>
          ))}
        </nav>
        <button
          type="button"
          className="darkButton navBook"
          onClick={() => openBooking()}
        >
          Book Appointment <span>→</span>
        </button>
        <button
          type="button"
          className="silkMenu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "×" : "☰"}
        </button>
        {menuOpen && (
          <nav className="mobileNav" aria-label="Mobile navigation">
            {navSections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMenuOpen(false)}
                className={activeSection === item.id ? "active" : ""}
              >
                {item.label}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="home" className="silkHero">
        <div className="heroCopy">
          <div className="heroTopBadge">
            <span className="badgeLine" />
            <span className="heroKicker">Couture Salon & Color Atelier · Los Angeles</span>
          </div>

          <div className="availabilityPill" role="status">
            <span className="availDot" />
            <span>Now Booking for This Week · Limited Saturday Color Slots</span>
          </div>

          <h1>
            Elevated Hair.
            <br />
            <em className="heroCursive">Effortless You.</em>
          </h1>

          <span className="accentLine" />

          <p className="heroLead">
            <strong>Silk & Style Hair</strong> is where artistry meets intention. From
            bespoke dimensional color and restorative treatments to signature blowouts,
            we craft looks that celebrate your natural movement.
          </p>

          <div className="heroActions">
            <button
              type="button"
              className="darkButton"
              onClick={() => openBooking()}
            >
              Book Your Appointment <span>→</span>
            </button>
            <a className="lineButton" href="#services">
              Explore Services
            </a>
          </div>

          <div className="heroProof">
            <span className="proofStars">★★★★★</span>
            <strong>4.9</strong>
            <span>from 320+ verified salon guests</span>
          </div>

          <a href="#services" className="scrollCue" aria-label="Scroll to discover salon">
            <span>↓</span> Scroll to Discover Atelier
          </a>
        </div>

        <div className="heroVisualWrap">
          <div className="heroGoldFrame" />
          <div className="heroVisual">
            <img
              src={heroImage}
              alt="Woman with dimensional brunette hair styled at Silk and Style Hair"
              fetchPriority="high"
              decoding="async"
            />
            <div className="featuredCard">
              <div className="featuredBadge">Featured Transformation</div>
              <p className="featuredTitle">Dimensional Sunlit Brunette</p>
              <div className="featuredMeta">
                <span>By Master Colorist <strong>Jessica Lee</strong></span>
                <span className="featuredTag">Balayage & Gloss</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="serviceStrip">
        <div className="serviceIntro">
          <div>
            <p className="kicker">Signature Services</p>
            <h2>
              Considered care.
              <br />
              <em>Designed around you.</em>
            </h2>
          </div>
          <p>
            Every service begins with a thoughtful consultation and ends with a
            clear plan for maintaining your look at home.
          </p>
        </div>
        {services.map((service, index) => (
          <article key={service.title}>
            <div className="serviceTop">
              <span className="serviceNumber">0{index + 1}</span>
              <span className="serviceIcon">
                <Icon name={service.icon} />
              </span>
            </div>
            <h2>{service.title}</h2>
            <p>{service.text}</p>
            <p className="serviceIdeal">{service.ideal}</p>
            <ul>
              {service.includes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="serviceMeta">
              <span>{service.price}</span>
              <span>{service.duration}</span>
            </div>
            <button type="button" onClick={() => openBooking(service.title)}>
              Book {service.title} <span>→</span>
            </button>
          </article>
        ))}
        <div className="servicePromise">
          <span>New here?</span>
          <p>
            Not sure what to book? Start with a complimentary 15-minute
            consultation and we’ll build the right plan together.
          </p>
          <button type="button" onClick={() => openBooking("Consultation")}>
            Book a Consultation →
          </button>
        </div>
      </section>

      <section id="about" className="storySplit">
        <img
          src={interiorImage}
          alt="Silk and Style salon interior"
          loading="lazy"
          decoding="async"
        />
        <div>
          <p className="kicker">The <span className="kickerCursive">Silk & Style</span> Experience</p>
          <h2>
            Modern beauty.
            <br />
            <em className="heroCursive">Meaningful results.</em>
          </h2>
          <p>
            We believe great hair is personal. Our approach blends technical
            precision with creative vision to enhance your natural beauty. Every
            appointment is elevated, intentional, and designed around you.
          </p>
          <a href="#stylists" className="lineButton">
            Our Story & Artists
          </a>
        </div>
      </section>

      {/* INTERACTIVE BEFORE & AFTER COMPARISON SLIDER */}
      <section
        id="transformations"
        className="transformationsSection sectionPad"
        aria-labelledby="transform-title"
      >
        <div className="sectionHeaderCenter">
          <p className="kicker">Interactive Atelier Work</p>
          <h2 id="transform-title">
            Real results.
            <br />
            <em>Beautifully you.</em>
          </h2>
          <p className="sectionSub">
            Drag the gold handle or switch cases below to reveal the precision craft behind our signature transformations.
          </p>
          <div className="transformTabs" role="tablist">
            {transformationsData.map((t, idx) => (
              <button
                key={t.title}
                type="button"
                role="tab"
                aria-selected={activeTransformation === idx}
                className={`transformTab ${activeTransformation === idx ? "active" : ""}`}
                onClick={() => {
                  setActiveTransformation(idx);
                  setSliderPos(50);
                }}
              >
                {t.category}
              </button>
            ))}
          </div>
        </div>

        <div className="transformationShowcase">
          <div className="comparisonContainer">
            {/* After image (base) */}
            <img
              src={currTransform.afterImage}
              alt={`${currTransform.title} - After transformation`}
              className="comparisonImage afterImage"
              loading="lazy"
            />

            {/* Before image (clipped overlay) */}
            <div
              className="comparisonBeforeWrap"
              style={{
                clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)`,
              }}
            >
              <img
                src={currTransform.beforeImage}
                alt={`${currTransform.title} - Before transformation`}
                className="comparisonImage beforeImage"
                loading="lazy"
              />
            </div>

            {/* Divider line & handle */}
            <div className="comparisonDivider" style={{ left: `${sliderPos}%` }}>
              <div className="comparisonHandle" aria-hidden="true">
                <span>◀</span>
                <span>▶</span>
              </div>
            </div>

            {/* Badges */}
            <div className="comparisonBadge beforeBadge">Before</div>
            <div className="comparisonBadge afterBadge">After</div>

            {/* Range input overlay for full accessibility & touch/drag */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPos}
              onChange={(e) => setSliderPos(Number(e.target.value))}
              className="comparisonSliderRange"
              aria-label="Before and after interactive comparison slider"
            />
          </div>

          {/* Case study detail card */}
          <div className="transformationDetails">
            <div className="detailKicker">{currTransform.category}</div>
            <h3>{currTransform.title}</h3>
            <p className="detailGoal">
              <strong>Transformation Goal:</strong> {currTransform.goal}
            </p>

            <div className="detailGrid">
              <div>
                <span className="detailLabel">Lead Artist</span>
                <span className="detailVal">{currTransform.stylist}</span>
              </div>
              <div>
                <span className="detailLabel">Time in Chair</span>
                <span className="detailVal">{currTransform.time}</span>
              </div>
              <div className="full">
                <span className="detailLabel">Technique & Formula</span>
                <span className="detailVal">{currTransform.formula}</span>
              </div>
            </div>

            <button
              type="button"
              className="darkButton"
              onClick={() => openBooking(currTransform.serviceName)}
            >
              Book This Look <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ENHANCED STYLIST PROFILES */}
      <section id="stylists" className="stylistsSection sectionPad">
        <div className="sectionHeaderCenter">
          <p className="kicker">Master Artists</p>
          <h2>
            Artistry in
            <br />
            <em>every detail.</em>
          </h2>
          <p className="sectionSub">
            Each artist brings over a decade of specialized salon craft, European precision training, and a deep reverence for natural hair health.
          </p>
        </div>
        <div className="stylistsGrid">
          {stylistsData.map((stylist) => (
            <article key={stylist.name} className="stylistCard">
              <div className="stylistImageWrap">
                <img
                  src={stylist.image}
                  alt={`${stylist.name}, ${stylist.role}`}
                  loading="lazy"
                  decoding="async"
                />
                <span className="stylistHandle">{stylist.handle}</span>
              </div>
              <div className="stylistBody">
                <div className="stylistHeader">
                  <div>
                    <h3>{stylist.name}</h3>
                    <p className="stylistRole">{stylist.role}</p>
                  </div>
                  <div className="stylistRating" aria-label={`Rating: ${stylist.rating} out of 5 stars`}>
                    <span>★ {stylist.rating}</span>
                    <small>({stylist.reviewCount})</small>
                  </div>
                </div>
                <span className="miniLine" />
                <p className="stylistBio">{stylist.bio}</p>
                <div className="specialtiesWrap">
                  {stylist.specialties.map((spec) => (
                    <span key={spec} className="specialtyPill">
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="stylistFooter">
                  <span className="nextOpening">
                    Next opening: <strong>{stylist.nextOpening}</strong>
                  </span>
                  <button
                    type="button"
                    className="stylistBookBtn"
                    onClick={() => openBooking(stylist.serviceKey, stylist.name)}
                  >
                    Book with {stylist.name.split(" ")[0]} →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* RETAIL PRODUCTS WITH PRICING & BOTANICALS */}
      <section id="products" className="productsSection sectionPad">
        <div className="sectionHeaderCenter">
          <p className="kicker">Atelier Apothecary</p>
          <h2>
            Style. Care.
            <br />
            <em>Results.</em>
          </h2>
          <p className="sectionSub">
            Formulated exclusively for Silk & Style with clean botanical actives, cold-pressed plant extracts, and zero silicones or sulfates.
          </p>
        </div>
        <div className="productsGrid">
          {retailProducts.map((prod) => (
            <article key={prod.id} className="productCard">
              <div className="productImageWrap">
                <img src={prod.image} alt={prod.name} loading="lazy" decoding="async" />
                <span className="productBadge">{prod.badge}</span>
              </div>
              <div className="productBody">
                <div className="productTop">
                  <div>
                    <span className="productCursive">Silk & Style</span>
                    <h3>{prod.name}</h3>
                    <p className="productTagline">{prod.tagline}</p>
                  </div>
                  <div className="productPricing">
                    <span className="productPrice">{prod.price}</span>
                    <span className="productSize">{prod.size}</span>
                  </div>
                </div>
                <p className="productDesc">{prod.description}</p>
                <div className="botanicalSection">
                  <span className="botanicalLabel">Key Botanicals:</span>
                  <div className="botanicalPills">
                    {prod.botanicals.map((bot) => (
                      <span key={bot} className="botanicalPill">
                        {bot}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  type="button"
                  className="productReserveBtn"
                  onClick={() => {
                    setReserveProduct(prod.name);
                    openBooking("Consultation", "Any Available Stylist", prod.name);
                  }}
                >
                  Reserve for Salon Pickup <span>→</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id="testimonials"
        className="testimonials sectionPad"
        aria-labelledby="review-title"
      >
        <div className="sectionIntro">
          <p className="kicker">Client Notes</p>
          <h2 id="review-title">
            Loved for the
            <br />
            <em>details.</em>
          </h2>
        </div>
        {testimonials.map(([quote, name]) => (
          <blockquote key={name}>
            <span>“</span>
            <p>{quote}</p>
            <footer>
              <b>{name}</b>
              <i>★★★★★</i>
            </footer>
          </blockquote>
        ))}
      </section>

      {/* SALON ETIQUETTE & CLIENT FAQ ACCORDION */}
      <section id="faq" className="faqSection sectionPad" aria-labelledby="faq-title">
        <div className="sectionHeaderCenter">
          <p className="kicker">Salon Etiquette & Policies</p>
          <h2 id="faq-title">
            Everything you
            <br />
            <em>need to know.</em>
          </h2>
          <p className="sectionSub">
            Have a question before your visit? Here is how we ensure your atelier experience is seamless, relaxed, and transparent.
          </p>
        </div>
        <div className="faqAccordion">
          {faqs.map((item, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={item.q} className={`faqItem ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="faqQuestion"
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faqIcon" aria-hidden="true">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div className="faqAnswer">
                    <p>{item.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <section id="journal" className="journal sectionPad">
        <div className="sectionIntro">
          <p className="kicker">The Journal</p>
          <h2>
            Notes on hair,
            <br />
            <em>care, and craft.</em>
          </h2>
        </div>
        {journalPosts.map(([category, title, image]) => (
          <article key={title}>
            <img src={image} alt="" loading="lazy" decoding="async" />
            <div>
              <small>{category}</small>
              <h3>{title}</h3>
              <a href="#contact" className="textLink">
                Read Article <span>→</span>
              </a>
            </div>
          </article>
        ))}
      </section>

      <section id="contact" className="blackCta">
        <div>
          <h2>
            Your best hair is <em>one appointment away.</em>
          </h2>
          <p>Let’s create something beautiful together.</p>
        </div>
        <button
          type="button"
          className="outlineDark"
          onClick={() => openBooking()}
        >
          Book Your Appointment <span>→</span>
        </button>
      </section>

      <footer className="silkFooter">
        <div>
          <Logo />
          <small>© 2026 Silk & Style Hair. All rights reserved.</small>
        </div>
        <div>
          <h3>Menu</h3>
          {navSections.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>
        <div>
          <h3>Info</h3>
          <p>
            1234 Maple Drive
            <br />
            Los Angeles, CA 90026
            <br />
            (323) 555-0198
            <br />
            hello@silkandstylehair.com
          </p>
        </div>
        <div>
          <h3>Hours</h3>
          <p>
            Tue – Fri &nbsp; 10am – 7pm
            <br />
            Sat &nbsp; 9am – 6pm
            <br />
            Sun – Mon &nbsp; Closed
          </p>
        </div>
        <div>
          <h3>Follow Along</h3>
          <p className="footerSocial">◎ &nbsp; p</p>
          <p className="legal">
            Privacy Policy &nbsp;&nbsp; Terms & Conditions
          </p>
        </div>
      </footer>

      {/* UPGRADED BOOKING MODAL */}
      {bookingOpen && (
        <div
          className="silkModalBack"
          onMouseDown={(event) =>
            event.target === event.currentTarget && setBookingOpen(false)
          }
        >
          <section
            ref={modalRef}
            className="silkModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="silk-booking-title"
          >
            <button
              className="modalClose"
              type="button"
              onClick={() => setBookingOpen(false)}
              aria-label="Close booking form"
            >
              ×
            </button>
            {bookingSuccess ? (
              <div className="bookingSuccess" role="status">
                <span>✓</span>
                <p className="kicker">Reservation Request Received</p>
                <h2 id="silk-booking-title">We’ll be in touch.</h2>
                <p>
                  Thank you! Your request for <strong>{selectedService}</strong> with{" "}
                  <strong>{preferredStylist}</strong> has been logged. Our concierge will contact you
                  within one business day to confirm availability.
                </p>
                {reserveProduct && (
                  <div className="modalProductNotice">
                    🌿 A bottle of <strong>{reserveProduct}</strong> has been reserved for your appointment.
                  </div>
                )}
                <button
                  type="button"
                  className="darkButton"
                  onClick={() => {
                    setBookingOpen(false);
                    setReserveProduct("");
                  }}
                >
                  Close Window
                </button>
              </div>
            ) : (
              <>
                <div className="modalHeader">
                  <p className="kicker">Online Atelier Concierge</p>
                  <h2 id="silk-booking-title">Reserve Your Appointment</h2>
                  <p className="modalSub">
                    Select your desired service, master artist, and time of day. Zero upfront charge required.
                  </p>
                </div>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setBookingSuccess(true);
                  }}
                >
                  <label>
                    Full name *
                    <input required autoComplete="name" placeholder="E.g. Charlotte Hayes" />
                  </label>
                  <label>
                    Email address *
                    <input type="email" required autoComplete="email" placeholder="charlotte@example.com" />
                  </label>
                  <label>
                    Phone number *
                    <input type="tel" required autoComplete="tel" placeholder="(323) 555-0198" />
                  </label>
                  <label>
                    Service *
                    <select
                      value={selectedService}
                      onChange={(event) => setSelectedService(event.target.value)}
                    >
                      <option value="Consultation">Complimentary Consultation (15 min)</option>
                      <option value="Dimensional Color">Dimensional Color (From $185)</option>
                      <option value="Color">Bespoke Color & Gloss (From $185)</option>
                      <option value="Blowouts">Signature Blowout (From $75)</option>
                      <option value="Cuts">Couture Precision Cut (From $110)</option>
                      <option value="Treatments">Restorative Bond Treatment (From $95)</option>
                      <option value="Color with Jessica">Color with Jessica Lane (Senior Specialist)</option>
                      <option value="Cut with Marcus">Precision Cut with Marcus Vale (Director)</option>
                    </select>
                  </label>
                  <label>
                    Preferred Stylist
                    <select
                      value={preferredStylist}
                      onChange={(e) => setPreferredStylist(e.target.value)}
                    >
                      <option value="Any Available Stylist">Any Available Stylist (Earliest Booking)</option>
                      <option value="Jessica Lane">Jessica Lane (Senior Color Specialist)</option>
                      <option value="Marcus Vale">Marcus Vale (Creative Director & Cut Artist)</option>
                    </select>
                  </label>
                  <label>
                    Preferred Date *
                    <input type="date" required />
                  </label>

                  <div className="full timePickerGroup">
                    <span className="fieldLabel">Preferred Time of Day</span>
                    <div className="timePillRow">
                      {["Morning (10am–1pm)", "Afternoon (1pm–4pm)", "Late Afternoon (4pm–7pm)"].map(
                        (slot) => (
                          <button
                            key={slot}
                            type="button"
                            className={`timeSlotPill ${preferredTime === slot ? "active" : ""}`}
                            onClick={() => setPreferredTime(slot)}
                          >
                            {slot}
                          </button>
                        ),
                      )}
                    </div>
                  </div>

                  {reserveProduct && (
                    <div className="full modalProductNotice">
                      🌿 <strong>Holding for pickup:</strong> {reserveProduct} will be packaged and ready for your visit.
                    </div>
                  )}

                  <label className="full">
                    Hair Goals or Notes
                    <textarea
                      rows={2}
                      placeholder="Share your hair history, goals, or if you prefer a silent appointment"
                    />
                  </label>

                  <div className="full modalDisclaimer">
                    <span className="lockIcon">🔒</span>
                    <span>
                      <strong>Atelier Guarantee:</strong> Zero deposit required to submit. Our concierge confirms your date & time within 24 hours.
                    </span>
                  </div>

                  <button className="darkButton full" type="submit">
                    Submit Reservation Request <span>→</span>
                  </button>
                </form>
              </>
            )}
          </section>
        </div>
      )}
    </main>
  );
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,400;1,600&family=Pinyon+Script&family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&display=swap');
  :root{--silk:#151515;--paper:#f8f6f3;--warm:#ede9e5;--muted:#66615d;--gold:#b38c55;--line:#d8d3ce}
  *{box-sizing:border-box}.silkPage{min-height:100vh;background:var(--paper);color:var(--silk);font-family:"Avenir Next",Avenir,"Segoe UI",sans-serif;overflow-x:clip}.silkPage section[id]{scroll-margin-top:92px}.silkPage button,.silkPage input,.silkPage select,.silkPage textarea{font:inherit}.silkPage a:focus-visible,.silkPage button:focus-visible,.silkPage input:focus-visible,.silkPage select:focus-visible,.silkPage textarea:focus-visible{outline:3px solid rgba(179,140,85,.55);outline-offset:3px}
  .silkLogo{display:flex;flex-direction:column;align-items:flex-start;text-decoration:none;line-height:0.88;color:var(--silk);transition:transform .25s ease}
  .silkLogo:hover{transform:scale(1.02)}
  .logoScript{font-family:'Pinyon Script','Alex Brush',cursive;font-size:clamp(2.5rem,3.4vw,3.2rem);font-weight:400;text-transform:none;letter-spacing:.02em;color:var(--silk);display:inline-flex;align-items:baseline;gap:3px;line-height:.95}
  .logoAmp{font-family:'Cormorant Garamond',Georgia,serif;font-style:italic;color:var(--gold);font-size:.82em;font-weight:600;margin:0 2px}
  .logoSub{font-family:'Avenir Next',Avenir,'Segoe UI',sans-serif;font-size:.74rem;font-weight:700;text-transform:uppercase;letter-spacing:.32em;color:var(--gold);margin-top:6px;padding-left:2px;line-height:1}
  .heroTopBadge{display:flex;align-items:center;gap:12px;margin-bottom:12px}
  .badgeLine{width:36px;height:1.5px;background:var(--gold)}
  .heroKicker{font-family:'Avenir Next',Avenir,sans-serif;font-size:.78rem;font-weight:800;text-transform:uppercase;letter-spacing:.18em;color:var(--gold)}
  .availabilityPill{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.85);border:1px solid rgba(179,140,85,0.35);border-radius:99px;padding:6px 14px;font-size:0.76rem;font-weight:700;color:var(--silk);margin-bottom:18px;box-shadow:0 4px 14px rgba(0,0,0,0.03);width:fit-content}
  .availDot{width:7px;height:7px;border-radius:50%;background:#38a169;box-shadow:0 0 0 3px rgba(56,161,105,0.2);animation:pulseDot 2s infinite}
  @keyframes pulseDot{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(1.2);opacity:0.7}}
  .heroCursive{font-family:'Pinyon Script','Alex Brush',cursive!important;font-style:italic!important;font-size:1.16em!important;color:var(--gold)!important;letter-spacing:.02em!important;display:inline-block;padding-left:6px;line-height:1}
  .kickerCursive{font-family:'Pinyon Script','Alex Brush',cursive;font-size:1.55rem;text-transform:none;color:var(--gold);letter-spacing:.03em;display:inline-block;vertical-align:middle;margin:0 4px}
  .productCursive{font-family:'Pinyon Script','Alex Brush',cursive;font-size:1.75rem;color:var(--gold);text-transform:none;letter-spacing:.02em;display:inline-block;line-height:1.1}
  .silkPage section:not(.silkHero):not(.silkModal){content-visibility:auto;contain-intrinsic-size:auto 500px}
  
  /* STICKY NAV & SCROLL PROGRESS */
  .silkNav{position:sticky;top:0;z-index:50;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:clamp(14px,2vw,24px);min-height:88px;padding:0 max(24px,calc((100vw - 1380px)/2));background:rgba(249,247,244,.96);border-bottom:1px solid rgba(216,211,206,.6);backdrop-filter:blur(16px)}
  .scrollProgressBar{position:absolute;bottom:0;left:0;height:2.5px;background:var(--gold);z-index:10;transition:width 0.1s linear}
  .desktopNav{display:flex;justify-content:center;align-items:center;gap:clamp(10px,1.5vw,22px)}
  .desktopNav a{position:relative;padding:10px 0;color:var(--silk);font-size:.78rem;font-weight:700;letter-spacing:.08em;text-decoration:none;text-transform:uppercase;white-space:nowrap;transition:color .2s ease}
  .desktopNav a:hover{color:var(--gold)}
  .desktopNav a::after{content:"";position:absolute;inset:auto 0 0;height:2px;background:var(--gold);transform:scaleX(0);transition:transform .25s ease}
  .desktopNav a.active{color:var(--gold)}
  .desktopNav a.active::after{transform:scaleX(1)}

  .darkButton,.outlineDark,.lineButton{display:inline-flex;align-items:center;justify-content:center;gap:20px;min-height:52px;padding:0 28px;border:1px solid var(--silk);background:var(--silk);color:white;text-transform:uppercase;letter-spacing:.1em;font-size:.82rem;font-weight:700;text-decoration:none;cursor:pointer;transition:.25s}
  .darkButton:hover{background:#333;transform:translateY(-2px)}
  .lineButton{background:transparent;color:var(--silk)}
  .lineButton:hover{background:white}
  .silkMenu,.mobileNav{display:none}

  /* HERO */
  .silkHero{display:grid;grid-template-columns:46% 54%;min-height:710px}
  .heroCopy{display:flex;flex-direction:column;justify-content:center;padding:70px max(42px,calc((100vw - 1320px)/2)) 44px}
  .kicker{margin:0 0 16px;text-transform:uppercase;letter-spacing:.17em;font-size:.82rem;font-weight:800;color:var(--gold)}
  .silkPage h1,.silkPage h2{margin:0;font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;line-height:1.06;letter-spacing:-.03em}
  .silkPage h1{font-size:clamp(3.6rem,5.6vw,5.6rem)}
  .silkPage h2{font-size:clamp(2.5rem,4.2vw,4.4rem)}
  .silkPage em{font-weight:400;color:var(--gold)}
  .heroLead{max-width:490px;margin:22px 0 26px;color:var(--muted);font-size:1.05rem;line-height:1.8}
  .heroLead strong{color:var(--silk);font-weight:700}
  .accentLine{width:68px;height:2px;margin:20px 0;background:var(--gold);display:block}
  .heroActions{display:flex;flex-wrap:wrap;gap:18px}
  .heroProof{display:flex;align-items:center;gap:10px;margin-top:22px;color:var(--muted);font-size:.88rem}
  .proofStars{color:var(--gold);letter-spacing:.08em;font-size:.95rem}
  .heroProof strong{color:var(--silk)}
  .scrollCue{display:inline-flex;align-items:center;gap:10px;margin-top:26px;color:#898581;text-decoration:none;text-transform:uppercase;letter-spacing:.14em;font-size:.76rem;font-weight:700;transition:color .2s ease,transform .2s ease}
  .scrollCue:hover{color:var(--silk);transform:translateY(2px)}
  .scrollCue span{font-size:1.1rem;color:var(--gold)}

  .heroVisualWrap{position:relative;height:100%;min-height:600px;display:flex;align-items:stretch}
  .heroGoldFrame{position:absolute;inset:20px 0 20px 24px;border:1.5px solid rgba(179,140,85,0.45);border-radius:55% 0 0 0;pointer-events:none;z-index:1;transition:transform .5s ease}
  .heroVisualWrap:hover .heroGoldFrame{transform:translate(-5px,-5px);border-color:var(--gold)}
  .heroVisual{position:relative;width:100%;overflow:hidden;border-radius:55% 0 0 0;z-index:2;box-shadow:-16px 20px 50px rgba(21,21,21,0.09)}
  .heroVisual img{width:100%;height:100%;object-fit:cover;object-position:center 18%;transition:transform .8s cubic-bezier(0.16,1,0.3,1)}
  .heroVisual:hover img{transform:scale(1.03)}
  .heroVisual::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 65%,rgba(21,21,21,0.6) 100%);pointer-events:none}
  .featuredCard{position:absolute;bottom:30px;left:30px;right:30px;max-width:390px;background:rgba(255,255,255,0.94);border:1px solid rgba(216,211,206,0.85);border-left:3px solid var(--gold);border-radius:8px;padding:16px 20px;box-shadow:0 18px 40px rgba(0,0,0,0.16);backdrop-filter:blur(12px);z-index:5;transition:transform .3s ease,box-shadow .3s ease}
  .featuredCard:hover{transform:translateY(-2px);box-shadow:0 22px 48px rgba(0,0,0,0.22)}
  .featuredBadge{font-size:0.68rem;font-weight:800;text-transform:uppercase;letter-spacing:0.14em;color:var(--gold);margin-bottom:3px}
  .featuredTitle{font-family:'Cormorant Garamond',Georgia,serif;font-size:1.32rem;font-weight:600;color:var(--silk);margin:0 0 6px;line-height:1.2}
  .featuredMeta{display:flex;justify-content:space-between;align-items:center;font-size:0.78rem;color:var(--muted);border-top:1px dashed rgba(216,211,206,0.7);padding-top:8px}
  .featuredMeta strong{color:var(--silk)}
  .featuredTag{font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--gold);background:#faf4ec;padding:2px 8px;border-radius:99px}

  /* SERVICES STRIP */
  .serviceStrip{display:grid;grid-template-columns:repeat(4,1fr);background:#f1efec;border-block:1px solid var(--line)}
  .serviceIntro{grid-column:1/-1;display:flex;align-items:end;justify-content:space-between;gap:40px;padding:58px max(32px,calc((100vw - 1320px)/2)) 42px;background:#faf9f7}
  .serviceIntro h2{font-size:clamp(2.6rem,4.2vw,4.3rem);text-transform:none;letter-spacing:-.045em}
  .serviceIntro>p{max-width:470px;margin:0;color:var(--muted);font-size:1.05rem;line-height:1.75}
  .serviceStrip article{display:flex;flex-direction:column;padding:32px clamp(22px,3vw,40px);border-right:1px solid var(--line);transition:background .3s ease,transform .3s ease}
  .serviceStrip article:nth-of-type(4){border-right:0}
  .serviceStrip article:hover{background:#faf9f7;transform:translateY(-4px)}
  .serviceTop{display:flex;align-items:start;justify-content:space-between;margin-bottom:22px}
  .serviceNumber{color:#a19b95;font-family:Georgia,serif;font-size:1.1rem}
  .serviceIcon{display:grid;width:66px;height:66px;place-items:center;border:1px solid #999;border-radius:50%;color:#777}
  .serviceIcon svg{width:35px;height:35px}
  .serviceStrip article h2{font-size:1.65rem;text-transform:uppercase;letter-spacing:.05em}
  .serviceStrip article>p{max-width:260px;margin:12px 0 0;color:var(--muted);font-size:.92rem;line-height:1.6}
  .serviceStrip .serviceIdeal{min-height:48px;color:#2e2c2a;font-size:.88rem;font-weight:700}
  .serviceStrip ul{min-height:88px;margin:16px 0 0;padding:14px 0 0;list-style:none;border-top:1px solid var(--line);color:var(--muted);font-size:.86rem;line-height:1.8}
  .serviceStrip li::before{content:"—";margin-right:8px;color:var(--gold)}
  .serviceMeta{display:flex;gap:12px;margin-top:auto;padding-top:18px;color:#4b4743;font-size:.84rem;font-weight:800}
  .serviceMeta span+span{padding-left:12px;border-left:1px solid #c4bfba}
  .serviceStrip article>button{display:flex;justify-content:space-between;margin-top:18px;padding:10px 0;border:0;border-block:1px solid var(--silk);background:transparent;color:var(--silk);text-transform:uppercase;letter-spacing:.1em;font-size:.78rem;font-weight:800;cursor:pointer}
  .servicePromise{grid-column:1/-1;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:28px;padding:24px max(32px,calc((100vw - 1320px)/2));background:#181818;color:white}
  .servicePromise>span{color:#cab28d;font-family:Georgia,serif;font-size:1.4rem}
  .servicePromise p{max-width:none;margin:0;color:#c7c4c1;font-size:.92rem}
  .servicePromise button{border:0;border-bottom:1px solid #aaa;background:transparent;color:white;text-transform:uppercase;letter-spacing:.1em;font-size:.82rem;font-weight:800;cursor:pointer}

  /* ABOUT STORY */
  .storySplit{display:grid;grid-template-columns:1fr 1fr;min-height:500px}
  .storySplit>img{width:100%;height:100%;object-fit:cover}
  .storySplit>div{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:70px max(48px,8vw)}
  .storySplit p:not(.kicker){max-width:510px;color:var(--muted);font-size:1.05rem;line-height:1.75;margin:28px 0}

  .sectionPad{padding:70px max(32px,calc((100vw - 1320px)/2))}
  .sectionIntro{align-self:center}
  .sectionIntro h2{font-size:3.2rem}
  .sectionHeaderCenter{text-align:center;max-width:680px;margin:0 auto 48px}
  .sectionHeaderCenter h2{font-size:clamp(2.5rem,4.2vw,4rem);line-height:1.1}
  .sectionSub{color:var(--muted);font-size:1.02rem;line-height:1.7;margin-top:14px}
  .textLink{display:inline-flex;gap:26px;margin-top:28px;padding-bottom:6px;border-bottom:1px solid;color:var(--silk);text-decoration:none;text-transform:uppercase;font-size:.82rem;font-weight:800;letter-spacing:.12em}

  /* INTERACTIVE BEFORE & AFTER SLIDER */
  .transformationsSection{background:#faf9f7;border-bottom:1px solid var(--line)}
  .transformTabs{display:inline-flex;gap:8px;margin-top:22px;background:#edeae5;padding:4px;border-radius:99px}
  .transformTab{padding:8px 20px;border:0;background:transparent;font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:var(--muted);border-radius:99px;cursor:pointer;transition:all .25s ease}
  .transformTab.active{background:var(--silk);color:white;box-shadow:0 4px 12px rgba(0,0,0,0.15)}
  .transformationShowcase{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}
  .comparisonContainer{position:relative;width:100%;aspect-ratio:4/3.8;border-radius:8px;overflow:hidden;user-select:none;box-shadow:0 20px 48px rgba(21,21,21,0.12)}
  .comparisonImage{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
  .comparisonBeforeWrap{position:absolute;inset:0;width:100%;height:100%;pointer-events:none}
  .comparisonDivider{position:absolute;top:0;bottom:0;width:2px;background:white;box-shadow:0 0 10px rgba(0,0,0,0.5);transform:translateX(-50%);pointer-events:none;z-index:4}
  .comparisonHandle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:44px;height:44px;border-radius:50%;background:var(--silk);border:2px solid var(--gold);color:var(--gold);display:flex;align-items:center;justify-content:center;gap:3px;font-size:10px;box-shadow:0 6px 18px rgba(0,0,0,0.4)}
  .comparisonSliderRange{position:absolute;inset:0;width:100%;height:100%;opacity:0;cursor:ew-resize;z-index:6;margin:0}
  .comparisonBadge{position:absolute;top:16px;padding:5px 12px;background:rgba(21,21,21,0.78);color:white;font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;font-weight:700;border-radius:4px;backdrop-filter:blur(8px);z-index:5}
  .beforeBadge{left:16px}
  .afterBadge{right:16px}
  .transformationDetails{display:flex;flex-direction:column;justify-content:center;background:white;padding:42px;border:1px solid var(--line);border-left:4px solid var(--gold);border-radius:8px;box-shadow:0 8px 24px rgba(0,0,0,0.03)}
  .detailKicker{font-size:.74rem;font-weight:800;text-transform:uppercase;letter-spacing:.14em;color:var(--gold);margin-bottom:8px}
  .transformationDetails h3{font-family:'Cormorant Garamond',Georgia,serif;font-size:2.3rem;font-weight:600;margin:0 0 14px;line-height:1.15;color:var(--silk)}
  .detailGoal{color:var(--muted);font-size:.98rem;line-height:1.75;margin:0 0 20px}
  .detailGoal strong{color:var(--silk)}
  .detailGrid{display:grid;grid-template-columns:1fr 1fr;gap:18px;margin:16px 0 28px;border-top:1px dashed var(--line);padding-top:20px}
  .detailGrid .full{grid-column:1/-1}
  .detailLabel{display:block;font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:var(--gold);font-weight:800;margin-bottom:4px}
  .detailVal{display:block;font-size:.92rem;color:var(--silk);font-weight:600}

  /* STYLISTS GRID */
  .stylistsSection{background:#f0eeeb;border-bottom:1px solid var(--line)}
  .stylistsGrid{display:grid;grid-template-columns:1fr 1fr;gap:36px}
  .stylistCard{display:grid;grid-template-columns:220px 1fr;background:white;border:1px solid var(--line);border-radius:8px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.04);transition:transform .3s ease,box-shadow .3s ease}
  .stylistCard:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(0,0,0,0.08)}
  .stylistImageWrap{position:relative;width:100%;height:100%;min-height:300px}
  .stylistImageWrap img{width:100%;height:100%;object-fit:cover;object-position:center 18%}
  .stylistHandle{position:absolute;bottom:12px;left:12px;background:rgba(21,21,21,0.82);color:#faf9f7;font-size:.72rem;padding:3px 8px;border-radius:4px;letter-spacing:.05em;backdrop-filter:blur(6px);font-weight:600}
  .stylistBody{padding:26px 28px;display:flex;flex-direction:column}
  .stylistHeader{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
  .stylistHeader h3{font-size:1.35rem;text-transform:uppercase;letter-spacing:.06em;margin:0;color:var(--silk)}
  .stylistRole{font-size:.82rem;color:var(--gold);font-weight:700;margin:4px 0 0}
  .stylistRating{display:flex;align-items:center;gap:4px;color:var(--gold);font-weight:800;font-size:.88rem}
  .stylistRating small{color:var(--muted);font-weight:500;font-size:.76rem}
  .miniLine{display:block;width:34px;height:1.5px;margin:14px 0;background:var(--gold)}
  .stylistBio{color:var(--muted);font-size:.9rem;line-height:1.65;margin:0 0 16px}
  .specialtiesWrap{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px}
  .specialtyPill{font-size:.74rem;background:#f4f2ed;color:#494541;padding:3px 9px;border-radius:99px;font-weight:600}
  .stylistFooter{display:flex;justify-content:space-between;align-items:center;margin-top:auto;padding-top:16px;border-top:1px solid var(--line)}
  .nextOpening{font-size:.78rem;color:var(--muted)}
  .nextOpening strong{color:var(--silk)}
  .stylistBookBtn{border:0;border-bottom:1.5px solid var(--silk);background:transparent;color:var(--silk);text-transform:uppercase;letter-spacing:.1em;font-size:.78rem;font-weight:800;cursor:pointer;padding-bottom:2px;transition:color .2s ease,border-color .2s ease}
  .stylistBookBtn:hover{color:var(--gold);border-color:var(--gold)}

  /* PRODUCTS APOTHECARY */
  .productsSection{background:#faf9f7;border-bottom:1px solid var(--line)}
  .productsGrid{display:grid;grid-template-columns:1fr 1fr;gap:36px}
  .productCard{display:grid;grid-template-columns:190px 1fr;background:white;border:1px solid var(--line);border-radius:8px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,0.04);transition:transform .3s ease,box-shadow .3s ease}
  .productCard:hover{transform:translateY(-4px);box-shadow:0 18px 40px rgba(0,0,0,0.08)}
  .productImageWrap{position:relative;width:100%;height:100%;min-height:280px;background:#f6f3ee}
  .productImageWrap img{width:100%;height:100%;object-fit:cover}
  .productBadge{position:absolute;top:12px;left:12px;background:var(--silk);color:white;font-size:.68rem;text-transform:uppercase;letter-spacing:.12em;font-weight:700;padding:3px 8px;border-radius:4px}
  .productBody{padding:26px 28px;display:flex;flex-direction:column}
  .productTop{display:flex;justify-content:space-between;align-items:flex-start;gap:12px}
  .productTop h3{font-size:1.4rem;margin:2px 0 4px;letter-spacing:.02em;color:var(--silk)}
  .productTagline{font-size:.8rem;color:var(--muted);margin:0}
  .productPricing{text-align:right}
  .productPrice{display:block;font-size:1.45rem;font-weight:600;color:var(--silk);font-family:'Cormorant Garamond',Georgia,serif}
  .productSize{display:block;font-size:.74rem;color:var(--muted)}
  .productDesc{font-size:.88rem;color:var(--muted);line-height:1.65;margin:14px 0}
  .botanicalSection{margin:auto 0 16px;border-top:1px solid var(--line);padding-top:12px}
  .botanicalLabel{display:block;font-size:.72rem;text-transform:uppercase;letter-spacing:.12em;color:var(--gold);font-weight:800;margin-bottom:6px}
  .botanicalPills{display:flex;flex-wrap:wrap;gap:6px}
  .botanicalPill{font-size:.74rem;background:#f6f3ee;color:#494541;padding:3px 8px;border-radius:4px;font-weight:600}
  .productReserveBtn{display:inline-flex;justify-content:space-between;align-items:center;padding:12px 18px;border:1px solid var(--silk);background:transparent;color:var(--silk);text-transform:uppercase;letter-spacing:.1em;font-size:.78rem;font-weight:700;cursor:pointer;transition:all .25s}
  .productReserveBtn:hover{background:var(--silk);color:white}

  /* TESTIMONIALS */
  .testimonials{display:grid;grid-template-columns:300px repeat(3,1fr);gap:18px;background:#efedea}
  .testimonials blockquote{margin:0;padding:26px;background:#f9f8f6;border:1px solid var(--line)}
  .testimonials blockquote>span{font-family:Georgia,serif;font-size:3rem;color:var(--gold);line-height:.6}
  .testimonials blockquote p{min-height:110px;color:var(--muted);font-size:.95rem;line-height:1.65}
  .testimonials footer{display:flex;justify-content:space-between;gap:12px;font-size:.86rem}
  .testimonials footer i{color:var(--gold);font-style:normal;letter-spacing:.05em}

  /* FAQ ACCORDION */
  .faqSection{background:#f9f8f6;border-bottom:1px solid var(--line)}
  .faqAccordion{display:flex;flex-direction:column;gap:12px;max-width:880px;margin:0 auto}
  .faqItem{background:white;border:1px solid var(--line);border-radius:6px;overflow:hidden;transition:border-color .25s ease,box-shadow .25s ease}
  .faqItem.open{border-color:var(--gold);box-shadow:0 6px 18px rgba(0,0,0,0.04)}
  .faqQuestion{width:100%;display:flex;justify-content:space-between;align-items:center;padding:22px 26px;background:transparent;border:0;text-align:left;font-size:1.05rem;font-weight:700;color:var(--silk);cursor:pointer;font-family:inherit}
  .faqIcon{font-size:1.4rem;color:var(--gold);font-weight:400;margin-left:16px}
  .faqAnswer{padding:0 26px 22px;color:var(--muted);font-size:.95rem;line-height:1.75}

  /* JOURNAL */
  .journal{display:grid;grid-template-columns:300px repeat(3,1fr);gap:20px;background:#faf9f7}
  .journal article{background:white;border:1px solid var(--line)}
  .journal article img{width:100%;height:190px;object-fit:cover;object-position:center 20%}
  .journal article div{padding:20px}
  .journal article small{display:block;margin-bottom:10px;color:var(--gold);text-transform:uppercase;letter-spacing:.13em;font-size:.78rem;font-weight:800}
  .journal article h3{text-transform:none;letter-spacing:0;font-family:Georgia,serif;font-size:1.35rem;font-weight:400;line-height:1.25}

  /* BLACK CTA */
  .blackCta{display:flex;align-items:center;justify-content:space-between;gap:30px;padding:36px max(42px,calc((100vw - 1180px)/2));background:#171717;color:white}
  .blackCta h2{font-size:2.6rem}
  .blackCta em{color:#d4d0cc}
  .blackCta p{margin:8px 0 0;color:#bbb;font-size:.95rem}
  .outlineDark{min-width:340px;border-color:#aaa;background:transparent}
  .outlineDark:hover{background:white;color:#111}

  /* FOOTER */
  .silkFooter{display:grid;grid-template-columns:1.3fr .6fr 1fr .9fr 1fr;gap:42px;padding:48px max(32px,calc((100vw - 1320px)/2))}
  .silkFooter>div:first-child{display:flex;flex-direction:column;justify-content:space-between}
  .silkFooter small{color:#777;font-size:.76rem;text-transform:uppercase;letter-spacing:.05em}
  .silkFooter a{display:block;margin-top:6px;color:var(--muted);font-size:.88rem;text-decoration:none}
  .silkFooter a:hover{color:var(--silk)}
  .silkFooter p{font-size:.88rem;margin:10px 0}
  .footerSocial{font-size:1.4rem!important;color:#222!important}
  .legal{margin-top:42px!important;font-size:.76rem!important;text-transform:uppercase}

  /* UPGRADED BOOKING MODAL */
  .silkModalBack{position:fixed;inset:0;z-index:100;display:grid;place-items:center;padding:22px;background:#111b;backdrop-filter:blur(10px)}
  .silkModal{position:relative;width:min(720px,100%);max-height:calc(100vh - 44px);overflow:auto;padding:44px;background:var(--paper);border-radius:8px;box-shadow:0 24px 60px rgba(0,0,0,0.3)}
  .silkModal h2{font-size:clamp(2.2rem,3.4vw,3.2rem)}
  .modalHeader{margin-bottom:20px}
  .modalSub{color:var(--muted);font-size:.94rem;margin:6px 0 0}
  .modalClose{position:absolute;right:16px;top:16px;width:42px;height:42px;border:1px solid var(--line);border-radius:50%;background:white;font-size:1.4rem;cursor:pointer;display:grid;place-items:center}
  .silkModal form{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:20px}
  .silkModal label{display:grid;gap:6px;font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em}
  .silkModal input,.silkModal select,.silkModal textarea{width:100%;padding:12px 14px;border:1px solid var(--line);background:white;font-size:.92rem;border-radius:4px}
  .silkModal .full{grid-column:1/-1}
  .timePickerGroup{margin:4px 0}
  .fieldLabel{display:block;font-size:.82rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em;margin-bottom:8px}
  .timePillRow{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
  .timeSlotPill{padding:10px 8px;border:1px solid var(--line);background:white;font-size:.76rem;font-weight:700;cursor:pointer;border-radius:4px;transition:all .2s;text-align:center}
  .timeSlotPill.active{background:var(--silk);color:white;border-color:var(--silk)}
  .modalDisclaimer{display:flex;align-items:center;gap:10px;background:#f2efe9;padding:12px 16px;border-radius:6px;font-size:.82rem;color:#494541}
  .modalProductNotice{background:#faf4ec;border:1px solid rgba(179,140,85,0.4);padding:12px 16px;border-radius:6px;font-size:.88rem;color:var(--silk);margin:8px 0}
  .bookingSuccess{display:grid;justify-items:center;min-height:380px;place-content:center;text-align:center}
  .bookingSuccess>span{display:grid;width:70px;height:70px;margin-bottom:24px;place-items:center;border:1.5px solid var(--gold);border-radius:50%;color:var(--gold);font-size:2rem}
  .bookingSuccess p:not(.kicker){max-width:470px;color:var(--muted);line-height:1.7;font-size:.95rem}
  .bookingSuccess .darkButton{margin-top:18px}

  /* RESPONSIVE LAYOUTS */
  @media(max-width:1120px){
    .desktopNav,.navBook{display:none}
    .silkMenu{display:grid;width:44px;height:44px;place-items:center;border:1px solid var(--line);border-radius:50%;background:white;font-size:1.25rem;cursor:pointer}
    .silkNav{grid-template-columns:1fr auto;min-height:78px;padding:0 20px}
    .mobileNav{position:absolute;left:12px;right:12px;top:calc(100% + 7px);display:grid;grid-template-columns:1fr 1fr;gap:4px;padding:14px;background:#faf9f7;border:1px solid var(--line);border-radius:8px;box-shadow:0 20px 50px rgba(0,0,0,0.15)}
    .mobileNav a{padding:12px 14px;color:var(--silk);text-decoration:none;text-transform:uppercase;font-size:.82rem;font-weight:700;border-radius:4px;transition:background .2s}
    .mobileNav a.active{background:var(--warm);color:var(--gold);font-weight:800}
    .transformationShowcase{grid-template-columns:1fr}
    .stylistsGrid,.productsGrid{grid-template-columns:1fr}
    .testimonials,.journal{grid-template-columns:1fr 1fr}
    .sectionIntro{grid-column:1/-1}
    .silkFooter{grid-template-columns:repeat(3,1fr)}
  }

  @media(max-width:760px){
    .silkNav{min-height:76px;padding:0 18px;grid-template-columns:1fr auto}
    .silkLogo .logoScript{font-size:2.2rem}
    .silkLogo .logoSub{font-size:.65rem;letter-spacing:.28em}
    .desktopNav,.navBook{display:none}
    .silkMenu{display:grid;width:44px;height:44px;place-items:center;border:1px solid var(--line);border-radius:50%;background:white;font-size:1.25rem}
    .mobileNav{position:absolute;left:12px;right:12px;top:calc(100% + 7px);display:grid;grid-template-columns:1fr 1fr;padding:12px;background:#faf9f7;border:1px solid var(--line);box-shadow:0 20px 50px #0002}
    .mobileNav a{padding:13px;color:var(--silk);text-decoration:none;text-transform:uppercase;font-size:.85rem;font-weight:700}
    .mobileNav a.active{background:var(--warm)}
    .silkHero{grid-template-columns:1fr}
    .heroCopy{padding:60px 24px}
    .silkPage h1{font-size:clamp(3.5rem,16vw,5rem)}
    .heroVisualWrap{min-height:480px}
    .heroGoldFrame{display:none}
    .featuredCard{bottom:16px;left:16px;right:16px;max-width:none;padding:12px 16px}
    .featuredTitle{font-size:1.15rem}
    .serviceStrip{grid-template-columns:1fr}
    .serviceIntro{padding:44px 22px 30px}
    .serviceStrip article{border-right:0;border-bottom:1px solid var(--line)}
    .serviceStrip .serviceIdeal,.serviceStrip ul{min-height:0}
    .servicePromise{grid-template-columns:1fr;gap:10px;padding:25px 22px}
    .servicePromise button{width:max-content;margin-top:6px}
    .storySplit{grid-template-columns:1fr}
    .storySplit>img{min-height:350px}
    .storySplit>div{padding:55px 24px}
    .sectionPad{padding:50px 20px}
    .stylistCard{grid-template-columns:1fr}
    .stylistImageWrap{min-height:260px}
    .productCard{grid-template-columns:1fr}
    .productImageWrap{min-height:220px}
    .timePillRow{grid-template-columns:1fr}
    .testimonials,.journal{grid-template-columns:1fr}
    .sectionIntro{grid-column:auto}
    .blackCta{align-items:flex-start;flex-direction:column;padding:36px 24px}
    .outlineDark{min-width:0;width:100%}
    .silkFooter{grid-template-columns:1fr 1fr;padding:42px 22px}
    .silkFooter>div:first-child{grid-column:1/-1;gap:30px}
    .silkModal{padding:32px 20px}
    .silkModal form{grid-template-columns:1fr}
    .silkModal .full{grid-column:1}
    .silkModal h2{font-size:2.4rem}
  }

  @media(prefers-reduced-motion:reduce){
    .silkPage *,.silkPage *::before,.silkPage *::after{scroll-behavior:auto!important;transition-duration:.01ms!important}
  }
`;
