import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { format } from 'date-fns';
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { getBlogPostList } from "@/helpers/file-helpers";

export default async function ProjectsPage() {
  const blogPosts = await getBlogPostList();
  const projects = [
    {
      id: 1,
      title: "GPT-4 Powered Chatbot",
      description: "A conversational AI assistant built with the latest OpenAI models",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["AI", "NLP", "OpenAI"],
      link: "/projects/chatbot",
      publishedOn: '2023-07-11T12:00:00-0400'
    },
    {
      id: 2,
      title: "Computer Vision Object Detector",
      description: "Real-time object detection using TensorFlow and React",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Computer Vision", "TensorFlow", "React"],
      link: "/projects/object-detector",
      publishedOn: '2023-07-11T12:00:00-0400'
    },
    {
      id: 3,
      title: "AI-Powered Content Generator",
      description: "Generate blog posts, marketing copy, and more with AI",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["AI", "Content Generation", "NLP"],
      link: "/projects/content-generator",
      publishedOn: '2023-07-11T12:00:00-0400'
    },
    {
      id: 4,
      title: "Sentiment Analysis Dashboard",
      description: "Analyze sentiment in customer feedback and social media",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Sentiment Analysis", "Data Visualization", "NLP"],
      link: "/projects/sentiment-analysis",
      publishedOn: '2023-07-11T12:00:00-0400'
    },
    {
      id: 5,
      title: "Recommendation Engine",
      description: "Personalized recommendations based on user behavior",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Recommendation Systems", "Machine Learning", "Python"],
      link: "/projects/recommendation-engine",
      publishedOn: '2023-07-11T12:00:00-0400'
    },
    {
      id: 6,
      title: "Neural Style Transfer App",
      description: "Apply artistic styles to your photos using neural networks",
      image: "/placeholder.svg?height=200&width=400",
      tags: ["Neural Networks", "Computer Vision", "Art"],
      link: "/projects/style-transfer",
      publishedOn: '2023-07-11T12:00:00-0400'
    },
  ]

  const humanizedDate = (date: string) => format(
      new Date(date),
      'MMMM do, yyyy'
    );

  return (
    <div className="container py-12 md:py-16">
      <div className="flex items-center mb-8">
        <Button variant="ghost" size="sm" asChild className="mr-4">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      </div>

      <p className="text-muted-foreground max-w-3xl mb-8">
      A collection of projects exploring how technology and creativity come together.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            tags={project.tags}
            link={project.link}
            date={humanizedDate(project.publishedOn)}
          />
        ))}
      </div>
    </div>
  )
}


