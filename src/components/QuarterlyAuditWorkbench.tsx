"use client";

import { useMemo, useState } from "react";

type AuditRecord = {
  id: string;
  page: string;
  signal: string;
  action: string;
  route: string[];
};

const records: AuditRecord[] = [
  {
    id: "light-refresh",
    page: "/read/ai-workflow-guide",
    signal: "Traffic is down, but the core intent is still valid.",
    action: "Light refresh",
    route: [
      "Pull current page and related cluster context",
      "Update examples, links, and FAQs",
      "Run low-risk review",
      "Republish"
    ]
  },
  {
    id: "rewrite",
    page: "/read/content-ops-playbook",
    signal: "The structure is stale and the SERP has shifted.",
    action: "Full rewrite",
    route: [
      "Re-brief the page",
      "Rebuild the outline against current intent",
      "Rewrite core sections",
      "Run editor approval before publish"
    ]
  },
  {
    id: "consolidate",
    page: "/read/old-comparison-post",
    signal: "The page overlaps with stronger assets and has low strategic value.",
    action: "Consolidate",
    route: [
      "Map overlap with stronger asset",
      "Merge salvageable material",
      "Redirect or retire page",
      "Update internal links"
    ]
  }
];

export function QuarterlyAuditWorkbench() {
  const [selectedId, setSelectedId] = useState<string>(records[0].id);

  const selected = useMemo(
    () => records.find((record) => record.id === selectedId) ?? records[0],
    [selectedId]
  );

  return (
    <section className="container-post my-10">
      <div className="overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/80">
        <div className="border-b border-ink-800 px-5 py-4 sm:px-6">
          <p className="eyebrow">Interactive audit router</p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Click an audit record to see how the refresh path should change
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            A quarterly audit becomes useful when each page routes into a clear next action instead of a generic
            backlog bucket.
          </p>
        </div>

        <div className="grid gap-6 px-5 py-5 sm:px-6 lg:grid-cols-[340px_minmax(0,1fr)]">
          <div className="space-y-3">
            {records.map((record) => {
              const isActive = record.id === selected.id;
              return (
                <button
                  key={record.id}
                  type="button"
                  onClick={() => setSelectedId(record.id)}
                  className={`focus-ring w-full rounded-xl border px-4 py-4 text-left transition ${
                    isActive
                      ? "border-accent-blue bg-accent-blue/15 text-white"
                      : "border-ink-700 bg-ink-950/60 text-slate-300 hover:border-accent-blue"
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Page record</p>
                  <p className="mt-2 text-sm">{record.page}</p>
                  <p className="mt-2 text-xs text-slate-400">{record.signal}</p>
                </button>
              );
            })}
          </div>

          <div className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-[220px_minmax(0,1fr)]">
              <div className="rounded-xl border border-ink-800 bg-ink-950/70 p-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Recommended action</p>
                <p className="mt-3 text-lg text-white">{selected.action}</p>
              </div>
              <div className="rounded-xl border border-ink-800 bg-ink-950/70 p-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Why this route</p>
                <p className="mt-3 text-sm leading-6 text-slate-200">{selected.signal}</p>
              </div>
            </div>

            <div className="rounded-xl border border-ink-800 bg-ink-950/70 p-4">
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Workflow path</p>
              <ol className="mt-3 grid gap-3 text-sm text-slate-200">
                {selected.route.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-accent-blue/60 text-[11px] text-sky-300">
                      {index + 1}
                    </span>
                    <span className="leading-6">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
