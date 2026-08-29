import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Check,
  CheckCircle2,
  ChevronRight,
  Code2,
  Compass,
  Filter,
  GraduationCap,
  Hammer,
  HardHat,
  Heart,
  HelpCircle,
  Laptop,
  Layers,
  LayoutGrid,
  Lightbulb,
  MapPin,
  MoveRight,
  School,
  Search,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import "./EducationIndex.css";

// Individual Webpage Preview Images
import brightBridgeImg from "../../assets/optimized/education/brightbridge.webp";
import atlasCollegeImg from "../../assets/optimized/education/atlascollege.webp";
import codeNestImg from "../../assets/optimized/education/codenest.webp";
import examEdgeImg from "../../assets/optimized/education/examedge.webp";
import fluentPathImg from "../../assets/optimized/education/fluentpath.webp";
import tutorLoopImg from "../../assets/optimized/education/tutorloop.webp";
import skillForgeImg from "../../assets/optimized/education/skillforge.webp";
import scholarSpringImg from "../../assets/optimized/education/scholarspring.webp";
import proTrackImg from "../../assets/optimized/education/protrack.webp";

// Education Websites Full Dataset
const educationDirectory = [
  {
    id: "brightbridge",
    title: "BrightBridge Academy",
    badge: "K-12 Hybrid Academy",
    category: "k12",
    categoryName: "Online & Hybrid Academies",
    slug: "brightbridge-academy",
    image: brightBridgeImg,
    description: "A modern private hybrid school experience built for flexible schedules, STEM excellence, and university readiness.",
    audience: "K-12 Families & Students",
    style: "Academic, Trustworthy, Modern Navy & Amber",
    colors: ["#1e3a8a", "#f59e0b", "#10b981", "#0f172a"],
    tags: ["Hybrid K-12", "STEM Curriculum", "Campus Tours"],
    metrics: "98% College Acceptance • 12:1 Student Ratio",
  },
  {
    id: "atlascollege",
    title: "Atlas College Counseling",
    badge: "Admissions Guidance",
    category: "counseling",
    categoryName: "College Counseling & Prep",
    slug: "atlas-college-counseling",
    image: atlasCollegeImg,
    description: "Personalized Ivy League and top-tier university admissions counseling, essay workshops, and holistic roadmap planning.",
    audience: "High Schoolers & Parents",
    style: "Prestigious, Refined, Deep Indigo & Gold",
    colors: ["#1e1b4b", "#fbbf24", "#3b82f6", "#090d16"],
    tags: ["Ivy League Strategy", "1:1 Essay Mentorship", "Scholarship Guidance"],
    metrics: "94% Top-30 Admission • $4.2M Scholarships",
  },
  {
    id: "codenest",
    title: "CodeNest Kids",
    badge: "Kids Coding Academy",
    category: "k12",
    categoryName: "Online & Hybrid Academies",
    slug: "codenest-kids",
    image: codeNestImg,
    description: "Gamified, project-based programming for young creators aged 6-16 with Scratch, Python, Roblox Studio, and web apps.",
    audience: "Ages 6 – 16 & Parents",
    style: "Playful, Energetic, Electric Indigo & Neon Teal",
    colors: ["#6366f1", "#06b6d4", "#ec4899", "#0f172a"],
    tags: ["Roblox & Scratch", "Live Mentors", "Game Projects"],
    metrics: "18,000+ Young Creators • 450+ Games Built",
  },
  {
    id: "examedge",
    title: "ExamEdge Prep",
    badge: "Test Prep & Tutoring",
    category: "counseling",
    categoryName: "College Counseling & Prep",
    slug: "exam-edge-prep",
    image: examEdgeImg,
    description: "Adaptive SAT, ACT & AP test preparation platform with simulated exams, pinpoint weak-spot diagnostics, and score guarantees.",
    audience: "Standardized Test Takers",
    style: "High-Performance, Data-Driven, Navy & Cyan",
    colors: ["#0f172a", "#06b6d4", "#3b82f6", "#f59e0b"],
    tags: ["+180 Pt Guarantee", "Full-Length Mocks", "1:1 Coaching"],
    metrics: "+195 Avg SAT Leap • 98% 4+ on APs",
  },
  {
    id: "fluentpath",
    title: "FluentPath Languages",
    badge: "Language Immersion",
    category: "tutoring",
    categoryName: "Tutoring & Marketplaces",
    slug: "fluentpath-languages",
    image: fluentPathImg,
    description: "Live 1-on-1 language immersion with certified native tutors, CEFR milestones, business fluency, and real conversations.",
    audience: "Adult Learners & Professionals",
    style: "Warm, Sophisticated, Crimson, Emerald & Gold",
    colors: ["#e11d48", "#059669", "#d97706", "#0f172a"],
    tags: ["CEFR Alignment", "Native Tutors", "Accent Coaching"],
    metrics: "25+ Languages • 14,000+ Fluent Learners",
  },
  {
    id: "tutorloop",
    title: "TutorLoop Marketplace",
    badge: "Tutoring Marketplace",
    category: "tutoring",
    categoryName: "Tutoring & Marketplaces",
    slug: "tutorloop",
    image: tutorLoopImg,
    description: "A trusted marketplace to compare vetted subject tutors, book flexible sessions, simulate grade jumps, and track learning goals.",
    audience: "K-12 & College Students",
    style: "Futuristic, High-Tech, Cyber Indigo & Hyperlime",
    colors: ["#4f46e5", "#84cc16", "#06b6d4", "#030712"],
    tags: ["Smart Matching", "Grade Leap Predictor", "Instant Booking"],
    metrics: "1,200+ Vetted Tutors • 4.9/5 Rating",
  },
  {
    id: "skillforge",
    title: "SkillForge Workshops",
    badge: "Career Workshops",
    category: "career",
    categoryName: "Career Workshops & Trades",
    slug: "skillforge",
    image: skillForgeImg,
    description: "Practical, instructor-led career workshops focused on high-demand skills in UX, Data, AI, and Product with live cohort feedback.",
    audience: "Working Professionals & Switchers",
    style: "Industrial Cyber, Midnight Slate & Vivid Orange",
    colors: ["#f97316", "#06b6d4", "#8b5cf6", "#0a0f1d"],
    tags: ["Live Cohorts", "Portfolio Reviews", "Hiring Referrals"],
    metrics: "+41% Salary Growth • 92% Completion",
  },
  {
    id: "scholarspring",
    title: "ScholarSpring Preschool",
    badge: "Early Learning",
    category: "early",
    categoryName: "Early Learning & Preschool",
    slug: "scholarspring",
    image: scholarSpringImg,
    description: "A warm preschool enrollment experience built around play, safety, daily routine transparency, and joyful childhood discovery.",
    audience: "Toddlers (18m) to Pre-K (5y)",
    style: "Joyful, Pastel, Coral Watermelon & Sage Mint",
    colors: ["#fb7185", "#22c55e", "#f59e0b", "#0f172a"],
    tags: ["1:6 Low Ratio", "Daily Parent App", "Organic Meals"],
    metrics: "96% Kindergarten Ready • 98% Parent Trust",
  },
  {
    id: "protrack",
    title: "ProTrack Trades",
    badge: "Skilled-Trade Training",
    category: "career",
    categoryName: "Career Workshops & Trades",
    slug: "protrack",
    image: proTrackImg,
    description: "Direct enrollment experience for technical trades (Electrical, HVAC, Welding, Plumbing) with hands-on labs and job placement.",
    audience: "Career Starters & Apprentices",
    style: "Heavy Industrial, Construction Navy & Amber",
    colors: ["#f59e0b", "#0f172a", "#22c55e", "#080d1a"],
    tags: ["OSHA & NCCER Certs", "Evening Labs", "Apprenticeships"],
    metrics: "92% Job Placement • $18K Wage Growth",
  },
];

