"use client";

import React, { useState, useCallback, memo } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, Clock } from "lucide-react";
import { motion, useReducedMotion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

// Animation variants extracted to constants
const ANIMATION_VARIANTS: Record<string, Variants> = {
  image: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  },
  card: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  },
  arrow: {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  },
  hover: {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  },
};

// Skeleton loading component
const CardSkeleton = () => (
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
);

// Calculate read time based on content length
const calculateReadTime = (abstract?: string): number => {
  if (!abstract) return 1;
  const wordsPerMinute = 200;
  const wordCount = abstract.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
};

interface BlogSummaryCardProps {
  slug: string;
  title?: string;
  publishedOn?: string;
  abstract?: string;
  tags?: string[];
  image?: string;
  isPriority?: boolean;
  isLoading?: boolean;
  className?: string;
}

// Memoized component to prevent unnecessary re-renders
const BlogSummaryCard = memo(function BlogSummaryCard({
  slug,
  title,
  publishedOn,
  abstract,
  tags,
  image,
  isPriority = false,
  isLoading = false,
  className,
}: BlogSummaryCardProps) {
  const href = `/${slug}`;
  const [imageLoading, setImageLoading] = useState(true);
  const [imageError, setImageError] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  const readTime = calculateReadTime(abstract);

  // Callback functions for event handlers to prevent recreating on each render
  const handleImageLoad = useCallback(() => {
    setImageLoading(false);
  }, []);

  const handleImageError = useCallback(() => {
    setImageLoading(false);
    setImageError(true);
  }, []);

  // Adjust animations based on user preferences
  const shouldAnimate = !prefersReducedMotion;

  // Show skeleton while loading
  if (isLoading) {
    return <CardSkeleton />;
  }

  // Fallback values for missing data
  const safeTitle = title || "Untitled Post";
  const safeAbstract = abstract || "No description available";
  const safeTags = tags || [];
  const safePublishedDate = publishedOn
    ? new Date(publishedOn).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    : "Publication date unavailable";

  return (
    <motion.div
      initial={shouldAnimate ? "hidden" : undefined}
      whileInView={shouldAnimate ? "visible" : undefined}
      viewport={{ once: true, amount: 0.1 }}
      variants={shouldAnimate ? ANIMATION_VARIANTS.card : undefined}
      className={cn("h-full will-change-transform", className)}
      style={{
        minHeight: "350px",
        transform: "translateZ(0)",
      }}
    >
      <Link
        href={href}
        className="group relative block overflow-hidden rounded-lg h-full flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        aria-labelledby={`blog-title-${slug}`}
        prefetch={false}
      >
        <div
          className="relative aspect-video overflow-hidden rounded-t-lg bg-muted"
          style={{
            aspectRatio: "16/9",
            height: "0",
            paddingBottom: "56.25%",
          }}
        >
          <motion.div
            className="absolute inset-0"
            whileHover={shouldAnimate ? "hover" : undefined}
            variants={shouldAnimate ? ANIMATION_VARIANTS.hover : undefined}
          >
            {imageError ? (
              <div className="w-full h-full flex items-center justify-center bg-muted text-muted-foreground">
                <span className="text-sm">Image unavailable</span>
              </div>
            ) : (
              <Image
                src={image || "/placeholder.svg"}
                alt={`Featured image for article: ${safeTitle}`}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className={`object-cover will-change-transform
                  transition-transform duration-300
                  group-hover:scale-105 group-focus:scale-105`}
                style={{
                  opacity: imageLoading ? 0 : 1,
                  transition: "opacity 0.5s ease",
                }}
                priority={isPriority}
                quality={85}
                onLoadingComplete={handleImageLoad}
                onError={handleImageError}
                loading={isPriority ? "eager" : "lazy"}
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNzAwIiBoZWlnaHQ9IjQ3NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2ZXJzaW9uPSIxLjEiPjxyZWN0IHdpZHRoPSI3MDAiIGhlaWdodD0iNDc1IiBmaWxsPSIjZjFmMWYxIi8+PC9zdmc+"
              />
            )}
          </motion.div>
        </div>
        <div className="p-4 bg-card rounded-b-lg border border-t-0 flex-grow flex flex-col">
          <h3
            id={`blog-title-${slug}`}
            className="font-semibold text-lg md:text-xl leading-tight group-hover:text-primary group-focus:text-primary transition-colors flex items-center"
          >
            {safeTitle}
            <motion.span
              initial={shouldAnimate ? "hidden" : undefined}
              whileHover={shouldAnimate ? "visible" : undefined}
              variants={shouldAnimate ? ANIMATION_VARIANTS.arrow : undefined}
              className="inline-flex ml-1"
              aria-hidden="true"
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.span>
          </h3>
          <div className="flex justify-between items-center mt-2">
            {publishedOn && (
              <p className="text-sm text-muted-foreground">
                <time dateTime={new Date(publishedOn).toISOString()}>
                  {safePublishedDate}
                </time>
              </p>
            )}
            <div
              className="flex items-center text-sm text-muted-foreground"
              aria-label={`${readTime} minute read`}
            >
              <Clock className="h-3 w-3 mr-1" />
              <span>{readTime} min read</span>
            </div>
          </div>
          <p className="mt-2 text-sm md:text-base text-muted-foreground line-clamp-2 sm:line-clamp-2 md:line-clamp-3">
            {safeAbstract}
          </p>
          <div
            className="mt-auto pt-3 flex flex-wrap gap-2"
            aria-label="Article tags"
          >
            {safeTags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
});
// Display name for debugging purposes
BlogSummaryCard.displayName = "BlogSummaryCard";

export default BlogSummaryCard;
