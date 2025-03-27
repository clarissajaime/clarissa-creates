import { Suspense } from "react";
import AnimatedGradientText from "@/components/animated-gradient-text";
import BlogList from "@/components/blog-list";
import BlogSkeleton from "@/components/blog-skeleton";

export default function BlogPage() {
  return (
    <div className="container py-12 md:py-16">
      <div className="flex items-center mb-8">
        <h1>
          <AnimatedGradientText
            className="text-3xl font-bold tracking-tight"
            text="Articles and Tutorials"
          />
        </h1>
      </div>

      <p className="text-muted-foreground max-w-3xl mb-8">
        Articles, insights, and tutorials on the intersection of technology and
        art.
      </p>

      <Suspense fallback={<BlogSkeleton />}>
        <BlogList />
      </Suspense>
    </div>
  );
}
