import Image from "next/image";
import Link from "next/link";
import { ContentOsAnatomyMap } from "@/components/ContentOsAnatomyMap";
import { ContentOsAnimation } from "@/components/ContentOsAnimation";
import { PhilosophyBlocks } from "@/components/PhilosophyBlocks";
import { HandshakeIcon, RobotBrainIcon, TrashCanIcon } from "@/components/PhilosophyIcons";
import { FaultLineDivider } from "@/components/illustrations";

export default function HomePage() {
  return (
    <div className="container-narrow">
      <section className="pt-4 pb-2">
        <div className="container-narrow relative z-10 pt-4 pb-2 lg:pt-6 lg:pb-4">
          <h1 className="heading-serif text-4xl sm:text-5xl">Deadwater.ai</h1>
          <h2 className="mt-4 text-xl text-slate-200">Install AI systems that run.</h2>
          <p className="mt-6 text-lg text-slate-300">
            Deadwater builds stack-aware AI workflows and full Content OS platforms for teams that need reliable
            execution, not prompt glue.
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
              <Link
                href="/contact"
                className="focus-ring border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
              >
                Book a scoping call
              </Link>
              <Link
                href="/content-os"
                className="focus-ring border border-ink-700 bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-300 hover:text-white"
              >
                See content OS anatomy
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="my-6 h-px w-full bg-ink-800" />

      <section className="section">
        <h2 className="heading-serif text-2xl">Choose your path</h2>
        <p className="mt-4 text-slate-300">
          We either solve a bottleneck fast or install the full operating layer that compounds.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <article className="card">
            <p className="eyebrow">Package A</p>
            <h3 className="heading-serif text-xl text-white">Workflow build</h3>
            <p className="mt-2 text-slate-300">Targeted AI automation for one high-impact bottleneck.</p>
            <p className="mt-4 text-white">From $22,000</p>
            <p className="text-sm text-slate-400">Typical timeline: 2-3 weeks</p>
            <ul className="mt-4 list-disc pl-5 text-slate-300">
              <li>2 production-ready workflows</li>
              <li>Input-output contract and logic design</li>
              <li>QA, edge cases, and handoff docs</li>
            </ul>
            <Link
              href="/pricing"
              className="focus-ring mt-6 inline-flex border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
            >
              View workflow package
            </Link>
          </article>

          <article className="card">
            <p className="eyebrow">Package B</p>
            <h3 className="heading-serif text-xl text-white">Content OS install</h3>
            <p className="mt-2 text-slate-300">Code-first system where AI can operate on content safely.</p>
            <p className="mt-4 text-white">From $50,000</p>
            <p className="text-sm text-slate-400">Typical timeline: 4-6 weeks</p>
            <ul className="mt-4 list-disc pl-5 text-slate-300">
              <li>Markdown and git source of truth</li>
              <li>Schemas, guardrails, and safe execution paths</li>
              <li>Documented AI hooks for your operating stack</li>
            </ul>
            <Link
              href="/pricing"
              className="focus-ring mt-6 inline-flex border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
            >
              View content OS package
            </Link>
          </article>
        </div>
      </section>

      <section className="section-tight">
        <div className="container-narrow">
          <ContentOsAnimation size="md" loop />
        </div>
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">Content OS philosophy</h2>
        <PhilosophyBlocks
          items={[
            {
              title: "AI is here to stay",
              icon: <RobotBrainIcon />,
              body: <p>Treat AI as an operating layer, not a sidecar tool.</p>
            },
            {
              title: "Growth content sucks",
              icon: <TrashCanIcon />,
              body: <p>Systematize repetitive production so humans stop grinding low-leverage work.</p>
            },
            {
              title: "Humans deserve humans",
              icon: <HandshakeIcon />,
              body: <p>Move human energy to strategy, POV, and conversion-critical communication.</p>
            }
          ]}
        />
      </section>

      <section className="section">
        <h2 className="heading-serif text-2xl">How reliability is built</h2>
        <p className="mt-4 text-slate-300">
          A Content OS is not a CMS plus prompts. It is structured context, contracts, guardrails, and execution
          semantics running in your environment.
        </p>
        <ContentOsAnatomyMap />
      </section>

      <div className="section-tight">
        <FaultLineDivider className="mx-auto h-20 w-full max-w-3xl text-white/70" />
      </div>

      <section className="section">
        <h2 className="heading-serif text-2xl">From prompt glue to operating system</h2>
        <div className="mt-6 grid gap-4 text-slate-300">
          <div className="border border-ink-800 bg-ink-900/40 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Problem</p>
            <p className="mt-2">Prompt glue, drift, brittle outputs, and teams babysitting automations.</p>
          </div>
          <div className="border border-ink-800 bg-ink-900/40 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">System fix</p>
            <p className="mt-2">Shared context modules, explicit contracts, and guardrails that fail loudly.</p>
          </div>
          <div className="border border-ink-800 bg-ink-900/40 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Business result</p>
            <p className="mt-2">Higher velocity, stable quality, and leverage that compounds with each workflow.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="grid-structure">
          <div className="grid gap-4 text-slate-300">
            <h2 className="heading-serif text-2xl text-white">Built for your stack</h2>
            <p>
              We scope around your current tools, docs, and content systems. If a system holds real context, we integrate
              it. If it blocks reliable execution, we replace it with code-first ownership.
            </p>
            <p>
              Deadwater deployments are stack-aware and outcome-scoped, from targeted AI workflows to full Content OS
              installs.
            </p>
            <div className="mt-2 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="focus-ring border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
              >
                Book a scoping call
              </Link>
              <Link
                href="/pricing"
                className="focus-ring border border-ink-700 bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-300 hover:text-white"
              >
                View pricing
              </Link>
            </div>
          </div>
          <div className="side-note">Stack-aware consulting</div>
        </div>
      </section>
    </div>
  );
}
