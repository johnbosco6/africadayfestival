import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DeveloperAcknowledgment } from "@/components/developer-acknowledgment"
import { LanguageProvider } from "@/hooks/useTranslation"
import { Analytics } from "@vercel/analytics/next"
import { CookiesBanner } from "@/components/cookies-banner"
import { WelcomeBanner } from "@/components/welcome-banner"
import { AudioPlayer } from "@/components/audio-player"
import type React from "react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Africa Day",
  description: "Celebrating African Culture, Creativity, and Commerce",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      url: "/logo.png",
    },
  ],
  generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/png" href="/logo.png" />
        <meta name="google-site-verification" content="Qx72KH_Snv_vcS5dOKRwTQwts-RiJxrbWev5hWa79Lw" />
      </head>
      <body className={`${inter.className} bg-white`}>
        <LanguageProvider>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <WelcomeBanner />
            <Header />
            <main>{children}</main>
            <DeveloperAcknowledgment />
            <Footer />
            <CookiesBanner />
            <AudioPlayer />
          </Suspense>
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
