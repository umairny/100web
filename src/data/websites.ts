import { imageUrl } from "../assets/images";

export type WebsiteCategory =
  | "Restaurant"
  | "Beauty"
  | "Real Estate"
  | "Fitness"
  | "Medical"
  | "Construction"
  | "Education"
  | "E-commerce"
  | "Portfolio"
  | "SaaS";

export type WebsiteStatus =
  | "completed"
  | "live"
  | "planned"
  | "in-progress"
  | "coming-soon";

export interface WebsiteDesign {
  id: string;
  title: string;
  category: WebsiteCategory;
  style: string;
  shortDescription: string;
  slug: string;
  image?: string;
  marketLabel?: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    dark: string;
  };
  status: WebsiteStatus;
}

export interface CategoryInfo {
  name: WebsiteCategory;
  description: string;
  icon: string;
  color: string;
  image?: string;
  href?: string;
}

export const categories: CategoryInfo[] = [
  {
    name: "Restaurant",
    description: "Coffee shops, cafes, restaurants, and dining experiences",
    icon: "🍽️",
    color: "from-orange-500 to-red-500",
    image: imageUrl("home/restaurant-preview.png"),
    href: "/restaurant",
  },
  {
    name: "Beauty",
    description: "Salons, spas, cosmetics, and beauty services",
    icon: "💄",
    color: "from-pink-500 to-rose-500",
    image: imageUrl("home/beauty-preview.png"),
    href: "/beauty",
  },
  {
    name: "Real Estate",
    description: "Property agents, real estate agencies, and developers",
    icon: "\uD83C\uDFE0",
    color: "from-blue-500 to-cyan-500",
    image: imageUrl("home/real-estate-preview.png"),
    href: "/real-estate",
  },
  {
    name: "Fitness",
    description: "Gyms, personal trainers, wellness centers",
    icon: "\uD83D\uDCAA",
    color: "from-green-500 to-emerald-500",
    image: imageUrl("home/fitness-preview.png"),
    href: "/fitness",
  },
  {
    name: "Medical",
    description: "Clinics, hospitals, doctors, and health services",
    icon: "⚕️",
    color: "from-red-500 to-pink-500",
    image: imageUrl("home/medical-preview.png"),
    href: "/medical",
  },
  {
    name: "Construction",
    description: "Contractors, builders, and construction companies",
    icon: "🏗️",
    color: "from-amber-600 to-yellow-600",
    image: imageUrl("home/construction-preview.png"),
    href: "/construction",
  },
  {
    name: "Education",
    description: "Schools, courses, tutoring, and online learning",
    icon: "📚",
    color: "from-indigo-500 to-purple-500",
    image: imageUrl("home/education-preview.png"),
    href: "/education",
  },
  {
    name: "E-commerce",
    description: "Online stores, marketplaces, and retail shops",
    icon: "🛍️",
    color: "from-violet-500 to-fuchsia-500",
    image: imageUrl("home/ecommerce-preview.png"),
    href: "/e-commerce",
  },
  {
    name: "Portfolio",
    description: "Creative portfolios, freelancers, and agencies",
    icon: "✨",
    color: "from-slate-600 to-gray-600",
    image: imageUrl("home/portfolio-preview.png"),
    href: "/portfolio",
  },
  {
    name: "SaaS",
    description: "Software services, apps, and digital platforms",
    icon: "💻",
    color: "from-sky-500 to-blue-500",
    image: imageUrl("home/saas-preview.png"),
    href: "/saas",
  },
];

