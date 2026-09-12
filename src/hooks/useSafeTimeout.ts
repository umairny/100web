import { useEffect, useRef, useCallback } from 'react'

/**
 * Hook to manage timeouts safely without memory leaks.
 * Automatically clears all active timers when the component unmounts.
 */
export function useSafeTimeout() {
  const activeTimers = useRef<Set<number>>(new Set())

  const setSafeTimeout = useCallback((callback: () => void, delayMs: number): number => {
    const timerId = window.setTimeout(() => {
      activeTimers.current.delete(timerId)
      callback()
    }, delayMs)

    activeTimers.current.add(timerId)
    return timerId
  }, [])

  const clearSafeTimeout = useCallback((timerId?: number) => {
    if (timerId !== undefined) {
      window.clearTimeout(timerId)
      activeTimers.current.delete(timerId)
    }
  }, [])

  useEffect(() => {
    const timers = activeTimers.current
    return () => {
      timers.forEach((id) => window.clearTimeout(id))
      timers.clear()
    }
  }, [])

  return { setSafeTimeout, clearSafeTimeout }
}
