"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun, Monitor } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex items-center space-x-2 p-4 bg-card rounded-lg border border-terminal-blue/20">
      <span className="text-sm font-medium mr-2">Theme:</span>
      <Button
        variant={theme === "light" ? "default" : "outline"}
        size="sm"
        onClick={() => setTheme("light")}
        className="rounded-md"
      >
        <Sun className="h-4 w-4 mr-1" /> Light
      </Button>
      <Button
        variant={theme === "dark" ? "default" : "outline"}
        size="sm"
        onClick={() => setTheme("dark")}
        className="rounded-md"
      >
        <Moon className="h-4 w-4 mr-1" /> Dark
      </Button>
      <Button
        variant={theme === "system" ? "default" : "outline"}
        size="sm"
        onClick={() => setTheme("system")}
        className="rounded-md"
      >
        <Monitor className="h-4 w-4 mr-1" /> System
      </Button>
    </div>
  )
}
