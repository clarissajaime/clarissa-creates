import Link from "next/link"
import { ArrowRight, Github, Linkedin } from "lucide-react"

import { Button } from "@/components/ui/button";
import AnimatedDoodles from "@/components/animated-doodles";
import FloatingIcons from "@/components/floating-icons";
import AnimatedGradientText from "@/components/animated-gradient-text";
import AnimatedH1 from "@/components/animated-h1";
import BlogSummaryCard from "@/components/BlogSummaryCard";
import { getBlogPostList } from "@/helpers/file-helpers";
import { humanizedDate } from "@/helpers/date-helpers";

export default async function Home() {
  const blogPosts = await getBlogPostList();

  return (
    <div className="flex min-h-screen flex-col">
      <AnimatedDoodles />
      <FloatingIcons />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <AnimatedH1 />
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-8">
                  Join us on a journey to explore innovative coding techniques
                  and the limitless possibilities of AI.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row mt-4">
                <Button asChild>
                  <Link href="/projects">
                    Explore AI Projects
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/blog">
                    Read Blog
                    <ArrowRight className="ml-2 h-4 w-4" />
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
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 mt-8">
              {blogPosts.map(
                ({ slug, title, publishedOn, abstract, tags, image }) => (
                  <BlogSummaryCard
                    key={slug}
                    slug={`blog/${slug}`}
                    title={title}
                    publishedOn={humanizedDate(publishedOn)}
                    abstract={abstract}
                    tags={tags}
                    image={image}
                  />
                )
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
