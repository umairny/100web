import { imageUrl } from "../../assets/images";
import type { WebsiteDesign } from "../websites";
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
