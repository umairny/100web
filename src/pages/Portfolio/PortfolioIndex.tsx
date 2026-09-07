import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { portfolioWebsites } from '../../data/websites';
import './PortfolioIndex.css';

const SPECIALTIES = [
  'All',
  'Design & Brand',
  'Software & Systems',
  'Architecture & Interiors',
  'Editorial & Craft',
  'Motion & 3D',
];

const UX_BLUEPRINTS = [
  {
    num: '01',
    title: 'Lead with Proof Over Narrative',
    text: 'Modern clients skip long bios. They evaluate recent high-impact work, production caliber, and client tier in the first 7 seconds.',
  },
  {
    num: '02',
    title: 'Restraint as Quality Signal',
    text: 'Showing 3–6 masterfully documented projects communicates greater authority and higher fees than an exhaustive catalog of 30 items.',
  },
  {
    num: '03',
    title: 'Confident, Frictionless Inquiries',
    text: 'Every portfolio features an immediate bespoke commission path, consultation booking, or clear timeline expectations without dead ends.',
  },
];

const ROADMAP_CONCEPTS = [
  {
    title: 'Loom & Weft',
    subtitle: 'Textile & Interior Design Archive',
    desc: 'Heirloom loom weaving, organic drapery textures, and architectural residential commissions.',
  },
  {
    title: 'Script & Stone',
    subtitle: 'Calligraphy & Bespoke Brand Identity',
    desc: 'Fine-art typography, stone-engraved seals, and ultra-high net worth identity packages.',
  },
  {
    title: 'North Wind Brand Studio',
    subtitle: 'Nordic Positioning & Strategy',
    desc: 'Strategic brand identity, brand manifestos, and corporate positioning systems.',
  },
  {
    title: 'Komorebi Light Studio',
    subtitle: 'Architectural Lighting & Luminaires',
    desc: 'Bespoke chandeliers, diffused ambient light design, and bespoke museum installations.',
  },
];

