import {
  ArrowRight,
  Award,
  Building2,
  Calculator,
  Check,
  CheckCircle2,
  ChevronDown,
  ClipboardList,
  Clock3,
  FileText,
  HardHat,
  Home,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Phone,
  Play,
  ShieldCheck,
  Star,
  Users,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import "./ForgePointBuilders.css";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "Projects", id: "projects" },
  { label: "Process", id: "process" },
  { label: "About", id: "about" },
  { label: "Contact", id: "contact" },
];

const Facebook = () => <span aria-label="Facebook">f</span>;
const Instagram = () => <span aria-label="Instagram">ig</span>;
const Linkedin = () => <span aria-label="LinkedIn">in</span>;

const services = [
  {
    title: "Custom Builds",
    text: "Ground-up homes and custom spaces designed around your vision.",
    image: "custombuild.png",
    icon: Home,
  },
  {
    title: "Home Renovations",
    text: "Kitchens, baths, additions, and whole-home transformations.",
    image: "homerenovations.png",
    icon: HardHat,
  },
  {
    title: "Commercial Spaces",
    text: "Functional, beautiful spaces for businesses and tenants.",
    image: "commercial.png",
    icon: Building2,
  },
  {
    title: "Project Documentation",
    text: "Clear plans, schedules, and updates so you always know what's happening.",
    image: "project.png",
    icon: FileText,
  },
  {
    title: "Transparent Estimates",
    text: "Detailed, honest estimates with no surprises—ever.",
    image: "estimates.png",
    icon: Calculator,
  },
];

const projects = [
  {
    type: "CUSTOM HOME",
    title: "Modern Farmhouse",
    place: "Austin, TX",
    image: "image01.png",
  },
  {
    type: "RENOVATION",
    title: "Kitchen Transformation",
    place: "West Lake Hills, TX",
    image: "image02.png",
  },
  {
    type: "COMMERCIAL",
    title: "Corporate Office Buildout",
    place: "Round Rock, TX",
    image: "image03.png",
  },
  {
    type: "COMMERCIAL",
    title: "Retail Space Buildout",
    place: "Pflugerville, TX",
    image: "image04.png",
  },
];

const process = [
  {
    title: "Consultation",
    text: "We listen, understand your goals, and walk the site together.",
    icon: Users,
  },
  {
    title: "Estimate",
    text: "You receive a detailed, transparent estimate with no surprises.",
    icon: Calculator,
  },
  {
    title: "Planning",
    text: "We finalize plans, schedule, and selections—keeping you informed.",
    icon: ClipboardList,
  },
  {
    title: "Build",
    text: "Our team builds with care, communicates clearly, every step.",
    icon: HardHat,
  },
  {
    title: "Final Walkthrough",
    text: "We review every detail to ensure you're 100% satisfied.",
    icon: CheckCircle2,
  },
];

const testimonials = [
  {
    quote:
      "ForgePoint Builders delivered our dream home with exceptional quality and communication. They truly care about their work.",
    name: "Emily R.",
    place: "Austin, TX",
    initials: "ER",
  },
  {
    quote:
      "Our office buildout was completed on time and on budget. The documentation and updates throughout were top-notch.",
    name: "Michael T.",
    place: "Round Rock, TX",
    initials: "MT",
  },
  {
    quote:
      "Transparent estimates, honest guidance, and an incredible team. We couldn't be happier with our renovation.",
    name: "Sarah L.",
    place: "West Lake Hills, TX",
    initials: "SL",
  },
];

function Logo() {
  return (
    <a href="#home" className="fp-logo" aria-label="ForgePoint Builders home">
      <span className="fp-mark">F</span>
      <span>
        ForgePoint
        <br />
        Builders
      </span>
    </a>
  );
}

