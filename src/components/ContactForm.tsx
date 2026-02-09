"use client";

import { useMemo, useState } from "react";

type Topic = "chat" | "workflow" | "content-os";
type WebsiteType = "all-cms" | "headless-cms" | "all-code";
type CmsType = "framer" | "contentful" | "webflow" | "ghost" | "sanity" | "wordpress" | "other";

const workflowHelpOptions = [
  "SEO content",
  "product marketing content",
  "competitive content",
  "more"
];

const workflowAssetsOptions = [
  "writing style guide",
  "some good content",
  "competitive comparisons",
  "content guidelines",
  "product descriptions",
  "published docs",
  "private docs"
];

export function ContactForm() {
  const [topic, setTopic] = useState<Topic>("chat");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [chatNote, setChatNote] = useState("");
  const [workflowHelp, setWorkflowHelp] = useState<string[]>([]);
  const [workflowAssets, setWorkflowAssets] = useState<string[]>([]);
  const [websiteType, setWebsiteType] = useState<WebsiteType | "">("");
  const [cmsType, setCmsType] = useState<CmsType | "">("");
  const [otherCms, setOtherCms] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const showCmsSelect = topic === "content-os" && websiteType !== "" && websiteType !== "all-code";
  const showOtherCms = showCmsSelect && cmsType === "other";

  const subject = useMemo(() => {
    if (topic === "workflow") return "Deadwater contact — workflow build";
    if (topic === "content-os") return "Deadwater contact — content OS install";
    return "Deadwater contact — chat";
  }, [topic]);

  const mailtoBody = useMemo(() => {
    const lines: string[] = [
      `Topic: ${topic}`,
      `Name: ${name}`,
      `Company: ${company}`,
      `Email: ${email}`
    ];

    if (topic === "chat") {
      lines.push("", `Chat focus: ${chatNote || "Not provided"}`);
    }

    if (topic === "workflow") {
      lines.push("", "Workflow help:", workflowHelp.length ? workflowHelp.map((item) => `- ${item}`).join("\n") : "- Not selected");
      lines.push("", "Current assets:", workflowAssets.length ? workflowAssets.map((item) => `- ${item}`).join("\n") : "- Not selected");
    }

    if (topic === "content-os") {
      lines.push("", `Website: ${websiteType || "Not selected"}`);
      if (showCmsSelect) {
        lines.push(`CMS: ${cmsType || "Not selected"}`);
        if (showOtherCms) {
          lines.push(`Other CMS: ${otherCms || "Not provided"}`);
        }
      }
    }

    return lines.join("\n");
  }, [topic, name, company, email, chatNote, workflowHelp, workflowAssets, websiteType, cmsType, otherCms, showCmsSelect, showOtherCms]);

  const toggleMulti = (current: string[], value: string) => {
    return current.includes(value) ? current.filter((item) => item !== value) : [...current, value];
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    const href = `mailto:hello@deadwater.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(mailtoBody)}`;
    window.location.href = href;
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8 grid gap-8">
      <div className="grid gap-3">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-400">What do you want to talk about?</p>
        <div className="flex flex-wrap gap-3">
          {[
            { id: "chat", label: "Chat" },
            { id: "workflow", label: "Workflow build" },
            { id: "content-os", label: "Content OS" }
          ].map((option) => {
            const active = topic === option.id;
            return (
              <button
                key={option.id}
                type="button"
                onClick={() => setTopic(option.id as Topic)}
                className={`focus-ring rounded-full border px-4 py-2 text-xs uppercase tracking-[0.25em] transition ${
                  active ? "border-accent-blue bg-accent-blue/20 text-white" : "border-ink-700 text-slate-300 hover:border-accent-blue hover:text-white"
                }`}
              >
                {option.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <label className="grid gap-2 text-sm text-slate-300">
          Name
          <input
            className="w-full border border-ink-800 bg-ink-950/60 px-3 py-2 text-white focus-ring"
            name="name"
            required
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Company
          <input
            className="w-full border border-ink-800 bg-ink-950/60 px-3 py-2 text-white focus-ring"
            name="company"
            required
            value={company}
            onChange={(event) => setCompany(event.target.value)}
          />
        </label>
        <label className="grid gap-2 text-sm text-slate-300">
          Email address
          <input
            className="w-full border border-ink-800 bg-ink-950/60 px-3 py-2 text-white focus-ring"
            name="email"
            type="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </label>
      </div>

      {topic === "chat" && (
        <label className="grid gap-2 text-sm text-slate-300">
          What do you want to chat about?
          <textarea
            className="min-h-[140px] w-full border border-ink-800 bg-ink-950/60 px-3 py-2 text-white focus-ring"
            value={chatNote}
            onChange={(event) => setChatNote(event.target.value)}
          />
        </label>
      )}

      {topic === "workflow" && (
        <div className="grid gap-6">
          <div className="grid gap-3">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">I’m looking for help with</p>
            <div className="flex flex-wrap gap-3">
              {workflowHelpOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setWorkflowHelp((prev) => toggleMulti(prev, option))}
                  className={`focus-ring rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                    workflowHelp.includes(option)
                      ? "border-accent-blue bg-accent-blue/20 text-white"
                      : "border-ink-700 text-slate-300 hover:border-accent-blue hover:text-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="grid gap-3">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">I currently have</p>
            <div className="flex flex-wrap gap-3">
              {workflowAssetsOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setWorkflowAssets((prev) => toggleMulti(prev, option))}
                  className={`focus-ring rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                    workflowAssets.includes(option)
                      ? "border-accent-blue bg-accent-blue/20 text-white"
                      : "border-ink-700 text-slate-300 hover:border-accent-blue hover:text-white"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {topic === "content-os" && (
        <div className="grid gap-6">
          <div className="grid gap-3">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">My website is</p>
            <div className="flex flex-wrap gap-3">
              {[
                { id: "all-cms", label: "all CMS/hosted" },
                { id: "headless-cms", label: "headless CMS" },
                { id: "all-code", label: "all code" }
              ].map((option) => (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => {
                    setWebsiteType(option.id as WebsiteType);
                    setCmsType("");
                    setOtherCms("");
                  }}
                  className={`focus-ring rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                    websiteType === option.id
                      ? "border-accent-blue bg-accent-blue/20 text-white"
                      : "border-ink-700 text-slate-300 hover:border-accent-blue hover:text-white"
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>

          {showCmsSelect && (
            <div className="grid gap-4">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">My CMS is</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { id: "framer", label: "framer" },
                  { id: "contentful", label: "contentful" },
                  { id: "webflow", label: "webflow" },
                  { id: "ghost", label: "ghost" },
                  { id: "sanity", label: "sanity" },
                  { id: "wordpress", label: "wordpress" },
                  { id: "other", label: "other" }
                ].map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setCmsType(option.id as CmsType)}
                    className={`focus-ring rounded-full border px-4 py-2 text-xs uppercase tracking-[0.2em] transition ${
                      cmsType === option.id
                        ? "border-accent-blue bg-accent-blue/20 text-white"
                        : "border-ink-700 text-slate-300 hover:border-accent-blue hover:text-white"
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>
              {showOtherCms && (
                <label className="grid gap-2 text-sm text-slate-300">
                  Other CMS
                  <input
                    className="w-full border border-ink-800 bg-ink-950/60 px-3 py-2 text-white focus-ring"
                    value={otherCms}
                    onChange={(event) => setOtherCms(event.target.value)}
                  />
                </label>
              )}
            </div>
          )}
        </div>
      )}

      <div className="flex flex-wrap items-center gap-4">
        <button
          type="submit"
          className="focus-ring border border-accent-blue bg-black px-6 py-3 text-xs uppercase tracking-[0.3em] text-white"
        >
          Submit
        </button>
        {submitted ? (
          <p className="text-sm text-slate-300">
            Form submitted. We will reach out to the email address you provided.
          </p>
        ) : null}
      </div>
    </form>
  );
}
