import { useEffect, useState, type ReactNode } from 'react'
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Building2,
  Check,
  KeyRound,
  Landmark,
  MapPin,
  Menu,
  Scale,
  Users,
  X,
} from 'lucide-react'
import heroImage from '../../assets/images/realestate/apex/hero.png'
import officeImage from '../../assets/images/realestate/apex/office-brokerage.png'
import retailImage from '../../assets/images/realestate/apex/retail-leasing.png'
import investmentImage from '../../assets/images/realestate/apex/investment-sales.png'
import bayfrontImage from '../../assets/images/realestate/apex/bayfront-office-tower.png'
import harborRetailImage from '../../assets/images/realestate/apex/harbor-retail-plaza.png'
import meridianImage from '../../assets/images/realestate/apex/meridian-mixed-use.png'
import intelligenceImage from '../../assets/images/realestate/apex/market-intelligence.png'
import waterfrontImage from '../../assets/images/realestate/apex/waterfront-mixed-use.png'
import hospitalityImage from '../../assets/images/realestate/apex/boutique-hospitality.png'
import coastalRetailImage from '../../assets/images/realestate/apex/coastal-retail.png'
import ctaImage from '../../assets/images/realestate/apex/cta-commercial-building.png'

const navLinks = [
  { label: 'Properties', href: '#properties' },
  { label: 'Services', href: '#services' },
  { label: 'Markets', href: '#markets' },
  { label: 'Insights', href: '#insights' },
  { label: 'Contact', href: '#contact' },
]

const categories = [
  { image: officeImage, label: '01 / Office', title: 'Office Brokerage', text: 'Modern workspace acquisition, leasing, and tenant strategy for growing companies.' },
  { image: retailImage, label: '02 / Retail', title: 'Retail Leasing', text: 'High-visibility retail locations matched with market demand and long-term value.' },
  { image: investmentImage, label: '03 / Investment', title: 'Investment Sales', text: 'Data-led commercial opportunities designed for stable returns and portfolio growth.' },
]

const opportunities = [
  { image: bayfrontImage, tag: 'Office', title: 'Bayfront Office Tower', location: 'Coastal Business District', type: 'Office / Leasing', size: '86,000 sq ft' },
  { image: harborRetailImage, tag: 'Retail', title: 'Harbor Retail Plaza', location: 'Waterfront Retail Corridor', type: 'Retail / Investment', size: '42,500 sq ft' },
  { image: meridianImage, tag: 'Mixed-Use', title: 'Meridian Mixed-Use Asset', location: 'Urban Coastal Core', type: 'Mixed-Use / Sale', size: '118,000 sq ft' },
]

const services = [
  { icon: Users, title: 'Tenant Representation', text: 'Site strategy, market comparisons, and lease terms aligned with operating goals.' },
  { icon: Building2, title: 'Landlord Representation', text: 'Positioning and leasing programs designed to strengthen occupancy and asset value.' },
  { icon: KeyRound, title: 'Commercial Leasing', text: 'Disciplined advisory across office, retail, and mixed-use lease transactions.' },
  { icon: Landmark, title: 'Investment Sales', text: 'Acquisition and disposition strategy grounded in asset performance and demand.' },
  { icon: Scale, title: 'Property Valuation', text: 'Clear, defensible opinions of value informed by current market evidence.' },
  { icon: BarChart3, title: 'Market Research', text: 'Actionable intelligence on rents, absorption, comparables, and capital trends.' },
]

const values = [
  { number: '01', title: 'Market Clarity', text: 'The information you need to compare risk, timing, and opportunity.' },
  { number: '02', title: 'Negotiation Strength', text: 'Experienced representation at every material point in the transaction.' },
  { number: '03', title: 'Asset Strategy', text: 'Advice shaped around performance, positioning, and long-term business goals.' },
  { number: '04', title: 'Investor Confidence', text: 'A deliberate process that turns complex information into decisive action.' },
]

