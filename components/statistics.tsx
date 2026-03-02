"use client"

import React from "react"
import { motion, useInView, useTransform, useMotionValue } from "framer-motion"
import { Users, Music, ShoppingBag, Globe } from "lucide-react"
import { useTranslation } from "@/hooks/useTranslation"

const stats = [
  { label: "attendees", value: "50,000+", icon: Users },
  { label: "performers", value: "100+", icon: Music },
  { label: "exhibitors", value: "200+", icon: ShoppingBag },
  { label: "countries", value: "30+", icon: Globe },
]

function CountingNumber({ value }: { value: string }) {
  const ref = React.useRef(null)
  const isInView = useInView(ref)
  const numericValue = Number.parseInt(value.replace(/\D/g, ""), 10)
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))
  const [displayValue, setDisplayValue] = React.useState("0")

  React.useEffect(() => {
    if (isInView) {
      count.set(numericValue)
    }
  }, [isInView, numericValue, count])

  React.useEffect(() => {
    rounded.onChange((latest) => {
      setDisplayValue(latest.toString())
    })
  }, [rounded])

  return (
    <motion.span ref={ref} className="text-4xl font-bold block mb-2">
      {displayValue}
      {value.includes("+") ? "+" : ""}
    </motion.span>
  )
}

export function Statistics() {
  const { t } = useTranslation()
  return (
    <section className="py-16 bg-orange-100 text-brown-900 border-y-4 border-orange-500">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-serif mb-8 text-center">{t("festivalImpact")}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <stat.icon className="h-12 w-12 mx-auto mb-4 text-brown-900" />
              <CountingNumber value={stat.value} />
              <span className="text-lg">{t(stat.label)}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
