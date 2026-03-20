"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MapPin, Info, Home, Star, Wallet, Hotel, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const accommodationData = {
  vip: {
    title: "High-Budget / VIP Hotels",
    icon: <Star className="h-5 w-5" />,
    description: "Luxury hotels with large rooms, premium services, and higher prices.",
    hotels: [
      {
        name: "Hotel Alter",
        address: "ul. Grodzka 30, 20-112 Lublin",
        price: "650–700 PLN per night",
        facilities: ["SPA & Wellness", "Restaurant", "Billiard Hall", "Cigar lounge", "Room service", "Laundry service"],
        roomExample: "Luxury Room (48 m2) - AC, Wi-Fi, Mini bar, LED TV, Coffee/tea facilities",
      },
      {
        name: "IBB Hotel Grand Hotel Lublin",
        address: "Krakowskie Przedmieście 56",
        price: "315 – 843 PLN per night",
        roomTypes: ["Classic Double", "Superior", "Deluxe", "Junior Suite", "Senior Suite"],
        facilities: ["Breakfast included", "Modern rooms", "City-center location"],
      },
      {
        name: "Hampton by Hilton Lublin",
        address: "Al. Kompozytorów Polskich 1",
        price: "From 313 PLN per night",
        roomTypes: ["Queen Room with Sofa", "Twin Room", "Accessible Room"],
        facilities: ["Workspace", "Walk-in shower", "Breakfast available", "Modern business hotel"],
      },
      {
        name: "Hotel Royal Botanic",
        address: "Północna 219",
        price: "210 – 1000 PLN per night",
        roomTypes: ["Double Room", "Deluxe Room", "Royal Apartment (72 m2)", "Royal Apartment II (90 m2)"],
        facilities: ["Botanical garden view", "Balcony", "Work area", "Air conditioning", "Wet bar"],
      },
    ],
  },
  mid: {
    title: "Mid-Range Hotels",
    icon: <Hotel className="h-5 w-5" />,
    description: "Comfortable hotels with good services but more affordable prices.",
    hotels: [
      {
        name: "Focus Hotel Premium Lublin",
        address: "Podzamcze 1",
        price: "Around 2000 PLN per week",
        roomTypes: ["Standard Twin", "Double Comfort", "Standard Single"],
        facilities: ["Air conditioning", "Free Wi-Fi", "Private bathroom", "Flat-screen TV"],
      },
      {
        name: "Dom na Podwalu",
        address: "Podwale 15, Old Town",
        rating: "9.0 (Superb)",
        price: "~200 PLN per night",
        facilities: ["Garden or city view", "Free Wi-Fi", "Private bathroom", "Tea/coffee maker"],
      },
      {
        name: "Zeus Apartments Lublin",
        address: "Aleja Spółdzielczości Pracy 36",
        price: "About 235 PLN per night",
        facilities: ["Kitchenette", "Free parking", "Free Wi-Fi", "24-hour reception", "Family rooms"],
      },
      {
        name: "Avatary Miasta",
        address: "Rynek 3, Old Town",
        price: "From 323 PLN per night",
        rating: "9.9 location",
        facilities: ["Restaurant and bar", "Coffee shop", "24-hour reception", "Private parking"],
      },
      {
        name: "Apartamenty Novomiejska 17",
        address: "Nowomiejska 17",
        price: "From 164 PLN per night",
        facilities: ["Kitchenette", "Washing machine", "Balcony", "Free Wi-Fi"],
      },
    ],
  },
  budget: {
    title: "Low-Budget / Student Hostels",
    icon: <Wallet className="h-5 w-5" />,
    description: "Cheapest accommodation options, often with shared rooms or bathrooms.",
    hotels: [
      {
        name: "For Rest Hostel",
        price: "60 PLN (dorm bed) / 120–160 PLN (private room)",
        facilities: ["Shared bathroom", "Free Wi-Fi", "Bicycle parking", "24-hour reception"],
      },
      {
        name: "Kujawska Rooms",
        address: "N/A",
        price: "102–146 PLN per night",
        facilities: ["Shared bathroom", "Shared kitchen", "Washing machine", "Balcony rooms"],
      },
      {
        name: "Rodmos Hostel",
        price: "About $16–18 (~65–75 PLN) per night",
        facilities: ["Dormitory beds", "Budget student accommodation"],
      },
      {
        name: "Hostel Pod Basztą",
        address: "Królewska 6, Old Town",
        price: "About 120 PLN per night",
        facilities: ["Shared kitchen", "Free Wi-Fi", "Family rooms", "Board games"],
      },
    ],
  },
}

