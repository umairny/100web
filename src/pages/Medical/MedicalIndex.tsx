import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  Award,
  CalendarCheck,
  CheckCircle2,
  Clock,
  ExternalLink,
  Eye,
  FileText,
  Filter,
  Flame,
  Heart,
  HeartPulse,
  Info,
  Layers,
  LayoutGrid,
  MapPin,
  Phone,
  Search,
  ShieldCheck,
  Smile,
  Sparkles,
  Star,
  Stethoscope,
  TrendingUp,
  UserCheck,
  Users,
  X,
  Zap,
} from "lucide-react";
import { Container } from "../../components";
import { imageUrl } from "../../assets/optimized";
import { medicalWebsites, WebsiteDesign } from "../../data/websites";
import { useFavorites } from "../../utils/favorites";
import { prefetchRoute } from "../../utils/routePrefetch";

// Direct high-resolution showcase image mappings from public/images/medical/
const practiceCoverImages: Record<string, string> = {
  "harbor-health-clinic": "medical/harbor-health.webp",
  "brightpath-pediatrics": "medical/brightpath-pediatrics.webp",
  "northstar-dental": "medical/northstar-dental.webp",
  "clearview-optometry": "medical/clearview-optomety.webp",
  "renew-physical-therapy": "medical/renew-physical.webp",
  "mindwell-counseling": "medical/mindwell-counseling.webp",
  "harbor-urgent-care": "medical/harbor-urgent-care.webp",
  "willow-womens-health": "medical/willow-women-health.webp",
  "pulseheart-cardiology": "medical/pulseheart-cardiology.webp",
  "clearskin-dermatology": "medical/clearskin-dermatology.webp",
};

// Rich practice metadata to enhance the UI/UX of each card
interface PracticeMetadata {
  specialtyBadge: string;
  tagline: string;
  signatureFeature: string;
  keyHighlights: string[];
  filterCategory: "primary" | "specialized" | "wellness" | "urgent-dental";
  statLabel: string;
  statValue: string;
}

