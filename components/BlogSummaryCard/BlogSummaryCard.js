import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import ProjectCard from "@/components/project-card";
import Image from "next/image";

function BlogSummaryCard({ slug, title, publishedOn, abstract, tags, image }) {
  const href = `/${slug}`;
  return (
    <Card className="flex flex-col overflow-hidden">
      <CardContent className="p-0">
        <div className="grid gap-4">
          <ProjectCard
            title={title}
            description={abstract}
            image={image || "/placeholder.svg?height=200&width=400"}
            tags={tags}
            link={href}
            date={publishedOn}
            useNextImage={true} // Add this prop to indicate using Next.js Image
          />
        </div>
      </CardContent>
    </Card>
  );
}

export default BlogSummaryCard;
