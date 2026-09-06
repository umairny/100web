import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  ChevronRight,
  Eye,
  Heart,
  HelpCircle,
  Laptop,
  Layers,
  Lightbulb,
  Maximize2,
  Menu,
  Minus,
  Monitor,
  Package,
  Plus,
  RefreshCw,
  RotateCcw,
  Search,
  Share2,
  Shield,
  ShieldCheck,
  ShoppingBag,
  Sliders,
  Sparkles,
  Star,
  Sun,
  Moon,
  Flame,
  Tag,
  Trash2,
  Truck,
  User,
  Volume2,
  X,
  Zap,
  BookOpen,
  Camera,
} from "lucide-react";
import "./DeskNestSupply.css";

// Photo Assets
import heroDeskImg from "../../assets/optimized/ecommerce/desknest/hero-desk.webp";
import collScandiImg from "../../assets/optimized/ecommerce/desknest/coll-scandi.webp";
import collTechImg from "../../assets/optimized/ecommerce/desknest/coll-tech.webp";
import collBohoImg from "../../assets/optimized/ecommerce/desknest/coll-boho.webp";

import prodChairImg from "../../assets/optimized/ecommerce/desknest/prod-chair.webp";
import prodStandImg from "../../assets/optimized/ecommerce/desknest/prod-stand.webp";
import prodCableImg from "../../assets/optimized/ecommerce/desknest/prod-cable.webp";
import prodMatImg from "../../assets/optimized/ecommerce/desknest/prod-mat.webp";

import auraLampImg from "../../assets/optimized/ecommerce/desknest/aura-lamp.webp";
import journalErgoImg from "../../assets/optimized/ecommerce/desknest/journal-ergo.webp";
import journalCableImg from "../../assets/optimized/ecommerce/desknest/journal-cable.webp";

// 3 Desk Collections Dataset
const deskCollections = [
  {
    id: "scandi",
    title: "Scandi Flow",
    subtitle: "Light natural oak, clean lines & peaceful greenery",
    img: collScandiImg,
    itemCount: "24 items",
    tagline: "Natural White Oak • Airy Lighting • Organic Textures",
  },
  {
    id: "tech",
    title: "Tech Executive",
    subtitle: "Solid dark walnut, dual screens & precision cable control",
    img: collTechImg,
    itemCount: "32 items",
    tagline: "Dark Walnut • Cable Raceways • Multi-Monitor Architecture",
  },
  {
    id: "boho",
    title: "Boho WFH",
    subtitle: "Warm earthy tones, soft lighting & textured cozy accents",
    img: collBohoImg,
    itemCount: "18 items",
    tagline: "Warm Amber Glow • Merino Felt • Rattan Organization",
  },
];

export interface ProductItem {
  id: string;
  title: string;
  category: "Ergonomics" | "Accessories" | "Organization" | "Desk Accessories" | "Lighting";
  price: number;
  origPrice: number;
  rating: number;
  reviews: number;
  img: string;
  badge: string;
  description: string;
  features: string[];
}

// Customer Favorites Dataset
const customerFavorites: ProductItem[] = [
  {
    id: "chair",
    title: "ErgoChair Pro",
    category: "Ergonomics",
    price: 299.0,
    origPrice: 389.0,
    rating: 4.9,
    reviews: 248,
    img: prodChairImg,
    badge: "Bestseller",
    description:
      "Breathable Italian mesh task chair with adaptive lumbar support, 4D armrests, and 135° sync-tilt recline lock.",
    features: [
      "Adaptive dynamic lumbar support pillow",
      "Korean high-tension breathable mesh",
      "Class-4 heavy duty hydraulic gas lift",
      "10-year structural frame warranty",
    ],
  },
  {
    id: "stand",
    title: "Walnut Monitor Stand",
    category: "Accessories",
    price: 85.0,
    origPrice: 110.0,
    rating: 4.8,
    reviews: 184,
    img: prodStandImg,
    badge: "Solid American Walnut",
    description:
      "Hand-finished solid hardwood dual-monitor riser with soft Portuguese cork feet and keyboard clearance channel.",
    features: [
      "FSC®-Certified American Walnut hardwood",
      "Non-slip natural Portuguese cork base feet",
      "Supports dual 27-inch or single 49-inch ultrawide",
      "Integrated 2.5'' keyboard slide-in recess",
    ],
  },
  {
    id: "cable",
    title: "Cable Management Box",
    category: "Organization",
    price: 38.0,
    origPrice: 48.0,
    rating: 4.7,
    reviews: 142,
    img: prodCableImg,
    badge: "Eco Timber Lid",
    description:
      "Fire-retardant ABS cable organizer box with solid walnut magnetic lid to conceal power bricks and cords.",
    features: [
      "Heavy flame-retardant matte ABS body",
      "Magnetic quick-snap solid timber top lid",
      "Dual directional side slots for power cords",
      "Internal silicone ties and cable wrap clips",
    ],
  },
  {
    id: "mat",
    title: "Dual-Sided Desk Mat",
    category: "Desk Accessories",
    price: 39.0,
    origPrice: 52.0,
    rating: 4.9,
    reviews: 310,
    img: prodMatImg,
    badge: "Vegan Leather & Felt",
    description:
      "Waterproof vegan leather on one side and premium Merino wool felt on the other for ultra-smooth mouse tracking.",
    features: [
      "Hydrophobic spill-resistant vegan leather",
      "Premium heat-insulating Merino wool felt",
      "Precision laser-beveled anti-fray edges",
      "Generous 36'' x 16'' layout for full desktop",
    ],
  },
  {
    id: "lamp",
    title: "Aura Smart Halo Lamp",
    category: "Lighting",
    price: 149.99,
    origPrice: 189.99,
    rating: 5.0,
    reviews: 96,
    img: auraLampImg,
    badge: "Wireless Charging",
    description:
      "Architectural ring lamp with 15W Qi wireless fast-charging base, Ra98 color accuracy, and circadian warmth tracking.",
    features: [
      "Ra98 True-Color anti-glare ring illumination",
      "15W MagSafe / Qi fast charging desktop base",
      "Circadian 2700K–6500K touch color shift",
      "Solid aluminum matte sandblasted finish",
    ],
  },
];

// Configurator Options
const woodFinishOptions = [
  {
    id: "walnut",
    name: "Solid American Walnut",
    extra: 0,
    color: "#4a3525",
    gradient: "linear-gradient(135deg, #4a3525 0%, #302015 100%)",
    grain: "Deep rich chocolate grain with natural amber sapwood highlights",
  },
  {
    id: "oak",
    name: "Natural White Oak",
    extra: -20,
    color: "#d2b48c",
    gradient: "linear-gradient(135deg, #d8bc98 0%, #b8986d 100%)",
    grain: "Scandinavian golden honey tone with subtle radial ray flecks",
  },
  {
    id: "ash",
    name: "Midnight Matte Ash",
    extra: 30,
    color: "#1c1917",
    gradient: "linear-gradient(135deg, #2a2725 0%, #171514 100%)",
    grain: "Ebonized black architectural grain with satin anti-fingerprint seal",
  },
];

const deskSizes = [
  { id: "compact", name: '48" x 27" Compact Studio', price: 420, widthPct: "72%" },
  { id: "standard", name: '60" x 30" Standard Executive', price: 560, widthPct: "86%" },
  { id: "expansive", name: '72" x 30" Dual Creator Rig', price: 690, widthPct: "100%" },
];

