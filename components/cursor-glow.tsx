"use client"

import { useEffect, useState } from "react"
import { useTheme } from "next-themes"

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const [hidden, setHidden] = useState(true)
  const { theme } = useTheme()

  useEffect(() => {
    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })

      const hoveredElement = document.elementFromPoint(e.clientX, e.clientY)
      const isLink =
        hoveredElement instanceof HTMLAnchorElement ||
        hoveredElement instanceof HTMLButtonElement ||
        hoveredElement?.closest("a") ||
        hoveredElement?.closest("button")

      setLinkHovered(!!isLink)
    }

    const onMouseDown = (): void => {
      setClicked(true)
    }

    const onMouseUp = (): void => {
      setClicked(false)
    }

    const onMouseLeave = (): void => {
      setHidden(true)
    }

    const onMouseEnter = (): void => {
      setHidden(false)
    }

    // Check if we're on a touch device
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0

    if (!isTouchDevice) {
      addEventListeners()
      setHidden(false)
    }

    return () => {
      removeEventListeners()
    }
  }, [])

  if (hidden) return null

  return (
    <>
      <div
        className="cursor-dot"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: clicked ? "12px" : linkHovered ? "10px" : "8px",
          height: clicked ? "12px" : linkHovered ? "10px" : "8px",
          backgroundColor: theme === "dark" ? "rgba(0, 200, 100, 0.8)" : "rgba(0, 120, 255, 0.8)",
        }}
      />
      <div
        className="cursor-ring"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          width: clicked ? "30px" : linkHovered ? "50px" : "40px",
          height: clicked ? "30px" : linkHovered ? "50px" : "40px",
          backgroundColor: theme === "dark" ? "rgba(0, 200, 100, 0.15)" : "rgba(0, 120, 255, 0.15)",
        }}
      />
    </>
  )
}
