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
    image: "/images/home/restaurant-preview.png",
    href: "/restaurant",
  },
  {
    name: "Beauty",
    description: "Salons, spas, cosmetics, and beauty services",
    icon: "💄",
    color: "from-pink-500 to-rose-500",
    image: "/images/home/beauty-preview.png",
    href: "/beauty",
  },
  {
    name: "Real Estate",
    description: "Property agents, real estate agencies, and developers",
    icon: "\uD83C\uDFE0",
    color: "from-blue-500 to-cyan-500",
    image: "/images/home/real-estate-preview.png",
    href: "/real-estate",
  },
  {
    name: "Fitness",
    description: "Gyms, personal trainers, wellness centers",
    icon: "\uD83D\uDCAA",
    color: "from-green-500 to-emerald-500",
    image: "/images/home/fitness-preview.png",
    href: "/fitness",
  },
  {
    name: "Medical",
    description: "Clinics, hospitals, doctors, and health services",
    icon: "⚕️",
    color: "from-red-500 to-pink-500",
    image: "/images/home/medical-preview.png",
    href: "/medical",
  },
  {
    name: "Construction",
    description: "Contractors, builders, and construction companies",
    icon: "🏗️",
    color: "from-amber-600 to-yellow-600",
    image: "/images/home/construction-preview.png",
    href: "/construction",
  },
  {
    name: "Education",
    description: "Schools, courses, tutoring, and online learning",
    icon: "📚",
    color: "from-indigo-500 to-purple-500",
    image: "/images/home/education-preview.png",
    href: "/education",
  },
  {
    name: "E-commerce",
    description: "Online stores, marketplaces, and retail shops",
    icon: "🛍️",
    color: "from-violet-500 to-fuchsia-500",
    image: "/images/home/ecommerce-preview.png",
    href: "/e-commerce",
  },
  {
    name: "Portfolio",
    description: "Creative portfolios, freelancers, and agencies",
    icon: "✨",
    color: "from-slate-600 to-gray-600",
    image: "/images/home/portfolio-preview.png",
    href: "/portfolio",
  },
  {
    name: "SaaS",
    description: "Software services, apps, and digital platforms",
    icon: "💻",
    color: "from-sky-500 to-blue-500",
    image: "/images/home/saas-preview.png",
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
    image: "/images/restaurent/brewnest-coffee-card.png",
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
    image: "/images/restaurent/urbanbite-kitchen-card.png",
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
    image: "/images/restaurent/golden-crust-bakery-card.png",
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
    image: "/images/restaurent/spiceroute-grill-card.png",
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
    image: "/images/restaurent/luna-pizza-house-card.png",
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
    image: "/images/restaurent/freshbowl-cafe-card.png",
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
    image: "/images/restaurent/ember-steakhouse-card.png",
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
    image: "/images/restaurent/morningleaf-tea/hero-tea.png",
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
    title: "BurgerCraft",
    category: "Restaurant",
    style: "bold, fun, modern, energetic",
    shortDescription:
      "Gourmet burger restaurant with handcrafted stacks and street-food energy",
    slug: "burgercraft",
    image: "/images/restaurent/burger-craft.png",
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
    image: "/images/restaurent/oceanplate-seafood.png",
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
    image: "/images/home/beauty-preview.png",
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
    title: "Blade & Hearth",
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
    image: "/images/beauty/crown-comb-barber-hero.png",
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
    colors: {
      primary: "#d7b9a7",
      secondary: "#fbfaf7",
      accent: "#9fb8ad",
      dark: "#343434",
    },
    status: "coming-soon",
  },
  {
    id: "bloom-bridal-studio",
    title: "Bloom Bridal Studio",
    category: "Beauty",
    style: "romantic, editorial, soft, premium",
    shortDescription:
      "Bridal beauty studio for hair, makeup, trials, and wedding-day styling",
    slug: "bloom-bridal-studio",
    colors: {
      primary: "#e8aeb7",
      secondary: "#fff8f3",
      accent: "#bfa46b",
      dark: "#4a3b3f",
    },
    status: "coming-soon",
  },
  {
    id: "silk-style-hair",
    title: "Silk & Style Hair",
    category: "Beauty",
    style: "sleek, fashionable, polished, modern",
    shortDescription:
      "Hair styling concept for color, blowouts, treatments, and trend-forward cuts",
    slug: "silk-style-hair",
    colors: {
      primary: "#7a5c65",
      secondary: "#fbf3f0",
      accent: "#d9a7b0",
      dark: "#2b2024",
    },
    status: "coming-soon",
  },
  {
    id: "aura-wellness-spa",
    title: "Aura Wellness Spa",
    category: "Beauty",
    style: "holistic, serene, premium, restorative",
    shortDescription:
      "Wellness spa concept for body treatments, rituals, and restorative care",
    slug: "aura-wellness-spa",
    colors: {
      primary: "#9c8f72",
      secondary: "#f7f1e6",
      accent: "#b8c7a3",
      dark: "#4a4034",
    },
    status: "coming-soon",
  },
];

