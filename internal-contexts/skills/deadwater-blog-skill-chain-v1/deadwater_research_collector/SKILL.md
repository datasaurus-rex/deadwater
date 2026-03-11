---
name: deadwater_research_collector
description: Collect and synthesize internal Deadwater knowledge and external evidence into a structured research packet with claim support mapping. Use after intake normalization and before outline generation.
---

# deadwater_research_collector

## Purpose
Collect research and supporting evidence with strict source partitioning: Deadwater internal context versus external sources.

## Invocation conditions
- Call after intake normalization.
- Call before outline generation.
- Re-call when claim support is weak or missing.

## Input schema
```json
{
  "type": "object",
  "required": ["brief", "research_config"],
  "properties": {
    "brief": { "type": "object" },
    "research_config": {
      "type": "object",
      "properties": {
        "include_external_web": { "type": "boolean", "default": true },
        "include_reddit": { "type": "boolean", "default": true },
        "include_hacker_news": { "type": "boolean", "default": true },
        "max_internal_hits": { "type": "integer", "minimum": 3, "default": 12 },
        "max_external_hits": { "type": "integer", "minimum": 3, "default": 15 }
      },
      "additionalProperties": false
    }
  },
  "additionalProperties": false
}
```

## Output schema
```json
{
  "type": "object",
  "required": ["internal_findings", "external_findings", "source_list", "claim_bank"],
  "properties": {
    "internal_findings": {
      "type": "array",
      "items": { "type": "object" }
    },
    "external_findings": {
      "type": "array",
      "items": { "type": "object" }
    },
    "source_list": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["url", "source_type", "title", "relevance"],
        "properties": {
          "url": { "type": "string" },
          "source_type": { "type": "string", "enum": ["deadwater_internal", "official_doc", "g2", "reddit", "hn", "other_external"] },
          "title": { "type": "string" },
          "relevance": { "type": "string" }
        }
      }
    },
    "claim_bank": {
      "type": "array",
      "items": {
        "type": "object",
        "required": ["claim", "supporting_sources", "support_strength"],
        "properties": {
          "claim": { "type": "string" },
          "supporting_sources": { "type": "array", "items": { "type": "string" } },
          "support_strength": { "type": "string", "enum": ["high", "medium", "low"] }
        }
      }
    }
  },
  "additionalProperties": false
}
```

## Prompt instructions
1. Query internal retrieval only against Deadwater site content and Deadwater knowledge base.
2. Do not query legacy brand/product knowledge stores.
3. Build a balanced packet: internal concepts + external validation where useful.
4. Include both favorable and critical signal when using community/review sources.
5. Attach every claim to at least one source URL.
6. Mark weakly supported claims as `low` and flag for editorial scrutiny.
7. Return only JSON following the output schema.

## Example I/O
Input:
```json
{
  "brief": {
    "title": "AI content workflow tools comparison",
    "keyword": "ai content workflow tools"
  },
  "research_config": {
    "include_external_web": true,
    "include_reddit": true,
    "include_hacker_news": false,
    "max_internal_hits": 10,
    "max_external_hits": 12
  }
}
```

Output:
```json
{
  "internal_findings": [
    { "concept": "Content OS", "summary": "Operating layer framing for reliable AI execution", "url": "/read/what-is-a-content-os" }
  ],
  "external_findings": [
    { "summary": "Pricing model differences affect scaling economics", "url": "https://zapier.com/pricing", "source_type": "official_doc" }
  ],
  "source_list": [
    { "url": "https://zapier.com/pricing", "source_type": "official_doc", "title": "Zapier pricing", "relevance": "Pricing model comparison" }
  ],
  "claim_bank": [
    {
      "claim": "Pricing unit design strongly impacts automation cost at scale.",
      "supporting_sources": ["https://zapier.com/pricing", "https://www.make.com/en/pricing"],
      "support_strength": "high"
    }
  ]
}
```

