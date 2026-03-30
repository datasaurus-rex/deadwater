"use client";

import { useMemo, useState } from "react";

type ToggleId = "workflow" | "system" | "search" | "governance";

type Track = {
  id: string;
  title: string;
  summary: string;
  goodFor: string[];
  wrongFor: string[];
  exampleTools: string;
};

const tracks: Track[] = [
  {
    id: "workflow-tools",
    title: "Workflow automation tools",
    summary: "Best when the bottleneck is repeated execution across content or GTM steps.",
    goodFor: [
      "High-volume drafting, refresh, or GTM task flow",
      "Faster activation without building a full operating layer first",
      "Teams that already know the process they want to codify"
    ],
    wrongFor: [
      "Acts as if tool logic alone solves source-of-truth drift",
      "Treats prompt orchestration as governance",
      "Needs a durable system of record inside the product stack"
    ],
    exampleTools: "AirOps, Copy.ai, Zapier, Make"
  },
  {
    id: "system-tools",
    title: "Content system and CMS tools",
    summary: "Best when the bottleneck is content structure, delivery, and schema design.",
    goodFor: [
      "Schema-backed content models",
      "API-first delivery across channels",
      "Developer-led teams that need stronger content primitives"
    ],
    wrongFor: [
      "Assumes storage automatically creates reliable AI execution",
      "Needs workflow contracts, QA, and agent controls out of the box",
      "Needs fast AI operating behavior without architecture work"
    ],
    exampleTools: "Contentful, Sanity"
  },
  {
    id: "retrieval-tools",
    title: "Enterprise search and governed agent tools",
    summary: "Best when the bottleneck is access, permissions, and policy-aware internal context.",
    goodFor: [
      "Permission-aware retrieval across internal systems",
      "Governed enterprise assistant or agent deployment",
      "Organizations with fragmented knowledge surfaces"
    ],
    wrongFor: [
      "Confuses retrieval quality with execution quality",
      "Needs a content workflow engine or publishing substrate",
      "Needs content architecture instead of enterprise search"
    ],
    exampleTools: "Writer, Glean, Notion"
  }
];

export function ToolFitWorkbench() {
  const [needs, setNeeds] = useState<Record<ToggleId, boolean>>({
    workflow: true,
    system: false,
    search: false,
    governance: false
  });

  const scores = useMemo(() => {
    const next = {
      "workflow-tools": 0,
      "system-tools": 0,
      "retrieval-tools": 0
    };

    if (needs.workflow) {
      next["workflow-tools"] += 4;
      next["system-tools"] += 1;
    }

    if (needs.system) {
      next["system-tools"] += 4;
      next["workflow-tools"] += 1;
    }

    if (needs.search) {
      next["retrieval-tools"] += 4;
      next["system-tools"] += 1;
    }

    if (needs.governance) {
      next["retrieval-tools"] += 2;
      next["system-tools"] += 2;
      next["workflow-tools"] += 1;
    }

    return next;
  }, [needs]);

  const ranked = useMemo(() => {
    return [...tracks].sort((a, b) => scores[b.id as keyof typeof scores] - scores[a.id as keyof typeof scores]);
  }, [scores]);

  const recommendation = ranked[0];

  const toggle = (id: ToggleId) => {
    setNeeds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="mt-10 border border-ink-800 bg-ink-900/40 p-6">
      <div className="flex flex-col gap-3">
        <p className="eyebrow">Interactive buyer aid</p>
        <h3 className="heading-serif text-2xl text-white">Which tool layer actually fits your problem?</h3>
        <p className="text-slate-300">
          Flip the switches based on what is breaking. The point is not to crown one winner. The point is to stop
          buying a good tool for the wrong layer.
        </p>
      </div>

      <div className="mt-6 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="rounded-lg border border-ink-800 bg-ink-950/70 p-5">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">What do you actually need?</p>
          <div className="mt-4 grid gap-3">
            {[
              ["workflow", "Repeated content or GTM execution is breaking"],
              ["system", "Content structure and source truth are weak"],
              ["search", "Internal context is fragmented across systems"],
              ["governance", "Permissions, review, and policy control matter a lot"]
            ].map(([id, label]) => {
              const isOn = needs[id as ToggleId];
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => toggle(id as ToggleId)}
                  className={`focus-ring flex items-center justify-between rounded-lg border px-4 py-3 text-left transition ${
                    isOn
                      ? "border-accent-blue bg-accent-blue/15 text-white"
                      : "border-ink-700 bg-ink-900/60 text-slate-300 hover:border-accent-blue"
                  }`}
                >
                  <span className="pr-4 text-sm">{label}</span>
                  <span className="text-[11px] uppercase tracking-[0.25em]">{isOn ? "On" : "Off"}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="rounded-lg border border-ink-800 bg-ink-950/70 p-5">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Recommended first layer</p>
          <h4 className="mt-3 text-xl text-white">{recommendation.title}</h4>
          <p className="mt-2 text-slate-300">{recommendation.summary}</p>
          <p className="mt-3 text-sm text-slate-400">Examples: {recommendation.exampleTools}</p>

          <div className="mt-5 grid gap-4">
            {ranked.map((track) => {
              const score = scores[track.id as keyof typeof scores];
              const width = `${Math.min(100, Math.max(12, score * 16))}%`;

              return (
                <div key={track.id}>
                  <div className="flex items-center justify-between text-sm text-slate-300">
                    <span>{track.title}</span>
                    <span>{score}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-ink-800">
                    <div className="h-2 rounded-full bg-accent-blue transition-all" style={{ width }} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Good fit when</p>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-300">
                {recommendation.goodFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Usually the wrong fit when</p>
              <ul className="mt-3 list-disc pl-5 text-sm text-slate-300">
                {recommendation.wrongFor.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
