import React, { useState, useEffect, useMemo } from "react";
import {
  ArrowDown,
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Droplet,
  Eye,
  Feather,
  Filter,
  Flame,
  Heart,
  HelpCircle,
  Info,
  Layers,
  Leaf,
  MapPin,
  Menu,
  Minus,
  Package,
  Plus,
  RefreshCw,
  Rocket,
  Search,
  Send,
  Share2,
  Shield,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sliders,
  SlidersHorizontal,
  Smile,
  Sparkles,
  Star,
  Tag,
  Trash2,
  Truck,
  User,
  UtensilsCrossed,
  X,
  Zap,
} from "lucide-react";
import "./PantryPilotGrocery.css";

// Photo Assets (WebP Optimized)
import heroPantryImg from "../../assets/optimized/ecommerce/pantrypilot/hero-pantry.webp";
import collArtisanImg from "../../assets/optimized/ecommerce/pantrypilot/coll-artisan.webp";
import collSpicesImg from "../../assets/optimized/ecommerce/pantrypilot/coll-spices.webp";
import collFreshImg from "../../assets/optimized/ecommerce/pantrypilot/coll-fresh.webp";

import spotlightVinegarImg from "../../assets/optimized/ecommerce/pantrypilot/spotlight-vinegar.webp";
import prodTomatoesImg from "../../assets/optimized/ecommerce/pantrypilot/prod-tomatoes.webp";
import prodCoffeeImg from "../../assets/optimized/ecommerce/pantrypilot/prod-coffee.webp";
import prodCrackersImg from "../../assets/optimized/ecommerce/pantrypilot/prod-crackers.webp";
import prodCarrotsImg from "../../assets/optimized/ecommerce/pantrypilot/prod-carrots.webp";

import recipePastaImg from "../../assets/optimized/ecommerce/pantrypilot/recipe-pasta.webp";
import recipeCheeseImg from "../../assets/optimized/ecommerce/pantrypilot/recipe-cheese.webp";

// Rocket & Fork Logo SVG
function PantryPilotLogo({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M6 26L12 20M12 20C12 14 16 7 26 5C24 15 17 19 12 20ZM12 20L8 24M16 12L20 16"
        stroke="#0f4c5c"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="11" r="2.2" fill="#f5b722" />
    </svg>
  );
}

// 3 Curated Collections Dataset
const curatedCollections = [
  {
    id: "artisan",
    title: "ARTISAN PANTRY",
    desc: "Single-estate extra virgin olive oils, 25-year aged balsamic & small-batch finishing vinegars.",
    btnText: "SHOP GOURMET",
    img: collArtisanImg,
    categoryTarget: "Artisan Oils",
  },
  {
    id: "global",
    title: "GLOBAL FLAVORS",
    desc: "Direct-trade whole spices, stone-ground curries & aromatic botanical seasonings.",
    btnText: "EXPLORE WORLD",
    img: collSpicesImg,
    categoryTarget: "Pantry Staples",
  },
  {
    id: "fresh",
    title: "FARM FRESH & LOCAL",
    desc: "Regenerative organic heirloom vegetables, heritage dairy & artisanal fromagerie wedges.",
    btnText: "SHOP LOCAL",
    img: collFreshImg,
    categoryTarget: "Farm Fresh",
  },
];

// Expanded 8 Gourmet Products Dataset
const groceryProducts = [
  {
    id: "tomatoes",
    title: "Small-Batch San Marzano Tomatoes",
    subtitle: "D.O.P. certified whole peeled sun-ripened tomatoes grown in volcanic Campanian soil",
    price: 12.99,
    origPrice: 15.50,
    rating: 4.9,
    reviews: 240,
    img: prodTomatoesImg,
    category: "Pantry Staples",
    origin: "Campania, Italy",
    badge: "Bestseller",
  },
  {
    id: "coffee",
    title: "Single-Origin Ethiopian Coffee Beans",
    subtitle: "Yirgacheffe floral washed roast with notes of wild jasmine, bergamot & mountain honey",
    price: 18.50,
    origPrice: 22.00,
    rating: 4.8,
    reviews: 195,
    img: prodCoffeeImg,
    category: "Coffee & Tea",
    origin: "Yirgacheffe, Ethiopia",
    badge: "Direct Trade",
  },
  {
    id: "crackers",
    title: "Artisanal Seeded Sourdough Boules",
    subtitle: "Slow-fermented wild yeast loaves baked with ancient spelt, sunflower seeds & cracked rye",
    price: 12.99,
    origPrice: 14.50,
    rating: 4.9,
    reviews: 172,
    img: prodCrackersImg,
    category: "Bakery & Grains",
    origin: "Healdsburg, CA",
    badge: "Organic",
  },
  {
    id: "carrots",
    title: "Organic Heirloom Rainbow Carrots",
    subtitle: "Crisp purple, golden and orange bunch harvested daily with lush aromatic green tops",
    price: 8.50,
    origPrice: 10.00,
    rating: 4.8,
    reviews: 130,
    img: prodCarrotsImg,
    category: "Farm Fresh",
    origin: "Watsonville, CA",
    badge: "Farm Fresh",
  },
  {
    id: "balsamic-deal",
    title: "Oak-Aged Modena Balsamic Vinegar",
    subtitle: "25-year cask aged balsamic reserve with sweet fig undertones and rich syrupy density",
    price: 18.40,
    origPrice: 23.00,
    rating: 5.0,
    reviews: 312,
    img: spotlightVinegarImg,
    category: "Artisan Oils",
    origin: "Modena, Italy",
    badge: "20% Off Deal",
  },
  {
    id: "spices",
    title: "Single-Estate Stone Ground Spices",
    subtitle: "Small-batch organic ginger, turmeric root, black peppercorns and aromatic Ceylon cloves",
    price: 14.00,
    origPrice: 16.50,
    rating: 4.9,
    reviews: 88,
    img: collSpicesImg,
    category: "Pantry Staples",
    origin: "Kerala, India",
    badge: "Single Origin",
  },
  {
    id: "olive-oil",
    title: "First Cold-Pressed Extra Virgin Olive Oil",
    subtitle: "Unfiltered Frantoio and Leccino olive press boasting a bright peppery artichoke finish",
    price: 24.50,
    origPrice: 28.00,
    rating: 4.9,
    reviews: 215,
    img: collArtisanImg,
    category: "Artisan Oils",
    origin: "Tuscany, Italy",
    badge: "Estate Bottled",
  },
  {
    id: "cheese-wedge",
    title: "Cave-Aged Farmhouse Gruyère Wedge",
    subtitle: "Raw milk Swiss alpine wheel aged 14 months for crystalline crunch and nutty hazelnut depth",
    price: 16.50,
    origPrice: 19.50,
    rating: 4.9,
    reviews: 142,
    img: recipeCheeseImg,
    category: "Farm Fresh",
    origin: "Fribourg, Switzerland",
    badge: "Raw Milk AOP",
  },
];

