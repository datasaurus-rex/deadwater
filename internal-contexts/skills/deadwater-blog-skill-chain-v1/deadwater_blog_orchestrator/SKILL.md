---
name: deadwater_blog_orchestrator
description: Chain Deadwater blog skills in order from intake to export, including drafting loop, late intro/closing generation, and editorial QA with link insertion. Use to run end-to-end blog generation.
---

# deadwater_blog_orchestrator

## Purpose
Execute the v1 modular chain end to end while keeping each skill independently testable.

## Invocation conditions
- Call for full article generation.
- Call when deterministic stage order is required.
- Call when running optional flags (for example, external research on/off).

## Input schema
```json
{
  "type": "object",
  "required": ["title", "keyword"],
  "properties": {
    "title": { "type": "string" },
    "keyword": { "type": "string" },
    "context_or_angle": { "type": "string" },
    "target_audience": { "type": "string" },
    "business_intent": { "type": "string" },
    "research_config": { "type": "object" },
    "linking_rules": { "type": "object" },
    "export_targets": {
      "type": "array",
      "items": { "type": "string", "enum": ["markdown", "cms_json"] }
    }
  },
  "additionalProperties": false
}
```

## Output schema
```json
{
  "type": "object",
  "required": ["brief", "research_packet", "outline", "section_briefs", "section_drafts", "intro_block", "closing_block", "qa_report", "publish_markdown", "cms_payload"],
  "properties": {
    "brief": { "type": "object" },
    "research_packet": { "type": "object" },
    "outline": { "type": "object" },
    "section_briefs": { "type": "array", "items": { "type": "object" } },
    "section_drafts": { "type": "array", "items": { "type": "object" } },
    "intro_block": { "type": "string" },
    "closing_block": { "type": "string" },
    "qa_report": { "type": "object" },
    "publish_markdown": { "type": "string" },
    "cms_payload": { "type": "object" }
  },
  "additionalProperties": false
}
```

## Prompt instructions
Preflight (mandatory, in order):

1. Load `internal-contexts/README.md`
2. Load `internal-contexts/writing style guides/jack-writing-style-guide.md`
3. Load `internal-contexts/writing style guides/deadwater-blog-style-guide.md`
4. Load `internal-contexts/product briefs/deadwater-product-offerings.md`
5. Load `internal-contexts/workflows/blog-writing-workflow.md`
6. Load `internal-contexts/workflows/blog-input-template.md`
7. Load 1-3 relevant posts from `content/read/` for internal-link and pattern alignment

If preflight is skipped, stop and complete preflight before continuing.

Execute skills in this exact order:

1. `deadwater_intake_normalizer`
2. `deadwater_research_collector`
3. `deadwater_outline_generator`
4. `deadwater_section_briefer`
5. `deadwater_section_drafter` (loop through `section_briefs`)
6. `deadwater_intro_writer` (after body drafts exist)
7. `deadwater_closing_writer` (after body drafts exist)
8. Assemble `full_draft`
9. `deadwater_editorial_qa` (includes internal + external linking)
10. `deadwater_export_formatter`

Rules:
- Keep intro and closing as separate late-stage passes.
- Do not create linking as a standalone skill.
- Keep all headings sentence case.
- Keep internal retrieval Deadwater-only.
- Block legacy brand logic and terminology from generated outputs.

## Orchestrator pseudocode
```pseudo
brief = deadwater_intake_normalizer(input)
research_packet = deadwater_research_collector({brief, research_config})
outline = deadwater_outline_generator({brief, research_packet})
section_briefs = deadwater_section_briefer({brief, outline, research_packet})

section_drafts = []
previous_summary = ""
for brief_item in section_briefs:
  draft = deadwater_section_drafter({
    section_brief: brief_item,
    research_packet: research_packet,
    previous_section_summary: previous_summary
  })
  section_drafts.push(draft)
  previous_summary = draft.section_summary

intro_block = deadwater_intro_writer({brief, outline, section_drafts}).intro_block
closing_block = deadwater_closing_writer({brief, outline, section_drafts}).closing_block

full_draft = assemble(intro_block, section_drafts, closing_block)
qa = deadwater_editorial_qa({full_draft, brief, research_packet, linking_rules})
export = deadwater_export_formatter({final_draft: qa.final_draft, brief, export_targets})

return {
  brief,
  research_packet,
  outline,
  section_briefs,
  section_drafts,
  intro_block,
  closing_block,
  qa_report: qa.qa_report,
  publish_markdown: export.publish_markdown,
  cms_payload: export.cms_payload
}
```

## Example I/O
Input:
```json
{
  "title": "AI content workflow tools comparison",
  "keyword": "ai content workflow tools",
  "context_or_angle": "Decision-stage practical buyer guide",
  "export_targets": ["markdown", "cms_json"]
}
```

Output:
```json
{
  "brief": { "title": "AI content workflow tools comparison" },
  "research_packet": { "source_list": [] },
  "outline": { "h2_sections": [] },
  "section_briefs": [],
  "section_drafts": [],
  "intro_block": "#### ...",
  "closing_block": "## ...",
  "qa_report": { "issues_fixed": [], "claims_flagged": [], "links_added": [], "residual_risks": [] },
  "publish_markdown": "---\\n...",
  "cms_payload": { "slug": "ai-content-workflow-tools-comparison" }
}
```
