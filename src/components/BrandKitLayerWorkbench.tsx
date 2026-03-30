"use client";

import { useMemo, useState } from "react";

type LayerId = "brandKit" | "knowledgeBase" | "workflowInput";

type ContextItem = {
  id: string;
  label: string;
  target: LayerId;
  reason: string;
};

const items: ContextItem[] = [
  {
    id: "voice",
    label: "Voice and tone",
    target: "brandKit",
    reason: "This is a behavior rule. It tells the workflow how to sound, not what facts are true."
  },
  {
    id: "audience",
    label: "Audience framing",
    target: "brandKit",
    reason: "Audience context should shape framing, emphasis, and language across runs."
  },
  {
    id: "cta",
    label: "CTA pattern",
    target: "brandKit",
    reason: "CTA style belongs with content-type and messaging rules, not with factual retrieval."
  },
  {
    id: "product-truth",
    label: "Product truth",
    target: "knowledgeBase",
    reason: "This is evidence. The workflow should retrieve it from maintained source documents."
  },
  {
    id: "pricing",
    label: "Pricing notes",
    target: "knowledgeBase",
    reason: "Pricing is source truth and should stay in the retrieval layer so it can be kept current."
  },
  {
    id: "links",
    label: "Published content and internal links",
    target: "knowledgeBase",
    reason: "Internal-link targets and prior posts are owned context that the workflow should search and mine."
  },
  {
    id: "keyword",
    label: "Keyword and topic",
    target: "workflowInput",
    reason: "This defines the immediate assignment for the current run."
  },
  {
    id: "intent",
    label: "Business intent",
    target: "workflowInput",
    reason: "The workflow needs to know whether this run is aiming at awareness, consideration, or decision."
  },
  {
    id: "task",
    label: "Specific writing task",
    target: "workflowInput",
    reason: "This is the direct instruction that tells the system what output to produce right now."
  }
];

const layerCopy = {
  brandKit: {
    title: "Brand Kit",
    description: "Guides behavior: tone, audience fit, content-type rules, and CTA logic.",
    examples: ["Voice and tone", "Audience framing", "CTA pattern"],
    wrongUse: "Do not use it as your source of factual truth."
  },
  knowledgeBase: {
    title: "Knowledge base",
    description: "Supplies evidence: product truth, source docs, prior posts, and owned context.",
    examples: ["Product truth", "Pricing notes", "Published content and internal links"],
    wrongUse: "Do not expect it to decide tone or the immediate assignment."
  },
  workflowInput: {
    title: "Workflow input",
    description: "Defines the immediate job: what this run is trying to produce and why.",
    examples: ["Keyword and topic", "Business intent", "Specific writing task"],
    wrongUse: "Do not overload it with long-term rules or source-of-truth documents."
  }
} as const;

export function BrandKitLayerWorkbench() {
  const [selectedId, setSelectedId] = useState<string>(items[0].id);

  const selected = useMemo(
    () => items.find((item) => item.id === selectedId) ?? items[0],
    [selectedId]
  );

  const otherLayers = (["brandKit", "knowledgeBase", "workflowInput"] as const).filter(
    (layer) => layer !== selected.target
  );

  return (
    <section className="container-post my-10 lg:relative lg:left-1/2 lg:w-[min(100vw-40px,1100px)] lg:max-w-none lg:-translate-x-1/2 lg:px-0">
      <div className="overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/80">
        <div className="border-b border-ink-800 px-5 py-4 sm:px-6">
          <p className="eyebrow">Interactive layer map</p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Click a context item to see where it actually belongs
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            The Brand Kit should guide behavior. The knowledge base should carry source truth. The workflow input
            should define the job. Mixing those layers is how drift starts.
          </p>
        </div>

        <div className="grid gap-6 px-5 py-5 sm:px-6 lg:grid-cols-[300px_minmax(0,1fr)]">
          <div className="rounded-xl border border-ink-800 bg-ink-950/70 p-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Context items</p>
            <div className="mt-3 grid gap-3">
              {items.map((item) => {
                const isActive = item.id === selected.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    className={`focus-ring rounded-lg border px-4 py-3 text-left text-sm transition ${
                      isActive
                        ? "border-accent-blue bg-accent-blue/15 text-white"
                        : "border-ink-700 bg-ink-900/60 text-slate-300 hover:border-accent-blue"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-xl border border-accent-blue/30 bg-accent-blue/10 p-4">
              <p className="text-[11px] uppercase tracking-[0.25em] text-sky-300">Selected item</p>
              <div className="mt-3 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-accent-blue/60 bg-ink-950/70 px-3 py-1 text-sm text-white">
                  {selected.label}
                </span>
                <span className="text-sm text-slate-300">
                  Best fit: <span className="text-white">{layerCopy[selected.target].title}</span>
                </span>
              </div>
              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-200">{selected.reason}</p>
            </div>

            <div className="rounded-xl border border-accent-blue bg-accent-blue/12 p-5 shadow-[0_0_0_1px_rgba(96,165,250,0.25)]">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-sky-300">Best fit layer</p>
                  <h4 className="mt-2 text-2xl text-white">{layerCopy[selected.target].title}</h4>
                </div>
                <span className="rounded-full border border-accent-blue/60 bg-ink-950/70 px-3 py-1 text-sm text-white">
                  {selected.label}
                </span>
              </div>

              <p className="mt-3 max-w-3xl text-sm leading-6 text-slate-200">
                {layerCopy[selected.target].description}
              </p>

              <div className="mt-5 grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.8fr)]">
                <div className="rounded-lg border border-ink-800 bg-ink-900/70 p-4">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-sky-300">Why it fits</p>
                  <p className="mt-3 text-sm leading-6 text-slate-100">{selected.reason}</p>
                </div>

                <div className="rounded-lg border border-ink-800 bg-ink-900/70 p-4">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Usually owns</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {layerCopy[selected.target].examples.map((example) => (
                      <span
                        key={example}
                        className={`rounded-full border px-2.5 py-1 text-xs ${
                          example === selected.label
                            ? "border-accent-blue bg-accent-blue/20 text-white"
                            : "border-ink-700 text-slate-300"
                        }`}
                      >
                        {example}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {otherLayers.map((layer) => (
                <div key={layer} className="rounded-xl border border-ink-800 bg-ink-950/70 p-4">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Other layer</p>
                  <h5 className="mt-2 text-lg text-white">{layerCopy[layer].title}</h5>
                  <p className="mt-2 text-sm leading-6 text-slate-300">{layerCopy[layer].description}</p>

                  <div className="mt-4 rounded-lg border border-ink-800 bg-ink-900/70 p-3">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Usually owns</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {layerCopy[layer].examples.map((example) => (
                        <span key={example} className="rounded-full border border-ink-700 px-2.5 py-1 text-xs text-slate-300">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 rounded-lg border border-ink-800 bg-ink-900/70 px-3 py-3 text-sm">
                    <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Common mistake</p>
                    <p className="mt-2 leading-6 text-slate-300">{layerCopy[layer].wrongUse}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
