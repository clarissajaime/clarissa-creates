import type { Metadata } from 'next'
import './globals.css'
import AnimatedDoodles from '@/components/animated-doodles'
import AnimatedGradientText from '@/components/animated-gradient-text'
import FloatingIcons from '@/components/floating-icons'
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Link, Github, Linkedin } from 'lucide-react'
import { Header } from '@radix-ui/react-accordion'

export const metadata: Metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Header/> */}
        {children}
      </body>
    </html>
  )
}
