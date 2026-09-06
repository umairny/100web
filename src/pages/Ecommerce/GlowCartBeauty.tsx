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
  Droplet,
  Eye,
  Feather,
  Filter,
  Heart,
  HelpCircle,
  Layers,
  Leaf,
  Menu,
  Minus,
  Package,
  Plus,
  RefreshCw,
  RotateCcw,
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
  Truck,
  User,
  X,
  Zap,
} from "lucide-react";
import "./GlowCartBeauty.css";

// 16:9 Hero Carousel Photography Assets
import heroDewy1Img from "../../assets/optimized/ecommerce/glowcart/hero-dewy-1.webp";
import heroDewy2Img from "../../assets/optimized/ecommerce/glowcart/hero-dewy-2.webp";
import heroDewy3Img from "../../assets/optimized/ecommerce/glowcart/hero-dewy-3.webp";
import heroDewy4Img from "../../assets/optimized/ecommerce/glowcart/hero-dewy-4.webp";

// 1:1 Square Product Photography Assets
import prodSerumImg from "../../assets/optimized/ecommerce/glowcart/prod-serum.webp";
import prodFoundationImg from "../../assets/optimized/ecommerce/glowcart/prod-foundation.webp";
import prodTintImg from "../../assets/optimized/ecommerce/glowcart/prod-tint.webp";
import prodBlushImg from "../../assets/optimized/ecommerce/glowcart/prod-blush.webp";
import prodLipOilImg from "../../assets/optimized/ecommerce/glowcart/prod-lipoil.webp";
import prodPrimerImg from "../../assets/optimized/ecommerce/glowcart/prod-primer.webp";

// Promo & Spotlight Assets
import promoBalmImg from "../../assets/optimized/ecommerce/glowcart/promo-balm.webp";
import spotlightElixirImg from "../../assets/optimized/ecommerce/glowcart/spotlight-elixir.webp";

// 3:4 Vertical Editorial Look Assets
import lookEverydayImg from "../../assets/optimized/ecommerce/glowcart/look-everyday.webp";
import lookSculptedImg from "../../assets/optimized/ecommerce/glowcart/look-sculpted.webp";
import lookNightoutImg from "../../assets/optimized/ecommerce/glowcart/look-nightout.webp";
import lookEditorialImg from "../../assets/optimized/ecommerce/glowcart/look-editorial.webp";

// 1:1 Community UGC Assets
import ugc1Img from "../../assets/optimized/ecommerce/glowcart/ugc-1.webp";
import ugc2Img from "../../assets/optimized/ecommerce/glowcart/ugc-2.webp";
import ugc3Img from "../../assets/optimized/ecommerce/glowcart/ugc-3.webp";
import ugc4Img from "../../assets/optimized/ecommerce/glowcart/ugc-4.webp";

// 4 Hero Carousel Slides Dataset
const heroSlides = [
  {
    id: "slide-1",
    badge: "HERO COMPLEXION LAUNCH",
    title: "THE DEWY ELIXIR COLLECTION",
    subtitle:
      "The botanical secret to unretouched, second-skin glass luminosity with 5% Niacinamide, cold-pressed Squalane, and Kakadu Plum.",
    ctaPrimary: "SHOP THE LAUNCH",
    ctaSecondary: "FIND YOUR SHADE",
    targetHref: "#highlights",
    img: heroDewy1Img,
    stats: [
      { label: "Clean Actives", value: "100%" },
      { label: "Radiance Boost", value: "+96%" },
      { label: "Verified Reviews", value: "4.9★ (3.4k)" },
    ],
  },
  {
    id: "slide-2",
    badge: "CLINICALLY PROVEN FORMULA",
    title: "LIQUID LIGHT & GLASS SKIN",
    subtitle:
      "Ultra-concentrated multi-depth hydration drops that restore bounce, blur pores, and lock in moisture for 24 continuous hours.",
    ctaPrimary: "EXPLORE ELIXIR",
    ctaSecondary: "VIEW CLINICALS",
    targetHref: "#highlights",
    img: heroDewy2Img,
    stats: [
      { label: "Niacinamide Active", value: "5.0%" },
      { label: "Barrier Moisture Lock", value: "72h" },
      { label: "Non-Comedogenic", value: "100%" },
    ],
  },
  {
    id: "slide-3",
    badge: "RADIANTSILK COMPLEXION",
    title: "SECOND-SKIN COVERAGE",
    subtitle:
      "SilkGlow breathable medium coverage foundation with pure hyaluronic infusion across 24 true-to-life skin undertones.",
    ctaPrimary: "FIND YOUR SHADE",
    ctaSecondary: "SHOP FOUNDATION",
    targetHref: "#highlights",
    img: heroDewy3Img,
    stats: [
      { label: "True Undertones", value: "24 Shades" },
      { label: "Weightless Wear", value: "16h" },
      { label: "Mineral Defense", value: "SPF 30" },
    ],
  },
  {
    id: "slide-4",
    badge: "CUSTOM BEAUTY STUDIO",
    title: "THE GLOW-GETTER REGIMEN",
    subtitle:
      "Curate your 4-step glass skin routine. Enjoy 20% bundle savings and receive a free Mini Glow Balm on all $75+ orders.",
    ctaPrimary: "BUILD YOUR REGIMEN",
    ctaSecondary: "EXPLORE EDITORIAL",
    targetHref: "#routine-studio",
    img: heroDewy4Img,
    stats: [
      { label: "Bundle Discount", value: "20% OFF" },
      { label: "Gift on $75+", value: "Free Balm" },
      { label: "Leaping Bunny", value: "Cruelty-Free" },
    ],
  },
];

// Product Highlights Dataset (6 Products)
export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  origPrice: number;
  rating: number;
  reviews: number;
  img: string;
  badge: string;
  category: string;
  shade?: string;
  description?: string;
  benefits?: string[];
}

