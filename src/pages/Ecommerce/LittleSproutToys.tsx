import React, { useState, useEffect, useMemo } from "react";
import {
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Compass,
  Filter,
  Heart,
  HelpCircle,
  Home,
  Layers,
  Leaf,
  Menu,
  Minus,
  Package,
  Plus,
  RotateCcw,
  Search,
  Shield,
  ShieldCheck,
  ShoppingBag,
  SlidersHorizontal,
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

// Photo Assets (Converted high-res WebP images)
import heroSproutImg from "../../assets/optimized/ecommerce/littlesprout/hero-sprout.webp";
import collEcoImg from "../../assets/optimized/ecommerce/littlesprout/coll-eco.webp";
import collMontessoriImg from "../../assets/optimized/ecommerce/littlesprout/coll-montessori.webp";
import collBuildersImg from "../../assets/optimized/ecommerce/littlesprout/coll-builders.webp";

import prodStackerImg from "../../assets/optimized/ecommerce/littlesprout/prod-stacker.webp";
import prodSortingImg from "../../assets/optimized/ecommerce/littlesprout/prod-sorting.webp";
import prodRainbowImg from "../../assets/optimized/ecommerce/littlesprout/prod-rainbow.webp";
import prodMagneticImg from "../../assets/optimized/ecommerce/littlesprout/prod-magnetic.webp";
import prodRattleImg from "../../assets/optimized/ecommerce/littlesprout/prod-rattle.webp";
import prodMarbleRunImg from "../../assets/optimized/ecommerce/littlesprout/prod-marblerun.webp";

import spotlightStapelsteinImg from "../../assets/optimized/ecommerce/littlesprout/spotlight-stapelstein.webp";

// Pastel Sprout Leaf Logo SVG
function LittleSproutLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M16 28V15M16 15C16 10 20.5 5 27 5C27 12 22 16 16 15ZM16 19C16 15 11.5 11 5 11C5 18 10 21 16 19Z"
        stroke="#244D46"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="11" r="3.2" fill="#F6BD38" />
      <circle cx="25" cy="6" r="2.5" fill="#F27464" />
      <circle cx="6" cy="12" r="2.5" fill="#60A5FA" />
    </svg>
  );
}

// 3 Clear Collections Dataset
const clearCollections = [
  {
    id: "eco",
    title: "Eco-Conscious Play",
    category: "Organic & Sustainable",
    btnText: "Shop Sustainable",
    img: collEcoImg,
    count: "Organic Cotton Dolls, Knits & Beechwood Animals",
    tag: "100% Organic",
  },
  {
    id: "montessori",
    title: "Montessori Essentials",
    category: "Sensory & Cognitive",
    btnText: "Shop Montessori",
    img: collMontessoriImg,
    count: "Sensory Sorting, Stacking & Practical Life Tools",
    tag: "Pediatric Approved",
  },
  {
    id: "builders",
    title: "Creative Builders",
    category: "STEM & Architecture",
    btnText: "Shop Building",
    img: collBuildersImg,
    count: "Magnetic Tiles, Marble Runs & Hardwood Blocks",
    tag: "Limitless Play",
  },
];

export interface ToyProduct {
  id: string;
  title: string;
  brand: string;
  subtitle: string;
  price: number;
  origPrice: number;
  rating: number;
  reviews: number;
  img: string;
  category: string;
  ageRange: string;
  skills: string[];
  materials: string;
  badge?: string;
  inStock: boolean;
}

// Full Product Highlights Dataset
const productsData: ToyProduct[] = [
  {
    id: "stacker",
    title: "Stapelstein Original Rainbow Stacker",
    brand: "Stapelstein",
    subtitle: "Modular stepping stones and balance bowls crafted from 100% climate-neutral, buoyant EPP",
    price: 45.0,
    origPrice: 58.0,
    rating: 4.9,
    reviews: 215,
    img: prodStackerImg,
    category: "Active Play",
    ageRange: "1 – 8 Years",
    skills: ["Balance & Agility", "Gross Motor", "Open-Ended Creativity"],
    materials: "100% Climate-Neutral Resource-Saving EPP (Water & UV Resistant)",
    badge: "Bestseller",
    inStock: true,
  },
  {
    id: "sorting",
    title: "PlanToys Geo-Sorting Tactile Board",
    brand: "PlanToys",
    subtitle: "Tactile FSC rubberwood geometric shape and peg sorter tinted with organic water-based pigments",
    price: 45.0,
    origPrice: 52.0,
    rating: 4.8,
    reviews: 168,
    img: prodSortingImg,
    category: "Montessori & Sensory",
    ageRange: "1 – 3 Years",
    skills: ["Shape Recognition", "Fine Motor Grasp", "Spatial Logic"],
    materials: "Kiln-Dried Sustainable Rubberwood & Non-Toxic Organic Soy Dyes",
    badge: "Eco Choice",
    inStock: true,
  },
  {
    id: "rainbow",
    title: "Grimm's Large 12-Piece Wooden Rainbow",
    brand: "Grimm's",
    subtitle: "Heirloom handcrafted linden wood nesting tunnel arches for limitless architectural sculpting",
    price: 45.0,
    origPrice: 62.0,
    rating: 5.0,
    reviews: 380,
    img: prodRainbowImg,
    category: "Open-Ended",
    ageRange: "1 – 10 Years",
    skills: ["Sculptural Architecture", "Color Harmony", "Creative Storytelling"],
    materials: "FSC Linden Wood finished with Non-Toxic Water-Based Botanical Glaze",
    badge: "Customer Favorite",
    inStock: true,
  },
  {
    id: "magnetic",
    title: "Connetix Magnetic Tiles 100pc Set",
    brand: "Connetix",
    subtitle: "Beveled ultrasonic-welded magnetic tiles with reinforced rivets and brilliant light refraction",
    price: 45.0,
    origPrice: 55.0,
    rating: 4.9,
    reviews: 290,
    img: prodMagneticImg,
    category: "STEM & Building",
    ageRange: "3 – 10 Years",
    skills: ["3D Spatial Engineering", "Magnetic Polarity", "Geometry"],
    materials: "Non-Toxic ABS Plastic (BPA & Phthalate-Free) with Strong Neodymium Magnets",
    badge: "Top STEM Toy",
    inStock: true,
  },
  {
    id: "rattle",
    title: "Organic Beechwood Ring Rattle & Teether",
    brand: "LittleSprout Signature",
    subtitle: "Satin-smooth European beechwood grasping ring with food-grade pastel silicone sensory beads",
    price: 28.0,
    origPrice: 34.0,
    rating: 4.9,
    reviews: 142,
    img: prodRattleImg,
    category: "Sensory Discovery",
    ageRange: "0 – 12 Months",
    skills: ["Palmar Grasp Reflex", "Sensory Teething Relief", "Auditory Tracking"],
    materials: "Untreated Natural Beechwood & 100% Platinum Cured Food-Grade Silicone",
    badge: "Newborn Staple",
    inStock: true,
  },
  {
    id: "marblerun",
    title: "Kaden Hardwood Modular Marble Run Maze",
    brand: "Kaden",
    subtitle: "Precision-milled Swiss beechwood ramp tracks with wooden sound marbles and interlocking bridges",
    price: 89.0,
    origPrice: 110.0,
    rating: 5.0,
    reviews: 97,
    img: prodMarbleRunImg,
    category: "STEM & Building",
    ageRange: "4 – 12 Years",
    skills: ["Kinetic Physics", "Cause & Effect", "Complex Problem Solving"],
    materials: "100% PEFC Certified Solid Beechwood with Smooth Natural Wax Finish",
    badge: "Master Builder",
    inStock: true,
  },
];

