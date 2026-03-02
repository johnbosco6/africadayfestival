"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { fadeIn, scaleHover } from "@/utils/animations"
import type React from "react" // Import React

interface AnimatedCardProps {
  title?: string
  description?: string
  children?: React.ReactNode
  className?: string
}

export function AnimatedCard({ title, description, children, className }: AnimatedCardProps) {
  return (
    <motion.div {...fadeIn} {...scaleHover} className={className}>
      <Card>
        {(title || description) && (
          <CardHeader>
            {title && <CardTitle>{title}</CardTitle>}
            {description && <CardDescription>{description}</CardDescription>}
          </CardHeader>
        )}
        <CardContent>{children}</CardContent>
      </Card>
    </motion.div>
  )
}
