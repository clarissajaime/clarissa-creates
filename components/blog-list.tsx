import { getBlogPostList } from "@/helpers/file-helpers";
import dynamic from "next/dynamic";

const BlogCard = dynamic(() => import("./blog-card"), {
  loading: () => <div className="h-64 bg-muted rounded animate-pulse"></div>,
});

export default async function BlogList({ postsPerPage = 6 }) {
  const allPosts = await getBlogPostList();
  const visiblePosts = allPosts.slice(0, postsPerPage);

  return (
    <div className="grid gap-8">
      {visiblePosts.map((post) => (
        <BlogCard
          key={post.slug}
          slug={post.slug}
          title={post.title}
          publishedOn={post.publishedOn}
          abstract={post.abstract}
          tags={post.tags}
          image={post.image}
          priority={true}
        />
      ))}
    </div>
  );
}
