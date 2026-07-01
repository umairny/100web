import { useMemo, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { Container, CTAButton, SubWebsiteNav } from '../../components'

const navLinks = [
  { label: 'Listings', href: '#listings' },
  { label: 'Neighborhoods', href: '#neighborhoods' },
  { label: 'Sell', href: '#sellers' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

type Listing = {
  id: string
  price: number
  priceLabel: string
  title: string
  address: string
  neighborhood: string
  propertyType: string
  beds: number
  baths: number
  squareFeet: string
  image: string
  tone: string
}

type InquiryForm = {
  intent: string
  property: string
  name: string
  email: string
  phone: string
  contactMethod: string
  message: string
}

type FormErrors = Partial<Record<keyof InquiryForm, string>>

const skylineAssets = import.meta.glob('../../assets/images/realestate/skyline/*', {
  eager: true,
  import: 'default',
  query: '?url',
}) as Record<string, string>

const asset = (filename: string) =>
  skylineAssets[`../../assets/images/realestate/skyline/${filename}`] ?? ''

const listings: Listing[] = [
  {
    id: 'northline-penthouse',
    price: 1280000,
    priceLabel: '$1.28M',
    title: 'Northline Penthouse',
    address: '420 Meridian Avenue',
    neighborhood: 'River North',
    propertyType: 'Condo',
    beds: 3,
    baths: 2.5,
    squareFeet: '1,920',
    image: asset('northline-penthouse.png'),
    tone: 'from-[#dbeafe] via-[#4f75a5] to-[#f59e0b]',
  },
  {
    id: 'harbor-view-loft',
    price: 740000,
    priceLabel: '$740K',
    title: 'Harbor View Loft',
    address: '18 Pierline Street',
    neighborhood: 'West Harbor',
    propertyType: 'Loft',
    beds: 2,
    baths: 2,
    squareFeet: '1,340',
    image: asset('harbor-view-loft.png'),
    tone: 'from-[#eff6ff] via-[#6f94b8] to-[#153e75]',
  },
  {
    id: 'crescent-hill-estate',
    price: 2400000,
    priceLabel: '$2.4M',
    title: 'Crescent Hill Estate',
    address: '7 Alder Ridge',
    neighborhood: 'Crescent Hill',
    propertyType: 'Estate',
    beds: 5,
    baths: 4,
    squareFeet: '4,600',
    image: asset('crescent-hill-estate.png'),
    tone: 'from-[#f8fafc] via-[#bba56b] to-[#0f172a]',
  },
]

const neighborhoods = [
  {
    name: 'River North',
    text: 'Creative lofts, gallery streets, and destination dining in a highly walkable city district.',
    commute: 'Central and connected',
    homes: 'Lofts and penthouses',
    position: 'Premium urban',
    image: asset('river-north-neighborhood.png'),
    tone: 'from-[#b4533f] via-[#475569] to-[#0f172a]',
  },
  {
    name: 'West Harbor',
    text: 'Modern waterfront homes balanced by sunset trails, neighborhood cafés, and open-air space.',
    commute: 'Easy waterfront access',
    homes: 'Condos and lofts',
    position: 'Upper mid-market',
    image: asset('west-harbor-neighborhood.png'),
    tone: 'from-[#bfdbfe] via-[#3b82a0] to-[#153e75]',
  },
  {
    name: 'Crescent Hill',
    text: 'Quiet streets, mature landscapes, generous homes, and a calm residential pace.',
    commute: 'Residential retreat',
    homes: 'Estates and family homes',
    position: 'Luxury residential',
    image: asset('crescent-hill-neighborhood.png'),
    tone: 'from-[#d9e4d3] via-[#4f6b55] to-[#26352a]',
  },
]

const sellerSteps = [
  ['01', 'Price the market', 'Comparable sales, buyer demand, and timing are mapped before launch.'],
  ['02', 'Stage the story', 'Photography, copy, floor plan, and lifestyle positioning create stronger first impressions.'],
  ['03', 'Negotiate cleanly', 'Offer strategy, inspection terms, and closing details stay organized from start to finish.'],
]

const servicePaths = [
  ['For buyers', 'Focused searches, tour planning, offer strategy, and neighborhood context.'],
  ['For sellers', 'Pricing, preparation, launch positioning, negotiation, and closing guidance.'],
  ['For investors', 'Property comparison, rent-position thinking, risk context, and acquisition support.'],
]

const testimonials = [
  {
    quote: 'Maya turned a noisy market into three clear decisions. We never felt rushed, and every tour had a purpose.',
    name: 'Nora & Julian',
    role: 'River North buyers',
  },
  {
    quote: 'The launch plan made our home feel distinct from day one. Communication stayed direct all the way through closing.',
    name: 'Avery R.',
    role: 'Crescent Hill seller',
  },
  {
    quote: 'Skyline brought disciplined numbers and strong neighborhood judgment to an investment search that had stalled.',
    name: 'Marcus T.',
    role: 'Property investor',
  },
]

const faqs = [
  ['What does buyer representation include?', 'Search planning, property comparison, tour coordination, offer strategy, inspection guidance, and closing support are included in the demo service journey.'],
  ['How quickly can I request a tour?', 'Use any Request Tour button to prefill the consultation form. Skyline positions the demo response promise as a tour plan within 24 hours.'],
  ['When should a seller begin preparing?', 'Ideally four to eight weeks before launch so pricing, repairs, staging, photography, and timing can be considered without pressure.'],
  ['How are fees handled?', 'Fees and representation terms would be explained before an engagement begins. This portfolio concept does not quote or collect real fees.'],
  ['What happens during the first consultation?', 'The first conversation clarifies goals, timing, budget or property context, and the next useful action. No information is transmitted from this demo.'],
]

const initialForm: InquiryForm = {
  intent: 'Buy',
  property: '',
  name: '',
  email: '',
  phone: '',
  contactMethod: 'Email',
  message: '',
}

function EditorialImage({
  src,
  alt,
  tone,
  className,
  eager = false,
}: {
  src: string
  alt: string
  tone: string
  className: string
  eager?: boolean
}) {
  if (!src) {
    return (
      <div role="img" aria-label={`${alt}. Image placeholder.`} className={`relative overflow-hidden bg-gradient-to-br ${tone} ${className}`}>
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,rgba(255,255,255,.35)_1px,transparent_1px),linear-gradient(rgba(255,255,255,.35)_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute bottom-0 left-[12%] h-[42%] w-[28%] bg-white/15" />
        <div className="absolute bottom-0 left-[39%] h-[68%] w-[26%] bg-white/25" />
        <div className="absolute bottom-0 right-[9%] h-[52%] w-[27%] bg-white/10" />
      </div>
    )
  }

  return (
    <picture className="block h-full w-full">
      <img
        src={src}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
        className={className}
      />
    </picture>
  )
}

export function SkylineRealtyGroup() {
  const [neighborhoodFilter, setNeighborhoodFilter] = useState('All')
  const [typeFilter, setTypeFilter] = useState('All')
  const [maxPrice, setMaxPrice] = useState('Any')
  const [openFaq, setOpenFaq] = useState(0)
  const [form, setForm] = useState<InquiryForm>(initialForm)
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const heroImage = asset('hero.png')
  const agentImage = asset('maya-bennett-agent.png')
  const testimonialImage = asset('client-testimonial.png')
  const sellerImage = asset('seller-strategy.png')

  const filteredListings = useMemo(() => {
    const ceiling = maxPrice === 'Any' ? Number.POSITIVE_INFINITY : Number(maxPrice)

    return listings.filter(
      (listing) =>
        (neighborhoodFilter === 'All' || listing.neighborhood === neighborhoodFilter) &&
        (typeFilter === 'All' || listing.propertyType === typeFilter) &&
        listing.price <= ceiling,
    )
  }, [neighborhoodFilter, typeFilter, maxPrice])

  const updateForm = (field: keyof InquiryForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }))
    setErrors((current) => ({ ...current, [field]: undefined }))
    setSubmitted(false)
  }

  const focusInquiry = (intent: string, property = '') => {
    setForm((current) => ({
      ...current,
      intent,
      property,
      message: property ? `I would like to arrange a tour of ${property}.` : current.message,
    }))
    setSubmitted(false)
    window.setTimeout(() => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
      document.getElementById('inquiry-name')?.focus({ preventScroll: true })
    }, 0)
  }

  const validateForm = () => {
    const nextErrors: FormErrors = {}

    if (!form.name.trim() || form.name.trim().length < 2) nextErrors.name = 'Enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) nextErrors.email = 'Enter a valid email address.'
    if (form.phone && !/^[+\d\s().-]{7,}$/.test(form.phone)) nextErrors.phone = 'Enter a valid phone number.'
    if (form.message.trim().length < 10) nextErrors.message = 'Tell us a little more about your plans.'

    return nextErrors
  }

  const submitInquiry = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors = validateForm()
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      window.setTimeout(() => document.getElementById('form-errors')?.focus(), 0)
      return
    }

    setSubmitted(true)
  }

  const resetInquiry = () => {
    setForm(initialForm)
    setErrors({})
    setSubmitted(false)
  }

  const clearFilters = () => {
    setNeighborhoodFilter('All')
    setTypeFilter('All')
    setMaxPrice('Any')
  }

  return (
    <main className="bg-[#f5f8fb] text-[#0f172a]">
      <SubWebsiteNav
        brand="Skyline Realty"
        links={navLinks}
        ctaLabel="Book Consult"
        ctaHref="#contact"
        collectionPath="/real-estate"
        className="border-b border-[#dbe4ef] bg-white/92 text-[#0f172a]"
        brandClassName="text-[#153e75]"
        linkClassName="text-slate-600 hover:text-[#153e75]"
        ctaClassName="bg-[#153e75] text-white hover:bg-[#0f172a]"
        menuButtonClassName="border-[#dbe4ef] text-[#153e75] hover:bg-[#eff6ff]"
        mobilePanelClassName="border border-[#dbe4ef] bg-white"
      />

      <section className="relative min-h-[860px] overflow-hidden bg-[#0f172a] pb-20 pt-32 text-white md:pt-40">
        <div className="absolute inset-0">
          <EditorialImage src={heroImage} alt="Modern penthouse overlooking a city skyline" tone="from-[#1d4f8c] via-[#153e75] to-[#0f172a]" className="h-full w-full object-cover" eager />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,20,40,.98)_0%,rgba(15,23,42,.9)_45%,rgba(15,23,42,.38)_100%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(245,158,11,.2),transparent_22%)]" />
        </div>
        <Container>
          <div className="relative grid min-h-[680px] gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
            <div className="max-w-3xl">
              <p className="text-sm font-black uppercase tracking-[0.26em] text-[#fbbf24]">Skyline Realty Group</p>
              <h1 className="mt-5 text-5xl font-black leading-[0.9] md:text-7xl xl:text-8xl">
                City homes, curated with market intelligence.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/75">
                Premium representation for buyers, sellers, and investors who want sharp strategy, neighborhood context,
                and calm negotiation from first tour to close.
              </p>
              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <CTAButton href="#listings" size="lg" className="bg-[#fbbf24] text-[#0f172a] hover:bg-white">
                  Explore Properties
                </CTAButton>
                <CTAButton href="tel:+15550301000" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white/10">
                  Call (555) 030-1000
                </CTAButton>
              </div>
            </div>
            <div className="self-end lg:justify-self-end">
              <div className="w-full max-w-xl border border-white/15 bg-white/10 p-5 shadow-2xl backdrop-blur-md">
                <p className="text-xs font-black uppercase tracking-[0.2em] text-[#fbbf24]">Market desk</p>
                <h2 className="mt-3 text-3xl font-black">A focused tour plan within 24 hours.</h2>
                <div className="mt-6 grid grid-cols-3 divide-x divide-white/15 border-y border-white/15">
                  {[['126', 'Closed'], ['4.9', 'Rating'], ['28', 'Avg. days']].map(([value, label]) => (
                    <div key={label} className="px-3 py-5 text-center">
                      <p className="text-3xl font-black text-[#fbbf24]">{value}</p>
                      <p className="mt-1 text-[0.65rem] font-black uppercase tracking-[0.13em] text-white/55">{label}</p>
                    </div>
                  ))}
                </div>
                <button type="button" onClick={() => focusInquiry('Buy')} className="mt-6 w-full bg-white px-5 py-4 text-sm font-black text-[#153e75] transition hover:bg-[#fbbf24] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">
                  Build My Search Plan
                </button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="listings" className="scroll-mt-32 py-20 md:py-28">
        <Container>
          <div className="mb-10 grid gap-6 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#153e75]">Featured listings</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Homes with a clear buyer story.</h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Compare location, property type, price, and space without losing the details that make a home distinctive.
            </p>
          </div>

          <div aria-label="Filter featured listings" className="mb-8 grid gap-4 border border-[#dbe4ef] bg-white p-5 shadow-sm sm:grid-cols-3">
            <label className="text-sm font-black text-slate-700">
              Neighborhood
              <select value={neighborhoodFilter} onChange={(event) => setNeighborhoodFilter(event.target.value)} className="mt-2 min-h-12 w-full border border-slate-300 bg-white px-3 font-medium">
                <option>All</option>
                {neighborhoods.map((item) => <option key={item.name}>{item.name}</option>)}
              </select>
            </label>
            <label className="text-sm font-black text-slate-700">
              Property type
              <select value={typeFilter} onChange={(event) => setTypeFilter(event.target.value)} className="mt-2 min-h-12 w-full border border-slate-300 bg-white px-3 font-medium">
                <option>All</option><option>Condo</option><option>Loft</option><option>Estate</option>
              </select>
            </label>
            <label className="text-sm font-black text-slate-700">
              Maximum price
              <select value={maxPrice} onChange={(event) => setMaxPrice(event.target.value)} className="mt-2 min-h-12 w-full border border-slate-300 bg-white px-3 font-medium">
                <option value="Any">Any price</option>
                <option value="800000">Up to $800K</option>
                <option value="1500000">Up to $1.5M</option>
                <option value="2500000">Up to $2.5M</option>
              </select>
            </label>
          </div>

          <p className="mb-5 text-sm font-bold text-slate-500" aria-live="polite">
            Showing {filteredListings.length} of {listings.length} properties
          </p>

          {filteredListings.length > 0 ? (
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {filteredListings.map((listing) => (
                <article key={listing.id} className="group flex flex-col overflow-hidden border border-[#dbe4ef] bg-white shadow-sm transition motion-reduce:transition-none motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-xl">
                  <EditorialImage src={listing.image} alt={`${listing.title} at ${listing.address}`} tone={listing.tone} className="aspect-[16/10] w-full object-cover transition duration-500 motion-reduce:transition-none motion-safe:group-hover:scale-105" />
                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-3xl font-black text-[#153e75]">{listing.priceLabel}</p>
                        <h3 className="mt-2 text-2xl font-black">{listing.title}</h3>
                      </div>
                      <span className="rounded-full bg-[#eff6ff] px-3 py-1 text-xs font-black uppercase tracking-wide text-[#153e75]">{listing.propertyType}</span>
                    </div>
                    <p className="mt-3 text-sm font-bold text-slate-500">{listing.address} · {listing.neighborhood}</p>
                    <dl className="mt-6 grid grid-cols-3 border-y border-slate-200 py-4 text-center">
                      <div><dt className="text-xs text-slate-500">Beds</dt><dd className="mt-1 font-black">{listing.beds}</dd></div>
                      <div><dt className="text-xs text-slate-500">Baths</dt><dd className="mt-1 font-black">{listing.baths}</dd></div>
                      <div><dt className="text-xs text-slate-500">Sq ft</dt><dd className="mt-1 font-black">{listing.squareFeet}</dd></div>
                    </dl>
                    <button type="button" onClick={() => focusInquiry('Buy', listing.title)} className="mt-6 min-h-12 w-full rounded-lg bg-[#0f172a] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#153e75] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#153e75]">
                      Request Tour
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="border border-dashed border-[#9aadc4] bg-white px-6 py-14 text-center">
              <h3 className="text-2xl font-black">No featured homes match those filters.</h3>
              <p className="mt-3 text-slate-600">Reset the search to see all three Skyline properties.</p>
              <button type="button" onClick={clearFilters} className="mt-6 rounded-lg bg-[#153e75] px-5 py-3 text-sm font-black text-white hover:bg-[#0f172a]">Clear Filters</button>
            </div>
          )}
        </Container>
      </section>

      <section id="neighborhoods" className="scroll-mt-32 border-y border-[#dbe4ef] bg-white py-20 md:py-28">
        <Container>
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#153e75]">Neighborhood intelligence</p>
            <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">The right home starts with the right block.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              Skyline compares daily rhythm, housing character, and market position before a buyer falls in love with the wrong fit.
            </p>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {neighborhoods.map((item) => (
              <article key={item.name} className="overflow-hidden border border-[#dbe4ef] bg-[#f5f8fb]">
                <EditorialImage src={item.image} alt={`${item.name} neighborhood`} tone={item.tone} className="aspect-[3/2] w-full object-cover" />
                <div className="p-6">
                  <h3 className="text-3xl font-black">{item.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  <dl className="mt-6 space-y-3 border-t border-slate-200 pt-5 text-sm">
                    <div className="flex justify-between gap-4"><dt className="text-slate-500">Connection</dt><dd className="text-right font-bold">{item.commute}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-slate-500">Home types</dt><dd className="text-right font-bold">{item.homes}</dd></div>
                    <div className="flex justify-between gap-4"><dt className="text-slate-500">Position</dt><dd className="text-right font-bold">{item.position}</dd></div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs leading-5 text-slate-500">Neighborhood descriptions are fictional portfolio content and are not current market guidance.</p>
        </Container>
      </section>

      <section id="about" className="scroll-mt-32 bg-[#0f172a] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[.78fr_1.22fr] lg:items-center">
            <EditorialImage src={agentImage} alt="Maya Bennett, fictional principal broker at Skyline Realty" tone="from-[#dbeafe] via-[#365f8b] to-[#0f172a]" className="aspect-[4/5] w-full object-cover" />
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#fbbf24]">Meet your market strategist</p>
              <h2 className="mt-4 text-4xl font-black leading-tight md:text-6xl">Maya Bennett, Principal Broker</h2>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Maya pairs disciplined market preparation with calm, direct advice. Her role is to make every tradeoff visible
                before it becomes expensive—and to keep the human decision at the center of the numbers.
              </p>
              <div className="mt-10 grid gap-4 md:grid-cols-3">
                {servicePaths.map(([title, text]) => (
                  <article key={title} className="border border-white/15 bg-white/5 p-5">
                    <h3 className="text-xl font-black text-[#fbbf24]">{title}</h3>
                    <p className="mt-3 text-sm leading-6 text-white/60">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="sellers" className="scroll-mt-32 py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#153e75]">Seller strategy</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">A calmer launch with fewer surprises.</h2>
              <div className="mt-9 space-y-4">
                {sellerSteps.map(([number, title, text]) => (
                  <article key={title} className="grid grid-cols-[auto_1fr] gap-5 border border-[#dbe4ef] bg-white p-6 shadow-sm">
                    <p className="text-4xl font-black text-[#f59e0b]">{number}</p>
                    <div><h3 className="text-xl font-black">{title}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{text}</p></div>
                  </article>
                ))}
              </div>
              <button type="button" onClick={() => focusInquiry('Sell')} className="mt-7 rounded-lg bg-[#153e75] px-6 py-4 text-sm font-black text-white transition hover:bg-[#0f172a]">
                Plan My Sale
              </button>
            </div>
            <EditorialImage src={sellerImage} alt="Seller and agent reviewing a property presentation" tone="from-[#f8fafc] via-[#c9a96d] to-[#153e75]" className="aspect-[4/3] w-full object-cover" />
          </div>
        </Container>
      </section>

      <section className="border-y border-[#dbe4ef] bg-white py-20 md:py-28">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-stretch">
            <div className="relative overflow-hidden">
              <EditorialImage src={testimonialImage} alt="Fictional Skyline clients reviewing property information" tone="from-[#f8fafc] via-[#7e9bb8] to-[#153e75]" className="h-full min-h-[440px] w-full object-cover" />
              <div className="absolute inset-x-5 bottom-5 bg-[#0f172a]/92 p-6 text-white backdrop-blur">
                <p className="text-2xl font-black leading-tight">“{testimonials[0].quote}”</p>
                <p className="mt-4 text-sm font-black text-[#fbbf24]">{testimonials[0].name} · {testimonials[0].role}</p>
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#153e75]">Client perspective</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Clear advice travels well.</h2>
              <div className="mt-8 grid gap-5">
                {testimonials.slice(1).map((item) => (
                  <blockquote key={item.name} className="border-l-4 border-[#f59e0b] bg-[#f5f8fb] p-6">
                    <p className="text-lg font-bold leading-8">“{item.quote}”</p>
                    <footer className="mt-4 text-sm font-black text-[#153e75]">{item.name} · {item.role}</footer>
                  </blockquote>
                ))}
              </div>
              <p className="mt-5 text-xs text-slate-500">Testimonials are fictional and shown for portfolio demonstration.</p>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#153e75]">Common questions</p>
              <h2 className="mt-3 text-4xl font-black leading-tight md:text-5xl">Know what comes next.</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">Straight answers before any commitment.</p>
            </div>
            <div className="divide-y divide-[#dbe4ef] border-y border-[#dbe4ef]">
              {faqs.map(([question, answer], index) => {
                const isOpen = openFaq === index
                return (
                  <article key={question}>
                    <h3>
                      <button type="button" aria-expanded={isOpen} aria-controls={`faq-panel-${index}`} onClick={() => setOpenFaq(isOpen ? -1 : index)} className="flex w-full items-center justify-between gap-5 py-6 text-left text-lg font-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#153e75]">
                        {question}<span aria-hidden="true" className="text-2xl text-[#153e75]">{isOpen ? '−' : '+'}</span>
                      </button>
                    </h3>
                    {isOpen && <div id={`faq-panel-${index}`} className="pb-6 pr-10 text-sm leading-7 text-slate-600">{answer}</div>}
                  </article>
                )
              })}
            </div>
          </div>
        </Container>
      </section>

      <section id="contact" className="scroll-mt-32 bg-[#0f172a] py-20 text-white md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#fbbf24]">Start the conversation</p>
              <h2 className="mt-4 text-4xl font-black leading-tight md:text-5xl">Build a focused plan for your next move.</h2>
              <p className="mt-5 text-lg leading-8 text-white/70">
                Share what you are trying to buy, sell, or evaluate. This interactive portfolio form demonstrates the
                experience without transmitting or storing your information.
              </p>
              <div className="mt-8 space-y-3 text-sm font-bold text-white/70">
                <a href="tel:+15550301000" className="block hover:text-[#fbbf24]">(555) 030-1000</a>
                <a href="mailto:hello@skylinerealty.example" className="block hover:text-[#fbbf24]">hello@skylinerealty.example</a>
              </div>
            </div>

            <div className="bg-white p-6 text-[#0f172a] shadow-2xl md:p-8">
              {submitted ? (
                <div role="status" aria-live="polite" className="flex min-h-[500px] flex-col items-center justify-center text-center">
                  <span className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-3xl text-emerald-700" aria-hidden="true">✓</span>
                  <h3 className="mt-6 text-3xl font-black">Your demo inquiry is ready.</h3>
                  <p className="mt-4 max-w-lg leading-7 text-slate-600">
                    Nothing was sent or stored. In a production site, Skyline would now receive your consultation request.
                  </p>
                  <button type="button" onClick={resetInquiry} className="mt-7 rounded-lg bg-[#153e75] px-6 py-3 text-sm font-black text-white hover:bg-[#0f172a]">Start Another Inquiry</button>
                </div>
              ) : (
                <form noValidate onSubmit={submitInquiry}>
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-[#153e75]">Consultation request</p>
                  {Object.keys(errors).length > 0 && (
                    <div id="form-errors" tabIndex={-1} role="alert" className="mt-5 border border-red-300 bg-red-50 p-4 text-sm font-bold text-red-800">
                      Please correct the highlighted fields before continuing.
                    </div>
                  )}
                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <label className="text-sm font-bold">I want to
                      <select value={form.intent} onChange={(event) => updateForm('intent', event.target.value)} className="mt-2 min-h-12 w-full border border-slate-300 bg-white px-3">
                        <option>Buy</option><option>Sell</option><option>Invest</option><option>Ask a question</option>
                      </select>
                    </label>
                    <label className="text-sm font-bold">Property
                      <select value={form.property} onChange={(event) => updateForm('property', event.target.value)} className="mt-2 min-h-12 w-full border border-slate-300 bg-white px-3">
                        <option value="">No property selected</option>
                        {listings.map((listing) => <option key={listing.id}>{listing.title}</option>)}
                      </select>
                    </label>
                    <label className="text-sm font-bold">Name
                      <input id="inquiry-name" value={form.name} onChange={(event) => updateForm('name', event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined} className="mt-2 min-h-12 w-full border border-slate-300 px-3" />
                      {errors.name && <span id="name-error" className="mt-1 block text-xs font-bold text-red-700">{errors.name}</span>}
                    </label>
                    <label className="text-sm font-bold">Email
                      <input type="email" value={form.email} onChange={(event) => updateForm('email', event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} className="mt-2 min-h-12 w-full border border-slate-300 px-3" />
                      {errors.email && <span id="email-error" className="mt-1 block text-xs font-bold text-red-700">{errors.email}</span>}
                    </label>
                    <label className="text-sm font-bold">Phone <span className="font-normal text-slate-500">(optional)</span>
                      <input type="tel" value={form.phone} onChange={(event) => updateForm('phone', event.target.value)} aria-invalid={Boolean(errors.phone)} aria-describedby={errors.phone ? 'phone-error' : undefined} className="mt-2 min-h-12 w-full border border-slate-300 px-3" />
                      {errors.phone && <span id="phone-error" className="mt-1 block text-xs font-bold text-red-700">{errors.phone}</span>}
                    </label>
                    <label className="text-sm font-bold">Preferred contact
                      <select value={form.contactMethod} onChange={(event) => updateForm('contactMethod', event.target.value)} className="mt-2 min-h-12 w-full border border-slate-300 bg-white px-3">
                        <option>Email</option><option>Phone</option><option>Text message</option>
                      </select>
                    </label>
                  </div>
                  <label className="mt-5 block text-sm font-bold">How can Skyline help?
                    <textarea rows={5} value={form.message} onChange={(event) => updateForm('message', event.target.value)} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? 'message-error' : 'privacy-note'} className="mt-2 w-full border border-slate-300 p-3" />
                    {errors.message && <span id="message-error" className="mt-1 block text-xs font-bold text-red-700">{errors.message}</span>}
                  </label>
                  <p id="privacy-note" className="mt-3 text-xs leading-5 text-slate-500">Demo only: submitting does not send, save, or persist personal information.</p>
                  <button type="submit" className="mt-6 min-h-12 w-full bg-[#153e75] px-5 py-4 text-sm font-black text-white transition hover:bg-[#0f172a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#153e75]">
                    Prepare My Consultation
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>

      <footer className="border-t border-slate-800 bg-[#09111f] py-10 text-white">
        <Container>
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <p className="text-xl font-black text-[#fbbf24]">Skyline Realty Group</p>
              <p className="mt-3 max-w-xl text-sm leading-6 text-white/55">
                Fictional real-estate brand and market content created for a portfolio demonstration. Not an operating brokerage.
              </p>
            </div>
            <div className="flex flex-wrap gap-5 text-sm font-bold text-white/65">
              <a href="#listings" className="hover:text-white">Listings</a>
              <a href="#neighborhoods" className="hover:text-white">Neighborhoods</a>
              <a href="#contact" className="hover:text-white">Contact</a>
              <Link to="/real-estate" className="text-[#fbbf24] hover:text-white">Real Estate Collection</Link>
            </div>
          </div>
        </Container>
      </footer>
    </main>
  )
}
