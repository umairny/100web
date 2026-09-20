import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  AlertTriangle,
  ArrowRight,
  Award,
  Calendar,
  CalendarCheck,
  CheckCircle,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  Flame,
  Gauge,
  Heart,
  HeartPulse,
  HelpCircle,
  Info,
  MapPin,
  Menu,
  Pause,
  Phone,
  Play,
  RotateCcw,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  TrendingUp,
  UserCheck,
  Users,
  X,
  Zap,
} from "lucide-react";
import { Container } from "../../components";
import { imageUrl } from "../../assets/optimized";

// Navigation links strictly aligned with DOM section order
const navLinks = [
  {
    id: "services",
    label: "Services",
    fullLabel: "Clinical Services",
    desc: "Preventative, arrhythmia & structural heart",
    href: "#services",
    icon: HeartPulse,
  },
  {
    id: "diagnostics",
    label: "Diagnostics",
    fullLabel: "Diagnostic Suite",
    desc: "ECG, 14-day Holter, Echo & CT calcium",
    href: "#diagnostics",
    icon: Activity,
  },
  {
    id: "symptom-navigator",
    label: "Symptoms",
    fullLabel: "Cardiac Symptom Navigator",
    desc: "Interactive chest pain & rhythm guide",
    href: "#symptom-navigator",
    icon: Gauge,
  },
  {
    id: "care-pathway",
    label: "Pathway",
    fullLabel: "4-Stage Care Pathway",
    desc: "From symptom assessment to lifetime health",
    href: "#care-pathway",
    icon: TrendingUp,
  },
  {
    id: "specialists",
    label: "Cardiologists",
    fullLabel: "Board-Certified Cardiologists",
    desc: "Fellows of ACC & SCAI specialists",
    href: "#specialists",
    icon: Award,
  },
  {
    id: "clinic-tech",
    label: "Facility",
    fullLabel: "Diagnostic Center & Lab",
    desc: "Reassuring setting with accredited imaging",
    href: "#clinic-tech",
    icon: ShieldCheck,
  },
  {
    id: "insurance",
    label: "Insurance",
    fullLabel: "In-Network Insurance",
    desc: "Medicare, BCBS, Aetna, Cigna & United",
    href: "#insurance",
    icon: FileText,
  },
  {
    id: "reviews",
    label: "Stories",
    fullLabel: "Patient Heart Stories",
    desc: "4.97 rating across 920+ cardiac patients",
    href: "#reviews",
    icon: Star,
  },
  {
    id: "risk-screener",
    label: "Risk Screener",
    fullLabel: "Heart Risk Screener",
    desc: "30-second cardiovascular triage check",
    href: "#risk-screener",
    icon: HelpCircle,
  },
];

// Full-Page Interactive Hero Carousel Slides
const heroSlides = [
  {
    id: "comprehensive",
    tag: "Board-Certified Cardiology Care",
    tagIcon: HeartPulse,
    title: "Clear heart answers.",
    highlight: "Precision cardiology",
    afterHighlight: "built for peace of mind.",
    description:
      "Replacing rushed 7-minute visits with unhurried 45-minute specialist consultations, same-day diagnostic testing, and comprehensive plaque interception led by board-certified cardiologists.",
    image: "medical/pulseheart/hero.webp",
    primaryCta: "Schedule Consultation",
    secondaryCta: "Explore Clinical Services",
    secondaryHref: "#services",
    badgeLabel: "FACC Fellowship Certified",
    badgeDesc: "Dr. Adrian Cole & Dr. Nina Patel",
    stats: [
      { value: "45 Min", label: "Unhurried Physician Visits" },
      { value: "Same-Day", label: "Diagnostic Testing" },
      { value: "100%", label: "In-Network Medicare & PPO" },
    ],
    telemetry: {
      title: "Resting Telemetry",
      value: "Normal Sinus Rhythm · 72 BPM",
      status: "Stable QRS",
    },
  },
  {
    id: "arrhythmia",
    tag: "Cardiac Electrophysiology Surveillance",
    tagIcon: Activity,
    title: "Catch silent arrhythmias.",
    highlight: "Continuous 14-day",
    afterHighlight: "waterproof Holter monitoring.",
    description:
      "Detect paroxysmal AFib, flutter, and palpitations with lightweight wearable patch telemetry. AI-assisted analysis reviewed personally by board-certified electrophysiology specialists.",
    image: "medical/pulseheart/ecg.webp",
    primaryCta: "Evaluate Heart Rhythm",
    secondaryCta: "Symptom Navigator",
    secondaryHref: "#symptom-navigator",
    badgeLabel: "Arrhythmia Interception",
    badgeDesc: "Zero downtime waterproof patch",
    stats: [
      { value: "99.4%", label: "Arrhythmia Detection Rate" },
      { value: "14 Days", label: "Continuous ECG Recording" },
      { value: "24-48 Hr", label: "Clinical Report Turnaround" },
    ],
    telemetry: {
      title: "Holter Surveillance",
      value: "No Pauses · Normal PR Interval",
      status: "Active Tracking",
    },
  },
  {
    id: "imaging",
    tag: "IAC-Accredited Diagnostic Ultrasound",
    tagIcon: ShieldCheck,
    title: "See inside arterial health.",
    highlight: "High-resolution echo",
    afterHighlight: "and low-dose CT calcium.",
    description:
      "State-of-the-art Transthoracic Echocardiogram (TTE), carotid Doppler flow analysis, and ultra-fast CT Coronary Artery Calcium scoring in a calm, outpatient setting with warm acoustic gel.",
    image: "medical/pulseheart/diagnostic-clarity.webp",
    primaryCta: "Book Diagnostic Testing",
    secondaryCta: "View Diagnostic Suite",
    secondaryHref: "#diagnostics",
    badgeLabel: "IAC Accredited Lab",
    badgeDesc: "Zero-contrast ultra-fast CAC scan",
    stats: [
      { value: "0.01 mL", label: "Doppler Measurement Precision" },
      { value: "< 1 mSv", label: "Ultra Low Radiation CAC" },
      { value: "100%", label: "Board-Certified Sonographers" },
    ],
    telemetry: {
      title: "Echocardiography Doppler",
      value: "LVEF 62% · Normal Wall Motion",
      status: "Verified IAC",
    },
  },
  {
    id: "prevention",
    tag: "Cardiovascular Longevity & Prevention",
    tagIcon: Sparkles,
    title: "Stop arterial plaque.",
    highlight: "Prevent heart attacks",
    afterHighlight: "decades before they happen.",
    description:
      "Advanced Apolipoprotein B (ApoB), Lipoprotein(a), and guideline-directed medical therapies designed to halt and reverse calcified plaque progression for adults with elevated genetic risk.",
    image: "medical/pulseheart/heart-screening.webp",
    primaryCta: "Check Cardiovascular Risk",
    secondaryCta: "Meet Our Specialists",
    secondaryHref: "#specialists",
    badgeLabel: "Plaque Stabilization",
    badgeDesc: "Targeted ApoB & Lipoprotein(a)",
    stats: [
      { value: "ApoB < 60", label: "Target Prevention Goal" },
      { value: "MESA", label: "10-Year Risk Stratification" },
      { value: "4.97 ★", label: "920+ Patient Reviews" },
    ],
    telemetry: {
      title: "Lipidology & Prevention",
      value: "ApoB Optimized · Plaque Halted",
      status: "Low Risk",
    },
  },
];

