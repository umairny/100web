import { useEffect, useRef } from 'react'

/**
 * Hook to attach event listeners to window, document, or elements safely.
 * Uses a ref for the handler to prevent re-attaching listeners on every render,
 * and guarantees cleanup on component unmount to prevent memory leaks.
 */
export function useEventListener<K extends keyof WindowEventMap>(
  eventName: K,
  handler: (event: WindowEventMap[K]) => void,
  element: Window | Document | HTMLElement | null = typeof window !== 'undefined' ? window : null,
  options?: boolean | AddEventListenerOptions
): void {
  const savedHandler = useRef(handler)

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    if (!element || !element.addEventListener) return

    const listener = (event: Event) => {
      savedHandler.current(event as WindowEventMap[K])
    }

    element.addEventListener(eventName, listener, options)

    return () => {
      element.removeEventListener(eventName, listener, options)
    }
  }, [eventName, element, options])
}
