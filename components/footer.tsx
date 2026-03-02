"use client"

import type React from "react"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Youtube } from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Footer() {
  const [email, setEmail] = useState("")
  const [subscriptionStatus, setSubscriptionStatus] = useState<"success" | "error" | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const response = await fetch("https://formspree.io/f/mldgwprz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      })

      if (response.ok) {
        setSubscriptionStatus("success")
        setEmail("")
      } else {
        setSubscriptionStatus("error")
      }
    } catch (error) {
      setSubscriptionStatus("error")
    }
  }

  return (
    <footer className="relative text-white py-12">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pexels-aaditya-arora-188236-592753-min.jpg-N2df1Bmkb7o8muzD0k85LaW7lJySrK.jpeg")',
        }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90"></div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-6 gap-8">
          <div>
            <Link href="/" className="block mb-4 group">
              <Image
                src="/logo.png"
                alt="Africa Day Logo"
                width={80}
                height={80}
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <h3 className="text-xl font-serif mb-2">Africa Day Festival</h3>
            <p className="text-sm text-gray-300">Celebrating African Culture, Creativity, and Commerce</p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm text-gray-300 hover:text-orange-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/program" className="text-sm text-gray-300 hover:text-orange-300 transition-colors">
                  Festival Program
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-sm text-gray-300 hover:text-orange-300 transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-300 hover:text-orange-300 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a
                  href="https://drive.google.com/file/d/1jI-ljI8uaxNXO_AQj42ci8BWDX8NFWnk/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-300 hover:text-orange-300 transition-colors"
                >
                  Financial Statements
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Blog</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-sm text-gray-300 hover:text-orange-300 transition-colors">
                  All Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/category/events"
                  className="text-sm text-gray-300 hover:text-orange-300 transition-colors"
                >
                  Event Updates
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/category/culture"
                  className="text-sm text-gray-300 hover:text-orange-300 transition-colors"
                >
                  Cultural Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/blog/category/interviews"
                  className="text-sm text-gray-300 hover:text-orange-300 transition-colors"
                >
                  Artist Interviews
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Contact</h4>
            <p className="text-sm mb-2 text-gray-300">Jozefa Mackiewicza 23/14 A, Lublin, 20-865</p>
            <p className="text-sm mb-2 text-gray-300">Phone: +48 576 046 862 (English), +48 725 097 661 (Polish)</p>
            <p className="text-sm text-gray-300">Email: abrahamdministryfoundation@gmail.com</p>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/Africa-Day-Lublin-2024/61558653247782/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook />
              </a>
              <a
                href="https://www.instagram.com/africaday.lublin/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram />
              </a>
              <a
                href="https://www.youtube.com/@AbrahamDMinistry/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Youtube />
              </a>
            </div>
          </div>
          <div className="md:col-span-2">
            <h4 className="text-lg font-medium mb-4">Subscribe to Our Newsletter</h4>
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
                Subscribe
              </Button>
            </form>
            {subscriptionStatus && (
              <p className={`mt-2 text-sm ${subscriptionStatus === "success" ? "text-green-400" : "text-red-400"}`}>
                {subscriptionStatus === "success"
                  ? "Thank you for subscribing!"
                  : "An error occurred. Please try again."}
              </p>
            )}
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-8 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-center text-sm text-gray-300 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Africa Day Festival. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/privacy-policy" className="text-gray-300 hover:text-orange-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-gray-300 hover:text-orange-300 transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-gray-300 hover:text-orange-300 transition-colors">
              Contact Us
            </Link>
          </div>
        </div>

        {/* Powered by POLYTECHNICA */}
        <div className="mt-6 text-center">
          <a
            href="https://www.polytechnica.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center"
          >
            <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
              Built and Powered by
            </span>
            <span className="ml-1 font-medium text-purple-400 group-hover:text-purple-300 transition-colors">
              POLYTECHNICA.NET
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
