import { Card } from "@/components/ui/card";

export default function BlogSkeleton() {
  return (
    <div className="grid gap-8">
      {[1, 2, 3].map((i) => (
        <Card key={i} className="overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/3 h-48 md:h-auto bg-muted animate-pulse" />
            <div className="md:w-2/3 p-6">
              <div className="space-y-4">
                <div className="h-4 w-24 bg-muted animate-pulse rounded" />
                <div className="h-8 w-3/4 bg-muted animate-pulse rounded" />
                <div className="h-4 w-1/4 bg-muted animate-pulse rounded" />
                <div className="space-y-2">
                  <div className="h-4 w-full bg-muted animate-pulse rounded" />
                  <div className="h-4 w-full bg-muted animate-pulse rounded" />
                </div>
                <div className="h-9 w-28 bg-muted animate-pulse rounded" />
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
