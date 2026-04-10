import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ContentOsAnimation } from "@/components/ContentOsAnimation";

const ogImage = "/og/og.png";

const outcomeCards = [
  {
    title: "Your first superpowered employee",
    body: "Deadwater installs an AI operator that can take on briefs, research, drafting, internal linking, and content maintenance without adding another person to manage."
  },
  {
    title: "Trained on your real business context",
    body: "Your docs, product language, offers, and site structure become usable operating context, so outputs feel like your company instead of generic AI sludge."
  },
  {
    title: "Production-safe, not demo-safe",
    body: "The goal is reliable execution in production: clear contracts, guardrails, and documentation your team can trust when the system is doing real work."
  }
];

const shiftCards = [
  {
    label: "Bots handle",
    items: ["Advanced research", "SEO and comparison content", "Discovery and strategy", "Content cleanup and refreshes"]
  },
  {
    label: "Humans keep",
    items: ["Final say", "POV and positioning", "Enjoyable content"]
  }
];

const paths = [
  {
    name: "Workflow build",
    price: "From $22,000",
    timing: "Typical timeline: 2-3 weeks",
    description: "Fix one painful bottleneck fast with a scoped automation system.",
    points: ["Two production-ready workflows", "Defined input-output contracts", "QA, edge cases, and handoff docs"],
    href: "/pricing",
    cta: "See workflow package"
  },
  {
    name: "Content OS install",
    price: "From $50,000",
    timing: "Typical timeline: 4-6 weeks",
    description: "Install the deeper operating layer that lets multiple AI workflows run reliably.",
    points: ["Git-backed source of truth", "Schemas, guardrails, and safe execution paths", "Documented hooks for your team and agents"],
    href: "/pricing",
    cta: "See Content OS package"
  }
];

