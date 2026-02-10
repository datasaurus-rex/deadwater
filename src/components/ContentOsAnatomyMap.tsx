"use client";

import { useMemo, useState } from "react";

type Layer = {
  id: string;
  title: string;
  summary: string;
  detail: string[];
};

const layers: Layer[] = [
  {
    id: "source-of-truth",
    title: "Single source of truth",
    summary: "Portable, versioned content the system can trust.",
    detail: [
      "Markdown-backed modules with explicit ownership.",
      "Version control as the change ledger.",
      "Clear boundaries between drafts and published artifacts."
    ]
  },
  {
    id: "schemas",
    title: "Schemas + contracts",
    summary: "Inputs and outputs are enforced, not implied.",
    detail: [
      "Required fields and validation rules.",
      "Predictable shapes for every content type.",
      "Failures are explicit, not silent drift."
    ]
  },
  {
    id: "validation",
    title: "Validation + guardrails",
    summary: "AI can act, but only inside safe constraints.",
    detail: [
      "Linting and checks before execution.",
      "Policy gates for risky updates.",
      "Audit trails for every change."
    ]
  },
  {
    id: "execution",
    title: "Execution semantics",
    summary: "Content is runnable, not just readable.",
    detail: [
      "Agents can query, extend, and update safely.",
      "Workflows operate on shared primitives.",
      "Deterministic paths for high-stakes tasks."
    ]
  },
  {
    id: "ownership",
    title: "Ownership + portability",
    summary: "Your system, your repo, your infrastructure.",
    detail: [
      "No platform lock-in or hidden state.",
      "Portable across models and tooling.",
      "Clear accountability per module."
    ]
  }
];

export function ContentOsAnatomyMap() {
  const [active, setActive] = useState(layers[0].id);

  const activeLayer = useMemo(
    () => layers.find((layer) => layer.id === active) ?? layers[0],
    [active]
  );

  return (
    <section className="mt-10 border border-ink-800 bg-ink-900/40 p-6">
      <div className="flex flex-col gap-3">
        <p className="eyebrow">Interactive map</p>
        <h3 className="heading-serif text-2xl text-white">Content OS anatomy</h3>
        <p className="text-slate-300">
          Click a layer to see what it actually means in practice. This is the minimum structure that keeps AI systems
          stable over time.
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="flex flex-wrap gap-3">
          {layers.map((layer) => {
            const isActive = layer.id === active;
            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => setActive(layer.id)}
                className={`focus-ring rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition ${
                  isActive
                    ? "border-accent-blue bg-accent-blue/20 text-white"
                    : "border-ink-700 text-slate-300 hover:border-accent-blue hover:text-white"
                }`}
              >
                {layer.title}
              </button>
            );
          })}
        </div>

        <div className="rounded-lg border border-ink-800 bg-ink-950/70 p-5">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Selected layer</p>
          <h4 className="mt-3 text-lg text-white">{activeLayer.title}</h4>
          <p className="mt-2 text-slate-300">{activeLayer.summary}</p>
          <ul className="mt-4 grid gap-2 list-disc pl-5 text-slate-300">
            {activeLayer.detail.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
