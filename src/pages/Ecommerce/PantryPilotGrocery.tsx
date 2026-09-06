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
  Clock,
  Droplet,
  Eye,
  Feather,
  Heart,
  HelpCircle,
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

// Photo Assets
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
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <path
        d="M6 26L12 20M12 20C12 14 16 7 26 5C24 15 17 19 12 20ZM12 20L8 24M16 12L20 16"
        stroke="#0f4c5c"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="21" cy="11" r="2" fill="#f5b722" />
    </svg>
  );
}

// 3 Curated Collections Dataset
const curatedCollections = [
  {
    id: "artisan",
    title: "ARTISAN PANTRY",
    desc: "A stream high-quality oils, vinegars & small-batch sauces",
    btnText: "SHOP GOURMET",
    img: collArtisanImg,
  },
  {
    id: "global",
    title: "GLOBAL FLAVORS",
    desc: "Spices, ingredients from different regional cuisines",
    btnText: "EXPLORE WORLD",
    img: collSpicesImg,
  },
  {
    id: "fresh",
    title: "FRESH & LOCAL",
    desc: "Seasonal organic produce, heritage dairy & cheeses",
    btnText: "SHOP LOCAL",
    img: collFreshImg,
  },
];

// Featured Products Dataset
const featuredProducts = [
  {
    id: "tomatoes",
    title: "Small-Batch San Marzano Tomatoes",
    subtitle: "D.O.P. certified whole peeled sun-ripened tomatoes from volcanic soil",
    price: 12.99,
    origPrice: 15.50,
    rating: 4.9,
    reviews: 240,
    img: prodTomatoesImg,
    category: "Pantry Staples",
  },
  {
    id: "coffee",
    title: "Single-Origin Ethiopian Coffee Beans",
    subtitle: "Yirgacheffe floral washed roast with notes of jasmine, bergamot & honey",
    price: 12.99,
    origPrice: 16.00,
    rating: 4.8,
    reviews: 195,
    img: prodCoffeeImg,
    category: "Coffee & Tea",
  },
  {
    id: "crackers",
    title: "Artisanal Fig & Rosemary Crackers",
    subtitle: "Slow-baked seeded crisps infused with Aegean wild figs and garden rosemary",
    price: 12.99,
    origPrice: 14.50,
    rating: 4.9,
    reviews: 172,
    img: prodCrackersImg,
    category: "Snacks & Charcuterie",
  },
  {
    id: "carrots",
    title: "Organic Heirloom Carrots",
    subtitle: "Locally harvested rainbow bunch packed with crisp earthy sweetness",
    price: 12.99,
    origPrice: 14.00,
    rating: 4.8,
    reviews: 130,
    img: prodCarrotsImg,
    category: "Farm Fresh Produce",
  },
];

// Gourmet Meal Kits Dataset
const mealKits = [
  {
    id: "truffle-pasta",
    title: "Tuscan Black Truffle Bucatini",
    time: "20 Mins",
    servings: "2-3 Servings",
    ingredients: "Bronze-die bucatini, black truffle butter, 24-mo Parmigiano Reggiano, organic garlic",
    price: 34.00,
  },
  {
    id: "thai-curry",
    title: "Bangkok Coconut Lemongrass Curry",
    time: "25 Mins",
    servings: "4 Servings",
    ingredients: "Stone-ground red curry paste, organic coconut cream, bamboo shoots, kaffir lime leaf",
    price: 29.50,
  },
  {
    id: "spanish-paella",
    title: "Valencia Saffron Seafood Paella",
    time: "35 Mins",
    servings: "4-6 Servings",
    ingredients: "Bomba rice, La Mancha saffron threads, smoked pimentón, rich shellfish stock reduction",
    price: 42.00,
  },
];