// Age Groups for Milestone Finder
const ageMilestones = [
  {
    id: "0-12m",
    name: "0 – 12 Months",
    headline: "Sensory Awakening & Grasping",
    focus: "Gentle sounds, high contrast tactile shapes, and natural teething textures.",
    picks: "Organic Beechwood Ring Teether, Soft Cotton Rattles, High-Contrast Flash Cards",
    recommendedProdId: "rattle",
    badges: ["Sensory Development", "Oral Exploration", "Grasp Reflex"],
  },
  {
    id: "1-2y",
    name: "1 – 2 Years",
    headline: "First Steps, Sorting & Cause-and-Effect",
    focus: "Tactile manipulation, color identification, and gross motor confidence.",
    picks: "Geo-Sorting Boards, Stapelstein Stepping Bowls, Wooden Nesting Arches",
    recommendedProdId: "sorting",
    badges: ["Fine Motor Precision", "Spatial Awareness", "Balance Stability"],
  },
  {
    id: "3-5y",
    name: "3 – 5 Years",
    headline: "STEM Wonders, Storytelling & Open-Ended Play",
    focus: "Creative architectural structures, pretend play, and cooperative sharing.",
    picks: "Connetix 100pc Magnetic Tiles, Grimm's Large Rainbow, Sensory Play Trays",
    recommendedProdId: "rainbow",
    badges: ["3D Visualization", "Creative Expression", "Social Cooperation"],
  },
  {
    id: "6y+",
    name: "6+ Years",
    headline: "Complex Engineering & Kinetic Physics",
    focus: "Multi-level track engineering, gravity mechanics, and spatial puzzles.",
    picks: "Modular Beechwood Marble Runs, Complex Architectural Sets, Strategy Games",
    recommendedProdId: "marblerun",
    badges: ["Kinetic Engineering", "Patience & Focus", "Geometric Logic"],
  },
];

// Parent Testimonials
const parentReviews = [
  {
    id: 1,
    name: "Dr. Elena Rostova",
    role: "Pediatric Occupational Therapist & Mom of 2",
    rating: 5,
    toy: "PlanToys Geo-Sorting Tactile Board",
    quote:
      "As a pediatric OT, I am extremely particular about finish, weight, and developmental integrity. LittleSprout's collection is unmatched. The rubberwood grain is buttery soft, zero chemical odors, and inspires authentic focus.",
    date: "Verified Parent • 3 days ago",
  },
  {
    id: 2,
    name: "Marcus & Julian K.",
    role: "Dads to 3-year-old twins",
    rating: 5,
    toy: "Stapelstein Rainbow Stacker",
    quote:
      "Our living room transformed overnight into an obstacle course, floating lily pads in the bathtub, and balance stools. Indestructible, gorgeous colors that look serene in our living room.",
    date: "Verified Parent • 1 week ago",
  },
  {
    id: 3,
    name: "Sophie Chen",
    role: "Early Childhood Educator",
    rating: 5,
    toy: "Connetix Magnetic Tiles 100pc Set",
    quote:
      "The clarity and magnet strength blow standard magnetic tiles away. The sunlight streams through them creating stunning stained-glass reflections across the classroom carpet. 10/10!",
    date: "Verified Educator • 2 weeks ago",
  },
];

