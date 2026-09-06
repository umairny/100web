import React, { useState, useEffect, useMemo } from "react";
import {
  ArrowRight,
  Award,
  Calendar,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Compass,
  Eye,
  Filter,
  Flame,
  Gift,
  Heart,
  HelpCircle,
  Info,
  Layers,
  MapPin,
  Menu,
  Minus,
  Package,
  Plus,
  RefreshCw,
  RotateCcw,
  Search,
  Shield,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  SlidersHorizontal,
  Smile,
  Sparkles,
  Star,
  Tag,
  Trash2,
  Truck,
  User,
  X,
  Zap,
} from "lucide-react";
import "./PawParcelPets.css";

// Photography Assets (Optimized WebP)
import heroPetsImg from "../../assets/optimized/ecommerce/pawparcel/hero-pets.webp";
import collDogImg from "../../assets/optimized/ecommerce/pawparcel/coll-dog.webp";
import collCatImg from "../../assets/optimized/ecommerce/pawparcel/coll-cat.webp";
import collShopImg from "../../assets/optimized/ecommerce/pawparcel/coll-shop.webp";

import promoSpringImg from "../../assets/optimized/ecommerce/pawparcel/promo-spring.webp";
import prodDogBoxImg from "../../assets/optimized/ecommerce/pawparcel/prod-dogbox.webp";
import prodCatPuzzleImg from "../../assets/optimized/ecommerce/pawparcel/prod-catpuzzle.webp";
import prodChewsImg from "../../assets/optimized/ecommerce/pawparcel/prod-chews.webp";
import prodBallImg from "../../assets/optimized/ecommerce/pawparcel/prod-ball.webp";
import prodCatnipImg from "../../assets/optimized/ecommerce/pawparcel/prod-catnip.webp";

import guideActiveImg from "../../assets/optimized/ecommerce/pawparcel/guide-active.webp";
import guideNutritionImg from "../../assets/optimized/ecommerce/pawparcel/guide-nutrition.webp";

// Paw & Parcel Box Logo SVG
function PawParcelLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      {/* Box base */}
      <rect x="5" y="12" width="22" height="15" rx="3" fill="#1b3b6f" />
      <path d="M5 16H27" stroke="#f5a623" strokeWidth="2" />
      {/* Paw prints inside / above */}
      <circle cx="16" cy="7" r="2.4" fill="#f5a623" />
      <circle cx="11.5" cy="8.5" r="1.8" fill="#f5a623" />
      <circle cx="20.5" cy="8.5" r="1.8" fill="#f5a623" />
      <circle cx="16" cy="20" r="3" fill="#ffffff" />
      <circle cx="12" cy="18" r="1.5" fill="#ffffff" />
      <circle cx="20" cy="18" r="1.5" fill="#ffffff" />
    </svg>
  );
}

// 3 Clear Collections Dataset
const clearCollections = [
  {
    id: "dog-box",
    title: "DOG PAWPARCEL",
    subtitle: "Custom-tailored boxes packed with tough toys, natural chews & grain-free treats.",
    btnText: "SHOP DOG BOXES",
    img: collDogImg,
    targetPet: "dog",
  },
  {
    id: "cat-box",
    title: "CAT PAWPARCEL",
    subtitle: "Interactive puzzle toys, organic Canadian catnip kickers & salmon purée treats.",
    btnText: "SHOP CAT BOXES",
    img: collCatImg,
    targetPet: "cat",
  },
  {
    id: "a-la-carte",
    title: "A LA CARTE SHOP",
    subtitle: "Restock individual favorite toys, orthopedic travel beds, and dental wellness treats.",
    btnText: "SHOP THE PET SHOP",
    img: collShopImg,
    targetPet: "all",
  },
];

// 8 Featured Pet Products Dataset
const petProducts = [
  {
    id: "deluxe-dog-box",
    title: "Deluxe Dog Monthly Box",
    subtitle: "2 innovative plush chew toys, 2 full-size natural treat bags & 1 savory dental chew stick.",
    price: 24.99,
    origPrice: 34.99,
    rating: 4.9,
    reviews: 428,
    img: prodDogBoxImg,
    category: "Dog Favorites",
    pet: "dog",
    badge: "Top Rated Box",
  },
  {
    id: "cat-puzzle-toy",
    title: "Interactive Cat Puzzle Board",
    subtitle: "Multi-level sliding discs with hidden treat compartments to ignite natural feline hunting instincts.",
    price: 24.99,
    origPrice: 29.99,
    rating: 4.9,
    reviews: 312,
    img: prodCatPuzzleImg,
    category: "Cat Toys & Treats",
    pet: "cat",
    badge: "Bestseller",
  },
  {
    id: "calming-chew-sticks",
    title: "Natural Calming Collagen Sticks",
    subtitle: "Long-lasting grass-fed beef collagen chews infused with chamomile & hemp for anxious pups.",
    price: 24.99,
    origPrice: 28.00,
    rating: 4.8,
    reviews: 265,
    img: prodChewsImg,
    category: "Natural Chews",
    pet: "dog",
    badge: "Vet Approved",
  },
  {
    id: "rubber-fetch-ball",
    title: "Ultra-Durable Rubber Fetch Ball",
    subtitle: "High-bounce puncture-resistant natural rubber core. Floats in water and gentle on canine teeth.",
    price: 14.99,
    origPrice: 18.00,
    rating: 4.9,
    reviews: 184,
    img: prodBallImg,
    category: "Dog Favorites",
    pet: "dog",
    badge: "Indestructible",
  },
  {
    id: "catnip-plush-kicker",
    title: "Organic Catnip Plush Kicker",
    subtitle: "Heavy-duty canvas kick stick stuffed with 100% farm-grown organic mountain catnip.",
    price: 12.99,
    origPrice: 16.00,
    rating: 4.8,
    reviews: 156,
    img: prodCatnipImg,
    category: "Cat Toys & Treats",
    pet: "cat",
    badge: "100% Organic",
  },
  {
    id: "spring-adventure-box",
    title: "Spring Outdoor Adventure Box",
    subtitle: "Includes collapsible silicon travel bowl, floating splash disc, tick defense balm & trail treats.",
    price: 29.99,
    origPrice: 42.00,
    rating: 5.0,
    reviews: 219,
    img: promoSpringImg,
    category: "Dog Favorites",
    pet: "dog",
    badge: "Seasonal Deal",
  },
  {
    id: "yak-cheese-chew",
    title: "Himalayan Yak Hard Cheese Chew",
    subtitle: "Ancient recipe hard yak milk chew providing hours of safe gnawing without odor or splintering.",
    price: 15.99,
    origPrice: 19.50,
    rating: 4.9,
    reviews: 198,
    img: prodChewsImg,
    category: "Natural Chews",
    pet: "dog",
    badge: "Long Lasting",
  },
  {
    id: "active-play-tunnel",
    title: "Crinkle Play Tunnel & Feather Wand",
    subtitle: "Collapsible 3-way crinkle tunnel with peek-a-boo hole and interchangeable natural feather wands.",
    price: 22.50,
    origPrice: 26.00,
    rating: 4.8,
    reviews: 142,
    img: collCatImg,
    category: "Cat Toys & Treats",
    pet: "cat",
    badge: "Feline Fun",
  },
];

