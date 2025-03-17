import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import WelcomeScreen from "@/components/welcome-screen"
import Navbar from "@/components/navbar"
import ScrollAnimations from "@/components/scroll-animations"
import AnimatedButton from "@/components/animated-button"
import CoupleSection from "@/components/couple-section"
import StorySection from "@/components/story-section"
import GallerySection from "@/components/gallery-section"
import PartySection from "@/components/party-section"
import MapSection from "@/components/map-section"
import RsvpSection from "@/components/rsvp-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ScrollAnimations />
      {/* 
        Background Music - commented out until a real audio file is available
        For production, replace with a real audio file path
      */}
      {/* <BackgroundMusic audioSrc="/music/background-music.mp3" initialMuted={true} /> */}

      {/* Welcome Screen */}
      <WelcomeScreen />

      {/* Main Content (visible after entering) */}
      <div id="main-content" className="hidden opacity-0">
        <Navbar />

        {/* Hero Section */}
        <section
          id="hero"
          className="relative h-screen flex items-center justify-center animate-section animate-on-scroll"
        >
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Pasangan"
              fill
              className="object-cover opacity-60"
              priority
            />
          </div>
          <div className="z-10 text-center px-4 max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-serif mb-4">Sarah & Michael</h1>
            <p className="text-xl md:text-2xl mb-8">Kami akan menikah!</p>
            <div className="bg-red-600/80 text-white py-3 px-6 inline-block rounded-md">
              <p className="text-lg md:text-xl">14 Desember 2025</p>
            </div>
            <div className="mt-16 animate-bounce">
              <Link href="#invitation">
                <ChevronDown className="h-10 w-10 mx-auto" />
              </Link>
            </div>
          </div>
        </section>

        {/* Invitation Section */}
        <section id="invitation" className="py-20 px-4 bg-black animate-section animate-on-scroll">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif mb-8">Undangan Pernikahan Kami</h2>
            <p className="text-lg md:text-xl mb-6">
              Kami dengan senang hati mengundang Anda untuk merayakan hari pernikahan kami. Kehadiran Anda akan membuat
              hari ini semakin istimewa saat kami memulai perjalanan baru bersama.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-12">
              <div className="bg-zinc-900 p-6 rounded-lg animate-section animate-on-scroll">
                <h3 className="text-red-500 text-xl mb-4">Akad Nikah</h3>
                <p className="mb-2">Sabtu, 14 Desember 2025</p>
                <p className="mb-2">14:00 - 15:30</p>
                <p className="mb-6">Katedral St. Mary</p>
                <Link href="#map" className="text-red-500 hover:text-red-400 transition-colors">
                  Lihat di Peta →
                </Link>
              </div>
              <div className="bg-zinc-900 p-6 rounded-lg animate-section animate-on-scroll">
                <h3 className="text-red-500 text-xl mb-4">Resepsi</h3>
                <p className="mb-2">Sabtu, 14 Desember 2025</p>
                <p className="mb-2">17:00 - 22:00</p>
                <p className="mb-6">Grand Ballroom, Hotel Riverside</p>
                <Link href="#map" className="text-red-500 hover:text-red-400 transition-colors">
                  Lihat di Peta →
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* RSVP Button */}
        <div className="py-10 bg-black text-center animate-section animate-on-scroll">
          <AnimatedButton href="#rsvp" className="bg-red-600 text-white rounded-md text-lg">
            Konfirmasi Kehadiran
          </AnimatedButton>
        </div>

        {/* Include all sections in the single page */}
        <CoupleSection />
        <StorySection />
        <GallerySection />
        <PartySection />
        <MapSection />
        <RsvpSection />
        <Footer />
      </div>
    </main>
  )
}