// FAQs
const faqs = [
  {
    question: "Are LittleSprout toys completely non-toxic and mouth-safe?",
    answer:
      "Yes, 100%. Every single product in our catalog meets or exceeds US ASTM F963 and European EN71 safety directives. We use exclusively third-party certified untreated beechwood, sustainable rubberwood, organic vegetable water stains, and medical food-grade silicone with zero BPA, lead, or phthalates.",
  },
  {
    question: "How do I care for and clean wooden toys?",
    answer:
      "Simply wipe gently with a damp cloth dipped in warm water and mild organic soap, then air dry thoroughly at room temperature. Wood possesses natural antibacterial properties. Do not submerge solid wood toys in standing water or use harsh chemical bleach.",
  },
  {
    question: "What is your Play Happiness 30-day guarantee?",
    answer:
      "We want your family to fall deeply in love with every play session. If a toy does not engage your little one, we provide hassle-free returns or exchanges within 30 days of delivery, with prepaid carbon-neutral return shipping labels.",
  },
  {
    question: "How does the Custom Playroom Box discount work?",
    answer:
      "Our Box Builder unlocks progressive bundle savings: 10% off for 2 toys, 15% off for 3 toys, and an automatic 20% off when you bundle 4 or more essentials. The discount calculates dynamically in real-time.",
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
  const [selectedProduct, setSelectedProduct] = useState<ToyProduct | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [sortBy, setSortBy] = useState("featured");
  const [activeAgeTab, setActiveAgeTab] = useState(ageMilestones[1]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [couponCode, setCouponCode] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState<number>(0.2); // Default SPRING20
  const [couponStatus, setCouponStatus] = useState<string>("SPRING20 applied (20% off sitewide!)");

  // Interactive Playroom Box Builder State
  const [builderItems, setBuilderItems] = useState<{ [id: string]: boolean }>({
    stacker: true,
    sorting: true,
    rainbow: true,
    magnetic: true,
  });

  // Toast Helper
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
    const p = productsData.find((item) => item.id === productId);
    showToast(`Added ${p ? p.title : "toy"} to play bag!`);
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
      showToast(state ? "Saved to your playroom wishlist ♡" : "Removed from wishlist");
      return { ...prev, [productId]: state };
    });
  };

  // Calculations
  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalWishlistCount = Object.values(wishlist).filter(Boolean).length;

  const rawCartSubtotal = useMemo(() => {
    return Object.entries(cart).reduce((total, [id, qty]) => {
      const prod = productsData.find((p) => p.id === id);
      if (prod) return total + prod.price * qty;
      if (id === "stapelstein-set") return total + 199.0 * qty;
      if (id === "playroom-box") return total + 144.0 * qty;
      return total;
    }, 0);
  }, [cart]);

  const discountAmount = rawCartSubtotal * appliedDiscount;
  const cartSubtotal = Math.max(0, rawCartSubtotal - discountAmount);

  // Playroom Box Savings Calculation
  const selectedBoxKeys = Object.keys(builderItems).filter((k) => builderItems[k]);
  const boxItemCount = selectedBoxKeys.length;
  const boxItemTotal = selectedBoxKeys.reduce((acc, k) => {
    const p = productsData.find((item) => item.id === k);
    return acc + (p ? p.price : 45);
  }, 0);

  // Discount percentage based on items in bundle
  const bundleDiscountRate = boxItemCount >= 4 ? 0.2 : boxItemCount === 3 ? 0.15 : boxItemCount === 2 ? 0.1 : 0;
  const boxSavings = boxItemTotal * bundleDiscountRate;
  const boxBundleFinalPrice = boxItemTotal - boxSavings;

  // Filtered & Sorted Products
  const filteredProducts = useMemo(() => {
    let list = [...productsData];
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
          p.brand.toLowerCase().includes(q)
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
    return productsData.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Handle Coupon Application
  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    const code = couponCode.trim().toUpperCase();
    if (code === "SPRING20") {
      setAppliedDiscount(0.2);
      setCouponStatus("SPRING20 applied: 20% discount unlocked!");
      showToast("Applied 20% Off Promo Code!");
    } else if (code === "SPROUT10") {
      setAppliedDiscount(0.1);
      setCouponStatus("SPROUT10 applied: 10% discount unlocked!");
      showToast("Applied 10% Off Welcome Code!");
    } else {
      showToast("Invalid promo code. Try SPRING20 or SPROUT10");
    }
    setCouponCode("");
  };

  // Scroll Lock & Escape keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
        setIsWishlistOpen(false);
        setMobileMenuOpen(false);
        setSelectedProduct(null);
        setIsSearchActive(false);
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
        <div className="ls-toast" role="status" aria-live="polite">
          <Sparkles size={16} className="ls-toast-icon" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Announcement Bar */}
      <div className="ls-topbar">
        <div className="ls-wrap ls-topbar-inner">
          <div className="ls-topbar-left">
            <span className="ls-pill-tag">SPRING SALE</span>
            <span>Use code <strong>SPRING20</strong> for 20% off all wooden & open-ended essentials</span>
          </div>
          <div className="ls-topbar-right">
            <span>Free Carbon-Neutral Shipping on orders $75+</span>
            <span className="ls-dot-sep">•</span>
            <a href="#reviews" className="ls-topbar-link">4.9★ from 2,400+ Parents</a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header className="ls-header">
        <div className="ls-wrap ls-header-inner">
          {/* Brand Logo */}
          <a href="#top" className="ls-brand" aria-label="LittleSprout Toys Home">
            <LittleSproutLogo size={30} />
            <div className="ls-brand-text">
              <span className="ls-brand-title">LittleSprout</span>
              <span className="ls-brand-sub">Curated Play Studio</span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="ls-nav-links" aria-label="Primary Navigation">
            <a href="#collections" className="ls-nav-link">Collections</a>
            <a href="#highlights" className="ls-nav-link">Catalog</a>
            <a href="#milestones" className="ls-nav-link">Shop by Age</a>
            <a href="#spotlight" className="ls-nav-link">Featured</a>
            <a href="#box-builder" className="ls-nav-link ls-nav-highlight">
              <Sparkles size={14} /> Box Builder
            </a>
            <a href="#reviews" className="ls-nav-link">Reviews</a>
            <a href="#faq" className="ls-nav-link">FAQ</a>
          </nav>

          {/* Right Action Icons */}
          <div className="ls-nav-actions">
            {/* Search Input / Toggle */}
            <div className="ls-search-container">
              <div className={`ls-search-bar ${isSearchActive ? "active" : ""}`}>
                <Search size={17} className="ls-search-icon" />
                <input
                  type="text"
                  placeholder="Search toys, ages, brands..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setIsSearchActive(true);
                  }}
                  onFocus={() => setIsSearchActive(true)}
                  aria-label="Search toys"
                />
                {searchQuery && (
                  <button
                    className="ls-search-clear"
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
                <div className="ls-search-dropdown">
                  <div className="ls-search-head">
                    <span>Found {searchResults.length} toy results</span>
                    <button onClick={() => setIsSearchActive(false)} className="ls-text-btn">Close</button>
                  </div>
                  <div className="ls-search-results-list">
                    {searchResults.map((prod) => (
                      <div
                        key={prod.id}
                        className="ls-search-result-item"
                        onClick={() => {
                          setSelectedProduct(prod);
                          setIsSearchActive(false);
                        }}
                      >
                        <img src={prod.img} alt={prod.title} />
                        <div className="ls-search-item-info">
                          <h4>{prod.title}</h4>
                          <span>{prod.category} • ${prod.price.toFixed(2)}</span>
                        </div>
                        <button
                          className="ls-search-add-btn"
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
              className="ls-icon-btn ls-desktop-action"
              onClick={() => setIsWishlistOpen(true)}
              aria-label={`Wishlist with ${totalWishlistCount} items`}
            >
              <div className="ls-badge-wrap">
                <Heart size={20} />
                {totalWishlistCount > 0 && <span className="ls-badge">{totalWishlistCount}</span>}
              </div>
            </button>

            {/* Cart Bag Button (Desktop) */}
            <button
              className="ls-cart-pill-btn ls-desktop-action"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Shopping bag with ${totalCartCount} items`}
            >
              <ShoppingBag size={18} />
              <span className="ls-cart-pill-text">Bag</span>
              <span className="ls-cart-pill-count">{totalCartCount}</span>
            </button>

            {/* Mobile Search Toggle */}
            <button
              className="ls-mobile-search-toggle"
              onClick={() => {
                const el = document.getElementById("highlights");
                if (el) el.scrollIntoView({ behavior: "smooth" });
                setIsSearchActive(true);
              }}
              aria-label="Open search"
            >
              <Search size={22} />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              className="ls-mobile-toggle"
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
        className={`ls-drawer-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`ls-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="ls-drawer-head">
          <div className="ls-brand">
            <LittleSproutLogo size={26} />
            <span className="ls-brand-title">LittleSprout</span>
          </div>
          <button className="ls-close-btn" onClick={() => setMobileMenuOpen(false)} aria-label="Close menu">
            <X size={22} />
          </button>
        </div>

        <div className="ls-mobile-promo-banner">
          <span className="ls-pill-tag">SPRING20</span>
          <strong>20% OFF Entire Order</strong>
          <small>Use code at checkout today</small>
        </div>

        <div className="ls-drawer-links">
          {[
            { label: "Clear Collections", href: "#collections" },
            { label: "Product Highlights", href: "#highlights" },
            { label: "Shop by Milestone & Age", href: "#milestones" },
            { label: "Custom Playroom Box Builder", href: "#box-builder" },
            { label: "Featured Stapelstein Spotlight", href: "#spotlight" },
            { label: "Verified Parent Reviews", href: "#reviews" },
            { label: "Safety & FAQ", href: "#faq" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="ls-drawer-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{item.label}</span>
              <ChevronRight size={16} />
            </a>
          ))}
        </div>

        <div className="ls-drawer-footer">
          <div className="ls-trust-mini">
            <ShieldCheck size={16} className="text-teal" />
            <span>FSC-Certified & ASTM Safety Tested</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="ls-hero-section">
        <div className="ls-hero-bg">
          <img
            src={heroSproutImg}
            alt="Joyful child playing with handcrafted natural wooden toys and colorful rainbow arch in a sunlit Scandinavian nursery"
            className="ls-hero-img"
          />
          <div className="ls-hero-overlay" />
        </div>

        <div className="ls-wrap ls-hero-content">
          <div className="ls-hero-badge">
            <Sparkles size={14} className="text-yellow" />
            <span>SUSTAINABLE, CURATED CHILDHOOD WONDER</span>
          </div>

          <h1 className="ls-hero-title">
            LITTLESPROUT TOYS: <br />
            CURATED FOR WONDER.
          </h1>

          <p className="ls-hero-sub">
            Thoughtfully selected heirloom wooden toys, sensory Montessori staples, and vibrant open-ended builders designed to ignite limitless imaginative exploration.
          </p>

          <div className="ls-hero-cta-group">
            <a href="#highlights" className="ls-btn-yellow">
              EXPLORE COLLECTIONS <ArrowRight size={16} />
            </a>
            <a href="#box-builder" className="ls-btn-outline-teal">
              BUILD CUSTOM PLAYROOM BOX
            </a>
          </div>

          <div className="ls-hero-perks">
            <div className="ls-perk-item">
              <CheckCircle2 size={16} className="text-teal" />
              <span>100% Non-Toxic & Plant Dyes</span>
            </div>
            <div className="ls-perk-item">
              <CheckCircle2 size={16} className="text-teal" />
              <span>Free Shipping Over $75</span>
            </div>
            <div className="ls-perk-item">
              <CheckCircle2 size={16} className="text-teal" />
              <span>30-Day Play Guarantee</span>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Marquee Ticker */}
      <div className="ls-marquee-band">
        <div className="ls-marquee-track">
          {[1, 2, 3, 4].map((i) => (
            <React.Fragment key={i}>
              <span>PLANT-BASED BOTANICAL DYES</span>
              <span className="ls-star-glyph">✦</span>
              <span>FSC-CERTIFIED EUROPEAN BEECHWOOD</span>
              <span className="ls-star-glyph">✦</span>
              <span>CLIMATE-NEUTRAL ACTIVE PLAY</span>
              <span className="ls-star-glyph">✦</span>
              <span>ASTM F963 & EN71 CERTIFIED SAFE</span>
              <span className="ls-star-glyph">✦</span>
              <span>PLASTIC-FREE RECYCLABLE PACKAGING</span>
              <span className="ls-star-glyph">✦</span>
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* CLEAR COLLECTIONS (3 Large Visual Cards) */}
      <section className="ls-section ls-collections-section" id="collections">
        <div className="ls-wrap">
          <div className="ls-section-head text-center">
            <span className="ls-eyebrow">CURATED SPACES FOR EVERY PLAY STYLE</span>
            <h2 className="ls-section-title">CLEAR COLLECTIONS</h2>
            <p className="ls-sub">Organized by developmental play mode so you can find the perfect joyful toys effortlessly.</p>
          </div>

          <div className="ls-collections-grid">
            {clearCollections.map((col) => (
              <div key={col.id} className="ls-collection-card">
                <div className="ls-col-img-wrap">
                  <img src={col.img} alt={col.title} loading="lazy" />
                  <span className="ls-col-badge">{col.tag}</span>
                  <div className="ls-col-overlay">
                    <span className="ls-col-category">{col.category}</span>
                    <h3>{col.title}</h3>
                    <p className="ls-col-count">{col.count}</p>
                    <button
                      onClick={() => {
                        setSelectedCategory(col.id === "eco" ? "Sensory Discovery" : col.id === "montessori" ? "Montessori & Sensory" : "STEM & Building");
                        const el = document.getElementById("highlights");
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                        showToast(`Filtered collection: ${col.title}`);
                      }}
                      className="ls-btn-white-box"
                    >
                      {col.btnText} <ChevronRight size={14} />
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
            <span className="ls-eyebrow">OUR COMMITMENT TO YOUR FAMILY</span>
            <h2 className="ls-section-title">THE LITTLESPROUT DIFFERENCE</h2>
          </div>

          <div className="ls-trust-grid">
            <div className="ls-trust-card">
              <div className="ls-trust-icon-box">
                <ShieldCheck size={28} />
              </div>
              <div className="ls-trust-info">
                <h3>SAFETY FIRST</h3>
                <p>Zero harmful chemicals, BPA, or lead. Rigorously tested by independent pediatric labs for infant oral safety.</p>
              </div>
            </div>

            <div className="ls-trust-card">
              <div className="ls-trust-icon-box">
                <Trees size={28} />
              </div>
              <div className="ls-trust-info">
                <h3>SUSTAINABLY SOURCED</h3>
                <p>Ethically harvested FSC beechwood, sustainable plantation rubberwood, and 100% recyclable shipping boxes.</p>
              </div>
            </div>

            <div className="ls-trust-card">
              <div className="ls-trust-icon-box">
                <Award size={28} />
              </div>
              <div className="ls-trust-info">
                <h3>EXPERT CURATED</h3>
                <p>Handpicked by certified child development specialists to nurture independent problem solving and wonder.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTIONAL RHYTHM / SPRINGTIME SPARKLE EVENT */}
      <section className="ls-promo-section" id="promo">
        <div className="ls-wrap">
          <div className="ls-promo-card">
            <div className="ls-promo-inner">
              <div className="ls-promo-pill">
                <Sparkles size={14} />
                <span>LIMITED SPRINGTIME OFFER</span>
              </div>
              <h2>SPRINGTIME SPARKLE EVENT</h2>
              <p>
                Refresh your playroom with heirloom wonders. Use code <strong>SPRING20</strong> at checkout for <strong>20% OFF SITEWIDE</strong> + free eco shipping over $75.
              </p>
              <div className="ls-promo-actions">
                <button
                  onClick={() => {
                    setAppliedDiscount(0.2);
                    setCouponStatus("SPRING20 applied: 20% discount unlocked!");
                    showToast("Applied 20% SPRING20 sitewide coupon!");
                    setIsCartOpen(true);
                  }}
                  className="ls-btn-teal-pill"
                >
                  SHOP WITH 20% OFF NOW
                </button>
                <span className="ls-promo-expiry">Offer valid through end of month • No minimum required</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT HIGHLIGHTS (Interactive Catalog with Filters & Sort) */}
      <section className="ls-section ls-highlights-section" id="highlights">
        <div className="ls-wrap">
          <div className="ls-section-head text-center">
            <span className="ls-eyebrow">HANDPICKED HEIRLOOM FAVORITES</span>
            <h2 className="ls-section-title">PRODUCT HIGHLIGHTS</h2>
            <p className="ls-sub">Invest in toys that grow with your child through every stage of developmental curiosity.</p>
          </div>

          {/* Catalog Filter Controls */}
          <div className="ls-catalog-controls">
            <div className="ls-filter-tabs">
              {["All", "Active Play", "Montessori & Sensory", "Open-Ended", "STEM & Building", "Sensory Discovery"].map(
                (cat) => (
                  <button
                    key={cat}
                    className={`ls-filter-tab ${selectedCategory === cat ? "active" : ""}`}
                    onClick={() => setSelectedCategory(cat)}
                  >
                    {cat}
                  </button>
                )
              )}
            </div>

            <div className="ls-sort-box">
              <SlidersHorizontal size={15} className="text-muted" />
              <span className="ls-sort-label">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="ls-sort-select"
                aria-label="Sort products"
              >
                <option value="featured">Featured Curations</option>
                <option value="rating">Highest Rated (5.0★)</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="ls-products-grid">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="ls-product-card"
                onClick={() => setSelectedProduct(prod)}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${prod.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setSelectedProduct(prod);
                }}
              >
                <div className="ls-prod-img-box">
                  <img src={prod.img} alt={prod.title} loading="lazy" />
                  {prod.badge && <span className="ls-prod-badge">{prod.badge}</span>}
                  <button
                    className={`ls-wish-btn ${wishlist[prod.id] ? "active" : ""}`}
                    onClick={(e) => handleToggleWishlist(prod.id, e)}
                    aria-label={wishlist[prod.id] ? "Remove from wishlist" : "Add to wishlist"}
                  >
                    <Heart
                      size={16}
                      fill={wishlist[prod.id] ? "#F27464" : "none"}
                      color={wishlist[prod.id] ? "#F27464" : "#78716c"}
                    />
                  </button>
                  <span className="ls-prod-age-tag">{prod.ageRange}</span>
                </div>

                <div className="ls-prod-body">
                  <div className="ls-prod-meta">
                    <span className="ls-prod-brand">{prod.brand}</span>
                    <div className="ls-prod-rating">
                      <Star size={13} fill="#F6BD38" color="#F6BD38" />
                      <span>{prod.rating.toFixed(1)}</span>
                      <small>({prod.reviews})</small>
                    </div>
                  </div>

                  <h3 className="ls-prod-title">{prod.title}</h3>
                  <p className="ls-prod-desc">{prod.subtitle}</p>

                  <div className="ls-prod-skills">
                    {prod.skills.slice(0, 2).map((s) => (
                      <span key={s} className="ls-skill-chip">{s}</span>
                    ))}
                  </div>

                  <div className="ls-prod-foot">
                    <div className="ls-price-stack">
                      <strong className="ls-prod-price">${prod.price.toFixed(2)}</strong>
                      {prod.origPrice > prod.price && (
                        <span className="ls-orig-price">${prod.origPrice.toFixed(2)}</span>
                      )}
                    </div>

                    <button
                      className="ls-btn-quick-add"
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
            <div className="ls-empty-catalog">
              <HelpCircle size={40} className="text-muted" />
              <h3>No toys matched your filter</h3>
              <p>Try selecting "All" or modifying your search query.</p>
              <button
                className="ls-btn-teal-pill mt-2"
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

      {/* FEATURED PLAY-ALONG SPOTLIGHT */}
      <section className="ls-section ls-spotlight-section" id="spotlight">
        <div className="ls-wrap">
          <div className="ls-spotlight-card">
            <div className="ls-spotlight-img-wrap">
              <img
                src={spotlightStapelsteinImg}
                alt="Toddlers and children playfully balancing and jumping on colorful Stapelstein stepping stone balance bowls"
                loading="lazy"
              />
              <div className="ls-spotlight-photo-badge">
                <span>Award-Winning Design</span>
              </div>
            </div>

            <div className="ls-spotlight-body">
              <span className="ls-spotlight-eyebrow">FEATURED PLAY-ALONG MASTERPIECE</span>
              <h2 className="ls-spotlight-title">Stapelstein Rainbow Stacker 6-Piece Set</h2>
              <p className="ls-spotlight-tagline">
                The revolutionary open-ended movement system transforming children's rooms, daycare classrooms, and backyard play worldwide.
              </p>

              <ul className="ls-spotlight-features">
                <li>
                  <div className="ls-feature-check"><Check size={14} /></div>
                  <div>
                    <strong>ENCOURAGES GROSS MOTOR AGILITY</strong>
                    <p>Develops natural vestibular balance, foot arch strength, spatial awareness, and rotational stability.</p>
                  </div>
                </li>
                <li>
                  <div className="ls-feature-check"><Check size={14} /></div>
                  <div>
                    <strong>100% WATER-SAFE & UV-RESISTANT</strong>
                    <p>Floats effortlessly in pools and bath tubs; withstands outdoor rain, sun, mud, and snow.</p>
                  </div>
                </li>
                <li>
                  <div className="ls-feature-check"><Check size={14} /></div>
                  <div>
                    <strong>SUPER LIGHTWEIGHT YET ULTRA DURABLE</strong>
                    <p>Weighs only 180g per stone, yet supports up to 396 lbs (180kg) of weight! Suitable for kids and adults alike.</p>
                  </div>
                </li>
              </ul>

              <div className="ls-spotlight-action-row">
                <div className="ls-spotlight-pricing">
                  <div className="ls-spotlight-price">$199.00</div>
                  <span className="ls-spotlight-orig">$240.00</span>
                  <span className="ls-savings-pill">Save $41 (17%)</span>
                </div>
                <button
                  onClick={() => {
                    setCart((prev) => ({ ...prev, "stapelstein-set": (prev["stapelstein-set"] || 0) + 1 }));
                    showToast("Added Stapelstein Rainbow Stacker Set to bag!");
                    setIsCartOpen(true);
                  }}
                  className="ls-btn-yellow"
                >
                  ADD FULL RAINBOW SET <ShoppingBag size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MILESTONE FINDER STUDIO */}
      <section className="ls-section ls-milestones-section" id="milestones">
        <div className="ls-wrap">
          <div className="ls-section-head text-center">
            <span className="ls-eyebrow">DEVELOPMENTAL SPECIALIST STAGES</span>
            <h2 className="ls-section-title">SHOP BY AGE & MILESTONE</h2>
            <p className="ls-sub">Every stage is a milestone. Discover toys curated by pediatric play specialists to ignite natural wonder.</p>
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
              <div className="ls-milestone-head-row">
                <span className="ls-milestone-chip">{activeAgeTab.name}</span>
                <h3>{activeAgeTab.headline}</h3>
              </div>
              <p className="ls-milestone-desc">{activeAgeTab.focus}</p>

              <div className="ls-milestone-badges">
                {activeAgeTab.badges.map((b) => (
                  <span key={b} className="ls-skill-badge">
                    <CheckCircle2 size={13} className="text-teal" /> {b}
                  </span>
                ))}
              </div>

              <div className="ls-milestone-picks">
                <strong>Recommended Essentials:</strong>
                <span>{activeAgeTab.picks}</span>
              </div>
            </div>

            <div className="ls-milestone-action-card">
              {(() => {
                const recProd = productsData.find((p) => p.id === activeAgeTab.recommendedProdId);
                if (!recProd) return null;
                return (
                  <div className="ls-rec-mini-card">
                    <img src={recProd.img} alt={recProd.title} />
                    <div className="ls-rec-info">
                      <small className="ls-rec-badge">STAGE FAVORITE</small>
                      <h4>{recProd.title}</h4>
                      <strong className="ls-rec-price">${recProd.price.toFixed(2)}</strong>
                      <button
                        className="ls-btn-yellow-sm mt-2"
                        onClick={() => handleAddToCart(recProd.id)}
                      >
                        ADD TO BAG
                      </button>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* PLAYROOM TOY BOX BUILDER */}
      <section className="ls-section ls-builder-section" id="box-builder">
        <div className="ls-wrap">
          <div className="ls-section-head text-center">
            <span className="ls-eyebrow">CUSTOM PLAYROOM BUNDLE SYSTEM</span>
            <h2 className="ls-section-title">BUILD YOUR PLAYROOM STARTER BOX</h2>
            <p className="ls-sub">Bundle 2+ essentials for 10% off, 3 for 15% off, or 4+ for 20% off. Stack and save automatically!</p>
          </div>

          <div className="ls-builder-grid">
            {/* Checkbox selectors */}
            <div className="ls-builder-items">
              {productsData.slice(0, 4).map((p) => {
                const isSelected = !!builderItems[p.id];
                return (
                  <label
                    key={p.id}
                    className={`ls-build-item ${isSelected ? "active" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={isSelected}
                      onChange={(e) => {
                        setBuilderItems((prev) => ({
                          ...prev,
                          [p.id]: e.target.checked,
                        }));
                      }}
                    />
                    <img src={p.img} alt={p.title} className="ls-build-thumb" />
                    <div className="ls-build-info">
                      <div className="ls-build-title-row">
                        <strong>{p.title}</strong>
                        <span className="ls-build-price">${p.price.toFixed(2)}</span>
                      </div>
                      <small>{p.subtitle}</small>
                      <div className="ls-build-meta">
                        <span>{p.category}</span>
                        <span className="ls-dot-sep">•</span>
                        <span>{p.ageRange}</span>
                      </div>
                    </div>
                  </label>
                );
              })}
            </div>

            {/* Savings Summary */}
            <div className="ls-builder-summary">
              <div className="ls-summary-header">
                <h3>YOUR CUSTOM PLAYROOM BOX</h3>
                <span className="ls-box-counter">{boxItemCount} Selected</span>
              </div>

              <div className="ls-bundle-progress">
                <div className="ls-progress-labels">
                  <span>Discount Level:</span>
                  <strong>{bundleDiscountRate > 0 ? `${(bundleDiscountRate * 100).toFixed(0)}% OFF` : "Select 2+ for discount"}</strong>
                </div>
                <div className="ls-progress-track">
                  <div
                    className="ls-progress-fill"
                    style={{ width: `${(boxItemCount / 4) * 100}%` }}
                  />
                </div>
                <small className="ls-progress-hint">
                  {boxItemCount < 2 && "Add 1 more item to unlock 10% savings!"}
                  {boxItemCount === 2 && "Add 1 more item to reach 15% savings!"}
                  {boxItemCount === 3 && "Add 1 more item to reach MAX 20% savings!"}
                  {boxItemCount >= 4 && "🎉 Maximum 20% bundle discount unlocked!"}
                </small>
              </div>

              <div className="ls-sum-row">
                <span>Selected Items:</span>
                <strong>{boxItemCount} Toys</strong>
              </div>
              <div className="ls-sum-row">
                <span>Regular Retail Total:</span>
                <span className={bundleDiscountRate > 0 ? "ls-strike" : ""}>
                  ${boxItemTotal.toFixed(2)}
                </span>
              </div>

              {bundleDiscountRate > 0 && (
                <div className="ls-sum-row highlight">
                  <span>{(bundleDiscountRate * 100).toFixed(0)}% Bundle Discount:</span>
                  <span>-${boxSavings.toFixed(2)}</span>
                </div>
              )}

              <div className="ls-sum-total-row">
                <span>Bundle Total:</span>
                <strong>${boxBundleFinalPrice.toFixed(2)}</strong>
              </div>

              <button
                disabled={boxItemCount === 0}
                onClick={() => {
                  selectedBoxKeys.forEach((k) => {
                    handleAddToCart(k);
                  });
                  showToast(`Added Playroom Box (${boxItemCount} items) to bag!`);
                  setIsCartOpen(true);
                }}
                className="ls-btn-yellow ls-btn-bundle-add"
              >
                ADD COMPLETE BOX ({boxItemCount} ITEMS) • ${boxBundleFinalPrice.toFixed(2)}
              </button>

              <div className="ls-bundle-perks">
                <div className="ls-b-perk">
                  <Truck size={14} className="text-teal" /> Free Carbon-Neutral Shipping
                </div>
                <div className="ls-b-perk">
                  <ShieldCheck size={14} className="text-teal" /> 30-Day Play Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VERIFIED PARENT REVIEWS */}
      <section className="ls-section ls-reviews-section" id="reviews">
        <div className="ls-wrap">
          <div className="ls-section-head text-center">
            <span className="ls-eyebrow">COMMUNITY LOVED & TESTED</span>
            <h2 className="ls-section-title">WHAT PARENTS & EDUCATORS SAY</h2>
            <div className="ls-overall-rating">
              <div className="ls-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#F6BD38" color="#F6BD38" />
                ))}
              </div>
              <strong>4.9 Out of 5 Stars</strong>
              <span>Based on 2,480+ verified reviews</span>
            </div>
          </div>

          <div className="ls-reviews-grid">
            {parentReviews.map((rev) => (
              <div key={rev.id} className="ls-review-card">
                <div className="ls-rev-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={14} fill="#F6BD38" color="#F6BD38" />
                  ))}
                </div>
                <p className="ls-rev-quote">"{rev.quote}"</p>
                <div className="ls-rev-author">
                  <div className="ls-rev-avatar">{rev.name.charAt(0)}</div>
                  <div>
                    <strong>{rev.name}</strong>
                    <small>{rev.role}</small>
                    <span className="ls-rev-toy">Review for: {rev.toy}</span>
                  </div>
                </div>
                <span className="ls-rev-date">{rev.date}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ ACCORDION */}
      <section className="ls-section ls-faq-section" id="faq">
        <div className="ls-wrap ls-faq-wrap">
          <div className="ls-section-head text-center">
            <span className="ls-eyebrow">FREQUENTLY ASKED QUESTIONS</span>
            <h2 className="ls-section-title">ALL ABOUT LITTLESPROUT</h2>
            <p className="ls-sub">Everything you need to know about our safety standards, materials, and ordering.</p>
          </div>

          <div className="ls-faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div key={index} className={`ls-faq-item ${isOpen ? "open" : ""}`}>
                  <button
                    className="ls-faq-question"
                    onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown size={18} className={`ls-faq-arrow ${isOpen ? "rotate" : ""}`} />
                  </button>
                  {isOpen && (
                    <div className="ls-faq-answer">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="ls-footer">
        <div className="ls-wrap ls-footer-grid">
          {/* Col 1 */}
          <div className="ls-footer-brand-col">
            <div className="ls-brand">
              <LittleSproutLogo size={28} />
              <div className="ls-brand-text">
                <span className="ls-brand-title">LittleSprout</span>
                <span className="ls-brand-sub">Curated Play Studio</span>
              </div>
            </div>
            <h4>JOIN THE SPROUT SQUAD</h4>
            <p>Subscribe for childhood play inspiration, developmental milestone guides, and 10% off your first heirloom order.</p>
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
                placeholder="Enter your email address"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                aria-label="Email address for newsletter"
              />
              <button type="submit">Subscribe</button>
            </form>
            <small className="ls-news-fineprint">We respect your inbox. Unsubscribe with one click anytime.</small>
          </div>

          {/* Col 2 */}
          <div className="ls-footer-col">
            <h4>CUSTOMER CARE</h4>
            <a href="#faq" onClick={(e) => { e.preventDefault(); showToast("Safety Certificates: ASTM F963 & EN71 compliant"); }}>Safety & Certifications</a>
            <a href="#shipping" onClick={(e) => { e.preventDefault(); showToast("Eco-Friendly Shipping Policy (Orders over $75 ship free)"); }}>Shipping & Tracking</a>
            <a href="#returns" onClick={(e) => { e.preventDefault(); showToast("30-Day Play Happiness Guarantee: Free returns within 30 days"); }}>30-Day Returns</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); showToast("Play Consultation with Specialist"); }}>Play Specialist Consultation</a>
          </div>

          {/* Col 3 */}
          <div className="ls-footer-col">
            <h4>OUR STUDIO</h4>
            <a href="#collections" onClick={(e) => { e.preventDefault(); showToast("Our Sustainable Story: Handcrafted with FSC Beechwood"); }}>Our Sustainable Story</a>
            <a href="#milestones" onClick={(e) => { e.preventDefault(); showToast("The Montessori & Waldorf Play Philosophy"); }}>Play Philosophies</a>
            <a href="#reviews" onClick={(e) => { e.preventDefault(); showToast("Pediatric OT & Parent Reviews"); }}>Educator Reviews</a>
            <a href="#box-builder" onClick={(e) => { e.preventDefault(); showToast("Gift Registry & Starter Boxes"); }}>Playroom Gift Registry</a>
          </div>

          {/* Col 4 */}
          <div className="ls-footer-col">
            <h4>STAY CONNECTED</h4>
            <div className="ls-social-icons">
              <a href="#instagram" aria-label="Instagram">IG</a>
              <a href="#pinterest" aria-label="Pinterest">PT</a>
              <a href="#facebook" aria-label="Facebook">FB</a>
            </div>
            <div className="ls-footer-badge-box mt-3">
              <Leaf size={14} className="text-teal" />
              <span>100% Carbon-Neutral Certified</span>
            </div>
          </div>
        </div>

        {/* Subfooter */}
        <div className="ls-subfooter">
          <div className="ls-wrap ls-subfooter-inner">
            <p>© {new Date().getFullYear()} LittleSprout Toys Co. All Rights Reserved. Mindfully designed for open-ended wonder.</p>
            <div className="ls-subfooter-links">
              <a href="#privacy" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
              <span>•</span>
              <a href="#terms" onClick={(e) => e.preventDefault()}>Terms of Service</a>
              <span>•</span>
              <a href="#accessibility" onClick={(e) => e.preventDefault()}>Accessibility</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE BOTTOM NAVIGATION BAR */}
      <nav className="ls-bottom-nav" aria-label="Mobile Bottom Navigation">
        <button
          className="ls-bottom-nav-item"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Home"
        >
          <Compass size={20} />
          <span>Explore</span>
        </button>

        <button
          className="ls-bottom-nav-item"
          onClick={() => {
            const el = document.getElementById("highlights");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Shop Toys"
        >
          <Layers size={20} />
          <span>Catalog</span>
        </button>

        <button
          className="ls-bottom-nav-item"
          onClick={() => {
            const el = document.getElementById("milestones");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          aria-label="Shop by Age"
        >
          <Award size={20} />
          <span>By Age</span>
        </button>

        <button
          className="ls-bottom-nav-item"
          onClick={() => setIsWishlistOpen(true)}
          aria-label="Saved Wishlist"
        >
          <div className="ls-badge-wrap">
            <Heart size={20} />
            {totalWishlistCount > 0 && <span className="ls-badge">{totalWishlistCount}</span>}
          </div>
          <span>Saved</span>
        </button>

        <button
          className="ls-bottom-nav-item ls-bottom-bag"
          onClick={() => setIsCartOpen(true)}
          aria-label="Shopping Bag"
        >
          <div className="ls-badge-wrap">
            <ShoppingBag size={20} />
            {totalCartCount > 0 && <span className="ls-badge">{totalCartCount}</span>}
          </div>
          <span>Bag</span>
        </button>
      </nav>

      {/* Slide-out Cart Drawer */}
      <div
        className={`ls-drawer-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`ls-cart-drawer ${isCartOpen ? "open" : ""}`} role="dialog" aria-label="Shopping Cart">
        <div className="ls-cart-head">
          <div className="ls-cart-head-title">
            <ShoppingBag size={20} className="text-teal" />
            <h3>SHOPPING BAG ({totalCartCount})</h3>
          </div>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart drawer">
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="ls-shipping-meter-box">
          <div className="ls-meter-text">
            {rawCartSubtotal >= 75 ? (
              <span className="text-green">
                <CheckCircle2 size={14} /> You unlocked <strong>FREE Carbon-Neutral Shipping!</strong>
              </span>
            ) : (
              <span>
                Add <strong>${(75 - rawCartSubtotal).toFixed(2)}</strong> more for <strong>Free Shipping</strong>
              </span>
            )}
          </div>
          <div className="ls-meter-track">
            <div
              className="ls-meter-fill"
              style={{ width: `${Math.min(100, (rawCartSubtotal / 75) * 100)}%` }}
            />
          </div>
        </div>

        <div className="ls-cart-body">
          {totalCartCount > 0 ? (
            <div className="ls-cart-list">
              {Object.entries(cart).map(([id, qty]) => {
                const prod = productsData.find((p) => p.id === id);
                let title = prod ? prod.title : id === "stapelstein-set" ? "Stapelstein Rainbow Stacker 6-Piece Set" : "Custom Playroom Toy Box";
                let price = prod ? prod.price : id === "stapelstein-set" ? 199.0 : 144.0;
                let img = prod ? prod.img : id === "stapelstein-set" ? spotlightStapelsteinImg : heroSproutImg;

                return (
                  <div key={id} className="ls-cart-item">
                    <img src={img} alt={title} />
                    <div className="ls-cart-item-info">
                      <div className="ls-cart-title-row">
                        <h4>{title}</h4>
                        <button
                          className="ls-trash-link"
                          onClick={() => handleRemoveFromCart(id)}
                          aria-label={`Remove ${title} from bag`}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                      <strong className="ls-cart-item-price">${(price * qty).toFixed(2)}</strong>
                      <div className="ls-cart-qty-row">
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
            <div className="ls-empty-cart">
              <ShoppingBag size={48} className="text-muted" />
              <h4>Your play bag is empty</h4>
              <p>Explore wooden rainbows, stepping stones, and magnetic tiles to start playing.</p>
              <button
                className="ls-btn-yellow mt-2"
                onClick={() => {
                  setIsCartOpen(false);
                  const el = document.getElementById("highlights");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Shop Popular Toys
              </button>
            </div>
          )}
        </div>

        {totalCartCount > 0 && (
          <div className="ls-cart-foot">
            <form className="ls-coupon-form" onSubmit={handleApplyCoupon}>
              <input
                type="text"
                placeholder="Discount code (SPRING20)"
                value={couponCode}
                onChange={(e) => setCouponCode(e.target.value)}
                aria-label="Coupon discount code"
              />
              <button type="submit">Apply</button>
            </form>
            {couponStatus && <span className="ls-coupon-status">{couponStatus}</span>}

            <div className="ls-cart-summary-box">
              <div className="ls-cart-total-row">
                <span>Subtotal:</span>
                <span>${rawCartSubtotal.toFixed(2)}</span>
              </div>
              {appliedDiscount > 0 && (
                <div className="ls-cart-total-row highlight">
                  <span>Discount:</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="ls-cart-total-row">
                <span>Estimated Shipping:</span>
                <span>{rawCartSubtotal >= 75 ? "FREE" : "$6.95"}</span>
              </div>
              <div className="ls-cart-final-total">
                <span>Total:</span>
                <strong>
                  ${(cartSubtotal + (rawCartSubtotal >= 75 ? 0 : 6.95)).toFixed(2)}
                </strong>
              </div>
            </div>

            <button
              onClick={() => {
                setIsCartOpen(false);
                showToast("Proceeding to Secure Play Checkout...");
              }}
              className="ls-btn-yellow ls-btn-checkout"
            >
              SECURE CHECKOUT • ${(cartSubtotal + (rawCartSubtotal >= 75 ? 0 : 6.95)).toFixed(2)}
            </button>
            <small className="ls-checkout-guarantee">
              🔒 256-Bit SSL Encrypted • 30-Day Happiness Guarantee
            </small>
          </div>
        )}
      </div>

      {/* Slide-out Wishlist Drawer */}
      <div
        className={`ls-drawer-overlay ${isWishlistOpen ? "open" : ""}`}
        onClick={() => setIsWishlistOpen(false)}
      />
      <div className={`ls-cart-drawer ${isWishlistOpen ? "open" : ""}`} role="dialog" aria-label="Wishlist">
        <div className="ls-cart-head">
          <div className="ls-cart-head-title">
            <Heart size={20} className="text-teal" />
            <h3>SAVED PLAYROOM WISHLIST ({totalWishlistCount})</h3>
          </div>
          <button onClick={() => setIsWishlistOpen(false)} aria-label="Close wishlist">
            <X size={20} />
          </button>
        </div>

        <div className="ls-cart-body">
          {totalWishlistCount > 0 ? (
            <div className="ls-cart-list">
              {Object.entries(wishlist)
                .filter(([_, a]) => a)
                .map(([id]) => {
                  const prod = productsData.find((p) => p.id === id);
                  if (!prod) return null;
                  return (
                    <div key={id} className="ls-cart-item">
                      <img src={prod.img} alt={prod.title} />
                      <div className="ls-cart-item-info">
                        <h4>{prod.title}</h4>
                        <strong className="ls-cart-item-price">${prod.price.toFixed(2)}</strong>
                        <div className="ls-wish-actions">
                          <button
                            className="ls-btn-yellow-sm"
                            onClick={() => {
                              handleAddToCart(id);
                              handleToggleWishlist(id);
                            }}
                          >
                            Move to Bag
                          </button>
                          <button
                            className="ls-trash-link"
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
            <div className="ls-empty-cart">
              <Heart size={48} className="text-muted" />
              <h4>No toys saved yet</h4>
              <p>Tap the heart icon on any toy to curate your custom wishlist.</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick View Product Modal */}
      {selectedProduct && (
        <div className="ls-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div
            className="ls-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label={selectedProduct.title}
          >
            <button
              className="ls-modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product quick view"
            >
              <X size={22} />
            </button>

            <div className="ls-modal-grid">
              <div className="ls-modal-img">
                <img src={selectedProduct.img} alt={selectedProduct.title} />
                {selectedProduct.badge && (
                  <span className="ls-prod-badge">{selectedProduct.badge}</span>
                )}
              </div>
              <div className="ls-modal-info">
                <div className="ls-modal-meta">
                  <span className="ls-pill">{selectedProduct.category}</span>
                  <span className="ls-modal-age">{selectedProduct.ageRange}</span>
                </div>
                <h2>{selectedProduct.title}</h2>
                <span className="ls-modal-brand">Crafted by {selectedProduct.brand}</span>

                <div className="ls-modal-rating-row">
                  <div className="ls-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#F6BD38" color="#F6BD38" />
                    ))}
                  </div>
                  <strong>{selectedProduct.rating.toFixed(1)}</strong>
                  <span>({selectedProduct.reviews} verified family reviews)</span>
                </div>

                <div className="ls-modal-price-row">
                  <strong>${selectedProduct.price.toFixed(2)}</strong>
                  {selectedProduct.origPrice > selectedProduct.price && (
                    <span className="ls-orig-price">${selectedProduct.origPrice.toFixed(2)}</span>
                  )}
                  <span className="ls-instock-pill">In Stock & Ready to Ship</span>
                </div>

                <p className="ls-modal-desc">{selectedProduct.subtitle}</p>

                <div className="ls-modal-skills">
                  <strong>Key Developmental Skills Nurtured:</strong>
                  <div className="ls-skills-pills">
                    {selectedProduct.skills.map((skill) => (
                      <span key={skill} className="ls-skill-chip">{skill}</span>
                    ))}
                  </div>
                </div>

                <div className="ls-features-list">
                  <div>
                    <Check size={15} className="text-teal" /> 100% Non-Toxic & Zero BPA / Phthalates
                  </div>
                  <div>
                    <Check size={15} className="text-teal" /> Materials: {selectedProduct.materials}
                  </div>
                  <div>
                    <Check size={15} className="text-teal" /> Certified to ASTM F963 & EN71 Standards
                  </div>
                </div>

                <div className="ls-modal-actions">
                  <button
                    className="ls-btn-yellow ls-btn-modal-add"
                    onClick={() => {
                      handleAddToCart(selectedProduct.id);
                      setSelectedProduct(null);
                    }}
                  >
                    ADD TO BAG • ${selectedProduct.price.toFixed(2)}
                  </button>
                  <button
                    className={`ls-modal-wish-btn ${wishlist[selectedProduct.id] ? "active" : ""}`}
                    onClick={(e) => handleToggleWishlist(selectedProduct.id, e)}
                    aria-label="Save to wishlist"
                  >
                    <Heart
                      size={18}
                      fill={wishlist[selectedProduct.id] ? "#F27464" : "none"}
                      color={wishlist[selectedProduct.id] ? "#F27464" : "currentColor"}
                    />
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

export default LittleSproutToys;
