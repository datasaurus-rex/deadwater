---
title: "Living Docs for Agents"
description: "How to make documentation that updates itself without falling into chaos."
date: "2025-06-16"
tags: ["living-docs", "agents", "automation", "content-os"]
draft: false
---

# Living Docs for [Agents](/read/governance-for-[agents](https://en.wikipedia.org/wiki/Intelligent_agent))

Most teams want documentation that stays current without endless manual updates. The moment you try to automate, you hit a wall: the docs become inconsistent, and the updates feel untrusted. A [Content OS](/read/what-is-a-content-os) solves this by making documents living systems with defined contracts and controlled evolution.

Living docs are not a gimmick. They are the logical result of [AI](https://en.wikipedia.org/wiki/Artificial_intelligence)-native operations. If agents can read content, they should be able to extend it. The trick is to do so without creating noise.

## Define the mutation surface

Every living doc should state what is allowed to change. This is the mutation surface. Without it, agents will over-edit or drift.

The mutation surface can be encoded in frontmatter:

```yaml
mutable_sections:
  - "Status"
  - "Recent changes"
  - "Metrics"
```

Agents now know which sections they are permitted to update, and which sections are stable. This prevents them from rewriting the core narrative every time they see new information.

## Separate narrative from telemetry

Living docs fail when telemetry bleeds into the narrative. You want narrative to be stable and focused, while telemetry can update frequently.

Use separate sections:

- Narrative: why this exists, how it should be used, key principles.
- Telemetry: metrics, recent changes, status updates.

This lets agents update telemetry without rewriting context. Humans get stable interpretation, agents get dynamic data.

## Use explicit update triggers

If an agent is responsible for updates, it needs clear triggers. "When things change" is not a trigger. Use measurable signals:

- Update when `error_rate` crosses threshold.
- Update after a release event.
- Update every 30 days if no changes occur.

These triggers can be encoded in the doc itself. The doc becomes a [workflow](/read/agent-workflows-that-stick) object.

## Audit trails are not optional

Living docs must have audit trails. Otherwise the system becomes untrusted. Use a structured change log section and include a short note for each update. This does not need to be long. It needs to be consistent.

> If you cannot see how a doc changed, you cannot trust that it changed correctly.

## Validation and rollback

Automated updates should be reversible. If a doc changes and an error is detected, the system needs a clean rollback path. This can be as simple as storing the previous version and adding a `rollback_to` field in metadata.

Validation also matters. Before a change is accepted, the doc should pass [schema](https://json-schema.org/) checks and section checks. Without validation, [automation](https://en.wikipedia.org/wiki/Automation) becomes noise.

## Tie updates to ownership

Automation without ownership leads to drift. Every living doc should include an `owner` field. When an agent proposes a change, the owner is responsible for approval or review.

This does not need to slow things down. A simple workflow can mark updates as `status: review`, allowing owners to approve in batches. Ownership is the difference between a living doc and a wandering doc.

## Protect the narrative layer

The narrative layer should change slowly. It is where the system explains intent, scope, and reasoning. If the narrative is constantly rewritten by automation, the doc loses its anchor.

A simple rule helps: keep narrative updates human-led, keep telemetry updates agent-led. The system stays alive without losing its core meaning.

## Practical checklist

- Declare a mutation surface in frontmatter.
- Keep narrative and telemetry separate.
- Use explicit, measurable update triggers.
- Require change logs for every update.
- Set a validation step for critical docs.
- Review automation rules quarterly.

## The stability paradox

The paradox of living docs is that they only stay alive when they are controlled. A [Content OS](/read/what-is-a-content-os) does not give agents permission to rewrite everything. It gives them a small, defined surface to update. That is what keeps the system stable. That is what makes living docs real.
