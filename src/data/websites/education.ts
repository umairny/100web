import brightBridgeImage from "../../assets/images/education/brightbridge.png";
import atlasCollegeImage from "../../assets/images/education/atlascollege.png";
import codeNestImage from "../../assets/images/education/codenest.png";
import { imageUrl } from "../../assets/optimized";
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
    image: imageUrl("home/education-preview.webp"),
    colors: {
      primary: "#3730a3",
      secondary: "#e0e7ff",
      accent: "#22c55e",
      dark: "#111827",
    },
    status: "completed",
  },
  {
    id: "codenest-kids",
    title: "CodeNest Kids",
    category: "Education",
    style: "playful, colorful, project-based, parent-friendly",
    shortDescription:
      "Coding academy homepage for children with program paths, curriculum milestones, mentors, schedules, and free-trial conversion.",
    slug: "codenest-kids",
    image: codeNestImage,
    colors: {
      primary: "#071b49",
      secondary: "#18bdae",
      accent: "#ffd21d",
      dark: "#7651e6",
    },
    status: "completed",
  },
  {
    id: "brightbridge-academy",
    title: "BrightBridge Academy",
    category: "Education",
    style: "traditional, trusted, academic, admissions-focused",
    shortDescription:
      "Private school admissions homepage with academic pathways, faculty, outcomes, student life, and a guided enrollment journey",
    slug: "brightbridge-academy",
    image: brightBridgeImage,
    colors: {
      primary: "#06284d",
      secondary: "#fbf7ef",
      accent: "#c69a3f",
      dark: "#0d4938",
    },
    status: "completed",
  },
  {
    id: "atlas-college-counseling",
    title: "Atlas College Counseling",
    category: "Education",
    style: "calm, strategic, personal, outcomes-focused",
    shortDescription:
      "College counseling homepage with personalized roadmaps, essay support, counselor trust, outcomes, and enrollment guidance",
    slug: "atlas-college-counseling",
    image: atlasCollegeImage,
    colors: {
      primary: "#032647",
      secondary: "#fbfaf7",
      accent: "#c89b45",
      dark: "#607867",
    },
    status: "completed",
  },
  {
    id: "exam-edge-prep",
    title: "Exam Edge Prep",
    category: "Education",
    style: "focused, structured, results-driven, exam-prep focused",
    shortDescription:
      "Exam preparation homepage with course offerings, study plans, tutor trust, and enrollment conversion",
    slug: "exam-edge-prep",
    image: imageUrl("home/education-preview.png"),
    colors: {
      primary: "#1a202c",
      secondary: "#edf2f7",
      accent: "#38b2ac",
      dark: "#2d3748",
    },
    status: "completed",
  },
  {
    id: "fluentpath-languages",
    title: "FluentPath Languages",
    category: "Education",
    style: "vibrant, engaging, immersive, language-learning focused",
    shortDescription:
      "Language learning homepage with course offerings, immersive experiences, tutor trust, and enrollment conversion",
    slug: "fluentpath-languages",
    image: imageUrl("home/education-preview.png"),
    colors: {
      primary: "#2c5282",
      secondary: "#bee3f8",
      accent: "#d69e2e",
      dark: "#1a365d",
    },
    status: "completed",
  },
];
