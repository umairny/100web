import { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation, useSearchParams } from "react-router-dom";
import { Navbar, Footer, CommandPalette, ShowcaseToolbar, ShortlistDrawer } from "./components";
import type { DeviceMode } from "./components/ShowcaseToolbar";
import { allWebsites } from "./data/websites";
import { importFavoriteIds } from "./utils/favorites";
import { PageLoader } from "./components/PageLoader";

// Lazy-loaded category index pages & standalone sites
const Home = lazy(() => import("./pages/Home").then((m) => ({ default: m.Home })));
const BeautyIndex = lazy(() => import("./pages/Beauty/BeautyIndex").then((m) => ({ default: m.BeautyIndex })));
const BlushBeautyBar = lazy(() => import("./pages/Beauty/BlushBeautyBar").then((m) => ({ default: m.BlushBeautyBar })));
const CrownCombBarber = lazy(() => import("./pages/Beauty/CrownCombBarber").then((m) => ({ default: m.CrownCombBarber })));
const GlowHausSalon = lazy(() => import("./pages/Beauty/GlowHausSalon").then((m) => ({ default: m.GlowHausSalon })));
const LuxeNailStudio = lazy(() => import("./pages/Beauty/LuxeNailStudio").then((m) => ({ default: m.LuxeNailStudio })));
const SerenitySpa = lazy(() => import("./pages/Beauty/SerenitySpa").then((m) => ({ default: m.SerenitySpa })));
const VelvetSkinClinic = lazy(() => import("./pages/Beauty/VelvetSkinClinic").then((m) => ({ default: m.VelvetSkinClinic })));
const PureGlowAesthetics = lazy(() => import("./pages/Beauty/PureGlowAesthetics").then((m) => ({ default: m.PureGlowAesthetics })));
const BloomBridalStudio = lazy(() => import("./pages/Beauty/BloomBridalStudio"));
const SilkStyleHair = lazy(() => import("./pages/Beauty/SilkStyleHair"));
const AuraWellnessSpa = lazy(() => import("./pages/Beauty/AuraWellnessSpa"));

// Construction
const ConstructionIndex = lazy(() => import("./pages/Construction/ConstructionIndex").then((m) => ({ default: m.ConstructionIndex })));
const ForgePointBuilders = lazy(() => import("./pages/Construction/ForgePointBuilders").then((m) => ({ default: m.ForgePointBuilders })));
const SummitRoofCo = lazy(() => import("./pages/Construction/SummitRoofCo").then((m) => ({ default: m.SummitRoofCo })));
const ClearlineRemodeling = lazy(() => import("./pages/Construction/ClearlineRemodeling").then((m) => ({ default: m.ClearlineRemodeling })));
const ForgeLineElectric = lazy(() => import("./pages/Construction/ForgeLineElectric").then((m) => ({ default: m.ForgeLineElectric })));
const TerraFormConcrete = lazy(() => import("./pages/Construction/TerraFormConcrete").then((m) => ({ default: m.TerraFormConcrete })));
const BluePeakPlumbing = lazy(() => import("./pages/Construction/BluePeakPlumbing").then((m) => ({ default: m.BluePeakPlumbing })));
const IronGateCommercial = lazy(() => import("./pages/Construction/IronGateCommercial").then((m) => ({ default: m.IronGateCommercial })));
const PrimeDeckBuilders = lazy(() => import("./pages/Construction/PrimeDeckBuilders").then((m) => ({ default: m.PrimeDeckBuilders })));
const StonefieldLandscapes = lazy(() => import("./pages/Construction/StonefieldLandscapes").then((m) => ({ default: m.StonefieldLandscapes })));
const CivicWorksContractors = lazy(() => import("./pages/Construction/CivicWorksContractors").then((m) => ({ default: m.CivicWorksContractors })));

// Ecommerce & Education
const CartBloomMarket = lazy(() => import("./pages/Ecommerce/CartBloomMarket").then((m) => ({ default: m.CartBloomMarket })));
const CycleBoxGear = lazy(() => import("./pages/Ecommerce/CycleBoxGear").then((m) => ({ default: m.CycleBoxGear })));
const DeskNestSupply = lazy(() => import("./pages/Ecommerce/DeskNestSupply").then((m) => ({ default: m.DeskNestSupply })));
const FieldNoteSkincare = lazy(() => import("./pages/Ecommerce/FieldNoteSkincare").then((m) => ({ default: m.FieldNoteSkincare })));
const GlowCartBeauty = lazy(() => import("./pages/Ecommerce/GlowCartBeauty").then((m) => ({ default: m.GlowCartBeauty })));
const HearthLinenLiving = lazy(() => import("./pages/Ecommerce/HearthLinenLiving").then((m) => ({ default: m.HearthLinenLiving })));
const LittleSproutToys = lazy(() => import("./pages/Ecommerce/LittleSproutToys").then((m) => ({ default: m.LittleSproutToys })));
const NorthKindOutdoor = lazy(() => import("./pages/Ecommerce/NorthKindOutdoor").then((m) => ({ default: m.NorthKindOutdoor })));
const PantryPilotGrocery = lazy(() => import("./pages/Ecommerce/PantryPilotGrocery").then((m) => ({ default: m.PantryPilotGrocery })));
const PawParcelPets = lazy(() => import("./pages/Ecommerce/PawParcelPets").then((m) => ({ default: m.PawParcelPets })));
const EcommerceIndex = lazy(() => import("./pages/Ecommerce/EcommerceIndex").then((m) => ({ default: m.EcommerceIndex })));
const EducationIndex = lazy(() => import("./pages/Education/EducationIndex").then((m) => ({ default: m.EducationIndex })));
const LearnSphereAcademy = lazy(() => import("./pages/Education/LearnSphereAcademy").then((m) => ({ default: m.LearnSphereAcademy })));
const BrightBridgeAcademy = lazy(() => import("./pages/Education/BrightBridgeAcademy").then((m) => ({ default: m.BrightBridgeAcademy })));
const AtlasCollegeCounseling = lazy(() => import("./pages/Education/AtlasCollegeCounseling").then((m) => ({ default: m.AtlasCollegeCounseling })));
const CodeNestKids = lazy(() => import("./pages/Education/CodeNestKids").then((m) => ({ default: m.CodeNestKids })));
const ExamEdgePrep = lazy(() => import("./pages/Education/ExamEdgePrep").then((m) => ({ default: m.ExamEdgePrep })));
const FluentPathLanguages = lazy(() => import("./pages/Education/FluentPathLanguages").then((m) => ({ default: m.FluentPathLanguages })));
const TutorLoop = lazy(() => import("./pages/Education/TutorLoop").then((m) => ({ default: m.TutorLoop })));
const SkillForge = lazy(() => import("./pages/Education/SkillForge").then((m) => ({ default: m.SkillForge })));
const ScholarSpring = lazy(() => import("./pages/Education/ScholarSpring").then((m) => ({ default: m.ScholarSpring })));
const ProTrackTrades = lazy(() => import("./pages/Education/ProTrackTrades").then((m) => ({ default: m.ProTrackTrades })));

// Fitness
const FitnessIndex = lazy(() => import("./pages/Fitness/FitnessIndexKinetic").then((m) => ({ default: m.FitnessIndex })));
const PulseForgeFitness = lazy(() => import("./pages/Fitness/PulseForgeFitnessPremium").then((m) => ({ default: m.PulseForgeFitness })));
const CoreLabPilates = lazy(() => import("./pages/Fitness/CoreLabPilates").then((m) => ({ default: m.CoreLabPilates })));
const IronDistrictGym = lazy(() => import("./pages/Fitness/IronDistrictGym").then((m) => ({ default: m.IronDistrictGym })));
const PeakRunCoaching = lazy(() => import("./pages/Fitness/PeakRunCoaching").then((m) => ({ default: m.PeakRunCoaching })));
const FlowStateYoga = lazy(() => import("./pages/Fitness/FlowStateYoga").then((m) => ({ default: m.FlowStateYoga })));
const BoxHouseTraining = lazy(() => import("./pages/Fitness/BoxHouseTraining").then((m) => ({ default: m.BoxHouseTraining })));
const VitalFormWellness = lazy(() => import("./pages/Fitness/VitalFormWellness").then((m) => ({ default: m.VitalFormWellness })));
const RideHausCycling = lazy(() => import("./pages/Fitness/RideHausCycling").then((m) => ({ default: m.RideHausCycling })));
const ElevateClimbing = lazy(() => import("./pages/Fitness/ElevateClimbing").then((m) => ({ default: m.ElevateClimbing })));
const ResetRecoveryClub = lazy(() => import("./pages/Fitness/ResetRecoveryClub").then((m) => ({ default: m.ResetRecoveryClub })));

