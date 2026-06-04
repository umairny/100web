import { ElementType, ReactNode } from 'react'

type AnimationType =
  | 'fade'
  | 'fade-up'
  | 'fade-down'
  | 'scale-in'
  | 'slide-left'
  | 'slide-right'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
  animation?: AnimationType
  delay?: string
  as?: ElementType
}

const animationClasses: Record<AnimationType, string> = {
  fade: 'fade-in',
  'fade-up': 'fade-in-up',
  'fade-down': 'fade-in-down',
  'scale-in': 'scale-in',
  'slide-left': 'slide-in-left',
  'slide-right': 'slide-in-right',
}

export function AnimatedSection({
  children,
  className = '',
  animation = 'fade-up',
  delay = '',
  as: Component = 'div',
}: AnimatedSectionProps) {
  return (
    <Component className={`${animationClasses[animation]} ${delay} ${className}`}>
      {children}
    </Component>
  )
}
