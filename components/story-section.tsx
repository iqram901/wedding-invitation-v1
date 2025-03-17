import Image from "next/image"

export default function StorySection() {
  const stories = [
    {
      title: "Pertemuan Pertama",
      date: "2024",
      description:
        "Pertemuan tak terduga di sebuah kedai kopi menjadi awal dari kisah kami. Apa yang dimulai sebagai percakapan santai sambil menikmati latte berubah menjadi berjam-jam berbicara dan tertawa.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Kejutan Ulang Tahun",
      date: "2024",
      description:
        "Michael merencanakan kejutan perayaan ulang tahun untuk Sarah yang tak terlupakan.",
      image: "/placeholder.svg?height=600&width=800",
    },
    {
      title: "Lamaran",
      date: "2025",
      description:
        "Dengan latar belakang pantai yang indah, Michael melamar di bawah langit penuh bintang. Ombak bergemuruh lembut saat Sarah mengatakan ya untuk selamanya.",
      image: "/placeholder.svg?height=600&width=800",
    },
  ]

  return (
    <section id="story" className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Kisah Cinta Kami</h2>

        <div className="space-y-16">
          {stories.map((story, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-8 items-center">
              <div className={`md:w-1/2 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <div className="relative h-64 w-full rounded-lg overflow-hidden">
                  <Image src={story.image || "/placeholder.svg"} alt={story.title} fill className="object-cover" />
                </div>
              </div>
              <div className="md:w-1/2">
                <h3 className="text-2xl font-serif mb-2">{story.title}</h3>
                <p className="text-red-500 mb-4">{story.date}</p>
                <p className="text-gray-300">{story.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

