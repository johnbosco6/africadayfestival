"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Get Involved", href: "/get-involved" },
  { name: "Ongoing Programs", href: "/program" },
  { name: "Photo Gallery", href: "/gallery" },
  { name: "Videos", href: "/videos" },
  { name: "Blog", href: "/blog" }, // Make sure this is exactly "/blog"
  { name: "Upcoming Events", href: "/info" },
  { name: "Partners And Sponsors", href: "/partners" },
  { name: "Contact Us", href: "/contact" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex flex-col">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Africa Day Logo"
                width={50}
                height={50}
                className="h-12 w-auto object-contain transition-transform group-hover:scale-105"
              />
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold text-[#FF5C00] leading-tight">Africa Day</span>
                <span className="text-[10px] text-gray-600 leading-tight">Abraham D. Ministry Foundation</span>
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm text-gray-600 hover:text-[#FF5C00]">
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild className="bg-[#FF5C00] hover:bg-[#FF7A33] text-white">
              <Link href="/get-involved">Get Involved</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm text-gray-600 hover:text-[#FF5C00] px-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
