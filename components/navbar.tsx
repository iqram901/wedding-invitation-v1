"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { SearchIcon, Volume2, VolumeX } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMuted, setIsMuted] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMute = () => {
    setIsMuted(!isMuted)
    // Control the background music if available
    if (typeof window !== "undefined" && window.toggleBackgroundMusic) {
      window.toggleBackgroundMusic()
    }
  }

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${isScrolled ? "bg-black/90 backdrop-blur-sm py-2" : "bg-gradient-to-b from-black/80 to-transparent py-4"}`}
    >
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="text-red-600 font-bold text-2xl">
          S&M
        </Link>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleMute}
            className="text-white p-2 hover:bg-white/10 rounded-full transition-colors"
            aria-label={isMuted ? "Nyalakan suara" : "Matikan suara"}
          >
            {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
          </button>
          <SearchIcon size={20} className="text-white" />
          <div className="w-6 h-6">
            <div className="bg-red-600 w-full h-full rounded-md flex items-center justify-center">
              <div className="text-white">
                <div className="flex justify-center mb-1">
                  <div className="w-1 h-1 bg-white rounded-full mx-1"></div>
                  <div className="w-1 h-1 bg-white rounded-full mx-1"></div>
                </div>
                <div className="w-2 h-1 bg-white rounded-full mx-auto"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