const productHighlights: ProductItem[] = [
  {
    id: "serum",
    title: "The Dewy Elixir Serum",
    subtitle: "Hydrating multi-depth serum with 5% Niacinamide and Botanical Squalane",
    price: 38.0,
    origPrice: 48.0,
    rating: 4.9,
    reviews: 318,
    img: prodSerumImg,
    badge: "Hero Product",
    category: "Serums & Elixirs",
    description:
      "A concentrated, bouncy serum that drenches skin in multi-molecular weight hyaluronic acid and botanical squalane for that effortless glass-skin gleam.",
    benefits: [
      "5% Niacinamide refines skin texture and minimizes enlarged pores",
      "Triple hyaluronic complex binds 1,000x its weight in deep hydration",
      "Australian Kakadu Plum supplies 55x more Vitamin C than oranges",
    ],
  },
  {
    id: "foundation",
    title: "SilkGlow Radiant Foundation",
    subtitle: "Medium buildable luminous coverage with hyaluronic acid infusion",
    price: 44.0,
    origPrice: 54.0,
    rating: 4.8,
    reviews: 245,
    img: prodFoundationImg,
    badge: "Bestseller",
    category: "Face & Complexion",
    description:
      "Weightless, serum-infused foundation that melts undetectable into skin, evening out tone while diffusing fine lines with light-bending microspheres.",
    benefits: [
      "16-hour breathable wear without creasing or caking",
      "Infused with hyaluronic acid for all-day skin conditioning",
      "Available in 24 skin-adaptive undertones",
    ],
  },
  {
    id: "tint",
    title: "Skin Perfecting Tint SPF 30",
    subtitle: "Lightweight sheer perfecting tint with non-nano mineral sun defense",
    price: 32.0,
    origPrice: 40.0,
    rating: 4.9,
    reviews: 190,
    img: prodTintImg,
    badge: "SPF 30 Defense",
    category: "Skin Tints",
    description:
      "Your effortless weekend skin. Blurs redness, calms the skin barrier with aloe hydrosol, and shields against photo-aging with clean zinc oxide.",
    benefits: [
      "Non-nano zinc oxide mineral broad spectrum SPF 30",
      "Antioxidant-rich Green Tea extract protects against environmental stressors",
      "Gives a fresh, just-walked-out-of-a-facial dewy sheen",
    ],
  },
  {
    id: "blush",
    title: "FlushVibe Silk Blush",
    subtitle: "Airbrushed velvet powder blush with pearlescent light-diffusing mica",
    price: 28.0,
    origPrice: 34.0,
    rating: 4.8,
    reviews: 164,
    img: prodBlushImg,
    badge: "Customer Fave",
    category: "Cheeks & Glow",
    description:
      "A silky, micro-milled cheek pigment infused with squalane that mimics the natural healthy flush of energized, radiant circulation.",
    benefits: [
      "Zero talc, micro-milled botanical pigments for seamless blending",
      "Layerable from a whisper-soft blush to bold sunset cheeks",
      "Ethically sourced shimmer adds multidimensional warmth",
    ],
  },
  {
    id: "lipoil",
    title: "Glaze Peptide Lip Oil",
    subtitle: "High-shine plumping treatment with biomimetic collagen & berry oils",
    price: 24.0,
    origPrice: 30.0,
    rating: 4.9,
    reviews: 182,
    img: prodLipOilImg,
    badge: "New Drop",
    category: "Lips & Balms",
    description:
      "A luxurious hybrid lip oil and plumping gloss that drapes lips in cushiony hydration, reducing fine lines and enhancing natural lip contour.",
    benefits: [
      "Maxi-Lip peptide complex boosts natural volume and contour",
      "Cold-pressed cranberry and camellia seed oils deeply nourish",
      "Non-sticky high-gloss finish with subtle natural vanilla scent",
    ],
  },
  {
    id: "primer",
    title: "Glow Grip Hydrating Primer",
    subtitle: "Illuminating water-gel primer that locks in makeup for 16-hour radiance",
    price: 32.0,
    origPrice: 38.0,
    rating: 4.8,
    reviews: 140,
    img: prodPrimerImg,
    badge: "Essential Prep",
    category: "Prep & Prime",
    description:
      "The ultimate glass-skin canvas. Grips your foundation and skin tint without silicone heaviness, keeping complexion fresh and luminous.",
    benefits: [
      "Formulated with Blue Agave extract for weightless all-day makeup grip",
      "Cannabis sativa seed oil and aloe leaf juice soothe and hydrate",
      "Pore-refining finish with natural pearl luminosity",
    ],
  },
];

// Curated Collections Dataset (4 Looks)
const curatedCollections = [
  {
    id: "everyday",
    title: "THE EVERYDAY GLOW",
    subtitle: "Effortless sheer hydration & naturally radiant dewy finish for everyday wear.",
    tag: "Minimalist Complexion",
    products: "Skin Perfecting Tint + Dewy Elixir + Glaze Lip Oil",
    img: lookEverydayImg,
    btnText: "EXPLORE LOOK",
  },
  {
    id: "sculpted",
    title: "SCULPTED & DEFINED",
    subtitle: "Golden hour warmth, dimensional cheekbones & lifted sun-kissed contours.",
    tag: "Warm Dimensionality",
    products: "SilkGlow Foundation + FlushVibe Blush + Glow Primer",
    img: lookSculptedImg,
    btnText: "EXPLORE LOOK",
  },
  {
    id: "nightout",
    title: "NIGHT OUT VIBE",
    subtitle: "High-impact luminous glass skin, smoldering definition & plumping high-shine lips.",
    tag: "High-Impact Luster",
    products: "The Dewy Elixir + SilkGlow Foundation + Glaze Lip Oil",
    img: lookNightoutImg,
    btnText: "EXPLORE LOOK",
  },
  {
    id: "editorial",
    title: "EDITORIAL LUMINOUS",
    subtitle: "High-fashion dewy glass highlight, wet-look eyelids & sculpted glass reflection.",
    tag: "Studio Luminary",
    products: "Full Glass Skin 4-Step Regimen + Silk Blush",
    img: lookEditorialImg,
    btnText: "EXPLORE LOOK",
  },
];

// UGC Community Reviews Dataset
const ugcReviews = [
  {
    id: "ugc1",
    handle: "@elena.glow",
    name: "Elena R.",
    product: "The Dewy Elixir Serum",
    comment:
      "Gives my skin that real glass-skin hydration without feeling oily or heavy. I get compliments daily on how radiant my complexion looks!",
    img: ugc1Img,
    rating: 5,
    verified: true,
  },
  {
    id: "ugc2",
    handle: "@maya_beauty",
    name: "Maya K.",
    product: "SilkGlow Foundation",
    comment:
      "The shade match is undetectable. It looks like my natural bare skin on its absolute best day. Plus, it never settles into fine lines.",
    img: ugc2Img,
    rating: 5,
    verified: true,
  },
  {
    id: "ugc3",
    handle: "@chloe_vibes",
    name: "Chloe M.",
    product: "FlushVibe Silk Blush",
    comment:
      "Blends like butter into my cheeks. The soft luminous rose tone gives the healthiest youthful flush without glitter chunks.",
    img: ugc3Img,
    rating: 5,
    verified: true,
  },
  {
    id: "ugc4",
    handle: "@sophia.makeup",
    name: "Sophia T.",
    product: "Glow Mini Balm & Routine",
    comment:
      "Obsessed with the routine bundle! The Dewy Elixir under foundation keeps me glowing from 8 AM meetings to late night dinner.",
    img: ugc4Img,
    rating: 5,
    verified: true,
  },
];

// Foundation Shade Swatches
export interface ShadeItem {
  id: string;
  name: string;
  hex: string;
  undertone: "Warm" | "Neutral" | "Olive" | "Rich";
  depth: string;
}

