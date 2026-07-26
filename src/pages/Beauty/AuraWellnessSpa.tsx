import { useEffect, useRef, useState } from "react";
<<<<<<< HEAD
import heroImage from "../../assets/images/beauty/aura/hero.png";
import interiorImage from "../../assets/images/beauty/aura/interior.png";
import pathImage from "../../assets/images/beauty/aura/pathtorenewal.png";
import bodyImage from "../../assets/images/beauty/aura/bodytreatment.png";
import massageImage from "../../assets/images/beauty/aura/massage.png";
import facialImage from "../../assets/images/beauty/aura/facial.png";
import hydroImage from "../../assets/images/beauty/aura/hydro.png";
import restoreImage from "../../assets/images/beauty/aura/restore.png";
import mayaImage from "../../assets/images/beauty/aura/maya.png";
import arjunImage from "../../assets/images/beauty/aura/arjun.png";
import laylaImage from "../../assets/images/beauty/aura/layla.png";
import noahImage from "../../assets/images/beauty/aura/noah.png";
import oilImage from "../../assets/images/beauty/aura/oil.png";
import soakImage from "../../assets/images/beauty/aura/soak.png";
import glowImage from "../../assets/images/beauty/aura/glow.png";
import candleImage from "../../assets/images/beauty/aura/candal.png";
import maskImage from "../../assets/images/beauty/aura/sleepmask.png";
=======
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
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0

const nav = [
  ["Rituals", "rituals"],
  ["Experiences", "philosophy"],
  ["Wellness Journey", "journey"],
  ["Practitioners", "practitioners"],
  ["About", "about"],
  ["Journal", "reviews"],
];
const rituals = [
  [
    "Body Treatments",
    "Detoxify, exfoliate and rejuvenate with results-driven therapies.",
    bodyImage,
    "Body Treatment",
    "90 min",
    "From $210",
  ],
  [
    "Massage Therapy",
    "Targeted techniques to release tension and restore flow.",
    massageImage,
    "Massage Therapy",
    "60–90 min",
    "From $165",
  ],
  [
    "Facial Rituals",
    "Glow-restoring facials using advanced and botanical skincare.",
    facialImage,
    "Facial Ritual",
    "75 min",
    "From $185",
  ],
  [
    "Hydrotherapy",
    "Thermal experiences that soothe, stimulate and rebalance.",
    hydroImage,
    "Hydrotherapy",
    "45 min",
    "From $110",
  ],
  [
    "Restorative Care",
    "Holistic rituals for sleep, stress relief and inner calm.",
    restoreImage,
    "Restorative Care",
    "90 min",
    "From $195",
  ],
];
const practitioners = [
  ["Maya Dey", "Wellness Director", mayaImage],
  ["Arjun Mehta", "Massage Therapist", arjunImage],
  ["Leila Chen", "Skin Therapist", laylaImage],
  ["Noah Patel", "Hydrotherapy Specialist", noahImage],
<<<<<<< HEAD
];
const products = [
  ["Aroma Body Oil", "$68", oilImage],
  ["Restorative Bath Soak", "$48", soakImage],
  ["Glow Facial Elixir", "$88", glowImage],
  ["Calm Candle", "$42", candleImage],
  ["Silk Sleep Mask", "$28", maskImage],
];
=======
];
const products = [
  ["Aroma Body Oil", "$68", oilImage],
  ["Restorative Bath Soak", "$48", soakImage],
  ["Glow Facial Elixir", "$88", glowImage],
  ["Calm Candle", "$42", candleImage],
  ["Silk Sleep Mask", "$28", maskImage],
];
>>>>>>> 355f61b90083ecaa00dead91704d4b68a69320c0
const reviews = [
  [
    "Aura is a sanctuary. Every visit leaves me feeling lighter, clearer and deeply cared for.",
    "Sarah L.",
  ],
  [
    "The attention to detail is unmatched. My facial ritual was absolutely transformative.",
    "James T.",
  ],
  [
    "A beautiful space with the most intuitive therapists. Truly a holistic experience.",
    "Priya M.",
  ],
];
const ritualGuides: Record<
  string,
  { benefits: string; expect: string; prepare: string; aftercare: string }
> = {
  "Body Treatment": {
    benefits:
      "Smoother skin, improved circulation, and a renewed sense of lightness.",
    expect:
      "A consultation, full-body exfoliation, mineral-rich wrap, and nourishing finish.",
    prepare:
      "Hydrate well and avoid exfoliating for 48 hours before your visit.",
    aftercare:
      "Continue hydrating and avoid intense heat or exercise for the rest of the day.",
  },
  "Massage Therapy": {
    benefits:
      "Reduced muscular tension, calmer nervous system, and improved mobility.",
    expect:
      "Your therapist adapts pressure and technique to how your body feels that day.",
    prepare:
      "Arrive hydrated and share any injuries, sensitivities, or pregnancy considerations.",
    aftercare:
      "Drink water, move gently, and allow your body time to integrate the treatment.",
  },
  "Facial Ritual": {
    benefits:
      "Brighter tone, deep hydration, refined texture, and supported skin resilience.",
    expect:
      "Skin analysis, double cleanse, targeted exfoliation, massage, mask, and finishing care.",
    prepare:
      "Pause strong exfoliants and retinoids for three days before your facial.",
    aftercare:
      "Use gentle hydration and SPF; avoid heat, exfoliation, and active products for 48 hours.",
  },
  Hydrotherapy: {
    benefits:
      "Improved circulation, reduced heaviness, and deep whole-body relaxation.",
    expect:
      "A guided sequence of warm immersion, cooling contrast, and quiet recovery.",
    prepare:
      "Hydrate, eat lightly, and tell us about cardiovascular or pregnancy concerns.",
    aftercare:
      "Rest, replenish fluids, and avoid alcohol or intense activity for several hours.",
  },
  "Restorative Care": {
    benefits:
      "Improved rest, eased stress, and a more grounded connection to your body.",
    expect:
      "A slow blend of breathwork, scalp therapy, warm oils, and nervous-system support.",
    prepare:
      "Wear comfortable clothing and arrive ten minutes early to settle in.",
    aftercare:
      "Keep your evening spacious and follow the personalized home ritual we provide.",
  },
};
const firstVisitFaqs = [
  [
    "When should I arrive?",
    "Please arrive 15 minutes early so you can settle in and complete a brief wellness consultation.",
  ],
  [
    "What should I wear?",
    "Wear whatever feels comfortable. Robes, slippers, secure storage, and everything needed for your ritual are provided.",
  ],
  [
    "What is your cancellation policy?",
    "We kindly request 24 hours’ notice. Late cancellations may be charged 50% of the scheduled ritual.",
  ],
  [
    "Can I visit while pregnant?",
    "Yes, with appropriate modifications. Please tell us when booking so we can recommend the safest ritual and practitioner.",
  ],
  [
    "Is the spa accessible?",
    "Our primary ritual rooms, hydrotherapy suite, lounge, and restrooms are wheelchair accessible. Contact us for individual support.",
  ],
];

