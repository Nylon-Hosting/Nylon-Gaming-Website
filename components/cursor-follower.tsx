"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { useTheme } from "next-themes"

export function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isClient, setIsClient] = useState(false)
  const isMobile = useMobile()
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    setIsClient(true)

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", updateMousePosition)

    return () => {
      window.removeEventListener("mousemove", updateMousePosition)
    }
  }, [])

  if (!isClient || isMobile) return null

  return (
    <AnimatePresence>
      <motion.div
        className="cursor-follower"
        animate={{
          x: mousePosition.x - 750,
          y: mousePosition.y - 750,
          opacity: resolvedTheme === "dark" ? 1 : 0.7,
        }}
        transition={{
          type: "spring",
          damping: 25,
          stiffness: 150,
          mass: 0.8,
        }}
      />
    </AnimatePresence>
  )
}

