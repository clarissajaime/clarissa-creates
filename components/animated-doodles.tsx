"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function AnimatedDoodles() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top left - Code brackets */}
      <motion.div
        className="absolute top-[10%] left-[5%] dark:text-slate-700 text-slate-200 opacity-70"
        initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
        animate={{ opacity: 0.7, scale: 1, rotate: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M40 20C30 30 25 50 25 60C25 70 30 90 40 100"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M80 20C90 30 95 50 95 60C95 70 90 90 80 100"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Top right - Light bulb */}
      <motion.div
        className="absolute top-[15%] right-[8%] dark:text-slate-700 text-slate-200 opacity-70"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 0.7, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <svg
          width="100"
          height="120"
          viewBox="0 0 100 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M50 5C35 5 20 20 20 40C20 55 35 65 40 70C45 75 45 80 45 85V95H55V85C55 80 55 75 60 70C65 65 80 55 80 40C80 20 65 5 50 5Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 105H60"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M45 115H55"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M40 40L50 50L60 40"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Bottom left - Book */}
      <motion.div
        className="absolute bottom-[15%] left-[8%] dark:text-slate-700 text-slate-200 opacity-70"
        initial={{ opacity: 0, rotate: -10 }}
        animate={{ opacity: 0.7, rotate: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <svg
          width="120"
          height="100"
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 15C10 10 15 5 20 5H100C105 5 110 10 110 15V85C110 90 105 95 100 95H20C15 95 10 90 10 85V15Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60 5V95"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M30 30H40"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M30 50H40"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M30 70H40"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M80 30H90"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M80 50H90"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M80 70H90"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Bottom right - Robot */}
      <motion.div
        className="absolute bottom-[10%] right-[5%] dark:text-slate-700 text-slate-200 opacity-70"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.7, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        <svg
          width="120"
          height="120"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="30"
            y="40"
            width="60"
            height="60"
            rx="5"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="45" cy="60" r="5" stroke="currentColor" strokeWidth="3" />
          <circle cx="75" cy="60" r="5" stroke="currentColor" strokeWidth="3" />
          <path
            d="M50 80H70"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M60 10V30"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M40 20H80"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M20 60H10"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M100 60H110"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M30 110L40 100"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M90 110L80 100"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Middle left - Speech bubble */}
      <motion.div
        className="absolute top-[40%] left-[3%] dark:text-slate-700 text-slate-200 opacity-70"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <svg
          width="100"
          height="80"
          viewBox="0 0 100 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M90 35C90 50 75 65 50 65C45 65 40 64 35 63L15 75L20 55C15 50 10 43 10 35C10 20 25 5 50 5C75 5 90 20 90 35Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30 25L70 25"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M30 35L60 35"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M30 45L50 45"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>

      {/* Middle right - Binary code */}
      <motion.div
        className="absolute top-[45%] right-[3%] dark:text-slate-700 text-slate-200 opacity-70"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 0.7, x: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 20H30V40H20V20Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 20H50V40H40V20Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60 20H70V40H60V20Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M20 60H30V80H20V60Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M40 60H50V80H40V60Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M60 60H70V80H60V60Z"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      {/* Floating elements */}
      <motion.div
        className="absolute top-[10%] left-[20%] dark:text-slate-700 text-slate-200 opacity-70"
        animate={{
          y: [0, -10, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 5L25 15L35 17L28 25L30 35L20 30L10 35L12 25L5 17L15 15L20 5Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[60%] left-[70%] dark:text-slate-700 text-slate-200 opacity-70"
        animate={{
          y: [0, 10, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 0.5,
        }}
      >
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="20"
            cy="20"
            r="15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="5 5"
          />
        </svg>
      </motion.div>

      <motion.div
        className="absolute top-[20%] left-[60%] dark:text-slate-700 text-slate-200 opacity-70"
        animate={{
          y: [0, -15, 0],
          x: [0, 10, 0],
          rotate: [0, 10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 1,
        }}
      >
        <svg
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 15L15 5L25 15L15 25L5 15Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </motion.div>
    </div>
  );
}

