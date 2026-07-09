import { imageUrl } from "../assets/optimized";
import { restaurantWebsites } from "./websites/restaurant";
import { beautyWebsites } from "./websites/beauty";
import { realEstateWebsites } from "./websites/real-estate";
import { fitnessWebsites } from "./websites/fitness";
import { medicalWebsites } from "./websites/medical";
import { constructionWebsites } from "./websites/construction";
import { educationWebsites } from "./websites/education";
import { ecommerceWebsites } from "./websites/ecommerce";
import { portfolioWebsites } from "./websites/portfolio";
import { saasWebsites } from "./websites/saas";

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
    image: imageUrl("home/restaurant-preview.webp"),
    href: "/restaurant",
  },
  {
    name: "Beauty",
    description: "Salons, spas, cosmetics, and beauty services",
    icon: "💄",
    color: "from-pink-500 to-rose-500",
    image: imageUrl("home/beauty-preview.webp"),
    href: "/beauty",
  },
  {
    name: "Real Estate",
    description: "Property agents, real estate agencies, and developers",
    icon: "\uD83C\uDFE0",
    color: "from-blue-500 to-cyan-500",
    image: imageUrl("home/real-estate-preview.webp"),
    href: "/real-estate",
  },
  {
    name: "Fitness",
    description: "Gyms, personal trainers, wellness centers",
    icon: "\uD83D\uDCAA",
    color: "from-green-500 to-emerald-500",
    image: imageUrl("home/fitness-preview.webp"),
    href: "/fitness",
  },
  {
    name: "Medical",
    description: "Clinics, hospitals, doctors, and health services",
    icon: "⚕️",
    color: "from-red-500 to-pink-500",
    image: imageUrl("home/medical-preview.webp"),
    href: "/medical",
  },
  {
    name: "Construction",
    description: "Contractors, builders, and construction companies",
    icon: "🏗️",
    color: "from-amber-600 to-yellow-600",
    image: imageUrl("home/construction-preview.webp"),
    href: "/construction",
  },
  {
    name: "Education",
    description: "Schools, courses, tutoring, and online learning",
    icon: "📚",
    color: "from-indigo-500 to-purple-500",
    image: imageUrl("home/education-preview.webp"),
    href: "/education",
  },
  {
    name: "E-commerce",
    description: "Online stores, marketplaces, and retail shops",
    icon: "🛍️",
    color: "from-violet-500 to-fuchsia-500",
    image: imageUrl("home/ecommerce-preview.webp"),
    href: "/e-commerce",
  },
  {
    name: "Portfolio",
    description: "Creative portfolios, freelancers, and agencies",
    icon: "✨",
    color: "from-slate-600 to-gray-600",
    image: imageUrl("home/portfolio-preview.webp"),
    href: "/portfolio",
  },
  {
    name: "SaaS",
    description: "Software services, apps, and digital platforms",
    icon: "💻",
    color: "from-sky-500 to-blue-500",
    image: imageUrl("home/saas-preview.webp"),
    href: "/saas",
  },
];

export { restaurantWebsites } from "./websites/restaurant";
export { beautyWebsites } from "./websites/beauty";
export { realEstateWebsites } from "./websites/real-estate";
export { fitnessWebsites } from "./websites/fitness";
export { medicalWebsites } from "./websites/medical";
export { constructionWebsites } from "./websites/construction";
export { educationWebsites } from "./websites/education";
export { ecommerceWebsites } from "./websites/ecommerce";
export { portfolioWebsites } from "./websites/portfolio";
export { saasWebsites } from "./websites/saas";
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
