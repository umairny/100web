import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  FileText,
  Hammer,
  HardHat,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  ShieldCheck,
  Star,
  Store,
  Users,
  Wrench,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const root = "/src/assets/optimized/Construction/irongate";
const nav = [
  ["Services", "ig-services"],
  ["Projects", "ig-projects"],
  ["About", "ig-about"],
  ["Process", "ig-process"],
  ["Resources", "ig-faq"],
  ["Contact", "ig-contact"],
] as const;
const services = [
  [
    "Tenant Improvements",
    "Improve, reconfigure, and modernize existing spaces.",
  ],
  ["Office Buildouts", "Functional, inspiring workplaces that attract talent."],
  [
    "Retail Buildouts",
    "High-impact environments that enhance customer experience.",
  ],
  ["Medical / Clinic Interiors", "Patient-centered design built to code."],
  [
    "Pre-Construction Planning",
    "Budgets, scheduling, value engineering, and risk mitigation.",
  ],
  ["Project Management", "Transparent communication and expert oversight."],
] as const;
const projects = [
  [
    "Ignite Technologies",
    "20,000 SF Office Buildout",
    "hero.webp",
    "Dallas, TX",
  ],
  ["Luxe Salon Suites", "3,200 SF Retail Buildout", "retail.webp", "Plano, TX"],
  [
    "North Dallas Orthodontics",
    "4,500 SF Medical Buildout",
    "medical.webp",
    "Dallas, TX",
  ],
  [
    "Summit Financial",
    "12,000 SF Office Buildout",
    "office.webp",
    "Irving, TX",
  ],
] as const;
const stats = [
  [Building2, "250+", "Projects Completed"],
  [Users, "125+", "Happy Clients"],
  [CalendarDays, "98%", "On-Time Delivery"],
  [HardHat, "1.2M+", "SF Built"],
  [Award, "15+", "Years of Experience"],
] as const;
const serviceIcons = [
  Building2,
  MessageSquare,
  Store,
  ShieldCheck,
  ClipboardCheck,
  Users,
];
const trustIcons = [ShieldCheck, BadgeCheck, HardHat, Clock3, MessageSquare];

