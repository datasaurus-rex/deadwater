---
name: deadwater_closing_writer
description: Generate the closing section after body drafts exist, synthesizing argument and ending with a practical action frame. Use late in the pipeline after intro and section drafts.
---

# deadwater_closing_writer

## Purpose
Write a strong closing that synthesizes the full argument and drives a concrete next-step frame.

## Invocation conditions
- Call only after body section drafts exist.
- Call after intro generation.
- Re-run when closing feels generic or not thesis-aligned.

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
  "required": ["closing_block"],
  "properties": {
    "closing_block": { "type": "string" }
  },
  "additionalProperties": false
}
```

## Prompt instructions
1. Use full section draft context to synthesize, not summarize mechanically.
2. End with practical takeaway or action frame.
3. Do not use generic "in conclusion" language.
4. Keep tone direct, grounded, and decisive.
5. Avoid introducing brand/product claims unsupported by research.
6. Return JSON only.

## Example I/O
Input:
```json
{
  "brief": { "thesis": "Tools fail without operating architecture." },
  "outline": { "h2_sections": [] },
  "section_drafts": [{ "section_summary": "..." }]
}
```

Output:
```json
{
  "closing_block": "## What changes when you optimize for compounding leverage\n\n..."
}
```

