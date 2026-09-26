import React, { useState, useEffect, useCallback } from 'react';

interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  specs: {
    material: string;
    origin: string;
    edition: string;
  };
}

const CASE_STUDIES: Record<string, CaseStudy> = {
  aegean: {
    id: 'aegean',
    title: 'The Aegean Series',
    subtitle: 'Ceramic Stoneware with Coastal Glazes',
    description:
      'Hand-thrown stoneware inspired by coastal textures and Aegean wind patterns. Each piece undergoes a double-firing process with wood ash and feldspathic glazes, yielding subtle crystalline blooms unique to each firing chamber.',
    image: '/images/artisan/work-aegean-vase.jpg',
    specs: {
      material: 'Local Stoneware Clay & Ash Glaze',
      origin: 'Peloponnese Studio Kiln',
      edition: 'Numbered Studio Series of 24',
    },
  },
  walnut: {
    id: 'walnut',
    title: 'Walnut & Brass Table',
    subtitle: 'Commissioned Bespoke Dining Architecture',
    description:
      'Commissioned for a private architectural residence, focusing on clean lines, exposed tactile joinery, and patinated solid brass substructure that organically mellows over decades of dining and gathering.',
    image: '/images/artisan/work-walnut-table.jpg',
    specs: {
      material: 'Kiln-Dried American Walnut & Unlacquered Brass',
      origin: 'Workshop Bench No. 3',
      edition: 'One-of-a-kind Commission',
    },
  },
  textiles: {
    id: 'textiles',
    title: 'Loom-Woven Textiles',
    subtitle: 'Heirloom Linen & Wool Wefts',
    description:
      'Spun from raw undyed flax and highland wool on traditional floor looms. The intentional irregularity of the shuttle pass gives each throw tactile depth and insulating drape.',
    image: '/images/artisan/work-loom-textiles.jpg',
    specs: {
      material: '100% Organic Raw Flax & Merino Wool',
      origin: 'Artisan Weaving Studio',
      edition: 'Seasonal Small-Batch',
    },
  },
};

const HERO_SLIDES = [
  {
    id: 1,
    tag: 'Ceramics & Stoneware',
    title: 'The Art of the Hand.\nTimeless Objects.',
    subtitle: 'Bespoke hand-thrown stoneware and vessel architecture created for timeless spaces and private collectors.',
    image: '/images/artisan/hero-artisan-pottery.jpg',
    primaryCta: 'Explore Collections',
    primaryLink: '#work',
    secondaryCta: 'Commission Bespoke',
    secondaryLink: '#inquire',
  },
  {
    id: 2,
    tag: 'Bespoke Joinery',
    title: 'Living Timber.\nTactile Joinery.',
    subtitle: 'Master-crafted solid American walnut tables featuring traditional mortise joinery and mellowed brass.',
    image: '/images/artisan/hero-artisan-woodwork.jpg',
    primaryCta: 'View Joinery',
    primaryLink: '#work',
    secondaryCta: 'Studio Consultation',
    secondaryLink: '#inquire',
  },
  {
    id: 3,
    tag: 'Heritage Weaving',
    title: 'Organic Wefts.\nHeirloom Drape.',
    subtitle: 'Spun from raw undyed flax and highland merino wool on heritage floor looms with intentional shuttle passes.',
    image: '/images/artisan/hero-artisan-textiles.jpg',
    primaryCta: 'Discover Weaves',
    primaryLink: '#work',
    secondaryCta: 'Request Swatches',
    secondaryLink: '#inquire',
  },
  {
    id: 4,
    tag: 'Atelier Showcase',
    title: 'Quiet Sanctuaries.\nSculptural Harmony.',
    subtitle: 'Museum-grade vessels and contemplative forms shaped for architectural residences across the globe.',
    image: '/images/artisan/hero-artisan-gallery.jpg',
    primaryCta: 'Browse Gallery',
    primaryLink: '#work',
    secondaryCta: 'Inquire Now',
    secondaryLink: '#inquire',
  },
];

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Extraction',
    desc: 'Mineral clays dug locally from volcanic coastal deposits.',
    img: '/images/artisan/process-material.webp',
    details:
      'We harvest regional clay bodies and alluvial soils by hand, aging the raw earth for months to optimize mineral plasticity and thermal resilience.',
  },
  {
    step: '02',
    title: 'Wheel Throwing',
    desc: 'Each vessel shaped intuitively on the slow kick-wheel.',
    img: '/images/artisan/process-making.webp',
    details:
      'No measuring jigs or mechanical templates. Proportions respond directly to the posture and breathing of the artisan, creating subtle organic asymmetry.',
  },
  {
    step: '03',
    title: 'Ash Glazing',
    desc: 'Formulated with local wood ash and crushed feldspar.',
    img: '/images/artisan/process-sketch.webp',
    details:
      'Our glazes are concocted in-house using fruitwood ash from nearby orchards. The high mineral content reacts spontaneously inside the flame.',
  },
  {
    step: '04',
    title: 'Wood Firing',
    desc: '36 hours of continuous pine and olive wood firing at 1300°C.',
    img: '/images/artisan/process-finishing.webp',
    details:
      'The multi-day kiln firing demands around-the-clock vigilance. Flying embers deposit natural glaze runs across the stoneware shoulders.',
  },
  {
    step: '05',
    title: 'Curing & Hand Finishing',
    desc: 'Hand-buffed with cold-pressed oils and studio hallmark imprint.',
    img: '/images/artisan/process-final.webp',
    details:
      'Once cool, each piece is diamond-honed at the base, inspected for acoustic resonance, and hand-stamped with the master maker seal.',
  },
];

