import { useMemo, useState, useEffect, type FormEvent } from "react";
import { Link } from "react-router-dom";
import {
  Heart,
  Search,
  SlidersHorizontal,
  Eye,
  Calendar,
  Clock,
  MapPin,
  Building2,
  Bed,
  Bath,
  Maximize2,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  X,
  ChevronDown,
  DollarSign,
  Calculator,
  Sparkles,
  Phone,
  Mail,
  Compass,
  ArrowUpRight,
  Share2,
} from "lucide-react";
import { Container, CTAButton, SubWebsiteNav } from "../../components";

const navLinks = [
  { label: "Listings", href: "#listings" },
  { label: "Neighborhoods", href: "#neighborhoods" },
  { label: "About", href: "#about" },
  { label: "Sell", href: "#sellers" },
  { label: "Calculator", href: "#calculator" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

type Listing = {
  id: string;
  price: number;
  priceLabel: string;
  title: string;
  address: string;
  neighborhood: string;
  propertyType: string;
  beds: number;
  baths: number;
  squareFeet: string;
  sqftNumber: number;
  image: string;
  tone: string;
  statusBadge: string;
  hoaPerMonth: number;
  estTaxesPerYear: number;
  yearBuilt: number;
  parkingSpaces: number;
  architecturalHighlights: string[];
  description: string;
};

type InquiryForm = {
  intent: string;
  property: string;
  name: string;
  email: string;
  phone: string;
  contactMethod: string;
  message: string;
};

type FormErrors = Partial<Record<keyof InquiryForm, string>>;

const skylineAssets = import.meta.glob(
  "../../assets/optimized/realestate/skyline/*.webp",
  {
    eager: true,
    import: "default",
    query: "?url",
  },
) as Record<string, string>;

const asset = (filename: string) =>
  skylineAssets[`../../assets/optimized/realestate/skyline/${filename}`] ?? "";

const listings: Listing[] = [
  {
    id: "northline-penthouse",
    price: 1280000,
    priceLabel: "$1,280,000",
    title: "Northline Penthouse",
    address: "420 Meridian Avenue, Unit PH-A",
    neighborhood: "River North",
    propertyType: "Condo",
    beds: 3,
    baths: 2.5,
    squareFeet: "1,920",
    sqftNumber: 1920,
    image: asset("northline-penthouse.webp"),
    tone: "from-[#dbeafe] via-[#4f75a5] to-[#f59e0b]",
    statusBadge: "Exclusive Offering",
    hoaPerMonth: 840,
    estTaxesPerYear: 11200,
    yearBuilt: 2021,
    parkingSpaces: 2,
    architecturalHighlights: [
      "Private key-locked elevator foyer",
      "11-ft floor-to-ceiling acoustic glass",
      "Custom Poliform Italian millwork",
      "480 sqft wrap-around sunset terrace",
    ],
    description:
      "Commanding unobstructed panoramic views of the river and skyline, this Northline Penthouse pairs gallery-grade wall volume with tailored entertaining terraces.",
  },
  {
    id: "harbor-view-loft",
    price: 740000,
    priceLabel: "$740,000",
    title: "Harbor View Loft",
    address: "18 Pierline Street, Unit 4B",
    neighborhood: "West Harbor",
    propertyType: "Loft",
    beds: 2,
    baths: 2,
    squareFeet: "1,340",
    sqftNumber: 1340,
    image: asset("harbor-view-loft.webp"),
    tone: "from-[#eff6ff] via-[#6f94b8] to-[#153e75]",
    statusBadge: "Just Listed",
    hoaPerMonth: 520,
    estTaxesPerYear: 6800,
    yearBuilt: 2019,
    parkingSpaces: 1,
    architecturalHighlights: [
      "Reclaimed historic timber ceiling beams",
      "Polished architectural concrete radiant floors",
      "Custom steel-framed casement windows",
      "Direct boardwalk access & kayak slip",
    ],
    description:
      "Effortless coastal-industrial charm with double-height volume, generous natural light, and quiet protected water views along the West Harbor promenade.",
  },
  {
    id: "crescent-hill-estate",
    price: 2400000,
    priceLabel: "$2,400,000",
    title: "Crescent Hill Estate",
    address: "7 Alder Ridge Drive",
    neighborhood: "Crescent Hill",
    propertyType: "Estate",
    beds: 5,
    baths: 4,
    squareFeet: "4,600",
    sqftNumber: 4600,
    image: asset("crescent-hill-estate.webp"),
    tone: "from-[#f8fafc] via-[#bba56b] to-[#0f172a]",
    statusBadge: "Architectural Estate",
    hoaPerMonth: 280,
    estTaxesPerYear: 22400,
    yearBuilt: 2018,
    parkingSpaces: 3,
    architecturalHighlights: [
      "0.65-acre mature landscaped private grounds",
      "Climate-controlled 450-bottle cedar wine cellar",
      "Chef's scullery with dual La Cornue ranges",
      "Heated saltwater courtyard plunge pool",
    ],
    description:
      "A private contemporary sanctuary nestled amongst mature cedar groves, presenting museum-quality craftsmanship, sovereign security, and expansive family living.",
  },
];

const neighborhoods = [
  {
    name: "River North",
    text: "Creative lofts, gallery streets, and Michelin-starred dining in a vibrant, highly walkable cultural enclave.",
    commute: "Central and transit-connected",
    homes: "Lofts and sky-villas",
    position: "Premium Urban Core",
    walkScore: 98,
    transitTime: "8 min to Financial Core",
    medianPrice: "$1.15M",
    tags: ["Michelin Dining", "Art Galleries", "Skyline Views"],
    image: asset("river-north-neighborhood.webp"),
    tone: "from-[#b4533f] via-[#475569] to-[#0f172a]",
  },
  {
    name: "West Harbor",
    text: "Modern waterfront residences complemented by sunset running paths, artisan cafés, and open maritime air.",
    commute: "Direct waterfront ferry & rail",
    homes: "Waterfront condos & lofts",
    position: "Upper Mid-Market Coastal",
    walkScore: 91,
    transitTime: "14 min via Water Taxi",
    medianPrice: "$780K",
    tags: ["Marina Boardwalk", "Sunset Trails", "Artisan Roasters"],
    image: asset("west-harbor-neighborhood.webp"),
    tone: "from-[#bfdbfe] via-[#3b82a0] to-[#153e75]",
  },
  {
    name: "Crescent Hill",
    text: "Canopy-lined streets, generous private parcels, architect-designed estates, and a serene residential rhythm.",
    commute: "Residential woodland retreat",
    homes: "Architectural estates",
    position: "Ultra-Luxury Residential",
    walkScore: 84,
    transitTime: "20 min scenic drive",
    medianPrice: "$2.35M",
    tags: ["Private Grounds", "Mature Canopy", "Top-Rated Academies"],
    image: asset("crescent-hill-neighborhood.webp"),
    tone: "from-[#d9e4d3] via-[#4f6b55] to-[#26352a]",
  },
];

const sellerSteps = [
  [
    "01",
    "Precision Market Positioning",
    "Micro-neighborhood comps, hyper-local buyer liquidity, and target timing are mathematically mapped prior to private placement or MLS launch.",
  ],
  [
    "02",
    "Editorial Staging & Narrative",
    "Architectural dusk photography, cinematic video walkthroughs, and curated lifestyle staging elevate perceptual value before the first showing.",
  ],
  [
    "03",
    "Calm, High-Leverage Negotiation",
    "Escrow terms, contingency timeframes, appraisal gaps, and closing covenants are negotiated with disciplined rigor from offer to funding.",
  ],
];

const servicePaths = [
  [
    "For Buyers",
    "Unlisted inventory access, confidential tour planning, offer structure strategy, and forensic neighborhood due diligence.",
  ],
  [
    "For Sellers",
    "Architectural staging, targeted high-net-worth digital campaigns, private broker previews, and assertive negotiation.",
  ],
  [
    "For Investors",
    "Cap-rate forecasting, 1031 tax-deferred exchanges, rent-yield optimization, and portfolio asset allocation.",
  ],
];

const testimonials = [
  {
    quote:
      "Maya turned a crowded, high-stakes market into three clear decisions. We never felt rushed, and every private tour gave us insights we couldn't find on Zillow.",
    name: "Nora & Julian Vance",
    role: "River North Penthouse Buyers",
  },
  {
    quote:
      "The architectural staging and pricing strategy generated three competing offers within five days. Maya handled the counter-offers with incredible poise.",
    name: "Avery Rosenthal",
    role: "Crescent Hill Estate Seller",
  },
  {
    quote:
      "Skyline brings Wall Street discipline and genuine neighborhood discernment. Their underwriting on my multi-unit acquisition was spot-on.",
    name: "Marcus Thorne",
    role: "Private Real Estate Investor",
  },
];

const faqs = [
  [
    "What is included in private buyer representation?",
    "Every buyer client receives bespoke market mapping, off-market network access, accompanied private showings, architectural due diligence, comparative pricing models, assertive contract negotiation, and turnkey closing coordination.",
  ],
  [
    "How quickly can Skyline arrange a private showing?",
    "Direct showing requests are confirmed within 2 to 4 business hours. We coordinate discreet morning, afternoon, or twilight appointments that suit your schedule.",
  ],
  [
    "What is the recommended timeline to prepare a home for sale?",
    "We recommend initiating preparation 4 to 6 weeks before your target launch date. This window allows for pre-listing inspections, paint/staging refreshes, architectural daylight & twilight photography, and private VIP broker previews.",
  ],
  [
    "Can Skyline assist with 1031 tax-deferred exchanges?",
    "Yes. We frequently structure 1031 exchanges, coordinating with your qualified intermediary and CPA to identify and close replacement properties within the statutory 45-day identification and 180-day closing deadlines.",
  ],
  [
    "How does Skyline handle confidential and high-profile transactions?",
    "For high-profile clients and public figures, we execute non-disclosure agreements (NDAs) prior to property tours, coordinate discreet showings outside public hours, and facilitate private off-market transfers through blind trusts or LLC entities.",
  ],
  [
    "What should I expect during our initial consultation?",
    "A 30-minute strategic dialogue focused on your lifestyle objectives, target neighborhoods, capital allocation, and market timing. There is zero pressure, and no information is shared externally.",
  ],
];

const initialForm: InquiryForm = {
  intent: "Buy",
  property: "",
  name: "",
  email: "",
  phone: "",
  contactMethod: "Email",
  message: "",
};

function EditorialImage({
  src,
  alt,
  tone,
  className,
  eager = false,
}: {
  src: string;
  alt: string;
  tone: string;
  className: string;
  eager?: boolean;
}) {
  if (!src) {
    return (
      <div
        role="img"
        aria-label={`${alt}. Image placeholder.`}
        className={`relative overflow-hidden bg-gradient-to-br ${tone} ${className}`}
      >
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute bottom-0 left-[12%] h-[42%] w-[28%] bg-white/15" />
        <div className="absolute bottom-0 left-[39%] h-[68%] w-[26%] bg-white/25" />
        <div className="absolute bottom-0 right-[9%] h-[52%] w-[27%] bg-white/10" />
      </div>
    );
  }

  return (
    <picture>
      <source srcSet={src} type="image/webp" />
      <img
        src={src}
        alt={alt}
        className={className}
        loading={eager ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );
}

export function SkylineRealtyGroup() {
  // Navigation & Filtering States
  const [neighborhoodFilter, setNeighborhoodFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [maxPrice, setMaxPrice] = useState("Any");
  const [bedsFilter, setBedsFilter] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Favorites / Shortlist State
  const [savedPropertyIds, setSavedPropertyIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem("skyline_saved_properties");
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const toggleSaveProperty = (id: string) => {
    setSavedPropertyIds((prev) => {
      const next = prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id];
      try {
        localStorage.setItem("skyline_saved_properties", JSON.stringify(next));
      } catch {
        // ignore
      }
      return next;
    });
  };

  // Property Modal & Showing Scheduler State
  const [selectedListing, setSelectedListing] = useState<Listing | null>(null);
  const [showingDate, setShowingDate] = useState(() => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  });
  const [showingSlot, setShowingSlot] = useState("14:00 (Afternoon Light)");
  const [showingType, setShowingType] = useState<"in-person" | "video">("in-person");
  const [tourName, setTourName] = useState("");
  const [tourEmail, setTourEmail] = useState("");
  const [tourConfirmed, setTourConfirmed] = useState(false);

  // Mortgage Calculator State
  const [calcPrice, setCalcPrice] = useState(1280000);
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTermYears, setLoanTermYears] = useState(30);

  // Seller Instant Valuation Tool State
  const [sellerNeighborhood, setSellerNeighborhood] = useState("River North");
  const [sellerHomeType, setSellerHomeType] = useState("Condo / Loft");
  const [sellerSqFt, setSellerSqFt] = useState(1850);

  // FAQ & Contact Form State
  const [openFaq, setOpenFaq] = useState(0);
  const [form, setForm] = useState<InquiryForm>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const heroImage = asset("hero.webp");
  const agentImage = asset("maya-bennett-agent.webp");
  const testimonialImage = asset("client-testimonial.webp");
  const sellerImage = asset("seller-strategy.webp");

  // Filtered Listings
  const filteredListings = useMemo(() => {
    const ceiling = maxPrice === "Any" ? Number.POSITIVE_INFINITY : Number(maxPrice);
    const minBeds = bedsFilter === "All" ? 0 : parseInt(bedsFilter, 10);
    const q = searchQuery.trim().toLowerCase();

    return listings.filter((listing) => {
      const matchNeighborhood =
        neighborhoodFilter === "All" || listing.neighborhood === neighborhoodFilter;
      const matchType = typeFilter === "All" || listing.propertyType === typeFilter;
      const matchPrice = listing.price <= ceiling;
      const matchBeds = listing.beds >= minBeds;
      const matchSearch =
        !q ||
        listing.title.toLowerCase().includes(q) ||
        listing.address.toLowerCase().includes(q) ||
        listing.neighborhood.toLowerCase().includes(q) ||
        listing.architecturalHighlights.some((h) => h.toLowerCase().includes(q));

      return matchNeighborhood && matchType && matchPrice && matchBeds && matchSearch;
    });
  }, [neighborhoodFilter, typeFilter, maxPrice, bedsFilter, searchQuery]);

  // Mortgage Calculator Calculations
  const calculatedMortgage = useMemo(() => {
    const downPaymentAmount = (calcPrice * downPaymentPercent) / 100;
    const loanAmount = Math.max(0, calcPrice - downPaymentAmount);
    const monthlyRate = interestRate / 100 / 12;
    const totalPayments = loanTermYears * 12;

    let monthlyPI = 0;
    if (monthlyRate > 0 && totalPayments > 0 && loanAmount > 0) {
      monthlyPI =
        (loanAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
        (Math.pow(1 + monthlyRate, totalPayments) - 1);
    }

    const estimatedAnnualTax = calcPrice * 0.0095;
    const monthlyTax = estimatedAnnualTax / 12;
    const monthlyInsurance = (calcPrice * 0.0035) / 12;
    const monthlyHOA = 480;

    const totalMonthly = monthlyPI + monthlyTax + monthlyInsurance + monthlyHOA;

    return {
      downPaymentAmount,
      loanAmount,
      monthlyPI: Math.round(monthlyPI),
      monthlyTax: Math.round(monthlyTax),
      monthlyInsurance: Math.round(monthlyInsurance),
      monthlyHOA,
      totalMonthly: Math.round(totalMonthly),
    };
  }, [calcPrice, downPaymentPercent, interestRate, loanTermYears]);

  // Seller Valuation Calculations
  const calculatedValuation = useMemo(() => {
    let basePricePerSqft = 640;
    if (sellerNeighborhood === "River North") basePricePerSqft = 665;
    if (sellerNeighborhood === "West Harbor") basePricePerSqft = 555;
    if (sellerNeighborhood === "Crescent Hill") basePricePerSqft = 525;

    if (sellerHomeType === "Estate / Single Family") basePricePerSqft += 40;
    if (sellerHomeType === "Penthouse / Sky-Villa") basePricePerSqft += 75;

    const estimatedMid = sellerSqFt * basePricePerSqft;
    const low = Math.round((estimatedMid * 0.96) / 5000) * 5000;
    const high = Math.round((estimatedMid * 1.06) / 5000) * 5000;

    return {
      low,
      high,
      pricePerSqft: basePricePerSqft,
    };
  }, [sellerNeighborhood, sellerHomeType, sellerSqFt]);

  const updateForm = (field: keyof InquiryForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSubmitted(false);
  };

  const focusInquiry = (intent: string, property = "", customMessage = "") => {
    setForm((current) => ({
      ...current,
      intent,
      property,
      message: customMessage || (property ? `I would like to arrange a private showing for ${property}.` : current.message),
    }));
    setSubmitted(false);
    window.setTimeout(() => {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      document.getElementById("inquiry-name")?.focus({ preventScroll: true });
    }, 50);
  };

  const openPropertyModal = (listing: Listing) => {
    setSelectedListing(listing);
    setTourConfirmed(false);
  };

  const loadListingIntoCalculator = (listing: Listing) => {
    setCalcPrice(listing.price);
    setSelectedListing(null);
    document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleConfirmTour = (e: FormEvent) => {
    e.preventDefault();
    if (!tourName.trim()) return;
    setTourConfirmed(true);
  };

  const validateForm = () => {
    const nextErrors: FormErrors = {};
    if (!form.name.trim() || form.name.trim().length < 2) nextErrors.name = "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = "Please enter a valid email address.";
    if (form.phone && !/^[+\d\s().-]{7,}$/.test(form.phone)) nextErrors.phone = "Enter a valid phone number.";
    if (form.message.trim().length < 10) nextErrors.message = "Please share a brief note about your property plans.";
    return nextErrors;
  };

  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      window.setTimeout(() => document.getElementById("form-errors")?.focus(), 0);
      return;
    }

    setSubmitted(true);
  };

  const resetInquiry = () => {
    setForm(initialForm);
    setErrors({});
    setSubmitted(false);
  };

  const clearFilters = () => {
    setNeighborhoodFilter("All");
    setTypeFilter("All");
    setMaxPrice("Any");
    setBedsFilter("All");
    setSearchQuery("");
  };

  return (
    <main className="skyline-app bg-[#f8fafc] text-[#0f172a] selection:bg-[#c5a069]/30">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500;600;700;800;900&display=swap');
        .skyline-app { font-family: 'Outfit', -apple-system, sans-serif; }
        .skyline-display { font-family: 'Cormorant Garamond', Georgia, serif; }
        .skyline-gold { color: #c5a069; }
        .bg-skyline-gold { background-color: #c5a069; }
        .border-skyline-gold { border-color: #c5a069; }
        section[id] { scroll-margin-top: 96px; }
      `}</style>

      {/* LUXURY STICKY SUB-WEBSITE NAVIGATION */}
      <SubWebsiteNav
        brand="Skyline Realty"
        links={navLinks}
        ctaLabel="Private Consultation"
        ctaHref="#contact"
        collectionPath="/real-estate"
        className="border-b border-[#e2e8f0] bg-white/95 text-[#0f172a] shadow-sm backdrop-blur-md"
        brandClassName="text-[#153e75] font-extrabold tracking-tight"
        linkClassName="text-slate-600 hover:text-[#153e75] text-[0.82rem] font-semibold tracking-wide"
        ctaClassName="bg-[#153e75] text-white hover:bg-[#0b1324] text-[0.8rem] font-bold tracking-wider uppercase transition shadow-md"
        menuButtonClassName="border-[#dbe4ef] text-[#153e75] hover:bg-[#eff6ff]"
        mobilePanelClassName="border border-[#dbe4ef] bg-white"
      />

      {/* HERO SECTION */}
      <section className="relative min-h-[880px] overflow-hidden bg-[#09111f] pb-24 pt-32 text-white md:pt-40">
        <div className="absolute inset-0">
          <EditorialImage
            src={heroImage}
            alt="Modern penthouse overlooking a city skyline"
            tone="from-[#1d4f8c] via-[#153e75] to-[#0f172a]"
            className="h-full w-full object-cover object-center"
            eager
          />
          {/* Subtle architectural vignettes */}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(9,17,31,0.97)_0%,rgba(9,17,31,0.85)_46%,rgba(9,17,31,0.35)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(197,160,105,0.22),transparent_32%)]" />
        </div>

        <Container>
          <div className="relative grid min-h-[660px] gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#c5a069]/40 bg-[#c5a069]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-[0.24em] text-[#e6cfa3] backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-[#c5a069]" />
                Architectural Brokerage Group
              </div>

              <h1 className="skyline-display mt-6 text-5xl font-medium leading-[0.94] tracking-[-0.02em] md:text-7xl xl:text-8xl">
                City homes, curated with market intelligence.
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                Bespoke representation for buyers, sellers, and private family offices. We combine micro-neighborhood data, unlisted inventory access, and calm, high-leverage negotiation from first tour to deed transfer.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <CTAButton
                  href="#listings"
                  size="lg"
                  className="bg-[#c5a069] text-[#09111f] font-bold tracking-wide uppercase hover:bg-white transition shadow-xl"
                >
                  Explore Residences
                </CTAButton>
                <CTAButton
                  href="#calculator"
                  variant="outline"
                  size="lg"
                  className="border-white/35 text-white hover:bg-white/10 font-semibold tracking-wide"
                >
                  Mortgage Estimator
                </CTAButton>
              </div>

              {/* Quick credibility metrics */}
              <div className="mt-12 flex flex-wrap items-center gap-8 border-t border-white/15 pt-6 text-xs text-white/60">
                <div>
                  <span className="block text-xl font-bold text-white">$140M+</span>
                  <span className="uppercase tracking-wider">Career Volume</span>
                </div>
                <div className="h-8 w-px bg-white/15" />
                <div>
                  <span className="block text-xl font-bold text-white">24-Hour</span>
                  <span className="uppercase tracking-wider">Private Tour Promise</span>
                </div>
                <div className="h-8 w-px bg-white/15" />
                <div>
                  <span className="block text-xl font-bold text-[#e6cfa3]">98.6%</span>
                  <span className="uppercase tracking-wider">List-to-Sale Ratio</span>
                </div>
              </div>
            </div>

            {/* Floating Market Desk Desk Card */}
            <div className="self-end lg:justify-self-end w-full max-w-md">
              <div className="border border-white/20 bg-white/[0.08] p-7 shadow-2xl backdrop-blur-xl rounded-sm">
                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-[0.2em] text-[#e6cfa3]">
                  <span>Private Market Desk</span>
                  <span className="rounded-full bg-[#c5a069]/20 px-2.5 py-0.5 text-[0.65rem] text-[#e6cfa3] border border-[#c5a069]/40">
                    Live Autumn 2026
                  </span>
                </div>

                <h2 className="skyline-display mt-3 text-3xl font-normal leading-snug">
                  Tailored showing itinerary prepared within 24 hours.
                </h2>

                <div className="mt-6 grid grid-cols-3 divide-x divide-white/15 border-y border-white/15 py-2">
                  {[
                    ["126", "Closed"],
                    ["4.98", "Client Rating"],
                    ["24d", "Avg. Days"],
                  ].map(([value, label]) => (
                    <div key={label} className="px-2 py-3 text-center">
                      <p className="skyline-display text-3xl font-medium text-[#e6cfa3]">
                        {value}
                      </p>
                      <p className="mt-0.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-white/60">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => focusInquiry("Buy")}
                    className="flex w-full items-center justify-center gap-2 bg-[#c5a069] px-5 py-3.5 text-xs font-black uppercase tracking-[0.14em] text-[#09111f] transition hover:bg-white"
                  >
                    <span>Request VIP Buyer Brief</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <a
                    href="#sellers"
                    className="block text-center text-xs font-semibold text-white/70 hover:text-white transition py-1"
                  >
                    Thinking of selling? Calculate home value →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: FEATURED LISTINGS & SEARCH SUITE */}
      <section id="listings" className="py-20 md:py-28">
        <Container>
          <div className="mb-10 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c5a069]">
                Curated Portfolio
              </p>
              <h2 className="skyline-display mt-2 text-4xl font-normal text-[#09111f] md:text-5xl">
                Featured Residences
              </h2>
              <p className="mt-2 text-base text-slate-600 max-w-xl">
                Compare architectural character, square footage, neighborhood positioning, and monthly carries without losing the details that make each home distinctive.
              </p>
            </div>

            {savedPropertyIds.length > 0 && (
              <div className="flex items-center gap-2 rounded-full border border-[#c5a069]/40 bg-[#fbf9f5] px-4 py-2 text-xs font-bold text-[#153e75]">
                <Heart className="h-3.5 w-3.5 fill-[#c5a069] text-[#c5a069]" />
                <span>{savedPropertyIds.length} Saved in your private shortlist</span>
              </div>
            )}
          </div>

          {/* Interactive Search & Filter Bar */}
          <div className="mb-10 rounded-xl border border-[#dbe4ef] bg-white p-5 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {/* Search Keyword */}
              <div className="lg:col-span-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                  Search Property / Address
                </label>
                <div className="relative">
                  <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="e.g. Penthouse, terrace, Alder..."
                    className="h-11 w-full rounded-md border border-slate-200 pl-10 pr-3 text-sm focus:border-[#153e75] focus:outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>
              </div>

              {/* Neighborhood */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                  Neighborhood
                </label>
                <select
                  value={neighborhoodFilter}
                  onChange={(e) => setNeighborhoodFilter(e.target.value)}
                  className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 font-medium focus:border-[#153e75] focus:outline-none"
                >
                  <option value="All">All Neighborhoods</option>
                  {neighborhoods.map((n) => (
                    <option key={n.name} value={n.name}>
                      {n.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Bedrooms */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                  Bedrooms
                </label>
                <select
                  value={bedsFilter}
                  onChange={(e) => setBedsFilter(e.target.value)}
                  className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 font-medium focus:border-[#153e75] focus:outline-none"
                >
                  <option value="All">Any Bedrooms</option>
                  <option value="2">2+ Beds</option>
                  <option value="3">3+ Beds</option>
                  <option value="5">5+ Beds</option>
                </select>
              </div>

              {/* Maximum Price */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                  Max Price
                </label>
                <select
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                  className="h-11 w-full rounded-md border border-slate-200 bg-white px-3 text-sm text-slate-700 font-medium focus:border-[#153e75] focus:outline-none"
                >
                  <option value="Any">Any Price</option>
                  <option value="800000">Up to $800,000</option>
                  <option value="1500000">Up to $1.5M</option>
                  <option value="2500000">Up to $2.5M</option>
                </select>
              </div>
            </div>

            {/* Quick Status / Reset Row */}
            <div className="mt-4 flex flex-wrap items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-500">
              <span aria-live="polite">
                Showing <b>{filteredListings.length}</b> of {listings.length} residences
              </span>

              {(neighborhoodFilter !== "All" ||
                typeFilter !== "All" ||
                maxPrice !== "Any" ||
                bedsFilter !== "All" ||
                searchQuery) && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="font-bold text-[#153e75] hover:underline"
                >
                  Reset all filters
                </button>
              )}
            </div>
          </div>

          {/* Listing Cards Grid */}
          {filteredListings.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredListings.map((listing) => {
                const isSaved = savedPropertyIds.includes(listing.id);
                const pricePerSqft = Math.round(listing.price / listing.sqftNumber);

                return (
                  <article
                    key={listing.id}
                    className="group relative flex flex-col overflow-hidden rounded-xl border border-[#dbe4ef] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#c5a069]/60"
                  >
                    {/* Image Header with Badges */}
                    <div className="relative aspect-[16/11] overflow-hidden bg-slate-900">
                      <EditorialImage
                        src={listing.image}
                        alt={`${listing.title} at ${listing.address}`}
                        tone={listing.tone}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

                      {/* Top Badges */}
                      <div className="absolute left-4 top-4 flex items-center gap-2">
                        <span className="rounded-full bg-white/95 px-3 py-1 text-[0.68rem] font-black uppercase tracking-wider text-[#153e75] shadow-md backdrop-blur-sm">
                          {listing.statusBadge}
                        </span>
                        <span className="rounded-full bg-black/60 px-2.5 py-1 text-[0.68rem] font-medium text-white/90 backdrop-blur-md">
                          {listing.propertyType}
                        </span>
                      </div>

                      {/* Favorite Heart Button */}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleSaveProperty(listing.id);
                        }}
                        className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-white/90 text-slate-700 shadow-md backdrop-blur-sm transition hover:bg-white hover:text-red-500"
                        title={isSaved ? "Remove from shortlist" : "Save to shortlist"}
                        aria-label={`Save ${listing.title}`}
                      >
                        <Heart
                          className={`h-4 w-4 ${isSaved ? "fill-red-500 text-red-500" : ""}`}
                        />
                      </button>

                      {/* Bottom Image Stats (Price & $/Sqft) */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-baseline justify-between text-white">
                        <div>
                          <p className="skyline-display text-3xl font-medium tracking-tight drop-shadow-md">
                            {listing.priceLabel}
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-white/80 drop-shadow">
                          ${pricePerSqft}/sqft
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-1 flex-col p-6">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="text-xl font-bold text-[#09111f] group-hover:text-[#153e75] transition">
                            {listing.title}
                          </h3>
                          <p className="mt-1 flex items-center gap-1.5 text-xs text-slate-500">
                            <MapPin className="h-3.5 w-3.5 text-[#c5a069]" />
                            <span>{listing.address}</span>
                          </p>
                        </div>
                      </div>

                      <p className="mt-3 text-xs leading-relaxed text-slate-600 line-clamp-2">
                        {listing.description}
                      </p>

                      {/* Specs Matrix */}
                      <dl className="mt-5 grid grid-cols-3 border-y border-slate-100 py-3 text-center text-xs">
                        <div className="border-r border-slate-100">
                          <dt className="text-[0.68rem] uppercase tracking-wider text-slate-400">Beds</dt>
                          <dd className="mt-0.5 font-bold text-slate-800">{listing.beds}</dd>
                        </div>
                        <div className="border-r border-slate-100">
                          <dt className="text-[0.68rem] uppercase tracking-wider text-slate-400">Baths</dt>
                          <dd className="mt-0.5 font-bold text-slate-800">{listing.baths}</dd>
                        </div>
                        <div>
                          <dt className="text-[0.68rem] uppercase tracking-wider text-slate-400">Square Ft</dt>
                          <dd className="mt-0.5 font-bold text-slate-800">{listing.squareFeet}</dd>
                        </div>
                      </dl>

                      {/* Highlights Pill */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {listing.architecturalHighlights.slice(0, 2).map((h) => (
                          <span
                            key={h}
                            className="rounded bg-[#f1f5f9] px-2 py-0.5 text-[0.68rem] font-medium text-slate-600 truncate max-w-[210px]"
                          >
                            ✦ {h}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons: Modal Inspect & Fast Schedule */}
                      <div className="mt-6 grid grid-cols-2 gap-2 pt-2">
                        <button
                          type="button"
                          onClick={() => openPropertyModal(listing)}
                          className="flex items-center justify-center gap-1.5 rounded-lg border border-slate-300 py-2.5 text-xs font-bold text-slate-700 transition hover:bg-slate-50"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          <span>Specs & Tour</span>
                        </button>

                        <button
                          type="button"
                          onClick={() => {
                            setSelectedListing(listing);
                            setTourConfirmed(false);
                          }}
                          className="flex items-center justify-center gap-1.5 rounded-lg bg-[#153e75] py-2.5 text-xs font-bold text-white transition hover:bg-[#09111f] shadow-sm"
                        >
                          <Calendar className="h-3.5 w-3.5" />
                          <span>Book Showing</span>
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
              <Building2 className="mx-auto h-12 w-12 text-slate-300" />
              <h3 className="skyline-display mt-4 text-3xl font-medium text-slate-800">
                No residences match this search.
              </h3>
              <p className="mt-2 text-sm text-slate-500">
                Try widening your price range or clearing neighborhood filters to see all properties.
              </p>
              <button
                type="button"
                onClick={clearFilters}
                className="mt-5 rounded-lg bg-[#153e75] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#09111f]"
              >
                Clear Filters
              </button>
            </div>
          )}
        </Container>
      </section>

      {/* SECTION: NEIGHBORHOOD INTELLIGENCE WITH TRANSIT & WALK SCORES */}
      <section id="neighborhoods" className="border-y border-[#dbe4ef] bg-[#edf4fb] py-20 md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c5a069]">
                Neighborhood Intelligence
              </p>
              <h2 className="skyline-display mt-2 text-4xl font-normal text-[#09111f] md:text-5xl">
                The right home begins with the right block.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
                Skyline compares pedestrian cadence, transit corridors, and long-term resale liquidity before a client commits capital.
              </p>
            </div>

            <div className="rounded-xl border border-[#c9d8e8] bg-white p-5 shadow-lg">
              <p className="text-xs font-bold uppercase tracking-widest text-[#153e75]">
                Locational Due Diligence Matrix
              </p>
              <div className="mt-3 grid gap-2.5 sm:grid-cols-3">
                <div className="rounded-lg bg-[#f8fafc] p-3 border border-slate-200">
                  <span className="block text-xs font-bold text-slate-900">Pedestrian Rhythm</span>
                  <span className="text-[0.72rem] text-slate-500">WalkScores 84–98 across all prime hubs</span>
                </div>
                <div className="rounded-lg bg-[#f8fafc] p-3 border border-slate-200">
                  <span className="block text-xs font-bold text-slate-900">Commute Velocity</span>
                  <span className="text-[0.72rem] text-slate-500">Direct ferry, rail, and arterial connection</span>
                </div>
                <div className="rounded-lg bg-[#f8fafc] p-3 border border-slate-200">
                  <span className="block text-xs font-bold text-slate-900">Capital Stability</span>
                  <span className="text-[0.72rem] text-slate-500">Top quartile historical price retention</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {neighborhoods.map((item, index) => (
              <article
                key={item.name}
                className="group flex flex-col overflow-hidden rounded-xl border border-[#c9d8e8] bg-white shadow-sm transition duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:border-[#c5a069]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <EditorialImage
                    src={item.image}
                    alt={`${item.name} neighborhood`}
                    tone={item.tone}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-[#0f172a]/20 to-transparent" />

                  {/* Badges */}
                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between">
                    <span className="rounded-full bg-white/95 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-[#153e75] shadow">
                      District 0{index + 1}
                    </span>
                    <span className="rounded-full bg-[#c5a069] px-3 py-1 text-[0.68rem] font-bold text-[#09111f] shadow">
                      WalkScore: {item.walkScore}
                    </span>
                  </div>

                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="skyline-display text-3xl font-medium text-white">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-white/80 line-clamp-2">
                      {item.text}
                    </p>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  {/* District Metrics */}
                  <div className="space-y-2 text-xs">
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500">Transit Core:</span>
                      <span className="font-bold text-slate-800">{item.transitTime}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-100 pb-2">
                      <span className="text-slate-500">Median Price Band:</span>
                      <span className="font-bold text-slate-800">{item.medianPrice}</span>
                    </div>
                    <div className="flex justify-between pb-1">
                      <span className="text-slate-500">Housing Type:</span>
                      <span className="font-bold text-slate-800">{item.homes}</span>
                    </div>
                  </div>

                  {/* Highlights Tags */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-[#f1f5f9] px-2.5 py-0.5 text-[0.68rem] font-semibold text-slate-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="mt-6 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        setNeighborhoodFilter(item.name);
                        document.getElementById("listings")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#153e75] py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#09111f]"
                    >
                      <span>Filter Homes Here</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* SECTION: ABOUT MAYA BENNETT, PRINCIPAL BROKER */}
      <section id="about" className="bg-[#09111f] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-xl border border-white/20 shadow-2xl">
                <EditorialImage
                  src={agentImage}
                  alt="Maya Bennett, Principal Broker at Skyline Realty Group"
                  tone="from-[#dbeafe] via-[#365f8b] to-[#0f172a]"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 rounded-lg border border-[#c5a069]/40 bg-[#09111f]/95 p-4 shadow-xl backdrop-blur-md hidden sm:block">
                <p className="text-xs font-bold uppercase tracking-wider text-[#c5a069]">
                  14+ Years in City Brokerage
                </p>
                <p className="mt-1 text-sm font-semibold text-white">
                  Over $140M in Closed Transactions
                </p>
              </div>
            </div>

            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c5a069]">
                Meet Your Principal Broker
              </p>
              <h2 className="skyline-display mt-2 text-4xl font-normal leading-tight md:text-6xl">
                Maya Bennett, Principal Strategist
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
                Maya pairs disciplined financial preparation with calm, direct advocacy. Her mission is to clarify every tradeoff before it becomes expensive—and to keep your lifestyle priorities at the center of every negotiation.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {servicePaths.map(([title, text]) => (
                  <article
                    key={title}
                    className="rounded-lg border border-white/15 bg-white/5 p-5 backdrop-blur-sm"
                  >
                    <h3 className="text-base font-bold text-[#e6cfa3]">{title}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/60">{text}</p>
                  </article>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => focusInquiry("Consultation", "", "I would like to schedule a private advisory consultation with Maya Bennett.")}
                  className="rounded-full bg-[#c5a069] px-7 py-3 text-xs font-black uppercase tracking-[0.14em] text-[#09111f] transition hover:bg-white"
                >
                  Book Private Consult
                </button>
                <a
                  href="tel:+15550301000"
                  className="rounded-full border border-white/30 px-6 py-3 text-xs font-bold uppercase tracking-[0.12em] text-white hover:bg-white/10 transition"
                >
                  Call (555) 030-1000
                </a>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: SELLER STRATEGY WITH INSTANT HOME VALUATION WIDGET */}
      <section id="sellers" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c5a069]">
                Seller Advisory & Valuation
              </p>
              <h2 className="skyline-display mt-2 text-4xl font-normal leading-tight text-[#09111f] md:text-5xl">
                A calibrated launch with zero surprises.
              </h2>
              <p className="mt-4 text-base text-slate-600">
                We position residential real estate as a prized architectural asset, generating buyer competitive tension while preserving your privacy.
              </p>

              <div className="mt-8 space-y-4">
                {sellerSteps.map(([number, title, text]) => (
                  <article
                    key={title}
                    className="grid grid-cols-[auto_1fr] gap-4 rounded-xl border border-[#dbe4ef] bg-white p-5 shadow-sm"
                  >
                    <span className="skyline-display text-4xl font-medium text-[#c5a069]">
                      {number}
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-slate-900">{title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-slate-600">{text}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Interactive Instant Home Valuation Widget */}
            <div className="rounded-2xl border border-[#c9d8e8] bg-white p-7 shadow-xl">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#c5a069]">
                    Instant Market Estimator
                  </span>
                  <h3 className="text-lg font-bold text-slate-900">
                    Estimate Your Home's Value
                  </h3>
                </div>
                <Calculator className="h-5 w-5 text-[#153e75]" />
              </div>

              <div className="mt-5 space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">
                    Select Neighborhood
                  </label>
                  <select
                    value={sellerNeighborhood}
                    onChange={(e) => setSellerNeighborhood(e.target.value)}
                    className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-xs font-medium text-slate-800"
                  >
                    <option value="River North">River North (Est. ~$665/sqft)</option>
                    <option value="West Harbor">West Harbor (Est. ~$555/sqft)</option>
                    <option value="Crescent Hill">Crescent Hill (Est. ~$525/sqft)</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-600 block mb-1">
                    Property Configuration
                  </label>
                  <select
                    value={sellerHomeType}
                    onChange={(e) => setSellerHomeType(e.target.value)}
                    className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-xs font-medium text-slate-800"
                  >
                    <option value="Condo / Loft">Condo / Loft</option>
                    <option value="Townhome">Urban Townhome</option>
                    <option value="Penthouse / Sky-Villa">Penthouse / Sky-Villa</option>
                    <option value="Estate / Single Family">Estate / Single Family</option>
                  </select>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                    <span>Approximate Square Footage:</span>
                    <span className="text-[#153e75]">{sellerSqFt.toLocaleString()} sqft</span>
                  </div>
                  <input
                    type="range"
                    min={800}
                    max={5000}
                    step={50}
                    value={sellerSqFt}
                    onChange={(e) => setSellerSqFt(Number(e.target.value))}
                    className="w-full accent-[#153e75]"
                  />
                  <div className="flex justify-between text-[0.68rem] text-slate-400">
                    <span>800 sqft</span>
                    <span>2,500 sqft</span>
                    <span>5,000 sqft</span>
                  </div>
                </div>

                {/* Valuation Result Box */}
                <div className="rounded-xl border border-[#c5a069]/40 bg-[#fbf9f5] p-5 text-center">
                  <span className="text-[0.68rem] font-bold uppercase tracking-widest text-slate-500">
                    Indicative Valuation Range
                  </span>
                  <p className="skyline-display mt-1 text-3xl sm:text-4xl font-normal text-[#153e75]">
                    ${calculatedValuation.low.toLocaleString()} – ${calculatedValuation.high.toLocaleString()}
                  </p>
                  <p className="mt-1 text-[0.7rem] text-slate-500">
                    Based on recent neighborhood closing velocity (${calculatedValuation.pricePerSqft}/sqft avg).
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      focusInquiry(
                        "Sell",
                        "",
                        `I would like a formal Comparative Market Analysis (CMA) for my ${sellerSqFt.toLocaleString()} sqft ${sellerHomeType} in ${sellerNeighborhood}.`
                      )
                    }
                    className="mt-4 w-full rounded-lg bg-[#09111f] py-2.5 text-xs font-bold uppercase tracking-wider text-white transition hover:bg-[#c5a069] hover:text-[#09111f]"
                  >
                    Request Comprehensive CMA Plan →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: INTERACTIVE MORTGAGE & MONTHLY INVESTMENT CALCULATOR */}
      <section id="calculator" className="border-y border-[#dbe4ef] bg-[#edf4fb] py-20 md:py-28">
        <Container>
          <div className="max-w-2xl mx-auto text-center mb-12">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c5a069]">
              Financial Modeling Suite
            </p>
            <h2 className="skyline-display mt-2 text-4xl font-normal text-[#09111f] md:text-5xl">
              Monthly Carry & Mortgage Estimator
            </h2>
            <p className="mt-3 text-sm text-slate-600">
              Calculate principal, interest, taxes, and association fees to model your true monthly capital obligation across various down payment tiers.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] max-w-5xl mx-auto rounded-2xl border border-[#c9d8e8] bg-white p-6 sm:p-10 shadow-xl">
            {/* Inputs Column */}
            <div className="space-y-6">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1.5">
                  Home Purchase Price
                </label>
                <div className="relative">
                  <span className="absolute left-3.5 top-2.5 font-bold text-slate-400">$</span>
                  <input
                    type="number"
                    step={10000}
                    value={calcPrice}
                    onChange={(e) => setCalcPrice(Number(e.target.value))}
                    className="h-11 w-full rounded-md border border-slate-200 pl-8 pr-3 text-base font-bold text-slate-800 focus:border-[#153e75] focus:outline-none"
                  />
                </div>
                {/* Fast Presets from Listings */}
                <div className="mt-2 flex flex-wrap gap-2 text-xs">
                  <span className="text-slate-400 py-0.5">Quick fill:</span>
                  {listings.map((l) => (
                    <button
                      key={l.id}
                      type="button"
                      onClick={() => setCalcPrice(l.price)}
                      className="rounded bg-slate-100 px-2 py-0.5 text-[0.68rem] font-semibold text-slate-700 hover:bg-[#c5a069] hover:text-white transition"
                    >
                      {l.title} ({l.priceLabel})
                    </button>
                  ))}
                </div>
              </div>

              {/* Down Payment Slider */}
              <div>
                <div className="flex justify-between text-xs font-bold text-slate-700 mb-1">
                  <span>Down Payment ({downPaymentPercent}%):</span>
                  <span className="text-[#153e75]">
                    ${calculatedMortgage.downPaymentAmount.toLocaleString()}
                  </span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={50}
                  step={5}
                  value={downPaymentPercent}
                  onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                  className="w-full accent-[#153e75]"
                />
                <div className="flex justify-between text-[0.68rem] text-slate-400">
                  <span>10% ($128K)</span>
                  <span>20% Conventional</span>
                  <span>50% Low LTV</span>
                </div>
              </div>

              {/* Interest Rate & Loan Term */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                    Interest Rate (%)
                  </label>
                  <input
                    type="number"
                    step={0.125}
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="h-10 w-full rounded-md border border-slate-200 px-3 text-sm font-bold text-slate-800 focus:border-[#153e75] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-600 block mb-1">
                    Loan Term
                  </label>
                  <select
                    value={loanTermYears}
                    onChange={(e) => setLoanTermYears(Number(e.target.value))}
                    className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-sm font-bold text-slate-800"
                  >
                    <option value={30}>30 Years Fixed</option>
                    <option value={15}>15 Years Fixed</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Payment Summary Column */}
            <div className="flex flex-col justify-between rounded-xl bg-[#09111f] p-6 sm:p-8 text-white">
              <div>
                <span className="text-[0.68rem] font-bold uppercase tracking-widest text-[#e6cfa3]">
                  Estimated Monthly Outlay
                </span>
                <p className="skyline-display mt-2 text-4xl sm:text-5xl font-normal text-white">
                  ${calculatedMortgage.totalMonthly.toLocaleString()}
                  <span className="text-sm font-normal text-white/50"> /month</span>
                </p>
                <p className="mt-1 text-xs text-white/60">
                  Loan Principal: ${calculatedMortgage.loanAmount.toLocaleString()}
                </p>

                {/* Breakdown List */}
                <div className="mt-6 space-y-2.5 border-t border-white/15 pt-4 text-xs">
                  <div className="flex justify-between">
                    <span className="text-white/70">Principal & Interest:</span>
                    <span className="font-bold text-white">${calculatedMortgage.monthlyPI.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Est. Property Taxes:</span>
                    <span className="font-bold text-white">${calculatedMortgage.monthlyTax.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Homeowners Insurance:</span>
                    <span className="font-bold text-white">${calculatedMortgage.monthlyInsurance.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Est. Association (HOA):</span>
                    <span className="font-bold text-white">${calculatedMortgage.monthlyHOA.toLocaleString()}</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/15 pt-4">
                <button
                  type="button"
                  onClick={() =>
                    focusInquiry(
                      "Finance",
                      "",
                      `I am modeling financing for a $${calcPrice.toLocaleString()} property with a $${calculatedMortgage.downPaymentAmount.toLocaleString()} down payment.`
                    )
                  }
                  className="w-full rounded-lg bg-[#c5a069] py-3 text-xs font-black uppercase tracking-[0.14em] text-[#09111f] hover:bg-white transition"
                >
                  Connect with Preferred Lender →
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: CLIENT TESTIMONIALS */}
      <section className="border-b border-[#dbe4ef] bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-stretch">
            <div className="relative overflow-hidden rounded-xl">
              <EditorialImage
                src={testimonialImage}
                alt="Skyline clients reviewing architectural plans"
                tone="from-[#f8fafc] via-[#7e9bb8] to-[#153e75]"
                className="h-full min-h-[440px] w-full object-cover"
              />
              <div className="absolute inset-x-5 bottom-5 rounded-lg bg-[#09111f]/95 p-6 text-white backdrop-blur-md">
                <p className="skyline-display text-2xl font-normal leading-snug">
                  “{testimonials[0].quote}”
                </p>
                <p className="mt-3 text-xs font-bold uppercase tracking-wider text-[#e6cfa3]">
                  {testimonials[0].name} · {testimonials[0].role}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c5a069]">
                Client Endorsements
              </p>
              <h2 className="skyline-display mt-2 text-4xl font-normal leading-tight md:text-5xl">
                Disciplined advice yields lasting confidence.
              </h2>

              <div className="mt-8 grid gap-4">
                {testimonials.slice(1).map((item) => (
                  <blockquote
                    key={item.name}
                    className="rounded-lg border-l-4 border-[#c5a069] bg-[#f8fafc] p-6 shadow-sm"
                  >
                    <p className="text-sm font-medium leading-relaxed text-slate-800">
                      “{item.quote}”
                    </p>
                    <footer className="mt-3 text-xs font-bold text-[#153e75]">
                      {item.name} · {item.role}
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: FAQ ACCORDION */}
      <section id="faq" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c5a069]">
                Frequently Addressed
              </p>
              <h2 className="skyline-display mt-2 text-4xl font-normal leading-tight md:text-5xl">
                Clarity before commitment.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-600">
                Transparent answers regarding representation protocol, private off-market tours, and fiduciary standards.
              </p>
            </div>

            <div className="divide-y divide-[#dbe4ef] border-y border-[#dbe4ef]">
              {faqs.map(([question, answer], index) => {
                const isOpen = openFaq === index;
                return (
                  <article key={question}>
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={`faq-panel-${index}`}
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        className="flex w-full items-center justify-between gap-5 py-5 text-left text-base font-bold text-slate-900 transition hover:text-[#153e75]"
                      >
                        <span>{question}</span>
                        <span aria-hidden="true" className="text-xl font-normal text-[#c5a069]">
                          {isOpen ? "−" : "+"}
                        </span>
                      </button>
                    </h3>
                    {isOpen && (
                      <div
                        id={`faq-panel-${index}`}
                        className="pb-5 pr-8 text-xs leading-relaxed text-slate-600"
                      >
                        {answer}
                      </div>
                    )}
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* SECTION: CONTACT & PRIVATE CONSULTATION */}
      <section id="contact" className="bg-[#09111f] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.24em] text-[#c5a069]">
                Discreet Advisory
              </p>
              <h2 className="skyline-display mt-2 text-4xl font-normal leading-tight md:text-5xl">
                Initiate your private consultation.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-white/70">
                Whether assessing an acquisition, planning a calibrated sale, or tracking micro-market capitalization rates, we provide confidential counsel.
              </p>

              <div className="mt-8 space-y-3 text-xs font-semibold text-white/80">
                <a href="tel:+15550301000" className="flex items-center gap-2 hover:text-[#e6cfa3] transition">
                  <Phone className="h-4 w-4 text-[#c5a069]" />
                  <span>(555) 030-1000 (Direct Broker Desk)</span>
                </a>
                <a href="mailto:hello@skylinerealty.example" className="flex items-center gap-2 hover:text-[#e6cfa3] transition">
                  <Mail className="h-4 w-4 text-[#c5a069]" />
                  <span>advisory@skylinerealty.example</span>
                </a>
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="rounded-xl bg-white p-6 sm:p-8 text-[#0f172a] shadow-2xl">
              {submitted ? (
                <div
                  role="status"
                  aria-live="polite"
                  className="flex min-h-[460px] flex-col items-center justify-center text-center"
                >
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-3xl text-emerald-700">
                    <CheckCircle2 className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="skyline-display mt-5 text-3xl font-medium">
                    Consultation Brief Received
                  </h3>
                  <p className="mt-2 max-w-md text-xs leading-relaxed text-slate-600">
                    Thank you, {form.name}. Maya Bennett’s desk will review your {form.intent.toLowerCase()} inquiry and reply via {form.contactMethod.toLowerCase()} within 4 business hours.
                  </p>
                  <button
                    type="button"
                    onClick={resetInquiry}
                    className="mt-6 rounded-lg bg-[#153e75] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#09111f]"
                  >
                    Start Another Inquiry
                  </button>
                </div>
              ) : (
                <form noValidate onSubmit={submitInquiry}>
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <p className="text-xs font-bold uppercase tracking-wider text-[#153e75]">
                      Confidential Advisory Form
                    </p>
                    <span className="text-[0.65rem] text-slate-400">Strictly Private</span>
                  </div>

                  {Object.keys(errors).length > 0 && (
                    <div
                      id="form-errors"
                      tabIndex={-1}
                      role="alert"
                      className="mt-4 rounded-md border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700"
                    >
                      Please review the highlighted fields below.
                    </div>
                  )}

                  <div className="mt-4 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Primary Objective
                      </label>
                      <select
                        value={form.intent}
                        onChange={(e) => updateForm("intent", e.target.value)}
                        className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-xs"
                      >
                        <option>Buy a Residence</option>
                        <option>Sell a Property</option>
                        <option>Investment Advisory</option>
                        <option>General Market Inquiries</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Referenced Property
                      </label>
                      <select
                        value={form.property}
                        onChange={(e) => updateForm("property", e.target.value)}
                        className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-xs"
                      >
                        <option value="">No specific residence</option>
                        {listings.map((l) => (
                          <option key={l.id} value={l.title}>
                            {l.title} ({l.priceLabel})
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Full Name *
                      </label>
                      <input
                        id="inquiry-name"
                        value={form.name}
                        onChange={(e) => updateForm("name", e.target.value)}
                        placeholder="e.g. Julian Vance"
                        className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs focus:border-[#153e75] focus:outline-none"
                      />
                      {errors.name && (
                        <span className="text-[0.68rem] text-red-600 block mt-0.5">{errors.name}</span>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateForm("email", e.target.value)}
                        placeholder="julian@example.com"
                        className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs focus:border-[#153e75] focus:outline-none"
                      />
                      {errors.email && (
                        <span className="text-[0.68rem] text-red-600 block mt-0.5">{errors.email}</span>
                      )}
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Direct Phone (Optional)
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateForm("phone", e.target.value)}
                        placeholder="(555) 000-0000"
                        className="h-10 w-full rounded-md border border-slate-200 px-3 text-xs focus:border-[#153e75] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-700 block mb-1">
                        Preferred Contact Method
                      </label>
                      <select
                        value={form.contactMethod}
                        onChange={(e) => updateForm("contactMethod", e.target.value)}
                        className="h-10 w-full rounded-md border border-slate-200 bg-white px-3 text-xs"
                      >
                        <option>Email</option>
                        <option>Phone Call</option>
                        <option>Direct Text Message</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-4">
                    <label className="text-xs font-bold text-slate-700 block mb-1">
                      Brief Message or Timing Goals *
                    </label>
                    <textarea
                      rows={4}
                      value={form.message}
                      onChange={(e) => updateForm("message", e.target.value)}
                      placeholder="Share details regarding your target neighborhoods, budget parameters, or property questions..."
                      className="w-full rounded-md border border-slate-200 p-3 text-xs focus:border-[#153e75] focus:outline-none"
                    />
                    {errors.message && (
                      <span className="text-[0.68rem] text-red-600 block mt-0.5">{errors.message}</span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="mt-5 w-full rounded-lg bg-[#153e75] py-3.5 text-xs font-black uppercase tracking-[0.14em] text-white transition hover:bg-[#09111f] shadow-md"
                  >
                    Submit Advisory Request →
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 bg-[#060c17] py-12 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="skyline-display text-2xl font-normal text-[#e6cfa3]">
                Skyline Realty Group
              </p>
              <p className="mt-2 max-w-xl text-xs leading-relaxed text-white/50">
                Architectural brokerage demonstration site. Certified high-performance showcase in the 100Web portfolio. All rights reserved.
              </p>
            </div>

            <div className="flex flex-wrap gap-6 text-xs font-semibold text-white/60">
              <a href="#listings" className="hover:text-white transition">Residences</a>
              <a href="#neighborhoods" className="hover:text-white transition">Neighborhoods</a>
              <a href="#about" className="hover:text-white transition">About</a>
              <a href="#sellers" className="hover:text-white transition">Seller Advisory</a>
              <a href="#calculator" className="hover:text-white transition">Mortgage</a>
              <Link to="/real-estate" className="text-[#c5a069] hover:text-white transition">
                ← All Real Estate Concepts
              </Link>
            </div>
          </div>
        </Container>
      </footer>

      {/* LUXURY PROPERTY DETAIL & PRIVATE SHOWING MODAL */}
      {selectedListing && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in"
          onClick={() => setSelectedListing(null)}
        >
          <div
            className="relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900">
              <EditorialImage
                src={selectedListing.image}
                alt={selectedListing.title}
                tone={selectedListing.tone}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

              <button
                type="button"
                onClick={() => setSelectedListing(null)}
                className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-black/60 text-white hover:bg-black transition"
                aria-label="Close dialog"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="rounded-full bg-[#c5a069] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-[#09111f]">
                  {selectedListing.statusBadge}
                </span>
                <h3 className="skyline-display mt-2 text-3xl sm:text-4xl font-normal">
                  {selectedListing.title}
                </h3>
                <p className="text-xs text-white/80">{selectedListing.address}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8">
              {/* Key Specs Bar */}
              <div className="grid grid-cols-4 divide-x divide-slate-200 border-y border-slate-200 py-3 text-center text-xs">
                <div>
                  <span className="text-slate-400 block text-[0.68rem] uppercase">Price</span>
                  <span className="font-bold text-slate-900 text-sm">{selectedListing.priceLabel}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[0.68rem] uppercase">Beds / Baths</span>
                  <span className="font-bold text-slate-900 text-sm">
                    {selectedListing.beds} / {selectedListing.baths}
                  </span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[0.68rem] uppercase">Interior Size</span>
                  <span className="font-bold text-slate-900 text-sm">{selectedListing.squareFeet} sqft</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[0.68rem] uppercase">Monthly Carry</span>
                  <span className="font-bold text-[#153e75] text-sm">${selectedListing.hoaPerMonth}/mo</span>
                </div>
              </div>

              {/* Description */}
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Architectural Narrative
                </h4>
                <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-slate-700">
                  {selectedListing.description}
                </p>
              </div>

              {/* Architectural Highlights */}
              <div className="mt-5">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  Signature Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {selectedListing.architecturalHighlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-2 rounded-lg bg-slate-50 p-2 text-xs font-medium text-slate-800 border border-slate-100"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#c5a069]" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Schedule Private Showing Sub-Form */}
              <div className="mt-8 rounded-xl border border-[#c5a069]/40 bg-[#fbf9f5] p-5">
                {tourConfirmed ? (
                  <div className="py-4 text-center">
                    <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
                    <h5 className="skyline-display mt-2 text-2xl font-normal text-slate-900">
                      Private Showing Confirmed
                    </h5>
                    <p className="mt-1 text-xs text-slate-600">
                      Your {showingType === "in-person" ? "in-person walkthrough" : "4K live video tour"} reservation for{" "}
                      <b>{showingDate}</b> during the <b>{showingSlot}</b> slot has been logged. Maya’s concierge desk will reach out shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSelectedListing(null)}
                      className="mt-4 rounded-lg bg-[#153e75] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white"
                    >
                      Close Window
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleConfirmTour}>
                    <div className="flex items-center justify-between border-b border-slate-200/70 pb-2 mb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#153e75]">
                        Schedule Private Showing
                      </span>
                      <span className="text-[0.68rem] text-slate-500">Zero Obligation</span>
                    </div>

                    {/* In-Person vs Video Toggle */}
                    <div className="grid grid-cols-2 gap-2 mb-3">
                      <button
                        type="button"
                        onClick={() => setShowingType("in-person")}
                        className={`py-2 text-xs font-bold rounded-md border transition ${
                          showingType === "in-person"
                            ? "border-[#153e75] bg-[#153e75] text-white shadow-sm"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        In-Person Walkthrough
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowingType("video")}
                        className={`py-2 text-xs font-bold rounded-md border transition ${
                          showingType === "video"
                            ? "border-[#153e75] bg-[#153e75] text-white shadow-sm"
                            : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        4K Live Video Tour
                      </button>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-[0.68rem] font-bold uppercase text-slate-600 block mb-1">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          value={showingDate}
                          onChange={(e) => setShowingDate(e.target.value)}
                          className="h-9 w-full rounded border border-slate-200 px-2 text-xs bg-white"
                        />
                      </div>

                      <div>
                        <label className="text-[0.68rem] font-bold uppercase text-slate-600 block mb-1">
                          Time Slot
                        </label>
                        <select
                          value={showingSlot}
                          onChange={(e) => setShowingSlot(e.target.value)}
                          className="h-9 w-full rounded border border-slate-200 px-2 text-xs bg-white"
                        >
                          <option>10:00 (Morning Light)</option>
                          <option>14:00 (Afternoon Light)</option>
                          <option>17:30 (Twilight Tour)</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-[0.68rem] font-bold uppercase text-slate-600 block mb-1">
                          Your Name
                        </label>
                        <input
                          required
                          value={tourName}
                          onChange={(e) => setTourName(e.target.value)}
                          placeholder="Your Name"
                          className="h-9 w-full rounded border border-slate-200 px-2 text-xs bg-white"
                        />
                      </div>

                      <div>
                        <label className="text-[0.68rem] font-bold uppercase text-slate-600 block mb-1">
                          Your Email / Mobile
                        </label>
                        <input
                          required
                          value={tourEmail}
                          onChange={(e) => setTourEmail(e.target.value)}
                          placeholder="Email or Mobile"
                          className="h-9 w-full rounded border border-slate-200 px-2 text-xs bg-white"
                        />
                      </div>
                    </div>

                    <div className="mt-4 flex gap-3">
                      <button
                        type="submit"
                        className="flex-1 rounded-lg bg-[#c5a069] py-2.5 text-xs font-black uppercase tracking-wider text-[#09111f] hover:bg-[#153e75] hover:text-white transition shadow"
                      >
                        Confirm Showing Reservation
                      </button>

                      <button
                        type="button"
                        onClick={() => loadListingIntoCalculator(selectedListing)}
                        className="rounded-lg border border-slate-300 bg-white px-3 py-2.5 text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
                        title="Model mortgage carries for this residence"
                      >
                        <Calculator className="h-4 w-4" />
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
export default SkylineRealtyGroup;
