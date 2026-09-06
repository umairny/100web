import React, { useState, useEffect, useMemo } from "react";
import {
  ArrowRight,
  ArrowDown,
  Award,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Eye,
  Heart,
  HelpCircle,
  Layers,
  Leaf,
  Lock,
  Menu,
  Minus,
  Package,
  Plus,
  RefreshCw,
  Search,
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
  Info,
  Clock,
  RotateCcw,
  Share2,
} from "lucide-react";
import "./HearthLinenLiving.css";

// Photo Assets
import heroSofaImg from "../../assets/optimized/ecommerce/hearthlinen/hero-sofa.webp";
import collBeddingImg from "../../assets/optimized/ecommerce/hearthlinen/coll-bedding.webp";
import collPillowsImg from "../../assets/optimized/ecommerce/hearthlinen/coll-pillows.webp";
import collDecorImg from "../../assets/optimized/ecommerce/hearthlinen/coll-decor.webp";
import collDiningImg from "../../assets/optimized/ecommerce/hearthlinen/coll-dining.webp";

import promoThrowImg from "../../assets/optimized/ecommerce/hearthlinen/promo-throw.webp";

import prodSheetsImg from "../../assets/optimized/ecommerce/hearthlinen/prod-sheets.webp";
import prodPillowImg from "../../assets/optimized/ecommerce/hearthlinen/prod-pillow.webp";
import prodVaseImg from "../../assets/optimized/ecommerce/hearthlinen/prod-vase.webp";
import prodCandleImg from "../../assets/optimized/ecommerce/hearthlinen/prod-candle.webp";
import prodDuvetImg from "../../assets/optimized/ecommerce/hearthlinen/prod-duvet.webp";
import prodThrowImg from "../../assets/optimized/ecommerce/hearthlinen/prod-throw.webp";
import prodNapkinsImg from "../../assets/optimized/ecommerce/hearthlinen/prod-napkins.webp";
import prodTrayImg from "../../assets/optimized/ecommerce/hearthlinen/prod-tray.webp";

import layerOatmealImg from "../../assets/optimized/ecommerce/hearthlinen/layer-oatmeal.webp";
import layerWhiteImg from "../../assets/optimized/ecommerce/hearthlinen/layer-white.webp";
import layerTerracottaImg from "../../assets/optimized/ecommerce/hearthlinen/layer-terracotta.webp";

import lookbookRoomImg from "../../assets/optimized/ecommerce/hearthlinen/lookbook-room.webp";
import artisanLinenImg from "../../assets/optimized/ecommerce/hearthlinen/artisan-linen.webp";
import artisanPotteryImg from "../../assets/optimized/ecommerce/hearthlinen/artisan-pottery.webp";
import journalTextilesImg from "../../assets/optimized/ecommerce/hearthlinen/journal-textiles.webp";
import journalShelfImg from "../../assets/optimized/ecommerce/hearthlinen/journal-shelf.webp";

// Minimal Hearth & Linen Framed Monogram Logo
function HearthLinenLogo({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <rect x="2" y="2" width="28" height="28" rx="2" stroke="currentColor" strokeWidth="1.75" />
      <path d="M10 23V9M22 23V9M10 16H22" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" />
    </svg>
  );
}

// 3 Curated Hero Sanctuary Editorial Scenes
const heroSlides = [
  {
    id: "bedding",
    eyebrow: "EDITORIAL VOL. IV • FRENCH FLAX COLLECTION",
    titleLead: "Harmony in",
    titleAccent: "Every Detail.",
    sub: "Consciously curated French flax bedding, hand-dyed mudcloth, and sculptural stoneware. Pre-washed with volcanic pumice for buttery lived-in softness from day one.",
    img: heroSofaImg,
    alt: "Warm sunlit bedroom with relaxed French flax linen bedding, fluted nightstand and handcrafted ceramics",
    primaryCta: { label: "EXPLORE BEDDING", href: "#featured" },
    secondaryCta: { label: "CUSTOM BEDROOM STUDIO", href: "#layering-studio" },
    spotlight: {
      productId: "sheets",
      title: "Organic French Flax Sheet Set",
      subtitle: "100% Normandy Linen • Pre-Washed",
      price: 185.0,
      origPrice: 220.0,
      rating: 4.9,
      reviews: 142,
      badge: "BESTSELLER",
      img: prodSheetsImg,
    },
    swatches: [
      { name: "Oatmeal Natural", hex: "#d8c7b5" },
      { name: "Warm Bone", hex: "#f5f0ea" },
      { name: "Terracotta Rust", hex: "#b57e56" },
      { name: "Eucalyptus Sage", hex: "#8a9a86" },
    ],
  },
  {
    id: "room",
    eyebrow: "IMMERSIVE ROOM STYLING • AUTUMN SANCTUARY",
    titleLead: "Tactile Layers &",
    titleAccent: "Honest Fibers.",
    sub: "Harmonizing textural Malian mudcloth, heavyweight linen duvets, and solar-kiln fired stoneware for a slow-living residential retreat.",
    img: lookbookRoomImg,
    alt: "Styled bedroom sanctuary with textured pillows, relaxed sheets, and ceramic vases",
    primaryCta: { label: "SHOP THE ROOM", href: "#lookbook" },
    secondaryCta: { label: "VIEW ARTISAN GUILDS", href: "#provenance" },
    spotlight: {
      productId: "pillow",
      title: "African Mudcloth Cushion",
      subtitle: "Hand-Dyed with River Clay",
      price: 78.0,
      origPrice: 95.0,
      rating: 4.8,
      reviews: 98,
      badge: "HANDMADE",
      img: prodPillowImg,
    },
    swatches: [
      { name: "Charcoal Tribal", hex: "#2b2a29" },
      { name: "Raw Cream", hex: "#ede7dd" },
      { name: "Earth Umber", hex: "#634735" },
    ],
  },
  {
    id: "promo",
    eyebrow: "LIMITED SEASONAL TEXTILE EVENT • 25% OFF",
    titleLead: "Weightless Warmth,",
    titleAccent: "Pure Alpaca.",
    sub: "High-altitude Peruvian baby alpaca wool and ribbed merino blankets brushed for cloudlike comfort across breezy summer nights.",
    img: promoThrowImg,
    alt: "Folded luxurious Hudson wool throw blanket draped over an armchair",
    primaryCta: { label: "CLAIM 25% DEAL", href: "#promo" },
    secondaryCta: { label: "EXPLORE THROWS", href: "#featured" },
    spotlight: {
      productId: "throw",
      title: "The Hudson Wool Throw",
      subtitle: "Baby Alpaca & Merino Blend",
      price: 108.75,
      origPrice: 145.0,
      rating: 5.0,
      reviews: 73,
      badge: "25% OFF",
      img: promoThrowImg,
    },
    swatches: [
      { name: "Honey Wheat", hex: "#c9a674" },
      { name: "Charcoal Heather", hex: "#3a3937" },
      { name: "Ivory Cloud", hex: "#f7f4ee" },
    ],
  },
];

// 4 Curated Collections Dataset
const clearCollections = [
  {
    id: "bedding",
    title: "LINEN BEDDING",
    btnText: "EXPLORE BEDDING",
    img: collBeddingImg,
    count: "Duvets, Sheet Sets & Pillow Shams",
    tag: "100% French Flax",
  },
  {
    id: "pillows",
    title: "ARTISANAL PILLOWS",
    btnText: "BROWSE PILLOWS",
    img: collPillowsImg,
    count: "Handwoven Mudcloth, Wool & Bouclé",
    tag: "Generational Weaves",
  },
  {
    id: "decor",
    title: "CURATED DECOR",
    btnText: "SHOP DECOR",
    img: collDecorImg,
    count: "Stoneware Vases, Brass Tapers & Trays",
    tag: "Solar Kiln Fired",
  },
  {
    id: "tabletop",
    title: "TABLETOP & DINING",
    btnText: "EXPLORE TABLETOP",
    img: collDiningImg,
    count: "Raw Fringe Napkins & Washed Runners",
    tag: "Heirloom Living",
  },
];

// Product Definition Interface
export interface ProductItem {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  origPrice: number;
  rating: number;
  reviews: number;
  img: string;
  category: "Bedding" | "Pillows & Throws" | "Ceramic Decor" | "Tabletop";
  badge?: string;
  swatches: { name: string; hex: string }[];
  material: string;
  weightGsm?: string;
  dimensions: string;
  care: string;
  description: string;
}

