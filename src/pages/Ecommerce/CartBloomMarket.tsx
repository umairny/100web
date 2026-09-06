import React, { useState, useEffect } from "react";
import {
  ArrowRight,
  Box,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CreditCard,
  Eye,
  Gift,
  Heart,
  HelpCircle,
  Layers,
  Leaf,
  Minus,
  Package,
  Plus,
  RefreshCw,
  Search,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Sparkles,
  Star,
  Trash2,
  Truck,
  User,
  X,
} from "lucide-react";
import "./CartBloomMarket.css";

// Photo Assets
import heroGiftBoxImg from "../../assets/optimized/ecommerce/cartbloom/hero-gift-box.webp";
import catGiftsImg from "../../assets/optimized/ecommerce/cartbloom/cat-gifts.webp";
import catHomeImg from "../../assets/optimized/ecommerce/cartbloom/cat-home.webp";
import catBeautyImg from "../../assets/optimized/ecommerce/cartbloom/cat-beauty.webp";
import catFoodImg from "../../assets/optimized/ecommerce/cartbloom/cat-food.webp";
import catOfficeImg from "../../assets/optimized/ecommerce/cartbloom/cat-office.webp";
import catNewImg from "../../assets/optimized/ecommerce/cartbloom/cat-new.webp";

import prodCandleImg from "../../assets/optimized/ecommerce/cartbloom/prod-candle.webp";
import prodMugImg from "../../assets/optimized/ecommerce/cartbloom/prod-mug.webp";
import prodTeaImg from "../../assets/optimized/ecommerce/cartbloom/prod-tea.webp";
import prodSkincareImg from "../../assets/optimized/ecommerce/cartbloom/prod-skincare.webp";
import prodJournalImg from "../../assets/optimized/ecommerce/cartbloom/prod-journal.webp";
import prodNutsImg from "../../assets/optimized/ecommerce/cartbloom/prod-nuts.webp";

import bannerBuildBoxImg from "../../assets/optimized/ecommerce/cartbloom/banner-build-box.webp";
import bannerBundleSaveImg from "../../assets/optimized/ecommerce/cartbloom/banner-bundle-save.webp";
import bannerFreeShippingImg from "../../assets/optimized/ecommerce/cartbloom/banner-free-shipping.webp";
import newsletterGiftImg from "../../assets/optimized/ecommerce/cartbloom/newsletter-gift.webp";

import avatarSarahImg from "../../assets/optimized/ecommerce/cartbloom/avatar-sarah.webp";
import avatarJasonImg from "../../assets/optimized/ecommerce/cartbloom/avatar-jason.webp";
import avatarPriyaImg from "../../assets/optimized/ecommerce/cartbloom/avatar-priya.webp";

// CartBloom Plant Pot Logo SVG
function CartBloomLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <path
        d="M14 24H22L20.5 32H15.5L14 24Z"
        fill="#8c9a6f"
        stroke="#4a5538"
        strokeWidth="1.5"
      />
      <path
        d="M18 24V11"
        stroke="#4a5538"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M18 16C14 14 11 9 13 5C17 5 18 11 18 16Z"
        fill="#4a5538"
      />
      <path
        d="M18 14C22 12 25 7 23 3C19 3 18 9 18 14Z"
        fill="#8c9a6f"
      />
      <path
        d="M18 20C13 18 10 14 12 10C15 11 17 16 18 20Z"
        fill="#4a5538"
        opacity="0.8"
      />
      <path
        d="M18 19C23 17 26 13 24 9C21 10 19 15 18 19Z"
        fill="#8c9a6f"
        opacity="0.8"
      />
    </svg>
  );
}

// Categories Dataset
const categoriesData = [
  { id: "gifts", name: "Gifts", count: "120+ Items", img: catGiftsImg },
  { id: "home", name: "Home & Living", count: "200+ Items", img: catHomeImg },
  { id: "beauty", name: "Beauty & Wellness", count: "180+ Items", img: catBeautyImg },
  { id: "food", name: "Food & Beverages", count: "150+ Items", img: catFoodImg },
  { id: "office", name: "Office & Stationery", count: "160+ Items", img: catOfficeImg },
  { id: "new", name: "New Arrivals", count: "50+ Items", img: catNewImg },
];

// Best Deals Products Dataset
const dealsProducts = [
  {
    id: "candle",
    title: "Aromatherapy Soy Candle",
    subtitle: "Lavender Calm",
    salePrice: 18.99,
    origPrice: 24.99,
    rating: 4.7,
    reviews: 220,
    img: prodCandleImg,
    category: "Home & Living",
    tag: "Bestseller",
    description: "100% natural hand-poured soy wax candle infused with calming French lavender, soothing vanilla, and natural cotton wick for a 50-hour clean burn.",
  },
  {
    id: "mug",
    title: "Premium Ceramic Mug",
    subtitle: "Minimalist Beige",
    salePrice: 14.99,
    origPrice: 19.99,
    rating: 4.6,
    reviews: 210,
    img: prodMugImg,
    category: "Home & Living",
    tag: "Popular",
    description: "Handcrafted stoneware coffee and tea mug with ergonomic comfort handle, lead-free matte speckle glaze finish, and 14oz capacity.",
  },
  {
    id: "tea",
    title: "Herbal Tea Collection",
    subtitle: "Assorted Pack (30 Bags)",
    salePrice: 16.99,
    origPrice: 22.99,
    rating: 4.8,
    reviews: 340,
    img: prodTeaImg,
    category: "Food & Beverages",
    tag: "Staff Pick",
    description: "Organic hand-harvested blend of Egyptian chamomile, Moroccan peppermint, and golden lemon ginger in biodegradable pyramid sachets.",
  },
  {
    id: "skincare",
    title: "Skincare Gift Set",
    subtitle: "Radiance Routine",
    salePrice: 34.99,
    origPrice: 49.99,
    rating: 4.7,
    reviews: 180,
    img: prodSkincareImg,
    category: "Beauty & Wellness",
    tag: "Save 30%",
    description: "Gentle daily botanical cleanser, rosewater hydrating toner, and vitamin C antioxidant glow serum in a sustainable keepsake gift box.",
  },
  {
    id: "journal",
    title: "Eco Friendly Journal",
    subtitle: "Lined Notebook",
    salePrice: 12.99,
    origPrice: 14.99,
    rating: 4.8,
    reviews: 95,
    img: prodJournalImg,
    category: "Office & Stationery",
    tag: "Eco Choice",
    description: "Hardcover linen notebook made with 100% recycled acid-free ivory paper, satin ribbon bookmark, inner pocket, and lay-flat binding.",
  },
  {
    id: "nuts",
    title: "Gourmet Nuts Jar",
    subtitle: "Honey Roasted Mix",
    salePrice: 15.99,
    origPrice: 21.99,
    rating: 4.6,
    reviews: 310,
    img: prodNutsImg,
    category: "Food & Beverages",
    tag: "Gourmet",
    description: "Artisan small-batch honey-glazed roasted cashews, California almonds, and Georgia pecans in a reusable airtight glass apothecary jar.",
  },
];

