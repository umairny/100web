import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {
  Compass,
  Clock,
  Feather,
  Hammer,
  Search,
  Key,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  X,
  Menu,
  Heart,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Sliders,
  Calendar,
  Layers,
  Award,
  Check,
  Copy,
  ExternalLink,
} from "lucide-react";
import "./ValeInteriorStudio.css";

interface ProjectCaseStudy {
  id: string;
  title: string;
  location: string;
  image: string;
  category: string;
  description: string;
  scope: string[];
  materials: string[];
  completionTime: string;
  dimensions: string;
  clientReview: string;
}

const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "mendocino-residence",
    title: "THE MENDOCINO RESIDENCE",
    location: "Mendocino Coast, California",
    image: "/images/vale/mendocino-residence.webp",
    category: "Coastal Sanctuary",
    description:
      "The Mendocino residence embraces ocean mist, weathered cedar, and relaxed comfort. A warm coastal sanctuary crafted for quiet reflection and generational family gatherings.",
    scope: [
      "Full Interior Architecture & Spatial Reconfiguration",
      "Custom White Oak & Cast Bronze Joinery",
      "Linen & Natural Wool Furnishing Curation",
      "Indoor-Outdoor Panoramic Glass Integration",
    ],
    materials: ["Hand-Scraped White Oak", "Belgian Linen", "Tadelakt Plaster", "Honed Basalt"],
    completionTime: "14 Months",
    dimensions: "5,400 sq. ft",
    clientReview: "Vale took a rugged coastal view and turned the interior into the most peaceful place on earth.",
  },
  {
    id: "pacific-heights-1",
    title: "PACIFIC HEIGHTS TOWNHOUSE",
    location: "Pacific Heights, San Francisco",
    image: "/images/vale/pacific-heights-1.webp",
    category: "Historic Modernization",
    description:
      "A multi-level Pacific Heights residence tailored for modern urban living, balancing historic molding details with calm, contemporary stone and organic textiles.",
    scope: [
      "Historic Architectural Preservation & Millwork",
      "Custom Italian Travertine Fireplace Mantel",
      "Curated Lighting Plan with Artisan Glass Pendants",
      "Primary Suite & Spa Bathroom Sanctuary",
    ],
    materials: ["Roman Travertine", "Brushed Brass", "Bouclé Wool", "Smoked Walnut"],
    completionTime: "10 Months",
    dimensions: "4,200 sq. ft",
    clientReview: "They honored the building's soul while giving our family a serene, functional oasis.",
  },
  {
    id: "pacific-heights-2",
    title: "NOE VALLEY RESIDENCE",
    location: "Noe Valley, San Francisco",
    image: "/images/vale/pacific-heights-2.webp",
    category: "Biophilic Urban Home",
    description:
      "Warm natural light, custom white oak millwork, and peaceful indoor-outdoor flow define this multi-generational sanctuary nestled in the hills.",
    scope: [
      "Open-Concept Living & Culinary Architecture",
      "Bespoke Fluted Cabinetry & Hidden Pantry",
      "Acoustic Wall Paneling with Organic Felt",
      "Courtyard Garden Transition Decking",
    ],
    materials: ["Rift Sawn Oak", "Calacatta Marble", "Organic Jute", "Limonite Limewash"],
    completionTime: "8 Months",
    dimensions: "3,850 sq. ft",
    clientReview: "The natural light and acoustics in our living pavilion have transformed our daily routines.",
  },
  {
    id: "pacific-heights-3",
    title: "MARIN HILLSIDE VILLA",
    location: "Belvedere, Marin County",
    image: "/images/vale/pacific-heights-3.webp",
    category: "Restorative Estate",
    description:
      "A private hillside sanctuary with panoramic bay views, restorative textures, and deep earth-toned palettes that foster peace and emotional balance.",
    scope: [
      "Whole-Home Interior Furnishing & Styling",
      "Custom Low-Profile Modular Sectionals",
      "Art Procurement & Sculptural Placement",
      "Restorative Bedroom Acoustic Draping",
    ],
    materials: ["Charcoal Wool Flannel", "Olive Ash Wood", "Patinated Iron", "Raw Silk"],
    completionTime: "12 Months",
    dimensions: "6,100 sq. ft",
    clientReview: "Four years later, walking through our front door still brings an immediate sense of relief.",
  },
];

const GALLERY_PHOTOS = [
  {
    id: "g1",
    src: "/images/vale/gallery-1.webp",
    title: "Lounge & Organic Living",
    subtitle: "Custom linen sectional with handcrafted solid oak cocktail table and natural wool rugs",
  },
  {
    id: "g2",
    src: "/images/vale/gallery-2.webp",
    title: "Artisan Entryway & Ceramics",
    subtitle: "Arched monolithic mirror with hand-thrown ceramic vessel and patinated bronze sconces",
  },
  {
    id: "g3",
    src: "/images/vale/gallery-3.webp",
    title: "Curated Reading Library",
    subtitle: "Built-in limewash shelving and low-voltage warm directional illumination",
  },
  {
    id: "g4",
    src: "/images/vale/gallery-4.webp",
    title: "Culinary & Dining Suite",
    subtitle: "Fluted travertine dining surface with woven paper cord armchairs and linen drapery",
  },
];

