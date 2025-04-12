"use client"

import { Button } from "@/components/ui/button"
import { Terminal } from "lucide-react"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function TerminalButton() {
  const router = useRouter()
  const { theme } = useTheme()

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 1.5,
      }}
      whileHover={{
        scale: 1.1,
        rotate: 5,
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Button
        onClick={() => router.push("/terminal")}
        size="icon"
        className="h-14 w-14 rounded-full shadow-lg bg-gradient-to-r from-terminal-green to-terminal-cyan hover:from-terminal-cyan hover:to-terminal-green"
      >
        <Terminal className="h-6 w-6" />
        <span className="sr-only">Open Terminal</span>
      </Button>
    </motion.div>
  )
}
