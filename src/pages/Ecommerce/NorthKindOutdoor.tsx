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
  Compass,
  Droplet,
  Eye,
  Feather,
  Heart,
  HelpCircle,
  Layers,
  Leaf,
  Menu,
  Minus,
  Mountain,
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
  Sparkles,
  Star,
  Tag,
  Trash2,
  Trees,
  Truck,
  User,
  Wind,
  X,
  Zap,
} from "lucide-react";
import "./NorthKindOutdoor.css";

// Photo Assets
import heroHikingImg from "../../assets/optimized/ecommerce/northkind/hero-hiking.webp";
import catMenImg from "../../assets/optimized/ecommerce/northkind/cat-men.webp";
import catWomenImg from "../../assets/optimized/ecommerce/northkind/cat-women.webp";
import catGearImg from "../../assets/optimized/ecommerce/northkind/cat-gear.webp";

import spotlightJacketImg from "../../assets/optimized/ecommerce/northkind/spotlight-jacket.webp";
import prodFleeceImg from "../../assets/optimized/ecommerce/northkind/prod-fleece.webp";
import prodPantsImg from "../../assets/optimized/ecommerce/northkind/prod-pants.webp";
import prodBaselayerImg from "../../assets/optimized/ecommerce/northkind/prod-baselayer.webp";
import prodBeanieImg from "../../assets/optimized/ecommerce/northkind/prod-beanie.webp";

import journalLayeringImg from "../../assets/optimized/ecommerce/northkind/journal-layering.webp";
import journalSustainabilityImg from "../../assets/optimized/ecommerce/northkind/journal-sustainability.webp";

// 3 Product Categories Dataset
const productCategories = [
  {
    id: "men",
    title: "Men's",
    sub: "Alpine Shells, Midlayers & Trail",
    img: catMenImg,
    btnText: "Shop Men's",
  },
  {
    id: "women",
    title: "Women's",
    sub: "Base Layers, Down & Hardshells",
    img: catWomenImg,
    btnText: "Shop Women's",
  },
  {
    id: "gear",
    title: "Gear",
    sub: "Packs, Poles & Expedition Bags",
    img: catGearImg,
    btnText: "Shop Gear",
  },
];

// Best Sellers Dataset
const bestSellers = [
  {
    id: "fleece",
    title: "Alpine Fleece",
    subtitle: "Polartec® Thermal Pro high-loft breathable insulation with stretch panels",
    price: 139.99,
    origPrice: 165.00,
    rating: 4.9,
    reviews: 218,
    img: prodFleeceImg,
    category: "Mid Layers",
  },
  {
    id: "pants",
    title: "TrailBlazer Pant",
    subtitle: "Schoeller® 4-way dynamic stretch mountaineering pant with DWR water-repellency",
    price: 145.99,
    origPrice: 175.00,
    rating: 4.8,
    reviews: 184,
    img: prodPantsImg,
    category: "Pants & Tights",
  },
  {
    id: "baselayer",
    title: "Base Layer Top",
    subtitle: "100% Merino wool 200g thermoregulating next-to-skin base layer",
    price: 79.99,
    origPrice: 95.00,
    rating: 4.9,
    reviews: 310,
    img: prodBaselayerImg,
    category: "Base Layers",
  },
  {
    id: "beanie",
    title: "Horizon Beanie",
    subtitle: "Ribbed organic merino knit winter cap with windproof thermal ear liner",
    price: 38.00,
    origPrice: 48.00,
    rating: 4.8,
    reviews: 145,
    img: prodBeanieImg,
    category: "Accessories",
  },
];

// Technical Fabric Specifications
const technicalFabrics = [
  {
    name: "GORE-TEX® Pro 3L",
    spec: "28,000mm Waterproof / <6 RET Breathability",
    desc: "Engineered for maximum ruggedness and extreme mountaineering in punishing alpine storms.",
  },
  {
    name: "Polartec® High-Loft",
    spec: "100% Recycled Thermal Grid Fleece",
    desc: "Traps body warmth in micro-air pockets while allowing moisture vapor to escape during heavy ascents.",
  },
  {
    name: "Schoeller® Dynamic 4-Way",
    spec: "Cordura® Reinforced Abrasion Panels",
    desc: "Unrestricted freedom of motion with reinforced knees and insteps against crampon punctures.",
  },
  {
    name: "PrimaLoft® Gold Eco",
    spec: "100% Post-Consumer Recycled Insulation",
    desc: "Maintains 98% of thermal efficiency even when soaking wet in freezing rain.",
  },
];

