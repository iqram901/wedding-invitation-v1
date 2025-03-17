"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { toast } from "@/hooks/use-toast"

export default function RsvpSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    attending: "yes",
    guests: "0",
    dietaryRestrictions: "",
    specialRequests: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({ ...prev, attending: value }))
  }

  const handleGuestsChange = (value: string) => {
    setFormData((prev) => ({ ...prev, guests: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      toast({
        title: "RSVP Terkirim",
        description: "Terima kasih atas tanggapan Anda. Kami menantikan kehadiran Anda!",
      })

      // Reset form
      setFormData({
        name: "",
        email: "",
        attending: "yes",
        guests: "0",
        dietaryRestrictions: "",
        specialRequests: "",
      })
    }, 1500)
  }

  return (
    <section id="rsvp" className="py-20 px-4 bg-black">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif text-center mb-6">RSVP</h2>
        <p className="text-center text-gray-300 mb-12">
          Mohon beri tahu kami jika Anda akan bergabung di hari spesial kami sebelum 1 Desember 2025
        </p>

        <form onSubmit={handleSubmit} className="bg-zinc-900 p-8 rounded-lg">
          <div className="space-y-6">
            <div>
              <Label htmlFor="name">Nama Lengkap</Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Masukkan nama lengkap Anda"
                required
                className="bg-zinc-800 border-zinc-700"
              />
            </div>

            <div>
              <Label htmlFor="email">Alamat Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan alamat email Anda"
                required
                className="bg-zinc-800 border-zinc-700"
              />
            </div>

            <div>
              <Label>Apakah Anda akan hadir?</Label>
              <RadioGroup value={formData.attending} onValueChange={handleRadioChange} className="flex space-x-8 mt-2">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="attending-yes" />
                  <Label htmlFor="attending-yes">Ya, saya akan hadir</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="attending-no" />
                  <Label htmlFor="attending-no">Maaf, saya tidak bisa hadir</Label>
                </div>
              </RadioGroup>
            </div>

            {formData.attending === "yes" && (
              <div>
                <Label>Jumlah tamu (termasuk Anda)</Label>
                <RadioGroup
                  value={formData.guests}
                  onValueChange={handleGuestsChange}
                  className="flex flex-wrap gap-4 mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="1" id="guests-1" />
                    <Label htmlFor="guests-1">1</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="2" id="guests-2" />
                    <Label htmlFor="guests-2">2</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="3" id="guests-3" />
                    <Label htmlFor="guests-3">3</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="4" id="guests-4" />
                    <Label htmlFor="guests-4">4</Label>
                  </div>
                </RadioGroup>
              </div>
            )}

            <div>
              <Label htmlFor="dietaryRestrictions">Pembatasan Makanan</Label>
              <Textarea
                id="dietaryRestrictions"
                name="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={handleChange}
                placeholder="Beri tahu kami jika Anda memiliki pembatasan makanan"
                className="bg-zinc-800 border-zinc-700"
              />
            </div>

            <div>
              <Label htmlFor="specialRequests">Permintaan Khusus</Label>
              <Textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                placeholder="Permintaan khusus atau catatan lainnya"
                className="bg-zinc-800 border-zinc-700"
              />
            </div>

            <div className="flex items-start space-x-2">
              <Checkbox id="terms" />
              <div className="grid gap-1.5 leading-none">
                <Label htmlFor="terms" className="text-sm text-gray-400">
                  Saya memahami bahwa RSVP saya membantu pasangan merencanakan hari spesial mereka
                </Label>
              </div>
            </div>

            <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white" disabled={isSubmitting}>
              {isSubmitting ? "Mengirim..." : "Kirim RSVP"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}

