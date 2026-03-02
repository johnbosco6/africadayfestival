import Link from "next/link"
import { Card } from "@/components/ui/card"
import Image from "next/image"

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-serif mb-4 text-center">Africa Day Festival Blog</h1>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Discover stories about African culture, community, and the upcoming Africa Day Festival in Lublin
      </p>

      <div className="mb-16">
        <div className="relative overflow-hidden rounded-xl mb-12 shadow-lg border border-orange-100">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 to-orange-600/80 mix-blend-multiply z-10" />
          <div className="relative z-20 p-8">
            <div className="max-w-4xl mx-auto text-center text-white">
              <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                Welcome to Our Blog
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 drop-shadow-sm">
                Celebrating African Culture in Lublin
              </h2>
              <p className="text-white/90 mb-6 text-lg">
                Explore stories about Africa Day, community events, and cultural celebrations. Our blog features
                insights into African traditions, interviews with community leaders, and updates on the upcoming Africa
                Day Festival in Lublin.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Africa Day Festival</h3>
                  <p className="text-white/80 text-sm">
                    Learn about the history and significance of Africa Day celebrations
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Community Stories</h3>
                  <p className="text-white/80 text-sm">
                    Meet the people making a difference in Lublin's African community
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <h3 className="font-bold mb-2">Cultural Exchange</h3>
                  <p className="text-white/80 text-sm">
                    Discover how African culture enriches Lublin's diverse landscape
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9343-min.jpg-cU9EbM4CcKzAb7YQG1lhGsl6VfyGQa.jpeg"
                alt="African community in Lublin"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">About the African Community in Lublin</h3>
              <p className="text-gray-500 mb-2">March 25, 2025</p>
              <p className="text-gray-700 mb-4">
                Lublin, a historic city in eastern Poland, is home to a growing and vibrant African community. Discover
                how African students and residents are enriching Lublin's academic and cultural scene.
              </p>
              <Link
                href="/blog/african-community-in-lublin"
                className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
              >
                Read Full Article
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Card>

          <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1749.jpg-QlBvep7fRHWvPvHjAXm8V2PbSTrQAN.jpeg"
                alt="Dr. Abraham Diomande"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">
                Meet the Founder – Dr. Abraham and AbrahamD Ministry Foundation
              </h3>
              <p className="text-gray-500 mb-2">March 15, 2025</p>
              <p className="text-gray-700 mb-4">
                If you've been around community events in Lublin lately, you may have noticed the warm smile and
                uplifting presence of Dr. Abraham. He's the heart and soul behind the AbrahamD Ministry Foundation.
              </p>
              <Link
                href="/blog/meet-the-founder"
                className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
              >
                Read Full Article
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Card>

          <Card className="overflow-hidden hover:shadow-md transition-shadow">
            <div className="relative h-48">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9720.jpg-e1Yec52cyr5g5k3mrD9SixUPce6ZWa.jpeg"
                alt="Cultural significance of Africa Day"
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">The Cultural Significance of Africa Day Celebrations</h3>
              <p className="text-gray-500 mb-2">April 10, 2025</p>
              <p className="text-gray-700 mb-4">
                Explore the rich cultural heritage, historical importance, and global impact of Africa Day celebrations.
                Learn how this significant day unites the African diaspora worldwide.
              </p>
              <Link
                href="/blog/cultural-significance-of-africa-day"
                className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center"
              >
                Read Full Article
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