export const restaurantWebsites: WebsiteDesign[] = [
  {
    id: "brewnest-coffee",
    title: "BrewNest Coffee",
    category: "Restaurant",
    style: "warm, premium, friendly, minimal",
    shortDescription: "Artisan coffee roastery with a cozy neighborhood vibe",
    slug: "brewnest-coffee",
    image: imageUrl("restaurent/brewnest-coffee-card.png"),
    colors: {
      primary: "#8b6f52",
      secondary: "#f5f0e8",
      accent: "#d4af37",
      dark: "#3d2f23",
    },
    status: "completed",
  },
  {
    id: "urbanbite-kitchen",
    title: "UrbanBite Kitchen",
    category: "Restaurant",
    style: "bold, urban, energetic, modern",
    shortDescription:
      "Modern casual restaurant for city dining and fresh signature plates",
    slug: "urbanbite-kitchen",
    image: imageUrl("restaurent/urbanbite-kitchen-card.png"),
    colors: {
      primary: "#262626",
      secondary: "#f8f5ef",
      accent: "#ef3b2d",
      dark: "#111111",
    },
    status: "completed",
  },
  {
    id: "golden-crust-bakery",
    title: "Golden Crust Bakery",
    category: "Restaurant",
    style: "warm, handcrafted, cozy, premium",
    shortDescription:
      "Artisan bakery with fresh bread, pastries, and morning specials",
    slug: "golden-crust-bakery",
    image: imageUrl("restaurent/golden-crust-bakery-card.png"),
    colors: {
      primary: "#d99a22",
      secondary: "#fff7df",
      accent: "#6f3f22",
      dark: "#3a2418",
    },
    status: "completed",
  },
  {
    id: "spiceroute-grill",
    title: "SpiceRoute Grill",
    category: "Restaurant",
    style: "rich, flavorful, cultural, modern",
    shortDescription:
      "Indian-Pakistani fusion grill with bold spice and premium platters",
    slug: "spiceroute-grill",
    image: imageUrl("restaurent/spiceroute-grill-card.png"),
    colors: {
      primary: "#8f1d1b",
      secondary: "#fff4dd",
      accent: "#f4a11a",
      dark: "#1f1b18",
    },
    status: "completed",
  },
  {
    id: "luna-pizza-house",
    title: "Luna Pizza House",
    category: "Restaurant",
    style: "playful, modern Italian, family-friendly",
    shortDescription:
      "Handmade pizza restaurant with fresh ingredients and casual family dining",
    slug: "luna-pizza-house",
    image: imageUrl("restaurent/luna-pizza-house-card.png"),
    colors: {
      primary: "#c92a22",
      secondary: "#fff7e8",
      accent: "#2f8f46",
      dark: "#24211d",
    },
    status: "completed",
  },
  {
    id: "freshbowl-cafe",
    title: "FreshBowl Cafe",
    category: "Restaurant",
    style: "clean, fresh, natural, modern",
    shortDescription:
      "Healthy bowl cafe with salads, smoothie bowls, and wellness meals",
    slug: "freshbowl-cafe",
    image: imageUrl("restaurent/freshbowl-cafe-card.png"),
    colors: {
      primary: "#2f8f46",
      secondary: "#fbf7ed",
      accent: "#9fbe5a",
      dark: "#26332a",
    },
    status: "completed",
  },
  {
    id: "ember-steakhouse",
    title: "Ember Steakhouse",
    category: "Restaurant",
    style: "luxury, dark, elegant, bold",
    shortDescription:
      "Premium steakhouse with grilled cuts, wine, and evening private dining",
    slug: "ember-steakhouse",
    image: imageUrl("restaurent/ember-steakhouse-card.png"),
    colors: {
      primary: "#0f0f10",
      secondary: "#f4ead7",
      accent: "#e36a2c",
      dark: "#26211d",
    },
    status: "completed",
  },
  {
    id: "morningleaf-tea",
    title: "MorningLeaf Tea",
    category: "Restaurant",
    style: "calm, natural, elegant, wellness-focused",
    shortDescription:
      "Peaceful tea house with herbal blends, quiet rituals, and mindful cafe moments",
    slug: "morningleaf-tea",
    image: imageUrl("restaurent/morning-leaf-tea.png"),
    colors: {
      primary: "#8fa37a",
      secondary: "#fbf7ea",
      accent: "#c0a15a",
      dark: "#4b3d2f",
    },
    status: "completed",
  },
  {
    id: "burgercraft",
    title: "Burger Craft",
    category: "Restaurant",
    style: "bold, fun, modern, energetic",
    shortDescription:
      "Modern handmade burger restaurant with craft stacks, fries, sauces, and shakes",
    slug: "burgercraft",
    image: imageUrl("restaurent/burger-craft.png"),
    colors: {
      primary: "#f3b53f",
      secondary: "#fff3d7",
      accent: "#d92d20",
      dark: "#202020",
    },
    status: "completed",
  },
  {
    id: "oceanplate-seafood",
    title: "OceanPlate Seafood",
    category: "Restaurant",
    style: "fresh, coastal, premium, clean",
    shortDescription:
      "Coastal seafood restaurant with fresh catch, premium plates, and relaxed dining",
    slug: "oceanplate-seafood",
    image: imageUrl("restaurent/oceanplate-seafood.png"),
    colors: {
      primary: "#075985",
      secondary: "#f4ead5",
      accent: "#39b6c8",
      dark: "#063047",
    },
    status: "completed",
  },
];

