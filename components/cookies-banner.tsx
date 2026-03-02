"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

export function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookiesAccepted = localStorage.getItem("cookiesAccepted")
    if (!cookiesAccepted) {
      setShowBanner(true)
    }
  }, [])

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true")
    setShowBanner(false)
  }

  const declineCookies = () => {
    localStorage.setItem("cookiesAccepted", "false")
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-black bg-opacity-70 backdrop-blur-sm shadow-lg">
      <Card className="max-w-4xl mx-auto border-2 border-orange-300 bg-gradient-to-r from-orange-50 to-orange-100">
        <CardContent className="p-4 md:p-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2 text-orange-800">We Value Your Privacy</h3>
              <p className="text-sm text-gray-700">
                We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our
                traffic. By clicking "Accept All", you consent to our use of cookies as described in our Cookie Policy.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 mt-2 md:mt-0">
              <Button
                variant="outline"
                size="sm"
                onClick={declineCookies}
                className="whitespace-nowrap border-orange-400 text-orange-700 hover:bg-orange-100"
              >
                Decline
              </Button>
              <Button
                size="sm"
                onClick={acceptCookies}
                className="whitespace-nowrap bg-orange-500 hover:bg-orange-600 text-white"
              >
                Accept All
              </Button>
            </div>
            <button
              onClick={declineCookies}
              className="absolute top-2 right-2 text-orange-500 hover:text-orange-700"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
