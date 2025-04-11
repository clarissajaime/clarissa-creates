'use client';

import { useState } from "react";
import dynamic from "next/dynamic";
import FilterBar from "./filter-bar";
import { BlogPost } from "./blog-list";

const BlogCard = dynamic(() => import("./blog-card"), {
  loading: () => <div className="h-64 bg-muted rounded animate-pulse"></div>,
});

interface ClientBlogListProps {
  initialPosts: BlogPost[];
  postsPerPage: number;
}

export default function ClientBlogList({ 
  initialPosts, 
  postsPerPage 
}: ClientBlogListProps) {
  const [posts] = useState<BlogPost[]>(initialPosts || []);
  const [visibleCount, setVisibleCount] = useState<number>(postsPerPage);
  const [activeTag, setActiveTag] = useState<string>("all");
  const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Get all unique tags from posts
  const allTags = ["all", ...Array.from(new Set(posts.flatMap(post => post.tags || [])))];

  // Filter and sort posts
  const filteredPosts = posts
    .filter(post => activeTag === "all" || post.tags?.includes(activeTag))
    .sort((a, b) => {
      const dateA = new Date(a.publishedOn).getTime();
      const dateB = new Date(b.publishedOn).getTime();
      return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
    });

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMorePosts = visibleCount < filteredPosts.length;

  // Load more posts
  const loadMorePosts = () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setVisibleCount(prev => prev + postsPerPage);
      setIsLoading(false);
    }, 300);
  };

  // Handle filter change
  const handleTagChange = (tag: string) => {
    setActiveTag(tag);
    setVisibleCount(postsPerPage); // Reset visible count when filter changes
  };

  // Handle sort change
  const handleSortChange = (order: "newest" | "oldest") => {
    setSortOrder(order);
  };

  return (
    <div className="space-y-8">
      <FilterBar 
        tags={allTags} 
        activeTag={activeTag} 
        onTagChange={handleTagChange}
        sortOrder={sortOrder}
        onSortChange={handleSortChange}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {visiblePosts.map((post, index) => (
          <BlogCard
            key={post.slug}
            slug={post.slug}
            title={post.title}
            publishedOn={post.publishedOn}
            abstract={post.abstract}
            tags={post.tags}
            image={post.image}
            priority={index < 2} // Only prioritize the first two posts
          />
        ))}
      </div>
      
      {hasMorePosts && (
        <div className="flex justify-center mt-8">
          <button 
            onClick={loadMorePosts}
            disabled={isLoading}
            className="px-6 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            {isLoading ? 'Loading...' : 'Load More'}
          </button>
        </div>
      )}
      
      {!hasMorePosts && posts.length > 0 && (
        <p className="text-center text-muted-foreground">
          You've reached the end of the posts
        </p>
      )}
    </div>
  );
}
