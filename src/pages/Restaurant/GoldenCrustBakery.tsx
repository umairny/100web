import { Link } from 'react-router-dom'
import { Container, CTAButton, RestaurantSubNav } from '../../components'

const featuredGoods = [
  {
    name: 'Honey Butter Croissant',
    label: 'Best Seller',
    price: '$5.50',
    note: 'Flaky butter layers brushed with local honey and finished with a soft golden shine.',
    shape: 'from-[#f8c455] via-[#d98f2f] to-[#8f5429]',
  },
  {
    name: 'Sourdough Country Loaf',
    label: 'Fresh Today',
    price: '$9.00',
    note: 'Naturally leavened for 24 hours with a crisp crust, tender center, and deep wheat flavor.',
    shape: 'from-[#b87536] via-[#e2a84b] to-[#fff1c7]',
  },
  {
    name: 'Chocolate Almond Danish',
    label: 'Bakery Favorite',
    price: '$6.25',
    note: 'Laminated pastry folded around dark chocolate, almond cream, and toasted sliced almonds.',
    shape: 'from-[#58311f] via-[#b46f33] to-[#f6c766]',
  },
  {
    name: 'Cinnamon Morning Roll',
    label: 'Limited Batch',
    price: '$5.75',
    note: 'Soft morning dough swirled with cinnamon sugar and a light vanilla cream glaze.',
    shape: 'from-[#f3b24b] via-[#9b5d2e] to-[#fff4d4]',
  },
]

const dailySpecials = [
  'Classic Baguette',
  'Blueberry Cream Tart',
  'Butter Brioche',
  'Spinach Feta Pastry',
  'Apple Crumble Slice',
  'Sesame Bagel',
  'Mini Cheesecake',
  'Seasonal Fruit Galette',
]

const processSteps = [
  {
    step: 'Mix',
    title: 'Measured by hand',
    text: 'Flour, butter, starter, and seasonal fillings are prepared in small batches for balanced flavor.',
  },
  {
    step: 'Rest',
    title: 'Slow flavor building',
    text: 'Doughs rest patiently so loaves develop a deeper aroma, softer crumb, and signature crust.',
  },
  {
    step: 'Shape',
    title: 'Every piece finished',
    text: 'Our bakers score loaves, fold pastries, and glaze morning favorites before the ovens wake up.',
  },
  {
    step: 'Bake',
    title: 'Fresh before sunrise',
    text: 'The first trays land in the case warm, golden, and ready for the neighborhood breakfast rush.',
  },
]

const testimonials = [
  {
    quote: 'The sourdough tastes like it came from a tiny European bakery, but the staff makes it feel like home.',
    name: 'Maya Henderson',
  },
  {
    quote: 'I stop in after school drop-off for a croissant and coffee. It is the warmest part of my morning.',
    name: 'Daniel Ortiz',
  },
  {
    quote: 'Their fruit galette and cinnamon rolls are what I bring when I want everyone to ask where they came from.',
    name: 'Priya Shah',
  },
]