export const beautyWebsites: WebsiteDesign[] = [
  {
    id: "glowhaus-salon",
    title: "GlowHaus Salon",
    category: "Beauty",
    style: "stylish, modern, elegant, social-media friendly",
    shortDescription:
      "Modern hair salon with premium styling, confident beauty, and clean branding",
    slug: "glowhaus-salon",
    image: imageUrl("beauty/glowhaus-card.png"),
    colors: {
      primary: "#f5b6c8",
      secondary: "#fbf4ef",
      accent: "#b76e79",
      dark: "#2b2b2d",
    },
    status: "completed",
  },
  {
    id: "luxe-nail-studio",
    title: "Luxe Nail Studio",
    category: "Beauty",
    style: "luxury, feminine, clean, polished",
    shortDescription:
      "Elegant nail studio for manicures, nail art, and luxury self-care",
    slug: "luxe-nail-studio",
    image: imageUrl("beauty/luxe-card.png"),
    colors: {
      primary: "#e9c7c4",
      secondary: "#fffdf9",
      accent: "#d7b56d",
      dark: "#191919",
    },
    status: "completed",
  },
  {
    id: "serenity-spa",
    title: "Serenity Spa",
    category: "Beauty",
    style: "calm, peaceful, natural, relaxing",
    shortDescription:
      "Spa and massage wellness retreat with calming treatments and natural textures",
    slug: "serenity-spa",
    image: imageUrl("beauty/serenity-card.png"),
    colors: {
      primary: "#8fa37a",
      secondary: "#fbf7ea",
      accent: "#c0a15a",
      dark: "#5f4d3d",
    },
    status: "completed",
  },
  {
    id: "blush-beauty-bar",
    title: "Blush Beauty Bar",
    category: "Beauty",
    style: "bold, glam, trendy, youthful",
    shortDescription:
      "Makeup and beauty bar for glam sessions, events, and social-ready looks",
    slug: "blush-beauty-bar",
    image: imageUrl("beauty/blush-card.png"),
    colors: {
      primary: "#ff3d9a",
      secondary: "#fff0f6",
      accent: "#c9c9d1",
      dark: "#111111",
    },
    status: "completed",
  },
  {
    id: "velvet-skin-clinic",
    title: "Velvet Skin Clinic",
    category: "Beauty",
    style: "clinical, soft, premium, refined",
    shortDescription:
      "Skincare clinic for facials, treatments, and confident glowing skin",
    slug: "velvet-skin-clinic",
    image: imageUrl("beauty/velvet-card.png"),
    colors: {
      primary: "#b98f8f",
      secondary: "#fff7f5",
      accent: "#e8c7bb",
      dark: "#3d3030",
    },
    status: "completed",
  },
  {
    id: "crown-comb-barber",
    title: "Crown & Comb Barber",
    category: "Beauty",
    style: "classic, sharp, masculine, modern",
    shortDescription:
      "Barber shop concept for polished grooming, chair booking, and confident style",
    slug: "crown-comb-barber",
    colors: {
      primary: "#222222",
      secondary: "#f4ead8",
      accent: "#b98b43",
      dark: "#0f0f0f",
    },
    image: imageUrl("beauty/crownandcomb-card.png"),
    status: "completed",
  },
  {
    id: "pureglow-aesthetics",
    title: "PureGlow Aesthetics",
    category: "Beauty",
    style: "minimal, clean, soft, expert",
    shortDescription:
      "Aesthetic care concept for injectables, glow treatments, and skin confidence",
    slug: "pureglow-aesthetics",
    image: imageUrl("beauty/pureglow-card.png"),
    colors: {
      primary: "#d7b9a7",
      secondary: "#fbfaf7",
      accent: "#9fb8ad",
      dark: "#343434",
    },
    status: "completed",
  },
  {
    id: "bloom-bridal-studio",
    title: "Bloom Bridal Studio",
    category: "Beauty",
    style: "romantic, editorial, soft, premium",
    shortDescription:
      "Bridal beauty studio for hair, makeup, trials, and wedding-day styling",
    slug: "bloom-bridal-studio",
    image: imageUrl("beauty/bloom-card.png"),
    colors: {
      primary: "#e8aeb7",
      secondary: "#fff8f3",
      accent: "#bfa46b",
      dark: "#4a3b3f",
    },
    status: "completed",
  },
  {
    id: "silk-style-hair",
    title: "Silk & Style Hair",
    category: "Beauty",
    style: "sleek, fashionable, polished, modern",
    shortDescription:
      "Hair styling concept for color, blowouts, treatments, and trend-forward cuts",
    slug: "silk-style-hair",
    image: imageUrl("beauty/silkstyle-card.png"),
    colors: {
      primary: "#7a5c65",
      secondary: "#fbf3f0",
      accent: "#d9a7b0",
      dark: "#2b2024",
    },
    status: "completed",
  },
  {
    id: "aura-wellness-spa",
    title: "Aura Wellness Spa",
    category: "Beauty",
    style: "holistic, serene, premium, restorative",
    shortDescription:
      "Wellness spa concept for body treatments, rituals, and restorative care",
    slug: "aura-wellness-spa",
    image: imageUrl("beauty/aura-card.png"),
    colors: {
      primary: "#9c8f72",
      secondary: "#f7f1e6",
      accent: "#b8c7a3",
      dark: "#4a4034",
    },
    status: "completed",
  },
];

