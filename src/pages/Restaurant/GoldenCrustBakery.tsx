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

const StatCard = ({ value, label }: { value: string; label: string }) => (
  <div className="rounded-3xl border border-[#efd9a8] bg-[#fffaf0]/90 p-5 shadow-sm">
    <p className="text-2xl font-black text-[#6d3f22] md:text-3xl">{value}</p>
    <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-[#b3772e]">{label}</p>
  </div>
)

const BreadShape = ({ className }: { className: string }) => (
  <div className={`relative overflow-hidden shadow-lg shadow-[#7a4524]/20 ${className}`}>
    <span className="absolute left-1/2 top-3 h-12 w-1 -translate-x-1/2 rotate-12 rounded-full bg-white/35" />
    <span className="absolute left-1/3 top-5 h-10 w-1 rotate-12 rounded-full bg-white/30" />
    <span className="absolute right-1/3 top-5 h-10 w-1 rotate-12 rounded-full bg-white/30" />
  </div>
)

const PastrySwirl = ({ className }: { className: string }) => (
  <div className={`relative rounded-full shadow-lg shadow-[#7a4524]/20 ${className}`}>
    <span className="absolute inset-3 rounded-full border-[10px] border-[#8f5429]/35" />
    <span className="absolute inset-7 rounded-full border-[8px] border-[#fff2cd]/70" />
    <span className="absolute inset-[46%] rounded-full bg-[#7a4524]" />
  </div>
)

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

      <section className="relative overflow-hidden pt-28 md:pt-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_16%,rgba(229,169,57,0.25),transparent_24%),radial-gradient(circle_at_88%_18%,rgba(109,63,34,0.12),transparent_26%),linear-gradient(180deg,#fff8e8_0%,#fff3d6_100%)]" />
        <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(#d9a545_1px,transparent_1px)] [background-size:26px_26px]" />
        <Container className="relative grid items-center gap-12 pb-20 md:grid-cols-[0.92fr_1.08fr] md:pb-28">
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
            <h1 className="mt-6 max-w-4xl text-5xl font-black leading-[1.02] text-[#332015] md:text-7xl">
              Golden Bakes, Warm Mornings, Handmade Joy
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6d3f22]">
              Step into the scent of slow-fermented bread, buttery pastries, and just-pulled morning trays.
              Golden Crust is a neighborhood bakery built for warm hellos, family treats, and handmade quality
              you can taste in every crumb.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <CTAButton
                href="#goods"
                size="lg"
                className="rounded-full bg-[#e5a939] text-[#332015] shadow-xl shadow-[#b3772e]/20 hover:-translate-y-0.5 hover:bg-[#f1bd55]"
              >
                View Today's Bakes
              </CTAButton>
              <CTAButton
                href="#visit"
                variant="outline"
                size="lg"
                className="rounded-full border-[#6d3f22] bg-[#fffaf0]/80 text-[#6d3f22] hover:-translate-y-0.5 hover:bg-[#f4dfad]"
              >
                Visit Bakery
              </CTAButton>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <StatCard value="30+" label="Daily Bakes" />
              <StatCard value="5:30 AM" label="Before Sunrise" />
              <StatCard value="Local" label="Ingredients" />
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute -left-4 top-16 h-28 w-28 rounded-[2rem] bg-[#f2c45d]/45 blur-sm" />
            <div className="absolute -right-2 bottom-12 h-36 w-36 rounded-full bg-[#6d3f22]/10" />

            <div className="relative rounded-[2rem] border border-[#e5c782] bg-[#fffaf0] p-5 shadow-2xl shadow-[#6d3f22]/15 md:p-7">
              <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#f9d77c,#fff2cf_46%,#d99a35)] p-4">
                <div className="rounded-[1.25rem] border border-white/70 bg-[#fff8e8]/85 p-4 shadow-inner">
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b3772e]">Bakery Display</p>
                      <p className="mt-1 text-2xl font-black text-[#4b2b19]">Morning case</p>
                    </div>
                    <span className="rounded-full bg-[#4b2b19] px-3 py-2 text-xs font-black uppercase tracking-[0.14em] text-[#ffe7a4]">
                      Fresh from oven
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl bg-[#f7dfad] p-4">
                      <BreadShape className="h-32 rounded-t-[4rem] rounded-b-3xl bg-gradient-to-br from-[#b87536] via-[#d99a35] to-[#fff0bf]" />
                      <div className="mt-4 h-2 rounded-full bg-[#9f661f]/25" />
                      <div className="mt-2 h-2 w-2/3 rounded-full bg-[#9f661f]/20" />
                    </div>
                    <div className="space-y-4">
                      <PastrySwirl className="h-24 bg-gradient-to-br from-[#f7c75f] via-[#d89131] to-[#7a4524]" />
                      <div className="rounded-3xl bg-[#6d3f22] p-4 text-[#fff8e8]">
                        <p className="text-xs font-black uppercase tracking-[0.18em] text-[#f7c75f]">Recipe note</p>
                        <p className="mt-2 text-sm font-bold leading-6">
                          Butter folded cold. Honey brushed warm. Shelves restocked by 9.
                        </p>
                      </div>
                    </div>
                    <div className="col-span-2 rounded-[1.25rem] bg-[#4b2b19] p-3">
                      <div className="grid grid-cols-4 gap-3 rounded-2xl bg-[#2d1b12] p-3">
                        {[1, 2, 3, 4].map((item) => (
                          <div key={item} className="aspect-square rounded-full bg-gradient-to-br from-[#ffe3a3] via-[#d99a35] to-[#8f5429]" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-8 left-6 right-6 rounded-3xl border border-[#efd9a8] bg-white p-5 shadow-xl shadow-[#6d3f22]/15 md:left-auto md:right-8 md:w-72">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#b3772e]">Today's first tray</p>
                <p className="mt-2 text-2xl font-black text-[#332015]">Honey croissants at 7:00 AM</p>
              </div>
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
