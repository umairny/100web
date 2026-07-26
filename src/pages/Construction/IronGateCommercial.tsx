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
import "./IronGateCommercial.css";

const root = "/src/assets/images/Construction/irongate";
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
    "hero.png",
    "Dallas, TX",
  ],
  ["Luxe Salon Suites", "3,200 SF Retail Buildout", "retail.png", "Plano, TX"],
  [
    "North Dallas Orthodontics",
    "4,500 SF Medical Buildout",
    "medical.png",
    "Dallas, TX",
  ],
  ["Summit Financial", "12,000 SF Office Buildout", "office.png", "Irving, TX"],
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
  const [active, setActive] = useState("ig-home");
  useEffect(() => {
    const update = () => {
      let x = "ig-home";
      nav.forEach(([, id]) => {
        const e = document.getElementById(id);
        if (e && e.offsetTop <= scrollY + 170) x = id;
      });
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 8)
        x = "ig-contact";
      setActive(x);
    };
    update();
    addEventListener("scroll", update, { passive: true });
    return () => removeEventListener("scroll", update);
  }, []);
  return (
    <main className="ig-site" id="ig-home">
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
          src={`${root}/hero.png`}
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
          <img src={`${root}/office.png`} alt="Dallas commercial office" />
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
        <img src={`${root}/office.png`} alt="Project progress" />
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
