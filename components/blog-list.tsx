import { getBlogPostList } from "@/helpers/file-helpers";
import BlogCard from "./blog-card";

export default async function BlogList() {
  const posts = await getBlogPostList();

  return (
    <div className="grid gap-8">
      {posts.map((post) => (
        <BlogCard
          key={post.slug}
          slug={post.slug}
          title={post.title}
          publishedOn={post.publishedOn}
          abstract={post.abstract}
          tags={post.tags}
          image={post.image}
        />
      ))}
    </div>
  );
}