export const realEstateWebsites: WebsiteDesign[] = [
  {
    id: 'skyline-realty-group',
    title: 'Skyline Realty Group',
    category: 'Real Estate',
    style: 'premium, trustworthy, editorial, city-focused',
    shortDescription: 'Modern real estate agency for curated listings, seller strategy, and neighborhood confidence',
    slug: 'skyline-realty-group',
    image: '/images/home/real-estate-preview.png',
    colors: {
      primary: '#153e75',
      secondary: '#eff6ff',
      accent: '#f59e0b',
      dark: '#0f172a',
    },
    status: 'completed',
  },
]

export const fitnessWebsites: WebsiteDesign[] = [
  {
    id: 'pulseforge-fitness',
    title: 'PulseForge Fitness',
    category: 'Fitness',
    style: 'high-energy, disciplined, modern, performance-focused',
    shortDescription: 'Strength and conditioning gym with coaching, class schedules, transformation proof, and trial membership flow',
    slug: 'pulseforge-fitness',
    image: '/images/home/fitness-preview.png',
    colors: {
      primary: '#14532d',
      secondary: '#ecfdf5',
      accent: '#f97316',
      dark: '#111827',
    },
    status: 'completed',
  },
]

export const medicalWebsites: WebsiteDesign[] = [
  {
    id: 'harbor-health-clinic',
    title: 'Harbor Health Clinic',
    category: 'Medical',
    style: 'calm, trustworthy, accessible, patient-focused',
    shortDescription: 'Modern primary care clinic with service clarity, provider trust, insurance guidance, and appointment booking',
    slug: 'harbor-health-clinic',
    image: '/images/home/medical-preview.png',
    colors: {
      primary: '#0f766e',
      secondary: '#ccfbf1',
      accent: '#ef4444',
      dark: '#102522',
    },
    status: 'completed',
  },
]

export const constructionWebsites: WebsiteDesign[] = [
  {
    id: 'forgepoint-builders',
    title: 'ForgePoint Builders',
    category: 'Construction',
    style: 'rugged, trustworthy, structured, project-proof focused',
    shortDescription: 'General contractor homepage with project proof, service clarity, process steps, and estimate conversion',
    slug: 'forgepoint-builders',
    image: '/images/home/construction-preview.png',
    colors: {
      primary: '#3f3f46',
      secondary: '#fef3c7',
      accent: '#d97706',
      dark: '#1f2428',
    },
    status: 'completed',
  },
]

export const educationWebsites: WebsiteDesign[] = [
  {
    id: 'learnsphere-academy',
    title: 'LearnSphere Academy',
    category: 'Education',
    style: 'clear, encouraging, structured, student-outcome focused',
    shortDescription: 'Online academy homepage with curriculum previews, mentor trust, student outcomes, and enrollment flow',
    slug: 'learnsphere-academy',
    image: '/images/home/education-preview.png',
    colors: {
      primary: '#3730a3',
      secondary: '#e0e7ff',
      accent: '#22c55e',
      dark: '#111827',
    },
    status: 'completed',
  },
]

export const ecommerceWebsites: WebsiteDesign[] = [
  {
    id: 'cartbloom-market',
    title: 'CartBloom Market',
    category: 'E-commerce',
    style: 'polished, shoppable, conversion-focused, editorial retail',
    shortDescription: 'Curated online store homepage with product discovery, bundle offers, reviews, and checkout momentum',
    slug: 'cartbloom-market',
    image: '/images/home/ecommerce-preview.png',
    colors: {
      primary: '#7c3aed',
      secondary: '#f3e8ff',
      accent: '#ec4899',
      dark: '#17111f',
    },
    status: 'completed',
  },
]

export const portfolioWebsites: WebsiteDesign[] = [
  {
    id: 'studio-vale-creative',
    title: 'Studio Vale Creative',
    category: 'Portfolio',
    style: 'editorial, selective, confident, case-study driven',
    shortDescription: 'Creative studio portfolio with selected work, service packaging, process clarity, and inquiry conversion',
    slug: 'studio-vale-creative',
    image: '/images/home/portfolio-preview.png',
    colors: {
      primary: '#111827',
      secondary: '#e5e7eb',
      accent: '#38bdf8',
      dark: '#0f172a',
    },
    status: 'completed',
  },
]

export const saasWebsites: WebsiteDesign[] = [
  {
    id: 'flowpilot-crm',
    title: 'FlowPilot CRM',
    category: 'SaaS',
    style: 'clean, product-led, trustworthy, conversion-focused',
    shortDescription: 'CRM product homepage with workflow value, integrations, pricing, proof, and trial conversion',
    slug: 'flowpilot-crm',
    image: '/images/home/saas-preview.png',
    colors: {
      primary: '#075985',
      secondary: '#e0f2fe',
      accent: '#14b8a6',
      dark: '#082f49',
    },
    status: 'completed',
  },
]

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

