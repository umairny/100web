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
  const baseStyles = 'font-semibold rounded-lg transition-all duration-200 inline-flex items-center justify-center'
  
  const variantStyles = {
    primary: 'bg-coffee-700 text-white hover:bg-coffee-800 shadow-lg hover:shadow-xl',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300',
    outline: 'border-2 border-coffee-700 text-coffee-700 hover:bg-coffee-50',
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