export function GoldenCrustBakery() {
  return (
    <main className="brand-motion motion-goldencrust bg-[#fff8e8] text-[#332015]">
      <RestaurantSubNav
        brand="Golden Crust Bakery"
        links={[
          { label: 'Baked Goods', href: '#goods' },
          { label: 'Specials', href: '#specials' },
          { label: 'Process', href: '#process' },
          { label: 'Visit', href: '#visit' },
        ]}
        ctaLabel="Morning Hours"
        ctaHref="#visit"
        className="border-b border-[#efd9a8] bg-[#fff8e8]/95 shadow-sm shadow-[#6f3f22]/5"
        brandClassName="text-[#6d3f22]"
        linkClassName="rounded-full px-3 py-2 text-[#6d3f22] transition hover:bg-[#f4dfad] hover:text-[#9f661f]"
        ctaClassName="bg-[#6d3f22] text-[#fff8e8] shadow-sm hover:bg-[#4b2b19]"
        menuButtonClassName="border-[#e8c985] text-[#6d3f22] hover:bg-[#f4dfad]"
        mobilePanelClassName="border border-[#efd9a8] bg-[#fff8e8]"
      />

      <section className="relative overflow-hidden bg-[#fff8e8] pt-28 md:pt-36">
        <div className="absolute inset-x-0 top-0 h-24 bg-[#4b2b19]" />
        <div className="absolute inset-x-0 top-24 h-14 bg-[repeating-linear-gradient(90deg,#e5a939_0_72px,#fff3d6_72px_144px)] shadow-[0_12px_30px_rgba(75,43,25,0.16)]" />
        <div className="absolute inset-0 top-36 bg-[linear-gradient(180deg,#fff8e8_0%,#fff3d6_54%,#fffaf0_100%)]" />
        <div className="absolute left-8 top-56 hidden h-72 w-10 rounded-full bg-[#4b2b19]/10 lg:block" />
        <div className="absolute bottom-16 right-10 hidden h-56 w-56 rounded-full border-[26px] border-[#e5a939]/20 lg:block" />
        <Container className="relative grid items-center gap-12 pb-20 pt-8 md:grid-cols-[0.9fr_1.1fr] md:pb-28">
          <div>
            <Link
              to="/restaurant"
              className="mb-8 inline-flex items-center rounded-full border border-[#e7c67c] bg-[#fffaf0]/80 px-4 py-2 text-sm font-black text-[#6d3f22] shadow-sm transition hover:-translate-y-0.5 hover:bg-[#fff3d6]"
            >
              Back to Restaurant Collection
            </Link>
            <p className="inline-flex rounded-full bg-[#6d3f22] px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[#ffe7a4] shadow-lg shadow-[#6d3f22]/15">
              Fresh Baked Daily • Artisan Bakery
            </p>
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[0.94] text-[#332015] md:text-7xl">
              Follow the butter trail before the city wakes.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6d3f22]">
              Golden Crust turns the first hours of the day into a ritual: scored sourdough, laminated pastry,
              honey-brushed croissants, and a warm counter that sells out by scent before signage.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton
                href="#goods"
                size="lg"
                className="rounded-full bg-[#e5a939] text-[#332015] shadow-xl shadow-[#b3772e]/20 hover:-translate-y-0.5 hover:bg-[#f1bd55]"
              >
                See The Case
              </CTAButton>
              <CTAButton
                href="#visit"
                variant="outline"
                size="lg"
                className="rounded-full border-[#6d3f22] bg-[#fffaf0]/80 text-[#6d3f22] hover:-translate-y-0.5 hover:bg-[#f4dfad]"
              >
                Catch First Tray
              </CTAButton>
            </div>

            <div className="mt-10 max-w-xl border-y border-[#d8b764] py-5">
              {[
                { time: '4:40', label: 'Ovens lit' },
                { time: '5:30', label: 'First loaves scored' },
                { time: '7:00', label: 'Croissants hit the window' },
              ].map((item) => (
                <div key={item.label} className="grid grid-cols-[4.5rem_1fr] gap-4 border-b border-[#e8cf91] py-3 last:border-b-0">
                  <p className="font-black text-[#4b2b19]">{item.time}</p>
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#b3772e]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative mx-auto min-h-[560px] w-full max-w-xl">
            <div className="absolute inset-x-6 bottom-4 top-10 rounded-t-[9rem] rounded-b-[2.5rem] bg-[#4b2b19] shadow-2xl shadow-[#6d3f22]/20" />
            <div className="absolute inset-x-14 top-20 h-72 rounded-t-[7rem] rounded-b-[2rem] border-[10px] border-[#2d1b12] bg-[radial-gradient(circle_at_50%_70%,#f3b24b_0_18%,#8f5429_48%,#3b2115_100%)]" />
            <div className="absolute inset-x-20 top-40 h-20 rounded-full bg-[#ffe7a4]/25 blur-xl" />

            <div className="absolute left-12 right-12 top-80 rotate-[-2deg] rounded-[1.25rem] border-4 border-[#2d1b12] bg-[#d8a04a] p-4 shadow-[10px_10px_0_#4b2b19]">
              <div className="grid grid-cols-4 gap-3">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="aspect-square rounded-full bg-gradient-to-br from-[#fff0bf] via-[#d99a35] to-[#8f5429] shadow-inner" />
                ))}
              </div>
            </div>

            <div className="absolute left-2 top-16 w-48 rotate-[-7deg] rounded-[1.5rem] border border-[#efd9a8] bg-[#fffaf0] p-5 shadow-xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b3772e]">Proofing now</p>
              <p className="mt-2 text-3xl font-black text-[#332015]">Country loaf</p>
              <p className="mt-2 text-sm leading-6 text-[#6d3f22]">24-hour starter, deep crust, soft center.</p>
            </div>

            <div className="absolute bottom-14 right-0 w-56 rotate-[5deg] rounded-[1.5rem] bg-[#fffaf0] p-5 shadow-xl">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-[#b3772e]">First tray</p>
              <p className="mt-2 text-2xl font-black text-[#332015]">Honey croissants at 7:00 AM</p>
            </div>

            <div className="absolute bottom-0 left-8 rounded-full bg-[#e5a939] px-5 py-3 text-sm font-black uppercase tracking-[0.16em] text-[#332015] shadow-lg">
              Warm case, small batches
            </div>
          </div>
        </Container>
      </section>

      <section id="about" className="bg-[#fffaf0] py-20 md:py-28">
        <Container className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <p className="font-black uppercase tracking-[0.24em] text-[#b3772e]">About Golden Crust</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#332015] md:text-5xl">
              A bakery built around patient dough and familiar mornings.
            </h2>
          </div>
          <div className="rounded-[2rem] border border-[#efd9a8] bg-white p-7 shadow-sm">
            <p className="text-lg leading-8 text-[#6d3f22]">
              Golden Crust Bakery makes bread and pastries the old-fashioned way: small batches, real butter,
              natural starters, and a calm kitchen that starts before sunrise. From weekday baguettes to Saturday
              tarts, every bake is made to feel generous, fresh, and worth sharing.
            </p>
            <div className="mt-6 h-2 w-24 rounded-full bg-[#e5a939]" />
          </div>
        </Container>
      </section>

      <section id="goods" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="font-black uppercase tracking-[0.24em] text-[#b3772e]">Featured baked goods</p>
            <h2 className="mt-3 text-4xl font-black leading-tight text-[#332015] md:text-5xl">
              Soft layers, crisp crusts, and golden case favorites.
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featuredGoods.map((item) => (
              <article
                key={item.name}
                className="group rounded-[1.75rem] border border-[#efd9a8] bg-[#fffaf0] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-[#e5a939] hover:shadow-2xl hover:shadow-[#6d3f22]/10"
              >
                <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-[1.35rem] bg-[#f5dfad]">
                  <div className={`absolute inset-6 rounded-t-[5rem] rounded-b-[1.4rem] bg-gradient-to-br ${item.shape} transition duration-300 group-hover:scale-105`} />
                  <div className="absolute inset-x-8 bottom-6 h-3 rounded-full bg-[#6d3f22]/15" />
                  <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.14em] text-[#8f5429]">
                    {item.label}
                  </div>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-black leading-tight text-[#332015]">{item.name}</h3>
                  <p className="rounded-full bg-[#e5a939] px-3 py-1 text-sm font-black text-[#332015]">{item.price}</p>
                </div>
                <p className="mt-3 leading-7 text-[#6d3f22]">{item.note}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="specials" className="bg-[#3a2418] py-20 text-[#fff8e8] md:py-28">
        <Container>
          <div className="grid gap-10 md:grid-cols-[0.85fr_1.15fr] md:items-start">
            <div>
              <p className="font-black uppercase tracking-[0.24em] text-[#f2c45d]">Daily specials</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">A new tray worth stopping for.</h2>
              <p className="mt-5 text-lg leading-8 text-[#f8dfac]">
                Specials rotate with the season, the market, and whatever our bakers are most excited to pull
                from the oven that morning.
              </p>
              <div className="mt-8 rounded-3xl border border-white/15 bg-white/10 p-5">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f2c45d]">Fresh from oven callout</p>
                <p className="mt-2 text-xl font-black">Ask for the 9 AM tray if you love warm pastry.</p>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {dailySpecials.map((special, index) => (
                <div key={special} className="rounded-2xl border border-white/15 bg-white/[0.07] p-5 shadow-sm">
                  <p className="text-sm font-black text-[#f2c45d]">0{index + 1}</p>
                  <p className="mt-3 text-lg font-black">{special}</p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="process" className="bg-[#fffaf0] py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="font-black uppercase tracking-[0.24em] text-[#b3772e]">Baking process</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">From starter to shelf, every step has a reason.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-4">
            {processSteps.map((item, index) => (
              <article key={item.step} className="rounded-[1.75rem] border border-[#efd9a8] bg-white p-6 shadow-sm">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#b3772e]">0{index + 1} • {item.step}</p>
                <h3 className="mt-8 text-2xl font-black text-[#332015]">{item.title}</h3>
                <p className="mt-3 leading-7 text-[#6d3f22]">{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="mb-12 text-center">
            <p className="font-black uppercase tracking-[0.24em] text-[#b3772e]">Testimonials</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Loved by regulars, neighbors, and weekend guests.</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <blockquote key={item.name} className="rounded-[1.75rem] border border-[#efd9a8] bg-[#fffaf0] p-7 shadow-sm">
                <p className="text-xl font-bold leading-8 text-[#332015]">"{item.quote}"</p>
                <footer className="mt-6 border-t border-[#efd9a8] pt-5 text-sm font-black uppercase tracking-[0.18em] text-[#9f661f]">
                  {item.name}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section id="visit" className="bg-[#fffaf0] py-20 md:py-28">
        <Container>
          <div className="grid gap-6 rounded-[2rem] border border-[#e5c782] bg-[#e5a939] p-6 shadow-2xl shadow-[#6d3f22]/10 md:grid-cols-[1.1fr_0.9fr] md:p-10">
            <div className="rounded-[1.5rem] bg-[#fff8e8]/80 p-7">
              <p className="font-black uppercase tracking-[0.22em] text-[#8f5429]">Visit us CTA</p>
              <h2 className="mt-3 text-4xl font-black leading-tight text-[#332015] md:text-5xl">
                Come early for warm bread and a full pastry case.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-[#6d3f22]">
                Bring the family, grab a table by the front window, or take a paper bag of fresh bakes to go.
                We keep the case moving all morning, but the favorites disappear fast.
              </p>
              <CTAButton
                href="tel:5550188000"
                size="lg"
                className="mt-8 rounded-full bg-[#3a2418] text-white hover:-translate-y-0.5 hover:bg-[#24160f]"
              >
                Call (555) 018-8000
              </CTAButton>
            </div>

            <div className="grid gap-4">
              <div className="rounded-[1.5rem] bg-[#3a2418] p-6 text-[#fff8e8]">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#f2c45d]">Opening hours</p>
                <p className="mt-4 text-2xl font-black">Daily 7 AM - 3 PM</p>
                <p className="mt-2 leading-7 text-[#f8dfac]">First bread batch at 7 AM. Pastry restock around 9 AM.</p>
              </div>
              <div className="rounded-[1.5rem] bg-[#fff8e8] p-6">
                <p className="text-sm font-black uppercase tracking-[0.18em] text-[#9f661f]">Address and contact</p>
                <p className="mt-4 text-2xl font-black text-[#332015]">88 Brioche Lane</p>
                <p className="mt-2 leading-7 text-[#6d3f22]">Old Market District, Suite 4<br />hello@goldencrust.example</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-y border-[#efd9a8] bg-[#fff8e8] py-8">
        <Container>
          <Link to="/restaurant" className="font-black text-[#6d3f22] transition hover:text-[#b3772e]">
            Back to Restaurant Collection
          </Link>
        </Container>
      </section>

      <footer className="bg-[#332015] py-12 text-[#fff8e8]">
        <Container className="grid gap-8 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <p className="text-2xl font-black">Golden Crust Bakery</p>
            <p className="mt-3 max-w-sm leading-7 text-[#f8dfac]">
              Handcrafted bread, warm pastries, and neighborhood mornings baked fresh every day.
            </p>
          </div>
          <div>
            <p className="font-black text-[#f2c45d]">Hours</p>
            <p className="mt-3 leading-7 text-[#f8dfac]">Daily<br />7 AM - 3 PM</p>
          </div>
          <div>
            <p className="font-black text-[#f2c45d]">Location</p>
            <p className="mt-3 leading-7 text-[#f8dfac]">88 Brioche Lane<br />Old Market District</p>
          </div>
          <div>
            <p className="font-black text-[#f2c45d]">Social</p>
            <div className="mt-3 flex flex-wrap gap-3 text-sm font-bold text-[#fff8e8]">
              <a href="#visit" className="hover:text-[#f2c45d]">Instagram</a>
              <a href="#visit" className="hover:text-[#f2c45d]">Facebook</a>
              <a href="#visit" className="hover:text-[#f2c45d]">Reviews</a>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  )
}
