import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

/**
 * Animates a number from 0 to `end` once the element scrolls into view.
 */
export function useCountUp(end: number, duration = 1800) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!isInView || end === 0) return
    let startTime: number | null = null
    let frame: number

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.floor(eased * end))
      if (progress < 1) {
        frame = requestAnimationFrame(step)
      } else {
        setValue(end)
      }
    }

    frame = requestAnimationFrame(step)
    return () => cancelAnimationFrame(frame)
  }, [isInView, end, duration])

  return { ref, value }
}