// Medical
const MedicalIndex = lazy(() => import("./pages/Medical/MedicalIndex").then((m) => ({ default: m.MedicalIndex })));
const HarborHealthClinic = lazy(() => import("./pages/Medical/HarborHealthClinic").then((m) => ({ default: m.HarborHealthClinic })));
const BrightPathPediatrics = lazy(() => import("./pages/Medical/BrightPathPediatrics").then((m) => ({ default: m.BrightPathPediatrics })));
const NorthStarDental = lazy(() => import("./pages/Medical/NorthStarDental").then((m) => ({ default: m.NorthStarDental })));
const ClearViewOptometry = lazy(() => import("./pages/Medical/ClearViewOptometry").then((m) => ({ default: m.ClearViewOptometry })));
const RenewPhysicalTherapy = lazy(() => import("./pages/Medical/RenewPhysicalTherapy").then((m) => ({ default: m.RenewPhysicalTherapy })));
const MindWellCounseling = lazy(() => import("./pages/Medical/MindWellCounseling").then((m) => ({ default: m.MindWellCounseling })));
const HarborUrgentCare = lazy(() => import("./pages/Medical/HarborUrgentCare").then((m) => ({ default: m.HarborUrgentCare })));
const WillowWomensHealth = lazy(() => import("./pages/Medical/WillowWomensHealth").then((m) => ({ default: m.WillowWomensHealth })));
const PulseHeartCardiology = lazy(() => import("./pages/Medical/PulseHeartCardiology").then((m) => ({ default: m.PulseHeartCardiology })));
const ClearSkinDermatology = lazy(() => import("./pages/Medical/ClearSkinDermatology").then((m) => ({ default: m.ClearSkinDermatology })));

// Portfolio & Real Estate
const PortfolioIndex = lazy(() => import("./pages/Portfolio/PortfolioIndex").then((m) => ({ default: m.PortfolioIndex })));
const StudioValeCreative = lazy(() => import("./pages/Portfolio/StudioValeCreative").then((m) => ({ default: m.StudioValeCreative })));
const AxiomLabs = lazy(() => import("./pages/Portfolio/AxiomLabs").then((m) => ({ default: m.AxiomLabs })));
const ValeInteriorStudio = lazy(() => import("./pages/Portfolio/ValeInteriorStudio").then((m) => ({ default: m.ValeInteriorStudio })));
const SignalBrandDesigner = lazy(() => import("./pages/Portfolio/SignalBrandDesigner").then((m) => ({ default: m.SignalBrandDesigner })));
const NorthlineDeveloper = lazy(() => import("./pages/Portfolio/NorthlineDeveloper").then((m) => ({ default: m.NorthlineDeveloper })));
const MotionDeskStudio = lazy(() => import("./pages/Portfolio/MotionDeskStudio").then((m) => ({ default: m.MotionDeskStudio })));
const InkhouseCopy = lazy(() => import("./pages/Portfolio/InkhouseCopy").then((m) => ({ default: m.InkhouseCopy })));
const FrameLabPhoto = lazy(() => import("./pages/Portfolio/FrameLabPhoto").then((m) => ({ default: m.FrameLabPhoto })));
const CedarUXConsultant = lazy(() => import("./pages/Portfolio/CedarUXConsultant").then((m) => ({ default: m.CedarUXConsultant })));
const AtelierNorthArchitecture = lazy(() => import("./pages/Portfolio/AtelierNorthArchitecture").then((m) => ({ default: m.AtelierNorthArchitecture })));
const ArtisanObjects = lazy(() => import("./pages/Portfolio/ArtisanObjects").then((m) => ({ default: m.ArtisanObjects })));
const RealEstateIndex = lazy(() => import("./pages/RealEstate/RealEstateIndex").then((m) => ({ default: m.RealEstateIndex })));
const SkylineRealtyGroup = lazy(() => import("./pages/RealEstate/SkylineRealtyGroup").then((m) => ({ default: m.SkylineRealtyGroup })));
const HarborKeyHomes = lazy(() => import("./pages/RealEstate/HarborKeyHomes").then((m) => ({ default: m.HarborKeyHomes })));
const ApexCommercialRealty = lazy(() => import("./pages/RealEstate/ApexCommercialRealty").then((m) => ({ default: m.ApexCommercialRealty })));
const NestPathMortgage = lazy(() => import("./pages/RealEstate/NestPathMortgage").then((m) => ({ default: m.NestPathMortgage })));
const CedarStoneEstates = lazy(() => import("./pages/RealEstate/CedarStoneEstates").then((m) => ({ default: m.CedarStoneEstates })));
const MetroLoftRentals = lazy(() => import("./pages/RealEstate/MetroLoftRentals").then((m) => ({ default: m.MetroLoftRentals })));
const FoundryPropertyGroup = lazy(() => import("./pages/RealEstate/FoundryPropertyGroup").then((m) => ({ default: m.FoundryPropertyGroup })));
const SuncrestVacationVillas = lazy(() => import("./pages/RealEstate/SuncrestVacationVillas").then((m) => ({ default: m.SuncrestVacationVillas })));
const OaklinePropertyManagement = lazy(() => import("./pages/RealEstate/OaklinePropertyManagement").then((m) => ({ default: m.OaklinePropertyManagement })));
const KeyStartRealty = lazy(() => import("./pages/RealEstate/KeyStartRealtyEditorial").then((m) => ({ default: m.KeyStartRealty })));

