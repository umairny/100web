import React, { useEffect, useState, useRef } from "react";
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
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Layers,
  Cpu,
  Globe,
  Terminal,
  ExternalLink,
  Zap,
} from "lucide-react";
import "./CodeNestKids.css";

// WebP & Generated Image Imports
import heroImage from "../../assets/optimized/education/codenest/hero.webp";
import scratchImage from "../../assets/optimized/education/codenest/scratch.webp";
import pythonImage from "../../assets/optimized/education/codenest/python.webp";
import roboticsImage from "../../assets/optimized/education/codenest/robotics.webp";
import classroomImage from "../../assets/optimized/education/codenest/classroom.webp";
import showcaseImage from "../../assets/optimized/education/codenest/showcase.webp";

// Carousel Hero Slides
import carouselSlide1 from "../../assets/optimized/education/codenest/carousel-slide-1.jpg";
import carouselSlide2 from "../../assets/optimized/education/codenest/carousel-slide-2.jpg";
import carouselSlide3 from "../../assets/optimized/education/codenest/carousel-slide-3.jpg";
import carouselSlide4 from "../../assets/optimized/education/codenest/carousel-slide-4.jpg";

// Project Arcade Images
import projectGalaxyJumper from "../../assets/optimized/education/codenest/project-galaxy-jumper.jpg";
import projectEcoTracker from "../../assets/optimized/education/codenest/project-ecotracker.jpg";

const navItems = [
  { id: "cn-programs", label: "Programs & Ages" },
  { id: "cn-arcade", label: "Student Arcade" },
  { id: "cn-curriculum", label: "Curriculum Roadmap" },
  { id: "cn-schedule", label: "Weekly Schedule" },
  { id: "cn-mentors", label: "Our Mentors" },
  { id: "cn-pricing", label: "Tuition & Trial" },
  { id: "cn-faq", label: "FAQ" },
];

const mobileBottomNavItems = [
  { id: "cn-top", label: "Home", icon: Bot },
  { id: "cn-programs", label: "Tracks", icon: Layers },
  { id: "cn-arcade", label: "Arcade", icon: Gamepad2 },
  { id: "cn-pricing", label: "Tuition", icon: Zap },
];

const heroSlides = [
  {
    id: "stem-core",
    badge: "✨ Coding Adventures for Ages 6–14",
    title: "Where Curious Kids Learn to",
    titleHighlight: "Build with Code",
    desc: "Fun live coding cohorts with structured pathways, small group sizes (12 max), and project-based challenges that transform screen time into future-ready confidence.",
    img: carouselSlide1,
    primaryCta: "Book Free Trial Class",
    primaryTarget: "cn-pricing",
    secondaryCta: "Explore Programs",
    secondaryTarget: "cn-programs",
    metricVal: "4,500+",
    metricLabel: "Active Young Coders",
    hudTitle: "Interactive Cohort Standards",
    hudMetrics: [
      { val: "12 Max", lbl: "Cohort Cap" },
      { val: "96%", lbl: "Parent Rating" },
    ],
    perks: [
      "Live mentor guidance in every session",
      "Beginner to Advanced progression",
      "Weekly parent milestone updates",
    ],
  },
  {
    id: "arcade-games",
    badge: "🎮 Ages 6–10 • Game Design & Logic",
    title: "Build 2D Arcade Games &",
    titleHighlight: "Interactive Worlds",
    desc: "From visual Scratch blocks to game physics, animated sprites, sound synthesis, and playable mechanics kids love to share with family and friends.",
    img: carouselSlide2,
    primaryCta: "Start Game Builder Track",
    primaryTarget: "cn-pricing",
    secondaryCta: "Play Student Games",
    secondaryTarget: "cn-arcade",
    metricVal: "120+",
    metricLabel: "Games Published Online",
    hudTitle: "Creative Game Engine",
    hudMetrics: [
      { val: "100%", lbl: "Visual Logic" },
      { val: "6 Levels", lbl: "Game Milestones" },
    ],
    perks: [
      "Design original characters & animations",
      "Learn loops, variables & event triggers",
      "Publish playable games to mobile & web",
    ],
  },
  {
    id: "robotics-ai",
    badge: "🤖 Ages 8–14 • Smart Robotics & AI",
    title: "Program Smart Robotics &",
    titleHighlight: "Intelligent Rovers",
    desc: "Hands-on hardware STEM. Kids assemble and code robotic rovers with ultrasonic distance sensors, LED arrays, and autonomous obstacle navigation algorithms.",
    img: carouselSlide3,
    primaryCta: "Reserve Robotics Lab",
    primaryTarget: "cn-pricing",
    secondaryCta: "Explore Robotics Track",
    secondaryTarget: "cn-programs",
    metricVal: "100%",
    metricLabel: "Hardware Kits Included",
    hudTitle: "Hardware & AI Lab",
    hudMetrics: [
      { val: "Sensors", lbl: "Ultrasonic & Light" },
      { val: "AI Vision", lbl: "Color & Edge Tracking" },
    ],
    perks: [
      "Real hardware kits shipped to your door",
      "Hands-on mechanical & circuit wiring",
      "Intro to autonomous robotics algorithms",
    ],
  },
  {
    id: "web-python",
    badge: "💻 Ages 11–14 • Text Coding & Web",
    title: "Master Real Python & Build",
    titleHighlight: "Modern Web Apps",
    desc: "Graduate to text-based coding. Write real Python scripts, build responsive web pages with HTML & CSS, and publish a real portfolio to share with colleges.",
    img: carouselSlide4,
    primaryCta: "Explore Python Track",
    primaryTarget: "cn-pricing",
    secondaryCta: "View Curriculum",
    secondaryTarget: "cn-curriculum",
    metricVal: "98%",
    metricLabel: "High School STEM Ready",
    hudTitle: "Real-World Tech Stack",
    hudMetrics: [
      { val: "Python 3", lbl: "Text Coding" },
      { val: "HTML/CSS", lbl: "Web Publishing" },
    ],
    perks: [
      "Industry-standard syntax & debugging",
      "Algorithms, data structures & mini-apps",
      "Personal portfolio hosted on GitHub",
    ],
  },
];