export const realEstateWebsites: WebsiteDesign[] = [
  {
    id: "skyline-realty-group",
    title: "Skyline Realty Group",
    category: "Real Estate",
    style: "premium, trustworthy, editorial, city-focused",
    shortDescription:
      "Modern real estate agency for curated listings, seller strategy, and neighborhood confidence",
    slug: "skyline-realty-group",
    marketLabel: "Urban residential",
    image: imageUrl("home/real-estate-preview.png"),
    colors: {
      primary: "#153e75",
      secondary: "#eff6ff",
      accent: "#f59e0b",
      dark: "#0f172a",
    },
    status: "completed",
  },
  {
    id: "harborkey-homes",
    title: "HarborKey Homes",
    category: "Real Estate",
    style: "airy, coastal, welcoming, family-focused",
    shortDescription:
      "Coastal and waterfront homes presented around family life, local knowledge, and confident moves",
    slug: "harborkey-homes",
    marketLabel: "Coastal homes",
    image: imageUrl("realestate/harborkey/hero.png"),
    colors: { primary: "#2f6f8f", secondary: "#f4ead8", accent: "#7fc8d8", dark: "#17384d" },
    status: "completed",
  },
  {
    id: "apex-commercial-realty",
    title: "Apex Commercial Realty",
    category: "Real Estate",
    style: "authoritative, structured, modern, investment-led",
    shortDescription:
      "Commercial brokerage for office, retail, leasing, and investment opportunities with clear market intelligence",
    slug: "apex-commercial-realty",
    marketLabel: "Commercial property",
    image: imageUrl("realestate/apex/hero.png"),
    colors: { primary: "#1C2736", secondary: "#F4F6F8", accent: "#7A2948", dark: "#101722" },
    status: "completed",
  },
  {
    id: "nestpath-mortgage",
    title: "NestPath Mortgage",
    category: "Real Estate",
    style: "friendly, reassuring, clear, guidance-focused",
    shortDescription:
      "Mortgage guidance for first-time buyers, refinancing, and practical paths to home ownership",
    slug: "nestpath-mortgage",
    marketLabel: "Mortgage guidance",
    image: imageUrl("realestate/nestpath/hero.png"),
    colors: { primary: "#197D7A", secondary: "#F4F1EA", accent: "#E0AF45", dark: "#0E3D3F" },
    status: "completed",
  },
  {
    id: "cedar-stone-estates",
    title: "Cedar & Stone Estates",
    category: "Real Estate",
    style: "natural, refined, private, heritage-inspired",
    shortDescription:
      "Rural estates and luxury acreage positioned through privacy, craftsmanship, and lasting value",
    slug: "cedar-stone-estates",
    marketLabel: "Rural luxury",
    image: imageUrl("realestate/cedar-stone/hero.png"),
    colors: { primary: "#4C6252", secondary: "#E9E4D8", accent: "#A68E72", dark: "#1F2D28" },
    status: "completed",
  },
  {
    id: "metroloft-rentals",
    title: "MetroLoft Rentals",
    category: "Real Estate",
    style: "urban, energetic, convenient, design-forward",
    shortDescription:
      "Modern apartment discovery and leasing built around city access, amenities, and flexible living",
    slug: "metroloft-rentals",
    marketLabel: "Urban rentals",
    colors: { primary: "#4f46a5", secondary: "#eef0f7", accent: "#ef7c72", dark: "#24233b" },
    status: "coming-soon",
  },
  {
    id: "foundry-property-group",
    title: "Foundry Property Group",
    category: "Real Estate",
    style: "bold, architectural, ambitious, investor-ready",
    shortDescription:
      "Developer portfolio for landmark residential projects, new communities, and investment opportunities",
    slug: "foundry-property-group",
    marketLabel: "Property development",
    colors: { primary: "#41444a", secondary: "#ece9e3", accent: "#d96b32", dark: "#1d2025" },
    status: "coming-soon",
  },
  {
    id: "suncrest-vacation-villas",
    title: "Suncrest Vacation Villas",
    category: "Real Estate",
    style: "sunlit, aspirational, relaxed, destination-led",
    shortDescription:
      "Holiday villas and resort investments framed around memorable stays, lifestyle, and income potential",
    slug: "suncrest-vacation-villas",
    marketLabel: "Vacation property",
    colors: { primary: "#16899a", secondary: "#fff6df", accent: "#e6b84f", dark: "#164450" },
    status: "coming-soon",
  },
  {
    id: "oakline-property-management",
    title: "Oakline Property Management",
    category: "Real Estate",
    style: "dependable, organized, calm, service-focused",
    shortDescription:
      "Property management for landlords and tenants with responsive service and transparent operations",
    slug: "oakline-property-management",
    marketLabel: "Property management",
    colors: { primary: "#3f6b52", secondary: "#eef1e8", accent: "#8da16f", dark: "#18334a" },
    status: "coming-soon",
  },
  {
    id: "keystart-realty",
    title: "KeyStart Realty",
    category: "Real Estate",
    style: "approachable, optimistic, simple, buyer-first",
    shortDescription:
      "A first-time buyer agency that turns unfamiliar decisions into a practical, encouraging home search",
    slug: "keystart-realty",
    marketLabel: "First-time buyers",
    colors: { primary: "#2767b1", secondary: "#f2f6fb", accent: "#f2c94c", dark: "#17324f" },
    status: "coming-soon",
  },
];
export const fitnessWebsites: WebsiteDesign[] = [
  {
    id: "pulseforge-fitness",
    title: "PulseForge Fitness",
    category: "Fitness",
    style: "high-energy, disciplined, modern, performance-focused",
    shortDescription:
      "Strength and conditioning gym with coaching, class schedules, transformation proof, and trial membership flow",
    slug: "pulseforge-fitness",
    image: imageUrl("home/fitness-preview.png"),
    colors: {
      primary: "#14532d",
      secondary: "#ecfdf5",
      accent: "#f97316",
      dark: "#111827",
    },
    status: "completed",
  },
];

