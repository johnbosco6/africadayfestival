"use client"

import { useTranslation } from "@/hooks/useTranslation"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Music, Camera, Utensils, Users, Film, Palette, Instagram, Facebook, Globe, ExternalLink } from "lucide-react"
import { Statistics } from "@/components/statistics"
import { FeaturedEvents } from "@/components/featured-events"
import { GlassmorphismCountdown } from "@/components/glassmorphism-countdown"
import { FestivalTimeline } from "@/components/festival-timeline"

export default function Home() {
  const { t } = useTranslation()
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

  const slides = [
    { 
      type: "hero", 
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9592.jpg-Xuau5tXD7FIqpJBO9YhkSXdNAAcFaE.jpeg", 
      duration: 5000 
    },
    { 
      type: "hero", 
      url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9792.jpg-WG60ywZf56GcS4PiNAoGEvhFthZHTj.jpeg", 
      duration: 5000 
    },
    { 
      type: "sponsor", 
      url: "/sponsors/main-sponsor-banner.png", 
      duration: 10000 
    },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % slides.length)
    }, slides[currentSlideIndex].duration)
    return () => clearTimeout(timer)
  }, [currentSlideIndex])

  const highlights = [
    { icon: Music, title: "Live Music", href: "/program" },
    { icon: Camera, title: "Photography", href: "/gallery" },
    { icon: Utensils, title: "Culinary Arts", href: "/program" },
    { icon: Users, title: "Cultural Exchange", href: "/program" },
    { icon: Film, title: "Film Screenings", href: "/videos" },
    { icon: Palette, title: "Art Exhibitions", href: "/gallery" },
  ]

  const featuredSections = [
    {
      title: "Community Engagement",
      description:
        "Our festival brings together over 50,000 attendees from diverse backgrounds, fostering cultural understanding and unity in the heart of Lublin.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9343-min.jpg-cU9EbM4CcKzAb7YQG1lhGsl6VfyGQa.jpeg",
    },
    {
      title: "Cultural Showcase",
      description:
        "Professional performances, workshops, and exhibitions showcase the richness of African culture, attracting audiences from across Europe.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9877.jpg-mYg3Ra9xSKV2cUOPRXjx7xP87R1MeB.jpeg",
    },
    {
      title: "Artistic Expression",
      description:
        "Experience the vibrant artistic traditions of Africa through music, dance, and visual arts, celebrating creativity in all its forms.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9792.jpg-WG60ywZf56GcS4PiNAoGEvhFthZHTj.jpeg",
    },
    {
      title: "Cultural Exchange",
      description:
        "Creating meaningful connections between African and European cultures through shared experiences and mutual understanding.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9592.jpg-Xuau5tXD7FIqpJBO9YhkSXdNAAcFaE.jpeg",
    },
  ]

  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out ${index === currentSlideIndex
              ? "opacity-100 scale-100 translate-y-0 z-10"
              : index === (currentSlideIndex - 1 + slides.length) % slides.length
                ? "opacity-0 scale-105 -translate-y-4 z-0"
                : "opacity-0 scale-95 translate-y-4 z-0"
              }`}
          >
            <Image
              src={slide.url || "/placeholder.svg"}
              alt={`Africa Day Festival Slide ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority={index === 0}
              className="transition-transform duration-7000 ease-out"
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-4 py-8 pb-32 md:pb-24 z-20">
          <div className="text-center mb-8">
            {slides[currentSlideIndex].type === "sponsor" && (
              <h2 className="text-4xl md:text-7xl font-black mb-4 uppercase tracking-tighter drop-shadow-2xl animate-pulse">
                Exclusive Official Partner
              </h2>
            )}
          </div>

          {slides[currentSlideIndex].type === "hero" && (
            <Button
              className="bg-[#FF5C00] hover:bg-[#FF7A33] text-white text-xl py-6 px-10 h-auto rounded-full shadow-2xl z-30 transition-transform hover:scale-105 active:scale-95"
              onClick={() => {
                window.location.href = "https://donate.stripe.com/14k5lsh2o9bWe1G144"
              }}
            >
              Donate
            </Button>
          )}
          
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-xs md:max-w-md">
            <GlassmorphismCountdown targetDate={new Date("May 29, 2026")} />
          </div>
        </div>
      </div>

      {/* Events Bar */}
      <div className="bg-[#FF5C00] text-white py-4">
        <div className="container mx-auto px-4">
          <p className="text-center text-lg">Music performances by top African artists</p>
        </div>
      </div>

      {/* Festival Highlights */}
      <div className="bg-[#FFF5EB] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Festival Highlights</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
            {highlights.map((item, index) => (
              <Link key={index} href={item.href} className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-full bg-white shadow-lg flex items-center justify-center mb-4 group-hover:bg-[#FF5C00] transition-colors duration-200">
                  <item.icon className="w-8 h-8 text-[#FF5C00] group-hover:text-white transition-colors duration-200" />
                </div>
                <span className="text-center">{item.title}</span>
              </Link>
            ))}
          </div>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline">
              <Link href="/videos">View Highlights</Link>
            </Button>
            <Button asChild>
              <Link href="/gallery">Photos and Gallery</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Main Sponsors */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2">Exclusive Official Partner</h2>
            <div className="w-16 h-1 bg-[#FF5C00] mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">The primary partner supporting Africa Day Festival 2026</p>
          </div>
          <div className="bg-[#FFF5EB] p-8 rounded-2xl shadow-sm border border-orange-100 flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto">
            <Link 
              href="https://www.riamoneytransfer.com/en-cl/ria-transfer-fee-promo/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative w-full md:w-3/4 h-[200px] md:h-[300px] block hover:opacity-90 transition-opacity"
            >
              <Image
                src="/sponsors/main-sponsor-banner.png"
                alt="Main Sponsor Banner"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
              />
            </Link>
            <div className="flex flex-col items-center gap-4 w-full md:w-1/4">
              <div className="relative w-40 h-40 md:w-48 md:h-48 shadow-lg rounded-xl overflow-hidden bg-white p-2">
                <Image
                  src="/sponsors/main-sponsor-qr.jpeg"
                  alt="Sponsor QR Code"
                  layout="fill"
                  objectFit="contain"
                  className="p-1"
                />
              </div>
              <p className="text-sm font-medium text-[#FF5C00] text-center">Scan for more info</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Sponsors & Partners */}
      <div className="bg-[#FAFAFA] py-16 border-t border-gray-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-2">Our Sponsors & Partners</h2>
            <div className="w-16 h-1 bg-[#FF5C00] mx-auto mb-4"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* AHF Poland */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="relative h-32 w-full mb-6">
                  <Image
                    src="/sponsors/AHF-Logo_Poland_Black.jpg"
                    alt="AHF Poland Logo"
                    layout="fill"
                    objectFit="contain"
                    className="p-2"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">AHF Poland</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  AIDS Healthcare Foundation (AHF) is a global non-profit organization providing cutting-edge medicine and advocacy to over 1.9 million people in 45 countries.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                <Link 
                  href="https://ahf.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-700 hover:text-[#FF5C00] transition-colors font-medium group"
                >
                  <Globe className="w-4 h-4 text-[#FF5C00]" />
                  <span>Website</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                
                <Link 
                  href="https://darmowytestnaHIV.pl" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-700 hover:text-[#FF5C00] transition-colors font-medium group"
                >
                  <div className="w-4 h-4 flex items-center justify-center bg-[#FF5C00] text-white rounded-full text-[8px] font-bold">HIV</div>
                  <span>Free Test</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                
                <Link 
                  href="https://www.instagram.com/ahfpoland/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-700 hover:text-[#FF5C00] transition-colors font-medium group"
                >
                  <Instagram className="w-4 h-4 text-[#E4405F]" />
                  <span>Instagram</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                
                <Link 
                  href="https://www.facebook.com/AHFPoland/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-700 hover:text-[#FF5C00] transition-colors font-medium group"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                  <span>Facebook</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>

            {/* Institute of Animation & Prusa2 (Joint Sponsor Card) */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="relative h-32 w-full mb-6">
                  <Image
                    src="/sponsors/logo-academy.jpeg"
                    alt="IAIRS & Prusa2 Logo"
                    layout="fill"
                    objectFit="contain"
                    className="p-1"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Instytut Aktywizacji i Rozwoju Społecznego & Prusa2</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  A joint collaboration supporting social development, active citizenship, youth empowerment, workshops, and creative community spaces in Lublin during the Africa Day Festival.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                <Link 
                  href="https://iairs.pl/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-700 hover:text-[#FF5C00] transition-colors font-medium group"
                >
                  <Globe className="w-4 h-4 text-[#FF5C00]" />
                  <span>IAiRS Website</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                
                <Link 
                  href="https://www.facebook.com/iairs.lublin/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-700 hover:text-[#FF5C00] transition-colors font-medium group"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                  <span>IAiRS Facebook</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>

                <Link 
                  href="https://www.facebook.com/prusa2lublin/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-700 hover:text-[#FF5C00] transition-colors font-medium col-span-2 group"
                >
                  <Facebook className="w-4 h-4 text-[#1877F2]" />
                  <span>Prusa2 Facebook</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>

            {/* Zapora */}
            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="relative h-32 w-full mb-6">
                  <Image
                    src="/sponsors/zapora.jpg"
                    alt="Zapora Logo"
                    layout="fill"
                    objectFit="contain"
                    className="p-1"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Zapora</h3>
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  Hieronim Dekutowski &ldquo;Zapora&rdquo; Cultural &amp; Scouting Initiative &ndash; dedicated to nurturing civic values, youth leadership, and preserving local historical heritage in the Lublin region.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-100">
                <Link 
                  href="https://pl.wikipedia.org/wiki/Hieronim_Dekutowski" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs text-gray-700 hover:text-[#FF5C00] transition-colors font-medium col-span-2 group"
                >
                  <Globe className="w-4 h-4 text-[#FF5C00]" />
                  <span>Historical Profile</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Sections Grid */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {featuredSections.map((section, index) => (
              <div key={index} className="rounded-lg overflow-hidden bg-[#FFF5EB] shadow-lg">
                <div className="relative h-64">
                  <Image
                    src={section.image || "/placeholder.svg"}
                    alt={section.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {index === 0 && <Users className="w-5 h-5 text-[#FF5C00]" />}
                    {index === 1 && <Music className="w-5 h-5 text-[#FF5C00]" />}
                    {index === 2 && <Palette className="w-5 h-5 text-[#FF5C00]" />}
                    {index === 3 && <Film className="w-5 h-5 text-[#FF5C00]" />}
                    <h3 className="text-xl font-bold">{section.title}</h3>
                  </div>
                  <p className="text-gray-700">{section.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Festival Timeline */}

      {/* Festival Timeline */}
      <FestivalTimeline />

      {/* Cultural Impact Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Cultural Impact & Community Engagement</h2>
          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-gray-700 mb-8">
              Join us in celebrating the rich tapestry of African culture, creativity, and commerce. Our festival brings
              together performers, fashion designers, and businesses from across the continent for an unforgettable
              experience of music, art, and entrepreneurship.
            </p>
          </div>
          <Statistics />
        </div>
      </div>

      {/* Get Involved CTA */}
      <div className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Get Involved</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Join the journey! Whether you want to volunteer, perform, or partner with us, we'd love to have you.
          </p>
          <Button asChild className="bg-[#FF5C00] hover:bg-[#FF7A33] text-white text-xl py-8 px-12 h-auto rounded-full shadow-2xl transition-transform hover:scale-105">
            <a 
              href="https://docs.google.com/forms/d/1qaJcDo5zH8dskXX9439oPzucK4_87TeEkfBPfykU-0E/viewform" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Apply Now
            </a>
          </Button>
        </div>
      </div>

      {/* Featured Events Section */}
      <div className="bg-[#FFF5EB] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Join Our Community Programs</h2>
          <FeaturedEvents />
        </div>
      </div>
    </div>
  )
}
