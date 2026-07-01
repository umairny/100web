import React, { useEffect, useState } from "react";
import heroImage from "../../assets/images/beauty/bloombridal/hero.png";
import galleryOne from "../../assets/images/beauty/bloombridal/gallary01.png";
import galleryTwo from "../../assets/images/beauty/bloombridal/gallary02.png";
import galleryThree from "../../assets/images/beauty/bloombridal/gallary03.png";
import galleryFour from "../../assets/images/beauty/bloombridal/gallary04.png";
import galleryFive from "../../assets/images/beauty/bloombridal/gallary05.png";
import gallerySix from "../../assets/images/beauty/bloombridal/gallary06.png";
import interiorImage from "../../assets/images/beauty/bloombridal/interior.png";
import passionImage from "../../assets/images/beauty/bloombridal/passion.png";

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

const navItems = ["Home", "About", "Services", "Gallery", "Packages", "Journey", "Blog", "Contact"];

type IconName = "hair" | "brush" | "mirror" | "ring" | "calendar" | "sparkle";

const services: Array<{ icon: IconName; title: string; text: string }> = [
  { icon: "hair", title: "Bridal Hair", text: "Elegant styles that last all day" },
  { icon: "brush", title: "Bridal Makeup", text: "Soft glam looks that enhance you" },
  { icon: "mirror", title: "Trials", text: "Find your perfect look with confidence" },
  { icon: "ring", title: "Wedding Day Styling", text: "We’re with you every step of the way" },
];

const journey = [
  { no: "01", title: "Inquiry", text: "Tell us about your day and your vision." },
  { no: "02", title: "Trial", text: "We create your perfect look with a trial session." },
  { no: "03", title: "Wedding Morning", text: "Relax and enjoy while we take care of you." },
  { no: "04", title: "Final Touch-Up", text: "We stay with you until you walk down the aisle." },
];

const artists = [
  { image: IMG.artist1, name: "Jessica Lee", role: "Makeup Artist" },
  { image: IMG.artist2, name: "Sarah James", role: "Hair Specialist" },
  { image: IMG.artist3, name: "Megha Patel", role: "Styling Expert" },
];

const reviews = [
  {
    text: "Bloom Bridal Studio made me feel like the most beautiful version of myself. I couldn’t have asked for a better team on my big day!",
    name: "Anisha R.",
  },
  {
    text: "The trial was so helpful and the results on my wedding day were absolutely flawless. Highly recommended!",
    name: "Karishma D.",
  },
  {
    text: "They are pure magic! Calm, professional, and talented. Thank you for making me feel so confident.",
    name: "Meghna S.",
  },
];

const packages = [
  {
    title: "The Essential",
    tag: "For the effortlessly beautiful bride.",
    price: "$950",
    items: ["Bridal Hair", "Bridal Makeup", "Touch-up Kit"],
  },
  {
    title: "The Signature",
    tag: "Our most loved bridal experience.",
    price: "$1,450",
    featured: true,
    items: ["Bridal Hair & Makeup", "Trial Session", "Touch-up Kit", "Veil / Hair Accessory"],
  },
  {
    title: "The Luxe",
    tag: "The ultimate bridal indulgence.",
    price: "$2,250",
    items: ["Bridal Hair & Makeup", "Trial Session", "Touch-up Kit", "2nd Look or Hair Change", "Premium Accessory"],
  },
];

const faqs = [
  ["How far ahead should I book?", "Most brides reserve 9–14 months ahead. Popular spring and autumn weekends can fill sooner."],
  ["Is a bridal trial included?", "Trials are included in Signature and Luxe packages and can be added to Essential."],
  ["Do you travel to wedding venues?", "Yes. We serve Beverly Hills, Los Angeles, Malibu, Orange County, and destination weddings."],
  ["Can you style my bridal party?", "Absolutely. Hair and makeup can be added for bridesmaids, mothers, and other family members."],
];

function Icon({ name }: { name: IconName }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  return <svg viewBox="0 0 32 32" aria-hidden="true">
    {name === "hair" && <><path {...common} d="M7 27c1-8 2-17 10-21 3-1 6 0 8 2-7 1-8 7-7 11 1 5-2 8-6 8"/><path {...common} d="M11 26c-2-6 0-12 7-16M8 16c3 1 6 0 8-3"/></>}
    {name === "brush" && <><path {...common} d="m9 26 8-15 5 3-9 14Z"/><path {...common} d="m17 11 2-7 6 3-3 7M11 23l4 2"/></>}
    {name === "mirror" && <><ellipse {...common} cx="16" cy="12" rx="7" ry="9"/><path {...common} d="M16 21v7M12 28h8M12 12c0-3 2-5 5-6"/></>}
    {name === "ring" && <><circle {...common} cx="16" cy="19" r="8"/><path {...common} d="m11 10 5-6 5 6-5 3Z"/><path {...common} d="m13 6 3 7 3-7"/></>}
    {name === "calendar" && <><rect {...common} x="5" y="7" width="22" height="20" rx="3"/><path {...common} d="M10 4v6M22 4v6M5 13h22M10 18h4M18 18h4M10 22h4"/></>}
    {name === "sparkle" && <><path {...common} d="M16 3c1 7 4 11 11 12-7 1-10 5-11 13-1-8-4-12-11-13 7-1 10-5 11-12Z"/><path {...common} d="M25 3v6M22 6h6"/></>}
  </svg>;
}

