import Image from "next/image";
import Link from "next/link";
import { FaultLineDivider, SedimentLayers } from "@/components/illustrations";

export default function HomePage() {
  return (
    <div className="container-narrow">
      <section className="pt-4 pb-2">
        <div className="relative overflow-hidden px-6 pt-4 pb-2 lg:px-10 lg:pt-6 lg:pb-4">
          <div className="relative z-10 max-w-xl">
            <h1 className="heading-serif text-4xl sm:text-5xl">Deadwater.ai</h1>
            <h2 className="mt-4 text-xl text-slate-200">Content OS for an AI-first world.</h2>
            <p className="mt-6 text-lg text-slate-300">
              We build AI-native content systems that stay coherent under pressure. If your stack depends on fragile
              prompts or endless manual updates, it is not done yet. Deadwater replaces that drift with structure agents
              can trust.
            </p>
          </div>
          <div className="relative mt-2 w-full overflow-hidden sm:mt-4">
            <div className="relative left-1/2 right-1/2 w-screen -mx-[50vw] sm:static sm:mx-0 sm:w-full">
              <Image
                src="/hero/hero.png"
                alt="Submerged structure under a flat waterline"
                width={1060}
                height={274}
                priority
                className="h-auto w-screen max-w-none object-contain object-left sm:w-full sm:object-contain sm:object-center"
                sizes="(min-width: 1024px) 1060px, 100vw"
              />
            </div>
            <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-wrap gap-4">
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
            Deadwater builds Content OS—AI-native systems where content isn’t just written, stored, or searched. It’s
            understood, expanded, and operated on by agents.
          </p>
          <p className="text-white">Content OS is how AI actually becomes useful.</p>
          </div>
          <div className="side-note">System substrate</div>
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
              <p>Think less “website.” More “living system.”</p>
              <p className="text-white">A Content OS doesn’t just answer questions. It runs things.</p>
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
              Sites that don’t just render content—but reason over it. Websites that can answer, adapt, personalize, and
              act because they’re backed by a real Content OS, not a CMS pretending to be one.
            </p>
          </div>
        </div>
      </section>

      <div className="section-tight">
        <FaultLineDivider className="mx-auto h-20 w-full max-w-3xl text-white/70" />
      </div>

      <section className="section">
        <h2 className="heading-serif text-2xl">What we actually help with</h2>
        <div className="mt-6 grid gap-4 text-slate-300">
          <p>AI ops and agent workflows.</p>
          <p>Knowledge base architecture that doesn’t rot.</p>
          <p>GPT training and context strategy.</p>
          <p>Content systems designed for automation first.</p>
          <p>Smart, AI-driven websites that do real work.</p>
          <p className="text-white">
            If your AI depends on brittle prompts, manual updates, or human babysitting—it’s not done yet.
          </p>
        </div>
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">Why deadwater</h2>
        <p className="mt-4 text-slate-300">
          Deadwater is where systems go quiet and deep. No noise. No fluff. Just structure that holds under pressure.
        </p>
        <p className="mt-4 text-white">We don’t ship demos. We build foundations.</p>
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">Mission statement</h2>
        <div className="mt-4 grid gap-4 text-slate-300">
          <p>Deadwater.ai exists to build content systems that AI can actually use.</p>
          <p>
            Our mission is to replace fragile, human-dependent knowledge stacks with AI-native Content OS platforms—systems
            designed for maximum context, continuous intelligence, and autonomous operation. We believe content should not
            just inform people, but empower agents to reason, act, and evolve without constant human intervention.
          </p>
          <p className="text-white">
            We build the layer where AI stops being impressive—and starts being reliable.
          </p>
        </div>
      </section>
    </div>
  );
}