export function NorthKindOutdoor() {
  // Shopping Cart & Wishlist State
  const [cart, setCart] = useState<{ [id: string]: number }>({
    fleece: 1,
    pants: 1,
  });
  const [wishlist, setWishlist] = useState<{ [id: string]: boolean }>({
    baselayer: true,
  });

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [selectedColor, setSelectedColor] = useState<"rust" | "olive" | "blue">("rust");

  // Interactive Layering System State
  const [layerBase, setLayerBase] = useState(true);
  const [layerFleece, setLayerFleece] = useState(true);
  const [layerShell, setLayerShell] = useState(true);
  const [layerPants, setLayerPants] = useState(true);

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
    const p = bestSellers.find((item) => item.id === productId);
    showToast(`Added ${p ? p.title : "gear"} to bag!`);
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
      showToast(state ? "Saved to your expedition gear wishlist ♡" : "Removed from wishlist");
      return { ...prev, [productId]: state };
    });
  };

  const cartSubtotal = Object.entries(cart).reduce((total, [id, qty]) => {
    const prod = bestSellers.find((p) => p.id === id);
    if (prod) return total + prod.price * qty;
    if (id === "summit-jacket") return total + 499.00 * qty;
    if (id === "alpine-system") return total + 691.97 * qty;
    return total;
  }, 0);

  // Layering Bundle Pricing
  const layerItemCount = (layerBase ? 1 : 0) + (layerFleece ? 1 : 0) + (layerShell ? 1 : 0) + (layerPants ? 1 : 0);
  const layerOriginalPrice =
    (layerBase ? 79.99 : 0) +
    (layerFleece ? 139.99 : 0) +
    (layerShell ? 499.00 : 0) +
    (layerPants ? 145.99 : 0);
  const layerDiscountedPrice = layerOriginalPrice * 0.8;

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
    <main className="nk-site" id="top" tabIndex={-1}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="nk-toast" role="alert">
          <Mountain size={16} className="text-rust" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Header Navbar (Dark Navy / Graphite) */}
      <header className="nk-header">
        <div className="nk-wrap nk-header-inner">
          {/* Logo */}
          <a href="#top" className="nk-brand">
            <span className="nk-brand-title">NorthKind</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="nk-nav-links">
            <a href="#categories" className="nk-nav-link">Men</a>
            <a href="#categories" className="nk-nav-link">Women</a>
            <a href="#categories" className="nk-nav-link">Gear</a>
            <a href="#fabrics" className="nk-nav-link">Sustainability</a>
            <a href="#journal" className="nk-nav-link">Journal</a>
          </nav>

          {/* Right Utility Search, Account & Cart */}
          <div className="nk-nav-actions">
            <button
              className="nk-icon-btn"
              onClick={() => showToast("Search GORE-TEX® shells & fleece")}
              aria-label="Search"
            >
              <Search size={18} />
            </button>

            <button
              className="nk-icon-btn"
              onClick={() => showToast("NorthKind Expedition Pro Portal")}
              aria-label="Account"
            >
              <User size={18} />
            </button>

            <button
              className="nk-icon-btn"
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Wishlist"
            >
              <div className="nk-badge-wrap">
                <Heart size={18} />
                {totalWishlistCount > 0 && <span className="nk-badge">{totalWishlistCount}</span>}
              </div>
            </button>

            <button
              className="nk-icon-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="Cart"
            >
              <div className="nk-badge-wrap">
                <ShoppingBag size={18} />
                <span className="nk-badge">{totalCartCount}</span>
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="nk-mobile-toggle"
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
        className={`nk-drawer-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`nk-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="nk-drawer-head">
          <div className="nk-brand">
            <span className="nk-brand-title">NorthKind</span>
          </div>
          <button className="nk-close-btn" onClick={() => setMobileMenuOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="nk-drawer-links">
          {["Men's Outerwear", "Women's Outerwear", "Technical Gear & Packs", "Summit Pro Jacket", "Alpine Layering System", "Sustainable Materials", "Cold Weather Journal"].map((item) => (
            <a
              key={item}
              href="#categories"
              className="nk-drawer-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{item}</span>
              <ChevronRight size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="nk-hero-section">
        <div className="nk-hero-bg">
          <img
            src={heroHikingImg}
            alt="Hikers on mountain summit ridge at golden hour"
          />
          <div className="nk-hero-overlay" />
        </div>

        <div className="nk-wrap nk-hero-content">
          <h1 className="nk-hero-title">
            EXPLORE FURTHER. <br />
            NorthKind.
          </h1>

          <a href="#categories" className="nk-btn-rust">
            Shop New Arrivals
          </a>
        </div>
      </section>

      {/* PRODUCT CATEGORIES (3 Cards) */}
      <section className="nk-section nk-categories-section" id="categories">
        <div className="nk-wrap">
          <div className="nk-section-head text-center">
            <h2 className="nk-section-title">Product Categories</h2>
          </div>

          <div className="nk-categories-grid">
            {productCategories.map((cat) => (
              <div key={cat.id} className="nk-category-card">
                <div className="nk-cat-img-wrap">
                  <img src={cat.img} alt={cat.title} />
                  <div className="nk-cat-gradient" />
                </div>

                <div className="nk-cat-overlay">
                  <h3>{cat.title}</h3>
                  <p>{cat.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEASONAL HIGHLIGHT (Technical Spotlight Card) */}
      <section className="nk-section nk-spotlight-section" id="highlight">
        <div className="nk-wrap">
          <div className="nk-section-head">
            <h2 className="nk-section-title">Seasonal Highlight</h2>
          </div>

          <div className="nk-spotlight-card">
            {/* Left Hero Jacket */}
            <div className="nk-spotlight-main-img">
              <img src={spotlightJacketImg} alt="Summit Pro Jacket GORE-TEX Shell" />
            </div>

            {/* Center Swatches & Info */}
            <div className="nk-spotlight-details">
              <div className="nk-color-swatches">
                <button
                  className={`nk-swatch-thumb ${selectedColor === "rust" ? "active" : ""}`}
                  onClick={() => setSelectedColor("rust")}
                >
                  <div className="nk-color-box rust" />
                </button>
                <button
                  className={`nk-swatch-thumb ${selectedColor === "olive" ? "active" : ""}`}
                  onClick={() => setSelectedColor("olive")}
                >
                  <div className="nk-color-box olive" />
                </button>
                <button
                  className={`nk-swatch-thumb ${selectedColor === "blue" ? "active" : ""}`}
                  onClick={() => setSelectedColor("blue")}
                >
                  <div className="nk-color-box blue" />
                </button>
              </div>

              <h2 className="nk-spotlight-title">Summit Pro Jacket</h2>
              <p className="nk-spotlight-tag">
                GORE-TEX® Pro Shell <br />
                Waterproof & Breathable
              </p>
              <strong className="nk-spotlight-price">$499</strong>

              <button
                onClick={() => {
                  setCart((prev) => ({ ...prev, "summit-jacket": (prev["summit-jacket"] || 0) + 1 }));
                  showToast("Added Summit Pro Jacket to bag!");
                  setIsCartOpen(true);
                }}
                className="nk-btn-rust-sm"
              >
                Discover
              </button>
            </div>

            {/* Right Matching Alpine Pants */}
            <div className="nk-spotlight-secondary-img">
              <img src={prodPantsImg} alt="Technical Alpine Mountaineering Pants" />
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED QUALITY (4 Badges) */}
      <section className="nk-trust-section">
        <div className="nk-wrap">
          <div className="nk-section-head">
            <h2 className="nk-section-title">Trusted Quality</h2>
          </div>

          <div className="nk-trust-grid">
            <div className="nk-trust-card">
              <div className="nk-trust-icon-box">
                <Truck size={24} />
              </div>
              <div className="nk-trust-info">
                <h3>Free Shipping</h3>
                <p>over $100</p>
              </div>
            </div>

            <div className="nk-trust-card">
              <div className="nk-trust-icon-box">
                <RefreshCw size={24} />
              </div>
              <div className="nk-trust-info">
                <h3>Easy Returns</h3>
                <p>90 Days</p>
              </div>
            </div>

            <div className="nk-trust-card">
              <div className="nk-trust-icon-box">
                <ShieldCheck size={24} />
              </div>
              <div className="nk-trust-info">
                <h3>Lifetime Warranty</h3>
                <p>Guaranteed</p>
              </div>
            </div>

            <div className="nk-trust-card">
              <div className="nk-trust-icon-box">
                <Award size={24} />
              </div>
              <div className="nk-trust-info">
                <h3>Customer Reviews</h3>
                <div className="nk-stars-row">★★★★★</div>
                <p className="text-xs">Highly durable and comfortable!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS (4 Product Cards) */}
      <section className="nk-section nk-bestsellers-section" id="bestsellers">
        <div className="nk-wrap">
          <div className="nk-section-head flex-between">
            <h2 className="nk-section-title">Best Sellers</h2>
            <div className="nk-carousel-arrows">
              <button className="nk-arrow-btn" onClick={() => showToast("Slide Previous")}>
                <ChevronLeft size={16} />
              </button>
              <button className="nk-arrow-btn" onClick={() => showToast("Slide Next")}>
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          <div className="nk-products-grid">
            {bestSellers.map((prod) => (
              <div
                key={prod.id}
                className="nk-product-card"
                onClick={() => setSelectedProduct(prod)}
              >
                <div className="nk-prod-img-box">
                  <img src={prod.img} alt={prod.title} />
                  <button
                    className={`nk-wish-btn ${wishlist[prod.id] ? "active" : ""}`}
                    onClick={(e) => handleToggleWishlist(prod.id, e)}
                    aria-label="Wishlist"
                  >
                    <Heart size={15} fill={wishlist[prod.id] ? "#c85a32" : "none"} color={wishlist[prod.id] ? "#c85a32" : "#78716c"} />
                  </button>
                </div>

                <div className="nk-prod-body">
                  <h3 className="nk-prod-title">{prod.title}</h3>
                  <p className="nk-prod-desc">{prod.subtitle}</p>
                  <strong className="nk-prod-price">${prod.price.toFixed(2)}</strong>

                  <button
                    className="nk-btn-quick-add"
                    onClick={(e) => handleAddToCart(prod.id, e)}
                  >
                    Quick add to Cart 🛍️
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMOTIONAL BANNER (Rust Orange) */}
      <section className="nk-promo-section" id="promo">
        <div className="nk-wrap">
          <div className="nk-promo-card">
            <small className="nk-promo-tag">Promotional Banner</small>
            <h2>SPRING SALE: Save 25% on Select Styles. Use Code: SPRING25</h2>
            <button
              onClick={() => {
                showToast("Applied 25% SPRING25 sitewide outdoor coupon!");
                setIsCartOpen(true);
              }}
              className="nk-btn-navy-pill"
            >
              Shop Sale
            </button>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ALPINE LAYERING SYSTEM BUILDER (Flagship Long-Form Feature) */}
      <section className="nk-section nk-layering-section" id="layering-studio">
        <div className="nk-wrap">
          <div className="nk-section-head text-center">
            <span className="nk-eyebrow">CUSTOM EXPEDITION KIT</span>
            <h2 className="nk-section-title">ALPINE 4-LAYER WEATHERPROOF SYSTEM</h2>
            <p className="nk-sub">Configure your thermal regulation kit for extreme sub-zero ascents. Bundle 3+ layers to save 20%.</p>
          </div>

          <div className="nk-layering-grid">
            <div className="nk-layer-items">
              <label className={`nk-layer-item ${layerBase ? "active" : ""}`}>
                <input
                  type="checkbox"
                  checked={layerBase}
                  onChange={(e) => setLayerBase(e.target.checked)}
                />
                <div>
                  <strong>Layer 1: Base Layer Merino Top ($79.99)</strong>
                  <small>Thermoregulating moisture management next to skin.</small>
                </div>
              </label>

              <label className={`nk-layer-item ${layerFleece ? "active" : ""}`}>
                <input
                  type="checkbox"
                  checked={layerFleece}
                  onChange={(e) => setLayerFleece(e.target.checked)}
                />
                <div>
                  <strong>Layer 2: Alpine Polartec® High-Loft Fleece ($139.99)</strong>
                  <small>Traps core body warmth during high-exertion ascents.</small>
                </div>
              </label>

              <label className={`nk-layer-item ${layerShell ? "active" : ""}`}>
                <input
                  type="checkbox"
                  checked={layerShell}
                  onChange={(e) => setLayerShell(e.target.checked)}
                />
                <div>
                  <strong>Layer 3: Summit Pro GORE-TEX® 3L Jacket ($499.00)</strong>
                  <small>28,000mm stormproof barrier with helmet-compatible hood.</small>
                </div>
              </label>

              <label className={`nk-layer-item ${layerPants ? "active" : ""}`}>
                <input
                  type="checkbox"
                  checked={layerPants}
                  onChange={(e) => setLayerPants(e.target.checked)}
                />
                <div>
                  <strong>Layer 4: TrailBlazer Schoeller® Dynamic Pants ($145.99)</strong>
                  <small>Abrasion-resistant 4-way stretch with crampon kickpatches.</small>
                </div>
              </label>
            </div>

            <div className="nk-layering-summary">
              <h3>YOUR EXPEDITION SPEC</h3>
              <div className="nk-sum-row">
                <span>Selected Layers:</span>
                <strong>{layerItemCount} Items</strong>
              </div>
              <div className="nk-sum-row">
                <span>Regular Total:</span>
                <span className="nk-strike">${layerOriginalPrice.toFixed(2)}</span>
              </div>
              <div className="nk-sum-row highlight">
                <span>20% Expedition Savings:</span>
                <span>-${(layerOriginalPrice * 0.2).toFixed(2)}</span>
              </div>
              <div className="nk-sum-total-row">
                <span>Expedition Bundle Total:</span>
                <strong>${layerDiscountedPrice.toFixed(2)}</strong>
              </div>

              <button
                onClick={() => {
                  setCart((prev) => ({ ...prev, "alpine-system": (prev["alpine-system"] || 0) + 1 }));
                  showToast("Added Complete Alpine Layering System to bag!");
                  setIsCartOpen(true);
                }}
                className="nk-btn-rust-full mt-3"
              >
                ADD COMPLETE SYSTEM ({layerItemCount} ITEMS)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL FABRICS GLOSSARY */}
      <section className="nk-section nk-fabrics-section" id="fabrics">
        <div className="nk-wrap">
          <div className="nk-section-head text-center">
            <span className="nk-eyebrow">HIGH-PERFORMANCE TEXTILES</span>
            <h2 className="nk-section-title">SUSTAINABLE PERFORMANCE TECH</h2>
            <p className="nk-sub">Built to outlast the harshest terrain with 100% recycled fibers and PFAS-free membranes.</p>
          </div>

          <div className="nk-fabrics-grid">
            {technicalFabrics.map((fab) => (
              <div key={fab.name} className="nk-fabric-card">
                <h4>{fab.name}</h4>
                <small className="nk-fabric-spec">{fab.spec}</small>
                <p>{fab.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE JOURNAL (2 Editorial Cards) */}
      <section className="nk-section nk-journal-section" id="journal">
        <div className="nk-wrap">
          <div className="nk-section-head">
            <h2 className="nk-section-title">The Journal</h2>
          </div>

          <div className="nk-journal-grid">
            <div className="nk-journal-card">
              <div className="nk-journal-img">
                <img src={journalLayeringImg} alt="Climber layering technical gear in mountain snow" />
              </div>
              <div className="nk-journal-body">
                <h3>Guide to Layering for Cold Weather</h3>
                <p>Dialing in your base, mid, and hardshell layers for variable mountain weather and heavy physical output.</p>
                <button
                  onClick={() => showToast("Opening Cold Weather Layering Guide")}
                  className="nk-link-btn"
                >
                  Read Article →
                </button>
              </div>
            </div>

            <div className="nk-journal-card">
              <div className="nk-journal-img">
                <img src={journalSustainabilityImg} alt="Sustainable recycled textile innovation in forest" />
              </div>
              <div className="nk-journal-body">
                <h3>Our Commitment to Sustainable Materials</h3>
                <p>How we eliminated PFAS forever chemicals and transitioned to 100% circular post-consumer nylon.</p>
                <button
                  onClick={() => showToast("Opening Sustainable Materials Report")}
                  className="nk-link-btn"
                >
                  Read Article →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Dark Navy / Graphite) */}
      <footer className="nk-footer">
        <div className="nk-wrap nk-footer-grid">
          {/* Col 1: Brand */}
          <div className="nk-footer-col">
            <span className="nk-brand-title">NorthKind</span>
            <p className="nk-footer-tagline">Engineered for extreme summits and conscious exploration.</p>
          </div>

          {/* Col 2: Customer Service */}
          <div className="nk-footer-col">
            <h4>Customer Service</h4>
            <a href="#faq" onClick={(e) => { e.preventDefault(); showToast("FAQ & Repair Portal"); }}>FAQ</a>
            <a href="#shipping" onClick={(e) => { e.preventDefault(); showToast("Free Expedited Shipping Info"); }}>Shipping</a>
            <a href="#returns" onClick={(e) => { e.preventDefault(); showToast("90-Day Returns Policy"); }}>Returns</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); showToast("Contact Alpine Support"); }}>Contact</a>
          </div>

          {/* Col 3: About NorthKind */}
          <div className="nk-footer-col">
            <h4>About NorthKind</h4>
            <a href="#story" onClick={(e) => { e.preventDefault(); showToast("Our Mountain Heritage"); }}>Our Story</a>
            <a href="#sustainability" onClick={(e) => { e.preventDefault(); showToast("Sustainability Standards"); }}>Sustainability</a>
            <a href="#careers" onClick={(e) => { e.preventDefault(); showToast("Careers at NorthKind"); }}>Careers</a>
          </div>

          {/* Col 4: Newsletter */}
          <div className="nk-footer-col">
            <h4>Newsletter Signup</h4>
            <p className="nk-footer-desc">Join NorthKind Alpine Community for early access drops.</p>
            <form
              className="nk-news-form"
              onSubmit={(e) => {
                e.preventDefault();
                showToast("Subscribed to NorthKind Community! Code: SUMMIT15");
                setNewsletterEmail("");
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit">Join</button>
            </form>

            <div className="nk-social-icons mt-3">
              <a href="#instagram" aria-label="Instagram">📷</a>
              <a href="#facebook" aria-label="Facebook">f</a>
              <a href="#twitter" aria-label="Twitter">𝕏</a>
            </div>
          </div>
        </div>

        {/* Subfooter */}
        <div className="nk-subfooter">
          <div className="nk-wrap">
            <p>Copyright © 2024 NorthKind Apparel. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Slide-out Cart Drawer */}
      <div
        className={`nk-drawer-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`nk-cart-drawer ${isCartOpen ? "open" : ""}`}>
        <div className="nk-cart-head">
          <h3>EXPEDITION PACK ({totalCartCount})</h3>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="nk-cart-body">
          {totalCartCount > 0 ? (
            <div className="nk-cart-list">
              {Object.entries(cart).map(([id, qty]) => {
                const prod = bestSellers.find((p) => p.id === id);
                let title = prod ? prod.title : id === "summit-jacket" ? "Summit Pro Jacket (GORE-TEX Pro)" : "Alpine 4-Layer Weatherproof System";
                let price = prod ? prod.price : id === "summit-jacket" ? 499.00 : 691.97;
                let img = prod ? prod.img : id === "summit-jacket" ? spotlightJacketImg : heroHikingImg;

                return (
                  <div key={id} className="nk-cart-item">
                    <img src={img} alt={title} />
                    <div className="nk-cart-item-info">
                      <h4>{title}</h4>
                      <strong>${(price * qty).toFixed(2)}</strong>
                      <div className="nk-cart-qty-row">
                        <button onClick={() => handleUpdateCartQty(id, -1)}><Minus size={12} /></button>
                        <span>{qty}</span>
                        <button onClick={() => handleUpdateCartQty(id, 1)}><Plus size={12} /></button>
                        <button className="nk-trash-link" onClick={() => handleRemoveFromCart(id)}><Trash2 size={14} /></button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="nk-empty-cart">
              <ShoppingBag size={42} className="text-muted" />
              <h4>Your expedition bag is empty</h4>
              <p>Explore GORE-TEX shells, fleece midlayers, and mountaineering gear.</p>
            </div>
          )}
        </div>

        {totalCartCount > 0 && (
          <div className="nk-cart-foot">
            <div className="nk-cart-total-row">
              <span>Subtotal:</span>
              <strong>${cartSubtotal.toFixed(2)}</strong>
            </div>
            <p className="nk-shipping-calc">
              {cartSubtotal >= 100 ? (
                <span className="text-green">✓ Free Expedited Shipping Unlocked!</span>
              ) : (
                `Add $${(100 - cartSubtotal).toFixed(2)} more for Free Shipping!`
              )}
            </p>
            <button
              onClick={() => {
                setIsCartOpen(false);
                showToast("Proceeding to Expedition Checkout...");
              }}
              className="nk-btn-rust-full"
            >
              CHECKOUT • ${cartSubtotal.toFixed(2)}
            </button>
          </div>
        )}
      </div>

      {/* Wishlist Drawer */}
      <div
        className={`nk-drawer-overlay ${isWishlistOpen ? "open" : ""}`}
        onClick={() => setIsWishlistOpen(false)}
      />
      <div className={`nk-cart-drawer ${isWishlistOpen ? "open" : ""}`}>
        <div className="nk-cart-head">
          <h3>SAVED GEAR ({totalWishlistCount})</h3>
          <button onClick={() => setIsWishlistOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="nk-cart-body">
          {totalWishlistCount > 0 ? (
            <div className="nk-cart-list">
              {Object.entries(wishlist).filter(([_, a]) => a).map(([id]) => {
                const prod = bestSellers.find((p) => p.id === id);
                if (!prod) return null;
                return (
                  <div key={id} className="nk-cart-item">
                    <img src={prod.img} alt={prod.title} />
                    <div className="nk-cart-item-info">
                      <h4>{prod.title}</h4>
                      <strong>${prod.price.toFixed(2)}</strong>
                      <button
                        className="nk-btn-rust-sm mt-2"
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
            <div className="nk-empty-cart">
              <Heart size={42} className="text-muted" />
              <h4>No gear saved yet</h4>
            </div>
          )}
        </div>
      </div>

      {/* Quick View Product Modal */}
      {selectedProduct && (
        <div className="nk-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="nk-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="nk-modal-close" onClick={() => setSelectedProduct(null)}>
              <X size={20} />
            </button>

            <div className="nk-modal-grid">
              <div className="nk-modal-img">
                <img src={selectedProduct.img} alt={selectedProduct.title} />
              </div>
              <div className="nk-modal-info">
                <span className="nk-pill">{selectedProduct.category}</span>
                <h2>{selectedProduct.title}</h2>
                <p className="nk-modal-desc">{selectedProduct.subtitle}</p>

                <div className="nk-modal-price-row">
                  <strong>${selectedProduct.price.toFixed(2)}</strong>
                  <span>${selectedProduct.origPrice.toFixed(2)}</span>
                </div>

                <div className="nk-features-list">
                  <div><Check size={14} className="text-rust" /> 100% Recycled Technical Face Fabric</div>
                  <div><Check size={14} className="text-rust" /> Bluesign® Approved & Fair Trade Certified</div>
                  <div><Check size={14} className="text-rust" /> Lifetime NorthKind Expedition Guarantee</div>
                </div>

                <button
                  className="nk-btn-rust-full"
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

export default NorthKindOutdoor;