// Community Desk Setups Dataset
const communitySetups = [
  {
    id: "setup-1",
    author: "@minimalnordic",
    location: "Stockholm, SE",
    title: "Light Oak Sunlight Studio",
    img: collScandiImg,
    gear: "Scandi Desk + Dual-Sided Felt Mat",
  },
  {
    id: "setup-2",
    author: "@dev_alexander",
    location: "Austin, TX",
    title: "Walnut Dual-Display Coding Rig",
    img: collTechImg,
    gear: "60'' Walnut Desk + Monitor Riser + Aura Lamp",
  },
  {
    id: "setup-3",
    author: "@maya_designs",
    location: "Portland, OR",
    title: "Earthy Ceramic Sanctuary",
    img: collBohoImg,
    gear: "Boho WFH Collection + Cable Organizer Box",
  },
  {
    id: "setup-4",
    author: "@steven_craft",
    location: "Tokyo, JP",
    title: "Midnight Executive Suite",
    img: heroDeskImg,
    gear: "Full Custom Walnut Studio Bundle",
  },
];

export function DeskNestSupply() {
  // Cart & Wishlist state
  const [cart, setCart] = useState<{ [id: string]: number }>({
    stand: 1,
    mat: 1,
  });
  const [wishlist, setWishlist] = useState<{ [id: string]: boolean }>({
    chair: true,
  });

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isErgoModalOpen, setIsErgoModalOpen] = useState(false);
  const [activeJournalArticle, setActiveJournalArticle] = useState<"ergo" | "cable" | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");

  // Search Modal State
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryTab, setSelectedCategoryTab] = useState<string>("All");

  // Lamp Light Mode State
  const [lampMode, setLampMode] = useState<"warm" | "neutral" | "cool">("warm");

  // Setup Configurator State
  const [selectedWood, setSelectedWood] = useState(woodFinishOptions[0]);
  const [selectedSize, setSelectedSize] = useState(deskSizes[1]);
  const [includeStand, setIncludeStand] = useState(true);
  const [includeLamp, setIncludeLamp] = useState(true);
  const [includeMat, setIncludeMat] = useState(true);

  // Filtered Products for Customer Favorites
  const filteredProducts = useMemo(() => {
    if (selectedCategoryTab === "All") return customerFavorites.filter((p) => p.id !== "lamp");
    return customerFavorites.filter(
      (p) => p.category.toLowerCase().includes(selectedCategoryTab.toLowerCase()) && p.id !== "lamp"
    );
  }, [selectedCategoryTab]);

  // Search Results
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return customerFavorites;
    return customerFavorites.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Calculations
  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalWishlistCount = Object.values(wishlist).filter(Boolean).length;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (productId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
    const p = customerFavorites.find((item) => item.id === productId);
    showToast(`Added ${p ? p.title : "item"} to your shopping bag!`);
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
    showToast("Item removed from bag");
  };

  const handleToggleWishlist = (productId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWishlist((prev) => {
      const state = !prev[productId];
      showToast(state ? "Added to saved workspace ♡" : "Removed from saved workspace");
      return { ...prev, [productId]: state };
    });
  };

  const cartSubtotal = Object.entries(cart).reduce((total, [id, qty]) => {
    const prod = customerFavorites.find((p) => p.id === id);
    if (prod) return total + prod.price * qty;
    if (id === "lamp") return total + 149.99 * qty;
    if (id === "custom-desk") return total + 795.0 * qty;
    return total;
  }, 0);

  // Configurator total
  const configuratorTotal =
    selectedSize.price +
    selectedWood.extra +
    (includeStand ? 85 : 0) +
    (includeLamp ? 149.99 : 0) +
    (includeMat ? 39 : 0);

  // Scroll & Escape keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
        setIsWishlistOpen(false);
        setMobileMenuOpen(false);
        setSelectedProduct(null);
        setIsErgoModalOpen(false);
        setIsSearchOpen(false);
        setActiveJournalArticle(null);
      }
    };
    const anyModalOpen =
      isCartOpen ||
      isWishlistOpen ||
      mobileMenuOpen ||
      selectedProduct ||
      isErgoModalOpen ||
      isSearchOpen ||
      activeJournalArticle;

    if (anyModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [
    isCartOpen,
    isWishlistOpen,
    mobileMenuOpen,
    selectedProduct,
    isErgoModalOpen,
    isSearchOpen,
    activeJournalArticle,
  ]);

  return (
    <main className="dn-site" id="top" tabIndex={-1}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="dn-toast" role="alert">
          <CheckCircle2 size={16} className="text-sand" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Global Brand Announcement & Hub Navigation Bar */}
      <div className="dn-announcement-bar">
        <div className="dn-wrap dn-announcement-inner">
          <Link to="/ecommerce" className="dn-hub-back-btn" title="Back to All E-Commerce Templates">
            <ArrowLeft size={13} />
            <span>All Stores</span>
          </Link>
          <div className="dn-announcement-text">
            <span>Complimentary Carbon-Neutral Shipping on all orders over $75</span>
            <span className="dn-sep">•</span>
            <span className="dn-highlight">Summer Refresh Event: Use code <strong>REFRESH20</strong> for 20% off</span>
          </div>
          <button
            onClick={() => setIsErgoModalOpen(true)}
            className="dn-announcement-action"
          >
            Ergonomics Calculator ↗
          </button>
        </div>
      </div>

      {/* Main Header Navbar */}
      <header className="dn-header">
        <div className="dn-wrap dn-header-top">
          <div className="dn-header-side">
            <span className="dn-tagline-micro">Architectural Home Workspace</span>
          </div>

          {/* Centered Brand Logo */}
          <a href="#top" className="dn-brand">
            <span className="dn-brand-title">DeskNest</span>
            <span className="dn-brand-sub">SUPPLY</span>
          </a>

          {/* Right Utility Actions */}
          <div className="dn-nav-actions">
            <button
              className="dn-icon-btn"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search catalog"
              title="Search catalog"
            >
              <Search size={19} />
            </button>

            <button
              className="dn-icon-btn"
              onClick={() => showToast("Customer account & orders portal")}
              aria-label="Account"
              title="Customer Account"
            >
              <User size={19} />
            </button>

            <button
              className="dn-icon-btn"
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Wishlist"
              title="Saved Items"
            >
              <div className="dn-badge-wrap">
                <Heart size={19} />
                {totalWishlistCount > 0 && <span className="dn-badge">{totalWishlistCount}</span>}
              </div>
            </button>

            <button
              className="dn-icon-btn dn-cart-trigger"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Bag"
              title="Open Shopping Bag"
            >
              <div className="dn-badge-wrap">
                <ShoppingBag size={19} />
                <span className="dn-badge">{totalCartCount}</span>
              </div>
            </button>

            <button
              className="dn-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Subnavigation Category Links */}
        <nav className="dn-subnav" aria-label="Secondary navigation">
          <div className="dn-wrap dn-subnav-inner">
            <a href="#top" className="dn-sublink active">Home</a>
            <a href="#collections" className="dn-sublink">Desk Collections</a>
            <a href="#configurator" className="dn-sublink">Custom Studio</a>
            <a href="#favorites" className="dn-sublink">Accessories</a>
            <a href="#lamp-innovation" className="dn-sublink">Aura Lamp</a>
            <a href="#journal" className="dn-sublink">The Journal</a>
            <a href="#community" className="dn-sublink">#DeskNestSpaces</a>
            <a href="#promo" className="dn-sublink dn-sale-link">Sale (20% Off)</a>
          </div>
        </nav>
      </header>

      {/* Off-Canvas Mobile Drawer */}
      <div
        className={`dn-drawer-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`dn-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="dn-drawer-head">
          <div>
            <span className="dn-brand-title">DeskNest</span>
            <span className="dn-brand-sub">SUPPLY</span>
          </div>
          <button
            className="dn-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="dn-drawer-links">
          {[
            { label: "Home", href: "#top" },
            { label: "Desk Collections (Scandi, Tech, Boho)", href: "#collections" },
            { label: "Custom Desk Studio Configurator", href: "#configurator" },
            { label: "Customer Favorites & Accessories", href: "#favorites" },
            { label: "Aura Smart Halo Lamp", href: "#lamp-innovation" },
            { label: "The DeskNest Journal & Guides", href: "#journal" },
            { label: "Community Spaces (#DeskNestSpaces)", href: "#community" },
            { label: "Summer Refresh Sale (Code: REFRESH20)", href: "#promo" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="dn-drawer-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{item.label}</span>
              <ChevronRight size={16} />
            </a>
          ))}
        </div>

        <div className="dn-drawer-foot">
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              setIsErgoModalOpen(true);
            }}
            className="dn-btn-outline-pill full-w"
          >
            Open Posture Calculator
          </button>
          <Link to="/ecommerce" className="dn-btn-hub-link full-w">
            Return to All Stores Directory
          </Link>
        </div>
      </div>

      {/* Live Search Modal */}
      {isSearchOpen && (
        <div className="dn-modal-backdrop" onClick={() => setIsSearchOpen(false)}>
          <div className="dn-search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="dn-search-head">
              <div className="dn-search-input-wrap">
                <Search size={20} className="text-sand" />
                <input
                  type="text"
                  placeholder="Search desks, ergonomic chairs, monitor risers, desk pads..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                {searchQuery && (
                  <button className="dn-search-clear" onClick={() => setSearchQuery("")}>
                    <X size={16} />
                  </button>
                )}
              </div>
              <button className="dn-modal-close" onClick={() => setIsSearchOpen(false)}>
                <X size={20} />
              </button>
            </div>

            {/* Quick Search Suggestions */}
            <div className="dn-quick-tags">
              <span className="dn-quick-label">Trending Searches:</span>
              {["Ergonomic Chair", "Monitor Riser", "Desk Mat", "Aura Lamp", "Cable Box"].map(
                (tag) => (
                  <button
                    key={tag}
                    className="dn-quick-tag"
                    onClick={() => setSearchQuery(tag)}
                  >
                    {tag}
                  </button>
                )
              )}
            </div>

            {/* Search Results List */}
            <div className="dn-search-results">
              <div className="dn-search-count">
                {searchResults.length} {searchResults.length === 1 ? "product found" : "products found"}
              </div>
              <div className="dn-search-grid">
                {searchResults.map((prod) => (
                  <div
                    key={prod.id}
                    className="dn-search-item"
                    onClick={() => {
                      setSelectedProduct(prod);
                      setIsSearchOpen(false);
                    }}
                  >
                    <img src={prod.img} alt={prod.title} />
                    <div className="dn-search-info">
                      <span className="dn-search-cat">{prod.category}</span>
                      <h4>{prod.title}</h4>
                      <p>{prod.description.substring(0, 70)}...</p>
                      <strong className="dn-search-price">${prod.price.toFixed(2)}</strong>
                    </div>
                    <button
                      className="dn-btn-quick-add"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(prod.id);
                        showToast(`Added ${prod.title} to bag!`);
                      }}
                    >
                      Add to Bag
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="dn-hero-section">
        <div className="dn-hero-bg">
          <img
            src={heroDeskImg}
            alt="Warm walnut modern workspace setup with curved ultrawide monitor and brass ambient lighting"
          />
          <div className="dn-hero-overlay" />
        </div>

        <div className="dn-wrap dn-hero-content">
          <span className="dn-hero-badge">
            <Sparkles size={14} className="text-sand" />
            <span>2024 Design Guild Award Winner</span>
          </span>

          <h1 className="dn-hero-title">
            CREATE YOUR PERFECT <br />
            WORKSPACE AT HOME.
          </h1>

          <p className="dn-hero-sub">
            Elevate deep focus and comfort with sustainably sourced hardwood desks,
            precision monitor stands, and ergonomic studio accessories.
          </p>

          <div className="dn-hero-buttons">
            <a href="#collections" className="dn-btn-white">
              EXPLORE COLLECTIONS
            </a>
            <a href="#configurator" className="dn-btn-hero-ghost">
              CUSTOM STUDIO CONFIGURATOR ➔
            </a>
          </div>

          <div className="dn-hero-stats">
            <div className="dn-stat-item">
              <strong>100%</strong>
              <span>FSC® Hardwood</span>
            </div>
            <div className="dn-stat-divider" />
            <div className="dn-stat-item">
              <strong>30-Day</strong>
              <span>At-Home Trial</span>
            </div>
            <div className="dn-stat-divider" />
            <div className="dn-stat-item">
              <strong>14,000+</strong>
              <span>Desks Curated</span>
            </div>
          </div>
        </div>
      </section>

      {/* DESIGNED FOR FOCUS: DESK COLLECTIONS (3 Large Visual Cards) */}
      <section className="dn-section dn-collections-section" id="collections">
        <div className="dn-wrap">
          <div className="dn-section-head text-center">
            <span className="dn-eyebrow">CURATED SUITES</span>
            <h2 className="dn-section-title">DESIGNED FOR FOCUS: DESK COLLECTIONS</h2>
            <p className="dn-sub">
              Three harmonious design languages crafted to complement your personal creative rhythm and room aesthetic.
            </p>
          </div>

          <div className="dn-collections-grid">
            {deskCollections.map((col) => (
              <div key={col.id} className="dn-collection-card">
                <div className="dn-col-img-wrap">
                  <img src={col.img} alt={col.title} loading="lazy" />
                  <div className="dn-col-gradient-overlay" />
                  <span className="dn-col-badge">{col.itemCount}</span>
                </div>

                <div className="dn-col-content">
                  <small className="dn-col-tagline">{col.tagline}</small>
                  <h3>{col.title}</h3>
                  <p className="dn-col-sub">{col.subtitle}</p>
                  <button
                    onClick={() => {
                      showToast(`Viewing ${col.title} collection`);
                      const configuratorElem = document.getElementById("configurator");
                      if (configuratorElem) configuratorElem.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="dn-col-btn"
                  >
                    <span>EXPLORE COLLECTION</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST CUES (3 Horizontal Cards) */}
      <section className="dn-trust-section">
        <div className="dn-wrap dn-trust-grid">
          <div className="dn-trust-card">
            <div className="dn-trust-icon-box">
              <Truck size={26} />
            </div>
            <div className="dn-trust-text">
              <h3>FREE CARBON-NEUTRAL SHIPPING</h3>
              <p>Complimentary white-glove packaging on all orders over $75 nationwide.</p>
            </div>
          </div>

          <div className="dn-trust-card">
            <div className="dn-trust-icon-box">
              <div className="dn-return-30-badge">
                <RotateCcw size={24} />
                <span className="dn-num-30">30</span>
              </div>
            </div>
            <div className="dn-trust-text">
              <h3>30-DAY IN-HOME TRIAL</h3>
              <p>Experience the ergonomic difference in your daily workflow risk-free.</p>
            </div>
          </div>

          <div className="dn-trust-card">
            <div className="dn-trust-icon-box">
              <ShieldCheck size={26} />
            </div>
            <div className="dn-trust-text">
              <h3>5-YEAR STRUCTURAL WARRANTY</h3>
              <p>Solid Appalachian hardwood and cold-rolled aircraft aluminum construction.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CUSTOMER FAVORITES (Filtered Product Cards) */}
      <section className="dn-section dn-favorites-section" id="favorites">
        <div className="dn-wrap">
          <div className="dn-section-head text-center">
            <span className="dn-eyebrow">ESSENTIAL PIECES</span>
            <h2 className="dn-section-title">CUSTOMER FAVORITES</h2>
            <p className="dn-sub">
              Precision engineered accessories designed to harmonize with your desktop and eliminate daily clutter.
            </p>

            {/* Interactive Category Filter Pills */}
            <div className="dn-filter-tabs">
              {["All", "Ergonomics", "Accessories", "Organization"].map((category) => (
                <button
                  key={category}
                  className={`dn-filter-tab ${selectedCategoryTab === category ? "active" : ""}`}
                  onClick={() => setSelectedCategoryTab(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="dn-favorites-grid">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="dn-product-card"
                onClick={() => setSelectedProduct(prod)}
              >
                <div className="dn-prod-img-box">
                  <img src={prod.img} alt={prod.title} loading="lazy" />
                  <span className="dn-prod-badge">{prod.badge}</span>
                  <button
                    className={`dn-wish-btn ${wishlist[prod.id] ? "active" : ""}`}
                    onClick={(e) => handleToggleWishlist(prod.id, e)}
                    aria-label={`Save ${prod.title} to wishlist`}
                    title="Save to wishlist"
                  >
                    <Heart
                      size={17}
                      fill={wishlist[prod.id] ? "#1c1917" : "none"}
                      color={wishlist[prod.id] ? "#1c1917" : "#78716c"}
                    />
                  </button>

                  <div className="dn-quick-view-overlay">
                    <span>
                      <Eye size={14} /> Quick View
                    </span>
                  </div>
                </div>

                <div className="dn-prod-body">
                  <div className="dn-prod-meta">
                    <span className="dn-prod-cat">{prod.category}</span>
                    <div className="dn-prod-rating">
                      <Star size={13} fill="#d4a373" color="#d4a373" />
                      <span>{prod.rating}</span>
                      <small>({prod.reviews})</small>
                    </div>
                  </div>

                  <h3 className="dn-prod-title">{prod.title}</h3>
                  <p className="dn-prod-summary">{prod.description}</p>

                  <div className="dn-prod-price-row">
                    <strong className="dn-prod-price">${prod.price.toFixed(2)}</strong>
                    <span className="dn-prod-orig">${prod.origPrice.toFixed(2)}</span>
                  </div>

                  <button
                    className="dn-btn-quick-add"
                    onClick={(e) => handleAddToCart(prod.id, e)}
                  >
                    <ShoppingBag size={14} />
                    <span>QUICK ADD</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMOTIONAL RHYTHM / SUMMER REFRESH EVENT BANNER */}
      <section className="dn-promo-section" id="promo">
        <div className="dn-wrap">
          <div className="dn-promo-card">
            <div className="dn-promo-badge-tag">
              <Sparkles size={14} /> LIMITED TIME PROMOTIONAL RHYTHM
            </div>
            <h2>SUMMER REFRESH WORKSPACE EVENT</h2>
            <h3 className="dn-promo-headline">20% OFF ALL DESKS & ACCESSORIES</h3>
            <p className="dn-promo-desc">
              Upgrade your home office with handcrafted hardwood surfaces and posture-perfect accessories.
            </p>
            <div className="dn-promo-code-box">
              <span>Use Checkout Code:</span>
              <strong className="dn-promo-code-val">REFRESH20</strong>
            </div>
            <div className="dn-promo-action-row">
              <button
                onClick={() => {
                  showToast("Coupon REFRESH20 copied & applied to your bag!");
                  handleAddToCart("mat");
                  setIsCartOpen(true);
                }}
                className="dn-btn-dark-pill"
              >
                APPLY CODE & CLAIM 20% OFF
              </button>
              <button
                onClick={() => setIsErgoModalOpen(true)}
                className="dn-btn-promo-secondary"
              >
                Calculate Desk Dimensions
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED INNOVATION (Spotlight Product Card with Interactive Aura Light Mode) */}
      <section className="dn-section dn-innovation-section" id="lamp-innovation">
        <div className="dn-wrap">
          <div className="dn-section-head text-center">
            <span className="dn-eyebrow">LIGHTING ARCHITECTURE</span>
            <h2 className="dn-section-title">FEATURED INNOVATION</h2>
            <p className="dn-sub">
              Experience the patented Aura Smart Halo Lamp with synchronized circadian temperature control and wireless charging.
            </p>
          </div>

          <div className="dn-innovation-card">
            <div className={`dn-innov-img mode-${lampMode}`}>
              <img
                src={auraLampImg}
                alt="Aura Smart Desk Lamp with wireless charging base"
                loading="lazy"
              />
              <div className={`dn-lamp-ambient-glow glow-${lampMode}`} />
              <div className="dn-lamp-mode-badge">
                {lampMode === "warm" && "2700K Warm Candle"}
                {lampMode === "neutral" && "4000K Focus Daylight"}
                {lampMode === "cool" && "6500K High-Energy Circadian"}
              </div>
            </div>

            <div className="dn-innov-body">
              <div className="dn-innov-badge">PATENTED CIRCADIAN TECH</div>
              <h3 className="dn-innov-title">Aura Smart Halo Lamp</h3>
              <p className="dn-innov-description">
                Engineered specifically for computer screen glare reduction. Casts soft, asymmetrical ambient halo light
                across your entire desk mat without creating reflections on monitor glass.
              </p>

              {/* Interactive Color Temperature Selector */}
              <div className="dn-lamp-controls">
                <span className="dn-control-label">Interactive Color Temperature:</span>
                <div className="dn-temp-selector">
                  <button
                    className={`dn-temp-btn ${lampMode === "warm" ? "active" : ""}`}
                    onClick={() => {
                      setLampMode("warm");
                      showToast("Switched Aura Lamp to 2700K Warm Candle mode");
                    }}
                  >
                    <Flame size={14} className="text-sand" />
                    <span>2700K Warm</span>
                  </button>

                  <button
                    className={`dn-temp-btn ${lampMode === "neutral" ? "active" : ""}`}
                    onClick={() => {
                      setLampMode("neutral");
                      showToast("Switched Aura Lamp to 4000K Focus mode");
                    }}
                  >
                    <Sun size={14} />
                    <span>4000K Neutral</span>
                  </button>

                  <button
                    className={`dn-temp-btn ${lampMode === "cool" ? "active" : ""}`}
                    onClick={() => {
                      setLampMode("cool");
                      showToast("Switched Aura Lamp to 6500K Circadian Daylight mode");
                    }}
                  >
                    <Moon size={14} />
                    <span>6500K Daylight</span>
                  </button>
                </div>
              </div>

              <ul className="dn-innov-features">
                <li>
                  <Check size={16} className="text-sand" />
                  <span>Ra98 True-Color LED Array with zero blue-spike flicker</span>
                </li>
                <li>
                  <Check size={16} className="text-sand" />
                  <span>15W Qi Fast-Charging solid aluminum CNC machined base</span>
                </li>
                <li>
                  <Check size={16} className="text-sand" />
                  <span>Automatic ambient daylight sensor & gentle wake timer</span>
                </li>
              </ul>

              <div className="dn-innov-price-row">
                <div>
                  <strong className="dn-innov-price">$149.99</strong>
                  <span className="dn-innov-orig">$189.99</span>
                </div>
                <button
                  onClick={() => {
                    setCart((prev) => ({ ...prev, lamp: (prev.lamp || 0) + 1 }));
                    showToast("Added Aura Smart Halo Lamp to your bag!");
                    setIsCartOpen(true);
                  }}
                  className="dn-btn-dark-pill"
                >
                  <ShoppingBag size={15} />
                  <span>ADD TO BAG • $149.99</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE WORKSPACE CONFIGURATOR (Live Graphic Visualizer & Studio Controls) */}
      <section className="dn-section dn-configurator-section" id="configurator">
        <div className="dn-wrap">
          <div className="dn-section-head text-center">
            <span className="dn-eyebrow">CUSTOM WORKSPACE STUDIO</span>
            <h2 className="dn-section-title">BUILD YOUR DREAM DESK SETUP</h2>
            <p className="dn-sub">
              Select your solid hardwood desktop surface, dimensions, monitor riser tier, and smart accessories
              with real-time interactive preview.
            </p>
          </div>

          {/* Interactive Live Desk Schematic Visualizer */}
          <div className="dn-visualizer-container">
            <div className="dn-visualizer-header">
              <div className="dn-visualizer-title">
                <Sliders size={16} className="text-sand" />
                <span>Live Custom Desk Schematic</span>
              </div>
              <div className="dn-visualizer-spec-tag">
                {selectedWood.name} • {selectedSize.name.split(" ")[0]}
              </div>
            </div>

            <div className="dn-visualizer-stage">
              {/* Desk Top Surface */}
              <div
                className="dn-vis-tabletop"
                style={{
                  width: selectedSize.widthPct,
                  background: selectedWood.gradient,
                  boxShadow: `0 20px 40px rgba(0,0,0,0.18), inset 0 1px 1px rgba(255,255,255,0.2)`,
                }}
              >
                {/* Desk Width Indicator */}
                <div className="dn-vis-dimension-ruler">
                  <span>◀ {selectedSize.name.split(" ")[0]} Hardwood Surface ▶</span>
                </div>

                {/* Desk Accessory Visual Overlays */}
                <div className="dn-vis-items-layout">
                  {/* Left: Cable Box */}
                  <div className="dn-vis-item dn-vis-cable">
                    <span className="dn-vis-label">Cable Conceal</span>
                  </div>

                  {/* Center: Desk Mat */}
                  {includeMat && (
                    <div className="dn-vis-item dn-vis-mat">
                      <span className="dn-vis-label">Vegan Leather & Felt Mat</span>
                    </div>
                  )}

                  {/* Center-Top: Monitor Stand */}
                  {includeStand && (
                    <div className="dn-vis-item dn-vis-stand">
                      <span className="dn-vis-label">Solid Walnut Dual-Screen Riser</span>
                    </div>
                  )}

                  {/* Right: Aura Lamp */}
                  {includeLamp && (
                    <div className={`dn-vis-item dn-vis-lamp mode-${lampMode}`}>
                      <span className="dn-vis-glow-ring" />
                      <span className="dn-vis-label">Aura Halo Lamp</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Desk Legs / Frame */}
              <div className="dn-vis-legs" style={{ width: selectedSize.widthPct }}>
                <div className="dn-vis-leg left" />
                <div className="dn-vis-beam" />
                <div className="dn-vis-leg right" />
              </div>
            </div>

            <div className="dn-vis-caption">
              <span>Selected Finish: <strong>{selectedWood.name}</strong></span>
              <span className="dn-sep">•</span>
              <span>{selectedWood.grain}</span>
            </div>
          </div>

          <div className="dn-configurator-grid">
            {/* Left Options Controls */}
            <div className="dn-config-controls">
              {/* Step 1: Wood Finish */}
              <div className="dn-config-box">
                <div className="dn-config-step-head">
                  <span className="dn-step-num">1</span>
                  <h4>Select Solid Hardwood Finish</h4>
                </div>
                <div className="dn-wood-options">
                  {woodFinishOptions.map((w) => (
                    <div
                      key={w.id}
                      className={`dn-wood-card ${selectedWood.id === w.id ? "active" : ""}`}
                      onClick={() => setSelectedWood(w)}
                    >
                      <span
                        className="dn-wood-swatch"
                        style={{ background: w.gradient }}
                      />
                      <div className="dn-wood-info">
                        <strong>{w.name}</strong>
                        <small>
                          {w.extra === 0
                            ? "Included Base"
                            : w.extra > 0
                            ? `+$${w.extra}`
                            : `-$${Math.abs(w.extra)}`}
                        </small>
                      </div>
                      {selectedWood.id === w.id && (
                        <span className="dn-check-badge">
                          <Check size={12} />
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 2: Desk Size */}
              <div className="dn-config-box">
                <div className="dn-config-step-head">
                  <span className="dn-step-num">2</span>
                  <h4>Choose Desktop Dimensions</h4>
                </div>
                <div className="dn-size-options">
                  {deskSizes.map((s) => (
                    <div
                      key={s.id}
                      className={`dn-size-card ${selectedSize.id === s.id ? "active" : ""}`}
                      onClick={() => setSelectedSize(s)}
                    >
                      <div className="dn-size-title-row">
                        <span className="dn-radio-indicator">
                          {selectedSize.id === s.id && <span className="dn-radio-dot" />}
                        </span>
                        <div>
                          <strong>{s.name}</strong>
                          <p className="dn-size-note">
                            {s.id === "compact"
                              ? "Ideal for bedrooms and cozy apartment home offices"
                              : s.id === "standard"
                              ? "Our most popular size for dual 27-inch setups"
                              : "Maximum real estate for audio interfaces & triple monitors"}
                          </p>
                        </div>
                      </div>
                      <strong className="dn-size-price">${s.price}</strong>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Add-ons Checklist */}
              <div className="dn-config-box">
                <div className="dn-config-step-head">
                  <span className="dn-step-num">3</span>
                  <h4>Bundled Ergonomic Accessories (Save 15%)</h4>
                </div>
                <div className="dn-addons-list">
                  <label className={`dn-addon-row ${includeStand ? "selected" : ""}`}>
                    <input
                      type="checkbox"
                      checked={includeStand}
                      onChange={(e) => setIncludeStand(e.target.checked)}
                    />
                    <div className="dn-addon-details">
                      <strong>Solid Walnut Dual-Monitor Stand</strong>
                      <small>Elevates displays to eye-level to prevent neck strain</small>
                    </div>
                    <strong className="dn-addon-price">+$85.00</strong>
                  </label>

                  <label className={`dn-addon-row ${includeLamp ? "selected" : ""}`}>
                    <input
                      type="checkbox"
                      checked={includeLamp}
                      onChange={(e) => setIncludeLamp(e.target.checked)}
                    />
                    <div className="dn-addon-details">
                      <strong>Aura Smart Wireless-Charging Halo Lamp</strong>
                      <small>Circadian eye-care lighting with 15W Qi charging base</small>
                    </div>
                    <strong className="dn-addon-price">+$149.99</strong>
                  </label>

                  <label className={`dn-addon-row ${includeMat ? "selected" : ""}`}>
                    <input
                      type="checkbox"
                      checked={includeMat}
                      onChange={(e) => setIncludeMat(e.target.checked)}
                    />
                    <div className="dn-addon-details">
                      <strong>Dual-Sided Vegan Leather & Merino Desk Mat</strong>
                      <small>Reversible waterproof leather / warm wool felt pad</small>
                    </div>
                    <strong className="dn-addon-price">+$39.00</strong>
                  </label>
                </div>
              </div>
            </div>

            {/* Right Summary Card */}
            <div className="dn-config-summary">
              <div className="dn-summary-badge">STUDIO BUILD SPEC</div>
              <h3>YOUR CUSTOM SETUP SPEC</h3>
              <div className="dn-summary-spec">
                <div className="dn-spec-item">
                  <span>Surface Hardwood:</span>
                  <strong>{selectedWood.name}</strong>
                </div>
                <div className="dn-spec-item">
                  <span>Desktop Dimensions:</span>
                  <strong>{selectedSize.name.split(" ")[0]}</strong>
                </div>
                <div className="dn-spec-item">
                  <span>Monitor Shelf:</span>
                  <strong>{includeStand ? "Walnut Dual-Screen Stand (+$85)" : "None"}</strong>
                </div>
                <div className="dn-spec-item">
                  <span>Lighting:</span>
                  <strong>{includeLamp ? "Aura Smart Lamp (+$149.99)" : "None"}</strong>
                </div>
                <div className="dn-spec-item">
                  <span>Surface Desk Mat:</span>
                  <strong>{includeMat ? "Dual-Sided Mat (+$39)" : "None"}</strong>
                </div>
                <div className="dn-spec-item">
                  <span>Assembly & Delivery:</span>
                  <strong className="text-sand">FREE White-Glove ($120 Value)</strong>
                </div>
              </div>

              <div className="dn-summary-foot">
                <div className="dn-summary-total">
                  <small>Integrated Bundle Total</small>
                  <strong>${configuratorTotal.toFixed(2)}</strong>
                </div>
                <button
                  onClick={() => {
                    setCart((prev) => ({
                      ...prev,
                      "custom-desk": (prev["custom-desk"] || 0) + 1,
                    }));
                    showToast("Custom Workspace bundle added to your bag!");
                    setIsCartOpen(true);
                  }}
                  className="dn-btn-dark-pill full-w"
                >
                  <ShoppingBag size={16} />
                  <span>ADD WORKSPACE BUNDLE • ${configuratorTotal.toFixed(2)}</span>
                </button>
                <div className="dn-summary-guarantee">
                  <ShieldCheck size={14} className="text-sand" />
                  <span>Backed by our 30-Day Risk-Free In-Home Trial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY DESK SHOWCASE (#DeskNestSpaces) */}
      <section className="dn-section dn-community-section" id="community">
        <div className="dn-wrap">
          <div className="dn-section-head text-center">
            <span className="dn-eyebrow">COMMUNITY CURATIONS</span>
            <h2 className="dn-section-title">REAL SPACES. REAL FOCUS.</h2>
            <p className="dn-sub">
              Tag <strong>#DeskNestSpaces</strong> on Instagram to be featured in our monthly design anthology.
            </p>
          </div>

          <div className="dn-community-grid">
            {communitySetups.map((item) => (
              <div key={item.id} className="dn-community-card">
                <div className="dn-community-img-wrap">
                  <img src={item.img} alt={item.title} loading="lazy" />
                  <div className="dn-community-overlay">
                    <div className="dn-community-meta">
                      <span className="dn-author">{item.author}</span>
                      <small className="dn-loc">{item.location}</small>
                      <h4>{item.title}</h4>
                      <p className="dn-gear-tag">{item.gear}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE DESKNEST JOURNAL (Rich Editorial Articles) */}
      <section className="dn-section dn-journal-section" id="journal">
        <div className="dn-wrap">
          <div className="dn-section-head text-center">
            <span className="dn-eyebrow">EDITORIAL & ADVICE</span>
            <h2 className="dn-section-title">THE DESKNEST JOURNAL</h2>
            <p className="dn-sub">
              Deep dives into ergonomic science, workspace psychology, and cable routing strategies.
            </p>
          </div>

          <div className="dn-journal-grid">
            {/* Article 1 */}
            <div className="dn-journal-card">
              <div className="dn-journal-img">
                <img src={journalErgoImg} alt="Ergonomic desk setup posture tips" loading="lazy" />
                <span className="dn-journal-badge">Ergonomics Guide</span>
              </div>
              <div className="dn-journal-body">
                <div className="dn-journal-date">7 Min Read • Physical Well-being</div>
                <h3>5 Tips for an Ergonomic Workspace Setup</h3>
                <p>
                  How adjusting your monitor height by just two inches and aligning elbow resting angles
                  can eliminate cervical spine fatigue and boost afternoon focus.
                </p>
                <button
                  onClick={() => setActiveJournalArticle("ergo")}
                  className="dn-journal-link"
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Article 2 */}
            <div className="dn-journal-card">
              <div className="dn-journal-img">
                <img src={journalCableImg} alt="Cable management organization guide" loading="lazy" />
                <span className="dn-journal-badge">Workspace Optimization</span>
              </div>
              <div className="dn-journal-body">
                <div className="dn-journal-date">5 Min Read • Studio Organization</div>
                <h3>Cable Management 101: The Zero-Wire Desk Guide</h3>
                <p>
                  A step-by-step masterclass on concealing heavy power bricks, routing braided cords
                  under-desk, and creating an ultra-clean visual field for cognitive clarity.
                </p>
                <button
                  onClick={() => setActiveJournalArticle("cable")}
                  className="dn-journal-link"
                >
                  <span>Read Article</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dark Graphite Footer */}
      <footer className="dn-footer">
        <div className="dn-wrap dn-footer-grid">
          {/* Col 1: Brand & Newsletter */}
          <div className="dn-footer-brand-col">
            <span className="dn-brand-title">DeskNest</span>
            <span className="dn-brand-sub">SUPPLY</span>
            <p className="dn-footer-lead">
              Crafting premium, sustainable home workspace furniture and desktop architecture for creators,
              developers, and design purists.
            </p>
            <form
              className="dn-news-form"
              onSubmit={(e) => {
                e.preventDefault();
                showToast("Subscribed to DeskNest drops! Enjoy $15 off your first order.");
                setNewsletterEmail("");
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit">JOIN</button>
            </form>
            <div className="dn-social-icons">
              <a href="#instagram" aria-label="Instagram" onClick={(e) => { e.preventDefault(); showToast("Instagram @DeskNestSupply"); }}>
                Instagram
              </a>
              <a href="#pinterest" aria-label="Pinterest" onClick={(e) => { e.preventDefault(); showToast("Pinterest @DeskNest"); }}>
                Pinterest
              </a>
              <a href="#twitter" aria-label="Twitter" onClick={(e) => { e.preventDefault(); showToast("X @DeskNestSupply"); }}>
                𝕏
              </a>
              <a href="#youtube" aria-label="YouTube" onClick={(e) => { e.preventDefault(); showToast("YouTube @DeskNestStudio"); }}>
                YouTube
              </a>
            </div>
          </div>

          {/* Col 2: Customer Care */}
          <div className="dn-footer-col">
            <h4>CUSTOMER SERVICE</h4>
            <a href="#shipping" onClick={(e) => { e.preventDefault(); showToast("Shipping & Global Freight info"); }}>
              Free Carbon-Neutral Shipping
            </a>
            <a href="#returns" onClick={(e) => { e.preventDefault(); showToast("30-Day In-Home Trial Policy"); }}>
              30-Day Return Guarantee
            </a>
            <a href="#warranty" onClick={(e) => { e.preventDefault(); showToast("5-Year Structural Hardwood Warranty"); }}>
              5-Year Warranty
            </a>
            <a href="#calculator" onClick={(e) => { e.preventDefault(); setIsErgoModalOpen(true); }}>
              Ergonomic Height Calculator
            </a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); showToast("Frequently Asked Questions"); }}>
              Care & Oiling Guide
            </a>
          </div>

          {/* Col 3: Quick Links */}
          <div className="dn-footer-col">
            <h4>COLLECTIONS</h4>
            <a href="#collections">Scandi Flow Suite</a>
            <a href="#collections">Tech Executive Suite</a>
            <a href="#collections">Boho WFH Studio</a>
            <a href="#configurator">Custom Studio Desk</a>
            <a href="#lamp-innovation">Aura Smart Halo Lamp</a>
            <Link to="/ecommerce" className="dn-hub-footer-link">
              ← Return to All Stores
            </Link>
          </div>
        </div>

        {/* Subfooter */}
        <div className="dn-subfooter">
          <div className="dn-wrap dn-subfooter-inner">
            <p>© 2024 DeskNest Supply Co. All Rights Reserved. Sustainably made with FSC® Certified Hardwood.</p>
            <div className="dn-subfooter-links">
              <a href="#privacy" onClick={(e) => { e.preventDefault(); showToast("Privacy Policy"); }}>Privacy</a>
              <a href="#terms" onClick={(e) => { e.preventDefault(); showToast("Terms of Service"); }}>Terms</a>
              <a href="#accessibility" onClick={(e) => { e.preventDefault(); showToast("Accessibility statement"); }}>Accessibility</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Slide-out Cart Drawer */}
      <div
        className={`dn-drawer-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`dn-cart-drawer ${isCartOpen ? "open" : ""}`} role="dialog" aria-label="Shopping Bag">
        <div className="dn-cart-head">
          <h3>YOUR SHOPPING BAG ({totalCartCount})</h3>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close Cart">
            <X size={20} />
          </button>
        </div>

        <div className="dn-cart-body">
          {totalCartCount > 0 ? (
            <div className="dn-cart-list">
              {Object.entries(cart).map(([id, qty]) => {
                const prod = customerFavorites.find((p) => p.id === id);
                let title = prod
                  ? prod.title
                  : id === "lamp"
                  ? "Aura Smart Halo Lamp"
                  : "Custom Workspace Studio Bundle";
                let price = prod ? prod.price : id === "lamp" ? 149.99 : 795.0;
                let img = prod ? prod.img : id === "lamp" ? auraLampImg : heroDeskImg;

                return (
                  <div key={id} className="dn-cart-item">
                    <img src={img} alt={title} />
                    <div className="dn-cart-item-info">
                      <h4>{title}</h4>
                      <div className="dn-cart-item-price">${(price * qty).toFixed(2)}</div>
                      <div className="dn-cart-qty-row">
                        <button
                          onClick={() => handleUpdateCartQty(id, -1)}
                          aria-label="Decrease quantity"
                        >
                          <Minus size={12} />
                        </button>
                        <span>{qty}</span>
                        <button
                          onClick={() => handleUpdateCartQty(id, 1)}
                          aria-label="Increase quantity"
                        >
                          <Plus size={12} />
                        </button>
                        <button
                          className="dn-trash-link"
                          onClick={() => handleRemoveFromCart(id)}
                          aria-label="Remove item"
                          title="Remove item"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="dn-empty-cart">
              <ShoppingBag size={44} className="text-muted" />
              <h4>Your shopping bag is empty</h4>
              <p>Explore our solid American walnut monitor risers, desk mats, and ergonomic chairs.</p>
              <button
                className="dn-btn-dark-pill mt-2"
                onClick={() => {
                  setIsCartOpen(false);
                  const favs = document.getElementById("favorites");
                  if (favs) favs.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Shop Customer Favorites
              </button>
            </div>
          )}
        </div>

        {totalCartCount > 0 && (
          <div className="dn-cart-foot">
            <div className="dn-cart-total-row">
              <span>Subtotal:</span>
              <strong>${cartSubtotal.toFixed(2)}</strong>
            </div>
            <p className="dn-shipping-calc">
              {cartSubtotal >= 75 ? (
                <span className="text-green">✓ Free Carbon-Neutral Shipping Unlocked!</span>
              ) : (
                `Add $${(75 - cartSubtotal).toFixed(2)} more for Free Shipping!`
              )}
            </p>
            <button
              onClick={() => {
                setIsCartOpen(false);
                showToast("Proceeding to Secure 256-Bit Checkout...");
              }}
              className="dn-btn-dark-pill full-w"
            >
              PROCEED TO CHECKOUT • ${cartSubtotal.toFixed(2)}
            </button>
          </div>
        )}
      </div>

      {/* Wishlist Drawer */}
      <div
        className={`dn-drawer-overlay ${isWishlistOpen ? "open" : ""}`}
        onClick={() => setIsWishlistOpen(false)}
      />
      <div className={`dn-cart-drawer ${isWishlistOpen ? "open" : ""}`} role="dialog" aria-label="Saved Items">
        <div className="dn-cart-head">
          <h3>SAVED WORKSPACE GEAR ({totalWishlistCount})</h3>
          <button onClick={() => setIsWishlistOpen(false)} aria-label="Close Wishlist">
            <X size={20} />
          </button>
        </div>

        <div className="dn-cart-body">
          {totalWishlistCount > 0 ? (
            <div className="dn-cart-list">
              {Object.entries(wishlist)
                .filter(([_, a]) => a)
                .map(([id]) => {
                  const prod = customerFavorites.find((p) => p.id === id);
                  if (!prod) return null;
                  return (
                    <div key={id} className="dn-cart-item">
                      <img src={prod.img} alt={prod.title} />
                      <div className="dn-cart-item-info">
                        <h4>{prod.title}</h4>
                        <strong>${prod.price.toFixed(2)}</strong>
                        <div className="dn-wish-action-row">
                          <button
                            className="dn-btn-dark-pill dn-btn-sm"
                            onClick={() => {
                              handleAddToCart(id);
                              handleToggleWishlist(id);
                            }}
                          >
                            Move to Bag
                          </button>
                          <button
                            className="dn-trash-link"
                            onClick={() => handleToggleWishlist(id)}
                            aria-label="Remove from wishlist"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="dn-empty-cart">
              <Heart size={44} className="text-muted" />
              <h4>No items saved yet</h4>
              <p>Click the heart icon on any desk accessory to save it to your workspace blueprint.</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick View Product Modal */}
      {selectedProduct && (
        <div className="dn-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="dn-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="dn-modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product view"
            >
              <X size={20} />
            </button>

            <div className="dn-modal-grid">
              <div className="dn-modal-img">
                <img src={selectedProduct.img} alt={selectedProduct.title} />
              </div>
              <div className="dn-modal-info">
                <span className="dn-pill">{selectedProduct.category}</span>
                <h2>{selectedProduct.title}</h2>
                <div className="dn-modal-rating-row">
                  <Star size={14} fill="#d4a373" color="#d4a373" />
                  <strong>{selectedProduct.rating}</strong>
                  <span>({selectedProduct.reviews} customer reviews)</span>
                </div>
                <p className="dn-modal-desc">{selectedProduct.description}</p>

                <div className="dn-modal-price-row">
                  <strong>${selectedProduct.price.toFixed(2)}</strong>
                  <span>${selectedProduct.origPrice.toFixed(2)}</span>
                  <span className="dn-modal-save">
                    Save ${(selectedProduct.origPrice - selectedProduct.price).toFixed(2)}
                  </span>
                </div>

                <div className="dn-features-list">
                  {selectedProduct.features.map((feat, idx) => (
                    <div key={idx}>
                      <Check size={14} className="text-sand" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="dn-modal-buttons">
                  <button
                    className="dn-btn-dark-pill full-w"
                    onClick={() => {
                      handleAddToCart(selectedProduct.id);
                      setSelectedProduct(null);
                    }}
                  >
                    <ShoppingBag size={16} />
                    <span>ADD TO BAG • ${selectedProduct.price.toFixed(2)}</span>
                  </button>
                  <button
                    className="dn-btn-outline-pill full-w"
                    onClick={() => {
                      handleToggleWishlist(selectedProduct.id);
                    }}
                  >
                    <Heart size={15} />
                    <span>
                      {wishlist[selectedProduct.id] ? "Saved in Wishlist" : "Save to Wishlist"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ergonomics Calculator Modal */}
      {isErgoModalOpen && (
        <div className="dn-modal-backdrop" onClick={() => setIsErgoModalOpen(false)}>
          <div className="dn-modal-card dn-modal-ergo" onClick={(e) => e.stopPropagation()}>
            <button
              className="dn-modal-close"
              onClick={() => setIsErgoModalOpen(false)}
              aria-label="Close calculator"
            >
              <X size={20} />
            </button>

            <div className="dn-ergo-content">
              <span className="dn-eyebrow">DESKNEST ERGONOMIC LABS</span>
              <h2>WORKSPACE HEIGHT & POSTURE CALCULATOR</h2>
              <p>
                Achieve neutral spine alignment and reduce neck strain with personalized desk height,
                armrest clearance, and monitor riser height recommendations.
              </p>

              <div className="dn-ergo-form">
                <div className="dn-form-group">
                  <label>Select Your Height</label>
                  <select className="dn-select">
                    <option>5'2" – 5'5" (157 – 165 cm) ➔ 26.0" Desk Height + 3.0" Monitor Riser</option>
                    <option>5'6" – 5'9" (168 – 175 cm) ➔ 28.0" Desk Height + 4.0" Monitor Riser</option>
                    <option defaultValue="default">5'10" – 6'1" (178 – 185 cm) ➔ 29.5" Desk Height + 4.5" Monitor Riser</option>
                    <option>6'2"+ (188 cm+) ➔ 31.0" Desk Height + 5.0" Monitor Riser</option>
                  </select>
                </div>

                <div className="dn-posture-tips-box">
                  <h4>Key Ergonomic Alignment Rules:</h4>
                  <ul>
                    <li>• <strong>Elbow Angle:</strong> Keep elbows bent at 90° to 100° with forearms parallel to floor.</li>
                    <li>• <strong>Eye Level:</strong> Top third of your monitor screen should sit level with horizontal gaze.</li>
                    <li>• <strong>Distance:</strong> Screen should be an arm's length (20''–28'') from your eyes.</li>
                  </ul>
                </div>

                <button
                  className="dn-btn-dark-pill full-w"
                  onClick={() => {
                    setIsErgoModalOpen(false);
                    showToast("Matched your posture spec: 4.5'' Walnut Monitor Stand recommended!");
                    const favs = document.getElementById("favorites");
                    if (favs) favs.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  APPLY ERGONOMIC SPEC TO BROWSER
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Rich Editorial Reader Modal for The DeskNest Journal */}
      {activeJournalArticle && (
        <div className="dn-modal-backdrop" onClick={() => setActiveJournalArticle(null)}>
          <div className="dn-modal-card dn-journal-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="dn-modal-close"
              onClick={() => setActiveJournalArticle(null)}
              aria-label="Close article"
            >
              <X size={20} />
            </button>

            {activeJournalArticle === "ergo" ? (
              <article className="dn-article-content">
                <span className="dn-eyebrow">PHYSICAL ERGONOMICS & HEALTH</span>
                <h2>5 Tips for an Ergonomic Workspace Setup</h2>
                <div className="dn-article-meta">
                  <span>By Dr. Clara Vance, Ergonomic Specialist</span>
                  <span className="dn-sep">•</span>
                  <span>Published in DeskNest Studio Journal</span>
                </div>

                <img
                  src={journalErgoImg}
                  alt="Ergonomic desk posture"
                  className="dn-article-hero-img"
                />

                <div className="dn-article-body">
                  <p className="dn-lead">
                    Prolonged sedentary knowledge work places cumulative micro-strain on the cervical spine and
                    lumbar vertebrae. By implementing these five evidence-backed adjustments, you can eliminate end-of-day
                    tension headaches and significantly heighten focus endurance.
                  </p>

                  <h3>1. Set Your Screen Height to the 1/3 Horizon</h3>
                  <p>
                    The most common workstation pitfall is placing monitors too low on flat desks, forcing the head
                    to pitch forward. Every inch of forward head tilt adds 10 pounds of gravitational pressure to your neck muscles.
                    Using a solid monitor stand to elevate the top third of the glass to natural eye level returns the cervical spine to neutral.
                  </p>

                  <h3>2. Respect the 90-Degree Forearm Rule</h3>
                  <p>
                    Adjust your chair armrests so your shoulders remain fully relaxed and your elbows rest at roughly 90 degrees.
                    Your wrists should hover flat over your keyboard and mouse without upward flexion.
                  </p>

                  <h3>3. The 20-20-20 Circadian Eye Relief</h3>
                  <p>
                    Every 20 minutes, focus on an object at least 20 feet away for 20 seconds. Pair this with our Aura Lamp's
                    circadian color shift to reduce digital eye strain throughout late afternoon sprints.
                  </p>

                  <h3>4. Dynamic Sit-to-Stand Intervals</h3>
                  <p>
                    Rather than standing all day, adopt a 45/15 rhythm: 45 minutes seated with proper lumbar support,
                    followed by 15 minutes standing to stimulate circulation and metabolic energy.
                  </p>
                </div>

                <div className="dn-article-foot">
                  <button
                    className="dn-btn-dark-pill"
                    onClick={() => {
                      setActiveJournalArticle(null);
                      handleAddToCart("stand");
                    }}
                  >
                    Get the Recommended Walnut Monitor Riser ($85.00)
                  </button>
                </div>
              </article>
            ) : (
              <article className="dn-article-content">
                <span className="dn-eyebrow">STUDIO OPTIMIZATION & CRAFT</span>
                <h2>Cable Management 101: The Zero-Wire Desk Guide</h2>
                <div className="dn-article-meta">
                  <span>By Marcus Trent, Senior Hardware Architect</span>
                  <span className="dn-sep">•</span>
                  <span>Published in DeskNest Studio Journal</span>
                </div>

                <img
                  src={journalCableImg}
                  alt="Cable management guide"
                  className="dn-article-hero-img"
                />

                <div className="dn-article-body">
                  <p className="dn-lead">
                    Visual clutter triggers subconscious low-grade cognitive distraction. A workspace free of tangled
                    cables allows the mind to enter flow states with minimal friction.
                  </p>

                  <h3>Step 1: Consolidate Power Strips Under-Desk</h3>
                  <p>
                    Never place multiple wall adapters on top of the desktop. Mount a heavy-duty power strip
                    into an under-desk wire raceway or house it in a discrete timber-lid Cable Management Box.
                  </p>

                  <h3>Step 2: Single-Point Cable Routing</h3>
                  <p>
                    Combine your monitor display cords and power cables into a single braided sleeve,
                    running neatly down one desk leg rather than dangling across open air.
                  </p>

                  <h3>Step 3: Wireless Power Drops</h3>
                  <p>
                    Replace scattered phone and accessory charging cords with integrated wireless charging pads,
                    such as the Qi base built into the Aura Smart Halo Lamp.
                  </p>
                </div>

                <div className="dn-article-foot">
                  <button
                    className="dn-btn-dark-pill"
                    onClick={() => {
                      setActiveJournalArticle(null);
                      handleAddToCart("cable");
                    }}
                  >
                    Add Cable Management Box to Bag ($38.00)
                  </button>
                </div>
              </article>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default DeskNestSupply;
