import { useEffect, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components";
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
const EcommerceIndex = lazy(() => import("./pages/Ecommerce/EcommerceIndex").then((m) => ({ default: m.EcommerceIndex })));
const EducationIndex = lazy(() => import("./pages/Education/EducationIndex").then((m) => ({ default: m.EducationIndex })));
const LearnSphereAcademy = lazy(() => import("./pages/Education/LearnSphereAcademy").then((m) => ({ default: m.LearnSphereAcademy })));
const BrightBridgeAcademy = lazy(() => import("./pages/Education/BrightBridgeAcademy").then((m) => ({ default: m.BrightBridgeAcademy })));
const AtlasCollegeCounseling = lazy(() => import("./pages/Education/AtlasCollegeCounseling").then((m) => ({ default: m.AtlasCollegeCounseling })));
const CodeNestKids = lazy(() => import("./pages/Education/CodeNestKids").then((m) => ({ default: m.CodeNestKids })));
const ExamEdgePrep = lazy(() => import("./pages/Education/ExamEdgePrep").then((m) => ({ default: m.ExamEdgePrep })));
const FluentPathLanguages = lazy(() => import("./pages/Education/FluentPathLanguages").then((m) => ({ default: m.FluentPathLanguages })));

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
    (pathname.startsWith("/saas/") && pathname !== "/saas");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return (
    <div
      className={`flex min-h-screen flex-col ${isDemoPage ? "demo-mode" : ""}`}
    >
      {isDemoPage ? <Navbar mode="floating" /> : <Navbar />}
      <div className={`flex-grow ${isDemoPage ? "" : "pt-16"}`}>
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
            <Route path="/e-commerce" element={<EcommerceIndex />} />
            <Route
              path="/e-commerce/cartbloom-market"
              element={<CartBloomMarket />}
            />
            <Route path="/portfolio" element={<PortfolioIndex />} />
            <Route
              path="/portfolio/studio-vale-creative"
              element={<StudioValeCreative />}
            />
            <Route path="/saas" element={<SaaSIndex />} />
            <Route path="/saas/flowpilot-crm" element={<FlowPilotCRM />} />
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
