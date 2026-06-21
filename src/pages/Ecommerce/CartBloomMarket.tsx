import { Container, CTAButton, SubWebsiteNav } from '../../components'

const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'Bundles', href: '#bundles' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Checkout', href: '#checkout' },
]

const products = [
  ['Daily Desk Kit', '$68', 'Notebook, pen tray, cable clips, and focus timer for cleaner workdays.'],
  ['Weekend Reset Box', '$84', 'Tea, candle, soft planner, and small home rituals in one gift-ready bundle.'],
  ['Travel Pouch Set', '$42', 'Three color-coded pouches for tech, toiletries, and everyday carry.'],
]

const bundles = [
  ['Starter Bundle', 'Save 12%', 'Three best sellers for first-time shoppers.'],
  ['Gift Box', 'Ships wrapped', 'Curated picks with a handwritten note option.'],
  ['Subscribe and Save', 'Save 18%', 'Seasonal boxes delivered every two months.'],
]

const reviews = [
  ['Avery Stone', 'Everything felt thoughtfully selected, not random. Checkout was fast and the gift note was perfect.'],
  ['Mina Patel', 'The product cards made it easy to compare bundles. I found what I needed in two minutes.'],
  ['Jordan Lee', 'Beautiful packaging, clear shipping, and the subscription option was impossible to miss.'],
]

export function CartBloomMarket() {
  return (
    <main className="bg-[#fbf7ff] text-[#17111f]">
      <SubWebsiteNav
        brand="CartBloom Market"
        links={navLinks}
        ctaLabel="Shop Now"
        ctaHref="#shop"
        collectionPath="/e-commerce"
        className="border-b border-[#eadcff] bg-white/94 text-[#17111f]"
        brandClassName="text-[#7c3aed]"
        linkClassName="text-slate-600 hover:text-[#7c3aed]"
        ctaClassName="bg-[#7c3aed] text-white hover:bg-[#5b21b6]"
        menuButtonClassName="border-[#eadcff] text-[#7c3aed] hover:bg-[#f3e8ff]"
        mobilePanelClassName="border border-[#eadcff] bg-white"
      />

      <section className="relative overflow-hidden bg-[#2e1065] pb-20 pt-32 text-white md:pb-28 md:pt-40">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(124,58,237,0.55),transparent_26%),radial-gradient(circle_at_78%_18%,rgba(236,72,153,0.3),transparent_22%),linear-gradient(135deg,#2e1065,#7c3aed_54%,#4c1d95)]" />
        <Container>
          <div className="relative grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#fbcfe8]">CartBloom Market</p>
              <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.92] md:text-7xl">
                Curated essentials that make gifting and everyday shopping easier.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/74">
                A polished online store concept with fast product discovery, bundle offers, shipping confidence,
                review proof, and checkout CTAs that stay close to the shopping flow.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#shop" size="lg" className="bg-[#fbcfe8] text-[#2e1065] hover:bg-white">
                  Shop Best Sellers
                </CTAButton>
                <CTAButton href="#bundles" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  Build a Bundle
                </CTAButton>
              </div>
            </div>

            <div className="relative min-h-[560px]">
              <div className="absolute right-0 top-0 h-[32rem] w-full max-w-[38rem] border border-white/15 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur">
                <div className="grid h-full grid-rows-[1fr_auto] overflow-hidden bg-[#f3e8ff] text-[#17111f]">
                  <div className="relative bg-[linear-gradient(135deg,#f3e8ff,#7c3aed_52%,#ec4899)]">
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.22)_1px,transparent_1px),linear-gradient(180deg,rgba(255,255,255,0.22)_1px,transparent_1px)] [background-size:48px_48px]" />
                    <div className="absolute left-6 top-6 rounded-full bg-white/92 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-[#7c3aed] shadow-sm">
                      18% off bundles
                    </div>
                    <div className="absolute bottom-6 left-6 right-6 bg-white/94 p-5 shadow-xl">
                      <p className="text-sm font-black uppercase tracking-[0.18em] text-[#7c3aed]">Featured collection</p>
                      <h2 className="mt-2 text-3xl font-black">The Weekend Reset Box</h2>
                      <p className="mt-2 text-sm font-bold text-slate-500">Ships wrapped / 4.8 rating / gift note included</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 border-t border-slate-200 bg-white text-center">
                    {[
                      ['Free', 'over $75'],
                      ['30d', 'returns'],
                      ['4.8', 'reviews'],
                    ].map(([value, label]) => (
                      <div key={label} className="border-r border-slate-200 p-4 last:border-r-0">
                        <p className="text-2xl font-black text-[#7c3aed]">{value}</p>
                        <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">{label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-64 bg-white p-5 text-[#17111f] shadow-2xl">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#7c3aed]">Cart drawer</p>
                <p className="mt-3 text-3xl font-black">Bundle savings applied automatically.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="shop" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#7c3aed]">Best sellers</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Product cards made for fast comparison.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              E-commerce homepages need shoppers to understand product type, price, value, and next action without opening every detail page.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {products.map(([name, price, detail]) => (
              <article key={name} className="overflow-hidden bg-white shadow-xl shadow-slate-950/8">
                <div className="h-56 bg-[linear-gradient(135deg,#f3e8ff,#7c3aed_52%,#ec4899)]" />
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-black">{name}</h3>
                    <span className="rounded-full bg-[#f3e8ff] px-3 py-1 text-sm font-black text-[#7c3aed]">{price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{detail}</p>
                  <a href="#checkout" className="mt-6 inline-flex w-full justify-center rounded-lg bg-[#17111f] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#7c3aed]">
                    Add to Cart
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section id="bundles" className="border-y border-[#eadcff] bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#7c3aed]">Bundles and offers</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Clear offer framing keeps shoppers from drifting away.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                Bundle cards make savings, gifting, and subscription value visible without crowding the product grid.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {bundles.map(([title, badge, text]) => (
                <article key={title} className="bg-[#fbf7ff] p-6 shadow-sm">
                  <p className="text-sm font-black uppercase tracking-[0.16em] text-[#ec4899]">{badge}</p>
                  <h3 className="mt-5 text-2xl font-black">{title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section id="reviews" className="py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#7c3aed]">Customer proof</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Reviews that answer buying hesitation.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map(([name, quote]) => (
              <blockquote key={name} className="bg-white p-7 shadow-sm">
                <p className="text-xl font-bold leading-8">"{quote}"</p>
                <footer className="mt-6 text-sm font-black uppercase tracking-[0.18em] text-[#7c3aed]">{name}</footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>

      <section id="checkout" className="bg-[#2e1065] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_0.76fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#fbcfe8]">Checkout flow</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
                Keep the offer, cart, shipping, and support promises close together.
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">
                A store homepage should remove doubt before checkout: shipping thresholds, returns, reviews, and bundle savings all stay visible.
              </p>
            </div>
            <div className="bg-white p-6 text-[#17111f]">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">Cart summary</p>
              <div className="mt-5 space-y-3 text-sm font-bold text-slate-600">
                <div className="flex justify-between"><span>Subtotal</span><span>$126</span></div>
                <div className="flex justify-between text-[#7c3aed]"><span>Bundle savings</span><span>-$22</span></div>
                <div className="flex justify-between"><span>Shipping</span><span>Free</span></div>
              </div>
              <a href="mailto:orders@cartbloom.example" className="mt-6 block bg-[#7c3aed] px-5 py-4 text-center text-sm font-black text-white transition hover:bg-[#5b21b6]">
                Continue Checkout
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}
