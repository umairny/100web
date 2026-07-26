import {
  ArrowRight,
  Award,
  BadgeCheck,
  Bath,
  Building2,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  FileText,
  Hammer,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import "./ClearlineRemodeling.css";

const img = "/src/assets/images/Construction/clearline";
const links = [
  ["Services", "cl-services"],
  ["Our Work", "cl-work"],
  ["Process", "cl-process"],
  ["About Us", "cl-about"],
  ["Resources", "cl-faq"],
] as const;
const services = [
  [
    "Kitchen Remodeling",
    "Custom kitchens designed for the way you live.",
    "hero.png",
    Home,
  ],
  [
    "Bathroom Remodeling",
    "Spa-like bathrooms with style and function.",
    "bathroom.png",
    Bath,
  ],
  [
    "Custom Cabinetry",
    "Built-in storage that is beautiful and smart.",
    "kitchen.png",
    Building2,
  ],
  [
    "Countertops & Tile",
    "Premium surfaces and expert installation.",
    "planning.png",
    Sparkles,
  ],
  [
    "Shower & Tub Upgrades",
    "Modern upgrades for comfort and value.",
    "bathroom.png",
    Bath,
  ],
  [
    "Whole-Home Updates",
    "Cohesive updates that elevate every room.",
    "kitchen.png",
    Home,
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
  useEffect(() => {
    const onScroll = () => {
      let next = "cl-home";
      nav.forEach(([, id]) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= window.scrollY + 170) next = id;
      });
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 8)
        next = "cl-contact";
      setActive(next);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);
  return (
    <main className="cl-site" id="cl-home">
      <div className="cl-top">
        <div className="cl-wrap">
          <span>
            <MapPin />
            Proudly Serving Greater Seattle &amp; Eastside
          </span>
          <span>
            <ShieldCheck />
            Licensed &amp; Insured
          </span>
          <span>
            <BadgeCheck />
            Financing Available
          </span>
          <a href="tel:4255550198">
            <Phone />
            (425) 555-0198
          </a>
        </div>
      </div>
      <header className="cl-header">
        <div className="cl-wrap cl-nav">
          <Logo />
          <button onClick={() => setOpen(!open)} className="cl-menu">
            {open ? <X /> : <Menu />}
          </button>
          <nav className={open ? "open" : ""}>
            {nav.slice(1, -1).map(([label, id]) => (
              <a
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={() => setOpen(false)}
                key={id}
              >
                {label}
                {(id === "cl-services" || id === "cl-faq") && <ChevronDown />}
              </a>
            ))}
          </nav>
          <a className="cl-button small" href="#cl-estimate">
            Get a Quote
          </a>
        </div>
      </header>
      <section className="cl-hero">
        <img src={`${img}/hero.png`} alt="Elegant white kitchen remodel" />
        <div className="cl-veil" />
        <div className="cl-wrap cl-hero-grid">
          <div>
            <h1>Kitchen &amp; Bath Transformations That Feel Like Home</h1>
            <p>
              Thoughtful design. Quality craftsmanship.
              <br />A clear, organized process from start to finish.
            </p>
            <div className="cl-actions">
              <a className="cl-button" href="#cl-estimate">
                Get a Quote
              </a>
              <a className="cl-button outline" href="#cl-work">
                View Our Work
              </a>
            </div>
          </div>
          <Estimate />
        </div>
      </section>
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
                <a href="#cl-estimate">
                  Learn More <ArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="cl-about" className="cl-section cl-promise">
        <div className="cl-wrap">
          <img src={`${img}/bathroom.png`} alt="Finished luxury bathroom" />
          <div>
            <span className="cl-over">Why Homeowners Choose Us</span>
            <h2>A Better Remodeling Experience</h2>
            <p>
              We believe a great remodel is about more than the final
              result—it's about a smooth, respectful experience from day one.
            </p>
            <a className="cl-button" href="#cl-process">
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
      <section id="cl-work" className="cl-section">
        <div className="cl-wrap">
          <Heading
            over="Recent Transformations"
            title="Real Projects. Real Results."
          />
          <div className="cl-projects">
            {[
              ["Modern Farmhouse Kitchen", "Bellevue, WA", "kitchen.png"],
              ["Spa-Inspired Primary Bath", "Kirkland, WA", "bathroom.png"],
              ["Timeless White Kitchen", "Redmond, WA", "hero.png"],
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
            src={`${img}/planning.png`}
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
                    <img src={`${img}/bathroom.png`} alt="" />
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
                  and timeline.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="cl-cta">
        <div className="cl-wrap">
          <h2>Ready to Transform Your Home?</h2>
          <p>Let's create a space you'll love for years to come.</p>
          <a className="cl-button" href="#cl-estimate">
            Get Your Free Estimate
          </a>
        </div>
      </section>
      <footer id="cl-contact" className="cl-footer">
        <div className="cl-wrap cl-footer-grid">
          <div>
            <Logo />
            <p>
              Kitchen and bath remodeling with a clear process, beautiful
              design, and quality craftsmanship.
            </p>
          </div>
          <Footer
            title="Navigation"
            items={[
              "Home",
              "About Us",
              "Our Process",
              "Our Work",
              "Resources",
              "Contact Us",
            ]}
          />
          <Footer title="Services" items={services.map((x) => x[0])} />
          <Footer
            title="Service Areas"
            items={[
              "Bellevue, WA",
              "Kirkland, WA",
              "Redmond, WA",
              "Bothell, WA",
              "Sammamish, WA",
            ]}
          />
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
          © 2025 Clearline Remodeling. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
function Logo() {
  return (
    <a href="#cl-home" className="cl-logo">
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
  return (
    <form id="cl-estimate" className="cl-form">
      <h2>Get Your Free Estimate</h2>
      <p>Tell us about your project and we'll be in touch.</p>
      <input placeholder="Full Name" />
      <input placeholder="Phone Number" />
      <input placeholder="Email Address" />
      <select defaultValue="">
        <option value="" disabled>
          Project Type
        </option>
        <option>Kitchen Remodeling</option>
        <option>Bathroom Remodeling</option>
      </select>
      <textarea placeholder="Tell us about your project" />
      <button type="button">Request My Estimate</button>
      <small>
        <ShieldCheck />
        100% Private. No Spam. Ever.
      </small>
    </form>
  );
}
function Footer({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <h3>{title}</h3>
      {items.map((x) => (
        <a href="#cl-home" key={x}>
          {x}
        </a>
      ))}
    </div>
  );
}