// 8 Curated Products Dataset
const allProducts: ProductItem[] = [
  {
    id: "sheets",
    title: "Organic French Flax Linen Sheet Set",
    subtitle: "Pre-washed with organic pumice for buttery lived-in softness from day one",
    price: 185.0,
    origPrice: 220.0,
    rating: 4.9,
    reviews: 142,
    img: prodSheetsImg,
    category: "Bedding",
    badge: "BESTSELLER",
    swatches: [
      { name: "Oatmeal Natural", hex: "#d8c7b5" },
      { name: "Warm Bone", hex: "#f5f0ea" },
      { name: "Terracotta Rust", hex: "#b57e56" },
      { name: "Eucalyptus Sage", hex: "#8a9a86" },
    ],
    material: "100% Certified Normandy French Flax Linen",
    weightGsm: "175 GSM (Year-round thermoregulating)",
    dimensions: "Queen: Flat (96\"x105\"), Fitted (60\"x80\"x16\" deep pocket), 2 Pillowcases (20\"x30\")",
    care: "Machine wash cold on gentle cycle. Tumble dry low or line dry in shade.",
    description:
      "Crafted from 100% organic French flax harvested along the Normandy coast. Naturally hypoallergenic, breathable, and pre-softened for effortless draping that gets better with every single wash.",
  },
  {
    id: "duvet",
    title: "Cloud Washed Linen Duvet Cover",
    subtitle: "Tailored with coconut-shell button closures and interior corner duvet ties",
    price: 195.0,
    origPrice: 235.0,
    rating: 4.9,
    reviews: 89,
    img: prodDuvetImg,
    category: "Bedding",
    badge: "SIGNATURE",
    swatches: [
      { name: "Terracotta Rust", hex: "#b57e56" },
      { name: "Oatmeal Natural", hex: "#d8c7b5" },
      { name: "Warm Bone", hex: "#f5f0ea" },
    ],
    material: "100% Certified Normandy French Flax Linen",
    weightGsm: "185 GSM (Substantial, cloud-like drape)",
    dimensions: "Full/Queen: 90\" x 92\" with interior corner ties",
    care: "Machine wash cold with gentle detergent. Avoid optical brighteners.",
    description:
      "A serene centerpiece for conscious rest. Airy yet substantial, with invisible corner ties that keep your duvet insert anchored perfectly through the night.",
  },
  {
    id: "pillow",
    title: "Textured African Mudcloth Cushion",
    subtitle: "Authentic hand-dyed Malian mudcloth with cruelty-free down alternative insert",
    price: 78.0,
    origPrice: 95.0,
    rating: 4.8,
    reviews: 98,
    img: prodPillowImg,
    category: "Pillows & Throws",
    badge: "HANDMADE",
    swatches: [
      { name: "Charcoal Tribal", hex: "#2b2a29" },
      { name: "Raw Cream", hex: "#ede7dd" },
      { name: "Earth Umber", hex: "#634735" },
    ],
    material: "Generational handspun organic cotton dyed with river clay",
    dimensions: "20\" x 20\" square with concealed brass zipper",
    care: "Spot clean or dry clean recommended to preserve botanical dyes.",
    description:
      "Handwoven by generational weavers in West Africa using handspun cotton and fermented mineral river mud. Each geometric motif symbolizes ancestral blessings and protective harmony.",
  },
  {
    id: "throw",
    title: "Honeycomb Alpaca Wool Throw",
    subtitle: "Cloud-soft Peruvian alpaca with ribbed border and generous fringe hem",
    price: 145.0,
    origPrice: 175.0,
    rating: 5.0,
    reviews: 73,
    img: prodThrowImg,
    category: "Pillows & Throws",
    badge: "FAIR TRADE",
    swatches: [
      { name: "Honey Wheat", hex: "#c9a674" },
      { name: "Charcoal Heather", hex: "#3a3937" },
      { name: "Ivory Cloud", hex: "#f7f4ee" },
    ],
    material: "70% Baby Alpaca, 30% Fine Merino Wool",
    dimensions: "50\" x 70\" with 3\" twisted fringe",
    care: "Dry clean or hand wash gently in lukewarm water with wool detergent.",
    description:
      "Spun from ethically shorn Peruvian baby alpaca wool. Featherlight yet three times warmer than sheep's wool, offering weightless warmth for cool evenings.",
  },
  {
    id: "vase",
    title: "Hand-Thrown Stoneware Ceramic Vase",
    subtitle: "Artisan wheel-thrown pottery with raw silica sand matte glaze and sculpted body",
    price: 92.0,
    origPrice: 115.0,
    rating: 4.9,
    reviews: 64,
    img: prodVaseImg,
    category: "Ceramic Decor",
    badge: "STUDIO CRAFT",
    swatches: [
      { name: "Sand Matte", hex: "#d1c2b0" },
      { name: "Charcoal Basalt", hex: "#383634" },
      { name: "Terracotta Slip", hex: "#a86847" },
    ],
    material: "Solar-kiln fired local California stoneware clay",
    dimensions: "Height: 9.5\", Diameter: 6.2\", Mouth: 2.8\"",
    care: "Wipe with damp cloth. Watertight for fresh botanical arrangements.",
    description:
      "Thrown individually on a foot-pedal potter's wheel in Ojai, California. Coated in a mineral-rich matte glaze that showcases subtle firing kisses and organic asymmetry.",
  },
  {
    id: "candle",
    title: "Solid Unlacquered Brass Taper Candlestick",
    subtitle: "Heavy architectural cast brass with weighted base, designed to patina naturally",
    price: 54.0,
    origPrice: 68.0,
    rating: 4.8,
    reviews: 112,
    img: prodCandleImg,
    category: "Ceramic Decor",
    swatches: [
      { name: "Natural Brass", hex: "#c59f51" },
      { name: "Aged Bronze", hex: "#524436" },
    ],
    material: "100% Solid Recycled Cast Brass",
    dimensions: "Height: 8.5\", Base Diameter: 3.25\", Holds standard 7/8\" tapers",
    care: "Allow natural patina to develop over time or polish with brass paste.",
    description:
      "Cast in small batches by a Florentine atelier. Its weighted sculptural silhouette grounds dining tables and mantels with timeless warmth.",
  },
  {
    id: "napkins",
    title: "Frayed Edge Linen Napkins (Set of 4)",
    subtitle: "Generously sized pre-washed linen with delicate handmade frayed fringe borders",
    price: 48.0,
    origPrice: 60.0,
    rating: 4.9,
    reviews: 41,
    img: prodNapkinsImg,
    category: "Tabletop",
    swatches: [
      { name: "Botanical Sage", hex: "#7a8976" },
      { name: "Oatmeal Natural", hex: "#d8c7b5" },
      { name: "Warm Terracotta", hex: "#b57e56" },
    ],
    material: "100% Normandy Flax Linen with hand-pulled fringe",
    dimensions: "Set of 4: 18\" x 18\" each",
    care: "Machine wash cold, tumble dry low. Wrinkles celebrated.",
    description:
      "Bring relaxed European elegance to everyday meals. Hand-fringed by artisans and pre-softened so they feel effortless against dinnerware.",
  },
  {
    id: "tray",
    title: "Hand-Carved Solid White Oak Vanity Tray",
    subtitle: "Seamless heirloom joinery treated with organic food-safe beeswax and walnut oil",
    price: 68.0,
    origPrice: 85.0,
    rating: 4.8,
    reviews: 37,
    img: prodTrayImg,
    category: "Ceramic Decor",
    swatches: [
      { name: "Natural White Oak", hex: "#baa081" },
      { name: "Smoked Oak", hex: "#544439" },
    ],
    material: "Sustainably harvested Appalachian White Oak",
    dimensions: "12\" x 7.5\" x 0.85\" with beveled ergonomic handles",
    care: "Wipe with damp cloth. Recondition with wood balm annually.",
    description:
      "Hand-planed and carved from a single piece of kiln-dried white oak. Perfect for organizing perfumes, candlesticks, and bedside essentials.",
  },
];

// Artisan Material Provenance Dataset
const artisanMaterials = [
  {
    id: "linen",
    name: "Normandy French Flax",
    origin: "Normandy, France",
    cert: "European Flax® & OEKO-TEX Standard 100",
    img: artisanLinenImg,
    desc: "Grown in maritime humidity without artificial irrigation or chemical defoliants. Naturally hypoallergenic, antibacterial, and thermoregulating.",
  },
  {
    id: "pottery",
    name: "Solar-Fired Stoneware",
    origin: "Ojai, California",
    cert: "100% Lead-Free Mineral Glazes",
    img: artisanPotteryImg,
    desc: "Formed from locally dug California clay and fired in 100% solar-assisted kilns. Non-toxic, mineral glazes inspired by Mojave Desert minerals.",
  },
  {
    id: "mudcloth",
    name: "Generational Mudcloth",
    origin: "Segou, Mali",
    cert: "Authentic African Heritage Craft Guild",
    img: collPillowsImg,
    desc: "Woven on narrow handlooms from rainfed organic cotton, then hand-painted with fermented river mud rich in natural iron oxides.",
  },
  {
    id: "brass",
    name: "Solid Florentine Brass",
    origin: "Florence, Italy",
    cert: "Recycled Metal Guild & Zero Plastic",
    img: prodCandleImg,
    desc: "Cast in sand molds from recycled architectural brass. Free of synthetic lacquers so it breathes and deepens in golden warmth through the years.",
  },
];

// Customer Reviews Dataset
const customerReviews = [
  {
    id: "rev-1",
    author: "Elena Rostova",
    location: "Sausalito, CA",
    rating: 5,
    date: "Verified Buyer • 2 weeks ago",
    product: "Organic French Flax Linen Sheet Set (Oatmeal)",
    comment:
      "These sheets completely changed my sleep. They have that relaxed, effortless European boutique hotel feel, but with unbelievable softness right out of the box. Absolutely worth every penny.",
  },
  {
    id: "rev-2",
    author: "Marcus Vance",
    location: "Portland, OR",
    rating: 5,
    date: "Verified Buyer • 1 month ago",
    product: "The 4-Layer Bedroom Sanctuary Set",
    comment:
      "The Textile Layering Studio made it so easy to assemble our bedroom retreat. The French flax duvet paired with the mudcloth pillow and wool throw looks like an architectural digest spread.",
  },
  {
    id: "rev-3",
    author: "Camila Thorne",
    location: "Hudson Valley, NY",
    rating: 5,
    date: "Verified Buyer • 3 weeks ago",
    product: "Hand-Thrown Stoneware Ceramic Vase",
    comment:
      "The raw matte sand texture is extraordinary. You can feel the artisan's fingerprints subtly in the clay. It anchors our dining table with such quiet elegance.",
  },
];

// Interactive Room Visualizer Hotspots
const roomHotspots = [
  {
    id: "spot-pillow",
    top: "54%",
    left: "28%",
    productId: "pillow",
    title: "Textured Mudcloth Pillow",
    price: "$78.00",
  },
  {
    id: "spot-sheets",
    top: "66%",
    left: "55%",
    productId: "sheets",
    title: "Organic Linen Sheets",
    price: "$185.00",
  },
  {
    id: "spot-vase",
    top: "42%",
    left: "76%",
    productId: "vase",
    title: "Hand-Thrown Stoneware Vase",
    price: "$92.00",
  },
  {
    id: "spot-throw",
    top: "78%",
    left: "38%",
    productId: "throw",
    title: "Honeycomb Alpaca Throw",
    price: "$145.00",
  },
];

