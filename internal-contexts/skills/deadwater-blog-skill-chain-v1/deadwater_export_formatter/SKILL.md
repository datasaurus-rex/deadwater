---
name: deadwater_export_formatter
description: Produce publish-ready markdown and optional CMS JSON payload with slug, title, author, and metadata from the final draft. Use as the last step in the pipeline.
---

# deadwater_export_formatter

## Purpose
Transform final editorial draft into publishable and machine-ingestible output formats.

## Invocation conditions
- Call last.
- Call after editorial QA is complete.
- Re-run when export target format changes.

## Input schema
```json
{
  "type": "object",
  "required": ["final_draft", "brief"],
  "properties": {
    "final_draft": { "type": "string" },
    "brief": { "type": "object" },
    "export_targets": {
      "type": "array",
      "items": { "type": "string", "enum": ["markdown", "cms_json"] },
      "default": ["markdown"]
    }
  },
  "additionalProperties": false
}
```

## Output schema
```json
{
  "type": "object",
  "required": ["publish_markdown", "cms_payload"],
  "properties": {
    "publish_markdown": { "type": "string" },
    "cms_payload": {
      "type": "object",
      "required": ["slug", "title", "author", "meta_description", "body_markdown"],
      "properties": {
        "slug": { "type": "string" },
        "title": { "type": "string" },
        "author": { "type": "string" },
        "meta_description": { "type": "string" },
        "body_markdown": { "type": "string" }
      }
    }
  },
  "additionalProperties": false
}
```

## Prompt instructions
1. Generate clean slug from title (lowercase, hyphenated).
2. Default author to `Deadwater team`.
3. Generate concise SEO meta description aligned to content.
4. Preserve markdown body formatting.
5. Include frontmatter in `publish_markdown`.
6. Return JSON only.

## Example I/O
Input:
```json
{
  "final_draft": "## ...",
  "brief": { "title": "AI content workflow tools comparison", "keyword": "ai content workflow tools" },
  "export_targets": ["markdown", "cms_json"]
}
```

Output:
```json
{
  "publish_markdown": "---\\ntitle: \"AI content workflow tools comparison\"\\nauthor: \"Deadwater team\"\\n---\\n\\n## ...",
  "cms_payload": {
    "slug": "ai-content-workflow-tools-comparison",
    "title": "AI content workflow tools comparison",
    "author": "Deadwater team",
    "meta_description": "Compare AI content workflow tools by pricing, feature depth, and operational fit for teams building reliable content systems.",
    "body_markdown": "## ..."
  }
}
```

