import type { Metadata } from "next";
import Image from "next/image";
import { CallToActionBlock } from "@/components/CallToActionBlock";
import { MaturityRail } from "@/components/MaturityRail";
import { PhilosophyBlocks } from "@/components/PhilosophyBlocks";
import { HandshakeIcon, RobotBrainIcon, TrashCanIcon } from "@/components/PhilosophyIcons";

const ogImage = "/og/og.png";

export const metadata: Metadata = {
  title: "About",
  description: "How Deadwater AI builds context layers and Content OS systems that turn company knowledge into reliable AI execution.",
  openGraph: {
    title: "About - Deadwater.ai",
    description: "How Deadwater AI builds context layers and Content OS systems that turn company knowledge into reliable AI execution.",
    images: [{ url: ogImage, alt: "Deadwater.ai - Content OS for an AI-first world" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "About - Deadwater.ai",
    description: "How Deadwater AI builds context layers and Content OS systems that turn company knowledge into reliable AI execution.",
    images: [ogImage]
  }
};

export default function AboutPage() {
  return (
    <div className="container-narrow section">
      <h1 className="heading-serif text-3xl">About Deadwater AI</h1>
      <p className="mt-4 text-lg text-slate-300">
        We build context layers and Content OS systems that make your company intelligible to AI and useful to the
        people operating it.
      </p>

      <section className="mt-12">
        <h2 className="heading-serif text-2xl">How it works</h2>
        <p className="mt-4 text-slate-300">
          <em>Deployments and integrations vary depending on your tech stack.</em>
        </p>
        <div className="mt-4 grid gap-4 text-slate-300">
          <p>
            Most companies already have the raw material for powerful AI execution. It is just buried inside Notion,
            docs, shared drives, product language, and internal sprawl. Deadwater starts by turning that mess into a{" "}
            <strong>context layer</strong> agents can actually reason with.
          </p>
          <p>
            From there, a <strong>Content OS</strong> adds the operating layer: structure, schemas, guardrails, and
            execution paths so AI can do useful work without constant babysitting.
          </p>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <article className="border border-ink-800 bg-black p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Before</p>
            <h3 className="mt-2 heading-serif text-xl text-white">LLM copypasta</h3>
            <p className="mt-3 text-slate-300">
              Marketers copy and paste back and forth from their own LLM which has limited context. Teams are plagued by
              drift, inconsistencies, lack of depth.
            </p>
          </article>
          <article className="border border-accent-blue/50 bg-ink-900/40 p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-slate-400">After</p>
            <h3 className="mt-2 heading-serif text-xl text-white">A governed context layer and Content OS</h3>
            <p className="mt-3 text-slate-300">
              Context, behavior, and publishing logic are centralized. Agents get better inputs, outputs stabilize, and
              teams stop babysitting every task.
            </p>
          </article>
        </div>
        <div className="mt-8 rounded-[32px] border border-ink-800 bg-[linear-gradient(180deg,rgba(10,13,18,0.94),rgba(8,11,16,0.9))] p-6 sm:p-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Engagement ladder</p>
              <h3 className="mt-2 heading-serif text-2xl text-white">Three ways to work together</h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-slate-400">
              Start narrow, organize your context, or install the full operating layer depending on how deep the problem goes.
            </p>
          </div>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <article className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">01 Move fast</p>
              <h4 className="mt-3 heading-serif text-xl text-white">Workflow Build</h4>
              <p className="mt-3 text-slate-300">
                If the problem is one painful bottleneck, we can build a focused workflow first and leave the deeper
                operating stack alone.
              </p>
            </article>
            <article className="rounded-[24px] border border-accent-blue/30 bg-accent-blue/10 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-300">02 Build the foundation</p>
              <h4 className="mt-3 heading-serif text-xl text-white">Context Layer Build</h4>
              <p className="mt-3 text-slate-200">
                We extract and normalize your knowledge into an owned markdown system, package it with skills, and hand
                you an agent-ready command center your team can use.
              </p>
            </article>
            <article className="rounded-[24px] border border-white/10 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">03 Go deeper</p>
              <h4 className="mt-3 heading-serif text-xl text-white">Content OS Install</h4>
              <p className="mt-3 text-slate-300">
                We install the full publishing and execution layer so content operations can run with structure,
                governance, and compounding leverage.
              </p>
            </article>
          </div>
        </div>
        <p className="mt-6 text-sm uppercase tracking-[0.28em] text-slate-400">Deadwater use cases:</p>
        <MaturityRail
          items={[
            {
              tier: "basic",
              title: "Daily production on autopilot",
              points: [
                "Writes and publishes SEO articles and landing pages.",
                "Performs sweeping edits like content cleanup and internal links.",
                "Publishes product marketing updates from GitHub or Mintlify context."
              ]
            },
            {
              tier: "advanced",
              title: "Cluster and pipeline expansion",
              points: [
                "Ingests keyword batches, prioritizes them, and builds content clusters.",
                "Creates comparison and competitive content aligned to buyer intent.",
                "Ships new URL folders in one pass, like Integrations and Use Cases."
              ]
            },
            {
              tier: "extreme",
              title: "Strategic intelligence layer",
              points: [
                "Performs large-scale competitive analysis and adjusts your site accordingly.",
                "Ingests large datasets to identify winning patterns.",
                "Turns content operations into business intelligence."
              ]
            }
          ]}
        />
      </section>

      <section className="mt-12">
        <h2 className="heading-serif text-2xl">Why Deadwater</h2>
        <div className="mt-4 grid gap-5 text-lg text-slate-300">
          <p>
            Ask your marketers to show you which content is for SEO and AEO, and they will present you a list of{" "}
            <strong>articles they hated writing</strong>.
          </p>
          <p>
            I've spent my career in content and growth, and the work has contributed to two acquisitions (
            <a href="https://www.statsig.com/blog/openai-acquisition" target="_blank" rel="noreferrer" className="focus-ring">
              Statsig
            </a>
            ,{" "}
            <a
              href="https://www.webfx.com/blog/company/webfx-acquires-nutshell-crm/"
              target="_blank"
              rel="noreferrer"
              className="focus-ring"
            >
              Nutshell
            </a>
            ). After enough cycles, you stop guessing what works and start seeing the pattern clearly: great marketing
            doesn't have to feel like a grind.
          </p>
          <p>
            The deeper pattern is that AI gets dramatically better when company context stops living in disconnected
            tools and starts living in a structure machines can actually use.
          </p>
          <div className="mt-2 overflow-hidden border border-ink-800 bg-ink-900/40">
            <div className="relative aspect-[1536/748] w-full">
              <Image
                src="/blog/content-spectrum.jpg"
                alt="Deadwater content spectrum showing conversion content and POV content above the line, with everything else below."
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 900px, 100vw"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="heading-serif text-2xl">Philosophy</h2>
        <p className="mt-4 text-slate-300">We need to acknowledge the paradigm:</p>
        <PhilosophyBlocks
          items={[
            {
              title: "AI is here to stay",
              icon: <RobotBrainIcon />,
              body: <p>Everyone is AI native now. Your site and CMS should be too.</p>
            },
            {
              title: "Growth content sucks",
              icon: <TrashCanIcon />,
              body: (
                <p>
                  SEO and growth content{" "}
                  <a
                    href="https://www.contentstack.com/blog/ai/the-future-of-ai-and-its-intersection-with-marketing"
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring"
                  >
                    have always been soulless
                  </a>
                  , hacky, and sometimes disingenuous.
                </p>
              )
            },
            {
              title: "Humans deserve humans",
              icon: <HandshakeIcon />,
              body: (
                <p>
                  Humans resonate strongest with deep-funnel and POV content. Given that, let Deadwater handle the
                  repetitive system work so your team can focus on what only humans can do.
                </p>
              )
            }
          ]}
        />
        <p className="mt-4 text-slate-300">
          Given those truths, our philosophy is to focus your human energy on being human. Let Deadwater do everything
          else.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="heading-serif text-2xl">Frequently asked questions</h2>
        <div className="mt-4 grid gap-4">
          <article className="border border-ink-800 bg-ink-900/40 p-5">
            <h3 className="heading-serif text-xl text-white">Will this replace our team?</h3>
            <p className="mt-3 text-slate-300">
              No. It removes repetitive work and coordination tax so your team can spend more time on strategy, narrative,
              and conversion-critical content.
            </p>
          </article>
          <article className="border border-ink-800 bg-ink-900/40 p-5">
            <h3 className="heading-serif text-xl text-white">How long until we see value?</h3>
            <p className="mt-3 text-slate-300">
              Most teams start seeing value after the first scoped deployment, usually in weeks, because we target
              high-leverage workflows first.
            </p>
          </article>
          <article className="border border-ink-800 bg-ink-900/40 p-5">
            <h3 className="heading-serif text-xl text-white">Can this work with our current stack?</h3>
            <p className="mt-3 text-slate-300">
              Usually yes. Deadwater deployments are stack-aware and designed to work with existing docs, internal
              knowledge sources, CMS, and product context.
            </p>
          </article>
        </div>
      </section>

      <section className="mt-12">
        <h2 className="heading-serif text-2xl">Our mission</h2>
        <div className="mt-4 grid gap-4 text-slate-300">
          <p>Deadwater exists to help companies use AI the way we have been dreaming about since 2023.</p>
          <p>
            We replace fragile, human-dependent processes and scattered knowledge stacks with owned context layers and
            AI-native Content OS systems.
          </p>
          <p>
            We believe context is the real bottleneck. Once it is structured correctly, your AI can reason, act,
            create, and evolve alongside your team.
          </p>
        </div>
        <CallToActionBlock
          className="mt-6"
          content={{
            heading: "Ready to see it in practice?",
            body: "Book a demo and we will walk you through what a context layer or Content OS could look like inside your stack.",
            buttons: [
              { href: "/contact", label: "Book a demo", variant: "primary" },
              { href: "/pricing", label: "Explore pricing", variant: "secondary" }
            ]
          }}
        />
      </section>
    </div>
  );
}


