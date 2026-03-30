"use client";

import { useMemo, useState } from "react";

type FeedbackCase = {
  id: string;
  label: string;
  reviewerNote: string;
  route: string[];
  checks: string[];
};

const cases: FeedbackCase[] = [
  {
    id: "factual",
    label: "Factual accuracy",
    reviewerNote: "This product claim is too broad. Re-ground it in source truth.",
    route: [
      "Read product-truth source",
      "Revise the affected section only",
      "Preserve approved sections",
      "Run factual QA before approval"
    ],
    checks: ["Source truth loaded", "Claim narrowed", "No new unsupported language"]
  },
  {
    id: "messaging",
    label: "Messaging alignment",
    reviewerNote: "The draft sounds off-brand for a top-of-funnel piece.",
    route: [
      "Load Brand Kit rules",
      "Revise intro, transitions, and CTA",
      "Keep evidence intact",
      "Run tone and policy check"
    ],
    checks: ["Audience fit improved", "CTA adjusted", "Brand rules still applied"]
  },
  {
    id: "structure",
    label: "Structural clarity",
    reviewerNote: "Section two repeats itself and the heading overpromises.",
    route: [
      "Re-read the section brief",
      "Rewrite the target section only",
      "Update heading and transitions",
      "Run coherence and formatting check"
    ],
    checks: ["Heading improved", "Section tightened", "Article flow preserved"]
  }
];

export function EditorialFeedbackWorkbench() {
  const [activeId, setActiveId] = useState<string>(cases[0].id);

  const activeCase = useMemo(
    () => cases.find((item) => item.id === activeId) ?? cases[0],
    [activeId]
  );

  return (
    <section className="container-post my-10">
      <div className="overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/80">
        <div className="border-b border-ink-800 px-5 py-4 sm:px-6">
          <p className="eyebrow">Interactive revision map</p>
          <h3 className="mt-2 text-xl font-semibold text-white">
            Click the feedback type and watch the workflow route change
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            Editorial comments should not all trigger the same rewrite path. Different kinds of feedback need
            different retrieval, revision, and QA behavior.
          </p>
        </div>

        <div className="grid gap-6 px-5 py-5 sm:px-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="space-y-3">
            {cases.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`focus-ring w-full rounded-xl border px-4 py-4 text-left transition ${
                    isActive
                      ? "border-accent-blue bg-accent-blue/15 text-white"
                      : "border-ink-700 bg-ink-950/60 text-slate-300 hover:border-accent-blue"
                  }`}
                >
                  <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Feedback type</p>
                  <p className="mt-2 text-sm">{item.label}</p>
                </button>
              );
            })}
          </div>

          <div className="grid gap-4">
            <div className="rounded-xl border border-ink-800 bg-ink-950/70 p-4">
              <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Reviewer note</p>
              <p className="mt-3 text-sm leading-6 text-slate-200">{activeCase.reviewerNote}</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-ink-800 bg-ink-950/70 p-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Workflow route</p>
                <ol className="mt-3 space-y-3 text-sm text-slate-200">
                  {activeCase.route.map((step, index) => (
                    <li key={step} className="flex gap-3">
                      <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-accent-blue/60 text-[11px] text-sky-300">
                        {index + 1}
                      </span>
                      <span className="leading-6">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-xl border border-ink-800 bg-ink-950/70 p-4">
                <p className="text-[11px] uppercase tracking-[0.25em] text-slate-400">Checks before approve</p>
                <ul className="mt-3 space-y-3 text-sm text-slate-200">
                  {activeCase.checks.map((check) => (
                    <li key={check} className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accent-sea" />
                      <span className="leading-6">{check}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
