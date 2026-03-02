"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Facebook, Instagram, Globe } from "lucide-react"
import { BrandTiktok } from "./tiktok-icon"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function AboutPage() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif mb-8 text-center">About Us</h1>
      <div className="grid md:grid-cols-2 gap-8 items-start mb-12">
        <div>
          <p className="text-lg mb-4">
            We are Abraham D. Ministry foundation, a global organization that aims at promoting and encouraging
            intercultural exchange in the World. We have representations in Africa, America, and Europe. Abraham D.
            Ministry foundation has been created by Dr. Abraham Diomande, Gospel Artist, Medical Doctor, and Pastor.
          </p>
          <p className="text-lg mb-4">
            As part of our musical initiatives, we do hold concerts, festivals, workshops and cultural actions. We have
            conducted workshops and concerts in Poland (Lublin, Swidnik, Chelm), Brazil (Joinville, Berra Velha),
            England (London), France, Ukraine, and Germany.
          </p>
          <p className="text-lg mb-4">
            One side of our ministry is to help underprivileged populations in their health care. We have organized
            charity concerts in Lublin. (We supported sick children with cancer from Lublin's Pediatric hospital). We
            are planning soon many health actions in Africa.
          </p>
          <p className="text-lg mb-4">- Abraham Diomande</p>

          <div className="mt-6">
            <Button
              onClick={() => setIsOpen(!isOpen)}
              variant="outline"
              className="mb-4 bg-orange-500 text-white hover:bg-orange-600"
            >
              MEET ABRAHAM
            </Button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <Card className="mt-4">
                    <CardHeader>
                      <CardTitle>Abraham D. Ministry Foundation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="aspect-[16/9] relative mb-4 rounded-lg overflow-hidden">
                        <Image
                          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1749.jpg-QlBvep7fRHWvPvHjAXm8V2PbSTrQAN.jpeg"
                          alt="Dr. Abraham Diomande performing"
                          fill
                          className="object-cover"
                          priority
                        />
                      </div>
                      <div className="flex justify-center space-x-6">
                        <a
                          href="https://www.abrahamdministry.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-orange-500 transition-colors"
                        >
                          <Globe className="h-6 w-6" />
                        </a>
                        <a
                          href="https://www.facebook.com/abrahamdministry"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-orange-500 transition-colors"
                        >
                          <Facebook className="h-6 w-6" />
                        </a>
                        <a
                          href="https://www.instagram.com/abrahamd.ministry"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-orange-500 transition-colors"
                        >
                          <Instagram className="h-6 w-6" />
                        </a>
                        <a
                          href="https://www.tiktok.com/@abrahamdministry"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-orange-500 transition-colors"
                        >
                          <BrandTiktok className="h-6 w-6" />
                        </a>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9733.jpg-KD3CdqpBXUAXLyKh9zvXNQSsPi8VI6.jpeg"
          alt="Africa Day Festival Celebration - People celebrating with Tanzanian flag"
          width={600}
          height={400}
          className="rounded-lg shadow-md"
          priority
        />
      </div>
      <h2 className="text-3xl font-serif mb-6 text-center">Contact Information</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Foundation Address</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Jozefa Mackiewicza 23/14 A</p>
            <p>Lublin, 20-865</p>
            <p>Poland</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Email: abrahamdministryfoundation@gmail.com</p>
            <p>Phone (English): +48 576 046 862</p>
            <p>Phone (Polish): +48 725 097 661</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Legal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>NIP: 7123443810</p>
            <p>REGON: 523489803</p>
            <p>KRS: 0000999249</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Bank Information</CardTitle>
          </CardHeader>
          <CardContent>
            <p>Bank: Mbank</p>
            <p>Account number: 84114010940000409874001001</p>
            <p>SWIFT CODE: BREXPLPWXXX</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