export const metadata: Metadata = {
  title: "Deadwater.ai",
  description: "Let your bots handle the tough stuff. Deadwater installs AI systems for content and growth teams that need reliable execution, not prompt glue.",
  openGraph: {
    title: "Deadwater.ai",
    description: "Let your bots handle the tough stuff. Deadwater installs AI systems for content and growth teams that need reliable execution, not prompt glue.",
    images: [{ url: ogImage, alt: "Deadwater.ai - AI systems for content operations" }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Deadwater.ai",
    description: "Let your bots handle the tough stuff. Deadwater installs AI systems for content and growth teams that need reliable execution, not prompt glue.",
    images: [ogImage]
  }
};

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative isolate border-b border-ink-800/80">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(77,163,255,0.2),_transparent_34%),radial-gradient(circle_at_80%_20%,_rgba(77,212,198,0.12),_transparent_28%),linear-gradient(180deg,_rgba(8,11,16,0.82),_rgba(5,6,8,1))]" />
        <div className="container-narrow py-14 sm:py-20">
          <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
            <div>
              <p className="text-xs uppercase tracking-[0.38em] text-accent-sea">AI systems for content operators</p>
              <h1 className="heading-serif mt-5 max-w-3xl text-5xl leading-none text-white sm:text-6xl lg:text-7xl">
                Bots that work for you
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                Deadwater builds context layers and AIs that run on them, giving you unparalleled AI execution for
                content, operations, and beyond.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="focus-ring rounded-full border border-accent-blue bg-accent-blue/15 px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
                >
                  Book a scoping call
                </Link>
                <Link
                  href="/pricing"
                  className="focus-ring rounded-full border border-ink-700 bg-black/40 px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-200 hover:text-white"
                >
                  View pricing
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -right-10 top-8 hidden h-40 w-40 rounded-full bg-accent-blue/20 blur-3xl lg:block" />
              <div className="overflow-hidden rounded-[32px] border border-white/10 bg-[#09101a]/85 shadow-[0_30px_120px_rgba(0,0,0,0.45)]">
                <div className="border-b border-white/10 px-6 py-4">
                  <p className="text-xs uppercase tracking-[0.34em] text-slate-400">End state</p>
                  <p className="mt-2 heading-serif text-2xl text-white">A calmer, faster content engine</p>
                </div>
                <div className="grid gap-4 p-6">
                  {shiftCards.map((card) => (
                    <article key={card.label} className="rounded-[24px] border border-white/10 bg-black/20 p-5">
                      <p className="text-xs uppercase tracking-[0.32em] text-accent-sea">{card.label}</p>
                      <ul className="mt-4 grid gap-3 text-sm text-slate-300">
                        {card.items.map((item) => (
                          <li key={item} className="border-b border-white/5 pb-3 last:border-b-0 last:pb-0">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-black/30">
            <div className="grid gap-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.34em] text-slate-400">AI that contributes</p>
                  <h2 className="heading-serif mt-3 text-3xl text-white">Say goodbye to GPT copypasta</h2>
                  <p className="mt-4 max-w-xl text-slate-300">
                    Most teams rely on repeated LLM prompting and loosely trained, disparate models. Deadwater unites
                    them, enforces standardization, and unlocks new opportunities in research, bulk writing,
                    consistency, and more.
                  </p>
                </div>
                <div className="mt-8">
                  <ContentOsAnimation size="md" loop />
                </div>
              </div>
              <div className="relative min-h-[320px] border-t border-white/10 lg:border-l lg:border-t-0">
                <Image
                  src="/hero/hero.png"
                  alt="Submerged structure under a flat waterline"
                  fill
                  priority
                  className="object-cover object-center opacity-80"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,6,8,0.08),rgba(5,6,8,0.82))]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container-narrow py-16 sm:py-20">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.36em] text-slate-500">Why teams buy</p>
          <h2 className="heading-serif mt-4 text-3xl text-white sm:text-4xl">What changes after Deadwater is installed</h2>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            The work that burns your team out gets systematized. The work that actually moves deals, shapes perception,
            and sharpens your position stays with humans.
          </p>
        </div>
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {outcomeCards.map((card) => (
            <article
              key={card.title}
              className="rounded-[28px] border border-ink-800 bg-[linear-gradient(180deg,rgba(14,18,27,0.96),rgba(8,11,16,0.96))] p-6"
            >
              <h3 className="heading-serif text-2xl text-white">{card.title}</h3>
              <p className="mt-4 leading-7 text-slate-300">{card.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-ink-800/80 bg-ink-900/35">
        <div className="container-narrow py-16 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
            <div>
              <p className="text-xs uppercase tracking-[0.36em] text-accent-sea">The shift</p>
              <h2 className="heading-serif mt-4 text-3xl text-white sm:text-4xl">Cut editing time down to zero</h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                Teams need a reliable system to handle the repetitive work, not more random automation and agency slop.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <article className="rounded-[28px] border border-ink-800 bg-black/30 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Before</p>
                <p className="mt-4 text-lg text-slate-200">LLM copypasta and agency slop</p>
              </article>
              <article className="rounded-[28px] border border-ink-800 bg-black/30 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">System fix</p>
                <p className="mt-4 text-lg text-slate-200">Integrated AI, masterful context</p>
              </article>
              <article className="rounded-[28px] border border-accent-blue/30 bg-accent-blue/10 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-300">After</p>
                <p className="mt-4 text-lg text-white">Autonomous AI content and strategy</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="container-narrow py-16 sm:py-20">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.36em] text-slate-500">Ways in</p>
            <h2 className="heading-serif mt-4 text-3xl text-white sm:text-4xl">Start with one bottleneck or install the whole operating layer</h2>
          </div>
          <Link href="/pricing" className="focus-ring text-sm uppercase tracking-[0.28em] text-slate-300 hover:text-white">
            Compare packages
          </Link>
        </div>
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {paths.map((path) => (
            <article
              key={path.name}
              className="rounded-[30px] border border-ink-800 bg-[linear-gradient(180deg,rgba(10,13,18,0.96),rgba(6,8,12,0.96))] p-7"
            >
              <p className="text-xs uppercase tracking-[0.34em] text-slate-500">{path.name}</p>
              <p className="mt-4 heading-serif text-3xl text-white">{path.price}</p>
              <p className="mt-2 text-sm text-slate-400">{path.timing}</p>
              <p className="mt-5 text-lg leading-8 text-slate-300">{path.description}</p>
              <ul className="mt-6 grid gap-3 text-slate-300">
                {path.points.map((point) => (
                  <li key={point} className="rounded-2xl border border-white/8 bg-white/[0.03] px-4 py-3">
                    {point}
                  </li>
                ))}
              </ul>
              <Link
                href={path.href}
                className="focus-ring mt-7 inline-flex rounded-full border border-accent-blue/70 px-5 py-3 text-xs uppercase tracking-[0.28em] text-white"
              >
                {path.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-ink-800/80">
        <div className="container-narrow py-16 sm:py-20">
          <div className="rounded-[36px] border border-ink-800 bg-[linear-gradient(135deg,rgba(77,163,255,0.12),rgba(5,6,8,0.2)_35%,rgba(77,212,198,0.08))] p-7 sm:p-10">
            <div className="max-w-3xl">
              <p className="text-xs uppercase tracking-[0.34em] text-slate-400">Best fit</p>
              <h2 className="heading-serif mt-4 text-3xl text-white sm:text-4xl">Built for teams that want AI to actually contribute</h2>
            </div>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              <div className="rounded-[24px] border border-white/10 bg-black/20 px-5 py-5 text-slate-200">
                You already know generic AI content is not the answer
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/20 px-5 py-5 text-slate-200">
                You want owned systems, not indefinite outsourced execution
              </div>
              <div className="rounded-[24px] border border-white/10 bg-black/20 px-5 py-5 text-slate-200">
                You need AI to work with context, structure, and accountability
              </div>
            </div>
            <Link
              href="/contact"
              className="focus-ring mt-8 inline-flex rounded-full border border-accent-blue bg-accent-blue/15 px-5 py-3 text-xs uppercase tracking-[0.28em] text-white"
            >
              Book a scoping call
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
