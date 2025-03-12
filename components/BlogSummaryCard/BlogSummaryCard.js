import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import {Card, CardContent} from '@/components/ui/card'
import ProjectCard from "@/components/project-card"


function BlogSummaryCard({
  slug,
  title,
  publishedOn,
  abstract,
  tags
}) {
  const href = `/${slug}`;
  const humanizedDate = format(
    new Date(publishedOn),
    'MMMM do, yyyy'
  );

  return (
    <Card className="flex flex-col overflow-hidden">
    <CardContent className="p-0">
      <div className="grid gap-4">
        <ProjectCard
          title={title}
          description={abstract}
          image="/placeholder.svg?height=200&width=400"
          tags={tags}
          link={href}
          date={humanizedDate}
        />
      </div>
    </CardContent>
  </Card>
  );
}

export default BlogSummaryCard;
