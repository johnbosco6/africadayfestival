"use client"

import Link from "next/link"
import Image from "next/image"
import { CalendarIcon, UserIcon, ClockIcon, Heart, Music, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function MeetTheFounderArticle() {
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
            Meet the Founder – Dr. Abraham and AbrahamD Ministry Foundation in Lublin
          </h1>

          <div className="flex flex-wrap items-center text-gray-600 mb-6 gap-3">
            <span className="flex items-center">
              <CalendarIcon className="h-4 w-4 mr-1" />
              March 15, 2025
            </span>
            <span className="hidden sm:block mx-1">•</span>
            <span className="flex items-center">
              <UserIcon className="h-4 w-4 mr-1" />
              Editorial Team
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
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_1749.jpg-QlBvep7fRHWvPvHjAXm8V2PbSTrQAN.jpeg"
              alt="Dr. Abraham Diomande performing"
              fill
              className="object-cover"
              priority
            />
          </div>
          <figcaption className="text-sm text-center text-gray-600 mt-2 italic">
            Dr. Abraham Diomande performing at a community event in Lublin
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
              <a href="#compassionate-leader" className="text-orange-600 hover:text-orange-700 block hover:underline">
                Dr. Abraham: A Compassionate Leader in Lublin
              </a>
              <a href="#vision-mission" className="text-orange-600 hover:text-orange-700 block hover:underline">
                The Vision and Mission of AbrahamD Ministry Foundation
              </a>
              <a href="#positive-impact" className="text-orange-600 hover:text-orange-700 block hover:underline">
                Making a Positive Impact in the Lublin Community
              </a>
              <a href="#legacy" className="text-orange-600 hover:text-orange-700 block hover:underline">
                A Lasting Legacy of Love in Lublin
              </a>
            </nav>
          </CardContent>
        </Card>

        {/* Introduction */}
        <section id="introduction" className="mb-12">
          <p className="text-xl font-medium mb-4">
            If you've been around community events in Lublin lately, you may have noticed the warm smile and uplifting
            presence of Dr. Abraham.
          </p>
          <p className="text-lg mb-4">
            He's the heart and soul behind the AbrahamD Ministry Foundation, an organization making a positive
            difference right here in Lublin. Dr. Abraham's friendly approach and passion for helping others have
            endeared him to many locals.
          </p>
          <p className="text-lg mb-4">
            In this post, let's meet the founder himself and explore the vision and impact of his foundation on our
            city.
          </p>
        </section>

        {/* Compassionate Leader */}
        <section id="compassionate-leader" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
            Dr. Abraham: A Compassionate Leader in Lublin
          </h2>

          <p className="mb-4">
            Dr. Abraham (full name Abraham Khalil Emmanuel Diomande) may have international roots, but he has made
            Lublin his home and mission field. As an experienced pastor and community leader, he is known for his
            approachable demeanor and genuine care for people.
          </p>

          <p className="mb-4">
            Whether he's greeting neighbors at a local gathering or mentoring young volunteers, Dr. Abraham leads with
            faith, compassion, and a hands-on attitude. He founded the AbrahamD Ministry Foundation to turn his vision
            of a caring, united community into reality.
          </p>

          <div className="bg-orange-50 p-6 rounded-lg mb-6">
            <h3 className="font-medium text-lg mb-3">Dr. Abraham's Background</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Music className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                <div>
                  <span className="font-medium">Gospel Artist</span> with performances across Europe and Africa
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-orange-600 mr-2 mt-0.5"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                <div>
                  <span className="font-medium">Medical Doctor</span> with a passion for healthcare outreach
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-orange-600 mr-2 mt-0.5"
                >
                  <path d="m2 9 3-3 3 3" />
                  <path d="M13 18H7a2 2 0 0 1-2-2V6" />
                  <path d="m22 15-3 3-3-3" />
                  <path d="M11 6h6a2 2 0 0 1 2 2v10" />
                </svg>
                <div>
                  <span className="font-medium">Pastor</span> dedicated to spiritual guidance and community service
                </div>
              </li>
            </ul>
          </div>

          <p className="mb-4">
            In every interaction, Dr. Abraham exemplifies inclusive leadership. He often says that his faith isn't meant
            to be kept to himself – it's something to be shared through acts of love and service. This mindset has
            helped him build bridges across cultures and inspire those around him.
          </p>

          <p className="mb-4">
            Many in Lublin who have met Dr. Abraham describe him as enthusiastic, kind-hearted, and inspiring – someone
            who makes you feel like a friend from the moment you meet him. It's clear that his life experiences abroad
            and his deep faith have shaped a leader who truly understands the importance of community.
          </p>
        </section>

        {/* Vision and Mission */}
        <section id="vision-mission" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
            The Vision and Mission of AbrahamD Ministry Foundation
          </h2>

          <p className="mb-4">
            AbrahamD Ministry Foundation is a registered non-profit organization based in Lublin, driven by a simple yet
            powerful mission: to spread hope, faith, and love through community engagement. Dr. Abraham established the
            foundation with the belief that bringing people together in positive ways can transform lives.
          </p>

          <p className="mb-4">
            The foundation's vision is rooted in both spiritual and practical outreach, aiming to uplift those in need
            and strengthen bonds among Lublin's residents. It's not just about one church or one group – it's about
            uniting the wider community under values of kindness, respect, and mutual support.
          </p>

          <div className="relative h-60 w-full rounded-lg overflow-hidden mb-6">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_9733.jpg-KD3CdqpBXUAXLyKh9zvXNQSsPi8VI6.jpeg"
              alt="Community event organized by AbrahamD Ministry Foundation"
              fill
              className="object-cover"
            />
          </div>

          <p className="mb-4">
            At its core, the foundation is dedicated to spreading a message of faith, hope, and love throughout the
            community. How does it achieve this? By organizing activities and initiatives that connect people from all
            walks of life.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="flex items-start">
              <div className="bg-orange-100 p-2 rounded-full mr-4 flex-shrink-0">
                <Music className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Worship Workshops and Training</h3>
                <p className="text-gray-700">
                  The foundation hosts gospel music workshops and worship seminars for local choirs and newcomers alike.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 p-2 rounded-full mr-4 flex-shrink-0">
                <Heart className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Charitable Outreach</h3>
                <p className="text-gray-700">
                  Helping those in need through benefit concerts and drives to aid various groups, including refugee
                  families and children battling illness.
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-orange-100 p-2 rounded-full mr-4 flex-shrink-0">
                <Users className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h3 className="font-medium mb-1">Intercultural Exchange</h3>
                <p className="text-gray-700">
                  Promoting cultural understanding through festivals and cultural evenings that celebrate diversity.
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
                  <path d="M3 12h18" />
                  <path d="M3 6h18" />
                  <path d="M3 18h18" />
                </svg>
              </div>
              <div>
                <h3 className="font-medium mb-1">International Missions of Mercy</h3>
                <p className="text-gray-700">
                  Medical mission trips to African countries, providing basic first-aid supplies and healthcare support.
                </p>
              </div>
            </div>
          </div>

          <p className="mb-4">
            All these efforts align with Dr. Abraham's guiding principle: faith should be lived out through service. By
            combining spiritual inspiration with practical help, the AbrahamD Ministry Foundation creates opportunities
            for people to come together, learn from each other, and make a real difference.
          </p>
        </section>

        {/* Positive Impact */}
        <section id="positive-impact" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
            Making a Positive Impact in the Lublin Community
          </h2>

          <p className="mb-4">
            One of the best ways to understand Dr. Abraham's work is to see it in action. Over the past few years, the
            AbrahamD Ministry Foundation has touched many lives in Lublin through various programs and events.
          </p>

          <div className="bg-orange-50 p-6 rounded-lg mb-6">
            <h3 className="font-medium text-lg mb-3">Key Community Initiatives</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Heart className="h-5 w-5 text-orange-600 mr-2 mt-0.5" />
                <div>
                  <span className="font-medium">Supporting Refugees in Need:</span> Organized "Gospel for Ukraine"
                  charity concert, raising funds for refugee centers in Lublin.
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-orange-600 mr-2 mt-0.5"
                >
                  <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
                  <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
                  <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
                  <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
                </svg>
                <div>
                  <span className="font-medium">Bringing Hope Behind Bars:</span> Performed concerts at Lublin prison,
                  bringing hope and reflection to inmates.
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-orange-600 mr-2 mt-0.5"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
                <div>
                  <span className="font-medium">Helping Local Children and Hospitals:</span> Organized charity concerts
                  for children with cancer at the local pediatric hospital.
                </div>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-orange-600 mr-2 mt-0.5"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                </svg>
                <div>
                  <span className="font-medium">Celebrating Diversity in Lublin:</span> Played a key role in organizing
                  Lublin's Africa Day Festival and other cultural events.
                </div>
              </li>
            </ul>
          </div>

          <blockquote className="border-l-4 border-orange-500 pl-4 italic my-6 text-gray-700">
            "Dr. Abraham's work through the foundation has touched lives across Lublin – from helping those in crisis to
            bringing joy on a sunny festival day."
          </blockquote>

          <p className="mb-4">
            Beyond these highlights, Dr. Abraham and the foundation stay active in countless other ways – from
            conducting worship nights and youth mentorship sessions, to simply being there for community members in
            times of need. He has led workshops and gospel events not only in Lublin but also in nearby towns like
            Świdnik and Chełm, spreading positivity across our region.
          </p>
        </section>

        {/* Legacy of Love */}
        <section id="legacy" className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-serif mb-6 border-b border-orange-200 pb-2">
            A Lasting Legacy of Love in Lublin
          </h2>

          <p className="mb-4">
            Through all these efforts, Dr. Abraham's impact on Lublin has been undeniably positive. He often humbly
            credits "the grace of God and the goodness of people" for the foundation's success. But it's also clear that
            his own dedication and loving leadership have been the driving force behind many of these community
            blessings.
          </p>

          <p className="mb-4">
            By leading with example – rolling up his sleeves, connecting with people personally, and following through
            on promises – Dr. Abraham has built a strong reputation in Lublin as someone you can trust and count on.
          </p>

          <p className="mb-4">
            As the AbrahamD Ministry Foundation continues to grow, Dr. Abraham remains committed to expanding its reach
            while keeping its roots firmly in the local community. Future plans include more youth programs, cultural
            events, and outreach projects to ensure that the spirit of hope continues to flourish in Lublin.
          </p>

          <p className="mb-4">
            In a world that often focuses on differences, Dr. Abraham is a reminder of what we can achieve when we focus
            on faith, unity, and love. His work through the AbrahamD Ministry Foundation has touched lives across Lublin
            – from helping those in crisis to bringing joy on a sunny festival day. And perhaps the most beautiful part
            is that he makes it fun and heartwarming along the way, with music, laughter, and genuine fellowship.
          </p>

          <p className="mb-4">
            Lublin is truly blessed to have Dr. Abraham and his foundation as part of our community. His story shows
            that one person's vision, when paired with action and a lot of heart, can spark positive change that ripples
            out to many others.
          </p>

          <p className="mb-4">
            In meeting Dr. Abraham and learning about the AbrahamD Ministry Foundation, we don't just get to know an
            individual – we get to witness the power of community, kindness, and faith in action. And that is something
            that continues to inspire Lublin, one event and one life at a time.
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
                    "Meet the Founder – Dr. Abraham and AbrahamD Ministry Foundation in Lublin",
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