export const ArtisanObjects: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  // Full Screen Carousel State
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const handlePrevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Autoplay
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNextSlide();
    }, 5500);
    return () => clearInterval(timer);
  }, [isPaused, handleNextSlide]);

  // Inquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Home Object',
    vision: '',
  });
  const [submitted, setSubmitted] = useState(false);

  // Scrollspy & Scroll state
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['inquire', 'outcomes', 'process', 'work', 'hero'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el && scrollPos >= el.offsetTop) {
          setActiveSection(sectionId);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Modal & Mobile menu body scroll-lock
  useEffect(() => {
    if (selectedCaseStudy || mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCaseStudy, mobileMenuOpen]);

  // Keyboard navigation for Modal and Carousel
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedCaseStudy(null);
        setMobileMenuOpen(false);
      } else if (e.key === 'ArrowRight') {
        handleNextSlide();
      } else if (e.key === 'ArrowLeft') {
        handlePrevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNextSlide, handlePrevSlide]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="artisan-page">
      {/* ================= INLINE STYLES (NO EXTERNAL CSS FILE) ================= */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap');

        /* ================= DESIGN TOKENS & RESET ================= */
        .artisan-page {
          --bg-sand: var(--theme-bg-base, #fbf8f3);
          --bg-card: var(--theme-bg-card, #ffffff);
          --bg-dark: var(--theme-bg-dark, #191b1c);
          --bg-terracotta: var(--theme-accent-primary, #a8522d);
          --terracotta-dark: var(--theme-accent-primary-hover, #8c3f1f);
          --terracotta-light: var(--theme-accent-secondary, #c2693f);
          
          --text-dark: var(--theme-text-primary, #222220);
          --text-muted: var(--theme-text-muted, #6e6b66);
          --text-light: #fbf8f3;
          --text-dim: #c5c0b8;

          --border-light: var(--theme-border, rgba(0, 0, 0, 0.08));
          --border-dark: rgba(255, 255, 255, 0.12);
          --border-gold: var(--theme-accent-secondary, rgba(212, 175, 55, 0.4));

          --font-serif: 'Playfair Display', Georgia, serif;
          --font-heading: 'Cinzel', 'Playfair Display', serif;
          --font-sans: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;

          background-color: var(--bg-sand);
          color: var(--text-dark);
          font-family: var(--font-sans);
          min-height: 100vh;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        html.dark .artisan-page {
          --bg-sand: var(--theme-bg-base, #131415);
          --bg-card: var(--theme-bg-card, #1c1d1f);
          --bg-dark: var(--theme-bg-dark, #0d0e0f);
          --bg-terracotta: var(--theme-accent-primary, #a8522d);
          --terracotta-dark: var(--theme-accent-primary-hover, #8c3f1f);
          --terracotta-light: var(--theme-accent-secondary, #c2693f);
          
          --text-dark: var(--theme-text-primary, #fbf8f3);
          --text-muted: var(--theme-text-muted, #a39e96);
          --text-light: #fbf8f3;
          --text-dim: #7d7973;

          --border-light: var(--theme-border, rgba(255, 255, 255, 0.1));
          --border-dark: rgba(255, 255, 255, 0.12);
        }

        /* ================= NAVIGATION BAR ================= */
        .artisan-nav {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          padding: 24px 48px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          transition: all 0.3s ease;
        }

        .artisan-nav.scrolled {
          background: rgba(25, 27, 28, 0.9);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          padding: 16px 48px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .artisan-logo {
          display: flex;
          flex-direction: column;
          text-decoration: none;
          line-height: 1;
        }

        .artisan-logo .logo-main {
          font-family: var(--font-heading);
          font-size: 1.15rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          color: #ffffff;
          text-transform: uppercase;
        }

        .artisan-logo .logo-sub {
          font-family: var(--font-heading);
          font-size: 0.72rem;
          letter-spacing: 0.28em;
          color: rgba(255, 255, 255, 0.8);
          margin-top: 2px;
          text-transform: uppercase;
        }

        .artisan-nav-links {
          display: flex;
          align-items: center;
          gap: 36px;
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .artisan-nav-links a {
          color: rgba(255, 255, 255, 0.82);
          text-decoration: none;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          transition: color 0.25s ease, border-color 0.25s ease;
          border-bottom: 2px solid transparent;
          padding-bottom: 2px;
        }

        .artisan-nav-links a:hover,
        .artisan-nav-links a.active {
          color: #ffffff;
          border-color: var(--bg-terracotta);
        }

        .artisan-btn-bespoke {
          background: var(--bg-terracotta);
          color: #ffffff !important;
          padding: 9px 22px;
          border-radius: 2px;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          border: 1px solid transparent !important;
          transition: all 0.3s ease;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
        }

        .artisan-btn-bespoke:hover {
          background: var(--terracotta-dark);
          border-color: rgba(255, 255, 255, 0.2) !important;
          transform: translateY(-1px);
        }

        .artisan-mobile-toggle {
          display: none;
          background: none;
          border: none;
          color: #ffffff;
          cursor: pointer;
          padding: 8px;
        }

        /* ================= FULL SCREEN HERO CAROUSEL ================= */
        .artisan-hero-carousel {
          position: relative;
          width: 100%;
          height: 100vh;
          min-height: 100vh;
          overflow: hidden;
          background: #121314;
        }

        .artisan-carousel-slide {
          position: absolute;
          inset: 0;
          opacity: 0;
          visibility: hidden;
          transition: opacity 1s cubic-bezier(0.4, 0, 0.2, 1), visibility 1s ease;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
        }

        .artisan-carousel-slide.active {
          opacity: 1;
          visibility: visible;
          z-index: 2;
        }

        .artisan-carousel-bg {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
          transform: scale(1.06);
          transition: transform 9s cubic-bezier(0.25, 1, 0.5, 1);
        }

        .artisan-carousel-slide.active .artisan-carousel-bg {
          transform: scale(1);
        }

        .artisan-carousel-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at center, rgba(16, 17, 18, 0.3) 0%, rgba(16, 17, 18, 0.72) 70%, rgba(16, 17, 18, 0.95) 100%);
          pointer-events: none;
          z-index: 1;
        }

        .artisan-carousel-content {
          position: relative;
          z-index: 3;
          max-width: 900px;
          padding: 100px 32px 60px;
          color: #ffffff;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .artisan-carousel-tag {
          display: inline-block;
          font-family: var(--font-heading);
          font-size: 0.76rem;
          letter-spacing: 0.32em;
          font-weight: 600;
          color: var(--terracotta-light, #c2693f);
          text-transform: uppercase;
          margin-bottom: 16px;
          background: rgba(16, 17, 18, 0.6);
          padding: 6px 20px;
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(8px);
        }

        .artisan-carousel-title {
          font-family: var(--font-serif);
          font-size: clamp(2.3rem, 5.2vw, 4.1rem);
          line-height: 1.15;
          font-weight: 500;
          letter-spacing: 0.02em;
          margin: 0 0 18px;
          text-shadow: 0 4px 24px rgba(0, 0, 0, 0.6);
          text-transform: uppercase;
        }

        .artisan-carousel-subtitle {
          font-size: clamp(0.95rem, 1.8vw, 1.18rem);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.9);
          margin: 0 0 36px;
          letter-spacing: 0.03em;
          max-width: 680px;
          line-height: 1.6;
        }

        .artisan-carousel-actions {
          display: flex;
          align-items: center;
          gap: 18px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .artisan-btn-primary {
          background: var(--bg-terracotta);
          color: #ffffff;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          padding: 14px 34px;
          border-radius: 2px;
          text-decoration: none;
          transition: all 0.3s ease;
          box-shadow: 0 4px 18px rgba(0, 0, 0, 0.4);
          border: 1px solid transparent;
        }

        .artisan-btn-primary:hover {
          background: var(--terracotta-dark);
          transform: translateY(-2px);
          box-shadow: 0 8px 26px rgba(168, 82, 45, 0.5);
        }

        .artisan-btn-secondary {
          background: rgba(255, 255, 255, 0.12);
          backdrop-filter: blur(10px);
          color: #ffffff;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          padding: 14px 34px;
          border-radius: 2px;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.4);
        }

        .artisan-btn-secondary:hover {
          background: rgba(255, 255, 255, 0.95);
          color: #191b1c;
          border-color: #ffffff;
          transform: translateY(-2px);
        }

        .artisan-carousel-nav-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 10;
          background: rgba(25, 27, 28, 0.6);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .artisan-carousel-nav-btn:hover {
          background: var(--bg-terracotta);
          border-color: var(--bg-terracotta);
          transform: translateY(-50%) scale(1.08);
        }

        .artisan-carousel-nav-btn.prev {
          left: 32px;
        }

        .artisan-carousel-nav-btn.next {
          right: 32px;
        }

        .artisan-carousel-controls {
          position: absolute;
          bottom: 36px;
          left: 0;
          right: 0;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;
        }

        .artisan-carousel-counter {
          font-family: var(--font-heading);
          font-size: 0.8rem;
          letter-spacing: 0.2em;
          color: rgba(255, 255, 255, 0.85);
          font-weight: 600;
        }

        .artisan-carousel-indicators {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .artisan-carousel-dot {
          width: 32px;
          height: 3px;
          background: rgba(255, 255, 255, 0.28);
          border: none;
          cursor: pointer;
          border-radius: 2px;
          padding: 0;
          transition: all 0.4s ease;
        }

        .artisan-carousel-dot.active {
          background: var(--bg-terracotta);
          width: 52px;
        }

        .artisan-carousel-dot:hover:not(.active) {
          background: rgba(255, 255, 255, 0.6);
        }

        /* ================= POSITIONING / MANIFESTO SECTION ================= */
        .artisan-positioning {
          background: var(--bg-sand);
          padding: 80px 24px 0;
          text-align: center;
        }

        .artisan-section-label {
          font-family: var(--font-heading);
          font-size: 1.35rem;
          letter-spacing: 0.22em;
          font-weight: 600;
          color: var(--text-dark);
          margin: 0 0 4px;
          text-transform: uppercase;
        }

        .artisan-section-sublabel {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          letter-spacing: 0.2em;
          font-weight: 500;
          color: var(--text-muted);
          margin: 0 0 48px;
          text-transform: uppercase;
        }

        .artisan-manifesto-banner {
          background: var(--bg-terracotta);
          color: #ffffff;
          padding: 60px 48px;
          margin-top: 24px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
          position: relative;
          overflow: hidden;
        }

        .artisan-manifesto-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 20px;
          position: relative;
        }

        .artisan-manifesto-card:not(:last-child)::after {
          content: '';
          position: absolute;
          right: -20px;
          top: 15%;
          height: 70%;
          width: 1px;
          background: rgba(255, 255, 255, 0.18);
        }

        .artisan-manifesto-icon {
          width: 52px;
          height: 52px;
          margin-bottom: 20px;
          object-fit: contain;
          filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.2));
          transition: transform 0.3s ease;
        }

        .artisan-manifesto-card:hover .artisan-manifesto-icon {
          transform: translateY(-4px) scale(1.05);
        }

        .artisan-manifesto-title {
          font-family: var(--font-sans);
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin: 0 0 10px;
          color: #ffffff;
        }

        .artisan-manifesto-desc {
          font-size: 0.88rem;
          line-height: 1.5;
          color: rgba(255, 255, 255, 0.88);
          margin: 0;
          max-width: 280px;
        }

        /* ================= SELECTED WORK / COLLECTIONS ================= */
        .artisan-work {
          padding: 90px 48px;
          max-width: 1240px;
          margin: 0 auto;
        }

        .artisan-work-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .artisan-work-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 36px;
        }

        .artisan-work-card {
          position: relative;
          background: var(--bg-card);
          border-radius: 2px;
          overflow: hidden;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
          border: 1px solid var(--border-light);
          transition: all 0.4s ease;
        }

        .artisan-work-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.09);
        }

        .artisan-work-card.featured {
          grid-row: span 2;
          display: flex;
          flex-direction: column;
        }

        .artisan-work-card.featured .artisan-work-img-wrap {
          height: 520px;
        }

        .artisan-work-img-wrap {
          position: relative;
          width: 100%;
          height: 310px;
          overflow: hidden;
          background: var(--theme-border, #e8e2d8);
        }

        .artisan-work-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .artisan-work-card:hover .artisan-work-img {
          transform: scale(1.04);
        }

        .artisan-work-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(16, 17, 18, 0.85) 0%, rgba(16, 17, 18, 0.2) 50%, transparent 100%);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 36px;
          color: #ffffff;
        }

        .artisan-work-overlay h3 {
          font-family: var(--font-serif);
          font-size: 1.8rem;
          letter-spacing: 0.06em;
          margin: 0 0 6px;
          text-transform: uppercase;
        }

        .artisan-work-overlay p {
          font-size: 0.9rem;
          color: rgba(255, 255, 255, 0.82);
          margin: 0;
        }

        .artisan-work-info {
          padding: 24px 28px 32px;
          background: var(--bg-card);
        }

        .artisan-work-title {
          font-family: var(--font-serif);
          font-size: 1.45rem;
          font-weight: 600;
          letter-spacing: 0.04em;
          color: var(--text-dark);
          margin: 0 0 8px;
          text-transform: uppercase;
        }

        .artisan-work-desc {
          font-size: 0.9rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin: 0 0 16px;
        }

        .artisan-work-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: var(--text-dark);
          font-size: 0.76rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-decoration: underline;
          text-underline-offset: 4px;
          text-transform: uppercase;
          transition: color 0.2s ease;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
        }

        .artisan-work-link:hover {
          color: var(--bg-terracotta);
        }

        .artisan-textiles-banner {
          margin-top: 36px;
          position: relative;
          overflow: hidden;
          height: 280px;
          border-radius: 2px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
        }

        .artisan-textiles-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center 40%;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .artisan-textiles-banner:hover .artisan-textiles-img {
          transform: scale(1.03);
        }

        .artisan-textiles-content {
          position: absolute;
          inset: 0;
          background: rgba(22, 23, 24, 0.45);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.3s ease;
        }

        .artisan-textiles-banner:hover .artisan-textiles-content {
          background: rgba(22, 23, 24, 0.55);
        }

        .artisan-textiles-title {
          font-family: var(--font-serif);
          font-size: 2rem;
          color: #ffffff;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin: 0;
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.4);
        }

        /* ================= THE PROCESS (THE JOURNEY) ================= */
        .artisan-process {
          padding: 100px 48px;
          background: var(--bg-sand);
          text-align: center;
        }

        .artisan-process-header {
          max-width: 800px;
          margin: 0 auto 60px;
        }

        .artisan-process-bigtitle {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3.8vw, 2.7rem);
          letter-spacing: 0.04em;
          line-height: 1.25;
          color: var(--text-dark);
          margin: 0;
          text-transform: uppercase;
          font-weight: 500;
        }

        .artisan-process-journey {
          position: relative;
          max-width: 1160px;
          margin: 0 auto;
        }

        .artisan-process-curve-svg {
          width: 100%;
          height: 90px;
          position: absolute;
          top: 90px;
          left: 0;
          z-index: 1;
          pointer-events: none;
        }

        .artisan-process-steps {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 20px;
          position: relative;
          z-index: 2;
        }

        .artisan-step-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          cursor: pointer;
          padding: 12px 8px;
          border-radius: 8px;
          transition: transform 0.25s ease;
        }

        .artisan-step-card:hover {
          transform: translateY(-4px);
        }

        .artisan-step-card.active .artisan-step-num {
          background: var(--bg-terracotta);
          color: #ffffff;
          border-color: var(--bg-terracotta);
        }

        .artisan-step-badge-wrap {
          position: relative;
          margin-bottom: 12px;
        }

        .artisan-step-num {
          position: absolute;
          top: -8px;
          left: -8px;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background: var(--bg-card);
          border: 1px solid var(--bg-terracotta);
          color: var(--bg-terracotta);
          font-size: 0.7rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
        }

        .artisan-step-illustration {
          width: 90px;
          height: 90px;
          object-fit: contain;
          transition: transform 0.3s ease;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.08));
        }

        .artisan-step-card:hover .artisan-step-illustration {
          transform: scale(1.08);
        }

        .artisan-step-title {
          font-family: var(--font-heading);
          font-size: 0.85rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--text-dark);
          margin: 10px 0 6px;
        }

        .artisan-step-desc {
          font-size: 0.78rem;
          color: var(--text-muted);
          line-height: 1.4;
          margin: 0;
          max-width: 170px;
        }

        .artisan-process-inspector {
          margin-top: 48px;
          background: var(--bg-card);
          border: 1px solid var(--theme-border, rgba(168, 82, 45, 0.25));
          border-radius: 6px;
          padding: 28px 36px;
          max-width: 780px;
          margin-left: auto;
          margin-right: auto;
          text-align: left;
          display: flex;
          align-items: center;
          gap: 32px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
          animation: fadeIn 0.4s ease;
        }

        .artisan-inspector-img {
          width: 84px;
          height: 84px;
          object-fit: contain;
          flex-shrink: 0;
        }

        .artisan-inspector-text h4 {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          color: var(--bg-terracotta);
          margin: 0 0 6px;
          letter-spacing: 0.04em;
        }

        .artisan-inspector-text p {
          font-size: 0.88rem;
          color: var(--text-muted);
          margin: 0;
          line-height: 1.55;
        }

        /* ================= CREDIBLE OUTCOMES (IMPACT & LEGACY) ================= */
        .artisan-outcomes {
          background: var(--bg-terracotta);
          color: #ffffff;
          padding: 85px 36px 90px;
          text-align: center;
        }

        .artisan-outcomes-header h2 {
          font-family: var(--font-serif);
          font-size: clamp(1.8rem, 3.6vw, 2.5rem);
          letter-spacing: 0.08em;
          text-transform: uppercase;
          margin: 0 0 4px;
          font-weight: 500;
        }

        .artisan-outcomes-header p {
          font-family: var(--font-sans);
          font-size: 0.85rem;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.8);
          margin: 0 0 44px;
        }

        .artisan-commissions-label {
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.85);
          margin-bottom: 24px;
        }

        .artisan-client-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          gap: 40px;
          margin-bottom: 60px;
          opacity: 0.85;
        }

        .artisan-client-name {
          font-family: var(--font-heading);
          font-size: 0.88rem;
          letter-spacing: 0.16em;
          color: rgba(255, 255, 255, 0.9);
          text-transform: uppercase;
          font-weight: 600;
        }

        .artisan-testimonial-card {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          text-align: left;
          border-top: 1px solid rgba(255, 255, 255, 0.16);
          padding-top: 48px;
        }

        .artisan-testimonial-content {
          flex: 1;
        }

        .artisan-quote {
          font-family: var(--font-serif);
          font-size: clamp(1.3rem, 2.5vw, 1.9rem);
          line-height: 1.35;
          font-weight: 400;
          letter-spacing: 0.02em;
          margin: 0 0 16px;
          color: #ffffff;
        }

        .artisan-quote-author {
          font-size: 0.85rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 600;
        }

        .artisan-testimonial-avatar {
          width: 110px;
          height: 110px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid rgba(255, 255, 255, 0.35);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
          flex-shrink: 0;
        }

        /* ================= FEATURED IN PRESS STRIP ================= */
        .artisan-press {
          background: var(--bg-sand);
          padding: 50px 36px;
          text-align: center;
          border-bottom: 1px solid var(--border-light);
        }

        .artisan-press-label {
          font-size: 0.72rem;
          font-weight: 700;
          letter-spacing: 0.26em;
          text-transform: uppercase;
          color: var(--text-muted);
          margin-bottom: 24px;
        }

        .artisan-press-strip {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 60px;
          flex-wrap: wrap;
        }

        .artisan-press-item {
          font-family: var(--font-serif);
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: var(--text-dark);
        }

        .artisan-press-item.dezeen {
          font-family: var(--font-sans);
          font-weight: 900;
          font-size: 1.4rem;
          letter-spacing: -0.02em;
        }

        .artisan-press-item.interiors {
          font-size: 0.85rem;
          font-weight: 600;
          line-height: 1.2;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        /* ================= CONFIDENT INQUIRY PATH ================= */
        .artisan-inquiry {
          background: var(--bg-dark);
          color: #ffffff;
          padding: 100px 48px;
        }

        .artisan-inquiry-container {
          max-width: 1100px;
          margin: 0 auto;
        }

        .artisan-inquiry-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .artisan-inquiry-label {
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 6px;
        }

        .artisan-inquiry-title {
          font-family: var(--font-serif);
          font-size: clamp(1.9rem, 3.6vw, 2.7rem);
          font-weight: 500;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0;
        }

        .artisan-inquiry-grid {
          display: grid;
          grid-template-columns: 1fr 1.15fr;
          gap: 48px;
          align-items: center;
        }

        .artisan-inquiry-photo-wrap {
          width: 100%;
          height: 480px;
          border-radius: 2px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.4);
        }

        .artisan-inquiry-photo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }

        .artisan-inquiry-photo-wrap:hover .artisan-inquiry-photo {
          transform: scale(1.03);
        }

        .artisan-form-wrap {
          padding: 10px 0;
        }

        .artisan-form-heading {
          font-family: var(--font-heading);
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #ffffff;
          margin: 0 0 24px;
        }

        .artisan-form-group {
          margin-bottom: 20px;
        }

        .artisan-label {
          display: block;
          font-size: 0.72rem;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.7);
          margin-bottom: 6px;
        }

        .artisan-input,
        .artisan-select,
        .artisan-textarea {
          width: 100%;
          background: var(--theme-bg-base, #fbf8f3);
          color: var(--theme-text-primary, #1f1f1e);
          border: 1px solid var(--theme-border, rgba(255, 255, 255, 0.1));
          padding: 12px 16px;
          font-family: var(--font-sans);
          font-size: 0.88rem;
          border-radius: 2px;
          box-sizing: border-box;
          outline: none;
          transition: border-color 0.25s, box-shadow 0.25s;
        }

        .artisan-input:focus,
        .artisan-select:focus,
        .artisan-textarea:focus {
          border-color: var(--bg-terracotta);
          box-shadow: 0 0 0 3px rgba(168, 82, 45, 0.35);
        }

        .artisan-textarea {
          resize: vertical;
          min-height: 100px;
        }

        .artisan-btn-submit {
          width: 100%;
          background: var(--bg-terracotta);
          color: #ffffff;
          font-size: 0.82rem;
          font-weight: 700;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          padding: 14px 24px;
          border: none;
          border-radius: 2px;
          cursor: pointer;
          transition: all 0.3s ease;
          margin-top: 10px;
        }

        .artisan-btn-submit:hover {
          background: var(--terracotta-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(168, 82, 45, 0.4);
        }

        .artisan-form-success {
          background: rgba(168, 82, 45, 0.15);
          border: 1px solid var(--bg-terracotta);
          border-radius: 2px;
          padding: 24px;
          text-align: center;
          color: #ffffff;
        }

        .artisan-form-success h4 {
          font-family: var(--font-serif);
          font-size: 1.35rem;
          margin: 0 0 8px;
          color: #ffffff;
        }

        .artisan-form-success p {
          font-size: 0.88rem;
          color: rgba(255, 255, 255, 0.82);
          margin: 0 0 16px;
        }

        /* ================= FOOTER ================= */
        .artisan-footer {
          background: var(--bg-sand);
          padding: 48px 48px 36px;
          border-top: 1px solid var(--border-light);
        }

        .artisan-footer-top {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 32px;
          border-bottom: 1px solid var(--border-light);
          flex-wrap: wrap;
          gap: 24px;
        }

        .artisan-footer-links {
          display: flex;
          gap: 28px;
          list-style: none;
          margin: 0;
          padding: 0;
          flex-wrap: wrap;
        }

        .artisan-footer-links a {
          color: var(--text-dark);
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .artisan-footer-links a:hover {
          color: var(--bg-terracotta);
        }

        .artisan-social-links {
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .artisan-social-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--theme-border, rgba(0, 0, 0, 0.04));
          color: var(--text-dark);
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: all 0.25s ease;
        }

        .artisan-social-btn:hover {
          background: var(--bg-terracotta);
          color: #ffffff;
          transform: translateY(-2px);
        }

        .artisan-footer-bottom {
          padding-top: 24px;
          text-align: center;
          font-size: 0.75rem;
          color: var(--text-muted);
          line-height: 1.6;
        }

        .artisan-footer-copy {
          margin: 0 0 6px;
          letter-spacing: 0.04em;
        }

        .artisan-footer-credits {
          margin: 0;
          font-size: 0.7rem;
          color: #99948d;
        }

        /* ================= CASE STUDY MODAL ================= */
        .artisan-modal-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(16, 17, 18, 0.75);
          backdrop-filter: blur(8px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
          animation: fadeIn 0.3s ease;
        }

        .artisan-modal-content {
          background: var(--bg-card);
          max-width: 680px;
          width: 100%;
          border-radius: 4px;
          overflow: hidden;
          box-shadow: 0 24px 60px rgba(0, 0, 0, 0.4);
          border: 1px solid var(--border-light);
          position: relative;
          animation: slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .artisan-modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          background: rgba(0, 0, 0, 0.6);
          color: #ffffff;
          border: none;
          width: 34px;
          height: 34px;
          border-radius: 50%;
          font-size: 1.1rem;
          cursor: pointer;
          z-index: 10;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s ease;
        }

        .artisan-modal-close:hover {
          background: var(--bg-terracotta);
        }

        .artisan-modal-img {
          width: 100%;
          height: 320px;
          object-fit: cover;
        }

        .artisan-modal-body {
          padding: 32px 36px;
        }

        .artisan-modal-body h3 {
          font-family: var(--font-serif);
          font-size: 1.7rem;
          margin: 0 0 8px;
          color: var(--text-dark);
        }

        .artisan-modal-meta {
          font-size: 0.8rem;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--bg-terracotta);
          font-weight: 700;
          margin-bottom: 16px;
        }

        .artisan-modal-body p {
          font-size: 0.92rem;
          color: var(--text-muted);
          line-height: 1.6;
          margin: 0 0 24px;
        }

        .artisan-modal-specs {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          padding: 16px;
          background: var(--bg-sand);
          border-radius: 4px;
          margin-bottom: 24px;
        }

        .artisan-spec-item {
          font-size: 0.78rem;
        }

        .artisan-spec-title {
          font-weight: 700;
          color: var(--text-dark);
          text-transform: uppercase;
          margin-bottom: 2px;
        }

        .artisan-spec-val {
          color: var(--text-muted);
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Dark mode specific enhancements */
        html.dark .artisan-work-card,
        html.dark .artisan-process-inspector,
        html.dark .artisan-modal-content {
          box-shadow: 0 16px 40px rgba(0, 0, 0, 0.45);
        }

        html.dark .artisan-modal-backdrop {
          background: rgba(0, 0, 0, 0.85);
        }

        /* Responsive Media Queries */
        @media (max-width: 992px) {
          .artisan-nav {
            padding: 20px 24px;
          }
          .artisan-manifesto-banner {
            grid-template-columns: 1fr;
            gap: 36px;
            padding: 48px 24px;
          }
          .artisan-manifesto-card:not(:last-child)::after {
            display: none;
          }
          .artisan-work-grid {
            grid-template-columns: 1fr;
          }
          .artisan-work-card.featured {
            grid-row: span 1;
          }
          .artisan-process-steps {
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
          }
          .artisan-process-curve-svg {
            display: none;
          }
          .artisan-inquiry-grid {
            grid-template-columns: 1fr;
          }
          .artisan-inquiry-photo-wrap {
            height: 340px;
          }
        }

        @media (max-width: 768px) {
          .artisan-nav-links {
            position: fixed;
            top: 72px;
            left: 0;
            right: 0;
            background: rgba(25, 27, 28, 0.98);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 36px 24px;
            gap: 24px;
            transform: translateY(-120%);
            transition: transform 0.3s ease;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
          }
          .artisan-nav-links.open {
            transform: translateY(0);
          }
          .artisan-mobile-toggle {
            display: block;
          }
          .artisan-carousel-content {
            padding-top: 100px;
          }
          .artisan-carousel-nav-btn {
            display: none;
          }
          .artisan-process-steps {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .artisan-testimonial-card {
            flex-direction: column;
            text-align: center;
          }
          .artisan-press-strip {
            gap: 32px;
          }
          .artisan-footer-top {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
          .artisan-footer-links {
            justify-content: center;
          }
        }
      `}</style>

      {/* ================= HEADER / NAVIGATION ================= */}
      <header className={`artisan-nav ${scrolled ? 'scrolled' : ''}`}>
        <a href="#hero" className="artisan-logo">
          <span className="logo-main">ARTISAN</span>
          <span className="logo-sub">OBJECTS</span>
        </a>

        <nav>
          <ul className={`artisan-nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <li>
              <a
                href="#work"
                className={activeSection === 'work' ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                WORK
              </a>
            </li>
            <li>
              <a
                href="#process"
                className={activeSection === 'process' ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                PROCESS
              </a>
            </li>
            <li>
              <a
                href="#outcomes"
                className={activeSection === 'outcomes' ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                OUTCOMES
              </a>
            </li>
            <li>
              <a
                href="#inquire"
                className={activeSection === 'inquire' ? 'active' : ''}
                onClick={() => setMobileMenuOpen(false)}
              >
                INQUIRE
              </a>
            </li>
            <li>
              <a
                href="#inquire"
                className="artisan-btn-bespoke"
                onClick={() => setMobileMenuOpen(false)}
              >
                BESPOKE
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="artisan-mobile-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </header>

      {/* ================= FULL SCREEN HERO CAROUSEL ================= */}
      <section
        id="hero"
        className="artisan-hero-carousel"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {HERO_SLIDES.map((slide, index) => {
          const isActive = index === currentSlide;
          return (
            <div
              key={slide.id}
              className={`artisan-carousel-slide ${isActive ? 'active' : ''}`}
              aria-hidden={!isActive}
            >
              <img
                src={slide.image}
                alt={slide.title.replace('\n', ' ')}
                className="artisan-carousel-bg"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="artisan-carousel-overlay" />

              <div className="artisan-carousel-content">
                <span className="artisan-carousel-tag">{slide.tag}</span>
                <h1 className="artisan-carousel-title">
                  {slide.title.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </h1>
                <p className="artisan-carousel-subtitle">{slide.subtitle}</p>
                <div className="artisan-carousel-actions">
                  <a href={slide.primaryLink} className="artisan-btn-primary">
                    {slide.primaryCta}
                  </a>
                  <a href={slide.secondaryLink} className="artisan-btn-secondary">
                    {slide.secondaryCta}
                  </a>
                </div>
              </div>
            </div>
          );
        })}

        {/* Previous / Next buttons */}
        <button
          className="artisan-carousel-nav-btn prev"
          onClick={handlePrevSlide}
          aria-label="Previous slide"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>
        <button
          className="artisan-carousel-nav-btn next"
          onClick={handleNextSlide}
          aria-label="Next slide"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        {/* Counter and Indicator Dots */}
        <div className="artisan-carousel-controls">
          <span className="artisan-carousel-counter">
            0{currentSlide + 1} &mdash; 0{HERO_SLIDES.length}
          </span>
          <div className="artisan-carousel-indicators">
            {HERO_SLIDES.map((_, idx) => (
              <button
                key={idx}
                className={`artisan-carousel-dot ${idx === currentSlide ? 'active' : ''}`}
                onClick={() => setCurrentSlide(idx)}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ================= POSITIONING (OUR MANIFESTO) ================= */}
      <section className="artisan-positioning">
        <h2 className="artisan-section-label">POSITIONING</h2>
        <p className="artisan-section-sublabel">(OUR MANIFESTO)</p>

        <div className="artisan-manifesto-banner">
          <div className="artisan-manifesto-card">
            <img
              src="/images/artisan/icon-time.webp"
              alt="Hourglass icon representing Time & Patience"
              className="artisan-manifesto-icon"
            />
            <h3 className="artisan-manifesto-title">TIME &amp; PATIENCE</h3>
            <p className="artisan-manifesto-desc">
              Each object is a meditation on craft. We don't rush excellence.
            </p>
          </div>

          <div className="artisan-manifesto-card">
            <img
              src="/images/artisan/icon-material.webp"
              alt="Timber block icon representing Material Integrity"
              className="artisan-manifesto-icon"
            />
            <h3 className="artisan-manifesto-title">MATERIAL INTEGRITY</h3>
            <p className="artisan-manifesto-desc">
              Unadorned solid hardwoods, pure clays, and raw unbleached natural fibers.
            </p>
          </div>

          <div className="artisan-manifesto-card">
            <img
              src="/images/artisan/icon-touch.webp"
              alt="Hand icon representing Living Presence"
              className="artisan-manifesto-icon"
            />
            <h3 className="artisan-manifesto-title">LIVING PRESENCE</h3>
            <p className="artisan-manifesto-desc">
              Objects designed to acquire patina and deep character as they age beside you.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SELECTED WORK ================= */}
      <section id="work" className="artisan-work">
        <div className="artisan-work-header">
          <h2 className="artisan-section-label">SELECTED WORK</h2>
          <p className="artisan-section-sublabel">(COLLECTIONS)</p>
        </div>

        <div className="artisan-work-grid">
          {/* Card 1: Featured Aegean Series */}
          <div className="artisan-work-card featured">
            <div className="artisan-work-img-wrap">
              <img
                src="/images/artisan/work-aegean-vase.jpg"
                alt="Aegean Series ceramic vase collection"
                className="artisan-work-img"
              />
              <div className="artisan-work-overlay">
                <h3>THE AEGEAN SERIES</h3>
                <p>Coastal Stoneware Sculptures</p>
              </div>
            </div>
            <div className="artisan-work-info">
              <h4 className="artisan-work-title">Aegean Ceramic Series</h4>
              <p className="artisan-work-desc">
                High-fired tactile stoneware with natural wood ash vitrification and sea foam crystalline glaze.
              </p>
              <button
                className="artisan-work-link"
                onClick={() => setSelectedCaseStudy(CASE_STUDIES.aegean)}
              >
                VIEW CASE STUDY &rarr;
              </button>
            </div>
          </div>

          {/* Card 2: Walnut & Brass Table */}
          <div className="artisan-work-card">
            <div className="artisan-work-img-wrap">
              <img
                src="/images/artisan/work-walnut-table.jpg"
                alt="Hand-crafted walnut and brass dining table"
                className="artisan-work-img"
              />
            </div>
            <div className="artisan-work-info">
              <h4 className="artisan-work-title">Walnut &amp; Brass Dining Architecture</h4>
              <p className="artisan-work-desc">
                Clean lines, exposed joinery, and patinated unlacquered brass.
              </p>
              <button
                className="artisan-work-link"
                onClick={() => setSelectedCaseStudy(CASE_STUDIES.walnut)}
              >
                VIEW CASE STUDY &rarr;
              </button>
            </div>
          </div>

          {/* Card 3: Loom-Woven Textiles */}
          <div className="artisan-work-card">
            <div className="artisan-work-img-wrap">
              <img
                src="/images/artisan/work-loom-textiles.jpg"
                alt="Heirloom loom woven textiles"
                className="artisan-work-img"
              />
            </div>
            <div className="artisan-work-info">
              <h4 className="artisan-work-title">Loom-Woven Heirloom Throws</h4>
              <p className="artisan-work-desc">
                Raw flax and highland merino wool loomed on heritage floor looms.
              </p>
              <button
                className="artisan-work-link"
                onClick={() => setSelectedCaseStudy(CASE_STUDIES.textiles)}
              >
                VIEW CASE STUDY &rarr;
              </button>
            </div>
          </div>
        </div>

        {/* Textiles Banner */}
        <div className="artisan-textiles-banner">
          <img
            src="/images/artisan/hero-artisan-textiles.jpg"
            alt="Hand-woven textiles on wooden floor loom"
            className="artisan-textiles-img"
          />
          <div className="artisan-textiles-content">
            <h3 className="artisan-textiles-title">TEXTILES &bull; OBJECTS &bull; CERAMICS</h3>
          </div>
        </div>
      </section>

      {/* ================= THE PROCESS ================= */}
      <section id="process" className="artisan-process">
        <div className="artisan-process-header">
          <h2 className="artisan-section-label">THE PROCESS</h2>
          <p className="artisan-section-sublabel">(THE JOURNEY)</p>
          <h3 className="artisan-process-bigtitle">
            FROM DUST TO DIGNITY:<br />
            THE JOURNEY OF AN OBJECT.
          </h3>
        </div>

        <div className="artisan-process-journey">
          {/* Wavy decorative connection line */}
          <svg className="artisan-process-curve-svg" viewBox="0 0 1000 80" fill="none">
            <path
              d="M 50 40 Q 150 10 250 45 T 450 40 T 650 45 T 850 40 T 950 45"
              stroke="var(--theme-accent-secondary, #c59f8a)"
              strokeWidth="2"
              strokeDasharray="5 5"
            />
          </svg>

          <div className="artisan-process-steps">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.step}
                className={`artisan-step-card ${activeStep === index ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="artisan-step-badge-wrap">
                  <span className="artisan-step-num">{step.step}</span>
                  <img
                    src={step.img}
                    alt={`${step.title} stage illustration`}
                    className="artisan-step-illustration"
                  />
                </div>
                <h4 className="artisan-step-title">{step.title}</h4>
                <p className="artisan-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive Inspector for clicked step */}
          <div className="artisan-process-inspector">
            <img
              src={PROCESS_STEPS[activeStep].img}
              alt={PROCESS_STEPS[activeStep].title}
              className="artisan-inspector-img"
            />
            <div className="artisan-inspector-text">
              <h4>Stage {PROCESS_STEPS[activeStep].step}: {PROCESS_STEPS[activeStep].title}</h4>
              <p>{PROCESS_STEPS[activeStep].details}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= OUTCOMES ================= */}
      <section id="outcomes" className="artisan-outcomes">
        <div className="artisan-outcomes-header">
          <h2>IMPACT &amp; LEGACY</h2>
          <p>(CREDIBLE OUTCOMES)</p>
        </div>

        <p className="artisan-commissions-label">SELECT RESIDENCES &amp; ARCHITECTURAL COMMISSIONS</p>
        <div className="artisan-client-strip">
          <span className="artisan-client-name">STUDIO ILSE LONDON</span>
          <span className="artisan-client-name">HOTEL SAN CRISTÓBAL</span>
          <span className="artisan-client-name">VILLA PELOPONNESE</span>
          <span className="artisan-client-name">ATELIER AUGUST KOBENHAVN</span>
        </div>

        <div className="artisan-testimonial-card">
          <div className="artisan-testimonial-content">
            <blockquote className="artisan-quote">
              &ldquo;The Aegean vessels anchored our entire home with an undeniable grounded warmth.
              You can feel the presence of the fire and the artisan&rsquo;s hands in every curve.&rdquo;
            </blockquote>
            <p className="artisan-quote-author">
              &mdash; SARAH LINDBERG, ARCHITECTURAL DESIGNER (STOCKHOLM)
            </p>
          </div>
          <img
            src="/images/artisan/collector-sarah.webp"
            alt="Sarah Lindberg portrait"
            className="artisan-testimonial-avatar"
          />
        </div>
      </section>

      {/* ================= PRESS ================= */}
      <section className="artisan-press">
        <p className="artisan-press-label">FEATURED IN LEADING DESIGN PUBLICATIONS</p>
        <div className="artisan-press-strip">
          <span className="artisan-press-item">ARCHITECTURAL DIGEST</span>
          <span className="artisan-press-item dezeen">dezeen</span>
          <span className="artisan-press-item">WALLPAPER*</span>
          <span className="artisan-press-item interiors">WORLD OF INTERIORS</span>
          <span className="artisan-press-item">KINFOLK GALLERY</span>
        </div>
      </section>

      {/* ================= INQUIRE ================= */}
      <section id="inquire" className="artisan-inquiry">
        <div className="artisan-inquiry-container">
          <div className="artisan-inquiry-header">
            <p className="artisan-inquiry-label">COMMISSION A BESPOKE PIECE</p>
            <h2 className="artisan-inquiry-title">LET US CRAFT SOMETHING REMARKABLE.</h2>
          </div>

          <div className="artisan-inquiry-grid">
            <div className="artisan-inquiry-photo-wrap">
              <img
                src="/images/artisan/inquiry-studio-craft.jpg"
                alt="Artisan tools and materials in sunlit workshop"
                className="artisan-inquiry-photo"
              />
            </div>

            <div className="artisan-form-wrap">
              {submitted ? (
                <div className="artisan-form-success">
                  <h4>Thank You for Your Inquiry</h4>
                  <p>
                    We have received your bespoke commission request. Our master artisan will reach
                    out within 2 business days to schedule an initial design conversation.
                  </p>
                  <button
                    className="artisan-btn-submit"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        projectType: 'Home Object',
                        vision: '',
                      });
                    }}
                  >
                    SUBMIT ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <p className="artisan-form-heading">START A DIALOGUE WITH THE MAKER</p>

                  <div className="artisan-form-group">
                    <label className="artisan-label" htmlFor="artisan-name">YOUR FULL NAME</label>
                    <input
                      id="artisan-name"
                      type="text"
                      className="artisan-input"
                      placeholder="e.g. Julian Hayes"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>

                  <div className="artisan-form-group">
                    <label className="artisan-label" htmlFor="artisan-email">EMAIL ADDRESS</label>
                    <input
                      id="artisan-email"
                      type="email"
                      className="artisan-input"
                      placeholder="julian@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>

                  <div className="artisan-form-group">
                    <label className="artisan-label" htmlFor="artisan-type">PROJECT CATEGORY</label>
                    <select
                      id="artisan-type"
                      className="artisan-select"
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    >
                      <option value="Home Object">Architectural Vessel / Ceramic</option>
                      <option value="Furniture">Bespoke Furniture / Table Joinery</option>
                      <option value="Textiles">Heirloom Hand-Woven Textile</option>
                      <option value="Full Space">Full Residential Suite Commission</option>
                    </select>
                  </div>

                  <div className="artisan-form-group">
                    <label className="artisan-label" htmlFor="artisan-vision">YOUR VISION OR SPACE NOTES</label>
                    <textarea
                      id="artisan-vision"
                      className="artisan-textarea"
                      placeholder="Describe the mood, dimensions, or materials you have in mind..."
                      value={formData.vision}
                      onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="artisan-btn-submit">
                    REQUEST COMMISSION CONSULTATION &rarr;
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="artisan-footer">
        <div className="artisan-footer-top">
          <div className="artisan-logo">
            <span className="logo-main">ARTISAN</span>
            <span className="logo-sub">OBJECTS</span>
          </div>

          <ul className="artisan-footer-links">
            <li><a href="#hero">ABOUT</a></li>
            <li><a href="#work">CAREERS</a></li>
            <li><a href="#outcomes">PRESS</a></li>
            <li><a href="#inquire">SHIPPING</a></li>
            <li><a href="#inquire">POLICIES</a></li>
          </ul>

          <div className="artisan-social-links">
            <a href="#instagram" className="artisan-social-btn" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#pinterest" className="artisan-social-btn" aria-label="Pinterest">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </a>
            <a href="#vimeo" className="artisan-social-btn" aria-label="Vimeo Film Documentaries">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="5 3 19 12 5 21 5 3" />
              </svg>
            </a>
          </div>
        </div>

        <div className="artisan-footer-bottom">
          <p className="artisan-footer-copy">
            &copy; {new Date().getFullYear()} Artisan Objects Studio. Crafted with integrity, patience &amp; earth.
          </p>
          <p className="artisan-footer-credits">
            Photography &bull; Editorial Archival &bull; All Rights Reserved.
          </p>
        </div>
      </footer>

      {/* ================= CASE STUDY MODAL ================= */}
      {selectedCaseStudy && (
        <div
          className="artisan-modal-backdrop"
          onClick={() => setSelectedCaseStudy(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-case-study-title"
        >
          <div
            className="artisan-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="artisan-modal-close"
              onClick={() => setSelectedCaseStudy(null)}
              aria-label="Close case study details"
            >
              &times;
            </button>
            <img
              src={selectedCaseStudy.image}
              alt={selectedCaseStudy.title}
              className="artisan-modal-img"
            />
            <div className="artisan-modal-body">
              <p className="artisan-modal-meta">{selectedCaseStudy.subtitle}</p>
              <h3 id="modal-case-study-title">{selectedCaseStudy.title}</h3>
              <p>{selectedCaseStudy.description}</p>

              <div className="artisan-modal-specs">
                <div className="artisan-spec-item">
                  <div className="artisan-spec-title">Material</div>
                  <div className="artisan-spec-val">{selectedCaseStudy.specs.material}</div>
                </div>
                <div className="artisan-spec-item">
                  <div className="artisan-spec-title">Origin</div>
                  <div className="artisan-spec-val">{selectedCaseStudy.specs.origin}</div>
                </div>
                <div className="artisan-spec-item">
                  <div className="artisan-spec-title">Edition</div>
                  <div className="artisan-spec-val">{selectedCaseStudy.specs.edition}</div>
                </div>
              </div>

              <a
                href="#inquire"
                className="artisan-btn-submit"
                style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
                onClick={() => setSelectedCaseStudy(null)}
              >
                INQUIRE ABOUT THIS PIECE &rarr;
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
