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

const navItems = [
  "Home",
  "About",
  "Services",
  "Stylists",
  "Journal",
  "Contact",
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
      <span>
        Silk <i>&</i> Style
      </span>
      <small>Hair</small>
    </a>
  );
}

export default function SilkStyleHair() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(false);
  const [selectedService, setSelectedService] = useState("Dimensional Color");
  const modalRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const updateActive = () => {
      const sections = navItems
        .map((item) => document.getElementById(item.toLowerCase()))
        .filter((item): item is HTMLElement => Boolean(item))
        .sort((a, b) => a.offsetTop - b.offsetTop);
      const passed = sections.filter(
        (section) => section.offsetTop <= window.scrollY + 130,
      );
      setActiveSection(passed[passed.length - 1]?.id ?? "home");
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

  const openBooking = (service = "Dimensional Color") => {
    setSelectedService(service);
    setBookingSuccess(false);
    setBookingOpen(true);
  };

  return (
    <main className="silkPage">
      <style>{css}</style>

      <header className="silkNav">
        <Logo />
        <nav className="desktopNav" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={activeSection === item.toLowerCase() ? "active" : ""}
              aria-current={
                activeSection === item.toLowerCase() ? "page" : undefined
              }
            >
              {item}
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
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className={activeSection === item.toLowerCase() ? "active" : ""}
              >
                {item}
              </a>
            ))}
          </nav>
        )}
      </header>

      <section id="home" className="silkHero">
        <div className="heroCopy">
          <p className="kicker">Confidence. Craft. Culture.</p>
          <h1>
            Elevated Hair.
            <br />
            <em>Effortless You.</em>
          </h1>
          <span className="accentLine" />
          <p className="heroLead">
            Silk & Style Hair is where artistry meets intention. From
            dimensional color to signature blowouts, we create looks that feel
            as good as they look.
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
            <span>from 320+ salon guests</span>
          </div>
          <a href="#services" className="scrollCue">
            <span>↓</span> Scroll
            <br />
            Down
          </a>
        </div>
        <div className="heroVisual">
          <img
            src={heroImage}
            alt="Woman with dimensional brunette hair"
            fetchPriority="high"
            decoding="async"
          />
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
          <p className="kicker">The Silk & Style Experience</p>
          <h2>
            Modern beauty.
            <br />
            <em>Meaningful results.</em>
          </h2>
          <p>
            We believe great hair is personal. Our approach blends technical
            precision with creative vision to enhance your natural beauty. Every
            appointment is elevated, intentional, and designed around you.
          </p>
          <a href="#stylists" className="lineButton">
            Our Story
          </a>
        </div>
      </section>

      <section
        className="transformations sectionPad"
        aria-labelledby="transform-title"
      >
        <div className="sectionIntro">
          <p className="kicker">Transformations</p>
          <h2 id="transform-title">
            Real results.
            <br />
            <em>Beautifully you.</em>
          </h2>
          <a href="#journal" className="textLink">
            View More Looks <span>→</span>
          </a>
        </div>
        <article className="beforeAfter">
          <figure>
            <img
              src={galleryOne}
              alt="Hair before transformation"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Before</figcaption>
          </figure>
          <span>→</span>
          <figure>
            <img
              src={galleryTwo}
              alt="Hair after transformation"
              loading="lazy"
              decoding="async"
            />
            <figcaption>After</figcaption>
          </figure>
        </article>
        <article className="beforeAfter">
          <figure>
            <img
              src={galleryThree}
              alt="Hair before restyling"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Before</figcaption>
          </figure>
          <span>→</span>
          <figure>
            <img
              src={galleryFour}
              alt="Hair after restyling"
              loading="lazy"
              decoding="async"
            />
            <figcaption>After</figcaption>
          </figure>
        </article>
      </section>

      <section id="stylists" className="stylists sectionPad">
        <div className="sectionIntro">
          <p className="kicker">Our Stylists</p>
          <h2>
            Artistry in
            <br />
            <em>every detail.</em>
          </h2>
          <a href="#contact" className="textLink">
            Meet The Team <span>→</span>
          </a>
        </div>
        <article className="stylist">
          <img
            src={jessicaImage}
            alt="Jessica Lane, senior stylist"
            loading="lazy"
            decoding="async"
          />
          <div>
            <h3>Jessica Lane</h3>
            <span className="miniLine" />
            <p>
              Senior Stylist
              <br />
              Color Specialist
            </p>
            <small>Next opening: Thursday</small>
            <button
              type="button"
              onClick={() => openBooking("Color with Jessica")}
            >
              Book Jessica →
            </button>
          </div>
        </article>
        <article className="stylist">
          <img
            src={marcusImage}
            alt="Marcus Vale, creative director"
            loading="lazy"
            decoding="async"
          />
          <div>
            <h3>Marcus Vale</h3>
            <span className="miniLine" />
            <p>
              Creative Director
              <br />
              Cut & Style Expert
            </p>
            <small>Next opening: Saturday</small>
            <button
              type="button"
              onClick={() => openBooking("Cut with Marcus")}
            >
              Book Marcus →
            </button>
          </div>
        </article>
      </section>

      <section className="products sectionPad">
        <div className="sectionIntro">
          <p className="kicker">Curated For You</p>
          <h2>
            Style. Care.
            <br />
            <em>Results.</em>
          </h2>
        </div>
        <article>
          <img
            src={glossImage}
            alt="Silk and Style Gloss Elixir"
            loading="lazy"
            decoding="async"
          />
          <div>
            <h3>
              Silk & Style
              <br />
              Gloss Elixir
            </h3>
            <p>Hydrates, smooths and adds luminous shine.</p>
            <a href="#contact" className="textLink">
              Learn More <span>→</span>
            </a>
          </div>
        </article>
        <article>
          <img
            src={repairImage}
            alt="Silk and Style Repair Masque"
            loading="lazy"
            decoding="async"
          />
          <div>
            <h3>
              Silk & Style
              <br />
              Repair Masque
            </h3>
            <p>Deeply nourishes and strengthens from within.</p>
            <a href="#contact" className="textLink">
              Learn More <span>→</span>
            </a>
          </div>
        </article>
      </section>

      <section
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
          {["About", "Services", "Stylists", "Journal", "Contact"].map(
            (item) => (
              <a key={item} href={`#${item.toLowerCase()}`}>
                {item}
              </a>
            ),
          )}
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
                <p className="kicker">Request Received</p>
                <h2 id="silk-booking-title">We’ll be in touch.</h2>
                <p>
                  Thank you. Our concierge will contact you within one business
                  day to confirm availability.
                </p>
                <button
                  type="button"
                  className="darkButton"
                  onClick={() => setBookingOpen(false)}
                >
                  Close
                </button>
              </div>
            ) : (
              <>
                <p className="kicker">Reserve Your Time</p>
                <h2 id="silk-booking-title">Book an Appointment</h2>
                <p>
                  Tell us what you’re looking for and we’ll match you with the
                  right stylist.
                </p>
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setBookingSuccess(true);
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
                    Service
                    <select
                      value={selectedService}
                      onChange={(event) =>
                        setSelectedService(event.target.value)
                      }
                    >
                      <option>Consultation</option>
                      <option>Dimensional Color</option>
                      <option>Color</option>
                      <option>Blowouts</option>
                      <option>Cuts</option>
                      <option>Treatments</option>
                      <option>Color with Jessica</option>
                      <option>Cut with Marcus</option>
                    </select>
                  </label>
                  <label>
                    Preferred date
                    <input type="date" required />
                  </label>
                  <label className="full">
                    Anything we should know?
                    <textarea
                      rows={3}
                      placeholder="Hair history, goals, or preferred stylist"
                    />
                  </label>
                  <button className="darkButton full" type="submit">
                    Request Appointment <span>→</span>
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
  :root{--silk:#151515;--paper:#f8f6f3;--warm:#ede9e5;--muted:#66615d;--gold:#b38c55;--line:#d8d3ce}
  *{box-sizing:border-box}.silkPage{min-height:100vh;background:var(--paper);color:var(--silk);font-family:"Avenir Next",Avenir,"Segoe UI",sans-serif;overflow-x:clip}.silkPage section[id]{scroll-margin-top:80px}.silkPage button,.silkPage input,.silkPage select,.silkPage textarea{font:inherit}.silkPage a:focus-visible,.silkPage button:focus-visible,.silkPage input:focus-visible,.silkPage select:focus-visible,.silkPage textarea:focus-visible{outline:3px solid rgba(179,140,85,.55);outline-offset:3px}
  .silkLogo{display:grid;color:var(--silk);text-decoration:none;line-height:1}.silkLogo span{font-family:Georgia,serif;font-size:2rem;text-transform:uppercase;letter-spacing:.12em}.silkLogo i{color:var(--gold);font-weight:400}.silkLogo small{text-align:center;margin-top:7px;text-transform:uppercase;letter-spacing:.45em;font-size:.55rem}
  .silkPage section:not(.silkHero):not(.silkModal){content-visibility:auto;contain-intrinsic-size:auto 500px}
  .silkNav{position:sticky;top:0;z-index:50;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:32px;min-height:92px;padding:0 max(32px,calc((100vw - 1320px)/2));background:rgba(249,247,244,.96);border-bottom:1px solid rgba(216,211,206,.55);backdrop-filter:blur(16px)}.desktopNav{display:flex;justify-content:center;gap:42px}.desktopNav a{position:relative;padding:12px 0;color:var(--silk);font-size:.72rem;font-weight:700;letter-spacing:.1em;text-decoration:none;text-transform:uppercase}.desktopNav a::after{content:"";position:absolute;inset:auto 0 4px;height:1px;background:var(--gold);transform:scaleX(0);transition:.25s}.desktopNav a.active::after,.desktopNav a:hover::after{transform:scaleX(1)}
  .darkButton,.outlineDark,.lineButton{display:inline-flex;align-items:center;justify-content:center;gap:28px;min-height:52px;padding:0 28px;border:1px solid var(--silk);background:var(--silk);color:white;text-transform:uppercase;letter-spacing:.1em;font-size:.72rem;font-weight:700;text-decoration:none;cursor:pointer;transition:.25s}.darkButton:hover{background:#333;transform:translateY(-2px)}.lineButton{background:transparent;color:var(--silk)}.lineButton:hover{background:white}.silkMenu,.mobileNav{display:none}
  .silkHero{display:grid;grid-template-columns:44% 56%;min-height:680px}.heroCopy{display:flex;flex-direction:column;justify-content:center;padding:70px max(42px,calc((100vw - 1320px)/2)) 44px}.kicker{margin:0 0 20px;text-transform:uppercase;letter-spacing:.17em;font-size:.66rem;font-weight:800}.silkPage h1,.silkPage h2{margin:0;font-family:Georgia,"Times New Roman",serif;font-weight:400;line-height:.98;letter-spacing:-.045em}.silkPage h1{font-size:clamp(4rem,6.5vw,6.4rem)}.silkPage h2{font-size:clamp(2.5rem,4.2vw,4.4rem)}.silkPage em{font-weight:400;color:#4d4a47}.heroLead{max-width:450px;margin:25px 0;color:var(--muted);font-size:1rem;line-height:1.8}.accentLine{width:76px;height:2px;margin-top:25px;background:var(--gold)}.heroActions{display:flex;flex-wrap:wrap;gap:18px}.heroProof{display:flex;align-items:center;gap:9px;margin-top:22px;color:var(--muted);font-size:.78rem}.proofStars{color:var(--gold);letter-spacing:.08em}.heroProof strong{color:var(--silk)}.scrollCue{margin-top:28px;color:#898581;text-decoration:none;text-transform:uppercase;letter-spacing:.15em;font-size:.64rem;line-height:1.6}.scrollCue span{display:inline-block;margin-right:12px;font-size:1.4rem}.heroVisual{overflow:hidden;border-radius:55% 0 0 0}.heroVisual img{width:100%;height:100%;object-fit:cover;object-position:center 18%}
  .serviceStrip{display:grid;grid-template-columns:repeat(4,1fr);background:#f1efec;border-block:1px solid var(--line)}.serviceIntro{grid-column:1/-1;display:flex;align-items:end;justify-content:space-between;gap:40px;padding:58px max(32px,calc((100vw - 1320px)/2)) 42px;background:#faf9f7}.serviceIntro h2{font-size:clamp(2.6rem,4.2vw,4.3rem);text-transform:none;letter-spacing:-.045em}.serviceIntro>p{max-width:470px;margin:0;color:var(--muted);font-size:1rem;line-height:1.75}.serviceStrip article{display:flex;flex-direction:column;padding:32px clamp(22px,3vw,40px);border-right:1px solid var(--line);transition:background .3s ease,transform .3s ease}.serviceStrip article:nth-of-type(4){border-right:0}.serviceStrip article:hover{background:#faf9f7;transform:translateY(-4px)}.serviceTop{display:flex;align-items:start;justify-content:space-between;margin-bottom:22px}.serviceNumber{color:#a19b95;font-family:Georgia,serif;font-size:1rem}.serviceIcon{display:grid;width:66px;height:66px;place-items:center;border:1px solid #999;border-radius:50%;color:#777}.serviceIcon svg{width:35px;height:35px}.serviceStrip article h2{font-size:1.6rem;text-transform:uppercase;letter-spacing:.05em}.serviceStrip article>p{max-width:260px;margin:12px 0 0;color:var(--muted);line-height:1.6}.serviceStrip .serviceIdeal{min-height:48px;color:#2e2c2a;font-size:.78rem;font-weight:700}.serviceStrip ul{min-height:88px;margin:16px 0 0;padding:14px 0 0;list-style:none;border-top:1px solid var(--line);color:var(--muted);font-size:.76rem;line-height:1.8}.serviceStrip li::before{content:"—";margin-right:8px;color:var(--gold)}.serviceMeta{display:flex;gap:12px;margin-top:auto;padding-top:18px;color:#4b4743;font-size:.72rem;font-weight:800}.serviceMeta span+span{padding-left:12px;border-left:1px solid #c4bfba}.serviceStrip article>button,.stylist button{display:flex;justify-content:space-between;margin-top:18px;padding:10px 0;border:0;border-block:1px solid var(--silk);background:transparent;color:var(--silk);text-transform:uppercase;letter-spacing:.1em;font-size:.65rem;font-weight:800;cursor:pointer}.servicePromise{grid-column:1/-1;display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:28px;padding:24px max(32px,calc((100vw - 1320px)/2));background:#181818;color:white}.servicePromise>span{color:#cab28d;font-family:Georgia,serif;font-size:1.3rem}.servicePromise p{max-width:none;margin:0;color:#c7c4c1;font-size:.82rem}.servicePromise button{border:0;border-bottom:1px solid #aaa;background:transparent;color:white;text-transform:uppercase;letter-spacing:.1em;font-size:.68rem;font-weight:800;cursor:pointer}
  .storySplit{display:grid;grid-template-columns:1fr 1fr;min-height:500px}.storySplit>img{width:100%;height:100%;object-fit:cover}.storySplit>div{display:flex;flex-direction:column;align-items:flex-start;justify-content:center;padding:70px max(48px,8vw)}.storySplit p:not(.kicker){max-width:510px;color:var(--muted);line-height:1.75;margin:28px 0}
  .sectionPad{padding:58px max(32px,calc((100vw - 1320px)/2))}.sectionIntro{align-self:center}.sectionIntro h2{font-size:3.2rem}.textLink{display:inline-flex;gap:26px;margin-top:28px;padding-bottom:6px;border-bottom:1px solid;color:var(--silk);text-decoration:none;text-transform:uppercase;font-size:.7rem;font-weight:800;letter-spacing:.12em}
  .transformations{display:grid;grid-template-columns:300px 1fr 1fr;gap:26px;background:#faf9f7}.beforeAfter{position:relative;display:grid;grid-template-columns:1fr 1fr;height:300px;overflow:hidden}.beforeAfter figure{position:relative;margin:0;overflow:hidden}.beforeAfter img{width:100%;height:100%;object-fit:cover;object-position:center 20%}.beforeAfter figcaption{position:absolute;left:10px;bottom:10px;padding:6px 9px;background:#fffddd;color:#222;text-transform:uppercase;letter-spacing:.12em;font-size:.58rem;font-weight:800}.beforeAfter>span{position:absolute;left:50%;top:50%;z-index:2;display:grid;width:44px;height:44px;place-items:center;border-radius:50%;background:white;transform:translate(-50%,-50%);box-shadow:0 5px 20px #0002}
  .stylists{display:grid;grid-template-columns:300px 1fr 1fr;gap:42px;background:#f0eeeb}.stylist{display:grid;grid-template-columns:1fr .9fr;gap:26px;align-items:center}.stylist img{width:100%;height:300px;object-fit:cover;object-position:center 18%}.stylist h3,.products h3,.journal h3,.silkFooter h3{margin:0;text-transform:uppercase;letter-spacing:.1em;font-size:.82rem}.miniLine{display:block;width:34px;height:1px;margin:14px 0;background:var(--gold)}.stylist p,.products p,.silkFooter p{color:var(--muted);line-height:1.7}.stylist small{display:block;color:#777;font-size:.7rem}.social{font-weight:800;color:var(--silk)!important}
  .products{display:grid;grid-template-columns:300px 1fr 1fr;gap:42px;background:#faf9f7}.products>article{display:grid;grid-template-columns:170px 1fr;gap:30px;align-items:center}.products img{width:170px;height:170px;object-fit:cover}.products p{font-size:.9rem}
  .testimonials{display:grid;grid-template-columns:300px repeat(3,1fr);gap:18px;background:#efedea}.testimonials blockquote{margin:0;padding:26px;background:#f9f8f6;border:1px solid var(--line)}.testimonials blockquote>span{font-family:Georgia,serif;font-size:3rem;color:var(--gold);line-height:.6}.testimonials blockquote p{min-height:110px;color:var(--muted);line-height:1.65}.testimonials footer{display:flex;justify-content:space-between;gap:12px;font-size:.76rem}.testimonials footer i{color:var(--gold);font-style:normal;letter-spacing:.05em}
  .journal{display:grid;grid-template-columns:300px repeat(3,1fr);gap:20px;background:#faf9f7}.journal article{background:white;border:1px solid var(--line)}.journal article img{width:100%;height:190px;object-fit:cover;object-position:center 20%}.journal article div{padding:20px}.journal article small{display:block;margin-bottom:10px;color:var(--gold);text-transform:uppercase;letter-spacing:.13em;font-size:.62rem;font-weight:800}.journal article h3{text-transform:none;letter-spacing:0;font-family:Georgia,serif;font-size:1.35rem;font-weight:400;line-height:1.25}
  .blackCta{display:flex;align-items:center;justify-content:space-between;gap:30px;padding:36px max(42px,calc((100vw - 1180px)/2));background:#171717;color:white}.blackCta h2{font-size:2.6rem}.blackCta em{color:#d4d0cc}.blackCta p{margin:8px 0 0;color:#bbb}.outlineDark{min-width:340px;border-color:#aaa;background:transparent}.outlineDark:hover{background:white;color:#111}
  .silkFooter{display:grid;grid-template-columns:1.3fr .6fr 1fr .9fr 1fr;gap:42px;padding:48px max(32px,calc((100vw - 1320px)/2))}.silkFooter>div:first-child{display:flex;flex-direction:column;justify-content:space-between}.silkFooter small{color:#777;font-size:.6rem;text-transform:uppercase}.silkFooter a{display:block;margin-top:5px;color:var(--muted);font-size:.78rem;text-decoration:none}.silkFooter p{font-size:.78rem;margin:10px 0}.footerSocial{font-size:1.4rem!important;color:#222!important}.legal{margin-top:42px!important;font-size:.6rem!important;text-transform:uppercase}
  .silkModalBack{position:fixed;inset:0;z-index:100;display:grid;place-items:center;padding:22px;background:#111b;backdrop-filter:blur(10px)}.silkModal{position:relative;width:min(700px,100%);max-height:calc(100vh - 44px);overflow:auto;padding:44px;background:var(--paper)}.silkModal h2{font-size:3.5rem}.silkModal>p:not(.kicker){color:var(--muted)}.modalClose{position:absolute;right:16px;top:16px;width:42px;height:42px;border:1px solid var(--line);border-radius:50%;background:white;font-size:1.4rem;cursor:pointer}.silkModal form{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:28px}.silkModal label{display:grid;gap:7px;font-size:.78rem;font-weight:700;text-transform:uppercase;letter-spacing:.07em}.silkModal input,.silkModal select,.silkModal textarea{width:100%;padding:13px;border:1px solid var(--line);background:white}.silkModal .full{grid-column:1/-1}
  .bookingSuccess{display:grid;justify-items:center;min-height:410px;place-content:center;text-align:center}.bookingSuccess>span{display:grid;width:70px;height:70px;margin-bottom:24px;place-items:center;border:1px solid var(--gold);border-radius:50%;color:var(--gold);font-size:2rem}.bookingSuccess p:not(.kicker){max-width:470px;color:var(--muted);line-height:1.7}.bookingSuccess .darkButton{margin-top:18px}
  @media(max-width:1050px){.desktopNav{gap:18px}.silkHero{grid-template-columns:1fr 1fr}.serviceStrip{grid-template-columns:repeat(2,1fr)}.serviceStrip article:nth-of-type(2){border-right:0}.serviceStrip article:nth-of-type(4){border-right:0}.serviceIntro{align-items:start;flex-direction:column}.transformations,.stylists,.products,.testimonials,.journal{grid-template-columns:1fr 1fr}.sectionIntro{grid-column:1/-1}.silkFooter{grid-template-columns:repeat(3,1fr)}}
  @media(max-width:760px){.silkNav{min-height:76px;padding:0 18px;grid-template-columns:1fr auto}.silkLogo span{font-size:1.45rem}.desktopNav,.navBook{display:none}.silkMenu{display:grid;width:44px;height:44px;place-items:center;border:1px solid var(--line);border-radius:50%;background:white;font-size:1.25rem}.mobileNav{position:absolute;left:12px;right:12px;top:calc(100% + 7px);display:grid;grid-template-columns:1fr 1fr;padding:12px;background:#faf9f7;border:1px solid var(--line);box-shadow:0 20px 50px #0002}.mobileNav a{padding:13px;color:var(--silk);text-decoration:none;text-transform:uppercase;font-size:.74rem;font-weight:700}.mobileNav a.active{background:var(--warm)}.silkHero{grid-template-columns:1fr}.heroCopy{padding:60px 24px}.silkPage h1{font-size:clamp(3.5rem,16vw,5rem)}.heroVisual{min-height:520px;border-radius:45% 0 0}.serviceStrip{grid-template-columns:1fr}.serviceIntro{padding:44px 22px 30px}.serviceStrip article{border-right:0;border-bottom:1px solid var(--line)}.serviceStrip .serviceIdeal,.serviceStrip ul{min-height:0}.servicePromise{grid-template-columns:1fr;gap:10px;padding:25px 22px}.servicePromise button{width:max-content;margin-top:6px}.storySplit{grid-template-columns:1fr}.storySplit>img{min-height:350px}.storySplit>div{padding:55px 24px}.sectionPad{padding:50px 20px}.transformations,.stylists,.products,.testimonials,.journal{grid-template-columns:1fr}.sectionIntro{grid-column:auto}.beforeAfter{height:360px}.stylist{grid-template-columns:1fr 1fr}.products>article{grid-template-columns:130px 1fr}.products img{width:130px;height:150px}.testimonials blockquote p{min-height:0}.journal article{display:grid;grid-template-columns:130px 1fr}.journal article img{height:100%;min-height:180px}.blackCta{align-items:flex-start;flex-direction:column;padding:36px 24px}.outlineDark{min-width:0;width:100%}.silkFooter{grid-template-columns:1fr 1fr;padding:42px 22px}.silkFooter>div:first-child{grid-column:1/-1;gap:30px}.silkModal{padding:38px 20px}.silkModal form{grid-template-columns:1fr}.silkModal .full{grid-column:1}.silkModal h2{font-size:2.7rem}}
  @media(prefers-reduced-motion:reduce){.silkPage *,.silkPage *::before,.silkPage *::after{scroll-behavior:auto!important;transition-duration:.01ms!important}}
`;
