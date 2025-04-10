"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

function BlogSummaryCard({ slug, title, publishedOn, abstract, tags, image }) {
  const href = `/${slug}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <Link
        href={href}
        className="group relative block overflow-hidden rounded-lg"
      >
        <div className="relative aspect-video overflow-hidden rounded-t-lg">
          <div className="w-full h-full">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority={false}
            />
          </div>
        </div>
        <div className="p-4 bg-card rounded-b-lg border border-t-0">
          <h3 className="font-semibold text-lg leading-tight group-hover:text-primary transition-colors flex items-center">
            {title}
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileHover={{ opacity: 1, x: 0 }}
              className="inline-flex ml-1"
            >
              <ArrowUpRight className="h-4 w-4" />
            </motion.span>
          </h3>
          {publishedOn && (
            <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
              {publishedOn}
            </p>
          )}
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {abstract}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {tags &&
              tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default BlogSummaryCard;