const CLIENT_TESTIMONIALS = [
  {
    quote: "Working with Vale was a dream. They captured our essence perfectly.",
    author: "Sarah & James",
    project: "The Mendocino Residence",
    imageSarah: "/images/vale/client-sarah.webp",
    imageJames: "/images/vale/client-james.webp",
  },
  {
    quote: "Vale didn't just redesign our townhouse; they brought calm and light into our daily family rhythm.",
    author: "David & Elena M.",
    project: "Pacific Heights Townhouse",
    imageSarah: "/images/vale/client-sarah.webp",
    imageJames: "/images/vale/client-james.webp",
  },
  {
    quote: "The White Oak millwork and stone selections are timeless. Four years later, it still feels like walking into a sanctuary.",
    author: "Marcus & Chloe T.",
    project: "Marin Hillside Villa",
    imageSarah: "/images/vale/client-sarah.webp",
    imageJames: "/images/vale/client-james.webp",
  },
];

export function ValeInteriorStudio() {
  // Mobile nav state
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Active project modal
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);

  // Active gallery lightbox
  const [activeGalleryPhoto, setActiveGalleryPhoto] = useState<{
    src: string;
    title: string;
    subtitle: string;
  } | null>(null);

  // Consultation booking modal
  const [consultationModalOpen, setConsultationModalOpen] = useState(false);

  // Testimonial selector
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Budget slider state ($50k - $350k+)
  const [budgetSliderValue, setBudgetSliderValue] = useState(150);

  // Selected project type chip
  const [selectedProjectType, setSelectedProjectType] = useState<string>("Full Home Sanctuary");

  // Copy state for contact details
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  // Inquiry Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formSubmitting, setFormSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Carousel refs
  const positioningCarouselRef = useRef<HTMLDivElement>(null);
  const galleryCarouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (
    ref: React.RefObject<HTMLDivElement | null>,
    direction: "left" | "right"
  ) => {
    if (ref.current) {
      const scrollAmount = 300;
      ref.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const formattedBudget = () => {
    if (budgetSliderValue >= 300) return "$300,000+ (Master Estate Sanctuary)";
    if (budgetSliderValue >= 200) return `$${budgetSliderValue},000 - $300,000`;
    if (budgetSliderValue >= 100) return `$${budgetSliderValue},000 - $200,000`;
    return `$${budgetSliderValue},000 - $100,000`;
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("415-551-0199");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("studio@valeinteriors.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setFormSubmitting(true);
    setTimeout(() => {
      setFormSubmitting(false);
      setFormSubmitted(true);
      setTimeout(() => {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setFormSubmitted(false);
      }, 6000);
    }, 1200);
  };

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80;
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <div className="vale-container min-h-screen bg-[#fcfbf9] text-[#292524] selection:bg-[#525b44]/20 selection:text-[#38402f]">
      {/* ========================================================================= */}
      {/* HEADER / NAVIGATION BAR                                                  */}
      {/* ========================================================================= */}
      <header className="sticky top-0 left-0 right-0 z-50 border-b border-[#e9e4d9] bg-[#fcfbf9]/95 backdrop-blur-md transition-all duration-300">
        <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link
            to="/portfolio/vale-interior-studio"
            className="flex flex-col items-start leading-none group text-[#1c1917]"
          >
            <span className="vale-serif text-2xl sm:text-3xl font-normal tracking-[0.22em] uppercase">
              VALE
            </span>
            <span className="text-[8px] sm:text-[9px] font-semibold tracking-[0.38em] uppercase text-[#78716c] mt-0.5">
              INTERIOR STUDIO
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden items-center space-x-8 md:flex text-xs font-semibold tracking-[0.2em] uppercase text-[#44403c]">
            <button
              onClick={() => scrollToSection("work")}
              className="transition-colors hover:text-[#525b44]"
            >
              WORK
            </button>
            <button
              onClick={() => scrollToSection("process")}
              className="transition-colors hover:text-[#525b44]"
            >
              PROCESS
            </button>
            <button
              onClick={() => scrollToSection("outcomes")}
              className="transition-colors hover:text-[#525b44]"
            >
              OUTCOMES
            </button>
            <button
              onClick={() => scrollToSection("inquire")}
              className="transition-colors hover:text-[#525b44]"
            >
              INQUIRE
            </button>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => setConsultationModalOpen(true)}
              className="rounded-full bg-[#525b44] hover:bg-[#434b37] px-5 py-2.5 text-[11px] font-semibold tracking-[0.18em] uppercase text-white shadow-sm transition-all duration-200 hover:shadow-md hover:scale-[1.02]"
            >
              FREE CONSULTATION
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={() => setConsultationModalOpen(true)}
              className="rounded-full bg-[#525b44] px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-wider text-white"
            >
              CONSULT
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#44403c] hover:text-[#1c1917]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {mobileMenuOpen && (
          <div className="border-b border-[#e9e4d9] bg-[#fcfbf9] px-6 py-6 md:hidden">
            <div className="flex flex-col space-y-4 text-sm font-semibold tracking-[0.2em] uppercase text-[#44403c]">
              <button
                onClick={() => scrollToSection("work")}
                className="text-left hover:text-[#525b44]"
              >
                WORK
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-left hover:text-[#525b44]"
              >
                PROCESS
              </button>
              <button
                onClick={() => scrollToSection("outcomes")}
                className="text-left hover:text-[#525b44]"
              >
                OUTCOMES
              </button>
              <button
                onClick={() => scrollToSection("inquire")}
                className="text-left hover:text-[#525b44]"
              >
                INQUIRE
              </button>
              <div className="pt-2">
                <Link
                  to="/portfolio"
                  className="text-xs text-[#78716c] hover:text-[#1c1917] flex items-center gap-1 normal-case tracking-normal"
                >
                  <ArrowRight className="h-3 w-3 rotate-180" /> Back to Portfolio Index
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main>
        {/* ========================================================================= */}
        {/* HERO SECTION                                                             */}
        {/* ========================================================================= */}
        <section className="relative w-full overflow-hidden">
          {/* Master Architectural Living Room Hero Image */}
          <div className="relative min-h-[480px] sm:min-h-[580px] lg:min-h-[660px] w-full bg-[#e8e4dc]">
            <img
              src="/images/vale/hero-living-room.webp"
              alt="Vale Interior Studio residential sanctuary"
              className="absolute inset-0 h-full w-full object-cover object-center vale-zoom-image"
            />
            {/* Natural warm luxury scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-black/25" />

            {/* Centered Hero Typography */}
            <div className="relative z-10 mx-auto flex min-h-[480px] sm:min-h-[580px] lg:min-h-[660px] max-w-4xl flex-col items-center justify-center px-4 text-center text-white">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-black/25 px-4 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-[0.25em] text-stone-200 backdrop-blur-sm mb-5">
                <span className="h-1.5 w-1.5 rounded-full bg-[#d6cebe]" />
                Residential Sanctuaries • Est. 2018
              </span>

              <h1 className="vale-serif text-3xl sm:text-5xl lg:text-6xl font-normal tracking-[0.06em] uppercase leading-[1.12] drop-shadow-sm max-w-3xl">
                VALE INTERIOR STUDIO:
                <span className="block mt-1 sm:mt-2">CRAFTING SANCTUARIES,</span>
                <span className="block mt-1 sm:mt-2">NOT JUST SPACES.</span>
              </h1>

              <p className="mt-5 max-w-xl text-sm sm:text-base lg:text-lg font-light tracking-wide text-stone-200 drop-shadow-sm leading-relaxed">
                Timeless, comfortable, and consciously designed residential interiors.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => scrollToSection("work")}
                  className="rounded-full bg-white text-[#1c1917] px-7 py-3 text-xs font-semibold tracking-[0.2em] uppercase shadow-lg transition-all hover:bg-stone-200"
                >
                  Explore Selected Work &darr;
                </button>
                <button
                  onClick={() => setConsultationModalOpen(true)}
                  className="rounded-full border border-white/50 bg-black/25 px-6 py-3 text-xs font-semibold tracking-[0.2em] uppercase text-white backdrop-blur-sm transition-all hover:bg-white/20"
                >
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* POSITIONING SECTION                                                      */}
        {/* ========================================================================= */}
        <section className="py-16 sm:py-24 bg-gradient-to-b from-[#fcfbf9] via-[#f5f1e8] to-[#fcfbf9]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10 sm:mb-14">
              <h2 className="vale-serif text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#78716c]">
                POSITIONING
              </h2>
              <p className="mt-2 text-base sm:text-lg text-[#44403c] font-light max-w-lg mx-auto">
                Devoted to crafted sanctuaries, consciously designed residential interiors.
              </p>
            </div>

            {/* 3 Value Proposition Cards */}
            <div className="relative">
              <div
                ref={positioningCarouselRef}
                className="vale-carousel-track flex gap-5 overflow-x-auto pb-4 sm:pb-0 sm:grid sm:grid-cols-3 scroll-smooth px-1"
              >
                {/* Card 1: TIMELESS AESTHETIC */}
                <div className="flex-none w-[280px] sm:w-auto vale-glass-card rounded-2xl p-6 sm:p-8 text-center vale-card-shadow transition-all duration-300 hover:-translate-y-1 hover:vale-card-shadow-lg">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f0ebd9] text-[#746651] mb-5">
                    <Clock className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <h3 className="vale-serif text-lg font-semibold tracking-[0.14em] uppercase text-[#1c1917]">
                    TIMELESS AESTHETIC
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#78716c] leading-relaxed">
                    Design built to endure trends through authentic materials and structural quietude.
                  </p>
                </div>

                {/* Card 2: CONSCIOUS COMFORT */}
                <div className="flex-none w-[280px] sm:w-auto vale-glass-card rounded-2xl p-6 sm:p-8 text-center vale-card-shadow transition-all duration-300 hover:-translate-y-1 hover:vale-card-shadow-lg">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#eef1e6] text-[#525b44] mb-5">
                    <Feather className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <h3 className="vale-serif text-lg font-semibold tracking-[0.14em] uppercase text-[#1c1917]">
                    CONSCIOUS COMFORT
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#78716c] leading-relaxed">
                    Spaces that feel as good as they look with organic textiles and acoustic warmth.
                  </p>
                </div>

                {/* Card 3: INTENTIONAL LIVING */}
                <div className="flex-none w-[280px] sm:w-auto vale-glass-card rounded-2xl p-6 sm:p-8 text-center vale-card-shadow transition-all duration-300 hover:-translate-y-1 hover:vale-card-shadow-lg">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#f2ede4] text-[#856b54] mb-5">
                    <Hammer className="h-6 w-6 stroke-[1.5]" />
                  </div>
                  <h3 className="vale-serif text-lg font-semibold tracking-[0.14em] uppercase text-[#1c1917]">
                    INTENTIONAL LIVING
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#78716c] leading-relaxed">
                    Design focused on well-being, circadian lighting, and daily ease.
                  </p>
                </div>
              </div>

              {/* Mobile Carousel Arrow Controls */}
              <div className="flex sm:hidden justify-center items-center gap-3 mt-4">
                <button
                  onClick={() => scrollCarousel(positioningCarouselRef, "left")}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d6cebe] bg-white text-[#78716c]"
                  aria-label="Previous card"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={() => scrollCarousel(positioningCarouselRef, "right")}
                  className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d6cebe] bg-white text-[#78716c]"
                  aria-label="Next card"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* SELECTED WORK SECTION                                                     */}
        {/* ========================================================================= */}
        <section id="work" className="py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="vale-serif text-2xl sm:text-3xl lg:text-4xl font-normal tracking-[0.2em] uppercase text-[#1c1917]">
                SELECTED WORK
              </h2>
              <div className="mx-auto mt-3 h-px w-16 bg-[#c5beaf]" />
            </div>

            {/* 4 High-Resolution Project Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10">
              {PROJECTS.map((project) => (
                <div
                  key={project.id}
                  onClick={() => setActiveProject(project)}
                  className="group cursor-pointer flex flex-col transition-all duration-300"
                >
                  {/* Image Card with Typography Overlay */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-[#e5dfd5] vale-card-shadow group-hover:vale-card-shadow-lg transition-all">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-center vale-zoom-image"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Headline Text Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                      <h3 className="vale-serif text-xl sm:text-2xl lg:text-3xl font-normal tracking-[0.14em] uppercase text-white drop-shadow">
                        {project.title}
                      </h3>
                    </div>

                    {/* Scope Pill Badge on Card */}
                    <div className="absolute top-3.5 right-3.5 rounded-full bg-white/90 backdrop-blur px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[#44403c] opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 shadow-sm">
                      <Sparkles className="h-2.5 w-2.5 text-[#525b44]" /> View Story
                    </div>
                  </div>

                  {/* Caption Details Underneath */}
                  <div className="pt-4 pb-2 px-1">
                    <p className="text-xs sm:text-sm text-[#78716c] leading-relaxed">
                      {project.description}
                    </p>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setActiveProject(project);
                      }}
                      className="mt-2.5 inline-block text-[11px] font-bold tracking-[0.2em] uppercase text-[#1c1917] underline decoration-[#a89f91] underline-offset-4 hover:text-[#525b44] hover:decoration-[#525b44] transition-colors"
                    >
                      VIEW CASE STUDY
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* DETAILS & COLLECTIONS (GALLERY STRIP)                                    */}
        {/* ========================================================================= */}
        <section className="py-14 sm:py-20 bg-[#f5f1e8] border-y border-[#eae4d8]">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="vale-serif text-sm sm:text-base font-semibold tracking-[0.25em] uppercase text-[#78716c]">
                DETAILS & COLLECTIONS
              </h2>
            </div>

            {/* 4 High-Res Thumbnails Carousel Strip */}
            <div className="relative group/gallery">
              <div
                ref={galleryCarouselRef}
                className="vale-carousel-track flex gap-4 overflow-x-auto pb-4 scroll-smooth px-1"
              >
                {GALLERY_PHOTOS.map((photo) => (
                  <div
                    key={photo.id}
                    onClick={() => setActiveGalleryPhoto(photo)}
                    className="flex-none w-[220px] sm:w-[260px] md:w-[260px] cursor-pointer group/item overflow-hidden rounded-xl bg-white p-2 vale-card-shadow hover:vale-card-shadow-lg transition-all hover:-translate-y-0.5"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-[#eae4d8]">
                      <img
                        src={photo.src}
                        alt={photo.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover/item:scale-105"
                      />
                    </div>
                    <div className="pt-2 px-1 text-center">
                      <p className="vale-serif text-xs font-semibold tracking-wider text-[#1c1917]">
                        {photo.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => scrollCarousel(galleryCarouselRef, "left")}
                aria-label="Previous photos"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 sm:-translate-x-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#d6cebe] bg-white text-[#78716c] shadow-md hover:text-[#1c1917] transition-all"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => scrollCarousel(galleryCarouselRef, "right")}
                aria-label="Next photos"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 sm:translate-x-4 flex h-9 w-9 items-center justify-center rounded-full border border-[#d6cebe] bg-white text-[#78716c] shadow-md hover:text-[#1c1917] transition-all"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* PROCESS SECTION: THE VALE JOURNEY                                         */}
        {/* ========================================================================= */}
        <section id="process" className="py-20 sm:py-28 bg-[#fcfbf9]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 sm:mb-20">
              <span className="vale-serif text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#78716c]">
                PROCESS
              </span>
              <h2 className="vale-serif mt-2 text-2xl sm:text-4xl font-normal tracking-[0.14em] uppercase text-[#1c1917]">
                THE VALE JOURNEY: FROM VISION TO REALITY
              </h2>
            </div>

            {/* Curving 4-Stage Process Flow Diagram */}
            <div className="relative">
              {/* Connecting Curved Arc (SVG) for desktop */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none hidden md:block"
                viewBox="0 0 900 240"
                fill="none"
              >
                <path
                  d="M 120 70 C 230 40, 310 110, 420 70 C 530 30, 620 110, 780 70"
                  stroke="#d5cec2"
                  strokeWidth="1.5"
                  className="vale-animated-arc"
                />
              </svg>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {/* Step 1: DISCOVERY & VISION */}
                <div className="flex flex-col items-center text-center group">
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#d5cec2] bg-[#fcfbf9] p-2 shadow-sm transition-transform group-hover:scale-105 group-hover:border-[#525b44]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#f4efe4] text-[#525b44]">
                      <Search className="h-8 w-8 stroke-[1.5]" />
                    </div>
                  </div>
                  <h3 className="vale-serif mt-5 text-sm font-bold tracking-[0.18em] uppercase text-[#1c1917]">
                    DISCOVERY & VISION
                  </h3>
                  <p className="mt-2 text-xs text-[#78716c] leading-relaxed max-w-[200px]">
                    Discovery & vision to get complete overview and determine ambition.
                  </p>
                </div>

                {/* Step 2: CONCEPT & CURATION */}
                <div className="flex flex-col items-center text-center group">
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#d5cec2] bg-[#fcfbf9] p-2 shadow-sm transition-transform group-hover:scale-105 group-hover:border-[#525b44]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#f4efe4] text-[#525b44]">
                      <Compass className="h-8 w-8 stroke-[1.5]" />
                    </div>
                  </div>
                  <h3 className="vale-serif mt-5 text-sm font-bold tracking-[0.18em] uppercase text-[#1c1917]">
                    CONCEPT & CURATION
                  </h3>
                  <p className="mt-2 text-xs text-[#78716c] leading-relaxed max-w-[200px]">
                    Complete curation with creative, fine artisan palettes, materials and styling themes.
                  </p>
                </div>

                {/* Step 3: EXECUTION & INSTALL */}
                <div className="flex flex-col items-center text-center group">
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#d5cec2] bg-[#fcfbf9] p-2 shadow-sm transition-transform group-hover:scale-105 group-hover:border-[#525b44]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#f4efe4] text-[#525b44]">
                      <Hammer className="h-8 w-8 stroke-[1.5]" />
                    </div>
                  </div>
                  <h3 className="vale-serif mt-5 text-sm font-bold tracking-[0.18em] uppercase text-[#1c1917]">
                    EXECUTION & INSTALL
                  </h3>
                  <p className="mt-2 text-xs text-[#78716c] leading-relaxed max-w-[200px]">
                    Hands-on installation, sourcing, and on-site client orchestration.
                  </p>
                </div>

                {/* Step 4: REVEAL & REFRESH */}
                <div className="flex flex-col items-center text-center group">
                  <div className="relative flex h-24 w-24 items-center justify-center rounded-full border-2 border-[#d5cec2] bg-[#fcfbf9] p-2 shadow-sm transition-transform group-hover:scale-105 group-hover:border-[#525b44]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-[#f4efe4] text-[#525b44]">
                      <Key className="h-8 w-8 stroke-[1.5]" />
                    </div>
                  </div>
                  <h3 className="vale-serif mt-5 text-sm font-bold tracking-[0.18em] uppercase text-[#1c1917]">
                    REVEAL & REFRESH
                  </h3>
                  <p className="mt-2 text-xs text-[#78716c] leading-relaxed max-w-[200px]">
                    Unveil & celebrate your sanctuary. Prepare your space for lived-in comfort.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CREDIBLE OUTCOMES: IMPACT & LEGACY                                        */}
        {/* ========================================================================= */}
        <section id="outcomes" className="py-20 sm:py-28 bg-[#f5f1e8] border-t border-[#eae4d8]">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <span className="vale-serif text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-[#78716c]">
                CREDIBLE OUTCOMES
              </span>
              <h2 className="vale-serif mt-2 text-2xl sm:text-4xl font-normal tracking-[0.14em] uppercase text-[#1c1917]">
                IMPACT & LEGACY
              </h2>
            </div>

            {/* Testimonial Quote & Client Portraits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
              {/* Left: Quote */}
              <div className="text-left">
                <blockquote className="vale-serif text-2xl sm:text-3xl font-normal text-[#1c1917] leading-tight italic">
                  “{CLIENT_TESTIMONIALS[testimonialIdx].quote}”
                </blockquote>
                <div className="mt-6 text-sm font-semibold tracking-wider text-[#78716c]">
                  — {CLIENT_TESTIMONIALS[testimonialIdx].author}
                </div>
                <div className="text-xs text-[#a89f91] mt-0.5">
                  {CLIENT_TESTIMONIALS[testimonialIdx].project}
                </div>

                {/* Quote Switcher Dots */}
                <div className="mt-6 flex items-center gap-2">
                  {CLIENT_TESTIMONIALS.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialIdx(i)}
                      aria-label={`Testimonial ${i + 1}`}
                      className={`h-2 rounded-full transition-all ${
                        testimonialIdx === i
                          ? "w-8 bg-[#525b44]"
                          : "w-2 bg-[#d6cebe] hover:bg-[#a89f91]"
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Right: Client Portraits */}
              <div className="flex items-center justify-center md:justify-end gap-4">
                <div className="w-32 sm:w-36 overflow-hidden rounded-2xl bg-[#e5dfd5] vale-card-shadow">
                  <img
                    src={CLIENT_TESTIMONIALS[testimonialIdx].imageSarah}
                    alt="Sarah - Client of Vale Interior Studio"
                    className="h-44 w-full object-cover object-top"
                  />
                </div>
                <div className="w-32 sm:w-36 overflow-hidden rounded-2xl bg-[#e5dfd5] vale-card-shadow">
                  <img
                    src={CLIENT_TESTIMONIALS[testimonialIdx].imageJames}
                    alt="James - Client of Vale Interior Studio"
                    className="h-44 w-full object-cover object-top"
                  />
                </div>
              </div>
            </div>

            {/* Bottom Proof Metrics Strip */}
            <div className="mt-16 rounded-2xl border border-[#d6cebe] bg-[#fcfbf9] p-6 sm:p-8 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center items-center">
              <div className="border-b sm:border-b-0 sm:border-r border-[#e9e4d9] pb-4 sm:pb-0 sm:pr-4">
                <div className="vale-serif text-3xl sm:text-4xl font-normal text-[#1c1917]">
                  98%
                </div>
                <div className="text-xs text-[#78716c] font-medium tracking-wider uppercase mt-1">
                  Client Satisfaction
                </div>
              </div>

              <div className="border-b sm:border-b-0 sm:border-r border-[#e9e4d9] pb-4 sm:pb-0 sm:pr-4">
                <div className="vale-serif text-3xl sm:text-4xl font-normal text-[#1c1917]">
                  98%
                </div>
                <div className="text-xs text-[#78716c] font-medium tracking-wider uppercase mt-1">
                  Client Impact Satisfaction
                </div>
              </div>

              <div>
                <div className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#78716c]">
                  FEATURED IN
                </div>
                <div className="vale-serif text-xl sm:text-2xl font-bold tracking-tight text-[#1c1917] mt-0.5">
                  Architectural Digest
                </div>
                <div className="text-[9px] text-[#a89f91] italic">
                  (conceptually represented)
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================================= */}
        {/* CONFIDENT INQUIRY PATH: START YOUR VALE JOURNEY                            */}
        {/* ========================================================================= */}
        <section id="inquire" className="py-20 sm:py-28 bg-[#fcfbf9]">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            {/* Sage Green Tinted Container */}
            <div className="rounded-3xl border border-[#c5cdbc] bg-[#dbe2d4] p-8 sm:p-12 lg:p-14 vale-card-shadow-lg text-center">
              <span className="vale-serif text-xs font-semibold tracking-[0.3em] uppercase text-[#525b44]">
                CONFIDENT INQUIRY PATH
              </span>
              <h2 className="vale-serif mt-2 text-2xl sm:text-4xl font-normal tracking-[0.12em] uppercase text-[#1c1917]">
                START YOUR VALE JOURNEY
              </h2>
              <p className="mt-2 text-sm text-[#525b44]">
                Tell us about your project.
              </p>

              {/* Working Form */}
              {formSubmitted ? (
                <div className="mt-8 rounded-2xl bg-white/90 p-8 text-center vale-animate-in">
                  <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#eef1e6] text-[#525b44]">
                    <CheckCircle2 className="h-7 w-7" />
                  </div>
                  <h3 className="vale-serif mt-4 text-xl font-semibold text-[#1c1917]">
                    Sanctuary Inquiry Received
                  </h3>
                  <p className="mt-2 text-xs text-[#78716c] max-w-md mx-auto">
                    Thank you, {formData.name}. Our principal design team will review your project details and connect with you within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="mt-8 space-y-4 text-left">
                  <div>
                    <label htmlFor="vale-name" className="sr-only">
                      Name
                    </label>
                    <input
                      id="vale-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Name"
                      className="vale-input w-full rounded-lg px-4 py-3 text-sm placeholder-[#a89f91]"
                    />
                  </div>

                  <div>
                    <label htmlFor="vale-email" className="sr-only">
                      Email
                    </label>
                    <input
                      id="vale-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Email"
                      className="vale-input w-full rounded-lg px-4 py-3 text-sm placeholder-[#a89f91]"
                    />
                  </div>

                  {/* Project Type Select Chips */}
                  <div>
                    <span className="block text-[11px] font-semibold text-[#525b44] uppercase tracking-wider mb-2">
                      Project Type:
                    </span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        "Full Home Sanctuary",
                        "New Architecture",
                        "Living Suite Retreat",
                        "Art & Furnishing Curation",
                      ].map((t) => (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setSelectedProjectType(t)}
                          className={`p-2.5 rounded-lg border text-left font-medium transition-all ${
                            selectedProjectType === t
                              ? "border-[#444c37] bg-white text-[#1c1917] font-bold shadow-sm"
                              : "border-[#c5cdbc] bg-white/60 text-[#525b44] hover:bg-white"
                          }`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Budget Range Slider */}
                  <div className="pt-2">
                    <div className="flex justify-between text-xs text-[#525b44] font-semibold mb-2">
                      <span>Budget Range:</span>
                      <span className="font-bold text-[#1c1917]">{formattedBudget()}</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="350"
                      step="25"
                      value={budgetSliderValue}
                      onChange={(e) => setBudgetSliderValue(Number(e.target.value))}
                      className="vale-range-slider w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="vale-message" className="sr-only">
                      Message
                    </label>
                    <textarea
                      id="vale-message"
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Message / Vision details, residence address, or timeline..."
                      className="vale-input w-full rounded-lg px-4 py-3 text-sm placeholder-[#a89f91]"
                    />
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      disabled={formSubmitting}
                      className="w-full rounded-lg bg-[#444c37] hover:bg-[#373e2d] py-3.5 text-xs font-semibold tracking-[0.2em] uppercase text-white shadow-md transition-all duration-200 hover:shadow-lg disabled:opacity-50"
                    >
                      {formSubmitting ? "PREPARING CONSULTATION..." : "LET'S CREATE YOUR SANCTUARY"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      {/* ========================================================================= */}
      {/* FOOTER                                                                    */}
      {/* ========================================================================= */}
      <footer className="border-t border-[#eae4d8] bg-[#fcfbf9] py-12 text-[#78716c]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left: Brand & Copyright */}
            <div className="text-center md:text-left">
              <Link to="/portfolio/vale-interior-studio" className="inline-block text-[#1c1917]">
                <span className="vale-serif text-2xl font-normal tracking-[0.2em] uppercase">
                  VALE
                </span>
                <span className="block text-[8px] font-semibold tracking-[0.35em] uppercase text-[#78716c] mt-0.5">
                  INTERIOR STUDIO
                </span>
              </Link>
              <p className="mt-3 text-[11px] text-[#a89f91]">
                Copyright © 2026 Vale Interior Studio. All Rights Reserved.
              </p>
            </div>

            {/* Center: Contact Info */}
            <div className="text-center text-xs text-[#78716c] space-y-1">
              <div className="font-semibold text-[#1c1917] tracking-wider uppercase text-[11px]">
                Contact Us:
              </div>
              <div>Vale Interior Studio</div>
              <div>420 Belvedere Suite 300</div>
              <div>San Francisco, CA 94109</div>
              <div className="pt-1 flex items-center justify-center gap-3">
                <button
                  onClick={handleCopyPhone}
                  className="font-mono text-[#525b44] font-medium hover:underline flex items-center gap-1"
                >
                  <span>Tel: 415-551-0199</span>
                  {copiedPhone && <Check className="h-3 w-3 text-emerald-600" />}
                </button>
                <span>•</span>
                <button
                  onClick={handleCopyEmail}
                  className="font-mono text-[#525b44] font-medium hover:underline flex items-center gap-1"
                >
                  <span>studio@valeinteriors.com</span>
                  {copiedEmail && <Check className="h-3 w-3 text-emerald-600" />}
                </button>
              </div>
            </div>

            {/* Right: Social Icons */}
            <div className="flex items-center gap-4 text-[#78716c]">
              <a
                href="#instagram"
                aria-label="Instagram"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d6cebe] bg-white text-[#78716c] hover:text-[#525b44] hover:border-[#525b44] transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#pinterest"
                aria-label="Pinterest"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d6cebe] bg-white text-[#78716c] hover:text-[#525b44] hover:border-[#525b44] transition-colors"
              >
                <span className="font-serif font-bold text-xs">P</span>
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-[#d6cebe] bg-white text-[#78716c] hover:text-[#525b44] hover:border-[#525b44] transition-colors"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64a1.65 1.65 0 0 0-1.66 1.66 1.66 1.66 0 0 0 1.66 1.66 1.66 1.66 0 0 0 1.66-1.66 1.66 1.66 0 0 0-1.66-1.66Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* ========================================================================= */}
      {/* CASE STUDY DETAIL MODAL                                                   */}
      {/* ========================================================================= */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm vale-animate-in"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative w-full max-w-2xl overflow-hidden rounded-3xl bg-[#fcfbf9] p-6 sm:p-8 vale-card-shadow-lg text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-5 right-5 rounded-full border border-[#d6cebe] bg-white p-1.5 text-[#78716c] hover:text-[#1c1917]"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Project Header Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl bg-[#e5dfd5]">
              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="h-full w-full object-cover"
              />
            </div>

            {/* Project Header Info */}
            <div className="mt-5">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#525b44]">
                {activeProject.location} • {activeProject.category}
              </span>
              <h3 className="vale-serif text-2xl sm:text-3xl font-normal tracking-wide text-[#1c1917] mt-1">
                {activeProject.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-[#78716c] leading-relaxed">
                {activeProject.description}
              </p>
            </div>

            {/* Project Deliverables & Materials */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-[#e9e4d9] pt-4">
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#1c1917] mb-2">
                  Scope & Architecture
                </h4>
                <div className="space-y-1.5">
                  {activeProject.scope.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-[#78716c]">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#525b44] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#1c1917] mb-2">
                  Material Palette
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.materials.map((mat, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-[#f4efe4] border border-[#d6cebe] px-2.5 py-1 text-[11px] text-[#44403c]"
                    >
                      {mat}
                    </span>
                  ))}
                </div>
                <div className="mt-4 text-xs text-[#78716c]">
                  <span className="font-semibold text-[#1c1917]">Project Duration: </span>
                  {activeProject.completionTime} • {activeProject.dimensions}
                </div>
              </div>
            </div>

            {/* Action */}
            <div className="mt-6 pt-4 border-t border-[#e9e4d9] flex justify-end gap-3">
              <button
                onClick={() => {
                  setActiveProject(null);
                  scrollToSection("inquire");
                }}
                className="rounded-full bg-[#525b44] hover:bg-[#434b37] px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-white transition-all"
              >
                Inquire About Similar Architecture
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* GALLERY PHOTO LIGHTBOX                                                    */}
      {/* ========================================================================= */}
      {activeGalleryPhoto && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm vale-animate-in"
          onClick={() => setActiveGalleryPhoto(null)}
        >
          <div
            className="relative max-w-xl w-full bg-[#fcfbf9] rounded-3xl p-6 text-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveGalleryPhoto(null)}
              className="absolute top-4 right-4 rounded-full border border-[#d6cebe] bg-white p-1 text-[#78716c]"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src={activeGalleryPhoto.src}
              alt={activeGalleryPhoto.title}
              className="w-full aspect-[4/3] object-cover rounded-2xl"
            />
            <h4 className="vale-serif text-lg font-semibold text-[#1c1917] mt-4">
              {activeGalleryPhoto.title}
            </h4>
            <p className="text-xs text-[#78716c] mt-1">
              {activeGalleryPhoto.subtitle}
            </p>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* CONSULTATION BOOKING MODAL                                                */}
      {/* ========================================================================= */}
      {consultationModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm vale-animate-in"
          onClick={() => setConsultationModalOpen(false)}
        >
          <div
            className="relative max-w-md w-full bg-[#fcfbf9] rounded-3xl p-6 sm:p-8 text-left border border-[#d6cebe] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setConsultationModalOpen(false)}
              className="absolute top-5 right-5 rounded-full border border-[#d6cebe] bg-white p-1 text-[#78716c]"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2 text-[#525b44]">
              <Calendar className="h-5 w-5" />
              <span className="text-xs font-bold uppercase tracking-widest">
                Private Consultation
              </span>
            </div>

            <h3 className="vale-serif text-2xl font-normal text-[#1c1917] mt-2">
              Book a Discovery Session
            </h3>
            <p className="text-xs text-[#78716c] mt-1.5 leading-relaxed">
              Reserve an exclusive 20-minute conceptual discovery call with our principal design studio.
            </p>

            <div className="mt-5 space-y-2">
              {[
                "Tuesday • 11:00 AM (PST)",
                "Wednesday • 02:00 PM (PST)",
                "Thursday • 10:30 AM (PST)",
                "Friday • 01:30 PM (PST)",
              ].map((slot) => (
                <button
                  key={slot}
                  onClick={() => {
                    alert(`Consultation booked for ${slot}. Our studio coordinator will send the calendar invitation.`);
                    setConsultationModalOpen(false);
                  }}
                  className="w-full p-3 rounded-xl border border-[#d6cebe] bg-white hover:border-[#525b44] hover:bg-[#f4efe4] text-xs font-semibold text-[#44403c] flex items-center justify-between transition-all"
                >
                  <span>{slot}</span>
                  <ArrowRight className="h-4 w-4 text-[#525b44]" />
                </button>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#e9e4d9] text-center">
              <button
                onClick={() => {
                  setConsultationModalOpen(false);
                  scrollToSection("inquire");
                }}
                className="text-xs text-[#525b44] font-semibold hover:underline"
              >
                Or submit a detailed written brief &rarr;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ValeInteriorStudio;
