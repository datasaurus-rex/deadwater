---
name: deadwater_intake_normalizer
description: Normalize raw blog requests into a structured Deadwater brief with thesis, angle, target reader, business intent, and constraints. Use when a request provides title/keyword/context and writing must be standardized before research or drafting.
---

# deadwater_intake_normalizer

## Purpose
Normalize user input into a clean, structured brief object that downstream skills can consume reliably.

## Invocation conditions
- Call first in every run.
- Call when title/keyword/context are ambiguous and need explicit framing.
- Call when business intent or target audience are missing and must be inferred.

## Input schema
```json
{
  "type": "object",
  "required": ["title", "keyword"],
  "properties": {
    "title": { "type": "string", "minLength": 3 },
    "keyword": { "type": "string", "minLength": 2 },
    "context_or_angle": { "type": "string" },
    "target_audience": { "type": "string" },
    "business_intent": {
      "type": "string",
      "enum": ["awareness", "consideration", "decision", "unspecified"]
    },
    "constraints": { "type": "array", "items": { "type": "string" } }
  },
  "additionalProperties": false
}
```

## Output schema
```json
{
  "type": "object",
  "required": ["title", "keyword", "thesis", "angle", "target_reader", "business_intent", "constraints"],
  "properties": {
    "title": { "type": "string" },
    "keyword": { "type": "string" },
    "thesis": { "type": "string" },
    "angle": { "type": "string" },
    "target_reader": { "type": "string" },
    "business_intent": { "type": "string" },
    "constraints": { "type": "array", "items": { "type": "string" } }
  },
  "additionalProperties": false
}
```

## Prompt instructions
Use these instructions when executing this skill:

1. Extract title and keyword exactly as provided.
2. Infer missing `angle`, `target_reader`, or `business_intent` only when absent.
3. Write one sentence thesis that is arguable and specific.
4. Keep Deadwater framing: Content OS architecture, AI-assisted marketing workflows, stack-aware implementation, reliability, and operational clarity.
5. Keep tone sharp, direct, analytical, and practical.
6. Avoid hype and generic SaaS thought leadership language.
7. Do not reference Before.dev, Reforge, Build, Insights, Research, Learning, or Launch.
8. Return only valid JSON matching the output schema.

## Example I/O
Input:
```json
{
  "title": "AI workflow tools comparison for content teams",
  "keyword": "ai content workflow tools",
  "context_or_angle": "Decision-stage comparison with pragmatic implementation guidance"
}
```

Output:
```json
{
  "title": "AI workflow tools comparison for content teams",
  "keyword": "ai content workflow tools",
  "thesis": "Most teams fail with AI content tooling because they buy point tools before defining an operating layer for context, contracts, and governance.",
  "angle": "Decision-stage comparison focused on operational fit and reliability",
  "target_reader": "Founders, marketing leads, and technical operators evaluating AI workflow tooling",
  "business_intent": "decision",
  "constraints": [
    "Use sentence case headings",
    "Prioritize practical implementation detail",
    "Keep product claims grounded and source-backed"
  ]
}
```

