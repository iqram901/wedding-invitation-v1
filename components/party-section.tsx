import Image from "next/image"

export default function PartySection() {
  const partyMembers = [
    {
      name: "James Thompson",
      role: "Pengiring Pengantin Pria",
      relation: "Saudara Pengantin Pria",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      name: "Emily Johnson",
      role: "Pengiring Pengantin Wanita",
      relation: "Saudara Pengantin Wanita",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      name: "David Wilson",
      role: "Pengiring Pengantin Pria",
      relation: "Teman Pengantin Pria",
      image: "/placeholder.svg?height=600&width=400",
    },
    {
      name: "Jessica Martinez",
      role: "Pengiring Pengantin Wanita",
      relation: "Teman Pengantin Wanita",
      image: "/placeholder.svg?height=600&width=400",
    },
  ]

  return (
    <section id="party" className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-16">Rombongan Pernikahan</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {partyMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
              </div>
              <h3 className="text-xl font-medium mb-1">{member.name}</h3>
              <p className="text-red-500 mb-1">{member.role}</p>
              <p className="text-gray-400 text-sm">{member.relation}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

