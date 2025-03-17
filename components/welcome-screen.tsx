"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function WelcomeScreen() {
  const [guestName, setGuestName] = useState("")

  const handleOpenInvitation = () => {
    // Fade out welcome screen
    const welcomeScreen = document.getElementById("welcome-screen")
    welcomeScreen?.classList.add("animate-fadeOut")

    // After welcome screen fades out, show main content with animation
    setTimeout(() => {
      welcomeScreen?.classList.add("hidden")
      const mainContent = document.getElementById("main-content")
      mainContent?.classList.remove("hidden")
      mainContent?.classList.add("animate-fadeIn")

      // Animate sections sequentially
      const sections = document.querySelectorAll(".animate-section")
      sections.forEach((section, index) => {
        setTimeout(
          () => {
            section.classList.add("animate-slideUp")
          },
          300 * (index + 1),
        )
      })
    }, 600)

    // Store guest name in localStorage
    if (guestName) {
      localStorage.setItem("guestName", guestName)
    }
  }

  return (
    <div
      id="welcome-screen"
      className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-4 transition-opacity duration-500"
    >
      <div className="text-center max-w-md w-full">
        <h1 className="text-red-600 text-4xl md:text-5xl font-bold mb-8">FOREVER</h1>

        <p className="text-white mb-8">Siapa yang menyaksikan?</p>

        <div className="mb-8 mx-auto relative w-32 h-32">
          <div className="bg-red-600 w-full h-full rounded-md flex items-center justify-center">
            <div className="text-white">
              <div className="flex justify-center mb-1">
                <div className="w-2 h-2 bg-white rounded-full mx-1"></div>
                <div className="w-2 h-2 bg-white rounded-full mx-1"></div>
              </div>
              <div className="w-8 h-2 bg-white rounded-full mx-auto"></div>
            </div>
          </div>
        </div>

        <p className="text-white mb-4">Nama Tamu</p>

        <Input
          type="text"
          value={guestName}
          onChange={(e) => setGuestName(e.target.value)}
          placeholder="Masukkan nama Anda"
          className="bg-zinc-800 border-zinc-700 text-white mb-6 mx-auto max-w-xs"
        />

        <Button
          onClick={handleOpenInvitation}
          variant="outline"
          className="border-white text-white hover:bg-white hover:text-black transition-colors"
        >
          BUKA UNDANGAN
        </Button>
      </div>
    </div>
  )
}

