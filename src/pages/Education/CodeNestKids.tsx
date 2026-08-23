import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import {
  Bot,
  Code2,
  Sparkles,
  Rocket,
  ShieldCheck,
  Brain,
  Heart,
  Clock,
  BookOpen,
  Calendar,
  CheckCircle2,
  Menu,
  X,
  ArrowRight,
  ChevronDown,
  Star,
  Users,
  Award,
  Gamepad2,
  Laptop,
} from "lucide-react";
import "./CodeNestKids.css";

// WebP Image Imports
import heroImage from "../../assets/optimized/education/codenest/hero.webp";
import scratchImage from "../../assets/optimized/education/codenest/scratch.webp";
import pythonImage from "../../assets/optimized/education/codenest/python.webp";
import roboticsImage from "../../assets/optimized/education/codenest/robotics.webp";
import classroomImage from "../../assets/optimized/education/codenest/classroom.webp";
import showcaseImage from "../../assets/optimized/education/codenest/showcase.webp";

const navItems = [
  { id: "cn-programs", label: "Programs & Ages" },
  { id: "cn-curriculum", label: "Curriculum Roadmap" },
  { id: "cn-schedule", label: "Weekly Schedule" },
  { id: "cn-mentors", label: "Our Mentors" },
  { id: "cn-projects", label: "Student Projects" },
  { id: "cn-pricing", label: "Tuition & Trial" },
  { id: "cn-faq", label: "FAQ" },
];

const programs = [
  {
    id: "little",
    title: "Little Coders",
    age: "Ages 6–8",
    desc: "Explore playful coding through interactive stories, visual block puzzles, and game mechanics.",
    img: scratchImage,
    tag: "BEGINNER FRIENDLY",
  },
  {
    id: "junior",
    title: "Junior Builders",
    age: "Ages 9–11",
    desc: "Build 2D arcade games and animations while learning logic loops, variables, and events.",
    img: pythonImage,
    tag: "MOST POPULAR",
  },
  {
    id: "future",
    title: "Future Developers",
    age: "Ages 12–14",
    desc: "Create real websites with HTML/CSS and write real Python scripts for games and data apps.",
    img: classroomImage,
    tag: "TEXT CODING",
  },
  {
    id: "robotics",
    title: "Robotics & AI Lab",
    age: "Ages 8–14",
    desc: "Program hardware sensors, motors, and smart robotics in exciting hands-on weekly challenges.",
    img: roboticsImage,
    tag: "HANDS-ON STEM",
  },
];

const roadmapSteps = [
  { num: "1", title: "Logic & Patterns", desc: "Understand loops, conditionals, and problem-solving fundamentals.", status: "Done" },
  { num: "2", title: "Block Coding", desc: "Build interactive stories and animations in Scratch & Blockly.", status: "Done" },
  { num: "3", title: "Game Mechanics", desc: "Design 2D platformers, physics, scoreboards, and player controls.", status: "In Progress" },
  { num: "4", title: "Web & HTML/CSS", desc: "Publish custom personal websites and interactive portfolio pages.", status: "Upcoming" },
  { num: "5", title: "Python Essentials", desc: "Write text-based Python code for algorithms, games, and mini apps.", status: "Upcoming" },
  { num: "6", title: "Capstone Showcase", desc: "Present a complete capstone project to parents, mentors, and peers.", status: "Upcoming" },
];

const scheduleData = [
  { class: "Little Coders (6–8)", mon: "4:30 PM", tue: "—", wed: "4:30 PM", thu: "—", fri: "4:30 PM", sat: "10:00 AM" },
  { class: "Junior Builders (9–11)", mon: "5:30 PM", tue: "5:30 PM", wed: "5:30 PM", thu: "—", fri: "5:30 PM", sat: "11:30 AM" },
  { class: "Future Developers (12–14)", mon: "—", tue: "6:30 PM", wed: "6:30 PM", thu: "6:30 PM", fri: "—", sat: "1:00 PM" },
  { class: "Robotics & AI Lab", mon: "—", tue: "—", wed: "—", thu: "—", fri: "—", sat: "2:30 PM" },
];