const programs = [
  {
    id: "little",
    category: "6-8",
    title: "Little Coders",
    age: "Ages 6–8",
    desc: "Explore playful coding through interactive stories, visual block puzzles, and game mechanics.",
    img: scratchImage,
    tag: "BEGINNER FRIENDLY",
    tools: ["ScratchJr", "Blockly", "Visual Logic"],
    milestone: "Builds 4 animated stories and 2 mini-games",
  },
  {
    id: "junior",
    category: "9-11",
    title: "Junior Builders",
    age: "Ages 9–11",
    desc: "Build 2D arcade games and animations while learning logic loops, variables, and events.",
    img: pythonImage,
    tag: "MOST POPULAR",
    tools: ["Scratch 3.0", "Tynker", "Arcade Physics"],
    milestone: "Publishes 5 playable games with sound FX",
  },
  {
    id: "future",
    category: "12-14",
    title: "Future Developers",
    age: "Ages 12–14",
    desc: "Create real websites with HTML/CSS and write real Python scripts for games and data apps.",
    img: classroomImage,
    tag: "TEXT CODING",
    tools: ["Python 3", "HTML5/CSS3", "VS Code", "Git"],
    milestone: "Deploys a personal portfolio website",
  },
  {
    id: "robotics",
    category: "robotics",
    title: "Robotics & AI Lab",
    age: "Ages 8–14",
    desc: "Program hardware sensors, motors, and smart robotics in exciting hands-on weekly challenges.",
    img: roboticsImage,
    tag: "HANDS-ON STEM",
    tools: ["Arduino", "MicroPython", "Sensors", "AI Vision"],
    milestone: "Programs an autonomous rover through an obstacle course",
  },
];

