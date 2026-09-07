import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  X,
  Menu,
  CheckCircle2,
  ArrowRight,
  Search,
  Sparkles,
  Camera,
  Layers,
  Film,
  Award,
  ChevronLeft,
  ChevronRight,
  Sliders,
  Maximize2,
  Calendar,
  MapPin,
  Send,
} from "lucide-react";
import "./FrameLabPhoto.css";

// -----------------------------------------------------------------------------
// Social Icons (Inline SVGs to prevent lucide-react version mismatch)
// -----------------------------------------------------------------------------
function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  );
}

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

// -----------------------------------------------------------------------------
// Interactive Lightbox / Case Study Modal
// -----------------------------------------------------------------------------
interface ProjectData {
  id: string;
  title: string;
  publication: string;
  year: string;
  category: string;
  image: string;
  specs: {
    camera: string;
    lens: string;
    lighting: string;
    location: string;
  };
  credits: {
    artDirector: string;
    stylist: string;
    model: string;
  };
  narrative: string;
}

interface LightboxModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function LightboxModal({ project, onClose, onPrev, onNext }: LightboxModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl max-h-[92vh] overflow-y-auto framelab-scrollbar rounded-3xl border border-white/10 bg-[#121316] text-white p-5 sm:p-8 shadow-2xl text-left framelab-modal-anim relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 font-bold bg-white/5 px-2.5 py-1 rounded-full border border-white/10">
              {project.category} // {project.year}
            </span>
            <span className="text-xs font-mono text-slate-400">
              Client: <strong className="text-white">{project.publication}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/10"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              className="p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/10"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-red-500/20 text-slate-300 hover:text-red-400 transition-colors cursor-pointer border border-white/10 ml-2"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Image Preview */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-black/40 border border-white/10 shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[60vh] object-contain mx-auto"
            />
          </div>

          {/* Right Column: Editorial Notes & Metadata */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold framelab-serif leading-tight text-white mb-2">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                {project.narrative}
              </p>
            </div>

            {/* Technical Camera Specifications */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs font-mono">
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold border-b border-white/5 pb-1 flex items-center gap-1.5">
                <Camera className="w-3 h-3 text-slate-300" />
                Technical Capture Suite
              </div>
              <div className="grid grid-cols-2 gap-2 text-slate-300 pt-1">
                <div>
                  <span className="text-slate-500 block text-[9px] uppercase">Camera</span>
                  <span>{project.specs.camera}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[9px] uppercase">Optics</span>
                  <span>{project.specs.lens}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[9px] uppercase">Lighting</span>
                  <span>{project.specs.lighting}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[9px] uppercase">Location</span>
                  <span>{project.specs.location}</span>
                </div>
              </div>
            </div>

            {/* Production Team Credits */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 space-y-2 text-xs font-mono">
              <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold border-b border-white/5 pb-1 flex items-center gap-1.5">
                <Film className="w-3 h-3 text-slate-300" />
                Production Credits
              </div>
              <div className="grid grid-cols-2 gap-2 text-slate-300 pt-1">
                <div>
                  <span className="text-slate-500 block text-[9px] uppercase">Art Direction</span>
                  <span>{project.credits.artDirector}</span>
                </div>
                <div>
                  <span className="text-slate-500 block text-[9px] uppercase">Fashion Stylist</span>
                  <span>{project.credits.stylist}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-slate-500 block text-[9px] uppercase">Talent</span>
                  <span>{project.credits.model}</span>
                </div>
              </div>
            </div>

            {/* Quick Action */}
            <button
              onClick={() => {
                onClose();
                const el = document.getElementById("inquire");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full py-3 rounded-xl bg-white text-black hover:bg-slate-200 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md text-center"
            >
              Inquire About Similar Campaign
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Main FrameLabPhoto Component
// -----------------------------------------------------------------------------
export function FrameLabPhoto() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("work");
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Category filter for Selected Work
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  // Lightbox Modal state
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  // Active Process Step in timeline
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);

  // Testimonial & Magazine Spread Carousel state
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState<number>(0);

  // Inquiry Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Editorial Cover & Spread",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Navigation Items matching the original image
  const navItems = [
    { id: "work", label: "WORK" },
    { id: "process", label: "PROCESS" },
    { id: "credentials", label: "CREDENTIALS" },
    { id: "inquire", label: "INQUIRE" },
  ];

  // Selected Work Projects Data
  const projects: ProjectData[] = [
    {
      id: "vogue-naomi",
      title: "VOGUE: NAOMI'S JOURNEY",
      publication: "Vogue France",
      year: "2024",
      category: "Covers",
      image: "/images/framelab/work-vogue-naomi.webp",
      specs: {
        camera: "Hasselblad H6D-100c",
        lens: "HC 80mm f/2.2",
        lighting: "Profoto Pro-11 with 7ft Octa",
        location: "Studio Saint-Germain, Paris",
      },
      credits: {
        artDirector: "Jean-Paul Marat",
        stylist: "Camille de la Tour",
        model: "Naomi K. (IMG Paris)",
      },
      narrative:
        "A black-and-white high-contrast study in motion, kinetic silhouette drapery, and the commanding presence of modern Parisian haute couture.",
    },
    {
      id: "harpers-urban",
      title: "HARPER'S: URBAN CANVAS",
      publication: "Harper's Bazaar",
      year: "2024",
      category: "Editorial",
      image: "/images/framelab/work-harpers-urban.webp",
      specs: {
        camera: "Leica S3 Medium Format",
        lens: "Summarit-S 70mm f/2.5 ASPH",
        lighting: "Natural overcast + 2x B10 Plus fill",
        location: "SoHo Cobblestones, New York City",
      },
      credits: {
        artDirector: "Marcus Sterling",
        stylist: "Elena Rostova",
        model: "Sasha Vance (Ford Models)",
      },
      narrative:
        "Dynamic on-location editorial capturing architectural urban geometry, bold houndstooth streetwear tailoring, and kinetic New York street energy.",
    },
    {
      id: "numero-dancer",
      title: "NUMÉRO: THE DANCER",
      publication: "Numéro Berlin",
      year: "2023",
      category: "Motion",
      image: "/images/framelab/work-numero-dancer.webp",
      specs: {
        camera: "Phase One IQ4 150MP",
        lens: "Schneider Kreuznach 110mm LS f/2.8",
        lighting: "Broncolor Scoro 3200 with cyan gel",
        location: "Volksbühne Stage, Berlin",
      },
      credits: {
        artDirector: "Astrid Lindgren",
        stylist: "Maximilian Voss",
        model: "Irina B. (Berlin State Ballet)",
      },
      narrative:
        "An ethereal study of tension and zero-gravity release, frozen at 1/8000s under deep cyan theatrical floodlights.",
    },
    {
      id: "elle-white",
      title: "ELLE: MODERN GRACE (SERIES I)",
      publication: "ELLE Magazine",
      year: "2024",
      category: "Covers",
      image: "/images/framelab/work-elle-white.webp",
      specs: {
        camera: "Hasselblad H6D-100c",
        lens: "HC 100mm f/2.2",
        lighting: "Elinchrom Litemotiv 190cm",
        location: "Villa Necchi Campiglio, Milan",
      },
      credits: {
        artDirector: "Sofia Conti",
        stylist: "Gianluigi Rossi",
        model: "Valeria Moreno (Elite Milan)",
      },
      narrative:
        "Sculptural white silk chiffon evening wear framed against pure neutral cyclorama, celebrating classical Italian elegance through clean modern lines.",
    },
    {
      id: "elle-red",
      title: "ELLE: MODERN GRACE (SERIES II)",
      publication: "ELLE Magazine",
      year: "2024",
      category: "Editorial",
      image: "/images/framelab/work-elle-red.webp",
      specs: {
        camera: "Phase One XF IQ3 100MP",
        lens: "Schneider Kreuznach 80mm LS",
        lighting: "Profoto Giant Silver 210",
        location: "Studio Belleville, Paris",
      },
      credits: {
        artDirector: "Chloe Dubois",
        stylist: "Antoine Mercier",
        model: "Aminata Diallo (Women Mgmt)",
      },
      narrative:
        "High-saturation vermilion studio backdrop emphasizing kinetic choreography and structured monochrome patterned suiting.",
    },
    {
      id: "elle-black",
      title: "ELLE: MODERN GRACE (SERIES III)",
      publication: "ELLE Magazine",
      year: "2024",
      category: "Covers",
      image: "/images/framelab/work-elle-black.webp",
      specs: {
        camera: "Hasselblad 907X 50C",
        lens: "XCD 90mm f/2.5 V",
        lighting: "Single BXR 500 beauty dish with grid",
        location: "Mayfair Private Gallery, London",
      },
      credits: {
        artDirector: "Oliver Kensington",
        stylist: "Victoria Bell",
        model: "Helena Zhou (Select London)",
      },
      narrative:
        "Dramatic low-key chiaroscuro lighting exploring structured architectural wool tailoring, raw gold jewelry accents, and atmospheric mystery.",
    },
  ];

  // Filtered projects
  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(
          (p) => p.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  // The Process Steps
  const processSteps = [
    {
      title: "RESEARCH & CONCEPT",
      image: "/images/framelab/process-step-1.webp",
      summary: "Editorial photography portfolio for custom editorial/commercial concept & portfolio.",
      details:
        "Deep visual research, moodboard curation, cultural alignment, and lighting schema drafting tailored to the publication's seasonal editorial directive.",
      deliverable: "Creative Direction Deck & Moodboard",
      turnaround: "5 Business Days",
    },
    {
      title: "PLANNING & CASTING",
      image: "/images/framelab/process-step-2.webp",
      summary: "Editorial photography portfolio & locations, casting & direction.",
      details:
        "Sourcing tier-one agency talent, securing architectural shoot locations, negotiating permits, and coordinating with hair, makeup, and wardrobe departments.",
      deliverable: "Call Sheets, Location Permits & Talent Book",
      turnaround: "3-7 Days",
    },
    {
      title: "PRODUCTION & DIRECTION",
      image: "/images/framelab/process-step-3.webp",
      summary: "Editorial photography portfolio high-end & cinematic.",
      details:
        "Full-day or multi-day medium-format capture on stage or on location with live Capture One tethering, digital tech monitoring, and precise art direction.",
      deliverable: "Raw Capture One Session (1,500+ Frames)",
      turnaround: "1-3 Shoot Days",
    },
    {
      title: "POST & DELIVERY",
      image: "/images/framelab/process-step-4.webp",
      summary: "Post & delivery was with concise retouched photo pack & delivery suite.",
      details:
        "High-end non-destructive frequency separation, master color grading, magazine CMYK pre-flight profiles, and secure client cloud gallery delivery.",
      deliverable: "Master Hi-Res TIFFs & Web-Ready Archives",
      turnaround: "7-10 Days",
    },
  ];

  // Credible Outcomes Testimonials Data
  const testimonials = [
    {
      quote: "FrameLab Photo elevates every story they touch.",
      editor: "Alicia W.",
      title: "Editor-in-Chief, Global Editorial",
      magazine: "VOGUE & ELLE COLLABORATION",
    },
    {
      quote: "Unrivaled cinematic mastery, precision lighting, and authentic emotional resonance.",
      editor: "Marcus Vance",
      title: "Creative Director, Conde Nast",
      magazine: "GQ STYLE AWARDS 2024",
    },
    {
      quote: "Their medium-format imagery transforms standard fashion spreads into permanent cultural archives.",
      editor: "Helena Berg",
      title: "Executive Director of Photography",
      magazine: "MONOCLE QUARTERLY",
    },
  ];

  // Scroll Spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      // Bottom detection -> activate "inquire"
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 120
      ) {
        setActiveSection("inquire");
        return;
      }

      const sections = ["inquire", "credentials", "process", "work"];
      const scrollPos = window.scrollY + 180;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection("work");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 85;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 600);
  };

  return (
    <div className="framelab-container min-h-screen selection:bg-white selection:text-black">
      {/* Lightbox Case Study Modal */}
      <LightboxModal
        project={activeProjectIndex !== null ? projects[activeProjectIndex] : null}
        onClose={() => setActiveProjectIndex(null)}
        onPrev={() =>
          setActiveProjectIndex((prev) =>
            prev !== null ? (prev - 1 + projects.length) % projects.length : 0
          )
        }
        onNext={() =>
          setActiveProjectIndex((prev) =>
            prev !== null ? (prev + 1) % projects.length : 0
          )
        }
      />

      {/* Quick Search Overlay Modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-[#18191c] border border-white/10 p-6 shadow-2xl text-left framelab-modal-anim"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
              <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                Search Archive &amp; Editorial Tearsheets
              </span>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
              <input
                type="text"
                autoFocus
                placeholder="Search by publication, model, camera, or year..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-white/30"
              />
            </div>
            <div className="mt-4 max-h-60 overflow-y-auto space-y-2">
              {projects
                .filter(
                  (p) =>
                    p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    p.publication.toLowerCase().includes(searchQuery.toLowerCase()) ||
                    p.category.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((p, idx) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      setSearchOpen(false);
                      setActiveProjectIndex(idx);
                    }}
                    className="p-3 rounded-lg bg-white/[0.02] hover:bg-white/10 flex items-center justify-between cursor-pointer transition-colors border border-transparent hover:border-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-10 h-10 rounded object-cover"
                      />
                      <div>
                        <div className="text-xs font-bold text-white">{p.title}</div>
                        <div className="text-[10px] font-mono text-slate-400">
                          {p.publication} // {p.year}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase text-slate-400">
                      View Project &rarr;
                    </span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}

      {/* ======================================================================= */}
      {/* HEADER / NAVIGATION BAR                                                 */}
      {/* ======================================================================= */}
      <header
        className={`framelab-navbar-sticky ${
          isScrolled ? "framelab-navbar-scrolled py-2.5" : "py-4 sm:py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo: FRAME LAB / PHOTO */}
          <Link
            to="/portfolio/framelab-photo"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 group cursor-pointer select-none"
          >
            <div className="flex flex-col text-left leading-none">
              <span className="text-xs sm:text-sm font-black tracking-[0.2em] text-white uppercase group-hover:text-slate-200 transition-colors">
                FRAME LAB
              </span>
              <span className="text-[9px] font-mono tracking-[0.35em] text-slate-400 uppercase mt-0.5 font-semibold">
                PHOTO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-[11px] font-mono font-bold tracking-[0.2em] text-slate-300"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors uppercase tracking-widest cursor-pointer relative py-1 ${
                    isActive
                      ? "text-white font-extrabold"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-white" />
                  )}
                </button>
              );
            })}

            {/* Quick Search Icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="p-1.5 rounded-full hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Search editorial catalog"
            >
              <Search className="w-4 h-4" />
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-slate-400 hover:text-white"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-white/10 text-slate-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-white/10 bg-[#121316]/95 backdrop-blur-xl px-6 py-5 space-y-3 text-xs font-mono uppercase tracking-wider text-left framelab-modal-anim shadow-2xl">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all ${
                    isActive
                      ? "bg-white text-black font-bold"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-black" />}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* Spacer for sticky header */}
      <div className="h-16 sm:h-20" />

      {/* ======================================================================= */}
      {/* HERO SECTION                                                            */}
      {/* ======================================================================= */}
      <section className="relative z-10 py-12 sm:py-20 lg:py-24 overflow-hidden border-b border-white/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Headline & Action */}
            <div className="lg:col-span-6 text-left space-y-5 z-20">
              <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-white framelab-serif leading-[1.08] tracking-tight uppercase">
                CRAFTING NARRATIVES
                <br />
                THROUGH EDITORIAL
                <br />
                PHOTOGRAPHY
              </h1>

              <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-slate-400 uppercase font-semibold">
                POSITIONING, VISION, EXECUTION
              </p>

              <div className="pt-3">
                <button
                  onClick={() => scrollToSection("work")}
                  className="px-7 py-3 rounded-full border border-white/40 bg-white/5 hover:bg-white hover:text-black text-white font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer"
                >
                  EXPLORE WORK
                </button>
              </div>
            </div>

            {/* Right Studio Shoot Photo Composition */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-white/10 group">
                <img
                  src="/images/framelab/hero-studio-shoot.webp"
                  alt="FrameLab Photo Studio Shoot Production"
                  className="w-full h-full object-cover framelab-img-zoom brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-300">
                  <span className="bg-black/60 backdrop-blur px-2.5 py-1 rounded-full border border-white/10">
                    STUDIO 01 // PARIS FASHION WEEK
                  </span>
                  <span className="bg-black/60 backdrop-blur px-2.5 py-1 rounded-full border border-white/10">
                    MEDIUM FORMAT DIGITAL
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* POSITIONING SECTION                                                     */}
      {/* ======================================================================= */}
      <section
        id="positioning"
        className="relative z-10 py-16 sm:py-24 bg-[#101114] border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-white uppercase framelab-serif mb-12 sm:mb-16">
            POSITIONING
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Left Card: OUR PHILOSOPHY */}
            <div className="md:col-span-5 p-8 sm:p-10 rounded-3xl bg-[#16171b] border border-white/10 text-left flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-400 font-bold block mb-4">
                  01 // FOUNDATION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold framelab-serif uppercase tracking-wider text-white mb-6">
                  OUR PHILOSOPHY
                </h3>

                <ul className="space-y-5 text-sm sm:text-base font-light text-slate-200">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                    <div>
                      <strong className="block font-semibold text-white">
                        Intentional Storytelling
                      </strong>
                      <span className="text-xs text-slate-400 font-normal">
                        Every frame serves an overarching cultural and emotional narrative arc.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                    <div>
                      <strong className="block font-semibold text-white">
                        Cultural Relevance
                      </strong>
                      <span className="text-xs text-slate-400 font-normal">
                        Aligning contemporary aesthetic zeitgeist with timeless cinematic craft.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                    <div>
                      <strong className="block font-semibold text-white">
                        Technical Excellence
                      </strong>
                      <span className="text-xs text-slate-400 font-normal">
                        Mastery of lighting ratios, color science, and medium format resolution.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>ESTABLISHED 2018</span>
                <span className="text-white">HAUTE COUTURE SPEC</span>
              </div>
            </div>

            {/* Right Card: VISUAL IDENTITY with Photo Backdrop */}
            <div className="md:col-span-7 relative rounded-3xl overflow-hidden border border-white/10 p-8 sm:p-10 text-left flex flex-col justify-between shadow-xl min-h-[340px] group">
              {/* Background Image with overlay */}
              <img
                src="/images/framelab/positioning-visual-identity.webp"
                alt="Visual Identity in Editorial Photography"
                className="absolute inset-0 w-full h-full object-cover framelab-img-zoom brightness-40 group-hover:brightness-50"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 pointer-events-none" />

              <div className="relative z-10">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-slate-300 font-bold block mb-4">
                  02 // EXECUTION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold framelab-serif uppercase tracking-wider text-white mb-6">
                  VISUAL IDENTITY
                </h3>

                <ul className="space-y-5 text-sm sm:text-base font-light text-slate-200 max-w-md">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                    <div>
                      <strong className="block font-semibold text-white">
                        Raw Authenticity
                      </strong>
                      <span className="text-xs text-slate-300 font-normal">
                        Unfiltered human emotion caught in unrepeatable moments of grace.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                    <div>
                      <strong className="block font-semibold text-white">
                        Sophisticated Aesthetics
                      </strong>
                      <span className="text-xs text-slate-300 font-normal">
                        Meticulous wardrobe curation, sculptural posing, and architectural balance.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-white mt-2 shrink-0" />
                    <div>
                      <strong className="block font-semibold text-white">
                        Compelling Narratives
                      </strong>
                      <span className="text-xs text-slate-300 font-normal">
                        Visual sequencing that commands reader attention across multi-page editorial spreads.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-300">
                <span>PARIS / MILAN / NEW YORK</span>
                <span className="text-white">COUTURE PROTOCOLS &rarr;</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* SELECTED WORK SECTION                                                   */}
      {/* ======================================================================= */}
      <section
        id="work"
        className="relative z-10 py-16 sm:py-24 bg-[#0a0b0d] border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-white uppercase framelab-serif mb-6">
            SELECTED WORK
          </h2>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {[
              { id: "all", label: "ALL WORKS" },
              { id: "covers", label: "MAGAZINE COVERS" },
              { id: "editorial", label: "EDITORIAL" },
              { id: "motion", label: "MOTION & STAGE" },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                  selectedCategory === cat.id
                    ? "bg-white text-black font-bold border-white"
                    : "bg-white/5 text-slate-400 border-white/10 hover:border-white/30 hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects 3-Column Grid matching the reference image */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project, idx) => (
              <div
                key={project.id}
                onClick={() =>
                  setActiveProjectIndex(
                    projects.findIndex((p) => p.id === project.id)
                  )
                }
                className="group framelab-project-card rounded-2xl overflow-hidden bg-[#141518] border border-white/10 text-left cursor-pointer flex flex-col justify-between"
              >
                {/* Photo Preview Container */}
                <div className="relative aspect-[4/5] overflow-hidden bg-black/40">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover framelab-img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Expand badge */}
                  <div className="absolute top-3 right-3 p-2 rounded-full bg-black/60 backdrop-blur text-white opacity-0 group-hover:opacity-100 transition-opacity border border-white/20">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Card Meta & Title */}
                <div className="p-4 sm:p-5 border-t border-white/10 space-y-2 bg-[#121316]">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400">
                    <span className="uppercase tracking-widest">{project.publication}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-white framelab-serif tracking-wide uppercase group-hover:text-slate-200 transition-colors">
                    {project.title}
                  </h3>

                  <div className="pt-2 flex items-center justify-between border-t border-white/5 text-[10px] font-mono">
                    <span className="text-slate-500">Editorial projects</span>
                    <span className="text-slate-300 group-hover:text-white flex items-center gap-1 font-bold">
                      View Project &rarr;
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* THE PROCESS SECTION                                                     */}
      {/* ======================================================================= */}
      <section
        id="process"
        className="relative z-10 py-16 sm:py-24 bg-[#7a7874] text-white border-y border-white/10"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-white uppercase framelab-serif mb-12 sm:mb-16">
            THE PROCESS
          </h2>

          {/* 4 Connected Step Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, idx) => {
              const isSelected = activeProcessStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`p-6 rounded-2xl transition-all cursor-pointer text-center flex flex-col items-center justify-between border ${
                    isSelected
                      ? "bg-black/30 border-white shadow-xl scale-102"
                      : "bg-black/15 border-white/20 hover:border-white/50"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    {/* Circle Icon matching reference image */}
                    <div className="w-16 h-16 rounded-full overflow-hidden mb-4 border border-white/30 shadow-md p-1 bg-black/40">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-contain hover:scale-110 transition-transform"
                      />
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold tracking-wider uppercase framelab-serif mb-2 text-white">
                      {step.title}
                    </h3>

                    <p className="text-[11px] font-normal leading-relaxed text-slate-200">
                      {step.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10 text-[10px] font-mono tracking-widest text-slate-300">
                    STEP 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Phase Deep-Dive Card */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-black/40 border border-white/20 max-w-3xl mx-auto text-left shadow-2xl framelab-modal-anim">
            <div className="flex items-center justify-between mb-3 text-xs font-mono">
              <span className="uppercase tracking-widest text-white font-bold">
                PHASE 0{activeProcessStep + 1} // {processSteps[activeProcessStep].title}
              </span>
              <span className="text-slate-300">
                Timeline: {processSteps[activeProcessStep].turnaround}
              </span>
            </div>

            <p className="text-sm text-slate-200 leading-relaxed font-light mb-4">
              {processSteps[activeProcessStep].details}
            </p>

            <div className="pt-3 border-t border-white/15 flex items-center justify-between text-xs font-mono text-slate-300">
              <span className="font-bold text-white">Milestone Output:</span>
              <span className="text-white">
                {processSteps[activeProcessStep].deliverable}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* CREDIBLE OUTCOMES SECTION                                               */}
      {/* ======================================================================= */}
      <section
        id="credentials"
        className="relative z-10 py-16 sm:py-24 bg-[#0a0b0d] border-b border-white/5"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-white uppercase framelab-serif mb-12 sm:mb-16">
            CREDIBLE OUTCOMES
          </h2>

          {/* Publisher Logos Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-80 mb-16 px-4">
            <img
              src="/images/framelab/logo-vogue.webp"
              alt="Vogue"
              className="h-6 sm:h-7 w-auto object-contain hover:opacity-100 hover:scale-105 transition-all cursor-pointer"
            />
            <img
              src="/images/framelab/logo-gq.webp"
              alt="GQ"
              className="h-6 sm:h-7 w-auto object-contain hover:opacity-100 hover:scale-105 transition-all cursor-pointer"
            />
            <img
              src="/images/framelab/logo-elle.webp"
              alt="ELLE"
              className="h-6 sm:h-7 w-auto object-contain hover:opacity-100 hover:scale-105 transition-all cursor-pointer"
            />
            <img
              src="/images/framelab/logo-w.webp"
              alt="W Magazine"
              className="h-6 sm:h-7 w-auto object-contain hover:opacity-100 hover:scale-105 transition-all cursor-pointer"
            />
            <img
              src="/images/framelab/logo-monocle.webp"
              alt="Monocle"
              className="h-5 sm:h-6 w-auto object-contain hover:opacity-100 hover:scale-105 transition-all cursor-pointer"
            />
          </div>

          {/* Top Testimonial Callout */}
          <div className="max-w-2xl mx-auto mb-14 text-center space-y-2">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold framelab-serif italic text-white leading-snug">
              "{testimonials[activeTestimonialIndex].quote}"
            </p>
            <p className="text-xs font-mono uppercase tracking-widest text-slate-400">
              — {testimonials[activeTestimonialIndex].editor}, {testimonials[activeTestimonialIndex].title}
            </p>
          </div>

          {/* Magazine Spread Interactive Showcase Box */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-[#131418] border border-white/10 p-6 sm:p-10 shadow-2xl text-left">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left: Magazine Editor Critique */}
              <div className="md:col-span-6 space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-slate-400 font-bold block">
                  FEATURED TEARSHEET // SPREAD ANALYSIS
                </span>
                <h3 className="text-xl sm:text-2xl font-bold framelab-serif leading-snug text-white">
                  "{testimonials[activeTestimonialIndex].quote}"
                </h3>
                <div className="pt-2">
                  <div className="text-xs font-mono font-bold text-white uppercase">
                    — {testimonials[activeTestimonialIndex].editor}
                  </div>
                  <div className="text-[11px] font-mono text-slate-400">
                    {testimonials[activeTestimonialIndex].title}
                  </div>
                  <div className="text-[10px] font-mono text-slate-500 mt-1 uppercase">
                    {testimonials[activeTestimonialIndex].magazine}
                  </div>
                </div>

                {/* Switcher Dots */}
                <div className="flex items-center gap-2 pt-2">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveTestimonialIndex(idx)}
                      className={`h-2 rounded-full transition-all cursor-pointer ${
                        activeTestimonialIndex === idx
                          ? "w-8 bg-white"
                          : "w-2 bg-white/20 hover:bg-white/40"
                      }`}
                      aria-label={`Testimonial ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Right: Magazine Spread Mockup with Pagination Arrow */}
              <div className="md:col-span-6 relative flex items-center justify-center group">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/15 bg-black/40">
                  <img
                    src="/images/framelab/magazine-spread-1.webp"
                    alt="Editorial Print Magazine Spread"
                    className="w-full h-auto object-cover framelab-img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Right Arrow next trigger */}
                <button
                  onClick={() =>
                    setActiveTestimonialIndex(
                      (prev) => (prev + 1) % testimonials.length
                    )
                  }
                  className="absolute -right-3 sm:-right-4 p-2.5 rounded-full bg-white text-black hover:bg-slate-200 shadow-xl transition-transform hover:scale-110 cursor-pointer"
                  aria-label="Next editorial critique"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* CONFIDENT INQUIRY PATH                                                  */}
      {/* ======================================================================= */}
      <section
        id="inquire"
        className="relative z-10 py-16 sm:py-24 bg-[#f6f5f2] text-slate-900 border-t border-slate-300"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-500 font-bold block mb-2">
            CONFIDENT INQUIRY PATH
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold framelab-serif uppercase tracking-wider mb-2 text-slate-900">
            COLLABORATE
          </h2>

          <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-slate-600 uppercase font-semibold mb-10">
            BRING YOUR VISION TO LIFE
          </p>

          {/* Inquiry Form */}
          {formSubmitted ? (
            <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-4 framelab-modal-anim">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="text-2xl font-bold framelab-serif text-slate-900">
                Inquiry Received
              </h3>
              <p className="text-xs font-mono text-slate-600 max-w-md mx-auto">
                Thank you, {formData.name || "partner"}. We have received your creative brief for {formData.projectType} and our studio executive will respond to {formData.email} within 24 hours.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    projectType: "Editorial Cover & Spread",
                    message: "",
                  });
                }}
                className="mt-4 px-6 py-2 rounded-full bg-slate-900 text-white font-mono text-xs font-bold uppercase hover:bg-black cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className="space-y-4 text-left max-w-xl mx-auto"
            >
              <div>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full rounded-lg bg-white border border-slate-300 px-4 py-3 text-xs placeholder-slate-400 text-slate-900 focus:outline-none focus:border-slate-700 shadow-sm"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full rounded-lg bg-white border border-slate-300 px-4 py-3 text-xs placeholder-slate-400 text-slate-900 focus:outline-none focus:border-slate-700 shadow-sm"
                />
              </div>

              <div>
                <input
                  type="text"
                  placeholder="Project Type (e.g. Editorial Cover, Lookbook, Campaign)"
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full rounded-lg bg-white border border-slate-300 px-4 py-3 text-xs placeholder-slate-400 text-slate-900 focus:outline-none focus:border-slate-700 shadow-sm"
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  required
                  placeholder="Message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-lg bg-white border border-slate-300 px-4 py-3 text-xs placeholder-slate-400 text-slate-900 focus:outline-none focus:border-slate-700 shadow-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-lg bg-[#0c0d0e] hover:bg-black text-white font-mono text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>PROCESSING...</span>
                  ) : (
                    <span>SEND INQUIRY</span>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ======================================================================= */}
      {/* FOOTER                                                                  */}
      {/* ======================================================================= */}
      <footer className="py-8 bg-[#0a0a0c] text-slate-400 text-xs font-mono border-t border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-slate-400">
            &copy; 2024 FrameLab Photo
          </div>

          <div className="flex items-center gap-5 text-slate-400">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>
          </div>

          <div className="text-slate-500">
            Copyright FrameLab Photo
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FrameLabPhoto;