export const medicalWebsites: WebsiteDesign[] = [
  {
    id: "harbor-health-clinic",
    title: "Harbor Health Clinic",
    category: "Medical",
    style: "calm, trustworthy, accessible, patient-focused",
    shortDescription:
      "Modern primary care clinic with service clarity, provider trust, insurance guidance, and appointment booking",
    slug: "harbor-health-clinic",
    image: imageUrl("home/medical-preview.png"),
    colors: {
      primary: "#0f766e",
      secondary: "#ccfbf1",
      accent: "#ef4444",
      dark: "#102522",
    },
    status: "completed",
  },
];

export const constructionWebsites: WebsiteDesign[] = [
  {
    id: "forgepoint-builders",
    title: "ForgePoint Builders",
    category: "Construction",
    style: "rugged, trustworthy, structured, project-proof focused",
    shortDescription:
      "General contractor homepage with project proof, service clarity, process steps, and estimate conversion",
    slug: "forgepoint-builders",
    image: imageUrl("home/construction-preview.png"),
    colors: {
      primary: "#3f3f46",
      secondary: "#fef3c7",
      accent: "#d97706",
      dark: "#1f2428",
    },
    status: "completed",
  },
];

export const educationWebsites: WebsiteDesign[] = [
  {
    id: "learnsphere-academy",
    title: "LearnSphere Academy",
    category: "Education",
    style: "clear, encouraging, structured, student-outcome focused",
    shortDescription:
      "Online academy homepage with curriculum previews, mentor trust, student outcomes, and enrollment flow",
    slug: "learnsphere-academy",
    image: imageUrl("home/education-preview.png"),
    colors: {
      primary: "#3730a3",
      secondary: "#e0e7ff",
      accent: "#22c55e",
      dark: "#111827",
    },
    status: "completed",
  },
];

