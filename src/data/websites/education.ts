import { imageUrl } from "../../assets/images";
import type { WebsiteDesign } from "../websites";
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

