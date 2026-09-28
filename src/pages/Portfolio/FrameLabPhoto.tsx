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
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-5xl max-h-[92vh] overflow-y-auto framelab-scrollbar rounded-3xl border border-[var(--fl-border)] bg-[var(--fl-surface)] text-[var(--fl-text)] p-5 sm:p-8 shadow-2xl text-left framelab-modal-anim relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--fl-border)] mb-6">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--fl-text-muted)] font-bold bg-[var(--fl-card)] px-2.5 py-1 rounded-full border border-[var(--fl-border)]">
              {project.category} // {project.year}
            </span>
            <span className="text-xs font-mono text-[var(--fl-text-muted)]">
              Client: <strong className="text-[var(--fl-text)]">{project.publication}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              className="p-2 rounded-full bg-[var(--fl-card)] hover:bg-[var(--fl-card-hover)] text-[var(--fl-text-muted)] hover:text-[var(--fl-text)] transition-colors cursor-pointer border border-[var(--fl-border)]"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              className="p-2 rounded-full bg-[var(--fl-card)] hover:bg-[var(--fl-card-hover)] text-[var(--fl-text-muted)] hover:text-[var(--fl-text)] transition-colors cursor-pointer border border-[var(--fl-border)]"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-[var(--fl-card)] hover:bg-red-500/20 text-[var(--fl-text-muted)] hover:text-red-400 transition-colors cursor-pointer border border-[var(--fl-border)] ml-2"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Image Preview */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden bg-black/40 border border-[var(--fl-border)] shadow-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto max-h-[60vh] object-contain mx-auto"
            />
          </div>

          {/* Right Column: Editorial Notes & Metadata */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold framelab-serif leading-tight text-[var(--fl-text)] mb-2">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-[var(--fl-text-muted)] leading-relaxed font-light">
                {project.narrative}
              </p>
            </div>

            {/* Technical Camera Specifications */}
            <div className="p-4 rounded-xl bg-[var(--fl-card)] border border-[var(--fl-border)] space-y-2 text-xs font-mono">
              <div className="text-[10px] uppercase tracking-widest text-[var(--fl-text-muted)] font-bold border-b border-[var(--fl-border)] pb-1 flex items-center gap-1.5">
                <Camera className="w-3 h-3 text-[var(--fl-accent)]" />
                Technical Capture Suite
              </div>
              <div className="grid grid-cols-2 gap-2 text-[var(--fl-text)] pt-1">
                <div>
                  <span className="text-[var(--fl-text-muted)] block text-[9px] uppercase">Camera</span>
                  <span>{project.specs.camera}</span>
                </div>
                <div>
                  <span className="text-[var(--fl-text-muted)] block text-[9px] uppercase">Optics</span>
                  <span>{project.specs.lens}</span>
                </div>
                <div>
                  <span className="text-[var(--fl-text-muted)] block text-[9px] uppercase">Lighting</span>
                  <span>{project.specs.lighting}</span>
                </div>
                <div>
                  <span className="text-[var(--fl-text-muted)] block text-[9px] uppercase">Location</span>
                  <span>{project.specs.location}</span>
                </div>
              </div>
            </div>

            {/* Production Team Credits */}
            <div className="p-4 rounded-xl bg-[var(--fl-card)] border border-[var(--fl-border)] space-y-2 text-xs font-mono">
              <div className="text-[10px] uppercase tracking-widest text-[var(--fl-text-muted)] font-bold border-b border-[var(--fl-border)] pb-1 flex items-center gap-1.5">
                <Film className="w-3 h-3 text-[var(--fl-accent)]" />
                Production Credits
              </div>
              <div className="grid grid-cols-2 gap-2 text-[var(--fl-text)] pt-1">
                <div>
                  <span className="text-[var(--fl-text-muted)] block text-[9px] uppercase">Art Direction</span>
                  <span>{project.credits.artDirector}</span>
                </div>
                <div>
                  <span className="text-[var(--fl-text-muted)] block text-[9px] uppercase">Fashion Stylist</span>
                  <span>{project.credits.stylist}</span>
                </div>
                <div className="col-span-2">
                  <span className="text-[var(--fl-text-muted)] block text-[9px] uppercase">Talent</span>
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
              className="framelab-btn-primary w-full py-3 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-md text-center"
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
      image: "/images/framelab/work-vogue-naomi.jpg",
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
      image: "/images/framelab/work-harpers-urban.jpg",
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

  // The Process Steps with Bespoke Production Graphics
  const processSteps = [
    {
      stepNum: "01",
      title: "CONCEPT & VISUAL DIRECTION",
      image: "/images/framelab/process-step-1-research.svg",
      summary: "Archival moodboard curation, lighting schema drafting, and narrative treatment.",
      details:
        "Deep cultural and visual research tailored to seasonal editorial directives. We draft precise lighting schematics, moodboards, color swatches, and narrative arcs before touching a shutter.",
      deliverable: "Creative Direction Deck & Moodboard",
      turnaround: "3-5 Business Days",
    },
    {
      stepNum: "02",
      title: "TALENT CASTING & SET DESIGN",
      image: "/images/framelab/process-step-2-casting.svg",
      summary: "Tier-one agency casting, architectural scouting, wardrobe pulling, and call sheets.",
      details:
        "Securing editorial agency talent, architectural scouting across Paris, Milan, and New York, location permits, and close coordination with wardrobe and makeup stylists.",
      deliverable: "Call Sheets, Location Permits & Talent Book",
      turnaround: "4-7 Days",
    },
    {
      stepNum: "03",
      title: "MEDIUM-FORMAT PRODUCTION",
      image: "/images/framelab/process-step-3-production.svg",
      summary: "Live tethered 100MP Hasselblad capture with calibrated studio octaboxes and digital tech.",
      details:
        "Full-day medium-format studio or on-location capture. Live tethered Capture One Pro review stations allow clients and editors to approve framing and grading in real-time.",
      deliverable: "Raw Capture One Session (1,500+ Frames)",
      turnaround: "1-3 Shoot Days",
    },
    {
      stepNum: "04",
      title: "MASTER RETOUCH & DELIVERY",
      image: "/images/framelab/process-step-4-delivery.svg",
      summary: "Frequency separation, master color grading, CMYK pre-flight, and archival TIFFs.",
      details:
        "Non-destructive frequency separation, analog grain emulation, CMYK prepress calibration, and secure private cloud gallery delivery ready for publication.",
      deliverable: "Master Hi-Res TIFFs & Web-Ready Archives",
      turnaround: "5-7 Days",
    },
  ];

  // Credible Outcomes Testimonials Data with Custom Editorial Spread Graphics
  const testimonials = [
    {
      quote: "FrameLab Photo elevates every story they touch. Their medium-format mastery turns couture into timeless art.",
      editor: "Alicia W.",
      title: "Editor-in-Chief, Global Editorial",
      magazine: "VOGUE & ELLE COLLABORATION",
      spreadImage: "/images/framelab/spread-vogue-editorial.svg",
      spreadTitle: "THE SILK MONOLOGUE // VOGUE PARIS SPREAD",
      specs: "Hasselblad H6D-100c · Broncolor Para 222 · Silk Couture",
    },
    {
      quote: "Unrivaled cinematic mastery, precision architectural lighting, and authentic emotional resonance.",
      editor: "Marcus Vance",
      title: "Creative Director, Conde Nast",
      magazine: "GQ STYLE AWARDS 2024",
      spreadImage: "/images/framelab/spread-gq-menswear.svg",
      spreadTitle: "THE MODERN PROTAGONIST // GQ STYLE AWARDS",
      specs: "Zeiss 80mm f/2.8 · Ambient Raking Light · SoHo Greene St",
    },
    {
      quote: "Their medium-format imagery transforms standard fashion spreads into permanent cultural archives.",
      editor: "Helena Berg",
      title: "Executive Director of Photography",
      magazine: "MONOCLE QUARTERLY",
      spreadImage: "/images/framelab/spread-monocle-culture.svg",
      spreadTitle: "ARCHITECTURAL PROPORTIONS // MONOCLE REPORT",
      specs: "Phase One IQ4 150MP · Schneider 55mm · Milan Atelier",
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

  // Keyboard shortcut listener: Cmd/Ctrl+K to search, Esc to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      } else if (e.key === "Escape") {
        setSearchOpen(false);
        setActiveProjectIndex(null);
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
    <div className="framelab-container min-h-screen selection:bg-[var(--fl-accent)] selection:text-[var(--fl-bg)]">
      {/* ======================================================================= */}
      {/* EMBEDDED DESIGN TOKENS & RESPONSIVE THEME RULES                         */}
      {/* ======================================================================= */}
      <style>{`
        /* ================= FRAMELAB DESIGN TOKENS ================= */
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,900;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        .framelab-container {
          /* Default Base: Original Editorial Haute Couture Dark Palette */
          --fl-bg: var(--theme-bg-base, #08090a);
          --fl-surface: var(--theme-bg-surface, #111215);
          --fl-card: var(--theme-bg-card, #16171c);
          --fl-card-hover: var(--theme-bg-card-hover, #1e2027);
          --fl-accent: var(--theme-accent-primary, #e5dfd3);
          --fl-accent-secondary: var(--theme-accent-secondary, #c5b8a5);
          --fl-accent-glow: var(--theme-accent-glow, rgba(229, 223, 211, 0.22));
          --fl-accent-gradient: var(--theme-accent-gradient, linear-gradient(135deg, #f5f2eb 0%, #c5b8a5 100%));
          --fl-text: var(--theme-text-primary, #f7f6f4);
          --fl-text-muted: var(--theme-text-muted, #9da3af);
          --fl-border: var(--theme-border, rgba(255, 255, 255, 0.08));
          --fl-header-bg: color-mix(in srgb, var(--fl-bg) 85%, transparent);
          --fl-process-bg: color-mix(in srgb, var(--fl-surface) 90%, var(--fl-accent) 10%);
          --fl-inquire-bg: var(--fl-surface);
          --fl-input-bg: rgba(255, 255, 255, 0.04);

          background-color: var(--fl-bg);
          color: var(--fl-text);
          font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          overflow-x: hidden;
          position: relative;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        /* Light Mode Adaptive Tokens */
        html.light .framelab-container,
        body.light .framelab-container,
        [data-theme-mood="light"] .framelab-container,
        :root[data-theme-mood="light"] .framelab-container,
        :root[data-theme-active="true"][data-theme-mood="light"] .framelab-container,
        :root.light .framelab-container {
          --fl-bg: var(--theme-bg-base, #faf8f5);
          --fl-surface: var(--theme-bg-surface, #ffffff);
          --fl-card: var(--theme-bg-card, #ffffff);
          --fl-card-hover: var(--theme-bg-card-hover, #f3f0ea);
          --fl-accent: var(--theme-accent-primary, #181716);
          --fl-accent-secondary: var(--theme-accent-secondary, #5e5750);
          --fl-accent-glow: var(--theme-accent-glow, rgba(24, 23, 22, 0.15));
          --fl-accent-gradient: var(--theme-accent-gradient, linear-gradient(135deg, #181716 0%, #3e3a36 100%));
          --fl-text: var(--theme-text-primary, #181716);
          --fl-text-muted: var(--theme-text-muted, #68635c);
          --fl-border: var(--theme-border, rgba(0, 0, 0, 0.09));
          --fl-header-bg: color-mix(in srgb, var(--fl-bg) 88%, transparent);
          --fl-process-bg: #f4f0e8;
          --fl-inquire-bg: #ede8df;
          --fl-input-bg: #ffffff;
        }

        /* Dark Mode Explicit Tokens when theme active */
        html.dark .framelab-container,
        body.dark .framelab-container,
        [data-theme-mood="dark"] .framelab-container,
        :root[data-theme-mood="dark"] .framelab-container,
        :root[data-theme-active="true"][data-theme-mood="dark"] .framelab-container,
        :root.dark .framelab-container {
          --fl-bg: var(--theme-bg-base, #08090a);
          --fl-surface: var(--theme-bg-surface, #111215);
          --fl-card: var(--theme-bg-card, #16171c);
          --fl-card-hover: var(--theme-bg-card-hover, #1e2027);
          --fl-accent: var(--theme-accent-primary, #e5dfd3);
          --fl-accent-secondary: var(--theme-accent-secondary, #c5b8a5);
          --fl-accent-glow: var(--theme-accent-glow, rgba(229, 223, 211, 0.22));
          --fl-accent-gradient: var(--theme-accent-gradient, linear-gradient(135deg, #f5f2eb 0%, #c5b8a5 100%));
          --fl-text: var(--theme-text-primary, #f7f6f4);
          --fl-text-muted: var(--theme-text-muted, #9da3af);
          --fl-border: var(--theme-border, rgba(255, 255, 255, 0.08));
          --fl-header-bg: color-mix(in srgb, var(--fl-bg) 86%, transparent);
          --fl-process-bg: color-mix(in srgb, var(--fl-surface) 90%, var(--fl-accent) 10%);
          --fl-inquire-bg: var(--fl-surface);
          --fl-input-bg: rgba(255, 255, 255, 0.04);
        }

        /* Original Preset: High-Fashion Monochromatic & Cashmere Perfection */
        [data-theme-preset="original"][data-theme-mood="light"] .framelab-container,
        html.light[data-theme-preset="original"] .framelab-container,
        html.light:not([data-theme-preset]) .framelab-container,
        :root:not([data-theme-preset])[data-theme-mood="light"] .framelab-container {
          --fl-accent: #181716 !important;
          --fl-accent-secondary: #5e5750 !important;
          --fl-accent-glow: rgba(24, 23, 22, 0.15) !important;
          --fl-accent-gradient: linear-gradient(135deg, #181716 0%, #3e3a36 100%) !important;
        }

        [data-theme-preset="original"][data-theme-mood="dark"] .framelab-container,
        html.dark[data-theme-preset="original"] .framelab-container,
        html.dark:not([data-theme-preset]) .framelab-container,
        :root:not([data-theme-preset])[data-theme-mood="dark"] .framelab-container {
          --fl-accent: #e5dfd3 !important;
          --fl-accent-secondary: #c5b8a5 !important;
          --fl-accent-glow: rgba(229, 223, 211, 0.22) !important;
          --fl-accent-gradient: linear-gradient(135deg, #f5f2eb 0%, #c5b8a5 100%) !important;
        }

        /* Non-Original Theme Preset Override (Ensures preset primary color illuminates buttons, borders, tabs) */
        [data-theme-preset]:not([data-theme-preset="original"]) .framelab-container,
        [data-theme-active="true"]:not([data-theme-preset="original"]) .framelab-container {
          --fl-accent: var(--theme-accent-primary) !important;
          --fl-accent-secondary: var(--theme-accent-secondary) !important;
          --fl-accent-glow: var(--theme-accent-glow) !important;
          --fl-accent-gradient: var(--theme-accent-gradient) !important;
        }

        /* Editorial Typography */
        .framelab-serif {
          font-family: 'Playfair Display', Georgia, serif;
          letter-spacing: -0.01em;
        }

        .framelab-cinzel {
          font-family: 'Cinzel', serif;
          letter-spacing: 0.08em;
        }

        /* Sticky Navigation Bar */
        .framelab-navbar-sticky {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          background-color: var(--fl-header-bg);
          border-bottom: 1px solid var(--fl-border);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .framelab-navbar-scrolled {
          box-shadow: 0 10px 30px -5px rgba(0, 0, 0, 0.15);
        }

        /* Project Card Hover and Zoom */
        .framelab-project-card {
          position: relative;
          background-color: var(--fl-card);
          border: 1px solid var(--fl-border);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.3s ease;
        }

        .framelab-project-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.2);
          border-color: var(--fl-accent);
        }

        .framelab-img-zoom {
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .framelab-project-card:hover .framelab-img-zoom {
          transform: scale(1.05);
        }

        /* Buttons */
        .framelab-btn-primary {
          background: var(--fl-accent);
          color: var(--fl-bg) !important;
          font-weight: 700;
          letter-spacing: 0.1em;
          box-shadow: 0 4px 20px var(--fl-accent-glow);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        [data-theme-preset]:not([data-theme-preset="original"]) .framelab-btn-primary {
          background: var(--fl-accent-gradient);
          color: #ffffff !important;
        }
        html.light [data-theme-preset="original"] .framelab-btn-primary,
        html.light:not([data-theme-preset]) .framelab-btn-primary,
        [data-theme-mood="light"] [data-theme-preset="original"] .framelab-btn-primary {
          color: #ffffff !important;
          background: #181716 !important;
        }
        html.dark [data-theme-preset="original"] .framelab-btn-primary,
        html.dark:not([data-theme-preset]) .framelab-btn-primary,
        :not([data-theme-mood="light"]) [data-theme-preset="original"] .framelab-btn-primary {
          color: #08090a !important;
          background: #e5dfd3 !important;
        }
        .framelab-btn-primary:hover {
          transform: translateY(-2px);
          filter: brightness(1.08);
          box-shadow: 0 8px 25px var(--fl-accent-glow);
        }

        /* Modal Animations */
        .framelab-modal-anim {
          animation: framelabModalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        @keyframes framelabModalFadeIn {
          from {
            opacity: 0;
            transform: scale(0.96) translateY(12px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Custom Scrollbar for Lightbox */
        .framelab-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .framelab-scrollbar::-webkit-scrollbar-track {
          background: var(--fl-bg);
        }
        .framelab-scrollbar::-webkit-scrollbar-thumb {
          background: var(--fl-border);
          border-radius: 9999px;
        }
        .framelab-scrollbar::-webkit-scrollbar-thumb:hover {
          background: var(--fl-accent);
        }

        /* Light Mode Global Cascades */
        html.light .framelab-container .text-white,
        [data-theme-mood="light"] .framelab-container .text-white {
          color: var(--fl-text) !important;
        }

        html.light .framelab-container .text-slate-200,
        html.light .framelab-container .text-slate-300,
        html.light .framelab-container .text-slate-400,
        [data-theme-mood="light"] .framelab-container .text-slate-200,
        [data-theme-mood="light"] .framelab-container .text-slate-300,
        [data-theme-mood="light"] .framelab-container .text-slate-400 {
          color: var(--fl-text-muted) !important;
        }

        /* Publisher logos dark/light auto-filter */
        html.dark .framelab-publisher-logo,
        :root:not([data-theme-mood="light"]) .framelab-publisher-logo {
          filter: brightness(0) invert(1) opacity(0.85);
        }
        html.light .framelab-publisher-logo,
        [data-theme-mood="light"] .framelab-publisher-logo {
          filter: brightness(0) opacity(0.75);
        }
      `}</style>

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
          className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-24 px-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSearchOpen(false)}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-[var(--fl-card)] border border-[var(--fl-border)] p-6 shadow-2xl text-left framelab-modal-anim"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-[var(--fl-border)] mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-[var(--fl-text-muted)] font-bold">
                  Editorial Archive
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[var(--fl-surface)] border border-[var(--fl-border)] text-[var(--fl-text-muted)]">
                  ESC to close
                </span>
              </div>
              <button
                onClick={() => setSearchOpen(false)}
                className="text-[var(--fl-text-muted)] hover:text-[var(--fl-text)] cursor-pointer"
                aria-label="Close search"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="relative">
              <Search className="w-4 h-4 text-[var(--fl-text-muted)] absolute left-3 top-3.5" />
              <input
                type="text"
                autoFocus
                placeholder="Search by publication, title, or category (e.g. Vogue, Covers)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[var(--fl-input-bg)] border border-[var(--fl-border)] text-sm text-[var(--fl-text)] placeholder-[var(--fl-text-muted)] focus:outline-none focus:border-[var(--fl-accent)] shadow-sm"
              />
            </div>
            <div className="mt-4 max-h-72 overflow-y-auto framelab-scrollbar space-y-2">
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
                    className="p-3 rounded-xl bg-[var(--fl-surface)] hover:bg-[var(--fl-card-hover)] flex items-center justify-between cursor-pointer transition-colors border border-transparent hover:border-[var(--fl-border)]"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={p.image}
                        alt={p.title}
                        className="w-11 h-11 rounded-lg object-cover"
                      />
                      <div>
                        <div className="text-xs font-bold text-[var(--fl-text)]">{p.title}</div>
                        <div className="text-[10px] font-mono text-[var(--fl-text-muted)]">
                          {p.publication} // {p.year}
                        </div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono uppercase text-[var(--fl-accent)] font-semibold flex items-center gap-1">
                      View Tearsheet &rarr;
                    </span>
                  </div>
                ))}
              {projects.filter(
                (p) =>
                  p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  p.publication.toLowerCase().includes(searchQuery.toLowerCase()) ||
                  p.category.toLowerCase().includes(searchQuery.toLowerCase())
              ).length === 0 && (
                <div className="py-8 text-center text-xs font-mono text-[var(--fl-text-muted)]">
                  No editorial tearsheets match &quot;{searchQuery}&quot;
                </div>
              )}
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
              <span className="text-xs sm:text-sm font-black tracking-[0.2em] text-[var(--fl-text)] uppercase group-hover:opacity-80 transition-opacity">
                FRAME LAB
              </span>
              <span className="text-[9px] font-mono tracking-[0.35em] text-[var(--fl-text-muted)] uppercase mt-0.5 font-semibold">
                PHOTO
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-7 text-[11px] font-mono font-bold tracking-[0.2em] text-[var(--fl-text-muted)]"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors uppercase tracking-widest cursor-pointer relative py-1 ${
                    isActive
                      ? "text-[var(--fl-text)] font-extrabold"
                      : "text-[var(--fl-text-muted)] hover:text-[var(--fl-text)]"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--fl-accent)]" />
                  )}
                </button>
              );
            })}

            {/* Quick Search Icon with Ctrl+K shortcut indicator */}
            <button
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--fl-card)] border border-[var(--fl-border)] text-[var(--fl-text-muted)] hover:text-[var(--fl-text)] transition-colors cursor-pointer text-[10px]"
              aria-label="Search editorial catalog"
            >
              <Search className="w-3.5 h-3.5" />
              <span className="hidden lg:inline text-[9px] opacity-70">⌘K</span>
            </button>

            {/* Quick Inquire Button */}
            <button
              onClick={() => scrollToSection("inquire")}
              className="framelab-btn-primary px-4 py-1.5 rounded-full text-[10px] font-mono uppercase tracking-widest cursor-pointer ml-1"
            >
              INQUIRE
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 text-[var(--fl-text-muted)] hover:text-[var(--fl-text)] cursor-pointer"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-[var(--fl-border)] text-[var(--fl-text-muted)] hover:text-[var(--fl-text)] cursor-pointer"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-[var(--fl-border)] bg-[var(--fl-surface)] px-6 py-5 space-y-3 text-xs font-mono uppercase tracking-wider text-left framelab-modal-anim shadow-2xl">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all ${
                    isActive
                      ? "bg-[var(--fl-accent)] text-[var(--fl-bg)] font-bold"
                      : "text-[var(--fl-text)] hover:bg-[var(--fl-card-hover)]"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[var(--fl-bg)]" />}
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
      <section className="relative z-10 py-12 sm:py-20 lg:py-24 overflow-hidden border-b border-[var(--fl-border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Headline & Action */}
            <div className="lg:col-span-6 text-left space-y-5 z-20">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--fl-border)] bg-[var(--fl-card)] text-[10px] font-mono tracking-widest text-[var(--fl-accent)] uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--fl-accent)] animate-pulse" />
                PARIS // MILAN // NEW YORK ATELIER
              </div>

              <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-extrabold text-[var(--fl-text)] framelab-serif leading-[1.08] tracking-tight uppercase">
                CRAFTING NARRATIVES
                <br />
                THROUGH EDITORIAL
                <br />
                PHOTOGRAPHY
              </h1>

              <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[var(--fl-text-muted)] uppercase font-semibold">
                POSITIONING, VISION, EXECUTION
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => scrollToSection("work")}
                  className="framelab-btn-primary px-7 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-lg cursor-pointer"
                >
                  EXPLORE WORK
                </button>
                <button
                  onClick={() => scrollToSection("inquire")}
                  className="px-6 py-3 rounded-full font-mono text-xs font-bold uppercase tracking-wider border border-[var(--fl-border)] hover:border-[var(--fl-accent)] text-[var(--fl-text)] hover:bg-[var(--fl-card-hover)] transition-all cursor-pointer"
                >
                  START INQUIRY
                </button>
              </div>

              {/* Editorial Studio Credentials Strip */}
              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--fl-border)] text-left font-mono">
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[var(--fl-text)] font-sans">14+</div>
                  <div className="text-[10px] text-[var(--fl-text-muted)] uppercase tracking-wider">Vogue Covers</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[var(--fl-text)] font-sans">100MP</div>
                  <div className="text-[10px] text-[var(--fl-text-muted)] uppercase tracking-wider">Medium Format</div>
                </div>
                <div>
                  <div className="text-xl sm:text-2xl font-bold text-[var(--fl-text)] font-sans">24h</div>
                  <div className="text-[10px] text-[var(--fl-text-muted)] uppercase tracking-wider">Executive Turn</div>
                </div>
              </div>
            </div>

            {/* Right Studio Shoot Photo Composition */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border border-[var(--fl-border)] group">
                <img
                  src="/images/framelab/hero-studio-shoot.jpg"
                  alt="FrameLab Photo Studio Shoot Production"
                  className="w-full h-full object-cover framelab-img-zoom brightness-95 group-hover:brightness-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[10px] font-mono text-slate-300">
                  <span className="bg-black/60 backdrop-blur px-2.5 py-1 rounded-full border border-white/10">
                    STUDIO 01 // PARIS FASHION WEEK
                  </span>
                  <span className="bg-black/60 backdrop-blur px-2.5 py-1 rounded-full border border-white/10">
                    HASSELBLAD H6D-100c
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
        className="relative z-10 py-16 sm:py-24 bg-[var(--fl-bg)] border-b border-[var(--fl-border)]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-[var(--fl-text)] uppercase framelab-serif mb-12 sm:mb-16">
            POSITIONING
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            {/* Left Card: OUR PHILOSOPHY */}
            <div className="md:col-span-5 p-8 sm:p-10 rounded-3xl bg-[var(--fl-card)] border border-[var(--fl-border)] text-left flex flex-col justify-between shadow-xl">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[var(--fl-text-muted)] font-bold block mb-4">
                  01 // FOUNDATION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold framelab-serif uppercase tracking-wider text-[var(--fl-text)] mb-6">
                  OUR PHILOSOPHY
                </h3>

                <ul className="space-y-5 text-sm sm:text-base font-light text-[var(--fl-text)]">
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--fl-accent)] mt-2 shrink-0" />
                    <div>
                      <strong className="block font-semibold text-[var(--fl-text)]">
                        Intentional Storytelling
                      </strong>
                      <span className="text-xs text-[var(--fl-text-muted)] font-normal">
                        Every frame serves an overarching cultural and emotional narrative arc.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--fl-accent)] mt-2 shrink-0" />
                    <div>
                      <strong className="block font-semibold text-[var(--fl-text)]">
                        Cultural Relevance
                      </strong>
                      <span className="text-xs text-[var(--fl-text-muted)] font-normal">
                        Aligning contemporary aesthetic zeitgeist with timeless cinematic craft.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--fl-accent)] mt-2 shrink-0" />
                    <div>
                      <strong className="block font-semibold text-[var(--fl-text)]">
                        Technical Excellence
                      </strong>
                      <span className="text-xs text-[var(--fl-text-muted)] font-normal">
                        Mastery of lighting ratios, color science, and medium format resolution.
                      </span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--fl-border)] flex items-center justify-between text-[11px] font-mono text-[var(--fl-text-muted)]">
                <span>ESTABLISHED 2018</span>
                <span className="text-[var(--fl-text)] font-semibold">HAUTE COUTURE SPEC</span>
              </div>
            </div>

            {/* Right Card: VISUAL IDENTITY with Photo Backdrop */}
            <div className="md:col-span-7 relative rounded-3xl overflow-hidden border border-[var(--fl-border)] p-8 sm:p-10 text-left flex flex-col justify-between shadow-xl min-h-[340px] group">
              {/* Background Image with overlay */}
              <img
                src="/images/framelab/positioning-visual-identity.jpg"
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
                <span className="text-white font-semibold">COUTURE PROTOCOLS &rarr;</span>
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
        className="relative z-10 py-16 sm:py-24 bg-[var(--fl-surface)] border-b border-[var(--fl-border)]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-[var(--fl-text)] uppercase framelab-serif mb-6">
            SELECTED WORK
          </h2>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
            {[
              { id: "all", label: "ALL WORKS", count: projects.length },
              {
                id: "covers",
                label: "MAGAZINE COVERS",
                count: projects.filter((p) => p.category === "covers").length,
              },
              {
                id: "editorial",
                label: "EDITORIAL",
                count: projects.filter((p) => p.category === "editorial").length,
              },
              {
                id: "motion",
                label: "MOTION & STAGE",
                count: projects.filter((p) => p.category === "motion").length,
              },
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all cursor-pointer border flex items-center gap-1.5 ${
                  selectedCategory === cat.id
                    ? "bg-[var(--fl-accent)] text-[var(--fl-bg)] font-bold border-[var(--fl-accent)] shadow-md"
                    : "bg-[var(--fl-card)] text-[var(--fl-text-muted)] border-[var(--fl-border)] hover:border-[var(--fl-accent)] hover:text-[var(--fl-text)]"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[9px] px-1.5 py-0.5 rounded-full font-bold ${
                    selectedCategory === cat.id
                      ? "bg-black/20 text-current"
                      : "bg-[var(--fl-surface)] text-[var(--fl-text-muted)] border border-[var(--fl-border)]"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* Projects 3-Column Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                onClick={() =>
                  setActiveProjectIndex(
                    projects.findIndex((p) => p.id === project.id)
                  )
                }
                className="group framelab-project-card rounded-2xl overflow-hidden bg-[var(--fl-card)] border border-[var(--fl-border)] text-left cursor-pointer flex flex-col justify-between transition-all"
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
                <div className="p-4 sm:p-5 border-t border-[var(--fl-border)] space-y-2 bg-[var(--fl-card)]">
                  <div className="flex items-center justify-between text-[10px] font-mono text-[var(--fl-text-muted)]">
                    <span className="uppercase tracking-widest">{project.publication}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="text-sm sm:text-base font-bold text-[var(--fl-text)] framelab-serif tracking-wide uppercase group-hover:text-[var(--fl-accent)] transition-colors">
                    {project.title}
                  </h3>

                  <div className="pt-2 flex items-center justify-between border-t border-[var(--fl-border)] text-[10px] font-mono">
                    <span className="text-[var(--fl-text-muted)]">Editorial projects</span>
                    <span className="text-[var(--fl-text)] group-hover:text-[var(--fl-accent)] flex items-center gap-1 font-bold">
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
        className="relative z-10 py-16 sm:py-24 bg-[var(--fl-process-bg)] text-[var(--fl-text)] border-y border-[var(--fl-border)]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--fl-border)] bg-[var(--fl-card)] text-[10px] font-mono tracking-widest text-[var(--fl-accent)] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--fl-accent)] animate-pulse" />
            END-TO-END EDITORIAL PROTOCOL
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.25em] text-[var(--fl-text)] uppercase framelab-serif mb-4">
            THE PROCESS
          </h2>
          <p className="text-xs sm:text-sm font-mono tracking-wider text-[var(--fl-text-muted)] uppercase max-w-xl mx-auto mb-12 sm:mb-16">
            From initial narrative moodboards to master CMYK archival delivery.
          </p>

          {/* 4 Connected Step Cards with Rich Production Graphics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, idx) => {
              const isSelected = activeProcessStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`p-4 sm:p-5 rounded-2xl transition-all duration-300 cursor-pointer text-left flex flex-col justify-between border ${
                    isSelected
                      ? "bg-[var(--fl-card)] border-[var(--fl-accent)] shadow-2xl scale-[1.02] ring-1 ring-[var(--fl-accent)]/30"
                      : "bg-[var(--fl-card)]/80 border-[var(--fl-border)] hover:border-[var(--fl-accent)]/50 hover:bg-[var(--fl-card)]"
                  }`}
                >
                  <div>
                    {/* Graphic Preview Container */}
                    <div className="relative aspect-[16/11] rounded-xl overflow-hidden mb-4 border border-[var(--fl-border)] bg-black/40 group">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-cover framelab-img-zoom"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                      
                      {/* Step Number Badge */}
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-full bg-black/70 backdrop-blur border border-white/10 text-[9px] font-mono text-[var(--fl-accent)] font-bold">
                        STEP {step.stepNum}
                      </div>

                      {/* Active Indicator Pulse */}
                      {isSelected && (
                        <div className="absolute top-2.5 right-2.5 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[var(--fl-accent)] text-[var(--fl-bg)] text-[9px] font-mono font-bold">
                          ACTIVE
                        </div>
                      )}
                    </div>

                    <h3 className="text-xs sm:text-sm font-bold tracking-wider uppercase framelab-serif mb-1.5 text-[var(--fl-text)]">
                      {step.title}
                    </h3>

                    <p className="text-[11px] font-normal leading-relaxed text-[var(--fl-text-muted)]">
                      {step.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-[var(--fl-border)] flex items-center justify-between text-[10px] font-mono text-[var(--fl-text-muted)]">
                    <span>{step.turnaround}</span>
                    <span className="text-[var(--fl-text)] font-semibold flex items-center gap-1">
                      Details &rarr;
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Phase Deep-Dive Showcase Box */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-[var(--fl-card)] border border-[var(--fl-border)] max-w-4xl mx-auto text-left shadow-2xl framelab-modal-anim">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center">
              {/* Left: Graphic Highlight */}
              <div className="md:col-span-5 rounded-2xl overflow-hidden border border-[var(--fl-border)] bg-black/50 aspect-[4/3] relative shadow-lg">
                <img
                  src={processSteps[activeProcessStep].image}
                  alt={processSteps[activeProcessStep].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-200">
                  <span className="bg-black/70 backdrop-blur px-2.5 py-1 rounded-full border border-white/10">
                    STAGE // 0{activeProcessStep + 1}
                  </span>
                  <span className="bg-black/70 backdrop-blur px-2.5 py-1 rounded-full border border-white/10">
                    {processSteps[activeProcessStep].turnaround}
                  </span>
                </div>
              </div>

              {/* Right: Phase Details & Deliverables */}
              <div className="md:col-span-7 space-y-4">
                <div className="flex items-center justify-between border-b border-[var(--fl-border)] pb-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-[var(--fl-accent)] font-bold">
                    PHASE 0{activeProcessStep + 1} // PROTOCOL SPEC
                  </span>
                  <span className="text-xs font-mono text-[var(--fl-text-muted)]">
                    Target Turnaround: <strong className="text-[var(--fl-text)]">{processSteps[activeProcessStep].turnaround}</strong>
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold framelab-serif uppercase tracking-wide text-[var(--fl-text)]">
                  {processSteps[activeProcessStep].title}
                </h3>

                <p className="text-xs sm:text-sm text-[var(--fl-text)] leading-relaxed font-light">
                  {processSteps[activeProcessStep].details}
                </p>

                <div className="p-3.5 rounded-xl bg-[var(--fl-surface)] border border-[var(--fl-border)] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                  <span className="text-[var(--fl-text-muted)] uppercase text-[10px] tracking-wider">
                    Milestone Deliverable:
                  </span>
                  <span className="text-[var(--fl-accent)] font-bold">
                    {processSteps[activeProcessStep].deliverable}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* CREDIBLE OUTCOMES SECTION                                               */}
      {/* ======================================================================= */}
      <section
        id="credentials"
        className="relative z-10 py-16 sm:py-24 bg-[var(--fl-bg)] border-b border-[var(--fl-border)]"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--fl-border)] bg-[var(--fl-card)] text-[10px] font-mono tracking-widest text-[var(--fl-accent)] uppercase mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[var(--fl-accent)] animate-pulse" />
            GLOBAL EDITORIAL REPUTATION
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.25em] text-[var(--fl-text)] uppercase framelab-serif mb-4">
            CREDIBLE OUTCOMES
          </h2>
          <p className="text-xs sm:text-sm font-mono tracking-wider text-[var(--fl-text-muted)] uppercase max-w-xl mx-auto mb-12 sm:mb-16">
            Featured tear sheets, magazine cover critique, and client accolades.
          </p>

          {/* Interactive Publisher Logos Row */}
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 mb-14 px-4">
            {[
              { src: "/images/framelab/logo-vogue.webp", alt: "Vogue", index: 0 },
              { src: "/images/framelab/logo-gq.webp", alt: "GQ", index: 1 },
              { src: "/images/framelab/logo-monocle.webp", alt: "Monocle", index: 2 },
              { src: "/images/framelab/logo-elle.webp", alt: "ELLE", index: 0 },
              { src: "/images/framelab/logo-w.webp", alt: "W Magazine", index: 1 },
            ].map((pub, idx) => (
              <img
                key={idx}
                src={pub.src}
                alt={pub.alt}
                onClick={() => setActiveTestimonialIndex(pub.index)}
                className={`h-6 sm:h-7 w-auto object-contain framelab-publisher-logo cursor-pointer transition-all ${
                  activeTestimonialIndex === pub.index
                    ? "scale-110 drop-shadow-md"
                    : "opacity-60 hover:opacity-100"
                }`}
              />
            ))}
          </div>

          {/* Top Testimonial Quote Callout */}
          <div className="max-w-3xl mx-auto mb-12 text-center space-y-3">
            <p className="text-xl sm:text-2xl md:text-3xl font-bold framelab-serif italic text-[var(--fl-text)] leading-snug">
              &quot;{testimonials[activeTestimonialIndex].quote}&quot;
            </p>
            <p className="text-xs font-mono uppercase tracking-widest text-[var(--fl-text-muted)]">
              — {testimonials[activeTestimonialIndex].editor}, {testimonials[activeTestimonialIndex].title}
            </p>
          </div>

          {/* Magazine Spread Interactive Showcase Box */}
          <div className="max-w-4xl mx-auto rounded-3xl bg-[var(--fl-card)] border border-[var(--fl-border)] p-6 sm:p-10 shadow-2xl text-left framelab-modal-anim">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              {/* Left: Magazine Editor Critique & Metadata */}
              <div className="md:col-span-5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--fl-text-muted)] font-bold">
                    TEARSHEET ANALYSIS
                  </span>
                  <span className="text-[10px] font-mono text-[var(--fl-accent)] font-bold px-2 py-0.5 rounded-full bg-[var(--fl-surface)] border border-[var(--fl-border)]">
                    0{activeTestimonialIndex + 1} / 0{testimonials.length}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold framelab-serif leading-snug text-[var(--fl-text)]">
                  &quot;{testimonials[activeTestimonialIndex].quote}&quot;
                </h3>

                <div className="pt-2 border-t border-[var(--fl-border)] space-y-1">
                  <div className="text-xs font-mono font-bold text-[var(--fl-text)] uppercase">
                    — {testimonials[activeTestimonialIndex].editor}
                  </div>
                  <div className="text-[11px] font-mono text-[var(--fl-text-muted)]">
                    {testimonials[activeTestimonialIndex].title}
                  </div>
                  <div className="text-[10px] font-mono text-[var(--fl-accent)] uppercase font-semibold">
                    {testimonials[activeTestimonialIndex].magazine}
                  </div>
                </div>

                {/* Technical Capture Specs for this spread */}
                <div className="p-3 rounded-xl bg-[var(--fl-surface)] border border-[var(--fl-border)] space-y-1">
                  <div className="text-[9px] font-mono text-[var(--fl-text-muted)] uppercase tracking-wider">
                    Spread Technical Parameters:
                  </div>
                  <div className="text-[11px] font-mono text-[var(--fl-text)] font-medium">
                    {testimonials[activeTestimonialIndex].specs}
                  </div>
                </div>

                {/* Switcher Navigation Dots & Controls */}
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    {testimonials.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveTestimonialIndex(idx)}
                        className={`h-2 rounded-full transition-all cursor-pointer ${
                          activeTestimonialIndex === idx
                            ? "w-8 bg-[var(--fl-accent)]"
                            : "w-2 bg-[var(--fl-border)] hover:bg-[var(--fl-text-muted)]"
                        }`}
                        aria-label={`Testimonial ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        setActiveTestimonialIndex(
                          (prev) => (prev - 1 + testimonials.length) % testimonials.length
                        )
                      }
                      className="p-2 rounded-full border border-[var(--fl-border)] bg-[var(--fl-surface)] hover:bg-[var(--fl-card-hover)] text-[var(--fl-text-muted)] hover:text-[var(--fl-text)] cursor-pointer transition-colors"
                      aria-label="Previous tearsheet"
                    >
                      <ChevronLeft className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() =>
                        setActiveTestimonialIndex(
                          (prev) => (prev + 1) % testimonials.length
                        )
                      }
                      className="p-2 rounded-full border border-[var(--fl-border)] bg-[var(--fl-surface)] hover:bg-[var(--fl-card-hover)] text-[var(--fl-text-muted)] hover:text-[var(--fl-text)] cursor-pointer transition-colors"
                      aria-label="Next tearsheet"
                    >
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Right: Double-Page Magazine Spread Graphic Showcase */}
              <div className="md:col-span-7 relative flex items-center justify-center group">
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-[var(--fl-border)] bg-black/40">
                  <img
                    src={testimonials[activeTestimonialIndex].spreadImage}
                    alt={testimonials[activeTestimonialIndex].spreadTitle}
                    className="w-full h-auto object-cover framelab-img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Spread Title Bar */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-slate-200">
                    <span className="bg-black/70 backdrop-blur px-2.5 py-1 rounded-full border border-white/10 font-bold">
                      {testimonials[activeTestimonialIndex].spreadTitle}
                    </span>
                    <span className="bg-black/70 backdrop-blur px-2.5 py-1 rounded-full border border-white/10 hidden sm:inline">
                      PRINT TEARSHEET
                    </span>
                  </div>
                </div>

                {/* Right Arrow next trigger */}
                <button
                  onClick={() =>
                    setActiveTestimonialIndex(
                      (prev) => (prev + 1) % testimonials.length
                    )
                  }
                  className="absolute -right-3 sm:-right-4 p-2.5 rounded-full bg-[var(--fl-accent)] text-[var(--fl-bg)] hover:opacity-90 shadow-xl transition-transform hover:scale-110 cursor-pointer z-10"
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
        className="relative z-10 py-16 sm:py-24 bg-[var(--fl-inquire-bg)] text-[var(--fl-text)] border-t border-[var(--fl-border)]"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--fl-text-muted)] font-bold block mb-2">
            CONFIDENT INQUIRY PATH
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold framelab-serif uppercase tracking-wider mb-2 text-[var(--fl-text)]">
            COLLABORATE
          </h2>

          <p className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[var(--fl-text-muted)] uppercase font-semibold mb-10">
            BRING YOUR VISION TO LIFE
          </p>

          {/* Inquiry Form */}
          {formSubmitted ? (
            <div className="p-8 sm:p-12 rounded-3xl bg-[var(--fl-card)] border border-[var(--fl-border)] shadow-xl space-y-4 framelab-modal-anim">
              <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
              <h3 className="text-2xl font-bold framelab-serif text-[var(--fl-text)]">
                Inquiry Received
              </h3>
              <p className="text-xs font-mono text-[var(--fl-text-muted)] max-w-md mx-auto">
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
                className="mt-4 px-6 py-2 rounded-full framelab-btn-primary font-mono text-xs font-bold uppercase cursor-pointer"
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
                  className="w-full rounded-xl bg-[var(--fl-input-bg)] border border-[var(--fl-border)] px-4 py-3 text-xs placeholder-[var(--fl-text-muted)] text-[var(--fl-text)] focus:outline-none focus:border-[var(--fl-accent)] shadow-sm"
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
                  className="w-full rounded-xl bg-[var(--fl-input-bg)] border border-[var(--fl-border)] px-4 py-3 text-xs placeholder-[var(--fl-text-muted)] text-[var(--fl-text)] focus:outline-none focus:border-[var(--fl-accent)] shadow-sm"
                />
              </div>

              {/* Quick Project Type selector chips */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono uppercase tracking-wider text-[var(--fl-text-muted)] block">
                  Select Project Scope
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    "Editorial Cover & Spread",
                    "Lookbook & Campaign",
                    "Haute Couture Runway",
                    "Art Direction & Licensing",
                  ].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setFormData({ ...formData, projectType: type })}
                      className={`px-3 py-1 rounded-lg text-[10px] font-mono uppercase tracking-wider transition-all cursor-pointer border ${
                        formData.projectType === type
                          ? "bg-[var(--fl-accent)] text-[var(--fl-bg)] font-bold border-[var(--fl-accent)] shadow-sm"
                          : "bg-[var(--fl-card)] text-[var(--fl-text-muted)] border-[var(--fl-border)] hover:border-[var(--fl-accent)] hover:text-[var(--fl-text)]"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                <input
                  type="text"
                  placeholder="Or enter custom scope..."
                  value={formData.projectType}
                  onChange={(e) =>
                    setFormData({ ...formData, projectType: e.target.value })
                  }
                  className="w-full mt-2 rounded-xl bg-[var(--fl-input-bg)] border border-[var(--fl-border)] px-4 py-2.5 text-xs placeholder-[var(--fl-text-muted)] text-[var(--fl-text)] focus:outline-none focus:border-[var(--fl-accent)] shadow-sm"
                />
              </div>

              <div>
                <textarea
                  rows={4}
                  required
                  placeholder="Creative Brief, Target Timeline, Location (Paris/NYC/Milan/On-Location)..."
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full rounded-xl bg-[var(--fl-input-bg)] border border-[var(--fl-border)] px-4 py-3 text-xs placeholder-[var(--fl-text-muted)] text-[var(--fl-text)] focus:outline-none focus:border-[var(--fl-accent)] shadow-sm resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl framelab-btn-primary font-mono text-xs font-bold uppercase tracking-widest transition-all duration-200 shadow-md hover:shadow-xl cursor-pointer flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>PROCESSING BRIEF...</span>
                  ) : (
                    <span>TRANSMIT EDITORIAL BRIEF &rarr;</span>
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
      <footer className="py-8 bg-[var(--fl-surface)] text-[var(--fl-text-muted)] text-xs font-mono border-t border-[var(--fl-border)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[var(--fl-text-muted)]">
            &copy; 2024 FrameLab Photo Atelier. Paris // Milan // New York.
          </div>

          <div className="flex items-center gap-5 text-[var(--fl-text-muted)]">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--fl-text)] transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[var(--fl-text)] transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedInIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="ml-3 px-3 py-1 rounded-full border border-[var(--fl-border)] hover:border-[var(--fl-accent)] text-[10px] uppercase tracking-widest text-[var(--fl-text-muted)] hover:text-[var(--fl-text)] transition-all cursor-pointer"
            >
              Top &uarr;
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default FrameLabPhoto;