export const PortfolioIndex: React.FC = () => {
  const [selectedSpecialty, setSelectedSpecialty] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Live completed websites
  const liveWebsites = useMemo(() => {
    return portfolioWebsites.filter(
      (website) => website.status === 'completed' || website.status === 'live'
    );
  }, []);

  // Spotlight website: Artisan Objects or the latest featured
  const spotlight = useMemo(() => {
    return (
      portfolioWebsites.find((w) => w.slug === 'artisan-objects') ||
      liveWebsites[0]
    );
  }, [liveWebsites]);

  // Filtered websites based on category pills and search
  const filteredWebsites = useMemo(() => {
    return liveWebsites.filter((website) => {
      const matchesSearch =
        website.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        website.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        website.style.toLowerCase().includes(searchQuery.toLowerCase());

      if (!matchesSearch) return false;
      if (selectedSpecialty === 'All') return true;

      if (selectedSpecialty === 'Design & Brand') {
        return (
          website.slug.includes('brand') ||
          website.slug.includes('creative') ||
          website.slug.includes('vale')
        );
      }
      if (selectedSpecialty === 'Software & Systems') {
        return (
          website.slug.includes('axiom') ||
          website.slug.includes('developer') ||
          website.slug.includes('ux')
        );
      }
      if (selectedSpecialty === 'Architecture & Interiors') {
        return (
          website.slug.includes('interior') ||
          website.slug.includes('architecture') ||
          website.slug.includes('atelier')
        );
      }
      if (selectedSpecialty === 'Editorial & Craft') {
        return (
          website.slug.includes('artisan') ||
          website.slug.includes('copy') ||
          website.slug.includes('photo')
        );
      }
      if (selectedSpecialty === 'Motion & 3D') {
        return website.slug.includes('motion');
      }

      return true;
    });
  }, [liveWebsites, selectedSpecialty, searchQuery]);

  return (
    <main className="portfolio-hub">
      {/* ================= HERO HEADER ================= */}
      <section className="portfolio-hub-hero">
        <div className="portfolio-hub-container">
          <div className="portfolio-hub-badge-row">
            <Link to="/" className="portfolio-hub-crumb">
              ← Main Index
            </Link>
            <div className="portfolio-hub-counter">
              <span className="pulse-dot" />
              <span>{liveWebsites.length} Active Portfolio Concepts</span>
            </div>
          </div>

          <div className="portfolio-hub-title-grid">
            <div>
              <h1 className="portfolio-hub-h1">
                Portfolio Systems Built for Authority &amp; Conversion.
              </h1>
            </div>
            <div>
              <p className="portfolio-hub-desc">
                Curated portfolio architectures for creative directors, studios, architects, craftspeople, and software engineers. Designed to command trust and drive high-value inquiries.
              </p>
              <div className="portfolio-hub-metrics">
                <div>
                  <div className="portfolio-metric-num">{liveWebsites.length}</div>
                  <div className="portfolio-metric-label">Live Systems</div>
                </div>
                <div>
                  <div className="portfolio-metric-num">100%</div>
                  <div className="portfolio-metric-label">Responsive</div>
                </div>
                <div>
                  <div className="portfolio-metric-num">0.0s</div>
                  <div className="portfolio-metric-label">Client Friction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CONTROLS & SEARCH BAR ================= */}
      <div className="portfolio-controls-bar">
        <div className="portfolio-controls-inner">
          <div className="portfolio-filter-pills">
            {SPECIALTIES.map((specialty) => (
              <button
                key={specialty}
                className={`portfolio-filter-btn ${
                  selectedSpecialty === specialty ? 'active' : ''
                }`}
                onClick={() => setSelectedSpecialty(specialty)}
              >
                {specialty}
              </button>
            ))}
          </div>

          <div className="portfolio-search-box">
            <svg
              className="portfolio-search-icon"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              placeholder="Search portfolios, aesthetics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="portfolio-search-input"
            />
          </div>
        </div>
      </div>

      {/* ================= SPOTLIGHT FEATURED ================= */}
      {spotlight && selectedSpecialty === 'All' && !searchQuery && (
        <section className="portfolio-spotlight-section">
          <Link
            to={`/portfolio/${spotlight.slug}`}
            className="portfolio-spotlight-card"
          >
            <div className="portfolio-spotlight-preview">
              <img
                src={spotlight.image}
                alt={spotlight.title}
                className="portfolio-spotlight-img"
              />
              <div className="portfolio-spotlight-badge">
                ★ Latest Release: Spotlight
              </div>
              <div className="portfolio-spotlight-palette">
                {Object.values(spotlight.colors).map((color, i) => (
                  <span
                    key={i}
                    className="portfolio-color-chip"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            <div className="portfolio-spotlight-content">
              <div className="portfolio-spotlight-meta">Featured Portfolio Design</div>
              <h2 className="portfolio-spotlight-title">{spotlight.title}</h2>
              <div className="portfolio-spotlight-style">{spotlight.style}</div>
              <p className="portfolio-spotlight-desc">
                {spotlight.shortDescription}
              </p>
              <span className="portfolio-btn-primary">
                Explore Full Experience →
              </span>
            </div>
          </Link>
        </section>
      )}

      {/* ================= PORTFOLIO CARDS GRID ================= */}
      <section className="portfolio-grid-section">
        <div className="portfolio-grid-header">
          <h3 className="portfolio-grid-title">All Portfolio Architectures</h3>
          <span className="portfolio-results-count">
            Showing {filteredWebsites.length} of {liveWebsites.length}
          </span>
        </div>

        <div className="portfolio-cards-grid">
          {filteredWebsites.map((website) => (
            <Link
              key={website.id}
              to={`/portfolio/${website.slug}`}
              className="portfolio-website-card"
            >
              <div className="portfolio-card-media">
                {website.image ? (
                  <img
                    src={website.image}
                    alt={website.title}
                    className="portfolio-card-img"
                    loading="lazy"
                  />
                ) : (
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: `linear-gradient(135deg, ${website.colors.primary}, ${website.colors.secondary})`,
                    }}
                  />
                )}
                <div className="portfolio-card-media-overlay" />
                <div className="portfolio-card-status">
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      background: '#38bdf8',
                    }}
                  />
                  Live Concept
                </div>
                <div className="portfolio-card-colors">
                  {Object.values(website.colors).map((color, idx) => (
                    <span
                      key={idx}
                      className="portfolio-color-chip"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
              </div>

              <div className="portfolio-card-body">
                <h4 className="portfolio-card-title">{website.title}</h4>
                <div className="portfolio-card-style">{website.style}</div>
                <p className="portfolio-card-desc">{website.shortDescription}</p>

                <div className="portfolio-card-footer">
                  <span className="portfolio-view-link">
                    View Live Site →
                  </span>
                  <span className="portfolio-slug-tag">/{website.slug}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ================= UX BLUEPRINT SECTION ================= */}
      <section className="portfolio-blueprint-section">
        <div className="portfolio-blueprint-header">
          <div className="portfolio-blueprint-tag">Design Principles</div>
          <h3 className="portfolio-blueprint-title">The Portfolio UX Blueprint</h3>
          <p style={{ color: 'var(--hub-text-muted)', fontSize: '0.95rem', margin: 0 }}>
            Every concept in this directory implements core psychological conversion mechanics designed for discerning clients.
          </p>
        </div>

        <div className="portfolio-blueprint-grid">
          {UX_BLUEPRINTS.map((item) => (
            <div key={item.num} className="portfolio-blueprint-card">
              <div className="portfolio-blueprint-card-num">{item.num}</div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= ROADMAP & COMING SOON ================= */}
      <section className="portfolio-roadmap-section">
        <div className="portfolio-grid-header">
          <div>
            <div className="portfolio-blueprint-tag">Upcoming Additions</div>
            <h3 className="portfolio-grid-title" style={{ fontSize: '1.8rem' }}>
              Specialist Concepts in Development
            </h3>
          </div>
        </div>

        <div className="portfolio-roadmap-grid">
          {ROADMAP_CONCEPTS.map((concept) => (
            <div key={concept.title} className="portfolio-roadmap-card">
              <div className="portfolio-roadmap-tag">In Pipeline</div>
              <h4>{concept.title}</h4>
              <div
                style={{
                  fontSize: '0.76rem',
                  color: 'var(--hub-accent-cyan)',
                  marginBottom: '8px',
                  fontWeight: 600,
                }}
              >
                {concept.subtitle}
              </div>
              <p>{concept.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default PortfolioIndex;
