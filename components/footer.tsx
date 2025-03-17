import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-12 px-4 bg-zinc-950 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-serif mb-6">Sarah & Michael</h2>
        <p className="text-gray-400 mb-8">14 Desember 2025</p>

        <div className="flex justify-center items-center mb-8">
          <div className="h-px bg-gray-800 w-16"></div>
          <Heart className="text-red-600 mx-4" />
          <div className="h-px bg-gray-800 w-16"></div>
        </div>

        <p className="text-gray-400 mb-2">Terima kasih telah menjadi bagian dari hari spesial kami</p>

        <p className="mt-12 text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Sarah & Michael. Hak cipta dilindungi.
        </p>
      </div>
    </footer>
  )
}