// Gourmet Meal Kits Dataset
const mealKits = [
  {
    id: "truffle-pasta",
    title: "Tuscan Black Truffle Bucatini",
    time: "20 Mins",
    servings: "2-3 Servings",
    ingredients: "Bronze-die bucatini, black truffle butter, 24-mo Parmigiano Reggiano, organic purple garlic",
    price: 34.00,
    img: recipePastaImg,
  },
  {
    id: "thai-curry",
    title: "Bangkok Coconut Lemongrass Curry",
    time: "25 Mins",
    servings: "4 Servings",
    ingredients: "Stone-ground red curry paste, organic coconut cream, young bamboo shoots, kaffir lime leaves",
    price: 29.50,
    img: collSpicesImg,
  },
  {
    id: "spanish-paella",
    title: "Valencia Saffron Seafood Paella",
    time: "35 Mins",
    servings: "4-6 Servings",
    ingredients: "Bomba rice, La Mancha saffron threads, smoked pimentón, rich shellfish stock reduction",
    price: 42.00,
    img: spotlightVinegarImg,
  },
];

// Detailed Recipe Inspiration Articles Dataset
const recipeArticles = [
  {
    id: "pasta-guide",
    title: "5 Easy Gourmet Weeknight Dinners",
    eyebrow: "20-MINUTE ELEVATED SUPPERS",
    img: recipePastaImg,
    readTime: "4 min read",
    desc: "Elevate weeknight cooking using bronze-die heirloom pastas, grass-fed truffle butters, and aged hard cheeses.",
    servings: "2-3 Servings",
    prepTime: "20 Mins",
    ingredients: [
      "500g Artisanal Bronze-Die Bucatini Pasta",
      "80g Tuscan Summer Black Truffle Butter",
      "120g 24-Month Aged Parmigiano Reggiano D.O.P.",
      "1 Bulb Organic California Purple Garlic",
      "Coarsely cracked Tellicherry black peppercorns",
    ],
    method: [
      "Bring 4 quarts of spring water to a roaring boil with 2 tablespoons of Mediterranean sea salt. Drop bucatini and cook 9 minutes until perfectly al dente.",
      "In a wide carbon-steel pan over low heat, gently warm the black truffle butter with 3 tablespoons of starchy pasta water to create a creamy glossy emulsion.",
      "Transfer pasta directly into the pan glaze. Toss energetically off heat while showering with freshly grated Parmigiano Reggiano until coated.",
    ],
    bundlePrice: 34.00,
    kitId: "truffle-pasta",
  },
  {
    id: "cheese-guide",
    title: "How to Build the Perfect Artisan Cheese Board",
    eyebrow: "CULINARY ENTERTAINING MASTERCLASS",
    img: recipeCheeseImg,
    readTime: "5 min read",
    desc: "A pairing masterclass combining aged alpine cheeses, single-varietal Greek honeys, and crunchy sourdough crisps.",
    servings: "4-6 Servings",
    prepTime: "15 Mins",
    ingredients: [
      "200g Cave-Aged Swiss Farmhouse Gruyère",
      "150g French Goat Milk Camembert",
      "120g Greek Wild Thyme & Pine Blossom Honey",
      "1 Pack Artisanal Seeded Sourdough Crispbreads",
      "Fresh California Black Mission figs and roasted walnuts",
    ],
    method: [
      "Bring all cheeses out of refrigeration 45 minutes prior to gathering. This relaxes milk proteins to release delicate aroma and luscious texture.",
      "Arrange cheeses from mildest (creamy goat cheese) to most piquant (cave-aged Gruyère) moving clockwise across a solid acacia wood board.",
      "Fill negative space with seeded crisps, drizzling warm thyme honey over the soft cheeses and peppering with toasted walnuts.",
    ],
    bundlePrice: 42.00,
    kitId: "spanish-paella",
  },
];

