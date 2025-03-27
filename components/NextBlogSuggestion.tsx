"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface NextBlogSuggestionProps {
  title: string;
  slug: string;
  description?: string;
}

export default function NextBlogSuggestion({ title, slug, description }: NextBlogSuggestionProps) {
  return (
    <motion.div 
      className="mt-16 p-6 border border-border rounded-lg bg-card text-card-foreground shadow-sm max-w-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8, 
        delay: 0.5,
        ease: [0.22, 1, 0.36, 1] 
      }}
    >
      <h3 className="text-xl font-semibold mb-2">Read Next</h3>
      <Link href={`/blog/${slug}`} className="group block">
        <h4 className="text-lg font-medium group-hover:text-primary transition-colors">
          {title}
        </h4>
        {description && (
          <p className="text-muted-foreground mt-2 line-clamp-2">{description}</p>
        )}
        <div className="flex items-center mt-4 text-primary">
          <span className="mr-2">Continue reading</span>
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, 5, 0] }}
            transition={{ 
              repeat: Infinity, 
              repeatDelay: 2,
              duration: 1 
            }}
          >
            <ArrowRight size={16} />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
}