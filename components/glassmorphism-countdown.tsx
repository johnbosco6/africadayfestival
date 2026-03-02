"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

interface GlassmorphismCountdownProps {
  targetDate: Date
  className?: string
}

export function GlassmorphismCountdown({ targetDate, className = "" }: GlassmorphismCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date()

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      }

      return {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`backdrop-blur-md bg-white/20 rounded-xl shadow-lg border border-white/30 p-3 ${className}`}
    >
      <div className="flex items-center justify-center space-x-3 text-white">
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">{String(timeLeft.days).padStart(2, "0")}</span>
          <span className="text-xs opacity-80">days</span>
        </div>
        <span className="text-xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">{String(timeLeft.hours).padStart(2, "0")}</span>
          <span className="text-xs opacity-80">hours</span>
        </div>
        <span className="text-xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">{String(timeLeft.minutes).padStart(2, "0")}</span>
          <span className="text-xs opacity-80">mins</span>
        </div>
        <span className="text-xl font-bold">:</span>
        <div className="flex flex-col items-center">
          <span className="text-xl font-bold">{String(timeLeft.seconds).padStart(2, "0")}</span>
          <span className="text-xs opacity-80">secs</span>
        </div>
      </div>
    </motion.div>
  )
}
