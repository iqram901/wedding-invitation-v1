import Image from "next/image"

export default function CoupleSection() {
  return (
    <section id="couple" className="py-20 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Pengantin</h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Groom */}
          <div className="text-center">
            <div className="relative w-64 h-80 mx-auto mb-6 overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=800&width=640" alt="Michael Thompson" fill className="object-cover" />
            </div>
            <h3 className="text-2xl font-serif mb-2">Michael Thompson</h3>
            <p className="text-gray-400 mb-4">Putra dari Bapak & Ibu Thompson</p>
            <p className="max-w-md mx-auto">
              Michael adalah seorang insinyur perangkat lunak yang menyukai hiking dan bermain gitar. Sifatnya yang
              tenang dan penuh perhatian adalah yang pertama kali menarik Sarah kepadanya.
            </p>
          </div>

          {/* Bride */}
          <div className="text-center">
            <div className="relative w-64 h-80 mx-auto mb-6 overflow-hidden rounded-lg">
              <Image src="/placeholder.svg?height=800&width=640" alt="Sarah Johnson" fill className="object-cover" />
            </div>
            <h3 className="text-2xl font-serif mb-2">Sarah Johnson</h3>
            <p className="text-gray-400 mb-4">Putri dari Bapak & Ibu Johnson</p>
            <p className="max-w-md mx-auto">
              Sarah adalah seorang desainer interior dengan hasrat untuk seni dan perjalanan. Kreativitasnya dan
              semangat keceriaan membawa cahaya bagi semua orang di sekitarnya.
            </p>
          </div>
        </div>

        {/* Couple Photo */}
        <div className="mt-16 relative h-96 max-w-4xl mx-auto rounded-lg overflow-hidden">
          <Image src="/placeholder.svg?height=800&width=1200" alt="Sarah dan Michael" fill className="object-cover" />
        </div>
      </div>
    </section>
  )
}

