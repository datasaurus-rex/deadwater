---
title: "Context Strategy: Designing for Maximum Signal"
description: "A framework for deciding what context agents should see, and why."
date: "2025-08-04"
tags: ["context", "strategy", "ai-native", "content-os"]
draft: false
---

# Context Strategy: Designing for Maximum Signal

Context is not just "more information." It is the curated set of signals an [agent](/read/governance-for-agents) needs to act with precision. Most [AI](https://en.wikipedia.org/wiki/Artificial_intelligence) systems fail because they treat context as a dump: everything in, hope for the best. A real context strategy is a design discipline.

The goal is maximum signal, minimum noise. That requires [structure](/read/content-os-foundations), and it requires restraint.

## Decide what an agent must know

Start with the action. If the agent must generate a policy update, it needs a policy [schema](https://json-schema.org/), recent incidents, and ownership data. It does not need the entire company wiki.

A useful exercise is to list the minimum information required to complete a task with confidence. That becomes your context baseline. Anything beyond that should be added only if it improves the output measurably.

## Separate evergreen from volatile

Content changes at different speeds. If you combine evergreen definitions with volatile incidents in one module, the whole thing becomes stale.

Split content by volatility:

- Evergreen: definitions, principles, canonical schemas.
- Volatile: incidents, tickets, daily updates.
- Temporal: time-bound events, announcements, and reviews.

This lets an agent pull the right layer without drowning in irrelevant detail. It also keeps long-lived modules stable and easier to trust.

## Use section contracts

Headings are contracts. If a module always has `## Risks`, `## Dependencies`, and `## Next Actions`, an agent can reliably extract what it needs.

This is how you design for predictable parsing without rigid schemas. The headings define a stable surface. Inline code should be used to lock precision around terms like `risk_owner` or `sla_days`. It makes the difference between maybe and must.

## Keep context small but complete

It is tempting to give the model everything. Resist. Large context increases cost and decreases clarity. The better strategy is to create smaller modules with clear references.

Think of it like a [dependency graph](https://en.wikipedia.org/wiki/Dependency_graph):

- A decision module links to the system it affects.
- The system module links to the operational metrics.
- The metrics module links to dashboards and definitions.

This allows agents to traverse as needed, rather than ingest everything at once.

## Measure context drift

Context drift happens when a module stops reflecting reality. You need a way to detect this. One simple method is to add a "last verified" field in frontmatter. Another is to require a periodic review.

Example:

```yaml
last_verified: "2025-07-10"
review_cycle_days: 90
```

An agent can check these fields and surface modules that are overdue. Drift detection is part of the system, not a manual habit.

> A context strategy without drift detection is just a content pile.

## Context budgets and tiers

Not all [workflows](/read/agent-workflows-that-stick) deserve the same context budget. For high-risk decisions, you want a narrow, verified set of modules. For exploratory research, you can afford wider context and more [search](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

Define tiers of context. For example: Tier 1 is verified and owned, Tier 2 is recent but unverified, Tier 3 is archival. Agents can then adjust their confidence based on tier, which reduces hallucination and overreach.

## The handoff between search and context

Search is how agents find candidate modules. Context strategy determines which modules they should actually use. That handoff should be explicit. For high-stakes workflows, define a small "[source of truth](/read/overview-how-content-operating-systems-work)" set. For lower-stakes workflows, allow broader exploration.

This avoids the common failure mode of agents over-trusting a random search result.

## Practical checklist

- Define a minimum context set per workflow.
- Separate evergreen, volatile, and temporal content.
- Use headings as contracts.
- Link modules instead of bloating them.
- Track drift with explicit verification fields.
- Keep context small enough to be readable and reliable.

## The real work

Context strategy is not a one-time task. It is a product discipline. When you get it right, agents operate on clean signals and stop hallucinating around gaps. The system becomes predictable, because the context is predictable. That is the real work.