export function IronGateCommercial() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("");
  useEffect(() => {
    const update = () => {
      let x = "";
      if (window.scrollY >= 250) {
        nav.forEach(([, id]) => {
          const e = document.getElementById(id);
          if (e && e.offsetTop <= window.scrollY + 170) x = id;
        });
        if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 30) {
          x = "ig-contact";
        }
      }
      setActive(x);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  return (
    <main className="ig-site" id="ig-home">
      <style>{css}</style>
      <div className="ig-top">
        <div className="ig-wrap">
          <span>
            <BadgeCheck />
            Tenant Improvements Specialists
          </span>
          <span>
            <Clock3 />
            On Time. On Budget. Built Right.
          </span>
          <span>
            <ShieldCheck />
            Safety First. Quality Always.
          </span>
          <a href="tel:2145550198">
            <Phone />
            (214) 555-0198
          </a>
          <a href="mailto:info@irongatecommercial.com">
            <Mail />
            info@irongatecommercial.com
          </a>
        </div>
      </div>
      <header className="ig-header">
        <div className="ig-wrap ig-nav">
          <Logo />
          <button className="ig-menu" onClick={() => setMenu(!menu)}>
            {menu ? <X /> : <Menu />}
          </button>
          <nav className={menu ? "open" : ""}>
            {nav.map(([label, id]) => (
              <a
                key={id}
                href={`#${id}`}
                className={active === id ? "active" : ""}
                onClick={() => setMenu(false)}
              >
                {label}
                {(id === "ig-services" || id === "ig-faq") && <ChevronDown />}
              </a>
            ))}
          </nav>
          <a className="ig-button small" href="#ig-quote">
            Request a Quote
          </a>
        </div>
      </header>
      <section className="ig-hero">
        <img
          src={`${root}/hero.webp`}
          alt="Modern commercial office reception"
        />
        <div className="ig-shade" />
        <div className="ig-wrap ig-hero-grid">
          <div className="ig-hero-copy">
            <span className="ig-hero-label">
              Commercial Construction • North Texas
            </span>
            <h1>
              Built for Business.
              <br />
              Designed for Impact.
            </h1>
            <h2>Tenant Improvements and Buildouts</h2>
            <p>
              High-performance commercial spaces that elevate your brand,
              optimize operations, and get you open—on time and on budget.
            </p>
            <div className="ig-hero-actions">
              <a className="ig-button" href="#ig-quote">
                Plan Your Project <ArrowRight />
              </a>
              <a className="ig-hero-link" href="#ig-projects">
                Explore Our Work <ArrowRight />
              </a>
            </div>
            <div className="ig-hero-proof">
              <span>
                <strong>250+</strong>Completed Projects
              </span>
              <span>
                <strong>98%</strong>On-Time Delivery
              </span>
              <span>
                <strong>15+</strong>Years of Experience
              </span>
            </div>
          </div>
          <aside className="ig-feature-card">
            <span>Featured Project</span>
            <h3>Summit Financial Headquarters</h3>
            <p>
              12,000 SF office buildout delivered on schedule in Irving, Texas.
            </p>
            <div>
              <b>Office</b>
              <b>Design-Build</b>
              <b>Completed</b>
            </div>
            <a href="#ig-projects">
              View Case Study <ArrowRight />
            </a>
          </aside>
        </div>
      </section>
      <section className="ig-stats">
        <div className="ig-wrap">
          {stats.map(([Icon, a, b]) => (
            <div key={b}>
              <Icon />
              <span>
                <strong>{a}</strong>
                <small>{b}</small>
              </span>
            </div>
          ))}
        </div>
      </section>
      <section id="ig-quote" className="ig-section ig-quote-section">
        <div className="ig-wrap ig-quote-layout">
          <div>
            <span>Start With Clarity</span>
            <h2>Tell us about your commercial project.</h2>
            <p>
              Share your goals, location, and timeline. Our pre-construction
              team will review the details and respond within one business day.
            </p>
            <div className="ig-quote-benefits">
              <b>
                <BadgeCheck />
                Clear scope guidance
              </b>
              <b>
                <Clock3 />
                Fast response
              </b>
              <b>
                <ShieldCheck />
                No-pressure consultation
              </b>
            </div>
          </div>
          <Quote />
        </div>
      </section>
      <section id="ig-services" className="ig-section">
        <div className="ig-wrap ig-row">
          <Intro
            over="Our Services"
            title="End-to-End Solutions for Commercial Spaces"
            link="View All Services"
          />
          <div className="ig-service-grid">
            {services.map(([a, b], i) => {
              const Icon = serviceIcons[i];
              return (
                <article key={a}>
                  <Icon />
                  <h3>{a}</h3>
                  <p>{b}</p>
                  <a href="#ig-quote">
                    Learn More <ArrowRight />
                  </a>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section id="ig-projects" className="ig-section ig-project-section">
        <div className="ig-wrap ig-row">
          <Intro
            over="Featured Work"
            title="Spaces We've Built with Purpose"
            link="View All Projects"
          />
          <div className="ig-projects">
            {projects.map(([a, b, p, place]) => (
              <article key={a}>
                <img src={`${root}/${p}`} alt={a} />
                <div>
                  <h3>{a}</h3>
                  <p>{b}</p>
                  <small>{place}</small>
                  <a href="#ig-projects">
                    View Case Study <ArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="ig-about" className="ig-section ig-trust">
        <div className="ig-wrap ig-row">
          <Intro over="Built on Trust" title="Credentials You Can Count On" />
          <div className="ig-trust-grid">
            {[
              [
                "Licensed & Bonded",
                "Fully licensed and bonded for commercial construction.",
              ],
              [
                "Fully Insured",
                "General liability and workers compensation coverage.",
              ],
              [
                "Safety First",
                "OSHA-compliant practices and proactive jobsite safety.",
              ],
              [
                "On-Time Delivery",
                "Proven track record of schedules met and deadlines kept.",
              ],
              [
                "Clear Communication",
                "Consistent updates and transparent communication.",
              ],
            ].map(([a, b], i) => {
              const Icon = trustIcons[i];
              return (
                <article key={a}>
                  <Icon />
                  <h3>{a}</h3>
                  <p>{b}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
      <section id="ig-process" className="ig-section ig-process">
        <div className="ig-wrap ig-row">
          <Intro
            over="Our Process"
            title="A Proven Process. Predictable Results. Every Time."
          />
          <div className="ig-steps">
            {[
              [
                "Consultation",
                "We learn about your goals, space, and requirements.",
              ],
              [
                "Walkthrough",
                "We assess the space and identify opportunities.",
              ],
              [
                "Estimate",
                "A detailed, transparent proposal with clear pricing.",
              ],
              [
                "Planning",
                "Scope, schedule, and design details are finalized.",
              ],
              [
                "Build",
                "Our team executes with precision and minimal disruption.",
              ],
              [
                "Final Handoff",
                "A high-quality space ready for your business.",
              ],
            ].map(([a, b], i) => (
              <article key={a}>
                <span>0{i + 1}</span>
                <h3>{a}</h3>
                <p>{b}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="ig-section ig-visibility">
        <div className="ig-wrap">
          <div>
            <span>Real-Time Visibility</span>
            <h2>
              Stay Informed.
              <br />
              Every Step of the Way.
            </h2>
            <p>
              Our technology keeps your project on track and you in the loop.
            </p>
            <a className="ig-outline" href="#ig-contact">
              See How We Communicate
            </a>
          </div>
          <Dashboard />
          <ul>
            {[
              "Daily Logs & Progress Photos",
              "Schedule & Milestone Tracking",
              "Document Management",
              "Change Order Transparency",
              "Mobile Access for Your Team",
            ].map((x) => (
              <li key={x}>
                <CheckCircle2 />
                {x}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="ig-section ig-location">
        <div className="ig-wrap">
          <div>
            <span>Where We Build</span>
            <h2>Proudly Serving North Texas</h2>
            <p>Local expertise. Fast response. Strong relationships.</p>
          </div>
          <div className="ig-map">
            <b>Dallas</b>
            {[
              "Fort Worth",
              "Irving",
              "Plano",
              "Frisco",
              "McKinney",
              "Arlington",
            ].map((x) => (
              <i key={x}>{x}</i>
            ))}
          </div>
          <div>
            <span>Service Areas</span>
            <div className="ig-areas">
              {[
                "Dallas",
                "Irving",
                "Richardson",
                "Fort Worth",
                "Arlington",
                "Lewisville",
                "Plano",
                "Garland",
                "Allen",
                "Frisco",
                "Denton",
                "Mesquite",
                "McKinney",
                "Carrollton",
              ].map((x) => (
                <b key={x}>{x}</b>
              ))}
            </div>
          </div>
          <img src={`${root}/office.webp`} alt="Dallas commercial office" />
        </div>
      </section>
      <section className="ig-section ig-testimonials">
        <div className="ig-wrap ig-row">
          <Intro
            over="What Our Clients Say"
            title="Built Relationships. Proven Results."
          />
          <div className="ig-quotes">
            {[
              "IronGate delivered our new office ahead of schedule and exceeded our expectations.",
              "Our retail buildout looks amazing and has already elevated the customer experience.",
              "From planning to final walkthrough, the process was seamless.",
              "Reliable, transparent, and results-driven. IronGate is our go-to partner.",
            ].map((x, i) => (
              <article key={x}>
                <b>“</b>
                <p>{x}</p>
                <strong>
                  —{" "}
                  {
                    [
                      "Jason Miller",
                      "Amy Harrison",
                      "Dr. Kevin Patel",
                      "Mark Thompson",
                    ][i]
                  }
                </strong>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="ig-faq" className="ig-section ig-faq">
        <div className="ig-wrap ig-row">
          <Intro over="FAQ" title="Got Questions? We've Got Answers." />
          <div>
            {[
              "How long does a typical tenant improvement take?",
              "Do you work in occupied spaces?",
              "Can you help with design?",
              "How do you handle change orders?",
              "What makes IronGate different?",
              "Are you licensed and insured?",
            ].map((q) => (
              <details key={q}>
                <summary>
                  {q}
                  <b>+</b>
                </summary>
                <p>
                  Every project is planned around your business, schedule, and
                  operational needs.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="ig-cta">
        <div className="ig-wrap">
          <div>
            <h2>Let's Build Your Vision.</h2>
            <p>Ready to get started? We're here to help.</p>
          </div>
          <a href="tel:2145550198">
            <Phone />
            <span>
              Call Us Today<strong>(214) 555-0198</strong>
            </span>
          </a>
          <a className="ig-button" href="#ig-quote">
            Request a Quote <ArrowRight />
          </a>
        </div>
      </section>
      <footer id="ig-contact" className="ig-footer">
        <div className="ig-wrap ig-footer-grid">
          <div>
            <Logo />
            <p>
              We build high-performance commercial spaces that help businesses
              grow.
            </p>
          </div>
          <Footer title="Services" items={services.map((x) => x[0])} />
          <Footer
            title="Company"
            items={["About Us", "Our Process", "Projects", "Safety", "Careers"]}
          />
          <Footer
            title="Resources"
            items={[
              "Blog",
              "Case Studies",
              "FAQs",
              "Checklist",
              "Design Guide",
            ]}
          />
          <div>
            <h3>Contact</h3>
            <p>
              <MapPin />
              5900 Legacy Dr, Suite 290
              <br />
              Plano, TX 75024
            </p>
            <p>
              <Phone />
              (214) 555-0198
            </p>
            <p>
              <Mail />
              info@irongatecommercial.com
            </p>
          </div>
        </div>
        <div className="ig-wrap ig-copy">
          © 2025 IronGate Commercial. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
function Logo() {
  return (
    <a href="#ig-home" className="ig-logo">
      <span>▰</span>
      <strong>
        IRONGATE<small>COMMERCIAL</small>
      </strong>
    </a>
  );
}
function Quote() {
  return (
    <form className="ig-form">
      <h2>Request a Quote</h2>
      <input placeholder="Full Name" />
      <input placeholder="Company" />
      <input placeholder="Email Address" />
      <input placeholder="Phone Number" />
      <select defaultValue="">
        <option value="" disabled>
          Project Type
        </option>
        <option>Office Buildout</option>
        <option>Retail Buildout</option>
      </select>
      <input placeholder="Project Location" />
      <textarea placeholder="Project Details" />
      <button type="button">Get My Quote</button>
      <small>We typically respond within 1 business day.</small>
    </form>
  );
}
function Intro({
  over,
  title,
  link,
}: {
  over: string;
  title: string;
  link?: string;
}) {
  return (
    <div className="ig-intro">
      <span>{over}</span>
      <h2>{title}</h2>
      {link && (
        <a href="#ig-projects">
          {link}
          <ArrowRight />
        </a>
      )}
    </div>
  );
}
function Dashboard() {
  return (
    <div className="ig-dashboard">
      <aside>
        {[
          "Overview",
          "Schedule",
          "Daily Logs",
          "Photos",
          "Documents",
          "Reports",
          "Team",
        ].map((x) => (
          <span key={x}>
            <FileText />
            {x}
          </span>
        ))}
      </aside>
      <main>
        <h3>Project Dashboard</h3>
        <small>Summit Financial Office Buildout</small>
        <div>
          <b>Overall Progress</b>
          <strong>64%</strong>
        </div>
        <progress value="64" max="100" />
        <section>
          <span>
            Schedule<b>On Track</b>
          </span>
          <span>
            Budget<b>On Track</b>
          </span>
          <span>
            Safety<b>Zero Incidents</b>
          </span>
        </section>
        <img src={`${root}/office.webp`} alt="Project progress" />
      </main>
    </div>
  );
}
function Footer({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <h3>{title}</h3>
      {items.map((x) => (
        <a href="#ig-home" key={x}>
          {x}
        </a>
      ))}
    </div>
  );
}

export default IronGateCommercial;

const css = `
  /* IronGate Commercial Construction - Theme Engine & Responsive Styles */

  .ig-site {
    --navy: #05243b;
    --dark: #031827;
    --orange: var(--theme-accent-primary, #e77700);
    --orange-hover: var(--theme-accent-primary-hover, #f38500);
    --orange-glow: var(--theme-accent-glow, rgba(231, 119, 0, 0.28));
    --orange-contrast: var(--theme-accent-contrast, #ffffff);

    --ig-bg: #ffffff;
    --ig-bg-alt: #f5f6f7;
    --ig-card-bg: #ffffff;
    --ig-card-border: #dce1e5;
    --ig-text: #0a2031;
    --ig-text-muted: #506270;
    --ig-header-bg: rgba(255, 255, 255, 0.98);
    --ig-header-text: #112433;
    --ig-header-border: rgba(0, 0, 0, 0.06);
    --ig-header-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
    --ig-top-bg: var(--dark);
    --ig-stats-bg: #3d5262;
    --ig-quote-gradient: linear-gradient(135deg, #eef2f5, #ffffff 55%, #f1f4f6);
    --ig-quote-form-bg: #ffffff;
    --ig-quote-form-border: #d4dde3;
    --ig-quote-form-shadow: 0 14px 38px rgba(7, 35, 55, 0.15);
    --ig-input-bg: #f7f9fa;
    --ig-input-border: #ced8df;
    --ig-input-text: #263d4e;
    --ig-dash-bg: #ffffff;
    --ig-dash-text: #0a2031;
    --ig-dash-aside-bg: #09283f;
    --ig-map-bg: #e4ebef;
    --ig-faq-border: #d4dae0;
    --ig-footer-bg: var(--dark);

    color: var(--ig-text);
    background-color: var(--ig-bg);
    font: 17px 'Manrope', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    overflow-x: clip;
    transition: background-color 0.25s ease, color 0.25s ease;
  }

  /* Preset accent overrides */
  :root[data-theme-preset]:not([data-theme-preset="original"]) .ig-site,
  [data-theme-preset]:not([data-theme-preset="original"]) .ig-site,
  .ig-site[data-theme-preset]:not([data-theme-preset="original"]) {
    --orange: var(--theme-accent-primary, #e77700);
    --orange-hover: var(--theme-accent-primary-hover, #f38500);
    --orange-glow: var(--theme-accent-glow, rgba(231, 119, 0, 0.28));
    --orange-contrast: var(--theme-accent-contrast, #ffffff);
  }

  /* Dark Mood Adaptations */
  :root[data-theme-mood="dark"] .ig-site,
  [data-theme-mood="dark"] .ig-site,
  html.dark .ig-site,
  :root.dark .ig-site,
  body.dark .ig-site,
  [data-theme-bg-mode="custom"] .ig-site {
    --navy: #0e2942;
    --dark: #04121d;
    --ig-bg: var(--theme-bg-base, #071726);
    --ig-bg-alt: var(--theme-bg-surface-dark, #0b1f33);
    --ig-card-bg: var(--theme-bg-card-dark, #0e273f);
    --ig-card-border: rgba(255, 255, 255, 0.1);
    --ig-text: var(--theme-text-primary, #f1f5f9);
    --ig-text-muted: #94a3b8;
    --ig-header-bg: rgba(7, 23, 38, 0.96);
    --ig-header-text: #f8fafc;
    --ig-header-border: rgba(255, 255, 255, 0.08);
    --ig-header-shadow: 0 4px 25px rgba(0, 0, 0, 0.45);
    --ig-top-bg: #030e17;
    --ig-stats-bg: #0d253a;
    --ig-quote-gradient: linear-gradient(135deg, #071726, #0c2338 55%, #071726);
    --ig-quote-form-bg: #0c243a;
    --ig-quote-form-border: rgba(255, 255, 255, 0.12);
    --ig-quote-form-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
    --ig-input-bg: #061625;
    --ig-input-border: #1d364d;
    --ig-input-text: #f8fafc;
    --ig-dash-bg: #0c243a;
    --ig-dash-text: #f8fafc;
    --ig-dash-aside-bg: #061828;
    --ig-map-bg: #0b1f33;
    --ig-faq-border: rgba(255, 255, 255, 0.1);
    --ig-footer-bg: #04121d;
  }

  /* Light Mood overrides */
  :root[data-theme-mood="light"] .ig-site,
  [data-theme-mood="light"] .ig-site,
  html.light .ig-site,
  :root.light .ig-site,
  body.light .ig-site {
    --ig-bg: #ffffff;
    --ig-bg-alt: #f5f6f7;
    --ig-card-bg: #ffffff;
    --ig-card-border: #dce1e5;
    --ig-text: #0a2031;
    --ig-text-muted: #506270;
    --ig-header-bg: rgba(255, 255, 255, 0.98);
    --ig-header-text: #112433;
    --ig-header-border: rgba(0, 0, 0, 0.06);
    --ig-header-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }

  .ig-site * {
    box-sizing: border-box;
  }
  .ig-site a {
    text-decoration: none;
    color: inherit;
  }
  .ig-wrap {
    width: min(1480px, calc(100% - 80px));
    margin: auto;
  }
  .ig-top {
    height: 44px;
    background: var(--ig-top-bg);
    color: #fff;
    font-size: 11px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
    transition: background 0.25s ease;
  }
  .ig-top > .ig-wrap {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .ig-top span,
  .ig-top a {
    display: flex;
    align-items: center;
    gap: 7px;
    color: #fff;
  }
  .ig-top svg {
    width: 14px;
    color: var(--orange);
    transition: color 0.25s ease;
  }
  .ig-header {
    height: 104px;
    position: sticky;
    top: 0;
    z-index: 100;
    background: var(--ig-header-bg);
    box-shadow: var(--ig-header-shadow);
    border-bottom: 1px solid var(--ig-header-border);
    transition: background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
  }
  .ig-nav {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 40px;
  }
  .ig-logo {
    display: flex;
    align-items: center;
    gap: 12px;
    color: var(--ig-header-text);
    font-size: 25px;
    letter-spacing: 2px;
    transition: color 0.25s ease;
  }
  .ig-logo > span {
    font-size: 40px;
    color: var(--orange);
    transform: rotate(90deg);
    transition: color 0.25s ease;
  }
  .ig-logo small {
    display: block;
    font-size: 10px;
    letter-spacing: 5px;
    color: var(--ig-text-muted);
  }
  .ig-nav nav {
    margin-left: auto;
    height: 100%;
    display: flex;
    gap: 42px;
  }
  .ig-nav nav a {
    height: 100%;
    display: flex;
    align-items: center;
    gap: 4px;
    color: var(--ig-header-text);
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 900;
    position: relative;
    transition: color 0.2s ease;
  }
  .ig-nav nav a:hover {
    color: var(--orange);
  }
  .ig-nav nav a svg {
    width: 13px;
  }
  .ig-nav nav a.active {
    color: var(--orange);
  }
  .ig-nav nav a.active:after {
    content: "";
    position: absolute;
    bottom: 17px;
    left: 0;
    right: 0;
    height: 3px;
    background: var(--orange);
  }
  .ig-button {
    min-height: 58px;
    padding: 0 32px;
    background: var(--orange);
    color: var(--orange-contrast) !important;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 13px;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    box-shadow: 0 4px 14px var(--orange-glow);
    transition: all 0.2s ease;
  }
  .ig-button:hover {
    background: var(--orange-hover);
    transform: translateY(-2px);
    box-shadow: 0 6px 20px var(--orange-glow);
  }
  .ig-button.small {
    min-height: 50px;
  }
  .ig-menu {
    display: none;
    border: 0;
    background: none;
    color: var(--ig-header-text);
    cursor: pointer;
  }
  .ig-site section[id],
  .ig-site footer[id],
  #ig-quote {
    scroll-margin-top: 104px;
  }
  .ig-hero {
    height: 780px;
    position: relative;
    color: #fff;
    background: var(--dark);
  }
  .ig-hero > img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .ig-shade {
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      rgba(3, 24, 39, 0.98),
      rgba(3, 24, 39, 0.76) 38%,
      rgba(3, 24, 39, 0.1) 70%
    );
  }
  .ig-hero-grid {
    height: 100%;
    position: relative;
    display: grid;
    grid-template-columns: minmax(0, 1fr) 390px;
    gap: 70px;
    align-items: center;
  }
  .ig-hero-copy {
    max-width: 850px;
  }
  .ig-hero-label {
    display: inline-flex;
    border: 1px solid rgba(255, 255, 255, 0.32);
    background: rgba(255, 255, 255, 0.08);
    padding: 10px 15px;
    color: #fff;
    font-size: 11px;
    font-weight: 900;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }
  .ig-hero h1 {
    font-size: 66px;
    line-height: 1.03;
    text-transform: uppercase;
    margin: 18px 0 0;
    max-width: 750px;
    color: #ffffff;
  }
  .ig-hero h2 {
    font-size: 25px;
    color: var(--orange);
    margin: 24px 0 16px;
    transition: color 0.25s ease;
  }
  .ig-hero p {
    max-width: 650px;
    line-height: 1.7;
    font-size: 19px;
    color: #e2e8f0;
  }
  .ig-hero-actions {
    display: flex;
    align-items: center;
    gap: 28px;
    margin-top: 32px;
  }
  .ig-hero-link {
    display: inline-flex;
    align-items: center;
    gap: 9px;
    color: #fff;
    font-size: 13px;
    font-weight: 900;
    text-transform: uppercase;
    border-bottom: 2px solid var(--orange);
    padding: 12px 0;
    transition: border-color 0.25s ease, color 0.2s ease;
  }
  .ig-hero-link:hover {
    color: var(--orange);
  }
  .ig-hero-link svg {
    width: 17px;
  }
  .ig-hero-proof {
    display: flex;
    gap: 42px;
    margin-top: 42px;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 25px;
  }
  .ig-hero .ig-hero-proof span {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 3px;
    margin: 0;
    font-size: 10px;
    color: #cad5dc;
    text-transform: uppercase;
  }
  .ig-hero .ig-hero-proof strong {
    display: block;
    margin: 0;
    color: #fff;
    font-size: 25px;
    line-height: 1;
  }
  .ig-feature-card {
    align-self: end;
    margin-bottom: 58px;
    background: rgba(3, 24, 39, 0.92);
    border-left: 4px solid var(--orange);
    padding: 30px;
    color: #fff;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.35);
    backdrop-filter: blur(10px);
    transition: border-color 0.25s ease;
  }
  .ig-feature-card > span {
    color: var(--orange);
    font-size: 10px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    transition: color 0.25s ease;
  }
  .ig-feature-card h3 {
    font-size: 25px;
    line-height: 1.15;
    margin: 13px 0;
    color: #fff;
  }
  .ig-feature-card p {
    font-size: 13px;
    line-height: 1.6;
    color: #cbd5e1;
  }
  .ig-feature-card > div {
    display: flex;
    flex-wrap: wrap;
    gap: 7px;
    margin: 18px 0;
  }
  .ig-feature-card b {
    background: #173a53;
    padding: 7px 9px;
    font-size: 9px;
    text-transform: uppercase;
    color: #e2e8f0;
  }
  .ig-feature-card a {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #fff;
    font-size: 11px;
    font-weight: 900;
    text-transform: uppercase;
    transition: color 0.2s ease;
  }
  .ig-feature-card a:hover {
    color: var(--orange);
  }
  .ig-feature-card a svg {
    width: 15px;
  }
  .ig-stats {
    background: var(--ig-stats-bg);
    color: #fff;
    transition: background 0.25s ease;
  }
  .ig-stats > .ig-wrap {
    min-height: 135px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  .ig-stats > .ig-wrap > div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-right: 1px solid rgba(255, 255, 255, 0.15);
  }
  .ig-stats > .ig-wrap > div:last-child {
    border-right: none;
  }
  .ig-stats svg {
    width: 48px;
    height: 48px;
    color: var(--orange);
    transition: color 0.25s ease;
  }
  .ig-stats strong,
  .ig-stats small {
    display: block;
  }
  .ig-stats strong {
    font-size: 34px;
    color: #fff;
  }
  .ig-stats small {
    font-size: 11px;
    text-transform: uppercase;
    color: #cbd5e1;
  }
  .ig-section {
    padding: 88px 0;
    background: var(--ig-bg);
    transition: background-color 0.25s ease, color 0.25s ease;
  }
  .ig-row {
    display: grid;
    grid-template-columns: 260px 1fr;
    gap: 45px;
  }
  .ig-intro > span,
  .ig-location > div > span,
  .ig-visibility > div > div:first-child > span {
    color: var(--orange);
    font-size: 11px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    transition: color 0.25s ease;
  }
  .ig-intro h2,
  .ig-location h2,
  .ig-visibility h2 {
    font-size: 37px;
    line-height: 1.05;
    margin: 12px 0;
    color: var(--ig-text);
    transition: color 0.25s ease;
  }
  .ig-intro > a,
  .ig-outline {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    border: 1px solid var(--ig-text);
    color: var(--ig-text);
    padding: 14px 18px;
    text-transform: uppercase;
    font-size: 11px;
    font-weight: 900;
    margin-top: 20px;
    transition: all 0.2s ease;
  }
  .ig-intro > a:hover,
  .ig-outline:hover {
    border-color: var(--orange);
    color: var(--orange);
  }
  .ig-intro a svg {
    width: 15px;
  }
  .ig-service-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 18px;
  }
  .ig-service-grid article {
    background: var(--ig-card-bg);
    border: 1px solid var(--ig-card-border);
    padding: 25px;
    min-height: 260px;
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    transition: all 0.25s ease;
  }
  .ig-service-grid article:hover {
    transform: translateY(-4px);
    border-color: var(--orange);
    box-shadow: 0 10px 28px var(--orange-glow);
  }
  .ig-service-grid article > svg {
    width: 38px;
    height: 38px;
    color: var(--orange);
    transition: color 0.25s ease;
  }
  .ig-service-grid h3 {
    font-size: 17px;
    text-transform: uppercase;
    color: var(--ig-text);
    margin: 14px 0 8px;
    transition: color 0.25s ease;
  }
  .ig-service-grid p {
    font-size: 13px;
    line-height: 1.6;
    color: var(--ig-text-muted);
    margin-bottom: auto;
    transition: color 0.25s ease;
  }
  .ig-service-grid a {
    color: var(--orange);
    font-size: 11px;
    font-weight: 900;
    margin-top: 16px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s ease;
  }
  .ig-service-grid a svg {
    width: 13px;
  }
  .ig-project-section {
    background: var(--ig-bg-alt);
    transition: background-color 0.25s ease;
  }
  .ig-projects {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 22px;
  }
  .ig-projects article {
    background: var(--ig-card-bg);
    border: 1px solid var(--ig-card-border);
    overflow: hidden;
    transition: all 0.25s ease;
  }
  .ig-projects article:hover {
    transform: translateY(-4px);
    border-color: var(--orange);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  }
  .ig-projects img {
    width: 100%;
    height: 250px;
    object-fit: cover;
  }
  .ig-projects article > div {
    padding: 18px;
  }
  .ig-projects h3 {
    font-size: 16px;
    text-transform: uppercase;
    color: var(--ig-text);
    transition: color 0.25s ease;
  }
  .ig-projects p {
    font-size: 12px;
    color: var(--ig-text-muted);
    margin: 5px 0;
  }
  .ig-projects small {
    display: block;
    font-size: 12px;
    color: var(--orange);
    font-weight: 700;
    margin: 5px 0 10px;
  }
  .ig-projects a {
    font-weight: 900;
    font-size: 12px;
    color: var(--ig-text);
    display: inline-flex;
    align-items: center;
    gap: 6px;
    transition: color 0.2s ease;
  }
  .ig-projects a:hover {
    color: var(--orange);
  }
  .ig-projects a svg {
    width: 13px;
  }
  .ig-trust-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
  }
  .ig-trust-grid article {
    text-align: center;
    padding: 20px;
    background: var(--ig-card-bg);
    border: 1px solid var(--ig-card-border);
    transition: all 0.25s ease;
  }
  .ig-trust-grid article:hover {
    border-color: var(--orange);
  }
  .ig-trust-grid svg {
    width: 42px;
    height: 42px;
    color: var(--orange);
    transition: color 0.25s ease;
  }
  .ig-trust-grid h3 {
    text-transform: uppercase;
    font-size: 14px;
    color: var(--ig-text);
    margin: 12px 0 6px;
    transition: color 0.25s ease;
  }
  .ig-trust-grid p {
    font-size: 12px;
    line-height: 1.6;
    color: var(--ig-text-muted);
    transition: color 0.25s ease;
  }
  .ig-process {
    background: var(--dark);
    color: #fff;
  }
  .ig-process .ig-intro h2 {
    color: #fff;
  }
  .ig-steps {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
  .ig-steps article {
    border-top: 1px solid rgba(255, 255, 255, 0.2);
    padding-top: 20px;
  }
  .ig-steps span {
    display: flex;
    width: 55px;
    height: 55px;
    border: 2px solid var(--orange);
    color: var(--orange);
    border-radius: 50%;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    font-weight: 900;
    transition: border-color 0.25s ease, color 0.25s ease;
  }
  .ig-steps h3 {
    text-transform: uppercase;
    font-size: 14px;
    color: #fff;
    margin: 14px 0 6px;
  }
  .ig-steps p {
    font-size: 12px;
    line-height: 1.6;
    color: #d4dce1;
  }
  .ig-visibility {
    background: var(--ig-bg-alt);
    transition: background-color 0.25s ease;
  }
  .ig-visibility > .ig-wrap {
    display: grid;
    grid-template-columns: 260px 1fr 330px;
    gap: 45px;
    align-items: center;
  }
  .ig-visibility p {
    color: var(--ig-text-muted);
    line-height: 1.6;
  }
  .ig-dashboard {
    height: 430px;
    background: var(--ig-dash-bg);
    border-radius: 14px;
    display: grid;
    grid-template-columns: 130px 1fr;
    overflow: hidden;
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
    border: 1px solid var(--ig-card-border);
    transition: background 0.25s ease, border-color 0.25s ease;
  }
  .ig-dashboard aside {
    background: var(--ig-dash-aside-bg);
    color: #fff;
    padding: 20px 10px;
    transition: background 0.25s ease;
  }
  .ig-dashboard aside span {
    display: flex;
    gap: 7px;
    align-items: center;
    padding: 9px;
    font-size: 10px;
    color: #cbd5e1;
  }
  .ig-dashboard aside svg {
    width: 13px;
    color: var(--orange);
  }
  .ig-dashboard main {
    padding: 25px;
    position: relative;
    color: var(--ig-dash-text);
  }
  .ig-dashboard h3 {
    font-size: 18px;
    margin: 0;
    color: var(--ig-dash-text);
  }
  .ig-dashboard small {
    color: var(--ig-text-muted);
  }
  .ig-dashboard main > div {
    display: flex;
    justify-content: space-between;
    margin-top: 25px;
    font-size: 13px;
  }
  .ig-dashboard progress {
    width: 100%;
    accent-color: var(--orange);
    height: 8px;
    margin-top: 8px;
  }
  .ig-dashboard section {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 20px;
    gap: 8px;
  }
  .ig-dashboard section span {
    display: block;
    font-size: 10px;
    color: var(--ig-text-muted);
  }
  .ig-dashboard section b {
    display: block;
    font-size: 11px;
    color: var(--orange);
  }
  .ig-dashboard main img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    margin-top: 20px;
    border-radius: 6px;
  }
  .ig-visibility ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .ig-visibility li {
    display: flex;
    gap: 10px;
    align-items: center;
    margin: 17px 0;
    font-weight: 700;
    font-size: 14px;
    color: var(--ig-text);
    transition: color 0.25s ease;
  }
  .ig-visibility li svg {
    width: 20px;
    color: var(--orange);
    flex-shrink: 0;
    transition: color 0.25s ease;
  }
  .ig-location > .ig-wrap {
    display: grid;
    grid-template-columns: 220px 330px 1fr 330px;
    gap: 35px;
    align-items: center;
  }
  .ig-location p {
    color: var(--ig-text-muted);
    line-height: 1.6;
  }
  .ig-map {
    height: 290px;
    background: var(--ig-map-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    border: 1px solid var(--ig-card-border);
    transition: background 0.25s ease;
  }
  .ig-map i {
    position: relative;
    margin: 8px;
    font-size: 10px;
    color: var(--ig-text-muted);
  }
  .ig-map b {
    font-size: 23px;
    color: var(--orange);
    transition: color 0.25s ease;
  }
  .ig-areas {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
  .ig-areas b {
    font-size: 12px;
    color: var(--ig-text);
    padding: 6px 8px;
    background: var(--ig-card-bg);
    border: 1px solid var(--ig-card-border);
    text-align: center;
    transition: color 0.25s ease, background 0.25s ease;
  }
  .ig-location img {
    width: 100%;
    height: 290px;
    object-fit: cover;
  }
  .ig-testimonials {
    background: var(--ig-bg-alt);
    transition: background-color 0.25s ease;
  }
  .ig-quotes {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 18px;
  }
  .ig-quotes article {
    background: var(--ig-card-bg);
    border: 1px solid var(--ig-card-border);
    padding: 22px;
    min-height: 230px;
    display: flex;
    flex-direction: column;
    transition: all 0.25s ease;
  }
  .ig-quotes article:hover {
    border-color: var(--orange);
    transform: translateY(-3px);
  }
  .ig-quotes b {
    font-size: 35px;
    color: var(--orange);
    line-height: 1;
    margin-bottom: 8px;
    transition: color 0.25s ease;
  }
  .ig-quotes p {
    font-size: 13px;
    line-height: 1.6;
    color: var(--ig-text);
    margin-bottom: auto;
    transition: color 0.25s ease;
  }
  .ig-quotes strong {
    font-size: 10px;
    text-transform: uppercase;
    color: var(--ig-text-muted);
    margin-top: 14px;
    display: block;
    transition: color 0.25s ease;
  }
  .ig-faq > .ig-wrap > div:last-child {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px 30px;
  }
  .ig-faq details {
    border: 1px solid var(--ig-faq-border);
    background: var(--ig-card-bg);
    padding: 0 16px;
    transition: all 0.25s ease;
  }
  .ig-faq details:hover {
    border-color: var(--orange);
  }
  .ig-faq summary {
    min-height: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 12px;
    cursor: pointer;
    font-weight: 700;
    color: var(--ig-text);
    transition: color 0.25s ease;
  }
  .ig-faq summary b {
    color: var(--orange);
    font-size: 16px;
    transition: color 0.25s ease;
  }
  .ig-faq details p {
    font-size: 12px;
    color: var(--ig-text-muted);
    padding-bottom: 14px;
    line-height: 1.6;
    transition: color 0.25s ease;
  }
  .ig-quote-section {
    background: var(--ig-quote-gradient);
    transition: background 0.25s ease;
  }
  .ig-quote-layout {
    display: grid;
    grid-template-columns: 0.9fr 1.1fr;
    gap: 90px;
    align-items: center;
  }
  .ig-quote-layout > div > span {
    color: var(--orange);
    font-size: 11px;
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    transition: color 0.25s ease;
  }
  .ig-quote-layout > div > h2 {
    font-size: 45px;
    line-height: 1.08;
    margin: 14px 0 20px;
    color: var(--ig-text);
    transition: color 0.25s ease;
  }
  .ig-quote-layout > div > p {
    font-size: 17px;
    line-height: 1.7;
    color: var(--ig-text-muted);
    max-width: 590px;
    transition: color 0.25s ease;
  }
  .ig-quote-benefits {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 28px;
  }
  .ig-quote-benefits b {
    display: flex;
    align-items: center;
    gap: 7px;
    font-size: 12px;
    color: var(--ig-text);
    transition: color 0.25s ease;
  }
  .ig-quote-benefits svg {
    width: 19px;
    color: var(--orange);
    transition: color 0.25s ease;
  }
  .ig-quote-section .ig-form {
    background: var(--ig-quote-form-bg);
    color: var(--ig-text);
    border: 1px solid var(--ig-quote-form-border);
    box-shadow: var(--ig-quote-form-shadow);
    padding: 38px;
    transition: background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
  }
  .ig-quote-section .ig-form h2 {
    color: var(--ig-text);
    font-size: 26px;
    transition: color 0.25s ease;
  }
  .ig-quote-section .ig-form input,
  .ig-quote-section .ig-form select,
  .ig-quote-section .ig-form textarea {
    background: var(--ig-input-bg);
    color: var(--ig-input-text);
    border: 1px solid var(--ig-input-border);
    min-height: 50px;
    border-radius: 4px;
    transition: border-color 0.2s ease, background 0.2s ease;
  }
  .ig-quote-section .ig-form textarea {
    min-height: 90px;
  }
  .ig-quote-section .ig-form input:focus,
  .ig-quote-section .ig-form select:focus,
  .ig-quote-section .ig-form textarea:focus {
    border-color: var(--orange);
    outline: none;
    box-shadow: 0 0 0 2px var(--orange-glow);
  }
  .ig-form {
    background: rgba(3, 24, 39, 0.96);
    border: 1px solid #4c6070;
    padding: 28px;
    display: flex;
    flex-direction: column;
    gap: 9px;
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.5);
  }
  .ig-form h2 {
    text-align: center;
    color: #fff;
    font-size: 22px;
    text-transform: uppercase;
    margin: 0 0 10px;
  }
  .ig-form input,
  .ig-form select,
  .ig-form textarea {
    min-height: 43px;
    background: #09283f;
    border: 1px solid #385064;
    color: #fff;
    padding: 10px;
    font: 12px inherit;
  }
  .ig-form textarea {
    min-height: 75px;
  }
  .ig-form button {
    min-height: 53px;
    background: var(--orange);
    color: var(--orange-contrast);
    border: 0;
    text-transform: uppercase;
    font-weight: 900;
    cursor: pointer;
    border-radius: 4px;
    transition: all 0.2s ease;
    box-shadow: 0 4px 14px var(--orange-glow);
  }
  .ig-form button:hover {
    background: var(--orange-hover);
    transform: translateY(-1px);
    box-shadow: 0 6px 20px var(--orange-glow);
  }
  .ig-form small {
    text-align: center;
    font-size: 10px;
    color: var(--ig-text-muted);
  }
  .ig-cta {
    background:
      linear-gradient(90deg, #061f33ec, #061f33c9),
      url("/src/assets/optimized/Construction/irongate/office.webp") center/cover;
    color: #fff;
  }
  .ig-cta > .ig-wrap {
    min-height: 150px;
    display: grid;
    grid-template-columns: 1fr auto auto;
    align-items: center;
    gap: 45px;
  }
  .ig-cta h2 {
    font-size: 37px;
    text-transform: uppercase;
    margin: 0;
    color: #fff;
  }
  .ig-cta p {
    color: var(--orange);
    margin: 6px 0 0;
    transition: color 0.25s ease;
  }
  .ig-cta > a:not(.ig-button) {
    color: #fff;
    display: flex;
    gap: 12px;
    align-items: center;
    text-transform: uppercase;
    font-size: 10px;
  }
  .ig-cta > a svg {
    width: 35px;
    color: var(--orange);
  }
  .ig-cta > a strong {
    display: block;
    font-size: 20px;
  }
  .ig-footer {
    background: var(--ig-footer-bg);
    color: #fff;
    padding: 55px 0 20px;
    transition: background 0.25s ease;
  }
  .ig-footer-grid {
    display: grid;
    grid-template-columns: 1.5fr repeat(4, 1fr);
    gap: 55px;
  }
  .ig-footer .ig-logo {
    color: #fff;
    font-size: 18px;
  }
  .ig-footer .ig-logo > span {
    color: var(--orange);
    font-size: 30px;
  }
  .ig-footer h3 {
    text-transform: uppercase;
    font-size: 12px;
    color: #fff;
  }
  .ig-footer p,
  .ig-footer a {
    display: block;
    color: #cbd5e1;
    font-size: 11px;
    line-height: 1.8;
    transition: color 0.2s ease;
  }
  .ig-footer a:hover {
    color: var(--orange);
  }
  .ig-footer-grid > div:last-child p {
    display: flex;
    gap: 8px;
  }
  .ig-footer p svg {
    width: 14px;
    color: var(--orange);
    flex-shrink: 0;
  }
  .ig-copy {
    border-top: 1px solid rgba(255, 255, 255, 0.12);
    margin-top: 30px;
    padding-top: 18px;
    font-size: 10px;
    color: #94a3b8;
  }

  @media (max-width: 1150px) {
    .ig-wrap {
      width: min(920px, calc(100% - 40px));
    }
    .ig-top span:nth-child(2),
    .ig-top span:nth-child(3),
    .ig-top a:last-child {
      display: none;
    }
    .ig-nav nav {
      gap: 20px;
    }
    .ig-hero-grid {
      grid-template-columns: 1fr 330px;
      gap: 35px;
    }
    .ig-hero h1 {
      font-size: 50px;
    }
    .ig-hero-proof {
      gap: 22px;
    }
    .ig-quote-layout {
      gap: 45px;
    }
    .ig-stats > .ig-wrap {
      grid-template-columns: repeat(3, 1fr);
    }
    .ig-service-grid {
      grid-template-columns: repeat(2, 1fr);
    }
    .ig-trust-grid {
      grid-template-columns: repeat(3, 1fr);
    }
    .ig-location > .ig-wrap {
      grid-template-columns: 1fr 1fr;
    }
    .ig-quotes {
      grid-template-columns: 1fr 1fr;
    }
    .ig-footer-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 760px) {
    .ig-top {
      display: none;
    }
    .ig-header {
      height: 84px;
    }
    .ig-site section[id],
    .ig-site footer[id],
    #ig-quote {
      scroll-margin-top: 84px;
    }
    .ig-menu {
      display: block;
      margin-left: auto;
    }
    .ig-nav nav {
      display: none;
      position: absolute;
      top: 84px;
      left: 0;
      right: 0;
      background: var(--ig-header-bg);
      border-bottom: 1px solid var(--ig-card-border);
      padding: 15px 25px;
      flex-direction: column;
      height: auto;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
    }
    .ig-nav nav.open {
      display: flex;
    }
    .ig-nav nav a {
      min-height: 42px;
    }
    .ig-nav > .ig-button {
      display: none;
    }
    .ig-logo {
      font-size: 18px;
    }
    .ig-hero {
      height: auto;
      min-height: 900px;
    }
    .ig-hero-grid {
      grid-template-columns: 1fr;
      padding: 60px 0;
    }
    .ig-hero h1 {
      font-size: 43px;
    }
    .ig-hero-actions {
      align-items: stretch;
      flex-direction: column;
      max-width: 280px;
    }
    .ig-hero-proof {
      gap: 18px;
    }
    .ig-feature-card {
      display: none;
    }
    .ig-quote-layout {
      grid-template-columns: 1fr;
      gap: 35px;
    }
    .ig-quote-layout > div > h2 {
      font-size: 36px;
    }
    .ig-quote-section .ig-form {
      padding: 25px;
    }
    .ig-stats > .ig-wrap {
      grid-template-columns: 1fr 1fr;
    }
    .ig-stats > .ig-wrap > div {
      min-height: 100px;
    }
    .ig-row,
    .ig-visibility > .ig-wrap {
      grid-template-columns: 1fr;
    }
    .ig-service-grid,
    .ig-projects,
    .ig-trust-grid,
    .ig-steps,
    .ig-quotes {
      grid-template-columns: 1fr;
    }
    .ig-location > .ig-wrap {
      grid-template-columns: 1fr;
    }
    .ig-faq > .ig-wrap > div:last-child {
      grid-template-columns: 1fr;
    }
    .ig-cta > .ig-wrap {
      grid-template-columns: 1fr;
      padding: 35px 0;
    }
    .ig-footer-grid {
      grid-template-columns: 1fr 1fr;
    }
    .ig-section {
      padding: 65px 0;
    }
    .ig-intro h2,
    .ig-location h2,
    .ig-visibility h2 {
      font-size: 32px;
    }
  }

  @media (max-width: 480px) {
    .ig-wrap {
      width: calc(100% - 30px);
    }
    .ig-hero h1 {
      font-size: 37px;
    }
    .ig-hero-proof {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    .ig-hero .ig-hero-proof strong {
      font-size: 22px;
    }
    .ig-stats > .ig-wrap,
    .ig-service-grid,
    .ig-footer-grid {
      grid-template-columns: 1fr;
    }
    .ig-dashboard {
      grid-template-columns: 90px 1fr;
    }
    .ig-dashboard main {
      padding: 15px;
    }
    .ig-projects img {
      height: 220px;
    }
  }
`;
