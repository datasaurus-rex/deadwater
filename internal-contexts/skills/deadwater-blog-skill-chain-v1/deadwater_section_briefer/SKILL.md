---
name: deadwater_section_briefer
description: Convert the outline into section-level execution briefs with goals, claims, sources, word ranges, and transition guidance. Use between outlining and drafting.
---

# deadwater_section_briefer

## Purpose
Translate high-level outline into actionable, testable section briefs for iterative drafting.

## Invocation conditions
- Call after outline generation.
- Call before drafting loop.
- Re-run when sections lack source coverage or transition logic.

## Input schema
```json
{
  "type": "object",
  "required": ["brief", "outline", "research_packet"],
  "properties": {
    "brief": { "type": "object" },
    "outline": { "type": "object" },
    "research_packet": { "type": "object" }
  },
  "additionalProperties": false
}
```

## Output schema
```json
{
  "type": "object",
  "required": ["section_briefs"],
  "properties": {
    "section_briefs": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["h2", "h3_list", "section_goal", "must_include_claims", "recommended_sources", "word_range", "transition_guidance"],
        "properties": {
          "h2": { "type": "string" },
          "h3_list": { "type": "array", "items": { "type": "string" } },
          "section_goal": { "type": "string" },
          "must_include_claims": { "type": "array", "items": { "type": "string" } },
          "recommended_sources": { "type": "array", "items": { "type": "string" } },
          "word_range": { "type": "string" },
          "transition_guidance": { "type": "string" }
        }
      }
    }
  },
  "additionalProperties": false
}
```

## Prompt instructions
1. Produce one brief per H2 section, preserving order.
2. Keep H3 order fixed and explicit.
3. Assign claims and source URLs for each section.
4. Set realistic word ranges by section complexity.
5. Provide transition guidance that links prior section to next section.
6. Flag sections with weak source support.
7. Return JSON only.

## Example I/O
Input:
```json
{
  "brief": { "keyword": "ai content workflow tools" },
  "outline": {
    "h2_sections": [
      { "h2": "How to choose based on your operating model", "h3s": ["Decision matrix by operational pain"] }
    ]
  },
  "research_packet": {
    "claim_bank": [{ "claim": "Pricing model drives scale cost", "supporting_sources": ["https://zapier.com/pricing"] }]
  }
}
```

Output:
```json
{
  "section_briefs": [
    {
      "h2": "How to choose based on your operating model",
      "h3_list": ["Decision matrix by operational pain"],
      "section_goal": "Give buyers a practical, non-generic selection framework.",
      "must_include_claims": ["Pricing model drives scale cost."],
      "recommended_sources": ["https://zapier.com/pricing"],
      "word_range": "450-650",
      "transition_guidance": "Bridge from category confusion to practical decision criteria."
    }
  ]
}
```

