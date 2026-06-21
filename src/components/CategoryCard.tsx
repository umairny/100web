import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CategoryInfo } from '../data/websites'

interface CategoryCardProps {
  category: CategoryInfo
}

export function CategoryCard({ category }: CategoryCardProps) {
  const [hasImage, setHasImage] = useState(Boolean(category.image))
  const canShowImage = Boolean(category.image && hasImage)

  const content = (
    <div className={`relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br ${category.color} p-6 text-white md:p-7`}>
      {category.image && hasImage && (
        <img
          src={category.image}
          alt={`${category.name} website concept preview`}
          className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-500 ease-out group-hover:scale-100 group-hover:opacity-100 group-focus-visible:scale-100 group-focus-visible:opacity-100 group-focus-within:scale-100 group-focus-within:opacity-100"
          onError={() => setHasImage(false)}
        />
      )}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,255,255,0.34),transparent_24%),radial-gradient(circle_at_82%_76%,rgba(255,255,255,0.2),transparent_28%)] transition-opacity duration-500 group-hover:opacity-0 group-focus-visible:opacity-0 group-focus-within:opacity-0" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.34))] transition-colors duration-500 group-hover:bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.72))] group-focus-visible:bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.72))] group-focus-within:bg-[linear-gradient(180deg,rgba(0,0,0,0.06),rgba(0,0,0,0.72))]" />

      <div>
        <div className="relative mb-5 inline-grid h-16 w-16 place-items-center rounded-2xl border border-white/35 bg-white/22 text-4xl text-white shadow-lg shadow-gray-950/20 backdrop-blur transition-all duration-300 group-hover:scale-105 group-hover:bg-white/28">
          {category.icon}
        </div>
        <span className="relative inline-flex rounded-full border border-white/30 bg-white/18 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white/90 backdrop-blur">
          10 concepts
        </span>
      </div>
      <div className="relative rounded-2xl border border-white/20 bg-black/16 p-4 shadow-lg shadow-gray-950/15 backdrop-blur transition-all duration-300 group-hover:border-white/30 group-hover:bg-black/34 group-focus-visible:border-white/30 group-focus-visible:bg-black/34 group-focus-within:border-white/30 group-focus-within:bg-black/34">
        <h3 className="text-3xl font-black leading-tight md:text-[2rem]">
          {category.name}
        </h3>
        <p className="mt-3 text-base font-semibold leading-7 text-white/88">
          {category.description}
        </p>
        <p className="mt-5 text-xs font-black uppercase tracking-[0.18em] text-white/82">
          {canShowImage ? 'Preview on hover' : category.href ? 'View collection' : 'Concepts planned'}
        </p>
      </div>
    </div>
  )

  if (category.href) {
    return (
      <Link to={category.href} className="group reveal-card relative block h-full rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white hover:shadow-2xl focus:outline-none focus-visible:ring-4 focus-visible:ring-coffee-300/45">
        {content}
      </Link>
    )
  }

  return (
    <div className="group reveal-card relative h-full rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white hover:shadow-2xl">
      {content}
    </div>
  )
}