const coastalAssets = [
  { image: waterfrontImage, label: 'Mixed-Use', title: 'Waterfront Mixed-Use' },
  { image: hospitalityImage, label: 'Hospitality', title: 'Boutique Hospitality' },
  { image: coastalRetailImage, label: 'Retail', title: 'Coastal Retail' },
]

function ApexMark({ light = false }: { light?: boolean }) {
  return (
    <a href="#home" className={`flex items-center gap-3 ${light ? 'text-[#F4F6F8]' : 'text-[#101722]'}`}>
      <span className={`grid h-10 w-10 place-items-center border ${light ? 'border-[#7A2948]' : 'border-[#7A2948]/60'}`}>
        <span className="apex-serif text-xl leading-none text-[#7A2948]">A</span>
      </span>
      <span>
        <span className="block text-sm font-black uppercase leading-none tracking-[0.14em]">Apex Commercial</span>
        <span className={`mt-1.5 block text-[0.58rem] font-semibold uppercase tracking-[0.36em] ${light ? 'text-[#94A3B8]' : 'text-[#68768A]'}`}>Realty</span>
      </span>
    </a>
  )
}

function SectionTitle({ label, title, body, light = false, centered = false }: { label: string; title: string; body?: string; light?: boolean; centered?: boolean }) {
  return (
    <div className={centered ? 'mx-auto max-w-4xl text-center' : 'max-w-3xl'} data-apex-reveal>
      <div className={`mb-5 flex items-center gap-3 text-[0.68rem] font-bold uppercase tracking-[0.28em] ${centered ? 'justify-center' : ''} ${light ? 'text-[#9B536E]' : 'text-[#365D91]'}`}>
        <span className="h-px w-9 bg-[#7A2948]" />{label}
      </div>
      <h2 className={`apex-serif text-[clamp(2.6rem,5vw,4.9rem)] leading-[0.98] tracking-[-0.035em] ${light ? 'text-[#F4F6F8]' : 'text-[#151E2B]'}`}>{title}</h2>
      {body && <p className={`mt-6 max-w-2xl text-base leading-8 md:text-lg ${centered ? 'mx-auto' : ''} ${light ? 'text-[#94A3B8]' : 'text-[#667386]'}`}>{body}</p>}
    </div>
  )
}

function ApexButton({ href, children, variant = 'copper' }: { href: string; children: ReactNode; variant?: 'copper' | 'dark' | 'outline' }) {
  const styles = {
    copper: 'bg-[#7A2948] text-white hover:bg-[#365D91]',
    dark: 'bg-[#101722] text-white hover:bg-[#365D91]',
    outline: 'border border-[#F4F6F8]/35 text-[#F4F6F8] hover:border-[#7A2948] hover:bg-[#7A2948]',
  }
  return <a href={href} className={`group inline-flex min-h-12 items-center justify-center gap-3 px-6 text-xs font-bold uppercase tracking-[0.13em] transition-all duration-300 hover:-translate-y-0.5 ${styles[variant]}`}>{children}<ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></a>
}

