import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getOtherOptionBySlug, otherOptions } from "@/lib/other-options";

type Props = {
  params: { slug: string };
};

const ogImage = "/og/og.png";

export async function generateStaticParams() {
  return otherOptions.map((option) => ({ slug: option.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const option = getOtherOptionBySlug(params.slug);
  if (!option) {
    return {};
  }

  const title = `${option.name} vs Deadwater Content OS`;
  const description = `Comparison guide for ${option.name}: where it fits, where teams hit limits, and when a Deadwater Content OS install is a better path.`;

  return {
    title,
    description,
    openGraph: {
      title: `${title} - Deadwater.ai`,
      description,
      images: [{ url: ogImage, alt: "Deadwater.ai - Content OS for an AI-first world" }]
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage]
    }
  };
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-6 text-slate-300">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default function OtherOptionDetailPage({ params }: Props) {
  const option = getOtherOptionBySlug(params.slug);
  if (!option) {
    notFound();
  }

  return (
    <article className="container-narrow section">
      <header className="flex flex-col gap-4">
        <p className="eyebrow">{option.category}</p>
        <h1 className="heading-serif text-4xl">{option.name} vs Deadwater Content OS</h1>
        <p className="text-lg text-slate-300">{option.summary}</p>
      </header>

      <div className="divider" />

      <section className="flex flex-col gap-3">
        <h2 className="heading-serif text-2xl">Where it fits</h2>
        <p className="text-slate-300">{option.bestFor}</p>
      </section>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <section className="flex flex-col gap-3">
          <h2 className="heading-serif text-2xl">What teams like</h2>
          <BulletList items={option.strengths} />
        </section>
        <section className="flex flex-col gap-3">
          <h2 className="heading-serif text-2xl">Where limits show up</h2>
          <BulletList items={option.limitations} />
        </section>
      </div>

      <section className="mt-10 flex flex-col gap-3">
        <h2 className="heading-serif text-2xl">How Deadwater is different</h2>
        <BulletList items={option.deadwaterAdvantage} />
      </section>

      <section className="mt-10 flex flex-col gap-3">
        <h2 className="heading-serif text-2xl">Sources</h2>
        <ul className="list-disc space-y-2 pl-6 text-slate-300">
          {option.sourceLinks.map((url) => (
            <li key={url}>
              <a href={url} target="_blank" rel="noreferrer" className="focus-ring underline decoration-slate-500/60">
                {url}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <div className="divider" />

      <div className="flex flex-wrap gap-4 text-sm uppercase tracking-[0.15em] text-slate-300">
        <Link href="/other-options" className="focus-ring transition-colors hover:text-white">
          Back to other options
        </Link>
        <Link href="/contact" className="focus-ring transition-colors hover:text-white">
          Talk to Deadwater
        </Link>
      </div>
    </article>
  );
}
