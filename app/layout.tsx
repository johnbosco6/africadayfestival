import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/hooks/useTranslation"
import { Analytics } from "@vercel/analytics/react"
import { CookiesBanner } from "@/components/cookies-banner"
import type React from "react"
import { Suspense } from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Africa Day",
  description: "Celebrating African Culture, Creativity, and Commerce",
  icons: [
    {
      rel: "icon",
      type: "image/svg+xml",
      url: "/favicon.svg",
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
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <meta name="google-site-verification" content="jwbt53VNwEySAucjOB4Rd_a4ZwkFaoGldgX14NmWQnU" />
      </head>
      <body className={`${inter.className} bg-white`}>
        <LanguageProvider>
          <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
            <Header />
            <main>{children}</main>
            <Footer />
            <CookiesBanner />
          </Suspense>
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
