import type { Metadata } from "next";
import Link from "next/link";

const ogImage = "/og/og.png";

export const metadata: Metadata = {
  title: "Pricing - deadwater.ai",
  description: "Three ways to work together: workflow builds, context layer builds, or a full Content OS install.",
  openGraph: {
    title: "Pricing - deadwater.ai",
    description: "Three ways to work together: workflow builds, context layer builds, or a full Content OS install.",
    images: [{ url: ogImage, alt: "Deadwater.ai - Context layers and Content OS installs" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing - deadwater.ai",
    description: "Three ways to work together: workflow builds, context layer builds, or a full Content OS install.",
    images: [ogImage]
  }
};

const packages = [
  {
    label: "Package A",
    title: "Workflow Build",
    href: "/pricing",
    cta: "Choose workflow build",
    price: "From $22,000",
    timing: "Typical timeline: 2-3 weeks",
    description:
      "Automate a specific growth or content bottleneck with a focused production workflow designed to do one job well.",
    includes: [
      "Two production-ready workflows",
      "Defined input-output contracts",
      "Prompt and logic design",
      "QA, edge cases, and handoff docs",
      "Walkthrough for internal use"
    ],
    bestFor: [
      "Competitive content and SEO workflows",
      "Research synthesis and draft generation",
      "Teams that want a fast, targeted automation win"
    ]
  },
  {
    label: "Package B",
    title: "Context Layer Build",
    href: "/context-layer",
    cta: "Explore context layer",
    price: "From $25,000",
    timing: "Typical timeline: 2-4 weeks",
    description:
      "Turn scattered internal knowledge into an owned, agent-ready markdown system your whole team can use with Codex, Claude Code, and other AI tools.",
    includes: [
      "Extraction from sources like Notion, workspace exports, docs, and internal files",
      "Normalization into a markdown and git-backed repository",
      "Folder structure, conventions, and operating docs for agent use",
      "Packaged skills so the system works like an executive command center",
      "Handoff for internal use across teams"
    ],
    bestFor: [
      "Teams drowning in Notion sprawl and scattered docs",
      "Operators already using coding agents and wanting better context",
      "Companies that want owned AI infrastructure before a full site rebuild"
    ]
  },
  {
    label: "Package C",
    title: "Content OS Install",
    href: "/content-os",
    cta: "Explore Content OS",
    price: "From $50,000",
    timing: "Typical timeline: 4-6 weeks",
    description:
      "Install the deeper operating layer that governs content production, publishing, and execution so multiple AI workflows can run safely.",
    includes: [
      "Code-based site or docs hub with markdown as the source of truth",
      "Schemas, folder conventions, and publishing structure",
      "Guardrails: validation, linting, and safe execution patterns",
      "Documented execution hooks for Codex, Claude Code, and similar agents",
      "Examples for SEO, competitive, and internal context workflows"
    ],
    bestFor: [
      "Teams that want compounding leverage across the whole content system",
      "Teams replacing brittle CMS and prompt-driven processes",
      "Companies ready for a full operating-layer install"
    ]
  }
];

export default function PricingPage() {
  return (
    <div className="container-narrow section">
      <section className="section-tight">
        <h1 className="heading-serif text-4xl">Pricing</h1>
        <p className="mt-6 text-lg text-slate-300">
          Deadwater sells owned AI infrastructure, not outsourced content labor. Start with a focused workflow, build
          an agent-ready context layer, or go all the way to a full Content OS install.
        </p>
        <p className="mt-3 text-lg text-slate-300">
          Both offers begin with a scoping call and end with systems your team can run without renting your intelligence
          back from a vendor.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/contact" className="focus-ring border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white">
            Book a scoping call
          </Link>
          <Link href="mailto:hello@deadwater.ai" className="focus-ring border border-ink-700 bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-300 hover:text-white">
            Email me
          </Link>
        </div>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="grid gap-6 lg:grid-cols-3">
          {packages.map((pkg) => (
            <article key={pkg.title} className="card">
              <p className="eyebrow">{pkg.label}</p>
              <h2 className="heading-serif text-2xl text-white">{pkg.title}</h2>
              <p className="mt-2 text-slate-300">{pkg.description}</p>
              <div className="mt-6 flex flex-col gap-2 text-slate-300">
                <p className="text-xl text-white">{pkg.price}</p>
                <p className="text-sm text-slate-400">{pkg.timing}</p>
              </div>
              <div className="mt-6 grid gap-2 text-slate-300">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Includes</p>
                <ul className="list-disc pl-5">
                  {pkg.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-6 grid gap-2 text-slate-300">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Best for</p>
                <ul className="list-disc pl-5">
                  {pkg.bestFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <Link href={pkg.href} className="focus-ring mt-6 inline-flex border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white">
                {pkg.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">Which option should I choose?</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="border border-ink-800 p-4">
            <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">Choose Workflow Build if you want</h3>
            <div className="mt-4 grid gap-3 text-slate-300">
              <p>To fix one painful bottleneck fast</p>
              <p>To automate a specific content or research job</p>
              <p>A faster, narrower engagement with clear ROI</p>
              <p>Execution without changing the whole system yet</p>
            </div>
          </div>
          <div className="border border-ink-800 p-4">
            <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">Choose Context Layer Build if you want</h3>
            <div className="mt-4 grid gap-3 text-slate-300">
              <p>To turn scattered company knowledge into something agents can actually use</p>
              <p>To make Codex or Claude Code dramatically more useful inside your business</p>
              <p>To own a markdown-based command center instead of another hosted knowledge tool</p>
              <p>A strong first infrastructure step before a bigger system install</p>
            </div>
          </div>
          <div className="border border-ink-800 p-4">
            <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">Choose Content OS Install if you want</h3>
            <div className="mt-4 grid gap-3 text-slate-300">
              <p>To rebuild the actual content operating layer</p>
              <p>To standardize publishing, schemas, and execution across the whole system</p>
              <p>To replace brittle CMS and prompt workflows with governed infrastructure</p>
              <p>Compounding leverage across content production, not just internal knowledge access</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">Ongoing support</h2>
        <p className="mt-4 text-slate-300">For teams that want iteration after launch.</p>
        <p className="mt-4 text-xl text-white">$6,000-$12,000 / month</p>
        <ul className="mt-4 grid list-disc gap-2 pl-5 text-slate-300">
          <li>New skills, workflows, and content types</li>
          <li>Prompt, schema, and structure iteration</li>
          <li>Model, tooling, and integration upgrades</li>
          <li>Quarterly cleanup and refactors</li>
        </ul>
        <p className="mt-4 text-sm text-slate-400">
          Not required. Most teams start with one build, then add support once the system is live.
        </p>
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">FAQ</h2>
        <div className="mt-6 grid gap-6 text-slate-300">
          <div>
            <h3 className="text-white">What is the difference between a workflow, a context layer, and a Content OS?</h3>
            <p className="mt-2">
              A workflow build automates one defined job. A context layer makes your company legible to agents by
              structuring internal knowledge. A Content OS adds the full operating layer for content execution,
              governance, and publishing. They solve different depths of the same problem.
            </p>
          </div>
          <div>
            <h3 className="text-white">What is the difference between a context layer and a Content OS?</h3>
            <p className="mt-2">
              A context layer makes your company legible to agents. It extracts and structures internal knowledge so AI
              can reason with it. A Content OS goes further by governing how content is stored, executed, validated, and
              published. One is the knowledge foundation. The other is the operating system running on top of it.
            </p>
          </div>
          <div>
            <h3 className="text-white">Do you work with Notion and other existing tools?</h3>
            <p className="mt-2">
              Yes. The context layer offer exists specifically because most companies already have valuable knowledge
              trapped inside tools like Notion, docs hubs, workspace exports, and scattered internal files.
            </p>
          </div>
          <div>
            <h3 className="text-white">Who owns the system after handoff?</h3>
            <p className="mt-2">
              You do. The point is to leave you with an owned markdown-based asset, not lock your intelligence inside a
              vendor platform.
            </p>
          </div>
          <div>
            <h3 className="text-white">Can every employee use the context layer?</h3>
            <p className="mt-2">
              Yes. We package the system with skills, structure, and operating guidance so it can function like an
              internal command center, not just a developer toy.
            </p>
          </div>
          <div>
            <h3 className="text-white">What if we are not ready for the full Content OS yet?</h3>
            <p className="mt-2">
              That is exactly why the context layer offer exists. It is a strong standalone deliverable and a natural
              precursor to a deeper install later.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">Build owned leverage</h2>
        <p className="mt-4 text-slate-300">
          If your bottleneck is speed, context, or full-system execution, there is now a clean entry point for each.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/contact" className="focus-ring border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white">
            Book a scoping call
          </Link>
          <Link href="/context-layer" className="focus-ring border border-ink-700 bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-300 hover:text-white">
            Explore context layer
          </Link>
        </div>
      </section>
    </div>
  );
}
