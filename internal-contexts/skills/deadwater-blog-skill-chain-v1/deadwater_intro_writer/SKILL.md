---
name: deadwater_intro_writer
description: Generate the intro after body sections are drafted, using full-article context to frame the problem sharply and establish thesis quickly. Use late in the pipeline.
---

# deadwater_intro_writer

## Purpose
Write a high-impact intro that frames the problem fast and sets the argument direction.

## Invocation conditions
- Call only after section drafts exist.
- Call before closing writer and editorial QA.
- Re-run when intro is generic, soft, or redundant.

## Input schema
```json
{
  "type": "object",
  "required": ["brief", "outline", "section_drafts"],
  "properties": {
    "brief": { "type": "object" },
    "outline": { "type": "object" },
    "section_drafts": { "type": "array", "items": { "type": "object" } }
  },
  "additionalProperties": false
}
```

## Output schema
```json
{
  "type": "object",
  "required": ["intro_block"],
  "properties": {
    "intro_block": { "type": "string" }
  },
  "additionalProperties": false
}
```

## Prompt instructions
1. Write intro after reviewing full body section drafts.
2. Establish the problem and thesis within the first 2-4 sentences.
3. Keep voice sharp, direct, and practical.
4. Do not preview headings or list upcoming sections.
5. Avoid fluffy framing and hype language.
6. Return JSON only.

## Example I/O
Input:
```json
{
  "brief": { "title": "AI content workflow tools comparison", "thesis": "Tools fail without operating architecture." },
  "outline": { "h2_sections": [] },
  "section_drafts": [{ "section_summary": "..." }]
}
```

Output:
```json
{
  "intro_block": "#### Most teams do not have a tooling problem. They have an operating model problem.\n\n..."
}
```

