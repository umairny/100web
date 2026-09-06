import React, { useState, useEffect } from "react";
import {
  AlertCircle,
  ArrowRight,
  ArrowUpRight,
  Award,
  BookOpen,
  Briefcase,
  Building,
  Calendar,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Clock,
  Clock3,
  Cog,
  Compass,
  FileCheck2,
  FileText,
  Flame,
  Globe,
  GraduationCap,
  Hammer,
  HardHat,
  Headphones,
  HeartHandshake,
  HelpCircle,
  Laptop,
  Layers,
  LineChart,
  Lock,
  Mail,
  MapPin,
  Menu,
  MessageSquare,
  Percent,
  Phone,
  PieChart,
  Play,
  RotateCcw,
  Search,
  Send,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  TrendingUp,
  Trophy,
  Truck,
  UserCheck,
  Users,
  Video,
  Wrench,
  X,
  Zap,
} from "lucide-react";
import "./ProTrackTrades.css";

// Photo Assets
import heroWelderImg from "../../assets/optimized/education/protrack/hero-welder.jpg";
import bannerWorkshopImg from "../../assets/optimized/education/protrack/banner-workshop.jpg";
import instructorLuisImg from "../../assets/optimized/education/protrack/instructor-luis.jpg";
import instructorJessicaImg from "../../assets/optimized/education/protrack/instructor-jessica.jpg";
import instructorDavidImg from "../../assets/optimized/education/protrack/instructor-david.jpg";
import instructorSarahImg from "../../assets/optimized/education/protrack/instructor-sarah.jpg";
import studentCarlosImg from "../../assets/optimized/education/protrack/student-carlos.jpg";
import studentJasmineImg from "../../assets/optimized/education/protrack/student-jasmine.jpg";
import studentBrandonImg from "../../assets/optimized/education/protrack/student-brandon.jpg";

// 6 Distinct Trade Program Images
import progElectricalImg from "../../assets/optimized/education/protrack/prog-electrical.jpg";
import progHvacImg from "../../assets/optimized/education/protrack/prog-hvac.webp";
import progWeldingImg from "../../assets/optimized/education/protrack/prog-welding.webp";
import progPlumbingImg from "../../assets/optimized/education/protrack/prog-plumbing.webp";
import progConstructionImg from "../../assets/optimized/education/protrack/prog-construction.webp";
import progIndustrialImg from "../../assets/optimized/education/protrack/prog-industrial.webp";

