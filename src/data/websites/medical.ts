import { imageUrl } from "../../assets/optimized";
import type { WebsiteDesign } from "../websites";
export const medicalWebsites: WebsiteDesign[] = [
  {
    id: "harbor-health-clinic",
    title: "Harbor Health Clinic",
    category: "Medical",
    style: "calm, trustworthy, accessible, patient-focused",
    shortDescription:
      "Modern primary care clinic with service clarity, provider trust, insurance guidance, and appointment booking",
    slug: "harbor-health-clinic",
    image: imageUrl("home/medical-preview.webp"),
    colors: {
      primary: "#0f766e",
      secondary: "#ccfbf1",
      accent: "#ef4444",
      dark: "#102522",
    },
    status: "completed",
  },
];
