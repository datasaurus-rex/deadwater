import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "A short look at why Deadwater builds AI-native Content OS foundations.",
  openGraph: {
    title: "About — Deadwater.ai",
    description: "A short look at why Deadwater builds AI-native Content OS foundations."
  }
};

export default function AboutPage() {
  return (
    <div className="container-narrow section">
      <p className="eyebrow">About</p>
      <h1 className="heading-serif text-3xl">About</h1>
      <div className="mt-6 grid gap-4 text-lg text-slate-300">
        <p>
          Deadwater.ai is a focused studio for AI-native content systems. We build the layer beneath your AI: the
          structured knowledge that agents can read, extend, and operate on without collapsing into prompt spaghetti.
        </p>
        <p>
          Our work is quiet by design. We care about foundations, not demos. We prefer systems that keep working when the
          noise fades and the pressure rises.
        </p>
        <p className="text-white">If you want content that runs, not just content that looks good, you are in the right place.</p>
      </div>
    </div>
  );
}
