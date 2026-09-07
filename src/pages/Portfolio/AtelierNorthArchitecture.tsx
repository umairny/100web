import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  X,
  Menu,
  CheckCircle2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Compass,
  Layers,
  Sun,
  ShieldCheck,
  Send,
  Building,
  Home,
  Check,
  MapPin,
  Calendar,
} from "lucide-react";
import "./AtelierNorthArchitecture.css";

// -----------------------------------------------------------------------------
// Inline SVG Social Icons
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
// Interactive Architectural Project Lightbox Modal
// -----------------------------------------------------------------------------
interface ArchitectureProject {
  id: string;
  title: string;
  category: "Residential" | "Commercial";
  location: string;
  year: string;
  area: string;
  image: string;
  materials: string[];
  description: string;
  features: string[];
}

interface ProjectModalProps {
  project: ArchitectureProject | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function ProjectLightboxModal({ project, onClose, onPrev, onNext }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="w-full max-w-4xl max-h-[92vh] overflow-y-auto atelier-scrollbar rounded-3xl border border-slate-200 bg-white text-slate-900 p-6 sm:p-8 shadow-2xl text-left atelier-modal-anim relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header Controls */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-mono uppercase tracking-widest text-[#415a4b] font-bold bg-[#415a4b]/10 px-3 py-1 rounded-full">
              {project.category} // {project.year}
            </span>
            <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {project.location}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onPrev}
              className="p-2 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={onNext}
              className="p-2 rounded-full border border-slate-200 hover:bg-slate-100 text-slate-600 transition-colors cursor-pointer"
              aria-label="Next project"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-full border border-slate-200 hover:bg-red-50 text-slate-600 hover:text-red-500 transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Photography Display */}
        <div className="rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 mb-6 shadow-md">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-auto max-h-[50vh] object-cover mx-auto"
          />
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold atelier-grotesk tracking-tight text-slate-900">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
              {project.description}
            </p>

            <div className="pt-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold block mb-2">
                Key Architectural Innovations
              </span>
              <div className="flex flex-wrap gap-2">
                {project.features.map((feat, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono bg-slate-100 text-slate-700 px-3 py-1 rounded-lg border border-slate-200 flex items-center gap-1.5"
                  >
                    <Check className="w-3 h-3 text-[#415a4b]" />
                    {feat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="md:col-span-5 p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3 text-xs font-mono">
            <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold block border-b border-slate-200 pb-1">
              Building Specifications
            </span>
            <div className="space-y-2 text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-400">Typology:</span>
                <span className="font-bold">{project.category}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Gross Floor Area:</span>
                <span className="font-bold">{project.area}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Year Completed:</span>
                <span className="font-bold">{project.year}</span>
              </div>
              <div className="pt-2 border-t border-slate-200">
                <span className="text-slate-400 block mb-1">Sustainable Materiality:</span>
                <span className="font-semibold text-slate-900 block leading-normal">
                  {project.materials.join(", ")}
                </span>
              </div>
            </div>

            <button
              onClick={() => {
                onClose();
                const el = document.getElementById("inquire");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="w-full mt-3 py-2.5 rounded-xl bg-slate-900 text-white hover:bg-black font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer text-center"
            >
              Inquire About Similar Site
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// -----------------------------------------------------------------------------
// Main AtelierNorthArchitecture Component
// -----------------------------------------------------------------------------
export function AtelierNorthArchitecture() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("work");
  const [isScrolled, setIsScrolled] = useState(false);

  // Selected Project Lightbox Modal
  const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(null);

  // Active Process Step
  const [activeProcessStep, setActiveProcessStep] = useState<number>(0);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "Residential",
    description: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Nav Items matching the original image
  const navItems = [
    { id: "work", label: "WORK" },
    { id: "process", label: "PROCESS" },
    { id: "practice", label: "PRACTICE" },
    { id: "inquire", label: "INQUIRE" },
  ];

  // Architectural Projects Data
  const projects: ArchitectureProject[] = [
    {
      id: "fjord-cabin-large",
      title: "THE FJORD CABIN",
      category: "Residential",
      location: "Hardangerfjord, Norway",
      year: "2024",
      area: "145 m² / 1,560 sq ft",
      image: "/images/atelier/project-fjord-cabin-large.webp",
      materials: ["Kebony Charred Pine", "Triple-Glazed Low-E Glass", "Granite Pier Foundation"],
      description:
        "A sculptural timber sanctuary nestled right on the water's edge, designed with cantilevering sun terraces and floor-to-ceiling panoramic glass to capture changing Nordic daylight.",
      features: ["Passive Solar Orientation", "Hydronic Geothermal Loop", "Integrated Timber Sauna"],
    },
    {
      id: "urban-refuge",
      title: "URBAN REFUGE",
      category: "Commercial",
      location: "Stockholm, Sweden",
      year: "2023",
      area: "420 m² / 4,520 sq ft",
      image: "/images/atelier/project-urban-refuge.webp",
      materials: ["Dark Stained Glulam", "Local Swedish Limestone", "Corten Steel Panels"],
      description:
        "A contemporary commercial wellness studio and courtyard retreat creating an oasis of silence within central Stockholm's bustling urban fabric.",
      features: ["Biophilic Central Courtyard", "Acoustic Slotted Oak Walls", "Rainwater Harvesting"],
    },
    {
      id: "mountain-aframe",
      title: "MOUNTAIN RETREAT",
      category: "Commercial",
      location: "Hemsedal, Norway",
      year: "2024",
      area: "210 m² / 2,260 sq ft",
      image: "/images/atelier/project-mountain-aframe.webp",
      materials: ["Solid Spruce Beams", "Slate Shingle Roofing", "Triple Low-Iron Glazing"],
      description:
        "A modern interpretation of the classical alpine A-frame, elevated on concrete stilts to preserve delicate alpine tundra flora beneath the building envelope.",
      features: ["Zero Site Excavation", "Off-Grid Solar Battery Array", "Snow Load Optimization"],
    },
    {
      id: "fjord-chalet",
      title: "THE FJORD CABIN",
      category: "Residential",
      location: "Lofoten Islands, Norway",
      year: "2023",
      area: "175 m² / 1,880 sq ft",
      image: "/images/atelier/project-fjord-chalet.webp",
      materials: ["Nordic Larch Siding", "Cast-in-Place Concrete", "Zinc Flashing"],
      description:
        "A weather-hardened residential family retreat designed to withstand Arctic coastal gales while maintaining exceptional thermal comfort and panoramic fjord views.",
      features: ["Aerodynamic Wind Deflection", "Triple Vapor Barrier", "Wood-Burning Hearth"],
    },
    {
      id: "mountain-glass",
      title: "MOUNTAIN RETREAT",
      category: "Commercial",
      location: "Geilo, Norway",
      year: "2024",
      area: "280 m² / 3,010 sq ft",
      image: "/images/atelier/project-mountain-glass.webp",
      materials: ["Structural Glass Mullions", "Pre-Weathered Zinc", "Bleached Ash Flooring"],
      description:
        "An open-plan hospitality lodge framing dramatic peaks through a soaring double-height glazed gable facade.",
      features: ["Thermal Mass Floor Slabs", "Smart Solar Shading", "LEED Platinum Standard"],
    },
    {
      id: "mountain-black",
      title: "MOUNTAIN RETREAT",
      category: "Commercial",
      location: "Trysil, Norway",
      year: "2023",
      area: "310 m² / 3,330 sq ft",
      image: "/images/atelier/project-mountain-black.webp",
      materials: ["Shou Sugi Ban Charred Wood", "Exposed Concrete", "Blackened Steel"],
      description:
        "A contemporary ski chalet nestled in a rocky clearing, mirroring the angular geometry of the surrounding crags.",
      features: ["Ski-In/Ski-Out Vestibule", "Geothermal Radiant Heat", "Custom Built-in Millwork"],
    },
    {
      id: "mountain-terrace",
      title: "MOUNTAIN RETREAT",
      category: "Residential",
      location: "Aurland, Norway",
      year: "2024",
      area: "190 m² / 2,040 sq ft",
      image: "/images/atelier/project-mountain-terrace.webp",
      materials: ["Oiled Oak Decking", "Cedar Soffits", "Frameless Glass Balustrades"],
      description:
        "An expansive covered outdoor living terrace linking interior warmth seamlessly to misty waters and mountain silhouettes.",
      features: ["Integrated Radiant Heaters", "Windbreak Glass Screens", "Built-In Fire Pit"],
    },
  ];

  // The Process Steps
  const processSteps = [
    {
      title: "DISCOVER",
      subtitle: "Site Analysis & Brief",
      image: "/images/atelier/step-discover.webp",
      description:
        "Comprehensive topographical mapping, sun path tracking, environmental wind modeling, and close dialogue to define the client's spatial vision.",
      deliverables: "Topographical Study, Solar Exposure Matrix & Spatial Brief",
    },
    {
      title: "DEFINE",
      subtitle: "Concept & Design Intent",
      image: "/images/atelier/step-define.webp",
      description:
        "Translating site parameters into architectural form studies, physical timber massing models, and fundamental sustainable building orientations.",
      deliverables: "Architectural Concept Deck & Schematic Massing Models",
    },
    {
      title: "DESIGN",
      subtitle: "Development & Visualization",
      image: "/images/atelier/step-design.webp",
      description:
        "Detailed floor plan layouts, photorealistic daylight renderings, material specification palettes, and municipal planning permit submissions.",
      deliverables: "Full Permit Blueprint Deck & Photorealistic 3D Visuals",
    },
    {
      title: "EXECUTE",
      subtitle: "Technical & Construction Admin",
      image: "/images/atelier/step-execute.webp",
      description:
        "Rigorous construction documentation, BIM coordination, timber prefabrication oversight, and on-site architectural quality control.",
      deliverables: "Tender Documentation, Shop Drawings & Site Oversight Log",
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

      const sections = ["inquire", "practice", "process", "work"];
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
    <div className="atelier-container min-h-screen selection:bg-[#415a4b] selection:text-white">
      {/* Lightbox Case Study Modal */}
      <ProjectLightboxModal
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

      {/* ======================================================================= */}
      {/* HEADER / NAVIGATION BAR                                                 */}
      {/* ======================================================================= */}
      <header
        className={`atelier-navbar-sticky ${
          isScrolled ? "atelier-navbar-scrolled py-2.5" : "py-4"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo: ATELIER NORTH / ARCHITECTURE */}
          <Link
            to="/portfolio/atelier-north-architecture"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex flex-col text-left cursor-pointer select-none group"
          >
            <span className="text-xs sm:text-sm font-extrabold tracking-[0.18em] text-slate-900 uppercase">
              ATELIER NORTH
            </span>
            <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.25em] text-slate-500 uppercase -mt-0.5 font-semibold">
              ARCHITECTURE
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center gap-8 text-[11px] font-mono font-bold tracking-widest text-slate-600"
          >
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors uppercase tracking-widest cursor-pointer py-1 relative ${
                    isActive
                      ? "text-slate-950 font-black"
                      : "text-slate-600 hover:text-black"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-slate-900" />
                  )}
                </button>
              );
            })}

            {/* "LET'S TALK" Pill Button */}
            <button
              onClick={() => scrollToSection("inquire")}
              className="px-5 py-2 rounded-full border border-slate-300 bg-white hover:bg-slate-900 hover:text-white text-slate-900 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer shadow-sm"
            >
              LET'S TALK
            </button>
          </nav>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg border border-slate-300 text-slate-700"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-6 py-5 space-y-3 text-xs font-mono uppercase tracking-wider text-left atelier-modal-anim shadow-xl">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all ${
                    isActive
                      ? "bg-slate-900 text-white font-bold"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#415a4b]" />}
                </button>
              );
            })}
            <div className="pt-2 border-t border-slate-200">
              <button
                onClick={() => scrollToSection("inquire")}
                className="w-full py-2.5 rounded-full bg-slate-900 text-white font-bold font-mono text-xs text-center uppercase"
              >
                LET'S TALK
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Spacer for sticky header */}
      <div className="h-16 sm:h-20" />

      {/* ======================================================================= */}
      {/* HERO SECTION                                                            */}
      {/* ======================================================================= */}
      <section className="relative z-10 overflow-hidden bg-slate-950 text-white min-h-[70vh] sm:min-h-[80vh] flex items-center">
        {/* Full-Bleed Panoramic Architectural Photograph */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/atelier/hero-fjord-cabin.webp"
            alt="Atelier North Architecture Fjord Cabin on Waterfront"
            className="w-full h-full object-cover brightness-75 scale-102"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 relative z-10 text-left">
          <div className="max-w-2xl space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold atelier-grotesk leading-[1.08] tracking-tight uppercase text-white drop-shadow-sm">
              ATELIER NORTH
              <br />
              ARCHITECTURE: LIGHT,
              <br />
              FORM, AND PLACE.
            </h1>

            <p className="text-sm sm:text-base text-slate-200 font-light leading-relaxed max-w-lg drop-shadow">
              A design studio dedicated to creating meaningful, sustainable, and beautiful built environments.
            </p>

            <div className="pt-2">
              <button
                onClick={() => scrollToSection("work")}
                className="px-7 py-3 rounded-full bg-white hover:bg-slate-100 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xl cursor-pointer"
              >
                EXPLORE OUR WORK
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* POSITIONING SECTION                                                     */}
      {/* ======================================================================= */}
      <section
        id="practice"
        className="relative z-10 py-16 sm:py-24 bg-[#ffffff] border-b border-slate-200/80"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-slate-900 uppercase atelier-grotesk mb-14 sm:mb-20">
            POSITIONING
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
            {/* Pillar 1: Nordic Sensitivity */}
            <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/80 text-center hover:bg-slate-50 transition-colors group">
              <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-5 bg-white border border-slate-200 shadow-sm p-1">
                <img
                  src="/images/atelier/icon-nordic.webp"
                  alt="Nordic Sensitivity"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider atelier-grotesk text-slate-900 mb-2">
                NORDIC SENSITIVITY
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Harmonizing with nature and natural light.
              </p>
            </div>

            {/* Pillar 2: Contextual Integrity */}
            <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/80 text-center hover:bg-slate-50 transition-colors group">
              <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-5 bg-white border border-slate-200 shadow-sm p-1">
                <img
                  src="/images/atelier/icon-contextual.webp"
                  alt="Contextual Integrity"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider atelier-grotesk text-slate-900 mb-2">
                CONTEXTUAL INTEGRITY
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Buildings that belong to their place.
              </p>
            </div>

            {/* Pillar 3: Sustainable Innovation */}
            <div className="p-6 rounded-3xl bg-slate-50/70 border border-slate-200/80 text-center hover:bg-slate-50 transition-colors group">
              <div className="w-16 h-16 rounded-full mx-auto flex items-center justify-center mb-5 bg-white border border-slate-200 shadow-sm p-1">
                <img
                  src="/images/atelier/icon-sustainable.webp"
                  alt="Sustainable Innovation"
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-sm sm:text-base font-bold uppercase tracking-wider atelier-grotesk text-slate-900 mb-2">
                SUSTAINABLE INNOVATION
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Responsible design for a resilient future.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* SELECTED WORK SECTION (ARCHITECTURAL MASONRY GRID)                      */}
      {/* ======================================================================= */}
      <section
        id="work"
        className="relative z-10 py-16 sm:py-24 bg-[#fbfbfa] border-b border-slate-200"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-slate-900 uppercase atelier-grotesk mb-12 sm:mb-16">
            SELECTED WORK
          </h2>

          {/* Authentic Architectural Grid matching reference image */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {/* Column 1: The Fjord Cabin (Large vertical) */}
            <div
              onClick={() => setActiveProjectIndex(0)}
              className="atelier-project-card rounded-2xl bg-white border border-slate-200/90 text-left cursor-pointer group shadow-sm flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  className="w-full h-full object-cover atelier-img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-base font-bold atelier-grotesk tracking-wide uppercase">
                    {projects[0].title}
                  </h3>
                  <div className="text-[10px] font-mono text-slate-300 uppercase tracking-widest mt-0.5">
                    {projects[0].category}
                  </div>
                  <div className="text-[10px] font-mono text-white underline mt-1.5 font-bold">
                    VIEW PROJECT &rarr;
                  </div>
                </div>
              </div>
            </div>

            {/* Column 2: Urban Refuge (Large vertical) */}
            <div
              onClick={() => setActiveProjectIndex(1)}
              className="atelier-project-card rounded-2xl bg-white border border-slate-200/90 text-left cursor-pointer group shadow-sm flex flex-col justify-between"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-slate-100">
                <img
                  src={projects[1].image}
                  alt={projects[1].title}
                  className="w-full h-full object-cover atelier-img-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-base font-bold atelier-grotesk tracking-wide uppercase">
                    {projects[1].title}
                  </h3>
                  <div className="text-[10px] font-mono text-slate-300 uppercase tracking-widest mt-0.5">
                    {projects[1].category}
                  </div>
                  <div className="text-[10px] font-mono text-white underline mt-1.5 font-bold">
                    VIEW PROJECT &rarr;
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Stacked 2 Projects (Mountain Retreat & Fjord Chalet) */}
            <div className="flex flex-col gap-5 sm:gap-6 justify-between">
              {/* Top right card */}
              <div
                onClick={() => setActiveProjectIndex(2)}
                className="atelier-project-card rounded-2xl bg-white border border-slate-200/90 text-left cursor-pointer group shadow-sm flex-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 h-full">
                  <img
                    src={projects[2].image}
                    alt={projects[2].title}
                    className="w-full h-full object-cover atelier-img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-sm font-bold atelier-grotesk tracking-wide uppercase">
                      {projects[2].title}
                    </h3>
                    <div className="text-[9px] font-mono text-slate-300 uppercase tracking-widest">
                      {projects[2].category}
                    </div>
                    <div className="text-[9px] font-mono text-white underline mt-1 font-bold">
                      VIEW PROJECT &rarr;
                    </div>
                  </div>
                </div>
              </div>

              {/* Mid right card */}
              <div
                onClick={() => setActiveProjectIndex(3)}
                className="atelier-project-card rounded-2xl bg-white border border-slate-200/90 text-left cursor-pointer group shadow-sm flex-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 h-full">
                  <img
                    src={projects[3].image}
                    alt={projects[3].title}
                    className="w-full h-full object-cover atelier-img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-3 left-4 right-4 text-white">
                    <h3 className="text-sm font-bold atelier-grotesk tracking-wide uppercase">
                      {projects[3].title}
                    </h3>
                    <div className="text-[9px] font-mono text-slate-300 uppercase tracking-widest">
                      {projects[3].category}
                    </div>
                    <div className="text-[9px] font-mono text-white underline mt-1 font-bold">
                      VIEW PROJECT &rarr;
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Row 2: Three Projects */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-5 sm:mt-6">
            {[projects[4], projects[5], projects[6]].map((project, idx) => (
              <div
                key={project.id}
                onClick={() => setActiveProjectIndex(idx + 4)}
                className="atelier-project-card rounded-2xl bg-white border border-slate-200/90 text-left cursor-pointer group shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover atelier-img-zoom"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-sm sm:text-base font-bold atelier-grotesk tracking-wide uppercase">
                      {project.title}
                    </h3>
                    <div className="text-[10px] font-mono text-slate-300 uppercase tracking-widest mt-0.5">
                      {project.category}
                    </div>
                    <div className="text-[10px] font-mono text-white underline mt-1.5 font-bold">
                      VIEW PROJECT &rarr;
                    </div>
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
        className="relative z-10 py-16 sm:py-24 bg-[#f4f4f2] border-b border-slate-200 text-center"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-slate-900 uppercase atelier-grotesk mb-14 sm:mb-20">
            THE PROCESS
          </h2>

          {/* 4 Connected Process Step Nodes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {processSteps.map((step, idx) => {
              const isSelected = activeProcessStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveProcessStep(idx)}
                  className={`p-6 rounded-3xl transition-all cursor-pointer text-center flex flex-col items-center justify-between border ${
                    isSelected
                      ? "bg-white border-[#415a4b] shadow-xl scale-102 ring-2 ring-[#415a4b]/20"
                      : "bg-white/70 border-slate-200 hover:border-slate-300 hover:bg-white"
                  }`}
                >
                  <div className="flex flex-col items-center">
                    {/* Circle icon */}
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 bg-slate-50 border border-slate-200 shadow-sm p-1">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full h-full object-contain hover:scale-110 transition-transform"
                      />
                    </div>

                    <h3 className="text-sm font-extrabold tracking-wider uppercase atelier-grotesk text-slate-950 mb-1">
                      {step.title}
                    </h3>

                    <div className="text-xs text-slate-700 font-medium mb-3">
                      {step.subtitle}
                    </div>

                    <p className="text-xs font-light leading-relaxed text-slate-500 line-clamp-3">
                      {step.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 w-full text-[10px] font-mono tracking-widest text-slate-400 font-bold">
                    STEP 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active Phase Deep-Dive Card */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 max-w-3xl mx-auto text-left shadow-lg atelier-modal-anim">
            <div className="flex items-center justify-between mb-3 text-xs font-mono">
              <span className="uppercase tracking-widest text-slate-900 font-bold">
                PHASE 0{activeProcessStep + 1} // {processSteps[activeProcessStep].title}
              </span>
              <span className="text-[#415a4b] font-bold">
                {processSteps[activeProcessStep].subtitle}
              </span>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed font-light mb-4">
              {processSteps[activeProcessStep].description}
            </p>

            <div className="pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs font-mono">
              <span className="font-bold text-slate-900">Milestone Architectural Output:</span>
              <span className="text-[#415a4b] font-semibold">
                {processSteps[activeProcessStep].deliverables}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================================= */}
      {/* CREDIBLE OUTCOMES SECTION                                               */}
      {/* ======================================================================= */}
      <section className="relative z-10 py-16 sm:py-24 bg-[#ffffff] border-b border-slate-200 text-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold tracking-[0.25em] text-slate-900 uppercase atelier-grotesk mb-12 sm:mb-16">
            CREDIBLE OUTCOMES
          </h2>

          {/* Architectural Logos Bar */}
          <div className="max-w-3xl mx-auto mb-14 p-2">
            <img
              src="/images/atelier/architecture-logos.webp"
              alt="RIBA, Dezeen, Monocle, ArchDaily"
              className="w-full h-auto object-contain mx-auto opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>

          {/* Testimonial Quote Box with Sarah J Portrait */}
          <div className="max-w-3xl mx-auto rounded-3xl bg-slate-50 border border-slate-200 p-6 sm:p-10 shadow-sm text-left relative">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              {/* Photo Avatar */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden shrink-0 border-2 border-slate-300 shadow-md bg-white">
                <img
                  src="/images/atelier/client-sarah.webp"
                  alt="Sarah J., The Fjord Cabin Client"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote text */}
              <div className="space-y-3 flex-1 text-center sm:text-left">
                <span className="text-3xl text-slate-400 font-serif leading-none block">
                  “
                </span>
                <p className="text-base sm:text-lg font-medium text-slate-800 leading-snug">
                  "Atelier North transformed our vision into a reality that exceeded expectations. The attention to detail and spatial quality is exceptional."
                </p>

                <div className="pt-1 text-xs font-mono text-slate-500">
                  <strong className="text-slate-900 block">— Sarah J.</strong>
                  The Fjord Cabin Client
                </div>
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
        className="relative z-10 py-16 sm:py-24 bg-[#232629] text-white text-center"
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-mono uppercase tracking-[0.25em] text-slate-400 font-bold block mb-2">
            CONFIDENT INQUIRY PATH
          </span>

          <h2 className="text-2xl sm:text-4xl font-extrabold atelier-grotesk uppercase tracking-wider mb-8 sm:mb-10 text-white">
            READY TO DISCUSS YOUR PROJECT?
          </h2>

          {/* Form */}
          {formSubmitted ? (
            <div className="p-8 sm:p-12 rounded-3xl bg-[#2a2e32] border border-slate-700 shadow-2xl space-y-4 atelier-modal-anim">
              <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-bold atelier-grotesk text-white">
                Inquiry Received
              </h3>
              <p className="text-xs font-mono text-slate-300 max-w-md mx-auto">
                Thank you, {formData.name || "partner"}. We have received your project details for {formData.projectType} and our partner architect will respond to {formData.email} within 24 hours.
              </p>
              <button
                onClick={() => {
                  setFormSubmitted(false);
                  setFormData({
                    name: "",
                    email: "",
                    projectType: "Residential",
                    description: "",
                  });
                }}
                className="mt-4 px-6 py-2 rounded-full bg-white text-black font-mono text-xs font-bold uppercase hover:bg-slate-200 cursor-pointer"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 text-left max-w-xl mx-auto">
              <div>
                <input
                  type="text"
                  required
                  placeholder="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white"
                />
              </div>

              {/* Project Type Selectors */}
              <div className="grid grid-cols-3 gap-2">
                {["Residential", "Commercial", "Other"].map((typ) => (
                  <button
                    key={typ}
                    type="button"
                    onClick={() => setFormData({ ...formData, projectType: typ })}
                    className={`py-2.5 rounded-xl text-xs font-mono uppercase tracking-wider border transition-all cursor-pointer ${
                      formData.projectType === typ
                        ? "bg-white text-black font-bold border-white"
                        : "bg-white/5 border-white/20 text-slate-300 hover:border-white/50"
                    }`}
                  >
                    {typ}
                  </button>
                ))}
              </div>

              <div>
                <textarea
                  rows={4}
                  required
                  placeholder="Project Description (Location, Site conditions, Desired timeline...)"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full rounded-xl bg-white text-slate-900 px-4 py-3 text-xs placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-white resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-xl bg-white hover:bg-slate-100 text-slate-950 font-mono text-xs font-bold uppercase tracking-widest transition-all duration-200 cursor-pointer shadow-lg"
                >
                  {isSubmitting ? (
                    <span>PROCESSING...</span>
                  ) : (
                    <span>SUBMIT INQUIRY</span>
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
      <footer className="py-12 bg-white text-slate-600 text-xs font-mono border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 text-left">
            {/* Logo Emblem */}
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center text-white shrink-0">
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
              <div>
                <span className="font-bold text-slate-900 block">ATELIER NORTH</span>
                <span className="text-[10px] text-slate-400 block">ARCHITECTURE</span>
              </div>
            </div>

            {/* Address */}
            <div>
              <span className="font-bold text-slate-900 block mb-1">Address</span>
              <p className="text-slate-500 leading-relaxed">
                1825 Nordenskiold St<br />
                1044 Stockholm 17147
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <span className="font-bold text-slate-900 block mb-1">Contact Info</span>
              <p className="text-slate-500 leading-relaxed">
                +47 8848 1111<br />
                hej@atelier-north.no
              </p>
            </div>

            {/* Social Links */}
            <div>
              <span className="font-bold text-slate-900 block mb-1">Social Links</span>
              <div className="flex items-center gap-4 text-slate-600 mt-2">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black transition-colors"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-black transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400">
            <div>Copyright &copy; 2024 ATELIER NORTH ARCHITECTURE. All Rights Reserved.</div>
            <div className="mt-2 sm:mt-0">Scandinavian Built Environments</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AtelierNorthArchitecture;
