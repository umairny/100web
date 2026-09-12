import { useEffect, useRef } from 'react'

/**
 * Hook to run an interval safely without memory leaks.
 * If delayMs is null or undefined, the interval is paused.
 * Guarantees interval cleanup on component unmount.
 */
export function useSafeInterval(callback: () => void, delayMs: number | null | undefined): void {
  const savedCallback = useRef(callback)

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    if (delayMs === null || delayMs === undefined || delayMs <= 0) return

    const tick = () => savedCallback.current()
    const id = window.setInterval(tick, delayMs)

    return () => window.clearInterval(id)
  }, [delayMs])
}
