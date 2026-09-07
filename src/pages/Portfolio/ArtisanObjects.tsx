import React, { useState, useEffect } from 'react';
import './ArtisanObjects.css';

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
    image: '/images/artisan/work-aegean-vase.webp',
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
    image: '/images/artisan/work-walnut-table.webp',
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
    image: '/images/artisan/work-loom-textiles.webp',
    specs: {
      material: '100% Organic Raw Flax & Merino Wool',
      origin: 'Artisan Weaving Studio',
      edition: 'Seasonal Small-Batch',
    },
  },
};

const PROCESS_STEPS = [
  {
    step: '1',
    name: 'Concept & Sketch',
    desc: 'Dialogue & tactile exploration on paper. Form satisfies intent.',
    fullDesc: 'We sit with your space, spatial requirements, and sensory preferences. Hand sketches clarify dimensions and emotional resonance before a single material is cut.',
    img: '/images/artisan/process-sketch.webp',
  },
  {
    step: '2',
    name: 'Material Selection',
    desc: 'We source with intention, honoring raw earth.',
    fullDesc: 'Choosing sustainable timber with expressive grain, ethically quarried stone, and untamed natural clays. Every piece begins with materials that possess inherent character.',
    img: '/images/artisan/process-material.webp',
  },
  {
    step: '3',
    name: 'Making & Refinement',
    desc: 'Slow execution with chisel, wheel, & steady hand.',
    fullDesc: 'Centuries-old turning, hand-chiseling, and joinery techniques. We resist high-speed shortcuts, giving fibers and clay time to settle without internal stress.',
    img: '/images/artisan/process-making.webp',
  },
  {
    step: '4',
    name: 'Finishing & Curation',
    desc: 'Hand-burnished waxes, pure oils, and slow cure.',
    fullDesc: 'Non-toxic, food-safe organic wax mixtures and natural wood oils are hand-rubbed into surfaces over multiple days, developing a lustrous tactile patina.',
    img: '/images/artisan/process-finishing.webp',
  },
  {
    step: '5',
    name: 'Final Object',
    desc: 'Finished heirloom flowing into your daily rituals.',
    fullDesc: 'The finished artifact is stamped with maker insignia, wrapped in archival linen, and delivered directly to your home with lifetime preservation guidance.',
    img: '/images/artisan/process-final.webp',
  },
];

