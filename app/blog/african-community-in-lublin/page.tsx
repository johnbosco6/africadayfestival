"use client"

import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, UserIcon, ClockIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AfricanCommunityArticle() {
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
            About the African Community in Lublin
          </h1>

          <div className="flex flex-wrap items-center text-gray-600 mb-6 gap-3">
            <span className="flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1" />
              March 25, 2025
            </span>
            <span className="hidden sm:block mx-1">•</span>
            <span className="flex items-center">
              <UserIcon className="h-4 w-4 mr-1" />
              Editorial Team
            </span>
            <span className="hidden sm:block mx-1">•</span>
            <span className="flex items-center">
              <ClockIcon className="h-4 w-4 mr-1" />
              12 min read
            </span>
          </div>
        </header>

        {/* Hero Image */}
        <figure className="mb-10">
          <div className="relative h-[400px] w-full rounded-lg overflow-hidden">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9343-min.jpg-cU9EbM4CcKzAb7YQG1lhGsl6VfyGQa.jpeg"
              alt="African community members in Lublin"
              fill
              className="object-cover"
              priority
            />
          </div>
          <figcaption className="text-sm text-center text-gray-600 mt-2 italic">
            Members of the African community celebrating together in Lublin
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
              <a href="#students" className="text-orange-600 hover:text-orange-700 block hover:underline">
                African Students Enriching Lublin's Academic Scene
              </a>
              <a href="#cultural" className="text-orange-600 hover:text-orange-700 block hover:underline">
                Cultural Celebrations and Associations
              </a>
              <a href="#residents" className="text-orange-600 hover:text-orange-700 block hover:underline">
                Long-Term Residents and Community Life
              </a>
              <a href="#multicultural" className="text-orange-600 hover:text-orange-700 block hover:underline">
                Embracing a Multicultural Lublin
              </a>
            </nav>
          </CardContent>
        </Card>

        {/* Introduction */}
        <section id="introduction" className="mb-12">
          <p className="text-xl font-medium mb-4">
            Lublin, a historic city in eastern Poland, is also home to a growing and vibrant African community.
          </p>
          <p className="text-lg mb-4">
            In recent years, more students and families from various African countries have made Lublin their home. They
            contribute to the city's academic life, cultural diversity, and entrepreneurial scene, all while finding
            Lublin a welcoming place to live.
          </p>
          <p className="text-lg mb-4">
            The atmosphere is friendly and warm – locals often show genuine curiosity and openness toward different
            cultures, making it easier for newcomers to settle in.
          </p>
        </section>

        {/* African Students */}
        <section id="students" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
            African Students Enriching Lublin's Academic Scene
          </h2>

          <div className="flex flex-col md:flex-row gap-6 mb-6">
            <div className="md:w-2/3">
              <p className="mb-4">
                One prominent part of Lublin's African community is the large number of African students at local
                universities. Lublin's universities, such as UMCS, KUL, and the Medical University, have seen a steady
                rise in enrollments from Africa.
              </p>
              <p className="mb-4">
                For example, in 2018 UMCS welcomed over 800 international first-year students – nearly 10% of the
                freshman class – with many coming from Africa and Asia. This trend has only grown. By 2020, observers
                noted a significant increase in students from countries like Zimbabwe, Kenya, Tanzania, and Nigeria
                studying in Lublin.
              </p>
            </div>
            <div className="md:w-1/3">
              <div className="bg-orange-100 p-4 rounded-lg">
                <h3 className="font-medium mb-2">Student Diversity</h3>
                <p className="text-sm">
                  Lublin's universities host students from countries including Zimbabwe, Kenya, Tanzania, Nigeria,
                  Ghana, and many other African nations, creating a rich multicultural campus environment.
                </p>
              </div>
            </div>
          </div>

          <div className="relative h-60 w-full rounded-lg overflow-hidden mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9733.jpg-KD3CdqpBXUAXLyKh9zvXNQSsPi8VI6.jpeg"
              alt="African students at a university event in Lublin"
              fill
              className="object-cover"
            />
          </div>

          <p className="mb-4">
            Local colleges are also attracting students from Africa. In 2023, the Lublin Academy at WSEI celebrated the
            graduation of 65 nursing students, mainly from Zimbabwe and Gambia, who had completed their degrees in
            English. These graduation ceremonies turned into lively, joyful gatherings.
          </p>

          <blockquote className="border-l-4 border-orange-500 pl-4 italic my-6 text-gray-700">
            "I have never encountered racism here. In that respect, Lublin is very safe for us."
            <footer className="text-sm mt-2 font-medium">— International student from Zimbabwe</footer>
          </blockquote>

          <p className="mb-4">
            African students often form tight-knit support networks and associations. At UMCS, for instance, there is a
            Foreign Students Union (once led by a student from Zimbabwe) that helps newcomers adapt and organizes social
            events. Many Polish students also volunteer as mentors or buddies for foreign students, creating
            cross-cultural friendships.
          </p>

          <p className="mb-4">
            To help foreign students feel at home, universities and the city have introduced initiatives that make life
            easier. UMCS opened a dedicated Welcome Centre to assist with everything from enrollment to finding housing.
            The city government launched the "LOGIN: Lublin" program, which provides newcomers (especially students)
            with a special card for discounts at local businesses.
          </p>
        </section>

        {/* Cultural Celebrations */}
        <section id="cultural" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
            Cultural Celebrations and Associations
          </h2>

          <p className="mb-4">
            Outside the classroom, the African community (students and long-term residents alike) actively shares their
            culture with the people of Lublin. One of the highlights each year is the Africa Day Festival, usually held
            around May 25th (International Africa Day).
          </p>

          <p className="mb-4">
            In 2024, for example, Africa Day was celebrated with sunshine and a blaze of color at Plac Litewski (the
            central square). Co-organized by local Africans and Vincent Pol University, it turned the heart of the city
            into a mini-Africa for a day.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Africa Day Festival Highlights</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Flag parade with representatives from various African nations</li>
                <li>Traditional dance and drumming lessons</li>
                <li>Fashion shows displaying vibrant African attire</li>
                <li>Food and drink stalls offering African delicacies</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <h3 className="font-medium mb-2">Cultural Organizations</h3>
              <p className="mb-2">Several organizations support African culture in Lublin:</p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Abraham Diomande Foundation</li>
                <li>Foreign Students Union at UMCS</li>
                <li>Multicultural Lublin initiative</li>
              </ul>
            </div>
          </div>

          <blockquote className="border-l-4 border-orange-500 pl-4 italic my-6 text-gray-700">
            "We need such events because during them we can showcase our culture, our traditions... We are proud of it."
            <footer className="text-sm mt-2 font-medium">— Vincent Pol University student from Zimbabwe</footer>
          </blockquote>

          <p className="mb-4">
            Aside from Africa Day, Lublin hosts a broader Multicultural festival (Wielokulturowy Lublin) each year,
            where various minority communities – Ukrainian, Georgian, Jewish, African, and others – come together to
            celebrate diversity. The African diaspora in Lublin participates actively, perhaps by setting up stands with
            African crafts, music performances, or workshops.
          </p>
        </section>

        {/* Long-Term Residents */}
        <section id="residents" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
            Long-Term Residents and Community Life
          </h2>

          <p className="mb-4">
            Not everyone leaves after graduation; in fact, a number of African expats have decided to make Lublin their
            long-term home. Some alumni from Lublin's universities loved the city so much that they chose to stay and
            work in Lublin or elsewhere in Poland, joining the local workforce.
          </p>

          <div className="relative h-60 w-full rounded-lg overflow-hidden mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9792.jpg-WG60ywZf56GcS4PiNAoGEvhFthZHTj.jpeg"
              alt="African community members at a local event in Lublin"
              fill
              className="object-cover"
            />
          </div>

          <p className="mb-4">
            African professionals in Lublin have begun contributing in various fields. You can find doctors from Nigeria
            at local hospitals, IT specialists from Kenya in Lublin's tech companies, and English teachers from Ghana at
            language schools. Their presence adds to the cosmopolitan vibe of the city.
          </p>

          <p className="mb-4">
            The everyday life of the African community in Lublin often revolves around both preserving their own culture
            and embracing Polish culture. There are a few African-run businesses popping up around town. One is an
            African food shop called Afryka Shop (operated by Afroero Investment), which offers African products and
            grocery items – a lifesaver for anyone craving fufu flour, plantains, or authentic spices from back home.
          </p>

          <p className="mb-4">
            Interaction between the African community and local Lubliners is generally very positive. Many African
            residents quickly pick up some Polish (especially the basics like dzień dobry – good day, and dziękuję –
            thank you). Meanwhile, some Lublin natives have learned greetings in Igbo, French, or Swahili to make their
            neighbors feel welcome.
          </p>
        </section>

        {/* Multicultural Lublin */}
        <section id="multicultural" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
            Embracing a Multicultural Lublin
          </h2>

          <p className="mb-4">
            Lublin's African community may not be as large as in Warsaw or other capitals, but it punches above its
            weight in terms of impact. Their presence is visible and cherished – from lively university campuses to the
            rhythmic beats echoing in the Old Town during cultural festivals.
          </p>

          <p className="mb-4">
            The community includes students pursuing dreams, families building a future, and entrepreneurs opening new
            avenues, all contributing to Lublin's evolving story. The city authorities and local universities actively
            support multicultural initiatives, signaling that everyone – regardless of origin – is a valued resident of
            Lublin.
          </p>

          <p className="mb-4">
            For anyone curious about multicultural life in Lublin, the African community offers a wonderful case study
            of integration done right. You can attend an African dance workshop during the Wielokulturowy Lublin
            festival and later chat with the performers who might be students at the Medical University. You might savor
            a plate of East African curry at a local restaurant and learn it's a Nigerian PhD student who started the
            venture.
          </p>

          <p className="mb-4">
            In summary, the African community in Lublin has grown into a vibrant, engaged group that adds richness to
            the city's cultural mosaic. Through their academic achievements, cultural festivals, businesses, and
            everyday interactions, they showcase the beauty of diversity. Lublin, with its open-hearted residents and
            supportive institutions, has become a place where a student from Harare or Lagos can arrive and soon feel
            like a true Lubliner.
          </p>
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
                    "About the African Community in Lublin",
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
