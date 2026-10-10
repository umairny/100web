import React, { useEffect, useState } from "react";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  Bath,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  FileText,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  X,
} from "lucide-react";

const img = "/src/assets/optimized/Construction/clearline";
const links = [
  ["Services", "cl-services"],
  ["About Us", "cl-about"],
  ["Our Work", "cl-work"],
  ["Process", "cl-process"],
  ["Resources", "cl-faq"],
] as const;

const services = [
  [
    "Kitchen Remodeling",
    "Custom kitchens designed for the way you live.",
    "hero.webp",
    Building2,
  ],
  [
    "Bathroom Remodeling",
    "Spa-like bathrooms with style and function.",
    "bathroom.webp",
    Bath,
  ],
  [
    "Custom Cabinetry",
    "Built-in storage that is beautiful and smart.",
    "kitchen.webp",
    Building2,
  ],
  [
    "Countertops & Tile",
    "Premium surfaces and expert installation.",
    "planning.webp",
    Sparkles,
  ],
  [
    "Shower & Tub Upgrades",
    "Modern upgrades for comfort and value.",
    "bathroom.webp",
    Bath,
  ],
  [
    "Whole-Home Updates",
    "Cohesive updates that elevate every room.",
    "kitchen.webp",
    Building2,
  ],
] as const;

const nav = [["Home", "cl-home"], ...links, ["Contact", "cl-contact"]] as const;

const stats = [
  [Award, "15+", "Years in Business"],
  [Building2, "750+", "Projects Completed"],
  [Star, "4.9 ★★★★★", "Google Rating"],
  [BadgeCheck, "Flexible", "Financing Options"],
  [ShieldCheck, "5-Year", "Workmanship Warranty"],
  [Sparkles, "Design-Build", "Start to Finish Expertise"],
] as const;

