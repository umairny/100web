import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home } from "./pages/Home";
import { BeautyIndex } from "./pages/Beauty/BeautyIndex";
import { BlushBeautyBar } from "./pages/Beauty/BlushBeautyBar";
import { CrownCombBarber } from "./pages/Beauty/CrownCombBarber";
import { GlowHausSalon } from "./pages/Beauty/GlowHausSalon";
import { LuxeNailStudio } from "./pages/Beauty/LuxeNailStudio";
import { SerenitySpa } from "./pages/Beauty/SerenitySpa";
import { VelvetSkinClinic } from "./pages/Beauty/VelvetSkinClinic";
import { PureGlowAesthetics } from "./pages/Beauty/PureGlowAesthetics";
import BloomBridalStudio from "./pages/Beauty/BloomBridalStudio";
import SilkStyleHair from "./pages/Beauty/SilkStyleHair";
import AuraWellnessSpa from "./pages/Beauty/AuraWellnessSpa";
import { ConstructionIndex } from "./pages/Construction/ConstructionIndex";
import { ForgePointBuilders } from "./pages/Construction/ForgePointBuilders";
import { SummitRoofCo } from "./pages/Construction/SummitRoofCo";
import { ClearlineRemodeling } from "./pages/Construction/ClearlineRemodeling";
import { ForgeLineElectric } from "./pages/Construction/ForgeLineElectric";
import { TerraFormConcrete } from "./pages/Construction/TerraFormConcrete";
import { BluePeakPlumbing } from "./pages/Construction/BluePeakPlumbing";
import { IronGateCommercial } from "./pages/Construction/IronGateCommercial";
import { PrimeDeckBuilders } from "./pages/Construction/PrimeDeckBuilders";
import { StonefieldLandscapes } from "./pages/Construction/StonefieldLandscapes";
import { CivicWorksContractors } from "./pages/Construction/CivicWorksContractors";
import { CartBloomMarket } from "./pages/Ecommerce/CartBloomMarket";
import { EcommerceIndex } from "./pages/Ecommerce/EcommerceIndex";
import { EducationIndex } from "./pages/Education/EducationIndex";
import { LearnSphereAcademy } from "./pages/Education/LearnSphereAcademy";
import { BrightBridgeAcademy } from "./pages/Education/BrightBridgeAcademy";
import { AtlasCollegeCounseling } from "./pages/Education/AtlasCollegeCounseling";
import { CodeNestKids } from "./pages/Education/CodeNestKids";
import { ExamEdgePrep } from "./pages/Education/ExamEdgePrep";
import { FluentPathLanguages } from "./pages/Education/FluentPathLanguages";
import { FitnessIndex } from "./pages/Fitness/FitnessIndexKinetic";
import { HarborHealthClinic } from "./pages/Medical/HarborHealthClinic";
import { BrightPathPediatrics } from "./pages/Medical/BrightPathPediatrics";
import { NorthStarDental } from "./pages/Medical/NorthStarDental";
import { ClearViewOptometry } from "./pages/Medical/ClearViewOptometry";
import { RenewPhysicalTherapy } from "./pages/Medical/RenewPhysicalTherapy";
import { MindWellCounseling } from "./pages/Medical/MindWellCounseling";
import { HarborUrgentCare } from "./pages/Medical/HarborUrgentCare";
import { WillowWomensHealth } from "./pages/Medical/WillowWomensHealth";
import { PulseHeartCardiology } from "./pages/Medical/PulseHeartCardiology";
import { ClearSkinDermatology } from "./pages/Medical/ClearSkinDermatology";
import { MedicalIndex } from "./pages/Medical/MedicalIndex";
import { PulseForgeFitness } from "./pages/Fitness/PulseForgeFitnessPremium";
import { CoreLabPilates } from "./pages/Fitness/CoreLabPilates";
import { IronDistrictGym } from "./pages/Fitness/IronDistrictGym";
import { PeakRunCoaching } from "./pages/Fitness/PeakRunCoaching";
import { FlowStateYoga } from "./pages/Fitness/FlowStateYoga";
import { BoxHouseTraining } from "./pages/Fitness/BoxHouseTraining";
import { VitalFormWellness } from "./pages/Fitness/VitalFormWellness";
import { RideHausCycling } from "./pages/Fitness/RideHausCycling";
import { ElevateClimbing } from "./pages/Fitness/ElevateClimbing";
import { ResetRecoveryClub } from "./pages/Fitness/ResetRecoveryClub";
import { PortfolioIndex } from "./pages/Portfolio/PortfolioIndex";
import { StudioValeCreative } from "./pages/Portfolio/StudioValeCreative";
import { RealEstateIndex } from "./pages/RealEstate/RealEstateIndex";
import { SkylineRealtyGroup } from "./pages/RealEstate/SkylineRealtyGroup";
import { HarborKeyHomes } from "./pages/RealEstate/HarborKeyHomes";
import { ApexCommercialRealty } from "./pages/RealEstate/ApexCommercialRealty";
import { NestPathMortgage } from "./pages/RealEstate/NestPathMortgage";
import { CedarStoneEstates } from "./pages/RealEstate/CedarStoneEstates";
import { MetroLoftRentals } from "./pages/RealEstate/MetroLoftRentals";
import { FoundryPropertyGroup } from "./pages/RealEstate/FoundryPropertyGroup";
import { SuncrestVacationVillas } from "./pages/RealEstate/SuncrestVacationVillas";
import { OaklinePropertyManagement } from "./pages/RealEstate/OaklinePropertyManagement";
import { KeyStartRealty } from "./pages/RealEstate/KeyStartRealtyEditorial";
import { FlowPilotCRM } from "./pages/SaaS/FlowPilotCRM";
import { SaaSIndex } from "./pages/SaaS/SaaSIndex";
import { BrewNestCoffee } from "./pages/Restaurant/BrewNestCoffee";
import { BurgerCraft } from "./pages/Restaurant/BurgerCraft";
import { EmberSteakhouse } from "./pages/Restaurant/EmberSteakhouse";
import { FreshBowlCafe } from "./pages/Restaurant/FreshBowlCafe";
import { GoldenCrustBakery } from "./pages/Restaurant/GoldenCrustBakery";
import { LunaPizzaHouse } from "./pages/Restaurant/LunaPizzaHouse";
import { MorningLeafTea } from "./pages/Restaurant/MorningLeafTea";
import { OceanPlateSeafood } from "./pages/Restaurant/OceanPlateSeafood";
import { RestaurantIndex } from "./pages/Restaurant/RestaurantIndex";
import { SpiceRouteGrill } from "./pages/Restaurant/SpiceRouteGrill";
import { UrbanBiteKitchen } from "./pages/Restaurant/UrbanBiteKitchen";
import { NotFound } from "./pages/NotFound";
import ComingSoon from "./components/ComingSoon";
import { PlaceholderPage } from "./pages/PlaceholderPage";

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
            path="/construction/bluepeak-plumbing"
            element={<BluePeakPlumbing />}
          />

          <Route path="/irongate" element={<IronGateCommercial />} />
          <Route
            path="/construction/primedeck-builders"
            element={<PrimeDeckBuilders />}
          />
          <Route
            path="/construction/primedeck"
            element={<PrimeDeckBuilders />}
          />
          <Route
            path="/construction/prime-deck-builders"
            element={<PrimeDeckBuilders />}
          />
          <Route
            path="/construction/prime-deck"
            element={<PrimeDeckBuilders />}
          />
          <Route
            path="/construction/primedeckbuilders"
            element={<PrimeDeckBuilders />}
          />
          <Route path="/primedeck-builders" element={<PrimeDeckBuilders />} />
          <Route path="/primedeck" element={<PrimeDeckBuilders />} />
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
            path="/construction/stone-field-landscapes"
            element={<StonefieldLandscapes />}
          />
          <Route
            path="/construction/stone-field"
            element={<StonefieldLandscapes />}
          />
          <Route
            path="/stonefield-landscapes"
            element={<StonefieldLandscapes />}
          />
          <Route path="/stonefield" element={<StonefieldLandscapes />} />
          <Route
            path="/construction/civicworks-contractors"
            element={<CivicWorksContractors />}
          />
          <Route
            path="/construction/civicworks"
            element={<CivicWorksContractors />}
          />
          <Route
            path="/construction/civic-works-contractors"
            element={<CivicWorksContractors />}
          />
          <Route
            path="/construction/civicworkscontractors"
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
