"use client";

import { useMemo, useState } from "react";

type ScenarioId = "renewals" | "pipeline" | "support";

type Scenario = {
  id: ScenarioId;
  question: string;
  semanticLayer: string[];
  ontologyLayer: string[];
};

const scenarios: Scenario[] = [
  {
    id: "renewals",
    question: "Why did enterprise renewals fall last quarter?",
    semanticLayer: [
      "Approved renewal_rate metric",
      "Enterprise segment definition",
      "Canonical join path across contracts and renewals"
    ],
    ontologyLayer: [
      "Renewal is a subclass of contract event",
      "Enterprise customer inherits customer properties",
      "Prospects cannot have renewal events"
    ]
  },
  {
    id: "pipeline",
    question: "Which deals should count as qualified pipeline?",
    semanticLayer: [
      "Official qualified_pipeline metric",
      "Stage mapping and date grain",
      "Entity definitions for account, opportunity, and owner"
    ],
    ontologyLayer: [
      "Partner-led account is not the same as direct account",
      "Opportunity states can exclude certain categories",
      "Inherited properties across account classes"
    ]
  },
  {
    id: "support",
    question: "Which support events should trigger a renewal risk alert?",
    semanticLayer: [
      "Approved risk threshold metric",
      "Support event counts and time windows",
      "Join path between customer, ticket, and contract"
    ],
    ontologyLayer: [
      "Escalation event is a subtype of support event",
      "Renewal risk applies only to existing customers",
      "Certain ticket types imply stronger downstream risk"
    ]
  }
];

export function SemanticLayerOwlWorkbench() {
  const [activeId, setActiveId] = useState<ScenarioId>("renewals");

  const active = useMemo(
    () => scenarios.find((scenario) => scenario.id === activeId) ?? scenarios[0],
    [activeId]
  );

  return (
    <section className="mt-10 border border-ink-800 bg-ink-900/40 p-6">
      <div className="flex flex-col gap-3">
        <p className="eyebrow">Interactive comparison</p>
        <h3 className="heading-serif text-2xl text-white">What each layer gives the agent</h3>
        <p className="text-slate-300">
          Pick a question. The semantic layer tells the agent how the business measures it. The ontology layer tells
          the agent what the objects in that question actually mean.
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-3">
        {scenarios.map((scenario) => {
          const isActive = scenario.id === active.id;
          return (
            <button
              key={scenario.id}
              type="button"
              onClick={() => setActiveId(scenario.id)}
              className={`focus-ring rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition ${
                isActive
                  ? "border-accent-blue bg-accent-blue/20 text-white"
                  : "border-ink-700 text-slate-300 hover:border-accent-blue hover:text-white"
              }`}
            >
              {scenario.id}
            </button>
          );
        })}
      </div>

      <div className="mt-6 rounded-lg border border-ink-800 bg-ink-950/70 p-5">
        <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Selected question</p>
        <h4 className="mt-3 text-xl text-white">{active.question}</h4>

        <div className="mt-5 grid gap-4 lg:grid-cols-2">
          <div className="rounded-lg border border-ink-800 bg-ink-900/70 p-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-sky-300">Semantic layer supplies</p>
            <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-slate-300">
              {active.semanticLayer.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-ink-800 bg-ink-900/70 p-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-teal-300">Ontology layer supplies</p>
            <ul className="mt-3 list-disc pl-5 text-sm leading-6 text-slate-300">
              {active.ontologyLayer.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
