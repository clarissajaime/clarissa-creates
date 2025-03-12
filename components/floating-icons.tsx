"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Code, Cpu, Database, Lightbulb, Monitor, Rocket, Server } from "lucide-react"

interface FloatingIconProps {
  icon: React.ReactNode
  x: string
  y: string
  delay: number
  duration: number
}

function FloatingIcon({ icon, x, y, delay, duration }: FloatingIconProps) {
  return (
    <motion.div
      className="absolute text-primary/20 dark:text-primary/10"
      style={{ left: x, top: y }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
    >
      <motion.div
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        {icon}
      </motion.div>
    </motion.div>
  )
}

export default function FloatingIcons() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const icons = [
    { icon: <Code size={32} />, x: "10%", y: "20%", delay: 0.2, duration: 4 },
    { icon: <Lightbulb size={28} />, x: "85%", y: "15%", delay: 0.5, duration: 5 },
    { icon: <BookOpen size={30} />, x: "20%", y: "85%", delay: 0.8, duration: 4.5 },
    { icon: <Cpu size={26} />, x: "80%", y: "75%", delay: 1.1, duration: 5.5 },
    { icon: <Rocket size={24} />, x: "50%", y: "30%", delay: 1.4, duration: 6 },
    { icon: <Database size={22} />, x: "15%", y: "60%", delay: 1.7, duration: 5 },
    { icon: <Server size={24} />, x: "75%", y: "40%", delay: 2, duration: 4.8 },
    { icon: <Monitor size={26} />, x: "40%", y: "80%", delay: 2.3, duration: 5.2 },
  ]

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {icons.map((icon, index) => (
        <FloatingIcon key={index} {...icon} />
      ))}
    </div>
  )
}

