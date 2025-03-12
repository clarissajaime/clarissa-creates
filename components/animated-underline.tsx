"use client"

import type React from "react"

import { motion } from "framer-motion"

interface AnimatedUnderlineProps {
  children: React.ReactNode
  className?: string
  color?: string
}

export default function AnimatedUnderline({ children, className = "", color = "#8b5cf6" }: AnimatedUnderlineProps) {
  return (
    <span className={`relative inline-block ${className}`}>
      {children}
      <motion.span
        className="absolute left-0 right-0"
        style={{
          height: "0.4rem",
          bottom: "-0.3rem",
          background: color,
          borderRadius: "0.2rem",
        }}
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
    </span>
  )
}

