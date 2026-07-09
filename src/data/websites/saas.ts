import { imageUrl } from "../../assets/optimized";
import type { WebsiteDesign } from "../websites";
export const saasWebsites: WebsiteDesign[] = [
  {
    id: "flowpilot-crm",
    title: "FlowPilot CRM",
    category: "SaaS",
    style: "clean, product-led, trustworthy, conversion-focused",
    shortDescription:
      "CRM product homepage with workflow value, integrations, pricing, proof, and trial conversion",
    slug: "flowpilot-crm",
    image: imageUrl("home/saas-preview.webp"),
    colors: {
      primary: "#075985",
      secondary: "#e0f2fe",
      accent: "#14b8a6",
      dark: "#082f49",
    },
    status: "completed",
  },
];
