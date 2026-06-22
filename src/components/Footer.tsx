import { Link } from 'react-router-dom'
import { allWebsites, categories } from '../data/websites'

const projectLinks = [
  ['Home', '/'],
  ['Featured Work', '/#featured'],
  ['Roadmap', '/#categories'],
  ['About Project', '/#about-project'],
]

const statusLabels = {
  completed: 'Live',
  live: 'Live',
  'in-progress': 'Building',
  planned: 'Planned',
  'coming-soon': 'Soon',
}

function getCategoryPath(category: string) {
  return category.toLowerCase().replace(/\s+/g, '-')
}

export function Footer() {
  const currentYear = new Date().getFullYear()
  const liveDesignCount = allWebsites.filter((website) => website.status === 'completed' || website.status === 'live').length
  const liveCategories = categories.filter((category) => category.href)
  const featuredDesigns = allWebsites.slice(0, 5)

  return (
    <footer className="mt-24 border-t border-gray-200 bg-gray-950 text-white">
      <div className="border-b border-white/10 bg-[linear-gradient(135deg,#111827_0%,#10201c_48%,#171512_100%)]">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:py-16 lg:grid-cols-[1fr_26rem] lg:items-end lg:px-8">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-white text-sm font-black text-gray-950 shadow-xl shadow-black/20">
                100
              </span>
              <span>
                <span className="block text-lg font-black leading-none">100 Websites</span>
                <span className="mt-1 block text-xs font-bold uppercase tracking-[0.18em] text-white/45">by Umair</span>
              </span>
            </Link>

            <p className="mt-7 text-sm font-black uppercase tracking-[0.22em] text-[#f0c76a]">Design collection</p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-tight text-white md:text-5xl">
              Practical homepage concepts for real business categories.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              A growing library of focused React, TypeScript, and Tailwind builds with category-specific layouts, visuals, and conversion patterns.
            </p>
          </div>

          <div className="grid grid-cols-3 overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] text-center shadow-2xl shadow-black/20">
            {[
              [categories.length, 'Categories'],
              [liveDesignCount, 'Live designs'],
              [100, 'Target'],
            ].map(([value, label]) => (
              <div key={label} className="border-r border-white/10 p-4 last:border-r-0 sm:p-5">
                <p className="text-3xl font-black text-[#f0c76a] md:text-4xl">{value}</p>
                <p className="mt-2 text-[0.68rem] font-black uppercase tracking-[0.14em] text-white/52">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.9fr] lg:px-8">
        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#f0c76a]">Built with</h3>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
            Reusable components, responsive layouts, and polished UI direction for restaurants, services, SaaS, portfolios, and more.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind CSS', 'Responsive UI'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-2 text-xs font-bold text-white/72">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#f0c76a]">Live categories</h3>
          <ul className="mt-5 grid gap-2 text-sm">
            {liveCategories.map((category) => (
              <li key={category.name}>
                <Link
                  to={category.href || '/#categories'}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white/70 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
                >
                  <span className="font-bold">{category.name}</span>
                  <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-[0.65rem] font-black uppercase tracking-[0.12em] text-emerald-300">
                    Live
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#f0c76a]">Featured designs</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {featuredDesigns.map((website) => (
              <li key={website.id}>
                <Link to={`/${getCategoryPath(website.category)}/${website.slug}`} className="group block">
                  <span className="block font-bold text-white/72 transition group-hover:text-white">{website.title}</span>
                  <span className="mt-1 block text-xs text-white/42">
                    {website.category} / {statusLabels[website.status]}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#f0c76a]">Project links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {projectLinks.map(([label, href]) => (
              <li key={label}>
                <Link to={href} className="font-bold text-white/62 transition hover:text-white">
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-white/62 transition hover:text-white"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/45 sm:px-6 lg:px-8">
        (c) {currentYear} Umair Ahmad. 100 Website Design Concepts.
      </div>
    </footer>
  )
}
