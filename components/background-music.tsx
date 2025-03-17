"use client"

import { useEffect, useRef, useState } from "react"

interface BackgroundMusicProps {
  audioSrc?: string // Make audio source optional
  initialMuted?: boolean
}

export default function BackgroundMusic({ audioSrc, initialMuted = true }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isMuted, setIsMuted] = useState(initialMuted)
  const [isAudioAvailable, setIsAudioAvailable] = useState(false)

  useEffect(() => {
    // Only proceed if audioSrc is provided
    if (!audioSrc) {
      console.log("No audio source provided")
      return
    }

    // Create audio element
    const audio = new Audio()

    // Check if the audio file exists and is playable
    audio.addEventListener("canplaythrough", () => {
      setIsAudioAvailable(true)
    })

    audio.addEventListener("error", (e) => {
      console.log("Audio file could not be loaded:", e)
      setIsAudioAvailable(false)
    })

    // Set audio properties
    audio.src = audioSrc
    audio.loop = true
    audio.muted = initialMuted
    audioRef.current = audio

    // Play audio when user interacts with the page
    const handleUserInteraction = () => {
      if (audioRef.current && isAudioAvailable) {
        audioRef.current.play().catch((error) => {
          console.error("Audio playback failed:", error)
          setIsAudioAvailable(false)
        })
      }

      // Remove event listeners after first interaction
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
    }

    document.addEventListener("click", handleUserInteraction)
    document.addEventListener("touchstart", handleUserInteraction)

    // Cleanup
    return () => {
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("touchstart", handleUserInteraction)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current = null
      }
    }
  }, [audioSrc, initialMuted, isAudioAvailable])

  // Expose methods to control audio
  useEffect(() => {
    if (!audioRef.current || !isAudioAvailable) return

    audioRef.current.muted = isMuted

    // Make the audio control available globally
    window.toggleBackgroundMusic = () => {
      setIsMuted(!isMuted)
    }

    return () => {
      // @ts-ignore
      delete window.toggleBackgroundMusic
    }
  }, [isMuted, isAudioAvailable])

  return null // This component doesn't render anything
}

// Add this to the global Window interface
declare global {
  interface Window {
    toggleBackgroundMusic?: () => void
  }
}

