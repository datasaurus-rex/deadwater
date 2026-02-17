import type { CallToActionContent } from "@/components/CallToActionBlock";

export const ctaContentByType: Record<"blogPost" | "landingPage", CallToActionContent> = {
  blogPost: {
    heading: "Ready to learn more?",
    body: "Book a demo and we will walk you through what a Content OS looks like in practice.",
    buttons: [
      { href: "/contact", label: "Book a demo", variant: "primary" },
      { href: "/pricing", label: "View pricing", variant: "secondary" }
    ]
  },
  landingPage: {
    heading: "Install a content OS that compounds",
    body: "Deadwater designs and implements AI-native content operating systems for teams that want reliable execution, not prompt chaos.",
    buttons: [
      { href: "/contact", label: "Book a scoping call", variant: "primary" },
      { href: "/pricing", label: "View pricing", variant: "secondary" }
    ]
  }
};

export const inlineBlogPostCta: CallToActionContent = {
  heading: "Build this on a real Content OS",
  body: "This post is one piece of the system. See how Deadwater structures content so AI can operate on it safely and at scale.",
  buttons: [
    { href: "/content-os", label: "Explore Content OS", variant: "primary" },
    { href: "/contact", label: "Book a scoping call", variant: "secondary" }
  ]
};
