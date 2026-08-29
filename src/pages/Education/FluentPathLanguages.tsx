import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  Calendar,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Clock3,
  Compass,
  FileCheck2,
  FileText,
  Flame,
  Globe,
  Globe2,
  GraduationCap,
  HeartHandshake,
  HelpCircle,
  Laptop,
  Languages,
  LineChart,
  Lock,
  Mail,
  Menu,
  MessageCircle,
  Mic,
  Percent,
  Phone,
  Play,
  RotateCcw,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Video,
  Volume2,
  X,
  Zap,
} from "lucide-react";
import "./FluentPathLanguages.css";

// Import generated photo assets
import heroImgUrl from "../../assets/optimized/education/fluentpath/hero.jpg";
import instructorDanielaImg from "../../assets/optimized/education/fluentpath/instructor-daniela.jpg";
import instructorMichaelImg from "../../assets/optimized/education/fluentpath/instructor-michael.jpg";
import instructorLeilaImg from "../../assets/optimized/education/fluentpath/instructor-leila.jpg";
import instructorJeanImg from "../../assets/optimized/education/fluentpath/instructor-jean.jpg";
import classroomImgUrl from "../../assets/optimized/education/fluentpath/classroom.jpg";

// Language programs dataset
const programsData = [
  {
    id: "spanish-mastery",
    language: "Spanish",
    flag: "🇪🇸",
    tag: "Most Popular",
    badgeColor: "terracotta",
    title: "Spanish for Real-Life & Travel Fluency",
    cefr: "A1 ➔ B2 (Foundations to Advanced)",
    duration: "12 Weeks (36 Live Hours)",
    format: "Small Cohort (Max 6) + Speaking Labs",
    description: "Master conversational Spanish for travel, daily life, and cultural immersion with natural pronunciation, spontaneous dialogues, and essential grammar frameworks.",
    highlights: [
      "2x Weekly Live Speaking Cohort Classes",
      "Weekly Wine & Tapas Virtual Conversation Club",
      "Native-Speaker Audio Roleplays & Pronunciation Lab",
      "Official CEFR B2 Certificate of Completion",
    ],
    price: "$249/mo",
  },
  {
    id: "english-business",
    language: "English",
    flag: "🇬🇧",
    tag: "Career Accelerator",
    badgeColor: "navy",
    title: "English for Global Professionals & Executive Meetings",
    cefr: "B1 ➔ C1 (Intermediate to Fluency)",
    duration: "12 Weeks (40 Live Hours)",
    format: "Executive Seminar + 1:1 Coaching",
    description: "Conquer boardroom presentations, cross-border negotiations, email precision, and clear accent modulation for high-stakes international business careers.",
    highlights: [
      "Business Case Study Discussions & Pitch Practice",
      "Executive Vocabulary & Email Crafting Lab",
      "Bi-Weekly 1:1 Private Pronunciation Feedback",
      "LinkedIn Verified CEFR C1 Professional Credential",
    ],
    price: "$279/mo",
  },
  {
    id: "french-culture",
    language: "French",
    flag: "🇫🇷",
    tag: "Culture & Living",
    badgeColor: "blue",
    title: "French for Communication, Arts & Living Abroad",
    cefr: "A1 ➔ B2 (Beginner to Fluent)",
    duration: "12 Weeks (36 Live Hours)",
    format: "Live Interactive + Cultural Immersion",
    description: "Develop authentic Parisian rhythm, conversational confidence, and cultural competence for relocating, studying, or savoring the French lifestyle.",
    highlights: [
      "Authentic French Cinema & Literature Seminars",
      "Interactive Cafe & Everyday Scenarios Workshop",
      "Subjunctive & Verb Tense Mastery Without Rote Memorization",
      "Comprehensive DELF / DALF Exam Preparation Track",
    ],
    price: "$249/mo",
  },
  {
    id: "german-work",
    language: "German",
    flag: "🇩🇪",
    tag: "Work & Relocation",
    badgeColor: "sage",
    title: "German for Career, Tech & University Relocation",
    cefr: "A1 ➔ B2 (Complete Pathway)",
    duration: "12 Weeks (40 Live Hours)",
    format: "Live Online + Technical Writing Lab",
    description: "Build robust grammar foundations, technical workplace vocabulary, and spontaneous speaking skills tailored for the German, Austrian, and Swiss job markets.",
    highlights: [
      "German Workplace Culture & Business Etiquette",
      "Case Accusative / Dative Demystification Drills",
      "Job Interview & Visa Assessment Simulations",
      "Goethe-Zertifikat B1/B2 Practice Modules",
    ],
    price: "$269/mo",
  },
  {
    id: "arabic-foundations",
    language: "Arabic",
    flag: "🇦🇪",
    tag: "Heritage & Business",
    badgeColor: "gold",
    title: "Modern Standard & Levantine Arabic Foundations",
    cefr: "A1 ➔ B1 (Alphabet to Conversation)",
    duration: "12 Weeks (36 Live Hours)",
    format: "Interactive Studio + Audio Practice",
    description: "From reading the beautiful Arabic script in week one to holding lively conversations in Modern Standard Arabic and everyday Spoken Levantine dialect.",
    highlights: [
      "Rapid Arabic Script & Calligraphy Mastery Module",
      "Dialect vs. MSA Dual-Stream Speaking Framework",
      "Middle East Commercial & Cultural Nuance Coaching",
      "1:1 Weekly Pronunciation Audio Reviews",
    ],
    price: "$249/mo",
  },
  {
    id: "italian-lifestyle",
    language: "Italian",
    flag: "🇮🇹",
    tag: "Travel & Heritage",
    badgeColor: "terracotta",
    title: "Italian for Travel, Gastronomy & Dolce Vita",
    cefr: "A1 ➔ B2 (Conversational Pathway)",
    duration: "10 Weeks (30 Live Hours)",
    format: "Live Interactive + Travel Labs",
    description: "Immerse yourself in melodic Italian cadence, regional colloquialisms, food vocabulary, and effortless small talk for your next journey through Italy.",
    highlights: [
      "Regional Dialects & Italian Travel Simulation",
      "Art, History & Gastronomy Discussion Clubs",
      "Gesture & Conversational Rhythm Workshops",
      "Certificate of Italian Language Competence",
    ],
    price: "$229/mo",
  },
];

// Expert Instructors dataset
const instructorsData = [
  {
    name: "Daniela Ruiz",
    role: "Lead Spanish & Hispanic Culture Specialist",
    origin: "Madrid, Spain & Salamanca",
    alma: "Universidad de Salamanca (M.A. Applied Hispanic Linguistics)",
    experience: "11+ Years Teaching Adult Learners",
    students: "1,400+ Fluent Graduates",
    img: instructorDanielaImg,
    badge: "Native Castilian & Latin Am. Specialist",
    bio: "Daniela believes language is a bridge to authentic human connection. Her dynamic immersion workshops combine cultural storytelling with practical conversational instincts.",
  },
  {
    name: "Michael Chen",
    role: "Director of Business English & IELTS",
    origin: "London, UK & Cambridge",
    alma: "University of Cambridge (Delta / M.A. TESOL)",
    experience: "12+ Years Corporate Language Coaching",
    students: "1,850+ Executives & Professionals",
    img: instructorMichaelImg,
    badge: "Cambridge Delta Certified Master Coach",
    bio: "Former executive communication consultant in London and Singapore. Michael specializes in unlocking effortless confidence for non-native leaders in high-stakes environments.",
  },
  {
    name: "Leila Haddad",
    role: "Head of Arabic & Levantine Studies",
    origin: "Beirut, Lebanon",
    alma: "American University of Beirut (M.A. Arabic Literature & Pedagogy)",
    experience: "9+ Years Adult Immersion Instruction",
    students: "920+ Fluent Graduates",
    img: instructorLeilaImg,
    badge: "MSA & Levantine Dialect Expert",
    bio: "Leila has guided diplomats, journalists, and heritage learners to Arabic fluency using her proprietary phonetic deconstruction method.",
  },
  {
    name: "Jean-Baptiste Lefèvre",
    role: "French Literature & DELF Specialist",
    origin: "Paris, France",
    alma: "Sorbonne Université (M.A. French Pedagogy & Philosophy)",
    experience: "10+ Years International Language Coaching",
    students: "1,200+ Fluent Graduates",
    img: instructorJeanImg,
    badge: "Sorbonne Alum & DELF Examiner",
    bio: "Born and raised in Paris, Jean-Baptiste turns complex French grammar and idioms into intuitive conversations through cinema, literature, and humor.",
  },
];