export function ApexCommercialRealty() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const nodes = document.querySelectorAll('[data-apex-reveal]')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('is-visible')),
      { threshold: 0.1 },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  return (
    <main className="apex-site overflow-hidden bg-[#F4F6F8] text-[#394657]">
      <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled || menuOpen ? 'border-b border-black/10 bg-[#F4F6F8]/95 shadow-[0_10px_30px_rgba(20,22,25,0.08)] backdrop-blur-xl' : 'bg-[#F4F6F8]/90 backdrop-blur-md'}`}>
        <div className="mx-auto flex h-20 max-w-[92rem] items-center justify-between px-5 sm:px-8 lg:px-12">
          <ApexMark />
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Apex navigation">
            {navLinks.map((link) => <a key={link.label} href={link.href} className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-[#445165] transition hover:text-[#7A2948]">{link.label}</a>)}
          </nav>
          <a href="#properties" className="hidden bg-[#101722] px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#7A2948] sm:inline-flex">View Opportunities</a>
          <button type="button" onClick={() => setMenuOpen((open) => !open)} aria-label="Toggle navigation" aria-expanded={menuOpen} className="grid h-11 w-11 place-items-center border border-[#101722]/20 lg:hidden">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
        {menuOpen && (
          <nav className="border-t border-black/10 bg-[#F4F6F8] px-5 py-5 lg:hidden" aria-label="Mobile navigation">
            <div className="mx-auto grid max-w-[92rem]">
              {navLinks.map((link) => <a key={link.label} href={link.href} onClick={() => setMenuOpen(false)} className="border-b border-black/8 px-3 py-4 text-sm font-bold uppercase tracking-[0.1em]">{link.label}</a>)}
              <a href="#properties" onClick={() => setMenuOpen(false)} className="mt-4 bg-[#101722] px-5 py-4 text-center text-xs font-bold uppercase tracking-[0.12em] text-white sm:hidden">View Opportunities</a>
            </div>
          </nav>
        )}
      </header>

      <section id="home" className="relative min-h-[850px] pt-20 lg:min-h-[930px]">
        <div className="absolute inset-0 top-20">
          <img src={heroImage} alt="Premium coastal commercial property" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,22,25,0.95)_0%,rgba(20,22,25,0.78)_44%,rgba(20,22,25,0.18)_80%)]" />
        </div>
        <div className="relative mx-auto flex min-h-[770px] max-w-[92rem] items-center px-5 py-20 sm:px-8 lg:min-h-[850px] lg:px-12">
          <div className="max-w-4xl text-[#F4F6F8]">
            <p className="mb-7 flex items-center gap-4 text-[0.68rem] font-bold uppercase tracking-[0.3em] text-[#AA607C]"><span className="h-px w-12 bg-[#7A2948]" />Commercial advisory</p>
            <h1 className="apex-serif max-w-4xl text-[clamp(3.7rem,7.2vw,7.3rem)] leading-[0.9] tracking-[-0.045em]">Commercial Real Estate Built Around <em className="font-normal text-[#B7C7DC]">Market Intelligence</em></h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/70 md:text-lg">Apex Commercial Realty connects investors, tenants, landlords, and developers with strategic office, retail, leasing, and coastal commercial property opportunities.</p>
            <div className="mt-10 flex flex-wrap gap-3"><ApexButton href="#properties">Explore Properties</ApexButton><ApexButton href="#contact" variant="outline">Speak With an Advisor</ApexButton></div>
          </div>
          <div className="absolute bottom-0 right-0 hidden bg-[#1C2736]/95 lg:grid lg:grid-cols-3">
            {[['$1.2B+', 'Transaction Volume'], ['340+', 'Properties Advised'], ['28', 'Active Markets']].map(([value, label]) => (
              <div key={label} className="min-w-[180px] border-l border-white/10 px-7 py-6"><p className="apex-serif text-3xl text-[#F4F6F8]">{value}</p><p className="mt-2 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[#94A3B8]">{label}</p></div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[88rem]">
          <SectionTitle label="Specialized expertise" title="Commercial Strategy Across Every Asset Class" body="Focused advisory for businesses, owners, and capital partners navigating complex commercial decisions." />
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {categories.map((category, index) => (
              <article key={category.title} className="group border border-[#CBD5E1] bg-[#FAFBFC] p-3 transition duration-300 hover:-translate-y-1 hover:border-[#7A2948]" data-apex-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="aspect-[1.32] overflow-hidden"><img src={category.image} alt={category.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div>
                <div className="p-5 pb-7">
                  <p className="text-[0.62rem] font-bold uppercase tracking-[0.23em] text-[#7A2948]">{category.label}</p>
                  <h3 className="apex-serif mt-5 text-3xl text-[#151E2B]">{category.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-[#6B7789]">{category.text}</p>
                  <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#365D91]">Discuss requirements <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="properties" className="bg-[#E7ECF2] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[92rem]">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionTitle label="Investment opportunities" title="Featured Commercial Assets" body="Select opportunities positioned for occupancy, income performance, and long-term value." />
            <a href="#contact" className="inline-flex w-fit items-center gap-2 border-b border-[#101722]/30 pb-2 text-xs font-bold uppercase tracking-[0.14em]">View all opportunities <ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {opportunities.map((property, index) => (
              <article key={property.title} className="group bg-[#F4F6F8] shadow-[0_18px_50px_rgba(32,38,45,0.08)] transition duration-300 hover:-translate-y-1" data-apex-reveal style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="relative aspect-[1.38] overflow-hidden">
                  <img src={property.image} alt={property.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-5 top-5 bg-[#1C2736] px-3 py-2 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-white">{property.tag}</span>
                </div>
                <div className="p-7">
                  <p className="flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-[#365D91]"><MapPin className="h-3.5 w-3.5" />{property.location}</p>
                  <h3 className="apex-serif mt-4 text-[1.9rem] leading-tight text-[#151E2B]">{property.title}</h3>
                  <div className="mt-6 grid grid-cols-2 border-y border-[#CBD5E1] py-4 text-xs">
                    <div><span className="block text-[0.55rem] font-bold uppercase tracking-[0.16em] text-[#8491A3]">Type</span><span className="mt-2 block font-semibold">{property.type}</span></div>
                    <div className="border-l border-[#CBD5E1] pl-5"><span className="block text-[0.55rem] font-bold uppercase tracking-[0.16em] text-[#8491A3]">Size</span><span className="mt-2 block font-semibold">{property.size}</span></div>
                  </div>
                  <a href="#contact" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[#151E2B]">View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="insights" className="bg-[#1C2736] text-[#F4F6F8]">
        <div className="grid lg:grid-cols-2">
          <div className="min-h-[520px] lg:min-h-[720px]" data-apex-reveal><img src={intelligenceImage} alt="Commercial market intelligence and analysis" className="h-full w-full object-cover" /></div>
          <div className="flex items-center px-6 py-20 sm:px-12 lg:px-[clamp(3rem,7vw,8rem)]" data-apex-reveal>
            <div className="max-w-xl">
              <SectionTitle label="Market intelligence" title="Insight-Driven Commercial Decisions" body="From leasing trends to investment performance, our advisory process is built around clear market intelligence, asset positioning, and long-term value creation." light />
              <div className="mt-10 grid gap-1">
                {['Local market demand analysis', 'Comparable property performance', 'Leasing and investment strategy'].map((item, index) => (
                  <div key={item} className="flex items-center gap-5 border-t border-white/12 py-5"><span className="grid h-9 w-9 place-items-center bg-[#365D91]/25 text-[#7FA0C7]"><Check className="h-4 w-4" /></span><span className="text-sm font-semibold">{item}</span><span className="ml-auto text-xs text-[#7A2948]">0{index + 1}</span></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[88rem]">
          <SectionTitle label="Integrated services" title="Commercial Advisory, End to End" body="Specialist representation and market insight across the full commercial property lifecycle." />
          <div className="mt-14 grid border-l border-t border-[#CBD5E1] sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, text }, index) => (
              <article key={title} className="group border-b border-r border-[#CBD5E1] p-7 transition hover:bg-[#DEE6F0] sm:p-9" data-apex-reveal style={{ transitionDelay: `${(index % 3) * 70}ms` }}>
                <span className="grid h-11 w-11 place-items-center border border-[#7A2948]/50 text-[#7A2948] transition group-hover:bg-[#7A2948] group-hover:text-white"><Icon className="h-5 w-5" strokeWidth={1.5} /></span>
                <h3 className="apex-serif mt-7 text-2xl text-[#151E2B]">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6C788A]">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[#CBD5E1] bg-[#E8EDF3] px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[88rem]">
          <SectionTitle label="Why Apex" title="Structured Advisory for Complex Commercial Moves" centered />
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <article key={value.title} className="group min-h-[270px] border border-[#CBD5E1] bg-[#F4F6F8] p-7 transition hover:border-[#365D91] hover:shadow-[0_18px_40px_rgba(32,38,45,0.08)]" data-apex-reveal style={{ transitionDelay: `${index * 70}ms` }}>
                <span className="apex-serif text-4xl text-[#7A2948]">{value.number}</span>
                <h3 className="apex-serif mt-14 text-2xl text-[#151E2B]">{value.title}</h3>
                <p className="mt-4 text-sm leading-7 text-[#6C788A]">{value.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="markets" className="px-5 py-24 sm:px-8 md:py-32 lg:px-12">
        <div className="mx-auto max-w-[92rem]">
          <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <SectionTitle label="Coastal commercial" title="Coastal Properties with Commercial Potential" />
            <p className="max-w-2xl text-base leading-8 text-[#657286] lg:justify-self-end">We advise on waterfront mixed-use assets, boutique hospitality spaces, adaptive retail properties, and commercial opportunities positioned in premium coastal markets.</p>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {coastalAssets.map((asset, index) => (
              <article key={asset.title} className={`group relative overflow-hidden ${index === 1 ? 'md:mt-12' : ''}`} data-apex-reveal>
                <div className="aspect-[0.86] overflow-hidden"><img src={asset.image} alt={asset.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" /></div>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#101722] via-[#101722]/80 to-transparent p-7 pt-24 text-white">
                  <p className="text-[0.58rem] font-bold uppercase tracking-[0.22em] text-[#A85C78]">{asset.label}</p>
                  <h3 className="apex-serif mt-3 text-3xl">{asset.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="relative px-5 py-28 text-[#F4F6F8] sm:px-8 md:py-40 lg:px-12">
        <div className="absolute inset-0"><img src={ctaImage} alt="Coastal commercial building at dusk" className="h-full w-full object-cover" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(20,22,25,0.96),rgba(20,22,25,0.78),rgba(20,22,25,0.48))]" /></div>
        <div className="relative mx-auto max-w-[88rem]" data-apex-reveal>
          <p className="text-[0.68rem] font-bold uppercase tracking-[0.28em] text-[#AD637F]">Begin a conversation</p>
          <h2 className="apex-serif mt-6 max-w-4xl text-[clamp(3rem,6vw,6rem)] leading-[0.95] tracking-[-0.04em]">Ready to Evaluate Your Next Commercial Opportunity?</h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">Connect with Apex Commercial Realty for strategic guidance on leasing, acquisition, disposition, and investment planning.</p>
          <div className="mt-10"><ApexButton href="mailto:info@apexcommercialrealty.com">Schedule Consultation</ApexButton></div>
        </div>
      </section>

      <footer className="bg-[#101722] px-5 py-14 text-[#F4F6F8] sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[88rem]">
          <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-[1.2fr_0.7fr_0.8fr_1fr]">
            <div><ApexMark light /><p className="mt-6 max-w-sm text-sm leading-7 text-[#94A3B8]">Commercial property brokerage and investment advisory built on market intelligence, disciplined execution, and lasting value.</p></div>
            <div><p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[#7A2948]">Quick Links</p><div className="mt-5 grid gap-3">{navLinks.slice(0, 4).map((link) => <a key={link.label} href={link.href} className="text-sm text-white/55 hover:text-white">{link.label}</a>)}</div></div>
            <div><p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[#7A2948]">Services</p><div className="mt-5 grid gap-3 text-sm text-white/55"><span>Tenant Advisory</span><span>Leasing Strategy</span><span>Investment Sales</span><span>Market Research</span></div></div>
            <div><p className="text-[0.6rem] font-bold uppercase tracking-[0.22em] text-[#7A2948]">Contact</p><div className="mt-5 grid gap-3 text-sm text-white/55"><span>New York, NY</span><a href="mailto:info@apexcommercialrealty.com" className="break-all hover:text-white">info@apexcommercialrealty.com</a><a href="tel:+12125550188" className="hover:text-white">(212) 555-0188</a></div></div>
          </div>
          <div className="flex flex-col gap-3 pt-7 text-[0.65rem] uppercase tracking-[0.1em] text-white/30 sm:flex-row sm:justify-between"><p>© 2026 Apex Commercial Realty</p><p>Commercial brokerage · Advisory · Investment sales</p></div>
        </div>
      </footer>
    </main>
  )
}