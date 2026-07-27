import {
  ArrowLeft,
  ArrowRight,
  Award,
  BadgeCheck,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleDollarSign,
  Clock3,
  FileText,
  Hammer,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  Ruler,
  ShieldCheck,
  Star,
  Trees,
  Users,
  X,
} from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import "./PrimeDeckBuilders.css";
const root = "/src/assets/optimized/Construction/primedeck";
const nav = [
  ["Services", "pd-services"],
  ["Our Work", "pd-work"],
  ["Materials", "pd-materials"],
  ["About Us", "pd-about"],
  ["Resources", "pd-faq"],
  ["Contact", "pd-contact"],
] as const;
const services = [
  [
    "Deck Building",
    "Custom decks designed for beauty, comfort, and durability.",
    "deck.webp",
  ],
  [
    "Pergolas",
    "Shade, style, and architectural charm built just for you.",
    "pergola.webp",
  ],
  ["Covered Patios", "Extend your living space—rain or shine.", "patio.webp"],
  [
    "Outdoor Kitchens",
    "Cook, entertain, and make memories outdoors.",
    "patio.webp",
  ],
  [
    "Railings",
    "Safe, stylish railings in wood, metal, and cable.",
    "deck.webp",
  ],
  [
    "Resurfacing",
    "Give your deck new life with premium resurfacing.",
    "deck.webp",
  ],
  [
    "Backyard Upgrades",
    "From planters to privacy walls, we upgrade it all.",
    "hero.webp",
  ],
] as const;
const stats = [
  [Trees, "12+", "Years in Business"],
  [Hammer, "850+", "Projects Completed"],
  [Star, "4.9/5", "Satisfaction Rating"],
  [ShieldCheck, "5-Year", "Craftsmanship Warranty"],
  [CircleDollarSign, "Financing", "Options Available"],
] as const;
const heroSlides = ["hero.webp", "pergola.webp", "patio.webp", "deck.webp"];
const processSteps = [
  [
    "Consultation",
    "We listen, walk your space, and understand how you want to live outdoors.",
    Users,
  ],
  [
    "Design",
    "We shape your ideas into a practical custom plan tailored to your home.",
    Ruler,
  ],
  [
    "Clear Estimate",
    "You receive detailed scope, material choices, pricing, and timing.",
    FileText,
  ],
  [
    "Crafted Build",
    "Our experienced crew builds carefully, cleanly, and with respect.",
    Hammer,
  ],
  [
    "Final Walkthrough",
    "Together we review every detail before you enjoy your new space.",
    BadgeCheck,
  ],
] as const;
const materialGroups = [
  [
    "Decking",
    "Built for beauty, comfort, and lasting performance.",
    ["IPE Hardwood", "Trex Composite", "Cedar", "PVC Composite"],
  ],
  [
    "Railing",
    "Safe, refined details that complete the architecture.",
    ["Durable Wood", "Aluminum", "Cable", "Glass"],
  ],
  [
    "Stain Colors",
    "Warm finishes selected to complement your home.",
    ["Natural", "Walnut", "Chestnut", "Charcoal"],
  ],
  [
    "Pergola Styles",
    "Shade and structure designed around your lifestyle.",
    ["Classic", "Modern", "Louvered", "Attached"],
  ],
] as const;
export function PrimeDeckBuilders() {
  const [open, setOpen] = useState(false),
    [active, setActive] = useState("pd-home"),
    [slide, setSlide] = useState(0);
  useEffect(() => {
    const f = () => {
      let a = "pd-home";
      nav.forEach(([, id]) => {
        const e = document.getElementById(id);
        if (e && e.offsetTop <= scrollY + 160) a = id;
      });
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 8)
        a = "pd-contact";
      setActive(a);
    };
    f();
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  useEffect(() => {
    const timer = window.setInterval(
      () => setSlide((x) => (x + 1) % heroSlides.length),
      5500,
    );
    return () => window.clearInterval(timer);
  }, []);
  const move = (direction: number) =>
    setSlide((x) => (x + direction + heroSlides.length) % heroSlides.length);
  return (
    <main className="pd-site" id="pd-home">
      <div className="pd-top">
        <div className="pd-wrap">
          <span>
            <Trees />
            Family-Owned &amp; Local
          </span>
          <span>
            <ShieldCheck />
            Fully Licensed &amp; Insured
          </span>
          <span>
            <Award />
            5-Year Craftsmanship Warranty
          </span>
          <a href="tel:6155553325">
            <Phone />
            Call or Text (615) 555-Deck
          </a>
        </div>
      </div>
      <header className="pd-header">
        <div className="pd-wrap pd-nav">
          <Logo />
          <button className="pd-menu" onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </button>
          <nav className={open ? "open" : ""}>
            {nav.map(([a, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {a}
                {(id === "pd-services" || id === "pd-faq") && <ChevronDown />}
              </a>
            ))}
          </nav>
          <a className="pd-button small" href="#pd-quote">
            Get a Free Quote <ArrowRight />
          </a>
        </div>
      </header>
      <section className="pd-hero">
        {heroSlides.map((image, i) => (
          <img
            className={i === slide ? "active" : ""}
            src={`${root}/${image}`}
            alt="PrimeDeck completed outdoor living project"
            key={image}
          />
        ))}
        <div className="pd-shade" />
        <div className="pd-wrap pd-hero-grid">
          <div>
            <span className="pd-hero-kicker">
              Custom Outdoor Living • Middle Tennessee
            </span>
            <h1>
              Better Outdoors.
              <br />
              <em>Built Beautifully.</em>
            </h1>
            <h2>decks, pergolas, and backyard upgrades.</h2>
            <p>
              We design and build custom outdoor spaces that bring people
              together and add value to the way you live—right at home.
            </p>
            {[
              "Custom Design & Expert Craftsmanship",
              "Premium Materials Built to Last",
              "On-Time, On-Budget Promise",
            ].map((x) => (
              <span key={x}>
                <CheckCircle2 />
                {x}
              </span>
            ))}
            <div className="pd-hero-actions">
              <a className="pd-button" href="#pd-quote">
                Get a Free Quote <ArrowRight />
              </a>
              <a href="#pd-work">
                Explore Our Work <ArrowRight />
              </a>
            </div>
          </div>
        </div>
        <div className="pd-carousel-controls">
          <button onClick={() => move(-1)} aria-label="Previous slide">
            <ArrowLeft />
          </button>
          <div>
            {heroSlides.map((_, i) => (
              <button
                key={i}
                className={i === slide ? "active" : ""}
                onClick={() => setSlide(i)}
                aria-label={`Show slide ${i + 1}`}
              />
            ))}
          </div>
          <button onClick={() => move(1)} aria-label="Next slide">
            <ArrowRight />
          </button>
        </div>
      </section>
      <section className="pd-stats">
        <div className="pd-wrap">
          {stats.map(([I, a, b]) => (
            <div key={b}>
              <I />
              <span>
                <strong>{a}</strong>
                <small>{b}</small>
              </span>
            </div>
          ))}
        </div>
      </section>
      <section id="pd-quote" className="pd-section pd-quote-section">
        <div className="pd-wrap">
          <div>
            <span>Let's Build Your Backyard</span>
            <h2>Start with a free, straightforward quote.</h2>
            <p>
              Tell us what you have in mind. Our local team will follow up
              within one business day to discuss your ideas, space, and next
              steps.
            </p>
            <div>
              <b>
                <CheckCircle2 />
                Custom design guidance
              </b>
              <b>
                <ShieldCheck />
                Licensed and insured
              </b>
              <b>
                <Award />
                5-year warranty
              </b>
            </div>
          </div>
          <Quote />
        </div>
      </section>
      <section id="pd-services" className="pd-section pd-services-section">
        <div className="pd-wrap">
          <div className="pd-services-head">
            <div>
              <span>What We Build</span>
              <h2>
                Outdoor Spaces
                <br />
                Made for Living
              </h2>
            </div>
            <p>
              From the first sketch to the final board, we create thoughtful
              outdoor spaces designed around how your family relaxes, gathers,
              and grows.
            </p>
            <a href="#pd-quote">
              Explore All Services <ArrowRight />
            </a>
          </div>
          <div className="pd-services">
            {services.map(([a, b, p], i) => (
              <article key={a}>
                <div className="pd-service-image">
                  <img src={`${root}/${p}`} alt={a} />
                  <span>{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="pd-service-content">
                  <small>
                    {i < 2
                      ? "Signature Service"
                      : i < 4
                        ? "Outdoor Living"
                        : "Finishing Touches"}
                  </small>
                  <h3>{a}</h3>
                  <p>{b}</p>
                  <a href="#pd-quote">
                    Plan This Project <ArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="pd-work" className="pd-section pd-work">
        <div className="pd-wrap">
          <div>
            <span>Our Work</span>
            <h2>
              Spaces We're
              <br />
              Proud Of
            </h2>
            <a href="#pd-work">
              View All Projects <ArrowRight />
            </a>
          </div>
          {["deck.webp", "pergola.webp", "patio.webp", "hero.webp"].map(
            (p, i) => (
              <img
                src={`${root}/${p}`}
                alt={`PrimeDeck completed project ${i + 1}`}
                key={p}
              />
            ),
          )}
        </div>
      </section>
      <section id="pd-about" className="pd-section pd-why">
        <div className="pd-wrap">
          <img src={`${root}/pergola.webp`} alt="Deck craftsmanship" />
          <div className="pd-why-grid">
            {[
              [
                "Craftsmanship",
                "Detail-driven builders who treat your home like our own.",
              ],
              [
                "Transparent Estimates",
                "Clear pricing, honest timelines, no surprises.",
              ],
              [
                "Quality Materials",
                "Premium materials that look great and last.",
              ],
              [
                "Communication You Can Count On",
                "You are always in the loop from start to finish.",
              ],
            ].map(([a, b]) => (
              <article key={a}>
                <Leaf />
                <h3>{a}</h3>
                <p>{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="pd-section pd-process">
        <div className="pd-wrap">
          <div className="pd-process-head">
            <div>
              <span>Our Simple Process</span>
              <h2>
                Clear Steps.
                <br />
                Beautiful Results.
              </h2>
            </div>
            <p>
              A well-built outdoor space starts with a well-run project. You
              will always know what is happening, what comes next, and who to
              call.
            </p>
          </div>
          <div className="pd-process-track">
            {processSteps.map(([a, b, Icon], i) => (
              <article key={a}>
                <div className="pd-process-marker">
                  <span>0{i + 1}</span>
                  <Icon />
                </div>
                <small>Step {i + 1}</small>
                <h3>{a}</h3>
                <p>{b}</p>
              </article>
            ))}
          </div>
          <div className="pd-process-promise">
            <div>
              <ShieldCheck />
              <span>
                <strong>One dedicated team</strong>From first conversation
                through final cleanup.
              </span>
            </div>
            <div>
              <Clock3 />
              <span>
                <strong>Updates you can count on</strong>Clear communication at
                every milestone.
              </span>
            </div>
            <a className="pd-button" href="#pd-quote">
              Start Your Project <ArrowRight />
            </a>
          </div>
        </div>
      </section>
      <section id="pd-materials" className="pd-section pd-materials">
        <div className="pd-wrap">
          <div className="pd-material-intro">
            <Heading
              over="Design It Your Way"
              title="Premium Materials. Endless Possibilities."
              align="left"
            />
            <p>
              Explore a curated selection of dependable materials and finishes.
              We will help you compare appearance, maintenance, comfort, and
              long-term value.
            </p>
            <a href="#pd-quote">
              Schedule a Design Visit <ArrowRight />
            </a>
          </div>
          <div className="pd-material-grid">
            {materialGroups.map(([title, description, items], group) => (
              <article key={title}>
                <div className="pd-material-title">
                  <span>0{group + 1}</span>
                  <div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </div>
                </div>
                <div className={`pd-swatches swatches-${group}`}>
                  {items.map((item, i) => (
                    <span key={item}>
                      <i style={{ "--swatch": i } as CSSProperties} />
                      <b>{item}</b>
                      <Check />
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="pd-section pd-location">
        <div className="pd-wrap">
          <div className="pd-location-copy">
            <span>Where We Build</span>
            <h2>Proudly Serving Middle Tennessee</h2>
            <p>
              Local crews, responsive service, and outdoor spaces designed for
              Tennessee living.
            </p>
            <a href="#pd-quote">
              Check Your Address <ArrowRight />
            </a>
          </div>
          <div className="pd-map">
            <div className="pd-map-ring" />
            <strong>Nashville</strong>
            {["Franklin", "Brentwood", "Murfreesboro", "Spring Hill"].map(
              (x, i) => (
                <span className={`pin-${i + 1}`} key={x}>
                  <MapPin />
                  {x}
                </span>
              ),
            )}
          </div>
          <div className="pd-area-panel">
            <span>Primary Service Area</span>
            <h3>Built locally. Backed for years.</h3>
            <div className="pd-areas">
              {[
                "Nashville",
                "Spring Hill",
                "Brentwood",
                "Ashland City",
                "Franklin",
                "Hendersonville",
                "Murfreesboro",
                "Surrounding Areas",
              ].map((x) => (
                <b key={x}>
                  <Check />
                  {x}
                </b>
              ))}
            </div>
            <small>
              Not sure if you're in range? Send us your address and we'll
              confirm.
            </small>
          </div>
        </div>
      </section>
      <section className="pd-section pd-reviews">
        <div className="pd-wrap">
          <div className="pd-testimonial-side">
            <Heading
              over="What Our Clients Say"
              title="Loved by Local Homeowners"
              align="left"
            />
            <div className="pd-review-summary">
              <strong>4.9</strong>
              <div>
                <span>★★★★★</span>
                <p>Based on 120+ verified homeowner reviews</p>
              </div>
            </div>
            <div className="pd-review-grid">
              {[
                "PrimeDeck exceeded our expectations. The deck and pergola turned out even better than we imagined!",
                "Professional, on-time, and the quality is top-notch. We use our outdoor space more than ever now!",
                "They made the entire process easy and stress-free. Highly recommend!",
              ].map((x, i) => (
                <article key={x}>
                  <div className="pd-review-top">
                    <span>{["ST", "MR", "JL"][i]}</span>
                    <div>
                      <b>{["Sarah T.", "Michael R.", "Jessica L."][i]}</b>
                      <small>
                        {["Brentwood, TN", "Nashville, TN", "Franklin, TN"][i]}
                      </small>
                    </div>
                    <strong>★★★★★</strong>
                  </div>
                  <p>“{x}”</p>
                  <footer>
                    <BadgeCheck />
                    Verified PrimeDeck Client
                  </footer>
                </article>
              ))}
            </div>
          </div>
          <div id="pd-faq" className="pd-faq-panel">
            <span>Helpful Answers</span>
            <h2>Frequently Asked Questions</h2>
            <p>
              Quick answers about timelines, estimates, service areas,
              warranties, and design.
            </p>
            {[
              "How long does a typical project take?",
              "Do you offer free estimates?",
              "What areas do you serve?",
              "What type of warranty do you provide?",
              "Can you help with design ideas?",
            ].map((q, i) => (
              <details key={q} open={i === 0}>
                <summary>
                  <span>0{i + 1}</span>
                  {q}
                  <b>+</b>
                </summary>
                <p>
                  {i === 0
                    ? "Most projects take two to six weeks after permitting and material delivery, depending on scope and weather."
                    : "Our local team will provide a clear answer tailored to your property and project goals."}
                </p>
              </details>
            ))}
            <a href="#pd-quote">
              Still Have Questions? <ArrowRight />
            </a>
          </div>
        </div>
      </section>
      <section className="pd-cta">
        <div className="pd-wrap">
          <h2>Ready to Elevate Your Outdoors?</h2>
          <p>Let's build a space you'll love for years to come.</p>
          <a className="pd-button" href="#pd-quote">
            Get Your Free Quote <ArrowRight />
          </a>
        </div>
      </section>
      <footer id="pd-contact" className="pd-footer">
        <div className="pd-wrap pd-footer-grid">
          <div>
            <Logo />
            <p>Decks, pergolas, and backyard upgrades built beautifully.</p>
          </div>
          <Footer
            title="Quick Links"
            items={[
              "Home",
              "Services",
              "Our Work",
              "Materials",
              "About Us",
              "Contact",
            ]}
          />
          <Footer
            title="Resources"
            items={[
              "Blog",
              "Decking Guide",
              "Pergola Ideas",
              "Warranty",
              "Financing",
            ]}
          />
          <div>
            <h3>Contact Us</h3>
            <p>
              <Phone />
              (615) 555-DECK
            </p>
            <p>
              <Mail />
              hello@primedeckbuilders.com
            </p>
            <p>
              <MapPin />
              123 Timber Lane
              <br />
              Nashville, TN 37203
            </p>
          </div>
        </div>
        <div className="pd-wrap pd-copy">
          © 2025 PrimeDeck Builders. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
function Logo() {
  return (
    <a href="#pd-home" className="pd-logo">
      <Trees />
      <strong>
        PRIMEDECK<small>BUILDERS</small>
      </strong>
    </a>
  );
}
function Quote() {
  return (
    <form className="pd-form">
      <Leaf />
      <h2>Get Your Free Quote</h2>
      <p>
        Tell us about your project and we'll be in touch within 1 business day.
      </p>
      <input placeholder="Full Name" />
      <input placeholder="Email Address" />
      <input placeholder="Phone Number" />
      <select defaultValue="">
        <option value="" disabled>
          Project Type
        </option>
        <option>Deck</option>
        <option>Pergola</option>
      </select>
      <textarea placeholder="Tell us about your project..." />
      <button type="button">Get My Quote</button>
      <small>
        <ShieldCheck />
        100% Privacy Guaranteed
      </small>
    </form>
  );
}
function Heading({
  over,
  title,
  align = "center",
}: {
  over?: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`pd-heading ${align}`}>
      {over && <span>{over}</span>}
      <h2>{title}</h2>
    </div>
  );
}
function Footer({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3>{title}</h3>
      {items.map((x) => (
        <a href="#pd-home" key={x}>
          {x}
        </a>
      ))}
    </div>
  );
}
