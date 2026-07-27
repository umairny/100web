import { useState } from "react";
import {
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  CalendarDays,
  Check,
  ChevronDown,
  Clock3,
  Compass,
  FileText,
  GraduationCap,
  Heart,
  Menu,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
  X,
} from "lucide-react";
import heroImage from "../../assets/optimized/education/atlascollege/atlas-hero.webp";
import counselorsImage from "../../assets/optimized/education/atlascollege/atlas-counselors.webp";
import "./AtlasCollegeCounseling.css";

const nav = [
  "About",
  "Programs",
  "Services",
  "Counselors",
  "Resources",
  "Outcomes",
  "FAQ",
];
const services = [
  [
    Compass,
    "Personalized Roadmaps",
    "Custom plans built around your student’s goals, strengths, and timeline.",
  ],
  [
    Users,
    "Expert Admissions Guidance",
    "Former admissions officers and seasoned counselors who know what matters.",
  ],
  [
    FileText,
    "Standout Essay Support",
    "Compelling storytelling with expert feedback at every stage.",
  ],
  [
    MessageCircle,
    "Interview Preparation",
    "Practice with confidence for campus, alumni, and scholarship interviews.",
  ],
  [
    Target,
    "Balanced College Lists",
    "Strategic reach, match, and safety schools for a fit-first outcome.",
  ],
  [
    Heart,
    "Family Communication",
    "Transparent updates and collaboration every step of the way.",
  ],
];
const programs = [
  [
    "Early High School Planning",
    "Grades 9–10 · 6–12 Months",
    "Build strong foundations in academics, activities, and mindset from the start.",
    "planning",
    Compass,
  ],
  [
    "College List Strategy",
    "Grades 10–12 · 3–6 Months",
    "Research and curate a personalized list aligned with goals and fit.",
    "list",
    BookOpen,
  ],
  [
    "Application Bootcamp",
    "Grades 11–12 · 4–9 Months",
    "End-to-end application support to stay organized and on track.",
    "bootcamp",
    FileText,
  ],
  [
    "Essay Coaching",
    "Grades 11–12 · 2–4 Months",
    "Brainstorm, write, and refine powerful essays that sound like you.",
    "essay",
    Sparkles,
  ],
  [
    "Interview Preparation",
    "Grades 11–12 · 1–2 Months",
    "Ace interviews with personalized coaching and real feedback.",
    "interview",
    MessageCircle,
  ],
  [
    "Transfer Guidance",
    "All Grades · Flexible",
    "Strategic support for community college and four-year transfers.",
    "transfer",
    GraduationCap,
  ],
];
const journey = [
  [
    "1",
    "Academic Planning",
    "Strengthen academics, activities, and confidence.",
  ],
  ["2", "Student Story", "Discover strengths, passions, and voice."],
  ["3", "College Research", "Explore colleges and build your fit list."],
  [
    "4",
    "Application Strategy",
    "Build a clear plan for deadlines and decisions.",
  ],
  [
    "5",
    "Essays & Interviews",
    "Craft compelling stories and practice with confidence.",
  ],
  ["6", "Final Decisions", "Compare offers and choose your next chapter."],
];
const faqs = [
  "When should we start college counseling?",
  "How many students does each counselor work with?",
  "How do you personalize the process?",
  "Do you help with financial aid and scholarships?",
  "Do you guarantee admission?",
  "What if my student needs test-optional guidance?",
];

function AtlasLogo() {
  return (
    <a href="#top" className="atlas-logo">
      <span className="atlas-star">✧</span>
      <span>
        ATLAS<small>COLLEGE COUNSELING</small>
      </span>
    </a>
  );
}
function Photo({ kind }: { kind: string }) {
  return (
    <div className={`atlas-photo ${kind}`}>
      <img src={kind === "counselors" ? counselorsImage : heroImage} alt="" />
    </div>
  );
}

