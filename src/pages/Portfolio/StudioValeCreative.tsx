import React, { useState, useMemo, useEffect } from 'react'
import {
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
  Sparkles,
  Sliders,
  X,
  Menu,
  Layers,
  ExternalLink,
  Clock,
  ShieldCheck,
  Send,
  Zap,
  Award,
  Compass,
  Palette,
  Laptop,
  Check,
  Star,
  FileText,
  Eye,
  Maximize2,
  Box,
  Image as ImageIcon,
} from 'lucide-react'
import { Container } from '../../components'

interface ProjectDossier {
  id: string
  title: string
  client: string
  category: 'brand' | 'retail' | 'digital'
  tagline: string
  year: string
  impact: string
  image: string
  description: string
  deliverables: string[]
  metrics: string[]
  technologies: string[]
}

const portfolioProjects: ProjectDossier[] = [
  {
    id: 'northline',
    title: 'Northline Identity & Architecture',
    client: 'Northline Property Group',
    category: 'brand',
    tagline: 'A sharper, authoritative story for a premier architectural and land development team.',
    year: '2025',
    impact: '+185% Qualified Buyer Inquiries',
    image: '/images/signal/quantum-stationery-deck.webp',
    description:
      'Northline required an editorial, mathematically structured brand identity to stand apart from generic real estate brokers. Studio Vale delivered an architectural vector mark, foil-stamped prospectus collateral, bespoke typography rules, and a luxury digital landing environment.',
    deliverables: [
      'Comprehensive Brand Guideline & Grid Taxonomy',
      'Foil-Stamped Investment Prospectus & Stationery',
      'Editorial Responsive Web Architecture',
      'Signage, Wayfinding, and On-Site Presentation Systems',
    ],
    metrics: [
      '+185% Increase in qualified enterprise inquiries',
      'Decreased sales cycle by 3 weeks on prime parcels',
      'Recognized with 2025 Property Brand Design Award',
    ],
    technologies: ['Brand Strategy', 'Figma Design System', 'Tailwind/React', 'Print Production'],
  },
  {
    id: 'cartbloom',
    title: 'CartBloom Curated Retail',
    client: 'CartBloom Apothecary',
    category: 'retail',
    tagline: 'Storefront architecture, tactile packaging, and campaign direction for a curated shop.',
    year: '2025',
    impact: '+34% Checkout Conversion',
    image: '/images/signal/aurora-packaging.webp',
    description:
      'CartBloom curates bespoke scents, handcrafted ceramics, and apothecary goods. Studio Vale unified their physical unboxing experience with an intuitive online commerce platform, turning casual shoppers into brand advocates.',
    deliverables: [
      'Embossed Box Packaging & Glass Jar Label Hierarchy',
      'Bespoke E-Commerce Storefront UX & Cart Architecture',
      'Editorial Product Art Direction & Campaign Photography Guidelines',
      'Digital Design Tokens from Packaging to Web',
    ],
    metrics: [
      '+34% Lift in mobile checkout conversion rate',
      '+42% Higher average order value (AOV) on bundled kits',
      'Sub-800ms page load speeds across catalog',
    ],
    technologies: ['Packaging Design', 'E-Commerce UX', 'Motion Design', 'Design Tokens'],
  },
  {
    id: 'pacific',
    title: 'Pacific Heights Spatial Living',
    client: 'Pacific Heights Residences',
    category: 'retail',
    tagline: 'Luxury spatial branding, architectural monograph, and private investor digital portal.',
    year: '2025',
    impact: '100% Pre-Sold Residences',
    image: '/images/vale/pacific-heights-1.webp',
    description:
      'For an exclusive collection of San Francisco hillside residences, Studio Vale conceived a quiet, material-led identity system. Combining linen-bound architectural monographs, tactile brass signage, and an invite-only virtual walkthrough suite.',
    deliverables: [
      'Cloth-Bound Architectural Monograph & Material Board',
      'Bespoke Brass Signage & Floor Plate Wayfinding System',
      'Private Buyer Digital Portal with 3D Spatial Walkthroughs',
      'Editorial Launch Campaign Featured in Architectural Digest',
    ],
    metrics: [
      '100% of luxury units contracted prior to public groundbreaking',
      'Featured across 5 global architectural publications',
      'Highest price per square foot recorded in district history',
    ],
    technologies: ['Spatial Branding', 'Architectural Monograph', 'Material Spec', 'Digital Portal'],
  },
  {
    id: 'harbor',
    title: 'Harbor Health Clinical Platform',
    client: 'Harbor Integrative Medicine',
    category: 'digital',
    tagline: 'Patient-first digital ecosystem, service taxonomy, and frictionless appointment booking.',
    year: '2024',
    impact: '4.2m → 45s Booking Velocity',
    image: '/images/cedar/case-healthtech.webp',
    description:
      'Medical portals often feel clinical, cold, and frustrating. We re-architected Harbor Health from the ground up: creating a calm Scandinavian aesthetic, intuitive provider search, and an accessible patient onboarding flow.',
    deliverables: [
      'End-to-End Patient Flow & Appointment Scheduling Portal',
      'WCAG 2.1 AAA Compliant High-Contrast Design System',
      'Provider Credentialing & Specialty Hierarchy System',
      'Interactive Care Calculator & Patient Dashboard',
    ],
    metrics: [
      'Average booking time reduced from 4.2 minutes to 45 seconds',
      '99.4% Patient satisfaction rating on initial intake form',
      'Zero accessibility violations across all viewport tests',
    ],
    technologies: ['Healthcare UX', 'Design System', 'Accessibility AAA', 'Responsive Web'],
  },
  {
    id: 'synapse',
    title: 'Synapse Neural Graph System',
    client: 'Synapse Intelligence Systems',
    category: 'brand',
    tagline: 'Mathematical brand identity, design tokens, and observability UI for enterprise AI.',
    year: '2025',
    impact: '$180M Series B Rebrand',
    image: '/images/signal/synapse-brand-identity.webp',
    description:
      'To command enterprise trust among Fortune 500 CTOs, Synapse needed an identity rooted in mathematical precision. We engineered a hexagonal vector construct, zero-trust token system, and telemetry console UI.',
    deliverables: [
      'Hexagonal Vector Identity & Modular Mark System',
      'Dark-Mode Enterprise Observability Console Architecture',
      'Series B Pitch Deck, Whitepaper & Keycard Collateral',
      'Cross-Platform Token Taxonomy (Figma to Code)',
    ],
    metrics: [
      'Announced $180M Series B Valuation post-rebrand',
      'Adopted across 40+ engineering sub-teams globally',
      '99.98% Token adherence across production surfaces',
    ],
    technologies: ['Enterprise Brand', 'Telemetry UI', 'Vector Geometry', 'Developer Experience'],
  },
  {
    id: 'quantum',
    title: 'Quantum Financial Core',
    client: 'Quantum Capital Technologies',
    category: 'digital',
    tagline: 'High-density institutional liquidity terminal, real-time charting, and token architecture.',
    year: '2025',
    impact: '$1.4B Daily Cleared Volume',
    image: '/images/signal/quantum-dashboard.webp',
    description:
      'Quantum required a zero-latency trading and asset management interface. Studio Vale stripped away legacy UI clutter in favor of an ergonomic dark/light terminal with custom micro-typography, sub-pixel grid alignment, and instant order execution workflows.',
    deliverables: [
      'High-Density Multi-Monitor Trading Desktop Interface',
      'Mathematical 8pt Spatial Token System with Code Sync',
      'Interactive Real-Time Liquidity Charting Modules',
      'Unified Mobile Management & Biometric Authorization Flow',
    ],
    metrics: [
      'Over $1.4B in average daily transaction volume supported',
      'Reduced trader visual fatigue scores by 44% in lab testing',
      'Sub-16ms render performance across multi-chart dashboards',
    ],
    technologies: ['Fintech UX', 'High-Density UI', 'Design Tokens', 'Performance Optimization'],
  },
]

