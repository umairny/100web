import { Link } from 'react-router-dom'
import { beautyWebsites, categories, fitnessWebsites, realEstateWebsites, restaurantWebsites } from '../data/websites'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const liveRestaurants = restaurantWebsites.filter((website) => website.status === 'completed' || website.status === 'live')
  const liveBeauty = beautyWebsites.filter((website) => website.status === 'completed' || website.status === 'live')
  const liveRealEstate = realEstateWebsites.filter((website) => website.status === 'completed' || website.status === 'live')
  const liveFitness = fitnessWebsites.filter((website) => website.status === 'completed' || website.status === 'live')
  const liveDesignCount = liveRestaurants.length + liveBeauty.length + liveRealEstate.length + liveFitness.length
  const liveCategories = categories.filter((category) => category.href)
  const plannedCategories = categories.filter((category) => !category.href)

  return (
    <footer className="mt-24 bg-[#10201c] text-white">
      <div className="border-b border-white/10 bg-[radial-gradient(circle_at_12%_0%,rgba(30,139,121,0.34),transparent_28%),radial-gradient(circle_at_88%_16%,rgba(238,118,92,0.25),transparent_24%)]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.72fr] lg:px-8">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-[#f0c76a]">100 Website Designs</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight md:text-5xl">
              A growing portfolio system for practical business homepages.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-white/68">
              Restaurant, beauty, real estate, and fitness collections are live now, with the rest of the category roadmap visible across the
              homepage, navbar, and footer.
            </p>
          </div>

          <div className="grid grid-cols-3 border border-white/10 bg-white/7 text-center">
            <div className="border-r border-white/10 p-5">
              <p className="text-3xl font-black text-[#f0c76a]">{categories.length}</p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-white/55">Categories</p>
            </div>
            <div className="border-r border-white/10 p-5">
              <p className="text-3xl font-black text-[#f0c76a]">{liveDesignCount}</p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-white/55">Live</p>
            </div>
            <div className="p-5">
              <p className="text-3xl font-black text-[#f0c76a]">100</p>
              <p className="mt-1 text-xs font-black uppercase tracking-[0.16em] text-white/55">Goal</p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-2 lg:grid-cols-[1.1fr_0.9fr_0.9fr_0.8fr] lg:px-8">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center bg-white text-sm font-black text-[#10201c]">100</span>
            <span>
              <span className="block font-black leading-none">100 Websites</span>
              <span className="mt-1 block text-xs font-bold uppercase tracking-[0.18em] text-white/45">by Umair</span>
            </span>
          </Link>
          <p className="mt-5 max-w-sm text-sm leading-7 text-white/58">
            Built with React, TypeScript, Tailwind CSS, reusable components, and category-specific UI direction.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {['React', 'TypeScript', 'Tailwind', 'Responsive'].map((item) => (
              <span key={item} className="border border-white/10 bg-white/7 px-3 py-2 text-xs font-bold text-white/70">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#f0c76a]">Live categories</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {liveCategories.map((category) => (
              <li key={category.name}>
                <Link to={category.href || '/#categories'} className="flex items-center justify-between border-b border-white/10 pb-3 text-white/70 transition hover:text-white">
                  <span>{category.name}</span>
                  <span className="text-xs font-black uppercase tracking-[0.14em] text-[#1e8b79]">Live</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#f0c76a]">Planned categories</h3>
          <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
            {plannedCategories.map((category) => (
              <li key={category.name}>
                <a href="/#planned-categories" className="text-white/62 transition hover:text-white">
                  {category.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-black uppercase tracking-[0.2em] text-[#f0c76a]">Project links</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              ['Home', '/'],
              ['Featured Work', '/#featured'],
              ['Roadmap', '/#categories'],
              ['Category Studios', '/#planned-categories'],
              ['About Project', '/#about-project'],
            ].map(([label, href]) => (
              <li key={label}>
                <a href={href} className="text-white/62 transition hover:text-white">
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/62 transition hover:text-white"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10 px-4 py-6 text-center text-sm text-white/45 sm:px-6 lg:px-8">
        © {currentYear} Umair Ahmad. 100 Website Design Concepts.
      </div>
    </footer>
  )
}
