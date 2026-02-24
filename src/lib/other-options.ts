export type OtherOption = {
  slug: string;
  name: string;
  category: string;
  bestFor: string;
  summary: string;
  strengths: string[];
  limitations: string[];
  deadwaterAdvantage: string[];
  sourceLinks: string[];
};

export const otherOptions: OtherOption[] = [
  {
    slug: "airops",
    name: "AirOps",
    category: "AI content workflow platform",
    bestFor: "Teams that want workflow automation inside a hosted platform quickly.",
    summary:
      "AirOps provides workflow building, knowledge-base features, and integrated content operations in a platform model.",
    strengths: [
      "Workflow builder and operational tooling in one product",
      "Faster activation than custom internal tooling",
      "Fits teams with active programmatic content needs"
    ],
    limitations: [
      "Platform-centered architecture can increase dependency risk over time",
      "Context reliability still depends on implementation discipline",
      "Long-term system ownership remains partially externalized"
    ],
    deadwaterAdvantage: [
      "Deadwater has built custom AirOps workflows with strong real-world outcomes across research, briefs, and draft systems",
      "Deadwater installs a stack-owned Content OS, not only a hosted workflow surface",
      "Schemas, guardrails, and context structures are portable across tools",
      "System is delivered as an operating layer that compounds beyond one platform"
    ],
    sourceLinks: [
      "https://www.airops.com/platform/grid",
      "https://www.airops.com/platform/knowledge-bases",
      "https://www.airops.com/pricing"
    ]
  },
  {
    slug: "jasper",
    name: "Jasper",
    category: "Enterprise AI content platform",
    bestFor: "Marketing teams optimizing brand-guided content production in a SaaS environment.",
    summary:
      "Jasper focuses on brand-aware AI content workflows with centralized controls and campaign support.",
    strengths: [
      "Strong brand/marketing packaging for non-technical teams",
      "Clear UI and activation paths for content teams",
      "Enterprise-friendly positioning and governance messaging"
    ],
    limitations: [
      "Primarily SaaS workflow usage, not a code-first content operating layer install",
      "Deeper system customization can be constrained by platform boundaries",
      "Institutional context portability depends on vendor model"
    ],
    deadwaterAdvantage: [
      "Deadwater builds and installs context architecture directly into client-owned systems",
      "Focus is durable operating infrastructure, not only campaign acceleration",
      "Governance lives in the system design, not only UI controls"
    ],
    sourceLinks: ["https://www.jasper.ai/platform", "https://www.jasper.ai/pricing"]
  },
  {
    slug: "copy-ai",
    name: "Copy.ai",
    category: "GTM AI platform",
    bestFor: "GTM teams that need broad workflow coverage and fast process automation.",
    summary:
      "Copy.ai offers GTM workflow automation and templates aimed at accelerating repetitive marketing and sales tasks.",
    strengths: [
      "Fast deployment via templates and packaged use cases",
      "Broad GTM workflow focus",
      "Accessible for teams that want to move quickly"
    ],
    limitations: [
      "Template-driven approaches can drift without deep context infrastructure",
      "Durability across evolving internal knowledge can be uneven",
      "Ownership and portability depend on ongoing vendor fit"
    ],
    deadwaterAdvantage: [
      "Deadwater installs a context-heavy Content OS aligned to business-specific constraints",
      "System is designed for long-term reliability and execution quality",
      "Workflow behavior is grounded in governed internal context rather than template defaults"
    ],
    sourceLinks: ["https://www.copy.ai/prices", "https://www.copy.ai/gtm-ai-planning"]
  },
  {
    slug: "contentful",
    name: "Contentful",
    category: "Composable CMS infrastructure",
    bestFor: "Teams needing enterprise content management and API-first content delivery.",
    summary:
      "Contentful is a composable content platform for structured content management and distribution.",
    strengths: [
      "Strong API-first CMS model",
      "Enterprise governance and role controls",
      "Mature ecosystem for multi-channel publishing"
    ],
    limitations: [
      "CMS infrastructure alone does not equal agent-ready context operations",
      "AI workflow reliability requires additional operating-layer design",
      "Teams may still need custom governance patterns for autonomous execution"
    ],
    deadwaterAdvantage: [
      "Deadwater designs the execution layer above content storage primitives",
      "Content OS install turns structured content into machine-operable operating context",
      "Focus is AI-native reliability, not only content management"
    ],
    sourceLinks: [
      "https://www.contentful.com/composable-content/cms/",
      "https://www.contentful.com/pricing/"
    ]
  },
  {
    slug: "writer",
    name: "Writer",
    category: "Enterprise AI governance platform",
    bestFor: "Enterprises that prioritize policy controls and centralized AI application governance.",
    summary:
      "Writer emphasizes enterprise AI governance, controlled application development, and policy-aware deployment patterns.",
    strengths: [
      "Strong enterprise governance and policy posture",
      "Designed for multi-team control and standardization",
      "Focused on operational risk management in AI adoption"
    ],
    limitations: [
      "Governance platform capabilities do not automatically create content operating architecture",
      "Execution quality still depends on context design and system contracts",
      "Customization for content-specific operations can require additional implementation layers"
    ],
    deadwaterAdvantage: [
      "Deadwater installs a content-specific operating layer tuned for workflows, not just policy administration",
      "Context structures are implemented directly in client-owned systems",
      "Delivery emphasizes reliability in real publishing and research operations"
    ],
    sourceLinks: ["https://writer.com/product/ai-studio/", "https://dev.writer.com/agent-builder/agent-architecture"]
  },
  {
    slug: "glean",
    name: "Glean",
    category: "Enterprise search and knowledge platform",
    bestFor: "Organizations that need high-quality retrieval across many enterprise systems.",
    summary:
      "Glean focuses on enterprise-wide knowledge discovery and retrieval across internal tools and documents.",
    strengths: [
      "Strong cross-system retrieval and knowledge access",
      "Useful for improving findability of distributed organizational information",
      "Enterprise-oriented deployment model"
    ],
    limitations: [
      "Search and retrieval are foundational but not sufficient for execution-ready workflows",
      "Operational behavior still requires explicit schema and process contracts",
      "Agent reliability depends on additional governance and orchestration layers"
    ],
    deadwaterAdvantage: [
      "Deadwater installs execution-grade context architecture, not only retrieval infrastructure",
      "Workflows are designed to run safely on structured operational knowledge",
      "System patterns are built for publishing reliability and long-term maintainability"
    ],
    sourceLinks: ["https://www.glean.com/product/overview"]
  },
  {
    slug: "sanity",
    name: "Sanity",
    category: "Composable content infrastructure",
    bestFor: "Teams that want structured, API-first content models with flexible developer workflows.",
    summary:
      "Sanity provides schema-driven, composable content infrastructure with strong developer ergonomics.",
    strengths: [
      "Flexible schema model and developer-first workflow",
      "Strong fit for structured content delivery",
      "Composable architecture for modern stacks"
    ],
    limitations: [
      "Content infrastructure still needs an execution operating layer for AI workflows",
      "Governance for autonomous behavior requires additional system design",
      "Teams can still end up with fragmented context semantics across projects"
    ],
    deadwaterAdvantage: [
      "Deadwater turns structured content infrastructure into a governed Content OS",
      "Install includes workflow contracts, validation patterns, and execution hooks",
      "Outcome is reliable action, not just clean content storage"
    ],
    sourceLinks: ["https://www.sanity.io/docs/schema-field-types", "https://www.sanity.io/docs/datastore"]
  },
  {
    slug: "zapier",
    name: "Zapier",
    category: "Automation and integration platform",
    bestFor: "Teams automating cross-tool tasks quickly without heavy engineering overhead.",
    summary:
      "Zapier provides broad integration coverage and automation workflows, including emerging AI agent capabilities.",
    strengths: [
      "Large integration ecosystem",
      "Fast activation for cross-tool process automation",
      "Accessible workflow tooling for operations teams"
    ],
    limitations: [
      "Automation does not inherently solve context quality and governance depth",
      "Complex AI workflows can become brittle without strong content contracts",
      "Long-term reliability depends on architecture beyond trigger-action logic"
    ],
    deadwaterAdvantage: [
      "Deadwater installs context-heavy architecture that stabilizes workflow behavior",
      "Automation steps run against governed content primitives",
      "System design aims at compounding reliability, not just fast wiring"
    ],
    sourceLinks: ["https://zapier.com/agents"]
  },
  {
    slug: "make",
    name: "Make",
    category: "Automation and orchestration platform",
    bestFor: "Teams building visual, multi-step automations across apps and APIs.",
    summary:
      "Make offers visual orchestration for app integrations and complex workflow routing, including AI-oriented patterns.",
    strengths: [
      "Powerful multi-step orchestration",
      "Flexible visual builder for operations scenarios",
      "Good fit for process-level automation breadth"
    ],
    limitations: [
      "Orchestration quality is limited by underlying context architecture",
      "AI behavior can still drift when content contracts are weak",
      "Governance and maintainability require deliberate system patterns"
    ],
    deadwaterAdvantage: [
      "Deadwater provides the operating substrate that orchestration layers depend on",
      "Install includes standards that reduce drift and manual babysitting",
      "Focus is durable AI-native content operations across evolving workflows"
    ],
    sourceLinks: ["https://www.make.com/en/ai-agents"]
  },
  {
    slug: "notion-ai-enterprise-search",
    name: "Notion AI + enterprise search",
    category: "Knowledge workspace and search",
    bestFor: "Teams centralizing notes/docs and improving discoverability.",
    summary:
      "Notion AI and enterprise search improve access to company information inside a collaborative workspace.",
    strengths: [
      "Excellent usability and team adoption profile",
      "Strong documentation and knowledge-capture use cases",
      "Useful search and workspace-level AI assistance"
    ],
    limitations: [
      "Knowledge access is not the same as operational execution reliability",
      "Workflow governance for high-stakes autonomous actions can require additional systems",
      "Context structure may remain uneven across teams and docs"
    ],
    deadwaterAdvantage: [
      "Deadwater centers on execution-ready context architecture, not just discoverability",
      "Install includes schema, contracts, and guardrails for repeatable operation",
      "System is built for workflows that must run safely with minimal babysitting"
    ],
    sourceLinks: [
      "https://www.notion.com/product/enterprise-search",
      "https://www.notion.com/help/enterprise-search",
      "https://www.notion.com/pricing"
    ]
  }
];

export function getOtherOptionBySlug(slug: string) {
  return otherOptions.find((option) => option.slug === slug) ?? null;
}
