import type { Metadata } from "next";
import Link from "next/link";
import { otherOptions } from "@/lib/other-options";

export const metadata: Metadata = {
  title: "Other options",
  description:
    "A practical guide to adjacent tools and platforms, and how each compares with a Deadwater Content OS install.",
  openGraph: {
    title: "Other options - Deadwater.ai",
    description:
      "A practical guide to adjacent tools and platforms, and how each compares with a Deadwater Content OS install."
  }
};

export default function OtherOptionsPage() {
  return (
    <div className="container-narrow section">
      <div className="flex flex-col gap-4">
        <p className="eyebrow">Buyer guide</p>
        <h1 className="heading-serif text-3xl">Other options</h1>
        <p className="text-lg text-slate-300">
          This section compares common alternatives and explains where each approach fits. If you are deciding between a
          tool-first path and a Deadwater Content OS install, start here.
        </p>
      </div>

      <div className="mt-10 grid gap-4">
        {otherOptions.map((option) => (
          <Link
            key={option.slug}
            href={`/other-options/${option.slug}`}
            className="focus-ring block rounded-xl border border-ink-800 bg-ink-900/40 p-5 transition-colors hover:border-ink-700 hover:bg-ink-900/70"
          >
            <p className="eyebrow text-xs">{option.category}</p>
            <h2 className="mt-2 text-2xl font-semibold text-white">{option.name}</h2>
            <p className="mt-2 text-slate-300">{option.summary}</p>
            <p className="mt-4 text-sm text-slate-400">
              <span className="font-medium text-slate-300">Best for:</span> {option.bestFor}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
