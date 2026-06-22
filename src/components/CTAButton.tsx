import { ReactNode } from 'react'

interface CTAButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  fullWidth?: boolean
  leadingIcon?: ReactNode
  trailingIcon?: ReactNode
  ariaLabel?: string
  type?: 'button' | 'submit' | 'reset'
  target?: '_blank' | '_self' | '_parent' | '_top'
}

function hasTextColorClass(className: string, variantPrefix?: string) {
  return className.split(/\s+/).some((token) => {
    const normalizedToken = token.startsWith('!') ? token.slice(1) : token
    const textToken = variantPrefix
      ? normalizedToken.startsWith(`${variantPrefix}:`)
        ? normalizedToken.slice(variantPrefix.length + 1)
        : ''
      : normalizedToken.includes(':')
        ? ''
        : normalizedToken

    return /^!?text-(white|black|transparent|current|inherit|\[[^\]]+\]|[a-z]+-\d{2,3}(?:\/\d+)?)$/.test(textToken)
  })
}

export function CTAButton({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  fullWidth = false,
  leadingIcon,
  trailingIcon,
  ariaLabel,
  type = 'button',
  target,
}: CTAButtonProps) {
  const baseStyles = [
    'group relative isolate inline-flex min-h-11 items-center justify-center overflow-hidden rounded-lg',
    'font-bold tracking-normal transition-all duration-200 ease-out',
    'focus:outline-none focus-visible:ring-4 focus-visible:ring-coffee-300/35 focus-visible:ring-offset-2',
    'active:translate-y-0 active:scale-[0.98]',
    'disabled:pointer-events-none disabled:translate-y-0 disabled:opacity-55',
    'before:absolute before:inset-0 before:-z-10 before:bg-white/0 before:transition-colors before:duration-200',
    'hover:-translate-y-0.5 hover:before:bg-white/10',
    fullWidth ? 'w-full' : '',
  ].join(' ')
  
  const variantStyles = {
    primary:
      'bg-gradient-to-b from-coffee-600 to-coffee-800 shadow-xl shadow-coffee-800/25 ring-1 ring-coffee-500/25 hover:from-coffee-700 hover:to-coffee-900 hover:shadow-2xl hover:shadow-coffee-800/35 focus-visible:ring-coffee-400/55',
    secondary:
      'bg-white shadow-lg shadow-gray-950/10 ring-1 ring-gray-950/10 hover:bg-gray-950 hover:shadow-xl hover:shadow-gray-950/18 hover:ring-gray-950 focus-visible:ring-gray-400/45',
    outline:
      'border-2 border-coffee-700 bg-white/75 shadow-sm shadow-coffee-800/10 ring-1 ring-coffee-700/10 backdrop-blur hover:border-coffee-800 hover:bg-coffee-700 hover:shadow-xl hover:shadow-coffee-800/25 focus-visible:ring-coffee-400/55',
  }

  const variantTextStyles = {
    primary: {
      base: 'text-white',
      hover: '',
    },
    secondary: {
      base: 'text-gray-950',
      hover: 'hover:text-white',
    },
    outline: {
      base: 'text-coffee-800',
      hover: 'hover:text-white',
    },
  }
  
  const sizeStyles = {
    sm: 'gap-2 px-4 py-2 text-sm',
    md: 'gap-2.5 px-6 py-3 text-base',
    lg: 'gap-3 px-8 py-4 text-lg',
  }
  
  const textStyles = [
    hasTextColorClass(className) ? '' : variantTextStyles[variant].base,
    hasTextColorClass(className, 'hover') ? '' : variantTextStyles[variant].hover,
  ].join(' ')

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${textStyles} ${sizeStyles[size]} ${className}`
  const content = (
    <>
      {leadingIcon && (
        <span className="grid shrink-0 place-items-center transition-transform duration-200 group-hover:-translate-x-0.5">
          {leadingIcon}
        </span>
      )}
      <span className="relative z-10 inline-flex min-w-0 items-center justify-center text-center leading-tight">
        {children}
      </span>
      {trailingIcon && (
        <span className="grid shrink-0 place-items-center transition-transform duration-200 group-hover:translate-x-0.5">
          {trailingIcon}
        </span>
      )}
    </>
  )
  
  if (href) {
    return (
      <a
        href={disabled ? undefined : href}
        className={combinedStyles}
        aria-disabled={disabled}
        aria-label={ariaLabel}
        target={target}
        rel={target === '_blank' ? 'noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }
  
  return (
    <button type={type} onClick={onClick} className={combinedStyles} disabled={disabled} aria-label={ariaLabel}>
      {content}
    </button>
  )
}
