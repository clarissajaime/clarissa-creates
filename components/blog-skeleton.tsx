export default function BlogSkeleton() {
  const FilterBarSkeleton = () => (
    <div className="h-16 bg-muted/50 rounded-lg animate-pulse"></div>
  );

  return (
    <div className="space-y-8">
      <FilterBarSkeleton />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-64 bg-muted rounded animate-pulse">
            <div className="h-40 bg-muted-foreground/20 rounded-t"></div>
            <div className="p-4 space-y-2">
              <div className="h-6 w-3/4 bg-muted-foreground/20 rounded"></div>
              <div className="h-4 w-1/2 bg-muted-foreground/20 rounded"></div>
              <div className="flex gap-2 mt-2">
                <div className="h-5 w-12 bg-muted-foreground/20 rounded-full"></div>
                <div className="h-5 w-12 bg-muted-foreground/20 rounded-full"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
