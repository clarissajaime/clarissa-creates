import fs from 'fs/promises';
import path from 'path';
import matter from "gray-matter";

export async function getBlogPostList() {
  const fileNames = await readDirectory("/content");

  const blogPosts = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    blogPosts.push({
      slug: fileName.replace(".mdx", ""),
      ...frontmatter,
    });
  }

  return blogPosts
    .filter(
      (project) =>
        project.tags &&
        !project.tags.includes("project") &&
        !project.tags.includes("hidden")
    )
    .sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}

export async function getProjectList() {
  const fileNames = await readDirectory("/content");

  const projects = [];

  for (let fileName of fileNames) {
    const rawContent = await readFile(`/content/${fileName}`);

    const { data: frontmatter } = matter(rawContent);

    projects.push({
      slug: fileName.replace(".mdx", ""),
      ...frontmatter,
    });
  }

  return projects
    .filter((project) => project.tags && project.tags.includes("project"))
    .sort((p1, p2) => (p1.publishedOn < p2.publishedOn ? 1 : -1));
}


export async function loadBlogPost(slug) {
  const rawContent = await readFile(`/content/${slug}.mdx`);

  const { data: frontmatter, content } = matter(rawContent);

  return { frontmatter, content };
}

function readFile(localPath) {
  return fs.readFile(path.join(process.cwd(), localPath), "utf8");
}

function readDirectory(localPath) {
  return fs.readdir(path.join(process.cwd(), localPath));
}

// Add this function if it doesn't already exist
export async function getAllPosts() {
  // Implementation depends on how your blog posts are stored
  // This is a simplified example
  const files = await fs.readdir(path.join(process.cwd(), '/content'));
  
  const posts = await Promise.all(
    files.map(async (filename) => {
      const slug = filename.replace(/\.mdx$/, '');
      const post = await loadBlogPost(slug);
      return {
        ...post,
        slug,
      };
    })
  );
  
  return posts;
}
