---
name: deadwater_editorial_qa
description: Perform final editorial QA, tighten prose, validate claims, enforce Deadwater tone and sentence-case headings, and insert internal/external links. Use after full draft assembly and before export.
---

# deadwater_editorial_qa

## Purpose
Finalize article quality and linking in one pass so publishing output is production-ready.

## Invocation conditions
- Call after intro, body, and closing are assembled.
- Mandatory before export.
- Re-run when QA report shows unresolved issues.

## Input schema
```json
{
  "type": "object",
  "required": ["full_draft", "brief", "research_packet", "linking_rules"],
  "properties": {
    "full_draft": { "type": "string" },
    "brief": { "type": "object" },
    "research_packet": { "type": "object" },
    "linking_rules": {
      "type": "object",
      "properties": {
        "min_internal_links": { "type": "integer", "default": 3 },
        "min_external_links": { "type": "integer", "default": 3 },
        "max_total_links": { "type": "integer", "default": 16 },
        "internal_url_prefixes": { "type": "array", "items": { "type": "string" } }
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
  "required": ["final_draft", "qa_report"],
  "properties": {
    "final_draft": { "type": "string" },
    "qa_report": {
      "type": "object",
      "required": ["issues_fixed", "claims_flagged", "links_added", "residual_risks"],
      "properties": {
        "issues_fixed": { "type": "array", "items": { "type": "string" } },
        "claims_flagged": { "type": "array", "items": { "type": "string" } },
        "links_added": { "type": "array", "items": { "type": "string" } },
        "residual_risks": { "type": "array", "items": { "type": "string" } }
      }
    }
  },
  "additionalProperties": false
}
```

## Prompt instructions
1. Tighten prose and remove repetition without changing thesis intent.
2. Enforce Deadwater tone: sharp, direct, analytical, practical, non-fluffy.
3. Enforce sentence case headings across the draft.
4. Validate material claims against research packet; flag unsupported claims.
5. Insert internal links only to Deadwater pages.
6. Insert relevant authoritative external links from source list.
7. Do not link headings; link only natural body anchors.
8. Preserve structure unless a structural fix is required for clarity.
9. Return `final_draft` and explicit `qa_report`.

## Example I/O
Input:
```json
{
  "full_draft": "## Draft ...",
  "brief": { "keyword": "ai content workflow tools" },
  "research_packet": { "source_list": [{ "url": "https://deadwater.ai/read/what-is-a-content-os", "source_type": "deadwater_internal" }] },
  "linking_rules": { "min_internal_links": 3, "min_external_links": 3, "internal_url_prefixes": ["https://deadwater.ai", "/read/"] }
}
```

Output:
```json
{
  "final_draft": "## Draft with edits and links ...",
  "qa_report": {
    "issues_fixed": ["Removed repetitive paragraph in section 3", "Standardized heading case"],
    "claims_flagged": ["Claim about guaranteed ranking outcomes removed"],
    "links_added": ["/read/what-is-a-content-os", "https://zapier.com/pricing"],
    "residual_risks": ["Limited high-confidence community signal for one vendor section"]
  }
}
```

