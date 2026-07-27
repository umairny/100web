import { useEffect, useState } from "react";
import {
  ArrowRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock3,
  Code2,
  FolderOpen,
  GraduationCap,
  LayoutDashboard,
  Menu,
  MessageCircle,
  Play,
  Star,
  Trophy,
  Users,
  X,
} from "lucide-react";
import "./LearnSphereAcademy.css";
import uiuxImage from "../../assets/optimized/education/learnsphere/learnsphere-uiux.webp";
import frontendImage from "../../assets/optimized/education/learnsphere/learnsphere-frontend.webp";
import analyticsImage from "../../assets/optimized/education/learnsphere/learnsphere-analytics.webp";
import productImage from "../../assets/optimized/education/learnsphere/learnsphere-product.webp";

const programs = [
  {
    title: "UI/UX Design",
    tone: "violet",
    image: uiuxImage,
    desc: "Design intuitive experiences users love. Master research, wireframing, UI design, and prototyping.",
    weeks: "12 Weeks",
    level: "Beginner to Intermediate",
    date: "Jun 3, 2024",
  },
  {
    title: "Front-End Development",
    tone: "navy",
    image: frontendImage,
    desc: "Build responsive websites and web apps using HTML, CSS, JavaScript, and modern frameworks.",
    weeks: "14 Weeks",
    level: "Beginner to Intermediate",
    date: "Jun 10, 2024",
  },
  {
    title: "Data Analytics",
    tone: "gold",
    image: analyticsImage,
    desc: "Turn data into insights. Learn SQL, Excel, Python, and visualization to solve real business problems.",
    weeks: "12 Weeks",
    level: "Beginner to Intermediate",
    date: "Jun 17, 2024",
  },
  {
    title: "Product Design",
    tone: "coral",
    image: productImage,
    desc: "Design products people need. Combine UX, strategy, and experimentation to build better products.",
    weeks: "12 Weeks",
    level: "Intermediate",
    date: "Jun 24, 2024",
  },
];

const steps = [
  [
    BookOpen,
    "Start with Fundamentals",
    "Build a strong foundation with core concepts and essential tools you’ll use throughout your journey.",
  ],
  [
    CalendarDays,
    "Learn in Weekly Modules",
    "Follow structured lessons, practical exercises, and quizzes designed for steady weekly progress.",
  ],
  [
    Code2,
    "Build in Project Labs",
    "Apply what you learn in hands-on projects with mentor feedback and real-world scenarios.",
  ],
  [
    Trophy,
    "Graduate with a Portfolio",
    "Complete a capstone project and graduate with a portfolio that showcases your best work.",
  ],
];

const faq = [
  [
    "Who is LearnSphere Academy for?",
    "Motivated beginners and career switchers who want a clear, guided path into an in-demand digital career.",
  ],
  [
    "How long are the programs?",
    "Most cohorts run for 12–14 weeks with flexible weekly study and scheduled mentor sessions.",
  ],
  [
    "Do I need prior experience?",
    "No. Each program begins with the fundamentals and builds toward portfolio-ready work.",
  ],
  [
    "What kind of support will I get?",
    "You’ll receive mentor office hours, project feedback, cohort chat, and career guidance.",
  ],
  [
    "Will I get a certificate?",
    "Yes. Graduates earn a certificate of completion and a verified project portfolio.",
  ],
  [
    "How does payment work?",
    "Choose a one-time payment or ask admissions about available installment plans.",
  ],
];

function Logo() {
  return (
    <a className="ls-logo" href="#top" aria-label="LearnSphere Academy home">
      <span className="ls-logo-mark">✦</span>
      <span>
        LearnSphere<small>Academy</small>
      </span>
    </a>
  );
}

