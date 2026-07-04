import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { Home } from './pages/Home'
import { BeautyIndex } from './pages/Beauty/BeautyIndex'
import { BlushBeautyBar } from './pages/Beauty/BlushBeautyBar'
import { CrownCombBarber } from './pages/Beauty/CrownCombBarber'
import { GlowHausSalon } from './pages/Beauty/GlowHausSalon'
import { LuxeNailStudio } from './pages/Beauty/LuxeNailStudio'
import { SerenitySpa } from './pages/Beauty/SerenitySpa'
import { VelvetSkinClinic } from './pages/Beauty/VelvetSkinClinic'
import { PureGlowAesthetics } from './pages/Beauty/PureGlowAesthetics'
import BloomBridalStudio from './pages/Beauty/BloomBridalStudio'
import SilkStyleHair from './pages/Beauty/SilkStyleHair'
import AuraWellnessSpa from './pages/Beauty/AuraWellnessSpa'
import { ConstructionIndex } from './pages/Construction/ConstructionIndex'
import { ForgePointBuilders } from './pages/Construction/ForgePointBuilders'
import { CartBloomMarket } from './pages/Ecommerce/CartBloomMarket'
import { EcommerceIndex } from './pages/Ecommerce/EcommerceIndex'
import { EducationIndex } from './pages/Education/EducationIndex'
import { LearnSphereAcademy } from './pages/Education/LearnSphereAcademy'
import { FitnessIndex } from './pages/Fitness/FitnessIndex'
import { HarborHealthClinic } from './pages/Medical/HarborHealthClinic'
import { MedicalIndex } from './pages/Medical/MedicalIndex'
import { PulseForgeFitness } from './pages/Fitness/PulseForgeFitness'
import { PortfolioIndex } from './pages/Portfolio/PortfolioIndex'
import { StudioValeCreative } from './pages/Portfolio/StudioValeCreative'
import { RealEstateIndex } from './pages/RealEstate/RealEstateIndex'
import { SkylineRealtyGroup } from './pages/RealEstate/SkylineRealtyGroup'
import { HarborKeyHomes } from './pages/RealEstate/HarborKeyHomes'
import { ApexCommercialRealty } from './pages/RealEstate/ApexCommercialRealty'
import { FlowPilotCRM } from './pages/SaaS/FlowPilotCRM'
import { SaaSIndex } from './pages/SaaS/SaaSIndex'
import { BrewNestCoffee } from './pages/Restaurant/BrewNestCoffee'
import { BurgerCraft } from './pages/Restaurant/BurgerCraft'
import { EmberSteakhouse } from './pages/Restaurant/EmberSteakhouse'
import { FreshBowlCafe } from './pages/Restaurant/FreshBowlCafe'
import { GoldenCrustBakery } from './pages/Restaurant/GoldenCrustBakery'
import { LunaPizzaHouse } from './pages/Restaurant/LunaPizzaHouse'
import { MorningLeafTea } from './pages/Restaurant/MorningLeafTea'
import { OceanPlateSeafood } from './pages/Restaurant/OceanPlateSeafood'
import { RestaurantIndex } from './pages/Restaurant/RestaurantIndex'
import { SpiceRouteGrill } from './pages/Restaurant/SpiceRouteGrill'
import { UrbanBiteKitchen } from './pages/Restaurant/UrbanBiteKitchen'
import { NotFound } from './pages/NotFound'

