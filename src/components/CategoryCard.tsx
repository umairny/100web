import { Link } from 'react-router-dom'
import { useState } from 'react'
import { CategoryInfo } from '../data/websites'

interface CategoryCardProps {
  category: CategoryInfo
}

export function CategoryCard({ category }: CategoryCardProps) {
  const [hasImage, setHasImage] = useState(Boolean(category.image))

  const content = (
    <>
      <div className={`relative min-h-[290px] overflow-hidden bg-gradient-to-br ${category.color} text-white`}>
        {category.image && hasImage && (
          <img
            src={category.image}
            alt={`${category.name} website concept preview`}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            onError={() => setHasImage(false)}
          />
        )}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.04),rgba(0,0,0,0.58))] transition-opacity duration-300 group-hover:opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.72))] transition-opacity duration-300 group-hover:opacity-95" />
        <div className="relative flex min-h-[290px] flex-col justify-between p-6">
          <div>
            <div className="mb-5 inline-grid h-20 w-20 place-items-center rounded-3xl border border-white/35 bg-white/28 text-5xl shadow-xl shadow-black/20 backdrop-blur transition-transform duration-300 ease-out group-hover:scale-105">
              {category.icon}
            </div>
            <span className="inline-flex rounded-full bg-white/18 px-3 py-1 text-xs font-black uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              Website category
            </span>
          </div>
          <div className="rounded-2xl border border-white/20 bg-black/18 p-4 shadow-lg backdrop-blur transition-all duration-300 ease-out group-hover:border-white/35 group-hover:bg-black/34">
            <h3 className="text-3xl font-black leading-tight md:text-[2rem]">
              {category.name}
            </h3>
            <p className="mt-3 text-base font-semibold leading-7 text-white/92">
              {category.description}
            </p>
            <p className="mt-4 translate-y-0 text-xs font-black uppercase tracking-[0.18em] text-white/85 transition-all duration-300 ease-out md:translate-y-2 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
              {category.href ? 'View collection' : 'Concepts planned'}
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-300 group-hover:opacity-10" />
    </>
  )

  if (category.href) {
    return (
      <Link to={category.href} className="group reveal-card relative block overflow-hidden rounded-2xl border border-white/60 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white hover:shadow-2xl">
        {content}
      </Link>
    )
  }

  return (
    <div className="group reveal-card relative overflow-hidden rounded-2xl border border-white/60 shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-white hover:shadow-2xl">
      {content}
    </div>
  )
}
