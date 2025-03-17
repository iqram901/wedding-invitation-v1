"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

export default function MapSection() {
  const [activeVenue, setActiveVenue] = useState<"ceremony" | "reception">("ceremony")

  const venues = {
    ceremony: {
      name: "Katedral St. Mary",
      address: "Jl. Gereja 123, Jakarta 10001",
      time: "14:00 - 15:30",
      mapUrl: "https://maps.google.com",
      image: "/placeholder.svg?height=600&width=800",
    },
    reception: {
      name: "Grand Ballroom, Hotel Riverside",
      address: "Jl. Sungai 456, Jakarta 10001",
      time: "17:00 - 22:00",
      mapUrl: "https://maps.google.com",
      image: "/placeholder.svg?height=600&width=800",
    },
  }

  const activeLocation = venues[activeVenue]

  return (
    <section id="map" className="py-20 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Lokasi & Petunjuk Arah</h2>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="space-y-4">
              <Button
                variant={activeVenue === "ceremony" ? "default" : "outline"}
                className={`w-full justify-start ${activeVenue === "ceremony" ? "bg-red-600 hover:bg-red-700" : ""}`}
                onClick={() => setActiveVenue("ceremony")}
              >
                <div className="text-left">
                  <p className="font-medium">Akad Nikah</p>
                  <p className="text-sm opacity-80">14 Desember 2025</p>
                </div>
              </Button>

              <Button
                variant={activeVenue === "reception" ? "default" : "outline"}
                className={`w-full justify-start ${activeVenue === "reception" ? "bg-red-600 hover:bg-red-700" : ""}`}
                onClick={() => setActiveVenue("reception")}
              >
                <div className="text-left">
                  <p className="font-medium">Resepsi</p>
                  <p className="text-sm opacity-80">14 Desember 2025</p>
                </div>
              </Button>

              <div className="bg-zinc-900 p-6 rounded-lg mt-6">
                <h3 className="text-xl mb-2">{activeLocation.name}</h3>
                <p className="text-gray-400 mb-1">{activeLocation.address}</p>
                <p className="text-gray-400 mb-4">{activeLocation.time}</p>

                <a
                  href={activeLocation.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-red-500 hover:text-red-400 transition-colors"
                >
                  <MapPin className="h-4 w-4 mr-1" />
                  Buka di Google Maps
                </a>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="relative h-96 w-full rounded-lg overflow-hidden">
              <Image
                src={activeLocation.image || "/placeholder.svg"}
                alt={activeLocation.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-black/70 p-4 rounded-lg">
                  <MapPin className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <p className="text-white text-center">{activeLocation.name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

