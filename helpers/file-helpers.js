import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { format } from "date-fns";

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
    .filter((project) => !project.tags.includes("project"))
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
    .filter((project) => project.tags.includes("project"))
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

// export async function humanizedDate(date) {
//   format(new Date(date), "MMMM do, yyyy");
// }

export function humanizedDate(date) {
  return new Date(date).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
