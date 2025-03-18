import React from 'react';

async function BlogPostLoading() {
    return <div className="flex items-center justify-center min-h-screen">
      loading page
      <div className="animate-pulse text-center">
        <div className="h-8 bg-gray-200 rounded w-1/2 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto mb-2.5"></div>
        <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
      </div>
    </div>
}
export default BlogPostLoading;
