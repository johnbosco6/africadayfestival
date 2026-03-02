"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"

interface ShortsViewerProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const shorts = [
  {
    id: "ByionjEISLE",
    title: "Africa Day Festival Highlights",
  },
  {
    id: "TwrmoAicWTg",
    title: "Festival Moments",
  },
  {
    id: "XxxzXWQy2lQ",
    title: "Cultural Celebration",
  },
]

export function ShortsViewer({ open, onOpenChange }: ShortsViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : shorts.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < shorts.length - 1 ? prev + 1 : 0))
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-[400px] p-0">
        <div className="relative aspect-[9/16] bg-black">
          <iframe
            src={`https://www.youtube.com/embed/${shorts[currentIndex].id}?rel=0`}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrevious}
              className="bg-black/50 text-white hover:bg-black/75"
            >
              <ChevronLeft className="h-8 w-8" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="bg-black/50 text-white hover:bg-black/75"
            >
              <ChevronRight className="h-8 w-8" />
            </Button>
          </div>
          <div className="absolute bottom-4 inset-x-0 text-center text-white text-sm bg-black/50 py-2">
            {currentIndex + 1} / {shorts.length}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
