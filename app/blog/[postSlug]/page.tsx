import React, { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import BlogHero from "@/components/BlogHero";
import { loadBlogPost, getAllPosts } from "@/helpers/file-helpers";
import COMPONENT_MAP from "@/helpers/mdx-helpers";
import { TableOfContents } from "@/components/TableOfContents";
import { extractHeadings } from "@/helpers/toc-helpers";
import NextBlogSuggestion from "@/components/NextBlogSuggestion";

export default async function BlogContent({
  params,
}: {
  params: { postSlug: string };
}) {
  const post = await params;
  const blogPost = await loadBlogPost(post.postSlug);

  // Get all posts to find the next one
  const allPosts = await getAllPosts();

  // Filter out posts with the hidden tag
  const visiblePosts = allPosts.filter(
    (post) => !post.frontmatter.tags?.includes("hidden")
  );

  // Sort posts by date (newest first)
  const sortedPosts = visiblePosts.sort(
    (a, b) =>
      new Date(b.frontmatter.publishedOn).getTime() -
      new Date(a.frontmatter.publishedOn).getTime()
  );

  // Find current post index
  const currentPostIndex = sortedPosts.findIndex(
    (p) => p.slug === post.postSlug
  );

  // Get next post (if current is last, suggest first post)
  const nextPost =
    currentPostIndex < sortedPosts.length - 1
      ? sortedPosts[currentPostIndex + 1]
      : sortedPosts[0];

  // If the next post would be the same as current, get a different one
  const suggestedPost =
    nextPost.slug === post.postSlug
      ? sortedPosts[1] || sortedPosts[0]
      : nextPost;

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
        <div className="flex-1">
          <article className="prose prose-sm sm:prose lg:prose-lg dark:prose-invert leading-relaxed max-w-none">
            <MDXRemote source={content} components={COMPONENT_MAP} />
          </article>

          {/* Next Blog Post Suggestion */}
          <NextBlogSuggestion
            title={suggestedPost.frontmatter.title}
            slug={suggestedPost.slug}
            description={
              suggestedPost.frontmatter.abstract ||
              suggestedPost.frontmatter.description
            }
          />
        </div>
        <TableOfContents items={tableOfContents} />
      </div>
    </div>
  );
}