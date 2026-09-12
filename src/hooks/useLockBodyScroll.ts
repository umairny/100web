import { useEffect } from 'react'

/**
 * Hook to lock body scroll (e.g. for modals, mobile menus) and guarantee unlock on unmount.
 */
export function useLockBodyScroll(isLocked: boolean = true): void {
  useEffect(() => {
    if (!isLocked) return

    const originalOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalOverflow || ''
    }
  }, [isLocked])
}
