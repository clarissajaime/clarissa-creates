export default function LoadingBlogCards({ count = 2 }) {
    return (
      <>
        {Array(count)
          .fill(0)
          .map((_, i) => (
            <div key={i} className="overflow-hidden rounded-lg border animate-pulse">
              <div className="h-48 w-full bg-muted"></div>
              <div className="p-4 space-y-3">
                <div className="h-6 bg-muted rounded w-3/4"></div>
                <div className="h-4 bg-muted rounded w-1/4"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="h-4 bg-muted rounded w-full"></div>
                <div className="flex gap-2 mt-4">
                  <div className="h-6 bg-muted rounded-full w-16"></div>
                  <div className="h-6 bg-muted rounded-full w-16"></div>
                </div>
              </div>
            </div>
          ))}
      </>
    );
  }
  