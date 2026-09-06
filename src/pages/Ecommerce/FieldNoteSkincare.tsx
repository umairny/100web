import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  Check,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Compass,
  Droplet,
  Eye,
  Feather,
  Flower2,
  Heart,
  HelpCircle,
  Home,
  Leaf,
  Layers,
  Menu,
  Minus,
  Package,
  Plus,
  RefreshCw,
  Search,
  Shield,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sliders,
  Sparkles,
  Star,
  Sun,
  Moon,
  Tag,
  Trash2,
  Truck,
  User,
  X,
  Zap,
} from "lucide-react";
import "./FieldNoteSkincare.css";

// Photo Assets
import heroBotanicalImg from "../../assets/optimized/ecommerce/fieldnote/hero-botanical.webp";
import heroSlide1Img from "../../assets/optimized/ecommerce/fieldnote/hero-slide-1.webp";
import heroSlide2Img from "../../assets/optimized/ecommerce/fieldnote/hero-slide-2.webp";
import heroSlide3Img from "../../assets/optimized/ecommerce/fieldnote/hero-slide-3.webp";
import heroSlide4Img from "../../assets/optimized/ecommerce/fieldnote/hero-slide-4.webp";

import collMorningImg from "../../assets/optimized/ecommerce/fieldnote/coll-morning.webp";
import collEveningImg from "../../assets/optimized/ecommerce/fieldnote/coll-evening.webp";
import collTreatmentsImg from "../../assets/optimized/ecommerce/fieldnote/coll-treatments.webp";

import starterKitImg from "../../assets/optimized/ecommerce/fieldnote/starter-kit.webp";

import prodCleanserImg from "../../assets/optimized/ecommerce/fieldnote/prod-cleanser.webp";
import prodTonerImg from "../../assets/optimized/ecommerce/fieldnote/prod-toner.webp";
import prodSerumImg from "../../assets/optimized/ecommerce/fieldnote/prod-serum.webp";
import prodCreamImg from "../../assets/optimized/ecommerce/fieldnote/prod-cream.webp";

import guideRitualImg from "../../assets/optimized/ecommerce/fieldnote/guide-ritual.webp";
import guideSkinImg from "../../assets/optimized/ecommerce/fieldnote/guide-skin.webp";

// Botanical Leaf Sprout Icon SVG
function FieldNoteLogo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className="fn-logo-svg">
      <path
        d="M16 28V14M16 14C16 9 20 4 27 4C27 11 22 15 16 14ZM16 18C16 14 12 10 5 10C5 17 10 20 16 18Z"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Hero Carousel Dataset (4 Rich Slides)
const heroSlides = [
  {
    id: 1,
    img: heroSlide1Img,
    badge: "Cold-Pressed Holistic Botanical Formulations",
    title: (
      <>
        FIELDNOTE: BOTANICAL <br />
        DAILY SKINCARE FOR <br />
        YOUR BEST GLOW.
      </>
    ),
    sub: "Thoughtfully crafted rituals using wildcrafted Kakadu Plum, Damask rose hydrosol, and sugarcane squalane. Pure, effective, and biocompatible for radiant skin.",
    primaryCta: "SHOP THE COLLECTION",
    primaryHref: "#featured",
    secondaryCta: "FIND YOUR REGIMEN ➔",
    isQuizCta: true,
    stat1: { val: "98.4%", label: "Bio-Active Botanical" },
    stat2: { val: "100%", label: "Vegan & Cruelty-Free" },
    stat3: { val: "Zero", label: "Synthetic Fragrance" },
  },
  {
    id: 2,
    img: heroSlide2Img,
    badge: "Wildcrafted Australian Kakadu Plum Extract",
    title: (
      <>
        VITAMIN C RADIANCE & <br />
        CELLULAR BARRIER <br />
        ANTIOXIDANT DEFENSE.
      </>
    ),
    sub: "Supercritical CO2 extracted botanical drops providing 55x higher Vitamin C concentration than citrus fruits to instantly revive dullness and fade dark spots.",
    primaryCta: "EXPLORE GLOW SERUM",
    primaryHref: "#featured",
    secondaryCta: "BOTANICAL INGREDIENTS ➔",
    secondaryHref: "#ingredients",
    stat1: { val: "55x", label: "Potent Vitamin C" },
    stat2: { val: "15%", label: "Active Complex" },
    stat3: { val: "14 Days", label: "Visible Radiance" },
  },
  {
    id: 3,
    img: heroSlide3Img,
    badge: "Bulgarian Damask Rose & White Willow Bark",
    title: (
      <>
        DEEP HYDRATION MIST & <br />
        BALANCED CELLULAR <br />
        HYDROSOL REFRESH.
      </>
    ),
    sub: "Pure steam-distilled floral waters rich in anti-inflammatory polyphenols. Restores optimal pH 5.5 balance and primes skin for maximum nutrient absorption.",
    primaryCta: "SHOP HYDRATING MISTS",
    primaryHref: "#collections",
    secondaryCta: "CUSTOM ROUTINE BUILDER ➔",
    secondaryHref: "#routine-studio",
    stat1: { val: "pH 5.5", label: "Acid Mantle Safe" },
    stat2: { val: "100%", label: "Alcohol Free" },
    stat3: { val: "4 fl oz", label: "Ultra-Fine Mist" },
  },
  {
    id: 4,
    img: heroSlide4Img,
    badge: "Sustainably Harvested • Violet UV Glass",
    title: (
      <>
        THE DAILY ESSENTIALS <br />
        MINI KIT DISCOVERY <br />
        TRAVEL EXPERIENCE.
      </>
    ),
    sub: "Our signature 4-step ritual in travel-ready violet glass bottles. Receive 20% off your initial trial kit with complimentary carbon-neutral freight.",
    primaryCta: "CLAIM 20% STARTER OFFER",
    primaryHref: "#promo",
    secondaryCta: "READ SKINCARE GUIDES ➔",
    secondaryHref: "#journal",
    stat1: { val: "4-Piece", label: "Complete Regimen" },
    stat2: { val: "20% Off", label: "Limited Trial" },
    stat3: { val: "30 Days", label: "Supply Guarantee" },
  },
];

// 3 Clear Collections Dataset
const clearCollections = [
  {
    id: "morning",
    title: "THE MORNING RITUAL",
    subtitle: "Awaken cellular hydration & protect against daily oxidative stress",
    btnText: "EXPLORE MORNING RITUAL",
    img: collMorningImg,
    count: "Cleansers, Rose Toners & Vitamin C",
    tagline: "Awaken • Hydrate • Shield",
  },
  {
    id: "evening",
    title: "THE EVENING RITUAL",
    subtitle: "Cellular renewal, barrier restoration & deeply nourishing botanical lipids",
    btnText: "EXPLORE EVENING RITUAL",
    img: collEveningImg,
    count: "Bakuchiol, Retinol Alternative & Night Oils",
    tagline: "Restore • Repair • Smooth",
  },
  {
    id: "treatments",
    title: "TARGETED TREATMENTS",
    subtitle: "Intensive bio-active formulas for hyperpigmentation, texture & calm",
    btnText: "EXPLORE TREATMENTS",
    img: collTreatmentsImg,
    count: "Clay Masks, Exfoliating Peels & Eye Balms",
    tagline: "Refine • Clarify • Soothe",
  },
];

export interface SkincareProduct {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  origPrice: number;
  rating: number;
  reviews: number;
  img: string;
  category: "Cleansers" | "Toners & Mists" | "Serums & Elixirs" | "Moisturizers" | "Sets & Kits";
  tag: string;
  heroBotanical: string;
  volume: string;
  benefits: string[];
}

