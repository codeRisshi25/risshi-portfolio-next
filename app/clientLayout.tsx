"use client"

import type React from "react"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"
import Header from "../components/header"
import Footer from "../components/footer"
import { useEffect, useState } from "react"

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Client-side rendering for GitHub Pages
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Add metadata for SEO
  useEffect(() => {
    document.title = "Risshi Raj Sen - Backend Developer & AI Enthusiast"
    
    // Meta description
    const metaDescription = document.createElement("meta")
    metaDescription.name = "description"
    metaDescription.content =
      "Portfolio website of Risshi Raj Sen, showcasing skills, projects, and experience in backend development and AI."
    document.head.appendChild(metaDescription)
    
    // Favicon
    const favicon = document.createElement("link")
    favicon.rel = "icon"
    favicon.href = "/favicon.ico"
    document.head.appendChild(favicon)
    
    // Open Graph image
    const ogImage = document.createElement("meta")
    ogImage.setAttribute("property", "og:image")
    ogImage.content = "me.jpg"
    document.head.appendChild(ogImage)
    
    // Twitter card
    const twitterCard = document.createElement("meta")
    twitterCard.name = "twitter:card"
    twitterCard.content = "summary_large_image"
    document.head.appendChild(twitterCard)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-inter">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
