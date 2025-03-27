import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  items: TOCItem[];
  className?: string;
}

export function TableOfContents({ items, className }: TableOfContentsProps) {
  return (
    <div className={cn("w-64 hidden lg:block", className)}>
      <div className="sticky top-16">
        <h3 className="text-sm font-semibold mb-4">On this page</h3>
        <nav>
          <ul className="space-y-2 text-sm">
            {items.map((item) => (
              <li 
                key={item.id} 
                className={cn(
                  "text-muted-foreground hover:text-foreground transition-colors",
                  item.level === 2 ? "pl-0" : "pl-4"
                )}
              >
                <Link href={`#${item.id}`}>
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
