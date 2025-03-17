"use client"

import type React from "react"

import { useEffect, useRef } from "react"

interface SectionAnimationProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function SectionAnimation({ children, delay = 0, className = "" }: SectionAnimationProps) {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-reveal")
            }, delay)
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [delay])

  return (
    <div ref={sectionRef} className={`animate-on-scroll ${className}`}>
      {children}
    </div>
  )
}

