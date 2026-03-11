---
name: deadwater_section_drafter
description: Draft one body section at a time from a section brief, using research evidence and prior-section continuity. Use inside the orchestrator drafting loop.
---

# deadwater_section_drafter

## Purpose
Write focused body sections from briefs with strong thesis alignment and evidence grounding.

## Invocation conditions
- Call in a loop, one section brief at a time.
- Call after section briefs are finalized.
- Re-run when section quality or evidence quality fails QA.

## Input schema
```json
{
  "type": "object",
  "required": ["section_brief", "research_packet"],
  "properties": {
    "section_brief": { "type": "object" },
    "research_packet": { "type": "object" },
    "previous_section_summary": { "type": "string" }
  },
  "additionalProperties": false
}
```

## Output schema
```json
{
  "type": "object",
  "required": ["h2", "markdown", "section_summary", "used_sources"],
  "properties": {
    "h2": { "type": "string" },
    "markdown": { "type": "string" },
    "section_summary": { "type": "string" },
    "used_sources": { "type": "array", "items": { "type": "string" } }
  },
  "additionalProperties": false
}
```

## Prompt instructions
1. Use the provided H2 and H3 structure exactly.
2. Draft 1-3 paragraphs under each H3.
3. Open with a short bridge sentence when previous summary is provided.
4. Prioritize clarity, real workflow detail, and analytical tone.
5. Use only supported claims.
6. Keep sentence case in all headings.
7. Output JSON only.

## Example I/O
Input:
```json
{
  "section_brief": {
    "h2": "How to choose based on your operating model",
    "h3_list": ["Decision matrix by operational pain"],
    "must_include_claims": ["Pricing model drives scale cost."]
  },
  "research_packet": {
    "source_list": [{ "url": "https://zapier.com/pricing" }]
  },
  "previous_section_summary": "The earlier section distinguished tool categories."
}
```

Output:
```json
{
  "h2": "How to choose based on your operating model",
  "markdown": "## How to choose based on your operating model\n\nThe category split is useful, but teams still need a practical filter to choose confidently.\n\n### Decision matrix by operational pain\n\n...",
  "section_summary": "Provides a practical selection framework tied to operating pain and pricing behavior.",
  "used_sources": ["https://zapier.com/pricing"]
}
```