const parentTestimonials = [
  {
    quote: "My daughter went from zero coding experience to building her own Scratch platformer game! She looks forward to class every single week.",
    author: "Sarah M.",
    role: "Mom of 9-year-old student",
  },
  {
    quote: "The small class sizes (max 12 kids) and patient instructors make a huge difference. The weekly progress updates give us total visibility.",
    author: "James T.",
    role: "Dad of 12-year-old student",
  },
  {
    quote: "CodeNest Kids gave my son logical thinking skills that helped him excel in math and science at school too!",
    author: "Priya K.",
    role: "Mom of 10-year-old student",
  },
];

const faqs = [
  {
    q: "Do children need prior coding experience?",
    a: "Not at all! Our beginner-friendly programs start from absolute zero with visual block coding and build confidence step-by-step.",
  },
  {
    q: "What happens during the Free Trial Class?",
    a: "Your child joins a live, friendly group class with a mentor, completes a fun mini-coding challenge, and experiences the classroom environment.",
  },
  {
    q: "What equipment or software is required?",
    a: "All your child needs is a computer or laptop with an internet connection and a modern browser. All software tools are web-based and free.",
  },
  {
    q: "What is the class size limit?",
    a: "We strictly cap classes at 12 students to ensure every child receives individual attention, feedback, and encouragement from the mentor.",
  },
];

