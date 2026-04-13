import type { Metadata } from "next";
import Link from "next/link";

const ogImage = "/og/og.png";

export const metadata: Metadata = {
  title: "Context Layer Build - deadwater.ai",
  description:
    "Context layer consulting for teams that want to turn Notion sprawl and internal knowledge into an owned, agent-ready markdown system.",
  openGraph: {
    title: "Context Layer Build - deadwater.ai",
    description:
      "Turn internal knowledge into an owned context layer your team can use with Codex, Claude Code, and other agents.",
    images: [{ url: ogImage, alt: "Deadwater.ai - Context Layer Build" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Context Layer Build - deadwater.ai",
    description:
      "Turn internal knowledge into an owned context layer your team can use with Codex, Claude Code, and other agents.",
    images: [ogImage]
  }
};

const deliverables = [
  "Knowledge extraction from Notion, workspace exports, docs hubs, and internal files",
  "Normalization into markdown and git-backed structure",
  "Folder conventions and operating docs for agent use",
  "Packaged skills so the repo behaves like an internal command center",
  "A handoff your team can run with Codex, Claude Code, or similar tools"
];

const useCases = [
  "Executive command center for company knowledge",
  "Faster research and synthesis across scattered internal docs",
  "Higher quality prompts because the context is finally usable",
  "A strong foundation for future automation and Content OS work"
];

export default function ContextLayerPage() {
  return (
    <div className="container-narrow section">
      <section className="section-tight">
        <p className="eyebrow">Context layer consulting</p>
        <h1 className="heading-serif text-4xl text-white">Context Layer Build</h1>
        <p className="mt-6 text-lg text-slate-300">
          Most companies do not have an AI problem. They have a context problem. Their knowledge is trapped across
          Notion, docs, shared drives, and internal sprawl, so agents stay shallow even when the models are strong.
        </p>
        <p className="mt-3 text-lg text-slate-300">
          Deadwater turns that mess into an owned, markdown-based context layer your team can use with Codex, Claude
          Code, and other agent tools.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/contact" className="focus-ring border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white">
            Book a scoping call
          </Link>
          <Link href="/pricing" className="focus-ring border border-ink-700 bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-300 hover:text-white">
            View pricing
          </Link>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <h2 className="heading-serif text-2xl">What a context layer actually is</h2>
        <div className="mt-4 grid gap-4 text-slate-300">
          <p>
            A context layer is the structured knowledge foundation that makes agents useful inside a real business. It is
            not just search. It is not just a vector database. It is your company logic, docs, product truth, operating
            conventions, and reusable instructions shaped into something machines can work with.
          </p>
          <p>
            Once that layer exists, your AI stops acting like a clever intern with no memory and starts behaving more
            like an operator with access to the room.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">What Deadwater delivers</h2>
        <ul className="mt-6 grid gap-3 text-slate-300">
          {deliverables.map((item) => (
            <li key={item} className="rounded-2xl border border-ink-800 bg-ink-900/40 px-5 py-4">
              {item}
            </li>
          ))}
        </ul>
        <p className="mt-6 text-sm text-slate-400">Price: from $25,000</p>
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">Best fit</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="border border-ink-800 bg-black p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Good fit</p>
            <div className="mt-4 grid gap-3 text-slate-300">
              <p>You already have valuable internal knowledge, but it is trapped in messy tools</p>
              <p>Your team is experimenting with coding agents and wants better outputs</p>
              <p>You want to own the system instead of buying another hosted AI layer</p>
            </div>
          </article>
          <article className="border border-ink-800 bg-black p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Not the right fit</p>
            <div className="mt-4 grid gap-3 text-slate-300">
              <p>You want generic content volume with no appetite for structure</p>
              <p>You do not have meaningful internal knowledge to organize yet</p>
              <p>You are really looking for a full publishing system rebuild</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">What it unlocks</h2>
        <ul className="mt-6 grid gap-3 text-slate-300">
          {useCases.map((item) => (
            <li key={item} className="rounded-2xl border border-ink-800 bg-ink-900/40 px-5 py-4">
              {item}
            </li>
          ))}
        </ul>
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">How it relates to Content OS</h2>
        <div className="mt-4 grid gap-4 text-slate-300">
          <p>
            A context layer is often the right first step. It turns scattered knowledge into an owned system your team
            and your agents can actually use.
          </p>
          <p>
            A Content OS goes further. It adds the full execution layer for content production, publishing, governance,
            and compounding operational leverage.
          </p>
        </div>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/content-os" className="focus-ring border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white">
            Explore Content OS
          </Link>
          <Link href="/contact" className="focus-ring border border-ink-700 bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-300 hover:text-white">
            Book a scoping call
          </Link>
        </div>
      </section>
    </div>
  );
}
