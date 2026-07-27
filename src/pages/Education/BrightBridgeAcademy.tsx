import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  GraduationCap,
  Heart,
  Mail,
  Menu,
  Phone,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import "./BrightBridgeAcademy.css";
import campusImage from "../../assets/optimized/education/brightbridge/brightbridge-campus.webp";
import studentsImage from "../../assets/optimized/education/brightbridge/brightbridge-students.webp";
import admissionsImage from "../../assets/optimized/education/brightbridge/brightbridge-admissions.webp";

const nav = [
  "About",
  "Academics",
  "Admissions",
  "Student Life",
  "Faculty",
  "Campus",
  "FAQ",
];
const pathways = [
  [
    "Lower School",
    "Grades PK–5",
    "Strong foundations in literacy, math, and curiosity through hands-on learning.",
    "study",
  ],
  [
    "Middle School",
    "Grades 6–8",
    "Building critical thinking, collaboration, and real-world skills.",
    "science",
  ],
  [
    "Upper School",
    "Grades 9–12",
    "Rigorous academics with advanced courses and personalized pathways.",
    "seminar",
  ],
  [
    "STEM & Arts",
    "All Grades",
    "Innovative labs, studios, and maker spaces that inspire creativity.",
    "arts",
  ],
  [
    "Leadership & Service",
    "All Grades",
    "Opportunities to lead, serve, and create positive change.",
    "service",
  ],
];
const faculty = [
  [
    "Dr. Laura Mitchell",
    "Head of School",
    "20+ years in independent schools.",
    "laura",
  ],
  [
    "James Parker",
    "Upper School Math",
    "Makes complex ideas accessible.",
    "james",
  ],
  [
    "Emily Chen",
    "Science Department",
    "Researcher, mentor, and science enthusiast.",
    "emily",
  ],
  [
    "Michael O’Connor",
    "Dean of Students",
    "Supports student well-being and personal growth.",
    "michael",
  ],
];
const journey = [
  ["1", "Inquiry"],
  ["2", "Campus Tour"],
  ["3", "Application"],
  ["4", "Assessment"],
  ["5", "Family Meeting"],
  ["6", "Admission Decision"],
  ["7", "Enrollment"],
];
const faqs = [
  "What grades do you offer?",
  "What is the student-teacher ratio?",
  "Do you offer financial aid?",
  "What is the admissions timeline?",
  "What makes BrightBridge unique?",
  "How can we schedule a tour?",
];

function Crest() {
  return (
    <a href="#top" className="bb-brand">
      <span className="crest">BB</span>
      <span>
        BRIGHTBRIDGE<small>ACADEMY</small>
      </span>
    </a>
  );
}
function Photo({ kind, children }: { kind: string; children?: ReactNode }) {
  const source =
    kind === "campus"
      ? campusImage
      : kind === "aid-campus"
        ? admissionsImage
        : studentsImage;
  return (
    <div className={`bb-photo ${kind}`}>
      <img src={source} alt="" loading={kind === "campus" ? "eager" : "lazy"} />
      {children}
    </div>
  );
}