// Custom Gift Box Items Options
const boxOptions = [
  { id: "box-kraft", name: "Natural Kraft Linen", price: 6.0, color: "#d2b48c" },
  { id: "box-olive", name: "Botanical Sage Olive", price: 8.0, color: "#424b33" },
  { id: "box-blush", name: "Rosewood Blush", price: 8.0, color: "#e8b4b8" },
  { id: "box-midnight", name: "Midnight Navy & Gold", price: 10.0, color: "#1e293b" },
];

const customizableItems = [
  { id: "c-candle", name: "Lavender Soy Candle", price: 14.0, img: prodCandleImg },
  { id: "c-tea", name: "Chamomile Herbal Tea", price: 12.0, img: prodTeaImg },
  { id: "c-mug", name: "Stoneware Ceramic Mug", price: 12.0, img: prodMugImg },
  { id: "c-skincare", name: "Botanical Radiance Set", price: 24.0, img: prodSkincareImg },
  { id: "c-journal", name: "Linen Pocket Journal", price: 10.0, img: prodJournalImg },
  { id: "c-nuts", name: "Honey Glazed Nut Jar", price: 12.0, img: prodNutsImg },
];

// FAQs Dataset
const cartBloomFaqs = [
  {
    q: "Can I include a handwritten gift message?",
    a: "Absolutely! Every gift box includes a complimentary heavy-cardstock greeting card. During checkout, type your personal message, and our team will handwrite it in elegant calligraphy.",
  },
  {
    q: "Can I schedule a delivery date for a specific birthday or holiday?",
    a: "Yes. In the shopping cart or checkout page, select 'Hold for Specific Delivery Date' and choose your recipient's target date. We hold and ship so it arrives within 1-2 days of the date.",
  },
  {
    q: "Do you ship internationally?",
    a: "We currently ship throughout the United States and Canada. Standard shipping takes 2–5 business days, and expedited overnight shipping is available at checkout.",
  },
  {
    q: "What is your return & satisfaction guarantee?",
    a: "We offer a 100% Love-It Guarantee. If anything arrives damaged or you or your recipient are not completely thrilled, we will replace the box or issue a full refund within 30 days.",
  },
  {
    q: "Do you offer corporate or bulk client gifting?",
    a: "Yes! We specialize in custom branded corporate boxes with your logo ribbon, custom cards, and bulk address upload. Contact our concierge team for orders over 15 boxes.",
  },
  {
    q: "How are your products packaged and sustained?",
    a: "100% of our gift boxes, shred fill, and shipping tape are plastic-free, recyclable, or biodegradable. We also plant a tree for every order placed through our partner One Tree Planted.",
  },
];

