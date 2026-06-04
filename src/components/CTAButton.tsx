import { ReactNode } from 'react'

interface CTAButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function CTAButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
}: CTAButtonProps) {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 ease-out inline-flex items-center justify-center hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-coffee-300/35'
  
  const variantStyles = {
    primary: 'bg-coffee-700 text-white shadow-lg shadow-coffee-700/20 hover:bg-coffee-800 hover:shadow-xl hover:shadow-coffee-700/25',
    secondary: 'bg-gray-200 text-gray-900 shadow-sm hover:bg-gray-300 hover:shadow-lg',
    outline: 'border-2 border-coffee-700 text-coffee-700 hover:border-coffee-800 hover:bg-coffee-50 hover:shadow-lg hover:shadow-coffee-700/10',
  }
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }
  
  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`
  
  if (href) {
    return (
      <a href={href} className={combinedStyles}>
        {children}
      </a>
    )
  }
  
  return (
    <button onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  )
}
