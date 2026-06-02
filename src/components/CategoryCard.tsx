import { Link } from 'react-router-dom'
import { CategoryInfo } from '../data/websites'

interface CategoryCardProps {
  category: CategoryInfo
}

export function CategoryCard({ category }: CategoryCardProps) {
  const content = (
    <>
      <div className={`bg-gradient-to-br ${category.color} p-8 min-h-[200px] flex flex-col justify-between text-white`}>
        <div>
          <div className="text-5xl mb-4">{category.icon}</div>
          <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
        </div>
        <p className="text-sm opacity-90">{category.description}</p>
      </div>
      
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
    </>
  )

  if (category.href) {
    return (
      <Link to={category.href} className="group relative block overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
        {content}
      </Link>
    )
  }

  return (
    <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-shadow">
      {content}
    </div>
  )
}