export function AccommodationSection() {
  return (
    <section className="mb-16">
      <div className="flex items-center gap-3 mb-8">
        <div className="h-10 w-10 rounded-full bg-orange-500 flex items-center justify-center text-white">
          <Home className="h-6 w-6" />
        </div>
        <h2 className="text-3xl font-serif">Accommodation for Guests</h2>
      </div>

      <Tabs defaultValue="vip" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="vip" className="flex items-center gap-2">
            <Star className="h-4 w-4" />
            <span className="hidden sm:inline">VIP/Luxury</span>
            <span className="sm:hidden">VIP</span>
          </TabsTrigger>
          <TabsTrigger value="mid" className="flex items-center gap-2">
            <Hotel className="h-4 w-4" />
            <span className="hidden sm:inline">Mid-Range</span>
            <span className="sm:hidden">Mid</span>
          </TabsTrigger>
          <TabsTrigger value="budget" className="flex items-center gap-2">
            <Wallet className="h-4 w-4" />
            <span className="hidden sm:inline">Budget</span>
            <span className="sm:hidden">Economy</span>
          </TabsTrigger>
        </TabsList>

        {Object.entries(accommodationData).map(([key, category]) => (
          <TabsContent key={key} value={key} className="space-y-6">
            <div className="bg-orange-50 p-4 rounded-lg border border-orange-100 mb-6">
              <p className="text-gray-700 italic">{category.description}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {category.hotels.map((hotel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Card className="h-full border-l-4 border-l-orange-500 hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-xl font-serif text-slate-900">{hotel.name}</CardTitle>
                        {'rating' in hotel && (
                          <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded font-bold shrink-0">
                            {hotel.rating}
                          </span>
                        )}
                      </div>
                      {'address' in hotel && hotel.address !== "N/A" && (
                        <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
                          <MapPin className="h-3.5 w-3.5 shrink-0" />
                          <span>{hotel.address}</span>
                        </div>
                      )}
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex items-center gap-2 text-orange-700 font-semibold bg-orange-50 px-3 py-1.5 rounded-md w-fit">
                        <Info className="h-4 w-4" />
                        <span>{hotel.price}</span>
                      </div>
                      
                      {'roomTypes' in hotel && (
                        <div className="space-y-1">
                          <p className="text-xs font-bold uppercase text-gray-400 tracking-wider">Room Types</p>
                          <div className="flex flex-wrap gap-1.5">
                            {hotel.roomTypes?.map((type, i) => (
                              <span key={i} className="bg-slate-100 text-slate-700 text-[10px] px-2 py-0.5 rounded-full border border-slate-200">
                                {type}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="space-y-2">
                        <p className="text-xs font-bold uppercase text-gray-400 tracking-wider">Facilities</p>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
                          {hotel.facilities.map((facility, i) => (
                            <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                              <CheckCircle2 className="h-3.5 w-3.5 text-green-500 shrink-0" />
                              <span>{facility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {'roomExample' in hotel && (
                        <div className="mt-4 pt-4 border-t border-dashed border-gray-200">
                          <p className="text-xs font-bold uppercase text-gray-400 tracking-wider mb-1">Example Room</p>
                          <p className="text-sm text-gray-700 leading-relaxed font-medium">{hotel.roomExample}</p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
