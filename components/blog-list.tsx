import { getBlogPostList } from "@/helpers/file-helpers";
import dynamic from "next/dynamic";
import ClientBlogList from "./client-blog-list";

// Define types for blog post
export interface BlogPost {
  slug: string;
  title: string;
  publishedOn: string;
  abstract: string;
  tags?: string[];
  image?: string;
}

const BlogCard = dynamic(() => import("./blog-card"), {
  loading: () => <div className="h-64 bg-muted rounded animate-pulse"></div>,
});

// This remains a server component
export default async function BlogList({
  postsPerPage = 6,
}: {
  postsPerPage?: number;
}) {
  // Fetch data on the server
  const allPosts = await getBlogPostList();

  // Pass data to client component
  return <ClientBlogList initialPosts={allPosts} postsPerPage={postsPerPage} />;
}
