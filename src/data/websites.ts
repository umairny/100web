export type WebsiteCategory = 
  | 'Restaurant'
  | 'Beauty'
  | 'Real Estate'
  | 'Fitness'
  | 'Medical'
  | 'Construction'
  | 'Education'
  | 'E-commerce'
  | 'Portfolio'
  | 'SaaS'

export type WebsiteStatus = 'completed' | 'planned' | 'in-progress'

export interface WebsiteDesign {
  id: string
  title: string
  category: WebsiteCategory
  style: string
  shortDescription: string
  slug: string
  colors: {
    primary: string
    secondary: string
    accent: string
    dark: string
  }
  status: WebsiteStatus
}

export interface CategoryInfo {
  name: WebsiteCategory
  description: string
  icon: string
  color: string
}

export const categories: CategoryInfo[] = [
  {
    name: 'Restaurant',
    description: 'Coffee shops, cafes, restaurants, and dining experiences',
    icon: '🍽️',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Beauty',
    description: 'Salons, spas, cosmetics, and beauty services',
    icon: '💄',
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'Real Estate',
    description: 'Property agents, real estate agencies, and developers',
    icon: '🏠',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Fitness',
    description: 'Gyms, personal trainers, wellness centers',
    icon: '💪',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Medical',
    description: 'Clinics, hospitals, doctors, and health services',
    icon: '⚕️',
    color: 'from-red-500 to-pink-500',
  },
  {
    name: 'Construction',
    description: 'Contractors, builders, and construction companies',
    icon: '🏗️',
    color: 'from-amber-600 to-yellow-600',
  },
  {
    name: 'Education',
    description: 'Schools, courses, tutoring, and online learning',
    icon: '📚',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    name: 'E-commerce',
    description: 'Online stores, marketplaces, and retail shops',
    icon: '🛍️',
    color: 'from-violet-500 to-fuchsia-500',
  },
  {
    name: 'Portfolio',
    description: 'Creative portfolios, freelancers, and agencies',
    icon: '✨',
    color: 'from-slate-600 to-gray-600',
  },
  {
    name: 'SaaS',
    description: 'Software services, apps, and digital platforms',
    icon: '💻',
    color: 'from-sky-500 to-blue-500',
  },
]

export const restaurantWebsites: WebsiteDesign[] = [
  {
    id: 'brewnest-coffee',
    title: 'BrewNest Coffee',
    category: 'Restaurant',
    style: 'warm, premium, friendly, minimal',
    shortDescription: 'Artisan coffee roastery with a cozy neighborhood vibe',
    slug: 'brewnest-coffee',
    colors: {
      primary: '#8b6f52',
      secondary: '#f5f0e8',
      accent: '#d4af37',
      dark: '#3d2f23',
    },
    status: 'completed',
  },
  {
    id: 'urbanbite-kitchen',
    title: 'UrbanBite Kitchen',
    category: 'Restaurant',
    style: 'bold, urban, energetic, modern',
    shortDescription: 'Modern casual restaurant for city dining and fresh signature plates',
    slug: 'urbanbite-kitchen',
    colors: {
      primary: '#262626',
      secondary: '#f8f5ef',
      accent: '#ef3b2d',
      dark: '#111111',
    },
    status: 'completed',
  },
  {
    id: 'golden-crust-bakery',
    title: 'Golden Crust Bakery',
    category: 'Restaurant',
    style: 'warm, handcrafted, cozy, premium',
    shortDescription: 'Artisan bakery with fresh bread, pastries, and morning specials',
    slug: 'golden-crust-bakery',
    colors: {
      primary: '#d99a22',
      secondary: '#fff7df',
      accent: '#6f3f22',
      dark: '#3a2418',
    },
    status: 'completed',
  },
  {
    id: 'spiceroute-grill',
    title: 'SpiceRoute Grill',
    category: 'Restaurant',
    style: 'rich, flavorful, cultural, modern',
    shortDescription: 'Indian-Pakistani fusion grill with bold spice and premium platters',
    slug: 'spiceroute-grill',
    colors: {
      primary: '#8f1d1b',
      secondary: '#fff4dd',
      accent: '#f4a11a',
      dark: '#1f1b18',
    },
    status: 'completed',
  },
  {
    id: 'luna-pizza-house',
    title: 'Luna Pizza House',
    category: 'Restaurant',
    style: 'playful, modern Italian, family-friendly',
    shortDescription: 'Handmade pizza restaurant with fresh ingredients and casual family dining',
    slug: 'luna-pizza-house',
    colors: {
      primary: '#c92a22',
      secondary: '#fff7e8',
      accent: '#2f8f46',
      dark: '#24211d',
    },
    status: 'completed',
  },
  {
    id: 'freshbowl-cafe',
    title: 'FreshBowl Cafe',
    category: 'Restaurant',
    style: 'clean, fresh, natural, modern',
    shortDescription: 'Healthy bowl cafe with salads, smoothie bowls, and wellness meals',
    slug: 'freshbowl-cafe',
    colors: {
      primary: '#2f8f46',
      secondary: '#fbf7ed',
      accent: '#9fbe5a',
      dark: '#26332a',
    },
    status: 'completed',
  },
  {
    id: 'ember-steakhouse',
    title: 'Ember Steakhouse',
    category: 'Restaurant',
    style: 'luxury, dark, elegant, bold',
    shortDescription: 'Premium steakhouse with grilled cuts, wine, and evening private dining',
    slug: 'ember-steakhouse',
    colors: {
      primary: '#0f0f10',
      secondary: '#f4ead7',
      accent: '#e36a2c',
      dark: '#26211d',
    },
    status: 'completed',
  },
  {
    id: 'morningleaf-tea',
    title: 'MorningLeaf Tea',
    category: 'Restaurant',
    style: 'zen, calm, elegant, serene',
    shortDescription: 'Premium tea house with meditation lounge',
    slug: 'morningleaf-tea',
    colors: {
      primary: '#047857',
      secondary: '#f0fdf4',
      accent: '#fbbf24',
      dark: '#064e3b',
    },
    status: 'planned',
  },
  {
    id: 'burgercraft',
    title: 'BurgerCraft',
    category: 'Restaurant',
    style: 'casual, fun, retro, approachable',
    shortDescription: 'Gourmet burger joint with artisanal craft sodas',
    slug: 'burgercraft',
    colors: {
      primary: '#dc2626',
      secondary: '#fef2f2',
      accent: '#fbbf24',
      dark: '#7f1d1d',
    },
    status: 'planned',
  },
  {
    id: 'oceanplate-seafood',
    title: 'OceanPlate Seafood',
    category: 'Restaurant',
    style: 'coastal, fresh, upscale, maritime',
    shortDescription: 'Fresh seafood restaurant with ocean views',
    slug: 'oceanplate-seafood',
    colors: {
      primary: '#0369a1',
      secondary: '#f0f9ff',
      accent: '#0ea5e9',
      dark: '#082f49',
    },
    status: 'planned',
  },
]

export const allWebsites: WebsiteDesign[] = [
  ...restaurantWebsites,
  // Other categories will be added later
]

export function getWebsitesByCategory(category: WebsiteCategory): WebsiteDesign[] {
  return allWebsites.filter((website) => website.category === category)
}

export function getWebsiteBySlug(category: string, slug: string): WebsiteDesign | undefined {
  return allWebsites.find((website) => website.category.toLowerCase() === category.toLowerCase() && website.slug === slug)
}
