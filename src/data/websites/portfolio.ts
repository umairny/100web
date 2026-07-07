import { imageUrl } from "../../assets/images";
import type { WebsiteDesign } from "../websites";
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

