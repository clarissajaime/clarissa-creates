"use client";
import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import AnimatedGradientText from "@/components/animated-gradient-text";
import AnimatedDoodles from "@/components/animated-doodles";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <AnimatedDoodles />
      <div className="flex items-center mb-8">
        <h1>
          <AnimatedGradientText
            className="text-3xl font-bold tracking-tight"
            text="About Me"
          />
        </h1>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
        className="grid gap-8 md:grid-cols-3"
      >
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="aspect-square overflow-hidden rounded-full mb-6">
                <img
                  src="/profile-purple.png?height=300&width=300"
                  alt="Profile"
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="text-xl font-bold mb-2">Clarissa Jaime</h2>
              <p className="text-muted-foreground mb-4">
                Frontend Engineer & Educator
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                <Button asChild variant="outline" size="sm">
                  <Link href="https://github.com">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://linkedin.com">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="mailto:contact@example.com">
                    <Mail className="mr-2 h-4 w-4" />
                    Email
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p className="mb-3">
                Hi! I'm Clarissa Jaime, a software engineer and educator with a
                passion for building scalable, user-friendly applications and
                empowering the next generation of developers. With experience
                spanning education, e-commerce, and media, I specialize in
                frontend development, curriculum design, and technical training.
              </p>
              <p className="mb-3">
                I've taught software engineering at multiple coding bootcamps,
                helping students build strong foundations in JavaScript, React,
                and full-stack development. Beyond teaching, my industry
                experience includes working as a software engineer at companies
                like Amazon, Column, and 2U, where I contributed to frontend
                architecture, optimized system performance, and developed
                learning management solutions.
              </p>
              <p className="mb-3">
                When I'm not coding or mentoring, I enjoy refining curriculum
                content, writing technical documentation, and advocating for
                accessible and effective education in tech.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Software Engineering</h3>
                  <p className="text-sm text-muted-foreground">
                    Frontend development (React, TypeScript, Next.js), API
                    integration (GraphQL, Firebase)
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Education & Training</h3>
                  <p className="text-sm text-muted-foreground">
                    Curriculum development, technical instruction, mentoring
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">
                    User Experience & Design Systems
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    UI/UX improvements, performance optimization, accessibility
                    best practices
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Agile Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Sprint planning, cross-functional collaboration, process
                    optimization
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4 py-1">
                <h3 className="font-bold">Software Engineering Instructor</h3>
                <p className="text-sm text-muted-foreground">
                  Austin Coding Academy, Agile Academy (Freelance) • Apr 2024 -
                  Present
                </p>
                <p className="mt-2">
                  Taught software engineering fundamentals and mentored students
                  in product management.
                </p>
              </div>
              <div className="border-l-2 border-muted pl-4 py-1">
                <h3 className="font-bold">Software Engineering Instructor</h3>
                <p className="text-sm text-muted-foreground">
                  Hack Reactor / Galvanize • Jan 2023 - Jan 2024
                </p>
                <p className="mt-2">
                  Led technical training, launched a new TypeScript & Next.js
                  program, and redesigned the CSS curriculum.
                </p>
              </div>
              <div className="border-l-2 border-muted pl-4 py-1">
                <h3 className="font-bold">Web Development Engineer</h3>
                <p className="text-sm text-muted-foreground">
                  Amazon (Contract) • Oct 2022 - Jan 2023
                </p>
                <p className="mt-2">
                  Led a team to migrate 10+ advertising websites, optimizing
                  performance and ad effectiveness.
                </p>
              </div>
              <div className="border-l-2 border-muted pl-4 py-1">
                <h3 className="font-bold">Software Engineer</h3>
                <p className="text-sm text-muted-foreground">
                  Column • Mar 2021 - Sept 2022
                </p>
                <p className="mt-2">
                  Built internal tools, enhanced system reliability, and
                  championed Agile practices.
                </p>
              </div>
              <div className="border-l-2 border-muted pl-4 py-1">
                <h3 className="font-bold">Software Engineer</h3>
                <p className="text-sm text-muted-foreground">
                  2U, Inc • Apr 2019 - Feb 2021
                </p>
                <p className="mt-2">
                  Improved the LMS front-end, developed a scalable design
                  system, and optimized API data fetching with GraphQL.
                </p>
              </div>
              <div className="border-l-2 border-muted pl-4 py-1">
                <h3 className="font-bold">UX Engineer</h3>
                <p className="text-sm text-muted-foreground">
                  2U, Inc • Jun 2017 - Apr 2019
                </p>
                <p className="mt-2">
                  Standardized branding, improved infrastructure reliability,
                  and contributed to UX design sprints.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
