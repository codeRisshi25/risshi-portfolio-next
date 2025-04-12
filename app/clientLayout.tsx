"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useEffect, useState } from "react"

const inter = Inter({ subsets: ["latin"] })

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
    const metaDescription = document.createElement("meta")
    metaDescription.name = "description"
    metaDescription.content =
      "Portfolio website of Risshi Raj Sen, showcasing skills, projects, and experience in backend development and AI."
    document.head.appendChild(metaDescription)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