// Featured Products Dataset
const featuredProducts: SkincareProduct[] = [
  {
    id: "cleanser",
    title: "Botanical Gel Cleanser",
    subtitle: "Antioxidant-rich gentle foaming wash with cold-pressed green tea extract and chamomile.",
    price: 48.0,
    origPrice: 58.0,
    rating: 4.9,
    reviews: 184,
    img: prodCleanserImg,
    category: "Cleansers",
    tag: "Clean & Gentle",
    heroBotanical: "Japanese Green Tea & German Chamomile",
    volume: "150 ml / 5.1 fl. oz.",
    benefits: [
      "Non-stripping pH 5.5 balanced formulation",
      "Dissolves daily pollution and light makeup seamlessly",
      "Soothes reactive redness with bioflavonoids",
      "100% recyclable frosted amber glass pump bottle",
    ],
  },
  {
    id: "toner",
    title: "Hydrating Rose Mist",
    subtitle: "Infused with organic Damask rose hydrosol, aloe vera, and soothing white willow bark.",
    price: 48.0,
    origPrice: 56.0,
    rating: 4.8,
    reviews: 215,
    img: prodTonerImg,
    category: "Toners & Mists",
    tag: "Alcohol-Free",
    heroBotanical: "Bulgarian Damask Rose & White Willow",
    volume: "120 ml / 4.0 fl. oz.",
    benefits: [
      "Instantly quenches surface dehydration",
      "Preps the skin barrier for maximum serum penetration",
      "Natural astringent tannins refine pore appearance",
      "Ultra-fine micro-mist nozzle for refreshing throughout the day",
    ],
  },
  {
    id: "serum",
    title: "Vitamin C Glow Serum",
    subtitle: "Potent 15% wildcrafted Kakadu Plum, Hyaluronic Acid, and Ferulic brightening complex.",
    price: 48.0,
    origPrice: 64.0,
    rating: 4.9,
    reviews: 342,
    img: prodSerumImg,
    category: "Serums & Elixirs",
    tag: "Radiance Boost",
    heroBotanical: "Wildcrafted Australian Kakadu Plum",
    volume: "30 ml / 1.0 fl. oz.",
    benefits: [
      "55x higher concentration of bioavailable Vitamin C than citrus",
      "Fades the look of post-acne dark marks and sunspots",
      "Multi-molecular weight hyaluronic acid cushions epidermis",
      "Stabilized with vitamin E and ferulic acid to prevent oxidation",
    ],
  },
  {
    id: "cream",
    title: "Nourishing Night Cream",
    subtitle: "Replenishing lipid barrier treatment with sugarcane squalane, ceramides, and shea butter.",
    price: 48.0,
    origPrice: 62.0,
    rating: 4.8,
    reviews: 198,
    img: prodCreamImg,
    category: "Moisturizers",
    tag: "Deep Barrier Repair",
    heroBotanical: "Brazilian Sugarcane Squalane & Plant Ceramides",
    volume: "50 ml / 1.7 fl. oz.",
    benefits: [
      "Locks in overnight hydration with biomimetic plant squalane",
      "Supports lipid barrier recovery and reduces transepidermal water loss",
      "Non-comedogenic velvety whipped cream texture",
      "Wakes up skin plump, rested, and visibly radiant",
    ],
  },
  {
    id: "starter-kit",
    title: "The Daily Essentials Mini Kit",
    subtitle: "The complete 4-piece travel ritual: Cleanser, Rose Mist, Vitamin C Serum & Night Cream.",
    price: 68.0,
    origPrice: 85.0,
    rating: 5.0,
    reviews: 112,
    img: starterKitImg,
    category: "Sets & Kits",
    tag: "Travel Essentials",
    heroBotanical: "Complete 4-Step Botanical Discovery",
    volume: "4 x 20 ml Deluxe Miniatures",
    benefits: [
      "TSA-approved luxury amber miniature bottles",
      "Provides 30-day comprehensive glow regimen",
      "Includes organic unbleached linen cosmetic pouch",
      "Ideal gift for holistic clean beauty devotees",
    ],
  },
];

// Botanical Ingredients Glossary Dataset
const botanicalIngredients = [
  {
    id: "kakadu",
    name: "Kakadu Plum",
    scientific: "Terminalia ferdinandiana",
    origin: "Wildcrafted Australian Outback",
    benefit: "World's richest natural source of Vitamin C — 55x more concentrated than Florida oranges for collagen support and radiance.",
    usedIn: "Vitamin C Glow Serum",
  },
  {
    id: "bakuchiol",
    name: "Plant Bakuchiol",
    scientific: "Psoralea corylifolia",
    origin: "Ayurvedic Indian Babchi Seeds",
    benefit: "Clinically validated retinol alternative that visibly firms and smooths fine lines without redness, peeling, or photosensitivity.",
    usedIn: "Evening Renewal Elixir",
  },
  {
    id: "rose",
    name: "Organic Damask Rose",
    scientific: "Rosa damascena",
    origin: "Valley of Roses, Bulgaria",
    benefit: "Pure steam-distilled flower water enriched with antioxidant flavonoids that tone pores, balance sebum, and calm irritation.",
    usedIn: "Hydrating Rose Mist",
  },
  {
    id: "squalane",
    name: "Sugarcane Squalane",
    scientific: "Hydrogenated Ethylhexyl Olivate",
    origin: "Renewable Brazilian Sugarcane",
    benefit: "Biocompatible featherlight lipid that mimics your skin's natural protective sebum to prevent moisture loss without clogging pores.",
    usedIn: "Nourishing Night Cream",
  },
];