// Pet Wellness Editorial Guides Dataset
const wellnessGuides = [
  {
    id: "active-indoors",
    title: "How to Keep Your Pet Active & Mentally Sharp Indoors",
    eyebrow: "CANINE & FELINE WELLNESS",
    img: guideActiveImg,
    readTime: "4 min read",
    desc: "Bad weather shouldn't mean boredom. Learn science-backed scent games, treat puzzles, and agility exercises.",
    tips: [
      "Hide high-value freeze-dried treats inside a rolled towel for a 15-minute natural foraging workout.",
      "Rotate toys weekly—keeping only 3 toys accessible preserves novelty and prevents play fatigue.",
      "Use puzzle feeder mats that extend mealtime from 2 minutes to 15 minutes, lowering stress cortisol.",
    ],
    recommendedProduct: "Interactive Cat Puzzle Board",
  },
  {
    id: "dietary-needs",
    title: "Understanding Your Pet's Nutritional & Allergy Needs",
    eyebrow: "VET CLINICAL ADVICE",
    img: guideNutritionImg,
    readTime: "5 min read",
    desc: "From grain sensitivities to joint-supporting omega oils, decode how tailored whole foods improve coat and longevity.",
    tips: [
      "Single-source novel proteins (like duck, venison, or salmon) minimize common allergic itching reactions.",
      "Add bone broth or goat milk kefir over dry kibble to enhance hydration and digestive gut microbiome flora.",
      "Look for limited-ingredient dental chews free of artificial bleached rawhides and chemical binders.",
    ],
    recommendedProduct: "Natural Calming Collagen Sticks",
  },
];

