"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
    "/placeholder.svg?height=800&width=1200",
  ]

  const openLightbox = (image: string) => {
    setSelectedImage(image)
    document.body.style.overflow = "hidden"
  }

  const closeLightbox = () => {
    setSelectedImage(null)
    document.body.style.overflow = "auto"
  }

  return (
    <section id="gallery" className="py-20 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Galeri Foto</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
              onClick={() => openLightbox(image)}
            >
              <Image
                src={image || "/placeholder.svg"}
                alt={`Gambar galeri ${index + 1}`}
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white hover:text-red-500 transition-colors"
              aria-label="Tutup lightbox"
            >
              <X className="h-8 w-8" />
            </button>
            <div className="relative w-full max-w-4xl h-[80vh]">
              <Image src={selectedImage || "/placeholder.svg"} alt="Gambar galeri" fill className="object-contain" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

