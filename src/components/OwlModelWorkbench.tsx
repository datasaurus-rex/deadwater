"use client";

import { useMemo, useState } from "react";

type NodeId = "account" | "customer" | "enterprise" | "contractEvent" | "renewal";

type NodeData = {
  id: NodeId;
  title: string;
  role: string;
  inherits?: string;
  rules: string[];
};

const nodes: NodeData[] = [
  {
    id: "account",
    title: "Account",
    role: "Base business entity for organizations in the system.",
    rules: ["Can own contracts", "Can have lifecycle states"]
  },
  {
    id: "customer",
    title: "Customer",
    role: "Account subclass for organizations with an active commercial relationship.",
    inherits: "Account",
    rules: ["Inherits account properties", "Can have renewal-related events"]
  },
  {
    id: "enterprise",
    title: "Enterprise customer",
    role: "Customer subclass with additional category-specific rules.",
    inherits: "Customer",
    rules: ["Inherits customer properties", "Can be segmented separately in business logic"]
  },
  {
    id: "contractEvent",
    title: "Contract event",
    role: "Base event class for contract lifecycle changes.",
    rules: ["Must reference a contract", "Can include new, renewal, or expansion events"]
  },
  {
    id: "renewal",
    title: "Renewal",
    role: "Contract event subclass tied to an existing contract relationship.",
    inherits: "Contract event",
    rules: ["Requires an existing contract", "Cannot belong to a prospect-only entity"]
  }
];

export function OwlModelWorkbench() {
  const [activeId, setActiveId] = useState<NodeId>("renewal");

  const active = useMemo(
    () => nodes.find((node) => node.id === activeId) ?? nodes[0],
    [activeId]
  );

  return (
    <section className="mt-10 border border-ink-800 bg-ink-900/40 p-6">
      <div className="flex flex-col gap-3">
        <p className="eyebrow">Interactive model</p>
        <h3 className="heading-serif text-2xl text-white">How OWL turns terms into machine-usable meaning</h3>
        <p className="text-slate-300">
          Click a node in the toy model. This is the practical shift OWL makes: the machine does not just read labels.
          It can follow class relationships, inheritance, and constraints.
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
        <div className="grid gap-3">
          {nodes.map((node) => {
            const isActive = node.id === active.id;
            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveId(node.id)}
                className={`focus-ring rounded-lg border px-4 py-4 text-left transition ${
                  isActive
                    ? "border-accent-blue bg-accent-blue/15 text-white"
                    : "border-ink-700 bg-ink-950/70 text-slate-300 hover:border-accent-blue"
                }`}
              >
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Node</p>
                <h4 className="mt-2 text-lg text-white">{node.title}</h4>
                {node.inherits ? (
                  <p className="mt-2 text-sm text-slate-400">Inherits from {node.inherits}</p>
                ) : (
                  <p className="mt-2 text-sm text-slate-500">Base class</p>
                )}
              </button>
            );
          })}
        </div>

        <div className="rounded-lg border border-ink-800 bg-ink-950/70 p-5">
          <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Selected node</p>
          <h4 className="mt-3 text-2xl text-white">{active.title}</h4>
          <p className="mt-3 text-sm leading-6 text-slate-300">{active.role}</p>

          <div className="mt-5 rounded-lg border border-ink-800 bg-ink-900/70 p-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Inference path</p>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              {active.inherits
                ? `${active.title} inherits properties and constraints from ${active.inherits}.`
                : `${active.title} acts as a base class other nodes can inherit from.`}
            </p>
          </div>

          <div className="mt-4 rounded-lg border border-ink-800 bg-ink-900/70 p-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Rules the machine can reuse</p>
            <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-slate-300">
              {active.rules.map((rule) => (
                <li key={rule}>{rule}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
