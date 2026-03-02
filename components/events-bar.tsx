"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

const events = [
  "Music performances by top African artists",
  "Fashion shows featuring emerging designers",
  "Business expo showcasing African entrepreneurs",
  "Cultural workshops and demonstrations",
  "African cuisine tasting experiences",
]

export function EventsBar() {
  const [currentEvent, setCurrentEvent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-orange-600 text-white py-3 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          key={currentEvent}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center text-lg font-medium"
        >
          {events[currentEvent]}
        </motion.div>
      </div>
    </div>
  )
}