export function CodeNestKids() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("cn-programs");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [trialBooked, setTrialBooked] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const offset = window.scrollY + 140;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= offset) {
          setActiveNav(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setActiveNav(id);
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  return (
    <div className="cn-site" id="cn-top">
      {/* 1. Simple Classic Header */}
      <header className={`cn-header ${scrolled ? "scrolled" : ""}`}>
        <div className="cn-wrap cn-header-inner">
          <a href="#cn-top" className="cn-brand-link" onClick={(e) => scrollTo(e, "cn-top")}>
            <div className="cn-brand-icon-box">
              <Bot className="w-5 h-5 text-slate-950" />
            </div>
            <h1 className="cn-brand-title">
              CodeNest <span>Kids</span>
            </h1>
          </a>

          {/* Desktop Nav Links */}
          <nav className="cn-nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`cn-nav-item ${activeNav === item.id ? "active" : ""}`}
                onClick={(e) => scrollTo(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="cn-header-actions">
            <a
              href="#cn-pricing"
              className="cn-cta-btn"
              onClick={(e) => scrollTo(e, "cn-pricing")}
            >
              <Rocket className="w-4 h-4" />
              Book Free Trial
            </a>

            <button
              type="button"
              className="cn-menu-toggle"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu Portal */}
      {menuOpen && typeof document !== "undefined" && createPortal(
        <div className="cn-drawer-root">
          <div
            className="cn-drawer-backdrop"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
          <div className="cn-drawer-menu" role="dialog" aria-modal="true" aria-label="CodeNest Navigation Menu">
            <div className="cn-drawer-header">
              <div className="flex items-center gap-2">
                <div className="cn-brand-icon-box !w-8 !h-8">
                  <Bot className="w-4 h-4 text-slate-950" />
                </div>
                <span className="font-extrabold text-white text-lg">CodeNest Kids</span>
              </div>
              <button
                type="button"
                className="p-2 text-slate-400 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="cn-drawer-body">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`cn-drawer-link ${activeNav === item.id ? "active" : ""}`}
                  onClick={(e) => scrollTo(e, item.id)}
                >
                  {item.label}
                  <ArrowRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}
            </div>

            <div className="cn-drawer-footer">
              <a
                href="#cn-pricing"
                className="w-full bg-amber-400 text-slate-950 font-extrabold py-3 text-center rounded-full flex items-center justify-center gap-2"
                onClick={(e) => scrollTo(e, "cn-pricing")}
              >
                <Rocket className="w-4 h-4" />
                Book Free Trial Class
              </a>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* 2. Hero Section */}
      <section className="cn-hero-section">
        <div className="cn-wrap">
          <div className="cn-hero-grid">
            <div>
              <div className="cn-badge-pill">
                <Sparkles className="w-4 h-4" />
                CODING ADVENTURES FOR CURIOUS KIDS (AGES 6–14)
              </div>

              <h2 className="cn-hero-title">
                Where Curious Kids Learn to <span>Build with Code</span>.
              </h2>

              <p className="cn-hero-p">
                Fun live coding classes with structured pathways, small group sizes (12 max), and project-based learning that builds problem-solving confidence for the future.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#cn-programs"
                  className="bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold text-base px-8 py-4 rounded-full shadow-lg shadow-amber-400/20 transition-all flex items-center gap-2"
                  onClick={(e) => scrollTo(e, "cn-programs")}
                >
                  Explore Programs
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href="#cn-pricing"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold text-base px-7 py-4 rounded-full transition-colors flex items-center gap-2"
                  onClick={(e) => scrollTo(e, "cn-pricing")}
                >
                  <Rocket className="w-5 h-5 text-amber-300" />
                  Start Free Trial
                </a>
              </div>
            </div>

            {/* Hero Image Showcase */}
            <div className="cn-hero-frame">
              <img src={heroImage} alt="Happy young coders learning with mentors" />
              <div className="cn-hero-overlay-card">
                <div className="bg-amber-400 p-3 rounded-xl text-slate-950">
                  <Gamepad2 className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm margin-0">4,500+ Young Coders Enrolled</h4>
                  <p className="text-xs text-slate-300 margin-0">96% Parent Satisfaction Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats HUD */}
      <section className="cn-stats-bar">
        <div className="cn-wrap">
          <div className="cn-stats-grid">
            <div className="cn-stat-box">
              <Users className="w-8 h-8 text-amber-400" />
              <div>
                <h3>4,500+</h3>
                <p>Happy Students</p>
              </div>
            </div>

            <div className="cn-stat-box">
              <Star className="w-8 h-8 text-amber-400" />
              <div>
                <h3>96%</h3>
                <p>Parent Rating</p>
              </div>
            </div>

            <div className="cn-stat-box">
              <Award className="w-8 h-8 text-amber-400" />
              <div>
                <h3>12 Max</h3>
                <p>Per Small Group</p>
              </div>
            </div>

            <div className="cn-stat-box">
              <Code2 className="w-8 h-8 text-amber-400" />
              <div>
                <h3>200+</h3>
                <p>Projects Published</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Programs Grid */}
      <section id="cn-programs" className="cn-section bg-white">
        <div className="cn-wrap">
          <div className="cn-section-head">
            <span className="cn-eyebrow">
              <Code2 className="w-3.5 h-3.5" />
              AGE-APPROPRIATE PATHWAYS
            </span>
            <h2 className="cn-section-title">Our Programs by Age Group</h2>
          </div>

          <div className="cn-programs-grid">
            {programs.map((program) => (
              <div key={program.id} className="cn-program-card">
                <div className="cn-program-img-wrap">
                  <img src={program.img} alt={program.title} />
                  <span className="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md text-amber-300 border border-amber-500/30 text-xs font-mono font-bold px-3 py-1 rounded-full">
                    {program.tag}
                  </span>
                </div>

                <div className="cn-program-body">
                  <span className="text-xs font-mono font-bold text-purple-600 mb-1">{program.age}</span>
                  <h3>{program.title}</h3>
                  <p>{program.desc}</p>

                  <a
                    href="#cn-pricing"
                    className="mt-auto inline-flex items-center justify-between text-sm font-extrabold text-purple-700 hover:text-purple-900"
                    onClick={(e) => scrollTo(e, "cn-pricing")}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Curriculum Roadmap */}
      <section id="cn-curriculum" className="cn-section bg-navy">
        <div className="cn-wrap">
          <div className="cn-section-head">
            <span className="cn-eyebrow">
              <Sparkles className="w-3.5 h-3.5" />
              CURRICULUM ROADMAP
            </span>
            <h2 className="cn-section-title">Six Milestones from First Code to Capstone</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {roadmapSteps.map((step) => (
              <div key={step.num} className="bg-slate-900 border border-slate-800 p-6 rounded-2xl relative">
                <span className="text-3xl font-extrabold font-mono text-amber-400/30 absolute top-4 right-6">
                  #{step.num}
                </span>
                <span className="text-xs font-mono text-emerald-400 font-bold bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full mb-3 inline-block">
                  {step.status}
                </span>
                <h3 className="font-extrabold text-lg text-white mb-2">{step.title}</h3>
                <p className="text-slate-300 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Weekly Schedule Matrix */}
      <section id="cn-schedule" className="cn-section bg-light">
        <div className="cn-wrap">
          <div className="cn-section-head">
            <span className="cn-eyebrow">
              <Calendar className="w-3.5 h-3.5" />
              CONVENIENT TIMES
            </span>
            <h2 className="cn-section-title">Weekly Live Class Schedule</h2>
          </div>

          <div className="cn-schedule-card">
            <table className="cn-schedule-table">
              <thead>
                <tr>
                  <th>Class Track</th>
                  <th>Mon</th>
                  <th>Tue</th>
                  <th>Wed</th>
                  <th>Thu</th>
                  <th>Fri</th>
                  <th>Sat</th>
                </tr>
              </thead>
              <tbody>
                {scheduleData.map((row, idx) => (
                  <tr key={idx}>
                    <td>{row.class}</td>
                    <td>{row.mon !== "—" ? <span className="cn-slot-pill">{row.mon}</span> : "—"}</td>
                    <td>{row.tue !== "—" ? <span className="cn-slot-pill">{row.tue}</span> : "—"}</td>
                    <td>{row.wed !== "—" ? <span className="cn-slot-pill">{row.wed}</span> : "—"}</td>
                    <td>{row.thu !== "—" ? <span className="cn-slot-pill">{row.thu}</span> : "—"}</td>
                    <td>{row.fri !== "—" ? <span className="cn-slot-pill">{row.fri}</span> : "—"}</td>
                    <td>{row.sat !== "—" ? <span className="cn-slot-pill">{row.sat}</span> : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 7. Mentors & Showcase */}
      <section id="cn-mentors" className="cn-section bg-white">
        <div className="cn-wrap">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="cn-eyebrow">
                <Heart className="w-3.5 h-3.5 text-pink-500" />
                INSPIRE & EMPOWER
              </span>
              <h2 className="cn-section-title mb-6">
                Learn from Patient & Encouraging STEM Mentors
              </h2>
              <p className="text-slate-600 text-base leading-relaxed mb-6">
                Our instructors hold Computer Science degrees and pass strict background checks. They bring patience, enthusiasm, and hands-on coding expertise to every session.
              </p>

              <div className="space-y-4">
                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Small Class Guarantee (12 Students Max)</h4>
                    <p className="text-xs text-slate-600">Every child gets direct mentor attention and live project feedback.</p>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-4">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Weekly Parent Progress Reports</h4>
                    <p className="text-xs text-slate-600">Track your child’s milestone achievements and project badges.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
              <img src={showcaseImage} alt="CodeNest Kids Mentor & Student Showcase" className="w-full h-[460px] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. Pricing & Free Trial */}
      <section id="cn-pricing" className="cn-section bg-light">
        <div className="cn-wrap">
          <div className="cn-section-head">
            <span className="cn-eyebrow">
              <Rocket className="w-3.5 h-3.5 text-amber-500" />
              SIMPLE TRANSPARENT PLANS
            </span>
            <h2 className="cn-section-title">Start with a Free Trial Class</h2>
          </div>

          <div className="cn-pricing-grid">
            <div className="cn-price-card">
              <h3 className="font-extrabold text-xl text-slate-900 mb-2">Starter Explorer</h3>
              <p className="text-slate-600 text-sm mb-6">1 Live Class per week with group coding labs.</p>
              <div className="text-4xl font-extrabold text-slate-900 mb-1">$129</div>
              <span className="text-xs font-mono text-slate-500 mb-6">per month (cancel anytime)</span>

              <ul className="space-y-3 text-sm text-slate-700 mb-8 flex-grow">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 12 Students max per class</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Weekly hands-on projects</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Parent progress updates</li>
              </ul>

              <button
                type="button"
                className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-colors"
                onClick={() => setTrialBooked(true)}
              >
                Book Free Trial
              </button>
            </div>

            <div className="cn-price-card popular">
              <span className="cn-popular-badge">MOST POPULAR</span>
              <h3 className="font-extrabold text-xl text-slate-900 mb-2">Junior Coder</h3>
              <p className="text-slate-600 text-sm mb-6">2 Live Classes per week + project showcase feedback.</p>
              <div className="text-4xl font-extrabold text-purple-700 mb-1">$199</div>
              <span className="text-xs font-mono text-slate-500 mb-6">per month (cancel anytime)</span>

              <ul className="space-y-3 text-sm text-slate-700 mb-8 flex-grow">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Everything in Starter plan</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 2 Live sessions per week</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Capstone game publishing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Certificate of Achievement</li>
              </ul>

              <button
                type="button"
                className="w-full bg-purple-600 text-white font-bold py-3.5 rounded-xl hover:bg-purple-700 transition-colors shadow-lg"
                onClick={() => setTrialBooked(true)}
              >
                Book Free Trial
              </button>
            </div>

            <div className="cn-price-card">
              <h3 className="font-extrabold text-xl text-slate-900 mb-2">Advanced STEM</h3>
              <p className="text-slate-600 text-sm mb-6">Robotics, AI modules, and 1-on-1 mentor guidance.</p>
              <div className="text-4xl font-extrabold text-slate-900 mb-1">$249</div>
              <span className="text-xs font-mono text-slate-500 mb-6">per month (cancel anytime)</span>

              <ul className="space-y-3 text-sm text-slate-700 mb-8 flex-grow">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Everything in Junior Coder</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Robotics hardware kits included</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Python & AI project labs</li>
              </ul>

              <button
                type="button"
                className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-colors"
                onClick={() => setTrialBooked(true)}
              >
                Book Free Trial
              </button>
            </div>
          </div>

          {trialBooked && (
            <div className="mt-8 max-w-md mx-auto bg-emerald-900/90 text-white p-4 rounded-xl border border-emerald-500/40 text-center">
              <CheckCircle2 className="w-6 h-6 text-emerald-300 mx-auto mb-1" />
              <h4 className="font-bold text-sm">Free Trial Reserved!</h4>
              <p className="text-xs text-emerald-200 mt-1">Check your email to select your preferred class time slot.</p>
            </div>
          )}
        </div>
      </section>

      {/* 9. FAQ Section */}
      <section id="cn-faq" className="cn-section bg-white">
        <div className="cn-wrap max-w-3xl">
          <div className="cn-section-head">
            <span className="cn-eyebrow">
              <Brain className="w-3.5 h-3.5 text-purple-600" />
              PARENT QUESTIONS ANSWERED
            </span>
            <h2 className="cn-section-title">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  type="button"
                  className="w-full p-5 text-left font-bold text-slate-900 flex items-center justify-between bg-slate-50 hover:bg-slate-100 transition-colors"
                  onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-slate-500 transition-transform ${openFaqIndex === idx ? "rotate-180" : ""}`} />
                </button>

                {openFaqIndex === idx && (
                  <div className="p-5 text-slate-600 text-sm bg-white border-t border-slate-200 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. Simple Clean Footer */}
      <footer className="cn-footer">
        <div className="cn-wrap">
          <div className="cn-footer-grid">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="cn-brand-icon-box !w-8 !h-8">
                  <Bot className="w-4 h-4 text-slate-950" />
                </div>
                <span className="font-extrabold text-white text-xl">CodeNest Kids</span>
              </div>
              <p className="text-sm text-slate-400 leading-relaxed">
                Inspiring young innovators to build, create, and shape the future with code.
              </p>
            </div>

            <div>
              <h4>Programs</h4>
              <ul className="cn-footer-links">
                <li><a href="#cn-programs" onClick={(e) => scrollTo(e, "cn-programs")}>Little Coders (6–8)</a></li>
                <li><a href="#cn-programs" onClick={(e) => scrollTo(e, "cn-programs")}>Junior Builders (9–11)</a></li>
                <li><a href="#cn-programs" onClick={(e) => scrollTo(e, "cn-programs")}>Future Developers (12–14)</a></li>
                <li><a href="#cn-programs" onClick={(e) => scrollTo(e, "cn-programs")}>Robotics & AI Lab</a></li>
              </ul>
            </div>

            <div>
              <h4>Quick Links</h4>
              <ul className="cn-footer-links">
                <li><a href="#cn-curriculum" onClick={(e) => scrollTo(e, "cn-curriculum")}>Curriculum Roadmap</a></li>
                <li><a href="#cn-schedule" onClick={(e) => scrollTo(e, "cn-schedule")}>Weekly Schedule</a></li>
                <li><a href="#cn-pricing" onClick={(e) => scrollTo(e, "cn-pricing")}>Tuition & Trial</a></li>
                <li><a href="#cn-faq" onClick={(e) => scrollTo(e, "cn-faq")}>FAQ</a></li>
              </ul>
            </div>

            <div>
              <h4>Contact Us</h4>
              <p className="text-sm text-slate-300 mb-2">hello@codenestkids.com</p>
              <p className="text-xs text-slate-400 mb-4">(555) 123-4567 • New York, NY</p>
              <a
                href="#cn-pricing"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-6 py-3 rounded-full text-xs transition-colors"
                onClick={(e) => scrollTo(e, "cn-pricing")}
              >
                Book Free Trial Class
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} CodeNest Kids LLC. All rights reserved. STEM Education Provider.
          </div>
        </div>
      </footer>
    </div>
  );
}
