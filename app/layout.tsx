import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import CursorGlow from "@/components/cursor-glow"
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Risshi Raj Sen | Backend Developer",
  description:
    "Portfolio of Risshi Raj Sen, a backend developer showcasing projects, skills, and expertise in server-side technologies.",
  openGraph: {
    title: "Risshi Raj Sen | Backend Developer",
    description: "Portfolio of Risshi Raj Sen, a backend developer showcasing projects, skills, and expertise in server-side technologies.",
    images: [
      {
        url: "/me.jpeg",
        width: 800,
        height: 600,
        alt: "Risshi Raj Sen",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Risshi Raj Sen | Backend Developer",
    description: "Portfolio of Risshi Raj Sen, a backend developer showcasing projects, skills, and expertise in server-side technologies.",
    images: ["/me.jpeg"],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=JetBrains+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true} disableTransitionOnChange>
          <CursorGlow />
          <div className="flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
