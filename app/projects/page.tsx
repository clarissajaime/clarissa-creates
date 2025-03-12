import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { format } from 'date-fns';
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import { getProjectList, humanizedDate } from "@/helpers/file-helpers";

export default async function ProjectsPage() {
  const projects = await getProjectList();

  return (
    <div className="container py-12 md:py-16">
      <div className="flex items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
      </div>

      <p className="text-muted-foreground max-w-3xl mb-8">
        A collection of projects exploring how technology and creativity come
        together.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(({ slug, title, publishedOn, abstract, tags, image }) => (
          <ProjectCard
            key={slug}
            title={title}
            description={abstract}
            image={image || "/placeholder.svg"}
            tags={tags}
            link={`/project/${slug}`}
            date={humanizedDate(publishedOn)}
          />
        ))}
      </div>
    </div>
  );
}


