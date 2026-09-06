import React, { useState, useEffect, useMemo } from "react";
import {
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Compass,
  Droplet,
  Eye,
  Feather,
  Filter,
  Flame,
  Heart,
  HelpCircle,
  Layers,
  Leaf,
  Menu,
  Minus,
  Mountain,
  Package,
  Plus,
  Radio,
  RefreshCw,
  RotateCcw,
  Search,
  Shield,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
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

// NorthKind Mountain Compass Logo SVG
function NorthKindLogo({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 2L29 27H3L16 2Z"
        stroke="#C85A32"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 9L23 23H9L16 9Z"
        fill="#C85A32"
        fillOpacity="0.2"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="18" r="2" fill="#C85A32" />
    </svg>
  );
}

// 3 Product Categories Dataset
const productCategories = [
  {
    id: "men",
    title: "Men's Apparel",
    sub: "Alpine Shells, Midlayers & Trail Pants",
    img: catMenImg,
    btnText: "Shop Men's",
    tag: "Technical Shells",
  },
  {
    id: "women",
    title: "Women's Apparel",
    sub: "Base Layers, Down & Hardshells",
    img: catWomenImg,
    btnText: "Shop Women's",
    tag: "Alpine Fit",
  },
  {
    id: "gear",
    title: "Expedition Gear",
    sub: "Packs, Trekking Poles & Dry Bags",
    img: catGearImg,
    btnText: "Shop Gear",
    tag: "Field Proven",
  },
];

export interface OutdoorProduct {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  origPrice: number;
  rating: number;
  reviews: number;
  img: string;
  category: string;
  techSpec: string;
  weight: string;
  waterproofRating?: string;
  colorOptions: string[];
  badge?: string;
  inStock: boolean;
}

// Best Sellers Dataset
const catalogProducts: OutdoorProduct[] = [
  {
    id: "spotlight-jacket",
    title: "Summit Pro GORE-TEX Jacket",
    subtitle: "3-Layer GORE-TEX® Pro 28,000mm waterproof storm shell with Cohaesive™ cord locks and RECCO® reflector",
    price: 499.00,
    origPrice: 580.00,
    rating: 5.0,
    reviews: 184,
    img: spotlightJacketImg,
    category: "Hardshells",
    techSpec: "GORE-TEX® Pro 3L (28,000mm / <6 RET)",
    weight: "445g (Size M)",
    waterproofRating: "28,000mm",
    colorOptions: ["Rust Orange", "Graphite Navy", "Alpine Slate"],
    badge: "Flagship Shell",
    inStock: true,
  },
  {
    id: "fleece",
    title: "Alpine High-Loft Fleece",
    subtitle: "Polartec® Thermal Pro high-loft breathable insulation with stretch gusset panels for active ascents",
    price: 139.99,
    origPrice: 165.00,
    rating: 4.9,
    reviews: 218,
    img: prodFleeceImg,
    category: "Mid Layers",
    techSpec: "Polartec® Thermal Pro 100% Recycled",
    weight: "360g (Size M)",
    colorOptions: ["Storm Navy", "Black Heather", "Forest Moss"],
    badge: "Bestseller",
    inStock: true,
  },
  {
    id: "pants",
    title: "TrailBlazer Mountaineering Pant",
    subtitle: "Schoeller® 4-way dynamic stretch mountaineering pant with DWR water-repellency and Cordura® kick-patches",
    price: 145.99,
    origPrice: 175.00,
    rating: 4.8,
    reviews: 184,
    img: prodPantsImg,
    category: "Pants & Tights",
    techSpec: "Schoeller® Dynamic with DWR",
    weight: "420g (Size M)",
    colorOptions: ["Earth Brown", "Charcoal Black"],
    badge: "Rugged Durability",
    inStock: true,
  },
  {
    id: "baselayer",
    title: "Merino Wool 200g Base Layer Top",
    subtitle: "100% New Zealand Merino wool 200g thermoregulating next-to-skin base layer with flatlock anti-chafing seams",
    price: 79.99,
    origPrice: 95.00,
    rating: 4.9,
    reviews: 310,
    img: prodBaselayerImg,
    category: "Base Layers",
    techSpec: "100% Natural Merino Wool (18.5 Micron)",
    weight: "195g (Size M)",
    colorOptions: ["Charcoal Grey", "Deep Indigo"],
    badge: "Thermoregulating",
    inStock: true,
  },
  {
    id: "beanie",
    title: "Horizon Merino Mountain Beanie",
    subtitle: "Ribbed organic merino knit winter cap with windproof thermal fleece ear liner for cold mountain bivy nights",
    price: 38.00,
    origPrice: 48.00,
    rating: 4.8,
    reviews: 145,
    img: prodBeanieImg,
    category: "Accessories",
    techSpec: "100% Merino Wool + Windproof Microfleece",
    weight: "65g",
    colorOptions: ["Rust Orange", "Navy Heather", "Oatmeal"],
    badge: "Alpine Staple",
    inStock: true,
  },
];

// Technical Fabric Specifications
const technicalFabrics = [
  {
    id: "goretex",
    name: "GORE-TEX® Pro 3L",
    spec: "28,000mm Waterproof / <6 RET Breathability",
    desc: "Engineered for maximum ruggedness in punishing alpine storms. 100% windproof with microscopic pores that release intense body vapor while stopping torrential rain and snow.",
    icon: Droplet,
    waterproof: "28,000mm",
    breathability: "< 6 RET (Extremely Breathable)",
    durability: "100D High-Tenacity Polyamide",
  },
  {
    id: "polartec",
    name: "Polartec® High-Loft",
    spec: "100% Recycled Thermal Grid Fleece",
    desc: "Traps body warmth in geometric micro-air pockets while allowing moisture vapor to escape during heavy mountain ascents. Dries exceptionally fast and packs down tight.",
    icon: Flame,
    waterproof: "DWR Water-Resistant",
    breathability: "Maximum Air Permeability",
    durability: "Anti-Pilling Shearling Face",
  },
  {
    id: "schoeller",
    name: "Schoeller® Dynamic",
    spec: "Cordura® Reinforced Abrasion Panels",
    desc: "Unrestricted freedom of motion with 4-way mechanical stretch and Kevlar-grade reinforced knees and insteps against crampon tears and jagged granite.",
    icon: Shield,
    waterproof: "Eco-DWR Fluorocarbon-Free",
    breathability: "Active Aeration",
    durability: "Cordura® 500D Reinforcements",
  },
  {
    id: "merino",
    name: "Pure Alpine Merino 200g",
    spec: "18.5 Micron Non-Mulesed Wool",
    desc: "Nature's greatest thermal regulator. Naturally antimicrobial and odor-resistant for multi-day mountain bivouacs, keeping you warm even when damp.",
    icon: Feather,
    waterproof: "Naturally Hydrophobic Fibers",
    breathability: "Natural Vapor Regulation",
    durability: "Core-Spun Nylon Filament",
  },
];

// Field Reports & Mountain Guides
const fieldReports = [
  {
    id: 1,
    name: "Lukas Lindqvist",
    role: "IFMGA Mountain Guide • Chamonix, France",
    rating: 5,
    quote:
      "I guide client teams across Mont Blanc and the Matterhorn. The Summit Pro jacket's storm hood fits over climbing helmets seamlessly without sacrificing peripheral vision. Watertight pit zips dump heat instantly during steep couloir approaches.",
    expedition: "Tested on North Face of Grandes Jorasses",
  },
  {
    id: 2,
    name: "Astrid Vane",
    role: "Arctic Trekking Guide • Svalbard",
    rating: 5,
    quote:
      "When temperatures hit -25°C with 50-knot katabatic winds, gear failures aren't an option. NorthKind's Merino 200g base layer and Polartec fleece combo kept me warm, completely dry, and chafe-free for 14 straight days on ice.",
    expedition: "Tested on Spitsbergen Traverse",
  },
];

export function NorthKindOutdoor() {
  // Shopping Cart & Wishlist State
  const [cart, setCart] = useState<{ [id: string]: number }>({
    fleece: 1,
    pants: 1,
  });
  const [wishlist, setWishlist] = useState<{ [id: string]: boolean }>({
    "spotlight-jacket": true,
  });

  // UI State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<OutdoorProduct | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [activeFabric, setActiveFabric] = useState(technicalFabrics[0]);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0.25); // Default SPRIN025
  const [couponStatus, setCouponStatus] = useState<string>("SPRIN025 applied (25% off sitewide!)");
  const [spotlightColor, setSpotlightColor] = useState("Rust Orange");
  const [spotlightSize, setSpotlightSize] = useState("M");
  const [activeJournalModal, setActiveJournalModal] = useState<"layering" | "sustainability" | null>(null);

  // Toast notification
  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  // Cart operations
  const handleAddToCart = (productId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + 1,
    }));
    const p = catalogProducts.find((item) => item.id === productId);
    showToast(`Added ${p ? p.title : "gear"} to expedition pack!`);
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
    showToast("Removed item from expedition pack");
  };

  const handleToggleWishlist = (productId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWishlist((prev) => {
      const state = !prev[productId];
      showToast(state ? "Saved to equipment wishlist" : "Removed from wishlist");
      return { ...prev, [productId]: state };
    });
  };

  // Totals
  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalWishlistCount = Object.values(wishlist).filter(Boolean).length;

  const rawCartSubtotal = useMemo(() => {
    return Object.entries(cart).reduce((total, [id, qty]) => {
      const prod = catalogProducts.find((p) => p.id === id);
      if (prod) return total + prod.price * qty;
      return total;
    }, 0);
  }, [cart]);

  const discountAmount = rawCartSubtotal * appliedDiscount;
  const cartSubtotal = Math.max(0, rawCartSubtotal - discountAmount);

  // Filtered & Sorted Catalog
  const filteredProducts = useMemo(() => {
    let list = [...catalogProducts];
    if (selectedCategory !== "All") {
      list = list.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.subtitle.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.techSpec.toLowerCase().includes(q)
      );
    }
    if (sortBy === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "rating") {
      list.sort((a, b) => b.rating - a.rating);
    }
    return list;
  }, [selectedCategory, searchQuery, sortBy]);

  // Live Search Suggestions
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return catalogProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.techSpec.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Coupon application
  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === "SPRIN025") {
      setAppliedDiscount(0.25);
      setCouponStatus("SPRIN025 applied: 25% discount unlocked!");
      showToast("Applied 25% Off Summit Promo!");
    } else if (code === "NORTH15") {
      setAppliedDiscount(0.15);
      setCouponStatus("NORTH15 applied: 15% discount unlocked!");
      showToast("Applied 15% Off Expedition Code!");
    } else {
      showToast("Invalid promo code. Try SPRIN025 or NORTH15");
    }
    setCouponCode("");
  };

  // Keyboard and modal traps
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
        setIsWishlistOpen(false);
        setMobileMenuOpen(false);
        setSelectedProduct(null);
        setIsSearchActive(false);
        setActiveJournalModal(null);
      }
    };
    if (isCartOpen || isWishlistOpen || mobileMenuOpen || selectedProduct || activeJournalModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isCartOpen, isWishlistOpen, mobileMenuOpen, selectedProduct, activeJournalModal]);

  return (
    <main className="nk-site" id="top" tabIndex={-1}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="nk-toast" role="status" aria-live="polite">
          <Compass size={16} className="text-rust" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Announcement Bar */}
      <div className="nk-topbar">
        <div className="nk-wrap nk-topbar-inner">
          <div className="nk-topbar-left">
            <span className="nk-badge-pill">ALPINE SEASON</span>
            <span>Use code <strong>SPRIN025</strong> for 25% off technical shells & layers</span>
          </div>
          <div className="nk-topbar-right">
            <span>Free Express Shipping on Orders Over $100</span>
            <span className="nk-dot-sep">•</span>
            <span>90-Day Alpine Trail Tested Guarantee</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="nk-header">
        <div className="nk-wrap nk-header-inner">
          {/* Logo */}
          <a href="#top" className="nk-brand" aria-label="NorthKind Outdoor Home">
            <div className="nk-brand-logo-group">
              <NorthKindLogo size={28} />
              <div className="nk-brand-text">
                <span className="nk-brand-title">NorthKind</span>
                <span className="nk-brand-sub">Alpine Systems</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="nk-nav-links" aria-label="Main Navigation">
            <a href="#categories" className="nk-nav-link">Categories</a>
            <a href="#spotlight" className="nk-nav-link">Summit Pro</a>
            <a href="#catalog" className="nk-nav-link">Bestsellers</a>
            <a href="#technology" className="nk-nav-link">Fabric Tech</a>
            <a href="#journal" className="nk-nav-link">The Journal</a>
            <a href="#reviews" className="nk-nav-link">Field Reports</a>
          </nav>

          {/* Nav Right Utilities */}
          <div className="nk-nav-actions">
            {/* Search Input */}
            <div className="nk-search-container">
              <div className={`nk-search-bar ${isSearchActive ? "active" : ""}`}>
                <Search size={16} className="nk-search-icon" />
                <input
                  type="text"
                  placeholder="Search shells, merino, packs..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchActive(true);
                  }}
                  onFocus={() => setIsSearchActive(true)}
                  aria-label="Search outdoor apparel"
                />
                {searchQuery && (
                  <button
                    className="nk-search-clear"
                    onClick={() => {
                      setSearchQuery("");
                      setIsSearchActive(false);
                    }}
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>

              {/* Live Search Popup */}
              {isSearchActive && searchResults.length > 0 && (
                <div className="nk-search-dropdown">
                  <div className="nk-search-head">
                    <span>{searchResults.length} Products Found</span>
                    <button onClick={() => setIsSearchActive(false)} className="nk-text-btn">Close</button>
                  </div>
                  <div className="nk-search-results-list">
                    {searchResults.map((prod) => (
                      <div
                        key={prod.id}
                        className="nk-search-result-item"
                        onClick={() => {
                          setSelectedProduct(prod);
                          setIsSearchActive(false);
                        }}
                      >
                        <img src={prod.img} alt={prod.title} />
                        <div className="nk-search-item-info">
                          <h4>{prod.title}</h4>
                          <span>{prod.category} • ${prod.price.toFixed(2)}</span>
                        </div>
                        <button
                          className="nk-search-add-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleAddToCart(prod.id);
                          }}
                        >
                          Add
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist Button (Desktop) */}
            <button
              className="nk-icon-btn nk-desktop-action"
              onClick={() => setIsWishlistOpen(true)}
              aria-label={`Wishlist with ${totalWishlistCount} items`}
            >
              <div className="nk-badge-wrap">
                <Heart size={20} />
                {totalWishlistCount > 0 && <span className="nk-badge">{totalWishlistCount}</span>}
              </div>
            </button>

            {/* Cart Button (Desktop) */}
            <button
              className="nk-cart-btn nk-desktop-action"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Cart with ${totalCartCount} items`}
            >
              <ShoppingBag size={18} />
              <span className="nk-cart-btn-label">Pack</span>
              <span className="nk-cart-badge">{totalCartCount}</span>
            </button>

            {/* Mobile Search Toggle */}
            <button
              className="nk-mobile-search-toggle"
              onClick={() => {
                const el = document.getElementById("catalog");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setIsSearchActive(true);
              }}
              aria-label="Open search"
            >
              <Search size={20} />
            </button>

            {/* Mobile Toggle */}
            <button
              className="nk-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
          <div className="nk-brand-logo-group">
            <NorthKindLogo size={24} />
            <span className="nk-brand-title">NorthKind</span>
          </div>
          <button className="nk-close-btn" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <div className="nk-mobile-promo-banner">
          <span className="nk-badge-pill">SPRIN025</span>
          <strong>25% OFF TECHNICAL APPAREL</strong>
          <small>Use code at checkout today</small>
        </div>

        <div className="nk-drawer-links">
          {[
            { label: "Product Categories", href: "#categories" },
            { label: "Summit Pro GORE-TEX", href: "#spotlight" },
            { label: "Bestselling Gear", href: "#catalog" },
            { label: "Technical Fabric Systems", href: "#technology" },
            { label: "The Expedition Journal", href: "#journal" },
            { label: "Guide Field Reports", href: "#reviews" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="nk-drawer-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{item.label}</span>
              <ChevronRight size={16} />
            </a>
          ))}
        </div>

        <div className="nk-drawer-footer">
          <div className="nk-trust-mini">
            <ShieldCheck size={16} className="text-rust" />
            <span>Tested to Sub-Zero Alpine Extremes</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="nk-hero-section">
        <div className="nk-hero-bg">
          <img
            src={heroHikingImg}
            alt="Mountaineers in rust and navy technical GORE-TEX jackets trekking along an alpine mountain ridge at golden hour sunrise"
            className="nk-hero-img"
          />
          <div className="nk-hero-overlay" />
        </div>

        <div className="nk-wrap nk-hero-content">
          <div className="nk-hero-tag">
            <Mountain size={14} className="text-rust" />
            <span>EXPEDITION-GRADE ALPINE SYSTEMS</span>
          </div>

          <h1 className="nk-hero-title">
            EXPLORE FURTHER. <br />
            NORTHKIND.
          </h1>

          <p className="nk-hero-sub">
            Purpose-built mountaineering hardshells, breathable high-loft insulation, and abrasion-resistant technical pants engineered to endure the most punishing alpine conditions on earth.
          </p>

          <div className="nk-hero-cta-group">
            <a href="#catalog" className="nk-btn-rust">
              SHOP NEW ARRIVALS <ArrowRight size={16} />
            </a>
            <a href="#spotlight" className="nk-btn-outline-white">
              DISCOVER SUMMIT PRO
            </a>
          </div>

          <div className="nk-hero-specs-row">
            <div className="nk-hero-spec-item">
              <Droplet size={18} className="text-rust" />
              <div>
                <strong>28,000mm</strong>
                <span>GORE-TEX® Waterproofing</span>
              </div>
            </div>
            <div className="nk-hero-spec-item">
              <Wind size={18} className="text-rust" />
              <div>
                <strong>100% Windproof</strong>
                <span>Zero Wind Chill Permeability</span>
              </div>
            </div>
            <div className="nk-hero-spec-item">
              <ShieldCheck size={18} className="text-rust" />
              <div>
                <strong>Sub-Zero Tested</strong>
                <span>Certified Alpine Guides</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES (3 Cards) */}
      <section className="nk-section nk-categories-section" id="categories">
        <div className="nk-wrap">
          <div className="nk-section-head text-center">
            <span className="nk-eyebrow">BUILT FOR RUGGED ASCENTS</span>
            <h2 className="nk-section-title">PRODUCT CATEGORIES</h2>
            <p className="nk-sub">Engineered layering systems tailored specifically for high-output mountaineering, alpine climbing, and backcountry expeditions.</p>
          </div>

          <div className="nk-categories-grid">
            {productCategories.map((cat) => (
              <div key={cat.id} className="nk-cat-card">
                <div className="nk-cat-img-box">
                  <img src={cat.img} alt={cat.title} loading="lazy" />
                  <span className="nk-cat-badge">{cat.tag}</span>
                  <div className="nk-cat-overlay">
                    <h3>{cat.title}</h3>
                    <p>{cat.sub}</p>
                    <button
                      onClick={() => {
                        const targetCat = cat.id === "men" ? "Hardshells" : cat.id === "women" ? "Base Layers" : "Accessories";
                        setSelectedCategory(targetCat);
                        const el = document.getElementById("catalog");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                        showToast(`Filtered for ${cat.title}`);
                      }}
                      className="nk-btn-white-box"
                    >
                      {cat.btnText} <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEASONAL HIGHLIGHT: SUMMIT PRO JACKET */}
      <section className="nk-section nk-spotlight-section" id="spotlight">
        <div className="nk-wrap">
          <div className="nk-spotlight-card">
            <div className="nk-spotlight-img-wrap">
              <img
                src={spotlightJacketImg}
                alt="Summit Pro GORE-TEX Pro 3L mountaineering jacket in alpine rust orange"
                loading="lazy"
              />
              <div className="nk-spotlight-photo-pill">
                <span>GORE-TEX® PRO 3L</span>
              </div>
            </div>

            <div className="nk-spotlight-body">
              <span className="nk-spotlight-eyebrow">SEASONAL PINNACLE HARD置HELL</span>
              <h2 className="nk-spotlight-title">Summit Pro Jacket</h2>
              <p className="nk-spotlight-tagline">
                Our ultimate alpine armor. 3-Layer GORE-TEX® Pro fabric with micro-grid backer provides unmatched abrasion resistance on sheer granite while weighing only 445 grams.
              </p>

              {/* Color Swatches */}
              <div className="nk-color-picker-row">
                <span className="nk-picker-label">Colorway: <strong>{spotlightColor}</strong></span>
                <div className="nk-color-swatches">
                  {[
                    { name: "Rust Orange", hex: "#C85A32" },
                    { name: "Graphite Navy", hex: "#1A222C" },
                    { name: "Alpine Slate", hex: "#64748B" },
                  ].map((col) => (
                    <button
                      key={col.name}
                      className={`nk-swatch-btn ${spotlightColor === col.name ? "active" : ""}`}
                      style={{ backgroundColor: col.hex }}
                      onClick={() => setSpotlightColor(col.name)}
                      aria-label={`Select color ${col.name}`}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selector */}
              <div className="nk-size-picker-row">
                <span className="nk-picker-label">Alpine Fit Size:</span>
                <div className="nk-size-swatches">
                  {["S", "M", "L", "XL"].map((sz) => (
                    <button
                      key={sz}
                      className={`nk-size-btn ${spotlightSize === sz ? "active" : ""}`}
                      onClick={() => setSpotlightSize(sz)}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Specs Checklist */}
              <ul className="nk-spotlight-specs">
                <li>
                  <Check size={16} className="text-rust" />
                  <span><strong>28,000mm Waterproof & Breathable</strong> — 100% taped seams with 8mm GORE® seam tape</span>
                </li>
                <li>
                  <Check size={16} className="text-rust" />
                  <span><strong>StormHood™ Helmet Compatible</strong> — Single-pull Cohaesive™ co-molded cord locks</span>
                </li>
                <li>
                  <Check size={16} className="text-rust" />
                  <span><strong>Embedded RECCO® Reflector</strong> — Searchable rescue technology in alpine terrain</span>
                </li>
              </ul>

              <div className="nk-spotlight-action-row">
                <div className="nk-spotlight-pricing">
                  <div className="nk-spotlight-price">$499.00</div>
                  <span className="nk-spotlight-orig">$580.00</span>
                  <span className="nk-save-badge">Save $81</span>
                </div>
                <button
                  onClick={() => {
                    handleAddToCart("spotlight-jacket");
                    setIsCartOpen(true);
                  }}
                  className="nk-btn-rust"
                >
                  ADD TO EXPEDITION PACK <ShoppingBag size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUSTED QUALITY / PERFORMANCE CUES */}
      <section className="nk-trust-section">
        <div className="nk-wrap">
          <div className="nk-trust-grid">
            <div className="nk-trust-card">
              <div className="nk-trust-icon-box">
                <Truck size={26} />
              </div>
              <div className="nk-trust-info">
                <h3>FREE EXPEDITION SHIPPING</h3>
                <p>Carbon-neutral express delivery on all orders over $100.</p>
              </div>
            </div>

            <div className="nk-trust-card">
              <div className="nk-trust-icon-box">
                <RotateCcw size={26} />
              </div>
              <div className="nk-trust-info">
                <h3>90-DAY TRAIL-TESTED RETURNS</h3>
                <p>Test on real trails. If you aren't completely satisfied, return for full credit.</p>
              </div>
            </div>

            <div className="nk-trust-card">
              <div className="nk-trust-icon-box">
                <ShieldCheck size={26} />
              </div>
              <div className="nk-trust-info">
                <h3>LIFETIME IRONCLAD WARRANTY</h3>
                <p>We stand behind our seam welding and materials against manufacturing defects for life.</p>
              </div>
            </div>

            <div className="nk-trust-card">
              <div className="nk-trust-icon-box">
                <Star size={26} />
              </div>
              <div className="nk-trust-info">
                <h3>4.9★ GUIDE-VERIFIED</h3>
                <p>Trusted daily by professional IFMGA guides in the Alps and Rockies.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BEST SELLERS / PRODUCT CATALOG */}
      <section className="nk-section nk-catalog-section" id="catalog">
        <div className="nk-wrap">
          <div className="nk-section-head text-center">
            <span className="nk-eyebrow">EXPEDITION-PROVEN ESSENTIALS</span>
            <h2 className="nk-section-title">BEST SELLERS</h2>
            <p className="nk-sub">Our most trusted garments chosen by climbers, backcountry skiers, and thru-hikers worldwide.</p>
          </div>

          {/* Controls: Filter & Sort */}
          <div className="nk-catalog-controls">
            <div className="nk-filter-tabs">
              {["All", "Hardshells", "Mid Layers", "Base Layers", "Pants & Tights", "Accessories"].map((cat) => (
                <button
                  key={cat}
                  className={`nk-filter-tab ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="nk-sort-box">
              <SlidersHorizontal size={15} className="text-muted" />
              <span className="nk-sort-label">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="nk-sort-select"
                aria-label="Sort products"
              >
                <option value="featured">Featured Expeditions</option>
                <option value="rating">Highest Rated (5.0★)</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="nk-products-grid">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="nk-product-card"
                onClick={() => setSelectedProduct(prod)}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${prod.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setSelectedProduct(prod);
                }}
              >
                <div className="nk-prod-img-box">
                  <img src={prod.img} alt={prod.title} loading="lazy" />
                  {prod.badge && <span className="nk-prod-badge">{prod.badge}</span>}
                  <button
                    className={`nk-wish-btn ${wishlist[prod.id] ? "active" : ""}`}
                    onClick={(e) => handleToggleWishlist(prod.id, e)}
                    aria-label={wishlist[prod.id] ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart
                      size={16}
                      fill={wishlist[prod.id] ? "#C85A32" : "none"}
                      color={wishlist[prod.id] ? "#C85A32" : "#94A3B8"}
                    />
                  </button>
                  <span className="nk-prod-weight">{prod.weight}</span>
                </div>

                <div className="nk-prod-body">
                  <div className="nk-prod-meta">
                    <span className="nk-prod-cat">{prod.category}</span>
                    <div className="nk-prod-rating">
                      <Star size={13} fill="#C85A32" color="#C85A32" />
                      <span>{prod.rating.toFixed(1)}</span>
                      <small>({prod.reviews})</small>
                    </div>
                  </div>

                  <h3 className="nk-prod-title">{prod.title}</h3>
                  <p className="nk-prod-desc">{prod.subtitle}</p>

                  <div className="nk-prod-tech-tag">
                    <Zap size={12} className="text-rust" />
                    <span>{prod.techSpec}</span>
                  </div>

                  <div className="nk-prod-foot">
                    <div className="nk-price-stack">
                      <strong className="nk-prod-price">${prod.price.toFixed(2)}</strong>
                      {prod.origPrice > prod.price && (
                        <span className="nk-orig-price">${prod.origPrice.toFixed(2)}</span>
                      )}
                    </div>

                    <button
                      className="nk-btn-quick-add"
                      onClick={(e) => handleAddToCart(prod.id, e)}
                      aria-label={`Add ${prod.title} to bag`}
                    >
                      <Plus size={14} /> Quick Add
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="nk-empty-catalog">
              <HelpCircle size={40} className="text-muted" />
              <h3>No alpine garments match your filter</h3>
              <p>Try resetting filters or adjusting search parameters.</p>
              <button
                className="nk-btn-rust mt-2"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PROMOTIONAL BANNER: SPRING SALE */}
      <section className="nk-promo-section">
        <div className="nk-wrap">
          <div className="nk-promo-card">
            <div className="nk-promo-content">
              <span className="nk-promo-eyebrow">SPRING EXPEDITION EVENT</span>
              <h2>SAVE 25% ON SELECT ALPINE STYLES</h2>
              <p>Use discount code <strong>SPRIN025</strong> at checkout for 25% off all technical shells, midlayers, and mountaineering pants.</p>
              <button
                onClick={() => {
                  setAppliedDiscount(0.25);
                  setCouponStatus("SPRIN025 applied: 25% discount unlocked!");
                  showToast("Applied 25% SPRIN025 coupon!");
                  setIsCartOpen(true);
                }}
                className="nk-btn-white-pill"
              >
                SHOP SALE NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNICAL FABRIC SPECIFICATIONS MATRIX */}
      <section className="nk-section nk-tech-section" id="technology">
        <div className="nk-wrap">
          <div className="nk-section-head text-center">
            <span className="nk-eyebrow">MATERIAL SCIENCE & ENGINEERING</span>
            <h2 className="nk-section-title">TECHNICAL FABRIC SYSTEMS</h2>
            <p className="nk-sub">We partner with premier textile innovators to build durable, breathable, and weather-resistant gear that withstands the elements.</p>
          </div>

          <div className="nk-tech-tabs">
            {technicalFabrics.map((f) => {
              const Icon = f.icon;
              return (
                <button
                  key={f.id}
                  className={`nk-tech-tab ${activeFabric.id === f.id ? "active" : ""}`}
                  onClick={() => setActiveFabric(f)}
                >
                  <Icon size={16} />
                  <span>{f.name}</span>
                </button>
              );
            })}
          </div>

          <div className="nk-tech-detail-card">
            <div className="nk-tech-detail-main">
              <span className="nk-tech-spec-label">{activeFabric.spec}</span>
              <h3>{activeFabric.name}</h3>
              <p>{activeFabric.desc}</p>
            </div>

            <div className="nk-tech-metrics">
              <div className="nk-metric-box">
                <span className="nk-metric-title">Waterproof Rating</span>
                <strong>{activeFabric.waterproof}</strong>
              </div>
              <div className="nk-metric-box">
                <span className="nk-metric-title">Breathability</span>
                <strong>{activeFabric.breathability}</strong>
              </div>
              <div className="nk-metric-box">
                <span className="nk-metric-title">Durability Face</span>
                <strong>{activeFabric.durability}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE EXPEDITION JOURNAL */}
      <section className="nk-section nk-journal-section" id="journal">
        <div className="nk-wrap">
          <div className="nk-section-head text-center">
            <span className="nk-eyebrow">STORIES FROM THE TRAIL</span>
            <h2 className="nk-section-title">THE JOURNAL</h2>
            <p className="nk-sub">Expert alpine knowledge, field-tested layering protocols, and our ongoing planetary responsibility.</p>
          </div>

          <div className="nk-journal-grid">
            {/* Article 1 */}
            <div className="nk-journal-card">
              <div className="nk-journal-img-wrap">
                <img
                  src={journalLayeringImg}
                  alt="Mountaineer demonstrating cold weather layering in snowy alpine basecamp"
                  loading="lazy"
                />
                <span className="nk-journal-tag">Field Guide</span>
              </div>
              <div className="nk-journal-body">
                <h3>Guide to Layering for Sub-Zero Alpine Weather</h3>
                <p>
                  Mastering the three-tier system: next-to-skin moisture transport, lofted thermal insulation, and storm-proof vapor breathability.
                </p>
                <button
                  className="nk-journal-link"
                  onClick={() => setActiveJournalModal("layering")}
                >
                  Read Expedition Guide <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Article 2 */}
            <div className="nk-journal-card">
              <div className="nk-journal-img-wrap">
                <img
                  src={journalSustainabilityImg}
                  alt="Lush pristine mountain forest and sustainable recycled outdoor technical fabrics"
                  loading="lazy"
                />
                <span className="nk-journal-tag">Sustainability</span>
              </div>
              <div className="nk-journal-body">
                <h3>Our Commitment to 100% Recycled & Fluorocarbon-Free DWR</h3>
                <p>
                  Why we eliminated harmful forever chemicals (PFCs/PFAS) while maintaining maximum waterproof resistance in demanding mountain terrain.
                </p>
                <button
                  className="nk-journal-link"
                  onClick={() => setActiveJournalModal("sustainability")}
                >
                  Read Planetary Report <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FIELD REPORTS / GUIDE TESTIMONIALS */}
      <section className="nk-section nk-reviews-section" id="reviews">
        <div className="nk-wrap">
          <div className="nk-section-head text-center">
            <span className="nk-eyebrow">TESTED IN THE WILD</span>
            <h2 className="nk-section-title">GUIDE FIELD REPORTS</h2>
            <div className="nk-rating-summary">
              <div className="nk-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#C85A32" color="#C85A32" />
                ))}
              </div>
              <strong>4.9 / 5.0 Star Rating</strong>
              <span>from 1,840+ alpine ascents</span>
            </div>
          </div>

          <div className="nk-reports-grid">
            {fieldReports.map((report) => (
              <div key={report.id} className="nk-report-card">
                <div className="nk-report-stars">
                  {[...Array(report.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#C85A32" color="#C85A32" />
                  ))}
                </div>
                <p className="nk-report-quote">"{report.quote}"</p>
                <div className="nk-report-footer">
                  <div className="nk-report-avatar">{report.name.charAt(0)}</div>
                  <div>
                    <strong>{report.name}</strong>
                    <small>{report.role}</small>
                    <span className="nk-report-loc">{report.expedition}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="nk-footer">
        <div className="nk-wrap nk-footer-grid">
          {/* Col 1 */}
          <div className="nk-footer-brand-col">
            <div className="nk-brand-logo-group">
              <NorthKindLogo size={26} />
              <div className="nk-brand-text">
                <span className="nk-brand-title">NorthKind</span>
                <span className="nk-brand-sub">Alpine Systems</span>
              </div>
            </div>
            <p className="nk-footer-desc">
              Dedicated to designing uncompromising mountain equipment and outerwear for explorers who venture beyond the marked trail.
            </p>
            <div className="nk-footer-cert">
              <ShieldCheck size={16} className="text-rust" />
              <span>Certified B-Corp & 1% for the Planet Member</span>
            </div>
          </div>

          {/* Col 2 */}
          <div className="nk-footer-col">
            <h4>CUSTOMER CARE</h4>
            <a href="#shipping" onClick={(e) => { e.preventDefault(); showToast("Free Shipping on all orders over $100"); }}>Shipping & Tracking</a>
            <a href="#returns" onClick={(e) => { e.preventDefault(); showToast("90-Day Trail Tested Returns Policy"); }}>90-Day Returns</a>
            <a href="#warranty" onClick={(e) => { e.preventDefault(); showToast("Lifetime Ironclad Warranty details"); }}>Warranty & Repairs</a>
            <a href="#sizing" onClick={(e) => { e.preventDefault(); showToast("Alpine Fit Sizing Chart"); }}>Size & Fit Guide</a>
          </div>

          {/* Col 3 */}
          <div className="nk-footer-col">
            <h4>ABOUT NORTHKIND</h4>
            <a href="#story" onClick={(e) => { e.preventDefault(); showToast("Our Story: Founded in the Cascades in 2018"); }}>Our Heritage</a>
            <a href="#technology" onClick={(e) => { e.preventDefault(); showToast("GORE-TEX & Polartec Partner Technologies"); }}>Material Science</a>
            <a href="#sustainability" onClick={(e) => { e.preventDefault(); showToast("100% Recycled & PFC-Free DWR Initiatives"); }}>Sustainability</a>
            <a href="#guides" onClick={(e) => { e.preventDefault(); showToast("NorthKind Guide Pro Program"); }}>Guide Pro Program</a>
          </div>

          {/* Col 4 */}
          <div className="nk-footer-col">
            <h4>EXPEDITION DISPATCH</h4>
            <p className="nk-news-sub">Sign up for alpine trip reports, gear releases, and 15% off your first order.</p>
            <form
              className="nk-news-form"
              onSubmit={(e) => {
                e.preventDefault();
                showToast("Subscribed! Use code NORTH15 for 15% off.");
                setNewsletterEmail("");
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                aria-label="Email address for expedition dispatch"
              />
              <button type="submit">Join</button>
            </form>
          </div>
        </div>

        {/* Subfooter */}
        <div className="nk-subfooter">
          <div className="nk-wrap nk-subfooter-inner">
            <p>© {new Date().getFullYear()} NorthKind Apparel & Equipment Co. All Rights Reserved.</p>
            <div className="nk-subfooter-links">
              <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
              <span>•</span>
              <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
              <span>•</span>
              <a href="#patents" onClick={(e) => e.preventDefault()}>Patents & Trademarks</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <nav className="nk-bottom-nav" aria-label="Mobile Bottom Navigation">
        <button
          className="nk-bottom-nav-item"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Expedition Home"
        >
          <Compass size={20} />
          <span>Explore</span>
        </button>

        <button
          className="nk-bottom-nav-item"
          onClick={() => {
            const el = document.getElementById("categories");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Categories"
        >
          <Mountain size={20} />
          <span>Categories</span>
        </button>

        <button
          className="nk-bottom-nav-item"
          onClick={() => {
            const el = document.getElementById("catalog");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="All Gear"
        >
          <Layers size={20} />
          <span>Gear</span>
        </button>

        <button
          className="nk-bottom-nav-item"
          onClick={() => setIsWishlistOpen(true)}
          aria-label="Saved Gear"
        >
          <div className="nk-badge-wrap">
            <Heart size={20} />
            {totalWishlistCount > 0 && <span className="nk-badge">{totalWishlistCount}</span>}
          </div>
          <span>Saved</span>
        </button>

        <button
          className="nk-bottom-nav-item nk-bottom-pack"
          onClick={() => setIsCartOpen(true)}
          aria-label="Expedition Pack"
        >
          <div className="nk-badge-wrap">
            <ShoppingBag size={20} />
            {totalCartCount > 0 && <span className="nk-badge">{totalCartCount}</span>}
          </div>
          <span>Pack</span>
        </button>
      </nav>

      {/* Slide-out Cart Drawer */}
      <div
        className={`nk-drawer-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`nk-cart-drawer ${isCartOpen ? "open" : ""}`} role="dialog" aria-label="Shopping Cart">
        <div className="nk-cart-head">
          <div className="nk-cart-head-title">
            <ShoppingBag size={20} className="text-rust" />
            <h3>EXPEDITION PACK ({totalCartCount})</h3>
          </div>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart drawer">
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="nk-shipping-meter-box">
          <div className="nk-meter-text">
            {rawCartSubtotal >= 100 ? (
              <span className="text-green">
                <CheckCircle2 size={14} /> You unlocked <strong>FREE Express Shipping!</strong>
              </span>
            ) : (
              <span>
                Add <strong>${(100 - rawCartSubtotal).toFixed(2)}</strong> more for <strong>Free Shipping</strong>
              </span>
            )}
          </div>
          <div className="nk-meter-track">
            <div
              className="nk-meter-fill"
              style={{ width: `${Math.min(100, (rawCartSubtotal / 100) * 100)}%` }}
            />
          </div>
        </div>

        <div className="nk-cart-body">
          {totalCartCount > 0 ? (
            <div className="nk-cart-list">
              {Object.entries(cart).map(([id, qty]) => {
                const prod = catalogProducts.find((p) => p.id === id);
                if (!prod) return null;

                return (
                  <div key={id} className="nk-cart-item">
                    <img src={prod.img} alt={prod.title} />
                    <div className="nk-cart-item-info">
                      <div className="nk-cart-title-row">
                        <h4>{prod.title}</h4>
                        <button
                          className="nk-trash-link"
                          onClick={() => handleRemoveFromCart(id)}
                          aria-label={`Remove ${prod.title} from pack`}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                      <span className="nk-cart-item-tech">{prod.techSpec}</span>
                      <strong className="nk-cart-item-price">${(prod.price * qty).toFixed(2)}</strong>
                      <div className="nk-cart-qty-row">
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
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="nk-empty-cart">
              <ShoppingBag size={48} className="text-muted" />
              <h4>Your expedition pack is empty</h4>
              <p>Gear up with technical hardshells, merino base layers, and alpine pants.</p>
              <button
                className="nk-btn-rust mt-2"
                onClick={() => {
                  setIsCartOpen(false);
                  const el = document.getElementById("catalog");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Browse Best Sellers
              </button>
            </div>
          )}
        </div>

        {totalCartCount > 0 && (
          <div className="nk-cart-foot">
            <form className="nk-coupon-form" onSubmit={handleApplyCoupon}>
              <input
                type="text"
                placeholder="Promo code (SPRIN025)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                aria-label="Discount coupon code"
              />
              <button type="submit">Apply</button>
            </form>
            {couponStatus && <span className="nk-coupon-status">{couponStatus}</span>}

            <div className="nk-cart-summary-box">
              <div className="nk-cart-total-row">
                <span>Subtotal:</span>
                <span>${rawCartSubtotal.toFixed(2)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="nk-cart-total-row highlight">
                  <span>Discount:</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="nk-cart-total-row">
                <span>Shipping:</span>
                <span>{rawCartSubtotal >= 100 ? "FREE" : "$9.95"}</span>
              </div>
              <div className="nk-cart-final-total">
                <span>Total:</span>
                <strong>
                  ${(cartSubtotal + (rawCartSubtotal >= 100 ? 0 : 9.95)).toFixed(2)}
                </strong>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                showToast("Proceeding to Secure Alpine Checkout...");
              }}
              className="nk-btn-rust nk-btn-checkout"
            >
              CHECKOUT • ${(cartSubtotal + (rawCartSubtotal >= 100 ? 0 : 9.95)).toFixed(2)}
            </button>
            <small className="nk-checkout-guarantee">
              🔒 256-Bit Encrypted • 90-Day Trail Tested Guarantee
            </small>
          </div>
        )}
      </div>

      {/* Slide-out Wishlist Drawer */}
      <div
        className={`nk-drawer-overlay ${isWishlistOpen ? "open" : ""}`}
        onClick={() => setIsWishlistOpen(false)}
      />
      <div className={`nk-cart-drawer ${isWishlistOpen ? "open" : ""}`} role="dialog" aria-label="Wishlist">
        <div className="nk-cart-head">
          <div className="nk-cart-head-title">
            <Heart size={20} className="text-rust" />
            <h3>SAVED GEAR ({totalWishlistCount})</h3>
          </div>
          <button onClick={() => setIsWishlistOpen(false)} aria-label="Close wishlist">
            <X size={20} />
          </button>
        </div>

        <div className="nk-cart-body">
          {totalWishlistCount > 0 ? (
            <div className="nk-cart-list">
              {Object.entries(wishlist)
                .filter(([_, a]) => a)
                .map(([id]) => {
                  const prod = catalogProducts.find((p) => p.id === id);
                  if (!prod) return null;
                  return (
                    <div key={id} className="nk-cart-item">
                      <img src={prod.img} alt={prod.title} />
                      <div className="nk-cart-item-info">
                        <h4>{prod.title}</h4>
                        <strong className="nk-cart-item-price">${prod.price.toFixed(2)}</strong>
                        <div className="nk-wish-actions">
                          <button
                            className="nk-btn-rust-sm"
                            onClick={() => {
                              handleAddToCart(id);
                              handleToggleWishlist(id);
                            }}
                          >
                            Move to Pack
                          </button>
                          <button
                            className="nk-trash-link"
                            onClick={() => handleToggleWishlist(id)}
                            aria-label={`Remove ${prod.title} from wishlist`}
                          >
                            <Trash2 size={15} />
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="nk-empty-cart">
              <Heart size={48} className="text-muted" />
              <h4>No gear saved yet</h4>
              <p>Click the heart icon on any product to save it for your next expedition.</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick View Product Modal */}
      {selectedProduct && (
        <div className="nk-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div
            className="nk-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedProduct.title}
          >
            <button
              className="nk-modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product preview"
            >
              <X size={22} />
            </button>

            <div className="nk-modal-grid">
              <div className="nk-modal-img">
                <img src={selectedProduct.img} alt={selectedProduct.title} />
                {selectedProduct.badge && (
                  <span className="nk-prod-badge">{selectedProduct.badge}</span>
                )}
              </div>
              <div className="nk-modal-info">
                <div className="nk-modal-meta">
                  <span className="nk-pill">{selectedProduct.category}</span>
                  <span className="nk-modal-weight">{selectedProduct.weight}</span>
                </div>
                <h2>{selectedProduct.title}</h2>

                <div className="nk-modal-rating-row">
                  <div className="nk-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#C85A32" color="#C85A32" />
                    ))}
                  </div>
                  <strong>{selectedProduct.rating.toFixed(1)}</strong>
                  <span>({selectedProduct.reviews} guide reviews)</span>
                </div>

                <div className="nk-modal-price-row">
                  <strong>${selectedProduct.price.toFixed(2)}</strong>
                  {selectedProduct.origPrice > selectedProduct.price && (
                    <span className="nk-orig-price">${selectedProduct.origPrice.toFixed(2)}</span>
                  )}
                  <span className="nk-instock-pill">In Stock & Field Ready</span>
                </div>

                <p className="nk-modal-desc">{selectedProduct.subtitle}</p>

                <div className="nk-modal-tech-box">
                  <strong>Technical Architecture:</strong>
                  <div className="nk-tech-pills">
                    <span className="nk-spec-pill">{selectedProduct.techSpec}</span>
                    {selectedProduct.waterproofRating && (
                      <span className="nk-spec-pill">{selectedProduct.waterproofRating} Waterproof</span>
                    )}
                  </div>
                </div>

                <div className="nk-color-row mt-2">
                  <small>Available Colorways: {selectedProduct.colorOptions.join(" • ")}</small>
                </div>

                <div className="nk-features-list">
                  <div>
                    <Check size={15} className="text-rust" /> 100% Windproof & Weather-Resistant Construction
                  </div>
                  <div>
                    <Check size={15} className="text-rust" /> Fluorocarbon-Free Eco DWR Finish
                  </div>
                  <div>
                    <Check size={15} className="text-rust" /> Backed by NorthKind Lifetime Ironclad Warranty
                  </div>
                </div>

                <div className="nk-modal-actions">
                  <button
                    className="nk-btn-rust nk-btn-modal-add"
                    onClick={() => {
                      handleAddToCart(selectedProduct.id);
                      setSelectedProduct(null);
                    }}
                  >
                    ADD TO PACK • ${selectedProduct.price.toFixed(2)}
                  </button>
                  <button
                    className={`nk-modal-wish-btn ${wishlist[selectedProduct.id] ? "active" : ""}`}
                    onClick={(e) => handleToggleWishlist(selectedProduct.id, e)}
                    aria-label="Save to wishlist"
                  >
                    <Heart
                      size={18}
                      fill={wishlist[selectedProduct.id] ? "#C85A32" : "none"}
                      color={wishlist[selectedProduct.id] ? "#C85A32" : "currentColor"}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Journal Article Modal */}
      {activeJournalModal && (
        <div className="nk-modal-backdrop" onClick={() => setActiveJournalModal(null)}>
          <div
            className="nk-journal-modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="nk-modal-close"
              onClick={() => setActiveJournalModal(null)}
              aria-label="Close article"
            >
              <X size={22} />
            </button>

            {activeJournalModal === "layering" ? (
              <div>
                <img src={journalLayeringImg} alt="Cold weather alpine layering" className="nk-journal-modal-hero" />
                <div className="nk-journal-modal-body">
                  <span className="nk-badge-pill">ALPINE FIELD GUIDE</span>
                  <h2>Mastering the Three-Tier Alpine Layering System</h2>
                  <p className="nk-journal-lead">
                    In sub-zero alpine ascents, moisture management is life management. Sweating into cotton or non-breathable fabrics leads to rapid hypothermia during ridgeline bivy stops.
                  </p>
                  <h4>1. Next-to-Skin Base Layer (Moisture Transport)</h4>
                  <p>Our 200g New Zealand Merino wool pulls liquid sweat away from pores via capillary action, keeping your skin dry and warm even under high-cadence exertion.</p>
                  <h4>2. Lofted Midlayer (Trapped Thermal Air)</h4>
                  <p>Polartec® High-Loft fleece traps warm body air inside open micro-geometric grids while letting excess humidity dump freely.</p>
                  <h4>3. Weatherproof Outer Shell (Vapor Permeability)</h4>
                  <p>A GORE-TEX® Pro 3L hardshell blocks 100% of high-altitude gale-force winds while venting steam through pit zips.</p>
                  <button
                    className="nk-btn-rust mt-3"
                    onClick={() => {
                      setActiveJournalModal(null);
                      const el = document.getElementById("catalog");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Shop Layering Systems
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <img src={journalSustainabilityImg} alt="Pristine mountain nature and sustainable fabrics" className="nk-journal-modal-hero" />
                <div className="nk-journal-modal-body">
                  <span className="nk-badge-pill">SUSTAINABILITY COMMITMENT</span>
                  <h2>Zero Compromises: 100% Recycled & Fluorocarbon-Free</h2>
                  <p className="nk-journal-lead">
                    Historically, high-performance outdoor outerwear relied on per- and polyfluoroalkyl substances (PFAS) that persist in mountain ecosystems for centuries.
                  </p>
                  <p>NorthKind has fully transitioned to 100% bio-based, plant-derived and fluorocarbon-free Durable Water Repellent (DWR) across our entire hardshell and softshell line.</p>
                  <p>Our nylon and polyester shells are crafted from 100% post-consumer discarded fishing nets and recycled bottles, diverting over 40 tons of ocean plastic each season.</p>
                  <button
                    className="nk-btn-rust mt-3"
                    onClick={() => setActiveJournalModal(null)}
                  >
                    Close Report
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default NorthKindOutdoor;
