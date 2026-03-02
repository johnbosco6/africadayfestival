"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import {
  Users,
  Code,
  Utensils,
  Trophy,
  Camera,
  GraduationCap,
  MessageCircle,
  HandIcon as PrayingHands,
} from "lucide-react"
import { PhoneIcon as WhatsappIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { ScrollReveal } from "@/components/scroll-reveal"
import { staggerChildren, fadeIn } from "@/utils/animations"
import { PhoneIcon } from "lucide-react"

const events = [
  {
    title: "The French Club of Lublin",
    description: "Join our French language and culture club to improve your skills and meet fellow Francophiles.",
    icon: Users,
    category: "Language",
    socialLink: "https://chat.whatsapp.com/CK3Q5AVd6q34I0d5gNjoiR",
    socialIcon: PhoneIcon,
  },
  {
    title: "The Programming Club of Lublin",
    description: "Learn coding, share knowledge, and work on exciting projects with fellow programmers.",
    icon: Code,
    category: "Technology",
    socialLink: "https://chat.whatsapp.com/LXdsztI9JFL3PcaHpQgg26",
    socialIcon: PhoneIcon,
  },
  {
    title: "Culinary School and Workshops",
    description: "Discover the art of cooking with our hands-on culinary workshops and classes.",
    icon: Utensils,
    category: "Culinary",
    socialLink: "https://chat.whatsapp.com/CWtZ6tkmWETF5mqNHwHtaU",
    socialIcon: PhoneIcon,
  },
  {
    title: "Sport Competitions",
    description: "Participate in various sports competitions and promote physical fitness and teamwork.",
    icon: Trophy,
    category: "Sports",
    socialLink: "https://chat.whatsapp.com/EdWiEySZnKZ8WbAb2oFUcd",
    socialIcon: WhatsappIcon,
  },
  {
    title: "International Model Agency",
    description: "Join our modeling agency to showcase diverse beauty and talent on international platforms.",
    icon: Camera,
    category: "Fashion",
    socialLink: "https://chat.whatsapp.com/DHFX8aT2KzT632wxKWVmJn",
    socialIcon: WhatsappIcon,
  },
  {
    title: "Internships Program for University Students",
    description:
      "Gain valuable work experience through our internship programs with local businesses and organizations.",
    icon: GraduationCap,
    category: "Education",
    socialLink: "https://chat.whatsapp.com/E5kw0u5pgIg4SGFtCf3IOe",
    socialIcon: WhatsappIcon,
  },
  {
    title: "Consultation, Word of God, and Special Requests",
    description: "Connect directly with Mr. Abraham D. for spiritual guidance and special requests.",
    icon: MessageCircle,
    category: "Spiritual",
    socialLink: "https://wa.me/qr/CB5GZ7GL7MRMM1",
    socialIcon: WhatsappIcon,
  },
  {
    title: "Meet Mr. Abraham",
    description: "Connect with Pastor Abraham for spiritual awakening and join the church.",
    icon: PrayingHands,
    category: "Spiritual",
    socialLink: "https://wa.me/qr/CB5GZ7GL7MRMM1",
    socialIcon: WhatsappIcon,
  },
]

function addToGoogleCalendar(event) {
  const startDate = encodeURIComponent(event.date)
  const endDate = encodeURIComponent(event.date) // Assuming same day event, adjust if needed
  const details = encodeURIComponent(event.description)
  const location = encodeURIComponent("Africa Day Festival")
  const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(event.title)}&dates=${startDate}/${endDate}&details=${details}&location=${location}`
  window.open(url, "_blank")
}

export function FeaturedEvents() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <section className="py-12 bg-orange-50">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <h2 className="text-3xl font-serif mb-8 text-center">Ongoing Programs</h2>
        </ScrollReveal>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerChildren}
          initial="initial"
          animate="animate"
        >
          {events.slice(0, 7).map((event, index) => (
            <motion.div key={index} variants={fadeIn} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <event.icon className="h-5 w-5 text-orange-500" />
                    {event.title}
                  </CardTitle>
                  <CardDescription>{event.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex justify-between items-center">
                    <Badge variant="secondary">{event.category}</Badge>
                    <Link
                      href={event.socialLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-orange-600 hover:text-orange-700"
                    >
                      <event.socialIcon className="w-5 h-5" />
                    </Link>
                  </div>
                </CardContent>
                <CardContent className="pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full"
                    onClick={() => window.open(event.socialLink, "_blank")}
                  >
                    Join Program
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            View All Programs
          </Button>
        </motion.div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-serif">All Ongoing Programs</DialogTitle>
            <DialogDescription>Explore all the exciting programs at the Africa Day Festival</DialogDescription>
          </DialogHeader>
          <motion.div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 p-6"
            variants={staggerChildren}
            initial="initial"
            animate="animate"
          >
            {events.map((event, index) => (
              <motion.div key={event.title} variants={fadeIn} transition={{ delay: index * 0.1 }}>
                <Card className="flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <event.icon className="h-5 w-5 text-orange-500" />
                      {event.title}
                    </CardTitle>
                    <CardDescription>{event.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary">{event.category}</Badge>
                      <Link
                        href={event.socialLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-orange-600 hover:text-orange-700"
                      >
                        <event.socialIcon className="w-5 h-5" />
                      </Link>
                    </div>
                  </CardContent>
                  <CardContent className="pt-0">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full"
                      onClick={() => window.open(event.socialLink, "_blank")}
                    >
                      Join Program
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </DialogContent>
      </Dialog>
    </section>
  )
}