export function BrightBridgeAcademy() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("about");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useEffect(() => {
    const ids = nav.map((x) => x.toLowerCase().replace(" ", "-"));
    const onScroll = () => {
      let current = ids[0];
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= window.scrollY + 150) current = id;
      });
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <main className="brightbridge" id="top">
      <nav className="bb-nav">
        <Crest />
        <button className="bb-menu" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
        <div className={`bb-links ${menu ? "open" : ""}`}>
          {nav.map((x) => {
            const id = x.toLowerCase().replace(" ", "-");
            return (
              <a
                className={active === id ? "active" : ""}
                href={`#${id}`}
                key={x}
                onClick={() => {
                  setActive(id);
                  setMenu(false);
                }}
              >
                {x}
              </a>
            );
          })}
          <a href="#admissions" className="bb-gold">
            Schedule a Tour <ArrowRight />
          </a>
        </div>
      </nav>

      <section className="bb-hero bb-wrap" id="about">
        <div className="hero-text">
          <small>Private school admissions</small>
          <h1>
            A trusted path to
            <br />
            confident learning and
            <br />
            future-ready growth.
          </h1>
          <p>
            At BrightBridge Academy, students thrive through a rigorous
            curriculum, caring instructors, and a community that believes in
            their potential. We make enrollment simple and personal—so your
            child can focus on what matters most: learning.
          </p>
          <div className="bb-actions">
            <a href="#admissions" className="bb-green">
              Start Admissions <ArrowRight />
            </a>
            <a href="#campus" className="bb-outline">
              Book a Campus Visit <CalendarDays />
            </a>
          </div>
          <div className="hero-features">
            {[
              [
                Users,
                "Small class sizes",
                "Personal attention for every learner",
              ],
              [
                BookOpen,
                "University-prep curriculum",
                "Challenging academics that open doors",
              ],
              [
                Heart,
                "Dedicated advisor support",
                "Guidance for students and families",
              ],
            ].map(([Icon, t, d]) => (
              <div key={String(t)}>
                <Icon />
                <b>{String(t)}</b>
                <span>{String(d)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="hero-visual">
          <Photo kind="campus" />
          <div className="values-card">
            <Crest />
            <b>
              Rooted in Values.
              <br />
              Focused on Futures.
            </b>
            <small>Character • Curiosity • Community</small>
          </div>
          <Photo kind="students" />
          <div className="enroll-card">
            <h3>Guided Enrollment</h3>
            <p>Every step, with you.</p>
            {[
              "Personalized support",
              "Clear communication",
              "A seamless experience",
            ].map((x) => (
              <span key={x}>
                <Check /> {x}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bb-metrics">
        {" "}
        <div className="bb-wrap">
          {[
            [GraduationCap, "98%", "College Acceptance Rate", "Class of 2024"],
            [Users, "8:1", "Student-Teacher Ratio", "Across all grades"],
            [Sparkles, "25+", "AP & Honors Courses", "Across disciplines"],
            [BookOpen, "16", "Average Class Size", "Small by design"],
            [Heart, "97%", "Parent Satisfaction", "Annual survey"],
          ].map(([Icon, n, t, s]) => (
            <div key={String(t)}>
              <Icon />
              <b>{String(n)}</b>
              <p>
                {String(t)}
                <small>{String(s)}</small>
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="outcomes-row bb-wrap">
        <div className="bb-intro">
          <small>Proven outcomes</small>
          <h2>Preparing students for college and a life of impact.</h2>
          <p>
            Our graduates leave BrightBridge Academy with the knowledge,
            confidence, and character to lead and contribute in meaningful ways.
          </p>
          <a href="#academics" className="bb-green">
            View Class Profile <ArrowRight />
          </a>
        </div>
        <div className="outcomes-cards">
          {[
            [
              "Academic Excellence",
              "▥",
              "Consistent growth in achievement and standardized scores.",
            ],
            [
              "College Readiness",
              "98%",
              "Seniors accepted to four-year colleges and universities.",
            ],
            [
              "Leadership",
              "80%",
              "Students hold leadership roles in clubs, sports, or service.",
            ],
            [
              "Innovation & Projects",
              "120+",
              "Capstone and research projects completed last year.",
            ],
            [
              "Character & Values",
              "♡",
              "We cultivate empathy, responsibility, and resilience.",
            ],
          ].map((x) => (
            <article key={x[0]}>
              <h3>{x[0]}</h3>
              <strong>{x[1]}</strong>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="bb-section pathways" id="academics">
        <div className="bb-wrap">
          <div className="bb-title">
            <small>Academic pathways</small>
            <h2>Programs designed for every stage of growth.</h2>
          </div>
          <div className="pathway-grid">
            {pathways.map((x) => (
              <article key={x[0]}>
                <Photo kind={x[3]} />
                <div>
                  <h3>{x[0]}</h3>
                  <b>{x[1]}</b>
                  <p>{x[2]}</p>
                  <a href="#admissions">
                    Learn more <ArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="faculty bb-wrap" id="faculty">
        <div className="bb-intro">
          <small>Academic cultivators</small>
          <h2>Mentors who know students—and inspire them to excel.</h2>
          <p>
            Our faculty are subject experts, passionate mentors, and committed
            to each student’s journey.
          </p>
          <a href="#faculty">
            Meet the Faculty <ArrowRight />
          </a>
        </div>
        <div className="faculty-grid">
          {faculty.map((x) => (
            <article key={x[0]}>
              <div className={`portrait ${x[3]}`}>
                <span>{x[0].split(" ").slice(-1)[0][0]}</span>
              </div>
              <h3>{x[0]}</h3>
              <b>{x[1]}</b>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="schedule">
        <div className="schedule-note">
          <small>A balanced school day</small>
          <h2>Structure that supports learning and well-being.</h2>
          <p>
            A purposeful rhythm of classes, enrichment, and community helps
            students thrive.
          </p>
          <a href="#academics" className="bb-outline">
            View Full Calendar <ArrowRight />
          </a>
        </div>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th></th>
                {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                  (x) => (
                    <th key={x}>{x}</th>
                  ),
                )}
              </tr>
            </thead>
            <tbody>
              {[
                [
                  "7:45 – 8:15 AM",
                  "Advisory & Community",
                  "Advisory & Community",
                  "Advisory & Community",
                  "Advisory & Community",
                  "Advisory & Community",
                ],
                [
                  "8:20 – 9:20 AM",
                  "English",
                  "Math",
                  "English",
                  "Math",
                  "English",
                ],
                [
                  "9:25 – 10:25 AM",
                  "Science",
                  "History",
                  "Science Lab",
                  "History",
                  "Science",
                ],
                [
                  "10:40 – 11:40 AM",
                  "World Language",
                  "World Language",
                  "World Language",
                  "World Language",
                  "World Language",
                ],
                ["11:40 – 12:20 PM", "Lunch & Community", "", "", "", ""],
                [
                  "12:20 – 1:00 PM",
                  "Enrichment / Clubs",
                  "Arts / Music",
                  "Athletics",
                  "Enrichment / Clubs",
                  "Club Meetings",
                ],
                [
                  "1:05 – 2:05 PM",
                  "Math",
                  "English",
                  "Math",
                  "English",
                  "STEM / Lab",
                ],
                [
                  "2:10 – 3:10 PM",
                  "Electives / Labs",
                  "STEM / Lab",
                  "Electives",
                  "STEM / Lab",
                  "Electives",
                ],
              ].map((r, i) => (
                <tr key={i}>
                  {r.map((c, j) => (
                    <td
                      key={j}
                      colSpan={i === 4 && j === 1 ? 5 : 1}
                      className={i === 4 && j > 1 ? "hide" : ""}
                    >
                      {c}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="journey bb-wrap" id="admissions">
        <div className="bb-title center">
          <small>Admissions journey</small>
          <h2>
            A clear path to becoming
            <br />a BrightBridge student.
          </h2>
        </div>
        <div className="journey-grid">
          {journey.map((x, i) => (
            <article key={x[0]}>
              <span className={i % 2 ? "gold" : ""}>{x[0]}</span>
              <h3>{x[1]}</h3>
              <p>
                {
                  [
                    "Tell us about your child and your family’s goals.",
                    "Experience our campus and community.",
                    "Submit online application and required documents.",
                    "Students participate in grade-appropriate assessment.",
                    "We learn more about your child and answer questions.",
                    "We notify families of our admission decision.",
                    "Secure your place and prepare for a new beginning!",
                  ][i]
                }
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="bb-section life" id="student-life">
        <div className="bb-wrap">
          <div className="bb-title center">
            <small>Student life</small>
            <h2>A place to belong. A world to explore.</h2>
          </div>
          <div className="life-grid">
            {[
              [
                "Clubs",
                "From debate to robotics, there’s something for every interest.",
                "clubs",
              ],
              [
                "Athletics",
                "Competitive teams and recreational programs build teamwork.",
                "athletics",
              ],
              [
                "Arts",
                "Music, theater, and visual arts spark creativity.",
                "arts",
              ],
              [
                "Community Service",
                "Students lead service initiatives that make real impact.",
                "service",
              ],
              [
                "Campus Culture",
                "Inclusive, respectful, and supportive—this is home.",
                "culture",
              ],
            ].map((x) => (
              <article key={x[0]}>
                <Photo kind={x[2]} />
                <h3>{x[0]}</h3>
                <p>{x[1]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="voices bb-wrap">
        <div className="bb-title">
          <small>Family & student voices</small>
          <h2>Real stories from our community.</h2>
        </div>
        <div className="voice-grid">
          {[
            [
              "BrightBridge challenged our daughter academically and supported her personally. She’s more confident, curious, and prepared than ever.",
              "The Anderson Family",
              "Parents of a Class of 2025 Graduate",
            ],
            [
              "The teachers here really know you and care about your future. I’ve had so many opportunities to grow as a leader.",
              "Maya L.",
              "Class of 2025",
            ],
            [
              "The sense of community is unlike anything we’ve experienced. We feel truly partnered in our child’s education.",
              "David & Priya S.",
              "Parents of 7th Grader",
            ],
          ].map((x, i) => (
            <article key={x[1]}>
              <b>“</b>
              <p>{x[0]}</p>
              <div>
                <span>{i + 1}</span>
                <strong>{x[1]}</strong>
                <small>{x[2]}</small>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="aid">
        <div className="aid-copy">
          <small>Investing in potential</small>
          <h2>Tuition, Financial Aid & Scholarships</h2>
          <p>
            Exceptional education should be accessible. We offer competitive
            tuition and meaningful financial support.
          </p>
          {[
            "Need-based financial aid",
            "Merit scholarships",
            "Payment plans available",
            "Personalized guidance",
          ].map((x) => (
            <span key={x}>
              <Check /> {x}
            </span>
          ))}
          <a href="#admissions" className="bb-outline">
            Explore Tuition & Aid <ArrowRight />
          </a>
        </div>
        <Photo kind="aid-campus" />
        <div className="help-card">
          <h2>We’re here to help.</h2>
          <p>
            Our enrollment team will work with you to understand your options
            and find the best fit for your family.
          </p>
          <span>
            <Phone /> (555) 123–4567
          </span>
          <span>
            <Mail /> admissions@brightbridge.edu
          </span>
          <span>
            <CalendarDays /> Schedule a Call
          </span>
        </div>
      </section>

      <section className="faq bb-wrap" id="faq">
        <div className="bb-intro">
          <small>Frequently asked questions</small>
          <h2>We’re here to help.</h2>
          <a href="#faq" className="bb-outline">
            View All FAQs <ArrowRight />
          </a>
        </div>
        <div className="faq-list">
          {faqs.map((x, i) => (
            <button
              className={openFaq === i ? "open" : ""}
              onClick={() => setOpenFaq(openFaq === i ? null : i)}
              key={x}
            >
              <span>
                {x}
                <ChevronDown />
              </span>
              {openFaq === i && (
                <p>
                  {
                    [
                      "BrightBridge serves students from Pre-K through Grade 12.",
                      "Our average ratio is eight students to one teacher.",
                      "Yes. Need-based aid and merit scholarships are available.",
                      "The main admissions season runs from October through February.",
                      "A rigorous curriculum, small classes, and character-focused community.",
                      "Use the Schedule a Tour button to select a convenient time.",
                    ][i]
                  }
                </p>
              )}
            </button>
          ))}
        </div>
      </section>

      <section className="bb-final">
        <div className="bb-wrap">
          <Crest />
          <div>
            <h2>Ready to take the next step?</h2>
            <p>
              We’d love to welcome you to campus and show you what makes
              BrightBridge Academy special.
            </p>
          </div>
          <a href="#admissions" className="bb-gold">
            Schedule a Tour <ArrowRight />
          </a>
          <a href="#admissions" className="bb-outline">
            Start Admissions
          </a>
        </div>
      </section>
      <footer className="bb-footer" id="campus">
        <div className="bb-wrap footer-cols">
          <div>
            <Crest />
            <p>
              A private, independent school preparing confident learners through
              trust, curiosity, and the joy of growth.
            </p>
          </div>
          {[
            [
              "Explore",
              "About",
              "Academics",
              "Admissions",
              "Student Life",
              "Faculty",
              "Campus",
            ],
            [
              "Resources",
              "Parent Portal",
              "Calendar",
              "News & Events",
              "College Counseling",
              "Summer Programs",
              "Employment",
            ],
            [
              "Contact",
              "123 BrightBridge Way",
              "Brookfield, MA 01778",
              "(555) 123–4567",
              "info@brightbridge.edu",
              "Get Directions",
            ],
          ].map((c) => (
            <div key={c[0]}>
              <h3>{c[0]}</h3>
              {c.slice(1).map((x) => (
                <a href="#top" key={x}>
                  {x}
                </a>
              ))}
            </div>
          ))}
          <div>
            <h3>Stay Connected</h3>
            <p>Sign up for news and updates.</p>
            <div className="subscribe">
              Your email address <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="bb-wrap copyright">
          © 2026 BrightBridge Academy. All rights reserved.
          <span>Privacy Policy　 Terms of Use</span>
        </div>
      </footer>
    </main>
  );
}