const studentProjects = [
  {
    id: "galaxy-jumper",
    title: "Galaxy Jumper 2D Arcade",
    student: "By Maya S., Age 9",
    tag: "Arcade Game • Scratch 3.0",
    desc: "A multi-level gravity platformer where players steer an astronaut through asteroid fields and collect quantum stars with custom pixel art.",
    img: projectGalaxyJumper,
    details: "Built using custom physics algorithms, state broadcast listeners, and 6 progressive difficulty levels. Maya coded the parallax space background herself!",
    tech: ["Scratch 3.0", "Custom Physics", "Parallax Audio", "Score Engine"],
    metrics: "Over 850 plays by fellow students",
  },
  {
    id: "ecotracker-weather",
    title: "EcoTracker Weather & Solar Dashboard",
    student: "By Alex K., Age 13",
    tag: "Web App • HTML/CSS & Python API",
    desc: "A live ecological weather dashboard that tracks local solar energy generation, forecasts green energy efficiency, and rewards kids with eco-badges.",
    img: projectEcoTracker,
    details: "Alex integrated real-time weather JSON data with custom CSS grid layouts and interactive SVG energy meters. Tested by over 40 classmates.",
    tech: ["HTML5 / CSS3", "Python Flask API", "Data Visualization", "Responsive UI"],
    metrics: "Featured in the Annual STEM Showcase",
  },
  {
    id: "robo-rover",
    title: "Autonomous Obstacle Rover AI",
    student: "By Leo & Ethan, Ages 11 & 12",
    tag: "Robotics • C++ / MicroPython",
    desc: "An intelligent robotic rover equipped with ultrasonic depth sensors that navigates household mazes without bumping into walls or furniture.",
    img: carouselSlide3,
    details: "Uses edge detection and PID steering algorithms. The team programmed custom LED headlight signals indicating turn vectors in real time.",
    tech: ["MicroPython", "Ultrasonic Sensor", "PWM Motor Control", "Autonomous AI"],
    metrics: "Winner: Regional Youth Robotics Derby",
  },
  {
    id: "pixel-pet",
    title: "CryptoCreatures Pet Simulator",
    student: "By Sophia L., Age 10",
    tag: "Game Logic • Python Pygame",
    desc: "A virtual pet simulator featuring hunger, happiness, and training stats loops. Pets evolve into new forms based on daily coding challenges completed.",
    img: carouselSlide2,
    details: "Built with object-oriented classes for pet attributes, persistent file save states, and animated 16-bit retro UI animations.",
    tech: ["Python OOP", "State Machines", "File Storage", "Sprite Animation"],
    metrics: "Over 300 pet evolutions unlocked",
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
  {
    q: "Can we switch schedules or cancel anytime?",
    a: "Yes! We offer flexible scheduling options. You can easily switch your weekly time slot or cancel your enrollment with zero penalty before the next billing cycle.",
  },
];

export function CodeNestKids() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("cn-programs");
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [trialBooked, setTrialBooked] = useState(false);

  // Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [slideProgress, setSlideProgress] = useState(0);

  // Filter & Interactive State
  const [ageFilter, setAgeFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<typeof studentProjects[0] | null>(null);
  const [billingCycle, setBillingCycle] = useState<"monthly" | "semester">("monthly");
  const [trialModalOpen, setTrialModalOpen] = useState(false);

  // Form State for Booking Modal
  const [trialForm, setTrialForm] = useState({
    parentName: "",
    email: "",
    childAge: "8",
    track: "Little Coders (Ages 6-8)",
  });

  // Autoplay cycle
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
      setSlideProgress(0);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPlaying, currentSlide]);

  // Smooth progress bar update
  useEffect(() => {
    if (!isPlaying) return;
    setSlideProgress(0);
    const step = 50;
    const total = 6000;
    const timer = setInterval(() => {
      setSlideProgress((prev) => {
        if (prev >= 100) return 0;
        return prev + (step / total) * 100;
      });
    }, step);
    return () => clearInterval(timer);
  }, [currentSlide, isPlaying]);

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      if (window.scrollY < 200) {
        setActiveNav("cn-top");
        return;
      }
      const sections = [
        "cn-top",
        "cn-programs",
        "cn-arcade",
        "cn-curriculum",
        "cn-schedule",
        "cn-mentors",
        "cn-pricing",
        "cn-faq",
      ];
      const offset = window.scrollY + 140;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= offset) {
          setActiveNav(sections[i]);
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
    if (id === "cn-top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      const topOffset = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: topOffset, behavior: "smooth" });
    }
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    setSlideProgress(0);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setSlideProgress(0);
  };

  const filteredPrograms = ageFilter === "all" 
    ? programs 
    : programs.filter((p) => p.category === ageFilter);

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTrialBooked(true);
    setTrialModalOpen(false);
  };

  return (
    <div className="cn-site" id="cn-top">
      {/* 1. Header */}
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
            <button
              type="button"
              className="cn-cta-btn"
              onClick={() => setTrialModalOpen(true)}
            >
              <Rocket className="w-4 h-4" />
              Book Free Trial
            </button>

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
              <button
                type="button"
                className="w-full bg-amber-400 text-slate-950 font-extrabold py-3 text-center rounded-full flex items-center justify-center gap-2"
                onClick={() => {
                  setMenuOpen(false);
                  setTrialModalOpen(true);
                }}
              >
                <Rocket className="w-4 h-4" />
                Book Free Trial Class
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* 2. FULL-PAGE HERO CAROUSEL */}
      <section 
        className="cn-hero-carousel-wrap"
        onMouseEnter={() => setIsPlaying(false)}
        onMouseLeave={() => setIsPlaying(true)}
      >
        <div className="cn-carousel-track">
          {heroSlides.map((slide, idx) => {
            const isActive = idx === currentSlide;
            return (
              <div
                key={slide.id}
                className={`cn-carousel-slide ${isActive ? "active" : ""}`}
                aria-hidden={!isActive}
              >
                {/* Background Image & Layered Gradient Overlays */}
                <img
                  src={slide.img}
                  alt={slide.title}
                  className="cn-slide-bg-img"
                />
                <div className="cn-slide-overlay" />

                {/* Slide Foreground Content */}
                <div className="cn-slide-content-wrap">
                  <div className="cn-wrap">
                    <div className="cn-slide-grid">
                      <div>
                        <div className="cn-slide-badge">
                          <Sparkles className="w-4 h-4" />
                          {slide.badge}
                        </div>

                        <h2 className="cn-slide-title">
                          {slide.title} <span>{slide.titleHighlight}</span>
                        </h2>

                        <p className="cn-slide-desc">{slide.desc}</p>

                        <div className="cn-slide-actions">
                          <button
                            type="button"
                            className="cn-btn-primary"
                            onClick={() => setTrialModalOpen(true)}
                          >
                            <Rocket className="w-4 h-4" />
                            {slide.primaryCta}
                          </button>

                          <a
                            href={`#${slide.secondaryTarget}`}
                            className="cn-btn-secondary"
                            onClick={(e) => scrollTo(e, slide.secondaryTarget)}
                          >
                            {slide.secondaryCta}
                            <ArrowRight className="w-4 h-4" />
                          </a>
                        </div>
                      </div>

                      {/* Right Floating Glass HUD Card */}
                      <div className="cn-slide-hud-card">
                        <div className="cn-hud-card-header">
                          <span className="cn-hud-title">{slide.hudTitle}</span>
                          <span className="text-xs font-mono font-bold text-amber-300">Cohort Guaranteed</span>
                        </div>

                        <div className="cn-hud-metrics-row">
                          {slide.hudMetrics.map((m, mIdx) => (
                            <div key={mIdx} className="cn-hud-metric-box">
                              <div className="cn-hud-metric-val">{m.val}</div>
                              <div className="cn-hud-metric-lbl">{m.lbl}</div>
                            </div>
                          ))}
                        </div>

                        <ul className="cn-hud-perks-list">
                          {slide.perks.map((perk, pIdx) => (
                            <li key={pIdx}>
                              <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                              <span>{perk}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Left / Right Arrow Controls */}
          <button
            type="button"
            className="cn-carousel-arrow prev"
            onClick={handlePrevSlide}
            aria-label="Previous Slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            className="cn-carousel-arrow next"
            onClick={handleNextSlide}
            aria-label="Next Slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Interactive Navigation Bar */}
        <div className="cn-carousel-bottom-nav">
          <div className="cn-wrap cn-carousel-bottom-inner">
            <div className="cn-carousel-tabs">
              {heroSlides.map((slide, idx) => {
                const isActive = idx === currentSlide;
                return (
                  <button
                    key={slide.id}
                    type="button"
                    className={`cn-carousel-tab-btn ${isActive ? "active" : ""}`}
                    onClick={() => {
                      setCurrentSlide(idx);
                      setSlideProgress(0);
                    }}
                  >
                    <span className="cn-tab-num">0{idx + 1}</span>
                    <span className="cn-tab-label">
                      {idx === 0 && "STEM Core"}
                      {idx === 1 && "Arcade Games"}
                      {idx === 2 && "Robotics & AI"}
                      {idx === 3 && "Web & Python"}
                    </span>
                    {isActive && (
                      <div className="cn-tab-progress-bg">
                        <div
                          className="cn-tab-progress-bar"
                          style={{ width: `${slideProgress}%` }}
                        />
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            <div className="cn-carousel-side-controls">
              <span className="cn-carousel-counter">
                0{currentSlide + 1} / 0{heroSlides.length}
              </span>
              <button
                type="button"
                className="cn-pause-btn"
                onClick={() => setIsPlaying(!isPlaying)}
                aria-label={isPlaying ? "Pause autoplay" : "Play autoplay"}
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Stats HUD Band */}
      <section className="cn-stats-bar">
        <div className="cn-wrap">
          <div className="cn-stats-grid">
            <div className="cn-stat-box">
              <Users className="w-8 h-8 text-amber-400" />
              <div>
                <h3>4,500+</h3>
                <p>Happy Young Students</p>
              </div>
            </div>

            <div className="cn-stat-box">
              <Star className="w-8 h-8 text-amber-400" />
              <div>
                <h3>96%</h3>
                <p>Parent Rating Score</p>
              </div>
            </div>

            <div className="cn-stat-box">
              <Award className="w-8 h-8 text-amber-400" />
              <div>
                <h3>12 Max</h3>
                <p>Students per Class</p>
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

      {/* 4. Programs Grid with Interactive Age Filter */}
      <section id="cn-programs" className="cn-section bg-white">
        <div className="cn-wrap">
          <div className="cn-section-head">
            <span className="cn-eyebrow">
              <Code2 className="w-3.5 h-3.5" />
              AGE-APPROPRIATE PATHWAYS
            </span>
            <h2 className="cn-section-title">Explore Coding Tracks by Age Group</h2>
          </div>

          {/* Filter Pills */}
          <div className="cn-filter-pills">
            <button
              type="button"
              className={`cn-filter-btn ${ageFilter === "all" ? "active" : ""}`}
              onClick={() => setAgeFilter("all")}
            >
              All Age Tracks
            </button>
            <button
              type="button"
              className={`cn-filter-btn ${ageFilter === "6-8" ? "active" : ""}`}
              onClick={() => setAgeFilter("6-8")}
            >
              Little Coders (Ages 6–8)
            </button>
            <button
              type="button"
              className={`cn-filter-btn ${ageFilter === "9-11" ? "active" : ""}`}
              onClick={() => setAgeFilter("9-11")}
            >
              Junior Builders (Ages 9–11)
            </button>
            <button
              type="button"
              className={`cn-filter-btn ${ageFilter === "12-14" ? "active" : ""}`}
              onClick={() => setAgeFilter("12-14")}
            >
              Future Devs (Ages 12–14)
            </button>
            <button
              type="button"
              className={`cn-filter-btn ${ageFilter === "robotics" ? "active" : ""}`}
              onClick={() => setAgeFilter("robotics")}
            >
              Robotics & AI Lab
            </button>
          </div>

          <div className="cn-programs-grid">
            {filteredPrograms.map((program) => (
              <div key={program.id} className="cn-program-card">
                <div className="cn-program-img-wrap">
                  <img src={program.img} alt={program.title} />
                  <span className="absolute top-4 right-4 bg-slate-950/85 backdrop-blur-md text-amber-300 border border-amber-500/30 text-xs font-mono font-bold px-3 py-1 rounded-full">
                    {program.tag}
                  </span>
                </div>

                <div className="cn-program-body">
                  <span className="text-xs font-mono font-bold text-purple-600 mb-1">{program.age}</span>
                  <h3>{program.title}</h3>
                  <p>{program.desc}</p>

                  <div className="cn-program-tools">
                    {program.tools.map((t, idx) => (
                      <span key={idx} className="cn-tool-badge">{t}</span>
                    ))}
                  </div>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-500 italic">{program.milestone}</span>
                    <button
                      type="button"
                      className="text-sm font-extrabold text-purple-700 hover:text-purple-900 inline-flex items-center gap-1"
                      onClick={() => setTrialModalOpen(true)}
                    >
                      Book Trial
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. STUDENT PROJECT ARCADE SHOWCASE */}
      <section id="cn-arcade" className="cn-arcade-section">
        <div className="cn-wrap">
          <div className="cn-section-head">
            <span className="cn-eyebrow">
              <Gamepad2 className="w-3.5 h-3.5 text-amber-300" />
              STUDENT PROJECT ARCADE
            </span>
            <h2 className="cn-section-title !text-white">Real Games & Apps Built by Our Students</h2>
            <p className="text-slate-300 text-sm mt-3 max-w-xl mx-auto">
              Every student publishes interactive games, web apps, and robotic prototypes to share with their class and family.
            </p>
          </div>

          <div className="cn-arcade-grid">
            {studentProjects.map((proj) => (
              <div 
                key={proj.id} 
                className="cn-arcade-card"
                onClick={() => setSelectedProject(proj)}
              >
                <div className="cn-arcade-img-wrap">
                  <img src={proj.img} alt={proj.title} />
                  <span className="cn-arcade-badge">{proj.tag}</span>
                </div>

                <div className="cn-arcade-body">
                  <span className="cn-arcade-student">{proj.student}</span>
                  <h3>{proj.title}</h3>
                  <p>{proj.desc}</p>

                  <div className="cn-arcade-btn">
                    <span>Inspect Project Specs</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && typeof document !== "undefined" && createPortal(
        <div className="cn-modal-root" role="dialog" aria-modal="true">
          <div
            className="cn-modal-backdrop"
            onClick={() => setSelectedProject(null)}
          />
          <div className="cn-modal-card">
            <div className="cn-modal-header">
              <div className="flex items-center gap-2">
                <Gamepad2 className="w-5 h-5 text-amber-300" />
                <h3 className="font-extrabold text-white text-lg">{selectedProject.title}</h3>
              </div>
              <button
                type="button"
                className="p-1 text-slate-400 hover:text-white"
                onClick={() => setSelectedProject(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="cn-modal-body">
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-56 object-cover rounded-xl mb-4 border border-slate-700"
              />

              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono font-bold text-amber-300">{selectedProject.student}</span>
                <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                  {selectedProject.metrics}
                </span>
              </div>

              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                {selectedProject.details}
              </p>

              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx} className="bg-slate-800 text-purple-300 border border-purple-500/30 text-xs font-mono px-3 py-1 rounded-md">
                    {t}
                  </span>
                ))}
              </div>

              <button
                type="button"
                className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold py-3.5 rounded-xl transition-all flex items-center justify-center gap-2"
                onClick={() => {
                  setSelectedProject(null);
                  setTrialModalOpen(true);
                }}
              >
                <Rocket className="w-4 h-4" />
                Learn to Build Projects Like This
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}

      {/* 6. Curriculum Roadmap */}
      <section id="cn-curriculum" className="cn-section bg-navy">
        <div className="cn-wrap">
          <div className="cn-section-head">
            <span className="cn-eyebrow">
              <Sparkles className="w-3.5 h-3.5" />
              CURRICULUM ROADMAP
            </span>
            <h2 className="cn-section-title">Six Milestones from First Code to Capstone</h2>
          </div>

          <div className="cn-roadmap-grid">
            {roadmapSteps.map((step) => (
              <div key={step.num} className="cn-roadmap-card">
                <span className="cn-roadmap-num">#{step.num}</span>
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

      {/* 7. Weekly Schedule Matrix */}
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

      {/* 8. Mentors & Showcase */}
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

      {/* 9. Pricing & Tuition Plan Switcher */}
      <section id="cn-pricing" className="cn-section bg-light">
        <div className="cn-wrap">
          <div className="cn-section-head">
            <span className="cn-eyebrow">
              <Rocket className="w-3.5 h-3.5 text-amber-500" />
              SIMPLE TRANSPARENT PLANS
            </span>
            <h2 className="cn-section-title">Start with a Free Trial Class</h2>
          </div>

          {/* Billing Cycle Toggle */}
          <div className="cn-plan-toggle">
            <button
              type="button"
              className={`cn-toggle-btn ${billingCycle === "monthly" ? "active" : ""}`}
              onClick={() => setBillingCycle("monthly")}
            >
              Monthly Enrollment
            </button>
            <button
              type="button"
              className={`cn-toggle-btn ${billingCycle === "semester" ? "active" : ""}`}
              onClick={() => setBillingCycle("semester")}
            >
              Semester Pass <span className="cn-save-tag">SAVE 20%</span>
            </button>
          </div>

          <div className="cn-pricing-grid">
            <div className="cn-price-card">
              <h3 className="font-extrabold text-xl text-slate-900 mb-2">Starter Explorer</h3>
              <p className="text-slate-600 text-sm mb-6">1 Live Class per week with group coding labs.</p>
              <div className="text-4xl font-extrabold text-slate-900 mb-1">
                {billingCycle === "monthly" ? "$129" : "$103"}
              </div>
              <span className="text-xs font-mono text-slate-500 mb-6">
                per month {billingCycle === "semester" ? "(billed semesterly)" : "(cancel anytime)"}
              </span>

              <ul className="space-y-3 text-sm text-slate-700 mb-8 flex-grow">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 12 Students max per class</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Weekly hands-on projects</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Parent progress updates</li>
              </ul>

              <button
                type="button"
                className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-colors"
                onClick={() => setTrialModalOpen(true)}
              >
                Book Free Trial
              </button>
            </div>

            <div className="cn-price-card popular">
              <span className="cn-popular-badge">MOST POPULAR</span>
              <h3 className="font-extrabold text-xl text-slate-900 mb-2">Junior Coder</h3>
              <p className="text-slate-600 text-sm mb-6">2 Live Classes per week + project showcase feedback.</p>
              <div className="text-4xl font-extrabold text-purple-700 mb-1">
                {billingCycle === "monthly" ? "$199" : "$159"}
              </div>
              <span className="text-xs font-mono text-slate-500 mb-6">
                per month {billingCycle === "semester" ? "(billed semesterly)" : "(cancel anytime)"}
              </span>

              <ul className="space-y-3 text-sm text-slate-700 mb-8 flex-grow">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Everything in Starter plan</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> 2 Live sessions per week</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Capstone game publishing</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Certificate of Achievement</li>
              </ul>

              <button
                type="button"
                className="w-full bg-purple-600 text-white font-bold py-3.5 rounded-xl hover:bg-purple-700 transition-colors shadow-lg"
                onClick={() => setTrialModalOpen(true)}
              >
                Book Free Trial
              </button>
            </div>

            <div className="cn-price-card">
              <h3 className="font-extrabold text-xl text-slate-900 mb-2">Advanced STEM</h3>
              <p className="text-slate-600 text-sm mb-6">Robotics, AI modules, and 1-on-1 mentor guidance.</p>
              <div className="text-4xl font-extrabold text-slate-900 mb-1">
                {billingCycle === "monthly" ? "$249" : "$199"}
              </div>
              <span className="text-xs font-mono text-slate-500 mb-6">
                per month {billingCycle === "semester" ? "(billed semesterly)" : "(cancel anytime)"}
              </span>

              <ul className="space-y-3 text-sm text-slate-700 mb-8 flex-grow">
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Everything in Junior Coder</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Robotics hardware kits included</li>
                <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-500" /> Python & AI project labs</li>
              </ul>

              <button
                type="button"
                className="w-full bg-slate-900 text-white font-bold py-3.5 rounded-xl hover:bg-slate-800 transition-colors"
                onClick={() => setTrialModalOpen(true)}
              >
                Book Free Trial
              </button>
            </div>
          </div>

          {trialBooked && (
            <div className="mt-8 max-w-md mx-auto bg-emerald-900/90 text-white p-4 rounded-xl border border-emerald-500/40 text-center">
              <CheckCircle2 className="w-6 h-6 text-emerald-300 mx-auto mb-1" />
              <h4 className="font-bold text-sm">Free Trial Reserved!</h4>
              <p className="text-xs text-emerald-200 mt-1">Check your email for your access code and chosen class date.</p>
            </div>
          )}
        </div>
      </section>

      {/* 10. Free Trial Booking Modal */}
      {trialModalOpen && typeof document !== "undefined" && createPortal(
        <div className="cn-modal-root" role="dialog" aria-modal="true">
          <div
            className="cn-modal-backdrop"
            onClick={() => setTrialModalOpen(false)}
          />
          <div className="cn-modal-card">
            <div className="cn-modal-header">
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-amber-300" />
                <h3 className="font-extrabold text-white text-lg">Book a Free Live Trial Class</h3>
              </div>
              <button
                type="button"
                className="p-1 text-slate-400 hover:text-white"
                onClick={() => setTrialModalOpen(false)}
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <form onSubmit={handleTrialSubmit} className="cn-modal-body">
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Parent or Guardian Name</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Sarah Mitchell"
                    value={trialForm.parentName}
                    onChange={(e) => setTrialForm({ ...trialForm, parentName: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono text-slate-300 mb-1">Parent Email</label>
                  <input
                    type="email"
                    required
                    placeholder="parent@example.com"
                    value={trialForm.email}
                    onChange={(e) => setTrialForm({ ...trialForm, email: e.target.value })}
                    className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Child Age</label>
                    <select
                      value={trialForm.childAge}
                      onChange={(e) => setTrialForm({ ...trialForm, childAge: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400"
                    >
                      <option value="6">Age 6</option>
                      <option value="7">Age 7</option>
                      <option value="8">Age 8</option>
                      <option value="9">Age 9</option>
                      <option value="10">Age 10</option>
                      <option value="11">Age 11</option>
                      <option value="12">Age 12</option>
                      <option value="13">Age 13</option>
                      <option value="14">Age 14</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Program Track</label>
                    <select
                      value={trialForm.track}
                      onChange={(e) => setTrialForm({ ...trialForm, track: e.target.value })}
                      className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-400"
                    >
                      <option value="Little Coders (Ages 6-8)">Little Coders (6-8)</option>
                      <option value="Junior Builders (Ages 9-11)">Junior Builders (9-11)</option>
                      <option value="Future Developers (Ages 12-14)">Future Developers (12-14)</option>
                      <option value="Robotics & AI Lab">Robotics & AI Lab</option>
                    </select>
                  </div>
                </div>

                <div className="p-3 bg-amber-400/10 border border-amber-400/20 rounded-xl text-xs text-amber-200">
                  ⚡ 100% Free • No credit card required • Includes 45-minute live mentor lesson.
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold py-3.5 rounded-xl transition-all shadow-lg"
                >
                  Confirm Free Trial Reservation
                </button>
              </div>
            </form>
          </div>
        </div>,
        document.body
      )}

      {/* 11. FAQ Section */}
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

      {/* 12. Footer */}
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
                <li><a href="#cn-arcade" onClick={(e) => scrollTo(e, "cn-arcade")}>Student Project Arcade</a></li>
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
              <button
                type="button"
                className="inline-flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-950 font-extrabold px-6 py-3 rounded-full text-xs transition-colors"
                onClick={() => setTrialModalOpen(true)}
              >
                Book Free Trial Class
              </button>
            </div>
          </div>

          <div className="pt-8 border-t border-slate-800 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} CodeNest Kids LLC. All rights reserved. STEM Education Provider.
          </div>
        </div>
      </footer>

      {/* Mobile Fixed Bottom Navigation Bar (< 1024px) */}
      <nav className="cn-bottom-nav" aria-label="Mobile Bottom Navigation">
        {mobileBottomNavItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeNav === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`cn-bottom-nav-item ${isActive ? "active" : ""}`}
              onClick={(e) => scrollTo(e, item.id)}
            >
              <div className="cn-bottom-icon-container">
                <Icon className="cn-bottom-icon" />
              </div>
              <span className="cn-bottom-label">{item.label}</span>
            </a>
          );
        })}
        <button
          type="button"
          className={`cn-bottom-nav-item ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open full site navigation menu"
        >
          <div className="cn-bottom-icon-container">
            <Menu className="cn-bottom-icon" />
          </div>
          <span className="cn-bottom-label">Menu</span>
        </button>
      </nav>
    </div>
  );
}
