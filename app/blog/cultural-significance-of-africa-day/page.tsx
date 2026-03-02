"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CalendarIcon, UserIcon, ClockIcon, GlobeIcon, HeartIcon, MusicIcon } from "lucide-react"
import Head from "next/head"

// Note: This would normally go in the layout.tsx file for static metadata
// For client components, we'll use Head component instead
const pageTitle = "The Cultural Significance of Africa Day Celebrations | Africa Day Festival"
const pageDescription =
  "Explore the rich cultural heritage, historical importance, and global impact of Africa Day celebrations. Learn how this significant day unites the African diaspora worldwide."
const keywords =
  "Africa Day, African culture, African unity, African diaspora, cultural celebration, African heritage, Lublin festival"

export default function CulturalSignificanceArticle() {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={keywords} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta
          property="og:image"
          content="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9720.jpg-e1Yec52cyr5g5k3mrD9SixUPce6ZWa.jpeg"
        />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
      </Head>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-orange-500 hover:text-orange-600 font-medium inline-flex items-center mb-6"
          >
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
              The Cultural Significance of Africa Day Celebrations Around the World
            </h1>

            <div className="flex flex-wrap items-center text-gray-600 mb-6 gap-3">
              <span className="flex items-center">
                <CalendarIcon className="h-4 w-4 mr-1" />
                April 10, 2025
              </span>
              <span className="hidden sm:block mx-1">•</span>
              <span className="flex items-center">
                <UserIcon className="h-4 w-4 mr-1" />
                Abraham Diomande
              </span>
              <span className="hidden sm:block mx-1">•</span>
              <span className="flex items-center">
                <ClockIcon className="h-4 w-4 mr-1" />
                10 min read
              </span>
            </div>
          </header>

          {/* Hero Image */}
          <figure className="mb-10">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9720.jpg-e1Yec52cyr5g5k3mrD9SixUPce6ZWa.jpeg"
                alt="Colorful Africa Day celebration with traditional clothing and flags"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-black/30 flex flex-col justify-center items-center">
                {/* Glassmorphism Text Element */}
                <div className="backdrop-blur-md bg-white/20 rounded-xl shadow-lg border border-white/30 p-4 mb-4 max-w-md text-center">
                  <h2 className="text-white text-xl md:text-2xl font-bold drop-shadow-sm">
                    Support African Cultural Heritage
                  </h2>
                  <p className="text-white/90 text-sm md:text-base mt-1">
                    Help us preserve and celebrate African traditions in Lublin
                  </p>
                </div>

                {/* Countdown would go here */}
                <div className="mb-4">{/* Countdown component would be rendered here */}</div>

                {/* Donate Button */}
                <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-2 text-lg">Donate</Button>
              </div>
            </div>
            <figcaption className="text-sm text-center text-gray-600 mt-2 italic">
              Vibrant celebrations showcase the rich cultural heritage during Africa Day festivities
            </figcaption>
          </figure>

          {/* Table of Contents */}
          <Card className="mb-10 bg-orange-50 border-orange-100">
            <CardContent className="p-6">
              <h2 className="text-lg font-medium mb-3">In this article:</h2>
              <nav className="space-y-1">
                <a href="#introduction" className="text-orange-600 hover:text-orange-700 block hover:underline">
                  Introduction: More Than Just a Celebration
                </a>
                <a href="#historical-roots" className="text-orange-600 hover:text-orange-700 block hover:underline">
                  The Historical Roots of Africa Day
                </a>
                <a href="#cultural-expression" className="text-orange-600 hover:text-orange-700 block hover:underline">
                  Cultural Expression Through Africa Day
                </a>
                <a href="#global-impact" className="text-orange-600 hover:text-orange-700 block hover:underline">
                  Global Impact and Diaspora Connections
                </a>
                <a href="#lublin-celebration" className="text-orange-600 hover:text-orange-700 block hover:underline">
                  Lublin's Unique Africa Day Experience
                </a>
                <a href="#future-vision" className="text-orange-600 hover:text-orange-700 block hover:underline">
                  The Future Vision of Africa Day
                </a>
              </nav>
            </CardContent>
          </Card>

          {/* Introduction */}
          <section id="introduction" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
              More Than Just a Celebration
            </h2>
            <p className="text-lg mb-4">
              When we talk about Africa Day, we're discussing much more than a single date on the calendar. We're
              exploring a powerful cultural phenomenon that resonates across continents, generations, and diverse
              communities worldwide.
            </p>
            <p className="text-lg mb-4">
              Africa Day represents a collective expression of identity, resilience, and unity that has evolved over
              decades. It's a day when the richness of African cultures—from the northernmost tip of Tunisia to the
              southern shores of South Africa—comes alive through music, dance, art, fashion, and cuisine.
            </p>
            <p className="text-lg mb-4">
              But beyond the vibrant celebrations lies a deeper significance: Africa Day serves as a reminder of shared
              heritage, historical struggles, and the ongoing journey toward unity and self-determination for African
              peoples everywhere.
            </p>
            <div className="bg-orange-50 p-6 rounded-lg my-6">
              <p className="italic text-orange-800">
                "Africa Day is not just about remembering the past; it's about celebrating the present and shaping the
                future of a continent whose cultural influence spans the globe."
              </p>
            </div>
          </section>

          {/* Historical Roots */}
          <section id="historical-roots" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
              The Historical Roots of Africa Day
            </h2>
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-2/3">
                <p className="mb-4">
                  To truly understand the cultural significance of Africa Day, we must first acknowledge its historical
                  foundations. Established on May 25, 1963, the day marks the founding of the Organization of African
                  Unity (OAU), which later evolved into the African Union.
                </p>
                <p className="mb-4">
                  This was no ordinary political development. The formation of the OAU represented a watershed moment in
                  African history—a time when newly independent nations came together with a shared vision of
                  self-determination, freedom from colonialism, and pan-African cooperation.
                </p>
                <p className="mb-4">
                  The leaders who gathered in Addis Ababa, Ethiopia on that historic day were not just politicians; they
                  were visionaries who understood that Africa's strength lay in its unity and cultural solidarity. Names
                  like Kwame Nkrumah of Ghana, Emperor Haile Selassie of Ethiopia, and Julius Nyerere of Tanzania became
                  synonymous with this new chapter in African history.
                </p>
              </div>
              <div className="md:w-1/3">
                <div className="bg-orange-100 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Key Historical Milestones</h3>
                  <ul className="text-sm space-y-2">
                    <li className="flex items-start">
                      <span className="font-bold mr-2">1963:</span> Formation of the Organization of African Unity
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">1982:</span> Africa Day begins to be celebrated internationally
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">2002:</span> OAU transitions to the African Union
                    </li>
                    <li className="flex items-start">
                      <span className="font-bold mr-2">2019:</span> African Continental Free Trade Agreement implemented
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Cultural Expression */}
          <section id="cultural-expression" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
              Cultural Expression Through Africa Day
            </h2>
            <p className="mb-4">
              Africa Day celebrations have evolved into vibrant showcases of the continent's diverse cultural
              expressions. These celebrations serve as powerful platforms for preserving and promoting African heritage
              while creating spaces for cultural exchange and appreciation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <div className="bg-orange-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <MusicIcon className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">Music and Dance</h3>
                  <p className="text-gray-700">
                    From the rhythmic beats of West African drums to the harmonious melodies of East African choirs,
                    music forms the heartbeat of Africa Day celebrations. Traditional dances tell stories that have been
                    passed down through generations, preserving cultural narratives and communal wisdom.
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
                    <path d="M8.21 13.89 7 23l9-9-8.99-9L7.2 13.9" />
                    <path d="M14.53 8.47 12 6l-2.53 2.47" />
                    <path d="M16.95 15.95 19 18l-2.05 2.05" />
                    <path d="M15.5 13.5 17 12l-1.5-1.5" />
                    <path d="M10.5 13.5 9 12l1.5-1.5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Fashion and Textiles</h3>
                  <p className="text-gray-700">
                    The vibrant colors and intricate patterns of African textiles take center stage during Africa Day.
                    From Ghanaian kente cloth to Ethiopian habesha kemis, traditional attire becomes a powerful symbol
                    of cultural pride and identity.
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
                    <path d="M12 6c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.43-.6 2.73-1.57 3.65L12 18l-8.43-8.35C2.6 8.73 2 7.43 2 6c0-2.76 2.24-5 5-5s5 2.24 5 5" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium mb-1">Culinary Traditions</h3>
                  <p className="text-gray-700">
                    Food is a universal language, and Africa Day celebrations speak volumes through diverse culinary
                    traditions. From North African tagines to West African jollof rice and East African injera, these
                    dishes tell stories of regional history, trade routes, and cultural exchanges.
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
                  <h3 className="font-medium mb-1">Visual Arts</h3>
                  <p className="text-gray-700">
                    From traditional sculptures and masks to contemporary paintings and digital art, Africa Day
                    showcases the evolution of African visual expression. These art forms not only preserve cultural
                    heritage but also provide commentary on contemporary African experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative h-60 w-full rounded-lg overflow-hidden mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9343-min.jpg-cU9EbM4CcKzAb7YQG1lhGsl6VfyGQa.jpeg"
                alt="Traditional African dance performance during Africa Day celebrations"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-sm text-center text-gray-600 italic mb-4">
              Traditional dance performances bring ancestral stories to life during Africa Day celebrations
            </p>
          </section>

          {/* Global Impact */}
          <section id="global-impact" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
              Global Impact and Diaspora Connections
            </h2>
            <p className="mb-4">
              The cultural significance of Africa Day extends far beyond the continent's geographical boundaries. For
              the African diaspora—communities of African descent living around the world—this day holds special meaning
              as a connection to ancestral roots and shared heritage.
            </p>
            <p className="mb-4">
              In cities from London to New York, Rio de Janeiro to Sydney, Africa Day celebrations create spaces where
              diaspora communities can celebrate their heritage while building bridges with their local communities.
              These celebrations often become powerful demonstrations of cultural diplomacy, challenging stereotypes and
              showcasing Africa's contributions to global culture.
            </p>
            <div className="bg-orange-50 p-6 rounded-lg mb-6">
              <div className="flex items-start">
                <GlobeIcon className="h-5 w-5 text-orange-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Africa Day Around the World</h3>
                  <p className="text-sm text-gray-700">
                    Africa Day is now celebrated in over 100 countries worldwide, with major events in cities like
                    London, Paris, New York, Toronto, and Sydney. Each celebration brings its unique cultural fusion
                    while maintaining connections to African traditions.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Lublin Celebration */}
          <section id="lublin-celebration" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
              Lublin's Unique Africa Day Experience
            </h2>
            <p className="mb-4">
              In Lublin, Poland, Africa Day has taken on a special significance, creating a unique cultural bridge
              between European and African traditions. The growing African community in this historic Polish city has
              transformed Africa Day into a vibrant celebration that brings together diverse communities.
            </p>
            <p className="mb-4">
              What makes Lublin's Africa Day Festival particularly significant is how it creates spaces for cultural
              exchange in a region where African communities are still establishing their presence. Through music, food,
              fashion, and art, the festival introduces local residents to the richness of African cultures while
              providing African residents with a connection to their heritage.
            </p>
            <p className="mb-4">
              The Abraham D. Ministry Foundation has been instrumental in developing this cultural exchange, creating
              programs that go beyond mere entertainment to foster genuine understanding and appreciation between
              communities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <p className="font-medium">Cultural Exchange</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <p className="font-medium">Community Building</p>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg text-center">
                <p className="font-medium">Educational Opportunity</p>
              </div>
            </div>
          </section>

          {/* Future Vision */}
          <section id="future-vision" className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
              The Future Vision of Africa Day
            </h2>
            <p className="mb-4">
              As we look to the future, Africa Day celebrations continue to evolve, embracing new forms of cultural
              expression while honoring traditional practices. Digital technologies are creating new possibilities for
              connecting Africa Day celebrations across the globe, allowing for virtual participation and wider sharing
              of cultural knowledge.
            </p>
            <p className="mb-4">
              The growing recognition of Africa Day also reflects a broader shift in global perspectives—an increasing
              acknowledgment of Africa's central role in human history and its continuing contributions to world
              culture. From the influence of African rhythms on global music to the impact of African aesthetics on
              fashion and design, the continent's cultural footprint continues to expand.
            </p>
            <p className="mb-4">
              For younger generations of African descent, Africa Day provides an opportunity to reimagine and reclaim
              their heritage, blending traditional elements with contemporary expressions to create new cultural forms
              that speak to their lived experiences.
            </p>
            <div className="bg-orange-50 p-6 rounded-lg mb-6">
              <div className="flex items-start">
                <HeartIcon className="h-5 w-5 text-orange-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-medium mb-2">Join the Celebration</h3>
                  <p className="text-sm text-gray-700">
                    Africa Day is for everyone—a celebration of human diversity, resilience, and creativity. Whether you
                    have African heritage or simply appreciate the richness of African cultures, these celebrations
                    offer a meaningful way to connect with a vibrant global community.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
              Embracing the Spirit of Africa Day
            </h2>
            <p className="mb-4">
              The cultural significance of Africa Day lies in its power to unite, educate, and inspire. Through
              celebrations that honor both tradition and innovation, Africa Day continues to play a vital role in
              preserving cultural heritage while creating new connections across communities and generations.
            </p>
            <p className="mb-4">
              As we prepare for Africa Day Festival 2025 in Lublin, we invite you to join us in celebrating this rich
              cultural heritage. Whether through music, dance, food, fashion, or simply learning more about African
              history and cultures, there are countless ways to participate in this meaningful global celebration.
            </p>
            <p className="font-medium mb-6">The rhythm of Africa Day beats in all of us. Join the celebration.</p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                <Link href="/info">View Festival Schedule</Link>
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
                      "The Cultural Significance of Africa Day Celebrations Around the World",
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

          {/* Related Articles */}
          <section className="border-t border-gray-200 pt-8 mt-12">
            <h2 className="text-xl font-serif mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/what-is-africa-day" className="group">
                <div className="flex gap-4 items-start">
                  <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/audience%2002.jpg-pCMNMzqWi7P9N6LTTb1MyWdJ22i53x.jpeg"
                      alt="Africa Day Festival celebration"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                      What is Africa Day and why you'll hear about it everywhere this spring in Lublin
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">April 1, 2025</p>
                  </div>
                </div>
              </Link>
              <Link href="/blog/african-community-in-lublin" className="group">
                <div className="flex gap-4 items-start">
                  <div className="relative w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9343-min.jpg-cU9EbM4CcKzAb7YQG1lhGsl6VfyGQa.jpeg"
                      alt="African community in Lublin"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900 group-hover:text-orange-600 transition-colors">
                      About the African Community in Lublin
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">March 25, 2025</p>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
