import { useEffect, useRef, useState } from "react";
import heroImage from "../../assets/optimized/beauty/aura/hero.webp";
import interiorImage from "../../assets/optimized/beauty/aura/interior.webp";
import pathImage from "../../assets/optimized/beauty/aura/pathtorenewal.webp";
import bodyImage from "../../assets/optimized/beauty/aura/bodytreatment.webp";
import massageImage from "../../assets/optimized/beauty/aura/massage.webp";
import facialImage from "../../assets/optimized/beauty/aura/facial.webp";
import hydroImage from "../../assets/optimized/beauty/aura/hydro.webp";
import restoreImage from "../../assets/optimized/beauty/aura/restore.webp";
import mayaImage from "../../assets/optimized/beauty/aura/maya.webp";
import arjunImage from "../../assets/optimized/beauty/aura/arjun.webp";
import laylaImage from "../../assets/optimized/beauty/aura/layla.webp";
import noahImage from "../../assets/optimized/beauty/aura/noah.webp";
import oilImage from "../../assets/optimized/beauty/aura/oil.webp";
import soakImage from "../../assets/optimized/beauty/aura/soak.webp";
import glowImage from "../../assets/optimized/beauty/aura/glow.webp";
import candleImage from "../../assets/optimized/beauty/aura/candal.webp";
import maskImage from "../../assets/optimized/beauty/aura/sleepmask.webp";

const navSections = [
  { id: "home", label: "Sanctuary" },
  { id: "rituals", label: "Rituals" },
  { id: "philosophy", label: "Philosophy" },
  { id: "journey", label: "Journey" },
  { id: "practitioners", label: "Practitioners" },
  { id: "memberships", label: "Memberships" },
  { id: "apothecary", label: "Apothecary" },
  { id: "first-visit", label: "First Visit" },
  { id: "reviews", label: "Reviews" },
];

const ritualCategories = [
  "All Rituals",
  "Massage Therapy",
  "Facial Rituals",
  "Hydro & Thermal",
  "Restorative Care",
];

const rituals = [
  {
    category: "Hydro & Thermal",
    title: "Mineral Botanical Body Wrap",
    text: "Full-body Dead Sea salt exfoliation, warm volcanic clay cocoon, and deep botanical hydration infusion.",
    image: bodyImage,
    ritualKey: "Body Treatment",
    duration: "90 min",
    price: "$210",
    badge: "Mineral Detox",
    scentNotes: "Juniper Berry, Cedarwood & Wild Sea Moss",
  },
  {
    category: "Massage Therapy",
    title: "Somatic Tension Release Massage",
    text: "Intuitive blending of rhythmic deep pressure, warm bamboo therapy, and custom cold-pressed botanical oils.",
    image: massageImage,
    ritualKey: "Massage Therapy",
    duration: "60–90 min",
    price: "From $165",
    badge: "Guest Favorite",
    scentNotes: "Wild Vetiver, Australian Sandalwood & Sweet Orange",
  },
  {
    category: "Facial Rituals",
    title: "Cellular Radiance Gua Sha Facial",
    text: "Deep double cleanse, enzymatic cellular peel, lymphatic rose-quartz sculpting, and oxygenating finishing veil.",
    image: facialImage,
    ritualKey: "Facial Ritual",
    duration: "75 min",
    price: "From $185",
    badge: "Cellular Glow",
    scentNotes: "Rose Geranium, Frankincense & Organic Neroli",
  },
  {
    category: "Hydro & Thermal",
    title: "Thermal Contrast Hydrotherapy",
    text: "Guided vitality circuit alternating between 98°F mineral magnesium pool, Arctic mist plunge, and cedar infrared sauna.",
    image: hydroImage,
    ritualKey: "Hydrotherapy",
    duration: "45–60 min",
    price: "From $110",
    badge: "Vitality Circuit",
    scentNotes: "Mountain Eucalyptus, Peppermint & Pine Needle",
  },
  {
    category: "Restorative Care",
    title: "Deep Sleep & Nervous Reset",
    text: "Grounding craniosacral scalp therapy, warm sesame foot compress, weighted silk pressure, and binaural sound rest.",
    image: restoreImage,
    ritualKey: "Restorative Care",
    duration: "90 min",
    price: "$195",
    badge: "Deep Nervous Reset",
    scentNotes: "Roman Chamomile, French Lavender & Ylang Ylang",
  },
];

const ritualGuides: Record<
  string,
  { benefits: string; expect: string; prepare: string; aftercare: string }
> = {
  "Body Treatment": {
    benefits:
      "Full lymphatic drainage stimulation, silky cellular renewal, and an immediate sensation of physical lightness and renewed vigor.",
    expect:
      "A personal wellness consultation, whole-body sea salt scrub, heated mineral-rich clay cocoon, and nourishing botanical massage finish.",
    prepare:
      "Drink plenty of water. We suggest refraining from shaving or active skin exfoliants for 48 hours prior to your session.",
    aftercare:
      "Continue hydrating with warm herbal teas. Avoid strenuous gym workouts, saunas, or alcohol for the remainder of the evening.",
  },
  "Massage Therapy": {
    benefits:
      "Profound muscular unwinding, nervous-system downregulation, reduced cortisol, and renewed range of joint mobility.",
    expect:
      "Your therapist conducts a brief posture assessment, adapting pressure, bamboo rods, and custom warm oils to your body’s unique daily needs.",
    prepare:
      "Arrive hydrated. Please communicate past injuries, localized sensitivities, or pregnancy stages so we tailor your pressure perfectly.",
    aftercare:
      "Sip warm magnesium water, take a gentle walk, and grant your physical body restful hours to assimilate the tissue release.",
  },
  "Facial Ritual": {
    benefits:
      "Luminous skin clarity, lifted facial contours, stimulated collagen production, and strengthened skin barrier resilience.",
    expect:
      "Skin analysis under magnifying lamp, botanical double cleanse, micro-foliation, lifting gua sha sculpting, peptide mask, and SPF seal.",
    prepare:
      "Pause retinoids, AHA/BHA chemical peels, and prescription active topicals for 3 days before your appointment.",
    aftercare:
      "Rely on gentle hydration and mineral SPF. Avoid heavy makeup, direct sun exposure, and steam rooms for 48 hours.",
  },
  Hydrotherapy: {
    benefits:
      "Heightened vascular circulation, reduced systemic inflammation, endorphin release, and complete mental clarity.",
    expect:
      "A guided immersion beginning in the 98°F warm magnesium pool, progressing to the cedar infrared sauna, and concluding with contrast cold plunge.",
    prepare:
      "Eat a light snack 1 hour prior and hydrate well. Notify your hydrotherapist of any cardiovascular conditions or pregnancy.",
    aftercare:
      "Rest in the silent sanctuary lounge for at least 20 minutes wrapped in your plush linen robe before heading into the city.",
  },
  "Restorative Care": {
    benefits:
      "Deep vagus nerve reset, easing of mental burnout and anxiety, and restorative deep sleep architecture support.",
    expect:
      "Gentle somatic breath pacing, rhythmic warm herbal oil scalp therapy, sound immersion, and weighted silk eye rest.",
    prepare:
      "Dress in loose, comfortable loungewear. Arrive 15 minutes early to transition your mind into our quiet sensory lounge.",
    aftercare:
      "Protect your evening from bright screens and stressful tasks. Follow the customized herbal sleep protocol given by your guide.",
  },
};

const practitioners = [
  {
    name: "Maya Dey",
    role: "Wellness Director & Master Alchemist",
    specialties: ["Holistic Consultation", "Somatic Integration", "Herbal Medicine"],
    rating: "5.0",
    sessions: "420+ sessions",
    image: mayaImage,
    ritualKey: "Restorative Care",
  },
  {
    name: "Arjun Mehta",
    role: "Senior Massage Therapist",
    specialties: ["Deep Tissue Release", "Myofascial Therapy", "Warm Bamboo Pressure"],
    rating: "4.9",
    sessions: "380+ sessions",
    image: arjunImage,
    ritualKey: "Massage Therapy",
  },
  {
    name: "Leila Chen",
    role: "Master Esthetician & Skin Healer",
    specialties: ["Sculpting Buccal Massage", "Gua Sha Lift", "Botanical Peels"],
    rating: "5.0",
    sessions: "310+ sessions",
    image: laylaImage,
    ritualKey: "Facial Ritual",
  },
  {
    name: "Noah Patel",
    role: "Thermal Hydrotherapy Specialist",
    specialties: ["Contrast Watsu", "Magnesium Immersion", "Thermal Vagus Recovery"],
    rating: "4.9",
    sessions: "290+ sessions",
    image: noahImage,
    ritualKey: "Hydrotherapy",
  },
];

interface ProductItem {
  id: string;
  name: string;
  price: number;
  priceFormatted: string;
  size: string;
  scent: string;
  image: string;
  badge: string;
}

const products: ProductItem[] = [
  {
    id: "oil",
    name: "Aroma Body Oil",
    price: 68,
    priceFormatted: "$68",
    size: "100ml / 3.4 fl oz",
    scent: "Vetiver, Frankincense & Bergamot",
    image: oilImage,
    badge: "Best Seller",
  },
  {
    id: "soak",
    name: "Restorative Bath Soak",
    price: 48,
    priceFormatted: "$48",
    size: "450g / 16 oz",
    scent: "Dead Sea Salt, French Green Clay & Eucalyptus",
    image: soakImage,
    badge: "Mineral Detox",
  },
  {
    id: "glow",
    name: "Glow Facial Elixir",
    price: 88,
    priceFormatted: "$88",
    size: "30ml / 1.0 fl oz",
    scent: "Prickly Pear, Rosehip Seed & Neroli",
    image: glowImage,
    badge: "Cellular Radiance",
  },
  {
    id: "candle",
    name: "Calm Candle",
    price: 42,
    priceFormatted: "$42",
    size: "240g · 55 hr burn",
    scent: "Hinoki Wood, Smoked Cedar & Amber",
    image: candleImage,
    badge: "Hand-Poured",
  },
  {
    id: "mask",
    name: "Silk Sleep Mask",
    price: 28,
    priceFormatted: "$28",
    size: "100% Mulberry Silk",
    scent: "Infused with organic French lavender buds",
    image: maskImage,
    badge: "Restorative Sleep",
  },
];

const reviews = [
  {
    quote:
      "Aura is unlike any spa in California. The moment the cedar door closes, time seems to stop. The somatic massage dissolved weeks of tension, and the quiet tea lounge is absolute heaven.",
    name: "Sarah Lindqvist",
    city: "Beverly Hills, CA",
    treatment: "Somatic Massage & Magnesium Hydrotherapy",
    rating: 5,
  },
  {
    quote:
      "Leila’s facial sculpting technique is transformative. My skin was still visibly glowing and radiant four days later. The botanical formulations smell like an enchanted morning forest.",
    name: "James Thorne",
    city: "West Hollywood, CA",
    treatment: "Cellular Radiance Gua Sha Facial",
    rating: 5,
  },
  {
    quote:
      "The practitioners possess a rare intuitive presence. You are never rushed. From the warm herbal welcome tonic to the weighted silk eye rest, every single moment is deliberate poetry.",
    name: "Priya Malhotra",
    city: "Bel Air, CA",
    treatment: "Deep Sleep & Nervous Reset Sanctuary",
    rating: 5,
  },
];