export function AtlasCollegeCounseling() {
  const [menu, setMenu] = useState(false);
  const [faq, setFaq] = useState<number | null>(null);
  return (
    <main className="atlas-site" id="top">
      <nav className="atlas-nav">
        <AtlasLogo />
        <button className="atlas-menu" onClick={() => setMenu(!menu)}>
          {menu ? <X /> : <Menu />}
        </button>
        <div className={`atlas-links ${menu ? "open" : ""}`}>
          {nav.map((item) => (
            <a
              href={`#${item.toLowerCase()}`}
              key={item}
              onClick={() => setMenu(false)}
            >
              {item}
            </a>
          ))}
          <a href="#consultation" className="atlas-gold">
            Book a Strategy Call <ArrowRight />
          </a>
        </div>
      </nav>

      <section className="atlas-hero" id="about">
        <div className="atlas-shell hero-grid">
          <div className="atlas-hero-copy">
            <small>College counseling, purposefully planned</small>
            <h1>
              Your College Journey.
              <br />
              <em>Purposefully Planned.</em>
              <br />
              Confidently Achieved.
            </h1>
            <p>
              Personalized guidance for high school students and families
              navigating every step of the college admissions journey—from
              discovery to decision.
            </p>
            <div className="atlas-actions">
              <a href="#services" className="atlas-navy-btn">
                Explore Services <ArrowRight />
              </a>
              <a href="#consultation" className="atlas-outline-btn">
                Schedule Consultation <ArrowRight />
              </a>
            </div>
            <div className="hero-tools">
              {[
                [FileText, "Essay Review"],
                [Target, "Application Strategy"],
                [CalendarDays, "Deadline Tracking"],
                [Users, "Interview Prep"],
              ].map(([Icon, label]) => (
                <div key={String(label)}>
                  <Icon />
                  <span>{String(label)}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="atlas-hero-visual">
            <Photo kind="hero" />
            <div className="atlas-tracker">
              <b>College List Tracker</b>
              {[
                "Stanford University",
                "UCLA",
                "University of Michigan",
                "UC Berkeley",
                "Boston University",
              ].map((x, i) => (
                <p key={x}>
                  <span>{x}</span>
                  <em>{["Reach", "Match", "Match", "Likely", "Safe"][i]}</em>
                </p>
              ))}
            </div>
            <div className="atlas-message">
              <b>Counselor Message</b>
              <span>LB</span>
              <strong>Ms. Laura Bennett</strong>
              <small>Today at 10:36 AM</small>
              <p>
                Great progress on your supplemental essays! Let’s refine your
                “Why College” essay.
              </p>
              <a href="#consultation">Reply</a>
            </div>
            <div className="atlas-progress">
              <span>Essay Progress</span>
              <b>80%</b>
              <i />
              <i />
              <i />
            </div>
          </div>
        </div>
      </section>

      <section className="atlas-stats">
        <div className="atlas-shell">
          {[
            [GraduationCap, "1,250+", "Students Advised"],
            [ShieldCheck, "92%", "College Acceptance Rate"],
            [Award, "$24M+", "Scholarships Earned"],
            [Heart, "4.9/5", "Family Satisfaction"],
            [Clock3, "2.2 Days", "Avg. Essay Turnaround"],
          ].map(([Icon, n, label]) => (
            <div key={String(label)}>
              <Icon />
              <b>{String(n)}</b>
              <span>{String(label)}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="atlas-section" id="services">
        <div className="atlas-shell">
          <div className="atlas-heading center">
            <small>Why families choose Atlas</small>
            <h2>Expert guidance for a journey this important.</h2>
          </div>
          <div className="atlas-service-grid">
            {services.map(([Icon, title, text]) => (
              <article key={String(title)}>
                <Icon />
                <h3>{String(title)}</h3>
                <p>{String(text)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="atlas-section soft" id="programs">
        <div className="atlas-shell">
          <div className="atlas-heading center">
            <small>Our programs &amp; services</small>
            <h2>Support for every stage of your college journey.</h2>
          </div>
          <div className="atlas-program-grid">
            {programs.map(([title, meta, text, kind, Icon]) => (
              <article key={String(title)}>
                <Photo kind={String(kind)} />
                <div>
                  <Icon />
                  <h3>{String(title)}</h3>
                  <b>{String(meta)}</b>
                  <p>{String(text)}</p>
                  <a href="#consultation">
                    Learn More <ArrowRight />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="roadmap atlas-shell">
        <div className="atlas-roadmap-copy">
          <small>Our counseling roadmap</small>
          <h2>A proven process that keeps students focused.</h2>
          <p>
            From the first conversation to the final decision, we bring
            structure, perspective, and calm to every milestone.
          </p>
          <a href="#consultation" className="atlas-navy-btn">
            Start Your Roadmap <ArrowRight />
          </a>
        </div>
        <div className="roadmap-line">
          {journey.map((x) => (
            <article key={x[0]}>
              <span>{x[0]}</span>
              <h3>{x[1]}</h3>
              <p>{x[2]}</p>
            </article>
          ))}
        </div>
      </section>

      <section
        className="atlas-advising"
        aria-labelledby="atlas-weekly-support"
      >
        <div className="atlas-shell advising-grid">
          <div className="atlas-advising-copy">
            <div className="atlas-advising-badge-row">
              <span className="atlas-advising-pill">Weekly support</span>
              <span className="atlas-advising-pill atlas-advising-pill-soft">
                Flexible by family
              </span>
            </div>
            <h2 id="atlas-weekly-support">
              A calmer, more structured college support experience.
            </h2>
            <p>
              From quick check-ins to deep essay feedback, we build a rhythm
              that keeps your student confident, organized, and moving forward.
            </p>

            <div className="atlas-support-rail">
              {[
                [
                  Users,
                  "1:1 Advising Sessions",
                  "Personalized guidance and planning",
                  "45 min",
                ],
                [
                  FileText,
                  "Essay Review Office Hours",
                  "Drop-in essay feedback and brainstorming",
                  "Weekly",
                ],
                [
                  MessageCircle,
                  "Parent Q&amp;A Sessions",
                  "Get updates and ask your questions",
                  "Monthly",
                ],
                [
                  CalendarDays,
                  "Deadlines Workshop",
                  "Stay on top of key deadlines and tasks",
                  "Quarterly",
                ],
              ].map(([Icon, t, d, tag]) => (
                <article
                  key={String(t)}
                  className="atlas-support-card-item"
                  tabIndex={0}
                >
                  <div className="atlas-support-card-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div className="atlas-support-card-body">
                    <div className="atlas-support-card-meta">
                      <b>{String(t)}</b>
                      <span>{String(tag)}</span>
                    </div>
                    <small>{String(d)}</small>
                  </div>
                </article>
              ))}
            </div>

            <div className="atlas-advising-footer">
              <a href="#consultation" className="atlas-link-inline">
                View Full Schedule <ArrowRight />
              </a>
              <div className="atlas-advising-metrics">
                <div>
                  <strong>4</strong>
                  <span>Live formats</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Tailored support</span>
                </div>
              </div>
            </div>
          </div>

          <div
            className="atlas-credential-panel"
            aria-label="Atlas counselor credentials"
          >
            <div className="atlas-credential-top">
              <span className="atlas-pill">Trusted expertise</span>
              <h3>Admissions insight, counseling care, and real momentum.</h3>
              <p>
                Our team blends former admissions perspective with thoughtful
                coaching to make the process feel clear, supported, and
                personal.
              </p>
            </div>

            <div className="atlas-credential-stats">
              <div>
                <strong>92%</strong>
                <span>Families feel more prepared</span>
              </div>
              <div>
                <strong>24/7</strong>
                <span>Flexible support rhythm</span>
              </div>
            </div>

            <div className="atlas-credential-list">
              {[
                [
                  "Former Admissions Experience",
                  "Former officers from top colleges who know what schools look for.",
                  ShieldCheck,
                ],
                [
                  "Certified &amp; Credentialed",
                  "Members of respected counseling organizations with real-world experience.",
                  Award,
                ],
                [
                  "Personalized, Student-First",
                  "Plans shaped around your student’s strengths, goals, and timeline.",
                  Compass,
                ],
              ].map(([title, text, Icon]) => (
                <div key={title} className="atlas-credential-item">
                  <div className="atlas-credential-icon">
                    <Icon aria-hidden="true" />
                  </div>
                  <div>
                    <h4>{title}</h4>
                    <p>{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="atlas-counselors atlas-section" id="counselors">
        <div className="atlas-shell">
          <div className="atlas-heading">
            <small>Experienced counselors. Proven guidance.</small>
            <h2>People who know the process—and know your student.</h2>
          </div>
          <div className="counselor-grid">
            <Photo kind="counselors" />
            <div className="counselor-cards">
              {[
                [
                  "Laura Bennett, M.Ed.",
                  "Lead Counselor",
                  "Former Dartmouth admissions advisor",
                ],
                [
                  "David Kim, M.A.",
                  "Senior Counselor",
                  "Former USC admissions officer",
                ],
                [
                  "Maria Hernandez, M.Ed.",
                  "College Counselor",
                  "Former NYU admissions reader",
                ],
                [
                  "James Wilson, M.A.",
                  "College Counselor",
                  "Former UCLA admissions advisor",
                ],
              ].map((x) => (
                <article key={x[0]}>
                  <div className="counselor-avatar">{x[0][0]}</div>
                  <h3>{x[0]}</h3>
                  <b>{x[1]}</b>
                  <p>
                    ✦ {x[2]}
                    <br />✦ 10+ years experience
                    <br />✦ Student-first approach
                  </p>
                  <a href="#counselors">
                    View Profile <ArrowRight />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="atlas-results atlas-section" id="outcomes">
        <div className="atlas-shell">
          <div className="atlas-heading center">
            <small>Results that reflect our commitment</small>
            <h2>Progress you can see. Outcomes you can trust.</h2>
          </div>
          <div className="result-grid">
            <article>
              <span>College Acceptance Results</span>
              <b>98%</b>
              <div className="donut" />
              <p>of students accepted to a four-year college</p>
            </article>
            <article>
              <span>Scholarships &amp; Aid Secured</span>
              <b>$24M+</b>
              <p>Total scholarships earned</p>
              <strong>$38,200</strong>
              <small>Average award per student</small>
            </article>
            <article>
              <span>Student Confidence Growth</span>
              <b>3.1 → 8.7</b>
              <div className="growth-bars">
                <i />
                <i />
                <i />
              </div>
              <p>Average self-reported confidence</p>
            </article>
            <article>
              <span>Application Completion Rate</span>
              <b>98%</b>
              <div className="donut green" />
              <p>Completed on time</p>
            </article>
          </div>
        </div>
      </section>

      <section className="enroll-journey atlas-section">
        <div className="atlas-shell">
          <div className="atlas-heading center">
            <small>Your enrollment journey</small>
            <h2>Simple steps to get started and supported.</h2>
          </div>
          <div className="enroll-steps">
            {[
              ["1", "Inquiry", "Tell us about your student and goals."],
              ["2", "Strategy Call", "We discuss fit and answer questions."],
              [
                "3",
                "Student Assessment",
                "We assess strengths, interests, and needs.",
              ],
              ["4", "Plan Creation", "Customized roadmap and action plan."],
              [
                "5",
                "Weekly Guidance",
                "Ongoing support and progress check-ins.",
              ],
              [
                "6",
                "Submit with Confidence",
                "We’re with you until decisions day.",
              ],
            ].map((x) => (
              <article key={x[0]}>
                <span>{x[0]}</span>
                <h3>{x[1]}</h3>
                <p>{x[2]}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="atlas-testimonials atlas-section">
        <div className="atlas-shell">
          <div className="atlas-heading center">
            <small>What students &amp; families say</small>
            <h2>Calm guidance. Meaningful results.</h2>
          </div>
          <div className="testimonial-grid">
            {[
              [
                "“Atlas helped me find the right colleges and tell my story in a way that felt authentic.”",
                "Sophie L.",
                "UCLA Class of 2026",
              ],
              [
                "“The team’s guidance and organization reduced so much stress for our family.”",
                "The Patel Family",
                "Parents of Class of 2024",
              ],
              [
                "“Essay feedback was incredible—thoughtful, encouraging, and exactly what I needed.”",
                "Ethan W.",
                "University of Michigan ’26",
              ],
            ].map((x, i) => (
              <article key={x[1]}>
                <div className={`testi-avatar t${i}`} />
                <p>{x[0]}</p>
                <b>{x[1]}</b>
                <small>{x[2]}</small>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="atlas-pricing atlas-section" id="consultation">
        <div className="atlas-shell">
          <div className="atlas-heading center">
            <small>Choose the right level of support</small>
            <h2>Guidance that fits your family.</h2>
          </div>
          <div className="price-grid">
            {[
              ["Foundations", "$2,400", "Best for early planning"],
              ["Guided Apply", "$5,200", "Comprehensive application support"],
              ["Premium Comprehensive", "$8,900", "End-to-end premium support"],
            ].map((x, i) => (
              <article className={i === 1 ? "featured" : ""} key={x[0]}>
                {i === 1 && <span className="popular">Most Popular</span>}
                <h3>{x[0]}</h3>
                <p>{x[2]}</p>
                <b>{x[1]}</b>
                <small>One-time or 3 payments</small>
                {[
                  "Academic & Activity Planning",
                  "College Research Basics",
                  "2 Counseling Sessions",
                  "Email Support",
                ].map((f) => (
                  <span key={f}>
                    <Check /> {f}
                  </span>
                ))}
                <a
                  href="mailto:hello@atlascollege.example"
                  className={i === 1 ? "atlas-gold" : "atlas-navy-btn"}
                >
                  Get Started <ArrowRight />
                </a>
              </article>
            ))}
          </div>
          <p className="price-note">
            Refund policy available. Flexible payment plans.
          </p>
        </div>
      </section>

      <section className="atlas-faq atlas-section" id="faq">
        <div className="atlas-shell">
          <div className="atlas-heading center">
            <small>Frequently asked questions</small>
            <h2>Answers for the road ahead.</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((x, i) => (
              <button
                key={x}
                className={faq === i ? "open" : ""}
                onClick={() => setFaq(faq === i ? null : i)}
              >
                <span>
                  {x}
                  <ChevronDown />
                </span>
                {faq === i && (
                  <p>
                    {
                      [
                        "Most families start in 9th or 10th grade, but every student’s timeline is different.",
                        "Our counselors keep caseloads intentionally small so every student receives thoughtful attention.",
                        "We begin with a deep-dive assessment of goals, strengths, interests, and family priorities.",
                        "Yes. We guide families through financial aid, scholarships, and the full cost conversation.",
                        "We don’t guarantee admission; we build a thoughtful strategy and support confident decisions.",
                        "We help students build strong test-optional applications around their complete story.",
                      ][i]
                    }
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      <footer className="atlas-footer">
        <div className="atlas-shell footer-top">
          <AtlasLogo />
          <div>
            <h2>
              Let’s Build a College Journey
              <br />
              That’s Right for Your Student.
            </h2>
            <p>
              Partner with Atlas for calm, confident guidance from first
              questions to final decisions.
            </p>
          </div>
          <a href="#consultation" className="atlas-gold">
            Book a Strategy Call <ArrowRight />
          </a>
        </div>
        <div className="atlas-shell footer-links">
          <div>
            <AtlasLogo />
            <p>
              Expert guidance. Personalized plans.
              <br />
              The right fit for every student.
            </p>
          </div>
          {[
            [
              "Services",
              "College Planning",
              "Essay Coaching",
              "Application Support",
              "Transfer Guidance",
            ],
            [
              "Resources",
              "College Planning Guide",
              "Essay Tips",
              "Checklists",
              "For Parents",
            ],
            [
              "Company",
              "About Atlas",
              "Our Counselors",
              "Privacy Policy",
              "Terms of Service",
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
            <h3>Stay in the Know</h3>
            <p>Get updates for college admissions tips.</p>
            <div className="atlas-email">
              Enter your email <button>Subscribe</button>
            </div>
          </div>
        </div>
        <div className="atlas-shell copyright">
          © 2026 Atlas College Counseling. All rights reserved.
          <span>Privacy Policy · Terms of Service</span>
        </div>
      </footer>
    </main>
  );
}