export function ClearlineRemodeling() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("cl-home");

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setOpen(false);
    setActive(id);
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  useEffect(() => {
    const onScroll = () => {
      let next = "cl-home";
      const scrollPos = window.scrollY + 180;

      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 70) {
        setActive("cl-contact");
        return;
      }

      const sections = [
        "cl-home",
        "cl-services",
        "cl-about",
        "cl-work",
        "cl-process",
        "cl-faq",
        "cl-contact",
      ];

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          next = id;
        }
      }
      setActive(next);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="cl-site" id="cl-home">
      <style>{css}</style>

      {/* Top Banner */}
      <div className="cl-top">
        <div className="cl-wrap">
          <span>
            <MapPin />
            Proudly Serving Greater Seattle &amp; Eastside
          </span>
          <span>
            <ShieldCheck />
            Licensed &amp; Insured #CLEARLR821K9
          </span>
          <span>
            <BadgeCheck />
            Flexible Financing Available
          </span>
          <a href="tel:4255550198">
            <Phone />
            (425) 555-0198
          </a>
        </div>
      </div>

      {/* Sticky Header */}
      <header className="cl-header">
        <div className="cl-wrap cl-nav">
          <Logo onClick={(e) => scrollTo(e, "cl-home")} />

          <button
            onClick={() => setOpen(!open)}
            className="cl-menu"
            aria-label="Toggle navigation menu"
          >
            {open ? <X /> : <Menu />}
          </button>

          <nav className={open ? "open" : ""}>
            {links.map(([label, id]) => (
              <a
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={(e) => scrollTo(e, id)}
                key={id}
              >
                {label}
                {(id === "cl-services" || id === "cl-faq") && <ChevronDown />}
              </a>
            ))}
          </nav>

          <a
            className="cl-button small"
            href="#cl-estimate"
            onClick={(e) => scrollTo(e, "cl-estimate")}
          >
            Get a Quote
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="cl-hero">
        <img src={`${img}/hero.webp`} alt="Elegant white kitchen remodel" />
        <div className="cl-veil" />
        <div className="cl-wrap cl-hero-grid">
          <div>
            <h1>Kitchen &amp; Bath Transformations That Feel Like Home</h1>
            <p>
              Thoughtful design. Quality craftsmanship.
              <br />A clear, organized process from start to finish.
            </p>
            <div className="cl-actions">
              <a
                className="cl-button"
                href="#cl-estimate"
                onClick={(e) => scrollTo(e, "cl-estimate")}
              >
                Get a Quote
              </a>
              <a
                className="cl-button outline"
                href="#cl-work"
                onClick={(e) => scrollTo(e, "cl-work")}
              >
                View Our Work
              </a>
            </div>
          </div>
          <Estimate />
        </div>
      </section>

      {/* Stats Bar */}
      <section className="cl-stats">
        <div className="cl-wrap">
          {stats.map(([Icon, n, t]) => (
            <div key={t}>
              <Icon />
              <span>
                <strong>{n}</strong>
                <small>{t}</small>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section id="cl-services" className="cl-section">
        <div className="cl-wrap">
          <Heading
            over="Our Services"
            title="Beautiful Spaces. Built Around You."
          />
          <div className="cl-services">
            {services.map(([title, text, pic, Icon]) => (
              <article key={title}>
                <img src={`${img}/${pic}`} alt={title} />
                <span>
                  <Icon />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
                <a
                  href="#cl-estimate"
                  onClick={(e) => scrollTo(e, "cl-estimate")}
                >
                  Learn More <ArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About & Promise Section */}
      <section id="cl-about" className="cl-section cl-promise">
        <div className="cl-wrap">
          <img src={`${img}/bathroom.webp`} alt="Finished luxury bathroom" />
          <div>
            <span className="cl-over">Why Homeowners Choose Us</span>
            <h2>A Better Remodeling Experience</h2>
            <p>
              We believe a great remodel is about more than the final
              result—it's about a smooth, respectful experience from day one.
            </p>
            <a
              className="cl-button"
              href="#cl-process"
              onClick={(e) => scrollTo(e, "cl-process")}
            >
              Our Full Promise
            </a>
          </div>
          <div className="cl-promise-grid">
            {[
              [
                "Transparent Estimates",
                "Detailed pricing with no hidden surprises.",
              ],
              [
                "Clear Timelines",
                "Realistic schedules and consistent updates.",
              ],
              ["Premium Materials", "Trusted brands and suppliers."],
              ["Respectful Crews", "Courteous, clean and professional."],
              ["Design Guidance", "Expert advice for confident choices."],
              [
                "Photo Documentation",
                "Progress photos and clear communication.",
              ],
            ].map(([a, b]) => (
              <article key={a}>
                <CheckCircle2 />
                <h3>{a}</h3>
                <p>{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio / Recent Work */}
      <section id="cl-work" className="cl-section">
        <div className="cl-wrap">
          <Heading
            over="Recent Transformations"
            title="Real Projects. Real Results."
          />
          <div className="cl-projects">
            {[
              ["Modern Farmhouse Kitchen", "Bellevue, WA", "kitchen.webp"],
              ["Spa-Inspired Primary Bath", "Kirkland, WA", "bathroom.webp"],
              ["Timeless White Kitchen", "Redmond, WA", "hero.webp"],
            ].map(([a, b, p]) => (
              <article key={a}>
                <img src={`${img}/${p}`} alt={a} />
                <div>
                  <h3>{a}</h3>
                  <strong>{b}</strong>
                  <p>
                    Classic design with thoughtful modern functionality and
                    beautiful details throughout.
                  </p>
                  <small>Completed: Spring 2025 &nbsp; | &nbsp; 7 Weeks</small>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section id="cl-process" className="cl-section cl-process">
        <div className="cl-wrap">
          <Heading
            over="Our Process"
            title="A Clear, Step-by-Step Experience"
          />
          <div className="cl-steps">
            {[
              [
                "Consultation",
                "We listen, learn about your vision, and walk your space.",
              ],
              ["Design", "We create a plan and help you select finishes."],
              ["Detailed Estimate", "You receive a clear, itemized estimate."],
              ["Build", "Our team gets to work with care and precision."],
              [
                "Final Walkthrough",
                "We review every detail to ensure satisfaction.",
              ],
            ].map(([a, b], i) => (
              <article key={a}>
                <span>{i + 1}</span>
                <h3>{a}</h3>
                <p>{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation & Communication */}
      <section className="cl-section cl-document">
        <div className="cl-wrap">
          <div>
            <h2>
              Clear Communication.
              <br />
              Documented Every Step.
            </h2>
            <p>You'll always know what's happening and what comes next.</p>
            {[
              "Daily progress photos",
              "Detailed scope of work",
              "Material & finish selections",
              "Change tracking & approvals",
              "Consistent updates",
            ].map((x) => (
              <span key={x}>
                <Check />
                {x}
              </span>
            ))}
          </div>
          <img
            src={`${img}/planning.webp`}
            alt="Remodel planning documents and materials"
          />
          <div className="cl-phone-grid">
            {[
              "Daily Photo Updates",
              "Scope of Work",
              "Change Tracking",
              "Clear Communication",
            ].map((x, i) => (
              <article key={x}>
                <div>
                  {i === 0 ? (
                    <img src={`${img}/bathroom.webp`} alt="" />
                  ) : (
                    <FileText />
                  )}
                </div>
                <strong>{x}</strong>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials & Service Area */}
      <section className="cl-section cl-testimonials">
        <div className="cl-wrap cl-community">
          <div>
            <Heading
              over="Service Areas"
              title="Proudly Serving Our Community"
              align="left"
            />
            <p>
              <MapPin />
              Bellevue &nbsp; <MapPin />
              Issaquah
              <br />
              <MapPin />
              Kirkland &nbsp; <MapPin />
              Redmond
              <br />
              <MapPin />
              Mercer Island &amp; surrounding areas
            </p>
          </div>
          <div className="cl-map">
            SEATTLE<div>Bellevue</div>
            <span>Lake Washington</span>
          </div>
          <div className="cl-quotes">
            {[
              "Clearline exceeded our expectations. The team was professional and the results are beautiful.",
              "Our new bathroom feels like a luxury spa. The attention to detail was incredible.",
              "From design to final walkthrough, everything was handled with care and transparency.",
            ].map((x, i) => (
              <article key={x}>
                <b>“</b>
                <p>{x}</p>
                <strong>
                  — {["Jessica M.", "Mark & Lisa T.", "Brian K."][i]}
                </strong>
                <span>★★★★★</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section id="cl-faq" className="cl-section cl-faq">
        <div className="cl-wrap">
          <Heading title="Frequently Asked Questions" />
          <div>
            {[
              "How long does a typical remodel take?",
              "Do you help with design and material selections?",
              "Are you licensed and insured?",
              "How do you handle changes during the project?",
              "What areas do you serve?",
              "Do you offer financing?",
            ].map((q) => (
              <details key={q}>
                <summary>
                  {q}
                  <b>+</b>
                </summary>
                <p>
                  Our team provides clear guidance specific to your home, scope,
                  and timeline with transparent milestones and prompt responses.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Banner */}
      <section className="cl-cta">
        <div className="cl-wrap">
          <h2>Ready to Transform Your Home?</h2>
          <p>Let's create a space you'll love for years to come.</p>
          <a
            className="cl-button"
            href="#cl-estimate"
            onClick={(e) => scrollTo(e, "cl-estimate")}
          >
            Get Your Free Estimate
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer id="cl-contact" className="cl-footer">
        <div className="cl-wrap cl-footer-grid">
          <div>
            <Logo onClick={(e) => scrollTo(e, "cl-home")} />
            <p>
              Kitchen and bath remodeling with a clear process, beautiful
              design, and quality craftsmanship.
            </p>
          </div>
          <Footer
            title="Navigation"
            items={[
              ["Home", "cl-home"],
              ["About Us", "cl-about"],
              ["Our Process", "cl-process"],
              ["Our Work", "cl-work"],
              ["Resources", "cl-faq"],
              ["Contact Us", "cl-contact"],
            ]}
            onNavigate={scrollTo}
          />
          <Footer
            title="Services"
            items={services.map((x) => [x[0], "cl-services"])}
            onNavigate={scrollTo}
          />
          <div>
            <h3>Service Areas</h3>
            <p>Bellevue, WA</p>
            <p>Kirkland, WA</p>
            <p>Redmond, WA</p>
            <p>Bothell, WA</p>
            <p>Sammamish, WA</p>
          </div>
          <div>
            <h3>Contact</h3>
            <p>
              <Phone />
              (425) 555-0198
            </p>
            <p>
              <Mail />
              hello@clearlineremodeling.com
            </p>
            <p>
              <MapPin />
              123 Main St, Suite 100
              <br />
              Bellevue, WA 98004
            </p>
          </div>
        </div>
        <div className="cl-wrap cl-copy">
          © {new Date().getFullYear()} Clearline Remodeling. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

function Logo({ onClick }: { onClick?: (e: React.MouseEvent) => void }) {
  return (
    <a href="#cl-home" className="cl-logo" onClick={onClick}>
      <span>⌂</span>
      <strong>
        CLEARLINE<small>REMODELING</small>
      </strong>
    </a>
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
    <div className={`cl-heading ${align}`}>
      {over && <span>{over}</span>}
      <h2>{title}</h2>
    </div>
  );
}

function Estimate() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      id="cl-estimate"
      className="cl-form"
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <h2>Get Your Free Estimate</h2>
      <p>Tell us about your project and we'll be in touch.</p>
      {submitted ? (
        <div className="cl-form-success">
          <CheckCircle2 />
          <strong>Thank You for Inquiring!</strong>
          <span>A design specialist will call you within 24 hours to schedule your consultation.</span>
          <button
            type="button"
            className="cl-button small"
            onClick={() => setSubmitted(false)}
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <>
          <input placeholder="Full Name" required />
          <input placeholder="Phone Number" type="tel" required />
          <input placeholder="Email Address" type="email" required />
          <select defaultValue="">
            <option value="" disabled>
              Project Type
            </option>
            <option>Kitchen Remodeling</option>
            <option>Bathroom Remodeling</option>
            <option>Custom Cabinetry &amp; Storage</option>
            <option>Whole-Home Modernization</option>
          </select>
          <textarea placeholder="Tell us about your project scope &amp; timeline" />
          <button type="submit">Request My Estimate</button>
          <small>
            <ShieldCheck />
            100% Private. No Spam. Ever.
          </small>
        </>
      )}
    </form>
  );
}

function Footer({
  title,
  items,
  onNavigate,
}: {
  title: string;
  items: readonly (readonly [string, string])[];
  onNavigate?: (e: React.MouseEvent, id: string) => void;
}) {
  return (
    <div>
      <h3>{title}</h3>
      {items.map(([label, id]) => (
        <a
          href={`#${id}`}
          key={label}
          onClick={(e) => onNavigate && onNavigate(e, id)}
        >
          {label}
        </a>
      ))}
    </div>
  );
}

const css = `
  /* ==========================================================================
     CLEARLINE REMODELING - COMPLETE THEME ENGINE & DESIGN SYSTEM
     ========================================================================== */

  .cl-site {
    /* Brand Default Palette */
    --green: #5d695b;
    --gold: #b79355;
    --ink: #252923;
    --cream: #f7f5f0;
    --surface: #ffffff;
    --card: #ffffff;
    --card-border: #dddddd;
    --muted: #5d635c;
    --subtle-bg: #f5f3ef;
    --top-bg: #f2f0ec;
    --header-bg: rgba(255, 255, 255, 0.97);
    --header-border: rgba(0, 0, 0, 0.08);
    --stats-bg: #ffffff;
    --input-bg: #ffffff;
    --input-border: #dddddd;
    --map-bg: #dbe6df;
    --map-text: #557866;
    --footer-bg: #242821;
    --footer-text: #ffffff;

    background-color: var(--cream);
    color: var(--ink);
    font-family: Georgia, "Times New Roman", serif;
    font-size: 18px;
    overflow-x: clip;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  .cl-site * {
    box-sizing: border-box;
  }

  .cl-site a {
    text-decoration: none;
    color: inherit;
  }

  .cl-wrap {
    width: min(1480px, calc(100% - 80px));
    margin: auto;
  }

  /* ==========================================================================
     THEME ACCENT ADAPTATION (PRESETS & THEME SELECTOR)
     ========================================================================== */
  :root[data-theme-active="true"] .cl-site,
  :root[data-theme-preset]:not([data-theme-preset="original"]) .cl-site {
    --green: var(--theme-accent-primary, #5d695b);
    --gold:  var(--theme-accent-secondary, #b79355);
  }

  /* ==========================================================================
     TOP BAR
     ========================================================================== */
  .cl-top {
    height: 45px;
    background: var(--top-bg);
    font-family: Manrope, sans-serif;
    font-size: 12px;
    border-bottom: 1px solid var(--card-border);
    transition: background-color 0.25s ease, border-color 0.25s ease;
  }

  .cl-top > .cl-wrap {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .cl-top span,
  .cl-top a {
    display: flex;
    gap: 7px;
    align-items: center;
    color: var(--ink);
    transition: color 0.2s ease;
  }

  .cl-top a:hover {
    color: var(--green);
  }

  .cl-top svg {
    width: 14px;
    height: 14px;
    color: var(--gold);
    flex-shrink: 0;
  }

  /* ==========================================================================
     HEADER & NAV WITH ACTIVE HIGHLIGHTING
     ========================================================================== */
  .cl-header {
    height: 108px;
    background: var(--header-bg);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 4px 20px var(--header-border);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--card-border);
    transition: background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .cl-nav {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 40px;
  }

  .cl-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--ink);
    font-size: 28px;
    letter-spacing: 1px;
    font-family: Georgia, serif;
    flex-shrink: 0;
    transition: color 0.25s ease;
  }

  .cl-logo > span {
    font-size: 40px;
    color: var(--gold);
    line-height: 1;
    transition: color 0.25s ease;
  }

  .cl-logo small {
    display: block;
    font-family: Manrope, sans-serif;
    font-size: 10px;
    letter-spacing: 6px;
    margin-top: 5px;
    color: var(--muted);
  }

  .cl-nav nav {
    display: flex;
    gap: 28px;
    margin-left: auto;
    height: 100%;
    align-items: center;
  }

  .cl-nav nav a {
    color: var(--ink);
    font-family: Manrope, sans-serif;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 800;
    letter-spacing: 0.04em;
    display: flex;
    align-items: center;
    gap: 4px;
    position: relative;
    padding: 8px 12px;
    border-radius: 4px;
    transition: color 0.2s ease, background-color 0.2s ease;
  }

  .cl-nav nav a svg {
    width: 13px;
    height: 13px;
    opacity: 0.6;
    transition: transform 0.2s ease;
  }

  .cl-nav nav a:hover {
    color: var(--green);
  }

  /* Active Class Styling */
  .cl-nav nav a.active {
    color: var(--green) !important;
    background: color-mix(in srgb, var(--green) 12%, transparent);
  }

  .cl-nav nav a.active:after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 12px;
    right: 12px;
    height: 3px;
    background: var(--gold);
    border-radius: 2px;
  }

  .cl-menu {
    display: none;
    background: none;
    border: 0;
    color: var(--ink);
    cursor: pointer;
    padding: 8px;
    transition: color 0.2s ease;
  }

  .cl-menu svg {
    width: 24px;
    height: 24px;
  }

  /* Buttons */
  .cl-button {
    display: inline-flex;
    min-height: 58px;
    padding: 0 34px;
    background: var(--green);
    border: 2px solid var(--green);
    color: #fff !important;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    font: bold 13px Manrope, sans-serif;
    letter-spacing: 0.05em;
    border-radius: 4px;
    cursor: pointer;
    box-shadow: 0 4px 14px color-mix(in srgb, var(--green) 30%, transparent);
    transition: all 0.2s ease;
  }

  .cl-button:hover {
    filter: brightness(1.08);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px color-mix(in srgb, var(--green) 40%, transparent);
  }

  .cl-button.small {
    min-height: 48px;
    padding: 0 26px;
    font-size: 12px;
  }

  .cl-button.outline {
    background: transparent;
    color: var(--ink) !important;
    border-color: var(--card-border);
    box-shadow: none;
  }

  .cl-button.outline:hover {
    border-color: var(--green);
    color: var(--green) !important;
    background: color-mix(in srgb, var(--green) 8%, transparent);
  }

  .cl-site section[id],
  .cl-site footer[id],
  #cl-estimate {
    scroll-margin-top: 112px;
  }

  /* ==========================================================================
     HERO SECTION
     ========================================================================== */
  .cl-hero {
    height: 790px;
    position: relative;
    overflow: hidden;
  }

  .cl-hero > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cl-veil {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.97),
      rgba(255, 255, 255, 0.65) 52%,
      rgba(255, 255, 255, 0.15)
    );
    transition: background 0.3s ease;
  }

  .cl-hero-grid {
    height: 100%;
    position: relative;
    display: grid;
    grid-template-columns: 1.2fr 0.72fr;
    gap: 80px;
    align-items: center;
  }

  .cl-hero h1 {
    font-size: 64px;
    line-height: 1.05;
    font-weight: 400;
    max-width: 760px;
    margin: 0;
    color: var(--ink);
    transition: color 0.25s ease;
  }

  .cl-hero p {
    font-size: 18px;
    line-height: 1.65;
    color: var(--muted);
    margin-top: 18px;
    transition: color 0.25s ease;
  }

  .cl-actions {
    display: flex;
    gap: 20px;
    margin-top: 28px;
  }

  /* Form */
  .cl-form {
    background: var(--card);
    padding: 35px;
    border-radius: 10px;
    border: 1px solid var(--card-border);
    box-shadow: 0 14px 38px rgba(36, 34, 28, 0.15);
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: background-color 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }

  .cl-form h2 {
    font-size: 28px;
    margin: 0;
    color: var(--ink);
    font-weight: 400;
  }

  .cl-form p {
    font-size: 13px;
    margin: 0 0 6px;
    color: var(--muted);
    font-family: Manrope, sans-serif;
  }

  .cl-form input,
  .cl-form select,
  .cl-form textarea {
    min-height: 48px;
    border: 1px solid var(--input-border);
    background: var(--input-bg);
    color: var(--ink);
    border-radius: 4px;
    padding: 12px;
    font: 13px Manrope, sans-serif;
    outline: none;
    transition: border-color 0.2s ease, background-color 0.25s ease, color 0.25s ease;
  }

  .cl-form input:focus,
  .cl-form select:focus,
  .cl-form textarea:focus {
    border-color: var(--green);
  }

  .cl-form textarea {
    min-height: 95px;
    resize: vertical;
  }

  .cl-form button[type="submit"] {
    min-height: 52px;
    background: var(--green);
    color: #fff;
    border: 0;
    border-radius: 4px;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: filter 0.2s ease;
  }

  .cl-form button[type="submit"]:hover {
    filter: brightness(1.1);
  }

  .cl-form small {
    font: 11px Manrope, sans-serif;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    color: var(--muted);
  }

  .cl-form small svg {
    width: 13px;
    height: 13px;
    color: var(--gold);
  }

  .cl-form-success {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 12px;
    padding: 24px 10px;
    color: var(--ink);
  }

  .cl-form-success svg {
    width: 44px;
    height: 44px;
    color: var(--green);
  }

  .cl-form-success strong {
    font-size: 20px;
    font-family: Georgia, serif;
  }

  .cl-form-success span {
    font: 13px/1.6 Manrope, sans-serif;
    color: var(--muted);
  }

  /* ==========================================================================
     STATS BAR
     ========================================================================== */
  .cl-stats {
    position: relative;
    margin-top: -14px;
    z-index: 4;
  }

  .cl-stats > .cl-wrap {
    min-height: 135px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    background: var(--stats-bg);
    border: 1px solid var(--card-border);
    box-shadow: 0 8px 28px rgba(0, 0, 0, 0.1);
    padding: 18px;
    border-radius: 6px;
    transition: background-color 0.25s ease, border-color 0.25s ease;
  }

  .cl-stats > .cl-wrap > div {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 15px 20px;
    border-right: 1px solid var(--card-border);
  }

  .cl-stats > .cl-wrap > div:last-child {
    border-right: none;
  }

  .cl-stats svg {
    width: 36px;
    height: 36px;
    color: var(--gold);
    flex-shrink: 0;
  }

  .cl-stats strong {
    font-size: 24px;
    line-height: 1.1;
    color: var(--ink);
    display: block;
  }

  .cl-stats small {
    font: 10px Manrope, sans-serif;
    color: var(--muted);
    letter-spacing: 0.05em;
    text-transform: uppercase;
    display: block;
    margin-top: 4px;
  }

  /* ==========================================================================
     SECTIONS & HEADINGS
     ========================================================================== */
  .cl-section {
    padding: 95px 0;
    transition: background-color 0.25s ease;
  }

  .cl-heading {
    margin-bottom: 45px;
  }

  .cl-heading.center {
    text-align: center;
  }

  .cl-heading.left {
    text-align: left;
  }

  .cl-heading > span,
  .cl-over {
    color: var(--gold);
    font: bold 11px Manrope, sans-serif;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: inline-block;
  }

  .cl-heading h2 {
    font-size: 42px;
    font-weight: 400;
    margin: 8px 0;
    color: var(--ink);
    transition: color 0.25s ease;
  }

  /* Services Grid */
  .cl-services {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  .cl-services article {
    border: 1px solid var(--card-border);
    background: var(--card);
    text-align: center;
    padding-bottom: 26px;
    border-radius: 6px;
    box-shadow: 0 7px 20px rgba(0, 0, 0, 0.05);
    overflow: hidden;
    transition: all 0.25s ease;
  }

  .cl-services article:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }

  .cl-services img {
    width: 100%;
    height: 245px;
    object-fit: cover;
  }

  .cl-services article > span {
    display: flex;
    width: 54px;
    height: 54px;
    border-radius: 50%;
    background: var(--surface);
    border: 1px solid var(--card-border);
    color: var(--gold);
    margin: -28px auto 14px;
    position: relative;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
  }

  .cl-services article > span svg {
    width: 24px;
    height: 24px;
  }

  .cl-services h3,
  .cl-projects h3 {
    font-size: 22px;
    font-weight: 400;
    margin: 10px 0;
    color: var(--ink);
  }

  .cl-services p {
    font: 14px/1.6 Manrope, sans-serif;
    padding: 0 25px;
    color: var(--muted);
    margin-bottom: 18px;
  }

  .cl-services a {
    color: var(--gold);
    font: bold 11px Manrope, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s ease, gap 0.2s ease;
  }

  .cl-services a:hover {
    color: var(--green);
    gap: 10px;
  }

  .cl-services a svg {
    width: 13px;
    height: 13px;
  }

  /* Promise Section */
  .cl-promise {
    background: var(--subtle-bg);
  }

  .cl-promise > .cl-wrap {
    display: grid;
    grid-template-columns: 0.8fr 0.8fr 1.5fr;
    gap: 45px;
    align-items: center;
  }

  .cl-promise > .cl-wrap > img {
    width: 100%;
    height: 500px;
    object-fit: cover;
    border-radius: 6px;
  }

  .cl-promise h2 {
    font-size: 42px;
    font-weight: 400;
    color: var(--ink);
    margin: 12px 0 16px;
  }

  .cl-promise p {
    font: 15px/1.65 Manrope, sans-serif;
    color: var(--muted);
    margin-bottom: 24px;
  }

  .cl-promise-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .cl-promise-grid article {
    padding: 24px;
    border: 1px solid var(--card-border);
    background: var(--card);
    border-radius: 6px;
    text-align: center;
    min-height: 190px;
    transition: all 0.25s ease;
  }

  .cl-promise-grid svg {
    color: var(--green);
    width: 28px;
    height: 28px;
    margin-bottom: 8px;
  }

  .cl-promise-grid h3 {
    font-size: 17px;
    font-weight: 400;
    color: var(--ink);
    margin: 6px 0;
  }

  .cl-promise-grid p {
    font: 13px/1.5 Manrope, sans-serif;
    color: var(--muted);
    margin: 0;
  }

  /* Recent Work / Projects */
  .cl-projects {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 28px;
  }

  .cl-projects article {
    border: 1px solid var(--card-border);
    background: var(--card);
    border-radius: 6px;
    overflow: hidden;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .cl-projects article:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.1);
  }

  .cl-projects img {
    width: 100%;
    height: 280px;
    object-fit: cover;
  }

  .cl-projects article > div {
    padding: 24px;
  }

  .cl-projects strong {
    display: block;
    font: bold 12px Manrope, sans-serif;
    color: var(--gold);
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 10px;
  }

  .cl-projects p {
    font: 13px/1.6 Manrope, sans-serif;
    color: var(--muted);
    margin-bottom: 12px;
  }

  .cl-projects small {
    font: 11px Manrope, sans-serif;
    color: var(--muted);
    display: block;
    opacity: 0.8;
  }

  /* Step-by-Step Process */
  .cl-process {
    background: var(--cream);
  }

  .cl-steps {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    text-align: center;
    position: relative;
    gap: 20px;
  }

  .cl-steps:before {
    content: "";
    position: absolute;
    top: 25px;
    left: 10%;
    right: 10%;
    border-top: 2px solid var(--card-border);
    z-index: 1;
  }

  .cl-steps article {
    position: relative;
    padding: 0 16px;
    z-index: 2;
  }

  .cl-steps span {
    display: flex;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--green);
    color: #fff;
    align-items: center;
    justify-content: center;
    margin: 0 auto 16px;
    font-weight: bold;
    font-size: 18px;
    box-shadow: 0 4px 12px color-mix(in srgb, var(--green) 30%, transparent);
  }

  .cl-steps h3 {
    font-size: 18px;
    font-weight: 400;
    margin: 8px 0;
    color: var(--ink);
  }

  .cl-steps p {
    font: 13px/1.5 Manrope, sans-serif;
    color: var(--muted);
    margin: 0;
  }

  /* Documentation Section */
  .cl-document {
    background: var(--subtle-bg);
  }

  .cl-document > .cl-wrap {
    display: grid;
    grid-template-columns: 0.8fr 0.65fr 1.5fr;
    gap: 0;
    background: var(--card);
    border: 1px solid var(--card-border);
    border-radius: 8px;
    overflow: hidden;
  }

  .cl-document > .cl-wrap > div:first-child {
    padding: 45px;
  }

  .cl-document h2 {
    font-size: 34px;
    font-weight: 400;
    color: var(--ink);
    margin: 0 0 14px;
  }

  .cl-document p {
    font: 14px/1.6 Manrope, sans-serif;
    color: var(--muted);
    margin-bottom: 24px;
  }

  .cl-document span {
    font: 14px/1.6 Manrope, sans-serif;
    color: var(--ink);
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 12px;
  }

  .cl-document span svg {
    width: 16px;
    height: 16px;
    color: var(--green);
    flex-shrink: 0;
  }

  .cl-document > .cl-wrap > img {
    width: 100%;
    height: 430px;
    object-fit: cover;
  }

  .cl-phone-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 16px;
    padding: 30px;
    align-items: center;
  }

  .cl-phone-grid article {
    text-align: center;
  }

  .cl-phone-grid article > div {
    height: 260px;
    border: 6px solid #202020;
    border-radius: 20px;
    overflow: hidden;
    background: #e2e2e2;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  }

  .cl-phone-grid img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .cl-phone-grid svg {
    width: 40px;
    height: 40px;
    color: var(--gold);
  }

  .cl-phone-grid strong {
    display: block;
    font: 11px Manrope, sans-serif;
    margin-top: 10px;
    color: var(--ink);
  }

  /* Testimonials & Community */
  .cl-testimonials {
    background: var(--subtle-bg);
  }

  .cl-community {
    display: grid;
    grid-template-columns: 260px 330px 1fr;
    gap: 45px;
    align-items: center;
  }

  .cl-community p {
    font: 14px/2.2 Manrope, sans-serif;
    color: var(--ink);
  }

  .cl-community p svg {
    width: 14px;
    height: 14px;
    color: var(--gold);
    display: inline-block;
    vertical-align: middle;
  }

  .cl-map {
    height: 330px;
    background: var(--map-bg);
    color: var(--map-text);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: relative;
    border: 1px solid var(--card-border);
  }

  .cl-map div {
    position: absolute;
    right: 30px;
    top: 70px;
    font-size: 14px;
  }

  .cl-map span {
    position: absolute;
    transform: rotate(-55deg);
    color: #9fb8ac;
    font-size: 12px;
  }

  .cl-quotes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }

  .cl-quotes article {
    background: var(--card);
    border: 1px solid var(--card-border);
    padding: 24px;
    border-radius: 6px;
    min-height: 270px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .cl-quotes b {
    font-size: 38px;
    color: var(--gold);
    line-height: 1;
    font-family: Georgia, serif;
  }

  .cl-quotes p {
    font: 13px/1.6 Manrope, sans-serif;
    color: var(--ink);
    margin: 10px 0;
  }

  .cl-quotes strong {
    font-size: 13px;
    color: var(--gold);
    font-family: Manrope, sans-serif;
  }

  .cl-quotes span {
    display: block;
    color: #d3a23a;
    letter-spacing: 2px;
    margin-top: 8px;
  }

  /* FAQ Accordion */
  .cl-faq > div > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px 40px;
  }

  .cl-faq details {
    border: 1px solid var(--card-border);
    background: var(--card);
    border-radius: 4px;
    padding: 0 18px;
    transition: background-color 0.2s ease, border-color 0.2s ease;
  }

  .cl-faq summary {
    min-height: 52px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font: 14px Manrope, sans-serif;
    font-weight: 700;
    color: var(--ink);
    cursor: pointer;
    list-style: none;
  }

  .cl-faq summary::-webkit-details-marker {
    display: none;
  }

  .cl-faq summary b {
    color: var(--gold);
    font-size: 18px;
    transition: transform 0.2s ease;
  }

  .cl-faq details[open] summary b {
    transform: rotate(45deg);
  }

  .cl-faq details p {
    font: 13px/1.6 Manrope, sans-serif;
    color: var(--muted);
    padding-bottom: 16px;
    margin: 0;
  }

  /* CTA Section */
  .cl-cta {
    background:
      linear-gradient(90deg, rgba(37, 41, 35, 0.85), rgba(37, 41, 35, 0.65)),
      url("/src/assets/optimized/Construction/clearline/bathroom.webp")
        center/cover;
    color: #fff;
    text-align: center;
    padding: 85px 0;
  }

  .cl-cta h2 {
    font-size: 44px;
    font-weight: 400;
    margin: 0;
  }

  .cl-cta p {
    font: 16px Manrope, sans-serif;
    color: #e4e2de;
    margin: 14px 0 28px;
  }

  /* Footer */
  .cl-footer {
    background: var(--footer-bg);
    color: var(--footer-text);
    padding: 60px 0 25px;
    transition: background-color 0.25s ease;
  }

  .cl-footer-grid {
    display: grid;
    grid-template-columns: 1.4fr repeat(4, 1fr);
    gap: 45px;
  }

  .cl-footer .cl-logo {
    color: #fff;
    font-size: 20px;
    margin-bottom: 14px;
  }

  .cl-footer .cl-logo > span {
    font-size: 32px;
  }

  .cl-footer h3 {
    font: 13px Manrope, sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    color: var(--gold);
    margin-bottom: 16px;
  }

  .cl-footer p,
  .cl-footer a {
    display: block;
    color: #d1d5db;
    font: 12px/1.9 Manrope, sans-serif;
    transition: color 0.2s ease;
  }

  .cl-footer a:hover {
    color: #ffffff;
  }

  .cl-footer-grid > div:last-child p {
    display: flex;
    gap: 8px;
    align-items: center;
  }

  .cl-footer p svg {
    width: 14px;
    height: 14px;
    color: var(--gold);
    flex-shrink: 0;
  }

  .cl-copy {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    margin-top: 40px;
    padding-top: 24px;
    font: 11px Manrope, sans-serif;
    color: #9ca3af;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* ==========================================================================
     LIGHT MOOD SPECIFICS
     ========================================================================== */
  html.light .cl-site,
  body.light .cl-site,
  :root.light .cl-site,
  [data-theme-mood="light"] .cl-site,
  :root[data-theme-mood="light"] .cl-site,
  :root[data-theme-active="true"][data-theme-mood="light"] .cl-site {
    --ink: var(--theme-text-primary, #252923);
    --cream: var(--theme-bg-base, #f7f5f0);
    --surface: var(--theme-bg-surface, #ffffff);
    --card: var(--theme-bg-card, #ffffff);
    --card-border: var(--theme-border, #dddddd);
    --muted: var(--theme-text-muted, #5f655d);
    --subtle-bg: var(--theme-bg-card-hover, #f4f2ed);
    --top-bg: var(--theme-bg-surface, #f2f0ec);
    --header-bg: rgba(255, 255, 255, 0.97);
    --header-border: rgba(0, 0, 0, 0.08);
    --stats-bg: var(--theme-bg-card, #ffffff);
    --input-bg: #ffffff;
    --input-border: var(--theme-border, #dddddd);
    --map-bg: #dbe6df;
    --map-text: #557866;
    --footer-bg: #242821;
    --footer-text: #ffffff;
    background-color: var(--cream);
    color: var(--ink);
  }

  /* ==========================================================================
     DARK MOOD SPECIFICS
     ========================================================================== */
  html.dark .cl-site,
  body.dark .cl-site,
  :root.dark .cl-site,
  [data-theme-mood="dark"] .cl-site,
  :root[data-theme-mood="dark"] .cl-site,
  :root[data-theme-active="true"][data-theme-mood="dark"] .cl-site {
    --ink: var(--theme-text-primary, #f2efe9);
    --cream: var(--theme-bg-base, #151814);
    --surface: var(--theme-bg-surface, #1d211b);
    --card: var(--theme-bg-card, #222720);
    --card-border: var(--theme-border, rgba(255, 255, 255, 0.12));
    --muted: var(--theme-text-muted, #9ba398);
    --subtle-bg: var(--theme-bg-surface, #191d17);
    --top-bg: var(--theme-bg-base, #111410);
    --header-bg: rgba(21, 24, 20, 0.96);
    --header-border: rgba(255, 255, 255, 0.1);
    --stats-bg: var(--theme-bg-card, #222720);
    --input-bg: var(--theme-bg-surface, #191c18);
    --input-border: var(--theme-border, rgba(255, 255, 255, 0.18));
    --map-bg: #1c2620;
    --map-text: #78a38a;
    --footer-bg: #0f120e;
    --footer-text: #f2efe9;
    background-color: var(--cream);
    color: var(--ink);
  }

  html.dark .cl-site .cl-veil,
  [data-theme-mood="dark"] .cl-site .cl-veil {
    background: linear-gradient(
      90deg,
      rgba(21, 24, 20, 0.98),
      rgba(21, 24, 20, 0.75) 55%,
      rgba(21, 24, 20, 0.25)
    ) !important;
  }

  html.dark .cl-site .cl-hero h1,
  [data-theme-mood="dark"] .cl-site .cl-hero h1 {
    color: var(--ink) !important;
  }

  html.dark .cl-site .cl-hero p,
  [data-theme-mood="dark"] .cl-site .cl-hero p {
    color: var(--muted) !important;
  }

  html.dark .cl-site .cl-button.outline,
  [data-theme-mood="dark"] .cl-site .cl-button.outline {
    background: transparent !important;
    color: var(--ink) !important;
    border-color: var(--card-border) !important;
  }

  html.dark .cl-site .cl-button.outline:hover,
  [data-theme-mood="dark"] .cl-site .cl-button.outline:hover {
    background: rgba(255, 255, 255, 0.08) !important;
    border-color: var(--green) !important;
    color: var(--green) !important;
  }

  html.dark .cl-site .cl-stats > .cl-wrap,
  [data-theme-mood="dark"] .cl-site .cl-stats > .cl-wrap {
    background: var(--stats-bg) !important;
    border: 1px solid var(--card-border) !important;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4) !important;
  }

  html.dark .cl-site .cl-stats strong,
  [data-theme-mood="dark"] .cl-site .cl-stats strong {
    color: var(--ink) !important;
  }

  html.dark .cl-site .cl-services article,
  [data-theme-mood="dark"] .cl-site .cl-services article,
  html.dark .cl-site .cl-promise-grid article,
  [data-theme-mood="dark"] .cl-site .cl-promise-grid article,
  html.dark .cl-site .cl-projects article,
  [data-theme-mood="dark"] .cl-site .cl-projects article,
  html.dark .cl-site .cl-quotes article,
  [data-theme-mood="dark"] .cl-site .cl-quotes article,
  html.dark .cl-site .cl-faq details,
  [data-theme-mood="dark"] .cl-site .cl-faq details,
  html.dark .cl-site .cl-form,
  [data-theme-mood="dark"] .cl-site .cl-form {
    background: var(--card) !important;
    border-color: var(--card-border) !important;
  }

  html.dark .cl-site .cl-services article > span,
  [data-theme-mood="dark"] .cl-site .cl-services article > span {
    background: var(--surface) !important;
    border-color: var(--card-border) !important;
  }

  html.dark .cl-site .cl-document > .cl-wrap,
  [data-theme-mood="dark"] .cl-site .cl-document > .cl-wrap {
    background: var(--card) !important;
    border-color: var(--card-border) !important;
  }

  html.dark .cl-site .cl-phone-grid article > div,
  [data-theme-mood="dark"] .cl-site .cl-phone-grid article > div {
    background: var(--surface) !important;
    border-color: #383e35 !important;
  }

  html.dark .cl-site .cl-steps:before,
  [data-theme-mood="dark"] .cl-site .cl-steps:before {
    border-top-color: var(--card-border) !important;
  }

  html.dark .cl-site .cl-form input,
  [data-theme-mood="dark"] .cl-site .cl-form input,
  html.dark .cl-site .cl-form select,
  [data-theme-mood="dark"] .cl-site .cl-form select,
  html.dark .cl-site .cl-form textarea,
  [data-theme-mood="dark"] .cl-site .cl-form textarea {
    background: var(--input-bg) !important;
    color: var(--ink) !important;
    border-color: var(--input-border) !important;
  }

  html.dark .cl-site .cl-form select option,
  [data-theme-mood="dark"] .cl-site .cl-form select option {
    background: var(--surface) !important;
    color: var(--ink) !important;
  }

  /* ==========================================================================
     CUSTOM BACKGROUND MODE
     ========================================================================== */
  [data-theme-bg-mode="custom"] .cl-site {
    background-color: var(--theme-bg-base) !important;
  }

  [data-theme-bg-mode="custom"] .cl-site .cl-top {
    background-color: var(--theme-bg-surface, var(--theme-bg-base)) !important;
  }

  [data-theme-bg-mode="custom"] .cl-site .cl-promise,
  [data-theme-bg-mode="custom"] .cl-site .cl-process,
  [data-theme-bg-mode="custom"] .cl-site .cl-document,
  [data-theme-bg-mode="custom"] .cl-site .cl-testimonials {
    background-color: var(--theme-bg-base) !important;
  }

  [data-theme-bg-mode="custom"] .cl-site .cl-stats > .cl-wrap,
  [data-theme-bg-mode="custom"] .cl-site .cl-services article,
  [data-theme-bg-mode="custom"] .cl-site .cl-promise-grid article,
  [data-theme-bg-mode="custom"] .cl-site .cl-projects article,
  [data-theme-bg-mode="custom"] .cl-site .cl-document > .cl-wrap,
  [data-theme-bg-mode="custom"] .cl-site .cl-quotes article,
  [data-theme-bg-mode="custom"] .cl-site .cl-faq details,
  [data-theme-bg-mode="custom"] .cl-site .cl-form {
    background-color: var(--theme-bg-card, var(--theme-bg-surface, var(--theme-bg-base))) !important;
  }

  /* ==========================================================================
     RESPONSIVE BREAKPOINTS
     ========================================================================== */
  @media (max-width: 1100px) {
    .cl-wrap {
      width: min(920px, calc(100% - 40px));
    }
    .cl-nav nav {
      gap: 16px;
    }
    .cl-hero-grid {
      grid-template-columns: 1fr 0.75fr;
      gap: 40px;
    }
    .cl-hero h1 {
      font-size: 50px;
    }
    .cl-stats > .cl-wrap {
      grid-template-columns: repeat(3, 1fr);
    }
    .cl-promise > .cl-wrap {
      grid-template-columns: 1fr 1fr;
    }
    .cl-promise-grid {
      grid-column: 1/-1;
    }
    .cl-document > .cl-wrap {
      grid-template-columns: 1fr 1fr;
    }
    .cl-phone-grid {
      grid-column: 1/-1;
    }
    .cl-community {
      grid-template-columns: 1fr 1fr;
    }
    .cl-quotes {
      grid-column: 1/-1;
    }
    .cl-footer-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 760px) {
    .cl-top {
      display: none;
    }
    .cl-header {
      height: 84px;
    }
    .cl-site section[id],
    .cl-site footer[id],
    #cl-estimate {
      scroll-margin-top: 84px;
    }
    .cl-menu {
      display: block;
      margin-left: auto;
    }
    .cl-nav nav {
      display: none;
      position: absolute;
      top: 84px;
      left: 0;
      right: 0;
      background: var(--surface);
      border-bottom: 2px solid var(--card-border);
      padding: 16px 24px;
      flex-direction: column;
      height: auto;
      gap: 8px;
      box-shadow: 0 16px 32px rgba(0, 0, 0, 0.2);
    }
    .cl-nav nav.open {
      display: flex;
    }
    .cl-nav nav a {
      min-height: 44px;
      width: 100%;
      padding: 10px 14px;
    }
    .cl-nav nav a.active:after {
      display: none;
    }
    .cl-nav nav a.active {
      border-left: 3px solid var(--gold);
    }
    .cl-nav > .cl-button {
      display: none;
    }
    .cl-logo {
      font-size: 20px;
    }
    .cl-logo > span {
      font-size: 30px;
    }
    .cl-hero {
      height: auto;
      min-height: 1050px;
    }
    .cl-hero-grid {
      grid-template-columns: 1fr;
      padding: 65px 0;
    }
    .cl-hero h1 {
      font-size: 42px;
    }
    .cl-stats {
      margin: 0;
      padding: 20px 0;
    }
    .cl-stats > .cl-wrap,
    .cl-services,
    .cl-projects {
      grid-template-columns: 1fr;
    }
    .cl-promise > .cl-wrap,
    .cl-document > .cl-wrap,
    .cl-community {
      grid-template-columns: 1fr;
    }
    .cl-promise > .cl-wrap > img {
      height: 350px;
    }
    .cl-steps {
      grid-template-columns: 1fr 1fr;
      gap: 35px;
    }
    .cl-steps:before {
      display: none;
    }
    .cl-steps article:last-child {
      grid-column: 1/-1;
    }
    .cl-phone-grid {
      grid-template-columns: 1fr 1fr;
    }
    .cl-phone-grid article > div {
      height: 220px;
    }
    .cl-faq > div > div {
      grid-template-columns: 1fr;
    }
    .cl-footer-grid {
      grid-template-columns: 1fr 1fr;
    }
    .cl-section {
      padding: 68px 0;
    }
    .cl-heading h2 {
      font-size: 34px;
    }
  }

  @media (max-width: 480px) {
    .cl-wrap {
      width: calc(100% - 30px);
    }
    .cl-hero h1 {
      font-size: 36px;
    }
    .cl-actions {
      flex-direction: column;
    }
    .cl-stats > .cl-wrap,
    .cl-promise-grid,
    .cl-steps,
    .cl-phone-grid,
    .cl-quotes,
    .cl-footer-grid {
      grid-template-columns: 1fr;
    }
    .cl-steps article:last-child {
      grid-column: auto;
    }
    .cl-services img,
    .cl-projects img {
      height: 220px;
    }
    .cl-form {
      padding: 24px;
    }
  }
`;

export default ClearlineRemodeling;
