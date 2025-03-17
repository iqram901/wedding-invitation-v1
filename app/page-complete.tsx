import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import WelcomeScreen from "@/components/welcome-screen"
import Navbar from "@/components/navbar"
import CoupleSection from "@/components/couple-section"
import StorySection from "@/components/story-section"
import GallerySection from "@/components/gallery-section"
import PartySection from "@/components/party-section"
import MapSection from "@/components/map-section"
import RsvpSection from "@/components/rsvp-section"
import Footer from "@/components/footer"
import ScrollAnimations from "@/components/scroll-animations"
import SectionAnimation from "@/components/section-animation"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <ScrollAnimations />
      {/* Welcome Screen */}
      <WelcomeScreen />

      {/* Main Content (visible after entering) */}
      <div id="main-content" className="hidden opacity-0">
        <Navbar />

        {/* Hero Section */}
        <SectionAnimation>
          <section id="hero" className="relative h-screen flex items-center justify-center">
            <div className="absolute inset-0 z-0">
              <Image
                src="/placeholder.svg?height=1080&width=1920"
                alt="Couple"
                fill
                className="object-cover opacity-60"
                priority
              />
            </div>
            <div className="z-10 text-center px-4 max-w-3xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-serif mb-4">Sarah & Michael</h1>
              <p className="text-xl md:text-2xl mb-8">We're getting married!</p>
              <div className="bg-red-600/80 text-white py-3 px-6 inline-block rounded-md">
                <p className="text-lg md:text-xl">December 14, 2025</p>
              </div>
              <div className="mt-16 animate-bounce">
                <Link href="#invitation">
                  <ChevronDown className="h-10 w-10 mx-auto" />
                </Link>
              </div>
            </div>
          </section>
        </SectionAnimation>

        {/* Invitation Section */}
        <SectionAnimation delay={200}>
          <section id="invitation" className="py-20 px-4 bg-black">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-serif mb-8">Our Wedding Invitation</h2>
              <p className="text-lg md:text-xl mb-6">
                We are delighted to invite you to celebrate our wedding day. Your presence will make this day even more
                special as we begin our new journey together.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <h3 className="text-red-500 text-xl mb-4">Ceremony</h3>
                  <p className="mb-2">Saturday, December 14, 2025</p>
                  <p className="mb-2">2:00 PM - 3:30 PM</p>
                  <p className="mb-6">St. Mary's Cathedral</p>
                  <Link href="#map" className="text-red-500 hover:text-red-400 transition-colors">
                    View on Map →
                  </Link>
                </div>
                <div className="bg-zinc-900 p-6 rounded-lg">
                  <h3 className="text-red-500 text-xl mb-4">Reception</h3>
                  <p className="mb-2">Saturday, December 14, 2025</p>
                  <p className="mb-2">5:00 PM - 10:00 PM</p>
                  <p className="mb-6">Grand Ballroom, Riverside Hotel</p>
                  <Link href="#map" className="text-red-500 hover:text-red-400 transition-colors">
                    View on Map →
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </SectionAnimation>

        {/* RSVP Button */}
        <SectionAnimation delay={400}>
          <div className="py-10 bg-black text-center">
            <Link
              href="#rsvp"
              className="bg-red-600 hover:bg-red-700 text-white py-3 px-8 rounded-md text-lg transition-colors inline-block"
            >
              RSVP Now
            </Link>
          </div>
        </SectionAnimation>

        {/* Other Sections */}
        <SectionAnimation delay={600}>
          <CoupleSection />
        </SectionAnimation>
        <SectionAnimation delay={800}>
          <StorySection />
        </SectionAnimation>
        <SectionAnimation delay={1000}>
          <GallerySection />
        </SectionAnimation>
        <SectionAnimation delay={1200}>
          <PartySection />
        </SectionAnimation>
        <SectionAnimation delay={1400}>
          <MapSection />
        </SectionAnimation>
        <SectionAnimation delay={1600}>
          <RsvpSection />
        </SectionAnimation>
        <SectionAnimation delay={1800}>
          <Footer />
        </SectionAnimation>
      </div>
    </main>
  )
}