export const ArtisanObjects: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);
  const [activeStep, setActiveStep] = useState(0);

  // Inquiry Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: 'Home Object',
    vision: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <div className="artisan-page">
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
                onClick={() => setMobileMenuOpen(false)}
              >
                WORK
              </a>
            </li>
            <li>
              <a
                href="#process"
                onClick={() => setMobileMenuOpen(false)}
              >
                PROCESS
              </a>
            </li>
            <li>
              <a
                href="#outcomes"
                onClick={() => setMobileMenuOpen(false)}
              >
                OUTCOMES
              </a>
            </li>
            <li>
              <a
                href="#inquire"
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

      {/* ================= HERO SECTION ================= */}
      <section id="hero" className="artisan-hero">
        <img
          src="/images/artisan/hero-potter-wheel.webp"
          alt="Master potter shaping clay on the wheel in sunlit studio"
          className="artisan-hero-bg"
        />
        <div className="artisan-hero-overlay" />

        <div className="artisan-hero-content">
          <h1 className="artisan-hero-title">
            THE ART OF THE HAND.<br />
            TIMELESS OBJECTS.
          </h1>
          <p className="artisan-hero-subtitle">
            Bespoke craftsmanship for those who value authenticity.
          </p>
          <a href="#work" className="artisan-btn-outline">
            EXPLORE COLLECTIONS
          </a>
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
              We source with intention, honoring the inherent beauty of every element.
            </p>
          </div>

          <div className="artisan-manifesto-card">
            <img
              src="/images/artisan/icon-touch.webp"
              alt="Hands touch icon representing The Human Touch"
              className="artisan-manifesto-icon"
            />
            <h3 className="artisan-manifesto-title">THE HUMAN TOUCH</h3>
            <p className="artisan-manifesto-desc">
              Imperfectly perfect. Every piece carries the unique signature of its maker.
            </p>
          </div>
        </div>
      </section>

      {/* ================= SELECTED WORK (THE COLLECTIONS) ================= */}
      <section id="work" className="artisan-work">
        <div className="artisan-work-header">
          <h2 className="artisan-section-label">SELECTED WORK</h2>
          <p className="artisan-section-sublabel">(THE COLLECTIONS)</p>
        </div>

        <div className="artisan-work-grid">
          {/* Aegean Series (Featured Tall Card) */}
          <div className="artisan-work-card featured">
            <div className="artisan-work-img-wrap">
              <img
                src="/images/artisan/work-aegean-vase.webp"
                alt="Hand-thrown ceramic vase from The Aegean Series on rustic timber"
                className="artisan-work-img"
              />
              <div className="artisan-work-overlay">
                <h3>THE AEGEAN SERIES.</h3>
              </div>
            </div>
            <div className="artisan-work-info">
              <p className="artisan-work-desc">
                Hand-thrown stoneware, inspired by coastal textures. Each is unique in glaze and form.
              </p>
              <button
                className="artisan-work-link"
                onClick={() => setSelectedCaseStudy(CASE_STUDIES.aegean)}
              >
                VIEW CASE STUDY →
              </button>
            </div>
          </div>

          {/* Right Column: Walnut Table + Loom-Woven Textiles */}
          <div className="artisan-work-column">
            <div className="artisan-work-card">
              <div className="artisan-work-img-wrap">
                <img
                  src="/images/artisan/work-walnut-table.webp"
                  alt="Walnut and brass dining table with subtle tactile joints"
                  className="artisan-work-img"
                />
              </div>
              <div className="artisan-work-info">
                <h3 className="artisan-work-title">WALNUT &amp; BRASS TABLE</h3>
                <p className="artisan-work-desc">
                  Commissioned for a private residence, focusing on clean lines and tactile joints.
                </p>
                <button
                  className="artisan-work-link"
                  onClick={() => setSelectedCaseStudy(CASE_STUDIES.walnut)}
                >
                  VIEW CASE STUDY →
                </button>
              </div>
            </div>

            <div
              className="artisan-textiles-banner"
              onClick={() => setSelectedCaseStudy(CASE_STUDIES.textiles)}
              style={{ cursor: 'pointer' }}
            >
              <img
                src="/images/artisan/work-loom-textiles.webp"
                alt="Natural textured linen throw woven on traditional loom"
                className="artisan-textiles-img"
              />
              <div className="artisan-textiles-content">
                <h3 className="artisan-textiles-title">LOOM-WOVEN TEXTILES</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= THE PROCESS (THE JOURNEY) ================= */}
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
              stroke="#c59f8a"
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
                    alt={step.name}
                    className="artisan-step-illustration"
                  />
                </div>
                <h4 className="artisan-step-title">{step.name}</h4>
                <p className="artisan-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>

          {/* Interactive Process Detail Inspector */}
          <div className="artisan-process-inspector">
            <img
              src={PROCESS_STEPS[activeStep].img}
              alt={PROCESS_STEPS[activeStep].name}
              className="artisan-inspector-img"
            />
            <div className="artisan-inspector-text">
              <h4>
                Phase {PROCESS_STEPS[activeStep].step}: {PROCESS_STEPS[activeStep].name}
              </h4>
              <p>{PROCESS_STEPS[activeStep].fullDesc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CREDIBLE OUTCOMES (IMPACT & LEGACY) ================= */}
      <section id="outcomes" className="artisan-outcomes">
        <div className="artisan-outcomes-header">
          <h2>CREDIBLE OUTCOMES</h2>
          <p>(IMPACT &amp; LEGACY)</p>
        </div>

        <div className="artisan-commissions-label">COMMISSIONS &amp; COLLECTORS</div>

        {/* Client names strip */}
        <div className="artisan-client-strip">
          <span className="artisan-client-name">CONTINENTAL</span>
          <span className="artisan-client-name">Vanguard Gallery</span>
          <span className="artisan-client-name" style={{ fontStyle: 'italic', fontFamily: 'Georgia, serif' }}>
            Smith J.
          </span>
          <span className="artisan-client-name">VILLA D'ARCHITECTE</span>
          <span className="artisan-client-name">LE HERMITAGE</span>
          <span className="artisan-client-name">THE MODERN ARCHIVE</span>
        </div>

        {/* Collector Quote Testimonial */}
        <div className="artisan-testimonial-card">
          <div className="artisan-testimonial-content">
            <blockquote className="artisan-quote">
              “Working with Artisan Objects was a revelation. The piece is not just furniture; it's a member of our family.”
            </blockquote>
            <div className="artisan-quote-author">– Sarah J., Art Collector</div>
          </div>
          <img
            src="/images/artisan/collector-sarah.webp"
            alt="Sarah J., Contemporary Art Collector"
            className="artisan-testimonial-avatar"
          />
        </div>
      </section>

      {/* ================= FEATURED IN (PRESS) ================= */}
      <section className="artisan-press">
        <div className="artisan-press-label">FEATURED IN</div>
        <div className="artisan-press-strip">
          <span className="artisan-press-item">MONOCLE</span>
          <span className="artisan-press-item dezeen">dezeen</span>
          <span className="artisan-press-item interiors">The World of Interiors</span>
        </div>
      </section>

      {/* ================= CONFIDENT INQUIRY PATH ================= */}
      <section id="inquire" className="artisan-inquiry">
        <div className="artisan-inquiry-container">
          <div className="artisan-inquiry-header">
            <div className="artisan-inquiry-label">CONFIDENT INQUIRY PATH</div>
            <h2 className="artisan-inquiry-title">COMMISSION A BESPOKE PIECE.</h2>
          </div>

          <div className="artisan-inquiry-grid">
            <div className="artisan-inquiry-photo-wrap">
              <img
                src="/images/artisan/inquiry-studio-craft.webp"
                alt="Studio shelf with hand-turned ceramic vessels, raw clay and studio tools"
                className="artisan-inquiry-photo"
              />
            </div>

            <div className="artisan-form-wrap">
              <h3 className="artisan-form-heading">TELL US YOUR VISION.</h3>

              {submitted ? (
                <div className="artisan-form-success">
                  <h4>Thank You for Your Vision</h4>
                  <p>
                    Your inquiry has been received directly by the master artisan. We review every commission thoughtfully and will reply within 48 hours.
                  </p>
                  <button
                    className="artisan-btn-outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', projectType: 'Home Object', vision: '' });
                    }}
                  >
                    SEND ANOTHER INQUIRY
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit}>
                  <div className="artisan-form-group">
                    <label className="artisan-label">Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="artisan-input"
                    />
                  </div>

                  <div className="artisan-form-group">
                    <label className="artisan-label">Email</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. eleanor@residence.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="artisan-input"
                    />
                  </div>

                  <div className="artisan-form-group">
                    <label className="artisan-label">Project Type</label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="artisan-select"
                    >
                      <option value="Home Object">Home Object</option>
                      <option value="Furniture">Furniture</option>
                      <option value="Corporate/Gallery Fitting">Corporate/Gallery Fitting</option>
                      <option value="Full Space Curation">Full Space Curation</option>
                    </select>
                  </div>

                  <div className="artisan-form-group">
                    <label className="artisan-label">Your Vision &amp; Requirements</label>
                    <textarea
                      required
                      placeholder="Tell us about the space, proportions, materials, or emotions you're looking to evoke..."
                      value={formData.vision}
                      onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                      className="artisan-textarea"
                    />
                  </div>

                  <button type="submit" className="artisan-btn-submit">
                    START THE CONVERSATION
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
                <line x1="12" y1="2" x2="12" y2="22" />
                <path d="M12 2a10 10 0 0 0-3.5 19.37c.1-.8.2-2 .04-2.88l1.45-6.14s-.36-.72-.36-1.78c0-1.67.97-2.92 2.17-2.92 1.02 0 1.52.77 1.52 1.69 0 1.03-.66 2.57-1 4-.28 1.2.6 2.18 1.78 2.18 2.14 0 3.79-2.26 3.79-5.52 0-2.88-2.07-4.9-5.02-4.9-3.42 0-5.43 2.57-5.43 5.22 0 1.03.4 2.14.9 2.75a.36.36 0 0 1 .08.34c-.1.38-.3.1.22-.38 1.4-.06.24-.2.32-.46.2-1.7-.8-2.6-2.68-2.6-4.36 0-3.56 2.58-6.82 7.45-6.82 3.91 0 6.95 2.79 6.95 6.51 0 3.88-2.45 7.01-5.85 7.01-1.14 0-2.22-.59-2.59-1.29l-.7 2.68c-.26 1-.95 2.25-1.42 3A10 10 0 1 0 12 2z" />
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
            Copyright &copy; {new Date().getFullYear()} ARTISAN OBJECTS. All rights reserved.
          </p>
          <p className="artisan-footer-credits">
            Studio crafted in Europe and shipped internationally under archival packaging.
          </p>
        </div>
      </footer>

      {/* ================= CASE STUDY MODAL ================= */}
      {selectedCaseStudy && (
        <div
          className="artisan-modal-backdrop"
          onClick={() => setSelectedCaseStudy(null)}
        >
          <div
            className="artisan-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="artisan-modal-close"
              onClick={() => setSelectedCaseStudy(null)}
              aria-label="Close modal"
            >
              ✕
            </button>
            <img
              src={selectedCaseStudy.image}
              alt={selectedCaseStudy.title}
              className="artisan-modal-img"
            />
            <div className="artisan-modal-body">
              <div className="artisan-modal-meta">{selectedCaseStudy.subtitle}</div>
              <h3>{selectedCaseStudy.title}</h3>
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
                className="artisan-btn-bespoke"
                style={{ width: '100%' }}
                onClick={() => setSelectedCaseStudy(null)}
              >
                COMMISSION THIS PIECE
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ArtisanObjects;
