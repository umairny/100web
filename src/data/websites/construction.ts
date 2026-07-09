import { imageUrl } from "../../assets/optimized";
import type { WebsiteDesign } from "../websites";
export const constructionWebsites: WebsiteDesign[] = [
  {
    id: "forgepoint-builders",
    title: "ForgePoint Builders",
    category: "Construction",
    style: "rugged, trustworthy, structured, project-proof focused",
    shortDescription:
      "General contractor homepage with project proof, service clarity, process steps, and estimate conversion",
    slug: "forgepoint-builders",
    image: imageUrl("home/construction-preview.webp"),
    colors: {
      primary: "#3f3f46",
      secondary: "#fef3c7",
      accent: "#d97706",
      dark: "#1f2428",
    },
    status: "completed",
  },
];
