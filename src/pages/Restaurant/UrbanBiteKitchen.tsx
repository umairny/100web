import { Link } from 'react-router-dom'
import { Container, CTAButton, RestaurantSubNav } from '../../components'

const signatureDishes = [
  {
    name: 'Fire-Grilled Chicken Bowl',
    label: 'Popular',
    price: '$18',
    description: 'Charred chicken, herbed rice, pickled slaw, and a smoky red pepper drizzle.',
    background: 'from-[#1f1f1f] via-[#ef3b2d] to-[#f4efe8]',
  },
  {
    name: 'Tomato Basil Smash Burger',
    label: 'Chef Pick',
    price: '$17',
    description: 'Double smashed beef, basil aioli, roasted tomato jam, and soft brioche.',
    background: 'from-[#202020] via-[#a1221a] to-[#f6c65c]',
  },
  {
    name: 'Street Corn Tacos',
    label: 'Spicy',
    price: '$16',
    description: 'Corn-crusted tortillas, chipotle crema, cotija, and lime-charred sweet corn.',
    background: 'from-[#ef3b2d] via-[#f6c65c] to-[#f4efe8]',
  },
  {
    name: 'Urban Mac & Cheese',
    label: 'New',
    price: '$15',
    description: 'Cavatappi, aged cheddar sauce, crisp breadcrumbs, and roasted chili oil.',
    background: 'from-[#2b2b2b] via-[#6f6f6f] to-[#ef3b2d]',
  },
]

const menuItems = [
  { name: 'Crispy Chicken Sliders', note: 'Hot honey pickles', price: '$13' },
  { name: 'Loaded Truffle Fries', note: 'Parmesan and garlic herb', price: '$11' },
  { name: 'Garlic Herb Flatbread', note: 'Whipped ricotta and charred tomato', price: '$12' },
  { name: 'Spicy Shrimp Tacos', note: 'Lime slaw and chili crema', price: '$16' },
  { name: 'Garden Power Bowl', note: 'Greens, grains, avocado', price: '$15' },
  { name: 'Classic House Burger', note: 'Cheddar, pickles, onion', price: '$16' },
  { name: 'Lemon Pepper Wings', note: 'Crisp finish and ranch', price: '$14' },
  { name: 'Chocolate Skillet Brownie', note: 'Warm vanilla cream', price: '$9' },
]

const reasons = [
  {
    title: 'Fast Without Feeling Rushed',
    description: 'UrbanBite is built for lunch meetings, dinner dates, and late city bites that still feel composed.',
  },
  {
    title: 'Big Flavor, Clean Plates',
    description: 'We use fresh produce, tight prep, and flame-forward cooking to keep every dish lively and balanced.',
  },
  {
    title: 'A Room With Real Energy',
    description: 'Open kitchen light, downtown rhythm, and a crowd that makes the space feel current every night.',
  },
]

const testimonials = [
  {
    name: 'Jordan Hayes',
    role: 'Downtown Creative',
    quote: 'UrbanBite feels like the place you text your friends about as soon as dinner lands. The burger is unreal.',
  },
  {
    name: 'Mia Patel',
    role: 'Neighborhood Regular',
    quote: 'The bowl menu is fresh, the cocktails are sharp, and the room has just the right amount of city energy.',
  },
  {
    name: 'Carlos Benton',
    role: 'Late Dinner Guest',
    quote: 'Fast service, confident food, and a menu that actually makes you want to come back next week.',
  },
]