const shadeOptions: ShadeItem[] = [
  { id: "s10", name: "Fair Neutral 10", hex: "#fbe8dc", undertone: "Neutral", depth: "Fair" },
  { id: "s20", name: "Light Warm 20", hex: "#f4dac4", undertone: "Warm", depth: "Light" },
  { id: "s30", name: "Medium Olive 30", hex: "#deb897", undertone: "Olive", depth: "Medium" },
  { id: "s40", name: "Tan Warm Honey 40", hex: "#c49267", undertone: "Warm", depth: "Tan" },
  { id: "s50", name: "Deep Rich Bronze 50", hex: "#8c5636", undertone: "Rich", depth: "Deep" },
  { id: "s60", name: "Espresso Rich 60", hex: "#543321", undertone: "Rich", depth: "Rich" },
];

export function GlowCartBeauty() {
  // Shopping Cart & Wishlist State
  const [cart, setCart] = useState<{ [id: string]: number }>({
    serum: 1,
    blush: 1,
  });
  const [wishlist, setWishlist] = useState<{ [id: string]: boolean }>({
    foundation: true,
  });

  // Hero Carousel State
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);

  // UI state
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isShadeModalOpen, setIsShadeModalOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [selectedShade, setSelectedShade] = useState<ShadeItem>(shadeOptions[1]);
  const [activeUndertoneFilter, setActiveUndertoneFilter] = useState<string>("All");

  // Interactive Glass Skin Routine Builder
  const [bundlePrimer, setBundlePrimer] = useState(true);
  const [bundleSerum, setBundleSerum] = useState(true);
  const [bundleFoundation, setBundleFoundation] = useState(true);
  const [bundleBlush, setBundleBlush] = useState(true);

  // Hero Carousel auto-advance
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
    const p = productHighlights.find((item) => item.id === productId);
    showToast(`Added ${p ? p.title : "item"} to your beauty bag!`);
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
      const nextVal = !prev[productId];
      const p = productHighlights.find((item) => item.id === productId);
      if (nextVal) {
        showToast(`Saved ${p ? p.title : "item"} to wishlist!`);
      } else {
        showToast(`Removed from wishlist`);
      }
      return { ...prev, [productId]: nextVal };
    });
  };

  // Routine calculations
  const routineSelectedProducts = [
    { selected: bundlePrimer, price: 32.0, name: "Glow Grip Primer", icon: "💧" },
    { selected: bundleSerum, price: 38.0, name: "The Dewy Elixir Serum", icon: "✨" },
    { selected: bundleFoundation, price: 44.0, name: "SilkGlow Foundation", icon: "🎨" },
    { selected: bundleBlush, price: 28.0, name: "FlushVibe Silk Blush", icon: "🌸" },
  ];

  const routineItemsCount = routineSelectedProducts.filter((p) => p.selected).length;
  const routineOriginalPrice = routineSelectedProducts
    .filter((p) => p.selected)
    .reduce((sum, p) => sum + p.price, 0);
  const routineDiscount = routineItemsCount >= 3 ? 0.2 : 0;
  const routineDiscountedPrice = routineOriginalPrice * (1 - routineDiscount);

  // Cart subtotal calculation
  const cartSubtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const prod = productHighlights.find((p) => p.id === id);
    if (prod) return sum + prod.price * qty;
    if (id === "glass-routine") return sum + 113.6 * qty;
    if (id === "mini-balm") return sum + 0;
    return sum;
  }, 0);

  // Modal ESC key & scroll locking
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
        setIsWishlistOpen(false);
        setMobileMenuOpen(false);
        setSelectedProduct(null);
        setIsShadeModalOpen(false);
        setIsSearchModalOpen(false);
      }
    };
    const isAnyModalOpen =
      isCartOpen ||
      isWishlistOpen ||
      mobileMenuOpen ||
      selectedProduct !== null ||
      isShadeModalOpen ||
      isSearchModalOpen;

    if (isAnyModalOpen) {
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
    isShadeModalOpen,
    isSearchModalOpen,
  ]);

  // Filtered shades
  const filteredShades =
    activeUndertoneFilter === "All"
      ? shadeOptions
      : shadeOptions.filter((s) => s.undertone === activeUndertoneFilter);

  // Search filtered products
  const searchedProducts = productHighlights.filter(
    (p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="gc-site" id="top" tabIndex={-1}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="gc-toast" role="alert">
          <Sparkles size={16} className="text-gold" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Announcement Bar */}
      <div className="gc-announcement-bar">
        <div className="gc-wrap gc-announcement-inner">
          <a href="/ecommerce" className="gc-announcement-back">
            ← <span>Directory</span>
          </a>
          <div className="gc-announcement-center">
            <Sparkles size={13} className="text-gold inline mr-1" />
            <span>
              <strong>GLOW SOCIETY EXCLUSIVE:</strong> Complimentary Mini Glow Balm + Free US
              Shipping on $75+ orders
            </span>
          </div>
          <button
            className="gc-announcement-pill"
            onClick={() => setIsShadeModalOpen(true)}
          >
            Find My Shade ✦
          </button>
        </div>
      </div>

      {/* Main Header Navbar */}
      <header className="gc-header">
        <div className="gc-wrap gc-header-top">
          {/* Mobile Menu Toggle */}
          <button
            className="gc-header-btn gc-mobile-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Centered Brand Title */}
          <a href="#top" className="gc-brand">
            <span className="gc-brand-title">GlowCart</span>
            <span className="gc-brand-sub">Beauty • Glass Skin</span>
          </a>

          {/* Right Utility Actions (Clean on desktop; deduplicated on mobile) */}
          <div className="gc-nav-actions">
            <button
              className="gc-header-btn gc-header-search"
              onClick={() => setIsSearchModalOpen(true)}
              aria-label="Search cosmetics & skincare"
            >
              <Search size={19} />
            </button>

            <button
              className="gc-header-shades-btn"
              onClick={() => setIsShadeModalOpen(true)}
              aria-label="Shade Finder"
            >
              <span>Shade Lab</span>
            </button>

            <button
              className="gc-header-btn gc-header-wishlist"
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Saved Items"
            >
              <div className="gc-badge-wrap">
                <Heart size={19} />
                {totalWishlistCount > 0 && <span className="gc-badge">{totalWishlistCount}</span>}
              </div>
            </button>

            <button
              className="gc-header-btn gc-header-cart"
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Bag"
            >
              <div className="gc-badge-wrap">
                <ShoppingBag size={19} />
                <span className="gc-badge">{totalCartCount}</span>
              </div>
            </button>
          </div>
        </div>

        {/* Subnav Category Links (Desktop) */}
        <nav className="gc-subnav">
          <div className="gc-wrap gc-subnav-inner">
            <a href="#highlights" className="gc-sublink">New Arrivals</a>
            <a
              href="#shade-finder"
              className="gc-sublink"
              onClick={(e) => {
                e.preventDefault();
                setIsShadeModalOpen(true);
              }}
            >
              Complexion Lab
            </a>
            <a href="#routine-studio" className="gc-sublink">Glass Skin Regimen</a>
            <a href="#collections" className="gc-sublink">Curated Looks</a>
            <a href="#spotlight" className="gc-sublink">The Dewy Elixir</a>
            <a href="#society" className="gc-sublink">#GlowCartSociety</a>
          </div>
        </nav>
      </header>

      {/* Off-Canvas Mobile Drawer */}
      <div
        className={`gc-drawer-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`gc-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="gc-drawer-head">
          <div className="gc-brand">
            <span className="gc-brand-title">GlowCart</span>
            <span className="gc-brand-sub">Beauty</span>
          </div>
          <button className="gc-close-btn" onClick={() => setMobileMenuOpen(false)}>
            <X size={22} />
          </button>
        </div>

        <div className="gc-drawer-links">
          <a
            href="#highlights"
            className="gc-drawer-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>New Arrivals & Bestsellers</span>
            <ChevronRight size={16} />
          </a>
          <button
            className="gc-drawer-link gc-drawer-btn-link"
            onClick={() => {
              setMobileMenuOpen(false);
              setIsShadeModalOpen(true);
            }}
          >
            <span>SilkGlow Shade Matcher</span>
            <ChevronRight size={16} />
          </button>
          <a
            href="#routine-studio"
            className="gc-drawer-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Glass Skin Routine Studio</span>
            <ChevronRight size={16} />
          </a>
          <a
            href="#collections"
            className="gc-drawer-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Curated Editorial Looks</span>
            <ChevronRight size={16} />
          </a>
          <a
            href="#spotlight"
            className="gc-drawer-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>The Dewy Elixir Spotlight</span>
            <ChevronRight size={16} />
          </a>
          <a
            href="#society"
            className="gc-drawer-link"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span>Community Gallery (#GlowCartSociety)</span>
            <ChevronRight size={16} />
          </a>
        </div>

        <div className="gc-drawer-footer">
          <button
            className="gc-btn-black full-w"
            onClick={() => {
              setMobileMenuOpen(false);
              setIsShadeModalOpen(true);
            }}
          >
            Take Complexion Diagnostic
          </button>
        </div>
      </div>

      {/* =========================================================================
         INTERACTIVE HEADER HERO CAROUSEL (4 Botanical Luxury Slides)
         ========================================================================= */}
      <section
        className="gc-hero-carousel-section"
        onMouseEnter={() => setIsCarouselPaused(true)}
        onMouseLeave={() => setIsCarouselPaused(false)}
        onTouchStart={() => setIsCarouselPaused(true)}
        onTouchEnd={() => setIsCarouselPaused(false)}
      >
        <div className="gc-carousel-viewport">
          {heroSlides.map((slide, idx) => {
            const isActive = idx === currentHeroSlide;
            return (
              <div
                key={slide.id}
                className={`gc-carousel-slide ${isActive ? "active" : ""}`}
                aria-hidden={!isActive}
              >
                <div className="gc-carousel-bg-visual">
                  <img src={slide.img} alt={slide.title} />
                  <div className="gc-carousel-vignette" />
                </div>

                <div className="gc-wrap gc-carousel-content">
                  <div className="gc-carousel-copy-card">
                    <span className="gc-hero-badge">
                      <Sparkles size={13} className="text-gold" />
                      {slide.badge}
                    </span>

                    <h1 className="gc-hero-title">{slide.title}</h1>
                    <p className="gc-hero-sub">{slide.subtitle}</p>

                    <div className="gc-hero-actions">
                      <a href={slide.targetHref} className="gc-btn-black">
                        {slide.ctaPrimary}
                      </a>
                      <button
                        onClick={() => setIsShadeModalOpen(true)}
                        className="gc-btn-secondary"
                      >
                        {slide.ctaSecondary}
                      </button>
                    </div>

                    <div className="gc-hero-stats-row">
                      {slide.stats.map((st, sIdx) => (
                        <div key={sIdx} className="gc-hero-stat-item">
                          <strong className="gc-stat-val">{st.value}</strong>
                          <span className="gc-stat-lbl">{st.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Floating Glassmorphic Navigation Arrows */}
          <button
            className="gc-carousel-arrow left"
            onClick={prevHeroSlide}
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            className="gc-carousel-arrow right"
            onClick={nextHeroSlide}
            aria-label="Next slide"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicator Progress Dots */}
          <div className="gc-carousel-pagination">
            {heroSlides.map((_, dotIdx) => (
              <button
                key={dotIdx}
                className={`gc-carousel-dot ${dotIdx === currentHeroSlide ? "active" : ""}`}
                onClick={() => setCurrentHeroSlide(dotIdx)}
                aria-label={`Go to slide ${dotIdx + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CORE TRUST & VALUE (3 Icon Badges) */}
      <section className="gc-trust-section">
        <div className="gc-wrap">
          <div className="gc-trust-grid">
            <div className="gc-trust-card">
              <div className="gc-trust-icon-box">
                <Leaf size={26} />
              </div>
              <div>
                <h3>100% CLEAN & BOTANICAL</h3>
                <p>Formulated without parabens, phthalates, synthetic fragrance, or silicones.</p>
              </div>
            </div>

            <div className="gc-trust-card">
              <div className="gc-trust-icon-box">
                <ShieldCheck size={26} />
              </div>
              <div>
                <h3>DERMATOLOGIST CLINICALS</h3>
                <p>96% reported immediate dewy bounce and improved moisture barrier retention.</p>
              </div>
            </div>

            <div className="gc-trust-card">
              <div className="gc-trust-icon-box">
                <RefreshCw size={26} />
              </div>
              <div>
                <h3>SUSTAINABLE LUXURY</h3>
                <p>100% recyclable frosted amber glass bottles with FSC certified paper cartons.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT HIGHLIGHTS (6 Products Catalog Grid) */}
      <section className="gc-section gc-highlights-section" id="highlights">
        <div className="gc-wrap">
          <div className="gc-section-head text-center">
            <span className="gc-eyebrow">CURATED HERO ROSTER</span>
            <h2 className="gc-section-title">Clean Beauty & Glass-Skin Formulations</h2>
            <p className="gc-sub">
              Dermatologist-tested skincare-makeup hybrids designed for natural luminosity and skin health.
            </p>
          </div>

          <div className="gc-products-grid">
            {productHighlights.map((prod) => (
              <div
                key={prod.id}
                className="gc-product-card"
                onClick={() => setSelectedProduct(prod)}
              >
                <div className="gc-prod-img-box">
                  <span className="gc-prod-badge">{prod.badge}</span>
                  <img src={prod.img} alt={prod.title} loading="lazy" />
                  <button
                    className={`gc-wish-btn ${wishlist[prod.id] ? "active" : ""}`}
                    onClick={(e) => handleToggleWishlist(prod.id, e)}
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      size={16}
                      fill={wishlist[prod.id] ? "#181a1b" : "none"}
                      color={wishlist[prod.id] ? "#181a1b" : "#78716c"}
                    />
                  </button>
                </div>

                <div className="gc-prod-body">
                  <span className="gc-prod-cat">{prod.category}</span>
                  <h3 className="gc-prod-title">{prod.title}</h3>
                  <p className="gc-prod-desc">{prod.subtitle}</p>

                  <div className="gc-prod-rating-row">
                    <span className="gc-stars">★★★★★</span>
                    <span className="gc-rating-val">{prod.rating}</span>
                    <span className="gc-rating-count">({prod.reviews})</span>
                  </div>

                  <div className="gc-prod-price-row">
                    <strong className="gc-prod-price">${prod.price.toFixed(2)}</strong>
                    <span className="gc-prod-orig">${prod.origPrice.toFixed(2)}</span>
                  </div>

                  <div className="gc-prod-action-row">
                    <button
                      className="gc-btn-quick-add"
                      onClick={(e) => handleAddToCart(prod.id, e)}
                    >
                      ADD TO BAG
                    </button>
                    <button
                      className="gc-btn-quick-view"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProduct(prod);
                      }}
                    >
                      DETAILS
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMOTIONAL RHYTHM / LAUNCH OFFER BANNER */}
      <section className="gc-promo-section">
        <div className="gc-wrap">
          <div className="gc-promo-card">
            <div className="gc-promo-copy">
              <span className="gc-promo-eyebrow">✦ LIMITED EDITION LAUNCH GIFT</span>
              <h2>Complimentary Mini Glow Balm on Orders $75+</h2>
              <p>
                Infused with rosehip oil and shea butter, this multitasking balm delivers instant dewy
                luminosity to cheekbones, lips, and dry cuticles.
              </p>
              <div className="gc-promo-actions">
                <button
                  onClick={() => {
                    showToast("Added Mini Glow Balm gift to bag!");
                    setCart((prev) => ({ ...prev, "mini-balm": 1 }));
                    setIsCartOpen(true);
                  }}
                  className="gc-btn-black-sm"
                >
                  CLAIM GIFT IN BAG
                </button>
                <a href="#routine-studio" className="gc-btn-outline-dark">
                  VIEW BUNDLE DEALS
                </a>
              </div>
            </div>

            <div className="gc-promo-visual">
              <img src={promoBalmImg} alt="Mini Glow Balm jar and boxed set" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      {/* CURATED EDITORIAL LOOKS (4 Vertical Cards) */}
      <section className="gc-section gc-collections-section" id="collections">
        <div className="gc-wrap">
          <div className="gc-section-head text-center">
            <span className="gc-eyebrow">THE EDITORIAL PORTFOLIO</span>
            <h2 className="gc-section-title">Curated Glass-Skin Looks</h2>
            <p className="gc-sub">
              Tap any look to discover the exact shade pairings and application techniques used by our artists.
            </p>
          </div>

          <div className="gc-curated-grid">
            {curatedCollections.map((col) => (
              <div key={col.id} className="gc-curated-card">
                <div className="gc-curated-img-wrap">
                  <img src={col.img} alt={col.title} loading="lazy" />
                  <div className="gc-curated-gradient" />
                </div>

                <div className="gc-curated-overlay">
                  <span className="gc-curated-tag">{col.tag}</span>
                  <h3>{col.title}</h3>
                  <p className="gc-curated-p">{col.subtitle}</p>
                  <small className="gc-curated-products">{col.products}</small>
                  <button
                    onClick={() => {
                      showToast(`Added ${col.title} bundle essentials to your bag!`);
                      handleAddToCart("serum");
                      handleAddToCart("blush");
                      setIsCartOpen(true);
                    }}
                    className="gc-btn-outline-white"
                  >
                    SHOP THIS LOOK
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCT SPOTLIGHT */}
      <section className="gc-section gc-spotlight-section" id="spotlight">
        <div className="gc-wrap">
          <div className="gc-spotlight-card">
            <div className="gc-spotlight-img">
              <img
                src={spotlightElixirImg}
                alt="The Dewy Elixir Serum on luminous silk surface"
                loading="lazy"
              />
            </div>

            <div className="gc-spotlight-body">
              <span className="gc-eyebrow">FORMULA SPOTLIGHT</span>
              <h3 className="gc-spotlight-title">The Dewy Elixir Serum</h3>
              <p className="gc-spotlight-desc">
                Our flagship liquid light concentrate formulated with 5% Niacinamide, multi-depth hyaluronic
                acid, and cold-pressed sugarcane squalane. Clinically proven to increase epidermal hydration by
                +148% in under 30 minutes.
              </p>

              <div className="gc-spotlight-ingredients-grid">
                <div className="gc-ing-pill">✓ Hyaluronic Acid Multi-Depth Complex</div>
                <div className="gc-ing-pill">✓ Niacinamide 5% Pore Refiner</div>
                <div className="gc-ing-pill">✓ Plant-Derived Sugarcane Squalane</div>
                <div className="gc-ing-pill">✓ Australian Kakadu Plum (Vit C)</div>
              </div>

              <div className="gc-spotlight-price-row">
                <strong className="gc-spotlight-price">$38.00</strong>
                <span className="gc-spotlight-subtext">Free shipping on orders $50+</span>
              </div>

              <div className="gc-spotlight-buttons">
                <button
                  onClick={() => {
                    handleAddToCart("serum");
                    setIsCartOpen(true);
                  }}
                  className="gc-btn-black"
                >
                  ADD ELIXIR TO BAG • $38.00
                </button>
                <button
                  onClick={() => setSelectedProduct(productHighlights[0])}
                  className="gc-btn-outline-dark"
                >
                  VIEW FORMULA SPECS
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE GLASS SKIN ROUTINE BUNDLE BUILDER */}
      <section className="gc-section gc-bundle-section" id="routine-studio">
        <div className="gc-wrap">
          <div className="gc-section-head text-center">
            <span className="gc-eyebrow">CUSTOM RADIANCE LAB</span>
            <h2 className="gc-section-title">Build Your 4-Step Glass Skin Regimen</h2>
            <p className="gc-sub">
              Select your customized formula layers. Select 3 or more products to receive an automatic{" "}
              <strong>20% bundle discount</strong>.
            </p>
          </div>

          <div className="gc-bundle-grid">
            {/* Left Steps Selection */}
            <div className="gc-bundle-steps">
              <label className={`gc-bundle-item ${bundlePrimer ? "active" : ""}`}>
                <input
                  type="checkbox"
                  checked={bundlePrimer}
                  onChange={(e) => setBundlePrimer(e.target.checked)}
                />
                <div className="gc-bundle-item-content">
                  <div className="gc-bundle-item-header">
                    <strong>Step 1: Glow Grip Hydrating Primer</strong>
                    <span className="gc-bundle-item-price">$32.00</span>
                  </div>
                  <small>Preps skin barrier and locks in dewy foundation for 16h wear.</small>
                </div>
              </label>

              <label className={`gc-bundle-item ${bundleSerum ? "active" : ""}`}>
                <input
                  type="checkbox"
                  checked={bundleSerum}
                  onChange={(e) => setBundleSerum(e.target.checked)}
                />
                <div className="gc-bundle-item-content">
                  <div className="gc-bundle-item-header">
                    <strong>Step 2: The Dewy Elixir Serum</strong>
                    <span className="gc-bundle-item-price">$38.00</span>
                  </div>
                  <small>5% Niacinamide + Kakadu Plum extract for instant bounce & moisture.</small>
                </div>
              </label>

              <label className={`gc-bundle-item ${bundleFoundation ? "active" : ""}`}>
                <input
                  type="checkbox"
                  checked={bundleFoundation}
                  onChange={(e) => setBundleFoundation(e.target.checked)}
                />
                <div className="gc-bundle-item-content">
                  <div className="gc-bundle-item-header">
                    <strong>Step 3: SilkGlow Radiant Foundation</strong>
                    <span className="gc-bundle-item-price">$44.00</span>
                  </div>
                  <small>
                    Shade: {selectedShade.name} ({selectedShade.undertone}) • Weightless second-skin luminosity.
                  </small>
                </div>
              </label>

              <label className={`gc-bundle-item ${bundleBlush ? "active" : ""}`}>
                <input
                  type="checkbox"
                  checked={bundleBlush}
                  onChange={(e) => setBundleBlush(e.target.checked)}
                />
                <div className="gc-bundle-item-content">
                  <div className="gc-bundle-item-header">
                    <strong>Step 4: FlushVibe Silk Blush</strong>
                    <span className="gc-bundle-item-price">$28.00</span>
                  </div>
                  <small>Shade: Soft Petal • Light-reflecting pearlescent cheek tint.</small>
                </div>
              </label>
            </div>

            {/* Right Summary & Tray */}
            <div className="gc-bundle-summary">
              <h3>YOUR CUSTOM RADIANCE SPEC</h3>

              <div className="gc-bundle-tray">
                <span className="gc-tray-label">Selected Layer Tray:</span>
                <div className="gc-tray-items">
                  {routineSelectedProducts.map((p, i) => (
                    <span
                      key={i}
                      className={`gc-tray-tag ${p.selected ? "active" : "inactive"}`}
                    >
                      {p.icon} {p.name.split(" ")[0]}
                    </span>
                  ))}
                </div>
              </div>

              <div className="gc-sum-row">
                <span>Selected Items:</span>
                <strong>{routineItemsCount} of 4 Products</strong>
              </div>
              <div className="gc-sum-row">
                <span>Total Retail Value:</span>
                <span className="gc-strike">${routineOriginalPrice.toFixed(2)}</span>
              </div>
              <div className={`gc-sum-row ${routineItemsCount >= 3 ? "highlight" : ""}`}>
                <span>Bundle Savings (20%):</span>
                <span>
                  {routineItemsCount >= 3
                    ? `-$${(routineOriginalPrice * 0.2).toFixed(2)}`
                    : "Select 3+ items for 20% off"}
                </span>
              </div>
              <div className="gc-sum-total-row">
                <span>Bundle Total:</span>
                <strong>${routineDiscountedPrice.toFixed(2)}</strong>
              </div>

              <button
                disabled={routineItemsCount === 0}
                onClick={() => {
                  setCart((prev) => ({
                    ...prev,
                    "glass-routine": (prev["glass-routine"] || 0) + 1,
                  }));
                  showToast("Glass Skin Routine Bundle added to your beauty bag!");
                  setIsCartOpen(true);
                }}
                className="gc-btn-black full-w mt-3"
              >
                ADD COMPLETE ROUTINE ({routineItemsCount} ITEMS)
              </button>

              <p className="gc-bundle-guarantee">
                ✓ 30-Day Happiness Guarantee • Free Returns • Clean Beauty Certified
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AS SEEN ON YOU / COMMUNITY GALLERY */}
      <section className="gc-section gc-ugc-section" id="society">
        <div className="gc-wrap">
          <div className="gc-section-head text-center">
            <span className="gc-eyebrow">#GLOWCARTSOCIETY</span>
            <h2 className="gc-section-title">Real Skin, Unretouched Dew</h2>
            <p className="gc-sub">
              Explore authentic selfies, daily layering rituals, and unfiltered wear tests from our clean beauty
              community.
            </p>
          </div>

          <div className="gc-ugc-grid">
            {ugcReviews.map((rev) => (
              <div key={rev.id} className="gc-ugc-card">
                <div className="gc-ugc-img">
                  <img src={rev.img} alt={rev.name} loading="lazy" />
                  <span className="gc-ugc-verified">Verified Buyer</span>
                </div>
                <div className="gc-ugc-body">
                  <div className="gc-stars-row">{"★★★★★"}</div>
                  <strong className="gc-ugc-handle">{rev.handle}</strong>
                  <span className="gc-ugc-product">{rev.product}</span>
                  <p>"{rev.comment}"</p>
                  <button
                    onClick={() => {
                      showToast(`Matching routine used by ${rev.name}`);
                      handleAddToCart("serum");
                    }}
                    className="gc-btn-ugc-shop"
                  >
                    SHOP THIS GLOW
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="gc-footer">
        <div className="gc-wrap gc-footer-grid">
          {/* Col 1: Brand & Bio */}
          <div className="gc-footer-col">
            <span className="gc-brand-title">GLOWCART</span>
            <span className="gc-brand-sub">Beauty</span>
            <p className="gc-footer-bio">
              Clean, botanical skincare-makeup hybrids crafted with clinical actives and ethical ingredients
              for healthy, luminous glass skin.
            </p>
            <p className="gc-footer-handle">@GlowCartSociety • #GlassSkinRoutine</p>
          </div>

          {/* Col 2: Newsletter */}
          <div className="gc-footer-col">
            <h4>JOIN THE GLOW SOCIETY</h4>
            <p className="gc-footer-desc">
              Subscribe for early access to product drops, shade consultations, and private 15% VIP discounts.
            </p>
            <form
              className="gc-news-form"
              onSubmit={(e) => {
                e.preventDefault();
                showToast("Welcome to Glow Society! Use code GLOW15 for 15% off.");
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

          {/* Col 3: Customer Care */}
          <div className="gc-footer-col">
            <h4>CUSTOMER CARE</h4>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                showToast("Support team: care@glowcartbeauty.com");
              }}
            >
              Contact Support
            </a>
            <button
              className="gc-footer-link-btn"
              onClick={() => setIsShadeModalOpen(true)}
            >
              Virtual Shade Consultation
            </button>
            <a
              href="#shipping"
              onClick={(e) => {
                e.preventDefault();
                showToast("Free 2-day delivery on orders $75+");
              }}
            >
              Shipping & Track Order
            </a>
            <a
              href="#returns"
              onClick={(e) => {
                e.preventDefault();
                showToast("Free 30-day returns with pre-paid labels");
              }}
            >
              30-Day Happiness Guarantee
            </a>
          </div>
        </div>

        {/* Subfooter */}
        <div className="gc-subfooter">
          <div className="gc-wrap gc-subfooter-inner">
            <p>Copyright © 2026 GlowCart Beauty Inc. All Rights Reserved. Clean & Cruelty-Free.</p>
            <div className="gc-subfooter-links">
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
              <span>Accessibility</span>
            </div>
          </div>
        </div>
      </footer>

      {/* =========================================================================
         STICKY MOBILE BOTTOM NAVIGATION BAR (Thumb-Accessible Controls)
         ========================================================================= */}
      <nav className="gc-mobile-bottom-nav" aria-label="Mobile Bottom Navigation">
        <a href="#highlights" className="gc-bottom-item" aria-label="Shop All Products">
          <Package size={20} />
          <span>Shop</span>
        </a>

        <button
          className="gc-bottom-item"
          onClick={() => setIsShadeModalOpen(true)}
          aria-label="Find Your Foundation Shade"
        >
          <Sparkles size={20} />
          <span>Shades</span>
        </button>

        <a
          href="#routine-studio"
          className="gc-bottom-item gc-bottom-highlight"
          aria-label="Build Glass Skin Regimen"
        >
          <Sliders size={20} />
          <span>Routine</span>
        </a>

        <button
          className="gc-bottom-item"
          onClick={() => setIsWishlistOpen(true)}
          aria-label="View Saved Items"
        >
          <div className="gc-bottom-badge-wrap">
            <Heart size={20} />
            {totalWishlistCount > 0 && <span className="gc-bottom-badge">{totalWishlistCount}</span>}
          </div>
          <span>Saved</span>
        </button>

        <button
          className="gc-bottom-item"
          onClick={() => setIsCartOpen(true)}
          aria-label="View Shopping Bag"
        >
          <div className="gc-bottom-badge-wrap">
            <ShoppingBag size={20} />
            {totalCartCount > 0 && <span className="gc-bottom-badge">{totalCartCount}</span>}
          </div>
          <span>Bag</span>
        </button>
      </nav>

      {/* =========================================================================
         SLIDE-OUT CART DRAWER
         ========================================================================= */}
      <div
        className={`gc-drawer-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
      />
      <div className={`gc-cart-drawer ${isCartOpen ? "open" : ""}`}>
        <div className="gc-cart-head">
          <h3>SHOPPING BAG ({totalCartCount})</h3>
          <button onClick={() => setIsCartOpen(false)} aria-label="Close cart">
            <X size={20} />
          </button>
        </div>

        {/* Free Gift / Shipping Progress Tracker */}
        <div className="gc-cart-progress-box">
          <div className="gc-cart-progress-label">
            {cartSubtotal >= 75 ? (
              <span className="text-green">
                <CheckCircle2 size={14} className="inline mr-1" />
                You unlocked FREE Shipping & Mini Glow Balm!
              </span>
            ) : (
              <span>
                Add <strong>${(75 - cartSubtotal).toFixed(2)}</strong> more for Free Gift & Shipping!
              </span>
            )}
          </div>
          <div className="gc-cart-progress-bar">
            <div
              className="gc-cart-progress-fill"
              style={{ width: `${Math.min(100, (cartSubtotal / 75) * 100)}%` }}
            />
          </div>
        </div>

        <div className="gc-cart-body">
          {totalCartCount > 0 ? (
            <div className="gc-cart-list">
              {Object.entries(cart).map(([id, qty]) => {
                const prod = productHighlights.find((p) => p.id === id);
                const isMiniBalm = id === "mini-balm";
                const isBundle = id === "glass-routine";

                let title = prod
                  ? prod.title
                  : isMiniBalm
                  ? "Mini Glow Balm (Launch Gift)"
                  : "Glass Skin Routine Bundle (4 Items)";
                let price = prod ? prod.price : isMiniBalm ? 0 : 113.6;
                let img = prod ? prod.img : isMiniBalm ? promoBalmImg : heroDewy1Img;

                return (
                  <div key={id} className="gc-cart-item">
                    <img src={img} alt={title} />
                    <div className="gc-cart-item-info">
                      <h4>{title}</h4>
                      <strong>{price === 0 ? "FREE" : `$${(price * qty).toFixed(2)}`}</strong>

                      {!isMiniBalm ? (
                        <div className="gc-cart-qty-row">
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
                            className="gc-trash-link"
                            onClick={() => handleRemoveFromCart(id)}
                            aria-label="Remove item"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      ) : (
                        <button
                          className="gc-trash-link mt-1"
                          onClick={() => handleRemoveFromCart(id)}
                        >
                          Remove gift
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="gc-empty-cart">
              <ShoppingBag size={48} className="text-muted" />
              <h4>Your beauty bag is empty</h4>
              <p>Explore The Dewy Elixir serum and SilkGlow radiant foundation.</p>
              <button
                className="gc-btn-black-sm mt-3"
                onClick={() => {
                  setIsCartOpen(false);
                  handleAddToCart("serum");
                }}
              >
                Add The Dewy Elixir
              </button>
            </div>
          )}
        </div>

        {totalCartCount > 0 && (
          <div className="gc-cart-foot">
            <div className="gc-cart-total-row">
              <span>Estimated Subtotal:</span>
              <strong>${cartSubtotal.toFixed(2)}</strong>
            </div>
            <p className="gc-shipping-calc">
              Tax calculated at checkout. 30-Day risk-free return guarantee.
            </p>
            <button
              onClick={() => {
                setIsCartOpen(false);
                showToast("Proceeding to Secure Beauty Checkout...");
              }}
              className="gc-btn-black full-w"
            >
              PROCEED TO CHECKOUT • ${cartSubtotal.toFixed(2)}
            </button>
          </div>
        )}
      </div>

      {/* =========================================================================
         WISHLIST DRAWER
         ========================================================================= */}
      <div
        className={`gc-drawer-overlay ${isWishlistOpen ? "open" : ""}`}
        onClick={() => setIsWishlistOpen(false)}
      />
      <div className={`gc-cart-drawer ${isWishlistOpen ? "open" : ""}`}>
        <div className="gc-cart-head">
          <h3>SAVED BEAUTY ({totalWishlistCount})</h3>
          <button onClick={() => setIsWishlistOpen(false)} aria-label="Close wishlist">
            <X size={20} />
          </button>
        </div>

        <div className="gc-cart-body">
          {totalWishlistCount > 0 ? (
            <div className="gc-cart-list">
              {Object.entries(wishlist)
                .filter(([_, active]) => active)
                .map(([id]) => {
                  const prod = productHighlights.find((p) => p.id === id);
                  if (!prod) return null;
                  return (
                    <div key={id} className="gc-cart-item">
                      <img src={prod.img} alt={prod.title} />
                      <div className="gc-cart-item-info">
                        <h4>{prod.title}</h4>
                        <strong>${prod.price.toFixed(2)}</strong>
                        <div className="gc-wishlist-action-row">
                          <button
                            className="gc-btn-black-sm"
                            onClick={() => {
                              handleAddToCart(id);
                              handleToggleWishlist(id);
                            }}
                          >
                            MOVE TO BAG
                          </button>
                          <button
                            className="gc-trash-link"
                            onClick={() => handleToggleWishlist(id)}
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
            <div className="gc-empty-cart">
              <Heart size={48} className="text-muted" />
              <h4>No items saved yet</h4>
              <p>Tap the heart icon on any product to save it to your wishlist.</p>
            </div>
          )}
        </div>
      </div>

      {/* =========================================================================
         QUICK VIEW PRODUCT MODAL
         ========================================================================= */}
      {selectedProduct && (
        <div className="gc-modal-backdrop" onClick={() => setSelectedProduct(null)}>
          <div className="gc-modal-card" onClick={(e) => e.stopPropagation()}>
            <button
              className="gc-modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product details"
            >
              <X size={20} />
            </button>

            <div className="gc-modal-grid">
              <div className="gc-modal-img">
                <img src={selectedProduct.img} alt={selectedProduct.title} />
              </div>

              <div className="gc-modal-info">
                <span className="gc-pill">{selectedProduct.category}</span>
                <h2>{selectedProduct.title}</h2>
                <p className="gc-modal-desc">{selectedProduct.subtitle}</p>

                <div className="gc-modal-price-row">
                  <strong>${selectedProduct.price.toFixed(2)}</strong>
                  <span>${selectedProduct.origPrice.toFixed(2)}</span>
                  <span className="gc-modal-discount-pill">
                    Save $
                    {(selectedProduct.origPrice - selectedProduct.price).toFixed(2)}
                  </span>
                </div>

                <p className="gc-modal-body-text">
                  {selectedProduct.description ||
                    "Clinically proven clean beauty formulation infused with botanical squalane and active antioxidants."}
                </p>

                <div className="gc-features-list">
                  {selectedProduct.benefits ? (
                    selectedProduct.benefits.map((b, bIdx) => (
                      <div key={bIdx}>
                        <Check size={14} className="text-gold" /> {b}
                      </div>
                    ))
                  ) : (
                    <>
                      <div>
                        <Check size={14} className="text-gold" /> Clean, Plant-Powered Active Formula
                      </div>
                      <div>
                        <Check size={14} className="text-gold" /> Non-Comedogenic & Dermatologist
                        Tested
                      </div>
                      <div>
                        <Check size={14} className="text-gold" /> 100% Recyclable Glass & FSC
                        Cartons
                      </div>
                    </>
                  )}
                </div>

                <div className="gc-modal-action-row">
                  <button
                    className="gc-btn-black full-w"
                    onClick={() => {
                      handleAddToCart(selectedProduct.id);
                      setSelectedProduct(null);
                    }}
                  >
                    ADD TO BAG • ${selectedProduct.price.toFixed(2)}
                  </button>
                  <button
                    className="gc-btn-wishlist-toggle"
                    onClick={(e) => handleToggleWishlist(selectedProduct.id, e)}
                  >
                    <Heart
                      size={18}
                      fill={wishlist[selectedProduct.id] ? "#181a1b" : "none"}
                      color={wishlist[selectedProduct.id] ? "#181a1b" : "#78716c"}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
         SILKGLOW SHADE FINDER LAB MODAL
         ========================================================================= */}
      {isShadeModalOpen && (
        <div className="gc-modal-backdrop" onClick={() => setIsShadeModalOpen(false)}>
          <div
            className="gc-modal-card gc-shade-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gc-modal-close"
              onClick={() => setIsShadeModalOpen(false)}
              aria-label="Close shade matcher"
            >
              <X size={20} />
            </button>

            <div className="gc-shade-content">
              <span className="gc-eyebrow">GLOWCART COMPLEXION LAB</span>
              <h2>FIND YOUR SILKGLOW SHADE</h2>
              <p>
                Select your skin tone and undertone profile for an undetectable, second-skin match.
              </p>

              {/* Undertone Filter Pills */}
              <div className="gc-undertone-filter-bar">
                {["All", "Neutral", "Warm", "Olive", "Rich"].map((tab) => (
                  <button
                    key={tab}
                    className={`gc-filter-tab ${activeUndertoneFilter === tab ? "active" : ""}`}
                    onClick={() => setActiveUndertoneFilter(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="gc-swatches-grid">
                {filteredShades.map((s) => (
                  <div
                    key={s.id}
                    className={`gc-swatch-card ${selectedShade.id === s.id ? "active" : ""}`}
                    onClick={() => setSelectedShade(s)}
                  >
                    <span className="gc-color-circle" style={{ backgroundColor: s.hex }} />
                    <strong>{s.name}</strong>
                    <small>
                      {s.depth} • {s.undertone}
                    </small>
                  </div>
                ))}
              </div>

              <div className="gc-shade-selected-box">
                <span
                  className="gc-color-circle inline mr-2"
                  style={{ backgroundColor: selectedShade.hex }}
                />
                <div>
                  <strong>Active Selection: {selectedShade.name}</strong>
                  <p>
                    Optimal formulation for {selectedShade.undertone} undertones with natural radiant finish.
                  </p>
                </div>
              </div>

              <button
                className="gc-btn-black full-w mt-3"
                onClick={() => {
                  setIsShadeModalOpen(false);
                  showToast(`Matched: ${selectedShade.name}! Applied to your beauty profile.`);
                }}
              >
                CONFIRM SHADE SELECTION
              </button>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
         LIVE PRODUCT SEARCH MODAL
         ========================================================================= */}
      {isSearchModalOpen && (
        <div className="gc-modal-backdrop" onClick={() => setIsSearchModalOpen(false)}>
          <div
            className="gc-modal-card gc-search-modal-card"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="gc-modal-close"
              onClick={() => setIsSearchModalOpen(false)}
              aria-label="Close search"
            >
              <X size={20} />
            </button>

            <div className="gc-search-head">
              <span className="gc-eyebrow">QUICK FINDER</span>
              <h2>Search GlowCart Beauty</h2>
              <div className="gc-search-input-wrap">
                <Search size={18} className="text-muted" />
                <input
                  type="text"
                  placeholder="Search serum, foundation, tint, blush, lip oil..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")}>
                    <X size={16} />
                  </button>
                )}
              </div>
            </div>

            <div className="gc-search-results">
              {searchedProducts.length > 0 ? (
                searchedProducts.map((p) => (
                  <div
                    key={p.id}
                    className="gc-search-item"
                    onClick={() => {
                      setIsSearchModalOpen(false);
                      setSelectedProduct(p);
                    }}
                  >
                    <img src={p.img} alt={p.title} />
                    <div className="gc-search-item-info">
                      <h4>{p.title}</h4>
                      <small>{p.subtitle}</small>
                      <strong>${p.price.toFixed(2)}</strong>
                    </div>
                    <button
                      className="gc-btn-black-sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(p.id);
                        setIsSearchModalOpen(false);
                      }}
                    >
                      ADD
                    </button>
                  </div>
                ))
              ) : (
                <div className="gc-search-empty">
                  <p>No cosmetics found matching "{searchQuery}". Try "serum" or "blush".</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

export default GlowCartBeauty;
