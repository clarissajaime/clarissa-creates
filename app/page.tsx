import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Suspense } from "react";
import { Metadata } from "next";

import { Button } from "@/components/ui/button";
import AnimatedDoodles from "@/components/animated-doodles";
import FloatingIcons from "@/components/floating-icons";
import AnimatedGradientText from "@/components/animated-gradient-text";
import AnimatedH1 from "@/components/animated-h1";
import BlogSummaryCard from "@/components/BlogSummaryCard";
import { getBlogPostList } from "@/helpers/file-helpers";
import { humanizedDate } from "@/helpers/date-helpers";
import { ErrorBoundary } from "@/components/error-boundary";

export const metadata: Metadata = {
  title: "Clarissa Creates - Developer & Designer",
  description:
    "Transform your imagination into reality through code, AI, and creative design.",
  openGraph: {
    title: "Clarissa Creates",
    description:
      "Transform your imagination into reality through code, AI, and creative design.",
    type: "website",
    url: "https://clarissacreates.com",
  },
};

const MAX_FEATURED_POSTS = 4;

export default async function Home(): Promise<React.ReactElement> {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="hidden md:block">
        <AnimatedDoodles />
        <FloatingIcons />
      </div>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <AnimatedH1 />
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-8">
                  Transform your imagination into reality through code, AI, and
                  creative design.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                <Button asChild>
                  <Link href="/blog">
                    Explore My Blog
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  <AnimatedGradientText text="Featured Content" />
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Check out my latest projects and articles
                </p>
              </div>
            </div>
            <ErrorBoundary
              fallback={
                <div className="text-center py-10">
                  Failed to load blog posts. Please try again later.
                </div>
              }
            >
              <Suspense
                fallback={<BlogPostSkeletons count={MAX_FEATURED_POSTS} />}
              >
                <FeaturedBlogPosts />
              </Suspense>
            </ErrorBoundary>
            <div className="flex justify-center mt-10">
              <Button variant="outline" asChild>
                <Link href="/blog">
                  View All Posts
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

interface BlogPost {
  slug: string;
  title: string;
  publishedOn: string;
  abstract: string;
  tags: string[];
  image: string;
}

// Separate component for blog posts to leverage React Suspense
async function FeaturedBlogPosts(): Promise<React.ReactElement> {
  const blogPosts: BlogPost[] = await getBlogPostList();
  const featuredPosts = blogPosts.slice(0, MAX_FEATURED_POSTS);

  if (featuredPosts.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">
          No blog posts found. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-8">
      {featuredPosts.map(
        ({ slug, title, publishedOn, abstract, tags, image }) => (
          <BlogSummaryCard
            key={slug}
            slug={`blog/${slug}`}
            title={title}
            publishedOn={humanizedDate(publishedOn)}
            abstract={abstract}
            tags={tags}
            image={image}
            isPriority={true} // Set first posts as priority
          />
        )
      )}
    </div>
  );
}

interface BlogPostSkeletonsProps {
  count?: number;
  className?: string;
}

// Skeleton loader for blog posts
function BlogPostSkeletons({
  count = 4,
  className,
}: BlogPostSkeletonsProps): React.ReactElement {
  return (
    <div
      className={`mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-8 ${
        className || ""
      }`}
    >
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="h-full">
          <div className="h-full rounded-lg animate-pulse">
            <div className="aspect-video bg-muted rounded-t-lg"></div>
            <div className="p-4 bg-card rounded-b-lg border border-t-0">
              <div className="h-6 bg-muted rounded w-3/4 mb-2"></div>
              <div className="h-4 bg-muted rounded w-1/4 mb-2"></div>
              <div className="h-4 bg-muted rounded w-full mb-2"></div>
              <div className="h-4 bg-muted rounded w-full mb-3"></div>
              <div className="flex gap-2">
                <div className="h-5 bg-muted rounded w-16"></div>
                <div className="h-5 bg-muted rounded w-16"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