// UX Principles
const uxPrinciples = [
  {
    num: "01",
    title: "Make the Path Visible",
    desc: "Show clear programs, transparent tuition, weekly schedules, and the immediate next step without friction.",
    icon: Compass,
    accent: "icon-indigo",
  },
  {
    num: "02",
    title: "Build Trust Early",
    desc: "Lead with verified outcomes, faculty credentials, real learner projects, and transparent guarantees.",
    icon: ShieldCheck,
    accent: "icon-teal",
  },
  {
    num: "03",
    title: "Design for Decisions",
    desc: "Provide interactive filters, self-assessment simulators, and personalized booking flows for every family.",
    icon: Target,
    accent: "icon-amber",
  },
];

export function EducationIndex() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Filtered List
  const filteredWebsites = useMemo(() => {
    return educationDirectory.filter((site) => {
      const matchesCategory =
        activeCategory === "all" || site.category === activeCategory;
      const matchesSearch =
        site.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        site.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())) ||
        site.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <main className="edu-idx-app" id="top" tabIndex={-1}>
      {/* Hero Studio Banner */}
      <section className="edu-idx-hero">
        <div className="edu-idx-orb orb-1" />
        <div className="edu-idx-orb orb-2" />
        <div className="edu-idx-grid-overlay" />

        <div className="edu-idx-wrap hero-inner-grid">
          {/* Left Hero Content */}
          <div className="edu-idx-hero-copy">
            <Link to="/" className="edu-idx-back-link">
              ← Back to all 100 website categories
            </Link>

            <div className="edu-idx-live-badge">
              <span className="live-dot" />
              <span>{educationDirectory.length} COMPLETED EDUCATION PLATFORMS</span>
            </div>

            <h1 className="edu-idx-hero-title">
              Education experiences engineered for clarity, trust & enrollment.
            </h1>

            <p className="edu-idx-hero-desc">
              Explore bespoke web architectures for private academies, admissions counseling, tutoring marketplaces, early learning preschools, and skilled-trade institutes.
            </p>

            <div className="edu-idx-hero-actions">
              <a href="#directory" className="edu-idx-btn-primary">
                <span>Explore All 9 Websites</span>
                <ArrowRight size={17} />
              </a>
              <a href="#principles" className="edu-idx-btn-secondary">
                <span>Our UX Principles</span>
              </a>
            </div>

            <div className="edu-idx-hero-badges">
              <div className="edu-idx-badge-item">
                <CheckCircle2 size={16} className="text-emerald" />
                <span>100% Fully Responsive</span>
              </div>
              <div className="edu-idx-badge-item">
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Real Modals & Workflows</span>
              </div>
              <div className="edu-idx-badge-item">
                <CheckCircle2 size={16} className="text-emerald" />
                <span>WCAG Accessible</span>
              </div>
            </div>
          </div>

          {/* Right Hero Interactive Visual Showcase */}
          <div className="edu-idx-hero-showcase">
            <div className="edu-idx-preview-deck">
              <div className="edu-idx-preview-card card-front">
                <img src={tutorLoopImg} alt="TutorLoop Platform Preview" />
                <div className="edu-idx-card-foot">
                  <div>
                    <small>FEATURED PLATFORM</small>
                    <strong>TutorLoop Marketplace</strong>
                  </div>
                  <span className="edu-idx-live-tag">LIVE</span>
                </div>
              </div>

              <div className="edu-idx-preview-card card-back">
                <img src={skillForgeImg} alt="SkillForge Platform Preview" />
                <div className="edu-idx-card-foot">
                  <div>
                    <small>FEATURED PLATFORM</small>
                    <strong>SkillForge Workshops</strong>
                  </div>
                  <span className="edu-idx-live-tag">LIVE</span>
                </div>
              </div>

              <div className="edu-idx-floating-trust-pill">
                <Sparkles size={18} className="text-amber" />
                <div>
                  <strong>Engineered for Momentum</strong>
                  <small>From first impression to enrollment</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Navigation Bar & Search Strip */}
      <section className="edu-idx-filter-bar" id="directory">
        <div className="edu-idx-wrap filter-inner-row">
          {/* Category Filter Pills */}
          <div className="edu-idx-category-pills">
            {[
              { id: "all", label: "All Platforms", count: educationDirectory.length },
              { id: "k12", label: "Academies & K-12", count: 2 },
              { id: "counseling", label: "Counseling & Test Prep", count: 2 },
              { id: "tutoring", label: "Tutoring & Languages", count: 2 },
              { id: "career", label: "Career & Trades", count: 2 },
              { id: "early", label: "Preschool", count: 1 },
            ].map((cat) => (
              <button
                key={cat.id}
                className={`edu-idx-cat-pill ${activeCategory === cat.id ? "active" : ""}`}
                onClick={() => setActiveCategory(cat.id)}
              >
                <span>{cat.label}</span>
                <span className="pill-count">{cat.count}</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="edu-idx-search-box">
            <Search size={16} className="search-icon" />
            <input
              type="text"
              placeholder="Search by name, trade, or subject..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                className="clear-search"
                onClick={() => setSearchQuery("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Directory Grid of Live Education Websites */}
      <section className="edu-idx-grid-section">
        <div className="edu-idx-wrap">
          <div className="edu-idx-section-head">
            <div>
              <span className="edu-idx-eyebrow">LIVE DIRECTORY</span>
              <h2 className="edu-idx-heading">Explore Live Education Experiences</h2>
            </div>
            <p className="edu-idx-sub">
              Showing <strong>{filteredWebsites.length}</strong> crafted web platforms with tailored design systems, schedules, and conversion journeys.
            </p>
          </div>

          {filteredWebsites.length > 0 ? (
            <div className="edu-idx-cards-grid">
              {filteredWebsites.map((site, index) => (
                <article key={site.id} className="edu-idx-site-card">
                  {/* Browser Mockup Header */}
                  <div className="edu-idx-browser-bar">
                    <div className="edu-idx-browser-dots">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>
                    <span className="edu-idx-browser-url">https://{site.slug}.edu</span>
                    <span className="edu-idx-card-status">LIVE</span>
                  </div>

                  {/* Thumbnail Window with Hover Zoom */}
                  <Link to={`/education/${site.slug}`} className="edu-idx-thumb-link">
                    <div className="edu-idx-thumb-wrap">
                      <img src={site.image} alt={`${site.title} preview`} loading="lazy" />
                      <div className="edu-idx-thumb-overlay">
                        <span className="edu-idx-btn-hover-open">
                          <span>Launch Live Website</span>
                          <ArrowUpRight size={16} />
                        </span>
                      </div>
                    </div>
                  </Link>

                  {/* Card Content Body */}
                  <div className="edu-idx-card-body">
                    <div className="edu-idx-card-top-meta">
                      <span className="edu-idx-cat-tag">{site.badge}</span>
                      <span className="edu-idx-num-tag">0{index + 1}</span>
                    </div>

                    <h3 className="edu-idx-card-title">
                      <Link to={`/education/${site.slug}`}>{site.title}</Link>
                    </h3>

                    <p className="edu-idx-card-desc">{site.description}</p>

                    <div className="edu-idx-card-metric-strip">
                      <Award size={14} className="text-indigo" />
                      <span>{site.metrics}</span>
                    </div>

                    {/* Tag Pills */}
                    <div className="edu-idx-tags-row">
                      {site.tags.map((tag) => (
                        <span key={tag} className="edu-idx-tag-chip">
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Footer Row with Palette Swatches and Direct Link */}
                    <div className="edu-idx-card-footer">
                      <div className="edu-idx-swatches">
                        {site.colors.map((c) => (
                          <span
                            key={c}
                            className="swatch-dot"
                            style={{ backgroundColor: c }}
                            title={c}
                          />
                        ))}
                      </div>

                      <Link to={`/education/${site.slug}`} className="edu-idx-open-link">
                        <span>View Website</span>
                        <ArrowRight size={15} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="edu-idx-no-results">
              <BookOpen size={48} className="text-muted" />
              <h3>No education platforms found</h3>
              <p>Try searching for a different term or resetting the category filter.</p>
              <button
                onClick={() => {
                  setActiveCategory("all");
                  setSearchQuery("");
                }}
                className="edu-idx-btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* UX Principles & Design Architecture */}
      <section className="edu-idx-principles-section" id="principles">
        <div className="edu-idx-wrap">
          <div className="edu-idx-section-head light text-center">
            <span className="edu-idx-eyebrow text-emerald">DESIGN PHILOSOPHY</span>
            <h2 className="edu-idx-heading text-white">How Good UX Reduces Enrollment Anxiety</h2>
            <p className="edu-idx-sub text-muted">
              Education decisions carry significant personal, financial, and emotional weight. Our interface design answers practical questions immediately while building lasting family trust.
            </p>
          </div>

          <div className="edu-idx-principles-grid">
            {uxPrinciples.map((p) => {
              const IconComp = p.icon;
              return (
                <div key={p.num} className="edu-idx-principle-card">
                  <div className="principle-card-head">
                    <span className="principle-num">{p.num}</span>
                    <div className={`principle-icon-box ${p.accent}`}>
                      <IconComp size={22} />
                    </div>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Strip */}
      <section className="edu-idx-cta-section">
        <div className="edu-idx-wrap edu-idx-cta-box">
          <div className="edu-idx-cta-copy">
            <span className="edu-idx-eyebrow text-indigo">EXPLORE THE COMPLETE SUITE</span>
            <h2>Ready to explore tailored learning platforms?</h2>
            <p>From private schools to vocational trade apprenticeships, discover all 9 education web concepts.</p>
          </div>
          <div className="edu-idx-cta-buttons">
            <a href="#directory" className="edu-idx-btn-primary">
              <span>Back to Top</span>
              <ArrowUpRight size={17} />
            </a>
            <Link to="/" className="edu-idx-btn-secondary">
              <span>All Categories</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default EducationIndex;