// Interactive Cardiac Symptom & Condition Navigator Data
const cardiacSymptoms = [
  {
    id: "chest-discomfort",
    title: "Chest Pressure & Angina",
    urgency: "Requires Immediate Clinical Triage",
    badgeColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    overview:
      "A sensation of squeezing, tightness, heaviness, or burning across the center or left side of the chest that may radiate to the shoulder, neck, jaw, or left arm. Often exacerbated by physical exertion or stress.",
    commonCauses: [
      "Coronary Artery Disease (CAD) & Ischemia",
      "Microvascular Angina & Coronary Spasm",
      "Pericardial Inflammation (Pericarditis)",
      "Aortic Valve Stenosis",
    ],
    recommendedTests: [
      "12-Lead Electrocardiogram (ECG / EKG)",
      "High-Sensitivity Troponin Biomarkers",
      "Exercise Treadmill Stress Echocardiogram",
      "Coronary CT Angiography (CCTA)",
    ],
    specialistLead: "Dr. Adrian Cole, MD, FACC",
    statMetric: "15 Min",
    statDesc: "Door-to-ECG emergency baseline guarantee",
    image: "medical/pulseheart/specialist-consultation.webp",
  },
  {
    id: "palpitations",
    title: "Palpitations & Arrhythmias",
    urgency: "Specialist Rhythm Evaluation",
    badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
    overview:
      "Awareness of fluttering, skipping, racing, or pounding heartbeats. Episodes can last seconds to hours and may be accompanied by mild lightheadedness, fatigue, or breathlessness.",
    commonCauses: [
      "Atrial Fibrillation (AFib) & Atrial Flutter",
      "Premature Ventricular Contractions (PVCs)",
      "Supraventricular Tachycardia (SVT)",
      "Sinus Tachycardia / Autonomic Dysregulation",
    ],
    recommendedTests: [
      "14-Day Waterproof Continuous Holter Patch",
      "Transthoracic Echocardiogram (TTE)",
      "Serum Electrolyte & Thyroid Panel",
      "Electrophysiology (EP) Study Consultation",
    ],
    specialistLead: "Dr. Nina Patel, MD, FACC",
    statMetric: "99.4%",
    statDesc: "Arrhythmia detection rate on 14-day Holter patch",
    image: "medical/pulseheart/ecg.webp",
  },
  {
    id: "shortness-breath",
    title: "Exertional Shortness of Breath",
    urgency: "Hemodynamic Assessment Needed",
    badgeColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    overview:
      "Difficulty catching your breath during routine physical activities like climbing stairs, walking uphill, or carrying groceries. May also manifest as breathlessness when lying flat (orthopnea).",
    commonCauses: [
      "Heart Failure with Preserved Ejection Fraction (HFpEF)",
      "Valvular Heart Disease (Mitral or Aortic Regurgitation)",
      "Elevated Pulmonary Arterial Pressure",
      "Coronary Ischemia Equivalent",
    ],
    recommendedTests: [
      "Comprehensive Transthoracic Doppler Echo",
      "NT-proBNP Neurohormonal Biomarker",
      "Cardiopulmonary Exercise Testing (CPET)",
      "Resting Multi-Lead ECG",
    ],
    specialistLead: "Dr. Adrian Cole, MD, FACC",
    statMetric: "0.01 mL",
    statDesc: "Ejection fraction measurement precision",
    image: "medical/pulseheart/diagnostic-clarity.webp",
  },
  {
    id: "hypertension",
    title: "Resistant High Blood Pressure",
    urgency: "Vascular Health & Stroke Prevention",
    badgeColor: "bg-indigo-500/20 text-indigo-300 border-indigo-500/30",
    overview:
      "Persistently elevated systolic pressure (>130 mmHg) despite dual lifestyle changes or medication. Uncontrolled hypertension silently strains heart muscle walls and stiffens peripheral arteries.",
    commonCauses: [
      "Essential Vascular Hypertension",
      "Renal Artery Atherosclerosis",
      "Obstructive Sleep Apnea-Induced Surges",
      "Endothelial Vascular Stiffening",
    ],
    recommendedTests: [
      "24-Hour Ambulatory Blood Pressure Monitor (ABPM)",
      "Carotid Intima-Media Thickness (CIMT) Ultrasound",
      "Microalbuminuria & Comprehensive Metabolic Panel",
      "Left Ventricular Hypertrophy (LVH) Echo Screen",
    ],
    specialistLead: "Grace Morgan, MSN, CRNP",
    statMetric: "24-Hour",
    statDesc: "Circadian nocturnal dipping profile analysis",
    image: "medical/pulseheart/heart-screening.webp",
  },
  {
    id: "prevention-risk",
    title: "Family History & Preventative Screen",
    urgency: "Early Risk Interception",
    badgeColor: "bg-emerald-500/20 text-emerald-300 border-emerald-500/30",
    overview:
      "For proactive adults with a family history of premature heart attack, elevated Lipoprotein(a), or high cholesterol who want to intercept calcified plaque buildup decades before any symptom develops.",
    commonCauses: [
      "Apolipoprotein B (ApoB) & LDL Particle Overload",
      "Genetically Elevated Lipoprotein(a) [Lp(a)]",
      "Early Coronary Micro-Calcification",
      "Metabolic Syndrome & Insulin Resistance",
    ],
    recommendedTests: [
      "Low-Dose CT Coronary Artery Calcium (CAC) Scoring",
      "Advanced Advanced Lipid Subfractionation & ApoB",
      "High-Sensitivity C-Reactive Protein (hs-CRP)",
      "Lifetime MESA 10-Year Risk Stratification",
    ],
    specialistLead: "Dr. Nina Patel, MD, FACC",
    statMetric: "0 Radiation",
    statDesc: "Zero-contrast ultra-fast CAC scan (<1 mSv)",
    image: "medical/pulseheart/patient-resources.webp",
  },
];

// Asymmetrical Clinical Services Bento Data
const clinicalServices = [
  {
    id: "general-consult",
    title: "Comprehensive Clinical Cardiology",
    subtitle: "Flagship Specialist Care",
    tag: "Primary Clinical Focus",
    tagColor: "bg-rose-500/20 text-rose-300 border-rose-500/30",
    desc: "Unrushed 45-minute specialist consultations focused on root-cause diagnosis of heart murmurs, chest pain, unmanaged cholesterol, and personalized cardiovascular health roadmaps.",
    details: [
      "Complete cardiovascular risk profile & lifestyle audit",
      "Medication optimization & polypharmacy minimization",
      "Direct coordination with primary care physicians",
      "Same-day diagnostic ECG and baseline vital panels",
    ],
    accentGradient: "from-[#1a0c12] via-[#24111a] to-[#0c1828]",
    featured: true,
  },
  {
    id: "arrhythmia-ep",
    title: "Heart Rhythm & Electrophysiology",
    subtitle: "Arrhythmia Management",
    tag: "Advanced Tech",
    tagColor: "bg-cyan-500/20 text-cyan-300 border-cyan-500/30",
    desc: "Specialized detection, medication management, and catheter ablation referral planning for Atrial Fibrillation, SVT, ventricular ectopy, and unexplained syncopal fainting episodes.",
    details: [
      "14-day continuous telemetry patch monitoring",
      "Direct oral anticoagulant (DOAC) management",
      "Pacemaker & ICD interrogation and checks",
    ],
    accentGradient: "from-white to-slate-50",
    featured: false,
  },
  {
    id: "preventative-lipid",
    title: "Preventative Cardiology & Advanced Lipids",
    subtitle: "Atherosclerosis Interception",
    tag: "Proactive Health",
    tagColor: "bg-emerald-500/20 text-emerald-700 border-emerald-500/30",
    desc: "Beyond traditional total cholesterol: we measure ApoB particle counts, Lipoprotein(a), and plaque inflammation to arrest and reverse vascular soft plaque deposition.",
    details: [
      "ApoB, Lp(a), and hs-CRP biomarker profiling",
      "PCSK9 inhibitor & novel lipid therapy protocols",
      "Cardiovascular nutrition & exercise prescription",
    ],
    accentGradient: "from-white to-slate-50",
    featured: false,
  },
  {
    id: "heart-failure",
    title: "Heart Failure & Cardiomyopathy Care",
    subtitle: "Hemodynamic Stabilization",
    tag: "Specialized Care",
    tagColor: "bg-amber-500/20 text-amber-800 border-amber-500/30",
    desc: "Modern GDMT (Guideline-Directed Medical Therapy) optimization to strengthen cardiac pump function, relieve fluid retention, and eliminate hospital readmissions.",
    details: [
      "Ejection fraction tracking with strain echocardiography",
      "SGLT2 inhibitors, ARNIs, and mineralocorticoid therapy",
      "Remote biometric weight & symptom monitoring",
    ],
    accentGradient: "from-white to-slate-50",
    featured: false,
  },
  {
    id: "structural-valvular",
    title: "Valvular & Structural Heart Disease",
    subtitle: "Hemodynamic Precision",
    tag: "Interventional Team",
    tagColor: "bg-purple-500/20 text-purple-700 border-purple-500/30",
    desc: "Specialist surveillance and interventional planning for aortic stenosis, mitral valve prolapse, tricuspid regurgitation, and congenital bicuspid valve conditions.",
    details: [
      "High-resolution color Doppler valve gradient velocity",
      "TAVR and MitraClip minimally invasive screening",
      "Exercise stress hemodynamics for latent symptoms",
    ],
    accentGradient: "from-white to-slate-50",
    featured: false,
  },
  {
    id: "womens-cardio",
    title: "Women's Cardiovascular Health Program",
    subtitle: "Gender-Specific Biology",
    tag: "Specialized Clinical Track",
    tagColor: "bg-pink-500/20 text-pink-700 border-pink-500/30",
    desc: "Addressing unique female cardiovascular risks including microvascular angina, SCAD (spontaneous coronary artery dissection), pregnancy-related hypertension, and post-menopausal vascular stiffening.",
    details: [
      "Evaluation of non-obstructive coronary disease (INOCA)",
      "Preeclampsia and gestational diabetes history review",
      "Cardio-oncology surveillance during chemotherapy",
    ],
    accentGradient: "from-white to-slate-50",
    featured: false,
  },
];

// Non-Invasive Diagnostic Testing Modalities
const diagnosticModalityCards = [
  {
    name: "12-Lead Diagnostic Electrocardiogram (ECG)",
    time: "10 Minutes",
    prep: "No preparation required · Same-day walk-ins",
    purpose: "Instantly captures heart electrical vectors, conduction delays, ischemic ST shifts, and baseline cardiac rhythms with hospital-grade clarity.",
    icon: Activity,
    badge: "Immediate Result",
  },
  {
    name: "Comprehensive Transthoracic Echocardiogram (TTE)",
    time: "40 Minutes",
    prep: "Wear comfortable clothing · Zero radiation",
    purpose: "Uses high-frequency acoustic ultrasound waves to create dynamic 3D video of heart chambers, pumping ejection fraction, and Doppler valve flow.",
    icon: HeartPulse,
    badge: "Accredited Lab",
  },
  {
    name: "14-Day Waterproof Continuous Holter Patch",
    time: "Continuous 24/7",
    prep: "Waterproof · Shower, work & exercise freely",
    purpose: "A featherlight wireless sensor applied to the chest that continuously records every heartbeat over two weeks to catch transient AFib, pauses, or tachycardias.",
    icon: ShieldCheck,
    badge: "Zero Cables",
  },
  {
    name: "Treadmill Exercise Stress Echocardiogram",
    time: "45 Minutes",
    prep: "Sneakers required · Fast 3 hours prior",
    purpose: "Compares cardiac wall motion before and immediately after graded treadmill exertion to detect coronary blockages that only restrict flow under load.",
    icon: TrendingUp,
    badge: "Physician Supervised",
  },
  {
    name: "Coronary Artery Calcium (CAC) Scoring",
    time: "15 Minutes",
    prep: "Ultra-low dose CT · Zero contrast injection",
    purpose: "Quantifies the exact volume and density of calcified plaque inside coronary arteries, providing your definitive 10-year heart attack risk score (0 to >400).",
    icon: Gauge,
    badge: "Gold-Standard Plaque Screen",
  },
  {
    name: "Carotid & Peripheral Vascular Doppler",
    time: "30 Minutes",
    prep: "Gentle non-invasive ultrasound",
    purpose: "Visualizes the carotid arteries in the neck and femoral arteries in the legs to assess total systemic atherosclerosis and stroke vulnerability.",
    icon: Stethoscope,
    badge: "Stroke Interception",
  },
];

