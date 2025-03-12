
import Link from "next/link"
import { Github, Linkedin } from 'lucide-react'
import React from 'react'
import AnimatedGradientText from './animated-gradient-text'
import { ThemeToggle } from './theme-toggle'
import { Button } from './ui/button'

const PrimaryHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 items-center justify-between">
      <div className="flex items-center gap-6 md:gap-10">
        <Link href="/" className="font-bold text-xl">
          <span className="font-normal">Clarissa </span>
          <AnimatedGradientText text="Creates" />
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/projects" className="text-sm font-medium transition-colors hover:text-primary">
            Projects
          </Link>
          <Link href="/blog" className="text-sm font-medium transition-colors hover:text-primary">
            Blog
          </Link>
          <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
            About
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
        <Button asChild variant="outline" size="icon" className="rounded-full">
          <Link href="https://github.com">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
        </Button>
        <Button asChild variant="outline" size="icon" className="rounded-full">
          <Link href="https://linkedin.com">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </Button>
      </div>
    </div>
  </header>
  )
}

export default PrimaryHeader