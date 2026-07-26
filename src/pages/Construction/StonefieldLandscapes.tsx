import {
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  ChevronDown,
  Flame,
  Hammer,
  Leaf,
  Mail,
  MapPin,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Trees,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import "./StonefieldLandscapes.css";
const root = "/src/assets/images/Construction/stonefield";
const nav = [
  ["Services", "sf-services"],
  ["Our Work", "sf-work"],
  ["About Us", "sf-about"],
  ["Process", "sf-process"],
  ["Resources", "sf-faq"],
  ["Careers", "sf-contact"],
] as const;
const services = [
  [
    "Patios & Terraces",
    "Beautiful, durable spaces for relaxing and entertaining.",
    Sparkles,
  ],
  [
    "Outdoor Kitchens",
    "Custom kitchens built for gathering and good times.",
    Flame,
  ],
  ["Fire Features", "Warmth, ambiance, and durability in every season.", Flame],
  [
    "Retaining Walls",
    "Engineered solutions that are strong and stunning.",
    Hammer,
  ],
  [
    "Landscape Design",
    "Thoughtful plans that bring beauty and function together.",
    Leaf,
  ],
  [
    "Planting & Lighting",
    "Lush plantings and lighting that set the perfect mood.",
    Trees,
  ],
] as const;
const stats = [
  [Trees, "15+", "Years in Business"],
  [Hammer, "750+", "Projects Completed"],
  [Users, "400+", "5-Star Reviews"],
  [ShieldCheck, "100%", "Satisfaction Guaranteed"],
] as const;
export function StonefieldLandscapes() {
  const [open, setOpen] = useState(false),
    [active, setActive] = useState("sf-home");
  useEffect(() => {
    const f = () => {
      let a = "sf-home";
      nav.forEach(([, id]) => {
        const e = document.getElementById(id);
        if (e && e.offsetTop <= scrollY + 160) a = id;
      });
      if (innerHeight + scrollY >= document.documentElement.scrollHeight - 8)
        a = "sf-contact";
      setActive(a);
    };
    f();
    addEventListener("scroll", f, { passive: true });
    return () => removeEventListener("scroll", f);
  }, []);
  return (
    <main className="sf-site" id="sf-home">
      <div className="sf-top">
        <div className="sf-wrap">
          <span>
            <MapPin />
            Proudly serving Central Indiana
          </span>
          <span>
            <ShieldCheck />
            Licensed • Insured • 3-Year Workmanship Warranty
          </span>
          <a href="tel:3175550148">
            <Phone />
            (317) 555-0148
          </a>
          <a href="mailto:hello@stonefieldlandscapes.com">
            <Mail />
            hello@stonefieldlandscapes.com
          </a>
        </div>
      </div>
      <header className="sf-header">
        <div className="sf-wrap sf-nav">
          <Logo />
          <button className="sf-menu" onClick={() => setOpen(!open)}>
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
                {(id === "sf-services" || id === "sf-faq") && <ChevronDown />}
              </a>
            ))}
          </nav>
          <a className="sf-button" href="#sf-quote">
            Request a Quote <ArrowRight />
          </a>
        </div>
      </header>
      <section className="sf-hero">
        <img src={`${root}/hero.png`} alt="Luxury stone fire pit landscape" />
        <div className="sf-shade" />
        <div className="sf-wrap">
          <span>Live beautifully outside</span>
          <h1>
            Outdoor Living
            <br />
            Crafted to Last
          </h1>
          <p>
            Timeless hardscapes. Thoughtful design.
            <br />
            Spaces where life happens.
          </p>
          <div>
            <a className="sf-button" href="#sf-work">
              Explore Our Work
            </a>
            <a className="sf-light" href="#sf-about">
              See the Difference <ArrowRight />
            </a>
          </div>
        </div>
      </section>
      <section className="sf-reputation">
        <div className="sf-wrap">
          <span>
            <b>Google</b>4.9 ★★★★★<small>120+ Reviews</small>
          </span>
          <span>
            <b>houzz</b>Best of Houzz<small>Service 2023–2025</small>
          </span>
          <span>
            <b>Angi</b>Super Service<small>Award 2025</small>
          </span>
          <span>
            <ShieldCheck />
            <b>3-Year</b>
            <small>Workmanship Warranty</small>
          </span>
        </div>
      </section>
      <section className="sf-stats">
        <div className="sf-wrap">
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
      <section id="sf-services" className="sf-section">
        <div className="sf-wrap sf-split">
          <Intro
            over="Our Services"
            title="Complete Outdoor Living Solutions"
            text="From initial design to final craftsmanship, we create exceptional spaces that elevate how you live outdoors."
          />
          <div className="sf-services">
            {services.map(([a, b, I]) => (
              <article key={a}>
                <I />
                <div>
                  <h3>{a}</h3>
                  <p>{b}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="sf-work" className="sf-section sf-project-section">
        <div className="sf-wrap sf-split">
          <Intro
            over="Featured Projects"
            title="Built for Beauty. Made to Last."
          />
          <div className="sf-projects">
            {[
              ["Elevated Backyard Retreat", "hero.png", "Carmel, IN"],
              ["Poolside Oasis", "pool.png", "Zionsville, IN"],
              ["Modern Front Entry", "entry.png", "Noblesville, IN"],
            ].map(([a, p, c]) => (
              <article key={a}>
                <img src={`${root}/${p}`} alt={a} />
                <h3>{a}</h3>
                <small>{c}</small>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="sf-about" className="sf-section sf-why">
        <div className="sf-wrap">
          <div>
            <span>Why Homeowners Choose</span>
            <h2>Stonefield Landscapes</h2>
            <p>
              Premium materials, expert craftsmanship, and personalized service
              create outdoor spaces you'll love for years.
            </p>
          </div>
          {[
            ["Design + Build", "One team and one seamless process."],
            [
              "Premium Materials",
              "The finest stone, pavers, and plant materials.",
            ],
            [
              "Expert Craftsmanship",
              "Skilled artisans with an eye for detail.",
            ],
            [
              "Local & Trusted",
              "Proudly serving Central Indiana with integrity.",
            ],
          ].map(([a, b]) => (
            <article key={a}>
              <Award />
              <h3>{a}</h3>
              <p>{b}</p>
            </article>
          ))}
          <img src={`${root}/entry.png`} alt="Stonefield craftsmanship" />
        </div>
      </section>
      <section id="sf-process" className="sf-section sf-process">
        <div className="sf-wrap">
          <Heading over="Our Process" title="A Proven Experience" />
          <div>
            {[
              ["Discover", "We learn about your vision and space."],
              ["Design", "A custom design tailored to your home."],
              ["Plan", "Details, materials, and timeline finalized."],
              ["Build", "The design comes to life with care."],
              ["Enjoy", "A lasting space built for memories."],
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
      <section className="sf-section sf-materials">
        <div className="sf-wrap">
          <Intro
            over="Materials & Inspiration"
            title="Natural Beauty. Timeless Style."
            text="Premium materials and thoughtful design create outdoor spaces that feel refined and enduring."
          />
          <div>
            {[
              ["Natural Stone", "entry.png"],
              ["Porcelain Pavers", "pool.png"],
              ["Flagstone", "hero.png"],
              ["Wood Accents", "pool.png"],
              ["Water Features", "pool.png"],
              ["Custom Details", "hero.png"],
            ].map(([a, p]) => (
              <article key={a}>
                <img src={`${root}/${p}`} alt={a} />
                <h3>{a}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="sf-section sf-community">
        <div className="sf-wrap">
          <div className="sf-service-copy">
            <span>Service Area</span>
            <h2>
              Rooted in Carmel.
              <br />
              Serving Central Indiana.
            </h2>
            <p>
              Local knowledge makes a difference. Our crews understand regional
              materials, drainage, planting conditions, and the details that
              help Indiana landscapes thrive.
            </p>
            <div className="sf-service-cities">
              {[
                "Carmel",
                "Zionsville",
                "Fishers",
                "Noblesville",
                "Westfield",
                "Greenwood",
              ].map((x) => (
                <b key={x}>
                  <CheckCircle2 />
                  {x}
                </b>
              ))}
            </div>
            <a href="#sf-quote">
              Check Your Address <ArrowRight />
            </a>
          </div>
          <div className="sf-map">
            <div className="sf-map-radius" />
            <div className="sf-map-hub">
              <MapPin />
              <b>Carmel</b>
              <small>Stonefield Home Base</small>
            </div>
            {[
              "Zionsville",
              "Fishers",
              "Noblesville",
              "Westfield",
              "Greenwood",
            ].map((x, i) => (
              <span className={`sf-map-city city-${i + 1}`} key={x}>
                <i />
                <b>{x}</b>
              </span>
            ))}
            <small className="sf-map-note">
              Typical project radius • Central Indiana
            </small>
          </div>
          <div className="sf-community-quote">
            <span>What Clients Are Saying</span>
            <div className="sf-quote-stars">
              ★★★★★ <small>Verified Client</small>
            </div>
            <blockquote>
              “Stonefield transformed our backyard into a place we never want to
              leave. The team was professional, communicative, and the
              craftsmanship is second to none.”
            </blockquote>
            <strong>— Jessica & Mark T., Carmel, IN</strong>
          </div>
        </div>
      </section>
      <section id="sf-faq" className="sf-section sf-faq">
        <div className="sf-wrap">
          <div>
            <Heading
              over="Common Questions"
              title="Helpful Answers"
              align="left"
            />
            {[
              "How long does a project take?",
              "What does the design process include?",
              "Do you offer maintenance services?",
              "What areas do you serve?",
            ].map((q) => (
              <details key={q}>
                <summary>
                  {q}
                  <b>+</b>
                </summary>
                <p>
                  Every project is customized to your property, goals,
                  materials, and timeline.
                </p>
              </details>
            ))}
          </div>
          <div id="sf-quote" className="sf-quote">
            <span>Ready to get started?</span>
            <h2>Let's Build Something Extraordinary</h2>
            <p>
              Schedule a consultation and take the first step toward your dream
              outdoor space.
            </p>
            <a
              className="sf-light"
              href="mailto:hello@stonefieldlandscapes.com"
            >
              Request a Quote <ArrowRight />
            </a>
          </div>
        </div>
      </section>
      <footer id="sf-contact" className="sf-footer">
        <div className="sf-wrap sf-footer-grid">
          <div>
            <Logo />
            <p>Outdoor living and hardscape experts serving Central Indiana.</p>
          </div>
          <Footer title="Services" items={services.map((x) => x[0])} />
          <Footer
            title="Company"
            items={[
              "About Us",
              "Our Process",
              "Our Work",
              "Resources",
              "Careers",
              "Contact Us",
            ]}
          />
          <Footer
            title="Service Areas"
            items={[
              "Carmel",
              "Noblesville",
              "Zionsville",
              "Fishers",
              "Westfield",
            ]}
          />
          <div>
            <h3>Contact</h3>
            <p>
              <Phone />
              (317) 555-0148
            </p>
            <p>
              <Mail />
              hello@stonefieldlandscapes.com
            </p>
            <p>
              <MapPin />
              Carmel, IN
            </p>
          </div>
        </div>
        <div className="sf-wrap sf-copy">
          © 2025 Stonefield Landscapes. All rights reserved.
        </div>
      </footer>
    </main>
  );
}
function Logo() {
  return (
    <a href="#sf-home" className="sf-logo">
      <Leaf />
      <strong>
        STONEFIELD<small>LANDSCAPES</small>
      </strong>
    </a>
  );
}
function Intro({
  over,
  title,
  text,
}: {
  over: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="sf-intro">
      <span>{over}</span>
      <h2>{title}</h2>
      {text && <p>{text}</p>}
      <a href="#sf-quote">
        View All <ArrowRight />
      </a>
    </div>
  );
}
function Heading({
  over,
  title,
  align = "center",
}: {
  over: string;
  title: string;
  align?: "left" | "center";
}) {
  return (
    <div className={`sf-heading ${align}`}>
      <span>{over}</span>
      <h2>{title}</h2>
    </div>
  );
}
function Footer({ title, items }: { title: string; items: readonly string[] }) {
  return (
    <div>
      <h3>{title}</h3>
      {items.map((x) => (
        <a href="#sf-home" key={x}>
          {x}
        </a>
      ))}
    </div>
  );
}
