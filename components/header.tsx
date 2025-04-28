"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Menu, X, Download, Github, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import ThemeToggle from "@/components/theme-toggle"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Learning", href: "#learning" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
    { name: "Terminal", href: "/terminal" },
  ]

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-terminal-blue/20" : "bg-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-terminal-blue via-terminal-cyan to-terminal-blue flex items-center justify-center text-background font-bold">
            RRS
          </div>
          <Link href="/" className="font-mono text-xl font-bold">
            <span className="text-terminal-blue">risshi</span>
            <span className="text-foreground">.</span>
            <span className="text-terminal-cyan">codes</span>
            <span className="text-foreground animate-blink">_</span>
          </Link>
        </motion.div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Desktop navigation */}
        <motion.nav
          className="hidden md:flex items-center gap-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {navItems.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              whileHover={{ y: -2 }}
            >
              <Link href={item.href} className="text-sm font-medium transition-colors hover:text-terminal-blue">
                {item.name}
              </Link>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-cyan hover:to-terminal-blue transition-all duration-300 shadow-glow-sm hover:shadow-glow-md"
            >
              <Link href="/risshi-resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Resume
              </Link>
            </Button>
          </motion.div>

          <ThemeToggle />

          <div className="flex items-center gap-2">
            <motion.a
              href="https://github.com/codeRisshi25"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: "#00b7ff" }}
              className="text-muted-foreground hover:text-terminal-blue transition-colors"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/risshi"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, color: "#00b7ff" }}
              className="text-muted-foreground hover:text-terminal-blue transition-colors"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </motion.a>
          </div>
        </motion.nav>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <motion.div
          className="md:hidden p-4 border-t border-terminal-blue/20 bg-card"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium transition-colors hover:text-terminal-blue p-2 rounded-md hover:bg-terminal-blue/10"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}

            <Button
              asChild
              className="bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-cyan hover:to-terminal-blue transition-all duration-300 shadow-glow-sm hover:shadow-glow-md mt-2"
            >
              <Link href="/risshi-resume.pdf" download>
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Link>
            </Button>

            <div className="flex items-center gap-4 pt-4 border-t border-terminal-blue/20">
              <a
                href="https://github.com/codeRisshi25"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-terminal-blue transition-colors"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/risshi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-terminal-blue transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </nav>
        </motion.div>
      )}
    </header>
  )
}
