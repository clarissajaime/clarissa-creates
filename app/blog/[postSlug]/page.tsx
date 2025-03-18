import React, { Suspense } from "react";
import { MDXRemote } from "next-mdx-remote/rsc";
import BlogHero from "@/components/BlogHero";
import { loadBlogPost } from "@/helpers/file-helpers";
import COMPONENT_MAP from "@/helpers/mdx-helpers";

export default async function BlogContent({
  params,
}: {
  params: { postSlug: string };
}) {
  const post = await params
  const blogPost = await loadBlogPost(post.postSlug);

  const { frontmatter, content } = blogPost;


  return (
    <div className="container py-12 md:py-16 mx-auto max-w-2xl">
      <BlogHero
        title={frontmatter.title}
        publishedOn={frontmatter.publishedOn}
        className=""
      />
      <article className="leading-relaxed space-y-4">
          <MDXRemote
            source={content}
            components={COMPONENT_MAP}
          />
      </article>
    </div>
  );
}