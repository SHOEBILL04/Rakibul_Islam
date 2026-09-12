import { load } from "js-yaml"

export interface PostFrontmatter {
  title: string
  date: string
  summary: string
  tags?: string[]
  author?: string
}

export interface Post extends PostFrontmatter {
  slug: string
  content: string
  readingTime: string
}

/** Parse frontmatter block using pure-JS YAML parser */
export function parseMarkdown(
  raw: string,
): { frontmatter: PostFrontmatter content: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/)
  if (!match) {
    return {
      frontmatter: {
        title: "Untitled Post",
        date: new Date().toISOString().split("T")[0],
        summary: "",
        tags: [],
      },
      content: raw,
    }
  }

  const [, yamlStr, markdownContent] = match
  try {
    const data = load(yamlStr) as Partial<PostFrontmatter> || {}
    return {
      frontmatter: {
        title: data.title || "Untitled Post",
        date: data.date || new Date().toISOString().split("T")[0],
        summary: data.summary || "",
        tags: Array.isArray(data.tags) ? data.tags : [],
        author: data.author || "Rakibul Islam Emon",
      },
      content: markdownContent,
    }
  } catch (err) {
    console.error("Failed to parse frontmatter YAML:", err)
    return {
      frontmatter: {
        title: "Untitled Post",
        date: new Date().toISOString().split("T")[0],
        summary: "",
        tags: [],
      },
      content: markdownContent,
    }
  }
}

/** Calculate human-friendly reading time */
function calculateReadingTime(text: string): string {
  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / 200)
  return `${minutes} min read`
}

// Vite static glob import for all markdown files in content/posts
const markdownModules = import.meta.glob("/content/posts/*.{md,mdx}", {
  query: "?raw",
  eager: true,
}) as Record<string, { default: string } | string>

/** Cache parsed posts */
let cachedPosts: Post[] | null = null

export function getAllPosts(): Post[] {
  if (cachedPosts) return cachedPosts

  const posts: Post[] = []

  for (const [filepath, rawModule] of Object.entries(markdownModules)) {
    const rawContent =
      typeof rawModule === "string" ? rawModule : rawModule.default
    const slug = filepath
      .replace(/^\/content\/posts\//, "")
      .replace(/\.(md|mdx)$/, "")
      .trim()
    const { frontmatter, content } = parseMarkdown(rawContent)

    posts.push({
      slug,
      ...frontmatter,
      content,
      readingTime: calculateReadingTime(content),
    })
  }

  // Sort descending by date
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
  cachedPosts = posts
  return posts
}

export function getPostBySlug(slug: string): Post | undefined {
  const normalized = decodeURIComponent(slug).trim().toLowerCase()
  return getAllPosts().find((p) => {
    const postSlug = p.slug.toLowerCase()
    return (
      postSlug === normalized ||
      postSlug === normalized.replace(/_/g, "-") ||
      postSlug === normalized.replace(/-/g, "_")
    )
  })
}

export function getAllTags(): string[] {
  const tagsSet = new Set<string>()
  for (const post of getAllPosts()) {
    for (const tag of post.tags || []) {
      tagsSet.add(tag)
    }
  }
  return Array.from(tagsSet).sort()
}
