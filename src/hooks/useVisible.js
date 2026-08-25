import { useEffect, useState, useRef } from 'react'

/**
 * useVisible - Intersection Observer hook to trigger scroll reveals.
 * Matches threshold of 0.08–0.1 specified in design guidelines.
 *
 * @param {number} threshold - Trigger visibility threshold (0.08 - 0.1)
 * @returns {[React.RefObject, boolean]}
 */
export default function useVisible(threshold = 0.08) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(currentRef) // Trigger once and keep state visible
        }
      },
      { threshold }
    )

    observer.observe(currentRef)

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  return [ref, isVisible]
}
