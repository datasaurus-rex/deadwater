import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach Deadwater.ai for Content OS architecture and AI-native systems.",
  openGraph: {
    title: "Contact — Deadwater.ai",
    description: "Reach Deadwater.ai for Content OS architecture and AI-native systems."
  }
};

export default function ContactPage() {
  return (
    <div className="container-narrow section">
      <h1 className="heading-serif text-3xl">Contact</h1>
      <p className="mt-6 text-lg text-slate-300">
        Email is the simplest way to start. If you want to build a Content OS or repair a brittle AI stack, send a note.
      </p>
      <p className="mt-6 text-lg">
        <Link href="mailto:hello@deadwater.ai" className="focus-ring text-accent-blue">
          hello@deadwater.ai
        </Link>
      </p>
    </div>
  );
}
