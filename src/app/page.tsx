import Image from "next/image";
import Link from "next/link";
import { ContentDraftWorkbench } from "@/components/ContentDraftWorkbench";
import { ContentOsAnimation } from "@/components/ContentOsAnimation";
import { FaultLineDivider, SedimentLayers } from "@/components/illustrations";

export default function HomePage() {
  return (
    <div className="container-narrow">
      <section className="pt-4 pb-2">
        <div className="container-narrow relative z-10 pt-4 pb-2 lg:pt-6 lg:pb-4">
          <h1 className="heading-serif text-4xl sm:text-5xl">Deadwater.ai</h1>
          <h2 className="mt-4 text-xl text-slate-200">Content OS for an AI-first world.</h2>
          <p className="mt-6 text-lg text-slate-300">
            We build AI-native content systems that lock AI into your company's DNA. The result is content that compounds,
            teams that move faster, and agents that can operate with confidence at scale.
          </p>
        </div>
        <div className="relative mt-2 w-screen overflow-hidden ml-[calc(50%-50vw)] mr-[calc(50%-50vw)] sm:mt-4 sm:ml-0 sm:mr-0 sm:w-full sm:aspect-[1060/274]">
          <div className="relative h-40 w-full sm:h-full">
            <Image
              src="/hero/hero.png"
              alt="Submerged structure under a flat waterline"
              fill
              priority
              className="object-cover object-left sm:object-contain sm:object-center"
              sizes="100vw"
            />
          </div>
          <div className="pointer-events-none absolute inset-0 flex items-center">
            <div className="container-narrow pointer-events-auto flex flex-wrap gap-4">
              <Link href="/read" className="focus-ring border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white">
                Read
              </Link>
              <Link href="/contact" className="focus-ring border border-ink-700 bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-300 hover:text-white">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="my-6 h-px w-full bg-ink-800" />

      <section className="section">
        <div className="grid-structure">
          <div className="flex flex-col gap-8 text-lg text-slate-300">
            <p>
              Most teams are trying to bolt AI onto systems that were never designed for it. PDFs. CMSs. Wikis.
              Dashboards. Prompts taped together with hope.
            </p>
            <p>
              Deadwater builds Content OS—AI-native systems where content isn't just written, stored, or searched. It's
              understood, expanded, and operated on by agents.
            </p>
            <p className="text-white">Content OS is how AI actually becomes useful.</p>
            <p>
              Deadwater automated content greatly exceeds traditional SEO content quality standards, providing higher
              conversions, higher rankings in search engines and LLMs, with an unprecedented level of customization and
              focus on brand relevance.
            </p>
          </div>
          <div className="side-note">System substrate</div>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-narrow">
          <ContentOsAnimation size="md" loop />
        </div>
      </section>

      <section className="section">
        <div className="grid-structure">
          <div>
            <h2 className="heading-serif text-2xl">What is a content OS?</h2>
            <p className="mt-4 text-slate-300">
              A Content OS is an AI-first, AI-native content system designed to be fully usable by agents—not just humans.
            </p>
            <div className="mt-6 grid gap-4 text-slate-300">
              <p>Structured for maximum context, not maximum clicks.</p>
              <p>Written in formats machines can reason over—markdown, schemas, graphs.</p>
              <p>Continuously expandable by AI using its own internal understanding.</p>
              <p>Operational, not editorial—content that powers workflows, not pages.</p>
              <p>Think less "website." More "living system."</p>
              <p className="text-white">A Content OS doesn't just answer questions. It runs things.</p>
            </div>
          </div>
          <div className="border border-ink-800 p-4">
            <SedimentLayers className="h-auto w-full text-white/70" />
          </div>
        </div>
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">What it looks like in practice</h2>
        <div className="mt-6 grid gap-6 text-slate-300">
          <div className="card">
            <h3 className="heading-serif text-xl text-white">AI-native content foundations</h3>
            <p className="mt-3">
              Markdown-based knowledge systems that agents can read, traverse, and extend. Content is modular, versioned,
              and intentionally designed for reuse by humans and machines alike.
            </p>
          </div>
          <div className="card">
            <h3 className="heading-serif text-xl text-white">Agent-driven content creation</h3>
            <p className="mt-3">
              Using models like Codex to generate new pages, summaries, and derivatives directly from existing context—no
              prompts duct-taped together, no human in the loop unless you want one.
            </p>
          </div>
          <div className="card">
            <h3 className="heading-serif text-xl text-white">Zero-touch knowledge operations</h3>
            <p className="mt-3">
              AI-powered workflows that ingest, normalize, connect, and maintain knowledge automatically. Your
              documentation updates itself. Your playbooks evolve. Your systems stay coherent.
            </p>
          </div>
          <div className="card">
            <h3 className="heading-serif text-xl text-white">Smart websites that think</h3>
            <p className="mt-3">
              Sites that don't just render content—but reason over it. Websites that can answer, adapt, personalize, and
              act because they're backed by a real Content OS, not a CMS pretending to be one.
            </p>
          </div>
        </div>
      </section>

      <div className="section-tight">
        <FaultLineDivider className="mx-auto h-20 w-full max-w-3xl text-white/70" />
      </div>

      <ContentDraftWorkbench />

      <section className="section">
        <h2 className="heading-serif text-2xl">What we actually help with</h2>
        <ul className="mt-6 grid gap-2 list-disc pl-5 text-slate-300">
          <li>AI ops and workflows.</li>
          <li>Knowledge base architecture that powers all business functions.</li>
          <li>AI content production at scale.</li>
          <li>Freeing your marketers to focus on human and brand content.</li>
          <li>SEO and product marketing on autopilot.</li>
          <li>Smart AI workflows and websites.</li>
        </ul>
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">Why Deadwater</h2>
        <p className="mt-4 text-slate-300">
          Deadwater Content OSs are the next evolution of human&lt;&gt;AI interaction. We're all familiar with LLM parlor tricks,
          Moltbook, and automation steps. We enable brands to use AI to its full potential, delivering maximum impact.
        </p>
      </section>
    </div>
  );
}
