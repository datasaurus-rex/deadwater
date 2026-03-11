---
name: deadwater_outline_generator
description: Generate an argument-driven outline with sentence-case H2/H3 structure, narrative arc, and rationale from the brief and research packet. Use before section briefing.
---

# deadwater_outline_generator

## Purpose
Create a non-generic outline that advances a single thesis with clear argument flow.

## Invocation conditions
- Call after research packet creation.
- Call before section briefs.
- Re-run when outline has overlap, weak logic, or generic heading patterns.

## Input schema
```json
{
  "type": "object",
  "required": ["brief", "research_packet"],
  "properties": {
    "brief": { "type": "object" },
    "research_packet": { "type": "object" },
    "h2_count": { "type": "integer", "minimum": 3, "maximum": 6, "default": 5 }
  },
  "additionalProperties": false
}
```

## Output schema
```json
{
  "type": "object",
  "required": ["h2_sections", "narrative_arc", "outline_rationale"],
  "properties": {
    "h2_sections": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["h2", "h3s"],
        "properties": {
          "h2": { "type": "string" },
          "h3s": { "type": "array", "items": { "type": "string" } }
        }
      }
    },
    "narrative_arc": { "type": "array", "items": { "type": "string" } },
    "outline_rationale": { "type": "string" }
  },
  "additionalProperties": false
}
```

## Prompt instructions
1. Build an argument progression, not a listicle template.
2. Keep all headings in sentence case.
3. Keep H2 sections non-overlapping and sequentially dependent.
4. Generate 2-4 H3s per H2, each as a claim/lens.
5. Integrate the keyword naturally without stuffing.
6. Ground section intent in available research support.
7. Return JSON only.

## Example I/O
Input:
```json
{
  "brief": {
    "title": "AI content workflow tools comparison",
    "keyword": "ai content workflow tools",
    "thesis": "Tool choice fails when teams confuse workflow tooling with operating architecture."
  },
  "research_packet": {
    "claim_bank": [
      { "claim": "Pricing model shapes scale economics", "support_strength": "high" }
    ]
  }
}
```

Output:
```json
{
  "h2_sections": [
    {
      "h2": "What buyers get wrong when comparing AI content tools",
      "h3s": [
        "Most teams compare categories, not operating layers",
        "Feature parity hides execution risk"
      ]
    }
  ],
  "narrative_arc": [
    "Frame the decision error",
    "Compare tool categories",
    "Define practical selection criteria",
    "Close with operating model decision"
  ],
  "outline_rationale": "The structure moves from diagnosis to decision framework, then implementation implications."
}
```