// SaaS & Restaurants
const SaaSIndex = lazy(() => import("./pages/SaaS/SaaSIndex").then((m) => ({ default: m.SaaSIndex })));
const FlowPilotCRM = lazy(() => import("./pages/SaaS/FlowPilotCRM").then((m) => ({ default: m.FlowPilotCRM })));
const FlowPilotFeatures = lazy(() => import("./pages/SaaS/FlowPilotCRM").then((m) => ({ default: m.FlowPilotFeatures })));
const FlowPilotBenefits = lazy(() => import("./pages/SaaS/FlowPilotCRM").then((m) => ({ default: m.FlowPilotBenefits })));
const FlowPilotIntegrations = lazy(() => import("./pages/SaaS/FlowPilotCRM").then((m) => ({ default: m.FlowPilotIntegrations })));
const FlowPilotPricing = lazy(() => import("./pages/SaaS/FlowPilotCRM").then((m) => ({ default: m.FlowPilotPricing })));
const FlowPilotTrial = lazy(() => import("./pages/SaaS/FlowPilotCRM").then((m) => ({ default: m.FlowPilotTrial })));
const MetricNestAnalytics = lazy(() => import("./pages/SaaS/MetricNestAnalytics").then((m) => ({ default: m.MetricNestAnalytics })));
const MetricNestFeatures = lazy(() => import("./pages/SaaS/MetricNestAnalytics").then((m) => ({ default: m.MetricNestFeatures })));
const MetricNestSolutions = lazy(() => import("./pages/SaaS/MetricNestAnalytics").then((m) => ({ default: m.MetricNestSolutions })));
const MetricNestIntegrations = lazy(() => import("./pages/SaaS/MetricNestAnalytics").then((m) => ({ default: m.MetricNestIntegrations })));
const MetricNestPricing = lazy(() => import("./pages/SaaS/MetricNestAnalytics").then((m) => ({ default: m.MetricNestPricing })));
const MetricNestDemo = lazy(() => import("./pages/SaaS/MetricNestAnalytics").then((m) => ({ default: m.MetricNestDemo })));
const SupportDockAI = lazy(() => import("./pages/SaaS/SupportDockAI").then((m) => ({ default: m.SupportDockAI })));
const SupportDockFeatures = lazy(() => import("./pages/SaaS/SupportDockAI").then((m) => ({ default: m.SupportDockFeatures })));
const SupportDockPricing = lazy(() => import("./pages/SaaS/SupportDockAI").then((m) => ({ default: m.SupportDockPricing })));
const SupportDockIntegrations = lazy(() => import("./pages/SaaS/SupportDockAI").then((m) => ({ default: m.SupportDockIntegrations })));
const SupportDockBlog = lazy(() => import("./pages/SaaS/SupportDockAI").then((m) => ({ default: m.SupportDockBlog })));
const SupportDockTrial = lazy(() => import("./pages/SaaS/SupportDockAI").then((m) => ({ default: m.SupportDockTrial })));
const LaunchGridPM = lazy(() => import("./pages/SaaS/LaunchGridPM").then((m) => ({ default: m.LaunchGridPM })));
const LaunchGridFeatures = lazy(() => import("./pages/SaaS/LaunchGridPM").then((m) => ({ default: m.LaunchGridFeatures })));
const LaunchGridIntegrations = lazy(() => import("./pages/SaaS/LaunchGridPM").then((m) => ({ default: m.LaunchGridIntegrations })));
const LaunchGridPricing = lazy(() => import("./pages/SaaS/LaunchGridPM").then((m) => ({ default: m.LaunchGridPricing })));
const LaunchGridDemo = lazy(() => import("./pages/SaaS/LaunchGridPM").then((m) => ({ default: m.LaunchGridDemo })));
const LaunchGridTrial = lazy(() => import("./pages/SaaS/LaunchGridPM").then((m) => ({ default: m.LaunchGridTrial })));
const InvoicePilot = lazy(() => import("./pages/SaaS/InvoicePilot").then((m) => ({ default: m.InvoicePilot })));
const InvoicePilotFeatures = lazy(() => import("./pages/SaaS/InvoicePilot").then((m) => ({ default: m.InvoicePilotFeatures })));
const InvoicePilotPricing = lazy(() => import("./pages/SaaS/InvoicePilot").then((m) => ({ default: m.InvoicePilotPricing })));
const InvoicePilotIntegrations = lazy(() => import("./pages/SaaS/InvoicePilot").then((m) => ({ default: m.InvoicePilotIntegrations })));
const InvoicePilotBlog = lazy(() => import("./pages/SaaS/InvoicePilot").then((m) => ({ default: m.InvoicePilotBlog })));
const InvoicePilotTrial = lazy(() => import("./pages/SaaS/InvoicePilot").then((m) => ({ default: m.InvoicePilotTrial })));
const RecruitFlow = lazy(() => import("./pages/SaaS/RecruitFlow").then((m) => ({ default: m.RecruitFlow })));
const RecruitFlowFeatures = lazy(() => import("./pages/SaaS/RecruitFlow").then((m) => ({ default: m.RecruitFlowFeatures })));
const RecruitFlowPricing = lazy(() => import("./pages/SaaS/RecruitFlow").then((m) => ({ default: m.RecruitFlowPricing })));
const RecruitFlowIntegrations = lazy(() => import("./pages/SaaS/RecruitFlow").then((m) => ({ default: m.RecruitFlowIntegrations })));
const RecruitFlowCareers = lazy(() => import("./pages/SaaS/RecruitFlow").then((m) => ({ default: m.RecruitFlowCareers })));
const RecruitFlowTrial = lazy(() => import("./pages/SaaS/RecruitFlow").then((m) => ({ default: m.RecruitFlowTrial })));
const SecureLayer = lazy(() => import("./pages/SaaS/SecureLayer").then((m) => ({ default: m.SecureLayer })));
const SecureLayerFeatures = lazy(() => import("./pages/SaaS/SecureLayer").then((m) => ({ default: m.SecureLayerFeatures })));
const SecureLayerSolutions = lazy(() => import("./pages/SaaS/SecureLayer").then((m) => ({ default: m.SecureLayerSolutions })));
const SecureLayerIntegrations = lazy(() => import("./pages/SaaS/SecureLayer").then((m) => ({ default: m.SecureLayerIntegrations })));
const SecureLayerTrust = lazy(() => import("./pages/SaaS/SecureLayer").then((m) => ({ default: m.SecureLayerTrust })));
const SecureLayerPricing = lazy(() => import("./pages/SaaS/SecureLayer").then((m) => ({ default: m.SecureLayerPricing })));
const SecureLayerTrial = lazy(() => import("./pages/SaaS/SecureLayer").then((m) => ({ default: m.SecureLayerTrial })));
const PeoplePulseHR = lazy(() => import("./pages/SaaS/PeoplePulseHR").then((m) => ({ default: m.PeoplePulseHR })));
const PeoplePulseFeatures = lazy(() => import("./pages/SaaS/PeoplePulseHR").then((m) => ({ default: m.PeoplePulseFeatures })));
const PeoplePulseProduct = lazy(() => import("./pages/SaaS/PeoplePulseHR").then((m) => ({ default: m.PeoplePulseProduct })));
const PeoplePulseIntegrations = lazy(() => import("./pages/SaaS/PeoplePulseHR").then((m) => ({ default: m.PeoplePulseIntegrations })));
const PeoplePulsePricing = lazy(() => import("./pages/SaaS/PeoplePulseHR").then((m) => ({ default: m.PeoplePulsePricing })));
const PeoplePulseTrial = lazy(() => import("./pages/SaaS/PeoplePulseHR").then((m) => ({ default: m.PeoplePulseTrial })));
const ConsentLayerPrivacy = lazy(() => import("./pages/SaaS/ConsentLayerPrivacy").then((m) => ({ default: m.ConsentLayerPrivacy })));
const ConsentLayerFeatures = lazy(() => import("./pages/SaaS/ConsentLayerPrivacy").then((m) => ({ default: m.ConsentLayerFeatures })));
const ConsentLayerProduct = lazy(() => import("./pages/SaaS/ConsentLayerPrivacy").then((m) => ({ default: m.ConsentLayerProduct })));
const ConsentLayerIntegrations = lazy(() => import("./pages/SaaS/ConsentLayerPrivacy").then((m) => ({ default: m.ConsentLayerIntegrations })));
const ConsentLayerPricing = lazy(() => import("./pages/SaaS/ConsentLayerPrivacy").then((m) => ({ default: m.ConsentLayerPricing })));
const ConsentLayerTrial = lazy(() => import("./pages/SaaS/ConsentLayerPrivacy").then((m) => ({ default: m.ConsentLayerTrial })));
const RouteStackLogistics = lazy(() => import("./pages/SaaS/RouteStackLogistics").then((m) => ({ default: m.RouteStackLogistics })));
const RouteStackFeatures = lazy(() => import("./pages/SaaS/RouteStackLogistics").then((m) => ({ default: m.RouteStackFeatures })));
const RouteStackProduct = lazy(() => import("./pages/SaaS/RouteStackLogistics").then((m) => ({ default: m.RouteStackProduct })));
const RouteStackIntegrations = lazy(() => import("./pages/SaaS/RouteStackLogistics").then((m) => ({ default: m.RouteStackIntegrations })));
const RouteStackPricing = lazy(() => import("./pages/SaaS/RouteStackLogistics").then((m) => ({ default: m.RouteStackPricing })));
const RouteStackTrial = lazy(() => import("./pages/SaaS/RouteStackLogistics").then((m) => ({ default: m.RouteStackTrial })));
const RestaurantIndex = lazy(() => import("./pages/Restaurant/RestaurantIndex").then((m) => ({ default: m.RestaurantIndex })));
const BrewNestCoffee = lazy(() => import("./pages/Restaurant/BrewNestCoffee").then((m) => ({ default: m.BrewNestCoffee })));
const BurgerCraft = lazy(() => import("./pages/Restaurant/BurgerCraft").then((m) => ({ default: m.BurgerCraft })));
const EmberSteakhouse = lazy(() => import("./pages/Restaurant/EmberSteakhouse").then((m) => ({ default: m.EmberSteakhouse })));
const FreshBowlCafe = lazy(() => import("./pages/Restaurant/FreshBowlCafe").then((m) => ({ default: m.FreshBowlCafe })));
const GoldenCrustBakery = lazy(() => import("./pages/Restaurant/GoldenCrustBakery").then((m) => ({ default: m.GoldenCrustBakery })));
const LunaPizzaHouse = lazy(() => import("./pages/Restaurant/LunaPizzaHouse").then((m) => ({ default: m.LunaPizzaHouse })));
const MorningLeafTea = lazy(() => import("./pages/Restaurant/MorningLeafTea").then((m) => ({ default: m.MorningLeafTea })));
const OceanPlateSeafood = lazy(() => import("./pages/Restaurant/OceanPlateSeafood").then((m) => ({ default: m.OceanPlateSeafood })));
const SpiceRouteGrill = lazy(() => import("./pages/Restaurant/SpiceRouteGrill").then((m) => ({ default: m.SpiceRouteGrill })));
const UrbanBiteKitchen = lazy(() => import("./pages/Restaurant/UrbanBiteKitchen").then((m) => ({ default: m.UrbanBiteKitchen })));

