# Deadwater.ai

Production-ready, code-first personal brand site built with Next.js (App Router), TypeScript, and Tailwind CSS. Content is stored locally in Markdown and rendered with a minimal pipeline.

## Requirements

- Node.js 18+
- npm 9+

## Install

```bash
npm install
npm run dev
```

## Content authoring

Posts live in `content/read/*.md`. Each file must include the following frontmatter:

```yaml
---
title: "Post title"
description: "Short summary"
date: "YYYY-MM-DD"
tags: ["tag-one", "tag-two"]
draft: false
---
```

Drafts are hidden automatically in production builds (`NODE_ENV=production`).

## Deployment (Vercel)

1. Push the repo to GitHub.
2. Import the project in Vercel.
3. Use the default Next.js build settings (`npm run build`).
4. Set the production domain to `deadwater.ai`.

## Notes

- SEO: per-page metadata, OpenGraph, sitemap, and robots.txt are included.
- Markdown supports tables, blockquotes, inline code, and syntax highlighting.