export function HearthLinenLiving() {
  // Shopping Cart & Wishlist State
  const [cart, setCart] = useState<{ [id: string]: number }>({
    sheets: 1,
    pillow: 1,
  });
  const [wishlist, setWishlist] = useState<{ [id: string]: boolean }>({
    vase: true,
  });

  // UI Navigation & Modal State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [quickViewQty, setQuickViewQty] = useState(1);
  const [selectedColorway, setSelectedColorway] = useState<string>("");
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [activeMaterialTab, setActiveMaterialTab] = useState<string>("linen");
  const [activeHotspot, setActiveHotspot] = useState<string | null>(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterDone, setNewsletterDone] = useState(false);
  const [promoCodeInput, setPromoCodeInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  // Hero Interactive Slider State
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  const [heroAutoPlay, setHeroAutoPlay] = useState(true);
  const [activeHeroSwatch, setActiveHeroSwatch] = useState<string>("Oatmeal Natural");

  // Auto-advance hero slides every 7 seconds when not hovered
  useEffect(() => {
    if (!heroAutoPlay) return;
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroAutoPlay]);

  // Interactive Layering Studio State
  const [studioDuvet, setStudioDuvet] = useState({
    name: "Natural Oatmeal Linen",
    price: 195,
    img: layerOatmealImg,
    hex: "#d8c7b5",
  });
  const [studioSheets, setStudioSheets] = useState({
    name: "Warm Bone Linen",
    price: 185,
    hex: "#f5f0ea",
  });
  const [studioAccent, setStudioAccent] = useState({
    name: "Charcoal Mudcloth Cushion",
    price: 78,
    hex: "#2b2a29",
  });
  const [studioThrow, setStudioThrow] = useState({
    name: "Hudson Ribbed Wool Throw",
    price: 145,
    hex: "#c9a674",
  });

  // Calculations
  const totalCartCount = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalWishlistCount = Object.values(wishlist).filter(Boolean).length;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleAddToCart = (productId: string, qty = 1, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCart((prev) => ({
      ...prev,
      [productId]: (prev[productId] || 0) + qty,
    }));
    const prod = allProducts.find((p) => p.id === productId);
    showToast(`Added ${prod ? prod.title : "item"} to bag!`);
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
      showToast(state ? "Saved to your design sanctuary wishlist ♡" : "Removed from wishlist");
      return { ...prev, [productId]: state };
    });
  };

  const handleMoveAllWishlistToCart = () => {
    const savedIds = Object.keys(wishlist).filter((id) => wishlist[id]);
    if (savedIds.length === 0) return;
    setCart((prev) => {
      const next = { ...prev };
      savedIds.forEach((id) => {
        next[id] = (next[id] || 0) + 1;
      });
      return next;
    });
    setWishlist({});
    setIsWishlistOpen(false);
    setIsCartOpen(true);
    showToast("Moved all saved sanctuary items into your bag!");
  };

  // Cart subtotal calculation
  const rawSubtotal = Object.entries(cart).reduce((total, [id, qty]) => {
    const prod = allProducts.find((p) => p.id === id);
    if (prod) return total + prod.price * qty;
    if (id === "hudson-throw-promo") return total + 108.75 * qty;
    if (id === "sanctuary-bundle") return total + 512.55 * qty;
    if (id === "room-look-bundle") return total + 425.0 * qty;
    return total;
  }, 0);

  const discountAmount = appliedPromo === "SANCTUARY10" ? rawSubtotal * 0.1 : 0;
  const finalSubtotal = Math.max(0, rawSubtotal - discountAmount);
  const freeShippingThreshold = 150;
  const progressToFreeShipping = Math.min(100, Math.round((finalSubtotal / freeShippingThreshold) * 100));
  const amountToFreeShipping = Math.max(0, freeShippingThreshold - finalSubtotal);

  // Filtered Products
  const filteredProducts = useMemo(() => {
    if (activeCategory === "All") return allProducts;
    return allProducts.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  // Search Results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();
    return allProducts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subtitle.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  // Handle Layering Studio Bundle Calculation
  const studioRawTotal = studioDuvet.price + studioSheets.price + studioAccent.price + studioThrow.price;
  const studioBundleSavings = studioRawTotal * 0.15;
  const studioBundleFinal = studioRawTotal - studioBundleSavings;

  // Open Quick View
  const openQuickView = (prod: ProductItem, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setSelectedProduct(prod);
    setQuickViewQty(1);
    setSelectedColorway(prod.swatches[0]?.name || "");
  };

  // Scroll & Escape keys
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsCartOpen(false);
        setIsWishlistOpen(false);
        setMobileMenuOpen(false);
        setSearchOpen(false);
        setSelectedProduct(null);
        setActiveHotspot(null);
      }
    };
    if (isCartOpen || isWishlistOpen || mobileMenuOpen || selectedProduct || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isCartOpen, isWishlistOpen, mobileMenuOpen, selectedProduct, searchOpen]);

  return (
    <main className="hl-site" id="top" tabIndex={-1}>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="hl-toast" role="alert">
          <CheckCircle2 size={16} className="text-terracotta" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Announcement Bar */}
      <div className="hl-topbar">
        <div className="hl-wrap hl-topbar-inner">
          <span>
            Complimentary Standard Shipping on US Orders Over $150.{" "}
            <a href="#featured" className="hl-topbar-link">
              Shop Now.
            </a>
          </span>
          <div className="hl-topbar-right">
            <span>Free 100-Night Sleep Trial</span>
            <span className="hl-sep">•</span>
            <span>OEKO-TEX® Certified</span>
          </div>
        </div>
      </div>

      {/* Main Header Navbar */}
      <header className="hl-header">
        <div className="hl-wrap hl-header-inner">
          {/* Mobile Menu Toggle */}
          <button
            className="hl-mobile-toggle"
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open mobile menu"
          >
            <Menu size={22} />
          </button>

          {/* Logo */}
          <a href="#top" className="hl-brand" aria-label="Hearth & Linen Living Home">
            <HearthLinenLogo size={26} />
            <span className="hl-brand-title">Hearth & Linen</span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hl-nav-links" aria-label="Main Navigation">
            <a href="#collections" className="hl-nav-link">Collections</a>
            <a href="#featured" className="hl-nav-link">Featured</a>
            <a href="#lookbook" className="hl-nav-link">Shop the Room</a>
            <a href="#layering-studio" className="hl-nav-link">Layering Studio</a>
            <a href="#provenance" className="hl-nav-link">Craft Provenance</a>
            <a href="#journal" className="hl-nav-link">Journal</a>
            <a href="#promo" className="hl-nav-link hl-sale-tag">Event Sale</a>
          </nav>

          {/* Right Utility Actions */}
          <div className="hl-nav-actions">
            <button
              className="hl-icon-btn"
              onClick={() => setSearchOpen(true)}
              aria-label="Search textiles and decor"
            >
              <Search size={19} />
            </button>

            <button
              className="hl-icon-btn hl-hide-mobile"
              onClick={() => showToast("Member Sanctuary & Trade Program Portal")}
              aria-label="Account and Trade Portal"
            >
              <User size={19} />
            </button>

            <button
              className="hl-icon-btn"
              onClick={() => setIsWishlistOpen(true)}
              aria-label={`Wishlist with ${totalWishlistCount} saved items`}
            >
              <div className="hl-badge-wrap">
                <Heart size={19} />
                {totalWishlistCount > 0 && <span className="hl-badge">{totalWishlistCount}</span>}
              </div>
            </button>

            <button
              className="hl-icon-btn"
              onClick={() => setIsCartOpen(true)}
              aria-label={`Shopping Bag with ${totalCartCount} items`}
            >
              <div className="hl-badge-wrap">
                <ShoppingBag size={19} />
                <span className="hl-badge">{totalCartCount}</span>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Off-Canvas Mobile Drawer */}
      <div
        className={`hl-drawer-overlay ${mobileMenuOpen ? "open" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />
      <aside className={`hl-mobile-drawer ${mobileMenuOpen ? "open" : ""}`} aria-label="Mobile Navigation">
        <div className="hl-drawer-head">
          <div className="hl-brand">
            <HearthLinenLogo size={24} />
            <span className="hl-brand-title">Hearth & Linen</span>
          </div>
          <button
            className="hl-close-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={22} />
          </button>
        </div>

        <div className="hl-drawer-links">
          {[
            { label: "Curated Collections", href: "#collections" },
            { label: "Featured Products", href: "#featured" },
            { label: "Shop the Room Visualizer", href: "#lookbook" },
            { label: "Textile Layering Studio", href: "#layering-studio" },
            { label: "Ethical Material Provenance", href: "#provenance" },
            { label: "Seasonal Textile Event (25% Off)", href: "#promo" },
            { label: "Design Journal & Guides", href: "#journal" },
            { label: "Customer Sanctuary Reviews", href: "#reviews" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hl-drawer-link"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>{item.label}</span>
              <ChevronRight size={16} />
            </a>
          ))}
        </div>

        <div className="hl-drawer-footer">
          <div className="hl-drawer-help">
            <p><strong>Need styling assistance?</strong></p>
            <p className="text-muted">Our interior artisans provide complimentary fabric swatch consultations.</p>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                showToast("Requesting Complimentary Fabric Swatch Kit");
              }}
              className="hl-btn-outline-full mt-2"
            >
              ORDER FREE SWATCH KIT
            </button>
          </div>
        </div>
      </aside>

      {/* Search Modal Drawer */}
      <div
        className={`hl-drawer-overlay ${searchOpen ? "open" : ""}`}
        onClick={() => setSearchOpen(false)}
        aria-hidden="true"
      />
      <div className={`hl-search-drawer ${searchOpen ? "open" : ""}`} role="dialog" aria-label="Search">
        <div className="hl-wrap hl-search-box">
          <div className="hl-search-input-wrap">
            <Search size={22} className="text-muted" />
            <input
              type="text"
              placeholder="Search French flax sheets, mudcloth cushions, stoneware vases..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
              className="hl-search-input"
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery("")} className="hl-clear-search" aria-label="Clear search">
                <X size={18} />
              </button>
            )}
            <button onClick={() => setSearchOpen(false)} className="hl-close-search" aria-label="Close search">
              <X size={24} />
            </button>
          </div>

          {searchQuery && (
            <div className="hl-search-results">
              <h4>Results for "{searchQuery}" ({searchResults.length})</h4>
              {searchResults.length === 0 ? (
                <p className="text-muted">No textiles or decor matched your search. Try searching "linen", "vase", or "mudcloth".</p>
              ) : (
                <div className="hl-search-grid">
                  {searchResults.map((prod) => (
                    <div
                      key={prod.id}
                      className="hl-search-item"
                      onClick={() => {
                        setSearchOpen(false);
                        openQuickView(prod);
                      }}
                    >
                      <img src={prod.img} alt={prod.title} />
                      <div>
                        <h5>{prod.title}</h5>
                        <small className="text-muted">{prod.category} • ${prod.price.toFixed(2)}</small>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Hero Section */}
      <section
        className="hl-hero-section"
        onMouseEnter={() => setHeroAutoPlay(false)}
        onMouseLeave={() => setHeroAutoPlay(true)}
      >
        {/* Background Slides with smooth crossfade */}
        <div className="hl-hero-bg">
          {heroSlides.map((slide, idx) => (
            <div
              key={slide.id}
              className={`hl-hero-slide-layer ${currentHeroSlide === idx ? "active" : ""}`}
            >
              <img
                src={slide.img}
                alt={slide.alt}
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
          <div className="hl-hero-overlay" />
        </div>

        <div className="hl-wrap hl-hero-container">
          <div className="hl-hero-content">
            <div className="hl-hero-eyebrow-badge">
              <Sparkles size={13} className="text-terracotta" />
              <span>{heroSlides[currentHeroSlide].eyebrow}</span>
            </div>

            <h1 className="hl-hero-title">
              {heroSlides[currentHeroSlide].titleLead} <br />
              <span className="hl-hero-title-italic">
                {heroSlides[currentHeroSlide].titleAccent}
              </span>
            </h1>

            <p className="hl-hero-sub">
              {heroSlides[currentHeroSlide].sub}
            </p>

            {/* Quick Swatch Bar in Hero */}
            <div className="hl-hero-swatch-picker">
              <span className="hl-hero-swatch-label">PALETTE:</span>
              <div className="hl-hero-swatches">
                {heroSlides[currentHeroSlide].swatches.map((sw) => (
                  <button
                    key={sw.name}
                    className={`hl-hero-swatch-dot ${activeHeroSwatch === sw.name ? "active" : ""}`}
                    style={{ backgroundColor: sw.hex }}
                    onClick={() => {
                      setActiveHeroSwatch(sw.name);
                      showToast(`Selected ${sw.name} tone preview`);
                    }}
                    title={sw.name}
                    aria-label={`Select ${sw.name}`}
                  />
                ))}
                <span className="hl-hero-swatch-name">{activeHeroSwatch}</span>
              </div>
            </div>

            <div className="hl-hero-btns">
              <a
                href={heroSlides[currentHeroSlide].primaryCta.href}
                className="hl-btn-terracotta hl-btn-hero-primary"
              >
                <span>{heroSlides[currentHeroSlide].primaryCta.label}</span>
                <ArrowRight size={16} />
              </a>
              <a
                href={heroSlides[currentHeroSlide].secondaryCta.href}
                className="hl-btn-glass"
              >
                {heroSlides[currentHeroSlide].secondaryCta.label}
              </a>
            </div>

            {/* Slide Navigation Tabs & Controls */}
            <div className="hl-hero-slide-nav-wrapper">
              <div className="hl-hero-slide-nav" role="tablist">
                {heroSlides.map((slide, idx) => (
                  <button
                    key={slide.id}
                    role="tab"
                    aria-selected={currentHeroSlide === idx}
                    className={`hl-slide-nav-btn ${currentHeroSlide === idx ? "active" : ""}`}
                    onClick={() => {
                      setCurrentHeroSlide(idx);
                      setActiveHeroSwatch(slide.swatches[0].name);
                    }}
                  >
                    <span className="hl-nav-num">0{idx + 1}</span>
                    <span className="hl-nav-label">
                      {idx === 0 ? "Bedding Retreat" : idx === 1 ? "Sunlit Room" : "Wool Event"}
                    </span>
                    {currentHeroSlide === idx && <span className="hl-nav-progress" key={`prog-${idx}`} />}
                  </button>
                ))}
              </div>

              <div className="hl-hero-nav-arrows">
                <button
                  className="hl-hero-arrow-btn"
                  onClick={() => {
                    const prevIdx = (currentHeroSlide - 1 + heroSlides.length) % heroSlides.length;
                    setCurrentHeroSlide(prevIdx);
                    setActiveHeroSwatch(heroSlides[prevIdx].swatches[0].name);
                  }}
                  aria-label="Previous Sanctuary Scene"
                  title="Previous Sanctuary"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  className="hl-hero-arrow-btn"
                  onClick={() => {
                    const nextIdx = (currentHeroSlide + 1) % heroSlides.length;
                    setCurrentHeroSlide(nextIdx);
                    setActiveHeroSwatch(heroSlides[nextIdx].swatches[0].name);
                  }}
                  aria-label="Next Sanctuary Scene"
                  title="Next Sanctuary"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* Floating Product Spotlight Card */}
          {(() => {
            const spot = heroSlides[currentHeroSlide].spotlight;
            return (
              <div
                className="hl-hero-spotlight-card"
                onClick={() => {
                  const p = allProducts.find((item) => item.id === spot.productId);
                  if (p) openQuickView(p);
                }}
              >
                <span className="hl-spot-eyebrow">IN THIS SANCTUARY</span>
                <div className="hl-spot-content">
                  <div className="hl-spot-thumb">
                    <img src={spot.img} alt={spot.title} />
                    <span className="hl-spot-badge">{spot.badge}</span>
                  </div>
                  <div className="hl-spot-info">
                    <h4>{spot.title}</h4>
                    <p>{spot.subtitle}</p>
                    <div className="hl-spot-meta">
                      <strong className="hl-spot-price">${spot.price.toFixed(2)}</strong>
                      {spot.origPrice > spot.price && (
                        <span className="hl-strike">${spot.origPrice.toFixed(2)}</span>
                      )}
                      <div className="hl-spot-stars">
                        <Star size={12} fill="#b57e56" color="#b57e56" />
                        <span>{spot.rating}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  className="hl-btn-spot-add"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleAddToCart(spot.productId);
                  }}
                >
                  <ShoppingBag size={14} />
                  <span>Quick Add to Bag</span>
                </button>
              </div>
            );
          })()}
        </div>

        {/* Bottom Hero Trust Ribbon */}
        <div className="hl-hero-ribbon">
          <div className="hl-wrap hl-ribbon-inner">
            <div className="hl-ribbon-item">
              <Leaf size={15} />
              <span>100% Normandy French Flax</span>
            </div>
            <span className="hl-ribbon-sep">•</span>
            <div className="hl-ribbon-item">
              <ShieldCheck size={15} />
              <span>OEKO-TEX® Non-Toxic</span>
            </div>
            <span className="hl-ribbon-sep">•</span>
            <div className="hl-ribbon-item">
              <Truck size={15} />
              <span>Free US Shipping Over $150</span>
            </div>
            <span className="hl-ribbon-sep">•</span>
            <div className="hl-ribbon-item">
              <RefreshCw size={15} />
              <span>100-Night Risk-Free Sleep Trial</span>
            </div>
          </div>
        </div>
      </section>

      {/* CLEAR COLLECTIONS (4 Grid Visual Cards) */}
      <section className="hl-section hl-collections-section" id="collections">
        <div className="hl-wrap">
          <div className="hl-section-head text-center">
            <span className="hl-eyebrow">TIMELESS FOUNDATIONS</span>
            <h2 className="hl-section-title">CLEAR COLLECTIONS</h2>
            <p className="hl-sub">Organized by room and tactile ritual to make your home styling effortless.</p>
          </div>

          <div className="hl-collections-grid">
            {clearCollections.map((col) => (
              <div
                key={col.id}
                className="hl-collection-card"
                onClick={() => {
                  const targetCat =
                    col.id === "bedding"
                      ? "Bedding"
                      : col.id === "pillows"
                      ? "Pillows & Throws"
                      : col.id === "decor"
                      ? "Ceramic Decor"
                      : "Tabletop";
                  setActiveCategory(targetCat);
                  const el = document.getElementById("featured");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
              >
                <div className="hl-col-tag">{col.tag}</div>
                <div className="hl-col-img-wrap">
                  <img src={col.img} alt={col.title} loading="lazy" />
                </div>
                <div className="hl-col-footer">
                  <div className="hl-col-text">
                    <h3>{col.title}</h3>
                    <p>{col.count}</p>
                  </div>
                  <button className="hl-btn-col-arrow" aria-label={`Explore ${col.title}`}>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST CUES (4 Horizontal Quality Commitments) */}
      <section className="hl-trust-section">
        <div className="hl-wrap">
          <div className="hl-trust-grid">
            <div className="hl-trust-card">
              <div className="hl-trust-icon-box">
                <Leaf size={24} />
              </div>
              <div className="hl-trust-info">
                <h3>SUSTAINABLY SOURCED</h3>
                <p>Harvested without irrigation, zero harsh synthetic dyes.</p>
              </div>
            </div>

            <div className="hl-trust-card">
              <div className="hl-trust-icon-box">
                <Award size={24} />
              </div>
              <div className="hl-trust-info">
                <h3>ARTISAN WORKMANSHIP</h3>
                <p>Generational ateliers in France, Mali, and California.</p>
              </div>
            </div>

            <div className="hl-trust-card">
              <div className="hl-trust-icon-box">
                <RefreshCw size={24} />
              </div>
              <div className="hl-trust-info">
                <h3>100-NIGHT GUARANTEE</h3>
                <p>Wash, sleep, and experience. Free returns if not in love.</p>
              </div>
            </div>

            <div className="hl-trust-card">
              <div className="hl-trust-icon-box">
                <Lock size={24} />
              </div>
              <div className="hl-trust-info">
                <h3>ETHICAL & SECURE</h3>
                <p>Carbon-neutral shipping and encrypted checkout.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTERACTIVE ROOM VISUALIZER ("SHOP THE ROOM") */}
      <section className="hl-section hl-lookbook-section" id="lookbook">
        <div className="hl-wrap">
          <div className="hl-section-head text-center">
            <span className="hl-eyebrow">IMMERSIVE INTERIOR INSPIRATION</span>
            <h2 className="hl-section-title">SHOP THE SANCTUARY LOOK</h2>
            <p className="hl-sub">
              Click the glowing pins on this styled bedroom scene to inspect, customize, and add individual pieces to your bag.
            </p>
          </div>

          <div className="hl-lookbook-container">
            <img
              src={lookbookRoomImg}
              alt="Warm styled bedroom sanctuary with pinned hotspots on linen bedding, mudcloth pillow, and ceramic vase"
              className="hl-lookbook-img"
              loading="lazy"
            />

            {/* Interactive Hotspot Pins */}
            {roomHotspots.map((spot) => (
              <div
                key={spot.id}
                className="hl-hotspot"
                style={{ top: spot.top, left: spot.left }}
              >
                <button
                  className={`hl-hotspot-pin ${activeHotspot === spot.id ? "active" : ""}`}
                  onClick={() => setActiveHotspot(activeHotspot === spot.id ? null : spot.id)}
                  aria-label={`Inspect ${spot.title}`}
                >
                  <span className="hl-hotspot-pulse" />
                  <Plus size={14} />
                </button>

                {activeHotspot === spot.id && (
                  <div className="hl-hotspot-card" role="dialog">
                    <button
                      className="hl-hotspot-close"
                      onClick={() => setActiveHotspot(null)}
                      aria-label="Close popup"
                    >
                      <X size={14} />
                    </button>
                    <h4>{spot.title}</h4>
                    <span className="hl-hotspot-price">{spot.price}</span>
                    <div className="hl-hotspot-actions">
                      <button
                        onClick={() => {
                          const p = allProducts.find((item) => item.id === spot.productId);
                          if (p) openQuickView(p);
                        }}
                        className="hl-btn-hotspot-quick"
                      >
                        Quick View
                      </button>
                      <button
                        onClick={() => {
                          handleAddToCart(spot.productId);
                          setActiveHotspot(null);
                        }}
                        className="hl-btn-hotspot-add"
                      >
                        Add to Bag
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Bottom Room Bundle Bar */}
            <div className="hl-lookbook-bar">
              <div className="hl-lookbook-bar-text">
                <strong>The Complete Sanctuary Retreat Bundle</strong>
                <span>Includes Bedding, Mudcloth Accent, Ceramic Vase & Wool Throw</span>
              </div>
              <div className="hl-lookbook-bar-cta">
                <div className="hl-bar-pricing">
                  <span className="hl-strike">$500.00</span>
                  <strong className="hl-price-special">$425.00</strong>
                  <span className="hl-badge-save">SAVE 15%</span>
                </div>
                <button
                  onClick={() => {
                    setCart((prev) => ({
                      ...prev,
                      "room-look-bundle": (prev["room-look-bundle"] || 0) + 1,
                    }));
                    showToast("Added Complete Sanctuary Retreat Look to your bag (15% Bundle Discount applied)!");
                    setIsCartOpen(true);
                  }}
                  className="hl-btn-terracotta"
                >
                  ADD COMPLETE ROOM
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS (8 Artisanal Cards with Swatches & Quick View) */}
      <section className="hl-section hl-featured-section" id="featured">
        <div className="hl-wrap">
          <div className="hl-section-head text-center">
            <span className="hl-eyebrow">MINDFUL HOME CURATION</span>
            <h2 className="hl-section-title">FEATURED ARTISAN PIECES</h2>
            <p className="hl-sub">Crafted in small, unhurried batches using pure fibers and non-toxic earth glazes.</p>
          </div>

          {/* Category Filter Tabs */}
          <div className="hl-category-tabs">
            {["All", "Bedding", "Pillows & Throws", "Ceramic Decor", "Tabletop"].map((cat) => (
              <button
                key={cat}
                className={`hl-cat-tab ${activeCategory === cat ? "active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Cards Grid */}
          <div className="hl-featured-grid">
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="hl-product-card"
                onClick={() => openQuickView(prod)}
              >
                <div className="hl-prod-img-box">
                  <img src={prod.img} alt={prod.title} loading="lazy" />

                  {prod.badge && <span className="hl-prod-badge">{prod.badge}</span>}

                  <button
                    className={`hl-wish-btn ${wishlist[prod.id] ? "active" : ""}`}
                    onClick={(e) => handleToggleWishlist(prod.id, e)}
                    aria-label={`Wishlist ${prod.title}`}
                  >
                    <Heart
                      size={16}
                      fill={wishlist[prod.id] ? "#b57e56" : "none"}
                      color={wishlist[prod.id] ? "#b57e56" : "#4a4643"}
                    />
                  </button>

                  <button
                    className="hl-quick-view-btn"
                    onClick={(e) => openQuickView(prod, e)}
                    aria-label={`Quick view ${prod.title}`}
                  >
                    <Eye size={15} />
                    <span>Quick View</span>
                  </button>
                </div>

                <div className="hl-prod-body">
                  {/* Swatches Preview */}
                  <div className="hl-swatch-list">
                    {prod.swatches.map((sw) => (
                      <span
                        key={sw.name}
                        className="hl-swatch-dot"
                        style={{ backgroundColor: sw.hex }}
                        title={sw.name}
                      />
                    ))}
                    <span className="hl-swatch-count text-muted">+{prod.swatches.length} colors</span>
                  </div>

                  <div className="hl-prod-rating">
                    <div className="hl-stars">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={13} fill="#b57e56" color="#b57e56" />
                      ))}
                    </div>
                    <span className="hl-review-count">({prod.reviews})</span>
                  </div>

                  <h3 className="hl-prod-title">{prod.title}</h3>
                  <p className="hl-prod-desc">{prod.subtitle}</p>

                  <div className="hl-prod-pricing">
                    <strong className="hl-prod-price">${prod.price.toFixed(2)}</strong>
                    {prod.origPrice > prod.price && (
                      <span className="hl-prod-orig">${prod.origPrice.toFixed(2)}</span>
                    )}
                  </div>

                  <button
                    className="hl-btn-terracotta-add"
                    onClick={(e) => handleAddToCart(prod.id, 1, e)}
                  >
                    <ShoppingBag size={15} />
                    <span>ADD TO BAG</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTERACTIVE TEXTILE LAYERING STUDIO (Visual Bedding Customizer) */}
      <section className="hl-section hl-layering-section" id="layering-studio">
        <div className="hl-wrap">
          <div className="hl-section-head text-center">
            <span className="hl-eyebrow">CUSTOM BEDROOM SANCTUARY</span>
            <h2 className="hl-section-title">THE TEXTILE LAYERING STUDIO</h2>
            <p className="hl-sub">
              Compose tactile weights, earthy pigments, and relaxed weaves for a serene, hotel-grade layered bed.
            </p>
          </div>

          <div className="hl-layering-grid">
            {/* Visual Preview Stage */}
            <div className="hl-layering-stage">
              <div className="hl-stage-visual">
                <img
                  src={studioDuvet.img}
                  alt={`Draped bedroom with ${studioDuvet.name}`}
                  className="hl-stage-img"
                />
                <div className="hl-stage-tag">
                  <Sparkles size={14} className="text-terracotta" />
                  <span>Real-time Tactile Preview</span>
                </div>
              </div>

              {/* Visual Layer Composition Badges */}
              <div className="hl-stage-swatch-bar">
                <div className="hl-swatch-badge">
                  <span className="hl-swatch-circle" style={{ backgroundColor: studioDuvet.hex }} />
                  <div>
                    <small>Duvet Layer</small>
                    <p>{studioDuvet.name}</p>
                  </div>
                </div>
                <div className="hl-swatch-badge">
                  <span className="hl-swatch-circle" style={{ backgroundColor: studioSheets.hex }} />
                  <div>
                    <small>Sheets</small>
                    <p>{studioSheets.name}</p>
                  </div>
                </div>
                <div className="hl-swatch-badge">
                  <span className="hl-swatch-circle" style={{ backgroundColor: studioAccent.hex }} />
                  <div>
                    <small>Accent</small>
                    <p>{studioAccent.name}</p>
                  </div>
                </div>
                <div className="hl-swatch-badge">
                  <span className="hl-swatch-circle" style={{ backgroundColor: studioThrow.hex }} />
                  <div>
                    <small>Throw</small>
                    <p>{studioThrow.name}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Customizer Steps */}
            <div className="hl-layering-controls">
              {/* Layer 1: Duvet */}
              <div className="hl-step-box">
                <div className="hl-step-header">
                  <span className="hl-step-num">1</span>
                  <h4>BASE DUVET COVER</h4>
                  <span className="hl-step-price">${studioDuvet.price}</span>
                </div>
                <div className="hl-step-options">
                  {[
                    { name: "Natural Oatmeal Linen", price: 195, img: layerOatmealImg, hex: "#d8c7b5" },
                    { name: "Crisp Bone White Linen", price: 195, img: layerWhiteImg, hex: "#f5f0ea" },
                    { name: "Terracotta Rust Linen", price: 215, img: layerTerracottaImg, hex: "#b57e56" },
                  ].map((opt) => (
                    <button
                      key={opt.name}
                      className={`hl-step-btn ${studioDuvet.name === opt.name ? "active" : ""}`}
                      onClick={() => setStudioDuvet(opt)}
                    >
                      <span className="hl-opt-dot" style={{ backgroundColor: opt.hex }} />
                      <span className="hl-opt-label">{opt.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Layer 2: Sheets */}
              <div className="hl-step-box">
                <div className="hl-step-header">
                  <span className="hl-step-num">2</span>
                  <h4>FLAX LINEN SHEET SET</h4>
                  <span className="hl-step-price">${studioSheets.price}</span>
                </div>
                <div className="hl-step-options">
                  {[
                    { name: "Warm Bone Linen", price: 185, hex: "#f5f0ea" },
                    { name: "Earthy Sand Linen", price: 185, hex: "#d8c7b5" },
                    { name: "Eucalyptus Sage Linen", price: 195, hex: "#8a9a86" },
                  ].map((opt) => (
                    <button
                      key={opt.name}
                      className={`hl-step-btn ${studioSheets.name === opt.name ? "active" : ""}`}
                      onClick={() => setStudioSheets(opt)}
                    >
                      <span className="hl-opt-dot" style={{ backgroundColor: opt.hex }} />
                      <span className="hl-opt-label">{opt.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Layer 3: Accent Pillow */}
              <div className="hl-step-box">
                <div className="hl-step-header">
                  <span className="hl-step-num">3</span>
                  <h4>TEXTURAL ACCENT CUSHION</h4>
                  <span className="hl-step-price">${studioAccent.price}</span>
                </div>
                <div className="hl-step-options">
                  {[
                    { name: "Charcoal Mudcloth Cushion", price: 78, hex: "#2b2a29" },
                    { name: "Terracotta Bouclé Pillow", price: 78, hex: "#b57e56" },
                    { name: "Ivory Tufted Cushion", price: 84, hex: "#f0ece4" },
                  ].map((opt) => (
                    <button
                      key={opt.name}
                      className={`hl-step-btn ${studioAccent.name === opt.name ? "active" : ""}`}
                      onClick={() => setStudioAccent(opt)}
                    >
                      <span className="hl-opt-dot" style={{ backgroundColor: opt.hex }} />
                      <span className="hl-opt-label">{opt.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Layer 4: Throw */}
              <div className="hl-step-box">
                <div className="hl-step-header">
                  <span className="hl-step-num">4</span>
                  <h4>CHUNKY WOOL THROW</h4>
                  <span className="hl-step-price">${studioThrow.price}</span>
                </div>
                <div className="hl-step-options">
                  {[
                    { name: "Hudson Ribbed Wool Throw", price: 145, hex: "#c9a674" },
                    { name: "Charcoal Ribbed Throw", price: 145, hex: "#3a3937" },
                    { name: "Honey Wheat Alpaca Throw", price: 155, hex: "#c49a62" },
                  ].map((opt) => (
                    <button
                      key={opt.name}
                      className={`hl-step-btn ${studioThrow.name === opt.name ? "active" : ""}`}
                      onClick={() => setStudioThrow(opt)}
                    >
                      <span className="hl-opt-dot" style={{ backgroundColor: opt.hex }} />
                      <span className="hl-opt-label">{opt.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pricing & 1-Click Bundle */}
              <div className="hl-studio-summary-card">
                <div className="hl-sum-row">
                  <span>Standard 4-Layer Price:</span>
                  <span className="hl-strike">${studioRawTotal.toFixed(2)}</span>
                </div>
                <div className="hl-sum-row highlight">
                  <span>15% Sanctuary Bundle Discount:</span>
                  <span>-${studioBundleSavings.toFixed(2)}</span>
                </div>
                <div className="hl-sum-total">
                  <span>Custom Set Total:</span>
                  <strong>${studioBundleFinal.toFixed(2)}</strong>
                </div>

                <button
                  onClick={() => {
                    setCart((prev) => ({
                      ...prev,
                      "sanctuary-bundle": (prev["sanctuary-bundle"] || 0) + 1,
                    }));
                    showToast("Curated 4-Layer Bedroom Sanctuary Set added to bag!");
                    setIsCartOpen(true);
                  }}
                  className="hl-btn-terracotta-full"
                >
                  <ShoppingBag size={17} />
                  <span>ADD COMPLETE 4-LAYER RETREAT TO BAG</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROMOTIONAL RHYTHM / SEASONAL TEXTILE EVENT (25% Off Banner) */}
      <section className="hl-promo-section" id="promo">
        <div className="hl-wrap">
          <div className="hl-promo-card">
            <div className="hl-promo-copy">
              <span className="hl-promo-eyebrow">SEASONAL TEXTILE EVENT</span>
              <h2 className="hl-promo-heading">THE HUDSON WOOL THROW</h2>
              <div className="hl-promo-offer">
                <strong>25% OFF SELECT WOOL & BOUCLÉ THROWS</strong>
              </div>
              <p className="hl-promo-desc">
                Crafted from ethically sourced high-altitude wool, brushed for a cloudlike hand-feel. Drapes gracefully across linen beds, reading armchairs, and porch benches.
              </p>

              <div className="hl-promo-meta">
                <div className="hl-timer-chip">
                  <Clock size={16} />
                  <span>Ends in 48 Hours</span>
                </div>
                <div className="hl-promo-pricing">
                  <span className="hl-strike">$145.00</span>
                  <strong className="hl-deal-price">$108.75</strong>
                </div>
              </div>

              <button
                onClick={() => {
                  setCart((prev) => ({
                    ...prev,
                    "hudson-throw-promo": (prev["hudson-throw-promo"] || 0) + 1,
                  }));
                  showToast("Applied 25% Hudson Wool Throw Event Deal ($108.75)!");
                  setIsCartOpen(true);
                }}
                className="hl-btn-white-pill"
              >
                CLAIM 25% OFF DEAL
              </button>
            </div>

            <div className="hl-promo-visual">
              <img
                src={promoThrowImg}
                alt="Folded luxurious Hudson wool throw blanket on natural wood"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ARTISAN MATERIAL PROVENANCE (Honest Craftsmanship) */}
      <section className="hl-section hl-provenance-section" id="provenance">
        <div className="hl-wrap">
          <div className="hl-section-head text-center">
            <span className="hl-eyebrow">HONEST CRAFTSMANSHIP</span>
            <h2 className="hl-section-title">ETHICAL MATERIAL PROVENANCE</h2>
            <p className="hl-sub">
              We partner exclusively with generational ateliers, family farms, and solar ceramic studios.
            </p>
          </div>

          {/* Material Tabs */}
          <div className="hl-prov-tabs">
            {artisanMaterials.map((mat) => (
              <button
                key={mat.id}
                className={`hl-prov-tab ${activeMaterialTab === mat.id ? "active" : ""}`}
                onClick={() => setActiveMaterialTab(mat.id)}
              >
                {mat.name}
              </button>
            ))}
          </div>

          {/* Active Material Showcase */}
          {(() => {
            const activeMat = artisanMaterials.find((m) => m.id === activeMaterialTab) || artisanMaterials[0];
            return (
              <div className="hl-prov-showcase">
                <div className="hl-prov-image">
                  <img src={activeMat.img} alt={activeMat.name} loading="lazy" />
                  <div className="hl-prov-badge">
                    <Leaf size={15} />
                    <span>{activeMat.cert}</span>
                  </div>
                </div>

                <div className="hl-prov-content">
                  <small className="hl-prov-origin">Sourced from: {activeMat.origin}</small>
                  <h3>{activeMat.name}</h3>
                  <p>{activeMat.desc}</p>

                  <div className="hl-prov-highlights">
                    <div className="hl-highlight-row">
                      <CheckCircle2 size={18} className="text-terracotta" />
                      <span>Zero synthetic fertilizers, bleached finishes, or PFAS coatings.</span>
                    </div>
                    <div className="hl-highlight-row">
                      <CheckCircle2 size={18} className="text-terracotta" />
                      <span>Closed-loop water conservation recycling in finishing mills.</span>
                    </div>
                    <div className="hl-highlight-row">
                      <CheckCircle2 size={18} className="text-terracotta" />
                      <span>Direct trade premiums paid to weaving cooperatives.</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setActiveCategory(
                        activeMat.id === "linen"
                          ? "Bedding"
                          : activeMat.id === "pottery"
                          ? "Ceramic Decor"
                          : activeMat.id === "mudcloth"
                          ? "Pillows & Throws"
                          : "Ceramic Decor"
                      );
                      const el = document.getElementById("featured");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="hl-btn-outline"
                  >
                    EXPLORE {activeMat.name.toUpperCase()} CREATIONS
                  </button>
                </div>
              </div>
            );
          })()}
        </div>
      </section>

      {/* CUSTOMER SANCTUARY REVIEWS */}
      <section className="hl-section hl-reviews-section" id="reviews">
        <div className="hl-wrap">
          <div className="hl-section-head text-center">
            <span className="hl-eyebrow">VERIFIED HOME EXPERIENCES</span>
            <h2 className="hl-section-title">LIVED-IN SANCTUARIES</h2>
            <div className="hl-reviews-score">
              <div className="hl-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="#b57e56" color="#b57e56" />
                ))}
              </div>
              <strong>4.9 Out of 5.0</strong>
              <span className="text-muted">• Based on 1,420+ Verified Homeowners</span>
            </div>
          </div>

          <div className="hl-reviews-grid">
            {customerReviews.map((rev) => (
              <div key={rev.id} className="hl-review-card">
                <div className="hl-stars">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#b57e56" color="#b57e56" />
                  ))}
                </div>
                <p className="hl-review-quote">"{rev.comment}"</p>
                <div className="hl-review-footer">
                  <div>
                    <strong>{rev.author}</strong>
                    <small className="hl-rev-loc">{rev.location}</small>
                  </div>
                  <small className="hl-rev-prod">{rev.product}</small>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DESIGN JOURNAL (Editorial Guides) */}
      <section className="hl-section hl-journal-section" id="journal">
        <div className="hl-wrap">
          <div className="hl-section-head text-center">
            <span className="hl-eyebrow">EDITORIAL INSPIRATION</span>
            <h2 className="hl-section-title">THE DESIGN JOURNAL</h2>
            <p className="hl-sub">Practical styling essays, fiber care guides, and slow living principles.</p>
          </div>

          <div className="hl-journal-grid">
            <article className="hl-journal-card">
              <div className="hl-journal-img">
                <img
                  src={journalTextilesImg}
                  alt="Layered natural linen bed with textured pillows and warm daylight"
                  loading="lazy"
                />
                <span className="hl-journal-tag">BEDROOM STYLING</span>
              </div>
              <div className="hl-journal-body">
                <h3>THE ART OF LAYERING TEXTILES</h3>
                <p>
                  Mastering the tactile dialogue between pre-washed European flax, handspun African mudcloth, and ribbed baby alpaca wool.
                </p>
                <button
                  onClick={() => showToast("Opening Article: The Art of Layering Textiles")}
                  className="hl-btn-dark-pill"
                >
                  READ ARTICLE
                </button>
              </div>
            </article>

            <article className="hl-journal-card">
              <div className="hl-journal-img">
                <img
                  src={journalShelfImg}
                  alt="Artisanal ceramic vases and candle tapers on oak architectural shelf"
                  loading="lazy"
                />
                <span className="hl-journal-tag">PROPORTION & FORM</span>
              </div>
              <div className="hl-journal-body">
                <h3>HOW TO STYLE AN ARCHITECTURAL SHELF</h3>
                <p>
                  Negative space, stoneware silhouettes, and unlacquered brass reflections curated by our interior design team.
                </p>
                <button
                  onClick={() => showToast("Opening Article: How to Style an Architectural Shelf")}
                  className="hl-btn-dark-pill"
                >
                  READ ARTICLE
                </button>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="hl-footer">
        <div className="hl-wrap hl-footer-grid">
          {/* Col 1: Brand & Newsletter */}
          <div className="hl-footer-brand-col">
            <div className="hl-brand">
              <HearthLinenLogo size={24} />
              <span className="hl-brand-title">Hearth & Linen</span>
            </div>
            <p className="hl-footer-mission">
              Conscious home textiles, generational craft, and organic living essentials. Made to age gracefully in your home.
            </p>

            <div className="hl-newsletter-wrap">
              <h4>JOIN OUR SANCTUARY:</h4>
              <p>Receive 10% off your first heirloom order and design journals.</p>
              {newsletterDone ? (
                <div className="hl-newsletter-success">
                  <CheckCircle2 size={16} className="text-terracotta" />
                  <span>Welcome to our sanctuary! Check your inbox for your 10% code.</span>
                </div>
              ) : (
                <form
                  className="hl-news-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (newsletterEmail) {
                      setNewsletterDone(true);
                      showToast("Subscribed to Hearth & Linen Sanctuary Journals!");
                    }
                  }}
                >
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="hl-news-input"
                    aria-label="Email address for newsletter"
                  />
                  <button type="submit" className="hl-btn-terracotta-submit">
                    JOIN
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Col 2: Shop Links */}
          <div className="hl-footer-col">
            <h4>COLLECTIONS</h4>
            <ul>
              <li><a href="#featured">French Flax Linen Sheets</a></li>
              <li><a href="#featured">Cloud Duvet Covers</a></li>
              <li><a href="#featured">Artisanal Mudcloth Pillows</a></li>
              <li><a href="#featured">Alpaca & Wool Throws</a></li>
              <li><a href="#featured">Stoneware Pottery Vases</a></li>
              <li><a href="#featured">Unlacquered Brass Candlesticks</a></li>
              <li><a href="#featured">Fringed Tabletop Linens</a></li>
            </ul>
          </div>

          {/* Col 3: Studio & Services */}
          <div className="hl-footer-col">
            <h4>SERVICES & TRADE</h4>
            <ul>
              <li><a href="#layering-studio">Textile Layering Studio</a></li>
              <li><a href="#lookbook">Shop the Room Look</a></li>
              <li>
                <button
                  onClick={() => showToast("Order Free 5-Piece Linen Swatch Sample Kit")}
                  className="hl-link-btn"
                >
                  Free Linen Swatch Kit
                </button>
              </li>
              <li>
                <button
                  onClick={() => showToast("Interior Design Trade Portal (15% Net Discount)")}
                  className="hl-link-btn"
                >
                  Interior Designers Trade Portal
                </button>
              </li>
              <li><a href="#provenance">Sustainability & Sourcing</a></li>
              <li><a href="#reviews">Verified Client Reviews</a></li>
            </ul>
          </div>

          {/* Col 4: Client Care & Guarantees */}
          <div className="hl-footer-col">
            <h4>SANCTUARY PROMISE</h4>
            <div className="hl-footer-perks">
              <div className="hl-fperk">
                <Truck size={17} />
                <span>Free shipping on all US orders over $150</span>
              </div>
              <div className="hl-fperk">
                <RefreshCw size={17} />
                <span>100-Night risk-free sleep trial with free returns</span>
              </div>
              <div className="hl-fperk">
                <Shield size={17} />
                <span>10-Year artisan craftsmanship guarantee</span>
              </div>
              <div className="hl-fperk">
                <Lock size={17} />
                <span>256-bit encrypted checkout with Apple Pay</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hl-bottom-bar">
          <div className="hl-wrap hl-bottom-inner">
            <p>© {new Date().getFullYear()} Hearth & Linen Living Inc. All rights reserved. Conscious home decor.</p>
            <div className="hl-bottom-links">
              <a href="#top">Privacy Policy</a>
              <span>•</span>
              <a href="#top">Terms of Craft</a>
              <span>•</span>
              <a href="#top">Accessibility Statement</a>
            </div>
          </div>
        </div>
      </footer>

      {/* SLIDING CART DRAWER */}
      <div
        className={`hl-drawer-overlay ${isCartOpen ? "open" : ""}`}
        onClick={() => setIsCartOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`hl-cart-drawer ${isCartOpen ? "open" : ""}`}
        role="dialog"
        aria-label="Your Shopping Bag"
      >
        <div className="hl-cart-head">
          <div className="hl-cart-head-title">
            <ShoppingBag size={20} />
            <h3>Your Shopping Bag ({totalCartCount})</h3>
          </div>
          <button
            className="hl-close-btn"
            onClick={() => setIsCartOpen(false)}
            aria-label="Close cart"
          >
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Progress Meter */}
        <div className="hl-free-ship-meter">
          <div className="hl-meter-label">
            {amountToFreeShipping > 0 ? (
              <span>
                Add <strong>${amountToFreeShipping.toFixed(2)}</strong> more for <strong>Free Standard Shipping</strong>!
              </span>
            ) : (
              <span className="hl-ship-unlocked">
                <Check size={14} /> You've unlocked <strong>Free Standard Shipping</strong>!
              </span>
            )}
          </div>
          <div className="hl-meter-track">
            <div
              className="hl-meter-bar"
              style={{ width: `${progressToFreeShipping}%` }}
            />
          </div>
        </div>

        {/* Cart Items List */}
        <div className="hl-cart-items">
          {Object.keys(cart).length === 0 ? (
            <div className="hl-empty-cart">
              <ShoppingBag size={48} className="text-muted" />
              <h4>Your bag is currently empty</h4>
              <p className="text-muted">Discover our French flax bedding and handwoven artisanal cushions.</p>
              <button
                onClick={() => {
                  setIsCartOpen(false);
                  const el = document.getElementById("featured");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="hl-btn-terracotta mt-2"
              >
                START SHOPPING
              </button>
            </div>
          ) : (
            <>
              {Object.entries(cart).map(([id, qty]) => {
                let title = "Artisanal Home Textile";
                let price = 0;
                let img = prodSheetsImg;
                let desc = "Curated design element";

                const prod = allProducts.find((p) => p.id === id);
                if (prod) {
                  title = prod.title;
                  price = prod.price;
                  img = prod.img;
                  desc = prod.category;
                } else if (id === "hudson-throw-promo") {
                  title = "The Hudson Wool Throw (25% Off Deal)";
                  price = 108.75;
                  img = promoThrowImg;
                  desc = "Seasonal Textile Event";
                } else if (id === "sanctuary-bundle") {
                  title = "4-Layer Bedroom Sanctuary Retreat Set";
                  price = 512.55;
                  img = layerOatmealImg;
                  desc = "Duvet + Sheets + Accent Pillow + Throw (15% Bundle Savings)";
                } else if (id === "room-look-bundle") {
                  title = "Complete Sanctuary Room Look Bundle";
                  price = 425.0;
                  img = lookbookRoomImg;
                  desc = "Bedding + Mudcloth + Ceramic Vase + Throw (15% Off)";
                }

                return (
                  <div key={id} className="hl-cart-item">
                    <img src={img} alt={title} className="hl-cart-item-img" />
                    <div className="hl-cart-item-info">
                      <div className="hl-cart-item-top">
                        <h4>{title}</h4>
                        <button
                          onClick={() => handleRemoveFromCart(id)}
                          className="hl-cart-remove-btn"
                          aria-label={`Remove ${title} from bag`}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <small className="text-muted">{desc}</small>
                      <div className="hl-cart-item-bottom">
                        <div className="hl-qty-stepper">
                          <button
                            onClick={() => handleUpdateCartQty(id, -1)}
                            aria-label="Decrease quantity"
                          >
                            <Minus size={13} />
                          </button>
                          <span>{qty}</span>
                          <button
                            onClick={() => handleUpdateCartQty(id, 1)}
                            aria-label="Increase quantity"
                          >
                            <Plus size={13} />
                          </button>
                        </div>
                        <strong className="hl-cart-item-price">
                          ${(price * qty).toFixed(2)}
                        </strong>
                      </div>
                    </div>
                  </div>
                );
              })}

              {/* Upsell Add-on Recommendation */}
              {!cart["napkins"] && (
                <div className="hl-cart-upsell">
                  <div className="hl-upsell-thumb">
                    <img src={prodNapkinsImg} alt="Frayed Edge Linen Napkins" />
                  </div>
                  <div className="hl-upsell-info">
                    <small>RECOMMENDED COMPANION</small>
                    <h5>Frayed Edge Linen Napkins (Set of 4)</h5>
                    <span>$48.00</span>
                  </div>
                  <button
                    onClick={() => handleAddToCart("napkins")}
                    className="hl-btn-upsell-add"
                  >
                    + ADD
                  </button>
                </div>
              )}
            </>
          )}
        </div>

        {/* Cart Drawer Footer */}
        {Object.keys(cart).length > 0 && (
          <div className="hl-cart-foot">
            {/* Promo Code Accordion */}
            <div className="hl-promo-input-row">
              <input
                type="text"
                placeholder="Promo Code (try SANCTUARY10)"
                value={promoCodeInput}
                onChange={(e) => setPromoCodeInput(e.target.value)}
                className="hl-promo-code-input"
              />
              <button
                onClick={() => {
                  if (promoCodeInput.trim().toUpperCase() === "SANCTUARY10") {
                    setAppliedPromo("SANCTUARY10");
                    showToast("Applied 10% Sanctuary Discount!");
                  } else {
                    showToast("Invalid promo code. Use SANCTUARY10 for 10% off.");
                  }
                }}
                className="hl-btn-apply-promo"
              >
                APPLY
              </button>
            </div>

            <div className="hl-cart-summary">
              <div className="hl-cart-sum-row">
                <span>Bag Subtotal:</span>
                <span>${rawSubtotal.toFixed(2)}</span>
              </div>
              {appliedPromo && (
                <div className="hl-cart-sum-row highlight">
                  <span>Promo Discount (10%):</span>
                  <span>-${discountAmount.toFixed(2)}</span>
                </div>
              )}
              <div className="hl-cart-sum-row">
                <span>Estimated Shipping:</span>
                <span>{finalSubtotal >= freeShippingThreshold ? "Free" : "$12.00"}</span>
              </div>
              <div className="hl-cart-sum-total">
                <span>Total Due:</span>
                <strong>
                  ${(finalSubtotal + (finalSubtotal >= freeShippingThreshold ? 0 : 12)).toFixed(2)}
                </strong>
              </div>
            </div>

            <button
              onClick={() => {
                showToast("Proceeding to 256-Bit Encrypted Secure Checkout...");
              }}
              className="hl-btn-terracotta-full hl-checkout-btn"
            >
              <Lock size={16} />
              <span>PROCEED TO SECURE CHECKOUT</span>
            </button>

            <div className="hl-cart-guarantees">
              <span>30-Day Easy Returns</span>
              <span>•</span>
              <span>Carbon Neutral Delivery</span>
            </div>
          </div>
        )}
      </aside>

      {/* WISHLIST DRAWER */}
      <div
        className={`hl-drawer-overlay ${isWishlistOpen ? "open" : ""}`}
        onClick={() => setIsWishlistOpen(false)}
        aria-hidden="true"
      />
      <aside
        className={`hl-cart-drawer ${isWishlistOpen ? "open" : ""}`}
        role="dialog"
        aria-label="Your Design Sanctuary Wishlist"
      >
        <div className="hl-cart-head">
          <div className="hl-cart-head-title">
            <Heart size={20} className="text-terracotta" />
            <h3>Your Design Wishlist ({totalWishlistCount})</h3>
          </div>
          <button
            className="hl-close-btn"
            onClick={() => setIsWishlistOpen(false)}
            aria-label="Close wishlist"
          >
            <X size={22} />
          </button>
        </div>

        <div className="hl-cart-items">
          {totalWishlistCount === 0 ? (
            <div className="hl-empty-cart">
              <Heart size={48} className="text-muted" />
              <h4>Your wishlist is empty</h4>
              <p className="text-muted">Tap the heart on any textile or artisanal vessel to save it to your retreat list.</p>
            </div>
          ) : (
            Object.keys(wishlist)
              .filter((id) => wishlist[id])
              .map((id) => {
                const prod = allProducts.find((p) => p.id === id);
                if (!prod) return null;
                return (
                  <div key={id} className="hl-cart-item">
                    <img src={prod.img} alt={prod.title} className="hl-cart-item-img" />
                    <div className="hl-cart-item-info">
                      <div className="hl-cart-item-top">
                        <h4>{prod.title}</h4>
                        <button
                          onClick={() => handleToggleWishlist(id)}
                          className="hl-cart-remove-btn"
                          aria-label="Remove from wishlist"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <small className="text-muted">{prod.category}</small>
                      <div className="hl-cart-item-bottom">
                        <strong>${prod.price.toFixed(2)}</strong>
                        <button
                          onClick={() => {
                            handleAddToCart(id);
                            handleToggleWishlist(id);
                          }}
                          className="hl-btn-wish-move"
                        >
                          Move to Bag
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
          )}
        </div>

        {totalWishlistCount > 0 && (
          <div className="hl-cart-foot">
            <button
              onClick={handleMoveAllWishlistToCart}
              className="hl-btn-terracotta-full"
            >
              MOVE ALL SAVED ITEMS TO BAG
            </button>
          </div>
        )}
      </aside>

      {/* QUICK VIEW PRODUCT MODAL */}
      {selectedProduct && (
        <div
          className="hl-modal-backdrop"
          onClick={() => setSelectedProduct(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="hl-modal-container"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="hl-modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Close product preview"
            >
              <X size={22} />
            </button>

            <div className="hl-modal-grid">
              <div className="hl-modal-gallery">
                <img
                  src={selectedProduct.img}
                  alt={selectedProduct.title}
                  className="hl-modal-main-img"
                />
                {selectedProduct.badge && (
                  <span className="hl-modal-badge">{selectedProduct.badge}</span>
                )}
              </div>

              <div className="hl-modal-details">
                <small className="hl-modal-cat">{selectedProduct.category}</small>
                <h2>{selectedProduct.title}</h2>

                <div className="hl-modal-rating">
                  <div className="hl-stars">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} fill="#b57e56" color="#b57e56" />
                    ))}
                  </div>
                  <span>{selectedProduct.rating} ({selectedProduct.reviews} verified reviews)</span>
                </div>

                <div className="hl-modal-pricing">
                  <strong className="hl-modal-price">${selectedProduct.price.toFixed(2)}</strong>
                  {selectedProduct.origPrice > selectedProduct.price && (
                    <span className="hl-modal-orig">${selectedProduct.origPrice.toFixed(2)}</span>
                  )}
                </div>

                <p className="hl-modal-desc">{selectedProduct.description}</p>

                {/* Swatches */}
                <div className="hl-modal-swatches">
                  <div className="hl-swatch-header">
                    <span>Selected Palette:</span>
                    <strong>{selectedColorway || selectedProduct.swatches[0]?.name}</strong>
                  </div>
                  <div className="hl-swatch-buttons">
                    {selectedProduct.swatches.map((sw) => (
                      <button
                        key={sw.name}
                        className={`hl-swatch-btn ${selectedColorway === sw.name ? "active" : ""}`}
                        onClick={() => setSelectedColorway(sw.name)}
                        style={{ backgroundColor: sw.hex }}
                        title={sw.name}
                        aria-label={`Select ${sw.name}`}
                      />
                    ))}
                  </div>
                </div>

                {/* Specs breakdown */}
                <div className="hl-modal-specs">
                  <div className="hl-spec-row">
                    <span>Material:</span>
                    <strong>{selectedProduct.material}</strong>
                  </div>
                  {selectedProduct.weightGsm && (
                    <div className="hl-spec-row">
                      <span>Fabric Weight:</span>
                      <strong>{selectedProduct.weightGsm}</strong>
                    </div>
                  )}
                  <div className="hl-spec-row">
                    <span>Dimensions:</span>
                    <strong>{selectedProduct.dimensions}</strong>
                  </div>
                  <div className="hl-spec-row">
                    <span>Care:</span>
                    <span>{selectedProduct.care}</span>
                  </div>
                </div>

                {/* Quantity & Add to Cart */}
                <div className="hl-modal-action-row">
                  <div className="hl-qty-stepper hl-qty-large">
                    <button
                      onClick={() => setQuickViewQty(Math.max(1, quickViewQty - 1))}
                      aria-label="Decrease quantity"
                    >
                      <Minus size={15} />
                    </button>
                    <span>{quickViewQty}</span>
                    <button
                      onClick={() => setQuickViewQty(quickViewQty + 1)}
                      aria-label="Increase quantity"
                    >
                      <Plus size={15} />
                    </button>
                  </div>

                  <button
                    onClick={() => {
                      handleAddToCart(selectedProduct.id, quickViewQty);
                      setSelectedProduct(null);
                      setIsCartOpen(true);
                    }}
                    className="hl-btn-terracotta-full"
                  >
                    <ShoppingBag size={18} />
                    <span>ADD TO BAG • ${(selectedProduct.price * quickViewQty).toFixed(2)}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* STICKY MOBILE BOTTOM QUICK ACTION BAR */}
      <div className="hl-mobile-bottom-bar" aria-label="Mobile quick actions">
        <button
          onClick={() => {
            const el = document.getElementById("featured");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="hl-mob-bar-btn"
        >
          <Sliders size={18} />
          <span>Shop Catalog</span>
        </button>

        <button
          onClick={() => {
            const el = document.getElementById("layering-studio");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="hl-mob-bar-btn"
        >
          <Layers size={18} />
          <span>Bedding Studio</span>
        </button>

        <button
          onClick={() => setIsCartOpen(true)}
          className="hl-mob-bar-cart-btn"
          aria-label={`View bag with ${totalCartCount} items`}
        >
          <ShoppingBag size={18} />
          <span>Bag ({totalCartCount})</span>
        </button>
      </div>
    </main>
  );
}

export default HearthLinenLiving;