const firstVisitFaqs = [
  {
    q: "When should I arrive for my appointment?",
    a: "Please arrive 20 minutes before your scheduled ritual. This allows you ample unhurried time to change into our Italian linen robe, slip into spa footwear, and enjoy a complimentary seasonal adaptogenic herbal tonic in our relaxation lounge.",
  },
  {
    q: "What should I wear, and what is provided?",
    a: "Wear whatever feels effortless to you. Upon arrival, your personal keyless locker contains an organic waffle robe, slippers, plush towels, and private vanity amenities (Dyson hair care, botanical cleansers, and organic elixirs).",
  },
  {
    q: "What is your cancellation and adjustment policy?",
    a: "We reserve your dedicated practitioner and sanctuary room exclusively for you. We kindly ask for at least 24 hours notice for any cancellations or adjustments so we may accommodate waitlisted guests.",
  },
  {
    q: "Can I enjoy treatments while pregnant?",
    a: "Yes, with tailored care. We offer dedicated second- and third-trimester prenatal massage techniques, safe pregnancy-approved botanical facial protocols, and gentle lukewarm hydro-soaks.",
  },
  {
    q: "Do you accommodate low-sensory or silent visits?",
    a: "Wholeheartedly. Many of our guests seek refuge from sensory overload. Simply select 'Silent Appointment' when reserving, and we will honor quiet presence throughout your ritual with zero unnecessary dialogue.",
  },
];

function Mark() {
  return (
    <a className="auraMark" href="#home" aria-label="Aura Wellness Spa Home">
      <span className="markIcon">◉</span>
      <div className="markText">
        <b>Aura</b>
        <small>W E L L N E S S &nbsp; S P A</small>
      </div>
    </a>
  );
}

