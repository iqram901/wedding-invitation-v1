"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"

interface AnimatedButtonProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function AnimatedButton({ href, children, className = "" }: AnimatedButtonProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link
      href={href}
      className={`relative inline-block overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span
        className={`relative z-10 block px-8 py-3 transition-transform duration-300 ${isHovered ? "transform -translate-y-1" : ""}`}
      >
        {children}
      </span>
      <span
        className={`absolute inset-0 bg-red-700 transition-transform duration-300 ${isHovered ? "transform scale-x-100" : "transform scale-x-0"}`}
        style={{ transformOrigin: "left" }}
      ></span>
    </Link>
  )
}