const servicesList = [
  {
    id: 'brand',
    number: '01',
    title: 'Brand Direction & Systems',
    tag: 'FOUNDATIONAL IDENTITY',
    summary:
      'We craft strategic, uncompromising visual identities for teams ready to command premium market pricing and respect.',
    deliverables: [
      'Strategic market positioning & competitive moat analysis',
      'Primary vector mark, secondary emblems & responsive lockups',
      'Curated typography hierarchy & bespoke font pairing licenses',
      'Precision color architecture & accessibility contrast rules',
      'Complete digital & print brand guideline documentation',
    ],
    timeframe: '3 - 4 Weeks',
    idealFor: 'Startups launching new verticals or established teams outgrowing early DIY visuals.',
  },
  {
    id: 'web',
    number: '02',
    title: 'Digital Flagships & Web UX',
    tag: 'HIGH-CONVERTING EXPERIENCES',
    summary:
      'Bespoke digital platforms that present your work with editorial weight, lightning performance, and effortless conversion.',
    deliverables: [
      'Information architecture & customer journey wireframing',
      'High-fidelity editorial screen designs & micro-interactions',
      'Component-based design systems ready for engineering handoff',
      'Sub-second load optimization & search engine structure',
      'Interactive calculators, modals, and inquiry desks',
    ],
    timeframe: '4 - 6 Weeks',
    idealFor: 'Companies whose website is their primary enterprise sales and validation asset.',
  },
  {
    id: 'package',
    number: '03',
    title: 'The Unified Studio Sprint',
    tag: 'COMPREHENSIVE ALLIANCE',
    summary:
      'Our flagship combined engagement: both brand identity and web flagship engineered concurrently for maximum momentum.',
    deliverables: [
      'Everything in Brand Direction & Digital Flagships combined',
      'Investor deck, executive pitch templates, and NFC stationery',
      'Social campaign launch graphics & product teaser assets',
      'Dedicated Studio Vale creative director & sprint priority',
      '60-Day post-launch refinement and advisory check-ins',
    ],
    timeframe: '6 - 8 Weeks',
    idealFor: 'Decisive founders raising capital, launching flagships, or executing major pivots.',
  },
]

const materialVaultArtifacts = [
  {
    id: 'typography',
    title: 'Editorial Typography Hierarchy',
    category: 'Brand Architecture',
    image: '/images/signal/aurora-typography.webp',
    caption: 'Cormorant Garamond display pairing with Neue Haas Grotesk for tactile editorial presence.',
    specs: ['Display: Cormorant Garamond Semi-Bold', 'Body: Neue Haas Grotesk Text', 'Kerning: Optical Custom', 'Ramp: 12px to 96px Modular Scale'],
  },
  {
    id: 'packaging',
    title: 'Tactile Packaging & Unboxing',
    category: 'Physical Production',
    image: '/images/signal/aurora-packaging.webp',
    caption: 'Foil-stamped organic pulp boxes, linen dust covers, and apothecary label typography.',
    specs: ['Paper: G.F Smith Colorplan 350gsm', 'Finish: Matte Deboss + Micro-Foil', 'Sustainability: 100% Recycled Cotton', 'Batch: 5,000 Limited Run'],
  },
  {
    id: 'tokens',
    title: 'Mathematical Design Tokens',
    category: 'Design Systems',
    image: '/images/signal/quantum-design-tokens.webp',
    caption: 'Figma variable taxonomy mirrored directly into Tailwind CSS and React component tokens.',
    specs: ['Grid: Strict 8pt Spatial Architecture', 'Palettes: 6 Harmonized Chromatic Scales', 'Contrast: WCAG 2.1 AAA Compliant', 'Sync: GitHub Action Automated PRs'],
  },
  {
    id: 'spatial',
    title: 'Spatial Architecture & Materiality',
    category: 'Environmental Design',
    image: '/images/vale/gallery-1.webp',
    caption: 'Architectural finishes, stone selections, and tactile material boards for luxury developments.',
    specs: ['Stone: Calacatta Viola & Basalt', 'Metal: Brushed Gunmetal Brass', 'Lighting: 2700K Warm Museum Grade', 'Applications: Reception & Private Suites'],
  },
  {
    id: 'editorial',
    title: 'Editorial Art Direction & Campaign',
    category: 'Campaign Production',
    image: '/images/framelab/hero-studio-shoot.webp',
    caption: 'High-fashion studio shoot direction with calibrated film lighting and composition grids.',
    specs: ['Camera: Hasselblad H6D-100c Medium Format', 'Lighting: Broncolor Para 133 Diffused', 'Grading: Bespoke Kodachrome Film Profile', 'Output: Print Billboard & Ultra-HD Digital'],
  },
]

const processSteps = [
  {
    step: '01',
    phase: 'DISCOVER & FRAME',
    headline: 'Clarify the Project Fit Before Drawing a Single Pixel',
    description:
      'We dissect your competitive landscape, client psychology, offer mechanics, and strategic moats. We agree on measurable success criteria before entering Figma.',
    deliverable: 'Strategic Project Brief & Visual Northstar Blueprint',
  },
  {
    step: '02',
    phase: 'SHAPE & PROTOTYPE',
    headline: 'Iterate Rapidly in High Fidelity with Weekly Cadence',
    description:
      'We develop 2 distinct strategic directions with real content, typography, and interactive prototypes. You review living layouts, not isolated moodboards.',
    deliverable: 'Interactive Working Prototype & Full System Review',
  },
  {
    step: '03',
    phase: 'PACKAGE & LAUNCH',
    headline: 'Deliver Production-Grade Assets Ready for the World',
    description:
      'Pixel-perfect component tokens, responsive viewport checks, crisp print-ready vector packages, and engineer handoff notes ensure your launch is flawless.',
    deliverable: 'Complete Asset Vault, Guidelines & 60-Day Studio Warranty',
  },
]

const testimonials = [
  {
    quote:
      'Studio Vale did not just redesign our identity; they clarified who we were. Our average deal size doubled within four months of launching the new site and collateral.',
    name: 'Sarah Jenkins',
    title: 'Managing Partner, Northline Property Group',
    image: '/images/signal/client-sarah.webp',
    metric: '+185% Enterprise Deal Inquiries',
  },
  {
    quote:
      'The speed and taste level were unmatched. They bridged physical apothecary packaging and Shopify mobile UX seamlessly. Our customer repeat rate jumped by 40%.',
    name: 'Marcus Vance',
    title: 'Founder, CartBloom Retail',
    image: '/images/signal/client-marcus.webp',
    metric: '+34% Mobile Checkout Lift',
  },
  {
    quote:
      'For our ultra-prime Pacific Heights development, we needed an agency that understood quiet architectural luxury. Studio Vale delivered a monograph and web portal that sold out before ground broke.',
    name: 'James Sterling',
    title: 'Principal Developer, Sterling & Associates',
    image: '/images/vale/client-james.webp',
    metric: '100% Pre-Sold Residences',
  },
  {
    quote:
      'In healthcare, clarity is trust. Studio Vale eliminated every friction point in our booking flow. We achieved AAA accessibility with an editorial aesthetic.',
    name: 'Dr. Elena Rostova',
    title: 'Chief Medical Officer, Harbor Health',
    image: '/images/signal/client-elena.webp',
    metric: '45-Second Patient Intake Velocity',
  },
]

