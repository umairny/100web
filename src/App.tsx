import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer } from "./components";
import { Home } from "./pages/Home";
import { BeautyIndex } from "./pages/Beauty/BeautyIndex";
import { BlushBeautyBar } from "./pages/Beauty/BlushBeautyBar";
import { GlowHausSalon } from "./pages/Beauty/GlowHausSalon";
import { LuxeNailStudio } from "./pages/Beauty/LuxeNailStudio";
import { SerenitySpa } from "./pages/Beauty/SerenitySpa";
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

function AppShell() {
  const { pathname } = useLocation();
  const isDemoPage =
    (pathname.startsWith("/restaurant/") && pathname !== "/restaurant") ||
    (pathname.startsWith("/beauty/") && pathname !== "/beauty");

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [pathname]);

  return (
    <div
      className={`flex min-h-screen flex-col ${isDemoPage ? "demo-mode" : ""}`}
    >
      {isDemoPage ? <Navbar mode="floating" /> : <Navbar />}
      <div className={`flex-grow ${isDemoPage ? "" : "pt-1"}`}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beauty" element={<BeautyIndex />} />
          <Route path="/beauty/glowhaus-salon" element={<GlowHausSalon />} />
          <Route path="/beauty/luxe-nail-studio" element={<LuxeNailStudio />} />
          <Route path="/beauty/serenity-spa" element={<SerenitySpa />} />
          <Route path="/beauty/blush-beauty-bar" element={<BlushBeautyBar />} />
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
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      {!isDemoPage && <Footer />}
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  );
}

export default App;