function Mark() {
  return (
    <a className="auraMark" href="#home">
      <span>◉</span>
      <b>
        Aura<small>Wellness Spa</small>
      </b>
    </a>
  );
}

export default function AuraWellnessSpa() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRitual, setSelectedRitual] = useState("Massage Therapy");
  const [success, setSuccess] = useState(false);
  const [active, setActive] = useState("home");
  const [selectedPractitioner, setSelectedPractitioner] =
    useState("No preference");
  const [ritualDetail, setRitualDetail] = useState<string | null>(null);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const [cart, setCart] = useState<string[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const update = () => {
      const ids = ["home", ...nav.map(([, id]) => id), "membership", "shop"];
      const sections = ids
        .map((id) => document.getElementById(id))
        .filter((item): item is HTMLElement => Boolean(item))
        .sort((a, b) => a.offsetTop - b.offsetTop);
      const passed = sections.filter(
        (s) => s.offsetTop <= window.scrollY + 140,
      );
      setActive(passed[passed.length - 1]?.id ?? "home");
    };
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setBookingOpen(false);
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("keydown", key);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("keydown", key);
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
        "button,input,select,textarea",
      ),
    );
    items[0]?.focus();
    const trap = (event: KeyboardEvent) => {
      if (event.key !== "Tab") return;
      const first = items[0],
        last = items[items.length - 1];
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
  const book = (ritual = "Massage Therapy", practitioner = "No preference") => {
    setSelectedRitual(ritual);
    setSelectedPractitioner(practitioner);
    setSuccess(false);
    setBookingOpen(true);
  };

  useEffect(() => {
    const oldTitle = document.title;
    document.title = "Aura Wellness Spa | Restorative Rituals in Beverly Hills";
    let meta = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );
    const created = !meta;
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }
    const oldDescription = meta.content;
    meta.content =
      "Restorative massage, facial, body, hydrotherapy, and wellness rituals at Aura Wellness Spa in Beverly Hills.";
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
      <header className="auraNav">
        <Mark />
        <nav>
          {nav.map(([label, id]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "active" : ""}
              aria-current={active === id ? "page" : undefined}
            >
              {label}
            </a>
          ))}
        </nav>
        <button className="auraOutline" onClick={() => book()}>
          Book Ritual
        </button>
        <button
          className="auraMenu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle navigation"
        >
          {menuOpen ? "×" : "☰"}
        </button>
        {menuOpen && (
          <div className="auraMobile">
            {nav.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </a>
            ))}
            <button
              onClick={() => {
                setMenuOpen(false);
                book();
              }}
            >
              Book Ritual
            </button>
          </div>
        )}
      </header>

      <section id="home" className="auraHero">
        <div className="heroAura heroAuraOne" aria-hidden="true" />
        <div className="heroAura heroAuraTwo" aria-hidden="true" />
        <div className="heroWords">
          <div className="heroAvailability">
            <i /> Now welcoming spring rituals
          </div>
          <p className="overline">A Return to Balance</p>
          <h1>
            <em>Wellness</em> in
            <br />
            Its Purest Form
          </h1>
          <div className="ornament">
            <span />◉<span />
          </div>
          <p className="heroIntro">
            A quiet place to come back to yourself. Curated rituals, restorative
            spaces, and intuitive care for body, mind, and spirit.
          </p>
          <div className="heroActions">
            <button className="copperBtn" onClick={() => book()}>
              Book Your Ritual <span>→</span>
            </button>
            <a href="#rituals">
              Explore Rituals <span>↓</span>
            </a>
          </div>
          <div className="heroTrust">
            <span>
              <b>4.9</b>
              <i>★★★★★</i>
              <small>320+ guest reviews</small>
            </span>
            <span>
              <b>15+</b>
              <small>Expert practitioners</small>
            </span>
            <span>
              <b>100%</b>
              <small>Personalized care</small>
            </span>
          </div>
        </div>
        <div className="heroImage">
          <div className="heroFrame">
            <img
              src={heroImage}
              alt="Serene Aura wellness spa pool"
              fetchPriority="high"
              decoding="async"
            />
            <div className="heroShade" />
          </div>
          <div className="heroLocation">
            <span>Beverly Hills</span>
            <b>Open today · 9am–7pm</b>
          </div>
          <blockquote>
            <span>“</span>
            <p>
              The moment you enter,
              <br />
              the world becomes quieter.
            </p>
            <small>— The Aura Experience</small>
          </blockquote>
          <div className="heroSeal">
            <span>✦</span>
            <b>Aura</b>
            <small>Restore Within</small>
          </div>
        </div>
        <a className="heroScroll" href="#rituals">
          <span>Scroll to explore</span>
          <b>↓</b>
        </a>
      </section>

      <section id="rituals" className="ritualSection">
        <div className="ritualHeading">
          <div>
            <p className="overline">Rituals for Every You</p>
            <h2>
              Choose what you need
              <br />
              <em>to feel restored.</em>
            </h2>
          </div>
          <p>
            Each ritual is adapted to your body, your energy, and your intention
            on the day.
          </p>
        </div>
        <div className="ritualGrid">
          {rituals.map(
            ([title, text, image, ritual, duration, price], index) => (
              <article key={title}>
                <div className="ritualPhoto">
                  <img
                    src={image}
                    alt={`${title} at Aura Wellness Spa`}
                    loading="lazy"
                    decoding="async"
                  />
                  <span>0{index + 1}</span>
                </div>
                <div>
                  <span className="ritualIcon">◌</span>
                  <h2>{title}</h2>
                  <p>{text}</p>
                  <div className="ritualMeta">
                    <span>{duration}</span>
                    <span>{price}</span>
                  </div>
                  <div className="ritualActions">
                    <button onClick={() => setRitualDetail(ritual)}>
                      Details
                    </button>
                    <button onClick={() => book(ritual)}>
                      Book <span>→</span>
                    </button>
                  </div>
                </div>
              </article>
            ),
          )}
        </div>
        <div className="ritualHelp">
          <span>Not sure where to begin?</span>
          <p>
            Our wellness concierge will help you choose the right experience.
          </p>
          <button onClick={() => book()}>Plan My Visit →</button>
        </div>
      </section>

      <section id="philosophy" className="philosophy">
        <div className="philosophyCopy">
          <p className="overline">Our Philosophy</p>
          <h2>
            Wellness is
            <br />a way of life.
          </h2>
          <p>
            At Aura, we blend ancient wisdom with modern science to create
            transformative experiences that nurture the whole you.
          </p>
          <a href="#about">Our Story →</a>
        </div>
        <img
          src={interiorImage}
          alt="Natural wellness lounge at Aura"
          loading="lazy"
          decoding="async"
        />
        <div className="values">
          {[
            [
              "Intentional Care",
              "Every detail is designed with purpose and presence.",
            ],
            [
              "Natural Elements",
              "We honor the healing power of nature in every ritual.",
            ],
            [
              "Mindful Living",
              "We inspire daily practices that support lasting wellbeing.",
            ],
          ].map(([title, text]) => (
            <article key={title}>
              <span>✦</span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="journey" className="journey">
        <div>
          <p className="overline">The Aura Journey</p>
          <h2>A path to renewal</h2>
          <div className="journeySteps">
            {[
              [
                "01",
                "Connect",
                "We begin with you. Share your needs and intentions.",
              ],
              [
                "02",
                "Curate",
                "We design a personal ritual plan tailored to your goals.",
              ],
              [
                "03",
                "Restore",
                "Experience immersive therapies that rebalance.",
              ],
              [
                "04",
                "Sustain",
                "Receive guidance and rituals to extend the benefits.",
              ],
            ].map(([n, title, text]) => (
              <article key={n}>
                <span>{n}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
        <img
          src={pathImage}
          alt="Guest resting after a wellness ritual"
          loading="lazy"
          decoding="async"
        />
      </section>

      <section id="practitioners" className="practitioners">
        <div>
          <p className="overline">Meet Our Practitioners</p>
          <h2>
            Guides on your
            <br />
            wellness path.
          </h2>
          <p>
            Each practitioner brings deep expertise and an intuitive,
            whole-person approach.
          </p>
        </div>
        {practitioners.map(([name, role, image]) => (
          <article key={name}>
            <img
              src={image}
              alt={`${name}, ${role}`}
              loading="lazy"
              decoding="async"
            />
            <h3>{name}</h3>
            <p>{role}</p>
            <button
              onClick={() =>
                book(
                  role.includes("Massage")
                    ? "Massage Therapy"
                    : role.includes("Skin")
                      ? "Facial Ritual"
                      : role.includes("Hydro")
                        ? "Hydrotherapy"
                        : "Restorative Care",
                  name,
                )
              }
            >
              Book with {name.split(" ")[0]} →
            </button>
          </article>
        ))}
      </section>

      <section id="reviews" className="reviews">
        <div>
          <p className="overline">Kind Words</p>
          <h2>
            Transformative
            <br />
            experiences.
          </h2>
          <div className="reviewControls">
            <button
              onClick={() =>
                setReviewIndex(
                  (reviewIndex + reviews.length - 1) % reviews.length,
                )
              }
              aria-label="Previous review"
            >
              ←
            </button>
            <span>
              {reviewIndex + 1} / {reviews.length}
            </span>
            <button
              onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)}
              aria-label="Next review"
            >
              →
            </button>
          </div>
        </div>
        {reviews.map(([quote, name], index) => (
          <blockquote
            className={reviewIndex === index ? "active" : ""}
            key={name}
          >
            <span>“</span>
            <p>{quote}</p>
            <footer>— {name}</footer>
          </blockquote>
        ))}
      </section>

      <section id="membership" className="membership">
        <img
          src={interiorImage}
          alt="Aura relaxation room"
          loading="lazy"
          decoding="async"
        />
        <div>
          <p className="overline">Membership & Packages</p>
          <h2>More wellness, more you.</h2>
          <p>
            Enjoy exclusive benefits, priority booking and curated experiences.
          </p>
          <button onClick={() => book("Membership Consultation")}>
            Compare Options →
          </button>
        </div>
        <article>
          <h3>Aura Membership</h3>
          <p>Year-round wellbeing with exclusive perks.</p>
          <ul>
            <li>Member rates</li>
            <li>Priority booking</li>
            <li>Exclusive events</li>
            <li>Birthday treat</li>
          </ul>
          <button onClick={() => book("Aura Membership")}>Enquire →</button>
        </article>
        <article className="popular">
          <span>Popular</span>
          <h3>Ritual Packages</h3>
          <p>Curated experiences designed for you.</p>
          <ul>
            <li>Save up to 15%</li>
            <li>Flexible options</li>
            <li>Perfect for gifting</li>
          </ul>
          <button onClick={() => book("Ritual Package")}>
            Choose Package →
          </button>
        </article>
      </section>

      <section id="shop" className="shop">
        <div>
          <p className="overline">Self-Care, Elevated</p>
          <h2>Bring the calm home.</h2>
          <button
            onClick={() => {
              setCart([...cart, "Aura Gift Card — $150"]);
              setCartOpen(true);
            }}
          >
            Add a $150 Gift Card →
          </button>
        </div>
        {products.map(([name, price, image]) => (
          <article key={name}>
            <img src={image} alt={name} loading="lazy" decoding="async" />
            <h3>{name}</h3>
            <p>{price}</p>
            <button onClick={() => setCart([...cart, `${name} — ${price}`])}>
              Add to Bag
            </button>
          </article>
        ))}
      </section>

      <section className="firstVisit">
        <div>
          <p className="overline">Your First Visit</p>
          <h2>Arrive as you are.</h2>
          <p>We’ll take care of the rest.</p>
        </div>
        <div>
          {firstVisitFaqs.map(([question, answer], index) => (
            <article key={question}>
              <button
                onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                aria-expanded={openFaq === index}
              >
                {question}
                <span>{openFaq === index ? "−" : "+"}</span>
              </button>
              {openFaq === index && <p>{answer}</p>}
            </article>
          ))}
        </div>
      </section>

      <footer className="auraFooter">
        <div>
          <Mark />
          <p>
            A sanctuary for mind, body and spirit. We can’t wait to welcome you.
          </p>
          <span>◎ &nbsp; f &nbsp; p &nbsp; ✉</span>
        </div>
        <div>
          <h3>Explore</h3>
          {[
            "Rituals",
            "Experiences",
            "Wellness Journey",
            "Memberships",
            "Gift Cards",
          ].map((x) => (
            <a key={x} href="#rituals">
              {x}
            </a>
          ))}
        </div>
        <div id="about">
          <h3>About</h3>
          {["Our Story", "Our Values", "Careers", "Press", "Contact"].map(
            (x) => (
              <a key={x} href="#philosophy">
                {x}
              </a>
            ),
          )}
        </div>
        <div>
          <h3>Visit</h3>
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
            <a href="tel:+13105557890">(310) 555-7890</a>
            <a href="mailto:hello@aurawellness.com">hello@aurawellness.com</a>
            Tue–Sun · 9am–7pm
          </p>
        </div>
        <div>
          <h3>Stay Connected</h3>
          <p>Wellness inspiration, offers and event invites.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="aura-email">Email address</label>
            <div>
              <input
                id="aura-email"
                type="email"
                required
                placeholder="Your email address"
              />
              <button>Subscribe</button>
            </div>
          </form>
        </div>
      </footer>

      <button className="mobileBook" onClick={() => book()}>
        <span>Book Your Ritual</span>
        <b>→</b>
      </button>
      <button
        className="cartButton"
        onClick={() => setCartOpen(true)}
        aria-label={`Open shopping bag with ${cart.length} items`}
      >
        Bag <span>{cart.length}</span>
      </button>

      {bookingOpen && (
        <div
          className="auraModalBack"
          onMouseDown={(e) =>
            e.target === e.currentTarget && setBookingOpen(false)
          }
        >
          <section
            ref={modalRef}
            className="auraModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="aura-book-title"
          >
            <button
              className="close"
              onClick={() => setBookingOpen(false)}
              aria-label="Close booking form"
            >
              ×
            </button>
            {success ? (
              <div className="auraSuccess" role="status">
                <span>✦</span>
                <p className="overline">Your Journey Begins</p>
                <h2 id="aura-book-title">Your request is received.</h2>
                <p>
                  Our wellness concierge will contact you shortly to curate your
                  visit.
                </p>
                <button
                  className="copperBtn"
                  onClick={() => setBookingOpen(false)}
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <p className="overline">Reserve Your Ritual</p>
                <h2 id="aura-book-title">Return to balance.</h2>
                <p>
                  Share a few details and our wellness concierge will
                  thoughtfully plan your experience.
                </p>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setSuccess(true);
                  }}
                >
                  <label>
                    Full name
                    <input required autoComplete="name" />
                  </label>
                  <label>
                    Email
                    <input type="email" required autoComplete="email" />
                  </label>
                  <label>
                    Ritual
                    <select
                      value={selectedRitual}
                      onChange={(e) => setSelectedRitual(e.target.value)}
                    >
                      {![
                        ...rituals.map((item) => item[3]),
                        "Membership Consultation",
                        "Aura Membership",
                        "Ritual Package",
                      ].includes(selectedRitual) && (
                        <option>{selectedRitual}</option>
                      )}
                      {rituals.map(([, , , ritual]) => (
                        <option key={ritual}>{ritual}</option>
                      ))}
                      <option>Membership Consultation</option>
                      <option>Aura Membership</option>
                      <option>Ritual Package</option>
                    </select>
                  </label>
                  <label>
                    Practitioner
                    <select
                      value={selectedPractitioner}
                      onChange={(e) => setSelectedPractitioner(e.target.value)}
                    >
                      <option>No preference</option>
                      {practitioners.map(([name]) => (
                        <option key={name}>{name}</option>
                      ))}
                    </select>
                  </label>
                  <label>
                    Preferred date
                    <input type="date" required />
                  </label>
                  <label>
                    Preferred time
                    <select>
                      <option>Morning</option>
                      <option>Afternoon</option>
                      <option>Evening</option>
                    </select>
                  </label>
                  <label>
                    First visit?
                    <select>
                      <option>Yes, this is my first visit</option>
                      <option>No, I’ve visited before</option>
                    </select>
                  </label>
                  <label className="full">
                    What would you like to restore?
                    <textarea
                      rows={3}
                      placeholder="Sleep, stress, skin, tension, or simply time to pause..."
                    />
                  </label>
                  <button className="copperBtn full">Request Ritual</button>
                </form>
              </>
            )}
          </section>
        </div>
      )}

      {ritualDetail && (
        <div
          className="auraModalBack"
          onMouseDown={(e) =>
            e.target === e.currentTarget && setRitualDetail(null)
          }
        >
          <section
            className="ritualDialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="ritual-detail-title"
          >
            <button
              className="close"
              onClick={() => setRitualDetail(null)}
              aria-label="Close ritual details"
            >
              ×
            </button>
            <p className="overline">Ritual Guide</p>
            <h2 id="ritual-detail-title">{ritualDetail}</h2>
            {Object.entries(ritualGuides[ritualDetail]).map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
            <button
              className="copperBtn"
              onClick={() => {
                setRitualDetail(null);
                book(ritualDetail);
              }}
            >
              Book This Ritual
            </button>
          </section>
        </div>
      )}

      {cartOpen && (
        <div
          className="cartShade"
          onMouseDown={(e) =>
            e.target === e.currentTarget && setCartOpen(false)
          }
        >
          <aside className="cartDrawer" aria-label="Shopping bag">
            <button
              className="close"
              onClick={() => setCartOpen(false)}
              aria-label="Close shopping bag"
            >
              ×
            </button>
            <p className="overline">Aura At Home</p>
            <h2>Your Bag</h2>
            {cart.length === 0 ? (
              <p>Your bag is quiet—for now.</p>
            ) : (
              <div className="cartItems">
                {cart.map((item, index) => (
                  <div key={`${item}-${index}`}>
                    <span>{item}</span>
                    <button
                      onClick={() =>
                        setCart(cart.filter((_, i) => i !== index))
                      }
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
            <button
              className="copperBtn"
              disabled={cart.length === 0}
              onClick={() => setCart([])}
            >
              Continue to Checkout
            </button>
            <small>
              Demo cart — connect a commerce provider to accept payment.
            </small>
          </aside>
        </div>
      )}
    </main>
  );
}

const css = `
 :root{--forest:#0d2c22;--forest2:#153a2d;--cream:#f4f0e7;--paper:#faf7f0;--copper:#b76743;--gold:#a87844;--ink:#17231e;--muted:#696b65;--line:#d9d1c5}*{box-sizing:border-box}.auraPage{min-height:100vh;background:var(--paper);color:var(--ink);font-family:"Avenir Next",Avenir,"Segoe UI",sans-serif;overflow-x:clip}.auraPage section[id]{scroll-margin-top:82px}.auraPage button,.auraPage input,.auraPage select,.auraPage textarea{font:inherit}.auraPage h1,.auraPage h2{margin:0;font-family:Georgia,serif;font-weight:400;line-height:1.02}.auraPage p{line-height:1.65}.overline{margin:0 0 18px;color:var(--copper);text-transform:uppercase;letter-spacing:.18em;font-size:.68rem;font-weight:800}.auraPage a:focus-visible,.auraPage button:focus-visible,.auraPage input:focus-visible,.auraPage select:focus-visible,.auraPage textarea:focus-visible{outline:3px solid #c58a57;outline-offset:3px}
 .auraNav{position:sticky;top:0;z-index:50;display:grid;grid-template-columns:auto 1fr auto auto;align-items:center;gap:28px;min-height:82px;padding:0 max(28px,calc((100vw - 1360px)/2));background:rgba(10,40,30,.97);border-bottom:1px solid #ffffff18;color:white;backdrop-filter:blur(14px)}.auraMark{display:flex;align-items:center;gap:12px;color:white;text-decoration:none}.auraMark>span{display:grid;width:40px;height:40px;place-items:center;border:1px solid var(--gold);border-radius:50%;color:var(--gold)}.auraMark b{font-family:Georgia,serif;text-transform:uppercase;letter-spacing:.3em;font-size:1.45rem;font-weight:400}.auraMark small{display:block;margin-top:4px;text-align:center;font-family:Arial,sans-serif;font-size:.5rem;letter-spacing:.35em}.auraNav nav{display:flex;justify-content:center;gap:38px}.auraNav nav a{position:relative;color:#eee;text-decoration:none;text-transform:uppercase;letter-spacing:.1em;font-size:.64rem;font-weight:700}.auraNav nav a::after{content:"";position:absolute;left:0;right:0;bottom:-8px;height:1px;background:var(--copper);transform:scaleX(0);transition:.25s}.auraNav nav a:hover::after,.auraNav nav a.active::after{transform:scaleX(1)}.auraOutline{padding:13px 30px;border:1px solid var(--gold);background:transparent;color:#d6a06a;text-transform:uppercase;letter-spacing:.1em;font-size:.68rem;font-weight:800;cursor:pointer}.auraMenu,.auraMobile{display:none}
 .auraHero{position:relative;isolation:isolate;display:grid;grid-template-columns:47% 53%;min-height:720px;overflow:hidden;background:linear-gradient(135deg,#0b2b21 0%,#12392c 64%,#0b291f 100%);color:white}.auraHero::before{content:"";position:absolute;left:6%;top:14%;z-index:-1;width:430px;height:430px;border:1px solid #bd8b5524;border-radius:50%}.auraHero::after{content:"";position:absolute;left:20%;bottom:-180px;z-index:-1;width:440px;height:440px;border:1px solid #ffffff0b;border-radius:50%}.heroAura{position:absolute;z-index:-1;border-radius:50%;filter:blur(2px);pointer-events:none}.heroAuraOne{left:-140px;top:-170px;width:430px;height:430px;background:radial-gradient(circle,#8f653723,transparent 68%)}.heroAuraTwo{left:30%;bottom:-230px;width:500px;height:500px;background:radial-gradient(circle,#3d70542e,transparent 68%)}.heroWords{position:relative;z-index:2;display:flex;flex-direction:column;justify-content:center;padding:72px clamp(38px,6vw,100px) 86px max(34px,calc((100vw - 1360px)/2))}.heroAvailability{display:inline-flex;align-items:center;gap:10px;width:max-content;margin-bottom:28px;padding:8px 13px;border:1px solid #ffffff1f;border-radius:99px;background:#ffffff08;color:#d8d8d2;text-transform:uppercase;letter-spacing:.12em;font-size:.62rem}.heroAvailability i{width:7px;height:7px;border-radius:50%;background:#bd764f;box-shadow:0 0 0 5px #bd764f1e}.heroWords>.overline{margin-bottom:16px;color:#cd8b61}.heroWords h1{max-width:650px;font-size:clamp(4.4rem,6vw,6.6rem);letter-spacing:-.045em;line-height:.91}.heroWords h1 em{color:#f0ece4;font-weight:400}.ornament{display:flex;align-items:center;gap:12px;width:150px;margin:28px 0 20px;color:var(--gold)}.ornament span{flex:1;height:1px;background:#a8784466}.heroIntro{max-width:520px;margin:0;color:#dfe3dd;font-size:1.05rem;line-height:1.8}.heroActions{display:flex;align-items:center;gap:16px;margin-top:30px}.heroActions .copperBtn{gap:24px;min-width:210px}.heroActions>a{display:inline-flex;align-items:center;justify-content:space-between;gap:25px;min-height:50px;padding:0 24px;border:1px solid #ffffff3d;color:#eee;text-decoration:none;text-transform:uppercase;font-size:.74rem;letter-spacing:.1em;transition:background .25s ease,border .25s ease}.heroActions>a:hover{border-color:#ffffff80;background:#ffffff0b}.copperBtn{min-height:50px;padding:0 30px;border:0;background:var(--copper);color:white;text-transform:uppercase;letter-spacing:.1em;font-size:.74rem;font-weight:800;cursor:pointer;transition:transform .25s ease,background .25s ease}.copperBtn:hover{background:#cb7650;transform:translateY(-2px)}.heroTrust{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:18px;margin-top:40px;padding-top:22px;border-top:1px solid #ffffff1d}.heroTrust span{display:grid;grid-template-columns:auto 1fr;align-items:center;column-gap:7px;color:#c89461}.heroTrust b{color:white;font-family:Georgia,serif;font-size:1.45rem;font-weight:400}.heroTrust i{color:#bc8a53;font-size:.64rem;font-style:normal;letter-spacing:.04em}.heroTrust small{grid-column:1/-1;margin-top:4px;color:#abb8b0;font-size:.72rem}.heroImage{position:relative;min-width:0;padding:28px 0 28px 16px}.heroFrame{position:relative;width:100%;height:100%;overflow:hidden;border-radius:260px 0 0 8px;box-shadow:-25px 30px 80px #0004}.heroFrame img{width:100%;height:100%;object-fit:cover;object-position:center;transition:transform 1.2s ease}.heroImage:hover .heroFrame img{transform:scale(1.018)}.heroShade{position:absolute;inset:0;background:linear-gradient(90deg,#102f272e,transparent 40%,#00000018)}.heroLocation{position:absolute;right:26px;top:52px;z-index:2;display:grid;gap:4px;padding:13px 17px;border:1px solid #ffffff66;background:#102e26b8;color:white;backdrop-filter:blur(10px)}.heroLocation span{text-transform:uppercase;letter-spacing:.15em;font-size:.58rem;color:#d8ab78}.heroLocation b{font-size:.72rem;font-weight:500}.heroImage blockquote{position:absolute;left:-32px;bottom:58px;z-index:2;width:270px;margin:0;padding:24px 28px;background:#f2eee6;color:var(--ink);box-shadow:0 20px 50px #0003}.heroImage blockquote>span{position:absolute;right:18px;top:12px;color:#bd7650;font-family:Georgia,serif;font-size:2rem}.heroImage blockquote p{margin:0;font-family:Georgia,serif;font-size:1.15rem;line-height:1.4}.heroImage blockquote small{display:block;margin-top:12px;color:#7c766e;text-transform:uppercase;letter-spacing:.12em;font-size:.54rem}.heroSeal{position:absolute;right:32px;bottom:48px;z-index:2;display:grid;width:112px;height:112px;place-items:center;align-content:center;border:1px solid #d8b27d;border-radius:50%;background:#12372ad9;color:white;text-align:center;backdrop-filter:blur(7px)}.heroSeal>span{color:#cf9561}.heroSeal b{font-family:Georgia,serif;font-size:1.15rem;font-weight:400;text-transform:uppercase;letter-spacing:.15em}.heroSeal small{margin-top:4px;color:#d2c8b9;font-size:.48rem;text-transform:uppercase;letter-spacing:.13em}.heroScroll{position:absolute;left:24px;bottom:24px;z-index:3;display:flex;align-items:center;gap:11px;color:#a8b5ad;text-decoration:none;text-transform:uppercase;writing-mode:vertical-rl;letter-spacing:.13em;font-size:.54rem}.heroScroll b{color:#ce9464;font-size:1rem}
 .ritualSection{padding:64px max(28px,calc((100vw - 1320px)/2)) 0}.ritualHeading{display:flex;align-items:end;justify-content:space-between;gap:40px;margin-bottom:34px}.ritualHeading h2{font-size:clamp(2.8rem,4.4vw,4.5rem)}.ritualHeading h2 em{color:var(--copper);font-weight:400}.ritualHeading>p{max-width:450px;margin:0;color:var(--muted)}.ritualGrid{display:grid;grid-template-columns:repeat(5,1fr);border:1px solid var(--line)}.ritualGrid article{display:flex;flex-direction:column;min-width:0;background:#f7f4ed;border-right:1px solid var(--line);transition:transform .3s ease,box-shadow .3s ease,background .3s ease}.ritualGrid article:last-child{border-right:0}.ritualGrid article:hover{z-index:2;background:#fff;transform:translateY(-6px);box-shadow:0 20px 45px #22332920}.ritualPhoto{position:relative;height:165px;overflow:hidden}.ritualPhoto img{width:100%;height:100%;object-fit:cover;transition:transform .5s ease}.ritualGrid article:hover img{transform:scale(1.04)}.ritualPhoto>span{position:absolute;left:10px;top:10px;display:grid;width:32px;height:32px;place-items:center;border-radius:50%;background:#f8f4eddd;color:var(--copper);font-family:Georgia,serif;font-size:.68rem}.ritualGrid article>div:last-child{display:flex;flex:1;flex-direction:column;padding:22px}.ritualIcon{color:var(--copper);font-size:1.7rem}.ritualGrid h2{font-size:1.25rem}.ritualGrid p{min-height:70px;font-size:.78rem;color:var(--muted)}.ritualMeta{display:flex;justify-content:space-between;gap:8px;padding:13px 0;border-top:1px solid var(--line);color:#4f554f;font-size:.68rem;font-weight:700}.ritualGrid button{display:flex;justify-content:space-between;margin-top:auto;width:100%;padding:10px 0;border:0;border-block:1px solid;background:transparent;text-transform:uppercase;letter-spacing:.09em;font-size:.6rem;font-weight:800;cursor:pointer}.ritualHelp{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:26px;padding:22px 28px;background:var(--forest);color:white}.ritualHelp>span{font-family:Georgia,serif;color:#d0a16f;font-size:1.15rem}.ritualHelp p{margin:0;color:#d6d8d2;font-size:.78rem}.ritualHelp button{border:0;border-bottom:1px solid #c5b4a3;background:transparent;color:white;text-transform:uppercase;font-size:.62rem;cursor:pointer}.mobileBook{display:none}
 .philosophy{display:grid;grid-template-columns:36% 32% 32%;margin-top:28px;background:#eee9df}.philosophyCopy{display:flex;flex-direction:column;justify-content:center;padding:55px max(34px,7vw)}.philosophyCopy h2{font-size:3.7rem}.philosophyCopy>p:not(.overline){color:var(--muted)}.philosophyCopy a{margin-top:12px;color:var(--ink);text-decoration:none;text-transform:uppercase;font-size:.65rem;font-weight:800}.philosophy>img{width:100%;height:100%;min-height:400px;object-fit:cover}.values{display:flex;flex-direction:column;justify-content:center;gap:28px;padding:40px;background:var(--forest);color:white}.values article{display:grid;grid-template-columns:44px 1fr;gap:18px}.values article>span{color:var(--gold);font-size:1.7rem}.values h3,.values p{margin:0}.values h3{font-family:Georgia,serif;font-weight:400}.values p{margin-top:6px;color:#d8d6d0;font-size:.78rem}
 .journey{display:grid;grid-template-columns:68% 32%;background:#f4f0e7}.journey>div{padding:38px max(35px,calc((100vw - 1300px)/2))}.journey h2{font-size:2.3rem}.journeySteps{position:relative;display:grid;grid-template-columns:repeat(4,1fr);gap:28px;margin-top:28px}.journeySteps::before{content:"";position:absolute;left:5%;right:5%;top:22px;height:1px;background:#b99673}.journeySteps article{position:relative;text-align:center}.journeySteps span{position:relative;z-index:1;display:grid;width:46px;height:46px;margin:0 auto 14px;place-items:center;border:1px solid #b99673;border-radius:50%;background:#f4f0e7}.journeySteps h3{font-family:Georgia,serif;font-weight:400}.journeySteps p{font-size:.7rem;color:var(--muted)}.journey>img{width:100%;height:100%;object-fit:cover}
 .practitioners{display:grid;grid-template-columns:1.25fr repeat(4,1fr);gap:14px;padding:28px max(28px,calc((100vw - 1360px)/2));background:var(--forest);color:white}.practitioners>div{align-self:center}.practitioners h2{font-size:2.6rem}.practitioners button{margin-top:24px;border:0;background:transparent;color:white;text-transform:uppercase;font-size:.65rem;cursor:pointer}.practitioners article{background:#e8e0d4;text-align:center;color:var(--ink)}.practitioners img{width:100%;height:190px;object-fit:cover;object-position:center 20%}.practitioners h3,.practitioners p{margin:7px 0 0;font-family:Georgia,serif;font-weight:400}.practitioners p{margin:0 0 8px;font-size:.7rem;color:var(--muted)}
 .reviews{display:grid;grid-template-columns:1.2fr repeat(3,1fr);gap:26px;padding:42px max(28px,calc((100vw - 1320px)/2));background:#f8f4ed}.reviews h2{font-size:2.7rem}.reviews a{color:var(--ink);text-decoration:none;text-transform:uppercase;font-size:.64rem}.reviews blockquote{margin:0;padding:14px 20px;border-left:1px solid var(--line)}.reviews blockquote span{font-family:Georgia,serif;color:var(--copper);font-size:3rem}.reviews blockquote p{min-height:95px;color:#363b37}.reviews footer{text-transform:uppercase;font-size:.65rem}
 .membership{display:grid;grid-template-columns:24% 32% 22% 22%;background:var(--forest);color:white}.membership>img{width:100%;height:100%;object-fit:cover}.membership>div{align-self:center;padding:35px 50px}.membership h2{font-size:2.2rem}.membership>div p{color:#d2d1cb}.membership>div a{color:white;text-decoration:none;text-transform:uppercase;font-size:.63rem}.membership>article{position:relative;margin:18px 8px;padding:28px;background:#f5f1e9;color:var(--ink)}.membership>article h3{font-family:Georgia,serif;font-weight:400;text-transform:uppercase;letter-spacing:.08em}.membership>article p,.membership li{font-size:.72rem;color:var(--muted)}.membership ul{padding-left:18px;line-height:2}.popular>span{position:absolute;right:-1px;top:-1px;padding:7px 16px;background:var(--copper);color:white;text-transform:uppercase;font-size:.55rem}
 .shop{display:grid;grid-template-columns:1.5fr repeat(5,1fr);gap:18px;padding:18px max(28px,calc((100vw - 1320px)/2));background:#f8f4ed}.shop>div{align-self:center}.shop h2{font-size:2.2rem}.shop a{color:var(--ink);text-decoration:none;text-transform:uppercase;font-size:.63rem}.shop article{text-align:center}.shop img{width:100%;height:130px;object-fit:cover}.shop h3,.shop p{margin:6px 0 0;font-size:.7rem;font-weight:500}.shop p{margin:0;color:var(--muted)}
 .auraFooter{display:grid;grid-template-columns:1.3fr .7fr .7fr 1fr 1.4fr;gap:38px;padding:38px max(28px,calc((100vw - 1320px)/2));background:var(--forest);color:#eee}.auraFooter .auraMark{margin-bottom:18px}.auraFooter h3{color:#b78356;text-transform:uppercase;letter-spacing:.12em;font-size:.65rem}.auraFooter p,.auraFooter a{color:#d3d1cc;font-size:.7rem;line-height:1.7}.auraFooter a{display:block;text-decoration:none}.auraFooter form label{font-size:.65rem}.auraFooter form>div{display:flex;margin-top:8px}.auraFooter input{min-width:0;flex:1;padding:11px;background:#ffffff0b;border:1px solid #ffffff25;color:white}.auraFooter form button{border:0;padding:0 16px;background:var(--copper);color:white;text-transform:uppercase;font-size:.58rem}
 .ritualActions{display:grid;grid-template-columns:1fr 1fr;gap:8px}.ritualActions button{justify-content:center!important;border:1px solid var(--line)!important}.ritualActions button:last-child{background:var(--forest);color:white}.practitioners>div>p:not(.overline){max-width:250px;color:#c9cbc6;font-size:.78rem}.practitioners article button{margin:5px 0 10px;border:0;background:transparent;color:var(--forest);text-transform:uppercase;font-size:.58rem;font-weight:800;cursor:pointer}.reviewControls{display:flex;align-items:center;gap:12px;margin-top:22px}.reviewControls button{display:grid;width:34px;height:34px;place-items:center;border:1px solid var(--line);border-radius:50%;background:transparent;cursor:pointer}.reviewControls span{font-size:.68rem}.membership button,.shop button{padding:7px 0;border:0;border-bottom:1px solid currentColor;background:transparent;color:inherit;text-transform:uppercase;letter-spacing:.08em;font-size:.6rem;font-weight:800;cursor:pointer}.shop article button{margin-top:7px}.firstVisit{display:grid;grid-template-columns:34% 66%;padding:64px max(28px,calc((100vw - 1180px)/2));background:#eee9df}.firstVisit h2{font-size:3.5rem}.firstVisit>div:first-child>p:last-child{color:var(--muted)}.firstVisit article{border-top:1px solid #cfc6b9}.firstVisit article:last-child{border-bottom:1px solid #cfc6b9}.firstVisit article button{display:flex;width:100%;justify-content:space-between;padding:18px 0;border:0;background:transparent;color:var(--ink);font-weight:700;cursor:pointer}.firstVisit article button span{color:var(--copper);font-size:1.2rem}.firstVisit article p{margin:-2px 0 20px;color:var(--muted);font-size:.82rem}.cartButton{position:fixed;right:18px;bottom:18px;z-index:65;display:flex;align-items:center;gap:9px;padding:11px 14px;border:1px solid #b98c60;background:var(--forest);color:white;text-transform:uppercase;font-size:.62rem;font-weight:800;box-shadow:0 10px 30px #0004;cursor:pointer}.cartButton span{display:grid;width:20px;height:20px;place-items:center;border-radius:50%;background:var(--copper)}
 .auraModalBack{position:fixed;inset:0;z-index:100;display:grid;place-items:center;padding:22px;background:#06140fc9;backdrop-filter:blur(10px)}.auraModal{position:relative;width:min(700px,100%);max-height:calc(100vh - 44px);overflow:auto;padding:44px;background:var(--cream)}.auraModal h2{font-size:3.6rem}.auraModal>.close,.ritualDialog>.close,.cartDrawer>.close{position:absolute;right:16px;top:16px;width:42px;height:42px;border:1px solid var(--line);border-radius:50%;background:transparent;font-size:1.4rem;cursor:pointer}.auraModal>p:not(.overline){color:var(--muted)}.auraModal form{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:24px}.auraModal label{display:grid;gap:6px;text-transform:uppercase;font-size:.68rem;font-weight:800}.auraModal input,.auraModal select,.auraModal textarea{width:100%;padding:12px;border:1px solid var(--line);background:#fff}.auraModal .full{grid-column:1/-1}.auraSuccess{display:grid;min-height:400px;place-content:center;text-align:center;justify-items:center}.auraSuccess>span{color:var(--gold);font-size:3rem}.auraSuccess p:not(.overline){max-width:450px;color:var(--muted)}.ritualDialog{position:relative;width:min(760px,100%);max-height:calc(100vh - 44px);overflow:auto;padding:44px;background:var(--cream)}.ritualDialog>h2{font-size:3.4rem;margin-bottom:25px}.ritualDialog article{display:grid;grid-template-columns:130px 1fr;gap:20px;padding:16px 0;border-top:1px solid var(--line)}.ritualDialog article h3{margin:0;text-transform:capitalize;font-family:Georgia,serif;font-weight:400}.ritualDialog article p{margin:0;color:var(--muted)}.ritualDialog>.copperBtn{margin-top:22px}.cartShade{position:fixed;inset:0;z-index:100;background:#0717109e}.cartDrawer{position:absolute;right:0;top:0;bottom:0;width:min(440px,100%);padding:44px 30px;background:var(--cream);box-shadow:-20px 0 80px #0005}.cartDrawer h2{font-size:3rem}.cartItems{margin:28px 0}.cartItems>div{display:flex;justify-content:space-between;gap:18px;padding:15px 0;border-top:1px solid var(--line);font-size:.78rem}.cartItems button{border:0;background:transparent;color:var(--copper);font-size:.65rem;cursor:pointer}.cartDrawer>.copperBtn{width:100%;margin-top:20px}.cartDrawer>.copperBtn:disabled{opacity:.45}.cartDrawer>small{display:block;margin-top:13px;color:var(--muted)}
 @media(max-width:1050px){.auraNav nav{display:none}.auraNav{grid-template-columns:1fr auto auto}.auraMenu{display:grid;width:42px;height:42px;place-items:center;border:0;background:transparent;color:white;font-size:1.3rem}.auraMobile{position:absolute;left:14px;right:14px;top:calc(100% + 8px);display:grid;padding:14px;background:var(--forest2);box-shadow:0 20px 60px #0006}.auraMobile a,.auraMobile button{padding:12px;color:white;text-align:left;text-decoration:none;text-transform:uppercase;font-size:.7rem;background:transparent;border:0}.ritualGrid{grid-template-columns:repeat(2,1fr)}.philosophy{grid-template-columns:1fr 1fr}.values{grid-column:1/-1;display:grid;grid-template-columns:repeat(3,1fr)}.practitioners{grid-template-columns:repeat(2,1fr)}.practitioners>div{grid-column:1/-1}.reviews{grid-template-columns:repeat(3,1fr)}.reviews>div{grid-column:1/-1}.membership{grid-template-columns:1fr 1fr}.membership>img{min-height:300px}.shop{grid-template-columns:repeat(3,1fr)}.shop>div{grid-column:1/-1}.auraFooter{grid-template-columns:repeat(3,1fr)}}
 @media(max-width:700px){.auraNav{padding:0 16px}.auraOutline{display:none}.auraMark b{font-size:1.15rem}.auraHero{grid-template-columns:1fr}.heroWords{padding:62px 24px}.heroWords h1{font-size:3.7rem}.auraHero>img{min-height:420px}.ritualSection{padding-inline:16px}.ritualGrid{grid-template-columns:1fr}.ritualGrid article{grid-template-columns:42% 58%}.philosophy,.journey{grid-template-columns:1fr}.philosophyCopy{padding:50px 24px}.philosophyCopy h2{font-size:3rem}.values{grid-template-columns:1fr;padding:32px 24px}.journey>div{padding:38px 20px}.journeySteps{grid-template-columns:1fr 1fr}.journeySteps::before{display:none}.journey>img{min-height:330px}.practitioners{grid-template-columns:1fr 1fr;padding:28px 16px}.practitioners img{height:160px}.reviews{grid-template-columns:1fr;padding-inline:20px}.reviews blockquote p{min-height:0}.membership{grid-template-columns:1fr}.membership>div{padding:38px 24px}.membership>article{margin:10px 18px}.shop{grid-template-columns:1fr 1fr;padding-inline:16px}.shop>div{grid-column:1/-1}.auraFooter{grid-template-columns:1fr 1fr;padding:38px 22px}.auraFooter>div:first-child,.auraFooter>div:last-child{grid-column:1/-1}.auraModal{padding:38px 20px}.auraModal form{grid-template-columns:1fr}.auraModal .full{grid-column:1}.auraModal h2{font-size:2.8rem}}
 @media(max-width:1050px){.auraMobile a.active{background:#ffffff12;color:#d8a36f}.ritualGrid article:nth-child(even){border-right:0}.ritualGrid article:last-child{border-top:1px solid var(--line)}.ritualHeading{align-items:start;flex-direction:column}}
 .reviews blockquote{opacity:.58;transition:opacity .3s ease,transform .3s ease}.reviews blockquote.active{opacity:1;transform:translateY(-3px)}
 @media(max-width:700px){.auraPage{padding-bottom:68px}.heroImage{min-height:420px}.heroTrust{gap:10px}.heroTrust span{font-size:.6rem}.heroActions{align-items:flex-start;flex-direction:column}.ritualSection{padding-top:48px}.ritualHeading h2{font-size:2.8rem}.ritualGrid article{display:grid;grid-template-columns:42% 58%;border-right:0;border-bottom:1px solid var(--line)}.ritualPhoto{height:100%;min-height:270px}.ritualGrid article>div:last-child{padding:20px 16px}.ritualGrid p{min-height:0}.ritualMeta{flex-direction:column}.ritualActions{grid-template-columns:1fr}.ritualHelp{grid-template-columns:1fr;gap:8px;padding:24px 20px}.ritualHelp button{width:max-content;margin-top:5px}.reviews blockquote{display:none}.reviews blockquote.active{display:block;opacity:1}.firstVisit{grid-template-columns:1fr;padding:48px 22px}.firstVisit h2{font-size:3rem}.ritualDialog{padding:38px 20px}.ritualDialog article{grid-template-columns:1fr;gap:7px}.cartButton{right:18px;bottom:78px}.mobileBook{position:fixed;left:12px;right:12px;bottom:10px;z-index:70;display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border:1px solid #c18a5e;background:#12372a;color:white;box-shadow:0 15px 45px #0007;text-transform:uppercase;letter-spacing:.11em;font-size:.7rem;font-weight:800}}
 @media(max-width:1100px){.auraHero{grid-template-columns:49% 51%}.heroWords{padding-left:32px;padding-right:42px}.heroWords h1{font-size:4.5rem}.heroImage blockquote{left:12px;bottom:40px}.heroSeal{right:20px;bottom:36px;width:96px;height:96px}.heroTrust{grid-template-columns:1fr 1fr}.heroTrust span:last-child{display:none}}
 @media(max-width:700px){.auraHero{display:block;min-height:0}.heroWords{padding:58px 24px 48px}.heroAvailability{margin-bottom:24px}.heroWords h1{font-size:clamp(3.8rem,16vw,5rem)}.heroIntro{font-size:1rem}.heroActions{width:100%}.heroActions .copperBtn,.heroActions>a{width:100%}.heroTrust{grid-template-columns:repeat(3,1fr);margin-top:32px}.heroTrust span:last-child{display:grid}.heroTrust b{font-size:1.15rem}.heroTrust i{display:none}.heroImage{height:500px;min-height:0;padding:0}.heroFrame{border-radius:170px 0 0 0}.heroLocation{right:14px;top:20px}.heroImage blockquote{left:16px;right:16px;bottom:18px;width:auto;padding:20px 22px}.heroImage blockquote p{font-size:1.05rem}.heroSeal,.heroScroll{display:none}}
 /* Readable luxury typography: supporting copy stays quiet without becoming tiny. */
 .auraPage{font-size:16px}.overline{font-size:.76rem;line-height:1.45}.auraMark small{font-size:.6rem}.auraNav nav a{font-size:.72rem}.auraMobile a,.auraMobile button{font-size:.78rem}.auraOutline,.copperBtn{font-size:.74rem}.heroWords a{font-size:.74rem}.heroTrust span{font-size:.72rem}.heroTrust small{font-size:.7rem}.heroImage>span{font-size:.68rem}.ritualGrid p{font-size:.86rem;line-height:1.65}.ritualMeta{font-size:.76rem}.ritualGrid button,.ritualHelp button{font-size:.7rem}.ritualHelp p{font-size:.86rem}.values p{font-size:.86rem}.journeySteps p{font-size:.8rem;line-height:1.6}.practitioners>div>p:not(.overline){font-size:.86rem}.practitioners p{font-size:.78rem}.practitioners article button{font-size:.67rem}.reviews a,.reviewControls span{font-size:.72rem}.reviews blockquote p{font-size:.94rem}.reviews footer{font-size:.72rem}.membership>article p,.membership li{font-size:.8rem}.membership button,.shop button{font-size:.68rem}.shop h3,.shop p{font-size:.78rem}.auraFooter h3{font-size:.72rem}.auraFooter p,.auraFooter a{font-size:.78rem}.auraFooter form label{font-size:.72rem}.auraFooter form button{font-size:.66rem}.auraModal label{font-size:.76rem}.firstVisit article p{font-size:.88rem}.cartItems>div{font-size:.86rem}.mobileBook,.cartButton{font-size:.72rem}
 @media(prefers-reduced-motion:no-preference){@supports(animation-timeline:view()){.auraPage>section:not(.auraHero){animation:auraReveal both;animation-timeline:view();animation-range:entry 10% cover 25%}@keyframes auraReveal{from{opacity:.35;transform:translateY(18px)}to{opacity:1;transform:translateY(0)}}}}
 @media(prefers-reduced-motion:reduce){.auraPage *,.auraPage *::before,.auraPage *::after{scroll-behavior:auto!important;transition-duration:.01ms!important}}
`;