export function PantryPilotGrocery() {
  // Shopping Cart & Wishlist State
  const [cart, setCart] = useState<{ [id: string]: number }>({
    tomatoes: 2,
    crackers: 1,
  });
  const [wishlist, setWishlist] = useState<{ [id: string]: boolean }>({
    coffee: true,
  });

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [zipInput, setZipInput] = useState("");
  const [zipResult, setZipResult] = useState<string | null>(null);

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
    const p = featuredProducts.find((item) => item.id === productId);
    showToast(`Added ${p ? p.title : "grocery item"} to cart!`);
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

  const cartSubtotal = Object.entries(cart).reduce((total, [id, qty]) => {
    const prod = featuredProducts.find((p) => p.id === id);
    if (prod) return total + prod.price * qty;
    if (id === "balsamic-deal") return total + 18.40 * qty;
    if (id.startsWith("kit-")) return total + 32.00 * qty;
    return total;
  }, 0);

  const handleZipCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!zipInput || zipInput.length < 5) {
      showToast("Please enter a valid 5-digit postal zip code");
      return;
    }
    setZipResult(`🎉 Great news! Same-Day delivery is available for Zip ${zipInput}. Next window: Tomorrow 8:00 AM - 11:00 AM.`);
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
          <span>FREE Delivery on your first order! Use code: <strong>PILOTFIRST</strong></span>
        </div>
      </div>

      {/* Main Header Navbar */}
      <header className="pp-header">
        <div className="pp-wrap pp-header-inner">
          {/* Logo */}
          <a href="#top" className="pp-brand">
            <PantryPilotLogo size={28} />
            <span className="pp-brand-title">PantryPilot</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="pp-nav-links">
            <a href="#featured" className="pp-nav-link">Shop All</a>
            <a href="#collections" className="pp-nav-link">Specialty Collections</a>
            <a href="#collections" className="pp-nav-link">Local Finds</a>
            <a href="#meal-kits" className="pp-nav-link">Recipes & Meal Kits</a>
            <a href="#zip-checker" className="pp-nav-link">About Us</a>
          </nav>

          {/* Right Utility Search, Account & Cart */}
          <div className="pp-nav-actions">
            <div className="pp-search-box">
              <Search size={14} className="pp-search-icon" />
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <button
              className="pp-text-btn"
              onClick={() => showToast("Member Log In Portal")}
            >
              Log In
            </button>

            <button
              className="pp-icon-btn"
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Wishlist"
            >
              <div className="pp-badge-wrap">
                <Heart size={18} />
                {totalWishlistCount > 0 && <span className="pp-badge">{totalWishlistCount}</span>}
              </div>
            </button>

            <button
              className="pp-icon-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Cart"
            >
              <div className="pp-badge-wrap">
                <ShoppingCart size={18} />
                <span className="pp-badge">{totalCartCount}</span>
              </div>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              className="pp-mobile-toggle"
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
        className={`pp-drawer-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`pp-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="pp-drawer-head">
          <div className="pp-brand">
            <PantryPilotLogo size={24} />
            <span className="pp-brand-title">PantryPilot</span>
          </div>
          <button className="pp-close-btn" onClick={() => setMobileMenuOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="pp-drawer-links">
          {["Shop All Grocery", "Artisan Pantry", "Global Flavors", "Farm Fresh & Local", "Gourmet Weeknight Meal Kits", "Delivery Area Checker", "Culinary Journal"].map((item) => (
            <a
              key={item}
              href="#collections"
              className="pp-drawer-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{item}</span>
              <ChevronRight size={16} />
            </a>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="pp-hero-section">
        <div className="pp-hero-bg">
          <img
            src={heroPantryImg}
            alt="Artisanal pantry shelves stocked with specialty grocery jars and oils"
          />
          <div className="pp-hero-overlay" />
        </div>

        <div className="pp-wrap pp-hero-content">
          <h1 className="pp-hero-title">
            PantryPilot: Your Daily Dose <br />
            of Extraordinary Grocery.
          </h1>

          <p className="pp-hero-sub">
            Curated specialty ingredients and local favorites delivered fresh to your door.
          </p>

          <a href="#featured" className="pp-btn-yellow">
            START SHOPPING
          </a>
        </div>
      </section>

      {/* CURATED COLLECTIONS (3 Cards) */}
      <section className="pp-section pp-collections-section" id="collections">
        <div className="pp-wrap">
          <div className="pp-section-head text-center">
            <h2 className="pp-section-title">CURATED COLLECTIONS</h2>
          </div>

          <div className="pp-collections-grid">
            {curatedCollections.map((col) => (
              <div key={col.id} className="pp-collection-card">
                <div className="pp-col-img-wrap">
                  <img src={col.img} alt={col.title} />
                </div>

                <div className="pp-col-body">
                  <h3>{col.title}</h3>
                  <p>{col.desc}</p>
                  <button
                    onClick={() => showToast(`Opening ${col.title}`)}
                    className="pp-btn-teal-sm"
                  >
                    {col.btnText}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST CUES (3 Horizontal Cards) */}
      <section className="pp-trust-section">
        <div className="pp-wrap">
          <div className="pp-section-head text-center">
            <h2 className="pp-section-title">TRUST CUES</h2>
          </div>

          <div className="pp-trust-grid">
            <div className="pp-trust-card">
              <div className="pp-trust-icon-box green">
                <Check size={26} />
              </div>
              <div className="pp-trust-info">
                <h3>CURATED QUALITY</h3>
                <p>Each product hand-selected by our food experts.</p>
              </div>
            </div>

            <div className="pp-trust-card">
              <div className="pp-trust-icon-box teal">
                <Rocket size={26} />
              </div>
              <div className="pp-trust-info">
                <h3>FAST & RELIABLE</h3>
                <p>Scheduled delivery windows that fit your life.</p>
              </div>
            </div>

            <div className="pp-trust-card">
              <div className="pp-trust-icon-box yellow">
                <Smile size={26} />
              </div>
              <div className="pp-trust-info">
                <h3>SATISFACTION GUARANTEED</h3>
                <p>Love it, or we'll make it right. Freshness promise.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTIONAL RHYTHM / WEEKLY PILOT PICK BANNER (Deep Ocean Teal) */}
      <section className="pp-promo-section" id="promo">
        <div className="pp-wrap">
          <div className="pp-promo-card">
            <div className="pp-promo-inner">
              <small className="pp-promo-tag">PROMOTIONAL RHYTHM</small>
              <span className="pp-promo-sub">THE WEEKLY PILOT PICK</span>
              <h2>OAK-AGED BALSAMIC VINEGAR</h2>
              <strong>20% OFF THIS WEEK</strong>

              <button
                onClick={() => {
                  setCart((prev) => ({ ...prev, "balsamic-deal": (prev["balsamic-deal"] || 0) + 1 }));
                  showToast("Added 20% Oak-Aged Balsamic Deal ($18.40) to cart!");
                  setIsCartOpen(true);
                }}
                className="pp-btn-white-pill"
              >
                GET THE DEAL
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS (4 Cards Grid) */}
      <section className="pp-section pp-featured-section" id="featured">
        <div className="pp-wrap">
          <div className="pp-section-head text-center">
            <h2 className="pp-section-title">FEATURED PRODUCTS</h2>
          </div>

          <div className="pp-products-grid">
            {featuredProducts.map((prod) => (
              <div
                key={prod.id}
                className="pp-product-card"
                onClick={() => setSelectedProduct(prod)}
              >
                <div className="pp-prod-img-box">
                  <img src={prod.img} alt={prod.title} />
                  <button
                    className={`pp-wish-btn ${wishlist[prod.id] ? "active" : ""}`}
                    onClick={(e) => handleToggleWishlist(prod.id, e)}
                    aria-label="Wishlist"
                  >
                    <Heart size={15} fill={wishlist[prod.id] ? "#0f4c5c" : "none"} color={wishlist[prod.id] ? "#0f4c5c" : "#78716c"} />
                  </button>
                </div>

                <div className="pp-prod-body">
                  <h3 className="pp-prod-title">{prod.title}</h3>
                  <p className="pp-prod-desc">{prod.subtitle}</p>
                  <strong className="pp-prod-price">${prod.price.toFixed(2)}</strong>

                  <button
                    className="pp-btn-teal-add"
                    onClick={(e) => handleAddToCart(prod.id, e)}
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE RECIPE MEAL KITS STUDIO (Long-Form Feature) */}
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
                <div className="pp-kit-header">
                  <UtensilsCrossed size={18} className="text-teal" />
                  <div className="pp-kit-badges">
                    <span><Clock size={12} className="inline mr-1" />{kit.time}</span>
                    <span>{kit.servings}</span>
                  </div>
                </div>

                <h3>{kit.title}</h3>
                <p><strong>Includes:</strong> {kit.ingredients}</p>

                <div className="pp-kit-footer">
                  <strong>${kit.price.toFixed(2)}</strong>
                  <button
                    onClick={() => {
                      setCart((prev) => ({ ...prev, [`kit-${kit.id}`]: (prev[`kit-${kit.id}`] || 0) + 1 }));
                      showToast(`Added ${kit.title} Meal Kit to cart!`);
                      setIsCartOpen(true);
                    }}
                    className="pp-btn-teal-sm"
                  >
                    ADD MEAL KIT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECIPE INSPIRATION (2 Editorial Cards) */}
      <section className="pp-section pp-recipes-section">
        <div className="pp-wrap">
          <div className="pp-section-head text-center">
            <h2 className="pp-section-title">RECIPE INSPIRATION</h2>
          </div>

          <div className="pp-recipes-grid">
            <div className="pp-recipe-card">
              <div className="pp-recipe-img">
                <img src={recipePastaImg} alt="Gourmet weeknight pasta dinner" />
              </div>
              <div className="pp-recipe-body">
                <h3>5 Easy Gourmet Weeknight Dinners</h3>
                <p>Elevate 20-minute weeknight cooking using artisanal pestos, dry-aged cheeses, and heirloom pasta shapes.</p>
                <button
                  onClick={() => showToast("Opening 5 Easy Gourmet Dinners Guide")}
                  className="pp-btn-teal-sm"
                >
                  VIEW RECIPE
                </button>
              </div>
            </div>

            <div className="pp-recipe-card">
              <div className="pp-recipe-img">
                <img src={recipeCheeseImg} alt="Artisanal cheese and charcuterie board" />
              </div>
              <div className="pp-recipe-body">
                <h3>How to Build the Perfect Cheese Board</h3>
                <p>Pairing aged cow and sheep milk cheeses with single-varietal honeys, fig crisps, and brined olives.</p>
                <button
                  onClick={() => showToast("Opening Perfect Cheese Board Guide")}
                  className="pp-btn-teal-sm"
                >
                  VIEW GUIDE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERY ZIP CHECKER (Long-Form Feature) */}
      <section className="pp-section pp-zip-section" id="zip-checker">
        <div className="pp-wrap">
          <div className="pp-zip-card">
            <div className="pp-zip-copy">
              <span className="pp-eyebrow">FARM-TO-DOOR LOGISTICS</span>
              <h2>CHECK DELIVERY IN YOUR NEIGHBORHOOD</h2>
              <p>We deliver climate-controlled refrigerated groceries with zero plastic packaging in under 24 hours.</p>

              <form className="pp-zip-form" onSubmit={handleZipCheck}>
                <input
                  type="text"
                  maxLength={5}
                  placeholder="Enter 5-digit Zip Code (e.g. 90210)"
                  value={zipInput}
                  onChange={(e) => setZipInput(e.target.value)}
                />
                <button type="submit">CHECK ZIP</button>
              </form>

              {zipResult && (
                <div className="pp-zip-success">
                  <CheckCircle2 size={18} className="text-green" />
                  <span>{zipResult}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Warm Sand Cream) */}
      <footer className="pp-footer">
        <div className="pp-wrap pp-footer-grid">
          {/* Col 1: Newsletter */}
          <div className="pp-footer-brand-col">
            <div className="pp-brand">
              <PantryPilotLogo size={24} />
              <span className="pp-brand-title">PantryPilot</span>
            </div>
            <h4>JOIN THE PILOT CREW:</h4>
            <p>Get 10% off and food tips!</p>
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
                placeholder="Email input"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
              />
              <button type="submit">SUBMIT</button>
            </form>
          </div>

          {/* Col 2: Customer Service */}
          <div className="pp-footer-col">
            <h4>CUSTOMER SERVICE</h4>
            <a href="#faq" onClick={(e) => { e.preventDefault(); showToast("FAQs & Freshness Guarantee"); }}>FAQs</a>
            <a href="#delivery" onClick={(e) => { e.preventDefault(); showToast("Delivery Areas & Time Slots"); }}>Delivery Areas</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); showToast("Contact Pantry Support"); }}>Contact Us</a>
            <a href="#returns" onClick={(e) => { e.preventDefault(); showToast("Zero-Hassle Freshness Returns"); }}>Returns</a>
          </div>

          {/* Col 3: About PantryPilot */}
          <div className="pp-footer-col">
            <h4>ABOUT PANTRYPILOT</h4>
            <a href="#mission" onClick={(e) => { e.preventDefault(); showToast("Our Sustainable Food Mission"); }}>Our Mission</a>
            <a href="#careers" onClick={(e) => { e.preventDefault(); showToast("Careers at PantryPilot"); }}>Careers</a>
            <a href="#blog" onClick={(e) => { e.preventDefault(); showToast("The PantryPilot Food Blog"); }}>Blog</a>
          </div>

          {/* Col 4: Social */}
          <div className="pp-footer-col">
            <h4>SOCIAL</h4>
            <div className="pp-social-icons">
              <a href="#instagram" aria-label="Instagram">📷</a>
              <a href="#facebook" aria-label="Facebook">f</a>
              <a href="#pinterest" aria-label="Pinterest">📌</a>
            </div>
          </div>
        </div>

        {/* Subfooter */}
        <div className="pp-subfooter">
          <div className="pp-wrap">
            <p>© 2024 PantryPilot. All Rights Reserved.</p>
          </div>
        </div>
      </footer>

      {/* Slide-out Cart Drawer */}
      <div
        className={`pp-drawer-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`pp-cart-drawer ${isCartOpen ? "open" : ""}`}>
        <div className="pp-cart-head">
          <h3>GROCERY BASKET ({totalCartCount})</h3>
          <button onClick={() => setIsCartOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="pp-cart-body">
          {totalCartCount > 0 ? (
            <div className="pp-cart-list">
              {Object.entries(cart).map(([id, qty]) => {
                const prod = featuredProducts.find((p) => p.id === id);
                let title = prod ? prod.title : id === "balsamic-deal" ? "Oak-Aged Balsamic Vinegar (20% Off)" : "Gourmet Weeknight Meal Kit";
                let price = prod ? prod.price : id === "balsamic-deal" ? 18.40 : 32.00;
                let img = prod ? prod.img : id === "balsamic-deal" ? spotlightVinegarImg : recipePastaImg;

                return (
                  <div key={id} className="pp-cart-item">
                    <img src={img} alt={title} />
                    <div className="pp-cart-item-info">
                      <h4>{title}</h4>
                      <strong>${(price * qty).toFixed(2)}</strong>
                      <div className="pp-cart-qty-row">
                        <button onClick={() => handleUpdateCartQty(id, -1)}><Minus size={12} /></button>
                        <span>{qty}</span>
                        <button onClick={() => handleUpdateCartQty(id, 1)}><Plus size={12} /></button>
                        <button className="pp-trash-link" onClick={() => handleRemoveFromCart(id)}><Trash2 size={14} /></button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="pp-empty-cart">
              <ShoppingBag size={42} className="text-muted" />
              <h4>Your grocery basket is empty</h4>
              <p>Explore San Marzano tomatoes, artisanal olive oils, and farm fresh produce.</p>
            </div>
          )}
        </div>

        {totalCartCount > 0 && (
          <div className="pp-cart-foot">
            <div className="pp-cart-total-row">
              <span>Subtotal:</span>
              <strong>${cartSubtotal.toFixed(2)}</strong>
            </div>
            <p className="pp-shipping-calc">
              {cartSubtotal >= 50 ? (
                <span className="text-green">✓ Free Local Refrigerated Delivery Unlocked!</span>
              ) : (
                `Add $${(50 - cartSubtotal).toFixed(2)} more for Free Delivery!`
              )}
            </p>
            <button
              onClick={() => {
                setIsCartOpen(false);
                showToast("Proceeding to Fresh Grocery Checkout...");
              }}
              className="pp-btn-teal-full"
            >
              CHECKOUT • ${cartSubtotal.toFixed(2)}
            </button>
          </div>
        )}
      </div>

      {/* Wishlist Drawer */}
      <div
        className={`pp-drawer-overlay ${isWishlistOpen ? "open" : ""}`}
        onClick={() => setIsWishlistOpen(false)}
      />
      <div className={`pp-cart-drawer ${isWishlistOpen ? "open" : ""}`}>
        <div className="pp-cart-head">
          <h3>SAVED PANTRY ({totalWishlistCount})</h3>
          <button onClick={() => setIsWishlistOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <div className="pp-cart-body">
          {totalWishlistCount > 0 ? (
            <div className="pp-cart-list">
              {Object.entries(wishlist).filter(([_, a]) => a).map(([id]) => {
                const prod = featuredProducts.find((p) => p.id === id);
                if (!prod) return null;
                return (
                  <div key={id} className="pp-cart-item">
                    <img src={prod.img} alt={prod.title} />
                    <div className="pp-cart-item-info">
                      <h4>{prod.title}</h4>
                      <strong>${prod.price.toFixed(2)}</strong>
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
              <Heart size={42} className="text-muted" />
              <h4>No items saved</h4>
            </div>
          )}
        </div>
      </div>

      {/* Quick View Product Modal */}
      {selectedProduct && (
        <div className="pp-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="pp-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="pp-modal-close" onClick={() => setSelectedProduct(null)}>
              <X size={20} />
            </button>

            <div className="pp-modal-grid">
              <div className="pp-modal-img">
                <img src={selectedProduct.img} alt={selectedProduct.title} />
              </div>
              <div className="pp-modal-info">
                <span className="pp-pill">{selectedProduct.category}</span>
                <h2>{selectedProduct.title}</h2>
                <p className="pp-modal-desc">{selectedProduct.subtitle}</p>

                <div className="pp-modal-price-row">
                  <strong>${selectedProduct.price.toFixed(2)}</strong>
                  <span>${selectedProduct.origPrice.toFixed(2)}</span>
                </div>

                <div className="pp-features-list">
                  <div><Check size={14} className="text-teal" /> 100% Non-GMO & Organic Certified</div>
                  <div><Check size={14} className="text-teal" /> Sourced from Regenerative Family Farms</div>
                  <div><Check size={14} className="text-teal" /> 100% Freshness & Ripeness Guaranteed</div>
                </div>

                <button
                  className="pp-btn-teal-full"
                  onClick={() => {
                    handleAddToCart(selectedProduct.id);
                    setSelectedProduct(null);
                  }}
                >
                  ADD TO BASKET • ${selectedProduct.price.toFixed(2)}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default PantryPilotGrocery;
