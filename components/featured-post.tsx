"use client"

import Link from "next/link"
import { CalendarIcon } from "lucide-react"
import { motion } from "framer-motion"

import { cn } from "@/lib/utils"

interface FeaturedPostProps {
  title: string
  excerpt: string
  date: string
  image: string
  link: string
  className?: string
}

export default function FeaturedPost({ title, excerpt, date, image, link, className }: FeaturedPostProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Link href={link} className={cn("group relative block overflow-hidden rounded-lg", className)}>
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <motion.img
            src={image || "/placeholder.svg"}
            alt={title}
            className="object-cover w-full h-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
        <div className="p-4 bg-card rounded-b-lg border border-t-0">
          <div className="flex items-center text-sm text-muted-foreground mb-2">
            <CalendarIcon className="mr-1 h-3 w-3" />
            <time dateTime={date}>{date}</time>
          </div>
          <motion.h3
            className="font-semibold text-lg leading-tight transition-colors"
            whileHover={{ color: "var(--primary)" }}
          >
            {title}
          </motion.h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{excerpt}</p>
        </div>
      </Link>
    </motion.div>
  )
}