export default function AuraWellnessSpa() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRitual, setSelectedRitual] = useState("Massage Therapy");
  const [selectedPractitioner, setSelectedPractitioner] = useState("Any Available Guide");
  const [preferredTime, setPreferredTime] = useState("Afternoon (12pm–4pm)");
  const [focusIntention, setFocusIntention] = useState("Tension Relief");
  const [success, setSuccess] = useState(false);
  const [active, setActive] = useState("home");
  const [activeCategory, setActiveCategory] = useState("All Rituals");
  const [ritualDetail, setRitualDetail] = useState<string | null>(null);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [cart, setCart] = useState<Array<ProductItem & { quantity: number }>>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [soundPlaying, setSoundPlaying] = useState(false);
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
        setActive("reviews");
      } else {
        const scrollThreshold = scrollY + 140;
        const passed = sectionElements.filter(
          (section) => section.offsetTop <= scrollThreshold,
        );
        if (passed.length > 0) {
          setActive(passed[passed.length - 1].id);
        } else {
          setActive("home");
        }
      }

      const height = docHeight - windowHeight;
      setScrollProgress(height > 0 ? (scrollY / height) * 100 : 0);
    };

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setBookingOpen(false);
        setRitualDetail(null);
        setCartOpen(false);
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
    document.body.style.overflow =
      bookingOpen || menuOpen || Boolean(ritualDetail) || cartOpen
        ? "hidden"
        : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [bookingOpen, menuOpen, ritualDetail, cartOpen]);

  useEffect(() => {
    if (!bookingOpen || !modalRef.current) return;
    const items = Array.from(
      modalRef.current.querySelectorAll<HTMLElement>(
        "button,input,select,textarea,a[href]",
      ),
    ).filter((item) => !item.hasAttribute("disabled"));
    items[0]?.focus();
    const trap = (event: KeyboardEvent) => {
      if (event.key !== "Tab" || items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    const modal = modalRef.current;
    modal.addEventListener("keydown", trap);
    return () => modal.removeEventListener("keydown", trap);
  }, [bookingOpen, success]);

  const openBook = (ritual = "Massage Therapy", practitioner = "Any Available Guide") => {
    setSelectedRitual(ritual);
    setSelectedPractitioner(practitioner);
    setSuccess(false);
    setBookingOpen(true);
  };

  const addToCart = (product: ProductItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setCartOpen(true);
  };

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const filteredRituals =
    activeCategory === "All Rituals"
      ? rituals
      : rituals.filter((r) => r.category === activeCategory);

  useEffect(() => {
    const oldTitle = document.title;
    document.title = "Aura Wellness Spa | Luxury Sanctuary & Healing in Beverly Hills";
    let meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const created = !meta;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    const oldDescription = meta.content;
    meta.content =
      "Immersive massage therapy, cellular facials, thermal hydrotherapy, and holistic wellness rituals at Aura Wellness Spa in Beverly Hills.";
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "DaySpa",
      name: "Aura Wellness Spa",
      telephone: "+1-310-555-7890",
      email: "hello@aurawellness.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "123 Serenity Way",
        addressLocality: "Beverly Hills",
        addressRegion: "CA",
        postalCode: "90210",
      },
      priceRange: "$$$",
    });
    document.head.appendChild(script);
    return () => {
      document.title = oldTitle;
      if (created) meta?.remove();
      else meta!.content = oldDescription;
      script.remove();
    };
  }, []);

  return (
    <main className="auraPage">
      <style>{css}</style>

      {/* STICKY SANCTUARY NAVIGATION */}
      <header className="auraNav">
        <div className="scrollProgressBar" style={{ width: `${scrollProgress}%` }} />
        <Mark />
        <nav className="desktopNav" aria-label="Primary navigation">
          {navSections.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? "active" : ""}
              aria-current={active === item.id ? "page" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="navActions">
          <button
            type="button"
            className="cartNavTrigger"
            onClick={() => setCartOpen(true)}
            aria-label={`Shopping bag containing ${cart.length} items`}
          >
            <span>Bag</span>
            <span className="cartCount">{cart.reduce((s, i) => s + i.quantity, 0)}</span>
          </button>
          <button
            type="button"
            className="copperBtn navBookBtn"
            onClick={() => openBook()}
          >
            Reserve Ritual <span>→</span>
          </button>
          <button
            type="button"
            className="auraMenu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation"
          >
            {menuOpen ? "×" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <nav className="auraMobile" aria-label="Mobile navigation">
            {navSections.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={active === item.id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              type="button"
              className="copperBtn"
              onClick={() => {
                setMenuOpen(false);
                openBook();
              }}
            >
              Reserve Ritual →
            </button>
          </nav>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="auraHero">
        <div className="heroAura heroAuraOne" aria-hidden="true" />
        <div className="heroAura heroAuraTwo" aria-hidden="true" />

        <div className="heroWords">
          <div className="heroStatusRow">
            <div className="heroAvailability" role="status">
              <span className="availDot" />
              <span>Welcoming Spring Rituals · Heated Magnesium Hydro-Pool 98°F</span>
            </div>
            <button
              type="button"
              className={`soundscapeBtn ${soundPlaying ? "playing" : ""}`}
              onClick={() => setSoundPlaying(!soundPlaying)}
              title="Toggle ambient sanctuary soundscape"
            >
              <span className="soundBars">
                <i />
                <i />
                <i />
              </span>
              <span>{soundPlaying ? "Calm Ambient On" : "Hinoki & Singing Bowls"}</span>
            </button>
          </div>

          <p className="overline">A Return to Sacred Stillness · Beverly Hills</p>

          <h1>
            Wellness in
            <br />
            <em className="heroCursive">Its Purest Form.</em>
          </h1>

          <div className="ornament">
            <span />
            <b>✦</b>
            <span />
          </div>

          <p className="heroIntro">
            A quiet architectural sanctuary to return to your natural rhythm.
            Intentionally curated somatic therapies, therapeutic hydro-immersion, and restorative touch for mind, body, and spirit.
          </p>

          <div className="heroActions">
            <button
              type="button"
              className="copperBtn heroCta"
              onClick={() => openBook()}
            >
              Reserve Your Ritual <span>→</span>
            </button>
            <a href="#rituals" className="lineBtn">
              Explore Rituals <span>↓</span>
            </a>
          </div>

          <div className="heroTrust">
            <div className="trustItem">
              <div className="trustScore">
                <b>4.9</b>
                <i>★★★★★</i>
              </div>
              <small>320+ verified guest reviews</small>
            </div>
            <div className="trustItem">
              <b>15+</b>
              <small>Master somatic practitioners</small>
            </div>
            <div className="trustItem">
              <b>100%</b>
              <small>Clean botanical formulations</small>
            </div>
          </div>
        </div>

        <div className="heroImage">
          <div className="heroFrame">
            <img
              src={heroImage}
              alt="Serene Aura wellness spa pool with natural stone and water reflections"
              fetchPriority="high"
              decoding="async"
            />
            <div className="heroShade" />
          </div>

          <div className="heroLocation">
            <span className="locCity">Beverly Hills Atelier</span>
            <b>123 Serenity Way · Today 9am–7pm</b>
          </div>

          <blockquote className="heroFloatingCard">
            <span className="quoteSymbol">“</span>
            <p>
              The moment you cross the threshold, the outer world softens.
            </p>
            <small>— The Aura Sanctuary Ethos</small>
          </blockquote>

          <div className="heroSeal">
            <span>✦</span>
            <b>Aura</b>
            <small>Restore Within</small>
          </div>
        </div>

        <a className="heroScroll" href="#rituals" aria-label="Scroll to discover rituals">
          <span>Scroll to explore</span>
          <b>↓</b>
        </a>
      </section>

      {/* RITUALS SECTION WITH INTERACTIVE FILTER */}
      <section id="rituals" className="ritualSection sectionPad" aria-labelledby="rituals-title">
        <div className="sectionHeader">
          <div>
            <p className="overline">Bespoke Therapies</p>
            <h2 id="rituals-title">
              Choose what you need
              <br />
              <em>to feel restored.</em>
            </h2>
          </div>
          <p className="headerDesc">
            Every ritual begins with an aromatic sensory consultation and ends with personalized
            take-home botanicals to extend lasting tranquility.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="ritualFilterRow" role="tablist" aria-label="Ritual categories">
          {ritualCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat}
              className={`filterTab ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Ritual Cards Grid */}
        <div className="ritualGrid">
          {filteredRituals.map((r, index) => (
            <article key={r.title} className="ritualCard">
              <div className="ritualPhoto">
                <img
                  src={r.image}
                  alt={`${r.title} treatment at Aura Wellness Spa`}
                  loading="lazy"
                  decoding="async"
                />
                <span className="ritualNumber">0{index + 1}</span>
                <span className="ritualBadge">{r.badge}</span>
              </div>
              <div className="ritualBody">
                <div className="ritualCategoryTag">{r.category}</div>
                <h3>{r.title}</h3>
                <p className="ritualText">{r.text}</p>
                <div className="scentNoteRow">
                  <span className="scentLabel">Botanical Notes:</span>
                  <span className="scentVal">{r.scentNotes}</span>
                </div>
                <div className="ritualMeta">
                  <span>⏱ {r.duration}</span>
                  <strong>{r.price}</strong>
                </div>
                <div className="ritualActions">
                  <button
                    type="button"
                    className="outlineBtn"
                    onClick={() => setRitualDetail(r.ritualKey)}
                  >
                    View Guide
                  </button>
                  <button
                    type="button"
                    className="copperBtn"
                    onClick={() => openBook(r.ritualKey)}
                  >
                    Reserve <span>→</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="ritualConciergeBanner">
          <div className="conciergeIcon">✦</div>
          <div>
            <h4>Unsure which ritual your body asks for today?</h4>
            <p>
              Connect with our master concierge for a complimentary 10-minute holistic consultation.
            </p>
          </div>
          <button
            type="button"
            className="outlineBtn white"
            onClick={() => openBook("Holistic Consultation")}
          >
            Plan My Visit with Concierge →
          </button>
        </div>
      </section>

      {/* PHILOSOPHY & VALUES */}
      <section id="philosophy" className="philosophy sectionPad" aria-labelledby="philo-title">
        <div className="philosophyCopy">
          <p className="overline">Our Living Ethos</p>
          <h2 id="philo-title">
            Wellness is not an escape.
            <br />
            <em>It is a return home.</em>
          </h2>
          <p className="philoLead">
            At Aura, ancient Eastern restorative traditions harmonize with circadian biology. We believe true regeneration occurs only when the nervous system feels entirely safe to release.
          </p>
          <a href="#journey" className="textLink">
            Explore the Aura Journey <span>→</span>
          </a>
        </div>
        <div className="philosophyVisual">
          <img
            src={interiorImage}
            alt="Natural wellness lounge with earthen stone and warm ambient lighting"
            loading="lazy"
            decoding="async"
          />
          <div className="philoBadge">
            <span>Silent Atmosphere</span>
            <b>Zero Devices Sanctuary</b>
          </div>
        </div>
        <div className="valuesList">
          {[
            {
              title: "Intentional Presence",
              desc: "Every touch, breath pace, and movement is delivered with undivided mindfulness and somatic awareness.",
            },
            {
              title: "Living Botanicals",
              desc: "Cold-pressed wildcrafted oils, active mineral clays, and organic plant extracts devoid of synthetic fragrance.",
            },
            {
              title: "Circadian Restoration",
              desc: "Our thermal suites and light therapy align with natural biorhythms to support deep nocturnal cellular recovery.",
            },
          ].map((val) => (
            <article key={val.title} className="valueCard">
              <span className="valBullet">✦</span>
              <div>
                <h3>{val.title}</h3>
                <p>{val.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* THE WELLNESS JOURNEY TIMELINE */}
      <section id="journey" className="journeySection sectionPad" aria-labelledby="journey-title">
        <div className="sectionHeaderCenter">
          <p className="overline">The Sanctuary Path</p>
          <h2 id="journey-title">
            Your step-by-step
            <br />
            <em>path to renewal.</em>
          </h2>
          <p className="headerSub">
            From the moment you arrive to the aftercare rituals you take home, each phase is tailored to dissolve fatigue.
          </p>
        </div>

        <div className="journeyGrid">
          <div className="journeyTimeline">
            {[
              {
                step: "01",
                title: "Arrive & Connect",
                desc: "Check into your private locker suite, slip into an Italian linen robe, and sip warm adaptogenic herbal tea in our silent lounge.",
              },
              {
                step: "02",
                title: "Curate & Map",
                desc: "Your practitioner conducts an intuitive consultation, calibrating organic scent notes, pressure intensity, and target tension areas.",
              },
              {
                step: "03",
                title: "Immerse & Restore",
                desc: "Experience rhythmic hands-on bodywork, thermal contrast hydrotherapy, or cellular facial massage in soundproof chambers.",
              },
              {
                step: "04",
                title: "Sustain & Integrate",
                desc: "Conclude in the sensory relaxation room with fresh botanical infusions, receiving a bespoke home ritual guide to preserve results.",
              },
            ].map((st) => (
              <article key={st.step} className="journeyCard">
                <div className="stepBadge">{st.step}</div>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </article>
            ))}
          </div>
          <div className="journeyVisual">
            <img
              src={pathImage}
              alt="Guest resting peacefully wrapped in soft linen after a restoration ritual"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {/* PRACTITIONERS SECTION */}
      <section id="practitioners" className="practitionersSection sectionPad" aria-labelledby="prac-title">
        <div className="sectionHeader">
          <div>
            <p className="overline">Master Healers & Guides</p>
            <h2 id="prac-title">
              Guidance on your
              <br />
              <em>path to balance.</em>
            </h2>
          </div>
          <p className="headerDesc">
            Our practitioners average 12+ years of worldwide somatic, osteopathic, and dermal training, offering an intuitive presence that cannot be replicated.
          </p>
        </div>

        <div className="practitionersGrid">
          {practitioners.map((p) => (
            <article key={p.name} className="practitionerCard">
              <div className="pracPhoto">
                <img
                  src={p.image}
                  alt={`${p.name}, ${p.role}`}
                  loading="lazy"
                  decoding="async"
                />
                <span className="pracRating">★ {p.rating}</span>
              </div>
              <div className="pracBody">
                <h3>{p.name}</h3>
                <p className="pracRole">{p.role}</p>
                <div className="specialtyPills">
                  {p.specialties.map((spec) => (
                    <span key={spec} className="specPill">
                      {spec}
                    </span>
                  ))}
                </div>
                <div className="pracFooter">
                  <small className="sessionCount">{p.sessions}</small>
                  <button
                    type="button"
                    className="pracBookBtn"
                    onClick={() => openBook(p.ritualKey, p.name)}
                  >
                    Book with {p.name.split(" ")[0]} →
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* MEMBERSHIPS & PACKAGES */}
      <section id="memberships" className="membershipSection sectionPad" aria-labelledby="member-title">
        <div className="sectionHeaderCenter">
          <p className="overline">Sanctuary Memberships & Retreats</p>
          <h2 id="member-title">
            Deepen your practice of
            <br />
            <em>consistent self-care.</em>
          </h2>
          <p className="headerSub">
            Choose ongoing monthly restoration or indulge in a transformative full-day immersion retreat.
          </p>
        </div>

        <div className="membershipGrid">
          {/* Tier 1 */}
          <article className="membershipCard">
            <div className="cardHeader">
              <span className="cardOverline">Ongoing Wellbeing</span>
              <h3>The Sanctuary Pass</h3>
              <div className="cardPrice">
                <b>$265</b>
                <small>/ month</small>
              </div>
              <p className="cardSummary">
                Designed for those committed to a monthly rhythm of nervous system recovery and cellular care.
              </p>
            </div>
            <ul className="perksList">
              <li>✦ One 90-minute bespoke ritual of choice every month</li>
              <li>✦ Unlimited weekday access to the 98°F magnesium pool & lounges</li>
              <li>✦ 15% private privilege discount across our entire Apothecary</li>
              <li>✦ Priority concierge booking with 48-hour guaranteed slots</li>
              <li>✦ Seasonal adaptogenic herbal tea gift box upon renewal</li>
            </ul>
            <button
              type="button"
              className="copperBtn full"
              onClick={() => openBook("Sanctuary Monthly Membership")}
            >
              Enquire for Membership <span>→</span>
            </button>
          </article>

          {/* Tier 2 */}
          <article className="membershipCard featured">
            <span className="popularBadge">Most Loved Immersion</span>
            <div className="cardHeader">
              <span className="cardOverline">Full-Day Transformation</span>
              <h3>Day Immersion Retreat</h3>
              <div className="cardPrice">
                <b>$485</b>
                <small>/ single guest</small>
              </div>
              <p className="cardSummary">
                A 3.5-hour complete restoration sequence combining hydrotherapy, bodywork, and dermal nutrition.
              </p>
            </div>
            <ul className="perksList">
              <li>✦ 45-min Contrast Hydrotherapy Vitality Circuit</li>
              <li>✦ 75-min Somatic Tension Release Bamboo Massage</li>
              <li>✦ 60-min Cellular Radiance Gua Sha Facial Ritual</li>
              <li>✦ Organic garden lunch & cold-pressed botanical infusions</li>
              <li>✦ Take-home complimentary 50ml Aroma Body Oil ($68 value)</li>
            </ul>
            <button
              type="button"
              className="copperBtn full"
              onClick={() => openBook("Day Immersion Retreat")}
            >
              Reserve Full Day Retreat <span>→</span>
            </button>
          </article>
        </div>
      </section>

      {/* APOTHECARY SHOP */}
      <section id="apothecary" className="apothecarySection sectionPad" aria-labelledby="shop-title">
        <div className="sectionHeader">
          <div>
            <p className="overline">At-Home Self-Care</p>
            <h2 id="shop-title">
              Bring the calm of Aura
              <br />
              <em>into your home.</em>
            </h2>
          </div>
          <div className="shopHeaderActions">
            <button
              type="button"
              className="outlineBtn"
              onClick={() => {
                addToCart({
                  id: "gift-150",
                  name: "Aura Sanctuary Gift Card",
                  price: 150,
                  priceFormatted: "$150",
                  size: "Digital / Physical Boxed Card",
                  scent: "Redeemable on all rituals & apothecary",
                  image: interiorImage,
                  badge: "Gift of Calm",
                });
              }}
            >
              + Add a $150 Gift Card
            </button>
          </div>
        </div>

        <div className="productsGrid">
          {products.map((p) => (
            <article key={p.id} className="productCard">
              <div className="prodPhoto">
                <img src={p.image} alt={p.name} loading="lazy" decoding="async" />
                <span className="prodBadge">{p.badge}</span>
              </div>
              <div className="prodBody">
                <div className="prodTop">
                  <h4>{p.name}</h4>
                  <span className="prodPrice">{p.priceFormatted}</span>
                </div>
                <small className="prodSize">{p.size}</small>
                <p className="prodScent">
                  <strong>Notes:</strong> {p.scent}
                </p>
                <button
                  type="button"
                  className="addToBagBtn"
                  onClick={() => addToCart(p)}
                >
                  Add to Bag <span>+</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FIRST VISIT FAQ ACCORDION */}
      <section id="first-visit" className="faqSection sectionPad" aria-labelledby="faq-title">
        <div className="sectionHeaderCenter">
          <p className="overline">Mindful Preparation</p>
          <h2 id="faq-title">
            Your first visit.
            <br />
            <em>Arrive as you are.</em>
          </h2>
          <p className="headerSub">
            Everything you need to know to transition smoothly from the rush of the city into peaceful sanctuary.
          </p>
        </div>

        <div className="faqAccordion">
          {firstVisitFaqs.map((item, index) => {
            const isOpen = openFaq === index;
            return (
              <article key={item.q} className={`faqCard ${isOpen ? "open" : ""}`}>
                <button
                  type="button"
                  className="faqQuestionBtn"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span>{item.q}</span>
                  <span className="faqToggleIcon">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <div className="faqAnswer">
                    <p>{item.a}</p>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>

      {/* GUEST REVIEWS */}
      <section id="reviews" className="reviewsSection sectionPad" aria-labelledby="reviews-title">
        <div className="reviewsHeader">
          <div>
            <p className="overline">Kind Words from Guests</p>
            <h2 id="reviews-title">
              Transformative
              <br />
              <em>sanctuary moments.</em>
            </h2>
          </div>
          <div className="carouselNav">
            <button
              type="button"
              className="carouselBtn"
              onClick={() =>
                setReviewIndex((reviewIndex + reviews.length - 1) % reviews.length)
              }
              aria-label="Previous guest review"
            >
              ←
            </button>
            <span className="carouselCounter">
              {reviewIndex + 1} / {reviews.length}
            </span>
            <button
              type="button"
              className="carouselBtn"
              onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)}
              aria-label="Next guest review"
            >
              →
            </button>
          </div>
        </div>

        <div className="reviewsViewer">
          {reviews.map((rev, index) => (
            <blockquote
              key={rev.name}
              className={`reviewCard ${reviewIndex === index ? "active" : ""}`}
            >
              <div className="reviewStars">★★★★★</div>
              <p className="reviewQuote">“{rev.quote}”</p>
              <footer>
                <b>{rev.name}</b>
                <span className="clientCity">{rev.city}</span>
                <span className="clientTreatment">{rev.treatment}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="auraFooter">
        <div className="footerBrand">
          <Mark />
          <p className="brandEthos">
            An architectural sanctuary for mind, body, and spirit nestled in Beverly Hills. We honor your presence and hold space for your renewal.
          </p>
          <div className="socialIcons">
            <span>◎ Instagram</span>
            <span>p Pinterest</span>
            <span>✉ Concierge</span>
          </div>
          <small className="copyright">© 2026 Aura Wellness Spa. All rights reserved.</small>
        </div>

        <div className="footerCol">
          <h4>Sanctuary Navigation</h4>
          {navSections.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </div>

        <div className="footerCol">
          <h4>Atelier & Hours</h4>
          <p>
            <a
              href="https://maps.google.com/?q=123+Serenity+Way+Beverly+Hills+CA+90210"
              target="_blank"
              rel="noreferrer"
            >
              123 Serenity Way
              <br />
              Beverly Hills, CA 90210
            </a>
          </p>
          <p>
            <a href="tel:+13105557890">(310) 555-7890</a>
            <br />
            <a href="mailto:hello@aurawellness.com">hello@aurawellness.com</a>
          </p>
          <p className="hoursText">
            Tuesday – Sunday: 9:00 AM – 7:00 PM
            <br />
            Monday: Dedicated Sanctuary Deep Cleanse
          </p>
        </div>

        <div className="footerCol newsletterCol">
          <h4>Receive Sanctuary Notes</h4>
          <p>Seasonal equinox invitations, circadian health essays, and private retreat access.</p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thank you for joining our Sanctuary circle.");
            }}
          >
            <label htmlFor="aura-email" className="srOnly">
              Email address
            </label>
            <div className="inputRow">
              <input
                id="aura-email"
                type="email"
                required
                placeholder="Enter your email"
              />
              <button type="submit" className="copperBtn">
                Join
              </button>
            </div>
          </form>
          <small className="noSpam">We honor your inbox. Zero marketing clutter.</small>
        </div>
      </footer>

      {/* MOBILE FLOATING BAR */}
      <div className="mobileBar">
        <button
          type="button"
          className="mobileBookBtn copperBtn"
          onClick={() => openBook()}
        >
          Reserve Your Ritual <span>→</span>
        </button>
      </div>

      {/* CART FLOATING TRIGGER */}
      <button
        type="button"
        className="cartFloatBtn"
        onClick={() => setCartOpen(true)}
        aria-label={`Open shopping bag with ${cart.length} items`}
      >
        <span>Bag</span>
        <span className="badge">{cart.reduce((s, i) => s + i.quantity, 0)}</span>
      </button>

      {/* CONCIERGE BOOKING MODAL */}
      {bookingOpen && (
        <div
          className="auraModalBack"
          onMouseDown={(e) => e.target === e.currentTarget && setBookingOpen(false)}
        >
          <section
            ref={modalRef}
            className="auraModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="aura-book-title"
          >
            <button
              type="button"
              className="modalClose"
              onClick={() => setBookingOpen(false)}
              aria-label="Close booking form"
            >
              ×
            </button>

            {success ? (
              <div className="auraSuccess" role="status">
                <span className="successGlyph">✦</span>
                <p className="overline">Your Sacred Journey Begins</p>
                <h2 id="aura-book-title">Your request has been received.</h2>
                <p>
                  Thank you. Our wellness concierge will contact you within 24 hours to confirm your tailored time slot for <strong>{selectedRitual}</strong> with <strong>{selectedPractitioner}</strong>.
                </p>
                <button
                  type="button"
                  className="copperBtn"
                  onClick={() => setBookingOpen(false)}
                >
                  Return to Sanctuary
                </button>
              </div>
            ) : (
              <>
                <div className="modalHeading">
                  <p className="overline">Online Wellness Concierge</p>
                  <h2 id="aura-book-title">Reserve Your Ritual</h2>
                  <p className="modalSub">
                    Share your preferences and our wellness team will curate your visit with absolute intention.
                  </p>
                </div>

                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSuccess(true);
                  }}
                >
                  <label>
                    Full Name *
                    <input required autoComplete="name" placeholder="E.g. Elena Rostova" />
                  </label>
                  <label>
                    Email Address *
                    <input type="email" required autoComplete="email" placeholder="elena@example.com" />
                  </label>
                  <label>
                    Phone Number *
                    <input type="tel" required autoComplete="tel" placeholder="(310) 555-7890" />
                  </label>
                  <label>
                    Ritual of Choice *
                    <select
                      value={selectedRitual}
                      onChange={(e) => setSelectedRitual(e.target.value)}
                    >
                      {rituals.map((r) => (
                        <option key={r.ritualKey} value={r.ritualKey}>
                          {r.title} ({r.duration} · {r.price})
                        </option>
                      ))}
                      <option value="Sanctuary Monthly Membership">The Sanctuary Pass Membership</option>
                      <option value="Day Immersion Retreat">Full-Day Immersion Retreat ($485)</option>
                      <option value="Holistic Consultation">Complimentary Concierge Consultation</option>
                    </select>
                  </label>
                  <label>
                    Preferred Practitioner
                    <select
                      value={selectedPractitioner}
                      onChange={(e) => setSelectedPractitioner(e.target.value)}
                    >
                      <option value="Any Available Guide">Any Available Master Healer</option>
                      {practitioners.map((p) => (
                        <option key={p.name} value={p.name}>
                          {p.name} ({p.role})
                        </option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Preferred Date *
                    <input type="date" required />
                  </label>

                  <div className="full timeGroup">
                    <span className="fieldLabel">Preferred Time Window</span>
                    <div className="timePills">
                      {["Morning (9am–12pm)", "Afternoon (12pm–4pm)", "Twilight (4pm–7pm)"].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          className={`timePill ${preferredTime === slot ? "active" : ""}`}
                          onClick={() => setPreferredTime(slot)}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="full timeGroup">
                    <span className="fieldLabel">Primary Wellness Intention</span>
                    <div className="timePills">
                      {[
                        "Tension Relief",
                        "Deep Sleep Reset",
                        "Cellular Glow",
                        "Lymphatic Detox",
                        "Silent Sanctuary",
                      ].map((item) => (
                        <button
                          key={item}
                          type="button"
                          className={`timePill ${focusIntention === item ? "active" : ""}`}
                          onClick={() => setFocusIntention(item)}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  <label className="full">
                    Health Considerations or Custom Requests
                    <textarea
                      rows={2}
                      placeholder="Injuries, pregnancy considerations, essential oil allergies, or silent appointment preference..."
                    />
                  </label>

                  <div className="full modalGuarantee">
                    <span>🔒</span>
                    <small>
                      <strong>Zero Upfront Payment:</strong> No deposit is charged now. Our concierge will confirm availability and secure your time slot.
                    </small>
                  </div>

                  <button type="submit" className="copperBtn full submitBtn">
                    Submit Reservation Request <span>→</span>
                  </button>
                </form>
              </>
            )}
          </section>
        </div>
      )}

      {/* RITUAL GUIDE DETAILS MODAL */}
      {ritualDetail && ritualGuides[ritualDetail] && (
        <div
          className="auraModalBack"
          onMouseDown={(e) => e.target === e.currentTarget && setRitualDetail(null)}
        >
          <section
            className="ritualDetailDialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ritual-detail-title"
          >
            <button
              type="button"
              className="modalClose"
              onClick={() => setRitualDetail(null)}
              aria-label="Close ritual details"
            >
              ×
            </button>
            <p className="overline">Comprehensive Ritual Guide</p>
            <h2 id="ritual-detail-title">{ritualDetail}</h2>

            <div className="guideGrid">
              <article>
                <h4>The Experience</h4>
                <p>{ritualGuides[ritualDetail].expect}</p>
              </article>
              <article>
                <h4>Holistic Benefits</h4>
                <p>{ritualGuides[ritualDetail].benefits}</p>
              </article>
              <article>
                <h4>Pre-Ritual Preparation</h4>
                <p>{ritualGuides[ritualDetail].prepare}</p>
              </article>
              <article>
                <h4>Home Aftercare Protocol</h4>
                <p>{ritualGuides[ritualDetail].aftercare}</p>
              </article>
            </div>

            <div className="guideActions">
              <button
                type="button"
                className="copperBtn"
                onClick={() => {
                  const key = ritualDetail;
                  setRitualDetail(null);
                  openBook(key);
                }}
              >
                Reserve This Ritual <span>→</span>
              </button>
            </div>
          </section>
        </div>
      )}

      {/* APOTHECARY SHOPPING BAG DRAWER */}
      {cartOpen && (
        <div
          className="cartDrawerBackdrop"
          onMouseDown={(e) => e.target === e.currentTarget && setCartOpen(false)}
        >
          <aside className="cartDrawer" aria-label="Shopping bag">
            <div className="drawerHeader">
              <div>
                <p className="overline">Aura At-Home Apothecary</p>
                <h3>Your Sanctuary Bag</h3>
              </div>
              <button
                type="button"
                className="modalClose"
                onClick={() => setCartOpen(false)}
                aria-label="Close bag"
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="emptyCart">
                <span>◌</span>
                <p>Your sanctuary bag is peaceful and quiet.</p>
                <small>Explore our botanical oils, bath soaks, and sleep elixirs above.</small>
              </div>
            ) : (
              <div className="drawerContent">
                <div className="cartItemsList">
                  {cart.map((item) => (
                    <div key={item.id} className="cartRow">
                      <img src={item.image} alt={item.name} className="cartThumbnail" />
                      <div className="cartRowInfo">
                        <b>{item.name}</b>
                        <small>{item.size}</small>
                        <span className="cartPrice">
                          ${item.price} × {item.quantity} = ${item.price * item.quantity}
                        </span>
                      </div>
                      <div className="cartRowControls">
                        <button
                          type="button"
                          onClick={() =>
                            setCart((prev) =>
                              prev
                                .map((i) =>
                                  i.id === item.id ? { ...i, quantity: i.quantity - 1 } : i,
                                )
                                .filter((i) => i.quantity > 0),
                            )
                          }
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() =>
                            setCart((prev) =>
                              prev.map((i) =>
                                i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i,
                              ),
                            )
                          }
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="drawerFooter">
                  <div className="subtotalRow">
                    <span>Estimated Subtotal:</span>
                    <b>${cartTotal}</b>
                  </div>
                  <p className="drawerNotice">
                    Complimentary organic canvas tote with orders over $120.
                  </p>
                  <button
                    type="button"
                    className="copperBtn full"
                    onClick={() => {
                      alert(`Thank you! Order of $${cartTotal} has been submitted for salon collection.`);
                      setCart([]);
                      setCartOpen(false);
                    }}
                  >
                    Proceed to Reserve & Collect <span>→</span>
                  </button>
                  <small className="cartDemoNote">
                    Orders are packaged in eco-cotton and held at reception for your next appointment or curbside pickup.
                  </small>
                </div>
              </div>
            )}
          </aside>
        </div>
      )}
    </main>
  );
}

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,600&family=Outfit:wght@300;400;500;600;700&family=Pinyon+Script&display=swap');

  :root {
    --forest: #09231b;
    --forest2: #0f3328;
    --forestLight: #164234;
    --cream: #f7f4ed;
    --paper: #faf8f2;
    --sand: #ece7db;
    --copper: #b76743;
    --copperHover: #cb7650;
    --gold: #c5a069;
    --goldSoft: #d8b88a;
    --ink: #141f1a;
    --muted: #66726b;
    --line: #dcd6c8;
    --lineDark: rgba(255, 255, 255, 0.12);
  }

  * { box-sizing: border-box; }
  
  .auraPage {
    min-height: 100vh;
    background: var(--paper);
    color: var(--ink);
    font-family: 'Outfit', -apple-system, sans-serif;
    font-size: 16px;
    overflow-x: clip;
  }

  .auraPage section[id] {
    scroll-margin-top: 92px;
  }

  .auraPage h1, .auraPage h2, .auraPage h3 {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-weight: 500;
    line-height: 1.05;
    margin: 0;
  }

  .auraPage em {
    font-weight: 400;
    color: var(--copper);
    font-style: italic;
  }

  .heroCursive {
    font-family: 'Pinyon Script', 'Alex Brush', cursive !important;
    font-size: 1.18em !important;
    color: var(--goldSoft) !important;
    letter-spacing: 0.02em !important;
    display: inline-block;
    padding-left: 6px;
  }

  .overline {
    margin: 0 0 14px;
    color: var(--copper);
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.74rem;
    font-weight: 700;
  }

  .copperBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    min-height: 50px;
    padding: 0 28px;
    border: 0;
    background: var(--copper);
    color: white;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.76rem;
    font-weight: 700;
    cursor: pointer;
    border-radius: 2px;
    transition: transform 0.25s ease, background 0.25s ease, box-shadow 0.25s ease;
  }
  .copperBtn:hover {
    background: var(--copperHover);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(183, 103, 67, 0.35);
  }

  .outlineBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    min-height: 50px;
    padding: 0 24px;
    border: 1px solid var(--line);
    background: transparent;
    color: var(--ink);
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.74rem;
    font-weight: 700;
    cursor: pointer;
    transition: all 0.25s ease;
  }
  .outlineBtn:hover {
    border-color: var(--copper);
    color: var(--copper);
    background: #fff;
  }
  .outlineBtn.white {
    border-color: rgba(255, 255, 255, 0.4);
    color: white;
  }
  .outlineBtn.white:hover {
    border-color: var(--gold);
    color: var(--gold);
    background: rgba(255, 255, 255, 0.08);
  }

  .lineBtn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    min-height: 50px;
    padding: 0 26px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: white;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 0.74rem;
    font-weight: 700;
    transition: all 0.25s ease;
  }
  .lineBtn:hover {
    border-color: var(--gold);
    background: rgba(255, 255, 255, 0.08);
  }

  .textLink {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    margin-top: 20px;
    padding-bottom: 4px;
    border-bottom: 1.5px solid var(--copper);
    color: var(--forest);
    text-decoration: none;
    text-transform: uppercase;
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.12em;
    transition: color 0.2s ease, gap 0.2s ease;
  }
  .textLink:hover {
    color: var(--copper);
    gap: 16px;
  }

  .sectionPad {
    padding: 86px max(32px, calc((100vw - 1340px) / 2));
  }

  .sectionHeader {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    gap: 40px;
    margin-bottom: 48px;
  }
  .sectionHeader h2 {
    font-size: clamp(2.8rem, 4.4vw, 4.4rem);
  }
  .headerDesc {
    max-width: 460px;
    margin: 0;
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.7;
  }

  .sectionHeaderCenter {
    text-align: center;
    max-width: 680px;
    margin: 0 auto 52px;
  }
  .sectionHeaderCenter h2 {
    font-size: clamp(2.8rem, 4.2vw, 4.2rem);
  }
  .headerSub {
    color: var(--muted);
    font-size: 1.02rem;
    line-height: 1.7;
    margin-top: 14px;
  }

  /* ------------------------------------------------------------- */
  /* STICKY SANCTUARY NAVIGATION                                   */
  /* ------------------------------------------------------------- */
  .auraNav {
    position: sticky;
    top: 0;
    z-index: 50;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: clamp(16px, 2vw, 28px);
    min-height: 88px;
    padding: 0 max(28px, calc((100vw - 1380px) / 2));
    background: rgba(9, 35, 27, 0.96);
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    color: white;
    backdrop-filter: blur(16px);
  }

  .scrollProgressBar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2.5px;
    background: linear-gradient(90deg, var(--gold), var(--copper));
    z-index: 10;
    transition: width 0.1s linear;
  }

  .auraMark {
    display: flex;
    align-items: center;
    gap: 14px;
    color: white;
    text-decoration: none;
    transition: transform 0.25s ease;
  }
  .auraMark:hover { transform: scale(1.02); }
  .markIcon {
    display: grid;
    width: 40px;
    height: 40px;
    place-items: center;
    border: 1px solid var(--gold);
    border-radius: 50%;
    color: var(--gold);
    font-size: 1.2rem;
  }
  .markText b {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.65rem;
    letter-spacing: 0.12em;
    font-weight: 500;
    display: block;
    line-height: 1;
  }
  .markText small {
    display: block;
    margin-top: 4px;
    font-family: 'Outfit', sans-serif;
    font-size: 0.58rem;
    letter-spacing: 0.35em;
    color: var(--gold);
  }

  .desktopNav {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: clamp(10px, 1.6vw, 24px);
  }
  .desktopNav a {
    position: relative;
    padding: 8px 0;
    color: #e5e8e6;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.74rem;
    font-weight: 600;
    white-space: nowrap;
    transition: color 0.2s ease;
  }
  .desktopNav a:hover { color: var(--goldSoft); }
  .desktopNav a::after {
    content: "";
    position: absolute;
    inset: auto 0 -2px;
    height: 2px;
    background: var(--copper);
    transform: scaleX(0);
    transition: transform 0.25s ease;
  }
  .desktopNav a.active { color: var(--goldSoft); }
  .desktopNav a.active::after { transform: scaleX(1); }

  .navActions {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .cartNavTrigger {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.2);
    color: white;
    padding: 9px 14px;
    border-radius: 99px;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
    transition: all 0.2s;
  }
  .cartNavTrigger:hover {
    background: rgba(255, 255, 255, 0.16);
    border-color: var(--gold);
  }
  .cartCount {
    display: grid;
    width: 20px;
    height: 20px;
    place-items: center;
    border-radius: 50%;
    background: var(--copper);
    font-size: 0.68rem;
    font-weight: 800;
  }

  .navBookBtn {
    min-height: 44px;
    padding: 0 20px;
  }

  .auraMenu { display: none; }
  .auraMobile { display: none; }

  /* ------------------------------------------------------------- */
  /* HERO SECTION                                                  */
  /* ------------------------------------------------------------- */
  .auraHero {
    position: relative;
    isolation: isolate;
    display: grid;
    grid-template-columns: 48% 52%;
    min-height: 740px;
    background: linear-gradient(135deg, #071e17 0%, #0d2c22 60%, #09231b 100%);
    color: white;
    overflow: hidden;
  }

  .heroAura {
    position: absolute;
    border-radius: 50%;
    filter: blur(80px);
    pointer-events: none;
    z-index: -1;
  }
  .heroAuraOne {
    left: -120px;
    top: -100px;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(197, 160, 105, 0.2), transparent 70%);
  }
  .heroAuraTwo {
    left: 35%;
    bottom: -150px;
    width: 600px;
    height: 600px;
    background: radial-gradient(circle, rgba(183, 103, 67, 0.25), transparent 70%);
  }

  .heroWords {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 70px clamp(32px, 5vw, 80px) 70px max(34px, calc((100vw - 1360px) / 2));
    z-index: 2;
  }

  .heroStatusRow {
    display: flex;
    align-items: center;
    gap: 12px;
    flex-wrap: wrap;
    margin-bottom: 24px;
  }

  .heroAvailability {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    background: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(197, 160, 105, 0.35);
    border-radius: 99px;
    padding: 6px 14px;
    font-size: 0.72rem;
    font-weight: 600;
    color: #e5e8e4;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.2);
  }
  .availDot {
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #48bb78;
    box-shadow: 0 0 0 3px rgba(72, 187, 120, 0.25);
    animation: pulseDot 2s infinite;
  }
  @keyframes pulseDot {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.25); opacity: 0.7; }
  }

  .soundscapeBtn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 6px 13px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    border-radius: 99px;
    background: transparent;
    color: var(--goldSoft);
    font-size: 0.68rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .soundscapeBtn:hover, .soundscapeBtn.playing {
    background: rgba(197, 160, 105, 0.15);
    border-color: var(--gold);
    color: white;
  }
  .soundBars {
    display: flex;
    align-items: flex-end;
    gap: 2px;
    height: 12px;
  }
  .soundBars i {
    width: 2px;
    background: var(--gold);
    border-radius: 1px;
    height: 4px;
    transition: height 0.2s;
  }
  .soundscapeBtn.playing .soundBars i:nth-child(1) { animation: soundWave 0.8s infinite alternate; }
  .soundscapeBtn.playing .soundBars i:nth-child(2) { animation: soundWave 0.8s infinite 0.2s alternate; }
  .soundscapeBtn.playing .soundBars i:nth-child(3) { animation: soundWave 0.8s infinite 0.4s alternate; }
  @keyframes soundWave {
    0% { height: 3px; }
    100% { height: 12px; }
  }

  .heroWords h1 {
    font-size: clamp(3.8rem, 5.8vw, 6rem);
    letter-spacing: -0.03em;
    line-height: 1;
    margin: 4px 0 12px;
  }

  .ornament {
    display: flex;
    align-items: center;
    gap: 12px;
    width: 140px;
    margin: 16px 0 20px;
    color: var(--gold);
  }
  .ornament span {
    flex: 1;
    height: 1px;
    background: rgba(197, 160, 105, 0.4);
  }

  .heroIntro {
    max-width: 520px;
    margin: 0;
    color: #dbe2de;
    font-size: 1.05rem;
    line-height: 1.8;
  }

  .heroActions {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-top: 32px;
    flex-wrap: wrap;
  }
  .heroActions .heroCta {
    min-width: 220px;
  }

  .heroTrust {
    display: grid;
    grid-template-columns: 1.3fr 1fr 1fr;
    gap: 20px;
    margin-top: 40px;
    padding-top: 24px;
    border-top: 1px solid rgba(255, 255, 255, 0.12);
  }
  .trustItem b {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.6rem;
    font-weight: 500;
    color: white;
    line-height: 1;
    display: block;
  }
  .trustItem small {
    display: block;
    margin-top: 4px;
    color: #a7b7af;
    font-size: 0.74rem;
  }
  .trustScore {
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .trustScore i {
    color: var(--gold);
    font-style: normal;
    font-size: 0.75rem;
    letter-spacing: 0.08em;
  }

  .heroImage {
    position: relative;
    padding: 32px 0 32px 24px;
    display: flex;
    align-items: stretch;
  }
  .heroFrame {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 280px 0 0 12px;
    box-shadow: -20px 24px 70px rgba(0, 0, 0, 0.35);
  }
  .heroFrame img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    transition: transform 1.2s cubic-bezier(0.16, 1, 0.3, 1);
  }
  .heroImage:hover .heroFrame img {
    transform: scale(1.03);
  }
  .heroShade {
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, rgba(7, 30, 23, 0.4) 0%, transparent 40%, rgba(0, 0, 0, 0.2) 100%);
  }

  .heroLocation {
    position: absolute;
    right: 28px;
    top: 54px;
    z-index: 3;
    padding: 12px 18px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    background: rgba(9, 35, 27, 0.85);
    backdrop-filter: blur(12px);
    border-radius: 4px;
  }
  .locCity {
    display: block;
    text-transform: uppercase;
    letter-spacing: 0.15em;
    font-size: 0.65rem;
    color: var(--gold);
    font-weight: 700;
  }
  .heroLocation b {
    font-size: 0.78rem;
    font-weight: 500;
    color: white;
  }

  .heroFloatingCard {
    position: absolute;
    left: -20px;
    bottom: 50px;
    z-index: 3;
    width: 290px;
    margin: 0;
    padding: 24px 28px;
    background: rgba(247, 244, 237, 0.96);
    color: var(--ink);
    border-left: 3px solid var(--copper);
    box-shadow: 0 18px 45px rgba(0, 0, 0, 0.25);
    border-radius: 6px;
    backdrop-filter: blur(10px);
  }
  .quoteSymbol {
    position: absolute;
    right: 18px;
    top: 10px;
    color: var(--copper);
    font-family: Georgia, serif;
    font-size: 2.2rem;
    line-height: 1;
    opacity: 0.6;
  }
  .heroFloatingCard p {
    margin: 0;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.2rem;
    line-height: 1.35;
    font-weight: 500;
  }
  .heroFloatingCard small {
    display: block;
    margin-top: 10px;
    color: var(--muted);
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.62rem;
    font-weight: 700;
  }

  .heroSeal {
    position: absolute;
    right: 32px;
    bottom: 40px;
    z-index: 3;
    display: grid;
    width: 110px;
    height: 110px;
    place-items: center;
    align-content: center;
    border: 1.5px solid var(--gold);
    border-radius: 50%;
    background: rgba(14, 51, 40, 0.88);
    backdrop-filter: blur(8px);
    text-align: center;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  }
  .heroSeal span { color: var(--gold); font-size: 0.9rem; }
  .heroSeal b {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.2rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  }
  .heroSeal small {
    margin-top: 2px;
    color: #c9cbca;
    font-size: 0.52rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
  }

  .heroScroll {
    position: absolute;
    left: 24px;
    bottom: 24px;
    z-index: 3;
    display: flex;
    align-items: center;
    gap: 10px;
    color: #9cb2a7;
    text-decoration: none;
    text-transform: uppercase;
    writing-mode: vertical-rl;
    letter-spacing: 0.15em;
    font-size: 0.6rem;
    font-weight: 700;
    transition: color 0.2s;
  }
  .heroScroll:hover { color: white; }
  .heroScroll b { color: var(--gold); font-size: 1rem; }

  /* ------------------------------------------------------------- */
  /* RITUALS SECTION & FILTER                                      */
  /* ------------------------------------------------------------- */
  .ritualSection {
    background: var(--paper);
    border-bottom: 1px solid var(--line);
  }

  .ritualFilterRow {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
    margin-bottom: 38px;
    background: var(--sand);
    padding: 6px;
    border-radius: 99px;
    width: fit-content;
  }
  .filterTab {
    padding: 9px 20px;
    border: 0;
    background: transparent;
    font-size: 0.76rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--muted);
    border-radius: 99px;
    cursor: pointer;
    transition: all 0.25s ease;
  }
  .filterTab.active {
    background: var(--forest);
    color: white;
    box-shadow: 0 4px 14px rgba(9, 35, 27, 0.2);
  }

  .ritualGrid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
    gap: 28px;
  }

  .ritualCard {
    display: flex;
    flex-direction: column;
    background: white;
    border: 1px solid var(--line);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.03);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .ritualCard:hover {
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(13, 44, 34, 0.08);
  }

  .ritualPhoto {
    position: relative;
    height: 230px;
    overflow: hidden;
  }
  .ritualPhoto img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.6s ease;
  }
  .ritualCard:hover .ritualPhoto img {
    transform: scale(1.04);
  }
  .ritualNumber {
    position: absolute;
    left: 14px;
    top: 14px;
    display: grid;
    width: 34px;
    height: 34px;
    place-items: center;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.92);
    color: var(--copper);
    font-family: Georgia, serif;
    font-size: 0.78rem;
    font-weight: 700;
  }
  .ritualBadge {
    position: absolute;
    right: 14px;
    top: 14px;
    padding: 4px 10px;
    background: rgba(9, 35, 27, 0.85);
    color: white;
    border-radius: 4px;
    font-size: 0.66rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    backdrop-filter: blur(6px);
  }

  .ritualBody {
    padding: 26px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .ritualCategoryTag {
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--copper);
    margin-bottom: 6px;
  }
  .ritualBody h3 {
    font-size: 1.55rem;
    margin-bottom: 10px;
    color: var(--ink);
  }
  .ritualText {
    color: var(--muted);
    font-size: 0.9rem;
    line-height: 1.65;
    margin: 0 0 16px;
    flex: 1;
  }

  .scentNoteRow {
    padding: 10px 0;
    border-top: 1px dashed var(--line);
    font-size: 0.78rem;
    margin-bottom: 12px;
  }
  .scentLabel {
    color: var(--copper);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    font-size: 0.68rem;
    display: block;
    margin-bottom: 2px;
  }
  .scentVal {
    color: #43524b;
    font-style: italic;
  }

  .ritualMeta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0 18px;
    border-top: 1px solid var(--line);
    color: var(--ink);
    font-size: 0.84rem;
  }
  .ritualMeta strong {
    font-size: 1.15rem;
    font-family: 'Cormorant Garamond', Georgia, serif;
  }

  .ritualActions {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 10px;
    margin-top: auto;
  }
  .ritualActions .outlineBtn { min-height: 44px; padding: 0 14px; font-size: 0.72rem; }
  .ritualActions .copperBtn { min-height: 44px; padding: 0 16px; font-size: 0.72rem; }

  .ritualConciergeBanner {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 28px;
    padding: 28px 36px;
    background: var(--forest);
    color: white;
    border-radius: 8px;
    margin-top: 48px;
    box-shadow: 0 14px 40px rgba(9, 35, 27, 0.15);
  }
  .conciergeIcon {
    font-size: 2rem;
    color: var(--gold);
  }
  .ritualConciergeBanner h4 {
    margin: 0 0 4px;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.5rem;
    font-weight: 500;
  }
  .ritualConciergeBanner p {
    margin: 0;
    color: #cdd4d0;
    font-size: 0.9rem;
  }

  /* ------------------------------------------------------------- */
  /* PHILOSOPHY & VALUES                                           */
  /* ------------------------------------------------------------- */
  .philosophy {
    display: grid;
    grid-template-columns: 38% 30% 32%;
    background: #ede8dc;
    border-bottom: 1px solid var(--line);
    padding: 0;
  }
  .philosophyCopy {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 70px max(36px, 4.5vw);
  }
  .philosophyCopy h2 {
    font-size: clamp(2.6rem, 3.8vw, 3.6rem);
    margin-bottom: 16px;
  }
  .philoLead {
    color: var(--muted);
    font-size: 1rem;
    line-height: 1.8;
    margin: 0 0 20px;
  }
  .philosophyVisual {
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 480px;
  }
  .philosophyVisual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .philoBadge {
    position: absolute;
    bottom: 24px;
    left: 24px;
    padding: 12px 18px;
    background: rgba(9, 35, 27, 0.9);
    color: white;
    border-left: 3px solid var(--gold);
    backdrop-filter: blur(8px);
    border-radius: 4px;
  }
  .philoBadge span {
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    color: var(--gold);
    display: block;
  }
  .philoBadge b {
    font-size: 0.8rem;
    font-weight: 500;
  }

  .valuesList {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    padding: 70px max(36px, 4vw);
    background: var(--forest);
    color: white;
  }
  .valueCard {
    display: grid;
    grid-template-columns: 36px 1fr;
    gap: 16px;
  }
  .valBullet {
    color: var(--gold);
    font-size: 1.2rem;
    line-height: 1.3;
  }
  .valueCard h3 {
    font-size: 1.35rem;
    color: #f7f4ed;
    margin-bottom: 6px;
  }
  .valueCard p {
    margin: 0;
    color: #cad1cd;
    font-size: 0.88rem;
    line-height: 1.65;
  }

  /* ------------------------------------------------------------- */
  /* WELLNESS JOURNEY                                              */
  /* ------------------------------------------------------------- */
  .journeySection {
    background: var(--paper);
    border-bottom: 1px solid var(--line);
  }
  .journeyGrid {
    display: grid;
    grid-template-columns: 1fr 400px;
    gap: 48px;
    align-items: center;
  }
  .journeyTimeline {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 28px;
  }
  .journeyCard {
    position: relative;
    padding: 32px;
    background: white;
    border: 1px solid var(--line);
    border-radius: 8px;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.03);
  }
  .stepBadge {
    display: inline-grid;
    width: 42px;
    height: 42px;
    place-items: center;
    border-radius: 50%;
    background: var(--sand);
    color: var(--copper);
    font-family: Georgia, serif;
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom: 16px;
  }
  .journeyCard h3 {
    font-size: 1.45rem;
    margin-bottom: 10px;
  }
  .journeyCard p {
    margin: 0;
    color: var(--muted);
    font-size: 0.88rem;
    line-height: 1.7;
  }
  .journeyVisual {
    position: relative;
    height: 100%;
    min-height: 440px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
  }
  .journeyVisual img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  /* ------------------------------------------------------------- */
  /* PRACTITIONERS SECTION                                         */
  /* ------------------------------------------------------------- */
  .practitionersSection {
    background: var(--forest);
    color: white;
    border-bottom: 1px solid var(--lineDark);
  }
  .practitionersSection .overline { color: var(--goldSoft); }
  .practitionersSection .headerDesc { color: #b7c4bd; }

  .practitionersGrid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
  }
  .practitionerCard {
    display: flex;
    flex-direction: column;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 8px;
    overflow: hidden;
    transition: transform 0.3s ease, border-color 0.3s ease;
  }
  .practitionerCard:hover {
    transform: translateY(-4px);
    border-color: var(--gold);
    background: rgba(255, 255, 255, 0.08);
  }
  .pracPhoto {
    position: relative;
    height: 240px;
    overflow: hidden;
  }
  .pracPhoto img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center 20%;
  }
  .pracRating {
    position: absolute;
    top: 12px;
    right: 12px;
    padding: 3px 8px;
    background: rgba(9, 35, 27, 0.85);
    color: var(--goldSoft);
    border-radius: 4px;
    font-size: 0.72rem;
    font-weight: 700;
  }
  .pracBody {
    padding: 24px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .pracBody h3 {
    font-size: 1.45rem;
    color: white;
    margin-bottom: 4px;
  }
  .pracRole {
    color: var(--goldSoft);
    font-size: 0.78rem;
    font-weight: 600;
    margin: 0 0 14px;
  }
  .specialtyPills {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 20px;
  }
  .specPill {
    font-size: 0.68rem;
    background: rgba(255, 255, 255, 0.1);
    color: #e5eae7;
    padding: 3px 8px;
    border-radius: 4px;
  }
  .pracFooter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-top: 14px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
  }
  .sessionCount {
    color: #a4b3ac;
    font-size: 0.72rem;
  }
  .pracBookBtn {
    border: 0;
    background: transparent;
    color: var(--goldSoft);
    font-size: 0.74rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    cursor: pointer;
    padding: 0;
    transition: color 0.2s;
  }
  .pracBookBtn:hover { color: white; }

  /* ------------------------------------------------------------- */
  /* MEMBERSHIPS & RETREATS                                        */
  /* ------------------------------------------------------------- */
  .membershipSection {
    background: #f4efe4;
    border-bottom: 1px solid var(--line);
  }
  .membershipGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 36px;
    max-width: 1040px;
    margin: 0 auto;
  }
  .membershipCard {
    position: relative;
    padding: 48px 44px;
    background: white;
    border: 1px solid var(--line);
    border-radius: 8px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.04);
    display: flex;
    flex-direction: column;
  }
  .membershipCard.featured {
    border: 2px solid var(--copper);
    box-shadow: 0 16px 40px rgba(183, 103, 67, 0.12);
  }
  .popularBadge {
    position: absolute;
    top: -12px;
    right: 28px;
    background: var(--copper);
    color: white;
    padding: 4px 14px;
    border-radius: 99px;
    font-size: 0.68rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.1em;
  }
  .cardOverline {
    display: block;
    color: var(--copper);
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-size: 0.72rem;
    font-weight: 700;
    margin-bottom: 6px;
  }
  .membershipCard h3 {
    font-size: 2rem;
    margin-bottom: 12px;
  }
  .cardPrice {
    display: flex;
    align-items: baseline;
    gap: 6px;
    margin-bottom: 16px;
  }
  .cardPrice b {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 2.8rem;
    font-weight: 600;
    color: var(--ink);
    line-height: 1;
  }
  .cardPrice small {
    color: var(--muted);
    font-size: 0.88rem;
  }
  .cardSummary {
    color: var(--muted);
    font-size: 0.92rem;
    line-height: 1.65;
    margin: 0 0 24px;
  }
  .perksList {
    list-style: none;
    padding: 0;
    margin: 0 0 32px;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .perksList li {
    font-size: 0.88rem;
    color: #38453f;
    line-height: 1.5;
  }

  /* ------------------------------------------------------------- */
  /* APOTHECARY SHOP                                               */
  /* ------------------------------------------------------------- */
  .apothecarySection {
    background: var(--paper);
    border-bottom: 1px solid var(--line);
  }
  .shopHeaderActions {
    align-self: flex-end;
  }
  .productsGrid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }
  .productCard {
    display: flex;
    flex-direction: column;
    background: white;
    border: 1px solid var(--line);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.02);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
  }
  .productCard:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.08);
  }
  .prodPhoto {
    position: relative;
    height: 180px;
    background: #f6f3eb;
  }
  .prodPhoto img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .prodBadge {
    position: absolute;
    top: 10px;
    left: 10px;
    padding: 3px 8px;
    background: rgba(9, 35, 27, 0.8);
    color: white;
    font-size: 0.62rem;
    font-weight: 700;
    border-radius: 4px;
    text-transform: uppercase;
  }
  .prodBody {
    padding: 18px;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .prodTop {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 8px;
  }
  .prodTop h4 {
    margin: 0;
    font-size: 1.15rem;
    font-family: 'Cormorant Garamond', Georgia, serif;
  }
  .prodPrice {
    font-weight: 700;
    font-size: 0.95rem;
    color: var(--copper);
  }
  .prodSize {
    color: var(--muted);
    font-size: 0.72rem;
    margin-top: 2px;
  }
  .prodScent {
    font-size: 0.78rem;
    color: var(--muted);
    line-height: 1.5;
    margin: 10px 0 16px;
    flex: 1;
  }
  .addToBagBtn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 14px;
    border: 1px solid var(--forest);
    background: transparent;
    color: var(--forest);
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s;
  }
  .addToBagBtn:hover {
    background: var(--forest);
    color: white;
  }

  /* ------------------------------------------------------------- */
  /* FAQ ACCORDION                                                 */
  /* ------------------------------------------------------------- */
  .faqSection {
    background: #f7f3ea;
    border-bottom: 1px solid var(--line);
  }
  .faqAccordion {
    max-width: 860px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  .faqCard {
    background: white;
    border: 1px solid var(--line);
    border-radius: 6px;
    overflow: hidden;
    transition: border-color 0.25s ease;
  }
  .faqCard.open {
    border-color: var(--copper);
  }
  .faqQuestionBtn {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 22px 28px;
    background: transparent;
    border: 0;
    text-align: left;
    font-family: inherit;
    font-size: 1.05rem;
    font-weight: 600;
    color: var(--ink);
    cursor: pointer;
  }
  .faqToggleIcon {
    font-size: 1.5rem;
    color: var(--copper);
    margin-left: 16px;
  }
  .faqAnswer {
    padding: 0 28px 24px;
    color: var(--muted);
    font-size: 0.95rem;
    line-height: 1.75;
  }

  /* ------------------------------------------------------------- */
  /* REVIEWS CAROUSEL                                              */
  /* ------------------------------------------------------------- */
  .reviewsSection {
    background: var(--paper);
    border-bottom: 1px solid var(--line);
  }
  .reviewsHeader {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin-bottom: 38px;
  }
  .reviewsHeader h2 {
    font-size: clamp(2.6rem, 4vw, 3.8rem);
  }
  .carouselNav {
    display: flex;
    align-items: center;
    gap: 14px;
  }
  .carouselBtn {
    width: 44px;
    height: 44px;
    display: grid;
    place-items: center;
    border: 1px solid var(--line);
    border-radius: 50%;
    background: white;
    color: var(--ink);
    font-size: 1.1rem;
    cursor: pointer;
    transition: all 0.2s;
  }
  .carouselBtn:hover {
    border-color: var(--copper);
    color: var(--copper);
  }
  .carouselCounter {
    font-size: 0.82rem;
    font-weight: 700;
    color: var(--muted);
  }

  .reviewsViewer {
    position: relative;
    min-height: 230px;
  }
  .reviewCard {
    display: none;
    margin: 0;
    padding: 38px 44px;
    background: white;
    border: 1px solid var(--line);
    border-left: 4px solid var(--gold);
    border-radius: 8px;
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
  }
  .reviewCard.active {
    display: block;
    animation: fadeIn 0.4s ease forwards;
  }
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(8px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .reviewStars {
    color: var(--gold);
    letter-spacing: 0.12em;
    font-size: 0.95rem;
    margin-bottom: 14px;
  }
  .reviewQuote {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.55rem;
    line-height: 1.5;
    color: #172b22;
    margin: 0 0 20px;
  }
  .reviewCard footer {
    display: flex;
    align-items: center;
    gap: 14px;
    flex-wrap: wrap;
    font-size: 0.85rem;
  }
  .reviewCard footer b { color: var(--ink); }
  .clientCity { color: var(--muted); }
  .clientTreatment {
    padding: 3px 10px;
    background: var(--sand);
    color: var(--copper);
    border-radius: 99px;
    font-size: 0.74rem;
    font-weight: 600;
  }

  /* ------------------------------------------------------------- */
  /* FOOTER                                                        */
  /* ------------------------------------------------------------- */
  .auraFooter {
    display: grid;
    grid-template-columns: 1.3fr 0.9fr 1fr 1.2fr;
    gap: 48px;
    padding: 80px max(28px, calc((100vw - 1340px) / 2));
    background: var(--forest);
    color: #e5ece8;
  }
  .footerBrand .brandEthos {
    color: #a7b7af;
    font-size: 0.88rem;
    line-height: 1.7;
    margin: 18px 0;
  }
  .socialIcons {
    display: flex;
    gap: 18px;
    font-size: 0.78rem;
    color: var(--goldSoft);
    margin-bottom: 24px;
  }
  .copyright {
    display: block;
    color: #6a7c73;
    font-size: 0.74rem;
  }
  .footerCol h4 {
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.35rem;
    color: var(--goldSoft);
    margin: 0 0 18px;
  }
  .footerCol a {
    display: block;
    color: #cad8d0;
    text-decoration: none;
    font-size: 0.85rem;
    line-height: 2;
    transition: color 0.2s;
  }
  .footerCol a:hover { color: white; }
  .footerCol p {
    color: #b2c2b9;
    font-size: 0.85rem;
    line-height: 1.7;
    margin: 0 0 16px;
  }
  .hoursText {
    color: #8c9e95 !important;
    font-size: 0.8rem !important;
  }
  .newsletterCol form {
    margin: 14px 0 8px;
  }
  .inputRow {
    display: flex;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 4px;
    overflow: hidden;
  }
  .inputRow input {
    flex: 1;
    min-width: 0;
    padding: 12px 14px;
    background: rgba(255, 255, 255, 0.06);
    border: 0;
    color: white;
    font-size: 0.84rem;
  }
  .inputRow .copperBtn {
    border-radius: 0;
    min-height: 44px;
    padding: 0 18px;
  }
  .noSpam {
    color: #798d83;
    font-size: 0.72rem;
  }
  .srOnly {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
  }

  /* ------------------------------------------------------------- */
  /* FLOATING BUTTONS                                              */
  /* ------------------------------------------------------------- */
  .mobileBar { display: none; }
  .cartFloatBtn {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 45;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 18px;
    background: var(--forest);
    border: 1.5px solid var(--gold);
    color: white;
    border-radius: 99px;
    box-shadow: 0 12px 36px rgba(0, 0, 0, 0.35);
    cursor: pointer;
    font-size: 0.76rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: transform 0.25s ease;
  }
  .cartFloatBtn:hover { transform: scale(1.05); }
  .cartFloatBtn .badge {
    display: grid;
    width: 22px;
    height: 22px;
    place-items: center;
    border-radius: 50%;
    background: var(--copper);
    font-size: 0.72rem;
  }

  /* ------------------------------------------------------------- */
  /* MODALS & DRAWERS                                              */
  /* ------------------------------------------------------------- */
  .auraModalBack {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: grid;
    place-items: center;
    padding: 24px;
    background: rgba(4, 18, 14, 0.85);
    backdrop-filter: blur(12px);
  }
  .auraModal {
    position: relative;
    width: min(720px, 100%);
    max-height: calc(100vh - 48px);
    overflow-y: auto;
    padding: 44px;
    background: var(--paper);
    border-radius: 8px;
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.4);
  }
  .modalClose {
    position: absolute;
    right: 18px;
    top: 18px;
    width: 40px;
    height: 40px;
    display: grid;
    place-items: center;
    border: 1px solid var(--line);
    border-radius: 50%;
    background: white;
    font-size: 1.4rem;
    cursor: pointer;
    transition: all 0.2s;
  }
  .modalClose:hover { background: var(--sand); }
  .modalHeading h2 {
    font-size: clamp(2.4rem, 3.6vw, 3.2rem);
  }
  .modalSub {
    color: var(--muted);
    font-size: 0.95rem;
    margin: 6px 0 0;
  }

  .auraModal form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 18px;
    margin-top: 24px;
  }
  .auraModal label {
    display: grid;
    gap: 6px;
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--ink);
  }
  .auraModal input, .auraModal select, .auraModal textarea {
    width: 100%;
    padding: 12px 14px;
    border: 1px solid var(--line);
    background: white;
    border-radius: 4px;
    font-family: inherit;
    font-size: 0.92rem;
  }
  .auraModal .full { grid-column: 1 / -1; }

  .timeGroup {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  .fieldLabel {
    font-size: 0.78rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--ink);
  }
  .timePills {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }
  .timePill {
    padding: 8px 14px;
    border: 1px solid var(--line);
    background: white;
    border-radius: 4px;
    font-size: 0.76rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.2s;
  }
  .timePill.active {
    background: var(--forest);
    color: white;
    border-color: var(--forest);
  }

  .modalGuarantee {
    display: flex;
    align-items: center;
    gap: 12px;
    background: var(--sand);
    padding: 12px 16px;
    border-radius: 4px;
    font-size: 0.82rem;
    color: #404f47;
  }

  .auraSuccess {
    display: grid;
    place-content: center;
    justify-items: center;
    text-align: center;
    min-height: 380px;
    padding: 20px;
  }
  .successGlyph {
    font-size: 3rem;
    color: var(--copper);
    margin-bottom: 14px;
  }
  .auraSuccess h2 {
    font-size: 2.8rem;
    margin-bottom: 12px;
  }
  .auraSuccess p:not(.overline) {
    max-width: 480px;
    color: var(--muted);
    line-height: 1.7;
    margin-bottom: 24px;
  }

  /* RITUAL DETAIL GUIDE DIALOG */
  .ritualDetailDialog {
    position: relative;
    width: min(760px, 100%);
    max-height: calc(100vh - 48px);
    overflow-y: auto;
    padding: 44px;
    background: var(--paper);
    border-radius: 8px;
    box-shadow: 0 24px 70px rgba(0, 0, 0, 0.4);
  }
  .ritualDetailDialog h2 {
    font-size: 2.8rem;
    margin-bottom: 28px;
  }
  .guideGrid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 24px;
    margin-bottom: 32px;
  }
  .guideGrid article {
    padding: 20px;
    background: white;
    border: 1px solid var(--line);
    border-radius: 6px;
  }
  .guideGrid h4 {
    margin: 0 0 8px;
    font-family: 'Cormorant Garamond', Georgia, serif;
    font-size: 1.35rem;
    color: var(--copper);
  }
  .guideGrid p {
    margin: 0;
    color: var(--muted);
    font-size: 0.88rem;
    line-height: 1.65;
  }

  /* CART DRAWER */
  .cartDrawerBackdrop {
    position: fixed;
    inset: 0;
    z-index: 100;
    background: rgba(4, 18, 14, 0.7);
    backdrop-filter: blur(8px);
  }
  .cartDrawer {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: min(460px, 100%);
    background: var(--paper);
    box-shadow: -16px 0 60px rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    padding: 36px 32px;
  }
  .drawerHeader {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    padding-bottom: 20px;
    border-bottom: 1px solid var(--line);
  }
  .drawerHeader h3 {
    font-size: 2rem;
  }
  .emptyCart {
    display: grid;
    place-content: center;
    justify-items: center;
    text-align: center;
    flex: 1;
    color: var(--muted);
  }
  .emptyCart span { font-size: 2.4rem; color: var(--copper); margin-bottom: 12px; }
  .emptyCart p { font-size: 1.05rem; font-weight: 600; margin: 0 0 6px; color: var(--ink); }

  .drawerContent {
    display: flex;
    flex-direction: column;
    flex: 1;
    overflow-y: auto;
    margin-top: 18px;
  }
  .cartItemsList {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow-y: auto;
  }
  .cartRow {
    display: grid;
    grid-template-columns: 60px 1fr auto;
    gap: 14px;
    align-items: center;
    padding: 12px 0;
    border-bottom: 1px solid var(--line);
  }
  .cartThumbnail {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 4px;
  }
  .cartRowInfo b {
    display: block;
    font-size: 0.92rem;
    color: var(--ink);
  }
  .cartRowInfo small {
    display: block;
    color: var(--muted);
    font-size: 0.72rem;
  }
  .cartPrice {
    font-size: 0.8rem;
    font-weight: 700;
    color: var(--copper);
  }
  .cartRowControls {
    display: flex;
    align-items: center;
    gap: 8px;
    background: var(--sand);
    border-radius: 4px;
    padding: 2px 6px;
  }
  .cartRowControls button {
    border: 0;
    background: transparent;
    cursor: pointer;
    font-size: 1rem;
    color: var(--ink);
  }

  .drawerFooter {
    padding-top: 20px;
    border-top: 1px solid var(--line);
    margin-top: auto;
  }
  .subtotalRow {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
  .subtotalRow b {
    font-size: 1.4rem;
    font-family: 'Cormorant Garamond', Georgia, serif;
    color: var(--copper);
  }
  .drawerNotice {
    font-size: 0.78rem;
    color: var(--muted);
    margin: 0 0 16px;
  }
  .cartDemoNote {
    display: block;
    color: var(--muted);
    font-size: 0.72rem;
    text-align: center;
    margin-top: 12px;
  }

  /* ------------------------------------------------------------- */
  /* RESPONSIVE LAYOUTS                                            */
  /* ------------------------------------------------------------- */
  @media (max-width: 1120px) {
    .desktopNav, .navBookBtn { display: none; }
    .auraMenu {
      display: grid;
      width: 44px;
      height: 44px;
      place-items: center;
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 50%;
      background: transparent;
      color: white;
      font-size: 1.3rem;
      cursor: pointer;
    }
    .auraNav {
      grid-template-columns: auto 1fr;
      justify-content: space-between;
    }
    .navActions { margin-left: auto; }
    .auraMobile {
      position: absolute;
      left: 14px;
      right: 14px;
      top: calc(100% + 8px);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 6px;
      padding: 16px;
      background: var(--forest2);
      border: 1px solid rgba(255, 255, 255, 0.15);
      border-radius: 8px;
      box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
    }
    .auraMobile a {
      padding: 12px;
      color: white;
      text-decoration: none;
      text-transform: uppercase;
      font-size: 0.78rem;
      font-weight: 700;
      border-radius: 4px;
    }
    .auraMobile a.active {
      background: rgba(255, 255, 255, 0.12);
      color: var(--goldSoft);
    }
    .auraMobile .copperBtn {
      grid-column: 1 / -1;
      margin-top: 8px;
    }

    .auraHero { grid-template-columns: 1fr 1fr; }
    .philosophy { grid-template-columns: 1fr 1fr; }
    .valuesList { grid-column: 1 / -1; display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; padding: 48px 36px; }
    .journeyGrid { grid-template-columns: 1fr; }
    .journeyVisual { display: none; }
    .practitionersGrid { grid-template-columns: repeat(2, 1fr); }
    .productsGrid { grid-template-columns: repeat(3, 1fr); }
    .auraFooter { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 760px) {
    .sectionPad { padding: 56px 20px; }
    .auraNav { min-height: 76px; padding: 0 16px; }
    .markText b { font-size: 1.35rem; }
    .markText small { font-size: 0.5rem; }
    .cartNavTrigger span:first-child { display: none; }

    .auraHero { display: flex; flex-direction: column; }
    .heroWords { padding: 48px 20px 36px; }
    .heroWords h1 { font-size: clamp(3.4rem, 14vw, 4.4rem); }
    .heroActions { width: 100%; flex-direction: column; }
    .heroActions .heroCta, .heroActions .lineBtn { width: 100%; }
    .heroTrust { grid-template-columns: 1fr; gap: 14px; }
    .heroImage { height: 420px; padding: 0; }
    .heroFrame { border-radius: 160px 0 0 0; }
    .heroLocation { top: 16px; right: 16px; }
    .heroFloatingCard { left: 16px; right: 16px; bottom: 16px; width: auto; }
    .heroSeal, .heroScroll { display: none; }

    .sectionHeader { flex-direction: column; align-items: flex-start; gap: 14px; margin-bottom: 32px; }
    .ritualGrid { grid-template-columns: 1fr; }
    .ritualConciergeBanner { grid-template-columns: 1fr; padding: 24px 20px; text-align: center; justify-items: center; }
    .philosophy { display: flex; flex-direction: column; }
    .philosophyVisual { height: 320px; min-height: 0; }
    .valuesList { grid-template-columns: 1fr; padding: 36px 20px; }

    .journeyTimeline { grid-template-columns: 1fr; }
    .practitionersGrid { grid-template-columns: 1fr; }
    .membershipGrid { grid-template-columns: 1fr; }
    .membershipCard { padding: 32px 24px; }
    .productsGrid { grid-template-columns: 1fr 1fr; }
    .reviewsHeader { flex-direction: column; align-items: flex-start; gap: 16px; }
    .reviewCard { padding: 28px 24px; }
    .reviewQuote { font-size: 1.25rem; }
    .auraFooter { grid-template-columns: 1fr; gap: 36px; padding: 56px 20px; }

    .auraModal { padding: 32px 20px; }
    .auraModal form { grid-template-columns: 1fr; }
    .guideGrid { grid-template-columns: 1fr; }
    .cartDrawer { width: 100%; padding: 28px 20px; }

    .mobileBar {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 40;
      padding: 12px 16px;
      background: rgba(9, 35, 27, 0.95);
      backdrop-filter: blur(12px);
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      display: flex;
    }
    .mobileBookBtn { width: 100%; min-height: 48px; }
    .cartFloatBtn { bottom: 76px; }
    .auraPage { padding-bottom: 70px; }
  }

  @media (prefers-reduced-motion: reduce) {
    .auraPage *, .auraPage *::before, .auraPage *::after {
      scroll-behavior: auto !important;
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
    }
  }
`;