// ProTrack Hexagon Logo Icon
function ProTrackLogo({ size = 32 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 36 36" fill="none">
      <path
        d="M18 2L32 10.08V25.92L18 34L4 25.92V10.08L18 2Z"
        fill="#f59e0b"
        stroke="#fbbf24"
        strokeWidth="1.5"
      />
      <path
        d="M18 8L27 13.2V22.8L18 28L9 22.8V13.2L18 8Z"
        fill="#0a0f1d"
      />
      <path
        d="M14 18H22M18 14V22"
        stroke="#f59e0b"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Programs Dataset
const tradePrograms = [
  {
    id: "electrical",
    title: "ELECTRICAL TECHNICIAN",
    category: "Electrical Systems",
    desc: "Master residential and commercial wiring, electrical schematics, motor controls, and OSHA codes.",
    duration: "6 Months",
    level: "Beginner to Pro",
    nextStart: "Jun 2, 2025",
    img: progElectricalImg,
    certifications: ["OSHA 10-Hour", "NCCER Electrical Level 1 & 2", "Arc Flash Safety NFPA 70E"],
    startingWage: "$28 - $36 / hr",
    annualEst: "$68,000 - $82,000",
  },
  {
    id: "hvac",
    title: "HVAC SYSTEMS SPECIALIST",
    category: "Heating & Cooling",
    desc: "Diagnose, service, and install modern refrigeration cycles, heat pumps, VRF systems, and airflow diagnostics.",
    duration: "8 Months",
    level: "Beginner to Pro",
    nextStart: "Jun 2, 2025",
    img: progHvacImg,
    certifications: ["EPA Universal 608", "NATE Ready-to-Work", "R-410A / A2L Safety"],
    startingWage: "$30 - $38 / hr",
    annualEst: "$72,000 - $88,000",
  },
  {
    id: "welding",
    title: "WELDING & FABRICATION",
    category: "Structural & Pipe",
    desc: "Multi-process MIG, TIG, Stick, and Flux-Core welding with blueprint fabrication, joint design, and metallurgy.",
    duration: "6 Months",
    level: "All Levels",
    nextStart: "Jun 2, 2025",
    img: progWeldingImg,
    certifications: ["AWS D1.1 Structural Steel", "AWS D1.2 Aluminum", "ASME Section IX Pipe"],
    startingWage: "$29 - $42 / hr",
    annualEst: "$70,000 - $96,000",
  },
  {
    id: "plumbing",
    title: "PLUMBING FUNDAMENTALS",
    category: "Piping & Sanitation",
    desc: "Commercial piping, drainage systems, water heaters, backflow prevention, and residential rough-in inspection.",
    duration: "6 Months",
    level: "Beginner",
    nextStart: "Jun 16, 2025",
    img: progPlumbingImg,
    certifications: ["NCCER Plumbing Level 1", "Backflow Prevention Certified", "OSHA 10"],
    startingWage: "$27 - $35 / hr",
    annualEst: "$65,000 - $84,000",
  },
  {
    id: "construction",
    title: "CONSTRUCTION MANAGEMENT",
    category: "Site Operations",
    desc: "Project scheduling, cost estimation, blueprint reading, site safety audits, and subcontractor oversight.",
    duration: "8 Months",
    level: "Intermediate",
    nextStart: "Jun 16, 2025",
    img: progConstructionImg,
    certifications: ["OSHA 30-Hour Construction", "Procore Field Certified", "LEED Associate Prep"],
    startingWage: "$34 - $45 / hr",
    annualEst: "$82,000 - $105,000",
  },
  {
    id: "industrial",
    title: "INDUSTRIAL MAINTENANCE",
    category: "Hydraulics & Automation",
    desc: "Maintain automated lines, conveyor systems, Siemens/Allen-Bradley PLCs, 3-phase motors, and hydraulic pumps.",
    duration: "8 Months",
    level: "All Levels",
    nextStart: "Jun 9, 2025",
    img: progIndustrialImg,
    certifications: ["SMRP Certified Maintenance", "Allen-Bradley PLC Core", "NFPA 70E Arc Flash"],
    startingWage: "$32 - $44 / hr",
    annualEst: "$76,000 - $102,000",
  },
];

// Interactive Wage Estimator Dataset
const wageEstimatorData: Record<
  string,
  {
    title: string;
    description: string;
    apprentice: { hourly: string; annual: string; experience: string };
    journeyman: { hourly: string; annual: string; experience: string };
    master: { hourly: string; annual: string; experience: string };
    jobGrowth: string;
    annualOpenings: string;
    topHiringPartners: string[];
    keyCertifications: string[];
  }
> = {
  electrical: {
    title: "Electrical Technician",
    description: "High demand across commercial construction, renewable energy, and grid modernization projects.",
    apprentice: { hourly: "$24 - $29 / hr", annual: "$50,000 - $60,000", experience: "Year 1 Apprentice" },
    journeyman: { hourly: "$35 - $46 / hr", annual: "$72,000 - $95,000", experience: "Licensed Journeyman (2-4 yrs)" },
    master: { hourly: "$48 - $65+ / hr", annual: "$100,000 - $135,000+", experience: "Master Electrician / Contractor" },
    jobGrowth: "+11% (Much faster than average)",
    annualOpenings: "79,900 openings / year nationwide",
    topHiringPartners: ["Eaton Corp", "Rosendin Electric", "IES Holdings", "Quanta Services"],
    keyCertifications: ["NCCER Level 1-4", "OSHA 10", "NFPA 70E", "State Journeyman License"],
  },
  hvac: {
    title: "HVAC Systems Specialist",
    description: "Year-round demand in heating, ventilation, air conditioning, and commercial building climate automation.",
    apprentice: { hourly: "$23 - $28 / hr", annual: "$48,000 - $58,000", experience: "Apprentice Technician" },
    journeyman: { hourly: "$33 - $44 / hr", annual: "$68,000 - $91,000", experience: "EPA Certified Journeyman" },
    master: { hourly: "$46 - $62+ / hr", annual: "$96,000 - $130,000+", experience: "Lead Commercial Tech / Business Owner" },
    jobGrowth: "+9% (Faster than average)",
    annualOpenings: "37,700 openings / year nationwide",
    topHiringPartners: ["Carrier Commercial", "Trane Technologies", "Johnson Controls", "TDIndustries"],
    keyCertifications: ["EPA Universal 608", "NATE Certified", "R-410A / A2L Safety"],
  },
  welding: {
    title: "Welding & Fabrication",
    description: "Critical trade in infrastructure, manufacturing, aerospace, structural steel, and maritime pipeline sectors.",
    apprentice: { hourly: "$22 - $28 / hr", annual: "$46,000 - $58,000", experience: "Entry Fabrication Welder" },
    journeyman: { hourly: "$34 - $48 / hr", annual: "$70,000 - $100,000", experience: "AWS Certified Structural/Pipe" },
    master: { hourly: "$52 - $75+ / hr", annual: "$108,000 - $155,000+", experience: "Rig / Pipeline / CWI Inspector" },
    jobGrowth: "+8% (Consistent infrastructure need)",
    annualOpenings: "42,600 openings / year nationwide",
    topHiringPartners: ["Bechtel", "Turner Industries", "Caterpillar", "General Dynamics"],
    keyCertifications: ["AWS D1.1 Structural", "AWS D1.2 Aluminum", "ASME Section IX"],
  },
  plumbing: {
    title: "Plumbing Fundamentals",
    description: "Resilient trade essential to commercial structures, municipal water systems, and residential developments.",
    apprentice: { hourly: "$22 - $27 / hr", annual: "$45,000 - $56,000", experience: "Registered Apprentice" },
    journeyman: { hourly: "$32 - $43 / hr", annual: "$66,000 - $89,000", experience: "Licensed Journeyman Plumber" },
    master: { hourly: "$45 - $64+ / hr", annual: "$94,000 - $133,000+", experience: "Master Plumber & Contractor" },
    jobGrowth: "+14% (High replacement demand)",
    annualOpenings: "48,600 openings / year nationwide",
    topHiringPartners: ["EMCOR Group", "Comfort Systems USA", "Roto-Rooter Pro", "Ferguson"],
    keyCertifications: ["NCCER Plumbing 1-2", "Backflow Prevention", "State Plumbing License"],
  },
  construction: {
    title: "Construction Management",
    description: "Direct projects, coordinate skilled subcontractors, enforce safety, and maintain multi-million dollar schedules.",
    apprentice: { hourly: "$27 - $34 / hr", annual: "$56,000 - $70,000", experience: "Assistant Field Superintendent" },
    journeyman: { hourly: "$42 - $56 / hr", annual: "$87,000 - $116,000", experience: "Project Superintendent" },
    master: { hourly: "$62 - $88+ / hr", annual: "$128,000 - $182,000+", experience: "General Superintendent / VP Operations" },
    jobGrowth: "+10% (Infrastructure investment surge)",
    annualOpenings: "38,000 openings / year nationwide",
    topHiringPartners: ["Skanska", "DPR Construction", "Mortenson", "Whiting-Turner"],
    keyCertifications: ["OSHA 30-Hour", "Procore Certified", "LEED Green Associate"],
  },
  industrial: {
    title: "Industrial Maintenance & Automation",
    description: "Servicing automated distribution hubs, robotics cells, PLC logic, and smart manufacturing facilities.",
    apprentice: { hourly: "$25 - $32 / hr", annual: "$52,000 - $66,000", experience: "Maintenance Tech I" },
    journeyman: { hourly: "$36 - $50 / hr", annual: "$75,000 - $104,000", experience: "PLC & Automation Tech" },
    master: { hourly: "$54 - $72+ / hr", annual: "$112,000 - $150,000+", experience: "Plant Reliability Lead / Director" },
    jobGrowth: "+13% (Automation & robotics boom)",
    annualOpenings: "51,200 openings / year nationwide",
    topHiringPartners: ["Amazon Robotics", "Siemens Industry", "Tesla Megafactory", "Georgia-Pacific"],
    keyCertifications: ["SMRP CMRT", "Allen-Bradley CompactLogix", "NFPA 70E Arc Flash"],
  },
};

// Interactive Lab Spaces Dataset
const labSpacesData = [
  {
    id: "electrical",
    title: "High-Voltage & Commercial Electrical Bay",
    specs: "3-Phase 480V • 24 Live Testing Booths • Conduit Bending Zone",
    desc: "Equipped with commercial Cutler-Hammer & Square D load centers, industrial motor controllers, digital insulation resistance testers, and dedicated conduit threading stations.",
    img: progElectricalImg,
    equipment: [
      "Cutler-Hammer 3-Phase Panels",
      "Fluke 87V Multimeters & Clamp Meters",
      "Greenlee Hydraulic Conduit Benders",
      "Motor Starter & Variable Frequency Test Rigs",
    ],
    capacity: "16 Students Max per Instructor",
    safetyGear: "NFPA 70E Arc Flash PPE, Safety Glasses, Steel Toe Boots",
  },
  {
    id: "welding",
    title: "Multi-Process Welding & Fabrication Shop",
    specs: "MIG / TIG / Stick • Fume Extractors • CNC Plasma Cutting",
    desc: "Features 20 isolated welding booths with multi-process Miller Dynasty & Lincoln Electric power sources, state-of-the-art down-draft fume extractors, and oxy-fuel cutting stations.",
    img: progWeldingImg,
    equipment: [
      "Miller Multimatic 255 & Lincoln Power MIG",
      "Lincoln Square Wave TIG 200",
      "Thermal Dynamics Plasma Cutter",
      "Destructive Bend Test Machine for AWS Qualification",
    ],
    capacity: "14 Students Max per Cohort",
    safetyGear: "Auto-Darkening Helmet, Leather Welding Jacket, Heavy Gauntlets",
  },
  {
    id: "hvac",
    title: "HVAC & Commercial Refrigeration Diagnostics Lab",
    specs: "Heat Pumps • Chilled Water • EPA Certified Recovery",
    desc: "Full operational residential and commercial split systems, heat pumps, walk-in refrigeration units, and variable refrigerant flow (VRF) simulators.",
    img: progHvacImg,
    equipment: [
      "Carrier & Trane Variable-Speed Units",
      "Fieldpiece Digital Manifold Gauges",
      "Appion G5Twin Refrigerant Recovery Stations",
      "Testo Thermal Imaging & Leak Detectors",
    ],
    capacity: "16 Students Max per Lab",
    safetyGear: "Safety Eyewear, R-410A Handling Gloves, Voltage Detector",
  },
  {
    id: "industrial",
    title: "Industrial Robotics & PLC Automation Cell",
    specs: "Siemens & Allen-Bradley PLCs • Pneumatics • Conveyor Simulator",
    desc: "Real-world automation training floor featuring industrial conveyor systems, variable frequency drives, pneumatic logic controllers, and sensor diagnostic test racks.",
    img: progIndustrialImg,
    equipment: [
      "Allen-Bradley CompactLogix PLC Racks",
      "Siemens S7-1500 Modular Automation Racks",
      "Festo Pneumatic Learning Stations",
      "ABB Industrial Variable Frequency Drives",
    ],
    capacity: "12 Students Max for High Focus",
    safetyGear: "Lockout/Tagout Kit, Safety Glasses, Anti-Static ESD Gear",
  },
];

// Instructors Dataset
const instructorsData = [
  {
    name: "Luis Rodriguez",
    role: "Lead Welding Instructor",
    exp: "18+ YEARS EXP.",
    specialty: "SMAW, GTAW, GMAW, Pipe Welding & ASME Code",
    img: instructorLuisImg,
    badges: ["AWS Certified CWI", "NCCER Master Instructor"],
  },
  {
    name: "Jessica Parker",
    role: "Electrical Lead Instructor",
    exp: "14+ YEARS EXP.",
    specialty: "Commercial 3-Phase Systems, Industrial Controls, PLC",
    img: instructorJessicaImg,
    badges: ["IBEW Master Electrician", "OSHA 500 Authorized Trainer"],
  },
  {
    name: "David Thompson",
    role: "HVAC Senior Instructor",
    exp: "16+ YEARS EXP.",
    specialty: "Commercial Chilled Water, Heat Pumps, VRF Systems",
    img: instructorDavidImg,
    badges: ["EPA Universal 608 Proctor", "NATE Master Certified"],
  },
  {
    name: "Sarah Johnson",
    role: "Construction Mgmt Instructor",
    exp: "12+ YEARS EXP.",
    specialty: "Commercial Estimating, BIM Models, Subcontractor Safety",
    img: instructorSarahImg,
    badges: ["PMP Certified", "OSHA 30 Authorized Trainer"],
  },
];

// Filterable Weekly Schedule Dataset
const scheduleDataByShift = {
  evening: [
    {
      time: "5:00 PM - 5:30 PM",
      mon: "Check-In & Safety Brief",
      tue: "Check-In & Safety Brief",
      wed: "Check-In & Safety Brief",
      thu: "Check-In & Safety Brief",
      fri: "Tool Inventory & Prep",
    },
    {
      time: "5:30 PM - 7:30 PM",
      mon: "Electrical Conduit Lab",
      tue: "HVAC Diagnostic Lab",
      wed: "MIG / TIG Arc Welding",
      thu: "Plumbing Rough-In Rig",
      fri: "PLC Ladder Logic Lab",
    },
    {
      time: "7:30 PM - 7:45 PM",
      mon: "Safety Rest Break",
      tue: "Safety Rest Break",
      wed: "Safety Rest Break",
      thu: "Safety Rest Break",
      fri: "Safety Rest Break",
    },
    {
      time: "7:45 PM - 9:00 PM",
      mon: "Blueprint & Wiring Schematics",
      tue: "Controls & Thermostats",
      wed: "Structural Joint Fit-Up",
      thu: "Piping Pressures & Code",
      fri: "Hydraulic Systems Testing",
    },
    {
      time: "9:00 PM - 9:45 PM",
      mon: "Lockout/Tagout & Clean",
      tue: "Lockout/Tagout & Clean",
      wed: "Lockout/Tagout & Clean",
      thu: "Lockout/Tagout & Clean",
      fri: "Shop Wrap-Up & Inspection",
    },
  ],
  day: [
    {
      time: "8:00 AM - 8:30 AM",
      mon: "Toolbox Safety Brief",
      tue: "Toolbox Safety Brief",
      wed: "Toolbox Safety Brief",
      thu: "Toolbox Safety Brief",
      fri: "OSHA Site Inspection",
    },
    {
      time: "8:30 AM - 10:30 AM",
      mon: "Power Distribution Bay",
      tue: "EPA Refrigerant Recovery",
      wed: "Pipe Welding & Beveling",
      thu: "Water Heater Installation",
      fri: "Conveyor Automation Bay",
    },
    {
      time: "10:30 AM - 10:45 AM",
      mon: "Rest Break",
      tue: "Rest Break",
      wed: "Rest Break",
      thu: "Rest Break",
      fri: "Rest Break",
    },
    {
      time: "10:45 AM - 12:30 PM",
      mon: "3-Phase Motor Control",
      tue: "Airflow Balancing & Duct",
      wed: "Structural Steel Testing",
      thu: "Drainage & Vent Stacks",
      fri: "Variable Frequency Drives",
    },
    {
      time: "12:30 PM - 1:30 PM",
      mon: "Code Review & Shop Clean",
      tue: "Code Review & Shop Clean",
      wed: "Code Review & Shop Clean",
      thu: "Code Review & Shop Clean",
      fri: "Capstone Project Workshop",
    },
  ],
  weekend: [
    {
      time: "8:00 AM - 9:00 AM",
      mon: "Saturday Shop Orientation",
      tue: "Sunday Site Prep & Safety",
      wed: "Independent Study",
      thu: "Open Bench Access",
      fri: "Equipment Setup",
    },
    {
      time: "9:00 AM - 12:30 PM",
      mon: "Intensive Welding Bay (Sat)",
      tue: "HVAC Simulator Lab (Sun)",
      wed: "Instructor Office Hours",
      thu: "Blueprint Practicum",
      fri: "Prep Lab",
    },
    {
      time: "12:30 PM - 1:15 PM",
      mon: "Lunch & Guest Foreman Talk",
      tue: "Lunch & Employer Meetup",
      wed: "Break",
      thu: "Break",
      fri: "Break",
    },
    {
      time: "1:15 PM - 3:45 PM",
      mon: "Electrical Service Entrance Labs",
      tue: "Industrial PLC Cell Practicum",
      wed: "Skills Verification",
      thu: "Skills Verification",
      fri: "Skills Verification",
    },
    {
      time: "3:45 PM - 4:30 PM",
      mon: "Tool Maintenance & Debrief",
      tue: "Tool Maintenance & Debrief",
      wed: "Shop Lockout",
      thu: "Shop Lockout",
      fri: "Shop Lockout",
    },
  ],
};

// FAQs Dataset
const tradeFaqs = [
  {
    q: "Do I need prior trade or mechanical experience?",
    a: "No prior experience is necessary. Over 65% of our students arrive with zero previous trade background. Our foundation courses start from basic hand tool ergonomics, shop safety rules, and foundational math before progressing step-by-step into live energized labs and industry certification exams.",
  },
  {
    q: "Are your trade programs accredited and industry-recognized?",
    a: "Yes. ProTrack Trades is officially accredited by the state board of higher education and works directly in partnership with NCCER (National Center for Construction Education and Research), AWS (American Welding Society), EPA (Environmental Protection Agency), and OSHA.",
  },
  {
    q: "What certifications will I graduate with?",
    a: "Depending on your specific program, you will graduate with nationally accredited credentials including OSHA 10 or OSHA 30-Hour Construction cards, EPA Universal 608 Certification, AWS D1.1 Structural Steel Welder certification, NCCER Level 1 & 2 cards, and CPR/First Aid.",
  },
  {
    q: "What if I miss an evening lab session due to work or family?",
    a: "We offer dedicated open-shop makeup hours every Saturday from 8:00 AM to 4:00 PM with master instructors on deck. You can log all mandatory clock hours and complete bench assignments without falling behind your cohort.",
  },
  {
    q: "Do you offer financial aid, scholarships, and payment plans?",
    a: "Yes! We provide zero-interest monthly installment plans, need-based tuition grants, direct employer sponsorship partnerships, and our programs are approved for VA Education Benefits and the GI Bill® for military veterans and active duty transitions.",
  },
  {
    q: "What career and job placement support do you provide?",
    a: "Our Career Services department partners with 150+ regional commercial contractors, industrial plants, and utility providers. We organize bi-monthly hiring fairs, conduct 1-on-1 resume & OSHA credential verification, and maintain a 92% job placement rate within 6 months of graduation.",
  },
];

export function ProTrackTrades() {
  // Navigation & Scroll
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#programs");

  // Interactive Widgets State
  const [wageTrade, setWageTrade] = useState<string>("electrical");
  const [wageTier, setWageTier] = useState<"apprentice" | "journeyman" | "master">("journeyman");
  const [activeLabIndex, setActiveLabIndex] = useState<number>(0);
  const [scheduleShift, setScheduleShift] = useState<"day" | "evening" | "weekend">("evening");

  // Modals
  const [selectedProgram, setSelectedProgram] = useState<any | null>(null);
  const [isApplyOpen, setIsApplyOpen] = useState(false);
  const [isTourOpen, setIsTourOpen] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Application Form State
  const [appForm, setAppForm] = useState({
    name: "",
    email: "",
    phone: "",
    trade: "Electrical Technician",
    shift: "Evening Schedule (5:00 PM – 9:45 PM)",
    experience: "None / Complete Beginner",
  });

  // Accordion State
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Scrollspy & sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = [
        "top",
        "programs",
        "wage-calc",
        "labs",
        "curriculum",
        "schedule",
        "instructors",
        "outcomes",
        "tuition",
        "faq",
      ];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const secId = sections[i];
        const el = document.getElementById(secId);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveNav(`#${secId}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Modal key & scroll locks
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (mobileMenuOpen) setMobileMenuOpen(false);
        if (isApplyOpen) setIsApplyOpen(false);
        if (isTourOpen) setIsTourOpen(false);
        if (selectedProgram) setSelectedProgram(null);
      }
    };

    if (mobileMenuOpen || isApplyOpen || isTourOpen || selectedProgram) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen, isApplyOpen, isTourOpen, selectedProgram]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveNav(href);
    setMobileMenuOpen(false);

    const targetId = href.substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      const headerOffset = 76;
      const elementPosition = targetEl.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setIsApplyOpen(false);
      setIsTourOpen(false);
    }, 2800);
  };

  const currentWageData = wageEstimatorData[wageTrade] || wageEstimatorData.electrical;
  const currentWageTierData = currentWageData[wageTier];
  const activeLab = labSpacesData[activeLabIndex] || labSpacesData[0];
  const currentScheduleRows = scheduleDataByShift[scheduleShift] || scheduleDataByShift.evening;

  return (
    <main className="pt-site" id="top" tabIndex={-1}>
      {/* Sticky Header Navbar */}
      <header className={`pt-header ${isScrolled ? "scrolled" : ""}`}>
        <div className="pt-wrap pt-nav-inner">
          {/* Logo */}
          <a
            href="#top"
            className="pt-brand"
            onClick={(e) => handleNavClick(e, "#top")}
            aria-label="ProTrack Trades Home"
          >
            <ProTrackLogo size={34} />
            <div className="pt-brand-text">
              <span className="pt-brand-title">PROTRACK</span>
              <span className="pt-brand-sub">TRADES</span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="pt-nav-links">
            <a
              href="#programs"
              className={`pt-nav-link ${activeNav === "#programs" ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, "#programs")}
            >
              Programs
            </a>
            <a
              href="#wage-calc"
              className={`pt-nav-link ${activeNav === "#wage-calc" ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, "#wage-calc")}
            >
              Wage Calculator
            </a>
            <a
              href="#labs"
              className={`pt-nav-link ${activeNav === "#labs" ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, "#labs")}
            >
              Lab Spaces
            </a>
            <a
              href="#curriculum"
              className={`pt-nav-link ${activeNav === "#curriculum" ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, "#curriculum")}
            >
              Training Paths
            </a>
            <a
              href="#schedule"
              className={`pt-nav-link ${activeNav === "#schedule" ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, "#schedule")}
            >
              Schedule
            </a>
            <a
              href="#instructors"
              className={`pt-nav-link ${activeNav === "#instructors" ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, "#instructors")}
            >
              Instructors
            </a>
            <a
              href="#outcomes"
              className={`pt-nav-link ${activeNav === "#outcomes" ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, "#outcomes")}
            >
              Outcomes
            </a>
            <a
              href="#tuition"
              className={`pt-nav-link ${activeNav === "#tuition" ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, "#tuition")}
            >
              Tuition
            </a>
            <a
              href="#faq"
              className={`pt-nav-link ${activeNav === "#faq" ? "active" : ""}`}
              onClick={(e) => handleNavClick(e, "#faq")}
            >
              FAQ
            </a>
          </nav>

          {/* Header Action Button */}
          <div className="pt-nav-actions">
            <button
              onClick={() => {
                setSelectedProgram(null);
                setIsApplyOpen(true);
              }}
              className="pt-btn-gold pt-nav-cta"
            >
              <span>APPLY NOW</span>
              <ArrowRight size={15} />
            </button>

            <button
              className={`pt-mobile-toggle ${mobileMenuOpen ? "open" : ""}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Off-Canvas Mobile Drawer */}
      <div
        className={`pt-mobile-overlay ${mobileMenuOpen ? "visible" : ""}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`pt-mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        <div className="pt-drawer-top">
          <div className="pt-brand">
            <ProTrackLogo size={28} />
            <span className="pt-brand-title">PROTRACK TRADES</span>
          </div>
          <button
            className="pt-drawer-close"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <div className="pt-drawer-body">
          <div className="pt-drawer-links">
            {[
              { name: "Trade Programs", href: "#programs" },
              { name: "Career & Wage Calculator", href: "#wage-calc" },
              { name: "Hands-On Lab Spaces", href: "#labs" },
              { name: "Learning Journey", href: "#curriculum" },
              { name: "Training Schedule", href: "#schedule" },
              { name: "Master Instructors", href: "#instructors" },
              { name: "Career Outcomes", href: "#outcomes" },
              { name: "Tuition & Financial Aid", href: "#tuition" },
              { name: "FAQ", href: "#faq" },
            ].map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="pt-drawer-link"
                onClick={(e) => handleNavClick(e, link.href)}
              >
                <span>{link.name}</span>
                <ChevronRight size={16} />
              </a>
            ))}
          </div>

          <div className="pt-drawer-footer">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsApplyOpen(true);
              }}
              className="pt-btn-gold full-w"
            >
              <span>APPLY FOR NEXT COHORT</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="pt-hero-section">
        <div className="pt-hero-bg-grid" />

        <div className="pt-wrap pt-hero-container">
          {/* Left Hero Copy */}
          <div className="pt-hero-copy">
            <div className="pt-hero-badge">
              <Sparkles size={14} className="text-gold" />
              <span>ACCREDITED COMMERCIAL TRADE ACADEMY</span>
            </div>

            <h1 className="pt-hero-title">
              BUILD A <br />
              <span className="text-gold">SKILLED TRADE</span> <br />
              CAREER WITH <br />
              CONFIDENCE.
            </h1>

            <p className="pt-hero-desc">
              Hands-on training with industry-grade heavy equipment. Earn NCCER, AWS, EPA, and OSHA credentials in 6–8 months. Zero generic lectures. 100% practical shop time.
            </p>

            <div className="pt-hero-buttons">
              <a
                href="#programs"
                onClick={(e) => handleNavClick(e, "#programs")}
                className="pt-btn-gold pt-btn-hero"
              >
                <span>EXPLORE PROGRAMS</span>
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => setIsTourOpen(true)}
                className="pt-btn-dark pt-btn-hero"
              >
                <span>BOOK A CAMPUS & LAB TOUR</span>
              </button>
            </div>

            <div className="pt-hero-feature-chips">
              <div className="pt-chip">
                <Wrench size={15} className="text-gold" />
                <span>Hands-On Labs</span>
              </div>
              <div className="pt-chip">
                <Award size={15} className="text-gold" />
                <span>Industry-Certified</span>
              </div>
              <div className="pt-chip">
                <Users size={15} className="text-gold" />
                <span>Small Cohorts (16 Max)</span>
              </div>
              <div className="pt-chip">
                <Briefcase size={15} className="text-gold" />
                <span>92% Job Placement</span>
              </div>
            </div>
          </div>

          {/* Right Hero Interactive Widgets + Real Apprentice Welder */}
          <div className="pt-hero-visual-col">
            <div className="pt-hero-photo-wrap">
              <img
                src={heroWelderImg}
                alt="Apprentice in welding safety helmet and gear in industrial workshop"
                className="pt-hero-welder-img"
              />
              <div className="pt-hero-overlay-gradient" />
              <div className="pt-hero-live-badge">
                <span className="pt-live-dot" />
                <span>LIVE LAB ENROLLMENT ACTIVE</span>
              </div>
            </div>

            {/* Dashboard Widgets Floating Layer */}
            <div className="pt-hero-widgets-grid">
              {/* Card 1: Your Progress */}
              <div className="pt-card pt-card-progress">
                <small className="pt-card-label">TRAINING MILESTONE TRACKER</small>
                <div className="pt-dial-row">
                  <div className="pt-progress-dial">
                    <strong>78%</strong>
                    <small>Cohort Hours</small>
                  </div>
                  <div className="pt-checklist-mini">
                    <div>
                      <Check size={12} className="text-gold" /> Safety Foundations
                    </div>
                    <div>
                      <Check size={12} className="text-gold" /> Live Energized Bay
                    </div>
                    <div>
                      <Check size={12} className="text-gold" /> Code Inspection
                    </div>
                    <div>
                      <Check size={12} className="text-gold" /> AWS Cert Prep
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 2: Instructor Feedback */}
              <div className="pt-card pt-card-feedback">
                <small className="pt-card-label">MASTER INSTRUCTOR EVALUATION</small>
                <div className="pt-feed-author">
                  <img src={instructorLuisImg} alt="Luis Rodriguez" />
                  <p>“Clean root pass on the 3G vertical plate. Excellent travel speed and arc control.”</p>
                </div>
                <div className="pt-stars-row">
                  <span className="text-gold">★★★★★</span>
                  <small>— Luis Rodriguez, AWS CWI</small>
                </div>
              </div>

              {/* Card 3: Upcoming Lab */}
              <div className="pt-card pt-card-upcoming">
                <small className="pt-card-label">UPCOMING LAB SESSION</small>
                <div className="pt-lab-info">
                  <Calendar size={18} className="text-gold" />
                  <div>
                    <strong>Commercial Conduit & 3-Phase</strong>
                    <span>Shop Bay B • High Voltage Rig</span>
                    <small>Today • 5:30 PM - 7:30 PM</small>
                  </div>
                </div>
                <button
                  onClick={() => setIsTourOpen(true)}
                  className="pt-btn-mini"
                >
                  VIEW LAB ROSTER
                </button>
              </div>

              {/* Card 4: Certifications */}
              <div className="pt-card pt-card-certs">
                <div className="pt-certs-head">
                  <small className="pt-card-label">CREDENTIALS STACK</small>
                  <span className="pt-cert-count">4 / 5 Earned</span>
                </div>
                <div className="pt-certs-list">
                  <div>
                    <Check size={12} className="text-green" /> OSHA 10-Hour Card
                  </div>
                  <div>
                    <Check size={12} className="text-green" /> NCCER Electrical Level 1
                  </div>
                  <div>
                    <Check size={12} className="text-green" /> Arc Flash NFPA 70E
                  </div>
                  <div>
                    <span className="pt-dot-gray" /> State Journeyman Exam Prep
                  </div>
                </div>
              </div>

              {/* Card 5: Next Cohort */}
              <div className="pt-card pt-card-cohort">
                <div className="pt-cohort-head">
                  <CalendarDays size={18} className="text-gold" />
                  <div>
                    <small>UPCOMING COHORT START</small>
                    <strong>June 2, 2025</strong>
                    <span>Day & Evening Schedules Available</span>
                  </div>
                </div>
                <span className="pt-seats-badge">3 BENCHES REMAINING</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Metric Stats Bar (6 Metrics) */}
      <section className="pt-stats-bar">
        <div className="pt-wrap pt-stats-grid">
          <div className="pt-stat-item">
            <strong>6,500+</strong>
            <span>GRADUATES TRAINED</span>
          </div>

          <div className="pt-stat-item">
            <strong>92%</strong>
            <span>JOB PLACEMENT RATE</span>
          </div>

          <div className="pt-stat-item">
            <strong>88%</strong>
            <span>COMPLETION RATE</span>
          </div>

          <div className="pt-stat-item">
            <strong>150+</strong>
            <span>INDUSTRY EMPLOYER PARTNERS</span>
          </div>

          <div className="pt-stat-item">
            <strong>12,000+</strong>
            <span>CERTIFICATIONS EARNED</span>
          </div>

          <div className="pt-stat-item">
            <strong>$18,400</strong>
            <span>AVG. SALARY INCREASE IN 2 YRS</span>
          </div>
        </div>
      </section>

      {/* Why Choose ProTrack Trades? (6 Cards Grid) */}
      <section className="pt-section pt-why-section">
        <div className="pt-wrap">
          <div className="pt-section-header text-center">
            <span className="pt-sec-tag">INDUSTRY-GRADE EXCELLENCE</span>
            <h2 className="pt-section-title">
              WHY CHOOSE PROTRACK <span className="text-gold">TRADES?</span>
            </h2>
            <p className="pt-sec-subtitle">
              Traditional college takes 4 years and burdens you with debt. ProTrack delivers job-ready certifications and hands-on mastery in months.
            </p>
          </div>

          <div className="pt-why-grid">
            <div className="pt-why-card">
              <div className="pt-why-icon-box">
                <Wrench size={26} />
              </div>
              <h3>HANDS-ON LABS</h3>
              <p>Over 80% of your curriculum is spent in live commercial shop bays with authentic tools and real power.</p>
            </div>

            <div className="pt-why-card">
              <div className="pt-why-icon-box">
                <Cog size={26} />
              </div>
              <h3>COMMERCIAL EQUIPMENT</h3>
              <p>Train on the exact Eaton switchgear, Miller welders, Carrier heat pumps, and Siemens PLCs used on job sites.</p>
            </div>

            <div className="pt-why-card">
              <div className="pt-why-icon-box">
                <Award size={26} />
              </div>
              <h3>CERTIFIED MASTER INSTRUCTORS</h3>
              <p>Learn directly from licensed master tradespeople with 12–20 years of real-world field supervision experience.</p>
            </div>

            <div className="pt-why-card">
              <div className="pt-why-icon-box">
                <ShieldCheck size={26} />
              </div>
              <h3>SAFETY-FIRST CULTURE</h3>
              <p>Graduate with OSHA 10/30, NFPA 70E arc flash, and heavy machinery safety certifications built right into tuition.</p>
            </div>

            <div className="pt-why-card">
              <div className="pt-why-icon-box">
                <Clock size={26} />
              </div>
              <h3>FLEXIBLE SHIFT SCHEDULES</h3>
              <p>Evening (5–9:45 PM), Morning (8 AM–1:30 PM), and Weekend Fast-Track formats designed around your work schedule.</p>
            </div>

            <div className="pt-why-card">
              <div className="pt-why-icon-box">
                <Briefcase size={26} />
              </div>
              <h3>LIFETIME CAREER SERVICES</h3>
              <p>Direct apprentice interviews, employer resume referrals, tool grants, and ongoing career advancement mentorship.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Our Programs (6 Trade Cards with 6 Distinct Real Photos) */}
      <section className="pt-section pt-programs-section" id="programs">
        <div className="pt-wrap">
          <div className="pt-section-header text-center">
            <span className="pt-sec-tag">CERTIFIED CAREER PATHWAYS</span>
            <h2 className="pt-section-title">
              EXPLORE OUR <span className="text-gold">PROGRAMS</span>
            </h2>
            <p className="pt-sec-subtitle">
              Each track is vetted by regional commercial contractors to guarantee in-demand job readiness upon graduation.
            </p>
          </div>

          <div className="pt-programs-grid">
            {tradePrograms.map((prog) => (
              <div key={prog.id} className="pt-prog-card">
                <div className="pt-prog-img-wrap">
                  <img
                    src={prog.img}
                    alt={`${prog.title} hands-on skilled trades training`}
                    loading="lazy"
                  />
                  <span className="pt-prog-category-badge">{prog.category}</span>
                </div>

                <div className="pt-prog-body">
                  <h3 className="pt-prog-name">{prog.title}</h3>
                  <p className="pt-prog-desc-snippet">{prog.desc}</p>

                  <div className="pt-prog-meta-row">
                    <div>
                      <Clock size={14} className="text-gold" />
                      <span>
                        Duration: <strong>{prog.duration}</strong>
                      </span>
                    </div>
                    <div>
                      <Target size={14} className="text-gold" />
                      <span>
                        Level: <strong>{prog.level}</strong>
                      </span>
                    </div>
                  </div>

                  <div className="pt-prog-wage-badge">
                    <TrendingUp size={13} className="text-gold" />
                    <span>
                      Est. Wage: <strong>{prog.startingWage}</strong> ({prog.annualEst})
                    </span>
                  </div>

                  <div className="pt-prog-start-note">
                    <Calendar size={13} className="text-muted" />
                    <span>
                      Next Cohort: <strong>{prog.nextStart}</strong>
                    </span>
                  </div>

                  <button
                    onClick={() => setSelectedProgram(prog)}
                    className="pt-btn-learn-more"
                  >
                    <span>VIEW PROGRAM DETAILS</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NEW WIDGET 1: Interactive Trade Career & Wage Estimator */}
      <section className="pt-section pt-wage-section" id="wage-calc">
        <div className="pt-wrap">
          <div className="pt-section-header text-center">
            <span className="pt-sec-tag">REAL-TIME CAREER ROI</span>
            <h2 className="pt-section-title">
              TRADE CAREER & <span className="text-gold">WAGE ESTIMATOR</span>
            </h2>
            <p className="pt-sec-subtitle">
              Explore projected earnings, job growth, and top regional employers across each trade specialty.
            </p>
          </div>

          <div className="pt-wage-card-box">
            {/* Top Trade Selector Tabs */}
            <div className="pt-wage-trade-tabs">
              {[
                { id: "electrical", label: "Electrical" },
                { id: "hvac", label: "HVAC Systems" },
                { id: "welding", label: "Welding & Fab" },
                { id: "plumbing", label: "Plumbing" },
                { id: "construction", label: "Construction Mgmt" },
                { id: "industrial", label: "Industrial Maint" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  className={`pt-wage-tab ${wageTrade === tab.id ? "active" : ""}`}
                  onClick={() => setWageTrade(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Experience Level Switcher */}
            <div className="pt-wage-tier-bar">
              <span className="pt-wage-tier-label">EXPERIENCE STAGE:</span>
              <div className="pt-wage-tier-buttons">
                <button
                  className={`pt-tier-btn ${wageTier === "apprentice" ? "active" : ""}`}
                  onClick={() => setWageTier("apprentice")}
                >
                  Apprentice (Graduation)
                </button>
                <button
                  className={`pt-tier-btn ${wageTier === "journeyman" ? "active" : ""}`}
                  onClick={() => setWageTier("journeyman")}
                >
                  Journeyman (2–4 Years)
                </button>
                <button
                  className={`pt-tier-btn ${wageTier === "master" ? "active" : ""}`}
                  onClick={() => setWageTier("master")}
                >
                  Master / Site Lead (5+ Years)
                </button>
              </div>
            </div>

            {/* Dynamic Results Grid */}
            <div className="pt-wage-display-grid">
              {/* Left Column: Numbers & Range */}
              <div className="pt-wage-numbers-card">
                <span className="pt-wage-stage-tag">{currentWageTierData.experience}</span>
                <h3 className="pt-wage-title">{currentWageData.title}</h3>
                <p className="pt-wage-intro">{currentWageData.description}</p>

                <div className="pt-wage-hero-stat">
                  <span className="pt-stat-caption">ESTIMATED HOURLY RATE</span>
                  <div className="pt-stat-hourly text-gold">{currentWageTierData.hourly}</div>
                  <div className="pt-stat-annual">
                    Median Annual: <strong>{currentWageTierData.annual}</strong>
                  </div>
                </div>

                <div className="pt-wage-metrics-row">
                  <div className="pt-wage-mini-metric">
                    <TrendingUp size={16} className="text-gold" />
                    <div>
                      <small>Projected Job Growth</small>
                      <strong>{currentWageData.jobGrowth}</strong>
                    </div>
                  </div>
                  <div className="pt-wage-mini-metric">
                    <Briefcase size={16} className="text-gold" />
                    <div>
                      <small>Annual US Openings</small>
                      <strong>{currentWageData.annualOpenings}</strong>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setAppForm({ ...appForm, trade: currentWageData.title });
                    setIsApplyOpen(true);
                  }}
                  className="pt-btn-gold pt-wage-cta-btn"
                >
                  <span>APPLY FOR {currentWageData.title.toUpperCase()}</span>
                  <ArrowRight size={16} />
                </button>
              </div>

              {/* Right Column: Key Certifications & Hiring Partners */}
              <div className="pt-wage-details-card">
                <div className="pt-wage-details-block">
                  <h4>
                    <Award size={18} className="text-gold" />
                    <span>Credentials Included in This Track</span>
                  </h4>
                  <ul className="pt-wage-cert-pills">
                    {currentWageData.keyCertifications.map((cert) => (
                      <li key={cert}>
                        <CheckCircle2 size={14} className="text-gold" />
                        <span>{cert}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-wage-details-block">
                  <h4>
                    <Building size={18} className="text-gold" />
                    <span>Top Regional Hiring Partners</span>
                  </h4>
                  <div className="pt-wage-partners-list">
                    {currentWageData.topHiringPartners.map((partner) => (
                      <span key={partner} className="pt-hiring-badge">
                        {partner}
                      </span>
                    ))}
                  </div>
                  <small className="pt-wage-disclaimer">
                    * Wage projections based on US Bureau of Labor Statistics & local employer placement records.
                  </small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW WIDGET 2: Interactive Hands-On Lab Spaces Explorer */}
      <section className="pt-section pt-labs-section" id="labs">
        <div className="pt-wrap">
          <div className="pt-section-header text-center">
            <span className="pt-sec-tag">FACILITY SHOWCASE</span>
            <h2 className="pt-section-title">
              OUR HANDS-ON <span className="text-gold">LAB SPACES</span>
            </h2>
            <p className="pt-sec-subtitle">
              Tour our live commercial workshops. Over 30,000 square feet of dedicated industrial training bays.
            </p>
          </div>

          <div className="pt-lab-explorer-card">
            {/* Lab Switcher Tabs */}
            <div className="pt-lab-tabs-nav">
              {labSpacesData.map((lab, index) => (
                <button
                  key={lab.id}
                  className={`pt-lab-nav-item ${activeLabIndex === index ? "active" : ""}`}
                  onClick={() => setActiveLabIndex(index)}
                >
                  <span className="pt-lab-nav-num">0{index + 1}</span>
                  <span className="pt-lab-nav-title">{lab.title.split("&")[0]}</span>
                </button>
              ))}
            </div>

            {/* Active Lab Showcase Display */}
            <div className="pt-lab-display-container">
              <div className="pt-lab-photo-col">
                <div className="pt-lab-photo-frame">
                  <img
                    src={activeLab.img}
                    alt={activeLab.title}
                    className="pt-lab-main-img"
                  />
                  <div className="pt-lab-photo-badge">
                    <HardHat size={15} className="text-gold" />
                    <span>{activeLab.safetyGear.split(",")[0]} REQUIRED</span>
                  </div>
                </div>
              </div>

              <div className="pt-lab-info-col">
                <div className="pt-lab-specs-tag">{activeLab.specs}</div>
                <h3 className="pt-lab-title">{activeLab.title}</h3>
                <p className="pt-lab-desc">{activeLab.desc}</p>

                <div className="pt-lab-equip-block">
                  <h4>HEAVY EQUIPMENT & TESTING TOOLS:</h4>
                  <div className="pt-lab-equip-tags">
                    {activeLab.equipment.map((eq) => (
                      <span key={eq} className="pt-equip-tag">
                        <Check size={13} className="text-gold" /> {eq}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-lab-meta-box">
                  <div>
                    <Users size={16} className="text-gold" />
                    <div>
                      <small>COHORT DENSITY</small>
                      <strong>{activeLab.capacity}</strong>
                    </div>
                  </div>
                  <div>
                    <ShieldCheck size={16} className="text-gold" />
                    <div>
                      <small>REQUIRED PPE</small>
                      <strong>{activeLab.safetyGear}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-lab-action-row">
                  <button
                    onClick={() => setIsTourOpen(true)}
                    className="pt-btn-gold"
                  >
                    <span>SCHEDULE A PRIVATE LAB WALKTHROUGH</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Learning Journey (6-Step Pipeline on Dark Background) */}
      <section className="pt-section pt-journey-section" id="curriculum">
        <div className="pt-wrap">
          <div className="pt-section-header text-center">
            <span className="pt-sec-tag">STRUCTURED PATHWAY</span>
            <h2 className="pt-section-title">
              YOUR <span className="text-gold">LEARNING</span> JOURNEY
            </h2>
            <p className="pt-sec-subtitle">
              From zero shop experience to certified technician with job placement assistance.
            </p>
          </div>

          <div className="pt-journey-steps-row">
            <div className="pt-j-step">
              <div className="pt-j-num-circle">1</div>
              <h4>FOUNDATIONS</h4>
              <p>Tool ergonomics, math essentials, and OSHA 10 shop safety.</p>
            </div>

            <div className="pt-j-line" />

            <div className="pt-j-step">
              <div className="pt-j-num-circle">2</div>
              <h4>LAB PRACTICE</h4>
              <p>Daily live benchwork on genuine commercial equipment.</p>
            </div>

            <div className="pt-j-line" />

            <div className="pt-j-step">
              <div className="pt-j-num-circle">3</div>
              <h4>FIELD SKILLS</h4>
              <p>Fault diagnostics, conduit bends, piping, and joint fit-ups.</p>
            </div>

            <div className="pt-j-line" />

            <div className="pt-j-step">
              <div className="pt-j-num-circle">4</div>
              <h4>CERTIFICATION PREP</h4>
              <p>Test on-site for AWS, EPA Universal, and NCCER credentials.</p>
            </div>

            <div className="pt-j-line" />

            <div className="pt-j-step">
              <div className="pt-j-num-circle">5</div>
              <h4>CAPSTONE PROJECT</h4>
              <p>Complete a full-scale commercial installation audited by master inspectors.</p>
            </div>

            <div className="pt-j-line" />

            <div className="pt-j-step">
              <div className="pt-j-num-circle">6</div>
              <h4>CAREER LAUNCH</h4>
              <p>Direct hiring interviews with 150+ regional contractor partners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Training Schedule Table (Shift Filterable) */}
      <section className="pt-section pt-schedule-section" id="schedule">
        <div className="pt-wrap">
          <div className="pt-schedule-head-row">
            <div>
              <span className="pt-sec-tag">FLEXIBLE COHORTS</span>
              <h2 className="pt-section-title">WEEKLY TRAINING SCHEDULE</h2>
            </div>

            <div className="pt-schedule-tab-pills">
              <button
                className={`pt-tab-pill ${scheduleShift === "evening" ? "active" : ""}`}
                onClick={() => setScheduleShift("evening")}
              >
                EVENING SCHEDULE (5–9:45 PM)
              </button>
              <button
                className={`pt-tab-pill ${scheduleShift === "day" ? "active" : ""}`}
                onClick={() => setScheduleShift("day")}
              >
                DAY SCHEDULE (8 AM–1:30 PM)
              </button>
              <button
                className={`pt-tab-pill ${scheduleShift === "weekend" ? "active" : ""}`}
                onClick={() => setScheduleShift("weekend")}
              >
                WEEKEND INTENSIVE
              </button>
            </div>
          </div>

          <div className="pt-table-container">
            <table className="pt-sched-table">
              <thead>
                <tr>
                  <th>TIME</th>
                  <th>MONDAY</th>
                  <th>TUESDAY</th>
                  <th>WEDNESDAY</th>
                  <th>THURSDAY</th>
                  <th>FRIDAY / SAT</th>
                </tr>
              </thead>
              <tbody>
                {currentScheduleRows.map((row) => (
                  <tr key={row.time}>
                    <td className="pt-td-time">
                      <strong>{row.time}</strong>
                    </td>
                    <td>{row.mon}</td>
                    <td>{row.tue}</td>
                    <td>{row.wed}</td>
                    <td>{row.thu}</td>
                    <td>{row.fri}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="pt-schedule-foot">
            <small>
              * Open-shop makeup hours available every Saturday (8 AM – 4 PM) for students needing extra practice time.
            </small>
            <a
              href="#schedule"
              className="pt-view-cal-link"
              onClick={(e) => {
                e.preventDefault();
                setIsTourOpen(true);
              }}
            >
              <span>DOWNLOAD COHORT ACADEMIC CALENDAR</span>
              <ArrowRight size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* Meet Our Instructors & Our Instructor Advantage */}
      <section className="pt-section pt-instructors-section" id="instructors">
        <div className="pt-wrap">
          <div className="pt-section-header">
            <span className="pt-sec-tag">MASTER TRADESPEOPLE</span>
            <h2 className="pt-section-title">MEET OUR INSTRUCTORS</h2>
            <p className="pt-sec-subtitle">
              Taught by field-tested professionals with decades of hands-on jobsite mastery.
            </p>
          </div>

          <div className="pt-instructors-grid-container">
            {/* 4 Instructor Cards */}
            <div className="pt-instructors-4col">
              {instructorsData.map((inst) => (
                <div key={inst.name} className="pt-inst-card">
                  <div className="pt-inst-img-wrap">
                    <img src={inst.img} alt={inst.name} loading="lazy" />
                  </div>
                  <div className="pt-inst-body">
                    <h3>{inst.name}</h3>
                    <span className="pt-inst-role">{inst.role}</span>
                    <strong className="pt-inst-exp text-gold">{inst.exp}</strong>
                    <p className="pt-inst-spec">
                      <small>Specialties:</small>
                      <br />
                      {inst.specialty}
                    </p>

                    <div className="pt-inst-badges">
                      {inst.badges.map((b) => (
                        <span key={b} className="pt-inst-badge">
                          <Check size={11} className="text-gold" /> {b}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Advantage Card */}
            <div className="pt-advantage-card">
              <h3 className="text-gold">OUR INSTRUCTOR ADVANTAGE</h3>
              <p className="pt-adv-sub">
                Our faculty aren't full-time academics. They are active industry leaders who bring real-time jobsite standards directly into our shop bays.
              </p>

              <ul className="pt-adv-list">
                <li>
                  <CheckCircle2 size={18} className="text-gold" />
                  <span>OSHA 500 Authorized Construction Trainers</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="text-gold" />
                  <span>NCCER & AWS Certified Master Evaluators</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="text-gold" />
                  <span>Actively Employed Commercial Contractors</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="text-gold" />
                  <span>Average 15+ Years Field Supervisory Experience</span>
                </li>
                <li>
                  <CheckCircle2 size={18} className="text-gold" />
                  <span>1-on-1 Apprenticeship Career Mentorship</span>
                </li>
              </ul>

              <button
                onClick={() => setIsTourOpen(true)}
                className="pt-btn-gold full-w pt-adv-btn"
              >
                <span>MEET INSTRUCTORS IN PERSON</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Real Outcomes. Real Careers. (4 Data Visualizations) */}
      <section className="pt-section pt-outcomes-section" id="outcomes">
        <div className="pt-wrap">
          <div className="pt-section-header">
            <span className="pt-sec-tag">PROVEN IMPACT</span>
            <h2 className="pt-section-title">
              REAL OUTCOMES. <span className="text-gold">REAL CAREERS.</span>
            </h2>
            <p className="pt-sec-subtitle">
              Verified graduate placement figures independently tracked by our career development office.
            </p>
          </div>

          <div className="pt-outcomes-grid">
            {/* Box 1: Job Placement Rate */}
            <div className="pt-outcome-card">
              <small className="pt-out-label">JOB PLACEMENT RATE</small>
              <div className="pt-out-val-row">
                <strong className="text-gold">92%</strong>
                <span className="text-muted">of graduates placed into career jobs within 6 months</span>
              </div>
              <div className="pt-bar-visual-stack">
                <div className="pt-v-bar" style={{ height: "45%" }} title="30 Days: 45%" />
                <div className="pt-v-bar" style={{ height: "60%" }} title="60 Days: 60%" />
                <div className="pt-v-bar" style={{ height: "70%" }} title="90 Days: 70%" />
                <div className="pt-v-bar" style={{ height: "82%" }} title="120 Days: 82%" />
                <div className="pt-v-bar active" style={{ height: "92%" }} title="180 Days: 92%" />
              </div>
            </div>

            {/* Box 2: Average Wage Growth */}
            <div className="pt-outcome-card">
              <small className="pt-out-label">AVERAGE SALARY INCREASE</small>
              <div className="pt-out-val-row">
                <strong className="text-gold">$18,400</strong>
                <span className="text-muted">average wage jump within 24 months of program completion</span>
              </div>
              <div className="pt-line-growth-visual">
                <TrendingUp size={42} className="text-gold" />
                <span className="pt-growth-tag">+42% Verified Income Growth</span>
              </div>
            </div>

            {/* Box 3: Certification Pass Rate */}
            <div className="pt-outcome-card">
              <small className="pt-out-label">FIRST-TIME PASS RATE</small>
              <div className="pt-out-val-row">
                <strong className="text-gold">96%</strong>
                <span className="text-muted">first-time pass rate on AWS D1.1, EPA 608 & NCCER exams</span>
              </div>
              <div className="pt-donut-gauge-wrap">
                <div className="pt-donut-gauge">
                  <strong>96%</strong>
                </div>
              </div>
            </div>

            {/* Box 4: Top Employers Hiring Our Grads */}
            <div className="pt-outcome-card pt-employers-card">
              <small className="pt-out-label">FEATURED EMPLOYER HIRING PARTNERS</small>
              <div className="pt-partner-logos-grid">
                <span className="pt-logo-badge">ABB</span>
                <span className="pt-logo-badge">EMERSON</span>
                <span className="pt-logo-badge">CATERPILLAR</span>
                <span className="pt-logo-badge">TRANE</span>
                <span className="pt-logo-badge">TURNER</span>
                <span className="pt-logo-badge">JOHNSON CONTROLS</span>
                <span className="pt-logo-badge">EATON</span>
                <span className="pt-logo-badge">ROSENDIN</span>
              </div>
              <div className="pt-more-partners-note">AND 150+ COMMERCIAL CONTRACTORS</div>
            </div>
          </div>
        </div>
      </section>

      {/* Your Enrollment Journey (6 Steps) */}
      <section className="pt-section pt-enroll-flow-section">
        <div className="pt-wrap">
          <div className="pt-section-header text-center">
            <span className="pt-sec-tag">ADMISSIONS ROADMAP</span>
            <h2 className="pt-section-title">YOUR ENROLLMENT JOURNEY</h2>
            <p className="pt-sec-subtitle">A straightforward, supportive 6-step path to starting your trade career.</p>
          </div>

          <div className="pt-enroll-steps-flow">
            <div className="pt-e-step">
              <div className="pt-e-icon">
                <Search size={22} />
              </div>
              <h4>1. EXPLORE PROGRAM</h4>
              <p>Find the right trade that matches your salary and hands-on career goals.</p>
            </div>

            <div className="pt-e-arrow">➔</div>

            <div className="pt-e-step">
              <div className="pt-e-icon">
                <Phone size={22} />
              </div>
              <h4>2. SPEAK WITH ADVISOR</h4>
              <p>Get personalized guidance on schedule options, grants, and financing.</p>
            </div>

            <div className="pt-e-arrow">➔</div>

            <div className="pt-e-step">
              <div className="pt-e-icon">
                <Building size={22} />
              </div>
              <h4>3. TOUR CAMPUS & LABS</h4>
              <p>Walk through live bays, inspect heavy equipment, and meet instructors.</p>
            </div>

            <div className="pt-e-arrow">➔</div>

            <div className="pt-e-step">
              <div className="pt-e-icon">
                <FileText size={22} />
              </div>
              <h4>4. SUBMIT APPLICATION</h4>
              <p>Quick 2-minute form with no essay requirements or application fees.</p>
            </div>

            <div className="pt-e-arrow">➔</div>

            <div className="pt-e-step">
              <div className="pt-e-icon">
                <Wrench size={22} />
              </div>
              <h4>5. START SHOP TRAINING</h4>
              <p>Receive your professional tool package, PPE, and begin cohort labs.</p>
            </div>

            <div className="pt-e-arrow">➔</div>

            <div className="pt-e-step">
              <div className="pt-e-icon">
                <Trophy size={22} />
              </div>
              <h4>6. LAUNCH YOUR CAREER</h4>
              <p>Interview directly with regional employers through our hiring network.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Hear From Our Students (3 Review Cards with Real Graduate Headshots) */}
      <section className="pt-section pt-testimonials-section">
        <div className="pt-wrap">
          <div className="pt-section-header text-center">
            <span className="pt-sec-tag">GRADUATE VOICES</span>
            <h2 className="pt-section-title">HEAR FROM OUR STUDENTS</h2>
            <p className="pt-sec-subtitle">Real people who transformed their financial future with trade skills.</p>
          </div>

          <div className="pt-testimonials-grid">
            <div className="pt-test-card">
              <div className="pt-test-badge">PLACED AT TURNER INDUSTRIES</div>
              <p className="pt-test-quote">
                “ProTrack Trades gave me the skills and confidence to pass my AWS 3G/4G structural bend tests on the first try. Within 3 weeks of finishing, I was working on commercial high-rises making $38 an hour.”
              </p>
              <div className="pt-test-author-row">
                <img
                  src={studentCarlosImg}
                  alt="Carlos M., Welding Graduate"
                  className="pt-student-avatar"
                />
                <div>
                  <strong>Carlos M.</strong>
                  <small>Welding & Fabrication Graduate</small>
                </div>
              </div>
            </div>

            <div className="pt-test-card">
              <div className="pt-test-badge">PLACED AT ROSENDIN ELECTRIC</div>
              <p className="pt-test-quote">
                “The commercial electrical bays with 3-phase switchgear gave me real confidence. When I walked onto my first jobsite, I already knew the conduit benders, Fluke meters, and safety codes inside out.”
              </p>
              <div className="pt-test-author-row">
                <img
                  src={studentJasmineImg}
                  alt="Jasmine L., Electrical Graduate"
                  className="pt-student-avatar"
                />
                <div>
                  <strong>Jasmine L.</strong>
                  <small>Electrical Technician Graduate</small>
                </div>
              </div>
            </div>

            <div className="pt-test-card">
              <div className="pt-test-badge">PLACED AT TRANE COMMERCIAL</div>
              <p className="pt-test-quote">
                “I had zero trade experience when I signed up. The evening schedule allowed me to keep my day job while earning my EPA Universal 608. Now I'm a commercial HVAC field technician with full benefits.”
              </p>
              <div className="pt-test-author-row">
                <img
                  src={studentBrandonImg}
                  alt="Brandon T., HVAC Systems Graduate"
                  className="pt-student-avatar"
                />
                <div>
                  <strong>Brandon T.</strong>
                  <small>HVAC Systems Graduate</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Affordable Training. Valuable Investment. (Pricing + Payment Options) */}
      <section className="pt-section pt-pricing-section" id="tuition">
        <div className="pt-wrap">
          <div className="pt-section-header text-center">
            <span className="pt-sec-tag">TRANSPARENT TUITION</span>
            <h2 className="pt-section-title">
              AFFORDABLE TRAINING. <span className="text-gold">VALUABLE INVESTMENT.</span>
            </h2>
            <p className="pt-sec-subtitle">
              All tuition includes complete trade tool set, PPE safety gear, textbooks, lab consumables, and official certification exam vouchers.
            </p>
          </div>

          <div className="pt-pricing-container">
            {/* 3 Pricing Cards */}
            <div className="pt-pricing-tiers">
              {/* Starter Track */}
              <div className="pt-price-card">
                <h3 className="pt-tier-title">STARTER TRACK</h3>
                <span className="pt-tier-sub">Essential core skills to enter the trade</span>
                <div className="pt-tier-amount">
                  <strong>$3,995</strong>
                  <small>4–6 Months Duration</small>
                </div>

                <ul className="pt-tier-list">
                  <li>
                    <Check size={14} className="text-gold" /> Core Trade Theory & Safety
                  </li>
                  <li>
                    <Check size={14} className="text-gold" /> Basic Hands-On Shop Labs
                  </li>
                  <li>
                    <Check size={14} className="text-gold" /> OSHA 10-Hour Exam Voucher
                  </li>
                  <li>
                    <Check size={14} className="text-gold" /> Career Placement Workshop
                  </li>
                </ul>

                <button
                  onClick={() => {
                    setAppForm({ ...appForm, experience: "Starter Track ($3,995)" });
                    setIsApplyOpen(true);
                  }}
                  className="pt-btn-dark full-w"
                >
                  CHOOSE STARTER PLAN
                </button>
              </div>

              {/* Career Track (Best Value) */}
              <div className="pt-price-card best-value">
                <div className="pt-best-value-ribbon">MOST POPULAR</div>
                <h3 className="pt-tier-title">CAREER TRACK</h3>
                <span className="pt-tier-sub">Complete trade mastery for immediate employment</span>
                <div className="pt-tier-amount">
                  <strong>$6,995</strong>
                  <small>6–8 Months Duration</small>
                </div>

                <ul className="pt-tier-list">
                  <li>
                    <Check size={14} className="text-gold" /> <strong>Everything in Starter Track</strong>
                  </li>
                  <li>
                    <Check size={14} className="text-gold" /> Advanced Commercial Lab Bays
                  </li>
                  <li>
                    <Check size={14} className="text-gold" /> AWS / EPA / NCCER Certifications Included
                  </li>
                  <li>
                    <Check size={14} className="text-gold" /> Complete Professional Tool Kit & PPE
                  </li>
                  <li>
                    <Check size={14} className="text-gold" /> Guaranteed Direct Employer Interviews
                  </li>
                </ul>

                <button
                  onClick={() => {
                    setAppForm({ ...appForm, experience: "Career Track ($6,995)" });
                    setIsApplyOpen(true);
                  }}
                  className="pt-btn-gold full-w"
                >
                  CHOOSE CAREER TRACK
                </button>
              </div>

              {/* Advanced Track */}
              <div className="pt-price-card">
                <h3 className="pt-tier-title">ADVANCED TECH TRACK</h3>
                <span className="pt-tier-sub">Specialized multi-certification mastery</span>
                <div className="pt-tier-amount">
                  <strong>$8,995</strong>
                  <small>8–12 Months Duration</small>
                </div>

                <ul className="pt-tier-list">
                  <li>
                    <Check size={14} className="text-gold" /> <strong>Everything in Career Track</strong>
                  </li>
                  <li>
                    <Check size={14} className="text-gold" /> Industrial PLC & Automation Modules
                  </li>
                  <li>
                    <Check size={14} className="text-gold" /> Multi-Process Master Certifications
                  </li>
                  <li>
                    <Check size={14} className="text-gold" /> 1-on-1 Master Contractor Mentorship
                  </li>
                  <li>
                    <Check size={14} className="text-gold" /> Lifetime Career Placement Guarantee
                  </li>
                </ul>

                <button
                  onClick={() => {
                    setAppForm({ ...appForm, experience: "Advanced Tech Track ($8,995)" });
                    setIsApplyOpen(true);
                  }}
                  className="pt-btn-dark full-w"
                >
                  CHOOSE ADVANCED TRACK
                </button>
              </div>
            </div>

            {/* Right Payment Options Card */}
            <div className="pt-payment-options-card">
              <h3 className="text-gold">FLEXIBLE FINANCING & AID</h3>
              <p className="pt-pay-desc">
                We believe financial constraints should never stand between you and a high-paying trade career.
              </p>

              <ul className="pt-pay-list">
                <li>
                  <CheckCircle2 size={16} className="text-gold" />
                  <div>
                    <strong>0% Interest Monthly Installments</strong>
                    <small>Spread payments evenly across your training months.</small>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-gold" />
                  <div>
                    <strong>Need-Based Tuition Grants</strong>
                    <small>Scholarships awarded based on career commitment.</small>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-gold" />
                  <div>
                    <strong>Employer Tuition Sponsorship</strong>
                    <small>Over 40 contractor partners will reimburse tuition upon hire.</small>
                  </div>
                </li>
                <li>
                  <CheckCircle2 size={16} className="text-gold" />
                  <div>
                    <strong>GI Bill® & Veteran Approved</strong>
                    <small>Full benefits accepted for active military transitions & veterans.</small>
                  </div>
                </li>
              </ul>

              <button
                onClick={() => setIsApplyOpen(true)}
                className="pt-btn-gold full-w pt-pay-action-btn"
              >
                <span>CALCULATE MY AID OPTIONS</span>
                <ArrowRight size={15} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="pt-section pt-faq-section" id="faq">
        <div className="pt-wrap">
          <div className="pt-section-header text-center">
            <span className="pt-sec-tag">COMMON QUESTIONS</span>
            <h2 className="pt-section-title">FREQUENTLY ASKED QUESTIONS</h2>
            <p className="pt-sec-subtitle">
              Have questions about schedules, credentials, or starting out? We have answers.
            </p>
          </div>

          <div className="pt-faq-grid">
            {tradeFaqs.map((faq, idx) => (
              <div
                key={faq.q}
                className={`pt-faq-card ${openFaq === idx ? "open" : ""}`}
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                <div className="pt-faq-q">
                  <span>{faq.q}</span>
                  <span className="pt-faq-plus text-gold">{openFaq === idx ? "−" : "+"}</span>
                </div>
                {openFaq === idx && (
                  <div className="pt-faq-a">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="pt-banner-section">
        <div className="pt-wrap pt-banner-card">
          <div className="pt-banner-text-col">
            <span className="pt-sec-tag">YOUR CAREER AWAITS</span>
            <h2>
              YOUR FUTURE IS <br />
              BUILT BY <span className="text-gold">YOU.</span>
            </h2>
            <p>
              We provide the heavy equipment, master instructors, and employer network. You bring the drive. Classes start June 2, 2025.
            </p>

            <div className="pt-banner-btn-row">
              <button
                onClick={() => {
                  setSelectedProgram(null);
                  setIsApplyOpen(true);
                }}
                className="pt-btn-gold"
              >
                <span>APPLY NOW FOR JUNE COHORT</span>
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => setIsTourOpen(true)}
                className="pt-btn-dark"
              >
                <span>BOOK A CAMPUS & SHOP TOUR</span>
              </button>
            </div>
          </div>

          <div className="pt-banner-img-col">
            <img
              src={bannerWorkshopImg}
              alt="High-tech electrical and mechanical facility at ProTrack Trades"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-footer">
        <div className="pt-wrap pt-footer-grid">
          <div className="pt-footer-col pt-footer-brand">
            <div className="pt-brand">
              <ProTrackLogo size={30} />
              <div className="pt-brand-text">
                <span className="pt-brand-title">PROTRACK</span>
                <span className="pt-brand-sub">TRADES</span>
              </div>
            </div>
            <p className="pt-footer-desc">
              Accredited commercial skilled trades academy. Hands-on labs, nationally recognized industry credentials, small cohorts, and 92% job placement.
            </p>
            <div className="pt-footer-socials">
              <a href="#top" aria-label="Facebook">f</a>
              <a href="#top" aria-label="Instagram">📷</a>
              <a href="#top" aria-label="LinkedIn">in</a>
              <a href="#top" aria-label="YouTube">▶</a>
            </div>
          </div>

          <div className="pt-footer-col">
            <h4>TRADE PROGRAMS</h4>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Electrical Technician</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>HVAC Systems Specialist</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Welding & Fabrication</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Plumbing Fundamentals</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Construction Management</a>
            <a href="#programs" onClick={(e) => handleNavClick(e, "#programs")}>Industrial Maintenance</a>
          </div>

          <div className="pt-footer-col">
            <h4>RESOURCES & LABS</h4>
            <a href="#wage-calc" onClick={(e) => handleNavClick(e, "#wage-calc")}>Wage & ROI Calculator</a>
            <a href="#labs" onClick={(e) => handleNavClick(e, "#labs")}>Hands-On Lab Spaces</a>
            <a href="#curriculum" onClick={(e) => handleNavClick(e, "#curriculum")}>Curriculum Journey</a>
            <a href="#tuition" onClick={(e) => handleNavClick(e, "#tuition")}>Tuition & Financial Aid</a>
            <a href="#outcomes" onClick={(e) => handleNavClick(e, "#outcomes")}>Graduate Outcomes</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")}>Accreditation & FAQ</a>
          </div>

          <div className="pt-footer-col">
            <h4>CAMPUS & ADMISSIONS</h4>
            <a href="#instructors" onClick={(e) => handleNavClick(e, "#instructors")}>Master Instructors</a>
            <a href="#outcomes" onClick={(e) => handleNavClick(e, "#outcomes")}>150+ Employer Network</a>
            <a href="#schedule" onClick={(e) => handleNavClick(e, "#schedule")}>Shift Schedule Options</a>
            <a href="#tuition" onClick={(e) => handleNavClick(e, "#tuition")}>GI Bill® & Veterans</a>
            <a href="#faq" onClick={(e) => handleNavClick(e, "#faq")}>Safety Compliance</a>
          </div>

          <div className="pt-footer-col pt-footer-subscribe">
            <h4>STAY CONNECTED</h4>
            <p>Get notification of upcoming cohort deadlines and commercial contractor open houses.</p>
            <div className="pt-subscribe-form">
              <input type="email" placeholder="Enter your email" />
              <button type="button" className="pt-btn-gold">SUBSCRIBE</button>
            </div>
            <div className="pt-contact-info-mini">
              <div>
                <Phone size={13} className="text-gold" /> (555) 123-4567
              </div>
              <div>
                <Mail size={13} className="text-gold" /> admissions@protracktrades.com
              </div>
              <div>
                <MapPin size={13} className="text-gold" /> 742 Industrial Blvd, Houston, TX 77001
              </div>
            </div>
          </div>
        </div>

        <div className="pt-footer-bottom">
          <div className="pt-wrap pt-footer-bottom-inner">
            <p>© 2025 ProTrack Trades Academy. All rights reserved. NCCER & AWS Accredited.</p>
            <div className="pt-footer-legal-links">
              <a href="#top">Privacy Policy</a>
              <span>•</span>
              <a href="#top">Terms of Service</a>
              <span>•</span>
              <a href="#top">Consumer Disclosures</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY QUICK ACTION BAR */}
      <div className="pt-mobile-bottom-bar">
        <a href="tel:5551234567" className="pt-mobile-bar-btn pt-bar-call">
          <Phone size={16} />
          <span>Call Us</span>
        </a>
        <button
          onClick={() => {
            setSelectedProgram(null);
            setIsTourOpen(true);
          }}
          className="pt-mobile-bar-btn pt-bar-tour"
        >
          <Building size={16} />
          <span>Book Tour</span>
        </button>
        <button
          onClick={() => {
            setSelectedProgram(null);
            setIsApplyOpen(true);
          }}
          className="pt-mobile-bar-btn pt-bar-apply"
        >
          <span>Apply Now</span>
          <ArrowRight size={16} />
        </button>
      </div>

      {/* Trade Program Detail Modal */}
      {selectedProgram && (
        <div
          className="pt-modal-backdrop"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="pt-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="pt-modal-close"
              onClick={() => setSelectedProgram(null)}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            <div className="pt-modal-header">
              <span className="pt-prog-category-badge">{selectedProgram.category}</span>
              <h2>{selectedProgram.title}</h2>
              <p>{selectedProgram.desc}</p>
            </div>

            <div className="pt-modal-meta-grid">
              <div>
                <strong>Duration:</strong> {selectedProgram.duration}
              </div>
              <div>
                <strong>Skill Level:</strong> {selectedProgram.level}
              </div>
              <div>
                <strong>Next Cohort:</strong> {selectedProgram.nextStart}
              </div>
              <div>
                <strong>Starting Wage:</strong> <span className="text-gold">{selectedProgram.startingWage}</span>
              </div>
            </div>

            <h4>Industry Certifications Included:</h4>
            <ul className="pt-modal-cert-list">
              {selectedProgram.certifications.map((c: string) => (
                <li key={c}>
                  <Check size={16} className="text-gold" /> {c}
                </li>
              ))}
            </ul>

            <button
              onClick={() => {
                const title = selectedProgram.title;
                setSelectedProgram(null);
                setAppForm({ ...appForm, trade: title });
                setIsApplyOpen(true);
              }}
              className="pt-btn-gold full-w"
            >
              APPLY FOR {selectedProgram.title}
            </button>
          </div>
        </div>
      )}

      {/* Apply / Tour Modal */}
      {(isApplyOpen || isTourOpen) && (
        <div
          className="pt-modal-backdrop"
          onClick={() => {
            setIsApplyOpen(false);
            setIsTourOpen(false);
          }}
        >
          <div
            className="pt-modal-card"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <button
              className="pt-modal-close"
              onClick={() => {
                setIsApplyOpen(false);
                setIsTourOpen(false);
              }}
              aria-label="Close dialog"
            >
              <X size={20} />
            </button>

            {!formSubmitted ? (
              <>
                <div className="pt-modal-header">
                  <h2>{isApplyOpen ? "APPLY FOR NEXT COHORT" : "BOOK A CAMPUS & SHOP TOUR"}</h2>
                  <p>
                    {isApplyOpen
                      ? "Submit your application in 2 minutes. Limited shop benches per cohort."
                      : "Walk through our real training labs, meet master instructors, and inspect our heavy commercial equipment."}
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="pt-modal-form">
                  <div className="pt-form-group">
                    <label>Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Marcus Vance"
                      value={appForm.name}
                      onChange={(e) => setAppForm({ ...appForm, name: e.target.value })}
                    />
                  </div>

                  <div className="pt-form-2col">
                    <div className="pt-form-group">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="marcus@example.com"
                        value={appForm.email}
                        onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                      />
                    </div>
                    <div className="pt-form-group">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        required
                        placeholder="(555) 000-0000"
                        value={appForm.phone}
                        onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="pt-form-2col">
                    <div className="pt-form-group">
                      <label>Desired Trade Program</label>
                      <select
                        value={appForm.trade}
                        onChange={(e) => setAppForm({ ...appForm, trade: e.target.value })}
                      >
                        <option value="Electrical Technician">Electrical Technician (6 Mo)</option>
                        <option value="HVAC Systems Specialist">HVAC Systems Specialist (8 Mo)</option>
                        <option value="Welding & Fabrication">Welding & Fabrication (6 Mo)</option>
                        <option value="Plumbing Fundamentals">Plumbing Fundamentals (6 Mo)</option>
                        <option value="Construction Management">Construction Management (8 Mo)</option>
                        <option value="Industrial Maintenance">Industrial Maintenance (8 Mo)</option>
                      </select>
                    </div>
                    <div className="pt-form-group">
                      <label>Preferred Shift</label>
                      <select
                        value={appForm.shift}
                        onChange={(e) => setAppForm({ ...appForm, shift: e.target.value })}
                      >
                        <option value="Evening Schedule (5:00 PM – 9:45 PM)">Evening Schedule (5:00 PM – 9:45 PM)</option>
                        <option value="Day Schedule (8:00 AM – 1:30 PM)">Day Schedule (8:00 AM – 1:30 PM)</option>
                        <option value="Weekend Intensive (Sat/Sun 8 AM – 4 PM)">Weekend Intensive (Sat/Sun 8 AM – 4 PM)</option>
                      </select>
                    </div>
                  </div>

                  <button type="submit" className="pt-btn-gold full-w">
                    {isApplyOpen ? "SUBMIT APPLICATION" : "CONFIRM TOUR RESERVATION"}
                  </button>

                  <div className="pt-form-privacy">
                    <Lock size={12} />
                    <span>Your information is strictly protected and never shared.</span>
                  </div>
                </form>
              </>
            ) : (
              <div className="pt-modal-success">
                <CheckCircle2 size={54} className="text-gold" />
                <h3>APPLICATION RECEIVED!</h3>
                <p>
                  Thank you <strong>{appForm.name}</strong>! An admissions officer has been assigned to your profile and sent next steps to <strong>{appForm.email}</strong>.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setIsApplyOpen(false);
                    setIsTourOpen(false);
                  }}
                  className="pt-btn-gold full-w"
                >
                  DONE
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}

export default ProTrackTrades;