export function ForgePointBuilders() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const updateActiveSection = () => {
      const marker = window.scrollY + 150;
      let current = "home";

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= marker) current = id;
      });

      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 8
      ) {
        current = "contact";
      }

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <main className="fp-site" id="home">
      <header className="fp-header">
        <div className="fp-wrap fp-nav">
          <Logo />
          <button
            className="fp-menu"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X /> : <Menu />}
          </button>
          <nav className={menuOpen ? "is-open" : ""}>
            {navItems.map(({ label, id }) => (
              <a
                key={id}
                className={activeSection === id ? "active" : ""}
                href={`#${id}`}
                aria-current={activeSection === id ? "page" : undefined}
                onClick={() => setMenuOpen(false)}
              >
                {label}
                {id === "services" && <ChevronDown size={13} />}
              </a>
            ))}
          </nav>
          <a className="fp-btn fp-btn-small" href="#estimate">
            Request Estimate
          </a>
        </div>
      </header>

      <section className="fp-hero">
        <div
          className="fp-media fp-hero-placeholder"
          role="img"
          aria-label="Placeholder for a modern custom home project photograph"
        >
          <span>Featured custom home</span>
        </div>
        <div className="fp-hero-shade" />
        <div className="fp-wrap fp-hero-content">
          <h1>
            Built right,
            <br />
            documented clearly,
            <br />
            finished with pride.
          </h1>
          <p>
            Custom builds, renovations, and commercial construction—delivered
            with transparent estimates and a confident path from first call to
            final walkthrough.
          </p>
          <div className="fp-actions">
            <a className="fp-btn" href="#estimate">
              Get a Quote <ArrowRight />
            </a>
            <a className="fp-btn fp-btn-outline" href="#projects">
              View Projects
            </a>
          </div>
        </div>
      </section>

      <section className="fp-stats">
        <div className="fp-wrap fp-stats-grid">
          <div>
            <ShieldCheck />
            <strong>18+</strong>
            <span>Years of Experience</span>
          </div>
          <div>
            <HardHat />
            <strong>450+</strong>
            <span>Projects Completed</span>
          </div>
          <div>
            <Award />
            <strong>
              Licensed
              <br />
              &amp; insured
            </strong>
            <span>Fully Compliant</span>
          </div>
          <div>
            <Clock3 />
            <strong>98%</strong>
            <span>On-Time Delivery</span>
          </div>
        </div>
      </section>

      <section id="services" className="fp-section fp-services">
        <div className="fp-wrap">
          <SectionHeading
            eyebrow="Our Services"
            title="Built for how you live and work."
          />
          <div className="fp-service-grid">
            {services.map(({ title, text, icon: Icon }, index) => (
              <article key={title} className="fp-service-card">
                <div
                  className={`fp-media fp-service-placeholder service-${index}`}
                  role="img"
                  aria-label={`${title} image placeholder`}
                >
                  <span>{title}</span>
                </div>
                <div>
                  <Icon />
                  <h3>{title}</h3>
                  <p>{text}</p>
                  <ArrowRight className="fp-arrow" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="fp-section fp-projects">
        <div className="fp-wrap">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Quality you can see. Results that last."
          />
          <div className="fp-project-grid">
            {projects.map((project, index) => (
              <article key={project.title} className="fp-project-card">
                <div
                  className={`fp-media fp-project-placeholder project-${index}`}
                  role="img"
                  aria-label={`${project.title} image placeholder`}
                >
                  <span>{project.title}</span>
                </div>
                <div>
                  <small>{project.type}</small>
                  <h3>{project.title}</h3>
                  <p>
                    <MapPin /> {project.place}
                    <a href="#contact">
                      View Project <ArrowRight />
                    </a>
                  </p>
                </div>
              </article>
            ))}
          </div>
          <div className="fp-center">
            <a className="fp-btn fp-btn-outline" href="#projects">
              View All Projects
            </a>
          </div>
        </div>
      </section>

      <section id="process" className="fp-section fp-process">
        <div className="fp-wrap">
          <SectionHeading
            eyebrow="Our Process"
            title="A clear process. A better experience."
          />
          <div className="fp-process-grid">
            {process.map(({ title, text, icon: Icon }, i) => (
              <article key={title}>
                <span className="fp-number">{i + 1}</span>
                <div className="fp-process-icon">
                  <Icon />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="fp-documentation">
        <div className="fp-wrap fp-doc-grid">
          <div className="fp-doc-copy">
            <span className="fp-eyebrow">
              Documentation &amp; Communication
            </span>
            <h2>
              Clarity in every detail.
              <br />
              Confidence at every step.
            </h2>
            <ul>
              {[
                "Real-time project updates and photos",
                "Centralized documents and schedules",
                "Transparent change orders",
                "Budget tracking you can trust",
                "One team. One standard. Total visibility.",
              ].map((item) => (
                <li key={item}>
                  <CheckCircle2 />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <Dashboard />
        </div>
      </section>

      <section className="fp-section fp-testimonials">
        <div className="fp-wrap">
          <SectionHeading
            eyebrow="What Our Clients Say"
            title="Trusted by homeowners and businesses alike."
          />
          <div className="fp-testimonial-grid">
            {testimonials.map((item, i) => (
              <article key={item.name}>
                <div className="fp-quote">“</div>
                <p>{item.quote}</p>
                <div className="fp-person">
                  <span className={`avatar avatar-${i}`}>{item.initials}</span>
                  <div>
                    <strong>{item.name}</strong>
                    <small>{item.place}</small>
                  </div>
                  <span className="fp-stars">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <Star key={n} />
                    ))}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="estimate" className="fp-cta">
        <div className="fp-wrap">
          <div>
            <h2>Ready to build something great?</h2>
            <p>
              Let's bring your vision to life—with clarity, quality, and
              craftsmanship you can count on.
            </p>
          </div>
          <a className="fp-btn" href="mailto:hello@forgepointbuilders.com">
            Request an Estimate <ArrowRight />
          </a>
          <a className="fp-btn fp-btn-outline" href="tel:5125550198">
            Schedule a Consultation
          </a>
        </div>
      </section>

      <footer id="contact" className="fp-footer">
        <div className="fp-wrap fp-footer-grid">
          <div>
            <Logo />
            <p>
              Built right. Documented clearly.
              <br />
              Finished with pride.
            </p>
            <div className="fp-social">
              <Facebook />
              <Instagram />
              <Linkedin />
              <Play />
            </div>
          </div>
          <FooterCol
            title="Navigation"
            links={["Home", "Services", "Projects", "About", "Contact"]}
          />
          <FooterCol
            title="Services"
            links={[
              "Custom Builds",
              "Home Renovations",
              "Commercial Spaces",
              "Project Documentation",
              "Transparent Estimates",
            ]}
          />
          <FooterCol
            title="Service Areas"
            links={[
              "Austin, TX",
              "Round Rock, TX",
              "West Lake Hills, TX",
              "Pflugerville, TX",
              "Surrounding Areas",
            ]}
          />
          <div>
            <h3>Contact Us</h3>
            <p>
              <Phone /> (512) 555-0198
            </p>
            <p>
              <Mail /> hello@forgepointbuilders.com
            </p>
            <p>
              <MapPin /> 123 Builder Way, Suite 100
              <br />
              Austin, TX 78701
            </p>
          </div>
        </div>
        <div className="fp-copyright">
          © 2024 ForgePoint Builders. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  return (
    <div className="fp-heading">
      <span className="fp-eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <h3>{title}</h3>
      {links.map((link) => (
        <a key={link} href="#home">
          {link}
        </a>
      ))}
    </div>
  );
}

function Dashboard() {
  return (
    <div className="fp-dashboard">
      <aside>
        <span className="fp-mini-logo">F</span>
        {[
          "Overview",
          "Schedule",
          "Documents",
          "Budget",
          "Selections",
          "Messages",
          "Photos",
        ].map((x, i) => (
          <span className={i === 0 ? "selected" : ""} key={x}>
            {i === 0 ? <Home /> : i === 5 ? <MessageSquare /> : <FileText />}
            {x}
          </span>
        ))}
      </aside>
      <div className="fp-dash-main">
        <h3>Project Overview</h3>
        <div className="fp-dash-cards">
          <div>
            <small>Project Status</small>
            <strong>
              <CheckCircle2 /> On Track
            </strong>
          </div>
          <div>
            <small>Budget</small>
            <strong>$412,500</strong>
            <span>of $460,000</span>
          </div>
          <div>
            <small>Schedule</small>
            <strong>22</strong>
            <span>Days Remaining</span>
          </div>
        </div>
        <h4>Recent Updates</h4>
        {[
          "Framing Inspection Completed",
          "Kitchen Cabinets Approved",
          "Electrical Rough-In Complete",
        ].map((x, i) => (
          <p key={x}>
            <Check />
            {x}
            <small>May {12 - i * 2}, 2024</small>
          </p>
        ))}
      </div>
      <div className="fp-phone">
        <div className="fp-notch" />
        <h3>‹ Messages</h3>
        <small>Project Manager</small>
        <p>Framing inspection is complete. Great work from the team.</p>
        <p className="mine">Awesome! Any items to note?</p>
        <small>Project Manager</small>
        <p>Just a few minor notes. I'll send over shortly.</p>
        <div className="fp-input">Type a message...</div>
      </div>
    </div>
  );
}
