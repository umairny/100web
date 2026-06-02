import { Link } from 'react-router-dom'
import { Container, CTAButton } from '../../components'

export function BrewNestCoffee() {
  return (
    <main>
      {/* Navigation Bar for Brewnest */}
      <nav className="fixed top-16 left-0 right-0 z-40 bg-white/95 backdrop-blur border-b border-gray-200">
        <Container className="h-14 flex items-center justify-between">
          <div className="flex gap-8">
            <a href="#about" className="text-gray-700 hover:text-coffee-700 font-medium text-sm transition">About</a>
            <a href="#coffee" className="text-gray-700 hover:text-coffee-700 font-medium text-sm transition">Coffee</a>
            <a href="#why" className="text-gray-700 hover:text-coffee-700 font-medium text-sm transition">Why Us</a>
            <a href="#menu" className="text-gray-700 hover:text-coffee-700 font-medium text-sm transition">Menu</a>
            <a href="#testimonials" className="text-gray-700 hover:text-coffee-700 font-medium text-sm transition">Reviews</a>
          </div>
          <CTAButton size="sm">Reserve Table</CTAButton>
        </Container>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-coffee-50 via-amber-50 to-white relative overflow-hidden">
        <div className="absolute top-10 right-0 w-96 h-96 bg-coffee-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        <div className="absolute bottom-10 left-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
        
        <Container className="relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-coffee-700 font-semibold text-sm md:text-base mb-3 tracking-wide">ARTISAN COFFEE ROASTERY</p>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Brew<span className="text-coffee-700">Nest</span> Coffee
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Premium, hand-roasted coffee sourced directly from sustainable farms
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton size="lg" className="bg-coffee-700 text-white hover:bg-coffee-800">
                ☕ Order Now
              </CTAButton>
              <CTAButton variant="outline" size="lg" className="border-coffee-700 text-coffee-700">
                Learn More
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">About BrewNest</h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Since 2018, BrewNest has been crafting exceptional coffee experiences in the heart of the city. 
                We believe coffee is more than a beverage—it's a ritual, a moment of connection, and a journey 
                around the world in every sip.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our team sources beans directly from family-owned farms in Ethiopia, Colombia, and Costa Rica, 
                ensuring every cup supports sustainable farming practices and fair compensation for farmers.
              </p>
              <div className="flex gap-8">
                <div>
                  <div className="text-3xl font-bold text-coffee-700 mb-1">500K+</div>
                  <p className="text-gray-600">Happy Customers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-coffee-700 mb-1">25</div>
                  <p className="text-gray-600">Countries Sourced</p>
                </div>
              </div>
            </div>
            
            {/* Image Placeholder */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-coffee-100 to-amber-100 flex items-center justify-center shadow-2xl">
                <div className="text-7xl">☕</div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-40 h-40 bg-coffee-700 rounded-lg opacity-10 blur-2xl" />
            </div>
          </div>
        </Container>
      </section>

      {/* Featured Coffee Products */}
      <section id="coffee" className="py-20 md:py-28 bg-coffee-50">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Signature Blends</h2>
            <p className="text-lg text-gray-600">Carefully crafted by our master roasters</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Coffee 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-amber-700 to-coffee-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-6xl">☕</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Morning Glory</h3>
                <p className="text-gray-600 mb-4">Bright, energetic blend with notes of citrus and chocolate. Perfect for starting your day.</p>
                <div className="flex justify-between items-center">
                  <span className="text-coffee-700 font-semibold">$16/bag</span>
                  <button className="px-4 py-2 bg-coffee-700 text-white rounded-lg hover:bg-coffee-800 transition text-sm font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Coffee 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group md:scale-105">
              <div className="h-48 bg-gradient-to-br from-coffee-800 to-amber-900 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-6xl">☕</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Midnight Express</h3>
                <p className="text-gray-600 mb-4">Deep, rich roast with bold flavors. Our most popular choice among coffee connoisseurs.</p>
                <div className="flex justify-between items-center">
                  <span className="text-coffee-700 font-semibold">$18/bag</span>
                  <button className="px-4 py-2 bg-coffee-700 text-white rounded-lg hover:bg-coffee-800 transition text-sm font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>

            {/* Coffee 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="h-48 bg-gradient-to-br from-amber-600 to-coffee-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-6xl">☕</span>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Sunset Blend</h3>
                <p className="text-gray-600 mb-4">Smooth, balanced blend with caramel undertones. Ideal for afternoon relaxation.</p>
                <div className="flex justify-between items-center">
                  <span className="text-coffee-700 font-semibold">$15/bag</span>
                  <button className="px-4 py-2 bg-coffee-700 text-white rounded-lg hover:bg-coffee-800 transition text-sm font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose Us */}
      <section id="why" className="py-20 md:py-28">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Why Choose BrewNest?</h2>
            <p className="text-lg text-gray-600">Excellence in every aspect of our service</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: '🌱', title: 'Sustainable Sourcing', desc: 'Direct relationships with ethical farmers' },
              { icon: '🔥', title: 'Expert Roasting', desc: 'Small-batch roasting for maximum freshness' },
              { icon: '💎', title: 'Premium Quality', desc: 'Only single-origin specialty grade beans' },
              { icon: '🏡', title: 'Cozy Atmosphere', desc: 'Warm, welcoming space to relax or work' },
              { icon: '👥', title: 'Expert Baristas', desc: 'Professionally trained coffee specialists' },
              { icon: '🌍', title: 'Global Flavors', desc: 'Beans from the world\'s finest coffee regions' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 md:py-28 bg-coffee-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-lg text-gray-600">Real reviews from real coffee lovers</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Sarah Chen', role: 'Coffee Enthusiast', text: 'BrewNest has completely changed how I appreciate coffee. Every cup is a revelation!' },
              { name: 'Marcus Johnson', role: 'Designer', text: 'The perfect spot to work with exceptional coffee and a welcoming community.' },
              { name: 'Emma Rodriguez', role: 'Food Blogger', text: 'Outstanding quality, sustainability focus, and hospitality. This is coffee done right!' },
            ].map((testimonial, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl shadow-md">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Menu Preview */}
      <section id="menu" className="py-20 md:py-28">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Menu Preview</h2>
            <p className="text-lg text-gray-600">Explore our full menu at the café</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {/* Espresso Drinks */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-coffee-700 mb-6">Espresso Drinks</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">Espresso</p>
                    <p className="text-sm text-gray-600">Single or double shot</p>
                  </div>
                  <span className="text-coffee-700 font-bold">$3–4</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">Cappuccino</p>
                    <p className="text-sm text-gray-600">Espresso with steamed milk</p>
                  </div>
                  <span className="text-coffee-700 font-bold">$5–6</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">Latte</p>
                    <p className="text-sm text-gray-600">Smooth and creamy</p>
                  </div>
                  <span className="text-coffee-700 font-bold">$5–6</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">Americano</p>
                    <p className="text-sm text-gray-600">Rich and bold</p>
                  </div>
                  <span className="text-coffee-700 font-bold">$4–5</span>
                </div>
              </div>
            </div>

            {/* Other Drinks */}
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold text-coffee-700 mb-6">Other Drinks</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">Cold Brew</p>
                    <p className="text-sm text-gray-600">Smooth and refreshing</p>
                  </div>
                  <span className="text-coffee-700 font-bold">$5</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">Flat White</p>
                    <p className="text-sm text-gray-600">Velvety microfoam</p>
                  </div>
                  <span className="text-coffee-700 font-bold">$6</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">Macchiato</p>
                    <p className="text-sm text-gray-600">Espresso with foam</p>
                  </div>
                  <span className="text-coffee-700 font-bold">$5</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold text-gray-900">Mocha</p>
                    <p className="text-sm text-gray-600">Coffee meets chocolate</p>
                  </div>
                  <span className="text-coffee-700 font-bold">$6–7</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-28 bg-coffee-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-20 text-9xl">☕</div>
          <div className="absolute bottom-10 left-20 text-9xl">☕</div>
        </div>
        
        <Container className="relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Visit Us Today</h2>
            <p className="text-xl text-coffee-100 mb-8">
              Experience the BrewNest difference. Located in the heart of the city, open 7 days a week.
            </p>
            <div className="space-y-2 mb-8">
              <p className="text-lg">📍 123 Coffee Street, City Center</p>
              <p className="text-lg">📞 (555) 123-4567</p>
              <p className="text-lg">🕐 Mon–Fri: 6 AM–8 PM | Sat–Sun: 7 AM–9 PM</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CTAButton 
                size="lg" 
                className="bg-white text-coffee-900 hover:bg-gray-100 font-semibold"
              >
                Reserve a Table
              </CTAButton>
              <CTAButton 
                variant="outline"
                size="lg"
                className="border-white text-white"
              >
                Get Directions
              </CTAButton>
            </div>
          </div>
        </Container>
      </section>

      {/* Back links */}
      <section className="py-12 border-t border-gray-200">
        <Container className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link to="/restaurant" className="inline-flex items-center gap-2 text-coffee-700 font-semibold hover:text-coffee-800 transition">
            Back to Restaurant Collection
          </Link>
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 font-semibold hover:text-coffee-800 transition">
            ← Back to 100 Designs Portfolio
          </Link>
        </Container>
      </section>
    </main>
  )
}
