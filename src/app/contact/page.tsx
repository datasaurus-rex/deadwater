import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

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
      <p className="eyebrow">Contact</p>
      <h1 className="heading-serif text-3xl">Contact</h1>
      <p className="mt-6 text-lg text-slate-300">
        Tell us what you want to build, how your content stack works today, and where you want leverage. We will reply
        with next steps and a clear scope.
      </p>
      <ContactForm />
    </div>
  );
}