export const ecommerceWebsites: WebsiteDesign[] = [
  {
    id: "cartbloom-market",
    title: "CartBloom Market",
    category: "E-commerce",
    style: "polished, shoppable, conversion-focused, editorial retail",
    shortDescription:
      "Curated online store homepage with product discovery, bundle offers, reviews, and checkout momentum",
    slug: "cartbloom-market",
    image: imageUrl("home/ecommerce-preview.png"),
    colors: {
      primary: "#7c3aed",
      secondary: "#f3e8ff",
      accent: "#ec4899",
      dark: "#17111f",
    },
    status: "completed",
  },
];

export const portfolioWebsites: WebsiteDesign[] = [
  {
    id: "studio-vale-creative",
    title: "Studio Vale Creative",
    category: "Portfolio",
    style: "editorial, selective, confident, case-study driven",
    shortDescription:
      "Creative studio portfolio with selected work, service packaging, process clarity, and inquiry conversion",
    slug: "studio-vale-creative",
    image: imageUrl("home/portfolio-preview.png"),
    colors: {
      primary: "#111827",
      secondary: "#e5e7eb",
      accent: "#38bdf8",
      dark: "#0f172a",
    },
    status: "completed",
  },
];

export const saasWebsites: WebsiteDesign[] = [
  {
    id: "flowpilot-crm",
    title: "FlowPilot CRM",
    category: "SaaS",
    style: "clean, product-led, trustworthy, conversion-focused",
    shortDescription:
      "CRM product homepage with workflow value, integrations, pricing, proof, and trial conversion",
    slug: "flowpilot-crm",
    image: imageUrl("home/saas-preview.png"),
    colors: {
      primary: "#075985",
      secondary: "#e0f2fe",
      accent: "#14b8a6",
      dark: "#082f49",
    },
    status: "completed",
  },
];

export const allWebsites: WebsiteDesign[] = [
  ...restaurantWebsites,
  ...beautyWebsites,
  ...realEstateWebsites,
  ...fitnessWebsites,
  ...medicalWebsites,
  ...constructionWebsites,
  ...educationWebsites,
  ...ecommerceWebsites,
  ...portfolioWebsites,
  ...saasWebsites,
  // Other categories will be added later
];

export function getWebsitesByCategory(
  category: WebsiteCategory,
): WebsiteDesign[] {
  return allWebsites.filter((website) => website.category === category);
}

export function getWebsiteBySlug(
  category: string,
  slug: string,
): WebsiteDesign | undefined {
  return allWebsites.find(
    (website) =>
      website.category.toLowerCase() === category.toLowerCase() &&
      website.slug === slug,
  );
}

