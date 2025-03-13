"use client";

import { humanizedDate } from "@/helpers/date-helpers";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge"
import React from "react";
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
import { CalendarIcon } from "lucide-react";

const BlogCard = ({
  slug,
  title,
  publishedOn,
  abstract,
  tags,
  image,
}: {
  slug: string;
  title: string;
  publishedOn: string | Date;
  abstract: string;
  tags?: string[];
  image?: string;
}) => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <Card key={slug} className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 h-48 md:h-auto">
              <img
                src={image || "/placeholder.svg"}
                alt={title}
                className="h-full w-full object-cover"
              />
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