export function PawParcelPets() {
  // Shopping Cart & Wishlist State
  const [cart, setCart] = useState<{ [id: string]: number }>({
    "deluxe-dog-box": 1,
    "rubber-fetch-ball": 1,
  });
  const [wishlist, setWishlist] = useState<{ [id: string]: boolean }>({
    "cat-puzzle-toy": true,
    "spring-adventure-box": true,
  });

  // Interactive Box Builder State
  const [builderPetType, setBuilderPetType] = useState<"dog" | "cat">("dog");
  const [builderPetSize, setBuilderPetSize] = useState("Medium (20-50 lbs)");
  const [builderTheme, setBuilderTheme] = useState("Play & Chew (Toys + Treats)");
  const [builderPlan, setBuilderPlan] = useState<"monthly" | "6-month">("6-month");

  // Filter & Sort State
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState<"featured" | "price-low" | "price-high" | "rating">("featured");

  // Search, Drawers & Modals
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [activeGuideModal, setActiveGuideModal] = useState<any | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Promo Code Engine
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0);
  const [couponStatus, setCouponStatus] = useState<string | null>(null);
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
    const p = petProducts.find((item) => item.id === productId);
    const title = p ? p.title : productId.startsWith("custom-") ? "Customized PawParcel" : "Pet Essential";
    showToast(`Added ${title} to your cart! 🐾`);
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
      showToast(state ? "Saved to your pet wishlist ♡" : "Removed from wishlist");
      return { ...prev, [productId]: state };
    });
  };

  // Add customized box to cart
  const handleAddCustomBox = () => {
    const boxId = `custom-${builderPetType}-${builderPlan}`;
    setCart((prev) => ({
      ...prev,
      [boxId]: (prev[boxId] || 0) + 1,
    }));
    showToast(`Tailored ${builderPetType === "dog" ? "Dog" : "Cat"} PawParcel added to cart!`);
    setIsCartOpen(true);
  };

  // Live filter
  const filteredProducts = useMemo(() => {
    return petProducts
      .filter((p) => {
        const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
        const matchesSearch =
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === "price-low") return a.price - b.price;
        if (sortBy === "price-high") return b.price - a.price;
        if (sortBy === "rating") return b.rating - a.rating;
        return 0;
      });
  }, [selectedCategory, searchQuery, sortBy]);

  // Live search popup results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return petProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  // Cart subtotal calculations
  const rawCartSubtotal = Object.entries(cart).reduce((total, [id, qty]) => {
    const prod = petProducts.find((p) => p.id === id);
    if (prod) return total + prod.price * qty;
    if (id.includes("custom-")) {
      return total + (id.includes("6-month") ? 24.99 : 29.99) * qty;
    }
    return total + 20.0 * qty;
  }, 0);

  const discountAmount = (rawCartSubtotal * appliedDiscount) / 100;
  const cartSubtotal = Math.max(0, rawCartSubtotal - discountAmount);

  // Apply Coupon
  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === "WELCOME20") {
      setAppliedDiscount(20);
      setCouponStatus("Code WELCOME20 applied: 20% OFF!");
      showToast("Coupon WELCOME20 applied: 20% OFF!");
    } else if (code === "SPRING30") {
      setAppliedDiscount(30);
      setCouponStatus("Code SPRING30 applied: 30% OFF!");
      showToast("Coupon SPRING30 applied: 30% OFF!");
    } else {
      setCouponStatus("Invalid code. Try WELCOME20 or SPRING30");
      showToast("Invalid promo code");
    }
  };

  // Keyboard escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
        setIsWishlistOpen(false);
        setMobileMenuOpen(false);
        setSelectedProduct(null);
        setActiveGuideModal(null);
        setIsSearchActive(false);
      }
    };
    if (isCartOpen || isWishlistOpen || mobileMenuOpen || selectedProduct || activeGuideModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isCartOpen, isWishlistOpen, mobileMenuOpen, selectedProduct, activeGuideModal]);

  return (
    <main className="pp-site" id="top" tabIndex={-1}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="pp-toast" role="alert">
          <Sparkles size={16} className="text-yellow" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Announcement Bar */}
      <div className="pp-topbar">
        <div className="pp-wrap pp-topbar-inner">
          <div className="pp-topbar-left">
            <span className="pp-topbar-badge">SPRING EVENT</span>
            <span>JOIN TODAY AND GET YOUR FIRST PAWPARCEL 20% OFF! Code: <strong>WELCOME20</strong></span>
          </div>
          <div className="pp-topbar-right">
            <span>Free Shipping on Orders $35+</span>
            <span className="pp-dot-sep">•</span>
            <span>100% Tail-Wagging Guarantee</span>
          </div>
        </div>
      </div>

      {/* Sticky Main Header Navbar */}
      <header className="pp-header">
        <div className="pp-wrap pp-header-inner">
          {/* Brand Logo */}
          <a href="#top" className="pp-brand" aria-label="PawParcel Pets Home">
            <div className="pp-brand-group">
              <PawParcelLogo size={28} />
              <div className="pp-brand-text">
                <span className="pp-brand-title">PawParcel</span>
                <span className="pp-brand-sub">Tailored Pet Essentials</span>
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="pp-nav-links" aria-label="Main Navigation">
            <a href="#builder" className="pp-nav-link pp-nav-highlight">
              <Gift size={14} /> Build Your Box
            </a>
            <a href="#collections" className="pp-nav-link">Our Boxes</a>
            <a href="#catalog" className="pp-nav-link">Pet Shop</a>
            <a href="#promo" className="pp-nav-link">Spring Offer</a>
            <a href="#wellness" className="pp-nav-link">Pet Wellness</a>
            <a href="#reviews" className="pp-nav-link">Reviews</a>
          </nav>

          {/* Utility Actions */}
          <div className="pp-nav-actions">
            {/* Search Input */}
            <div className="pp-search-container">
              <div className={`pp-search-bar ${isSearchActive ? "active" : ""}`}>
                <Search size={15} className="pp-search-icon" />
                <input
                  type="text"
                  placeholder="Search toys, chews, catnip..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchActive(true);
                  }}
                  onFocus={() => setIsSearchActive(true)}
                  aria-label="Search pet products"
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
                    <span>Found {searchResults.length} Products</span>
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

            {/* Wishlist Button (Desktop) */}
            <button
              className="pp-icon-btn pp-desktop-action"
              onClick={() => setIsWishlistOpen(true)}
              aria-label={`Wishlist with ${totalWishlistCount} items`}
            >
              <div className="pp-badge-wrap">
                <Heart size={20} />
                {totalWishlistCount > 0 && <span className="pp-badge">{totalWishlistCount}</span>}
              </div>
            </button>

            {/* Cart Button (Desktop) */}
            <button
              className="pp-cart-pill-btn pp-desktop-action"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Shopping cart with ${totalCartCount} items`}
            >
              <ShoppingBag size={18} />
              <span className="pp-cart-pill-text">Cart</span>
              <span className="pp-cart-pill-count">{totalCartCount}</span>
            </button>

            {/* Mobile Search Toggle */}
            <button
              className="pp-mobile-search-toggle"
              onClick={() => {
                const el = document.getElementById("catalog");
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
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
          <div className="pp-brand-group">
            <PawParcelLogo size={24} />
            <span className="pp-brand-title">PawParcel</span>
          </div>
          <button className="pp-close-btn" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <div className="pp-mobile-promo-banner">
          <span className="pp-badge-pill">WELCOME20</span>
          <strong>20% OFF YOUR FIRST BOX</strong>
          <small>Free surprise welcome toy included!</small>
        </div>

        <div className="pp-drawer-links">
          {[
            { label: "Build Your Custom Box", href: "#builder" },
            { label: "Our Curated Boxes", href: "#collections" },
            { label: "A La Carte Pet Shop", href: "#catalog" },
            { label: "Spring Adventure Box (30% Off)", href: "#promo" },
            { label: "Pet Wellness & Nutrition Guides", href: "#wellness" },
            { label: "Verified Pet Parent Reviews", href: "#reviews" },
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
            <ShieldCheck size={16} className="text-yellow" />
            <span>100% Non-Toxic & Vet-Approved</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pp-hero-section">
        <div className="pp-hero-bg">
          <img
            src={heroPetsImg}
            alt="Adorable happy golden beagle pup smiling brightly"
            loading="eager"
          />
          <div className="pp-hero-overlay" />
        </div>

        <div className="pp-wrap pp-hero-content">
          <div className="pp-hero-pill">
            <Sparkles size={14} /> TAILORED MONTHLY HAPPINESS
          </div>

          <h1 className="pp-hero-title">
            PawParcel: Tailored <br />
            Essentials For Your <br />
            Best Friend. Delivered.
          </h1>

          <p className="pp-hero-sub">
            Curated monthly boxes packed with veterinarian-approved toys, organic wholesome treats, and healthy chews. Unbox pure joy every month.
          </p>

          <div className="pp-hero-cta-group">
            <a href="#builder" className="pp-btn-yellow">
              BUILD MY PAWPARCEL <ArrowRight size={16} />
            </a>
            <a href="#catalog" className="pp-btn-outline-white">
              EXPLORE PET SHOP
            </a>
          </div>

          <div className="pp-hero-trust-chips">
            <div className="pp-trust-chip">
              <CheckCircle2 size={16} className="text-yellow" />
              <span>100% Non-Toxic Chews</span>
            </div>
            <div className="pp-trust-chip">
              <CheckCircle2 size={16} className="text-yellow" />
              <span>Free Shipping on Boxes</span>
            </div>
            <div className="pp-trust-chip">
              <CheckCircle2 size={16} className="text-yellow" />
              <span>Skip or Cancel Anytime</span>
            </div>
          </div>
        </div>
      </section>

      {/* CLEAR COLLECTIONS (3 Category Cards) */}
      <section className="pp-section pp-collections-section" id="collections">
        <div className="pp-wrap">
          <div className="pp-section-head text-center">
            <span className="pp-eyebrow">CURATED PET HAPPINESS</span>
            <h2 className="pp-section-title">CLEAR COLLECTIONS</h2>
            <p className="pp-sub">Select the experience made specifically for your dog or cat, or browse individual restock favorites.</p>
          </div>

          <div className="pp-collections-grid">
            {clearCollections.map((col) => (
              <div key={col.id} className="pp-collection-card">
                <div className="pp-col-img-wrap">
                  <img src={col.img} alt={col.title} loading="lazy" />
                  <div className="pp-col-badge">Tailored Goodies</div>
                </div>

                <div className="pp-col-body">
                  <h3>{col.title}</h3>
                  <p>{col.subtitle}</p>
                  <button
                    onClick={() => {
                      if (col.targetPet === "dog") {
                        setBuilderPetType("dog");
                        const el = document.getElementById("builder");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      } else if (col.targetPet === "cat") {
                        setBuilderPetType("cat");
                        const el = document.getElementById("builder");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      } else {
                        const el = document.getElementById("catalog");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="pp-btn-yellow-sm"
                  >
                    {col.btnText} <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE PAWPARCEL BOX BUILDER STUDIO */}
      <section className="pp-section pp-builder-section" id="builder">
        <div className="pp-wrap">
          <div className="pp-section-head text-center">
            <span className="pp-eyebrow">INTERACTIVE SUBSCRIPTION CONFIGURATOR</span>
            <h2 className="pp-section-title">BUILD YOUR PET'S DREAM PAWPARCEL</h2>
            <p className="pp-sub">Tell us about your pet. We personalize toys for chewing strength and treats for dietary sensitivities.</p>
          </div>

          <div className="pp-builder-card">
            {/* Step 1: Pet Type */}
            <div className="pp-builder-step">
              <span className="pp-step-num">STEP 1</span>
              <h3>Choose Your Pet</h3>
              <div className="pp-pet-toggle-row">
                <button
                  className={`pp-pet-toggle-btn ${builderPetType === "dog" ? "active" : ""}`}
                  onClick={() => setBuilderPetType("dog")}
                >
                  <span className="pp-pet-emoji">🐶</span>
                  <strong>Dog PawParcel</strong>
                  <small>Toys, chews & dental bones</small>
                </button>
                <button
                  className={`pp-pet-toggle-btn ${builderPetType === "cat" ? "active" : ""}`}
                  onClick={() => setBuilderPetType("cat")}
                >
                  <span className="pp-pet-emoji">🐱</span>
                  <strong>Cat PawParcel</strong>
                  <small>Feathers, catnip & purée treats</small>
                </button>
              </div>
            </div>

            {/* Step 2: Pet Size / Life Stage */}
            <div className="pp-builder-step">
              <span className="pp-step-num">STEP 2</span>
              <h3>Pet Size & Weight Class</h3>
              <div className="pp-size-chips">
                {[
                  "Puppy / Kitten (Under 6 mos)",
                  "Small (0-20 lbs)",
                  "Medium (20-50 lbs)",
                  "Large / Giant (50+ lbs)",
                ].map((size) => (
                  <button
                    key={size}
                    className={`pp-size-chip ${builderPetSize === size ? "active" : ""}`}
                    onClick={() => setBuilderPetSize(size)}
                  >
                    <CheckCircle2 size={15} className="pp-chip-check" />
                    <span>{size}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Box Style & Theme */}
            <div className="pp-builder-step">
              <span className="pp-step-num">STEP 3</span>
              <h3>Select Box Theme</h3>
              <div className="pp-theme-cards-grid">
                {[
                  {
                    name: "Play & Chew (Toys + Treats)",
                    desc: "2 interactive toys, 2 bags of treats, and 1 natural chew stick.",
                  },
                  {
                    name: "Extreme Chewer (Super Durable)",
                    desc: "Ultra-tough rubber & nylon toys designed for heavy chewing jaws.",
                  },
                  {
                    name: "Sensitive Tummy (Grain-Free)",
                    desc: "Hypoallergenic single-protein treats free from chicken, corn, or wheat.",
                  },
                ].map((thm) => (
                  <div
                    key={thm.name}
                    className={`pp-theme-choice ${builderTheme === thm.name ? "active" : ""}`}
                    onClick={() => setBuilderTheme(thm.name)}
                  >
                    <h4>{thm.name}</h4>
                    <p>{thm.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Step 4: Plan Choice & Summary Bar */}
            <div className="pp-builder-summary-bar">
              <div className="pp-plan-selector">
                <button
                  className={`pp-plan-pill ${builderPlan === "6-month" ? "active" : ""}`}
                  onClick={() => setBuilderPlan("6-month")}
                >
                  <span className="pp-plan-tag">BEST VALUE</span>
                  <strong>6-Month Plan</strong>
                  <span>$24.99 / mo</span>
                </button>
                <button
                  className={`pp-plan-pill ${builderPlan === "monthly" ? "active" : ""}`}
                  onClick={() => setBuilderPlan("monthly")}
                >
                  <strong>Monthly Flexible</strong>
                  <span>$29.99 / mo</span>
                </button>
              </div>

              <div className="pp-builder-action-box">
                <div className="pp-builder-price-group">
                  <span className="pp-builder-total-price">
                    ${builderPlan === "6-month" ? "24.99" : "29.99"}
                    <small>/month</small>
                  </span>
                  <span className="pp-builder-free-ship">Free Shipping & Free First Toy</span>
                </div>

                <button onClick={handleAddCustomBox} className="pp-btn-yellow-lg">
                  START MY SUBSCRIPTION <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST CUES (3 Horizontal Cards) */}
      <section className="pp-trust-section">
        <div className="pp-wrap">
          <div className="pp-section-head text-center">
            <span className="pp-eyebrow">OUR COMMITMENT</span>
            <h2 className="pp-section-title">TRUST CUES</h2>
          </div>

          <div className="pp-trust-grid">
            <div className="pp-trust-card">
              <div className="pp-trust-icon-box gold">
                <Award size={26} />
              </div>
              <div className="pp-trust-info">
                <h3>EXPERT CURATED</h3>
                <p>Boxes hand-picked by certified veterinarians & pet nutritionists for safety, engagement, and wellness.</p>
              </div>
            </div>

            <div className="pp-trust-card">
              <div className="pp-trust-icon-box blue">
                <Calendar size={26} />
              </div>
              <div className="pp-trust-info">
                <h3>FLEXIBLE SUBSCRIPTION</h3>
                <p>Adjust your delivery schedule, pause during vacations, or cancel anytime with 1 click. Zero sneaky fees.</p>
              </div>
            </div>

            <div className="pp-trust-card">
              <div className="pp-trust-icon-box navy">
                <Smile size={26} />
              </div>
              <div className="pp-trust-info">
                <h3>SATISFACTION GUARANTEED</h3>
                <p>We'll make it right. If your dog or cat doesn't genuinely adore an item, we'll replace it 100% free.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTIONAL RHYTHM / SEASONAL SNEAK PEEK BANNER */}
      <section className="pp-promo-section" id="promo">
        <div className="pp-wrap">
          <div className="pp-promo-card">
            <div className="pp-promo-grid">
              <div className="pp-promo-media">
                <img
                  src={promoSpringImg}
                  alt="Spring outdoor dog playing in sunny park with frisbee"
                  loading="lazy"
                />
                <div className="pp-promo-badge">30% OFF FIRST 3 BOXES</div>
              </div>

              <div className="pp-promo-body">
                <span className="pp-promo-eyebrow">PROMOTIONAL RHYTHM</span>
                <span className="pp-promo-subtitle">SEASONAL SNEAK PEEK</span>
                <h2>THE SPRING ADVENTURE BOX</h2>
                <p className="pp-promo-desc">
                  Spring is for sniffing! Unpack our outdoor-themed seasonal box loaded with waterproof flying discs, portable trail water bowls, tick-defense balms, and oven-baked duck treats.
                </p>

                <div className="pp-promo-action-row">
                  <div className="pp-promo-price-box">
                    <span className="pp-promo-main-price">$29.99</span>
                    <span className="pp-promo-orig-price">$42.00</span>
                    <span className="pp-promo-deal-pill">Code: SPRING30</span>
                  </div>

                  <button
                    onClick={() => {
                      setCart((prev) => ({ ...prev, "spring-adventure-box": (prev["spring-adventure-box"] || 0) + 1 }));
                      showToast("Added Spring Adventure Box ($29.99) to cart!");
                      setIsCartOpen(true);
                    }}
                    className="pp-btn-yellow"
                  >
                    GET THE OFFER <Sparkles size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS & A LA CARTE CATALOG */}
      <section className="pp-section pp-featured-section" id="catalog">
        <div className="pp-wrap">
          <div className="pp-section-head text-center">
            <span className="pp-eyebrow">A LA CARTE PET STORE</span>
            <h2 className="pp-section-title">FEATURED PRODUCTS</h2>
            <p className="pp-sub">Restock your pet's everyday favorites or send a one-time gift box with free delivery on $35+.</p>
          </div>

          {/* Catalog Controls */}
          <div className="pp-catalog-controls">
            <div className="pp-category-chips">
              {["All", "Dog Favorites", "Cat Toys & Treats", "Natural Chews"].map((cat) => (
                <button
                  key={cat}
                  className={`pp-cat-chip ${selectedCategory === cat ? "active" : ""}`}
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
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="pp-products-grid">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="pp-product-card"
                onClick={() => setSelectedProduct(prod)}
              >
                <div className="pp-prod-img-wrap">
                  <img src={prod.img} alt={prod.title} loading="lazy" />
                  {prod.badge && <span className="pp-prod-badge">{prod.badge}</span>}

                  <button
                    className={`pp-wish-btn ${wishlist[prod.id] ? "active" : ""}`}
                    onClick={(e) => handleToggleWishlist(prod.id, e)}
                    aria-label={`Save ${prod.title} to wishlist`}
                  >
                    <Heart
                      size={15}
                      fill={wishlist[prod.id] ? "#f5a623" : "none"}
                      color={wishlist[prod.id] ? "#f5a623" : "#64748b"}
                    />
                  </button>

                  <button
                    className="pp-quick-view-overlay-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedProduct(prod);
                    }}
                  >
                    <Eye size={13} /> Quick View
                  </button>
                </div>

                <div className="pp-prod-body">
                  <div className="pp-prod-meta-row">
                    <span className="pp-prod-category">{prod.category}</span>
                    <span className="pp-prod-pet-tag">{prod.pet === "dog" ? "🐕 Dog" : "🐈 Cat"}</span>
                  </div>

                  <h3 className="pp-prod-title">{prod.title}</h3>
                  <p className="pp-prod-desc">{prod.subtitle}</p>

                  <div className="pp-prod-rating-row">
                    <div className="pp-rating-stars">
                      <Star size={13} fill="#f5a623" color="#f5a623" />
                      <strong>{prod.rating.toFixed(1)}</strong>
                    </div>
                    <span className="pp-reviews-count">({prod.reviews} pet parents)</span>
                  </div>

                  <div className="pp-prod-footer">
                    <div className="pp-prod-price-wrap">
                      <strong className="pp-prod-price">${prod.price.toFixed(2)}</strong>
                      {prod.origPrice > prod.price && (
                        <span className="pp-prod-orig">${prod.origPrice.toFixed(2)}</span>
                      )}
                    </div>

                    <button
                      className="pp-btn-add-cart"
                      onClick={(e) => handleAddToCart(prod.id, e)}
                      aria-label={`Add ${prod.title} to cart`}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="pp-empty-state">
              <Package size={48} className="text-muted" />
              <h3>No pet products match your search</h3>
              <p>Try resetting filters or searching for "chews", "balls", or "catnip".</p>
              <button
                className="pp-btn-yellow-sm mt-3"
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
              >
                Reset Search
              </button>
            </div>
          )}
        </div>
      </section>

      {/* PET WELLNESS GUIDES & EDITORIAL ARTICLES */}
      <section className="pp-section pp-wellness-section" id="wellness">
        <div className="pp-wrap">
          <div className="pp-section-head text-center">
            <span className="pp-eyebrow">EXPERT VET ADVICE</span>
            <h2 className="pp-section-title">PET WELLNESS GUIDES</h2>
            <p className="pp-sub">Evidence-backed enrichment, training psychology, and healthy nutrition routines.</p>
          </div>

          <div className="pp-guides-grid">
            {wellnessGuides.map((guide) => (
              <div key={guide.id} className="pp-guide-card">
                <div className="pp-guide-img-wrap">
                  <img src={guide.img} alt={guide.title} loading="lazy" />
                  <span className="pp-guide-read-tag">{guide.readTime}</span>
                </div>

                <div className="pp-guide-body">
                  <span className="pp-guide-eyebrow">{guide.eyebrow}</span>
                  <h3>{guide.title}</h3>
                  <p>{guide.desc}</p>
                  <button
                    onClick={() => setActiveGuideModal(guide)}
                    className="pp-btn-guide-link"
                  >
                    READ GUIDE <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY REVIEWS */}
      <section className="pp-section pp-reviews-section" id="reviews">
        <div className="pp-wrap">
          <div className="pp-section-head text-center">
            <span className="pp-eyebrow">40,000+ TAILS WAGGING</span>
            <h2 className="pp-section-title">LOVED BY PETS AND THEIR HUMANS</h2>
          </div>

          <div className="pp-reviews-grid">
            {[
              {
                quote: "My French Bulldog Milo knows the exact blue PawParcel box when the mail carrier drops it. The durable chew toys are the only ones he hasn't shredded in 10 minutes!",
                author: "Sarah K. & Milo (Frenchie)",
                rating: 5,
                verified: true,
              },
              {
                quote: "The cat puzzle feeder was a game changer for our indoor tabby Luna. She used to scarf down her food and get sick; now she plays for 20 minutes happily hunting treats.",
                author: "David M. & Luna (Tabby)",
                rating: 5,
                verified: true,
              },
              {
                quote: "Being able to pause our subscription when traveling without customer service phone runarounds is why PawParcel is the only subscription we've kept for 2 years straight.",
                author: "Jessica T. & Cooper (Golden)",
                rating: 5,
                verified: true,
              },
            ].map((rev, i) => (
              <div key={i} className="pp-review-card">
                <div className="pp-review-stars">
                  {[...Array(rev.rating)].map((_, s) => (
                    <Star key={s} size={14} fill="#f5a623" color="#f5a623" />
                  ))}
                </div>
                <p className="pp-review-quote">"{rev.quote}"</p>
                <div className="pp-review-author-row">
                  <strong>{rev.author}</strong>
                  {rev.verified && (
                    <span className="pp-verified-badge">
                      <CheckCircle2 size={12} className="text-yellow" /> Verified Pet Parent
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pp-footer">
        <div className="pp-wrap pp-footer-grid">
          {/* Col 1 */}
          <div className="pp-footer-brand-col">
            <div className="pp-brand-group">
              <PawParcelLogo size={26} />
              <span className="pp-brand-title">PawParcel</span>
            </div>
            <h4>JOIN THE PAWPARCEL PACK:</h4>
            <p>Get 10% off your first order, seasonal theme sneaks, and expert pet wellness tips!</p>
            <form
              className="pp-news-form"
              onSubmit={(e) => {
                e.preventDefault();
                showToast("Welcome to the PawParcel Pack! Code PACK10 activated.");
                setNewsletterEmail("");
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                aria-label="Email for pet pack newsletter"
              />
              <button type="submit">SUBMIT</button>
            </form>
          </div>

          {/* Col 2 */}
          <div className="pp-footer-col">
            <h4>CUSTOMER SERVICE</h4>
            <a href="#faq" onClick={(e) => { e.preventDefault(); showToast("FAQs & 100% Replacement Policy"); }}>FAQs</a>
            <a href="#shipping" onClick={(e) => { e.preventDefault(); showToast("Free 2-Day Shipping Policies"); }}>Shipping Policy</a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); showToast("Contact Paw Concierge Support"); }}>Contact Us</a>
            <a href="#account" onClick={(e) => { e.preventDefault(); showToast("Manage Subscription Portal"); }}>My Account</a>
          </div>

          {/* Col 3 */}
          <div className="pp-footer-col">
            <h4>ABOUT PAWPARCEL</h4>
            <a href="#mission" onClick={(e) => { e.preventDefault(); showToast("Our Clean Pet Ingredient Mission"); }}>Our Mission</a>
            <a href="#shelters" onClick={(e) => { e.preventDefault(); showToast("PawParcel Animal Shelter Donation Fund"); }}>Rescue Giving</a>
            <a href="#careers" onClick={(e) => { e.preventDefault(); showToast("Pet Loving Careers"); }}>Careers</a>
            <a href="#partner" onClick={(e) => { e.preventDefault(); showToast("Artisan Toy & Treat Makers Portal"); }}>Partner With Us</a>
          </div>

          {/* Col 4 */}
          <div className="pp-footer-col">
            <h4>SOCIAL</h4>
            <p className="pp-footer-muted">Tag @PawParcelPets to be featured in our monthly box unboxings!</p>
            <div className="pp-social-icons">
              <a href="#instagram" aria-label="Instagram" onClick={(e) => { e.preventDefault(); showToast("Instagram @pawparcelpets"); }}>📷</a>
              <a href="#facebook" aria-label="Facebook" onClick={(e) => { e.preventDefault(); showToast("Facebook @pawparcelpets"); }}>f</a>
              <a href="#tiktok" aria-label="TikTok" onClick={(e) => { e.preventDefault(); showToast("TikTok @pawparcelpets"); }}>🎵</a>
            </div>
          </div>
        </div>

        <div className="pp-subfooter">
          <div className="pp-wrap pp-subfooter-inner">
            <p>© {new Date().getFullYear()} PawParcel Pets Co. All Rights Reserved.</p>
            <div className="pp-subfooter-links">
              <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
              <span>•</span>
              <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
              <span>•</span>
              <a href="#recall" onClick={(e) => e.preventDefault()}>Safety Guarantees</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <nav className="pp-bottom-nav" aria-label="Mobile Bottom Navigation">
        <button
          className="pp-bottom-nav-item"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Pet Home"
        >
          <Compass size={20} />
          <span>Explore</span>
        </button>

        <button
          className="pp-bottom-nav-item"
          onClick={() => {
            const el = document.getElementById("builder");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Build Box"
        >
          <Gift size={20} />
          <span>Build Box</span>
        </button>

        <button
          className="pp-bottom-nav-item"
          onClick={() => {
            const el = document.getElementById("catalog");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Pet Shop"
        >
          <Layers size={20} />
          <span>Shop</span>
        </button>

        <button
          className="pp-bottom-nav-item"
          onClick={() => setIsWishlistOpen(true)}
          aria-label="Saved Pet Items"
        >
          <div className="pp-badge-wrap">
            <Heart size={20} />
            {totalWishlistCount > 0 && <span className="pp-badge">{totalWishlistCount}</span>}
          </div>
          <span>Saved</span>
        </button>

        <button
          className="pp-bottom-nav-item pp-bottom-cart"
          onClick={() => setIsCartOpen(true)}
          aria-label="Pet Cart"
        >
          <div className="pp-badge-wrap">
            <ShoppingBag size={20} />
            {totalCartCount > 0 && <span className="pp-badge">{totalCartCount}</span>}
          </div>
          <span>Cart</span>
        </button>
      </nav>

      {/* Slide-out Cart Drawer */}
      <div
        className={`pp-drawer-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`pp-cart-drawer ${isCartOpen ? "open" : ""}`} role="dialog" aria-label="Pet Supplies Cart">
        <div className="pp-cart-head">
          <div className="pp-cart-head-title">
            <ShoppingBag size={20} className="text-navy" />
            <h3>YOUR PAWPARCEL CART ({totalCartCount})</h3>
          </div>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart drawer">
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="pp-shipping-meter-box">
          <div className="pp-meter-text">
            {rawCartSubtotal >= 35 ? (
              <span className="text-green">
                <CheckCircle2 size={14} /> You unlocked <strong>FREE Fast Shipping!</strong>
              </span>
            ) : (
              <span>
                Add <strong>${(35 - rawCartSubtotal).toFixed(2)}</strong> more for <strong>Free Shipping</strong>
              </span>
            )}
          </div>
          <div className="pp-meter-track">
            <div
              className="pp-meter-fill"
              style={{ width: `${Math.min(100, (rawCartSubtotal / 35) * 100)}%` }}
            />
          </div>
        </div>

        <div className="pp-cart-body">
          {totalCartCount > 0 ? (
            <div className="pp-cart-list">
              {Object.entries(cart).map(([id, qty]) => {
                const prod = petProducts.find((p) => p.id === id);

                let title = prod
                  ? prod.title
                  : id.includes("custom-dog")
                  ? "Tailored Dog PawParcel Monthly Box"
                  : id.includes("custom-cat")
                  ? "Tailored Cat PawParcel Monthly Box"
                  : "PawParcel Subscription Box";

                let price = prod
                  ? prod.price
                  : id.includes("6-month")
                  ? 24.99
                  : 29.99;

                let img = prod
                  ? prod.img
                  : id.includes("cat")
                  ? collCatImg
                  : collDogImg;

                return (
                  <div key={id} className="pp-cart-item">
                    <img src={img} alt={title} />
                    <div className="pp-cart-item-info">
                      <div className="pp-cart-title-row">
                        <h4>{title}</h4>
                        <button
                          className="pp-trash-link"
                          onClick={() => handleRemoveFromCart(id)}
                          aria-label={`Remove ${title} from cart`}
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
              <h4>Your PawParcel is empty</h4>
              <p>Tailor a monthly surprise box for your pup or cat, or pick up a la carte chew treats.</p>
              <button
                className="pp-btn-yellow-sm mt-3"
                onClick={() => {
                  setIsCartOpen(false);
                  const el = document.getElementById("builder");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Build a PawParcel
              </button>
            </div>
          )}
        </div>

        {totalCartCount > 0 && (
          <div className="pp-cart-foot">
            <form className="pp-coupon-form" onSubmit={handleApplyCoupon}>
              <input
                type="text"
                placeholder="Promo code (WELCOME20 / SPRING30)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                aria-label="Coupon code"
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
                <span>Shipping:</span>
                <span>{rawCartSubtotal >= 35 ? "FREE" : "$4.99"}</span>
              </div>
              <div className="pp-cart-final-total">
                <span>Total:</span>
                <strong>
                  ${(cartSubtotal + (rawCartSubtotal >= 35 ? 0 : 4.99)).toFixed(2)}
                </strong>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                showToast("Proceeding to pet checkout...");
              }}
              className="pp-btn-navy-full"
            >
              PROCEED TO CHECKOUT • ${(cartSubtotal + (rawCartSubtotal >= 35 ? 0 : 4.99)).toFixed(2)}
            </button>
          </div>
        )}
      </div>

      {/* Wishlist Drawer */}
      <div
        className={`pp-drawer-overlay ${isWishlistOpen ? "open" : ""}`}
        onClick={() => setIsWishlistOpen(false)}
      />
      <div className={`pp-cart-drawer ${isWishlistOpen ? "open" : ""}`} role="dialog" aria-label="Pet Wishlist">
        <div className="pp-cart-head">
          <div className="pp-cart-head-title">
            <Heart size={20} className="text-yellow" />
            <h3>SAVED FOR LATER ({totalWishlistCount})</h3>
          </div>
          <button onClick={() => setIsWishlistOpen(false)} aria-label="Close wishlist drawer">
            <X size={20} />
          </button>
        </div>

        <div className="pp-cart-body">
          {totalWishlistCount > 0 ? (
            <div className="pp-cart-list">
              {Object.entries(wishlist)
                .filter(([_, a]) => a)
                .map(([id]) => {
                  const prod = petProducts.find((p) => p.id === id);
                  if (!prod) return null;
                  return (
                    <div key={id} className="pp-cart-item">
                      <img src={prod.img} alt={prod.title} />
                      <div className="pp-cart-item-info">
                        <h4>{prod.title}</h4>
                        <strong className="pp-cart-item-price">${prod.price.toFixed(2)}</strong>
                        <button
                          className="pp-btn-yellow-sm mt-2"
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
            <div className="pp-empty-cart">
              <Heart size={44} className="text-muted" />
              <h4>No favorites saved yet</h4>
              <p>Tap the heart icon on any toy or chew while browsing to save it to your pet's wishlist.</p>
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
                <span className="pp-modal-badge">{selectedProduct.category}</span>
                <h2>{selectedProduct.title}</h2>
                <p className="pp-modal-desc">{selectedProduct.subtitle}</p>

                <div className="pp-modal-price-row">
                  <strong>${selectedProduct.price.toFixed(2)}</strong>
                  {selectedProduct.origPrice > selectedProduct.price && (
                    <span>${selectedProduct.origPrice.toFixed(2)}</span>
                  )}
                </div>

                <div className="pp-modal-specs">
                  <div><CheckCircle2 size={15} className="text-yellow" /> 100% Non-Toxic & Pet-Safe Materials</div>
                  <div><CheckCircle2 size={15} className="text-yellow" /> Backed by PawParcel 100% Free Replacement Guarantee</div>
                  <div><CheckCircle2 size={15} className="text-yellow" /> Ships in recyclable eco-friendly packaging</div>
                </div>

                <div className="pp-modal-actions">
                  <button
                    className="pp-btn-navy-full"
                    onClick={() => {
                      handleAddToCart(selectedProduct.id);
                      setSelectedProduct(null);
                    }}
                  >
                    ADD TO CART • ${selectedProduct.price.toFixed(2)}
                  </button>
                  <button
                    className="pp-modal-wish-btn"
                    onClick={(e) => handleToggleWishlist(selectedProduct.id, e)}
                    aria-label="Save to wishlist"
                  >
                    <Heart
                      size={18}
                      fill={wishlist[selectedProduct.id] ? "#f5a623" : "none"}
                      color={wishlist[selectedProduct.id] ? "#f5a623" : "#1b3b6f"}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Wellness Guide Detailed Modal */}
      {activeGuideModal && (
        <div className="pp-modal-backdrop" onClick={() => setActiveGuideModal(null)}>
          <div className="pp-guide-modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="pp-modal-close" onClick={() => setActiveGuideModal(null)} aria-label="Close guide reader">
              <X size={20} />
            </button>

            <div className="pp-guide-modal-grid">
              <div className="pp-guide-modal-img">
                <img src={activeGuideModal.img} alt={activeGuideModal.title} />
              </div>

              <div className="pp-guide-modal-body">
                <span className="pp-modal-badge">{activeGuideModal.eyebrow}</span>
                <h2>{activeGuideModal.title}</h2>
                <p className="pp-guide-modal-desc">{activeGuideModal.desc}</p>

                <div className="pp-guide-tips-box">
                  <h4>Key Takeaways & Enrichment Routine:</h4>
                  <ul>
                    {activeGuideModal.tips.map((tip: string, idx: number) => (
                      <li key={idx}><CheckCircle2 size={14} className="text-yellow flex-shrink-0" /> {tip}</li>
                    ))}
                  </ul>
                </div>

                <div className="pp-guide-rec-box">
                  <div>
                    <small>Recommended by PawParcel Specialists:</small>
                    <strong>{activeGuideModal.recommendedProduct}</strong>
                  </div>
                  <button
                    className="pp-btn-yellow"
                    onClick={() => {
                      const found = petProducts.find((p) => p.title.includes(activeGuideModal.recommendedProduct) || p.title === activeGuideModal.recommendedProduct);
                      if (found) {
                        handleAddToCart(found.id);
                      } else {
                        showToast(`Added ${activeGuideModal.recommendedProduct} to cart!`);
                      }
                      setActiveGuideModal(null);
                      setIsCartOpen(true);
                    }}
                  >
                    SHOP THIS ITEM <ArrowRight size={14} />
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

export default PawParcelPets;
