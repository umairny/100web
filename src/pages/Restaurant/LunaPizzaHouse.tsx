import { Link } from 'react-router-dom'
import { Container, CTAButton } from '../../components'

const pizzas = [
  { name: 'Margherita Moon', detail: 'San Marzano tomato, basil, fresh mozzarella', price: '$16' },
  { name: 'Garden Verde', detail: 'Pesto, zucchini ribbons, roasted peppers, ricotta', price: '$18' },
  { name: 'Little Italy Heat', detail: 'Spicy salami, chili honey, basil, aged provolone', price: '$19' },
]

export function LunaPizzaHouse() {
  return (
    <main className="bg-[#fff7e8] text-[#24211d]">
      <nav className="fixed left-0 right-0 top-16 z-40 border-b border-[#c92a22]/15 bg-[#fff7e8]/95 backdrop-blur">
        <Container className="flex h-14 items-center justify-between">
          <Link to="/restaurant" className="font-black text-[#c92a22]">Luna Pizza House</Link>
          <div className="hidden gap-6 text-sm font-bold md:flex">
            <a href="#pizzas" className="hover:text-[#c92a22]">Pizzas</a>
            <a href="#ingredients" className="hover:text-[#c92a22]">Ingredients</a>
            <a href="#deals" className="hover:text-[#c92a22]">Deals</a>
          </div>
          <a href="#order" className="rounded-full bg-[#2f8f46] px-4 py-2 text-sm font-black text-white">Order</a>
        </Container>
      </nav>

      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(201,42,34,0.16),transparent_24%),radial-gradient(circle_at_82%_18%,rgba(47,143,70,0.14),transparent_22%)]" />
        <Container className="relative grid items-center gap-12 pb-20 md:grid-cols-[0.95fr_1.05fr] md:pb-28">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.26em] text-[#2f8f46]">Playful modern Italian</p>
            <h1 className="mt-4 text-5xl font-black leading-tight md:text-7xl">Handmade pizza for loud, happy tables.</h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#6a5044]">
              Wood-fired flavor, fresh toppings, and a family-friendly room where every night feels like pizza night.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton href="#order" size="lg" className="bg-[#c92a22] hover:bg-[#aa211b]">Order Online</CTAButton>
              <CTAButton href="#pizzas" variant="outline" size="lg" className="border-[#2f8f46] text-[#2f8f46] hover:bg-[#eaf4dc]">See Pizzas</CTAButton>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-lg rounded-full bg-[#c92a22] p-8 shadow-2xl">
            <div className="h-full rounded-full bg-[#f6d48b] p-8">
              <div className="grid h-full grid-cols-3 gap-4">
                {Array.from({ length: 9 }).map((_, index) => (
                  <span key={index} className={`rounded-full ${index % 2 === 0 ? 'bg-[#c92a22]' : 'bg-[#2f8f46]'}`} />
                ))}
              </div>
            </div>
            <div className="absolute -bottom-4 left-8 right-8 rounded-3xl bg-white p-5 text-center shadow-xl">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#c92a22]">Fresh dough daily</p>
              <p className="mt-1 text-2xl font-black">12-inch joy, made by hand.</p>
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="bg-white py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#c92a22]">About Luna</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">A neighborhood pizza house with bright Italian energy.</h2>
          </div>
          <p className="text-lg leading-8 text-[#6a5044]">
            Luna keeps dinner easy: handmade dough, familiar favorites, playful specials, and warm service for families,
            friends, and anyone chasing a crispy crust.
          </p>
        </Container>
      </section>

      <section id="pizzas" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="font-black uppercase tracking-[0.24em] text-[#2f8f46]">Featured pizzas</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Round, bright, and bubbling.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {pizzas.map((pizza) => (
              <article key={pizza.name} className="rounded-[2rem] bg-white p-6 shadow-sm">
                <div className="mb-6 aspect-square rounded-full bg-[radial-gradient(circle_at_50%_50%,#f6d48b_0_45%,#c92a22_46%_54%,#fff7e8_55%)]" />
                <div className="flex justify-between gap-4">
                  <h3 className="text-2xl font-black">{pizza.name}</h3>
                  <span className="font-black text-[#c92a22]">{pizza.price}</span>
                </div>
                <p className="mt-3 leading-7 text-[#6a5044]">{pizza.detail}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="ingredients" className="bg-[#2f8f46] py-20 text-white md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#fff7e8]">Fresh ingredients</p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">Tomato, basil, dough, fire.</h2>
            <p className="mt-5 text-lg leading-8 text-white/85">
              Our kitchen leans on simple, high-quality ingredients and a hot oven that keeps every crust crisp and lively.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {['48-hour dough', 'House tomato sauce', 'Fresh basil', 'Hand-pulled cheese'].map((item) => (
              <div key={item} className="rounded-2xl bg-white/12 p-6">
                <h3 className="text-2xl font-black">{item}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section id="deals" className="py-20 md:py-28">
        <Container className="grid gap-8 md:grid-cols-3">
          {['Family Night Bundle', 'Two Pizza Tuesday', 'Kids Slice Set'].map((deal) => (
            <article key={deal} className="rounded-3xl border-2 border-[#c92a22] bg-white p-8">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-[#2f8f46]">Family deal</p>
              <h3 className="mt-6 text-3xl font-black">{deal}</h3>
              <p className="mt-4 leading-7 text-[#6a5044]">Pizza, salad, drinks, and an easy dinner plan for the whole table.</p>
            </article>
          ))}
        </Container>
      </section>

      <section className="bg-white py-20 md:py-28">
        <Container className="grid gap-6 md:grid-cols-3">
          {['Best Friday night pizza spot.', 'Fun room, great crust, easy with kids.', 'The chili honey pizza is perfect.'].map((quote) => (
            <blockquote key={quote} className="rounded-3xl bg-[#fff7e8] p-8">
              <p className="text-xl font-bold leading-8">"{quote}"</p>
              <footer className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#c92a22]">Luna guest</footer>
            </blockquote>
          ))}
        </Container>
      </section>

      <section id="order" className="bg-[#c92a22] py-20 text-white">
        <Container className="text-center">
          <h2 className="text-4xl font-black md:text-5xl">Pizza night starts here.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-white/85">Order online for pickup or bring the family in for a casual Italian dinner.</p>
          <CTAButton href="tel:555-0122" size="lg" className="mt-8 bg-white text-[#c92a22] hover:bg-[#fff7e8]">Call (555) 012-2200</CTAButton>
        </Container>
      </section>

      <section className="border-t border-[#ead8bb] py-8">
        <Container>
          <Link to="/restaurant" className="font-bold text-[#c92a22] hover:text-[#2f8f46]">
            Back to Restaurant Collection
          </Link>
        </Container>
      </section>

      <footer className="bg-[#24211d] py-10 text-white">
        <Container className="flex flex-col justify-between gap-4 text-sm md:flex-row">
          <p className="font-black">Luna Pizza House</p>
          <p className="text-white/70">42 Crescent Street | Open daily 12 PM - 10 PM</p>
        </Container>
      </footer>
    </main>
  )
}