// Interactive Placement Quiz Questions
const quizQuestions = [
  {
    id: 1,
    subject: "Conversational Instinct & Context",
    prompt: "A colleague in Madrid asks you: '¿Te apetece tomar un café después de la reunión?' What is the most natural, idiomatic response?",
    options: [
      { text: "A) ¡Claro que sí! Me vendría genial desconectar un poco.", isCorrect: true, cefr: "B1/B2 Natural" },
      { text: "B) Yo bebo café en la mesa con leche.", isCorrect: false, cefr: "A1 Literal" },
      { text: "C) El café es una bebida caliente de Colombia.", isCorrect: false, cefr: "A1 Grammar" },
      { text: "D) Sí, reunión es buena para nosotros.", isCorrect: false, cefr: "A0 Broken" },
    ],
    explanation: "'Me vendría genial desconectar un poco' demonstrates natural phrasing, conversational agility, and idiomatic ease.",
    tip: "FluentPath Method: We replace rigid textbook phrasing with real colloquial phrases used by native speakers daily.",
  },
  {
    id: 2,
    subject: "Professional English Precision",
    prompt: "Which sentence conveys diplomacy and authority when requesting a project revision from senior leadership?",
    options: [
      { text: "A) You made mistakes, so please change the entire timeline now.", isCorrect: false, cefr: "A2 Direct" },
      { text: "B) In light of the recent client feedback, I propose we adjust the milestones to ensure optimal deliverable quality.", isCorrect: true, cefr: "B2/C1 Executive" },
      { text: "C) We can maybe do something different if everyone is agreeing.", isCorrect: false, cefr: "B1 Hesitant" },
      { text: "D) The project is not happy with current dates.", isCorrect: false, cefr: "A1 Syntax" },
    ],
    explanation: "Option B utilizes diplomatic framing ('In light of...', 'I propose we adjust...') essential for international executive discussions.",
    tip: "FluentPath Method: Executive English classes drill pragmatic diplomacy and persuasive nuance.",
  },
  {
    id: 3,
    subject: "French Nuance & Social Register",
    prompt: "You are invited to a dinner party in Paris. How do you warmly compliment the host on the homemade meal?",
    options: [
      { text: "A) Ce plat est vraiment succulent, vous me donnerez la recette !", isCorrect: true, cefr: "B1/B2 Courteous" },
      { text: "B) La nourriture a des calories suffisantes pour moi.", isCorrect: false, cefr: "A1 Literal" },
      { text: "C) Je mange votre cuisine rapidement.", isCorrect: false, cefr: "A1 Mechanical" },
      { text: "D) C'est un dîner de Paris.", isCorrect: false, cefr: "A0 Fragment" },
    ],
    explanation: "'C'est vraiment succulent, vous me donnerez la recette !' is a quintessential warm French social compliment showing cultural flair.",
    tip: "FluentPath Method: Cultural etiquette is integrated seamlessly into every speaking module.",
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Senior UX Designer (Berlin)",
    lang: "German for Work",
    flag: "🇩🇪",
    gain: "A2 ➔ B2 in 14 Weeks",
    quote: "I had tried apps for two years and couldn't order a coffee without panicking. With FluentPath's live cohorts and Daniela's coaching, I just passed my B2 exam and lead design sprints in German!",
  },
  {
    name: "Arjun Patel",
    role: "Product Director (Global Fintech)",
    lang: "Business English & Executive",
    flag: "🇬🇧",
    gain: "C1 Fluency Mastered",
    quote: "The executive communication scenarios with Michael gave me the vocabulary and subtle diplomacy I needed for global boardroom pitches. My speaking confidence grew exponentially.",
  },
  {
    name: "Claire Montagne",
    role: "Travel Journalist & Author",
    lang: "Spanish Immersion",
    flag: "🇪🇸",
    gain: "B1 ➔ C1 Cultural Fluency",
    quote: "The wine and conversation clubs were the highlight of my week. You aren't memorizing conjugations in a void—you're laughing, debating, and living the language with incredible people.",
  },
];

// FAQs dataset
const faqs = [
  {
    q: "How does the FluentPath Placement Call & Assessment work?",
    a: "You'll meet 1-on-1 for 15 minutes with a Senior Language Advisor over video. We assess your spoken comfort, listening comprehension, grammar agility, and exact learning goals, placing you into a perfectly matched cohort of peers at your level.",
  },
  {
    q: "How large are the live cohort classes?",
    a: "We keep all our live group cohorts strictly capped at 4 to 6 adult students. This ensures that every learner speaks for a minimum of 20 to 30 minutes in every single 60-minute session with direct instructor guidance.",
  },
  {
    q: "What if I miss a live class due to work or travel?",
    a: "All live classes are recorded in HD and uploaded to your student portal within 2 hours, complete with searchable transcripts, instructor whiteboard notes, and speaking exercises. You can also drop into an alternate live session during the same week.",
  },
  {
    q: "Are the instructors native speakers with certified credentials?",
    a: "Yes, 100%. Every FluentPath instructor is a native speaker with a Master’s degree in Applied Linguistics, TESOL, or modern language pedagogy, and has a minimum of 5 years experience coaching adult professionals.",
  },
  {
    q: "Do I receive an official CEFR certificate upon graduation?",
    a: "Yes. Upon completing your 12-week course and passing the final spoken fluency capstone project, you receive a verified, shareable digital CEFR certificate recognized by employers and institutions worldwide.",
  },
  {
    q: "What is your 14-Day Fluency Guarantee?",
    a: "If after your first two weeks you don't feel noticeably more confident speaking your target language, simply let us know. We will switch your instructor, adjust your cohort level, or provide a 100% full refund with no hassle.",
  },
];

