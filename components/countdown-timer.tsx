"use client"

import { useState, useEffect } from "react"
import { useTranslation } from "@/hooks/useTranslation"
import { Button } from "@/components/ui/button"

interface CountdownTimerProps {
  targetDate: string // Change this to string
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const { t } = useTranslation()
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  function calculateTimeLeft() {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const addToCalendar = () => {
    const event = {
      title: "African Day 2025",
      description: "Celebration of African culture and unity",
      start: targetDate.replace(/-/g, ""),
      end: targetDate.replace(/-/g, ""),
    }
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${event.start}/${event.end}&details=${encodeURIComponent(event.description)}`
    window.open(url, "_blank")
  }

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => (
    <span key={interval} className="text-4xl font-bold">
      {String(value).padStart(2, "0")}
      {interval !== "seconds" ? ":" : ""}
    </span>
  ))

  return (
    <div className="text-center py-8 bg-orange-200 rounded-lg">
      <h2 className="text-2xl font-serif mb-4">African Day 2025</h2>
      <div className="mb-2">{timerComponents.length ? timerComponents : <span>{t("festivalStarted")}</span>}</div>
      <div className="text-sm mb-4">
        <span className="mx-2">days</span>
        <span className="mx-2">hours</span>
        <span className="mx-2">minutes</span>
        <span className="mx-2">seconds</span>
      </div>
      <Button onClick={addToCalendar} className="bg-orange-500 hover:bg-orange-600 text-white">
        Add to Calendar
      </Button>
    </div>
  )
}

export default CountdownTimer
