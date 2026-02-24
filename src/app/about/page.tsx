import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MaturityRail } from "@/components/MaturityRail";
import { PhilosophyBlocks } from "@/components/PhilosophyBlocks";
import { HandshakeIcon, RobotBrainIcon, TrashCanIcon } from "@/components/PhilosophyIcons";

export const metadata: Metadata = {
  title: "About",
  description: "How Deadwater AI builds AI-native Content OS systems that free marketers from repetitive growth content work.",
  openGraph: {
    title: "About - Deadwater.ai",
    description: "How Deadwater AI builds AI-native Content OS systems that free marketers from repetitive growth content work."
  }
};

export default function AboutPage() {
  return (
    <div className="container-narrow section">
      <h1 className="heading-serif text-3xl">About Deadwater AI</h1>

      <div className="mt-6 grid gap-5 text-lg text-slate-300">
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
        <p>Marketers love Deadwater because it frees them from the soulless work of writing for search engines and LLMs.</p>
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

      <section className="mt-12">
        <h2 className="heading-serif text-2xl">How it works</h2>
        <p className="mt-4 text-slate-300">
          <em>Deployments and integrations vary depending on your tech stack.</em>
        </p>
        <div className="mt-4 grid gap-4 text-slate-300">
          <p>
            Fundamentally, a <strong>content OS</strong> is a powerful AI system that has access to all of your company
            context. With the click of a button, it can write blog posts and landing pages, link them together, and match
            your style and value props.
          </p>
          <p>You train it. You let it figure out what works and what does not. It does the rest.</p>
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
        <h2 className="heading-serif text-2xl">Our mission</h2>
        <div className="mt-4 grid gap-4 text-slate-300">
          <p>Deadwater exists to help companies use AI the way we have been dreaming about since 2023.</p>
          <p>
            We replace fragile, human-dependent processes and knowledge stacks with AI-native Content OS platforms,
            systems designed for maximum context, continuous intelligence, and trustworthy automation.
          </p>
          <p>
            We believe content is context too, context that can empower your AI to reason, act, create, and evolve
            alongside you.
          </p>
          <div>
            <Link href="/contact" className="focus-ring border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white">
              Talk to Deadwater
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

