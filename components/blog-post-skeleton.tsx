import { Skeleton } from "@/components/ui/skeleton";

export default function BlogPostSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border bg-background shadow-sm">
      <Skeleton className="h-48 w-full" />
      <div className="flex flex-col space-y-3 p-5">
        <Skeleton className="h-6 w-3/4" />
        <Skeleton className="h-4 w-1/4" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-2/3" />
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-16 rounded-full" />
        </div>
      </div>
    </div>
  );
}
