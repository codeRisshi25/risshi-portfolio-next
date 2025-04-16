"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Instagram } from "lucide-react"
import ThemeSwitch from "@/components/theme-switch"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-terminal-blue/20 py-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-8 w-8 rounded-md bg-gradient-to-br from-terminal-blue via-terminal-cyan to-terminal-blue flex items-center justify-center text-background font-bold">
                RS
              </div>
              <span className="font-mono text-xl font-bold">
                <span className="text-terminal-blue">risshi</span>
                <span className="text-foreground">@</span>
                <span className="text-terminal-cyan">is-a.dev</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Backend Developer based in Greater Noida, India. Building robust systems and scalable server
              architectures. Specializing in API development, database optimization, and deployments.
            </p>

            <div className="mt-4">
              <ThemeSwitch />
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#about" className="text-muted-foreground hover:text-terminal-blue transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-muted-foreground hover:text-terminal-blue transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#skills" className="text-muted-foreground hover:text-terminal-blue transition-colors">
                  Skills
                </Link>
              </li>
              <li>
                <Link href="#learning" className="text-muted-foreground hover:text-terminal-blue transition-colors">
                  Learning
                </Link>
              </li>
              <li>
                <Link
                  href="#certifications"
                  className="text-muted-foreground hover:text-terminal-blue transition-colors"
                >
                  Certifications
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-muted-foreground hover:text-terminal-blue transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/terminal" className="text-muted-foreground hover:text-terminal-blue transition-colors">
                  Terminal
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Connect</h3>
            <div className="flex space-x-4 mb-4">
              <motion.a
                href="https://github.com/codeRisshi25"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-terminal-blue/10 text-terminal-blue hover:bg-terminal-blue/20 transition-colors"
                whileHover={{ y: -2 }}
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/code"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-terminal-blue/10 text-terminal-blue hover:bg-terminal-blue/20 transition-colors"
                whileHover={{ y: -2 }}
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="https://instagram.com/__risshi"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-terminal-blue/10 text-terminal-blue hover:bg-terminal-blue/20 transition-colors"
                whileHover={{ y: -2 }}
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </motion.a>
            </div>
            <p className="text-sm text-muted-foreground">
              Email: risshirajsen@gmail.com
              <br />
              Available for Interships and collaboration
            </p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-terminal-blue/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">© {currentYear} Risshi Raj Sen. All rights reserved.</p>
          <p className="text-xs text-muted-foreground mt-2 md:mt-0">
            <span className="font-mono">Designed & Built with ❤️ and ☕</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
