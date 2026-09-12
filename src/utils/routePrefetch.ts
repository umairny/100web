/**
 * High-performance intelligent route prefetching utility.
 * Lazily loads chunk bundles on hover/focus so navigation between websites feels instantaneous.
 */

const routeLoaders: Record<string, () => Promise<unknown>> = {
  // Category hubs
  '/beauty': () => import('../pages/Beauty/BeautyIndex'),
  '/construction': () => import('../pages/Construction/ConstructionIndex'),
  '/e-commerce': () => import('../pages/Ecommerce/EcommerceIndex'),
  '/ecommerce': () => import('../pages/Ecommerce/EcommerceIndex'),
  '/education': () => import('../pages/Education/EducationIndex'),
  '/fitness': () => import('../pages/Fitness/FitnessIndexKinetic'),
  '/medical': () => import('../pages/Medical/MedicalIndex'),
  '/portfolio': () => import('../pages/Portfolio/PortfolioIndex'),
  '/real-estate': () => import('../pages/RealEstate/RealEstateIndex'),
  '/restaurant': () => import('../pages/Restaurant/RestaurantIndex'),
  '/saas': () => import('../pages/SaaS/SaaSIndex'),

  // Beauty
  '/beauty/glowhaus-salon': () => import('../pages/Beauty/GlowHausSalon'),
  '/beauty/luxe-nail-studio': () => import('../pages/Beauty/LuxeNailStudio'),
  '/beauty/serenity-spa': () => import('../pages/Beauty/SerenitySpa'),
  '/beauty/blush-beauty-bar': () => import('../pages/Beauty/BlushBeautyBar'),
  '/beauty/velvet-skin-clinic': () => import('../pages/Beauty/VelvetSkinClinic'),
  '/beauty/crown-comb-barber': () => import('../pages/Beauty/CrownCombBarber'),
  '/beauty/pureglow-aesthetics': () => import('../pages/Beauty/PureGlowAesthetics'),
  '/beauty/bloom-bridal-studio': () => import('../pages/Beauty/BloomBridalStudio'),
  '/beauty/silk-style-hair': () => import('../pages/Beauty/SilkStyleHair'),
  '/beauty/aura-wellness-spa': () => import('../pages/Beauty/AuraWellnessSpa'),

  // Construction
  '/construction/forgepoint-builders': () => import('../pages/Construction/ForgePointBuilders'),
  '/construction/summit-roof-co': () => import('../pages/Construction/SummitRoofCo'),
  '/construction/clearline-remodeling': () => import('../pages/Construction/ClearlineRemodeling'),
  '/construction/forgeline-electric': () => import('../pages/Construction/ForgeLineElectric'),
  '/construction/terraform-concrete': () => import('../pages/Construction/TerraFormConcrete'),
  '/construction/bluepeak-plumbing': () => import('../pages/Construction/BluePeakPlumbing'),
  '/construction/irongate-commercial': () => import('../pages/Construction/IronGateCommercial'),
  '/construction/prime-deck-builders': () => import('../pages/Construction/PrimeDeckBuilders'),
  '/construction/stonefield-landscapes': () => import('../pages/Construction/StonefieldLandscapes'),
  '/construction/civicworks-contractors': () => import('../pages/Construction/CivicWorksContractors'),

  // E-commerce
  '/e-commerce/cartbloom-market': () => import('../pages/Ecommerce/CartBloomMarket'),
  '/e-commerce/cyclebox-gear': () => import('../pages/Ecommerce/CycleBoxGear'),
  '/e-commerce/desknest-supply': () => import('../pages/Ecommerce/DeskNestSupply'),
  '/e-commerce/fieldnote-skincare': () => import('../pages/Ecommerce/FieldNoteSkincare'),
  '/e-commerce/glowcart-beauty': () => import('../pages/Ecommerce/GlowCartBeauty'),
  '/e-commerce/hearth-linen': () => import('../pages/Ecommerce/HearthLinenLiving'),
  '/e-commerce/little-sprout': () => import('../pages/Ecommerce/LittleSproutToys'),
  '/e-commerce/north-kind': () => import('../pages/Ecommerce/NorthKindOutdoor'),
  '/e-commerce/pantry-pilot': () => import('../pages/Ecommerce/PantryPilotGrocery'),
  '/e-commerce/paw-parcel': () => import('../pages/Ecommerce/PawParcelPets'),

  // Education
  '/education/learnsphere-academy': () => import('../pages/Education/LearnSphereAcademy'),
  '/education/brightbridge-academy': () => import('../pages/Education/BrightBridgeAcademy'),
  '/education/atlas-college-counseling': () => import('../pages/Education/AtlasCollegeCounseling'),
  '/education/codenest-kids': () => import('../pages/Education/CodeNestKids'),
  '/education/exam-edge-prep': () => import('../pages/Education/ExamEdgePrep'),
  '/education/fluentpath-languages': () => import('../pages/Education/FluentPathLanguages'),
  '/education/tutorloop': () => import('../pages/Education/TutorLoop'),
  '/education/skillforge': () => import('../pages/Education/SkillForge'),
  '/education/scholarspring': () => import('../pages/Education/ScholarSpring'),
  '/education/protrack': () => import('../pages/Education/ProTrackTrades'),

  // Fitness
  '/fitness/pulseforge-fitness': () => import('../pages/Fitness/PulseForgeFitnessPremium'),
  '/fitness/corelab-pilates': () => import('../pages/Fitness/CoreLabPilates'),
  '/fitness/irondistrict-gym': () => import('../pages/Fitness/IronDistrictGym'),
  '/fitness/peakrun-coaching': () => import('../pages/Fitness/PeakRunCoaching'),
  '/fitness/flowstate-yoga': () => import('../pages/Fitness/FlowStateYoga'),
  '/fitness/boxhouse-training': () => import('../pages/Fitness/BoxHouseTraining'),
  '/fitness/vitalform-wellness': () => import('../pages/Fitness/VitalFormWellness'),
  '/fitness/ridehaus-cycling': () => import('../pages/Fitness/RideHausCycling'),
  '/fitness/elevate-climbing': () => import('../pages/Fitness/ElevateClimbing'),
  '/fitness/reset-recovery-club': () => import('../pages/Fitness/ResetRecoveryClub'),

  // Medical
  '/medical/harbor-health-clinic': () => import('../pages/Medical/HarborHealthClinic'),
  '/medical/brightpath-pediatrics': () => import('../pages/Medical/BrightPathPediatrics'),
  '/medical/northstar-dental': () => import('../pages/Medical/NorthStarDental'),
  '/medical/clearview-optometry': () => import('../pages/Medical/ClearViewOptometry'),
  '/medical/renew-physical-therapy': () => import('../pages/Medical/RenewPhysicalTherapy'),
  '/medical/mindwell-counseling': () => import('../pages/Medical/MindWellCounseling'),
  '/medical/harbor-urgent-care': () => import('../pages/Medical/HarborUrgentCare'),
  '/medical/willow-womens-health': () => import('../pages/Medical/WillowWomensHealth'),
  '/medical/pulseheart-cardiology': () => import('../pages/Medical/PulseHeartCardiology'),
  '/medical/clearskin-dermatology': () => import('../pages/Medical/ClearSkinDermatology'),

  // Portfolio
  '/portfolio/studio-vale-creative': () => import('../pages/Portfolio/StudioValeCreative'),
  '/portfolio/axiom-labs': () => import('../pages/Portfolio/AxiomLabs'),
  '/portfolio/vale-interior-studio': () => import('../pages/Portfolio/ValeInteriorStudio'),
  '/portfolio/signal-brand-designer': () => import('../pages/Portfolio/SignalBrandDesigner'),
  '/portfolio/northline-developer': () => import('../pages/Portfolio/NorthlineDeveloper'),
  '/portfolio/motiondesk-studio': () => import('../pages/Portfolio/MotionDeskStudio'),
  '/portfolio/inkhouse-copy': () => import('../pages/Portfolio/InkhouseCopy'),
  '/portfolio/framelab-photo': () => import('../pages/Portfolio/FrameLabPhoto'),
  '/portfolio/cedar-ux-consultant': () => import('../pages/Portfolio/CedarUXConsultant'),
  '/portfolio/atelier-north-architecture': () => import('../pages/Portfolio/AtelierNorthArchitecture'),
  '/portfolio/artisan-objects': () => import('../pages/Portfolio/ArtisanObjects'),

  // Real Estate
  '/real-estate/skyline-realty-group': () => import('../pages/RealEstate/SkylineRealtyGroup'),
  '/real-estate/harborkey-homes': () => import('../pages/RealEstate/HarborKeyHomes'),
  '/real-estate/apex-commercial-realty': () => import('../pages/RealEstate/ApexCommercialRealty'),
  '/real-estate/nestpath-mortgage': () => import('../pages/RealEstate/NestPathMortgage'),
  '/real-estate/cedar-stone-estates': () => import('../pages/RealEstate/CedarStoneEstates'),
  '/real-estate/metroloft-rentals': () => import('../pages/RealEstate/MetroLoftRentals'),
  '/real-estate/foundry-property-group': () => import('../pages/RealEstate/FoundryPropertyGroup'),
  '/real-estate/suncrest-vacation-villas': () => import('../pages/RealEstate/SuncrestVacationVillas'),
  '/real-estate/oakline-property-management': () => import('../pages/RealEstate/OaklinePropertyManagement'),
  '/real-estate/keystart-realty': () => import('../pages/RealEstate/KeyStartRealtyEditorial'),

  // Restaurant
  '/restaurant/brewnest-coffee': () => import('../pages/Restaurant/BrewNestCoffee'),
  '/restaurant/burgercraft': () => import('../pages/Restaurant/BurgerCraft'),
  '/restaurant/ember-steakhouse': () => import('../pages/Restaurant/EmberSteakhouse'),
  '/restaurant/freshbowl-cafe': () => import('../pages/Restaurant/FreshBowlCafe'),
  '/restaurant/golden-crust-bakery': () => import('../pages/Restaurant/GoldenCrustBakery'),
  '/restaurant/luna-pizza-house': () => import('../pages/Restaurant/LunaPizzaHouse'),
  '/restaurant/morningleaf-tea': () => import('../pages/Restaurant/MorningLeafTea'),
  '/restaurant/oceanplate-seafood': () => import('../pages/Restaurant/OceanPlateSeafood'),
  '/restaurant/spiceroute-grill': () => import('../pages/Restaurant/SpiceRouteGrill'),
  '/restaurant/urbanbite-kitchen': () => import('../pages/Restaurant/UrbanBiteKitchen'),

  // SaaS
  '/saas/flowpilot-crm': () => import('../pages/SaaS/FlowPilotCRM'),
  '/saas/metricnest-analytics': () => import('../pages/SaaS/MetricNestAnalytics'),
  '/saas/supportdock-ai': () => import('../pages/SaaS/SupportDockAI'),
  '/saas/launchgrid-pm': () => import('../pages/SaaS/LaunchGridPM'),
  '/saas/invoicepilot': () => import('../pages/SaaS/InvoicePilot'),
  '/saas/recruitflow': () => import('../pages/SaaS/RecruitFlow'),
  '/saas/securelayer': () => import('../pages/SaaS/SecureLayer'),
  '/saas/peoplepulse-hr': () => import('../pages/SaaS/PeoplePulseHR'),
  '/saas/consentlayer-privacy': () => import('../pages/SaaS/ConsentLayerPrivacy'),
  '/saas/routestack-logistics': () => import('../pages/SaaS/RouteStackLogistics'),
};

const prefetchedPaths = new Set<string>();

/**
 * Trigger background fetch of the target route bundle
 */
export function prefetchRoute(rawPath?: string | null): void {
  if (!rawPath) return;

  const path = rawPath.split('?')[0].split('#')[0].replace(/\/+$/, '');
  if (prefetchedPaths.has(path)) return;

  const loader = routeLoaders[path];
  if (loader) {
    prefetchedPaths.add(path);
    loader().catch(() => {
      // Ignore network aborts or prefetch errors
      prefetchedPaths.delete(path);
    });
  }
}
