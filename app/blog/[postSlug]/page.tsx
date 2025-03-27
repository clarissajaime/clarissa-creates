import React, { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import BlogHero from "@/components/BlogHero";
import { loadBlogPost } from "@/helpers/file-helpers";
import COMPONENT_MAP from "@/helpers/mdx-helpers";
import { TableOfContents } from "@/components/TableOfContents";
import { extractHeadings } from "@/helpers/toc-helpers";

export default async function BlogContent({
  params,
}: {
  params: { postSlug: string };
}) {
  const post = await params;
  const blogPost = await loadBlogPost(post.postSlug);

  const { frontmatter, content } = blogPost;
  const tableOfContents = extractHeadings(content);

  return (
    <div className="container py-12 md:py-16 mx-auto max-w-6xl">
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
        className=""
      />
      <div className="flex flex-col lg:flex-row gap-12">
        <article className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert flex-1 leading-relaxed max-w-none">
          <MDXRemote source={content} components={COMPONENT_MAP} />
        </article>
        <TableOfContents items={tableOfContents} />
      </div>
    </div>
  );
}