const practiceMetadataMap: Record<string, PracticeMetadata> = {
  "harbor-health-clinic": {
    specialtyBadge: "Primary Care & Family Medicine",
    tagline: "Unhurried, compassionate primary care for lifelong family health.",
    signatureFeature: "Interactive Care Plan Triage & Provider Match",
    keyHighlights: ["Same-Day Visits", "100% In-Network PPO", "Preventative Care"],
    filterCategory: "primary",
    statLabel: "Patient Satisfaction",
    statValue: "99.2%",
  },
  "brightpath-pediatrics": {
    specialtyBadge: "Pediatrics & Child Wellness",
    tagline: "Playful, tear-free pediatric medicine with interactive CDC milestones.",
    signatureFeature: "Child Milestone Tracker & Age Playground Hero",
    keyHighlights: ["Sensory-Calm Rooms", "FAAP Pediatricians", "Newborn Care"],
    filterCategory: "primary",
    statLabel: "Gentle Care Visits",
    statValue: "12,400+",
  },
  "northstar-dental": {
    specialtyBadge: "Architectural & Cosmetic Dentistry",
    tagline: "Luxury dental spa combining 3D imaging with anxiety-free comfort.",
    signatureFeature: "Interactive Smile Reveal Slider & Sensory Spa Tour",
    keyHighlights: ["Digital Impressions", "Noise-Canceling Audio", "Same-Day Crowns"],
    filterCategory: "urgent-dental",
    statLabel: "Smile Transformations",
    statValue: "4,800+",
  },
  "clearview-optometry": {
    specialtyBadge: "Boutique Optical & Medical Eye Care",
    tagline: "Curated independent eyewear paired with ultra-wide Optomap 200° retina imaging.",
    signatureFeature: "Interactive Face Shape Frame Matcher & Optomap 200°",
    keyHighlights: ["Zero-Dilation Scans", "Bespoke Eyewear", "Dry Eye Spa"],
    filterCategory: "specialized",
    statLabel: "Designer Frames",
    statValue: "650+",
  },
  "renew-physical-therapy": {
    specialtyBadge: "Orthopedic & Sports Physical Therapy",
    tagline: "Evidence-based movement therapy built for joint recovery and active longevity.",
    signatureFeature: "Interactive Recovery Plan Generator & 4-Stage Pathway",
    keyHighlights: ["1-on-1 DPT Care", "Blood Flow Restriction", "Gait Lab"],
    filterCategory: "wellness",
    statLabel: "Return-To-Sport Rate",
    statValue: "96.4%",
  },
  "mindwell-counseling": {
    specialtyBadge: "Mental Health & Psychotherapy",
    tagline: "Warm, confidential outpatient counseling and secure HIPAA teletherapy.",
    signatureFeature: "Confidential Match Intake & Provider Specialization Matrix",
    keyHighlights: ["Licensed Therapists", "Evening Appointments", "CBT / EMDR"],
    filterCategory: "wellness",
    statLabel: "Confidential Sessions",
    statValue: "100%",
  },
  "harbor-urgent-care": {
    specialtyBadge: "Immediate & Walk-In Medicine",
    tagline: "Rapid non-emergency urgent care with live digital wait tracking and on-site lab.",
    signatureFeature: "Live Digital Wait-Time Tracker & Reserve-A-Spot Flow",
    keyHighlights: ["Open 7 Days/Week", "On-Site Digital X-Ray", "Point-of-Care Lab"],
    filterCategory: "urgent-dental",
    statLabel: "Avg Door-To-Doctor",
    statValue: "< 15 Min",
  },
  "willow-womens-health": {
    specialtyBadge: "Obstetrics & Comprehensive Gynecology",
    tagline: "Holistic, empowering women's health across all stages of life and motherhood.",
    signatureFeature: "Trimester Care Pathway & Supportive Online Intake",
    keyHighlights: ["All-Female Provider Team", "3D/4D Ultrasound", "Hormone Health"],
    filterCategory: "primary",
    statLabel: "Healthy Deliveries",
    statValue: "3,200+",
  },
  "pulseheart-cardiology": {
    specialtyBadge: "Cardiovascular Medicine & Diagnostics",
    tagline: "Board-certified heart care with 14-day continuous Holter patch and CT calcium scoring.",
    signatureFeature: "Full-Page Hero Carousel & Live ECG Telemetry HUD",
    keyHighlights: ["45-Min Consults", "IAC-Accredited Lab", "ApoB Prevention"],
    filterCategory: "specialized",
    statLabel: "ECG Turnaround",
    statValue: "Same-Day",
  },
  "clearskin-dermatology": {
    specialtyBadge: "Medical & Aesthetic Dermatology",
    tagline: "Comprehensive skin health, full-body mole mapping, and advanced laser aesthetics.",
    signatureFeature: "Interactive Skin Concern Navigator & Cosmetic Assessment",
    keyHighlights: ["Board-Certified Derms", "Mohs Micrographic", "Custom Skincare"],
    filterCategory: "specialized",
    statLabel: "Melanoma Interceptions",
    statValue: "99.8%",
  },
};

const carePillars = [
  {
    title: "Trust Before Action",
    desc: "Patients verify board certifications, credentials, and facility photos before booking. Every clinic features named doctors and unhurried appointment models.",
    icon: ShieldCheck,
    tag: "Clinical Authority",
    color: "from-teal-500/20 to-emerald-500/10 text-teal-400 border-teal-500/30",
  },
  {
    title: "Interactive Patient Tools",
    desc: "From child age-stage milestones and frame stylists to recovery calculators and cardiac risk screeners, each clinic replaces static forms with engaging utilities.",
    icon: Sparkles,
    tag: "Modern UX",
    color: "from-rose-500/20 to-pink-500/10 text-rose-400 border-rose-500/30",
  },
  {
    title: "In-Network Transparency",
    desc: "Eliminating medical bill anxiety through transparent lists of accepted insurance carriers (Medicare, BCBS, Aetna, Cigna, United, FSA/HSA) on every page.",
    icon: FileText,
    tag: "Financial Clarity",
    color: "from-cyan-500/20 to-blue-500/10 text-cyan-400 border-cyan-500/30",
  },
  {
    title: "Mobile-First Triage",
    desc: "Sticky mobile concierge docks, 1-touch telephone dialing, emergency chest pain alerts, and smooth section navigation engineered for urgent touchscreens.",
    icon: Zap,
    tag: "Fluid Responsive",
    color: "from-amber-500/20 to-yellow-500/10 text-amber-400 border-amber-500/30",
  },
];

const designHighlights = [
  {
    title: "Harbor Health Clinic Interior",
    category: "Primary Care",
    image: "medical/harbor/clinic-interior.webp",
    desc: "Biophilic architectural waiting rooms that calm pre-appointment nervousness.",
  },
  {
    title: "ClearView Digital Eyewear Suite",
    category: "Optometry Studio",
    image: "medical/clearview/appointment.webp",
    desc: "Direct online digital optical booking with frame stylist consultation.",
  },
  {
    title: "NorthStar Modern Dental Team",
    category: "Cosmetic Dentistry",
    image: "medical/northstar/dental-team.webp",
    desc: "Warm provider introductions and sensory spa amenities before treatment.",
  },
];

