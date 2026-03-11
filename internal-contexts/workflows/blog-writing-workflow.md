# Blog writing workflow (research-first)

Use this workflow when drafting a net-new article from a brief with:

- keyword
- topic
- angle
- context

## Locked writing rules (v1 default)

These rules are now default and mandatory unless the user explicitly overrides them.

### Preload order (must run in order)

1. `internal-contexts/README.md`
2. `internal-contexts/writing style guides/jack-writing-style-guide.md`
3. `internal-contexts/writing style guides/deadwater-blog-style-guide.md`
4. `internal-contexts/product briefs/deadwater-product-offerings.md`
5. `internal-contexts/workflows/blog-writing-workflow.md`
6. `internal-contexts/workflows/blog-input-template.md`
7. 1-3 relevant `content/read/*.md` examples for pattern matching and internal link planning

### Style and voice defaults

- Tone: sharp, direct, analytical, practical, non-fluffy
- Avoid generic SaaS thought leadership language
- Keep paragraphs short and readable
- Prefer concrete operational examples over abstractions
- Use sentence case for all headings and subheadings
- Final section must be forward-looking, never "In conclusion"

### Structure defaults

- 3-5 H2 sections (unless user requests otherwise)
- 1-4 H3 subsections under each H2 (unless clearly unnecessary)
- H2s should advance one argument thread, not parallel filler modules

### Evidence and linking defaults

- Claims must be source-backed or explicitly framed as inference
- Target 8-16 total links
- Minimum 3 internal links and 3 external links
- Distribute links naturally across the post
- Prefer primary external sources over listicles

### Product and positioning safety

- Position Deadwater as system-first and code-first
- Keep framing aligned to Workflow build / Content OS install / optional support
- Avoid unsourced performance claims and guaranteed outcomes
- Do not reintroduce Before.dev/Reforge language or assumptions

## 1) Intake and framing

- Extract and restate the four inputs.
- Define one core thesis sentence.
- Define one target reader profile.
- Define one business intent:
- awareness
- consideration
- decision
- If any input is missing, infer assumptions explicitly and continue.

### Intake interaction protocol (default UX)

When the user asks in prose to "write a blog post," use this interaction sequence by default:

1. Ask for missing required inputs before drafting:
- title
- keyword
- context/angle
- target audience
- business intent (awareness, consideration, decision)

2. Ask optional execution controls only if not already implied:
- external research scope (web, Reddit, HN)
- linking requirements (internal/external minimums)
- export target (markdown, CMS JSON)

3. After user replies with inputs, restate the normalized brief in 3-6 bullets and begin execution immediately.

4. Execute the full skill chain in this order:
- deadwater_intake_normalizer
- deadwater_research_collector
- deadwater_outline_generator
- deadwater_section_briefer
- deadwater_section_drafter (loop)
- deadwater_intro_writer
- deadwater_closing_writer
- deadwater_editorial_qa
- deadwater_export_formatter

5. Do not ask the user to name skills explicitly; infer and run them from intent.

## 2) Research pass one (market pulse)

Run a broad scan across:

- Google/web search
- Reddit threads
- Hacker News discussions
- Primary docs or standards where relevant

Capture:

- recurring pain points
- current objections
- language users actually use
- stale takes to avoid
- credible external sources worth linking
- section-specific source notes to support downstream H2 claims

## 3) Build the outline from research

Create a practical outline with:

- strong hook
- problem framing
- mechanism/system explanation
- practical steps/checklist/examples
- future-facing final section (never call it "conclusion")

Structure defaults (unless user overrides):

- 3 to 5 H2 sections
- each H2 includes 1 to 4 H3 subsections
- each H2 section targets 400 to 800 words

Each section should include:

- section goal
- key claim
- proof/source direction
- planned examples or case patterns

## 4) Section-level research loops

For each outline section:

- run targeted follow-up research
- validate claims against primary sources
- collect two to four references where practical
- collect one internal Deadwater reference if relevant
- record concise source notes (claim supported + takeaway)

If evidence is weak, revise the section claim before drafting.

## 5) Draft the article

- Write with Jack voice defaults.
- Keep paragraphs short and readable.
- Prefer concrete examples over abstractions.
- Avoid generic B2B filler language.

## 6) Flow and coherence pass

Edit for:

- logical progression between sections
- non-repetitive structure
- clear transitions
- consistent argument thread

Delete sections that do not advance the thesis.

## 7) Final section pattern

End with a future-facing section that:

- reiterates the core argument
- states what changes now
- points to action/decision

Do not title this section "Conclusion" or "In conclusion."

## 8) Link pass (internal + external)

Follow current linking standards:

- total links: 8 to 16
- internal links: at least 3
- external links: at least 3
- distribute links across the article
- attach links to naturally relevant anchor text

Prioritize external primary sources over listicles.

Depth QA before final submit:

- each H2 lands between 400 and 800 words unless intentionally justified
- each H2 has 1 to 4 H3s unless clearly warranted
- section claims map to collected source notes

## 9) Final QA

- claims align with product brief language
- no unsourced hard claims
- style aligns with Jack guide and Deadwater punctuation rules
- heading capitalization matches sentence case used in paragraph text (capitalize first word and proper nouns only; no title case and no forced all-lowercase)
- CTA is practical and context-appropriate

## Session preferences to preserve

Observed user preferences from recent Deadwater comparison-post work:

- Prefer clearer inline link phrasing over ambiguous anchors in running sentences.
- For comparison posts, structure by tool type at H2 level.
- Under each type, use one H3 per company/tool with the tool name as the heading.
- Under each tool H3, include a quick overview in a few short paragraphs.
- Represent each tool fairly using a mix of official pages, review sources (for example G2), and community signals (for example Reddit), with links.
- Keep existing strong sections where possible; restructure/move content instead of deleting unless necessary.
- Use comparison tables when they improve scanability and decision speed.