export function FieldNoteSkincare() {
  // Shopping Cart & Wishlist State
  const [cart, setCart] = useState<{ [id: string]: number }>({
    cleanser: 1,
    serum: 1,
  });
  const [wishlist, setWishlist] = useState<{ [id: string]: boolean }>({
    serum: true,
  });

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<SkincareProduct | null>(null);
  const [isQuizModalOpen, setIsQuizModalOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeGuideArticle, setActiveGuideArticle] = useState<"ritual" | "skin" | null>(null);
  const [selectedIngredient, setSelectedIngredient] = useState<typeof botanicalIngredients[0] | null>(null);

  // Hero Carousel State
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  // Auto advance carousel every 5.5s unless paused
  useEffect(() => {
    if (isCarouselPaused) return;
    const interval = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [isCarouselPaused]);

  const nextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Quiz diagnostic state
  const [quizSkinType, setQuizSkinType] = useState("Dry to Dehydrated");
  const [quizPrimaryGoal, setQuizPrimaryGoal] = useState("Radiance & Brightening");

  // Interactive Routine Builder State
  const [step1Choice, setStep1Choice] = useState<{ name: string; price: number; img: string }>({
    name: "Botanical Gel Cleanser",
    price: 48,
    img: prodCleanserImg,
  });
  const [step2Choice, setStep2Choice] = useState<{ name: string; price: number; img: string }>({
    name: "Hydrating Rose Mist",
    price: 48,
    img: prodTonerImg,
  });
  const [step3Choice, setStep3Choice] = useState<{ name: string; price: number; img: string }>({
    name: "Vitamin C Glow Serum",
    price: 48,
    img: prodSerumImg,
  });
  const [step4Choice, setStep4Choice] = useState<{ name: string; price: number; img: string }>({
    name: "Nourishing Night Cream",
    price: 48,
    img: prodCreamImg,
  });

  // Filtered Products for Featured Catalog
  const filteredProducts = useMemo(() => {
    if (selectedCategory === "All") return featuredProducts.filter((p) => p.id !== "starter-kit");
    return featuredProducts.filter(
      (p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()) && p.id !== "starter-kit"
    );
  }, [selectedCategory]);

  // Live Search Results
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    if (!q) return featuredProducts;
    return featuredProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q) ||
        p.heroBotanical.toLowerCase().includes(q)
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
    const p = featuredProducts.find((item) => item.id === productId);
    showToast(`Added ${p ? p.title : "botanical item"} to bag!`);
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
    showToast("Item removed from your bag");
  };

  const handleToggleWishlist = (productId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWishlist((prev) => {
      const state = !prev[productId];
      showToast(state ? "Added to your botanical wishlist ♡" : "Removed from wishlist");
      return { ...prev, [productId]: state };
    });
  };

  const cartSubtotal = Object.entries(cart).reduce((total, [id, qty]) => {
    const prod = featuredProducts.find((p) => p.id === id);
    if (prod) return total + prod.price * qty;
    if (id === "starter-kit") return total + 68.0 * qty;
    if (id === "custom-routine") return total + 163.2 * qty;
    return total;
  }, 0);

  // Scroll & Escape keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
        setIsWishlistOpen(false);
        setMobileMenuOpen(false);
        setSelectedProduct(null);
        setIsQuizModalOpen(false);
        setIsSearchOpen(false);
        setActiveGuideArticle(null);
        setSelectedIngredient(null);
      }
    };
    const anyModalOpen =
      isCartOpen ||
      isWishlistOpen ||
      mobileMenuOpen ||
      selectedProduct ||
      isQuizModalOpen ||
      isSearchOpen ||
      activeGuideArticle ||
      selectedIngredient;

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
    isQuizModalOpen,
    isSearchOpen,
    activeGuideArticle,
    selectedIngredient,
  ]);

  const activeSlide = heroSlides[currentHeroSlide];

  return (
    <main className="fn-site" id="top" tabIndex={-1}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fn-toast" role="alert">
          <CheckCircle2 size={16} className="text-amber" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Global Announcement & Stores Hub Bar */}
      <div className="fn-topbar">
        <div className="fn-wrap fn-topbar-inner">
          <Link to="/ecommerce" className="fn-hub-back-btn" title="Back to All E-Commerce Templates">
            <ArrowLeft size={13} />
            <span>All Stores</span>
          </Link>

          <div className="fn-topbar-promo">
            <span>Complimentary 2-Day Carbon Neutral Shipping on orders over $100</span>
            <span className="fn-sep">•</span>
            <span className="fn-highlight">Use code: <strong>FIELD100</strong></span>
          </div>

          <button
            onClick={() => setIsQuizModalOpen(true)}
            className="fn-topbar-cta"
          >
            <span>Skin Diagnostic Quiz</span>
            <Sparkles size={12} />
          </button>
        </div>
      </div>

      {/* Main Header Navbar */}
      <header className="fn-header">
        <div className="fn-wrap fn-header-inner">
          {/* Logo */}
          <a href="#top" className="fn-brand">
            <FieldNoteLogo size={26} />
            <div className="fn-brand-text">
              <span className="fn-brand-title">FieldNote</span>
              <span className="fn-brand-sub">BOTANICAL SKINCARE</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="fn-nav-links" aria-label="Primary Navigation">
            <a href="#top" className="fn-nav-link active">Home</a>
            <a href="#collections" className="fn-nav-link">Rituals</a>
            <a href="#featured" className="fn-nav-link">Catalog</a>
            <a href="#routine-studio" className="fn-nav-link">Routine Studio</a>
            <a href="#ingredients" className="fn-nav-link">Ingredients</a>
            <a href="#journal" className="fn-nav-link">Journal</a>
            <a href="#promo" className="fn-nav-link fn-sale-nav">Starter Kit Offer</a>
          </nav>

          {/* Right Utility Actions:
              Desktop shows Search, Quiz, Wishlist, Cart.
              Mobile hides them via CSS because they are conveniently placed in the sticky bottom menu! */}
          <div className="fn-nav-actions">
            <button
              className="fn-icon-btn fn-header-search"
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search botanical products"
              title="Search catalog"
            >
              <Search size={19} />
            </button>

            <button
              className="fn-icon-btn fn-header-quiz-btn"
              onClick={() => setIsQuizModalOpen(true)}
              aria-label="Find Your Routine"
              title="Skin Routine Quiz"
            >
              <Droplet size={18} />
              <span className="fn-quiz-btn-label">Quiz</span>
            </button>

            <button
              className="fn-icon-btn fn-header-wishlist"
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Saved Botanicals"
              title="Saved Items"
            >
              <div className="fn-badge-wrap">
                <Heart size={19} />
                {totalWishlistCount > 0 && <span className="fn-badge">{totalWishlistCount}</span>}
              </div>
            </button>

            <button
              className="fn-icon-btn fn-header-cart"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Bag"
              title="View Shopping Bag"
            >
              <div className="fn-badge-wrap">
                <ShoppingBag size={19} />
                <span className="fn-badge">{totalCartCount}</span>
              </div>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              className="fn-mobile-toggle"
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
        className={`fn-drawer-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`fn-mobile-drawer ${mobileMenuOpen ? "open" : ""}`} role="dialog" aria-label="Mobile Menu">
        <div className="fn-drawer-head">
          <div className="fn-brand">
            <FieldNoteLogo size={24} />
            <span className="fn-brand-title">FieldNote</span>
          </div>
          <button
            className="fn-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="fn-drawer-links">
          {[
            { label: "Home", href: "#top" },
            { label: "Ritual Collections (Morning, Evening, Treatments)", href: "#collections" },
            { label: "Featured Botanical Products", href: "#featured" },
            { label: "Custom 4-Step Routine Studio", href: "#routine-studio" },
            { label: "The Starter Kit Event (20% Off)", href: "#promo" },
            { label: "Conscious Botanical Ingredients", href: "#ingredients" },
            { label: "Skincare Guides & Journal", href: "#journal" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="fn-drawer-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{item.label}</span>
              <ChevronRight size={16} />
            </a>
          ))}
        </div>

        <div className="fn-drawer-foot">
          <Link to="/ecommerce" className="fn-hub-drawer-btn">
            Return to All Stores Directory
          </Link>
        </div>
      </div>

      {/* Live Search Modal */}
      {isSearchOpen && (
        <div className="fn-modal-backdrop" onClick={() => setIsSearchOpen(false)}>
          <div className="fn-search-modal" onClick={(e) => e.stopPropagation()}>
            <div className="fn-search-head">
              <div className="fn-search-input-wrap">
                <Search size={18} className="text-amber" />
                <input
                  type="text"
                  placeholder="Search botanical cleansers, rose mists, vitamin C, night creams..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                {searchQuery && (
                  <button className="fn-search-clear" onClick={() => setSearchQuery("")}>
                    <X size={16} />
                  </button>
                )}
              </div>
              <button
                className="fn-modal-close"
                onClick={() => setIsSearchOpen(false)}
                aria-label="Close search"
              >
                <X size={20} />
              </button>
            </div>

            {/* Trending Quick Search Pills */}
            <div className="fn-quick-tags">
              <span className="fn-quick-label">Trending Botanicals:</span>
              {["Vitamin C", "Rose Mist", "Bakuchiol", "Night Cream", "Starter Kit"].map(
                (tag) => (
                  <button
                    key={tag}
                    className="fn-quick-tag"
                    onClick={() => setSearchQuery(tag)}
                  >
                    {tag}
                  </button>
                )
              )}
            </div>

            {/* Live Search Results */}
            <div className="fn-search-results">
              <div className="fn-search-count">
                {searchResults.length} {searchResults.length === 1 ? "botanical item found" : "botanical items found"}
              </div>
              <div className="fn-search-grid">
                {searchResults.map((prod) => (
                  <div
                    key={prod.id}
                    className="fn-search-item"
                    onClick={() => {
                      setSelectedProduct(prod);
                      setIsSearchOpen(false);
                    }}
                  >
                    <img src={prod.img} alt={prod.title} />
                    <div className="fn-search-info">
                      <span className="fn-search-cat">{prod.category}</span>
                      <h4>{prod.title}</h4>
                      <p>{prod.subtitle.substring(0, 65)}...</p>
                      <strong className="fn-search-price">${prod.price.toFixed(2)}</strong>
                    </div>
                    <button
                      className="fn-btn-amber-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(prod.id);
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

      {/* Hero Carousel Section (4 Dynamic Slides with Controls & Micro-Stats) */}
      <section
        className="fn-hero-carousel-section"
        onMouseEnter={() => setIsCarouselPaused(true)}
        onMouseLeave={() => setIsCarouselPaused(false)}
        aria-label="Hero Showcase Carousel"
      >
        {/* Slides Track */}
        <div className="fn-carousel-track">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`fn-carousel-slide ${idx === currentHeroSlide ? "active" : ""}`}
              style={{
                opacity: idx === currentHeroSlide ? 1 : 0,
                pointerEvents: idx === currentHeroSlide ? "auto" : "none",
              }}
            >
              <div className="fn-hero-bg">
                <img
                  src={slide.img}
                  alt={slide.badge}
                  className="fn-hero-slide-img"
                  loading={idx === 0 ? "eager" : "lazy"}
                />
                <div className="fn-hero-overlay" />
              </div>

              <div className="fn-wrap fn-hero-content">
                <div className="fn-hero-badge">
                  <Leaf size={14} className="text-amber" />
                  <span>{slide.badge}</span>
                </div>

                <h1 className="fn-hero-title">{slide.title}</h1>

                <p className="fn-hero-sub">{slide.sub}</p>

                <div className="fn-hero-actions">
                  <a href={slide.primaryHref} className="fn-btn-amber">
                    {slide.primaryCta}
                  </a>
                  {slide.isQuizCta ? (
                    <button
                      onClick={() => setIsQuizModalOpen(true)}
                      className="fn-btn-hero-ghost"
                    >
                      {slide.secondaryCta}
                    </button>
                  ) : (
                    <a href={slide.secondaryHref} className="fn-btn-hero-ghost">
                      {slide.secondaryCta}
                    </a>
                  )}
                </div>

                <div className="fn-hero-stats">
                  <div className="fn-stat-box">
                    <strong>{slide.stat1.val}</strong>
                    <span>{slide.stat1.label}</span>
                  </div>
                  <div className="fn-stat-divider" />
                  <div className="fn-stat-box">
                    <strong>{slide.stat2.val}</strong>
                    <span>{slide.stat2.label}</span>
                  </div>
                  <div className="fn-stat-divider" />
                  <div className="fn-stat-box">
                    <strong>{slide.stat3.val}</strong>
                    <span>{slide.stat3.label}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Carousel Floating Nav Arrows */}
        <button
          className="fn-carousel-arrow left"
          onClick={prevHeroSlide}
          aria-label="Previous Slide"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          className="fn-carousel-arrow right"
          onClick={nextHeroSlide}
          aria-label="Next Slide"
        >
          <ChevronRight size={22} />
        </button>

        {/* Slide Pagination Dots / Progress Bars */}
        <div className="fn-carousel-pagination" role="tablist">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              className={`fn-carousel-dot ${i === currentHeroSlide ? "active" : ""}`}
              onClick={() => setCurrentHeroSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              role="tab"
              aria-selected={i === currentHeroSlide}
            >
              <span className="fn-dot-bar" />
            </button>
          ))}
        </div>
      </section>

      {/* CLEAR COLLECTIONS (3 Large Visual Cards) */}
      <section className="fn-section fn-collections-section" id="collections">
        <div className="fn-wrap">
          <div className="fn-section-head text-center">
            <span className="fn-eyebrow">CURATED RITUALS</span>
            <h2 className="fn-section-title">CLEAR COLLECTIONS</h2>
            <p className="fn-sub">
              Formulated to work in synergy with your skin's natural circadian rhythms from dawn to twilight.
            </p>
          </div>

          <div className="fn-collections-grid">
            {clearCollections.map((col) => (
              <div key={col.id} className="fn-collection-card">
                <div className="fn-col-header-banner">
                  <span className="fn-col-micro-tag">{col.tagline}</span>
                  <h3>{col.title}</h3>
                </div>

                <div className="fn-col-img-wrap">
                  <img src={col.img} alt={col.title} loading="lazy" />
                  <div className="fn-col-overlay" />
                  <span className="fn-col-count-pill">{col.count}</span>
                </div>

                <div className="fn-col-footer">
                  <p className="fn-col-sub">{col.subtitle}</p>
                  <button
                    onClick={() => {
                      showToast(`Opening ${col.title}`);
                      const feat = document.getElementById("featured");
                      if (feat) feat.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="fn-btn-amber-sm"
                  >
                    <span>{col.btnText}</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST CUES (3 Horizontal Cards) */}
      <section className="fn-trust-section">
        <div className="fn-wrap fn-trust-grid">
          <div className="fn-trust-card">
            <div className="fn-trust-icon-box">
              <Leaf size={26} />
            </div>
            <div className="fn-trust-text">
              <h3>PLANT-BASED POTENCY</h3>
              <p>98.4% naturally-derived cold-pressed botanical essences. Certified Leaping Bunny Cruelty-Free.</p>
            </div>
          </div>

          <div className="fn-trust-card">
            <div className="fn-trust-icon-box">
              <Droplet size={26} />
            </div>
            <div className="fn-trust-text">
              <h3>DERMATOLOGIST VERIFIED</h3>
              <p>Non-comedogenic, hypoallergenic, and clinically tested on sensitive and reactive barrier types.</p>
            </div>
          </div>

          <div className="fn-trust-card">
            <div className="fn-trust-icon-box">
              <Flower2 size={26} />
            </div>
            <div className="fn-trust-text">
              <h3>SUSTAINABLY HARVESTED</h3>
              <p>Fair-trade ethical wildcrafting, sugarcane bioplastic seals, and recyclable violet UV glass.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTIONAL RHYTHM / STARTER KIT BANNER (Forest Green Spotlight) */}
      <section className="fn-promo-section" id="promo">
        <div className="fn-wrap">
          <div className="fn-promo-card">
            <div className="fn-promo-col-left">
              <span className="fn-promo-badge-tag">LIMITED RELEASE</span>
              <h3>THE STARTER KIT EVENT</h3>
              <div className="fn-mini-kit-img">
                <img src={starterKitImg} alt="The Daily Essentials Mini Kit 4-Piece Set" loading="lazy" />
              </div>
            </div>

            <div className="fn-promo-col-center">
              <small className="fn-promo-tag">CURATED BOTANICAL DISCOVERY</small>
              <h2>THE DAILY ESSENTIALS 4-PIECE MINI KIT</h2>
              <p className="fn-promo-text">
                Experience our core 4-step ritual: Cleanser, Rose Hydration Mist, Vitamin C Serum, and Nourishing Dew Cream in travel-ready amber glass.
              </p>
              <div className="fn-promo-features">
                <span>✓ 30-Day Glow Supply</span>
                <span>✓ Includes Organic Linen Pouch</span>
                <span>✓ Free Carbon-Neutral Shipping</span>
              </div>
            </div>

            <div className="fn-promo-col-right">
              <div className="fn-promo-price-box">
                <div className="fn-price-orig">$85.00 Value</div>
                <div className="fn-price-curr">$68.00</div>
                <span className="fn-discount-pill">20% OFF FIRST KIT</span>
              </div>
              <button
                onClick={() => {
                  setCart((prev) => ({ ...prev, "starter-kit": (prev["starter-kit"] || 0) + 1 }));
                  showToast("Added Daily Essentials Starter Kit ($68.00) to bag!");
                  setIsCartOpen(true);
                }}
                className="fn-btn-white-pill"
              >
                <ShoppingBag size={15} />
                <span>CLAIM STARTER OFFER</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS (4 Cards Grid with Filter Tabs) */}
      <section className="fn-section fn-featured-section" id="featured">
        <div className="fn-wrap">
          <div className="fn-section-head text-center">
            <span className="fn-eyebrow">CLEAN BOTANICAL ACTIVES</span>
            <h2 className="fn-section-title">FEATURED PRODUCTS</h2>
            <p className="fn-sub">
              Pure botanical formulas free of synthetic fragrances, parabens, silicones, and drying alcohols.
            </p>

            {/* Category Filter Tabs */}
            <div className="fn-filter-tabs">
              {["All", "Cleansers", "Toners & Mists", "Serums & Elixirs", "Moisturizers"].map((category) => (
                <button
                  key={category}
                  className={`fn-filter-tab ${selectedCategory === category ? "active" : ""}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="fn-featured-grid">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="fn-product-card"
                onClick={() => setSelectedProduct(prod)}
              >
                <div className="fn-prod-img-box">
                  <img src={prod.img} alt={prod.title} loading="lazy" />
                  <span className="fn-prod-badge">{prod.tag}</span>
                  <button
                    className={`fn-wish-btn ${wishlist[prod.id] ? "active" : ""}`}
                    onClick={(e) => handleToggleWishlist(prod.id, e)}
                    aria-label={`Save ${prod.title} to wishlist`}
                    title="Save to wishlist"
                  >
                    <Heart
                      size={16}
                      fill={wishlist[prod.id] ? "#c9823b" : "none"}
                      color={wishlist[prod.id] ? "#c9823b" : "#78716c"}
                    />
                  </button>
                  <div className="fn-quick-view-overlay">
                    <span>
                      <Eye size={14} /> Quick View
                    </span>
                  </div>
                </div>

                <div className="fn-prod-body">
                  <div className="fn-prod-meta">
                    <span className="fn-prod-cat">{prod.category}</span>
                    <div className="fn-prod-rating">
                      <Star size={13} fill="#c9823b" color="#c9823b" />
                      <span>{prod.rating}</span>
                      <small>({prod.reviews})</small>
                    </div>
                  </div>

                  <h3 className="fn-prod-title">{prod.title}</h3>
                  <p className="fn-prod-desc">{prod.subtitle}</p>
                  <span className="fn-prod-hero-botanical">{prod.heroBotanical}</span>

                  <div className="fn-prod-price-row">
                    <strong className="fn-prod-price">${prod.price.toFixed(2)}</strong>
                    <span className="fn-prod-orig">${prod.origPrice.toFixed(2)}</span>
                  </div>

                  <button
                    className="fn-btn-amber-add"
                    onClick={(e) => handleAddToCart(prod.id, e)}
                  >
                    <ShoppingBag size={14} />
                    <span>ADD TO BAG</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE ROUTINE BUILDER (4-Step Glowing Ritual Studio) */}
      <section className="fn-section fn-routine-section" id="routine-studio">
        <div className="fn-wrap">
          <div className="fn-section-head text-center">
            <span className="fn-eyebrow">CUSTOM BOTANICAL REGIMEN</span>
            <h2 className="fn-section-title">BUILD YOUR 4-STEP GLOW RITUAL</h2>
            <p className="fn-sub">
              Personalize each layer of your morning and evening skincare regimen. Bundle all 4 steps to receive an instant 15% discount.
            </p>
          </div>

          <div className="fn-routine-grid">
            {/* Step Selection Controls */}
            <div className="fn-routine-steps">
              {/* Step 1 Cleanse */}
              <div className="fn-step-box">
                <div className="fn-step-badge">
                  <span>STEP 1</span> • CLEANSE & PURIFY
                </div>
                <div className="fn-step-options">
                  {[
                    { name: "Botanical Gel Cleanser", price: 48, img: prodCleanserImg, desc: "Gentle green tea antioxidant foaming wash" },
                    { name: "Nourishing Oil-Milk Cleanser", price: 48, img: prodCleanserImg, desc: "Rich sweet almond & jojoba melt" },
                  ].map((opt) => (
                    <button
                      key={opt.name}
                      className={`fn-step-btn ${step1Choice.name === opt.name ? "active" : ""}`}
                      onClick={() => setStep1Choice(opt)}
                    >
                      <div className="fn-step-btn-info">
                        <strong>{opt.name}</strong>
                        <small>{opt.desc}</small>
                      </div>
                      <span className="fn-step-price">${opt.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2 Tone */}
              <div className="fn-step-box">
                <div className="fn-step-badge">
                  <span>STEP 2</span> • TONE & PREP
                </div>
                <div className="fn-step-options">
                  {[
                    { name: "Hydrating Rose Mist", price: 48, img: prodTonerImg, desc: "Damask rosewater & willow bark pore refiner" },
                    { name: "Clarifying Green Tea Essence", price: 48, img: prodTonerImg, desc: "Balancing probiotic ferment & zinc" },
                  ].map((opt) => (
                    <button
                      key={opt.name}
                      className={`fn-step-btn ${step2Choice.name === opt.name ? "active" : ""}`}
                      onClick={() => setStep2Choice(opt)}
                    >
                      <div className="fn-step-btn-info">
                        <strong>{opt.name}</strong>
                        <small>{opt.desc}</small>
                      </div>
                      <span className="fn-step-price">${opt.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3 Treat */}
              <div className="fn-step-box">
                <div className="fn-step-badge">
                  <span>STEP 3</span> • TARGET & TREAT
                </div>
                <div className="fn-step-options">
                  {[
                    { name: "Vitamin C Glow Serum", price: 48, img: prodSerumImg, desc: "Kakadu plum & ferulic acid radiance booster" },
                    { name: "Bakuchiol Botanical Renewal Elixir", price: 48, img: prodSerumImg, desc: "Ayurvedic plant retinol alternative" },
                  ].map((opt) => (
                    <button
                      key={opt.name}
                      className={`fn-step-btn ${step3Choice.name === opt.name ? "active" : ""}`}
                      onClick={() => setStep3Choice(opt)}
                    >
                      <div className="fn-step-btn-info">
                        <strong>{opt.name}</strong>
                        <small>{opt.desc}</small>
                      </div>
                      <span className="fn-step-price">${opt.price}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 4 Seal */}
              <div className="fn-step-box">
                <div className="fn-step-badge">
                  <span>STEP 4</span> • MOISTURIZE & SEAL
                </div>
                <div className="fn-step-options">
                  {[
                    { name: "Nourishing Night Cream", price: 48, img: prodCreamImg, desc: "Squalane & ceramide rich lipid restoration" },
                    { name: "Daily Barrier Whipped Dew Cream", price: 48, img: prodCreamImg, desc: "Ultralight water-cream with tremella mushroom" },
                  ].map((opt) => (
                    <button
                      key={opt.name}
                      className={`fn-step-btn ${step4Choice.name === opt.name ? "active" : ""}`}
                      onClick={() => setStep4Choice(opt)}
                    >
                      <div className="fn-step-btn-info">
                        <strong>{opt.name}</strong>
                        <small>{opt.desc}</small>
                      </div>
                      <span className="fn-step-price">${opt.price}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Live Visual Summary Card */}
            <div className="fn-routine-summary">
              <span className="fn-summary-tag">CUSTOM BUNDLE SUMMARY</span>
              <h3>YOUR 4-STEP GLOW SPEC</h3>

              {/* Miniature Product Previews */}
              <div className="fn-routine-visual-tray">
                <div className="fn-vis-slot">
                  <img src={step1Choice.img} alt={step1Choice.name} />
                  <span>1. Cleanse</span>
                </div>
                <div className="fn-vis-slot">
                  <img src={step2Choice.img} alt={step2Choice.name} />
                  <span>2. Tone</span>
                </div>
                <div className="fn-vis-slot">
                  <img src={step3Choice.img} alt={step3Choice.name} />
                  <span>3. Treat</span>
                </div>
                <div className="fn-vis-slot">
                  <img src={step4Choice.img} alt={step4Choice.name} />
                  <span>4. Seal</span>
                </div>
              </div>

              <div className="fn-summary-list">
                <div className="fn-sum-item">
                  <span>1. Cleanse:</span>
                  <strong>{step1Choice.name}</strong>
                </div>
                <div className="fn-sum-item">
                  <span>2. Tone:</span>
                  <strong>{step2Choice.name}</strong>
                </div>
                <div className="fn-sum-item">
                  <span>3. Treat:</span>
                  <strong>{step3Choice.name}</strong>
                </div>
                <div className="fn-sum-item">
                  <span>4. Seal:</span>
                  <strong>{step4Choice.name}</strong>
                </div>
              </div>

              <div className="fn-sum-pricing">
                <div className="fn-sum-row">
                  <span>Regular Total (4 Items):</span>
                  <span className="fn-strike">$192.00</span>
                </div>
                <div className="fn-sum-row highlight">
                  <span>15% Bundle Savings:</span>
                  <span>-$28.80</span>
                </div>
                <div className="fn-sum-total-row">
                  <span>Ritual Bundle Price:</span>
                  <strong>$163.20</strong>
                </div>

                <button
                  onClick={() => {
                    setCart((prev) => ({
                      ...prev,
                      "custom-routine": (prev["custom-routine"] || 0) + 1,
                    }));
                    showToast("Custom 4-Step Botanical Ritual added to your bag!");
                    setIsCartOpen(true);
                  }}
                  className="fn-btn-amber-full"
                >
                  <ShoppingBag size={16} />
                  <span>ADD 4-STEP RITUAL • $163.20</span>
                </button>

                <div className="fn-summary-guarantee">
                  <ShieldCheck size={14} className="text-amber" />
                  <span>60-Day Radiance & Skin Barrier Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOTANICAL INGREDIENTS GLOSSARY */}
      <section className="fn-section fn-ingredients-section" id="ingredients">
        <div className="fn-wrap">
          <div className="fn-section-head text-center">
            <span className="fn-eyebrow">CONSCIOUS SOURCING</span>
            <h2 className="fn-section-title">OUR POTENT BOTANICALS</h2>
            <p className="fn-sub">
              Every formulation is cold-extracted to preserve delicate plant antioxidants, volatile terpenes, and active lipids.
            </p>
          </div>

          <div className="fn-ingredients-grid">
            {botanicalIngredients.map((ing) => (
              <div
                key={ing.id}
                className="fn-ing-card"
                onClick={() => setSelectedIngredient(ing)}
              >
                <div className="fn-ing-header">
                  <Leaf size={18} className="text-amber" />
                  <h4>{ing.name}</h4>
                </div>
                <span className="fn-ing-scientific">{ing.scientific}</span>
                <small className="fn-ing-origin">Ethically Sourced: {ing.origin}</small>
                <p>{ing.benefit}</p>
                <div className="fn-ing-footer">
                  <span>Found in: <strong>{ing.usedIn}</strong></span>
                  <span className="fn-ing-learn">Learn More ➔</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKINCARE GUIDES (2 Rich Editorial Cards) */}
      <section className="fn-section fn-guides-section" id="journal">
        <div className="fn-wrap">
          <div className="fn-section-head text-center">
            <span className="fn-eyebrow">BOTANICAL WISDOM</span>
            <h2 className="fn-section-title">THE FIELDNOTE JOURNAL</h2>
            <p className="fn-sub">
              Dermatologist insights on layer chemistry, seasonal barrier protection, and holistic botanical skin health.
            </p>
          </div>

          <div className="fn-guides-grid">
            {/* Guide 1 */}
            <div className="fn-guide-card">
              <div className="fn-guide-img">
                <img src={guideRitualImg} alt="Flatlay of botanical skincare bottles and herbs" loading="lazy" />
                <span className="fn-guide-badge">Layering Rituals</span>
              </div>
              <div className="fn-guide-body">
                <div className="fn-guide-meta">6 Min Read • Botanical Practice</div>
                <h3>BUILDING YOUR DAILY RITUAL: A STEP-BY-STEP</h3>
                <p>
                  How to properly layer light flower hydrosols, antioxidant water serums, and lipid-rich oils so every molecule absorbs without barrier occlusion.
                </p>
                <button
                  onClick={() => setActiveGuideArticle("ritual")}
                  className="fn-guide-link"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* Guide 2 */}
            <div className="fn-guide-card">
              <div className="fn-guide-img">
                <img src={guideSkinImg} alt="Woman applying botanical serum with dropper pipette" loading="lazy" />
                <span className="fn-guide-badge">Barrier Health</span>
              </div>
              <div className="fn-guide-body">
                <div className="fn-guide-meta">8 Min Read • Skin Biology</div>
                <h3>UNDERSTANDING YOUR SKIN'S NEEDS: A BOTANICAL APPROACH</h3>
                <p>
                  Discover how adaptogenic bio-ferments, plant squalane, and chamomile polyphenols calm cellular inflammation and restore lipid balance.
                </p>
                <button
                  onClick={() => setActiveGuideArticle("skin")}
                  className="fn-guide-link"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer (Deep Forest Green) */}
      <footer className="fn-footer">
        <div className="fn-wrap fn-footer-grid">
          {/* Col 1: Brand & Newsletter */}
          <div className="fn-footer-brand-col">
            <div className="fn-footer-brand">
              <FieldNoteLogo size={26} />
              <span className="fn-brand-title">FieldNote</span>
            </div>
            <h4>JOIN THE FIELDNOTE COMMUNITY:</h4>
            <p>Subscribe for early botanical harvest drops, skincare wisdom, and $15 off your first order.</p>
            <form
              className="fn-news-form"
              onSubmit={(e) => {
                e.preventDefault();
                showToast("Subscribed! Use code GLOW15 for $15 off your ritual.");
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
          </div>

          {/* Col 2: Customer Service */}
          <div className="fn-footer-col">
            <h4>CUSTOMER SERVICE</h4>
            <a href="#shipping" onClick={(e) => { e.preventDefault(); showToast("Free 2-Day Shipping on orders over $100"); }}>
              Free Carbon-Neutral Shipping
            </a>
            <a href="#trial" onClick={(e) => { e.preventDefault(); showToast("60-Day Radiance Trial Guarantee"); }}>
              60-Day Skin Happiness Trial
            </a>
            <a href="#quiz" onClick={(e) => { e.preventDefault(); setIsQuizModalOpen(true); }}>
              Skin Diagnostic Quiz
            </a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); showToast("Recycling & Violet Glass Care FAQ"); }}>
              Packaging Recycling Program
            </a>
          </div>

          {/* Col 3: Collections */}
          <div className="fn-footer-col">
            <h4>RITUALS & GUIDES</h4>
            <a href="#collections">The Morning Awakening</a>
            <a href="#collections">The Evening Restoration</a>
            <a href="#collections">Targeted Bio-Treatments</a>
            <a href="#routine-studio">4-Step Custom Regimen Studio</a>
            <Link to="/ecommerce" className="fn-hub-footer-link">
              ← Return to All Stores
            </Link>
          </div>

          {/* Col 4: Social */}
          <div className="fn-footer-col">
            <h4>CONNECT</h4>
            <div className="fn-social-icons">
              <a href="#instagram" aria-label="Instagram" onClick={(e) => { e.preventDefault(); showToast("Instagram @FieldNoteSkincare"); }}>
                Instagram
              </a>
              <a href="#pinterest" aria-label="Pinterest" onClick={(e) => { e.preventDefault(); showToast("Pinterest @FieldNoteBotanicals"); }}>
                Pinterest
              </a>
              <a href="#youtube" aria-label="YouTube" onClick={(e) => { e.preventDefault(); showToast("YouTube @FieldNoteSkincare"); }}>
                YouTube
              </a>
            </div>
            <p className="fn-social-sub">Made with cold-pressed botanical essences.</p>
          </div>
        </div>

        {/* Subfooter */}
        <div className="fn-subfooter">
          <div className="fn-wrap fn-subfooter-inner">
            <p>© 2024 FieldNote Skincare Co. All Rights Reserved. 100% Vegan & Leaping Bunny Certified.</p>
            <div className="fn-subfooter-links">
              <a href="#privacy" onClick={(e) => { e.preventDefault(); showToast("Privacy Policy"); }}>Privacy</a>
              <a href="#terms" onClick={(e) => { e.preventDefault(); showToast("Terms of Service"); }}>Terms</a>
              <a href="#accessibility" onClick={(e) => { e.preventDefault(); showToast("Accessibility Statement"); }}>Accessibility</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE VERSION STICKY BOTTOM MENU (Shop, Search, Quiz, Wishlist, Bag) */}
      <nav className="fn-mobile-bottom-nav" aria-label="Mobile Bottom Navigation">
        <a href="#featured" className="fn-bottom-btn" title="Shop Catalog">
          <Compass size={20} />
          <span>Shop</span>
        </a>

        <button
          className="fn-bottom-btn"
          onClick={() => setIsSearchOpen(true)}
          title="Search"
        >
          <Search size={20} />
          <span>Search</span>
        </button>

        <button
          className="fn-bottom-btn fn-bottom-highlight"
          onClick={() => setIsQuizModalOpen(true)}
          title="Skin Quiz"
        >
          <div className="fn-bottom-icon-wrap">
            <Droplet size={20} />
          </div>
          <span>Quiz</span>
        </button>

        <button
          className="fn-bottom-btn"
          onClick={() => setIsWishlistOpen(true)}
          title="Wishlist"
        >
          <div className="fn-badge-wrap">
            <Heart size={20} />
            {totalWishlistCount > 0 && <span className="fn-badge">{totalWishlistCount}</span>}
          </div>
          <span>Saved</span>
        </button>

        <button
          className="fn-bottom-btn"
          onClick={() => setIsCartOpen(true)}
          title="Shopping Bag"
        >
          <div className="fn-badge-wrap">
            <ShoppingBag size={20} />
            {totalCartCount > 0 && <span className="fn-badge">{totalCartCount}</span>}
          </div>
          <span>Bag</span>
        </button>
      </nav>

      {/* Slide-out Cart Drawer */}
      <div
        className={`fn-drawer-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`fn-cart-drawer ${isCartOpen ? "open" : ""}`} role="dialog" aria-label="Shopping Bag">
        <div className="fn-cart-head">
          <h3>SHOPPING BAG ({totalCartCount})</h3>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        <div className="fn-cart-body">
          {totalCartCount > 0 ? (
            <div className="fn-cart-list">
              {Object.entries(cart).map(([id, qty]) => {
                const prod = featuredProducts.find((p) => p.id === id);
                let title = prod
                  ? prod.title
                  : id === "starter-kit"
                  ? "The Daily Essentials Mini Kit"
                  : "Custom 4-Step Glow Ritual";
                let price = prod ? prod.price : id === "starter-kit" ? 68.0 : 163.2;
                let img = prod ? prod.img : id === "starter-kit" ? starterKitImg : heroBotanicalImg;

                return (
                  <div key={id} className="fn-cart-item">
                    <img src={img} alt={title} />
                    <div className="fn-cart-item-info">
                      <h4>{title}</h4>
                      <strong className="fn-cart-item-price">${(price * qty).toFixed(2)}</strong>
                      <div className="fn-cart-qty-row">
                        <button onClick={() => handleUpdateCartQty(id, -1)} aria-label="Decrease quantity">
                          <Minus size={12} />
                        </button>
                        <span>{qty}</span>
                        <button onClick={() => handleUpdateCartQty(id, 1)} aria-label="Increase quantity">
                          <Plus size={12} />
                        </button>
                        <button
                          className="fn-trash-link"
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
            <div className="fn-empty-cart">
              <ShoppingBag size={42} className="text-muted" />
              <h4>Your bag is empty</h4>
              <p>Explore botanically active cleansers, toners, and antioxidant serums.</p>
              <button
                className="fn-btn-amber-sm mt-2"
                onClick={() => {
                  setIsCartOpen(false);
                  const feat = document.getElementById("featured");
                  if (feat) feat.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Explore Bestsellers
              </button>
            </div>
          )}
        </div>

        {totalCartCount > 0 && (
          <div className="fn-cart-foot">
            <div className="fn-cart-total-row">
              <span>Subtotal:</span>
              <strong>${cartSubtotal.toFixed(2)}</strong>
            </div>
            <p className="fn-shipping-calc">
              {cartSubtotal >= 100 ? (
                <span className="text-green">✓ Free 2-Day Carbon-Neutral Shipping Unlocked!</span>
              ) : (
                `Add $${(100 - cartSubtotal).toFixed(2)} more for Free Shipping!`
              )}
            </p>
            <button
              onClick={() => {
                setIsCartOpen(false);
                showToast("Proceeding to Secure Botanical Checkout...");
              }}
              className="fn-btn-amber-full"
            >
              PROCEED TO CHECKOUT • ${cartSubtotal.toFixed(2)}
            </button>
          </div>
        )}
      </div>

      {/* Wishlist Drawer */}
      <div
        className={`fn-drawer-overlay ${isWishlistOpen ? "open" : ""}`}
        onClick={() => setIsWishlistOpen(false)}
      />
      <div className={`fn-cart-drawer ${isWishlistOpen ? "open" : ""}`} role="dialog" aria-label="Saved Botanicals">
        <div className="fn-cart-head">
          <h3>SAVED BOTANICALS ({totalWishlistCount})</h3>
          <button onClick={() => setIsWishlistOpen(false)} aria-label="Close wishlist">
            <X size={20} />
          </button>
        </div>

        <div className="fn-cart-body">
          {totalWishlistCount > 0 ? (
            <div className="fn-cart-list">
              {Object.entries(wishlist)
                .filter(([_, a]) => a)
                .map(([id]) => {
                  const prod = featuredProducts.find((p) => p.id === id);
                  if (!prod) return null;
                  return (
                    <div key={id} className="fn-cart-item">
                      <img src={prod.img} alt={prod.title} />
                      <div className="fn-cart-item-info">
                        <h4>{prod.title}</h4>
                        <strong>${prod.price.toFixed(2)}</strong>
                        <div className="fn-wish-actions">
                          <button
                            className="fn-btn-amber-sm"
                            onClick={() => {
                              handleAddToCart(id);
                              handleToggleWishlist(id);
                            }}
                          >
                            Move to Bag
                          </button>
                          <button
                            className="fn-trash-link"
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
            <div className="fn-empty-cart">
              <Heart size={42} className="text-muted" />
              <h4>No items saved</h4>
              <p>Tap the heart icon on any botanical to add it to your wishlist.</p>
            </div>
          )}
        </div>
      </div>

      {/* Quick View Product Modal */}
      {selectedProduct && (
        <div className="fn-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="fn-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="fn-modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close view"
            >
              <X size={20} />
            </button>

            <div className="fn-modal-grid">
              <div className="fn-modal-img">
                <img src={selectedProduct.img} alt={selectedProduct.title} />
              </div>
              <div className="fn-modal-info">
                <span className="fn-pill">{selectedProduct.category}</span>
                <h2>{selectedProduct.title}</h2>
                <div className="fn-modal-rating-row">
                  <Star size={14} fill="#c9823b" color="#c9823b" />
                  <strong>{selectedProduct.rating}</strong>
                  <span>({selectedProduct.reviews} verified reviews)</span>
                </div>
                <p className="fn-modal-desc">{selectedProduct.subtitle}</p>

                <div className="fn-modal-botanical-tag">
                  <Leaf size={14} className="text-amber" />
                  <span>Key Botanical: <strong>{selectedProduct.heroBotanical}</strong></span>
                </div>

                <div className="fn-modal-price-row">
                  <strong>${selectedProduct.price.toFixed(2)}</strong>
                  <span>${selectedProduct.origPrice.toFixed(2)}</span>
                  <small className="fn-volume-tag">{selectedProduct.volume}</small>
                </div>

                <div className="fn-features-list">
                  {selectedProduct.benefits.map((b, i) => (
                    <div key={i}>
                      <Check size={14} className="text-amber" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>

                <div className="fn-modal-actions">
                  <button
                    className="fn-btn-amber-full"
                    onClick={() => {
                      handleAddToCart(selectedProduct.id);
                      setSelectedProduct(null);
                    }}
                  >
                    <ShoppingBag size={15} />
                    <span>ADD TO BAG • ${selectedProduct.price.toFixed(2)}</span>
                  </button>
                  <button
                    className="fn-btn-outline-pill full-w"
                    onClick={() => handleToggleWishlist(selectedProduct.id)}
                  >
                    <Heart size={14} />
                    <span>{wishlist[selectedProduct.id] ? "Saved in Wishlist" : "Save to Wishlist"}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Interactive Skin Diagnostic & Regimen Quiz Modal */}
      {isQuizModalOpen && (
        <div className="fn-modal-backdrop" onClick={() => setIsQuizModalOpen(false)}>
          <div className="fn-modal-card fn-quiz-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="fn-modal-close"
              onClick={() => setIsQuizModalOpen(false)}
              aria-label="Close quiz"
            >
              <X size={20} />
            </button>

            <div className="fn-quiz-content">
              <span className="fn-eyebrow">FIELDNOTE BOTANICAL LABS</span>
              <h2>FIND YOUR PERSONALIZED GLOW RITUAL</h2>
              <p>
                Answer two quick questions to discover the herbal extracts and biocompatible lipids tailored for your unique skin barrier.
              </p>

              <div className="fn-quiz-form">
                <div className="fn-form-group">
                  <label>1. What is your current skin type?</label>
                  <div className="fn-quiz-pill-group">
                    {["Dry to Dehydrated", "Normal / Balanced", "Combination", "Oily & Congested", "Sensitive & Reactive"].map(
                      (type) => (
                        <button
                          key={type}
                          type="button"
                          className={`fn-quiz-pill ${quizSkinType === type ? "active" : ""}`}
                          onClick={() => setQuizSkinType(type)}
                        >
                          {type}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div className="fn-form-group">
                  <label>2. What is your primary botanical goal?</label>
                  <div className="fn-quiz-pill-group">
                    {[
                      "Radiance & Brightening",
                      "Deep Barrier Repair",
                      "Redness & Calming",
                      "Firmness & Elasticity",
                    ].map((goal) => (
                      <button
                        key={goal}
                        type="button"
                        className={`fn-quiz-pill ${quizPrimaryGoal === goal ? "active" : ""}`}
                        onClick={() => setQuizPrimaryGoal(goal)}
                      >
                        {goal}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="fn-quiz-result-box">
                  <h4>Recommended Botanical Match:</h4>
                  <div className="fn-matched-pair">
                    <img src={prodSerumImg} alt="Serum" />
                    <div>
                      <strong>Vitamin C Glow Serum + Hydrating Rose Mist</strong>
                      <p>
                        High-potency Kakadu Plum with soothing Damask rosewater to brighten {quizSkinType.toLowerCase()} skin while protecting moisture barriers.
                      </p>
                    </div>
                  </div>
                </div>

                <button
                  className="fn-btn-amber-full"
                  onClick={() => {
                    handleAddToCart("serum");
                    handleAddToCart("toner");
                    setIsQuizModalOpen(false);
                    showToast("Matched & added Vitamin C Serum + Rose Mist duo to bag!");
                    setIsCartOpen(true);
                  }}
                >
                  ADD RECOMMENDED DUO TO BAG ($96.00)
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Ingredient Detail Modal */}
      {selectedIngredient && (
        <div className="fn-modal-backdrop" onClick={() => setSelectedIngredient(null)}>
          <div className="fn-modal-card fn-ingredient-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="fn-modal-close"
              onClick={() => setSelectedIngredient(null)}
              aria-label="Close ingredient view"
            >
              <X size={20} />
            </button>

            <div className="fn-ing-modal-content">
              <span className="fn-eyebrow">BOTANICAL MONOGRAPH</span>
              <h2>{selectedIngredient.name}</h2>
              <span className="fn-ing-modal-scientific">{selectedIngredient.scientific}</span>

              <div className="fn-ing-modal-grid">
                <div className="fn-ing-stat-box">
                  <strong>Harvest Origin</strong>
                  <span>{selectedIngredient.origin}</span>
                </div>
                <div className="fn-ing-stat-box">
                  <strong>Key Extraction</strong>
                  <span>Cold-Pressed Supercritical CO2</span>
                </div>
              </div>

              <p className="fn-ing-modal-body">{selectedIngredient.benefit}</p>

              <div className="fn-ing-modal-product">
                <span>Featured In Our Flagship Formula:</span>
                <strong>{selectedIngredient.usedIn}</strong>
              </div>

              <button
                className="fn-btn-amber-full"
                onClick={() => {
                  setSelectedIngredient(null);
                  const prod = featuredProducts.find((p) => p.title.includes(selectedIngredient.usedIn.split(" ")[0]));
                  if (prod) setSelectedProduct(prod);
                }}
              >
                View Formula Details
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rich Skincare Guide Reader Modal */}
      {activeGuideArticle && (
        <div className="fn-modal-backdrop" onClick={() => setActiveGuideArticle(null)}>
          <div className="fn-modal-card fn-guide-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="fn-modal-close"
              onClick={() => setActiveGuideArticle(null)}
              aria-label="Close guide"
            >
              <X size={20} />
            </button>

            {activeGuideArticle === "ritual" ? (
              <article className="fn-article-content">
                <span className="fn-eyebrow">RITUAL DISCIPLINE</span>
                <h2>BUILDING YOUR DAILY RITUAL: A STEP-BY-STEP</h2>
                <div className="fn-article-meta">
                  <span>By Dr. Maya Lin, Botanical Chemist</span>
                  <span className="fn-sep">•</span>
                  <span>Published in The FieldNote Journal</span>
                </div>

                <img
                  src={guideRitualImg}
                  alt="Skincare layering ritual flatlay"
                  className="fn-article-hero-img"
                />

                <div className="fn-article-body">
                  <p className="fn-lead">
                    In holistic botanical skincare, sequence matters just as much as formulation.
                    Layering by molecular density ensures each active penetrates without evaporating or causing pilling.
                  </p>

                  <h3>Step 1: Cleanse with Low-Foam Surfactants</h3>
                  <p>
                    Harsh foaming cleansers with alkaline sulfates strip the acid mantle, leading to compensatory oil production.
                    Our Botanical Gel Cleanser operates at pH 5.5, respecting your natural microbiome.
                  </p>

                  <h3>Step 2: Hydrosol Drenching (Never Skip Tone)</h3>
                  <p>
                    Dry skin acts like a dehydrated sponge — serums sit on top rather than absorbing.
                    Dampen skin with 3–4 pumps of Damask Rose Mist before applying antioxidant serums.
                  </p>

                  <h3>Step 3: High-Potency Vitamin C Drops</h3>
                  <p>
                    Apply 3 to 4 drops of Kakadu Plum Vitamin C Serum directly to damp skin. Pat gently with fingertips;
                    avoid aggressive rubbing which can inflame capillaries.
                  </p>

                  <h3>Step 4: Lipid Barrier Sealing</h3>
                  <p>
                    Warm a pea-sized amount of Nourishing Night Cream between clean palms and press onto face, neck,
                    and décolletage to seal in moisture all night long.
                  </p>
                </div>

                <div className="fn-article-foot">
                  <button
                    className="fn-btn-amber-full"
                    onClick={() => {
                      setActiveGuideArticle(null);
                      handleAddToCart("starter-kit");
                    }}
                  >
                    Get The 4-Piece Daily Essentials Kit ($68.00)
                  </button>
                </div>
              </article>
            ) : (
              <article className="fn-article-content">
                <span className="fn-eyebrow">BARRIER RESTORATION</span>
                <h2>UNDERSTANDING YOUR SKIN'S NEEDS: A BOTANICAL APPROACH</h2>
                <div className="fn-article-meta">
                  <span>By Elena Rostova, Holistic Esthetician</span>
                  <span className="fn-sep">•</span>
                  <span>Published in The FieldNote Journal</span>
                </div>

                <img
                  src={guideSkinImg}
                  alt="Dewy skin with leaf shadow"
                  className="fn-article-hero-img"
                />

                <div className="fn-article-body">
                  <p className="fn-lead">
                    Modern skin concerns — chronic sensitivity, dryness, and breakouts — are frequently symptoms
                    of a compromised stratum corneum rather than inherent skin flaws.
                  </p>

                  <h3>The Power of Biocompatible Lipids</h3>
                  <p>
                    Sugarcane squalane closely mimics the chemical structure of human sebum. When applied,
                    it integrates into the lipid matrix seamlessly, calming redness without triggering congestion.
                  </p>

                  <h3>Adaptogenic Calming</h3>
                  <p>
                    Botanicals like wild chamomile and German blue tansy contain chamazulene and bisabolol,
                    which soothe inflammation caused by environmental pollutants and screen light stress.
                  </p>
                </div>

                <div className="fn-article-foot">
                  <button
                    className="fn-btn-amber-full"
                    onClick={() => {
                      setActiveGuideArticle(null);
                      handleAddToCart("cream");
                    }}
                  >
                    Add Squalane Night Cream to Bag ($48.00)
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

export default FieldNoteSkincare;
