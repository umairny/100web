import {
  ArrowRight,
  Award,
  BadgeCheck,
  Building2,
  Camera,
  CheckCircle2,
  ChevronDown,
  ClipboardCheck,
  Clock3,
  FileCheck2,
  Hammer,
  Home,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  ShieldCheck,
  Star,
  Wrench,
  X,
} from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import "./SummitRoofCo.css";

const root = "/src/assets/optimized/Construction/summitroof";
const nav = [
  ["Home", "sr-home"],
  ["Services", "sr-services"],
  ["Our Work", "sr-work"],
  ["Storm Repair", "sr-process"],
  ["About Us", "sr-about"],
  ["Resources", "sr-faq"],
  ["Contact", "sr-contact"],
] as const;

const services = [
  [
    "Roof Replacement",
    "High-quality materials installed by experts for lasting protection.",
    "replacement.webp",
    Home,
  ],
  [
    "Roof Repair",
    "From minor fixes to major repairs, we get the job done right.",
    "repair.webp",
    Wrench,
  ],
  [
    "Storm Damage Repair",
    "Wind, hail, and storm damage repairs handled quickly and professionally.",
    "stromrepair.webp",
    Hammer,
  ],
  [
    "Leak Detection",
    "Advanced detection to find leaks fast and prevent costly damage.",
    "leakdetaction.webp",
    Search,
  ],
  [
    "Insurance Claim Support",
    "We help document damage and work with your insurance company.",
    "support.webp",
    FileCheck2,
  ],
  [
    "Roof Inspections",
    "Thorough inspections with photos and honest recommendations.",
    "inspection.webp",
    ClipboardCheck,
  ],
] as const;

const work = [
  ["Asphalt Roof Replacement", "Hendersonville, TN", "roof.webp"],
  ["Storm Damage Repair", "Gallatin, TN", "stromrepair.webp"],
  ["Commercial TPO Installation", "Nashville, TN", "team.webp"],
] as const;

const process = [
  ["Inspection", "We inspect your roof and document all damage.", Search],
  [
    "Documentation",
    "Detailed photos and reports for insurance claims.",
    Camera,
  ],
  [
    "Claim Support",
    "We help submit and communicate with your insurance provider.",
    FileCheck2,
  ],
  ["Repair or Replace", "Expert workmanship with quality materials.", Hammer],
  [
    "Final Walkthrough",
    "We ensure quality and your complete satisfaction.",
    ShieldCheck,
  ],
] as const;

const faq = [
  "How much does a new roof cost?",
  "Do you help with insurance claims?",
  "How long does a roof replacement take?",
  "What types of roofing materials do you install?",
  "Do you offer financing?",
  "Do you provide free estimates?",
  "What should I do if I have a roof leak?",
  "Do you offer emergency tarping?",
  "What warranties do you offer?",
];

function Logo() {
  return (
    <a className="sr-logo" href="#sr-home">
      <span className="sr-peaks">⌃⌃⌃</span>
      <strong>SUMMIT ROOF CO.</strong>
    </a>
  );
}

