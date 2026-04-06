"use client";

import { useMemo, useState } from "react";

type LayerId = "instructions" | "business" | "execution" | "knowledge" | "governance";

type Layer = {
  id: LayerId;
  title: string;
  purpose: string;
  examples: string[];
  ifMissing: string;
};

const layers: Layer[] = [
  {
    id: "instructions",
    title: "Instruction layer",
    purpose: "Tells the agent how to behave in this environment before it starts improvising.",
    examples: ["AGENTS.md", "CLAUDE.md", "Local repo rules"],
    ifMissing: "The model behaves generically and starts guessing how your system works."
  },
  {
    id: "business",
    title: "Business truth layer",
    purpose: "Defines what is true about the product, offer, audience, and current positioning.",
    examples: ["Product brief", "Pricing notes", "Positioning docs"],
    ifMissing: "The output sounds polished but drifts away from the actual business."
  },
  {
    id: "execution",
    title: "Execution rules layer",
    purpose: "Constrains how content gets produced, checked, and handed off.",
    examples: ["Style guide", "Publish checklist", "QA rules"],
    ifMissing: "The model knows facts but still ships work in the wrong shape."
  },
  {
    id: "knowledge",
    title: "Knowledge layer",
    purpose: "Supplies reusable docs and maintained source material the agent can traverse as needed.",
    examples: ["Docs", "Comparison pages", "Decision records"],
    ifMissing: "The system keeps re-asking for context or working from shallow fragments."
  },
  {
    id: "governance",
    title: "Governance layer",
    purpose: "Defines what can be changed, what requires review, and who owns the decision.",
    examples: ["Review gates", "Ownership rules", "Audit history"],
    ifMissing: "The system becomes fast in all the dangerous ways."
  }
];

export function ContextLayerWorkbench() {
  const [activeId, setActiveId] = useState<LayerId>("instructions");

  const active = useMemo(
    () => layers.find((layer) => layer.id === activeId) ?? layers[0],
    [activeId]
  );

  return (
    <section className="mt-10 border border-ink-800 bg-ink-900/40 p-6">
      <div className="flex flex-col gap-3">
        <p className="eyebrow">Interactive layer map</p>
        <h3 className="heading-serif text-2xl text-white">What the context stack is actually made of</h3>
        <p className="text-slate-300">
          Click through the layers. The point is not to create one giant memory blob. The point is to give the agent a
          clean operating stack with different kinds of truth in the right places.
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="grid gap-3">
          {layers.map((layer) => {
            const isActive = layer.id === active.id;
            return (
              <button
                key={layer.id}
                type="button"
                onClick={() => setActiveId(layer.id)}
                className={`focus-ring rounded-lg border px-4 py-4 text-left transition ${
                  isActive
                    ? "border-accent-blue bg-accent-blue/15 text-white"
                    : "border-ink-700 bg-ink-950/70 text-slate-300 hover:border-accent-blue"
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Layer</p>
                <h4 className="mt-2 text-lg text-white">{layer.title}</h4>
                <p className="mt-2 text-sm leading-6 text-slate-300">{layer.purpose}</p>
              </button>
            );
          })}
        </div>

        <div className="rounded-lg border border-ink-800 bg-ink-950/70 p-5">
          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Selected layer</p>
          <h4 className="mt-3 text-2xl text-white">{active.title}</h4>
          <p className="mt-3 text-sm leading-6 text-slate-300">{active.purpose}</p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <div className="rounded-lg border border-ink-800 bg-ink-900/70 p-4">
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Usually includes</p>
              <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-slate-300">
                {active.examples.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-ink-800 bg-ink-900/70 p-4">
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">If this is weak</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{active.ifMissing}</p>
            </div>
          </div>

          <div className="mt-5 rounded-lg border border-accent-blue/30 bg-accent-blue/10 p-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-sky-300">Operator takeaway</p>
            <p className="mt-3 text-sm leading-6 text-slate-100">
              A context layer is not one file. It is a stack of instruction, truth, execution, knowledge, and control
              surfaces that let the agent act without freewheeling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
