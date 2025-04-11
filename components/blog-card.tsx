"use client";

import { humanizedDate } from "@/helpers/date-helpers";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge"
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "./ui/card";
import Link from "next/link";
import Image from "next/image";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";

const BlogCard = ({
  slug,
  title,
  publishedOn,
  abstract,
  tags,
  image,
  priority = false,
  preload = false,
}: {
  slug: string;
  title: string;
  publishedOn: string | Date;
  abstract: string;
  tags?: string[];
  image?: string;
  priority?: boolean;
  preload?: boolean;
}) => {
  const [imageLoading, setImageLoading] = useState(true);

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        <Card key={slug} className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 h-48 md:h-auto relative bg-muted">
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={priority} // Use priority prop
                // Remove the loading prop when priority is true
                {...(!priority && { loading: "lazy" })} // Only add loading="lazy" when priority is false
                className={cn(
                  "object-cover transition-opacity duration-500",
                  imageLoading ? "opacity-0" : "opacity-100"
                )}
                quality={80}
                onLoadingComplete={() => setImageLoading(false)}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg=="
              />

              {imageLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
            </div>
            <div className="md:w-2/3 p-6">
              <CardHeader className="p-0 pb-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {tags?.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <CardTitle className="text-2xl">
                  <Link
                    href={`/blog/${slug}`}
                    className="hover:text-primary transition-colors"
                  >
                    {title}
                  </Link>
                </CardTitle>
                <CardDescription className="flex items-center gap-4 mt-2">
                  <span className="flex items-center">
                    <CalendarIcon className="mr-1 h-3 w-3" />
                    {humanizedDate(publishedOn)}
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 pb-4">
                <p className="text-muted-foreground">{abstract}</p>
              </CardContent>
              <CardFooter className="p-0">
                <Button asChild variant="outline">
                  <Link href={`/blog/${slug}`}>Read Article</Link>
                </Button>
              </CardFooter>
            </div>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default BlogCard;
