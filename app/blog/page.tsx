import Link from "next/link"
import { ArrowLeft, CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getBlogPostList, humanizedDate } from "@/helpers/file-helpers";

export default async function BlogPage() {
  const posts = await getBlogPostList();

  return (
    <div className="container py-12 md:py-16">
      <div className="flex items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
      </div>

      <p className="text-muted-foreground max-w-3xl mb-8">
        Articles, insights, and tutorials on education, learning strategies, and
        the intersection of technology and teaching.
      </p>

      <div className="grid gap-8">
        {posts.map(({ slug, title, publishedOn, abstract, tags, image }) => (
          <Card key={slug} className="overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 h-48 md:h-auto">
                <img
                  src={image || "/placeholder.svg"}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-2/3 p-6">
                <CardHeader className="p-0 pb-4">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags?.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <CardTitle className="text-2xl">
                    <Link
                      href={`/blog/${slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="flex items-center gap-4 mt-2">
                    <span className="flex items-center">
                      <CalendarIcon className="mr-1 h-3 w-3" />
                      {humanizedDate(publishedOn)}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-0 pb-4">
                  <p className="text-muted-foreground">{abstract}</p>
                </CardContent>
                <CardFooter className="p-0">
                  <Button asChild variant="outline">
                    <Link href={`/blog/${slug}`}>Read Article</Link>
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