function AppShell() {
  const { pathname } = useLocation()
  const isDemoPage =
    (pathname.startsWith('/restaurant/') && pathname !== '/restaurant') ||
    (pathname.startsWith('/beauty/') && pathname !== '/beauty') ||
    (pathname.startsWith('/real-estate/') && pathname !== '/real-estate') ||
    (pathname.startsWith('/fitness/') && pathname !== '/fitness') ||
    (pathname.startsWith('/medical/') && pathname !== '/medical') ||
    (pathname.startsWith('/construction/') && pathname !== '/construction') ||
    (pathname.startsWith('/education/') && pathname !== '/education') ||
    (pathname.startsWith('/e-commerce/') && pathname !== '/e-commerce') ||
    (pathname.startsWith('/portfolio/') && pathname !== '/portfolio') ||
    (pathname.startsWith('/saas/') && pathname !== '/saas')

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 })
  }, [pathname])

  return (
    <div className={`flex min-h-screen flex-col ${isDemoPage ? 'demo-mode' : ''}`}>
      {isDemoPage ? <Navbar mode="floating" /> : <Navbar />}
      <div className={`flex-grow ${isDemoPage ? '' : 'pt-16'}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beauty" element={<BeautyIndex />} />
          <Route path="/beauty/glowhaus-salon" element={<GlowHausSalon />} />
          <Route path="/beauty/luxe-nail-studio" element={<LuxeNailStudio />} />
          <Route path="/beauty/serenity-spa" element={<SerenitySpa />} />
          <Route path="/beauty/blush-beauty-bar" element={<BlushBeautyBar />} />
          <Route path="/beauty/velvet-skin-clinic" element={<VelvetSkinClinic />} />
          <Route path="/beauty/crown-comb-barber" element={<CrownCombBarber />} />
          <Route path="/beauty/pureglow-aesthetics" element={<PureGlowAesthetics />} />
          <Route path="/beauty/bloom-bridal-studio" element={<BloomBridalStudio />} />
          <Route path="/beauty/silk-style-hair" element={<SilkStyleHair />} />
          <Route path="/beauty/aura-wellness-spa" element={<AuraWellnessSpa />} />
          <Route path="/real-estate" element={<RealEstateIndex />} />
          <Route path="/real-estate/skyline-realty-group" element={<SkylineRealtyGroup />} />
          <Route path="/real-estate/harborkey-homes" element={<HarborKeyHomes />} />
          <Route path="/real-estate/apex-commercial-realty" element={<ApexCommercialRealty />} />
          <Route path="/fitness" element={<FitnessIndex />} />
          <Route path="/fitness/pulseforge-fitness" element={<PulseForgeFitness />} />
          <Route path="/medical" element={<MedicalIndex />} />
          <Route path="/medical/harbor-health-clinic" element={<HarborHealthClinic />} />
          <Route path="/construction" element={<ConstructionIndex />} />
          <Route path="/construction/forgepoint-builders" element={<ForgePointBuilders />} />
          <Route path="/education" element={<EducationIndex />} />
          <Route path="/education/learnsphere-academy" element={<LearnSphereAcademy />} />
          <Route path="/e-commerce" element={<EcommerceIndex />} />
          <Route path="/e-commerce/cartbloom-market" element={<CartBloomMarket />} />
          <Route path="/portfolio" element={<PortfolioIndex />} />
          <Route path="/portfolio/studio-vale-creative" element={<StudioValeCreative />} />
          <Route path="/saas" element={<SaaSIndex />} />
          <Route path="/saas/flowpilot-crm" element={<FlowPilotCRM />} />
          <Route path="/restaurant" element={<RestaurantIndex />} />
          <Route path="/restaurant/brewnest-coffee" element={<BrewNestCoffee />} />
          <Route path="/restaurant/urbanbite-kitchen" element={<UrbanBiteKitchen />} />
          <Route path="/restaurant/golden-crust-bakery" element={<GoldenCrustBakery />} />
          <Route path="/restaurant/spiceroute-grill" element={<SpiceRouteGrill />} />
          <Route path="/restaurant/luna-pizza-house" element={<LunaPizzaHouse />} />
          <Route path="/restaurant/freshbowl-cafe" element={<FreshBowlCafe />} />
          <Route path="/restaurant/ember-steakhouse" element={<EmberSteakhouse />} />
          <Route path="/restaurant/morningleaf-tea" element={<MorningLeafTea />} />
          <Route path="/restaurant/burgercraft" element={<BurgerCraft />} />
          <Route path="/restaurant/oceanplate-seafood" element={<OceanPlateSeafood />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!isDemoPage && <Footer />}
    </div>
  )
}

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