// Fallback pages
const NotFound = lazy(() => import("./pages/NotFound").then((m) => ({ default: m.NotFound })));
const ComingSoon = lazy(() => import("./components/ComingSoon"));
const PlaceholderPage = lazy(() => import("./pages/PlaceholderPage").then((m) => ({ default: m.PlaceholderPage })));

function ComingSoonRoute() {
  const { pathname } = useLocation();
  const pathParts = pathname.split("/").filter(Boolean);
  const category = pathParts[0];
  const slug = pathParts[1];

  const categoryLabelMap: Record<string, string> = {
    restaurant: "Restaurant",
    beauty: "Beauty",
    "real-estate": "Real Estate",
    fitness: "Fitness",
    medical: "Medical",
    construction: "Construction",
    education: "Education",
    "e-commerce": "E-commerce",
    portfolio: "Portfolio",
    saas: "SaaS",
  };

  const prettySlug = (value?: string) =>
    value
      ? value
          .split("-")
          .filter(Boolean)
          .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
          .join(" ")
      : "This concept";

  return (
    <ComingSoon
      siteName={prettySlug(slug)}
      category={categoryLabelMap[category] ?? "Website"}
      description={`This ${categoryLabelMap[category]?.toLowerCase() ?? "website"} concept is being prepared and will be published soon with a complete experience.`}
      backHref={category ? `/${category}` : "/"}
    />
  );
}