export function StudioValeCreative() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeCategory, setActiveCategory] = useState<'all' | 'brand' | 'retail' | 'digital'>('all')
  const [selectedProject, setSelectedProject] = useState<ProjectDossier | null>(null)

  // Hero Spotlight Interactive Switcher
  const [heroSpotlightIndex, setHeroSpotlightIndex] = useState<number>(0)
  const heroSpotlights = [
    {
      title: 'Northline Identity & Architecture',
      tag: 'FLAGSHIP IDENTITY',
      image: '/images/portfolio/studiovale.webp',
      badge: 'Bespoke Grid & Editorial Architecture',
      impact: '+185% Qualified Inquiries',
      duration: '4-Week Sprint',
      linkId: 'northline',
    },
    {
      title: 'CartBloom Curated Retail',
      tag: 'TACTILE PACKAGING',
      image: '/images/signal/aurora-packaging.webp',
      badge: 'Physical Unboxing & Shopify UX',
      impact: '+34% Checkout Lift',
      duration: '5-Week Sprint',
      linkId: 'cartbloom',
    },
    {
      title: 'Pacific Heights Spatial Living',
      tag: 'SPATIAL MONOGRAPH',
      image: '/images/vale/hero-living-room.webp',
      badge: 'Architectural Monograph & Monoliths',
      impact: '100% Pre-Sold Residences',
      duration: '6-Week Sprint',
      linkId: 'pacific',
    },
  ]

  // Interactive Scope & Brief Calculator State
  const [calcService, setCalcService] = useState<'brand' | 'web' | 'unified'>('unified')
  const [calcTimeline, setCalcTimeline] = useState<'standard' | 'accelerated' | 'phased'>('standard')
  const [calcAddons, setCalcAddons] = useState<string[]>(['tokens', 'pitch'])

  // Active Service Tab
  const [activeServiceId, setActiveServiceId] = useState<string>('package')

  // Active Material Vault Artifact
  const [activeArtifactId, setActiveArtifactId] = useState<string>('typography')

  // Active Testimonial
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState<number>(0)

  // Inquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: 'Unified Brand + Web Sprint',
    budget: '$25,000 - $45,000',
    timeline: 'Within 30 Days',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // Filtered projects
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return portfolioProjects
    return portfolioProjects.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  // Active artifact object
  const activeArtifact = useMemo(() => {
    return materialVaultArtifacts.find((a) => a.id === activeArtifactId) || materialVaultArtifacts[0]
  }, [activeArtifactId])

  // Dynamic estimate calculation
  const calculatedEstimate = useMemo(() => {
    let baseMin = 18000
    let baseMax = 28000
    let weeks = '4 - 5'

    if (calcService === 'brand') {
      baseMin = 14000
      baseMax = 22000
      weeks = '3 - 4'
    } else if (calcService === 'web') {
      baseMin = 16000
      baseMax = 26000
      weeks = '4 - 6'
    } else {
      baseMin = 28000
      baseMax = 44000
      weeks = '6 - 8'
    }

    if (calcTimeline === 'accelerated') {
      baseMin += 4000
      baseMax += 6000
      weeks = 'Accelerated ' + weeks
    }

    if (calcAddons.includes('tokens')) {
      baseMin += 2500
      baseMax += 3500
    }
    if (calcAddons.includes('pitch')) {
      baseMin += 3000
      baseMax += 4500
    }
    if (calcAddons.includes('motion')) {
      baseMin += 3500
      baseMax += 5000
    }

    return {
      min: baseMin.toLocaleString(),
      max: baseMax.toLocaleString(),
      weeks,
    }
  }, [calcService, calcTimeline, calcAddons])

  const toggleAddon = (id: string) => {
    setCalcAddons((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setFormSubmitted(true)
    }, 850)
  }

  // Handle Escape key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedProject(null)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="vale-creative-container min-h-screen text-[var(--vc-text)] selection:bg-[var(--vc-accent)] selection:text-[var(--vc-contrast)]">
      <style>{`
        /* ============================================================ */
        /* STUDIO VALE CREATIVE DESIGN SYSTEM (THEME ADAPTIVE)          */
        /* Default: Author Original Editorial Dark Scheme               */
        /* ============================================================ */
        .vale-creative-container {
          /* Original Palette: Deep Obsidian Charcoal #111827 & Sky Blue #38bdf8 */
          --vc-bg:             var(--theme-bg-base,    #111827);
          --vc-surface:        var(--theme-bg-surface, #0f172a);
          --vc-card:           var(--theme-bg-card,    #1e293b);
          --vc-card2:          var(--theme-bg-card-hover, #283548);
          --vc-card-rgb:       30, 41, 59;

          --vc-text:           var(--theme-text-primary,   #f8fafc);
          --vc-text-muted:     var(--theme-text-muted,     #cbd5e1);
          --vc-text-dim:       var(--theme-text-secondary, #94a3b8);

          --vc-border:         var(--theme-border, rgba(51, 65, 85, 0.7));
          --vc-border-subtle:  rgba(30, 41, 59, 0.6);

          --vc-accent:         var(--theme-accent-primary,       #38bdf8);
          --vc-accent-hover:   var(--theme-accent-primary-hover, #0ea5e9);
          --vc-accent-glow:    var(--theme-accent-glow,          rgba(56, 189, 248, 0.35));
          --vc-accent-sec:     var(--theme-accent-secondary,     #60a5fa);
          --vc-contrast:       #030712;

          --vc-nav-bg:         rgba(17, 24, 39, 0.90);
          --vc-hero-glow:      rgba(56, 189, 248, 0.12);

          font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          background-color: var(--vc-bg);
          color: var(--vc-text);
          transition: background-color 0.25s ease, color 0.25s ease;
        }

        /* ===== EXPLICIT DARK MOOD (AUTHOR ORIGINAL SCHEME) ===== */
        html.dark .vale-creative-container,
        body.dark .vale-creative-container,
        [data-theme-mood="dark"] .vale-creative-container,
        :root[data-theme-mood="dark"] .vale-creative-container,
        :root[data-theme-active="true"][data-theme-mood="dark"] .vale-creative-container,
        :root.dark .vale-creative-container {
          --vc-bg:             var(--theme-bg-base,    #111827);
          --vc-surface:        var(--theme-bg-surface, #0f172a);
          --vc-card:           var(--theme-bg-card,    #1e293b);
          --vc-card2:          var(--theme-bg-card-hover, #283548);
          --vc-card-rgb:       30, 41, 59;

          --vc-text:           var(--theme-text-primary,   #f8fafc);
          --vc-text-muted:     var(--theme-text-muted,     #cbd5e1);
          --vc-text-dim:       var(--theme-text-secondary, #94a3b8);

          --vc-border:         var(--theme-border, rgba(51, 65, 85, 0.7));
          --vc-border-subtle:  rgba(30, 41, 59, 0.6);

          --vc-accent:         var(--theme-accent-primary,       #38bdf8);
          --vc-accent-hover:   var(--theme-accent-primary-hover, #0ea5e9);
          --vc-accent-glow:    var(--theme-accent-glow,          rgba(56, 189, 248, 0.35));
          --vc-accent-sec:     var(--theme-accent-secondary,     #60a5fa);
          --vc-contrast:       #030712;

          --vc-nav-bg:         rgba(17, 24, 39, 0.90);
          --vc-hero-glow:      rgba(56, 189, 248, 0.12);
        }

        /* ===== EXPLICIT LIGHT MOOD (ARCHITECTURAL CRISP PAPER WHITE) ===== */
        html.light .vale-creative-container,
        body.light .vale-creative-container,
        [data-theme-mood="light"] .vale-creative-container,
        :root[data-theme-mood="light"] .vale-creative-container,
        :root[data-theme-active="true"][data-theme-mood="light"] .vale-creative-container,
        :root.light .vale-creative-container {
          --vc-bg:             var(--theme-bg-base,    #f8fafc);
          --vc-surface:        var(--theme-bg-surface, #f1f5f9);
          --vc-card:           var(--theme-bg-card,    #ffffff);
          --vc-card2:          var(--theme-bg-card-hover, #f8fafc);
          --vc-card-rgb:       255, 255, 255;

          --vc-text:           var(--theme-text-primary,   #0f172a);
          --vc-text-muted:     var(--theme-text-muted,     #334155);
          --vc-text-dim:       var(--theme-text-secondary, #64748b);

          --vc-border:         var(--theme-border, rgba(203, 213, 225, 0.85));
          --vc-border-subtle:  rgba(226, 232, 240, 0.9);

          --vc-accent:         #0284c7;
          --vc-accent-hover:   #0369a1;
          --vc-accent-glow:    rgba(2, 132, 199, 0.25);
          --vc-accent-sec:     #0ea5e9;
          --vc-contrast:       #ffffff;

          --vc-nav-bg:         rgba(248, 250, 252, 0.95);
          --vc-hero-glow:      rgba(2, 132, 199, 0.08);
        }

        /* Original Preset explicitly in Light Mode */
        [data-theme-preset="original"][data-theme-mood="light"] .vale-creative-container,
        [data-theme-preset="original"] html.light .vale-creative-container,
        html.light[data-theme-preset="original"] .vale-creative-container,
        html.light:not([data-theme-preset]) .vale-creative-container,
        :root:not([data-theme-preset])[data-theme-mood="light"] .vale-creative-container {
          --vc-accent:         #0284c7 !important;
          --vc-accent-hover:   #0369a1 !important;
          --vc-accent-glow:    rgba(2, 132, 199, 0.25) !important;
          --vc-accent-sec:     #0ea5e9 !important;
          --vc-contrast:       #ffffff !important;
        }

        /* Original Preset explicitly in Dark Mode */
        [data-theme-preset="original"][data-theme-mood="dark"] .vale-creative-container,
        [data-theme-preset="original"] html.dark .vale-creative-container,
        html.dark[data-theme-preset="original"] .vale-creative-container,
        html.dark:not([data-theme-preset]) .vale-creative-container,
        :root:not([data-theme-preset])[data-theme-mood="dark"] .vale-creative-container,
        :root:not([data-theme-preset]):not([data-theme-mood="light"]) .vale-creative-container {
          --vc-accent:         #38bdf8 !important;
          --vc-accent-hover:   #0ea5e9 !important;
          --vc-accent-glow:    rgba(56, 189, 248, 0.35) !important;
          --vc-accent-sec:     #60a5fa !important;
          --vc-contrast:       #030712 !important;
        }

        /* ===== Non-Original Preset Support: dynamic recoloring from Theme Selector ===== */
        [data-theme-preset]:not([data-theme-preset="original"]) .vale-creative-container,
        [data-theme-active="true"]:not([data-theme-preset="original"]) .vale-creative-container {
          --vc-accent:       var(--theme-accent-primary) !important;
          --vc-accent-hover: var(--theme-accent-primary-hover) !important;
          --vc-accent-glow:  var(--theme-accent-glow) !important;
          --vc-accent-sec:   var(--theme-accent-secondary) !important;
          --vc-contrast:     var(--theme-accent-contrast, #ffffff) !important;
        }

        /* ===== CAPSULE & BUTTON SYSTEM ===== */
        .vc-capsule-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 9999px;
          background: color-mix(in srgb, var(--vc-accent) 10%, transparent);
          border: 1px solid color-mix(in srgb, var(--vc-accent) 28%, transparent);
          color: var(--vc-accent);
          font-family: 'JetBrains Mono', monospace;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .vc-capsule-btn {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          border-radius: 9999px;
          background: var(--vc-card);
          border: 1px solid var(--vc-border);
          color: var(--vc-text-muted);
          font-family: 'JetBrains Mono', monospace;
          transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .vc-capsule-btn:hover {
          border-color: var(--vc-accent);
          color: var(--vc-text);
          transform: translateY(-1px);
        }

        .vc-capsule-btn-active {
          background: var(--vc-accent) !important;
          border-color: var(--vc-accent) !important;
          color: var(--vc-contrast) !important;
          font-weight: 700 !important;
          box-shadow: 0 4px 14px -2px var(--vc-accent-glow) !important;
        }

        .vc-primary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.625rem;
          border-radius: 9999px;
          background: var(--vc-accent);
          color: var(--vc-contrast);
          font-family: 'JetBrains Mono', monospace;
          font-weight: 700;
          font-size: 0.8125rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 18px -2px var(--vc-accent-glow);
          cursor: pointer;
          border: 1px solid var(--vc-accent);
        }

        .vc-primary-btn:hover {
          background: var(--vc-accent-hover);
          border-color: var(--vc-accent-hover);
          transform: translateY(-1px);
          box-shadow: 0 6px 24px -2px var(--vc-accent-glow);
        }

        .vc-outline-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.625rem;
          border-radius: 9999px;
          background: var(--vc-card);
          color: var(--vc-text);
          border: 1px solid var(--vc-border);
          font-family: 'JetBrains Mono', monospace;
          font-weight: 600;
          font-size: 0.8125rem;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
        }

        .vc-outline-btn:hover {
          border-color: var(--vc-accent);
          color: var(--vc-accent);
          transform: translateY(-1px);
        }

        /* ===== CARDS & ELEVATIONS ===== */
        .vc-card-glow {
          box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05), 0 0 1px 1px var(--vc-border);
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .vc-card-glow:hover {
          box-shadow: 0 12px 30px -4px rgba(0, 0, 0, 0.12), 0 0 0 1px var(--vc-accent);
          transform: translateY(-2px);
        }

        html.dark .vale-creative-container .vc-card-glow,
        [data-theme-mood="dark"] .vale-creative-container .vc-card-glow {
          box-shadow: 0 4px 24px -2px rgba(0, 0, 0, 0.4), 0 0 1px 1px var(--vc-border);
        }

        html.dark .vale-creative-container .vc-card-glow:hover,
        [data-theme-mood="dark"] .vale-creative-container .vc-card-glow:hover {
          box-shadow: 0 12px 36px -4px var(--vc-accent-glow), 0 0 0 1px var(--vc-accent);
        }

        /* ===== INPUT STYLING ===== */
        .vc-input {
          background: var(--vc-surface);
          border: 1px solid var(--vc-border);
          color: var(--vc-text);
          font-family: 'JetBrains Mono', monospace;
          transition: all 0.2s ease;
        }

        .vc-input::placeholder {
          color: var(--vc-text-dim);
          opacity: 0.7;
        }

        .vc-input option {
          background: var(--vc-card);
          color: var(--vc-text);
        }

        .vc-input:focus {
          background: var(--vc-card);
          border-color: var(--vc-accent);
          outline: none;
          box-shadow: 0 0 0 3px var(--vc-accent-glow);
        }

        /* Modal Animation */
        @keyframes vcModalIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }

        .vc-modal-anim {
          animation: vcModalIn 0.22s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* ========================================================================= */}
      {/* 1. STICKY BLUR NAVIGATION                                                 */}
      {/* ========================================================================= */}
      <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl border-b border-[var(--vc-border)] bg-[var(--vc-nav-bg)] transition-colors">
        <Container>
          <div className="flex items-center justify-between h-20">
            {/* Brand Monogram & Name */}
            <a href="#" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[var(--vc-accent)] text-[var(--vc-contrast)] font-black flex items-center justify-center font-mono text-base shadow-sm group-hover:scale-105 transition-transform">
                SV
              </div>
              <div className="text-left">
                <span className="font-extrabold text-base tracking-tight text-[var(--vc-text)] uppercase block leading-none">
                  Studio Vale
                </span>
                <span className="text-[10px] font-mono tracking-widest text-[var(--vc-text-dim)] uppercase">
                  Creative &middot; Identity &middot; Web
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1.5 text-xs font-mono">
              <a href="#work" className="px-3.5 py-1.5 rounded-full text-[var(--vc-text-muted)] hover:text-[var(--vc-text)] hover:bg-[var(--vc-surface)] transition-all">
                Selected Work
              </a>
              <a href="#vault" className="px-3.5 py-1.5 rounded-full text-[var(--vc-text-muted)] hover:text-[var(--vc-text)] hover:bg-[var(--vc-surface)] transition-all">
                Material Vault
              </a>
              <a href="#services" className="px-3.5 py-1.5 rounded-full text-[var(--vc-text-muted)] hover:text-[var(--vc-text)] hover:bg-[var(--vc-surface)] transition-all">
                Services
              </a>
              <a href="#calculator" className="px-3.5 py-1.5 rounded-full text-[var(--vc-text-muted)] hover:text-[var(--vc-text)] hover:bg-[var(--vc-surface)] transition-all">
                Brief Estimator
              </a>
              <a href="#process" className="px-3.5 py-1.5 rounded-full text-[var(--vc-text-muted)] hover:text-[var(--vc-text)] hover:bg-[var(--vc-surface)] transition-all">
                Process
              </a>
              <a href="#proof" className="px-3.5 py-1.5 rounded-full text-[var(--vc-text-muted)] hover:text-[var(--vc-text)] hover:bg-[var(--vc-surface)] transition-all">
                Client Proof
              </a>
              <a href="#contact" className="px-3.5 py-1.5 rounded-full text-[var(--vc-text-muted)] hover:text-[var(--vc-text)] hover:bg-[var(--vc-surface)] transition-all">
                Contact
              </a>
            </nav>

           
            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl border border-[var(--vc-border)] text-[var(--vc-text-muted)] hover:text-[var(--vc-text)]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-[var(--vc-border)] py-4 space-y-2 text-xs font-mono uppercase tracking-wider text-left bg-[var(--vc-surface)] px-4 rounded-b-2xl mb-2">
              <a href="#work" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[var(--vc-text-muted)] hover:text-[var(--vc-accent)]">
                Selected Work
              </a>
              <a href="#vault" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[var(--vc-text-muted)] hover:text-[var(--vc-accent)]">
                Material Vault
              </a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[var(--vc-text-muted)] hover:text-[var(--vc-accent)]">
                Services
              </a>
              <a href="#calculator" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[var(--vc-text-muted)] hover:text-[var(--vc-accent)]">
                Brief Estimator
              </a>
              <a href="#process" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[var(--vc-text-muted)] hover:text-[var(--vc-accent)]">
                Process
              </a>
              <a href="#proof" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[var(--vc-text-muted)] hover:text-[var(--vc-accent)]">
                Client Proof
              </a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[var(--vc-text-muted)] hover:text-[var(--vc-accent)]">
                Contact Desk
              </a>
              <div className="pt-2">
                <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="vc-primary-btn w-full py-2.5 text-xs text-center">
                  Start a Brief &rarr;
                </a>
              </div>
            </div>
          )}
        </Container>
      </header>

      {/* Spacer for sticky header */}
      <div className="h-20" />

      {/* ========================================================================= */}
      {/* 2. HERO SECTION WITH CINEMATIC SPOTLIGHT SHOWCASE                         */}
      {/* ========================================================================= */}
      <section className="relative overflow-hidden pt-12 pb-20 sm:pt-20 sm:pb-28">
        {/* Subtle Ambient Background Gradient */}
        <div
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full pointer-events-none blur-[140px] opacity-70"
          style={{ backgroundColor: 'var(--vc-hero-glow)' }}
        />

        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Copy Column */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="vc-capsule-badge px-3.5 py-1 text-xs">
                <Sparkles className="w-3.5 h-3.5" />
                <span>STUDIO VALE CREATIVE &middot; 2025 PORTFOLIO</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.05] tracking-tight uppercase">
                Brand &amp; Web Systems for Teams With Something Specific to Prove.
              </h1>

              <p className="text-base sm:text-lg leading-relaxed text-[var(--vc-text-muted)] max-w-2xl font-normal">
                We partner with boutique property groups, curated retailers, and ambitious technology founders to build
                authoritative visual identities, high-converting digital flagships, and repeatable design tokens.
              </p>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a href="#work" className="vc-primary-btn px-7 py-3 text-xs">
                  <span>View Selected Work</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a href="#calculator" className="vc-outline-btn px-6 py-3 text-xs">
                  <Sliders className="w-3.5 h-3.5 text-[var(--vc-accent)]" />
                  <span>Estimate Your Sprint</span>
                </a>
              </div>

              {/* Key Studio Proof Badges */}
              <div className="pt-6 border-t border-[var(--vc-border)] grid grid-cols-3 gap-4 text-left">
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[var(--vc-accent)] font-mono">100%</p>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--vc-text-dim)]">In-House Sprint</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[var(--vc-accent)] font-mono">48h</p>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--vc-text-dim)]">Brief Turnaround</p>
                </div>
                <div>
                  <p className="text-2xl sm:text-3xl font-black text-[var(--vc-accent)] font-mono">$180M+</p>
                  <p className="text-[11px] font-mono uppercase tracking-wider text-[var(--vc-text-dim)]">Client Enterprise Value</p>
                </div>
              </div>
            </div>

            {/* Right Interactive Studio Stage Banner */}
            <div className="lg:col-span-5 relative">
              <div className="rounded-3xl border border-[var(--vc-border)] bg-[var(--vc-card)] p-3.5 sm:p-4 shadow-2xl vc-card-glow text-left overflow-hidden">
                <div className="flex items-center justify-between px-2 pb-3 border-b border-[var(--vc-border)] text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                    <span className="ml-2 text-[var(--vc-text-dim)] text-[11px]">vale-showcase.catalog</span>
                  </div>
                  <span className="vc-capsule-badge px-2.5 py-0.5 text-[10px]">
                    FEATURED CASE STUDY
                  </span>
                </div>

                {/* Hero Showcase Switcher Tabs */}
                <div className="flex gap-1.5 mt-3 px-1">
                  {heroSpotlights.map((spot, idx) => (
                    <button
                      key={idx}
                      onClick={() => setHeroSpotlightIndex(idx)}
                      className={`flex-1 py-1.5 px-2 rounded-lg text-[10px] font-mono uppercase font-bold transition-all text-center truncate ${
                        heroSpotlightIndex === idx
                          ? 'bg-[var(--vc-accent)] text-[var(--vc-contrast)] shadow-sm'
                          : 'bg-[var(--vc-surface)] text-[var(--vc-text-dim)] hover:text-[var(--vc-text)]'
                      }`}
                    >
                      {spot.tag}
                    </button>
                  ))}
                </div>

                {/* Showcase Interactive Image Box */}
                <div
                  className="relative mt-3 rounded-2xl overflow-hidden group cursor-pointer"
                  onClick={() => {
                    const targetProj = portfolioProjects.find((p) => p.id === heroSpotlights[heroSpotlightIndex].linkId)
                    if (targetProj) setSelectedProject(targetProj)
                  }}
                >
                  <img
                    src={heroSpotlights[heroSpotlightIndex].image}
                    alt={heroSpotlights[heroSpotlightIndex].title}
                    className="w-full h-72 sm:h-80 object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent flex flex-col justify-end p-5 text-white">
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-mono uppercase bg-[var(--vc-accent)] text-[var(--vc-contrast)] font-bold self-start mb-1.5">
                      {heroSpotlights[heroSpotlightIndex].badge}
                    </span>
                    <h3 className="text-xl font-bold tracking-tight uppercase">
                      {heroSpotlights[heroSpotlightIndex].title}
                    </h3>
                    <p className="text-xs font-mono text-slate-300 mt-1 flex items-center justify-between">
                      <span>Live Studio Case Study</span>
                      <span className="text-[var(--vc-accent-sec)] flex items-center gap-1 font-bold">
                        Inspect Dossier <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </p>
                  </div>
                </div>

                {/* Micro Metrics Strip */}
                <div className="mt-3.5 grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-[var(--vc-surface)] border border-[var(--vc-border)]">
                    <span className="text-[10px] uppercase text-[var(--vc-text-dim)] block">Outcome</span>
                    <span className="font-bold text-[var(--vc-text)]">{heroSpotlights[heroSpotlightIndex].impact}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-[var(--vc-surface)] border border-[var(--vc-border)]">
                    <span className="text-[10px] uppercase text-[var(--vc-text-dim)] block">Sprint Duration</span>
                    <span className="font-bold text-[var(--vc-text)]">{heroSpotlights[heroSpotlightIndex].duration}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 2.5 CLIENT LOGOS & PEER VALIDATION STRIP                                  */}
      {/* ========================================================================= */}
      <section className="py-8 border-y border-[var(--vc-border)] bg-[var(--vc-surface)] overflow-hidden">
        <Container>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--vc-text-dim)] shrink-0 font-bold">
              TRUSTED BY INDUSTRY FOUNDERS &amp; STUDIOS:
            </span>
            <div className="flex items-center gap-8 sm:gap-12 flex-wrap justify-center opacity-75 grayscale hover:grayscale-0 transition-all">
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[var(--vc-text)] uppercase">
                NORTHLINE LIVING
              </span>
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[var(--vc-text)] uppercase">
                CARTBLOOM
              </span>
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[var(--vc-text)] uppercase">
                HARBOR CLINICAL
              </span>
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[var(--vc-text)] uppercase">
                SYNAPSE AI
              </span>
              <span className="font-mono text-xs sm:text-sm font-bold tracking-wider text-[var(--vc-text)] uppercase">
                QUANTUM LABS
              </span>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3. SELECTED WORK SHOWCASE WITH FILTER CAPSULES                             */}
      {/* ========================================================================= */}
      <section id="work" className="py-20 sm:py-28 border-b border-[var(--vc-border)] bg-[var(--vc-bg)]">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--vc-accent)] font-semibold block mb-2">
                PROOF OF CRAFT
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight">
                Selected Work
              </h2>
            </div>

            {/* Filter Capsules */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {[
                { id: 'all', label: `All Systems (${portfolioProjects.length})` },
                { id: 'brand', label: 'Brand & Identity' },
                { id: 'retail', label: 'E-Commerce & Retail' },
                { id: 'digital', label: 'UX & Platforms' },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id as any)}
                  className={`px-4 py-2 text-xs font-mono transition-all ${
                    activeCategory === cat.id
                      ? 'vc-capsule-btn vc-capsule-btn-active'
                      : 'vc-capsule-btn'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group rounded-3xl border border-[var(--vc-border)] bg-[var(--vc-card)] overflow-hidden vc-card-glow cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Project Image Header */}
                  <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-950">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase font-bold bg-black/70 backdrop-blur-md text-white border border-white/20">
                        {project.year}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase font-bold bg-[var(--vc-accent)] text-[var(--vc-contrast)] shadow-sm">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <span className="px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-white text-slate-950 shadow-lg flex items-center gap-1.5">
                        Inspect Dossier <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 sm:p-7">
                    <p className="text-xs font-mono uppercase tracking-wider text-[var(--vc-text-dim)] mb-1">
                      {project.client}
                    </p>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight uppercase group-hover:text-[var(--vc-accent)] transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[var(--vc-text-muted)] line-clamp-2">
                      {project.tagline}
                    </p>

                    {/* Tech Badges */}
                    <div className="mt-5 flex flex-wrap gap-1.5 text-[10px] font-mono">
                      {project.technologies.slice(0, 3).map((t) => (
                        <span key={t} className="px-2 py-0.5 rounded-md bg-[var(--vc-surface)] border border-[var(--vc-border)] text-[var(--vc-text-dim)]">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Impact Strip */}
                <div className="px-6 sm:px-7 py-3.5 bg-[var(--vc-surface)] border-t border-[var(--vc-border)] flex items-center justify-between text-xs font-mono">
                  <span className="text-[var(--vc-text-dim)] uppercase text-[11px]">Outcome:</span>
                  <span className="font-bold text-[var(--vc-accent)]">{project.impact}</span>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 3.5 THE MATERIAL VAULT: TACTILE & DIGITAL ARTIFACTS GALLERY                */}
      {/* ========================================================================= */}
      <section id="vault" className="py-20 sm:py-28 border-b border-[var(--vc-border)] bg-[var(--vc-surface)]">
        <Container>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 text-left">
            <div>
              <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--vc-accent)] font-semibold block mb-2">
                STUDIO ARCHIVES
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight">
                The Material Vault
              </h2>
              <p className="mt-2 text-sm text-[var(--vc-text-muted)] max-w-xl">
                Explore the tactile physical specifications, typography systems, and mathematical tokens that define Studio Vale productions.
              </p>
            </div>

            {/* Artifact Tabs */}
            <div className="flex flex-wrap gap-2 text-xs font-mono">
              {materialVaultArtifacts.map((art) => (
                <button
                  key={art.id}
                  onClick={() => setActiveArtifactId(art.id)}
                  className={`px-3.5 py-2 text-xs font-mono transition-all ${
                    activeArtifactId === art.id
                      ? 'vc-capsule-btn vc-capsule-btn-active'
                      : 'vc-capsule-btn'
                  }`}
                >
                  {art.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Active Artifact Interactive Display Box */}
          <div className="rounded-3xl border border-[var(--vc-border)] bg-[var(--vc-card)] overflow-hidden shadow-2xl vc-card-glow grid grid-cols-1 lg:grid-cols-12 text-left">
            {/* Visual Stage */}
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-slate-950">
              <img
                src={activeArtifact.image}
                alt={activeArtifact.title}
                className="w-full h-full object-cover transition-all duration-700"
              />
              <div className="absolute top-4 left-4">
                <span className="vc-capsule-badge px-3 py-1 text-xs font-bold backdrop-blur-md bg-black/60 text-white border-white/20">
                  {activeArtifact.category}
                </span>
              </div>
            </div>

            {/* Specifications & Notes */}
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--vc-accent)] font-bold block mb-1">
                  SPECIFICATION ARCHIVE
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight mb-3">
                  {activeArtifact.title}
                </h3>
                <p className="text-sm leading-relaxed text-[var(--vc-text-muted)] mb-6">
                  {activeArtifact.caption}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-[var(--vc-border)]">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--vc-text-dim)] font-bold block mb-1">
                    Production Metrics &amp; Parameters:
                  </span>
                  {activeArtifact.specs.map((spec, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-mono text-[var(--vc-text)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--vc-accent)] shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[var(--vc-border)] flex items-center justify-between">
                <span className="text-xs font-mono text-[var(--vc-text-dim)]">Studio Vault Reference: #{activeArtifact.id.toUpperCase()}</span>
                <a href="#contact" className="vc-outline-btn px-4 py-2 text-xs">
                  Request Sample &rarr;
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 4. SERVICES & DELIVERABLES MATRIX                                         */}
      {/* ========================================================================= */}
      <section id="services" className="py-20 sm:py-28 border-b border-[var(--vc-border)] bg-[var(--vc-bg)]">
        <Container>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--vc-accent)] font-semibold block mb-2">
              HOW WE ENGAGE
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight">
              Creative Offers Packaged for Decisive Teams
            </h2>
            <p className="mt-4 text-base text-[var(--vc-text-muted)]">
              No bloated retainers or endless discovery phases. We package complete studio sprints with fixed timelines,
              concrete deliverables, and senior creative attention from day one.
            </p>
          </div>

          {/* Interactive Service Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
            {servicesList.map((srv) => {
              const isSelected = activeServiceId === srv.id
              return (
                <div
                  key={srv.id}
                  onClick={() => setActiveServiceId(srv.id)}
                  className={`rounded-3xl border p-7 sm:p-8 transition-all flex flex-col justify-between cursor-pointer ${
                    isSelected
                      ? 'border-[var(--vc-accent)] bg-[var(--vc-card)] shadow-xl ring-1 ring-[var(--vc-accent)]'
                      : 'border-[var(--vc-border)] bg-[var(--vc-surface)] hover:border-[var(--vc-accent)]'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="font-mono text-3xl font-black text-[var(--vc-accent)]">{srv.number}</span>
                      <span className="vc-capsule-badge px-2.5 py-0.5 text-[10px] font-bold">
                        {srv.tag}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">
                      {srv.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[var(--vc-text-muted)] mb-6">
                      {srv.summary}
                    </p>

                    <div className="space-y-3 pt-4 border-t border-[var(--vc-border)]">
                      <p className="text-xs font-mono uppercase tracking-wider text-[var(--vc-text-dim)] font-semibold">
                        Sprint Deliverables Included:
                      </p>
                      <ul className="space-y-2 text-xs sm:text-sm text-[var(--vc-text-muted)]">
                        {srv.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[var(--vc-accent)] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-5 border-t border-[var(--vc-border)] flex items-center justify-between text-xs font-mono">
                    <div>
                      <span className="text-[var(--vc-text-dim)] block text-[10px] uppercase">Timeline</span>
                      <span className="font-bold text-[var(--vc-text)]">{srv.timeframe}</span>
                    </div>

                    <a href="#contact" className="vc-outline-btn px-4 py-2 text-xs">
                      Select Offer &rarr;
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 5. INTERACTIVE SPRINT & BUDGET CALCULATOR                                 */}
      {/* ========================================================================= */}
      <section id="calculator" className="py-20 sm:py-28 border-b border-[var(--vc-border)] bg-[var(--vc-surface)]">
        <Container>
          <div className="max-w-4xl mx-auto rounded-3xl border border-[var(--vc-border)] bg-[var(--vc-card)] p-6 sm:p-12 shadow-2xl vc-card-glow text-left">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[var(--vc-border)]">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-[var(--vc-accent)] font-semibold block mb-1">
                  INTERACTIVE BRIEF TOOL
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold uppercase tracking-tight">
                  Sprint Scope &amp; Investment Estimator
                </h3>
              </div>
              <div className="vc-capsule-badge px-3 py-1 text-xs">
                <span>ESTIMATOR ENGINE v2.5</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
              {/* Controls Column */}
              <div className="lg:col-span-7 space-y-6">
                {/* Step 1: Core Service Choice */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[var(--vc-text-dim)] block mb-2 font-semibold">
                    01 // Choose Primary Service Scope
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                    {[
                      { id: 'brand', label: 'Brand Identity' },
                      { id: 'web', label: 'Digital Web UX' },
                      { id: 'unified', label: 'Unified Sprint' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setCalcService(opt.id as any)}
                        className={`py-3 px-2 rounded-xl text-center transition-all ${
                          calcService === opt.id
                            ? 'vc-capsule-btn vc-capsule-btn-active justify-center font-bold'
                            : 'vc-capsule-btn justify-center'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2: Cadence / Urgency */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[var(--vc-text-dim)] block mb-2 font-semibold">
                    02 // Target Delivery Cadence
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                    {[
                      { id: 'standard', label: 'Standard Sprint' },
                      { id: 'accelerated', label: 'Accelerated Priority' },
                      { id: 'phased', label: 'Multi-Phase Staged' },
                    ].map((opt) => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setCalcTimeline(opt.id as any)}
                        className={`py-3 px-2 rounded-xl text-center transition-all ${
                          calcTimeline === opt.id
                            ? 'vc-capsule-btn vc-capsule-btn-active justify-center font-bold'
                            : 'vc-capsule-btn justify-center'
                        }`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 3: High-Leverage Addons */}
                <div>
                  <label className="text-xs font-mono uppercase tracking-wider text-[var(--vc-text-dim)] block mb-2 font-semibold">
                    03 // High-Leverage Launch Modules
                  </label>
                  <div className="space-y-2 text-xs font-mono">
                    {[
                      { id: 'tokens', label: 'Figma-to-Tailwind Token Architecture' },
                      { id: 'pitch', label: 'Investor Deck & Executive Pitch Kit' },
                      { id: 'motion', label: 'Interactive Motion & 3D Web Shader Assets' },
                    ].map((addon) => {
                      const active = calcAddons.includes(addon.id)
                      return (
                        <div
                          key={addon.id}
                          onClick={() => toggleAddon(addon.id)}
                          className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                            active
                              ? 'border-[var(--vc-accent)] bg-[var(--vc-surface)] text-[var(--vc-text)]'
                              : 'border-[var(--vc-border)] text-[var(--vc-text-muted)] hover:border-[var(--vc-accent)]'
                          }`}
                        >
                          <span>{addon.label}</span>
                          <span className={`w-4 h-4 rounded-md flex items-center justify-center border text-[10px] ${
                            active ? 'bg-[var(--vc-accent)] border-[var(--vc-accent)] text-[var(--vc-contrast)]' : 'border-[var(--vc-border)]'
                          }`}>
                            {active && <Check className="w-3 h-3" />}
                          </span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              {/* Estimate Output Column */}
              <div className="lg:col-span-5 flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-[var(--vc-surface)] border border-[var(--vc-border)]">
                <div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[var(--vc-text-dim)] block mb-1">
                    PROJECT ESTIMATE PREVIEW
                  </span>
                  <div className="text-3xl sm:text-4xl font-black font-mono text-[var(--vc-accent)] tracking-tight">
                    ${calculatedEstimate.min} &ndash; ${calculatedEstimate.max}
                  </div>
                  <p className="text-xs font-mono text-[var(--vc-text-dim)] mt-1">
                    Estimated sprint duration: <span className="text-[var(--vc-text)] font-bold">{calculatedEstimate.weeks} weeks</span>
                  </p>

                  <div className="mt-6 space-y-2 text-xs font-mono pt-4 border-t border-[var(--vc-border)]">
                    <div className="flex justify-between">
                      <span className="text-[var(--vc-text-dim)]">Dedicated Creative Lead:</span>
                      <span className="font-bold">Guaranteed</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--vc-text-dim)]">Weekly Working Cadence:</span>
                      <span className="font-bold">2 Prototype Reviews</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[var(--vc-text-dim)]">Warranty &amp; Refinements:</span>
                      <span className="font-bold">60 Days Post-Handoff</span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--vc-border)]">
                  <a
                    href="#contact"
                    onClick={() => {
                      setFormData((prev) => ({
                        ...prev,
                        service: `Sprint Scope (${calcService.toUpperCase()} + ${calcTimeline.toUpperCase()})`,
                        budget: `$${calculatedEstimate.min} - $${calculatedEstimate.max}`,
                      }))
                    }}
                    className="vc-primary-btn w-full py-3.5 text-xs text-center"
                  >
                    <span>Lock In Your Brief &rarr;</span>
                  </a>
                  <p className="text-[10px] font-mono text-center text-[var(--vc-text-dim)] mt-2">
                    Studio Vale replies with confirmation within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. SIGNATURE 3-PHASE STUDIO PROCESS                                       */}
      {/* ========================================================================= */}
      <section id="process" className="py-20 sm:py-28 border-b border-[var(--vc-border)] bg-[var(--vc-bg)]">
        <Container>
          <div className="max-w-3xl mb-14 text-left">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--vc-accent)] font-semibold block mb-2">
              METHODOLOGY
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight">
              A Creative Process That Feels Specific, Not Mysterious
            </h2>
            <p className="mt-3 text-base text-[var(--vc-text-muted)]">
              We work in transparent, weekly cadences. Every sprint produces tangible design artifacts you can test with
              real users, stakeholders, and investors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {processSteps.map((p) => (
              <div
                key={p.step}
                className="p-7 sm:p-8 rounded-3xl border border-[var(--vc-border)] bg-[var(--vc-card)] flex flex-col justify-between vc-card-glow"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-5xl font-black font-mono text-[var(--vc-accent)]">{p.step}</span>
                    <span className="vc-capsule-badge px-2.5 py-0.5 text-[10px] font-bold">
                      {p.phase}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold uppercase tracking-tight mb-3">
                    {p.headline}
                  </h3>
                  <p className="text-xs sm:text-sm leading-relaxed text-[var(--vc-text-muted)]">
                    {p.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-[var(--vc-border)] text-xs font-mono text-[var(--vc-text-dim)]">
                  <span className="block text-[10px] uppercase font-bold text-[var(--vc-accent)]">Key Milestone:</span>
                  <span>{p.deliverable}</span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. VERIFIED CLIENT PROOF & TESTIMONIALS                                   */}
      {/* ========================================================================= */}
      <section id="proof" className="py-20 sm:py-28 border-b border-[var(--vc-border)] bg-[var(--vc-surface)]">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--vc-accent)] font-semibold block mb-2">
              CLIENT TESTIMONY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight">
              Endorsements From Leaders Who Care About Craft
            </h2>
          </div>

          {/* Testimonial Switcher Tabs */}
          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {testimonials.map((t, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTestimonialIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-mono transition-all ${
                  activeTestimonialIndex === idx
                    ? 'vc-capsule-btn vc-capsule-btn-active font-bold'
                    : 'vc-capsule-btn'
                }`}
              >
                <img src={t.image} alt={t.name} className="w-5 h-5 rounded-full object-cover" />
                <span>{t.name}</span>
              </button>
            ))}
          </div>

          {/* Highlighted Quote Box */}
          <div className="max-w-3xl mx-auto rounded-3xl border border-[var(--vc-border)] bg-[var(--vc-card)] p-8 sm:p-12 text-left vc-card-glow relative">
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
              <img
                src={testimonials[activeTestimonialIndex].image}
                alt={testimonials[activeTestimonialIndex].name}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover border-2 border-[var(--vc-accent)] shrink-0 shadow-lg"
              />
              <div className="space-y-4">
                <span className="vc-capsule-badge px-3 py-1 text-xs font-bold">
                  {testimonials[activeTestimonialIndex].metric}
                </span>
                <blockquote className="text-base sm:text-lg text-[var(--vc-text)] font-medium leading-relaxed italic">
                  &ldquo;{testimonials[activeTestimonialIndex].quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-bold text-sm text-[var(--vc-text)] uppercase font-mono">
                    {testimonials[activeTestimonialIndex].name}
                  </p>
                  <p className="text-xs font-mono text-[var(--vc-text-dim)]">
                    {testimonials[activeTestimonialIndex].title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. CONFIDENT INQUIRY PATH (BRIEF DESK)                                    */}
      {/* ========================================================================= */}
      <section id="contact" className="py-20 sm:py-28 bg-[var(--vc-bg)]">
        <Container>
          <div className="max-w-3xl mx-auto rounded-3xl border border-[var(--vc-border)] bg-[var(--vc-card)] p-6 sm:p-12 vc-card-glow text-center">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-[var(--vc-accent)] font-semibold block mb-2">
              CONFIDENT INQUIRY PATH
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold uppercase tracking-tight mb-3">
              Ready to Shape Something Specific?
            </h2>
            <p className="text-xs sm:text-sm text-[var(--vc-text-muted)] max-w-lg mx-auto mb-8 font-mono">
              Share the shape of your project, timeline, and goals. Studio Vale responds with a concrete fit check and next step within 24 hours.
            </p>

            {formSubmitted ? (
              <div className="p-8 rounded-2xl border border-emerald-500/40 bg-emerald-950/20 text-center vc-modal-anim">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                <h3 className="text-xl font-bold uppercase text-[var(--vc-text)] mb-1">
                  Brief Transmitted Successfully
                </h3>
                <p className="text-xs font-mono text-[var(--vc-text-muted)] max-w-md mx-auto">
                  Thank you, {formData.name || 'friend'}. We have received your project details. A creative director will review your brief and reply to {formData.email || 'your inbox'} within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false)
                    setFormData({
                      name: '',
                      email: '',
                      company: '',
                      service: 'Unified Brand + Web Sprint',
                      budget: '$25,000 - $45,000',
                      timeline: 'Within 30 Days',
                      message: '',
                    })
                  }}
                  className="vc-capsule-btn vc-capsule-btn-active mt-6 px-6 py-2.5 text-xs font-mono font-bold"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[var(--vc-text-dim)] block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="vc-input w-full rounded-xl px-4 py-3 text-xs"
                    />
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[var(--vc-text-dim)] block mb-1">
                      Company / Organization *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Acme Properties"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="vc-input w-full rounded-xl px-4 py-3 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[var(--vc-text-dim)] block mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="vc-input w-full rounded-xl px-4 py-3 text-xs"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[var(--vc-text-dim)] block mb-1">
                      Service Scope
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="vc-input w-full rounded-xl px-4 py-3 text-xs cursor-pointer"
                    >
                      <option value="Unified Brand + Web Sprint">Unified Brand + Web Sprint</option>
                      <option value="Brand Direction & Systems">Brand Direction &amp; Systems</option>
                      <option value="Digital Flagship & UX">Digital Flagship &amp; UX</option>
                      <option value="Advisory & Token Systems">Advisory &amp; Token Systems</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-[11px] font-mono uppercase tracking-wider text-[var(--vc-text-dim)] block mb-1">
                      Target Investment Bracket
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="vc-input w-full rounded-xl px-4 py-3 text-xs cursor-pointer"
                    >
                      <option value="$15,000 - $25,000">$15,000 - $25,000</option>
                      <option value="$25,000 - $45,000">$25,000 - $45,000 (Recommended)</option>
                      <option value="$45,000+">$45,000+ (Comprehensive)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-wider text-[var(--vc-text-dim)] block mb-1">
                    Project Notes &amp; Objectives
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about what you are launching, what challenges you are navigating, and your ideal timeline..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="vc-input w-full rounded-xl px-4 py-3 text-xs resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="vc-primary-btn w-full py-4 text-xs"
                  >
                    {isSubmitting ? (
                      <span>TRANSMITTING BRIEF...</span>
                    ) : (
                      <>
                        <span>TRANSMIT BRIEF TO STUDIO VALE</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. PROJECT DOSSIER MODAL                                                  */}
      {/* ========================================================================= */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-3xl rounded-3xl border border-[var(--vc-border)] bg-[var(--vc-card)] p-6 sm:p-10 shadow-2xl vc-modal-anim text-left my-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="vc-capsule-btn absolute top-5 right-5 p-2 rounded-full z-10"
              aria-label="Close dossier"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="pr-10 mb-6">
              <span className="vc-capsule-badge px-3 py-1 text-xs font-bold mb-2">
                {selectedProject.client} &middot; {selectedProject.year}
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[var(--vc-text)]">
                {selectedProject.title}
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-[var(--vc-text-muted)]">
                {selectedProject.description}
              </p>
            </div>

            {/* Featured Image */}
            <div className="rounded-2xl overflow-hidden border border-[var(--vc-border)] max-h-80 mb-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Deliverables & Verified Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-xs font-mono">
              <div className="p-4 rounded-2xl bg-[var(--vc-surface)] border border-[var(--vc-border)]">
                <h4 className="text-[11px] uppercase tracking-wider text-[var(--vc-text-dim)] font-bold mb-2.5">
                  Core Deliverables
                </h4>
                <ul className="space-y-1.5 text-[var(--vc-text-muted)]">
                  {selectedProject.deliverables.map((d, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[var(--vc-accent)] shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-2xl bg-[var(--vc-surface)] border border-[var(--vc-border)]">
                <h4 className="text-[11px] uppercase tracking-wider text-[var(--vc-text-dim)] font-bold mb-2.5">
                  Verified Business Impact
                </h4>
                <ul className="space-y-1.5 text-[var(--vc-text-muted)]">
                  {selectedProject.metrics.map((m, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Star className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                      <span>{m}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Modal Action CTA */}
            <div className="pt-4 border-t border-[var(--vc-border)] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-[var(--vc-text-dim)]">
                Impact: <span className="font-bold text-[var(--vc-accent)]">{selectedProject.impact}</span>
              </span>
              <button
                onClick={() => setSelectedProject(null)}
                className="vc-primary-btn px-6 py-2.5 text-xs"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 10. STUDIO FOOTER                                                         */}
      {/* ========================================================================= */}
      <footer className="py-12 border-t border-[var(--vc-border)] bg-[var(--vc-surface)] text-xs font-mono text-[var(--vc-text-dim)]">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--vc-accent)]" />
              <span className="font-bold text-[var(--vc-text)] uppercase">Studio Vale Creative</span>
              <span>&copy; {new Date().getFullYear()}</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#work" className="hover:text-[var(--vc-accent)] transition-colors">
                Work
              </a>
              <a href="#vault" className="hover:text-[var(--vc-accent)] transition-colors">
                Vault
              </a>
              <a href="#services" className="hover:text-[var(--vc-accent)] transition-colors">
                Services
              </a>
              <a href="#calculator" className="hover:text-[var(--vc-accent)] transition-colors">
                Estimator
              </a>
              <a href="#contact" className="hover:text-[var(--vc-accent)] transition-colors">
                Brief Desk
              </a>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  )
}