export function UrbanBiteKitchen() {
  return (
    <main className="brand-motion motion-urbanbite bg-[#f4efe8] text-[#161616]">
      <RestaurantSubNav
        brand="UrbanBite"
        links={[
          { label: 'Dishes', href: '#dishes' },
          { label: 'Menu', href: '#menu' },
          { label: 'Kitchen', href: '#story' },
          { label: 'Reviews', href: '#reviews' },
        ]}
        ctaLabel="Reserve a Table"
        ctaHref="#reserve"
        className="border-b border-white/10 bg-[#161616]/95 text-white"
        brandClassName="text-sm uppercase tracking-[0.24em] text-white"
        linkClassName="text-white/85 transition hover:bg-white/10 hover:text-[#ef3b2d]"
        ctaClassName="bg-[#ef3b2d] text-white hover:bg-[#d83227]"
        menuButtonClassName="border-white/20 text-white hover:bg-white/10"
        mobilePanelClassName="border border-white/10 bg-[#161616]"
      />

      <section className="relative overflow-hidden bg-[#161616] pt-28 text-white md:pt-36">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(239,59,45,0.16)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:42px_42px]" />
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#ef3b2d]/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-[#f6c65c]/12 blur-3xl" />

        <Container className="relative pb-20 md:pb-28">
          <div className="grid gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
            <div>
              <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#f6c65c]">
                Modern Casual Dining • Fresh Daily
              </div>
              <h1 className="mt-6 max-w-3xl text-5xl font-black leading-[1] md:text-7xl">
                UrbanBite Kitchen
                <span className="mt-3 block text-[0.72em] leading-[1.06] text-[#f4efe8]">
                  Big City Flavor, Crafted Fresh Every Day
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/78 md:text-xl">
                Fresh bowls, stacked burgers, late-night plates, and the kind of lively dining room that feels built for the city.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#menu" size="lg" className="bg-[#ef3b2d] hover:bg-[#d83227]">
                  View Menu
                </CTAButton>
                <CTAButton href="#reserve" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  Reserve a Table
                </CTAButton>
              </div>
              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { value: '25+', label: 'Fresh Dishes' },
                  { value: 'Daily', label: 'Open 7 Days' },
                  { value: 'Local', label: 'Ingredients' },
                ].map((stat) => (
                  <div key={stat.label} className="rounded-2xl border border-white/10 bg-white/6 p-4 backdrop-blur">
                    <p className="text-3xl font-black text-white">{stat.value}</p>
                    <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-[#f6c65c]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-2xl">
              <div className="grid gap-4 md:grid-cols-[1.05fr_0.95fr]">
                <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_28px_60px_rgba(0,0,0,0.28)] backdrop-blur">
                  <div className="rounded-[1.6rem] bg-[linear-gradient(145deg,#ef3b2d,#731713_42%,#f6c65c_43%,#1f1f1f_82%)] p-6">
                    <div className="mx-auto flex aspect-square max-w-[17rem] items-center justify-center rounded-full bg-[#f4efe8] shadow-inner">
                      <div className="h-44 w-44 rounded-full border-[16px] border-[#2b2b2b] bg-[radial-gradient(circle_at_50%_42%,#ef3b2d_0_24%,transparent_25%),radial-gradient(circle_at_35%_70%,#f6c65c_0_10%,transparent_11%),linear-gradient(135deg,#f4efe8,#d8d3cc)] shadow-xl" />
                    </div>
                    <div className="mt-6 rounded-2xl bg-[#161616]/85 p-4 text-white">
                      <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f6c65c]">Chef Pick</p>
                      <p className="mt-2 text-2xl font-black">Tomato Basil Smash Burger</p>
                      <p className="mt-2 text-sm leading-6 text-white/72">Seared edges, tomato jam, basil aioli, and all the city comfort you want in one bite.</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[2rem] border border-white/10 bg-[#ef3b2d] p-5 text-white shadow-xl">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f6c65c]">Tonight's Ticket</p>
                    <div className="mt-5 space-y-4 text-sm">
                      <div className="flex justify-between gap-4 border-b border-white/20 pb-3">
                        <span>Street Corn Tacos</span>
                        <span>$16</span>
                      </div>
                      <div className="flex justify-between gap-4 border-b border-white/20 pb-3">
                        <span>Truffle Fries</span>
                        <span>$11</span>
                      </div>
                      <div className="flex justify-between gap-4">
                        <span>Skillet Brownie</span>
                        <span>$9</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-[2rem] border border-white/10 bg-white/88 p-5 text-[#161616] shadow-lg">
                    <p className="text-xs font-black uppercase tracking-[0.18em] text-[#ef3b2d]">Opening Hours</p>
                    <div className="mt-4 space-y-3 text-sm text-[#4c4c4c]">
                      <div className="flex justify-between gap-3">
                        <span>Mon - Thu</span>
                        <span className="font-bold">11 AM - 10 PM</span>
                      </div>
                      <div className="flex justify-between gap-3">
                        <span>Fri - Sun</span>
                        <span className="font-bold">11 AM - 11 PM</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div className="rounded-[2rem] bg-[#161616] p-8 text-white shadow-sm">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-[#f6c65c]">About UrbanBite</p>
              <p className="mt-8 text-5xl font-black text-[#ef3b2d]">8 min</p>
              <p className="mt-3 text-xl font-black">average weekday lunch pickup</p>
              <p className="mt-5 leading-7 text-white/72">
                Fast enough for a city schedule, sharp enough to feel like an actual night-out spot.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-black leading-tight text-[#161616] md:text-5xl">
                Modern comfort food with sharper edges and fresher energy.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#535353]">
                UrbanBite Kitchen brings together flame-grilled proteins, market vegetables, bold sauces, and downtown pacing
                in a room that feels social from lunch through late dinner.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#ef3b2d]">Fresh all day</p>
                  <p className="mt-2 text-[#535353]">Every service starts with produce prep, sauce batches, and a line built for speed.</p>
                </div>
                <div className="rounded-2xl bg-[#f8e7e2] p-5 shadow-sm">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#ef3b2d]">Room with rhythm</p>
                  <p className="mt-2 text-[#535353]">Open kitchen views, clean design, and just enough noise to make dinner feel alive.</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="dishes" className="border-y border-[#ddd6cf] bg-white py-20 md:py-28">
        <Container>
          <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ef3b2d]">Signature Dishes</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#161616] md:text-5xl">
                Plates that feel loud, fresh, and ready to repeat.
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#535353]">
              This is the core of the menu: modern comfort food with smoky heat, bright sauces, and enough edge to stay memorable.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {signatureDishes.map((dish) => (
              <article
                key={dish.name}
                className="group rounded-[2rem] border border-[#ddd6cf] bg-[#f4efe8] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className={`relative h-48 overflow-hidden rounded-[1.5rem] bg-gradient-to-br ${dish.background}`}>
                  <div className="absolute left-4 top-4 rounded-full bg-white/85 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#161616] shadow-sm">
                    {dish.label}
                  </div>
                  <div className="absolute bottom-5 right-5 h-10 w-10 rounded-full border-4 border-white/65 bg-[#161616]/20" />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black text-[#161616]">{dish.name}</h3>
                  <span className="rounded-full bg-[#161616] px-3 py-1 text-sm font-black text-white">{dish.price}</span>
                </div>
                <p className="mt-3 leading-7 text-[#535353]">{dish.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-14 text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ef3b2d]">Why Dine With Us</p>
            <h2 className="mt-3 text-4xl font-black text-[#161616] md:text-5xl">Casual enough for every day, polished enough for tonight.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {reasons.map((reason) => (
              <article key={reason.title} className="rounded-[2rem] border border-[#ddd6cf] bg-white p-8 shadow-sm">
                <div className="mb-6 h-2 w-20 rounded-full bg-[#ef3b2d]" />
                <h3 className="text-2xl font-black text-[#161616]">{reason.title}</h3>
                <p className="mt-4 leading-7 text-[#535353]">{reason.description}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="menu" className="bg-[#161616] py-20 text-white md:py-28">
        <Container>
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f6c65c]">Menu Preview</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">A downtown menu with range, heat, and crowd favorites.</h2>
            </div>
            <p className="max-w-md leading-7 text-white/72">
              Snackable starters, strong mains, and one dessert worth saving room for.
            </p>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/6 p-6 backdrop-blur md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              {menuItems.map((item) => (
                <div key={item.name} className="flex items-start justify-between gap-4 border-b border-white/10 pb-4 last:border-b-0">
                  <div>
                    <p className="font-black text-white">{item.name}</p>
                    <p className="mt-1 text-sm text-white/60">{item.note}</p>
                  </div>
                  <span className="font-black text-[#f6c65c]">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="story" className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="rounded-[2rem] bg-[linear-gradient(145deg,#ef3b2d,#161616_55%,#f6c65c)] p-8 shadow-2xl">
              <div className="rounded-[1.6rem] bg-[#f4efe8] p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#ef3b2d]">Chef's Note</p>
                <p className="mt-6 text-2xl font-black text-[#161616]">
                  We build food that feels bright and craveable, but still leaves the plate clean.
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ef3b2d]">Kitchen Story</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#161616] md:text-5xl">
                An open kitchen with line-cook discipline and market-stall instincts.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#535353]">
                UrbanBite runs on clean prep, fast passes, and confident seasoning. The team cooks with the pace of a busy city,
                but every plate still lands with care, balance, and visible detail.
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section id="reviews" className="border-y border-[#ddd6cf] bg-white py-20 md:py-28">
        <Container>
          <div className="mb-14 text-center">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#ef3b2d]">Testimonials</p>
            <h2 className="mt-3 text-4xl font-black text-[#161616] md:text-5xl">What people say after a night at UrbanBite.</h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <blockquote key={testimonial.name} className="rounded-[2rem] border border-[#ddd6cf] bg-[#f4efe8] p-8 shadow-sm">
                <div className="mb-5 flex gap-1 text-[#f6c65c]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <span key={index}>*</span>
                  ))}
                </div>
                <p className="text-lg leading-8 text-[#3c3c3c]">"{testimonial.quote}"</p>
                <footer className="mt-6">
                  <p className="font-black text-[#161616]">{testimonial.name}</p>
                  <p className="text-sm text-[#666666]">{testimonial.role}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section id="reserve" className="relative overflow-hidden bg-[#ef3b2d] py-20 text-white md:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(22,22,22,0.08)_1px,transparent_1px)] bg-[size:44px_44px]" />
        <Container className="relative">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f6c65c]">Reservation Callout</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">
                Pull up a chair for lunch, dinner, or a late bite downtown.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/85">
                Reserve ahead, drop in after work, or call for a larger table. UrbanBite is open every day and built for the city schedule.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="tel:555-0144" size="lg" className="bg-[#161616] text-white hover:bg-black">
                  Reserve by Phone
                </CTAButton>
                <CTAButton href="#menu" variant="outline" size="lg" className="border-white text-white hover:bg-white/10">
                  View Menu
                </CTAButton>
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <div className="rounded-[2rem] border border-white/18 bg-white/10 p-6 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f6c65c]">Hours</p>
                <div className="mt-5 space-y-3 text-sm text-white/88">
                  <div className="flex justify-between gap-4">
                    <span>Mon - Thu</span>
                    <span className="font-bold">11 AM - 10 PM</span>
                  </div>
                  <div className="flex justify-between gap-4">
                    <span>Fri - Sun</span>
                    <span className="font-bold">11 AM - 11 PM</span>
                  </div>
                </div>
              </div>
              <div className="rounded-[2rem] border border-white/18 bg-white/10 p-6 backdrop-blur">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f6c65c]">Find Us</p>
                <div className="mt-5 space-y-3 text-sm text-white/88">
                  <p>214 Market Ave</p>
                  <p>Downtown Arts District</p>
                  <p>(555) 014-4040</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <footer className="border-t border-[#2c2c2c] bg-[#111111] py-12 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <p className="text-2xl font-black">UrbanBite Kitchen</p>
              <p className="mt-3 max-w-sm text-sm leading-7 text-white/68">
                Bold city dining with fresh plates, strong sauces, and a room that feels current from open to close.
              </p>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f6c65c]">Hours</p>
              <div className="mt-4 space-y-2 text-sm text-white/68">
                <p>Mon - Thu: 11 AM - 10 PM</p>
                <p>Fri - Sun: 11 AM - 11 PM</p>
              </div>
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f6c65c]">Location & Social</p>
              <div className="mt-4 space-y-2 text-sm text-white/68">
                <p>214 Market Ave, Downtown Arts District</p>
                <p>Instagram</p>
                <p>TikTok</p>
                <p>Facebook</p>
              </div>
            </div>
          </div>
        </Container>
      </footer>

      <section className="border-t border-[#ddd6cf] bg-[#f4efe8] py-10">
        <Container className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row">
          <Link to="/restaurant" className="font-bold text-[#ef3b2d] hover:text-[#161616]">
            Back to Restaurant Collection
          </Link>
          <Link to="/" className="font-bold text-[#666666] hover:text-[#161616]">
            Back to 100 Designs Portfolio
          </Link>
        </Container>
      </section>
    </main>
  )
}