export function SummitRoofCo() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("sr-home");

  useEffect(() => {
    const update = () => {
      let current = "sr-home";
      const marker = window.scrollY + 170;
      nav.forEach(([, id]) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= marker) current = id;
      });
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8
      )
        current = "sr-contact";
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <main className="sr-site" id="sr-home">
      <header className="sr-header">
        <div className="sr-wrap sr-nav">
          <Logo />
          <button
            className="sr-menu"
            onClick={() => setMenu(!menu)}
            aria-label="Toggle navigation"
          >
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
                {(id === "sr-services" || id === "sr-faq") && <ChevronDown />}
              </a>
            ))}
          </nav>
          <a className="sr-phone" href="tel:8333657663">
            <Phone /> (833) 365-7663
          </a>
          <a className="sr-button sr-button-small" href="#sr-estimate">
            Get a Free Estimate
          </a>
        </div>
      </header>

      <section className="sr-hero">
        <img
          src={`${root}/hero.webp`}
          alt="Professional roofer working on a shingle roof"
        />
        <div className="sr-overlay" />
        <div className="sr-wrap sr-hero-grid">
          <div className="sr-hero-copy">
            <h1>Roofing estimates and storm repair made straightforward.</h1>
            <p>
              Fast inspections. Insurance-friendly documentation. Quality
              workmanship that protects what matters most.
            </p>
            <div className="sr-actions">
              <a className="sr-button" href="#sr-estimate">
                Get a Free Estimate <ArrowRight />
              </a>
              <a className="sr-button sr-outline" href="#sr-work">
                View Our Work
              </a>
            </div>
            <div className="sr-trust">
              <span>
                <MapPin /> Locally Owned &amp; Operated
              </span>
              <span>
                <Star /> 5-Star Rated
              </span>
              <span>
                <ShieldCheck /> Insurance Claim Experts
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="sr-stats">
        <div className="sr-wrap">
          {[
            [Award, "10+", "Years in Business"],
            [Building2, "2,500+", "Projects Completed"],
            [ShieldCheck, "Licensed", "& Insured"],
            [Clock3, "24/7", "Emergency Response"],
            [BadgeCheck, "Financing", "Available"],
            [Award, "5-Year", "Workmanship Warranty"],
          ].map(([Icon, val, label]) => (
            <div key={String(label)}>
              <Icon />
              <span>
                <strong>{String(val)}</strong>
                <small>{String(label)}</small>
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="sr-estimate" className="sr-section sr-estimate-section">
        <div className="sr-wrap sr-estimate-layout">
          <div className="sr-estimate-copy">
            <span>Free, No-Obligation Quote</span>
            <h2>Tell us about your roofing project.</h2>
            <p>
              Share a few details and our local team will contact you to
              schedule an inspection and prepare a straightforward estimate.
            </p>
            <div>
              <strong>
                <Clock3 /> Fast response
              </strong>
              <strong>
                <ShieldCheck /> Private &amp; secure
              </strong>
              <strong>
                <BadgeCheck /> No pressure
              </strong>
            </div>
          </div>
          <EstimateForm />
        </div>
      </section>

      <section id="sr-services" className="sr-section sr-services">
        <div className="sr-wrap">
          <Heading
            title="Our Roofing Services"
            sub="Complete roofing solutions for homes and businesses."
          />
          <div className="sr-service-grid">
            {services.map(([title, text, image, Icon]) => (
              <article key={title}>
                <div className="sr-card-title">
                  <Icon />
                  <h3>{title}</h3>
                </div>
                <img src={`${root}/${image}`} alt={title} />
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sr-work" className="sr-section sr-work">
        <div className="sr-wrap sr-work-layout">
          <div className="sr-work-intro">
            <h2>Our Recent Work</h2>
            <p>Real projects. Real results.</p>
            <a href="#sr-work">
              View All Projects <ArrowRight />
            </a>
          </div>
          <div className="sr-work-grid">
            {work.map(([title, place, image]) => (
              <article key={title}>
                <div className="sr-before">
                  <img src={`${root}/${image}`} alt={title} />
                  <span>Before</span>
                  <span>After</span>
                </div>
                <h3>{title}</h3>
                <p>
                  <MapPin />
                  {place}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sr-about" className="sr-section sr-proof">
        <div className="sr-wrap sr-proof-layout">
          <div>
            <h2>
              Why Homeowners
              <br />
              Choose Summit Roof Co.
            </h2>
            <ul>
              {[
                "Detailed photo documentation",
                "Transparent, easy-to-understand estimates",
                "Premium material options",
                "Industry-leading warranties",
                "Clean job sites & respectful crews",
                "Communication every step of the way",
              ].map((x) => (
                <li key={x}>
                  <CheckCircle2 />
                  {x}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2>Licensed. Certified. Trusted.</h2>
            <div className="sr-badges">
              {[
                [
                  "Licensed & Insured",
                  "Full liability coverage for your peace of mind.",
                ],
                [
                  "GAF Certified",
                  "Factory-certified for top-tier installations.",
                ],
                ["BBB A+ Rating", "Accredited business with an A+ rating."],
                ["Owens Corning", "Preferred contractor warranty options."],
                ["50-Year Warranty", "Material options with long coverage."],
              ].map(([a, b], i) => (
                <article key={a}>
                  <span>
                    {i === 0 ? (
                      <ShieldCheck />
                    ) : i === 1 ? (
                      "GAF"
                    ) : i === 2 ? (
                      "BBB"
                    ) : i === 3 ? (
                      "OC"
                    ) : (
                      "50"
                    )}
                  </span>
                  <h3>{a}</h3>
                  <p>{b}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sr-process" className="sr-section sr-process">
        <div className="sr-wrap">
          <Heading
            title="Our Storm Repair Process"
            sub="We make it simple, so you can get back to normal."
          />
          <div className="sr-process-grid">
            {process.map(([title, text, Icon], i) => (
              <article key={title}>
                <span className="sr-step">{i + 1}</span>
                <Icon />
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sr-section sr-local">
        <div className="sr-wrap sr-local-grid">
          <div>
            <h2>
              Proudly Serving
              <br />
              Middle Tennessee
            </h2>
            <p>Local crews. Fast response.</p>
            <a className="sr-light-button" href="#sr-contact">
              View All Areas <ArrowRight />
            </a>
          </div>
          <div className="sr-map">
            <div className="sr-map-roads" />
            <strong>Nashville</strong>
            {[
              "Clarksville",
              "Gallatin",
              "Lebanon",
              "Franklin",
              "Murfreesboro",
              "Columbia",
            ].map((x, i) => (
              <span key={x} style={{ "--i": i } as CSSProperties}>
                {x}
              </span>
            ))}
          </div>
          <div>
            <Heading
              title="What Our Customers Say"
              sub="★★★★★ 5.0 average rating"
              align="left"
            />
            <div className="sr-reviews">
              {[
                [
                  "JT",
                  "Summit Roof Co. made the whole process easy after our storm damage.",
                ],
                [
                  "AM",
                  "Professional, honest, and communicative from start to finish.",
                ],
                [
                  "MR",
                  "They showed up fast to tarp our roof and had it repaired within days.",
                ],
              ].map(([initials, text]) => (
                <article key={initials}>
                  <span>{initials}</span>
                  <p>“{text}”</p>
                  <strong>★★★★★</strong>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="sr-faq" className="sr-section sr-faq">
        <div className="sr-wrap">
          <Heading title="Frequently Asked Questions" />
          <div className="sr-faq-grid">
            {faq.map((q) => (
              <details key={q}>
                <summary>
                  {q}
                  <ChevronDown />
                </summary>
                <p>
                  Contact our local team for a clear recommendation and a free,
                  no-obligation estimate.
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="sr-cta">
        <div className="sr-wrap">
          <div>
            <h2>
              Ready for a stronger roof?
              <br />
              We're ready to help.
            </h2>
            <p>
              Get your free estimate today or call for emergency storm service.
            </p>
          </div>
          <a className="sr-button" href="#sr-estimate">
            <ShieldCheck /> Get Your Free Estimate
          </a>
          <a className="sr-call" href="tel:8333657663">
            <Phone />
            <span>
              <strong>(833) 365-7663</strong>
              <small>24/7 Emergency Response</small>
            </span>
          </a>
        </div>
      </section>

      <footer id="sr-contact" className="sr-footer">
        <div className="sr-wrap sr-footer-grid">
          <div>
            <Logo />
            <p>Roofing done right. Protection you can count on.</p>
            <div className="sr-social">
              <span>f</span>
              <span>ig</span>
              <span>G</span>
              <span>▶</span>
            </div>
          </div>
          <Footer
            title="Services"
            items={[
              "Roof Replacement",
              "Roof Repair",
              "Storm Damage Repair",
              "Leak Detection",
              "Inspections",
              "Insurance Claim Support",
            ]}
          />
          <Footer
            title="Service Areas"
            items={[
              "Nashville, TN",
              "Franklin, TN",
              "Murfreesboro, TN",
              "Lebanon, TN",
              "Gallatin, TN",
              "Clarksville, TN",
            ]}
          />
          <Footer
            title="Company"
            items={[
              "About Us",
              "Our Work",
              "Storm Repair",
              "Financing",
              "Resources",
              "Contact Us",
            ]}
          />
          <div>
            <h3>Contact Us</h3>
            <p>
              <MapPin />
              1101 Summit Dr,
              <br />
              Franklin, TN 37064
            </p>
            <p>
              <Phone />
              (833) 365-7663
            </p>
            <p>
              <Mail />
              info@summitroofco.com
            </p>
          </div>
          <div>
            <h3>Hours</h3>
            <p>
              Mon - Fri: 7:00am - 6:00pm
              <br />
              Saturday: 8:00am - 2:00pm
              <br />
              Sunday: Emergency Only
            </p>
            <strong className="sr-orange">
              24/7 Emergency Service Available
            </strong>
          </div>
        </div>
        <div className="sr-wrap sr-copy">
          © 2024 Summit Roof Co. All rights reserved.
          <span>Privacy Policy &nbsp; | &nbsp; Terms of Service</span>
        </div>
      </footer>
    </main>
  );
}

function Heading({
  title,
  sub,
  align = "center",
}: {
  title: string;
  sub?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`sr-heading ${align}`}>
      <h2>{title}</h2>
      {sub && <p>{sub}</p>}
    </div>
  );
}
function EstimateForm() {
  return (
    <form className="sr-form">
      <h2>Get Your Free Roof Estimate</h2>
      <p>Quick, no-obligation quote.</p>
      <div>
        <input placeholder="Full Name" />
        <input placeholder="Phone Number" />
      </div>
      <input placeholder="Email Address" />
      <input placeholder="Property Address" />
      <select defaultValue="">
        <option value="" disabled>
          What service do you need?
        </option>
        <option>Roof Replacement</option>
        <option>Storm Repair</option>
      </select>
      <textarea placeholder="Tell us about your project (optional)" />
      <button type="button">
        Submit Request <ArrowRight />
      </button>
      <small>
        <ShieldCheck /> We respect your privacy. No spam, ever.
      </small>
    </form>
  );
}
function Footer({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3>{title}</h3>
      {items.map((x) => (
        <a key={x} href="#sr-home">
          {x}
        </a>
      ))}
    </div>
  );
}