function Button({ children, outline = false, href, onClick }: { children: React.ReactNode; outline?: boolean; href?: string; onClick?: () => void }) {
  const className = outline ? "btn btnOutline" : "btn";
  if (onClick) return <button type="button" onClick={onClick} className={className}>{children}<span>→</span></button>;
  return <a href={href ?? "#contact"} className={className}>{children}<span>→</span></a>;
}

export default function BloomBridalStudio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState("The Signature");
  const [reviewIndex, setReviewIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const updateActive = () => {
      const marker = window.scrollY + 140;
      const sections = navItems
        .map((item) => document.getElementById(item.toLowerCase()))
        .filter((section): section is HTMLElement => Boolean(section))
        .sort((a, b) => a.offsetTop - b.offsetTop);
      const passed = sections.filter((section) => section.offsetTop <= marker);
      setActiveSection(passed[passed.length - 1]?.id ?? "home");
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setBookingOpen(false);
      }
    };
    document.body.style.overflow = bookingOpen || menuOpen ? "hidden" : "";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [bookingOpen, menuOpen]);

  const openBooking = (packageName = "The Signature") => {
    setSelectedPackage(packageName);
    setBookingOpen(true);
  };

  return (
    <main className="bloomPage">
      <style>{css}</style>

      <header className="navWrap">
        <a className="logo" href="#home" aria-label="Bloom Bridal Studio home">
          <span>Bloom</span>
          <small>Bridal Studio</small>
        </a>

        <nav className="navLinks" aria-label="Main navigation">
          {navItems.map((item) => (
            <a className={activeSection === item.toLowerCase() ? "active" : ""} aria-current={activeSection === item.toLowerCase() ? "page" : undefined} key={item} href={`#${item.toLowerCase()}`}>{item}</a>
          ))}
        </nav>

        <button className="bookTop" type="button" onClick={() => openBooking()}>Book Your Date <Icon name="calendar" /></button>
        <button className="menuButton" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label="Toggle navigation">{menuOpen ? "×" : "☰"}</button>
        {menuOpen && (
          <nav className="mobileNav" aria-label="Mobile navigation">
            {navItems.map((item) => <a className={activeSection === item.toLowerCase() ? "active" : ""} onClick={() => setMenuOpen(false)} key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
          </nav>
        )}
      </header>

      <section id="home" className="hero sectionShell">
        <div className="heroCopy">
          <p className="eyebrow">Luxury Bridal Beauty</p>
          <h1>Where You <em>Bloom</em> for Your Big Day</h1>
          <div className="goldLine" />
          <p className="lead">Luxury bridal hair & makeup for the modern bride. Designed to make you feel confident, radiant and unforgettable.</p>
          <div className="heroActions">
            <Button onClick={() => openBooking()}>Book Your Consultation</Button>
            <Button href="#about" outline>Explore the Studio</Button>
          </div>
        </div>

        <div className="heroArt">
          <div className="award">2025<br /><span>Bridal Beauty</span></div>
          <img src={IMG.hero} alt="Bride with romantic updo and lace dress" fetchPriority="high" decoding="async" />
          <div className="floral floralRight">✿</div>
        </div>
      </section>

      <section id="services" className="serviceBar sectionShell" aria-label="Services overview">
        {services.map((service) => (
          <article className="serviceItem" key={service.title}>
            <div className="serviceIcon"><Icon name={service.icon} /></div>
            <div>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
            </div>
          </article>
        ))}
      </section>

      <section id="gallery" className="gallery sectionShell">
        <div className="sectionIntro">
          <p className="eyebrow">Featured Looks</p>
          <h2>Timeless Beauty, Modern <em>Romance</em></h2>
          <p>A glimpse into the brides we’ve had the honor of making feel their most beautiful.</p>
          <a className="textLink" href="#gallery">View Full Gallery →</a>
        </div>

        <div className="galleryGrid">
          <img className="tall" src={IMG.featured1} alt="Bridal portrait" loading="lazy" decoding="async" />
          <img src={IMG.featured2} alt="Bridal hair detail" loading="lazy" decoding="async" />
          <img src={IMG.featured3} alt="Makeup products flatlay" loading="lazy" decoding="async" />
          <img className="tall wide" src={IMG.featured4} alt="Soft glam bridal makeup" loading="lazy" decoding="async" />
          <img src={IMG.featured5} alt="Bride holding bouquet" loading="lazy" decoding="async" />
          <img src={IMG.featured6} alt="Bride with bridesmaids" loading="lazy" decoding="async" />
        </div>
      </section>

      <section id="about" className="about sectionShell">
        <img className="studioImg" src={IMG.studio} alt="Elegant bridal beauty studio interior" loading="lazy" decoding="async" />
        <div className="aboutCopy">
          <p className="eyebrow">About Bloom</p>
          <h2>Beauty with Heart, Artistry with <em>Purpose</em></h2>
          <p>Bloom Bridal Studio is a luxury beauty studio specializing in bridal hair, makeup and styling. We believe every bride deserves a calm, joyful experience and a look that feels like the most beautiful version of herself.</p>
          <p className="script">Your dream, it is meant to.</p>
          <Button href="#about" outline>Our Story</Button>
        </div>
        <div className="flowerCard">✿</div>
      </section>

      <section id="journey" className="journey sectionShell">
        <div className="sectionIntro small">
          <p className="eyebrow">Your Bridal</p>
          <h2>Beauty Journey ✨</h2>
          <p>A seamless, stress-free experience from start to finish.</p>
          <a className="textLink" href="#journey">How It Works →</a>
        </div>
        <div className="steps">
          {journey.map((step) => (
            <article className="step" key={step.no}>
              <div className="stepIcon"><Icon name={step.no === "01" ? "calendar" : step.no === "02" ? "mirror" : step.no === "03" ? "hair" : "brush"} /></div>
              <span>{step.no}</span>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="blog" className="artists sectionShell">
        <img className="artistLead" src={IMG.artistLead} alt="Lead bridal artist" loading="lazy" decoding="async" />
        <article className="artistNote">
          <p className="eyebrow">Meet The Artists</p>
          <h2>Led by <em>Passion</em>. Driven by Perfection.</h2>
          <p>Our team of experienced artists are here to make your bridal beauty journey effortless and unforgettable.</p>
          <strong>Lisa Monteiro</strong>
          <small>Lead Hair & Makeup Artist</small>
        </article>
        {artists.map((artist) => (
          <article className="artistCard" key={artist.name}>
            <img src={artist.image} alt={artist.name} loading="lazy" decoding="async" />
            <h3>{artist.name}</h3>
            <p>{artist.role}</p>
            <div className="socials"><a href="#contact" aria-label={`${artist.name} on Instagram`}>ig</a><a href="#contact" aria-label={`${artist.name} portfolio`}>◌</a></div>
          </article>
        ))}
        <aside className="greenQuote">A team that cares as much as you do.</aside>
      </section>

      <section className="reviews sectionShell">
        <div className="sectionIntro small">
          <p className="eyebrow">Love Notes</p>
          <h2>From Our Beautiful <em>Brides</em></h2>
          <a className="textLink" href="#blog">Read More Reviews →</a>
        </div>
        <div className="reviewCards">
          {reviews.map((review, index) => (
            <article className={`reviewCard ${reviewIndex === index ? "active" : ""}`} key={review.name}>
              <div className="quote">“</div>
              <div className="stars">★★★★★</div>
              <p>{review.text}</p>
              <strong>— {review.name}</strong>
            </article>
          ))}
          <div className="reviewControls" aria-label="Testimonial controls">
            <button type="button" onClick={() => setReviewIndex((reviewIndex + reviews.length - 1) % reviews.length)} aria-label="Previous testimonial">←</button>
            <span>{reviewIndex + 1} / {reviews.length}</span>
            <button type="button" onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)} aria-label="Next testimonial">→</button>
          </div>
        </div>
        <img className="sideBride" src={IMG.sideBride} alt="Bride holding bouquet" loading="lazy" decoding="async" />
      </section>

      <section id="packages" className="packages sectionShell">
        <div className="sectionIntro small">
          <p className="eyebrow">Choose Your</p>
          <h2>Perfect Package</h2>
          <p>Curated experiences to suit every bride’s needs.</p>
          <a className="textLink" href="#packages">View All Packages →</a>
        </div>

        <div className="packageCards">
          {packages.map((pack) => (
            <article className={pack.featured ? "packageCard featured" : "packageCard"} key={pack.title}>
              {pack.featured && <div className="badge">Most Loved</div>}
              <div className="packageIcon">✺</div>
              <h3>{pack.title}</h3>
              <p>{pack.tag}</p>
              <ul>{pack.items.map((item) => <li key={item}>{item}</li>)}</ul>
              <small>Starting at</small>
              <strong>{pack.price}</strong>
              <button type="button" className="choosePackage" onClick={() => openBooking(pack.title)}>Choose {pack.title.replace("The ", "")}</button>
            </article>
          ))}
          <article className="addons">
            <h3>Add-ons</h3>
            <ul>
              <li>Bridesmaid Makeup</li>
              <li>Bridesmaid Hair</li>
              <li>Mother / Family Styling</li>
              <li>Pre-Wedding Events</li>
            </ul>
            <p>Custom packages available for all bridal parties.</p>
          </article>
        </div>
      </section>

      <section className="planning sectionShell" aria-labelledby="planning-title">
        <div className="availability">
          <p className="eyebrow">Now Reserving</p>
          <h2 id="planning-title">Your Date Deserves a Calm, Beautiful Plan.</h2>
          <p>We are currently welcoming 2026–2027 celebrations throughout Los Angeles, Beverly Hills, Malibu, Orange County, and select destination locations.</p>
          <div className="availabilityMeta"><span><Icon name="calendar" /> Limited weekend dates</span><span><Icon name="sparkle" /> Travel available</span></div>
          <Button onClick={() => openBooking()}>Check Your Date</Button>
        </div>
        <div className="faqList">
          <p className="eyebrow">Questions, Answered</p>
          {faqs.map(([question, answer], index) => (
            <article className="faqItem" key={question}>
              <button type="button" onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index}>{question}<span>{openFaq === index ? "−" : "+"}</span></button>
              {openFaq === index && <p>{answer}</p>}
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="cta">
        <div>
          <h2>Let’s Create Your Dream Look</h2>
          <p>Your day is one of a kind. Your beauty should be too.</p>
        </div>
        <Button onClick={() => openBooking()} outline>Book Your Date</Button>
        <p>Or call us at <strong>+1 (555) 123-4567</strong></p>
      </section>

      <footer className="footer sectionShell">
        <div>
          <a className="logo footerLogo" href="#home"><span>Bloom</span><small>Bridal Studio</small></a>
          <p>Luxury bridal hair, makeup and styling for your most beautiful day.</p>
          <div className="socials footerSocials"><a href="#gallery" aria-label="Instagram">Instagram</a><a href="#gallery" aria-label="Pinterest">Pinterest</a></div>
        </div>

        <div>
          <h3>Quick Links</h3>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#gallery">Gallery</a>
          <a href="#packages">Packages</a>
          <a href="#contact">Contact</a>
        </div>

        <div>
          <h3>Studio</h3>
          <p>123 Blossom Lane<br />Beverly Hills, CA 90210</p>
          <p>+1 (555) 123-4567</p>
          <p>hello@bloombridalstudio.com</p>
          <p>Open Tue – Sun | 9am – 6pm</p>
        </div>

        <div>
          <h3>Follow Along</h3>
          <div className="instaGrid">
            {[IMG.footer1, IMG.footer2, IMG.footer3, IMG.footer4, IMG.footer5, IMG.footer6].map((src) => (
              <img key={src} src={src} alt="Bloom Bridal Studio social preview" loading="lazy" decoding="async" />
            ))}
          </div>
        </div>

        <div>
          <h3>Stay in Bloom</h3>
          <p>Get beauty tips, special offers and studio updates.</p>
          <form className="subscribe" onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="bloom-email">Email address</label>
            <input id="bloom-email" type="email" placeholder="Your email address" required />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </footer>

      {bookingOpen && (
        <div className="modalBackdrop" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setBookingOpen(false)}>
          <section className="bookingModal" role="dialog" aria-modal="true" aria-labelledby="booking-title">
            <button className="modalClose" type="button" onClick={() => setBookingOpen(false)} aria-label="Close booking form">×</button>
            <p className="eyebrow">Begin Your Bridal Journey</p>
            <h2 id="booking-title">Tell Us About Your Day</h2>
            <p>Share a few details and our bridal concierge will be in touch within two business days.</p>
            <form className="bookingForm" onSubmit={(event) => { event.preventDefault(); setBookingOpen(false); }}>
              <label>Full name<input autoFocus name="name" required autoComplete="name" /></label>
              <label>Email address<input name="email" type="email" required autoComplete="email" /></label>
              <label>Wedding date<input name="date" type="date" required /></label>
              <label>Wedding location<input name="location" required /></label>
              <label>Package<select name="package" value={selectedPackage} onChange={(event) => setSelectedPackage(event.target.value)}>{packages.map((pack) => <option key={pack.title}>{pack.title}</option>)}</select></label>
              <label>Estimated party size<input name="party" type="number" min="1" defaultValue="1" /></label>
              <label className="fullField">Tell us about your vision<textarea name="vision" rows={3} placeholder="Your style, timing, and anything else you’d love us to know..." /></label>
              <button className="btn fullField" type="submit">Request Consultation <span>→</span></button>
            </form>
          </section>
        </div>
      )}
    </main>
  );
}

const css = `
  :root {
    --cream: #fff8ef;
    --ivory: #fffdf8;
    --blush: #f5d7cd;
    --blush-soft: #faece6;
    --coral: #d7655d;
    --coral-dark: #b84d47;
    --gold: #c69b52;
    --sage: #8f9874;
    --ink: #3f3834;
    --muted: #746863;
    --line: rgba(176, 122, 88, 0.25);
    --shadow: 0 24px 70px rgba(92, 59, 45, 0.13);
  }

  * { box-sizing: border-box; }

  body { margin: 0; background: var(--cream); }

  .bloomPage {
    min-height: 100vh;
    color: var(--ink);
    background:
      radial-gradient(circle at 0 10%, rgba(245, 190, 180, 0.45), transparent 20rem),
      radial-gradient(circle at 100% 12%, rgba(238, 202, 176, 0.65), transparent 22rem),
      linear-gradient(180deg, #fff9f1 0%, #fffaf3 45%, #fff5ec 100%);
    font-family: "Avenir Next", Avenir, "Segoe UI", system-ui, sans-serif;
    overflow-x: clip;
    isolation: isolate;
  }

  .bloomPage section[id] { scroll-margin-top: 92px; }
  .bloomPage button, .bloomPage input, .bloomPage select, .bloomPage textarea { font: inherit; }
  .bloomPage a:focus-visible, .bloomPage button:focus-visible, .bloomPage input:focus-visible, .bloomPage select:focus-visible, .bloomPage textarea:focus-visible { outline: 3px solid rgba(198,155,82,.5); outline-offset: 3px; }

  .sectionShell { width: min(1280px, calc(100% - 48px)); margin-inline: auto; }

  .navWrap {
    width: 100%;
    margin: 0;
    padding-inline: max(24px, calc((100vw - 1280px) / 2));
    min-height: 82px;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 28px;
    position: sticky;
    top: 0;
    z-index: 50;
    border-bottom: 1px solid rgba(176, 122, 88, 0.14);
    background: rgba(255, 251, 245, 0.94);
    box-shadow: 0 8px 30px rgba(92, 59, 45, 0.06);
    backdrop-filter: blur(18px);
  }

  .logo { text-decoration: none; color: var(--coral-dark); display: inline-grid; line-height: 0.9; }
  .logo span { font-family: Georgia, "Times New Roman", serif; font-size: clamp(2.3rem, 4vw, 3.6rem); font-weight: 500; letter-spacing: -0.05em; }
  .logo small { color: var(--muted); text-transform: uppercase; letter-spacing: 0.28em; font-weight: 700; font-size: 0.7rem; margin-left: 4px; }

  .navLinks { display: flex; justify-content: center; gap: clamp(14px, 2vw, 34px); }
  .navLinks a { color: var(--ink); text-transform: uppercase; font-size: 0.76rem; letter-spacing: 0.08em; font-weight: 700; text-decoration: none; position: relative; padding: 18px 0; transition: color .2s ease; }
  .navLinks a::after { content: ""; position: absolute; left: 0; right: 0; bottom: 8px; height: 2px; background: var(--coral); transform: scaleX(0); transform-origin: left; transition: transform .25s ease; }
  .navLinks a:hover, .navLinks a.active { color: var(--coral-dark); }
  .navLinks a.active::after { transform: scaleX(1); }

  .menuButton { display: none; width: 44px; height: 44px; place-items: center; border: 1px solid var(--line); border-radius: 50%; background: white; color: var(--coral-dark); font-size: 1.35rem; cursor: pointer; }
  .mobileNav { display: none; }

  .bookTop,
  .btn {
    border: 0;
    background: var(--coral);
    color: white;
    border-radius: 4px;
    padding: 15px 25px;
    text-transform: uppercase;
    font-size: 0.75rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 14px;
    box-shadow: 0 12px 24px rgba(215, 101, 93, 0.22);
    cursor: pointer;
    transition: transform .25s ease, box-shadow .25s ease, background .25s ease;
  }

  .bookTop:hover, .btn:hover { transform: translateY(-2px); box-shadow: 0 16px 30px rgba(215, 101, 93, 0.28); }
  .btnOutline:hover { background: white; box-shadow: 0 12px 26px rgba(92, 59, 45, 0.1); }
  .bookTop svg { width: 17px; height: 17px; }

  .btnOutline { background: rgba(255,255,255,0.55); color: var(--coral-dark); border: 1px solid rgba(198, 155, 82, 0.5); box-shadow: none; }

  .hero { min-height: 650px; display: grid; grid-template-columns: 1.04fr 0.96fr; gap: 42px; align-items: center; padding: 28px 0 66px; position: relative; }
  .hero::before { content: ""; position: absolute; left: -18vw; top: 8%; width: 30vw; height: 70%; border-radius: 50%; background: radial-gradient(circle, rgba(238,175,164,.28), transparent 68%); pointer-events: none; }
  .eyebrow { color: var(--coral); text-transform: uppercase; font-size: 0.74rem; letter-spacing: 0.17em; font-weight: 800; margin: 0 0 16px; }
  .hero h1,
  h2 { font-family: Georgia, "Times New Roman", serif; font-weight: 500; letter-spacing: -0.055em; line-height: 0.98; margin: 0; }
  .hero h1 { font-size: clamp(4rem, 6.4vw, 6.2rem); max-width: 680px; }
  h2 { font-size: clamp(2.4rem, 5vw, 4.2rem); }
  em { color: var(--coral); font-style: italic; }
  .goldLine { width: 88px; height: 2px; background: var(--gold); margin: 28px 0; }
  .lead { max-width: 460px; color: var(--muted); font-size: 1.06rem; line-height: 1.8; }
  .heroActions { display: flex; flex-wrap: wrap; gap: 18px; margin-top: 28px; }

  .heroArt { position: relative; min-height: 570px; display: grid; place-items: end center; }
  .heroArt::before { content: ""; position: absolute; width: min(88%, 560px); height: 548px; border: 2px solid var(--gold); border-radius: 999px 999px 12px 12px; top: 0; left: 5%; }
  .heroArt img { width: min(88%, 540px); height: 550px; object-fit: cover; object-position: center 20%; border-radius: 999px 999px 12px 12px; box-shadow: var(--shadow); position: relative; z-index: 1; }
  .award { position: absolute; right: 0; top: 34px; z-index: 3; width: 155px; aspect-ratio: 1; border: 4px double var(--gold); border-radius: 50%; display: grid; place-items: center; text-align: center; color: var(--gold); background: rgba(255, 250, 242, .82); font-family: Georgia, serif; font-size: 2rem; line-height: .8; backdrop-filter: blur(8px); }
  .award span { font-family: Inter, sans-serif; display: block; text-transform: uppercase; font-size: .75rem; letter-spacing: .12em; line-height: 1.25; margin-top: 8px; }
  .floral { position: absolute; color: var(--coral); font-size: 8rem; opacity: .35; z-index: 2; }
  .floralRight { right: -2rem; bottom: 2rem; }

  .serviceBar { margin-top: -34px; position: relative; z-index: 5; display: grid; grid-template-columns: repeat(4, 1fr); background: rgba(255, 252, 246, 0.96); border: 1px solid var(--line); border-radius: 12px; box-shadow: var(--shadow); backdrop-filter: blur(12px); }
  .serviceItem { display: grid; grid-template-columns: auto 1fr; align-items: center; gap: 18px; padding: 30px 36px; border-right: 1px solid var(--line); }
  .serviceItem:last-child { border-right: 0; }
  .serviceIcon { color: var(--coral-dark); }
  .serviceIcon svg { display: block; width: 42px; height: 42px; }
  h3 { margin: 0 0 8px; text-transform: uppercase; letter-spacing: .1em; font-size: .85rem; }
  p { color: var(--muted); line-height: 1.65; }
  .serviceItem p { margin: 0; font-size: .9rem; }

  .gallery { display: grid; grid-template-columns: 270px 1fr; gap: 42px; align-items: center; padding: 78px 0 42px; }
  .sectionIntro p:not(.eyebrow) { margin: 18px 0; }
  .textLink { color: var(--coral); text-decoration: none; text-transform: uppercase; font-weight: 800; letter-spacing: .1em; font-size: .78rem; }
  .galleryGrid { display: grid; grid-template-columns: 1.05fr .8fr 1.05fr .75fr; grid-auto-rows: 150px; gap: 14px; }
  .galleryGrid img { width: 100%; height: 100%; object-fit: cover; object-position: center 20%; border-radius: 8px; box-shadow: 0 12px 30px rgba(70, 45, 32, .11); transition: transform .35s ease, box-shadow .35s ease; }
  .galleryGrid img:hover { transform: translateY(-4px); box-shadow: 0 18px 38px rgba(70, 45, 32, .16); }
  .galleryGrid .tall { grid-row: span 2; }
  .galleryGrid .wide { grid-column: span 1; grid-row: span 2; }

  .about { display: grid; grid-template-columns: 1.05fr .85fr 180px; gap: 34px; align-items: center; padding: 32px 0 70px; }
  .studioImg { width: 100%; min-height: 300px; height: 100%; object-fit: cover; border-radius: 0 40px 0 0; box-shadow: var(--shadow); }
  .aboutCopy { padding: 30px 0; }
  .aboutCopy p { max-width: 560px; }
  .script { font-family: Georgia, serif; font-style: italic; color: var(--coral) !important; font-size: 1.3rem; }
  .flowerCard { height: 260px; display: grid; place-items: center; font-size: 7rem; color: var(--coral); background: rgba(255,255,255,.72); border-radius: 90px 0 0 0; border: 1px solid var(--line); }

  .journey { display: grid; grid-template-columns: 250px 1fr; gap: 50px; padding: 10px 0 58px; }
  .sectionIntro.small h2 { font-size: clamp(2rem, 3.6vw, 3.2rem); }
  .steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 28px; position: relative; }
  .steps::before { content: ""; position: absolute; top: 36px; left: 8%; right: 8%; height: 1px; background: var(--gold); opacity: .6; }
  .step { position: relative; z-index: 1; }
  .stepIcon { width: 74px; aspect-ratio: 1; border: 1px solid var(--gold); background: var(--cream); color: var(--gold); border-radius: 50%; display: grid; place-items: center; margin-bottom: 18px; }
  .stepIcon svg { width: 32px; height: 32px; }
  .step span { font-family: Georgia, serif; color: var(--coral-dark); font-size: 2.1rem; font-weight: 600; }

  .artists { display: grid; grid-template-columns: 1fr .95fr repeat(3, .82fr) .7fr; gap: 16px; align-items: stretch; padding: 10px 0 50px; }
  .artistLead, .artistCard img { width: 100%; height: 100%; object-fit: cover; object-position: center 20%; }
  .artistLead { border-radius: 0 16px 0 0; min-height: 250px; }
  .artistNote, .artistCard, .greenQuote { background: rgba(255, 252, 246, .92); border: 1px solid var(--line); border-radius: 10px; box-shadow: 0 10px 28px rgba(70,45,32,.08); padding: 24px; }
  .artistNote h2 { font-size: 2.2rem; }
  .artistNote small { display: block; color: var(--muted); margin-top: 4px; }
  .artistCard { text-align: center; padding: 0 0 20px; overflow: hidden; }
  .artistCard img { height: 160px; margin-bottom: 16px; }
  .artistCard p, .artistCard h3 { margin: 0; }
  .socials { display: flex; justify-content: center; gap: 8px; color: var(--coral); font-size: .78rem; margin-top: 12px; }
  .socials a { color: inherit; text-decoration: none; border: 1px solid currentColor; border-radius: 99px; padding: 4px 7px; }
  .greenQuote { background: var(--sage); color: white; display: grid; place-items: center; font-family: Georgia, serif; font-size: 2rem; line-height: 1.1; }

  .reviews { display: grid; grid-template-columns: 250px 1fr 170px; gap: 30px; align-items: center; padding: 10px 0 44px; }
  .reviewCards { display: grid; grid-template-columns: repeat(3, 1fr); background: rgba(255, 252, 246, .92); border: 1px solid var(--line); box-shadow: var(--shadow); border-radius: 12px; overflow: hidden; }
  .reviewCard { padding: 30px; border-right: 1px solid var(--line); }
  .reviewCard:last-child { border-right: 0; }
  .quote { color: var(--coral); font-family: Georgia, serif; font-size: 4rem; height: 32px; }
  .stars { color: var(--gold); letter-spacing: .08em; }
  .sideBride { width: 100%; height: 260px; object-fit: cover; border-radius: 999px 999px 10px 10px; }
  .reviewControls { display: none; }

  .packages { display: grid; grid-template-columns: 250px 1fr; gap: 30px; align-items: start; padding: 16px 0 70px; }
  .packageCards { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; align-items: stretch; }
  .packageCard, .addons { position: relative; text-align: center; padding: 34px 26px; background: rgba(255,252,246,.94); border: 1px solid var(--line); border-radius: 10px; box-shadow: 0 18px 42px rgba(70,45,32,.1); }
  .packageCard.featured { border: 2px solid var(--coral); transform: translateY(-14px); }
  .badge { position: absolute; top: -14px; left: 50%; transform: translateX(-50%); background: var(--coral); color: white; padding: 8px 24px; border-radius: 3px; text-transform: uppercase; letter-spacing: .12em; font-size: .68rem; font-weight: 800; }
  .packageIcon { color: var(--gold); font-size: 2.2rem; }
  ul { text-align: left; color: var(--muted); line-height: 1.8; padding-left: 20px; }
  .packageCard strong { display: block; color: var(--coral-dark); font-family: Georgia, serif; font-size: 2.1rem; margin-top: 2px; }
  .packageCard small { color: var(--gold); text-transform: uppercase; letter-spacing: .12em; font-weight: 800; }
  .addons { background: var(--sage); color: white; text-align: left; }
  .addons p, .addons li { color: rgba(255,255,255,.86); }
  .choosePackage { margin-top: 18px; padding: 10px 14px; border: 1px solid var(--line); border-radius: 4px; background: var(--blush-soft); color: var(--coral-dark); text-transform: uppercase; font-size: .7rem; font-weight: 800; letter-spacing: .08em; cursor: pointer; transition: background .2s ease, color .2s ease; }
  .choosePackage:hover { background: var(--coral); color: white; }

  .planning { display: grid; grid-template-columns: .92fr 1.08fr; gap: 60px; align-items: start; padding: 20px 0 78px; }
  .availability { padding: 42px; border-radius: 180px 16px 16px 16px; background: linear-gradient(145deg, #f6ded5, #fffaf3 62%); border: 1px solid var(--line); box-shadow: var(--shadow); }
  .availability h2 { font-size: clamp(2.3rem, 4vw, 3.5rem); }
  .availabilityMeta { display: flex; flex-wrap: wrap; gap: 12px; margin: 24px 0; }
  .availabilityMeta span { display: inline-flex; align-items: center; gap: 8px; color: var(--muted); font-size: .85rem; font-weight: 700; }
  .availabilityMeta svg { width: 24px; height: 24px; color: var(--gold); }
  .faqList { padding-top: 18px; }
  .faqItem { border-top: 1px solid var(--line); }
  .faqItem:last-child { border-bottom: 1px solid var(--line); }
  .faqItem button { width: 100%; display: flex; justify-content: space-between; gap: 20px; padding: 21px 0; border: 0; background: transparent; color: var(--ink); text-align: left; font-weight: 700; cursor: pointer; }
  .faqItem button span { color: var(--coral); font-size: 1.35rem; }
  .faqItem p { margin: -4px 0 22px; max-width: 620px; }

  .cta { background: var(--coral); color: white; padding: 32px min(6vw, 86px); display: grid; grid-template-columns: 1fr auto auto; gap: 50px; align-items: center; }
  .cta h2 { color: white; font-size: clamp(2rem, 3vw, 3rem); }
  .cta p { color: rgba(255,255,255,.9); margin: 0; }
  .cta .btnOutline { background: white; color: var(--coral-dark); border-color: white; }

  .footer { display: grid; grid-template-columns: 1.1fr .75fr 1.2fr 1fr 1.15fr; gap: 38px; padding: 48px 0 38px; }
  .footer h3 { color: var(--coral); }
  .footer a { display: block; color: var(--muted); text-decoration: none; margin: 8px 0; }
  .footer p { font-size: .92rem; margin: 8px 0; }
  .footerLogo span { font-size: 2.7rem; }
  .instaGrid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6px; }
  .instaGrid img { width: 100%; aspect-ratio: 1; object-fit: cover; border-radius: 4px; }
  .subscribe { display: grid; gap: 10px; }
  .subscribe label { font-size: .8rem; font-weight: 700; color: var(--muted); }
  .subscribe input { width: 100%; padding: 13px 14px; border: 1px solid var(--line); background: white; border-radius: 3px; }
  .subscribe button { background: var(--gold); color: white; border: 0; border-radius: 3px; padding: 12px 14px; text-transform: uppercase; font-weight: 800; letter-spacing: .1em; cursor: pointer; }

  .modalBackdrop { position: fixed; inset: 0; z-index: 100; display: grid; place-items: center; padding: 22px; background: rgba(52,39,34,.58); backdrop-filter: blur(10px); }
  .bookingModal { position: relative; width: min(720px, 100%); max-height: calc(100vh - 44px); overflow-y: auto; padding: 42px; border: 1px solid var(--line); border-radius: 18px; background: var(--ivory); box-shadow: 0 35px 100px rgba(30,20,16,.3); }
  .bookingModal h2 { font-size: clamp(2.5rem, 5vw, 4rem); }
  .modalClose { position: absolute; top: 16px; right: 16px; width: 42px; height: 42px; border: 1px solid var(--line); border-radius: 50%; background: white; color: var(--coral-dark); font-size: 1.5rem; cursor: pointer; }
  .bookingForm { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 26px; }
  .bookingForm label { display: grid; gap: 7px; color: var(--ink); font-size: .8rem; font-weight: 700; }
  .bookingForm input, .bookingForm select, .bookingForm textarea { width: 100%; min-width: 0; padding: 12px 13px; border: 1px solid var(--line); border-radius: 5px; background: white; color: var(--ink); }
  .bookingForm textarea { resize: vertical; }
  .fullField { grid-column: 1 / -1; }

  @media (max-width: 1100px) {
    .navWrap { grid-template-columns: 1fr auto; }
    .navLinks { grid-column: 1 / -1; justify-content: flex-start; flex-wrap: wrap; order: 3; }
    .hero { grid-template-columns: 1fr; }
    .heroArt { min-height: auto; justify-content: center; }
    .serviceBar, .steps, .reviewCards { grid-template-columns: repeat(2, 1fr); }
    .serviceItem:nth-child(2) { border-right: 0; }
    .gallery, .about, .journey, .reviews, .packages, .planning { grid-template-columns: 1fr; }
    .about { gap: 20px; }
    .flowerCard { display: none; }
    .artists { grid-template-columns: repeat(3, 1fr); }
    .artistLead, .artistNote, .greenQuote { grid-column: span 1; }
    .packageCards { grid-template-columns: repeat(2, 1fr); }
    .cta { grid-template-columns: 1fr; gap: 18px; }
    .footer { grid-template-columns: repeat(2, 1fr); }
  }

  @media (max-width: 720px) {
    .sectionShell { width: min(100% - 28px, 1280px); }
    .navWrap { min-height: 72px; padding: 10px 16px; grid-template-columns: 1fr auto; gap: 12px; }
    .navWrap .logo span { font-size: 2.5rem; }
    .navLinks, .bookTop { display: none; }
    .menuButton { display: grid; }
    .mobileNav { position: absolute; left: 12px; right: 12px; top: calc(100% + 8px); display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; padding: 12px; border: 1px solid var(--line); border-radius: 12px; background: rgba(255,252,246,.98); box-shadow: var(--shadow); }
    .mobileNav a { padding: 12px; border-radius: 8px; color: var(--ink); text-decoration: none; text-transform: uppercase; font-size: .78rem; font-weight: 700; }
    .mobileNav a.active { color: var(--coral-dark); background: var(--blush-soft); }
    .hero { padding-top: 18px; }
    .hero h1 { font-size: clamp(3.35rem, 15vw, 4.2rem); }
    .heroArt img { height: 420px; width: 100%; }
    .heroArt::before, .award { display: none; }
    .serviceBar, .galleryGrid, .steps, .artists, .reviewCards, .packageCards, .footer { grid-template-columns: 1fr; }
    .serviceItem, .reviewCard { border-right: 0; border-bottom: 1px solid var(--line); }
    .galleryGrid { grid-auto-rows: 240px; }
    .galleryGrid .tall, .galleryGrid .wide { grid-row: span 1; grid-column: span 1; }
    .steps::before { display: none; }
    .packageCard.featured { transform: none; }
    .reviewCard { display: none; }
    .reviewCard.active { display: block; }
    .reviewControls { display: flex; align-items: center; justify-content: center; gap: 18px; padding: 14px; }
    .reviewControls button { width: 38px; height: 38px; border: 1px solid var(--line); border-radius: 50%; background: white; color: var(--coral-dark); cursor: pointer; }
    .availability { padding: 32px 24px; border-radius: 90px 14px 14px 14px; }
    .bookingModal { padding: 32px 20px 24px; }
    .bookingForm { grid-template-columns: 1fr; }
    .fullField { grid-column: 1; }
  }

  @media (prefers-reduced-motion: no-preference) {
    .heroCopy { animation: bloomRise .75s ease-out both; }
    .heroArt { animation: bloomRise .85s .12s ease-out both; }
    .serviceBar { animation: bloomRise .75s .2s ease-out both; }
    @keyframes bloomRise { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  }

  @media (prefers-reduced-motion: reduce) {
    .bloomPage *, .bloomPage *::before, .bloomPage *::after { scroll-behavior: auto !important; animation-duration: .01ms !important; transition-duration: .01ms !important; }
  }
`;
