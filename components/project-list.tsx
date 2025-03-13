import ProjectCard from "@/components/project-card";
import { getProjectList } from "@/helpers/file-helpers";
import { humanizedDate } from "@/helpers/date-helpers";

export default async function ProjectList() {
  const projects = await getProjectList();
  
  return (
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
  );
}