import React, { useState, useEffect } from "react";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Droplet,
  Eye,
  Feather,
  Heart,
  HelpCircle,
  Layers,
  Leaf,
  Menu,
  Minus,
  Package,
  Plus,
  RefreshCw,
  Search,
  Send,
  Share2,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Sliders,
  Smile,
  Sparkles,
  Star,
  Tag,
  Trash2,
  Trees,
  Truck,
  User,
  X,
  Zap,
} from "lucide-react";
import "./LittleSproutToys.css";

// Photo Assets
import heroSproutImg from "../../assets/optimized/ecommerce/littlesprout/hero-sprout.webp";
import collEcoImg from "../../assets/optimized/ecommerce/littlesprout/coll-eco.webp";
import collMontessoriImg from "../../assets/optimized/ecommerce/littlesprout/coll-montessori.webp";
import collBuildersImg from "../../assets/optimized/ecommerce/littlesprout/coll-builders.webp";

import prodStackerImg from "../../assets/optimized/ecommerce/littlesprout/prod-stacker.webp";
import prodSortingImg from "../../assets/optimized/ecommerce/littlesprout/prod-sorting.webp";
import prodRainbowImg from "../../assets/optimized/ecommerce/littlesprout/prod-rainbow.webp";
import prodMagneticImg from "../../assets/optimized/ecommerce/littlesprout/prod-magnetic.webp";

import spotlightStapelsteinImg from "../../assets/optimized/ecommerce/littlesprout/spotlight-stapelstein.webp";

// Pastel Sprout Leaf Logo SVG
function LittleSproutLogo({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        d="M16 28V15M16 15C16 10 20.5 5 27 5C27 12 22 16 16 15ZM16 19C16 15 11.5 11 5 11C5 18 10 21 16 19Z"
        stroke="#28534e"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="11" r="3" fill="#f5be41" />
      <circle cx="25" cy="6" r="2.5" fill="#f87171" />
      <circle cx="6" cy="12" r="2.5" fill="#60a5fa" />
    </svg>
  );
}

// 3 Clear Collections Dataset
const clearCollections = [
  {
    id: "eco",
    title: "ECO-CONSCIOUS PLAY",
    btnText: "SHOP SUSTAINABLE",
    img: collEcoImg,
    count: "Organic Cotton Dolls & Beechwood Animals",
  },
  {
    id: "montessori",
    title: "MONTESSORI ESSENTIALS",
    btnText: "SHOP MONTESSORI",
    img: collMontessoriImg,
    count: "Sensory Sorting, Stacking & Practical Life",
  },
  {
    id: "builders",
    title: "CREATIVE BUILDERS",
    btnText: "SHOP BUILDING",
    img: collBuildersImg,
    count: "Magnetic Tiles, Marble Runs & Blocks",
  },
];

// Product Highlights Dataset
const productHighlights = [
  {
    id: "stacker",
    title: "Stapelstein Original Rainbow Stacker",
    subtitle: "Modular stepping stones and active balance bowls made from 100% climate-neutral EPP",
    price: 45.00,
    origPrice: 58.00,
    rating: 4.9,
    reviews: 215,
    img: prodStackerImg,
    category: "Active Play",
  },
  {
    id: "sorting",
    title: "PlanToys Geo-Sorting Board",
    subtitle: "Tactile FSC-certified rubberwood shape and color sorter with non-toxic organic water-based dyes",
    price: 45.00,
    origPrice: 52.00,
    rating: 4.8,
    reviews: 168,
    img: prodSortingImg,
    category: "Montessori & Sensory",
  },
  {
    id: "rainbow",
    title: "Grimm's Large Wooden Rainbow",
    subtitle: "12-piece heirloom handcrafted linden wood nesting arch for limitless sculptural architecture",
    price: 45.00,
    origPrice: 62.00,
    rating: 5.0,
    reviews: 380,
    img: prodRainbowImg,
    category: "Open-Ended Toys",
  },
  {
    id: "magnetic",
    title: "Connetix Magnetic Tiles 100pc Set",
    subtitle: "Beveled ultrasonic-welded magnetic tiles with stronger magnets for taller, luminous creations",
    price: 45.00,
    origPrice: 55.00,
    rating: 4.9,
    reviews: 290,
    img: prodMagneticImg,
    category: "STEM & Building",
  },
];

