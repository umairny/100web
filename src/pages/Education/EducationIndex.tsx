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
  Eye,
  Filter,
  GraduationCap,
  Hammer,
  HardHat,
  Heart,
  HelpCircle,
  Laptop,
  Layers,
  LayoutGrid,
  List,
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
  X,
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
import learnSphereImg from "../../assets/optimized/education/leansphere.webp";

// Education Websites Full Dataset (All 10 Live Platforms)
export interface EducationPlatform {
  id: string;
  title: string;
  badge: string;
  category: "online" | "counseling" | "tutoring" | "career" | "early";
  categoryName: string;
  slug: string;
  image: string;
  description: string;
  audience: string;
  style: string;
  colors: string[];
  tags: string[];
  metrics: string;
  featuredHighlight: string;
  keyFeatures: string[];
}

const educationDirectory: EducationPlatform[] = [
  {
    id: "learnsphere",
    title: "LearnSphere Academy",
    badge: "Online Tech Academy",
    category: "online",
    categoryName: "Online & Hybrid Academies",
    slug: "learnsphere-academy",
    image: learnSphereImg,
    description: "Structured online tech education with live mentor guidance, weekly project labs, interactive student dashboard, and job-ready career cohorts.",
    audience: "Career Switchers & Tech Learners",
    style: "Structured, Modern, Royal Blue & Slate",
    colors: ["#2563eb", "#1d4ed8", "#eff6ff", "#0f172a"],
    tags: ["UI/UX & Frontend", "Live Mentorship", "Student Portal"],
    metrics: "92% Placement Rate • 12,500+ Learners",
    featuredHighlight: "Interactive student dashboard mockup & multi-week milestone tracker",
    keyFeatures: ["UI/UX, Frontend & Data Cohorts", "Weekly 1:1 Mentor Reviews", "Capstone Portfolio Builder"],
  },
  {
    id: "brightbridge",
    title: "BrightBridge Academy",
    badge: "K-12 Hybrid Academy",
    category: "online",
    categoryName: "Online & Hybrid Academies",
    slug: "brightbridge-academy",
    image: brightBridgeImg,
    description: "A modern private hybrid school experience built for flexible schedules, STEM excellence, campus life, and university readiness.",
    audience: "K-12 Families & Students",
    style: "Academic, Trustworthy, Modern Navy & Amber",
    colors: ["#1e3a8a", "#f59e0b", "#10b981", "#0f172a"],
    tags: ["Hybrid K-12", "STEM Curriculum", "Campus Tours"],
    metrics: "98% College Acceptance • 12:1 Student Ratio",
    featuredHighlight: "Academic pathways & interactive campus tour scheduler",
    keyFeatures: ["Dual Enrollment AP Courses", "1-on-1 Faculty Advisory", "Competitive Robotics Labs"],
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
    tags: ["Ivy League Strategy", "1:1 Essay Mentorship", "Scholarships"],
    metrics: "94% Top-30 Admission • $4.2M Scholarships",
    featuredHighlight: "Strategic 4-year high school admissions milestones",
    keyFeatures: ["Common App Essay Diagnostics", "Holistic Profile Evaluation", "Need & Merit Aid Guidance"],
  },
  {
    id: "codenest",
    title: "CodeNest Kids",
    badge: "Kids Coding Academy",
    category: "online",
    categoryName: "Online & Hybrid Academies",
    slug: "codenest-kids",
    image: codeNestImg,
    description: "Gamified, project-based programming for young creators aged 6-16 with Scratch, Python, Roblox Studio, and web apps.",
    audience: "Ages 6 – 16 & Parents",
    style: "Playful, Energetic, Electric Indigo & Neon Teal",
    colors: ["#6366f1", "#06b6d4", "#ec4899", "#0f172a"],
    tags: ["Roblox & Scratch", "Live Mentors", "Game Projects"],
    metrics: "18,000+ Young Creators • 450+ Games Built",
    featuredHighlight: "Playful interactive coding tracks and level-up badges",
    keyFeatures: ["Scratch & Roblox Studio", "Python Game Development", "Free Trial Booking Flow"],
  },
  {
    id: "examedge",
    title: "ExamEdge Prep",
    badge: "Test Prep & Tutoring",
    category: "counseling",
    categoryName: "College Counseling & Prep",
    slug: "exam-edge-prep",
    image: examEdgeImg,
    description: "Adaptive SAT, ACT & AP test preparation platform with simulated exams, pinpoint weak-spot diagnostics, and score leap guarantees.",
    audience: "Standardized Test Takers",
    style: "High-Performance, Data-Driven, Navy & Cyan",
    colors: ["#0f172a", "#06b6d4", "#3b82f6", "#f59e0b"],
    tags: ["+180 Pt Guarantee", "Full-Length Mocks", "1:1 Coaching"],
    metrics: "+195 Avg SAT Leap • 98% 4+ on APs",
    featuredHighlight: "Real-time score increase simulator & adaptive testing mockups",
    keyFeatures: ["Diagnostic Weakness Mapping", "Official SAT/ACT Question Bank", "Score Jump Guarantee"],
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
    featuredHighlight: "CEFR level benchmarks & interactive native speaker tutor profiles",
    keyFeatures: ["25+ World Languages", "Accent & Business Fluency", "Flexible Scheduling Calendar"],
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
    style: "High-Trust, Modern, Cyber Indigo & Hyperlime",
    colors: ["#4f46e5", "#84cc16", "#06b6d4", "#030712"],
    tags: ["Smart Matching", "Grade Leap Predictor", "Instant Booking"],
    metrics: "1,200+ Vetted Tutors • 4.9/5 Rating",
    featuredHighlight: "Grade boost predictor calculator & instant tutor matching widget",
    keyFeatures: ["Background-Checked Tutors", "All K-12 & STEM Subjects", "Instant Booking & Messaging"],
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
    featuredHighlight: "Intensive weekend masterclasses with direct corporate portfolio audits",
    keyFeatures: ["Instructor-Led Sprints", "Real-World Project Labs", "Alumni Talent Network"],
  },
  {
    id: "scholarspring",
    title: "ScholarSpring Preschool",
    badge: "Early Learning Preschool",
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
    featuredHighlight: "Classroom age explorer & interactive tour booking modal",
    keyFeatures: ["Play-Based Reggio & Montessori", "Real-Time Parent Mobile App", "Secure Keycard Entry"],
  },
  {
    id: "protrack",
    title: "ProTrack Trades",
    badge: "Skilled-Trade Training",
    category: "career",
    categoryName: "Career Workshops & Trades",
    slug: "protrack",
    image: proTrackImg,
    description: "Direct enrollment experience for technical trades (Electrical, HVAC, Welding, Plumbing, Automation) with hands-on labs and placement.",
    audience: "Career Starters & Apprentices",
    style: "Heavy Industrial, Construction Navy & Amber",
    colors: ["#f59e0b", "#0f172a", "#22c55e", "#080d1a"],
    tags: ["OSHA & NCCER Certs", "Evening Labs", "Apprenticeships"],
    metrics: "92% Job Placement • $18K Wage Growth",
    featuredHighlight: "Interactive Trade Career & Wage Estimator + Hands-on Lab Spaces Explorer",
    keyFeatures: ["6 Certified Trade Tracks", "Day, Evening & Weekend Shifts", "150+ Employer Hiring Network"],
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
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState<"featured" | "az" | "metrics">("featured");
  const [previewModalSite, setPreviewModalSite] = useState<EducationPlatform | null>(null);

  // Category counts calculation
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {
      all: educationDirectory.length,
      online: 0,
      counseling: 0,
      tutoring: 0,
      career: 0,
      early: 0,
    };
    educationDirectory.forEach((site) => {
      if (counts[site.category] !== undefined) {
        counts[site.category]++;
      }
    });
    return counts;
  }, []);

  // Filtered & Sorted List
  const filteredWebsites = useMemo(() => {
    const list = educationDirectory.filter((site) => {
      const matchesCategory =
        activeCategory === "all" || site.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        site.title.toLowerCase().includes(q) ||
        site.description.toLowerCase().includes(q) ||
        site.tags.some((t) => t.toLowerCase().includes(q)) ||
        site.badge.toLowerCase().includes(q) ||
        site.categoryName.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });

    if (sortBy === "az") {
      return list.sort((a, b) => a.title.localeCompare(b.title));
    }
    return list;
  }, [activeCategory, searchQuery, sortBy]);

  return (
    <main className="edu-idx-app" id="top" tabIndex={-1}>
      {/* 1. Hero Studio Banner */}
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
              Explore 10 handcrafted, production-ready web architectures across online tech academies, K-12 private schools, college counseling, tutoring marketplaces, preschools, and vocational trade institutes.
            </p>

            <div className="edu-idx-hero-actions">
              <a href="#directory" className="edu-idx-btn-primary">
                <span>Explore All 10 Platforms</span>
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
                <span>Working Modals & Workflows</span>
              </div>
              <div className="edu-idx-badge-item">
                <CheckCircle2 size={16} className="text-emerald" />
                <span>Zero Placeholder Content</span>
              </div>
            </div>
          </div>

          {/* Right Hero Interactive Visual Showcase */}
          <div className="edu-idx-hero-showcase">
            <div className="edu-idx-preview-deck">
              <div className="edu-idx-preview-card card-front">
                <img src={learnSphereImg} alt="LearnSphere Academy Preview" />
                <div className="edu-idx-card-foot">
                  <div>
                    <small>FEATURED COHORT PLATFORM</small>
                    <strong>LearnSphere Academy</strong>
                  </div>
                  <span className="edu-idx-live-tag">LIVE</span>
                </div>
              </div>

              <div className="edu-idx-preview-card card-back">
                <img src={proTrackImg} alt="ProTrack Trades Preview" />
                <div className="edu-idx-card-foot">
                  <div>
                    <small>SKILLED TRADES ACADEMY</small>
                    <strong>ProTrack Trades</strong>
                  </div>
                  <span className="edu-idx-live-tag">LIVE</span>
                </div>
              </div>

              <div className="edu-idx-floating-trust-pill">
                <Sparkles size={18} className="text-amber" />
                <div>
                  <strong>Engineered for Momentum</strong>
                  <small>10 Distinct Educational Business Models</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Ecosystem Key Metrics Bar */}
      <section className="edu-idx-ecosystem-bar">
        <div className="edu-idx-wrap edu-idx-ecosystem-grid">
          <div className="edu-idx-eco-stat">
            <strong>10</strong>
            <span>Active Web Platforms</span>
          </div>
          <div className="edu-idx-eco-stat">
            <strong>50,000+</strong>
            <span>Learners Impacted</span>
          </div>
          <div className="edu-idx-eco-stat">
            <strong>98%</strong>
            <span>Average Family Trust</span>
          </div>
          <div className="edu-idx-eco-stat">
            <strong>150+</strong>
            <span>Hiring & College Partners</span>
          </div>
          <div className="edu-idx-eco-stat">
            <strong>100%</strong>
            <span>Device Responsive</span>
          </div>
        </div>
      </section>

      {/* 3. Category Navigation Bar & Search Strip */}
      <section className="edu-idx-filter-bar" id="directory">
        <div className="edu-idx-wrap filter-inner-row">
          {/* Category Filter Pills */}
          <div className="edu-idx-category-pills">
            {[
              { id: "all", label: "All Platforms", count: categoryCounts.all },
              { id: "online", label: "Academies & K-12", count: categoryCounts.online },
              { id: "counseling", label: "Counseling & Test Prep", count: categoryCounts.counseling },
              { id: "tutoring", label: "Tutoring & Languages", count: categoryCounts.tutoring },
              { id: "career", label: "Career & Trades", count: categoryCounts.career },
              { id: "early", label: "Preschool", count: categoryCounts.early },
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

          {/* Search Box & Controls */}
          <div className="edu-idx-controls-group">
            <div className="edu-idx-search-box">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder="Search by title, curriculum, or tag..."
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

            {/* View Mode Switcher */}
            <div className="edu-idx-view-toggle">
              <button
                className={`view-toggle-btn ${viewMode === "grid" ? "active" : ""}`}
                onClick={() => setViewMode("grid")}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid size={16} />
              </button>
              <button
                className={`view-toggle-btn ${viewMode === "list" ? "active" : ""}`}
                onClick={() => setViewMode("list")}
                title="List View"
                aria-label="List View"
              >
                <List size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Directory Section of Live Education Websites */}
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
            viewMode === "grid" ? (
              /* GRID CARDS VIEW */
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
                      <span className="edu-idx-card-status">LIVE & INTERACTIVE</span>
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
                        <span className="edu-idx-num-tag">{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
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
                              title={`Theme color ${c}`}
                            />
                          ))}
                        </div>

                        <div className="edu-idx-card-actions">
                          <button
                            onClick={() => setPreviewModalSite(site)}
                            className="edu-idx-quick-btn"
                            title="Quick Overview"
                          >
                            <Eye size={14} />
                            <span>Quick Info</span>
                          </button>
                          <Link to={`/education/${site.slug}`} className="edu-idx-open-link">
                            <span>Launch</span>
                            <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              /* LIST / MATRIX VIEW */
              <div className="edu-idx-list-container">
                <div className="edu-idx-list-header">
                  <span>PLATFORM</span>
                  <span>CATEGORY & AUDIENCE</span>
                  <span>KEY METRICS</span>
                  <span>THEME</span>
                  <span>ACTIONS</span>
                </div>
                <div className="edu-idx-list-rows">
                  {filteredWebsites.map((site) => (
                    <div key={site.id} className="edu-idx-list-row">
                      <div className="edu-list-col-main">
                        <img src={site.image} alt={site.title} className="edu-list-thumb" />
                        <div>
                          <Link to={`/education/${site.slug}`} className="edu-list-title">
                            {site.title}
                          </Link>
                          <small className="edu-list-slug">/education/{site.slug}</small>
                        </div>
                      </div>

                      <div className="edu-list-col-cat">
                        <span className="edu-idx-cat-tag">{site.badge}</span>
                        <small className="edu-list-audience">{site.audience}</small>
                      </div>

                      <div className="edu-list-col-metrics">
                        <span className="edu-list-metrics-badge">{site.metrics}</span>
                      </div>

                      <div className="edu-list-col-colors">
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
                      </div>

                      <div className="edu-list-col-actions">
                        <button
                          onClick={() => setPreviewModalSite(site)}
                          className="edu-idx-quick-btn"
                        >
                          <Eye size={14} />
                        </button>
                        <Link to={`/education/${site.slug}`} className="edu-idx-btn-primary mini">
                          <span>Launch</span>
                          <ArrowRight size={13} />
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
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

      {/* 5. UX Principles & Design Architecture */}
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

      {/* 6. Bottom CTA Strip */}
      <section className="edu-idx-cta-section">
        <div className="edu-idx-wrap edu-idx-cta-box">
          <div className="edu-idx-cta-copy">
            <span className="edu-idx-eyebrow text-indigo">EXPLORE THE COMPLETE SUITE</span>
            <h2>Ready to explore tailored learning platforms?</h2>
            <p>From private academies to vocational trade institutes, discover all 10 live education web concepts.</p>
          </div>
          <div className="edu-idx-cta-buttons">
            <a href="#directory" className="edu-idx-btn-primary">
              <span>Back to Directory</span>
              <ArrowUpRight size={17} />
            </a>
            <Link to="/" className="edu-idx-btn-secondary">
              <span>All Categories</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Info Modal */}
      {previewModalSite && (
        <div
          className="edu-modal-backdrop"
          onClick={() => setPreviewModalSite(null)}
        >
          <div
            className="edu-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="edu-modal-close"
              onClick={() => setPreviewModalSite(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="edu-modal-top">
              <span className="edu-idx-cat-tag">{previewModalSite.badge}</span>
              <h2>{previewModalSite.title}</h2>
              <p>{previewModalSite.description}</p>
            </div>

            <div className="edu-modal-img-frame">
              <img src={previewModalSite.image} alt={previewModalSite.title} />
            </div>

            <div className="edu-modal-body">
              <div className="edu-modal-details-grid">
                <div>
                  <small>TARGET AUDIENCE</small>
                  <strong>{previewModalSite.audience}</strong>
                </div>
                <div>
                  <small>VERIFIED METRICS</small>
                  <strong>{previewModalSite.metrics}</strong>
                </div>
              </div>

              <div className="edu-modal-features">
                <small>HIGHLIGHTED ARCHITECTURE:</small>
                <p className="edu-modal-feature-note">{previewModalSite.featuredHighlight}</p>
                <ul>
                  {previewModalSite.keyFeatures.map((feat) => (
                    <li key={feat}>
                      <CheckCircle2 size={15} className="text-emerald" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="edu-modal-action-row">
                <Link
                  to={`/education/${previewModalSite.slug}`}
                  className="edu-idx-btn-primary full-w"
                >
                  <span>Launch {previewModalSite.title}</span>
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default EducationIndex;