function AppShell() {
  const { pathname } = useLocation();
  const isDemoPage =
    (pathname.startsWith("/restaurant/") && pathname !== "/restaurant") ||
    (pathname.startsWith("/beauty/") && pathname !== "/beauty") ||
    (pathname.startsWith("/real-estate/") && pathname !== "/real-estate") ||
    (pathname.startsWith("/fitness/") && pathname !== "/fitness") ||
    (pathname.startsWith("/medical/") && pathname !== "/medical") ||
    (pathname.startsWith("/construction/") && pathname !== "/construction") ||
    (pathname.startsWith("/education/") && pathname !== "/education") ||
    (pathname.startsWith("/e-commerce/") && pathname !== "/e-commerce") ||
    (pathname.startsWith("/portfolio/") && pathname !== "/portfolio") ||
    (pathname.startsWith("/saas/") && pathname !== "/saas") ||
    pathname.startsWith("/flowpilot") ||
    pathname.startsWith("/metricnest") ||
    pathname.startsWith("/supportdock") ||
    pathname.startsWith("/launchgrid") ||
    pathname.startsWith("/invoicepilot") ||
    pathname.startsWith("/recruitflow") ||
    pathname.startsWith("/securelayer") ||
    pathname.startsWith("/peoplepulse") ||
    pathname.startsWith("/consentlayer") ||
    pathname.startsWith("/routestack");

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isShortlistOpen, setIsShortlistOpen] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const rawDevice = searchParams.get('device');
  const initialDevice: DeviceMode = (rawDevice === 'tablet' || rawDevice === 'mobile') ? rawDevice : 'desktop';
  const [deviceMode, setDeviceMode] = useState<DeviceMode>(initialDevice);

  const handleDeviceModeChange = (mode: DeviceMode) => {
    setDeviceMode(mode);
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (mode === 'desktop') {
          next.delete('device');
        } else {
          next.set('device', mode);
        }
        return next;
      },
      { replace: true }
    );
  };

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
    document.body.style.overflow = '';
    const currentDeviceParam = searchParams.get('device');
    if (currentDeviceParam === 'tablet' || currentDeviceParam === 'mobile') {
      setDeviceMode(currentDeviceParam);
    } else {
      setDeviceMode('desktop');
    }
  }, [pathname]);

  // Deep-link auto-import and open for shared shortlist (?shortlist=id1,id2)
  useEffect(() => {
    const shortlistParam = searchParams.get('shortlist');
    if (shortlistParam) {
      const ids = shortlistParam.split(',').map((id) => id.trim()).filter(Boolean);
      if (ids.length > 0) {
        importFavoriteIds(ids);
        setIsShortlistOpen(true);
      }
    }
  }, [searchParams]);

  // Dynamic document title based on active template or category
  useEffect(() => {
    const cleanPath = pathname.toLowerCase();
    const matched = allWebsites.find((site) => {
      const catPath = site.category.toLowerCase().replace(/\s+/g, '-');
      return (
        cleanPath === `/${catPath}/${site.slug}` ||
        cleanPath.startsWith(`/${catPath}/${site.slug}/`) ||
        cleanPath === `/${site.slug}` ||
        cleanPath.startsWith(`/${site.slug}/`)
      );
    }) || allWebsites.find((site) => cleanPath.includes(site.slug));

    if (matched) {
      document.title = `${matched.title} — ${matched.category} | 100Web`;
      return;
    }
    const catMap: Record<string, string> = {
      restaurant: "Restaurant & Dining",
      beauty: "Beauty & Wellness",
      "real-estate": "Real Estate & Architecture",
      fitness: "Fitness & Athletics",
      medical: "Healthcare & Medical",
      construction: "Construction & Trades",
      education: "Education & Learning",
      "e-commerce": "E-Commerce & Retail",
      portfolio: "Creative & Portfolios",
      saas: "SaaS & Software",
    };
    const firstSegment = pathname.split("/").filter(Boolean)[0];
    if (firstSegment && catMap[firstSegment]) {
      document.title = `${catMap[firstSegment]} — 100Web Showcase`;
    } else if (pathname === "/") {
      document.title = "100Web — 100 Production Ready Modern Website Templates";
    } else {
      document.title = "100Web — Modern Web Experience Showcase";
    }
  }, [pathname]);

  // Global spotlight keyboard shortcut: Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div
      className={`flex min-h-screen flex-col ${isDemoPage ? "demo-mode" : ""}`}
    >
      <CommandPalette
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <ShortlistDrawer
        isOpen={isShortlistOpen}
        onClose={() => setIsShortlistOpen(false)}
      />
      {isDemoPage && (
        <ShowcaseToolbar
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenShortlist={() => setIsShortlistOpen(true)}
          deviceMode={deviceMode}
          onDeviceModeChange={handleDeviceModeChange}
        />
      )}
      {isDemoPage ? (
        <Navbar
          mode="floating"
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenShortlist={() => setIsShortlistOpen(true)}
        />
      ) : (
        <Navbar
          onOpenSearch={() => setIsSearchOpen(true)}
          onOpenShortlist={() => setIsShortlistOpen(true)}
        />
      )}
      <div
        className={`flex-grow ${isDemoPage ? "" : "pt-16"} ${
          isDemoPage && deviceMode !== 'desktop'
            ? "bg-slate-950/95 py-8 px-4 transition-colors duration-300 min-h-screen flex flex-col items-center justify-start"
            : ""
        }`}
      >
        <div
          className={
            isDemoPage && deviceMode !== 'desktop'
              ? `w-full bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] border-[12px] border-slate-900 overflow-x-hidden overflow-y-auto transition-all duration-300 relative flex flex-col ${
                  deviceMode === 'tablet'
                    ? 'max-w-[768px] min-h-[960px] rounded-[36px]'
                    : 'max-w-[390px] min-h-[844px] rounded-[48px]'
                }`
              : 'contents'
          }
        >
          {isDemoPage && deviceMode !== 'desktop' && (
            <div className="bg-slate-900 py-1.5 px-6 flex items-center justify-between shrink-0 select-none z-50 border-b border-slate-800">
              <span className="text-[11px] font-semibold text-slate-200 tracking-wider font-mono">9:41</span>
              {deviceMode === 'mobile' ? (
                <div className="w-24 h-5 bg-black rounded-full flex items-center justify-end pr-2 ring-1 ring-slate-800">
                  <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-700/80" />
                </div>
              ) : (
                <div className="w-12 h-1 bg-slate-700 rounded-full" />
              )}
              <div className="flex items-center gap-1.5 text-[10px] text-slate-300 font-medium">
                <span>5G</span>
                <span>100%</span>
              </div>
            </div>
          )}

          <div className={isDemoPage && deviceMode !== 'desktop' ? "flex-grow flex flex-col overflow-x-hidden" : ""}>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
            <Route path="/beauty" element={<BeautyIndex />} />
            <Route path="/beauty/glowhaus-salon" element={<GlowHausSalon />} />
            <Route path="/beauty/luxe-nail-studio" element={<LuxeNailStudio />} />
            <Route path="/beauty/serenity-spa" element={<SerenitySpa />} />
            <Route path="/beauty/blush-beauty-bar" element={<BlushBeautyBar />} />
            <Route
              path="/beauty/velvet-skin-clinic"
              element={<VelvetSkinClinic />}
            />
            <Route
              path="/beauty/crown-comb-barber"
              element={<CrownCombBarber />}
            />
            <Route
              path="/beauty/pureglow-aesthetics"
              element={<PureGlowAesthetics />}
            />
            <Route
              path="/beauty/bloom-bridal-studio"
              element={<BloomBridalStudio />}
            />
            <Route path="/beauty/silk-style-hair" element={<SilkStyleHair />} />
            <Route
              path="/beauty/aura-wellness-spa"
              element={<AuraWellnessSpa />}
            />
            <Route path="/real-estate" element={<RealEstateIndex />} />
            <Route
              path="/real-estate/skyline-realty-group"
              element={<SkylineRealtyGroup />}
            />
            <Route
              path="/real-estate/harborkey-homes"
              element={<HarborKeyHomes />}
            />
            <Route
              path="/real-estate/apex-commercial-realty"
              element={<ApexCommercialRealty />}
            />
            <Route
              path="/real-estate/nestpath-mortgage"
              element={<NestPathMortgage />}
            />
            <Route
              path="/real-estate/cedar-stone-estates"
              element={<CedarStoneEstates />}
            />
            <Route
              path="/real-estate/metroloft-rentals"
              element={<MetroLoftRentals />}
            />
            <Route
              path="/real-estate/foundry-property-group"
              element={<FoundryPropertyGroup />}
            />
            <Route
              path="/real-estate/suncrest-vacation-villas"
              element={<SuncrestVacationVillas />}
            />
            <Route
              path="/real-estate/oakline-property-management"
              element={<OaklinePropertyManagement />}
            />
            <Route
              path="/real-estate/keystart-realty"
              element={<KeyStartRealty />}
            />
            <Route path="/fitness" element={<FitnessIndex />} />
            <Route
              path="/fitness/pulseforge-fitness"
              element={<PulseForgeFitness />}
            />
            <Route path="/fitness/corelab-pilates" element={<CoreLabPilates />} />
            <Route
              path="/fitness/irondistrict-gym"
              element={<IronDistrictGym />}
            />
            <Route
              path="/fitness/peakrun-coaching"
              element={<PeakRunCoaching />}
            />
            <Route path="/fitness/flowstate-yoga" element={<FlowStateYoga />} />
            <Route
              path="/fitness/boxhouse-training"
              element={<BoxHouseTraining />}
            />
            <Route
              path="/fitness/vitalform-wellness"
              element={<VitalFormWellness />}
            />
            <Route
              path="/fitness/ridehaus-cycling"
              element={<RideHausCycling />}
            />
            <Route
              path="/fitness/elevate-climbing"
              element={<ElevateClimbing />}
            />
            <Route
              path="/fitness/reset-recovery-club"
              element={<ResetRecoveryClub />}
            />
            <Route path="/medical" element={<MedicalIndex />} />
            <Route
              path="/medical/harbor-health-clinic"
              element={<HarborHealthClinic />}
            />
            <Route
              path="/medical/brightpath-pediatrics"
              element={<BrightPathPediatrics />}
            />
            <Route
              path="/medical/northstar-dental"
              element={<NorthStarDental />}
            />
            <Route
              path="/medical/north-star-dental"
              element={<NorthStarDental />}
            />
            <Route path="/medical/northstar" element={<NorthStarDental />} />
            <Route
              path="/medical/clearview-optometry"
              element={<ClearViewOptometry />}
            />
            <Route
              path="/medical/clear-view-optometry"
              element={<ClearViewOptometry />}
            />
            <Route path="/medical/clearview" element={<ClearViewOptometry />} />
            <Route
              path="/medical/renew-physical-therapy"
              element={<RenewPhysicalTherapy />}
            />
            <Route
              path="/medical/renewphysical"
              element={<RenewPhysicalTherapy />}
            />
            <Route path="/medical/renew-pt" element={<RenewPhysicalTherapy />} />
            <Route
              path="/medical/mindwell-counseling"
              element={<MindWellCounseling />}
            />
            <Route path="/medical/mindwell" element={<MindWellCounseling />} />
            <Route
              path="/medical/mind-well-counseling"
              element={<MindWellCounseling />}
            />
            <Route
              path="/medical/harbor-urgent-care"
              element={<HarborUrgentCare />}
            />
            <Route path="/medical/harbor-urgent" element={<HarborUrgentCare />} />
            <Route
              path="/medical/willow-womens-health"
              element={<WillowWomensHealth />}
            />
            <Route
              path="/medical/willow-women-health"
              element={<WillowWomensHealth />}
            />
            <Route path="/medical/willow" element={<WillowWomensHealth />} />
            <Route
              path="/medical/pulseheart-cardiology"
              element={<PulseHeartCardiology />}
            />
            <Route
              path="/medical/pulse-heart-cardiology"
              element={<PulseHeartCardiology />}
            />
            <Route
              path="/medical/pulseheart"
              element={<PulseHeartCardiology />}
            />
            <Route
              path="/medical/clearskin-dermatology"
              element={<ClearSkinDermatology />}
            />
            <Route
              path="/medical/clear-skin-dermatology"
              element={<ClearSkinDermatology />}
            />
            <Route path="/medical/clearskin" element={<ClearSkinDermatology />} />
            <Route path="/construction" element={<ConstructionIndex />} />
            <Route
              path="/construction/forgepoint-builders"
              element={<ForgePointBuilders />}
            />
            <Route
              path="/construction/summit-roof-co"
              element={<SummitRoofCo />}
            />
            <Route path="/construction/summit-roof" element={<SummitRoofCo />} />
            <Route path="/construction/summitroof" element={<SummitRoofCo />} />
            <Route
              path="/construction/summitroof-co"
              element={<SummitRoofCo />}
            />
            <Route
              path="/construction/clearline-remodeling"
              element={<ClearlineRemodeling />}
            />
            <Route
              path="/construction/clearline"
              element={<ClearlineRemodeling />}
            />
            <Route
              path="/construction/clearlineremodeling"
              element={<ClearlineRemodeling />}
            />
            <Route
              path="/construction/clearline-remodelers"
              element={<ClearlineRemodeling />}
            />
            <Route
              path="/construction/forgeline-electric"
              element={<ForgeLineElectric />}
            />
            <Route
              path="/construction/terraform-concrete"
              element={<TerraFormConcrete />}
            />
            <Route
              path="/clearline-remodeling"
              element={<ClearlineRemodeling />}
            />
            <Route path="/clearline" element={<ClearlineRemodeling />} />
            <Route
              path="/construction/irongate-commercial"
              element={<IronGateCommercial />}
            />
            <Route
              path="/construction/irongate"
              element={<IronGateCommercial />}
            />
            <Route
              path="/construction/irongatecommercial"
              element={<IronGateCommercial />}
            />
            <Route
              path="/construction/prime-deck-builders"
              element={<PrimeDeckBuilders />}
            />
            <Route
              path="/construction/primedeck-builders"
              element={<PrimeDeckBuilders />}
            />
            <Route
              path="/construction/primedeck"
              element={<PrimeDeckBuilders />}
            />
            <Route
              path="/construction/stonefield-landscapes"
              element={<StonefieldLandscapes />}
            />
            <Route
              path="/construction/stonefield"
              element={<StonefieldLandscapes />}
            />
            <Route
              path="/construction/stonefieldlandscapes"
              element={<StonefieldLandscapes />}
            />
            <Route
              path="/construction/bluepeak-plumbing"
              element={<BluePeakPlumbing />}
            />
            <Route
              path="/construction/bluepeak"
              element={<BluePeakPlumbing />}
            />
            <Route
              path="/construction/bluepeakplumbing"
              element={<BluePeakPlumbing />}
            />
            <Route
              path="/construction/civicworks-contractors"
              element={<CivicWorksContractors />}
            />
            <Route
              path="/construction/civic-works-contractors"
              element={<CivicWorksContractors />}
            />
            <Route
              path="/construction/civicworks"
              element={<CivicWorksContractors />}
            />
            <Route
              path="/construction/civic-works"
              element={<CivicWorksContractors />}
            />
            <Route
              path="/civicworks-contractors"
              element={<CivicWorksContractors />}
            />
            <Route path="/civicworks" element={<CivicWorksContractors />} />
            <Route path="/education" element={<EducationIndex />} />
            <Route
              path="/education/learnsphere-academy"
              element={<LearnSphereAcademy />}
            />
            <Route
              path="/education/learnsphere"
              element={<LearnSphereAcademy />}
            />
            <Route
              path="/education/brightbridge-academy"
              element={<BrightBridgeAcademy />}
            />
            <Route
              path="/education/atlas-college-counseling"
              element={<AtlasCollegeCounseling />}
            />
            <Route path="/education/codenest-kids" element={<CodeNestKids />} />
            <Route path="/education/exam-edge-prep" element={<ExamEdgePrep />} />
            <Route
              path="/education/fluentpath-languages"
              element={<FluentPathLanguages />}
            />
            <Route path="/education/tutorloop" element={<TutorLoop />} />
            <Route path="/education/tutor-loop" element={<TutorLoop />} />
            <Route path="/education/skillforge" element={<SkillForge />} />
            <Route path="/education/skillforge-workshops" element={<SkillForge />} />
            <Route path="/education/scholarspring" element={<ScholarSpring />} />
            <Route path="/education/scholar-spring" element={<ScholarSpring />} />
            <Route path="/education/protrack" element={<ProTrackTrades />} />
            <Route path="/education/protrack-trades" element={<ProTrackTrades />} />
            <Route path="/e-commerce" element={<EcommerceIndex />} />
            <Route path="/ecommerce" element={<EcommerceIndex />} />
            <Route
              path="/e-commerce/cartbloom-market"
              element={<CartBloomMarket />}
            />
            <Route
              path="/e-commerce/cartbloom"
              element={<CartBloomMarket />}
            />
            <Route
              path="/ecommerce/cartbloom-market"
              element={<CartBloomMarket />}
            />
            <Route
              path="/ecommerce/cartbloom"
              element={<CartBloomMarket />}
            />
            <Route
              path="/e-commerce/cyclebox-gear"
              element={<CycleBoxGear />}
            />
            <Route
              path="/e-commerce/cyclebox"
              element={<CycleBoxGear />}
            />
            <Route
              path="/ecommerce/cyclebox-gear"
              element={<CycleBoxGear />}
            />
            <Route
              path="/ecommerce/cyclebox"
              element={<CycleBoxGear />}
            />
            <Route
              path="/e-commerce/desknest-supply"
              element={<DeskNestSupply />}
            />
            <Route
              path="/e-commerce/desknest"
              element={<DeskNestSupply />}
            />
            <Route
              path="/ecommerce/desknest-supply"
              element={<DeskNestSupply />}
            />
            <Route
              path="/ecommerce/desknest"
              element={<DeskNestSupply />}
            />
            <Route
              path="/e-commerce/fieldnote-skincare"
              element={<FieldNoteSkincare />}
            />
            <Route
              path="/e-commerce/fieldnote"
              element={<FieldNoteSkincare />}
            />
            <Route
              path="/ecommerce/fieldnote-skincare"
              element={<FieldNoteSkincare />}
            />
            <Route
              path="/ecommerce/fieldnote"
              element={<FieldNoteSkincare />}
            />
            <Route
              path="/e-commerce/glowcart-beauty"
              element={<GlowCartBeauty />}
            />
            <Route
              path="/e-commerce/glowcart"
              element={<GlowCartBeauty />}
            />
            <Route
              path="/ecommerce/glowcart-beauty"
              element={<GlowCartBeauty />}
            />
            <Route
              path="/ecommerce/glowcart"
              element={<GlowCartBeauty />}
            />
            <Route
              path="/e-commerce/hearth-linen"
              element={<HearthLinenLiving />}
            />
            <Route
              path="/e-commerce/hearthlinen"
              element={<HearthLinenLiving />}
            />
            <Route
              path="/ecommerce/hearth-linen"
              element={<HearthLinenLiving />}
            />
            <Route
              path="/ecommerce/hearthlinen"
              element={<HearthLinenLiving />}
            />
            <Route
              path="/e-commerce/little-sprout"
              element={<LittleSproutToys />}
            />
            <Route
              path="/e-commerce/littlesprout"
              element={<LittleSproutToys />}
            />
            <Route
              path="/ecommerce/little-sprout"
              element={<LittleSproutToys />}
            />
            <Route
              path="/ecommerce/littlesprout"
              element={<LittleSproutToys />}
            />
            <Route
              path="/e-commerce/north-kind"
              element={<NorthKindOutdoor />}
            />
            <Route
              path="/e-commerce/northkind"
              element={<NorthKindOutdoor />}
            />
            <Route
              path="/ecommerce/north-kind"
              element={<NorthKindOutdoor />}
            />
            <Route
              path="/ecommerce/northkind"
              element={<NorthKindOutdoor />}
            />
            <Route
              path="/e-commerce/pantry-pilot"
              element={<PantryPilotGrocery />}
            />
            <Route
              path="/e-commerce/pantrypilot"
              element={<PantryPilotGrocery />}
            />
            <Route
              path="/ecommerce/pantry-pilot"
              element={<PantryPilotGrocery />}
            />
            <Route
              path="/ecommerce/pantrypilot"
              element={<PantryPilotGrocery />}
            />
            <Route
              path="/e-commerce/paw-parcel"
              element={<PawParcelPets />}
            />
            <Route
              path="/e-commerce/pawparcel"
              element={<PawParcelPets />}
            />
            <Route
              path="/ecommerce/paw-parcel"
              element={<PawParcelPets />}
            />
            <Route
              path="/ecommerce/pawparcel"
              element={<PawParcelPets />}
            />
            <Route path="/portfolio" element={<PortfolioIndex />} />
            <Route
              path="/portfolio/studio-vale-creative"
              element={<StudioValeCreative />}
            />
            <Route
              path="/portfolio/axiom-labs"
              element={<AxiomLabs />}
            />
            <Route
              path="/portfolio/axiomlabs"
              element={<AxiomLabs />}
            />
            <Route
              path="/axiom-labs"
              element={<AxiomLabs />}
            />
            <Route
              path="/axiomlabs"
              element={<AxiomLabs />}
            />
            <Route
              path="/portfolio/vale-interior-studio"
              element={<ValeInteriorStudio />}
            />
            <Route
              path="/portfolio/vale"
              element={<ValeInteriorStudio />}
            />
            <Route
              path="/vale-interior-studio"
              element={<ValeInteriorStudio />}
            />
            <Route
              path="/vale"
              element={<ValeInteriorStudio />}
            />
            <Route
              path="/portfolio/signal-brand-designer"
              element={<SignalBrandDesigner />}
            />
            <Route
              path="/portfolio/signal"
              element={<SignalBrandDesigner />}
            />
            <Route
              path="/signal-brand-designer"
              element={<SignalBrandDesigner />}
            />
            <Route
              path="/signal"
              element={<SignalBrandDesigner />}
            />
            <Route
              path="/portfolio/northline-developer"
              element={<NorthlineDeveloper />}
            />
            <Route
              path="/portfolio/northline"
              element={<NorthlineDeveloper />}
            />
            <Route
              path="/northline-developer"
              element={<NorthlineDeveloper />}
            />
            <Route
              path="/northline"
              element={<NorthlineDeveloper />}
            />
            <Route
              path="/portfolio/motiondesk-studio"
              element={<MotionDeskStudio />}
            />
            <Route
              path="/portfolio/motiondesk"
              element={<MotionDeskStudio />}
            />
            <Route
              path="/motiondesk-studio"
              element={<MotionDeskStudio />}
            />
            <Route
              path="/motiondesk"
              element={<MotionDeskStudio />}
            />
            <Route
              path="/portfolio/inkhouse-copy"
              element={<InkhouseCopy />}
            />
            <Route
              path="/portfolio/inkhouse"
              element={<InkhouseCopy />}
            />
            <Route
              path="/inkhouse-copy"
              element={<InkhouseCopy />}
            />
            <Route
              path="/inkhouse"
              element={<InkhouseCopy />}
            />
            <Route
              path="/portfolio/framelab-photo"
              element={<FrameLabPhoto />}
            />
            <Route
              path="/portfolio/framelab"
              element={<FrameLabPhoto />}
            />
            <Route
              path="/framelab-photo"
              element={<FrameLabPhoto />}
            />
            <Route
              path="/framelab"
              element={<FrameLabPhoto />}
            />
            <Route
              path="/portfolio/cedar-ux-consultant"
              element={<CedarUXConsultant />}
            />
            <Route
              path="/portfolio/cedar"
              element={<CedarUXConsultant />}
            />
            <Route
              path="/cedar-ux-consultant"
              element={<CedarUXConsultant />}
            />
            <Route
              path="/cedar"
              element={<CedarUXConsultant />}
            />
            <Route
              path="/portfolio/atelier-north-architecture"
              element={<AtelierNorthArchitecture />}
            />
            <Route
              path="/portfolio/atelier-north"
              element={<AtelierNorthArchitecture />}
            />
            <Route
              path="/atelier-north-architecture"
              element={<AtelierNorthArchitecture />}
            />
            <Route
              path="/atelier-north"
              element={<AtelierNorthArchitecture />}
            />
            <Route
              path="/portfolio/artisan-objects"
              element={<ArtisanObjects />}
            />
            <Route
              path="/portfolio/artisan"
              element={<ArtisanObjects />}
            />
            <Route
              path="/artisan-objects"
              element={<ArtisanObjects />}
            />
            <Route
              path="/artisan"
              element={<ArtisanObjects />}
            />
            <Route path="/saas" element={<SaaSIndex />} />
            <Route path="/saas/flowpilot-crm" element={<FlowPilotCRM />} />
            <Route path="/saas/flowpilot-crm/features" element={<FlowPilotFeatures />} />
            <Route path="/saas/flowpilot-crm/benefits" element={<FlowPilotBenefits />} />
            <Route path="/saas/flowpilot-crm/integrations" element={<FlowPilotIntegrations />} />
            <Route path="/saas/flowpilot-crm/pricing" element={<FlowPilotPricing />} />
            <Route path="/saas/flowpilot-crm/trial" element={<FlowPilotTrial />} />
            <Route path="/flowpilot" element={<FlowPilotCRM />} />
            <Route path="/flowpilot/features" element={<FlowPilotFeatures />} />
            <Route path="/flowpilot/benefits" element={<FlowPilotBenefits />} />
            <Route path="/flowpilot/integrations" element={<FlowPilotIntegrations />} />
            <Route path="/flowpilot/pricing" element={<FlowPilotPricing />} />
            <Route path="/flowpilot/trial" element={<FlowPilotTrial />} />
            <Route path="/saas/metricnest-analytics" element={<MetricNestAnalytics />} />
            <Route path="/saas/metricnest-analytics/features" element={<MetricNestFeatures />} />
            <Route path="/saas/metricnest-analytics/solutions" element={<MetricNestSolutions />} />
            <Route path="/saas/metricnest-analytics/integrations" element={<MetricNestIntegrations />} />
            <Route path="/saas/metricnest-analytics/pricing" element={<MetricNestPricing />} />
            <Route path="/saas/metricnest-analytics/demo" element={<MetricNestDemo />} />
            <Route path="/metricnest" element={<MetricNestAnalytics />} />
            <Route path="/metricnest/features" element={<MetricNestFeatures />} />
            <Route path="/metricnest/solutions" element={<MetricNestSolutions />} />
            <Route path="/metricnest/integrations" element={<MetricNestIntegrations />} />
            <Route path="/metricnest/pricing" element={<MetricNestPricing />} />
            <Route path="/metricnest/demo" element={<MetricNestDemo />} />
            <Route path="/saas/supportdock-ai" element={<SupportDockAI />} />
            <Route path="/saas/supportdock-ai/features" element={<SupportDockFeatures />} />
            <Route path="/saas/supportdock-ai/pricing" element={<SupportDockPricing />} />
            <Route path="/saas/supportdock-ai/integrations" element={<SupportDockIntegrations />} />
            <Route path="/saas/supportdock-ai/blog" element={<SupportDockBlog />} />
            <Route path="/saas/supportdock-ai/trial" element={<SupportDockTrial />} />
            <Route path="/supportdock" element={<SupportDockAI />} />
            <Route path="/supportdock/features" element={<SupportDockFeatures />} />
            <Route path="/supportdock/pricing" element={<SupportDockPricing />} />
            <Route path="/supportdock/integrations" element={<SupportDockIntegrations />} />
            <Route path="/supportdock/blog" element={<SupportDockBlog />} />
            <Route path="/supportdock/trial" element={<SupportDockTrial />} />
            <Route path="/saas/launchgrid-pm" element={<LaunchGridPM />} />
            <Route path="/saas/launchgrid-pm/features" element={<LaunchGridFeatures />} />
            <Route path="/saas/launchgrid-pm/integrations" element={<LaunchGridIntegrations />} />
            <Route path="/saas/launchgrid-pm/pricing" element={<LaunchGridPricing />} />
            <Route path="/saas/launchgrid-pm/demo" element={<LaunchGridDemo />} />
            <Route path="/saas/launchgrid-pm/trial" element={<LaunchGridTrial />} />
            <Route path="/launchgrid" element={<LaunchGridPM />} />
            <Route path="/launchgrid/features" element={<LaunchGridFeatures />} />
            <Route path="/launchgrid/integrations" element={<LaunchGridIntegrations />} />
            <Route path="/launchgrid/pricing" element={<LaunchGridPricing />} />
            <Route path="/launchgrid/demo" element={<LaunchGridDemo />} />
            <Route path="/launchgrid/trial" element={<LaunchGridTrial />} />
            <Route path="/saas/invoicepilot" element={<InvoicePilot />} />
            <Route path="/saas/invoicepilot/features" element={<InvoicePilotFeatures />} />
            <Route path="/saas/invoicepilot/pricing" element={<InvoicePilotPricing />} />
            <Route path="/saas/invoicepilot/integrations" element={<InvoicePilotIntegrations />} />
            <Route path="/saas/invoicepilot/blog" element={<InvoicePilotBlog />} />
            <Route path="/saas/invoicepilot/trial" element={<InvoicePilotTrial />} />
            <Route path="/invoicepilot" element={<InvoicePilot />} />
            <Route path="/invoicepilot/features" element={<InvoicePilotFeatures />} />
            <Route path="/invoicepilot/pricing" element={<InvoicePilotPricing />} />
            <Route path="/invoicepilot/integrations" element={<InvoicePilotIntegrations />} />
            <Route path="/invoicepilot/blog" element={<InvoicePilotBlog />} />
            <Route path="/invoicepilot/trial" element={<InvoicePilotTrial />} />
            <Route path="/saas/recruitflow" element={<RecruitFlow />} />
            <Route path="/saas/recruitflow/features" element={<RecruitFlowFeatures />} />
            <Route path="/saas/recruitflow/integrations" element={<RecruitFlowIntegrations />} />
            <Route path="/saas/recruitflow/pricing" element={<RecruitFlowPricing />} />
            <Route path="/saas/recruitflow/careers" element={<RecruitFlowCareers />} />
            <Route path="/saas/recruitflow/trial" element={<RecruitFlowTrial />} />
            <Route path="/recruitflow" element={<RecruitFlow />} />
            <Route path="/recruitflow/features" element={<RecruitFlowFeatures />} />
            <Route path="/recruitflow/integrations" element={<RecruitFlowIntegrations />} />
            <Route path="/recruitflow/pricing" element={<RecruitFlowPricing />} />
            <Route path="/recruitflow/careers" element={<RecruitFlowCareers />} />
            <Route path="/recruitflow/trial" element={<RecruitFlowTrial />} />
            <Route path="/saas/securelayer" element={<SecureLayer />} />
            <Route path="/saas/securelayer/features" element={<SecureLayerFeatures />} />
            <Route path="/saas/securelayer/solutions" element={<SecureLayerSolutions />} />
            <Route path="/saas/securelayer/integrations" element={<SecureLayerIntegrations />} />
            <Route path="/saas/securelayer/trust" element={<SecureLayerTrust />} />
            <Route path="/saas/securelayer/pricing" element={<SecureLayerPricing />} />
            <Route path="/saas/securelayer/trial" element={<SecureLayerTrial />} />
            <Route path="/securelayer" element={<SecureLayer />} />
            <Route path="/securelayer/features" element={<SecureLayerFeatures />} />
            <Route path="/securelayer/solutions" element={<SecureLayerSolutions />} />
            <Route path="/securelayer/integrations" element={<SecureLayerIntegrations />} />
            <Route path="/securelayer/trust" element={<SecureLayerTrust />} />
            <Route path="/securelayer/pricing" element={<SecureLayerPricing />} />
            <Route path="/securelayer/trial" element={<SecureLayerTrial />} />
            <Route path="/saas/peoplepulse-hr" element={<PeoplePulseHR />} />
            <Route path="/saas/peoplepulse-hr/features" element={<PeoplePulseFeatures />} />
            <Route path="/saas/peoplepulse-hr/product" element={<PeoplePulseProduct />} />
            <Route path="/saas/peoplepulse-hr/integrations" element={<PeoplePulseIntegrations />} />
            <Route path="/saas/peoplepulse-hr/pricing" element={<PeoplePulsePricing />} />
            <Route path="/saas/peoplepulse-hr/trial" element={<PeoplePulseTrial />} />
            <Route path="/peoplepulse" element={<PeoplePulseHR />} />
            <Route path="/peoplepulse/features" element={<PeoplePulseFeatures />} />
            <Route path="/peoplepulse/product" element={<PeoplePulseProduct />} />
            <Route path="/peoplepulse/integrations" element={<PeoplePulseIntegrations />} />
            <Route path="/peoplepulse/pricing" element={<PeoplePulsePricing />} />
            <Route path="/peoplepulse/trial" element={<PeoplePulseTrial />} />
            <Route path="/saas/consentlayer-privacy" element={<ConsentLayerPrivacy />} />
            <Route path="/saas/consentlayer-privacy/features" element={<ConsentLayerFeatures />} />
            <Route path="/saas/consentlayer-privacy/product" element={<ConsentLayerProduct />} />
            <Route path="/saas/consentlayer-privacy/integrations" element={<ConsentLayerIntegrations />} />
            <Route path="/saas/consentlayer-privacy/pricing" element={<ConsentLayerPricing />} />
            <Route path="/saas/consentlayer-privacy/trial" element={<ConsentLayerTrial />} />
            <Route path="/consentlayer" element={<ConsentLayerPrivacy />} />
            <Route path="/consentlayer/features" element={<ConsentLayerFeatures />} />
            <Route path="/consentlayer/product" element={<ConsentLayerProduct />} />
            <Route path="/consentlayer/integrations" element={<ConsentLayerIntegrations />} />
            <Route path="/consentlayer/pricing" element={<ConsentLayerPricing />} />
            <Route path="/consentlayer/trial" element={<ConsentLayerTrial />} />
            <Route path="/saas/routestack-logistics" element={<RouteStackLogistics />} />
            <Route path="/saas/routestack-logistics/features" element={<RouteStackFeatures />} />
            <Route path="/saas/routestack-logistics/product" element={<RouteStackProduct />} />
            <Route path="/saas/routestack-logistics/integrations" element={<RouteStackIntegrations />} />
            <Route path="/saas/routestack-logistics/pricing" element={<RouteStackPricing />} />
            <Route path="/saas/routestack-logistics/trial" element={<RouteStackTrial />} />
            <Route path="/routestack" element={<RouteStackLogistics />} />
            <Route path="/routestack/features" element={<RouteStackFeatures />} />
            <Route path="/routestack/product" element={<RouteStackProduct />} />
            <Route path="/routestack/integrations" element={<RouteStackIntegrations />} />
            <Route path="/routestack/pricing" element={<RouteStackPricing />} />
            <Route path="/routestack/trial" element={<RouteStackTrial />} />
            <Route path="/restaurant" element={<RestaurantIndex />} />
            <Route
              path="/restaurant/brewnest-coffee"
              element={<BrewNestCoffee />}
            />
            <Route
              path="/restaurant/urbanbite-kitchen"
              element={<UrbanBiteKitchen />}
            />
            <Route
              path="/restaurant/golden-crust-bakery"
              element={<GoldenCrustBakery />}
            />
            <Route
              path="/restaurant/spiceroute-grill"
              element={<SpiceRouteGrill />}
            />
            <Route
              path="/restaurant/luna-pizza-house"
              element={<LunaPizzaHouse />}
            />
            <Route
              path="/restaurant/freshbowl-cafe"
              element={<FreshBowlCafe />}
            />
            <Route
              path="/restaurant/ember-steakhouse"
              element={<EmberSteakhouse />}
            />
            <Route
              path="/restaurant/morningleaf-tea"
              element={<MorningLeafTea />}
            />
            <Route path="/restaurant/burgercraft" element={<BurgerCraft />} />
            <Route
              path="/restaurant/oceanplate-seafood"
              element={<OceanPlateSeafood />}
            />
            <Route path="/restaurant/:slug" element={<ComingSoonRoute />} />
            <Route path="/beauty/:slug" element={<ComingSoonRoute />} />
            <Route path="/real-estate/:slug" element={<ComingSoonRoute />} />
            <Route path="/fitness/:slug" element={<ComingSoonRoute />} />
            <Route path="/medical/:slug" element={<ComingSoonRoute />} />
            <Route path="/construction/:slug" element={<ComingSoonRoute />} />
            <Route path="/education/:slug" element={<ComingSoonRoute />} />
            <Route path="/e-commerce/:slug" element={<ComingSoonRoute />} />
            <Route path="/portfolio/:slug" element={<ComingSoonRoute />} />
            <Route path="/saas/:slug" element={<ComingSoonRoute />} />
            <Route path="/placeholder" element={<PlaceholderPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      {isDemoPage && deviceMode !== 'desktop' && (
        <div className="bg-slate-900/90 backdrop-blur-sm py-2 shrink-0 flex justify-center z-50 pointer-events-none border-t border-slate-800">
          <div className="w-32 h-1 bg-slate-600 rounded-full" />
        </div>
      )}
    </div>
  </div>
  {!isDemoPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
