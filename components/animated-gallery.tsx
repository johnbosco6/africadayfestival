"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState } from "react"
import { ShortsViewer } from "./shorts-viewer"
import { Music, Camera, Utensils, Users, Film, Palette } from "lucide-react"

export function AnimatedGallery() {
  const [shortsOpen, setShortsOpen] = useState(false)

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-serif text-center mb-6">Festival Highlights</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col items-center">
          <Music className="w-8 h-8 text-orange-500 mb-2" />
          <span className="text-sm text-center">Live Music</span>
        </div>
        <div className="flex flex-col items-center">
          <Camera className="w-8 h-8 text-orange-500 mb-2" />
          <span className="text-sm text-center">Photography</span>
        </div>
        <div className="flex flex-col items-center">
          <Utensils className="w-8 h-8 text-orange-500 mb-2" />
          <span className="text-sm text-center">Culinary Arts</span>
        </div>
        <div className="flex flex-col items-center">
          <Users className="w-8 h-8 text-orange-500 mb-2" />
          <span className="text-sm text-center">Cultural Exchange</span>
        </div>
        <div className="flex flex-col items-center">
          <Film className="w-8 h-8 text-orange-500 mb-2" />
          <span className="text-sm text-center">Film Screenings</span>
        </div>
        <div className="flex flex-col items-center">
          <Palette className="w-8 h-8 text-orange-500 mb-2" />
          <span className="text-sm text-center">Art Exhibitions</span>
        </div>
      </div>
      <div className="flex justify-center items-center gap-4">
        <Button
          size="lg"
          className="bg-orange-500 hover:bg-orange-600 text-white px-6"
          onClick={() => setShortsOpen(true)}
        >
          View Highlights
        </Button>
        <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-6">
          <Link href="/gallery">Photos and Gallery</Link>
        </Button>
      </div>
      <ShortsViewer open={shortsOpen} onOpenChange={setShortsOpen} />
    </div>
  )
}
