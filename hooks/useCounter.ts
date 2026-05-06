'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export function useCounter(
  isActive: boolean,
  targets: { selector: string; endValue: number; decimals?: number }[]
) {
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (isActive && !hasAnimated.current) {
      hasAnimated.current = true
      targets.forEach(({ selector, endValue, decimals = 0 }) => {
        const el = document.querySelector(selector)
        if (!el) return
        gsap.fromTo(
          { value: 0 },
          {
            value: endValue,
            duration: 2,
            ease: 'power2.out',
            onUpdate: function () {
              el.textContent = parseFloat(this.targets()[0].value.toFixed(decimals)).toString()
            },
          }
        )
      })
    }
    if (!isActive) {
      hasAnimated.current = false
    }
  }, [isActive, targets])
}
