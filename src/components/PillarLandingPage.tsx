import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

type LinkItem = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

type PillarItem = {
  title: string;
  description: string;
};

type FaqItem = {
  question: string;
  answer: string;
};

type PillarLandingPageProps = {
  slug: string;
  title: string;
  description: string;
  eyebrow?: string;
  heroImage: {
    src: string;
    alt: string;
  };
  intro: string[];
  outcomes: string[];
  pillars: PillarItem[];
  useCases: string[];
  faqs: FaqItem[];
  cta: {
    title: string;
    description: string;
    links: LinkItem[];
  };
};

const siteUrl = "https://deadwater.ai";

export function PillarLandingPage({
  slug,
  title,
  description,
  eyebrow,
  heroImage,
  intro,
  outcomes,
  pillars,
  useCases,
  faqs,
  cta
}: PillarLandingPageProps) {
  const canonicalUrl = `${siteUrl}/${slug}`;

  const faqEntities = faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer
    }
  }));

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: title,
        description,
        isPartOf: { "@id": `${siteUrl}#website` },
        about: { "@id": `${siteUrl}#organization` },
        primaryImageOfPage: { "@id": `${canonicalUrl}#primaryimage` }
      },
      {
        "@type": "ImageObject",
        "@id": `${canonicalUrl}#primaryimage`,
        url: `${siteUrl}${heroImage.src}`
      },
      {
        "@type": "Service",
        "@id": `${canonicalUrl}#service`,
        name: "Content OS",
        description,
        provider: { "@id": `${siteUrl}#organization` },
        areaServed: "Worldwide",
        serviceType: "AI-native content operating system"
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: faqEntities
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumbs`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Deadwater.ai", item: siteUrl },
          { "@type": "ListItem", position: 2, name: title, item: canonicalUrl }
        ]
      }
    ]
  };

  return (
    <div className="container-narrow section">
      <Script id={`jsonld-${slug}`} type="application/ld+json">
        {JSON.stringify(jsonLd, null, 0)}
      </Script>

      <section className="section-tight">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1 className="heading-serif mt-2 text-4xl sm:text-5xl">{title}</h1>
        <p className="mt-5 text-lg text-slate-300">{description}</p>
        <div className="mt-5 grid gap-3 text-slate-300">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <div className="mt-7 flex flex-wrap gap-4">
          {cta.links.map((link) => (
            <Link
              key={`${link.href}-${link.label}`}
              href={link.href}
              className={
                link.variant === "secondary"
                  ? "focus-ring border border-ink-700 bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-300 hover:text-white"
                  : "focus-ring border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
              }
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <div className="mt-8 overflow-hidden rounded-xl border border-ink-800">
        <div className="relative h-56 w-full sm:h-72">
          <Image src={heroImage.src} alt={heroImage.alt} fill priority className="object-cover" sizes="(min-width: 640px) 700px, 100vw" />
        </div>
      </div>

      <div className="divider" />

      <section className="section-tight">
        <h2 className="heading-serif text-2xl">Why teams install a content OS</h2>
        <ul className="mt-5 grid gap-3 list-disc pl-5 text-slate-300">
          {outcomes.map((outcome) => (
            <li key={outcome}>{outcome}</li>
          ))}
        </ul>
      </section>

      <section className="section-tight">
        <h2 className="heading-serif text-2xl">What makes a content OS operational</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="card">
              <h3 className="heading-serif text-xl text-white">{pillar.title}</h3>
              <p className="mt-3 text-slate-300">{pillar.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-tight">
        <h2 className="heading-serif text-2xl">High-leverage content OS use cases</h2>
        <div className="mt-5 grid gap-3 md:grid-cols-2 text-slate-300">
          {useCases.map((useCase) => (
            <div key={useCase} className="border border-ink-800 bg-ink-900/40 p-4">
              {useCase}
            </div>
          ))}
        </div>
      </section>

      <section className="section-tight">
        <h2 className="heading-serif text-2xl">Content OS FAQ</h2>
        <div className="mt-5 grid gap-6 text-slate-300">
          {faqs.map((item) => (
            <div key={item.question}>
              <h3 className="text-lg text-white">{item.question}</h3>
              <p className="mt-2">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="border border-ink-800 bg-ink-900/40 p-6">
          <h2 className="heading-serif text-3xl text-white">{cta.title}</h2>
          <p className="mt-3 text-slate-300">{cta.description}</p>
          <div className="mt-6 flex flex-wrap gap-4">
            {cta.links.map((link) => (
              <Link
                key={`${link.href}-${link.label}-bottom`}
                href={link.href}
                className={
                  link.variant === "secondary"
                    ? "focus-ring border border-ink-700 bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-300 hover:text-white"
                    : "focus-ring border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
                }
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
