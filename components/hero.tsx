"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import Typed from "typed.js"
import ServerRack from "@/components/server-rack"
import Image from 'next/image';

export default function Hero() {
  const typedElement = useRef<HTMLSpanElement>(null)
  const typed = useRef<Typed | null>(null)

  useEffect(() => {
    if (typedElement.current) {
      typed.current = new Typed(typedElement.current, {
        strings: [
          "Backend Developer",
          "API Architect",
          "Database Engineer",
          "AI Enthusiast",
          "3d Artist",
          "Polytech Dev",
          "Gamer",
          "Cat Person",
        ],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        loop: true,
      })
    }

    return () => {
      typed.current?.destroy()
    }
  }, [])

  return (
    <section id="top" className="min-h-[80vh] lg:min-h-[90vh] flex flex-col justify-center relative overflow-hidden pt-10 pb-0 lg:py-20">
      {/* Grid background pattern */}
      <div className="absolute inset-0 grid-pattern opacity-20"></div>

      {/* Animated gradient circles */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-terminal-blue/20 dark:bg-terminal-green/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-terminal-cyan/20 rounded-full filter blur-3xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col space-y-4 lg:space-y-6"
        >
          {/* Mobile-only profile image */}
          <div className="flex justify-center lg:hidden mb-8">
            <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-terminal-blue/30 dark:border-terminal-green/30 shadow-glow-md">
              <Image
                src="/me.jpeg"
                alt="Risshi Raj Sen"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20"></div>
            </div>
          </div>

          <div className="inline-flex items-center px-3 py-1 rounded-full border border-terminal-blue/30 dark:border-terminal-green/30 bg-terminal-blue/10 dark:bg-terminal-green/10 text-terminal-blue dark:text-terminal-green text-sm font-mono">
            <span className="w-2 h-2 bg-terminal-cyan dark:bg-terminal-green rounded-full mr-2 animate-pulse"></span>
            System Status: Online
          </div>

          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-gradient">Risshi Raj Sen</span>
          </h1>

          <h2 className="text-2xl md:text-3xl font-medium text-muted-foreground">
            <span ref={typedElement}></span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-lg">
            Backend dev by trade, tech explorer by passion. I love digging into new tools, playing with different parts
            of the stack, and constantly leveling up my skills.
          </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 relative z-10">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-terminal-blue to-terminal-cyan hover:from-terminal-cyan hover:to-terminal-blue dark:from-terminal-green dark:to-terminal-cyan dark:hover:from-terminal-cyan dark:hover:to-terminal-green transition-all duration-300 shadow-glow-sm hover:shadow-glow-md"
            >
              <Link
              href="#projects">
              Explore Projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-terminal-blue/50 dark:border-terminal-green/50 text-terminal-blue dark:text-terminal-green hover:bg-terminal-blue/10 dark:hover:bg-terminal-green/10 transition-all duration-300"
            >
              <Link
              href="#contact"
              onClick={(e) => {
              const contactElement = document.getElementById("contact");
              if (contactElement) {
              e.preventDefault();
              contactElement.scrollIntoView({ behavior: "smooth" });
              }
              }}
              >
              Get in Touch
              </Link>
            </Button>
            </div>

          <div className="pt-4 lg:pt-8 flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-terminal-cyan dark:bg-terminal-green mr-2"></div>
              <span>Available for Internships</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-terminal-blue dark:bg-terminal-green mr-2"></div>
              <span>Based in Noida</span>
            </div>
          </div>
        </motion.div>

        {/* Hide this entire column on mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[500px] relative hidden lg:block"
        >
          {/* Profile image - enhanced version */}
          <div className="absolute inset-0 bg-gradient-to-r from-terminal-blue/10 to-terminal-cyan/10 dark:from-terminal-green/10 dark:to-terminal-cyan/10 rounded-lg border border-terminal-blue/30 dark:border-terminal-green/30 overflow-hidden p-6 flex flex-col justify-between">
            <div className="flex justify-center">
              <div className="relative w-48 h-48 rounded-full overflow-hidden border-2 border-terminal-blue/30 dark:border-terminal-green/30 shadow-glow-md">
                <Image
                  src="/me.jpeg"
                  alt="Risshi Raj Sen"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/20"></div>
              </div>
            </div>

            {/* Server rack visualization */}
            <ServerRack />

            {/* Overlay elements for terminal effect */}
            <div className="absolute top-4 left-4 font-mono text-xs text-terminal-blue dark:text-terminal-green opacity-70">
              USER.PROFILE v2.5.1
            </div>
            <div className="absolute top-4 right-4 font-mono text-xs text-terminal-cyan dark:text-terminal-green opacity-70">
              SYS:ACTIVE
            </div>
            <div className="absolute bottom-4 left-4 font-mono text-xs text-terminal-blue dark:text-terminal-green opacity-70">
              LOCATION:GREATER NOIDA
            </div>
            <div className="absolute bottom-4 right-4 font-mono text-xs text-terminal-cyan dark:text-terminal-green opacity-70">
              UPTIME:1337d:13h:37m
            </div>

            {/* Grid lines */}
            <div className="absolute inset-0 grid-pattern opacity-30"></div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
