"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Loader2 } from "lucide-react"
import { useTheme } from "next-themes"

export default function PageLoader() {
  const [progress, setProgress] = useState(0)
  const [statusMessages, setStatusMessages] = useState<string[]>([])
  const { theme } = useTheme()

  const serverStatusMessages = [
    "Initializing system...",
    "Establishing secure connection...",
    "Loading environment variables...",
    "Starting backend services...",
    "Connecting to database...",
    "Verifying API endpoints...",
    "Optimizing response time...",
    "Caching resources...",
    "Finalizing startup sequence...",
    "System ready!",
  ]

  useEffect(() => {
    let currentProgress = 0
    let messageIndex = 0

    const progressInterval = setInterval(() => {
      if (currentProgress < 100) {
        // Increment by random amount between 5-15
        const increment = Math.floor(Math.random() * 10) + 15
        currentProgress = Math.min(100, currentProgress + increment)
        setProgress(currentProgress)

        // Add new status message at certain progress points
        if (currentProgress > messageIndex * 10 && messageIndex < serverStatusMessages.length) {
          setStatusMessages((prev) => [...prev, serverStatusMessages[messageIndex]])
          messageIndex++
        }
      } else {
        clearInterval(progressInterval)
      }
    }, 400)

    return () => clearInterval(progressInterval)
  }, [serverStatusMessages])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <div className="w-full max-w-md px-4">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-terminal-blue via-terminal-cyan to-terminal-blue animate-spin-slow opacity-75 blur-sm"></div>
          <div className="absolute inset-2 bg-background rounded-full flex items-center justify-center">
            <Loader2 className="h-12 w-12 text-terminal-blue animate-spin" />
          </div>
        </div>

        <h2 className="text-xl font-mono text-center mb-6 text-terminal-blue">System Initialization</h2>

        <div className="mb-4">
          <div className="flex justify-between text-sm font-mono mb-2">
            <span className="text-muted-foreground">Loading progress</span>
            <span className="text-terminal-blue">{progress}%</span>
          </div>
          <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-terminal-blue to-terminal-cyan"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <div className="border border-terminal-blue/30 rounded-md p-3 bg-card/50 h-40 overflow-y-auto font-mono text-xs">
          <div className="terminal-header mb-2">
            <div className="flex space-x-2">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
            </div>
          </div>

          {statusMessages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="mb-1"
            >
              <span className="text-terminal-blue mr-2">&gt;</span>
              <span className={message === "System ready!" ? "text-terminal-cyan" : ""}>{message}</span>
            </motion.div>
          ))}

          {progress < 100 && (
            <div className="flex items-center">
              <span className="text-terminal-blue mr-2">&gt;</span>
              <span className="animate-pulse">_</span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
