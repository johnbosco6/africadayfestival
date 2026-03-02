"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Users,
  Code,
  Utensils,
  Trophy,
  Camera,
  GraduationCap,
  Music,
  Facebook,
  Instagram,
  PhoneIcon,
} from "lucide-react"
import Link from "next/link"

const ongoingPrograms = [
  {
    title: "The French Club of Lublin",
    description:
      "Improve your French language skills and immerse yourself in French culture through regular meetings, conversation practice, and cultural events.",
    icon: Users,
    category: "Language",
    socialLink: "https://chat.whatsapp.com/CK3Q5AVd6q34I0d5gNjoiR",
    socialIcon: PhoneIcon,
  },
  {
    title: "The Programming Club of Lublin",
    description:
      "Join fellow coding enthusiasts to learn, share knowledge, and work on exciting projects. Perfect for beginners and experienced programmers alike.",
    icon: Code,
    category: "Technology",
    socialLink: "https://chat.whatsapp.com/LXdsztI9JFL3PcaHpQgg26",
    socialIcon: PhoneIcon,
  },
  {
    title: "Culinary School and Workshops",
    description:
      "Explore the rich flavors of African cuisine through hands-on cooking classes and workshops led by experienced chefs.",
    icon: Utensils,
    category: "Culinary",
    socialLink: "https://chat.whatsapp.com/CWtZ6tkmWETF5mqNHwHtaU",
    socialIcon: PhoneIcon,
  },
  {
    title: "Sport Competitions",
    description:
      "Stay active and competitive with our regular sports events, fostering teamwork and promoting physical fitness across various disciplines.",
    icon: Trophy,
    category: "Sports",
    socialLink: "#",
    socialIcon: Instagram,
  },
  {
    title: "International Model Agency",
    description:
      "Discover and develop your modeling potential with our agency, which aims to showcase diverse beauty on international platforms.",
    icon: Camera,
    category: "Fashion",
    socialLink: "https://www.instagram.com/abrahamdministryfashionagency/",
    socialIcon: Instagram,
  },
  {
    title: "Internships Program for University Students",
    description:
      "Gain valuable work experience through our partnerships with local businesses and organizations, enhancing your professional skills and network.",
    icon: GraduationCap,
    category: "Education",
    socialLink: "#",
    socialIcon: Facebook,
  },
  {
    title: "Gospel Choir and Music Department",
    description:
      "Develop your musical talents, join our gospel choir, or participate in various music programs to express your creativity and passion for music.",
    icon: Music,
    category: "Music",
    socialLink: "#",
    socialIcon: Instagram,
  },
]

export default function OngoingProgramsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif mb-8 text-center">Ongoing Programs</h1>
      <p className="text-lg text-center mb-8">
        Discover our year-round programs that celebrate African culture, foster community connections, and provide
        opportunities for personal growth and learning.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {ongoingPrograms.map((program, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <program.icon className="h-6 w-6 text-orange-500" />
                {program.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{program.description}</p>
              <div className="flex justify-between items-center">
                <Badge variant="secondary">{program.category}</Badge>
                <Link href={program.socialLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="sm">
                    <program.socialIcon className="h-5 w-5" />
                    <span className="sr-only">Join {program.title}</span>
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="mb-4">
          Our ongoing programs are designed to engage the community throughout the year, fostering cultural exchange,
          skill development, and social connections. Join us in celebrating diversity and building a vibrant, inclusive
          community!
        </p>
        <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white">
          <Link href="/get-involved">Get Involved</Link>
        </Button>
      </div>
    </div>
  )
}