export function CartBloomMarket() {
  // Cart & Wishlist State
  const [cart, setCart] = useState<{ [id: string]: number }>({
    candle: 1,
    tea: 1,
  });
  const [wishlist, setWishlist] = useState<{ [id: string]: boolean }>({
    skincare: true,
  });

  // Modal & Drawer State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [isFaqOpen, setIsFaqOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategoryFilter, setSelectedCategoryFilter] = useState<string>("all");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Custom Box Builder State
  const [selectedBoxStyle, setSelectedBoxStyle] = useState(boxOptions[1]);
  const [selectedBoxItems, setSelectedBoxItems] = useState<string[]>([
    "c-candle",
    "c-tea",
    "c-mug",
  ]);
  const [cardMessage, setCardMessage] = useState(
    "Wishing you the happiest celebration and relaxation!"
  );
  const [cardOccasion, setCardOccasion] = useState("Happy Birthday");

  // Cart calculation
  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalWishlistCount = Object.values(wishlist).filter(Boolean).length;

  const cartSubtotal = Object.entries(cart).reduce((total, [id, qty]) => {
    const prod = dealsProducts.find((p) => p.id === id);
    return total + (prod ? prod.salePrice * qty : 0);
  }, 0);

  const freeShippingThreshold = 50.0;
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - cartSubtotal);
  const freeShippingProgress = Math.min(
    100,
    (cartSubtotal / freeShippingThreshold) * 100
  );

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
    const p = dealsProducts.find((item) => item.id === productId);
    showToast(`Added ${p ? p.title : "item"} to cart!`);
  };

  const handleRemoveFromCart = (productId: string) => {
    setCart((prev) => {
      const next = { ...prev };
      delete next[productId];
      return next;
    });
  };

  const handleUpdateQty = (productId: string, delta: number) => {
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

  const handleToggleWishlist = (productId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setWishlist((prev) => {
      const state = !prev[productId];
      showToast(state ? "Added to wishlist ♡" : "Removed from wishlist");
      return { ...prev, [productId]: state };
    });
  };

  const toggleCustomBoxItem = (id: string) => {
    if (selectedBoxItems.includes(id)) {
      if (selectedBoxItems.length <= 2) {
        showToast("Please choose at least 2 items for your box.");
        return;
      }
      setSelectedBoxItems(selectedBoxItems.filter((i) => i !== id));
    } else {
      if (selectedBoxItems.length >= 6) {
        showToast("Maximum 6 items per gift box.");
        return;
      }
      setSelectedBoxItems([...selectedBoxItems, id]);
    }
  };

  const customBoxTotal =
    selectedBoxStyle.price +
    selectedBoxItems.reduce((acc, itemId) => {
      const itm = customizableItems.find((i) => i.id === itemId);
      return acc + (itm ? itm.price : 0);
    }, 0);

  const handleAddCustomBoxToCart = () => {
    showToast(
      `Custom Gift Box (${selectedBoxStyle.name} + ${selectedBoxItems.length} items) added to cart!`
    );
    setIsBuilderOpen(false);
    setIsCartOpen(true);
  };

  // Filter products by category or search query
  const filteredProducts = dealsProducts.filter((p) => {
    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());

    if (selectedCategoryFilter === "all") return matchesSearch;
    if (selectedCategoryFilter === "gifts")
      return (
        matchesSearch && (p.id === "candle" || p.id === "skincare" || p.id === "tea")
      );
    if (selectedCategoryFilter === "home")
      return (
        matchesSearch && (p.category === "Home & Living" || p.id === "mug" || p.id === "candle")
      );
    if (selectedCategoryFilter === "beauty")
      return (
        matchesSearch && (p.category === "Beauty & Wellness" || p.id === "skincare")
      );
    if (selectedCategoryFilter === "food")
      return (
        matchesSearch && (p.category === "Food & Beverages" || p.id === "tea" || p.id === "nuts")
      );
    if (selectedCategoryFilter === "office")
      return (
        matchesSearch && (p.category === "Office & Stationery" || p.id === "journal")
      );
    if (selectedCategoryFilter === "new") return matchesSearch;
    return matchesSearch;
  });

  // Key & Scroll locks
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
        setIsWishlistOpen(false);
        setIsBuilderOpen(false);
        setIsFaqOpen(false);
        setMobileMenuOpen(false);
        setSelectedProduct(null);
      }
    };
    if (
      isCartOpen ||
      isWishlistOpen ||
      isBuilderOpen ||
      isFaqOpen ||
      mobileMenuOpen ||
      selectedProduct
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
    isFaqOpen,
    mobileMenuOpen,
    selectedProduct,
  ]);

  return (
    <main className="cb-site" id="top" tabIndex={-1}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="cb-toast" role="alert">
          <CheckCircle2 size={16} className="text-olive" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="cb-topbar">
        <div className="cb-wrap cb-topbar-inner">
          <div className="cb-topbar-item">
            <Truck size={14} />
            <span>Free shipping on orders $50+</span>
          </div>

          <div className="cb-topbar-center">
            <Heart size={13} />
            <span>Curated essentials. Thoughtful choices.</span>
          </div>

          <div className="cb-topbar-right">
            <a
              href="#tracking"
              onClick={(e) => {
                e.preventDefault();
                showToast("Order tracking lookup active");
              }}
            >
              <Package size={13} />
              <span>Track Order</span>
            </a>
            <span className="cb-topbar-sep">|</span>
            <a
              href="#help"
              onClick={(e) => {
                e.preventDefault();
                setIsFaqOpen(true);
              }}
            >
              <HelpCircle size={13} />
              <span>Help</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER NAVBAR */}
      <header className="cb-header">
        <div className="cb-wrap cb-header-main">
          {/* Brand Logo */}
          <a href="#top" className="cb-brand">
            <CartBloomLogo size={36} />
            <div className="cb-brand-text">
              <span className="cb-brand-title">CartBloom</span>
              <span className="cb-brand-sub">MARKET</span>
            </div>
          </a>

          {/* Search Bar */}
          <div className="cb-search-bar">
            <input
              type="text"
              placeholder="Search for gifts, home, beauty, and more..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="cb-search-btn" aria-label="Search">
              <Search size={16} />
            </button>
          </div>

          {/* User Actions */}
          <div className="cb-nav-actions">
            <button
              className="cb-action-btn"
              onClick={() => showToast("Account & order history")}
              aria-label="Account"
            >
              <User size={19} />
              <span className="action-text">Account</span>
            </button>

            <button
              className="cb-action-btn"
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Wishlist"
            >
              <div className="cb-badge-wrap">
                <Heart size={19} />
                {totalWishlistCount > 0 && (
                  <span className="cb-badge">{totalWishlistCount}</span>
                )}
              </div>
              <span className="action-text">Wishlist</span>
            </button>

            <button
              className="cb-action-btn cb-cart-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Cart"
            >
              <div className="cb-badge-wrap">
                <ShoppingBag size={19} />
                <span className="cb-badge">{totalCartCount}</span>
              </div>
            </button>

            {/* Mobile Toggle */}
            <button
              className="cb-mobile-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              <span className="cb-hamburger-line" />
              <span className="cb-hamburger-line" />
              <span className="cb-hamburger-line" />
            </button>
          </div>
        </div>

        {/* Mobile Search Row (visible on mobile screens <= 640px) */}
        <div className="cb-header-search-mobile">
          <div className="cb-wrap">
            <div className="cb-mobile-search-inner">
              <Search size={15} className="cb-mob-search-icon" />
              <input
                type="text"
                placeholder="Search products, gifts, candles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search products"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="cb-mob-search-clear"
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Category Subnav */}
        <nav className="cb-subnav">
          <div className="cb-wrap cb-subnav-inner">
            <button
              className={`cb-subnav-btn ${selectedCategoryFilter === "all" ? "active" : ""}`}
              onClick={() => setSelectedCategoryFilter("all")}
            >
              Shop All
            </button>
            <button
              className={`cb-subnav-btn ${selectedCategoryFilter === "gifts" ? "active" : ""}`}
              onClick={() => setSelectedCategoryFilter("gifts")}
            >
              Gifts
            </button>
            <button
              className={`cb-subnav-btn has-dropdown ${selectedCategoryFilter === "home" ? "active" : ""}`}
              onClick={() => setSelectedCategoryFilter("home")}
            >
              <span>Home & Living</span>
              <ChevronDown size={14} />
            </button>
            <button
              className={`cb-subnav-btn has-dropdown ${selectedCategoryFilter === "beauty" ? "active" : ""}`}
              onClick={() => setSelectedCategoryFilter("beauty")}
            >
              <span>Beauty & Wellness</span>
              <ChevronDown size={14} />
            </button>
            <button
              className={`cb-subnav-btn has-dropdown ${selectedCategoryFilter === "food" ? "active" : ""}`}
              onClick={() => setSelectedCategoryFilter("food")}
            >
              <span>Food & Beverages</span>
              <ChevronDown size={14} />
            </button>
            <button
              className={`cb-subnav-btn has-dropdown ${selectedCategoryFilter === "office" ? "active" : ""}`}
              onClick={() => setSelectedCategoryFilter("office")}
            >
              <span>Office & Stationery</span>
              <ChevronDown size={14} />
            </button>
            <button
              className="cb-subnav-btn text-rose"
              onClick={() => setSelectedCategoryFilter("all")}
            >
              Sale
            </button>
            <button
              className={`cb-subnav-btn ${selectedCategoryFilter === "new" ? "active" : ""}`}
              onClick={() => setSelectedCategoryFilter("new")}
            >
              New Arrivals
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`cb-drawer-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`cb-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="cb-drawer-head">
          <div className="cb-brand">
            <CartBloomLogo size={30} />
            <span className="cb-brand-title">CartBloom</span>
          </div>
          <button
            className="cb-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="cb-drawer-search">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="cb-drawer-links">
          {[
            { id: "all", label: "Shop All" },
            { id: "gifts", label: "Gifts" },
            { id: "home", label: "Home & Living" },
            { id: "beauty", label: "Beauty & Wellness" },
            { id: "food", label: "Food & Beverages" },
            { id: "office", label: "Office & Stationery" },
            { id: "new", label: "New Arrivals" },
          ].map((item) => (
            <button
              key={item.id}
              className="cb-drawer-link"
              onClick={() => {
                setSelectedCategoryFilter(item.id);
                setMobileMenuOpen(false);
              }}
            >
              <span>{item.label}</span>
              <ChevronRight size={16} />
            </button>
          ))}
          <button
            className="cb-drawer-link text-olive-bold"
            onClick={() => {
              setMobileMenuOpen(false);
              setIsBuilderOpen(true);
            }}
          >
            <span>🎁 Build a Gift Box</span>
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="cb-drawer-footer">
          <button
            className="cb-drawer-foot-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              setIsCartOpen(true);
            }}
          >
            <ShoppingBag size={16} />
            <span>Cart ({totalCartCount})</span>
          </button>
          <button
            className="cb-drawer-foot-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              setIsWishlistOpen(true);
            }}
          >
            <Heart size={16} />
            <span>Wishlist ({totalWishlistCount})</span>
          </button>
          <button
            className="cb-drawer-foot-btn"
            onClick={() => {
              setMobileMenuOpen(false);
              setIsFaqOpen(true);
            }}
          >
            <HelpCircle size={16} />
            <span>Help & FAQs</span>
          </button>
        </div>
      </div>

      {/* 3. HERO SECTION */}
      <section className="cb-hero-section">
        <div className="cb-wrap cb-hero-container">
          {/* Left Hero Copy */}
          <div className="cb-hero-copy">
            <h1 className="cb-hero-title">
              Curated essentials <br />
              that make gifting <br />
              and everyday <br />
              shopping easier.
            </h1>

            <p className="cb-hero-desc">
              Thoughtful picks, beautiful packaging and fast delivery — all in one
              place.
            </p>

            <div className="cb-hero-buttons">
              <a href="#deals" className="cb-btn-olive">
                Shop All Products
              </a>
              <button
                onClick={() => setIsBuilderOpen(true)}
                className="cb-btn-outline"
              >
                <span>Explore Gift Sets</span>
                <Box size={16} />
              </button>
            </div>

            {/* 3 Trust Chips below Hero */}
            <div className="cb-hero-trust-chips">
              <div className="cb-trust-chip">
                <Truck size={18} className="text-olive" />
                <div>
                  <strong>Fast Shipping</strong>
                  <small>2–5 business days</small>
                </div>
              </div>

              <div className="cb-trust-chip">
                <RefreshCw size={18} className="text-olive" />
                <div>
                  <strong>Easy Returns</strong>
                  <small>30-day return policy</small>
                </div>
              </div>

              <div className="cb-trust-chip">
                <ShieldCheck size={18} className="text-olive" />
                <div>
                  <strong>Secure Checkout</strong>
                  <small>100% secure payments</small>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Image + Curated Badge */}
          <div className="cb-hero-visual">
            <div className="cb-hero-img-wrap">
              <img
                src={heroGiftBoxImg}
                alt="Curated gift box with candle, mug, herbal tea and thank you note"
              />
              <div className="cb-curated-badge">
                <Heart size={12} fill="#ffffff" />
                <span>Curated with care</span>
                <Heart size={12} fill="#ffffff" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. VALUE PILLARS BAR */}
      <section className="cb-pillars-bar">
        <div className="cb-wrap cb-pillars-grid">
          <div className="cb-pillar-item">
            <div className="cb-pillar-icon">
              <Leaf size={18} />
            </div>
            <div>
              <strong>Curated with Care</strong>
              <span>Handpicked quality products</span>
            </div>
          </div>

          <div className="cb-pillar-item">
            <div className="cb-pillar-icon">
              <Gift size={18} />
            </div>
            <div>
              <strong>Perfect for Gifting</strong>
              <span>Beautiful packaging options</span>
            </div>
          </div>

          <div className="cb-pillar-item">
            <div className="cb-pillar-icon">
              <Layers size={18} />
            </div>
            <div>
              <strong>Bundles &amp; Savings</strong>
              <span>More value on every order</span>
            </div>
          </div>

          <div className="cb-pillar-item">
            <div className="cb-pillar-icon">
              <Star size={18} />
            </div>
            <div>
              <strong>Loved by Customers</strong>
              <span>4.8 ★ average rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* 5. SHOP BY CATEGORY (6 TILES) */}
      <section className="cb-section cb-cat-section" id="categories">
        <div className="cb-wrap">
          <div className="cb-section-head">
            <h2 className="cb-section-title">Shop by Category</h2>
            <a
              href="#deals"
              className="cb-link-arrow"
              onClick={(e) => {
                e.preventDefault();
                setSelectedCategoryFilter("all");
                document.getElementById("deals")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              <span>Browse all categories</span>
              <ArrowRight size={15} />
            </a>
          </div>

          <div className="cb-category-grid">
            {categoriesData.map((cat) => (
              <div
                key={cat.id}
                className={`cb-cat-card ${selectedCategoryFilter === cat.id ? "active" : ""}`}
                onClick={() => {
                  setSelectedCategoryFilter(cat.id);
                  showToast(`Showing ${cat.name}`);
                  document.getElementById("deals")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="cb-cat-img-box">
                  <img src={cat.img} alt={cat.name} loading="lazy" />
                </div>
                <h3>{cat.name}</h3>
                <span className="cb-cat-count">{cat.count}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BEST DEALS OF THE WEEK (6 PRODUCT CARDS) */}
      <section className="cb-section cb-deals-section" id="deals">
        <div className="cb-wrap">
          <div className="cb-section-head">
            <div className="cb-title-with-pill">
              <h2 className="cb-section-title">Best Deals of the Week</h2>
              <span className="cb-pill-badge">Limited time offers</span>
            </div>
            <button
              onClick={() => {
                setSelectedCategoryFilter("all");
                setSearchQuery("");
              }}
              className="cb-link-arrow"
            >
              <span>View all deals</span>
              <ArrowRight size={15} />
            </button>
          </div>

          <div className="cb-deals-grid">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="cb-prod-card"
                onClick={() => setSelectedProduct(prod)}
              >
                {/* Product Thumbnail + Wishlist Button */}
                <div className="cb-prod-img-box">
                  <img src={prod.img} alt={prod.title} loading="lazy" />
                  <button
                    className={`cb-wishlist-toggle ${wishlist[prod.id] ? "active" : ""}`}
                    onClick={(e) => handleToggleWishlist(prod.id, e)}
                    aria-label="Toggle Wishlist"
                  >
                    <Heart
                      size={15}
                      fill={wishlist[prod.id] ? "#e11d48" : "none"}
                      color={wishlist[prod.id] ? "#e11d48" : "#4a5538"}
                    />
                  </button>
                </div>

                {/* Product Info */}
                <div className="cb-prod-body">
                  <h3 className="cb-prod-title">{prod.title}</h3>
                  <span className="cb-prod-sub">{prod.subtitle}</span>

                  <div className="cb-price-row">
                    <strong className="cb-sale-price">
                      ${prod.salePrice.toFixed(2)}
                    </strong>
                    <span className="cb-orig-price">
                      ${prod.origPrice.toFixed(2)}
                    </span>
                  </div>

                  <div className="cb-rating-row">
                    <Star size={12} fill="#f59e0b" color="#f59e0b" />
                    <strong>{prod.rating}</strong>
                    <small>({prod.reviews})</small>
                  </div>

                  <button
                    className="cb-btn-add-cart"
                    onClick={(e) => handleAddToCart(prod.id, e)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. PROMOTION BANNERS (3 CARDS) */}
      <section className="cb-section cb-promo-section">
        <div className="cb-wrap cb-promo-grid">
          {/* Promo 1: Build your own Gift Box */}
          <div
            className="cb-promo-card card-pink"
            onClick={() => setIsBuilderOpen(true)}
          >
            <div className="cb-promo-text">
              <h3>Build your own Gift Box</h3>
              <p>Pick your favorites and we'll pack with love.</p>
              <div className="cb-promo-link">
                <span>Shop Now</span>
                <ArrowRight size={14} />
              </div>
            </div>
            <div className="cb-promo-img">
              <img
                src={bannerBuildBoxImg}
                alt="Custom gift box setup"
                loading="lazy"
              />
            </div>
          </div>

          {/* Promo 2: Bundle & Save Up to 20% off */}
          <div
            className="cb-promo-card card-sand"
            onClick={() => {
              showToast("Bundle discounts automatically applied in cart!");
              setIsCartOpen(true);
            }}
          >
            <div className="cb-promo-text">
              <h3>Bundle &amp; Save Up to 20% off</h3>
              <p>Curated bundles for every occasion and budget.</p>
              <div className="cb-promo-link">
                <span>Explore Bundles</span>
                <ArrowRight size={14} />
              </div>
            </div>
            <div className="cb-promo-img">
              <img
                src={bannerBundleSaveImg}
                alt="Stacked kraft gift boxes"
                loading="lazy"
              />
            </div>
          </div>

          {/* Promo 3: Free Shipping on orders $50+ */}
          <div
            className="cb-promo-card card-cream"
            onClick={() => {
              showToast("Free standard delivery on all orders over $50!");
            }}
          >
            <div className="cb-promo-text">
              <h3>Free Shipping on orders $50+</h3>
              <p>Fast delivery to your doorstep, no minimum hassle.</p>
              <div className="cb-promo-link">
                <span>Learn More</span>
                <ArrowRight size={14} />
              </div>
            </div>
            <div className="cb-promo-img">
              <img
                src={bannerFreeShippingImg}
                alt="Cardboard box with eucalyptus leaves"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 8. TRUSTED BY THOUSANDS OF HAPPY CUSTOMERS */}
      <section className="cb-section cb-reviews-section">
        <div className="cb-wrap">
          <h2 className="cb-section-title cb-reviews-title">
            Trusted by thousands of happy customers
          </h2>

          <div className="cb-trust-container">
            {/* Left 4 Stats */}
            <div className="cb-stats-4col">
              <div className="cb-stat-box">
                <div className="cb-stat-icon-wrap">
                  <Star size={20} className="text-olive" />
                </div>
                <strong>4.8 ★</strong>
                <span>Average Rating</span>
              </div>

              <div className="cb-stat-box">
                <div className="cb-stat-icon-wrap">
                  <Truck size={20} className="text-olive" />
                </div>
                <strong>15K+</strong>
                <span>Orders Delivered</span>
              </div>

              <div className="cb-stat-box">
                <div className="cb-stat-icon-wrap">
                  <CheckCircle2 size={20} className="text-olive" />
                </div>
                <strong>98%</strong>
                <span>Satisfaction Rate</span>
              </div>

              <div className="cb-stat-box">
                <div className="cb-stat-icon-wrap">
                  <RefreshCw size={20} className="text-olive" />
                </div>
                <strong>30 Days</strong>
                <span>Easy Returns</span>
              </div>
            </div>

            {/* Right 3 Testimonial Cards */}
            <div className="cb-reviews-3col">
              <div className="cb-review-card">
                <div className="cb-review-avatar-wrap">
                  <img src={avatarSarahImg} alt="Sarah K." />
                </div>
                <p>
                  “Beautiful products and super fast delivery. My go-to store for gifts!”
                </p>
                <strong>— Sarah K.</strong>
              </div>

              <div className="cb-review-card">
                <div className="cb-review-avatar-wrap">
                  <img src={avatarJasonImg} alt="Jason M." />
                </div>
                <p>
                  “Loved the packaging and quality. Highly recommend CartBloom Market.”
                </p>
                <strong>— Jason M.</strong>
              </div>

              <div className="cb-review-card">
                <div className="cb-review-avatar-wrap">
                  <img src={avatarPriyaImg} alt="Priya S." />
                </div>
                <p>
                  “Great bundles and amazing customer service. Will shop again!”
                </p>
                <strong>— Priya S.</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SHOPPING MADE SIMPLE (4 STEPS) */}
      <section className="cb-section cb-steps-section">
        <div className="cb-wrap">
          <h2 className="cb-section-title text-center">Shopping made simple</h2>

          <div className="cb-steps-flow">
            <div className="cb-step-item">
              <div className="cb-step-icon">
                <Search size={20} />
              </div>
              <div className="cb-step-text">
                <h4>1. Browse</h4>
                <p>Explore categories and find what you love.</p>
              </div>
            </div>

            <div className="cb-step-dots" />

            <div className="cb-step-item">
              <div className="cb-step-icon">
                <ShoppingCart size={20} />
              </div>
              <div className="cb-step-text">
                <h4>2. Add to Cart</h4>
                <p>Add items to your cart and review your order.</p>
              </div>
            </div>

            <div className="cb-step-dots" />

            <div className="cb-step-item">
              <div className="cb-step-icon">
                <CreditCard size={20} />
              </div>
              <div className="cb-step-text">
                <h4>3. Checkout</h4>
                <p>Secure payment and easy checkout.</p>
              </div>
            </div>

            <div className="cb-step-dots" />

            <div className="cb-step-item">
              <div className="cb-step-icon">
                <Truck size={20} />
              </div>
              <div className="cb-step-text">
                <h4>4. We Deliver</h4>
                <p>Fast &amp; reliable delivery right to your door.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. STAY IN THE LOOP (NEWSLETTER BANNER) */}
      <section className="cb-newsletter-section">
        <div className="cb-wrap cb-newsletter-box">
          <div className="cb-news-left">
            <img
              src={newsletterGiftImg}
              alt="Artisanal gift box"
              className="cb-news-img"
            />
            <div className="cb-news-copy">
              <h3>Stay in the loop</h3>
              <p>Get exclusive deals, new arrivals, and gifting inspiration.</p>
            </div>
          </div>

          <form
            className="cb-news-form"
            onSubmit={(e) => {
              e.preventDefault();
              setNewsletterSubscribed(true);
              showToast("Thank you for subscribing! Check your email for $10 off.");
            }}
          >
            <input
              type="email"
              required
              placeholder="Enter your email address"
            />
            <button type="submit" className="cb-btn-subscribe">
              {newsletterSubscribed ? "Subscribed!" : "Subscribe"}
            </button>
          </form>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="cb-footer">
        <div className="cb-wrap cb-footer-grid">
          {/* Col 1: Brand Info */}
          <div className="cb-footer-brand-col">
            <div className="cb-brand">
              <CartBloomLogo size={32} />
              <div className="cb-brand-text">
                <span className="cb-brand-title">CartBloom</span>
                <span className="cb-brand-sub">MARKET</span>
              </div>
            </div>

            <p className="cb-footer-desc">
              Curated essentials that make gifting and everyday shopping easier.
              Thoughtful picks, beautiful packaging, fast delivery.
            </p>

            <div className="cb-social-links">
              <a href="#instagram" aria-label="Instagram" onClick={(e) => e.preventDefault()}>
                📷
              </a>
              <a href="#facebook" aria-label="Facebook" onClick={(e) => e.preventDefault()}>
                f
              </a>
              <a href="#pinterest" aria-label="Pinterest" onClick={(e) => e.preventDefault()}>
                📌
              </a>
              <a href="#tiktok" aria-label="TikTok" onClick={(e) => e.preventDefault()}>
                ♪
              </a>
            </div>
          </div>

          {/* Col 2: Shop */}
          <div className="cb-footer-col">
            <h4>Shop</h4>
            <a href="#deals" onClick={() => setSelectedCategoryFilter("all")}>
              Shop All
            </a>
            <a href="#gifts" onClick={() => setSelectedCategoryFilter("gifts")}>
              Gifts
            </a>
            <a href="#home" onClick={() => setSelectedCategoryFilter("home")}>
              Home &amp; Living
            </a>
            <a href="#beauty" onClick={() => setSelectedCategoryFilter("beauty")}>
              Beauty &amp; Wellness
            </a>
            <a href="#food" onClick={() => setSelectedCategoryFilter("food")}>
              Food &amp; Beverages
            </a>
            <a href="#office" onClick={() => setSelectedCategoryFilter("office")}>
              Office &amp; Stationery
            </a>
            <a href="#sale" onClick={() => setSelectedCategoryFilter("all")}>
              Sale
            </a>
          </div>

          {/* Col 3: Customer Care */}
          <div className="cb-footer-col">
            <h4>Customer Care</h4>
            <a
              href="#tracking"
              onClick={(e) => {
                e.preventDefault();
                showToast("Order tracking lookup");
              }}
            >
              Track Order
            </a>
            <a
              href="#returns"
              onClick={(e) => {
                e.preventDefault();
                showToast("30-day hassle-free returns");
              }}
            >
              Returns &amp; Refunds
            </a>
            <a
              href="#shipping"
              onClick={(e) => {
                e.preventDefault();
                showToast("Free shipping on orders over $50");
              }}
            >
              Shipping Information
            </a>
            <a
              href="#faqs"
              onClick={(e) => {
                e.preventDefault();
                setIsFaqOpen(true);
              }}
            >
              FAQs
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                showToast("Contact support: support@cartbloom.market");
              }}
            >
              Contact Us
            </a>
            <a
              href="#size-guide"
              onClick={(e) => {
                e.preventDefault();
                showToast("Gift Box Size Guide");
              }}
            >
              Size Guide
            </a>
          </div>

          {/* Col 4: About */}
          <div className="cb-footer-col">
            <h4>About</h4>
            <a
              href="#story"
              onClick={(e) => {
                e.preventDefault();
                showToast("Our Story & Mission");
              }}
            >
              Our Story
            </a>
            <a
              href="#careers"
              onClick={(e) => {
                e.preventDefault();
                showToast("We are hiring!");
              }}
            >
              Careers
            </a>
            <a
              href="#sustainability"
              onClick={(e) => {
                e.preventDefault();
                showToast("100% recyclable, plastic-free packaging");
              }}
            >
              Sustainability
            </a>
            <a
              href="#press"
              onClick={(e) => {
                e.preventDefault();
                showToast("Press inquiries: press@cartbloom.market");
              }}
            >
              Press
            </a>
            <a
              href="#blog"
              onClick={(e) => {
                e.preventDefault();
                showToast("CartBloom Journal & Gifting Guides");
              }}
            >
              Blog
            </a>
          </div>

          {/* Col 5: Secure Payments */}
          <div className="cb-footer-col cb-footer-payments">
            <h4>Secure Payments</h4>
            <div className="cb-payment-badges">
              <span className="cb-pay-badge visa">VISA</span>
              <span className="cb-pay-badge mc">
                <span className="mc-circle-red" />
                <span className="mc-circle-yellow" />
              </span>
              <span className="cb-pay-badge paypal">PayPal</span>
              <span className="cb-pay-badge applepay"> Pay</span>
            </div>
            <p className="cb-pay-text">
              We accept all major credit cards and secure payment methods.
            </p>
          </div>
        </div>

        {/* Subfooter */}
        <div className="cb-subfooter">
          <div className="cb-wrap cb-subfooter-inner">
            <p>© 2024 CartBloom Market. All rights reserved.</p>

            <div className="cb-policy-links">
              <a href="#privacy" onClick={(e) => e.preventDefault()}>
                Privacy Policy
              </a>
              <span>|</span>
              <a href="#terms" onClick={(e) => e.preventDefault()}>
                Terms of Service
              </a>
              <span>|</span>
              <a href="#accessibility" onClick={(e) => e.preventDefault()}>
                Accessibility
              </a>
            </div>

            <div className="cb-subfooter-selectors">
              <span className="cb-lang-select">🇺🇸 English ▾</span>
              <span className="cb-currency-select">USD $ ▾</span>
            </div>
          </div>
        </div>
      </footer>

      {/* 12. SLIDE-OVER CART DRAWER */}
      <div
        className={`cb-drawer-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`cb-cart-drawer ${isCartOpen ? "open" : ""}`}>
        <div className="cb-cart-head">
          <div className="cb-cart-head-title">
            <ShoppingBag size={20} className="text-olive" />
            <h3>Your Shopping Cart ({totalCartCount})</h3>
          </div>
          <button
            className="cb-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Meter */}
        <div className="cb-shipping-meter">
          {amountToFreeShipping > 0 ? (
            <p>
              Add <strong>${amountToFreeShipping.toFixed(2)}</strong> more for{" "}
              <strong className="text-olive">FREE Standard Shipping!</strong>
            </p>
          ) : (
            <p className="text-olive-bold">
              🎉 Congratulations! You qualify for <strong>FREE Shipping!</strong>
            </p>
          )}
          <div className="cb-meter-track">
            <div
              className="cb-meter-fill"
              style={{ width: `${freeShippingProgress}%` }}
            />
          </div>
        </div>

        {/* Cart Item List */}
        <div className="cb-cart-items-list">
          {Object.keys(cart).length === 0 ? (
            <div className="cb-cart-empty">
              <ShoppingBag size={48} className="cb-empty-icon" />
              <h4>Your cart is empty</h4>
              <p>Explore our curated artisanal essentials and handcrafted gift boxes.</p>
              <button
                onClick={() => setIsCartOpen(false)}
                className="cb-btn-olive"
              >
                Start Shopping
              </button>
            </div>
          ) : (
            Object.entries(cart).map(([id, qty]) => {
              const prod = dealsProducts.find((p) => p.id === id);
              if (!prod) return null;
              return (
                <div key={id} className="cb-cart-item-row">
                  <img src={prod.img} alt={prod.title} className="cb-cart-thumb" />
                  <div className="cb-cart-item-info">
                    <h4>{prod.title}</h4>
                    <span className="cb-cart-sub">{prod.subtitle}</span>
                    <strong className="cb-cart-price">
                      ${(prod.salePrice * qty).toFixed(2)}
                    </strong>
                    <div className="cb-cart-qty-ctrls">
                      <button
                        onClick={() => handleUpdateQty(id, -1)}
                        aria-label="Decrease quantity"
                      >
                        <Minus size={13} />
                      </button>
                      <span>{qty}</span>
                      <button
                        onClick={() => handleUpdateQty(id, 1)}
                        aria-label="Increase quantity"
                      >
                        <Plus size={13} />
                      </button>
                    </div>
                  </div>
                  <button
                    className="cb-cart-remove-btn"
                    onClick={() => handleRemoveFromCart(id)}
                    aria-label="Remove item"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              );
            })
          )}
        </div>

        {/* Cart Drawer Footer */}
        {Object.keys(cart).length > 0 && (
          <div className="cb-cart-foot">
            <div className="cb-cart-subtotal-row">
              <span>Subtotal</span>
              <strong>${cartSubtotal.toFixed(2)}</strong>
            </div>
            <p className="cb-cart-note">
              Taxes and shipping calculated at checkout.
            </p>
            <button
              className="cb-btn-olive cb-checkout-btn"
              onClick={() => {
                showToast("Order placed successfully! Thank you for supporting artisans.");
                setCart({});
                setIsCartOpen(false);
              }}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>

      {/* 13. SLIDE-OVER WISHLIST DRAWER */}
      <div
        className={`cb-drawer-overlay ${isWishlistOpen ? "open" : ""}`}
        onClick={() => setIsWishlistOpen(false)}
      />
      <div className={`cb-cart-drawer ${isWishlistOpen ? "open" : ""}`}>
        <div className="cb-cart-head">
          <div className="cb-cart-head-title">
            <Heart size={20} className="text-rose" />
            <h3>Your Saved Items ({totalWishlistCount})</h3>
          </div>
          <button
            className="cb-close-btn"
            onClick={() => setIsWishlistOpen(false)}
            aria-label="Close wishlist"
          >
            <X size={20} />
          </button>
        </div>

        <div className="cb-cart-items-list">
          {totalWishlistCount === 0 ? (
            <div className="cb-cart-empty">
              <Heart size={48} className="cb-empty-icon" />
              <h4>Your wishlist is empty</h4>
              <p>Save your favorite candles, ceramics, and gourmet gifts here.</p>
              <button
                onClick={() => setIsWishlistOpen(false)}
                className="cb-btn-olive"
              >
                Explore Items
              </button>
            </div>
          ) : (
            dealsProducts
              .filter((p) => wishlist[p.id])
              .map((prod) => (
                <div key={prod.id} className="cb-cart-item-row">
                  <img src={prod.img} alt={prod.title} className="cb-cart-thumb" />
                  <div className="cb-cart-item-info">
                    <h4>{prod.title}</h4>
                    <span className="cb-cart-sub">{prod.subtitle}</span>
                    <strong className="cb-cart-price">
                      ${prod.salePrice.toFixed(2)}
                    </strong>
                    <button
                      className="cb-btn-move-cart"
                      onClick={() => {
                        handleAddToCart(prod.id);
                        handleToggleWishlist(prod.id);
                      }}
                    >
                      Move to Cart
                    </button>
                  </div>
                  <button
                    className="cb-cart-remove-btn"
                    onClick={() => handleToggleWishlist(prod.id)}
                    aria-label="Remove from wishlist"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))
          )}
        </div>
      </div>

      {/* 14. QUICK VIEW PRODUCT MODAL */}
      {selectedProduct && (
        <div className="cb-modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div
            className="cb-modal-card cb-quickview-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cb-modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="cb-quickview-grid">
              <div className="cb-quickview-img">
                <img src={selectedProduct.img} alt={selectedProduct.title} />
              </div>

              <div className="cb-quickview-body">
                <span className="cb-qv-cat">{selectedProduct.category}</span>
                <h2>{selectedProduct.title}</h2>
                <span className="cb-qv-sub">{selectedProduct.subtitle}</span>

                <div className="cb-qv-rating">
                  <div className="stars">★★★★★</div>
                  <strong>{selectedProduct.rating}</strong>
                  <small>({selectedProduct.reviews} customer reviews)</small>
                </div>

                <div className="cb-qv-price-row">
                  <strong className="sale-price">
                    ${selectedProduct.salePrice.toFixed(2)}
                  </strong>
                  <span className="orig-price">
                    ${selectedProduct.origPrice.toFixed(2)}
                  </span>
                  <span className="cb-save-badge">
                    Save $
                    {(selectedProduct.origPrice - selectedProduct.salePrice).toFixed(
                      2
                    )}
                  </span>
                </div>

                <p className="cb-qv-desc">{selectedProduct.description}</p>

                <div className="cb-qv-actions">
                  <button
                    className="cb-btn-olive cb-qv-add-btn"
                    onClick={() => {
                      handleAddToCart(selectedProduct.id);
                      setSelectedProduct(null);
                      setIsCartOpen(true);
                    }}
                  >
                    <ShoppingBag size={18} />
                    <span>Add to Cart — ${selectedProduct.salePrice.toFixed(2)}</span>
                  </button>

                  <button
                    className={`cb-qv-wish-btn ${wishlist[selectedProduct.id] ? "active" : ""}`}
                    onClick={() => handleToggleWishlist(selectedProduct.id)}
                    aria-label="Save to wishlist"
                  >
                    <Heart
                      size={20}
                      fill={wishlist[selectedProduct.id] ? "#e11d48" : "none"}
                      color={wishlist[selectedProduct.id] ? "#e11d48" : "#4a5538"}
                    />
                  </button>
                </div>

                <div className="cb-qv-perks">
                  <div>
                    <Truck size={15} className="text-olive" />
                    <span>Ships within 24 hours in gift-ready box</span>
                  </div>
                  <div>
                    <ShieldCheck size={15} className="text-olive" />
                    <span>100% Love-It Guarantee or hassle-free refund</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 15. INTERACTIVE "BUILD YOUR OWN GIFT BOX" MODAL */}
      {isBuilderOpen && (
        <div className="cb-modal-overlay" onClick={() => setIsBuilderOpen(false)}>
          <div
            className="cb-modal-card cb-builder-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cb-modal-close"
              onClick={() => setIsBuilderOpen(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="cb-builder-modal-head">
              <span className="cb-eyebrow text-olive">CUSTOM GIFTING STUDIO</span>
              <h2>Build Your Own Gift Box</h2>
              <p>
                Pick your box style, handpick 3 to 6 curated artisan items, and
                personalize your handwritten card.
              </p>
            </div>

            <div className="cb-builder-grid">
              {/* Left Controls */}
              <div className="cb-builder-controls">
                {/* Step 1 */}
                <div className="cb-builder-step">
                  <div className="cb-step-label">
                    <span className="cb-step-num">1</span>
                    <h4>Select Box Style</h4>
                  </div>
                  <div className="cb-box-style-options">
                    {boxOptions.map((opt) => (
                      <button
                        key={opt.id}
                        className={`cb-style-btn ${selectedBoxStyle.id === opt.id ? "active" : ""}`}
                        onClick={() => setSelectedBoxStyle(opt)}
                      >
                        <span
                          className="cb-color-dot"
                          style={{ backgroundColor: opt.color }}
                        />
                        <div className="cb-style-name">
                          <strong>{opt.name}</strong>
                          <small>+${opt.price.toFixed(2)}</small>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Step 2 */}
                <div className="cb-builder-step">
                  <div className="cb-step-label">
                    <span className="cb-step-num">2</span>
                    <h4>Select Items ({selectedBoxItems.length}/6 Selected)</h4>
                  </div>
                  <div className="cb-items-selection-grid">
                    {customizableItems.map((itm) => {
                      const isSelected = selectedBoxItems.includes(itm.id);
                      return (
                        <div
                          key={itm.id}
                          className={`cb-item-pick-card ${isSelected ? "selected" : ""}`}
                          onClick={() => toggleCustomBoxItem(itm.id)}
                        >
                          <div className="cb-pick-img-box">
                            <img src={itm.img} alt={itm.name} />
                            <span className="cb-pick-check">
                              {isSelected ? <Check size={12} /> : <Plus size={12} />}
                            </span>
                          </div>
                          <div className="cb-pick-info">
                            <strong>{itm.name}</strong>
                            <span>+${itm.price.toFixed(2)}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3 */}
                <div className="cb-builder-step">
                  <div className="cb-step-label">
                    <span className="cb-step-num">3</span>
                    <h4>Personalize Your Handwritten Card</h4>
                  </div>
                  <div className="cb-card-options-row">
                    <select
                      value={cardOccasion}
                      onChange={(e) => setCardOccasion(e.target.value)}
                      className="cb-select-input"
                    >
                      <option value="Happy Birthday">🎂 Happy Birthday</option>
                      <option value="Thank You So Much">💐 Thank You So Much</option>
                      <option value="Thinking of You">🕊️ Thinking of You / Warm Hugs</option>
                      <option value="Congratulations!">🎉 Congratulations!</option>
                      <option value="Sending Love">❤️ Sending Love &amp; Comfort</option>
                    </select>

                    <input
                      type="text"
                      className="cb-text-input"
                      placeholder="Type your personal message for our calligrapher..."
                      value={cardMessage}
                      onChange={(e) => setCardMessage(e.target.value)}
                    />
                  </div>
                </div>
              </div>

              {/* Right Summary */}
              <div className="cb-builder-summary-card">
                <div className="cb-summary-header">
                  <h3>Your Custom Gift Box</h3>
                  <span className="cb-summary-badge">Hand-Packed with Love</span>
                </div>

                <div className="cb-box-mockup-visual">
                  <div
                    className="cb-box-lid-bar"
                    style={{ backgroundColor: selectedBoxStyle.color }}
                  >
                    <span>{selectedBoxStyle.name} Edition</span>
                  </div>
                  <div className="cb-box-items-preview">
                    {selectedBoxItems.map((id) => {
                      const item = customizableItems.find((i) => i.id === id);
                      if (!item) return null;
                      return (
                        <div key={id} className="cb-mini-item-chip">
                          <img src={item.img} alt={item.name} />
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                  </div>
                  <div className="cb-card-note-preview">
                    <small>Card: {cardOccasion}</small>
                    <p>“{cardMessage || "Your custom note here..."}”</p>
                  </div>
                </div>

                <div className="cb-summary-pricing">
                  <div className="cb-price-breakdown">
                    <div className="breakdown-row">
                      <span>Box Packaging ({selectedBoxStyle.name})</span>
                      <span>${selectedBoxStyle.price.toFixed(2)}</span>
                    </div>
                    <div className="breakdown-row">
                      <span>Artisan Items ({selectedBoxItems.length})</span>
                      <span>
                        ${(customBoxTotal - selectedBoxStyle.price).toFixed(2)}
                      </span>
                    </div>
                    <div className="breakdown-row">
                      <span>Handwritten Greeting Card &amp; Ribbon</span>
                      <span className="text-olive">FREE</span>
                    </div>
                  </div>

                  <div className="cb-summary-total-row">
                    <div>
                      <small>Total Price</small>
                      <strong>${customBoxTotal.toFixed(2)}</strong>
                    </div>
                    <button
                      onClick={handleAddCustomBoxToCart}
                      className="cb-btn-olive"
                    >
                      Add Gift Box to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 16. FAQ & SUPPORT MODAL */}
      {isFaqOpen && (
        <div className="cb-modal-overlay" onClick={() => setIsFaqOpen(false)}>
          <div
            className="cb-modal-card cb-faq-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="cb-modal-close"
              onClick={() => setIsFaqOpen(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <div className="cb-modal-header text-center">
              <span className="cb-eyebrow text-olive">HELP &amp; SUPPORT</span>
              <h2>Frequently Asked Questions</h2>
              <p>Everything you need to know about our products, shipping, and gifting.</p>
            </div>

            <div className="cb-faq-grid">
              {cartBloomFaqs.map((faq, idx) => (
                <div
                  key={faq.q}
                  className={`cb-faq-card ${openFaq === idx ? "open" : ""}`}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="cb-faq-q">
                    <span>{faq.q}</span>
                    <span className="cb-faq-plus">{openFaq === idx ? "−" : "+"}</span>
                  </div>
                  {openFaq === idx && (
                    <div className="cb-faq-a">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
