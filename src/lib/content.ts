import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeStringify from "rehype-stringify";
import rehypeHighlight from "rehype-highlight";

export type PostFrontmatter = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  draft: boolean;
  image?: string;
};

export type Post = PostFrontmatter & {
  slug: string;
  readingTime: string;
  content: string;
  html: string;
};

const contentDir = path.join(process.cwd(), "content", "read");

const isProduction = process.env.NODE_ENV === "production";

function getAllSlugs() {
  if (!fs.existsSync(contentDir)) {
    return [];
  }

  return fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

function parseFrontmatter(data: Record<string, unknown>): PostFrontmatter {
  const title = String(data.title ?? "");
  const description = String(data.description ?? "");
  const date = String(data.date ?? "");
  const tags = Array.isArray(data.tags) ? data.tags.map((tag) => String(tag)) : [];
  const draft = Boolean(data.draft ?? false);
  const image = data.image ? String(data.image) : undefined;

  return { title, description, date, tags, draft, image };
}

async function renderMarkdown(markdown: string) {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeHighlight)
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}

export async function getAllPosts(): Promise<Post[]> {
  const slugs = getAllSlugs();
  const posts = await Promise.all(slugs.map((slug) => getPostBySlug(slug)));
  const filtered = posts.filter((post): post is Post => Boolean(post));

  const visible = isProduction ? filtered.filter((post) => !post.draft) : filtered;

  return visible.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  const filePath = path.join(contentDir, `${slug}.md`);
  if (!fs.existsSync(filePath)) {
    return null;
  }

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = parseFrontmatter(data);
  const html = await renderMarkdown(content);
  const stats = readingTime(content);

  return {
    slug,
    ...frontmatter,
    content,
    html,
    readingTime: stats.text
  };
}
