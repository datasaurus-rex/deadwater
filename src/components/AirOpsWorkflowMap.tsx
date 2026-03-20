function StepCard({
  title,
  eyebrow,
  body,
  accent = "blue"
}: {
  title: string;
  eyebrow?: string;
  body: string;
  accent?: "blue" | "sea" | "slate";
}) {
  const accentClass =
    accent === "sea"
      ? "border-accent-sea/70 bg-ink-900/80"
      : accent === "slate"
        ? "border-ink-700 bg-ink-900/70"
        : "border-accent-blue/70 bg-ink-900/80";

  return (
    <div className={`rounded-2xl border p-4 sm:p-5 ${accentClass}`}>
      {eyebrow ? <p className="text-[11px] uppercase tracking-[0.28em] text-slate-400">{eyebrow}</p> : null}
      <h3 className="mt-1 text-lg font-semibold text-white sm:text-xl">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-slate-300">{body}</p>
    </div>
  );
}

function Arrow({ label }: { label?: string }) {
  return (
    <div className="flex items-center justify-center py-2">
      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-sky-300">
        <span className="h-px w-8 bg-gradient-to-r from-accent-blue to-accent-sea sm:w-12" />
        <span>{label ?? "Next"}</span>
        <span className="h-px w-8 bg-gradient-to-r from-accent-blue to-accent-sea sm:w-12" />
      </div>
    </div>
  );
}

export function AirOpsWorkflowMap() {
  return (
    <section className="container-post my-10">
      <div className="overflow-hidden rounded-2xl border border-ink-800 bg-ink-900/80">
        <div className="border-b border-ink-800 px-5 py-4 sm:px-6">
          <p className="eyebrow">Workflow map</p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            The full AirOps writing loop, from brief to publish-safe payload
          </h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-300">
            The useful version is not one giant prompt. It is a staged system: split research lanes,
            consolidation, smart outlining, section-level drafting, self-critique, optional modules, and a final SEO and AEO pass.
          </p>
        </div>

        <div className="space-y-4 px-4 py-5 sm:px-6 sm:py-6">
          <StepCard
            eyebrow="Step 1"
            title="Intake contract"
            body="Start with a typed brief: topic, angle, length, audience, brand constraints, business intent, and any fixed requirements the workflow must honor."
          />

          <Arrow label="Split research" />

          <div className="grid gap-4 md:grid-cols-2">
            <StepCard
              eyebrow="Step 2A"
              title="Internal research"
              accent="slate"
              body="Pull from Brand Kits, vector knowledge bases, product truth, audience docs, prior posts, approved examples, and safe claim boundaries."
            />
            <StepCard
              eyebrow="Step 2B"
              title="External research"
              accent="slate"
              body="Pull SERP patterns, query intent, primary docs, standards, community language, objections, and fresh supporting evidence."
            />
          </div>

          <Arrow label="Consolidate" />

          <StepCard
            eyebrow="Step 3"
            title="Research consolidation"
            accent="blue"
            body="Turn raw retrieval into one usable packet: source notes, claim support, internal and external link candidates, open questions, and query ideas for later drafting loops."
          />

          <Arrow label="Plan" />

          <StepCard
            eyebrow="Step 4"
            title="Smart outline"
            accent="sea"
            body="Build the article structure from research plus user requirements. The outline should already know likely section depth, examples, artifacts, and where modules may be useful."
          />

          <Arrow label="Draft in loops" />

          <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_260px]">
            <StepCard
              eyebrow="Step 5"
              title="Section writing loop"
              accent="blue"
              body="For each section: read the brief, generate procedural search queries, run mini-research for links or examples, draft the section, decide whether a richer block is needed, then save state for the next section."
            />

            <div className="space-y-4">
              <StepCard
                eyebrow="Loop input"
                title="Mini research"
                accent="slate"
                body="The AI determines follow-up search queries procedurally based on gaps in the current section."
              />
              <StepCard
                eyebrow="Loop state"
                title="Section memory"
                accent="slate"
                body="Earlier sections constrain later ones so the article does not repeat itself or drift."
              />
              <StepCard
                eyebrow="Loop output"
                title="Links and guidance"
                accent="slate"
                body="Internal links, external citations, examples, and practical guidance are added during drafting, not bolted on at the end."
              />
            </div>
          </div>

          <Arrow label="Critique and enrich" />

          <div className="grid gap-4 md:grid-cols-2">
            <StepCard
              eyebrow="Step 6"
              title="Self-feedback"
              accent="slate"
              body="Critique for unsupported claims, brand drift, repetition, weak transitions, missing examples, and sections that are not answer-shaped enough to survive the final pass."
            />
            <StepCard
              eyebrow="Step 7"
              title="MDX modules if applicable"
              accent="slate"
              body="Insert richer blocks only where the topic earns them: tables, checklists, comparison blocks, workbenches, or interactive modules."
            />
          </div>

          <Arrow label="Finalize" />

          <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_220px]">
            <StepCard
              eyebrow="Step 8"
              title="Final SEO and AEO pass"
              accent="sea"
              body="Check title, description, heading clarity, direct-answer structure, link coverage, metadata quality, markdown integrity, and publish safety before export."
            />
            <StepCard
              eyebrow="Output"
              title="Export"
              accent="slate"
              body="Ship a publish-safe markdown payload."
            />
          </div>

          <div className="rounded-2xl border border-ink-800 bg-ink-950/60 px-4 py-3">
            <p className="text-[11px] uppercase tracking-[0.28em] text-sky-300">What matters</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              The whole point is sequencing. Research feeds consolidation. Consolidation feeds the outline.
              The outline feeds section loops. Section loops feed self-critique. Only then do you run the final SEO and AEO pass.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
