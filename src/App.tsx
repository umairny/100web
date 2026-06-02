import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'
import { Home } from './pages/Home'
import { BrewNestCoffee } from './pages/Restaurant/BrewNestCoffee'
import { EmberSteakhouse } from './pages/Restaurant/EmberSteakhouse'
import { FreshBowlCafe } from './pages/Restaurant/FreshBowlCafe'
import { GoldenCrustBakery } from './pages/Restaurant/GoldenCrustBakery'
import { LunaPizzaHouse } from './pages/Restaurant/LunaPizzaHouse'
import { RestaurantIndex } from './pages/Restaurant/RestaurantIndex'
import { SpiceRouteGrill } from './pages/Restaurant/SpiceRouteGrill'
import { UrbanBiteKitchen } from './pages/Restaurant/UrbanBiteKitchen'
import { NotFound } from './pages/NotFound'

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurant" element={<RestaurantIndex />} />
            <Route path="/restaurant/brewnest-coffee" element={<BrewNestCoffee />} />
            <Route path="/restaurant/urbanbite-kitchen" element={<UrbanBiteKitchen />} />
            <Route path="/restaurant/golden-crust-bakery" element={<GoldenCrustBakery />} />
            <Route path="/restaurant/spiceroute-grill" element={<SpiceRouteGrill />} />
            <Route path="/restaurant/luna-pizza-house" element={<LunaPizzaHouse />} />
            <Route path="/restaurant/freshbowl-cafe" element={<FreshBowlCafe />} />
            <Route path="/restaurant/ember-steakhouse" element={<EmberSteakhouse />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
