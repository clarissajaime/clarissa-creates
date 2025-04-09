# Personal Blog

A modern personal blog and portfolio website built with Next.js.

## Project Overview

This is a personal blog and portfolio website that showcases blog posts and projects. The site uses MDX for content management, allowing you to write blog posts and project descriptions in Markdown with JSX components.

## Features

- **Blog Posts**: Display and filter blog posts with frontmatter metadata
- **Projects Portfolio**: Showcase your projects with images, descriptions, and tags
- **Toast Notifications**: User-friendly toast notification system
- **Responsive Design**: Mobile-friendly UI components

## Project Structure

- `/components`: UI components used throughout the site
  - `project-card.tsx`: Card component for displaying projects
  - `ui/use-toast.ts`: Toast notification utility
- `/hooks`: Custom React hooks
  - `use-toast.ts`: Hook for managing toast notifications
- `/content`: MDX files for blog posts and projects
- `/helpers`: Utility functions
  - `file-helpers.js`: Functions for reading and processing MDX files

## Content Management

Content is managed through MDX files in the `/content` directory. Each file contains:

- **Frontmatter**: Metadata like title, description, tags, publishedOn date
- **Content**: The main content written in Markdown with optional JSX

### Blog Posts

Blog posts are MDX files that don't include the "project" tag. They are sorted by publication date.

### Projects

Projects are MDX files that include the "project" tag. Each project can have:
- Title
- Description
- Image
- Tags
- Link

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Run the development server:
```bash
npm run dev
```

## Adding Content

### To add a new blog post:
1. Create a new `.mdx` file in the `/content` directory
2. Add frontmatter with title, description, publishedOn date, and tags
3. Write your content in Markdown

### To add a new project:
1. Create a new `.mdx` file in the `/content` directory
2. Add frontmatter with title, description, image, link, publishedOn date
3. Include "project" in the tags array
4. Write your project description in Markdown

## License

[MIT License](LICENSE)