// 4-Stage Heart Care Pathway
const careStages = [
  {
    step: "Stage 01",
    name: "Detailed Symptom & Risk Discovery",
    duration: "Visit 1 · 45 Mins",
    theme: "Unrushed listening & baseline telemetry",
    desc: "Your board-certified cardiologist conducts a thorough review of your symptoms, family genetic history, lifestyle biomarkers, and previous medical records. We listen to the subtle nuances traditional 10-minute clinic visits overlook.",
    deliverables: [
      "Resting 12-lead digital ECG with rhythm vector review",
      "Complete physical examination of cardiac auscultation & pulses",
      "Review of home blood pressure tracking logs",
      "Immediate formulation of tailored diagnostic plan",
    ],
  },
  {
    step: "Stage 02",
    name: "Precision Non-Invasive Diagnostics",
    duration: "Week 1 – 2",
    theme: "Targeted testing with zero unnecessary procedures",
    desc: "We schedule only the precise tests required to answer clinical questions: whether an echocardiogram for valve function, a 14-day patch for arrhythmias, or a CAC scan for coronary plaque.",
    deliverables: [
      "IAC-accredited digital imaging with Board-Certified review",
      "Same-day preliminary results communicated by care team",
      "Patient portal access to complete high-resolution reports",
      "Zero hidden facility fees or redundant repeat scans",
    ],
  },
  {
    step: "Stage 03",
    name: "Personalized Treatment & Plaque Stabilization",
    duration: "Week 3 – 4",
    theme: "Guideline-directed therapy & medication tuning",
    desc: "We sit down together to review diagnostic imagery side-by-side on high-resolution screens. We build a multi-modal strategy combining precision cardioprotective pharmacotherapy, lipid targets, and exercise regimens.",
    deliverables: [
      "Side-by-side video explanation of your ultrasound or CT scan",
      "Prescription optimization with electronic pharmacy routing",
      "Patient education on medication purpose, dosing, and safety",
      "Dietary and metabolic intervention guidelines",
    ],
  },
  {
    step: "Stage 04",
    name: "Long-Term Surveillance & Remote Monitoring",
    duration: "Ongoing 3 – 12 Mo",
    theme: "Proactive prevention & rapid clinic access",
    desc: "Cardiology is a lifelong partnership. Through remote blood pressure tracking, regular biomarker audits, and direct messaging with our clinical staff, we safeguard your cardiovascular longevity.",
    deliverables: [
      "Annual or semi-annual biomarker & hemodynamic audits",
      "Continuous cellular blood pressure cuff integration",
      "Rapid priority appointments if new symptoms arise",
      "Lifelong partnership focused on heart longevity",
    ],
  },
];

// Board-Certified Cardiologist Faculty
const facultySpecialists = [
  {
    name: "Dr. Adrian Cole, MD, FACC",
    role: "Medical Director & General Cardiologist",
    credentials: "Board-Certified in Cardiovascular Disease & Internal Medicine",
    fellowship: "Fellow of the American College of Cardiology (FACC)",
    education: "Johns Hopkins School of Medicine · Harvard MGH Fellowship",
    specialties: ["Coronary Artery Disease", "Stress Echocardiography", "Hypertension Optimization"],
    bio: "With over 16 years of cardiology leadership, Dr. Cole is known for his calm, communicative bedside manner. He believes explaining the biological 'why' behind heart health empowered patients to achieve the best clinical outcomes.",
    photo: "medical/pulseheart/team.webp",
    quote: "Cardiology shouldn't feel like an intimidating maze of acronyms. Our mission is to give you clarity, eliminate guesswork, and give you back confidence in your heart.",
  },
  {
    name: "Dr. Nina Patel, MD, FACC, FASNC",
    role: "Director of Preventative & Imaging Cardiology",
    credentials: "Board-Certified in Cardiovascular Disease & Nuclear Cardiology",
    fellowship: "Fellow of the American Society of Nuclear Cardiology (FASNC)",
    education: "University of Pennsylvania School of Medicine · Columbia Fellowship",
    specialties: ["Atherosclerosis Interception", "Lipidology & ApoB", "CT Calcium Scoring"],
    bio: "Dr. Patel specializes in early cardiovascular risk interception decades before an event occurs. She works closely with patients with strong family histories of heart disease to stabilize and reverse calcified plaque.",
    photo: "medical/pulseheart/specialist-consultation.webp",
    quote: "A normal cholesterol panel doesn't always tell the whole story. By looking directly at arterial plaque and advanced particle counts, we prevent heart attacks before they happen.",
  },
  {
    name: "Grace Morgan, MSN, CRNP, AACC",
    role: "Cardiovascular Nurse Practitioner",
    credentials: "Board-Certified Adult-Gerontology Acute Care NP",
    fellowship: "Associate of the American College of Cardiology (AACC)",
    education: "Georgetown University School of Nursing & Health Studies",
    specialties: ["Arrhythmia Telemetry Review", "Heart Failure GDMT", "Patient Education & Monitoring"],
    bio: "Grace leads our rapid diagnostic triage, Holter monitor analysis, and patient follow-up care. Patients praise her warmth, unhurried explanations, and prompt communication between physician consultations.",
    photo: "medical/pulseheart/patient-resources.webp",
    quote: "When a patient leaves our office understanding exactly what their tests showed and feeling genuinely heard, that's when great cardiovascular medicine truly happens.",
  },
];

// In-Network Insurance Carriers
const acceptedInsurances = [
  { name: "Medicare Part B (Original)", tier: "Participating In-Network", note: "100% Medicare participating · Supplemental plans accepted" },
  { name: "CareFirst BlueCross BlueShield", tier: "Preferred Network", note: "Comprehensive cardiology consultations & diagnostics covered" },
  { name: "Aetna Health Plans", tier: "In-Network Specialist", note: "Commercial, Medicare Advantage & HMO/PPO plans" },
  { name: "Cigna Healthcare", tier: "In-Network", note: "Full coverage for echocardiography and Holter telemetry" },
  { name: "UnitedHealthcare (Optum)", tier: "In-Network Preferred", note: "Pre-authorized diagnostic procedures managed directly" },
  { name: "Humana Medicare Advantage", tier: "In-Network Certified", note: "Preventative heart visits and chronic condition coverage" },
  { name: "Tricare / Veterans Community Care", tier: "Approved Provider", note: "Military service members, veterans and family coverage" },
  { name: "FSA & HSA Benefit Cards", tier: "100% Eligible", note: "Pre-tax spending accepted for all copays, tests & deductibles" },
];

// Patient Heart Transformation Stories
const patientReviews = [
  {
    name: "Robert M., 58",
    condition: "Severe Exertional Angina (90% LAD Stenosis Caught)",
    result: "Stent placed in 48 hours; back to 5-mile cycling",
    quote:
      "I went to an urgent care with what I thought was acid reflux. Dr. Cole did a stress echo the next morning, caught a critical blockage in my main artery, and arranged immediate interventional stenting before I had a heart attack. He literally saved my life.",
    rating: 5,
    doctor: "Dr. Adrian Cole, MD, FACC",
  },
  {
    name: "Elena R., 46",
    condition: "Symptomatic Paroxysmal Atrial Fibrillation",
    result: "100% Sinus Rhythm Restored; Zero Palpitations",
    quote:
      "My heart would randomly race to 160 bpm while sitting at my desk. Previous doctors told me it was just stress. Dr. Patel gave me a 14-day Holter patch that caught the exact AFib burst within 72 hours. Her medication protocol has me completely symptom-free.",
    rating: 5,
    doctor: "Dr. Nina Patel, MD, FACC",
  },
  {
    name: "Thomas B., 64",
    condition: "High Coronary Calcium Score (CAC: 380)",
    result: "ApoB lowered from 135 to 52; Plaque Stabilized",
    quote:
      "My father had a bypass surgery at 55. I felt fine, but Dr. Patel ordered a CAC scan that revealed early calcification. We started low-dose statin + PCSK9 therapy and cleaned up my diet. My annual follow-up shows completely halted progression.",
    rating: 5,
    doctor: "Dr. Nina Patel, MD, FACC",
  },
];