// Age Groups for Milestone Finder
const ageMilestones = [
  {
    id: "0-12m",
    name: "0 - 12 Months",
    focus: "Sensory Discovery & Motor Grasping",
    picks: "Organic Cotton Rattles, High-Contrast Cards, Natural Teethers",
  },
  {
    id: "1-2y",
    name: "1 - 2 Years",
    focus: "First Steps, Sorting & Cause-and-Effect",
    picks: "Geo-Sorting Boards, Push Walkers, Rainbow Stacking Arches",
  },
  {
    id: "3-5y",
    name: "3 - 5 Years",
    focus: "STEM, Storytelling & Open-Ended Play",
    picks: "Magnetic Tiles, Wooden Dollhouses, Stapelstein Stepping Bowls",
  },
  {
    id: "6y+",
    name: "6+ Years",
    focus: "Complex Engineering & Cooperative Games",
    picks: "Gravity Marble Runs, Architectural Block Sets, Strategy Puzzles",
  },
];

export function LittleSproutToys() {
  // Shopping Cart & Wishlist State
  const [cart, setCart] = useState<{ [id: string]: number }>({
    stacker: 1,
    rainbow: 1,
  });
  const [wishlist, setWishlist] = useState<{ [id: string]: boolean }>({
    magnetic: true,
  });

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [activeAgeTab, setActiveAgeTab] = useState(ageMilestones[1]);

  // Interactive Playroom Box Builder State
  const [boxStacker, setBoxStacker] = useState(true);
  const [boxSorting, setBoxSorting] = useState(true);
  const [boxRainbow, setBoxRainbow] = useState(true);
  const [boxMagnetic, setBoxMagnetic] = useState(true);

  // Calculations
  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalWishlistCount = Object.values(wishlist).filter(Boolean).length;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2600);
  };

  const handleAddToCart = (productId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
    const p = productHighlights.find((item) => item.id === productId);
    showToast(`Added ${p ? p.title : "toy"} to bag!`);
  };

  const handleUpdateCartQty = (productId: string, delta: number) => {
    setCart((prev) => {
      const current = prev[productId] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[productId];
        return copy;
      }
      return { ...prev, [productId]: next };
    });
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => {
      const copy = { ...prev };
      delete copy[productId];
      return copy;
    });
  };

  const handleToggleWishlist = (productId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWishlist((prev) => {
      const state = !prev[productId];
      showToast(state ? "Saved to your playroom wishlist ♡" : "Removed from wishlist");
      return { ...prev, [productId]: state };
    });
  };

  const cartSubtotal = Object.entries(cart).reduce((total, [id, qty]) => {
    const prod = productHighlights.find((p) => p.id === id);
    if (prod) return total + prod.price * qty;
    if (id === "stapelstein-set") return total + 199.00 * qty;
    if (id === "playroom-box") return total + 153.00 * qty;
    return total;
  }, 0);

  // Playroom Box Savings
  const boxCount = (boxStacker ? 1 : 0) + (boxSorting ? 1 : 0) + (boxRainbow ? 1 : 0) + (boxMagnetic ? 1 : 0);
  const boxRegularTotal = boxCount * 45.00;
  const boxDiscountedTotal = boxRegularTotal * 0.85;

  // Scroll & Escape keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
        setIsWishlistOpen(false);
        setMobileMenuOpen(false);
        setSelectedProduct(null);
      }
    };
    if (isCartOpen || isWishlistOpen || mobileMenuOpen || selectedProduct) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isCartOpen, isWishlistOpen, mobileMenuOpen, selectedProduct]);

  return (
    <main className="ls-site" id="top" tabIndex={-1}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="ls-toast" role="alert">
          <Smile size={16} className="text-yellow" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Announcement Bar */}
      <div className="ls-topbar">
        <div className="ls-wrap ls-topbar-inner">
          <span>Free Shipping on Orders Over $75!</span>
        </div>
      </div>

      {/* Main Header Navbar */}
      <header className="ls-header">
        <div className="ls-wrap ls-header-inner">
          {/* Logo */}
          <a href="#top" className="ls-brand">
            <LittleSproutLogo size={26} />
            <span className="ls-brand-title">LittleSprout</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="ls-nav-links">
            <a href="#highlights" className="ls-nav-link">New Arrivals</a>
            <a href="#milestones" className="ls-nav-link">Shop by Age</a>
            <a href="#collections" className="ls-nav-link">Categories</a>
            <a href="#spotlight" className="ls-nav-link">Brands</a>
            <a href="#collections" className="ls-nav-link">Collections</a>
            <a href="#box-builder" className="ls-nav-link">Journal</a>
          </nav>

          {/* Right Utility Search, Account & Cart */}
          <div className="ls-nav-actions">
            <button
              className="ls-icon-btn"
              onClick={() => showToast("Search toys, montessori & stackers")}
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            <button
              className="ls-icon-btn"
              onClick={() => showToast("Sprout Squad Account & Play Rewards")}
              aria-label="Account"
            >
              <User size={18} />
            </button>

            <button
              className="ls-icon-btn"
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Wishlist"
            >
              <div className="ls-badge-wrap">
                <Heart size={18} />
                {totalWishlistCount > 0 && <span className="ls-badge">{totalWishlistCount}</span>}
              </div>
            </button>

            <button
              className="ls-icon-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Bag"
            >
              <div className="ls-badge-wrap">
                <ShoppingBag size={18} />
                <span className="ls-badge">{totalCartCount}</span>
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="ls-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Off-Canvas Mobile Drawer */}
      <div
        className={`ls-drawer-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`ls-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="ls-drawer-head">
          <div className="ls-brand">
            <LittleSproutLogo size={24} />
            <span className="ls-brand-title">LittleSprout</span>
          </div>
          <button className="ls-close-btn" onClick={() => setMobileMenuOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="ls-drawer-links">
          {["New Arrivals", "Shop by Age Milestones", "Eco-Conscious Play", "Montessori Essentials", "Creative Builders", "Stapelstein Collection", "Playroom Box Builder", "The LittleSprout Journal"].map((item) => (
            <a
              key={item}
              href="#collections"
              className="ls-drawer-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{item}</span>
              <ChevronRight size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="ls-hero-section">
        <div className="ls-hero-bg">
          <img
            src={heroSproutImg}
            alt="Smiling toddler playing with wooden blocks and colorful rainbow arch"
          />
          <div className="ls-hero-overlay" />
        </div>

        <div className="ls-wrap ls-hero-content">
          <h1 className="ls-hero-title">
            LITTLESPROUT TOYS: <br />
            CURATED FOR WONDER.
          </h1>

          <p className="ls-hero-sub">
            Thoughtfully selected toys for curious minds. Shop sustainable, engaging play.
          </p>

          <a href="#highlights" className="ls-btn-yellow">
            EXPLORE COLLECTIONS
          </a>
        </div>
      </section>

      {/* CLEAR COLLECTIONS (3 Large Visual Cards) */}
      <section className="ls-section ls-collections-section" id="collections">
        <div className="ls-wrap">
          <div className="ls-section-head text-center">
            <h2 className="ls-section-title">CLEAR COLLECTIONS</h2>
          </div>

          <div className="ls-collections-grid">
            {clearCollections.map((col) => (
              <div key={col.id} className="ls-collection-card">
                <div className="ls-col-img-wrap">
                  <img src={col.img} alt={col.title} />
                  <div className="ls-col-overlay">
                    <h3>{col.title}</h3>
                    <button
                      onClick={() => showToast(`Opening ${col.title}`)}
                      className="ls-btn-white-box"
                    >
                      {col.btnText}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST CUES (3 Horizontal Cards) */}
      <section className="ls-trust-section">
        <div className="ls-wrap">
          <div className="ls-section-head text-center">
            <h2 className="ls-section-title">TRUST CUES</h2>
          </div>

          <div className="ls-trust-grid">
            <div className="ls-trust-card">
              <div className="ls-trust-icon-box">
                <ShieldCheck size={26} />
              </div>
              <div className="ls-trust-info">
                <h3>SAFETY FIRST</h3>
                <p>Non-toxic, rigorously tested, safe materials for every age.</p>
              </div>
            </div>

            <div className="ls-trust-card">
              <div className="ls-trust-icon-box">
                <Trees size={26} />
              </div>
              <div className="ls-trust-info">
                <h3>SUSTAINABLY SOURCED</h3>
                <p>Ethically made, eco-friendly wood and organic fabrics.</p>
              </div>
            </div>

            <div className="ls-trust-card">
              <div className="ls-trust-icon-box">
                <Star size={26} />
              </div>
              <div className="ls-trust-info">
                <h3>EXPERT CURATED</h3>
                <p>Handpicked by child development experts for learning & fun.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTIONAL RHYTHM / SPRINGTIME SPARKLE EVENT (Soft Mint Teal) */}
      <section className="ls-promo-section" id="promo">
        <div className="ls-wrap">
          <div className="ls-promo-card">
            <small className="ls-promo-tag">PROMOTIONAL RHYTHM</small>
            <h2>SPRINGTIME SPARKLE EVENT</h2>
            <p>Discount code: <strong>SPRING20</strong> • <strong>20% OFF SITEWIDE</strong></p>
            <button
              onClick={() => {
                showToast("Applied 20% SPRING20 sitewide coupon!");
                setIsCartOpen(true);
              }}
              className="ls-btn-teal-pill"
            >
              SHOP SALE
            </button>
          </div>
        </div>
      </section>

      {/* PRODUCT HIGHLIGHTS (4 Interactive Product Cards) */}
      <section className="ls-section ls-highlights-section" id="highlights">
        <div className="ls-wrap">
          <div className="ls-section-head text-center">
            <h2 className="ls-section-title">PRODUCT HIGHLIGHTS</h2>
          </div>

          <div className="ls-products-grid">
            {productHighlights.map((prod) => (
              <div
                key={prod.id}
                className="ls-product-card"
                onClick={() => setSelectedProduct(prod)}
              >
                <div className="ls-prod-img-box">
                  <img src={prod.img} alt={prod.title} />
                  <button
                    className={`ls-wish-btn ${wishlist[prod.id] ? "active" : ""}`}
                    onClick={(e) => handleToggleWishlist(prod.id, e)}
                    aria-label="Wishlist"
                  >
                    <Heart size={15} fill={wishlist[prod.id] ? "#28534e" : "none"} color={wishlist[prod.id] ? "#28534e" : "#78716c"} />
                  </button>
                </div>

                <div className="ls-prod-body">
                  <h3 className="ls-prod-title">{prod.title}</h3>
                  <p className="ls-prod-desc">{prod.subtitle}</p>
                  <strong className="ls-prod-price">${prod.price.toFixed(2)}</strong>

                  <button
                    className="ls-btn-quick-add"
                    onClick={(e) => handleAddToCart(prod.id, e)}
                  >
                    QUICK ADD
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PLAY-ALONG (Spotlight Product Card) */}
      <section className="ls-section ls-spotlight-section" id="spotlight">
        <div className="ls-wrap">
          <div className="ls-spotlight-card">
            <div className="ls-spotlight-img-wrap">
              <img src={spotlightStapelsteinImg} alt="Children balancing and playing on Stapelstein rainbow stacker stones" />
            </div>

            <div className="ls-spotlight-body">
              <span className="ls-spotlight-eyebrow">FEATURED PLAY-ALONG</span>
              <h2 className="ls-spotlight-title">Stapelstein Rainbow Stacker</h2>

              <ul className="ls-spotlight-features">
                <li><Check size={16} className="text-teal" /> <strong>ENCOURAGES ACTIVE PLAY</strong> — Develops balance, motor coordination, and full-body spatial agility.</li>
                <li><Check size={16} className="text-teal" /> <strong>OPEN-ENDED POSSIBILITIES</strong> — Stacking stepping stones, floating water bowls, and drum instruments.</li>
                <li><Check size={16} className="text-teal" /> <strong>DURABLE & WATER-RESISTANT</strong> — 100% recyclable, buoyant, and holds up to 396 lbs of weight.</li>
              </ul>

              <div className="ls-spotlight-action-row">
                <strong className="ls-spotlight-price">$199.00</strong>
                <button
                  onClick={() => {
                    setCart((prev) => ({ ...prev, "stapelstein-set": (prev["stapelstein-set"] || 0) + 1 }));
                    showToast("Added Stapelstein Rainbow Stacker Set to bag!");
                    setIsCartOpen(true);
                  }}
                  className="ls-btn-teal-full"
                >
                  ADD TO BAG
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONE FINDER STUDIO (Long-Form Feature) */}
      <section className="ls-section ls-milestones-section" id="milestones">
        <div className="ls-wrap">
          <div className="ls-section-head text-center">
            <span className="ls-eyebrow">DEVELOPMENTAL STAGES</span>
            <h2 className="ls-section-title">SHOP BY AGE & MILESTONE</h2>
            <p className="ls-sub">Toys curated by pediatric play specialists to ignite natural curiosity at every stage.</p>
          </div>

          <div className="ls-milestones-tabs">
            {ageMilestones.map((m) => (
              <button
                key={m.id}
                className={`ls-milestone-tab ${activeAgeTab.id === m.id ? "active" : ""}`}
                onClick={() => setActiveAgeTab(m)}
              >
                {m.name}
              </button>
            ))}
          </div>

          <div className="ls-milestone-panel">
            <div className="ls-milestone-info">
              <h3>{activeAgeTab.name} • {activeAgeTab.focus}</h3>
              <p>Top recommended developmental staples: <strong>{activeAgeTab.picks}</strong>.</p>
            </div>
            <button
              onClick={() => showToast(`Exploring ${activeAgeTab.name} Play Collection`)}
              className="ls-btn-yellow-sm"
            >
              EXPLORE {activeAgeTab.name} TOYS
            </button>
          </div>
        </div>
      </section>

      {/* PLAYROOM TOY BOX BUILDER (Interactive Bundle) */}
      <section className="ls-section ls-builder-section" id="box-builder">
        <div className="ls-wrap">
          <div className="ls-section-head text-center">
            <span className="ls-eyebrow">CUSTOM PLAYROOM BUNDLE</span>
            <h2 className="ls-section-title">BUILD YOUR PLAYROOM STARTER BOX</h2>
            <p className="ls-sub">Bundle 3+ open-ended play essentials to unlock an automatic 15% Playroom bundle discount.</p>
          </div>

          <div className="ls-builder-grid">
            <div className="ls-builder-items">
              <label className={`ls-build-item ${boxStacker ? "active" : ""}`}>
                <input
                  type="checkbox"
                  checked={boxStacker}
                  onChange={(e) => setBoxStacker(e.target.checked)}
                />
                <div>
                  <strong>Stapelstein Stepping Stone ($45.00)</strong>
                  <small>Active balance, sensory movement & water-safe play.</small>
                </div>
              </label>

              <label className={`ls-build-item ${boxSorting ? "active" : ""}`}>
                <input
                  type="checkbox"
                  checked={boxSorting}
                  onChange={(e) => setBoxSorting(e.target.checked)}
                />
                <div>
                  <strong>PlanToys Geo-Sorting Board ($45.00)</strong>
                  <small>FSC rubberwood fine-motor tactile color sorting.</small>
                </div>
              </label>

              <label className={`ls-build-item ${boxRainbow ? "active" : ""}`}>
                <input
                  type="checkbox"
                  checked={boxRainbow}
                  onChange={(e) => setBoxRainbow(e.target.checked)}
                />
                <div>
                  <strong>Grimm's Wooden Rainbow Arch ($45.00)</strong>
                  <small>Heirloom linden wood sculpture and tunnel tracks.</small>
                </div>
              </label>

              <label className={`ls-build-item ${boxMagnetic ? "active" : ""}`}>
                <input
                  type="checkbox"
                  checked={boxMagnetic}
                  onChange={(e) => setBoxMagnetic(e.target.checked)}
                />
                <div>
                  <strong>Connetix Magnetic Tiles Set ($45.00)</strong>
                  <small>Luminous 3D geometric architectural construction.</small>
                </div>
              </label>
            </div>

            <div className="ls-builder-summary">
              <h3>YOUR CUSTOM PLAYROOM BOX</h3>
              <div className="ls-sum-row">
                <span>Selected Toys:</span>
                <strong>{boxCount} Items</strong>
              </div>
              <div className="ls-sum-row">
                <span>Regular Total:</span>
                <span className="ls-strike">${boxRegularTotal.toFixed(2)}</span>
              </div>
              <div className="ls-sum-row highlight">
                <span>15% Playroom Savings:</span>
                <span>-${(boxRegularTotal * 0.15).toFixed(2)}</span>
              </div>
              <div className="ls-sum-total-row">
                <span>Bundle Total:</span>
                <strong>${boxDiscountedTotal.toFixed(2)}</strong>
              </div>

              <button
                onClick={() => {
                  setCart((prev) => ({ ...prev, "playroom-box": (prev["playroom-box"] || 0) + 1 }));
                  showToast("Added Custom Playroom Toy Box to bag!");
                  setIsCartOpen(true);
                }}
                className="ls-btn-teal-full mt-3"
              >
                ADD COMPLETE PLAYROOM BOX ({boxCount} ITEMS)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Warm Ivory & Soft Cream) */}
      <footer className="ls-footer">
        <div className="ls-wrap ls-footer-grid">
          {/* Col 1: Newsletter */}
          <div className="ls-footer-brand-col">
            <div className="ls-brand">
              <LittleSproutLogo size={24} />
              <span className="ls-brand-title">LittleSprout</span>
            </div>
            <h4>JOIN THE SPROUT SQUAD:</h4>
            <p>Get 10% off your first order and play tips!</p>
            <form
              className="ls-news-form"
              onSubmit={(e) => {
                e.preventDefault();
                showToast("Welcome to Sprout Squad! Use code SPROUT10 for 10% off.");
                setNewsletterEmail("");
              }}
            >
              <input
                type="email"
                required
                placeholder="Email input"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit">Submit</button>
            </form>
          </div>

          {/* Col 2: Customer Service */}
          <div className="ls-footer-col">
            <h4>CUSTOMER SERVICE</h4>
            <a href="#faq" onClick={(e) => { e.preventDefault(); showToast("FAQ & Safety Certificates"); }}>FAQ</a>
            <a href="#shipping" onClick={(e) => { e.preventDefault(); showToast("Eco-Friendly Shipping Policy"); }}>Shipping</a>
            <a href="#returns" onClick={(e) => { e.preventDefault(); showToast("30-Day Play Happiness Guarantee"); }}>Returns</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); showToast("Contact Sprout Specialists"); }}>Contact Us</a>
          </div>

          {/* Col 3: About Us */}
          <div className="ls-footer-col">
            <h4>ABOUT US</h4>
            <a href="#story" onClick={(e) => { e.preventDefault(); showToast("Our Sustainable Story"); }}>Our Story</a>
            <a href="#values" onClick={(e) => { e.preventDefault(); showToast("Our Safety Values"); }}>Our Values</a>
            <a href="#journal" onClick={(e) => { e.preventDefault(); showToast("Play Journal"); }}>Journal</a>
          </div>

          {/* Col 4: Social */}
          <div className="ls-footer-col">
            <h4>SOCIAL</h4>
            <div className="ls-social-icons">
              <a href="#instagram" aria-label="Instagram">📷</a>
              <a href="#pinterest" aria-label="Pinterest">📌</a>
              <a href="#facebook" aria-label="Facebook">f</a>
            </div>
          </div>
        </div>

        {/* Subfooter */}
        <div className="ls-subfooter">
          <div className="ls-wrap">
            <p>© 2024 LittleSprout Toys. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Slide-out Cart Drawer */}
      <div
        className={`ls-drawer-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`ls-cart-drawer ${isCartOpen ? "open" : ""}`}>
        <div className="ls-cart-head">
          <h3>SHOPPING BAG ({totalCartCount})</h3>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="ls-cart-body">
          {totalCartCount > 0 ? (
            <div className="ls-cart-list">
              {Object.entries(cart).map(([id, qty]) => {
                const prod = productHighlights.find((p) => p.id === id);
                let title = prod ? prod.title : id === "stapelstein-set" ? "Stapelstein Rainbow Stacker Set" : "Custom Playroom Toy Box";
                let price = prod ? prod.price : id === "stapelstein-set" ? 199.00 : 153.00;
                let img = prod ? prod.img : id === "stapelstein-set" ? spotlightStapelsteinImg : heroSproutImg;

                return (
                  <div key={id} className="ls-cart-item">
                    <img src={img} alt={title} />
                    <div className="ls-cart-item-info">
                      <h4>{title}</h4>
                      <strong>${(price * qty).toFixed(2)}</strong>
                      <div className="ls-cart-qty-row">
                        <button onClick={() => handleUpdateCartQty(id, -1)}><Minus size={12} /></button>
                        <span>{qty}</span>
                        <button onClick={() => handleUpdateCartQty(id, 1)}><Plus size={12} /></button>
                        <button className="ls-trash-link" onClick={() => handleRemoveFromCart(id)}><Trash2 size={14} /></button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="ls-empty-cart">
              <ShoppingBag size={42} className="text-muted" />
              <h4>Your play bag is empty</h4>
              <p>Explore wooden rainbows, stepping stones, and magnetic tiles.</p>
            </div>
          )}
        </div>

        {totalCartCount > 0 && (
          <div className="ls-cart-foot">
            <div className="ls-cart-total-row">
              <span>Subtotal:</span>
              <strong>${cartSubtotal.toFixed(2)}</strong>
            </div>
            <p className="ls-shipping-calc">
              {cartSubtotal >= 75 ? (
                <span className="text-green">✓ Free Eco-Friendly Shipping Unlocked!</span>
              ) : (
                `Add $${(75 - cartSubtotal).toFixed(2)} more for Free Shipping!`
              )}
            </p>
            <button
              onClick={() => {
                setIsCartOpen(false);
                showToast("Proceeding to Secure Play Checkout...");
              }}
              className="ls-btn-teal-full"
            >
              CHECKOUT • ${cartSubtotal.toFixed(2)}
            </button>
          </div>
        )}
      </div>

      {/* Wishlist Drawer */}
      <div
        className={`ls-drawer-overlay ${isWishlistOpen ? "open" : ""}`}
        onClick={() => setIsWishlistOpen(false)}
      />
      <div className={`ls-cart-drawer ${isWishlistOpen ? "open" : ""}`}>
        <div className="ls-cart-head">
          <h3>SAVED TOYS ({totalWishlistCount})</h3>
          <button onClick={() => setIsWishlistOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="ls-cart-body">
          {totalWishlistCount > 0 ? (
            <div className="ls-cart-list">
              {Object.entries(wishlist).filter(([_, a]) => a).map(([id]) => {
                const prod = productHighlights.find((p) => p.id === id);
                if (!prod) return null;
                return (
                  <div key={id} className="ls-cart-item">
                    <img src={prod.img} alt={prod.title} />
                    <div className="ls-cart-item-info">
                      <h4>{prod.title}</h4>
                      <strong>${prod.price.toFixed(2)}</strong>
                      <button
                        className="ls-btn-teal-sm mt-2"
                        onClick={() => {
                          handleAddToCart(id);
                          handleToggleWishlist(id);
                        }}
                      >
                        MOVE TO BAG
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="ls-empty-cart">
              <Heart size={42} className="text-muted" />
              <h4>No toys saved yet</h4>
            </div>
          )}
        </div>
      </div>

      {/* Quick View Product Modal */}
      {selectedProduct && (
        <div className="ls-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="ls-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="ls-modal-close" onClick={() => setSelectedProduct(null)}>
              <X size={20} />
            </button>

            <div className="ls-modal-grid">
              <div className="ls-modal-img">
                <img src={selectedProduct.img} alt={selectedProduct.title} />
              </div>
              <div className="ls-modal-info">
                <span className="ls-pill">{selectedProduct.category}</span>
                <h2>{selectedProduct.title}</h2>
                <p className="ls-modal-desc">{selectedProduct.subtitle}</p>

                <div className="ls-modal-price-row">
                  <strong>${selectedProduct.price.toFixed(2)}</strong>
                  <span>${selectedProduct.origPrice.toFixed(2)}</span>
                </div>

                <div className="ls-features-list">
                  <div><Check size={14} className="text-teal" /> 100% Non-Toxic & BPA/Phthalate-Free</div>
                  <div><Check size={14} className="text-teal" /> FSC Certified Sustainable Wood & Dyes</div>
                  <div><Check size={14} className="text-teal" /> Rigorously Tested (ASTM & EN71 Certified)</div>
                </div>

                <button
                  className="ls-btn-teal-full"
                  onClick={() => {
                    handleAddToCart(selectedProduct.id);
                    setSelectedProduct(null);
                  }}
                >
                  ADD TO BAG • ${selectedProduct.price.toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default LittleSproutToys;