export function MedicalIndex() {
  const { favoriteIds, toggle } = useFavorites();
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const liveWebsites = medicalWebsites.filter(
    (website) => website.status === "completed" || website.status === "live"
  );

  const shortlistedCount = liveWebsites.filter((w) => favoriteIds.includes(w.id)).length;

  // Filter & search logic
  const filteredWebsites = useMemo(() => {
    return liveWebsites.filter((website) => {
      const meta = practiceMetadataMap[website.id];
      const matchesFilter =
        activeFilter === "all" ||
        (activeFilter === "shortlist" && favoriteIds.includes(website.id)) ||
        (meta && meta.filterCategory === activeFilter);

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        website.title.toLowerCase().includes(query) ||
        website.shortDescription.toLowerCase().includes(query) ||
        (meta &&
          (meta.specialtyBadge.toLowerCase().includes(query) ||
            meta.tagline.toLowerCase().includes(query) ||
            meta.signatureFeature.toLowerCase().includes(query) ||
            meta.keyHighlights.some((h) => h.toLowerCase().includes(query))));

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery, favoriteIds, liveWebsites]);

  return (
    <main className="min-h-screen bg-[#070f1a] font-sans text-slate-100 antialiased selection:bg-teal-500 selection:text-white">
      {/* ========================================================================= */}
      {/* 1. TOP GLOBAL SHOWCASE BREADCRUMB & CONTEXT BAR                           */}
      {/* ========================================================================= */}
      <div className="relative z-40 border-b border-white/10 bg-[#050b14]/90 backdrop-blur-md px-3 sm:px-6 py-2.5 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link
            to="/"
            className="group inline-flex items-center gap-1.5 font-bold text-teal-400 hover:text-white transition-colors"
          >
            <span className="transition-transform group-hover:-translate-x-0.5">←</span>
            <span>100Web Showcase Directory</span>
          </Link>

          <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-teal-500/10 border border-teal-500/25 px-2.5 py-0.5 text-teal-300 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400 animate-pulse" />
              10 / 10 Specialty Practices Live
            </span>
            <span className="text-slate-600 hidden sm:inline">|</span>
            <a
              href="#live-concepts"
              className="hidden sm:inline text-slate-400 hover:text-white transition-colors"
            >
              Browse Practices
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. MODERN CLINICAL HERO SECTION                                           */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 sm:pt-18 pb-16 sm:pb-24 border-b border-white/10">
        {/* Soft Ambient Radiance Orbs */}
        <div className="pointer-events-none absolute -top-40 right-1/4 h-[600px] w-[600px] rounded-full bg-teal-500/10 blur-[180px]" />
        <div className="pointer-events-none absolute top-40 -left-20 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[160px]" />
        <div className="pointer-events-none absolute bottom-0 right-10 h-[450px] w-[450px] rounded-full bg-rose-600/8 blur-[160px]" />

        <Container>
          <div className="mx-auto max-w-4xl text-center space-y-6">
            {/* Category Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs text-teal-200 backdrop-blur-md">
              <HeartPulse size={14} className="text-teal-400 animate-pulse" />
              <span className="font-extrabold uppercase tracking-wider text-[11px] text-white">
                Medical & Healthcare Collection
              </span>
              <span className="text-teal-400">·</span>
              <span className="text-slate-300">10 Fully Interactive Practices</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-[1.08]">
              A stylish medical design library with{" "}
              <span className="bg-gradient-to-r from-teal-300 via-cyan-300 to-rose-300 bg-clip-text text-transparent">
                softer patient paths.
              </span>
            </h1>

            {/* Subtext */}
            <p className="mx-auto max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore 10 bespoke healthcare websites engineered for patient trust, rapid clinical triage, transparent in-network billing, and unhurried specialty care. 100% responsive and production-ready.
            </p>

            {/* Trust Metrics Bento Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 max-w-3xl mx-auto">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md text-left">
                <div className="text-2xl sm:text-3xl font-black text-teal-400">10 / 10</div>
                <div className="text-xs font-bold text-white mt-0.5">Live Practices</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Zero placeholders</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md text-left">
                <div className="text-2xl sm:text-3xl font-black text-cyan-400">100%</div>
                <div className="text-xs font-bold text-white mt-0.5">Mobile Optimized</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Safe-area dock navigation</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md text-left">
                <div className="text-2xl sm:text-3xl font-black text-rose-400">Interactive</div>
                <div className="text-xs font-bold text-white mt-0.5">Clinical Tools</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Milestones, telemetry, CAC</div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-3.5 backdrop-blur-md text-left">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">In-Network</div>
                <div className="text-xs font-bold text-white mt-0.5">Billing Clarity</div>
                <div className="text-[10px] text-slate-400 mt-0.5">Medicare, BCBS & FSA/HSA</div>
              </div>
            </div>

            {/* Live Search & Filter Bar */}
            <div className="pt-4 max-w-2xl mx-auto">
              <div className="relative flex items-center">
                <Search size={18} className="absolute left-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search clinics, symptoms, or specialties (e.g., cardiology, pediatric, dental, urgent)..."
                  className="w-full rounded-2xl border border-white/20 bg-white/10 pl-11 pr-10 py-3.5 text-sm text-white placeholder:text-slate-400 focus:border-teal-400 focus:bg-white/15 focus:outline-hidden transition-all shadow-lg shadow-black/20"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                    className="absolute right-3.5 p-1 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. INTERACTIVE CATEGORY TABS & SHORTLIST FILTER                           */}
      {/* ========================================================================= */}
      <section className="sticky top-0 z-30 border-b border-white/10 bg-[#070f1a]/95 backdrop-blur-xl py-3">
        <Container>
          <div className="flex flex-wrap items-center justify-between gap-3">
            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {[
                { id: "all", label: "All Practices", count: liveWebsites.length },
                { id: "primary", label: "Primary & Family", count: 3 },
                { id: "specialized", label: "Specialty & Diagnostics", count: 3 },
                { id: "wellness", label: "Therapy & Mental Health", count: 2 },
                { id: "urgent-dental", label: "Urgent Care & Dental", count: 2 },
              ].map((tab) => {
                const isActive = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setActiveFilter(tab.id)}
                    className={`rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                      isActive
                        ? "bg-teal-500 text-slate-950 shadow-md shadow-teal-500/20"
                        : "bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5"
                    }`}
                  >
                    {tab.label}
                    <span
                      className={`ml-1.5 rounded-full px-1.5 py-0.2 text-[10px] ${
                        isActive ? "bg-slate-950/20 text-slate-950" : "bg-white/10 text-slate-400"
                      }`}
                    >
                      {tab.count}
                    </span>
                  </button>
                );
              })}

              {/* Shortlist Filter Tab */}
              <button
                type="button"
                onClick={() => setActiveFilter(activeFilter === "shortlist" ? "all" : "shortlist")}
                className={`inline-flex items-center gap-1.5 rounded-xl px-3 py-1.5 text-xs font-bold transition-all ${
                  activeFilter === "shortlist"
                    ? "bg-rose-500 text-white shadow-md shadow-rose-500/30"
                    : "bg-white/5 text-rose-300 hover:bg-white/10 border border-white/5"
                }`}
              >
                <Heart size={13} className={activeFilter === "shortlist" ? "fill-white" : ""} />
                <span>Shortlist ({shortlistedCount})</span>
              </button>
            </div>

            {/* Results Count & Quick Jump */}
            <div className="text-xs text-slate-400 flex items-center gap-2">
              <span>
                Showing <strong className="text-white">{filteredWebsites.length}</strong> of{" "}
                {liveWebsites.length} practices
              </span>
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="text-teal-400 hover:underline font-semibold"
                >
                  Clear filter
                </button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. CLINICAL SHOWCASE CARDS GRID (#live-concepts)                          */}
      {/* ========================================================================= */}
      <section id="live-concepts" className="py-12 sm:py-20">
        <Container>
          {filteredWebsites.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-white/20 bg-white/5 p-12 text-center text-white space-y-4 max-w-md mx-auto my-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 mx-auto text-slate-400">
                <Search size={28} />
              </div>
              <h3 className="text-xl font-black text-white">No matching practices found</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {activeFilter === "shortlist"
                  ? "You haven't saved any clinics to your shortlist yet. Click the heart icon on any card to save it."
                  : `No clinical practices matched "${searchQuery}". Try searching for cardiology, pediatrics, dental, therapy, or urgent care.`}
              </p>
              <button
                type="button"
                onClick={() => {
                  setActiveFilter("all");
                  setSearchQuery("");
                }}
                className="rounded-xl bg-teal-500 px-5 py-2.5 text-xs font-bold text-slate-950 hover:bg-teal-400 transition-colors"
              >
                View All 10 Practices
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {filteredWebsites.map((website, index) => {
                const isFavorited = favoriteIds.includes(website.id);
                const routePath = `/medical/${website.slug}`;
                const meta = practiceMetadataMap[website.id];
                const coverImage = practiceCoverImages[website.id] || website.image;

                return (
                  <article
                    key={website.id}
                    className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-[#0d1827] overflow-hidden transition-all duration-300 hover:border-teal-500/40 hover:shadow-2xl hover:shadow-teal-950/40 hover:-translate-y-1"
                  >
                    {/* Top Device Preview Showcase Image */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
                      <img
                        src={imageUrl(coverImage)}
                        alt={`${website.title} website homepage preview`}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Vignette Overlay for Crisp Readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1827] via-transparent to-black/40" />

                      {/* Top Badges Row: Concept Number & Shortlist Button */}
                      <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                        <div className="flex items-center gap-1.5">
                          <span className="rounded-full bg-slate-950/80 border border-white/20 px-2.5 py-0.5 text-[10px] font-black uppercase tracking-wider text-teal-300 backdrop-blur-md">
                            #{String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="hidden xs:inline-flex items-center gap-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 px-2 py-0.5 text-[10px] font-bold text-emerald-300 backdrop-blur-md">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Live Demo
                          </span>
                        </div>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggle(website.id);
                          }}
                          title={isFavorited ? "Remove from shortlist" : "Save to shortlist"}
                          className={`flex h-8 w-8 items-center justify-center rounded-full backdrop-blur-md border transition-all duration-200 active:scale-90 ${
                            isFavorited
                              ? "bg-rose-500 text-white border-rose-400 shadow-md shadow-rose-900/40"
                              : "bg-black/50 text-slate-300 border-white/20 hover:text-rose-400 hover:bg-black/70"
                          }`}
                        >
                          <Heart size={14} className={isFavorited ? "fill-white" : ""} />
                        </button>
                      </div>

                      {/* Bottom Image Specialty Tag */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between z-10">
                        <span className="rounded-lg bg-[#0d1827]/90 border border-white/15 px-2.5 py-1 text-[11px] font-bold text-slate-200 backdrop-blur-md truncate">
                          {meta?.specialtyBadge || website.marketLabel || "Specialized Practice"}
                        </span>
                        {meta?.statValue && (
                          <span className="hidden sm:inline-block text-[10px] font-bold text-teal-300 bg-teal-950/80 border border-teal-500/30 px-2 py-0.5 rounded-md backdrop-blur-sm">
                            {meta.statLabel}: <strong>{meta.statValue}</strong>
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 p-5 sm:p-6 flex flex-col justify-between space-y-4">
                      <div className="space-y-2.5">
                        <div className="flex items-center justify-between gap-2">
                          <h2 className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-teal-300 transition-colors">
                            {website.title}
                          </h2>
                          <div
                            className="h-3 w-3 rounded-full shrink-0"
                            style={{ backgroundColor: website.colors.primary }}
                            title={`Primary brand color: ${website.colors.primary}`}
                          />
                        </div>

                        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed line-clamp-2">
                          {meta?.tagline || website.shortDescription}
                        </p>

                        {/* Signature Interactive Feature Pill */}
                        {meta?.signatureFeature && (
                          <div className="rounded-xl border border-teal-500/25 bg-teal-500/10 p-2.5 text-xs text-teal-200">
                            <span className="text-[10px] uppercase font-bold text-teal-400 block tracking-wider">
                              Signature Experience:
                            </span>
                            <span className="font-semibold text-white mt-0.5 block">
                              {meta.signatureFeature}
                            </span>
                          </div>
                        )}

                        {/* Highlight Badges */}
                        {meta?.keyHighlights && (
                          <div className="flex flex-wrap gap-1.5 pt-1">
                            {meta.keyHighlights.map((highlight, hIdx) => (
                              <span
                                key={hIdx}
                                className="rounded-md bg-white/5 border border-white/10 px-2 py-0.5 text-[10px] font-medium text-slate-300"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Primary CTA Link Button */}
                      <div className="pt-2 border-t border-white/10">
                        <Link
                          to={routePath}
                          onMouseEnter={() => prefetchRoute(routePath)}
                          onTouchStart={() => prefetchRoute(routePath)}
                          className="w-full flex items-center justify-between rounded-xl bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-400 hover:to-cyan-400 px-4 py-3 text-xs font-black text-slate-950 shadow-md shadow-teal-950/30 transition-all active:scale-98 group/btn"
                        >
                          <span className="flex items-center gap-2">
                            <span>Open Practice Website</span>
                          </span>
                          <ArrowRight
                            size={15}
                            className="transition-transform group-hover/btn:translate-x-1"
                          />
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. HEALTHCARE UX PILLARS & ARCHITECTURE DESIGN                            */}
      {/* ========================================================================= */}
      <section className="border-t border-white/10 bg-[#050b14] py-16 sm:py-24 text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-12 sm:mb-16">
            <span className="rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-wider text-teal-300">
              Human-First Healthcare Architecture
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Built on 4 pillars of patient trust & clarity.
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Medical searches are sensitive. These designs prioritize reassurance, transparent clinical protocols, and stress-free access paths over high-pressure marketing tactics.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {carePillars.map((pillar, pIdx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={pIdx}
                  className="rounded-3xl border border-white/10 bg-[#0a1524] p-6 space-y-4 flex flex-col justify-between hover:border-white/20 transition-colors"
                >
                  <div className="space-y-3">
                    <div
                      className={`inline-flex p-3 rounded-2xl border bg-gradient-to-br ${pillar.color}`}
                    >
                      <Icon size={22} />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                        {pillar.tag}
                      </span>
                      <h3 className="text-lg font-black text-white mt-0.5">{pillar.title}</h3>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. CLINICAL DESIGN SYSTEM & INTERIOR PHOTOGRAPHY GALLERY                  */}
      {/* ========================================================================= */}
      <section className="border-t border-white/10 bg-[#070f1a] py-16 sm:py-24">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3 max-w-xl text-left">
              <span className="text-xs font-black uppercase tracking-wider text-teal-400">
                Visual Comfort & Reassurance
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Authentic spaces that reduce clinical apprehension.
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Warm lighting, biophilic architecture, and unhurried physician spaces give patients reassurance before they step into the clinic.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <a
                href="#live-concepts"
                className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 hover:bg-white/10 px-4 py-2 text-xs font-bold text-slate-200 transition-colors"
              >
                <span>Back to Practice Grid</span>
                <ArrowRight size={13} />
              </a>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {designHighlights.map((highlight, hIdx) => (
              <div
                key={hIdx}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0a1524] flex flex-col justify-between hover:border-teal-500/30 transition-all duration-300"
              >
                <div className="aspect-[16/11] overflow-hidden bg-slate-900 relative">
                  <img
                    src={imageUrl(highlight.image)}
                    alt={highlight.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1524] via-transparent to-transparent" />
                  <span className="absolute top-3 left-3 rounded-md bg-black/60 border border-white/20 px-2 py-0.5 text-[10px] font-bold text-teal-300 backdrop-blur-md">
                    {highlight.category}
                  </span>
                </div>
                <div className="p-5 space-y-2 text-left">
                  <h3 className="text-base font-black text-white">{highlight.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{highlight.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. MEDICAL DIRECTORY ROADMAP COMPLETE FOOTER                              */}
      {/* ========================================================================= */}
      <footer className="border-t border-white/10 bg-[#040810] py-12 sm:py-16 text-slate-400 text-xs">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 text-center sm:text-left">
            <div className="space-y-1">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <HeartPulse size={18} className="text-teal-400" />
                <span className="text-base font-black text-white tracking-tight">
                  100WEB MEDICAL SHOWCASE
                </span>
              </div>
              <p className="text-slate-400 text-xs">
                A modern healthcare design library spanning 10 medical specialties.
              </p>
            </div>

            <div className="flex flex-wrap justify-center sm:justify-end gap-3 text-xs font-semibold">
              <Link to="/" className="text-slate-300 hover:text-white transition-colors">
                Main Showcase
              </Link>
              <span>·</span>
              <a href="#live-concepts" className="text-slate-300 hover:text-white transition-colors">
                Top of Directory
              </a>
              <span>·</span>
              <span className="text-teal-400 font-bold">10 Practices Live</span>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-slate-500 text-center sm:text-left">
            <p>© {new Date().getFullYear()} 100Web Medical Design Systems. Built for high-trust healthcare experiences.</p>
            <div className="flex gap-3">
              <span>WCAG 2.1 AA Compliant</span>
              <span>·</span>
              <span>HIPAA-Ready Architecture</span>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  );
}
