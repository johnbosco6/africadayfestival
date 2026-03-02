"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, UserIcon, ClockIcon, MapPinIcon, MusicIcon, UtensilsIcon, ShirtIcon } from "lucide-react"

export default function AfricaDayArticle() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/blog" className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Blog
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif mb-4 leading-tight">
            What is Africa Day and why you'll hear about it everywhere this spring in Lublin
          </h1>

          <div className="flex flex-wrap items-center text-gray-600 mb-6 gap-3">
            <span className="flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1" />
              April 1, 2025
            </span>
            <span className="hidden sm:block mx-1">•</span>
            <span className="flex items-center">
              <UserIcon className="h-4 w-4 mr-1" />
              Abraham Diomande
            </span>
            <span className="hidden sm:block mx-1">•</span>
            <span className="flex items-center">
              <ClockIcon className="h-4 w-4 mr-1" />8 min read
            </span>
          </div>
        </header>

        {/* Hero Image */}
        <figure className="mb-10">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/audience%2002.jpg-pCMNMzqWi7P9N6LTTb1MyWdJ22i53x.jpeg"
              alt="Africa Day Festival celebration in Lublin - crowd gathered at Plac Litewski"
              fill
              className="object-cover"
              priority
            />
          </div>
          <figcaption className="text-sm text-center text-gray-600 mt-2 italic">
            A vibrant crowd gathers at Plac Litewski in Lublin during Africa Day celebrations
          </figcaption>
        </figure>

        {/* Table of Contents */}
        <Card className="mb-10 bg-orange-50 border-orange-100">
          <CardContent className="p-6">
            <h2 className="text-lg font-medium mb-3">In this article:</h2>
            <nav className="space-y-1">
              <a href="#introduction" className="text-orange-600 hover:text-orange-700 block hover:underline">
                Introduction
              </a>
              <a href="#what-is-africa-day" className="text-orange-600 hover:text-orange-700 block hover:underline">
                So, what exactly is Africa Day?
              </a>
              <a href="#why-lublin" className="text-orange-600 hover:text-orange-700 block hover:underline">
                Why Lublin? Why now?
              </a>
              <a href="#what-to-expect" className="text-orange-600 hover:text-orange-700 block hover:underline">
                What can you expect at Africa Day Festival in Lublin?
              </a>
              <a href="#more-than-event" className="text-orange-600 hover:text-orange-700 block hover:underline">
                Africa Day is more than an event — it's a vibe
              </a>
              <a href="#dont-miss" className="text-orange-600 hover:text-orange-700 block hover:underline">
                Don't miss it
              </a>
            </nav>
          </CardContent>
        </Card>

        {/* Introduction */}
        <section id="introduction" className="mb-12">
          <p className="text-xl font-medium mb-4">You might have already felt it.</p>
          <p className="text-lg mb-4">
            The rhythm. The colors. The posters popping up in your favorite cafés. The energy building in the streets of
            Lublin.
          </p>
          <p className="text-lg mb-4">
            No, it's not a music festival (though there will be music). It's not a food fair (though you'll definitely
            want to come hungry). It's Africa Day — and this spring, it's taking over Lublin in the best way possible.
          </p>
          <p className="text-lg mb-4">
            Here's why you'll be seeing, hearing, and dancing to it everywhere in the city.
          </p>
        </section>

        {/* What is Africa Day */}
        <section id="what-is-africa-day" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
            So, what exactly is Africa Day?
          </h2>
          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-2/3">
              <p className="mb-4">
                Africa Day is more than just a date. It's a celebration of unity, culture, and identity — held every
                year on May 25, marking the founding of the African Union. It's a day where African communities across
                the globe come together to share their traditions, stories, music, food, fashion, and art with the
                world.
              </p>
              <p className="mb-4">And this year, Lublin is going all in.</p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-orange-100 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Africa Day Origins</h3>
                <p className="text-sm">
                  Africa Day commemorates the founding of the Organization of African Unity (now African Union) on May
                  25, 1963. It celebrates African unity, diversity, and the ongoing fight against colonialism.
                </p>
              </div>
            </div>
          </div>
          <div className="relative h-60 w-full rounded-lg overflow-hidden mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9720.jpg-e1Yec52cyr5g5k3mrD9SixUPce6ZWa.jpeg"
              alt="Performers displaying Ghana flag at Africa Day Festival Lublin"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-sm text-center text-gray-600 italic mb-4">
            Performers proudly display the Ghana flag during a cultural presentation
          </p>
        </section>

        {/* Why Lublin */}
        <section id="why-lublin" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">Why Lublin? Why now?</h2>
          <p className="mb-4">
            Lublin has always been a city of culture — from its buzzing student population to its growing international
            community. Hosting Africa Day Festival 2025 from May 19 to 24 is more than just a celebration — it's a
            moment.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <p className="font-medium">A moment to connect.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <p className="font-medium">A moment to understand.</p>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <p className="font-medium">
                A moment to dance, taste, explore, and experience something new — without leaving the city.
              </p>
            </div>
          </div>
        </section>

        {/* What to Expect */}
        <section id="what-to-expect" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
            What can you expect at Africa Day Festival in Lublin?
          </h2>
          <p className="mb-6">Let's just say... this isn't your typical event. Here's a taste of what's coming:</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start">
              <div className="bg-orange-100 p-2 rounded-full mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-orange-600"
                >
                  <path d="m7 11 2-2-2-2" />
                  <path d="M11 13h4" />
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium mb-1">African Film Festival</h3>
                <p className="text-gray-700">Powerful, eye-opening cinema straight from the continent.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 p-2 rounded-full mr-4 flex-shrink-0">
                <MusicIcon className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Live Concerts</h3>
                <p className="text-gray-700">Featuring African and Polish artists, drumming, and gospel vibes.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 p-2 rounded-full mr-4 flex-shrink-0">
                <UtensilsIcon className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Cooking Workshops</h3>
                <p className="text-gray-700">Learn to make traditional African dishes (yes, you can taste them too).</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 p-2 rounded-full mr-4 flex-shrink-0">
                <ShirtIcon className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Fashion Shows</h3>
                <p className="text-gray-700">
                  Celebrating African designers and styles you won't find in Polish malls.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 p-2 rounded-full mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-orange-600"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="m8 14 2.5-2.5c.83-.83 2.17-.83 3 0L16 14" />
                  <path d="m8 10 2.5-2.5c.83-.83 2.17-.83 3 0L16 10" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium mb-1">Art Exhibitions</h3>
                <p className="text-gray-700">Craft workshops and beauty zones showcasing African aesthetics.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 p-2 rounded-full mr-4 flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-6 w-6 text-orange-600"
                >
                  <path d="M18 6H6a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" />
                  <path d="M4 11v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
                  <path d="M10 6V3" />
                  <path d="M14 6V3" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium mb-1">Outdoor Parade</h3>
                <p className="text-gray-700">Dancing, music, and movement from Brama Krakowska to Plac Zamkowy.</p>
              </div>
            </div>
          </div>

          <p className="mb-4">
            Whether you're coming with friends, bringing your kids, or just curious — this is a space for everyone.
          </p>
        </section>

        {/* More than an event */}
        <section id="more-than-event" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
            Africa Day is more than an event — it's a vibe
          </h2>
          <div className="relative h-60 w-full rounded-lg overflow-hidden mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9343-min.jpg-cU9EbM4CcKzAb7YQG1lhGsl6VfyGQa.jpeg"
              alt="Community dance performance at Africa Day Festival"
              fill
              className="object-cover"
            />
          </div>
          <p className="mb-4">
            It's the kind of celebration that brings people together without needing to speak the same language. You
            feel it in the music. You see it in the colors. You taste it in the food.
          </p>
          <p className="mb-4">
            In a time where the world can feel divided, Africa Day in Lublin reminds us what it means to share,
            celebrate, and connect through culture.
          </p>
        </section>

        {/* Don't miss it */}
        <section id="dont-miss" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">Don't miss it</h2>
          <p className="mb-4">So yes — you'll be seeing a lot of Africa Day around Lublin this spring.</p>
          <p className="mb-4">You'll hear the beats. You'll see the flags. You'll smell the spices.</p>
          <p className="mb-4">And hopefully — you'll be there, right in the middle of it.</p>

          <div className="bg-orange-50 p-6 rounded-lg mb-6">
            <h3 className="font-medium text-lg mb-3">Festival Details</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CalendarIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                <div>
                  <span className="font-medium">Africa Day Festival</span>
                </div>
              </li>
              <li className="flex items-start">
                <MapPinIcon className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                <div>
                  <span className="font-medium">Lublin, May 19–24, 2025</span>
                </div>
              </li>
            </ul>
          </div>

          <p className="font-medium mb-6">Follow the vibes. Join the celebration.</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              <Link href="/info">View Full Schedule</Link>
            </Button>
            <Button variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-50">
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>
        </section>

        {/* Share Section */}
        <section className="border-t border-gray-200 pt-8 mt-12">
          <h2 className="text-xl font-serif mb-4">Share this article</h2>
          <div className="flex flex-wrap gap-3">
            <Button
              variant="outline"
              className="inline-flex items-center gap-2 border-orange-200 hover:bg-orange-50"
              onClick={() => {
                window.open(
                  `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`,
                  "facebook-share-dialog",
                  "width=626,height=436",
                )
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-blue-600"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
              Facebook
            </Button>
            <Button
              variant="outline"
              className="inline-flex items-center gap-2 border-orange-200 hover:bg-orange-50"
              onClick={() => {
                window.open(
                  `https://twitter.com/intent/tweet?text=${encodeURIComponent(
                    "What is Africa Day and why you'll hear about it everywhere this spring in Lublin",
                  )}&url=${encodeURIComponent(window.location.href)}`,
                  "twitter-share-dialog",
                  "width=626,height=436",
                )
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="text-sky-500"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              Twitter
            </Button>
            <Button
              variant="outline"
              className="inline-flex items-center gap-2 border-orange-200 hover:bg-orange-50"
              onClick={() => {
                navigator.clipboard.writeText(window.location.href)
                alert("Link copied to clipboard!")
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-gray-600"
              >
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy Link
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}
