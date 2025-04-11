'use client';

interface FilterBarProps {
  tags: string[];
  activeTag: string;
  onTagChange: (tag: string) => void;
  sortOrder: "newest" | "oldest";
  onSortChange: (order: "newest" | "oldest") => void;
}

export default function FilterBar({ 
  tags, 
  activeTag, 
  onTagChange, 
  sortOrder, 
  onSortChange 
}: FilterBarProps) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-muted/50 rounded-lg">
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <button
            key={tag}
            onClick={() => onTagChange(tag)}
            className={`px-3 py-1 text-sm rounded-full transition-colors ${
              activeTag === tag 
                ? 'bg-primary text-white' 
                : 'bg-muted-foreground/10 hover:bg-muted-foreground/20'
            }`}
          >
            {tag.charAt(0).toUpperCase() + tag.slice(1)}
          </button>
        ))}
      </div>
      
      <div className="flex items-center gap-2">
        <span className="text-sm text-muted-foreground">Sort by:</span>
        <select
          value={sortOrder}
          onChange={(e) => onSortChange(e.target.value as "newest" | "oldest")}
          className="bg-background border border-input rounded-md px-2 py-1 text-sm"
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
    </div>
  );
}