export function PantryPilotGrocery() {
  // Shopping Cart & Wishlist State
  const [cart, setCart] = useState<{ [id: string]: number }>({
    tomatoes: 2,
    crackers: 1,
    "olive-oil": 1,
  });
  const [wishlist, setWishlist] = useState<{ [id: string]: boolean }>({
    coffee: true,
    "balsamic-deal": true,
  });

  // Category Filtering & Sorting
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"featured" | "price-low" | "price-high" | "rating">("featured");

  // Search and Drawer State
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Modals & User Feedback
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [activeRecipeModal, setActiveRecipeModal] = useState<any | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Delivery Zip Checker State
  const [zipInput, setZipInput] = useState("");
  const [zipResult, setZipResult] = useState<string | null>(null);

  // Promo Code State
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponStatus, setCouponStatus] = useState<string | null>(null);

  // Newsletter Email
  const [newsletterEmail, setNewsletterEmail] = useState("");

  // Counts
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
    const p = groceryProducts.find((item) => item.id === productId);
    const title = p ? p.title : productId.startsWith("kit-") ? "Gourmet Meal Kit" : "Grocery Item";
    showToast(`Added ${title} to your grocery basket!`);
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
      showToast(state ? "Saved to your kitchen grocery list ♡" : "Removed from list");
      return { ...prev, [productId]: state };
    });
  };

  // Live filtered products
  const filteredProducts = useMemo(() => {
    return groceryProducts
      .filter((p) => {
        const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
        const matchesSearch =
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.origin.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0;
      });
  }, [selectedCategory, searchQuery, sortBy]);

  // Live search results for popup dropdown
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return groceryProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Subtotal calculations
  const rawCartSubtotal = Object.entries(cart).reduce((total, [id, qty]) => {
    const prod = groceryProducts.find((p) => p.id === id);
    if (prod) return total + prod.price * qty;
    const kit = mealKits.find((k) => `kit-${k.id}` === id || k.id === id);
    if (kit) return total + kit.price * qty;
    if (id === "balsamic-deal") return total + 18.40 * qty;
    return total + 12.0 * qty;
  }, 0);

  const discountAmount = (rawCartSubtotal * appliedDiscount) / 100;
  const cartSubtotal = Math.max(0, rawCartSubtotal - discountAmount);

  // Apply Coupon
  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === "PILOTFIRST") {
      setAppliedDiscount(20);
      setCouponStatus("Code PILOTFIRST applied: 20% OFF!");
      showToast("Coupon PILOTFIRST applied: 20% OFF!");
    } else if (code === "CREW10") {
      setAppliedDiscount(10);
      setCouponStatus("Code CREW10 applied: 10% OFF!");
      showToast("Coupon CREW10 applied: 10% OFF!");
    } else {
      setCouponStatus("Invalid coupon. Try PILOTFIRST or CREW10");
      showToast("Invalid coupon code");
    }
  };

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput || zipInput.length < 5) {
      showToast("Please enter a valid 5-digit postal zip code");
      return;
    }
    setZipResult(`🎉 Great news! Climate-controlled refrigerated delivery is available for Zip ${zipInput}. Next morning window: Tomorrow 8:00 AM - 11:00 AM.`);
    showToast(`Verified delivery for ${zipInput}`);
  };

  // Scroll & Escape keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
        setIsWishlistOpen(false);
        setMobileMenuOpen(false);
        setSelectedProduct(null);
        setActiveRecipeModal(null);
        setIsSearchActive(false);
      }
    };
    if (isCartOpen || isWishlistOpen || mobileMenuOpen || selectedProduct || activeRecipeModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isCartOpen, isWishlistOpen, mobileMenuOpen, selectedProduct, activeRecipeModal]);

  return (
    <main className="pp-site" id="top" tabIndex={-1}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="pp-toast" role="alert">
          <Rocket size={16} className="text-yellow" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Announcement Bar */}
      <div className="pp-topbar">
        <div className="pp-wrap pp-topbar-inner">
          <div className="pp-topbar-left">
            <span className="pp-badge-pill">SAME-DAY DISPATCH</span>
            <span>FREE Climate-Controlled Refrigerated Delivery on orders over $50!</span>
          </div>
          <div className="pp-topbar-right">
            <span>Use code: <strong>PILOTFIRST</strong> for 20% off</span>
            <span className="pp-dot-sep">•</span>
            <a href="#zip-checker" className="pp-topbar-link">
              <MapPin size={12} className="inline mr-1" /> Check Zip Code
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header Navbar */}
      <header className="pp-header">
        <div className="pp-wrap pp-header-inner">
          {/* Logo */}
          <a href="#top" className="pp-brand" aria-label="PantryPilot Home">
            <div className="pp-brand-logo-group">
              <PantryPilotLogo size={28} />
              <div className="pp-brand-text">
                <span className="pp-brand-title">PantryPilot</span>
                <span className="pp-brand-sub">Curated Groceries</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="pp-nav-links" aria-label="Primary Navigation">
            <a href="#collections" className="pp-nav-link">Aisles & Collections</a>
            <a href="#featured" className="pp-nav-link">Market Highlights</a>
            <a href="#promo" className="pp-nav-link">Pilot Pick Deal</a>
            <a href="#meal-kits" className="pp-nav-link">Meal Kits</a>
            <a href="#recipes" className="pp-nav-link">Culinary Journal</a>
            <a href="#zip-checker" className="pp-nav-link">Delivery Area</a>
          </nav>

          {/* Right Utilities: Search, Wishlist & Cart */}
          <div className="pp-nav-actions">
            {/* Search Input / Live Popup */}
            <div className="pp-search-container">
              <div className={`pp-search-bar ${isSearchActive ? "active" : ""}`}>
                <Search size={15} className="pp-search-icon" />
                <input
                  type="text"
                  placeholder="Search tomatoes, olive oils, pasta..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchActive(true);
                  }}
                  onFocus={() => setIsSearchActive(true)}
                  aria-label="Search grocery items"
                />
                {searchQuery && (
                  <button
                    className="pp-search-clear"
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
                <div className="pp-search-dropdown">
                  <div className="pp-search-head">
                    <span>Found {searchResults.length} Grocery Items</span>
                    <button onClick={() => setIsSearchActive(false)} className="pp-text-btn">Close</button>
                  </div>
                  <div className="pp-search-results-list">
                    {searchResults.map((prod) => (
                      <div
                        key={prod.id}
                        className="pp-search-result-item"
                        onClick={() => {
                          setSelectedProduct(prod);
                          setIsSearchActive(false);
                        }}
                      >
                        <img src={prod.img} alt={prod.title} />
                        <div className="pp-search-item-info">
                          <h4>{prod.title}</h4>
                          <span>{prod.category} • ${prod.price.toFixed(2)}</span>
                        </div>
                        <button
                          className="pp-search-add-btn"
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

            {/* Desktop Wishlist Button */}
            <button
              className="pp-icon-btn pp-desktop-action"
              onClick={() => setIsWishlistOpen(true)}
              aria-label={`Wishlist with ${totalWishlistCount} items`}
            >
              <div className="pp-badge-wrap">
                <Heart size={19} />
                {totalWishlistCount > 0 && <span className="pp-badge">{totalWishlistCount}</span>}
              </div>
            </button>

            {/* Desktop Cart Button */}
            <button
              className="pp-cart-pill-btn pp-desktop-action"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Shopping basket with ${totalCartCount} items`}
            >
              <ShoppingCart size={18} />
              <span className="pp-cart-pill-text">Basket</span>
              <span className="pp-cart-pill-count">{totalCartCount}</span>
            </button>

            {/* Mobile Search Toggle */}
            <button
              className="pp-mobile-search-toggle"
              onClick={() => {
                const el = document.getElementById("featured");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setIsSearchActive(true);
              }}
              aria-label="Open search"
            >
              <Search size={20} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="pp-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Off-Canvas Mobile Drawer */}
      <div
        className={`pp-drawer-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`pp-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="pp-drawer-head">
          <div className="pp-brand">
            <PantryPilotLogo size={24} />
            <span className="pp-brand-title">PantryPilot</span>
          </div>
          <button className="pp-close-btn" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <div className="pp-mobile-promo-banner">
          <span className="pp-badge-pill">PILOTFIRST</span>
          <strong>20% OFF FIRST ORDER</strong>
          <small>Refrigerated delivery straight to your doorstep</small>
        </div>

        <div className="pp-drawer-links">
          {[
            { label: "Curated Aisles & Collections", href: "#collections" },
            { label: "Bestselling Market Highlights", href: "#featured" },
            { label: "Weekly Pilot Pick Deal (20% Off)", href: "#promo" },
            { label: "Chef-Curated Recipe Meal Kits", href: "#meal-kits" },
            { label: "Culinary Journal & Guides", href: "#recipes" },
            { label: "Check Delivery in Your Zip", href: "#zip-checker" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="pp-drawer-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{item.label}</span>
              <ChevronRight size={16} />
            </a>
          ))}
        </div>

        <div className="pp-drawer-footer">
          <div className="pp-trust-mini">
            <ShieldCheck size={16} className="text-teal" />
            <span>100% Cold-Chain Freshness Guaranteed</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pp-hero-section">
        <div className="pp-hero-bg">
          <img
            src={heroPantryImg}
            alt="Warm modern gourmet kitchen with fresh lemons, greens, and artisanal culinary ingredients"
            loading="eager"
          />
          <div className="pp-hero-overlay" />
        </div>

        <div className="pp-wrap pp-hero-content">
          <div className="pp-hero-badge">
            <Sparkles size={14} /> FARM-TO-TABLE SPECIALTY GROCERY
          </div>
          <h1 className="pp-hero-title">
            Your Daily Dose of <br />
            Extraordinary Grocery.
          </h1>

          <p className="pp-hero-sub">
            Hand-harvested heirloom produce, estate-pressed olive oils, and small-batch European staples delivered fresh in under 24 hours.
          </p>

          <div className="pp-hero-cta-group">
            <a href="#featured" className="pp-btn-yellow">
              START SHOPPING <ArrowRight size={16} />
            </a>
            <a href="#collections" className="pp-btn-outline-white">
              EXPLORE AISLES
            </a>
          </div>

          <div className="pp-hero-perks">
            <div className="pp-perk-item">
              <CheckCircle2 size={16} className="text-yellow" />
              <span>Zero-Plastic Cold Packaging</span>
            </div>
            <div className="pp-perk-item">
              <CheckCircle2 size={16} className="text-yellow" />
              <span>Same-Day Local Dispatch</span>
            </div>
            <div className="pp-perk-item">
              <CheckCircle2 size={16} className="text-yellow" />
              <span>100% Organic & Non-GMO</span>
            </div>
          </div>
        </div>
      </section>

      {/* CURATED AISLES / COLLECTIONS (3 Rich Cards) */}
      <section className="pp-section pp-collections-section" id="collections">
        <div className="pp-wrap">
          <div className="pp-section-head text-center">
            <span className="pp-eyebrow">CURATED AISLES</span>
            <h2 className="pp-section-title">EXPLORE BY SPECIALTY COLLECTION</h2>
            <p className="pp-sub">Discover artisanal products sourced directly from family farms, heritage mills, and coastal orchards.</p>
          </div>

          <div className="pp-collections-grid">
            {curatedCollections.map((col) => (
              <div key={col.id} className="pp-collection-card">
                <div className="pp-col-img-wrap">
                  <img src={col.img} alt={col.title} loading="lazy" />
                  <div className="pp-col-badge">Hand-Selected</div>
                </div>

                <div className="pp-col-body">
                  <h3>{col.title}</h3>
                  <p>{col.desc}</p>
                  <button
                    onClick={() => {
                      setSelectedCategory(col.categoryTarget);
                      const el = document.getElementById("featured");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                      showToast(`Filtered by ${col.categoryTarget}`);
                    }}
                    className="pp-btn-teal-sm"
                  >
                    {col.btnText} <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST CUES (3 Horizontal Highlights) */}
      <section className="pp-trust-section">
        <div className="pp-wrap">
          <div className="pp-trust-grid">
            <div className="pp-trust-card">
              <div className="pp-trust-icon-box green">
                <CheckCircle2 size={26} />
              </div>
              <div className="pp-trust-info">
                <h3>CURATED QUALITY STANDARDS</h3>
                <p>Every single product is sampled and approved by professional culinary chefs and food specialists.</p>
              </div>
            </div>

            <div className="pp-trust-card">
              <div className="pp-trust-icon-box teal">
                <Rocket size={26} />
              </div>
              <div className="pp-trust-info">
                <h3>FAST & RELIABLE DISPATCH</h3>
                <p>Refrigerated temperature-controlled local vehicles ensure chilled dairy and leafy greens arrive crisp.</p>
              </div>
            </div>

            <div className="pp-trust-card">
              <div className="pp-trust-icon-box yellow">
                <Smile size={26} />
              </div>
              <div className="pp-trust-info">
                <h3>SATISFACTION GUARANTEED</h3>
                <p>Love your fresh groceries or we refund with zero return friction. Our freshness promise is unconditional.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTIONAL RHYTHM / THE WEEKLY PILOT PICK BANNER */}
      <section className="pp-promo-section" id="promo">
        <div className="pp-wrap">
          <div className="pp-promo-card">
            <div className="pp-promo-grid">
              <div className="pp-promo-media">
                <img
                  src={spotlightVinegarImg}
                  alt="Glass bottle of Tuscan extra virgin olive oil and ripe green and black olives"
                  loading="lazy"
                />
                <div className="pp-promo-discount-badge">
                  <span>20% OFF</span>
                </div>
              </div>

              <div className="pp-promo-body">
                <div className="pp-promo-tags-row">
                  <span className="pp-promo-pill">PROMOTIONAL RHYTHM</span>
                  <span className="pp-promo-tag-gold">THE WEEKLY PILOT PICK</span>
                </div>

                <h2>25-Year Oak-Aged Modena Balsamic Vinegar</h2>
                <p className="pp-promo-desc">
                  Slowly concentrated in battery casks of oak, cherry, and chestnut wood in Emilia-Romagna. Delivers luscious viscosity, complex fruit bouquet, and velvet acidity for aged cheeses, fresh strawberries, and grilled steaks.
                </p>

                <div className="pp-promo-pricing-row">
                  <div className="pp-promo-price-group">
                    <span className="pp-promo-price">$18.40</span>
                    <span className="pp-promo-orig">$23.00</span>
                    <span className="pp-promo-save">Save $4.60</span>
                  </div>

                  <button
                    onClick={() => {
                      setCart((prev) => ({ ...prev, "balsamic-deal": (prev["balsamic-deal"] || 0) + 1 }));
                      showToast("Added Oak-Aged Balsamic Deal ($18.40) to basket!");
                      setIsCartOpen(true);
                    }}
                    className="pp-btn-yellow"
                  >
                    ADD DEAL TO BASKET <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS & INTERACTIVE CATALOG */}
      <section className="pp-section pp-featured-section" id="featured">
        <div className="pp-wrap">
          <div className="pp-section-head text-center">
            <span className="pp-eyebrow">FARM FRESH & ARTISANAL PANTRY</span>
            <h2 className="pp-section-title">MARKET HIGHLIGHTS & ESSENTIALS</h2>
            <p className="pp-sub">Explore hand-harvested ingredients, single-estate pantry staples, and bakery goods.</p>
          </div>

          {/* Catalog Controls: Categories and Sort */}
          <div className="pp-catalog-controls">
            <div className="pp-category-chips">
              {["All", "Pantry Staples", "Farm Fresh", "Artisan Oils", "Bakery & Grains", "Coffee & Tea"].map((cat) => (
                <button
                  key={cat}
                  className={`pp-category-chip ${selectedCategory === cat ? "active" : ""}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="pp-sort-box">
              <label htmlFor="pp-sort-select">
                <SlidersHorizontal size={14} /> Sort By:
              </label>
              <select
                id="pp-sort-select"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
              >
                <option value="featured">Featured Picks</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Customer Rating</option>
              </select>
            </div>
          </div>

          {/* Product Grid */}
          <div className="pp-products-grid">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="pp-product-card"
                onClick={() => setSelectedProduct(prod)}
              >
                <div className="pp-prod-img-box">
                  <img src={prod.img} alt={prod.title} loading="lazy" />
                  {prod.badge && <span className="pp-prod-badge">{prod.badge}</span>}

                  <button
                    className={`pp-wish-btn ${wishlist[prod.id] ? "active" : ""}`}
                    onClick={(e) => handleToggleWishlist(prod.id, e)}
                    aria-label={`Save ${prod.title} to wishlist`}
                  >
                    <Heart
                      size={15}
                      fill={wishlist[prod.id] ? "#0f4c5c" : "none"}
                      color={wishlist[prod.id] ? "#0f4c5c" : "#78716c"}
                    />
                  </button>

                  <button
                    className="pp-quick-view-trigger"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(prod);
                    }}
                    aria-label="Quick view product details"
                  >
                    <Eye size={14} /> Quick View
                  </button>
                </div>

                <div className="pp-prod-body">
                  <div className="pp-prod-meta-row">
                    <span className="pp-prod-category">{prod.category}</span>
                    <span className="pp-prod-origin">{prod.origin}</span>
                  </div>

                  <h3 className="pp-prod-title">{prod.title}</h3>
                  <p className="pp-prod-desc">{prod.subtitle}</p>

                  <div className="pp-prod-rating-row">
                    <div className="pp-rating-stars">
                      <Star size={13} fill="#f5b722" color="#f5b722" />
                      <strong>{prod.rating.toFixed(1)}</strong>
                    </div>
                    <span className="pp-reviews-count">({prod.reviews} reviews)</span>
                  </div>

                  <div className="pp-prod-bottom-row">
                    <div className="pp-price-wrap">
                      <strong className="pp-prod-price">${prod.price.toFixed(2)}</strong>
                      {prod.origPrice > prod.price && (
                        <span className="pp-prod-orig">${prod.origPrice.toFixed(2)}</span>
                      )}
                    </div>

                    <button
                      className="pp-btn-teal-add"
                      onClick={(e) => handleAddToCart(prod.id, e)}
                      aria-label={`Add ${prod.title} to basket`}
                    >
                      <Plus size={14} /> ADD
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="pp-empty-filter-state">
              <Package size={48} className="text-muted" />
              <h3>No groceries match your search</h3>
              <p>Try resetting your filters or searching for "tomatoes", "olive oil", or "sourdough".</p>
              <button
                className="pp-btn-teal-sm mt-3"
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

      {/* GOURMET WEEKNIGHT MEAL KITS STUDIO */}
      <section className="pp-section pp-kits-section" id="meal-kits">
        <div className="pp-wrap">
          <div className="pp-section-head text-center">
            <span className="pp-eyebrow">CHEF-CURATED DINNERS</span>
            <h2 className="pp-section-title">GOURMET WEEKNIGHT RECIPE BOXES</h2>
            <p className="pp-sub">Pre-portioned artisan ingredients with chef instructions delivered straight to your kitchen.</p>
          </div>

          <div className="pp-kits-grid">
            {mealKits.map((kit) => (
              <div key={kit.id} className="pp-kit-card">
                <div className="pp-kit-img-wrap">
                  <img src={kit.img} alt={kit.title} loading="lazy" />
                  <div className="pp-kit-badge-tag">
                    <Clock size={12} className="inline mr-1" /> {kit.time}
                  </div>
                </div>

                <div className="pp-kit-body">
                  <div className="pp-kit-header">
                    <UtensilsCrossed size={18} className="text-teal" />
                    <span className="pp-kit-servings">{kit.servings}</span>
                  </div>

                  <h3>{kit.title}</h3>
                  <p><strong>Includes:</strong> {kit.ingredients}</p>

                  <div className="pp-kit-footer">
                    <strong className="pp-kit-price">${kit.price.toFixed(2)}</strong>
                    <button
                      onClick={() => {
                        setCart((prev) => ({ ...prev, [`kit-${kit.id}`]: (prev[`kit-${kit.id}`] || 0) + 1 }));
                        showToast(`Added ${kit.title} Meal Kit to basket!`);
                        setIsCartOpen(true);
                      }}
                      className="pp-btn-teal-sm"
                    >
                      ADD MEAL KIT <Plus size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECIPE INSPIRATION & CULINARY JOURNAL */}
      <section className="pp-section pp-recipes-section" id="recipes">
        <div className="pp-wrap">
          <div className="pp-section-head text-center">
            <span className="pp-eyebrow">KITCHEN INSPIRATION</span>
            <h2 className="pp-section-title">THE PANTRYPILOT CULINARY JOURNAL</h2>
            <p className="pp-sub">Techniques, pairings, and effortless gourmet recipes designed around seasonal pantry essentials.</p>
          </div>

          <div className="pp-recipes-grid">
            {recipeArticles.map((article) => (
              <div key={article.id} className="pp-recipe-card">
                <div className="pp-recipe-img">
                  <img src={article.img} alt={article.title} loading="lazy" />
                  <span className="pp-recipe-tag">{article.readTime}</span>
                </div>
                <div className="pp-recipe-body">
                  <span className="pp-recipe-eyebrow">{article.eyebrow}</span>
                  <h3>{article.title}</h3>
                  <p>{article.desc}</p>

                  <div className="pp-recipe-meta">
                    <span><Clock size={13} className="inline mr-1 text-teal" /> {article.prepTime}</span>
                    <span><UtensilsCrossed size={13} className="inline mr-1 text-teal" /> {article.servings}</span>
                  </div>

                  <div className="pp-recipe-btn-row">
                    <button
                      onClick={() => setActiveRecipeModal(article)}
                      className="pp-btn-teal-sm"
                    >
                      VIEW RECIPE & METHOD <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DELIVERY ZIP CHECKER (Interactive Feature) */}
      <section className="pp-section pp-zip-section" id="zip-checker">
        <div className="pp-wrap">
          <div className="pp-zip-card">
            <div className="pp-zip-copy">
              <span className="pp-eyebrow">LOCAL DISPATCH NETWORK</span>
              <h2>CHECK REFRIGERATED DELIVERY IN YOUR ZIP</h2>
              <p>We deliver climate-controlled refrigerated groceries with zero plastic packaging in under 24 hours.</p>

              <form className="pp-zip-form" onSubmit={handleZipCheck}>
                <div className="pp-zip-input-wrap">
                  <MapPin size={18} className="pp-zip-pin-icon" />
                  <input
                    type="text"
                    maxLength={5}
                    placeholder="Enter 5-digit Zip Code (e.g. 90210, 10001)"
                    value={zipInput}
                    onChange={(e) => setZipInput(e.target.value)}
                    aria-label="5-digit postal zip code"
                  />
                </div>
                <button type="submit" className="pp-btn-teal-zip">
                  CHECK ZIP DISPATCH
                </button>
              </form>

              {zipResult && (
                <div className="pp-zip-success">
                  <CheckCircle2 size={20} className="text-green flex-shrink-0" />
                  <span>{zipResult}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Warm Sand Linen Aesthetic) */}
      <footer className="pp-footer">
        <div className="pp-wrap pp-footer-grid">
          {/* Col 1: Newsletter */}
          <div className="pp-footer-brand-col">
            <div className="pp-brand">
              <PantryPilotLogo size={26} />
              <span className="pp-brand-title">PantryPilot</span>
            </div>
            <h4>JOIN THE PILOT CREW:</h4>
            <p>Receive exclusive weekly harvest drops, chef recipes, and 10% off your next basket.</p>
            <form
              className="pp-news-form"
              onSubmit={(e) => {
                e.preventDefault();
                showToast("Welcome to the Pilot Crew! Use code CREW10 for 10% off.");
                setNewsletterEmail("");
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                aria-label="Email for culinary newsletter"
              />
              <button type="submit">JOIN</button>
            </form>
          </div>

          {/* Col 2: Customer Service */}
          <div className="pp-footer-col">
            <h4>CUSTOMER SERVICE</h4>
            <a href="#faq" onClick={(e) => { e.preventDefault(); showToast("FAQs & Cold-Chain Guarantee"); }}>FAQs</a>
            <a href="#delivery" onClick={(e) => { e.preventDefault(); showToast("Delivery Areas & Time Slots"); }}>Delivery Areas</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); showToast("Contact Pantry Concierge"); }}>Contact Us</a>
            <a href="#returns" onClick={(e) => { e.preventDefault(); showToast("Zero-Hassle Freshness Returns"); }}>Returns Policy</a>
          </div>

          {/* Col 3: About PantryPilot */}
          <div className="pp-footer-col">
            <h4>ABOUT PANTRYPILOT</h4>
            <a href="#mission" onClick={(e) => { e.preventDefault(); showToast("Our Sustainable Food Mission"); }}>Our Food Mission</a>
            <a href="#farmers" onClick={(e) => { e.preventDefault(); showToast("Regenerative Organic Partner Farms"); }}>Partner Farms</a>
            <a href="#careers" onClick={(e) => { e.preventDefault(); showToast("Careers at PantryPilot"); }}>Careers</a>
            <a href="#blog" onClick={(e) => { e.preventDefault(); showToast("The PantryPilot Culinary Blog"); }}>Culinary Journal</a>
          </div>

          {/* Col 4: Social */}
          <div className="pp-footer-col">
            <h4>CONNECT</h4>
            <p className="pp-footer-muted-text">Follow our daily harvest dispatches:</p>
            <div className="pp-social-icons">
              <a href="#instagram" aria-label="Instagram" onClick={(e) => { e.preventDefault(); showToast("Instagram @pantrypilot"); }}>📷</a>
              <a href="#facebook" aria-label="Facebook" onClick={(e) => { e.preventDefault(); showToast("Facebook @pantrypilot"); }}>f</a>
              <a href="#pinterest" aria-label="Pinterest" onClick={(e) => { e.preventDefault(); showToast("Pinterest @pantrypilot"); }}>📌</a>
            </div>
          </div>
        </div>

        {/* Subfooter */}
        <div className="pp-subfooter">
          <div className="pp-wrap pp-subfooter-inner">
            <p>© {new Date().getFullYear()} PantryPilot Grocery Co. All Rights Reserved.</p>
            <div className="pp-subfooter-links">
              <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
              <span>•</span>
              <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
              <span>•</span>
              <a href="#organic" onClick={(e) => e.preventDefault()}>Organic Certification</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <nav className="pp-bottom-nav" aria-label="Mobile Bottom Navigation">
        <button
          className="pp-bottom-nav-item"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Grocery Home"
        >
          <Compass size={20} />
          <span>Explore</span>
        </button>

        <button
          className="pp-bottom-nav-item"
          onClick={() => {
            const el = document.getElementById("collections");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Aisles"
        >
          <Layers size={20} />
          <span>Aisles</span>
        </button>

        <button
          className="pp-bottom-nav-item"
          onClick={() => {
            const el = document.getElementById("meal-kits");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Meal Kits"
        >
          <UtensilsCrossed size={20} />
          <span>Kits</span>
        </button>

        <button
          className="pp-bottom-nav-item"
          onClick={() => setIsWishlistOpen(true)}
          aria-label="Saved Grocery List"
        >
          <div className="pp-badge-wrap">
            <Heart size={20} />
            {totalWishlistCount > 0 && <span className="pp-badge">{totalWishlistCount}</span>}
          </div>
          <span>Saved</span>
        </button>

        <button
          className="pp-bottom-nav-item pp-bottom-basket"
          onClick={() => setIsCartOpen(true)}
          aria-label="Grocery Basket"
        >
          <div className="pp-badge-wrap">
            <ShoppingCart size={20} />
            {totalCartCount > 0 && <span className="pp-badge">{totalCartCount}</span>}
          </div>
          <span>Basket</span>
        </button>
      </nav>

      {/* Slide-out Grocery Basket Cart Drawer */}
      <div
        className={`pp-drawer-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`pp-cart-drawer ${isCartOpen ? "open" : ""}`} role="dialog" aria-label="Grocery Basket">
        <div className="pp-cart-head">
          <div className="pp-cart-head-title">
            <ShoppingCart size={20} className="text-teal" />
            <h3>GROCERY BASKET ({totalCartCount})</h3>
          </div>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close basket drawer">
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="pp-shipping-meter-box">
          <div className="pp-meter-text">
            {rawCartSubtotal >= 50 ? (
              <span className="text-green">
                <CheckCircle2 size={14} /> You unlocked <strong>FREE Local Refrigerated Delivery!</strong>
              </span>
            ) : (
              <span>
                Add <strong>${(50 - rawCartSubtotal).toFixed(2)}</strong> more for <strong>FREE Delivery</strong>
              </span>
            )}
          </div>
          <div className="pp-meter-track">
            <div
              className="pp-meter-fill"
              style={{ width: `${Math.min(100, (rawCartSubtotal / 50) * 100)}%` }}
            />
          </div>
        </div>

        <div className="pp-cart-body">
          {totalCartCount > 0 ? (
            <div className="pp-cart-list">
              {Object.entries(cart).map(([id, qty]) => {
                const prod = groceryProducts.find((p) => p.id === id);
                const kit = mealKits.find((k) => `kit-${k.id}` === id || k.id === id);

                let title = prod
                  ? prod.title
                  : kit
                  ? `${kit.title} Meal Kit`
                  : id === "balsamic-deal"
                  ? "Oak-Aged Modena Balsamic Vinegar (20% Off)"
                  : "Artisan Pantry Grocery Item";

                let price = prod
                  ? prod.price
                  : kit
                  ? kit.price
                  : id === "balsamic-deal"
                  ? 18.40
                  : 12.00;

                let img = prod
                  ? prod.img
                  : kit
                  ? kit.img
                  : id === "balsamic-deal"
                  ? spotlightVinegarImg
                  : recipePastaImg;

                return (
                  <div key={id} className="pp-cart-item">
                    <img src={img} alt={title} />
                    <div className="pp-cart-item-info">
                      <div className="pp-cart-title-row">
                        <h4>{title}</h4>
                        <button
                          className="pp-trash-link"
                          onClick={() => handleRemoveFromCart(id)}
                          aria-label={`Remove ${title} from basket`}
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                      <strong className="pp-cart-item-price">${(price * qty).toFixed(2)}</strong>
                      <div className="pp-cart-qty-row">
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
            <div className="pp-empty-cart">
              <ShoppingBag size={44} className="text-muted" />
              <h4>Your grocery basket is empty</h4>
              <p>Explore San Marzano tomatoes, artisanal olive oils, and farm fresh vegetables.</p>
              <button
                className="pp-btn-teal-sm mt-3"
                onClick={() => {
                  setIsCartOpen(false);
                  const el = document.getElementById("featured");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Browse Market Highlights
              </button>
            </div>
          )}
        </div>

        {totalCartCount > 0 && (
          <div className="pp-cart-foot">
            <form className="pp-coupon-form" onSubmit={handleApplyCoupon}>
              <input
                type="text"
                placeholder="Promo code (PILOTFIRST / CREW10)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                aria-label="Discount promo coupon code"
              />
              <button type="submit">Apply</button>
            </form>
            {couponStatus && <span className="pp-coupon-status">{couponStatus}</span>}

            <div className="pp-cart-summary-box">
              <div className="pp-cart-total-row">
                <span>Subtotal:</span>
                <span>${rawCartSubtotal.toFixed(2)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="pp-cart-total-row highlight">
                  <span>Discount ({appliedDiscount}%):</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="pp-cart-total-row">
                <span>Refrigerated Delivery:</span>
                <span>{rawCartSubtotal >= 50 ? "FREE" : "$6.95"}</span>
              </div>
              <div className="pp-cart-final-total">
                <span>Total:</span>
                <strong>
                  ${(cartSubtotal + (rawCartSubtotal >= 50 ? 0 : 6.95)).toFixed(2)}
                </strong>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                showToast("Proceeding to Fresh Cold-Chain Checkout...");
              }}
              className="pp-btn-teal-full"
            >
              PROCEED TO CHECKOUT • ${(cartSubtotal + (rawCartSubtotal >= 50 ? 0 : 6.95)).toFixed(2)}
            </button>
          </div>
        )}
      </div>

      {/* Wishlist Drawer */}
      <div
        className={`pp-drawer-overlay ${isWishlistOpen ? "open" : ""}`}
        onClick={() => setIsWishlistOpen(false)}
      />
      <div className={`pp-cart-drawer ${isWishlistOpen ? "open" : ""}`} role="dialog" aria-label="Saved Grocery List">
        <div className="pp-cart-head">
          <div className="pp-cart-head-title">
            <Heart size={20} className="text-teal" />
            <h3>SAVED PANTRY ({totalWishlistCount})</h3>
          </div>
          <button onClick={() => setIsWishlistOpen(false)} aria-label="Close saved pantry drawer">
            <X size={20} />
          </button>
        </div>

        <div className="pp-cart-body">
          {totalWishlistCount > 0 ? (
            <div className="pp-cart-list">
              {Object.entries(wishlist)
                .filter(([_, a]) => a)
                .map(([id]) => {
                  const prod = groceryProducts.find((p) => p.id === id);
                  if (!prod) return null;
                  return (
                    <div key={id} className="pp-cart-item">
                      <img src={prod.img} alt={prod.title} />
                      <div className="pp-cart-item-info">
                        <h4>{prod.title}</h4>
                        <strong className="pp-cart-item-price">${prod.price.toFixed(2)}</strong>
                        <button
                          className="pp-btn-teal-sm mt-2"
                          onClick={() => {
                            handleAddToCart(id);
                            handleToggleWishlist(id);
                          }}
                        >
                          MOVE TO BASKET
                        </button>
                      </div>
                    </div>
                  );
                })}
            </div>
          ) : (
            <div className="pp-empty-cart">
              <Heart size={44} className="text-muted" />
              <h4>No items saved</h4>
              <p>Save items with the heart icon while browsing to build your weekly pantry grocery list.</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick View Product Modal */}
      {selectedProduct && (
        <div className="pp-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="pp-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="pp-modal-close" onClick={() => setSelectedProduct(null)} aria-label="Close quick view">
              <X size={20} />
            </button>

            <div className="pp-modal-grid">
              <div className="pp-modal-img">
                <img src={selectedProduct.img} alt={selectedProduct.title} />
              </div>
              <div className="pp-modal-info">
                <span className="pp-pill">{selectedProduct.category}</span>
                <h2>{selectedProduct.title}</h2>
                <p className="pp-modal-origin">Origin: <strong>{selectedProduct.origin}</strong></p>
                <p className="pp-modal-desc">{selectedProduct.subtitle}</p>

                <div className="pp-modal-price-row">
                  <strong>${selectedProduct.price.toFixed(2)}</strong>
                  {selectedProduct.origPrice > selectedProduct.price && (
                    <span>${selectedProduct.origPrice.toFixed(2)}</span>
                  )}
                </div>

                <div className="pp-features-list">
                  <div><Check size={14} className="text-teal" /> 100% Non-GMO & Organic Certified</div>
                  <div><Check size={14} className="text-teal" /> Sourced directly from regenerative family farms</div>
                  <div><Check size={14} className="text-teal" /> 100% Cold-chain freshness guaranteed</div>
                </div>

                <div className="pp-modal-actions">
                  <button
                    className="pp-btn-teal-full"
                    onClick={() => {
                      handleAddToCart(selectedProduct.id);
                      setSelectedProduct(null);
                    }}
                  >
                    ADD TO BASKET • ${selectedProduct.price.toFixed(2)}
                  </button>
                  <button
                    className="pp-modal-wish-btn"
                    onClick={(e) => handleToggleWishlist(selectedProduct.id, e)}
                  >
                    <Heart
                      size={18}
                      fill={wishlist[selectedProduct.id] ? "#0f4c5c" : "none"}
                      color={wishlist[selectedProduct.id] ? "#0f4c5c" : "#0f4c5c"}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Recipe Inspiration Detailed Modal */}
      {activeRecipeModal && (
        <div className="pp-modal-backdrop" onClick={() => setActiveRecipeModal(null)}>
          <div className="pp-recipe-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="pp-modal-close" onClick={() => setActiveRecipeModal(null)} aria-label="Close recipe reader">
              <X size={20} />
            </button>

            <div className="pp-recipe-modal-grid">
              <div className="pp-recipe-modal-img">
                <img src={activeRecipeModal.img} alt={activeRecipeModal.title} />
              </div>

              <div className="pp-recipe-modal-body">
                <span className="pp-pill">{activeRecipeModal.eyebrow}</span>
                <h2>{activeRecipeModal.title}</h2>
                <p className="pp-recipe-modal-desc">{activeRecipeModal.desc}</p>

                <div className="pp-recipe-specs-pills">
                  <span><Clock size={13} className="inline mr-1" /> Prep: {activeRecipeModal.prepTime}</span>
                  <span><UtensilsCrossed size={13} className="inline mr-1" /> Servings: {activeRecipeModal.servings}</span>
                </div>

                <div className="pp-recipe-section-box">
                  <h4>Ingredients Included in Bundle:</h4>
                  <ul className="pp-recipe-ingredients-list">
                    {activeRecipeModal.ingredients.map((ing: string) => (
                      <li key={ing}><Check size={13} className="text-teal flex-shrink-0" /> {ing}</li>
                    ))}
                  </ul>
                </div>

                <div className="pp-recipe-section-box">
                  <h4>Chef Method & Instructions:</h4>
                  <ol className="pp-recipe-method-list">
                    {activeRecipeModal.method.map((step: string, idx: number) => (
                      <li key={idx}><strong>Step {idx + 1}:</strong> {step}</li>
                    ))}
                  </ol>
                </div>

                <div className="pp-recipe-bundle-action">
                  <div className="pp-bundle-price-box">
                    <span className="pp-bundle-label">Full Recipe Box Bundle</span>
                    <strong className="pp-bundle-price">${activeRecipeModal.bundlePrice.toFixed(2)}</strong>
                  </div>
                  <button
                    className="pp-btn-yellow"
                    onClick={() => {
                      setCart((prev) => ({
                        ...prev,
                        [`kit-${activeRecipeModal.kitId}`]: (prev[`kit-${activeRecipeModal.kitId}`] || 0) + 1,
                      }));
                      showToast(`Added ${activeRecipeModal.title} Recipe Bundle to basket!`);
                      setActiveRecipeModal(null);
                      setIsCartOpen(true);
                    }}
                  >
                    ADD RECIPE BUNDLE TO BASKET <ShoppingCart size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default PantryPilotGrocery;
