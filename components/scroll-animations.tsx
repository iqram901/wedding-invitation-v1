"use client"

import { useEffect } from "react"

export default function ScrollAnimations() {
  useEffect(() => {
    // Initialize Intersection Observer to detect when elements enter viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Add animation class when element is in view
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-reveal")
            // Unobserve after animation is triggered
            observer.unobserve(entry.target)
          }
        })
      },
      {
        root: null, // viewport
        rootMargin: "0px",
        threshold: 0.1, // 10% of the element must be visible
      },
    )

    // Observe all elements with the animate-on-scroll class
    const animateElements = document.querySelectorAll(".animate-on-scroll")
    animateElements.forEach((el) => observer.observe(el))

    // Cleanup
    return () => {
      animateElements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return null
}

