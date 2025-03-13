import { Suspense } from "react";
import ProjectList from "@/components/project-list";
import AnimatedGradientText from "@/components/animated-gradient-text";
import ProjectSkeleton from "@/components/project-skeleton";

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex items-center mb-8">
        <h1>
          <AnimatedGradientText
            className="text-3xl font-bold tracking-tight"
            text="Projects"
          />
        </h1>
      </div>

      <p className="text-muted-foreground max-w-3xl mb-8">
        A collection of projects exploring how technology and creativity come
        together.
      </p>

      <Suspense fallback={<ProjectSkeleton />}>
        <ProjectList />
      </Suspense>
    </div>
  );
}
