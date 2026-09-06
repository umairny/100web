import brightBridgeImage from "../../assets/optimized/education/brightbridge.webp";
import atlasCollegeImage from "../../assets/optimized/education/atlascollege.webp";
import codeNestImage from "../../assets/optimized/education/codenest.webp";
import examEdgeImage from "../../assets/optimized/education/examedge.webp";
import fluentPathImage from "../../assets/optimized/education/fluentpath.webp";
import tutorLoopImage from "../../assets/optimized/education/tutorloop.webp";
import skillForgeImage from "../../assets/optimized/education/skillforge.webp";
import scholarSpringImage from "../../assets/optimized/education/scholarspring.webp";
import proTrackImage from "../../assets/optimized/education/protrack.webp";
import learnSphereImage from "../../assets/optimized/education/leansphere.webp";
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
    image: learnSphereImage,
    colors: {
      primary: "#2563eb",
      secondary: "#eff6ff",
      accent: "#10b981",
      dark: "#0b1329",
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
    image: examEdgeImage,
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
    image: fluentPathImage,
    colors: {
      primary: "#2c5282",
      secondary: "#bee3f8",
      accent: "#d69e2e",
      dark: "#1a365d",
    },
    status: "completed",
  },
  {
    id: "tutorloop",
    title: "TutorLoop",
    category: "Education",
    style: "trusted, structured, goal-oriented, marketplace-focused",
    shortDescription:
      "A trusted marketplace that helps families compare tutors, book sessions, and track learning goals.",
    slug: "tutorloop",
    image: tutorLoopImage,
    colors: {
      primary: "#064e3b",
      secondary: "#ecfdf5",
      accent: "#f59e0b",
      dark: "#062319",
    },
    status: "completed",
  },
  {
    id: "skillforge",
    title: "SkillForge",
    category: "Education",
    style: "practical, instructor-led, career-focused, high-impact",
    shortDescription:
      "Practical, instructor-led workshops focused on skills learners can apply immediately at work.",
    slug: "skillforge",
    image: skillForgeImage,
    colors: {
      primary: "#f97316",
      secondary: "#fff7ed",
      accent: "#0284c7",
      dark: "#0a0f1d",
    },
    status: "completed",
  },
  {
    id: "scholarspring",
    title: "ScholarSpring",
    category: "Education",
    style: "warm, nurturing, playful, family-centered",
    shortDescription:
      "A warm preschool enrollment experience built around play, safety, routines, and family trust.",
    slug: "scholarspring",
    image: scholarSpringImage,
    colors: {
      primary: "#fb7185",
      secondary: "#f0fdf4",
      accent: "#f59e0b",
      dark: "#0f172a",
    },
    status: "completed",
  },
  {
    id: "protrack",
    title: "ProTrack Trades",
    category: "Education",
    style: "industrial, hands-on, credentialed, job-focused",
    shortDescription:
      "A direct enrollment experience for practical training, certifications, apprenticeships, and job placement.",
    slug: "protrack",
    image: proTrackImage,
    colors: {
      primary: "#f59e0b",
      secondary: "#0f172a",
      accent: "#fbbf24",
      dark: "#080d1a",
    },
    status: "completed",
  },
];
