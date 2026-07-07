import { imageUrl } from "../../assets/images";
import type { WebsiteDesign } from "../websites";
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

