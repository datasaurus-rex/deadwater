import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing—deadwater.ai",
  description: "Two ways to work together: production workflows or an all-in content OS that compounds.",
  openGraph: {
    title: "Pricing—deadwater.ai",
    description: "Two ways to work together: production workflows or an all-in content OS that compounds."
  }
};

export default function PricingPage() {
  return (
    <div className="container-narrow section">
      <section className="section-tight">
        <p className="eyebrow">Pricing</p>
        <h1 className="heading-serif text-4xl">Pricing</h1>
        <p className="mt-6 text-lg text-slate-300">
          You are not outsourcing tasks. You are installing leverage that compounds. We build code-first systems that make
          AI reliable, repeatable, and safe to run at scale.
        </p>
        <p className="mt-3 text-lg text-slate-300">
          Choose a focused workflow build or a full Content OS install. Both start with a scope definition and a fixed
          price proposal.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/contact" className="focus-ring border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white">
            Book a scoping call
          </Link>
          <Link href="mailto:hello@deadwater.ai" className="focus-ring border border-ink-700 bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-300 hover:text-white">
            Email me
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          Built from the same playbook that powered Statsig’s marketing engine.
        </p>
      </section>

      <div className="divider" />

      <section className="section">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="card">
            <p className="eyebrow">Package A</p>
            <h2 className="heading-serif text-2xl text-white">Workflow build</h2>
            <p className="mt-2 text-slate-300">Automate a specific growth or content bottleneck.</p>
            <div className="mt-6 flex flex-col gap-2 text-slate-300">
            <p className="text-xl text-white">From $22,000</p>
            <p className="text-sm text-slate-400">Typical timeline: 2–3 weeks</p>
          </div>
          <div className="mt-6 grid gap-2 text-slate-300">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Includes</p>
            <ul className="list-disc pl-5">
                <li>2 production-ready workflows (AirOps)</li>
                <li>Input→output contract defined up front</li>
                <li>Prompt + logic design (not templates)</li>
                <li>QA pass + edge-case handling</li>
                <li>Handoff docs + walkthrough</li>
            </ul>
            </div>
            <div className="mt-6 grid gap-2 text-slate-300">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Best for</p>
              <ul className="list-disc pl-5">
                <li>Competitive content</li>
                <li>SEO briefs/drafts</li>
                <li>Research synthesis</li>
                <li>Transcript→publishable output</li>
              </ul>
            </div>
            <Link href="/contact" className="focus-ring mt-6 inline-flex border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white">
              Choose workflow build
            </Link>
          </div>

          <div className="card">
            <p className="eyebrow">Package B</p>
            <h2 className="heading-serif text-2xl text-white">Content OS install</h2>
            <p className="mt-2 text-slate-300">A code-first content system that AI can safely execute.</p>
            <div className="mt-6 flex flex-col gap-2 text-slate-300">
              <p className="text-xl text-white">From $50,000</p>
              <p className="text-sm text-slate-400">Typical timeline: 4–6 weeks</p>
            </div>
            <div className="mt-6 grid gap-2 text-slate-300">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Includes</p>
              <ul className="list-disc pl-5">
                <li>Code-based site or docs hub (no CMS)</li>
                <li>Markdown as the source of truth (git-backed)</li>
                <li>Content schemas + folder conventions</li>
                <li>Guardrails: validation, linting, and safe execution patterns</li>
                <li>AI execution hooks for Codex/Claude Code (documented)</li>
                <li>Example modules for SEO + competitive + internal context</li>
              </ul>
              <p className="text-sm text-slate-400">Note: Content OS replaces your website.</p>
            </div>
            <div className="mt-6 grid gap-2 text-slate-300">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Best for</p>
              <ul className="list-disc pl-5">
                <li>Teams that want compounding leverage</li>
                <li>Teams avoiding tool lock-in</li>
                <li>Teams with lots of institutional knowledge</li>
              </ul>
            </div>
            <Link href="/contact" className="focus-ring mt-6 inline-flex border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white">
              Choose content OS
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">Which option should I choose?</h2>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="border border-ink-800 p-4">
            <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">If you want…</h3>
            <div className="mt-4 grid gap-3 text-slate-300">
              <p>Fix one bottleneck fast</p>
              <p>Minimal internal change</p>
              <p>Tool-centric automation</p>
              <p>Targeted workflow outcomes</p>
              <p>Short-term speed with clear ROI</p>
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white">Choose workflow build</p>
          </div>
          <div className="border border-ink-800 p-4">
            <h3 className="text-sm uppercase tracking-[0.3em] text-slate-400">If you want…</h3>
            <div className="mt-4 grid gap-3 text-slate-300">
              <p>Build a reusable foundation</p>
              <p>Standardize the whole content pipeline</p>
              <p>System-centric operations</p>
              <p>Compounding leverage over time</p>
              <p>Long-term operational control</p>
            </div>
            <p className="mt-6 text-sm uppercase tracking-[0.3em] text-white">Choose content OS install</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">Ongoing support</h2>
        <p className="mt-4 text-slate-300">For teams that want iteration after launch.</p>
        <p className="mt-4 text-xl text-white">$6,000–$12,000 / month</p>
        <ul className="mt-4 grid gap-2 list-disc pl-5 text-slate-300">
          <li>New workflows/content types</li>
          <li>Prompt and schema iteration</li>
          <li>Model/tooling/integration upgrades</li>
          <li>Quarterly system cleanup and refactors</li>
        </ul>
        <p className="mt-4 text-sm text-slate-400">
          Not required—most teams start with a build, then add support once it’s live.
        </p>
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">FAQ</h2>
        <div className="mt-6 grid gap-6 text-slate-300">
          <div>
            <h3 className="text-white">What’s the difference between a workflow and a content OS?</h3>
            <p className="mt-2">
              A workflow build transforms your growth content creation workflow into an automated, AI-powered system. A
              Content OS install changes how content is stored, governed, and executed so multiple workflows can run
              safely. One is a sharp tool. The other is the system that makes tools compounding.
            </p>
          </div>
          <div>
            <h3 className="text-white">Do you work with existing tools like Notion, GA4, Search Console, HubSpot?</h3>
            <p className="mt-2">
              Yes, as inputs or reporting surfaces. We prioritize code-first sources of truth, but we can integrate
              common tools where they already hold real data. We’ll map the workflow boundaries during the scoping call.
            </p>
          </div>
          <div>
            <h3 className="text-white">What do you need from us to start?</h3>
            <p className="mt-2">
              A point person, access to the relevant source content, and a clear business outcome. We start with a
              scoping call and leave you with a written scope + fixed price proposal.
            </p>
          </div>
          <div>
            <h3 className="text-white">Who owns the system?</h3>
            <p className="mt-2">
              You do. The code, content, and documentation live in your repo and your tooling. Our job is to leave you
              with a system you can run without us. As much as we love the collaboration, we set your team up to be
              self-sufficient experts.
            </p>
          </div>
          <div>
            <h3 className="text-white">Can my team maintain this after handoff?</h3>
            <p className="mt-2">
              Yes. We provide documentation, conventions, and a walkthrough. If you want ongoing support, we can stay
              involved, but the system is designed for self-sufficiency.
            </p>
          </div>
          <div>
            <h3 className="text-white">What if we don’t know the exact scope yet?</h3>
            <p className="mt-2">
              That is normal. The scoping call exists to clarify the inputs, outputs, and constraints. You will receive a
              written scope and fixed price proposal before any build starts.
            </p>
          </div>
          <div>
            <h3 className="text-white">Do you do hourly work?</h3>
            <p className="mt-2">
              No. We work on fixed scopes with outcome-oriented pricing. That keeps incentives aligned and delivery
              predictable.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">Install leverage</h2>
        <p className="mt-4 text-slate-300">
          If your bottleneck is speed or consistency, this is designed for you.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link href="/contact" className="focus-ring border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white">
            Book a scoping call
          </Link>
          <Link href="mailto:hello@deadwater.ai" className="focus-ring border border-ink-700 bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-300 hover:text-white">
            Email me
          </Link>
        </div>
        <p className="mt-4 text-sm text-slate-400">
          Most builds start within 2–3 weeks depending on availability.
        </p>
      </section>
    </div>
  );
}