export function FluentPathLanguages() {
  // Navigation & Scroll State
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#top");

  // Program Filter State
  const [programFilter, setProgramFilter] = useState("All");

  // Interactive Placement Quiz State
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number>>({});
  const [quizShowExp, setQuizShowExp] = useState<Record<number, boolean>>({});

  // Calculator State
  const [calcLang, setCalcLang] = useState("Spanish");
  const [currentLevel, setCurrentLevel] = useState("A2 (Elementary)");
  const [targetGoal, setTargetGoal] = useState("B2 (Fluent Conversational)");

  // Schedule Tab State
  const [scheduleTime, setScheduleTime] = useState<"evening" | "weekend" | "morning">("evening");

  // Pricing Toggle (Monthly vs Full Cohort)
  const [billingCycle, setBillingCycle] = useState<"monthly" | "cohort">("monthly");

  // Instructor Modal State
  const [selectedInstructor, setSelectedInstructor] = useState<any | null>(null);

  // Placement Call Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    language: "Spanish",
    currentLevel: "Beginner (A1/A2)",
    preferredTime: "Weekday Evenings (6-9 PM)",
    goal: "Career & Workplace Fluency",
  });

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Newsletter State
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  // Sticky navbar listener & scrollspy
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const sections = ["top", "quiz", "programs", "calculator", "curriculum", "schedule", "instructors", "outcomes", "pricing", "faq"];
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sectionId = sections[i];
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveNav(`#${sectionId}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Body scroll lock & escape listener for mobile drawer and modals
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mobileMenuOpen) setMobileMenuOpen(false);
        if (isBookingOpen) setIsBookingOpen(false);
        if (selectedInstructor) setSelectedInstructor(null);
      }
    };

    const handleResize = () => {
      if (window.innerWidth > 1180 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    if (mobileMenuOpen || isBookingOpen || selectedInstructor) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("resize", handleResize);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, isBookingOpen, selectedInstructor]);

  // Smooth scroll handler
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveNav(href);
    setMobileMenuOpen(false);

    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 80;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setIsBookingOpen(false);
    }, 2800);
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setNewsletterSuccess(true);
    setTimeout(() => setNewsletterSuccess(false), 3500);
    setNewsletterEmail("");
  };

  const filteredPrograms = programsData.filter((p) => {
    if (programFilter === "All") return true;
    return p.language === programFilter;
  });

  return (
    <main className="fl-site" id="top" tabIndex={-1}>
      {/* Sticky Header & Top Notification Bar */}
      <header className={`fl-header-wrapper ${isScrolled ? "scrolled" : ""}`}>
        {/* Top Announcement Bar */}
        <div className="fl-top-bar">
          <div className="fl-wrap fl-top-bar-content">
            <div className="fl-top-bar-text">
              <Sparkles className="icon-gold icon-sparkle" size={14} />
              <span>
                <strong>Summer & Fall 2026 Live Language Cohorts Open</strong>
                <span className="fl-top-bar-sub"> — Small cohorts limited to 6 adult learners per class</span>
              </span>
            </div>
            <button
              onClick={() => setIsBookingOpen(true)}
              className="fl-top-bar-btn"
              aria-label="Book Free Placement Call"
            >
              <span>Book Placement Call</span>
              <ArrowRight size={13} className="fl-btn-arrow" />
            </button>
          </div>
        </div>

        {/* Main Sticky Navbar */}
        <nav className="fl-nav" aria-label="Main Navigation">
          <div className="fl-wrap fl-nav-inner">
            <a
              href="#top"
              className="fl-brand"
              onClick={(e) => handleNavClick(e, "#top")}
              aria-label="FluentPath Languages Home"
            >
              <div className="fl-brand-badge">
                <Globe2 size={22} />
              </div>
              <div className="fl-brand-text">
                <span className="fl-brand-title">Fluent<span className="fl-highlight">Path</span></span>
                <span className="fl-brand-sub">LANGUAGES & CULTURE</span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <div className="fl-nav-links">
              {[
                { name: "Overview", href: "#top" },
                { name: "Placement Quiz", href: "#quiz" },
                { name: "Programs", href: "#programs" },
                { name: "Curriculum", href: "#curriculum" },
                { name: "Schedule", href: "#schedule" },
                { name: "Instructors", href: "#instructors" },
                { name: "Outcomes", href: "#outcomes" },
                { name: "Pricing", href: "#pricing" },
                { name: "FAQ", href: "#faq" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`fl-nav-link ${activeNav === item.href ? "active" : ""}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right Action Buttons */}
            <div className="fl-nav-cta-wrap">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="fl-btn-terracotta fl-nav-cta-btn"
              >
                <CalendarDays size={16} />
                <span>Book Placement Call</span>
              </button>

              <button
                className={`fl-mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Off-Canvas Mobile Drawer Overlay */}
      <div
        className={`fl-mobile-backdrop ${mobileMenuOpen ? "is-visible" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      />

      {/* Off-Canvas Mobile Drawer */}
      <div
        className={`fl-mobile-drawer ${mobileMenuOpen ? "is-open" : ""}`}
        aria-hidden={!mobileMenuOpen}
      >
        <div className="fl-mobile-drawer-header">
          <div className="fl-brand-mini">
            <div className="fl-brand-badge-mini">
              <Globe2 size={18} />
            </div>
            <div className="fl-brand-text">
              <span className="fl-brand-title-mini">Fluent<span className="fl-highlight">Path</span></span>
              <span className="fl-brand-sub-mini">LANGUAGES</span>
            </div>
          </div>
          <button
            className="fl-mobile-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation drawer"
          >
            <X size={20} />
          </button>
        </div>

        <div className="fl-mobile-drawer-body">
          <div className="fl-mobile-menu-label">Navigation Menu</div>
          <div className="fl-mobile-menu-links">
            {[
              { name: "Overview", href: "#top" },
              { name: "Placement Quiz", href: "#quiz" },
              { name: "Language Programs", href: "#programs" },
              { name: "Curriculum Roadmap", href: "#curriculum" },
              { name: "Weekly Schedule", href: "#schedule" },
              { name: "Native Instructors", href: "#instructors" },
              { name: "Student Outcomes", href: "#outcomes" },
              { name: "Pricing Plans", href: "#pricing" },
              { name: "FAQ", href: "#faq" },
            ].map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`fl-mobile-link ${activeNav === item.href ? "active" : ""}`}
                onClick={(e) => handleNavClick(e, item.href)}
              >
                <span>{item.name}</span>
                <ChevronRight size={16} className="fl-mobile-link-arrow" />
              </a>
            ))}
          </div>
        </div>

        <div className="fl-mobile-drawer-footer">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsBookingOpen(true);
            }}
            className="fl-btn-terracotta fl-mobile-cta-btn"
          >
            <CalendarDays size={16} />
            <span>Book Free Placement Call</span>
          </button>
          <div className="fl-mobile-callout">
            <Sparkles size={13} className="icon-terracotta" />
            <span>15,000+ Adult Learners Reached Fluency</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="fl-hero-section">
        <div className="fl-wrap fl-hero-grid">
          <div className="fl-hero-copy">
            <div className="fl-pill-badge">
              <Sparkles className="icon-terracotta" size={14} />
              <span>Real Conversational Fluency for Adults</span>
            </div>
            <h1 className="fl-hero-title">
              Language Learning
              <br />
              for Adults Who Want
              <br />
              <span className="fl-hero-gradient-text">Real Progress.</span>
            </h1>
            <p className="fl-hero-desc">
              Structured CEFR pathways, native-speaking educators, and live speaking cohorts designed for real life—so you can converse with natural ease at work, while traveling, and in everyday moments.
            </p>

            <div className="fl-hero-actions">
              <button
                onClick={() => setIsBookingOpen(true)}
                className="fl-btn-terracotta fl-hero-btn"
              >
                <span>Explore Live Programs</span>
                <ArrowRight size={17} />
              </button>
              <a
                href="#quiz"
                onClick={(e) => handleNavClick(e, "#quiz")}
                className="fl-btn-secondary"
              >
                <span>Take 3-Min Placement Quiz</span>
              </a>
            </div>

            <div className="fl-hero-trust-bar">
              <div className="fl-trust-item">
                <CheckCircle2 size={16} className="icon-sage" />
                <span>Small Cohorts (Max 6)</span>
              </div>
              <div className="fl-trust-item">
                <CheckCircle2 size={16} className="icon-sage" />
                <span>Native-Level Educators</span>
              </div>
              <div className="fl-trust-item">
                <Star size={16} className="icon-gold" />
                <span>4.9/5 Rating (15,000+ Learners)</span>
              </div>
            </div>
          </div>

          {/* Hero Visual Card Area with High-Res Generated Photo & Dynamic Floating Widget */}
          <div className="fl-hero-visual-wrapper">
            <div className="fl-hero-image-card">
              <img
                src={heroImgUrl}
                alt="FluentPath Adult Language Learners Practicing in Modern Studio"
                className="fl-hero-img"
              />
              <div className="fl-hero-overlay" />
            </div>

            {/* Floating Live Fluency Progress Card */}
            <div className="fl-floating-fluency-card">
              <div className="fl-floating-header">
                <div className="fl-floating-avatar">
                  <Languages size={17} />
                </div>
                <div>
                  <strong>Spanish Cohort B2</strong>
                  <small>Week 6 of 12 (Spoken Fluency Track)</small>
                </div>
              </div>

              <div className="fl-fluency-mini-grid">
                <div className="fl-fluency-badge">
                  <span>Current Level</span>
                  <strong>CEFR B2</strong>
                  <small className="fluency-gain">+1.4 Levels</small>
                </div>
                <div className="fl-fluency-badge">
                  <span>Speaking Streak</span>
                  <strong>18 Days</strong>
                  <small className="fluency-gain">🔥 Active</small>
                </div>
              </div>

              <div className="fl-progress-wrap">
                <div className="fl-progress-label">
                  <span>Spontaneous Dialogues & Idioms</span>
                  <b>84% Fluency Score</b>
                </div>
                <div className="fl-progress-bar">
                  <div className="fl-progress-fill" style={{ width: "84%" }} />
                </div>
              </div>
            </div>

            {/* Floating Upcoming Conversation Club Badge */}
            <div className="fl-floating-session-card">
              <div className="fl-session-icon">
                <MessageCircle size={16} />
              </div>
              <div className="fl-session-info">
                <span>Next Live Speaking Lab</span>
                <strong>Today, 7:00 PM with Daniela Ruiz</strong>
              </div>
              <button
                onClick={() => setIsBookingOpen(true)}
                className="fl-session-join-btn"
              >
                Join
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Stats Ribbon */}
      <section className="fl-stats-section">
        <div className="fl-wrap fl-stats-grid">
          <div className="fl-stat-item">
            <div className="fl-stat-icon-wrap">
              <Users size={24} className="icon-gold" />
            </div>
            <strong className="fl-stat-number">15,000+</strong>
            <span className="fl-stat-label">Adult Learners Coached</span>
          </div>

          <div className="fl-stat-item">
            <div className="fl-stat-icon-wrap">
              <Trophy size={24} className="icon-terracotta" />
            </div>
            <strong className="fl-stat-number">92%</strong>
            <span className="fl-stat-label">Course Completion Rate</span>
          </div>

          <div className="fl-stat-item">
            <div className="fl-stat-icon-wrap">
              <Star size={24} className="icon-gold" />
            </div>
            <strong className="fl-stat-number">4.9 / 5.0</strong>
            <span className="fl-stat-label">Learner Satisfaction</span>
          </div>

          <div className="fl-stat-item">
            <div className="fl-stat-icon-wrap">
              <Globe size={24} className="icon-sage" />
            </div>
            <strong className="fl-stat-number">30+</strong>
            <span className="fl-stat-label">Countries Represented</span>
          </div>

          <div className="fl-stat-item">
            <div className="fl-stat-icon-wrap">
              <Award size={24} className="icon-gold" />
            </div>
            <strong className="fl-stat-number">CEFR</strong>
            <span className="fl-stat-label">Certified Framework</span>
          </div>
        </div>
      </section>

      {/* Interactive Tool 1: 3-Question Placement Quiz Drill */}
      <section className="fl-section soft-bg" id="quiz">
        <div className="fl-wrap">
          <div className="fl-section-header text-center">
            <div className="fl-pill-badge">
              <Compass size={13} className="icon-terracotta" />
              <span>Interactive Level Check</span>
            </div>
            <h2 className="fl-section-title">Test Your Conversational Intuition</h2>
            <p className="fl-section-desc">
              Experience the type of real-life situational challenges, idiomatic nuances, and immediate feedback our learners practice every week.
            </p>
          </div>

          <div className="fl-quiz-card">
            {/* Quiz Navigation Tabs */}
            <div className="fl-quiz-tabs">
              {quizQuestions.map((q, idx) => (
                <button
                  key={q.id}
                  className={`fl-quiz-tab ${quizIndex === idx ? "active" : ""}`}
                  onClick={() => setQuizIndex(idx)}
                >
                  <span>Scenario {idx + 1}: {q.subject.split("&")[0]}</span>
                  {quizAnswers[q.id] !== undefined && (
                    <CheckCircle2 size={14} className="icon-sage" />
                  )}
                </button>
              ))}
            </div>

            {/* Current Question */}
            {(() => {
              const currentQ = quizQuestions[quizIndex];
              const selectedOptIndex = quizAnswers[currentQ.id];
              const isAnswered = selectedOptIndex !== undefined;

              return (
                <div className="fl-quiz-body">
                  <div className="fl-quiz-meta">
                    <span className="fl-quiz-tag">{currentQ.subject}</span>
                    <span className="fl-quiz-counter">Challenge {quizIndex + 1} of {quizQuestions.length}</span>
                  </div>

                  <p className="fl-quiz-prompt">{currentQ.prompt}</p>

                  <div className="fl-quiz-options">
                    {currentQ.options.map((opt, oIdx) => {
                      let optClass = "fl-quiz-opt";
                      if (isAnswered) {
                        if (opt.isCorrect) optClass += " is-correct";
                        else if (selectedOptIndex === oIdx) optClass += " is-wrong";
                      } else if (selectedOptIndex === oIdx) {
                        optClass += " selected";
                      }

                      return (
                        <button
                          key={opt.text}
                          className={optClass}
                          onClick={() => {
                            setQuizAnswers({
                              ...quizAnswers,
                              [currentQ.id]: oIdx,
                            });
                            setQuizShowExp({
                              ...quizShowExp,
                              [currentQ.id]: true,
                            });
                          }}
                        >
                          <div className="fl-opt-left">
                            <span>{opt.text}</span>
                            <small className="fl-opt-cefr">{opt.cefr}</small>
                          </div>
                          {isAnswered && opt.isCorrect && (
                            <Check size={16} className="icon-sage" />
                          )}
                          {isAnswered && !opt.isCorrect && selectedOptIndex === oIdx && (
                            <X size={16} className="icon-red" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation Card */}
                  {quizShowExp[currentQ.id] && (
                    <div className="fl-quiz-explanation">
                      <div className="fl-exp-header">
                        <Sparkles size={16} className="icon-gold" />
                        <strong>Linguistic Breakdown & Rationale:</strong>
                      </div>
                      <p>{currentQ.explanation}</p>
                      <div className="fl-exp-tip">
                        <strong>FluentPath Insight:</strong> {currentQ.tip}
                      </div>
                    </div>
                  )}

                  <div className="fl-quiz-footer-actions">
                    <button
                      disabled={quizIndex === 0}
                      onClick={() => setQuizIndex((prev) => Math.max(0, prev - 1))}
                      className="fl-quiz-nav-btn"
                    >
                      Previous Scenario
                    </button>
                    {quizIndex < quizQuestions.length - 1 ? (
                      <button
                        onClick={() => setQuizIndex((prev) => Math.min(quizQuestions.length - 1, prev + 1))}
                        className="fl-quiz-nav-btn primary"
                      >
                        Next Scenario <ArrowRight size={14} />
                      </button>
                    ) : (
                      <button
                        onClick={() => setIsBookingOpen(true)}
                        className="fl-btn-terracotta"
                      >
                        <CalendarDays size={15} />
                        <span>Book 15-Min Oral Placement Call</span>
                      </button>
                    )}
                  </div>
                </div>
              );
            })()}
          </div>
        </div>
      </section>

      {/* Language Programs Showcase */}
      <section className="fl-section" id="programs">
        <div className="fl-wrap">
          <div className="fl-section-header text-center">
            <div className="fl-pill-badge">
              <BookOpen size={13} className="icon-terracotta" />
              <span>Tailored Immersion Tracks</span>
            </div>
            <h2 className="fl-section-title">Explore Our Live Language Cohorts</h2>
            <p className="fl-section-desc">
              All courses are live, interactive, and outcomes-driven with a maximum of 6 adult students per cohort.
            </p>

            {/* Filter Buttons */}
            <div className="fl-filter-bar">
              {["All", "Spanish", "English", "French", "German", "Arabic", "Italian"].map((tab) => (
                <button
                  key={tab}
                  className={`fl-filter-btn ${programFilter === tab ? "active" : ""}`}
                  onClick={() => setProgramFilter(tab)}
                >
                  {tab === "All" ? "All Languages" : tab}
                </button>
              ))}
            </div>
          </div>

          <div className="fl-programs-grid">
            {filteredPrograms.map((prog) => (
              <div key={prog.id} className="fl-program-card">
                <div className="fl-prog-top">
                  <div className="fl-prog-flag-wrap">
                    <span className="fl-prog-flag">{prog.flag}</span>
                    <span className={`fl-prog-badge badge-${prog.badgeColor}`}>{prog.tag}</span>
                  </div>
                  <span className="fl-prog-cefr">{prog.cefr}</span>
                </div>

                <h3 className="fl-prog-title">{prog.title}</h3>
                <p className="fl-prog-desc">{prog.description}</p>

                <div className="fl-prog-meta-row">
                  <div>
                    <Clock size={13} className="icon-terracotta" />
                    <span>{prog.duration}</span>
                  </div>
                  <div>
                    <Users size={13} className="icon-terracotta" />
                    <span>{prog.format}</span>
                  </div>
                </div>

                <div className="fl-prog-divider" />

                <ul className="fl-prog-highlights">
                  {prog.highlights.map((feat) => (
                    <li key={feat}>
                      <Check size={14} className="icon-sage" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="fl-prog-footer">
                  <div className="fl-prog-price">
                    <small>Monthly Tuition</small>
                    <strong>{prog.price}</strong>
                  </div>
                  <button
                    onClick={() => {
                      setBookingForm({
                        ...bookingForm,
                        language: prog.language,
                      });
                      setIsBookingOpen(true);
                    }}
                    className="fl-prog-enroll-btn"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Curriculum Roadmap Section (CEFR 6-Step Journey) */}
      <section className="fl-section soft-bg" id="curriculum">
        <div className="fl-wrap">
          <div className="fl-section-header text-center">
            <div className="fl-pill-badge">
              <GraduationCap size={13} className="icon-terracotta" />
              <span>Proven CEFR Framework</span>
            </div>
            <h2 className="fl-section-title">Your 6-Stage Roadmap to Fluency</h2>
            <p className="fl-section-desc">
              Every cohort follows a structured progression designed to transform hesitation into effortless natural conversation.
            </p>
          </div>

          <div className="fl-roadmap-grid">
            {[
              {
                step: "01",
                title: "Phonetic Foundations & Core Vocabulary",
                desc: "Master native pronunciation mechanics, tone rhythms, and the top 500 essential contextual words.",
                status: "Stage 1",
              },
              {
                step: "02",
                title: "Sentence Architecture & Tense Agility",
                desc: "Internalize past, present, and subjunctive structures naturally without confusing rote conjugation tables.",
                status: "Stage 2",
              },
              {
                step: "03",
                title: "Speed Listening & Real Accents",
                desc: "Train your ear on native conversational speeds, regional dialects, and fast audio deconstruction.",
                status: "Stage 3",
              },
              {
                step: "04",
                title: "Spontaneous Dialogue & Debate",
                desc: "Engage in live roleplays, debates, and unscripted problem-solving in small peer breakout rooms.",
                status: "Stage 4",
              },
              {
                step: "05",
                title: "Professional & Cultural Nuance",
                desc: "Master executive presentations, humor, idioms, email crafting, and cultural dining etiquette.",
                status: "Stage 5",
              },
              {
                step: "06",
                title: "Fluency Project & CEFR Certification",
                desc: "Deliver a live capstone presentation in your target language and receive your verified CEFR credential.",
                status: "Final Stage",
              },
            ].map((s) => (
              <div key={s.step} className="fl-road-card">
                <span className="fl-road-num">{s.step}</span>
                <h3 className="fl-road-title">{s.title}</h3>
                <p className="fl-road-desc">{s.desc}</p>
                <div className="fl-road-tag">
                  <CheckCircle2 size={13} className="icon-sage" />
                  <span>{s.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weekly Schedule Timetable */}
      <section className="fl-section" id="schedule">
        <div className="fl-wrap">
          <div className="fl-section-header text-center">
            <div className="fl-pill-badge">
              <Calendar size={13} className="icon-terracotta" />
              <span>Designed for Busy Adults</span>
            </div>
            <h2 className="fl-section-title">Sample Weekly Live Cohort Schedule</h2>
            <p className="fl-section-desc">
              Choose evening or weekend class slots that fit seamlessly into your professional and personal routine.
            </p>

            <div className="fl-schedule-tabs">
              <button
                className={`fl-sched-tab-btn ${scheduleTime === "evening" ? "active" : ""}`}
                onClick={() => setScheduleTime("evening")}
              >
                Weekday Evenings (6:00 – 9:00 PM EST)
              </button>
              <button
                className={`fl-sched-tab-btn ${scheduleTime === "weekend" ? "active" : ""}`}
                onClick={() => setScheduleTime("weekend")}
              >
                Weekend Intensives (Sat & Sun)
              </button>
              <button
                className={`fl-sched-tab-btn ${scheduleTime === "morning" ? "active" : ""}`}
                onClick={() => setScheduleTime("morning")}
              >
                Early Morning Boosters (7:30 – 8:45 AM)
              </button>
            </div>
          </div>

          <div className="fl-schedule-table-wrap">
            <div className="fl-schedule-table">
              <div className="fl-sched-row fl-sched-header-row">
                <div className="fl-sched-cell cell-time">Time Slot</div>
                <div className="fl-sched-cell">Monday</div>
                <div className="fl-sched-cell">Tuesday</div>
                <div className="fl-sched-cell">Wednesday</div>
                <div className="fl-sched-cell">Thursday</div>
                <div className="fl-sched-cell">Friday</div>
                <div className="fl-sched-cell highlight-weekend">Saturday</div>
                <div className="fl-sched-cell highlight-weekend">Sunday</div>
              </div>

              {scheduleTime === "evening" && (
                <>
                  <div className="fl-sched-row">
                    <div className="fl-sched-cell cell-time">6:00 – 7:15 PM</div>
                    <div className="fl-sched-cell slot-grammar">Grammar & Structure Lab</div>
                    <div className="fl-sched-cell slot-speaking">Spontaneous Speaking Club</div>
                    <div className="fl-sched-cell slot-grammar">Grammar & Structure Lab</div>
                    <div className="fl-sched-cell slot-speaking">Spontaneous Speaking Club</div>
                    <div className="fl-sched-cell slot-culture">Virtual Wine & Culture Night</div>
                    <div className="fl-sched-cell slot-rest">Rest & Self-Paced Audio</div>
                    <div className="fl-sched-cell slot-rest">Rest</div>
                  </div>
                  <div className="fl-sched-row">
                    <div className="fl-sched-cell cell-time">7:30 – 8:45 PM</div>
                    <div className="fl-sched-cell slot-listening">Listening Lab & Accents</div>
                    <div className="fl-sched-cell slot-coaching">1:1 Instructor Office Hours</div>
                    <div className="fl-sched-cell slot-listening">Listening Lab & Accents</div>
                    <div className="fl-sched-cell slot-coaching">1:1 Instructor Office Hours</div>
                    <div className="fl-sched-cell slot-rest">Free Evening</div>
                    <div className="fl-sched-cell slot-speaking">Global Coffee Conversation</div>
                    <div className="fl-sched-cell slot-rest">Rest</div>
                  </div>
                </>
              )}

              {scheduleTime === "weekend" && (
                <>
                  <div className="fl-sched-row">
                    <div className="fl-sched-cell cell-time">10:00 – 11:30 AM</div>
                    <div className="fl-sched-cell slot-rest">15m Daily Flashcards</div>
                    <div className="fl-sched-cell slot-rest">15m Daily Flashcards</div>
                    <div className="fl-sched-cell slot-rest">15m Daily Flashcards</div>
                    <div className="fl-sched-cell slot-rest">15m Daily Flashcards</div>
                    <div className="fl-sched-cell slot-rest">Prep Notes</div>
                    <div className="fl-sched-cell slot-speaking">Intensive Speaking Immersion (90m)</div>
                    <div className="fl-sched-cell slot-speaking">Intensive Speaking Immersion (90m)</div>
                  </div>
                  <div className="fl-sched-row">
                    <div className="fl-sched-cell cell-time">12:00 – 1:30 PM</div>
                    <div className="fl-sched-cell slot-rest">Self Study</div>
                    <div className="fl-sched-cell slot-rest">Self Study</div>
                    <div className="fl-sched-cell slot-rest">Self Study</div>
                    <div className="fl-sched-cell slot-rest">Self Study</div>
                    <div className="fl-sched-cell slot-rest">Rest</div>
                    <div className="fl-sched-cell slot-grammar">Grammar & Syntax Breakdown</div>
                    <div className="fl-sched-cell slot-culture">Cultural Seminar & Roleplay</div>
                  </div>
                </>
              )}

              {scheduleTime === "morning" && (
                <>
                  <div className="fl-sched-row">
                    <div className="fl-sched-cell cell-time">7:30 – 8:45 AM</div>
                    <div className="fl-sched-cell slot-speaking">Morning Coffee Conversation</div>
                    <div className="fl-sched-cell slot-grammar">Grammar Coffee Lab</div>
                    <div className="fl-sched-cell slot-speaking">Morning Coffee Conversation</div>
                    <div className="fl-sched-cell slot-grammar">Grammar Coffee Lab</div>
                    <div className="fl-sched-cell slot-listening">Weekly Review & Q&A</div>
                    <div className="fl-sched-cell slot-rest">Rest</div>
                    <div className="fl-sched-cell slot-rest">Rest</div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Expert Native Instructors Showcase */}
      <section className="fl-section soft-bg" id="instructors">
        <div className="fl-wrap">
          <div className="fl-section-header text-center">
            <div className="fl-pill-badge">
              <Users size={13} className="icon-terracotta" />
              <span>Passionate Native Educators</span>
            </div>
            <h2 className="fl-section-title">Learn from Master Language Coaches</h2>
            <p className="fl-section-desc">
              All FluentPath educators hold Master's degrees in Linguistics and have over a decade of experience guiding adult learners to fluency.
            </p>
          </div>

          <div className="fl-instructors-grid">
            {instructorsData.map((inst) => (
              <div key={inst.name} className="fl-instructor-card">
                <div className="fl-inst-img-wrap">
                  <img
                    src={inst.img}
                    alt={inst.name}
                    className="fl-inst-img"
                  />
                  <span className="fl-inst-badge">{inst.badge}</span>
                </div>

                <div className="fl-inst-body">
                  <h3 className="fl-inst-name">{inst.name}</h3>
                  <span className="fl-inst-role">{inst.role}</span>
                  <div className="fl-inst-alma">
                    <GraduationCap size={14} className="icon-terracotta" />
                    <span>{inst.alma}</span>
                  </div>

                  <p className="fl-inst-bio">{inst.bio}</p>

                  <div className="fl-inst-stat-pill">
                    <Sparkles size={13} className="icon-gold" />
                    <strong>{inst.students}</strong>
                  </div>

                  <button
                    onClick={() => setSelectedInstructor(inst)}
                    className="fl-inst-profile-btn"
                  >
                    <span>View Bio & Methodology</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Classroom & Immersion Studio Showcase Banner */}
      <section className="fl-classroom-banner-section">
        <div className="fl-wrap fl-classroom-grid">
          <div className="fl-classroom-image-wrap">
            <img
              src={classroomImgUrl}
              alt="FluentPath Live Online Interactive Language Immersion Session"
              className="fl-classroom-img"
            />
          </div>
          <div className="fl-classroom-copy">
            <div className="fl-pill-badge gold-badge">
              <Sparkles size={13} className="icon-gold" />
              <span>Small-Group Live Immersion</span>
            </div>
            <h2 className="fl-classroom-title">
              Dynamic Live Immersion. No Dry Drills.
            </h2>
            <p className="fl-classroom-desc">
              Forget robotic flashcard apps and crowded 30-person lecture halls. At FluentPath, you learn through lively debates, unscripted dialogues, and immediate phonetic correction in cohorts capped at 6 peers.
            </p>

            <div className="fl-classroom-perks">
              <div className="fl-perk-item">
                <CheckCircle2 size={18} className="icon-sage" />
                <div>
                  <strong>100% Target Language Immersion</strong>
                  <p>Speak, think, and laugh in your target language from day one with intuitive gestures and context.</p>
                </div>
              </div>
              <div className="fl-perk-item">
                <CheckCircle2 size={18} className="icon-sage" />
                <div>
                  <strong>AI-Powered Speech Analytics</strong>
                  <p>Receive weekly pitch and phonetics breakdown reports to pinpoint your exact accent modulation.</p>
                </div>
              </div>
              <div className="fl-perk-item">
                <CheckCircle2 size={18} className="icon-sage" />
                <div>
                  <strong>Weekly Global Social Clubs</strong>
                  <p>Join virtual tapas, wine tastings, cooking clubs, and film debates with learners worldwide.</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsBookingOpen(true)}
              className="fl-btn-terracotta fl-classroom-btn"
            >
              <CalendarDays size={16} />
              <span>Book Your Free Placement Call</span>
            </button>
          </div>
        </div>
      </section>

      {/* Verified Outcomes & Results */}
      <section className="fl-section" id="outcomes">
        <div className="fl-wrap">
          <div className="fl-section-header text-center">
            <div className="fl-pill-badge">
              <Trophy size={13} className="icon-terracotta" />
              <span>Proven Learner Results</span>
            </div>
            <h2 className="fl-section-title">Real Numbers. Real Fluency.</h2>
            <p className="fl-section-desc">
              See how our 12-week live immersion cohorts transform speaking confidence and unlock global career opportunities.
            </p>
          </div>

          <div className="fl-results-grid">
            <div className="fl-result-card">
              <span className="fl-result-label">Speaking Confidence Boost</span>
              <strong className="fl-result-val">89%</strong>
              <span className="fl-result-sub">Of learners report zero hesitation</span>
              <div className="fl-result-bar-wrapper">
                <div className="fl-result-bar-fill" style={{ width: "89%" }} />
              </div>
              <p className="fl-result-detail">
                Able to converse freely in spontaneous travel and workplace scenarios after 12 weeks.
              </p>
            </div>

            <div className="fl-result-card">
              <span className="fl-result-label">Average CEFR Progression</span>
              <strong className="fl-result-val">+1.3</strong>
              <span className="fl-result-sub">CEFR levels advanced per cohort</span>
              <div className="fl-result-bar-wrapper">
                <div className="fl-result-bar-fill sage-fill" style={{ width: "93%" }} />
              </div>
              <p className="fl-result-detail">
                93% of graduates advance at least one full CEFR proficiency tier (e.g. A2 to B2).
              </p>
            </div>

            <div className="fl-result-card">
              <span className="fl-result-label">Course Completion Rate</span>
              <strong className="fl-result-val">92%</strong>
              <span className="fl-result-sub">Highest in online adult education</span>
              <div className="fl-result-bar-wrapper">
                <div className="fl-result-bar-fill gold-fill" style={{ width: "92%" }} />
              </div>
              <p className="fl-result-detail">
                Our accountability, small cohorts, and personal feedback keep adult learners engaged.
              </p>
            </div>

            <div className="fl-result-card">
              <span className="fl-result-label">Career & Relocation Impact</span>
              <strong className="fl-result-val">76%</strong>
              <span className="fl-result-sub">Promotions, visas & expat jobs</span>
              <div className="fl-result-bar-wrapper">
                <div className="fl-result-bar-fill navy-fill" style={{ width: "76%" }} />
              </div>
              <p className="fl-result-detail">
                Learners successfully passed embassy language interviews and international job screenings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="fl-section soft-bg">
        <div className="fl-wrap">
          <div className="fl-section-header text-center">
            <div className="fl-pill-badge">
              <Star size={13} className="icon-gold" />
              <span>Learner Stories</span>
            </div>
            <h2 className="fl-section-title">What Our Global Community Says</h2>
            <p className="fl-section-desc">
              Discover how adults from tech, healthcare, journalism, and creative industries reached conversational ease with FluentPath.
            </p>
          </div>

          <div className="fl-testimonials-grid">
            {testimonials.map((t) => (
              <div key={t.name} className="fl-testimonial-card">
                <div className="fl-t-header">
                  <div className="fl-t-flag">{t.flag}</div>
                  <div>
                    <strong className="fl-t-name">{t.name}</strong>
                    <small className="fl-t-role">{t.role}</small>
                  </div>
                </div>

                <div className="fl-t-gain-pill">
                  <Trophy size={13} className="icon-gold" />
                  <span>{t.gain}</span>
                </div>

                <p className="fl-t-quote">“{t.quote}”</p>

                <div className="fl-t-footer">
                  <span className="fl-t-stars">★★★★★</span>
                  <span className="fl-t-program">{t.lang}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="fl-section" id="pricing">
        <div className="fl-wrap">
          <div className="fl-section-header text-center">
            <div className="fl-pill-badge">
              <Zap size={13} className="icon-terracotta" />
              <span>Simple, Transparent Tuition</span>
            </div>
            <h2 className="fl-section-title">Choose the Plan That Fits Your Goals</h2>
            <p className="fl-section-desc">
              All plans include live certified instructor sessions, small cohorts, and our 14-day 100% money-back guarantee.
            </p>

            <div className="fl-billing-toggle">
              <button
                className={`fl-billing-btn ${billingCycle === "monthly" ? "active" : ""}`}
                onClick={() => setBillingCycle("monthly")}
              >
                Monthly Membership
              </button>
              <button
                className={`fl-billing-btn ${billingCycle === "cohort" ? "active" : ""}`}
                onClick={() => setBillingCycle("cohort")}
              >
                Full 12-Week Cohort <span className="save-tag">Save $100</span>
              </button>
            </div>
          </div>

          <div className="fl-pricing-grid">
            {/* Essentials Plan */}
            <div className="fl-pricing-card">
              <h3 className="fl-pricing-tier">Essentials Track</h3>
              <p className="fl-pricing-subtitle">Core live foundations and conversation labs for steady progress.</p>
              <div className="fl-pricing-price">
                <strong>{billingCycle === "monthly" ? "$149" : "$399"}</strong>
                <small>{billingCycle === "monthly" ? "/ month" : " / 12-week access"}</small>
              </div>

              <ul className="fl-pricing-features">
                <li><Check size={14} className="icon-sage" /> 2x Weekly Live Cohort Sessions (60 min)</li>
                <li><Check size={14} className="icon-sage" /> Small Cohorts (Capped at 6 Students)</li>
                <li><Check size={14} className="icon-sage" /> Access to 24/7 Digital Audio Portal</li>
                <li><Check size={14} className="icon-sage" /> Weekly Instructor Homework Reviews</li>
                <li><Check size={14} className="icon-sage" /> Community Speaking Lounge Access</li>
              </ul>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="fl-pricing-btn"
              >
                Select Essentials
              </button>
            </div>

            {/* Guided Cohort Plan (Most Popular) */}
            <div className="fl-pricing-card popular">
              <div className="fl-popular-badge">Most Popular Cohort</div>
              <h3 className="fl-pricing-tier">Guided Immersion</h3>
              <p className="fl-pricing-subtitle">The optimal balance of live classes, speaking clubs, and personal feedback.</p>
              <div className="fl-pricing-price">
                <strong>{billingCycle === "monthly" ? "$249" : "$649"}</strong>
                <small>{billingCycle === "monthly" ? "/ month" : " / full 12-week cohort"}</small>
              </div>

              <ul className="fl-pricing-features">
                <li><Check size={14} className="icon-sage" /> <strong>Everything in Essentials, plus:</strong></li>
                <li><Check size={14} className="icon-sage" /> 3x Weekly Live Master Classes & Labs</li>
                <li><Check size={14} className="icon-sage" /> Weekly Wine & Coffee Conversation Clubs</li>
                <li><Check size={14} className="icon-sage" /> Bi-Weekly 1:1 Private Pronunciation Checks</li>
                <li><Check size={14} className="icon-sage" /> <strong>Official CEFR Verified Certification</strong></li>
                <li><Check size={14} className="icon-sage" /> AI Speech Analytics & Audio Recordings</li>
              </ul>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="fl-btn-terracotta fl-pricing-popular-btn"
              >
                Enroll in Guided Immersion
              </button>
            </div>

            {/* Intensive Immersion Plan */}
            <div className="fl-pricing-card">
              <h3 className="fl-pricing-tier">Intensive Mastery</h3>
              <p className="fl-pricing-subtitle">Accelerated fast-track for professional relocation, interviews, and fluency.</p>
              <div className="fl-pricing-price">
                <strong>{billingCycle === "monthly" ? "$399" : "$999"}</strong>
                <small>{billingCycle === "monthly" ? "/ month" : " / complete private cohort"}</small>
              </div>

              <ul className="fl-pricing-features">
                <li><Check size={14} className="icon-sage" /> <strong>Everything in Guided, plus:</strong></li>
                <li><Check size={14} className="icon-sage" /> 5x Weekly Live Classes + Weekend Intensives</li>
                <li><Check size={14} className="icon-sage" /> Weekly Private 1:1 45-Min Coaching Session</li>
                <li><Check size={14} className="icon-sage" /> Job Interview & Visa Presentation Simulation</li>
                <li><Check size={14} className="icon-sage" /> Direct Coach WhatsApp Voice Note Mentorship</li>
              </ul>

              <button
                onClick={() => setIsBookingOpen(true)}
                className="fl-pricing-btn"
              >
                Apply for Intensive
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="fl-section soft-bg" id="faq">
        <div className="fl-wrap">
          <div className="fl-section-header text-center">
            <div className="fl-pill-badge">
              <HelpCircle size={13} className="icon-terracotta" />
              <span>Common Questions</span>
            </div>
            <h2 className="fl-section-title">Frequently Asked Questions</h2>
            <p className="fl-section-desc">
              Everything you need to know about our levels, methodology, schedule flexibility, and placement process.
            </p>
          </div>

          <div className="fl-faq-accordion">
            {faqs.map((faq, idx) => (
              <div
                key={faq.q}
                className={`fl-faq-item ${openFaq === idx ? "open" : ""}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="fl-faq-question">
                  <span>{faq.q}</span>
                  <ChevronDown size={18} className="fl-faq-chevron" />
                </div>
                {openFaq === idx && (
                  <div className="fl-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call to Action Banner */}
      <section className="fl-cta-section">
        <div className="fl-wrap fl-cta-content">
          <div className="fl-cta-badge">
            <Globe2 size={28} />
          </div>
          <div className="fl-cta-text">
            <h2>Your Next Natural Conversation Starts Today.</h2>
            <p>
              Book your complimentary 15-minute oral placement consultation with our senior educators and receive your tailored CEFR study roadmap.
            </p>
          </div>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="fl-btn-gold"
          >
            <CalendarDays size={18} />
            <span>Book Placement Call</span>
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="fl-footer">
        <div className="fl-wrap fl-footer-content">
          <div className="fl-footer-col fl-footer-brand-col">
            <a href="#top" className="fl-brand-footer">
              <Globe2 size={24} className="icon-terracotta" />
              <span>Fluent<span className="fl-highlight">Path</span> Languages</span>
            </a>
            <p className="fl-footer-tagline">
              Empowering adults worldwide to speak new languages with natural ease, cultural depth, and unwavering confidence.
            </p>
            <div className="fl-footer-contact">
              <div><Phone size={14} className="icon-terracotta" /> +1 (415) 555-0188</div>
              <div><Mail size={14} className="icon-terracotta" /> admissions@fluentpathlanguages.com</div>
              <div><Clock size={14} className="icon-terracotta" /> Mon – Sat: 8:00 AM – 9:00 PM EST</div>
            </div>
          </div>

          <div className="fl-footer-col">
            <h4>Languages</h4>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Spanish for Real Life</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Business English & Executive</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>French for Living Abroad</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>German for Tech & Career</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Modern Standard Arabic</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Italian for Gastronomy</a>
          </div>

          <div className="fl-footer-col">
            <h4>Method & Portal</h4>
            <a href="#quiz" onClick={(e) => handleNavClick(e, "#quiz")}>Oral Placement Quiz</a>
            <a href="#curriculum" onClick={(e) => handleNavClick(e, "#curriculum")}>CEFR Curriculum Roadmap</a>
            <a href="#schedule" onClick={(e) => handleNavClick(e, "#schedule")}>Weekly Class Schedule</a>
            <a href="#instructors" onClick={(e) => handleNavClick(e, "#instructors")}>Native Educator Team</a>
            <a href="#outcomes" onClick={(e) => handleNavClick(e, "#outcomes")}>Verified Student Outcomes</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")}>Frequently Asked Questions</a>
          </div>

          <div className="fl-footer-col fl-footer-newsletter-col">
            <h4>Global Insights Newsletter</h4>
            <p>Subscribe for weekly cultural idioms, language learning hacks, and global immersion workshop invites.</p>
            <form onSubmit={handleNewsletterSubmit} className="fl-newsletter-form">
              <input
                type="email"
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
            {newsletterSuccess && (
              <small className="fl-newsletter-success">
                ✓ Merci! You've been subscribed to FluentPath Insights.
              </small>
            )}
          </div>
        </div>

        <div className="fl-footer-bottom">
          <div className="fl-wrap fl-bottom-flex">
            <span>© 2026 FluentPath Languages LLC. All rights reserved. CEFR levels are aligned with the Council of Europe Language Framework.</span>
            <div className="fl-bottom-links">
              <a href="#top">Privacy Policy</a>
              <a href="#top">Terms of Service</a>
              <a href="#top">14-Day Guarantee</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Free Placement Call Booking Modal */}
      {isBookingOpen && (
        <div
          className="fl-modal-backdrop"
          onClick={() => setIsBookingOpen(false)}
        >
          <div
            className="fl-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="fl-modal-close-btn"
              onClick={() => setIsBookingOpen(false)}
              aria-label="Close booking modal"
            >
              <X size={20} />
            </button>

            {!bookingSubmitted ? (
              <>
                <div className="fl-modal-header">
                  <div className="fl-pill-badge">
                    <Sparkles size={13} className="icon-terracotta" />
                    <span>Complimentary Placement Session</span>
                  </div>
                  <h2>Schedule Your 15-Min Placement Call</h2>
                  <p>
                    Connect with a Senior Language Advisor to pinpoint your spoken CEFR level and match you into the ideal small cohort.
                  </p>
                </div>

                <form onSubmit={handleBookingSubmit} className="fl-modal-form">
                  <div className="fl-form-row">
                    <div className="fl-form-group">
                      <label>Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Jessica Miller"
                        value={bookingForm.name}
                        onChange={(e) => setBookingForm({ ...bookingForm, name: e.target.value })}
                      />
                    </div>

                    <div className="fl-form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="jessica@example.com"
                        value={bookingForm.email}
                        onChange={(e) => setBookingForm({ ...bookingForm, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="fl-form-row">
                    <div className="fl-form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        value={bookingForm.phone}
                        onChange={(e) => setBookingForm({ ...bookingForm, phone: e.target.value })}
                      />
                    </div>

                    <div className="fl-form-group">
                      <label>Target Language</label>
                      <select
                        value={bookingForm.language}
                        onChange={(e) => setBookingForm({ ...bookingForm, language: e.target.value })}
                      >
                        <option value="Spanish">Spanish (Castilian & Latin Am.)</option>
                        <option value="English">Business & Executive English</option>
                        <option value="French">French (Parisian & DELF)</option>
                        <option value="German">German (Work & University)</option>
                        <option value="Arabic">Modern Standard & Levantine Arabic</option>
                        <option value="Italian">Italian (Travel & Gastronomy)</option>
                      </select>
                    </div>
                  </div>

                  <div className="fl-form-row">
                    <div className="fl-form-group">
                      <label>Current Experience</label>
                      <select
                        value={bookingForm.currentLevel}
                        onChange={(e) => setBookingForm({ ...bookingForm, currentLevel: e.target.value })}
                      >
                        <option value="Complete Beginner (A1)">Complete Beginner (A1)</option>
                        <option value="Elementary / Rusty (A2)">Elementary / Rusty (A2)</option>
                        <option value="Intermediate Conversational (B1)">Intermediate Conversational (B1)</option>
                        <option value="Upper Intermediate (B2)">Upper Intermediate (B2)</option>
                        <option value="Advanced / Professional (C1)">Advanced / Professional (C1)</option>
                      </select>
                    </div>

                    <div className="fl-form-group">
                      <label>Preferred Schedule</label>
                      <select
                        value={bookingForm.preferredTime}
                        onChange={(e) => setBookingForm({ ...bookingForm, preferredTime: e.target.value })}
                      >
                        <option value="Weekday Evenings (6-9 PM)">Weekday Evenings (6:00 – 9:00 PM EST)</option>
                        <option value="Weekend Mornings (10 AM - 1 PM)">Weekend Mornings (10:00 AM – 1:00 PM)</option>
                        <option value="Early Mornings (7:30 - 8:45 AM)">Early Mornings (7:30 – 8:45 AM)</option>
                        <option value="1:1 Flexible Hours">1:1 Private Flexible Times</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="fl-btn-terracotta fl-modal-submit-btn">
                    <CalendarDays size={18} />
                    <span>Confirm Free Placement Reservation</span>
                  </button>

                  <div className="fl-modal-trust">
                    <Lock size={12} />
                    <span>100% Free • No Credit Card Required • Personalized CEFR Roadmap</span>
                  </div>
                </form>
              </>
            ) : (
              <div className="fl-modal-success">
                <div className="fl-success-icon-wrap">
                  <CheckCircle2 size={56} className="icon-sage" />
                </div>
                <h3>Placement Call Reserved!</h3>
                <p>
                  We have sent your video room meeting invite and pre-session vocabulary warm-up to{" "}
                  <strong>{bookingForm.email}</strong>.
                </p>
                <div className="fl-success-details">
                  <div><strong>Student:</strong> {bookingForm.name}</div>
                  <div><strong>Track:</strong> {bookingForm.language} ({bookingForm.currentLevel})</div>
                  <div><strong>Assigned Team:</strong> Senior European & Global Linguistics Faculty</div>
                </div>
                <button
                  onClick={() => {
                    setBookingSubmitted(false);
                    setIsBookingOpen(false);
                  }}
                  className="fl-btn-terracotta"
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Instructor Detail Modal */}
      {selectedInstructor && (
        <div
          className="fl-modal-backdrop"
          onClick={() => setSelectedInstructor(null)}
        >
          <div
            className="fl-modal-card fl-instructor-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="fl-modal-close-btn"
              onClick={() => setSelectedInstructor(null)}
              aria-label="Close instructor modal"
            >
              <X size={20} />
            </button>

            <div className="fl-instructor-modal-content">
              <div className="fl-instructor-modal-sidebar">
                <img
                  src={selectedInstructor.img}
                  alt={selectedInstructor.name}
                  className="fl-instructor-modal-img"
                />
                <span className="fl-inst-badge">{selectedInstructor.badge}</span>
                <div className="fl-instructor-sidebar-stats">
                  <div><strong>{selectedInstructor.experience}</strong><small>Teaching Experience</small></div>
                  <div><strong>{selectedInstructor.students}</strong><small>Successful Graduates</small></div>
                </div>
              </div>

              <div className="fl-instructor-modal-info">
                <h2>{selectedInstructor.name}</h2>
                <span className="fl-inst-modal-role">{selectedInstructor.role}</span>
                <div className="fl-inst-alma">
                  <GraduationCap size={15} className="icon-terracotta" />
                  <span>{selectedInstructor.alma}</span>
                </div>

                <div className="fl-inst-spec-pill">
                  <strong>Origin & Focus:</strong> {selectedInstructor.origin}
                </div>

                <p className="fl-inst-modal-bio">{selectedInstructor.bio}</p>

                <h4>Teaching Methodology:</h4>
                <ul className="fl-inst-methodology">
                  <li><Check size={14} className="icon-sage" /> 100% Target Language Immersion through natural dialogues</li>
                  <li><Check size={14} className="icon-sage" /> Phonetic rhythm and accent modulation coaching</li>
                  <li><Check size={14} className="icon-sage" /> Real-world cultural scenarios (boardroom, cuisine, literature)</li>
                </ul>

                <button
                  onClick={() => {
                    const instName = selectedInstructor.name;
                    setSelectedInstructor(null);
                    setBookingForm({
                      ...bookingForm,
                      language: instName.includes("Daniela") ? "Spanish" : instName.includes("Michael") ? "English" : instName.includes("Leila") ? "Arabic" : "French",
                    });
                    setIsBookingOpen(true);
                  }}
                  className="fl-btn-terracotta fl-instructor-modal-cta"
                >
                  <CalendarDays size={16} />
                  <span>Request Placement into {selectedInstructor.name.split(" ")[0]}'s Cohort</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