function Dashboard() {
  return (
    <div className="dashboard-shell">
      <aside className="dash-sidebar">
        <Logo />
        {[
          LayoutDashboard,
          BookOpen,
          CalendarDays,
          Users,
          MessageCircle,
          FolderOpen,
        ].map((Icon, i) => (
          <span className={i === 0 ? "active" : ""} key={i}>
            <Icon size={14} />{" "}
            <b>
              {
                [
                  "Dashboard",
                  "My Courses",
                  "Calendar",
                  "Mentors",
                  "Community",
                  "Resources",
                ][i]
              }
            </b>
          </span>
        ))}
      </aside>
      <div className="dash-main">
        <div className="dash-welcome">
          <b>Welcome back, Aisha 👋</b>
          <span>•••</span>
        </div>
        <div className="dash-grid">
          <div className="progress-card dash-card">
            <small>Your Progress</small>
            <div className="progress-body">
              <div className="ring">
                <b>72%</b>
              </div>
              <div>
                <b>UI/UX Design Cohort</b>
                <p>Week 5 of 12 · Interface Design</p>
                <button>Continue Learning</button>
              </div>
            </div>
          </div>
          <div className="mentor-card dash-card">
            <small>Upcoming Mentor Check-in</small>
            <div className="avatar">SC</div>
            <b>Sarah Chen</b>
            <p>Senior UX Designer</p>
            <button>Join Session</button>
          </div>
          <div className="activity-card dash-card">
            <small>Recent Activity</small>
            {[
              "Submitted: Mobile Banking UI",
              "Feedback: Dashboard Redesign",
              "Completed: User Research",
            ].map((x, i) => (
              <p key={x}>
                <CheckCircle2 size={13} /> <b>{x}</b>
                <span>{i + 1}d ago</span>
              </p>
            ))}
          </div>
          <div className="chat-card dash-card">
            <small>Cohort Chat</small>
            <p>
              <span className="mini-avatar">JM</span>
              <b>James</b>
              <br />
              Great feedback everyone!
            </p>
            <p>
              <span className="mini-avatar blue">AR</span>
              <b>Aisha</b>
              <br />
              Thanks! Learned a lot.
            </p>
            <div>Message cohort…</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function LearnSphereAcademy() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeSection, setActiveSection] = useState("programs");

  useEffect(() => {
    const sectionIds = [
      "programs",
      "curriculum",
      "mentors",
      "projects",
      "outcomes",
      "pricing",
      "faq",
    ];
    const updateActiveSection = () => {
      const scrollMarker = window.scrollY + 150;
      let current = sectionIds[0];

      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollMarker) current = id;
      });

      setActiveSection(current);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    return () => window.removeEventListener("scroll", updateActiveSection);
  }, []);

  return (
    <main className="learnsphere-site" id="top">
      <nav className="ls-nav">
        <Logo />
        <button
          className="ls-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>
        <div className={`ls-links ${menuOpen ? "open" : ""}`}>
          {[
            "Programs",
            "Curriculum",
            "Mentors",
            "Projects",
            "Outcomes",
            "Pricing",
            "FAQ",
          ].map((x) => {
            const sectionId = x.toLowerCase();
            return (
              <a
                key={x}
                href={`#${sectionId}`}
                className={activeSection === sectionId ? "active" : ""}
                aria-current={activeSection === sectionId ? "page" : undefined}
                onClick={() => {
                  setActiveSection(sectionId);
                  setMenuOpen(false);
                }}
              >
                {x}
              </a>
            );
          })}
          <a className="primary-btn nav-cta" href="#pricing">
            Apply Now
          </a>
        </div>
      </nav>

      <section className="hero ls-container">
        <div className="hero-copy">
          <h1>
            Guided online
            <br />
            learning with <span>structure</span>
            <br />
            students can trust.
          </h1>
          <p>
            Clear modules. Mentor feedback. Project labs.
            <br />
            Graduate with real skills and a portfolio
            <br />
            that opens doors.
          </p>
          <div className="hero-actions">
            <a href="#programs" className="primary-btn">
              Explore Programs <ArrowRight size={16} />
            </a>
            <a href="#pricing" className="outline-btn">
              Join a Cohort <ArrowRight size={16} />
            </a>
          </div>
          <div className="hero-trust">
            <span>
              <Users /> Live Mentor Guidance
            </span>
            <span>
              <MessageCircle /> Cohort Community
            </span>
            <span>
              <BriefcaseBusiness /> Portfolio-Ready Outcomes
            </span>
          </div>
        </div>
        <Dashboard />
      </section>

      <section className="stats ls-container">
        {[
          [Users, "12,500+", "Active Learners"],
          [CalendarDays, "8,200+", "Mentor Sessions"],
          [Trophy, "92%", "Completion Rate"],
          [FolderOpen, "1,800+", "Portfolio Projects"],
        ].map(([Icon, n, l]) => (
          <div key={String(l)}>
            <span className="stat-icon">
              <Icon size={22} />
            </span>
            <p>
              <b>{String(n)}</b>
              <small>{String(l)}</small>
            </p>
          </div>
        ))}
      </section>

      <section className="path ls-container" id="curriculum">
        <div className="section-heading">
          <small>Your learning path</small>
          <h2>A clear path from start to success</h2>
        </div>
        <div className="steps">
          {steps.map(([Icon, title, text], i) => (
            <article key={String(title)}>
              <span className="step-num">{i + 1}</span>
              <span className="step-icon">
                <Icon size={25} />
              </span>
              <h3>{String(title)}</h3>
              <p>{String(text)}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="programs-section" id="programs">
        <div className="ls-container">
          <div className="section-top">
            <div>
              <small>Featured cohorts</small>
              <h2>Programs designed for in-demand careers</h2>
            </div>
            <a href="#programs">
              View all programs <ArrowRight />
            </a>
          </div>
          <div className="program-grid">
            {programs.map((p) => (
              <article className="program-card" key={p.title}>
                <div className={`program-art ${p.tone}`}>
                  <img
                    src={p.image}
                    alt={`${p.title} course workspace`}
                    loading="lazy"
                  />
                </div>
                <div className="program-copy">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <dl>
                    <div>
                      <dt>
                        <Clock3 /> Duration
                      </dt>
                      <dd>{p.weeks}</dd>
                    </div>
                    <div>
                      <dt>
                        <BarChart3 /> Level
                      </dt>
                      <dd>{p.level}</dd>
                    </div>
                    <div>
                      <dt>
                        <CalendarDays /> Next Cohort
                      </dt>
                      <dd>{p.date}</dd>
                    </div>
                  </dl>
                  <a href="#pricing">
                    Learn More <ArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="roadmap ls-container">
        <div className="roadmap-intro">
          <small>Curriculum roadmap</small>
          <h2>
            Structured curriculum.
            <br />
            Measurable progress.
          </h2>
          <p>
            Our programs are broken into weekly modules with clear outcomes and
            milestones so you always know what’s next.
          </p>
          <a href="#curriculum">
            View Full Curriculum <ArrowRight />
          </a>
        </div>
        <div className="timeline">
          {[
            [
              "Week 1",
              "Foundations",
              "Core concepts, tools setup, and first mini challenge.",
              "Completed",
            ],
            [
              "Week 2–3",
              "Core Concepts",
              "Dive deeper with practical lessons and exercises.",
              "Completed",
            ],
            [
              "Week 4–6",
              "Application",
              "Apply skills to guided projects and scenarios.",
              "In Progress",
            ],
            [
              "Week 7–9",
              "Advanced Topics",
              "Advanced techniques and best practices.",
              "Upcoming",
            ],
            [
              "Week 10–11",
              "Project Labs",
              "Build real-world projects with mentor feedback.",
              "Upcoming",
            ],
            [
              "Week 12",
              "Capstone & Showcase",
              "Polish your portfolio and graduate with confidence.",
              "Upcoming",
            ],
          ].map((r, i) => (
            <div
              key={r[0]}
              className={i < 2 ? "done" : i === 2 ? "current" : ""}
            >
              <span className="timeline-dot" />
              <b className="week">{r[0]}</b>
              <strong>{r[1]}</strong>
              <p>{r[2]}</p>
              <em>
                {r[3]} {i < 2 ? <CheckCircle2 /> : <Clock3 />}
              </em>
            </div>
          ))}
        </div>
      </section>

      <section id="mentors" className="support ls-container">
        <div className="section-heading">
          <small>Mentor support</small>
          <h2>Learn with guidance from industry experts</h2>
        </div>
        <div className="support-grid">
          <article>
            <div className="mentor-faces">
              <span>SC</span>
              <span>DM</span>
              <span>+12</span>
            </div>
            <h3>Meet Your Mentors</h3>
            <p>
              Experienced professionals who’ve worked at top companies and love
              teaching what they do.
            </p>
            <a href="#mentors">
              View All Mentors <ArrowRight />
            </a>
          </article>
          <article>
            <CalendarDays />
            <h3>Office Hours</h3>
            <p>
              Join weekly live sessions, Q&amp;A, and doubt clearing with your
              mentors and cohort.
            </p>
            <a href="#mentors">
              View Schedule <ArrowRight />
            </a>
          </article>
          <article>
            <MessageCircle />
            <h3>Feedback That Helps</h3>
            <p>
              Get actionable feedback on your work and iterate with clarity and
              confidence.
            </p>
            <a href="#mentors">
              How Feedback Works <ArrowRight />
            </a>
          </article>
        </div>
      </section>

      <section id="projects" className="projects ls-container">
        <div className="section-heading">
          <small>Project-based</small>
          <h2>Build real projects. Get real feedback.</h2>
        </div>
        <div className="project-grid">
          {[
            [LayoutDashboard, "Hands-on Assignments"],
            [Play, "Capstone Projects"],
            [MessageCircle, "Critique Sessions"],
            [BriefcaseBusiness, "Portfolio Building"],
          ].map(([Icon, t], i) => (
            <article key={String(t)}>
              <div className={`project-pic p${i}`}>
                <Icon />
              </div>
              <h3>{String(t)}</h3>
              <p>
                {
                  [
                    "Weekly tasks to apply what you learn and strengthen core skills.",
                    "Work on end-to-end projects that solve real-world problems.",
                    "Present your work, receive constructive feedback, and improve.",
                    "Curate and publish your best work to stand out to employers.",
                  ][i]
                }
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="outcomes" className="outcomes ls-container">
        <div className="outcome-copy">
          <small>Curriculum that matter</small>
          <h2>
            Graduate job-ready with
            <br />
            skills and confidence.
          </h2>
          {[
            "In-demand skills employers look for",
            "Portfolio-ready projects",
            "Resume & interview preparation",
            "Lifetime access to alumni network",
          ].map((x) => (
            <p key={x}>
              <Check /> {x}
            </p>
          ))}
          <a href="#outcomes">
            See Full Outcomes <ArrowRight />
          </a>
        </div>
        <div className="outcome-cards">
          <article>
            <b>92%</b>
            <p>of graduates get job opportunities within 6 months</p>
            <div className="bars">
              {[30, 52, 45, 72, 62, 84].map((h, i) => (
                <i key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
          </article>
          <article>
            <h3>Top Skills Gained</h3>
            {[
              ["UI/UX Design", "92%"],
              ["User Research", "87%"],
              ["Prototyping", "88%"],
              ["Figma", "94%"],
              ["Design Systems", "80%"],
            ].map((x) => (
              <div className="skill" key={x[0]}>
                <span>
                  {x[0]} <em>{x[1]}</em>
                </span>
                <i>
                  <b style={{ width: x[1] }} />
                </i>
              </div>
            ))}
          </article>
          <article>
            <h3>Portfolio Impact</h3>
            <b>+3.2x</b>
            <p>more interview callbacks with portfolio projects</p>
            <svg viewBox="0 0 200 70">
              <polyline
                points="0,62 35,45 70,50 105,30 140,36 175,12 200,5"
                fill="none"
                stroke="#2463eb"
                strokeWidth="3"
              />
            </svg>
          </article>
        </div>
      </section>

      <section className="testimonials ls-container">
        <div className="section-heading">
          <small>Student success stories</small>
          <h2>Loved by learners. Proven by results.</h2>
        </div>
        <div className="quote-card">
          <div className="quote-person">
            <span>AM</span>
            <b>Amara Mitchell</b>
            <small>Product Designer at Orbit</small>
          </div>
          <blockquote>
            “LearnSphere gave me the structure I was missing. The mentor
            feedback made every project stronger, and my portfolio finally felt
            professional.”
          </blockquote>
          <div className="stars">★★★★★</div>
        </div>
      </section>

      <section id="pricing" className="pricing ls-container">
        <div className="section-heading">
          <small>Simple, transparent pricing</small>
          <h2>Choose the path that fits your goals</h2>
        </div>
        <div className="pricing-grid">
          {[
            ["Core", "$699", "Self-paced learning with community support"],
            ["Guided", "$1,199", "Mentor guidance and feedback"],
            ["Career Track", "$1,799", "Full support to launch your career"],
          ].map((x, i) => (
            <article className={i === 1 ? "popular" : ""} key={x[0]}>
              {i === 1 && <span className="popular-label">Most Popular</span>}
              <h3>{x[0]}</h3>
              <p>{x[2]}</p>
              <b>{x[1]}</b>
              <small>one-time payment</small>
              {[
                "Everything in course content",
                "Community access",
                "Projects & resources",
                i === 0
                  ? "Certificate of completion"
                  : i === 1
                    ? "Weekly mentor feedback"
                    : "1:1 career coaching",
              ].map((f) => (
                <div className="feature" key={f}>
                  <Check /> {f}
                </div>
              ))}
              <a
                href="#top"
                className={i === 1 ? "primary-btn" : "outline-btn"}
              >
                Choose {x[0]}
              </a>
            </article>
          ))}
        </div>
        <p className="payment-note">
          Flexible payment plans available. Need help choosing?{" "}
          <a href="#faq">Talk to an advisor →</a>
        </p>
      </section>

      <section id="faq" className="faq ls-container">
        <div className="section-top">
          <div>
            <small>Frequently asked questions</small>
            <h2>Everything you need to know</h2>
          </div>
          <a href="mailto:hello@learnsphere.academy">
            Contact Support <ArrowRight />
          </a>
        </div>
        <div className="faq-grid">
          {faq.map((x, i) => (
            <button
              key={x[0]}
              className={openFaq === i ? "open" : ""}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
            >
              <span>
                <b>{x[0]}</b>
                <ChevronDown />
              </span>
              {openFaq === i && <p>{x[1]}</p>}
            </button>
          ))}
        </div>
      </section>

      <section className="final-cta ls-container">
        <div className="cta-art">
          <GraduationCap />
        </div>
        <div>
          <h2>Ready to build your future?</h2>
          <p>
            Join the next cohort and take the first step
            <br />
            towards a better career.
          </p>
        </div>
        <a href="#pricing" className="outline-btn">
          Apply for Next Cohort <ArrowRight />
        </a>
      </section>

      <footer className="ls-footer">
        <div className="ls-container footer-grid">
          <div>
            <Logo />
            <p>
              Guided online learning with structure
              <br />
              you can trust. Build skills, ship projects,
              <br />
              and launch your career.
            </p>
            <div className="socials">● ● ● ● ●</div>
          </div>
          {[
            [
              "Programs",
              "UI/UX Design",
              "Front-End Development",
              "Data Analytics",
              "Product Design",
              "All Programs",
            ],
            [
              "Resources",
              "Curriculum",
              "Mentors",
              "Projects",
              "Blog",
              "Careers",
            ],
            [
              "Company",
              "About Us",
              "Contact Us",
              "Privacy Policy",
              "Terms of Service",
            ],
          ].map((c) => (
            <div key={c[0]}>
              <h3>{c[0]}</h3>
              {c.slice(1).map((x) => (
                <a key={x} href="#top">
                  {x}
                </a>
              ))}
            </div>
          ))}
          <div>
            <h3>Stay in the loop</h3>
            <p>Get tips, updates, and cohort announcements.</p>
            <div className="email-box">
              Enter your email <ArrowRight />
            </div>
          </div>
        </div>
        <div className="ls-container copyright">
          <span>© 2024 LearnSphere Academy. All rights reserved.</span>
          <span>
            Made with <b>♥</b> for learners worldwide
          </span>
        </div>
      </footer>
    </main>
  );
}
