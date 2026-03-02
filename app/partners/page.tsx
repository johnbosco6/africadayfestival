"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useTranslation } from "@/hooks/useTranslation"
import Link from "next/link"
import { motion } from "framer-motion"

const sponsors = [
  {
    name: "Miasto Lublin",
    description: "City of Lublin - Official Municipal Partner",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Miasto%20lublin-WOXLEFNM7s84HLnzs7Fys2xT2tMtjC.png",
    website: "https://lublin.eu",
  },
  {
    name: "TVP Kultura",
    description: "Polish National Television Cultural Channel",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tvp%20kultura.jpg-4VW6nbpVU7MoPd6TLJOAOUSGQ2kHbw.jpeg",
    website: "https://tvp.pl/kultura",
  },
  {
    name: "Hanoi n U",
    description: "Asian cuisine restaurant based in Lublin, Poland",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20rastrowe_Obszar%20roboczy%201%20(1)%20(1).jpg-du82BDI3NVokT8UUMnsYm3cA1Hw9Rb.jpeg",
    website: "https://www.facebook.com/hanoinulublin",
  },
  {
    name: "Afryka Shop",
    description: "Afroero Investment - African Products and Services",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/afroero.jpg-Iq79rN3Q7iE1EhKb39rgopLO2aHf2k.jpeg",
    website: "https://www.facebook.com/AfroeuroInvestment",
  },
  {
    name: "Polskie Radio Lublin",
    description: "Regional Public Radio Broadcaster",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/polska%20lubleski-fUEUCrXATKk5kgEAK0tZS7OCiKY9w1.png",
    website: "https://radio.lublin.pl/",
  },
  {
    name: "Anabilis",
    description: "Ice-cream shop based in Lublin",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/anabilis.jpg-wJCQBjuaOIeIWXQWyFwXhCD2u4WYBX.jpeg",
    website: "https://anabilis.pl/",
  },
  {
    name: "TVP3 Lublin",
    description: "Regional Television Network",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tvp-rZ0k5yQKnlzeI5yARRmTsDfgTz19XF.png",
    website: "https://lublin.tvp.pl/",
  },
  {
    name: "UMCS Welcome Center",
    description: "University International Relations Center",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/umcs%20welcome%20center-VwgXg25AjXO4xplfzLqORT8H7q8PjC.png",
    website: "https://www.umcs.pl/en/welcome.htm",
  },
  {
    name: "Vincent Pol University",
    description: "Higher Education Institution",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/vicent%20pol.jpg-SnP0Lu137QRmKZXSkdgOdG7o0Qrlqr.jpeg",
    website: "https://www.pol.edu.pl/en/",
  },
  {
    name: "Dziennik Wschodni",
    description: "Regional News Media",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dzieen.jpg-cs2vByypg5D7g60kWT4qQLfu7hT3j4.jpeg",
    website: "https://www.dziennikwschodni.pl/",
  },
  {
    name: "Lublin 2023",
    description: "European Youth Capital",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/europeskiego.jpg-0Exlxe4j5EopoqeSgpVxM9fU6aAD9t.jpeg",
    website: "https://lublin.eu/",
  },
  {
    name: "TÁYÉ",
    description: "Fashion and Lifestyle Brand",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/taye-7csensYavUCC8Y3zleqXsKkI6kyzhJ.png",
    website: "https://www.instagram.com/taye_official/",
  },
  {
    name: "Le Club Français de Lublin",
    description: "French Cultural Association",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/french%20club.jpg-bLRUtig0C8WgORIIWM3uJmdkAXclDq.jpeg",
    website: "https://www.facebook.com/ClubFrancaisLublin/",
  },
  {
    name: "Pizza Lover",
    description: "Italian Pizzeria in Lublin",
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/images-OkPNj27Qy1GRO1JIoVLr4sn8LGeaSF.png",
    website: "https://pizzaloverlublin.pl/",
  },
]

export default function PartnersPage() {
  const { t } = useTranslation()

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-serif mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Partners & Sponsors
      </motion.h1>

      <section className="mb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>{sponsor.name}</CardTitle>
                  <CardDescription>{sponsor.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={sponsor.website} target="_blank" rel="noopener noreferrer">
                    <div className="relative h-32 w-full hover:opacity-90 transition-opacity">
                      <Image
                        src={sponsor.logo || "/placeholder.svg"}
                        alt={sponsor.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <Card>
          <CardHeader>
            <CardTitle>Become a Sponsor</CardTitle>
            <CardDescription>
              Join us in celebrating African culture and creativity while reaching a diverse, engaged audience. We offer
              various sponsorship levels to suit different levels of involvement.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link href="/get-involved/business-expo">Learn More About Sponsorship</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
