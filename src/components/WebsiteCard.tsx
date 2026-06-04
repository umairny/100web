import { Link } from 'react-router-dom'
import { WebsiteDesign } from '../data/websites'

interface WebsiteCardProps {
  website: WebsiteDesign
}

export function WebsiteCard({ website }: WebsiteCardProps) {
  const isCompleted = website.status === 'completed' || website.status === 'live'
  const categoryPath = website.category.toLowerCase()
  const routePath = `/${categoryPath}/${website.slug}`

  return (
    <div className={`group reveal-card relative overflow-hidden rounded-xl border bg-white transition-all duration-300 ease-out ${
      isCompleted
        ? 'border-gray-200 shadow-md hover:-translate-y-1 hover:border-coffee-200 hover:shadow-2xl'
        : 'border-gray-100 shadow-sm opacity-80'
    }`}>
      <div className="absolute right-4 top-4 z-10">
        <span className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
          isCompleted
            ? 'bg-white text-emerald-700 shadow-sm'
            : 'bg-white/85 text-gray-500'
        }`}>
          {isCompleted ? 'Completed' : 'Coming Soon'}
        </span>
      </div>

      <div
        className="relative h-36 overflow-hidden transition-transform duration-500 group-hover:scale-[1.03]"
        style={{
          backgroundImage: `linear-gradient(135deg, ${website.colors.primary} 0%, ${website.colors.accent} 100%)`,
        }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.35),transparent_24%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.22),transparent_28%)]" />
        <div className="absolute bottom-4 left-4 flex gap-2">
          {[website.colors.primary, website.colors.secondary, website.colors.accent, website.colors.dark].map((color) => (
            <span
              key={color}
              className="h-6 w-6 rounded-full border border-white/70 shadow-sm"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>

      <div className="p-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-400">{website.category}</p>
        <h3 className="mb-2 text-xl font-bold text-gray-950 transition group-hover:text-coffee-700">
          {website.title}
        </h3>
        <p className="mb-4 text-sm leading-6 text-gray-500">{website.style}</p>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">
          {website.shortDescription}
        </p>

        {isCompleted ? (
          <Link
            to={routePath}
            className="inline-flex w-full items-center justify-center rounded-lg bg-gray-950 px-4 py-3 text-sm font-bold text-white transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-coffee-700 hover:shadow-lg hover:shadow-coffee-700/20"
          >
            View Design
          </Link>
        ) : (
          <button
            disabled
            className="w-full rounded-lg bg-gray-100 px-4 py-3 text-sm font-bold text-gray-400 cursor-not-allowed"
          >
            Coming Soon
          </button>
        )}
      </div>
    </div>
  )
}
