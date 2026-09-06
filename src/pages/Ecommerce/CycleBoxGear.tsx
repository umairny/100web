import React, { useState, useEffect } from "react";
import {
  Award,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  Gauge,
  Heart,
  HelpCircle,
  MapPin,
  Menu,
  Minus,
  Plus,
  RefreshCw,
  Search,
  Share2,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Star,
  Trash2,
  Truck,
  User,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import "./CycleBoxGear.css";

// Photo Assets
import heroCyclistImg from "../../assets/optimized/ecommerce/cyclebox/hero-cyclist.webp";
import collRoadImg from "../../assets/optimized/ecommerce/cyclebox/coll-road.webp";
import collMtbImg from "../../assets/optimized/ecommerce/cyclebox/coll-mtb.webp";
import collApparelImg from "../../assets/optimized/ecommerce/cyclebox/coll-apparel.webp";
import collToolsImg from "../../assets/optimized/ecommerce/cyclebox/coll-tools.webp";

import promoJerseyImg from "../../assets/optimized/ecommerce/cyclebox/promo-jersey.webp";

import prodWheelsImg from "../../assets/optimized/ecommerce/cyclebox/prod-wheels.webp";
import prodHelmetImg from "../../assets/optimized/ecommerce/cyclebox/prod-helmet.webp";
import prodShortsImg from "../../assets/optimized/ecommerce/cyclebox/prod-shorts.webp";
import prodToolImg from "../../assets/optimized/ecommerce/cyclebox/prod-tool.webp";

import guideTubelessImg from "../../assets/optimized/ecommerce/cyclebox/guide-tubeless.webp";
import guideNutritionImg from "../../assets/optimized/ecommerce/cyclebox/guide-nutrition.webp";

// Shield Wheel Spoke Logo SVG matching cyclebox.png
function CycleBoxLogo({ size = 36 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" fill="none" className="cbx-logo-svg">
      <path
        d="M20 2L35 7V19C35 29.5 28.5 36.5 20 39C11.5 36.5 5 29.5 5 19V7L20 2Z"
        fill="#0f172a"
        stroke="#1e293b"
        strokeWidth="1.5"
      />
      <circle cx="20" cy="19" r="10" stroke="#f97316" strokeWidth="2.2" fill="#0f172a" />
      <circle cx="20" cy="19" r="3.2" fill="#ffffff" />
      <line x1="20" y1="9" x2="20" y2="29" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="10" y1="19" x2="30" y2="19" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="13" y1="12" x2="27" y2="26" stroke="#94a3b8" strokeWidth="1.5" />
      <line x1="27" y1="12" x2="13" y2="26" stroke="#94a3b8" strokeWidth="1.5" />
    </svg>
  );
}

// 4 Clear Collections Dataset
const clearCollections = [
  {
    id: "road",
    title: "ROAD CYCLING",
    btnText: "SHOP ROAD",
    img: collRoadImg,
    category: "Road Cycling",
  },
  {
    id: "mtb",
    title: "MOUNTAIN BIKING",
    btnText: "SHOP MTB",
    img: collMtbImg,
    category: "Mountain Biking",
  },
  {
    id: "apparel",
    title: "ESSENTIAL APPAREL",
    btnText: "SHOP APPAREL",
    img: collApparelImg,
    category: "Clothing",
  },
  {
    id: "tools",
    title: "MAINTENANCE & TOOLS",
    btnText: "SHOP TOOLS",
    img: collToolsImg,
    category: "Maintenance",
  },
];

// 4 Featured Products Dataset matching cyclebox.png
const featuredProducts = [
  {
    id: "wheels",
    title: "AeroSpeed Carbon Wheelset",
    subtitle: "AeroSpeed Carbon Wheelset AeroSpeed Carbon Wheelsets pingus, platting tot...",
    price: 159.0,
    origPrice: 229.0,
    rating: 4.9,
    reviews: 142,
    img: prodWheelsImg,
    badge: "Bestseller",
    category: "Road Cycling",
    description:
      "Precision-machined 50mm deep-section carbon road wheels with aerodynamic bladed spokes, sealed high-grade ceramic bearings, and tubeless-ready hookless rims.",
  },
  {
    id: "helmet",
    title: "TrailMaster MTB Helmet",
    subtitle: "TrailMaster MTB Helmet Indians MTB Helmet Soloneo uoset chal&baste...",
    price: 159.0,
    origPrice: 199.0,
    rating: 4.8,
    reviews: 98,
    img: prodHelmetImg,
    badge: "MIPS Certified",
    category: "Mountain Biking",
    description:
      "All-mountain trail helmet in matte forest olive featuring integrated MIPS rotational impact protection, indexed breakaway sun visor, and 18 channeled airflow vents.",
  },
  {
    id: "shorts",
    title: "ProForm Cycling Shorts",
    subtitle: "ProForm Cycling Shorts, Gkiols Inalsty Snert Seamiying ensilloot seat seg...",
    price: 159.0,
    origPrice: 189.0,
    rating: 4.7,
    reviews: 215,
    img: prodShortsImg,
    badge: "Top Rated",
    category: "Clothing",
    description:
      "Aerodynamic Italian compression bib shorts featuring triple-density elastic interface endurance chamois, seamless raw-cut laser leg grippers, and UPF 50+ UV blocking.",
  },
  {
    id: "tool",
    title: "Multi-Tool 19 Function",
    subtitle: "Multi-Tool 19 Function Multi Tool 19 Function Sapiss and Mult Tool 19...",
    price: 159.0,
    origPrice: 179.0,
    rating: 4.9,
    reviews: 310,
    img: prodToolImg,
    badge: "Pro Grade",
    category: "Maintenance",
    description:
      "Comprehensive trailside multi-tool with anodized blue lightweight alloy sideplates, 2-8mm hex keys, T25 torx, integrated 8-12 speed chain tool, spoke wrenches, and tire levers.",
  },
];

// 2 Editorial Cycling Guides Dataset
const cyclingGuides = [
  {
    id: "guide-tubeless",
    title: "HOW TO TUBELESS: A STEP-BY-STEP GUIDE",
    subtitle: "A Bike Mechanic's Step-by-Step Guide",
    img: guideTubelessImg,
    readTime: "6 min read",
    author: "Marco Rossi, Master Tech",
    content: [
      "Step 1: Clean and degrease rim bed completely with isopropyl alcohol before applying high-pressure rim tape with firm, overlapping tension.",
      "Step 2: Install conical tubeless valve stems tightly by hand, ensuring the rubber grommet seats flush against the internal rim channel.",
      "Step 3: Mount the tire bead dry first and use a high-volume booster floor pump or CO2 cartridge to pop both beads onto the rim hooks.",
      "Step 4: Inject 60–90ml of high-particulate synthetic latex sealant through the valve core, reinstall core, inflate to 35 PSI, and rotate the wheel horizontally to distribute sealant.",
    ],
  },
  {
    id: "guide-nutrition",
    title: "FUELING YOUR RIDE: NUTRITION TIPS",
    subtitle: "Energy Bars & Hydration Tips",
    img: guideNutritionImg,
    readTime: "5 min read",
    author: "Elena Vance, Sports Nutritionist",
    content: [
      "Carbohydrate Target: Aim for 60–90g of dual-source carbohydrates (maltodextrin + fructose in a 1:0.8 ratio) per hour for rides lasting over 2 hours.",
      "Hydration Strategy: Consume 500–750ml of water containing 500–700mg of sodium and essential electrolytes per hour, increasing in hot or humid conditions.",
      "Real Food vs. Gels: Consume solid energy bars and chew snacks during lower-intensity endurance miles, reserving isotonic gels for steep climbs and high-cadence efforts.",
      "Post-Ride Recovery: Within 30 minutes of finishing, drink a 3:1 carb-to-protein recovery smoothie to rapidly replenish muscle glycogen stores and stimulate protein synthesis.",
    ],
  },
];

// Custom Builder Components Options for Studio Modal
const bikeFrameOptions = [
  { id: "f-aero", name: "AeroCarbon SL7 Road Frame", price: 1899, weight: "840g" },
  { id: "f-gravel", name: "TerraCross All-Road Carbon", price: 1499, weight: "980g" },
  { id: "f-enduro", name: "ApexTrail 160mm Enduro Carbon", price: 2199, weight: "2450g" },
];

const groupsetOptions = [
  { id: "g-di2", name: "Shimano Ultegra Di2 12-Speed Electronic", price: 1750 },
  { id: "g-axs", name: "SRAM Force eTap AXS Wireless 1x12", price: 1680 },
  { id: "g-mech", name: "Shimano 105 Mechanical Disc 11-Speed", price: 850 },
];

export function CycleBoxGear() {
  // Shopping Cart & Wishlist State
  const [cart, setCart] = useState<{ [id: string]: number }>({
    helmet: 1,
    tool: 1,
  });
  const [wishlist, setWishlist] = useState<{ [id: string]: boolean }>({
    wheels: true,
  });
  const [quantities, setQuantities] = useState<{ [id: string]: number }>({
    wheels: 1,
    helmet: 1,
    shorts: 1,
    tool: 1,
  });

  // UI State & Modals
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [isFitModalOpen, setIsFitModalOpen] = useState(false);
  const [selectedGuide, setSelectedGuide] = useState<any | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>("all");
  const [newsletterEmail, setNewsletterEmail] = useState("");

  // Custom Bike Builder State
  const [selectedFrame, setSelectedFrame] = useState(bikeFrameOptions[0]);
  const [selectedGroupset, setSelectedGroupset] = useState(groupsetOptions[0]);
  const [selectedWheelset, setSelectedWheelset] = useState("AeroSpeed 50mm Carbon ($159)");

  // Calculations
  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalWishlistCount = Object.values(wishlist).filter(Boolean).length;

  const cartSubtotal = Object.entries(cart).reduce((total, [id, qty]) => {
    const prod = featuredProducts.find((p) => p.id === id);
    return total + (prod ? prod.price * qty : 0);
  }, 0);

  const amountToFreeShipping = Math.max(0, 150 - cartSubtotal);

  const customBuildTotal = selectedFrame.price + selectedGroupset.price + 159;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2600);
  };

  const handleAddToCart = (productId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const qtyToAdd = quantities[productId] || 1;
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + qtyToAdd,
    }));
    const p = featuredProducts.find((item) => item.id === productId);
    showToast(`Added ${qtyToAdd}x ${p ? p.title : "item"} to cart!`);
    setIsCartOpen(true);
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
      showToast(state ? "Added to saved gear ♡" : "Removed from saved gear");
      return { ...prev, [productId]: state };
    });
  };

  // Filtered Products
  const filteredProducts = featuredProducts.filter((p) => {
    const matchesCategory =
      activeCategoryFilter === "all" || p.category.toLowerCase().includes(activeCategoryFilter.toLowerCase());
    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Key & Scroll locks
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
        setIsWishlistOpen(false);
        setIsBuilderOpen(false);
        setIsFitModalOpen(false);
        setSelectedGuide(null);
        setSelectedProduct(null);
        setMobileMenuOpen(false);
      }
    };
    if (
      isCartOpen ||
      isWishlistOpen ||
      isBuilderOpen ||
      isFitModalOpen ||
      selectedGuide ||
      selectedProduct ||
      mobileMenuOpen
    ) {
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
    isBuilderOpen,
    isFitModalOpen,
    selectedGuide,
    selectedProduct,
    mobileMenuOpen,
  ]);

  return (
    <main className="cbx-site" id="top" tabIndex={-1}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="cbx-toast" role="alert">
          <CheckCircle2 size={16} className="text-orange" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* TOP ANNOUNCEMENT BAR matching cyclebox.png */}
      <div className="cbx-topbar">
        <div className="cbx-wrap cbx-topbar-inner">
          <div className="cbx-topbar-center">
            <span>Free Shipping on Orders Over $150! Use code: <strong>SHIP150</strong></span>
          </div>

          <div className="cbx-topbar-right">
            <a
              href="#fit"
              onClick={(e) => {
                e.preventDefault();
                setIsFitModalOpen(true);
              }}
            >
              <Gauge size={13} />
              <span>Bike Fit Calculator</span>
            </a>
            <span className="cbx-topbar-sep">|</span>
            <a
              href="#stores"
              onClick={(e) => {
                e.preventDefault();
                showToast("Pro Shop & Service Locator active");
              }}
            >
              <MapPin size={13} />
              <span>Service Hubs</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER NAVBAR matching cyclebox.png */}
      <header className="cbx-header">
        <div className="cbx-wrap cbx-header-inner">
          {/* Brand Logo */}
          <a href="#top" className="cbx-brand">
            <CycleBoxLogo size={36} />
            <div className="cbx-brand-text">
              <span className="cbx-brand-title">CycleBox</span>
              <span className="cbx-brand-sub">Gear</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="cbx-nav-links">
            <button
              className={`cbx-nav-link ${activeCategoryFilter === "all" ? "active" : ""}`}
              onClick={() => {
                setActiveCategoryFilter("all");
                showToast("Showing all gear");
              }}
            >
              Shop All
            </button>
            <button
              className={`cbx-nav-link ${activeCategoryFilter === "road" ? "active" : ""}`}
              onClick={() => {
                setActiveCategoryFilter("road");
                showToast("Filtered by Road Cycling");
              }}
            >
              Road Cycling
            </button>
            <button
              className={`cbx-nav-link ${activeCategoryFilter === "mountain" ? "active" : ""}`}
              onClick={() => {
                setActiveCategoryFilter("mountain");
                showToast("Filtered by Mountain Biking");
              }}
            >
              Mountain Biking
            </button>
            <button
              className={`cbx-nav-link ${activeCategoryFilter === "clothing" ? "active" : ""}`}
              onClick={() => {
                setActiveCategoryFilter("clothing");
                showToast("Filtered by Performance Clothing");
              }}
            >
              Clothing
            </button>
            <button
              className={`cbx-nav-link ${activeCategoryFilter === "maintenance" ? "active" : ""}`}
              onClick={() => {
                setActiveCategoryFilter("maintenance");
                showToast("Filtered by Maintenance & Tools");
              }}
            >
              Maintenance
            </button>
            <button
              className="cbx-nav-link cbx-custom-pill"
              onClick={() => setIsBuilderOpen(true)}
            >
              ✨ Custom Build
            </button>
          </nav>

          {/* Right Header Utility Actions */}
          <div className="cbx-nav-actions">
            <button
              className="cbx-icon-btn cbx-search-toggle"
              onClick={() => {
                const searchEl = document.getElementById("cbx-mobile-search");
                if (searchEl) searchEl.focus();
                showToast("Type below to filter gear");
              }}
              aria-label="Search"
            >
              <Search size={20} />
            </button>

            <button
              className="cbx-icon-btn"
              onClick={() => showToast("Rider Account & Club Rewards")}
              aria-label="Account"
            >
              <User size={20} />
            </button>

            <button
              className="cbx-icon-btn"
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Wishlist"
            >
              <div className="cbx-badge-wrap">
                <Heart size={20} />
                {totalWishlistCount > 0 && (
                  <span className="cbx-badge">{totalWishlistCount}</span>
                )}
              </div>
            </button>

            <button
              className="cbx-icon-btn cbx-cart-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="Cart"
            >
              <div className="cbx-badge-wrap">
                <ShoppingCart size={20} />
                <span className="cbx-badge cbx-badge-orange">{totalCartCount}</span>
              </div>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              className="cbx-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              <span className="cbx-bar" />
              <span className="cbx-bar" />
              <span className="cbx-bar" />
            </button>
          </div>
        </div>

        {/* Mobile Inline Search Row */}
        <div className="cbx-header-search-row">
          <div className="cbx-wrap">
            <div className="cbx-search-input-box">
              <Search size={15} className="cbx-search-icon" />
              <input
                id="cbx-mobile-search"
                type="text"
                placeholder="Search road bikes, carbon wheels, helmets, tools..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search catalog"
              />
              {searchQuery && (
                <button
                  className="cbx-search-clear"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* OFF-CANVAS MOBILE DRAWER */}
      <div
        className={`cbx-drawer-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`cbx-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="cbx-drawer-head">
          <div className="cbx-brand">
            <CycleBoxLogo size={30} />
            <span className="cbx-brand-title">CycleBox Gear</span>
          </div>
          <button
            className="cbx-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="cbx-drawer-links">
          <button
            className="cbx-drawer-link"
            onClick={() => {
              setActiveCategoryFilter("all");
              setMobileMenuOpen(false);
            }}
          >
            <span>Shop All</span>
            <ChevronRight size={16} />
          </button>
          <button
            className="cbx-drawer-link"
            onClick={() => {
              setActiveCategoryFilter("road");
              setMobileMenuOpen(false);
            }}
          >
            <span>Road Cycling</span>
            <ChevronRight size={16} />
          </button>
          <button
            className="cbx-drawer-link"
            onClick={() => {
              setActiveCategoryFilter("mountain");
              setMobileMenuOpen(false);
            }}
          >
            <span>Mountain Biking</span>
            <ChevronRight size={16} />
          </button>
          <button
            className="cbx-drawer-link"
            onClick={() => {
              setActiveCategoryFilter("clothing");
              setMobileMenuOpen(false);
            }}
          >
            <span>Essential Apparel</span>
            <ChevronRight size={16} />
          </button>
          <button
            className="cbx-drawer-link"
            onClick={() => {
              setActiveCategoryFilter("maintenance");
              setMobileMenuOpen(false);
            }}
          >
            <span>Maintenance & Tools</span>
            <ChevronRight size={16} />
          </button>
          <button
            className="cbx-drawer-link text-orange font-bold"
            onClick={() => {
              setMobileMenuOpen(false);
              setIsBuilderOpen(true);
            }}
          >
            <span>✨ Custom Bike Studio</span>
            <ChevronRight size={16} />
          </button>
          <button
            className="cbx-drawer-link"
            onClick={() => {
              setMobileMenuOpen(false);
              setIsFitModalOpen(true);
            }}
          >
            <span>📏 Bike Fit Calculator</span>
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="cbx-drawer-foot">
          <button
            className="cbx-btn-orange full-w"
            onClick={() => {
              setMobileMenuOpen(false);
              setIsCartOpen(true);
            }}
          >
            <ShoppingCart size={16} />
            <span>View Cart ({totalCartCount})</span>
          </button>
        </div>
      </div>

      {/* 1. HERO SECTION matching cyclebox.png */}
      <section className="cbx-hero-section">
        <div className="cbx-wrap">
          <div className="cbx-hero-card">
            <img
              src={heroCyclistImg}
              alt="Cyclist riding on scenic coastal mountain road"
              className="cbx-hero-bg-img"
            />
            <div className="cbx-hero-overlay" />
            <div className="cbx-hero-content">
              <h1 className="cbx-hero-title">
                CYCLEBOX GEAR: YOUR JOURNEY, OUR PASSION.
              </h1>
              <p className="cbx-hero-subtitle">
                Premium equipment and expert advice for every ride.
              </p>
              <a href="#featured" className="cbx-hero-cta-btn">
                EXPLORE NEW ARRIVALS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CLEAR COLLECTIONS (4 Cards) matching cyclebox.png */}
      <section className="cbx-section cbx-collections-section" id="collections">
        <div className="cbx-wrap">
          <div className="cbx-section-head text-center">
            <h2 className="cbx-section-title">CLEAR COLLECTIONS</h2>
          </div>

          <div className="cbx-collections-grid">
            {clearCollections.map((col) => (
              <div key={col.id} className="cbx-collection-card">
                <div className="cbx-col-img-wrap">
                  <img src={col.img} alt={col.title} />
                </div>
                <div className="cbx-col-body">
                  <h3>{col.title}</h3>
                  <button
                    onClick={() => {
                      setActiveCategoryFilter(col.id);
                      showToast(`Showing ${col.title}`);
                      const featEl = document.getElementById("featured");
                      if (featEl) featEl.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="cbx-btn-navy"
                  >
                    {col.btnText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. TRUST CUES (3 Pillars) matching cyclebox.png */}
      <section className="cbx-section cbx-trust-section">
        <div className="cbx-wrap">
          <div className="cbx-section-head text-center">
            <h2 className="cbx-section-title">TRUST CUES</h2>
          </div>

          <div className="cbx-trust-grid">
            <div className="cbx-trust-card">
              <div className="cbx-trust-icon-box">
                <Award size={28} className="cbx-trust-icon" />
              </div>
              <div className="cbx-trust-info">
                <h3>EXPERT CURATED</h3>
                <p>Hand-picked by seasoned cyclists.</p>
              </div>
            </div>

            <div className="cbx-trust-card">
              <div className="cbx-trust-icon-box">
                <Zap size={28} className="cbx-trust-icon" />
              </div>
              <div className="cbx-trust-info">
                <h3>FAST & SECURE SHIPPING</h3>
                <p>Order tracking and reliable delivery.</p>
              </div>
            </div>

            <div className="cbx-trust-card">
              <div className="cbx-trust-icon-box">
                <RefreshCw size={28} className="cbx-trust-icon" />
              </div>
              <div className="cbx-trust-info">
                <h3>EASY RETURNS</h3>
                <p>Hassle-free 30-day return policy.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. PROMOTIONAL RHYTHM / SEASONAL SAVINGS EVENT BANNER matching cyclebox.png */}
      <section className="cbx-promo-section" id="promo">
        <div className="cbx-wrap">
          <div className="cbx-promo-card">
            <div className="cbx-promo-visual">
              <div className="cbx-spotlight-effect" />
              <img src={promoJerseyImg} alt="Alpha Performance Jersey" />
            </div>

            <div className="cbx-promo-content">
              <span className="cbx-promo-eyebrow">PROMOTIONAL RHYTHM</span>
              <h3 className="cbx-promo-title">SEASONAL SAVINGS EVENT</h3>
              <h4 className="cbx-promo-subtitle">ALPHA PERFORMANCE JERSEY</h4>
              <p className="cbx-promo-discount">25% OFF SELECTED KIT</p>
              <button
                className="cbx-btn-pill-white"
                onClick={() => {
                  showToast("Applied 25% discount code ALPHA25 to your bag!");
                  handleAddToCart("shorts");
                }}
              >
                GET THE DEAL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FEATURED PRODUCTS (Carousel with Arrows) matching cyclebox.png */}
      <section className="cbx-section cbx-featured-section" id="featured">
        <div className="cbx-wrap">
          <div className="cbx-section-head text-center">
            <h2 className="cbx-section-title">FEATURED PRODUCTS</h2>
          </div>

          <div className="cbx-featured-wrapper">
            <button
              className="cbx-carousel-arrow cbx-arrow-left"
              onClick={() => showToast("Browsing previous featured items")}
              aria-label="Previous products"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="cbx-featured-grid">
              {filteredProducts.map((prod) => (
                <div
                  key={prod.id}
                  className="cbx-product-card"
                  onClick={() => setSelectedProduct(prod)}
                >
                  <div className="cbx-prod-img-box">
                    <img src={prod.img} alt={prod.title} />
                    <button
                      className={`cbx-wish-btn ${wishlist[prod.id] ? "active" : ""}`}
                      onClick={(e) => handleToggleWishlist(prod.id, e)}
                      aria-label="Wishlist"
                    >
                      <Heart
                        size={15}
                        fill={wishlist[prod.id] ? "#f97316" : "none"}
                        color={wishlist[prod.id] ? "#f97316" : "#64748b"}
                      />
                    </button>
                  </div>

                  <div className="cbx-prod-body">
                    <h3 className="cbx-prod-title">{prod.title}</h3>
                    <p className="cbx-prod-desc">{prod.subtitle}</p>
                    <strong className="cbx-prod-price">${prod.price.toFixed(2)}</strong>

                    <div
                      className="cbx-prod-action-row"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div className="cbx-qty-input-box">
                        <input
                          type="number"
                          min="1"
                          max="99"
                          value={quantities[prod.id] || 1}
                          onChange={(e) =>
                            setQuantities({
                              ...quantities,
                              [prod.id]: Math.max(1, parseInt(e.target.value) || 1),
                            })
                          }
                          aria-label={`Quantity for ${prod.title}`}
                        />
                      </div>
                      <button
                        className="cbx-btn-navy cbx-btn-add"
                        onClick={(e) => handleAddToCart(prod.id, e)}
                      >
                        ADD TO CART
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button
              className="cbx-carousel-arrow cbx-arrow-right"
              onClick={() => showToast("Browsing next featured items")}
              aria-label="Next products"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </section>

      {/* 6. CYCLING GUIDES (2 Cards) matching cyclebox.png */}
      <section className="cbx-section cbx-guides-section">
        <div className="cbx-wrap">
          <div className="cbx-section-head text-center">
            <h2 className="cbx-section-title">CYCLING GUIDES</h2>
          </div>

          <div className="cbx-guides-grid">
            {cyclingGuides.map((guide) => (
              <div key={guide.id} className="cbx-guide-card">
                <div className="cbx-guide-img">
                  <img src={guide.img} alt={guide.title} />
                </div>
                <div className="cbx-guide-body">
                  <h3>{guide.title}</h3>
                  <p>{guide.subtitle}</p>
                  <button
                    onClick={() => setSelectedGuide(guide)}
                    className="cbx-btn-navy cbx-btn-sm"
                  >
                    READ GUIDE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FOOTER matching cyclebox.png */}
      <footer className="cbx-footer">
        <div className="cbx-wrap cbx-footer-grid">
          {/* Col 1: Newsletter Signup with Logo */}
          <div className="cbx-footer-news-col">
            <div className="cbx-brand">
              <CycleBoxLogo size={32} />
              <div className="cbx-brand-text">
                <span className="cbx-brand-title">CycleBox</span>
                <span className="cbx-brand-sub">Gear</span>
              </div>
            </div>

            <div className="cbx-footer-newsletter">
              <h4>STAY IN THE GEAR LOOP:</h4>
              <p>Get new arrivals & pro tips!</p>
              <form
                className="cbx-news-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  showToast("Subscribed! Check email for $20 off your first $150 order.");
                  setNewsletterEmail("");
                }}
              >
                <input
                  type="email"
                  required
                  placeholder="Email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  aria-label="Email subscription"
                />
                <button type="submit">SUBMIT</button>
              </form>
            </div>
          </div>

          {/* Col 2: Customer Service */}
          <div className="cbx-footer-col">
            <h4>CUSTOMER SERVICE</h4>
            <a
              href="#faqs"
              onClick={(e) => {
                e.preventDefault();
                showToast("FAQs & Warranty Portal");
              }}
            >
              FAQs
            </a>
            <a
              href="#shipping"
              onClick={(e) => {
                e.preventDefault();
                showToast("Free 2-Day Shipping on Orders $150+");
              }}
            >
              Shipping Policy
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                showToast("Contact our tech team: support@cycleboxgear.com");
              }}
            >
              Contact Us
            </a>
            <a
              href="#returns"
              onClick={(e) => {
                e.preventDefault();
                showToast("30-Day Hassle-Free Returns Policy");
              }}
            >
              Returns
            </a>
          </div>

          {/* Col 3: About */}
          <div className="cbx-footer-col">
            <h4>ABOUT CYCLEBOX</h4>
            <a
              href="#story"
              onClick={(e) => {
                e.preventDefault();
                showToast("Our 15-Year Cycling Heritage & Workshop");
              }}
            >
              Our Story
            </a>
            <a
              href="#team"
              onClick={(e) => {
                e.preventDefault();
                showToast("Meet the Master Mechanics & Racers");
              }}
            >
              Our Team
            </a>
            <a
              href="#careers"
              onClick={(e) => {
                e.preventDefault();
                showToast("Join our team of mechanics & gear experts");
              }}
            >
              Careers
            </a>
          </div>

          {/* Col 4: Social */}
          <div className="cbx-footer-col cbx-footer-social">
            <h4>SOCIAL</h4>
            <div className="cbx-social-icons">
              <a
                href="#instagram"
                onClick={(e) => e.preventDefault()}
                aria-label="Instagram"
                title="Instagram"
              >
                <span className="social-pill">📷</span>
              </a>
              <a
                href="#facebook"
                onClick={(e) => e.preventDefault()}
                aria-label="Facebook"
                title="Facebook"
              >
                <span className="social-pill">f</span>
              </a>
              <a
                href="#youtube"
                onClick={(e) => e.preventDefault()}
                aria-label="YouTube"
                title="YouTube"
              >
                <span className="social-pill">▶</span>
              </a>
            </div>
          </div>
        </div>

        {/* Subfooter */}
        <div className="cbx-subfooter">
          <div className="cbx-wrap">
            <p>© 2024 CycleBox Gear. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* 8. SLIDE-OVER CART DRAWER */}
      <div
        className={`cbx-drawer-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cbx-cart-drawer ${isCartOpen ? "open" : ""}`}>
        <div className="cbx-cart-head">
          <div className="cbx-cart-head-title">
            <ShoppingBag size={20} className="text-orange" />
            <h3>SHOPPING CART ({totalCartCount})</h3>
          </div>
          <button
            className="cbx-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="cbx-shipping-meter">
          {amountToFreeShipping > 0 ? (
            <p>
              Add <strong>${amountToFreeShipping.toFixed(2)}</strong> more for{" "}
              <strong className="text-orange">FREE Express Shipping!</strong>
            </p>
          ) : (
            <p className="text-green font-bold">
              ✓ You unlocked FREE Express Shipping!
            </p>
          )}
          <div className="cbx-meter-bar">
            <div
              className="cbx-meter-fill"
              style={{
                width: `${Math.min(100, (cartSubtotal / 150) * 100)}%`,
              }}
            />
          </div>
        </div>

        <div className="cbx-cart-body">
          {totalCartCount > 0 ? (
            <div className="cbx-cart-list">
              {Object.entries(cart).map(([id, qty]) => {
                const prod = featuredProducts.find((p) => p.id === id);
                if (!prod) return null;
                return (
                  <div key={id} className="cbx-cart-item">
                    <img src={prod.img} alt={prod.title} />
                    <div className="cbx-cart-item-info">
                      <h4>{prod.title}</h4>
                      <strong className="cbx-cart-price">
                        ${(prod.price * qty).toFixed(2)}
                      </strong>
                      <div className="cbx-cart-qty-row">
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
                          className="cbx-trash-link"
                          onClick={() => handleRemoveFromCart(id)}
                          aria-label="Remove item"
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
            <div className="cbx-empty-cart">
              <ShoppingCart size={42} className="text-muted" />
              <h4>Your gear bag is empty</h4>
              <p>Explore road wheels, helmets, and pro maintenance tools.</p>
            </div>
          )}
        </div>

        {totalCartCount > 0 && (
          <div className="cbx-cart-foot">
            <div className="cbx-cart-total-row">
              <span>Subtotal:</span>
              <strong>${cartSubtotal.toFixed(2)}</strong>
            </div>
            <p className="cbx-shipping-calc">
              Taxes calculated at secure 256-bit checkout.
            </p>
            <button
              onClick={() => {
                setIsCartOpen(false);
                setCart({});
                showToast("Order placed successfully! Keep riding hard.");
              }}
              className="cbx-btn-orange full-w"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        )}
      </div>

      {/* 9. SLIDE-OVER WISHLIST DRAWER */}
      <div
        className={`cbx-drawer-overlay ${isWishlistOpen ? "open" : ""}`}
        onClick={() => setIsWishlistOpen(false)}
      />
      <div className={`cbx-cart-drawer ${isWishlistOpen ? "open" : ""}`}>
        <div className="cbx-cart-head">
          <div className="cbx-cart-head-title">
            <Heart size={20} className="text-orange" />
            <h3>SAVED GEAR ({totalWishlistCount})</h3>
          </div>
          <button
            className="cbx-close-btn"
            onClick={() => setIsWishlistOpen(false)}
            aria-label="Close wishlist"
          >
            <X size={20} />
          </button>
        </div>

        <div className="cbx-cart-body">
          {totalWishlistCount > 0 ? (
            <div className="cbx-cart-list">
              {Object.entries(wishlist)
                .filter(([_, a]) => a)
                .map(([id]) => {
                  const prod = featuredProducts.find((p) => p.id === id);
                  if (!prod) return null;
                  return (
                    <div key={id} className="cbx-cart-item">
                      <img src={prod.img} alt={prod.title} />
                      <div className="cbx-cart-item-info">
                        <h4>{prod.title}</h4>
                        <strong className="cbx-cart-price">
                          ${prod.price.toFixed(2)}
                        </strong>
                        <button
                          className="cbx-btn-navy cbx-btn-sm mt-2"
                          onClick={() => {
                            handleAddToCart(id);
                            handleToggleWishlist(id);
                          }}
                        >
                          MOVE TO CART
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="cbx-empty-cart">
              <Heart size={42} className="text-muted" />
              <h4>No gear saved</h4>
              <p>Click the heart icon on any gear item to save for later.</p>
            </div>
          )}
        </div>
      </div>

      {/* 10. QUICK VIEW PRODUCT MODAL */}
      {selectedProduct && (
        <div className="cbx-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="cbx-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="cbx-modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>

            <div className="cbx-modal-grid">
              <div className="cbx-modal-img">
                <img src={selectedProduct.img} alt={selectedProduct.title} />
              </div>
              <div className="cbx-modal-info">
                <span className="cbx-pill">{selectedProduct.category}</span>
                <h2>{selectedProduct.title}</h2>
                <p className="cbx-modal-desc">{selectedProduct.description}</p>

                <div className="cbx-modal-price-row">
                  <strong>${selectedProduct.price.toFixed(2)}</strong>
                  <span>${selectedProduct.origPrice.toFixed(2)}</span>
                </div>

                <div className="cbx-features-list">
                  <div>
                    <Check size={14} className="text-orange" /> UCI Approved for Competition
                  </div>
                  <div>
                    <Check size={14} className="text-orange" /> Lifetime Crash Replacement Policy
                  </div>
                  <div>
                    <Check size={14} className="text-orange" /> 30-Day Ride Satisfaction Guarantee
                  </div>
                </div>

                <button
                  className="cbx-btn-orange full-w"
                  onClick={() => {
                    handleAddToCart(selectedProduct.id);
                    setSelectedProduct(null);
                  }}
                >
                  ADD TO CART • ${selectedProduct.price.toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 11. CUSTOM BIKE CONFIGURATOR STUDIO MODAL */}
      {isBuilderOpen && (
        <div className="cbx-modal-backdrop" onClick={() => setIsBuilderOpen(false)}>
          <div className="cbx-modal-card cbx-builder-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="cbx-modal-close"
              onClick={() => setIsBuilderOpen(false)}
              aria-label="Close configurator"
            >
              <X size={20} />
            </button>

            <div className="cbx-builder-head">
              <span className="cbx-eyebrow text-orange">PRO COMPONENT STUDIO</span>
              <h2>CUSTOM BIKE CONFIGURATOR</h2>
              <p>Build your dream race rig with hand-selected frame, electronic groupset, and deep-section carbon hoops.</p>
            </div>

            <div className="cbx-builder-grid">
              {/* Left Controls */}
              <div className="cbx-builder-controls">
                {/* 1. Frame Selection */}
                <div className="cbx-build-step">
                  <h4>1. Choose Carbon Frame</h4>
                  <div className="cbx-options-list">
                    {bikeFrameOptions.map((f) => (
                      <div
                        key={f.id}
                        className={`cbx-option-card ${selectedFrame.id === f.id ? "active" : ""}`}
                        onClick={() => setSelectedFrame(f)}
                      >
                        <div>
                          <strong>{f.name}</strong>
                          <small>Weight: {f.weight} • Toray T1000 Carbon</small>
                        </div>
                        <span className="cbx-opt-price">${f.price.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 2. Groupset Selection */}
                <div className="cbx-build-step">
                  <h4>2. Drivetrain & Brakes</h4>
                  <div className="cbx-options-list">
                    {groupsetOptions.map((g) => (
                      <div
                        key={g.id}
                        className={`cbx-option-card ${selectedGroupset.id === g.id ? "active" : ""}`}
                        onClick={() => setSelectedGroupset(g)}
                      >
                        <div>
                          <strong>{g.name}</strong>
                          <small>Hydraulic Disc Brakes Included</small>
                        </div>
                        <span className="cbx-opt-price">+${g.price.toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Summary */}
              <div className="cbx-build-summary">
                <h3>YOUR CUSTOM RIG SPEC</h3>

                <div className="cbx-spec-row">
                  <span>Frame</span>
                  <strong>{selectedFrame.name}</strong>
                </div>
                <div className="cbx-spec-row">
                  <span>Drivetrain</span>
                  <strong>{selectedGroupset.name}</strong>
                </div>
                <div className="cbx-spec-row">
                  <span>Wheelset</span>
                  <strong>{selectedWheelset}</strong>
                </div>
                <div className="cbx-spec-row">
                  <span>Pro Workshop Assembly</span>
                  <strong className="text-orange">FREE ($250 Value)</strong>
                </div>

                <div className="cbx-build-total-box">
                  <div>
                    <small>Estimated Build Total</small>
                    <strong>${customBuildTotal.toLocaleString()}.00</strong>
                  </div>
                  <button
                    onClick={() => {
                      showToast(`Custom Build (${selectedFrame.name}) added to cart!`);
                      setIsBuilderOpen(false);
                      setIsCartOpen(true);
                    }}
                    className="cbx-btn-orange"
                  >
                    ORDER CUSTOM BIKE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 12. BIKE FIT CALCULATOR MODAL */}
      {isFitModalOpen && (
        <div className="cbx-modal-backdrop" onClick={() => setIsFitModalOpen(false)}>
          <div className="cbx-modal-card cbx-fit-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="cbx-modal-close"
              onClick={() => setIsFitModalOpen(false)}
              aria-label="Close calculator"
            >
              <X size={20} />
            </button>

            <div className="cbx-fit-content">
              <span className="cbx-eyebrow text-orange">CYCLEBOX LABS</span>
              <h2>BICYCLE SIZE & GEOMETRY FIT CALCULATOR</h2>
              <p>Find your optimal road or trail frame size based on height and inseam measurements.</p>

              <div className="cbx-fit-form">
                <div className="cbx-form-group">
                  <label>Rider Height</label>
                  <select className="cbx-select">
                    <option>5'6" – 5'8" (168 – 173 cm) ➔ Frame 52cm (S)</option>
                    <option>5'8" – 5'10" (173 – 178 cm) ➔ Frame 54cm (M)</option>
                    <option>5'10" – 6'0" (178 – 183 cm) ➔ Frame 56cm (L)</option>
                    <option>6'0" – 6'3" (183 – 190 cm) ➔ Frame 58cm (XL)</option>
                  </select>
                </div>

                <div className="cbx-form-group">
                  <label>Riding Style</label>
                  <select className="cbx-select">
                    <option>Aero Race / Aggressive Forward</option>
                    <option>Endurance Gran Fondo / Balanced Comfort</option>
                    <option>Gravel Adventure / Upright Stability</option>
                  </select>
                </div>

                <button
                  className="cbx-btn-navy full-w"
                  onClick={() => {
                    setIsFitModalOpen(false);
                    showToast("Geometry matched: 54cm Medium Aero Frame with 100mm Stem!");
                  }}
                >
                  APPLY FIT TO BROWSE
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 13. CYCLING GUIDE VIEWER MODAL */}
      {selectedGuide && (
        <div className="cbx-modal-backdrop" onClick={() => setSelectedGuide(null)}>
          <div className="cbx-modal-card cbx-guide-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="cbx-modal-close"
              onClick={() => setSelectedGuide(null)}
              aria-label="Close guide"
            >
              <X size={20} />
            </button>

            <div className="cbx-guide-modal-head">
              <span className="cbx-pill">{selectedGuide.readTime}</span>
              <h2>{selectedGuide.title}</h2>
              <small>By {selectedGuide.author}</small>
            </div>

            <div className="cbx-guide-modal-img">
              <img src={selectedGuide.img} alt={selectedGuide.title} />
            </div>

            <div className="cbx-guide-modal-body">
              {selectedGuide.content.map((p: string, idx: number) => (
                <div key={idx} className="cbx-guide-step-block">
                  <p>{p}</p>
                </div>
              ))}
            </div>

            <div className="cbx-guide-modal-foot">
              <button
                className="cbx-btn-navy"
                onClick={() => {
                  setSelectedGuide(null);
                  showToast("Saved guide to your rider notebook!");
                }}
              >
                SAVE GUIDE FOR LATER
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default CycleBoxGear;
