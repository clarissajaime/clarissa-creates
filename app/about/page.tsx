import Link from "next/link"
import { ArrowLeft, Github, Linkedin, Mail, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">About Me</h1>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-1">
          <Card>
            <CardContent className="p-6">
              <div className="aspect-square overflow-hidden rounded-full mb-6">
                <img src="/placeholder.svg?height=300&width=300" alt="Profile" className="h-full w-full object-cover" />
              </div>

              <h2 className="text-xl font-bold mb-2">John Doe</h2>
              <p className="text-muted-foreground mb-4">AI Researcher & Educator</p>

              <div className="flex flex-wrap gap-3 mb-6">
                <Button asChild variant="outline" size="sm">
                  <Link href="https://github.com">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
                <Button asChild variant="outline" size="sm">
                  <Link href="https://twitter.com">
                    <Twitter className="mr-2 h-4 w-4" />
                    Twitter
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

              <div className="space-y-3">
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-sm text-muted-foreground">San Francisco, CA</p>
                </div>
                <div>
                  <h3 className="font-medium">Work</h3>
                  <p className="text-sm text-muted-foreground">Senior AI Researcher at TechCorp</p>
                </div>
                <div>
                  <h3 className="font-medium">Education</h3>
                  <p className="text-sm text-muted-foreground">Ph.D. in Computer Science, Stanford University</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2 space-y-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <div className="prose dark:prose-invert max-w-none">
              <p>
                Hello! I'm John, an AI researcher and educator passionate about the intersection of artificial
                intelligence and learning. With over 10 years of experience in the field, I've dedicated my career to
                developing AI solutions that enhance educational experiences and make learning more accessible and
                effective.
              </p>
              <p>
                My research focuses on natural language processing, computer vision, and their applications in
                educational technology. I believe that AI has the potential to transform how we learn and teach, making
                education more personalized, engaging, and effective.
              </p>
              <p>
                When I'm not coding or researching, I enjoy sharing my knowledge through writing, speaking at
                conferences, and mentoring aspiring AI practitioners. This blog is my platform to share insights,
                projects, and thoughts on AI and education.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Artificial Intelligence</h3>
                  <p className="text-sm text-muted-foreground">
                    Machine learning, deep learning, natural language processing, and computer vision
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Education Technology</h3>
                  <p className="text-sm text-muted-foreground">
                    Learning analytics, adaptive learning systems, and educational content creation
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Software Development</h3>
                  <p className="text-sm text-muted-foreground">
                    Full-stack development, React, Next.js, Python, and TensorFlow
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold mb-2">Research & Writing</h3>
                  <p className="text-sm text-muted-foreground">
                    Academic research, technical writing, and educational content development
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Experience</h2>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4 py-1">
                <h3 className="font-bold">Senior AI Researcher</h3>
                <p className="text-sm text-muted-foreground">TechCorp • 2020 - Present</p>
                <p className="mt-2">
                  Leading research in AI applications for educational technology, focusing on personalized learning
                  systems and intelligent tutoring.
                </p>
              </div>
              <div className="border-l-2 border-muted pl-4 py-1">
                <h3 className="font-bold">Assistant Professor</h3>
                <p className="text-sm text-muted-foreground">University of Technology • 2017 - 2020</p>
                <p className="mt-2">
                  Taught courses in machine learning and AI, supervised graduate research, and published papers on
                  educational applications of AI.
                </p>
              </div>
              <div className="border-l-2 border-muted pl-4 py-1">
                <h3 className="font-bold">AI Engineer</h3>
                <p className="text-sm text-muted-foreground">EdTech Innovations • 2014 - 2017</p>
                <p className="mt-2">
                  Developed AI-powered learning tools and analytics platforms for K-12 and higher education
                  institutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

