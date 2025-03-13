"use client"

import { motion } from "framer-motion"

interface AnimatedGradientTextProps {
  text: string
  className?: string
}

export default function AnimatedGradientText({ text, className = "" }: AnimatedGradientTextProps) {
  return (
    <motion.span
      className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {text}
    </motion.span>
  );
}

