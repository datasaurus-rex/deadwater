import type { Metadata } from "next";
import { PillarLandingPage } from "@/components/PillarLandingPage";

const heroImage = "/blog/what-is-content-os.jpg";

export const metadata: Metadata = {
  title: "Content OS",
  description:
    "Content OS is the AI-native content operating system that gives agents structured context, safe execution, and compounding workflows.",
  keywords: [
    "content os",
    "content operating system",
    "ai content system",
    "ai-native content",
    "content operations"
  ],
  alternates: {
    canonical: "/content-os"
  },
  openGraph: {
    title: "Content OS | Deadwater.ai",
    description:
      "Learn what a content OS is, why teams need one, and how Deadwater builds AI-native systems where content can be operated on safely.",
    type: "website",
    url: "https://deadwater.ai/content-os",
    images: [
      {
        url: heroImage,
        alt: "Content OS by Deadwater.ai"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Content OS | Deadwater.ai",
    description:
      "A practical guide to Content OS: structured context, guardrails, and machine-operable workflows for AI-first teams.",
    images: [heroImage]
  }
};

export default function ContentOsPage() {
  return (
    <PillarLandingPage
      slug="content-os"
      eyebrow="Pillar Page"
      title="Content OS: The AI-native content operating system"
      description="A content OS turns your content from static pages into a structured operating layer that AI can reason over, update, and execute with confidence."
      heroImage={{
        src: heroImage,
        alt: "Abstract system visual representing a content operating system"
      }}
      intro={[
        "Most companies are trying to scale AI using content systems that were built for human readers, not AI agents. The result is prompt glue, brittle workflows, and constant babysitting.",
        "A content OS fixes this by making content machine-operable: schema-backed modules, stable contracts, and execution guardrails inside your own codebase."
      ]}
      outcomes={[
        "AI outputs that match real business context instead of generic internet patterns.",
        "Automation that survives product changes, naming updates, and strategy shifts.",
        "Compounding leverage from shared context across SEO, product marketing, sales, and support content.",
        "A portable system you own in your repo instead of a locked workflow stack."
      ]}
      pillars={[
        {
          title: "Structured substrate",
          description:
            "Markdown plus explicit schemas, metadata contracts, and a clean taxonomy so agents can parse and reason deterministically."
        },
        {
          title: "Execution guardrails",
          description:
            "Validation, linting, and conventions that keep AI actions inside safe boundaries and prevent silent drift over time."
        },
        {
          title: "Operational workflows",
          description:
            "Reusable workflows that draft, update, and maintain content using the same context system instead of one-off prompts."
        }
      ]}
      useCases={[
        "Generate high-quality SEO landing pages from product updates and positioning docs.",
        "Refresh old pages automatically when messaging, features, or terminology changes.",
        "Produce sales-enablement and competitive pages from the same source context as marketing.",
        "Run content QA checks that flag schema drift and brand inconsistency before publish.",
        "Create role-specific derivatives: executive summary, implementation guide, and public post.",
        "Maintain docs and support runbooks as living modules agents can safely edit."
      ]}
      faqs={[
        {
          question: "What is a content OS in plain terms?",
          answer:
            "A content OS is the operating layer beneath your content. It defines how knowledge is structured, validated, and executed so AI can act reliably, not just generate text."
        },
        {
          question: "How is a content OS different from a CMS?",
          answer:
            "A CMS stores pages for humans to edit. A content OS defines behavior and contracts so humans and machines can both create and operate content safely at scale."
        },
        {
          question: "Do I need to replace my entire stack to use a content OS?",
          answer:
            "Not always. Many teams start by installing a code-first content layer for high-value workflows, then phase more systems into the same structure over time."
        },
        {
          question: "Why does a content OS matter for SEO?",
          answer:
            "Better structure creates better context for both search engines and AI systems. That leads to higher topical consistency, faster updates, and pages that stay accurate as the business changes."
        }
      ]}
      cta={{
        title: "Install a content OS that compounds",
        description:
          "Deadwater designs and implements AI-native content operating systems for teams that want reliable execution, not prompt chaos.",
        links: [
          { href: "/contact", label: "Book a scoping call", variant: "primary" },
          { href: "/pricing", label: "View pricing", variant: "secondary" }
        ]
      }}
    />
  );
}
