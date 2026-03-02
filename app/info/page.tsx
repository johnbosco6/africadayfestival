"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, Clock, Ticket, Info, Hotel } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const scheduleData = {
  friday: {
    date: "May 29, 2026",
    events: [
      {
        title: "Official Opening Ceremony",
        time: "5:00 PM",
        location: "Lublin – Chatka Żaka",
        notes: "Artistic performances, intellectual dialogue, and diplomatic engagement.",
      },
    ],
  },
  saturday: {
    date: "May 30, 2026",
    events: [
      {
        title: "Grand Public Celebration & Exhibition",
        time: "2:00 PM",
        location: "Lublin – Plac Litewski",
        notes: "Cultural performances, activities, and the Africa Day exhibition.",
      },
    ],
  },
}

const partnershipPackages = [
  {
    tier: "Platinum Partner",
    price: "10,000 PLN",
    color: "bg-slate-900",
    features: [
      "Official title of Platinum Partner",
      "Speaking opportunity during the opening ceremony",
      "Premium booth at the exhibition",
      "Logo on all printed materials, website, and social media",
      "VIP invitations and high-level networking",
    ],
  },
  {
    tier: "Diamond Partner",
    price: "5,000 PLN",
    color: "bg-blue-900",
    features: [
      "Official title of Diamond Partner",
      "Booth at the exhibition",
      "Logo on main promotional materials",
      "Official mentions during the events",
      "VIP access and networking opportunities",
    ],
  },
  {
    tier: "Gold Partner",
    price: "3,500 PLN",
    color: "bg-yellow-600",
    features: [
      "Official recognition as a Gold Partner",
      "Booth at the exhibition",
      "Logo on selected promotional channels",
      "Public acknowledgment during the event",
    ],
  },
  {
    tier: "Silver Partner",
    price: "1,500 PLN",
    color: "bg-gray-400",
    features: [
      "Official Silver Partner status",
      "Booth at the exhibition",
      "Logo on website and selected visual materials",
      "Partnership certificate",
    ],
  },
]

export default function FestivalInfoPage() {
  const addToCalendar = () => {
    const event = {
      title: "Africa Day Festival 2026",
      description: "A two-day celebration of African culture, art, and unity",
      location: "Lublin, Poland",
      startDate: "20260529",
      endDate: "20260530",
    }
    const url = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      event.title,
    )}&dates=${event.startDate}/${event.endDate}&details=${encodeURIComponent(
      event.description,
    )}&location=${encodeURIComponent(event.location)}`
    window.open(url, "_blank")
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-serif mb-4">Africa Day Festival 2026</h1>
        <p className="text-xl mb-6">May 29 - May 30, 2026</p>
        <Button onClick={addToCalendar} className="bg-orange-500 hover:bg-orange-600">
          <Calendar className="mr-2 h-4 w-4" />
          Add to Calendar
        </Button>
      </motion.div>

      <section className="mb-16">
        <h2 className="text-3xl font-serif mb-6">Introduction</h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              The Africa Day Festival 2026 is a high-level cultural, diplomatic, and economic initiative designed to
              strengthen intercultural dialogue and cooperation between Africa and Poland, while offering strong
              visibility and engagement opportunities for embassies and businesses.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Organized by the Abraham D. Ministry Foundation, the festival brings together diplomatic missions,
              companies, institutions, artists, entrepreneurs, students, and the general public for a dynamic two-day
              celebration of African culture, creativity, and international partnership in Lublin.
            </p>
          </CardContent>
        </Card>
      </section>

      <h2 className="text-3xl font-serif mb-6">Festival Format – 2 Days, 2 Official Events</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {Object.entries(scheduleData).map(([day, data]) => (
          <Card key={day} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 text-xl">
                <Calendar className="h-6 w-6 text-orange-500" />
                {data.date}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              {data.events.map((event, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-lg font-bold text-orange-600">{event.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="h-4 w-4" />
                    {event.time}
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="h-4 w-4" />
                    {event.location}
                  </div>
                  <p className="text-gray-700 mt-2">{event.notes}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-serif mb-6">Partnership Packages</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partnershipPackages.map((pkg, index) => (
            <Card key={index} className="flex flex-col border-2 border-transparent hover:border-orange-500 transition-all">
              <div className={`${pkg.color} p-4 text-white text-center rounded-t-lg`}>
                <h3 className="font-bold text-lg">{pkg.tier}</h3>
                <p className="text-2xl font-serif mt-2">{pkg.price}</p>
              </div>
              <CardContent className="pt-6 flex-grow ">
                <ul className="space-y-2 text-sm text-gray-700">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-orange-500 mt-1.5 shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-4 pt-0">
                <Button variant="outline" className="w-full">Choose Tier</Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <div className="grid md:grid-cols-2 gap-12 mb-16">
        <section>
          <h2 className="text-3xl font-serif mb-6">Why Become a Partner?</h2>
          <Card className="h-full">
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {[
                  "Strong visibility in Lublin",
                  "Direct engagement with diverse and international audiences",
                  "Strategic diplomatic and cultural positioning",
                  "Media exposure and public recognition",
                  "Association with values of diversity and inclusion",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Info className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
        <section>
          <h2 className="text-3xl font-serif mb-6">Target Audience</h2>
          <Card className="h-full">
            <CardContent className="pt-6">
              <ul className="space-y-4">
                {[
                  "Thousands of participants in Lublin",
                  "Polish citizens and residents",
                  "International students and academic communities",
                  "Embassy representatives and diplomats",
                  "Business leaders and entrepreneurs",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </section>
      </div>

      <section className="bg-orange-100 rounded-2xl p-8 text-center mb-16">
        <h2 className="text-3xl font-serif mb-6">Conclusion & Next Steps</h2>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-8">
          The Africa Day Festival 2026 is a unique platform to promote culture, strengthen international relations, and
          increase institutional or brand visibility. We would be honored to discuss with you and identify the
          partnership formula best suited to your embassy or company.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left mt-12 bg-white/50 p-8 rounded-xl backdrop-blur-sm">
          <div>
            <h3 className="font-bold text-orange-600 mb-2 uppercase text-sm tracking-wider">Contact Person</h3>
            <p className="font-serif text-lg">Dr. Abraham Diomande</p>
            <p className="text-gray-600 text-sm">Founder & President</p>
            <p className="text-gray-600 text-sm">Abraham D. Ministry Foundation</p>
          </div>
          <div>
            <h3 className="font-bold text-orange-600 mb-2 uppercase text-sm tracking-wider">Reach Us</h3>
            <p className="flex items-center gap-2 text-gray-700">
              <PhoneIcon className="h-4 w-4" />
              +48 576 046 862
            </p>
            <p className="flex items-center gap-2 text-gray-700 mt-1">
              <Mail className="h-4 w-4" />
              office@abrahamdfoundation.org
            </p>
          </div>
          <div>
            <h3 className="font-bold text-orange-600 mb-2 uppercase text-sm tracking-wider">Online</h3>
            <p className="flex items-center gap-2 text-gray-700">
              <Globe className="h-4 w-4" />
              www.abrahamdfoundation.org
            </p>
            <Link href="/" className="text-orange-500 hover:underline mt-2 inline-block font-medium">
              Back to Homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

import { Mail, Globe, Users, PhoneIcon } from "lucide-react"