export function PulseHeartCardiology() {
  const [activeSection, setActiveSection] = useState<string>("services");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  // Interactive Symptom Navigator State
  const [selectedSymptomId, setSelectedSymptomId] = useState<string>("chest-discomfort");

  // Care Pathway Active Stage
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  // Interactive Risk Screener State
  const [screenerAge, setScreenerAge] = useState<string>("45-54");
  const [screenerBp, setScreenerBp] = useState<string>("Pre-Hypertension (120-139)");
  const [screenerFamily, setScreenerFamily] = useState<string>("Yes (Parent or Sibling)");
  const [screenerSymptoms, setScreenerSymptoms] = useState<string>("Occasional Palpitations / Breathlessness");
  const [screenerResultShown, setScreenerResultShown] = useState(false);

  // Full-Page Hero Carousel State
  const [currentHeroSlide, setCurrentHeroSlide] = useState<number>(0);
  const [isHeroAutoPlaying, setIsHeroAutoPlaying] = useState<boolean>(true);

  // Auto-advance hero carousel every 6.5s
  useEffect(() => {
    if (!isHeroAutoPlaying) return;
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, [isHeroAutoPlaying]);

  const handleNextHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const handlePrevHeroSlide = () => {
    setCurrentHeroSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  // Booking Modal State
  const [bookingStep, setBookingStep] = useState<number>(1);
  const [bookingVisitType, setBookingVisitType] = useState<string>("New Patient Comprehensive Heart Consultation (45 Min)");
  const [bookingSpecialist, setBookingSpecialist] = useState<string>("First Available Cardiologist");
  const [bookingDay, setBookingDay] = useState<string>("Tomorrow (Priority)");
  const [bookingSlot, setBookingSlot] = useState<string>("9:30 AM");
  const [patientName, setPatientName] = useState<string>("");
  const [patientPhone, setPatientPhone] = useState<string>("");
  const [patientInsurance, setPatientInsurance] = useState<string>("CareFirst BlueCross BlueShield");
  const [bookingConfirmed, setBookingConfirmed] = useState<boolean>(false);

  // Active computed data
  const currentSymptom = cardiacSymptoms.find((s) => s.id === selectedSymptomId) || cardiacSymptoms[0];
  const currentStage = careStages[activeStageIndex];
  const activeSlideData = heroSlides[currentHeroSlide];

  // ScrollSpy listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 180;
      for (let i = navLinks.length - 1; i >= 0; i--) {
        const link = navLinks[i];
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(link.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile drawer body scroll lock & Escape key listener
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") setIsMobileMenuOpen(false);
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  // Window resize to dismiss drawer on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Quick helper to start booking modal
  const handleStartBooking = (visitType?: string, doctor?: string) => {
    if (visitType) setBookingVisitType(visitType);
    if (doctor) setBookingSpecialist(doctor);
    setBookingConfirmed(false);
    setBookingStep(1);
    setIsBookingOpen(true);
  };

  // Smooth scroll handler for navigation links
  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      const targetId = href.replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const navOffset = 76;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }, 150);
  };

  return (
    <main className="min-h-screen bg-[#f8fafc] font-sans text-slate-900 antialiased selection:bg-rose-600 selection:text-white">
      {/* ========================================================================= */}
      {/* 1. CLEAN TOP UTILITY STRIP (EMERGENCY & MEDICAL HUB LINK)                 */}
      {/* ========================================================================= */}
      <div className="relative z-50 border-b border-rose-950/40 bg-[#07101d] px-3 sm:px-6 py-1.5 text-xs text-slate-300">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <Link
            to="/medical"
            className="group inline-flex items-center gap-1.5 font-semibold text-rose-400 hover:text-white transition-colors text-[11px] sm:text-xs shrink-0"
            title="Return to Medical Showcase Directory"
          >
            <span>← Medical Showcase</span>
          </Link>

          <div className="flex items-center gap-3 sm:gap-6 text-[11px] sm:text-xs">
            <span className="hidden md:inline-flex items-center gap-1.5 text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
              Emergency Chest Pain? <strong className="text-rose-300 font-bold">Dial 911</strong>
            </span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <a
              href="tel:5550147318"
              className="inline-flex items-center gap-1.5 font-bold text-slate-200 hover:text-rose-400 transition-colors"
            >
              <Phone size={12} className="text-rose-500" />
              <span>(555) 014-7318</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 2. SIMPLIFIED STICKY CARDIOVASCULAR NAVBAR                                */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#0a1322]/95 backdrop-blur-xl text-white shadow-md">
        <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-3 sm:px-6 lg:px-8 gap-4">
          {/* Simple Clean Brand Logo */}
          <a href="#hero" className="flex items-center gap-3 group shrink-0">
            <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-gradient-to-br from-rose-500 via-red-600 to-rose-700 text-white shadow-md shadow-rose-950/40 group-hover:scale-105 transition-transform">
              <HeartPulse size={22} className="animate-pulse" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-black tracking-tight text-white leading-none">
                PULSE<span className="text-rose-400">HEART</span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 mt-1">
                Cardiology Clinic
              </span>
            </div>
          </a>

          {/* Simple Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.slice(0, 7).map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                    isActive
                      ? "text-rose-300 bg-rose-500/10 font-bold border border-rose-500/20"
                      : "text-slate-300 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Clean Consultation Button + Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <a
              href="tel:5550147318"
              className="hidden xl:inline-flex items-center gap-1.5 rounded-lg border border-white/10 px-3 py-2 text-xs font-semibold text-slate-300 hover:text-white hover:border-white/20 transition-colors"
            >
              <Phone size={13} className="text-rose-400" />
              <span>(555) 014-7318</span>
            </a>

            <button
              type="button"
              onClick={() => handleStartBooking()}
              className="inline-flex items-center gap-1.5 rounded-xl bg-rose-600 hover:bg-rose-500 px-3.5 sm:px-4 py-2 sm:py-2.5 text-xs font-bold text-white shadow-md shadow-rose-950/30 transition-all hover:scale-102 active:scale-98"
            >
              <Calendar size={14} />
              <span>Book Consult</span>
            </button>

            {/* Mobile Menu Hamburger */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-slate-200 hover:bg-white/15 lg:hidden transition-colors"
            >
              {isMobileMenuOpen ? <X size={20} className="text-rose-400" /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* ========================================================================= */}
      {/* 3. SIMPLIFIED MOBILE MENU                                                 */}
      {/* ========================================================================= */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md lg:hidden flex justify-end animate-in fade-in duration-200"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="w-full max-w-xs sm:max-w-sm h-full bg-[#08121e] border-l border-white/10 flex flex-col justify-between text-white p-5 overflow-y-auto overscroll-contain animate-in slide-in-from-right duration-250"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Branding & Close */}
            <div className="space-y-6 pt-[max(0.5rem,env(safe-area-inset-top))]">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-600 text-white shadow-md">
                    <HeartPulse size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-black text-white">
                      PULSE<span className="text-rose-400">HEART</span>
                    </div>
                    <div className="text-[10px] text-slate-400 font-semibold uppercase">Cardiology Clinic</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close navigation"
                  className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 text-slate-300 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="space-y-1">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  const Icon = link.icon;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(link.href);
                      }}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-xs font-semibold transition-colors ${
                        isActive
                          ? "bg-rose-600 text-white font-bold"
                          : "text-slate-300 hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      <Icon size={16} className={isActive ? "text-white" : "text-rose-400"} />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Bottom Actions & Hotline */}
            <div className="space-y-3 pt-6 border-t border-white/10 pb-[max(0.5rem,env(safe-area-inset-bottom))]">
              <button
                type="button"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleStartBooking();
                }}
                className="w-full flex items-center justify-center gap-2 rounded-xl bg-rose-600 hover:bg-rose-500 py-3 text-xs font-bold text-white shadow-md"
              >
                <Calendar size={15} />
                <span>Schedule Consultation</span>
              </button>

              <a
                href="tel:5550147318"
                className="w-full flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-semibold text-slate-200"
              >
                <Phone size={14} className="text-rose-400" />
                <span>Call Clinic: (555) 014-7318</span>
              </a>

              <p className="text-[10px] text-center text-slate-400 pt-1">
                Chest pain emergency? <strong className="text-rose-400">Call 911</strong>
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4. FULL-PAGE CAROUSEL HERO SECTION                                        */}
      {/* ========================================================================= */}
      <section
        id="hero"
        className="relative min-h-[calc(100vh-64px)] lg:min-h-[calc(100vh-80px)] flex flex-col justify-between overflow-hidden bg-[#070f1a] text-white select-none"
        onMouseEnter={() => setIsHeroAutoPlaying(false)}
        onMouseLeave={() => setIsHeroAutoPlaying(true)}
      >
        {/* Full-Bleed Carousel Background Slides with Smooth Cross-Fade */}
        {heroSlides.map((slide, index) => {
          const isActive = index === currentHeroSlide;
          return (
            <div
              key={slide.id}
              aria-hidden={!isActive}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={imageUrl(slide.image)}
                alt={slide.title}
                className="h-full w-full object-cover object-center scale-105 transition-transform duration-7000 ease-out"
              />
              {/* Deep Cinematic Vignette Overlays */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#070f1a] via-[#070f1a]/85 to-[#070f1a]/60 lg:to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070f1a] via-[#070f1a]/40 to-transparent" />
              <div className="absolute inset-0 bg-[#070f1a]/30" />
            </div>
          );
        })}

        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-[550px] w-[550px] rounded-full bg-rose-600/10 blur-[150px] z-10" />
        <div className="pointer-events-none absolute bottom-12 -left-24 h-[450px] w-[450px] rounded-full bg-red-800/15 blur-[150px] z-10" />

        {/* Center Main Slide Content */}
        <div className="relative z-20 flex-1 flex items-center py-10 sm:py-16">
          <Container>
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Slide Narrative & Actions (7 Cols) */}
              <div className="lg:col-span-7 space-y-5 sm:space-y-7 text-left">
                {/* Slide Category Pill */}
                <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/15 px-3 sm:px-4 py-1.5 text-xs text-rose-200 backdrop-blur-md">
                  {(() => {
                    const TagIcon = activeSlideData.tagIcon;
                    return <TagIcon size={14} className="text-rose-400 animate-pulse" />;
                  })()}
                  <span className="font-bold text-[11px] sm:text-xs uppercase tracking-wider text-white">
                    {activeSlideData.tag}
                  </span>
                </div>

                {/* Main Slide Title */}
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                  {activeSlideData.title} <br className="hidden sm:inline" />
                  <span className="bg-gradient-to-r from-rose-400 via-red-400 to-pink-300 bg-clip-text text-transparent">
                    {activeSlideData.highlight}
                  </span>{" "}
                  {activeSlideData.afterHighlight}
                </h1>

                {/* Subtext Description */}
                <p className="max-w-2xl text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed">
                  {activeSlideData.description}
                </p>

                {/* Primary & Secondary Call to Actions */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => handleStartBooking()}
                    className="group flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 via-red-600 to-rose-600 px-6 sm:px-8 py-3.5 sm:py-4 text-xs sm:text-sm font-black text-white shadow-xl shadow-rose-950/40 hover:shadow-rose-600/30 hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    <Calendar size={16} strokeWidth={2.5} />
                    <span>{activeSlideData.primaryCta}</span>
                    <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </button>

                  <a
                    href={activeSlideData.secondaryHref}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(activeSlideData.secondaryHref);
                    }}
                    className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-5 sm:px-6 py-3.5 sm:py-4 text-xs sm:text-sm font-bold text-slate-200 hover:text-white transition-all backdrop-blur-md"
                  >
                    <span>{activeSlideData.secondaryCta}</span>
                  </a>
                </div>

                {/* Stats Highlights for Active Slide */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 sm:gap-3 pt-2">
                  {activeSlideData.stats.map((stat, sIdx) => (
                    <div
                      key={sIdx}
                      className="rounded-2xl border border-white/10 bg-black/40 p-3 sm:p-3.5 backdrop-blur-md"
                    >
                      <div className="text-base sm:text-xl font-black text-rose-400">{stat.value}</div>
                      <div className="text-[11px] text-slate-300 mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Slide Telemetry Card (5 Cols, Desktop) */}
              <div className="lg:col-span-5 relative hidden lg:block">
                <div className="relative rounded-3xl border border-white/15 bg-gradient-to-b from-white/10 to-white/5 p-4 shadow-2xl backdrop-blur-xl space-y-4">
                  {/* Live Rhythm Monitor HUD */}
                  <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-[#0b1626]/90 p-3.5 backdrop-blur-md">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-rose-500/20 text-rose-400">
                        <Activity size={18} />
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-wider text-rose-300">
                          {activeSlideData.telemetry.title}
                        </div>
                        <div className="text-xs font-black text-white">
                          {activeSlideData.telemetry.value}
                        </div>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/20 px-2 py-0.5 text-[10px] font-bold text-emerald-300 border border-emerald-500/30">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      {activeSlideData.telemetry.status}
                    </span>
                  </div>

                  {/* Specialist Credential Badge */}
                  <div className="rounded-2xl border border-white/15 bg-[#081424]/92 p-4 text-left backdrop-blur-md space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className="h-9 w-9 rounded-full bg-rose-600/30 border border-rose-500/40 flex items-center justify-center text-white font-black text-xs">
                          FACC
                        </div>
                        <div>
                          <div className="text-xs font-black text-white">{activeSlideData.badgeLabel}</div>
                          <div className="text-[10px] text-rose-300 font-semibold">{activeSlideData.badgeDesc}</div>
                        </div>
                      </div>
                      <ShieldCheck size={20} className="text-cyan-400 shrink-0" />
                    </div>
                    <p className="text-[11px] text-slate-300 leading-snug">
                      "Every patient receives dedicated one-on-one time with a licensed cardiologist — zero rushed tech handoffs."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>

        {/* ========================================================================= */}
        {/* Bottom Carousel Navigation Tabs & Controls                                */}
        {/* ========================================================================= */}
        <div className="relative z-20 border-t border-white/10 bg-[#060d17]/85 backdrop-blur-md py-3 sm:py-4">
          <Container>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
              {/* Slide Tabs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full sm:w-auto">
                {heroSlides.map((slide, idx) => {
                  const isActive = idx === currentHeroSlide;
                  return (
                    <button
                      key={slide.id}
                      type="button"
                      onClick={() => setCurrentHeroSlide(idx)}
                      className={`group relative text-left p-2 sm:p-2.5 rounded-xl border transition-all ${
                        isActive
                          ? "border-rose-500/50 bg-rose-950/40 text-white"
                          : "border-white/5 bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
                      }`}
                    >
                      <div className="flex items-center gap-2 text-[10px] font-bold">
                        <span className={isActive ? "text-rose-400" : "text-slate-500"}>
                          0{idx + 1}
                        </span>
                        <span className="truncate">{slide.tag.split(" ")[0]} Care</span>
                      </div>
                      {/* Active Progress Bar */}
                      <div className="h-0.5 w-full bg-white/10 rounded-full mt-1.5 overflow-hidden">
                        <div
                          className={`h-full bg-rose-500 transition-all duration-300 ${
                            isActive ? "w-full" : "w-0"
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Controls: Prev, Next, Play/Pause */}
              <div className="flex items-center gap-3 self-end sm:self-center">
                <span className="text-xs font-bold text-slate-400">
                  <span className="text-white">0{currentHeroSlide + 1}</span> / 0{heroSlides.length}
                </span>

                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={handlePrevHeroSlide}
                    aria-label="Previous slide"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-slate-300 hover:text-white hover:bg-white/15 transition-colors"
                  >
                    <ChevronLeft size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={() => setIsHeroAutoPlaying(!isHeroAutoPlaying)}
                    aria-label={isHeroAutoPlaying ? "Pause carousel autoplay" : "Play carousel autoplay"}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-slate-300 hover:text-white hover:bg-white/15 transition-colors"
                  >
                    {isHeroAutoPlaying ? <Pause size={13} /> : <Play size={13} />}
                  </button>

                  <button
                    type="button"
                    onClick={handleNextHeroSlide}
                    aria-label="Next slide"
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-slate-300 hover:text-white hover:bg-white/15 transition-colors"
                  >
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 5. ASYMMETRICAL CLINICAL SERVICES BENTO GRID                              */}
      {/* ========================================================================= */}
      <section id="services" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-white border-t border-b border-slate-200/80">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-rose-900">
              Evidence-Based Cardiovascular Care
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              Specialized heart care with clearer answers.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From unhurried clinical evaluations to advanced lipid subfractionation and arrhythmia surveillance, our programs intercept disease before it disrupts your life.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {clinicalServices.map((service) => (
              <div
                key={service.id}
                className={`rounded-3xl border border-slate-200 p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-xl hover:border-rose-300 ${
                  service.featured
                    ? "lg:col-span-2 bg-gradient-to-br from-[#0e1724] via-[#1a0f18] to-[#0a121d] text-white shadow-xl relative overflow-hidden"
                    : "bg-white text-slate-900 shadow-sm"
                }`}
              >
                {service.featured && (
                  <div className="pointer-events-none absolute -right-20 -bottom-20 h-72 w-72 rounded-full bg-rose-600/20 blur-3xl" />
                )}

                <div className="space-y-4 relative z-10">
                  <div className="flex items-center justify-between">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-extrabold ${service.tagColor}`}>
                      <Flame size={12} />
                      <span>{service.tag}</span>
                    </span>
                    <span className={`text-[10px] uppercase font-bold ${service.featured ? "text-slate-400" : "text-slate-400"}`}>
                      {service.subtitle}
                    </span>
                  </div>

                  <h3 className={`text-xl sm:text-2xl font-black leading-tight ${service.featured ? "text-white" : "text-slate-900"}`}>
                    {service.title}
                  </h3>

                  <p className={`text-xs sm:text-sm leading-relaxed ${service.featured ? "text-slate-300" : "text-slate-600"}`}>
                    {service.desc}
                  </p>

                  {/* Bulleted Points */}
                  <div className="space-y-2 pt-2">
                    {service.details.map((point) => (
                      <div key={point} className="flex items-start gap-2 text-xs">
                        <CheckCircle2 size={15} className={`shrink-0 mt-0.5 ${service.featured ? "text-rose-400" : "text-rose-600"}`} />
                        <span className={service.featured ? "text-slate-200" : "text-slate-700"}>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`mt-6 pt-4 border-t flex items-center justify-between relative z-10 ${service.featured ? "border-white/10" : "border-slate-100"}`}>
                  <span className={`text-xs font-bold ${service.featured ? "text-rose-300" : "text-slate-500"}`}>
                    Physician Led
                  </span>
                  <button
                    type="button"
                    onClick={() => handleStartBooking(service.title)}
                    className={`inline-flex items-center gap-1 text-xs font-black transition-colors ${
                      service.featured ? "text-white hover:text-rose-300" : "text-rose-700 hover:text-rose-900"
                    }`}
                  >
                    <span>Schedule Consult</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 6. NON-INVASIVE DIAGNOSTIC TESTING SUITE                                   */}
      {/* ========================================================================= */}
      <section id="diagnostics" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-[#0c1624] text-white relative overflow-hidden">
        {/* Ambient Halo */}
        <div className="pointer-events-none absolute -top-32 right-0 h-[600px] w-[600px] rounded-full bg-rose-600/10 blur-[170px]" />
        <div className="pointer-events-none absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[150px]" />

        <Container>
          <div className="mb-14 grid gap-8 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7 space-y-4 text-left">
              <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-rose-300">
                Diagnostic Clarity Suite
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
                Precision cardiac testing without the hospital hassle.
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We perform our comprehensive non-invasive diagnostics in an uncrowded, reassuring outpatient environment with certified sonographers and rapid physician interpretations.
              </p>
            </div>

            <div className="lg:col-span-5 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur-md">
              <div className="flex items-center justify-between text-xs font-bold text-slate-300">
                <span>Accredited Cardiac Laboratory</span>
                <span className="text-cyan-400 font-extrabold">IAC Certified</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Zero hospital facility fees. All tests billed under transparent outpatient in-network specialist rates.
              </p>
            </div>
          </div>

          {/* Diagnostic Modality Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {diagnosticModalityCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.name}
                  className="rounded-3xl border border-white/15 bg-white/[0.04] p-6 sm:p-7 backdrop-blur-md shadow-xl flex flex-col justify-between hover:border-rose-400/40 hover:bg-white/[0.07] transition-all duration-300 space-y-5"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-500/20 text-rose-400 border border-rose-500/30">
                        <Icon size={22} />
                      </div>
                      <span className="rounded-full bg-cyan-400/10 border border-cyan-400/30 px-2.5 py-0.5 text-[10px] font-black text-cyan-300 uppercase tracking-wider">
                        {card.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-black text-white leading-tight">
                      {card.name}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {card.purpose}
                    </p>

                    <div className="rounded-xl bg-black/30 p-3 space-y-1 text-left text-[11px] border border-white/5">
                      <div className="flex justify-between text-slate-400">
                        <span>Duration:</span>
                        <span className="text-white font-bold">{card.time}</span>
                      </div>
                      <div className="flex justify-between text-slate-400">
                        <span>Preparation:</span>
                        <span className="text-rose-300 font-medium truncate max-w-[190px]">{card.prep}</span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleStartBooking(card.name)}
                    className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-white/10 hover:bg-rose-600 hover:text-white py-2.5 text-xs font-bold text-slate-200 transition-colors"
                  >
                    <span>Request Diagnostic Test</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 7. INTERACTIVE CARDIAC SYMPTOM & CONDITION NAVIGATOR                      */}
      {/* ========================================================================= */}
      <section id="symptom-navigator" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-[#fdf2f4]">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-12">
            <span className="rounded-full border border-rose-300 bg-rose-100 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-rose-900">
              Interactive Symptom & Risk Guide
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              What heart sensations are you experiencing?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Select your primary symptom below to view biological causes, gold-standard diagnostic pathways, and our assigned clinical lead.
            </p>
          </div>

          {/* Tab Switcher */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-10">
            {cardiacSymptoms.map((symptom) => {
              const isSelected = selectedSymptomId === symptom.id;
              return (
                <button
                  key={symptom.id}
                  type="button"
                  onClick={() => setSelectedSymptomId(symptom.id)}
                  className={`rounded-2xl px-4 py-2.5 text-xs sm:text-sm font-extrabold transition-all duration-200 active:scale-95 whitespace-nowrap ${
                    isSelected
                      ? "bg-rose-700 text-white shadow-lg shadow-rose-900/20 font-black scale-105"
                      : "bg-white text-slate-700 hover:bg-rose-50 border border-slate-200"
                  }`}
                >
                  {symptom.title}
                </button>
              );
            })}
          </div>

          {/* Dynamic Symptom Card Display */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="space-y-1.5">
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-xs font-extrabold ${currentSymptom.badgeColor}`}>
                    <AlertTriangle size={12} />
                    <span>{currentSymptom.urgency}</span>
                  </span>
                  <h3 className="text-2xl sm:text-4xl font-black text-slate-900">
                    {currentSymptom.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {currentSymptom.overview}
                </p>

                {/* Common Causes */}
                <div className="rounded-2xl bg-slate-50 p-4 border border-slate-200 space-y-2">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-800">
                    Primary Clinical Diagnoses to Investigate:
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2 text-xs text-slate-700">
                    {currentSymptom.commonCauses.map((cause) => (
                      <div key={cause} className="flex items-start gap-2">
                        <CheckCircle2 size={14} className="text-rose-600 shrink-0 mt-0.5" />
                        <span>{cause}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Recommended Tests */}
                <div className="rounded-2xl bg-rose-50/70 p-4 border border-rose-200 space-y-2">
                  <div className="text-[11px] font-black uppercase tracking-wider text-rose-900">
                    Recommended First-Line Diagnostic Protocol:
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2 text-xs text-slate-800">
                    {currentSymptom.recommendedTests.map((test) => (
                      <div key={test} className="flex items-start gap-2">
                        <Activity size={14} className="text-rose-600 shrink-0 mt-0.5" />
                        <span>{test}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Lead Specialist & Booking CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <div className="text-[10px] uppercase font-bold text-slate-400">Assigned Clinical Specialist</div>
                    <div className="text-sm font-black text-slate-900">{currentSymptom.specialistLead}</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleStartBooking(currentSymptom.title, currentSymptom.specialistLead)}
                    className="rounded-xl bg-slate-900 px-5 py-2.5 text-xs font-black text-white hover:bg-rose-700 transition active:scale-95 shadow-md"
                  >
                    Schedule Evaluation for {currentSymptom.title} →
                  </button>
                </div>
              </div>

              {/* Right Visual Image & Metric (5 cols) */}
              <div className="lg:col-span-5">
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 p-2.5 shadow-2xl">
                  <img
                    src={imageUrl(currentSymptom.image)}
                    alt={currentSymptom.title}
                    className="h-[300px] sm:h-[380px] w-full rounded-xl object-cover transition-all duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b1523]/95 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-xl border border-white/20 bg-[#0b1523]/90 p-3.5 text-white backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <span className="text-[10px] font-black uppercase tracking-wider text-rose-400">Clinical Benchmark</span>
                      <span className="text-sm font-black text-white">{currentSymptom.statMetric}</span>
                    </div>
                    <div className="text-[11px] text-slate-300 mt-1 leading-snug">{currentSymptom.statDesc}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 8. 4-STAGE HEART CARE PATHWAY                                             */}
      {/* ========================================================================= */}
      <section id="care-pathway" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-[#f4f7fa]">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-xs font-black tracking-widest uppercase text-slate-800">
              Clear & Transparent Care Model
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              Your 4-stage journey to cardiovascular clarity.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We eliminate uncertainty by mapping out your care step-by-step, ensuring you understand every test result, prescription decision, and lifestyle goal.
            </p>
          </div>

          {/* Stage Selector Tabs */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
            {careStages.map((stage, idx) => {
              const isActive = activeStageIndex === idx;
              return (
                <button
                  key={stage.step}
                  type="button"
                  onClick={() => setActiveStageIndex(idx)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    isActive
                      ? "bg-[#0b1523] text-white border-rose-500 shadow-xl scale-102 ring-2 ring-rose-500/30"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-black uppercase tracking-wider ${isActive ? "text-rose-400" : "text-slate-400"}`}>
                      {stage.step}
                    </span>
                    <span className={`text-[10px] font-bold ${isActive ? "text-cyan-300" : "text-slate-500"}`}>
                      {stage.duration}
                    </span>
                  </div>
                  <h4 className={`text-xs sm:text-sm font-black mt-1 line-clamp-2 ${isActive ? "text-white" : "text-slate-900"}`}>
                    {stage.name}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Active Stage Deep Dive */}
          <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-10 shadow-xl">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7 space-y-5 text-left">
                <div className="flex items-center gap-2">
                  <span className="rounded-full bg-rose-100 text-rose-900 px-3 py-1 text-xs font-black uppercase">
                    {currentStage.step} · {currentStage.duration}
                  </span>
                  <span className="text-xs font-bold text-slate-500 italic">
                    "{currentStage.theme}"
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                  {currentStage.name}
                </h3>

                <p className="text-slate-600 text-sm leading-relaxed">
                  {currentStage.desc}
                </p>

                {/* Deliverables Box */}
                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 space-y-2">
                  <div className="text-[11px] font-black uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                    <CheckCircle size={15} className="text-rose-600" />
                    Key Milestones & Deliverables:
                  </div>
                  <div className="grid gap-2 sm:grid-cols-2 text-xs text-slate-700">
                    {currentStage.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-rose-600 shrink-0 mt-1.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Visual Image */}
              <div className="lg:col-span-5">
                <img
                  src={imageUrl("medical/pulseheart/diagnostic-clarity.webp")}
                  alt={currentStage.name}
                  className="rounded-2xl border border-slate-200 shadow-xl object-cover h-[280px] w-full"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 9. BOARD-CERTIFIED CARDIOLOGIST FACULTY                                   */}
      {/* ========================================================================= */}
      <section id="specialists" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-white border-t border-b border-slate-200">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-rose-900">
              Elite Heart Faculty
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              Led by Fellows of the American College of Cardiology.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Every consultation is performed directly by licensed, fellowship-trained cardiology clinicians with decades of diagnostic and interventional experience.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {facultySpecialists.map((doc) => (
              <div
                key={doc.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-7 shadow-lg flex flex-col justify-between hover:border-rose-300 hover:shadow-xl transition-all duration-300"
              >
                <div className="space-y-4 text-left">
                  <div className="relative overflow-hidden rounded-2xl aspect-[4/3.5]">
                    <img
                      src={imageUrl(doc.photo)}
                      alt={doc.name}
                      className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute bottom-2 left-2 rounded-lg bg-[#0b1523]/90 px-2.5 py-1 text-[10px] font-extrabold text-rose-300 backdrop-blur-md">
                      {doc.fellowship.split("(")[0]}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900">{doc.name}</h3>
                    <p className="text-xs font-bold text-rose-700 mt-0.5">{doc.role}</p>
                    <p className="text-[11px] text-slate-500 mt-0.5">{doc.education}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">{doc.bio}</p>

                  <div className="space-y-1.5 pt-2 border-t border-slate-100">
                    <div className="text-[10px] uppercase font-black tracking-wider text-slate-400">Clinical Focus Areas:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {doc.specialties.map((spec) => (
                        <span key={spec} className="rounded-md bg-slate-100 px-2 py-0.5 text-[10px] font-bold text-slate-700">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <blockquote className="rounded-xl bg-rose-50/80 p-3 text-[11px] italic text-rose-900 leading-relaxed border-l-2 border-rose-500">
                    "{doc.quote}"
                  </blockquote>
                </div>

                <div className="pt-5 mt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleStartBooking(undefined, doc.name)}
                    className="w-full rounded-xl bg-slate-900 py-2.5 text-xs font-black text-white hover:bg-rose-700 transition"
                  >
                    Request Consult with {doc.name.split(",")[0]}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 10. CLINIC ENVIRONMENT & ADVANCED DIAGNOSTIC FACILITY                     */}
      {/* ========================================================================= */}
      <section id="clinic-tech" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-[#f8fafc]">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Image Showcase (6 Cols) */}
            <div className="lg:col-span-6 relative">
              <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-2xl">
                <img
                  src={imageUrl("medical/pulseheart/room.webp")}
                  alt="Modern Cardiology Diagnostic Examination Suite"
                  className="h-[360px] sm:h-[440px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block rounded-2xl border border-slate-200 bg-white p-4 shadow-xl max-w-xs text-left">
                <div className="flex items-center gap-2 text-rose-700 text-xs font-black">
                  <ShieldCheck size={16} />
                  <span>Outpatient Comfort Model</span>
                </div>
                <p className="text-[11px] text-slate-600 mt-1">
                  Private diagnostic rooms with soundproof walls, acoustic testing gel warmers, and digital visual result monitors.
                </p>
              </div>
            </div>

            {/* Right Details (6 Cols) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-rose-900">
                Clinic Environment
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
                Modern diagnostics in a calm, reassuring space.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Hospital cardiology departments can be chaotic, stressful, and intimidating. We designed PulseHeart to feel like a boutique diagnostic sanctuary where you are treated with dignity, privacy, and clinical thoroughness.
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  "Zero long hospital corridor queues",
                  "Direct physician consultation time",
                  "Warm acoustic ultrasound gel & gowns",
                  "Same-day emergency ECG slots available",
                  "Dedicated patient parking right outside",
                  "Direct electronic pharmacy prescribing",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-xl bg-white p-3 border border-slate-200 shadow-xs text-xs font-bold text-slate-800">
                    <CheckCircle2 size={16} className="text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 11. IN-NETWORK INSURANCE TRANSPARENCY                                     */}
      {/* ========================================================================= */}
      <section id="insurance" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-white border-t border-b border-slate-200">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left: Insurance Details (6 Cols) */}
            <div className="lg:col-span-6 space-y-6 text-left">
              <span className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-emerald-800">
                Insurance Transparency
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-slate-900 leading-tight">
                In-network with Medicare and leading health plans.
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Specialist cardiology care should never come with surprise billing. We participate directly with Medicare and major commercial insurers, checking your exact copay and diagnostic pre-authorizations before you arrive.
              </p>

              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <ShieldCheck size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-700">
                    <strong className="block text-slate-900 font-black">No Surprise Facility Surcharges:</strong>
                    Unlike hospital outpatient departments that tack on unexpected $500–$1,500 'facility fees,' our visits are billed under standard clinic specialist codes.
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-4 border border-slate-200">
                  <CheckCircle2 size={18} className="text-emerald-600 shrink-0 mt-0.5" />
                  <div className="text-xs text-slate-700">
                    <strong className="block text-slate-900 font-black">Direct Physician Coordination:</strong>
                    We send complete consultation notes and imaging links directly to your primary care doctor within 24 hours of your visit.
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Accepted Insurance List (6 Cols) */}
            <div className="lg:col-span-6 rounded-3xl border border-slate-200 bg-slate-50/80 p-6 sm:p-8 shadow-xl space-y-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="text-base font-black text-slate-900">
                  Accepted In-Network Insurance Plans
                </h3>
                <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                  Pre-Verification Service
                </span>
              </div>

              <div className="space-y-2">
                {acceptedInsurances.map((plan) => (
                  <div
                    key={plan.name}
                    className="flex items-center justify-between p-3 rounded-xl border border-slate-200 bg-white hover:border-rose-300 transition-colors"
                  >
                    <div>
                      <div className="text-xs font-bold text-slate-900">{plan.name}</div>
                      <div className="text-[11px] text-slate-500">{plan.note}</div>
                    </div>
                    <span className="shrink-0 rounded-lg bg-slate-100 border border-slate-200 px-2.5 py-1 text-[10px] font-black text-slate-800">
                      {plan.tier}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-3 border-t border-slate-200 text-center text-xs text-slate-500">
                Have a different plan or high deductible? Contact our billing team for clear, up-front self-pay diagnostic bundles.
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 12. VERIFIED PATIENT CARDIAC STORIES                                      */}
      {/* ========================================================================= */}
      <section id="reviews" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-[#0b1523] text-white">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-16">
            <span className="rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-rose-300">
              Verified Patient Transformations
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">
              Real patients. Real recoveries. Fearless living.
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Read how our rapid diagnostics and dedicated cardiologists restored peace of mind and active lifestyles.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {patientReviews.map((review) => (
              <div
                key={review.name}
                className="rounded-3xl border border-white/15 bg-white/[0.04] p-7 backdrop-blur-md shadow-xl flex flex-col justify-between space-y-6 text-left"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-1 text-rose-400">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={15} className="fill-rose-400 text-rose-400" />
                    ))}
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] uppercase font-bold text-rose-400 tracking-wider">
                      {review.condition}
                    </span>
                    <h4 className="text-sm font-black text-white">
                      {review.result}
                    </h4>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    "{review.quote}"
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <div>
                    <div className="font-black text-white">{review.name}</div>
                    <div className="text-[10px] text-cyan-400 font-semibold">{review.doctor}</div>
                  </div>
                  <ShieldCheck size={16} className="text-slate-400" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 13. INTERACTIVE 30-SECOND HEART RISK & SYMPTOM SCREENER                   */}
      {/* ========================================================================= */}
      <section id="risk-screener" className="scroll-mt-20 sm:scroll-mt-24 py-20 sm:py-28 bg-white border-t border-slate-200">
        <Container>
          <div className="mx-auto max-w-3xl text-center space-y-4 mb-14">
            <span className="rounded-full border border-rose-200 bg-rose-50 px-4 py-1.5 text-xs font-black tracking-widest uppercase text-rose-900">
              Cardiovascular Risk Screener
            </span>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900">
              Check your cardiac risk profile in 30 seconds.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Answer 4 brief questions to see which cardiovascular tests our cardiologists recommend for your age and symptoms.
            </p>
          </div>

          <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-10 shadow-lg space-y-6 text-left">
            {/* Question 1: Age */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                1. What is your age group?
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {["Under 35", "35-44", "45-54", "55 and older"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setScreenerAge(opt)}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all ${
                      screenerAge === opt
                        ? "bg-rose-700 text-white border-rose-700 shadow-sm"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 2: Blood Pressure */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                2. Average resting blood pressure range:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {["Normal (<120/80)", "Pre-Hypertension (120-139)", "Elevated / High (>140)"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setScreenerBp(opt)}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all ${
                      screenerBp === opt
                        ? "bg-rose-700 text-white border-rose-700 shadow-sm"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 3: Family History */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                3. Family history of early heart attack or stroke (under age 60)?
              </label>
              <div className="grid grid-cols-3 gap-2">
                {["Yes (Parent or Sibling)", "Unsure / Unknown", "No Family History"].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setScreenerFamily(opt)}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all ${
                      screenerFamily === opt
                        ? "bg-rose-700 text-white border-rose-700 shadow-sm"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Question 4: Symptoms */}
            <div>
              <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                4. Primary reason for cardiac inquiry:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {[
                  "Occasional Palpitations / Breathlessness",
                  "Mild Exertional Chest Heaviness",
                  "Proactive Screening (Family History)",
                  "Post-Hospitalization Follow-Up Care",
                ].map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setScreenerSymptoms(opt)}
                    className={`p-2.5 rounded-xl text-xs font-bold border transition-all text-left ${
                      screenerSymptoms === opt
                        ? "bg-rose-700 text-white border-rose-700 shadow-sm"
                        : "bg-white text-slate-700 border-slate-200 hover:bg-slate-100"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Reveal Result Button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => setScreenerResultShown(true)}
                className="w-full rounded-2xl bg-rose-700 py-3.5 text-xs sm:text-sm font-black text-white hover:bg-rose-800 transition active:scale-95 shadow-md flex items-center justify-center gap-2"
              >
                <HeartPulse size={16} />
                <span>Calculate My Recommended Heart Pathway</span>
              </button>
            </div>

            {/* Revealed Result Card */}
            {screenerResultShown && (
              <div className="rounded-2xl border border-rose-300 bg-rose-50/80 p-5 space-y-3 animate-in fade-in duration-300">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-rose-900">
                    Personalized Clinical Recommendation
                  </span>
                  <span className="rounded-md bg-rose-200 px-2 py-0.5 text-[10px] font-black text-rose-900">
                    Priority Outpatient Care
                  </span>
                </div>
                <h4 className="text-base font-black text-slate-900">
                  Comprehensive Consultation + {screenerSymptoms.includes("Palpitations") ? "14-Day Holter Patch & Echo" : "CT Calcium Scoring & Lipid Panel"}
                </h4>
                <p className="text-xs text-slate-700 leading-relaxed">
                  Based on your age ({screenerAge}), blood pressure profile, and {screenerFamily}, we recommend establishing a baseline cardiovascular workup to evaluate heart rhythm, wall thickness, and arterial plaque burden.
                </p>
                <button
                  type="button"
                  onClick={() => handleStartBooking(`Screener Result: ${screenerSymptoms}`)}
                  className="w-full rounded-xl bg-slate-900 py-3 text-xs font-black text-white hover:bg-rose-700 transition"
                >
                  Book Recommended Consultation Online →
                </button>
              </div>
            )}
          </div>
        </Container>
      </section>

      {/* ========================================================================= */}
      {/* 14. HIGH-PERFORMANCE MEDICAL FOOTER                                       */}
      {/* ========================================================================= */}
      <footer id="contact" className="scroll-mt-20 sm:scroll-mt-24 bg-[#08121f] text-white pt-16 pb-24 sm:pb-16 border-t border-white/10">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 pb-12 border-b border-white/10">
            {/* Col 1: Brand & Bio (4 Cols) */}
            <div className="lg:col-span-4 space-y-4 text-left">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-rose-500 to-red-700 text-white font-black shadow-md">
                  <HeartPulse size={18} />
                </div>
                <div className="text-base font-black tracking-tight text-white">
                  PULSEHEART <span className="text-rose-400 font-light">CARDIOLOGY</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
                Board-certified cardiovascular specialists dedicated to clear diagnostic answers, unhurried 45-minute consultations, and proactive heart attack prevention.
              </p>
              <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-3 text-[11px] text-rose-200">
                <strong className="block text-rose-300 font-bold mb-0.5">Emergency Notice:</strong>
                If you are experiencing severe chest pain, shortness of breath, or sudden weakness, call 911 immediately.
              </div>
            </div>

            {/* Col 2: Clinic Location & Hours (4 Cols) */}
            <div className="lg:col-span-4 space-y-3 text-left text-xs text-slate-300">
              <div className="font-black text-white uppercase tracking-wider text-xs">Diagnostic Center Location</div>
              <p className="flex items-start gap-2">
                <MapPin size={16} className="text-rose-400 shrink-0 mt-0.5" />
                <span>530 Pulse Avenue, Suite 240 · Bethesda Medical Pavilion · Free Dedicated Patient Parking</span>
              </p>
              <p className="flex items-start gap-2">
                <Clock size={16} className="text-rose-400 shrink-0 mt-0.5" />
                <span>Monday–Friday: 8:00 AM – 5:00 PM · Saturday: 9:00 AM – 12:00 PM</span>
              </p>
              <p className="flex items-start gap-2">
                <Phone size={16} className="text-rose-400 shrink-0 mt-0.5" />
                <a href="tel:5550147318" className="hover:text-rose-300 font-bold">
                  (555) 014-7318
                </a>
              </p>
            </div>

            {/* Col 3: Section Directory in Strict DOM Order (4 Cols) */}
            <div className="lg:col-span-4 space-y-3 text-left text-xs text-slate-400">
              <div className="font-black text-white uppercase tracking-wider text-xs">Clinical Navigation Directory</div>
              <div className="grid grid-cols-2 gap-2 text-[11px]">
                <a href="#services" className="hover:text-rose-300">Clinical Services</a>
                <a href="#diagnostics" className="hover:text-rose-300">Diagnostic Suite</a>
                <a href="#symptom-navigator" className="hover:text-rose-300">Symptom Guide</a>
                <a href="#care-pathway" className="hover:text-rose-300">4-Stage Pathway</a>
                <a href="#specialists" className="hover:text-rose-300">Cardiologists</a>
                <a href="#clinic-tech" className="hover:text-rose-300">Facility & Lab</a>
                <a href="#insurance" className="hover:text-rose-300">Insurance Plans</a>
                <a href="#reviews" className="hover:text-rose-300">Patient Stories</a>
                <a href="#risk-screener" className="hover:text-rose-300">Risk Screener</a>
                <Link to="/medical" className="text-rose-400 hover:underline">← Medical Index</Link>
              </div>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 text-center sm:text-left">
            <p>© {new Date().getFullYear()} PulseHeart Cardiology, PLLC. All Rights Reserved. HIPAA Compliant Outpatient Facility.</p>
            <div className="flex gap-4">
              <span>American College of Cardiology (ACC)</span>
              <span>IAC Echocardiography</span>
              <span>American Heart Association</span>
            </div>
          </div>
        </Container>
      </footer>

      {/* ========================================================================= */}
      {/* 15. FLOATING MOBILE CONCIERGE DOCK                                        */}
      {/* ========================================================================= */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#08121f]/95 border-t border-rose-900/50 p-2.5 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl sm:hidden shadow-2xl">
        <div className="flex items-center gap-2">
          <a
            href="tel:5550147318"
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 py-2.5 text-xs font-bold text-white active:scale-95"
          >
            <Phone size={13} className="text-rose-400" />
            <span>Call Clinic</span>
          </a>

          <button
            type="button"
            onClick={() => handleStartBooking()}
            className="flex-1 flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-rose-500 via-red-600 to-rose-600 py-2.5 text-xs font-black text-white shadow-md active:scale-95"
          >
            <Calendar size={13} strokeWidth={2.5} />
            <span>Book Consult</span>
          </button>
        </div>
      </div>

      {/* ========================================================================= */}
      {/* 16. INTERACTIVE 3-STEP APPOINTMENT SCHEDULER MODAL                        */}
      {/* ========================================================================= */}
      {isBookingOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh] text-slate-900 text-left">
            <button
              type="button"
              onClick={() => setIsBookingOpen(false)}
              aria-label="Close booking modal"
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-800"
            >
              <X size={20} />
            </button>

            {!bookingConfirmed ? (
              <div>
                <div className="mb-6">
                  <span className="text-[10px] font-black uppercase tracking-widest text-rose-700">
                    PulseHeart Online Patient Concierge
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-0.5">
                    Schedule Your Cardiology Consultation
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Unhurried 45-minute specialist visits with transparent in-network billing.
                  </p>
                </div>

                {/* Step Progress Bar */}
                <div className="flex items-center gap-2 mb-6 text-xs">
                  <div className={`flex-1 h-1.5 rounded-full ${bookingStep >= 1 ? "bg-rose-600" : "bg-slate-200"}`} />
                  <div className={`flex-1 h-1.5 rounded-full ${bookingStep >= 2 ? "bg-rose-600" : "bg-slate-200"}`} />
                  <div className={`flex-1 h-1.5 rounded-full ${bookingStep >= 3 ? "bg-rose-600" : "bg-slate-200"}`} />
                </div>

                {/* Step 1: Select Visit Type & Doctor */}
                {bookingStep === 1 && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Select Clinical Focus</label>
                      <div className="space-y-2">
                        {[
                          "New Patient Comprehensive Heart Consultation (45 Min)",
                          "Chest Pain / Angina Evaluation & Stress Testing",
                          "Heart Palpitations & Arrhythmia (14-Day Holter)",
                          "Preventative Plaque Interception (CAC / ApoB)",
                          "Hypertension & Medication Optimization",
                        ].map((srv) => (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => setBookingVisitType(srv)}
                            className={`w-full text-left p-3 rounded-xl border transition-all ${
                              bookingVisitType === srv
                                ? "border-rose-600 bg-rose-50 text-slate-900 font-bold"
                                : "border-slate-200 bg-slate-50/60 text-slate-700 hover:bg-slate-100"
                            }`}
                          >
                            {srv}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Preferred Cardiologist</label>
                      <select
                        value={bookingSpecialist}
                        onChange={(e) => setBookingSpecialist(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-medium text-slate-900 focus:border-rose-600 focus:outline-hidden"
                      >
                        <option>First Available Cardiologist</option>
                        <option>Dr. Adrian Cole, MD, FACC (General & CAD)</option>
                        <option>Dr. Nina Patel, MD, FACC (Imaging & Plaque)</option>
                        <option>Grace Morgan, MSN, CRNP (Telemetry & Follow-Up)</option>
                      </select>
                    </div>

                    <div className="pt-2 flex justify-end">
                      <button
                        type="button"
                        onClick={() => setBookingStep(2)}
                        className="rounded-xl bg-slate-900 px-6 py-2.5 font-bold text-white hover:bg-rose-700 transition-all"
                      >
                        Select Date & Slot →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Slot */}
                {bookingStep === 2 && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Select Preferred Day</label>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                        {["Tomorrow (Priority)", "Wednesday", "Thursday", "Friday"].map((day) => (
                          <button
                            key={day}
                            type="button"
                            onClick={() => setBookingDay(day)}
                            className={`p-2 rounded-xl text-center font-bold border transition-all ${
                              bookingDay === day
                                ? "border-rose-600 bg-rose-50 text-slate-900"
                                : "border-slate-200 bg-slate-50 text-slate-700"
                            }`}
                          >
                            {day}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1.5">Available Consultation Slot</label>
                      <div className="grid grid-cols-3 gap-2">
                        {["8:30 AM", "9:30 AM", "11:00 AM", "1:30 PM", "3:15 PM", "4:30 PM"].map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setBookingSlot(slot)}
                            className={`p-2 rounded-xl text-center font-bold border transition-all ${
                              bookingSlot === slot
                                ? "border-rose-600 bg-rose-50 text-slate-900"
                                : "border-slate-200 bg-slate-50 text-slate-700"
                            }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setBookingStep(1)}
                        className="text-slate-500 hover:text-slate-800 font-bold"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setBookingStep(3)}
                        className="rounded-xl bg-slate-900 px-6 py-2.5 font-bold text-white hover:bg-rose-700 transition-all"
                      >
                        Patient Contact & Insurance →
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Patient Information */}
                {bookingStep === 3 && (
                  <div className="space-y-4 text-xs">
                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Full Legal Name</label>
                      <input
                        type="text"
                        placeholder="Jane Doe"
                        value={patientName}
                        onChange={(e) => setPatientName(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium focus:bg-white focus:border-rose-600 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Mobile Phone for SMS Confirmation</label>
                      <input
                        type="tel"
                        placeholder="(555) 000-0000"
                        value={patientPhone}
                        onChange={(e) => setPatientPhone(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 font-medium focus:bg-white focus:border-rose-600 focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-700 font-bold mb-1">Health Insurance Plan</label>
                      <select
                        value={patientInsurance}
                        onChange={(e) => setPatientInsurance(e.target.value)}
                        className="w-full p-2.5 rounded-xl border border-slate-200 bg-white font-medium text-slate-900 focus:border-rose-600 focus:outline-hidden"
                      >
                        {acceptedInsurances.map((ins) => (
                          <option key={ins.name}>{ins.name}</option>
                        ))}
                      </select>
                    </div>

                    <div className="rounded-xl bg-rose-50 border border-rose-200 p-3 text-[11px] text-rose-900 space-y-1">
                      <div className="font-bold flex items-center gap-1">
                        <ShieldCheck size={13} className="text-rose-600" />
                        Cardiology Pre-Verification Guarantee
                      </div>
                      <p>
                        Your appointment request is held immediately. Our team will verify your benefits and text your digital intake confirmation pass within 2 hours.
                      </p>
                    </div>

                    <div className="pt-2 flex justify-between items-center">
                      <button
                        type="button"
                        onClick={() => setBookingStep(2)}
                        className="text-slate-500 hover:text-slate-800 font-bold"
                      >
                        ← Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setBookingConfirmed(true)}
                        className="rounded-xl bg-rose-700 px-6 py-2.5 font-bold text-white hover:bg-rose-800 transition-all shadow-md"
                      >
                        Confirm Consultation Reservation
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              /* Confirmation Screen */
              <div className="text-center py-4 space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-100 text-rose-600">
                  <CheckCircle2 size={32} strokeWidth={2.5} />
                </div>
                <h3 className="text-2xl font-black text-slate-900">
                  Cardiology Consultation Confirmed!
                </h3>
                <p className="text-xs text-slate-600 max-w-sm mx-auto">
                  Thank you, {patientName || "valued patient"}! A digital confirmation pass and cardiology medical history intake have been sent to {patientPhone || "your mobile phone"}.
                </p>

                <div className="rounded-2xl bg-slate-50 border border-slate-200 p-4 text-left text-xs space-y-2">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Patient:</span>
                    <span className="font-bold text-slate-900">{patientName || "Patient"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Clinical Focus:</span>
                    <span className="font-bold text-slate-900">{bookingVisitType}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Cardiologist:</span>
                    <span className="font-bold text-slate-900">{bookingSpecialist}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Scheduled Time:</span>
                    <span className="font-bold text-rose-700">{bookingDay} · {bookingSlot}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Facility Location:</span>
                    <span className="font-bold text-slate-900">530 Pulse Avenue, Suite 240</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsBookingOpen(false)}
                  className="w-full rounded-xl bg-slate-900 py-3 text-xs font-bold text-white hover:bg-slate-800"
                >
                  Done & Return to Heart Center
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
